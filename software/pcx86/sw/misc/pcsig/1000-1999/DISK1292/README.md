---
layout: page
title: "PC-SIG Diskette Library (Disk #1292)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1292/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1292"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "MISC. GAMES AND LOTTO"

    YES is the dice game Yahtzee for two players and has all the same rolls:
    full house, large straight, four of a kind, etc.  The program randomly
    generates the dice rolls and automatically keeps score for each player.
    
    RUN FOUR challenges two players to be the first to get four checkers in
    a row on a six-by-seven game board.  Each checker must be placed at the
    bottom of the board or stacked on top of one another.  A player wins by
    scoring four in a row either horizontally, vertically, or diagonally.
    RUN FOUR is supposed to have a different color for the checkers of each
    player, but on an EGA monitor both of the players' checkers are colored
    red.
    
    ROBIN plays exactly like Bingo.  Fun for parties, it prints up to 33
    different cards for players and then randomly generates callouts.  The
    player with the first winning card shouts, "ROBIN!"
    
    LOTTO MAGIC WHEELER helps you select and wheel numbers to bet in a six-
    number lotto game.  Wheeling is the technique of placing your numbers
    into combinations that guarantee a winning pick if any four of the six
    numbers are chosen.  Options offered: computer random pick, and
    wheeling 7 to 12 numbers into as many as 42 different combinations.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1292.TXT

{% raw %}
```
Disk No: 1292
Disk Title: Misc. Games and Lotto
PC-SIG Version: 1.1

Program Title: Miscellanous Games and Lotto
Author Version: 1
Author Registration: $10.00 to $19.50.
Special Requirements: Printer.

YES is the dice game Yahtzee for two players and has all the same rolls:
full house, large straight, four of a kind, etc.  The program randomly
generates the dice rolls and automatically keeps score for each player.

RUN FOUR challenges two players to be the first to get four checkers in
a row on a six-by-seven game board.  Each checker must be placed at the
bottom of the board or stacked on top of one another.  A player wins by
scoring four in a row either horizontally, vertically, or diagonally.
RUN FOUR is supposed to have a different color for the checkers of each
player, but on an EGA moniter both of the players' checkers are colored
red.

ROBIN plays exactly like Bingo.  Fun for parties, it prints up to 33
different cards for players and then randomly generates callouts.  The
player with the first winning card shouts, ``ROBIN!''

LOTTO MAGIC WHEELER helps you select and wheel numbers to bet in a
six-number lotto game.  Wheeling is the technique of placing your
numbers into combinations that guarantee a winning pick, any four of the
six numbers are chosen.  Options offered: computer random pick --
provides no wheeling; and wheeling 7 to 12 numbers.

File Descriptions:

YES      EXE  The game YES.
FOUR     EXE  The game RUN FOUR.
ROBIN    EXE  The game ROBIN.
STAT          Score file for the game YES.
THS      DOC  Documentation.
PRINT    DOC  How to print documentation.
FREEWHL  COM  Program.
READ     ME   Information and instructions.

PC-SIG
1030D East Duane Avenue
Sunnyvale  Ca. 94086
(408) 730-9291
(c) Copyright 1988,89 PC-SIG, Inc.

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║ <<<<  Disk No 1292  YES, RUN FOUR, ROBIN, LOTTO MAGIC WHEELER  >>>>     ║
╠═════════════════════════════════════════════════════════════════════════╣
║   To print the documentation, type:                                     ║
║             MANUAL (press enter)                                        ║
║                                                                         ║
║   To run the YES program, type:                                         ║
║             YES (press enter)                                           ║
║                                                                         ║
║   To run the RUN FOUR program, type:                                    ║
║             FOUR (press enter)                                          ║
║                                                                         ║
║   To run the ROBIN program, type:                                       ║
║             ROBIN (press enter)                                         ║
║                                                                         ║
║   To run the LOTTO program, type:                                       ║
║             FREEWHL (press enter)                                       ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## THS.DOC

{% raw %}
```



/* ******************************************************************** */
/*                                                                      */
/*                             THS GAMES                                */
/*                                                                      */
/*                      TEHILLAH HILLS SOFTWARE                         */
/*                      70 CALDWELL HILL                                */
/*                      LEWISTOWN, PA   17044                           */
/*                                                                      */
/*             TEHILLAH HILLS SOFTWARE  -  copyright 1988               */
/*                                                                      */
/*                               TURBO C                                */
/*                                                                      */
/* ******************************************************************** */

         THS GAMES is not copy protected.  You should make a backup copy
     and put the original THS disk in a safe place.  To copy THS, first
     place DOS in drive A.  Then type "diskcopy A: B:" at the A> and press
     "Enter."
                       A> diskcopy A: B:

     When DOS tells you to put source disk in Drive A and destination disk
     disk in Drive B, then put THS in Drive A and an empty disk in drive B.
     Press any key to strart the copying.

         If you received a copy of THS GAMES from a friend, the suggested
     registration fee is $10.00.  Send the $10.00 to Tehillah Hills Software,
     RD #4, Box 334 AJ, Lewistown, PA   17044.  You may copy and share this
     disk.  Tehillah Hills Software trusts that those who enjoy YES will
     support this work with the suggested regestration fee.  The logo,
     "Tehillah Hills Software" is copyrighted and all rights are reserved.

/* ************************************************************************* */

         *****   *****   *   *   *****   *****   *   *   *****   *****
         *       *   *   **  *     *     *       **  *     *     *
         *       *   *   * * *     *     ***     * * *     *     *****
         *       *   *   *  **     *     *       *  **     *         *
         *****   *****   *   *     *     *****   *   *     *     *****



                   PAGE 1 ....................... YES

                   PAGE 7 ....................... RUN FOUR

                   PAGE 8 ....................... ROBIN


















                                                                     page 1









    ****             ****      *******************       ******************
     ****           ****       *******************       ******************
      ****         ****        ***                       ***
       ****       ****         ***                       ***
        ****     ****          ***                       ***
         ****   ****           ***                       **+
          **** ****            ***                       ***
           *******             ***                       ***
            *****              ***                       ***
             ***               ***************           ******************
             ***               ***************           ******************
             ***               ***                                      ***
             ***               ***                                      ***
             ***               ***                                      ***
             ***               ***                                      ***
             ***               ***                                      ***
             ***               ***                                      ***
             ***               ***                                      ***
             ***               ***                                      ***
             ***               *******************       ******************
             ***               *******************       ******************




         To load YES into the computer, you can just type YES at the A> and
     press "Enter."

                       A> yes

     Once YES is loaded, you just respond to the prompts on the screen by
     typing the appropriate letter or number on the keyboard.

         The first screen prompt asks you if you want to Shake the Dice, see
     your Totals, Save your totals, Restart, or Quit.  The first time these
     choices appear, you will certainly want the type S.  The totals are all
     0 to start, but the 0's will appear if you type T.

         Type S to begin the game.  After each entry you type into the com-
     puter, the computer asks you if it has the right input.  For example,
     when you type "S" to shake the dice, the computer will print "Shake
     Dice  ?."  You should respond with a "+" or a "y" for yes.  Any other
     response will be received as a negative response.













                                                                     page 2



         After you type S and a "+" or "Y," the randomizer will give you 5
     random numbers.  Then you must tell the computer which dice to keep
     because you have three chances to shake as many of the 5 dice as you
     choose.  To make this decision, consider the explanation of TYPES below.
     You need to decide what TYPE you are trying to get and keep the dice
     that give you the best chance to get the TYPE you want.  Remember:  you
     are allowed to "Shake the Dice" three times for each turn.  Player 1 and
     Player 2 alternate turns until all the spaces are filled.

         To tell the computer which dice to keep, just type in any number
     or letter other than "0" for each die you want to keep.  For each die
     you do not want to keep, type a "0."  For example

                       DICE NUMBERS     #1  #2  #3  #4  #5
                                         5   5   2   1   5

     With these random numbers you will probably want to keep the 5's.  You
     tell the computer to keep the 5's by typing any number other than "0"
     for the first two dice; then type two 0's for die #'s 3 and 4; then type
     any number other than "0" for die #5.

         If this sounds confusing, just try it.  The computer will check to
     see if it has 0's assigned to the right die numbers before it goes on.
     For example, you tried to tell the computer to keep die #'s  1,2, and 5.
     The computer will print

                       Keep Dice  #1  #2  #3  #4  #5
                                   9   9   0   0   9

     It does not matter what numbers appear under the die numbers you do want.
     Just make sure a "0" appears under the ones you do NOT want.  In the
     example above the 9's could be any other number except "0."  The 0's
     are the important information.  They tell the computer which dice to
     shake again.

         If you are still confused, look at another example:

                       DICE NUMBERS     #1  #2  #3  #4  #5
                                         6   2   1   3   4

     Now suppose you decide to keep the small straight and try for a large
     straight.  2, 1, 3, 4 gives you a small straight.  You want to shake
     die #1 over again to try to get a 5 instead of the 6 you now have.  You
     would type a 0 first for die #1; then type any number other than "0"
     for the next four dice.  I use a 9 because it is beside the 0 on the
     keyboard.  If you use a 9 for the dice you keep, the computer will print
     on the right side of the screen

                       Keep Dice  #1  #2  #3  #4  #5
                                   0   9   9   9   9












                                                                     page 3



     Then you would respond with a "+" or "y" for yes because the 0 means
     die #1 will be replace with a new random number.

         After you tell the computer which dice to keep, the computer will
     select random numbers again for the dice you do not keep.  Again the
     five numbers will appear on the upper left side of the screen.  These
     numbers will include the numbers you told the computer to keep and new
     numbers for the dice you did not choose to keep.

         Then you will be asked one more time which dice to keep.  Again you
     may keep any or all the dice.  Remember:  the "0's" for the dice you do
     not want are the important input.

         Next you will be asked to assign the dice to a TYPE.  The thirteen
     different TYPES are explained below.  To assign a TYPE, press the letter
     that represents the TYPE you want to use.  The representative letters
     are listed at the bottom of your screen.  If your dice do not fit any
     TYPE other than FREE SPACE, and you do not want to use FREE SPACE, you
     must still select a TYPE.  The computer will then enter a "0" in the
     TYPE you select.  For example, if you were trying for a large staight
     and did not get it, you might stll assign TYPE "LARGE STRAIGHT," and
     the computer will place a 0 in the space for LARGE STRAIGHT.

         Before the computer prints a value in a TYPE space, you will be
     asked to tell the computer which of the six games to use.  This gives
     you the choice of playing just one game or playing several games one at
     a time or playing all six games at one time.  For example,  if you are
     playing all six games at the same time and you get a 5's several turns
     in a row, you can assign TYPE "FIVES, Game 1,"  "FIVES, Game2,"  etc.

         To tell the computer which game to print the value in, type a game
     number (one through six) after you see the question "Game number  ?."

         The computer will keep track of whose turn it is and print "Player 1"
     or "Player 2" on the upper left side of the screen.

         After each completed turn, you have the some five choices.  To see
     see the totals, you type T.  When all the value spaces are filled, be
     sure to press T for totals to recalulate the totals.  If you have pressed
     T during the games, the totals on the screen might not be up to date. You
     need to press T after Player 2 takes his last turn.  Then you will have
     the final totals for each game and for all six games added together.

         After you have the final totals, you may save the total scores of
     each game.  Type V to save the scores.  You will be prompted for the
     names of the players and for the date.  Then this information will be
     printed in the STAT file.

         If you type Z the computer will clear all values from it's memory
     and start the games over.












                                                                     page 4




         If you type Q the computer will return to A>.  To return to A>, you
     will need COMMAND.COM on your copy of YES, or the computer will prompt
     you for a disk with COMMAND.COM.  COMMAND.COM is on your DOS disk.  You
     can copy COMMAND.COM to the YES disk by putting DOS is Drive A and Yes
     in Drive B and then typing "copy COMMAND.COM B:" at the A> and pressing
     "Enter."

                       A> copy command.com B:

         To see your totals in the STAT file you can type "copy STAT con" at
     the A>.
                       A> copy stat con

     This will print the statistics to the screen.  To print the statistics
     on paper, turn your printer on and type "copy STAT prn" at the A>.

                       A> copy stat prn




                                  TYPES


         There are thirteen TYPES.   Each turn for each player must be con-
     cluded by the computer printing a value on the screen for one TYPE under
     one Game Number.

     ONE's:  If you assign TYPE ONE's, the value printed will be equal to the
     number of 1's you have.   For example,

                                   1   3   4   1   1    =    3

     TWO's:  If you assign TYPE TWO's, the value printed will be equal to the
     number of 2's you have times 2.  For example,

                                   3   2   2   2   2    =    8

     THREE's:  If you assign TYPE THREE's, the value printed will be equal to
     the number of 3's you have times 3.  For example,

                                   2   6   3   4   3    =    6

     FOUR's:  If you assign TYPE FOUR's, the value printed will be equal to
     the number of 4's you have times 4.  For example,

                                   4   6   5   1   1    =    4














                                                                     page 5




     FIVE's:  If you assign TYPE FIVE's, the value printed will be equal to
     the number of 5's you have times 5.  For example,

                                   5   5   5    5   5    =   25

     SIX's:  If you assign TYPE SIX's, the value printed will be equal to the
     number of 6's you ahve times 6.  For example,

                                   6   3   1   6   6    =    18

     THREE OF A KIND:  If you assign TYPE THREE OF A KIND, the value printed
     is equal to all five dice added together.  You must have at least 3 of
     the same number.   For examples,

                                   5   5   3   6   5    =    24
                                   1   1   1   6   4    =    13
                                   6   5   3   6   5    =     0

     FOUR OF A KIND:  If you assign TYPE FOUR OF A KIND, the value printed
     is equal to all five dice added together.  You must have at least 4 of
     the same number.   For examples,

                                   1   1   1   1   6    =    10
                                   2   3   3   3   3    =    14
                                   5   5   5   3   4    =     0

     FULL HOUSE:  If you assign TYPE FULL HOUSE, the value printed is 25.
     You must have 3 of one number and 2 of another number or all five dice
     the same.  For examples,

                                   1   1   1   2   2    =    25
                                   3   4   3   3   4    =    25
                                   5   5   5   5   5    =    25
                                   5   5   4   6   6    =     0

     SMALL STRAIGHT:  If you assign TYPE SMALL STRAIGHT, the value printed is
     30.  You must have at least four consecutive numbers.  For examples,

                                   1   2   3   4   6    =    30
                                   2   3   4   5   1    =    30
                                   5   4   3   1   6    =    30
                                   2   3   4   5   6    =    30
                                   1   2   3   5   6    =     0

     LARGE STRAIGHT:  If you assign TYPE LARGE STRAIGHT, the value printed is
     40.  You must have 5 consecutive numbers.  For examples,

                                   1   2   3   4   5    =    40
                                   2   3   5   6   4    =    40
                                   6   5   4   3   2    =    40
                                   1   2   3   4   6    =     0










                                                                     page 6




     YES:  If you assign TYPE YES, the value printed is 50.  You must have 5
     of the same number.  For examples,

                                   1   1   1   1   1    =    50
                                   5   5   5   5   5    =    50
                                   5   5   5   5   6    =     0

     FREE SPACE:  If you assign TYPE FREE SPACE, the value printed is the sum
     of all the dice added togeter.  For examples,

                                   6   5   6   4   1    =    22
                                   6   6   6   6   6    =    36








                                 SCORING NOTE

         If you score 63 points or more in the top part of any one game, you
     receive a bonus of 35 points.  In other words, if in Game 1 your totals
     for ONE's, TWO's, THREE's, FOUR's, FIVE's and SIX's is 63 the total
     printed will be 98.



         That should do it.  If you have questions, address them to

				  TEHILLAH HILLS SOFTWARE
                                  70 CALDWELL HILL
                                  LEWISTOWN, PA   17044



























                                                                     page 7



     ***********             ***      ***            ***      ***
     ************            ***      ***            ****     ***
     ***     ***             ***      ***            *****    ***
     ***    ***              ***      ***            *** **   ***
     **********              ***      ***            ***  **  ***
     **********              ***      ***            ***   ** ***
     ***     ***             ***      ***            ***    *****
     ***      ***            ************            ***     ****
     ***       ***           ************            ***      ***


     ***********     ***********     ***     ***     ***********
     ***********     ***********     ***     ***     ************
     ***             ***     ***     ***     ***     ***     ***
     ***             ***     ***     ***     ***     ***    ***
     ********        ***     ***     ***     ***     **********
     ********        ***     ***     ***     ***     **********
     ***             ***     ***     ***     ***     ***     ***
     ***             ***********     ***********     ***      ***
     ***             ***********     ***********     ***       ***


         To load RUN FOUR into the computer, you can just type FOUR at the A>
     and press "Enter." [If you do not have color, type MFOUR instead of FOUR.]

                       A> four

     Once RUN FOUR is loaded, you just type the number of the space where you
     want your "checker" to appear.  The computer will keep track of whose
     turn it is and print either "PLAYER 1" or "PLAYER 2" on the upper right
     side of the screen.

         The objective is to get four of your color checker in a consecutive
     row.  If you get four of your color in a row vertically, horizontally,
     or diagonally, you are the winner.  You have to start on the bottom row.
     The first player will have to choose a number between 1 and 7.  Then the
     next player can choose any other number on the first row or the number
     above the number that the first player chose.

         Each time one player gets four in a row, the game is over.  To start
     a new game, type a run of fours instead of a space number.  That is

     "Type the number of the space where you want your checker.    4444"

     When the computer reads "4444," it will clear the screen and start a new
     game.

         To quit and return to DOS, type Q or q for quit.














                                                                     page 8



         That should do it.  The rule for this one are simple.  The computer
     will not let you play out of turn or play a space that is not on a bottom
     row or does not have a checker under it.  If you have questions,
     address them to

				  TEHILLAH HILLS SOFTWARE
                                  70 CALDWELL HILL
                                  LEWISTOWN, PA   17044




   ***********     ************    ***********    ***********   ***       ***
   ************    ************    ************   ***********   ****      ***
   ***     ***     ***      ***    ***     ****       ***       *****     ***
   ***    ***      ***      ***    ***    ****        ***       *** **    ***
   **********      ***      ***    **********         ***       ***  **   ***
   **********      ***      ***    **********         ***       ***   **  ***
   ***    ***      ***      ***    ***    ****        ***       ***    ** ***
   ***     ***     ***      ***    ***     ****       ***       ***     *****
   ***      ***    ************    ************   ***********   ***      ****
   ***       ***   ************    ***********    ***********   ***       ***




         To load ROBIN, just type ROBIN at the A> and press "Enter."

                             A> robin

         Robin is played just like the game of BINGO, which most people are
    familiar with.  When ROBIN is loaded, you will get a yellow square telling
    you what four letters you can use.  C is for getting cards.  N is for
    calling a number from the randomizer.  S is to start over.  And Q is
    to quit and return to DOS.

         If you press C, you will be asked if your printer is ready because
    the computer is going to give you a playing card printed by your printer.
    You can use regular BINGO cards if you want to, but the computer will call
    the columns R O B I N instead of B I N G O.  When you give the computer
    an affirmative answer, it will ask you to type in a number from 1 to 33.
    There are thirty-three different cards in the computer.  Each player
    should select a different card number.

         After all players have a card, press N.  The computer will give
    random number and column letters.  For example, "UNDER THE R   4."
    Then each player should check his card under column R.  You can mark
    each number you have with an X in ink or pencil or use markers such as
    pennies to cover the numbers you find.  Each player starts by X-ing
    FREE  SPACE.

         When someone gets five numbers in a row or five in a column or
    five diagonally, he is the winner.









                                                                     page 9






         Then you press S to start over.  The computer will check to see if
    you really meant to press S before it erases the screen.  When it asks
    "Do you want to start over?" just press + or Y or y.

         To quit and return to DOS, type Q.  Again the computer will check
    to make sure you want to quit.


NOTE:
         After the computer gets some of the random numbers to the screen,
     you might notice a pause while it gets the next number.  This is
     happening because the computer can not give a repeat number, so every-
     time it gets a repeat number, it has to go back and try again.  If you
     try to get all 75 numbers up, you might hear a beep after a delay.  The
     beep tells you that after 5000 tries, the computer failed to get an
     unused number.  You can press N again; the computer will print all 75
     numbers.  The main reason for the beep escape is so you do not get stuck
     in a infinite cycle by pushing N after all the numbers are used.


         This one was simple too. Have fun.  If you have questions,
     address them to

				  TEHILLAH HILLS SOFTWARE
                                  70 CALDWELL HILL
                                  LEWISTOWN, PA   17044


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1292

     Volume in drive A has no label
     Directory of A:\

    FILE1292 TXT      1821   9-18-89  11:15a
    FOUR     EXE     22788   8-13-89   6:16a
    FREEWHL  COM     35328   4-19-88  10:02p
    GO       BAT        38  10-19-87   3:56p
    GO       TXT      1387  12-20-88   2:24p
    MANUAL   BAT       147  12-15-88  12:39p
    MFOUR    EXE     22548   2-19-88   6:06p
    READ     ME        217   4-20-88  11:33a
    ROBIN    EXE     91262   2-13-88   9:08a
    STAT               989   2-06-88   5:13p
    THS      DOC     23550   8-13-89   6:29a
    VIEW     BAT       219   3-15-89   9:35p
    YES      EXE    112132   2-18-88   8:12p
           13 file(s)     312426 bytes
                            2048 bytes free
