---
layout: page
title: "PC-SIG Diskette Library (Disk #2344)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2344/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2344"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "MATCH & LOGIC GAMES FOR KIDS"

    MATH AND LOGIC GAMES FOR KIDS presents six programs that challenge a
    child's mathematics and thinking skills. The programs are aimed at
    grade levels K-6, but can be enjoyed by all.
    
    TARGET MATH and JELLY BEANS are competitions between two players, or
    one player versus the computer. In TARGET MATH, take turns adding
    numbers trying to reach a target sum. In JELLY BEANS, take turns
    removing beans from a jar. (The one who takes the last bean loses!)
    
    I SHOT AN ARROW is a simple simulation of an arrow flying through the
    air until the program introduces estimation and answer refinement
    skills. LEAKY TUB simulates filling a leaky bath tub with hot and cold
    water, and is just plain fun while teaching logical thinking. In MATH
    RACE, up to four players take turns answering arithmetic flash card
    problems. The faster you answer your problem, the further down the
    track your car travels. Each player can race at a skill level
    pretty pictures using the ideas of Fractal math.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## ML.DOC

{% raw %}
```
         
         
         
         
         
         
         
         
         
         
         
         
                                 User's Guide For:
         
         
                           MATH AND LOGIC GAMES FOR KIDS
                                 (A Shareware Disk)
         
         
         
                                  (c) KIDware 1989
                         Portions (c) Microsoft Corp. 1989
         
         
         
         
         
         
         
         
         
                                      KIDware
                              1380 156th NE, Suite H2
                                 Bellevue, WA 98007
                                   (206) 725-4859
         
         
         
         
         
         
         
         
         
         
         MATH AND LOGIC GAMES FOR KIDS User's Guide - Page 1
         
         
                                    INTRODUCTION
         
             MATH AND LOGIC GAMES FOR KIDS presents six programs for the 
         IBM-PC that challenge a child's mathematics and thinking 
         skills.  The programs are aimed at grade levels K through 6, but 
         can be enjoyed by all.   The programs TARGET MATH and JELLY 
         BEANS are competitions between two players, or one player versus 
         the computer.  In TARGET MATH, you take turns adding numbers 
         trying to reach a target sum, while in JELLY BEANS you take 
         turns removing beans from a jar and the one who takes the last 
         bean loses!  I SHOT AN ARROW is a simple simulation of an arrow 
         flying through the air; the program introduces estimation and 
         answer refinement skills.  LEAKY TUB simulates filling a leaky 
         bath tub with hot and cold water.  This program helps teach 
         logical thinking and is just plain fun.  In MATH RACE, up to 
         four players take turns answering flash card arithmetic 
         problems.  The faster you answer your problem, the further down 
         the track your car travels.  Each player can race at a skill 
         level appropriate to their grade level.  Finally, MATH AS ART 
         simply draws pretty pictures using the ideas of fractal math.
         
             In this note, I briefly describe operation of the six 
         computer programs provided to you on your shareware disk.  
         Hopefully, these programs will be of some use to you in your 
         home or classroom.  If you use the programs, we ask that you 
         register your copy (use the registration form at the end of this 
         document).  With registration, you will be sent a printed user's 
         manual describing program operation in detail, including playing 
         strategies and the equations behind each program.  Also with 
         registration, you will made aware of new programs and any 
         updates to this disk.  Now, let's talk about computer 
         requirements.
         
         
                               COMPUTER REQUIREMENTS
         
             You need an IBM-compatible machine equipped with a  minimum 
         of 256K of memory and a CGA (Color Graphics Adapter) or Hercules-
         compatible monochrome graphics card.  A color monitor is 
         recommended.  Before using the programs, you must do two 
         things:  install the program on your own disk, then configure 
         the program to your particular system.  Depending on the number 
         and types of disk drives you have, follow the given instructions 
         for installing the programs.
         
         
         
         
         
         
         
         
         MATH AND LOGIC GAMES FOR KIDS User's Guide - Page 2
         
         
         Installation on Single Floppy Drive System:
                
             Working with a single drive system can be tricky.  Please 
         pay close attention to instructions provided.
         
             1.  Place DOS disk in drive A and start system.
             2.  You first need to format a disk and put a copy of the 
                 operating system on it.  Type: FORMAT A:/S
             3.  Replace DOS disk with blank disk and follow 
                 instructions provided by computer.
             4.  When formatting is complete, replace blank disk 
                 with MATH AND LOGIC GAMES FOR KIDS disk and type: COPY 
                 A:*.* B:  This will allow you to copy the files from the 
                 MATH AND LOGIC GAMES FOR KIDS disk (referred to by DOS 
                 as disk A) to your newly formatted disk (referred to by 
                 DOS as disk B).  Follow instructions provided by 
                 computer.
             5.  Installation is now complete.  Put the original copy of 
                 the MATH AND LOGIC GAMES FOR KIDS disk in a safe place; 
                 you will always use your copy.  Now, place that copy of 
                 the program in drive A and proceed to configuration 
                 instructions. 
          
                   
         Installation on Dual Floppy Drive System:
                
             Pay close attention to instructions provided.
                
             1.  Place DOS disk in drive A and blank disk in drive B; 
                 start system.
             2.  You first need to format a disk and put a copy of the 
                 operating system on it.  Type: FORMAT B:/S
             3.  Replace DOS disk in drive A with MATH AND LOGIC GAMES 
                 FOR KIDS disk.  Type: COPY A:*.* B:  This will allow you 
                 to copy the files from the MATH AND LOGIC GAMES FOR KIDS 
                 disk in drive A to your newly formatted disk in drive B.
             4.  Installation is now complete.  Put the original copy of 
                 the MATH AND LOGIC GAMES FOR KIDS disk in a safe place; 
                 you will always use your copy.  Now, place that copy of 
                 the program in drive A and proceed to configuration 
                 instructions. 
         
                   
         
         
         
         
         
         
         
         MATH AND LOGIC GAMES FOR KIDS User's Guide - Page 3
         
         
         Installation on Hard Disk System:
                
             Pay close attention to instructions provided.
                
             1.  Start system.
             2.  You first need to create a directory for the programs.  
                 At C: prompt, type:  MKDIR C:\MLOGIC\   This creates a 
                 directory named MLOGIC on your hard disk (you may use 
                 another name if you want).  Now, move to that directory 
                 by typing: CD C:\MLOGIC\
             3.  Place MATH AND LOGIC GAMES FOR KIDS disk in floppy drive 
                 A.  Type: COPY A:*.* C:  This will allow you to copy the 
                 files from the MATH AND LOGIC GAMES FOR KIDS disk to 
                 your hard disk.
             4.  Installation is now complete.  Put the original copy of 
                 the MATH AND LOGIC GAMES FOR KIDS disk in a safe place.  
                 Proceed to configuration instructions. 
                   
                   
         Configuration Instructions:
                
             To configure the program to your system, place your copy of 
         the program disk in drive A (or go to directory C:\MLOGIC\ on a 
         hard disk) and type:  MLCON
         
             You will be asked a single question; answer accordingly.  
         The question asks you if you have color graphics (press 1) or 
         Hercules monochrome graphics (press 2).  If you have both, press 
         1 and use color graphics, because the monochrome graphics 
         simulator will not work properly when both color and monochrome 
         graphics cards are installed.  
         
         
                           PROGRAM OPERATION INSTRUCTIONS
         
             Once the program is installed and configured, you can run 
         it.  Please note if you ever change your system configuration, 
         you should rerun the configuration program.  Running the program 
         is simple.  If you are using floppy drives, place your copy of 
         the program disk in a drive.  If using a hard disk, move to the 
         proper directory by typing:  CD:\MLOGIC\  Type GO and press 
         <Enter>.  The program will begin running after a few seconds of 
         loading some needed files and a selection menu will appear.  (If 
         the selection menu is unreadable, rerun the configuration 
         program making sure you answered the question concerning 
         graphics correctly.)  Use the cursor control key to make your 
         menu selection, then press <Enter>.  Individual program 
         instructions follow.
         
         
         
         
         
         
         
         
         
         MATH AND LOGIC GAMES FOR KIDS User's Guide - Page 4
         
         
         TARGET MATH:
         
             In this game, a target number is selected at random.  You 
         and another player (or the computer) take turns adding numbers 
         to a sum trying to reach the target number.  You are limited to 
         how large a number you may add each turn.  The winner is the 
         player who completes the sum, i.e. reaches the target number.  
         In the program, the target number is graphically represented by 
         open boxes (10 in each row).  As numbers are added to the sum, 
         these open boxes are replaced by colored boxes indicating how 
         many boxes have been added and how many boxes remain to reach 
         the target number.  
         
             The game is played by selecting TARGET MATH from the menu 
         screen.  When loaded, you indicate whether there is one player, 
         playing against the computer, or two players, competing against 
         each other.  If playing against the computer, you are then asked 
         whether you want to go first or you want the computer to go 
         first.  Once these questions are answered, play begins, 
         alternating turns.  At each turn, simply indicate the number of 
         boxes you wish to add.
         
             The game ends when the target number is reached.  Pressing S 
         will stop the game at any time.  Once the game ends, you are 
         asked if you wish to play again (press 1 for yes, 0 for no).
         
         JELLY BEANS:
         
             This game is very similar to TARGET MATH, with a slightly 
         different goal.  A random number of jelly beans is placed in a 
         jar.  You and another player (or the computer) take turns 
         removing beans from the jar.  You are limited to how many beans 
         you may remove each turn.  The winner is the player who makes 
         the other player take the last bean (we've all been taught it's 
         not polite to take the last one of anything!).  In the program, 
         the jelly beans are graphically depicted by colored star shapes 
         (5 in each row).  As beans are removed, the remaining number is 
         seen in the jar. 
         
             The game is played by selecting JELLY BEANS from the menu 
         screen.  When loaded, you indicate whether there is one player, 
         playing against the computer, or two players, competing against 
         each other.  If playing against the computer, you are then asked 
         whether you want to go first or you want the computer to go 
         first.  Once these questions are answered, play begins, 
         alternating turns.  At each turn, enter the number of jelly 
         beans you want to remove from the jar.
         
         
         
         
         
         
         
         
         MATH AND LOGIC GAMES FOR KIDS User's Guide - Page 5
         
         
             The game ends when the jar of jelly beans is empty.  
         Pressing S will stop the game at any time.  Once the game ends, 
         you are asked if you wish to play again (press 1 for yes, 0 for 
         no).
         
         I SHOT AN ARROW:
         
             This program is used to discover the basics of ballistics, 
         or motion in the x-y plane.  The program has no right or wrong 
         answers--it simply provides an arena for trying different things 
         and seeing the results.  The general idea of the program is to 
         determine at what angle (measured from the x-axis) an arrow 
         should be launched (starting at x=0, y=0) to hit a specific 
         point.  The arrow moves in the x-y plane (y=0 representing the 
         ground) under the influence of gravity in the negative y-
         direction, i.e. the arrow will fall down.  The x-y plane and 
         concept of an angle should be explained to the user, at a level 
         the user can understand.  With this general basis, several 
         exercises can be tried.
         
             The program is loaded by selecting I SHOT AN ARROW from the 
         menu screen.  When loaded, you indicate the value of the x point 
         (0-100) you wish to hit and the value of the y point (0-50) you 
         want to hit.  To stop the program, enter 999 as the x value.  
         Next, enter the arrow angle (from 0 to 90 degrees).  Enter an 
         angle of zero to re-select the desired x-y point.
         
             After answering these questions, a plot of the arrow's 
         trajectory is drawn and you are told whether or not you hit your 
         desired point.  You clear this screen by pressing any key.  If 
         you hit the point, you are asked to enter another desired 
         point.  If you missed, you are asked to enter another angle and 
         the new trajectory is plotted.
         
         LEAKY TUB:
         
             This program demonstrates a principle used extensively in 
         engineering and mathematics disciplines, that of computer 
         simulation.  Simulation is used to test designs and procedures 
         before actually building some device or structure.  For example, 
         we use simulators to train airline pilots--this is much safer 
         than training them in actual planes because if they make a 
         mistake, there is no loss of airplane or life.  Before 
         constructing a building, we simulate it on a computer to see if 
         it can withstand winds and possible earthquakes.  In this 
         program, we will simulate filling a leaky bath tub to help teach 
         logical thinking skills.
         
         
         
         
         
         
         
         
         MATH AND LOGIC GAMES FOR KIDS User's Guide - Page 6
         
         
             There are no correct answers or predeveloped goals for this 
         program.  The child can just play with it and make up his/her 
         own goals.  The idea is that you have a tub with a leak.  You 
         can decide how much hot water to put in the tub and how much 
         cold water to put in the tub.  Once you set these values, the 
         computer will show you how the level in the tub changes and what 
         the temperature of the water in the tub is.   On the screen 
         display, the column on the left of the tub indicates how much 
         hot water is going into the tub, the column on the right of the 
         tub shows cold water flow.  Thus, in the program you can control 
         two quantities:  tub level and water temperature.  You can tell 
         the tub leaks because if you fill it up then turn off both the 
         hot and cold water flows, the tub will drain!
         
             The program is loaded by selecting LEAKY TUB from the menu 
         screen.  When loaded, simply press 1 to get to the tub display 
         screen.  The tub starts out empty.  Flow into the tub is 
         controlled with a two key sequence:  you first hit H or C to 
         adjust the hot and cold water flows, respectively.  After 
         pressing H or C, the computer will ask you whether you want to 
         increase the flow (press +), decrease the flow (press -), or 
         stop changing the flow (0).  After pressing a key, you will see 
         the requested change take effect.  Changes will be seen in the 
         column associated with the hot and cold water flows (an empty 
         column indicates zero flow while a full column indicates maximum 
         flow) and in tub level and water temperature.  Note once you ask 
         for the flow to change in a certain direction, it will continue 
         changing until you turn it off by pressing H or C, then 0.
         
             The program is stopped and the display erased by pressing 
         the S key at any time.  After pressing S, the computer will ask 
         you if you wish to continue (press 1) or stop (press 0).
         
         MATH RACE:
         
             One thing every kid likes is competition, whether it be 
         against a computer (how do you explain the immense popularity of 
         Nintendo?) or against a classmate (friendly only, of course!).  
         In this program, from one to four kids can compete in basic 
         flash card math skills.  The faster you answer your problem 
         correctly, the further down the track your race car travels.  
         The first to the finish line wins!
         
             The nice thing about this game is that each player selects 
         the level of problems she/he wishes to answer.  Thus, an adult 
         can compete (using very difficult division problems) against a 
         first-grader (doing simple addition).  Another selected variable 
         is how long one has to answer the problem.  I speak from 
         experience in tutoring at-risk students that kids love to beat 
         adults at math!
         
         
         
         
         
         
         
         MATH AND LOGIC GAMES FOR KIDS User's Guide - Page 7
         
         
         
             Select MATH RACE from the menu.  Several questions must be 
         answered to get the program started.  First, you enter the 
         number of players (from 1 to 4).  Enter a zero to stop the 
         program.  Next, each player is asked a series of questions.  You 
         are first asked to type in your name, so the program can keep 
         track of who's turn it is.  Next, you select the type of 
         problems you want to try--press 1 for addition, 2 for 
         subtraction, 3 for multiplication, 4 for division, and 5 for 
         mixed problem types.  The next question concerns how large you 
         want the numbers in your problems to be; enter a number from 5 
         (easy) to 500 (difficult, especially in division and 
         multiplication).  Lastly, you enter the clock speed, i.e. the 
         time you want to answer the problem.  Each problem is worth a 
         maximum of 10 points.  With each tick of the clock, one point is 
         removed from your possible score.  With a slow clock, there are 
         about two seconds between ticks, with a medium clock, about 1.5 
         seconds, and with the fast clock, there is about 1 second 
         between ticks.  Once each player has answered the corresponding 
         questions, the race begins.
         
             In the same order they entered their names, players are 
         given problems to answer.  To see their problem, the player 
         presses the space bar when asked to.  The problem is then 
         displayed.  At that point, the player types in the answer to the 
         problem and presses <Enter>--remember you must press <Enter> in 
         order to get the computer to check your answer.  You can erase 
         your answer (before pressing <Enter>) by tapping the space bar.  
         If your answer is correct, your car will move across the screen 
         a distance related to how much time was left when you answered.  
         If incorrect, you are given another chance.  You can continue to 
         answer until time runs out.  
         
             The game is completed when one or more players reaches the 
         finish line.  It takes a total of 84 points to reach the line, 
         so you must answer at least 9 problems fairly quickly to win.  
         After completion, the winner(s) and runner-up(s) are displayed.  
         At this point, another race can be run (press 1) or the 
         programmed stopped (press 0).
         
         MATH AS ART:
         
             This is not a game, but just a demonstration of how 
         mathematics can be used to generate pretty pictures.  What this 
         program does is generate a coarse color picture using the 
         mathematics of fractals.  What are fractals you ask?  Fractals 
         describe in a pictorial sense how fast certain equations tend 
         toward large numbers.  Such descriptions are very useful to 
         mathematicians trying to solve very complicated problems which 
         may have many potential solutions.  All we have to worry about 
         
         
         
         
         
         
         MATH AND LOGIC GAMES FOR KIDS User's Guide - Page 8
         
         
         is that they can draw pretty pictures.  The pictures drawn here 
         are very rough because I use screen text coordinates (40 boxes 
         wide by 24 boxes high).  This was done to save computation 
         time.  Using pixel (individual dots on the screen) coordinates 
         make prettier pictures, but take a lot of time to draw (about 60 
         times longer).
         
             The program is very easy to use.  Select MATH AS ART from 
         the menu screen.  You are asked to enter some number between 0 
         and 20 (enter 999 to stop the program).  Then, enter another 
         number from 0 to 20.  These numbers are used to start the 
         drawing process and each pair of numbers gives a different 
         picture.  Once these numbers are entered, the computer draws its 
         picture (the drawing process can be stopped by pressing the S 
         key).  
         
         
         
         
         
         
         
         MATH AND LOGIC GAMES FOR KIDS User's Guide - Page 9
         
         
                  MATH AND LOGIC GAMES FOR KIDS REGISTRATION FORM
                
             If you use the shareware version of MATH AND LOGIC GAMES FOR 
         KIDS and like it, we ask that you register your copy.  Upon 
         receipt of your registration, we will send you printed program 
         documentation including playing strategies and the equations 
         behind the mathematics.  This material will enhance your 
         understanding of the programs.  Also registration entitles you 
         to information about other KIDware programs and any future 
         program updates.  Furthermore, registration allows us to 
         continue program development efforts.  Thank you!
         
             Please register my copy of KIDware's MATH AND LOGIC GAMES 
         FOR KIDS disk.  The registration price is $11.95 (WA residents, 
         add  8.1% sales tax.)
                    
         Name ___________________________________________________________
                
         Address ________________________________________________________
                
         City _________________________ State _________ Zip _____________
                
         Payment Method:
                
         _______ Check       _______ Money Order   ______ VISA/MasterCard
                
         Card Number _________________________________ Exp. Date _______ 
                
         Signature _____________________________________________________
         
         
         I obtained my copy of MATH AND LOGIC GAMES FOR KIDS from
         
         ________________________________________________________________
         
         and my computer type is
         
         ________________________________________________________________
         
         Send your registration to:
         
                                      KIDware
                              1380 156th NE, Suite H2
                                 Bellevue, WA 98007
                                   (206) 725-4859
```
{% endraw %}

## ORDER.DOC

{% raw %}
```


       
       
                MATH AND LOGIC GAMES FOR KIDS REGISTRATION FORM
              
           If you use the shareware version of MATH AND LOGIC GAMES FOR 
       KIDS and like it, we ask that you register your copy.  Upon 
       receipt of your registration, we will send you printed program 
       documentation including playing strategies and the equations 
       behind the mathematics.  This material will enhance your 
       understanding of the programs.  Also registration entitles you 
       to information about other KIDware programs and any future 
       program updates.  Furthermore, registration allows us to 
       continue program development efforts.  Thank you!
       
           Please register my copy of KIDware's MATH AND LOGIC GAMES 
       FOR KIDS disk.  The registration price is $11.95 (WA residents, 
       add  8.1% sales tax.)
                  
       Name ___________________________________________________________
              
       Address ________________________________________________________
              
       City _________________________ State _________ Zip _____________
              
       Payment Method:
              
       _______ Check       _______ Money Order   ______ VISA/MasterCard
              
       Card Number _________________________________ Exp. Date _______ 
              
       Signature _____________________________________________________
       
       
       I obtained my copy of MATH AND LOGIC GAMES FOR KIDS from
       
       _______________________________________________________________                                                               
       
       and my computer type is
       
       _______________________________________________________________                                                               
                                                                      
       
       Send your registration to:
       
                                    KIDware
                            1380 156th NE, Suite H2
                               Bellevue, WA 98007
                                 (206) 725-4859

```
{% endraw %}

## README.DOC

{% raw %}
```
Welcome to MATH AND LOGIC GAMES FOR KIDS!

The MATH AND LOGIC GAMES FOR KIDS disk should have the following files:

     MLCON.EXE     ML.DOC        MENU.EXE       P1.EXE
     P2.EXE        P3.EXE        P4.EXE         P5.EXE
     P6.EXE        BRUN30.EXE    C0.COM         C1.COM        
     M0.COM        HERC.EXE      ORDER.DOC     README.DOC
     
We suggest you first print out the user's guide which is found in file 
ML.DOC.  To do this, at the DOS prompt >, type: 

     TYPE ML.DOC >PRN

This guide tells you everything you need to know about running and using 
the program.  Of particular importance, note you must run the 
configuration program MLCON.EXE before you can use the program (to do this 
enter the command MLCON at your DOS prompt).  The MLCON program will write 
two additional files to your disk:  GO.BAT and MLCON.DAT.  Once you have 
run the configuration program, the program is executed by simply typing 
GO.  We hope you enjoy the MATH AND LOGIC GAMES FOR KIDS programs.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2344

     Volume in drive A has no label
     Directory of A:\

    README   DOC      1023  11-29-89   9:59a
    ORDER    DOC      2214  11-29-89   9:55a
    MLCON    EXE      6208  11-29-89   4:21p
    C0       COM       957   1-18-87   9:55p
    C1       COM         7   9-10-86  11:54a
    M0       COM         7   9-10-86  11:55a
    HERC     EXE      5552  11-29-89   4:03p
    MENU     EXE      7520  11-29-89   8:40a
    P1       EXE     10080  11-29-89   7:12a
    P2       EXE     10704  11-29-89   7:14a
    P3       EXE      7552  11-29-89   7:37a
    P4       EXE     10896  11-29-89   7:18a
    P5       EXE     15504  11-29-89   7:20a
    P6       EXE      6960  11-29-89   7:32a
    BRUN30   EXE     70680   4-07-87  10:48a
    ML       DOC     25114  12-04-89   7:07a
    GO1      BAT        32  10-04-90   9:53p
           17 file(s)     181010 bytes
                          131072 bytes free
