---
layout: page
title: "PC-SIG Diskette Library (Disk #3306)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3306/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3306"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## RENJU.TXT

{% raw %}
```
                      * * * * * * * * * * * * * * * * *
                      *           VGA-RENJU           *
                      *          Release 2.0          *
                      *          Sep 25, 1992         *
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
             names  including: Renju, Moku and Go-Moku.

        System Requirements

             VGA-RENJU is designed to be played on IBM PC or true
             compatible equipped with a VGA monitor and a mouse.  I had
             considered supporting other PC configurations and will in
             the future if there is a demand for it.

        Shareware Registration

             VGA-RENJU is shareware.  That means you are free to try the
             game, but if you continue to use the game you should
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
             currnt version with their name on the title screen.

                               Playing VGA-RENJU
                               ******************

             When you start the program, a title screen will appear with
             a dialogue box asking if you would like to see the
             instructions.  The first time you play you should quickly
             review the instruction by clicking your left mouse button on
             the Yes box.  Throughout the game you will see similar
             dialogue boxes.  You also use the left mouse button to
             register your answer.

             After the instructions a Set-Up box will appear.  You may
             use the left mouse button to change any of the settings by
             clicking the boxes.  Each of the options are described below
             under the title Options.

        Starting Game Play

             VGA-RENJU is a two player game.  Player 1 is always a human
             but Player 2 may be either a human or the computer.   Each
             player is assigned a colour, either Green or Yellow, during
             the game Set-Up.  The default is that Player 1 is Green as
             Green moves first.  Players alternate placing stones on the
             board points by clicking the left mouse button on the point
             desired.  The object of the game is to either capture five
             of your opponent's pairs or to form a five stone chain ( a
             contiguous line in any direction).  A variation of the game
             eliminates the pair capture option, in which case the game
             is won by forming a five stone chain.

             After each human move, three boxes will "light-up" allowing
             you to:

             QUIT:  once clicked you will be given a chance to end your
             session and return to DOS.

             NEW:  allows you to start a new game with the same setup.

             SETUP:  brings up the SetUp options menu, allowing you to
             change settings.  NOTE:  This option will end the current
             game and start a new game with the new settings.

             BACK:  this returns the board to state it was in prior to
             the players last turn.  This is really useful when playing
             the computer and you make a silly move.  When playing the
             two player version, you may wish to not permit this feature.
             If you do allow Take Backs in the two player version beware
             that the board returns to the previous state of the current
             player.  So if it is Green's turn and the Back box is
             clicked the board returns to the state prior to Green's last
             move.  This effectively eliminates Yellow's last move.

             HELP:  clicking this will make the computer make your move
             for you.  Again this is quite handy when playing the
             computer.  The move will be made with the same level of
             logic the computer is using.

             DEMO:  plays a computer vs computer game using the Easy 
             level of play.

             INSTR  clicking this will bring up the online instructions.
             When you click Done on the instructions you will return to 
             the game in progress.

             ABOUT:  displaying information about VGA-Renju.

        Legal Moves

             Players must make legal moves, if not the computer will tell
             you!  For a move to be legal, the point must be vacant.  You
             may not put a stone on top of another one.  The second part
             of a legal moves deals with Forks.  Forks may be legal or
             illegal depending on what you selected during the Set-Up -
             the default is that Forks are illegal.  Once you are
             familiar with the game try changing this option to make Forks
             legal.  You will find that the game strategy becomes very
             different - it really becomes a new game.

             The on line rules describe a Fork quite well with coloured
             pictures that I recommend you review.  A fork is formed when
             two rows of exactly three stones are joined at a common
             pivot.  If either row has more than three stones it does
             not constitute a fork nor does five in a row. All of the
             examples below are Forks:


                  X X X      X X X X       X           X       X
                  X            X           X X           X   X
                  X            X           X   X           X

             However none of these are Forks:

                  X X X X      X X X       X          X
                  X            X           X X          X       X
                  X            X           X   X          X   X
                               X                 X          X

             Don't worry if your are not clear on what is or is not a
             Fork.  If you form a Fork while playing, a red line will be
             drawn over the stones forming the Fork.  If this happens
             click the left mouse button and the offending stone will be
             removed.  You will then have to choose a new point to place
             the stone.

        Pair Capture

             If you selected Yes to Pair Capture during Set-Up (the
             default) then if is possible to win the game by capturing
             five pairs of stones from your opponent.  Like the Fork
             option changing this to No during Set-Up will change the
             game's strategy.

             A pair capture occurs when you trap exactly two of your
             opponent's adjacent stones between two of your own.  When
             this happens the two stones trapped will be removed from the
             board and placed beside the board under the Pairs Lost.  A
             pair capture must be an aggressive move, see the online
             rules for examples.

        Game Board

             The majority of your screen is the game board.  To place a
             stone you simply click the desired point with the left mouse
             button.  Some mice are more sensitive than others, so if the
             stone does not appear, click the left mouse button again.
             Once you have played a while you will know how long you must
             hold the button down.

        Message Box

             If you make an illegal move, win or lose the game a message
             will appear where the Help Box and Score Board normally are.
             After reading the message click your left mouse button any
             where on the screen and the message will disappear.

        Marking Stones

             The last move made by the computer is marked with a dot.
             This avoids 'losing' the computer's move.  In the two player
             version the last move made by each player is marked.

        Ties

             A tie is declared when the current player may not make a
             legal move.


                                   Options
                                   *******

        Set-Up Box

             The Set-Up box is displayed at the beginning of each 
             session.  After completion of the game you are given an
             opportunity to change the options but you may not change the
             option during a game.  If you are not happy with the options
             selected click on the Quit box, choose Yes to Play Again and
             Yes to Change Set-Up.  The Set-Up box will then be
             displayed.  Each option is explained below:

             BOARD SIZE:  A game of Go is played on a 19 by 19 board.  In
             VGA-RENJU you may choose any size between 9 by 9 to 19 by
             19.  The default is 12 by 12.

             PLAYER 2:  Allows you to select you opponent, either a human
             or the computer.  The default is the computer.

             PLAYER 2 COLOUR:  Allows you choose your opponent's colour,
             remember that Green moves first.  The default is Yellow.

             SOUND:  You may choose NONE (good for those late nights),
             BEEPS (makes those annoying little sounds when you make
             mistakes, lose stones etc) or MUSIC (plays songs and has
             beeps).  If you choose MUSIC you may end a song early by
             clicking the right mouse button.  The default is BEEPS.

             HANDICAP:  If you play the computer you may give it a
             handicap.  The number you choose for a handicap will result
             in that number of the computer's coloured stones being
             placed on random points of the board.  You may choose
             between O and 9 or ?.  If you select ?, the computer decides
             how many stones to play.  The default is 0.

             LOGIC LEVEL:  Three levels of Logic are available: Easy,
             Medium and Hard.  The higher the level the more difficult it
             is to beat the computer and the longer the computer will
             think between moves.  In the Easy and Medium level games the
             computer chooses its move almost instantaneously but in the
             hard level the computer will take several seconds on a large
             board.  This will depend on your machine's capability.  The
             default is hard.

             FORKS:  You may make Forks either Legal or Illegal as
             explained above.  

             PAIR CAPTURE:  You select Yes or No.

        Game Variations

             By varying the Forks and Pair Capture options you may change 
             the game, effectively making new versions.  The default game
             is quite similar to the game of Renju or Moku (Forks are 
             illegal and Pair Capture on).  By making Forks legal and 
             turning Pair Captures off the game becomes very simple, a 
             good game for children.  The object is just to get five in
             a row.  Some people find the Fork rule really frustarting,
             other find it really challenging and a good way to 'suck-in'
             the computer.  Experiment with different options.

             
                                    Files
                                    *****

             You should received two files: 
             
             Renju.Txt       This file - ASCII instructions
             VGARenju.exe    Main Program
             
             Please feel free to pass this program to friends, BBSs etc 
             but make sure both files are included.  If you archive the 
             files please call the archive VGAREN2 with the appropriate 
             extension (zip, arj, pak etc).

                                 Disclaimer
                                 **********

             VGA-RENJU is sold 'as-is', without any warranty as to
             performance or any other warranties whether expressed or
             implied.  Because of the many hardware and software
             environments into which this program may be used, no
             warranty of fitness for a particular purpose is offered.
             The user must assume the entire risk of using the program.
             Any liability of the seller will be limited exclusively to
             product replacement or the refund of the registration fee.

                                  Modifications
                                  *************
      Version 1.1
             
            Changed the design so that the board is not completely
            redrawn everytime there is a Fork or Pair Capture.

            Eliminated the bug that added one to the handicap after
            every game if the the computer was green.

            Added option to view instructions while playing a game.

            More than one function may be executed during each turn.
            For example, you may use both Help and Instr in one turn.

            The mouse is much more sensitive when placing stones on the
            board, version 1.0 required many 'double' clicks.  This may
            cause problems on 486s and even fast 386s.

      Version 2.0

            Logic changed in all three levels (Easy, Medium and Hard), new
            algorithms are much less predicatble.

            Viewing instruction during a game is easier.

            Changed screen layout by adding options for SetUp, New, Demo
            and About.  



                          Other Games by John Girard
                          **************************

        Pegasus  (Requires EGA/VGA and mouse) 
             
             Pegasus is based on a game of Solitaire that is thought
             to have been invented in the early 1700s by Frenchmen
             inprisoned in Solitary confinement.  Although that is
             disputed, it is known that the game was very popular in 
             England by the end of the 1700s.  The games are played on  
             a board with 33 holes. Pegasus includes two games:
             
             Classic Solitaire

             Normally the game starts with 32 pegs in the holes, 
             although the number of starting pegs may vary.  The aim 
             is to remove pegs by jumping them,  leaving a single peg 
             in the center.  Several boards designs and different games  
             are provided, plus there is an option to create your own
             board layout.
             
             Fox & Goose

             Fox & Goose picks up where Classic Solitaire leaves off.
             Played on the same board this game is a computer verus
             human hunt game.  The computer tries to capture Geese by
             jumping them while you try to surround the Fox.  Sound
             easy ... well try it.  Several boards are provided and  
             you may change the number of Geese to increase or decrease
             the level of difficulty.
            


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3306

     Volume in drive A has no label
     Directory of A:\

    GO       BAT        31   1-27-93  12:01p
    RENJU    TXT     17333  10-03-92   9:59a
    VGARENJU EXE    155568  10-05-92   7:59a
    SHOW     EXE      2040   9-12-88  10:48a
            4 file(s)     174972 bytes
                          146432 bytes free
