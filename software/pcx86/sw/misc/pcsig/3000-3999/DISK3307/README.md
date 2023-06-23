---
layout: page
title: "PC-SIG Diskette Library (Disk #3307)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3307/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3307"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## PEGASUS.TXT

{% raw %}
```
                      * * * * * * * * * * * * * * * * *
                      *            Pegasus            *
                      *          Release 2.0          *
                      *       September 25, 1992      *
                      *                               *
                      *          John Girard          *
                      *      446 Novavista Drive      *
                      *          Winnipeg, MB         *
                      *            CANADA             *
                      *            R2N 3V9            *
                      * * * * * * * * * * * * * * * * *


                                 Introduction
                                 ************

        History of the Game
             
             Pegasus is based on a game of Solitaire that is thought
             to have been invented in the early 1700s by Frenchmen
             inprisoned in Solitary confinement.  Although that is
             disputed, it is known that the game was very popular in 
             England by the end of the 1700s.  Pegasus includes two 
             games: Classic Solitaire (made famous by the commercial
             versions) and Fox & Goose, a less known but equally fun
             game.  Both games are played a board with 33 holes. 
             

        System Requirements

             Pegasus is designed to be played on IBM PC or true
             compatible equipped with a EGA or VGA monitor and a mouse.  
             I had considered supporting other PC configurations and 
             will in the future if there is a demand for it.

        Shareware Registration

             Pegasus is shareware.  That means you are free to try 
             the game, but if you continue to use the game you should
             register with the author by sending a registration fee of
             $5.00 to the author at the above address.  That really is
             quite a good deal and by supporting shareware authors you
             will be able to continue obtaining quality software at very
             reasonable prices.  You may also freely copy this game and
             give it to your friends provided you do not charge for the
             program and do not alter any part.

             When you register the game, please let me know what version 
             you have and what you think of the game.  I would appreciate
             any comments you have on improving the game or any problems
             that you discover.   All registered users will be notified
             of new versions and changes that have been made.  Users who 
             submit a registration of $10.00 or more will be sent the
             currnt version with their name on the title screen and a new
             shareware program to try.

                               Playing Pegasus
                               ***************

             When you start the program, a title screen will appear. 
             You must press a mouse key to continue the game.  

        Choosing a Game

             The "Current Game" is shown in the bottom right hand 
             corner.  To change to the other game click the "Game"
             box with the left mouse botton.

        Game Controls

             Use your left mouse button to click on the following
             buttons while they are black, buttons which are light
             gray in colour are inactive:

             QUIT:  Exits the game and returns to DOS. 
             
             NEW:   Starts a new game with the same setup.
             
             BACK:  Each click takes back one turn.  While playing 
             Classic Solitaire ou may click BACK repeatedly to move 
             all the back to your first move.  This is handy when 
             'think' you are close to solving the puzzle.  While 
             playing Fox & Goose you may only move back one move.

             BOARD: Allows you to choose one of the three builtin
             board layouts:  Full, X Board or Hollow Square.  Each 
             one has a different combimation of lines changing the
             strategy for each.  You may also choose to "Change
             Pegs".  If you are playing Solitaire this will allow
             you to pick one of three starting layouts: Classic 
             (32 pegs), Cross or Triangle or you may choose to 
             "Design Own" which allows you to customize the pegs.
             If you are playing Fox & Goose "Change Pegs" permits 
             to change the number of Geese.

             DEMO: Plays a game to show you the rules.

             INSTR: An abbreviated online version of the rules.

      Choosing Pegs to Move

             To move a peg in either game, simply click on the peg
             with the left mouse button.  The peg will change colour.
             Then click on the hole to which you wish to move the 
             peg to.  If it is a legal move the peg will be moved to
             the new hole.  

                          Rules of Classic Solitaire
                          **************************

             The object of Solitaire is very simple, you try to remove
             as many pegs as you can from the board.  Ideally all pegs
             but one will be removed and the remaining peg will lie in
             the centre hole.  Pegs are removed by "jumping" them.  Pegs 
             may jump backward, forward, sideways or diagonally along 
             the board's lines (line vary from board to board).   

                            Rules of Fox & Goose
                            ********************

             Fox & Goose is a computer verus human game.  The computer
             plays the Fox and you play the Geese.  The Fox tries to 
             eliminate the Geese by jumping them while the Geese try to
             surround the Fox so that it is trapped and can not capture
             any more Geese.

        Goose Movement 
        
            The Geese may move one space in a forward, sideways or diagonal
            direction along the boards lines (note some boards do not
            permit diagonal movement).  Geese may not move backwards.

        Fox Movement

            The Fox may move one space in ANY direction along the boards 
            lines OR may jump a Goose as in Classic Solitaire.  Geese
            which the Fox jumps are removed from the board.

        Geese Victory

            The Geese win if they surround the Fox so that the Fox may
            move or capture any Geese.  If the Fox is in a position
            that it may not move but there is vacant hole adjacent to it
            then the game is a tie.

        Fox Victory

            The Fox wins if it captures enough Geese that they can
            no longer surround it OR if the Fox moves below all of
            the Geese.

             
                                    Files
                                    *****

             You should received four files: 
             
             Pegasus.exe     Main program
             Pegboard.scr    Graphics for the board
             Pegtittle.scr   Graphics for the tittle screen
             Pegasus.txt     This file - ASCII instructions

             The *.scr files are not required to play the game.
             They only provide graphic screens, so if you are short
             on space or do not like 'Flying Horses" you may 
             remove these files.

             Feel free to pass this program along to friends, BBS
             etc; however, make sure all four files are included.
             If you archive this program please call it PEGASUS2
             with the appropriate extention (zip, arj, pak etc).


                                 Disclaimer
                                 **********

             Pegasus is sold 'as-is', without any warranty as to
             performance or any other warranties whether expressed or
             implied.  Because of the many hardware and software
             environments into which this program may be used, no
             warranty of fitness for a particular purpose is offered.
             The user must assume the entire risk of using the program.
             Any liability of the seller will be limited exclusively to
             product replacement or the refund of the registration fee.

                          Other Games by John Girard
                          **************************

        VGA-Renju

             VGA-RENJU is a variation of the game of Go, an ancient game
             from the Orient.  Go has been played for at least 2000 years
             and is considered the most popular game in the world today.
             Despite this, Go is not very well known in North America.
             Go is a game of position played on a board of 19 vertical
             lines and 19 horizontal lines.  The intersections of these
             lines are called points and this is where the players place
             the game pieces known as stones.  Go is a very complex game
             which challenges Chess in terms of movement strategy.  VGA-
             RENJU is modelled after a simpler variation known by many
             names  including: Renju, Moku and Go-Moku. (Requires VGA 
             and mouse)


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3307

     Volume in drive A has no label
     Directory of A:\

    PEGASUS  TXT      9552   9-26-92   1:03p
    PEGASUS  EXE    136240  10-03-92   9:14a
    PEGTITLE SCR     37489   9-05-92   1:39p
    PEGBOARD SCR     12258   9-05-92   8:58p
    GO       BAT        37  11-11-92   5:10p
    SHOW     EXE      2040   9-12-88  10:48a
            6 file(s)     197616 bytes
                          121856 bytes free
