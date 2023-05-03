---
layout: page
title: "PC-SIG Diskette Library (Disk #1118)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1118/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1118"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "SCREEN-DO"

    SCREEN-DO lets you design and create screens for use in
    BASIC programs.  Each screen that is saved to the disk can be accessed
    through the BLOAD command in BASIC.
    
    SCREEN-DO simplifies the process of editing screens through commands
    that let you easily delete, insert, move, and copy certain
    sections of the screen.  Another function displays the ASCII characters
    numbered 126 to 254 and let you display them on the screen.  One
    option lets you move the cursor across the screen to trace a
    certain character you selected.  SCREEN-DO has on-line help
    that makes it easy to learn, in addition to simplifying the designing of
    screens for use with BASIC programs.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1118.TXT

{% raw %}
```
Disk No  1118
Program Title:  SCREEN-DO version 1.0
PC-SIG version 1

SCREEN-DO enables you to design and create screens that can be used by BASIC
programs.  Each screen that is saved to the disk is 3848 bytes long and can be
accessed through the BLOAD command in BASIC. SCREEN-DO simplifies the process of
editing screens through a number of commands.  There are cursor, line, and
paragraph functions that allow the user to easily delete, insert, move, and copy
certain sections of the screen.  Another function displays the ASCII characters
numbered 126 to 254 and lets the user display them on the screen.  One option
allows the cursor to be moved across the screen to trace a certain character
selected by the user.  SCREEN-DO has on-line help that makes it easy to learn,
in addition to simplifying the designing of screens for use with BASIC programs.

Usage:  Text Editor.

System Requirements:  None.

How to Start:  Type GO (press enter).

Suggested Registration:  $50.00

File Descriptions:

RUN      BAT  Batch file that types the documentation to the screen.
README        How to get started.
TYPEDOC  EXE  Types documentation to the screen in an easy format.
PRINTDOC EXE  Prints documentation.
SDMANUAL DOC  Documentation for SCREEN-DO.
SD       EXE  SCREEN-DO, main program.
SDTEST   SCR  Sample test screen for SCREEN-DO.

PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987, 1988 PC-SIG, Inc.

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                  <<<<  Disk No 1118  SCREEN-DO  >>>>                    ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To print the documentation for SCREEN-DO, type:                         ║
║                    PRINTDOC (press enter)                               ║
║                                                                         ║
║ To run the SCREEN-DO program, Type: SD (press enter)                    ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## SDMANUAL.DOC

{% raw %}
```





                       SCREEN-DO
                      Users Guide

                   by Ralph A. Porter



               Port-of-Call Software Inc.
                    6 LeGrande Blvd.
                   Aurora, IL  60506
                    (312) 897-7682

                     January, 1987
                      Version 1.0



     Copyright 1987, by Port-of-Call Software Inc.
                 All Rights Reserved.
Permission is granted by Port-of-Call for distribution
             of this manual and software.




                        SCREEN-DO
                  Software Support Service

This guide is a detailed outline of how to use SCREEN-DO.
Use of the manual is intended for registered users and to
introduce unregistered users to SCREEN-DO.

Unregistered users:  If you need more information than is
contained in the following pages, you are encouraged to register.
Your registration will bring you frills described in "How to get
a registered copy".

Registered users:  You can call or write for help with technical
questions.  Please have the following information available when
contacting us.

    *  Your registration number.
    *  Your version of SCREEN-DO.
    *  Your version of DOS.
    *  The type of hardware and peripherals you have.
    *  The name of any RAM-resident programs.
    *  The contents of your AUTOEXEC.BAT file, if any.
    *  The contents of your CONFIG.SYS file, if any.

From January 1, 1987 until further notice phone support can only
be provided between 7:00 pm and 10:00 pm Central Time.  Sorry
for the inconvenience.  All questions sent by mail will be
processed and returned as fast as humanly possible.



                          SCREEN-DO
                  Port-of-Call Software Inc.
                       6 LeGrande Blvd.
                      Aurora, IL  60506

                      TABLE OF CONTENTS
                      -----------------


Chapter                 Title                               Page
----------------------------------------------------------------

    1.          INTRODUCTION
                A.  What is SCREEN-DO......................   1

                B.  Hardware requirements..................   2

                C.  How do I get a registered copy?........   3


    2.          USING SCREEN-DO
                A.  General................................   4

                B.  Help me Mister Wizard..................   5

                C.  Load a screen file.....................   7

                D.  Save a screen file.....................   8

                E.  Repeat a character.....................   9

                F.  Special functions......................  10

                G.  Using ASCII characters.................  11

                H.  Tab and Back-Tab feature...............  12

                I.  Move paragraphs of data................  13

                J.  Erasing all or part of the screen......  15

                K.  Quitting SCREEN-DO.....................  16

                L.  Using screen formats with basic........  17


3.              A FINAL NOTE.
                M.  Shareware..............................  18

SCREEN-DO                                   Port-of-Call Software
-----------------------------------------------------------------
                                                          Page  1


           Chapter Number One Introduction.
           --------------------------------



A.  What is SCREEN-DO?
----------------------

     Ok, who really likes to write code for his/her screen

layouts?  Nobody!, so this editor has been written to alleviate

that tedious process and give the programmer back the time that

would  have been spent on coding screens.

    This program will enable you to design and create screens

that can be used by your basic programs.

    SCREEN-DO is not only for BASIC programmers.  No matter

what language you are writing, you can use this system to draw

out your ideas and change them at will before writing the code.

SCREEN-DO                                   Port-of-Call Software
-----------------------------------------------------------------
                                                          Page  2


           Chapter Number One Introduction.
           --------------------------------



B.  Hardware Requirements
-------------------------

     SCREEN-DO will run on an IBM-PC,XT,AT or 100% compatible

computer with at least one floppy disk drive, 128k of memory, and

either a color or monochrome display. .  (We recommend a fixed

disk drive for mass storage and speed of file access.)

    SCREEN-DO will run (performance wise) with little difference

between using a floppy drive or fixed disk, with the exception of

saving and retrieving screens which, from a floppy disk is SLOW.

So if you have the time then keep the floppy drive.

    A color display is not required but adding color to your

screens will greatly enhance their appearance.


SCREEN-DO                                   Port-of-Call Software
-----------------------------------------------------------------
                                                          Page  3


           Chapter Number One Introduction.
           --------------------------------



C.  How do I get a registered copy?
-----------------------------------

FOR A GOLD REGISTRATION:
Send $15 Check or Money Order to:
Ralph A. Porter
6 LeGrande Blvd. Aurora, IL  60506
Port-of-Call Software Inc. (312) 897-7682

*-------------------------------------------------------------------*
| A gold registration provides you the following benefits.          |
|                                                                   |
| * Current SCREEN-DO diskette with your OWN registration number.   |
|                                                                   |
| * Port-of-Call support for one year, which includes phone         |
|                                                                   |
|   services.                                                       |
|                                                                   |
| * Placement on our mailing list for updates and SCREEN-DO mail.   |
|                                                                   |
| * Sincere thanks for your support and encouragement of Shareware! |
*-------------------------------------------------------------------*

FOR A PLATINUM REGISTRATION:
Send $25 Check or Money Order to:
Ralph A. Porter
6 LeGrande Blvd. Aurora, IL  60506
Port-of-Call Software Inc. (312) 897-7682

*-------------------------------------------------------------------*
| A platinum registration provides you the following benefits.      |
|                                                                   |
| * SCREEN-DO-PAINT                                                 |
|   (painting program for SCREEN-DO)                                |
|                                                                   |
| *  A $5 commission when someone registers, and gives your number. |
|                                                                   |
| * Current SCREEN-DO diskette with your OWN registration number.   |
|                                                                   |
| * Port-of-Call support for one year, which includes phone         |
|                                                                   |
|   services.                                                       |
|                                                                   |
| * Placement on our mailing list for updates and SCREEN-DO mail.   |
|                                                                   |
| * Sincere thanks for your support and encouragement of Shareware! |
*-------------------------------------------------------------------*

SCREEN-DO                                   Port-of-Call Software
-----------------------------------------------------------------
                                                          Page  4


          Chapter Number Two Using SCREEN-DO
          ----------------------------------


A.  General.
------------

     First things first.  MAKE A BACKUP COPY!

To make a backup diskette:

    1.  Format a blank diskette with the DOS FORMAT command.

    2.  Insert the original disk into drive A:
    2a. Insert the blank diskette into drive B: if one is present.

    3.  Type COPY *.* B: <ENTER>.

The system will prompt you for "the rest of the story".


If you have have fixed disk:

    1.  Create a working directory for SCREEN-DO.
        (C:MD C:\SCREENDO <ENTER>)

    2.  Put backup copy into drive A:

    3.  Type COPY A:\*.* C:\SCREENDO <ENTER>


A1.  Getting Started.
---------------------

If you are using a fixed drive, change to the C> prompt, and
type CD \SCREENDO <ENTER>

Type SD <ENTER>.

    A greetings from Port-of-Call Software will appear.  Press

any key to continue.  Next a title page will appear again asking

you to press any key to continue.  Now you are in the editing

screen.

SCREEN-DO                                   Port-of-Call Software
-----------------------------------------------------------------
                                                          Page  5


          Chapter Number Two Using SCREEN-DO
          ----------------------------------



B.  Help Me Mister Wizard.
--------------------------

     On-line help is one of the most exciting aspects of this

program.  From almost any point in the program you can get help

by pressing the function key <F1>.  This will bring up

a screen which looks something like this...

          *--------------------------------------------*
          |           Cursor Movement Keys             |
          *-----------*--------------------------------*
          |     1     |  Moves Cursor Up               |
          |     2     |  Moves Cursor Down             |
          |     3     |  Move Cursor Left              |
          |     4     |  Move Cursor Right             |
          |    Home   |  Moves to Upper Left Corner    |
          |    End    |  Moves to Lower Right Corner   |
          |   Pg Up   |  Moves to Top of Screen        |
          |   Pg Dn   |  Moves to Bottom of Screen     |
          |  Back Spc |  Deletes Previous Character    |
          |    Ins.   |  To Insert Characters          |
          |    Del    |  Deletes Current Character     |
          |    Tab    |  Tabs Defined Spaces           |
          |  ShiftTab |  Back Tabs Defined Spaces      |
          *-----------*--------------------------------*
          |               INSTRUCTIONS                 |
          *--------------------------------------------*
          |  Pressing <F1> again will display a        |
          |  detailed help screen.                     |
          |  Pressing any other key will exit.         |
          *--------------------------------------------*

SCREEN-DO                                   Port-of-Call Software
-----------------------------------------------------------------
                                                          Page  6


          Chapter Number Two Using SCREEN-DO
          ----------------------------------



B.  Help me Mister Wizard Cont.
-------------------------------

     Pressing the <F1> key again will display a detailed help

screen which will hopefully answer any questions pertaining to

the use of SCREEN-DO.  Of course you are again requested to

become a registered user so that if any problems do arise you

will have phone and mail support.
----------------------------------------------------------------

Arrow Up   :  Pressing the arrow up key will cause the cursor to
              move up one line of text.
Arrow Down :  Pressing the arrow down key will cause the cursor
              to move down one line of text.
Arrow Left :  Pressing the arrow left will cause the cursor to
              move to the left one character.
Arrow Right:  Pressing the arrow right will cause the cursor to
              move to the right one character.
Home       :  Pressing the Home key will cause the cursor to move
              to the top left position of the screen (1,1).
End        :  Pressing the End key will cause the cursor to move
              to the lower right position of the screen (24,80).
Page Up    :  Pressing the PgUp key will cause the cursor to move
              to the top of the screen and remain in the present
              column (1,x).
Page Down  :  Pressing the PgDn key will cause the cursor to move
              to the bottom of the screen and remain in the
              present column (24,x).
Back Space :  Pressing the Back Space key will cause the cursor
              to delete the character previous to the cursor
              position and drag the rest of the line with it.
Insert     :  Pressing the Ins key will cause the cursor to flash
              the first character.  Any character type hereafter
              will be inserted and move the rest of the line
              over, until one of the cursor movement keys is
              pressed.
Delete     :  Pressing the Del key will delete the character at
              the cursor and drag the rest of the line with it.
tabulation :  Pressing the Tab key will cause the cursor to move
              the defined number of spaces to the right.  (See
              function <F8> for setting the tab.
Shift Tab  :  Pressing the Shift key and the Tab key together
              will cause the cursor to move the defined number
              of spaces to the left.  (See function <F8> for
              setting the tab.
-----------------------------------------------------------------

SCREEN-DO                                   Port-of-Call Software
-----------------------------------------------------------------
                                                          Page  7


          Chapter Number Two Using SCREEN-DO
          ----------------------------------


C.  Load a screen file.
-----------------------

     This function is used to load into the editor previously

saved screen formats.  If you have not already saved a screen

you can load a test screen by pressing <F2> and entering SDTEST.SCR

<ENTER>, when you see "Enter the File Name to Load:"

     If you have saved a screen using the <F3> key then enter the

name you used to save it along with the extension (filename.ext).

     You can not specify a path name prior to the screen name.

C:\SCREENDO\FILENAME.EXT.

SCREEN-DO                                   Port-of-Call Software
-----------------------------------------------------------------
                                                          Page  8


          Chapter Number Two Using SCREEN-DO
          ----------------------------------


D.  Save a screen file.
-----------------------

     This function is used to save screen files that you have

created.

     Pressing <F3> will prompt you to "Enter the File Name to

Save:"  Enter a name you wish to call this screen along with the

extension (filename.ext) and press <RETURN>.  This will save the

screen onto the disk.

     You can not specify a path name prior to the screen name.

C:\SCREENDO\FILENAME.EXT.

SCREEN-DO                                   Port-of-Call Software
-----------------------------------------------------------------
                                                          Page  9


          Chapter Number Two Using SCREEN-DO
          ----------------------------------



E.  Repeat a character.
-----------------------

    This function is used to repeat a character.  You can

repeat all of the keyboard characters.  You can also repeat

ASCII characters 126 to 254 using the ALT+keypad numbers.

    To repeat a character first press function key <F4>.

You will be prompted with "Enter character to Repeat".  Enter

the character you wish to repeat and press <ENTER>

    You will then be prompted to move the cursor to the starting

position on then screen to begin repeating.  Go ahead and move

the cursor to that position.  If the cursor is already where you

want it to be then press <ENTER>.

    Now you are in the repeat mode and wherever you move the

cursor, the character you choose will be displayed.

    To exit the repeat mode press <ENTER> once again.

SCREEN-DO                                   Port-of-Call Software
-----------------------------------------------------------------
                                                          Page 10


          Chapter Number Two Using SCREEN-DO
          ----------------------------------


F.  Special Functions.
----------------------
     This function will allow you to perform several special

operations.  
    
     To enter Special Functions, press function key <F5>.

the screen's MENU LINE will display a new line of function key

attributes.

     <F1>  Help with the special functions.

           This is where you will find an expanded explanation of

           options available.

     <F3>  This will insert a blank line where the cursor is

           located and scroll lines below the cursor downward

           which will cause line 24 to disappear.

     <F4>  This will delete the line where cursor is located

           at and scroll the lines below the cursor up.

     <F5>  Clear Color.

           This will remove any color from the screen and replace

           it with a white foreground and a black background.

    <F10>  This is the Exit and will return the MENU LINE back

           to the main menu line.

SCREEN-DO                                   Port-of-Call Software
-----------------------------------------------------------------
                                                          Page 11


          Chapter Number Two Using SCREEN-DO
          ----------------------------------



G.  Using ASCII Characters.
---------------------------
     This function allows you to display just about all of the

ASCII characters from a menu of characters displayed on the
 
MENU LINE.

     To use a character press function key <F6>.  A menu of

characters will be displayed on the MENU LINE.  Use the arrow

left and arrow right keys to move the cursor over the character

you wish to display and press <Enter>.

     Pressing <F6> again will page through all of the ASCII

characters.  Pressing <ESC> will return you back to the MAIN MENU

LINE.

SCREEN-DO                                   Port-of-Call Software
-----------------------------------------------------------------
                                                          Page 12


          Chapter Number Two Using Screen-DO
          ----------------------------------

H.  Tab.
---------------------------
     This function allows you to set the number of spaces to move

the cursor to the right when you press the <Tab> key and the

number of spaces to move the cursor to the left when you press

the <Shift>+<Tab> keys.

     To change the TAB, press function key <F7>.  You will be

prompted to "Enter new Tab Size (default 8).  Enter a number

between 1 and 160 and press <Enter>.  This will reset the

tab/shift-tab for this session ONLY.  The default of 8 will be

activated when you restart SCREEN-DO

SCREEN-DO                                   Port-of-Call Software
-----------------------------------------------------------------
                                                          Page 13


          Chapter Number Two Using SCREEN-DO
          ----------------------------------



I.  Paragraphs.
---------------
     This function is used for moving, coping and filling
paragraphs of data on the screen.

     A paragraph of data is defined as being an area of 1 to 80
characters long by 1 to 24 lines deep.

     To use the paragraphs functions, press function key <F8>.

The MENU LINE will display a new line of function key attributes.

     <F1>  Help with the special functions.
           This is where you will find an expanded explanation of
           options available.

     <F2>  Mk Begin.
           Move the cursor to the top left corner of the
           paragraph to be manipulated and press <F2>.  An arrow
           will be displayed to mark (Mk) that point (unless
           there is already a character at that point, in which
           case the character will blink).

     <F3>  Mk End.
           Move the cursor to the bottom right corner of the
           paragraph to be manipulated and press <F3>.  An arrow
           will be displayed to mark (Mk) that point (unless
           there is already a character at that point, in which
           case the character will blink).

     <F4>  Target.
           Now that both the begining and end points are marked,
           move the cursor to the point that will be the top left
           corner of the target area and press <F4>.  A character
           will be displayed to mark that point (unless there is
           already a character at that point, in which case the
           character will blink).

     <F5>  Reset.
           This will reset markers previously selected.

SCREEN-DO                                   Port-of-Call Software
-----------------------------------------------------------------
                                                          Page 14


          Chapter Number Two Using SCREEN-DO
          ----------------------------------



I.  Paragraphs cont.
--------------------
     <F6>  Move.
           This will move the paragraph that was previously
           marked, providing however there is room on the screen
           to hold the paragraph that is marked.

     <F7>  Copy.
           This will copy the paragraph that was previously
           marked, providing however there is room on the screen
           to hold the paragraph that is marked.

     <F8>  Fill.
           This will fill the paragraph with any character
           selected at the prompt "Select Character To fill Area
           With:"

    <F10>  This is the Exit and will return the MENU LINE back
           to the MAIN MENU LINE.

SCREEN-DO                                   Port-of-Call Software
-----------------------------------------------------------------
                                                          Page 15


          Chapter Number Two Using SCREEN-DO
          ----------------------------------

J.  Eraser.
-----------
     This function is used for erasing all or part of the screen

     To use the eraser press the function key <F9>.  The MENU

LINE line will display a new line of function key attributes.

     <F1>  Help with the special functions.
           This is where you will find an expanded explanation of
           options available.

     <F2>  Cursor to end of line.
           This will erase the screen from the cursor to the end
           of the line that the cursor is on.

     <F3>  Begining of line to cursor.
           This will erase the screen from the begining of the
           line that the cursor is on to where the cursor is
           located.

     <F4>  Erase Line.
           This will erase the entire line that the cursor is on.

     <F5>  Top.
           This will erase the screen from the top down until the
           cursor is reached.

     <F6>  Bottom.
           This will erase the screen from the cursor to the
           bottom of the cursor.

    <F10>  This is the Exit and will return the MENU LINE back
           to the MAIN MENU LINE.

SCREEN-DO                                   Port-of-Call Software
-----------------------------------------------------------------
                                                          Page 16


          Chapter Number Two Using SCREEN-DO
          ----------------------------------

K.  quitting the System.
-----------------------
     Pressing <F10> will leave SCREEN-DO and exit to DOS.

SCREEN-DO                                   Port-of-Call Software
-----------------------------------------------------------------
                                                          Page 17


          Chapter Number Two Using SCREEN-DO
          ----------------------------------

L.  Using Screen Files.
-----------------------

     Each screen you create and save is saved as a binary file

that is 3968 bytes in length.  To use this file in your BASIC

application, you must load it into the appropriate screen buffer

(offset &hb800 for color, &hb000 for monochrome) using the BLOAD

"filename.ext",0 syntax.

    If you are not familiar with bloading and bsaveing screen

files, venture into that seldom used BASIC reference MANUAL and

discover how much time you have wasted writing code for screen

layouts.

SCREEN-DO                                   Port-of-Call Software
-----------------------------------------------------------------
                                                          Page 18


          Chapter Number Three A Final Note.
          ----------------------------------


    SCREEN-DO is a useful and interesting program.  We have spent

many hours working up the concept and implementation of this

program and will continue to upgrade and improve its performance.

   But alas, like any good Shareware product, there must be User

Support!  By registering and becoming involved with this product

you yourself will add to the growth of SCREEN-DO.


    We invite anybody reading this to drop us a line and tell us

what you like or dislike about SCREEN-DO.  If Port-of-Call Software

uses your idea, and you are a registered user, we will provide you

with a current version of SCREEN-DO (if you are using an older one)

and the next upgrade at no charge (if applicable).


    So please distribute this program freely and promote the

registration of this and ALL Shareware products so that

everybody can continue to enjoy top quality software at reasonable

prices.

    This is a user supported product.  It is not public domain

and not free software.  Please use this product on a trial basis.

Then, if you wish to continue using or, if you need technical

support then you must register by sending in the appropriate

amount to the address shown below.


Thank you,

Ralph A. Porter
President
Port-of-Call Software Inc.
6 LeGrande Blvd.
Aurora, IL  60506
(312) 897-7682




```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1118

     Volume in drive A has no label
     Directory of A:\

    FILE1118 TXT      1482   7-27-88   3:35p
    GO       BAT        38  10-19-87   3:56p
    GO       TXT       617   7-07-88  10:05a
    PRINTDOC EXE     37722   5-02-87  12:04p
    READ     BAT        29  12-02-87   3:38p
    README             523  12-02-87   3:39p
    SD       EXE     85982   5-02-87  12:04p
    SDMANUAL DOC     27206   5-27-87   7:59p
    SDTEST   SCR      3848   5-02-87  12:04p
    TYPEDOC  EXE     36658   5-02-87  12:04p
           10 file(s)     194105 bytes
                          123904 bytes free
