---
layout: page
title: "PC-SIG Diskette Library (Disk #848)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0848/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0848"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "JUDY THE MEMORY RESIDENT CALENDAR"

    We've all wanted a personal secretary to keep track of our appointment
    schedule for us.  Let PC-SIG introduce you to the answer to your wish:
    JUDY CLONE, a memory-resident desktop organizer that keeps your
    schedules and appointments for years to come.
    
    JUDY maintains the full-screen interactive calendar.  She takes
    appointments, has editing functions, makes hard-copy, and goes through
    your notes and records, doing the daily filing tasks.  She fills your
    computer's memory, does her job, leaves and then returns her space to
    the memory pool.  She even wishes you ``Happy Birthday'' when that day
    rolls around.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE0848.TXT

{% raw %}
```
Disk No:  848
Disk Title: Judy the Memory Resident Calendar
PC-SIG Version: S2

Program Title: Judy, the Memory Resident Calendar
Author Version: 2.0
Author Registration: $29.95
Special Requirements: None.

We've all wanted a personal secretary to keep track of our appointment
schedule for us.  Let PC-SIG introduce you to our answer to your wish:
JUDY CLONE, a memory-resident desktop organizer that keeps your
schedules and appointments for years to come.

JUDY maintains the full-screen interactive calendar.  She takes
appointments, has editing functions, makes hard-copy, and goes through
your notes and records, doing the daily filing tasks.  She fills your
computer's memory, does her job, leaves and then returns her space to
the memory pool.  She even wishes you ``Happy Birthday'' when that day
rolls around.

PC-SIG
1030D East Duane Avenue
Sunnyvale  Ca. 94086
(408) 730-9291
(c) Copyright 1989, 1990 PC-SIG, Inc.
```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                  <<<<  Disk #848 JUDY CLONE  >>>>                       ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To copy the documentation to your printer type;                         ║
║                             COPY JUDY.DOC PRN (press enter)             ║
║                                                                         ║
║ To install the program, type: INSTALLJ (press enter                     ║
║                                                                         ║
║ To start the JUDY CLONE program; type JUDY (press enter)                ║
║                                                                         ║
║ To load JUDY memory resident, type; JK (press enter)                    ║
║                                                                         ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## JUDY.DOC

{% raw %}
```

  JUDY Documentation Version 2.00


   ********** WHAT IS JUDY? **********

      I have lived with a Judy, a flesh and blood Judy, for many years now.
   She has made life a lot more pleasant and considerably easier. I'm kind
   of an absent-minded guy. My wife, Judy, is a very practical person. She
   manages to keep track of some things which elude me. I've come to depend
   upon her.

   What would happen if - God forbid!- we got divorced? The spiritual and
   romantic benefits of marriage would be hard to replace, but how about the
   nagging? Couldn't the constant reminders be performed by a computer?

   Of course, they would be performed less artfully than by my real Judy,
   but no less resolutely.

   Thus the genesis of JUDY, the Electronic Yenta.

   She shares some of my wife's better qualities:

     She never forgets:
   All your appointments and commitments for the rest of the century are in
   JUDY's memory. There can be a thousand appointments pending at any one
   time, and an unlimited number recorded in her logs.

     She'll go anywhere with you:
   As you use your computer, going from one piece of software to another,
   from one directory to another, from drive to drive, JUDY stays with you,
   waiting in the background, never losing her bearings.

     She's slim:
   Since JUDY is always at hand, she must always occupy some RAM. However
   she's kept her weight down to a mere 8K.

     She thinks fast:
   Any concurrent program requires a flicker of attention every so often.
   JUDY has been crafted to keep this flicker to a minimum. She uses less
   than one millisecond per second. (Your software will run better than
   99.9 percent of its normal speed.)


   ********** THE THREE FACES OF JUDY ***********

   JUDY consists of three software elements, which are distinct but
   interconnected. Any one can be run alone and be useful, but they are
   far more powerful together.  These three facets are  "JudyK", "JK"
   and the "Lookup Utility."  It might help to think of the first two,
   "JudyK" and "JK", as the conscious and subconscious mind: two very
   different aspects of the same personality. JudyK, whose thoughts are
   frontstage, is analogous to the conscious, while JK, running quietly
   in the background, approximates the subconscious.  As for the Lookup
   Utility, think of it as a special skill that enhances the use of the
   other two facets whenever you need it.
   Page 2


   JudyK is responsible for large displays and long-range views. Through
   JudyK, JUDY presents you with the full-screen interactive calendar, she
   takes appointments, has editing functions, makes hard-copy, and (invisibly
   to you) goes through your notes and records, doing the daily filing tasks.
   JudyK fills your computer's memory, does her job, them leaves, returning
   her space to the memory pool.

   The other facet of JUDY is JK. While JudyK is expansive and full, JK
   is slim and laconic. Unlike JudyK, JK slips into your memory and stays
   there.  Because she occupies memory, she needs to be lean, all function
   and no fat.

   The Lookup Utility, called "phone.exe" on your disk, is exactly what
   its title implies.  It is a tool used for looking up items in JUDY's
   files.  Like JudyK, the Lookup Utility fills computer memory while in
   use and relinquishes it upon completion.



   ********** INSTALLING JUDY *********

   First things first.  MAKE A COPY OF YOUR DISTRIBUTION DISKETTE, and
   place the original aside for safe keeping.  That way if anything goes
   wrong you will always have an intact copy of the original.  If anything
   happens to your distribution diskette you are out of luck.  We won't
   replace it for free.  (Sorry, but that's the nature of the software
   business.)

   Now on to installation. JUDY needs to reside on one of your disks,
   preferably a hard disk.  To install her: pop the copy of your
   distribution disk into your floppy drive, CHANGE TO THAT DRIVE, then
   simply issue the following command at the DOS prompt:

         INSTALLJ X:\JUDY

   substituting X with the letter of the actual drive upon which you wish
   JUDY to reside.  The INSTALLJ program will copy all necessary files from
   the distribution diskette into the \JUDY directory and create the
   directory if needed.  It will tell you if anything goes wrong.

   EXAMPLE:
   Suppose you want JUDY to be in a directory named, suprisingly
   enough, "JUDY" on drive C:, your hard disk.  Then you would put your
   distribution diskette into floppy drive A: (if that's where it goes) and
   issue the two commands:

      A:
      INSTALLJ C:\JUDY


   Of the files it transfers the ones you will absolutely need are
   JUDYK.EXE, JK.COM, and PHONE.EXE.  The JUDY.HLP is for online help.
   If you do not need online help screens, delete it, d if you wish to 
   save some disk space.  Another useful option is JUDY.BAT, which simply
   invokes JUDYK and JK.  You can use it if you wish, or modify it to suit
   your configuration.  It is included merely as an example of how to
   automate JUDY somewhat. (JUDY.DOC is this text, and does not need to be
   kept in the \JUDY directory.)
   Page 3


   ********** USING JUDY FOR THE FIRST TIME **********

   Before actually running JUDY, you should understand the following
   things about how she works.

   JudyK prepares the day's agenda for JK. So to use JUDY, you first run
   Judyk and then JK. You can do this automatically with JUDY.BAT: just type
   "JUDY". Or better still, add the two commands

      JUDYK
      JK

   (in that order), to your AUTOEXEC.BAT file.  This is highly recommended.
   This way JudyK will process any messages lying about in her files, and
   JK will also be aware of them in case it comes time during the day to
   notify you.

   VARIATION: if you do not want the full screen display from JudyK
   to pop up every time you boot your computer, substitute the "JUDYK"
   command in your AUTOEXEC file with "JUDYK /Q" for the 'quick' version
   of JUDY with no screen display.

   You may also want to modify JUDY.BAT.  Notice that by default this
   batch job first UNloads JK then loads her.  This is because it is upon
   LOADING that JK reads the day's agenda as prepared by JudyK.

   If you run JudyK and change today's agenda, JK won't be aware of the
   change until she is loaded again.  The JUDY.BAT file takes care of all
   that.  But if you have OTHER TSRs in memory (other RAM-Resident programs
   like JK) and JK was originally loaded before them, the act of unloading
   JK will leave a gap in memory--which you may not want.  So feel free to
   change the batch job, or change your AUTOEXEC.BAT file (or your habits)
   and load JK.COM last.


    JUDY'S AREA

   JUDY uses a particular directory on a particular disk drive to leave
   notes for herself. If these notes were scattered all over various disks
   and directories, JUDY would have a hard time keeping track of them. We
   need to set aside an area for all of JUDY's files.  It can be in her own
   private directory but it doesn't have to be.  The PREFERRED SETUP is to
   use a directory called \JUDY, as determined by INSTALLJ, so I'll call
   it that.

   You select any directory you want during the initialization process
   explained above.

   JUDY populates her area during the Initialization process. The \JUDY
   directory holds her four data files (CALENDAR.JK, ADDRESS.JK, EXPENSES.JK,
   IDEAS.JK), as well as "SCRATCH.PAD" and "NOTE.PAD" that she uses herself.
   The Lookup Utility also looks to the directory \JUDY by default for these
   data files.
   Page 4


   JUDY's three executable files, JUDYK.EXE, JK.COM, PHONE.EXE as well
   as her two batch files JUDY.BAT and WHERE'S.BAT (which she makes) need
   not be in the \JUDY area.  But wherever they are, they must be SOMEWHERE
   IN THE PATH.  They have to be able to find the \JUDY area no matter where
   they or you are. (Your DOS manual explains use of the Path).  So before
   using JUDY on an ongoing basis, change the PATH command in your
   AUTOEXEC.BAT to include the \JUDY directory (or whatever name you gave it
   during initialization, if different).  Then REBOOT YOUR COMPUTER.


   NOTES TO FLOPPY DISK USERS

   Of course floppy disk users must insure that the correct actual disk
   is in the proper drive, but only during daily bootup, and when using
   JUDY's disk functions (JOT and the Lookup Utility).  Hard disk users do
   not have this concern. JUDY will always find her disk and directory.

    If you use the wrong disk:

   When JOTting, JUDY looks first for her directory. If it is not
   available, she issues a message and allows you to change disks, or cancel.

   Her directory could be available on the wrong disk (JUDY's area might be
   the root directory, for instance, which will always be present). In this
   case, JUDY won't complain. Having found her area, JUDY adds another note
   to her scratchpad. (A file called SCRATCH.PAD, which is read, then flushed
   out by JudyK as soon as she boots up.)

   If there's no SCRATCH.PAD in her area, JUDY creates a new one. But if
   this SCRATCH.PAD is not on JUDY's disk, JudyK will not find it the next
   morning when you run AUTOEXEC.BAT which (presumably) calls upon JudyK.
   Don't worry. You can add this SCRATCH.PAD to the real one by typing:

   COPY B:SCRATCH.PAD + A:SCRATCH.PAD  (if B: is the real JUDY disk.)
   DEL A:SCRATCH.PAD  (to get rid of the accidental scratch.pad)


         RUNNING JUDYK FOR THE FIRST TIME:

   Now it is time to start up JUDY and make her your own. To bring her to
   life, change directories to the \JUDY directory and type "JUDYK". She
   will then ask you a series of simple questions explained in (gory)
   detail below.

      Welcome, new JUDY user. Are you ready to install her?
   JUDY asks if you are ready to make sure you know what you're doing
   when you install her. By reading this manual you should be ready.
   typical answer: Y or [Enter]

      Sometimes there will be defaults. They look like  [this].
   Whenever possible, JUDY will suggest a sensible answer for each of her
   own questions. She'll present the default answer in a different color,
   and in brackets.
   typical answer: [spacebar], any key at all
   Page 5


      Your name:
   JUDY wants to know your name. It is very important that you answer this
   question seriously. JUDY won't allow you to change your name later,
   because JUDY belongs to only one person. Almost everything else can be
   changed by running "Judyk/s".
   typical answer: Edith Snitnow

      What is your birthday? first the MONTH [1-12]  and the DAY [1-31]
   Just enter the month of your birth. Again, you're advised to take this
   seriously. JUDY uses your birthday to identify you and your files. Using
   your real birthday will make things simpler.
   typical answer: 5  [Enter]
   then           15  [Enter]   (Edith's birthday is May 15th)


      Set your password, if desired:
   Again BE CAREFUL, answer this seriously. If you feel sensitive about your
   personal schedule, you can install a password into JUDY.  You will have
   to type in this password each time you run JudyK if you supply one.
   Actually you have three options at this point.
   1: You can have NO PASSWORD. Just hit the [Enter] key.
   2: You can type in any PASSWORD (ending it with [Enter]).
   3: You can simply install a PASSKEY. Any of the Function keys,
      Alternate keys, or even Cursor-pad keys will serve as a one-stroke
      password. (No need to hit [Enter].)
   typical answer: popeye (caps don't matter at all)


      Where is Judy's Area?
   JUDY can be in any directory on any of your disk drives.  If you
   installed her using INSTALLJ as explained above this will be the
   \JUDY directory.  In this case just hit [Enter] in response to this
   question and go onto the next.  If however you were adventurous and
   cavalier and copied the files into some other directory, then hitting
   [Enter] in response to this question will cause JUDY to make a \JUDY
   subdirectory in the current directory (unless of course you are already
   in a \JUDY directory).  If you don't even want JUDY's area to be called
   "JUDY", then type in the drive and path (these must be valid) and the
   subdirectory name, eg: "B:\BIN\UTILS" will force JUDY to copy her own
   files onto the B: drive in the \BIN\UTILS directory regardless of where
   her actual executable files reside. 
   Whatever directory is made, this is where JUDY will look for her own
   files, even if you installed the executable files from the distribution
   diskette somewhere else (by specifying a different path during the use
   of INSTALLJ.BAT).  See the section on "JUDY's AREA", above, for more
   information.
   typical answer: [Enter]

     Do you wish to do a detailed configuration right now?
   You have now completed the information necessary to install JUDY
   into your system. At this point you are presented the option of further
   customizing her.  If you care to go on, answer Yes at this point, and
   you'll fall into the JUDY Configuration dialogue, explained in detail
   at the end of this documentation in the appendix.
   typical answer: N or [Enter] (for no)
   Page 6


   At this point there is a pause while JUDY does some disk work. She
   will establish the JUDY directory if need be and create a series of
   files for various types of data. Please be patient.

   You will also be asked if you would like to print out the
   documentation.  If you answer Yes, JUDY will attempt to print out all of
   JUDY.DOC (this file, about 30 pages) to your parallel printer.  Make
   sure this is what you want to do.  If not, hit N for No.


   ********** JUDY IN THE FOREGROUND **********

   After typing JUDY, (or directly invoking JUDYK yourself), you'll see
   her sign on.  Then the calendar display will appear. You will see the
   screen arranged into ten 'windows'--boxes which enclose particular
   functions. In the Month Window, for example, the current month is
   highlighted. Similarly the day of the month is lit in the Day Window.
   On the left side of the screen is today's list of appointments.  As a
   new user, you'll have no appointments, and this box will be empty.
   Get to work! Make some appointments (see the section below on function
   F5 to learn how to add appointments).

   Notice that each of the windows has a "button" on it. The button
   corresponds to a function key. When the key is struck , the window is
   activated: it lights up, and its function is engaged.  The even numbered
   function keys activate the buttons on the right, and the odd function
   keys activate the buttons on the left.


     F1:HELP
       This presents an onscreen help function, should that be
       necessary. Press [F1] for Help then press the key that you want
       help for.  Pressing [Esc], or any Function Key twice, sends you
       home from helpland.  Calling for Help once in this manner changes
       the "button" names from F numbers into actual words.  Hitting [F1]
       again (and then pressing [Esc] to exit) toggles them back to the
       normal F key display.


     F2:MONTH:
       Activates the Month array. You can now change the currently
       displayed month by using the cursor keys. [Right]/[Left] or 
       [Up]/[Down] move you month by month.  [Home] and [End] jump
       between January and December. You can scroll past December
       into January of the next year, and vice-versa.  Notice how the
       display cascades: changing the month causes a new calendar to
       appear, and a new list of messages.  By hitting the asterisk (*),
       you invoke the Wild Month. (See WILDCARDS below)


     F4:YEAR:
       Activates the Year window. The years can be scrolled, with the
       [Left]/[Right] keys. Decades scroll with [Up]/[Down]. The display
       cascades as in the Month Window. And as in the other date windows
       the * activates the Wild Year.  See WILDCARDS below.
   Page 7


     F6:DAY:
       The calendar of days is active. As you scroll, ([Left]/[Right]
       for days, [Up]/[Down] for weeks), the notes for that day appear
       on the left side of the screen. The * will activate the Wild Day.
       See WILDCARDS below.

       Note the single-line box around those dates that have no
       appointments, and double-lines around those which do (except
       for recurring appointments made via Wildcards, the Weekly key
       or the Nag key.)


     F3:NOTES:
       This key opens the Notes Window, displaying the notes for the
       active date. Notes are available for editing in this mode, and
       are expanded from their normal truncated display.

       The cursor keys serve as normal editing keys, and you have
       both overwrite and push-to-the-right editing available. Hitting
       the [Insert] key will toggle this back and forth. (The cursor
       shows the current state.)

       To delete a note altogether use the [Up]/[Down] arrow keys to
       highlight the note you wish to delete.  Then use [Ctrl]/[End]
       (the two keys together) to kill it. To edit the time of a message
       use the Left key, or [Ctrl][Left], and type in the new time.

       To delete a note that was added as a regular occurrence and
       was entered using wildcards or the 'W' key (see WILDCARDS below),
       you first need to re-highlight all the dates on which the note
       occurs, re-issuing the same combinations of wildcards or use of
       the 'W' key as you did when you first added it.  Then highlight
       the note and hit [Ctrl][End].  This assures that ALL occurrences
       of the given note will be deleted.

       Hit any other function key to get out of the NOTES window.

     F5:ADD:
       This function is used to add appointments to your calendar.
       The entry window will light up.  Appointments are added to the
       currently displayed date.  First fill in the time, (see TELLING
       JUDY THE TIME, below), or just hit [Enter] if you don't want the
       message to pop up at any particular time.  Then enter the message.

       If no particular time is associated with a given message, the
       message will be displayed upon invocation of JudyK (usually 
       performed automatically by your AUTOEXEC.BAT file upon booting
       the computer) on the proper date.  Otherwise, the message will
       pop up on the proper date at the time you have indicated.

       In any event, however, the new note you add will not be
       subject to automatic announcement until JK.COM has had a chance
       to look at it--which happens only when JK is loaded into memory.
       But this is rarely a problem for appointments you place for the
       future.  When the day in question finally rolls around, JK will
       be loaded up in your AUTOEXEC that day anyhow and the note will
       be detected.
   Page 8


       If you wish to leave a note for an event for later the SAME
       day you enter it, it's best to use the MEMO option described
       below in the section on "Judy in the Background".

       Hit any other function key to exit the ADD window.


   EXAMPLE:
       Our user, Edith Snitnow, wants to remember to go to a cow
   surgery seminar held on January 13, 1997 at 3 pm.  She uses [F4] and
   the arrow keys to set the year to 1997.  Then she uses the [F2] key
   to highlight January, hits [F6] and then scrolls down to the 13th.
   She then hits [F5] to add the note.  Edith types in 14:00 (or 2:00 pm)
   in order to make the message go off an hour before the meeting.  She
   then types in "Seminar--3 pm!" and hits [Return].  This adds it to the
   list and she exits JUDY.
       When the special day finally comes around, Edith flips on her
   computer and her AUTOEXEC.BAT runs JudyK automatically, which in turn
   displays the message "Upcoming Message For Today: Seminar--3 pm!".
   Later, at 2:00, JK butts into Edith's spreadsheet session and delivers
   the message.  But Edith decides not to go after all, because her 
   interest in cows had diminished slightly in the 7 years she waited for
   the seminar...


     F7:SEARCH:
       This allows you to find any name or fragment in your
       appointment book (the CALENDAR.JK file, to be exact). Simply type
       in the name, or text fragment you wish to find (pay no attention
       to upper and lower case.  JUDY won't). Then press Enter.  JUDY
       will locate the most recently added appointment containing that
       text and flip the calendar to that date. Pressing [Enter] again
       finds the next occurrence, and so on. (Note that the order of
       the Search is from the most recently added appointment back.)

       Any other function key will escape.

       To find items in any of the other .JK data files, hit [F8] to
       use the Lookup Utility.

   EXAMPLE:
       Edith knows she has had several appointments with Ted Turner in the
   past year but can't remember exactly when or how many.  So she hits [F7]
   and types in "turner" (without the quotes of course).  Upon hitting 
   [Return] JUDY sets the date immediately at the latest appointment date,
   and Edith can see from the Notes window that the message, sure enough,
   says "Ted Turner."
       She hits [Return] again and now JUDY sets the date further back to
   another, earlier, date that has a message concerning "Turner" also.
   Edith keeps doing this until JUDY finally beeps and says that no more
   messages were found.  Astonished that she has had 129 dates with Ted in
   the past 3 months, Edith vows to play it more cautiously in the future...
   Page 9


   F8:PHONEBOOK: (The Lookup Utility)
      The operation and use of the Lookup Utility is explained in greater
      detail in its own section below.  Hitting [F8] is just a convenient
      way of calling it up.  Upon exit from the Lookup Utility (or whatever
      program you assigned to this [F8] key during the initialization
      process), you will be returned to the calendar display of JudyK.


     F9:PRINTOUT:
       JUDY lists out the displayed schedule (seen in the F3 window)
       on your parallel printer. The printer type and port should be set during
       initialization.  After printing that day's worth, you are asked whether
       you want a "Page Eject?".  If you want to add appointments from other
       days on the same page, hit N and go to the next date.  You may then
       hit [F9] again and add that day's list to the previous one.  Hitting
       Y in response to "Page Eject" will force a form feed.

   EXAMPLE:
       Edith and Ted are planning to go on a Love Boat cruise to Mexico for
   a week in July and Ted has asked her to mail him a copy of the itinerary,
   which Edith has entered on JUDY.
       Edith first highlights the date of the first day of the cruise.
   Making sure her printer is on and ready, she then hits [F9].  JUDY
   immediately sends that date's itinerary to the printer and asks "Page
   Eject?"   Edith responds N for no, and moves on to the next day.  She
   hits [F9] to print, and N again to hold off on the page eject.  She
   does this for each day of the cruise and finally hits Y to finish the
   list and eject the page.
       Upon receipt of the itinerary Ted calls Edith and passionately
   proposes they spend an extra month in Mexico...


   F10:EXIT:
      Return to DOS saving all changes to disk.  This means that whatever
      new appointments you have added or deleted will be written to the
      CALENDAR.JK file in JUDY's area immediately and control will be
      given back to DOS.


   ********** WILDCARDS **********

   Like DOS, JUDY understands WILDCARDS. She uses them for three parts of
   the date: the day, the month, and the year. This is (obviously) useful
   for various types of regular occurrences. For example:

   day/month/*    :every year on this date        :birthday, anniversary
   day/*/year     :this day every month this year :rent/bill payment
   */month/year   :every day of the month         :monthlong project
   */*/year       :every day this year            :long term project
   */month/*      :all month, every year          :seasonal reminder
   day/*/*        :certain day of the month       :paycheck
   */*/*          :every day                      :inspirational message

   Page 10


   So, for example, suppose you wanted to add a reminder to pay a bill
   every 5th of the month, every year.  First hit [F4] to go to the
   YEAR window, then instead of hitting an arrow key to scroll, press
   the asterisk (*) key.  Then hit [F2] to highlight the MONTH window and
   do the same to highlight all the months.  Finally, in the DAY window (F6),
   scroll to the 5th of the month.  With all proper years and months and
   day lit up, use [F5] to add the note as normal.

   To delete all occurrences of a given note created with wildcards,
   you must first use the same combination of wildcards as you did
   originally to highlight all the same multiple days, years or months.
   Then go into the NOTES window with [F3], highlight the note and delete
   it with [Ctrl][End].


     NAG FILE:
   The Nag File is opened by hitting the letter 'N' once in the Day window.
   The Nag File is the list of those things that must get done as soon as
   possible, but not on a particular day. Changing the oil in your car is a
   good example.

   The contents of the Nag File are always added to Today's messages,
   and they follow you every day until you finally erase them.

   To use the Nag file, first go into the Day window (F6).  Then hit
   the N key.  This opens the file.  Now hit [F5] to add a new entry.
   Type in the entry and hit [Enter] as always.  This (and subsequent
   messages) will now be displayed along with the others in the NOTES
   window every day (but only in the NOTES window).  Once finshed adding
   nag messages, hit [F6] to go to the DAY window and hit the N key this
   time to CLOSE the Nag file.  Or just hit [F10] to exit.

   To delete a nag message, FIRST go to the DAY window (F6), open the Nag
   file as usual, then use [F3] to go in and highlight the message(s) you
   wish to kill.  Use [Ctrl][End] as always.  Go to the DAY window and
   close the Nag file before going on and adding new messages.


     WEEKLY OCCURRENCES:
   Weekly occurrences can be flagged by hitting the 'W' key from within
   the day window. This creates messages that appear every Tuesday, for
   instance, if the cursor was on Tuesday when 'W' was pressed.  After
   all appropriate days are lit, use the [F5] key as always to add a note.
   It will then come up every week on that day (but will NOT cause the days
   to be double-boxed.  Only individual appointments do that.)

   To delete all occurrences of a given note created with the W key,
   you must first highlight the original day of the week on which the
   note was created (by going to the day of the week and hitting W as
   before) then use [F3] and [Ctrl][End] as usual.
   Page 11


   ********** JUDY IN THE BACKGROUND **********


   LOADING JK.COM

   When you typed JUDY (to invoke JUDY.BAT), the full-screen JudyK
   program appeared. After you exited, the background portion of JUDY
   (called JK) was unloaded and re-loaded.  JK.COM needs to be loaded
   in order for it to take into account any changes in your calendar
   as performed by JudyK.

   This is why putting both the lines
       JUDYK       (or "JUDYK/Q" for no screen display)
       JK
   in your AUTOEXEC.BAT is suggested.  It assures that the JK portion
   of JUDY will be loaded properly into memory.  If you do not use the
   JUDY batch file, or do not have the line "JK" in your AUTOEXEC.BAT
   file, simply type "JK" (no quotation marks) at the DOS prompt to
   load JK into memory.

   When JUDY loads, she responds with the line

             JUDY is here. Call me anytime with the Double Shift.

   She also immediately puts a clock in the upper right corner. (See CLOCK
   below.)  You now have JUDY running under all your other software, until
   the system is re-booted.  Wherever you wander in your computer, JUDY
   will follow you, staying quietly in the background, maintaining your
   clock, and waiting. Two things can bring her up front. If she has a
   message for you, she'll let you know. Or if you want her, you can
   always summon her up.


   UNLOADING JK.COM

   If you need to load JK and she is already in memory or if for some
   other reason you wish to take JK.COM out of memory, you can do so by
   typing
       JK /u
   at the DOS prompt.  This will free up the memory she occupied and
   prevent her from possibly clashing with incompatible software.  It
   will also of course prevent her from reminding you of your messages.

   JUDY had been carefully created to work with as wide a range of other
   software as possible, but because of certain limitations of DOS and
   other non-compatible "IBM-compatibles", programs which reside in memory
   all carry some risk of incompatibility with other programs.  JK.COM,
   therefore, cannot be guaranteed to work with every other DOS program in
   the world.  This is why the ability to unload JK.COM from memory was
   included.  It allows you to, say, modify a batch job which runs the
   incompatible application to first unload JK, run the application and
   then load JK back up.  This would be accomplished with lines in your
   batch job similar to:

       JK /u  (to unload JUDY)
           ... (your application is called here )
       JK    (to load her back up)
   Page 12


     WHEN JUDY CALLS

   When JUDY (or, that is, JK.COM) has a message for you, she will beep.
   She will also interrupt whatever process you are engaged
   in. The rest of the computer's operations, (except for life-support
   functions) are suspended while JUDY presents her message, which appears
   as a bright, underlined or colored line of text in the center of the
   screen. (You can change the color and position in the detailed set up,
   described in the appendix.)  You acknowledge the message with a [Esc]
   or [Return]. The JUDY message will disappear, the screen will be repaired,
   and the interrupted software will resume. The message is then considered
   delivered and JUDY will reuse its space.

   Alternatively, the 's' key can be used as a 'snooze bar', a
   procrastination feature that postpones the message for five minutes.
   (This is customizable also.  See section on CONFIGURATION in the
   Appendix.)

   Any keystroke other than [Esc], [Return], 's', or 'S' will be ignored
   and thrown away. This insures that you will not miss the message.

   NOTE: Once again, because of problems DOS can have with the demands
   of memory resident programs such as JUDY, there is a chance that JUDY
   will not restore certain application screen displays properly (but
   although it might interfere with the display it will not interfere
   with the application's actual operation).  There is little, if anything,
   the creators of pop-up utilities (known as TSRs) can do to avoid this
   possibility. Many newer applications anticipate such problems from TSRs
   and include a method of repainting the screen display should it be
   changed.  If your application does not have this re-paint feature yet
   JUDY interferes, you can still temporarily unload JK.COM before running
   the application according to the directions given above.



     WHEN YOU CALL JUDY

   The "Double Shift" calls JUDY to the foreground of your screen.
   To do the double shift, you hold down both left and right shift
   keys at once.  Press them firmly down, and hold 'em in until JUDY
   presents herself. She'll appear with this menu:

          Memo     Jot    Review    Clock   [Esc]
          
   You choose these functions by tapping the first letter, or hitting
   the ESC key to quit. For example, the 'c' key, shifted or not, will
   give you the CLOCK. After performing the chosen function, JUDY will
   drop away, returning you to exactly where you were when you called her.

   These are the JUDY background functions:

    MEMO:
      MEMO is used to add a message to today's list. MEMO puts notes
      into current memory only; it does not write to disk. Like everything
      in memory, MEMO messages vanish when the computer is turned off or
      rebooted.  So they should only be used for SHORT TERM notes.  For
      more permanent notes use JOT.
   Page 13


      To set a MEMO, call JUDY with the Double Shift. When she appears,
      hit 'm' for Memo. Then fill in the time of the message. (See
      TELLING JUDY THE TIME in the MISCELLANEOUS section below.)  After
      the time has been filled in, a blank line will appear. Type your
      message in the line (using left, right and backspace keys to correct
      errors). Then hit either [Esc] or [Return]. The message is now tucked
      away. It can be checked with REVIEW, and when the time comes, you'll
      be hearing from JUDY.


    REVIEW:
      This function allows you to check upcoming messages, and to cancel
      any of them. To REVIEW, use the Double Shift, then press 'r'.

             [Del] kills, other keys advance

      is then displayed.  From this point on, you press any key to see the
      next message. They are presented one at a time in chronological order,
      and then JUDY drops away. If there are no messages JUDY disappears
      immediately. To cancel a message, simply press the [Del] key while it
      is onscreen.  The message is eradicated from memory.  This is NOT the
      same, however, as permanently erasing a note from your appointment
      calendar.  To do that, you must use JudyK (see JUDY IN THE FOREGROUND).

    CLOCK:
      JUDY presents a 12-hour hour-minute-second clock, which she updates
      each second. If the position of the clock, or its existence, is not
      desired, the CLOCK function allows you to change it temporarily.
      Call JUDY with the DoubleShift, and tap the 'c' key.  Now you can
      place the clock anywhere on the screen using the arrow keys. Or you
      can remove the clock with the [Ins] key. If the clock is already gone,
      the [Ins] key will restore it. When done, the [Return] or [Esc] key
      will bring you back to your main task.
      
      NOTE: This placement change only lasts until you change it again
      or until reloading JK (say, by rebooting).  To make a permanent
      change, reconfigure JUDY with the "JUDYK /S" command, explained
      below in the appendix.

    JOT:
      JOT is JUDY's access to the disk, and thus to long term storage.
      Anything you add with the JOT command gets placed temporarily into
      the "SCRATCH.PAD" file in the JUDY area. (Read the section on
      JUDY'S AREA for a discussion of disk usage.)

      JOT, via the Double Shift, then 'j', presents you with the menu:

          Calendar   Address   Expense   Idea

      The Calendar option allows you to leave a message for any time this
      decade. After filling out the time and date (see below), a line
      appears into which you drop your message. Note that even if a message
      is for today's date, JUDY will NOT remind you of it, until it has
      been "digested" by JudyK. On the other hand, a JOTted date even in
      the past, will become part of your calendar and data files.  So if
      you JOT a message for today's date (though MEMO is better) reboot
      your computer or unload and reload JK (done automatically by JUDY.BAT).
  Page 14


      Choosing Address, Expense, or Idea simply marks the succeeding
      message for eventual filing into one of three bins: ADDRESS.JK,
      EXPENSES.JK, IDEAS.JK.  The message is actually sorted and placed
      into one of these data files later by JudyK.  The date and time of
      the note's creation are recorded with it, and tacked on to the end
      of the line of text when saved to disk.  Unlike the CALENDAR notes,
      the "Address," "Expense" and "Idea" data files are text files, which
      means they can then be read with a text editor, and reviewed with the
      Lookup Utility.  So using JOT is the way to note an expense or
      telephone number that you might later summon with the Lookup Utility.


    DOS LOCK:  Flashing Triangles in Clock Display:

    You may notice after using JOT that some downward pointing triangles
    are in the clock display.  This indicates that JUDY wants to download
    the most recent JOT to disk, but DOS is locked.  DOS is locked during
    certain critical states, and it should not be interrupted. Oddly, one
    of those states is when you are 'sitting at the prompt'; ie: just in
    DOS, with no application program running.

    You don't have to do anything, JUDY will wait for the best time and
    then perform the disk write. Just do not turn off the computer before
    she's had her chance. (You can usually unlock DOS with any screen
    activity such as doing a DIR command or hitting [Ctrl][Break].)


   ********** MISCELLANEOUS **********


     TELLING JUDY THE TIME:

   When writing the time during the creation of a note in either
   foreground mode (JudyK) or background mode (JK), please note that JUDY
   accepts both 12 hour or 24 hour ("military") time. If there is an
   ambiguity, she will ask for 'a' or 'p' (am/pm). JUDY takes care of
   all punctuation; you need only give her the digits, (and 'a' or 'p').
   She ignores illegal digits.  Also you need not specify everything about
   the time if you want to go along with certain defaults.  Hitting
   [Enter] at certain times results in the following defaults:

       Before first digit:  No time attached to message.
       Before the minutes:  Even o'clock, (eg: 7:00)
       Before am/pm:        "Normal office" hours. (8:31 am to 8:30 pm)



     TELLING JUDY THE DATE:

   When using the Jot-Calendar feature, you will need to enter a date.
   JUDY starts you with the current date, allowing you to overwrite it.
   You can change as much of the date as you like, scooting around with
   the left and right arrows.  As soon as you hit the [Enter] key, it
   is accepted. For instance, if you want to leave a message for today's
   date you don't type in anything--just hit [Enter].  Or change a single
   digit and [Enter] to leave a message for tomorrow.
  Page 15


   The date is day/month-name/'year. The day is filled in as two digits.
   Note that the first digit cannot exceed 3. The month is selected using
   the [Up] and [Down] cursor keys to scroll through the month-names, and
   hitting the [Enter] key to pick one.


   DIARY FILES

   JUDY will use all available memory up to about 128K to hold the
   largest possible Calendar file.  When there is no more room, she
   automatically spills off the oldest inactive appointments into nicely
   formatted Diary files. She can no longer read them but you can, with
   any word processor. There is a separate file for each month.  JUDY will
   explain to you what she is doing when she does it.


   JUDY SWITCHES

   The following "switches" are different command parameters you can
   give JudyK when running it from DOS, depending on what you wish to do.

    Quick:Judyk /Q
   Do the filing and exit, no fullscreen display
   Useful in AUTOEXEC.BAT where the calendar display is unwanted.

    Setup:Judyk /S
   Tailor JUDY to user's parameters. See section in appendix on
   CONFIGURATION.  Useful as your equipment, or your taste changes.

    Fresh Files:Judyk /F
   Any JUDY files not present will be created.
   Useful after a disk disaster, or simply to start from scratch.
   Use the subswitch /O (Judyk /f /o) to overwrite (kill) existing files.

    Identify:Judyk /I
   JUDY identifies herself, her owner, her condition.
   Useful if you've gotten confused.  If the version you have is a
   shareware "clone" (with limited lifespan) it will be indicated
   here.

  Page 16


   ********** THE JUDY LOOKUP UTILITY **********


    You'll find JUDY's ability to LOOKUP items quite versatile.  The
    following is a list of some of the things the LOOKUP utility gives
    you:

   a) Instant access to JUDY's own ADDRESS, EXPENSES and IDEAS
      files.

   b) The ability to check either just the beginning of a file
      entry or anywhere in the file for the keyword.

   c) The ability to look-up entries by the JUDY date stamp,
      which is recorded by JUDY at the time of the entry's creation.

   d) The option of saving the list of successful matches to a
      separate LOG file, or in fact any file you wish for organizing
      or printing purposes.

   e) Access to simply ANY ASCII text file for use with more than
      just names and addresses.


   ********** USING LOOKUP **********

   THE SCREEN

   Upon hitting the [F8] key in JUDY (or by typing "phone" at the DOS
   command prompt) you are confronted with the LOOKUP screen, which
   is different from the rest of JUDY.  Not to worry.  The LOOKUP
   screen is very straightforward.  It is divided into 3 main
   areas:

   a) The PARAMETERS Area

      This is the area at the top where you determine what it is you
      want to search for.  You do so by placing information
      in each of the three "fields" or boxes.  These fields indicate
      HOW you want to search for an item or keyword (the "Search Mode"
      field), WHAT that item is (the "Item to Search For" field),
      and WHERE to look for it (the "From File" field).

      Each of these fields can be highlighted (activated) by using the
      [Right]/[Left] arrow keys or by hitting the appropriate function key.


    b) The MATCHES Area

       This is the large black window in the center of the screen.  It
       is where each text entry containing a match to the given keyphrase
       or date is displayed.  If not all the matches can be displayed at
       once, the word "MORE" appears at the bottom of the window indicating
       that you will need to scroll through the matches to see them all.

       You cause a search to be performed by hitting the [Return] key.
  Page 17


    c) The MESSAGES Area

       This blue area at the bottom of the screen displays various
       prompts and help messages.  LOOKUP will display a message here
       whenever it beeps due to an error or when needing some additional
       information.  The line of text below it at the bottom of the
       screen never changes, and is there strictly as a reminder of
       which function keys do what.



   ********* F1 --  SEARCH MODE **********

   One of LOOKUP's strengths is that it is more than just a simple
   text search utility.  You can place restrictions on the way
   LOOKUP will determine a match by changing the "Search Mode"
   parameter.

   To change the Search Mode parameter, use the [Up] and [Down] arrow keys.
   This will scroll you through the following options.

   a) TEXT
     Makes LOOKUP assume that whatever you type into the "Search For" field
     is an alpha-numeric text fragment and will look EVERYWHERE in the file
     for it.

     This is the simplest way of determining matches.  If the given keyword,
     number or phrase (ignoring upper/lower case) is found, the entire entry
     is added to the list of matches.  ("The entire entry" here is usually
     only one line of text, complete with time and date stamp, as created by
     JUDY. It doesn't have to be, however.  See the section below on
     SEARCHING for an explanantion on how to have multiple-line entries.)

     This is the default setting because it is the most common
     way you will probably do your searches.  It is the easiest
     way to look up phone numbers, addresses and names.  Searching
     in TEXT mode frees you from having to organize your entries as
     you jot them down in JUDY.

   b) BEGINNING
     A lot like TEXT mode in that it does nothing special to the
     text fragment you give it to look for.  The difference is
     that in BEGINNING mode, LOOKUP finds only those entries that
     have the given keyword or number at the very beginning of the
     entry.  This is useful if you have organized your entries
     with this in mind.  You might preface each entry as you
     create it in JUDY with a special word or name determining its
     category so that later with LOOKUP you can refer to it in
     BEGINNING mode for that specific category.  It's up to you.

   c) DATE
     This mode searches entries by the date stamped onto the end of
     the line.  Whenever you JOT something
     down in JUDY, she dutifully records the time and date you did
     so and adds it on to the end of the line of text you jotted.
   Page 18


     The DATE mode exploits this fact.  When in this mode, LOOKUP
     takes the date you give it, converts it into the proper
     JUDY format and then compares it to the tail end of each
     file entry. This way you can call up all the expenses or
     ideas or phone numbers you recorded on a specific date.

     JUDY of course writes down the date in a very specific and
     consistent format as she adds it onto your entry, but you
     don't have to know what that is to use LOOKUP.  LOOKUP will
     take virtually ANY standard North American date format,
     including * and ? wildcards.  But the following rules apply:

      -- a month, day and year must all be specified
      -- the month, day and year must be separated by
         either a slash, space, period, comma or hyphen
      -- The month can come second ONLY if you spell it
         out, otherwise the first number is always
         assumed to be the month
      -- No letters are allowed as part of the day and year
      -- Only the last two digits of the year are considered

      To see what all that means, just look at the following examples.
      Each of them is an acceptable form for a date. Note also how the
      wildcards are used, for looking up multiple dates.

           ACCEPTABLE DATE FORMATS:

           2/3/90   (assumes month = 2 as per American custom)
           02 3 90
           2 03 1990
           Feb 3, 1990
           03-February.90
           2 * 1990    (every day of Feb. 1990)
           Feb 1? 90   (every two-digit day beginning with a 1)
           February ? * (any one-digit day in Feb. of every year)



   ********** F2 -- SEARCH FOR **********

   This can be any alpha-numeric letter, word or phrase of up to 80
   characters.  Each entry that contains it will be placed on the list
   of matches.

   LOOKUP is case insensitive, meaning that it disregards whether the
   letters you type in are uppercase or lowercase when determining a match.
   Therefore you don't have to worry about how the original was typed.

   You do have to concern yourself with spaces, however.  LOOKUP treats
   these like any other letter, so if you accidentally type some leading
   or trailing spaces along with the search text LOOKUP will not find
   the original text if it did not contain such spaces.
  Page 19


   When modifying the contents of the "Search For" field, please note
   that if the cursor is at the head of the text and you type in a new
   letter, the entire line of text is replaced.  This is to speed up
   the process of typing in something new.  If you are at the very end
   of the text and hit the [Right] arrow key you'll exit the "Search For"
   field.

   The [Up] and [Down] arrow keys along with [PgUp], [PgDn], [Ctrl][PgUp]
   and [Ctrl][PgDn] will scroll the MATCHES window an entry at a time (or
   a page at a time) only when the "Search For" field is active.  In other
   fields the arrow keys cause you to scroll through options.


   ********** F3 -- FROM FILE **********

   This is the name of the file that contains the entries through which
   you wish to search.  It must be an ASCII text file for LOOKUP to work
   properly.  It can be of any size.

   Since LOOKUP is designed to work directly with JUDY, it assumes the
   files you will most likely be looking through are the standard JUDY
   text files ADDRESS, EXPENSES and IDEAS.  These are files you write to
   when calling up JUDY via the "Double-Shift" option and select JOT.
   Each entry in these files is an 80-character line of text containing
   the words you typed followed by JUDY's own time and date stamp.  Since
   you might also often be using the LOG file created by LOOKUP, this is
   one of the standard "From File" options as well.

   To search through any one of these files, highlight the
   "From File" field and use the [Up] and [Down] arrow keys to scroll
   through the choices until the file you want to search appears
   in the field.

   If you want to look at any other file, just type in its name at
   any time.  Once you do, this new filename is added to the list
   of options so that you can scroll back to it later.  Upon
   startup of LOOKUP there is a blank slot in the list of filenames
   available for just this purpose.  Each time you type in your
   own filename this "free slot" is replaced with the most recently
   entered name.

   If a pathname or extension is not specified as part of the
   file specification, LOOKUP assumes the file resides in a
   \JUDY directory (which is NOT necessarily the current directory
   and NOT necessarily "the" JUDY area.  If you installed JUDY in
   some directory other than one specifically named \JUDY, then
   LOOKUP will not be able to find the .JK files immediately.  You
   will have to supply the different path as part of the filename).

   LOOKUP also assumes the file has the extension ".JK".
   If you type in your own filename please specify the path and
   extension if different from these defaults.
   Page 20


   ********** [Return] Key -- SEARCHING **********

   Hitting the [Return] or [Enter] key causes LOOKUP to perform its
   search.  It won't do anything at all , however, if none of the
   parameters has been changed since the last search.

   If you have already done a search and a list of matches
   resides in the MATCHES window, LOOKUP will ask you if you
   want to append the results of this new search on to the
   present list.  You must type Y or N, with Y (yes) meaning
   to append the results.  This way you can build up a special
   list as the result of several different searches, and save the
   final result to disk as the LOG file.  Most of the time,
   however, you will find yourself doing only one search and then
   exiting.

   If LOOKUP finds the target text or date, it displays the entire
   entry which contains it.  In almost all cases this entry will simply
   be that single line of text read from the file.  But it does not
   have to be.

   As mentioned in earlier sections of this documentation you
   can look in ANY text file for matches--even one you have
   created yourself on a standard ASCII text editor (such as
   "edlin"--if you are masochistic--or a commercial word processor
   running in ASCII mode).  If you create the file yourself you
   can have multiple-line entries by simply ending each line (except
   the last one) with an underscore ('_').

   LOOKUP, upon finding a match, looks to the end of the line
   for an underscore.  If one is found it automatically adds the
   subsequent line of text from the file to the list until the
   lines quit ending in underscores.  This allows you to create
   your own simple database of multiple line entries, such as
   the following:

       Shrub, Georgette_
       1000 Darkniss Point_
       Blackshack, WA 20001

       Bonaparte, Leon_
       2 Sacred Blue, Ave._
       Oolala, FL 18120             etc. etc.

   If you were to look up "Shrub," for instance, LOOKUP would
   display all three lines in the list as a single entry.


   ********** F6 -- SAVING TO A FILE ***********

   Once you have a list of matches displayed on the screen,
   you can write it out to a file by hitting [F6].  This file
   could then be printed out by copying it to your printer from
   DOS (using the command "copy <filename> PRN").  Or you could
   even use LOOKUP on it as well for further refinement in your
   search.
   Page 21


   By default, LOOKUP will write the results under the name
   LOG.JK in a directory specifically named \JUDY.  If that is
   what you want (and it almost always is), just hit [Return]
   to confirm the save.

   If you want to save the list under some other name (even
   possibly under the name "address" or "expenses" or "ideas")
   then you need to type it into the field supplied in the
   MESSAGES area for this purpose.

   If you do, LOOKUP still assumes that the file will go into
   the \JUDY directory and have the .JK extension (as is the
   case with the "From File" field).  If you want the file
   to go anywhere else or have another extension, you need to
   type in the path and extension explicitly.

   If the file already exists, LOOKUP will tell you so and ask
   if you want to overwrite the existant file.  If you indicate
   Y (for yes) then the current file with the given name will be
   replaced with the new list.  Otherwise, LOOKUP won't save
   anything to disk.  You can then hit [F6] and type in a different
   name this time if you wish.

   ********** F10 -- EXITING ***********

   At any time you may hit the [F10] key to exit LOOKUP and return
   to JUDY (or DOS if you ran LOOKUP from the DOS command prompt).

   LOOKUP will first remove the current Matches list from memory
   (if any list exists) without saving it to disk.  It will then
   exit.

    ********** EXAMPLES **********

     a) By default LOOKUP is set to do "Text" searches from
        "address.jk."  If you simply want to look up someone's
        phone number from the address file, then this is perfect.
        Just type in the name--ignoring upper and lower case--in
        the "Search For" field and hit RETURN.  LOOKUP displays
        the line or lines containing the person's name so you
        can read the number.  Hit [F10] to exit.

     b) Suppose Edith kept records concerning Christmas gift
        ideas by jotting them down in the "ideas" file in JUDY.
        Each time she added an idea she prefaced it with the
        recipient's first name.  Now she wants to see a list of
        all the ideas she had for Ted.  First, she types the word
        TED (upper or lower case) into the "Search For" field.
        Then she highlights the "From File" field and hits the [Up]
        arrow key until IDEAS is displayed.  She highlights the
        "Search Mode" field and scrolls until BEGINNING
        is shown (so as to search only those ideas beginning with the
        word "ted" and not any ideas that may be ABOUT Ted and have his
        name imbedded in the middle of the line).

        She hits [Return].  Presto!  All the ideas starting with the
        word "Ted" are displayed.  She saves this out to a file, and
	prints it up for an instant Christmas list.
    Page 22


     c) Let's say that you use JUDY to jot down your household
        expenses.  At the end of the year you want to see what
        you spent in March.  No sweat.  Simply set the "Search
        Mode" field to DATE, and the "From File" to EXPENSES.
        Then, taking advantage of LOOKUP's ability to accept wild-
        cards in its dates, you type in "March * 90" (no quotes,
        of course) in the "Search For" category, meaning "search
        for all entries dated any day of March 1990."  Hit [Return].
        Shazam!  All the single line entries you jotted down with
        JUDY in the EXPENSES file during the month of March 1990
        are called up.  Hit [F6] and name the output file "MARCH"
        and you'll have a separate record of these expenses. 
        (You might even subsequently search through this "March" file
        for all entries containing the phrase "slush fund" or whatever
        for a futher breakdown of your expenses.)

   ********** COPYRIGHT and LISCENSING AGREEMENT **********

   JUDY is copyrighted material, and of course it is illegal to
   distribute unauthorized copies, whether for fun or profit.  What your
   hard-earned 30 bucks has bought you is merely the right to USE the
   software.  You may make safety copies for yourself, naturally, but
   beyond such simple archival copies you must treat this software as you
   would any other singular material object: it cannot be used by more
   than one person on one computer at any given time.  You must not allow
   for even the possibility of it being used by two people simultaneously.

 GUARANTEE AND DISCLAIMER:

   We hope you enjoy JUDY.  If you're unhappy with JUDY, send the original
   diskette and documentation back to Interfact Software within 30 Days of
   its receipt and we'll cheerfully refund your money.

   Other than that, there are no warranties express or implied.


   ********** APPENDIX **********

  DETAILED JUDY CONFIGURATION:  Upon invocation by Judyk/s or during first
  powerup of JudyK.  NOTE: THESE CHANGES ARE NOTICABLE ONLY UPON THE NEXT
  TIME YOU LOAD JK.COM.

      Where should the clock be? (Use Cursor keys)
   If you don't like where the clock comes up (the upper right hand
   corner), you can change this home position by pushing around the
   marker with the cursor keys.  This changes where the clock shows up
   BY DEFAULT.  If you want to change the clock position at any time during
   a particular session, call JUDY via DoubleShift and use the "Clock"
   command there.
   typical answer: (Move the marker with the four cursor keys, then press
   [Enter].)

     Where should Judy appear?
   Similarly, you indicate a position on the screen. Notice that the
   legal area for the marker is constrained to an area smaller than the
   full screen.
   typical answer: (Move the marker with the four cursor keys, then press
   [Enter].)
   Page 23


     What color code for clock? (Use Cursor keys)
   There are 256 available colors, which you can scroll through. The
   order of the colors can be found in Table C of the IBM Tech Ref
   Manual.  Monochrome owners will find that a great many colors are
   exactly the same as one another, and that scrolling through them is
   rather boring. For both color and monochrome colors 128-255 are all
   blinking.
   typical answer: (View colors with arrows, then select by pressing [Enter].)

   
      How about a color code for Judy menus?
   This color is the one in which you want JUDY to present herself when
   she interrupts you from the background.
   typical answer: (View colors with arrows; select by pressing [Enter].)

    And for urgent Judy messages?
   This is the color in which all highlighted words used by JUDY will be
   presented.  This means not only urgent text, but other non-emergency
   characters, most notably the cursor.
   typical answer: (View colors with arrows; select by pressing [Enter].)

   
    How long is the snooze period?  {in minutes}
   The snooze period is the time which you get to procrastinate.  When
   JUDY interrupts you with a message and you hit 'S' or spacebar to
   postpone that message a few minutes, the Snooze Period will determine
   that interval.
   typical answer: 5

   
    Do you wish to change the "Double Shift" pattern?
   If for some reason you want to call JUDY with something other than
   the traditional double-shift (left and right shiftkeys), you can
   change that.  Simply answer Yes, then set any combination of
   [Left Shift], [Right Shift], [Alt] and [Ctrl].
   Use [Enter] to accept, or [Del] to clear the combination and try again.

   
     What type of printer? { Vanilla=0  Epson=1 }
   This regulates the type of control codes which JUDY will use to
   create special printer effects when making hardcopy of your schedule.
   The Vanilla option attempts no printer effects, it sends only pure
   ASCII code.
   typical answer: 0

   
     Which printer port? { 1, 2, 3 }
   Is your printer on LPT1, LPT2 or LPT3? Simply press the proper number.
   NOTE: the default is given as LPT1 the first time you configure JudyK,
   but technically speaking the default is PRN, and if you specifically
   want PRN (and not LPT1:, just hit [Enter] to stick with the default.
   typical answer: [Enter]
   Page 24


    What is the name of your Phone Manager? { PHONE }
   This is the name of the program that will be invoked whenever you
   hit [F8] in JudyK.  Normally this is the Lookup Utility (as the
   Lookup Utility's actual name is PHONE.EXE).  If you want to use
   some other manager or change the name of the Lookup Utility, type
   in the new name now.
   typical answer: [Enter] (to use default Lookup Utility)


   ********** ERROR MESSAGES **********

     'Bad disk; fix & hit key. Or Esc.'
   When you loaded JK, the JUDY disk was not the default
   drive.  Or the JUDY disk is damaged. Replace the disk, hit a key,
   and it will re-attempt to load. If you use [Esc], JUDY will install
   herself, but without any of today's messages. She will use Drive B:
   as her home drive.

     'Sorry,   my memory is full now. '
   JUDY can only hold sixteen pending "today's" messages.
   There are sixteen active ones already. Delete one with the REVIEW
   function if you want.

     'Cannot write. Hit [Esc] to free.'
   JUDY cannot jot a note into her directory. Most likely, the
   wrong floppy is in the drive or the disk is full. Replace the
   disk, if necessary, and hit a key.  Otherwise abort out with [Esc].
   Note will not be written.

     'Cannot create scratch.pad. hit [Esc]'
   JUDY cannot open up a file in her directory. Probably the
   directory is full or it is nonexistent. Hit [Escape] and investigate.
   Your note will not be written.

     'Judy's already here. Hit [Esc]'
   JK, the resident part of JUDY, is already in residence. There
   are few reasons for double loading JUDY, and it might create trouble.
   Troublemakers can force a doubleload with 'f'. (Be sure to configure
   different DoubleShift patterns as well.)

     'Version mismatch. Maybe trouble.'
   The JUDYK and JK files are not the same version number. Check
   the numbers during signon. This may or may not present problems.

     'Not now.'
   This message occasionally appears if you call JUDY during a
   time when the computer's operation should not be interrupted. Try
   again in a few seconds.

     'Error on LPT1:' 'IO ERROR' or 'OUT OF PAPER'
   These self-explanatory messages might appear during hardcopy
   printout. Usually your printer is turned off, off-line or out of paper.
   However be certain that the LPT number in the error message
   corresponds to your actual printer port.
   Page 25


     'This is not MY Calendar'
   You have gotten the wrong calendar.jk file in your system. You
   can delete it and then use Judyk/F to replace this (and any other
   missing files). JUDY clones will not read the files of another
   JUDY clone.

     'Cannot find file xxxx.jk'
   The requested file is not available. Do you have the proper
   disk mounted?  Or maybe \JUDY is not in your path.  If not, check
   the disk or change the path to include the proper directory.
   Otherwise, you may be missing some files.  Type 'Judyk/F' to replace
   the missing file with a clean slate .

   
   ***** FILES CREATED BY JUDY DURING CONFIGURATION *****
      (these files will therefore be in your \JUDY directory along with
       those listed in the READ.ME file on the Distribution Diskette)

    in the current directory:

      WHERE'S.bat: sample use of ADDRESS.jk with FIND.
            NOT needed if you use the Lookup Utility.

    in the the JUDY directory:

       ADDRESS.jk: list of addresses, readable by any text editor.
       EXPENSES.jk: list of expense, readable by any text editor.
       IDEAS.jk: idea 'heap',  readable by any text editor.
      *CALENDAR.jk: records appointments, only readable by JUDY
      *SCRATCH.pad: JK's notes to JUDYK
      *NOTE.pad: JUDYK's notes to JK
       MON'YR.LOG: (ie: JAN'95.LOG) Diary files, records of old events.

    *for internal use only

   

    Thank you.  That's all.

   
    Copyright Feb 1987 by Dov Jacobson, new_functions()
    Revised June 1990 by Chris Masters, interfact software
   
```
{% endraw %}

## PCSIG.TXT

{% raw %}
```
Dear Prospective JUDY User,

This is your JUDY CLONE DISTRIBUTION DISKETTE.  It contains the free
and freely distributed version of the JUDY Calendar System.  This version
contains all the same components as the registered version of JUDY:
no files have been left out to "cripple" it.  It does, however,
HAVE A LIMITED LIFETIME OF 3 MONTHS before you have to reinitialize it.
The registered version, on the other hand, will last to the year 2000
with no problem.

This "clone" copy has also been made from an older version of the registered
JUDY and contains some minor (and documented) bugs.  They are unfortunate
remmnants from the previous version.  They should not interfere too much
in your trial of the product and are all pointed out below so as to prevent
undue frustration.  The latest version of JUDY, ver. 2.00, has eliminated
these bugs.  If you experience problems not noted in this READ.ME file or
not mentioned in JUDY.DOC, then you probably do indeed have an incompatible
system.

If any question remains you may always take advantage of the 30 day
guarantee on the registered version as an acid test of the "real" thing.

You are encouraged to give copies of this diskette to your friends,
BUT BY NO MEANS SHOULD YOU SEND OUT CONFIGURED COPIES OF THIS SOFTWARE.
The reason, which will become clear after you read the documentation, is
that running JUDYK.COM (the calendar part) writes YOUR identification
information directly to the COM file itself.  Your friends won't be
able to run such a "tainted" copy.  So please, when you pass on the
software, give only ORIGINAL copies of this diskette.


Now, as for the files on this diskette, please confirm that you have the
following:

 -the software--
	 JUDYK.COM	: the full-screen calendar, sorting program.
	 JK   .COM	: the background software, Remains Resident.
	 PHONE.EXE	: the Lookup Utility.

 -a little help--
      INSTALLJ.BAT	: installation batch job.
	 JUDY .BAT	: simply calls JudyK, then loads JK
	 JUDY .HLP	: help screens for JUDY...can be removed.
	 JUDY .DOC	: the complete documentation
	 PCSIG.TXT	: this file
	 

TO INSTALL JUDY, read the documentation on how to run INSTALLJ.BAT and how
to then configure JUDY to your tastes.

As for brief rundown of KNOWN BUGS (which have been FIXED in the registered
version, but which got through here due to time constraints more than
anything):

    --WEEKLY reminders (placed using the 'W' key) actually pop up a couple
      days too early.  But it's a two day gap that's consistent so you
      can plan around it.  Deleting weekly reminders requires you to go
      to the original day you placed the reminder, and NOT the two-day-early
      weekday when the message mistakenly pops up.
      
    --Deletions of entries from the calendar aren't permanent
      unless you also ADD an entry during the same session when you
      delete entries. 
      
    --The modem DIAL feature works problematically even on a good day.
      It has been eliminated altogether from the registered version.
    
    --JK cannot be unloaded from memory except by rebooting.  It can be
      unloaded directly from a DOS command in the registered version.
      
    --Printouts of schedules contain extraneous blank lines.
      
    --Entries written to disk via the JOT option in JK all come out
      with a p.m. timestamp, even if you actually recorded them in the
      morning.
      
    --JudyK, upon exit, does not restore the video color the system
      had upon entry, but requires a CLS command to be issued to clean up
      the screen (noticable only for those of you with color displays).
      
    --Typing in JOT or MEMO appointment times are hard to see because
      the numbers are displayed in dark blue against black (changed to
      a very visible yellow in registered version).
      
   --JUDY has known clock incompatibilities with Leading Edge, ATT 6300
     and some Tandy systems--but so do a lot of other programs.   Guess
     what that means?  THOSE systems are less "IBM compatible" than you
     thought.  But public domain patch programs exist which solve these
     problems.
     
   --Some minor but not fatal problems have been reported on
     Model 30 PS-2 machines but the reports have not been confirmed
     as of this date.
     

 That sums it up.  We hope you enjoy trying out JUDY.

				     InterFact Software
				     PO Box 9415
				     Washington, DC 20016
				     800-658-8998  or  202-364-6129
				     
				     June 21, 1990
				     
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0848

     Volume in drive A has no label
     Directory of A:\

    JUDY     HLP      5200   3-20-86  10:08a
    JUDY     DOC     65809   6-26-90   8:37p
    JUDYK    COM     59793   6-19-90   9:05p
    JK       COM      8741   3-02-87   9:53a
    PHONE    EXE     23328   6-13-90   2:49p
    JUDY     BAT        92   6-19-90  12:15a
    INSTALLJ BAT      4326   6-21-90   9:15p
    PCSIG    TXT      4618   7-04-90   7:09p
    GO       BAT        38  10-15-87   1:11p
    FILE0848 TXT       953   8-13-90   2:32a
    GO       TXT      1002   8-13-90   2:34a
           11 file(s)     173900 bytes
                          142336 bytes free
