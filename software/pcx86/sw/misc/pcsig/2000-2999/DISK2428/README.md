---
layout: page
title: "PC-SIG Diskette Library (Disk #2428)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2428/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2428"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "ANIMAL FARM 1 OF 2 (#2429 ALSO)"

    Once again, the author of the shareware programs MACBETH and LORD OF THE
    FLIES demonstrates his expertise in English Literature, this time with
    the book, ANIMAL FARM.  Giving full credit to the good teacher, the
    author's purpose with this and other programs like it is to facilitate
    learning, to make it as fun and as painless as possible.
    
    Geared to the high school level, the student is given background
    material on George Orwell.  The style of the book, the characters and
    themes of the story are discussed.  The student is given various exam
    tips, study questions are suggested and a section is included on how to
    take an essay test.
    
    A teacher himself, the author of ANIMAL FARM is out to help you win!
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE2428.TXT

{% raw %}
```
Disk No: 2428                                                           
Disk Title: Animal Farm 1 of 2 (#2429 also)                             
PC-SIG Version: S1                                                      
                                                                        
Program Title: Animal Farm                                              
Author Version: 1.0                                                     
Author Registration: $15.00; Site license $60.00                        
Special Requirements: 512K RAM and CGA.                                 
                                                                        
Once again, the author of such shareware programs as MACBETH and LORD OF
THE FLIES lends us his expertise in English Literature, this time on the
book ANIMAL FARM.  Giving full credit to the good teacher, the author's 
purpose with this and other like programs is to fascilitate learning, to
make it as fun and as painless as possible.                             
                                                                        
Geared to the High School level, the student is given background about  
the author, the style of the book, characters, themes, etc. of the      
story, and, as with the other programs, is given various exam tips,     
study questions, and a section on how to take an essay test.            
                                                                        
A teacher himself, the author of ANIMAL FARM is out to help you win!    
                                                                        
                                                                        
                                                                        
                                                                        
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
║              <<<<  PC-SIG Disk #2428  ANIMAL FARM   >>>>                ║
║                      (Disk 1 of 2, #2429 also)                          ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To print the author's documentation and installation instructions,      ║
║                type:  COPY MANUAL.TXT PRN (press Enter)                 ║
║                                                                         ║
║        (You may want to first type:  TYPE README.TXT (Enter))           ║
║                                                                         ║
║                                                                         ║
║                                           Copyright 1990, PC-SIG, Inc.  ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## HEADER.BAS

{% raw %}
```bas
DECLARE SUB GamesMenu ()
DECLARE SUB FormatShake (Q$, Tail$)
DECLARE SUB DrawBox (row1%, col1%, row2%, col2%)
DECLARE SUB PRINTNOTES (File$, Topic$)
DECLARE SUB FormatString (Text$, Tail$, col%)
DECLARE SUB PageDown (Topic$)
DECLARE SUB PageUp (Topic$)
DECLARE SUB WriteText (Text$, HorPos%, MaxLen%)
DECLARE SUB ChangeDriveDirectory ()
DECLARE SUB ChangeSpeed ()
DECLARE SUB ChangeMenuColour ()
DECLARE SUB ChangeTextColour ()
DECLARE SUB ChangeChoice ()
DECLARE SUB GetKey ()
DECLARE SUB DrawMenu ()
DECLARE SUB PrintMenu ()
DECLARE SUB MENU ()
COMMON SHARED M$(), NM, N, M, J, k, HJ, CM, Choice$, fg, bg, speed, mc, dd$, Q$(), CA$(), A1$(), A2$(), A3$()
DECLARE SUB ShuffleArray (A!())

COMMON SHARED Text$, Book$, Context$(), Chapter(), PG()


' Function and control key constants
CONST esc = 27, down = 80, up = 72, left = 75, right = 77
CONST Enter = 13, SPBAR = 32, PGDN = 81, PGUP = 73
CONST ctrls = 19

'Colour Constants
CONST black = 0, BLUE = 1, GREEN = 2, CYAN = 3, red = 4, MAGENTA = 5
CONST BROWN = 6, white = 7, BRIGHT = 8, blink = 16
CONST yellow = BROWN + BRIGHT

'Variables used by Retrieve Module
COMMON SHARED File$, Topic$, LC, NumScreen$, NumScreen, NumLine$(), NumLine(), T$()
COMMON SHARED Page, PrevPAGE, FolPage, SCR, PPPage, x$(), NQ()


```
{% endraw %}

## MANUAL.TXT

{% raw %}
```








     ***************************************************************************
     *                                                                         *
     *                                                                         *
     *                                                                         *
     *                                                                         *
     *                                                                         *
     *                                 ANIMAL FARM                             *
     *                                                                         *
     *                                                                         *
     *                                                                         *
     *                                                                         *
     *                                                                         *
     ***************************************************************************



                          Activities and Notes for Students




                                 Programme and Notes




                                         by





                                    Steve Herbert





















                                        (p1)









                                  Table of Contents
                                  =================






     Introduction to Animal Farm................................3

     Introduction to the Programme..............................3

     System Requirements........................................4

     Installation...............................................4

     How to get Started.........................................5

     Using the Menus............................................5

     The Main Menu..............................................6

     Quizzes and Games Menu.....................................6

     Notes Menu.................................................7

     Instructions...............................................7

     The Competition............................................8

     Customising the Programme..................................9

     About the Programme........................................10

     Registration Form..........................................11

     Entry Form.................................................12



















                                        (p2)








                             INTRODUCTION TO ANIMAL FARM
                             ===========================

     'Animal Farm' is one of George Orwell's most famous books, and possibly the
     most widely read. Because of the simple style in which it is written, it
     may be read by children as an entertaining story, as well as by adults
     searching for a deeper meaning.

     Written in 1945, this short novel is an expression of Orwell's
     disillusionment with Communism. It was the book which made him famous,
     although he consolidated his fame with his last book, '1984'.

     What is striking about the book is the way in which Orwell has so neatly
     captured several levels of meaning in straightforward prose. For many years
     banned in the USSR, it is a vicious satire of the Communist Revolution in
     Russia and the Stalinist years. On another level, it depicts the faults of
     any totalitarian system. However, the surface level of the animal fable has
     a certain charm of its own.

                            INTRODUCTION TO THE PROGRAMME
                            =============================

     The programme consists of a series of activities to assist high school
     students learning Orwell's novel 'Animal Farm'. The student can select the
     activity of his choice from a series of menus.

     Activities include several quizzes or games, notes on a wide variety of
     topics, graphics of the Farm and even a competition with the chance to win
     worthwhile prizes.

     The games are designed to be fun and at the same time to provide a fairly
     painless way to memorise quotations, learn important passages, and in
     general, to become familiar with the plot, characters and themes of the
     novel.























                                        (p3)








                                 SYSTEM REQUIREMENTS
                                 ===================

     The programme will run on IBM and Compatible computers with 512Kb of memory
     or more. CGA card is required, although it is not necessary to have a
     colour monitor. However, colour is recommended, especially for the games.

     The programme is normally supplied on two 5.25" floppy disks and the
     default set up is for the programme disk to be in Drive A and the data disk
     in Drive B. These defaults may be changed, however, from the SETUP option
     on the Main Menu, and the programme will also run from a single drive (of
     720Kb or more) or from a hard disk.


                                    INSTALLATION
                                    ============

     You are advised to use the DOS DISKCOPY command to back up your disks
     before you use them.

     If you intend to run the programme from the original disks, or from back-
     ups of the originals, no installation is required. If you want to run it
     from a hard disk or from a high capacity disk, just follow the simple steps
     below to install it successfully.

     1. Create a new directory or subdirectory for the programme (if desired)
     using the DOS MKDIR or MD command (See your DOS manual).

     2. Copy all the files from the Programme Disk and the Data Disk to the
     chosen directory or sub-directory using the COPY *.* command. You may copy
     the data files to a different directory from the programme files if you
     wish.
     N.B. The Programme Disk (Disk 1) is the one containing the main programme
     file AFARM.EXE

     3. When you first run the programme, select SETUP from the Main Menu, and
     alter the Drive/Directory setting to the one where you copied the data
     files. You must do this before you attempt any of the activities which load
     data from the disk. (Most of them do!).

     4. Please note that although the files from the data disk may be stored ina
     separate directory, ALL the files from the Programme Disk must be kept
     together in the same directory.














                                        (p4)








                                 HOW TO GET STARTED
                                 ==================

     A. Two 5.25" Floppy Disks

     Insert the Programme Disk in Drive A and the Data Disk in Drive B. Now turn
     on, or reboot your computer. N.B. You can reboot by pressing the Ctrl
     key,the Alt key and the Del key all at once, or by pressing the Reset
     Button if there is one.
     Alternatively, if your computer is already running and the DOS prompt is on
     the screen, insert the disks as above. Now change to Drive A if necessary
     by typing A: <<Enter>> To run the programme, type AUTOEXEC <<Enter>>

     B. One 3.5" disk

     Insert the disk in your drive and turn on, or reboot your computer.
     Alternatively, if your computer is already running and the DOS prompt is on
     the screen, make sure you are using the correct drive (Usually Drive
     A:),and then type AUTOEXEC <<Enter>>

     C. Hard Disk

     Make sure you have followed the instructions in the previous section to
     make a directory and copy the files to it. Now change to that
     directory.(e.g. If your Hard Disk is Drive C and you created a new
     directory called LITDISK, then type CD C:\LITDISK) <<Enter>>)
     Now type AUTOEXEC <<Enter>>


                                   USING THE MENUS
                                   ===============

     You find your way around the different parts of the programme by using a
     very simple system of menus.
     The choices offered at each level are shown on the screen, with the first
     one high-lighted. Use the arrow keys to move the high-light to the
     selection you want. Then press the <<Enter>> key to go to that selection.If
     your computer has a numeric key-pad, you may use those arrow keys as well,
     but remember to turn off the Num Lock function.

     To Find A Menu

     If a menu is not currently showing on the screen, you can almost always get
     to one by pressing the <<Esc>> key. This will halt the current activity,and
     display the active menu.












                                        (p5)








                                    THE MAIN MENU
                                    =============

     The Main Menu Options are described briefly below.

     Introduction
     This is a welcome to the programme and a brief description of its features.

     Quizzes And Games
     Choose one of the quizzes and games available from a further menu.

     Notes
     This also leads to another menu, listing the different topics for which
     notes are available.

     Competition
     This reveals details of the competition, and gives the coded message which
     makes up Level 1 of the competition.

     The Farm
     This segment reveals a map of Animal Farm as it is described in the novel,
     with enlargements of certain key areas and associated notes.

     Set-Up
     Use this selection to change the colour of the text and the menus, or to
     alter the speed at which the programme runs; also to set the drive and
     directory in which the data files are stored.

     Quit
     Return to DOS

                               QUIZZES AND GAMES MENU
                               ======================

     These are the options available on this menu.

     Quotation Quiz
     Tests your detailed knowledge of the book by asking you to choose the
     correct speaker of each quotation. Over 90 quotations to really test you.A
     good score here earns you a clue to the competition code.

     Missing Words
     Vital passages from the text can be learnt by heart, as you guess the words
     missing from the screen. Great revision value!

     Save Boxer
     An addictive word-guessing game. To save Boxer from the threatening
     situation, you must guess the mystery word in time. Boxer's life depends on
     you!

     Revolution
     A simulated board game in the Snakes and Ladders tradition. Become Napoleon
     as you follow his changing fortunes through the plot of the text. Try to
     beat your own record for completing this game!



                                        (p6)








                                     NOTES MENU
                                     ==========

     Major topics are:

     Plot Summaries
     This leads to another menu allowing you to select an overall summary or
     chapter summaries.

     Character Studies
     Another menu to select notes on any of the major characters

     Exam Questions
     A selection of notes on how to handle different exam questions.

     Themes
     Discusses the major ideas of the novel

     Background
     Brief notes on relevant points.

     Style
     A discussion of Orwell's language.

     The Author
     Notes about Orwell's life and a portrait.


                                    INSTRUCTIONS
                                    ============

     The programme has been designed to be as user-friendly as possible. Most of
     the activities have on-screen help. Where more detailed instructions are
     necessary, this option has been included in the menu for that particular
     activity.

     Activities which include their own instructions are:

     Quotation Quiz (Games Menu)

     Missing Words (Games Menu)

     Save Boxer (Games Menu)

     Revolution (Games Menu)

     The Farm (Main Menu)

     In addition, you can receive help on any menu by pressing <H>.








                                        (p7)








                                   THE COMPETITION
                                   ===============

     One of the unique features of this programme is the on-disk competition. To
     take part in the competition, you must first solve a code. To see the coded
     message, select COMPETITION from the Main Menu.

     Once you have cracked the code, you will be able to confirm your success
     with part one of the competition, and this confirmation will be written
     onto the disk. This will gain you access to the next level of the
     competition, a treasure hunt on Animal Farm.

     Once the treasure is discovered, you will be able to answer a series of
     questions which make up Part Three of the competition.

     Write your solution to the coded message on the Entry Form (Included as
     page 12 of this manual), and also write the answers to the five Buried
     Treasure questions. Please note that you must be a registered user of the
     programme to be eligible to enter the competition.

     First prize is cash to the value of approximately US$50 plus computer
     products. Second prize US$15 plus computer products. Twenty consolation
     prizes of computer products. The value of the prizes may vary slightly from
     year to year, but should increase rather than decrease (assuming enough of
     you lovely people out there in Computer-land buy my programmes).

     The competition is an annual one closing at the end of November each
     year,and with the winning entries drawn at the beginning of December.

     All prize-winners will be notified by post, and all entrants in the
     competition will receive a list of results.


























                                        (p8)








                              CUSTOMIZING THE PROGRAMME
                              =========================

     With a modicum of knowledge and the ability to use a text processor, you
     should be able to customise some of the data used in the programme, if you
     so desire. The most obvious areas where this can be accomplished are as
     follows:

     QUOTATION QUIZ  - The data for this quiz is contained in the text file
     AFQUOTES.QQZ on Disk 2. The first item in the file is the number of quotes
     currently in the file. Don't forget to update this if you add or delete
     quotes. Each question must contain the following items: The quotation
     itself, the correct answer, 3 incorrect answers, a sentence explaining the
     context of the quotation, the Chapter number, the page number. Use ordinary
     Arabic numerals for Chapter and page numbers, not Roman numerals. A quick
     look at the file should make it clear what to do if you are still confused.

     SAVE BOXER - This is my version of the Hangman game. You can easily add new
     words by altering the file SBOXER.DTA on Disk 2. The first item in the file
     is the number of words. Don't forget to update this if you add or delete
     words. Each word used in the game also has an accompanying definition; this
     must be included.

     NOTES - I don't recommend that you alter the notes, as my system for
     printing them to the screen is a little peculiar to say the least, but if
     you must experiment, then go ahead. Plot summaries can be identified by the
     file suffix .PLT , Character studies have .CHR , while other notes have the
     suffix .NTS  The first item in each file is the number of screens or pages
     of data, then each 'page' has the number of data items on that page.
     Beginning an item with a * indicates that the item is to be high-lighted in
     the text. To print a blank line, include an item consisting of 4 or more
     spaces enclosed in quotation marks. You may need to experiment a little to
     find out just how much will fit on each page.

     MISSING WORDS - If you have a lot of time on your hands, and are by nature
     a patient and tolerant person like me, then you can try writing different
     PASSAGES for the Missing Words game. I'll leave you to figure out how it's
     done! Unfortunately, you won't be able to change the reference to the
     PASSAGE in the GAMES Menu.

     FAMILY FEUD - Not much you can change here, except for the True/False
     questions. These are contained in the file BORDATA.DTA  Take care not to
     make the questions too long.

     I guess that's about all, unless you are one of those people who can't
     resist seeing what Orwell looks like wearing spectacles and a false nose.
     The pictures are all in BLOAD format.










                                        (p9)








                                 ABOUT THE PROGRAMME
                                 ===================

     This programme began its life as a set of quizzes I programmed for my own
     Literature students at a High School here in Singapore. Over the last two
     years, the programme has grown and developed and gone through a variety of
     versions, to become what it is today. It has been quite well-received by
     students here who face the Cambridge GCE O Level examinations.

     Originally, as the new owner of an Apple II clone, I programmed in
     Applesoft Basic. My first programme (Julius Caesar) fitted easily onto one
     5.25" floppy disk,and consisted mainly of three games and a segment on the
     Globe Theatre. I believed then as I believe now, that people do not really
     want to sit and read pages of notes from a computer monitor.

     However, feedback from users indicated a desire for more notes, so the
     programme quickly grew. It also changed direction to become IBM-compatible
     to run on the computer of choice of 80% of the student population here in
     Singapore. So I put my prejudices aside and picked up a smattering of
     GWBasic.

     As the programme grew and became more sophisticated, I felt the need for
     something a little more powerful and faster than interpreted Basic, so
     Microsoft QuickBasic made its appearance. I still see room for improvements
     and additions to the programme, and each new version on each different text
     is a little more sophisticated than its predecessor. Who knows what the
     future will bring?

     Currently, available titles are:
     ANIMAL FARM
     MACBETH
     ROMEO AND JULIET
     LORD OF THE FLIES by William Golding
     WALKABOUT by James Vance Marshall
     THE GHOST OF THOMAS KEMPE by Penelope Lively

     and next on my hit-list

     TO KILL A MOCKINGBIRD by Harper Lee


















                                        (p10)








                                  REGISTRATION FORM
                                  =================

     To Steve Herbert
     154 Sixth Ave.
     Avenue Park
     Singapore 1027

     A. PERSONAL USE
     ===============
     Please enroll me as a registered user of your programme 'ANIMAL FARM'.
     I enclose payment in the form of:
                                       *Bank Draft in Singapore currency S$20
                                       *Personal cheque in any currency to the
                                        equivalent of US$15


     B. SITE LICENCE
     ===============
     Please register my application for a Site Licence for the use of your
     programme 'ANIMAL FARM'. I understand that the Licence permits the making
     of as many copies as desired of the above programme for use within the
     physical boundaries of any one school or other educational institution, in
     a classroom situation only. It does not permit copying and/or distribution
     of the programme for individual use outside the classroom.
     I enclose payment in the form of:
                                       *Bank Draft in Singapore currency S$100
                                       *Personal cheque in any currency to the
                                        equivalent of US$60
     *Delete one


     NAME.............................................................

     ADDRESS....................................................................

             ...................................................................

             ...................................................................

     SCHOOL.....................................................................

     OCCUPATION ..............................AGE ............

     PROGRAMME OBTAINED FROM .........................................

     COMMENTS................................................................
          
             ................................................................

             ................................................................

             ................................................................

             ................................................................


                                        (p11)







                                     ENTRY FORM
                                     ==========

     LEVEL ONE - CODE BREAKING  Write the decoded message clearly and accurately
     on the lines below
     ...........................................................................

     ...........................................................................

     ...........................................................................

     ...........................................................................

     ...........................................................................

     ...........................................................................

     ...........................................................................

     LEVEL TWO - Buried Treasure and LEVEL THREE - Question Answers  Write your
     answers to the five buried treasure questions clearly and accurately in the
     spaces below.
     1. ........................................................................

        ....................................................................... 

     2. ........................................................................

        ....................................................................... 

     3. ........................................................................

        ........................................................................

     4..........................................................................

        ........................................................................

     5. ........................................................................

        ........................................................................


     NAME.............................................................

     ADDRESS....................................................................

             ...................................................................

             ...................................................................








                                        (p12)



```
{% endraw %}

## README.TXT

{% raw %}
```
***************************************************************************
*                                                                         *
*                                                                         *
*                                                                         *
*                                                                         *
*             This is the Shareware version of ANIMAL FARM                *
*                                                                         *
*                                                                         *
*     Read or print the manual MANUAL.TXT on Disk 1 for instructions      *
*     on running the programme and how to register with the author        *
*     who is a poor impoverished school teacher from Singapore            *
*                                                                         *
*                                                                         *
*                                                                         *
*     Other titles in this series include:                                *
*                       MACBETH                                           *
*                       ROMEO & JULIET                                    *
*                       LORD OF THE FLIES                                 *
*                       WALKABOUT                                         *
*                       THE GHOST OF THOMAS KEMPE                         *
***************************************************************************
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2428

     Volume in drive A has no label
     Directory of A:\

    AFARM    EXE    154212   4-01-90   7:36p
    AUTOEXEC BAT       100   9-15-90   1:51p
    CHECK                4   4-01-90   9:09a
    CLUES              266   4-01-90   9:10a
    COMMAND  COM     25276   7-24-87  12:00a
    CONFIG   AFM        30   4-01-90   9:11a
    HEADER   BAS      1303   3-21-90   9:16p
    SCREEN   PIC      4103   1-04-80  10:48p
    TITLE    PIC     16391   9-15-90   1:48p
    REGISTER            31   9-15-90   1:35p
    MANUAL   TXT     24017   9-14-90  11:04p
    README   TXT      1617   9-14-90  11:39p
    FILE2428 TXT      2221  10-18-90   4:59p
    GO       BAT        40   1-01-80   6:00a
    GO       TXT       927  10-17-90   9:08a
           15 file(s)     230538 bytes
                           80896 bytes free
