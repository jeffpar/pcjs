---
layout: page
title: "PC-SIG Diskette Library (Disk #2393)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2393/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2393"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "TIMESTAX"

    TIMESTAX is a personal time management tool like Timeslips-III, Time
    Card, and Timesheet. This low-cost time management program allows one
    or more users to systematically record and summarize time spent doing
    work.
    
    Timecards are entered specifying user-defined clients, projects, and
    tasks along with the date, time, and an optional 8-line note
    describing the activity. The user fully controls the level of summary
    detail in a wide variety of management reports. Other features
    include an automatic timer to clock any given activity; flexible
    export, archive, and backup of timecards; on-line help screens; full
    report selection and sorting criteria; sublists of projects and tasks
    specific to each client; up to 100 employees per database; and LAN
    compatibility.
    
    By simplifying the important features and eliminating the less
    essential features, TIMESTAX offers full functionality at a lower price
    than the competition. Since most users will spend less than 20 minutes
    a week running the program, TIMESTAX relies on a simple intuitive
    interface that takes only 10 minutes to learn.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE2393.TXT

{% raw %}
```
Disk No: 2393                                                           
Disk Title: TimeStax                                                    
PC-SIG Version: S1                                                      
                                                                        
Program Title: TimeStax                                                 
Author Version: 2.5                                                     
Author Registration: $49.95                                             
Special Requirements: None.                                             
                                                                        
TIMESTAX is a personal time management tool like Timeslips-III, Time    
Card, and Timesheet. This low-cost time management program allows one   
or more users to systematically record and summarize time spent doing   
work.                                                                   
                                                                        
Timecards are entered specifying user-defined clients, projects, and    
tasks along with the date, time, and an optional 8-line note            
describing the activity. The user fully controls the level of summary   
detail in a wide variety of management reports. Other features          
include an automatic timer to clock any given activity; flexible        
export, archive, and backup of timecards; on-line help screens; full    
report selection and sorting criteria; sublists of projects and tasks   
specific to each client; up to 100 employees per database; and LAN      
compatibility.                                                          
                                                                        
By simplifying the important features and eliminating the less          
essential features, TIMESTAX offers full functionality at a lower price 
than the competition. Since most users will spend less than 20 minutes  
a week running the program, TIMESTAX relies on a simple intuitive       
interface that takes only 10 minutes to learn.                          
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## README.TXT

{% raw %}
```
TIMESTAX v2.5                  Setup Notes               October 15, 1990  
──────────────────────────────────────────────────────────────────────────

This disk (or compressed archive file) contains 4 files:

        1)  README.TXT    - this file
        2)  TIMESTAX.EXE  - the executable program
        3)  TIMESTAX.TXT  - complete user's manual                        
        4)  TIMESTAX.LIC  - licensing agreement & registration form

It is best to create a separate directory to contain the TimeStax
system, then simply copy the above files to that directory.  For
example, to load TimeStax into a directory called TIMESTAX do the
following:

          1) Type   MD \TIMESTAX          to create the directory
          2) Type   COPY A:*.* \TIMESTAX  to copy the files 
          3) Type   CD \TIMESTAX          to move to the new directory
          4) Type   TIMESTAX              to start the program

You will first be prompted to fill in your client, project, and task
names.  Then you will be asked to allow the program to create an empty 
timecard database.  Please refer to the manual for further details.

You may use this copy free of charge for a 1 month evaluation period. 
If you still want to use it after that you must send in the
registration fee of $49.95.  Please refer to the file TIMESTAX.LIC
for a copy of the registration form, or press "I" from the main
screen, or call us at (408) 255-4213.

And thank you for supporting the "try before you buy" marketing concept. 
Shareware - the software frontier of the 90's.

Tim Johnson
Johnson Technologies
```
{% endraw %}

## TIMESTAX.TXT

{% raw %}
```


                                  TimeStax (TM)

                         The Personal Timecard Manager




                                 User's Manual



                                  
                                  Version 2.5

                               February 19, 1990








                              _______
                         ____|__     |               (tm)
                      --|       |    |-------------------
                        |   ____|__  |  Association of
                        |  |       |_|  Shareware
                        |__|   o   |    Professionals
                      -----|   |   |---------------------
                           |___|___|    MEMBER









                             Copyright 1988-1990
                             All rights reserved.


                             Johnson Technologies
                             10564 N. Blaney Avenue
                             Cupertino, CA.  95014

                             Phone: (408) 255-4213

                     T A B L E   O F   C O N T E N T S

INTRODUCTION . . . . . . . . . . . . . . . . . . . . . . . . .  1

1. INSTALLATION AND SETUP. . . . . . . . . . . . . . . . . . .  2
     1.1  Installation for Local Area Network. . . . . . . . .  2
     1.2  Installation for Single PC with hard disk. . . . . .  2

2. GETTING STARTED . . . . . . . . . . . . . . . . . . . . . .  2

3. TIMECARD VIEW SCREEN. . . . . . . . . . . . . . . . . . . .  3
     3.1  View Screen - Appearance . . . . . . . . . . . . . .  3
     3.2  View Screen - cursor movement keys . . . . . . . . .  4
     3.3  View Screen - Commands . . . . . . . . . . . . . . .  4

4. TIMECARD ADD SCREEN . . . . . . . . . . . . . . . . . . . .  6
     4.1  Add Screen - Appearance. . . . . . . . . . . . . . .  6
     4.2  Add Screen - Commands. . . . . . . . . . . . . . . .  6
     4.3  Add Screen - data entry instructions . . . . . . . .  7

5. TIMECARD CHANGE SCREEN. . . . . . . . . . . . . . . . . . .  8

6. GENERATING REPORTS. . . . . . . . . . . . . . . . . . . . .  9
     6.1  Report Options Screen - Appearance . . . . . . . . .  9
     6.2  Report Options Screen - cursor movement keys . . . .  9
     6.3  Report Options Screen - Commands . . . . . . . . .   10
     6.4  Report Options Screen - options. . . . . . . . . .   10
     6.5  Report Selection Screen. . . . . . . . . . . . . .   12
     6.6  Displaying and printing your report. . . . . . . .   13

7. REPORT SAMPLES. . . . . . . . . . . . . . . . . . . . . .   14
     7.1  General Instructions . . . . . . . . . . . . . . .   14
     7.2  Sample Report 1 - Grand Total only . . . . . . . .   14
     7.3  Sample Report 2 - One Subtotal Field . . . . . . .   15
     7.4  Sample Report 3 - 2 Subtotal fields. . . . . . . .   16
     7.5  Sample Report 4 - 2 Subtotal fields plus Notes . .   16

8. SYSTEM UTILITIES. . . . . . . . . . . . . . . . . . . . .   17
     8.1  Utility Screen - Appearance. . . . . . . . . . . .   17
     8.2  INFO Utility . . . . . . . . . . . . . . . . . . .   17
          DUMP . . . . . . . . . . . . . . . . . . . . . . .   17
          FILES. . . . . . . . . . . . . . . . . . . . . . .   17
          PEOPLE . . . . . . . . . . . . . . . . . . . . . .   17
     8.3  DISK Utility . . . . . . . . . . . . . . . . . . .   18
          PACK . . . . . . . . . . . . . . . . . . . . . . .   18
     8.4  SETUP Utility. . . . . . . . . . . . . . . . . . .   19
          Naming Activity Lists. . . . . . . . . . . . . . .   19
          Updating Activity Lists. . . . . . . . . . . . . .   19
          Assigning Activity Sublists. . . . . . . . . . . .   19


9. HOW & WHEN TO PERFORM AN EXPORT or IMPORT OPERATION . . .   20
     9.1  Overview of EXPORT and IMPORT. . . . . . . . . . .   20
     9.2  How to EXPORT timecards. . . . . . . . . . . . . .   21
     9.4  How to IMPORT timecards. . . . . . . . . . . . . .   23
10. HOW & WHEN TO PERFORM AN ARCHIVE or UNARCHIVE OPERATION.   24
     10.1 Overview of ARCHIVE and UNARCHIVE. . . . . . . . .   24
     10.2 How to ARCHIVE timecards . . . . . . . . . . . . .   25
     10.3 How to UNARCHIVE timecards . . . . . . . . . . . .   25

11. HOW & WHEN TO PERFORM A BACKUP or RESTORE OPERATION. . .   26
     11.1 Overview of BACKUP and RESTORE . . . . . . . . . .   26
     11.2 How to BACKUP your database  . . . . . . . . . . .   27
     11.3 How to RESTORE your database . . . . . . . . . . .   27

APPENDIX A. LAN CONFIGURATION FOR THE LAN ADMINISTRATOR. . .   28
     The TIMESTAX.INI Configuration File . . . . . . . . . .   28
     The MASTER Timecard Database. . . . . . . . . . . . . .   29

APPENDIX B. TECHNICAL NOTES. . . . . . . . . . . . . . . . .   30
                                                                    Page 1

INTRODUCTION

Whether you are a private consultant with 100 clients, a manager
working with 3 other departments, or just a busy office worker who
works on several projects at once, you're probably concerned with
how efficiently you spend your work day.  If you want more than the
"feeling" you should have gotten more done this month then start
tracking your time now with TIMESTAX - the Personal Timecard
Manager.

TIMESTAX is a simple time management program for anyone who needs
to monitor his or her work habits.  With a minimum of effort (10-20
minutes per week) you can capture important information about which
clients and projects you worked on and what specific activities you
performed.  Then in about 5 seconds you can summarize the weeks or
months of work you put in and see just where the time went.
  
You say you work in a big company and don't need to account for
every minute of your time?   But when you're overdue on that 3-
month project the boss is yelling about, wouldn't it be nice to
have the hard evidence that you spent exactly 34% of your time in
useless status meetings with him?  Or 16% of your time on those
"one-time-only reports"?  Or 11% playing telephone tag?  Or 3%
actually getting some work done?


TimeStax version 2.5 provides the following features:

          o  Unlimited "stacks" of timecards that record time 
             spent in any activity, classified by Date, Client, 
             Project, and Task categories for unlimited number
             of employees

          o  Sublists of Projects and Tasks specific to each
             Client

          o  Ability to name and maintain category lists of 
             unlimited length

          o  Sort timecards on screen by any category

          o  An optional 8-line Note for each timecard

          o  Online help screens

          o  Summary reporting with up to 5 levels of subtotals 
             with the ability to include/exclude any Employees,
             Clients, Projects, Tasks

          o  Utilities to backup and archive the databases

          o  Utilities to export/import subsets of timecards
             between user databases and a master database

          o  An automatic clock to time any given activity
  
          o  Single-PC or LAN (not multi-user) configuration

                                                                    Page 2

1. INSTALLATION AND SETUP

The installation method depends on whether the system is being
configured for use on a standalone PC or on a Local Area Network
(LAN).  Use the installation disk which accompanies this manual.

1.1  Installation for Local Area Network 

A designated LAN Administrator is responsible for setting up all
application programs on the LAN.  Please refer to Appendix A for
details.

1.2  Installation for Single PC with hard disk

With the installation disk in drive A:, type  

     C> A:Install C:\TIMESTAX.  

The installation program will create a subdirectory called
"TIMESTAX" on your PC's C: drive and copy the TIMESTAX.EXE program
file to it.  A set of Demo files are copied to C:\TIMESTAX\DEMO. 
Use these files for practice by typing DEMO.

2. GETTING STARTED

The best way to get familiar with TIMESTAX is to run the program as
you read along in this manual.  There is not much you can do wrong,
and nothing you can't undo if you follow these instructions.

To run the program, change to your C:\TIMESTAX directory and type
"TIMESTAX". You may want to set up a batch file called "TS.BAT" on
your root directory which will place you in the C:\TIMESTAX
directory automatically and then start the program.

If you have not set up the Activity Code Tables, TIMESTAX will
prompt you to do so now.  You may change these entries at any time
using the SETUP Utility described in Section 12.  For now, use the
ADD function to add new Employees, Clients, Projects, and Tasks to
the empty lists.  If you are running on a LAN your Administrator is
reponsible for assigning the Employee ID codes for you.

If this is the first time you have ever run TIMESTAX you will next
be informed that there is no timecard database. Press "Y" for "Yes"
when asked if it is okay to create a new database.  
                                                                    Page 3

Getting Started (cont.)

The next screen you will see is the TIMESTAX MAIN MENU.
This screen shows the date, a running time clock at the top
right, and the five available options:

            TIMECARDS - go to the timecard View screen

            REPORTS   - go to the Report Options screen

            UTILITIES - go to the Utilities screen

            HELP      - show a Help screen for reference

            QUIT      - exit the timecard system completely

To select an option press the first letter of its name, for example
press "T" to invoke the TIMECARDS option.


3. TIMECARD VIEW SCREEN

Each user is given one "stack" of timecards in the database.  The
View screen lets you look at one particular user's stack and move
forward and backward within that stack.

Press "T" from the main menu to get to the TIMESTAX View screen.

3.1  View Screen - Appearance

If this is the first time you have ever run TIMESTAX there will not
be any timecards on file.  A message-box will indicate this on the
screen.

If timecards do exist, the last 15 timecards on file will be
displayed on the screen.  A reverse-video "highlight bar" will
highlight the last timecard (red on a color monitor).  

There are several features of the View Screen to notice right away:

     o  The date and time are shown at the top right
     o  The last 15 timecards on file are shown, 1 per line
     o  The message "CARD# nnn OF nnn" shows how many
        timecards are on file for the current Employee,
        and also indicates which one the highlight bar is
        currently on.
     o  A list of COMMANDS is shown at the bottom of the
        screen, and the CHANGE command is highlighted.
     o  'N' at the left of a timecard means a Note is attached
     o  'E' at the left of a timecard means it is 'Erased'
                                                                    Page 4

3.2  View Screen - cursor movement keys

Several keys are used to make your way around the View screen. 
Experiment with them to see what effect they have:
     
UP/DOWN ARROW KEYS:  Scroll the highlight bar up or down
                     through the stack of timecards.

PAGE-UP/DOWN KEYS:   Move one entire page up or down
                     through the stack of timecards.

HOME KEY:            Move the highlight bar to the very
                     first timecard on file for an employee.

END KEY:             Move the highlight bar to the very
                     last timecard on file for an employee.

LEFT/RIGHT ARROW     Move the COMMAND highlight bar left
KEYS:                and right at the bottom of the screen

ESC KEY:             Return to the main menu screen.

ENTER KEY:           Execute the currently highlighted COMMAND


3.3  View Screen - Commands

The commands at the bottom of the VIEW screen are executed by one
of two methods:

       1. Use the LEFT/RIGHT arrow keys to highlight the desired
          command, then press the ENTER key.
   or  2. Press the bold-faced letter of the desired command.

Here is a brief description of each command:

ADD:     Pop up the New Timecard screen to add timecard(s)  

CHANGE:  Go to the EDIT data entry screen to modify the
         timecard that is currently highlighted on the VIEW
         screen

ERASE:   Mark (or unmark) the currently highlighted timecard for
         deletion (or un-deletion).  This does not physically
         remove the timecard from the database, it simply marks
         it with an "*" on the screen.  You must perform a PACK
         operation (see UTILITIES) to remove the timecards
         marked for deletion.
                                                                    Page 5

3.3  View Screen - Commands (cont.)


HELP:    Show a help screen for reference.

JUMP:    Jump to the first timecard with a specific user-
         selected date. This is only allowed if the timecards
         are currently sorted by Date (the default sequence).

NAME:    Allow the user to switch to a different employee's
         stack of timecards. Press ENTER to choose the highlighted
         Name on the popup list.

REPORTS: Go to the Reports system.  This is exactly the same as
         selecting REPORTS from the main menu.

SORT:    Allow the user to rearrange the timecards by sorting
         on a specific category (Date, Tasks, Client, Project).
         The currently selected Sort category is highlighted.
         The new category is selected by either typing the 
         bold-faced letter, or by using the LEFT/RIGHT arrow keys
         and then pressing the ENTER key.  Note that for the 3
         non-Date categories, sorting is done based on an internal
         CODE number, not the text shown on the screen. This means
         the text may not appear in "alphabetic" order on the
         screen.

TIMER:   Turn the built-in timer on or off for the currently 
         highlighted timecard.  TIMESTAX will automatically keep
         track of the time spent on this Activity until you turn
         the timer off, even when you exit TIMESTAX.  A running
         clock time is shown at the right of the active timecard.

         NOTE: Only 1 timecard at a time may have the timer on.
         No Utility programs or Reports may be run until the 
         timer is turned off.

UTIL:    Go to the Utilities system.  This is exactly the same as
         selecting UTILITIES from the main menu.

QUIT:    Return to the main menu (same as pressing the ESC key).
                                                                    Page 6

4. TIMECARD ADD SCREEN

The same Add screen is used both for adding a new timecard and for
changing the timecard currently highlighted on the View screen.  

4.1  Add Screen - Appearance

Press "A" from the TIMESTAX View screen to invoke the ADD command. 
A set of windows is displayed where the information for a single 
timecard will be entered.  

Notice these features of the Add Screen:

   o  The date and time are shown at the top right

   o  The message "CARD# nnn OF nnn" is shown at the top right,
      and is set to be 1 more than the last existing timecard
      for the currently active Employee.

   o  The named boxes across the screen are the same as on the
      View screen - for example, DATE, Client, Project, Task, and
      TIME. This is where you enter the information for 1 timecard.

   o  The center of the screen shows a large window which
      displays data-entry instructions.  These instructions change
      as you move from one entry field to the next.

   o  A list of FUNCTION-KEY COMMANDS is shown at the bottom of
      the screen.


4.2  Add Screen - Commands

F1-HELP:  Show a help screen for reference

F2-SAVE:  Save the timecard information just entered.  If invalid
data was entered you will be prompted to correct it here. When you
save the timecard, another blank timecard is presented.  The Date,
Client, and Project fields are held over from the last timecard for
convenience.

ESC-Cancel: Return to the VIEW Screen without saving the timecard
information just entered.
                                                                    Page 7

4.3  Add Screen - data entry instructions

The Add screen lets you enter information about one timecard at a
time.  You may use the LEFT/RIGHT, TAB and SHIFT-TAB keys to move
the highlight bar right and left through the 5 timecard fields.

DATE:  Defaults to the date of the currently highlighted timecard
       (or today's date if there are no timecards on file).  The
       date-field format is "MM/DD/YY".  See the instructions in
       the center window.  You may enter just the month and day
       (like "8/1" or "9/13") and the system will append the
       current year.  You may also type a "T" to tell the system
       to use TODAY's date.

Client, 
Project, 
and Tasks: 
       Note that the names of these fields are user-defined in the
       Utilities NAME program (see UTILITIES below). The rules of
       data entry are the same for all 3 fields. The center window
       contains a list of the allowed selections and their code
       numbers.  There are 2 ways to make a selection:

   1. Type the code number and press ENTER - the text
      is automatically inserted in the field box.

or 2. Use the cursor movement keys to move the
      item's highlight bar to the desired choice and
      press ENTER. Valid keys are UP/DOWN arrows,
      PGUP, PGDN, HOME, and END. 

TIME:  There are several formats you can use to enter the time
       associated with this timecard, as shown in the center
       window. Whichever format you choose, the system redisplays
       the time you enter in terms of hours and minutes (e.g., 90
       becomes 1:30).  The database stores all times as minutes to
       simplify arithmetic operations required for reports.
       
NOTE:  You may optionally enter up to 8 lines of free-format text
       which will be associated with this timecard.  In addition
       to the standard cursor movement keys the following functions
       are provided:

             ALT-C - Clear the entire Note window to blanks
             ALT-D - Erase the line with the cursor 
             ALT-E - Erase from the cursor to the end of the line
             ALT-I - Insert a new line below the current line
                                                                    Page 8

5. TIMECARD CHANGE SCREEN

Press "C" from the TIMESTAX View screen to invoke the CHANGE
command.  This screen looks just like the ADD screen. The fields have 
been filled in with the timecard which was highlighted on the View 
Screen, so it can now be modified.  

The operation of this screen is almost identical to the operation
of the ADD screen.  The only difference is that once you press the
F2 function key to save the changes you are automatically returned
to the View Screen.
                                                                    Page 9

6. GENERATING REPORTS

TIMESTAX can generate a variety of summary reports to help you
understand where you spend your time.  The Report Generator allows
you to:

     o  report on timecards between any 2 dates
     o  report on any or all Employees, Clients, Projects, and
        Tasks
     o  show only a Grand total, or up to 5 levels of subtotals
     o  show the subtotals as a percentage of the Grand total
     o  include the text of every timecard Note in the report


6.1  Report Options Screen - Appearance

The REPORT system may be invoked in one of 2 ways:

     1. Press "R" from the Main Menu
  or 2. Press "R" from the View Screen

The report screen again shows the date and time at the top right, a large 
window in the center for data entry, and several FUNCTION-KEY COMMANDS at
the bottom of the screen.

In general you will indicate the Reporting Options you want,
optionally use the F3 function to limit which Activities are to be
reported on, then press the F2 function key to start selecting and
sorting the timecards.  You are then given the option of sending
the report to the Screen, the Printer, or a Disk file on your PC. 

Section 7 gives details on how to generate several sample reports.


6.2  Report Options Screen - cursor movement keys

Use the following keys to make your way around the Report screen:
     
UP/DOWN ARROW KEYS,  Move up and down the data-entry fields.
TAB/SHIFT-TAB:

LEFT/RIGHT ARROW     Select an item from the "SUBTOTAL ON" list
KEYS:                for which you want subtotals. 

PAGE-UP/DOWN KEYS,   Jump to the top or bottom of the screen.
HOME/END KEYS:       

ENTER KEY:           Accept the data for the current field, and
                     move to the next field in sequence.
6.3  Report Options Screen - Commands


F1-HELP:     Show a Help screen for reference.

F2-PROCEED:  Using the options you typed in so far, proceed to
             the Select/Sort step.  You may press the ESC key to
             abort this step if you feel you made a mistake.

F3-SELECT:   Go to the Report Selection screen (discussed below).

ESC-Return:  Return to the previous menu.

                                                                    Page 10

6.4  Report Options Screen - options

The Report Selection screen controls several options in 3 main
areas of the screen.  These options will tell the system how to
collect and arrange the information in your report.

FROM DATE,  You can tell the system what date-range of timecards 
TO DATE:    you want to report on.  If the FROM-DATE is left
            blank the system starts with the 1st timecard on
            file;  if the TO-DATE is left blank the system
            stops at the last timecard on file.

            The date format is the standard MM/DD/YY. The
            system can fill in the year for convenience. Type
            'T' for Today's date.

SUBTOTALS:  You may specify up to 5 subtotal fields (or none) in
            any order.  For example, choosing "EMPLOYEE and CLIENT"
            means your timecards will be subtotaled first by
            EMPLOYEE, then within a given EMPLOYEE by CLIENT.

            The 5 subtotal field choices are shown in a small
            window to the right of the highlighted area.  You may
            select a field in one of 2 ways:

                1. Press the bold-faced letter of the subtotal
                   field you want, for example press "D" to
                   select "DATE".

            or  2. Use the LEFT/RIGHT arrow keys to move the
                   highlight bar to the correct field name, then
                   press the ENTER key.
                                                                    Page 11

Report Options (cont.)


            Note that the system won't prevent you from entering
            the same Subtotal field twice, for example "CLIENT
            and CLIENT".  It doesn't make much sense, but it won't
            hurt anything.

VIEW OPTIONS:  
            These options control the way the timecard report is
            actually displayed.  The various choices for these
            options are shown to the right of each field.  For
            example, the VIEWING FORMAT can be hours & minutes
            (hh:mm), hours & fractions-of-hours (hh.dd), or just
            minutes (mmm).  

            You may select a particular setting again in one of 2
            ways:
            
                 1. Press the bold-faced letter of the setting you 
                    want, for example press "M" for "Minutes" or
                    "Y" for "Yes".    

                 2. Use the LEFT/RIGHT arrow keys to move the
                    highlight bar to the correct setting, then
                    press the ENTER key.

            VIEWING FORMAT:  [ HH:MM, HH.DD, or MINS ]  
                 Controls the format in which all times are
                 displayed in the report

            SHOW PERCENTS:   [ Yes, No ]
                 Show the percent-of-total for each subtotal

            SHOW NOTES:      [ Yes, No ]
                 Show each timecard Note, if any.

                                                                    Page 12

6.5  Report Selection Screen

Press the F3 key from the Report Screen.  You will see a screen
which presents you with the lists of Employees, Clients, Projects, and 
Tasks currently defined in your system.  Initially, all the entries on 
each list are marked as Selected.  Only one list is "active" at a time, and
that is the one shown with a BLACK background.  You may select
items on any of the 4 lists by using the cursor keys, the SPACEBAR,
and the Function keys as follows:

UP/DOWN ARROW KEYS,  Move the highlight bar up and down within
PAGE UP/DOWN,        the "active" list
HOME, END KEYS:

LEFT/RIGHT ARROW     Move left and right between the lists, making 
KEYS:                each list "active" in turn

SPACEBAR:            Select or Unselect the current entry. Selected
                     entries are marked with a ">" symbol.

F2:                  Proceed with the report, using the lists as
                     marked.  Only timecards that refer to Selected
                     entries will be included in the report.

F3:                  Select ALL the entries in the active list

F4:                  Unselect ALL the entries in the active list

ESC:                 Cancel your selections, return to Report
                     Screen 

                                                                    Page 13

6.6  Displaying and printing your report


After the system selects and sorts the timecards you requested, you
will see the Output Destination screen.  Simply type the first letter of 
the destination of your report: 

    S - sends the report to the screen, pausing after each
        screenful of data.

    P - sends the report to the printer.

    D - sends the report to a disk file for later printing or 
        enhancement with a word processor.  The system will
        prompt you to type in the name of the file.

After the system processes the report you will be returned to this
screen.  This allows you to review the report or change its
destination, without having to re-specify the reporting options and
re-sort the records.  For example you may want to see the report on
the screen first before deciding to send it to the printer.

Press the ESC key to return to the Report Options screen.
                                                                    Page 14

7. REPORT SAMPLES

7.1  General Instructions

The best way to see the effects of the various options is just to
experiment.  For example, choose a date range of a week or so to
limit the time it takes to select and sort.  Then select 1 or more
subtotal fields in the SUBTOTALS section (if no subtotal fields are
selected you will get a "Grand Total" report with no subtotals). 
Limit your report to only 1 Project using the F3 key, or change
some of the Viewing options.  Finally, press the F2 key to start
selecting and sorting.

Remember - reports do not change what's in the database so you
can't accidentally erase any timecards or do any other damage here.

You can interrupt the sort process by pressing the ESC key.

When the Output Destination screen appears, press S to send the
report to the screen.

Note that the following sample reports show only the 1st page of
multi-page reports.


7.2  Sample Report 1 - Grand Total only

For a grand total report only the From-Date and To-Date were filled in.  
The user then pressed the F2 key to proceed. 

The number of records being selected and sorted is displayed near
the bottom of the screen, showing how many timecards were found
between the two dates. 

Notice that the report heading indicates:

    a. the date and time the report was run
    b. the date range specified by the user
    c. no subtotal fields were specified.

Also notice that the total time is displayed in the default format
of hours and minutes.
                                                                    Page 15

7.3  Sample Report 2 - One Subtotal Field

Here we specified a single sort field in the SUBTOTALS section, namely 
Client.  The report now shows that:

    a. the subtotal field is displayed in the report heading.
    b. the grand total is shown first
    c. the timecard times are subtotaled by Client.

Notice that the grand total is shown first, then the subtotals. 
This is a little different than a standard accountant's way of
showing a progression of subtotals, which usually appear as a
column of numbers that add up to the grand total:

    A1
       B1 25
       B2  5
       -----
          30 Subtotal
    A2
       B1 30
       B2 10
       B3 10
       -----
          50 Subtotal
    --------
          80 Grand Total

The alternate idea here is that the user can "explode" a given
total into subtotals, or "collapse" it back just by specifying more
or fewer subtotal fields:

No subtotals       1 subtotal         2 subtotals
Grand Total 80     Grand Total 80     Grand Total 80
                     A1 30             A1 30
                     A2 50               B1 25
                                         B2  5
                                       A2 50
                                         B1 30
                                         B2 10
                                         B3 10

This "nesting" can occur up to 5 levels deep. At each level the
total of that group is presented first, then the subtotal within
that group.  One advantage of this approach is that you can see the
grand total right away, without having to page-down to the end of
the report.  By making use of indentation the report lets you see
group subtotals more quickly even if all 5 levels are involved.
                                                                    Page 16

7.4  Sample Report 3 - 2 Subtotal fields
 
Here we specified a report subtotaled by Task within Client, showing 
percentages. The report now shows the 2 levels of subtotals using the 
indentation described above.

Notice that the percentages of the Tasks reflect the percentage of
the Client it "belongs" to.  In other words, a subgroup's
percentages are only in terms of the group directly above it, and
do not reflect a percentage of the Grand Total. 

In turn, the Client percentages are in terms of the Grand Total
because Client was the primary Subtotal field specified.


7.5  Sample Report 4 - 2 Subtotal fields plus Notes

Here we specified a report subtotaled by Task within Client, showing Notes.
We also changed the VIEWING FORMAT to "hh.dd" (decimal time).  The 
resulting report shows the time and the Note text for every timecard, 
beneath the last subtotal field (Tasks).  You may want to see all cards as a 
double-check of your data entry.  For example, if you see a timecard was 
recorded with a time of 16 hours you might want to go back to the View 
screen and correct it.
                                                                    Page 17

8. SYSTEM UTILITIES


8.1  Utility Screen - Appearance

The UTILITIES system may be invoked in one of 2 ways:

     1. Press "U" from the Main Menu
  or 2. Press "U" from the View Screen

You will be presented with the screen which lists the following 4 
Utility Options:

     1.  INFO  - Display/print summary information about all the
                 TIMESTAX database files

     2.  DISK  - Perform any of the disk input/output operations, 
                 (Import/Export, Archive/Unarchive, etc.)

     3.  SETUP - Update Activity Code Tables or change their Names 

     4.  QUIT  - Return to the previous screen.

To select an option press its first letter, for example press "D"
to invoke the Disk Utilities.


8.2  INFO Utility

Press "I" from the Utilities Main Menu to invoke the INFO utility. 
The options presented are:

DUMP:   Display or print every timecard in the database for
        debugging purposes.  The ID# field is the Employee ID number; 
        the EXP field indicates whether the timecard was exported yet; 
        the S field indicates status, where a "*" means the timecard has
        been marked for deletion.

FILES:  Display summary information about all the disk files      
        relevant to the TIMESTAX System.  

PEOPLE: Display summary information about all the timecards in the
        database, grouped by Person.

QUIT:   Return to the Utility menu screen.

                                                                    Page 18

8.3  DISK Utility

Press "D" from the Utilities Main Menu to invoke the DISK utility. 
The options presented are:

PACK:  This operation will perform a database "pack", which will
       physically delete all timecards previously marked for
       deletion (by using the ERASE command from the View
       screen).  This operation may take several minutes, so be
       prepared to wait.  The screen will show what record number
       is currently being processed.  

THE FOLLOWING OPTIONS ARE EXPLAINED MORE FULLY IN A SEPARATE
SECTION BECAUSE THEY MUST BE DONE CAREFULLY!

BACKUP/RESTORE:  
       These operations will copy all relevant timecard files to
       or from the disk drive you specify.

EXPORT/IMPORT:  
       These operations are used to COPY a subset of your
       timecards (within a date range you specify) in one
       of 2 directions:

          EXPORT: FROM your timecard database TO another disk
                  file

          IMPORT: FROM another disk file INTO your timecard
                  database

You would typically do an EXPORT in order to create a copy of a
week or month's worth of your timecards on another disk, which is
then given to the System Administrator to incorporate into a Master
Timecard Database.

ARCHIVE/UNARCHIVE:  
       These operations are used to PERMANENTLY MOVE a subset of
       your timecards (within a date range you specify) in one
       of 2 directions:

          ARCHIVE:  FROM your timecard database TO another disk
                    file

        UNARCHIVE:  FROM another disk file INTO your timecard
                    database

You would typically do an ARCHIVE in order to erase old or unwanted
timecards which are taking up space in your database, yet save them
onto a diskette for future reference.

QUIT:   Return to the Utility menu screen.
                                                                    Page 19

8.4  SETUP Utility

Press "S" from the Utilities Main Menu to invoke the SETUP utility. 
The information you fill in here is kept in the TIMESTAX.TBL 
configuration file.  The options you are presented with are described below:

Naming Activity Lists

Press "N" from the SETUP menu.  You may name the Activity Categories 
anything you like by typing in the names in the fields provided.  
Press the F2 key to return to the SETUP menu.


Updating Activity Lists

Press "1", "2", or "3", or "P" from the SETUP menu.  Each of these
options presents you with a popup list.  You may Add an item, Change the 
spelling of an item, or mark an item as "* deleted *".  When adding People, 
you are prompted to enter an ID number from 1-99.  When adding other Activity
items the system automatically assigns the next highest internal Code number.

WARNING:  The timecard database (TIMESTAX.DAT) stores only the Code
Numbers of the various Activities, not the actual text.  The text
is stored only in the TIMESTAX.TBL configuration file.  This has a
few important implications:

      1)  It is imperative that LAN users work from the same lists
          of Activities to be able to exchange export/import files.

      2)  To prevent mixups you are not allowed to delete an
          Activity entry while there are still timecards which
          refer to it.

      3)  You may not re-assign the internal Code Numbers or
          renumber them.

Assigning Activity Sublists

Press "A" from the SETUP menu.  Here you may assign
to Activity list 1 specific subsets of items in Activity lists 2
and 3.  For example, if you have defined Clients, Projects, and
Tasks then you can assign certain Projects and Tasks to each
individual Client.  This can greatly simplify the job of entering
timecards in the Add screen, because you are shown only those
Projects and Tasks which that Client is assigned.

The method of moving around this screen and making your assignments
is the same method used on the Report Selection screen (see Section
6.5).
                                                                    Page 20 

9. HOW & WHEN TO PERFORM AN EXPORT or IMPORT OPERATION


9.1  Overview of EXPORT and IMPORT

If you are using TIMESTAX in a LAN environment you may need to
periodically give subsets of your timecards to the System
Administrator, who then loads them into a centrally maintained
Master Database of everyone's timecards. Or you may want to export
some timecards to an ASCII file for use in an accounting or
database package.

Please note that the current version of TIMESTAX system is not a
true "multi-user" system, where everyone enters data into a central
Master Database directly.  Instead, everyone maintains his/her own
database of timecards, and a master database is periodically
updated with the latest timecards from each person.

For example, if there are 5 people using the system there will
really be 6 databases - the 5 personal databases kept by each
individual (which contains only his/her timecards), and a 6th
database kept by the Administrator (which contains everyone's
timecards).  The Export/Import operations are intended to
facilitate this transfer from your personal database to the Master
database.   By definition:
    
    a. EXPORT is a transfer from your database to some small 
              file on another diskette (or in a "common" area
              on the LAN).  YOU perform exports.

    b. IMPORT is a transfer from that small file into the master
              database.  The SYSTEM ADMINISTRATOR performs 
              imports.

You and your Administrator should agree on how often you will
export timecards - every week, every 2 weeks, every month.  Try to
keep on schedule with your exports to ensure that the master
database has the latest information.  That way the Administrator
can generate summary management reports which cover the entire
group's work.

                                                                    Page 21

9.2  How to EXPORT timecards

Bring up the Utilities Menu by pressing "U" from either the
TIMESTAX Main Menu screen or the TIMESTAX View screen.  From there
press "D" to invoke the Disk Utility menu.  Now press "E" to
perform an export operation.  

You are now asked to specify the date-range of timecards you want
to export.  If your group has agreed to do exports each week, you
may be trying this on Monday  morning.  In that case the From and
To-Dates would indicate the previous Monday through the previous
Sunday.

Next you are asked what disk file to write the export file to.  The
system shows you the default filename (which it gets from the
TIMESTAX.INI file).  If the default is acceptable you can just
press the ENTER key to proceed.  You can however change the
filename here before pressing ENTER.  For example, if the
TIMESTAX.INI file supplies only the pathname you must fill in the
filename yourself, as in:

    TIMESTAX.INI says   A:\      
    You fill it out as  A:\BHP0715.DAT

One strategy for naming your export files might be to use your
initials plus the to-date.  For example,  file "BHP0715.DAT" would
contain Bob Programmer's timecards for the week ending 07/15.  The
next week's export file would be called "BHP0722.DAT", etc.

Next the system indicates how many timecards it found between the
given dates and asks you if it's okay to proceed with the export
operation.  Press the ESC key if you decide it's not okay.  If
there were NO timecards found between the given dates the system
will tell you.

The system now copies the selected timecards to disk and the
operation is done.  
                                                                    Page 22

9.3  Cautions about EXPORTING timecards


    1. The EXPORT operation does not delete timecards from your
       database, it only makes a copy of them.  This means you
       can still generate reports using those timecards even
       AFTER you have exported them to the master database.
       For example, you might export weekly 4 times in a month
       but you want to run your own end-of-month report.  The
       timecards for the whole month will still be around on
       your personal system.

    2. If you try to export some or all of the same timecards
       a 2nd time you will get a warning message.
       The system has marked those timecards the
       first time they were exported and warns you about it
       now.  The danger is that later the Administrator would
       again merge your timecards into the master database and 
       end up with duplicates.  You can choose to go ahead
       with the export (for example if the Administrator has
       told you the first export was lost before it was
       processed), just be sure you are aware of the potential
       problem.

    3. You may get a warning that the export file you are 
       writing to already exists.  This may mean that the
       Administrator has not yet had a chance to merge it
       into the master database (or, if you are re-using
       the same floppy disk 2 weeks in a row, that the old
       export file is still on it).  You can choose to replace
       the old file here.

                                                                    Page 23

9.4  How to IMPORT timecards

Only the System Administrator will normally be concerned with an
Import operation.

Press "I" from the DISK UTILITY menu.  You will see a screen
which asks you for the name of the file you want
to import.  The default filename is taken from the TIMESTAX.INI
file, but you may override it before you press ENTER.

You cannot specify a date-range for an Import operation - the
entire import file will be merged into the master database.

Next you will be prompted to press the ESC to exit or any other key
to proceed.  

Again, the system marks the import file's records so that you don't
accidentally import them a 2nd time.  If you try to do so you will
see a warning message.  You may ignore this warning f you want, but be 
aware of the consequences.

                                                                    Page 24

10. HOW & WHEN TO PERFORM AN ARCHIVE or UNARCHIVE OPERATION


10.1 Overview of ARCHIVE and UNARCHIVE

The Archive/Unarchive operations are very similar to the
Export/Import operations, with one important difference:

   WHEN YOU PERFORM AN ARCHIVE, THE TIMECARDS YOU SELECT
   ARE PHYSICALLY ERASED FROM THE DATABASE.

The whole point of archiving timecards is to do just that - get
them off your database, where they are cluttering up the file and
slowing down data entry and reporting.  

By definition:
    
    a. ARCHIVE   is a transfer from your database to an archive
                 file.
 
    b. UNARCHIVE is a transfer from an archive file to your
                 database.


IMPORTANT NOTE:  

The archive file is a cumulative file - new archive records are
added to the end of it each time you perform an Archive operation. 

One strategy might be to archive any timecards over 2 months old,
and to do this at the beginning of each month.  That way you would
always have at least 2 months of old timecards available "online"
for running reports, but not so many that they slow down your
system.  For example, on October 1st you could archive all the July
timecards to a file called "TIME_89.ARK"; then on November 1st you
could archive all the  August timecards into that same file.
By the end of the year all your timecards for 1989 will be
collected in the single archive file.

You do not HAVE to archive at all.  The system will still work but
will generally slow down as more and more timecards are
accumulated.

The Unarchive facility allows you to retrieve archived timecards
and merge them back into your timecard database.  You might want to
do this if you want to generate a summary report that spans many
months of timecards.

Note that both individual timekeepers and the Administrator will
probably want to periodically remove timecards to an archive file
to keep the system performing well.
                                                                    Page 25

10.2 How to ARCHIVE timecards

Bring up the Utilities Menu by pressing "U" from either the
TIMESTAX Main Menu screen or the TIMESTAX View screen.  From there
press "D" to invoke the Disk Utility menu.  Now press "A" to
perform an archive operation.  

You are now asked to specify the date-range of timecards you want
to archive. Type in the From-date and To-date.

Next you are asked what disk file to write the archive file to. 
The system shows you the default filename (which it gets from the
TIMESTAX.INI file).  Normally the default is acceptable and you
just press the ENTER key to proceed.  You can however change the
filename here before pressing ENTER. As mentioned above, one
strategy for naming your archive files might be to use your
initials and the year, as in "BHP_88.ARK".

Next the system indicates how many timecards it found between the
given dates and asks you if it's okay to proceed with the archive
operation.  Press the ESC key if you decide it's not okay.  If
there were NO timecards found between the given dates the system
will tell you.

If you have not yet exported some or all of the selected timecards
you're trying to archive, you will see a warning message.
You should first export those timecards to the Administrator
before attempting to archive them.

The system now copies the selected timecards to the archive file
and automatically performs a "database pack" to physically remove
them from your database.


10.3 How to UNARCHIVE timecards

Press "U" from the Disk Utility menu to perform an Unarchive
operation. Enter the From and To-dates to tell the system which timecards in
the Archive file you want to extract.  Then enter the name of the
Archive file you want to process.

Next you will be prompted to press ESC to exit or any other key to
proceed.  
IMPORTANT NOTE:
The system DOES NOT mark the archive file's records during an
Unarchive operation.  This means that you CAN accidentally
unarchive them a 2nd time and the timecard system will not warn you
about it.  If you do so you will be adding those records a 2nd time
to your database.
                                                                    Page 26

11. HOW & WHEN TO PERFORM A BACKUP or RESTORE OPERATION


11.1 Overview of BACKUP and RESTORE

Computer disk technology is not perfect and it is possible for data
to be lost, written over, or otherwise corrupted.  For this reason
you should FREQUENTLY back up all files on your hard disk.  There
are many commercial programs available for disk backup but the
TIMESTAX system additionally provides a way to back up just those
files it deals with.

The safest way to peform a backup is to copy the files to a floppy
disk which you then put in a safe place, perhaps as often as once
a week.  At the end of a month, when you have 4 or 5 backup disks,
you can re-use the 1st (oldest) disk as you start a new month.  In
this way you're never more than a week out of synch with your
backups.  In other words, if your hard disk is erased you only have
to re-enter 1 week's worth of timecards after you Restore from your
most recent backup.

Backups are insurance policies.  It's up to you how much risk your
willing to take and how safe you think your data is on your hard
disk.

Note that the Administrator must be much more concerned with doing
frequent backups because the master database is the accumulation of
everyone's timecards.  In fact, individuals may be more lax about
backing up their own systems because they think the master database
has all their timecards anyway. DO IT ANYWAY!

A Restore operation is done when you want to completely replace all
existing timecard files with a backup copy.  Note that a Restore
does not perform any checks of the data - it simply erases the
current files and copies the backup files in their place.
                                                                    Page 27

11.2 How to BACKUP your database 

Bring up the Utilities Menu by pressing "U" from either the
TIMESTAX Main Menu screen or the TIMESTAX View screen.  From there
press "D" to invoke the Disk Utility menu.  Now press "B" to
perform a backup operation.

You are asked what drive and path to back up files to.  The default
is taken from the TIMESTAX.INI file (typically A:\), but you may
override that here.

Next you will be asked to press the ESC key to abandon the backup
operation, or any other key to proceed.  The system will backup all
related TIMESTAX files to the drive you have specified.


11.3 How to RESTORE your database 

Press "R" from the Disk Utility menu to perform a Restore operation.  You 
will see a screen which asks you for the name of the disk drive where the 
backup files are to be found. The default filename is taken from the 
TIMESTAX.INI file, but you may override it before you press ENTER.

Next you will be prompted to press ESC to exit or any other key to
proceed.  The system will erase the current set of TIMESTAX files
and replace them with the ones found on the backup drive.
                                                                    Page 28

APPENDIX A. LAN CONFIGURATION FOR THE LAN ADMINISTRATOR

TIMESTAX version 2.5 is NOT a true multi-user database system.  It
will not support several users at once reading and writing to the
Master TIMESTAX.DAT file or its index files.  However it is
possible to make use of several key features of a LAN which make
controlling and maintaining the system easier.  

The basic concept for LAN use is that each user maintains his
personal timecards on his own local PC, while a Master Timecard
Database is maintained in a secure location on the file server. 
Periodically each user will export a subset of his timecards to a
directory on the LAN;  and a designated Administrator will import
those files into the Master database.  Strictly speaking, the
individual user files could also be on the file server in that
user's private directory.

The TIMESTAX.INI Configuration File 

TIMESTAX.INI is an ASCII text file which tells TIMESTAX where to
look for the various files it needs.  If there is no such file
TIMESTAX assumes all files are on the current working directory. 
You may also specify the name and path of TIMESTAX.INI as the 1st
argument to TIMESTAX (as in "TIMESTAX c:\LOCAL\TS.INI").  For use
in a LAN environment you might set up TIMESTAX.INI to look like
this:

    Text Line                 Comment                            
    SYSTEM = F:\APPS          System files are to be found in the
                              \APPS directory of the F: drive on
                              the LAN file server.
    DATA   = C:\TIMESTAX      Personal timecards are to be found
                              in the \TIMESTAX directory on the
                              C: drive of the local PC.
    BACKUP = A:               Backup files to drive A:
    EXPORT = F:\TS            Export files to path F:\TS on the
                              LAN file server
    ARCHIVE= C:\TIMESTAX\ARK  Archive to file C:\TIMESTAX\ARK

Some of the files TIMESTAX requires are called System files.  These
are files that should be maintained only by the Administrator in a
secure area of the LAN file server. These files are:
               
          SYSTEM FILE NAME    Description                      
          TIMESTAX.EXE        TIMESTAX executable program
          TIMESTAX.TBL        Activity Code tables
                                                                    Page 29

LAN CONFIGURATION (continued):

Once TIMESTAX is run the following Data files will be automatically
created and maintained in the directory specified by the
TIMESTAX.INI DATA parameter:

          DATA FILE NAME       Description                     
          TIMESTAX.DAT         Main database of timecards
          TIMESTAX.NTS         Timecard user notes
          TS_DATE.NDX          Index of timecard dates
          TS_CUST.NDX          Index of timecard Clients   
          TS_PROJ.NDX          Index of timecard Projects   
          TS_TASK.NDX          Index of timecard Tasks        

The MASTER Timecard Database

The Master Database is the same as the normal TIMESTAX database,
except that it contains all timecards from all users.  The Master
is updated periodically by the System Administrator by importing
users' export files.  It must be protected from unauthorized use. 
The simplest way to do this is to create a special Master directory
and grant access only to the Administrator:

   Directory  \MASTER  - contains master TIMESTAX.DAT,
                         TIMESTAX.NTS, plus master *.NDX files

Then the Administrator should have his/her own TIMESTAX.INI file as
set up to allow direct access to the Master Database as follows:

              SYSTEM = F:\APPS
              DATA   = F:\MASTER

Finally, create a "staging area" where all Export and Import
operations can occur.  For example, you may set up everyone's
TIMESTAX.INI file to specify:

              EXPORT = F:\TS_STAGE\

This pathname will be presented to all users when they do either an
import or an export operation. In this way users can place multiple
export files in this one directory, where they stay until the
Administrator imports them.
                                                                    Page 30

APPENDIX B. TECHNICAL NOTES

The TIMESTAX program is written in Microsoft C v5.1 (large code-
model) and uses the LATTICE (c) dBc-III database library which
allows for directly reading and writing dBase-III files.  In this
way the system has the speed and performance of a compiled language
program, and the flexibility of allowing users to design custom
reports within the standard dBase-III environment.

As it turns out, only the .DAT and .NTS files are dBase-III
standard (corresponding to .DBF and .DBT files).  The index files
were purposely not written in standard format to reduce the size of
the files.  Specifically, the key fields are not standard ASCII
derived from the .DBF fields, instead they are concatenations of
binary internal fields of various lengths. This should not be a
problem for the dBase user however, since he can create his own
indexes very quickly using built-in dBase commands. 

The dBc-III package used is not the multi-user LAN version,
although such a version is commercially available.  It was thought
that given the very large volume of timecards/records involved in
daily time-keeping, a single central multi-user file would quickly
grow too large and cumbersome to use effectively.

Instead, the approach we took was to provide each user with his or
her own personal timecard database with "private" timecards on it. 
The disadvantage is that each user must periodically export subsets
of the database to an Administrator, who must import those files
into the Master database.  The larger Master database exists only
for reporting purposes and not for the day-to-day access by busy
office workers.  The advantage is that each user will have a fast
and efficient system to record his time.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2393

     Volume in drive A has no label
     Directory of A:\

    GO       BAT        40   1-01-80   6:00a
    README   TXT      1615  10-15-90   7:50p
    TIMESTAX EXE    167063  10-15-90   7:50p
    TIMESTAX TXT     56937  10-15-90   7:50p
    TIMESTAX LIC      6736  10-15-90   7:50p
    GO       TXT       925  11-19-90   8:11a
    FILE2393 TXT      2591  11-19-90   4:42p
            7 file(s)     235907 bytes
                           82944 bytes free
