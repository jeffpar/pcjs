---
layout: page
title: "PC-SIG Diskette Library (Disk #1865)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1865/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1865"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "WINNING EDGE-LOTTO"

    THE WINNING EDGE-LOTTO is a complete system of lottery game
    management, providing the eight most popular methods of lottery number
    selection and explaining the theory for each.  The program is extremely
    easy to learn and use and could improve your chances to become a better
    lotto player.
    
    Choose from a selection of lottery numbers using the eight most popular
    methods:  non-random analysis, hot numbers, cold numbers, hot & cold
    numbers, random numbers, defensive random theory, trend analysis and
    numerology.
    
    Record lottery tickets purchased and lottery numbers drawn in the past
    52 drawings.  The tickets bought will be checked for winning numbers
    after each drawing.  Statistical tools are provided to analyze past
    data.  An automatic or manual wheeling system is also available.
    
    THE WINNING EDGE-LOTTO can be used for all lotteries ranging from Pick
    Four of 40 to Pick Eight of 80.  The program is completely menu driven
    and extensively documented.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1865.TXT

{% raw %}
```
Disk No: 1865                                                           
Disk Title: Winning Edge-Lotto                                          
PC-SIG Version: S2.2                                                    
                                                                        
Program Title: Winning Edge-Lotto                                       
Author Version: 3.2                                                     
Author Registration: $35.00                                             
Special Requirements: None.                                             
                                                                        
THE WINNING EDGE-LOTTO is a complete system of lottery game             
management, providing the eight most popular methods of lottery number  
selection and explaining the theory for each.  The program is extremely 
easy to learn and use and could improve your chances to become a better 
lotto player.                                                           
                                                                        
Choose from a selection of lottery numbers using the eight most popular 
methods:  non-random analysis, hot numbers, cold numbers, hot & cold    
numbers, random numbers, defensive random theory, trend analysis and    
numerology.                                                             
                                                                        
Record lottery tickets purchased and lottery numbers drawn in the past  
52 drawings.  The tickets bought will be checked for winning numbers    
after each drawing.  Statistical tools are provided to analyse past     
data.  An automatic or manual wheeling system is also available.        
                                                                        
THE WINNING EDGE-LOTTO can be used for all lotteries ranging from Pick  
Four of 40 to Pick Eight of 80.  The program is completely menu driven  
and extensively documented.                                             
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## GO1.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║              <<<<  Disk #1865  THE WINNING EDGE-LOTTO  >>>>             ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To view documentation, type:  GO (press Enter)                          ║
║                                                                         ║
║ To print documentation, type:  COPY README.DOC PRN (press Enter)        ║
║                                                                         ║
║ To start program, type: LOTTO1                                          ║
╚═════════════════════════════════════════════════════════════════════════╝
(c) Copyright 1990, PC-SIG INC.

```
{% endraw %}

## README.DOC

{% raw %}
```
Welcome to The Winning Edge Lotto! You can read this manual by 
using the arrow keys and the [pgup] and [pgdn] keys at the right 
side of the keyboard. Press the [esc] key at any time to quit.


    ____________________________________________________________________    
    To start The Winning Edge Program: Enter [LOTTO1] at the DOS prompt.     
    To do so, you must first exit this program by pressing the [esc] key.
    ____________________________________________________________________

        
                                       
                THE WINNING EDGE LOTTERY PROGRAM       
       
                     Program Documentation       
        
                              For       
       
                     Shareware Version 3.2       
        
        
        
        
        
        
        
        
        
        
        
                         Developed By:       
        
                      Fusion Software, Inc.     
                          SUITE C-201       
                        8101 Camino Real       
                      Miami, Florida 33143       
        
   
    
    
    
    
    
    
    
    
    
    
    
 
 
 
    
        
        
        
                           DISCLAIMER       
       
All FUSION SOFTWARE products are distributed on an "as is" basis.  
FUSION SOFTWARE makes no warranties, expressed or implied,       
including but not limited to the implied warranties of         
merchantability and fitness for a particular purpose. In no event  
will FUSION SOFTWARE be liable for consequential damages even if  
FUSION SOFTWARE has been advised of the possibility of such   
damages.        
        
   
   
   
                       TABLE OF CONTENTS        
        
        
SECTION NO.                    TITLE                     PAGE NO. 
-----------      --------------------------------        -------- 
   
    1.0          INTRODUCTION                               1-1  
    
    1.1           MINIMUM REQUIREMENTS                      1-1  
   
    1.2           GETTING STARTED                           1-1   
   
    1.3           WHAT THE PROGRAM DOES                     1-2   
      
    1.4           HOW TO USE THE PROGRAM                    1-5  
     
    2.0           SELECTION OF LOTTERY NUMBERS              2-1  
    
    2.1           AVOIDING DUPLICATION OF LOTTERY TICKETS   2-1  
    
    2.2           NUMBERS MOST LIKELY TO BE DRAWN           2-3  
        
    3.0           METHODS ASSUMING RANDOMNESS               3-1  
        
    3.1           RANDOM THEORY                             3-1  
    
    3.2           DEFENSIVE RANDOM THEORY                   3-2  
        
    4.0           SELECTION METHODS ASSUMING NON-RANDOMNESS 4-1  
        
    4.1           THE HOT NUMBERS THEORY                    4-1  
       
    4.2           THE COLD NUMBERS THEORY ("DUE NUMBERS")   4-2  
           
    4.3           HOT & COLD NUMBERS THEORY                 4-4  
        
    4.4           TREND ANALYSIS THEORY                     4-4  
   
    4.5           NUMEROLOGY THEORY                         4-5  
      
    4.6           THE NON-RANDOM ANALYSIS THEORY            4-5  
   
    5.0           USING THE STATISTICAL ANALYSIS            5-1  
       
    6.0           WHEELING THEORY                           6-1  
       
    APPENDIX A    PROBABILITY EQUATIONS                     A-1  
       
    APPENDIX B    PROGRAM PROFILE                           B-1  
       
    APPENDIX C    TROUBLE SHOOTING                          C-1  
 
  
    
   
   
                           PREFACE        
        
This documentation is for the shareware version of THE WINNING   
EDGE LOTTERY PROGRAM. This version contains most of the elements 
of the commercial version of the program, except for the        
NON-RANDOM ANALYSIS METHOD, the COMPRESSED WHEELING FUNCTION, and  
some of the statistical tools.         
        
The NON-RANDOM ANALYSIS METHOD is a state of the art scientific  
method of lottery number selection. This method uses statistical  
tools to test for the presence of non-randomness in previous     
drawings, and takes advantage of it. This method also reduces the  
possibility of producing lottery tickets duplicated by other     
lottery players, including other users of this program.           
   
The NON-RANDOM ANALYSIS METHOD will perform as well as any other  
lottery number selection method available, no matter what the cost, 
or whatever claims are made of the other methods.        
   
You may obtain the latest update of THE WINNING EDGE, including  
the NON-RANDOM ANALYSIS METHOD, the COMPRESSED WHEELING FUNCTION, 
full statistical tools, and printed documentation, by sending a  
check or money order in the amount of $35.00 to:        
   
                      Fusion Software, Inc.    
                           Suite C-201      
                         8101 Camino Real       
                      Miami, Florida 33143       
        
        
        
         
        
     
     
     
     
     
     
     
     
    
     
     
     
        
               THE WINNING EDGE by FUSION SOFTWARE      
                      
        
                    SECTION 1 - INTRODUCTION      
       
       
The WINNING EDGE was designed to be easy to operate. Most users  
will be able to operate the program without having to refer back 
to this document. This document contains general lottery strategy 
information that could benefit all lottery players. Users are   
encouraged to read this document fully at least once.   
   
The program is menu driven. When a menu is displayed, the program 
user is given a list of all the program commands available. The  
user is asked to enter the item number for the desired program   
command. Alternately, the user may use the arrow keys to highlight 
the desired command, then press the enter key. The user may enter 
H for help if the user is not sure of what each command in the menu 
does. When H is entered, the program displays a description of each 
command.        
        
      
     1.1  Minimum Requirements        
 
      
          1.1.1  Hardware Required To Operate The Program        
    
          The program should operate properly on any IBM compatible 
          with 256K of free RAM or more. The program can be run   
          from either a floppy disk or hard drive. All of the files 
          that come on the program disk must be in the current   
          directory when the program is run.        
      
      
          1.1.2  Software Required        
        
          PC-DOS or MS-DOS versions 2.0 or later are required.   
          The program also requires that ANSI.SYS be loaded. If  
          you have trouble with the colors in the menus, it is   
          probably because ANSI.SYS has not been loaded. The     
          procedures for loading ANSI.SYS are given in Appendix C 
          of this manual.         
        
      
     1.2  Getting Started        
        
     The first step is to make a backup diskette of the program   
     disk. The original disk should be kept in a safe place      
     in case it is ever needed in the future.        
        
     If a hard drive is present, make a new subdirectory and     
     copy the entire program disk into it. The program must      
     be run from the new subdirectory.        
        
     The program is started by entering LOTTO1 at the DOS prompt. 
     The Main Menu is displayed whenever the program is started.  
     The program user then must enter the item number of the     
     desired command, or use the arrow keys to highlight the     
     desired command, then press [enter].        
        
     The program user may instead enter the letter H to display   
     a help screen.        
      
     1.3  What The Program Does        
       
     The WINNING EDGE is designed to be a system of lottery      
     functions to aid the lottery player. The program will carry  
     out the following:        
        
          1. Select lottery numbers for the program user to buy,  
    
          2. Make up different lottery tickets from the selected  
          numbers (also known as "wheeling"),        
        
          3. Store the lottery tickets bought by program user,   
       
          4. Store numbers drawn by the state in the lottery,    
  
          5. Check the lottery tickets bought for winning numbers,  
 
          6. Provide statistical tools for the user to analyze    
          lottery data if the user desires.        
  
  
          1.3.1  Selection of Lottery Numbers        
        
          The primary function of the program is to assist the user 
          in the selection of lottery numbers. The program includes 
          several methods of lottery number selection. Commands for 
          all of the methods are found in the "Computer Picks    
          Menu." This menu is accessed by selecting Item #1 in the 
          Main Menu. The methods included in this program are:    
 
  
               1. Non-Random Analysis Theory,        
  
               2. Hot Numbers Theory,        
  
               3. Cold Numbers Theory,        
  
               4. Trend Analysis Theory,          
  
               5. Random Numbers Theory,        
  
               6. Defensive Random Theory,        
  
               7. Numerology Theory, and        
  
               8. Wheel Your Numbers.        
  
  
  
  
          The Non-Random Analysis Theory is an original method   
          of lottery number selection that uses state-of-the-art  
          statistical methods. Program users are recommended to  
          use the Non-Random Analysis Theory for all of their    
          lottery number selections. The Non-Random Method analyses 
          the lottery for non-randomness, and if non-randomness is  
          found, will take advantage of it. Additional numbers are 
          selected in the Non-Random Analysis Method that will   
          provide lottery numbers least likely to duplicate tickets 
          purchased by other lottery players.        
  
  
          1.3.2 Generating Tickets From the Selected Numbers     
 
          Whenever any of the methods of number selection are used 
          in the program, the numbers selected are                
          automatically wheeled to produce the desired amount of  
          lottery tickets. A special wheeling method developed for  
          this program is used for the automatic wheeling function. 
 
          This special method wheels the fifteen "best" numbers  
          (for the selection method chosen) into the desired amount of 
          tickets while giving the widest possible distribution of 
          the selected numbers.  
  
          There are two other wheeling methods available in this 
          program. They are available in the "Wheel Your Numbers" 
          command in the Picks Menu. See Section 6 of this manual 
          for more information on the wheeling methods available 
          in this program.   
               
       
          1.3.3  Recording The Lottery Tickets Bought             
   
          Immediately after generating tickets the program will  
          ask if the user wants to record the new tickets. If the 
          answer is yes, the selected tickets will automatically 
          be recorded, and after the lottery drawing takes place, 
          the tickets can easily be checked for matches. All tickets
          worth money will be highlighted.  
    
          The program also provides a command to record the lottery 
          tickets generated outside of the program. That command 
          can be found in the Main Menu.        
 
          The purpose of recording the tickets bought is to allow  
          the program to check the tickets bought for winning    
          numbers after the next lottery drawing. It is not      
          necessary to record the tickets bought if you do not wish 
          to have the computer check your tickets for winners.   
        
        
          1.3.4  Recording The Numbers Drawn By The State        
       
          Many of the lottery number selection methods require   
          a historic record of the numbers drawn in the past     
          several lotteries. This record will be is termed        
          "Historic Data" throughout this document.        
                    
          When the program is shipped to the user, the Historic  
          Data contains a record of the numbers drawn in the     
          Florida Lottery. Florida Lotto players must regularly  
          record the numbers drawn in subsequent lottery drawings 
          to keep the Historic Data current.        
  
          The program provides a command to store the numbers    
          drawn. That command can be found in the Main Menu.     
          Failure to regularly record the numbers drawn by the   
          state will prevent several of the number selection     
          methods from functioning properly. The number selection 
          methods that would not function properly are:           
                 
               1. Non-Random Analysis Theory,        
  
               2. Hot Numbers Theory,        
  
               3. Cold Numbers Theory,        
  
               4. Trend Analysis Theory.        
  
          All players of lotteries other than the Florida Lotto can 
          initialize the Historic Data by recording the winning  
          numbers from their lottery for the past 20 drawings. If 
          that data is not available, then the data should be    
          recorded for each drawing until 20 drawings have        
          occurred. 

          In the meantime, the program user can use one  
          of the number selection methods that do not rely on the  
          historic data to function. These number selection methods 
          include;        
  
               1. Random Theory,        
  
               2. Defensive Theory, and        
  
               3. Numerology Theory.        
  
          Whenever you enter the Historic Data from more than one  
          drawing, the data should be entered in chronological   
          order. The data from the oldest drawing is entered first. 
          The data from the most recent drawing is entered last.  
  
  
          1.3.5  Checking The Tickets Bought For Winners          
     
          The program can check the recorded bought lottery tickets 
          after the latest numbers drawn by the state are recorded. 
          The command to check for winners is found in the Main  
          Menu. All tickets with the minimum amount of matches to 
          win any money will be displayed highlighted, and can be 
          readily picked out from the losing tickets. The matched 
          numbers in each ticket are also shown.        
  
  
          1.3.6  Statistical Tools        
  
          The user may review and statistically analyze the      
          Historic Data. Access to these commands is obtained by 
          selecting the "Statistics" command in the Main Menu.   
          Doing so will display the Statistics Menu.              

          The Statistics Menu has the following commands:        
 
               1. Historic Data,        
  
               2. Most Frequent Numbers,        
  
               3. Statistical Analysis, and        
  
               4. Statistical Utilities.        
  
          The Historic Data command will display the recorded winning tickets   
          drawn in the past 52 drawings. The winning tickets are numbered 1     
          through 52. The most recently drawn ticket is ticket #52, and the     
          oldest is ticket #1.

          The Most Frequent Numbers command displays the amount of              
          times drawn for all lottery numbers. The Statistical Analysis         
          command does a statistical analysis of all lottery numbers. The       
          probability of each number's frequency is computed. 
  
  
          1.3.7  Lottery Configuration        
  
          The program can be adjusted by the user to work for any 
          lottery from a pick 4 of 35 to pick 8 of 80. Players   
          wishing to change the existing lottery type can do so by  
          reconfiguring the program. The reconfiguration process  
          is simple, and can be done by selecting the "Lottery    
          Reconfiguration" command from the Main Menu.         
 
          1.3.8 Playing More Than One Game  
            
          The Shareware version of The Winning Edge can only be  
          used for one game configuration at a time. The commercial 
          version of The Winning Edge can play an unlimited amount 
          of different games at the same time.  
  
  
     1.4  How To Use The Program        
  
     The following steps are recommended to use this program most  
     effectively:        
  
          1. Use one or more of the number selection methods to   
          produce the desired quantity of lottery tickets *,     
 
          2. Record the tickets bought,        
  
          3. Buy the selected tickets,         
  
          4. Record the numbers drawn by the state after the next  
          drawing, and        
  
          5. Have the computer check the tickets bought for      
          winners.        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
* If the program user wishes to use his own lucky numbers       
instead, he can use the "Wheel Your Numbers" function (found in the 
Main Menu). That function can wheel up to 30 different numbers   
and produce up to 5,000,000 different tickets.        
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
          SECTION 2 - Selection Of Lottery Numbers        
       
There are two objectives to be considered when selecting lottery  
numbers:        
                                       
     1. Select the numbers with the greatest probability of      
     being drawn, and        
        
     2. Select lottery tickets with the least probability of     
     being duplicated by other lottery players.        
        
The latter objective is always overlooked by lottery players, yet 
is often more important. For that reason, we will discuss the    
latter objective first.        
        
        
     2.1 Avoiding Duplication Of Lottery Tickets With Other Players 
 
 
     Most lottery players do not realize just how important it is  
     to avoid duplication. Before you decide not to read this    
     section, ask yourself a question. Would you be so interested  
     in playing the lottery if the jackpot was only around 500   
     dollars? If your answer is no, you should definitely read this 
     section!        
        
     A study of the lottery numbers bought by players of the     
     Florida Lotto game was released in Stephen K. Doig's "Lucky  
     Numbers" column in the Miami Herald. The study analyzed     
     lottery ticket duplication in one lotto game with a total sale 
     of 26,650,115 tickets. The findings of that study are        
     astounding, and should effect the number selection methods of 
     all prudent lottery players.        
        
     The findings indicate that most lottery players buy tickets  
     that will be duplicated by others. In fact over 86% of the   
     tickets sold were duplicated by at least one other ticket.   
   
     Most players would not mind sharing the 25 million dollar   
     jackpot with a few others, but how about sharing it with    
     25,096 other players? The most popular ticket was sold 25,096  
     times. That very popular ticket was the 1-2-3-4-5-6 ticket.  
  
     The 1-2-3-4-5-6 ticket was not an isolated case of such     
     extreme duplication. There were over 600,000 different tickets 
     that were duplicated at least 1,800 times each!        
 
     How can so many different people select the same lottery     
     tickets? Most people think that their own "secret formula"   
     for selecting their numbers is unique because they created   
     the formula by themselves. After reviewing the patterns of   
     the heavily duplicated tickets in the Florida Lottery, it    
     is obvious that most people think alike. Secret formulas are 
     rarely unique.        
        
     The number selection patterns, causing the most duplication, 
     involved numbers drawn in the most recent lottery drawings.  
       
     In fact, the second most duplicated ticket was the          
     2-18-20-32-38-42 ticket. That was the same ticket that won  
     the previous drawing. That ticket was bought by 23,869 lottery 
     players. The jackpot would have paid one payment of only $523. 
     to each ticket holder.        
        
     The heavy duplication was not limited to the lottery numbers 
     drawn in the latest drawing. Tickets made up of winning      
     numbers from the most recent several drawings were highly    
     duplicated. The average duplication of combinations of recent 
     winning numbers was around 10,600 tickets each.              
  
     It is obvious that a great many people believe recent winning  
     numbers will win again. They buy tickets made up entirely of 
     recent winning numbers. It is also obvious that this is a poor 
     scheme of lottery number selection. Such tickets will not    
     produce jackpots that the ticket holders can retire on.      
      
     Another number selection scheme, that leads to heavy         
     duplication, is tickets that combine the lottery numbers drawn 
     least often in past drawings. Many people believe that all   
     lottery numbers will be drawn equally often over the long run, 
     and that those numbers drawn least often so far must be drawn 
     more often that the rest, in order to catch up. The ticket   
     made up of the least often drawn numbers was duplicated 6,106 
     times.        
                   
     The number "lucky seven" was also popular. The ticket 7-14-21- 
     28-35-42 was duplicated 20,530 times. The numbers on the     
     ticket are all multiples of the number seven.        
                   
     Another number selection scheme that leads to heavy          
     duplication involves the layout of the numbers on the game   
     form. The game form is the form that has to be filled out when 
     purchasing tickets. A large number of lottery players think  
     that filling in numbers that all lie on a column, row, or a  
     diagonal is their own secret formula. It is not secret. If you 
     select your numbers using this scheme, expect to share the   
     jackpot with about 10,000 others.        
        
     The above discussion has shown the types number combinations  
     to avoid. The Florida Lottery study also indicated those     
     individual numbers selected most often by lottery players.The  
     most popular numbers (in order of popularity ) were;         
        
     3, 13, 1, 15, 7, 2, 6, 5, 18, 4, 8, 23, 17, and 20.          
    
     Several numbers in the above list were only popular for the 
     one week of the study because they were recently drawn numbers.
     To get a list of the lottery numbers that will popular continuously,
     we will delete the recently drawn lottery numbers from the above 
     list. The list of most popular lottery numbers that will remain 
     relatively constant is;     
 
     1, 2, 3, 4, 5, 6, 7, and 8.         
        
     Try to avoid using numbers one through eight in your lottery 
     tickets!        
        
     The least popular lottery numbers were;        
        
     46, 32, 16, 14, 47, 29, 37, 10, 34, 36, 40, 45, 44, 41, and  
     39.        
        
     Of the fifteen least popular lottery numbers listed above, 11  
     of them were numbers larger than 31. There are several reasons 
     why the lowest numbers are most popular, and the largest     
     numbers least popular. Many lottery players do not select    
     their numbers until they start filling in the game form. They 
     start at the top of the form where the smaller numbers are,  
     and look for numbers that sound good to them. They pick all  
     six numbers before they get down to the larger numbers.      
 
     Another reason why numbers larger than 31 are unpopular is   
     because people use dates important to themselves to supply the 
     numbers. The months are numbered 1 through 12, and the days  
     of the month 1 through 31. Years can give numbers above 31,  
     but only years 1932 through 1949. Dates after 1949 yield     
     numbers above 49. Therefore, not many numbers taken from dates 
     will be above 32.        
        
    In summary, the following rules should be followed to reduce  
    the probability of duplication;        
        
          1. Do not buy tickets made up mostly of lottery        
          numbers drawn in recent drawings,        
        
          2. Do not buy tickets made up mostly of lottery numbers 
          rarely (or never) drawn in recent drawings,             
   
          3. Do not buy tickets made up of lottery numbers lying  
          on a row, column, or diagonal on the game form,         
     
          4. Avoid using low numbers, particularly numbers below  
          nine, and        
     
          5. Try to include several numbers above 31 on each     
          ticket.        
        
        
     2.2  Selection Of Numbers Most Likely To Be Drawn            
   
     All lottery drawings are intended to be "random drawings." A  
     random drawing is a drawing in which each lottery number has 
     an equal probability of being drawn. Lottery officials take 
     great care to provide randomness in their drawings. Non-random 
     drawings provide the opportunity for cheating, or at least the 
     suspicion of cheating.        
        
     There are no methods of number selection that can predict   
     winning numbers for truly random drawings. All methods of   
     prediction require that some of the numbers have a greater  
     probability of being drawn than the other numbers.           
   
     Lottery number selection methods can be categorized into two 
     groups; those that assume that the drawings are random, and 
     those that assume that the drawings have some degree of     
     non-randomness.        
        
     Number selection methods that assume random drawings have the 
     sole objective of avoiding duplication of lottery tickets with 
     those of other players.        
       
     Number selection methods that assume some degree of non-randomness 
     in the drawings place a higher emphasis on selecting the numbers 
     more likely to be drawn. No consideration is usually given to the 
     high degree of ticket duplication that can result.


          2.2.1  Can Randomness Occur In Lottery Drawings?       

          Most lottery drawings use a game machine to mix ping pong 
          balls which are painted with the lottery numbers. The  
          balls are mixed with jets of air within the machine.   

          Numbers are drawn by opening one of the six ducts within 
          the machine, and one of the balls is blown up each duct.  

          Most statisticians will argue that the above method will 
          provide perfectly random results. Before we accept their 
          argument, let us look at the actual physics of the     
          process.        

          At the time that one of the ducts is opened, several   
          balls  will be near the entrance to the duct. If one of 
          the nearby  balls was lighter and/or had more drag (an 
          aerodynamic   characteristic), that ball would be more 
          likely to beat the  other balls to the duct. Therefore, 
          that ball would have a higher probability of being drawn. 

          The weight of each ball can effect its probability of  
          being drawn. The lighter balls will accelerate faster  
          than heavier balls when a duct is opened. The weight of 
          each ball is always monitored by the lottery officials. 

          The balls are weighed, and must be within a prescribed 
          weight range, or the ball will not be used in the      
          drawing. Usually the balls are weighed before they are 
          painted with the lottery numbers. Because each lottery 
          number will require a different amount paint, the      
          weights of the balls will vary more than expected by    
          the officials.        

          The aerodynamic characteristics are not controlled by the 
          lottery officials. A ball with more "drag" than the    
          others will accelerate faster than the others and, thus 
          have a higher probability of being drawn. The amount of 
          drag a ball has depends on the shape and smoothness of 
          the balls surface. Each ping pong ball is made up of two 
          molded halves that are  glued together. The smoothness 
          of each seam varies from ball to ball. This type of    
          construction also allows for slight variations in shape 
          from ball to ball. Such variations can lead to sig-     
          nificant differences in drag among the balls.           

          There are two types of flow regimes in aerodynamics;    
          turbulent and laminar. Laminar flow can create up to 10  
          times more drag than will turbulent under the same      
          conditions. There are certain factors that will determine 
          whether turbulent or laminar flow will occur under the  
          same circumstances. The roughness of an object's surface 
          will determine which flow regime will occur.            

          A ball with a rough seam, and a shape slightly out of   
          round, would tend to rotate and form turbulent flow over 
          the ball's surface. Such a ball will have less drag and 
          thus, a lower probability of being drawn.        

          Another factor that will determine the probability of   
          being drawn is the degree of bounce of each ball has. A 
          ball with more bounce than the others will get away from 
          the game machine walls and floor faster than the others, 
          and will more often be in a position near the entrance  
          to a duct.        

          The bounce can vary significantly among ping pong balls.  
          The degree of bounce depends upon; the thickness of the  
          ball's skin, the pressure when the ball was sealed, and  
          how airtight the ball is.        

          The above discussion indicates that although lottery    
          drawings usually achieve a high degree of randomness,   
          that it is unlikely that any drawing is exactly random. 

          The probability of each ball being drawn is determined  
          by three major factors, two of which are not monitored  
          or controlled in most lotteries. The three major factors 
          that determine the probability that a ball will be drawn 
          are;        

               1. The weight of each ball,        

               2. The aerodynamics of each ball, and              

               3. The degree of bounce in each ball.              

          The above discussion is not intended to prove that      
          significant non-randomness will occur, but only points 
          out the possibility that some lottery numbers could have 
          a significantly higher probability of being drawn than 
          the others. The above factors will usually cancel each 
          other out; a ball that has one or two of the            
          characteristics improving its probability of being drawn  
          will be cancelled out because the other factor is not   
          present. Occasionally, a ball will have all of the      
          favorable factors, and then may have a significant      
          probability of being drawn.        
                      
                      
        
        
        
        
        
        
        
        
     SECTION 3 - Number Selection Methods Assuming Random Drawings  
          
This section of this document describes those number selection   
methods included in the program that assume that the lottery     
drawings are random. All lottery numbers have equal an       
probability of being drawn in each random drawing, thus no methods 
can exist to improve your odds of winning the jackpot. The emphasis 
of all random lottery number selection methods should be to avoid  
any duplication of tickets with other players.        
               
The random theory states that all lottery tickets have an       
equal chance of being drawn. Many so-called lottery experts make  
all sorts of inaccurate claims that you can improve your odds    
of winning. One such claim is that all of your tickets should    
include an equal amount of odd and even numbers. This is not true.  
A ticket with all odd numbers has the same probability of winning  
as any other ticket, no matter how many even numbers the other   
ticket might have.        
               
Another inaccurate claim has been that each of your tickets      
should  have an even mixture of high and low numbers. Again, this 
is not true. A ticket with all high numbers has the same      
probability of being drawn as any other ticket.         
 
      
     3.1  Random Theory        
       
     The Random Method is very simple. The computer randomly     
     selects lottery numbers and assembles them into the desired 
     amount of tickets. It is recommended that you let your      
     computer select the numbers, rather than doing it yourself. 
     
     Humans tend to have subconscious biases toward numbers that 
     could lead to heavy duplication. You will recall from Section 
     2.1 that there is a definite tendency for people to select  
     some lottery numbers over others.        
     
     
     3.2  Defensive Random Theory        
       
     The Defensive Random Method is similar to the Random Method.  
     This method however, takes into account the popularity of   
     each of the lottery numbers. This method will not select those 
     numbers that are most often used by people, and it has a    
     built-in bias toward selecting those numbers that were least 
     often selected by people.        
        
     This method has an advantage over the Random Method in that  
     lottery tickets are produced that are least likely to be    
     duplicated by other lottery players.        
                  
        
     SECTION 4 - Number Selection Methods Assuming Non-randomness  
 
  
   
    
          
This section will describe those number selection include in the 
program that assume some degree of non-randomness in the  
drawings.        
        
      
     4.1  the Hot Numbers Theory        
       
     The Hot Numbers method of lottery number selection theorizes  
     that those numbers, that have been drawn most often in the  
     past, were drawn most often because they have a higher      
     probability of being drawn. Lottery numbers with higher     
     probabilities are termed "Hot Numbers."        
        
     This method of number selection is relatively simple: count 
     how many times each lottery number has been drawn recently, 
     and use those drawn most often to make up as many lottery   
     tickets as desired.        
                  
     The Hot Numbers Method fails to recognize that, even in a   
     drawing with some degree of non-randomness, that most of the 
     Hot Numbers were drawn often due to chance, rather than due 
     to having a higher probability. The Hot Numbers Method blindly 
     selects all numbers drawn most often.        
        
     Section 2.1 of this document pointed out that a great many   
     lottery players use this method. Making up lottery tickets  
     from recently drawn numbers typically results in tickets being 
     duplicated as many as 26,000 times.        
        
     Because this method has not produced unusually good results,  
     and because the enormous amount of lottery ticket duplication, 
     this is probably the worst method that one can use to select  
     lottery numbers.         
     
     
     4.2  Cold Numbers Theory (also called "Due Numbers Theory")  
     
     A postulate of the Theory Of Probability is the basis of the 
     Cold Numbers Theory. The Theory Of Probability, when applied 
     to a random lottery, states that the "relative frequency" of 
     each lottery number will approach approximate equality as the 
     number of drawings increases. The term "relative frequency" 
     is defined in the equation:        
        
     Relative Frequency = (times number was drawn) / (amount of  
     drawings)       
       
     The Cold Numbers Theory concludes that those lottery numbers  
     drawn less often in the past, must be drawn more often in the  
     future, if The Theory of Probability is to hold true.       
       
     The Cold Numbers Theory may seem logical, but it is based on  
     a misconception. The Theory of Probability would predict, in  
     random drawings, that all lottery numbers will be drawn     
     equally often (not more often) in the future, no matter how  
     often each number was drawn in the past.        
                   
     The following example can explain how the relative frequencies 
     of two lottery numbers can approach equality, while at the   
     same time, the numbers are drawn equally often:             
     
     
     
     
     
     
  
     
     
     
                           EXAMPLE        
        
        
Assume that after 10 drawings, the lottery number 1 was drawn once. 
And assume that the lottery number 2 was drawn five times. Compute 
the relative frequencies:        
        
Relative Frequency of Lottery No. 1 = 1 / 10        
                                    = 0.100000000        
                                      -----------        
        
Relative Frequency of Lottery No. 2 = 5 / 10        
                                    = 0.500000000        
                                      -----------        
        
The Cold Numbers Theory predicts that Lottery Number No. 1 must be  
drawn more often than No. 2, if the relative frequencies  of the  
two numbers are to approach equality. However, this example      
demonstrates that the two relative frequencies will approach 
equality, if the two numbers are drawn equally often in    
subsequent drawings.        
        
Now assume that, after another 1,000,000 drawings, both lottery   
numbers were drawn equally often, say 100,000 times.              
 
Now compute the relative frequencies:        
                    
Relative Frequency of Lottery No. 1 = (1+100,000)/(10+1,000,000)  
                                    = 0.100000000        
                                      -----------        
        
Relative Frequency of Lottery No. 2 = ( 5+100,000)/(10+1,000,000)  
                                    = 0.100004000        
                                      -----------        
        
Observe that the relative frequencies of the two lottery numbers 
in the above example became almost equal after 1,000,000 drawings, 
even though the relative frequencies differed considerably after 
the first ten drawings.        
 
 
 
 
 
 
 
 
 
 
 
 
 
  
     
     The Cold Numbers Method is relatively simple: count the amount 
     of times each lottery number was drawn recently, and use those 
     numbers drawn least often, to make up as many tickets as    
     desired.        
                   
     The Cold Numbers Theory has no validity, and suffers from a  
     severe problem with duplication of lottery tickets. In      
     addition, if there is significant non-randomness in the      
     lottery drawings, this method will select those numbers least  
     likely to be drawn.        
        
     In summary, do not use this method!        
                   
                   
     4.3  Hot & Cold Numbers Theory        
       
     This method of lottery number selection is a mixture of The  
     Hot Numbers Theory and The Cold Numbers Theory. Each lottery 
     ticket includes some "Hot" numbers and some "Cold" numbers.  
    
     The one advantage that this method may have over the Hot    
     Numbers Method is that there will be less duplication of    
     lottery tickets with the other lottery players.              
  
     Program users wishing to use this method can do so by using  
     the "Wheel Your Numbers" function in the Generate Numbers   
     menu. The "Wheel Your Numbers" function lists the fifteen   
     hottest and fifteen coldest numbers based on the recent     
     drawings. The user can use these as a guide for choosing    
     numbers to wheel.        
        
     
     4.4  Trend Analysis Theory        
      
     Veteran lottery players have noted that several lottery     
     numbers will seem "hot" for a while, then they seem to cool  
     off. Then a new set of "hot" numbers will appear. The Trend  
     Analysis Method recognizes that phenomenon, and tries to find  
     the new set of "hot" numbers sooner than the Hot Numbers    
     Method can.        
        
     The Trend Analysis Method selects lottery numbers by comparing 
     the numbers drawn in the latest eight drawings to the numbers  
     drawn in the previous eight drawings. Those lottery numbers, 
     whose frequency of being drawn increased the most, are      
     selected.        
       
        
     4.5  Numerology Theory        
        
     Many people believe that numbers rule their lives. They feel  
     that everyone has numbers associated with their name, and   
     birthdate, and that their personality and fortunes have been 
     determined by those numbers since birth.        
                  
     Although this theory does not have a large following, this  
     Method has been included in The Winning Edge as a source of  
     novelty and amusement.        
        
     Five different lottery tickets will be produced for each name  
     entered. Each ticket is assembled from the person's name,   
     birth number, and month number. When entering your name, enter 
     your entire name exactly as it appears on your birth        
     certificate.        
        
        
     4.6  The Non-Random Analysis Theory        
        
     This method overcomes a major problem that other non-random 
     methods do not even recognize: High probability lottery     
     numbers have been drawn frequently in past lottery drawings, 
     and making up lottery tickets from the numbers most frequently 
     drawn in the past, leads to lottery tickets duplicated by an 
     average of over 10,000 other lottery players.        
        
     Most of the lottery numbers that were frequently drawn in past 
     drawings, were drawn frequently by chance, rather than because 
     the numbers had higher probabilities of being drawn. The    
     lottery numbers drawn frequently drawn in the past due to   
     chance, should not be incorporated into your lottery tickets. 
     
     Such numbers will not improve your odds of winning the       
     jackpot. However, they will significantly improve your odds 
     of duplicating the lottery tickets of many other lottery    
     players.      
     
     The NON-RANDOM ANALYSIS METHOD uses a statistical analysis to  
     distinguish between those lottery numbers drawn frequently   
     due to chance from those drawn frequently due to having higher 
     probabilities of being drawn.        
        
     The method first assumes the drawings to be random, then    
     analyses the frequency of each lottery number for           
     non-randomness. The probability, that a lottery number will 
     be drawn a given amount of times (or more) in a specified   
     amount of drawings, is computed from the equations in Appendix 
     A of this document.        
    
     If it is found, that a lottery number was drawn so often, that 
     it is too improbable that it could have been drawn so often  
     by chance, such lottery number is assumed to have a          
     probability of being drawn that is greater than average.    
     
     Lottery numbers are assumed to non-random if the probability 
     of their frequency by chance is 2.5% or less. Such lottery  
     numbers are selected by this method.        
        
     Each lottery ticket produced by this method will include    
     several lottery numbers selected using the Defensive Random 
     Method. This is done to reduce the likelihood that any of the 
     tickets will duplicate the lottery tickets of other lottery 
     players. This method will also protect the program user from 
     duplicating the lottery tickets of other players using this 
     same program. No other computer program for lotteries provides 
     the program user the same protection.        
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
    
   
          SECTION 5 -  USING THE STATISTICAL ANALYSIS  
  
This section is provided to give the program user an understanding 
of the statistical analysis command. The command is invoked by  
selecting Item No. 3 from the Statistics Menu.  
  
After selecting the command, the program asks the user for the  
amount of drawings to be analyzed. The drawings analyzed are always 
the most recent drawings stored in the Historic Lottery Data. You 
must regularly record the lottery numbers drawn after each lottery 
drawing to keep the Historic Lottery Data up to date.  
  
The statistical analysis performed by the program computes the  
likelihood that each lottery number has been random. The results 
are displayed on the screen, and may also be printed.  
  
Of all the statistical data displayed, the user need only be  
concerned with the odds against each number being random. The far 
right column on the screen, titled "ODDS" contains the odds for  
each lottery number.  
  
Lottery numbers with ODDS against greater than 19 to 1 are  
considered to be non-random numbers by this program. Such numbers 
should be played on your lottery tickets. This statistical method 
is similar to those used in most scientific studies throughout the 
world. The method does not prove that the selected numbers were  
non-random, but does show a strong likeliness that they could be. 
 
The program user does not need to use this command in the  
Statistics Menu to use the Non-Random Analysis Method. The user can 
have the calculations done automatically each time numbers are  
selected by the program using the Non-Random Analysis selection  
from the Picks Menu.  
     
     
     
     
     
     
     
     
     
     
     
     
  
  
  
  
  
  
  
  
  
                   SECTION 6 - WHEELING THEORY  
  
The process of wheeling numbers is simply defined as "making
tickets from the lottery numbers that the lottery player has
better-than-average odds of being drawn." There are numerous
methods of wheeling. The shareware version of The Winning Edge
includes two different methods of wheeling. The commercial
version includes one additional method.

Many so-called lottery experts claim that their "own" wheeling
systems will increase your odds of winning money. In a truly
random lottery, no method of wheeling can increase your odds. If
there is any degree of non-randomness in the lottery, wheeling
methods can improve the odds of winning. The degree of
improvement depends upon the degree of non-randomness in the
lottery. 

The easiest wheeling method to understand is the "Full Wheel."
This method makes a ticket for every possible combination of the
lottery numbers being wheeled. The problem with using this
wheeling method is that a small amount of numbers being wheeled
will generate an extremely large quantity of tickets. As an
example, in a pick 6 of 49 lottery, by wheeling only 9 numbers, 
84 tickets will be generated. If you think that there are only a
few lottery numbers with higher odds of being drawn, you should
use this method. If too many tickets are generated, do not buy
all of them.

The "Full Wheel" method can be found in the "Wheel Your Numbers"
command in the Picks Menu of this program. This program can wheel
up to 30 different lottery numbers, and generate up to 5,000,000
different tickets by using the "Full Wheel" method.

The second wheeling method provided in this program is the "Fixed
Amount" wheel. This method will generate the widest possible
distribution of your lottery numbers into the quantity of tickets
selected by you. This method is used for all automatic wheeling
provided in this program. This method should be used when you
want to wheel a lot of lottery numbers, but do not want a
humongous quantity of tickets.

A third wheeling method provided in the commercial version of
this program is called the "Compressed Wheel." This method can
wheel up to 30 lottery numbers, but will not generate near as
many tickets as the "Full Wheel." The "Compressed Wheel" will
generate the minimum amount of tickets required to cover all
possible matches of less than that required to win the jackpot.

The method of wheeling chosen will have a large effect on how
often the program user will see matches on his tickets. The more
different lottery numbers wheeled, the greater will be the odds
that some of the lottery numbers will match the drawing. 














                           APPENDIX A      
        
                      PROBABILITY EQUATIONS      
      
                           EQUATION 1      
        
     The probability of drawing any specific lottery number in a 
     single drawing is p, where:        
        
          p = (amount of numbers drawn) /(total numbers in       
          lottery)

          P (for a pick six of 49 lottery) = 6/49 = 0.1224489796 







                          EQUATION 2        
        
     The probability of drawing a specific lottery number exactly
     "y" times in "n" drawings:        
                                         y    (n-y)        
     Probability = (n!/((y!)(n-y)!)) x p  x q                    


     where:        

          p = same as above        

          q = 1-p        

          n = total amount of drawings        

          y = amount of times specific lottery number was drawn  







     The probability of drawing a specific lottery number "y"    
     times or more is computed using the above EQUATION 2. The   
     probability is computed as the sum of the probabilities for 
     for each frequency of y times through n times.        

                        
        
        
    
    
    
    
    
        
        
        
                          APPENDIX B        
        
                        PROGRAM PROFILE        
        
               WINNING EDGE - LOTTO  Version 3.1        
      
        
     PROGRAM SUMMARY: WINNING EDGE - LOTTO is a complete system  
     of lottery game management. The program is extremely easy to 
     learn and use. The program provides the eight most popular  
     methods of lottery number selection, and explains the theory
     for each method in the 35 pages of program documentation.   
     The program provides the following functions;       
       
          1. Can select lottery numbers using any of the eight   
          most popular methods,        
        
          2. Records the lottery tickets bought,       
       
          3. Records the lottery numbers drawn in the past 52    
          drawings,        
        
          4. Checks the tickets bought for winning numbers after 
          each drawing,        
                                   
          5. Provides the lottery players with statistical tools 
          to analyze past lottery drawing data, and      
        
          6. Provides automatic or manual wheeling system.       
 
        
     USAGE: Can be used for all lotteries ranging from PICK FOUR 
     of 35 to PICK EIGHT of 80.        
        
     SYSTEM REQUIREMENTS: 256K of free RAM, one disk drive,      
     monochrome/color        
        
     FEATURES: Fully menu driven with on-screen help             

  
     HOW TO START: Enter "LOTTO1" at the DOS prompt to run
     program. 
                   Type "BROWSE README.DOC" to read program      
                   documentation.         
        
     SUGGESTED SHAREWARE DONATION: $35.00, includes printed 
     manual. 



    
    
    
    
    
    
    
    
    
     FILE DESCRIPTIONS:        
        
     LOTTO1  EXE   Main Program        
        
     LOTTO   BGT   Stored bought tickets        
        
     LOTTO   ACT   Stored data from past 52 lottery drawings     
       
     LOTTO   CNF   Stored program configuration        
        
     README  DOC   Text file containing program documentation    
       
     TMSRMN  FON   Utility file        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
    
  
                          APPENDIX C        
        
                       LOADING ANSI.SYS        
         
        
ANSI.SYS is a program that is part of the DOS system. You can    
find this program on the Supplemental Programs disk of DOS.      
If you have a color monitor, the ANSI.SYS program must be loaded 

before running The Winning Edge. If you do not have a color      
monitor, you do not need to load ANSI.SYS.         
        
If you run The Winning Edge with a color monitor without ANSI.SYS 

loaded, you will have problems selecting from the menus because  
the color highlighting will not be operating properly. You could 

make do by selecting menu items by entering the item number of
the  
desired command, however it would much more desireable to set up 
your computer to automatically load ANSI.SYS whenever your
computer 
boots.        
        
To set up your computer to automatically load ANSI.SYS do the    
following:        
        
     1. Locate your DOS disk with ANSI.SYS on it,        
        
     2. Look in your root directory to see if you have a file    
     called "Config.sys" and if you do not have such a file,     
     create it with any word processor program,        
        
     3. Add the command "device=ansi.sys" to the config.sys file 

     (do not type the quote marks),        
        
     4. Make sure the Config.sys file is put in the root
     directory, 
        
     5. Reboot the computer. Do not expect The Winning Edge to   
     operate until after you reboot.        
        
        
              

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1865

     Volume in drive A has no label
     Directory of A:\

    LOTTO1   EXE    236362   8-14-90   5:36p
    LOTTO    BGT      1260   8-14-90   5:40p
    LOTTO    ACT      2630   8-12-90   2:39p
    LOTTO1   CNF        40   8-14-90   5:40p
    TMSRB    FON     45936   2-10-90   4:33p
    README   DOC     56870   8-15-90   7:45a
    BROWSE   COM       958   1-02-80   1:52a
    GO       BAT        19   8-14-90   5:50p
    FILE1865 TXT      2517   8-29-90   5:55p
    GO1      TXT       729   1-01-80   9:50a
    GO1      BAT        39   1-01-80   1:40a
           11 file(s)     347360 bytes
                            9216 bytes free
