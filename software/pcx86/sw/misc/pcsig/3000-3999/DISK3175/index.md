---
layout: page
title: "PC-SIG Diskette Library (Disk #3175)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3175/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3175"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## MINDCUBE.DOC

{% raw %}
```


    MINDCUBE GAME    EGA  Maze Block Game
    -------------

    By William Soleau    Version 1.0     December 1990


    Welcome to Mindcube....

    Requires:  EGA (not MCGA) Adapter
               3 Files 
               Mindcube.exe
               Mindcube.ovl
               Mindcube.dat
               Mindcube.doc  (optional) 
                     

    Objective:

        The object of the game is to complete all 7 screen levels
    before you lose your 3 men.  Each level consists of a maze of
    blocks.  Within each level there are 10 special green ($)
    blocks, which you must pick up (all 10) before you can go on
    to the next stage.  Your man is used to push the other blocks
    around so that you can reach the 10 special blocks.  You must
    avoid the spy cameras and time limits and delay traps etc...
    they make it pretty hard to reach the highest level!


    Directions:

        When you first begin the game, you will see the first
    level game board appear.  Once all the pieces have been
    placed, a flashing Red and White block will appear. (on level
    1 it's at the right end of the grid)  This block is your man
    which you move around with the arrow keys.  At the top of the
    screen you will see a time clock.  Each level has a 3:00
    minute time limit.  If time runs out, (even if you have extra
    men) the game is over.  On the far left side of the screen,
    you see the Key definitions and your present inventory.  At
    the beginning of the game you don't have any.  At the bottom
    of the screen you will see your score.  Next to the score, is
    a value score for each special green $ block at that time.
    As time runs out this value decreases, so you want to pick
    them up as soon as possible to get maximum points.  On the
    far right side of the screen, you will see two television
    monitors.  These are for the roving cameras (yellow) on the
    top and bottom of the grid.  Now that all this has totally
    confused you, lets get to the details of each for each
    feature.

    Cameras:
             The two cameras (yellow) at the top of the game
             grid and at the bottom, are constantly on the lookout
             for any intruder (That's You!).  If you pass by
             directly under the camera (from top cam) or directly
             over camera (from bottom cam), then you will be
             detected. The monitors will show your presence and
             you will lose a man.  If you are down to your last
             one, then the game will be over.
                 To avoid the cameras, you can hide under the
             light blue blocks or the special green $ blocks. All
             other types of blocks will not hide you from the
             these monitors.  Sometimes you will have to push
             blocks in the way of long passageways in order to go
             about your business of collecting the 10 green $
             blocks without interruption.  The other way to get
             around these cameras is to jam them.  This you do by
             purchasing jammers (4500 points) from the inventory
             store.


    Inventory Store:

                  At the end of each level, you have the
             opportunity to purchase items which will help you to
             complete each level.  You can also access the store
             at any time during the game by pressing <B>uy.  The
             play will be paused while you complete your shopping.
             You must have at least 2000 points before the store will
             let you in.  There are no soft drinks available...  
         

    The items are as follows:

         1 Block Remover:  Price 2000 points
                           These items allow you to eliminate
                           8 blocks on the grid.  However, it
                           randomly selects them so you can
                           only hope it creates the
                           passageway you need if you're
                           blocked.  If you have purchased
                           one, you can use it at anytime
                           during the game by pressing <R>.

         1 Camera Jammer:  Price 4500 points
                           This allows you to have 10 seconds
                           of Jam time.  When it is activated
                           you can pass in front of them
                           without detection.  There are some
                           levels where this is a must!.  If
                           you have one, you can use it at
                           anytime by pressing <J>.

         1 Teleport     :  Price 5000 points
                           This allows you to zap to another
                           place within the grid.  You'll
                           need this if you get trapped or
                           you have to get to the other side
                           very quickly because of the time
                           limit.  It's expensive, but it
                           might be exactly what you need in
                           a fix.  If you have one you can
                           use it at anytime by pressing <T>.


    Your Present inventory is shown at all times on the far upper left
    side of the screen.


    Blocks:
            There are several different types of blocks you'll
            encounter on each level.  They are as follows:

        Red and White  :   Your Man

        Brown with Dots:   This will eliminate 20 blocks from
                           the grid.  Very valuable!

        Light Blue     :   These are the main blocks which
                           you can push around the screen.

        Pink: Scull    :   If you hit this, you have a 10
                           second time delay.

        Yellow Diamond :   1000 Bonus Points are awarded

        Green ($)      :   These 10 blocks are what you need
                           to get points and to go to the
                           next level.  You cannot go on
                           until all 10 of these blocks are
                           taken.
         
        White Door     :   This appears when you have all 10 green $
                           blocks.  You must reach this door to get
                           to the next level.


    PUSHING BLOCKS:

        You will have to push the blocks around in order to reach
    the green $ ones.  You can push a block as long as it is
    being pushed into an empty space.  Be very careful as you try
    to reach the green ones, because one false push could
    prohibit you from reaching it.  Then you'll have to rely on a
    Block Remover or the Brown Block and hope it creates another
    entry.  Remember!...  If you can't get all 10 green $ blocks,
    the game will be over after 3:00 minutes, so plan ahead and
    push wisely.  You can push a blue block into any other type
    of block except another Blue block or the Green block.  If
    you do this to the other blocks, they will disappear.  You can use
    this technique to get rid of the (Pink) Scull Time Delay blocks.
    However you must be careful because you can also make the
    Diamond Bonus Blocks and the Special Brown Block disappear
    also.


    Keys:

    Arrow Keys  :  To move your Man

    <S>ound     :  Toggles Sound  (on/off)

    sa<V>e Game :  Saves game at this level.  Use it at the start
                   of the level if you want to continue on later
                   if you don't make it.... (Scores will be recorded)

    <L>oad Game :  Loads a previously saved game.

    <B>uy       :  Takes you to the inventory store to buy the
                   items you need.

    <P>ause     :  Pauses play  Toggle

    stuc<K>     :  This is used when you are trapped or want to
                   get to another part of the board.  You will
                   lose one man every time you this is enabled.
                   If you find that you cannot get all the green blocks
                   and you don't have enough points to purchase removers,
                   then this is your last hope.  It also will quicken the
                   end of the game if it's a lost cause.

    <Q>uit Game :  To quit game, or begin a New Game.
                   If you are in a lost position, with no chance of reaching
                   the next level, then press <Q>.  It will ask you if you
                   want to play again.  If your score is in the top 10, it
                   WILL be recorded...

    s<C>ores    :  To view previous top 10 scores.

    If you have inventory:
                            <R>emover :  to remove 8 blocks
                            <J>ammer  :  to jam cameras for 10 sec.
                            <T>eleport:  to teleport your man

                        *  *  *  *  *  *  *


    There are no better ways to tell you how to play this game
    until you've tried it out and discovered the strategies
    for yourself.  I hope you enjoy the game...

       My address and registration form are accessed at the final screen
    within the program itself.

                     Enjoy.......

                                 William Soleau
                                 163 Amsterdam Ave
                                 Suite 213
                                 NYC, NY. 10023




```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3175

     Volume in drive A has no label
     Directory of A:\

    MINDCUBE DAT     20855  12-20-90  10:53p
    MINDCUBE DOC      9636  12-22-90   2:44p
    MINDCUBE EXE    123686  12-22-90   2:28p
    MINDCUBE OVL     39696  12-17-90   7:07p
    READ     ME       8802   5-15-91   9:25a
    GO       BAT        31   6-04-92   2:25a
    GO       TXT      1001  10-27-92   2:07p
            7 file(s)     203707 bytes
                          115712 bytes free
