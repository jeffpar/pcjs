---
layout: page
title: "PC-SIG Diskette Library (Disk #3180)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3180/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3180"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## ATLANTIS.DOC

{% raw %}
```




                  Welcome to Battle for Atlantis
                  ______________________________


                   Programed by William Soleau
                     Version 2.0  (c) 1990


               Requirements:  100% IBM EGA GRAPHICS 

           The object of Atlantis is to conquer all eight
      islands which make up the atoll called 'Atlantis'.  You
      play the army called the Olympians.  The computer will
      play the other three adversaries, the Calydonians,
      Argonauts, and then Titans.

          The game is quite simple to learn and offers
      different levels of play.  The game rules are very
      similar to the classic game of Risk, however, there are
      many other elements which you will have to contend
      with, in order to conquer all 8 islands.


      To Play:

           At the opening screen, the game will ask you for
      the level of difficulty. (1=Easy to 7=Hard   ?=Random).
      Then it will ask you how many armies are possible for
      each grid at the start of the game.  The maximum is 8
      the minimum is 1.


          The game will decide who will take the first turn.
      The game will then begin.   At the beginning of each
      turn, you are given armies for the number of grids you
      occupy.  That number is divided by 3 and gives you that
      number of armies to place onto the board.  Each island
      gives you extra armies, if you totally control all its
      grids.  The island values are shown below.

                      2
                         4
                      4     5
                         6     3
                      3      5

      Placing Armies:

           You will be shown the number of armies you have
      received for that turn. (minimum is 2)  The computer
      will ask you for the destination city which is the top
      number in each grid.  There are a total of 43 girds on
      the game board.  Once you have selected the city, it
      will then ask you how many troops you want to place
      there.  (The number below the City number is the number
      of armies presently in that grid.) This continues until
      all the armies you have been given are placed onto the
      board.


      Attacking:

          To attack another grid, it must be adjacent to the
      grid you're attacking from.  There are lines from island
      to island which allow you to travel across the water
      (in ships) to a attack other islands.  You can only
      attack another grid if your total number of armies in
      that grid is equal or greater then the number you're
      attacking.
          The computer then rolls dice (not shown), to decide
      the outcome.  If the attacking army has a higher number
      then the defending army, then one army will be
      subtracted from the defending city; and the opposite is
      true if the attacking army losses.  A tie will count as
      a loss for the attacking army.  (so the defending city
      carries the advantage)

          The computer will ask you if you want to keep
      attacking or stop.  If your attacking army ever gets
      down to 1, then you will forfeit not only the turn, but
      also the grid to the defending army.  If you defeat the
      defending army, by eliminating all his troops, you will
      be asked how many troops (from the ones you have left)
      you want moved into the conquered grid.
          When you are finished with your turn, you will
      press the <P> key for Pass, and play will then go to
      the computer, who plays the other three Clans.



      The ACTION Keys are as follows:

            A-P-S-Q-M-O <H>elp

            A = ATTACK
            P = PASS
            S = SPEED UP/DOWN PLAY
            Q = QUIT
                      START A NEW GAME
                      SAVE PRESENT BOARD TO DISK
                      QUIT            


            M = MOVE ARMIES (AT END OF EACH TURN YOU ARE
                             ALLOWED TO MOVE ONE SET OF
                             ARMIES TO AN ADJACENT GRID,
                             PLAY WILL AUTOMATICALLY BE
                             PASSED
                             TO THE NEXT PLAYER.)

            O = OPTION BOARD (OPTIONS)

                SOUND TOGGLE
                VIEW PREVIOUS SCORES (SCOREBOARD)
                START A NEW GAME
                

            H = HELP   (SHOWS ACTION KEY DEFINITIONS)



      Other Elements:

           Every so often a message will pop up to say either
      one of the following.

      1 = A Earth Quake has hit the Islands  (4 grids)
      2 = Flooding has inundated some grids  (4 grids)
      3 = A rebellion has occurred in one of your grids

      4 = Good weather has doubled the Men located on the
          Production Centers.  (Indicated by a (*) next to
          the City number)

      If the message is one of the first 3, Hold On! , it
      could hit in grids that you occupy.  The computer will
      indicate which grids are hit and some men will be
      deducted from their total.

      If you happen to occupy a grid with a (*) next to the
      City Number, then your number of armies will double in
      that  grid.  (of course that goes for your opponents as
      well...)


          If you are eliminated from the game board by the
      by the computer's other Clans,  you will be shown a
      special menu that will allow you to concede that game
      and play another one.  (the score will be recorded as
      a loss on that level)  Or you can have the computer
      play the game out to find out who will eventually be
      the victor.  It can play out at the same speed, or Fast
      Play which is recommended, because who wants to see the
      computer have all the fun playing.




                          Conclusion
                          ----------


           The best way to learn is to just begin to play.
      It takes only a few minutes to master the commands and
      it will take hours to learn the best strategies to
      defeat your opponents.  Games average from 8 to 15
      minutes.


           This game is the result of hours of programing.
      Any suggestions or comments regarding this game can be
      sent to the address below (or via. Compuserve E-mail).
      Since this is a Shareware program, feel free to pass
      this along to your friends.   If you find this game is
      worthy of your growing game collection, then a small
      registration fee of $12 dollars is requested.  The
      Shareware concept is based on trust, and the
      registration fees allow programmers like myself to
      continue writing inexpensive Shareware as an
      alternative to expensive commercial software.



                      Enjoy !!!!!!



              William  Soleau
              163 Amsterdam Ave
              Suite 213
              New York, New York.  10023


              Compuserve #:  70407,1730



```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3180

     Volume in drive A has no label
     Directory of A:\

    ATLANT1  OVL     25298   5-02-90   9:24p
    ATLANT2  OVL     33142   5-31-90  11:10p
    ATLANT3  OVL     39754   6-03-90   5:15p
    ATLANTIS DOC      7161   6-22-90   7:22a
    ATLANTIS EXE    127380   3-16-91   4:31a
    READ     ME       8802   5-15-91   9:25a
    GO       BAT        31   6-04-92   2:25a
    GO       TXT      1001  10-27-92   3:18p
            8 file(s)     242569 bytes
                           76800 bytes free
