---
layout: page
title: "PC-SIG Diskette Library (Disk #993)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0993/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0993"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "BOARD GAMES"

    A trio of classic board games.
    
    PC-PENTE is a game with its roots in the ancient game of Go.  The
    playing field is a grid and the object is simple: either get five of
    your pieces in a row or capture 10 of your opponent's pieces by
    surrounding them with your pieces.  It is assumed that you already know
    how to play the game, but in case you don't, Rules.com has a concise
    overview of the basic strategy of Pente.
    
    PYRAMIDS is a strategy game based on an ancient Egyptian theme.  You and
    the Pharaoh Cheops are vying to discover the other's pyramid before your
    own is found.  The playing pieces include sphinxes, lions, bulls, rams,
    wolves, hawks, camels, cats, antelopes and a cobra -- each with special
    powers.  You can see your opponent's pieces and your opponent can see
    yours, but you do not know the rank and power of each until one of you
    attacks the other.
    
    YAHTZEE is the classic dice game we've all played in which you try to
    collect pairs, three-of-a-kinds, full houses, and the like for points by
    rolling six dice.  From each roll, you can pick up from one to six of
    the dice and re-roll them, to try to better the score you receive for
    the roll.  Once a requirement has been filled, you cannot use that roll
    again.  The winner completes his list with the highest total score.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES.TXT

{% raw %}
```
-------------------------------------------------------------------------------
FILES.TXT - a concise list of files on the PC PENTE disk
-------------------------------------------------------------------------------

PCPENTE.COM ............ PC PENTE (Hercules version).
IBMPENTE.COM ........... PC PENTE (IBM/Tandy version).
RULES.COM .............. A concise introduction to PC PENTE.
HARDSET.BAT ............ Copies files to hard disk (C:\PCPENTE).
FILES.TXT .............. This text file.
NOTES.TXT .............. A more in-depth file listing.
ERROR.MSG .............. Error messages for Turbo Graphix Toolbox (TM).
4X6.FON ................ Turbo Graphix Toolbox (TM) font used in PC PENTE.
```
{% endraw %}

## FILES993.TXT

{% raw %}
```
Disk No  993
Program Title: BOARD GAMES
PC-SIG version 1.1
 
PC-PENTE is a game which has its roots in the ancient game of Go. The
board is constructed of solid lines which create a grid on the playing
board.  The object of Pente is simple: either get five of your pieces in a
row OR capture ten of your opponent's pieces by surrounding them with your
pieces.
 
PC-PENTE contains the logic needed to automatically check for captured
pairs, remove them from the board, and increment the players scores.  As
in the original game, when five pairs have been taken by one of the
players, the game is over.  It is also okay to form a pair between two
enemy pieces, as PC-PENTE checks if a pair was actually captured or if a
player "moved into" a capture situation, in which case the player in the
middle would not be taken.  In addition, it checks for all five-in-a-row
combinations and terminates the program if one is found.
 
PC-PENTE assumes that you already know how to play the game, but in case
you don't, RULES.COM contains a concise overview of the basic strategy of
PENTE.
 
PYRAMIDS is a strategy game based on an ancient Egyptian theme.  You and
the Pharaoh Cheops are contending to discover the other's pyramid before
yours is discovered.  You each have a set of pieces consisting of
sphinxes, lions, bulls, rams, wolves, hawks, camels, cats, antelopes, and
a cobra.  Each animal has special powers.
 
The key to this game is that you can see your opponent's pieces and your
opponent can see your pieces, but you do not know the rank and power of
your opponent's pieces until you attack or are attacked by one.  This is
also true of your opponent, who doesn't know the rank of your pieces until
he attacks.  This version of the game is the limited version and only
plays to fifty turns.
 
YAHTZEE is the classic dice game we've all played in which you try to
collect pairs, three-of-a-kinds, full houses, and the like for points by
rolling six dice.  From each roll, you may pick up from one to six of the
dice and re-roll them, to try and better the score you receive for the
roll.  Once a slot has been filled, you cannot get that roll again.  For
example, if you roll a full house, and then roll another full house, the
second full house does not supercede the first one.
 
Usage:  Entertainment.
 
System Requirements:  Yahtzee requires BASIC or GW-BASIC.
 
How to Start:  Type IBMPENTE (press enter) for the CGA version, PCPENTE
(press enter) for the Hercules version, and PYRAMIDS (press enter) to run
PYRAMIDS.
 
Suggested Registration:  $10.00 for PYRAMIDS, $10.00 for PENTE and $5.00 for
YAHTZE.
 
File Description:
 
PCPENTE  COM  Hercules graphics card version of main program.
IBMPENTE COM  CGA/Tandy version of main program.
ERROR    MSG  Error message file used by main program.
4X6      FON  Font file used by main program.
RULES    COM  Program to print the rules to the screen.
HARDSET  BAT  Copies the files to you hard disk.
NOTES    TXT  Expanded file descriptions.
FILES    TXT  Listing of PENTE files.
???????  PYR  Data files for PYRAMIDS(6 files).
MANUAL   DOC  Documentation for PYRAMIDS.
PYRAMIDS EXE  Game program.
SETUP    EXE  Configuration program
README   TXT  Documentation for YAHTZEE.
YAHTZEE  BAS  Game program.
YAHTZEE  DOC  Documentation.
 
PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987,88 PC-SIG Inc.

```
{% endraw %}

## MANUAL.DOC

{% raw %}
```











                   Pyramids User Manual Notes

                           Version 4.0


Pyramids is Shareware software.  That means you get a chance to try it
before you buy it.  If you like Pyramids, please register your copy by
sending $10 to:


                        Helios Software
                           Box 22869
                          Seattle, WA
                             98122


Pyramids took a lot of work to write, and $10 is not much to ask of
someone who wants to play it.  Your support for my efforts and the
Shareware concept is appreciated.

You are welcome to distribute unmodified disks to friends and BBS's.





                                Theme


Pyramids is a strategy game based on an ancient Egyptian theme.  You
and the pharaoh Cheops are contending to discover the other's pyramid
before your own is discovered.  You each have a set of pieces
consisting of sphinxes, lions, bulls, rams, wolves, hawks, camels,
cats, antelopes and a cobra.  Every animal has special powers:

   A sphinx remains behind to protect the pyramid.  It cannot move but
   it will defeat anything which attacks it, except a sacred cat.

   A lion, bull, ram or wolf relies on its strength.

   A hawk can fly over the animal nearest it to the space on the other
   side.

   A camel can cross directly across a desert.

   A sacred cat can use its magic to overcome a sphinx.

   An antelope can cover great distances in a single move.

   Only the cobra can defeat the lion.


                           Rules of Play


Game Board

Pyramids is played on an 11 x 11 board with two deserts in the middle.


Pieces

Each side begins with 44 pieces; Cheops' pieces are arranged along
the top of the board, while yours are along the bottom.  A piece set
consists of one pyramid, one cobra and 42 other pieces which you may
configure with the SETUP program explained below.  At the beginning
you will not know the ranks of Cheops' pieces and he will not know
yours.  The identities of pieces become known only through attacks and
by moves which are unique to specific ranks.


Objective

The winner is whoever first finds his opponent's pyramid or eliminates
all of his opponent's mobile pieces.




PYRAMIDS MANUAL                                                      1





                         Start of Game


Each side first lays out his pieces along his side of the board.  You
may decide whether Cheops' pieces should be arranged randomly or in a
strategic setup.  Random setups always position the pyramid in one of
the two back rows.  Strategic setups usually fortify the pyramid with
sphinxes.  Your setup also may be random or strategic.  For a
strategic setup you may select from a file of setups you have created
previously or create a new one.  Up to 255 strategic setups may be
stored at a time.


Movement

Cheops and you take turns, moving one piece each turn; the first turn
in the game is assigned at random.  You may move a piece forward,
backward, left or right according to these rules:

   1) The pyramid and the sphinxes cannot move.

   2) All other pieces can move along a straight line to a vacant
   square, so long as all intervening squares are vacant and the
   distance of the move is not greater than the allowable 'slide' (see
   Changing the Slide under Game Options below).

   3) An antelope (rank 8) can move through any number of vacant
   squares, regardless of the slide.

   4) A hawk can fly over an adjacent piece to an empty square on the
   other side.

   5) A camel can cross directly from one side of a desert to the
   other side.

   6) A piece resting on a 'power square' in one of the lanes can move
   directly to a vacant power square in another lane.


Attacks

An attack occurs when a piece tries to occupy the square of an
opponent piece.  These rules govern attacks:

   1)  A piece may attack an opponent piece to which it is adjacent by
   attempting to occupy its square.

   2) A hawk (rank 5) can attack an opponent piece by flying over an
   adjacent piece.




PYRAMIDS MANUAL                                                      2





                      Resolution of Attacks


Attacks are resolved according to these rules:

   1) Any piece can capture the pyramid.

   2) An attacking piece can defeat any numeric piece of greater or
   equal number.

   3) A cat (rank 7) can overpower a sphinx.

   4) The cobra can defeat the lion (rank 1) if it attacks; any piece,
   including the lion, can defeat the cobra by attacking it.

The losing piece is removed from the board.  If the attacker wins, it
immediately occupies the square of the loser; if the defender wins,
it remains in place.  The identity of the winning piece is revealed to
the opponent (except see Hiding Attacks in Game Options below).


Move Repetition

No piece may move from square A to square B and then back to square A
in three consecutive moves.


End of Game

When the game has ended you will be given the opportunity to watch
the game be replayed automatically.  You can watch the entire replay
or press <ESC> to stop the replay.  Then, you can either begin a new
game or exit Pyramids to the DOS prompt.




















PYRAMIDS MANUAL                                                      3





                          Game Options


Changing the Level (Function Key 1)

Cheops can play at four skill levels; level '1' is the lowest and
level '4' is the highest.  At higher levels Cheops examines his moves
in greater depth, and so is better able to find effective attack
combinations and to direct his pieces against squares where your
pyramid may be located.  Approximate timings for moves on an AT
personal computer follow:

        ...................................................
        .                                                 .
        .                     L  E  V  E  L               .
        .              1       2        3        4        .
        .          ...................................    .
        .          .       .        .        .       .    .
        .    S  1  .   1   .   1    .   2    .   8   .    .
        .          .       .        .        .       .    .
        .    L     ...................................    .
        .          .       .        .        .       .    .
        .    I  2  .   1   .   1    .   3    .  12   .    .
        .          .       .        .        .       .    .
        .    D     ...................................    .
        .          .       .        .        .       .    .
        .    E  3  .   1   .   2    .   4    .  16   .    .
        .          .       .        .        .       .    .
        .          ...................................    .
        .                    Times in seconds             .
        .                                                 .
        ...................................................

While Cheops is thinking, you can terminate his search process by
pressing any key; Cheops will select the best move he has found thus
far.  Although Cheops looks at his most promising moves first (just as
you do), he performs a depth-first search on them, that is, he
examines each move sequence in detail before looking at the next move.
If Cheops' actual best move is not among the first that he looks at,
terminating a search too quickly at a high skill level could actually
yield a worse move than would the same amount of time at a lower
level.

It is best to use the search termination feature when you have waited
at least one-fourth the normal time required for the skill level-slide
settings.  This gives Cheops a chance to find a good move in a short
time while freeing you from waiting longer while he looks for a
surprise game buster.  The Watching the Move Selection Process option
(Function Key 6) explained below allows you see how long it usually
takes Cheops to find his best move.



PYRAMIDS MANUAL                                                      4





Changing the Slide (Function Key 2)

The slide determines the number of vacant squares across which pieces
can move.  The slide can be set from one to three squares.  Antelopes
have an unlimited slide and are not affected by this option.

The setting of the slide has a profound influence on the style of
play.  With the slide set at '1', the lanes between the deserts in the
middle of the board can be protected by a single powerful piece; no
piece of lesser or equal rank can get by it.  With the slide set at
'2' or '3' the lanes are much more difficult to control, with the
result that games are more wide-open and aggressive.


Hiding Attacks (Function Key 3)

When this option is set, the identity of Cheops' pieces remain
concealed if they win an attack, except for sphinxes and the cobra.
All you learn is that they were powerful enough to win.  This is an
advanced option for players who are confident of their skill.


Hiding Cheops' Pieces (Function Key 4)

With this option, Cheops' pieces are displayed only while they are
moving; at all other times, they are invisible.  This option, combined
with Level 1 and Slide 3, creates a fast, 'arcade-like' game with lots
of surprises.


Controlling the Sound Effects (Function Key 5)

Normally, sound effects are played during the game to signal attacks,
captures and special moves, and error bells are rung after illegal
keyboard entry.  This option may be switched on or off with the F5
function key.


Watching the Move Selection Process (Function Key 6)

You can watch while Cheops selects his next move by activating this
option.  The board will come alive as Cheops considers all important
move combinations.  Initial and final scores for each move are
displayed in the message box on the left, while intermediary scores
for each level of the move are shown on the bottom line.  The message
box on the right shows the current best move and its score.







PYRAMIDS MANUAL                                                      5





Loading a Saved Game (Function Key 7)

At any time you can stop playing the current game and load an
unfinished game that you had saved previously.  Type in the name of
the game you want to finish.  After the game is complete it will be
erased from the disk.  (Also see Command Line Parameters below.)


Saving the Current Game (Function Key 8)

This option allows you to save the game in progress to finish at
another time.  Type in the name under which to save the game.  Saved
games are assigned the extension .GAM.


Starting a New Game (Function Key 9)

If you don't want to finish the current game, you can start a new one
with this option.


Quitting the Current Game (Function Key 10)

Press <F10> at any time to quit the game you are playing and return to
the DOS prompt.  If you have not first saved the current game, you
will be given the opportunity to do so.



























PYRAMIDS MANUAL                                                      6





                          The Setup Program

Program SETUP allows you to configure the piece sets, colors (if you
have a color monitor) and display speed.  Run SETUPS before you start
program PYRAMIDS to change these configurations.


Configuring the piece set

You can decide how many sphinxes, lions, rams, etc. you want to have
for your side and for Cheops' side.  Simply add and subtract from each
piece rank, making sure that you finish with a surplus of zero for
each side.  There must be one pyramid and one cobra on each side.

The new configuration will be used for random setups in new games and
for new strategic setups you create.  All of Cheops' strategic setups
are based on the original configuration.


Configuring the colors (color monitor only)

The display shows a sample game position with the current color
configuration.  Press the function keys as indicated to cycle through
the colors available to find a combination you like and then save the
changes.  All subsequent games you play will use the new colors.


Configuring the display speed

You can change the speed at which the display updates piece movements,
messages and so forth.  Set the speed faster or slower and then save
the change.  When you next run PYRAMIDS it will use the new speed.

This configuration affects only the display speed.  Set the skill
level for each game to determine Cheops' movement selection speed.


















PYRAMIDS MANUAL                                                      7





                        Move Selection Algorithm


Pyramids uses a recursive min-max move selection algorithm with tree
pruning on refutation.  For each level, all legal moves are assigned
initial values based on a criterion list.  At levels above the
terminal nodes of the tree, the moves are sorted by these initial
values; moves are then selected for recursion which are deemed to be
'hot' (attacks and so forth) or which have the highest initial values.

Cheops' moves in the recursion are evaluated according to his
perception of the board, including inferences made about your unknown
pieces.  Your moves in the recursion are evaluated according to
Cheops' inferences about your perception of the board, including both
his inferences about your unknown pieces and inferences you might have
made about Cheops' unknown pieces.  In other words, Cheops never knows
more about your pieces than a human opponent would.

This two-layered uncertainty creates unique problems for a computer
solution to Pyramids.  At times Cheops must infer that you will make a
bad move without himself being fooled by your high assessment of it.
Therefore, the min-max algorithm is modified to return not only a
maximum value for each node, but also both the extent to which the
parent of that node perceives the child to have been fooled by the
selected best move ('He thinks he'll win the attack, but I know
better.') and the extent to which the child's child (and thus the
parent, who is the same player) was fooled ('My child thinks he'll win
the attack.  I know better, but I'm not telling my parent, only my
grandparent.')  In the peculiar genetics of the min-max world, players
are reborn as their own grandchildren, in perpetual competition with
their children, who are reborn as their grandchildren.

Inferences made about your pieces are probabilistic in nature.  If you
aggressively move an unknown piece against one of Cheops' pieces,
sometimes he will assume you are in earnest and sometimes he will call
your bluff.  If he does back off, at some point he will change his
mind and come after your piece to find out what it really is.

Cheops' depth of search is the user-selected skill level plus one,
that is, a maximum of three moves.  However, the game of Pyramids
requires a sense of the board which goes much deeper than three moves
ahead.  To achieve this vision over distance without full-depth
recursion, Cheops draws a 'force field' over the board which attracts
pieces of various ranks according to the positions of your pieces.
This is similar to the process you employ in moving a piece 'closer'
to where you think Cheops' pyramid is.







PYRAMIDS MANUAL                                                      8





                         System Requirements


IBM PC, PC Jr, XT, AT, PS/2 or true compatible with at least:

	one floppy disk drive
	256 KB memory
	monochrome or color monitor
	DOS 2.0 or higher.


                        Command Line Parameters


Pyramids may be started from the DOS prompt in these ways:

   1) Type: PYRAMIDS.  This starts a new game.

   2) Type: PYRAMIDS <filename>.  This resumes the game saved under
   <filename>

   3) Type: PYRAMIDS /NM.  This turns off all sound effects at the
   beginning of the program.

   4) Type: PYRAMIDS /NH.  This turns off the help messages which
   describe the pieces.

Any combination of these parameters may be used.


                               File Extensions


File extensions have these meanings:

   .EXE	     program file
   .PYR	     internal data files
   .GAM	     saved game.















PYRAMIDS MANUAL                                                      9

```
{% endraw %}

## NOTES.TXT

{% raw %}
```
-------------------------------------------------------------------------------
NOTES.TXT - some notes on each file on the disk and when they should be used.
-------------------------------------------------------------------------------

What follows is a more in-depth description of the files on this disk.

PCPENTE.COM ............ This is the Hercules version of PC PENTE.  A Hercules
                         (or compatible) graphics card must be present in the
                         computer for this program to operate properly.
IBMPENTE.COM ........... This is the IBM version of PC PENTE.  While it is
                         still in monochrome, the program is compatible with
                         IBM CGA as well as several other popular monitors,
                         such as the monochrome and color Tandys.  As a rule
                         of thumb, try this version of the program first if
                         you are unsure as to what kind of graphics card is
                         present in your system.
ERROR.MSG .............. This contains the list of possible error messages
                         for use with Borland's Turbo Graphix Toolbox (TM).
4X6.FON ................ This contains the specialized font that PC PENTE uses
                         in its initial and terminal graphics screens.  As
                         with ERROR.MSG, this program is also provided in
                         Turbo Graphix Toolbox (TM).
RULES.COM .............. This program lists a concise set of rules for playing
                         PC PENTE.  Additional reading for the novice is sug-
                         gested.
FILES.TXT .............. This is a concise listing of the files on this disk.
NOTES.TXT .............. This is the text file containing what you are reading.
HARDSET.BAT ............ This file creates a subdirectory on your hard disk
                         (C:\PCPENTE) and copies all of the necessary files to
                         that subdirectory.
```
{% endraw %}

## README.TXT

{% raw %}
```
                               HELLO YAHTZEE FANS                               
                                                                                
     Welcome, This game is version 2.  It uses the text screen only.  You can   
                                                                                
play with up to 4 players and up to six games each before restarting the        
                                                                                
game.  This game has two files.  Yahtzee.Bas, the game program, and Yahtzee.Doc 
                                                                                
which is the instructions for the game.  The Yahtzee.Doc file is called from    
                                                                                
within the program, but it can also be read with LIST.COM, if you have it, or   
                                                                                
use the MS-DOS command TYPE with the MORE piping filter.                        
                                                                                
                                                                                
     This YAHTZEE.BAS game was originally developed on a Tandy 1000SX using DOS 
                                                                                
3.2 and Tandy's GWBASIC version 3.2.  It was tested on A.T.&T.'s GWBASIC version
                                                                                
2.02 ans Compaq's GWBASIC version 1.15 and could not generate any errors.       
                                                                                
                         Thank you, have a nice day.                            
                                                                                
                            ╔═══════════╗                                       
                            ║ Ray Abbey ║                                       
                            ╚═══════════╝                                       
```
{% endraw %}

## YAHTZEE.BAS

{% raw %}
```bas
5 GOTO 10
7 SAVE"YAHTZEE.BAS":END
10 SCREEN 0,1,0
20 KEY OFF:WIDTH 80:CLS
30 FOR I = 1 TO 14
40 IF I=8 THEN 250
50 COLOR I
60 LOCATE 2,1
70 PRINT CHR$(201);STRING$(78,205);CHR$(187)
80 FOR ROW = 3 TO 13
90      LOCATE ROW,1:PRINT CHR$(186);:LOCATE ROW,80 :PRINT CHR$(186);
100 NEXT ROW
110 LOCATE 14,1
120 PRINT CHR$(200);STRING$(78,205);CHR$(188)
130 ABB$="Abbey & Son Software":ADD$="530 Troy Dr. #1"
140 CIT$="San Jose, CA. 95117-1354":TEL$="(408) 984-4947"
150 COP$="Copyright June & November 1987 By Ray Abbey"
160 TAK$="Please send $5.00 registration fee to Abbey & Son Software"
170 TAK2$="to recieve updates or fixes, as available, for one year."
180 LOCATE 4,(40-(LEN(ABB$)/2)):PRINT ABB$;
190 LOCATE 6,(40-(LEN(ADD$)/2)):PRINT ADD$;
200 LOCATE 8,(40-(LEN(CIT$)/2)):PRINT CIT$;
210 LOCATE 10,(40-(LEN(TEL$)/2)):PRINT TEL$;
220 LOCATE 12,(40-(LEN(COP$)/2)):PRINT COP$;
230 LOCATE 16,(80-LEN(TAK$))/2:PRINT TAK$;
240 LOCATE 18,(80-LEN(TAK2$))/2:PRINT TAK2$;
250 NEXT I
260 GOSUB 8140
270 LOCATE 20,27:PRINT "Press any key to continue."
280 K$=INKEY$:IF K$="" THEN 280
290 COLOR 2
300 IF LEN(INKEY$) THEN 300
310 CLEAR,,1000
320 WIDTH 40
330 FR1=17000:FR2=18000:FR3=19000:DU=3:VO=15:SW=1
340 DIM PLAYR$(4),TOTAL(4),KEEP(6,4),CHECK$(13)
350 DIM A(13),B(13),C(13),E(13)
360 DIM BLANK(50,50),WINNER(6,4)
370 CHECK$(1)="ACES":CHECK$(2)="TWOS":CHECK$(3)="THREES"
380 CHECK$(4)="FOURS":CHECK$(5)="FIVES":CHECK$(6)="SIXES"
390 CHECK$(7)="3 OF A KIND":CHECK$(8)="4 OF A KIND":CHECK$(9)="FULL HOUSE"
400 CHECK$(10)="SMALL STRAIGHT":CHECK$(11)="LARGE STRAIGHT"
410 CHECK$(12)="YAHTZEE":CHECK$(13)="CHANCE"
420 KEY(10) ON
430 KEY(9) ON
440 KEY(8) ON
450 ON KEY(10) GOSUB 7200
460 ON KEY(9) GOSUB 8170
470 ON KEY(8) GOSUB 8610
480 COLOR 6,0
490 VER$="PC YAHTZEE version 2.0"
500 COLOR 2
510 LOCATE 1,(40-LEN(VER$))/2:PRINT VER$;
520 PRINT:PRINT:COLOR 6,0
530 PRINT "█     █ █████ █████ █████ █████ █████"
540 PRINT "█     █ █   █   █      ▐▌ █     █    "
550 PRINT "█     █ █   █   █      █  █     █    "
560 PRINT "███████ █████   █     ▐▌  ███   ███  "
570 PRINT "   █    █   █   █    ▐▌   █     █    "
580 PRINT "   █    █   █   █   ▐▌    █     █    "
590 PRINT "   █    █   █   █   █████ █████ █████"
600 PRINT
610 TR1$="Trademark Registered":TR2$="E. S. Lowe Company, Inc.":TR3$="200 Fifth Avenue":TR4$="New York, N.Y. 10010"
620 FUN$=" - Hot Keys - "
630 FUN1$="F8=Select Verify On/Off"
640 FUN2$="F9=Sound On/Off  F10=Quit"
650 COLOR 4
660 LOCATE 12,(40-LEN(TR1$))/2:PRINT TR1$;
670 COLOR 5
680 LOCATE 13,(40-LEN(TR2$))/2:PRINT TR2$;
690 COLOR 9
700 LOCATE 14,(40-LEN(TR3$))/2:PRINT TR3$;
710 COLOR 10
720 LOCATE 15,(40-LEN(TR4$))/2:PRINT TR4$;
730 COLOR 12
740 LOCATE 17,(40-LEN(FUN$))/2:PRINT FUN$;
750 COLOR 11
760 LOCATE 18,(40-LEN(FUN1$))/2:PRINT FUN1$;
770 COLOR 13
780 LOCATE 19,(40-LEN(FUN2$))/2:PRINT FUN2$;
790 F24$="\                       \"
800 F40$="\                                      \"
810 F80$="\                                                                              \"
820 QUE$="Do you wish instructions? (Y/N)"
830 GOSUB 8140
840 COLOR 6
850 LOCATE 22,(40-LEN(QUE$))/2:PRINT QUE$;
860 K$=INKEY$:IF K$="y" OR K$="Y" THEN GOSUB 9300:GOTO 890
870 IF K$="n" OR K$="N" THEN 900
880 GOTO 860
890 WIDTH 40:COLOR 4
900 FOR I=12 TO 22
910 LOCATE I,1
920 PRINT STRING$(40,32);
930 NEXT I
940 LOCATE 12,1
950 GOSUB 8140
960 PRINT "Player One - Enter first name, Please   ";
970 INPUT;"Six letters maximum- ",PL1$
980 PLAYR$(1)=LEFT$(PL1$,6)
990 IF LEFT$(PL1$,1)="" THEN 940
1000 LOCATE 15,1
1010 PRINT "Player Two - Enter first name, Please   ";
1020 GOSUB 8140
1030 INPUT;"Six letters maximum- ",PL2$
1040 IF LEFT$(PL2$,1)="" THEN PLAYERS = 1:GOTO 1190
1050 PLAYR$(2)=LEFT$(PL2$,6)
1060 LOCATE 18,1
1070 PRINT "Player Three-Enter first name, Please   ";
1080 GOSUB 8140
1090 INPUT;"Six letters maximum- ",PL3$
1100 IF LEFT$(PL3$,1)="" THEN PLAYERS = 2:GOTO 1190
1110 PLAYR$(3)=LEFT$(PL3$,6)
1120 LOCATE 21,1
1130 PRINT "Player Four -Enter first name, Please   ";
1140 GOSUB 8140
1150 INPUT;"Six letters maximum- ",PL4$
1160 IF LEFT$(PL4$,1)="" THEN PLAYERS = 3:GOTO 1190
1170 PLAYR$(4)=LEFT$(PL4$,6)
1180 PLAYERS = 4
1190 LOCATE 12,1
1200 FOR I=1 TO 12
1210    PRINT STRING$(40,32);
1220 NEXT I
1230 GOTO 1260
1240 SCREEN 0,1,0:WIDTH 40:COLOR 6'Second thru sixth game starts here
1250 FIRST=0:SECOND=0:THIRD=0:FOURTH=0
1260 COLOR 11:LOCATE 12,5
1270 PRINT "Player number one is  : ";PLAYR$(1);
1280 FOR I=1 TO 13
1290    A(I)=0:NEXT I
1300 IF PLAYERS = 1 THEN 1450
1310 LOCATE 14,5
1320 PRINT "Player number two is  : ";PLAYR$(2);
1330 FOR I=1 TO 13
1340    B(I)=0:NEXT I
1350 IF PLAYERS = 2 THEN 1450
1360 LOCATE 16,5
1370 PRINT "Player number three is: ";PLAYR$(3);
1380 FOR I=1 TO 13
1390    C(I)=0:NEXT I
1400 IF PLAYERS = 3 THEN 1450
1410 LOCATE 18,5
1420 PRINT "Player number four is : ";PLAYR$(4);
1430 FOR I=1 TO 13
1440    E(I)=0:NEXT I
1450 LOCATE 20,6
1460 PRINT "Are we ready to play? (Y/N) ";
1470 GOSUB 8140
1480 K$=INKEY$
1490 IF K$="Y" OR K$="y" THEN 1650
1500 IF K$="N" OR K$="n" THEN 1520
1510 GOTO 1480
1520 IF GAME=0 THEN 890
1530 'Add new players
1540 LOCATE 21,4:IF LEN(INKEY$) THEN 1540
1550 PRINT "Do you wish to add players? (Y/N)"
1560 K$=INKEY$:IF K$="N" OR K$="n" THEN 1650
1570 IF K$="" THEN 1560
1580 CLS:IF LEN(INKEY$) THEN 1580
1590 IF PLAYERS=1 THEN 1000
1600 IF PLAYERS=2 THEN 1060
1610 IF PLAYERS=3 THEN 1120
1620 LOCATE 23,4
1630 PRINT "Four players maximum, thank you."
1640 FOR WA =1 TO 3000:NEXT WA
1650 'insert screen set-up here
1660 WIDTH 80
1670 'SCORE SHEET
1680 '
1690 COLOR 2,0
1700 IF LEN(INKEY$) THEN 1700
1710 LOCATE 1,1
1720 IF PLAYERS=1 THEN PRINT "  YAHTZEE       PLAYER  ";
1730 IF PLAYERS=2 THEN PRINT "  YAHTZEE       PLAYER  PLAYER  ";
1740 IF PLAYERS=3 THEN PRINT "  YAHTZEE       PLAYER  PLAYER  PLAYER ";
1750 IF PLAYERS=4 THEN PRINT "  YAHTZEE       PLAYER  PLAYER  PLAYER  PLAYER ";
1760 LOCATE 2,1
1770 IF PLAYERS=1 THEN PRINT "UPPER SECTION     #1   ";
1780 IF PLAYERS=2 THEN PRINT "UPPER SECTION     #1      #2   ";
1790 IF PLAYERS=3 THEN PRINT "UPPER SECTION     #1      #2      #3   ";
1800 IF PLAYERS=4 THEN PRINT "UPPER SECTION     #1      #2      #3      #4   ";
1810 LOCATE 3,1
1820 COLOR 13
1830 PRINT "1";:COLOR 2:PRINT "> ACES";
1840 LOCATE 4,1
1850 COLOR 13
1860 PRINT "2";:COLOR 2:PRINT "> TWOS";
1870 LOCATE 5,1
1880 COLOR 13
1890 PRINT "3";:COLOR 2:PRINT "> THREES";
1900 LOCATE 6,1
1910 COLOR 13
1920 PRINT "4";:COLOR 2:PRINT "> FOURS";
1930 LOCATE 7,1
1940 COLOR 13
1950 PRINT "5";:COLOR 2:PRINT "> FIVES";
1960 LOCATE 8,1
1970 COLOR 13
1980 PRINT "6";:COLOR 2:PRINT "> SIXES";
1990 LOCATE 9,1
2000 PRINT "Totals";
2010 LOCATE 10,1
2020 PRINT "Bonus if > 62";
2030 LOCATE 11,1
2040 PRINT "Total w/Bonus";
2050 LOCATE 12,1
2060 IF PLAYERS=1 THEN PRINT "LOWER SECTION     #1   ";
2070 IF PLAYERS=2 THEN PRINT "LOWER SECTION     #1      #2   ";
2080 IF PLAYERS=3 THEN PRINT "LOWER SECTION     #1      #2      #3   ";
2090 IF PLAYERS=4 THEN PRINT "LOWER SECTION     #1      #2      #3      #4   ";
2100 LOCATE 13,1
2110 COLOR 13
2120 PRINT "7";:COLOR 2:PRINT "> 3 of a Kind";
2130 LOCATE 14,1
2140 COLOR 13
2150 PRINT "8";:COLOR 2:PRINT "> 4 of a Kind";
2160 LOCATE 15,1
2170 COLOR 13
2180 PRINT "9";:COLOR 2:PRINT "> Full House";
2190 LOCATE 16,1
2200 COLOR 13
2210 PRINT "A";:COLOR 2:PRINT "> Sm Straight";
2220 LOCATE 17,1
2230 COLOR 13
2240 PRINT "B";:COLOR 2:PRINT "> Lg Straight";
2250 LOCATE 18,1
2260 COLOR 13
2270 PRINT "C";:COLOR 2:PRINT "> YAHTZEE";
2280 LOCATE 19,1
2290 COLOR 13
2300 PRINT "D";:COLOR 2:PRINT "> Chance";
2310 LOCATE 20,1
2320 PRINT "Lower Total";
2330 LOCATE 21,1
2340 PRINT "Upper Total";
2350 LOCATE 22,1
2360 PRINT "GRAND TOTAL";
2370 FOR I=3 TO 22
2380    BORDER$="|"
2390    IF I=9 OR I=10 OR I=11 OR I=20 OR I=21 OR I=22 THEN COLOR 12:BORDER$="╪"
2400    LOCATE I,15:PRINT BORDER$;
2410    LOCATE I,23:PRINT BORDER$;
2420    IF PLAYERS=1 THEN 2480
2430    LOCATE I,31:PRINT BORDER$;
2440    IF PLAYERS=2 THEN 2480
2450    LOCATE I,39:PRINT BORDER$;
2460    IF PLAYERS=3 THEN 2480
2470    LOCATE I,47:PRINT BORDER$;
2480    COLOR 2:BORDER$="|"
2490 NEXT I
2500 'module to place dice on screen
2510 GOSUB 3940:COLOR 9,4
2520 LOCATE 15,49
2530 PRINT CHR$(201);:FOR I=1 TO 5
2540 PRINT STRING$(5,205);CHR$(203);
2550 NEXT:LOCATE CSRLIN,POS(C)-1
2560 PRINT CHR$(187);:ROW=15:COL=49
2570 FOR X=1 TO 3:LOCATE ROW+X,COL:FOR I=49 TO 80 STEP 6
2580 LOCATE ROW+X,I:PRINT CHR$(186);
2590 NEXT:NEXT:LOCATE 19,49
2600 PRINT CHR$(200);:FOR I=1 TO 5
2610 PRINT STRING$(5,205);CHR$(202);
2620 NEXT :LOCATE CSRLIN,POS(C)-1:PRINT CHR$(188);
2630 COLOR 2,0:LOCATE 20,51:FOR I=1 TO 5
2640 PRINT I;"   ";
2650 NEXT                                                  
2660 GOSUB 3940
2670 LOCATE 6,50
2680 PRINT "F10-Quit";
2690 GOSUB 8170:GOSUB 8610
2700 GOSUB 8170:GOSUB 8610
2710 '
2720 GOSUB 3950
2730 FOR TURN = 1 TO 13
2740    FOR PLAYER = 1 TO PLAYERS
2750       GOSUB 3940:COLOR 0,4
2760       LOCATE 16,50:C=50:GOSUB 9680
2770       LOCATE 16,56:C=56:GOSUB 9680
2780       LOCATE 16,62:C=62:GOSUB 9680
2790       LOCATE 16,68:C=68:GOSUB 9680
2800       LOCATE 16,74:C=74:GOSUB 9680
2810       COLOR 2,0
2820       LOCATE 11,62:PRINT "Player";
2830       COLOR 14,0
2840       LOCATE 12,62:PRINT USING "\    \";PLAYR$(PLAYER);
2850       COLOR 2,0
2860       GOSUB 3950
2870       LOCATE 25,10
2880       PRINT "It's your turn ";PLAYR$(PLAYER);", press any key to roll the dice.";
2890       GOSUB 8140
2900       K$=INKEY$:IF K$="" THEN 2900
2910       GOSUB 8580
2920       IF LEN(INKEY$) THEN 2920
2930       COLOR 0,4:GOSUB 3310:COLOR 2,0:GOSUB 4810:GOSUB 5090:GOSUB 4530:GOSUB 3960
2940       GOSUB 3950
2950    NEXT PLAYER
2960 NEXT TURN
2970 IF T4 > T14 AND T4 > T24 AND T4 >T34 THEN 3010 'Player 1 winner
2980 IF T14 > T4 AND T14 > T24 AND T14 >T34 THEN 3060 'Player 2 winner
2990 IF T24 > T4 AND T24 > T14 AND T24 >T34 THEN 3110 'Player 3 winner
3000 IF T34 > T4 AND T34 > T14 AND T34 >T24 THEN 3160 'Player 4 winner
3010 GOSUB 8580
3020 LOCATE 25,26
3030 PRINT "  You are the winner, ";PLAYR$(1);
3040 GOSUB 8330:WIN=1:GOSUB 8560
3050 GOTO 3210
3060 GOSUB 8580
3070 LOCATE 25,26
3080 PRINT "  You are the winner, ";PLAYR$(2);
3090 GOSUB 8330:WIN=2:GOSUB 8560
3100 GOTO 3210
3110 GOSUB 8580
3120 LOCATE 25,26
3130 PRINT "  You are the winner, ";PLAYR$(3);
3140 GOSUB 8330:WIN=3:GOSUB 8560
3150 GOTO 3210
3160 GOSUB 8580
3170 LOCATE 25,26
3180 PRINT "  You are the winner, ";PLAYR$(4);
3190 GOSUB 8330:WIN=4:GOSUB 8560
3200 GOTO 3210
3210 LOCATE 24,25
3220 PRINT "How about another game? (Y/N)";
3230 GOSUB 8140
3240 K$=INKEY$:IF K$="Y" OR K$="y" THEN GOTO 3270
3250 IF K$="N" OR K$="n" THEN GAME=GAME+1:GOSUB 7380:GOTO 7280
3260 GOTO 3240
3270 GAME=GAME+1
3280 IF LEN(INKEY$) THEN 3280
3290 GOSUB 7380
3300 GOTO 1240
3310 GOSUB 3940 'module to roll dice
3320 RANDOMIZE ((RND*1000)+1)
3330 COLOR 0,4
3340 GOSUB 3540:GOSUB 8070:GOSUB 3580:GOSUB 8070:GOSUB 3620:GOSUB 8070:GOSUB 3660:GOSUB 8070:GOSUB 3700
3350 GOSUB 3950:LOCATE 25,15
3360 DICE$="":IF LEN(INKEY$) THEN 3360
3370 GOSUB 8140:COLOR 2,0
3380 PRINT "Enter dice to reroll (12345) Second Roll- Press 'R' to Roll";
3390 GOSUB 3940:GOSUB 9190
3400 COLOR 2,0:GOSUB 8580
3410 IF DICE$="" THEN 3530
3420 GOSUB 9060
3430 COLOR 2,0:GOSUB 8580
3440 DICE$="":IF LEN(INKEY$) THEN 3440
3450 LOCATE 25,15
3460 GOSUB 8140
3470 PRINT "Enter dice to reroll (12345) Third Roll- Press 'R' to Roll";
3480 GOSUB 3940:GOSUB 9190
3490 COLOR 2,0:GOSUB 8580
3500 IF DICE$="" THEN 3530
3510 GOSUB 9060
3520 COLOR 2,0:GOSUB 8580
3530 RETURN
3540 ONE=INT(RND*6+1):D=0
3550 IF ONE <1 OR ONE >6 THEN 3540
3560 ON ONE GOSUB 3740,3750,3760,3770,3780,3790
3570 RETURN
3580 TWO=INT(RND*6+1):D=6
3590 IF TWO <1 OR TWO >6 THEN 3580
3600 ON TWO GOSUB 3740,3750,3760,3770,3780,3790
3610 RETURN
3620 THREE=INT(RND*6+1):D=12
3630 IF THREE <1 OR THREE >6 THEN 3620
3640 ON THREE GOSUB 3740,3750,3760,3770,3780,3790
3650 RETURN
3660 FOUR=INT(RND*6+1):D=18
3670 IF FOUR <1 OR FOUR >6 THEN 3660
3680 ON FOUR GOSUB 3740,3750,3760,3770,3780,3790
3690 RETURN
3700 FIVE=INT(RND*6+1):D=24
3710 IF FIVE <1 OR FIVE >6 THEN 3700
3720 ON FIVE GOSUB 3740,3750,3760,3770,3780,3790
3730 RETURN
3740 GOSUB 3800 :RETURN 'for snake eye
3750 GOSUB 3860:GOSUB 3880:RETURN ' two
3760 GOSUB 3860:GOSUB 3880:GOSUB 3800:RETURN 'three
3770 GOSUB 3860:GOSUB 3880:GOSUB 3900:GOSUB 3920:RETURN 'four
3780 GOSUB 3800:GOSUB 3860:GOSUB 3880:GOSUB 3900:GOSUB 3920:RETURN 'five
3790 GOSUB 3820:GOSUB 3840:GOSUB 3860:GOSUB 3880:GOSUB 3900:GOSUB 3920:RETURN 'six
3800 LOCATE 17,52+D ' used as 1 3 5
3810 PRINT CHR$(237);:RETURN
3820 LOCATE 17,50+D ' used as 6
3830 PRINT CHR$(237);:RETURN
3840 LOCATE 17,54+D ' used as 6
3850 PRINT CHR$(237);:RETURN
3860 LOCATE 18,50+D ' used as 2 3 4 5 6
3870 PRINT CHR$(237);:RETURN
3880 LOCATE 16,54+D ' used as 2 3 4 5 6
3890 PRINT CHR$(237);:RETURN
3900 LOCATE 18,54+D ' used as 4 5 6
3910 PRINT CHR$(237);:RETURN
3920 LOCATE 16,50+D ' used as 4 5 6
3930 PRINT CHR$(237);:RETURN
3940 RETURN
3950 RETURN
3960 T1=0:T11=0:T21=0:T31=0:T3=0:T13=0:T23=0:T33=0
3970 FOR I=1 TO 6 'RECALC ALL TOTALS-ALL PLAYERS
3980    T1=T1+A(I)
3990    T11=T11+B(I)
4000    T21=T21+C(I)
4010    T31=T31+E(I)
4020 NEXT I
4030 GOSUB 3940
4040 T2=T1:T12=T11:T22=T21:T32=T31
4050 IF T1>62 THEN T2=T1+35:LOCATE 10,19:PRINT "35";
4060 IF T11>62 THEN T12=T11+35:LOCATE 10,27:PRINT "35";
4070 IF T21>62 THEN T22=T21+35:LOCATE 10,35:PRINT "35";
4080 IF T31>62 THEN T32=T31+35:LOCATE 10,43:PRINT "35";
4090 FOR I=7 TO 13
4100    T3=T3+A(I)
4110    T13=T13+B(I)
4120    T23=T23+C(I)
4130    T33=T33+E(I)
4140 NEXT I
4150 T4=T3+T2+T5
4160 T14=T13+T12+T15
4170 T24=T23+T22+T25
4180 T34=T33+T32+T35
4190 GOSUB 3940
4200 BORD$="  ╪ "
4210 IF PLAYERS=1 THEN FORMAT$="####"
4220 IF PLAYERS=2 THEN FORMAT$="####"+BORD$+"####"
4230 IF PLAYERS=3 THEN FORMAT$="####"+BORD$+"####"+BORD$+"####"
4240 IF PLAYERS=4 THEN FORMAT$="####"+BORD$+"####"+BORD$+"####"+BORD$+"####"
4250 COLOR 12
4260 LOCATE 9,17
4270 IF PLAYERS=1 THEN PRINT USING FORMAT$;T1;
4280 IF PLAYERS=2 THEN PRINT USING FORMAT$;T1,T11;
4290 IF PLAYERS=3 THEN PRINT USING FORMAT$;T1,T11,T21;
4300 IF PLAYERS=4 THEN PRINT USING FORMAT$;T1,T11,T21,T31;
4310 LOCATE 11,17
4320 IF PLAYERS=1 THEN PRINT USING FORMAT$;T2;
4330 IF PLAYERS=2 THEN PRINT USING FORMAT$;T2,T12;
4340 IF PLAYERS=3 THEN PRINT USING FORMAT$;T2,T12,T22;
4350 IF PLAYERS=4 THEN PRINT USING FORMAT$;T2,T12,T22,T32;
4360 LOCATE 20,17
4370 IF PLAYERS=1 THEN PRINT USING FORMAT$;T3;
4380 IF PLAYERS=2 THEN PRINT USING FORMAT$;T3,T13;
4390 IF PLAYERS=3 THEN PRINT USING FORMAT$;T3,T13,T23;
4400 IF PLAYERS=4 THEN PRINT USING FORMAT$;T3,T13,T23,T33;
4410 LOCATE 21,17
4420 IF PLAYERS=1 THEN PRINT USING FORMAT$;T2;
4430 IF PLAYERS=2 THEN PRINT USING FORMAT$;T2,T12;
4440 IF PLAYERS=3 THEN PRINT USING FORMAT$;T2,T12,T22;
4450 IF PLAYERS=4 THEN PRINT USING FORMAT$;T2,T12,T22,T32;
4460 LOCATE 22,17
4470 IF PLAYERS=1 THEN PRINT USING FORMAT$;T4;
4480 IF PLAYERS=2 THEN PRINT USING FORMAT$;T4,T14;
4490 IF PLAYERS=3 THEN PRINT USING FORMAT$;T4,T14,T24;
4500 IF PLAYERS=4 THEN PRINT USING FORMAT$;T4,T14,T24,T34;
4510 COLOR 2
4520 RETURN
4530 'PRINT SCORES TO SCREEN
4540 IF PLAYER =1 THEN COL = 18
4550 IF PLAYER =2 THEN COL = 26
4560 IF PLAYER =3 THEN COL = 34
4570 IF PLAYER =4 THEN COL = 42
4580 IF PLAYER <1 OR PLAYER>4 THEN END
4590 GOSUB 3940
4600 POST=SELECT
4610 LOCATE 2,COL-1
4620 COLOR 14,0
4630 PRINT USING "\    \"; PLAYR$(PLAYER);
4640 COLOR 2,O
4650 ROW = POST + 2
4660 IF POST > 6 THEN ROW = POST + 6
4670 LOCATE ROW,COL
4680 PRINT USING "###";SCORE;
4690 ON PLAYER GOSUB 4710,4730,4750,4770
4700 GOTO 4790
4710 A(POST)=SCORE
4720 RETURN
4730 B(POST)=SCORE
4740 RETURN
4750 C(POST)=SCORE
4760 RETURN
4770 E(POST)=SCORE
4780 '
4790 SCORE=0
4800 RETURN
4810 'Get select from player
4820 NO=0
4830 GOSUB 3950
4840 LOCATE 25,16
4850 COLOR 4,0
4860 PRINT PLAYR$(PLAYER);", press key to select where to post score.";
4870 COLOR 2,0
4880 GOSUB 8140
4890 GOSUB 9500
4900 GOSUB 8580
4910 IF SELECT <1 OR SELECT >13 THEN GOTO 4840
4920 IF PLAYER =1 THEN COL = 20
4930 IF PLAYER =2 THEN COL = 28
4940 IF PLAYER =3 THEN COL = 36
4950 IF PLAYER =4 THEN COL = 44
4960 ROW = SELECT + 2
4970 IF SELECT >6 THEN ROW = SELECT + 6
4980 GOSUB 3940
4990 IF SCREEN(ROW,COL) >47 THEN 5010
5000 RETURN
5010 GOSUB 3950
5020 GOSUB 8580
5030 LOCATE 25,10
5040 PRINT "That's been selected.  Pick again.";
5050 BEEP
5060 FOR I=1 TO 1300:NEXT I
5070 GOSUB 8580
5080 GOTO 4840
5090 'DETERMINE SCORE OF DICE
5100 SC(1)=ONE
5110 SC(2)=TWO
5120 SC(3)=THREE
5130 SC(4)=FOUR
5140 SC(5)=FIVE
5150 FOR I=1 TO 4
5160    FOR J =I+1 TO 5
5170    IF SC(I) > SC(J) THEN SWAP SC(I),SC(J)
5180    NEXT J
5190 NEXT I
5200 IF SC(1)=SC(2) AND SC(2)=SC(3) AND SC(3)=SC(4) AND SC(4)=SC(5) THEN 5230
5210 SCORE = 0
5220 GOTO 5810
5230 GOSUB 3950
5240 COLOR 18,0
5250    GOSUB 8580
5260 LOCATE 25,18
5270    PRINT "YAHTZEE    YAHTZEE     YAHTZEE     YAHTZEE";
5280 GOSUB 8270
5290 COLOR 2,0
5300 ON PLAYER GOTO 5310,5330,5350,5370
5310 IF FIRST=0 THEN FIRST=1:GOTO 5390
5320 IF FIRST=1 THEN T5=T5+100:GOTO 5390
5330 IF SECOND=0 THEN SECOND=1 :GOTO 5390
5340 IF SECOND=1 THEN T15=T15+100:GOTO 5390
5350 IF THIRD=0 THEN THIRD=1:GOTO 5390
5360 IF THIRD=1 THEN T25=T25+100:GOTO 5390
5370 IF FOURTH=0 THEN FOURTH=1:GOTO 5390
5380 IF FOURTH=1 THEN T35=T35+100:GOTO 5390
5390 IF SELECT=12 GOTO 5810
5400 ROW=18:GOSUB 5680:ROW =0:IF PICK=0 THEN SELECT=12:GOTO 5810
5410 IF SC(1)=1 THEN SELECT=1:SCORE=5
5420 IF SC(1)=2 THEN SELECT=2:SCORE=10
5430 IF SC(1)=3 THEN SELECT=3:SCORE=15
5440 IF SC(1)=4 THEN SELECT=4:SCORE=20
5450 IF SC(1)=5 THEN SELECT=5:SCORE=25
5460 IF SC(1)=6 THEN SELECT=6:SCORE=30
5470 GOSUB 5680
5480 IF PICK=0 THEN RETURN
5490 SELECT=0:SCORE=0
5500 GOSUB 3950:GOSUB 5600
5510 IF SELECT =7 OR SELECT =8 OR SELECT =13 THEN 5810
5520 IF SELECT=9 THEN SCORE = 25
5530 IF SELECT=10 THEN SCORE=30
5540 IF SELECT=11 THEN SCORE=40
5550 RETURN
5560 GOSUB 3950:LOCATE 24,10
5570 BEEP
5580 PRINT "You ignoramus, ";PLAYR$(PLAYER);" pick an open slot for this yahtzee.";
5590 GOTO 5620
5600 LOCATE 24,10
5610 PRINT "Since the appropriate box in the UPPER section has been used, then...";
5620 LOCATE 25,1
5630 PRINT "This Yahtzee can be a JOKER in the lower section. Pick 7, 8, 9, A, B or D";
5640 GOSUB 8140
5650 GOSUB 9500
5660 GOSUB 8580
5670 IF SELECT <7 THEN SCORE =0:RETURN
5680 IF PLAYER =1 THEN COL = 20
5690 IF PLAYER =2 THEN COL = 28
5700 IF PLAYER =3 THEN COL = 36
5710 IF PLAYER =4 THEN COL = 44
5720 IF ROW=18 THEN 5780
5730 IF SELECT <7 THEN ROW=SELECT+2:GOTO 5780
5740 ROW = SELECT + 6
5750 GOSUB 3940
5760 IF SCREEN(ROW,COL) >47 THEN 5560
5770 RETURN
5780 GOSUB 3940:PICK=0
5790 IF SCREEN(ROW,COL) >47 THEN PICK=1
5800 RETURN
5810 IF SELECT =1 THEN 5820 ELSE 5880
5820 FOR I=1 TO 5
5830    IF SC(I)=1 THEN SCORE = SCORE +1
5840 NEXT I
5850 GOSUB 8440
5860 IF NO=1 THEN GOSUB 4810:GOTO 5810
5870 RETURN
5880 IF SELECT =2 THEN 5890 ELSE 5950
5890 FOR I=1 TO 5
5900    IF SC(I)=2 THEN SCORE = SCORE +2
5910 NEXT I
5920 GOSUB 8440
5930 IF NO=1 THEN GOSUB 4810:GOTO 5810
5940 RETURN
5950 IF SELECT =3 THEN 5960 ELSE 6020
5960 FOR I=1 TO 5
5970    IF SC(I)=3 THEN SCORE = SCORE +3
5980 NEXT I
5990 GOSUB 8440
6000 IF NO=1 THEN GOSUB 4810:GOTO 5810
6010 RETURN
6020 IF SELECT =4 THEN 6030 ELSE 6090
6030 FOR I=1 TO 5
6040    IF SC(I)=4 THEN SCORE = SCORE +4
6050 NEXT I
6060 GOSUB 8440
6070 IF NO=1 THEN GOSUB 4810:GOTO 5810
6080 RETURN
6090 IF SELECT =5 THEN 6100 ELSE 6160
6100 FOR I=1 TO 5
6110    IF SC(I)=5 THEN SCORE = SCORE +5
6120 NEXT I
6130 GOSUB 8440
6140 IF NO=1 THEN GOSUB 4810:GOTO 5810
6150 RETURN
6160 IF SELECT =6 THEN 6170 ELSE 6230
6170 FOR I=1 TO 5
6180    IF SC(I)=6 THEN SCORE = SCORE +6
6190 NEXT I
6200 GOSUB 8440
6210 IF NO=1 THEN GOSUB 4810:GOTO 5810
6220 RETURN
6230 IF SELECT =7 THEN 6240 ELSE 6340
6240 IF SC(1)=SC(2) AND SC(2)=SC(3) THEN 6280
6250 IF SC(2)=SC(3) AND SC(3)=SC(4) THEN 6280
6260 IF SC(3)=SC(4) AND SC(4)=SC(5) THEN 6280
6270 GOTO 6760
6280 FOR I=1 TO 5
6290    SCORE=SCORE + SC(I)
6300 NEXT I
6310 GOSUB 8440
6320 IF NO=1 THEN GOSUB 4810:GOTO 5810
6330 RETURN
6340 IF SELECT = 8 THEN 6350 ELSE 6440
6350 GOSUB 8440
6360 IF NO=1 THEN GOSUB 4810:GOTO 5810
6370 IF SC(1)=SC(2) AND SC(2)=SC(3) AND SC(3)=SC(4) THEN 6400
6380 IF SC(2)=SC(3) AND SC(3)=SC(4) AND SC(4)=SC(5) THEN 6400
6390 GOTO 6760
6400 FOR I=1 TO 5
6410    SCORE=SCORE + SC(I)
6420 NEXT I
6430 RETURN
6440 IF SELECT = 9 THEN 6450 ELSE 6500
6450 GOSUB 8440
6460 IF NO=1 THEN GOSUB 4810:GOTO 5810
6470 IF SC(1) = SC(2) AND SC(2) = SC(3) AND SC(4) = SC(5) THEN SCORE = 25
6480 IF SC(1) = SC(2) AND SC(3) = SC(4) AND SC(4) = SC(5) THEN SCORE = 25
6490 IF SCORE <> 25 THEN 6760
6500 IF SELECT = 10 THEN 6510 ELSE 6580
6510 GOSUB 8440
6520 IF NO=1 THEN GOSUB 4810:GOTO 5810
6530 IF SC(1)=SC(2)-1 AND SC(2) = SC(3)-1 AND SC(3)=SC(4)-1 THEN SCORE = 30:RETURN
6540 IF SC(2)=SC(3)-1 AND SC(3) = SC(4)-1 AND SC(4)=SC(5)-1 THEN SCORE = 30:RETURN
6550 IF SC(1)=SC(2)-1 AND SC(2)=SC(3) AND SC(3)=SC(4)-1 AND SC(4)=SC(5)-1 THEN SCORE = 30:RETURN
6560 IF SC(1)=SC(2)-1 AND SC(2)=SC(3)-1 AND SC(3)=SC(4) AND SC(4)=SC(5)-1 THEN SCORE = 30:RETURN
6570 GOTO 6760
6580 IF SELECT = 11 THEN 6590 ELSE 6630
6590 GOSUB 8440
6600 IF NO=1 THEN GOSUB 4810:GOTO 5810
6610 IF SC(1)=SC(2)-1 AND SC(2) = SC(3)-1 AND SC(3)=SC(4)-1 AND SC(4)=SC(5)-1 THEN SCORE = 40:RETURN
6620 GOTO 6760
6630 IF SELECT = 12 THEN 6640 ELSE 6680
6640 GOSUB 8440
6650 IF NO=1 THEN GOSUB 4810:GOTO 5810
6660 IF SC(1) = SC(2) AND SC(2) = SC(3) AND SC(3) = SC(4) AND SC(4) = SC(5) THEN SCORE = 50:RETURN
6670 GOTO 6760
6680 IF SELECT = 13 THEN 6690 ELSE RETURN
6690 GOSUB 8440
6700 IF NO=1 THEN GOSUB 4810:GOTO 5810
6710 SCORE = 0
6720 FOR I=1 TO 5
6730    SCORE = SCORE + SC(I)
6740 NEXT I
6750 RETURN
6760 'select reject module
6770 GOSUB 3950
6780 REJECT = SELECT - 6
6790 ON REJECT GOTO 6840,6900,6960,7020,7080,7140
6800 SCORE = 0
6810 ZERO=0
6820 GOSUB 8580
6830 RETURN
6840 '3 of a kind - no way
6850 IF SW=0 THEN 6860 ELSE BEEP
6860 LOCATE 24,10:PRINT "Are you blind ";PLAYR$(PLAYER);", this ain't no 3 of a kind!";
6870 GOSUB 8390
6880 IF ZERO=1 THEN 6800
6890 GOTO 5090
6900 '4 of a kind - no way
6910 IF SW=0 THEN 6920 ELSE BEEP
6920 LOCATE 24,10:PRINT "You make me laugh ";PLAYR$(PLAYER);", this ain't no 4 of a kind!";
6930 GOSUB 8390
6940 IF ZERO=1 THEN 6800
6950 GOTO 5090
6960 'Full House - no way
6970 IF SW=0 THEN 6980 ELSE BEEP
6980 LOCATE 24,17:PRINT "Hey, ";PLAYR$(PLAYER);", Full House means a pair and 3 of a kind!";
6990 GOSUB 8390
7000 IF ZERO=1 THEN 6800
7010 GOTO 5090
7020 'Small Straight no way
7030 IF SW=0 THEN 7040 ELSE BEEP
7040 LOCATE 24,15:PRINT "Hey, ";PLAYR$(PLAYER);", can't you even make a small straight??";
7050 GOSUB 8390
7060 IF ZERO=1 THEN 6800
7070 GOTO 5090
7080 'Large Straight no way
7090 IF SW=0 THEN 7100 ELSE BEEP
7100 LOCATE 24,7:PRINT "Hey, ";PLAYR$(PLAYER);", don't play poker if you want to keep your money!!";
7110 GOSUB 8390
7120 IF ZERO=1 THEN 6800
7130 GOTO 5090
7140 'YAHTZEE  no way
7150 IF SW=0 THEN 7160 ELSE BEEP
7160 LOCATE 24,12:PRINT "Hey, Wise Guy, I mean ";PLAYR$(PLAYER);", this ain't no Yahtzee !!!";
7170 GOSUB 8390
7180 IF ZERO=1 THEN 6800
7190 GOTO 5090
7200 GOSUB 3950
7210 LOCATE 24,1
7220 PRINT "You have pressed the ";:COLOR 4:PRINT "QUIT";:COLOR 2:PRINT " button, press 'Y'to quit or 'N' to continue.";
7230 FOR BP=1 TO 3:BEEP:FOR BQ=1 TO 500:NEXT BQ:NEXT BP
7240 K$ = INKEY$
7250 IF K$="Y" OR K$="y" THEN 7280
7260 IF K$="N" OR K$="n" THEN 7370
7270 GOTO 7240
7280 SCREEN 0,1,0:WIDTH 40
7290 IF LEN(INKEY$) THEN 7290
7300 WIDTH 80:COLOR 2
7310 LOCATE 10,15
7320 PRINT "You are still in basic. If you press 'N', you will";
7330 LOCATE 12,15
7340 PRINT "drop into DOS. Press anything else to stay in basic.";
7350 K$=INKEY$:IF K$="N" OR K$="n" THEN SYSTEM
7360 IF K$<>"" THEN END ELSE 7350
7370 GOSUB 8580:VIEW PRINT :RETURN
7380 'Module for scorekeeper
7390 'Collect player names and scores-game 1
7400 TOTAL(1)=T4:T4=0
7410 TOTAL(2)=T14:T14=0
7420 TOTAL(3)=T24:T24=0
7430 TOTAL(4)=T34:T34=0
7440 T5=0:T15=0:T25=0:T35=0
7450 IF PLAYER >4 THEN PLAYER=4
7460 FOR I=1 TO PLAYER
7470    KEEP(GAME,I)=TOTAL(I)
7480 NEXT I
7490 IF GAME=1 THEN RETURN
7500 SCREEN 0,1,0
7510 '
7520 CLS
7530 COLOR 1
7540 IF PLAYERS=4 THEN CO=16
7550 IF PLAYERS=3 THEN CO=21
7560 IF PLAYERS=2 THEN CO=26
7570 IF PLAYERS=1 THEN CO=31
7580 FOR I=1 TO PLAYER
7590    LOCATE 3,CO+(10*I)
7600    PRINT USING "\    \";PLAYR$(I);
7610 NEXT I
7620 FOR G=1 TO GAME
7630    ROW=G+4
7640    COLOR 8+G
7650    LOCATE ROW,CO
7660    PRINT "Game ";G;
7670    COLOR 2
7680    FOR I=1 TO PLAYERS
7690       LOCATE ROW,CO+(10*I)
7700       PRINT USING "####";KEEP(G,I);
7710       COLOR 3
7720       IF WINNER(G,I)=1 THEN PRINT " *";
7730       COLOR 2
7740    NEXT I
7750 NEXT G
7760 ROW=12
7770 LOCATE ROW,CO
7780 PRINT "Totals";
7790 FOR I=1 TO PLAYERS
7800    FOR G=1 TO GAME
7810    GRAND=GRAND+KEEP(G,I)
7820 NEXT G
7830 LOCATE ROW,CO+(10*I)
7840 COLOR 12
7850 PRINT USING "####";GRAND
7860 GRAND=0:NEXT I
7870 IF GAME=6 THEN 7990
7880 COLOR 3
7890 LOCATE 22,20
7900 PRINT "* - Indicates winner of individual game";
7910 COLOR 12
7920 LOCATE 25,28
7930 PRINT "Press any key to continue";
7940 GOSUB 8140
7950 K$=INKEY$:IF K$="" THEN 7950
7960 WIDTH 40
7970 WIDTH 80
7980 RETURN
7990 LOCATE 14,1:COLOR 6
8000 PRINT "You have played six games of Yahtzee.  The winner should buy everybody dinner!!"
8010 LOCATE 16,25:COLOR 13
8020 PRINT "Unless it's me, that is.";
8030 LOCATE 18,25:COLOR 12
8040 PRINT "Press any key to continue.";
8050 GOSUB 8140
8060 K$=INKEY$:IF K$<>"" THEN 7280 ELSE 8060
8070 'click sounds of dice
8080 IF SW=0 THEN RETURN
8090 SOUND FR1,DU
8100 SOUND FR2,DU
8110 SOUND FR3,DU
8120 SOUND FR1,DU
8130 RETURN
8140 IF SW=0 THEN RETURN 'Attention sound-needs player entry
8150 SOUND 1200,1
8160 RETURN
8170 'Sound switch
8180 IF SW=0 THEN SW=1:GOTO 8200
8190 IF SW=1 THEN SW=0
8200 GOSUB 3940
8210 SOU$="\          \"
8220 LOCATE 5,50
8230 IF SW=1 THEN COLOR 2,0:PRINT USING SOU$;"F9-Sound On";
8240 IF SW=0 THEN COLOR 4,0:PRINT USING SOU$;"F9-Sound Off";
8250 '
8260 RETURN
8270 IF SW=0 THEN RETURN ELSE PLAY "MFL16T155O2"
8280 PLAY "CCD8E8F8O1B8O2E8O1B8O2G#8E8B8"
8290 PLAY "G#8O3E8O2B8O3E8O2B8O3G#8E8B8G#8O4E4
8300 PLAY "P8EEE8E8E8E8E4P8.
8310 PLAY "EE4P8.O2EE2
8320 RETURN
8330 IF SW=0 THEN RETURN ELSE 8340
8340 PLAY "MSL4O2T200CEGAB-A8G.ECEGAB-A8G.EFAO3CDE-D8"
8350 PLAY "C.O2ACEGAB-A8G.EGBO3DEFE8D.O2BCEGAB-"
8360 PLAY "A8G.ECEGAB-AGECEGAB-AGEFAO3CDE-DCO2A"
8370 PLAY "CEGAB-AGEGBO3DEFEDO2BCEGAB-AG"
8380 RETURN
8390 LOCATE 25,9:PRINT "Do you wish to RE-SELECT or ZERO this?? Enter 1 thru D or Z  ";
8400 GOSUB 8140
8410 ZERO=0:GOSUB 9500
8420 GOSUB 8580
8430 RETURN
8440 IF CHEX=0 THEN RETURN
8450 GOSUB 3950
8460 GOSUB 8580
8470 NO=0
8480 LOCATE 25,20
8490 GOSUB 8140
8500 PRINT "You selected ";CHECK$(SELECT);", is that correct? (Y/N)";
8510 K$=INKEY$:IF K$="Y" OR K$="y" THEN GOSUB 8580:RETURN
8520 IF K$="N" OR K$="n" THEN 8540
8530 GOTO 8510
8540 NO=1:GOSUB 8580
8550 SCORE=0:RETURN
8560 WINNER(GAME + 1,WIN)=1
8570 RETURN
8580 GOSUB 3950:LOCATE 24,1:PRINT STRING$(79,32);
8590 LOCATE 25,1:PRINT STRING$(79,32);
8600 RETURN
8610 IF CHEX=1 THEN CHEX=0:GOTO 8630
8620 IF CHEX=0 THEN CHEX=1
8630 GOSUB 3940
8640 FORM$="\           \"
8650 LOCATE 4,50
8660 IF CHEX=0 THEN COLOR 4,0:PRINT USING FORM$;"F8-Verify Off";
8670 IF CHEX=1 THEN COLOR 2,0:PRINT USING FORM$;"F8-Verify On";
8680 '
8690 RETURN
8700 'reroll register
8710 L=VAL(K$)
8720 IF L=1 THEN GOTO 8770
8730 IF L=2 THEN GOTO 8790
8740 IF L=3 THEN GOTO 8810
8750 IF L=4 THEN GOTO 8830
8760 IF L=5 THEN GOTO 8850
8770 IF D1=0 THEN D1=1:GOTO 8870
8780 IF D1=1 THEN D1=O:GOTO 8900
8790 IF D2=0 THEN D2=1:GOTO 8870
8800 IF D2=1 THEN D2=O:GOTO 8900
8810 IF D3=0 THEN D3=1:GOTO 8870
8820 IF D3=1 THEN D3=O:GOTO 8900
8830 IF D4=0 THEN D4=1:GOTO 8870
8840 IF D4=1 THEN D4=O:GOTO 8900
8850 IF D5=0 THEN D5=1:GOTO 8870
8860 IF D5=1 THEN D5=O:GOTO 8900
8870 LOCATE 20,45+(6*L):COLOR 12,0
8880 L$=STR$(L):PRINT L$;
8890 COLOR 2:GOSUB 8140:RETURN
8900 LOCATE 20,45+(6*L):COLOR 2,0
8910 L$=STR$(L):PRINT L$;
8920 GOSUB 8140:RETURN
8930 'DICE$ FOR REROLL ON SPIN
8940 DICE$="":GOSUB 3940
8950 IF D1=1 THEN DICE$=DICE$+"1"
8960 IF D2=1 THEN DICE$=DICE$+"2"
8970 IF D3=1 THEN DICE$=DICE$+"3"
8980 IF D4=1 THEN DICE$=DICE$+"4"
8990 IF D5=1 THEN DICE$=DICE$+"5"
9000 FOR L=1 TO 5
9010    LOCATE 20,45+(6*L):COLOR 2,0
9020    L$=STR$(L):PRINT L$;
9030 NEXT L
9040 D1=0:D2=0:D3=0:D4=0:D5=0
9050 RETURN
9060 FOR P=1 TO LEN(DICE$)+1
9070 GOSUB 3940
9080    X=VAL(MID$(DICE$,P,1)):COLOR 0,4
9090    IF X<1 OR X>5 THEN 9170
9100    IF X=1 THEN LOCATE 16,50:C=50:GOSUB 9680
9110    IF X=2 THEN LOCATE 16,56:C=56:GOSUB 9680
9120    IF X=3 THEN LOCATE 16,62:C=62:GOSUB 9680
9130    IF X=4 THEN LOCATE 16,68:C=68:GOSUB 9680
9140    IF X=5 THEN LOCATE 16,74:C=74:GOSUB 9680
9150    GOSUB 8070
9160    ON X GOSUB 3540,3580,3620,3660,3700
9170 NEXT P
9180 COLOR 2,0:RETURN
9190 K$=INKEY$
9200 IF K$="1" THEN GOSUB 8700:GOTO 9260
9210 IF K$="2" THEN GOSUB 8700:GOTO 9260
9220 IF K$="3" THEN GOSUB 8700:GOTO 9260
9230 IF K$="4" THEN GOSUB 8700:GOTO 9260
9240 IF K$="5" THEN GOSUB 8700:GOTO 9260
9250 IF K$="r" OR K$="R" THEN GOSUB 8930:GOTO 9270
9260 GOTO 9190
9270 GOSUB 3950
9280 IF LEN(INKEY$) THEN 9280
9290 RETURN
9300 WIDTH 80:COLOR 2 'Module to read instructions-Yahtzee.doc
9310 OPEN "I",1,"YAHTZEE.DOC"
9320 L=0
9330 CLS
9340 IF EOF(1) THEN 9450
9350 LINE INPUT#1, A$
9360 PRINT USING F80$;A$
9370 L=L+1
9380 IF L=22 THEN 9420
9390 IF L=42 THEN 9420
9400 IF L=62 THEN 9420
9410 GOTO 9340
9420 PRINT:COLOR 6:PRINT TAB(28) "Press any key to continue";
9430 COLOR 2
9440 K$=INKEY$:IF K$<>"" THEN 9330 ELSE 9440
9450 CLOSE 1
9460 COLOR 6
9470 PRINT TAB(27)"Press any key to start play";
9480 COLOR 2
9490 K$=INKEY$:IF K$<>"" THEN RETURN ELSE 9490
9500 'Select choice
9510 K$=INKEY$
9520 IF K$="1" THEN SELECT=1:GOTO 9670
9530 IF K$="2" THEN SELECT=2:GOTO 9670
9540 IF K$="3" THEN SELECT=3:GOTO 9670
9550 IF K$="4" THEN SELECT=4:GOTO 9670
9560 IF K$="5" THEN SELECT=5:GOTO 9670
9570 IF K$="6" THEN SELECT=6:GOTO 9670
9580 IF K$="7" THEN SELECT=7:GOTO 9670
9590 IF K$="8" THEN SELECT=8:GOTO 9670
9600 IF K$="9" THEN SELECT=9:GOTO 9670
9610 IF K$="A" OR K$="a" THEN SELECT=10:GOTO 9670
9620 IF K$="B" OR K$="b" THEN SELECT=11:GOTO 9670
9630 IF K$="C" OR K$="c" THEN SELECT=12:GOTO 9670
9640 IF K$="D" OR K$="d" THEN SELECT=13:GOTO 9670
9650 IF K$="z" OR K$="Z" THEN ZERO=1:GOTO 9670
9660 GOTO 9510
9670 RETURN
9680 FOR I=16 TO 18:LOCATE I,C
9690 PRINT "     ";
9700 NEXT
9710 RETURN
```
{% endraw %}

## YAHTZEE.DOC

{% raw %}
```
                           Welcome to Computer Yahtzee                          
Please register.  Shareware is a benefit to both users and authors.   Users get 
software for "next to nothing", can try it out and, if he likes it, pay a small 
fee.  The author upon reciept, is encouraged to make improvements or write new  
programs.  Nuff' said.                                                          
                                                                                
SECOND SCREEN (or Title Screen)                                                 
Here we see the HOT KEYS listed and the question about instructions which got   
you here.   Let's take the Hot Keys one at a time.  F8-Select Verify on/off -   
Verify on - When you select to score, you will be asked to verify your choice   
by name.   If it's OFF, then any selection will be accepted, even if it's wrong.
An incorrect choice will ZERO that scoring position in the Upper Section.   The 
Lower Section will not ZERO without you specifying it.  But, it will score in   
the wrong place if you tell it to.   F9-Sound on/off - Sound effects, beeps and 
music is either on or off.   F10-Qyit - Drops you into basic with no frills.    
These Hot Keys are live throughout the game and may be used at any time.        
                                                                                
NAME SCREEN (or Second Title Screen)                                            
Enter the player names, may be any combination of Upper or Lowercase, for a max-
imum of six (6) characters.   After each name, press the ENTER key and you will 
be asked to enter the next name.   If you press the enter key without entering a
name or you have entered four names, then you are shown the next screen.        
                                                                                
FOURTH SCREEN (or Name Confirm Screen)                                          
First game -Displays player names and asks if ready to play.  Yes and you start 
play.  No and you go back to the Name Screen to re-enter all players.           
Second and subsequent games -Displays player names and asks if ready to play.   
Yes and you start play.   No and you are asked if you wish to add players (Y/N) 
A No will start play.  A Yes will send you back to name entry if you have less  
than four (4) players.                                                          
                                                                                
PLAY SCREEN (or play screen)                                                    
On the left side of the screen, we find the standard Yahtzee scoresheet.   And  
in the middle, the status of the hot keys.   When they (F8 & F9) are red, they  
 are off and green for on.   On the right, five (5) blank dice.   The number of 
players determines the width of the scoresheet.   The first roll of the dice is 
accomplished by pressing any key.   The second and third are done by pressing   
number keys (1 to 5) corresponding to the numbers below each die and then by    
pressing the "R" to roll.   By the way, pressing a number twice will eliminate  
it from being rerolled.  The numbers turn red if selected for reroll and green  
if "locked".   If you press "R" without selecting any dice for reroll or after  
the third roll, you will be asked where to post the score.   That brings us to: 
                                                                                
SCORING (or I win, you lose)                                                    
Upper Section - There are thirteen (13) scoring positions per game, of which six
(6) are in the Upper Section and the other seven (7), of course, in the Lower   
Section.   The first six(6) are ACES  TWOS  THREES  FOURS  FIVES  SIXES and will
only score dice with the same number.   For example, the roll is 1,1,4,2,6.  On 
each turn, a player can only score once.  So our dice can be scored in several  
places but used only in one.  Aces would be a score of 2(two) and so on.  Remem-
ber that if you score at least three(3) die in each position of the Upper Sect- 
ion, your total will be 63 or more, which would entitle you to the bonus of 35  
points.                                                                         
Lower Section - This is the easy stuff.                                         
3 of a Kind - Score of all dice IF at least three(3) are the same.              
4 of a Kind - Score of all dice IF at least four(4) are the same.               
Full House - Three(3) of a kind PLUS a pair(2) and scores 25(twe...never mind). 
Small Straight - Four(4) die in sequence and scores 30                          
Large Straight - All the dice in sequence and scores 40                         
Yahtzee - All dice the same and scores 50                                       
Chance - Score is the total of all five(5) dice.  This is a one-time catch-all  
for a bad break in luck and your roll doesn't score elsewhere.                  
Multiple Yahtzees - Yahtzees are scored 50 points in the Yahtzee position of the
Lower Section.  If that position is filled by a 0(Zero) or a previous Yahtzee,  
then we look to the appropriate spot in the Upper Section. If that is also taken
we look again to the Lower Section.   Now we can use it as a Joker in any of the
open positions.  And scores accordingly, 40 for a Large Straight, 30 for Small  
Straight, 25 for a Full House and the total of the dice for Chance, 3 and 4 of a
Kind.  The second (and subsequent) Yahtzee(s) also give the player a 100 point  
bonus that is added to his total only.                                          
                                                                                
END GAME (or whose ahead)                                                       
After each game, you will be told who won(as if you didn't know) and then asked 
if you want to play another game.  An "N" will send you to Basic and if it's the
second through sixth game, you will go to the RECAP SCREEN and then to basic.   
If you pressed "Y", you will also go to the Recap Screen and then to the Fourth 
Screen where you may add players (up to 4 total) and start the new game.        
The Recap Screen shows the winner and scores for each game and the aggregate to-
als for each player.                                                            
This game has been heavily tested by family and friends and should be bug free. 
Technical Note-The dice are truly random.  The random generator is reseeded at  
the start of each players turn.   Thank you and happy playing.                  
                                                             Ray Abbey          

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0993

     Volume in drive A has no label
     Directory of A:\

    4X6      FON       285   2-25-85   3:50a
    CHSETUPS PYR      2508   9-01-88  12:00p
    CONFIG   PYR       102   9-01-88  12:00p
    DISTDATA PYR     43923   9-01-88  12:00p
    ERROR    MSG       569   4-04-85   7:43p
    FILES    TXT       709   7-17-87  10:09p
    FILES993 TXT      3464   9-07-88   2:47p
    GO       BAT        38  10-19-87   3:56p
    GO       TXT      1310  12-17-87   9:23a
    HARDSET  BAT        40   7-17-87  10:08p
    IBMPENTE COM     44707   7-26-87  10:38a
    MANUAL   DOC     16699   9-01-88  12:00p
    NOTES    TXT      2056   7-17-87  10:09p
    PCPENTE  COM     44545   7-18-87  12:26p
    PYRAMIDS EXE     62608   9-01-88  12:00p
    README   TXT      2133  12-04-87  12:17p
    RULES    COM      3292   7-17-87  10:11p
    SCREENS  PYR     44000   9-01-88  12:00p
    SETUP    EXE     12656   9-01-88  12:00p
    STATS    PYR     14520   9-01-88  12:00p
    YAHTZEE  BAS     23746  12-04-87  10:58a
    YAHTZEE  DOC      6807  11-30-87  12:00p
    YRSETUPS PYR     11264   9-01-88  12:00p
           23 file(s)     341981 bytes
                            6144 bytes free
