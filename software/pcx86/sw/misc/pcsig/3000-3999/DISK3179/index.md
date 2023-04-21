---
layout: page
title: "PC-SIG Diskette Library (Disk #3179)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3179/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3179"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## BB_REG.DOC

{% raw %}
```


                       BOLO BALL GAME REGISTRATION
                              Version 1.0

                         by  William Soleau
                             163 Amsterdam Ave #213
                             NYC, NY.  10023


         Yes I would like to register Bolo Ball with this $12.00
     check.  Because I use the game regularly, I want to honor the
     Shareware concept.  I understand the registration will speed up the
     loading and exiting of the program.  With the registration, I also
     will be able to receive any other of your games at reduced prices.
     Please send me a list your other games and special bonus offers for
     registered users.
     
         So here is my $12.00 check, and please RUSH me my upgrade key!


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

## BOLOBALL.DOC

{% raw %}
```




                            BOLO BALL GAME

                           by William Soleau
                          Version 1.0  Jan.92
                           Requires: EGA/VGA


   *************************   Directions   ****************************

        The objective of Bolo Ball is quite simple.  You try to push
    your 29 balls down a maze so that they reach the bottom row.  The
    farther down you can get them, the higher the score.  You can play
    against the computer or against a friend.


         The game board is a 29x18 grid.  The top row is from where all
    balls will be pushed.  In the grid there are several different
    obstacles which are:

       Blue Arrow Tiles:  These are ramps that will make the ball travel
                          in the direction of the arrow.  Once a ball has
                          hit a ramp and moves off it,  it will flip itself
                          to the opposite direction.
                          (for the next players turn)

     Yellow Bonus Tiles:  These will add ten points to your total score.  It
                          will not affect the path or direction of the ball
                          pushed.

             Gray Tiles:  These tiles will stop the ball if it obstructs the
                          ball's path.  When all balls have been pushed by
                          both players, these gray tiles will be removed and
                          the balls that are above them will continue to
                          gather points as they descend toward the bottom
                          row.
                          (The game is won or lost in most cases not by all
                          the balls being pushed, but by the points gained
                          once these gray tiles are removed!)

           Purple Tiles:  These purple tiles (ramps on level three of the
                          long game version), rotate randomly.  The ball
                          will move in the direction of the arrow at time of
                          contact.

            Black Holes:  There are five tiles which are called Back Holes.
                          If a ball hits one of these black and white tiles,
                          it will disappear and resume its journey from
                          another one of the four remaining Black Holes.


                      ***  Human / Computer  ***

         You have the option of either playing against another human
     player, or against the computer.  If you are playing against the
     computer, you will be the Blue player and the computer will play Red.


                     ***  Long and Short Games ***

         There are two types of games you can play in Bolo Ball.  One is
     the short version that ends after only one level, and the long
     version which is three levels.  (The computer is hard to beat playing
     the long version... but its a lot more fun!)


                           *** Scoring ***

         Point totals are located on the bottom row of the screen.  A ball
    that reaches the bottom row will be awarded 60 points.  Each ball that
    remains on the grid board, will show its value. (2 points per row).
    This will automatically be added to your total score.


                      *** Key Definitions ***


      Arrow keys move your man right of left along the top of the game grid.
      The down arrow key will push a ball onto the game board.


      <S>ound Toggle              :  Turns sound on or off

      <L>ook at opponents top row :  Used to view what where your opponents
                                     balls are when its your turn.  (Helps
                                     for strategy...blocking...etc...)

      <B>est Scores vs Computer   :  Shows Top Ten High Scores for winners
                                     of both Long and Short games.

      <K>ey Menu                  :  Shows Key Definitions

      <ESC> New Game              :  Allows you to give up present game and
                                     begin a new one.

      <Q>uit Bolo Ball            :  Quits Program



                     ********* ENJOY *********


      This is a Shareware Game.  A registration fee of $12.00 is requested
   if you find this game is a worthy addition to your collection.  Registered
   users will be sent a special upgrade key that greatly speeds up the
   loading and exiting of this program.  By registering this one game,
   you will be sent a list of 40 of my other games that you can receive
   at reduced prices along with special bonus offers.

   The registration form can be located by pressing <R> at the final screen
   within the game or in the file BB_REG.DOC.

                          *   *   *   *   *   *   *

                               William Soleau
                              163 Amsterdam Ave.
                                 Suite #213
                             New York, NY. 10023


                                *   *   *   *

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3179

     Volume in drive A has no label
     Directory of A:\

    BB_REG   DOC      1566   1-19-92   9:53a
    BOLOBALL EXE    109890   1-21-92  11:26p
    BOLOBALL OV1     34613   1-17-92   7:22p
    BOLOBALL OV2     33459   1-19-92   2:23a
    BOLOBALL DOC      5164   2-03-92  11:53p
    GO       BAT        31   6-04-92   2:25a
    GO       TXT      1001  10-27-92   3:05p
            7 file(s)     185724 bytes
                          133120 bytes free
