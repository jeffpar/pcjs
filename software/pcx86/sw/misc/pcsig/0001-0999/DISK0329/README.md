---
layout: page
title: "PC-SIG Diskette Library (Disk #329)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0329/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0329"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "ASTROSOFT'S TRIVIA"

    Astrosoft's Trivia is truly a trivia game to tempt the science (and
    science fiction) genius.  In addition to astronomy, science, words, and
    grab bag questions, they added Star Trek and Star Wars questions. If you
    think "pon farr" is a vegetable dish, you had better check out the Star
    Trek trivia on this disk.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## ACEY.BAS

{% raw %}
```bas
1 CLS:PRINT:PRINT:PRINT " A C E Y - D E U C E Y  G A M E"
11 PRINT "THIS IS A CARD GAME SIMILAR TO ACEY-DEUCEY WITH"
21 PRINT "THE EXCEPTION THAT NO SPLITS ARE ALLOWED. THE PLAY"
31 PRINT "IS DEALT TWO CARDS. HE MUST THEN BET ON IF THE NEXT"
41 PRINT "CARD DEALT WILL LIE NUMERICALLY BETWEEN THE FIRST"
51 PRINT "TWO.  ACES CAN COUNT AS EITHER 1 OR 14"
61 B=1000
71 INPUT "PRESS ENTER TO CONTINUE";A$:CLS
81 INPUT "PRESS ENTER TO DEAL THE FIRST TWO CARDS";A$
91 T=O
101 A=INT(RND*15):IF A=1 THEN 101:IF A=0 THEN GOTO 101
111 IF A>10 GOTO 171
121 REM
131 PRINT A:PRINT
141 IF T=0 GOTO 211
151 IF T=1 GOTO 231
161 GOTO 301
171 IF A=11 THEN PRINT "JACK"
181 IF A=12 THEN PRINT "QUEEN"
191 IF A=13 THEN PRINT "KING"
201 IF A=14 THEN PRINT "ACE":IF T=2 THEN GOSUB 411
211 F=A
221 T=T+1:GOTO 101
231 S=A:IF S=0 THEN GOTO 101
241 PRINT "YOUR ACCOUNT STANDS AT $";B
251 INPUT "HOW MUCH DO YOU BET";C
261 IF C>B GOTO 241
271 IF C>0 GOTO 291
281 CLS:PRINT "NEXT HAND...":GOTO 81
291 T=T+1:GOTO 101
301 Q=A
311 IF F<S GOTO 361
321 IF Q>S  AND Q<F THEN 381
331 PRINT "NO!! YOU LOSE!!":B=B-C
341 IF B<=0 GOTO 451
351 INPUT "PRESS ENTER TO CONTINUE";A$:GOTO 281
361 IF Q>F AND Q<S THEN 381
371 GOTO 331
381 PRINT "HURRAY! YOU WIN $";C:B=B+C
391 IF B>=10000 GOTO 471
401 GOTO 331
411 INPUT "DOES YOU ACE COUNT AS 1 OR 14";A
421 IF A=1 OR A=14 GOTO 441
431 PRINT "ILLEGAL VALUE":GOTO 411
441 RETURN
451 PRINT "YOU ARE ALL OUT OF MONEY, BRIGHTEYES."
461 END
471 PRINT "WOW! YOU HAVE BROKEN THE BANK WITH $";B$
481 END
```
{% endraw %}

## CRAPS.BAS

{% raw %}
```bas
1 CLS:PRINT:PRINT:PRINT "    C R A P S"
11 PRINT "IF A PLAYER ROLLS A 2,3 OR 12 ON HIS FIRST ROLL. HE LOSES."
21 PRINT "A 7 OR 11 ON THE FIRST ROLL IS AUTOMATIC WIN."
31 PRINT "OTHERWISE, THE DICE ARE ROLLED UNTIL THE TOTAL OF THE"
41 PRINT "FIRST ROLL IS ROLLED AGAIN, IN WHICH CASE THE PLAYER"
51 PRINT "WINS OR A 7 OR 11 IS ROLLED, I NWHICH CASE THE PLAYER"
61 PRINT "CRAPS OUT(LOSES)."
71 B=500
81 PRINT "IN YOUR ACCOUNT IS: $";B
91 PRINT "$5000 THE BANK GOES UNDER"
101 INPUT "HOW MUCH DO YOU WISH TO WAGER";C
111 IF C>B THEN PRINT "YOU DO NOT HAVE THAT MUCH":GOTO 81
121 IF C<=0 GOTO 81
131 INPUT "PRESS ENTER FOR YOUR FIRST ROLL";A$
141 CLS:PRINT"FIRST ROLL:"
151 Y=INT(RND*6):Z=INT(RND*6)
161 PRINT:PRINT Y;Z:PRINT
171 T=Y+Z:PRINT "TOTAL ----";T
181 IF T=2 OR T=3 OR T=12 THEN GOTO 301
191 IF T=7 OR T=11 THEN GOTO 401
201 PRINT T;"IS YOUR POINT"
211 INPUT "PRESS ENTER FOR YOUR NEXT ROLL";A$:CLS
221 Y=INT(RND*6):Z=INT(RND*6):U=Y+Z
231 PRINT "ROLL:":PRINT
241 PRINT Y;Z"PRINT
251 PRINT "TOTAL ---";U
261 IF U=T GOTO 421
271 IF U=7 OR U=11 GOTO 351
281 PRINT "NOT YOU POUNT, KEEP ROLLLING THE BONES"
291 GOTO 211
301 IF T=2 THEN PRINT "SNAKE EYES!"
311 IF T=3 THEN PRINT "COCK EYES!"
321 IF T=12 THEN PRINT "BOXCARS!"
331 GOTO 361
341 REM
351 PRINT "YOU CROPPED OUT!!:"
361 PRINT "YOU LOSE YOUR BET":B=B-C
371 IF B<=0 GOTO 461
381 GOTO 81
391 REM
401 PRINT "A NATURAL"
411 GOTO 431
421 PRINT "YES! YOU HIT YOUR POINT"
431 PRINT "YOU WIN YOU BET":B=B+C
441 IF B>=5000 GOTO 481
451 GOTO 81
461 PRINT "AND YOU ARE OUT OF MONEY. TOO BAD"
471 END
481 PRINT "HEY!! YOU HAVE BROKEN THE BANK WITH $";B
491 END
```
{% endraw %}

## ENTRAP.DOC

{% raw %}
```
*******************************************************************************
*******************************************************************************

			 8 0 8 8   E N T R A P

			 by Michael W. Bayley

*******************************************************************************
*******************************************************************************

DISTRIBUTION DISK
=================

	This program is distributed under the freeware system.	You do not
have to pay for this program.  Yoy may pass this program on to others
provided that you pass on all three files and that you do not modify the
files in any way.  If you like this game and would like to see others
please send $10.00 to the author (see below).  This will also entitle
you to source code for the game (see below).

	The distribution disk contains three files.  ENTRAP.DOC (this file)
is the documentation for the othello games.  ENT-BW.COM is a black and
white version of the game.  ENTRAP.COM is the full color version of the
game.



===============
RULES OF ENTRAP
===============


OBJECT:
-------
	The object of the game of Entrap is to end up with the most pieces
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
		the computer would make in your place.	This is handy
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

	8088 Entrap is written in 8088/8086 assembler using Microsofts
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

```
{% endraw %}

## FILES329.TXT

{% raw %}
```
---------------------------------------------------------------------------
Disk No  329  Trivia & Others                                     v1.2 DS2
---------------------------------------------------------------------------
This disk contains an excellent trivia game and arcade type games.
 
ACEY     BAS+ Get insurance if this dealer gets and ACE
CRAPS    BAS+ Shoot craps in this casino
*        DAT  Data files used by TRIVIA.EXE (8 files)
ENTRAP   COM+ Great version of the popular OTHELLO game
ENT-BW   COM  Monochrome version of the OTHELLO game
ENTRAP   DOC  Documentation for both ENTRAP games
TRIVIA   EXE  Boggle your mind with this Triva program
TRIVIA   DOC  Documentation for TRIVIA.EXE
 
PC-SIG (Software Interest Group)
1030 East Duane Avenue, Suite D
Sunnyvale, CA  94086
(408) 730-9291
```
{% endraw %}

## TRIVIA.DOC

{% raw %}
```
                       AstroSoft Trivia Game, Version 1.2          










                                  DOCUMENTATION
                                       FOR
            ASTROSOFT TRIVIA GAME - SCIENCE AND ENTERTAINMENT EDITION

                                   Version 1.2



                                  A Trivia Game
                Featuring Questions of Science and Entertainment

               For the IBM Personal Computer and True Compatibles









                Copyright 1983, 1984, 1985, 1986 AstroSoft, Inc.
                  Post Office Box 4451, Hayward, CA  94540-4451
                              All Rights Reserved.

























                                     Page 1





                       AstroSoft Trivia Game, Version 1.2          


                                TABLE OF CONTENTS
                                -----------------

        INTRODUCTION
        THE CONFIGURATIONS SUPPORTED
        THE ASTROSOFT TRIVIA GAME FILES
        HOW TO PLAY THE ASTROSOFT TRIVIA GAME

        APPENDIX A:  The User-Supported Software Concept
        APPENDIX B:  How to Register Your Copy
        APPENDIX C:  Limited License
        APPENDIX D:  Disclaimer













































                                     Page 2





                       AstroSoft Trivia Game, Version 1.2          


                                  INTRODUCTION
                                  ------------

        Welcome  to the AstroSoft Trivia Game - Science and Entertainment 
        Edition  for the IBM Personal Computer and true compatibles.   It 
        is  truly a trivia game to tempt the science genius,  with a  few 
        entertainment categories included for good measure.

        Now,  to  tell  you a little about  ourselves.   AstroSoft  is  a 
        nonprofit,  tax-exempt  educational and scientific  organization, 
        which  includes  among  its activities the offering  of  software 
        intended  primarily for educational and scientific  institutions.  
        We   are   two  dedicated  amateur   astronomers   and   computer 
        professionals  (a software engineer and a senior systems analyst) 
        who devote our spare time to this effort.

        We   encourage  your  reports  of  problems  that  you  may  have 
        encountered,  as this will help us improve future versions of our 
        software.    We   especially   welcome   your   suggestions   for 
        improvements  and  recommendations  for  additional  features  in 
        future releases.

        We  are  pleased  to  offer to you what  we  believe  is  a  most 
        challenging science trivia game.



                                        Martin Morrison
                                        Jerry Gardner

                                        AstroSoft, Inc.
                                        Post Office Box 4451
                                        Hayward, CA 94540-4451
























                                     Page 3





                       AstroSoft Trivia Game, Version 1.2          


                            CONFIGURATIONS SUPPORTED
                            ------------------------

        The  AstroSoft Trivia Game runs on any IBM Personal Computer (PC, 
        XT,  or  AT)  or  true  compatible  with  the  following  minimum 
        configuration: 

             128 kilobytes of Random Access Memory (RAM)
             1 double-sided floppy diskette drive
             Monochrome monitor with monchrome display adapter (MDA)
              or color monitor with color graphics adapter (CGA)
             PC-DOS version 2.10 or above

        The  AstroSoft Trivia Game may run on other configurations of IBM 
        Personal  Computers and compatibles,  but we have not  tested  it 
        thoroughly on any other configurations.  









































                                     Page 4





                       AstroSoft Trivia Game, Version 1.2          


                         THE ASTROSOFT TRIVIA GAME FILES
                         -------------------------------

        The  AstroSoft  Trivia Game is distributed on  one  double-sided, 
        double-density diskette as follows:

             ASTRO.DAT     the astronomy questions
             CATEGO.DAT    the categories of questions
             GRABBAG.DAT   the grab-bag questions
             SCIENCE.DAT   the science questions
             STARTREK.DAT  the Star Trek questions
             STARWARS.DAT  the Star Wars questions
             TRIVIA.DOC    this documentation file
             TRIVIA.EXE    the executable file
             TVSHOWS.DAT   the television-show questions
             WORDS.DAT     the word questions









































                                     Page 5





                       AstroSoft Trivia Game, Version 1.2          


                      HOW TO PLAY THE ASTROSOFT TRIVIA GAME
                      -------------------------------------

        The program is menu-driven.  You select a category and the number 
        of questions you want.  The program displays a question with four 
        possible  answers and waits for your answer.   The  program  also 
        keeps  track of your score,  displays the correct answer when you 
        are wrong,  gives you musical encouragement (or  discouragement), 
        and displays your final score.
















































                                     Page 6





                       AstroSoft Trivia Game, Version 1.2          


                                   APPENDIX A
                                   ----------



                       The User-Supported Software Concept
                       -----------------------------------

        User-Supported  Software  is a concept in  distributing  computer 
        programs, based on three principles:

        (1)  that  the value and utility of software is best assessed  by 
        the user on his own system.   Only after using a program can  the 
        user   really   determine   whether  it   serves   his   personal 
        applications, needs, and tastes;

        (2)  that the creation of independent personal-computer  software 
        can and should be supported by the computing community;

        (3)  that  the copying of programs should be  encouraged,  rather 
        than  restricted,   as  the  ease  with  which  software  can  be 
        distributed outside traditional commercial channels reflects  the 
        strength, rather than the weakness, of electronic information.

        The  software  carries  a notice suggesting a  donation  for  the 
        software.  Making the suggested donation is voluntary on the part 
        of each user.

        Regardless of whether the suggested donation is made, the user is 
        encouraged to make copies of this software and to distribute them 
        to other users, within the terms of the Limited License.

        PLEASE  SHOW YOUR SUPPORT OF THE USER-SUPPORTED SOFTWARE  CONCEPT 
        BY MAKING THE SUGGESTED DONATION AND ABIDING BY THE TERMS OF  THE 
        LIMITED LICENSE.






















                                     Page 7





                       AstroSoft Trivia Game, Version 1.2          


                                   APPENDIX B
                                   ----------



                            How to Register Your Copy
                            -------------------------

        When you make the suggested donation,  your name and address will 
        be  registered to notify you of enhancements to this software  or 
        of  other  software  that  AstroSoft may offer and  to  send  you 
        information from time to time about the software.













































                                     Page 8





                       AstroSoft Trivia Game, Version 1.2          


                                   APPENDIX C
                                   ----------



                                 Limited License
                                 ---------------

        This  Limited  License  is  granted to  users  of  the  AstroSoft 
        Trivia Game - Scientific and Entertainment Edition,  Version 1.2, 
        to  use this software on a private,  non-commercial basis and  to 
        make  copies of this software and distribute them to other users, 
        on the following conditions:

        (1) Copies are to comprise all files on both disks.

        (2)  No  "disc fee" or other consideration is to be  charged  for 
        copying  or  distributing the software,  except a small  fee  for 
        shipping and materials.

        (3)  The notices displayed at program start-up are not to be  by-
        passed, altered, or removed.  

        (4) This software is not to be distributed in modified form or in 
        connection with any other product.

        (5) Copies may be posted for access via  telecommunications,  but 
        only on these same conditions.

        This  Limited  License is not granted to members of  the  Eastbay 
        Astronomical Society, Inc., of Oakland, California.  Such members 
        are   specifically   prohibited  from  any   use,   copying,   or 
        distribution  of  this  software,   except   with  prior  written 
        permission of AstroSoft, Inc., after written application for such 
        permission.                                                 

        Any use,  copying, or distribution of this software indicates the 
        user's acceptance of these terms and conditions.   This  software 
        may  not  be  used,  copied,  or distributed in  any  manner  not 
        provided  for in the Limited License,  except with prior  written 
        authorization of AstroSoft,  Inc.   Any  breach of one or more of 
        these  conditions  constitutes an infringement of  copyright  and 
        theft  of  trade secrets and confidential  proprietary  property, 
        which    is    punishable   under   state   and   federal    law.













                                     Page 9





                       AstroSoft Trivia Game, Version 1.2          


                                   APPENDIX D
                                   ----------



                                   Disclaimer
                                   ----------

        This  software,  comprising  computer  programs,  datafiles,  and 
        documentation,   has   been  furnished  on  an  "as  is"   basis.  
        AstroSoft,  Inc.,  makes  no representations or  warranties  with 
        respect  to this software and specifically disclaims any  implied 
        warranties   of  merchantability  or  fitness  for  a  particular 
        purpose.

        AstroSoft,  Inc.,  reserves  the  right to make  changes  to  the 
        content of this software without obligation to notify any user of 
        such  changes  and makes no commitment to  maintain,  update,  or 
        otherwise provide support for the software.






































                                     Page 10







```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0329

     Volume in drive A has no label
     Directory of A:\

    ACEY     BAS      1276   3-16-85  12:37p
    ASTRO    DAT     12928   8-10-85  12:45p
    CATEGO   DAT       256   3-17-85   2:50p
    CRAPS    BAS      1390   3-16-85  12:36p
    GRABBAG  DAT      6400   3-17-85   5:49p
    SCIENCE  DAT      5248   3-17-85   2:31p
    STARTREK DAT      6016   3-17-85   4:57p
    STARWARS DAT      5888   3-17-85   5:44p
    TRIVIA   DOC     12032   9-03-86  10:06p
    TRIVIA   EXE     27134   9-02-86   8:21p
    TVSHOWS  DAT      6144   3-17-85   2:42p
    WORDS    DAT      5632   3-17-85   7:01p
    ENTRAP   DOC      4807  10-09-86  10:31p
    ENTRAP   COM      9665  10-09-86  10:25p
    ENT-BW   COM      9598  10-09-86  10:22p
    FILES329 TXT       826  11-25-86   9:11a
    GO       BAT      1241   9-29-86  12:22a
           17 file(s)     116481 bytes
                           40448 bytes free
