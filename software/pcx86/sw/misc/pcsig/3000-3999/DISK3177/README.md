---
layout: page
title: "PC-SIG Diskette Library (Disk #3177)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3177/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3177"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                <<<<  PC-SIG Disk #3177  MARBLE MAN  >>>>                ║
╠═════════════════════════════════════════════════════════════════════════╣
║                                                                         ║
║  To print the documentation, type:  COPY MARBLE.DOC PRN  (Enter)        ║
║                                                                         ║
║  To start the game, type:  MARBLE  (Enter)                              ║
║                                                                         ║
║  To print the registration form, type:  COPY MARBLE.REG PRN  (Enter)    ║
║                                                                         ║
║                                                                         ║
║                                           Copyright 1992, PC-SIG, Inc.  ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## MARBLE.DOC

{% raw %}
```



         MARBLE MAN GAME       Version 1.0            June 1991
         ------------------------------------------------------
                                   by

                              William Soleau

                              Written using
                              QuickBasic 4.5
                                Probas 4.0
                                 Gfonts


                         ***   Directions  ***


         Welcome to Marble Man......

             The object of the game is very simple.  There are two players.
         You are the Blue man and the computer plays the Red man.  At the
         start of each game, there will be Red balls placed on the grid at
         the top and an equal number of Blue balls matching this pattern on
         the bottom.  The objective is for the players to push their balls
         to the other side of the grid.  The blue player tries to push his
         balls up, and off the top, while the red player pushes his balls
         down to the bottom.  Each ball contains the a value corresponding
         to its position on the grid.  For the Blue balls, the nearer they
         are to the top of the screen, the higher the value.  The same is
         true for the Red player, but in reverse.

              Each player takes a turn by moving his man and pushing one of
         his balls.  He cannot push his opponents balls. Once a ball has
         been pushed, the other player takes a turn.  There are grey tiles
         in various parts of the grid.  These are walls that cannot be moved
         (or pushed through).

              If a ball is pushed to the sides of the grid and off, it will
         disappear and the value of that ball will be subtracted from your
         score.  Therefore you must either push your ball off the other end
         of the grid board, or keep it on the playing field.

              When a player cannot make anymore moves, the other player will
         continue to play until he cannot move either.  If you have a move,
         you must take your turn, you cannot skip your turn, even if it is
         to your advantage to pass it to the next player.  The computer will
         tell you if one side cannot move, and give the appropriate player
         another turn until no more moves by either player are possible.
         The player with the highest point total will win the game.

                               **  Scoring  **

          Each row towards your opponent end is worth 2 pts.
          Therefore the Red ball on row 3 is worth 6 pts.  2x3=6

          A ball that is pushed to the top or bottom of the grid, depending
          on the player, is worth 100 points.  The score is a combination
          of all the points made pushing the balls off the top or bottom
          grid, plus the point value of the balls remaining on the game
          board.


          Balls can only be pushed either up, down, left or right.  They
          will be pushed in a direction as long as nothing is in their way,
          such as another wall or another ball.


                           ** Key Assignments **

          All options can be accessed at any time during play by pressing
          the <F1> key, which brings up the Main Menu.

          Arrow keys move Blue man

          Main Menu
          ---------

          <T>oggle Sound     :  Turns sound on/off           (default=on)
          <S>peed            :  Speeds up play of game  1-3  (default=2)
          <N>ew Game         :  Stops the present game and begins a new one
          <L>evel            :  Sets level of opponent  1-3  (default=2)
                                (this option can only be set BEFORE you take
                                 your first move.  Once the game has started,
                                 you cannot change the level of the Red Man.)
          <Q>uit Game        :  Exit Marble Man



                             **  Conclusion **

               As you play the game more, you will develop different
          strategies which will help you improve your scores.  Each game is
          different and requires total strategy.  There is no luck involved.

               If you find this Shareware game is a worthy addition to your
          game collection, then a $12.00 registration fee is requested.
          With this registration, the speed at which you enter and exit the
          game will be faster.  The registration gives you an unlimited
          number of initial marble setups at the start of each game.

               As with all my shareware games, any registered user of one
          of my games, gets any other game of mine (there are over 40) at
          reduced rates.  A list of games and special bonus offers will be
          sent with each registration.

               The registration form can be found either at the closing
          screen or in the file  Marble.reg.

          So go to it and marble away.........




                                William Soleau
                                163 Amsterdam Ave
                                Suite #213
                                New York, NY. 10023



                             *   *   *    *    *    *

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3177

     Volume in drive A has no label
     Directory of A:\

    MARBLE   DOC      5386   6-29-91   2:45p
    MARBLE   EXE    137424   6-30-91   9:15p
    MARBLE   OV1     29430   6-25-91   9:33p
    MARBLE   OV2     19718   6-27-91   2:29a
    MARBLE   REG      1574   6-30-91   9:42p
    GO       BAT        31   6-04-92   2:25a
    GO       TXT      1001  10-27-92   1:54p
            7 file(s)     194564 bytes
                          123904 bytes free
