---
layout: page
title: "PC-SIG Diskette Library (Disk #3176)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3176/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3176"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                 <<<<  PC-SIG Disk #3176 GOLDHUNT  >>>>                  ║
╠═════════════════════════════════════════════════════════════════════════╣
║                                                                         ║
║  To print the documentation, type:  COPY GOLDHUNT.DOC PRN  <enter>      ║
║                                                                         ║
║  To start the game, type:  GOLDHUNT  <enter>                            ║
║                                                                         ║
║  For a catalog of the author's products, type:  TYPE READ.ME  <enter>   ║
║                                                                         ║
║                                                                         ║
║                                         (c) Copyright 1992, PC-SIG Inc. ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## GOLDHUNT.DOC

{% raw %}
```





        The Goldhunt Adventures...



        Program Designed by William Soleau
        Version 1.0   December 1990

        Requires:   EGA  (not MCGA)

        Goldhunt.exe : Main Program File
        Goldhunt.ovl : Goldhunt Screen 1
        Goldhunt.ov1 : Goldhunt Screen 2



             Welcome to the Goldhunt Adventures.  The object
        of the game is to reach all 10 levels of the
        adventure.  Your man in Blue, is trying to pick up all
        the Green Gold Pots on each level.  There are 12 pots
        per screen.  Once these 12 pots are taken, a special
        door will appear.  Reach that door and you will move
        onto the next level.
             Of course there are things which are trying to
        prevent you from reaching your destination.  The
        first obstacles, are the red devils that move around
        the grid.  These monsters will capture you if you are
        located on the same row or column.  However, there
        are light blue blocks scattered around the maze which
        you can hide behind.  These blue blocks can be pushed
        around by your man.  The devil cannot capture you are
        behind one of them.  The other object you can
        shield yourself from these creatures with, are the
        green pots of gold.  Once you capture a green pot
        though, it disappears and you will not be able to
        hide behind it.
             Once you have captured all the Pots of Gold, you
        must then try to enclose the devils so that they
        cannot move in any direction.  If all the pots are
        taken (12), then the devil will disappear and a
        special door will appear allowing you to move to the
        next stage.  If the devil is surrounded by blocks
        before all 12 pots are taken, then he will instantly
        appear in another part of the maze.
             Some levels have one devil and some have two.
        Remember once the pots are all taken, you must
        surround all the devils on the grid with blocks
        before the special door will appear.

            The other obstacle which appears on the screen,
        are 4 stationary purple floor sensors.  These flash
        on and off at various times.  When they are lit up,
        they will capture you (like the devil), if you are in
        the same column or row.  These too can be avoided by
        pushing blocks in front of them.  The purple sensors
        cannot move, however you must be very careful to
        create blockades with the blocks, so that you can
        reach all 12 pots of Gold.  On the levels with the
        sensors, once all the pots are taken, the door will
        appear.

             There are a total of 10 floors which you must
        complete to finish the game.  Of course this is
        rarely done...  however,  you will soon develop
        strategies which will help you acquire more points
        and further levels.

             On each level there are yellow stars which are
        worth 1000 bonus points.  However these stars will
        not shield you from the Sensors or the Devils.  If
        you push a block into them the will disappear and
        will not be captured.


        Scoring and Time Limit:


             Each level has a time limit of 3:00 minutes.
        The clock is on the top right of the screen.  If time
        runs out before you reach the door (after the pots
        are taken...and the devils surrounded) then the game
        will be over, even if you still have men remaining.

             This version gives you 5 men to play the game
        with.  See the registration details within the
        program to allow for more men.

             Points are acquired for each pot and bonus star
        taken.  The point value of the pots however goes down
        as the time runs out.  The value of the pots is
        shown also at the top of the screen.  The sooner you
        capture the pots, the more points you will acquire.
             There are times when a pot will be surrounded by
        blocks and you will not be able to reach it.
        Therefore, there is a special key <R>emove Blocks,
        which will randomly make 5 blocks from the board
        disappear.  Using this key each time however, will
        cost you 3000 points.

             So now you know the basics of the game.  The
        best way to learn is to just start right in and play.
        The key definitions are shown at the bottom of the
        game board.  They are as follows:

        Keys:
                Arrow keys     :    Move Man
                <P>ause        :    Pause Play
                <S>ound        :    Toggle Sound (on/off)
                <R>emove Blks  :    Remove 5 blocks(-3000pts)
                <H>igh Scores  :    Top 10 high scores
                <Q>uit         :    Exit Program


                            ENJOY............


                        William Soleau
                        163 Amsterdam Ave.
                        Suite 213
                        NYC, NY.   10023

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3176

     Volume in drive A has no label
     Directory of A:\

    GOLDHUNT DOC      5224  12-22-90   7:27p
    GOLDHUNT EXE     98584  12-22-90   6:59a
    GOLDHUNT OV1     14706  12-20-90   1:05p
    GOLDHUNT OVL     11357  12-20-90   2:32p
    READ     ME       8802   5-15-91   9:25a
    GO       BAT        31   6-04-92   2:25a
    GO       TXT      1001  10-27-92   1:00p
            7 file(s)     139705 bytes
                           18432 bytes free
