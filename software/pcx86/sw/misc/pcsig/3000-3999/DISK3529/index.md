---
layout: page
title: "PC-SIG Diskette Library (Disk #3529)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3529/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3529"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## JOUST.DOC

{% raw %}
```



                      ----------  Joust VGA  ----------
                               Dave Sharpless
                                  4/18/90

        Thank you for downloading Joust VGA. Better yet, thank you for
    reading the doc file!  This doc file includes : how to play, game
    background info, and how to register.


    I. How to play

              Joust will run on virtually any computer with VGA support.
         Just enter JOUST at dos prompt and if everything's o.k. the title
         screen will come up.

              Press any key to move on to the high score table (at this
         point JOUST.HIS will be read from/created on your disk).

         On this screen you can do the following :

         Q : quit and go back to DOS

         P : Select one or two(registered) player mode.

         F : Change player 2 flap key.

         space : begin play

         Player one has the keyboard assignments of ALT (flap), Z (left)
         and X (right), Player 2 has CAPS (or CTRL) (flap), 1 (left)
         and 2 (right).  The reason Player 2 may change its flap key is due
         to variation of keyboard layouts. On MY keyboard the CAPS is
         right next to the 1/2 keys on the numeric keypad. On some other
         keyboards such as Omni Key, there is a CTRL key in the same place.
         Pick the key best suits player 2.

         Game play :

             Your mission is to stay alive and 'joust' as many gladiators
         as possible. This is done by 'flapping' to get your lance higher
         than theirs. The faster your press flap, the faster your ostrich
         with move up the screen. After you joust a gladiator he will mutate
         into an egg, all you have to do now is finish the job by touching
         the egg, you get points by performing the joust itself and by
         picking up the egg. Warning! if you let an egg sit too long it
         will hatch into another gladiator! (usually a meaner one).

         Survival waves :

             Every 5 waves (starting at wave 2) you come across a
         survival wave, these waves have the extra incentive of staying
         alive the entire wave to pick up an bonus of 3000 points.

         Pterodactyl waves :

             Sometimes called the screaming demon this evil looking bird
         constantly tries to hunt you down. You cannot joust him like
         you would another gladiator, killing a pterodactyl is done by
         position your lance perfectly inside its mouth (not easily done
         but yes, it is possible). 2000 points are given for killing
         a pterodactyl.

         Egg waves :

             Every 5 waves (starting at wave 5) you will come across an Egg
         wave. This wave is a type of bonus screen all you have to do is
         run around and pick up the eggs but HURRY it can turn into much
         more than that,  after some time, the eggs will hatch and if you
         do not move fast enough it can turn into a very hard wave.

         Other waves :

             Wave  3 : A fire from the lava catches the lower island on fire
                       and burns out most of it, creating another threat of
                       accidently falling into the lava.

             Wave  4 : Don't get too close to the lava!  Now you have a
                       'lava troll' to worry about. A hand will come out
                       of the lava, grab your ostrich by the legs and try
                       to yank you and your ostrich into the lava.

             Higher waves : As you progress onto higher waves things begin
                            to get tougher. The lava troll begins to reach
                            higher and pull harder, eggs hatch sooner,
                            different color gladiators with more skill
                            come to join the fight, the total
                            number of gladiators on the screen at one time
                            will also increase.

             You will notice on may waves (starting at wave 6) that some
             of the islands will vanish. This is to make the game more
             interesting.


    II. Game background

            I began working on Joust VGA about 10 months ago (starting with
        my own graphics/image makers)  Joust was a lot of fun to program,
        however it did take some patience!  I give credit to Ron Sharpless
        for drawing all the graphics.

            Game play on joust is pretty good on a 12 MHz AT,  it has
        been tested on 8008's and 80386's. With an XT, the game is still
        very playable, your ostrich just becomes a little less responsive.
        With a 386, your ostrich becomes VERY responsive and game play is
        a little more difficult, but it's still fun...



    III. Registering information

        Please remember that Joust VGA is Shareware, not just free software.
        Like all Shareware you are expected to purchase it after you've given
        it a reasonable trial.

            I hope you enjoy Joust VGA, if you would like to have a
        SIMULTANEOUS TWO PLAYER MODE(registered) version of Joust VGA,
        send $10.00 to my address below.  I have found two player mode
        to be very fun in joust,  you and your partner can work as a
        team or as enemies.

            Most shareware authors request $5-$15 for simple games that
        took somewhere from a weekend to a week to write. Joust VGA took
        me almost a year to write and I'm asking for $10 which seems
        quite reasonable.

            Even if you're not registering Joust VGA, write and
        tell me what you think about it!

                                Dave Sharpless
                                11643 Vermilion Rd.
                                Oberlin, OH 44074


```
{% endraw %}

## MARIO.DOC

{% raw %}
```





                  ----------  Mario Brothers VGA  ----------
                                 Version 1.0
                                Dave Sharpless
                                   11/26/90

        Thank you for downloading Mario Brothers VGA. Better yet, thank you for
    reading the doc file!  This doc file includes : how to play, game
    background info, and how to register.


    I. How to play

              Mario Bros will run on virtually any computer with VGA support.
         Just enter MARIO at dos prompt and if everything's o.k.  the title
         screen will come up.

         Press any key to move on to the high score table (at this point
         MARIO.HIS will be read from/created on your disk).

         On this screen you can do the following :

         Q : quit and go back to DOS

         P : Select one or two(registered) player mode.

         K : Redefine game play keys.

         space : begin play

         Game play :

              Your main objective is to keep the area free of pests.  To do
         this, you must jump and bump the layer under the pest to flip it over.
         Once flipped you have a limited amount of time to get on the same
         level as the little creature and 'kick' it off.

              You'll encounter numerous obstacles as well as various types of
         creatures.




    II. Game background

              I started on this game around the time Joust VGA registrations
         started coming in (about 6/20/90). Using a couple of small assembly
         language routines from Joust, my graphics editor, and the gained
         programming experience, made this project a lot faster than Joust.










        III. Registering information

            I hope you enjoy Mario Brothers VGA, if you would like to
        have a SIMULTANEOUS TWO PLAYER MODE version of Mario Brothers VGA,
        send $15.00 to my address below.  You'll find that working as a team,
        you'll be able to reach higher levels then before.


            Even if you're not registering, write and tell me what you think
        about it!


        Oh, by the way...If you were putting off registering Joust VGA, wait
        no more!  Send $25 and I'll register both Joust VGA (V 1.2) and Mario
        Brothers VGA (V 1.0)

                                Dave Sharpless
                                11643 Vermilion Rd.
                                Oberlin, OH 44074
-----------------------------------------------------------------------------
Update Information :

Version 1.0 - 1st release  11/26/90

  1.  Finished game

  2.  Wrote .DOC file

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3529

     Volume in drive A has no label
     Directory of A:\

    JOUST    DOC      5982   4-19-90   8:35p
    JOUST    EXE     47052   4-17-90  10:47p
    MARIO    DOC      2728  11-26-90   7:32p
    MARIO    EXE     46440  11-26-90   7:34p
    SHOW     EXE      2040   9-12-88  10:48a
    GO       BAT        34   3-25-93  11:58a
            6 file(s)     104276 bytes
                           54784 bytes free
