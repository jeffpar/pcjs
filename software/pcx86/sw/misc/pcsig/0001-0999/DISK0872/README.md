---
layout: page
title: "PC-SIG Diskette Library (Disk #872)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0872/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0872"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "AMPLE NOTICE APPOINTMENT CALANDER"

    AMPLE NOTICE is a calendar and alarm clock program that helps organize
    your schedule of appointments.  Appointments and notes are entered into
    a standard text file in any of a variety of simple formats.  Each day,
    you view a calendar of commitments taken from this file.  This text file
    can be edited from within the program or from an ASCII wordprocessor.
    
    You can specify that a birthday occurs each July 17, or that you have a
    meeting every other Tuesday at 4:00 for five meetings, or that Father's
    Day is the third Sunday in June.
    
    Appointments that include a time can automatically set a pop-up alarm
    clock to notify you at a given advance interval.  Print a specified
    range of dates to keep track of your appointments while away from your
    computer.  These can be in a variety of print styles including a
    ``tiny'' option of very compressed listings for your wallet or purse.
    You can also print a calendar for any range of months for a particular
    year.  The sorting and archiving options let you keep track of past
    activities for business purposes.  Searching for a given appointment
    (future or past) is fast and easy.  Also included is a program for
    addressing envelopes sideways from data on the screen or from a file.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## AN.DOC

{% raw %}
```








                           Ample Notice
                 Appointments calendar/alarm clock

                          by Mark Harris















               Granny's Old-Fashioned Software (tm)
                           Rt 4, Box 216
                          Boone, NC 28607
                          (704) 264-6906

                            July, 1989
                            Version 1.3

                 (c) Copyright 1989 by Mark Harris
                       All Rights Reserved.

The unmodified Ample Notice distribution diskette, containing a
copy of this manual, may be freely copied and shared subject to
the conditions described in Section 11.  This document may not be
copied in printed form.












                   Table of Contents



   1. Introduction                            1
                                             
   2. A quick tour                            3
                                             
   3. Installation                            5

   4. The ALARM program                       7
                                             
   5. The NOTES file                          8
                                             
   6. The appointments screen                12
                                             
   7. The editor                             15
                                             
   8. CONFIG.CAL                             18
                                             
   9. Command line options                   21
                                             
  10. Tips for effective use                 23
                                             
  11. About Shareware                        24
Introduction                                                     1



1. Introduction.

     Ample Notice is a calendar and alarm clock package that can
help organize your life.  You enter appointments and notes into a
standard text file in any of a variety of natural formats, and
each day you view a calendar of commitments taken from this file.
Appointments which include a time can automatically set a 'pop-up
alarm clock' which notifies you at a given advance interval (re-
gardless of what you are doing on your computer).  Printouts can
be obtained in various print styles so that you can keep track of
your appointments away from your computer; the 'tiny' option lets
you print very compressed listings for your wallet or purse.  Out-
dated appointments are archived for use in preparation of taxes,
reports, etc.

     The appointments file can be edited from within Ample Notice,
or by using any other text editor.  By using a 'background' editor
such as SideKick (tm), you can update this file in the middle of
other computing tasks.

     Ample Notice is very easy to use but its flexibility ensures
that you won't outgrow it as your use becomes more extensive.  For
example, you can add straightforward entries such as

  3/5/88 9:00 Meet with Bill
or
  Nov 3, 1988 Report due.

But you can also enter cyclical appointments such as

  July 18  Elizabeth's birthday
   (once a year date)
  !Monday 3:00 Piano lesson
   (weekly appointment)
  \s6/26/89 !2d 1:00 ADR committee
   (every other day starting 6/26/89)
  \s6/26/89 !3w 1:00 ADR committee
   (every third week starting 6/26/89)
  \s1/10/89 !3m Quarterly report due.
   (every third month starting 1/10/89)
  \s6/26/89\e7/20/89 !2d 1:00 ADR committee
   (every other day starting 6/26/89 and ending 7/20/89)
  !Jun3Sun Fathers Day
   (third Sunday in June each year)
  !?3Mon Rotary Club
   (third Monday of every month)

Another category of entries is 'notes'; starting a line with '*' will
place that entry in an initial display of reminders that are not
attached to a specific date (obligations that don't go away until
you do them).  Notes can be grouped into separate categories, but
for the moment we'll just consider general reminders.

     To illustrate, suppose that the file (called NOTES by
default) contains the lines

Introduction                                                     2

  * Buy wedding present for Fred
  * Mow lawn
  !Wednesday 11:00 David's piano lesson
  7/17 Granny's birthday
  July 10 State tax due
  7/10/89 10:00 Dentist
  July 20, 1989 Fred Smith 2:00
  11 Jul 1989 4:00 ADI meeting
  * Take car in for recall work

and if your computer's system date is 7/5/89 then typing 'AN' will
produce the following display:

    Notes:

      Buy wedding present for Fred
      Mow lawn
      Take car in for recall work

    Appointments starting Monday  July 3, 1989

    Wednesday  July 5, 1989
      11:00 David's piano lesson

    Monday  July 10, 1989
      10:00 Dentist
      State tax due

    Tuesday  July 11, 1989
      4:00 ADI meeting

    Wednesday  July 12, 1989
      11:00 David's piano lesson

    Monday  July 17, 1989
      Granny's birthday

     Ample Notice has many additional features for maintaining the
appointments file and for using the alarm clock.  We recommend
that you take the 'Quick Tour' of the program described in Section
2 before reading the hard-core reference sections which follow.

     Before you proceed here are a couple of important announce-
ments:

The Ample Notice package will be updated from time to time and a
description of the changes will be maintained in a file called
READ.ME.  You should view this file as soon as possible, either by
typing GO (to see the contents a page at a time on the screen) or
by typing COPY READ.ME PRN (to copy the file to the printer).

Ample Notice is shareware and you are vigorously encouraged to
register; the registration cost is only $30 and carries
appreciable benefits.  Please read Section 11 for details.


A quick tour                                                     3

2. A quick tour.

     Ample Notice is easier to use than to describe; in this sec-
tion we'll take an on-line tour through the program's features.
To get started, get your computer up and running, then place a
copy of the Ample Notice disk (you have backed up the original,
haven't you?) in drive A.  (Section 3 has instructions for instal-
ling the package on a hard drive or 'bootable' floppy, but for now
just use the Ample Notice disk.)  If your system date and time
have not been set, set them now by using DOS's DATE and TIME
commands.  We'll begin with a brief look at the alarm clock.

     The first step is to load ALARM.COM as a resident program.
If the <Alt> <Left Shift> key combination is not used by another
resident program in your system, just type ALARM.  If this combin-
ation is already used, type ALARM -? to see a list of codes for
the various pairs of shift keys; for example, ALARM -K 3 will make
<Left Shift> <Right Shift> do the job.  Bring up the control win-
dow by pressing the key combination; you should see something like
this:

        / Space,UDRL,<Esc> \
        |                  |
        |  Now:  7:53 a.m. |
        |                  |     (U,D,R,L represent the
        |  Alarm:  OFF     |      up, down, right and
        |                  |      left arrow keys)
        |  12:00 p.m.      |
        |                  |
        \------------------/

Six keys are recognized by ALARM:

  Space    - toggles alarm off/on
  Up arrow - advances alarm time by one hour
  Down  "  - rolls back alarm time one hour
  Right "  - advances alarm time by one minute
  Left  "  - rolls back alarm time by one minute
  <Esc>    - closes window

Change the alarm time to two minutes past the current (system)
time indicated by 'Now' in the window, then press the space bar to
turn on the alarm and press <Esc> to close the window.  The alarm
will go off at the appointed time regardless of other computer
activities, but rest assured that no interference will occur.  For
example, you can be formatting a disk when the alarm sounds with
no ill effects.  While we're waiting for the alarm to sound let's
continue our tour.

     Load the Ample Notice program AN.EXE by entering AN at the
DOS prompt; the appointments file NOTES will be loaded by default.
Your screen will show a block of text under the heading 'Notes',
followed by a list of dates.  The bottom of the screen shows which
keys are meaningful to Ample Notice:

<Cursor> Alarm Cal Edit Find Help Next Print Sel View
<Alt A-Z,F1> + - <Esc>

A quick tour                                                     4

     You can obtain help on any of these functions by pressing the
'H' or F1 key.  Try this.

     The cursor keys let you move through your appointments for a
year.  (This default interval can be changed).  Take this oppor-
tunity to browse for a while.

     The Print option lets you print appointments for a range of
dates in either list or 7-column format.  We won't do any printing
now, but let's experiment with the options.  Press 'P' to initiate
print selection.  You'll see a window with the default print
style: List.  Press the space bar twice to toggle this to the 7-
column choice then back to List.  Press <Enter> to accept the List
style and bring up the date range window.  The first entry is the
starting date, which defaults to the current date.  Press <Enter>
to accept this default.  The next entry is the ending date, which
defaults to three weeks from now; again accept the default.  Next
comes the 'Mode' field which indicates the print style to be used;
pressing the space bar cycles through the options Normal,
Compressed and Tiny.  (These styles are originally set up for
Epson-style printers but can be changed in the CONFIG.CAL file.)
Change to Tiny and press <Enter>.  The final option indicates
whether Notes are to be included in the printout; the space bar
toggles between 'Yes' and 'No'.  DO NOT press <Enter> now (which
would cause printing to begin); instead, press <Esc> to abort the
print operation.

     The C)al option opens a window showing a monthly calendar:

                          November, 1986

                 SUN  MON  TUE  WED  THU  FRI  SAT
                -----------------------------------
                                                1
                  2    3    4    5    6    7    8
                  9   10   11   12   13   14   15
                 16   17   18   19   20   21   22
                 23   24   25   26   27   28   29
                 30

The up- and down-arrow keys are used to change the year, and the
right- and left-arrow keys change the month.  You can press 'P' to
obtain a printout of a calendar for any range of months, and as
with printing appointments you can select one of three print
styles.  When you are finished viewing the calendar press <Esc>.

     Now press 'E' to edit the appointments file.  The editor has
more features than we can examine in this tour, so we'll just
experiment a little.  You should see the first screen of your
NOTES file with the cursor positioned at the top line, and
available options are summarized at the bottom of the screen:

<Cursor> Calendar Delete Edit Find Help Insert Kopy Load Move
Next Sort Undelete Write eXit <Esc>

The cursor keys are used to move through the file, and editing is
done by pressing 'E' to edit an existing line or 'I' to insert a
new one.  Move around the file until you get the hang of it, then
A quick tour                                                     5

insert two new lines as follows.  The first line will mark your
birthday and the second will indicate a time for the alarm clock
to sound.  (You can insert the line anywhere except just before a
line starting with '&' which indicates a continuation from the
previous line.)  As an example suppose your birthday is July 17.
Press 'I' to begin the insertion, then type

  Jul 17  My birthday.

Press <Enter> to accept the new line, then insert a second line
which starts with a time 15 minutes from now.  For example assum-
ing that it is now 3:00 p.m. on July 5, 1989, you could type

  7/5/89 3:15 p.m. This is a test.

Press <Enter> to accept the line, then press <Esc> to return to
the appointments listing.  To see how the alarm works with your
appointments press 'A'.  You will see a list of today's appoint-
ments which start with a time; in this case there is only one such
appointment.  Next to each item is the advance warning to be used
by the alarm; the default of 10 minutes can be changed with the
right- and left-arrow keys, by putting a different default value
in CONFIG.CAL, or by recording the advance with the appointment
itself.  For now simply press <Enter> to accept the displayed
interval.  You have now set the alarm clock for 3:05 p.m.  You can
set up to 38 alarms at once, all in addition to the alarm which
you set from ALARM's pop-up window.  Alarms are set automatically
each time you run AN, so you generally won't use the A)larm
option.

     To see the effect of your new entry on the alarm clock, press
<Alt> <Left Shift> (or whatever shift combination you substituted
with the -K option) to bring up the alarm window.  You will see a
second window which includes the reminder
  3:15 p.m. This is a test.
All of today's appointments, including those with no times, will
show in this window.  Release the pop-up window with <Esc>.

     By now you should be back in Ample Notice's appointment
display.  Page through the appointments to find the day of the
week of your next birthday.  Finally, press <Esc> to exit the
program.  If the alarm clock has not yet 'rung' it soon will.  In
the default configuration the alarm will go off after five
seconds; an alternative option (described in the following
section) makes the alarm stay on until it is turned off.


3. Installation.

     The simplest way to install Ample Notice is to put the dis-
tribution disk in a floppy drive, make that drive the default,
then type ANSETUP.  You will be prompted to enter some informa-
tion; the rest is automatic.

     Installation will probably proceed with no difficulties.
However, you should be aware of the mechanics of the setup program
in case you need to modify its effects.  The following text de-
scribes the installation process; additional comments about in-
Installation                                                     6

stallation or updating a previous version can be found in the
READ.ME file on the Ample Notice disk.

     Installing Ample Notice is simply a matter of putting a few
files where the program and DOS can find them.  If you're instal-
ling onto a floppy, you will probably be content to put all files
in the root directory; if you have a hard disk, we recommend
putting all Ample Notice files in a subdirectory.  The instal-
lation procedure uses \AN as a default for a hard drive; you can
override this by providing an argument to ANSETUP.  For example
typing
  ANSETUP C:\APPTS
will put files in the subdirectory APPTS on drive C.

The installation program does the following:

1. The files AN.EXE (the program itself), the NOTES file,
   ALARM.COM (the pop-up alarm clock), and ANINST.EXE (a program
   for changing AN's default colors, etc.) are copied to the
   appropriate disk/subdirectory.

2. The file CONFIG.CAL is created.  (See Section 8 for the
   function of this file.)

3. The program will (if you give it the go-ahead) automatically
   add AN's subdirectory to the PATH command in your AUTOEXEC.BAT
   file, and will put ALARM in this batch file so that the alarm
   clock is loaded when you boot your computer.  If you feel com-
   fortable editing batch files it would be advantageous to do
   this yourself instead so that you can control the exact search
   order of your PATH and the point at which ALARM is to be
   loaded.  If you want to take control of putting ALARM in
   AUTOEXEC.BAT, but sure to read the following section about
   options available when loading ALARM.

     It is important that your system's date and time be set
correctly before Ample Notice is run.  If your computer has a
battery clock this is probably done for you, but if you lack this
hardware you will need to include the lines
  DATE
  TIME
in your AUTOEXEC.BAT file before the line containing ALARM.  When
DATE and TIME are executed you will be prompted to enter the date
and time.  There is a nice public domain utility called DDATE
which can be used in place of DATE; it remembers the last date
used and lets you change it (if necessary) with the cursor keys.
Contact Granny's if you would like a copy of this program.

     After installation, the next time you boot your computer you
can view your appointments simply by typing AN at the DOS prompt.
You may want to display your calendar automatically when you turn
on your computer; if so, just add the line AN to AUTOEXEC.BAT.

     Ample Notice's default screen colors should be reasonably
attractive and functional, but they can be changed.  Run ANINST
and enter the name and location of your CONFIG.CAL file when
prompted.  (For hard disk users this will most likely be
C:\AN\CONFIG.CAL.)  You can change all of the colors which Ample
The ALARM program                                                7

Notice uses and the changes will be saved in CONFIG.CAL when
you're done.


4. The ALARM program.

     ALARM.COM is a small resident pop-up alarm clock.  It can be
used independently of the appointments calendar AN.EXE, and AN can
function without ALARM.  If AN is run when ALARM is resident,
today's appointments will set the alarm clock.  You can set one
additional alarm by popping up ALARM's window and pressing the
space bar (as described in Section 2).  The ON/OFF status of the
window refers to this last alarm; any appointments displayed when
the window is brought up will always trigger appropriate alarms.

     Note that ALARM should be run only once after you boot your
computer.  If ALARM is in your AUTOEXEC.BAT file (recommended) it
will be loaded without your intervention; otherwise you will have
to type ALARM at the DOS prompt.

     ALARM can be run with no arguments, but several options can
be selected on the command line.  The syntax is

ALARM [-?] [-B n] [-K keycode] [-B n] [-L] [-V n1 n2 n3 n4] [-Z]

where options are indicated in brackets but the brackets
themselves are not included.  Examples are given following the
definitions below:

-? shows a help screen but does not install ALARM.

-B sets the beep duration in seconds.  For example, ALARM -B 10
   sets a 10-second alarm.  The default is 5 seconds.


-K sets keys to bring up window; 'keycode' is one of
   3 - Right Shift + Left Shift
   5 - Right Shift + Ctrl
   6 - Left Shift + Ctrl
   9 - Right Shift + Alt
  10 - Left Shift + Alt (default)
  12 - Ctrl + Alt
  For example, ALARM -K 3 specifies the two shift keys.

-L - Alarm stays on until you press the same shift combination
  which brings up the alarm.  After the first five seconds the
  alarm beeps once every 30 seconds until it is turned off.

-V changes screen colors.  The numbers n1 - n4 (separated by
  spaces) correspond to the colors used for the window, the alarm
  time, the labels and the actual time.  Each number is a value
  0 - 255 which describes the foreground and background colors.
  The number is computed by the formula
    foreground + 16*background
  where foreground and background are values corresponding to the
  colors below:
The NOTES file                                                   8

       0  black       8  gray
       1  blue        9  light blue
       2  green      10  light green
       3  cyan       11  light cyan
       4  red        12  light red
       5  magenta    13  light magenta
       6  brown      14  yellow
       7  white      15  bright white
  The background color is restricted in value to 0 - 7.
  Example:
    ALARM -V 4 7 14 1
  sets foreground colors red, white, yellow and blue, all against
  a black background.  To set a brown background (ugh!), add 16*6
  to each of these colors:
    ALARM -V 20 23 30 17

-Z suppresses video 'snow' on older CGA systems.

You can combine options in any order; for example
  ALARM -Z -K 3
will load ALARM, suppress snow and set the key combination to
Right Shift + Left Shift.
  ALARM -L -V 4 7 14 1
chooses the long alarm and changes screen colors.

     If you let ANSETUP put ALARM in your AUTOEXEC.BAT file for
you, you will be prompted for the -K, -L and -Z options.


5. The NOTES file.

     The file in which you keep a list of reminders and appoint-
ments is called NOTES by default but the name can be changed
permanently (see Section 8) or temporarily (on the AN command line
or by using the Load command in AN's editor).  The reason for the
name NOTES is that this is also the default used by the popular
SideKick (tm) program, so if you use this utility you can add a
reminder by pressing <Ctrl> <Alt> regardless of what program you
are running.  If you use another 'desktop manager' program you can
rename the appointments file accordingly.

     You can edit NOTES with any editor which can read and write
standard ASCII files.  As an example, WordStar (tm) in the
nondocument mode is appropriate, as are SideKick and PC-Write
(tm).  Using Ample Notice's built-in editor is the preferred way
to modify NOTES; the main incentive for using a different editor
is if you happen to be using another program when you want to add
a reminder.

     We recommend that you edit a copy of the NOTES file from the
Ample Notice disk when you begin using the package rather than
starting with an empty file of your own.  (The installation
program ANSETUP copies this file automatically.)  While you will
want to delete many of the lines from this file, you will find the
standard dates (such as Thanksgiving and Fathers Day) and the
comment section (lines starting with ';') worth keeping.  The
latter section includes examples of AN syntax and will keep manual
references to a minimum.
The NOTES file                                                   9

     Lines in the NOTES file should begin with a date or one of
the characters '*', '!', '&' or '\'; other lines are ignored when
the appointments screen is displayed.  Lines beginning with '*'
represent notes - reminders which are not associated with a fixed
date.  For example if you need to trim your hedges, the date is
not critical but the obligation won't go away until you get around
to it.  The text following '*' will be displayed in a special
notes section which can be optionally printed with your
appointments.

There are two kinds of notes:

1. If the '*' is followed by one or more spaces, the following
  text represents the note.

2. If the '*' is followed by a letter A - Z (with no space
  between), then the text following this letter is put into a
  special notes category.  For example, the line
    *C Take car in for tune-up
  will put a reminder in category C.  When you are viewing the
  appointments screen and press <Ctrl C>, all reminders in this
  category will be displayed.  (See the following section for
  details on viewing note categories.)  A second space following
  the category letter specifies a title for that category; for
  example,
    *C  Car
  will put the heading 'Car' above all notes in the 'C' category.
  While you can use any letters for your categories, you may have
  no more than 20 categories in all.

     One-time appointments begin with a date.  If a time immedi-
ately follows the date then the time will be used in sorting the
file and for setting the alarm clock.  Several date and time for-
mats are recognized; e.g.

  10/2/87 2 p.m. Call Bob
  October 2, 1987 2:00 Call Bob
  2 October 87 1400 Call Bob

If the a.m./p.m. indicator is omitted then the time is assumed to
be a.m. if it is from 8:00 to 11:59, otherwise it is interpreted
as p.m.  (The periods in a.m./p.m. are not required, and case
doesn't matter.)  If the year is omitted then the 'appointment'
becomes an anniversary and is displayed or printed whenever the
month and day are in the range specified.  For example,
  May 25 David's birthday
will show up every year.

     In any context in which a month is expected, the wild card
'?' can be used to match any month.  For example,
  ?/10 Mortgage payment due
will show an appointment on the tenth day of each month.

     Ranges of dates can be entered with a minimum of fuss.
  7/3/88+3 Atlanta conference
will put the commitment 'Atlanta conference' with the date 7/3/88
and the three days which follow (for a total of four days).
  6/10/88-7 anniversary
The NOTES file                                                  10

will put the reminder 'anniversary' under the date 6/10/88; in
addition, the reminder will be placed in the notes category if the
current date is one of the seven days preceding 6/10/88.  This is
a 'forward nag' appointment; backwards nagging is described below
as one of the '\' options.

    Keep your lines to 80 characters (the screen width) or less;
longer lines will be split when read by AN.  If you run out of
space on one line (regardless of the type of entry) you can
continue to the next line by starting it with '&'.  For example:

  8/20/87 8:00 pm  Party at Griffin's house
  & Take Rt 87 4 miles, turn left onto Rattlesnake
  & Gutter Road, third house on left

When such an appointment or note is listed, the '&' character will
be removed and the remaining text will be indented beneath the
first line.

     The '!' character is used to start lines describing appoint-
ments with cycles more complex than simple anniversaries.  There
are three ways in which '!' can be used.  The first is for weekly
reminders:

  !Wed 3:00 Piano lesson
   (Piano lesson every Wednesday at 3:00)

The second useful for dates such as Fathers day and Thanksgiving
fall on a specific day of the week:

  !Jun3Sun Fathers Day
   (third Sunday in June each year)
  !?3Mon Rotary Club
   (third Monday of every month)
  !May5Mon Memorial Day
   (last Monday in May)
The number '5' has a special significance the context of this last
example - it indicates the last such day in a month.  If there are
only four Mondays in May, then the fourth will be triggered.

Another '!' category is every nth day, week or year.  Since it
doesn't make any sense to talk about every-other-day appointments
without giving a starting day, the starting date is given after
'\s'.  In addition, an ending date may be specified following
'\e'; if no ending date is given, then the cycle continues indef-
initely.  Here are some examples:

  \s6/26/89 !2d 1:00 ADR committee
   (every other day starting 6/26/89)
  \s6/26/89 !3w 1:00 ADR committee
   (every third week starting 6/26/89)
  \s1/10/89 !3m Quarterly report due.
   (every third month starting 1/10/89)
  \s6/26/89\e7/20/89 !2d 1:00 ADR committee
   (every other day starting 6/26/89 and ending 7/20/89)

While the syntax looks intimidating, it's really fairly simple.
The appointment is preceded by !, a number, then one of the
The NOTES file                                                  11

letters d,w,m.  The number is the cycle length - for example, 3
means every third whatever - and the letter indicates day, week or
month.  Before the '!' comes the starting date and an optional
ending date.  One pattern requires no starting date:
  !1d 10:00 take medication
shows every day at 10:00.

     Note that you can use either the '!Wed' or '!1w' syntax to
indicate weekly appointments.

     You can precede notes or appointments with a variety of
options starting with the '\' character:

  \E - Ending date for cyclical appointments.  Follow '\E' with a
    date in month/day/year format.

  \I - If you precede a note or appointment with \I (the 'I'
    stands for important), the line will be highlighted when
    listed.  You can prioritize highlighting using \1 (same
    meaning as \I), \2 and \3.  For example,
      \I *This is an important note
      \2 *This is also important, but looks different
    The associated video attributes can be changed with the ANINST
    program - see Section 3.

  \N - precedes a one-shot appointment to change it to 'notes'
    status after the date has passed.  For example
      \N 2/1/88 Change oil
    will show as a regular appointment until after 2/1/88 - the \N
    prefix will have no effect.  After this date, the effect is
    exactly the same as if the line was entered as
      * Change oil

  \S - Starting date for cyclical appointments.  Follow '\E' with
    a date in month/day/year format.

  \U - Notes beginning with \U (for 'unimportant') will be dis-
    played only once a week.  The default display day is Monday,
    but this can be changed (see Section 8).  For example

      \u* This is an unimportant note.

    will cause the text following the '*' to be shown as a note
    once a week.

    This option helps you avoid cluttering the screen with notes
    which serve more to distract than to remind.  If daily notes
    are compact - a third of the screen or so - they will be more
    effective.  You can also use the note categories described
    above to keep from viewing too many reminders at once.

  \W - Appointments preceded with \W will show only if the date
    falls on a weekday.  For example
      \W\S1/1/89 !2d xxx
    will show the appointment 'xxx' ever other day starting
    1/1/89, but will suppress a listing of the appointment if it
    falls on Saturday or Sunday.

The appointments screen                                         12

  \(warning_time) - You can specify the advance warning to be used
    by ALARM for an appointment if you wish to override the
    default of 10 minutes (or a different default which you
    specify in CONFIG.CAL - see Section 8).  For example,
      \(5) 1/1/89 9:00 am xxx
    will set the alarm clock for 8:55 a.m.

     You can combine more than one '\' option on a line, in any
order.  Just remember that all such options must precede the rest
of the note or appointment.

     Lines which do not fit into the categories described above
are ignored by Ample Notice when generating the appointments
display (but are put in alphabetical order when the Sort option is
used).  You can record information to be viewed in the editor but
not in the appointments display by preceding lines with a symbol
such as ';' - see Section 10 for details.

     There is currently a 2000-line limitation on the number of
lines that can be included in the NOTES file.  If this causes any
serious inconvenience please let us know - the number of lines can
be raised with minor overhead in memory usage.


6. The appointments screen.

     The appointments screen is the default environment when you
execute AN.EXE.  The available options concern moving around the
appointments list, setting alarms, viewing a monthly calendar,
viewing notes, printing a range of appointments and editing the
appointments list.  Following is a description of each option:

     The cursor keys page through the appointments list or jump to
the beginning or end.

     'A' takes you to the Alarm screen if ALARM.COM is resident.
Every appointment which begins with a time is listed, and to the
left of each appointment the default warning interval (the number
of minutes before the given time for the alarm clock to be set) is
shown.  The original (default) default is 10 minutes but can be
changed in the CONFIG.CAL file (Section 8) or by including the
interval with the appointment (Section 5).  Use the up- and down-
arrow keys to move to an appointment, then use the right- and
left-arrow keys to change the advance warning time.  At any time
<Enter> can be used to accept the displayed times, or <Esc> can be
used to abort setting the alarm.  In the latter case the
previously-set times are retained.  Alarm times are not cumulative
- when you press <Enter> to set the alarm any old settings are
lost (except that made when popping up the ALARM window with
<Left shift> <Alt>).

     If you are happy with the default warning interval (10
minutes or a value you substitute in CONFIG.CAL), and you get in
the habit of including intervals other than the default with your
appointment, you should never have to use the 'A' option.

     Pressing 'C' opens the monthly calendar window.  A day-of-
the-week display of the current month is shown with the current
The appointments screen                                         13

day highlighted.  Use the right- and left-arrow keys to change the
month and the up- and down-arrow keys to change the year.  Press
'P' to print a range of months in the print style of your choice.
The space bar is used to cycle through the styles Normal,
Compressed and Tiny.  For information on changing the control
characters used with these choices (for different printer types)
and the default formatting dimensions see Section 8.  At any time
in Ample Notice pressing <Esc> will abort a printout.  When you
are finished viewing or printing a monthly calendar press <Esc> to
return to the appointments screen.

Note: the calendar window is also available from the edit screen.

     Press 'E' to switch to the edit screen.  You may then modify
the current appointments file or switch to a new file.  Section 7
describes the editor in detail.

     Press 'F' to search for text in the appointments listing.
You are prompted to enter a string and the search begins at the
current page.  Case sensitivity is not used - your entry will
match upper or lower case.  When a match is found all qualifying
appointments or notes on the first appropriate page are high-
lighted.  Pressing 'N' continues the search to the next match.

     Press 'H' (or F1) for help, here and elsewhere in Ample
Notice.

     Press 'P' to print a range of appointments in either list or
7-column style.  The space bar toggles between these two choices
and <Enter> selects the displayed style.  The list style is
similar to what is displayed on the screen - a list of
appointments is printed and dates with no appointments are
skipped.  Notes may be included in the printout.  The 7-column
style prints a conventional monthly calendar with appointments
squeezed into boxes corresponding to days of the month.  This can
be useful for getting the 'big picture', but individual
appointments are a little hard to read.

     If the list style is selected, the default date range is a
three-week interval beginning with the current date - press
<Enter> to accept the dates shown, or enter new dates.  The
interval must fall within the range you can view, which defaults
to the year following the current date but which can be reduced
(not expanded) in CONFIG.CAL.  You can change the starting date of
the viewable appointments with the 'V' option.  If you want just a
single page printed out, enter the word PAGE in place of the
ending date.

     You can include or suppress notes in your printout.  The
space bar toggles between these two options.

     In the last choice for the list style, the space bar cycles
through the print modes Normal, Compressed and Tiny; the
corresponding formatting can be changed in CONFIG.CAL.  See
READ.ME for suggested changes.

     If you select the 7-column style you must enter the starting
and ending month and year.  For a single page printout, enter PAGE
The appointments screen                                         14

for the ending month.  Since squeezing seven columns onto a sheet
of paper requires a page width of about 132 characters, only the
Compressed and Tiny modes will be available (unless you have
changed the page dimensions of Normal in CONFIG.CAL).

     Pressing 'S' lets you Select a subset of appointments. You
are prompted to enter a string and only appointments containing
this string are displayed.  You can use this feature to obtain
customized calendars for a given activity.  For example, you can
select all 'appointments' containing the word RACE for a list of
future running races or TAX to obtain a list of lines with tax
information.  To undo the effect of Select, enter an empty string.

     Pressing 'V' brings up the 'View' menu which lets you change
the starting date for the listing and lets you switch between
short and long listings.  In the short listing repeating appoint-
ments such as birthdays, third Wednesdays in August, etc. are sup-
pressed; the short display is handy for obtaining concise (wallet-
sized) printouts of appointments.  Changing the starting date is
useful for listing outdated appointments or appointments far in
the future; for example, you can change the starting date to
1/1/89 and view your commitments for the year of 1989.

     The View menu looks like this:

  Start date: 10/17/87
  Dates listing: Long

The cursor starts in the date field, which you can modify or leave
as-is (by pressing <Enter>).  The 'Dates listing' indicator is
then toggled between 'Long' and 'Short' with the space bar.
Pressing <Enter> accepts the View parameters displayed; <Esc>
exits without changing the old parameters.

     Pressing <Alt> with a letter shows a notes category.  For ex-
ample, <Alt C> selects all notes starting with *C.  If the letter
C is followed by more than one space the following text is
displayed as a heading; for example,
  *C  Car
will result in the heading 'Car' in a different video attribute
than other notes in this category.  (There should be only one
heading in each category.)  Press <Alt F1> to display a list of
categories available; your headings are shown in alphabetical
order.  While you can use any letters for your categories, you may
have no more than 20 categories in all.

     Pressing '+' shows all notes - all categories and those not
in any category (for which '*' is followed by a space rather than
a letter).  The categories are kept together and the headings are
highlighted.

     Pressing '-' restores the original notes display with all
letter categories suppressed.

     To exit Ample Notice, press <Esc>.  You will be asked to con-
firm your intention just in case the key press was accidental.
(This confirmation can be suppressed by an appropriate entry in
the CONFIG.CAL file; see Section 8.)
The editor                                                      15

7. The editor.

     Ample Notice's editor puts you in total charge of your ap-
pointments file.  You can use the editor to create, modify and
sort this file; you can also use it to move outdated appointments
to a more appropriate place.  Ample Notice can also be used in a
stand-alone mode to edit other text files which have nothing to do
with appointments.

     You can enter the editor in one of three ways: by pressing
'E' from the appointments screen, by including '-E' on the AN
command line (see Section 9) or by including '%E' in CONFIG.CAL
(see Section 8); most people will need only the first of these
routes.  Once you are in the editor, the bottom line(s) will de-
scribe the options available; following is a description of these
options.

     The up- and down-arrow, Home, End, PgUp and PgDn keys move
the cursor through the appointments file.  Press 'E' to edit the
line at the cursor position or press 'I' to insert a new line.

Options when editing a line.

     The following editing functions are supported:

  Left arrow or <Ctrl S>
    Cursor left.
  <Ctrl A>
    Cursor left one word.
  Right arrow or <Ctrl D>
    Cursor right.
  <Ctrl F>
    Cursor right one word.
  F3 or <Ctrl R>
    Restore original line, continue editing.
  Home
    Start of line.
  End
    End of line.
  Ins or <Ctrl V>
    Toggle insert/overwrite mode.  Default is insert mode.  (This
    can be changed in CONFIG.CAL.)  Insert mode is indicated by
    larger cursor.
  Del or <Ctrl G>
    Delete character under cursor.
  Backspace
    Delete character left of cursor.
  <Ctrl C>
    Pop up calendar, point to and insert date.  Also used to make
    copies of an appointment with different dates.  (See below.)
  <Ctrl T>
    Delete word to right of cursor.
  <Ctrl Y>
    Delete line.
  <Alt B>
    Insert both current date and time.
  <Alt D>
    Insert current date.
The editor                                                      16

  <Alt T>
    Insert current time.
  <Esc>
    Restore and accept original line.
  <Enter>
    Accept edited line.
  <Shift Enter>
    Accept line, insert and edit new line.

When editing the input line will be shown in inverse video.
Pressing <Esc> or <Enter> returns you to the editor's menu.

     The <Ctrl C> option is convenient for entering dates.  You
are shown a calendar of the current month with the cursor on the
current day.  The right- and left-arrow keys move a day at a time
and the up- and down-arrows change the date by a week.  You can
press <Shift> with the arrow keys to move by months (right and
left) or by years (up or down).  Pressing <Enter> puts the
cursor's date into the edit line; pressing <Esc> aborts the oper-
ation.  Note: <Ctrl C> can be used any time input is requested, so
when you're entering a date range for printouts you can use this
'point and shoot' approach.

    You can use <Ctrl C> to enter the same appointment with a
range of dates.  Suppose teacher work days are scheduled for
9/15/89, 10/20/89 and 11/20/89.  Edit a line
  Teacher work day
and position the cursor at the beginning of the line.  Press
<Ctrl C> to pop up a calendar, move the calendar cursor to
9/15/89, then press 'K'.  (This option is displayed on the
calendar as Kopy.)  A copy of the appointment with the selected
date is inserted into the appointments file below the current
line.  You can point to other two dates and press 'K' again to
insert the remaining appointments.  Press <Enter> to end the K)opy
operation, then 'D' to delete the current line (which contains no
date).

Other editor functions.

     From the main edit menu you can perform several other actions
besides editing a line.  Pressing 'D' deletes the line at the
cursor.  Pressing 'U' restores ('undeletes') the line.  You can
use these two commands to move a line - delete, move the cursor,
then undelete.  Up to 25 deletions will be saved and restored in
reverse order.  If more than 25 deletions are made the 'oldest'
deletions are lost.  Press 'K' to copy a line.

     F)ind and N)ext are similar to the same functions in the
appointments screen.  If you press 'F' you will be prompted to
enter the text for a search (which is performed independent of
case).  The cursor advances to the first match following the orig-
inal cursor position.  Pressing 'N' then advances to the next such
match.

     S)ort is a function which helps keep your file manageable.
As soon as 'S' is pressed the file is sorted: first notes, then
one-shot appointments (sorted by date and time), then annual
appointments (by date and time), then cyclical appointments
The editor                                                      17

starting with '!', and finally all remaining lines.  Note that the
sorted file is not automatically saved; you will have to use the
Write command to make the changes permanent.

     There are three disk-related commands: M)ove, W)rite and
L)oad.  With all three you are prompted for a file name and shown
a default; simply press <Enter> to accept the default name.  If
you give a wild card file specification or directory name instead,
a display of corresponding files is shown and you are prompted
again for a name.  For example, if FOO is the name of a directory
you could enter FOO, FOO\, FOO\*.* (these three are equivalent),
FOO\*.CAL, etc.

     M)ove is used to move appointments to an archive file; the
default archive is ARCHIVE.CAL (in your AN subdirectory, if you
have one).  You will be given an opportunity to specify a dif-
ferent archive file; if you want a new default you can modify
CONFIG.CAL (see Section 8).  M)ove performs two functions: the ap-
propriate lines are appended to the archive file and these lines
are deleted from the current file.  It's a good idea to archive
your file every few weeks to keep it down to a convenient size.

     When you press 'M' you will see the following menu line:
  MOVE: H)elp, M)ark, O)utdated, <Esc>
Pressing 'O' moves outdated one-shot appointments.  If you press
'M' instead, you are put in marking mode - you explicitly choose
all lines of the file to be moved.  Pressing '+' toggles the state
(marked/unmarked) of the line at the cursor, and the cursor keys
move you through the file as usual.  Pressing <Enter> completes
the move operation or <Esc> aborts the procedure.

     The archive file can be extremely useful for reviewing old
activities.  You can sort ARCHIVE.CAL (if necessary) by loading it
as the appointments file in Ample Notice.  While there is a 2000-
line limitation in file size you can keep archives below this
limit by periodically renaming ARCHIVE.CAL to an appropriate name.
For example, at the end of 1987 type
  REN ARCHIVE.CAL ARCHIVE.87
The next time you archive your appointments a new ARCHIVE.CAL will
be created automatically.

     W)rite is used to make a permanent copy of the file which you
are editing.  You can use the name under which the file was loaded
(the default) or substitute another name instead.  If you forget
to save a modified file when editing, you will be prompted when
exiting Ample Notice:
  Save modified file \NOTES? (Y,N)
Pressing 'Y' will save the file using the same name with which it
was loaded.

     Press 'L' to load a file.  If you give the name of a file
which does not exist you will be asked whether you wish to create
a new file.

     H)elp or F1 opens a help screen as usual.

     C)al brings up the monthly calendar window just as it does in
the appointments screen.
CONFIG.CAL                                                      18

     <Esc> is used to return to the appointments screen; there
will be a brief delay while Ample Notice interprets and
categorizes dates and times.  If you are editing a file which is
not an appointments file you can press 'X' to exit directly to
DOS.


8. CONFIG.CAL.

     When Ample Notice begins execution it looks first for a file
called CONFIG.CAL (or other file explicitly given on the command
line) which contains data describing your preference for screen
colors, printer formats, file names, etc.  If CONFIG.CAL isn't in
your current directory then the DOS PATH is searched.  If no such
file is found then default values are used; for many users these
defaults will be appropriate.  If you wish to create or modify a
configuration file you may use any ASCII editor, including that in
Ample Notice.  To use the AN editor you can start with something
like
  AN -E -F \AN\CONFIG.CAL which will load AN and immediately start
editing the file \AN\CONFIG.CAL.  The file will consist of lines
of the form
  %letter parameters, or
  &letter parameters.
For example
  %C C:\AN\NOTES
specifies the default appointments file, and
  %P 28
indicates that the default interval for appointments printouts
should be 28 days.

     Following is a list of CONFIG.CAL options.  (Note: from time
to time new options and syntax will be added.  The READ.ME file
will describe these additions.)

% Options.

A - archive file name.  For example, '%A C:\AN\BILL.ARC' makes
  BILL.ARC in the given subdirectory the new default archive file
  in place of ARCHIVE.CAL.

B - 'bell': don't set alarm automatically from default calendar.
  No parameters.  If %B is included in CONFIG.CAL you will have to
  set alarms explicitly using the 'A' option.

C - calendar file name.  E.g., '%C \BILL.CAL' makes \BILL.CAL the
  new default appointments file instead of \NOTES.

D - number of days.  The default appointments interval is 365
  days.  '%D 30' changes this to 30 days.  Any value less than 365
  may be used.  Lower values result in faster initial display of
  appointments screen.

E - start in editor.  No parameters.  '%E' will skip the appoint-
  ments screen when AN is first run and go directly to the editor.
  This is useful in the unlikely circumstance that your primary
  use of AN is for editing.

CONFIG.CAL                                                      19

F - 'fast'.  No parameters.  Eliminates advertising screen which
  would otherwise greet you on the 1st and 15th of each month.
  You can still view this screen by loading Ample Notice with
    AN -I
  You'll want to see this information to obtain AN's version
  number or information on registration.

G - delay for alarm.  The default advance warning interval for the
  alarm clock is 10 minutes.  '%G 15' changes this to 15 minutes.
  The default interval can be changed selectively by using the
  A)larm command or by including the delay with the appointment.

H - change screen colors.  There are 18 different color assign-
  ments used by Ample Notice and the can all be set to your taste.
  Run ANINST to change this line.

J - A '%J' suppresses space between lines for more compact
  printouts.  No parameters.

K - A '%K' suppresses space between lines on the screen so you can
  view more information at once.  No parameters.

M - century base.  In the date 8/15/87, the year is assumed to be
  1987 because the 'century base' is 19 by default.  If you happen
  to be using this program after the year 2000 you should include
  the line '%M 20' to change this default.

N - Normal print.  There are three print modes - Normal,
  Compressed and Tiny.  Each mode has associated with it four
  pieces of information: page width, left margin, text lines per
  page and printer set-up codes.  These parameters are given after
  '%N'.  Page width indicates the total character width of the
  paper.  Left margin is the number of leading spaces for each
  line.  Text lines per page is the number of lines of text
  printed on a page before a form feed is sent to advance to a new
  page. The printer set-up codes form a sequence of up to 11
  numbers which are sent to the printer at the start of each page.
  This control sequence is used to exploit a printer's modes or
  fonts. The default for Normal is %N 80,0,55 which indicates 80
  columns, no left margin, 55 printed lines per page and no set-up
  sequence.  As a sample alternative, %N 80,0,54,27,69 sets 54
  lines per page and turns on emphasized printing on an Epson
  printer (27 = <Esc>, 69 = 'E').

O - Output file replaces printer.  (Letter 'O', not zero.)  Follow
  %O with the name (including path) of a file to which printer
  output should be redirected.  For example,
    %O \AN\TEMP.OUT
  will result in appointment and calendar listings going to the
  file TEMP.OUT rather than to your printer.  This is useful if
  you want to capture a listing to be included in another
  document.  Note that if you use this option you will not be able
  to use your printer directly from AN.  It's best to modify
  CONFIG.CAL, run AN to capture a printout, then change CONFIG.CAL
  back to the way it was.  (You can make AN ignore the %O by
  preceding it with an unrecognized character such as '*'; this
  will let you redirect output by adding or deleting a single
  character from CONFIG.CAL.)
CONFIG.CAL                                                      20

P - The number following %P changes the default interval for
  printing appointments from three weeks to a new duration.  For
  example %P 14 will change the interval to two weeks.  You can
  still override the default by entering preferred starting and
  ending dates.

Q - A '%Q n' in CONFIG.CAL changes the way AN exits.  %Q 1 will
  prevent the screen from being erased on exit.  %Q 2 will sup-
  press the 'Exit? (Y,N)' message when you want to leave Ample
  Notice.  If your appointments file has changed, you will still
  be asked if you want to save the modified file.  %Q 3 will
  install both these changes.

R - The codes following %R are used to reset the printer after
  printouts are obtained.  For example, %R 27,64 will reset Epson-
  compatible printers to the power-up state.  %R 12,27,64 will
  send a form feed character as well so that your printer will
  advance the paper to a new sheet.  (%$ can be used instead to
  send form feeds.)  The reset sequence is sent after a calendar
  or appointment list is printed.

S - small (Compressed) print.  Sets the parameters for Compressed
  printing.  The default is %S 132,26,55,15 which indicates 132
  columns, a left margin of 26 columns, 55 lines per page, and a
  single set-up code of 15 (or <Ctrl O>) which turns on compressed
  printing on an Epson.  See READ.ME for codes for other printers.

T - Tiny print.  Sets the parameters for Tiny printing.  The de-
  fault is %T 132,26,115,15,27,83,0,27,51,18 which indicates 132
  columns, a left margin of 26 columns, 115 lines per page, and a
  set-up sequence for turning on compressed superscript with
  18/216" line spacing on an Epson.  See READ.ME for codes for
  other printers.

U - Notes beginning with \U are displayed only once a week.  The
  default display day is Monday, but this can be changed with a %U
  line in the CONFIG.CAL file.  %U 0 will change the day to
  Sunday, %U 1 corresponds to Monday, ..., %U 6 changes the day to
  Saturday.

V - A %V in CONFIG.CAL will make overwrite mode (instead of
  insert) the default in any editing.  You can still toggle
  between insert and overwrite modes with the <Ins> key.

W - wait for form feeds.  No parameters.  Include '%W' in the
  configuration file if you print on single-sheet rather than
  continuous-feed paper.  At the end of each page you will be
  prompted to insert a new sheet of paper before printing resumes.

X,Y - '%X' and '%Y' let you print header lines in different
  styles.  '%X' is used to specify the control sequence sent at
  the start of header lines, and '%Y' specifies the sequence sent
  at the end of such lines.  For example on Epson-style printers
  <Esc> E turns on emphasized printing and <Esc> F restores normal
  printing.  The lines
    %X 27,69
    %Y 27,70
  send the appropriate ASCII codes so that header lines are
Command line options                                            21

  emphasized.  Other possible combinations for Epsons are:
    %X 27,52    italics on
    %Y 27,53    italics off
    %X 27,45,1  underline on
    %Y 27,45,0  underline off

Z - suppress snow.  No parameters.  If you are using an IBM Color
  Graphics Adapter or similar video card and are bothered by
  'snow' on the screen during window operations, include '%Z' in
  the configuration file.

+ - A '%+' in CONFIG.CAL will make tomorrow rather than today the
  default starting date for printouts.  No parameters.

$ - Use '%$' to end each printout with a form feed.  No param-
  eters.

& Options.

A - This option is required if a memory management utility such as
  DESQview's LOADHI is used to put ALARM.COM in high memory
  instead of low memory.  An '&A' is followed by a hexadecimal
  segment address (in the range 0 - FFFF) at which to start
  looking for ALARM.  Ample Notice will look from this address to
  the end of memory, so you don't have to know exactly where ALARM
  resides.  Example: &A C000.

     To handle multiple users (or different sets of preferences)
more than one configuration file can be kept on the same system.
To specify a file other than CONFIG.CAL use the -C option de-
scribed in the following section.


9. Command line options.

     When you run AN you may specify parameters in the command
line which override those in CONFIG.CAL (or the defaults).  The
syntax is
  AN [-A] [-B date] [-C fname] [-D #days] [-E] [-F fname]
     [-I] [-Q] [-S] [-W]
(where the options can be given in any order or omitted, and the
brackets are not included).  For example, AN -D 30 -B 9/1/87 will
list appointments for 30 days starting on 9/1/87.  Options and
associated data must be separated by spaces.  Following is a
description of each option.

A - will set the alarm clock (if loaded) automatically without
  showing the appointments screen.  This can be used in your
  AUTOEXEC.BAT file to reduce the number of keystrokes you must
  enter to set the alarm clock.

B - Specifies the starting date to be used for the appointments
  list instead of the current date.  You can use this to obtain
  printouts of appointments for any time interval of up to 365
  days.  Since more than one starting date can be given on dif-
  ferent runs of AN, multiple intervals can be concatenated to
  cover longer intervals.

Command line options                                            22

C - Specifies a configuration file other than CONFIG.CAL.  Espe-
  cially useful if more than one person uses your system.  For
  example: AN -C FRED.CAL

D - Gives the number of days to be listed.  The value overrides
  the default of 365 days or the replacement default in
  CONFIG.CAL.

E - Enter editor directly.  AN -E will take you directly into the
  editor with \NOTES loaded, or AN -E -F MYFILE will load MYFILE
  instead.

F - Specifies an appointments file other than \NOTES.  For exam-
  ple, AN -F MYFILE -E will load the file MYFILE, and the -E
  option will take you directly to the editor.  In this way AN can
  be used as an editor for any standard text file.

I - Shows information screen at beginning.  Use this option to
  view the AN version number or to see registration information.
  The information screen is otherwise shown automatically on the
  1st and 15th of each month unless the -Q option is used or %Q is
  placed in CONFIG.CAL.

P - Send your appointments listing to a printer automatically from
  a batch file.  The option has two arguments: the print style and
  an indicator for including notes.  The first option can be 'N'
  for normal, 'C' for compressed, or 'T' for tiny; the second can
  be 'Y' to include notes or 'N' to suppress them.  For example
    AN -P T N
  will print your appointments in tiny print without notes.  The
  default number of days is used; this can be changed with the %D
  option in your CONFIG.CAL file.  For example, a
    %D 1
  in CONFIG.CAL can be used to print only today's appointments.

Q - 'Quick'.  Suppresses the information screen which is otherwise
  shown twice a month.  If you use AN in an AUTOEXEC.BAT file and
  get tired of these periodic credits just add the -Q option.

S - Short listing of appointments.  All repeating appointments
  (birthdays, weekly appointments, etc.) are skipped on the
  appointments screen and in printouts.  This is useful for
  obtaining short printouts which show immediately appointments
  which are out of the ordinary.

W - Wait at form feeds.  This has the same effect as '%W' in
  CONFIG.CAL but doesn't make the end-of-page pause permanent.

     Again, there will almost certainly be additions to this list
described in the READ.ME file.


Tips for effective use                                          23

10. Tips for effective use.

     Ample Notice is a flexible product and you will probably de-
velop some applications not foreseen by Granny.  Here are a few
suggestions that will help you exploit the program.

     Since lines which don't start with '*', '&', '!', '\' or a
date are ignored in the appointments listing but maintained in the
file you can include information which you don't want to be forced
to stare at every day.  For example you can start lines with ';'
to record information that you can view in the editor but which
are not shown in the 'Notes' department.  When you sort the file,
lines which don't fall into the 'official' categories are
alphabetized at the end.  For example if you include the lines
  ;01 This is a reminder
  ;02 This is another reminder
then their order will be maintained since ';01' will precede ';02'
when sorted.  The original NOTES file supplied with Ample Notice
contains several such lines which provide help on appointment
syntax.

     Try to keep your notes (reminders starting with *) to less
than a screenful.  Note categories *A - *Z are very helpful for
breaking reminders into smaller chunks.  Likewise the \U option
serves to keep information overkill off the screen.

     Your archive file can be very helpful for business or tax
purposes; you can recall exactly when you took a trip or filed a
report.  However, its best not to go overboard - delete frivolous
items before performing the archive operation or you'll have a
file full of dates of haircuts and such.  If you sort your
appointment file before archiving then your archive file will stay
sorted, but if you happen to archive unsorted appointments
remember that you can always load ARCHIVE.CAL and sort it
directly.

     Until computers get small enough to carry around all the
time, provision must be made for time away from the keyboard.
Using the 'Tiny' print style, you can obtain a listing of one-time
appointments for an entire year which will fit neatly into a
wallet or purse.  This is often preferable to lugging around a
bound appointments book, which is not apt to make it to the tennis
court or the grocery checkout line.

     Take a good look at Section 8.  It will probably be worth
your while to fiddle with the %F,J,K,Q,R,X,Y options.

     For Ample Notice to be most effective it must be used on a
regular basis.  Put ALARM and AN in an AUTOEXEC.BAT file - on your
hard disk if you have one, or on a floppy which you will always
use to boot your computer.

     If you see 'snow' on your screen be sure to load ALARM with
the '-Z' option and to put a '%Z' in CONFIG.CAL.


About Shareware                                                 24

10. About Shareware.

    'Shareware' is a relatively new means of software distribution
with several advantages to you the consumer.  The complete package
including this instruction manual is contained on a single
diskette which may be freely copied and distributed.  Word of
mouth provides a more accurate and less expensive way of making a
product known than magazine advertisements, and the savings keep
Ample Notice's cost down.

    You can obtain the current Ample Notice disk from Granny's
Old-Fashioned Software for $10 or a registered package for $30.
Registration provides the following benefits:

1. A current version of the Ample Notice disk.
2. A printed manual.
3. A mail-in card for a free update of Ample Notice.
4. Additional updates at $5 each.
5. Telephone support for your technical questions.
6. A reasonable likelihood that features you request will be added
   to the package if such features are deemed practical and of
   sufficiently general interest.

    Shareware does not mean 'public domain'.  Distribution is
permitted only if the package stays intact; all files should be
passed on in unmodified form.  Commercial distributors may sell
copies of the package subject to the following conditions:

1. The disk shall be modified only by the addition of a small file
   providing additional help or stating the policies of the
   distributor.
2. No more than $10 (or foreign equivalent) shall be charged for
   the disk.
3. The distributor shall attempt to distribute the current version
   of the package.
4. The disk shall be clearly described as Shareware; the customer
   should not be given the impression that his purchase is in
   lieu of registration with Granny's.
5. The right to distribute Ample Notice commercially may be
   withdrawn by Granny's at any time (unless a specific
   arrangement is made otherwise).

To register, phone (with MC or VISA) (704) 264-6906 or mail pay-
ment to:

          Granny's Old-Fashioned Software
          Rt 4, Box 216
          Boone, NC 28607

North Carolina residents please add 5%, foreign orders add $3.
Foreign: MC, VISA or U.S. funds drawn on U.S. bank, please.

Site licensing.

     For five or more users at a single site the following li-
censing arrangements are available:
  Registration only: $10/user,
  Registration with printed manual and current disk: $15/user. For
large sites licensing costs are lower; call us to negotiate.
About Shareware                                                 25

Granny's reserves the right to change the above prices in the
future.

     Also available from Granny's is LQ, a program for the IBM PC
and compatible computers which will allow you to produce high-
quality text in a variety of fonts and modes on 9-pin dot matrix
printers.  LQ can be 'locked' into memory to function
inconspicuously with your favorite word processor or other
program.  The program includes a print spooler which can be set to
any length from 1 - 400K characters.  The spooler has been
customized to work with LQ's long graphics sequences very
efficiently (using about 1/40 the space required by a conventional
spooler); you can continue using your computer for other tasks
while documents print in the background.

     LQ is available from Granny's Old-Fashioned Software at $35
for the registered package or $10 for the distribution disk.
Again, North Carolina residents please add 5%, foreign orders $3.


```
{% endraw %}

## AN12TO13.DOC

{% raw %}
```
              Upgrading Ample Notice from 1.2x to 1.3

     Updating Ample Notice from a previous version involves 
copying a few files and modifying a couple of others.  If you are 
using Ample Notice on a hard disk, we recommend that all related 
files be placed in a subdirectory.  (If you are using AN on a 
system with no hard disk, skip to 'Using AN on a Floppy Disk 
System' below.)  For the purposes of these instructions, we'll 
assume that the name of the directory is C:\AN, but you can use 
any name you want.  If you have not previously created a 
subdirectory for Ample Notice you can do so by entering 
  MD C:\AN
at the DOS prompt.  Copy the files AN.EXE, ALARM.COM and 
ANINST.EXE from the Ample Notice disk to this directory: 
  COPY A:AN.EXE C:\AN
  COPY A:ALARM.COM C:\AN
  COPY A:ANINST.EXE C:\AN

     If your NOTES and CONFIG.CAL files were previously located in 
this subdirectory, edit them to conform to AN's new expectations 
described below.  If one or both of these files were located 
elsewhere, move them to the AN subdirectory.  For example, if 
NOTES is now in your root (C:\) directory, you can enter 
  COPY C:\NOTES C:\AN
  DEL C:\NOTES
to copy NOTES to the appropriate subdirectory and delete the 
original.  If you don't have a CONFIG.CAL file, don't worry - AN 
can continue to get by fine without one.  This file is used only 
to override AN's default values for screen colors, file locations, 
print settings, etc.

     The Ample Notice directory should be in your DOS PATH.  Edit 
your AUTOEXEC.BAT file so that C:\AN is in the line beginning 
PATH.  For example, here is a typical PATH line:
  PATH C:\;C:\UTIL;C:\DOS;C:\PW;C:\BIN;C:\TB;C:\AN
The entries separated by semicolons tell DOS where to look for 
programs you want to run, and the last entry allows DOS to find 
AN.EXE when you type AN at the DOS prompt.

     Using a subdirectory for all your Ample Notice files will 
help reduce clutter on your hard disk.  AN used to expect NOTES to 
be in the root directory unless its location was specified in 
CONFIG.CAL, but in version 1.3 the default location has been 
changed to the subdirectory containing AN.EXE (C:\AN in this 
example). 

     For the most part version 1.3 of Ample Notice is compatible 
with its predecessors; new features have been added which add to 
but do not replace old ones.  However, the syntax of some entries 
in NOTES and CONFIG.CAL has changed and you should modify these 
files accordingly.  


CONFIG.CAL

     All screen colors are specified in a single %H line which can 
now be entered automatically by running ANINST.  You should 
eliminate all old lines giving color values; in particular, %I, 
%K, %L, %1, %2, %3.  


     AN now sets the alarm clock by default, and a %B in 
CONFIG.CAL prevents AN from doing this.  Previously, %B had the 
opposite effect.  If there is a %B in your CONFIG.CAL file you 
should delete it.  

     Similarly, insert mode is now the default for editing rather 
than overwrite, and %V changes the initial mode to overwrite.  
Delete %V if you used to use it since it now does the reverse of 
what it used to.  


NOTES

     Lines starting with '*' may behave a little differently.  If 
the '*' is followed by a space, notes will be handled exactly as 
before.  If the asterisk is followed by a letter it becomes a 
categorized note, described in Section 5 of the manual.  
Consequently, you should edit existing notes, inserting a space 
after '*' if necessary. 

     Ample Notice used to support e.g. 'every other Monday for 
three repetitions'; such an appointment was written 
  !2Mon!3 7/17/89 xxx
where 7/17/89 was the date of the first Monday in the cycle.  Now 
the program has extended this support to every nth day, week or 
month, but the syntax has changed.  The last appointment becomes
  \s7/17/89 \e8/14/89 !2w xxx
which specifies every other week starting 7/17/89 and ending 
8/14/89.  Likewise !3d means every third day, and !3m means every 
third month.  Again, see Section 5.

     The NOTES file on the Ample Notice disk contains several 
lines beginning with ';' which are helpful for remembering the 
proper syntax for entering notes and appointments.  We recommend 
that you append this file to your own NOTES file, then delete the 
lines you don't want.  Assuming that your own NOTES are in C:\AN 
and the Ample Notice disk is in drive A, you can append the new 
file to your old one by entering 
  TYPE A:NOTES >>C:\AN\NOTES
at the DOS prompt.


Using AN on a Floppy Disk System

     If you don't have a hard disk, you should install Ample 
Notice on a bootable floppy.  Prepare such a floppy with the DOS 
system and any other files required during booting, then run 
ANSETUP from the Ample Notice disk.  Finally, copy your old NOTES 
file onto the new Ample Notice work disk and edit it as described 
above.

-----------------------------------------------------------------

As always, the complete manual for Ample Notice is included on 
disk.  If you are a registered user of a previous version you can 
obtain the new manual for $3.  If you are not a registered user 
we encourage you to support Shareware; see Section 11 of the 
manual or enter AN -I for details.

```
{% endraw %}

## FILE0872.TXT

{% raw %}
```
Disk No:  872                                                           
Disk Title: Ample Notice Appointment Calander                           
PC-SIG Version: S1.6                                                    
                                                                        
Program Title: Ample Notice                                             
Author Version: 1.31                                                    
Author Registration: $30.00                                             
Special Requirements: None.                                             
                                                                        
AMPLE NOTICE is a calendar and alarm clock program that helps organize  
your schedule of appointments.  Appointments and notes are entered into 
a standard text file in any of a variety of simple formats.  Each day,  
you view a calendar of commitments taken from this file.  This text file
can be edited from within the program or from an ASCII wordprocessor.   
                                                                        
Appointments that include a time can automatically set a pop-up alarm   
clock to notify you at a given advance interval.  Print a specified     
range of dates to keep track of your appointments while away from your  
computer.  These can be in a variety of print styles including a        
``tiny'' option of very compressed listings for your wallet or purse.   
You can also print a calendar for any range of months for a particular  
year.                                                                   
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## INSTALL.DOC

{% raw %}
```
     For most computer systems typing ANSETUP will install Ample 
Notice satisfactorily.  If you run into problems (for example if 
you have DOS 3.0, which has bugs that surface in batch files) you 
can install the package yourself. 

     Installing Ample Notice is simply a matter of putting a few 
files where DOS can find them.  If you're installing onto a 
floppy, you will probably be content to put all files in the root 
directory; if you have a hard disk, we recommend putting all Ample 
Notice files in a subdirectory called \AN.  

Here is the procedure:

1. Copy the files AN.EXE (the program itself), the NOTES file, 
   ALARM.COM (the pop-up alarm clock), and ANINST.EXE (a program 
   for changing AN's default colors, etc.) to the appropriate 
   disk/subdirectory. 

2. Edit your AUTOEXEC.BAT file so that AN.EXE's directory is in 
   your DOS PATH and so that ALARM is run by AUTOEXEC.BAT.  You 
   can do this automatically by typing ANINST followed by the 
   location of AN.EXE; for example, 
     ANINST C:\AN
   If you want to do this editing yourself instead, here's how: 
   Put the directory containing AN.EXE in your DOS PATH.  
   For example, if this file is in C:\AN, then you should add 
     ;C:\AN
   to the end of the line starting with PATH if there is one; if 
   there is no PATH line in AUTOEXEC.BAT then add the line 
     PATH \;C:\AN
   Following the PATH line add the line
     ALARM
   
The changes you make will take effect the next time you boot your 
computer. 

```
{% endraw %}

## OUTSIDE.DOC

{% raw %}
```
                                     OUTSIDE
                   A program for addressing envelopes sideways
       
                             (c) 1987 by Mark Harris
                              All rights reserved.
       
            OUTSIDE is a program which prints addresses sideways so that
       envelopes can fit in a standard dot matrix printer.  The addresses
       can be captured from the screen or printed directly from a file.
       
            OUTSIDE is included with Ample Notice, a Shareware package
       from Granny's Old-Fashioned Software.  The registration cost is
       $30 and includes the current disk, a printed manual, a coupon for
       an update disk and telephone support.  To register, phone (with MC
       or VISA) (704) 264-6906 or mail payment to Granny's Old-Fashioned
       Software, Rt 4, Box 216, Boone, NC 28607.
       
            OUTSIDE works with Epson-compatible printers.  We will
       support other types for registered users; contact Granny for
       details.
       
       
       Using OUTSIDE in the screen mode.
       
            One way to print an address is to capture it from the screen.
       For example if the address is contained in the file MYFILE then
       you can enter TYPE MYFILE and then stop the listing of the file
       with <Ctrl C> or <Ctrl Break> to 'freeze' the address on the
       screen.  Then type OUTSIDE; the screen will not be changed except
       for an option summary at the upper right-hand corner and the
       positioning of the cursor at the upper left.  Printing the address
       involves marking the upper left and lower right corners of the
       appropriate text.  Use the arrow keys to move the cursor and the
       space bar to mark the upper left, then move the cursor to the
       bottom right and press the space bar a second time to mark the
       block.  You will be shown the address selected and asked to verify
       that it is correct; if not, the screen will return to its original
       appearance and you can try again.  If you approve of the address
       you will be asked for the starting column for printing (with a
       default shown in brackets).
       
            The envelope will be printed in the following orientation:
       
            ----------------------------------------
           | stamp |                                |
           |       |                                |
           |-------                                 |
           |                                        |
           |                                        |
           |                   1  2                 |
           |                   s  n                 |
           |                   t  d                 |
           |                         e              |
           |                   l  l  t              |
           |                   i  i  c              |
           |                   n  n  .              |
           |                   e  e                 |
           |                                        |
           |                                        |
           |                                        |
           |                                        |
           |                                        |
           |                                        |
           |                                        |
            ----------------------------------------
                               ^
                               |
       
       The arrow points to the column at which printing will begin; you
       have a lot of flexibility in how to position the envelope so long
       as you accurately communicate the starting column.  Most printers
       have a guide with columns 1 - 80 marked; if yours doesn't then you
       will need to experiment a little and make your own markings on
       your printer.  The value you enter in OUTSIDE is the column
       relative to the left side extreme of your printer, not the left
       side of the envelope.  Printing will begin as soon as you complete
       the entry.
       
            You can get help when using OUTSIDE by pressing 'H' or the F1
       key.  You can exit the program at any time by pressing <Esc>.
       
       
       Using the file mode.
       
            If you want to print several envelopes you may find the file
       mode more convenient.  Create a file in which addresses are
       separated by one or more blank lines; for example:
       
       Mr. Tom Worthington
       153 Main St.
       Wilkons, PA 34890
       
       George Harrington
       5890 N. Louise Lane
       Oklahoma City, OK 73108
       
       How you create the file is up to you - you can have your database
       management program write it or you can enter the text directly
       with a word processor.  Assuming the file's name is MYFILE, type
       OUTSIDE MYFILE.  You will be shown each address in turn and asked
       whether you wish to print it or move on the next address.  Press
       'P' to print, 'S' to skip and <Esc> to exit the program.  For each
       address you will be asked for the starting column, with the last-
       used column as the default.
       

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0872

     Volume in drive A has no label
     Directory of A:\

    NOTES             2960  10-28-89   8:05a
    ANSETUP  BAT      2319   7-26-89   6:54a
    GO       BAT       693   7-26-89   8:17a
    LQDEMO   BAT      1153   7-21-89   9:29a
    ALARM    COM      2737   2-04-89   3:06p
    FIXCLOCK COM        82   8-30-88   8:40a
    GETANS   COM       189   7-19-89   4:33p
    OUTSIDE  COM     19331   8-15-87   9:02a
    PAGE     COM       350   7-26-89   8:20a
    PRINTMAN COM       768   6-20-88   8:19a
    TIMER    COM       240   9-15-86   8:43a
    LQDEMO   DAT    103055   7-21-89   8:53a
    AN       DOC     66243   8-30-89   8:23a
    AN12TO13 DOC      5341   7-23-89   1:26p
    INSTALL  DOC      1545   7-19-89   7:15p
    OUTSIDE  DOC      5374   8-02-87   8:33a
    AN       EXE     81596   5-17-90  12:55p
    ANINST   EXE     20172   3-05-90   4:09p
    READ     ME      10329   5-17-90   6:48p
    FILE0872 TXT      2073   7-10-90   1:46p
           20 file(s)     326550 bytes
                           24576 bytes free
