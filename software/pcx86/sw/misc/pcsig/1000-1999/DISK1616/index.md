---
layout: page
title: "PC-SIG Diskette Library (Disk #1616)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1616/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1616"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "LOTTO PROPHECY"

    LOTTO PROPHECY is a new and interesting lottery prediction program.  It
    contains two prediction systems which allow you to use the program with
    any lottery that has a "pick 6" format.  LOTTO PROPHECY also contains a
    wheeling system, which lets you choose a large group of numbers in any
    lottery game, play a special set of combinations of those numbers, and
    get a minimum win guarantee.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1616.TXT

{% raw %}
```
Disk No: 1616                                                           
Disk Title: Lotto Prophecy                                              
PC-SIG Version: S3.0                                                    
                                                                        
Program Title: Lotto Prophecy                                           
Author Version: 3.0                                                     
Author Registration: $15.00                                             
Special Requirements: 512K RAM.                                         
                                                                        
LOTTO PROPHECY is a new and interesting lottery prediction program.  It 
contains two prediction systems which allow you to use the program with 
any lottery that has a "pick 6" format.  LOTTO PROPHECY also contains a 
wheeling system, which lets you choose a large group of numbers in any  
lottery game, play a special set of combinations of those numbers, and  
get a minimum win guarantee.                                            
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## PICK30.DOC

{% raw %}
```
                               Lotto Prophecy 3.0
                    Copyright (C) 1990 By Charles P. Staats
                              All rights reserved








                                 Contents



      INTRODUCTION                                                      1
         PREDICTION METHODS  . . . . . . . . . . . . . . . . . . . . .  2
            Method #1  . . . . . . . . . . . . . . . . . . . . . . . .  2
            Method #2  . . . . . . . . . . . . . . . . . . . . . . . .  2
         COMPUWHEEL WHEEL SYSTEMS  . . . . . . . . . . . . . . . . . .  3
            What is ComPuWheels? . . . . . . . . . . . . . . . . . . .  3
            ComPuWheel Wheel Systems, By Charles P. Staats . . . . . .  4
            Wheel System Odds  . . . . . . . . . . . . . . . . . . . .  5
            Wheel System Odds Cont.  . . . . . . . . . . . . . . . . .  6
         SYSTEM REQUIREMENTS . . . . . . . . . . . . . . . . . . . . .  7
            Installing . . . . . . . . . . . . . . . . . . . . . . . .  7
         TUTORIAL  . . . . . . . . . . . . . . . . . . . . . . . . . .  8
         1  MAIN MENU FEATURES . . . . . . . . . . . . . . . . . . . .  9
            1.1  ADD new game records  . . . . . . . . . . . . . . . .  9
            1.2  ANALYZE database numbers  . . . . . . . . . . . . . .  9
            1.3  CHANGE database file  . . . . . . . . . . . . . . . .  9
            1.4  CREATE new database file  . . . . . . . . . . . . . .  9
            1.5  EDIT game records . . . . . . . . . . . . . . . . . .  9
            1.6  PRINT existing game records . . . . . . . . . . . . . 10
            1.7  VIEW existing game records  . . . . . . . . . . . . . 10
         2  PREDICTION MENU  . . . . . . . . . . . . . . . . . . . . . 11
            2.1  Prediction Method #1  . . . . . . . . . . . . . . . . 11
            2.2  Prediction Method #2  . . . . . . . . . . . . . . . . 12
               2.2.1  Manual Selection of Previous Games . . . . . . . 12
               2.2.2  Change Previous Game Block Size  . . . . . . . . 12
            2.3  ComPuWheels Menu  . . . . . . . . . . . . . . . . . . 13
            2.4  Wheel Files, Auto Scan for Winning Games  . . . . . . 13
            2.5  ComBine ComPuWheel Files  . . . . . . . . . . . . . . 13
         3  COPYRIGHT  . . . . . . . . . . . . . . . . . . . . . . . . 14
            3.1  Copyright, Restricted Permission  . . . . . . . . . . 14
            3.2  Questions and Help  . . . . . . . . . . . . . . . . . 14
















                                       i



                               Lotto Prophecy 3.0
                    Copyright (C) 1990 By Charles P. Staats
                              All rights reserved









                                 INTRODUCTION


      You  now have a copy of the newest version of the Lotto Prophecy series.
 The  Lotto  Prophecy  series has been in development and testing for over two
 years. Created and tested in California using the lotto 6/49+Bonus. Which the
 odds  of  predicting  the winning numbers equals 1:13,983,816. The system has
 proved itself time and time again, in one of the hardest lotteries to predict
 winning numbers. If it can work  in  a  6/49+Bonus lotto, it should work very
 well in lotteries with lower odds.
      Lotto Prophecy, written in Dbase, and compiled with  Clipper.  What does
 this mean to  you?  First, Dbase is one of the best in keeping track of large
 database files. Also using the  power  of  Dbase  is  one of the best ways to
 predict trends.
      There are two complete and  different prediction systems. Method #1 uses
 REPEAT RATIO, PERCENTAGE, AVERAGE,  FREQUENCY  ANALYSIS,  PAIRS,  TRIPLES and
 LONG SHOT. Method #2 employ numbers from PREVIOUS GAMES, using  variable game
 blocks from 3 through 5 games. The two different methods can be used with any
 pick-6 lotto game with or without bonus or substitute number.
      Also  there   is  a  complete  wheeling  system  (Wheeling  systems  are
 scientific, mathematical tools). The wheeling system allows you  to  choose a
 large  group of numbers in any lotto game (from Lotto Prophecy, or your own).
 Then play a special set of  combinations  of  those numbers and get a minimum
 win guarantee. Lotto Prophecy  can wheel from 8 through 29 numbers.


















         Clipper and Nantucket are trademarks of Nantucket Corporation








                                     - 1 -


                               Lotto Prophecy 3.0
                    Copyright (C) 1990 By Charles P. Staats
                              All rights reserved



 PREDICTION METHODS


 Method #1

      How often have you wondered when the last drawing winners were  going to
 hit again in the next game? REPEAT RATIO will make this decision for you. The
 average  Repeat  Ratio is 1:6. This means that for every six  single  hits  a
 number has, it will have one double hit (two wins in a row). According to the
 database,  a  number  with  a  Repeat  Ratio of 1:5, or lower, has  the  best
 probability of winning two in a row.
      PERCENTAGE is  a prediction method based on the mathematical probability
 on the percentage of times a number has hit. Usually a  number  that  has hit
 between 13 through 20  percent  has  the  highest probability of consistently
 winning.
      AVERAGING and FREQUENCY Analysis is two types of  number  analysis using
 total winners,  and  total  games  played.  Using  this type of examination a
 pattern of winning often can be plotted.
      Any predicted numbers (using any  of the other prediction methods), also
 bring other numbers into the prediction field using PERCENTAGE on PAIRS.
      How  does  PERCENTAGE  on  PAIRS  work?  If  number 5 comes up into  the
 prediction field, and Percentage on Pairs equals 15%. Lotto  Prophecy    will
 check the number before and after the predicted number, 4, and 6. If either 4
 or 6 has some hits with number 5 of 15% or more. Those numbers will  be added
 to the prediction field.
      TRIPLES operate much  in  the  same  way  as does PAIRS. For example, If
 number 10 comes into  the  prediction field, and Percentage on TRIPLES equals
 5%. Lotto Prophecy    will  check  the  number before and after the predicted
 number, 8, 9 and 11, 12. If either 8, 9  or  11, 12 has some hits with number
 10 of 5% or more. Those numbers will be added to the prediction field.
      LONG  SHOT  was  design  to  fill  a  wheel after a prediction run.  For
 example,  you  did  a prediction run to pick 28 numbers. After the prediction
 run, you find  Lotto  Prophecy  picks only 20 numbers or so. You now have the
 option  to fill the rest of the wheel with numbers that have longest odds  of
 being picked.

 Method #2

      Using  PREVIOUS  GAMES,  a very popular one for selecting lotto numbers.
 What Lotto Prophecy  does is instead of using single numbers for predictions,
 it  uses  blocks  of games. Lotto Prophecy  employs variable game blocks. The
 size of the game blocks can be from 3 through 5 games. The theory  is  that a
 large percentage of winning numbers do, come from a catalog of recently drawn
 numbers.
      For  example,  if  the game block size equals 5 games, the database file
 has 100 games in it. You have chosen Previous Games 1-5, the program will use
 lotto  games  #99,  #98, #97, #96, #95. Filter out any duplicate numbers, and
 wheel the remaining numbers.  This  remains true for through out the Previous
 Games options, the only difference is the counting back from  the  end of the
 database file.
      You  have  several  options  when  using this portion of the  prediction
 system. AUTO SELECTION designed to scan  your  database and pick the top five
 Previous Games for you  (250  scan limit). MANUAL SELECTION can pick Previous
 Games by entering a game number (unlimited).



                                     - 2 -


                               Lotto Prophecy 3.0
                    Copyright (C) 1990 By Charles P. Staats
                              All rights reserved



 COMPUWHEEL WHEEL SYSTEMS


 What is ComPuWheels?

      ComPuWheels  are  computer  generated  wheels systems. Also, ComPuWheels
 perfectly balanced, and ComPuWheels always brings in the prize guarantee.
      I  always  had  the desire designing  my  own  wheel  systems  using  my
 computer. After months of work, I discovered the  secret,  and  then  wrote a
 program to develop ComPuWheels.  Being  I live in California, the first wheel
 was a 49  number  wheel.  After  the  wheels  were  developed, I then wrote a
 program to test the 49 number  wheel.  By  checking the past winning games of
 the  California  Lotto  with the wheel to see what the  results  would  be.If
 someone would have used the 49 number wheel on 3-28-87, they would have had a
 5  number  plus  bonus number winner. This paid out over 1.1 million dollars.
 There were also many 5 winners, 4 winners, and hundreds  of  3 winners during
 the testing of the 49 number wheel using the California database.








































                                     - 3 -


                               Lotto Prophecy 3.0
                    Copyright (C) 1990 By Charles P. Staats
                              All rights reserved



 ComPuWheel Wheel Systems, By Charles P. Staats

                              8  Numbers 3  Games
         1 game with 4 winners are guaranteed, if 6 numbers are picked
                              9  Numbers 4  Games
         1 game with 4 winners are guaranteed, if 6 numbers are picked
                              10 Numbers 5  Games
         1 game with 4 winners are guaranteed, if 6 numbers are picked
                              11 Numbers 11 Games
         1 game with 4 winners are guaranteed, if 6 numbers are picked
                              12 Numbers 10 Games
         1 game with 4 winners are guaranteed, if 6 numbers are picked
                              13 Numbers 23 Games
         1 game with 4 winners are guaranteed, if 6 numbers are picked
                              14 Numbers 23 Games
         1 game with 4 winners are guaranteed, if 6 numbers are picked
                              15 Numbers 31 Games
         1 game with 4 winners are guaranteed, if 6 numbers are picked
                              16 Numbers 9  Games
         1 game with 3 winners are guaranteed, if 6 numbers are picked
                              17 Numbers 14 Games
         1 game with 3 winners are guaranteed, if 6 numbers are picked
                              18 Numbers 20 Games
         1 game with 3 winners are guaranteed, if 6 numbers are picked
                              19 Numbers 28 Games
         1 game with 3 winners are guaranteed, if 6 numbers are picked
                              20 Numbers 30 Games
         1 game with 3 winners are guaranteed, if 6 numbers are picked
                              21 Numbers 26 Games
         1 game with 3 winners are guaranteed, if 6 numbers are picked
                              22 Numbers 77 Games
         1 game with 3 winners are guaranteed, if 6 numbers are picked
                              23 Numbers 77 Games
         1 game with 3 winners are guaranteed, if 6 numbers are picked
                              24 Numbers 74 Games
         1 game with 3 winners are guaranteed, if 6 numbers are picked
                              25 Numbers 78 Games
         1 game with 3 winners are guaranteed, if 6 numbers are picked
                              26 Numbers 80 Games
         1 game with 3 winners are guaranteed, if 6 numbers are picked
                              27 Numbers 86 Games
         1 game with 3 winners are guaranteed, if 6 numbers are picked
                              28 Numbers 91 Games
         1 game with 3 winners are guaranteed, if 6 numbers are picked
                              29 Numbers 94 Games
         1 game with 3 winners are guaranteed, if 6 numbers are picked











                                     - 4 -


                               Lotto Prophecy 3.0
                    Copyright (C) 1990 By Charles P. Staats
                              All rights reserved



 Wheel System Odds

      The numbers below represents n in the odds formula 1:n.
 For example in the game 6/49: 499,422 means you will match
 all six winning numbers approximately once in 499,422
 games if using an unabridged system.


           8         9        10       11       12       13
         Wheel     Wheel    Wheel    Wheel    Wheel    Wheel
         System    System   System   System   System   System
 -------------------------------------------------------------
 Lotto
 6/30 | 21,206  | 7,096   | 2,828  | 1,285  |  643   |  346  |
 -------------------------------------------------------------
 6/36 | 69,564  | 23,188  | 9,275  | 4,216  | 2,108  | 1,135 |
 -------------------------------------------------------------
 6/38 | 98,596  | 32,865  | 13,146 | 5,976  | 2,988  | 1,609 |
 -------------------------------------------------------------
 6/39 | 116,522 | 38,841  | 15,536 | 7,062  | 3,531  | 1,901 |
 -------------------------------------------------------------
 6/40 | 137,085 | 45,695  | 18,278 | 8,308  | 4,154  | 2,237 |
 -------------------------------------------------------------
 6/42 | 187,350 | 62,450  | 24,979 | 11,355 | 5,677  | 3,057 |
 -------------------------------------------------------------
 6/44 | 252,109 | 84,036  | 33,615 | 15,279 | 7,640  | 4,114 |
 -------------------------------------------------------------
 6/45 | 290,895 | 96,965  | 38,786 | 17,630 | 8,815  | 4,747 |
 -------------------------------------------------------------
 6/46 | 334,529 | 111,151 | 44,604 | 20,275 | 10,137 | 5,459 |
 -------------------------------------------------------------
 6/48 | 438,268 | 146,089 | 58,436 | 26,562 | 13,281 | 7,151 |
 -------------------------------------------------------------
 6/49 | 499,422 | 166,474 | 66,590 | 30,268 | 15,134 | 8,149 |























                                     - 5 -


                               Lotto Prophecy 3.0
                    Copyright (C) 1990 By Charles P. Staats
                              All rights reserved



 Wheel System Odds Cont.

           14        15        16       17       18
         Wheel     Wheel     Wheel    Wheel    Wheel
         System    System    System   System   System
 ------------------------------------------------------
 Lotto
 6/30 |   198   |   119   |   74   |   48   |   32   |
 -----------------------------------------------------
 6/36 |   649   |   389   |   243  |   157  |   105  |
 -----------------------------------------------------
 6/38 |   919   |   552   |   345  |   223  |   149  |
 -----------------------------------------------------
 6/39 |  1,086  |   652   |   407  |   264  |   176  |
 -----------------------------------------------------
 6/40 |  1,278  |   767   |   479  |   310  |   207  |
 -----------------------------------------------------
 6/42 |  1,747  |  1,048  |   655  |   424  |   283  |
 -----------------------------------------------------
 6/44 |  2,351  |  1,410  |   882  |   570  |   380  |
 -----------------------------------------------------
 6/45 |  1,712  |  1,627  |  1,017 |   658  |   439  |
 -----------------------------------------------------
 6/46 |  3,119  |  1,872  |  1,170 |   757  |   505  |
 -----------------------------------------------------
 6/48 |  4,086  |  2,452  |  1,532 |   992  |   661  |
 -----------------------------------------------------
 6/49 |  4,657  |  2,794  |  1,746 |  1,130 |   753  |





























                                     - 6 -


                               Lotto Prophecy 3.0
                    Copyright (C) 1990 By Charles P. Staats
                              All rights reserved



 SYSTEM REQUIREMENTS


     -  IBM PC, XT, AT and 100% IBM PC compatibles

     -  MS-DOS OR PC-DOS version 2.0 or later operating system

     -  640k bytes of RAM (approx, 512k bytes free)

     -  One floppy drive, or hard-disk. Lotto Prophecy also needs
        100 bytes of disk space during execution.

     -  A monochrome or color monitor with 80 column display.

     -  Printer  is optional. All predictions, and  wheels  output  to  either
        screen, printer, or file.

 Installing

      Lotto Prophecy is very easy to install. The first  time  Lotto  Prophecy
 executes, you will define your monitor type, color or mono. Then  a directory
 of  all database files are shown. Enter the name of the database you like  to
 use, or press  ENTER  for  the  default.  The default file (Lotto.dbf) is the
 California database, but this can be any database you like.
      Every time you exit Lotto Prophecy, the program will leave a file on you
 disk  called pick30.sys. This file is a memory dump of all the variables used
 during  execution,  and the last database file  used.  The  next  time  Lotto
 Prophecy  is  executed,  the  program  will remember all  program  variables,
 database file, and monitor type.
      If  you like to install Lotto Prophecy for  a  different  monitor  type,
 erase the file pick30.sys and execute Lotto Prophecy.


























                                     - 7 -


                               Lotto Prophecy 3.0
                    Copyright (C) 1990 By Charles P. Staats
                              All rights reserved



 TUTORIAL


      Lotto Prophecy uses windows and menus to drive the  program.  All  menus
 can  accept either letters as input, or by moving a menu highlight bar. Using
 the escape key can move the program back to the previous menu, or to dos from
 the main menu. All inputs into  the  program being data, options, defaults is
 also highlighted.
      Before getting started you must have or get the winning numbers for your
 lotto. If you can, get all the  winning  numbers  for  your  lotto  since the
 beginning of your  lotto.  The  more  data  you have, the more accurate Lotto
 Prophecy will predict. Contact your local lotto office for more details about
 getting the winning numbers.
      The first time you  execute  Lotto Prophecy, it will load the California
 database  (lotto.dbf). If you would like to create a new file, use the option
 from the main menu (CREATE new  database  file).  Note: you must add at least
 one game to the new data file for  the  program  to  continue. After the file
 creation, you are  put into the ADD new game records option of the main menu.
 From there you can add as many games as you would like.
      Lotto Prophecy uses a higher speed input system. For  example,  you  are
 adding lotto numbers to your data file. You have entered  the number six, the
 highlighted area expects a two digit number. Thus, you would need to push the
 enter key to move to the next highlight area. Or, you could  enter a zero and
 then the number six. This will  move  the  cursor to the next highlight area.
 Using  this  method  on  single  digits numbers, or characters, can  speed-up
 inputting  data.  This  method holds true throughout Lotto Prophecy. You only
 need to push the enter key if the highlight area isn't fulfilled.






























                                     - 8 -


                               Lotto Prophecy 3.0
                    Copyright (C) 1990 By Charles P. Staats
                              All rights reserved



 1  MAIN MENU FEATURES


 1.1  ADD new game records

      Adds  new  lotto  game numbers to the current lotto data file. Input the
 date    of the game, then the numbers, up to seven. This can be  six  numbers
 plus a bonus or alternate number. If you don't use all the number inputs, you
 can leave them blank.
      After you have  entered  you  numbers,  Lotto Prophecy uses an Auto Scan
 feature looking for Wheel Files. If it finds  any  Wheel  Files,  all winning
 games in each file will be display.

 1.2  ANALYZE database numbers

      Before  you can start doing any analyzing, you  must  specify  the  game
 range to scan. Lotto Prophecy will  show  the  game range that you can choose
 from. You can scan anywhere within the game range. All analyzing  totals will
 be from the game range chosen.
      You are given  a choice to enter a number from 1 through the high number
 of  your  lotto game. Or, you can enter the letter A, to scan all  the  lotto
 numbers. With  the  letter  A  option, you also can printout all data for the
 lotto numbers.

 1.3  CHANGE database file

      If you are using multiple lotto data files, you can  use  this option to
 change to other files. A list of all data files on the program root directory
 is displayed. You can type in the file name of choice, or push enter, for the
 default file. It's recommended that all data files be retained in the program
 root directory.

 1.4  CREATE new database file

      You must add at least  one game to a new data file for Lotto Prophecy to
 continue. You also have to input the highest  number  your  lotto  plays. For
 example, in California, the lotto game  is  a  6/49. This means that the game
 plays with six numbers, with the highest number being 49. Incorrect  input of
 this number could cause Lotto Prophecy not to scan to the proper number.
      After  the  file  creation, you are put into the ADD  new  game  records
 option  of  the main menu. From here you can add as many games as  you  would
 like.

 1.5  EDIT game records

      The worse thing that can happen  is  to input the wrong winning numbers.
 If after inputting data, you discover an error.  You  input  the  game number
 (record number) that has an  error. You then will see a  display of that game
 on the screen with all data contained in that game. Using the arrow keys, you
 can  edit the entire game record. When done, using the key F10 will save  the
 game record.






                                     - 9 -


                               Lotto Prophecy 3.0
                    Copyright (C) 1990 By Charles P. Staats
                              All rights reserved



 1.6  PRINT existing game records

      If you  have  a  printer,  you can printout all the games in the current
 database. Anytime during the printout, pushing the ESCape key will abort this
 function.

 1.7  VIEW existing game records

      This is basically the same as print existing games. Except the output is
 to the screen, not the printer.  Also  using  the ESCape key, will abort this
 function.














































                                    - 10 -


                               Lotto Prophecy 3.0
                    Copyright (C) 1990 By Charles P. Staats
                              All rights reserved



 2  PREDICTION MENU


 2.1  Prediction Method #1

      This  method  is the most powerful, and  has  more  options  to  predict
 numbers. Number analysis in Method #1 can be user adjusted.
      The  first  thing you may want to do, decide how many  numbers  you  are
 going  to play. You can do this by going to the ComPuWheels Menu and  picking
 out how many numbers and total plays you are going to predict. After you have
 decided how many numbers you  are  going  to  play,  you are ready to do some
 predictions.
      Before you can start doing any predictions, you must  specify  the  game
 range  to scan. Lotto Prophecy  will show the game range that you can  choose
 from. You can scan anywhere within the game range.
      Now, lets predict some winning  lotto  numbers.  Start  doing prediction
 runs using the default settings in Lotto Prophecy.

           Enter the Min. and Max. Game for this scan, from 1 - ????
                Enter # for spread on Predictions, default (2)
                     Enter # for Repeat Ratio, default (5)
             Enter # for Percentage on Predictions, default (18%)
                Enter # for Percentage on Pairs, default (15%)
                Enter # for Percentage on Triples, default (5%)

      To answer any questions  about  SPREAD on PREDICTIONS, This is a setting
 to  adjust  the spread on when a number will hit on a game. For  example,  if
 spread equals zero, only  numbers that hit exactly on the predicted game will
 be put into the prediction field. If spread equals 1, numbers selected to hit
 on the predicted game, and numbers that hit plus or minus  one  game  will be
 put into the prediction field.
      Also if spread equals 2, numbers selected to hit on the  predicted game,
 and numbers that hit plus or minus two games, will be put into the prediction
 field.
      For the first  few  prediction  runs,  leave  PERCENTAGE  on  PAIRS, and
 PERCENTAGE  on  TRIPLES  set at its defaults. I found the defaults setting to
 work very well for  prediction  processing.  Setting  PERCENTAGE on PAIRS, or
 PERCENTAGE  on  TRIPLES  higher, will bring fewer numbers into the prediction
 field.
      ONLY predicted numbers will  do  PERCENTAGE  on  PAIRS, or PERCENTAGE on
 TRIPLES processing. PERCENTAGE  on  PAIRS, or PERCENTAGE on TRIPLES predicted
 number will not do PERCENTAGE on PAIRS, or PERCENTAGE on TRIPLES processing.
      The cliche, do prediction runs, and  try  to get your total picks around
 about three quarters  of  your  total  numbers  that you decided to play. The
 easiest way to  do  this  is  by  changing the setting on PERCENTAGE (higher,
 fewer numbers, lower,  more  numbers).  Then  fill the rest of the prediction
 field with LONG SHOTS.
      Also, if you notice that Lotto Prophecy  starts counting backwards, this
 is normal.








                                    - 11 -


                               Lotto Prophecy 3.0
                    Copyright (C) 1990 By Charles P. Staats
                              All rights reserved



 2.2  Prediction Method #2

      Before you start using Method #2, check, or set, the  scan  size of game
 blocks. This can be done from the Method #2 main menu.  The  game  block size
 can be set from 3 through 5 games. In the examples below, Previous Game block
 size equals 5 games.
      AUTO SELECTION will scan your database and pick the  top  five  Previous
 Games for you. To start, you enter a starting game number, lets say a 1. Then
 you  enter a 100 for the ending game number. The scan would be from  Previous
 Games 1-5 through Previous Games 96-100 (game block size set at 5 games). You
 can scan the database from any  starting  game, through any ending game. AUTO
 SELECTION can decide the beginning and ending games to scan for you. Just use
 the defaults that Lotto Prophecy  picks for you.
      If you have a 200 game  database,  and  you scan from Previous Games 1-5
 through Previous Games 96-100. The scan would be for a total of 100 games for
 all  computations.  Or,  if  the  scan  was  from  Previous Games 1-5 through
 Previous Games 46-50,  the  scan  and  computations  would  cover  150 games.
 Smaller scans, equals, higher totals, and higher averages.
      There are some  limits.  First,  MAXIMUM  scan size limited to 250 Games
 from  starting to ending games. Also the larger the scan (from start to end),
 the total winners, and average winners may be lower (unless  you  have a very
 large database).
      Using AUTO SELECTION can take some time to complete.  Depending  on  the
 size of the database, it could take more then 30 minutes.  A  disk  cache, or
 Ramdisk can increase speed.
      After the auto scan you then have a choice to wheel part of, or all five
 Previous  Games  if  you  like.  During  the auto scan you can see  the  data
 calculate, and the top five Previous games sort.

 2.2.1  Manual Selection of Previous Games

      The second half of Previous Games is the MANUAL SELECTION. You  can pull
 games in from the end of the database, or the  beginning.  It doesn't matter,
 pick a game number, and Lotto Prophecy  will pull in games from there.

 2.2.2  Change Previous Game Block Size

      The  default size of the game blocks is 5 games.  The  minimum size is
 3 games (up to 21 numbers), to a maximum of 5 games (up to 35  numbers). If
 you  use  this  option to change the game block size, pick this option from
 the  Method  #2  main  menu.  You then can enter a number from 3 through 5.
















                                    - 12 -


                               Lotto Prophecy 3.0
                    Copyright (C) 1990 By Charles P. Staats
                              All rights reserved



 2.3  ComPuWheels Menu

      If you like to wheel your own numbers, here's where you can do this. You
 can wheel from 8 to 29  numbers.  See  the ComPuWheel Systems section for the
 win guarantees. You have also a choice  to  send  output  to  the  screen, to
 printer, or file. This section also  uses  the higher speed input method (see
 tutorial).

 2.4  Wheel Files, Auto Scan for Winning Games

      Anywhere you have  access  to  the  wheels (Method #1, Method #2, Wheels
 Menu), you can save your wheels to a file. After the Lotto numbers are drawn,
 you can SCAN the Wheel Files for winning games.
      As you finish a Prediction run, or after inputting numbers into  a wheel
 at the wheeling  menu.  You  are  given    a  choice for your output (Screen,
 Printer, File). If an "F" for file output  is  entered.  Lotto  Prophecy will
 show a directory display of all files with the file extension DBF (*.DBF).
      Lotto  Prophecy  will then prompt you for  a  filename  using  the  file
 extension  DBF.  If  you don't enter a file extension, the file extension DBF
 will be added for you.
      There are two places you  can  Auto  Scan  for  Winning  games  in Lotto
 Prophecy. From ADD New Game Records (from main menu), or from Auto Scan Wheel
 Files (from prediction menu).
      When  you enter the winning numbers (in ADD  New  Game  Records),  Lotto
 Prophecy uses  an  Auto  Scan  feature looking for Wheel Files  with the file
 extension DBF. If it finds any  Wheel  Files,  all winning games in each file
 will be display.
      In  the Auto Scan Wheel Files section, if no wheel files are found using
 Auto Scan, Lotto Prophecy will prompt you for a filename. Then scan that file
 for winning games and display them.

 2.5  ComBine ComPuWheel Files

      This section  of  the  program  is  designed  to read all Lotto Prophecy
 ComPuWheel files. ComBine and  convert  the  ComPuWheel  files, and save them
 into a  Lotto  Prophecy    database file. You then can load this new database
 (into Lotto Prophecy), and do Predictions on your  Predictions.  Or, whatever
 else you like Lotto Prophecy  to do with this new and unique database file.
      You can do  predictions  on  your  predictions  to as many levels as you
 like. For example,  do  some  predictions  on your regular lotto database and
 save them into ComPuWheel files.  Execute ComBine, to convert your ComPuWheel
 files to a Lotto Prophecy   database  file.  Then do some more predictions on
 your  new database. Execute ComBine again to build  even  a  bigger  database
 file.













                                    - 13 -


                               Lotto Prophecy 3.0
                    Copyright (C) 1990 By Charles P. Staats
                              All rights reserved



 3  COPYRIGHT


 3.1  Copyright, Restricted Permission

      Lotto  Prophecy  3.0  is not public domain, and it is not free software.
 You are granted a limited license to try this product on  a  trial  basis (30
 days).    If  you like what you see, look for the file READ.ME. This file has
 the latest updates, and new powerful features of Lotto  Prophecy  Pro  (Would
 you like to play all the numbers in your PICK-6 lotto?).
      When  you  register  Lotto Prophecy 3.0 ($18.00), you will receive Lotto
 Prophecy Pro (with manual). You're trusted to either forward a payment to the
 author, or to discontinue use of the program.

                      Send check or money order for $18.00

                             To: Charles P. Staats
                                 P.O. Box 6514
                            Thousand Oaks, CA. 91359

 3.2  Questions and Help

      If you are NOT a registered user of Lotto Prophecy  please  do not leave
 any messages (E-MAIL), or write letters. If you are, send letters with a self
 addressed and stamped envelope. Or E-MAIL, to Compuserve user ID: 72747,2474.
 Because  of  my  limited  availability,  I  feel  it's  only fair, to support
 registered users only.

 Note: Most of the hardware and  software  names are trademarks or trade names
 of specific manufacturers.



























                                    - 14 -



```
{% endraw %}

## REGISTER.DOC

{% raw %}
```
                               Lotto  Prophecy 3.0
                     Copyright (C) 1990 By Charles P. Staats
                               All rights reserved


                                Registration Form


      Name:          ______________________________________

      Address:       ______________________________________

                     ______________________________________

      City:          ______________________________________

      State:         __________________________ Zip: ______

      Telephone:     ______________________________________

      Computer:      ______________________________________







      Preferred Disk Size:    3.5"(720k) ______   5.25"(360k) ______







                     Mail Completed Form with $18.00 to:


                              Charles P. Staats
                                P.O. Box 6514
                          Thousand Oaks, CA. 91359



















```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1616

     Volume in drive A has no label
     Directory of A:\

    PROPHECY ZIP    199787  10-04-90   8:44a
    FILE1616 TXT      1555  10-16-90  12:04p
    READ     ME       4556  10-02-90   7:23a
    GO       BAT        30  10-16-90   2:58p
            4 file(s)     205928 bytes
                          113664 bytes free
