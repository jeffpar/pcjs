---
layout: page
title: "PC-SIG Diskette Library (Disk #1244)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1244/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1244"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "PRODUCTION CONTROL SCHEDULE"

    Captain Bly should've had this program for a first mate.  It keeps track
    of who is to do what and when, and prints out a daily work log for such
    activities as swabbing the decks and polishing the brass.
    
    SCHEDULER helps you supervise the daily activities of numerous
    individuals and departments working on a variety of projects.  The
    program remembers activities that recur daily, weekly, monthly, and
    quarterly.  It takes into account up to 36 holidays and generates to-do
    lists to start the day of each person and department.
    
    Your calendar is never carved in stone.  Change work days, alter holiday
    schedules or revise anything, and the global or specific changes are
    made automatically.
    
    You can adjust work weeks from one to seven days and tell it to skip
    days like the first of each month.  One activity can be set to trigger
    other activities.  Just tell SCHEDULER to set activities a variable
    number of days prior to or following some scheduled activity and watch
    it take care of the details.
    
    Its project planning ability helps prevent goofs.  If the stockholder
    meeting is set for the third of next month, tell SCHEDULER who has to do
    what and when.  First, it prints out a chronological checklist of all
    the activities that need to be done.  Then, day-by-day, it coughs up
    to-do lists insuring that everything that needs to be done, gets done!
    
    The fat on-disk user guide is crammed with useful information, but you
    may never need to consult it due to the simple-to-understand menus used
    to guide you along.
    
    SCHEDULER will help keep your organization shipshape and that may just
    lower the odds of employee mutiny!
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## _PCSHELP.TXT

{% raw %}
```
++BEG-Copyright Software Configuration Co
This is the PC-SCHEDULER Help file.
++KEY-Activity Code
This is the "Key" to the Activity record.
It is comprised of a Letter and a two-digit
number.  The Letter represents the activity
Group and the Number is the sequence within
the group.  Examples:  A01, C15, P25, etc.
PCS will wait until you enter correctly.

A special key with a number of "00"  can be
entered as a Group Header record.  This is
used to provide a description and/or a
frequency for the entire Group.
++SEQ-Schedule Priority Sequence
This Code controls the sequence in which
the activities are listed on the schedule.
All the activities within the same Group
are assigned the same Sequence Code.  By
changing this code on the Group Header, you
can move the entire group of activities up
or down the Schedule Listing.

If this code is not specified PCS will
assign a default value of 50.  The Sequence
Code can be sorted using CrossRef Command.
++DES-Activity Description
Provide a short description of up to twenty
five characters in length.  Upper and lower
case can be used for readability.  Try to be
succinct yet provide a meaningful description.

Remember that the Group Header record provides
for an additional description field which will
appear on the Schedule as activities are
listed and printed.
++NTE-Reminder Note
Provide a short note of up to thirty-four
characters in length.  Upper and lower case
can be used for readability.  The note field
will appear on the Schedule screen and the
printout. To view the notes while the File
Listing is on the screen, press F9 and notes
appear instead of the frequency information.
++REF-Activity Reference
Provide a "reference" which will indicate what is to be
used to perform the activity.  For Data Center activities
this is usually a Job name or a Program name.  For a
clerical activity this could refer to a Folder or File.
For projects this can be a name of the responsible
person, section or group.

The Reference field is limited to twelve characters
which can be letters or numbers as required.  Examples:
A100-200, BlueBook, ABC04100P, File, #Member, Smith, DC.
++FRQ-Frequency Code
DA = Daily
WK = Weekly
BW = Bi-Weekly
MO = Monthly
BM = Bi-Monthly
QT or Q1 = Quarterly, 1st month
Q2 = Quarterly, 2nd month of Qtr
Q3 = Quarterly, 3rd month of Qtr
AN = Annually, on spec month/day
H= : Schedule with Header freq
H- : Schedule prior to Header
H+ : Schedule following Header
RQ : Requested
++WKL-Weekly Code
MON = Monday
TUE = Tuesday
WED = Wednesday
THU = Thursday
FRI = Friday
SAT = Saturday
SUN = Sunday
++MTH-Monthly Code
nn  = nth of Month
nnP = nth Day or Prior day
nnF = nth Day or Following
nnD = nth Working Day
LWD = Last Working Day
FWD = First Working Day
nYYY = nth Weekday YYY or
LYYY = Last Weekday YYY
- - - - - - - - - - - - -
YYY = MON,TUE,WED, etc.
++ANL-Annual Occurrence
Enter a date in the format MM/DD for
the month and day of the occurrence.

Annual activities are not automatically
rescheduled on weekends so the annual
date may have to be reviewed each year.
++OEV-Odd/Even Code
O = Odd Week or Month
E = Even Week or Month

The activity is scheduled
every other Week or Month
based on this on/off code.
You can try one or the
other and Forecast until
the schedule dates are OK
++HMN-Prior to Group Header date
nnnD = nnn Days Prior

Enter the number of calendar
days prior to the Header Date
this activity is scheduled.
++HPL-Following Header activity
nnnD = nnn Days Following

Enter the number of calendar
days following the Header Date
this activity is scheduled.
++STR-Start Date
Enter a date in the format MM/DD/YY for
the month/day/year the scheduling of the
activity is to start.  When scheduling or
forecasting the activity will not appear
prior to this date.

To remove the date type space bar over
month/day/year fields and the date will
be removed from the record.
++STP-Stop Date
Enter a date in the format MM/DD/YY for
the month/day/year the scheduling of the
activity is to stop.  When scheduling or
forecasting the activity will not appear
after this date.

To remove the date type space bar over
month/day/year fields and the date will
be removed from the record.
++END
```
{% endraw %}

## FILE1244.TXT

{% raw %}
```
Disk No: 1244
Program Title:  PRODUCTION CONTROL SCHEDULER
PC-SIG version: 1

Captain Bly should've had this program for a first mate.  It keeps track
of who is to do what and when, and prints out a daily work log for such
activities as swabbing the decks and polishing the brass.

SCHEDULER helps you supervise the daily activities of numerous
individuals and departments working on a variety of projects.  The
program remembers activities that recur daily, weekly, monthly, and
quarterly.  It takes into account up to 36 holidays and generates to-do
lists to start the day of each person and department.

Your calendar is never set in concrete.  Change work days, alter holiday
schedules or revise anything, and the global or specific changes are
made automatically.

You can adjust work weeks from one to seven days and tell it to skip
days like the first of each month.  One activity can be set to trigger
other activities.  Just tell SCHEDULER to set activities a variable
number of days prior to or following some scheduled activity and watch
it take care of the details.

Its project planning ability helps prevent goofs.  If the stockholder
meeting is set for the third of next month, tell SCHEDULER who has to do
what and when.  First, it prints out a chronological checklist of all
the activities that need to be done.  Then, day-by-day, it coughs up
to-do lists insuring that everything that needs to be done, gets done!

The fat on-disk user guide is crammed with useful information, but you
may never need to consult it due to the simple to understand menus used
to guide you along.

SCHEDULER will help keep your organization shipshape and that may just
lower the odds of employee mutiny!  The swabs!

Usage:  Scheduler and planner.

Special Requirements:  None.

How to Start:  Type GO (press enter).

Suggested Registration:  $55.00

File Descriptions:

PCS      COM  Command file.
PCS      000  Overlay file.
PCS      001  Overlay file.
_PCSHELP TXT  Slate help screen text.
_PCSPARM DTA  Data file contains parameter specifications.
_PCSSPEC DTA  Data file contains dates specified as holidays.
_PCSDEFH DTA  Data file contains holiday code definition.
EXAMPLE1 PCS  Scheduling examples.
MANUAL   TXT  User guide.
LICENSE  DOC  License document.
README   DOC  Describes files.
README   BAT  Displays text of README.DOC

PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1988,89 PC-SIG, Inc.

```
{% endraw %}

## LICENSE.DOC

{% raw %}
```
                            PC-SCHEDULER
                        Registration Form SG104

Enclosed please find fifty five dollars ($55.00) for my own registered,
serialized copy of PC-Scheduler. In addition, I will receive a complete
Reference Manual with Lessons, access to telephone support, and be
notified of future enhancements and upgrades to the software product.

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

Hardware configuration:

Disk:  ( ) 5 1/4" Floppy  ( ) 3 1/2" Floppy   DOS Version:  ______

Computer:  ( ) IBM _____________ ( ) IBM Compatible ______________

Printer:  ________________________________________________________

Monitor:  ( ) Color  ( ) Monochrome  ( ) Amber  ( ) Other ________

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

Registration Address:

Company:  _________________________________________________________

   Name:  _________________________________________________________

  Title:  _________________________________________________________

Address:  _________________________________________________________

          _________________________________________________________

   City:  _________________________________________________________

  State:  __________________________  Zip Code:  _________-________

   Date:  ______________  Signature:  _____________________________

Comments: _________________________________________________________

          _________________________________________________________

- - -- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Please mail this Registration Form along with remittance to:


                        SOFTWARE CONFIGURATION
                            P.O. Box 42172
                        Washington D. C. 20015














                        LICENSE AGREEMENT

   PC Scheduler is not public domain software and it is not and never
   has been free software. Non-registered users are granted a limited
   license to use PC Scheduler on a trial basis for the purposes of
   evaluation only. Use of PC Scheduler except for this limited purpose
   requires registration. Continued use of this product for any period
   of time constitutes your assumed acceptance of this agreement and
   requires registration.

   Registration of PC Scheduler entitles you to the full, bound User's
   Manual complete with lessons and examples. In addition, you receive
   access to telephone support and notice of future product upgrades.

   Each PC Scheduler Program is licensed by Software Configuration
   to the original purchaser for use on a single machine.  The
   software is protected by the United States Copyright Law and may
   be copied only for the sole purpose of providing an archival backup
   copy.  The license includes permission to use the software for both
   personal and professional applications.

Disclaimer of Liability

   Software Configuration shall not be liable for any special,
   incidental or consequential damages whether resulting from defects
   in the diskette, or from any defect in the software itself or
   documentation thereof.  The software itself is licensed "as is"
   without any express or implied warranties whatsoever.

Required Configuration

   o IBM PC, PCjr, XT, AT, PS/2 or 100% compatible computers
   o at least 128K of memory and one disk drive
   o standard 80 by 25 screen
   o DOS 2.0 or above


```
{% endraw %}

## MANUAL.TXT

{% raw %}
```
 
 
 
 





                  PRODUCTION CONTROL SCHEDULER 
 
                        (PC-SCHEDULER) 
 
 
 
 
 
 
 
                     SHAREWARE USER MANUAL 
 
 
 
 
 
 
 
 
 
 














                 Program and Manual written by:

                      Robert L. Flowers
                    Software Configuration 
                       P.O. Box 42172 
                    Washington D.C. 20015 
 
 
   
                     All rights reserved 
                      Copyr. 1987, 1988













INTRODUCTION                                                        

                                                     
What does PCS Do? 
 
   PCS provides scheduling and calendaring functions for individuals or   
   departments.  PCS has a built-in language that can be used to
   generate a list of "to-do" activities which have recurring frequencies
   such as Daily, Weekly, Monthly, or Quarterly. 
 
   You develop a list of activities which are grouped together in a way
   most meaningful for you.  Using the PCS scheduling language you can
   then assign a frequency to each activity or to a group of activities. 
 
   If the AutoSchedule is specified then as you start each day PCS will
   automatically generate a list of activities and, if requested, print a    
   hard copy that you can refer to all day. 
 

Can you specify Holidays? 
 
   Up to 36 Holidays can be specified for each calendar year.  PCS will  
   re-schedule activities either on the previous or the following work    
   day as indicated by you. 
 

Can you adjust the Work-week? 
 
   The work-week can be adjusted from 1 to 7 days.  The Work-week
   starts on Monday and ends on the Tuesday thru Sunday as specifies by
   you.  Activities which fall on the week-end can be rescheduled the
   previous or following work day. 
 

Can you skip certain dates? 
 
   For Daily or Weekly activities you can specify one or two dates to
   skip.  For example, you may want to schedule it Daily "but not on"
   the First day of the month when another activity is scheduled. 
 

Can one activity "trigger" others? 
 
   With the PCS scheduling language, there is an easy way of having one
   activity trigger other activities.  You can schedule activities a variable
   number of days prior to or following other scheduled activities. 
 

What about Project planning? 
 
   If the major event is a specific date and activities are scheduled using
   plus/minus days, then a "checklist" can be printed in chronological
   date order.  These are easy and simple "what, when, and who" listings
   to be used for project planning or tickler files. 














SYSTEM FILES ON DISTRIBUTION DISKETTE                           
                                     

PROGRAM FILES

   PCS was written in Pascal using the Overlay function.  The
   following program files must all be present the same "logged" drive
   when the program is started.  If any one of these files is missing 
   you will get a run-time error F0, PC=nnn.  To correct the problem
   put all three files on the same logged drive:

               PCS.COM  command file
               PCS.000  overlay file
               PCS.001  overlay file


PARAMETER FILE

   If this file is not present the first time PCS is run it will be
   created automatically.  This file contains information you specified
   on the Global option screen as well as the last PCS file and
   Directory accessed.

          _PCSPARM.DTA  contains your parameter specifications.


HELP FILE

   The Data Entry Screen provides for a Help function.  This file
   contains the text for the Help boxes.

        _PCSHELP.TXT  contains the slate help screen text.


DEFINITION FILES

   Holiday definitions and dates specified as Holiday are saved in this
   file on disk.  Any time Holidays are added or specified these files
   will be created and updated automatically by PCS as needed.
        
        _PCSDEFH.DTA  contains the Holiday code definitions.

     _PCSSPEC.DTA  contains the dates specified as Holidays.
        

DATA FILES

   The Files you build and save using PCS will be saved as with the
   DOS extension of ".PCS".  The first eight characters are specified
   by you when the file is first saved.  The distribution disk comes
   with a sample file to be used in getting started:

        EXAMPLE1.PCS  contains scheduling examples.












BACKUP OF FILES

   You should schedule an activity which will remind you to
   periodically back up the working PCS files.  PCS does not make
   any backup copies.  It is your responsibility to be sure you have
   backup copies.  If files are lost you can then recover.

   Suggestions for backing up only the files which change.  The only
   files which change as you run PCS are the files with the following file
   extensions:

     (1)  DTA  these are the parameter and holiday data files
     (2)  PCS  these are you PCS schedule files

   To copy only these files to a backup disk, you can specify *.DTA and
   *.PCS in the Copy statement.


FIXED DISK

   If you have a fixed disk drive you may want a sub-directory for
   your PCS system.  To create a PCS sub-directory:

        (1) Log on to drive C as follows: type C:
        (2) Create a sub-directory as follows: MKDIR \PCS
        (3) Change to the directory as follows: CHDIR \PCS
        (4) Insert PCS diskette in drive A: and type
            COPY A:*.*                        
     
Note:  The first time you invoke PCS from this directory you should go
to the FILE command and change the active Directory.  The distribution
diskette comes with the Directory set to A:.  Therfore, you may get the
message "Drive not ready" until you change and save the C: directory.


INSTALLATION 
 
     There are no required Installation procedures for PCS, however, 
     there are a few "global" parameters which may need changing. 
 
     Printer   If your printer has special features which require 
               setup codes, see "setup control string". 
 
     Colors    The default colors can be changed on the "global" color 
               screen. 
 

CONVENTIONS USED IN THIS MANUAL  
 
     The keyboard keys are referred to by the name of the key in 
     brackets.  For example: 
 
     [key]        is used to indicate that you should tap the specified   

                  key named within the brackets. 
 
     [Ctrl] [key] is used to indicate that you should press  Ctrl and 
                  while it is pressed then tap the other key. 
 
     [Return]     is used to refer to the Carriage Return key. 






SECTION 1:  GETTING STARTED                                       
       

Once you have made a working diskette for PCS or have moved PCS to
the fixed disk then you are ready to start PCS and learn the basics.  Log
on to the disk you are going to use DOS prompt will appear:

If you are using drive A: you should see:  A>

At the DOS prompt type in then name of the program:

          PCS         (then press the [return] key)

The following copyright screen should appear with a message at the
bottom to press any key to continue.  PCS will wait until you press the
space bar (or any key) to continue.




                                  PCS

                   +-------------------------------+
                   | PRODUCTION CONTROL SCHEDULER  |
                   |-------------------------------|
                   |         Copyright of          |
                   |                               |
                   |    SOFTWARE CONFIGURATION     |
                   |        P.O. BOX 42172         |
                   |    WASHINGTON D.C. 20015      |
                   |                               |
                   |     All rights reserved       |
                   |                               |
                   +-------------------------------+

                      [press any key to continue]

If you are not a registered owner of PCS you can order your copy from
the address shown in the box.  PCS has been copyrighted and
unauthorized use is prohibited by law.  See LICENSE.DOC file.  
     


AUTO SCHEDULE

If you see the blinking "Auto Schedule" field this is a reminder that PCS
will be retrieving the last file you were using and will run Today's
schedule automatically.  You can turn this feature ON and OFF using the
Global Commands. You can invoke Autoschedule at startup by specifying
PCS A.  This feature is discussed further in Section 8.

For now, press any key, usually the space bar and the MAIN MENU
Screen will appear.  The following pages explains how to use the menu.













MENUS AND COMMANDS
      
PCS Menus consist of two lines separated by the dividers.  The top line
identifies the currently active menu in the top left corner.  On the Main
Menu the system date appears in the top right corner. This is the date
specified when you "booted" DOS.  The third line is referred to as the
PCS command line and contains various command words. 


MENU COMMANDS

There are two levels of commands within PCS, Major Commands and Sub-
Commands.  The Major Commands are listed on the Main Menu and
correspond to the major operations that PCS will perform.  Sub-commands
appear either across the command line or in a "pull down" box. 
Specifying "Quit" as a sub-command will return to the previous menu. 
The Quit command appears on all menus and command lines.


     MAIN MENU                     MM/DD/YY   
     ---------------------------------------
     (F)ile  Schedule  Revise  Global  Quit <--+
     =I=====================================   I
      I                                        I
      +-----> File  (sub-menu)                 I
             ----------------------------------I-----
             Retrieve  (I)ndex  Save  Print   (Q)uit   <---------+
             ===========I============================            I
                        I                                        I
                        +------> list current index and files ---+
                                 (Press ANY key to continue)

The first way to invoke a command is simply by entering the first letter
of the Command word.  Then, by pressing the first letter of the Sub-
Command the desired operation would be performed, such as listing the
current DOS index.  After the desired operation is complete PCS will
remain on the Sub-menu until "Quit" is specified.

When "Quit" is specified, PCS will return to the MAIN MENU.  It is
convenient to stay on the sub-menu for operations such as Revise/Add in
order to repeat the same commands.  Quit appears on all command lines.



COMMAND POINTER

The second way to invoke a command is by using a "command pointer,"
i.e., the active command is "highlighted."   By pressing the [Right Arrow]
key you can move the command pointer to the desired command word. 
Pressing the [Return] key you will select the command as if you had
typed the first letter of the word.  By pressing [Left Arrow] and [Right
Arrow] keys you can move back and forth across the command line.  

     MAIN MENU                                 MM/DD/YY
     --------------------------------------------------
          Right Arrow]  --->  XXXXXXXX   Quit
     ==================================================

When the [Left Arrow] key is pressed while the first command word is
highlighted, the command pointer method is "de-activated".  When the
[Right Arrow] key is pressed while "Quit" is highlighted the command
pointer will wrap around to the first command word.
    



PULL DOWN MENU

The "pull down box" menu is another way toinvoke PCS commands. The
active sub-command will be highlighted in the box.

     MAIN MENU                                 MM/DD/YY
     ----------------------+==========+----------------
        [Right Arrow]  --> I XXXXXXXX I           Quit
     ======================I----------I================
                           I    |     I
          [Down Arrow]     I    V     I
                           I          I
                           I XXXXXXXX I   [Return]
                           I          I
                           +----------+

    
First, press the [Right Arrow] key on the numeric pad to activate
command pointer method.  Continue to tap the [Right Arrow] key if
necessary until the desired command word is highlighted.  

Pessing the [Down Arrow] key while a Major Command word is
highlighted.  The Sub-commands will appear in a pull down box beneath
the active Command word. As you tap the [Down Arrow] key the active
sub-command word is highlighted.  These are the same sub-command
words that appear in the sub-menu method above except that they are
"stacked" in the box rather than across the command line.

Press the [Return] key at the desired sub-command and the Major
Command/Sub-Command combination is invoked.  PCS will return to the
Main Menu after the desired operation is completed successfully. 


ACTIVITY POINTER

Once a PCS file has been retrieved, all the activities are listed on the
screen.  The first activity in the file is highlighted in reverse video or in
color if you have a color monitor.  The arrows, PgUp and PgDn keys on
the numeric pad can be used to move this "activity pointer" line.  The
purpose of this pointer is to allow you to move through the file and
facilitate the Revise operation. See "Browse keys" below.

To revise an activity simply position the cursor pointer to a valid activity
line and press F2, or use the pull down Revise/Edit menu. The cursor
pointer is active on every screen where the PCS file listing is displayed. 

                                                                      
CONFIRMATION 

When you have entered a request that should be "confirmed" a (Y/N)
prompt will appear.  PCS will not continue until you press the "Y" key
for yes, the "N" key for no, or the ESC key to terminate the request. 
Any other keys will be ignored except the ESC key to ignore request.  


ERROR MESSAGES

When you have entered a field incorrectly or PCS has determined there is
an error, an error message appears on the bottom of the screen.  These
messages may be self-explanatory, but for further explanation see detail
description at end of the  manual. Press any key to continue.





SECTION 2:  LEARNING THE BASICS 


MAJOR COMMANDS 

From the MAIN MENU the PCS functions are requested in one of several
ways described in Section 1.  When a Major Command is requested,
control is then transferred to that Command processor.  Each Command
processor has its own set of Sub-commands to invoke a specific
operation.  Refer to the following Sections for Sub-command descriptions.


REVISE Command

     The REVISE commands are used to add, edit, delete, move and copy
     the activity records. The Data Entry Screen is used for entering
     data about each activity.  Help screens are available by use of the
     Help key. The Help screen explains the entry in each field.


FILE Command

     The FILE commands are used to create, print, retrieve, save
     and erase PCS files on the disk.  Files can reside in the root
     directory or another DOS directory.


SCHEDULE Command
     
     The SCHEDULE commands are used to invoke the PCS
     scheduler.  The schedule can begin on any date in the past or
     future and can include or exclude all or a selected number of
     activities.  The schedules and checklists can be printed offline
     for hard copy.


CROSSREF Command

     It is useful to be able to sort all or part of the PCS Master
     File by Schedule Sequence Code, by Description, by Frequency
     Code, by Occurrence Code or by Reference Code.  The sorted
     file can also be printed offline.  


HOLIDAY Command

     Holidays can be defined, specified and listed for a given year. 
     The PCS scheduler will re-schedule any activities falling on
     those dates to the previous or following working day as
     specified.


GLOBAL Command

     The GLOBAL commands are used to change the System
     Parameters.  The Parameters specify such things as length of
     the Work Week, special control charcters for the Printer, and
     whether or not to pause between print pages.  The
     AutoSchedule feature can be turned from the Global menu.  If
     the default colors are not to your liking, you can change the
     colors from the Global menu.




QUIT Command

     The Quit command on the Main Menu will require a confirmation
     before returning to DOS. If you specified Quit by mistake you can
     abort with a "no" response to the confirmation.

     If you have updated the current file while PCS was running, a
     confirmation is required to Save the file before exiting.  If you do
     not wish to save your changes a "no" response will bypass the file
     save operation.

     PCS will remember the last file you were using and save its name in
     the Parameter file.  If you turn the "AutoSchedule" feature on PCS
     will retrieve this file and run Today's schedule automatically the
     next time you start the program.



HOW TO EXIT PCS

     First, you should learn how to exit PCS so that all the files are
     saved and closed properly.  You must be on the Main Menu to exit
     to DOS.


          Main Menu    
          --------------------------------------------------
          File   Schedule   Revise   Global   Quit
          ==================================================

          Press the letter "q", or move the command pointer to Quit and 
          press [Return].  PCS will prompt for a confirmation.


          Main Menu    
          --------------------------------------------------
          OK to quit (Y/N)? Y   <--respond Yes                
          ==================================================

     If you have specified Quit by mistake, respond "n" and PCS will
     continue, otherwise specify "y" and PCS will return to DOS.  If you
     have modified a file that should be saved, then PCS will ask for a
     "confirmation" to save the file.  You must respond to this also
     before PCS will exit.  Answer the confirmations carefully.

     
     [ESC]

          The ESCAPE key is another way of specifying "Quit". 
          Certain terminations require a confirmation (Y/N).
















FUNCTION KEYS

The Function Key line appears at the bottom of the screen with the
active Function Keys.  These keys can be used as "short cuts" for
invoking certain operations without passing through the intervening
Menu/Command lines.
  
     
[F2] F2-Revise

          Transfer control to the Revise commands.  If the
          cursor pointer is pointing to a valid activity, PCS
          will retrieve the record and go directly to the Data
          Entry Screen.  See the Revise section for further
          description.

     
[F3]  F3-Add

          PCS will prompt for a new Activity Code, verify that
          it is not already on file, and then transfer to the
          Data Entry Screen.  Adding a new activity is
          described in the Revise Command Section.

     
[F4]  F4-Schedule

          Pressing F4 will invoke the Schedule Command and
          retrieve the activities scheduled for today (or the
          Schedule Begin Date if modified).  PCS will blink
          "WAIT" on the screen while retrieving the scheduled
          activities.

     
[F5]  F5-GOTO

          This function key is the PCS search facility.  In
          order to easily find the activity you want to change,
          Press F5 and PCS will prompt for a search string or
          an activity code.  See SEARCH FACILITY description
          below.

     
[F6]  F6-Xref

          Invoke the CrossReference by Frequency code.  PCS
          will blink "SORT" on the screen while sorting.  If
          you have a color monitor the sorted column is
          highlighted.  Once on the CrossReference screen you
          can sort on any other field.  See the Section on
          CrossReference.

     
[F8]  F8-Holiday

          List the Holidays for current (or Schedule Begin
          Year).  Holidays can be added, changed and deleted. 
          See the Section on Holiday Commands.









[F9]  F9-Notes

          Display the Notes field.  Normally, the Master File
          listing shows the schedule frequency fields and notes
          only appear when the Schedule is run.  To display
          the notes while viewing the master file press the F9
          Function Key.

          This function is a "toggle" key in that one state
          remains active until F9 is pressed again.

     
[F10]  F10-Hdrs

          List only the Group Header records.  This is a quick
          way of seeing how the activities have been grouped. 
          See GROUPING ACTIVITIES below.

          F10 is a "toggle" key so that when you press F10
          again the detail activities will be displayed.
 

SEARCH FACILITY

          Press F5 for the PCS search facility.  PCS will
          prompt:

          Enter search string: __________ or Code: ___

          Enter a search string for a list of activities with the
          search string.  PCS will list up to a page of
          activities whose Description or Reference contains
          the search string.  Simply position the cursor to the
          Activity line and press F2 to edit the fields.

          If you know the Activity code, [Tab] to the Code
          field and enter the Activity Code. PCS will then go
          directly to the Activity line and position the listing
          with this activity at the top of the screen.

          Hint:  If the activity is a Header Record, all you need to enter
          in the Code field is the Letter code, PCS will add the "00". 























BROWSE KEYS

The special keys found on the 10-key numeric pad are very useful for
"browsing" the PCS file.  The browse keys are very useful for paging
forward, backward, and positioning the file to the top or bottom of the
listing. The [NumLock] key must not be active.
 
     [PgDn]

          Pages forward one entire page.  PCS will display (...More) in
          the lower right of screen if there are more pages to display. 
          No paging is done if the File is already in the (...End) position.

     [Ctrl] [PgDn]

          Positions the listing with the next Group Header record as the
          first activity on the page.  This is a convenient way of paging
          through the file group by group.

     [PgUp]

          Pages backward one entire page.  If the first activity is at top
          of the screen then no paging takes place. 

     [Ctrl] [PgUp]

          Positions the listing with the previous Group Header record as
          the first activity on the page.  This is a convenient way of
          paging back one entire group.

     [DownArrow]

          Moves the cursor pointer down one activity.  If the cursor
          pointer is at the bottom, the screen is scrolled up, the activity
          listed at the top of the current page is dropped and one new
          activity appears at the bottom of the screen.  No positioning is
          done if listing is already at the (...End) position.

     [UpArrow]

          Moves the cursor pointer up one activity.  If the cursor
          pointer is at the top, the screen is scrolled, the activity listed
          at the bottom of the screen drops off, and one new activity
          appears at the top of the listing.  

     [Home]

          Positions the listing at the first activity in the file.  If the
          listing is at the top already no positioning is done.  

     [End]

          Positions the listing with the last activity at top of the
          screen.  If the listing is at the bottom of the file already then
          no positioning is done.











GROUPING ACTIVITIES 

Before you attempt to build your own file of activities you should first
understand how the PCS file is structured.  Each activity in the PCS file
must have a unique identifer made up of a Letter and a two-digit numeric
number, e.g., C15.  This is the Activity Code.  

     Group Header Record

          Activities are "grouped" together if their code begins
          with the same letter.  A numeric code of "00" is
          used to refer to the entire group or series of
          activities.  These are called "Group Headers" and
          they are very useful in segmenting the file and in
          triggering activities.

As you build a PCS of activities you group the items together in much
the same way you organize you normal day-to-day activities.  This can be
by type of of business activity, by frequency of the activity, by business
function or any other way that is convenient and most appropriate for
your situation, for example:

          Act  Description

          A00  Accounting 
          M00  Manufacturing
          P00  Purchasing   

     Within each grouping you create detail activities:

          Act  Description

          A00  Accounting 
          A01  General Ledger
          A02  Annual Statement

          M00  Manufacturing
          M01  Inventory Report
          M02  Bill of Material 

          P00  Purchasing   
          P01  Overdue Orders
          P02  Vendor Report 

After grouping your activities in a manner most meaningful for your
business, you can assign Frequencies to each activity or to entire groups
of activities.   PCS has a whole array of Frequency codes which should
handle most of the common scheduling occurrences.


PRIORITY SEQUENCE

There is a separate "Sequence Code" which will determine the way in
which activities are listed on the Schedule.  The Sequence Code is
specified on the Group Header Record and by changing this Sequence
Code you can move entire groups of activities up or down, thereby
"prioritizing" the Schedule.  See Data Entry Fields section.
 
The CrossReference command can be used to sort the file by sequence
code to determine whether or not they are set properly. The default
sequence is "50" is none is specified.






ASSIGNING FREQUENCIES

The Frequency Code specifies the recurring cycle that the activity falls
on such as Daily, Weekly, Monthly, etc.  For example:

          Act  Description        Frequency 

          A00  Accounting 
          A01  General Ledger     Monthly   
          A02  Annual Statement   Annually  
     
          M00  Manufacturing
          M01  Inventory Report   Daily     
          M02  Bill of Material   Bi-Weekly 

          P00  Purchasing   
          P01  Overdue Orders     Weekly    
          P02  Vendor Report      Quarterly 


OCCURRENCE CODE

Once the frequency has been established, you must specify a specific
"occurrence" for the activity such as Monday, Wednesday, 10th of the
month, etc.  Daily activities are done every work day and do not require
an Occurrence Code, but for the other Frequencies, the combination of
Frequency and Occurrence determine when it is to be scheduled.
For example:

     Act  Description        Frequency   Occurrence

     A00  Accounting 
     A01  General Ledger     Monthly     10th of the month
     A02  Annual Statement   Annually    February 15

     M00  Manufacturing
     M01  Inventory Report   Daily       (every work day)
     M02  Bill of Material   Bi-Weekly   Every other Monday

     P00  Purchasing   
     P01  Overdue Orders     Weekly      Friday
     P02  Vendor Report      Quarterly   First Work Day


NOT-ON FREQUENCIES

In many situations, such as the beginning or ending of a week or month
you may not want an activity to be scheduled (such as a File Merge). 
Instead, you may want to schedule another activity (create New File) to
be run in its place.  For Weekly and Monthly Frequencies you can specify
one or two "not-on" frequencies.

Examples:

     Schedule Daily but "not-on" First Working Day of Month.

     Schedule Weekly on Monday but "not-on" First Monday of Month.









GROUP SCHEDULING

Suppose you have a group of activities which are always done together
whenever scheduled.  Rather than put the Frequency on each activity you
can put the Frequency on the Group Header and then use the "H=" to 
refer back to the Frequency on the Group Header.  For example, suppose
the following activities are always done together:

     Act  Description          Frequency   Occurrence

     A00  Accounting 
     A01  Backup Ledger File   Monthly     Last Work Day     
     A02  Post Memo Credits    Monthly     Last Work Day   
     A03  Print Trial Balance  Monthly     Last Work Day
     A04  Prepare Income Stmt  Monthly     Last Work Day
     A05  Cash Flow Analysis   Monthly     Last Work Day

Another way of specifying Frequencies for the entire group of activities 
would be to put the Frequency on the Group Header and the have the
detail activities refer back to its Frequency.  Thus, if a Frequency
changes then you only have to change it in one place.  For example:

     Act  Description          Frequency   Occurrence

     A00  Accounting           Monthly     Last Work Day
     A01  Backup Ledger File   H=
     A02  Post Memo Credits    H=
     A03  Print Trial Balance  H=
     A04  Prepare Income Stmt  H=
     A05  Cash Flow Analysis   H=

Now whenever the Group Header A00 is scheduled then all the detail
activities with "H=" as a Frequency will also be schedule.  Not every
activitiy in the sequence needs to refer back to the Header, only the
ones which are "triggered" by the Header Frequency.


SCHEDULING "PRIOR TO" OR "FOLLOWING"

Many times an activity is to be scheduled so many days before or after
another activity, e.g., two days before or two days after.  This can be
accomplished by use of the "H-" (before Header schedule) and the "H+"
(after Header schedule).  In the example above, suppose activity A02 is to
be done one day before the Last Working Day and A05 is to be done
three days after.  This could be set up as follows:
     
     
     Act  Description          Frequency   Occurrence

     A00  Accounting           Monthly     Last Work Day
     A01  Backup Ledger File   H=
     A02  Post Memo Credits    H-          001D
     A03  Print Trial Balance  H=
     A04  Prepare Income Stmt  H=
     A05  Cash Flow Analysis   H+          003D











CHECKLIST

The Checklist schedule function makes use of the "Header Reference"
Frequency Codes.  A Checklist can be generated for a Group of activities
whose Group Header specifies a deadline date.  The detail activities can
be scheduled either before, on or after this deadline date using the H-,
H= and the H+ Frequency Codes.

Suppose you have a User meeting coming up and you have several
activities that must be done before, during and after the meeting:
          
     Act  Description          Frequency   Occurrence

     U00  User Meeting         Annual      Sept 30
     U01  Mail invitations     H-          060D
     U02  Prepare adgenda      H-          035D
     U03  Xerox material       H-          007D
     U04  Order lunch menu     H-          001D
     U05  Minutes of meeting   H=
     U05  Followup summary     H+          005D
     U10  Questionnaire        H+          014D

When the Checklist is generated (using Schedule command) the
Frequencies are converted to dates and a list is produced in date
sequence.  Checklists can be used over and over by just changing the
date on the Group Header record.  The Note field can be used as a status
field and the Reference field can be used for Person assigned, etc.


The Checklist report:

     <PCS> Checklist                         Date: xx/xx/xx
     ---------------------------------------------------------
     Act  Description         Date       Reference    Note

     XXX  XXXXXXXXXXXXXXXXXX  MM/DD/YY   XXXXXXXXXX   ....
     etc.



























SECTION 3:  FILE Commands  

     The File Commands are used to save and retrieve your PCS
     Files.  All user files have the same ".PCS" extension but the
     first eight characters can be and valid DOS filename. 
     The free space on disk is shown on the bottom of the screen.

     Retrieve

          Clears the "active" PCS File and loads a previously
          Saved PCS file from the disk.  A confirmation is
          required to clear the file is currently in use.  

     Index

          Display a list of the PCS files on disk for the
          Current DOS directory.  All PCS files have the PCS
          extension which does not have to be specified.  The
          DOS extension is not shown.

     Directory 

          The default Current Directory can be changed to any
          valid DOS directory.  PCS displays the Current
          Directory on the command line and prompts for a
          new pathname or Directory.  If one is entered this
          becomes the new Current Directory (path).

     Save

          Saves all the activity records in a PCS file on the
          disk.  If the file already exists on that disk PCS will
          prompt for a confirmation to replace the file.  

     Erase

          To erase a file from the disk.  PCS will prompt you
          for the filename and a confirmation that you want to
          destroy the file.  Once a file is erased PCS cannot
          recover the file.  Be careful!

     Print

          Lists the File of Activities on the line printer. The
          Filename and System date are printed on the Report.
          

     NewFile

          Erase the current PCS listing from the screen and
          initialize all the file variables to the default values. 
          A confirmation is required if there is a current File
          in memory.  Be sure to Save any File that you do
          not want permanently erased from memory.  There is
          no "un-erase" facility. Be careful.

     Quit [ESC]

          Exit the File Commands and return to PCS Menu.  If
          the active File has not been saved, PCS will prompt
          for a (Y/N) Confirmation to Save the File.


SECTION 4:  SCHEDULE Commands

This section describes the Commands you can use to affect the PCS
Scheduler.  Normally, PCS generates a schedule for one day at a time
beginning on the System Date or another specified date.  The entire file
will be included in the schedule unless restricted by the Select command.

The Forecast command can be used for forecasting the scheduled dates of
one activity at a time.  This is useful for the Odd/Even scheduling.
Checklist provides for a listing in date sequence of activities scheduled
using the 'plus' and 'minus' options.
     
     Run

          Invokes the Schedule function, beginning on Begin
          date.  A list of the scheduled activities for that day
          is presented on the screen.  The following sub-
          commands are active.
     
          Back 

               Backup to previous schedule day and list
               the scheduled activities for that day.

          Next

               Go to the next calendar day and list the
               activities.
 
          Print

               Print the Scheduled activities on the
               printer for the number of Days specified. 
               
          [F1]

               Display the Frequency fields and internal
               PCS variables for the scheduled date.  The
               display of the frequencies and variables
               helps you get activities scheduled properly.

     Days

          This field is used in conjunction with the Print
          request.  If Print is specified then PCS will print the
          scheduled activities for that number of calendar days. 
          For example, to print the schedule for the week:

          1.  Set the Begin date to beginning of week.
          2.  Specify Days of 007.
          3.  Specify Print.

     Select

          Enter a range of Activity Codes to be selected for
          scheduling. The default is A00 through Z99.  If a
          range is entered, for example, B00..C99, then only
          those activities will be selected. The selection range
          prints on the listings and is shown at bottom of Help
          window.

          
     

     Begin

          Enter a beginning date for the Schedule.  If no
          Begin date is specified, PCS will default to the
          System Date, or 1/1/80 if no dates at all are
          specified.  The System date is specified when you
          "boot" the system.  AutoSchedule begins with System
          date.

     Forecast

          PCS will prompt you for an Activity Code.  Using
          the frequency and occurrence of the Activity, PCS
          will forecast the dates on which the Activity will be
          scheduled. 

               Note:  To stop the forecasting procedure,
               press any key to stop it, then ESC key to
               terminate.

     Checklist

          PCS will prompt for an Activity Code.  The activity
          must have an Annual frequency.  This command will
          list the events that have been scheduled using the
          "H+" , "H-" and "H=" options.

               Note:  Only Group Headers with an Annual
               date can be used for the Checklist
               function.

          Print

               Print the Checklist on the line printer.

     Quit(ESC) Return to the PCS Menu.





























SECTION 5:  REVISE Commands

     The REVISE commands are used to make additions or changes
     to a PCS file of activities. The Data Entry Screen (see below)
     is used for entering data about the activity.
     
                          Data Entry Screen
          -----------------------------------------------------
             (Header Record)
          =====================================================

               Sequence: 
               Activity: 
            Description:                      +---------+                       
              Reference:                      I  HELP   I
                                              I WINDOW  I
              Frequency:    Odd/Even:         I SCREEM  I
             Occurrence:                      +---------+
             But Not On:          or:
                  Start:
                   Stop:
     
                   Note:

                      Press F1 Help or ESC to terminate
          -----------------------------------------------------

     Add

          Add an activity to the PCS file.  PCS prompts for
          the Activity code to be assigned. The Data Entry
          Screen is used to input various fields. Pressinq the
          ESC key while on the Data Entry Screen will
          terminate Add. 

          Press [Return] while at the Note field to add record.
          
     Edit

          Change the fields for an Activity. The Data Entry
          Screen is displayed with current values of each field.
          After changes are made PCS positions the file listing
          at the edited activity. Pressing ESC terminates Edit.

     Delete

          PCS reads the Activity code at the pointer line and
          displays the Data Entry Screen and requests a
          confirmation of the Delete. After deleting the
          activity PCS positions returns to the file listing.
          Pressing ESC terminates the delete command.

     Repeat

          Copy an activity from one Code to another Code.
          PCS retrieves the "from" Activity Code from the
          pointer line and prompts for the "to" Activity Code.
          Enter the new Activity Code to be assigned and all
          the data fields are copied. PCS copies the activity. 



     Move 
          
          Move an Activity from one Code to another Code.
          PCS retrieves the "from" Activity Code from the
          pointer line and prompts for the "to" Activity Code.
          Enter the new Activity Code to be assigned and all
          the fields are moved. PCS positions the file listing at
          the new Code.  Pressing the ESC key terminates the
          Move function.

     Quit [ESC]

          Return to the MAIN MENU or previous Menu screen.



CURSOR CONTROL KEYS

     The following Cursor Control Keys are active while on the
     Data Entry Screen. The ESC key will terminate Data Entry
     with a confirmation and return to previous menu screen.

     [ESC]

          Terminate the maintenance function.  Do not add,
          delete or change  the activity data fields for the
          activity shown.  A confirmation of "N" will continue
          the function otherwise PCS returns to the Command
          line.

     [UpArrow]

          Moves the cursor to the previous field on the screen
          up from the current line.  The content in the field
          on the current line is saved.

     [DownArrow]

          Moves the cursor to the field on the next line of
          the screen.  The content of the current field is
          saved.  If cursor is at the last field on the screen
          the cursor is moved to the first field on the  screen.

     [LeftArrow]

          Moves the cursor to the next character to the left
          in the field.  If the cursor is on the first character
          no change is made.

     [RightArrow]

          Moves the cursor to the next character to the right
          in the field.  PCS will "beep" if you attempt to go
          beyond the end of the field.

     [BackSpace]

          Backspace one character in the field.  If the cursor
          is on the last character in the field it will blank out
          the character as it back spaces.  If the cursor is in
          the middle of the field it will act as the left arrow
          key.



     [Tab]

          Tab the cursor to the next input field.  If the cursor
          is on the last field on the screen the cursor will be
          positioned to the first field.


     [Home]

          Position the cursor to the beginning of the field.


     [End]

          Position the cursor to the end of the data field.


     [Ins]

          Pressing this key sets the insert mode on/off as
          indicated on the top line of the screen.  If insert
          mode is on the characters entered are inserted and
          characters to the right of the cursor are shifted
          right.  PCS will "beep" if you attempt to insert too
          many characters.


     [Del]

          Pressing this key will delete the character at the
          cursor and characters to the right of the cursor are
          shifted left one position.


ERRORS

     There are many "relational" errors as well as just Data Entry
     errors when entering an activity.  For example, if you enter a
     frequency code and then try to specify an invalid occurrence
     code, PCS will issue an error.  By pressing any key you can
     correct the error and continue.  Each error has a unique Error
     Number and can be looked up in Appendix for further
     explanation.




















Data Entry Fields

     After specifying Add, Delete, or Edit and an Activity Code,
     PCS displays the Data Entry Screen. If the Letter Sequence of
     activities has a Group Header record it is listed on the
     Command line for review. The fields on the screen and their
     interpretation are described below. 

     Sequence:

          The Sequence code is a two digit numeric code which
          controls the sequence in which the activities are
          listed on the PCS schedule.  It can be specified only
          on a Group Header record and applies to the entire
          group.

          The default Sequence value is "50".  Activities with a
          Sequence less than 50 sort first, and activities with
          a Sequence higher than 50 sort last.  The
          CrossReference Commands can be used to sort the
          File by Sequence for purposes of testing.
  
     Activity:

          This field is the Activity Code. The Code is made up
          of a Letter and two numerics.  A Code with a Letter
          and the  "00" number is a special "Group Header"
          record.  The Group Header record is useful for group
          scheduling and giving an additional description to the
          entire series of activities.

     Desription:

          A short Description of the Activity.  This can be
          upper/lower case as desired.  On the Header record
          this is the Description of the entire Letter sequence
          of activities. The Header description will
          automatically be printed when any activity within the
          group is scheduled.  (See the Cross-Reference
          discussion of Description).

     Reference:

          A separate field which may refer to a Job, Program, 
          Procedure, Document, File, Folder, Section or any
          other  source of data about the activity.  Many
          activities can have the same Reference.  This field is
          printed on Schedule.

     Frequency:

          A two-character field indicating the Frequency with
          which  the Activity is to be scheduled. A help
          window will display the possible values from which
          to select. Frequency codes are also described below.

     Odd/Even:

          If the Frequency is every-other Week or Month the
          Odd/Even code is used to specify which odd or even
          week.  PCS sets this code internally.  Use of the
          code is by trial and error until it is scheduled
          beginning on the appropriate week.
  

     
     Occurrence:

          A four-character code to specify which "occurrence"
          of the  frequency on which to schedule the activity. 
          The Occurrence code depends on the Frequency
          code.  Weekly frequencies specify a Day-of-Week
          code, Monthly has several Occurrence codes, etc. 
          Some frequencies such as Daily do not have
          Occurrences.  Press F1 for Help or see below.


     Not On:

          This is the same codes as the Occurrences.  An
          entry here  will specify which "occurrence" of a day
          or date this Activty will NOT be scheduled on.  For
          example an Activity may be scheduled Daily, but not
          on the First Working Day.  Frequency: DA; Not On:
          FWD.


     Start:

          Do not schedule the Activity before this date.  Until
          the Scheduler reaches this date it will bypass
          scheduling this activity.  Once this date is reached it
          will begin adding it to the schedule when the
          frequency hits.

          If the Start date is on the Group Header then it
          applies to the entire group of activities.  This is one
          convenient way to "turn off" an entire group of
          activities until some future date.

 
     Stop:

          Do not schedule the Activity after this date.  When
          the Scheduler goes beyond this date the activity will
          no longer be scheduled. 

          If the Stop date is on the Group Header then it
          applies to the entire group of activities.

     Note:

          Attach a note to the activity which will print on the
          schedule.


          Hint:  Function Key F9 will show Notes while viewing the  
          Master File Listing on the screen.


     FUNCTION KEY [F2]

          The Revise facilities can be easily invoked by use of the [F2]
          Function Key.  When you need to Edit an activity, position the
          cursor pointer to the activity line on the screen.  Press [F2]
          and PCS will transfer directly to the Data Entry Screen.


FREQUENCIES AND OCCURRENCES

DA (Daily)

     Activities scheduled Daily will appear every "work day". There is no
     Occurrence code for Daily, however, two "not on" Occurrences can
     be specified in the Weekly or Monthly Occurrence format.

WK (Weekly)

     Activities scheduled Weekly will be scheduled once a week on the
     day specified in the Occurrence field.  Two "not on" Occurrences
     can be specified in the Monthly format. 

     OCCURRENCE:  MON = Monday, day 1 of the week.
                  TUE = Tuesday, day 2 of the week.
                  WED = Wednesday, day 3 of the week.
                  THU = Thursday, day 4 of the week.
                  FRI = Friday, day 5 of the week.
                  SAT = Saturday, day 6 of the week.
                  SUN = Sunday, day 7 of the week.

BW (Bi-Weekly)

     These activities are scheduled every two weeks.  A convenient
     "odd/even" code is provided for alternating the weeks.  This code is
     controlled internally by PCS and the Forecast command can be used
     to establish its cycle.  Two "not on" Occurrences can be specified in
     the Monthly format.

     ODD/EVEN CODE:  O = every other week on Odd weeks
                     E = every other week on Even weeks

     OCCURRENCE:  Same as Weekly above.


MO (Monthly)

     The activity is to be scheduled each calendar month.

     OCCURRENCE:    nn  = the nth calendar day of the month.
                    nnP = nth day of the month or prior working day
                    nnF = the nth day of the month or the following
                    nnD = the nth working day of the month. 
                    LWD = the Last Working Day of the month
                    FWD = the First Working Day of the month
                    nYYY= the nth occurrence of day YYY, where YYY is
                          one of the Day codes MON through SUN. 
                    LYYY= the last occurrence of day YYY, where YYY
                          is one of the Day codes MON through SUN. 

BM (Bi-Monthly)

     These activities are scheduled every two months.  An "odd/even"
     code is provided for alternating the Months. This code is controlled
     internally by PCS. Valid Occurrences are the same for Monthly.

     ODD/EVEN CODE

          Odd/Even = O for every other week on Odd months
          Odd/Even = E for every other week on Even months




QT (Quarterly) and Q1,Q2,Q3

     Activity is scheduled every three months on the Quarterly
     months. The QT and Q1 months are January, April, July and
     October.  The Q1 months are February, May, August, November.
     The Q3 months are March, June, September and December.


     OCCURRENCES    Same as Monthly Occurrences.

AN (Annually)

     Activity is scheduled once a year on the specified Month and Day
     regardless if its a weekend or not.  Annual frequencies may have to
     be reviewed once a year.

     OCCURRENCE     in MM/DD format


RQ (Requested)

     Use this Frequency for activities that are "on Request"  or the
     specific date is not yet known.  This Frequency is a  convenient
     way of "turning off" the schedule for a given activity.  Another way
     of de-activating an activity is by use of the Start/Stop date.


H= (same as Header frequency)

     This frequency code is used to "refer back" to the Group Header
     record for the frequency.  Whenever the Group Header is scheduled
     this activity is also scheduled.  This is a way of having one activity
     "trigger" another activity.  There are no Occurrence codes for this
     frequency.


H- (prior Header)

     This frequecy indicates that the activity is to be scheduled so many
     days prior to the Group Header.  Valid Occurrence codes for this
     frequency are:

     OCCURRENCE

          nnD = nth Day prior to Group Header


H+ (following Header)

     This frequency indicates that the activity is to be scheduled
     following the date of the Group Header.

          nnD = nth Day following Group Header











SECTION 6:  CROSS-REFERENCE Commands                            

     The CrossReference Commands are used for sorting the file by
     the different data fields.  After sorting the file you can browse
     using the standard Function Keys or the sorted file can be
     listed on the line printer.  On color monitors the sorted fields
     are highlighted in yellow or white.  

     Act-Select

          Specify a "range of activities" to be selected for the
          sort.  To restrict the activities specify a "from" and
          "to" activity code.  The default is "A00..Z99".

     Sequence

          Sort and display the current file listing in Scheduling
          Sequence.  This is useful to browse the file in the
          sequence in which the activities will be listed on the
          schedule which helps in setting up the priority of
          the scheduled activities.

     Description

          Sort and display the current file listing in
          Description sequence.  A blank line is skipped when
          the first word of the Description field changes.  The
          first word of the description (including commas, etc.)
          should be a "key" word so that similar descriptions
          can be sorted together.

     Frequency

          Sort and display the current file listing in Frequency (primary)
          and Occurrence (secondary) sequence.  A line is skipped when
          a change in frequency occurs. If "H=" is specified the activity
          will be sorted with its Header Record. Blank frequencies,
          On-Request and Header plus/minus are sorted last.  

     Occurrence

          Sort and display the current file by the Occurrence
          of the frequency.  Those activities with the same
          occurrence will sort together.  Frequencies with no
          Occurrence are sorted last.

     Reference

          Sort and display the current file listing in Reference
          sequence.  A line is skipped when the contents of
          the Reference field changes.  Blank references are
          sorted last.

     Print

          Print the current file in the sequence it was last
          sorted.  The name of the file and the field sorted on
          is printed in the heading of the report.  The
          Activities command can be used to restrict the print
          to a range of activities.

     Quit(ESC) Return to the MAIN MENU.


SECTION 7:  HOLIDAY Commands

     It is convenient for you to be able to specify certain dates as a
     Holiday or non-working day and that any activities which fall on
     these days should be "re-scheduled" either the previous or next
     working day.

     You define the Holiday by assigning a unique three-character code,
     such as NEW for New Years Day, 4JL for Fourth of July, THK for
     Thanksgiving,  etc.  Up to 36 different Holidays can be defined.

     Once Holidays have been defined, you can specify what date they
     fall on and whether or not you want to re-schedule activities.  Daily
     activities are not re-scheduled on Holidays.

Define

     Define a new Holiday Code and its description.  Up to 36
     definitions can be made.  The definitions are listed when
     Holiday Command is entered.  The List command can be used to
     list the dates which have been specified for the Holidays.
     Pressing the ESC key terminates the Define function.

Specify

     To specify a particular calendar date for a defined Holiday. The
     Holiday Code must have been defined before a date can be
     specified.  Dates are specified year by year.

     PCS will prompt for the year involved, the Holiday Code, the
     month and day and a "re-schedule" code shown in the window. 
     If you wish to "repeat" the Holiday for multiple years enter a
     Thru year and PCS will propogate the Holiday for you.  The
     ESC key terminates this function.

Eliminate

     To "un-specify" a Holiday.  PCS prompts for the Year and the
     Holiday Code to be eliminated.  If you wish to eliminate the
     Holiday for all years answer 'Y' to the confirmation message.

List

     List the Holidays specified for a given Year.  PCS will prompt
     you for the Year to be listed.  The dates specified will appear
     next to each holiday and whether or not the activities are to
     be re-scheduled prior to or following the Holiday.

Remove

     Remove a Holdiay definition.  PCS will prompt you for a
     confirmation if you want to Remove the Holiday from all years.

Quit(ESC)  Return to the PCS Menu. Holidays are saved.


RE-SCHEDULED ACTIVITIES

A  **Holiday**  message will appear on the schedule when a date has
been specified as a Holiday.  On the previous or following work day any
activities which have been re-scheduled because of the Holiday will have
an '*' to the left of the Activity key field.
 


SECTION 8:  GLOBAL Commands

     These commands are referred to as Global because the values
     apply to all PCS functions.  These values are saved in a
     Parameter file and retrieved each time PCS is entered.  

AutoSchedule

     Specify Yes(Y) or No(N) if you want PCS to automatically run
     a schedule for the current date when you start the program. 
     PCS will retrieve the last file you used and run a schedule for
     the date specified as the system date.  You can then page
     through the scheduled activities or print them offline. 
   
Workdays

     Enter a numeric code in the range of 1 to 7 for the number of
     working days in the week.  Most often this is 5 for Monday
     thru Friday.  The week starts on a Monday (day 1) and ends
     on Sunday (day 7).  This parameter is shown in the schedule
     Help window and affects activities scheduled by use of
     "working day" occurrences.

Color

     Change the default colors used by PCS.  A "mockup" of the
     screen is provided.  You can use the arrow keys to force the
     colors to change.  After you are satisfied with the new color
     combination PCS will save the colors you specified in the
     Parameter file.

PrinterSetup

     These commands are used to enter information about your
     printer.  When a Print request has been specified, these
     parameters will help PCS determine how to format the listings.

PageLength

     Enter the length of the form you are using. Most often this
     will be "66" for standard 8.5 X 11. 

Pause

     If you do not have continuous-feed paper in your printer this
     parameter will force a halt between pages.  This is used for
     single sheet printing.

ControlString

     This is the printer "setup control string" which will be sent
     directly to the printer each time "print" is specified.  These
     special characters tell your printer (which varys from printer
     to printer) which features to use.

     ASCHII codes are specified as backslash '\' followed by a
     3-digit numeric. For example, ASCII 27 21 combination would
     be specified as follows: "\027\021".  Consult your printer's
     manual for a list of control codes. 

Quit(ESC)   Return to the MAIN MENU screen.



ERROR MESSAGES

     The following messages are PCS error messages.  These messages
     appear at the bottom of the screen and a "beep" is heard.  Press
     any key after the message to continue.

E001 File Empty! - Copyright of Software Configuration'

     In order to Save or Run a schedule there has to be at least one
     activity.  Either Retrieve an existing File or use the Revise
     command to build a new File.

E002 Work days must be from 1 to 7

     PCS assumes the work week is from one to seven days long.

E003 invalid Month entry

     The month code must be a Gregorian Month: 01 to 12.

E004 invalid Day entry

     The Day must be a valid Gregorian Day for the month: 01 to 31.

E005 invalid Year entry

     The Year code must be a valid numeric in range 00 to 99.

E006 Activity has no Frequency

     An attempt is being made to Forecast the schedule for an activity
     which has no Frequency code.  Use Revise to enter a Frequency.

E007 File Name not specified

     A File Name must be specified before retrieving or saving.

E008 Help file not available

     The _PCSHELP.TXT file which came on the Installation diskette is
     not on the logged drive or cannot be found in logged directory.
     
E009 Printer page length invalid

     The page length must be from 9 to 99 lines.
          
E010 Schedule Days must be from 1 to 366

     Only one year can be specified using the Days command.

E100 too many scheduled activities!

     The maximum number of activities has been reached.  You will need
     to split the activities into two separate files.

E101 only Group Header allowed

     You are attempting to do a function which can only be done on a
     '00' Group Header Record.




E102 only Annual freqency allowed 
 
     Your are attempting to do a function which can only be done on an
     activity which has an Annual frequency.

E103 Group Header not found 

     The '00' record you have specified cannot be found.

E200 invalid Activity code 

     The Activity code specified can not be found in the current PCS
     File.  Correct the activity code and continue.

E201 invalid Odd/Even Code 

     The odd/even code must specify an 'O' or an 'E'.  

E202 Group Header has no Frequency 

     The "H=" frequency code is being specified for a detail activity but
     the Group Header Record ("00" record) has no frequency.  Specify a
     Frequency for the Header record before using this code. 

E203 invalid Frequency Code  

     The frequency code specified is not valid.  Position the cursor at 
     the Frequency field and press F1 for the Help Window display of
     valid Frequency Codes.  Select a valid Frequency Code and continue.
 
E204 invalid Occurrence Code  

     The code specified in the Occurrence field is not valid for this
     Frequency.  Position the cursor at the Occurrence field and Press
     F1 for the Help Window.  Some frequencies have no Occurrence
     code.

E205 invalid -Not On- Code  

     The code specified in the 'Not on' field is not valid.  Press F1 for
     the help screen of valid codes.  Not On codes are allowed only on
     Daily and Weekly frequencies. 

E206 date less than Header start date 

     The date specified as the Start date is before the Header Start date.

E207 date greater than Header stop date 

     The date specified as the Stop date is after the Header Stop date.

E208 duplicate activity code 

     Another activity has already been assigned this code.

E209 cannot move Group Header 

     Only detail reocrds can be moved.  The new header record must be
     entered using the Add function.




E210 File is full! 

     The maximum number of PCS activities has been reached for one
     File. The maximum number of activities is 400.

E211 _PCSPARM Re-initialized! Reset Global Options.

     PCS has found it necessary to re-initialize the Parameter file either
     because of a new release or the file has been erased.  Respecify the
     Global specifications and PCS will create a new parameter file.

E212 Foreground and Background same color!

     If the foreground (text) color and the background color are the
     same the field will be un-readable.  PCS does not allow same colors.

E213 Input color must be different than Screen Body.

     The Input color field is used also for the "cursor pointer" box.  You
     must specify a different color combination for Input than that which
     is specified for the Screen Body or the cursor pointer will disappear.

E301 Holdiay Limit has been reached 

     No more Holidays can be defined.  If any Holidays are no longer
     used then delete the name from the list to allow for more room.

E302 Holiday Code not Defined 

     The 3-character code must be defined before it can be specified. 
     Use the Define Command and name the Holiday before specifying the
     date.

E303 Invalid Re-schedule code 

     Re-schedule code must be one of codes that appears in the box.

E304 Maximum Specified has been reached 

     No more Holidays can be specified.  Go back to prior years and
     delete some holiday specifications and then re-specify current
     holidays.

E305 Holiday not Specified 

     Attempting to clear a Holiday that is not specified for this year.

E402 Unexpected End of File 

     This is a catastrophic error.  The file has probably been lost. 
     Attempt to list the file then Erase and re-do the entire file. 

E403 This is not a PCS file 

     PCS only recognizes files in a specific format.  Some other file with
     an extension of "PCS" has been created and you are attempting to
     access it or the PCS file has been corrupted. Re-create any
     corrupted files from a backup copy.

E404 No PCS files in Directory 

     The directory does not contain any files with the "PCS" extension.




FILE ERRORS

The following error messages are related to File I/O problems.  The
messages should be familiar DOS error messages.  After you press Enter
to clear the message PCS will pause and display the full name of the File
in error on the bottom of the screen.

F001 File does not exist 

F002 File not open for input 

F003 File not open for output 

F004 File not open 

F010 Error in Numeric format 

F020 Operation not allowed on logical device 

F021 Not allowed in direct mode 

F022 Assign to standard files not allowed 

F090 Record length mismatch 

F091 Seek beyond end of file 

F099 Unexpected end of file 

F150 Disk is full 

F151 Directory is full 

F152 File size overflow 

F153 Too many open files 

F155 File disappeared 

F186 Disk space not available 

F999 Unknown I/O error 



 

 

                                                                       


 

 

                                                                       















 

 

 

                                                                       
```
{% endraw %}

## README.DOC

{% raw %}
```
                           <<PC-SCHEDULER>>
FILES on disk...

  README.DOC    -  Contains this file
  LICENSE.DOC   -  Contains Regristration Order form and License agreement
  MANUAL.TXT    -  Contains ASCII text of Shareware manual

  PCS.COM       -  Main program file
  PCS.000       -  Overlay file
  PCS.001       -  Additional overlay file

  _PCSPARM.DTA  -  Contains parameters to be saved between runs
  _PCSHELP.TXT  -  Contains text displayed in Help Windows
  _PCSDEFH.DTA  -  Contains Holiday names defined by user
  _PCSSPEC.DTA  -  Contains dates specified by user as Holidays

  EXAMPLE1.PCS  -  File containing sample activity records

To print manual... To your screen, enter:  type manual.txt

               ... To your printer, enter: type manual.txt > prn:

To print Order Form... enter:  type license.doc > prn

To run PC-SCHEDULER ... place diskette in drive A, type 'PCS'

  (specify File/Retrieve of EXAMPLE1 and press F4 to run schedule)

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1244

     Volume in drive A has no label
     Directory of A:\

    EXAMPLE1 PCS      6016  11-09-88  12:49a
    FILE1244 TXT      2505   1-31-89   2:38p
    GO       BAT        38  10-19-87   3:56p
    GO       TXT      1002  12-13-88   3:47p
    LICENSE  DOC      3534  11-09-88   2:37a
    MANUAL   BAT       168  12-13-88   3:47p
    MANUAL   TXT     67860  11-06-88   3:19a
    PCS      000     88576  11-09-88   1:56a
    PCS      001     12032  11-09-88   1:52a
    PCS      COM     39148  11-09-88   1:56a
    README   BAT        18  11-09-88   2:28a
    README   DOC       994  11-09-88  12:48a
    _PCSDEFH DTA        26  10-30-88  12:39a
    _PCSHELP TXT      4327  10-30-88  12:28a
    _PCSPARM DTA       203  11-09-88  12:51a
    _PCSSPEC DTA        18  10-30-88  12:39a
           16 file(s)     226465 bytes
                           86016 bytes free
