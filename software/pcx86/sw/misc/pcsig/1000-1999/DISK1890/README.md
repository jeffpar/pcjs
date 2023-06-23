---
layout: page
title: "PC-SIG Diskette Library (Disk #1890)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1890/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1890"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "TEST MANAGEMENT  DISK 1 OF 2"

    TMS stands for TEST MANAGEMENT SYSTEM, and the name is descriptive.  TMS
    is a software system, or system of programs, which automates many of the
    routine and tedious chores of administering multiple-choice and
    true/false tests.
    
    ~ Maintain a test bank of up to 999,999 questions.
    
    ~ Browse through the test bank and mark questions at will for inclusion
    in a test; you can let the program search for the questions by author,
    by the class or course from which it is derived, or by the topic or area
    of the questions.
    
    ~ Print the test directly on a printer, with a face sheet, a coded
    student answer sheet, and an overlay key template for correcting the
    student answer sheets.
    
    ~ Save a test in ASCII text form, to load into your favorite word
    processor for additional editing or special effects such as boldface or
    italics.
    
    ~ Print a reference key version of the test, which contains all the
    questions of the regular test, plus a graphic indication of the correct
    answer, the level of difficulty, area of the question, class, author and
    bibliographic citations.
    
    ~ Administer the test by computer, by placing the test on a single
    diskette; the test will be scored automatically, and if you choose, the
    program will show the student his/her score and even review the test,
    with the correct answers and the student answers shown.
    
    ~ For each test you administer by computer, print a report which
    contains the name and score of each person who took the test, and a
    tally of the distribution of answers for the test.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1890.TXT

{% raw %}
```
Disk No: 1890                                                           
Disk Title: Test Management  Disk 1 of 2                                
PC-SIG Version: S1.1                                                    
                                                                        
Program Title: Test Management System                                   
Author Version: 1.08                                                    
Author Registration: $75.00                                             
Special Requirements: 512K RAM Hard Drive.                              
                                                                        
TMS stands for TEST MANAGEMENT SYSTEM, and the name is descriptive.  TMS
is a software system, or system of programs, which automate many of the 
routine and tedious chores of administering multiple-choice and         
true/false tests.                                                       
                                                                        
~ Maintain a test bank of up to 999,999 questions.                      
                                                                        
~ Browse through the test bank and mark questions at will for inclusion 
in a test; you can let the program search for the questions by author,  
by the class or course from which it is derived, or by the topic or area
of the question.                                                        
                                                                        
~ Print the test directly on a printer, with a face sheet, a coded      
student answer sheet, and an overlay key template for correcting the    
student answer sheets.                                                  
                                                                        
~ Save a test in ASCII text form, to load into your favorite word       
processor for additional editing or special effects such as boldface or 
italics.                                                                
                                                                        
~ Print a reference key version of the test, which contains all the     
questions of the regular test, plus a graphic indication of the correct 
answer, the level of difficulty, area of the question, class, author and
bibliographic citations.                                                
                                                                        
~ Administer the test by computer, by placing the test on a single      
diskette; the test will be scored automatically, and if you choose, the 
program will show the student his/her score and even review the test,   
with the correct answers and the student answers shown.                 
                                                                        
~ For each test you administer by computer, print a report which        
contains the name and score of each person who took the test, and an a  
tally of the distribution of answers for the test.                      
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                 <<<<  Disk #1890  TEST MANAGEMENT  >>>>                 ║
║                         (disk 1 of 2, 1891 also)                        ║
╠═════════════════════════════════════════════════════════════════════════╣
║ Copy all files from disk 1 & 2 to your hard drive.                      ║
║                                                                         ║
║ To run the program, type: TMS  (press enter)                            ║
║                                                                         ║
║ To print documentation, type: COPY MANUAL.TMS PRN  (press enter)        ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## HELPONE.TXT

{% raw %}
```
                    ON-LINE HELP FOR TEST MANAGEMENT SYSTEM
                    =======================================

           copyright (c) 1989 Marshall Woolner.  All rights reserved.

      This documentation refers to version 1.08 (2-10-90) of TMS.


      Part I describes the operation of Test Management System (TMS) from
      the main menu and other menus.  All TMS functions and services are
      activated by menu choices.

      Part II describes additional help and support for use of TMS,
      including reporting problems.



    PART I:  OPERATION OF TEST MANAGEMENT SYSTEM


    The main menu is the platform from which you will operate TMS.  The
    options listed are:

                        Questions
                        Test
                        Disk
                        Print
                        Score
                        Info (tech)
                        Utilities
                        Configuration
                        HELP!
                        End

    You will notice that when you come to the main menu for the first time,
    the option "Questions" is highlighted or in reverse video.  To use the
    main menu, and any other menu in TMS, follow these instructions:


    1.  Use the up and down cursor keys (usually found on the 8 and 2 keys
        of the numeric keypad on the right side of the keyboard) to move
        the highlight bar to your selection, then press the <ENTER> key.
        This has the advantage of displaying a prompt in the message box
        under the main menu.  The message box will display a brief message
        which describes the functions associated with the highlighted option.

    2.  Press the first letter of your choice to activate the options.  For
        instance, to choose the "Questions" option, simply press the "Q"
        key.  This has the advantage of being faster than moving the high-
        light bar.

    3.  As an added note, many of the selections in TMS need confirmation.
        This takes the form of answering yes or no to a prompt, then
        pressing the <ENTER> key.  If you find that TMS is not doing what
        you want it to do, repeat the steps being very careful to read the
        prompts completely.


    All of the menus in TMS work the same way;  highlight your choice, then
    press <ENTER>, or press the first letter of your choice.

    The following are the messages associated with each of the main menu
    options:

    "Questions"     Add, change or delete test bank questions
    "Test"          Create or delete a test
    "Disk"          Select a test and prepare it for administration by
                    computer
    "Print"         Select a test and print it, with answer sheet and
                    key template
    "Score"         Score a computer-administered test, and print the
                    results
    "Info (tech)"   Display technical programming information about this
                    Program
    "Utilities"     Access TMS utilities
    "Configuration" Set or change configuration of TMS
    "HELP!"         Gain Access to the general help system
    "End"           Exit this program to the DOS command line


    Now, for a detailed explanation of the operation of each of the
    TMS main menu options.


    ****    MAIN MENU ITEM:  QUESTIONS

    Choosing this option will bring up the question menu.  The question
    menu operates in the same manner as the main menu - you make selections
    by using the cursor keys to highlight your choice, then press the
    <ENTER> key, or you press the first letter of your choice.  Here are
    the options:

                        Add a question
                        Change a question
                        Delete a question
                        Eliminate keys
                        Finished


    And here is how you operate the options, and what they do:



                            "Add a question"

    Select this option when you wish to add a new question (test item) to
    the test bank.

    When you select this option, you will be presented with three scrolling
    choice screen, one screen each for items labeled AREA, CLASS and AUTHOR.
    AREA, CLASS and AUTHOR are index keys, and provide information about the
    test item which allows you search the test bank for other questions with
    similar or identical index keys.  The index key information is always
    entered in upper case letters.  You can use these to enter any information
    about the test item you wish;  however, their names are suggestive of the
    type of information intended.  For instance, you might enter "NSG 101"
    for key CLASS information, or "TRAUMA" for key AREA information.

    To make a selection from a scrolling choice screen, you use the cursor
    key to move the highlight bar to the item you wish to select, then press
    the <ENTER> key.

    Each of the three scrolling choice screens operates in the same manner;
    the following is a description of the scrolling choice screen operation
    for AREA.  Substitute the words CLASS or AUTHOR for AREA to understand
    how the other two operate.

    The first item highlighted is "Leave the AREA blank for now, or as it
    is".  If you select this item, you will immediately leave the AREA
    scrolling choice screen without choosing AREA information.  This would
    be most appropriate if you do now want to enter AREA information.

    The next line down is "Enter a new and unique AREA".  Select this if
    the AREA information displayed below it is not appropriate for the
    test item you are entering.  If you select this item, you will be
    presented with an information entry window, prompting you to enter a
    unique code for AREA.  The AREA information is limited to a code of
    eight characters, to conserve disk storage space.  There is also a
    description line, to allow you to enter up to fourty characters of
    text to describe the AREA entry.  There is a prompt asking you if
    the entry is complete - this must be answered Y or N;  if N is entered,
    you will have another chance to enter the information.  If you enter
    Y, the entry will be checked for uniqueness.  If it is not unique,
    another window will appear, in red, to prompt you that the code is
    not unique.  Enter T to try again, or X to exit without entering new
    AREA information.

    The third and subsequent lines contain AREA information that has already
    been entered.  The section to the left contains the codes (from one to
    eight letters, all upper case) and the section to the right contains the
    descriptions (up to fourty characters).  If there are more codes than
    can be displayed on one screen, the label "--more--" will appear in
    the lower screen;  move the highlight bar down to the last item displayed,
    and continue pressing the cursor key and the additional codes will scroll
    in the window until the last item is displayed.  To select one of these,
    highlight your choice and press <ENTER>.

    Once you have finished with the three scrolling choice screens, the
    item entry screen will be displayed.  In the top 1/3 third, you will
    see L1, L2, L3, L4, L5 and L6 displayed to the left hand side, with
    blank lines bounded by colons.  This is the area in which to enter the
    text of the item stem.  Type each line in, one at a time.  Do not leave
    L1 blank, or leave a blank line between any lines which contain text.
    If you do this, the question will not print properly.  You can move be-
    tween lines by using the cursor keys, or move from one line down to the
    next by pressing the <ENTER> key.  Each line can contain up to 60 char-
    acters of text.  There is no word wrap, so when you are at the end of
    one line, you will need to press <ENTER> or a down-arrow cursor key to
    move down to the next line.  No special graphics or editing characters
    are supported (italics, underlining, etc.) so if there is a word you
    wish to emphasize, you might want to make it all upper case, e.g.

        All of the following are synonymous, EXCEPT:


    There are five option answers supported, each with one or two fifty-five
    character lines.  You must enter at least two (a and b) or up to five
    (a through e).  If you enter only one line in an option answer, make
    sure that it is the upper of the two lines available.  If you do not,
    the TMS will not read the option answer or print it correctly on a
    test, e.g.

    Acceptable:

           a.  :the first step to take is to evaluate airway patency
               :

                                   or

           a.  :pH 7.54,  PaCO2 88,  PaO2 54,  HCO3 28,  RR 24,  O2 CT 11.2
               :on FiO2 1.00, TV 900 SIMV 12


    Will not read correctly:

           a.  :
               :the first step to take  is to evaluate airway patency


    When you enter the last option answer, press the <ENTER> key until the
    cursor moves to the "Correct: " space.  This is a mandatory entry area;
    you cannot move on until you enter the correct answer to the question.

    The next area is the level (you will bypass the AREA, AUTHOR and CLASS
    entry area - you can enter information in these spaces only by the
    scrolling choice screens described above).  You can enter the numbers
    1 through 9;  this is intended for level of difficulty of the question.
    I use a 1 through 3 scale only:  1 for simple recall/rote memorization;
    2 for synthesis of information, and 3 for application of theory in a
    practical situation.

    The total questions area is simply a counter of the total number of
    test items in the test bank.

    The next two sections, Ext. Ref (external reference) and Int. Ref. (in-
    ternal reference) or free text entry areas.  You may enter anything you
    wish - up to fourty characters each line.  I use the Ext. Ref. to enter
    bibliographic citations, usually from text books or current professional
    publications.  The Int. Ref. I use for information from the handouts
    given for the classes I coordinate, usually the objective number and a
    page number for the content of the question.  All this information is
    printed in the reference copy of the test, so it makes reviewing the
    test with students easier for me.

    The last items is "Is this entry complete? (Y/N)".  If you enter N, then
    the cursor will move to the top of the screen, and you will have the op-
    portunity to edit your item.  If you enter Y, a line will appear at the
    bottom of the screen:

    S)tore  A)bandon  R)esure editing? [select your choice, then press ENTER]

    If you press S, then <ENTER>, the question will be stored in the test
    bank.
    If you press A, then <ENTER>, you will be prompted "Are you sure?" - you
    must type YES and press <ENTER> to abandon the question. (the question
    will then 'evaporate')
    If you press R, then <ENTER>, the cursor will move to the top of the
    screen, and you will be able to resume editing the question.

    If you choose S or A, you will then be prompted "Do you want to CONTINUE
    adding questions? (Y/N)".  If you answer Y, then press <ENTER>, you will
    repeat the question entry process again, beginning with the scrolling
    choice screens for AREA, CLASS and AUTHOR.  If you chose N, then press
    <ENTER>, you will go back to the "Question" menu.


                            "Change a question"

    When you select this option, the first item in the test bank will be
    displayed in "index card" format.  "Index card" format means that one
    question (test item) will be displayed at a time, with additional in-
    formation displayed with it on screen.  This is the way that the test
    items will be displayed in the "Create a test" mode from the "Test"
    menu.

    The test item will be displayed with the stem followed by the option
    answers.  The correct answer will be highlighted, with an arrow to
    the left of the answer pointing to it.

    At the top of the screen, the question number, index and order messages
    will be displayed.  Question number is the unique number assigned to
    the question when it was created.  If the question is ever deleted from
    the test bank, the number is deleted also, and will never be used for
    any other question.  The index shows whether the index is off or on,
    and if it is on, which index is in use.  The index choices are AUTHOR,
    CLASS and AREA.  The order shows the pattern or path that will be fol-
    lowed through the test bank as you browse through the items.  Natural
    order means that you will move through the test bank in the order in
    which the items were entered into the test bank.  Alphabetic order
    means alphabetically, based on the index key that is active.

    At the bottom of the screen, you will find the CLASS, AREA and AUTHOR
    of the question listed, as well as the test bank record number.  The
    record number is the ordinal number of the position of the test item
    in the test bank.  Unlike the question number, the record number will
    change as items are added and deleted.

    The next to the last row is a horizontal version of a menu.  These
    provide you with a variety of ways to browse through the test bank,
    in order to find the question(s) you wish to change.  The options
    are:

    NEXT     BACK     GOTO     CHANGE SEARCH    EDIT     QUIT/EXIT

   Like other TMS menus, you can move the lightbar to each of the options,
   then press <ENTER>, or you can press the first letter of your choice.
   Here is what each of them will do:

           NEXT  will move forward to the next question.  If the index
                 is off, it will move to the next item, in the order in
                 which the test items were originally entered.  If an index
                 is on, it will move to the next item in the order in which
                 the items are indexed.  If the last test item is already
                 being displayed, it will give you a "last item" message.

           BACK  will move back to the previous question.  If the index is
                 off, it will move to the previous item, in the order in
                 which the test items were originally entered.  If an index
                 is on, it will move back to the previous item in the order
                 in which the items are indexed.  If the first test item is
                 already being displayed, it will give you a "no items before
                this one" message.

           GOTO  Means "go to" a question number which you select.  You will
                 be prompted to enter a question number, and TMS will search
                 for it.  If it is found, it will be displayed;  if not, it
                 will give you an "item not found" message.

         CHANGE  This will pop up a scrolling choice screen, to allow you to
         SEARCH  choose the index key to use, and allow you an opportunity
                 to find a specific item.  The index you select will remain
                 active until you turn it off using the CHANGE SEARCH option.

         EDIT    Edit will invoke the editing screen, which operates in the
                 same manner as the "Add a question" option above, except
                 that the item will be displayed.

      QUIT/EXIT  This will send you back to the "Question" menu




                        "Delete a question"


    When you select this, a warning screen will be displayed.  If you elect
    to continue, you will be able to browse through the test bank in a way
    similar to the "Change a question" option, except that you will have
    a "DELETE" option, which will allow you to delete an item permanently
    from the test bank.


                           "Eliminate Keys"


    This option will present you with three scrolling choice screens, one
    each for AREA, CLASS and AUTHOR.  To use these, simply scroll the light
    bar to your selection and press <ENTER> to delete a key from the index.


                                "Finished"

    Select this items to return to the main menu.


    ****   MAIN MENU ITEM:  TEST

    Selecting this item will bring up the "Test Service" menu, which has
    the following options:

                "Create a test"
                "Delete a test"
                "Finished"


                            "Create a test"

    When you select this item, you will see the first question in the
    test bank displayed in "index card" format.  It is the same format
    described above (in the "Change a question" option of the "Question"
    menu), with the following differences.

    In addition to CLASS, AREA and AUTHOR, Level, Marked, Correct and
    Total Marked information will be displayed.  Level indicated the
    level of difficulty, from 1 through 9.  Marked indicates if the
    question has been marked by you for inclusion in the test you are
    creating.  If you have not "marked" the question, it will display
    "Marked:  No";  if you have "marked" the question, it will display
    "Marked: Yes", highlighted in magenta.

    The horizontal menu appears this way:

    NEXT    BACK    GOTO    SEARCH    MARK     UNMARK    EDIT    QUIT/SAVE

    NEXT, BACK, GOTO and EDIT operate in the same manner as described
    above in the "Change a question" option of the "Question" menu.
    SEARCH operates the same as CHANGE SEARCH.

    MARK will "mark" the question being displayed so that it will be in-
    cluded in the test you are building.  MARK will also increment the
    "Total Marked" counter by one.  If you attempt to MARK more than
    120 questions, you will see a message that you have tried to mark
    too many questions.

    UNMARK will remove the "mark" from a "marked" question;  if the question
    was marked, it will also decrement the "Total Marked" counter by one.

    QUIT/SAVE will offer you the opportunity to quit selecting test items
    or continue selecting test items.  If you choose to quit, it will ask
    you what to do - save the test or abandon it.  You must confirm all
    your selections by pressing the <ENTER> key.  If you choose to save
    the test, you will be presented with a "NEW TEST INFORMATION" entry
    screen.  You will be asked for a test name (up to 40 characters),
    comments (up to 40 characters), and a test code (8 characters).  The
    test code is the only mandatory entry item.  The test code must be a
    unique code, and will be used to identify the test among other tests
    you create.  As a suggestion, you might wish to make the code two
    letter, followed by a six-character date;  however, you are free to
    make the code anything you like.  Finally, you are asked if the in-
    formation is complete.  If you answer N, you have the opportunity to
    correct or add information again.  If you answer Y, the test will be
    stored in the test history database and you will return to the main
    menu.

                            "Delete a test"

    When you choose this selection, you will be presented with a scrolling
    choice screen.  The first choice will be "CANCEL PROCESS - DELETE NO
    TEST";  the rest of the choices will be the tests stored in the test
    history database.  Scroll the light bar up/down to highlight your
    choice, then press <ENTER>.  You will be asked to confirm you choice,
    and if you confirm that you want to delete the test, it will be deleted
    permanently from the test history database.

                              "Finished"

    This option returns you immediately to the main menu.



    *****  MAIN MENU ITEM:  DISK

    When you select this item from the main menu, you will be presented
    first with a scrolling choice screen, containing the tests stored in
    the test history database.  To select the test you wish to administer
    by computer, scroll the light bar up/down to your choice of tests,
    then press the <ENTER> key.

    Next, you will be presented with the "TEST MANAGEMENT SYSTEM - DISK
    BASED TESTING SERVICE" information entry screen.  You will be prompted
    to enter a test group code, and information on how you wish the
    test to be administered.  Auto score, auto review and auto retest can
    each be enabled by a Y and disabled by an N.  Auto score will auto-
    matically score and display the results to the person taking the
    test.  Auto review gives the test taker the option of reviewing the
    test with his/her answer and the correct answer displayed with each
    question (there is no possibility of changing the answer after the
    test has been scored).  Auto retest allowsthe test taker the option
    of retaking the test if he/she scores below the established minimum
    passing score.  Minimum passing score is used to establish pass/fail
    when you select auto score and auto retest;  you can set it from
    1 to 100 %.


    *****  MAIN MENU ITEM:  PRINT


    This option prepares for printing a test.  The first display is the
    scrolling choice screen.  You choose a test to print by moving the
    light bar up/down with the cursor keys to select your choice, then
    you press the <ENTER> key.  The next screen is the "Preparation for
    Printing" information entry screen.  The name and code of the test
    are displayed at the top of the screen, and you are prompted to
    enter where to print.  Where to print has three options, P, D and
    B.  P indicates printer only - the test will be printed on the
    printer that is connected to LPT1, the parallel printer port.  D
    indicates that the test is to be "printed" to a disk file;  actually,
    the text of the test will be saved as an ASCII disk file.  This is
    a text file, saved on disk, which you can load into almost any
    word processing program, and modify as you desire.  The third option,
    B, means both - save as a text file and print on the LPT1 printer.

    The next option is reference key.  If you enter T for test only,
    the test will print, with a blank answer sheet, a key template with
    the correct answers indicated (an overlay template to facilitate
    scoring of paper/pencil tests), and a test report.  The test report
    is a half page printout of information about the test.  If you enter
    R, you will get the above, and a reference key version of the test;
    this has the questions printed, along with the correct answers and
    the additional information about the test item (as displayed on the
    "Add a question" test item entry screen).

    Once you have confirmed the information on the "Preparation for
    Printing" screen, you will be presented with the "Test Printing In-
    formation" screen.  You will be prompted to enter optional infor-
    mation that will be included in the printing - heading, footers,
    date, title and instructor.  These may be omitted if you choose.



    *****  MAIN MENU ITEM:  SCORE

    When you select this item, you will be presented with the "Scoring
    Service Menu".  The menu options are:

                        "Quit"
                        "Load"
                        "Tally"
                        "Report"
                        "Student"
                        "Manual"
                        "Delete"




                                  "Quit"

    When you select "Quit", you return immediately to the main menu.


                                  "Load"

    When you select this item, you will be prompted to place the testing
    disk(s) in the A: drive.  If you place a disk that does not contain the
    file of student scores on it, a message will appear to prompt you to
    make the correction.  When you place the disk with the proper student
    scores on it in the A: drive, the student test answers and scores will
    be loaded into the master student score database on the hard disk.
    When that has been done, you will prompted whether you want to delete
    the student answers from the testing disk.  If you choose Y, the scores
    will be deleted from the test disk.

    When you are done with one test disk, you will be asked if you have
    another to load.  Repeat the process until all test disks are done.



                                "Tally"

    When you select this option, you will be presented with a scrolling
    list of test groups.  When you select one, it will prepare a report
    that shows a tally of the answer distribution for all the test group
    members (18 chose "a." for question 1, 33 chose "b.", etc).  It will
    also provide test group statistics:  average score, median, mode and
    standard deviation.


                                "Report"

    When you select this option, you will be presented with a scrolling
    choice screen, displaying the test groups stored in the master student
   score database.  Make your selection by scrolling the light bar up/down
   to highlight your choice, then press <ENTER>.  Press ESC to abort the
   process, or prepare the printer and press any other key.



                                "Student"


   When you select this option, you will be presented with a scrolling list
   of test groups;  if you select one, you will then be presented with a
   scrolling list of the people in the test group.  If you select one, TMS
   will prepare a printed report on the test performance of the person you
   selected.



                                "Manual"

   When you select manual, you will have be able to enter test data manually
   for the people who did not take tests on the computer.  Requires only that
   you to enter personal information and incorrect answers.   Intended to
   provide you with a method for including manually taken tests in all of
   your test performance statistics.


                                "Delete"

   This option produces a scrolling choice screen, displaying the test
   groups.  Make your selection by scrolling the light bar up/down to
   highlight your choice, then press <ENTER>.  You will be prompted to
   confirm you choice;  if you confirm your choice, all the student
   scores and answers for that test group will be deleted from the master
   student score database.





    *****  MAIN MENU ITEM:  INFO (TECH)

    When you select this item, the screen will display the text of some
    technical information about TMS.  It may be interesting if you have
    some fondness for programming, otherwise it is a monumental bore.




    *****  MAIN MENU ITEM:  UTILITIES

    The utility services menu contains the following entries:

                               Quit
                               Update Indexes
                               New Numbers
                               Import
                               Export
                               Backup
                               Restore
                               Test Item
                               Key Info



                                "Quit"

    Selecting "Quit" will take you back to the main menu


                             "Update Indexes"

    Select "Update Indexes" if you feel that there may be a problem with
    the indexes - they are the supplementary files which allow quick
    location of test items.  It is unlikey that the indexes will need it
    often, at the most once a month.  If system performance bogs down, or
    if you get erroneous items on tests - ones that you know were not
    selected for a test, perform this function.


                              "New Numbers"

    Select "New Numbers" if there has been a catastrophe and you are not
    able to get any tests to print out correctly.  This function will pro-
    vide a new set of unique test item identification numbers, but will
    void any tests previously stored in the test history database.


                                 "Import"

    Select "Import" when you wish to add test items to the test bank that
    were produced by on another computer using TMS (using the "Export"
    function, listed below).  To use it, place the diskette containing the
    test items (stored in the data file TRANSPORT.DBF) in the A: drive,
    and begin.  The items will be imported to the test bank, the indexes
    will be updated, and the test items renumbered with unique item iden-
    tification numbers (DO NOT USE THE NEW NUMBERS UTILITY WITH THIS - IT
    IS NOT NECESSARY).

                                "Export"

    Select "Export" when you wish to select test items to transfer to
    diskette for subsequent importing to a separate test bank of test
    items.  Before useing this feature, it is important that you have
    a formatted diskette ready for use.  When "Export" is selected, you
    will be presented with a test item display screen similar to that for
    the test creation function;  you may browse the test bank, mark or un-
    mark test items, search for specific test items.  When you have marked
    all the test items you wish, select the "Quit" option from the menu, and
    you will be asked to confirm that you wish to export items.  If you do
    confirm, the items will be loaded on to the diskette in drive A:, in a
    file called TRANSFER.DBF.  The diskette can then be taken to another
    computer on which TMS is operating, and the test items loaded into the
    test bank using the "Import" function listed above.


                                 "Backup"

    Select "Backup" when you wish to make a security backup copy of the
    test bank.  I strongly encourage you to do this on a regular basis,
    preferbly once a week.  If anything ever happens to the testbank (a
    power failure during a save, a "head crash" or any other accident
    that corrupts the test bank) you can restore test items without having
    to re-key all the entries.  When selected, this function will present
    you with a listing of the number of diskettes you will need to make the
    backup;  you will need these disks ready before the backup process
    begins.  Place the first diskette in the A: drive, then follow the
    screen instructions until all test items are copied.  Make sure to
    label the diskettes in the order in which they are used.


                                  "Restore"

    Select "Restore" to reconstruct a testbank that has been corrupted or
    deleted.  Use of this function will void any tests which have been
    created previous to using the function, so do not use it unless there
    has been unrecoverable damage to the testbank.  When selected, the
    function will prompt you to insert the diskettes containing the backup
    test items;  it is important to insert the disks in the order in which
    the test items were backed up (e.g., disk 1 first, disk 2 second, etc.).

                                 "Test Items"


    Select "Test Items" if you wish to print some or all test items which
    match a certain key value;  author, topic or class.  When you select
    this function, you will be offered the opportunity to chose the selection
    criteria, then prepare the printer.  The test items will be printed.


                                 "Key Info"

    Offers you the opportunity to print out selected lists of authors, topics
    classes, tests, test groups, system files, or data file design structures


    *****  MAIN MENU ITEM:  CONFIGURATION

    Select "Configuration from the main menu when you wish to select or
    change the monitor type or whether the printer will be single-sheet
    or continuous forms.


    *****  MAIN MENU ITEM:  HELP!

    This item will produce a scrolling screen with general help informa-
    tion about TMS.  Use the up and down cursor keys to scroll the text
    up and down, and press the escape key (ESC) to exit the help screen.


    *****  MAIN MENU ITEM:  END

    Select this item to terminate TMS, and return to the DOS command-line
    prompt.


    PART II:  SUPPORT INFORMATION

    There is additional information in the file MANUAL.TMS (on the
    original diskette), and in the file TUTOR.TXT (also on the original
    diskette).  The additional information includes expanded instructions
    on use, instructions for installation, purchase and registration, and
    a brief tutorial.

    If you experience a problem with Test Management System, please
    write to:

                Marshall Woolner
                6284 Argyle Avenue
                San Bernardino,  CA 92404

    **********  END OF ON-LINE HELP FOR TEST MANAGEMENT SYSTEM  **********
```
{% endraw %}

## INSTALL.TXT

{% raw %}
```
                          TEST MANAGEMENT SYSTEM (TMS)

                           INSTALLATION  INSTRUCTIONS
                           ==========================


                     For Test Management System version 1.08



    WARNING!    If you have any previous version of TMS already
                installed, DO NOT FOLLOW these instructions.  If
                you do, it will destroy any test items you already
                have in the test bank and delete all historical
                test information.  Instead, read the file called
                WARNING.TXT or README.1ST, both of which will
                explain the process for updating TMS to a newer
                version.


1.  Make two copies of each TMS diskette;  use one set as the working copies
    (note:  TMS is distributed on 2  5.25" or 1  3.5" diskettes)

2.  Create a subdirectory for TMS on your hard disk.   To make a subdirectory,
    start on the DOS command line (usually a prompt like C> or C:\) and type
    in the commands listed under COMMAND, and follow the instructions that are
    indicated by the < and > symbols.  This assumes that C: is your hard disk

   COMMAND                          INSTRUCTIONS

    C:             <press the ENTER key - this makes C: the current drive>
    MD\TESTING     <press the ENTER key - this creates the \TESTING sub-
                   <directory>

3.  Do NOT add the TMS subdirectory to your DOS PATH statement

4.  Copy all the files from the working diskette(s) to the TMS subdirectory

  COMMAND                            INSTRUCTIONS

   C:              <press the ENTER key - this makes C: the current drive>
   CD\TESTING      <press the ENTER key - now \TESTING is the current>
                   <subdirectory>
                   <now place the TMS diskette in drive A:>
   COPY A:\*.* /V  <press the ENTER key - all the TMS files will be copied>
                   <and checked that the copy was accurate>
                   <if you have more than one TMS diskette, remove the first>
                   <diskette and replace it with the second, then do the>
                   <next procedure below>
   COPY A:\*.* /V  <and press the ENTER key - all the remaining TMS files>
                   <will be copied and checked for accuracy in copying>

5.  To run TMS, change the drive/directory to the one where TMS is installed,
    and type the letters TMS, and then press the ENTER key.  TMS will load
    in 15 to 60 seconds;  to exit TMS, press the E key at the main menu

6.  Make sure that your CONFIG.SYS file contains the statement:

        FILES=16             <for at least 6 available for TMS>

    This will insure that you will not get a "TOO MANY FILES OPEN" error
    when preparing the disk-based testing disk.

7.  Read the instructions for operation of TMS in the text file MANUAL.TMS
    contained on the distribution diskette.
```
{% endraw %}

## TUTOR.TXT

{% raw %}
```

                        TEST MANAGEMENT SYSTEM TUTORIAL

        This tutorial refers to Test Management System version 1.08

         copyright (c) 1988 Marshall Woolner.  All rights reserved


    This is a simple tutorial to get you acquainted with TMS.  If you
    have not alread installed TMS, do so before you begin the tutorial.

    The installation procedure is explained in the reference manaul,
    stored on the distribution disk as the file named MANUAL.TMS;  the
    installation procedure is located in Section 7:  INSTALLATION.

    IF YOU HAVE NOT ALREADY MADE BACKUP COPIES OF TMS, DO SO NOW!

    If you are viewing this on screen, be sure to print it out so you
    will have it in hand for viewing while you run the program.

    Now, for the tutorial:


    Step one:  load TMS

        load TMS by changing the directory to the directory in which
        TMS is installed, then typing "TMS" (without the quotes) and
        pressing the <ENTER> key.  TMS will load in 15 seconds to one
        minute.  The opening screen will say "Welcome to Test Manage-
        ment System" - it will give you a brief status message to show
        how many test items and tests are stored in TMS.

        If any of the files necessary to run TMS are missing, a message
        to that effect will be displayed.  TMS will not run unless all
        the essential files are present, and will terminate with a
        message to allow you to correct the problem.


    Step two:  using a menu

        When the main menu is displayed, scroll through the options using
        the "up" and "down" cursor keys on the numeric keypad on the right
        side of the keyboard.  If nothing happens, you may need to press
        the NUM LOCK key once to make the cursor keys functional.

        Notice as you press the up/down arrows that the magenta highlight
        bar moves up and down, and that the menu choice in the magenta
        highlight bar is displayed in bright white.  Also, notice that
        as you scroll the highlight bar up and down, the message that
        appears in the message area below the menu changes.  This message
        is a simple description of the function invoked by the menu
        choice.f

        Move the highlight bar until it is on "Questions", then press the
        <ENTER> key.  After a second, the "Question" menu will appear.
        In the "Question" menu, move the highlight bar until "Finished" is
        highlighted, and press <ENTER>.  This will return you to the
        main menu.

        Now, in the main menu, highlight any choice EXCEPT "Question",
        and press the 'Q' key.  The "Question" menu appears.  In the
        "Question" menu, highlight any choice other than "Finished", and
        press the 'F' key.  You will return to the main menu.

        This has demonstrated how to use a menu.  You have two ways to
        use the menu;  press the first letter of your selection, or move
        the highlight bar to your selection and press <ENTER>.


    Step three:  adding a question

        From the main menu, select "Question", and from the "Question"
        menu, select "Add".

        The first display will be a scrolling choice screen (in fact, you
        will see a a total of three of them, in succession).  These operate
        somewhat like the menu;  use the cursor up/down keys to move the
        lightbar up and down to your choice, then press <ENTER>.  For now,
        highlight the choice at the top "Choose no AREA, or leave as is"
        This will bring up the next scrolling choice menu - choose the
        same option "Choose no CLASS ...", and the next one also, "Choose
        not AUTHOR...".  We will return to these options in a moment.

        After the three scrolling choice screens, a test item entry screen
        will appear.  At the top you will see L1, L2, L3, L4, L5, L6 -
        these are for each of the six possible stem lines for your question.
        Type in the following item stem:

        Sodium nitroprusside, once prepared for intravenous admin-
        istration, should be replaced with a fresh bottle no later
        than:

        Notice that you can type no more than 60 characters on each line,
        and that there is no word-wrap.

        Also note that you must use line L1 first, and that there should
        be no blank lines above any line.  When TMS reads your question
        to print it out, it will stop printing at the first blank line -
        so if you leave a blank line within the stem of your question,
        the remaining lines will be ignored.

        Now, move the cursor down to option a:, and type the following:

                4 hours from preparation

        Then move to b: and type:



                8 hours from preparation

        Then move to c: and type:

                16 hours from preparation

        Then move to d: and type:

                24 hours from preparation

        Note that you have left the lines immediately under a: , b: , c: ,
        and d:  blank - this is the right way to enter the options.

        Use the line under a:  only if the a: option requires two lines.
        If you enter the a: option in the line immediately below a: without
        entering anything in a: , TMS will not print that option on a test.

        Now move the cursor down to the Correct: area.  Try to move the
        cursor out of Correct: area.  You can't (or at least, I hope you
        can't).  This is a mandatory field - you can't leave it until you
        enter a letter, A, B, C, D, or E.  This is for the correct answer
        to the item.

        Press the <ENTER> key or use the cursor up/down key to more to the
        next area, which is Level:.  Enter 1.  This is intended for level
        of difficulty;  you can enter only a single number, in the range
        of 1 to 9.  You can use it or leave it blank as you wish.

        The next areas are Ext. Ref.  and Int. Ref., for external reference
        and internal reference, respectivelyh.  Each has a 40-character
        line, and you can enter anything you like.  I use them for infor-
        mation about the questions;  "Ext.Ref" for professional journal
        or book references, "Int. Ref" for program syllabus or outline
        information.

        Press <ENTER> and you move down to the "Is this entry complete
        (Y/N) ? area.  It will only accept Y or N;  if you press N, then
        <ENTER>, you will have another opportunity to edit the item.

        If you press Y, then <ENTER>, you will see a red bar with

        S)tore   A)bandon  R)esume editing   [select your choice .....

        Press S, then <ENTER>.  This will store the question in the
        testbank.  If you pressed A, you would be prompted to confirm
        your choice to abandon the question.  If you pressed R, you
        would resume editing.

        After you pressed S and <ENTER>, a black bar appeared which
        said:

        Do you want to CONTINUE adding questions (Y/N) ?

        At this prompt, press N, then <ENTER>.  You will return to
        the "Questions" main menu.  If you had pressed Y, you would
        go through the question adding routine again, starting with
        the scrolling choice screens for AREA, CLASS and AUTHOR.




    Step four:  making a test

        At the main menu, select "Test".

        The first display will be question 1 in the test bank.  You will
        also see a horizontal menu at the bottom of the screen.  This
        works the same as the vertical menus you have already seen, except
        that you use the right and left cursor keys to move the light
        bar, and the message appears on the very last line.  The menu
        reads:

        NEXT   BACK   GOTO   SEARCH   MARK   UNMARK   EDIT  QUIT/SAVE

        Select NEXT to move forward to the next question

        Select BACK to move backward one question

        Select GOTO to enter a question number, then jump to it

        Select SEARCH to set a search path for your questions

        Select MARK to mark a question for inclusion in the test

                notice how the "Marked" area is highlighted and the
                "Total marked" counter is incremented by one

        Select UNMARK to un-select a question for inclusion in a test

                notice how the "Marked" area is no longer highlighted,
                and the "Total marked" counter is decremented by one

        Don't select EDIT at this time - it is used for editing a question,
        and follows the same process as adding a question.

        Now mark a couple of questions, then select QUIT/SAVE.

        If you had selected no question, you would go immediately back to
        the main menu.

        Since you had marked several questions for inclusion in a test, you
        are asked what you want to do with the test - S)ave it or A)bandon
        it.  Enter S to save the test.

        You are now presented with an information entry screen.  Use it to
        enter information about the test, which will be used in administer-
        ing the test.  Test Name and Comments are optional, but very help-
        ful.  Test Code is mandatory entry.  Make sure that the test code
        has some meaning to you - it is only eight characters long.

        When the information is complete and correct, enter Y at the
        "Is the information as complete as you want? (Y/N)" prompt.

        You have just created a test.  To view it, select the "Print"
        option at the main menu - you will see a scrolling choice
        screen with the test you created and three other tests listed -
        the demo tests.




    Step five:  printing a test

        From the main menu, select "Print".

        The first display will be the scrolling choice screen with the
        tests identified.  Select a test.

        The next screen is for information about the printing of the
        test.  To choose where you want to send the test, select P for
        printer only, D for disk only, and B for both.  P will print
        the test directly on a printer, D will save the test as an
        ASCII text file, and B with do both.

        Also select the T if you want to print only the test, or R if
        you want to print the test and a reference key verion of the
        test.

        When you print the test, you will also get a face sheet with
        test information on it, an answer sheet suitable for photo
        copying, and a key template, to overlay an anwer sheet for
        rapid test scoring of paper and pencil tests.  You will, un-
        fortunately, have to cut out the holes on the correct answers
        to make the template usable.

        Once you have selected where to "print" the test and whether you
        want a reference key version, the next screen will ask for in-
        formation to be printed with the test;  simple header and footer
        information, date and instructor.  Once you have entered this,
        the test will print.

        If you selected D or B, the first to be saved is the disk file.
        After it is saved, there will be a message about renaming the
        file(s) so you will not overwrite them the next time you save
        a test to a disk file.


    Step six:  disk-based testing


        Before you make a disk-based test, you will need one formatted
        disk for each test disk you want.  The test disk you create will
        contain a program to administer the test, score the test, and
        save the test.  The test disk can be used in any computer that
        meets the requirements listed under "Remote Computer" in the
        manual.  You can make the disk a system disk (self-booting -
        see the DOS manual) and add an AUTOEXEC.BAT file with the
        single command "TESTOR" on it to make the disk self-running.

        Select "Disk" from the main menu, then select the test you want
        from the scrolling choice screen.

        Once you have selected a test, you will be presented with an in-
        formation entry screen for disk-based testing, including the
        name/description of the test group (make it whatever you like)
        and how you want to administer the test.  The options are:

                Auto score - will display the score to the test taker

                Auto review - will allow the test taker to review the
                              test, with his/her own answers and the
                              correct answers shown.  There is no
                              possibility that the test -taker can
                              change his/her answers during the review

                Auto retest - if the test taker scores below the minimum
                              passing score (which you enter on this
                              screen), will allow one retake.

        Enter the information as you like, and follow the prompts to
        create the test disk.

        You might like to try taking the test yourself.  To do so, just
        exit TMS, make A: the default drive, place the test disk in A:
        and type "TESTOR", then press <ENTER>.  The TESTOR program has
        help screens and is almost fool-proof.  To see how each of the
        options (above) work, when you are in TMS select Y for each of
        them - then you will see your score displayed, review, and re-
        test if your score is lower than the minimum passing score.


    Step eight:  experiment

        Try TMS out - experiment.  By this time, you have a pretty good
        feel for how it works.  Good Luck!









```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1890

     Volume in drive A has no label
     Directory of A:\

    AUTODISK BAT       987   2-10-90  12:00p
    AUTOEXEC BAT       381   2-10-90  12:00p
    CNF_TEST DBF       438   2-10-90  12:00p
    CNF_TMS  DBF       314   2-10-90  12:00p
    CONFIG   SYS        21   2-10-90  12:00p
    FILE1890 TXT      3553   3-20-90   2:40p
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       771   3-20-90   2:37p
    GROUPDEX NTX      2048   2-10-90  12:00p
    HELPONE  TXT     33406   2-10-90  12:00p
    INSTALL  TXT      2968   2-10-90  12:00p
    MANUAL   TMS     98762   2-10-90  12:00p
    QNUM     NTX      2048   2-10-90  12:00p
    README   1ST      1989   2-10-90  12:00p
    SCORES   DBF      7155   2-10-90  12:00p
    STUD_ANS DBF      4259   2-10-90  12:00p
    SYSFILES DBF      1211   2-10-90  12:00p
    TESTBANK DBF     12121   2-10-90  12:00p
    TESTFILE REF      7656   2-10-90  12:00p
    TESTHIST DBF      6498   2-10-90  12:00p
    TESTOR   EXE    148180   2-10-90  12:00p
    TEST_SET DBF       643   2-10-90  12:00p
    TUTOR    TXT     14025   2-10-90  12:00p
           23 file(s)     349472 bytes
                            3072 bytes free
