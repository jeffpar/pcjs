---
layout: page
title: "PC-SIG Diskette Library (Disk #3421)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3421/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3421"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## BLINDWAR.DOC

{% raw %}
```





                       * SOLEAU SOFTWARE PRESENTS *

                             BLIND WARS GAME
                                  (1.0)
                           ___________________

                       Programed by William Soleau
                                (c) 1992



             Requirements:  100% IBM EGA GRAPHICS & MOUSE
                            Hard Disk Strongly Recommended

                              Files Needed
                 Blindwar.ov0  Blindwar.ov1  Blindwar.ov2
                 Blindwar.ov3  Blindwar.ov4  Blindwar.ov5
                               Blindwar.exe


                             * Objective *

      The object of Blind Wars is to conquer all 77 cities on the
      game board with your armies.  In this version you will always
      be playing the Blue army and the computer plays the other three
      adversaries, the Green, Red and Yellow.

      Blind Wars has taken my previous game Isle Wars and added many new
      features. The most obvious one is that you cannot see the number
      of armies the computer has, only yours are visible. It cannot see
      yours either, thus I called the game Blind Wars.


      Blind Wars is totally Mouse controlled, so you will never need
      to touch the keyboard. Blind Wars is quite simple to learn and offers
      different levels of play.  The game rules are very similar to the
      classic game of 'Risk', however, there are many other elements that
      you will have to contend with in order to be victorious.



                      * To Play / Setting Levels *

      At the opening screen, the game will ask you to set up levels
      of play. This setting will now become the default for future games.
      The difficulty level is determined by how many starting cities you
      occupy at the start of the game.

      The difficulty levels are:  1 = Easy to 4 = Hardest. You then
      set the number of armies that are possible in each city at the start
      of the game.  The choices are: 1 / 3 / 5 / 10

      If you want to continue a game previously saved, here is where you
      have the opportunity to reload it, and resume play.



                           * Getting Armies *

      The game randomly decides who will take the first turn. At the
      beginning of each turn, you are given armies for the number of
      cities you occupy.  That number is divided by 4 and gives you
      that number of armies to place onto the board.  There are also 10
      countries which are made of 5 or more cities. If you totally occupy
      all the cities in that country you will be given bonus armies.

      The country bonus values are shown below.

                    4   4    4
                     
                    7   8    6
                                 3
                    3   4    5



                           * Placing Armies *

      You will be shown the number of armies you have received for
      that turn (minimum is 3).  The computer will ask you to select the
      destination city.  This is the number in the black box located
      in each city state.  Click the mouse button on your city number
      where you want to place your armies.  You will see the city number
      displayed on the bottom right of the screen. A special input box
      will appear with  [+] and [-] buttons.  Click the [+] button to add
      or the [-] to subtract, until you get the proper number you would
      like to place in that city. When done click the [Done] button. The
      number below the City number is the number of troops you have
      presently in that grid. If you want to place all your troops in the
      city selected, click on [ALL] button. This continues until all the
      armies you have been given for that turn are placed onto the board.

      The game will prompt you with all the instructions, so don't worry.
      It's quite easy once you get the hang of it.


                              * Control Panel *

      Once you have placed all your armies, new buttons will be displayed
      at the bottom. This control panel will only appear at the start of
      your turn. Once you have started attacking etc..it will not return
      until it's you turn to play again.

                  [Scores]  [Sound]  [Speed]  [Save]  [Quit]

      Scores:  Shows Blind War scoreboard
      Sound :  Toggles Sound On/Off
      Speed :  Controls Speed of play
      Save  :  Saves Game to be loaded at a later time. You must however
               save the game BEFORE you place your armies for that turn.
      Quit  :  Asks you if you want a New Game or Quit the program.



                               * Attacking *

      The computer will ask you to select your city that you want to
      attack from. Click the mouse button on your city. The computer
      will then ask you to select the city you want to attack. This
      city must be adjacent to the grid you're attacking from. You can
      attack only if you have at least 2 armies in that city.

      Once the attacking city and defending city has bee selected,
      a special Attack panel will appear.

                [ATTACK]  [MOVE]  [PASS]  [STOP ATTACK]



      To attack click on the Attack icon.  The computer then rolls dice
      (not shown and I promise it does NOT cheat) to decide the
      outcome.  If the attacking army has a higher number then the
      defending army, then one army will be subtracted from the defending
      city; the opposite is true if the attacking army loses.  A tie
      will count as a loss for the attacking army because the defending
      city carries the advantage.  At higher levels of army concentrations
      like 50 against 30, the computer will speed up play by rolling
      about 10 times before asking you whether you want to attack again.

      Keep clicking on [ATTACK] if you want to continue attacking.
      If you want to call off the attack, click the [STOP ATTACK] button.
      If your attacking army ever gets down to 1, then you will forfeit
      not only the turn, but also the city to the defending army.  That
      means if you have 2 troops left and are attacking an opposing grid
      and lose, it now becomes occupied by your enemy. Play then will pass
      to the computer.

      If you can deplete the enemy to 0 armies, the computer will ask you
      how many troops you want to move into the conquered city. Select the
      number as you do when you deploy your troops.  The only stipulation
      is that you have to move at least one army into the conquered grid.
      You can then continue to attack, etc... until you decide to finish
      your turn by pressing, either the [MOVE] button or the [PASS] button.


                              * Move Armies *

      At the end of each turn, you are allowed to move troops between two
      adjacent cities (Blue).  Click on the [MOVE] button and select the
      two cities. Then the computer will ask you to select the number of
      troops to move. Use the select number panel as you would when placing
      armies.  After your move is complete, play will then pass to the
      computer.


                                 * Pass *

      If you do not want to move armies, simply click the [PASS] button to
      indicate your turn is over.


                         * Cancel / Right Button *

      Click the Right Button of your mouse if you change your mind on an
      attack, move, etc... or selected the wrong option.



              * Situations / Disasters / Production Centers *

      At various times during the game, certain events will occur.
      These will have a dramatic impact on the game play.  These events
      are random and you cannot predict them.

      They are as follows:


      1 = Flooding will deplete some armies in 3 cities.

      2 = A Rebellion has occurred in one of the cities, it lowers
          army count in a selected city.

      3 = Rebels have taken control from an opposing army. The
          city changes hands.

      4 = Production Center increase.  All armies located on
          the Production Centers indicated by a (factory) next
          to the City number will be doubled!

      5 = Food Production increase will add armies to all the cities
          in one of the ten countries selected.

      6 = A Shifting of armies in one country will randomly shift the
          colors of the cities that are located in that country. Therefore
          if you have one blue city, you'll still only have one blue city
          after the shift, yet your army total will now be what the other
          color had in that location before the shift.

      7 = Massive Defections plague one army. This will change five cities
          to opponents colors and add a few armies to each also. This can
          occur only if one army controls at least half the cities on the
          game board. This is where you can get back into the game even
          though you may have been knocked out earlier.

      8 = A Water Shortage will lower army values of cities boarding one
          of the 6 lakes on the board.

      9 = Volcanos appear on several cities and will remain there for a
          random number of turns. You will not be able to take attack or
          move etc... on those cities affected. It also means that when
          they are located in a country that you totally control, you won't
          get the bonus armies for that country until they disappear. When
          they are removed from the screen, the color of that city will
          remain the same except the army number will now be 1.




                             * End Of Game *

         If you are eliminated from the game board by the computer's
         other armies, you will be shown a special menu that will allow
         you to let the computer continue play or allow you to start a
         new game.

         * Remember any number of disasters to the other opponents can put
           you back into the game, so it is to your advantage to let the
           computer play the game out. It will do so at a very FAST! pace
           so you won't have to wait so long to see if you can appear
           back on the game board. I've won many games this way! *

         Every 30 seconds or so if you still have not gotten back into the
         game it will ask you again whether you want it to continue play or
         to begin a new game.


                                * You Win *

         If you are the victor, the game will end and your score
         of Won and Lost games and percentage for each level of
         difficulty will be shown.



                               * Conclusion *


        The best way to learn is to just begin to play. It takes only
        a few minutes to master the commands but it will take hours to
        learn the best strategies to defeat your opponents.  Games average
        from 10 minutes up to several hours depending on the speed of play
        selected.


                    *  SOLEAU SOFTWARE  /  REGISTRATION  *

                            Registered Version!!!

        Blind Wars is distributed as Shareware. A registration fee
        of $12.00 is requested if you find this game is a worthy addition
        to your game collection. The registration will greatly speed up
        the loading and exiting of the game and you will instantly become a
        Soleau Software Member. The registered version allows up to four
        human players. It also allows you to see all the army values in all
        the countries at all times!  (Of course this defeats the purpose
        of Blind Wars, yet it is a way to hone your strategy skills)

        All Soleau Software Members receive information and discounts on
        our other Shareware Games, plus Special Bonus Package Offers.

        Please take the time to read the BLND_REG.DOC file which describes
        how you can get information on our many other games and how to
        become a Soleau Software Member.

        We at Soleau Software thank you for your support and hope you
        will continue to enjoy this as well as our many other Shareware
        products.

                                 Sincerely,

                                William Soleau
                                  President

                              Soleau Software
                              163 Amsterdam Ave
                              Suite 213
                              New York,  NY  10023
 

```
{% endraw %}

## BLND_REG.DOC

{% raw %}
```
    FN:C2 
                   BLIND WARS 1.0  :  REGISTRATION FORM      
                 ________________________________________


             I WANT TO BECOME A SOLEAU SOFTWARE MEMBER TODAY!

               Please find enclosed the $12.00 registration fee for
          this Blind Wars Game. This registered version will speed up
          the loading and exiting of the game, plus allow up to four
          human players and give an option to show all armies at all 
          times! As a new member I want to receive information on your 
          other Shareware Games, discounts on other Soleau Software and 
          to be eligible for Special Bonus Packages.


                          *    *    *    *    *

                             GAME PACK OFFER
                                   for
                        New Soleau Software Members

               As a New Soleau Software Member I have the option of
          enclosing an additional $6.00 for your Game Pack Offer of
          eight unregistered versions of your most popular Soleau
          Software Games on a 5 1/4" HD disk. I can receive this
          bonus offer by checking the appropriate line below.

                          *    *    *    *    *


          PLEASE FIND ENCLOSED:

            (Check One)

              ____   $12.00 for the Registered version of Blind Wars.

              ____   $18.00 for the Registered version of Blind Wars,
                     plus the Soleau Software Game Pack Offer.

            * Canadian/Foreign Users add $2.00 for postage. Checks 
              drawn on U.S. or Canadian bank or P.O. Money orders.


          MY NAME AND ADDRESS IS:  __________________________________

                                   __________________________________

                                   __________________________________


          I GOT THIS PROGRAM FROM: __________________________________


          MAKE CHECKS PAYABLE TO:          Soleau Software
                                           163 Amsterdam Ave
                                           Suite 213
                                           New York, NY.  10023

```
{% endraw %}

## VENDORS.DOC

{% raw %}
```
                    *  S O L E A U   S O F T W A R E  *

Vendor.doc & Sysop.doc

This disk contains the two newest releases from Soleau Software.
Full descriptions are below this list. Each game is in a separate
directory and with a File_id.diz included.



Game               Version          Type                   Requires
-----------------------------------------------------------------------

Blind Wars         v1.0   : Simulation War Game            EGA/VGA & MOUSE
Robix              v1.0   : Logic Puzzle Strategy Game     EGA/VGA




BLIND WARS   v1.0    Requires EGA/VGA & Mouse        ZipName: Blindwar.zip

Blind Wars is a strategy war game where the object
is to conquer all the cities on the game board. In
this sequel to Soleau Software's Isle Wars, the task
becomes quite challenging because you cannot see the
strength of the opposing armies. It plays like 'Risk'
yet adds elements such as production centers, volcanic
eruptions, floods, and much more! Options include, sound
toggle, save game, speed play and levels of difficulty.




ROBIX    v1.0   Requires EGA/VGA                     Zip Name: Robix.zip

Robix is another logic puzzle game from Soleau Software.
The objective of this pure strategy game is to get your
colored blocks to the bottom of the game board by pushing
entire rows either left or right. You can play Robix against
the computer or a friend. Written in beautiful EGA/VGA
graphics, it is both addictive and challenging for all ages!

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3421

     Volume in drive A has no label
     Directory of A:\

    BLINDWAR DOC     12876  11-15-92   4:30p
    BLINDWAR EXE    164524  11-18-92   9:35p
    BLINDWAR OV0     14069  11-12-92   9:43a
    BLINDWAR OV1     30134  11-12-92   9:58a
    BLINDWAR OV2     95059  11-11-92   4:44p
    BLINDWAR OV3       209  11-15-92   2:44p
    BLINDWAR OV4     27654  11-15-92  10:54p
    BLINDWAR OV5      2208  11-19-92   5:58p
    BLND_REG DOC      2221  11-19-92   5:58p
    FILE_ID  DIZ       487  11-15-92   3:28p
    BLINDWAR SCR        20   2-11-93   4:15p
    BLINDWAR DFT        66   2-11-93   4:17p
    VENDORS  DOC      1519  11-19-92   5:52p
    GO       BAT        38   2-16-93   2:39p
    SHOW     EXE      2040   9-12-88  10:48a
           15 file(s)     353124 bytes
                               0 bytes free
