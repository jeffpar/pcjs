---
layout: page
title: "PC-SIG Diskette Library (Disk #3117)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3117/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3117"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## README.DOC

{% raw %}
```















    ----------------------------------------------------------------------






                            S  T  R  A  T  E  G  Y

                              Shareware  Version


                           (c) 1991 by Markus Mueck







    ----------------------------------------------------------------------



       Before playing Strategy, please read this instruction manual
       carefully; otherwise playing Strategy will just waste your time.


  1. About the shareware concept
  ------------------------------

  This is the SHAREWARE version of the military strategy game STRATEGY. This
  means that this version of STRATEGY is allowed to be copied freely to all
  people you know; moreover this is even desired, because STRATEGY may not
  be purchased in any shop. But the owner of the SHAREWARE version of STRATEGY
  is entitled to test the game only, not to play it regularly. If he wants
  to do so, he must pay a registration fee and will get a personal version
  of STRATEGY with much more features than this SHAREWARE version covers. This
  personal version, of course, must NOT be copied to anyone else. The
  registration fee is as low as

                 20 DM   when ordered from GERMANY     (postage included)
                 15 US-$ when ordered NOT from GERMANY (postage included)
                 18 US-$ when ordered NOT from GERMANY (air mail included)

  and includes the following:

                 - the game STRATEGY, very similar to the shareware version
                 - 40 different areas
                 - Random area creator
                 - Area editor
                 - A real good manual (with many pictures, tips, ...)
                 - The offer to buy new image-graphics modules for
                   10 US-$ each (then you may play in old Egypt or in an
                   african desert, fight against wicked bandits, ...)
                 - Support of the shareware concept and the encouragement
                   of mine to program further great shareware games


  When you want to get a registered version of strategy and all the great
  advantages listed above, just send the money in an envelope (well hidden)
  or a check (when ordered from Germany) to the following address:

                 Markus Mueck
                 Fuenf-Baeume-Weg 76
                 7900 Ulm
                 West-Germany

  Another possible way to get a registered version of strategy is the
  following one: If you know someone who owns the full registered version
  of strategy just send the following registration fee to me and copy
  the original discs and the manual of your friend:

                 12 DM   when ordered from GERMANY
                  8 US-$ when ordered NOT from GERMANY

  In that case you'll get a letter confirming that you are an registered
  owner of STRATEGY. If you are a few friends who all want to own STRATEGY,
  just one of you has to order the full version and all the other have
  to pay the lowered registration fee. All this can even be done in one go.


  Please support the shareware concept and regsiter yourself. It took me quite
  a long time to write such a program (nearly 13.000 lines), not mentioned the 
  debugging of it and I would appreciate your contribution very much.


  2. The required hardware to play strategy
  -----------------------------------------

  Strategy is not a game of the early computer years and therefore requires
  modern hardware like

              - A IBM PC/XT/AT/386 or 486 or compatible computer
                (AT 10 Mhz is recommended)
              - A EGA/VGA or compatible graphics card
              - A color EGA/VGA monitor
              - A Microsoft compatible mouse
              - A good deal of memory (I tested it with 640k but less
                may be much enough, try it !)

  STRATEGY uses an EGA graphics mode and some EGA specific internal commands.
  That's why VGA users won't see the title and end-picture scrolling softly
  into the screen, it'll just appear. To make this great feature work despite
  of the use of your VGA graphics card, switch to the EGA compatible graphics
  mode (most VGA cards can be switched to EGA with software delivered with your
  card). If you do so, STRATEGY may not regonize the EGA-mode of your VGA
  graphics card as an EGA nor VGA graphics card and warn you not to start it.
  In that case, just press the 'Y' key to go on and enjoy STRATEGY including
  professional softscrolling.


  3. The object of STRATEGY
  -------------------------

  STRATEGY is a game for two players and "The aim of the game is to attain" 
  the headquarter of the other player. There is no computer mode because
  STRATEGY is a very complex game and no computer would be a real substitute
  for a human being.
  At the beginning of the game both players have the same number of armies,
  tanks, engeneers and medical oderlies. They have to place them in a part of
  the landscape known to them. Each of these units has special abilities
  and will play an important role in the further game. Many units will be lost
  on both sides during heavy battles. But some unharmed ones will try to get
  near the headquarter of the enemy which is placed, guarded and protected 
  well by the other player. That player who reaches the other headquarter 
  first will be the lucky (but just luck didn't help the winner, believe me.
  STRATEGY is a strategy game !) winner.
  But there are many ways to win the game and many orders to give all not
  mentioned above. They are far too complex to be described in a few lines; 
  so read on and discover the world of STRATGY.


  4. Starting strategy
  --------------------

  After starting strategy you will have the choice between the folling options:

     - Start new game: If you choose this option by clicking your left mouse 
       button on it you may choose among three differnt areas (Standard area, 
       Living area and Advanced area) and the game will start.
     - Load saved game: Have you saved an old game before ? Then you are
       able to restore it and play on where you saved it by clicking the 
       left mouse button on this option. Now you just have to enter the
       name and path where you saved the old game (example: a:\games\hallo).
     - Quit: If you click the left mouse button right on this option you'll
       leave STRATEGY immediately.

  When you start STRATEGY for the first time, click your left mouse button on
  the first option. Then there will appear a small box writing "PLAYER 1"
  meaning player one has to move next. To make sure that the other player won't
  see the area known to you, click first the left mouse button and then
  the right mouse button.
  As mentioned above STRATEGY is a two player game. Therefore it is extremely
  important that the other player doesn't see the area of his rival. So make
  sure that the other player can't look at your screen when you move or place
  your units.


  5. The area
  -----------

  The whole area consits of 40 x 60 places. The first 40 x 10 places are known
  to player one and the last 40 x 10 places on the other side of the area are
  known to player two. This area is marked with a black line on the buttom
  (first player) and on the top (second player) of that part of the area that
  is visual from the beginning on. Each player has absolute visual control of
  this zone and will therefore see any move of his enemy in this sector.
  The size of the whole area is so large that it doesn't fit on your screen by
  far. That's why it is necessary to select the visual area whenever you want.
  The latest position is marked with two circles, one in the box of the buttom
  of the screen (vertical position) and one in the box of the right side of the
  screen (horizontal position). Just click the left mouse button on one of
  these boxes specifying which part you like to see next and it will appear 
  at once.


  6. Placing your units
  ---------------------

  Is your wicked friend really not watching your screen ? If not, press, as 
  described in the last lines, the left and then the right button of your 
  mouse. Now you see a part of your discovered area (only your zone is visual
  to you from the beginning, the other landscape is not discovered by you and
  therefore not visible). Place the circle in the box of the buttom of the 
  screen to and fro to watch your complete zone.
  The time has come to find out a strategic place to put your units onto. This
  is in most cases the buttom (player two: top) of the visual area. You may
  NOT place your units on the following:

                      WATER      -  A light blue place
                      SWAMP      -  A grey place with yellow plants on it
                      QUICKSAND  -  A strange place with many colors

  and, of course, on places not known to you.
  When you have chosen the place for your first unit, click the one you want
  to place on the top of the screen. The selected unit is highlighted with
  red color. Next to its name you can see the remaining number of these
  units. Just click your left mouse on the desired unit (when it isn't 
  hightlighted) and on the place you want it to be. Clicking the left mouse
  button on a placed unit will remove it from the screen and increase the
  number of it on the top of the screen by one.
  The units will be described in the follwing lines. Only the MINES, the last
  "units" to choose from will be explained here. You have three mines to place
  wherever you want in your area. These mines are not visible to your enemy
  and the unit tapping on it will be dead. So choose its place carefully,
  because after having placed all units you'll have to find a grass-place
  for your headquarter which should be well guarded by both living units and 
  mines.


  7. Armies
  ---------

  Armies play a very important role in STRATEGY. Because they are fast, can
  see much and can go through water.
  Armies see as many as the following places around them:

   NOT on a hill:             On a hill (a red/orange place like a mountain):

     ++++++++++               ++++++++++++++++
     +  +  +  +               +  +  +  +  +  +
     ++++++++++               ++++++++++++++++
     +  +  +  +               +  +  +  +  +  +       "Ar" represents the
     ++++++++++               ++++++++++++++++       place the army stands on
     +  +Ar+  +               +  +  +  +  +  +
     ++++++++++               ++++++++++++++++
     +  +  +  +               +  +  +Ar+  +  +
     ++++++++++               ++++++++++++++++
     +  +  +  +               +  +  +  +  +  +
     ++++++++++               ++++++++++++++++
                              +  +  +  +  +  +
                              ++++++++++++++++
                              +  +  +  +  +  +
                              ++++++++++++++++

   This is how much armies can see when there is no tree nearby. If there's
   a tree (e.g. in front of them) they can't look through it, of course. So
   always think of what your units really see. There may be many units visible
   of your enemy which you passed by and have moved of their own, NOT visible
   to you. You can only believe in what your units see right now.
   Armies get hurt when they walk onto swamp or quicksand, so don't touch it 
   when possible. But they can walk through water when they have all their 
   four moves left. Moreover they are able to dig ditches. When a army is in 
   a ditch it is far stronger in battle and can only be seen when a unit stands
   directly in front of it. Just type "D" on a grass-place to dig a ditch and
   again to remove it. This may be important because both players are able to
   use ditches, no matter which player made them. Beside of that armies are
   able to destroy bridges. Press "E" for "erase bridge" and specify the bridge
   to destroy by pressing the left mouse button on it. This will only work
   when there is a bridge beside your army and it has all four moves left.
   Some facts:


             Moves/turn          : 4
             Strength            : 100
             Can do damage       : 1-25 (not in a ditch)
             Can do damgae       : 1-40 (in a ditch)
             Move onto swamp     : Strength - 25
             Move onto quicksand : Strength - 15


   These facts have the following meaning:
   Moves/turn : Each time your unit is highlighted with a white box, you
                may move it MOVES times by one place each.
   Strength   : This is the strength the unit has at the beginning. It is
                lowered during fights or walks through swamp or quicksand
                and can be refreshed with medical orderlies only. When the
                strength is 0 or lower the unit is dead and can't be used
                any more.
   Can do d.  : When a battle starts the attacker will be attacked first. And
                your units can substract from the strength of your enemy
                1 to "Can do damage" points of strength.
   Move on sw.: The strength of your unit will be lowered by that amount when
                walking onto swamp. Remaining on swamp won't hurt your
                unit.
   Move on qu.: The strength of your unit will be lowered by that amount when
                walking onto quicksand. Remaining on quicksand won't hurt your
                unit.

   8. Tanks
   --------

   Tanks play an important role as well as armies do. They are very strong
   and heavy units, but therefore slower than armies. Use tanks to defend
   your headquarter and to secure important ways. In most cases they are too
   slow for a frontal attack. Tanks can't walk onto water and see as much as

         ++++++++++
         +  +  +  +
         ++++++++++         "Ta" repesents the place your tank stands on.
         +  +Ta+  +
         ++++++++++
         +  +  +  +
         ++++++++++

   Tanks have beside fighting only the ability to destroy bridges. Press
   the "E"-key to do so. It is only possible if a bridge is beside you and
   your tanks has all moves left.
   Some facts:

             Moves/turn          : 3
             Strength            : 200
             Can do damage       : 1-55
             Move onto swamp     : dead
             Move onto quicksand : Strength - 80


   9. Engeneers
   ------------

   Engeneers are in some areas not very important, but in others absolutely
   necessary. You will see why after getting to know how much they can see:


         ++++++++++
         +  +  +  +
         ++++++++++         "En" repesents the place your engeneer stands on.
         +  +En+  +
         ++++++++++
         +  +  +  +
         ++++++++++


   Engeneers have the very important ability to build bridges. To do so they
   need 1 "material" and all moves of one turn (and, of course, water beside
   them). At the beginning of the game they have 10 "materials". You may
   build a bridge by pressing "B" and spcifying the place to put it onto. Now
   all units can walk over this piece of water until this bridge is destroyed
   again by an army or a tank. It can be important to do that when all your
   units have passed the bridges, because the other player may use the bridge
   as well.

   Another important thing engeneers are able to is to discover mines. If they
   move onto a mine, they will deactivate it immediately.
   The facts:


             Moves/turn        : 4
             Strength          : 1
             Can do damage     : --
             Move on swamp     : Strength - 0
             Move on quicksand : Strength - 0


   Be careful: Engeneers die immediately when they are attacked.


   10. Medical orderlies
   ---------------------

   Medical orderlies see as much as


         ++++++++++
         +  +  +  +
         ++++++++++         "Me" repesents the place your medical orderly
         +  +Me+  +         stands on.
         ++++++++++
         +  +  +  +
         ++++++++++


   Medical orderlies have the special ability to heal armies and tanks a
   little. Healing takes just one move and may be done by pressing "H" for
   "heal" and clicking on the unit to be healed with the left mouse button.
   Some facts:


             Moves/turn          : 4
             Strength            : 1
             Can do damage       : --
             Move onto swamp     : Strength - 0
             Move onto quicksand : Strength - 0

   Be careful: Medical orderlies die immediately when they are attacked.


   11. Spies
   ---------

   Spies are another strategic element of STRATEGY. You have at the beginning
   of the game five spies which you may use during the game or not. Pressing
   "S" for "set spy" will allow you to place a spy on any place known to you.
   Now you can move your spy ten turns over everything you like. Thus you can
   discover the area not known to you and find out the best way to get to the
   headquarter of your enemy fastest. Or you can save the spies till the end
   of the game and discover the position of the headquarter of the other
   player. But be careful - you have only five spies and you will need them.
   Spies see as much as

   NOT on a hill:             On a hill (a red/orange place like a mountain):

     ++++++++++               ++++++++++++++++
     +  +  +  +               +  +  +  +  +  +
     ++++++++++               ++++++++++++++++
     +  +  +  +               +  +  +  +  +  +       "Sp" represents the
     ++++++++++               ++++++++++++++++       place the spy stands on
     +  +Sp+  +               +  +  +  +  +  +
     ++++++++++               ++++++++++++++++
     +  +  +  +               +  +  +Sp+  +  +
     ++++++++++               ++++++++++++++++
     +  +  +  +               +  +  +  +  +  +
     ++++++++++               ++++++++++++++++
                              +  +  +  +  +  +
                              ++++++++++++++++
                              +  +  +  +  +  +
                              ++++++++++++++++


   12. Check your units
   --------------------

   Sometimes it is important to know how much strength an army or tank has
   left or how much material an engeneer has spent. Press the "C" key for
   "check" and click on the unit you want to inspect. Then the facts will
   be shown to you on the top of the screen. A click of the left mouse
   button will return to the game.


   13. Some other commands
   -----------------------

   Terminating the move of a unit:
         A army, for example, has four moves per turn. But often you won't be
         willing to move your army more than two times. So just click it
         with the RIGHT mouse button and your next unit will move.
   Freezing your units:
         Some units will just be a stregic element and won't be moved for a
         long time. These units can be frozen by clicking BOTH mouse buttons
         on them. Now they won't move until you "awake" them again by clicking
         again both mouse buttons on them.
   Centering your units:
         Sometimes it might be quite useful to center the active unit. To do
         so just press the "5" key on your numeric keyboard.

   14. The "PLAYER 1/2" boxes
   --------------------------

   After finishing your turn there will appear a box showing the next player
   to move. Click first the left and then the right mouse button when the
   last player can't see your screen any more.
   Moreover these boxes offer the possibility to quit or save the game. Just
   press the left mouse button on "QUIT" or "SAVE" to do so.


   15. The end of the game
   -----------------------

   To win the game one player has to reach the headquarter of the other player
   with an army or a tank. Then there will be a little victory hymn and a
   picture confirming that you are the winner.
   After clicking both mouse buttons there will scroll a STATISTICS-screen
   in softly. Here you can see how many units are lost on both sides. Click
   again both mouse buttons to leave STRATEGY and REGISTER YOURSELF !


   16. Bugs
   --------

   After many nights of hard work and much liquid I think I have thrown
   all bugs out of this program. If you should discover any bugs despite
   of that, please write to me and specify when the bug occurs.


   17. Whom to write a letter
   ----------------------------


        I hope you enjoyed STRATEGY - the great military strategy game
                     
                            Please write to

                            Markus Mueck
                            Fuenf-Baeume-Weg 76
                            7900 Ulm
                            West-Germany
  
                  (I'm looking forward to your letters !)
```
{% endraw %}

## REGISTER.DOC

{% raw %}
```


                          REGISTRATION - Form for
                          -----------------------

                STRATEGY - The great military strategy game





  Yes, I want my personal registered version of STRATEGY. Please
  send me this complete version, incl. 40 different areas, a
  random area creator, an area editor and a REAL good manual for

  O 20.- DM when ordered from Germany, postage included

  O 15.- US-$ when orderer from any other country but Germany, postage incl.

  O 18.- US-$ when ordered from any other country but Germany, air mail incl.


  Please mark which service you want to take. If you are able to copy the
  original version and all other goodies described above and you really
  don't need it in original version then send me the following amount

  O 12.- DM when ordered from Germany

  O 8.- US-$ when ordered from any other country but Germany

  In that case, you'll just get a letter confirming that you are an registered
  owner of STRATEGY, the great military strategy game.



  Your address is:


  Name...................................................................

  Address................................................................

  Country................................................................

  Tel. Nr................................................................




  Please send this form to

  Markus Mueck                   When not ordered from Germany, please
  Fuenf-Baeume-Weg 76            use air mail. Otherwise you'll wait a
  7900 Ulm                       long time for your complete version, incl.
  Germany                        all the great advantages !
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3117

     Volume in drive A has no label
     Directory of A:\

    STRATEGY EXE    335360   7-29-91   5:45p
    README   DOC     21218   7-30-91   2:15p
    REGISTER DOC      1714   8-02-91   8:25p
    READ     BAT       433   8-02-91   8:24p
            4 file(s)     358725 bytes
                            2048 bytes free
