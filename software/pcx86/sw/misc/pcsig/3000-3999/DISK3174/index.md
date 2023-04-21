---
layout: page
title: "PC-SIG Diskette Library (Disk #3174)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3174/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3174"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## LAVA_REG.DOC

{% raw %}
```



                         LAVA CAP SHAREWARE GAME
                              Version 1.0

                         by  William Soleau
                             163 Amsterdam Ave #213
                             NYC, NY.  10023


         Yes I would like to register Lava Cap with this $15.00 check.
     Because I use the game regularly, I want to honor the Shareware
     concept.  I understand the registration will speed up the loading
     and exiting of the program.  The registered version also has
     unlimited levels that I will be able to access.   With the
     registration, I will be able to receive any other of your games at
     reduced prices.  So here is my $15.00 check, and please RUSH me my
     special upgrade key and a list of your other games and bonus
     offers!


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

## LAVACAP.DOC

{% raw %}
```





                          *** LAVA CAP GAME ***

                           by William Soleau
                           Version 1.0  Jan.92

                           Req. EGA/VGA & Mouse


                 ************** Directions **************


             The objective of Lava Cap is to create a series of sequential
        paths to contain the lava flowing out of the erupting volcano.  The
        longer the lava can flow freely without reaching a dead end,  the
        higher the score.

             For those of you familiar with my Oil Cap game, this game is
        played exactly the same way.  The rules are simple,  yet it takes a
        lot of strategy and quick thinking to reach the higher levels.

             The playing board is a 17x11 sized grid.  At the beginning of
        each level, a volcano will be placed in one of these grids.  This
        will constitute the starting point when the mountain erupts.  You
        have seven different shaped canals that you will use to create a
        pathway from the top of this volcano.
             Located at the bottom of the screen you will see four pieces
        ready to be placed.  The mouse cursor will be visible above the
        piece which is next in line to be placed onto the game board.
        You select the canal by clicking the left button of your mouse.
        The piece will disappear and your mouse cursor will now be visible
        on the game board.  Select the grid where you would like that
        piece to appear.  If that grid is available, click the left button
        again and the piece will instantly appear in that grid.  The mouse
        cursor will then move to the bottom awaiting your next selection.


                     **  Valid grids to place canals  **


        There are several grids that you will not be allowed to place
        your canal.

        1: Volcano
        2: Green, Pink, or Gray Grids
        3: One Way Canals (signified by arrows in certain directions)
        4: Special Yellow and Black Ending Grid
           (On Some levels your lava must finish flowing into this grid)
        5: Canals with lava already in it.

        The computer will not allow you to place your piece on any of these
        grids.  You can however place your piece on top of an existing canal
        (you previously placed) yet you will lose 2 or 3 seconds of valuable
        time to do so.


                             *** Clock / Timer ***


             When a new level begins, a clock located at the bottom of the
         screen will count off one minute.  When this minute is over, the
         lava will start to flow out of the volcano.  You may still place
         canals once the lava begins to ooze through your passageways.  Your
         objective is to keep ahead of the lava, so that it never reaches
         a dead end.



                         ***  Scoring / Bonus Points ***

              As the lava flows through the canals, you will see your score
         (located at the bottom of the screen) start to increase.  The longer
         the lava flows the higher your score will be.  There are several
         bonus points that can be earned in the following ways:

         1.  To get the lava to cross over itself will be worth an extra
             100 points.  If you get four or more crossings of lava on a
             single level, you will be awarded more bonus points.

             4  Crosses = 500   points
             8  Crosses = 1500  points
             12 Crosses = 3000  points
             16 Crosses = 5000  points
             20 Crosses = 10000 points
             24 Crosses = 15000 points
             28 Crosses = 25000 points
             32 Crosses = 30000 points

         2.  Bonus Grids are sometimes placed onto the game board before the
             start of play.  They either have a 50 or 150 point number
             written on them.  If you can get the lava to pass through these
             canals, that point value will be added to you score.


         3.  The Green and Pink grids are placed onto the game board in
             pairs.  If you can get the lava to flow into one of these
             colored grids, then 200 points will be added to your score.
             (The lava will then commence to flow from the other grid of
             the same color located somewhere else on the game board.)


         4.  Every 10,000 points earned will give you a bonus round.  You
             can only increase your score in these special rounds.  No
             points are deducted for unused canals.


                 **  Scores Needed to Reach the Next Levels  **


             If you can accumulate enough points before the lava reaches
         a dead end, then you will be allowed to continue onto the next
         level.  The computer will tell you how many points are needed
         in order to proceed to further levels.  The points needed per
         level are computed using this formula:

               ( 60 * LEVEL ) + 250  +  (previous level score)

         Example:

         Level #1   ( 60 * 1 ) + 250  :  You need 310 or more points to
                                         continue.

         Level #6   ( 60 * 6 ) + 250  :  You need 610 points above your
                                         score from the previous level.


              If you can reach this point total upon the completion of a
         level, you will be allowed to continue onto the next one.  Don't
         worry about this formula, for the computer will show you the score
         you'll need to reach. (right below your present score total)


                              **  Deductions **


              At the end of each level, the computer will add up your number
         of lava crossings to see if you qualify for any added bonus points.
         Each canal not used will be erased from the game board and it will
         cost you 25 points per canal that went unused.  The computer will
         deduct these points from your score.


              Only in one instance can you reach your point total and not
         qualify to go onto the next level, and that is when a special
         Ender grid (Black and Yellow) is not used.  On various levels,
         this Ender grid will be placed onto the game board at the start
         of the level.  You must make sure you end the lava flow into this
         special grid or the game will be over no matter how many points you
         have accumulated.  The computer will warn you at the start of these
         special levels.


                        ***** ***** ***** ***** ****

                              ** Conclusion **


             The best way to find out how to play the Lava Cap, is to
         jump right in and start playing.  You'll find the interface is easy,
         and in a minute or so you will understand the fundamentals of the
         game.  The following is the Key Menu.


                  Left Button (Mouse)  Selects and Places Canals

                  <K>ey Menu       :  Brings up the key definitions

                  <P>ause          :  Pauses the game

                  <H>igh Scores    :  Shows Top Ten Best Games

                  <S>ound Toggle   :  Turns sound on or off

                  <L>ava Speed up  :  Used when you are finished placing
                                      canals and don't want to wait for the
                                      slow moving lava to reach the end.

                  <B>linking Toggle:  Some color monitors might experience
                                      some flickering while playing the game.
                                      This will eliminate the quick palette
                                      changes and eliminate the flicker.

                  <Q>uit           :  Exits Lava Cap




              This version of Lava Cap has 20 levels.  Very few of you
          will be able to reach this highest level.  Check out the
          registration information at the close of the program to see about
          the upgrade for unlimited levels or see the file LAVA_REG.DOC .
          As I said before,  most of you will never even get to level 20,
          however there are a few gamers who seem never to give up and may
          want to try the levels further on.

              If you find this game worthy of your game collection, a
          registration of $15.00 dollars is requested.  This will allow you
          to enter and exit the game faster and also give you access to
          unlimited levels.  As with all my Shareware games (over 40),
          any registered user of one of my programs will have major
          discounts on any registrations thereafter.  Even if you decide
          not to register the game, I hope you will enjoy it.


                        ***   Now go to it!  ***


                               William Soleau
                               163 Amsterdam Ave.
                               Suite 213
                               NYC, NY.  10023

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3174

     Volume in drive A has no label
     Directory of A:\

    LAVA_REG DOC      1607   1-27-92   4:50a
    LAVACAP  DOC      9311   2-01-92  11:51a
    LAVACAP  EXE    109602   2-04-92  12:04a
    LAVACAP  OV1     28698   1-25-92   2:36p
    LAVACAP  OV2     34861   1-26-92   2:18p
    GO       BAT        31   6-04-92   2:25a
    GO       TXT      1001  10-27-92   1:42p
            7 file(s)     185111 bytes
                          132096 bytes free
