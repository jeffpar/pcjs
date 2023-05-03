---
layout: page
title: "PC-SIG Diskette Library (Disk #3178)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3178/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3178"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                 <<<<  PC-SIG Disk #3178 Tribolo  >>>>                   ║
╠═════════════════════════════════════════════════════════════════════════╣
║  To Print documentation, type;  COPY TRIBOLO.DOC PRN  (Enter)           ║
║                                                                         ║
║  To Start the game, type;  TRIBOLO  (Enter)                             ║
║                                                                         ║
║                                                                         ║
║                                           Copyright 1992, PC-SIG, Inc.  ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## TRIBOLO.DOC

{% raw %}
```





                         EGA STRATEGY GRID GAME


            TRIBOLO  by William Soleau  Version 1.0  April 1991

                       Req. EGA  (Mouse optional)


        * Note *

          The default for Tribolo is using a mouse.  The instructions
          are for mouse interface.  The computer will sense if a mouse
          is installed.  If not installed,  your moves will be
          accessed by the arrow keys and the <enter> key will be used
          to place your piece.  If for some reason you have a mouse
          and it does not seem to be working properly with the game,
          create a dummy file callled "NOMOUSE" in the directory where
          the game resides.  This file will make the default for the
          game the keyboard.  To create this file at the dos prompt
          type->  copy con nomouse   (press return)
          type->  nm                 (press return)
          (press the F6 key and then press return)

                  *     *     *     *     *     *


               TRIBOLO (THREE WAY OTHELLO) GAME RULES

           The object of the game is to have the majority of your
       color squares on the board at the end of the game.  The rules
       are quite simple, it takes a minute to learn and with
       practice you'll see yourself improving steadily.

           In the game of Othello, you play against a single opponent
       and all your strategies are straight forward.  However, in
       Tribolo, not only is the game board always different, but you
       now have two opponents!  This makes all the old othello
       strategies useless, you'll discover why as you begin to play.

           There are three colors; you are Blue and the computer
       plays your two opponents, Red and Green.  At the beginning of
       each game (un-registered version), the board will appear with
       12 randomly placed tiles of each color scattered on the game
       board.  There are also 12 grey tiles, which remain there for
       the duration of the game.  You cannot place your pieces on
       these grey tiles.
           When you first begin, you will be asked to press any key.
       The computer will then randomly decide who goes first.  It
       does not play favorites!

           On your move, the mouse cursor will appear on the game
       board.  Move the mouse to an empty square (white) on the board,
       the click the left button to place your piece.  A move consists
       of outflanking your opponents squares by putting it so that
       your color is on either side; or diagonally , of your opponents
       squares (Red or Green).  You must be able to flip over one of
       the opponents to your color, or the move is not valid.  The
       computer checks all valid moves.

           Now here is where Othello players will have to re-learn the
       game.  You can only turn over your opponents if they are of all
       the same color, whether it is up,left,down,diagonal...etc.

        b  represents your move        B=blue  R=red  G=green

       Example:   BRRRRRb    you would capture all the Red squares
       between your two Blue ones.  Therefore it would flip them
       to look like this: BBBBBBb.  A square may outflank any number
       of squares in one or more rows, in any number of directions at
       the same time, horizontally, vertically or diagonally. (A row
       is defined as one or more squares in a continuous straight
       line)

       However, using the same example, let's say a green was also in
       the line of red tiles...

              Example:
                        BRGRRRRb    This is not valid

       This would be an illegal move because the colors between your
       two blue colors are not all the same color.

       Other Example:   (A block of colors)

           Your Move-> bGBRRB   Flips to->   bBBRRB
                       RRGRRG                BBGRRG
                       BRBGRR                BRBGRR


              If on your turn, you cannot flip at least one of your
       opponents color, your turn is forfeited and play passes to the
       next player.  The computer will tell you if this is the case.
       However, if a move is available to you, you may not forfeit
       your turn.  Sometimes it's hard to find out just where it is
       that you have a valid move.  At anytime during your turn, you
       can press the <P>ossible key, and it will show you all the
       possible places you can place your tile.  By pressing the
       <B>est key, the computer will show you where you can turn over
       the most tiles.  However, sometimes this is not to your
       advantage, so use your own judgement.  Also some might consider
       this cheating...  you be the judge.

           You many not skip over your own color square to outflank
       an opposing square.  Square(s) may only be outflanked as a
       direct result of a move and must fall in the direct line of
       the square placed down.

             Example:    bRRRBRRB  flips to  bBBBBRRB


           The game is over when either all empty squares have been
       filled or when it is no longer possible for any player to flip
       any opponents squares.  The computer will give you a running
       score of squares on the top of the screen.  When the game ends,
       the one with the most squares of his color will be the winner.


       Key Assignments:
                        <S>ound  =  Toggles sound on/off
                        sa<V>e   =  Saves game board so that you can
                                    continue at a later time.
                        <L>oad   =  Loads a previously saved game.
                                    This can only be used at the start
                                    of a new game.
                        <B>est   =  Shows your best possible square
                                    for turning over the most tiles.
                                    (not always the best place!)
                        <U>ndo   =  Takes back your last move
                      <P>ossible =  Shows all your possible placement
                                    opportunities.
                      <N>ew Game =  Starts a new game/does not record
                                    game in scores.
                        s<C>ores =  Shows scoreboard
                                    The wins and losses and ties are
                                    recorded for all colors.  A tie
                                    does not get recorded as a win for
                                    the two players involved, but goes
                                    into the tie category.  Your
                                    percentage of wins is also shown,
                                    based on the number of games
                                    played.   If you have the highest
                                    number of squares turned blue at
                                    the end of the game, and that is
                                    the highest you've ever had.  You
                                    will be asked to input your
                                    initials and that total will be
                                    shown also.
                           <Q>uit   Quits Tribolo program



                          ***  Conclusion  ***


            This version allows you a different game board every time
        you play the game.  This is called the standard board #7.  In
        the registered version, you will have access to other game
        boards with various set-ups.  Each with it's own score card to
        record wins and losses.  At the end of the program, you can
        view these game boards if you want to by pressing <S>ee... at
        the final screen.  Information on registering is also shown on
        the closing screen.

                    Now start Triboloing.....   and enjoy!!!



                              William Soleau
                              163 Amsterdam Ave
                              Suite #213
                              New York, NY. 10023

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3178

     Volume in drive A has no label
     Directory of A:\

    TRIBOLO  EXE    121046   4-21-91   6:10a
    TRIBOLO  OV0     48608   4-19-91   8:57p
    TRIBOLO  OV1     68914   4-18-91   5:24p
    TRIBOLO  OV2     71845   4-19-91   7:50p
    TRIBOLO  DOC      8358   4-21-91   5:49a
    READ     ME       8802   5-15-91   9:25a
    GO       BAT        31   6-04-92   2:25a
    GO       TXT       770  10-02-92   1:07p
            8 file(s)     328374 bytes
                           28672 bytes free
