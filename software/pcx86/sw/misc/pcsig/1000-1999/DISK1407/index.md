---
layout: page
title: "PC-SIG Diskette Library (Disk #1407)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1407/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1407"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "SUPER LOTTO-MASTER"

    Anyone who believes no lottery system is truly random will find a
    friend in SUPER LOTTO-MASTER.
    
    Not a random-number generator, but rather a historically weighted
    system, this program lets you enter past winning numbers for whatever
    lottery you are tracking.  It then computes the odds of the numbers
    being picked again.  SUPER LOTTO handles three, four, five, six and
    seven-number games and prints its choices in a list that ranks best to
    worst.  You can also add in your own lucky number with the computer's --
    to hedge your bet.  The program is menu-driven and requires no
    mathematical or computer skills to operate.  As soon as you've entered
    at least 10 numbers, the program is ready to make predictions for you.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1407.TXT

{% raw %}
```
Disk No: 1407
Program Name:  SUPER LOTTO-MASTER version 1.1
PC-SIG version: 1

Those who believe that no lottery system is truly random will find a
friend in SUPER LOTTO-MASTER.

Not a random-number generator but rather a historically weighted system,
this program allows you to enter past winning numbers for whatever
lottery you are tracking.  It then computes the odds of the numbers
being picked again.  SUPER LOTTO handles three, four, five, six and
seven number games and prints its choices in a list that ranks best to
worst.  You can also add in your own lucky number with the
computer's---to hedge your bet.  The program is menu-driven and requires
no mathematical or computer skills to operate.  As soon as you've
entered at least ten numbers, the program is ready to make predictions
for you.

Synopsis:  Based on past winning numbers, generates best lottery number
picks.

Usage:  Lottery/Data Base.

Special Requirements:  None.

How to Start:  Type GO (press enter).

Suggested Registration:  $15.00

File Descriptions:

GO       BAT  Starts program.
LOGO          Graphics.
COLOR    PRO  Color program.
MENU     PRO  Menu program.
SHAREWAR PRO  Shareware module in program.
PROGBOOT EXE  Main program.
LOTTO34  PRO  LOTTO 34 routine.
LOTTOFIV DAT  Data file.
LOTTOFOU DAT  Data file.
LOTTOSEV DAT  Data file.
LOTTOSIX DAT  Data file.
LOTTOTHR DAT  Data file.
NUMBESIX DAT  Data file.
NUMBFIVE DAT  Data file.
NUMBFOUR DAT  Data file.
NUMSEVEN DAT  Data file.
NUMTHREE DAT  Data file.
LOTTO34  PRO  Routines for 5 and 6 and number picks.
LOTTO5   PRO  Routines for 5 and 6 and number picks.
LOTTO6   PRO  Routines for 5 and 6 and number picks.
LOTTO7   PRO  Routines for 5 and 6 and number picks.
SLMASTER DOC  Program documentation.

PC-SIG
1030D E Duane Avenue
Sunnyvale CA 94086
(408) 730-9291
(c) Copyright 1989 PC-SIG, Inc.

```
{% endraw %}

## SLMASTER.DOC

{% raw %}
```























                               SUPER LOTTO-MASTER

                                  Version 1.1

                A Lottery Number Database and Analytical Program

                                      from

                                Morris L. Bower

                                 P. O. Box 715

                           Parkersburg, WV 26102-0715

                       Copyright (C) 1988 Morris L. Bower

                             (All Rights Reserved)
































              WHAT IS SUPER LOTTO-MASTER?
              ---------------------------
              Super Lotto-Master is a user-friendly database that
              is designed to read and analyze combinations of
              numbers input by the user.  The program is com-
              pletely menu-driven so that no special computing
              skills are necessary to use the program.


              WHAT DOES IT DO?
              ----------------
              The program starts with blank data information.
              The user inputs past winning lottery numbers drawn
              from their state and/or multi-state lotteries.
              After ten entries are installed, the program is
              ready to go to work.  At the press of a button the
              program will read and analyze the entries and print
              out one combination (two combinations in the case
              of three and four numbers) of the numbers "most
              likely" to be drawn again.  By the way, this pro-
              gram is not generating numbers "at random".  If you
              run the "automatic calculation" more than once, you
              will see that exactly the same numbers come up
              until you make additional entries.

              People who "wheel" numbers may combine part of the
              computer pick with their own favorite numbers.  Our
              pick is most important from left to right, that is,
              if the computer printed 01 09 15 26 31 37, then 01
              would be the most important, 09 next, etc.


              REGISTERING SUPER LOTTO-MASTER!
              -------------------------------
              Super Lotto-Master is a Shareware product.  It is
              not public domain software.  We have offered this
              program to you on a trial basis either free from a
              friend, or for a nominal copying charge from one of
              our authorized dealers.

              The program has taken many hours of work and re-
              search, so naturally we expect anyone using or
              planning to use this software on a regular basis to
              register with the copyright owner.  This may be
              done by sending a check or money order in an amount
              you feel the program is worth to you, but in any
              case do not send more than $15.00 to:

                                Morris L. Bower
                                 P. O. Box 715
                           Parkersburg, WV 26102-0715

              Registered users will be put on our mailing list
              for information on updates and improvements to this



                                       -2-








              program, plus will be offered special discounts for
              software we develop in the future.


              PRODUCT SUPPORT
              ---------------
              Registered users may send unlimited questions
              regarding our programs to the P. O. Box address
              above.  Please be sure to include a stamped, self-
              addressed envelope with each inquiry.


              WARRANTY
              --------
              Super Lotto-Master is provided AS IS without any
              warrany, either expressed or implied, including but
              not limited to fitness for a particular purpose.


              LICENSE TERMS
              -------------
              Super Lotto-Master is licensed specifically for
              evaluation use by all IBM PC/XT/AT and compatible
              owners and operators.  This program may be freely
              copied by individuals, groups, clubs, businesses,
              computer disk vendors and similar distributors,
              and BBS operators for transmission to others for
              evaluation.  No charge may be made for this pro-
              gram except a nominal copying, postage and/or
              handling fee.


              CREDITS
              -------
              Special thanks to my good friends Bob Kuhl and
              Chris Ranalla who offered encouragement and helped
              field test the program, and to Gary Boetticher who
              helped me work out some next-to-impossible
              formulas.


              DISTRIBUTION FILES
              ------------------
              The following files are included in the Shareware
              distribution package:

                                  LOTTO34.PRO
                                  LOTTO5.PRO
                                  LOTTO6.PRO
                                  LOTTO7.PRO
                                  MENU.PRO
                                  SHAREWAR.PRO
                                  NUMTHREE.DAT
                                  LOTTOTHR.DAT



                                       -3-








                                  NUMBFOUR.DAT
                                  LOTTOFOU.DAT
                                  NUMBFIVE.DAT
                                  LOTTOFIV.DAT
                                  NUMBESIX.DAT
                                  LOTTOSIX.DAT
                                  NUMSEVEN.DAT
                                  LOTTOSEV.DAT
                                  PROGBOOT.EXE
                                  COLOR.PRO
                                  SLMASTER.DOC
                                  GO.(BAT).EXE


              USING THE PROGRAM
              -----------------
              The very first thing you want to do is make a back-
              up copy of this disk and put the original away. Use
              the copy as your work disk.  (See your DOS manual
              if you need help making a copy of this disk).

              Boot up your computer and place the program disk in
              the A drive.  At the A> type:

                                       GO

              If you are using a color computer answer (y)es to
              the question then please carefully read the next
              two screens.  Answer (y)es to the second screen.


              MAIN MENU
              ---------
              The main menu allows you to select the program you
              wish to work with, 3, 4, 5, 6 or 7 digit numbers.


              3-DIGIT AND 4-DIGIT NUMBERS
              ---------------------------
              The three and four digit numbers are grouped into
              the same program, so you will work from a sub-menu
              when you enter this database.  The numbers entered
              into this program should be entered in the EXACT
              ORDER as they were drawn in the lottery, that is,
              if the 3-digit number drawn was 9-3-6, enter it as
              is.  DO NOT ENTER it numerically as 3-6-9.  The
              reason for this is that the program analyzes each
              digit as a separate number from 0 to 9 because each
              digit is drawn from a separate group of numbers.

              There must be a minimum ten entries before the
              program will do "automatic calculation".

              The program will print out two sets of numbers.



                                       -4-








              The first set are the numbers that have hit the
              greatest number of times, the second set the least
              number of times.  If you compare our numbers to
              future winning numbers, you can decide which set
              may be more important and the way you wish to use
              the information.

              Since the 3 and 4-digit numbers are drawn from
              separate groups of ten, it is possible that
              duplicate numbers may appear at times.  Also, after
              there are many numbers in a database, it is
              possible that on a DAY-TO-DAY basis, the numbers
              may not vary much or sometimes even change at all.
              It is for this reason that we suggest you limit the
              amount of entries in any given database.  We might
              suggest fifty or even less.  For instance, when you
              are ready to make the 51st entry you might call up
              entry #1 and select "Change Entry".  The next day
              you would call up #2, etc.  Don't be afraid to
              experiment.  If you mess a program to where it is
              irrepairable, just make another copy of the
              original disk which you have safely stored away.

              If you wish to delete a complete database, exit to
              DOS and delete the two .DAT files with the written
              number.  For instance, to delete the 3-digit number
              database you would delete the NUMTHREE.DAT file and
              the LOTTOTHR.DAT file.  The program will automati-
              cally create new files.

              DO NOT UNDER ANY CIRCUMSTANCES delete files ending
              in .PRO as these are (PRO)gram files and have to be
              present for the program to operate.

              If you accidently enter "Add an entry" but are
              instead trying to exit the screen, simply enter the
              number of the last entry (shown at top of screen)
              then answer (n)o to "do you want to change this
              number?".

              If you accidently enter the wrong numbers, simply
              continue that entry, answer (y)es to "do you have
              more entries?", then re-enter the last entry number
              (shown at top of screen).  Answer (y) to "do you
              want to change this number?" and enter the correct
              numbers.

              Once you have entered just a few numbers you will
              see how really simple the program is to operate.


              5-DIGIT, 6-DIGIT AND 7-DIGIT NUMBERS
              ------------------------------------
              Generally, all the rules above apply also to the



                                       -5-








              five, six and seven digit numbers except for the
              following:

              Entries do not have to be entered in the same order
              in which they were drawn in the lottery.  For in-
              stance, the 6-digit number 34-17-05-02-28-08 does
              not have to be entered as it appears.  It could for
              example be entered 2-8-28-17-34-5.  In these
              programs the numbers are analyzed as a group and
              not individually.  However, when the program prints
              out what it considers the best number, the number
              to the far left is most important, then the next
              number to the right, etc.

              When entering single digit numbers there is no need
              to put a zero in front of the digit (see example
              entered above) unless you are just use to entering
              numbers like that and wish to do so.  The computer
              will ignore a zero in front of a number.


              WHEN YOU WIN
              ------------
              We would like to hear from you when you win, no
              matter how large or small.  Basically we would like
              to know which lottery, how many numbers you had
              entered in the database, type of win (straight,
              box, etc.), amount of win, and how many times you
              had used this program before hitting.  We would
              like to use the information to improve our program
              for future updates and pass the information along
              to our registered users.  Anyone sending a signed
              story, witnessed by at least two people, with all
              details of the win will receive a free copy of the
              latest version of Super Lotto-Master.


              WHERE TO WRITE
              --------------
              Send all inquiries to:

                                MORRIS L. BOWER
                                   PO BOX 715
                           PARKERSBURG, WV 26102-0715

              All inquiries including a stamped, self-addressed
              envelope will be answered.  When writing be sure
              to tell us which version you are using.





                      -=* PLEASE REGISTER YOUR PROGRAM *=-



                                       -6-



```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1407

     Volume in drive A has no label
     Directory of A:\

    COLOR    PRO       485   9-18-88  10:12p
    FILE1407 TXT      1906   5-31-89   3:13p
    GO       BAT        46   9-18-88  10:08p
    LOGO              1405   9-17-88   9:57a
    LOTTO34  PRO     22514   9-24-88  10:20p
    LOTTO5   PRO     35217   9-18-88  10:23p
    LOTTO6   PRO     41764   9-18-88  10:25p
    LOTTO7   PRO     36721   9-18-88  10:27p
    LOTTOFIV DAT         2   9-18-88  10:24p
    LOTTOFOU DAT         2   9-18-88  10:21p
    LOTTOSEV DAT         2   9-18-88  10:28p
    LOTTOSIX DAT         2   9-18-88  10:26p
    LOTTOTHR DAT         2   9-18-88  10:16p
    MENU     PRO      3675   9-18-88  10:13p
    NUMBESIX DAT         2   9-18-88  10:26p
    NUMBFIVE DAT         2   9-18-88  10:24p
    NUMBFOUR DAT         2   9-18-88  10:22p
    NUMSEVEN DAT         2   9-18-88  10:28p
    NUMTHREE DAT         2   9-18-88  10:17p
    PROGBOOT EXE     69840   6-27-85   1:00p
    SHAREWAR PRO      4321   9-18-88  10:14p
    SLMASTER DOC     13348   9-18-88   9:44p
           22 file(s)     231262 bytes
                           74752 bytes free
