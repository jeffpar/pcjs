---
layout: page
title: "PC-SIG Diskette Library (Disk #3435)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3435/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3435"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## CWK49.DOC

{% raw %}
```
           >> CLOCKWORK << version 4.9, January 1993


Maintains a super accurate system clock without a modem and long distance
calls and without any other costly hardware.

Copyright (c) 1992 by Pavel Otavsky
26 Barberry Hill, Woodstock, Vermont 05091-1269

CLOCKWORK consists of two files: CWK49.DOC and CWK.EXE.

                   PROGRAM FEATURES:
   *** Automatic adjustment of the system clock with a very high degree of
accuracy - one second per week is achievable!
   *** System clock adjustment by entering the amount of correction.
   *** Switch between Daylight, Standard, Universal and Local Meridian time
as well as change of time zone while traveling across time zones and date
line.
   *** Display of Julian day and day of the week for any date.
   *** Days between dates calculator. The values entered are preserved for
editing or reuse.
   *** A menu system for easy setup and use.
   *** Time setting with accuracy of 1/18 second in spite of the "Real Time
Clock" resolution of 1 second (type 2 systems).
   *** Easy and accurate comparison of system time to a standard, easy
generation of the adjustment value.
   *** Selection of screen color for better readability on different
displays.
   *** On line help.
   *** Conversion from unregistered to registered installation. Elimination
of shareware messages and delays by entering a registration code.
   *** Recording of system clock adjustment history, if desired.

                   UPGRADE TO VERSION 4.9
   No special action is required if upgrading from 4.1 or higher. Just copy
CWK.EXE and CWK49.DOC from the distribution disk to replace the old
version, however it is recommended to start a new clock measurement cycle
and elect to keep the old adjustment factor.

                   INTRODUCTION
   Every clock's speed is different from the standard. If the clock speed
is known and remains constant, it is possible to adjust it at any time and
maintain a very high degree of accuracy. The clock speed can be determined
quite accurately if the measurement is averaged over a long time.
   On a personal computer it is possible to apply system clock corrections
at convenient times and achieve accuracy that is much better than that of
clocks normally provided. The CLOCKWORK utility performs a system clock
adjustment automatically at startup if invoked by the AUTOEXEC.BAT or at
any other time if run manually or called by some other program.

                   COMMAND LINE FORMAT
   The command line format for CLOCKWORK is as follows:
CWK {1|1a|2|2a} [filespec]
{|} One of the four command line arguments must be always used.
    CWK 1 will run the program for type 1 systems.
    CWK 1A will perform the automatic clock adjustment.
    CWK 2 will run the program for system type 2.
    CWK 2A will do the automatic adjustment on type 2 systems.
[ ] The optional filespec describes the auxiliary data file. It should be
    used only to override the environment variable CWK (see below). It
    can be drive, path and file name (e.g. a:\clockdir\clocdata.dat),
    only path and file name or only file name. If no filespec is given
    and CWK not defined, the default is CWK1DATA.DAT or CWK2DATA.DAT,
    respectively, placed in the current directory.
The command line is not case sensitive.
                   TYPE 1 OR TYPE 2 SYSTEM CLOCK?
   There are two types of system clocks commonly used: the first is an add-
on (on an I/O board, or memory board) found usually on a PC/XT or
compatible and requires a software utility both to set (e.g. SETCLOCK.COM)
and to retrieve in order to provide time and date for the system when
starting up (e.g. GETCLOCK.COM). With CLOCKWORK you never have to use the
SETCLOCK.COM or its equivalent - even after you change the battery!
   The second type, called Real Time Clock, usually found on the PC/AT, 286
and higher or compatibles, is simply read or set by the DOS commands
directly. If you are not quite sure which one you have, you may want to
perform this test: Change the DATE using the DOS routine. Reboot the system
and note whether the date change is still in effect. If the change is
permanent, the system is type 2.

                   A TRIAL RUN OF CLOCKWORK
   It can be run from the floppy disk. Write protection of the floppy will
cause an error and abort the program. If that happens, remove the write
protection and restart. Start CLOCKWORK by typing either cwk 1 or cwk 2, at
this point it does not matter which. Then you can try out any of the
functions and features and set your system clock. The menu items have long
titles in order to describe what they do.

                   SUGGESTED SETUP
   Step 1: Create a new directory on the c: drive, called CWK (md c:\cwk).
   Step 2: Copy all cwk*.* files from the distribution disk to this
directory (copy a:cwk*.* c:\cwk).
   Step 3: Edit the AUTOEXEC.BAT file. Place these lines after any system
setup and memory management commands but before any shell or Windows
startup:
...
set cwk=c:\cwk
c:\cwk\cwk ?a
...
For type 1 system substitute 1 for ?.
For type 2 system substitute 2 for ?.
   Step 4: Change to the directory CWK (cd \cwk) and start the program (cwk
1 or cwk 2) Change to the menu Mode and select <d> if Daylight saving time
is in effect. Only for type 1 systems: Proceed to menu Setup and press <c>.
When prompted enter the command that was used to set your DOS clock from
the battery clock (e.g. c:\utility\getclock). Exit the program, or continue
with the advanced setup.

                   ADVANCED SETUP
   This enables you to take advantage of additional features:
   Step 5: Restart the program or if you did not exit, move to the menu
Setup and select item <z> to enter your time zone of residence.
   Step 6: If you are interested in knowing the local time at the
geographic longitude of your residence, or at any longitude on the globe,
select item <l> and enter the longitude of interest.
   Step 7: Select item <s> in order to change the appearance of the screen,
by entering the color code from the screen sampler.
   Step 8: Select <h> in order to enable recording all system clock
adjustments in the HISTORY.CWK file.
   Step 9: If you have your user code, select <r> to convert the
installation to a registered one.

                   PROGRAM SCREEN DESCRIPTION
   The first line on the screen shows the version of CLOCKWORK running,
type 1 or type 2, and the location and name of the data file. The top
border of the display box, above the running clock, has the indication of
system time mode (Standard, Daylight, Universal or Local). Next line shows
the system date and time and is normally running. Below that is the
adjustment indicator line that shows the difference between system time and
adjusted display time in days or seconds. The adjusted display line is also
normally running and is identical to system time. Above the adjusted
display is a block that indicates which date/time element is selected. The
lower box frame will have the indication of adjusted display time mode if a
specific time mode is selected from menu Display.
   Below the display box is the menu selection box and instructions for
moving between the menus and selecting menu items.

            CLOCK SPEED MEASUREMENT AND ADJUSTMENTS
   To determine the clock speed, you must correct it twice, best with
several days between corrections. The first time is the beginning of the
clock measurement cycle (F5), the second time is when the clock adjustment
factor is calculated (F8).
   Adjusting the computer clock using CLOCKWORK is done in two steps in
order to make it easier and more accurate. The first step is to adjust the
"ADJUSTED DISPLAY". The second step is to apply the adjustment to the
system clock.
   Freeze the display on the time signal using the space bar and then make
the adjusted display exactly what it should have been. While the display is
frozen, select time or date elements using the horizontal arrow keys and
change them with the vertical keys. Or press the <e> key and enter the
amount of adjustment directly in seconds.
   If your response to the time signal did not seem right, unfreeze the
display and repeat this on the next time signal. The system clock is not
affected by manipulating the adjusted display.
   After the lower display is correctly adjusted, you can adjust the system
clock and start measuring its accuracy: Select menu Clock and use F5 to
adjust the system and indicate the start of a new measurement cycle. You
are given an option to input the adjustment factor. See General Notes below
for adjustment factor definition. (If you determine and enter a value of AF
now, automatic adjustments other than zero will be made when you reboot.)
Then select the Quit menu and exit the program. <Esc> always selects menu
Quit.
   Some time later adjust the display again according to your time signal
and complete the process with F8. The clock speed will have been measured
and the new AF calculated. Subsequent automatic clock adjustments will be
using the latest value of adjustment factor.
   The clock adjustment and accuracy measurement (display adjustment and
F8) should be repeated at a later date to improve the accuracy of the
adjustment factor by averaging over a greater length of time. If an
incorrect adjustment was made, simply adjust the clock again - the program
accumulates repeated adjustments.
   F2 and F4 perform only system clock adjustments. F2 causes the
adjustment to be accumulated and figured into the clock speed measurement
but does not cause immediate recalculation of the adjustment factor. F4
acts as a sort of time zone change and has no effect on adjustment factor
calculation.

              IN BRIEF, STEP BY STEP:
First time:
   1. Listen to time signal, freeze the display, remember the time.
   2. While frozen, make the lower display show the time you remember.
   3. Move to Menu Clock, press F5.
   4. Exit program.
Second time, several days later:
   1. Freeze the display, remember the time.
   2. Make the display show the time you remember.
   3. Move to Menu Clock and use F8.
   4. Exit program.
Third and subsequent times: Same steps as second time.

                   OTHER UTILITIES AND FUNCTIONS
   HELP TEXT:
   This file can be viewed by pressing F1 key at any time while the main
screen is active.
   DISPLAY MENU:
   The adjusted display can show any of the four time modes after the time
zone and local meridian are filled in under Setup. The appropriate
difference in time is shown. Also the display can be used as a perpetual
calendar and as a calendar calculator. After pressing the <e> key the
adjustment value can be entered in various units, and then changed using
the arrow keys.
   UTILITIES MENU:
   The <a> key performs automatic system clock adjustment on demand. It
performs exactly the same function as CWK 1A or CWK 2A would if entered on
the command line.
   The <d> key selects a days between dates calculator. The entries in this
calculator must be as shown, either a three field date, or a one field
number. Months must be from 1 to 12, days from 1 to 31. Extra days added by
mistake to shorter months are regarded as days of the following month. When
using the calculator again during the same session, the previously used
values are presented for reuse or can be changed.
   The <h> key starts a scan of the clock adjustment history file. Each
line in this file shows the date, time, adjustment in seconds and the
Adjustment Factor in effect up to that time. (The AF is recalculated AFTER
the function F8 was used).
   The <t> key allows for entering the number of time zone lines or date
line crossed if traveling. There is no need to remember whether to add or
subtract hours, just enter the number of time zone lines crossed and
observe the sign of the number and direction of travel convention. The
system clock is adjusted and all data corrected for the new time zone of
residence.
   The <v> key shows some of the contents of the data file, each item
provided with a description. This is very useful when you want to see how
much correction the clock needed, when it was last updated or want to
follow the progress of the averaging process. When the program is first
installed, the initial value of any date is Julian day 0, i.e. -4713/11/24,
time 0:0:0, AF is 1x10^300 and adjustments are zero (1d+300 is a double
precision exponential notation).
   MODE MENU:
   The Mode menu selections adjust the clock and all stored data. The
system clock can run in any one of these modes: Standard (winter) and
Daylight (summer) are obvious. Universal Time Coordinated (UTC) formerly
called Greenwich Mean Time, is the time for time zone centered on the
Greenwich meridian. Universal time is useful for following shortwave
broadcasts, astronomical events, etc. Local Meridian Time is useful in
astronomy. Rise, transit and set of celestial bodies happen on Local
Meridian Time. These phenomena happen "on time" only in the middle of time
zones and when standard time is in use.
   SETUP MENU:
   The default values in a fresh data file make Universal and Local
identical to Standard time until the values for time zone of residence and
longitude of residence or location of interest are entered using Setup menu
keys <l> and <z>.
   The <h> key allows you to enable or disable recording of the adjustment
history. This is recorded in the file named HISTORY.CWK which is placed in
the directory defined by the environment variable cwk. Even if selected,
the recording takes place only when the variable cwk is defined.
   The <s> key shows display combinations of foreground and background
given by the default palette. You can select from these the best
combination for your monitor.
   The <r> key enables entry of user registration code. This code will
change your installation to a registered installation. The program will
then skip the introductory screen, pause, delays and registration reminders
and it will show the registered user's name.

                   GENERAL NOTES
   There are no special system requirements. The program can be installed
on the hard drive or a startup diskette. It can be invoked by a batch file
that is run occasionally. It can be used every day or once a month. There
is no limit on the amount of clock adjustment. After a long time it will
simply apply a larger correction. Ambient temperature and computer case
temperature effects will be averaged over a long time.
   This program is not a TSR (Terminate and Stay Resident). It only
corrects the clock when you want it. It does not use any memory or
processor time when not being used.
   Once you begin using this utility, do not set the clock by using the DOS
commands TIME and DATE or any other utility or shell programs. Those
adjustments would not be accounted for! Also, for the same reason, do not
adjust the battery clock by the clock setting utility on type 1 systems. No
matter how far off the battery clock is, CLOCKWORK will adjust the system
clock correctly. (Read more under Troubleshooting.)
   Every automatic system clock adjustment is followed by an announcement
of the amount in seconds. On type 2 systems this number is proportional to
time elapsed since the previous adjustment. On type 1 there are two
numbers, one is proportional to time elapsed since the clock measurement
was started (F5) and the other is a constant offset, the amount of
adjustment made when clock measurement started (F5). The actual amount of
adjustment of the DOS clock during automatic (cwk 1a) adjustment is the sum
of the two. That is the number recorded in the history file.
   CWK 2 tests whether the BIOS (Real Time) Clock is present and
automatically performs different clock setting operations.
   The Real Time Clock on the CMOS chip (BIOS) has one second resolution -
it returns only whole seconds and can be only set to whole seconds.
Measuring any time interval with such a device gives an uncertainty of up
to 2 seconds! DOS is a better timekeeper with 18.2 "ticks" per second.
CLOCKWORK uses the DOS clock resolution in setting the system clock by
using a special technique that prevents the granularity of the BIOS clock
on the CMOS chip from causing errors upon startup and after setting the
time. CLOCKWORK provides information about the relationship between the DOS
and BIOS clocks in the file viewing utility.
   The adjustment factor (AF) is a number of seconds after which one second
correction is required. AF=7000 means that after 7000 seconds one second
must be added. AF=-15000 means that after 15000 seconds one second must be
subtracted. AF=-1 would cause the computer to boot up always with the same
system time!
   It should be noted that both system types, 1 and 2, have two clocks. The
primary one is the Real Time Clock on the CMOS chip on the ATs or the add
on clock on the PCs and XTs. The secondary one is the DOS clock that runs
from the CPU oscillator only when the machine is on and must be always set
when booting up, manually or automatically. The clocks can be quite
different in speed and it leads to interesting interactions. Example: One
of the users has an AT with a slow Real Time Clock (on the CMOS chip), -8
seconds per day, and a very fast DOS clock, 30 seconds per day,
approximately. CLOCKWORK adjusts the Real Time Clock by setting it ahead by
the amount corresponding to 8 seconds per day, but observing the DOS clock
by showing time in the prompt ($t) leads to a different conclusion! The
program aligns the DOS clock to the BIOS clock when it starts, (cwk 2 or
cwk 2a). That always sets his DOS clock back, but any automatic
(proportional) adjustment sets the BIOS clock forward and aligns them
again. As mentioned above, the two clocks are aligned and exact only after
the automatic adjustment was made, by cwk 2a or from the program menu.
   For best results make sure that the system clock adjustment is quite
close to your reference when starting the clock speed measurement (F5). The
adjustment that is done using function F8 is less critical because a small
error can be corrected when repeating F8 later. Long term averaging yields
a very accurate AF.
   It is recommended to avoid adjusting the system clock while the date
change is expected. Do not perform clock adjustments so close to midnight
that the change of date would occur during the process. A few minutes
before or after midnight should be O.K.
   Following are some of the ways of obtaining a time signal. Shortwave
radio WWV or WWVH on 2.5, 5, 10, 15, 20 MHz or CHU on 3.33, 7.335, 14.67
MHz. Many short wave radio stations give time signal on the hour (e.g. BBC
World Service). WWV or WWVH can be also heard by telephone: (303) 499-7111
or (808) 335-4363, respectively. The U.S. Naval Observatory, Washington,
D.C. time signal number is (202) 653-1800, or (900) 410-8463. Many areas
have local telephone numbers that give time, but the accuracy may not be
always guaranteed. Many AM and FM radio stations and TV stations come on
air with amazing accuracy and could be used as a time signal of sorts. Some
of them even give exact time explicitly. Of all these, the U.S. Naval
Observatory time service has the best format for use with CLOCKWORK, with
voice announcements every five or ten seconds, a beep every second and
different tone for every fifth second.

                   TROUBLESHOOTING
Problem: The computer appears to show correct time, but the date is off, it
lost one or more days.
Correction: The IBM and some compatible BIOS chips do not change the Real
Time Clock properly when rolling over midnight. This happens when the
machine is on, inactive but sitting in an application that does not make
time of day requests occasionally. It is not a problem with CLOCKWORK. Make
an exception to the general rules mentioned above and set the correct date
using the DOS command DATE. CLOCKWORK will adjust the system correctly
after that.
   If you have this problem and the above solution is not acceptable, try
to use one of the running clock displays that show in the corner of the
screen. These are TSR programs that should not take more than 2kBytes of
RAM. Some are in the public domain, some are shareware. Look for one that
allows turning off the display so it does not interfere with your program
screens and does not override your screen blanker, but keeps running in the
background.

Problem: CLOCKWORK makes reasonable corrections daily but an error remains
and correcting it keeps changing the adjustment factor gradually.
Correction: Replace the battery.

              CLOCKWORK REGISTRATION AND UPGRADE POLICY
   The idea of shareware is based on a balance of benefits maintained
voluntarily by the users and authors. The user can "try before buy" by
buying the distribution disks or downloading (paying for the telephone
connection).
   To buy the program proper means sending the user/registration fee to the
author. The registration fee is a fraction of prices paid for equivalent
commercial products and there may not even be any equivalent in the
commercial domain.
   Using unregistered shareware programs beyond the trial period is not
right. Having purchased the software that you keep using gives you more
than just peace of mind. There are certain tangible benefits to being a
registered user of this program, as described below.
   CLOCKWORK user/registration fee of $15.- provides the registered user
with these benefits:
1. Right to use the program beyond the trial period of one month. This is
very important, since CLOCKWORK is not public domain software or
"freeware".
2. User registration code. You receive your name - code combination when
you register or buy an upgrade. After entering this code under menu Setup,
the program will skip the introduction screen, pause, delays and reminders.
It will show your name as a registered user.
3. Technical assistance in installation and use. In recognition that any
user is a potential registered user, support is extended to all that
inquire. I can be reached by mail or by phone at 802-457-2654 between 7 and
9 p.m. weekdays and daytime weekends, Eastern Time.
4. Information about updates and upgrades. This information is mailed out
immediately upon release of a new revision, which is usually long before
the latest revision is incorporated in the shareware distribution catalogs.
5. Availability of the latest version directly from the author. Cost of
upgrade is $5.- + $5.- for postage and handling.
   Use the Registration Form that you can print out while running the
program to register as a new user. This form allows for user feedback and
input which is appreciated, but is not a condition for registration.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3435

     Volume in drive A has no label
     Directory of A:\

    CWK      EXE     97710   1-01-93  11:18a
    CWK49    DOC     23037   1-04-93  10:13p
    BROWSE   COM      2432  10-31-87  10:00a
    GO       BAT        35   3-05-93  12:15a
    SHOW     EXE      2040   9-12-88  10:48a
            5 file(s)     125254 bytes
                           34304 bytes free
