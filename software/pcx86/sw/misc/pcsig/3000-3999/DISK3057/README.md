---
layout: page
title: "PC-SIG Diskette Library (Disk #3057)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3057/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3057"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## FILE3057.TXT

{% raw %}
```
Disk No: 3057                                                           
Disk Title: Ultimate Spanish                                           
PC-SIG Version: S1.0                                                    
                                                                        
Program Title: Ultimate Spanish                                         
Author Registration: $20.00                                             
Special Requirements: 512K.                                             
                                                                        
This is Ultimate Spanish.                                               
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1992 PC-SIG, Inc.                                         
```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                  <<<<  Disk #ULTIMATE SPANISH  >>>>                     ║
╠═════════════════════════════════════════════════════════════════════════╣
║                                                                         ║
║ To start the program, type: TEACHERS   (press Enter)                    ║
║                                                                         ║
║ To print the documentation, type: COPY TEACHER.DOC   (press Enter)      ║
║                                                                         ║
║                                                                         ║
║                                 Copyright (c) 1992, PC-SIG Inc.         ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## TEACHER.DOC

{% raw %}
```


















                           Ultimate Language Teacher

                          A Foreign Language Teacher
























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


Ultimate Language Teacher is a trademark of Ultimate Software.
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
     Registration Information                                                 1
     License Agreement. . . . . . . . . . . . . . . . . . . . . . . . . . . . 2
     Technical Support                                                        4
     Program Features . . . . . . . . . . . . . . . . . . . . . . . . . . . . 4
     Installation                                                             5
     Execution  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6
          Main Menu                                                           6
               Test Menu  . . . . . . . . . . . . . . . . . . . . . . . . . . 6
               Libraries                                                      7
               People . . . . . . . . . . . . . . . . . . . . . . . . . . . . 8
                    Add a Person                                              8
                    Remove a Person . . . . . . . . . . . . . . . . . . . . . 8
                    See Scores                                                8
                    Graph Scores. . . . . . . . . . . . . . . . . . . . . . . 8
               Register                                                       9
     
Introduction                                                            Page 1

     Welcome, and thank you for trying the Ultimate Language Tutor.

     The Ultimate Language Tutor was designed to help you learn words from
     foreign languages like Spanish, French and German through quizzing.

     You'll find the Ultimate Language Tutor has a wide array of quizzing
     features and is very expandable through its library system.

     The Ultimate Language Tutor is being distributed through Shareware, which
     allows you to test out a program before purchasing it.  Further
     explanation of Shareware and Registration can be found on this page.

     In the following pages you will learn how to install and use The Ultimate
     Language Tutor to its full benefit.

     The ASCII test found in this "electronic" manual are only slightly
     different from the printed manual.  The printed manual is written around
     the concept that you are a registered user.

Registration Information

     The Ultimate Language Tutor is a copyrighted program protected by all
     applicable U.S. and International copyright laws.  If you have obtained
     this copy from a shareware disk vendor, an on-line computer service or
     bulletin board, a friend or colleague, or any similar source, you have the
     trial (unregistered) copy.  You are allowed to use this copy without
     charge for a limited time as specified under the license agreement.  After
     this time, you must register in order to continue using The Ultimate
     Language Tutor legally.

     This method of distribution is known as Shareware, a distribution concept
     began by Jim Button.  It allows you, as a user, to evaluate the software
     in your own home to make sure it meets your needs before you pay for it.

     The registration fee for The Ultimate Language Tutor is only $20.  Payment
     of this fee entitles you to:

          A disk with the latest version of The Ultimate Language Tutor,
          registered directly to you.

          A program that will allow you to create your own (or modify existing)
          libraries of words for use with this tutor.

          An upgrade to the next major release of The Ultimate Language Tutor.

          Technical Support via telephone or selected Electronic Bulletin
          Boards.

          Notification of other programs within the Ultimate Software Library.
Ultimate Language Tutor's License Agreement                             Page 2

     (1)  Copyright:  This program, documentation, and supplied libraries are
     Copyright Ultimate Software 1991, and are protected by U.S. and
     International copyright laws.  You are granted a license to use your copy
     of The Ultimate Language Tutor under the terms and conditions specified in
     this license agreement.

     (2)  Definitions:   The Ultimate Language Tutor is being distributed in
     two forms: 1.  The "registered" copy being distributed on diskette from
     Ultimate Software, with a unique serial number and the words "Registered
     Version" appearing at the border of the "Program Description Window" and
     on the diskette label.  2.  A "shareware" copy being distributed via
     electronic bulletin boards, on-line services, shareware disk vendors, or
     another individual.  This copy will have the words "UNREGISTERED VERSION"
     appearing at the border of the "Program Description Window".

     (3)  Shareware Copies:  Shareware copies are distributed to allow you to
     try the program before you pay for it.  These copies are still Copyright
     Ultimate Software 1991.  These copies are not to be confused with "public
     domain" or "free" software.  You are allowed to use the shareware copies
     for a trial period of 30 days.  Once the trial period is over, you are
     required to register with Ultimate Software for $20.
     
     (4)  Registered Copies:  Registered copies are only distributed to those
     persons who have purchased them through Ultimate Software or an authorized
     reseller.  You registered copies may only be used in accordance with the
     License agreement and any additional specifications defined within
     enclosed documents.  (In other words, for site licenses.)

     (5)  Use on Networks or Multiple Systems:  A site license agreement will
     accompany your copy of the Ultimate Language Tutor if you have purchased
     one.  The number of "users" permitted will be defined within this
     document.  If you did not purchase a site license agreement, then you are
     limited to one "user".

     (6)  User:  A computer on which the Ultimate Language Tutor is installed,
     regardless of whether the user is aware of this installation.

     (7)  Copying the Ultimate Language Tutor:  
          Registered Users:
               You may make as many copies of the Ultimate Language Tutor as
               you require for your own backup purposes.  No copies of the
               REGISTERED version shall be distributed by you or anyone acting
               in your behalf (employees, etc.) to anyone who has not purchased
               the Ultimate Language Tutor.  You may create and distribute an
               unlimited number of copies of the UNREGISTERED version(s) to
License Agreement (continued)                                           Page 3
               anyone you wish as long as the maximum billed amount does not
               exceed $6.00 (US) for this program, documentation, and any other
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
     registered copies of the Ultimate Language Tutor that the software will
     operate as described in the documentation, and that the diskette and
     manual will be free of defects which interfere with normal use.  This
     warranty is valid for 90 days from the date of purchase from Ultimate
     Software.  During this warranty period Ultimate Software will at its
     option repair or replace any defective item(s), or refund the purchase
     price of any defective item(s), if such defect is found to be the fault of
     Ultimate Software and not the result of misuse or abuse beyond "standard"
     use.  In no event will Ultimate Software be held accountable for any
     financial amount exceeding the purchase price of this package.

     (10)  Guarantees:  If you are not satisfied with the registered copy of
     the Ultimate Language Tutor, you may return the entire package at any time
     up to 90 days after the date of purchase to Ultimate Software for a full
     refund.  This applies even if you have found no software defects.  
Technical Support                                                       Page 4

     Technical support is available to registered users.  If you are evaluating
     a shareware version of the Ultimate Language Teacher, we will be available
     to answer questions about installation, however, we cannot provide
     continuing support until you register.  We have found that most of the
     questions asked can be answered in the documentation, so please be sure to
     review all of the documentation before calling.

     The best way currently to contact us for support is by phone.  We are
     considering setting up support areas on other Bulletin Board Systems;
     however, this support is not currently in effect.  You can find our
     telephone number at the beginning of this documentation.


Program Features

     The Ultimate Language Tutor was written to help people studying a foreign
     language by quizzing them on words listed in a library.  As the program
     developed, more and more features were requested and eventually included. 
     The list of features currently is as follows:

     Libraries segmented by Noun, Verb, Misc...:
          It was determined that the new language was learned easiest when the
          words were grouped into like areas, for instance, Nouns, Verbs,
          Miscellaneous.  When these areas are reviewed, one could then move on
          to learn phrases and verb conjugation.

     Keeping track of scores for people:
          If you select the people menu, you can enter your name and set up
          memory to track your testing scores.  At each test area, the computer
          will ask you if you would like to test for a specific person. It will
          then display a list of people it knows for your selection.  After the
          test is complete, you can return to the people menu and view your
          scores as a graph.  If you do not complete the test, the score will
          not be kept.  If you change libraries, all the scores will be erased
          and you begin tracking scores under the new library, unless you have
          registered.  In the registered upgrade, the scores for any tests done
          by a specific person will be tracked in the database.

     Easy access to libraries:
          When you pick a library from the main menu, you will be presented
          with a list of the libraries on the default drive.  Simply scroll
          through this list and select the new library.  The new library will
          be loaded, and you may test from it.

     Database tracking (added to the registered version):
          When you have started a test, your name, date, time, and the library
          name will be added to a database, along with the area you are
          testing.  When you have completed your test, the database will be
          updated.  This database is dBase III compatible and can be modified
          through dBase III, dBase III+, dBase IV, FoxBase, FoxPro, PCFile or
          any dBase program capable of handling dBase III data files.
Program Features (continued)                                            Page 5
     Reporting (added to the registered version):
          The reporting functions allow you to report to disk, screen or any
          standard printer.  The database can be sorted by Name, Library, or
          Date.  Then there is a list of filtering functions so that you can
          isolate one student, one library, a group or groups (nouns,
          verbs...), a range of dates, or only completed tests.  These
          functions were set up to allow you to view how you have been doing
          since you started.  For instance, you could create a report of only
          your name, in all libraries, tested after 06/30/91, for only
          completed tests, and include only nouns and verbs.  This would let
          you isolate only areas of the database you want to view.

     Library Builder (distributed with the registered version):
          The library builder allows you to create customized libraries for use
          with the Ultimate Language Teacher.  This can be of great help for
          tests in school or even if you are about to head to a foreign country
          and don't feel that the included libraries will be enough.  The
          Library Builder will also allow you to create other language
          libraries -- you don't have to stick with just one.


Installation

     The Ultimate Language Tutor was written for the IBM PC, PC/XT, PC/AT,
     PS/2, and compatibles.  It requires MS/PC-DOS 2.0 or above, and at least
     512K on your machine, free ram should be slightly above 269K.

     Files

     The files listed below should be included with your shareware version, or
     copy you receive:

     TEACHERS.EXE        This is the Shareware version of the Ultimate Language
                         Teacher.

     TEACHER.CFG         This file contains configuration information and a
                         copy of the registration sheet.  You may view/print
                         this sheet from within the program.

     LIB?????.DAT        These are the data files or libraries used by the
                         Ultimate Language Teacher.

     For registered users, your copy should include the above, plus:

     LIBBUILD.EXE        This is the library builder used to create
                         LIB?????.DAT files.

     TEACHERR.EXE        This is the Registered version of the Ultimate
                         Language Teacher.
Execution                                                               Page 6

     The program was designed around the use of bar menus to allow the easiest
     possible interface between user and program.  All menus include mouse
     support if a mouse driver is loaded.

     MAIN MENU

     The main menu will include different selections depending upon whether you
     are using the registered version or not.  

          Test         ->Test from the selected library.
          Libraries    ->Libraries allow for other languages and more words
          People       ->Allows for up to 3 people to "compete"
          Register     ->Registration form and registration number
          QUIT         ->Returns you to DOS or your menu program

     In order to elaborate on each selection, I will follow each of them to the
     end and then come back on the others.  Therefore, here is a cross-
     reference table to the beginning of other menu selections:

          TEST                          Page 6.
          LIBRARIES                     Page 7.
          PEOPLE                        Page 8.
          REGISTER                      Page 9.

     TEST

     The test menu will open a new menu that should appear with the following
     selections:

     NOTE:  If there are not enough words in an area to test you on, there will
     be a message like:  Insufficient nouns in the library.

          Nouns          ->Test from the XXX nouns in the library.
          Verbs          ->Test from the XXX verbs in the library.
          Phrases        ->Test from the XXX phrases in the library.
          Verb Conj.     ->Test from the XXX Conjugated Verbs in the library.
          Miscellaneous  ->Test from the XXX Miscellaneous words in the
          library.
          MAIN MENU      ->Returns you to the main menu.

     When you select what area you would like to be tested on, you will be
     asked the following questions:

              Would you like to test for a specific person (Y/N)?

     NOTE:  This question only appears if you have entered a person under the
     people menu.  This will allow you to track scores during this session.

                 Would you like a multiple choice test (Y/N)?
Execution (continued)                                                   Page 7

     If you select no you will have fill in the blank answers, otherwise you
     will be presented with a list of 5 possible answers.  NOTE:  There are no
     fill in the blanks under verb conjugation.

                   Would you like ENGLISH to XXXXXXX (Y/N)?

     If you select yes, the test will display the question in ENGLISH and ask
     you for the foreign language answer.  Otherwise, this will be reversed.

     During testing, the screen will be divided into two major screens, the
     QUIZ ENTRY SCREEN and the QUIZ RESULTS SCREEN.  The QUIZ ENTRY SCREEN on
     the left will display the question and await your answer.  The QUIZ
     RESULTS SCREEN will have information on the test so far; for instance,
     number correct, number tested, percentage correct, average time per
     answer, and time for last answer.  The information on amount of time for
     testing is not recorded and placed there for your own convenience.

     Directly below these two screens will be two bar graphs.  The top graph
     shows the amount of the library you have been tested on and the other
     shows you the percentage correct.  If, for instance, you get the first
     question correct, the bottom bar will be all the way across the screen and
     the top bar will move proportional to the amount of the library that
     question represents.

     Once testing is completed or if you press ESC before completing a test
     sequence, a summary box will replace the two windows and two bar graphs. 
     It will tell you how you have done and if you have completed the test.  At
     this point, you can press enter or click the mouse on the phrase "Press
     Enter to Continue".  You will be returned to the TEST MENU to select
     another area for testing or return to the MAIN MENU.


LIBRARIES

     If during testing, you decide that you want to use another library, you
     should simply select LIBRARIES from the main menu.  A list of currently
     accessible libraries will be displayed for you to select from.  Simply
     move the high-lighted bar up or down and press enter when you are on the
     library you want.  If the library you want is not displayed, you can use
     the PgDn or PgUp keys to check for another screen.  If you are using a
     mouse there will be two arrows on the border for moving the high-lighted
     bar, or you may simply click on the library you want.  The library
     function will not load more than 50 libraries, so if there is a library
     you know should be loaded, check to make sure you don't have more than 50
     libraries in one directory.  All library names must match the file mask
     "LIB*.DAT", for instance LIBSPAN.DAT is OK, but LSPANISH.DAT is not.
PEOPLE                                                                  Page 8

     The people selection will bring up another menu, something like this:

          Add a person        ->Add a person to the list
          Remove a person     ->Remove a person from the list
          See Scores          ->View current scores for all people
          Graph Scores        ->Show a graph of the scores, comparing all
          people
          MAIN MENU           ->Return to main menu


ADD A PERSON

     The program was designed to keep an internal table of the people testing
     to record there results and to show them their results compared to others
     currently using the program.  When you select ADD A PERSON, the menu will
     be replaced by a box showing all of the names in the internal table.  It
     will then ask you for a new person.  If you choose not to enter another
     person, you can simply press ENTER or ESC to return to the PEOPLE MENU. 
     If you enter a person, the person will be added to the internal table and
     the names in the box will be updated.  Once you have entered the maximum
     number of people, the PEOPLE menu will automatically return.  If you have
     the maximum number of people already entered and try to enter another, a
     message will appear informing you of the problem.  You must either remove
     a person or continue testing with the people currently on the list.

REMOVE A PERSON

     As mentioned under ADD A PERSON, the internal table of people is limited
     to a certain number.  Once this number is reached, you must remove a
     person to add a person.  This area of the people menu will help you do
     this.  When you select Remove a Person, a list of the people that are
     currently on the list pops up, and you can select a person to remove. 
     Press ESC if you don't want to remove a person.

SEE SCORES

     This will display the current scores for the people the computer knows
     about.  Once you are done viewing, you can press ENTER to return to the
     people menu.

GRAPH SCORES

     This is much like SEE SCORES; however, it will display the scores as a
     graph.  Some people find this method easier for determining who is ahead. 
     When you select this function, there will be a list of the people on the
     left, and a box on the right with the current scores for nouns listed. 
     You need to use the arrow keys at this point to display each person's
     scores, or select Quit.
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
     the Ultimate Language Tutor came from.

     Remember that registration will bring you an upgrade to the Registered
     version of the program.  The registered version has all of the features
     found in this copy and includes the following:

     1.   Database functions:  All of the tests for a specific person will be
          recorded.  Any record can be easily removed if you decide you don't
          want anyone to be able to see your initial scores.


     2.   Reporting functions:  Any of the scores recorded in the database can
          be viewed in a report.  Reporting is very flexible, output may be
          redirected to either the screen, printer, or a file.  All reports may
          be sorted by Name, Library, or Date.  All reports allow you to
          "filter" out whatever you don't want on the report.  For example: 
          You could have a report sorted by date with only a specific person
          tested on a specific library with only completed tests from nouns,
          verbs, and misc.

     3.   Information about all of the other Ultimate Software programs that
          are currently available, as well as new ones as they are released.

     4.   Unlimited technical support:  We have a phone number you may call in
          the event that you have any problems with this program.


                 End of Ultimate Language Tutor Documentation
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3057

     Volume in drive A has no label
     Directory of A:\

    TEACHER  CNF      3034  11-13-91  11:42p
    LIBSPA1  DAT      4287   9-12-91  12:00p
    LIBSPA2  DAT      7767   9-12-91  12:00p
    LIBSPA3  DAT      6102   9-12-91  12:00p
    TEACHER  DOC     27286   9-12-91   8:12p
    TEACHERS EXE     74509  11-13-91  11:33p
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       847   7-14-92   2:30p
    FILE3057 TXT      1109   7-14-92   2:31p
            9 file(s)     124979 bytes
                           32768 bytes free
