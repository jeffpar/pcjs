---
layout: page
title: "PC-SIG Diskette Library (Disk #1217)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1217/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1217"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "REMEMBER-IT"

    REMEMBER-IT is a multi-featured date/memory manager which ensures that
    important events, payments due, billings, birthdays, or (heaven forbid)
    anniversaries are not forgotten.
    
    Business associates, relatives, friends, and others will be impressed at
    how thoughtful and organized you are by remembering those important
    dates year after year; you need not give the credit to your computer.
    
    More than a calendar, REMEMBER-IT searches your list of events and, when
    the date is within your predetermined warning window, alerts you that
    the event is coming up.  Only events that are pertinent to a particular
    day's warning window are displayed.  You do not have to scan your
    calendar ahead for upcoming events.
    
    This program is not memory-resident but is designed to run every time
    your computer is powered up.  Events within the warning window will be
    displayed and you may continue on to other applications with one
    keypress or utilize several other program functions before exiting
    REMEMBER-IT.
    
    Program functions allow reminders to be entered based on annual,
    one-time, or monthly frequency.  Additional features include a calendar
    capable of displaying any month in a 200-year period, a date computer
    that will determine a date future or past from your given number of
    days, and a Julian day calculator.  Documentation is included.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1217.TXT

{% raw %}
```
Disk No: 1217
Program Title: REMEMBER-IT
PC-SIG version: 1.1

REMEMBER-IT is a multi-featured date/memory manager that ensures
important events, payments due, billings, birthdays, or (heaven forbid)
anniversaries, are not forgotten.

Business associates, relatives, friends, and others will be impressed at
how thoughtful and organized you are by remembering those important
dates year after year; you need not give the credit to your computer.

More than a calendar, REMEMBER-IT searches your list of events and, when
the date is within your predetermined warning window, alerts you that
the event is coming up.  Only events that are pertinent to a particular
day's warning window are displayed.  You do not have to scan your
calendar ahead for upcoming events.

This program is not memory resident but is designed to run every time
your computer is powered up.  Events within the warning window will be
displayed and you may continue on to other applications with one
keypress or utilize several other program functions before exiting
REMEMBER-IT.

Program functions allow reminders to be entered based on annual,
one-time, or monthly frequency.  Additional features include a calendar
capable of displaying any month in a 200 year period, a date computer
that will determine a date future or past from your given number of
days, and a Julian day calculator.  Documentation is included on the
program disk.

Usage:  Event Reminder/Organizer.

Special Requirements:  None.

How to Start:  Type GO (press enter).

Suggested Registration:  $20.00

File Descriptions:

REMEMBER EXE  Main program.
DOC      BAT  Batch file for printing the documentation.
REMINDER DOC  Program documentation.
REMEMBER DTA  Program data file.
REMEMBER TTL  Program title graphics.
NEWUSER  BAT  Batch file to view new user information.
NEWUSER  DOC  New user informaton.

PC-SIG
1030D East Duane Avenue
Sunnyvale  Ca. 94086
(408) 730-9291
(c) Copyright 1988,89 PC-SIG, Inc.

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                   <<<<  Disk No 1217 REMEMBER-IT  >>>>                  ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To start the program, type REMEMBER (press enter)                       ║
║                                                                         ║
║ To copy the documentation to your printer, type DOC (press enter)       ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## NEWUSER.DOC

{% raw %}
```
         REMEMBER-IT is a multi-featured calendar / date manager program
    for for PC/MS DOS computers that will ensure you do not forget
    important dates, payments due, birthdays, or (heaven forbid)
    anniversaries.  Remember it will require less than 128K of RAM and one
    floppy or fixed disk drive.  Annual, monthly, and one time reminders
    are supported.  When the date is within your predetermined date window
    for a given reminder, the reminder will be displayed.  The program is
    menu driven and self prompting during program execution.  It is not
    memory resident and should not create memory resident conflicts.

         Documentation is included on each program diskette.  To obtain a
    printout of this documentation, insert the program disk in the active
    drive, ready your printer with paper, and enter DOC.  The program
    documentation will print out for use as reference.

```
{% endraw %}

## REMINDER.DOC

{% raw %}
```












                             REMEMBER-IT
                             USERS GUIDE


                                V1.0



                    COPYRIGHT 1988 by Wayne D. Riggs
                         All rights reserved









                             Wayne Riggs
                             P.O. Box 1235
                             Atwater, CA  95301































-

                             INTRODUCTION

         REMEMBER-IT is a multi-featured date manager program for PC/MS DOS
     computers that will ensure important dates, payments due, birthdays,
     or (heaven forbid) anniversaries, etc are not forgotten.  Annual,
     monthly, and one time reminders are supported.  Only when you are
     within your predetermined day prior window will pertinent reminders
     be displayed.  REMEMBER-IT will require about 128K of RAM and one
     floppy or fixed disk.  The program is self prompting and menu driven
     during program execution.  It is not memory resident and should not
     create memory resident conflicts.

         Documentation is included on each program diskette.  To obtain a
     printout of this documentation insert the program in the active
     drive, ready your printer with paper and enter DOC. This file will
     print out for use as reference.

                         GETTING STARTED

         The optimum way to use REMEMBER-IT is to run it every time you
     power up your computer.  This way you won't have to remember to use
     REMEMBER-IT.  The best way to achieve this is to invoke REMEMBER-IT
     from within an autoexecute batch file.  If you already use an
     autoexecute batch file just add it to your file after memory resident
     drivers and just prior to any menus or menu programs that take you
     into other applications.  See your DOS instructions for creation of an
     autoexecute batch file.

     FIXED DISK INSTALLATION

     FIRST:  COPY the three files REMEMBER.EXE, REMEMBER.TTL, and
             REMEMBER.DTA from disk A: into the root directory.

             EXAMPLE: COPY A:REMEMBER.* C:\

     SECOND:  Create an autoexec.bat file or ADD REMEMBER to your
              present autoexec.bat file.

           EXAMPLE of creation of an autoexecute batch file:

              At the DOS prompt C:\> type:

                copy con autoexec.bat

              Then press ENTER.

              Type the file names of any initialization programs or
              drivers you already use and press ENTER after each one.

              Prior to bringing up a menu program or other file that gets
              you into your normal applications, at the DOS prompt C:\>
              type:

                REMEMBER

              Then press ENTER.

              After typing the last command press F6 then press ENTER.  A
              1 File(s) copied prompt will indicate the batch file has
              been created and stored to disk.

                                     - 2 -


     -

     FLOPPY DISK INSTALLATION

         Floppy disk only users can install REMEMBER-IT in a batch file
     arrangement if it is loaded ahead of any program you frequently use.
     If placed in an autoexecute batch file on your boot up system disk
     REMEMBER-IT will run automatically after your DOS boots up. Install as
     per fixed disk directions above. The drive prompt will be A:> instead
     of C:> It may also be run like any other program just by inserting the
     REMEMBER-IT disk and typing: REMEMBER then press Enter.  This mode
     however, defeats the intent of the program and puts the burden of
     remembering to run the program on you the operator instead of your
     computer.


                       RUNNING THE PROGRAM

         When the program is executed, you get a brief title letting you
     know REMEMBER-IT is running. The program will search for reminders
     that meet day and lead time criteria.  There are three different
     categories of reminders.  Annual reminders are those like taxes due
     or the wife's birthday.  One time reminders only trigger once and
     never again.  Monthly reminders like billing reminders or mortgage
     payment due dates trigger every month within the trigger window.  If
     no reminders are applicable, a "NO REMINDERS TODAY" prompt will
     display in the reminder window area.

         If no other program functions are desired, a single keypress (F4)
     will exit you from the program and the batch file will take you on to
     other applications.

         The lower window displays available functions.  The middle window
     displays prompts or serves as the entry pad when entering data into
     the program.

                              TODAYS REMINDER MODE

         When TODAY'S REMINDERS are being displayed, several functions
     are available to by pressing the appropriate function key:

     F1: ADD NEW REMINDER.  This will activate the middle window for
     reminder entry.  Follow the prompts given in the lower window.  Date
     format errors will create an error signal and you must enter it again.
     Reminder types are A for annual, O for one time, and M for monthly.
     Next enter the reminder text like "Wife's Birthday / buy present".
     Then enter the lead time in days you want your computer to start
     prompting you.  Every time the program is run, during the warning days
     window you will be reminded.  Note: for all reminders, the program
     will not display reminders until after the reminder date.


     F2: DATE COMPUTER / CALENDAR. This mode puts opens a submenu
     containing three different functions:  200 Year Calendar, Days Ahead /
     Behind, Julian Day, and Previous Menu functions.  Each of these
     functions is described separately below.

     F3: DISPLAY ALL REMINDERS.  All reminders in the system will be
     displayed as well as opening up four submenu functions.  If the
     reminders have been previously sorted they will increase by date.
     Press the down arrow to scroll through the reminders.  A prompt will
     show when you have reached the last reminder.  The four submenu


                                     - 3 -

     -



     functions available are SORT REMINDERS BY DAY / MONTH, DELETE REMINDER
     ON CURSOR LINE, RETURN TO TODAYS REMINDERS, and EXIT REMINDER MODE.

                         DATE CALENDAR / COMPUTER MODES

     200 YEAR CALENDAR:  Enter year and month desired from 1899 to 2099.  A
     calendar for the appropriate month will be displayed on the screen.
     For this year or this month just press enter.

     DAYS AHEAD / BEHIND:  This computational function will after entering
     an beginning date, compute what the Julian and Calendar date will be
     up to 366 days forward or backward in time.  This function precludes
     those sessions with calendar counting days to determine when some
     action in the future or past need to be accomplished.

     JULIAN DAY:  After entering a calendar date this function will convert
     the day into a Julian day.

                            ALL REMINDER NOTES MODE

     EDIT REMINDERS:  When in the REVIEW ALL REMINDER mode, you may edit
     any reminder by positioning the corsor on the reminder line and
     pressing the F1 key.  The cursor will position on the editable field
     and allow changes to be made.  Use the arrow keys or press enter to
     move through the fields.  When in the last field, press enter to save
     the information to disk.  If you wish to exit without changes, press
     the ESC key at any time.

     DELETE REMINDER ON CURSOR LINE: If you wish to delete a reminder,
     position the cursor next to it and press F2 when in the Display All
     Reminders mode.  The reminder will be permanently deleted from the
     data record.

     SORT REMINDERS BY DAY / MONTH: Sort Reminders by Date should be used
     after any reminder entry if you want the reminders ordered by date
     when listed.  Because of the different types of reminders, they are
     not sorted by year but by day and month to make then appear in
     sequence when the DISPLAY ALL REMINDERS function is used.

     RETURN TO TODAYS REMINDERS: When the Display all Reminders mode is
     active, pressing F4 will return you to the Today's Reminders format.


     EXIT REMEMBER IT:  When in the Today's Reminders format, pressing F5
     will cause all data to be saved and initiate exit from the program.




     THE AUTHORS ENTIRE LIABILITY AND YOUR EXCLUSIVE REMEMDY SHALL BE:
     1.  Author furnished defective disks will be replaced if returned to
     the author.
     2.  The author is in no way liable for the quality or consequences of
     ion of program diskettes furnished by others.
     3.  In no event is the author liable to you for any damages, including
     lost profits, lost capital, or other incidental or consequential
     damages arising out of any use or inability to use this program.
     4.  The entire risk for use of this program is assumed by you the
     user.

                                     - 4 -



     REGISTERED USER PRIVILEGES
     1.  You will receive the next updated version of the program.
     2.  You will be advised of other programs or new versions as soon as
     they are available.
     3.  You will receive priority help if you have problems or questions.
     4.  Suggestions resulting in major program improvements will get you
     the new version of the program FREE!!!
     5.  Lastly, you won't feel guilty every time you use the program. If
     REMEMBER-IT has saves you from the "I forgot it!" problem just once a
     year, your continued use and registration should be worth it.

     COPY RESTRICTIONS

     REMEMBER-IT is distributed under the user distributed
     software concept.  You can copy, give to friends, furnish to bulletin
     boards, and software clubs as restricted below.  You have been
     furnished this copy to evaluate the program.  If you or your friends
     wish to continue to use the program, become a registered user. Whether
     or not you become a registered user, pass it on to interested friends.

     RESTRICTED PERMISSION TO COPY

     REMEMBER-IT This program is not a public domain program.  It is
     copyrighted and permission to copy is only as described unless you
     have written permission from the author. You may copy only to furnish
     it for evaluation purposes only. No fee may be charged for copies
     furnished to others except shareware distributors may charge up to
     $6.00 to cover cost of diskette, shipping, and handling. Bulletin
     boards and other electronic media may make this program available
     provided they furnish all files, this documentation in total, and do
     not charge fees specifically for the program other than normal on-line
     service fees.  Groups, clubs or individuals may not modify the program
     in any way. The author is in no way accountable for quality, content
     or operation of copies furnished by others.

     Register and let's and get us going in this thing together. Your
     participation and suggestions for enhancements will encourage me to
     continue to improve the program.  I use REMEMBER-IT myself and find it
     of tremendous aid in avoiding the dreaded "I forgot it" alibies. The
     user response from those "organizers" among us has been quite
     remarkable during program testing.  Feel free to pass it around and
     encourage registration.  It can only help the cause of shareware and
     user distributed software.  These concepts serve to keep the cost of
     software down and eliminate the copy protection plague that we all
     faced several years ago.

















                                     - 5 -



     REMEMBER-IT REGISTRATION FORM

     Wayne D. Riggs
     P.O. Box 1235
     Atwater, CA 95301                           88.xxx.1.1 DATE________

     Name ______________________________________________________________
     Street ______________________________________________________________
     City __________________________State _________ Zip Code____________

     [ ] PROGRAM OBTAINED FROM AUTHOR--USER REGISTRATION FREE.

     [ ] PROGRAM OBTAINED FROM ANOTHER SOURCE.  PLEASE LIST SOURCE SO I CAN
     PROVIDE THEM WITH UPDATES. REGISTRATION is $10.00 donation to the
     author.  This entitles you to full user support from the author and
     one free program update when the next version is released.

     Send information about the following user distributed program by the
     author:

     [ ] FLOPCAT 3.0 a floppy disk catalog system, file lister, file
     finder, sorter and label printer program is available directly from
     the author for a $10.00 registration donation.  The program
     automatically reads the directory information and allows disk title
     and file remarks.  The disk label feature alone makes it well worth
     having.  Supports fixed disk, 3.5 or 5.25 inch labels, list by volume,
     and wild card searches.  The program will run on systems with only two
     floppy drives or one floppy drive and one fixed disk.  It fully
     utilizes the fixed disk's speed and increased capabilities.

     [ ] NAV-AID  Computer aviation flight planning.   Computes time,
     heading, fuel used, fuel remaining, and distance.  Prints out flight
     plan for use in flight.  Large user modifiable and expandable data
     base for North America provided.  Available direct from the author for
     $20.00 donation.


     Any of these programs are available on 360K 5.25 inch or 720K 3.5 inch
     disks.

     DONATIONS BY CHECK OR MONEY ORDER ONLY, SORRY NO CREDIT CARDS

     ORDERS OUTSIDE USA, PLEASE ADD $3.00 ADDITIONAL FOR POSTAGE
     AND SEND DONATION IN THE FORM OF INTERNATIONAL MONEY ORDER.

     SUGGESTIONS FOR PROGRAM ADDITIONS OR IMPROVEMENTS:

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1217

     Volume in drive A has no label
     Directory of A:\

    DOC      BAT        24   5-22-88   2:48p
    FILE1217 TXT      2011   1-06-88   9:58a
    GO       BAT        38   1-18-88   1:38p
    GO       TXT       540  11-10-88   8:55a
    NEWUSER  BAT        38   4-06-88   8:04p
    NEWUSER  DOC      1024   7-26-88   8:26p
    REMEMBER DTA       231  11-26-88   5:22p
    REMEMBER EXE     73889  11-26-88   5:10p
    REMEMBER TTL       977  11-21-88  10:04p
    REMINDER DOC     14336  11-21-88  11:46p
           10 file(s)      93108 bytes
                           64512 bytes free
