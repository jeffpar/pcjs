---
layout: page
title: "PC-SIG Diskette Library (Disk #3899)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3899/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3899"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## README.DOC

{% raw %}
```

                 YYY   YYY     AAAAA      BBBBBBBB      !!
                 YYY   YYY    AAA AAA     BBB    BBB   !!!!
                  YYY YYY    AAA   AAA    BBBBBBBBB     !!
                   YYYYY     AAA   AAA    BBB    BBB    !!
                    YYY  ..  AAAAAAAAA .. BBB    BBB ..
                    YYY  ..  AAA   AAA .. BBBBBBBB   .. !!     (C) 1992


    Y.A.B. Baseball will run on any PC/AT (min. 286-CPU) with a VGA and
    a mouse; AdLib-compatible sound boards are supported. About 500 KB
    of memory are required (no XMS/EMS), so it should run on most systems.

    YAB is a shareware product, not public domain or freeware. Everyone is
    invited to try out this program and to distribute it free of charge.
    If you like it and think this to be "one of those programs I could
    imagine to buy for that price!", I wouldn't mind if you did.
    Perhaps idealistic, the shareware concept provides a fair deal for the
    users, whether or not it is fair for the author is decided by them.

    Send 20 Deutschmarks (current equivalent is about US$13) to
    Tom Fresen, Kollenrodtstr. 64,  30161 Hannover, Germany
    Students, unemployed, disabled or any other financially disadvantaged
    group are charged only half of that.




    Now for some brief instructions how to play. The most frequently asked
    question, "how do I hit the ball" is answered further on (line 175..)



    In the menus you will find some points that require some comments:

    EASY/HARD PITCHING    At "EASY", you will be able to see the direction
                          of your pitch while selecting the latter with the
                          mouse. "HARD" makes you do this blindly.

    EASY/HARD BATTING     Like with "pitching" above, you don't see what you
                          are doing if you select "HARD".

    YOU CATCH/AUTOCATCH   If not hit by the batter, each pitched ball will
                          be caught by the catcher if "AUTOCATCH" is on.
                          Otherwise you must move the glove to the ball to
                          get it.

    CURVEBALLS YES/NO     If you play versus a beginner, do not throw
                          curveballs. This switch determines wether your pitcher
                          is able to throw them or not.



   how to control the teams
   ------------------------

   The field team is ALWAYS controlled using the mouse, the keyboard makes
   the batting team do what you want. This means you have to take your hands
   of the keyboard and move over to the mouse after one half of an inning
   and back to the keys after another. Believe me, I thought very long on it.



   the field team
   --------------

   The fielders always will go and get the ball automatically, the player
   on the mouse will have to wait until they have. If the fielders can't
   catch the ball while in flight, they will take it from the ground and
   if necessary run to it in the first place.

   The #1 idea for you is: LEFT button throws the ball,
                           RIGHT button does something different.


   Normal situation of play, no pitching or battingwindow on the left:

          If a fielder has got the ball, you will see a small baseball in
          the mouse pointer. This means you are able to throw the ball
          away or do something perhaps even more useful with it.

          THROW THE BALL:
               Move the mouse pointer to where the ball should go, then press
               the LEFT button. The ball will have a reasonable height to
               be received at the target point.
               To throw to another fielder, just click one; note the yellow
               frame around the fielders while you point the "mouse" on them.

               Of course, your fielders aren't any supermen and cannot throw
               as far as you sometimes will like them to. Very far throws
               thus will be unprecise and slow.

          TAG A RUNNER:
               If the fielder with the ball is next to a runner on his way
               between two bases, move the mouse pointer to your fielder and
               press the RIGHT button to try to tag him.
               If you click a fielder who doesn't have the ball, you cannot
               tag a runner, neither you can't if no runner is near you.

          RUN TO THE NEXT BASE:
               Click a fielder (usually a baseman) to go to the next base
               with the RIGHT button. This fielder needn't to have the ball.

          RUN TO ANY PLACE:
               Click a fielder like above, HOLD the RIGHT button and drag
               the mouse pointer to the new location. Release the button
               and the fielder will follow you.

          GIVE A NEW FIELD POSITION:
               You may give your fielders a new permanent position on the
               field (the computer player does so, too). If your opponent
               very often bats to the right field, why not position the out-
               field players a little bit more right.
               Select a fielder with the RIGHT button, drag the mouse pointer
               to the new position (right button held!) and additionally press
               the LEFT button, then release the buttons.
               Note: pitcher and catcher can't be moved, outfield players
                     cannot be moved into the diamond.

          PREPARE TO PITCH:
               If no runner is still on the run between the bases, click
               a free space (no fielder selected) with the RIGHT button.
               If he didn't have the ball already, the pitcher will get
               the ball, and the pitching window is shown:



   PITCHING WINDOW:
        Select your "target" zone moving the mouse, note the catcher's glove
        following your movements.
        At the time the window appears, the "target" is the center of the
        strike zone.
        To select a pitch, press the LEFT button. The longer the button is
        held down, the slower the pitch will be.
        While the button is pressed, you still can move the mouse to make
        the ball curve in to the direction you are dragging the mouse.
        If you release the left button again, the pitching window becomes
        the BATTING WINDOW.
        If you press the RIGHT button at any time during the pitching window,
        the latter will disappear, cancelling the pitch. You are then back
        to the normal mode (see above) and may for example throw the ball to
        a baseman to get a stealing runner.



   BATTING WINDOW:
        You now see the batter's back and the pitchers front.
        A swing-bar is displayed and disappears after a while, after which
        the pitcher executes the selected pitch. All this happens auto-
        matically. The only thing the pitcher can do is to cancel the pitch
        while the swing-bar is still visible. If not cancelled, the pitch
        is now executed.
        With the mouse you now control the catcher's glove. If you didn't
        select AUTO CATCH in the settings-menu, you now have to catch the
        ball moving the glove to where the ball goes. If you don't catch the
        ball, the catcher (automatically but costly in terms of time) will
        get the ball from behind him.

        If your catcher has got the ball, press

           LEFT button to return the ball to the pitcher and
                         go to the pitching window

           RIGHT button to close the batting window and go back to
                         normal mode.




   how to controll the batting team:
   ---------------------------------

     The batting team is controlled using the numeric keypad, '1' through '9'
     as directions ('5' means center), '0'/'Insert' is your "fire button".

     How to bat:

        After the pitcher selected his pitch, the batting window appears.
        You now see the swing-bar, which disappears after a few seconds.
        During this time you can choose power and type of your swing.
        To do this, hold down the fire-button. You see a yellow bar growing,
        after this a blue bar, then a black one.
        If you release fire button, the bar stops growing and your swing is
        selected.

           YELLOW BAR: you will try to bat quite normally and beat the
                       ball up into the sky. A short yellow bar means
                       with little power, a full bar could be a homerun.

             BLUE BAR: try a grounder.
                       a "short blue one" should become a bunt

            BLACK BAR: held down fire button for too long
                       you will try a random valued "yellow" swing,
                       but definitly earn no homerun

           Those colours don't appear if you selected "HARD BATTING" in
           the menues. Only do this if you know what you are doing.

           NOTE: until now, you didn't swing at anything, you only selected
                 what you will try to do.

           Now the pitcher will automatically execute his throw.
           Press your fire button and hold it down, now watch the ball
           approaching the strike zone. If you feel like batting the ball,
           press the proper direction key.
           (if the ball comes in nicely over the plate in a medium height,
            the proper key is the '5'. For a lower ball tending a bit to
            the left, press '1', and so on).
           Remember to hold down the fire button before you press any
           direction key, and don't try to get everything the pitcher
           throws at you that isn't clearly in the strike zone!

           If you pressed the right button (the program decides which one
           that is), ball will exactly do what you intended when you
           selected the swing. If you chose a wrong key, you get a somewhat
           less perfect result depending on how wrong you were.
           For example, if you hit a ball too high, you most certainly will
           get a grounder; should you swing too low, the chances on a
           "moon-ball" grow.
           But should you want to bat a high and left-tending pitch with
           a '3' for low & right, please do not mind if you miss it, 'cause
           you found something like the "completely wrong button"

           Depending on when you hit the ball the computer determines the
           direction of the ball. Swung earlier, it will go to the left,
           swung later to the right. Just try it out.



     How to run, steal & slide...

        Use the keys for left, up and right (4,8,6) to control the runners
        (as long as there are any on the bases).

        If you have a runner on a base and want him to steal to the next
        base, press the key for the base he stands on to make him move
        (right='6' for 1st Base, up='8' for 2nd, left='4' for 3rd base).
        If you want the runner to run back to where he came from, press
        "his key" again.

        Example: On each of the 1st and 2nd base is one runner.
                 Pressing "right", the one on 1st tries a steal, so both
                 runners advance.
                 Pressing "up" now, the one that was on 2nd goes back,
                 forcing the one behind him (the one who was on 1st)
                 to go back as well.
                 Had you pressed "right" instead, only the one who came
                 from 1st would run back to 1st, the one from 2nd running
                 on to 3rd base.

        Once the batter hit the ball, the batters start to run. If you
        expect a fly-out, you can make your runners go back to the bases
        this way.

        To make a runner slide, just press fire button. The computer will
        select the runner who is to slide for you automatically.
        Sliding gives you a chance to escape a fielder trying to tag you out,
        but it makes you slower of course. If you aren't in a hurry reaching
        the next base, just use it for fun.


* still unmentioned
-------------------

  ESCape returns you from the game to the menus

  P pauses the game

  the program was written entirely in turbo pascal 6.0

  this game is dedicated to the memory of kevin the hamster

  & please support the shareware concept !
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3899

     Volume in drive A has no label
     Directory of A:\

    YAB!     ZIP    330090   8-26-93   8:36a
    PKUNZIP  EXE     29378   2-01-93   2:04a
    GO       BAT       724   3-15-94   4:44p
            3 file(s)     360192 bytes
                            1024 bytes free
