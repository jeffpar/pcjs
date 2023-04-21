---
layout: page
title: "PC-SIG Diskette Library (Disk #2705)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2705/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2705"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## FILE2705.TXT

{% raw %}
```
Disk No: 2705
Disk Title: Symbol-Quest and Memory
PC-SIG Version: S1

Program Title: Symbol-Quest
Author Version: 1.0
Author Registration: $20.00
Special Requirements: EGA or VGA and a mouse.

Test your logic (and luck) with SYMBOL-QUEST, a delightful combination
of mathematics and mystery.  Numerals encoded as symbols in simple
arithmetic problems make very challenging puzzles.  Ample on-line Help
is available, so you can enjoy this game without being a math whiz.
Program Title: Memory
Author Version: 2.0
Author Registration: $20.00
Special Requirements: EGA or VGA.

MEMORY is the PC version of that challenging card game Concentration.
Fifty cards are displayed face down.  Players turn up two cards, one at
a time, hoping to find a matching pair.  If no match is found, the cards
are turned face down again and the next player tries to find a match.
Remember which cards are where in order to find the most matches.  Play
against a friend or five different levels of the computer.

MEMORY has excellent graphics, mouse support, optional sound, and a
well-designed game board.  This program is an excellent way to develop
your visual memory.  But beware -- MEMORY is extremely addictive!

PC-SIG
1030D East Duane Avenue
Sunnyvale  Ca. 94086
(408) 730-9291
(c) Copyright 1991 PC-SIG, Inc.
```
{% endraw %}

## MEMORY.DOC

{% raw %}
```








                          M   E   M   O   R   Y







                       for IBM - PC's and kompatibles



                            EGA or VGA required






                                Version  2.0






                              (c)  1989, 1990


                              Steffen Mueller


                            Gardeschuetzenweg 33


                            D  -  1000 Berlin 45


                                  Germany


                -   M E M O R Y . D O C      page 2   -

     ________________________________________________________________



              MEMORY comes to you with the following files:

              - MEMORY  .EXE : the main program

              - MEMORY  .DOC : the DOC-file

              - MEMORY  .1 ..
                MEMORY  .27  : the picture files

              - REGISTER.FRM : the Registration Form

     ________________________________________________________________


                          M   E   M   O   R   Y


     is a very old and well known game of memory and concentration.
     At the beginning 50 cards (two series with each 25 pictures)
     were shuffled and layed out face down. Both players have to try
     to find two matching cards.


     To start the game, just type   MEMORY
     The program will ask for the name of the first player, so enter
     your name (up to 9 characters). Then enter the name of the second
     player, if you wish to play against a friend. Pressing just RETURN
     (with no entry) tells MEMORY, that you wish to play against COMPI,
     your PC. In this case you have now to choose the level for COMPI
     ( type "1" (for very easy for you) ... "5" (for a very hard task)).


     Now the deck of cards is layed out. The first player has to move
     the cursor around and hit RETURN or SPACE to turn a card over or
     has just to click with the left mouse button at the desired card.
     He repeats this procedure to turn over a second card. If the two
     cards match, he receives one point and both cards will be removed;
     it's again his turn. If both cards don't match, the other player
     tries to find a matching pair and so on. MEMORY shows always the
     score of both players ans which player has to choose cards.



                -   M E M O R Y . D O C      page 3   -




     During the game MEMORY offers the following features:


     "SOUND" toggles sound on / off,

     "DISPLAY ALL" shows all the 25 pairs if you answer with YES
        (pressing 'Q' will stop displaying all cards) and will
        then start the next game if you wish.

     "HELP" shows a help screen (press 'G' to return to the game).

     "QUIT" terminates MEMORY and exits to DOS.



     To start these functions click with the left mouse button to
     the desired area at the top of the screen or press the hilited
     character (i.e. 'H' for HELP).


     A very comfortable feature is that you're able to tell MEMORY
     your desired configuration in the command line:

     The following parameters can be used:

        /1xxx          ( where xxx is the name of the first player.
                         Note: NO space between 1 and the name!)

        /2yyy          ( where yyy is the name of the second player)

        /C1 ... /C5    ( c or C means playing against COMPI, the number
                         1 ... 5 the level)

        /S-            ( s- or S- sets the sound=OFF (default is
                         sound=ON)

        /M-            ( m- or M- tells MEMORY that you don't want to
                         use your mouse although a mouse is installed)

        /Pzzz          ( where zzz is the full path to the picture
                         files "MEMORY.???" if these files are not in
                         the current directory).

                -   M E M O R Y . D O C      page 4   -



     Some examples:

     memory /1Steffen /2Rita
        MEMORY will NOT ask for the players names, first player is
        Steffen and second player is Rita.

     memory /1Steffen /c3 /s-
        MEMORY will NOT ask for the players names. Steffen plays
        against COMPI in level 3. Sound is OFF.

     memory /m- /Pc:\games\memory /1Steffen
        The first player is Steffen, MEMORY will ask only for the
        name of the second player (can be a friend or COMPI).
        Although a mouse is installed it's not used. The files
        "MEMORY.???" are in the specified directory.





     Please note: MEMORY comes to you from "Good old Germany".

     It's a german program; so I'm very sorry for a stumbling
     translation!




                                E N J O Y !

```
{% endraw %}

## SQ.DOC

{% raw %}
```











                      S  Y  M  B  O  L  -  Q  U  E  S  T




                        for IBM - PC's and kompatibles




                              with EGA and Mouse






                              (c)  1989, 1990


                              Steffen Mueller


                            Gardeschuetzenweg 33


                            D  -  1000 Berlin 45


                                  Germany




-----------------------------------------------------------------------

                 -  Symbol - Quest:    page 2 -



Symbol-Quest simulates the mathematical problems you know from many
magazines. The PC computes a problem and encodes it by replacing
every number by a symbol (the same symbol is the same number);
your task now is to solve this problem. In the horizontal direction
there are three additions, in the vertical direction three subtractions.


For convenient operation a mouse is required.


------------------------------------------------------------------------


Symbol-Quest is distributed as Shareware. If you like the game,
please register your copy. Send US $ 20 or DM 30 to the above adress
and you will receive the latest version of SQ without the Shareware -
messages during the program.


-----------------------------------------------------------------------


Symbol-Quest comes to you with the following files


SQ      .EXE    The main program,
SQ      .DOC    the DOC-File
REGISTER.FRM    Registration form


No installation is needed; just copy the files to your hard disk.


------------------------------------------------------------------------


First check up the problem; some mathematical rules will give first
hints. For example:

- If the addition of two 3-digit numbers results in a 4-digit number,
  the first digit of the result must be '1'.

- The last digit of the result of a subtraction must be '0', if both
  numbers have the same last digit.

- The last digit of the result of an addition must be an even number
  (0,2,4,6 or 8), if both numbers have the same last digit.

- and so on...

-----------------------------------------------------------------------

                 -  Symbol - Quest:    page 3 -




To give you a better survey, a scheme is shown in the right half of
the screen.


If you know, which number is encoded by a certain symbol, click with the
RIGHT mouse button to this number in the row of the concerning symbol.
Now in the scheme

- the ':' changes to '=',

- other numbers in this row are deleted and

- in all the other rows the choosen number is deleted, because this
  number can't be assigned to another symbol.

In the problem

- the number is inserted instead of the symbol.
  (If it was the 9th number, the 10th will be automatically assigned.)


If you see, that a number can't be encoded by a certain symbol, use the
LEFT mouse button to DELETE this number in the scheme. So you're able to
see, which numbers are left to choose from.

Deleting the 9th number in a row assignes automatically the remaining
10th number.



In the lower left quarter of the screen, there are four areas to help
you solving the problem. Click with the left mouse button to this
areas to

- get the SOLUTION of the current problem,

- start up a NEW problem,

- QUIT Symbol-Quest or

- get HELP.



-----------------------------------------------------------------------

                 -  Symbol - Quest:    page 4 -




  HELP offers four ways of help:

  - SHOW symbol / number: In the scheme click with the left mouse button
    to a symbol OR to a number; SQ shows the assignment.

  - YES / NO QUESTION: In the scheme click to the intersection of
    symbol / number. SQ reveals whether your presumption is true
    ( 'symbol = number') or false

  - REPEAT PROBLEM: Repeat the same problem.

  - UNDO: In the scheme click to the desired row; SQ will undo every
    assignment or deleting in this line.

  You can quit the help-function pressing the right mouse button.



A Help-screen is shown, if you start SQ using any parameter
(for example; type at the DOS-prompt    SQ /?  ).



Please note: Symbol-Quest comes to you from "Good old Germany".

It's a german program; so I'm very sorry for a stumbling translation!




                           E N J O Y !

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2705

     Volume in drive A has no label
     Directory of A:\

    REGISTER FRM       821   8-30-90   8:15p
                         0   8-31-90   4:41p
    SQ       EXE     49568   8-29-90   9:09p
    SQ       DOC      4469   8-31-90   9:50p
                         0   8-31-90   4:41p
    MEMORY   EXE     49280   8-30-90   3:23p
    MEMORY   DOC      4852   8-30-90   9:27p
    MEMORY   1        4635   8-18-89   9:25p
    MEMORY   2        4635   8-18-89   9:25p
    MEMORY   3        4635   8-18-89   9:25p
    MEMORY   4        4635   8-18-89   9:25p
    MEMORY   5        4635   8-18-89   9:25p
    MEMORY   6        4635   8-18-89   9:25p
    MEMORY   7        4635   8-18-89   9:25p
    MEMORY   8        4635   8-18-89   9:25p
    MEMORY   9        4635   8-18-89   9:25p
    MEMORY   10       4635   8-18-89   9:25p
    MEMORY   11       4635   8-18-89   9:25p
    MEMORY   12       4635   8-18-89   9:25p
    MEMORY   13       4635   8-18-89   9:25p
    MEMORY   14       4635   8-18-89   9:26p
    MEMORY   15       4635   8-18-89   9:26p
    MEMORY   16       4635   8-18-89   9:26p
    MEMORY   17       4635   8-18-89   9:26p
    MEMORY   18       4635   8-18-89   9:26p
    MEMORY   19       4635   8-18-89   9:26p
    MEMORY   20       4635   8-18-89   9:26p
    MEMORY   21       4635   8-18-89   9:26p
    MEMORY   22       4635   8-18-89   9:26p
    MEMORY   23       4635   8-18-89   9:26p
    MEMORY   24       4635   8-18-89   9:26p
    MEMORY   25       4635   8-18-89   9:26p
    MEMORY   26       4635   8-18-89  12:25a
    MEMORY   27       4635   8-18-89   1:35a
    PREVIEW  EXE      7347   4-18-91   1:15p
    GO       BAT       141   7-26-91   2:34a
    FILE2705 TXT      1332   7-25-91   1:27a
           37 file(s)     242955 bytes
                           61440 bytes free
