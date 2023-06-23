---
layout: page
title: "PC-SIG Diskette Library (Disk #2120)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2120/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2120"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "WYNDFIELDS"

    WYNDFIELDS is a good general-purpose database program for those of us
    who don't need all the fancy features. Yet it runs by pull-down menus
    making it even easier to use and understand.
    
    Creating and printing mailing labels or detailed reports can be
    accomplished painlessly from within the program. Multiple indices are
    maintained automatically for you, and several methods are available for
    extracting the information you need. For more advanced users,
    WYNDFIELDS also offers extensive string and math functions for use in
    searches and calculated fields.
    
    WYNDFIELDS has full mouse support; context-sensitive, cross-referenced
    help screens; import/export capabilities; and mail merge files
    compatible with most popular word processors -- features you might not
    expect in such a basic database.
    
    Databases created with WYNDFIELDS can have 70 different fields, 2
    billion records, and 10 different indices, each with 10 key fields in
    either ascending or descending order.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE2120.TXT

{% raw %}
```
Disk No: 2120                                                           
Disk Title: WYNDFIELDS                                                   
PC-SIG Version: 1                                                       
                                                                        
Program Title: WYNDFIELDS                                               
Author Version: 1.1                                                     
Author Registration: $70.00                                             
Special Requirements: 512K RAM.                                         
                                                                        
WYNDFIELDS is a general purpose database program, useful for keeping    
track of any type of structured information.  Data may be added, changed
removed, found, displayed, analyzed, and printed using pull-down menus. 
                                                                        
Creating and printing mailing labels or detailed reports can be         
accomplished painlessly from within the program.  Multiple indices are  
maintained automatically for you, and several methods are available for 
extracting exactly the information you need from your files.  For more  
advanced users, WINDFIELDS also offers extensive string and math        
functions for use in searches and calculated fields.                    
                                                                        
WYNDFIELDS has full mouse support, context sensitive, cross-referenced  
help screens, import, export, capabilities and mail merge files         
compatible with most popular word processors.                           
                                                                        
The databases created with WYNDFIELDS can have up to 70 different fields
and may contain up to 2 billion records. Each database may have up to   
10 different indices, each withup to 10 key fields in either ascending  
or descending order.                                                    
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## WF.DOC

{% raw %}
```








                                          __
                            __    __|  __|__  -   __   |   __|   ___
            |  |  |  |  |  |  |  |  |    |    |  |__|  |  |  |  |__
            |__|__|  |__|  |  |  |__|    |    |  |___  |  |__|  ___|
            ____________|  _________________________________________





                               Basic Instructions







                           Written by Thomas J. Mosbo







                              Copyright  (C)  1989

                                    WYNDWARE
                        101 E. Milwaukee St.,  Suite 423
                          Janesville, WI 53545  U.S.A.
                                 (608) 755-1628





                               Table of Contents


               I. Introduction. . . . . . . . . . . . . . . . . . .3

              II. WYNDFIELDS Files. . . . . . . . . . . . . . . . .3

             III. Getting Started . . . . . . . . . . . . . . . . .4

              IV. Using the Menus . . . . . . . . . . . . . . . . .4

               V. Getting Help. . . . . . . . . . . . . . . . . . .5

              VI. Viewing Data. . . . . . . . . . . . . . . . . . .6

             VII. Working with Data . . . . . . . . . . . . . . . .7

            VIII. Database Design . . . . . . . . . . . . . . . . 10

              IX. Indexing. . . . . . . . . . . . . . . . . . . . 13

               X. Finding Data. . . . . . . . . . . . . . . . . . 15

              XI. Designing Labels. . . . . . . . . . . . . . . . 18

             XII. Printing. . . . . . . . . . . . . . . . . . . . 20

            XIII. Advanced Features . . . . . . . . . . . . . . . 20

             XIV. Wyndware Products . . . . . . . . . . . . . . . 21



       At the end of most sections are a series of exercises which together
       form a mini-tutorial.  These exercises follow a logical progression,
       building on what was done in previous exercises.  It is therefore
       recommended that the exercises be followed in order as presented
       throughout this booklet.


                                                                            3


   I. INTRODUCTION

       WYNDFIELDS is a general purpose Database program, useful for
       keeping track of any type of structured information.  Data may be
       added, changed, removed, found, displayed, analyzed, and printed
       easily using the friendly pull-down Menu System.

       Creating and printing Mailing Labels or detailed Reports can be
       accomplished painlessly from within the program.  Multiple Indices
       (ways of ordering your data) are maintained automatically for you, and
       several methods are available for extracting exactly the information
       you need from your files.  For more advanced users, WYNDFIELDS also
       offers extensive string and math functions for use in searches and
       calculated Fields, and its date and time tracking abilities are
       unsurpassed.

       The program requires a computer with at least 512K, operating with PC
       or MS DOS 3.0 or greater.  If you have a mouse connected, WYNDFIELDS
       will detect it, and a full mouse interface will be available to you.

       WYNDFIELDS is user-supported software.  You are encouraged to use,
       copy, and distribute it as freely as you wish.  But if you do find it
       useful, we ask that you please send a registration fee of $70.00 to
       WYNDWARE, 101 E. Milwaukee St., Suite 423, Janesville, WI 53545 U.S.A.
       When you send in your fee, you will receive the latest version of
       WYNDFIELDS and a detailed Manual, complete with Tutorial.  You will
       also become eligible to receive updates to the program as improvements
       are made to it.

       While we have done our best to create a good product, this program is
       provided "as is" without warranty of any kind, either expressed or
       implied.  The risk as to the quality and performance of the program
       for a particular purpose is with you.



   II. WYNDFIELDS FILES

       The following program files are included with WYNDFIELDS:

         WF.EXE - WYNDFIELDS program file.
         WF.HLP - Help file for WYNDFIELDS.

         These are the only files you need to use the program.


       These additional sample data files are also included:

         ST*.* - Star Trek sample Database.
         ML*.* - Mailing List sample Database.

         These files will be used in the exercises in the following sections,
         and you are encouraged to experiment with them freely.


                                                                            4


       The remaining files are intended to help you to get started:

         README.BAT  - Gives initial instructions.
         INSTALL.EXE - Creates a working copy of WYNDFIELDS for you.
         WF.DOC      - This booklet.



   III. GETTING STARTED

       In order to include all the WYNDFIELDS files on one disk, they have
       been "squeezed" together.  To "unsqueeze" them and create a working
       copy of WYNDFIELDS, you must run the INSTALL program:
         (If you are installing to Floppy Disks you will need to have 3
           formatted Diskettes ready.)
         Place the distribution disk in drive A.
         At the A:> type INSTALL and press Return.
         Follow the prompts and answer all questions.

       Once installed, to run WYNDFIELDS on a Floppy-based system:
         Place the Program Disk in drive A.
         Place a Data Disk in drive B.
         At the A:> type WF and press Return.

       To run WYNDFIELDS on a Hard Disk:   e.g. drive C
         Change Drive to Hard Disk              type  C:
         Change to WYNDFIELDS Directory         type  CD \WFIELDS
         Start Program                          type  WF

       When the Wyndware Title Screen appears, WYNDFIELDS is ready to work.



   IV. USING THE MENUS

       The available Menus are listed on the top line of the Screen.  To
       display a Menu:  Press the Function Key shown before the name of the
       Menu.  To choose a Command from the displayed Menu:  Type the first
       letter of the Command.  (Alternately, you may press the Up or Down
       Arrow Keys to highlight to the desired Command, then press Return to
       choose it.)

       Commands which are followed by an asterisk (*) may be chosen even when
       the Menu for that Command is not displayed by holding down the Alt key
       and typing the first letter of that Command (or if no Menu is
       displayed by simply typing the first letter of the Command).

       When a Menu is displayed you can move from Menu to Menu by pressing
       the Left or Right Arrow Keys, or by pressing the Function Key
       corresponding to the desired Menu.

       To choose Commands using a mouse:  Point to the desired Menu on the
       top line to display that Menu.  Then point to the desired Command on
       the Menu and click the Left Mouse Button to choose that Command.


                                                                            5


       Exercise: USING THE MENUS

         Press F2 to display the SELECT Menu.
         Press the Right Arrow Key 7 times (slowly) to display each of the
           other Menus.  Notice that very few Commands are available since no
           Database has yet been selected for use.
         Press the Down Arrow Key twice to highlight the word "Exit".  Notice
           that a description of the highlighted Command is displayed on the
           right panel of the bottom bar.
         Press the Return Key to choose the EXIT Command.  Your WYNDFIELDS
           session is ended and you are returned to DOS.
         Type WF and press Return to restart WYNDFIELDS.



   V. GETTING HELP

       WYNDFIELDS provides comprehensive context-sensitive and cross-
       referenced online help.  To enter Help:  Press the F1 Key anywhere in
       the program.  If you are currently carrying out a Command, a Help
       Screen related to that Command is displayed.  Otherwise a Screen
       showing how to use the Help system is displayed.

       When in Help you may:  Use the Up and Down Arrow Keys to move from
       Screen to Screen in Help.  Use the Home Key to move to the previous
       Help Menu Screen.  From a Menu Screen, type the number in front of a
       Topic to see the Screen for that Topic.  Press the F1 Key to return to
       the Screen related to the current Command.  If a number followed by a
       Topic appears in the bottom right corner of the Screen, type the
       number to see the Screen for that Topic.  Press the Escape Key to exit
       Help and return to WYNDFIELDS.


       Exercise:  GETTING HELP

         Press F1.  Notice that this is the only case where the pull-down
           Menu is not displayed when the Function Key is pressed.  Instead,
           you are taken directly to the Help Screens.  The Screen displayed
           describes the Help system.
         Type the number 1.  You are taken to the Main Help Menu.
         Type the number 2.  The Database Use Menu appears.
         Type the number 1.  You are taken to a Screen about Selecting a
           Database for Use.
         Press the Down Arrow Key.  You are taken to the next Screen:
           Adding / Editing Records.
         Press the Up Arrow Key.  You are returned to the previous Screen.
         Press the PgUp Key.  The Main Help Menu appears.  By starting at
           this Screen and continuing to press the Down Arrow Key, you can
           see every Help Screen in a logical order, providing an extensive
           description of how to use the program.
         Press Escape to exit Help and return to WYNDFIELDS.


                                                                            6


   VI. VIEWING DATA

       Data in WYNDFIELDS is kept in Database files.  A Database is a unified
       collection of related information, made up of any number of Records,
       each of which consists of a set group of Fields.  Each Field defines a
       specific type of data (such as a date or a city name) which is
       included in each Record.  Each Record contains the data for each Field
       as it relates to an individual person or item (such as one person on
       an address list).

       To select an existing Database for use:  Choose the BASE Command from
       the SELECT Menu (by pressing F2, then B), or type the letter B.  A
       list of available Databases is then displayed.  Highlight the desired
       Database and press Return to put it in use.  If you highlight the word
       "<None>", then all Databases will be closed.


       When a Database is selected, its Records are displayed in a Table.
       Each Column of the Table represents one Field of the Database and each
       Row shows the data for one Record.  You may use the following Cursor
       Movement Keys to scroll the Table Display:

         Up/Down Arrow    - Move highlight up/down one Row.
         Home/End         - Move to top/bottom of Screen.

         PgUp/PgDn        - Move up/down one Screen.
         Ctrl-PgUp/PgDn   - Move to first/last Record of Database.

         Left/Right Arrow - Move left/right one Column.
         Ctrl-Left/Right  - Move left/right one Screen.
         Ctrl-Home/End    - Move to first/last Column.


       Exercise:  SELECTING A DATABASE

         Press F2 to display the SELECT Menu.
         Type the letter B to choose the BASE Command.
         Press the Down Arrow Key until STREK is highlighted.  (Typing the
           first letter of a file name is not sufficient to select a file
           since many files might begin with the same letter.)
         Press Return to select the STREK Database.  The Table is displayed.
           Notice that the name of the Database appears in the middle panel
           of the bottom bar.  The name of the current Index is shown after
           it, and the total number of Records in the Database is shown in
           the right panel.  The first Record of the Database ("The Cage") is
           highlighted.


                                                                            7


       Exercise:  TABLE CURSOR KEYS

         Press the Down Arrow Key 4 times.  The highlight moves down to "The
           Enemy Within".  Notice that "Tomorrow Is Yesterday" is the last
           Record visible on the Screen (unless you have an EGA Monitor).
         Press the PgDn Key.  Now "Tomorrow Is Yesterday" is the first Record
           on the Screen.
         Press the End Key.  The highlight moves to the last Record on the
           Screen ("I Mudd").
         Press the Down Arrow Key 3 times.  The Table scrolls to show the
           next 3 Records.
         Hold down the Control Key and press PgDn.  The last Record of the
           Database is now highlighted.  Pressing the Down Arrow Key now has
           no effect.
         Press Control-PgUp.  The first Record ("The Cage") is again
           highlighted.

         Press the Left Arrow Key twice.  The Table scrolls two Columns over.
           Notice the double line just before the "Era" Field.  This marks
           the point between the last Column and the first Column of the
           Table.
         Press Control-Home.  The "Era" Field is once more in the left-most
           position on the Screen.


       Exercise:  CLOSING DATABASES

         Type the letter B.  This is equivalent to choosing the BASE Command
           from the SELECT Menu (Since there is an asterisk after this
           Command on that Menu).
         Press Return.  Since the word "<None>" was highlighted, all files
           are closed and the word "WYNDFIELDS" reappears on the Screen.



   VII. WORKING WITH DATA

       Once a Database has been selected for use and its Table is displayed,
       a number of options are available for working with the data in that
       Database.

       To add a new Record to the Database:  Choose the ADD Command from the
       RECORDS Menu.  To view or edit an existing Record in the Database:
       Highlight the desired Record, then choose the EDIT Command from the
       RECORDS Menu.

       When adding or editing Records, you work in the Form display.  The
       Form shows each of the Fields for the particular Record you are
       currently working with.  Type in the desired data for each Field,
       pressing Return after each entry to move to the next Field.  To move
       from Field to Field without entering data, use the Tab and Shift-Tab
       key.  To save the current Record and return to the Table, press F2.
       To return to the Table without saving any changes to the Record, press
       Alt-F2.


                                                                            8


       When adding Records, press the PgDn key to save the current Record and
       add another without returning to the Table.  When editing, press PgUp
       or PgDn to save the current Record and edit the previous or next
       Record in the Database.  You may also use the following Function Keys
       for ease of entry when adding or editing:

         F3 - Copy the contents of the current Field into a numbered Memory
              Field.
         F4 - Copy the contents of a previously assigned numbered Memory
              Field into the current Field.
         F5 - Copy the contents of the current Field from the previous Record
              into the current Field.
         F6 - Copy the contents of all Fields from the previous Record into
              the current Record.
         F7 - Copy the computer system Date into the current Field.
         F8 - Copy the computer system Time into the current Field.


       To delete a Record from the Database:  Highlight the undesired Record,
       then choose the DELETE Command from the RECORDS Menu.  Answer Y for
       Yes to confirm that the Record is to be removed.  Once a Record is
       deleted, it cannot be restored to the Database.


       To view a tabular Summary of the Records in a Database:  Choose the
       SUMMARY Command from the RECORDS Menu.  Answer No to the question
       "Recalculate Summary?" only if you have already viewed the Summary for
       this Database since selecting it for use, and have made no changes to
       the Database since viewing the Summary.


       Exercise:  EDITING RECORDS

         Select the MLIST Database for use. (Type the letter B, then
           highlight MLIST and press Return.)
         Press the Down Arrow Key twice so that Bill Bruford is highlighted.
         Press F4 to display the RECORDS Menu.  Notice that most of the
           Commands on this Menu are marked with an asterisk since these are
           some of the most common Commands used in WYNDFIELDS.
         Type the letter E to choose the EDIT Command.  The entry Form for
           the Bruford Record is displayed.  The Cursor is in the first
           Field.
         Press the Tab Key 9 times.  The Cursor moves from Field to Field and
           finally returns to the first Field again.
         Hold down the Shift Key and press the Tab Key 4 times.  The Cursor
           moves backwards 4 Fields, and ends in the "City" Field.
         Press Control-Backspace.  The data in the current Field is erased.
         Type in the name of your own city.
         Press Return to accept the new data and move to the next Field.
         Press PgDn.  You are taken to the next Record (Geoff Downes).  By
           leaving the Bill Bruford Record you have now saved the change you
           made to that Record.
         Press Control-PgUp.  You are taken to the first Record in the
           Database (Jon Anderson).


                                                                            9


         Press Control-PgDn.  You are taken to the last Record (Alan White).
         Press PgUp.  The previous Record (Rick Wakeman) appears.
         Press F2 to return to the Table display.  Notice that the current
           Record is the top Record displayed whenever you exit from the Form
           display.
         Press PgUp to display the other Records.  Jon Anderson is again
           highlighted.


       Exercise:  ADDING RECORDS

         Press F4 to display the RECORDS Menu again.
         Type the letter A to choose the ADD Command.  A blank Form appears
           so that you can enter data for a new Record.
         Press F5 3 times.  The data from the previously highlighted Record
           appears in the first 3 Fields.
         Type in a new address.  (Feel free to be creative.)
         Press the F6 Key.  All the data from the previous Record is copied
           into every Field of this Record, replacing the data you had typed
           in.
         Press PgDn.  The new Record is saved and another blank Form appears
           so that you can add another Record.
         Type in your own name and address for this Record.
         Press PgDn to save your Record.  Another blank Form appears.
         Press F2 to return to the Table.  Notice that the blank Record was
           saved.
         Type the letter A to select the ADD Command without displaying the
           Menu.
         Type in data for another name.
         Hold down the Alt Key and press F2.  The Record you just typed in is
           not saved.  (If you get in the habit of pressing PgDn whenever you
           add a new Record, you should use Alt-F2 rather than F2 to return
           to the Table when finished to avoid saving the blank Record which
           appears.)


       Exercise:  DELETING RECORDS

         Highlight the blank Record.
         Press F4 to display the RECORDS Menu.
         Type the letter D to choose the DELETE Command.
         Type the letter Y to confirm that you do wish to delete the
           highlighted Record.  The Record is removed from the Database.
         Highlight either of the Jon Anderson Records.
         Type the letter D, then the letter Y.  That Record is also deleted.


                                                                           10


       Exercise:  SUMMARIZING RECORDS

         Select the STREK Database for use.
         Press F4 to display the RECORDS Menu.
         Type the letter S to choose the SUMMARY Command.
         Type the letter Y to confirm that the Summary needs to be
           calculated.  WYNDFIELDS summarizes the data in the Database and
           displays the information for you.  Notice in the Count Column that
           the number for the "Stardate" Field is less than the number in
           other Fields, indicating that this Field is left blank in a few of
           the Records. Notice also the entry in the Sum Column for the
           "Timing" Field.  This shows the total amount of time for all Star
           Trek episodes, displayed in hours and minutes.  This is one
           example of how the time tracking abilities of WYNDFIELDS can be
           used.
         Press the F2 Key to exit the Summary display and return to the
           Table.
         Type the letter S to choose the SUMMARY Command again.
         Answer N to avoid recalculating the Summary.  Recalculation is
           unnecessary now since no changes have been made to the Database
           since last viewing the Summary.
         Press again F2 to return to the Table.



   VIII. DATABASE DESIGN

       Each Database that you work with has a certain set structure of
       Fields.  When you create a new Database you define its Fields by:
       giving each Field a unique Name; determining the Type of the Field
       (Character, Numeric, etc.); giving each Field a specific display
       Format (depending on the Field Type); and specifying the Width of the
       Field (how many characters long the Field is).

       Once a Database has been created, its Design may also be modified at
       any time.  Fields may be added or their order shifted and Field Names
       and Formats may be changed without any loss of data.  Other changes
       (such as removing Fields or shortening Field Widths) are potentially
       more dangerous and WYNDFIELDS will warn you if you make such a change,
       to be sure that you really want to alter the Database in this way.

       To modify the Design of the Database currently in use:  Choose the
       BASE Command from the DESIGN Menu.  To create a new Database or modify
       a Database not in use:  First close all Databases by selecting
       "<None>" from the list after choosing the BASE Command from the SELECT
       Menu.  Then choose the BASE Command from the DESIGN Menu.  Select the
       desired Database from the list, or to create a new Database:  Select
       "<New>", then type in a new Name for the Database.


                                                                           11


       Once in the Database Design display, type in the necessary information
       for each Field.  Use the Tab and Shift-Tab Key to move from Column to
       Column.  Press Return to accept the entry in a specific Column and
       move to the next.  Press Control-Return to move to the next Field
       without having to press Return for each Column.  Use the F3 Key to
       insert a new Field ahead of the highlighted Field, F4 to delete the
       highlighted Field, or F5 to move the highlighted Field to a different
       location.  When finished, press F2 to save the Design (or press Alt-F2
       to exit Database Design without saving any changes).


       Field Names may be up to 10 characters long and contain any characters
       (including spaces) except curly braces ({}).  Capitalization of Field
       Names is ignored for all practical purposes in WYNDFIELDS.


       WYNDFIELDS recognizes 5 different Field Types:

         CHARACTER - Any characters are allowable.  The Width of a Character
                     Field may be from 1 to 76.
         NUMERIC   - Only numbers are allowed.  Depending on the Format
                     chosen, a Numeric Field may have a Width of 1 to 26.
         DATE      - Contains a valid Date (from the year A.D. 0 to A.D.
                     9999).  The Width is always 10.
         TIME      - Contains a valid Time expression, divided into Days,
                     Hours, Minutes, and/or Seconds.  The Width may be from 4
                     to 14 depending on the Format chosen.
         EXTENDED  - This is a special text Field containing 1260 characters
                     (but with a Field Width of 4).


       Field Formats define how the data in each Field will be displayed on
       the Screen and printed out.  Character Fields may have either a
       General or Capitalized Format.  The Capitalized Format converts all
       letters to upper case.  Numeric Formats determine how many decimal
       places will be included in the number and whether commas, dollar
       signs, or pound signs will be inserted.  Date Formats define which
       convention will be used for displaying Dates.  Time Formats determine
       whether Days, Hours, Minutes, or Seconds will be included in that
       Field.


       Exercise:  MODIFYING A DATABASE DESIGN

         If the STREK Database is not currently in use, select it.
         Press the F3 Key to display the DESIGN Menu.
         Type the letter B to choose the BASE Command.  A definition of all
           the Fields in the Database is displayed.
         Press the Down Arrow Key 3 times.  The "Title" Field is highlighted.
         Press the Tab Key.  A list of the different Field Types is
           displayed.  Since "Title" is a Character Field, the word
           "Character" is highlighted.


                                                                           12


         Press the Tab Key again.  The list of the Formats available for a
           Character Field is displayed.  "Title" uses the General Format, so
           "General" is highlighted.
         Press the Tab Key once more.  The Cursor moves to the Width Column.
           Notice that the right panel of the bottom bar on the Screen shows
           the valid range of Widths available for this Field Type and
           Format.
         Press the Down Arrow Key.  The "Timing" Field is now highlighted and
           the valid Width range has changed.
         Press Shift-Tab.  The Cursor moves backwards to the Format Column.
           Since this is a Time Field, the Formats available are different.
         Press the Down Arrow Key 3 times.  The highlight in the Format list
           moves down.  Note that you can select a Format by highlighting it,
           then pressing Return (but don't do it now).
         Type the letter B.  This selects the second Format on the list, and
           the Cursor moves back to the Width Column.
         Press the F3 Key.  A new blank Field is inserted.
         Press the F4 Key to delete the blank Field.
         Press the F5 Key to move the "Timing" Field.  The appearance of the
           highlight alters to show that you are in the process of moving a
           Field.
         Press the Up Arrow twice.  "Story" is now highlighted.
         Press Return.  The "Timing" Field is moved ahead of the "Story"
           Field.
         Press Control-PgDn.  The empty row at the bottom of the display is
           highlighted so that you could add a new Field.
         Press Alt-F2.  You return to the Table display, but the changes you
           made to the Database Design are not saved.


       Exercise:  CREATING A NEW DATABASE

         Type the letter B to select a Database.
         Press Return with "<None>" highlighted to close all Databases.
         Press F3 to display the DESIGN Menu.
         Type the letter B to choose the BASE Command.
         Press Return with "<New>" highlighted.
         Type in "Sample" for the Name of the new Database, and press Return.
         Type "Character" for the Name of the first Field, and press Return.
         Type the letter C to choose the Character Type.
         Type the letter G to choose the General Format.
         Type in "5" for the Field Width.
         Press Control-Return to accept the first Field without having to
           bother with a Formula.  (Formulae may used to create Calculated
           Fields).
         Type "Numeric" for the Name of the second Field, and press Return.
         Type the letter N for the Numeric Type.
         Type the letter F for the Fixed Format.  This Format then requires
           that the number of decimal places for the Field be entered.
         Type in "3" for the number of decimal places, and press Return.
         Type in "6" for the Field Width, and again press Control-Return.
         Type "Date" for the Name of the third Field, and press Return.
         Type the letter D for the Date Type.


                                                                           13


         Type the letter E for the Format.  Date Field Formats are different
           than other Fields.  When you enter a Date, it will always be in
           the format "Mo-Da-Year" (all numbers).  But when the Date is
           displayed, it will be displayed using the selected Format.  Also
           notice that the Field Width of 10 is entered automatically for
           you, and the Cursor goes into the Formula Column.
         Press Return to leave the Formula blank.
         Press F2 to save the new Database Design.  The Table display
           reappears, but with no Records.
         Press F4 to display the RECORDS Menu.  Notice that ADD is the only
           Command on this Menu available since there are no Records in the
           Database.  (Other Menus will also have limited Commands
           available).
         Add some Records and modify the Database Design to experiment with
           how the various Field Types and Formats function.



   IX. INDEXING

       As you add Records to a Database, they are appended to the end of the
       Database file.  To allow you to see your data in a more logical order,
       WYNDFIELDS utilizes Index files.  An Index is a list of the Records in
       the Database kept in a specific order based on selected Key Fields.
       When an Index is in use, the Records of the Database appear in the
       order indicated by the Index.

       Each WYNDFIELDS Database may have up to 10 different Indices
       associated with it.  Each Index is maintained automatically as you
       add, modify, or delete data in the Database.  An Index may have up to
       10 Key Fields, each of which may be designated to be in Ascending (A
       to Z) or Descending (Z to A) order.

       To create or modify an Index for the Database currently in use:
       Choose the INDEX Command from the DESIGN Menu.  Select the desired
       Index from the list, or to create a new Index:  Select "<New>", then
       type in a new Name for the Index.

       For each Field you wish to be a Key Field, enter the relevant number
       from 1 to 10 (1 for the first Key Field, 2 for the second, etc.) in
       the first Column.  In the second Column, select whether the order for
       that Field should be Ascending or Descending.  Press F2 when finished
       to save the Index Design.


       To select an Index for use:  Choose the INDEX Command from the SELECT
       Menu, or type the letter I.  Highlight the desired Index and press
       Return.  The Records of the Database will then appear in the order
       indicated by that Index.


                                                                           14


       In some situations (particularly if your computer loses power while
       you are running WYNDFIELDS), Index files may become corrupted.  If
       your Database appears to have no Records, or fewer Records than you
       remember, it may be necessary to reindex the Database.  The process of
       reindexing rebuilds each of the Indices of the Database Record by
       Record.  To reindex the current Database:  Choose the REINDEX Command
       from the UTILITIES Menu.  Then answer Y to confirm that you wish to
       rebuild the Indices.


       Exercise:  SELECTING AN INDEX

         Select the STREK Database for use.  Notice that the Index Name STORY
           appears on the bottom bar after the Name STREK, and that the
           Records appear in order according to the "Story" Field.
         Press F2 to display the SELECT Menu.
         Type the letter I to choose the INDEX Command.  Notice that STORY is
           highlighted.
         Highlight STITLE, and press Return.  The Table reappears.  Notice
           that the Index Name STITLE now appears on the bottom bar and that
           the Records are now listed in alphabetical order by Title.  Notice
           also that Titles beginning with numbers appear before Titles
           beginning with alphabetic letters.


       Exercise:  DESIGNING AN INDEX

         Press F3 to display the DESIGN Menu.
         Type the letter I to choose the INDEX Command.
         Highlight the word "<New>" and press Return to design a new Index.
         Type "STYEAR", and press Return.  When designing a new Index,
           WYNDFIELDS automatically sets up the first Field of the Database
           as the first (and only) Key Field (in Ascending order).
         Press the F4 Key to delete the first Key Field.
         Press the Down Arrow Key once to highlight the "Year" Field.
         Type in "1" and press Return.
         Type the letter D for Descending order.
         Press the Down Arrow Key once to highlight the "Title" Field.
         Type in "2" and press Return.
         Type the letter A for Ascending order.
         Press F2 to save the Index Design.  The new Index is built for the
           existing Records of the Database.  When the Table display returns,
           notice that the Records are now listed in order according to year,
           from the most recent to the earliest.  For any year for which
           there is more than one Record, the Records for that year are
           listed by Title in alphabetical order.


       Exercise:  REINDEXING A DATABASE

         Press F7 to display the UTILITIES Menu.
         Type the letter R to choose the REINDEX Command.
         Type the letter Y to confirm that you wish to reindex.  Each of the
           Indices for the STREK Database are rebuilt, Record by Record.


                                                                           15


   X. FINDING DATA

       WYNDFIELDS provides a number of ways to search a Database for specific
       information.  The fastest and easiest way is to perform a Quick
       Search.  The Quick Search is fast because it searches the Key Fields
       of the current Index rather than searching through the Database
       itself.

       To perform a Quick Search:  Choose the QUICK SEARCH Command from the
       LOCATION Menu.  Type in the desired data for each Key Field and press
       F2.  You are taken immediately to the first Record in the Database
       with data equal to or greater than the data entered.


       The Quick Search is very fast, but it is also limited.  You must
       search the Key Fields, and the search will only find one Record.  If
       you wanted to search a different Field, or search for a series of
       Records which all met a certain condition, you would need to do a
       Conditional Search.  A Conditional Search is slower, but is much more
       flexible than a Quick Search.

       To perform a Conditional Search:  Choose the COND SEARCH Command from
       the LOCATION Menu.  The Search Conditions Table which is displayed
       lists each Field in the Database down the side of the Screen and has 2
       Columns in which to enter values for the search.  In the left Column
       type in the lower value for the search for each Field you wish to
       search.  In the right Column type in the upper value.  WYNDFIELDS will
       add a string of z's to the end of the upper value so that all values
       which begin with the same characters typed into the right Column will
       be included in the search.  To erase all previously entered
       conditions, press F4.When all values have been entered, press F2 to
       accept the conditions.  WYNDFIELDS searches for the first Record which
       contains data greater than or equal to data in any of the Fields in
       the left Column and which contains data less than or equal to data in
       any of the Fields in the right Column.

       When searching a Character or Extended Field, instead of entering a
       lower value and upper value, you may also search for a specific piece
       of text found anywhere within the Field.  To do this, enter 2 periods
       in the left Column, followed by the text you wish to find.  (In such a
       case, WYNDFIELDS ignores any value entered in the right Column for
       that Field.)  Using the two period search is the only way in which an
       Extended Field may be searched.

       Once the first Record which matches the Search Conditions is found,
       use the NEXT Command from the LOCATION Menu to find the next Record
       which matches the conditions.  Continuing to select the NEXT Command
       (or typing the letter N) will find every matching Record.  The
       PREVIOUS Command from the LOCATION Menu (or typing the letter P)
       allows you to refind the previous matching Record.


                                                                           16


       The Conditional Search is slower than the Quick Search since it must
       search through each Record of the Database individually until it finds
       a matching Record, rather than using the Index.  The speed of a
       Conditional Search is increased greatly (particularly for larger
       Databases), when values in the Search Conditions Table are entered for
       the first Key Field of the current Index, since WYNDFIELDS will then
       perform the equivalent of a Quick Search for the value in the Key
       Field, and then proceed with the other conditions of the search from
       that point in the Database.

       Closely related to the Conditional Search is the concept of the
       Filter.  To set a Filter:  Choose the FILTER Command from the LOCATION
       Menu.  Then fill out the Search Conditions Table just as you would for
       a Conditional Search.  The Filter is then set so that only those
       Records which match the Filter Search Conditions show up in the Table
       display at all.  As long as the Filter is set, the Database will work
       as though just those Records which match the conditions are the only
       Records in the Database.  You will only be able to edit Filtered
       Records.  Only Filtered Records will be calculated in the Summary, and
       only Filtered Records will be printed.  To indicate that the Database
       is Filtered, the word "Filtered" appears on the bottom bar in place of
       the number of Records in the Database.

       To remove a Filter:  Choose the FILTER Command from the LOCATION Menu,
       and press Alt-F2.


       Exercise:  PERFORMING A QUICK SEARCH

         If the STREK Database is not currently in use, select it.
         If the STORY Index is not the current Index, select it.
         Press F5 to display the LOCATION Menu.  Notice that every Command on
           this Menu is followed by an asterisk.
         Type the letter Q to choose the QUICK SEARCH Command.
         Type " 1.26" (be sure to include the space), and press F2.  Story
           1.26, "The City on the Edge of Forever" is found.
         Type the letter Q again to perform another Quick Search.
         Type " 3.00" (again with the space), and press F2.  The first Record
           equal to or greater than 3.00 is Story 3.01, "Spectre of the Gun".
         Type the letter I, highlight the STITLE Index, and press Return.
         Type the letter Q for another Quick Search.  Since the Index has
           changed, the Field for the search has also changed to "Title".
         Type in "THE TROUBLE WITH TRIBBLES", and press F2.  The relevant
           Record is found.  Notice that capitalization was ignored.
         Type the letter Q again, then type in "Where No" and press F2.  The
           Title "Where No Man Has Gone Before" is found.  In a Quick Search,
           You only need to fill in enough data to find the desired Record.
         Select the STYEAR Index (assuming that you created it in the earlier
           exercise).
         Type the letter Q once more.  Notice that since this Index has 2 Key
           Fields, both Fields are available to enter a value into.
         Type "1966" in the "Year" Field, press Return, type "The" in the
           "Title" Field, and press F2.  WYNDFIELDS finds "The Alternative
           Factor", the first Record from 1966 whose Title begins with "The".


                                                                           17


       Exercise:  PERFORMING A CONDITIONAL SEARCH

         Press F5 to display the LOCATION Menu.
         Type the letter C to choose the COND SEARCH Command.
         Press the Down Arrow Key 4 times to highlight the "Timing" Field.
         Type in "1:00" (one hour based on the chosen Format for this Field),
           and press F2.  Since this was entered in the left Column,
           WYNDFIELDS searches for the first Record with a value greater than
           or equal to one hour in the "Timing" Field.  The first Record it
           finds is "Encounter at Farpoint".
         Press F5 to display the LOCATION Menu again.
         Type the letter N to choose the NEXT Command.  The next Record
           matching the Search Conditions is found, "The Voyage Home".
         Type the letter N twice more.  "The Wrath of Khan" is now
           highlighted.
         Type the letter P for the PREVIOUS Command.  "The Search for Spock"
           is highlighted.
         Type the letter P 2 more times.  "Encounter at Farpoint" is once
           again highlighted.
         Type the letter P once more.  WYNDFIELDS tries to find a previous
           Record, but none is found.

         Type the letter C to perform another Conditional Search.
         Press the F4 key.  This erases the previously entered condition.
         Press the Up Arrow 3 times so that the "Year" Field is highlighted.
         Type "1970", and press Return.
         Type "1979" in the right Column, and press F2 to initiate the
           search.  WYNDFIELDS finds the first Record with a year between
           1970 and 1979, "The Motion Picture".  Since "Year" is the first
           Key Field, the search is very fast.
         Type the letter I, highlight the STORY Index, and press Return.
         Type the letter C for another Conditional Search.
         Press F2, leaving the conditions as they had been entered before. 
           This time, since the "Year" Field is no longer the Key Field, the
           search takes longer.

         Type the letter C again, then press the F4 key to erase the previous
           Search Conditions.
         Press the Down Arrow 5 times to highlight the "Crew" Field.  This
           Field contains abbreviations for the names of the regular Crew
           Members on Star Trek.
         Press Shift-Tab to move back into the left Column.
         Type "..Cv" (Cv is an abbreviation for Chekov), and press F2.  Since
           the 2 periods were included at the beginning, WYNDFIELDS searches
           for the text "Cv" anywhere in the "Crew" Field.  The Record it
           finds is "Catspaw".
         Press Control-Right Arrow to scroll the display so that the whole
           "Crew" Field can be seen.  The letters "Cv" appear in this Field
           for this Record.
         Type the letter N (for NEXT) 4 times.  Notice that the highlight
           skips over any Records which do not contain "Cv" in the "Crew"
           Field.


                                                                           18


       Exercise:  WORKING WITH A FILTER

         Press F5 to display the LOCATION Menu.
         Type the letter F to choose the FILTER Command.
         Press F2, leaving the Search Conditions the same as they were in the
           last exercise.  WYNDFIELDS finds and displays only those Records
           for which the "Crew" Field contains the text "Cv".  Notice that
           the word "Filtered" appears on the bottom bar to indicate that the
           Database is now Filtered.
         Type the letter S (for the SUMMARY Command), then answer Y to
           confirm recalculation.  The Summary displayed now applies only to
           those Records in the Filter (only those episodes in which Chekov
           appeared).  Notice that the count and total timing for the Records
           is much smaller than before.
         Press F2 to exit the Summary display and return to the Table.
         Type the letter F for the FILTER Command again and press the Down
           Arrow Key once.
         Type in "1968" in the left Column, press the Tab Key, and type in
           "1968" in the right Column as well.
         Press F2 to set the Filter.  Since the condition in the "Crew" Field
           was not erased it is still in effect.  The Filter now searches
           only for those episodes which contain "Cv" in the "Crew" Field and
           which are from the year 1968.  Only a small number of Records are
           found and displayed.
         Type the letter F for the FILTER Command once more, and press
           Alt-F2.  This removes the Filter, and the full number of Records
           in the Database is redisplayed on the bottom bar.



   XI. DESIGNING LABELS

       One of the most common uses for a Database is to print out Mailing
       Labels.  Before Labels can be printed, however, you must first design
       the layout of the Labels.

       To design Labels:  Choose the LABELS Command from the DESIGN Menu.
       Choose an existing Label Definition from the list, or to create a new
       Definition:  Select "<New>", then type in a new Name.

       The Label Design display shows a facsimile of the Label in the center
       of the Screen.  In this box, type in any text which will be printed on
       each Label, or use the following Function Keys to place Fields on the
       Label:

         F3 - Insert a blank line ahead of the line containing the cursor.
         F4 - Delete the line containing the cursor.
         F5 - Insert a Field at the cursor location.  After pressing F5, a
              list of all Fields is displayed.  Highlight the desired Field
              and press Return to insert it.  If there is not enough room at
              the cursor location to insert the whole Field, the Field will
              not be inserted.
         F6 - Delete the Field the cursor is in (if the cursor is in a
              Field).


                                                                           19


         F7 - Set the Field the cursor is in to be trimmed or not trimmed.
              If the Field is trimmed, then extra spaces at the end of the
              Field will be ignored so that any text and Fields following it
              will be printed directly after the last non-space character of
              the Field.  Fields are always trimmed unless you select this
              option.
         F8 - Set Label options such as: Label width, number of Labels to be
              printed across the page, space between Labels, etc.

       When finished with the Design, press F2 to save the Label Definition
       and return to the Table Design.

       Label Definitions are not attached to a specific Database, so you can
       use the same Label layout for different Databases.  If the Fields of
       the different Databases do not correspond to each other, however, some
       Fields on the Label may be lost or altered.


       Exercise:  DESIGNING LABELS

         Select the MLIST Database for use.
         Press F3 to display the DESIGN Menu.
         Type the letter L to choose the LABELS Command.
         Highlight the word MLABEL, but do not press Return.
         Press the F5 Key to copy the MLABEL Definition to a new file.
         Type in "Sample" for the new Label Name, and press Return.  The list
           of Label Definitions is redisplayed, with SAMPLE now among them.
         Highlight SAMPLE and press Return.  A facsimile of a Label appears
           on the Screen with a number of Fields already in place.
         Press the Down Arrow Key to move to the line containing the
           "Company" Field.
         Press F4 to delete this line.  A new blank line appears at the
           bottom of the Label.
         Press Control-End to move to the bottom line, then type in "Phone: "
           (including the space).
         Press F5 to insert a Field, then press the Up Arrow Key 3 times to
           highlight the "Phone #" Field.
         Press Return.  The Field is inserted on the Label.
         Press F8 to see the various Label options.  Options are measured in
           characters, so if you planned to use compressed print you would
           want to increase the width of the Label.  Look over the options
           and make any changes you wish.
         Press F2 to save the options and return to the Label Design display.
         Press F2 to save the Label Definition and return to the Table
           display.


                                                                           20


   XII. PRINTING

       Before actually printing, WYNDFIELDS allows you to change various
       Print Options.  To set Print Options:  Choose the OPTIONS Command from
       the UTILITIES Menu, or type the letter O.  The top box of the Options
       display contains a number of Screen Options which may be changed.  The
       bottom box lists the different Print Options.  Use the Tab and Shift-
       Tab Key to move from entry to entry.  Type in the desired values for
       each option.  When finished, press F2 to save all the options.

       WYNDFIELDS can print out information from a Database in several
       different forms:  The Database Design structure, a Summary of the
       Database, Mailing Labels, tabular Reports, Mail Merges (form letters),
       the Database Table, or the entry Form for the current Record.

       To print:  Press F6 to display the PRINT Menu, highlight the desired
       item to print, and press Return.  If printing Labels, Reports, or Mail
       Merges, you must select the desired Definition to be printed.  If
       printing any item other than the Database Design or the entry Form,
       WYNDFIELDS then asks if you wish to set Print Conditions.  If you
       answer Yes, use the Search Conditions Table just as you would when
       performing a Conditional Search to select those Records which will be
       printed, then press F2 to accept the conditions.  (If a Filter has
       been set, there is no need to set the Print Conditions.)  WYNDFIELDS
       then prints the relevant item to the destination (Printer, Screen, or
       Disk File) currently selected in the Print Options.


       Exercise:  PRINTING

         If the MLIST Database is not currently in use, select it.
         Press the F7 Key to display the UTILITIES Menu.
         Type the letter O to choose the OPTIONS Command.
         Press the Tab Key 3 times to move to the "Destination" Field, then
           type the letter S to select the Screen.  This will allow you to
           experiment with printing without wasting paper.  Alter any of the
           other options you wish.  If you use a laser printer you should
           change the Paper Length to 60 instead of 66.  Note also that the
           Print Width selected here will be overridden by widths you specify
           for Labels, Reports, and Mail Merges.
         Press F2 to save the Print Options.

         Press F6 to display the PRINT Menu.
         Type the letter D to print the Database Design.  The structure of
           the current Database (including the definition of all its Indices)
           is printed on the Screen.  Press any key when prompted after each
           Screen is printed.
         Press F6 again to display the PRINT Menu.
         Type the letter F to print the entry Form for the Record which is
           currently highlighted in the Table display.  Again, follow the
           prompts as the Form is printed.


                                                                           21


         Press F6 once more to display the PRINT Menu.
         Type the letter L to choose the LABELS Command.
         Highlight the word SAMPLE, press Return, and answer Yes to enter
           Print Conditions.  The Search Conditions display appears.
         Press the Down Arrow to highlight the "Last Name" Field, then press
           the Tab Key to move to the right Column.
         Enter "M" and press F2.  Labels are printed for all Records through
           Patrick Moraz (or any name you added which begins with "M").



   XIII. ADVANCED FEATURES

       In addition to the procedures outlined above, WYNDFIELDS offers many
       advanced abilities such as:
         Creating and printing detailed tabular Reports.
         Creating Form Letters using the built-in text editor, or creating
           data files for use with Mail Merges using popular word processors.
         Redesigning the appearance of the Table display and Form layout.
         Renaming, deleting, and copying Databases and other files.
         Using Formulae (and numerous calculation Functions) to create
           Calculated Fields and to do extremely detailed searches.
         Updating or deleting multiple Records based on search conditions.
         Transferring data between different Databases, and translating data
           between the WYNDFIELDS format and other common file formats.

       For instructions on using these features, consult the program's Help
       screens and the full WYNDFIELDS Manual (available to registered
       owners).  Other sample file not referred to in this booklet have also
       been included to allow you the opportunity to experiment with Report
       and Mail Merge designs.  You can also copy the structure of the any of
       the sample files to use as a basis for your own Databases.



   XIV. WYNDWARE PRODUCTS

       WYNDSHELL is a non-memory-resident Hard Disk Menu program which allows
       you to run the programs on your computer from easily definable menus.
       Built into WYNDSHELL is another program: WYND-DOS, a utility program
       which performs such functions as formatting disks, copying and
       deleting files, and creating subdirectories - all from a friendly
       environment - without having to type commands at a DOS prompt.  Like
       WYNDFIELDS, WYNDSHELL and WYND-DOS also support the use of a mouse.
       A stand-alone version of WYND-DOS is available at a reduced price.

       Future WYNDWARE releases will include: FLAGS, an educational program
       displaying representations of the flags of the world, available in
       Summer, 1989; and WYNDSPIRE, a unique church management system
       offering a liturgical approach, which will be released in 1990.

       To become a registered owner of WYNDFIELDS, or to order other WYNDWARE
       products, use the convenient order form in the back of this booklet or
       call (608) 755-1628 for credit card orders.


  ORDER / REGISTRATION FORM


   WYNDWARE
   101 E. Milwaukee St., Suite 423
   Janesville, WI 53545  U.S.A.
   (608) 755-1628


      Name __________________________________________________________________

   Address __________________________________________________________________

           __________________________________________________________________

      City ______________________________  State _______  Zip _______________

   Country ______________________________  Phone ____________________________


    _                                     _                          _
   |_|  Check or Money Order             |_|  Mastercard            |_|  VISA

   Card Number ______________________________________________________________

   Signature ____________________________  Expiration Date __________________



   _____ copies of WYNDFIELDS Database   at $70.00 each. . . . $ ____________

   _____ copies of WYNDSHELL / WYND-DOS  at $30.00 each. . . . . ____________

   _____ copies of WYND-DOS alone        at $20.00 each. . . . . ____________

   _____ copies of FLAGS                 at $10.00 each. . . . . ____________

                   Wisconsin residents add 5% Sales Tax. . . . . ____________

                   TOTAL ENCLOSED. . . . . . . . . . . . . . . $ ____________


   Registered owners will receive the most recent version of the program,
   with a detailed Manual (complete with Tutorial), and will be eligible to
   receive updates to the program as improvements are made to it.

   Please contact us for site-licensing and quantity discounts.


   Where specifically did you get your copy of WYNDFIELDS?___________________

   __________________________________________________________________________

   Comments _________________________________________________________________

   __________________________________________________________________________

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2120

     Volume in drive A has no label
     Directory of A:\

    FILE2120 TXT      2518   3-28-90   4:15p
    GO       BAT       510   3-28-90   4:09p
    INSTALL  EXE     25536   8-01-89
    README   BAT       397   8-01-89
    WF       DOC     59033   8-01-89
    WYNDFLDS EXE    194339   8-01-89
            6 file(s)     282333 bytes
                           37888 bytes free
