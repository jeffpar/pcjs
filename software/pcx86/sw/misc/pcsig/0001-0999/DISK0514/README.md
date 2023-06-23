---
layout: page
title: "PC-SIG Diskette Library (Disk #514)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0514/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0514"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "FOLLIES"

    This GAMES disk has 8 programs which will give you hours of fun and
    relaxation.  ROULETTE and KENO might be used to develop your own
    system of beating the casinos.  The 3-D TIC-TAC-TOE and the
    OTHELLO games are great fun, for they match your wits against
    the computer.  The PC-OTHELLO game is meant to be played by two
    computer users over the telephone.  If you are a serious internals
    person with experience in Assembly you may find COREWAR to be both
    fun and a learning experience.  The BIORHYTHMS charting program is very
    good.  All in all, a nice collection of computer games.
    File Descriptions:
    
    COREWAR  EXE  COREWAR game program.
    BRIDGE   DOC  Notes about the use of BRIDGE.EXE.
    BRIDGE   EXE  Program which randomly deals bridge hands for practice.
    BIORHY   COM  Program to calculate your biorythm on any date.
    BIORHY   TXT  Short introduction to biorythm and its use.
    3DTICTAC EXE  3-D TIC-TAC-TOE game against the computer.
    COREWAR  DOC  Complete instructions on COREWAR.EXE.
    PCOTHELL DOC  Documentation for PCOTHELL.EXE.
    KENO     EXE  The program file for the KENO game.
    PCOTHELL PN1  Communication file for COM1.
    PCOTHELL EXE  Executable program for PC-OTHELLO.
    KENO     EXE  The program file for the KENO game.
    ROULETTE EXE  The program file for ROULETTE.
    PCOTHELL PN2  Communication file for COM2.
    ENTRAP   COM  Game for color systems.
    ENT-BW   COM  ENTRAP for monochrome monitors.
    ENTRAP   DOC  Documentation for ENTRAP.COM.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## BIORHY.TXT

{% raw %}
```

     The purpose of Biorhythm is to predict a physical, emotional
and intellectual pattern that indicates your up and downs for any
period of time. Biorhythm can show which future days will be good
or bad for you. These predictions are based on scientific studies
that  show  a physical cycle occurs every 23 days,  an  emotional
cycle every 28 days and an intellectual cycle every 33 days.

     Each of the cycles begins on the day when you are born,  and
begins again every 23,  28,  and 33 days thereafter, for the rest
of your life.

     When  the  graph  is to the right  of  the  centerline,  the
Biorhythm  is 'High',  with energy to spare.  For example,  on  a
physical  High,  we tend to be energetic,  strong,  and  full  of
vitality.  On  an  emotional  high,  we're apt  to  be  creative,
artistic,  aware, and cheerfull. On and intellectual high, we are
able to think quickly and solve complex problems easily.

     When  the  curve  is  to the left  of  the  centerline,  the
Biorhythm  is  said  to  be 'Low',  or  in  a  recharging  state.
Physically,  we tend to tire more quickly,  feel dragged out  and
succumb to colds and other illness more readily.  Emotionally, we
are apt to feel moody,  irritable,  or depressed. Intellectually,
we may find it difficult to concentrate or remember,  and may get
easily distracted, and be more likely to use poor judgment.

     The  day  that the curve crosses the centerline is called  a
'Critical' day.  On this day your system seems to be in a flux or
transition, and is therefore unstable. Your critical days are the
days when things are most likely to go wrong. People seem to lack
coordination,  and are therefore more accident prone on  critical
days.

                          But remember:

     Biorhythms  do  not predict that anything good or  bad  will
happen  to  you on your critical days,  they only tell  you  that
there  is  a 'Tendency' for you to behave in a certain way  at  a
certain  time.  If  we are aware of these tendencies before  they
occur,  then we can prevent any problems by being more careful in 
everything we do on these critical days.

```
{% endraw %}

## ENTRAP.DOC

{% raw %}
```
*******************************************************************************
*******************************************************************************

			8 0 8 8   O T H E L L O
			
			 by Michael W. Bayley
			 
*******************************************************************************
*******************************************************************************

DISTRIBUTION DISK
=================

	This program is distributed under the freeware system.  You do not
have to pay for this program.  Yoy may pass this program on to others
provided that you pass on all three files and that you do not modify the
files in any way.  If you like this game and would like to see others
please send $10.00 to the author (see below).  This will also entitle
you to source code for the game (see below).

	The distribution disk contains three files.  OTHELLO.DOC (this file)
is the documentation for the othello games.  OTHEL-BW.COM is a black and
white version of the game.  OTHELLO.COM is the full color version of the
game.



================
RULES OF OTHELLO
================

	For those who are unfamiliar with the rules of Othello, I have
listed them briefly below.

OBJECT:
-------
	The object of the game of Othello is to end up with the most pieces
on the board at the end of the game.  The player with the most pieces is
then the winner of the game.

SET UP:
-------
	The game is automatically set up for you by the computer.  The
computer takes the white pieces and the human (you) takes the black
side.

MOVEMENT:
---------
	Black always moves first.  Each player then takes turns placing
pieces on the board until the game is finished.

	To place a piece on the board the player must place his piece
so that he traps the opponents pieces between one or more of his pieces
already on the board and the piece he is playing.  All of the opponents
intervening pieces are then replaced by those of the moving player. Empty
squares may not exist between the trapped pieces or those pieces which
are trapping them.  Pieces may be trapped in more than one direction at
a time.  If a player does not have legal move then he forfeits his turn
to the other player.

COMMANDS:
	The game will respond to the following commands:
	
	xn	Where x is a letter between A and H, and n is a number
		between 1 and 8.  This command is used to tell the
		computer where to place your piece.
		
	P	This command is used to 'pass' or forfeit your turn
		when you do not have a legal move.  This command may
		also be used at the start of the game to allow the
		computer to go first.
		
	U	This command is the 'unmove' command.  It allows the
		player to take back the last move sequence (ie. go
		back to his last move).  Although this may seem
		unethical it is included for those who have a low
		frustration level in response to their stupidity.
		
	S	This command is the 'swap' command.  It allows th player
		to exchange pieces with the computer.  Again this may
		seem unethical, but it may be used to see what move
		the computer would make in your place.  This is handy
		for people who are just learning to play.
		
	Q	This is the 'quit' command.  It allows the player to
		terminate the current game.
		
	All command may be typed in in either upper or lower case and
must be terminated by a carriage return.  Commands may be edited using
the backspace key.

PLAY LEVEL:
-----------
	At the beginning of each game the player must enter the play level.
The valid range is from 1 to 5.  The play level determines how many full
moves the computer will look ahaead when making its decision as to where
to move.


GAME STRATEGY
=============

	8088 Othello is written in 8088/8086 assembler using Microsofts
macro assembler.  Computer moves are based on a dynamic weight table.
This simply means that each square on the board is given a weight (or
value) to determine how good or bad it is to own that square.  After
each move the board position is evaluated and weights are modified to
take into account the new situation.

	The computer decends each play level by making recursive calls
to a move evaluation routine.  Prunning is performed at each level.
This simply means that obviously bad moves are discarded and that the
computer does not take these to a deeper level.  This is done to provide
speed in the deeper levels.


SOURCE CODE
===========

	If you have decided to make the $10.00 donation and would like
source code for this program please send a FORMATTED 5 1/4 inch diskette
along with your check and I will be happy to send it along to you.

	The source code is not distributed as freeware and I would
appreciate it if you would not pass it on to others.

	Please make check or money order payable to:

						Michael W. Bayley
						1388 Pine Avenue
						San Jose, Ca. 95125
```
{% endraw %}

## FILES514.TXT

{% raw %}
```
---------------------------------------------------------------------------
Disk No  514  FOLLIES                                                v1.2
---------------------------------------------------------------------------
This GAMES disk has 8 programs which will give you hours of fun and
relaxation. Roulette and Keno might be used to develop your own system of
beating the casinos. I found the 3D tic-tac-toe and the Entrap games to be
just great fun, for they match your wits against the computer. The PC-
Othello game is meant to be played by two computer users over the telephone
wire. If you are a serious internals person with experience in Assembly you
may find Corewars to be both fun and a learning experience. The biorythms
charting program is very good. All in all a nice collection of computer
games.
 
3DTICTAC EXE  3-Dimensional Tic-Tac-Toe game against the computer
BIORHY   TXT  Short Intoduction to biorythm and its use
BIORHY   COM  Program to calculate your biorythm on any date
BRIDGE   EXE  Program which randomly deals bridge hands for practice
BRIDGE   DOC  Notes about the use of BRIDGE.EXE
COREWAR  EXE  Executable corewar game program
COREWAR  DOC  Complete instructions on COREWAR.EXE
KENO     EXE  The program file for the keno game
ENTRAP   DOC  Documentation for ENTRAP.COM
ENTRAP   COM+ Executable program for color computer systems
ENT-BW   COM  The Program for monochrome or b/w computers
PCOTHELL DOC  Documentation for PCOTHELL.EXE
PCOTHELL EXE  Executable program for othello
PCOTHELL PN1  Communication file for com1
PCOTHELL PN2  Communication file for com2
ROULETTE EXE  The program file for roulette
 
PC-SIG (Software Interest Group)
1030 East Duane Ave, Suite D
Sunnyvale, CA  94086
(408) 730-9291
(c) copyright 1986,87 PC-SIG
```
{% endraw %}

## NOTES514.TXT

{% raw %}
```
Program name:     3D TIC-TAC-TOE
 
Author name:      W. S. Bernstein & Wm. E Lyell
Address:          P.O.B. 31854 Richmond, VA 23294
 
Telephone Number: NONE
 
Suggested Donation:
 
Program Description:
 
This three dimensional Tic-Tac-Toe game has an uncanny way of beating its
opponent quite a bit of the time.  If you are not constantly on the
offensive (and alot of the time even when you are) the program will take
over that role and have you running to cover all bases.  Hours of fun
requiring minimum of memory and hardware.
 
 
Program name:     Corewar
 
Author name:      Kevin A. Bjorke
Address:          NONE
 
Telephone Number: NONE
 
Suggested Donation:NONE
 
Program Description:
 
Through a predetermined program sequence input by opposing programmers,
this game involves the progressive elimination and booby trapping of the
computer's random access memory until one of the two programs encounters a
memory location consisting of valid data.  Really, a game invented by
Assembly programmers, meant for programmers with technical knowledge of the
computer memory mapping.
 
 
Program name:       Biorythm
 
Author name:        NONE
Address:            NONE
 
Telephone Number:   NONE
 
Suggested Donation: NONE
 
Program Description:
 
A handy program for those interested in following their biorythm patterns
for any day or period of days.  Simply input your date of birth and the
date you would like plotted.  You may indicate a group of days to be dis-
played starting with the date entered up to 20.  A chart then appears with
the requested data in a wave pattern.
 
 
èProgram name:       Bridge
 
Author name:        NONE
Address:            NONE
 
Telephone Number:   NONE
 
Suggested Donation: NONE
 
Program Description:
 
A program which displays randomly generated hands of bridge.  Apparently
this program is intended to be used as a tool for practicing of bidding for
bridge.  As requested, it will display only your and your partners hands
and then the entire hand when desired to see how your bidding would have
fared.  Not a real exciting or useful program.
 
 
Program name:       Keno
 
Author name:        Lonnie R. Odom
Address:            One Financial Plaza #448
                    Huntsville, TX  77340
Telephone Number:   NONE
 
Suggested Donation: $10.00
 
Program Description:
 
A not too exciting game which parallels that of the casinos in Las Vegas.
This game appears to nicely match the real game allowing you to pick one or
more numbers which you hope will lead to money winnings.
 
 
Program name:      Entrap (Ent-BW)
 
Author name:       Michael W. Bayley
Address:           1388 Pine Ave., SJ  CA  95125
 
Telephone Number:  NONE
 
Suggested Donation:$10.00
 
Program Description:
 
I found this to be an excellent version of the popular board game.  You set
the complexity level of this game against the computer.  Entering the
coordinates places your stone, automatically changing the computers.  Easy
on the eyes and a pleasure to play.
 
 
Program name:       PC-Othello
 
Author name:        Mike & Jim Co.
Address:            P.O.B. 5513, Ft. Wayne, IN 46895
è
Telephone Number:   NONE
 
Suggested Donation: $9.95
 
Program Description:
 
This porgram allows two computer users to hold an Othello match on their
computers over the telephone wires.  The program, by use of a 300 or 1200
baud modem, makes the communication connection and passes the data auto-
matically.  It also keeps the board updated and prompts the proper user
when it is their turn.  A real good idea for those separated by the miles.
 
 
Program name:       Roulette
 
Author name:        Robert Dew
Address:            111 E. Chestnut St., Chicago, IL 60611
 
Telephone Number:   NONE
 
Suggested Donation: NONE
 
Program Description:
 
A neat little program which simulates the roulette table in the casinos.
It allows bets to be placed in every area which is possible on the real
table and apparently the odds properly determined.  You are given a $200
bank at the beginning of the game and may bet it as you please.  Your
figure is increased or decreased as the game proceeds.  The simulation of
the roulette wheel and ball appears at the bottom of the screen.  A good
way to learn how to play and bet roulette.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0514

     Volume in drive A has no label
     Directory of A:\

    3DTICTAC EXE     37760  10-08-85  11:13p
    BIORHY   COM     16474  12-23-85   5:10p
    BIORHY   TXT      2304  12-23-85   3:30p
    BRIDGE   DOC       768  12-23-85   3:26p
    BRIDGE   EXE     28544  12-23-85   3:26p
    COREWAR  DOC      8192  12-21-85  11:12p
    COREWAR  EXE     23552  12-21-85  11:10p
    KENO     EXE     40064   8-28-85  11:00p
    PCOTHELL DOC     11726  12-07-85   9:54a
    PCOTHELL EXE     49280  12-07-85  10:10a
    PCOTHELL PN1      4096  11-29-85   1:18a
    PCOTHELL PN2      4096   1-01-80   1:29a
    ROULETTE EXE     64256  12-29-85   4:06p
    FILES514 TXT      1811   4-30-87   1:31p
    GO       BAT       643   5-08-86   8:18a
    NOTES514 TXT      4389   1-20-87   2:36p
    ENT-BW   COM      9598   1-21-86   3:20p
    ENTRAP   COM      9665   1-21-86   3:17p
    ENTRAP   DOC      4929   1-21-86   3:04p
           19 file(s)     322147 bytes
                           32768 bytes free
