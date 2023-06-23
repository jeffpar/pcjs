---
layout: page
title: "PC-SIG Diskette Library (Disk #618)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0618/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0618"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "MAKEMYDAY"

    A quartet of time-management systems for today's super-busy people.
    Beat Father Time at his own game.
    
    APPOINTMENT CALENDAR lets you keep track of all of your
    appointments.  Never forget another meeting or dinner engagement.
    
    JOB SCHEDULER maintains your ``to-do'' list, in categories you define.
    Print a work-in-progress report the next time the boss asks, ``Where are
    we on the Wombat project?''
    
    EXPENSE ACCOUNT MANAGER monitors your expenses and provides the detailed
    account information necessary in the categories you specify.
    
    TIME LOG tracks the billable time you spend on each client or project
    and provides the necessary documentation when you need it.  Attorneys,
    accountants, consultants and other service professionals will appreciate
    it.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE0618.TXT

{% raw %}
```
Disk No:  618
Disk Title: MakeMyDay
PC-SIG Version: S3

Program Title: MakeMyDay
Author Version: 4.1
Author Registration: $50.00
Special Requirements: None.

A quartet of time-management systems for today's super-busy people.
Beat Father Time at his own game.

APPOINTMENT CALENDAR lets you keep track of ALL of your
appointments.  Never forget another meeting or dinner engagement.

JOB SCHEDULER maintains your ``to-do'' list, in categories you define.
Print a work-in-progress report the next time the boss asks, ``Where are
we on the Wombat project?''

EXPENSE ACCOUNT MANAGER monitors your expenses and provides the detailed
account information necessary in the categories you specify.

TIME LOG tracks the billable time you spend on each client or project
and provides the necessary documentation when you need it.  Attorneys,
accountants, consultants and other service professionals will appreciate
it.

File Descriptions:

MMD      DOC  Documentation file.
MMD      EXE  Main program.

PC-SIG
1030D East Duane Avenue
Sunnyvale, Ca. 94086
(408) 730-9291
(c) Copyright 1988,89 PC-SIG, Inc.
```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                     <<<<  Disk #618 MAKEMYDAY  >>>>                     ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To copy the documentation to your printer, Type:                        ║
║                    COPY MMD.DOC PRN (press enter)                       ║
║                                                                         ║
║ To run MakeMyDay enter at DOS prompt: MMD (press enter)                 ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## MMD.DOC

{% raw %}
```

















                                MakeMyDay

                          Time Management System
                               Version 4.1


















                           Copyright (C) 1986, 1989
                        Universal Business Concepts, Inc.
                             All Rights Reserved

                         TABLE OF CONTENTS

   Introduction ...............................................       1
   What It Is .................................................       2
   Getting Started ............................................       3
     Floppy Disk System .......................................       3
     Hard Disk System .........................................       3
     How to Run ...............................................       3
   Selecting Drive and Filename ...............................       4
   File Naming Conventions ....................................       4
   Paths ......................................................       4
   General Usage ..............................................       5
   Dates ......................................................       6
   Calendar Display ...........................................       6
   ID Fields ..................................................       6
   Appointment Calendar .......................................   7 - 8
   Job Scheduler ..............................................   9 -10
   Expense Account Manager ....................................      11
   Time Log ...................................................      12
   Process Deletions ..........................................      13
   Rebuilding Index Files .....................................      13
   Site License Agreement .....................................      14
   Order Form .................................................      15






                              MakeMyDay
                       User's Maunal Addendum
                            Version  4.1


DAILY REMINDER REPORT

The Daily Reiminder Report, available from the Main Menu, combines items
from the Appointment Calendar and Job Scheduler into one handy report.  In
order to keep the appoinment listings as condensed as possible, a feature
has been added that allows you to combine consecutive entries in the
Appointment Calendar into one block.  Only the first line of the block will
be printed in the description that shows on the Daily Reminder Report.
Just put a double quotation mark ( " ) somewhere in the Appointment
Description field, and it will be combined with the items directly above it.
For example, if you have a one hour meeting scheduled you cold enter it as
follows:

Time      ID                  Description
----      --                  ------------
8:00    WOMBAT        Meet with Kurt and Fred re: status of Wombat

8:15    WOMBAT        " Project.  Decision to be made on what to

8:30    WOMBAT        " about flagging Wombat sales.

8:45    WOMBAT        "

The Daily Reminder Report would show this as:

8:00 - 8:45          Meet with Kurt and Fred re: status of Wombat

The double quotation mark can appear anywhere on the descrption line.  Do
not put a double quotation mark  on the first line of the appointment block.



COLOR SCREENS
Color screens are now produced for color monitors.  MakeMyDay will also run
on monochrome monitors.  Selection of monochrome or color mode is done
automatically.

ID MASK
In the Job Scheduler, Time Log or Expense Account Manager it is now
possible to view selected ID key fields.  Once the desired key has been
entered, only items whose ID fields match will be visible.  To restore
visibility to all items, enter a blank field in the ID Mask.  Use the F6
key to enter ID Mask keywords.  For example, if you were in the Expense
Account Manager area and wanted to view only those records whose ID fields
match "TRAVEL", you would press the F6 key, enter the word "TRAVEL" and
press <ENTER>.  The screen will now show only "TRAVEL" items.


JOB PRIORITIZATION
The Job Scheduler Status field now has four states, (H)igh Priority, (L)Low
Priority, (C)omplete and (D)elete.  The (I)ncomplete status state has been
replaced with the (H)igh and (L)ow priority options.

STATUS MASK
The Job Scheduler Status Mask now has four states, Off, (H)igh, (L)ow and
(H/L). Use the Status Mask to view only the records that match the selected
state.  For example, to view only (H)igh Priority items set the Status Mask
to (H).  To change the Status Mask, press the F4 key repeatedly until the
desired state shows, then press any other key (except F4) to return to the
view window.


ESCAPE KEY
The escape key (Esc), can now be used to abort data entry screens and
report request screens.  Press Esc at any time to abort the process and
return to the previous screen.  Additionally, printer related critical
errors are now trapped, allowing the printer to be turned off without
the risk of abnormal program termination.


                                                                           1


                           INTRODUCTION

   MakeMyDay  is the copyrighted property of Universal Business Concepts.
   You are granted a limited license to use MakeMyDay and to copy it
   and distribute it provided that the following conditions are met:

   1) No fee may be charged for such copying and distribution.

   2) MakeMyDay may only be distributed in its original, unmodified state.



                      Universal Business Concepts, Inc.
                          169 Edgewood Avenue
                          Longmeadow, MA 01106

   You may not use this product on a regular basis without paying
   a license fee of $39. Site and commercial distribution licenses are available.
   Registered users will receive a printed User's Manual, the MMD Organizer
   notebook and accompanying "Vest Pocket Utility" program, and "Time
   Management Tips" publication.


   A word about user supported software:

   It is extremely expensive to bring a new software product to market
   in today's environment.  The user supported software concept (usually
   known as shareware) provides a method whereby individual authors and
   small companies can market their products without incurring staggering
   advertising and promotional costs.

   The user benefits in two ways. First, the user may "test drive" the
   product thoroughly before purchasing it and second, the user receives a
   quality product of proven value at low cost.

   This concept can only work with your support. If you find that you are
   still using MakeMyDay (or any other user supported software package)
   after a couple of weeks, then it is obviously worth something to you
   and you should send in the required registration fee.

                                                                            2
                              WHAT IT IS

   MakeMyDay is a complete computerized Time Management system for
   the IBM PC family of computers.  It is an Appointment Calendar, a
   Job Scheduler, a Time Log and an Expense Account Manager. It can be
   used to keep track of all of these things for one person, or for
   several people. It makes use of your line printer to produce all
   the worksheets and printed reports you need to organize your
   business and personal schedule.

   The APPOINTMENT CALENDAR allows you to keep track of all of your
   appointments, twenty-four hours per day.  It will handle individual
   appointments or repeating appointments (first Tuesday of each month,
   every Monday at 8 O' Clock, etc.).  You can view your appointments on
   your computer monitor or get a printed report.

   The JOB SCHEDULER keeps track of your complete "to do" list, broken
   down into the categories you assign.  It will remind you of everything
   you have scheduled for yourself. Incomplete items are rolled forward
   until you mark them as complete.  In addition, MakeMyDay will provide a
   Work In Progress report for each category you assign. The next time the
   boss suddenly wants to know "How do we stand on the Wombat project ?",
   you'll be able to provide a complete printed list of every activity
   involved- the day it was scheduled to be completed, and the day it
   was completed along with everything that remains to be done.

   The EXPENSE ACCOUNT MANAGER keeps track of your expenses. You assign
   the categories (travel, entertainment, hotel, etc.) under which each
   item belongs.  You also specify the date and the amount, and whether
   the item is a payment or reimbursement.  MakeMyDay keeps track of
   everything and provides the account information you need, broken down
   by the categories you assign.

   Finally, the TIME LOG keeps track of the time you've spent on each
   client or project and provides the necessary documentation when you
   want it.  Attorneys, accountants, consultants- anyone who needs to keep
   a log of time spent- will find this feature useful.



                                                                           3
                              GETTING STARTED



   The instructions in this section assume that you are familiar enough
   with DOS to format disks and copy files from one disk to another and,
   if you are using a hard disk system, that you know how to make and use
   sub-directories.

   MakeMyDay requires that the following file be present on the default
   disk drive and (optional) sub-directory:
                MMD.EXE

   MakeMyDay will automatically create and maintain all of the data files
   it will use on the drive that you specify (this is explained further
   later on).


                          FLOPPY DISK SYSTEM

   If you will be running the program from a floppy disk system, first
   prepare a blank formatted disk according to the instructions in your
   DOS manual, then use the DOS COPY command to copy MMD.EXE onto
   your newly formatted disk. If you have two floppy drives, format
   a second floppy disk to hold the data files which MMD will create.

                           HARD DISK SYSTEM

   If you will be running MakeMyDay from a hard disk system, we recommend
   that you first create a sub-directory to contain the system files and
   data files and then copy MMD.EXE onto the new sub-directory.

                             HOW TO RUN
   To run MakeMyDay, first select the drive and (optional) path on which
   the MMD files reside, then type "MMD" <ENTER>. (Do not type the
   quotation marks; <ENTER> means  press the Enter key).

   The program will begin by displaying the copyright notice. Press any
   key to move on to the Main Menu.

   Each of the choices available on the Main Menu are covered in detail
   elsewhere in this manual. If this is the first time you have run the
   program, your first choice should be item "(E)Select new drive/filename",
   which is covered on the next page.

   There are also three function key choices available at this point. The
   first function key, F1, will provide on-line documentation explaining
   what all of the other function keys will do, as well as other
   information about the Main Menu.  Throughout the program, pressing the
   F1 key will provide on-line help relative to the currently
   displayed screen.

                                                                          4
                        SELECTING  DRIVE AND FILENAME

   MakeMyDay will automatically create and maintain several data files and
   index files on which the information you enter will be stored.  You
   can use the program "as is", or you can choose to specify the drive and
   filename used. You may use any number of drives and filenames, provided
   you specify them by selecting item (E) from the Main Menu.  If the
   drive specifier is blank, MakeMyDay will use the currently selected
   default drive on which to store its files, otherwise the specifed
   drive will be used. If no filename is specified, the filename
   "MMDFILE" will be used, otherwise the specified filename will be used.

   To select a drive and/or filename of your choice, type "E" at the Main
   Menu. The cursor will move to the appropriate area on the screen and you
   may now type the drive specifier and filename of your choice. This
   information will be recorded on the disk (and optional sub-directory)
   where the MMD files reside.  Thereafter, the program will use your drive
   and filename specifiers, until you decide to change them. When you have
   typed in the drive specifier and filename, press the <Enter> key to
   record the information and return to the Main Menu.


                          FILE NAMING CONVENTIONS

   You may use any combination of valid filename characters as specified
   in your DOS manual (the letters A - Z, numerals 0 - 9, etc.). However,
   DO NOT SUPPLY A FILE NAME EXTENSION- MakeMyDay supplies the extensions
   it needs. If you attempt to supply an extension, the system will ignore
   the period. For example MYFILE.EX will become MYFILEEX and MakeMyDay
   will supply the various extensions it requires. Likewise, if you should
   find it necessary at some point to change a file name (don't do this
   unless absolutely necessary for some reason), be sure to keep the
   filename extension intact.


                       WHY YOU SHOULD USE THIS FEATURE

   Although the default filename (MMDFILE) may be adequate for your needs
   if you are a single user, MakeMyDay may also be used to maintain the
   appointments, job schedules and other information for several users
   sharing the same machine. You may therefore want to use your name, or
   some other unique specifier in place of the default filename. MakeMyDay
   will maintain separate files for each name specified. For example, a
   secretary may want to keep track of the appointments for more than one
   person in an office. Simply name Frank's files "FRANK", Ann's files
   "ANN", etc. If there are two Frank's, use "FRANK1" and "FRANK2".

   If you have a two drive floppy disk system, you may want to specify
   Drive B: and keep your data on a separate disk.


                                 PATHS
   MakeMyDay is designed to accept a maximum of eight characters in
   its filename field.  If you are using sub-directories and paths on
   which to store your data, it is assumed that the DOS CHANGE DIRECTORY
   command ("CD") has been used prior to invoking MakeMyDay


                                                                           5
                              GENERAL USAGE

   Main Menu-  Type the letter key or function key that corresponds to
               your selection. Select (Q) to quit MakeMyDay and return
               to DOS.

   Data Base-  Each main database area (Appointment Calendar, Job Scheduler
   areas       Expense Account Manager and Time Log) is initialized with
               the record that is closest to today's date positioned
               in the center of the screen.  Use the up and down arrow keys
               (be sure the NumLock key is toggled off) and the PgUp and
               PgDn keys to scroll the display backward or forward until
               the record you want to gain access to is aligned with the
               arrow at the left center of the screen. Use the function
               keys displayed at the bottom of the screen to perform the
               various functions available for the data base area
               you are in.

               Press the F1 key for on-line help and a description of
               available functions.

               Some functions, such as adding records or specifying report
               parameters will display a data entry screen. Follow the
               example shown on the screen, substituting your data for
               the example shown.   To exit the data entry screen,
               first make sure all the information entered is valid
               then put the cursor in the last field displayed on the
               screen and press <ENTER>. Note that the system will not
               let you out of a data entry screen unless all date and time
               fields contain valid non-blank entries.

               To return to the Main Menu, press the F10 key.

                                                                           6
                               SYSTEM DATE

   Since MakeMyDay deals with real dates, it is important that the date
   shown in the upper left hand corner of the Main Menu Screen is
   today's date.  If the DOS system date is prior to Jan 1, 1986, the date
   shown will be Jan 1, 1986. Otherwise the date shown will be the DOS
   system date. (By DOS system date we mean the date entered when you
   boot DOS, not the release date of your DOS version.)

   You can change the date used by MakeMyDay by selecting F2
   at the Main Menu (as well as at other points throughout the program).
   MakeMyDay does not change the DOS system date when you make these
   changes, it merely reads the  date when the program first starts up.


                               DATE FORMAT

   Use the following format when entering dates: MM/DD/YYYY. For
   example, if today were June 20, 1986 enter 6/20/1986. Note that it
   is necessary to enter a four digit year (1986 is correct; 86 is
   incorrect). The date entered must also be between 1/1/1986 and
   12/31/2079.


                             CALENDAR DISPLAY

   At most points throughout the program you can get a quick on-line
   display of three calendar months by pressing the F8 key.
   These will be for the current month, the month prior to the current
   month,and the month following the current month.

   For example, if today were September 9, 1986 you would see
   calendars displayed for August 1986, September 1986 and October 1986.
   These are provided for reference purposes. By using the F2 key
   to change the date, you can view calendars for any month of any
   year from 1986 through the year 2079.


                               ID FIELDS

   Whenever you enter a new record into the Job Scheduler, Time Log
   or Expense Account Manager,  MakeMyDay will ask you to specify
   an ID field for that record. Generally, the ID field should represent
   the name of the project, client, or other category that the record is
   associated with.  Later, when you print or view reports, the information
   you enter will be grouped according to the name in the ID field. The
   Expense Account Manager is an exception- you will probably rather
   group your expenses by categories such as TRAVEL, ENTERTAIN, etc,
   than by client or project name. You may use either upper or lower
   case letters in the ID fields.  MakeMyDay will change all
   lower case letters to uppercase letters automatically.

   The Appointment Calendar does not make use of ID fields.


                                                                           7
                           APPOINTMENT CALENDAR

   To use the Appointment Calendar, select item (A) from the Main Menu.
   This will position the display at 8:00 AM on the date specified in
   the upper left hand corner of the screen.  Use the up and down arrow
   keys (be sure the NumLock key is toggled off) to scroll backwards or
   forwards in 15 minute intervals. Use PgUp and PgDn to scroll 2 hours
   forward or backward. Use Ctrl-PgUp and Ctrl-PgDn to scroll 24 hours
   in either direction.  When you scroll past midnight, the date will
   automatically change. To jump forward or backward over long intervals
   of time, use the F2 key to change the date.

   To enter an appointment, first position the time, then press the
   spacebar. The cursor will enter the message field and you may now
   type in your message. Use the backspace, left and right arrow keys
   and insert and delete keys in the normal manner to edit the message
   field as needed. When complete, press <Enter> to record the appointment.

   To enter appointments which repeat, first press the F3 key, then
   select the type of global (repeating) appointment involved. These can
   be one of two types. The first is the nth [weekday] of each month
   (for example, the second Tuesday of each month). The second type
   are appointments that repeat at regular intervals (for example,
   every seven days).

   Next, follow the example that appears on the screen, substituting
   your parameters for the ones shown. Be sure to fill out every field
   (for example, if the appointment is to be scheduled for one half
   hour enter 0 hours and 30 minutes) and also be sure to specify the
   date field correctly in MM/DD/YYYY format. MakeMyDay will not let
   you out of the parameter entry screen until everything is correct.

   Finally, press the F10 key to return to the Main Menu. This will
   insure that the files are closed and the appointment(s) are recorded.


                       APPOINTMENT CALENDAR REPORTS

   For a printed copy of your appointments for any day or range of days,
   select F7 from the Appointment Calendar screen.  A screen will appear
   which asks you to specify the start and stop dates, and whether you
   want to include long range appointments (a condensed version of every
   appointment scheduled in the future) or expanded hours (appointments
   scheduled before 8:00 AM or after 6:30 PM). Fill in the information
   requested on the screen, substituting your data for the data shown
   in the example on the screen.  To exit the screen, put the cursor in
   the last field and press <ENTER>.  Be sure all date fields contain
   valid dates in MM/DD/YYYY format.

   Use this report as a written reminder to you of your appointments,
   and to record newly scheduled appointments for later data entry. You
   may want to print out a week's worth of appointments at a time and make
   any last minute changes manually.  This report may be inserted in
   loose leaf binder.


                                                                           8
                    APPOINTMENT CALENDAR (continued)

              KEEPING TRACK OF APPOINTMENTS FOR SEVERAL PEOPLE

   MakeMyDay may be used to keep track of the appointments for more than
   one person.  For example, a Medical Office might want to keep track of
   the appointments for several health care persons at one centralized
   location.  To do this, use the "Select new drive/filename" option from
   the Main Menu to assign a separate filename to each individual. (Also
   see "Selecting Drive and Filename", above).


                                                                           9
                             JOB SCHEDULER

   Anyone who has ever had to coordinate the activities involved in
   completing a complicated project, whether it's closing an important
   business deal or building an addition to a house, will appreciate
   the Job Scheduler feature of MakeMyDay .  Besides serving as a
   relentless reminder to you of every important thing you need to get
   done, the Job Scheduler will also provide you with a snapshot of
   how things stand on any particular project at any given time.

   To enter the Job Scheduler, select item B from the Main Menu. If this
   is the first time you have used the system, the message file will be
   empty except for a certain number of system files which are marked by
   asterisks. These system files are permanent and you may not delete or
   alter them.

   To enter a job, press the F3 key. Next, fill out the information
   that appears on the screen, substituting your own parameters and ID's
   (keys) for the ones shown.  As usual, MakeMyDay will not let you out
   of the screen until everything is completed correctly, so be careful
   entering dates, etc. Move the cursor to the last field on the screen
   and press the <ENTER> key when you have finished entering the infor-
   mation. If you have entered everything correctly, you will be
   returned to the Job Scheduler screen, and your record will now
   appear on the screen.

   To modify a job record, first use the up and down arrow keys and/or
   PgUp PgDn keys to align the record with the marker at the left center
   area of the screen.

   You may do two things to a job record. First, you may change the
   due date, by pressing the F9 key and second, you may change the
   status by pressing the F5 key.  The status of the job record is shown
   at the right hand side of the screen.

   There are three status states available. Pressing the F5 key repeat-
   edly will cycle the status field through the available status states.
   The three status states are:

        (I)ncomplete- meaning the scheduled job hasn't been done yet.

        (C)omplete-   meaning the scheduled job has been done. When a
                      job record is marked complete, the date that appears
                      at the upper left corner of the screen will be
                      inserted as the completion date.

        (D)elete-     meaning the record has been marked for deletion.
                      Records marked (D)elete will be deleted when item
                      (F) is selected from the Main Menu.


                                                                          10
                       JOB SCHEDULER (continued)

   The Status Mask controls which records will appear on the screen. Toggle
   the Status Mask on and off by pressing the F4 key.  When the Status Mask
   is off, all records will show on the screen.  When it is on, only
   records marked (I)ncomplete will appear.  Use the status mask when
   you want to see a screen display of only incompleted items.

   There are three reports available in the Job Scheduler. These are
   accessible by pressing the F7 key and then selecting the report from
   the menu that appears.

   The first report is the "To Do" list.  This is a printed report of
   all your incomplete items as of the MakeMyDay system date (the date
   that currently appears in the upper left hand corner of the Job
   Scheduler screen). Items marked (C)omplete or (D)elete will not appear
   on this report. Neither will items scheduled to be completed at some
   future date.  This is your reminder report. Jobs not marked complete
   will continue to appear on this report until you mark them otherwise. In
   this way, the system will not let you forget to get things done, since
   incompleted items are continuously rolled forward until completed.

    The second report is the Work-In-Progress Report. This is a printed
   report that sorts all jobs by their ID fields and shows all items
   marked (C)omplete or (I)ncomplete, regardless of their scheduled
   completion dates.  This is the report to use when the boss suddenly
   wants to know how things stand on some project or other.

   The third report is the Limited Work-In-Progress report.  This is
   similar to the report described above except that it is not a printed
   report (screen display only) and it is limited to a particular ID that
   you specify. If you want a printed copy of this report, use the
   built-in Print Screen function of the IBM PC (shift PrtSc).

                                                                          11
                        EXPENSE ACCOUNT MANAGER

    The Expense Account Manager will keep an accurate record of your
   expenses and reimbursements as they occur.  Since you are not likely to
   have your computer handy when your expenses occur, the system also
   provides a printed worksheet on which to record items manually for
   later data entry.

   To enter the Expense Account section, select item (C) from the Main
   Menu. The Expense account works somewhat like the Job Scheduler so far
   as screen manipulation is concerned, except that Expense Account Items
   may only be marked two ways- delete and blank (not delete). In other
   words, the only way to change an Expense Account item is to delete it
   and re-enter it.

    To enter an expense record, press the F3 key. Follow the example on the
   screen substituting your own information for the information shown. The
   first field (Pay/Reimbursement) deserves some explanation. Items marked
   P (pay) indicate money which you have spent and items marked
   R (reimbursement) indicate items for which you have been reimbursed.
   The Expense Account Manager in effect creates a separate journal for
   each different ID assigned by the user (entertainment, travel, etc.).

    This section is intended to help you keep track of where your expenses
   have gone and whether or not you have been fully reimbursed for them.
   As such it represents one small part of a General Ledger and should
   not be used for more than it's intended purpose.

    There are three reports available in this section. These can be
   obtained by pressing the F7 key and then selecting from the
   subsequent menu. For each of the first two reports you specify the
   time period the report is to cover (use this feature to obtain
   expenses for month, fiscal year, etc.).


    The first report is the Itemized Expense Report.  This is the one to
    use when the IRS or your company auditing team come knocking at your
    door. Each ID item is broken down to it's component parts and printed
    out on a separate page.  The last page of the report is a summary
    showing the totals (paid and reimbursed) for each category (ID item)
    and a grand total of everything.


    The second report, the Summarized Expense Report is identical to the
    last page of the Itemized Expense Report (see above).  Additionally,
    you can chose to direct this report to either the screen or printer.

    The final report is the Expense Account Journal Worksheet.  This is
    a form on which you may manually enter your expenses for later
    data entry.
                                                                          12

                                 TIME LOG

    The Time Log allows you to keep track of the minutes and hours spent
    on a particular client or project over a given period of time. It is
    intended for use by professional people who charge for their services
    by the hour, such as attorneys and accountants.  However almost every-
    one has at least an occasional need to keep track of the time spent on
    a particular project. Like the other sections of MakeMyDay, you assign
    the ID categories for the program to use and the system takes care
    of all the details.

    To access the Time Log, select item (D) from the Main Menu.  Relative
    to screen manipulation, the Time Log behaves exactly the same as the
    Expense Account Manager section.

    To enter a Time Log record, press the F3 key.  When entering the start
    and stop times, remember that 12:00 noon is 12:00 PM and 12:00 midnight
    is 12:00 AM. Also, the Time Log is not equipped to handle periods of
    time that extend across midnight.  In the event you need to keep
    track of such an event, you must break it down into two parts, the
    first part ending at 11:59 PM on day 1 and the second part
    beginning at 12:00 AM on day 2.

    There are two reports available in this section. As usual, these may
    be obtained by pressing the F7 key and then selecting from the menu.

    The first report, the Time Log Report, may be directed to either the
    screen or printer with one exception described below. To obtain the
    report, fill in the information on the screen substituting your
    information for the information shown in the example.  In most cases
    you will probably want to limit the report to a particular ID.
    However, you may get a printed list (screen display not available)
    of all ID categories by leaving the ID field blank on the report
    screen.  The report will calculate your time spent and display
    an itemized listing with totals.

    The second report is the Time Log Worksheet.  This is a printed form
    which may be used to manually record Time Log information for later
    data entry.

                                                                         13
                 PROCESS DELETIONS/ REBUILD INDEX FILES

    Selecting item (F) from the Main Menu invokes a special routine
    that simultaneously erases the records which you have marked for
    deletion and rebuilds all of the index files which MakeMyDay
    uses to keep track of your data.

    You should run this routine occasionally to "clean out" your
    files.  This will prevent the size of your data files from growing
    too large.  If for any reason MakeMyDay has been interrupted
    without returning to DOS via the (Q)uit command from the Main
    Menu, there is a good chance that the index files need to be
    rebuilt and you should run this routine to repair them.


  "This program is produced by a member of the Association of Shareware
Professionals (ASP).  ASP wants to make sure that the shareware principle
works for you. If you are unable to resolve a shareware-related problem with
an ASP member by contacting the member directly, ASP may be able to help. The
ASP Ombudsman can help you resolve a dispute or problem with an ASP member,
but does not provide technical support for members' products. Please write to
the ASP Ombudsman at P.O. Box 5786, Bellevue, WA 98006 or send a Compuserve
message via easyplex to ASP Ombudsman 70007,3536"


                                                                          14
                          SITE LICENSE AGREEMENT

    The use of MakeMyDay in a commercial environment or goverment
    organization is granted under the following terms:

    1.   Payment of the license fee must be made to Universal Business
         Concepts, Inc.  The fee is based on the number of computers
         which will be used to run MakeMyDay, as follows:

                  1 to  9 computers  $39 each
                 10 to 24 computers  $25 each
                 over  24 computers  $20 each

    2.   You may use MakeMyDay on the number of computers included in the
         license fee.

    3.   You may make copies of the program in its original unmodified form
         without restriction.  You may distribute these copies of the
         program without restriction.

    4.   If these copies are distributed outside of your organization, you
         have no obligation to control the use or distribution of those
         copies which are outside of your organization.

    5.   You may make copies of the documentation, in both its printed form
         and machine readable form, without restriction.

    6.   You may use future versions of MakeMyDay under this license.  The
         latest version is available from Universal Business Concepts for
         a small service charge.

    7.   You may NOT modify the program or charge a fee for copying or
         distributing the program.

    8.   It is your responsibility to make the necessary copies and to
         deliver them to the computers which they will be used on.


         I agree to abide by the terms and conditions of this license.

         __________________________________      __________________________
         Signature                               Date


         __________________________________
         Name (print or type)


         __________________________________
         Title


         __________________________________
         Company


                                                                          15
                               ORDER FORM

    Check which items you wish to purchase:

        (__) Noncommercial license for the use of MakeMyDay.

        (__) Commercial license for use of MakeMyDay on ___ computers (see
             price schedule and terms on preceding page).

        (__) Program update subscription service (not more than five
             updates, does not include trivial changes), $50/year.

        (__) Payment of $_________ is enclosed (check or money order).


      __________________________________________________________
      Name

      __________________________________________________________


      ___________________________________________________________
      Address


      ________________________________   _______   _______________
      City                               State     Zip


      Send this completed form to:

                     Universal Business Concepts, Inc.
                         169 Edgewood Avenue
                         Longmeadow, MA 01106-1309

      For commercial site license orders, please enclose a signed copy of
      the site license agreement.



```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0618

     Volume in drive A has no label
     Directory of A:\

    FILE0618 TXT      1134   9-27-89  12:49p
    GO       BAT        38   9-25-87   2:49p
    GO       TXT       617   2-23-88   4:18p
    MMD      DOC     37540   8-13-89   2:30p
    MMD      EXE    173568   8-26-89   7:40p
            5 file(s)     212897 bytes
                          106496 bytes free
