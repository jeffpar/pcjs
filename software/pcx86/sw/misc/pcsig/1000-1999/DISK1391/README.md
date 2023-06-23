---
layout: page
title: "PC-SIG Diskette Library (Disk #1391)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1391/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1391"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "LOTTO-TRAX"

    LOTTO-TRAX is a menu-driven system which helps you analyze, compare,
    forecast, display, store and maintain all your lottery numbers and those
    numbers selected by up to three different games.  This package fits
    virtually every variation of lottery.  No matter how your state changes
    the rules, you can quickly adjust LOTTO-TRAX to match.  The system
    provides clear, on-disk documentation.  If you're serious about the
    lottery, LOTTO-TRAX will give you lots of insights about what is
    happening.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1391.TXT

{% raw %}
```
Disk No: 1391                                                           
Disk Title: Lotto-Trax                                                  
PC-SIG Version: S1.2                                                    
                                                                        
Program Title: Lotto-Trax                                               
Author Version: 1.71                                                    
Author Registration: $15.00                                             
Special Requirements: CGA.                                              
                                                                        
LOTTO-TRAX is a menu-driven system which helps you analyze, compare,    
forecast, display, store and maintain all your lottery numbers and those
numbers selected by up to three different games.  This package fits     
virtually every variation of lottery.  No matter how your state changes 
the rules, you can quickly adjust LOTTO-TRAX to match.  The system      
provides clear, on-disk documentation.  If you're serious about the     
lottery, LOTTO-TRAX will give you lots of insights about what is        
happening.                                                              
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## FILES.DOC

{% raw %}
```
Here is a definition of the programs on the LOTTO-TRAX disk:

NAME           DESCRIPTION
---------------------------------------------------------------
HELP.BAT       Help to view and print DOC files.

FIXES.DOC      A list of past upgrades.

FILES.DOC      This file.  

README.DOC     The LOTTO-TRAX manual.

AWIN.EXE       Archive old winning numbers.

BRUN40.EXE     Run time library.

COMBO.EXE      Determine pairs and combination of winning        
               numbers.

CWIN.EXE       Compare winning numbers to both temporary and     
               permanent playing numbers.

GLNUM.EXE      Generate random lottery numbers.

INSYS.EXE      Define/setup the lottery games.

LMAIN.EXE      The main lottery menu.

LOTTO.EXE      The logon display.

PLNUM.EXE      Maintain permanent playing numbers.

PROJ1.EXE      Fact sheet for winning numbers.

PROJ2.EXE      Fact sheet forecast winning numbers.

TLNUM.EXE      Store temporary playing numbers.

 
The following files are created and used.
----------------------------------------------------------------
FDAT           Contains the three game definitions.

F(game name)   A file prefixed with "F" means that this file     
               contains temporary playing numbers, ie. if the    
               games name is DAILY, FDAILY will contain the      
               temporary numbers the user entered.

P(game name)   Files prefixed with a "P" means that the file     
               contains permanent playing numbers.

A(game name)   The files prefixed with an "A" indicates that the
               file contains archived (old) playing numbers.

W(game name)   A "W" prefix means that the file contains the old
               winning lottery numbers.


```
{% endraw %}

## FIXES.DOC

{% raw %}
```
LOTTO-TRAX
                         Version 1.6              01/23/89

COMPARE TO WINNING NUMBERS:
Fixes a problem with archiving the winning number when comparing
to temporary and permanent numbers.  If there were no temporary
numbers, you could not use the ARCHIVE THE WINNING NUMBER option.

Now you can enter the winning number and archive it WHETHER OR
NOT THERE ARE ANY NUMBERS TO CHECK.

If there are no temporary numbers and no permanent numbers, you
will still get the "FILE EMPTY" message.  If either set of
numbers does exist, the compare will proceed normally.


                          Version 1.7              07-01-89
INITILIZATION:
Upon initilization, the game files will be cleared.  This will
prevent possible duplication of game files.


```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                    <<<<  Disk No 1391 LOTTO-TRAX  >>>>                  ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To start the program, type: LOTTO (press enter)                         ║
║                                                                         ║
║ To print documentation, type: COPY README.DOC PRN  (press enter)        ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## README.DOC

{% raw %}
```




                             LICENSE AGREEMENT

    (C)COPYRIGHT 1986 PAUL PLOSILA     

    FOX VALLEY SOFTWARE   -   grants you without charge, the right to
    reproduce,  distribute and use copies of this "shareware" version
    of LOTTO-TRAX software and documentation on the express condition
    that you do not receive any  payment,  commercial  benefit, other
    consideration  for  such  reproduction or distribution, or change
    this license agreement or copyright notice.

    The  rights  to  receive any such financial or other benefit, and 
    to  modify  the product or its components, are exclusively reser-
    ved by FOX VALLEY SOFTWARE.
  
    This  software  may  not  be reversed-engineered or disassembled,
    and  includes  certain trade secrets and confidential information
    of FOX VALLEY SOFTWARE.
    
    This product is licensed without any warranty of merchantability,
    fitness  of  particular  purpose,  performance, or otherwise; all
    warranties are disclaimed.  By using the LOTTO-TRAX product,  you
    agree that neither  FOX VALLEY SOFTWARE nor any of our employees,
    affiliates,  owners,  or  other related parties will be liable to
    you  or any third party for any use of (or inability to use) this
    software  or  for any damages whatsoever, even if we are apprised
    of possibility of such damages occurring.

    FOX VALLEY SOFTWARE
    12N277 Tina Trail
    Elgin, Il.  60121





                      (C) Copyright 1986 PAUL PLOSILA
                                                           
 
 
                                 LOTTO-TRAX 
                          Lottery tracking program 
 
 
 
                            WHAT IS LOTTO-TRAX? 
                            ------------------- 
 
         LOTTO-TRAX  is  "THE"  complete  lottery  tracking program for 
         SERIOUS  lottery  players.  It is an easy to use, menu driven, 
         integrated  system  which  provides  a  computerized method of 
         analyzing, comparing, forecasting, storing and maintaining all 
         your lottery numbers. 
 
 
 
                       WHAT LOTTO-TRAX CAN DO FOR YOU! 
                       ------------------------------- 
 
               .  Quickly  compares  your  lottery numbers against 
                  the  winning lottery number and indicates if you 
                  have a winning number! 
 
               .  Analyzes winning lottery numbers! 
 
               .  Forecasts winning lottery numbers! 
 
               .  Analyzes your lottery numbers! 
 
               .  Produces graphs to help you spot number trends! 
 
               .  Stores regularly played lottery numbers! 
 
               .  Produces lottery numbers when you need them! 
 
               .  Maintains and analyzes lottery numbers for three 
                  different lottery games! 
 
               .  Compiled with Microsoft Quickbasic Ver 4.0
                  (C)copyright 1982-1987 Microsoft Corp.



         Requirements: 
         IBM-PC (or Compatible), DOS 3.1 or greater, one disk drive. 
         CGA, no special graphics or printer requirements!

 
 
 
 
 
 
                                    CONTENTS 
 
 
 
                      TOPIC                              PAGE 
                   ------------------------------------------- 
 
 
                   BACKUP PROCEDURES                       I 
 
                   HELPFUL HINTS                          II 
 
                   QUICK REFERENCE                       III 
 
                   LOTTO-TRAX MENU                         1 
 
                   INITIALIZATION                          2 
 
                   GENERATING LOTTERY NUMBERS              3 
 
                   TEMPORARY PLAYING NUMBERS               4 
 
                   PERMANENT PLAYING NUMBERS               5 
 
                   COMPARE AGAINST DRAWING                 7 
 
                   PAIRS & OCCURRENCES                     9 
 
                   ARCHIVE OLD WINNING NUMBERS            12 
 
                   WINNING NUMBER FACTS & FORECAST        13 
 
                   REGISTRATION                           16



                                                                I               
                            BACK UP PROCEDURE     
         The  first  thing  you  want  to  do is make a working copy of 
         LOTTO-TRAX and store your original disk in a safe place. Put a 
         write protect tab on the original LOTTO-TRAX disk, and perform 
         the following steps: 
 
         1. Format a blank disk. 
 
         2. Put LOTTO-TRAX in drive "A" and type: DISKCOPY A: 
 
         3. Press <ENTER> and follow the screen instructions. 
            (The SOURCE disk is your original LOTTO-TRAX disk). 
            (The TARGET disk is your blank disk).                               
          4. When copying is complete, remove and store your LOTTO-TRAX         
             disk.  
         The blank disk now contains your working copy of LOTTO-TRAX. 


                             HARD DISK INSTALLATION

         To install LOTTO-TRAX on your hard disk you will want to make
         a new directory for LOTTO-TRAX and then copy the programs to
         the new directory.  To do this:
         
         1. Make a directory called LOTTO    (MD LOTTO).

         2. Go to the new directory          (CD\LOTTO).

         3. Put your write protected copy of LOTTO-TRAX in drive A.

         4. Copy LOTTO-TRAX from drive A to drive C by typing:
                                              (COPY A:*.* C:).

         5. When copying is complete, the system has been copied.





                               HELPFUL - HINTS                  II
 
         A.  You  must INITIALIZE your LOTTO-TRAX system before you can 
             enter data. Use option #10 to initialize your LOTTO-TRAX. 
 
         B.  When a message appears with an asterisk, it indicates that 
             an <ENTER> alone will be accepted as a valid response. 
             EXAMPLES: 
 
             (YES/*NO)  -  You  MAY answer "YES" or "NO" and then press 
                           <ENTER>,   or  just  press  <ENTER>  for  an 
                           automatic "NO". 
 
             (Y*/N)     -  You  MAY  answer  "Y"  or "N" and then press 
                           <ENTER>,  or  you can just press <ENTER> for 
                           an automatic "Y". 
 
             (YES/NO)   -  You  MUST  answer  "YES"  or  "NO" and press 
                           <ENTER>. 
 
             (Y/N)      -  You  MUST  answer  "Y" or "N" and then press 
                           <ENTER>. 
 
         C.  On  printer  options,  you will have the option to <Q>uit, 
             which  allows  you  to  quit  and  return to the beginning 
             again.  Press the "Q" to quit. 
 
         D. Use the ARCHIVE option! 
            This will store the winning numbers in a permanent file and 
            it   will   allow  you  to  store  your  temporary  numbers 
            permanently. If you do not use the ARCHIVE option, you will 
            not  have  the necessary data for analysis and graphs. With 
            the  ARCHIVE  option  you  can  store  some  or  all of the 
            numbers. 
 
         E.  When naming your games, use 1 to 6 capital letters. If you 
             play  only  one  game, you have several different options, 
             some of which are: 
             1. Set up the remaining games for other lottery games even 
                if you do not play those particular games. 
 
             2. Allow someone else to name and set the requirements for 
                the  other  games.  Your  game could be called "DAILY", 
                while your spouse's game could be called "SPOUSE".  The 
                games could be set up the same (except for the names). 

         F.  Your  State  Lottery  Agency  should be able to supply you 
             with a list of old, winning Lottery numbers. 
                                                  
         G.  THE  MORE  DATA YOU HAVE, THE BETTER!   With more than ten
             winning  lottery  numbers to process you will begin to see
             good  graphs  produced.  Less  than  ten  numbers will not
             produce a good graph.
              
                              NOW LET'S BEGIN! 




                                                               III
                                QUICK REFERENCE 
                                      FOR 
                                   LOTTO-TRAX 
 
 
 
         Make  a  working  copy  of  LOTTO-TRAX using standard backup / 
         copying  procedure.  Make sure the original LOTTO-TRAX disk is 
         write protected. 
 
         Type "LOTTO" . 
 
         INITIALIZE  LOTTO-TRAX  by  using option #10, and define the 3 
         games using 1-6 capital letters. 
 
         When  a  response  is required, the default is indicated by an 
         asterisk.  In  a  message  like  "CORRECT (Y*/N)?", an <ENTER> 
         alone will indicate a response of "Y". 
 
         Purchase  some  lottery  tickets using your numbers or let the 
         computer  help  you select some numbers by entering option #2, 
         GENERATE  LOTTERY  NUMBERS.  You  should  not  use any special 
         number more than once as it is possible that the computer will 
         give  you  the  same  numbers  again. You can select any whole 
         number  between  (minus) -32700 to +32700. (A total of 65,400 
         numbers)! 
 
         Using  option  #5, TEMPORARY PLAYING NUMBERS, store your newly 
         purchased   lottery   numbers.   Use  the  ARCHIVE  option  to 
         permanently  store your numbers! The ARCHIVE option is used to 
         provide data for graphs and analysis. 
 
         When the winning number is announced, enter option #1, COMPARE 
         TO WINNING NUMBER. 
 
         Select the game and enter (and ARCHIVE) the winning number. 
         "PAUSE  ON/AFTER"  should  be  set  at  the  MINIMUM number of 
         matches  you  want  to  stop  at. 
 
         Your  TEMPORARY  numbers (and PERMANENT if entered), will be 
         compared  against  the winning number. The screen display will 
         show:  the  winning number, the matches and your number. Clear 
         (EMPTY) the TEMPORARY NUMBER file after the comparisons. 



                                                                IIIA
                               QUICK REFERENCE 
                                    (CONT) 
 
 
         The PAIRS & OCCURRENCES options will provide you with valuable 
         information  in number trends.  Numbers occurring in pairs and 
         how  often the pair occurred, will be displayed on the screen. 
         For example, if the display is : 5 & 8 = 21, it indicates that 
         the  5  & 8 pair showed up 21 times. You can have the relative 
         pairs graph either displayed on the screen or printed. 
 
 
         OCCURRENCES  are the number of times a given number appears in 
         either  WINNING  or  ARCHIVED  numbers.  For  example,  if the 
         display  is  : 8 = 17, it indicates that the number 8 appeared 
         17 times in the "numbers" checked. Here again you have a graph 
         option. 
 
 
         PERMANENT NUMBERS are numbers you usually play. This option is 
         provided  so  you do not have to reenter numbers you regularly 
         play. 
 
         NOTE: PERMANENT NUMBERS ARE NOT CHECKED WHEN DOING A PAIRS AND 
         OCCURRENCES ANALYSIS. 
 
 
         ARCHIVE  OLD  WINNING  NUMBERS allows you to store old winning 
         numbers  for  PAIRS & OCCURRENCES, graphing purposes. Although 
         it  is  not necessary to use this option, it is a quick method 
         to enter old winning numbers to begin obtaining accurate PAIRS 
         & OCCURRENCES data. 




 
         Turn your computer on.                                      1
 
         Put your working copy of LOTTO-TRAX in drive "A". 
         (If you are using a floppy drive).       

         Type "LOTTO" and press <ENTER>. 
 
         Your LOTTO-TRAX menu will appear. 
 
 
                          LOTTO-TRAX MAIN MENU 
               ------------------------------------------ 
                              LOTTO-TRAX 
               ------------------------------------------ 
 
                   1. COMPARE AGAINST DRAWING 
 
                   2. GENERATE LOTTERY NUMBERS 
 
                   3. ARCHIVE PAIRS & OCCURRENCES 
 
                   4. WINNING PAIRS & OCCURRENCES 
 
                   5. TEMPORARY PLAYING NUMBERS 
 
                   6. PERMANENT PLAYING NUMBERS 
 
                   7. ARCHIVE OLD WINNING NUMBERS 
 
                   8. WINNING NUMBER FACTS & FORECAST 

                   9. RETURN TO SYSTEM
                   
                  10. INITIALIZE LOTTO-TRAX 
 
                             ENTER # 
 
         PURPOSE: 
         This is  the  main menu for your LOTTO-TRAX system.  From this 
         menu you will select the options you want. 
 
 
         Before  you  can  begin using your LOTTO-TRAX system, you must 
         set  the  game requirements (INITIALIZE, option #10). You will 
         initialize   your  system  only  once. 
 
         Type "10" and press <ENTER>. 




                                   INITIALIZE                        2
                                   (OPTION #10) 
  
         PURPOSE: 
         Name and set the requirements of your lottery games. 
 
 
         Answer the question "DO YOU WANT TO INITIALIZE (YES/NO)?" with 
         "YES" and then press <ENTER>. 
 
         Now  enter  the  names of your three different games, pressing 
         <ENTER> after each name. 
 
         Some names you could use are: DAILY, QPICK and WEEKLY. If your 
         whole  family  plays  only  one game, you could call the games 
         DAD,  MOM and KIDS. Then each member would have their own game 
         to manage their individual numbers. 
 
         When  the games have been named, enter the game information. 
         Press <ENTER> after each entry. 
 
         1. The  lowest  number used (0 or 1)? - Does your game allow 
            zero or one as the lowest number? 
 
         2.  The highest  number  used (3 to 70)? - What is the highest 
             number your game can have? 
 
         3.  How many numbers are used (3 to 9)? - How many numbers are 
             used in this lottery game. 
 
         4. Duplicates allowed (YES/NO)? - Can a number appear twice in 
            a  lottery  number? In a number like: 5 - 9 - 5, duplicates 
            are  allowed  because  the number 5 is used more than once. 
            Check you lottery game for rules. 
 
         5. CORRECT (YES/NO)? - Enter your response, "YES" or "NO", and 
            then press <ENTER>. 
 
 
 
         Continue  until  all  the  games have been defined. Answer the 
         final prompt "INITIALIZE LOTTO-TRAX (YES/NO)" with a "YES" and 
         <ENTER>.  Your system is initialized. 



  
                             GENERATE LOTTERY NUMBERS                3
                                   (OPTION #2) 
 
 
         PURPOSE: 
         If  you  need some Lottery "numbers", this module will produce 
         some that you can use when you purchase your lottery tickets. 
         These numbers are purely random!
 
         Type "2" and press <ENTER>. 
 
         To  "make  up"  numbers, your computer needs a number to start 
         with.  You  must  enter  a  number  between (minus) -32700 and 
         +32700, and press <ENTER>. Now your computer can generate your 
         lottery numbers. 
             YOU  SHOULD  NOT  USE  THE  SAME NUMBER TWICE BECAUSE YOUR 
             COMPUTER MAY SELECT THE SAME SET OF NUMBERS! 
 
 
         After  you  enter your special number, a screen similar to the 
         one below will appear. 
 
                   ---------------------------------------------- 
                                   GAME FORMAT 
                   ---------------------------------------------- 
                   PRESS <ENTER> WHEN DONE 
 
                             1. 00/00/00 
 
                             2. 00/00/00/00 
 
                             3. 00/00/00/00/00/00 
 
 
                   WHAT FORMAT?              (Make your selection) 
                                             (and press <ENTER>  ) 
 
                   HOW MANY LOTTERY# SETS?   (Enter a number 1 to 999) 
                                             (and press <ENTER>      ) 
 
                   <D>ISPLAY OR <P>RINT      (D = Screen Display) 
                                                       OR 
                                             (P = Print on printer) 
                                                       AND 
                                                     <ENTER> 
 

         After  you  make  your selections, your numbers will be either 
         displayed  or  printed,  and  you  will return to the GENERATE 
         NUMBERS  screen.  Press  <ENTER>  to  end  and  return  to the 
         LOTTO-TRAX main menu. 



  
                             TEMPORARY PLAYING NUMBERS               4
                                   (OPTION #5) 
 
         PURPOSE: 
         Store TEMPORARY game numbers that will be compared against the
         winning  number  at  the time of the drawing.  These Temporary
         numbers can be automatically removed during COMPARE-option #1.
         If the numbers are archived, a copy of these temporary numbers
         will be available to produce graphs, even if you have selected
         the delete temporary numbers in COMPARE, option #1.
 
         Type "5" and press <ENTER>. 
 
         Select the game you want (1 - 3) and press <ENTER>. 
 
         You will be asked "DO YOU WANT THE ARCHIVE OPTION (Y*/N)?" 
 
         You  can  enter  "Y" or "N", and <ENTER>, or if you press only 
         <ENTER>, "Y" is assumed. 

                         USE THE ARCHIVE OPTION!! 
 
         If  you don't select the ARCHIVE option, you will not perman- 
         ently  store  your  lottery  numbers  and  will not be able to 
         produce  graphs which analyze your numbers! Only under unusual 
         circumstances would you decide not to archive your numbers. 
  
         Imagine  that  you are going to save your numbers and you have 
         two choices: 
 
                 __________________             ___________________ 
                /  TEMPORARY      /|           /     ARCHIVE      /| 
               /___(To delete)___/ |          /_____PERMANENT____/ | 
              |                  | |         |                   | | 
              |   *---------*    | |         |   *-----------*   | | 
              |   |  GAME   |    | |         |   |   GAME    |   | | 
              |   | NUMBERS |    | |         |   |  NUMBERS  |   | | 
              |   *---------*    | |         |   *-----------*   | | 
              |__________________|/          |___________________|/ 
 
                 Save Here Only 
                      OR 
                    Here ------>     AND    ------->  Here 
 
         Enter your Temporary numbers, pressing <ENTER> after each 
         number. 
 
         Your number choice will be displayed. If it is correct, answer 
         the message "DO YOU WANT TO SAVE TO DISK (Y*/N)?" with  "Y" or 
         "N" and <ENTER> or, press <ENTER> alone for an assumed "Y". 
 
         When  DONE,  press  the <ENTER> alone for the first number and 
         you will return to the TEMPORARY NUMBERS screen. 
  


                            PERMANENT PLAYING NUMBERS                5
                                    (OPTION #6) 
 
         PURPOSE: 
         Perform  all  the  functions  necessary  to maintain PERMANENT 
         lottery   numbers.  If  you  have  lottery  numbers  that  are 
         regularly played, you will want to use this option. 
 
         Type "6" and press <ENTER>. 
 
                          ------------------------------ 
                             PERMANENT PLAYING NUMBERS 
                          ------------------------------ 
                               1. ENTER NUMBERS 
 
                               2. VIEW NUMBERS 
 
                               3. REMOVE NUMBERS 
 
                               4. PRINT NUMBERS 
 
                                 <ENTER> TO END 
 
 
                                     ENTER # 
 
 
 
                                 ENTER NUMBERS 
 
         To enter your permanent numbers: 
         Press "1" and <ENTER>. 
         Select the game you want (1-3) and press <ENTER>. 
         Begin  entering  your  lottery numbers, pressing <ENTER> after 
           each number. 
         Answer the "IS THIS CORRECT (Y*/N)?" message with a "Y" or "N" 
           and <ENTER> or, an <ENTER> alone for an assumed "Y". 
         After  you  have  entered  all  your  permanent numbers, press 
           <ENTER>  alone  for  the first number and you will return to 
           the PERMANENT NUMBERS menu. 
 


 
                               VIEW  NUMBERS 
 
         To see what numbers you have in your PERMANENT file: 
         Type "2" and press <ENTER>. 
         Select the game (1-3) and press <ENTER>. 
         Your numbers will be displayed on the screen. 
         Press  <ENTER>  and  you  will  return to the PERMANENT NUMBER 
         menu. 



  
                                REMOVE NUMBERS                       6
 
         To remove permanent numbers, use this option. 
         Type "3" and press <ENTER>. 
         Select the game (1-3) and press <ENTER>. 
         Your permanent numbers will appear one by one on the screen. 
                   Press <ENTER>    to save the number. 
                   Press <R>        to remove the number. 
                   Press <Q>        when you are done. 
 
         You will return to the PERMANENT NUMBER menu when done. 
 
 
 
                               PRINT NUMBERS 
 
         To get a printed listing of your permanent numbers: 
         Type "4" and press <ENTER>. 
          A message will appear on the screen while you make sure your 
          printer is on. 
         To obtain the printed list, press <ENTER>. 
         If you do not want the list, press <Q> to quit. 
         You will return to the PERMANENT NUMBER menu. 



  
                             COMPARE AGAINST DRAWING                 7
                                   (OPTION #1) 
 
         PURPOSE: 
         Selecting this option will compare the numbers you have stored 
         in  the  TEMPORARY  and  PERMANENT numbers against the winning 
         numbers. 
 
         Type "1" and press <ENTER>. 
         Select the game to play (1-3) and press <ENTER>. 
         Enter the winning numbers, pressing <ENTER> after each number. 
 
         The  "PAUSE  ON/AFTER HOW MANY MATCHES" question allows you to 
           pause  on  and  after a given number of matches. If the game 
           you  are playing wins on a minimum of 3 matches, type "3" as 
           the answer for this question. 
 
         Answer the  "ARCHIVE WINNING NUMBER (Y*/N)?" question with "Y" 
           and <ENTER> or, just <ENTER> for an assumed "Y". 
 
         If everything is "CORRECT (Y*/N)?" type "Y" and press <ENTER>, 
         or  if  not correct type "N" and press <ENTER>. Here again you 
         can press <ENTER> alone for an assumed "Y". 
 
 
                   ********************************************* 
                               COMPARE AGAINST DRAWING 
           The     ********************************************* 
         Winning --> WIN=  9  4   2  7                    NUMBER 
         number    *-------------------------------------------* 
                   1 . (Matches shown here)           (Your numbers) 
 
                   2.             2  7                   0-7-2-3 
 
                   3.             2                      6-5-2-1 
 
                   4.     9   4                          4-0-9-9 
 
                   5.     9       2  7                   3-7-2-9 
                  *********************************************** 
                          Winner                 Winner 
                  *********************************************** 
                               PRESS  <ENTER> 
 
         A screen similar to the one above will appear. 
         The  winning  number  you  entered  is  displayed in the upper 
         left hand side. 
         Your numbers are on the right side. 
         Matches are displayed on the left side. 



  
         In this example: The winning number is 9-4-2-7.             8
                          "PAUSE ON/AFTER" was set at 3. 
 
         Matches are displayed. 
 
         If  the  number  of  matches  is  equal to or greater than the 
         number  you  selected  in the PAUSE ON/AFTER HOW MANY MATCHES, 
         the  "WINNER"  message  will  be  displayed and you must press 
         <ENTER> to continue checking. 
 
         If the screen  becomes  full, the "PRESS <ENTER>" message will 
         appear. You must press <ENTER> to continue. 
 
         After  all  the  TEMPORARY NUMBERS are checked, your PERMANENT 
         NUMBERS will automatically be checked and displayed. 
 
         After  all the comparisons are completed, you will be asked if 
         you want to clear your TEMPORARY  NUMBERS. 
 
         USUALLY YOU WILL CLEAR YOUR TEMPORARY NUMBERS, (IF YOU WANT TO 
         PERFORM  ANALYSIS  ON  YOUR  PLAYING  NUMBERS, YOU SHOULD HAVE 
         ARCHIVED THESE NUMBERS WHEN YOU ENTERED THEM). 
 
         While  your  temporary  number  file  will  be  emptied,  your 
         PERMANENT NUMBERS will not be affected. 
 
         You  will return to the COMPARE TO WINNING screen for the next 
         next game choice. 



                             PAIRS & OCCURRENCES                     9
                               (OPTION# 3 & 4) 
                                  - PAIRS - 
 
         PURPOSE: 
         Provide  analysis of ARCHIVED TEMPORARY numbers (option 3) and 
         ARCHIVED  WINNING numbers (option 4). This option will provide 
         valuable  information  regarding what pairs of numbers show up 
         and how often any given number occurred. 
 
         Both options three and four function basically the same, 
         any reference to one option can be applied to the other. 
 
         Here   we   will   explain  option  four,  WINNING  PAIRS  AND 
         OCCURRENCES,  but  remember this also applies to option three, 
         ARCHIVE PAIRS AND OCCURRENCES (your old temp. numbers). 
 
         Type "5" and press <ENTER>. 
         Select the game (1-3) you want to check, and press <ENTER>. 

         Enter the minimum number of pairs you want to display.  If you
         do  not want to display pairs that have not showed up at least
         5 times,  enter 5 and press <ENTER>.  To avoid long printouts,
         it is recommended you use a minimum of 3.

 
         The  PAIRS & OCCURRENCES screen will appear and begin checking 
         the  winning  numbers.  When  all the numbers from the WINNING 
         file are checked, the results will be displayed: 
         (The number after the "CHECKING NUMBER:" message tells you how 
         many WINNING numbers have been checked). 
 
 
         -------------------------------------------------------------- 
                             WINNING - PAIRS IN "GAME" 
         -------------------------------------------------------------- 
         CHECKING NUMBER:   3                 MIN. PAIR COMBINATIONS 5 
         THE FOLLOWING PAIRS APPEAR: 
         1 & 3= 12       3 & 4 = 1     4 & 5 = 6 
         DONE.. 
                                 PRESS <ENTER> 
 
         In  the display above, the "1 & 3=12" indicates that the 3 & 4 
         pair occurred 12 times in the lottery numbers checked; the 3 & 
         4 pair showed up 1 time and the 4 & 5 pair occurred 6 times. 
 
         If  all  the  pairs  have  been displayed, "DONE" will appear, 
         otherwise  only  "PRESS <ENTER>" will appear on the screen and 
         the display will continue after <ENTER> is pressed. 
 
         NOTE: PAIRS OF ZERO ARE NOT DISPLAYED. 
 
         When  all  the  pairs have been displayed and you have pressed
         <ENTER>, the RELATIVE PAIRS BAR CHART screen will appear.
 



                            PAIRS & OCCURRENCES                      10
                                   (PAIRS) 
 
                      ---------------------------------------- 
                          WINNING "GAME" - RELATIVE PAIRS 
                      ---------------------------------------- 
                      BAR CHART <P>RINT, <D>ISPLAY OR <N>O? 
 
         When this display appears, you will be able to produce a graph 
         which shows how often pairs of numbers occurred. 
 
         If you want a printout on your printer, press "P" and <ENTER>. 
         The  "READY  THE PRINTER" message will appear and wait for you 
         to press <ENTER> to start printing or "Q" to quit. 
 
         To  display  your  chart  on  the  screen,  print  the "D" and 
         <ENTER>. 
 
         If  you don't want the RELATIVE PAIRS graph, press the "N" and 
         <ENTER> to jump to the OCCURRENCES screen. 
 
         If  you  press  "P"  or "D",  a graph similar to the one below 
         will appear. 
 
 
         1/2 ************** 
         1/7 ******* 
         4/5 ********************* 
 
         The  graph indicated that the 1/7 pair occurred least; the 1/2 
         pair occurred twice as often as the 1/7 pair; and that the 4/5 
         pair occurred three times as often as the 1/7 pair. 
 
         If  you  are  <D>ISPLAYing  your  graph and the screen becomes 
         full, the "PRESS <ENTER>" message will appear and wait for you 
         to press <ENTER>. When the graph is complete, "DONE.." will be 
         displayed, press <ENTER> to continue. 
 
         If <P>rinting your graph, no input is required. 
 
         When  the  graph  is  completed  or  if  you  entered "N", the 
         OCCURRENCE screen will appear. 
 
 
         NOTE:  SOME  HESITATION AND MOMENTARY PAUSES DURING GRAPH
                PRINTING OR DISPLAYING IS NORMAL.

                IF LESS THAN 10 GAMES ARE PROCESSED, THERE MAY NOT BE 
                ENOUGH DATA TO PRODUCE A GOOD GRAPH.



  
                             PAIRS & OCCURRENCES                     11
                                (OCCURRENCES) 
 
                   --------------------------------------------- 
                            WINNING "GAME" - OCCURRENCES 
                   --------------------------------------------- 
                   1= 3      2= 0      3= 4      4= 2      5= 2 
                   6= 5      7= 4 
 
 
         A screen similar to the one above will be displayed. 
 
         In  the  example 4= 2, the 4 is the actual number and the 2 is 
         how often it was found in the numbers checked. 
 
         When all the OCCURRENCES have been indicated, "DONE.." will be 
         displayed.  The  "PRESS  <ENTER>" message will appear and wait 
         for you to press <ENTER>. 
 
         When  <ENTER>  is  pressed,  the RELATIVE OCCURRENCE bar chart 
         screen will be displayed. 
 

                    ----------------------------------------------- 
                        WINNING "GAME" - RELATIVE OCCURRENCES 
                   ----------------------------------------------- 
                   BAR CHART <P>RINT, <D>ISPLAY OR <N>O? 
  
         Here  you  have  the options similar to the RELATIVE PAIRS bar 
         chart,  you can "P", PRINT to the printer,  "D" DISPLAY to the 
         screen or "N", NO graph at all. 
 
         If  you  want  to print your bar chart, press <P> and <ENTER>. 
         Make sure your printer is set, and press <ENTER> again. 
 
         If  you want to display your bar chart, press <D> and <ENTER>, 
         and your graph will be displayed. 
 
         If you do not want the graph, press <N> and <ENTER>. This will 
         return you to the PAIRS & OCCURRENCES game screen. 
 
         If  you  pressed  <D> or <P>  a graph similar to the one below 
         will be produced. 
  
         1 ********** 
         2 ***** 
         3 *************** 
 
         You  can  see  that  the number 2 occurred least, the number 1 
         occurred  twice  as  often  as  number 2 and that the number 3 
         occurred three times as often as the number 2. 



                                                                     12 
         If  you  are  <D>isplaying  your graph and your screen becomes
         full, the "PRESS <ENTER>" message will appear and wait for you
         to press <ENTER>, then continue to display the graph. 
 
         When all the OCCURRENCES have been displayed, "DONE.." and the 
         "PRESS <ENTER>"  message  will be displayed.  Press <ENTER> to 
         return to the PAIRS & OCCURRENCES screen. 
 
         If <P>RINTING your graph, no input is required. When the graph 
         has  been  printed,  you will automatically be returned to the 
         PAIRS & OCCURRENCES pick the game screen. 
 
 
 

 
                             ARCHIVE OLD WINNING NUMBERS 
                                     (OPTION# 7) 
 
 
         PURPOSE: 
         Allow  entry  of  old  winning  numbers to be used for WINNING 
         PAIRS & OCCURRENCES graphs. 
 
         Type "7" and press <ENTER>. 
 
         Select the game (1-3) and press <ENTER>. 
 
         Enter  your numbers one at a time and press <ENTER> after each
         number. If the number is correct press "Y" and <ENTER> or just 
         <ENTER>.
         If  the  number  is not correct type "N" and press <ENTER> and
         you can reenter your number. 
 
         When you have finished entering the old winning numbers, press 
         <ENTER>  for  number 1  and you will return to the ARCHIVE OLD 
         WINNING NUMBERS screen. 
 
         NOTE: 
         YOUR  STATE LOTTERY OFFICE SHOULD BE ABLE TO SUPPLY YOU WITH A 
         LIST OF OLD WINNING LOTTERY NUMBERS. 



 
                          WINNING NUMBER FACTS & FORECAST            13
                                   (OPTION #8) 
       
         PURPOSE: 
         This  option  produces  a graphic chart of the winning numbers 
         for  the  last  75  day/drawings, a Fact sheet which indicates 
         winning number occurrences, average distance between drawings, 
         the current distance in relation to the average occurrence and 
         the   estimated   distance  (in  days/drawings)  to  the  next 
         occurrence.  This  option will also provide forecasted winning 
         numbers  based on occurrence of winning numbers and by average 
         estimated distance.
         
         NOTE: AT LEAST 3 WINNING NUMBERS ARE NEEDED TO USE THIS OPTION. 
 
         Type "8" and press <ENTER>. 
 
         Select the game you want to use (1-3) and press <ENTER>. 
 
         The  PRINT/DISPLAY  &  SLIDE  screen will appear. Press "D" to 
         display on the screen or "P" to print on your printer and then 
         press <ENTER>. 
 
         Answer the SLIDE question with your choice. 
         What  is  SLIDE?  Slide  is the term used to describe how many 
         numbers  will  be  rotated into the forecasted winning number. 
         For  example:  You  are  playing  a  lottery  game that uses 3 
         numbers  between  0  and  9.  Assume  that the winning lottery 
         numbers  occurred  in  order,  that  is, 0 occurred most and 9 
         least.  If  you  chose  3 for your slide number, the following 
         would result: 
 
           0-1-2      0-1-3      0-1-4       0-1-5 
         (slide 0)  (slide 1)  (slide 2)   (slide 3) 
  
         The slide factor allows a larger "spread" of numbers, without
         using ALL possible combinations.


                               75 DAY CHART 
 
         The  75  day  chart is a graphic representation of the last 75 
         days/drawings.  A  chart  similar  to  the  one  below will be 
         produced. 
 
           1 -**---*---* 
           2 ---*-*--*-* 
           3 -*----*--*- 
           4 *-**---*--- 
 
         The number is the lottery number, the "*" indicates the number 
         was  in  the winning number, the "-" indicates that the number 
         was not in the winning number. If there are more than 75 days/
         games,  all the games will be processed,  but only the last 75
         will be displayed.



 
                            WINNING NUMBER FACT SHEET                14
 

         PURPOSE:
         This report will show how often a lottery number occurred; the 
         average  distance  it  occurred  between drawings, the average 
         current  distance  and  the estimated distance (by average) to 
         the  next  occurrence.  If  a number was not used in a winning 
         number  or  if  it  occurred only once, the estimated distance 
         will  be  assigned  the number 75. A negative number indicates 
         that  the  number  should  have  occurred  according  to  it's 
         average. 

 

         LOTTERY    NUMBER OF     AVERAGE     CURRENT    EST. DISTANCE 
         NUMBER    OCCURRENCES    DISTANCE    DISTANCE      TO NEXT 
         -------------------------------------------------------------- 
         1            5              13.8        5           10.80 
         2           15               4.6       15            4.60 
         3            7               9.9        7           -0.14 
         TOTAL NUMBER   3        LOW 52       HIGH 188     AVG 144 


 
         At the bottom of the report you will see:
         TOTAL NUMBER   3        LOW 52       HIGH 188     AVG 144
         
         This means that a total of 3 lottery numbers were checked.
         Of all the numbers checked, the lowest added total (of a
           lottery number) was 52.
         The  highest  total  number was 188 and the average of all the 
           numbers was 144.    
         
         For example, the numbers 3-4-9 (lowest 16), 5-7-9 (highest 21)
         and 9-4-4 would show up as:
         TOTAL NUMBER   3        LOW 16      HIGH 21      AVG 18  
         The AVG = (16+21+17 divided by 3).

         You  can  compare  the  low,  high  and average numbers to the 
         numbers you selected, or the numbers that are generated in the
         printouts below.
 



                             FORECASTED WINNING NUMBERS 
                             BY OCCURRENCE AND AVERAGE 
 
         The  forecasted  winning  numbers will be displayed or printed 
         depending   on  you  choice.  Two  sets  of  numbers  will  be 
         generated.  The  first  set  of  numbers  will be based on the 
         OCCURRENCE  of  the  winning  numbers,  the second set will be 
         based on AVERAGE distance between occurrences. 
 



                                                                     15
         A  display  or  print  out  similar  to  the one below will be 
         produced.  Read  the  numbers  from  left  to  right.  In this 
         example, the most likely winning number will be 1- 2- 3, while 
         the least likely number is 8- 9- 0. 
 
          1- 2- 3     2- 3 - 4     3- 4- 5     4- 5- 6     5- 6- 7 
          8- 9- 0 
 

         Personally I like a "SLIDE" of 3 to 5.  Then I select numbers
         that fall within then low/high/average range.


         When  this  option  is  completed, you will be returned to the         
         LOTTO-TRAX main menu. 




                             REGISTRATION                            16


      Once you've tried LOTTO-TRAX and find that you enjoy it and use it
      regularly,  we encourage you to actually purchase it and register
      for $15.


This fee will allow you to:
    1) Pay a reasonable price for your software.
    2) Allow you to try the software before you buy it.
    3) Register for updates.
    4) Avoid the frustration of copy protection.
    

Name: __________________________________________________________________

Address: _______________________________________________________________

City, State & Zip:______________________________________________________

Version of LOTTO-TRAX _________________

Type of computer: _____________________

MONO/CGA/EGA/VGA: _____________________

Hard Disk/Floppy: _____________________

Suggestions:

________________________________________________________________________

________________________________________________________________________

________________________________________________________________________




Mail Check or money order for $15 to:

FOX VALLEY SOFTWARE
12N277 TINA TRAIL
Elgin, IL. 60123

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1391

     Volume in drive A has no label
     Directory of A:\

    AWIN     EXE     15377  10-10-89  10:00p
    BRUN40   EXE     76816  10-08-87   5:57p
    COMBO    EXE     27545  10-10-89  10:00p
    CWIN     EXE     22531  10-10-89  10:00p
    FILE1391 TXT      1703   1-24-90  12:13p
    FILES    DOC      1787  10-10-89  10:00p
    FIXES    DOC       781  10-10-89  10:00p
    GLNUM    EXE     17937  10-10-89  10:00p
    GO       BAT        38   2-28-90   8:06p
    GO       TXT       540   2-28-90   8:08p
    HELP     BAT       497  10-10-89  10:00p
    INSYS    EXE     21101  10-10-89  10:00p
    LMAIN    EXE     12143  10-10-89  10:00p
    LOTTO    EXE      7285   1-07-90  10:10p
    NULL                 4   1-01-89   9:00p
    PLNUM    EXE     21333  10-10-89  10:00p
    PROJ1    EXE     25285  10-10-89  10:00p
    PROJ2    EXE     14589  10-10-89  10:00p
    README   DOC     42147  10-10-89  10:00p
    TLNUM    EXE     16695  10-10-89  10:10p
           20 file(s)     326134 bytes
                           24576 bytes free
