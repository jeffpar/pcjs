---
layout: page
title: "PC-SIG Diskette Library (Disk #3170)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3170/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3170"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                  <<<<  PC-SIG Disk #3170 OILCAP  >>>>                   ║
╠═════════════════════════════════════════════════════════════════════════╣
║                                                                         ║
║  To print the documentation, type:  COPY OILCAP.DOC PRN  (Enter)        ║
║                                                                         ║
║  To start the game, type:  OILCAP5  (Enter)                             ║
║                                                                         ║
║  To print the registration form, type:  COPY OIL_REG.DOC PRN  (Enter)   ║
║                                                                         ║
║                                                                         ║
║                                        (c) Copyright 1992, PC-SIG Inc.  ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## OIL_REG.DOC

{% raw %}
```


                              OILCAP GAME
     
                              Version 5.0

                         by  William Soleau
                             163 Amsterdam Ave #213
                             NYC, NY.  10023


         Yes I would like to register OILCAP with this $12.00
     check.  Because I use the game regularly, I want to honor the
     Shareware concept.  I understand the registration will speed up the
     loading and exiting of the program and give me unlimited levels of
     play.  With the registration, I also will be able to receive any other
     of your games at reduced prices. So here is my $12.00 check, and 
     please RUSH me my upgrade key!

          (Registrations outside the USA add $1.00 for postage,
          money orders or checks drawn on US banks only please!)


         My Name and Address is:


                -------------------------------------------------

                -------------------------------------------------

                -------------------------------------------------

                -------------------------------------------------

         I got this program from: _______________________________





           Make Checks Payable to:

                                     William Soleau
                                     163 Amsterdam Ave
                                     Suite #213
                                     New York, NY. 10023

```
{% endraw %}

## OILCAP.DOC

{% raw %}
```



                       * * * OIL CAP ARCADE GAME * * *

                    Program by William Soleau   March 1991
                    Requires Mouse and EGA Graphics Card

                                 Version 5.0

          
                                 INSTRUCTIONS

        Welcome to Oil Cap....

             The game Oil Cap pits you against the clock as you try to
        create links which will allow the oil to flow freely, once it
        starts to begin oozing from the rocks.  The game board is a 11 x 8
        grid.
             At the start of each level, there will be a starting square.
        It will be obvious, however it does say "Start" on it.  It is from
        this grid that the oil will begin to flow once the clock timer
        gets to 0:00.  At the bottom of the screen (below the game board),
        you will see four blocks of links.  Your mouse cursor will be on
        the forth one across.  This is the present link to be placed.
        Select that link by pressing the left button on your mouse.  The
        link will then disappear, and your cursor will now be visible on
        the game board.  You must remember what that link looked like
        because you won't be able to see it again until you place it on
        board.  Simply find the grid with your mouse where you want to
        to put the link.  Press the left button again and it will then be
        placed there.
             Once you place the link, the other pieces below will move over
        one, and the process is repeated until the oil starts to flow and
        runs out of links to pass through.  You can still place links on
        the game board even while the oil is flowing.  Don't let the oil
        run out of links or that level will end and the score will be
        totaled.  

        Note * See added features for version 5.0 / allowing you to speed
               up the oil once you've finished placing all your links at 
               the end of these directions.


                                 Special Links

             There are many special links which you can use to increase
        your score.  Bonus links sometimes appear on the grid board. Each
        one of these has either 100/200/500/1000 points written on it.
        If you can make the oil pass through these links, that number will
        be added to your total at the end of the round.  Also you will
        find special 50 point link's that occasionally will come along
        to be placed by you.  These links are very squiggly.  This makes
        the oil spend more time getting through them, thus giving you
        valuable time, racing to keep ahead of the gushing oil.

             You cannot place links on any black grid or the starting
        grid.  Also once the oil starts to flow, and has passed through
        a link, it also cannot be replaced by a new link.  You ARE allowed
        to place a link on top of an existing link, however there will be
        a time delay of 4 or 5 seconds in which you will have to wait
        before you can continue to lay links.  Therefore place your links
        carefully and think ahead.  By looking at the links that are
        coming up, you can figure out just where to place the link to the
        best advantage.  Certain links are built like this (+) which means
        that the oil can either pass down through it or across it.  If
        you can get the oil to pass through itself, then 100 points will
        be added to you score.  If you can get 4/8/12/16 crosses of oil,
        you also get bonus points. (see scoring)

            At some levels, there will be a floating black grid that will
        move around the board each time you select a link to place.  It
        sometimes will appear in the place you might want to put your
        present link... get the idea!  (you'll have to wait until your
        next selection to make it move)

                                   Oil Rigs

             At certain levels there will be a Oil Rig on the game board.
        No matter what, you must make the flowing oil end up there, or
        the game will be over.  You get an extra 100 points to do this.

             The round will end once the oil has found it cannot continue
        to flow.  The points will be then be totaled up.  For each link
        not used, it will deduct 60 points from your score.  To continue
        onto the next level you must have at least a certain number of
        points, which is calculated as follows.

        (your present score)+ 200 + ( Level*20 )

        Therefore at level 1, you need at least 220 points in order to
        go to the next level.  The score you need to reach for the next
        level will be shown at the bottom of the screen, along with
        your present score and the level.  On the right hand side of your
        screen, there is a special box marked crosses, which will keep
        track of how many times you got the oil to cross itself during
        game play.

             The game will end if you do not reach your total needed for
        continuation of play, or if there is an Oil Rig present on the
        grid board and you did not end the flow of oil there, no matter
        how many points you scored.  Remember!  If you see a Oil Rig on
        the game board, YOU MUST END THERE! or the game will end.

                            CLOCK / OIL SPEED

             On the upper right hand side of the board will be the clock.
        At the beginning, you will have 40 seconds to place your links
        before the oils starts to flow.  At the higher levels, the clock
        will only give you 35 then 30...25 etc....
             The speed of the oil flow will increase at level 7.


       NOTE:        For 33mhz Computers Only or Real Cheaters

           If you have anything under a 33mhz computer the game will set
           the proper speed.  If you find that it is too fast, then create
           a special file called OILCAP.SPD and put 0 in the file.
           To do this:
               At the Dos prompt type -> COPY CON OILCAP.SPD   (enter)
                                 type -> 0                     (enter)
                                 press <F6>



                                 SCORING

                      50 point links   =    50 points
                     100 point links   =   100 points
                     200 point links   =   200 points
                     500 point links   =   500 points
                    1000 point links   =  1000 points

                       4 oil crosses   =  1000 points
                       8 oil crosses   =  3000 points
                      12 oil crosses   =  5000 points
                     16+ oil crosses   = 10000 points

                             Oil Rig   =   100 points

                         Unused link   =   minus 60
                      Unused Oil Rig   =   Game over


                                 Bonus Rounds


            Every 10000 points, you will get a special bonus round.  You
        don't have to worry about reaching any score to continue.  All
        points you acquire, will be added to you score.  Unused links will
        not be subtracted, so the bonus round can only increase your
        score.



                         * Version 5.0 New Feature *                    
                    
                     Speeding up oil when links are placed

        If you have placed all your links down and are just waiting for the
        oil to finish running through the pipes, just press the <SPACEBAR>
        to speed oil to its destination.  This will eliminate the waiting
        time while the oil flows through your links.
        


                      ***       Conclusion       ***

             Upon the ending of the game, your score will be compared to
        the top 10 high scores.  If you are within the top ten, you will
        be recorded as such.  This version has a total of 12 levels, for
        unlimited levels see the Upgrade details below.


                            ***     Enjoy     ***



                             Upgrade Description

             The details on how to upgrade the program are provided
        at the closing screen.  With the registration of your game,
        you have access to as many levels as you can reach.  Past
        level 12, things start to get more difficult.  The pieces which
        you see at the bottom of the screen, will be reduced from 4 to
        3 to 2...  thus making it harder to plan ahead.  There are
        quite a number of challenges at the higher levels, especially
        as the countdown clock speeds up.  So for more details see
        closing screen.


 

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3170

     Volume in drive A has no label
     Directory of A:\

    OILCAP   OV1     17424   4-08-91   1:17p
    OILCAP   OV2     57532   4-26-91   5:24p
    OILCAP5  EXE    111866  10-12-91   4:26p
    OILCAP   DOC      8973  10-12-91   4:42p
    OIL_REG  DOC      1494  10-12-91   4:46p
    GO       BAT        31   6-04-92   2:25a
    GO       TXT      1001  10-27-92   2:16p
            7 file(s)     198321 bytes
                          119808 bytes free
