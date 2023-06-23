---
layout: page
title: "PC-SIG Diskette Library (Disk #1242)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1242/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1242"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "HAL9000"

    Hal is back and he's in charge of your system! Hal, the mutinous,
    homicidal computer from the movie "2001, A Space Odyssey" will keep
    you organized and on schedule with unnerving prompts like, "I'm
    sorry, Dave, but ..." He'll not only tell your fortune, he'll fill you
    in as to what happened historically every day.
    
    HAL9000 is an almanac, philosopher, clock/calendar, and a memo calendar
    all rolled into one. He comes complete with sound track music from the
    movie. When invoked, he displays time and date, what famous birthdays
    occur that date and a humorous, informative quotation. The opening
    screen can display a short memo the user designated for that date.
    HAL9000 has a separate pop-up screen to track appointments, and
    another screen displays a three month calendar.
    
    To use the Almanac, enter any date and HAL will respond with what
    happened on that date in history. The Fortune Cookie generates an
    electronic fortune based on your sex and birth date.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1242.TXT

{% raw %}
```
Disk No: 1242
Program Title: HAL9000
PC-SIG version: 1

Hal is back and he's in charge of your system!  Hal, the mutinous,
homicidal computer from the movie "2001, A Space Odyssey" wants to keep
you organized and on schedule with unnerving prompts like, "I'm sorry,
Dave, but ..."  He'll not only tell your fortune, he'll cue you in as to
what happened historically every day.

HAL9000 is an almanac, philosopher, clock/calendar, and a memo calendar
all rolled into one.  HAL9000 comes complete with soundtrack music from
the movie.  When invoked, he displays time and date, what famous
birthdays occur that date and a humorous, informative quotation.  The
opening screen can display a short memo the user designated for that
date.  HAL9000 has a separate pop-up screen to track appointments, and
another screen displays a three month calendar.

To use the Almanac, enter any date and HAL9000 will respond with what
happened on that date in history.  The Fortune Cookie generates an
electronic fortune based on your sex and birth date.

Usage:  Calendar Management and Trivia.

Special Requirements:  None.

How to Start:  Type GO (press ENTER).

Suggested Registration:  $20.00

File Descriptions:

HAL9000  EXE   HAL 9000 Program.
HAL9000  DOC   HAL Documentation.
HALCAL   EXE   HAL 9000 Calendar update program.
HAL9000  CAL   Data file.
HAL9000  DAT   Data file.
HAL9000  SCR   Data file.
HAL9000  WIS   Data file.

PC-SIG
1030D E. Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1988,89 PC-SIG, Inc.

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                   <<<<  Disk No 1242  HAL9000  >>>>                     ║
╠═════════════════════════════════════════════════════════════════════════╣
║                                                                         ║
║   To print the documentation, type:                                     ║
║                                                                         ║
║             MANUAL (press manual)                                       ║
║                                                                         ║
║   To run the program, type:                                             ║
║                                                                         ║
║             HAL9000 (press enter)                                       ║
║                                                                         ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## HAL9000.DOC

{% raw %}
```
               ***** HAL 9000 DOCUMENTATION ****

                Copyrighted by:  UTopia Software, 1986,1987
                 Programmed by: Tom Pesek
             Music Arranged by: Jeanne Perdue
              Version 3.0 ---- July 20, 1987


INTRODUCTION

     "Hello, I am your HAL 9000 computer."  This line
should be familiar to those of you who have seen the
1968 movie "2001 - A Space Odyssey" produced and
directed by Stanley Kubrick from a story by Arthur C.
Clarke. In memory of HAL and of "2001 - A Space
Odyssey", the first great special effects space movie, I
have written this program.

     HAL9000 is an almanac, a philosopher, a clock/calendar,
and a memo calendar.  I hope that you will find HAL to be as fun,
useful, and informative as I do.

     HAL makes the perfect hard disk intro screen. If you build
your Autoexec.bat file so that it calls your clock, then calls
HAL, you can walk away and get your morning coffee while your
computer goes through it's self test. When you return, HAL's
friendly face will greet you with today's Almanac.

     The new Almanac feature, <F6> key, allows you to enter a
date, your birthday perhaps, and HAL will tell you what happened
on that date. HAL will also show a calendar of that month and
year. What day were you born on? Do you know? HAL does, and he
will tell you!

     The Fortune Cookie Feature is also new to version 3.0.
Choose <F5>, enter your sex and birth date and HAL will print
your electronic Fortune Cookie. Confucius say ....

     Calendars, they're never around when you need them, right?
Well not when you are in HAL. HAL is loaded with them. You may
find two, in particular, useful. <F5> displays 3 Calendars side by
side with the current month in the middle. <F6> displays a Key
Calendar of the current month. You can move to other months by
using the arrow keys. Other options display appropriate calendars
as needed.

     HAL also has a daily memo calendar. You can enter a note, up
to 35 characters for a date and HAL will display it in the upper
window just below the time on that date. In addition, the memo
will be displayed when you ask for appointments, <F10>. These
entries can be updated using the <F9> update feature or the
HALCAL utility program. If you become a registered user, you can
get HAL9000 Version 4 which will allow you to put more than one memo
per date. I hope to release it soon.

HAL9000 DOCUMENTATION ---- Page 2


SETTING UP HAL

     HAL can be invoked using the following command syntax:

          HAL9000 [/S/M]

Bracketed items are optional switches. They are not required to
make the program function. IF /S is included HAL skips the intro.
You will want to include it in Autoexec.bat files. If you include
/M HAL sets his clock to 24 Hour Military time format. (AM/PM
format is the default).

     HAL was designed to be a welcome screen for your IBM or
IBM compatible computer with a monochrome or a color
monitor.  To fully utilize HAL, you MUST set your computer's
TIME and DATE before you run HAL. This can be done by
including a TIME and DATE statement in your Autoexec.bat
file or by including a call to your clock card if you have
one. Check your clock card manual for correct syntax. If HAL
senses that you have failed to set the correct date  (ie
date < 1986), he will prompt you for the date and time
before continuing.

     As provided, the HAL program has a rather lengthy
introduction including animation and music. Please watch it at
least once. It includes "Also Sprach Zarathustra" by
Richard Strauss. This song was the introductory music
for the movie "2001 - A Space Odyssey". I think that you will
enjoy it. Thereafter you may choose to bypass it. This can be
accomplished by either pressing any key while the program is
loading (you have to be fast) or by including the switch /S on
the command line. This will bypass the introduction and go
directly to the HAL information screen. A sample AUTOEXEC.BAT
FILE made with an editor like EDLIN on the DOS disk or by typing
it in from the console using the COPY CON method. It should
look similar to this:

ECHO OFF               or     ECHO OFF
ASTCLOCK                      DATE
HAL9000 /S/M                  TIME
                              HAL9000

HAL9000 DOCUMENTATION --- Page 3


FILES ON THE DISK

     HAL consists of 6 files and 1 utility files.
These files must be located on the same sub-directory of
a hard disk or the same floppy disk in order for HAL to
function correctly. The files are as follows:

HAL9000.EXE --- The HAL Program.

HAL9000.DAT --- The HAL Almanac data file.

HAL9000.WIS --- HAL's words of wisdom data file.

HAL9000.CAL --- HAL's appointment calendar. It currently
                contains the 1987 holidays. It is user
                updatable.

HAL9000.SCR --- HAL's screen image.

HAL9000M.SCR -- HAL's introduction screen for Monochrome
                monitors. (not used for color monitor systems)

HALCAL.EXE --- Utility to update and add dates in HAL's
               appointment calendar, create a new HAL9000.CAL
               file, to print the dates in the calendar, and
               to delete selected ranges of dates in the database.
               The HALCAL file is not needed for HAL9000 to function
               correctly.

FEATURES

Hal's Main Window

     HAL's main window display is divided into three windows. The
upper left window contains the date, day of the week and the day
of the year. The upper right window contains the current time
(either in military or standard AM/PM format), and the memo
window. If you have a memo entered in the calendar for today's
date it will show here. The clock sounds a tone on the hour. The
lower window contains HAL's greeting, the almanac entry for
today, and HAL's words of wisdom. IF the display remains on the
screen for more than 30 seconds, the words of wisdom will change.
The Almanac entry contains events of note for this day, and
usually contains birthdays for the date if there is room.

HAL9000 DOCUMENTATION --- Page 4

FEATURES (Cont.)

Hal's Pop-up Windows

<F1> -- Help

     The Help Key displays a window containing a list of the
     other 6 function keys. Press <ESC> to remove the window from the
     screen.

<F5> -- Fortune Cookie

     Let HAL be your electronic fortune cookie! Fill in your
     Birthdate and age, and The Great HAL (he sees all, he knows
     all) will print your electronic Fortune cookie. Press <ESC>
     to remove window from the screen.

<F6> -- Almanac

     What happened on your birthday? What famous people share
     your birthday? What day were you born on? These are but a
     few of the questions HAL can answer. Enter the date you wish
     to know (MM/DD/YYYY). IMPORTANT!--Be sure to use this format
     and include leading zeros if necessary, ie 01/05/1901 (for
     January 5, 1901). Press <ESC> to remove window from the
     screen.

     NOTE: Years before 1753 are not valid!
     This program uses the Gregorian Calendar. It was introduced
     by Pope Gregory XIII in 1582. England and the Colonies used
     the Julian calendar prescribed by Julius Caesar until 1752,
     however. The Julian calendar lost 1 day every 128 years when
     compared to the position of the earth relative to the sun.
     By 1752, the Julian calendar was 11 days behind the
     astronomical year. In September, 1752, England recouped the
     11 days by shortening the month to 19 days and began using
     the more accurate Gregorian calendar. Thus the 1753 limit.

<F7> -- 3 Calendars

     This option displays 3 calendars side by side, with the
     current month's in the middle. Press <ESC> to remove window
     from the screen.

HAL9000 DOCUMENTATION --- Page 5

FEATURES (Cont.)

<F8> -- Keycal

     This option displays a calendar for the current month. By
     using the arrow keys located on the right side of the
     keyboard, you can advance and retreat months and years to
     other months of interest. <UP ARROW> advances one year per
     keystroke. <DOWN ARROW> retreats one year per keystroke.
     <LEFT ARROW> retreats one month per keystroke. <RIGHT ARROW>
     advances one month per keystroke. Press <ESC> to remove
     window from the screen. REMEMBER: Years before 1753 are not
     valid! (See Almanac Section above for explanation.)

<F9> -- Update Appointments

     This key allows you to add or change entries in your memo
     calendar. You can have one 35 character entry per date in
     version 3. You can enter the full date (MM/DD/YYYY) or just
     the month and day (MM/DD). IMPORTANT!--Be sure to use this
     format and include leading zeros if necessary, ie 01/05/1901
     (for January 5, 1901). If you enter just the month and day,
     the current year is assumed, and entered. Birthdays,
     anniversaries, and special days should be entered with their
     correct years or with the year set to 0000 (ie 01/05/0000)
     This will prevent them from being erased when you use the
     erase utility in HALCAL to erase dates from the current year.

<F10> -- Appointments

     This key retrieves the appointment calendar. It displays any
     appointments for the previous 5 days (in red), the current
     date (in white), and the next 30 days (in black). If you
     have more than 13 entries for this period, only 13 entries
     are displayed. Press <ESC> to remove window from the screen.

Windows

     HAL uses pop-up windows in all of the features listed above.
You may pop up several windows at once, if you desire. They will
just overlay each other. The windows will then pop off one by one
in the reverse order they were added each time the <ESC> key is
pressed. Once a feature is called, its key becomes inactive until
it is removed from the screen. So if you call up CAL3, for
example, then call FORTUNE COOKIE, and then try to call CAL3
again, CAL3 will not work. Instead press <ESC> to remove FORTUNE
COOKIE to reveal CAL3.

HAL9000 DOCUMENTATION --- Page 6

HALCAL UTILITY PROGRAM

     The HALCAL calendar utility is a menu-driven utility
which allows you to create, add to, delete from, and print your
HAL9000 calendar database.

DELETE ALL OR PART OF CALENDAR ENTRIES

This feature allows you to delete all or part of the dates in your
calendar database. If you choose all, you will be warned that all dates
are about to be deleted and given one last chance to change your mind.
If you choose the partial delete, you can choose a range of dates to
delete. IMPORTANT!--Be sure to use the mm/dd/yyyy format and include
leading zeros if necessary, ie 01/05/1901. The starting date must be
before the ending date or no data will be deleted. If you have entered
your birthdays with their correct years or with the '0000' year feature,
they won't be deleted when you delete a year (01/01/1987 to 12/31/1987
for example.)

  UPDATE YOUR PERSONAL CALENDAR

This feature allows you to add or change entries in your memo
calendar. You can have one 35 character entry per date in
version 3. You can enter the full date (MM/DD/YYYY) or just
the month and day (MM/DD). IMPORTANT!--Be sure to use this
format and include leading zeros if necessary, ie 01/05/1901
(for January 5, 1901). If you enter just the month and day,
the current year is assumed, and entered. Birthdays,
anniversaries, and special days should be entered with their
correct years or with the year set to 0000 (ie 01/05/0000)
This will prevent them from being erased when you use the
delete utility in HALCAL to erase dates from the current year.
Use the <END> key to leave this optin and return to the menu.

PRINT THE CALENDAR DATABASE

     You can print the dates in the Calendar by using the print
option. This feature is designed to work with an Epson or Epson
compatible printer. Follow the screen prompts.

EXIT TO DOS

     As you probably suspect, this feature returns you to the DOS
operating system.

HAL9000 DOCUMENTATION --- Page 7

ACKNOWLEDGEMENTS

     HAL has been a difficult project which has required
thousands of man-hours and I couldn't have finished it
without the help and support of my friends. First, I
would like to thank my girlfriend, Audrey for putting up
with me during this project. I would also like to thank
Jeanne Perdue for arranging the music for me, and Bruce
Wehrle, Meridith Liles, Dexter Williams, Mark Ulrich, and
Daisy Kalfoglou, and Otto Lewandowski for helping me to beta-
test the program.

     I have scoured many sources to compile the
information contained in this program. The entries in
the Almanac portion of HAL were obtained from calendars,
the 1986 World Almanac, the World Book Encyclopedia,
The Day by Day Trivia Almanac, various other books, TV,
magazines, and NASA information packets.  Similarly, the
words of wisdom which HAL spouts each session have been
collected from various books including "The Great
Quotations", magazines, and movies.  I hope that you enjoy
the hundreds of hours of work that went into making HAL what
it is today.
    This software incorporates routines from KEYTOOLS2
Programming Aids, copyright 1983, 1984, under a license from
KEY-1 Computer Software Co. These routines have been
included under the terms of their license agreement. This
software also contains windowing and calendar routines from the
BASWIND2 Programming tools by Dave Evers. HAL9000 is copyrighted 1986,
1987 by Utopia Software and is being released as shareware. You
may copy and distribute it as long as you only copy and
distribute the entire program in its original, unmodified form
and do not charge for the copies.

     If you have found this program useful or enjoyable,
and would like to obtain additional utilities which
allow you to edit the Almanac and to edit the Words of Wisdom,
or if you would like to obtain the file structures for
these databases so that you can access them from your
own programs, please send a donation of $20 (Texas residents
add $1.60 State Sales Tax) to:

               ATTENTION: HAL 9000
               UTopia Software
               11603 Trailmont
               Houston, Texas 77077

     Your donation will also put you on my mailing list.
You will be notified of future enhancements to HAL including the
multiple entry for each day feature and future programs by UTopia
Software.  Comments and suggestions are welcome and should also
be sent to the above address.

                                       TOM PESEK


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1242

     Volume in drive A has no label
     Directory of A:\

    FILE1242 TXT      1569   1-10-89  11:18a
    GO       BAT        38  10-19-87   3:56p
    GO       TXT      1002  12-13-88   3:25p
    HAL9000  CAL     16512   1-12-88  12:58p
    HAL9000  DAT     68480   9-29-88   6:04p
    HAL9000  DOC     14753  10-23-88  10:48p
    HAL9000  EXE    104296   7-21-87  10:47a
    HAL9000  SCR      4096   6-26-87   6:30p
    HAL9000  WIS     17792   6-25-88   6:29a
    HAL9000M SCR      4096   6-26-87   6:31p
    HALCAL   EXE     71530   7-17-87  12:10a
    MANUAL   BAT       147   6-08-88   3:02p
           12 file(s)     304311 bytes
                           13312 bytes free
