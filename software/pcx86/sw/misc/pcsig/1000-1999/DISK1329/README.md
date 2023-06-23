---
layout: page
title: "PC-SIG Diskette Library (Disk #1329)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1329/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1329"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "SMART MONEY AND BLACKJACK"

    SMART-MONEY promises to pick lucky numbers for you for any state
    lottery, horse race, Keno, etc.  This random number generator comes with
    a sense of humor and an odds calculator to show the probability of
    winning.
    
    For team play, it offers a formatted agreement covering trustee, names
    of players, amount paid, number of weeks and how the money ought to be
    split.  It can generate up to 100 sets of numbers and the largest
    number
    of each set can be up to 10 million.
    
    BLACKJACK provides hot action for one to six players with good quality
    card graphics.  Options include insurance, splits, totes, opening
    player banks and game banks, and initial bet sizes.  You can also set
    card-weight values and combine player names with levels of skill, as
    well as specify how the dealer and each player are to be treated during
    the game.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1329.TXT

{% raw %}
```
Disk No: 1329
Program Title:  SMART-MONEY version 1.1, BLACKJACK version 1.00
PC-SIG version: 1

SMART-MONEY promises to pick your lucky numbers for any state lottery,
horse race, Keno, etc.  This random number generator comes with a sense
of humor and an odds calculator to show the probability of your winning.
For team play, it offers a formatted agreement covering trustee, names
of players, amount paid, number of weeks and how the money ought to be
split.  It can generate up to one hundred sets of numbers, and the
largest number of each set can be up to ten million.

BLACKJACK provides hot action for one to six players with good quality
graphics of cards.  Options include insurance, splits, totes, opening
player banks and game banks, and initial bet sizes.  You can also set
card-weight values and combine player names with levels of skill, as
well as specify how the dealer and each player are to be treated during
the game.

Usage:  Entertainment.

Special Requirements:  CGA graphics.

How to Start:  Type GO (press enter).

Suggested Registration:  $15.00 for Smart-Money, $17.50 for BLACKJACK.

File Descriptions:

SMART    EXE  Main program.
README   EXE  Program introduction.
BLKJK    EXE  Executable file for BLACKJACK.
BLKHELP  DTA  Help data file for BLACKJACK.
BLKHELP  INX  Help index file for BLACKJACK.
BLKSTRAT DTA  Strategy data file.
BLKSTRAT INX  Strategy index file.
BLKJK    DOC  Instruction file for BLACKJACK.
README   BLK  Introduction file for BLACKJACK.
PROPLAY       Directory for the professional Blackjack player.

PC-SIG
1030D E Duane Avenue
Sunnyvale CA 94086
(408) 730-9291
(c) Copyright 1989 PC-SIG, Inc.

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║ <<<<  Disk No 1329 SMART-MONEY version 1.1, BLACKJACK version 1.00  >>>>║
╠═════════════════════════════════════════════════════════════════════════╣
║   To print the manual for BLACKJACK, type:                              ║
║                                                                         ║
║             MANUAL (press enter)                                        ║
║                                                                         ║
║   To run the BLACKJACK program, type:                                   ║
║                                                                         ║
║             BLKJK (press enter)                                         ║
║                                                                         ║
║   To view the instructions for Smart-Money, type:                       ║
║                                                                         ║
║             README (press enter)                                        ║
║                                                                         ║
║   To run the Smart-Money program, type:                                 ║
║                                                                         ║
║             SMART (press enter)                                         ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## PROPLAY.DOC

{% raw %}
```

E
                          PRO-PLAYER UPGRADE PACKAGE
                         (WORKS WITH BLACKJACK V1.00) F
                         ----------------------------

                        Copyright (c) IBG SOFTWARE 1988
                           Written by: Wayne Hammond
                              All rights reserved


         This is Registered User Supported Software.  You may use
         (test) this package until you have determined if it is of
         benefit to you.  If, after testing, you continue to use any
         of the package output you are requested to send a (suggested)
         $12.50 registration fee to:

                               IBG  Software
                               PRO  Registration
                               P.O. Box 27-6354
                               Boca Raton, FL 33427-6354

         You may make as many copies as you need for your own use.
         You are authorized to distribute the Pro-Player Upgrade and
         its companion BLACKJACK package to others.

         YOU ARE NOT AUTHORIZED to distribute Pro-Player Upgrade
         without an accompanying BLACKJACK package, the two packages
         use facilities in the other and must work together.  I will
         only distribute the Upgrade with its associated BLACKJACK
         package.

E
                               TABLE OF CONTENTS F
                               -----------------

         Getting Started ........................................... 2

         Card Counts ............................................... 2

              How (When) BLACKJACK Counts .......................... 3

              Edit BLKJK.KNT (BLACKJACK's count file) .............. 3

              BLACKJACK Initialization of Counting ................. 5

         The Strategy System ....................................... 6

         Adding Strategy Screens ................................... 6

         Editing Strategy Screens .................................. 6

         Adding Color To Your Files ................................ 7

         Fixed Color Definitions ................................... 7

         Variable Color Definitions ................................ 8


                                                                Page 2

E
         Getting Started F
         ---------------

         The purpose of the Pro-Player Upgrade package is to allow you
         to add YOUR card-counting-techniques and strategy-screens to
         the IBG BLACKJACK program.  Adding a tailored card count also
         enables the ability to replay the last hand or the current
         shoe (deck).

         It is YOUR responsibility to decide what card count to use,
         what strategy to follow, and how to manage your money.  I'm
         only providing a practice facility.  However, to assist you
         in these decisions, I'll list three of the reference books
         which I use.  There are many others that you may select from.

           o   BEAT THE DEALER -- Edward O. Thorp

           o   MILLION DOLLAR BLACKJACK -- Ken Uston

           o   WINNING BLACKJACK -- Stanley Roberts

         You will be editing files in order to implement your counts
         and strategies.  Therefore, I suggest that you make a working
         copy of the upgrade-diskette and store the master-copy for
         safekeeping.

         Further, I suggest that you do your editing on a separate
         diskette (or sub-directory) and only copy your work output to
         the BLACKJACK diskette (or sub-directory) when you are ready
         to test your results.  This will become more understandable
         after I explain the interfaces to BLACKJACK.

E
         Card Counts F
         -----------

         There are almost as many card counting techniques in
         blackjack as there are card counters.  Therefore, it wasn't
         feasible to attempt to directly program a card count that
         would satisfy all users.

         What I have attempted is to put general counting code in
         BLACKJACK and allow each user to satisfy their needs by
         editing a file (BLKJK.KNT) that BLACKJACK reads when it
         initializes.

         Although I have tested several counting techniques, I'm sure
         that there are many that I haven't considered.  If you aren't
         able to count-your-way; I'll work with you and modify the
         program (if possible) or if we can't work it out, I'll refund
         your money.


                                                                Page 3
E
         How (When) BLACKJACK Counts F
         ---------------------------

         BLACKJACK counts each card as it is played, or as it would be
         seen at a casino table.  This gives an accurate count in a
         game where the cards are dealt open.  However, it allows the
         program (and you) to see and count cards that a player in a
         casino game (where the cards are dealt-face-down) might not
         see.

         For example, a player ahead of you (in a face-down casino
         game) stays.  You may or may not know the value of his/her
         down cards and therefore may not be able to count them.

         However, in the computer face-down game, BLACKJACK knows and
         counts the cards.  You may also, because you have seen them
         when they were opened for play.  Therefore, this isn't the
         best dealing-option to practice card counting.

         Another example (in the program) if the cards have to opened
         for inspection because of an insurance bet decision or early
         surrender decision, you get to see all cards and may be
         tempted to count them then, but the program has only counted
         the dealer's up-card at this time and counts the player's
         cards as they play them.  So even if you are counting
         accurately you may be out of synchronism with the program.

         If you are a card counter or practicing card counting, you
         want to pick a game dealt-open (program default) just as you
         would in a casino.

         Card counting is always active, but you have an option on
         whether or not the count should be displayed.  This allows
         you a chance to practice counting and verify your results at
         selected times.

         When the Show-Count option is "on" the count is displayed in
         the Command Box while you are betting, or on the strategy
         screens during play.

E
         Edit BLKJK.KNT (BLACKJACK's count file) F
         ---------------------------------------

         To enable a custom card count you have to create or edit the
         file BLKJK.KNT.  There are two sample files provided to
         assist you in this effort.  SAMPLE1.KNT is balanced (sum of
         cards in deck adds to zero), SAMPLE2.KNT is unbalanced (sum
         of cards in deck doesn't add to zero).  Copy the desired type
         to BLKJK.KNT and then edit BLKJK.KNT to fit your needs.


                                                                Page 4

         BLKJK.KNT is usable as soon as copied.  The format is fixed
         as far as the order of variables is concerned, all variables
         are required.  Numeric variables are separated by at least 1
         blank (space).  The variables are separated from the comments
         by a string of periods ( .... ).  The maximum length of the
         string (character) variables is commented in the sample
         files.

         An explanation follows:

         o the first 13 variables are the cards from ace through the
           king.  Cards are counted by adding their value, the card
           count is an algebraic sum.

         o begin count with ... count value of a single deck after
           shuffle is complete.

         o bias count ... value that adjusts (biases) other values
           based on the number of units (decks in the sample files) in
           play.  The adjustment values is the bias value times
           (number of decks - 1).  Specify zero (0) for no biasing.
           The bias is either added or subtracted as indicated in the
           comments.

         o start of poor condition ... value (single deck) beginning
           of poor condition.

         o bias start of poor ...
                     .
                     .
                     .
           the remainder of the starts and biases follow the same
           logic.

         o AceAdj ... an adjustment made in calculating whether the
           number of aces left in the deck is as-expected.  The number
           of cards-counted is subtracted from the total number of
           cards giving number of uncounted cards to be played.  This
           number is divided by thirteen, if the remainder is greater
           than AceAdj, 1 is added to the number expected (quotient).

         o UnitAdj ... similar to AceAdj but operates on "unit" and
           unit bias.  The sample files are based on a unit of a deck,
           that is, 52.  If you vary unit size (discussed next), you
           must consider all variables except the card values.

         o UnitAmt ... unit size divisor , that is, this number is
           divided into the cards-still-to-be-played to determine how
           many units are left.  If the remainder is greater than
           UnitAdj, 1 is added to the number of units remaining.

         o report cards left:  this number is divided into the number
           of cards-still-to-be-played and the result is displayed,
           rounded to 1 decimal place.  A value of 52 generates decks,
           26 yields half-decks, 1 gives number of cards (integer),
           etc.


                                                                Page 5

         o report headings ... this is the character field that
           identifies cards-left as defined above.  You have a length
           of 5 which works nicely for "decks", perhaps "1/2 D" or
           "Halfs" for half deck reporting.

         o the remainder are the labels for the five possible report
           conditions.  The samples assign:

             ++rich  for the very rich condition
             rich    for the rich condition
             normal  for the normal condition
             poor    for the poor condition and ...
             --poor  for the very poor condition

         the conditions are selected as follows:

         if CardCount greater or equal VeryRich then set very rich
           else if CardCount greater or equal Rich then set rich
             else if CardCount less or equal VeryPoor then very poor
               else if CardCount less or equal Poor set poor
                 else set normal

         You can see that normal is the catch-all for non-specified
         values.  Therefore, if you wanted a four level report such
         as, very rich, rich, poor, or very poor, you could achieve it
         by assigning poor a value 1 less than rich, and use the same
         bias for poor as you use for rich.  Also, change the "normal"
         heading to "poor".

         Further, if you don't like negative counts, you can scale all
         values to move them away from zero; or the unbalanced count
         of SAMPLE2 (which starts at 17) could be moved to swing
         around zero.

         Pick your favorite algorithm and do it your way.

E
         BLACKJACK Initialization of Counting F
         ------------------------------------

         When BLACKJACK initializes it looks for the file BLKJK.KNT.
         If available, the customized counts are loaded and the replay
         option is enabled.  If the file isn't found BLACKJACK
         initializes using its default count and no replay.

         If an error occurs during the short read (after finding the
         file) it is most likely a format error in BLKJK.KNT.  You are
         allowed to continue with the default count or end the program
         and correct the error.  Next let's look at adding your
         strategy screens.


                                                                Page 6
E
         The Strategy System F
         -------------------

         The number of possible strategies is even higher than the
         number of counting techniques, because many-strategies are
         based on the count.  Therefore, I decided to implement
         strategies as a file-based-system and allow user editing of
         the screens.

         The technique used to read the strategy screens is very fast.
         A fixed disk (hard file) has a brief (barely noticeable)
         delay, while a virtual or RAM disk is instantaneous.  Even
         diskette I/O is acceptable, delay is only noticeable while
         the drive motor starts.  Further, you have color control even
         if you change colors during play.

E
         Adding Strategy Screens F
         -----------------------

         The following files are used to add strategy screens:
         (extension names are specific -- use same as provided)

           o MAKESTR  BAT   make strategy screens
           o CONVERT  EXE   program to convert ASCII text files to
                            intermediate work files (N1 .. N99)
           o COMBINE  EXE   program to combine the work files to a
                            single data file and index it
           o BLKSTRAT CTL   control information--one entry per file
           o STRATTOC TXT   strategy table-of-contents text
           o BLKJKBAS TXT   basic strategy (screens) text
           o USER-ADD TXT   edit file for your text strategy screens

         I suggest that (with these files in a directory separate from
         the blackjack program directory) you type MAKESTR <Enter> and
         exercise the system.  This will illustrate "MAKE" processing
         and give you a feel for the number of work files and the
         amount of disk space they need.  There is one work file for
         each screen plus a control file for each (input) text file.

         Then, if all has gone well, you may copy BLKSTRAT.DTA and
         BLKSTRAT.INX to the blackjack program sub-directory and run
         BLACKJACK.  Look at the strategy system, it should be like
         you have been using except there is now a 21st screen showing
         user start.

         Now you are ready to build (edit) your own strategy screens.

E
         Editing Strategy Screens F
         ------------------------

         Editing is simple and straight-forward.  Use a left margin of
         2 and a right margin of 39.  Data is placed on the screen
         using the same rows and columns that you see while editing.
         The maximum number of viewable rows is 18.


                                                                Page 7

         Use the form feed control character ASCII 12, (I can't show
         you -- your printer will form feed) to terminate screens.
         Not used with the last screen in a file.

         The default color attributes are the text foreground and text
         background colors currently in use by BLACKJACK program.  The
         screen is cleared before writing so you may have short panels
         without garbage on the screen.  If you inadvertently have an
         form feed as the last character in the file, an extra blank
         screen is generated.

         That is all there is to it if you want to use standard
         colors; however, you may add colors as described below.

E
         Adding Color To Your Files F
         --------------------------

         You set color attributes on individual fields.  A field may
         be as small as one character or as large as a full line
         (row).

         This requires control characters.  I selected from the ASCII
         control characters to allow all text characters on the
         screen.  Unfortunately, I can't illustrate correctly (in a
         print file).  I will use "<" as start-of-field and ">" as
         end-of-field, and give the ASCII values of the real
         characters that you see in the sample files.

         You add color control by INSERTING (change your margins) the
         end-of-field character > (ASCII 1 -- open smiley face)
         followed by the foreground color and then the background
         color.  For example:  "EXAMPLE>71" the word example would be
         written with white letters on a blue background.  These color
         control characters do not take space on the screen so what
         you get is where you saw it before adding color.  The fixed
         (once set they hold) color definitions follow.

E
         Fixed Color Definitions F
         -----------------------

         A list of the fixed colors ... the left column is both
         foreground and background.  The right column is foreground
         only.

                   0 -- black           8 -- gray
                   1 -- blue            9 -- light blue
                   2 -- green         a,A -- light green
                   3 -- cyan          b,B -- light cyan
                   4 -- red           c,C -- light red
                   5 -- magenta       d,D -- light magenta
                   6 -- brown         e,E -- yellow
                   7 -- white         f,F -- bright white


                                                                Page 8
E
         Variable Color Definitions F
         --------------------------

         It is possible to define colors which follow the color
         options of BLACKJACK.  You use the same techniques but with
         the following six codes.  Definition is (default) RBG
         monitor, colors follow monitor changes as well as color
         changes.

                 >11 -- standard text .. white on blue
                 >22 -- action ......... yellow on blue
                 >33 -- title .......... bright-white on blue
                 >44 -- status ......... bright-white on red
                 >55 -- command text ... white on black
                 >66 -- command action . bright-white on black

         Any field that is not marked defaults to >11.

         One more control character needs to be mentioned and that is
         the start-of-field character < (ASCII 15).  The < does not
         take space on the display.  You only need to use this if you
         want to write leading blanks with a different background
         color.

         For example (using text left margin as 1):

              Example >11<     has leading blanks     >f4

         would write the word "Example" and 1 trailing blank using
         standard colors, then 5 blank positions with red background,
         then the text "has leading blanks" as bright-white on red,
         then the 5 trailing blanks before end-of-field.  Program
         normally does leading blank elimination and just uses the
         background color established when the screen was cleared
         before writing.



```
{% endraw %}

## BLKJKBAS.TXT

{% raw %}
```
┌──────────────────────────────────────┐f4
│ Basic Strategy--Single Deck   1 of 5 │f4
└──────────────────────────────────────┘f4


       Decide33 (in order)11 if you:33

         1)  Surrender
         2)  Insure
         3)  Split Pairs
         4)  Double
         5)  Stay
         6)  Hit

 Make22 the 11first valid play33 indicated
 by the strategy.

┌──────────────────────────────────────┐f4
│ Basic Strategy--Single Deck   2 of 5 │f4
└──────────────────────────────────────┘f4

 SURRENDER

 Dealer shows33      You surrender22
          Ace .... (10,6)
           10 .... (10,6),(10,5)
                   ( 9,7),( 9,6)

 INSURANCE

 Do not insure22 when playing basic
 strategy; it requires card counting
 to know when insurance is a good bet.

┌──────────────────────────────────────┐f4
│ Basic Strategy--Single Deck   3 of 5 │f4
└──────────────────────────────────────┘f4
 SPLIT PAIRS22 when

   You have33  and  11Dealer shows33
      (2,2) ..... 3-7          11*22(2-7)
      (3,3) ..... 4-7          11*22(2-7)
      (4,4) ..... Do not split 11*22(4-6)
      (5,5) ..... Do not split
      (6,6) ..... 2-6
      (7,7) ..... 2-7          11*22(2-8)
      (8,8) ..... Always split
      (9,9) ..... 2-9,(except 7)
    (10,10) ..... Do not split
  (Ace,Ace) ..... Always split

  *22 This if Double After Split allowed

┌──────────────────────────────────────┐f4
│ Basic Strategy--Single Deck   4 of 5 │f4
└──────────────────────────────────────┘f4

 SOFT DOUBLING -- 11Double when22
   You have33       and      11Dealer shows33
   (Ace & 2│3│4│5) ......... 4-6
   (Ace,6) ................. 2-6
   (Ace,7) ................. 3-6
   (Ace,8) ................. 6
   (Ace,9) ................. Never

 HARD DOUBLING -- 11Double when22
   You have33       and      11Dealer shows33
   (5,3) or (4,4) .......... 5 or 6
      9 .................... 2-6
     10 .................... 2-9
     11 .................... Always

┌──────────────────────────────────────┐f4
│ Basic Strategy--Single Deck   5 of 5 │f4
└──────────────────────────────────────┘f4
 SOFT STANDING -- when
  Dealer shows33         You stand on22
     2-8 ................. 18
     9 OR 10 ............. 19
     Ace ................. 18 11*22(19)

  *22 This if Dealer hits Soft 17

 HARD STANDING -- when
  Dealer Shows33         You Stand On22
     2 or 3 .............. 13
     4-6 ................. 12
     7,8,9, 10, or Ace ... 17

 Otherwise HIT22

┌──────────────────────────────────────┐f4
│ Basic Strategy--Double Deck   1 of 5 │f4
└──────────────────────────────────────┘f4


       Decide33 (in order)11 if you:33

         1)  Surrender
         2)  Insure
         3)  Split Pairs
         4)  Double
         5)  Stay
         6)  Hit

 Make22 the 11first valid play33 indicated
 by the strategy.

┌──────────────────────────────────────┐f4
│ Basic Strategy--Double Deck   2 of 5 │f4
└──────────────────────────────────────┘f4

 SURRENDER

 Dealer shows33      You surrender22
          Ace .... (10,6),( 9,7)
           10 .... (10,6),(10,5),(9,7)
                   ( 9,6)

 INSURANCE

 Do not insure22 when playing basic
 strategy; it requires card counting
 to know when insurance is a good bet.

┌──────────────────────────────────────┐f4
│ Basic Strategy--Double Deck   3 of 5 │f4
└──────────────────────────────────────┘f4
 SPLIT PAIRS22 when

   You have33  and  11Dealer shows33
      (2,2) ..... 4-7          11*22(2-7)
      (3,3) ..... 4-7          11*22(2-7)
      (4,4) ..... Do not split 11*22(6)
      (5,5) ..... Do not split
      (6,6) ..... 3-6          11*22(2-6)
      (7,7) ..... 2-7
      (8,8) ..... Always split
      (9,9) ..... 2-9,(except 7)
    (10,10) ..... Do not split
  (Ace,Ace) ..... Always split

  *22 This if Double After Split allowed

┌──────────────────────────────────────┐f4
│ Basic Strategy--Double Deck   4 of 5 │f4
└──────────────────────────────────────┘f4

 SOFT DOUBLING -- 11Double when22
   You have33       and      11Dealer shows33
   (Ace & 2 or 3) .......... 5-6
   (Ace & 4 or 5) .......... 4-6
   (Ace & 6 or 7) .......... 3-6
   (Ace & 8 or 9) .......... Never

 HARD DOUBLING -- 11Double when22
   You have33       and      11Dealer shows33
      8 .................... Never
      9 .................... 2-6
     10 .................... 2-9
     11 .................... Always

┌──────────────────────────────────────┐f4
│ Basic Strategy--Double Deck   5 of 5 │f4
└──────────────────────────────────────┘f4

 SOFT STANDING -- when
  Dealer shows33         You stand on22
     2-8 ................. 18
     9, 10, or Ace ....... 19

 HARD STANDING -- when
  Dealer shows33         You stand on22
     2 or 3 .............. 13
     4-6 ................. 12
     7,8,9,10,Ace ........ 17


 Otherwise HIT22

┌──────────────────────────────────────┐f4
│ Basic Strategy-Multiple Deck  1 of 5 │f4
└──────────────────────────────────────┘f4


       Decide33 (in order)11 if you:33

         1)  Surrender
         2)  Insure
         3)  Split Pairs
         4)  Double
         5)  Stay
         6)  Hit

 Make22 the 11first valid play33 indicated
 by the strategy.

┌──────────────────────────────────────┐f4
│ Basic Strategy-Multiple Deck  2 of 5 │f4
└──────────────────────────────────────┘f4

 SURRENDER

 Dealer shows33      You surrender22
          Ace .... (10,6)
           10 .... (10,6),(10,5),(9,7)
                   ( 9,6),( 7,7)

 INSURANCE

 Do not insure22 when playing basic
 strategy; it requires card counting
 to know when insurance is a good bet.

┌──────────────────────────────────────┐f4
│ Basic Strategy-Multiple Deck  3 of 5 │f4
└──────────────────────────────────────┘f4
 SPLIT PAIRS22 when

   You have33  and  11Dealer shows33
      (2,2) ..... 4-7          11*22(2-7)
      (3,3) ..... 4-7          11*22(2-7)
      (4,4) ..... Do not split 11*22(5-6)
      (5,5) ..... Do not split
      (6,6) ..... 3-6          11*22(2-6)
      (7,7) ..... 2-7
      (8,8) ..... Always split
      (9,9) ..... 2-9,(Except 7)
    (10,10) ..... Do not split
  (Ace,Ace) ..... Always split

  *22 This if Double After Split allowed

┌──────────────────────────────────────┐f4
│ Basic Strategy-Multiple Deck  4 of 5 │f4
└──────────────────────────────────────┘f4

 SOFT DOUBLING -- 11Double when22
   You have33       and      11Dealer shows33
   (Ace & 2 or 3) .......... 5-6
   (Ace & 4 or 5) .......... 4-6
   (Ace & 6 or 7) .......... 3-6
   (Ace,8) ................. 6
   (Ace,9) ................. Never

 HARD DOUBLING -- 11Double when22
   You have33       and      11Dealer shows33
      8 .................... 6
      9 .................... 3-6
     10 .................... 2-9
     11 .................... 2-10

┌──────────────────────────────────────┐f4
│ Basic Strategy-Multiple Deck  5 of 5 │f4
└──────────────────────────────────────┘f4

 SOFT STANDING -- when
  Dealer shows33         You stand on22
     2-8 ................. 18
     9, 10, or Ace ....... 19

 HARD STANDING -- when
  Dealer shows33         You stand on22
     2 or 3 .............. 13
     4-6 ................. 12
     7,8,9,10, or Ace .... 17


 Otherwise HIT22

┌──────────────────────────────────────┐f4
│Basic Strategy-Double Exposure  1 of 4│f4
└──────────────────────────────────────┘f4


 In Double Exposure:22

  o33 The dealer's hole cards are exposed
  o33 The dealer wins pushes, except
    blackjack which player wins
  o33 The dealer hits soft 17
  o33 Play with 5 decks
  o33 Insurance bet is not allowed
  o33 Surrender is not allowed
  o33 A different format is used --
    take action or else stay

┌──────────────────────────────────────┐f4
│Basic Strategy-Double Exposure  2 of 4│f4
└──────────────────────────────────────┘f4

 Dealer  Split       Double   Hit Until
  Shows  Pairs     11Hard22  Soft33 Hard22 Soft33

 Any 20                         21  21
 Any 19                         20  20

   Soft33
     18                         19  19
     17  A,8       11           18  1855
     16  A,8,9     10,11        12  19
     15  A,9       10,11        12  1955
     14  A         10,11        12  19
     13  A         11           13  1955
     12  A                      13  19

┌──────────────────────────────────────┐f4
│Basic Strategy-Double Exposure  3 of 4│f4
└──────────────────────────────────────┘f4

 Dealer  Split       Double   Hit Until
  Shows  Pairs     11Hard22  Soft33 Hard22 Soft33

   Hard22

     18  9                      19  19
     17  2-3,6-8                18  1855
     16  A-4,6-10  5-11  A2-A9  12  18
     15  A-4,6-10  5-11  A2-A9  12  1855
     14  A-4,6-10  5-11  A2-A9  12  18
     13  A-4,6-10  7-11  A2-A9  12  1855
     12  A-4,6-9   8-11  A2-A8  12  18

┌──────────────────────────────────────┐f4
│Basic Strategy-Double Exposure  4 of 4│f4
└──────────────────────────────────────┘f4

 Dealer  Split       Double   Hit Until
  Shows  Pairs     11Hard22  Soft33 Hard22 Soft33

   Hard22

     11                         14  19
     10  A                      15  19
      9  A         11           16  1955
      8  A,8,9     10,11        16  19
      7  A,8       10,11        18  1855
      6  A-3,6-9   9-11  A3-A7  12  18
      5  A-3,6-9   9-11  A5-A7  12  1855
      4  A,6-9     10,11 A7     12  18
```
{% endraw %}

## PROPLAY.DOC

{% raw %}
```

E
                          PRO-PLAYER UPGRADE PACKAGE
                         (WORKS WITH BLACKJACK V1.00) F
                         ----------------------------

                        Copyright (c) IBG SOFTWARE 1988
                           Written by: Wayne Hammond
                              All rights reserved


         This is Registered User Supported Software.  You may use
         (test) this package until you have determined if it is of
         benefit to you.  If, after testing, you continue to use any
         of the package output you are requested to send a (suggested)
         $12.50 registration fee to:

                               IBG  Software
                               PRO  Registration
                               P.O. Box 27-6354
                               Boca Raton, FL 33427-6354

         You may make as many copies as you need for your own use.
         You are authorized to distribute the Pro-Player Upgrade and
         its companion BLACKJACK package to others.

         YOU ARE NOT AUTHORIZED to distribute Pro-Player Upgrade
         without an accompanying BLACKJACK package, the two packages
         use facilities in the other and must work together.  I will
         only distribute the Upgrade with its associated BLACKJACK
         package.

E
                               TABLE OF CONTENTS F
                               -----------------

         Getting Started ........................................... 2

         Card Counts ............................................... 2

              How (When) BLACKJACK Counts .......................... 3

              Edit BLKJK.KNT (BLACKJACK's count file) .............. 3

              BLACKJACK Initialization of Counting ................. 5

         The Strategy System ....................................... 6

         Adding Strategy Screens ................................... 6

         Editing Strategy Screens .................................. 6

         Adding Color To Your Files ................................ 7

         Fixed Color Definitions ................................... 7

         Variable Color Definitions ................................ 8


                                                                Page 2

E
         Getting Started F
         ---------------

         The purpose of the Pro-Player Upgrade package is to allow you
         to add YOUR card-counting-techniques and strategy-screens to
         the IBG BLACKJACK program.  Adding a tailored card count also
         enables the ability to replay the last hand or the current
         shoe (deck).

         It is YOUR responsibility to decide what card count to use,
         what strategy to follow, and how to manage your money.  I'm
         only providing a practice facility.  However, to assist you
         in these decisions, I'll list three of the reference books
         which I use.  There are many others that you may select from.

           o   BEAT THE DEALER -- Edward O. Thorp

           o   MILLION DOLLAR BLACKJACK -- Ken Uston

           o   WINNING BLACKJACK -- Stanley Roberts

         You will be editing files in order to implement your counts
         and strategies.  Therefore, I suggest that you make a working
         copy of the upgrade-diskette and store the master-copy for
         safekeeping.

         Further, I suggest that you do your editing on a separate
         diskette (or sub-directory) and only copy your work output to
         the BLACKJACK diskette (or sub-directory) when you are ready
         to test your results.  This will become more understandable
         after I explain the interfaces to BLACKJACK.

E
         Card Counts F
         -----------

         There are almost as many card counting techniques in
         blackjack as there are card counters.  Therefore, it wasn't
         feasible to attempt to directly program a card count that
         would satisfy all users.

         What I have attempted is to put general counting code in
         BLACKJACK and allow each user to satisfy their needs by
         editing a file (BLKJK.KNT) that BLACKJACK reads when it
         initializes.

         Although I have tested several counting techniques, I'm sure
         that there are many that I haven't considered.  If you aren't
         able to count-your-way; I'll work with you and modify the
         program (if possible) or if we can't work it out, I'll refund
         your money.


                                                                Page 3
E
         How (When) BLACKJACK Counts F
         ---------------------------

         BLACKJACK counts each card as it is played, or as it would be
         seen at a casino table.  This gives an accurate count in a
         game where the cards are dealt open.  However, it allows the
         program (and you) to see and count cards that a player in a
         casino game (where the cards are dealt-face-down) might not
         see.

         For example, a player ahead of you (in a face-down casino
         game) stays.  You may or may not know the value of his/her
         down cards and therefore may not be able to count them.

         However, in the computer face-down game, BLACKJACK knows and
         counts the cards.  You may also, because you have seen them
         when they were opened for play.  Therefore, this isn't the
         best dealing-option to practice card counting.

         Another example (in the program) if the cards have to opened
         for inspection because of an insurance bet decision or early
         surrender decision, you get to see all cards and may be
         tempted to count them then, but the program has only counted
         the dealer's up-card at this time and counts the player's
         cards as they play them.  So even if you are counting
         accurately you may be out of synchronism with the program.

         If you are a card counter or practicing card counting, you
         want to pick a game dealt-open (program default) just as you
         would in a casino.

         Card counting is always active, but you have an option on
         whether or not the count should be displayed.  This allows
         you a chance to practice counting and verify your results at
         selected times.

         When the Show-Count option is "on" the count is displayed in
         the Command Box while you are betting, or on the strategy
         screens during play.

E
         Edit BLKJK.KNT (BLACKJACK's count file) F
         ---------------------------------------

         To enable a custom card count you have to create or edit the
         file BLKJK.KNT.  There are two sample files provided to
         assist you in this effort.  SAMPLE1.KNT is balanced (sum of
         cards in deck adds to zero), SAMPLE2.KNT is unbalanced (sum
         of cards in deck doesn't add to zero).  Copy the desired type
         to BLKJK.KNT and then edit BLKJK.KNT to fit your needs.


                                                                Page 4

         BLKJK.KNT is usable as soon as copied.  The format is fixed
         as far as the order of variables is concerned, all variables
         are required.  Numeric variables are separated by at least 1
         blank (space).  The variables are separated from the comments
         by a string of periods ( .... ).  The maximum length of the
         string (character) variables is commented in the sample
         files.

         An explanation follows:

         o the first 13 variables are the cards from ace through the
           king.  Cards are counted by adding their value, the card
           count is an algebraic sum.

         o begin count with ... count value of a single deck after
           shuffle is complete.

         o bias count ... value that adjusts (biases) other values
           based on the number of units (decks in the sample files) in
           play.  The adjustment values is the bias value times
           (number of decks - 1).  Specify zero (0) for no biasing.
           The bias is either added or subtracted as indicated in the
           comments.

         o start of poor condition ... value (single deck) beginning
           of poor condition.

         o bias start of poor ...
                     .
                     .
                     .
           the remainder of the starts and biases follow the same
           logic.

         o AceAdj ... an adjustment made in calculating whether the
           number of aces left in the deck is as-expected.  The number
           of cards-counted is subtracted from the total number of
           cards giving number of uncounted cards to be played.  This
           number is divided by thirteen, if the remainder is greater
           than AceAdj, 1 is added to the number expected (quotient).

         o UnitAdj ... similar to AceAdj but operates on "unit" and
           unit bias.  The sample files are based on a unit of a deck,
           that is, 52.  If you vary unit size (discussed next), you
           must consider all variables except the card values.

         o UnitAmt ... unit size divisor , that is, this number is
           divided into the cards-still-to-be-played to determine how
           many units are left.  If the remainder is greater than
           UnitAdj, 1 is added to the number of units remaining.

         o report cards left:  this number is divided into the number
           of cards-still-to-be-played and the result is displayed,
           rounded to 1 decimal place.  A value of 52 generates decks,
           26 yields half-decks, 1 gives number of cards (integer),
           etc.


                                                                Page 5

         o report headings ... this is the character field that
           identifies cards-left as defined above.  You have a length
           of 5 which works nicely for "decks", perhaps "1/2 D" or
           "Halfs" for half deck reporting.

         o the remainder are the labels for the five possible report
           conditions.  The samples assign:

             ++rich  for the very rich condition
             rich    for the rich condition
             normal  for the normal condition
             poor    for the poor condition and ...
             --poor  for the very poor condition

         the conditions are selected as follows:

         if CardCount greater or equal VeryRich then set very rich
           else if CardCount greater or equal Rich then set rich
             else if CardCount less or equal VeryPoor then very poor
               else if CardCount less or equal Poor set poor
                 else set normal

         You can see that normal is the catch-all for non-specified
         values.  Therefore, if you wanted a four level report such
         as, very rich, rich, poor, or very poor, you could achieve it
         by assigning poor a value 1 less than rich, and use the same
         bias for poor as you use for rich.  Also, change the "normal"
         heading to "poor".

         Further, if you don't like negative counts, you can scale all
         values to move them away from zero; or the unbalanced count
         of SAMPLE2 (which starts at 17) could be moved to swing
         around zero.

         Pick your favorite algorithm and do it your way.

E
         BLACKJACK Initialization of Counting F
         ------------------------------------

         When BLACKJACK initializes it looks for the file BLKJK.KNT.
         If available, the customized counts are loaded and the replay
         option is enabled.  If the file isn't found BLACKJACK
         initializes using its default count and no replay.

         If an error occurs during the short read (after finding the
         file) it is most likely a format error in BLKJK.KNT.  You are
         allowed to continue with the default count or end the program
         and correct the error.  Next let's look at adding your
         strategy screens.


                                                                Page 6
E
         The Strategy System F
         -------------------

         The number of possible strategies is even higher than the
         number of counting techniques, because many-strategies are
         based on the count.  Therefore, I decided to implement
         strategies as a file-based-system and allow user editing of
         the screens.

         The technique used to read the strategy screens is very fast.
         A fixed disk (hard file) has a brief (barely noticeable)
         delay, while a virtual or RAM disk is instantaneous.  Even
         diskette I/O is acceptable, delay is only noticeable while
         the drive motor starts.  Further, you have color control even
         if you change colors during play.

E
         Adding Strategy Screens F
         -----------------------

         The following files are used to add strategy screens:
         (extension names are specific -- use same as provided)

           o MAKESTR  BAT   make strategy screens
           o CONVERT  EXE   program to convert ASCII text files to
                            intermediate work files (N1 .. N99)
           o COMBINE  EXE   program to combine the work files to a
                            single data file and index it
           o BLKSTRAT CTL   control information--one entry per file
           o STRATTOC TXT   strategy table-of-contents text
           o BLKJKBAS TXT   basic strategy (screens) text
           o USER-ADD TXT   edit file for your text strategy screens

         I suggest that (with these files in a directory separate from
         the blackjack program directory) you type MAKESTR <Enter> and
         exercise the system.  This will illustrate "MAKE" processing
         and give you a feel for the number of work files and the
         amount of disk space they need.  There is one work file for
         each screen plus a control file for each (input) text file.

         Then, if all has gone well, you may copy BLKSTRAT.DTA and
         BLKSTRAT.INX to the blackjack program sub-directory and run
         BLACKJACK.  Look at the strategy system, it should be like
         you have been using except there is now a 21st screen showing
         user start.

         Now you are ready to build (edit) your own strategy screens.

E
         Editing Strategy Screens F
         ------------------------

         Editing is simple and straight-forward.  Use a left margin of
         2 and a right margin of 39.  Data is placed on the screen
         using the same rows and columns that you see while editing.
         The maximum number of viewable rows is 18.


                                                                Page 7

         Use the form feed control character ASCII 12, (I can't show
         you -- your printer will form feed) to terminate screens.
         Not used with the last screen in a file.

         The default color attributes are the text foreground and text
         background colors currently in use by BLACKJACK program.  The
         screen is cleared before writing so you may have short panels
         without garbage on the screen.  If you inadvertently have an
         form feed as the last character in the file, an extra blank
         screen is generated.

         That is all there is to it if you want to use standard
         colors; however, you may add colors as described below.

E
         Adding Color To Your Files F
         --------------------------

         You set color attributes on individual fields.  A field may
         be as small as one character or as large as a full line
         (row).

         This requires control characters.  I selected from the ASCII
         control characters to allow all text characters on the
         screen.  Unfortunately, I can't illustrate correctly (in a
         print file).  I will use "<" as start-of-field and ">" as
         end-of-field, and give the ASCII values of the real
         characters that you see in the sample files.

         You add color control by INSERTING (change your margins) the
         end-of-field character > (ASCII 1 -- open smiley face)
         followed by the foreground color and then the background
         color.  For example:  "EXAMPLE>71" the word example would be
         written with white letters on a blue background.  These color
         control characters do not take space on the screen so what
         you get is where you saw it before adding color.  The fixed
         (once set they hold) color definitions follow.

E
         Fixed Color Definitions F
         -----------------------

         A list of the fixed colors ... the left column is both
         foreground and background.  The right column is foreground
         only.

                   0 -- black           8 -- gray
                   1 -- blue            9 -- light blue
                   2 -- green         a,A -- light green
                   3 -- cyan          b,B -- light cyan
                   4 -- red           c,C -- light red
                   5 -- magenta       d,D -- light magenta
                   6 -- brown         e,E -- yellow
                   7 -- white         f,F -- bright white


                                                                Page 8
E
         Variable Color Definitions F
         --------------------------

         It is possible to define colors which follow the color
         options of BLACKJACK.  You use the same techniques but with
         the following six codes.  Definition is (default) RBG
         monitor, colors follow monitor changes as well as color
         changes.

                 >11 -- standard text .. white on blue
                 >22 -- action ......... yellow on blue
                 >33 -- title .......... bright-white on blue
                 >44 -- status ......... bright-white on red
                 >55 -- command text ... white on black
                 >66 -- command action . bright-white on black

         Any field that is not marked defaults to >11.

         One more control character needs to be mentioned and that is
         the start-of-field character < (ASCII 15).  The < does not
         take space on the display.  You only need to use this if you
         want to write leading blanks with a different background
         color.

         For example (using text left margin as 1):

              Example >11<     has leading blanks     >f4

         would write the word "Example" and 1 trailing blank using
         standard colors, then 5 blank positions with red background,
         then the text "has leading blanks" as bright-white on red,
         then the 5 trailing blanks before end-of-field.  Program
         normally does leading blank elimination and just uses the
         background color established when the screen was cleared
         before writing.



```
{% endraw %}

## STRATTOC.TXT

{% raw %}
```
┌──────────────────────────────────────┐f4
│      Blackjack Playing Strategy      │f4
│          TABLE OF CONTENTS           │f4
└──────────────────────────────────────┘f4

 Single Deck22   (basic strategy) ....  11233

 Double Deck22   (basic strategy) ....  11733

 Multiple Deck22 (basic strategy) .... 111233
  (4 or more)

 Double Exposure22 (basic strategy) .. 111733


 Basic strategy is used if you don't
 count cards.
```
{% endraw %}

## USER-ADD.TXT

{% raw %}
```
┌──────────────────────────────────────┐f4
│     User Strategy --- Start File     │f4
└──────────────────────────────────────┘f4

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1329

     Volume in drive A has no label
     Directory of A:\

    BLKJK    EXE     87056   7-09-88   8:00a
    BLKHELP  DTA     47360   7-09-88   8:00a
    BLKHELP  INX       325   7-09-88   8:00a
    BLKSTRAT DTA     10496   7-09-88   8:00a
    BLKSTRAT INX        81   7-09-88   8:00a
    BLKJK    DOC      6992   7-09-88   8:00a
    README   BLK       944   7-09-88   8:00a
    SMART    EXE     53094   8-11-88   5:24a
    README   EXE     36598   1-01-80  12:06a
    MANUAL   BAT       147   1-19-89   9:21a
    GO       BAT        38  10-19-87   3:56p
    GO       TXT      1464   2-22-89   9:42a
    FILE1329 TXT      1699   2-22-89  10:04a
    PROPLAY      <DIR>    
           14 file(s)     246294 bytes

     Directory of A:\PROPLAY

    .            <DIR>    
    ..           <DIR>    
    README   PRO       721   7-13-88   3:00p
    PROPLAY  DOC     19531   7-13-88   3:00p
    SAMPLE1  KNT      1493   7-13-88   3:00p
    SAMPLE2  KNT      1493   7-13-88   3:00p
    MAKESTR  BAT       332   7-13-88   3:00p
    CONVERT  EXE      6960   7-13-88   3:00p
    COMBINE  EXE      5616   7-13-88   3:00p
    BLKSTRAT CTL        43   7-13-88   3:00p
    STRATTOC TXT       461   7-13-88   3:00p
    BLKJKBAS TXT      9772   7-13-88   3:00p
    USER-ADD TXT       138   7-13-88   3:00p
           13 file(s)      46560 bytes

    Total files listed:
           27 file(s)     292854 bytes
                           14336 bytes free
