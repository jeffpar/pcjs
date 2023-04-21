---
layout: page
title: "PC-SIG Diskette Library (Disk #1327)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1327/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1327"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "DESTINY AND DAILY BREAD"

    DESTINY is a simple text-adventure game designed to teach Biblical
    truths. In each place encountered, you must make a decision in
    order to determine your destiny. The adventure has its own symbolism
    which must be interpreted to succeed in the game.
    
    DAILY BREAD is a Bible program that will display a different verse or
    reading from the King James version for every day of the year. One can
    read the entire Bible by following DAILY BREAD's daily readings for a
    whole year.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## DB.DOC

{% raw %}
```




                          DAILY BREAD DOCUMENTATION

     DESCRIPTION:

          "Daily Bread" is a Bible calendar program for the IBM PC and
          compatibles.  It displays today's day and date, a Bible verse for
          the day, and a Bible reading.  It can be run as a memory-resident
          program and pop up over other programs. If you follow the Bible
          readings over the course of a year, you will have read the entire
          Bible. Passages are from the King James Version.  (NIV version
          available through registration. See below.) This is a "red-letter
          edition"; sayings of Jesus are displayed in red (on a color
          monitor, which is not necessary to run the program).  You might
          want to run "Daily Bread" from your "autoexec.bat" file so that
          the program appears as a friendly greeting every time you turn on
          your computer. If you do so, place the command to run the program
          after your clock chip is set with today's date or after you run
          the DOS date command.

     THE SHAREWARE CONCEPT:

          "Daily Bread" is provided as user-supported software.
          User-supported software is a means for the computing community to
          receive quality software and at the same time support software
          authors directly.  It is based on the following assumptions:

                 The user can best determine the value and usefulness of
                 software by trying it on his own system.  After trying a
                 program one can tell whether it serves his or her
                 applications, needs, and tastes.

                 The creation of independent personal computer software can
                 and should be supported by the computing community.

                 People should be able to copy programs freely to make the
                 most use of the powerful tools provided by electronic
                 information.

          If you decide to use this program, please register for $5. I
          decided to offer the program as completely as possible, instead
          of offering add-ons for registered users.  This procedure results
          in less hassle and less expense for both of us.  Please see below
          for getting the NIV version of "Daily Bread" and another product
          that is available.  Your support helps me maintain and enhance my
          hardware and software.  Please send registration to:

                                   Robert S. Smith
                                  557 Plantation Rd.
                               Pelican Lake, WI  54463

          Copyright (C) 1988 by Robert S.  Smith.  All rights reserved.
          Non-registered users are granted a limited license to use this
          product on a trial basis, and to copy the program for trial use
          by others subject to the following limitations: 1) This program
          is distributed as is.  2) No fee, charge, or other consideration
          is requested or accepted.  Shareware distributors who charge for
          disks must have written permission to distribute this program.


                                       1




    OTHER PRODUCTS AVAILABLE

          "Daily Bread" is also available with verses from the New
          International Version of the Bible.  You may receive that version
          of "Daily Bread" by registering for $10.  I have another
          shareware program called "Bible-Q."  This program is a
          trivia-type game with 1200 multiple-choice questions drawn from
          the pages of Scripture. The player can pick the category and
          difficulty level of the questions, which are arranged in five
          categories:  Old Testament A, Old Testament B, Geography, Life of
          Jesus, and New Testament.  Send $15 and get the latest,
          registered versions of both "Daily Bread" and "Bible-Q."

     SYSTEM REQUIREMENTS:

          Beyond an IBM PC or good compatible with one disk drive and 128 K
          of memory, no special equipment is necessary.  The game runs
          equally well on monochrome or color systems.

     INSTALLATION:

          First you will probably want to make a backup copy of the game.
          Use the "diskcopy" command or the "copy a:*.* b:" command. Then
          set aside one of the disks in your archive.  To start the game,
          boot your computer with your DOS disk, if you have not done so
          already. At the A> prompt insert your "Daily Bread" disk in the
          A: drive, type "db" (no quotes), and hit enter.  The game will
          load automatically.  If you have a hard drive, you may copy the
          files to the root directory or any directory of your choice.  You
          must be in the directory to run the program.

          Example installation for hard drive ( ' marks comment lines,
          don't type these in):

          '   insert "Daily Bread" disk in a:
          '   change default drive to hard drive
          cd \           ' go to root directory
          md \db         ' make new directory
          cd \db         ' go to new directory
          copy a:*.*     ' copy files to new directory
          db             ' run program

          Type in commands exactly as shown and hit the <enter> key after
          each line, or use the batch file that has been provided.  To use
          the batch file, insert your "Daily Bread" disk in the A: drive,
          and at the A> prompt type "hinstall" no quotes, and hit <enter>.

          Then you may want to set up an autoexec.bat file as follows:
          (You may use your word processor to modify your autoexec.bat file
          if it can output files in ASCII, that is, without special
          characters.)

          ...          ' other commands in the autoexec.bat file
          date         ' or command that sets clock chip
          cd \db       ' if you have db directory for this program
          db           ' run the program.
          ...          ' other commands.


                                     2









     USING DAILY BREAD

          You may use the left and right arrow keys to scroll back and
          forth in the calendar to see the passages and readings for other
          days of the year, or simply to see what day of the week a certain
          date will fall on.  If you have scrolled to a different day, you
          may use the PgUp key to return to today's date and information.
          The PgUp command appears toward the bottom of the screen when the
          calendar is not displaying today's information.

     MAKING DAILY BREAD MEMORY-RESIDENT

          Add the r parameter to the command line when you run the program.
          For example, at the C> prompt, type "db r" and enter.  There must
          be a space after "db".  "Daily Bread" uses disk-swapping while in
          the memory-resident mode.  This way it takes up only 11K of ram.
          Otherwise it would take up much more.  However, this means that
          it is probably impractical to run "Daily Bread" in resident mode
          unless you have a hard drive.  This may change when the newer and
          faster floppies with larger capacity come to market.  When "Daily
          Bread" is run in the resident mode, it creates files named V500
          and V501.  Do not erase these files while the program is
          resident, since it may cause your system to hang the next time
          you pop Daily Bread up or down.

          To make "Daily Bread" resident from boot up:  instead of adding
          the lines as noted in the installation procedure, add these lines
          to your autoexec.bat file:

          cd \db
          db r

          This assumes that you have set up a directory named db one level
          down from the root directory and that you have copied all the
          "Daily Bread" files to this directory.  (Use hinstall as noted
          above.)

          NOTE:  "Daily Bread" should pop up over most text-based
          applications and applications that use CGA graphics.  It will not
          pop up over programs that use EGA or VGA graphics, or if it does,
          it will not work properly.  If necessary, use "Daily Bread" as a
          standalone program.

     CONFLICTS WITH OTHER MEMORY RESIDENT PROGRAMS

          If you run into conflicts, try altering the order in which you
          install these programs.  For example, I use the desktop program
          from PCTOOLS in resident mode, and it works if I install it
          before "Daily Bread" using the /r parameter but not the /cs
          parameter on the command line.  If this procedure doesn't work,
          run "Daily Bread" without making it resident.



                                     3












     ALTERNATE HOTKEYS

          The default hotkey for popping up "Daily Bread" in resident mode
          is alt x (hold down the alt key and then press x). There are
          three alternate hotkeys in case alt x conflicts with other memory
          resident programs you are running or with keys your application
          uses.  The other three hotkeys are alt d, alt f, and alt g.  You
          may specify these hotkeys by adding d, f, or g as a parameter to
          the command line when running the program.  For example, to make
          Daily Bread resident with alt d as the hotkey, enter the
          following at the C> prompt "db rd" (no quotes).

     NOTE:

          DO NOT WRITE-PROTECT THE DISK.  The program needs to write to the
          disk in the normal course of operations.

     TANDY USERS (& other compatibles?)

          If you have a Tandy 1000, you may find that the separate arrow
          keys do not work properly with this program.  If so, use the keys
          on the number pad as follows:  4 for the left arrow key, 6 for
          the right arrow key, 9 as the PgUp key, and 0 as the Ins key.

     MARKING READINGS

          As noted above, if you follow the Bible readings given in this
          program each day for a year, you will have read the entire Bible.
          However, since you probably don't run your computer every day, or
          perhaps miss a day in your reading (we're all human), I have
          provided a system where you can mark the last passage that you
          have read.  The next time you run the program, it will display
          the next reading in the series.  The only thing you need to
          remember is to mark each reading when you are finished. Use the
          Ins key to mark a reading (or the 0 key in the case of certain
          compatibles).  A check mark will appear by the function key
          display at the bottom of the screen after you have marked a
          reading.


     ENDING THE PROGRAM:

          Press the Esc key.











                                     4












                            REGISTRATION FORM
                DAILY BREAD FOR THE IBM PC AND COMPATIBLES

                                                    Date: _______________


    Name:     __________________________________________________

    Address:  __________________________________________________

    City    _________________________  State ______  Zip _____________


    Where did you obtain your copy of "Daily Bread"? _____________________

    Amount  __________       ($5 for KJV Daily Bread )

    Version        KJV ___        NIV ___

(Send $10 for NIV "Daily Bread", or $15 for both "Bible-Q" and "Daily Bread."
See documentation for description of "Bible-Q.")


    Type of computer _______________________

    Type of graphics card ____________________

    Type of monitor  _______________________


    Check one:

            5.25" diskette __

            3.5"  diskette __


    Suggestions:





    Comments:





    Mail to:      Robert S. Smith
                  557 Plantation Road
                  Pelican Lake, WI  54463




    Thank you for your support.

```
{% endraw %}

## DESTINY.DOC

{% raw %}
```

I. Introduction

     "Destiny" was  constructed using the Hayden Software 
"Computer Novel Construction Set."  It is a pure text 
"adventure" game that is designed to teach some very important
concepts.

     The only goal in the game is to win.  There are some
points given, but a limitation of the Construction Set is that
points are only given when you DO something, and I wanted points
to be given when you REACHED somewhere.  Thus, you should not
expect to reach a certain level of points (as in the original
Adventure game) and thus win.  Winning only occurs when you
make the right decisions at turning point(s) in the game.

     You will eventually be given a goal to reach.  You then
must wander around, seeking that goal.  Since this game is
designed to teach you some things based on your world-view, I
recommend that you first visit the places that appeal to your
personality.  You can always visit the others later, after you
have won the game at least once.

     This game is designed to be fun to play, but, also, to teach
you important truths from the Bible.  All scripture quotations are
from the New American Standard Version.

     As in any adventure-style game, you should save frequently,
especially when you reach points of decision (but see Bug alert,
below).

     If you seem to be stuck, wait a while.  Something good
(or bad) may happen to you and give you a clue as to what to
do next.  Also, many of the events in the game are random, so
play will vary from one run to the next.

     If you are a newcomer to computer games, basically, adventure-
style games are like a novel where you decide what happens next.
You can change your position (n, s, e, w) or manipulate objects
to steer the action wherever you would like it to go.  You then
experience the consequences of your actions.

     To start the game, put the disk it came on into your floppy
drive and either copy everything onto a hard disk, or type:

	A: 
	PLAY DESTINY

following both of those lines by the enter key, of course.  After
that, away you go.


II Commands

     Other than answers to questions or calling on specific
individuals (hint, hint) the ONLY commands recognized in the
game are:

	n	Move North
	s	Move South
	e	Move East
	w	Move West








	take	Carry an object with you.
	  Synonymns:	get, pick up, grab

	drop	Release an object from your posession
	  Synonymn:	put down

	kick	(Self-explanatory)
	  Synonymn:	punch

	shoot
	  Synonymn:	kill

	open	(i.e., a door - hint, hint)

	sign	(i.e., a contract - hint, hint)

	save	Saves the game at the current situation

	restore	Brings back a previously saved game.

III Rights (yours)

     You are granted permission to copy this program as
much as you like, and give it to your friends, with the
simple limitation that you are not to alter it in any way,
and you must include this file with it.

IV Future (mine)

     If there is enough interest in this game, I would like
to re-do it from scratch, not using the Construction Set.
This would allow some graphics, as well as more sophisticated
characters.  For example, the initial design for Mishkeit was to
have him follow you around and have conversations with you, but 
that simply was not possible with the Construction Set approach.

     Also, the Construction Set limits the designer to detecting
a correct answer to a question; I would have liked to do different
things based on many different possible answers.

     Do not think that I am totally dissatisfied with the Construction
Set.  It allowed me to get a clearer idea of just what I want to
do so I can intelligently design the next game.

V. Me.

     My name is Pete Koziar, and if you have any questions, or are
REALLY REALLY stuck, or want to discuss my symbolism, or even to
argue with me, my address is:

	3602 Cedar Drive
	Baltimore, Md. 21207










VI Bug Alert

     There seems to be a bug in Computer Novel Construction Set that
only rears its ugly head in the "Good People" room (the one with
the fireplace that you enter from the Point of Decision).  If you
enter that particular room, save the game, and restore it from
that point, you will never be able to leave that room (at least,
not alive).  That is the only room that seems to exhibit the bug,
and it is so close to the very start of the game that saving then
restoring does not buy you any more than quitting (or, of course,
dying) and restarting it.

(the bug derives from a trick that I used in that room to get around
one of the restrictions in the Construction Set -- it is used nowhere
else, and it is essential to the functioning of that room)

VII Thanks

     First of all, thanks to my wife for enduring a year of
working on this thing for an hour or so a week.  Secondly, thanks
to Pastor Rick Leineweber, who brought this whole thing to be with
an innocent suggestion that we do a simple game with lights and
switches to teach eternal truths.  One thing led to another and, well,
you know...

```
{% endraw %}

## FILE1327.TXT

{% raw %}
```
Disk No: 1327
Program Title:  DESTINY, DAILY BREAD version 2.0S
PC-SIG version: 1.1

DESTINY is a simple text-adventure game designed to teach Biblical
truths.  In each place that is encountered, you must make a decision in
order to determine your destiny.  The adventure has its own symbolism
which must be interpreted to succeed in the game.

DAILY BREAD is a Bible program that will display a different Bible verse
and readings from the King James Version for every day of the year.  One
can read the entire Bible by following DAILY BREAD's daily readings for
a whole year.

Usage:  Adventure Game/Daily Enlightenment.

Special Requirements:  None.

How to Start:  Type GO (press enter).

Suggested Registration:  $5.00 and up for DAILY BREAD.  None specified
for DESTINY.

File Descriptions:

DB       DOC  Program documentation.
DB       EXE  The DAILY BREAD program.
DESTINY  DAT  Description file.
DESTINY  DOC  Documentation.
DESTINY  MES  Message file.
FILES    TXT  File descriptions.
HINSTALL BAT  Installation batch file.
PLAY     EXE  Main program.
PRINTDB  BAT  Prints documentation.
READ     ME   Introductory text file.
READINGS      Daily readings
SPLIFT   PAS  Daily passages.

PC-SIG
1030D E Duane Avenue
Sunnyvale CA 94086
(408) 730-9291
(c) Copyright 1989 PC-SIG, Inc.

```
{% endraw %}

## FILES.TXT

{% raw %}
```
Here is a brief description of the files on this disk:



DB       EXE    63925   the executable program file
DB       DOC    12416   Daily Bread documentation
PRINTDB  BAT      256   batch file for printing the documentation
READINGS         7320   file containing Scripture reading list
SPLIFT   PAS    73200   file containing Bible verses
HINSTALL BAT      515   batch file for installing Daily Bread on hard drive
READ     ME       768   please read this file before starting
FILES    TXT            this file
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1327

     Volume in drive A has no label
     Directory of A:\

    DB       DOC     12416   3-19-89   1:46p
    DB       EXE     63925   3-20-89   8:37p
    DESTINY  DAT     15501  11-10-87  10:39p
    DESTINY  DOC      5122  12-08-87  10:18p
    DESTINY  MES     40825  11-10-87  10:41p
    FILE1327 TXT      1337   4-24-89   8:42a
    FILES    TXT       527   3-21-89   9:31p
    GO       BAT        38  10-19-87   3:56p
    GO       TXT      1464   2-22-89   9:35a
    HINSTALL BAT       515   3-17-89  11:19p
    MANUAL   BAT       153   1-23-89   3:13p
    PLAY     EXE     43008   5-22-85   6:25p
    PRINTDB  BAT       256   5-03-88  10:52p
    READ     ME        768   3-21-89   3:52p
    READINGS          7320   4-27-88   5:16p
    SPLIFT   PAS     73200   5-05-88   4:20p
           16 file(s)     266375 bytes
                           46080 bytes free
