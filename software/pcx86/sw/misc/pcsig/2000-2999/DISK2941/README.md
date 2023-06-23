---
layout: page
title: "PC-SIG Diskette Library (Disk #2941)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2941/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2941"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## FILES294.TXT

{% raw %}
```
Disk No: 2941                                                           
Disk Title: Ultimate Geography                                          
PC-SIG Version: S1.0                                                    
                                                                        
Program Title: Ultimate Geography                                       
Author Version: 11/91                                                   
Author Registration: $15.00/$30.00                                      
Special Requirements: 512K RAM and EGA/VGA. Supports a mouse.           
                                                                        
ULTIMATE GEOGRAPHY was written to help students or anyone rusty on their
geography learn the states and capitals of the United States. All states
and their capitals can be quizzed and top scores retained. General      
information on each state is also included, such as population, size,   
trivia, industries, crime, marriage, births, divorce, and death. Sharp  
graphing functions additionally display similarities and differences    
between the states.                                                     
                                                                        
ULTIMATE GEOGRAPHY provides both students and teachers with an abundance
of useful information. All statistical information used in the program  
is current as of 1990.                                                  
                                                                        
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## GEOGRAPH.TXT

{% raw %}
```


















                              Ultimate Geography

























                                                                Distributed by:

                                                              Ultimate Software
                                                                 P. O. Box 2454
                                                          White City, OR  97503
                                                                 (503) 830-0501

                       Programming by Richard W. Watson

             Documentation by Richard W. Watson and Tom Knackstedt

                         Copyright and distribution by
                               Ultimate Software
                                P. O. Box 2454
                             White City, OR 97503
                            (503) 830-0501 (voice)


Program and Documentation Copyright 1991 Ultimate Software.  All rights
reserved.


Ultimate Geography is a trademark of Ultimate Software.
PC, PC XT, PC AT, PS/2 are trademarks of IBM Corporation.



                               ACKNOWLEDGEMENTS


We at Ultimate Software couldn't possibly produce products like this one
without help.  We would like to thank the following people:

     A special thanks to Mike for making this all possible.
     To Pat who has listened even when she had no idea what I was talking
     about, or why.
     To Tom for his excellent beta testing and advice.
     To Thomas for taking over my other responsibilities.
     To Mike Smedley and SoftC, Ltd. who developed The C Extended Library and
          The SoftC Database Library that made coding so much easier.



The following tools were used in creating this software:
     
     Compilers:          Borland C++ 2.00, and Borland Assembler 2.0.
     Libraries:          The C Extended Library from Mike Smedley and
                         TesSeRact, SoftC Database Library from SoftC, Ltd.
     Debuggers:          Borland Turbo Debugger 2.0, and Borland C++
                         Interactive Development Environment.


TABLE OF CONTENTS

     Introduction . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1
     Registration Information                                              1, 9
     License Agreement. . . . . . . . . . . . . . . . . . . . . . . . . . . . 2
     Technical Support                                                        4
     Program Features . . . . . . . . . . . . . . . . . . . . . . . . . . . . 4
     Installation                                                             5
     Execution  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6
          FILE                                                                6
          QUIZZING. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 7
          STATE INFO                                                          7
          GRAPH . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 8
     Registration Benefits & additional information                           9
Introduction                                                            Page 1

     Welcome, and thank you for trying Ultimate Geography.

     Ultimate Geography was designed to help you learn about the United States,
     while also including a wide variety of general information.

     You'll find Ultimate Geography is full of interesting statistics about all
     50 states, while still holding on to an excellent quizzing system. 
     Capitals as well as State names can be quizzed, and all of the states have
     information about their population, size, trivia, industries, crime,
     marriage, births, divorce, and death.

     Ultimate Geography is being distributed through Shareware, which allows
     you to test out a program before purchasing it.  Further explanation of
     Shareware and Registration can be found on this page.

     In the following pages you will learn how to install and use Ultimate
     Geography to its full benefit.


Registration Information

     Ultimate Geography is a copyrighted program protected by all applicable
     U.S. and International copyright laws.  If you have obtained this copy
     from a shareware disk vendor, an on-line computer service or bulletin
     board, a friend or colleague, or any similar source, you have the trial
     (unregistered) copy.  You are allowed to use this copy without charge for
     a limited time as specified under the license agreement.  After this time,
     you must register in order to continue using Ultimate Geography legally.

     This method of distribution is known as Shareware, a distribution concept
     begun by Jim Button.  It allows you, as a user, to evaluate the software
     in your own home to make sure it meets your needs before you pay for it.

     The registration fee for Ultimate Geography is only $15.  Payment of this
     fee entitles you to:

          A disk with the latest version of Ultimate Geography, registered
          directly to you.

          An upgrade to the next major release of Ultimate Geography.

          Technical Support via telephone or selected Electronic Bulletin
          Boards.

          Notification of other programs within the Ultimate Software Library.
Registration Information (continued)                                    Page 2
     Or, you can take the teacher/student option for $30.  Payment of this fee
     entitles you to:

          A disk with the latest version of Ultimate Geography, registered
          directly to you, with all of the features listed above.

          Tracking features that will keep track of every test taken, students
          name, their score, the date and time.

          Report features that include the ability to display or print reports
          for individuals, a certain date, a particular score, a wide variety
          of selections exists.


Ultimate Geography's License Agreement

     (1)  Copyright:  This program and documentation are Copyright Ultimate
     Software 1991, and are protected by U.S. and International copyright laws. 
     You are granted a license to use your copy of Ultimate Geography under the
     terms and conditions specified in this license agreement.

     (2)  Definitions:   Ultimate Geography is being distributed in three
     forms: 1.  The "registered" copy being distributed on diskette from
     Ultimate Software, with a unique serial number and the words "Registered
     Version" appearing on the diskette label.  2.  The "registered" copy being
     distributed for teachers or students from Ultimate Software, with a unique
     serial number and the words "Registered Version - T/S" appearing on the
     diskette label.  3.  A "shareware" copy being distributed via electronic
     bulletin boards, on-line services, shareware disk vendors, or another
     individual.  This copy will include the shareware notice when you exit the
     program.

     (3)  Shareware Copies:  Shareware copies are distributed to allow you to
     try the program before you pay for it.  These copies are still Copyright
     Ultimate Software 1991.  These copies are not to be confused with "public
     domain" or "free" software.  You are allowed to use the shareware copies
     for a trial period of 30 days.  Once the trial period is over, you are
     required to register with Ultimate Software for $15 or $30.
     
     (4)  Registered Copies:  Registered copies are only distributed to those
     persons who have purchased them through Ultimate Software or an authorized
     reseller.  Your registered copies may only be used in accordance with the
     License agreement and any additional specifications defined within
     enclosed documents.  (In other words, for site licenses.)

     (5)  Use on Networks or Multiple Systems:  A site license agreement will
     accompany your copy of Ultimate Geography if you have purchased one.  The
     number of "users" permitted will be defined within this document.  If you
     did not purchase a site license agreement, then you are limited to one
     "user".
License Agreement (continued)                                           Page 3

     (6)  User:  A computer on which Ultimate Geography is installed,
     regardless of whether the user is aware of this installation.

     (7)  Copying Ultimate Geography:  
          Registered Users:
               You may make as many copies of Ultimate Geography as you require
               for your own backup purposes.  No copies of the REGISTERED
               version shall be distributed by you or anyone acting in your
               behalf (employees, etc.) to anyone who has not purchased
               Ultimate Geography.  You may create and distribute an unlimited
               number of copies of the UNREGISTERED version(s) to anyone you
               wish as long as the maximum billed amount does not exceed $6.00
               (US) for this program, documentation, and any other
               "accompanying" parts related directly to this program.
          Unregistered Users:
               You may make as many copies of the UNREGISTERED version(s) to
               give / distribute to anyone you wish as long as the maximum
               billed amount does not exceed $6.00 (US) for this program,
               documentation, or any other "accompanying" parts related
               directly to this program.

     (8)  Distribution:  You MAY NOT attempt to distribute this program with
     the intent of mass production for the public without prior written
     permission by Ultimate Software.  You MAY create individual copies for
     friends or associates for their individual use.  If you are a bulletin
     board system or shareware disk vendor:  you may not distribute this
     diskette without prior written permission of Ultimate Software unless you
     are part of the Association of Shareware Professionals and are approved by
     the ASP for distribution.

     (9)  Limited Warranty:  Ultimate Software warrants to the owners of
     registered copies of Ultimate Geography that the software will operate as
     described in the documentation, and that the diskette and manual will be
     free of defects which interfere with normal use.  This warranty is valid
     for 90 days from the date of purchase from Ultimate Software.  During this
     warranty period, Ultimate Software will, at its option, repair or replace
     any defective item(s) or refund the purchase price of any defective
     item(s), if such defect is found to be the fault of Ultimate Software and
     not the result of misuse or abuse beyond "standard" use.  In no event will
     Ultimate Software be held accountable for any financial amount exceeding
     the purchase price of this package.

     (10)  Guarantees:  If you are not satisfied with the registered copy of
     Ultimate Geography, you may return the entire package at any time up to 90
     days after the date of purchase to Ultimate Software for a full refund. 
     This applies even if you have found no software defects.  
Technical Support                                                       Page 4

     Technical support is available to registered users.  If you are evaluating
     a shareware version of Ultimate Geography, we will be available to answer
     questions about installation, however, we cannot provide continuing
     support until you register.  We have found that most of the questions
     asked can be answered in the documentation, so please be sure to review
     all of the documentation before calling.

     The best way currently to contact us for support is by phone.  We are
     considering setting up support areas on other Bulletin Board Systems;
     however, this support is not currently in effect.  You can find our
     telephone number at the beginning of this documentation.


Program Features

     Ultimate Geography was written to help young geography students learn the
     states and capitals; however, in testing this we found that it wasn't just
     the young students who needed to learn the states.  As the program
     developed, we chose to include statistical information about each of the
     states as well as graphs of those statistics.  Additional features will be
     added as they are requested or as we develop them.  The following features
     are currently available in the shareware version:

     Quizzing of both States and Capitals:
          The early version included these functions.  All states and their
          capitals can be quizzed using the Quizzing selection in the main menu
          appearing at the top of the screen.  The top 10 scores will be
          maintained in the file SCORES.DAT.  Delete this file to clear the top
          10.

     Graphs and statistics:
          There are statistics that can be viewed for individual states in the
          following categories:
               Population 1960-1990.
               Population Distribution.
               State Size.
               Crime Statistics.
               Trivia / Industries (Includes where to find travel info).
               Births / Deaths.
               Marriage / Divorce.

          There are also graphing functions that can be used to show the
          differences between all of the states.

     Mouse Support:
          Almost any Microsoft or Logitech compatible mouse will work with the
          program.
Installation                                                            Page 5

     Ultimate Geography was written for the IBM PC, PC/XT, PC/AT, PS/2, and
     compatibles.  It requires EGA or VGA compatible graphics, MS/PC-DOS 2.0 or
     above, and at least 512K on your machine, free ram should be slightly
     above 300K.

     Files

     The files listed below should be included with your shareware version, or
     copy you receive:

     GEOGRAPH.EXE        This is the shareware version of Ultimate Geography.

     GRAPH.CNF           This file contains configuration information and a
                         copy of the registration sheet.  You may view/print
                         this sheet from within the program.

     MAP.DAT             This file holds the information for building the map.

     RANGE.DAT           This file holds range information for graphing.

     STATE.DAT           This file has statistical information on each of the
                         50 states.

     STATET.DAT          This file holds text data for each of the 50 states,
                         such as the state's motto, bird, travel information,
                         etc.

     EGAVGA.BGI          This file is a device driver for the EGA/VGA graphics
                         interface used to create this program.

     LITT.CHR            This file is a character description file used by some
                         of the graphics characters in this program.

     SCORES.DAT          This file is optional, in otherwords, it may or may
                         not exist.  It contains the top 10 scores under both
                         states and capitals.

Execution

     This program was designed around a main bar menu located at the very top
     of the screen.  This menu area is not the only area used for menuing;
     however, the arrow keys will move you around the menu and allow you to do
     anything that you could do with a mouse.  A mouse, if you have one, will
     allow you to simply point and click on what you want.  If you have a mouse
     and didn't load it, the computer will remind you that it doesn't find a
     mouse.
Execution (continued)                                                   Page 6

     MAIN MENU

     The main menu consists of the following areas.

     File           ->   This is where you can exit the program or view the
                         registration form.

     Quizzing       ->   This area allows you to select if you would like to be
                         quizzed on states or capitals.

     State Info     ->   This area will allow you both to select a state and to
                         display information on the state.

     Graph          ->   This area allows you to select an area to graph.  This
                         selection also contains a 'Re-draw Map' function in
                         the event that anything happens to the map.


     In order to discuss each section, I will follow each of them to the end
     and then come back to the others.  Therefore, here is a cross-reference
     table to the beginning of other menu selections:

          QUIZZING                           Page 6.
          STATE INFO                         Page 7.
          GRAPH                              Page 8.

     FILE

     Highlighting "File" and pressing Enter or simply clicking on the word
     "File" with your mouse will pop-'down' a menu with the following
     selections:

          ABOUT
          REGISTRATION
          MAIN MENU
          QUIT

     Selecting "About" will show you what version of the program you have.  In
     the event that you are having any kind of problem, please make sure you
     know what version you are using when you call technical support.

     Selecting "Registration" will pop-up a yes or no box in the middle of the
     screen.  It will ask you if you would like a copy of the registration form
     printed.  If you select "Yes", please make sure you have enough paper in
     your printer and your printer is on-line.  If you select "No" another box
     will pop-up asking if you would like to view the registration form on
     screen.  If you select "Yes", you will be dropped into text mode and shown
     the entire registration form, afterwards, the computer will restore the
     map and return you to the main menu.
FILE selection (continued)                                              Page 7

     Selecting "MAIN MENU" has the same effect as the right mouse button or
     pressing the ESC key on your keyboard.  "MAIN MENU" will appear on all of
     the menus and operate as described here.

     Selecting "Quit" will bring up a box to make sure you want to quit, at
     which time you can select "Yes", "No", or "Cancel".  No and Cancel have
     the same effect, leaving you in the program.  If you press the ESC button
     from the main menu, it will be the same as selecting "Quit" in that it
     will bring up the "Yes"/"No" box.


     QUIZZING

     When you select "Quizzing" from the main menu, you will see the following
     selections appear directly below it.

          STATES
          CAPITALS
          MAIN MENU

     When you select either "STATES" or "CAPITALS" a box will appear and ask
     you if you would like to see how long the answer is?  When you have
     selected "Yes" or "No" ("Cancel" will return you to the main menu) a box
     will appear asking you to enter the "STATE" or "CAPITAL".  If you have
     selected "Yes" to the question earlier, you will have a box that is only
     as long as the answer.  When the cursor disappears, you have entered
     something as long as the box.  When you complete the test or if you press
     ESC a box will appear showing you the high scores.  If you have finished
     the test and your score is better than one of the ones currently in the
     high score list, a box will pop up and ask you for your name.  You will be
     added to the list of high scores. 

     The top 10 high scores are held on disk in a file called SCORES.DAT, if
     you wish to clear the top 10, simply delete this file.  The program will
     create another one the next time you load the program, and all of the
     scores will be cleared.


     STATE INFO

     If you select "State Info" from the main menu, you will see the following:
          SELECT STATE
          DISPLAY INFO
          MAIN MENU 

     If you have a mouse you can select a state simply by pointing at it and
     clicking the left mouse button.  Or, if you want to select a state from
     the text mode, you can highlight SELECT STATE.  This will take you back to
     text mode and let you select a state.
STATE INFO selection (continued)                                        Page 8

     Once you have selected a state, you can select DISPLAY INFO to get more
     information on that state.  When you do, the map will disappear and a
     block out of the map, with your state selected will appear just below the
     menu.  The menu will be in the upper left hand corner.  In this miniature
     map, the capital will be highlighted in yellow, and the name of the state
     will appear just above the map.  The following selections are available
     from the point:

               POPULATION 1960-1990
               POPULATION DISTRIBUTION
               STATE SIZE
               CRIME STATISTICS
               TRIVIA / INDUSTRIES
               BIRTHS / DEATHS
               MARRIAGE / DIVORCE

     Each one of these (except TRIVIA / INDUSTRIES) will display both a graph
     of relevant information and the actual data that was used to create the
     graph.  For example if you select POPULATION DISTRIBUTION, two graphs will
     appear to the right of the menu/mini-map.  The first one will display the
     break down between the races, (White, Black, Indian, Asian, Other) and the
     other will show the percentage of those with a Hispanic origin.  All of
     the data will appear below the mini-map.  

     When you select TRIVIA/INDUSTRIES, there will be no map, but instead text
     of the following information:  State Name Origin, Motto, Bird, Flower,
     Song, Date admitted into the Union, Nickname, Tree, Climate, Industries,
     Manufactured Goods, & Tourist Information.


     GRAPH

     Upon selecting GRAPH, you will see a menu with the following selections:

          SELECT AREA
          RE-DRAW MAP
          MAIN MENU

     If you choose Select area, you will be returned to text mode to select an
     area to graph, this area is quite long and includes most of the
     information found under state info.  When you select an area to be
     graphed, the program will redraw the map and fill in each of the states
     according to the legend in the bottom left of the screen.  When it has
     finished highlighting all of the states, a box will pop up in the lower
     right with the words "Clear Map", you cannot go on until you select OK,
     and then the map will be cleared and you will return to the main menu.

     Selecting RE-DRAW MAP will simply make the computer redraw the map.  It
     was placed as a precautionary step in the event that the map was somehow
     messed up.
REGISTER                                                                Page 9

     When you select register from the MAIN MENU, a box will come up displaying
     a message that you can either print the registration form or display it on
     screen.  Then it will ask if you would like the form printed.  If you
     answer Yes, please make sure your printer is set up and has paper in it. 
     The registration form is only one page and there shouldn't be any problems
     with printing.  If you answer No, the registration form will be displayed
     on screen in three separate screens; just press a key to see the next one. 
     If you are copying down the form, please make sure that you copy
     everything down exactly as you see it.  Then fill out the questions.  If
     you don't feel like answering the questions about your system, that is
     fine.  However, please feel free to make any comments or suggestions
     anywhere on the sheet.  Also make sure to copy down the special
     registration number.  The registration number tells us where your copy of
     Ultimate Geography came from.  It also tells us if it has had any problems
     with your particular system.

     You can register in two different ways, the first is for $15 and includes
     the following features:

     1.   Unlimited technical support from us on any aspect of this program.

     2.   A free upgrade to the next version that comes out.  We have decided
          already that there will be a few changes with the next version
          including updating the Initial 1990 Census information.  If you have
          any suggestions or comments on what you would like to see in the next
          version, please feel free to send us a letter, or call and talk to
          one of the support personnel.

     3.   Information about all of the programs available from Ultimate
          Software.


     Or, for $30 you can receive Ultimate Geography Plus which includes:

     1.   All of the features of the regular version, plus...

     2.   Tracking features that record each test that is taken, time and date
          the test was taken, and who took the test.

     3.   Reporting features...to give you reports on the information from the
          tracking functions.  This combination is excellent for teachers and
          even for people who just want to know how they have improved over
          time.

     4.   Colors...any of the colors can be changed with this version, and the
          data is written to a .DAT file that you can delete if you don't like
          what you have changed things to.

                    End of Ultimate Geography Documentation
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2941

     Volume in drive A has no label
     Directory of A:\

    EGAVGA   BGI      5554   2-13-91   2:00a
    LITT     CHR      5131   2-13-91   2:00a
    GRAPH    CNF      3046  11-13-91  11:42p
    MAP      DAT      7086   8-22-91   5:16a
    RANGE    DAT      6235   8-20-91   2:31a
    SCORES   DAT       544   3-10-92   4:30p
    STATE    DAT     10863   7-23-91   5:09a
    STATET   DAT     32161   7-23-91   8:53a
    GEOGRAPH EXE     86442  11-15-91   4:09a
    GEOGRAPH TXT     26039   1-01-80   2:45a
    FILES294 TXT      1999   3-10-92   4:41p
    PREVIEW  EXE      7317   4-08-91  10:01a
    GO       BAT       106   3-10-92   4:29p
           13 file(s)     192523 bytes
                          122880 bytes free
