---
layout: page
title: "PC-SIG Diskette Library (Disk #3763)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3763/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3763"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## CBMATH.TXT

{% raw %}
```
CBMATH.TXT - CHALKBOARD MATH FOR WINDOWS
PRODUCT DOCUMENTATION - VERSION 1.50
_______________________________________________________________


RELEASE NOTES
-------------
Version 1.5 is an interim release of Chalkboard Math.
Improvements implemented in this release include the
following:
	More efficient memory handling.
	Improved graphics and animation.
	Improved sound effects (Chalkboard Math now supports
		Windows-compatible sound cards or other audio
		hardware).
	Wider range of difficulty levels.
	Improved keyboard-command support.
	

INTRODUCTION
------------
Chalkboard Math is a fun, easy-to-use math tutor program that
teaches and enhances elementary math skills in children
between the ages of 5 and 12.  The program can be used by a
single child or by a child and an adult.

The program presents the player with a blank chalkboard area
in which elementary math problems are drawn, answered, and
assessed.

Progress through a given Chalkboard Math session is measured
via a Scoring Mode option, in which correct answers are
tracked and difficulty levels are automatically adjusted.


PROGRAM FILES
-------------
The Chalkboard Math package consists of 13 files:

README.TXT
An ASCII text information file, containing program notes and
installation guidelines.  This file can be loaded and viewed
with Windows Notepad or any text editor or word processor that
accepts the ASCII text file format.

CBMATH.EXE
The executable program file.

CBMATH.HLP
The Windows Help file, used for providing comprehensive
run-time help for Chalkboard Math users.  A registration form
is included in the Help file; both it and any other Help topic
may be easily printed through the Windows Help menu bar
"File/Print Topic" command.

CBMATH.INI
The initialization file, used for storing program
configuration data and the Chalkboard Math high-scores Honor
Roll.

CM_01.MDF - CM_08.MDF
Music data files for Chalkboard Math's audio hardware support.

CBMATH.TXT
This file, containing program information, notes, general
instructions, and an ASCII text format registration form (see
end of file).


PROGRAM NOTES
-------------
Chalkboard Math runs within the Microsoft Windows environment,
and requires the following:

* VGA graphics capability (640x480) or higher.  EGA-equipped
systems do not provide sufficient resolution for the
Chalkboard Math display.

* Microsoft Windows version 3.1 or higher.  This release of
Chalkboard Math cannot be run under previous versions of
Windows.

Chalkboard Math will detect a Windows-compatible sound card or
other audio hardware, and attempt to make use of that hardware
for its music sound track routines.  Audio hardware is
recommended for Chalkboard Math 1.5, but is not required in
order to run the program.

A Windows-compatible mouse or other pointing device is not
required, but is strongly recommended.

Chalkboard Math runs in 16-color mode, but will run acceptably
on monochrome or black & white VGA systems -- provided the
minimum resolution requirements are met.


INSTALLATION GUIDELINES
-----------------------
Although Chalkboard Math 1.5 can be run from a floppy disk, we
strongly recommend installation to a hard disk.

1. We recommend making a backup copy of your program disk.
Keep the master copy in a safe place and use the backup disk
for program installation.

2. Copy the program files (CBMATH.EXE, CBMATH.HLP, CBMATH.INI)
and the music data files (CM_01 - CM_08) from your master disk
to an appropriate subdirectory on your hard disk (e.g.,
C:\CBMATH).

There are no hidden files or "key" files on the program disk,
so the file copying process can be accomplished with the DOS
"COPY" command or, if you prefer, through the Windows File
Manager File/Copy command.

This file, CBMATH.TXT, is not required in order to run
Chalkboard Math.  However, the three program files
(CBMATH.EXE, CBMATH.HLP, and CBMATH.INI) are required, and
must all reside in the same directory in order for Chalkboard
Math to work properly.  The music data files (CM_01 - CM_08)
must also reside in the Chalkboard Math directory; they are
required by Chalkboard Math's MIDI-based music routines.

3. You may use the "Windows Setup" utility to setup a program
item (icon) for Chalkboard Math.  Windows Setup will recognize
the CBMATH.EXE file and assign its icon to a program group for
you.

or...

You may assign a program item icon to Chalkboard Math
manually, through the File/New commands in Program Manager.

Always make sure that the correct path and filename (e.g.,
"C:\CBMATH\CBMATH.EXE") is assigned to the Chalkboard Math
program item.  The "Browse" control in the Program Item dialog
box will make it easy to locate and assign the correct path
and filename.

4. If installed correctly, Chalkboard Math should load from
the Program Manager screen when the program's icon is
double-clicked (or from File Manager when the Chalkboard Math
listing is selected with "Run" or double-clicked).


USING CHALKBOARD MATH
---------------------
Chalkboard Math was designed to be fun and easy to use
-- educational software that "feels" like a game to the user,
yet sharpens elementary math skills through eight different
levels of difficulty.

Although Chalkboard Math can and should be used by children to
sharpen math skills on their own, the program is even more
valuable when used by an adult and child together.

Help is available at any time through the Chalkboard Math menu
bar "Help/Contents..." command.  You can directly access any
Help topic through the Contents, or browse from topic to
topic.  Help topics may be printed through the Windows Help
menu bar "File/Print Topic" command.


GETTING STARTED
---------------
Chalkboard Math will post a warning or notification message
dialog if it detects an invalid or missing program file during
start-up.

Depending on the nature of the error, you may still be able to
run Chalkboard Math, but selected program features may be
disabled.  If you are given a warning message, please check to
make sure each of the program files from your master disk have
been successfully copied to the same directory (see
"INSTALLATION GUIDELINES" above).

Chalkboard Math's interface opens with the default chalkboard
display and button control panel.

A group of four math mode controls are located along the left
side of the control panel.  These buttons are used to create a
new problem (Addition, Subtraction, etc.) and draw it to the
chalkboard screen.

The mouse can be used for "pressing" any of the four math mode
buttons.  The keyboard numerical keypad "operator" keys (+, -,
*, /) can also be used for selecting the desired problem's
math operation.

Ten numerical button controls (0-9) are provided for entering
the answer to any displayed problem.  These controls are
automatically disabled after an answer has been completely
entered (based on the total number of digits in the answer
itself).

The mouse can be used for "pressing" any of the ten numerical
buttons.  The keyboard number keys 0-9 or numeric keypad
number keys 0-9 may also be used for entering answer numbers.

NOTE:  Full use of your keyboard's numeric keypad requires the
keyboard "NumLock" feature to be turned on.

Answers are drawn on-screen from left to right.

A "GO" button control is provided for checking the entered
answer.  The keyboard "G" key can be used for checking the
entered answer.

A "BACK" button control is provided for "erasing" any answer,
allowing the user to start entering a new answer in its place.
The keyboard "B" key can be used for erasing the current
answer and starting over.

Chalkboard Math will create random math problems throughout a
twenty-problem lesson.  Progress through the lesson is
displayed on the yellow "LED" progress meter display along the
underside of the chalkboard graphic.  The meter will fill with
red as each problem is completed.

Comments and score updates are given in the large status
window just under the chalkboard.  If the answers on both the
first and second attempts are incorrect, the answer to the
problem is also provided in the status window.

The complexity of the problems generated by Chalkboard Math
can be manually set via the menu bar "Difficulty" command,
which allows easy selection among eight levels of difficulty.


CHALKBOARD MATH MODES OF OPERATION
----------------------------------
Chalkboard Math may be run in two different modes, Scoring
Mode or Practice Mode.

In Scoring Mode, Chalkboard Math will compile and track a
user's score, based on the number of correct answers given
throughout a lesson.  A higher score is awarded for correct
answers given on the first attempt.  Proportionally higher
scores are awarded at higher difficulty levels, as well.

If the user's score qualifies, he or she is "inducted" into
the Chalkboard Math Honor Roll, which records the top five
"Math Whizes" and their scores.

In Practice Mode, Chalkboard Math simply provides math
problems and checks for correct answers, but does not track a
running score throughout the twenty problem lesson.  As a
result, you cannot qualify for the Chalkboard Math Honor Roll
in Practice Mode.

NOTE:  Switching modes in the middle of a math session will
clear the score and reset the program.


AUTO-ADVANCE
------------
Although Chalkboard Math's difficulty level can be manually
set via the menu bar "Difficulty" command, the program can
also automatically advance the difficulty level during a
twenty-problem lession.

When Auto-Advance is on, Chalkboard Math will increase the
difficulty level each time five correct answers are entered at
the current level.


KEY FEATURES
------------
Please note the following key features, accessible from the
menu bar:

New Lession
-----------
The New Lession command clears the chalkboard area, resets all
scores to zero, and allows the player to restart a Chalkboard
Math lession.

This command is available through the menu bar "File/New
Lession" command.

Honor Roll
----------
The current top five scores, as recorded by Chalkboard Math,
may be viewed by selecting the menu bar "File/Honor Roll..."
command.

Clear Honor Roll
----------------
The contents of the Chalkboard Math Honor Roll can be erased
by selecting the menu bar "File/Clear Honor Roll..." command.

Scoring Mode
------------
The Scoring Mode feature can be toggled on and off through the
menu bar "Options/Scoring Mode" command.

Scoring Mode (Enabled)
----------------------
With Scoring Mode enabled (indicated by a check mark -- the
default), the program provdes the user a total of 20 problems
in a given lession.  The program will keep a running score of
the number of correct answers given.

A higher score is awarded when the problem is correctly
answered on the first attempts.  Higher scores are also
awarded at the higher difficulty levels.

Chalkboard Math maintains a record of the top "Math Whiz"
players and their high scores.  The program will prompt the
player for his or her name if their score ranks in the top
five, and will record their name and score in the Chalkboard
Math Honor Roll, as well as the date on which the score was
reached.

Scoring Mode (Disabled)
-----------------------
With Scoring Mode disabled, the program runs in Practice Mode,
and does not track the number of correct answers given or
offer the player the option to automatically advance to the
higher difficulty levels.  However, the player can always
manually select any difficulty level in which to practice.

NOTE:  Regardless of the Scoring Mode setting, only two answer
attempts are allowed per problem.

Difficulty Level Control
------------------------
The current difficulty level, ranging from 1 to 8, may be
selected from the menu bar "Difficulty" command.  Each of the
eight levels will provide for generation of increasingly
complex math problems.

The Auto-Advance option may be used to automatically increase
the difficulty level when 5 correct answers are recorded at
the current level (see below).

Red stars "thumb-tacked" to the top of the chalkboard frame
represent the current difficulty level.

NOTE:  During start-up, Chalkboard Math always defaults to the
lowest difficulty level (Level 1).

Auto-Advance (Level)
--------------------
The Auto-Advance option automatically increases the Chalkboard
Math difficulty level when 5 problems have been correctly
answered at the current level.

This command is available through the menu bar
"Options/Auto-Advance" command.

Chalkboard Math may be run with Scoring Mode enabled (turned
on) and Auto-Advance disabled (turned off), allowing the
player to compete for a high score without having the
difficulty levels adjusted during play.

The Auto-Advance option is only available when Scoring Mode is
enabled.

Help System
-----------
Comprehensive run-time help for Chalkboard Math users is
provided through the menu bar "Help/Contents" command.

You may select specific topics to read, or browse from topic
to topic.


PRODUCT SUPPORT
---------------
If you have a problem with this program, and can't find the
answer in the Help System or text file documentation, you can
contact Pegasus Development's Tech Support Hotline (furnished
courtesy of Advanced Support Group, Inc.) by telephone Monday
through Friday from 9:00 a.m. to 5:00 p.m. C.S.T.

Our number is:  (314) 965-5630

Please be prepared to furnish us information regarding your PC
hardware, operating system, and version of Microsoft Windows
you are currently running.

And, if you manage to stump us, we can usually get back to you
within a day with a solution.


LIMITED WARRANTY AND REMEDIES
-----------------------------
Before release, our applications software is tested on a wide
variety of hardware configurations, under the most rigorous
test conditions possible.  We therefore warrant that the
software will perform in substantial compliance with the
specifications set forth in this text, provided that the
software is used on the computer hardware and operating
system(s) for which it was designed.

Pegasus Development makes no other warranties, expressed or
implied, with respect to this software (or media, if this is
a registered version), including its quality or fitness for a
particular purpose.
 
In no event will Pegasus Development be liable for any direct,
indirect, special, incidental, or consequential damages
arising from the use of or the inability to use this software,
even if Pegasus Development has been advised of the
possibility of such damages.
 
Pegasus Development is not responsible for any costs
including, but not limited to, those incurred as a result of
lost profits or revenues, loss of time or use of the software,
loss of data, the cost of recovering software or data, the
cost of substitute software, claims by third parties, or
similar costs.  In no event will Pegasus Development's
liability exceed the amount of the paid registration fee. 


PRODUCT REGISTRATION
--------------------
Chalkboard Math is shareware, not freeware.

Product registration is necessary if companies like ours are
to continue providing quality software for the shareware
marketplace.

Registration entitles a single end-user to install and run
this program on a single personal computer or work station.
If you are interested in obtaining a registration for more
than one user, please read the "Site License Registrations"
section below.

Registered users receive the registered version of this
product (available in 3.5" or 5.25" disk formats).
Registration also entitles the user to advance release
information on upcoming Pegasus Development products
(including updates and upgrades to this program) -- as well as
other new titles in our expanding product line.

The single-user registration fee for this product is $16.00
(U.S.).  Registrations are accepted both by telephone (with a
major credit card) or by mail.

NOTE:  Registrations from outside the continental U.S. or
Canada should include an additional $2.00 for shipping and
handling.

Registrations are handled by Advanced Support Group, Inc.  As
a result, all credit card registrations will appear on your
statement as "ASG, Software - Services."

For your convenience, a registration form is provided here and
within the program's help file (accessible via the Windows
Help system as outlined previously).  The help file
registration form, or any help topic, is easily printable
through the Windows Help menu bar "File/Print Topic" command.


SITE LICENSE REGISTRATIONS
--------------------------
Site license registrations are available for corporations
wishing to obtain multiple (20 or more) registrations of this
product.  Site licenses allow many users to obtain product
registration at a substantial discount from the standard
registration fee.

Please contact Pegasus Development for site license
information.


_____________________

We at Pegasus Development appreciate your support, and hope
you enjoy using Chalkboard Math 1.5.

CHALKBOARD MATH (Version 1.5)
Copyright (c) 1993 Pegasus Development

"Microsoft" and "Windows" are registered trademarks of
Microsoft Corporation

----------------------------------------------------------------------------

SOFTWARE REGISTRATION FORM
--------------------------
Return this form along with your remittance to:

Pegasus Development
CBMath 1.5 Registration
11900 Grant Place
Des Peres, MO. 63131
U.S.A.

You can also register by telephone using your MasterCard,
American Express, or VISA through Advanced Support Group's
Product Registration Hotline at 1-800-788-0787.

____ Chalkboard Math 1.5 Registration(s) @ $16.00 U.S. ea.

For orders outside the continental U.S. and Canada, please
add $2.00 shipping and handling.  Checks and money orders
must be drawn on a U.S. bank.

Total enclosed . . . . . . . . . . . . . . $______________
	
Payment by:  [] Check   [] AmEx    [] MasterCard   [] VISA
	
Card# _______________________________ Exp. Date __________

Signature of Cardholder __________________________________

Name _____________________________________________________

Address __________________________________________________

City __________________________ State/Province ___________

Zip/Postal Code________________ Country __________________

Telephone (______)________________________________________

Disk Size Required: [] 3.5" (720K)   [] 5.25" (360K)

Please indicate where you obtained Chalkboard Math 1.5:

(Mail Order, BBS, etc) ___________________________________
```
{% endraw %}

## README.TXT

{% raw %}
```
README.TXT - CHALKBOARD MATH
VERSION 1.50a
_______________________________________________________________


Please take the time to review this file before installing and
running Chalkboard Math.


INTRODUCTION
------------
Chalkboard Math 1.5 is an easy to use math tutor for the
Microsoft Windows operating environment (version 3.1 or
higher).

The program polishes elementary math skills in children
between the ages of 5 and 12.  The program can be used by a
single child or by a child and an adult.

Chalkboard Math is also an excellent way of introducing a
young person to computer use, offering an entertaining way of
practicing both keyboard and mouse use.


PROGRAM FILES
-------------
The Chalkboard Math 1.5 package consists of 13 files:
	README.TXT
	CBMATH.EXE
	CBMATH.INI
	CBMATH.HLP
	CBMATH.TXT
	CM_01.MDF
	CM_02.MDF
	CM_03.MDF
	CM_04.MDF
	CM_05.MDF
	CM_06.MDF
	CM_07.MDF
	CM_08.MDF


READ ALL ABOUT IT
-----------------
Full product documentation is contained in the CBMATH.TXT
file.  This is an ASCII text file which can be easily loaded
and viewed with Windows Notepad, Windows Write, or any word
processor or text editor that supports the ASCII text format.
This file includes a program description, instructions, and
technical notes.

Hypertext program documentation is supplied in the CBMATH.HLP
file.  This is a Windows Help System format file, which can be
loaded and viewed with Windows Help -- and is directly
accessed from within Chalkboard Math via the menu bar
"Help/Contents..." command.

Both of these files contain all the information you need to
install and run this program.  The Windows Help System
includes the provision for easily printing any topic or topics
from the CBMATH.HLP file.  This handy feature can be used to
turn your "manual on disk" into hard copy for future
reference.


QUICK & DIRTY START-UP
----------------------
We recommend that you make a backup copy of the master program
disk(s) before installing or running Chalkboard Math.  We also
recommend that this program be installed to, and run from, a
hard disk.

To get Chalkboard Math loaded and running with a minimum of
fuss, simply create a new directory or subdirectory on your
hard disk (e.g., C:\CBMATH) and copy the entire contents of
your master disk to that new directory.

From Microsoft Windows, you can run this program from File
Manager by "double-clicking" the CBMATH.EXE file entry or by
selecting the CBMATH.EXE file entry and issuing the menu bar
"File/Run" command.

Of course, the program's icon can be easily installed into a
new or existing Program Manager group for quick, one-step
running.

A complete summary of all commands and program features is
provided in the CBMATH.TXT file and within the Chalkboard Math
help system.


WARRANTY INFORMATION
--------------------
Warranty information regarding this product is provided in the
ASCII text file, CBMATH.TXT and in the Windows Help file
CBMATH.HLP.


PRODUCT REGISTRATION
--------------------
Chalkboard Math (version 1.5) is shareware, not freeware.

The single-user registration fee for this product is $16.00
(U.S.).  Registrations ordered from outside the continental
United States or Canada should include an additional $2.00 for
shipping and handling.

Multiple-user site licenses are available for this product.
Site license registrations are a cost-effective way of
registering several end-users for a substantially lower
per-copy cost than individual registrations.

Complete registration information, including printable
registration forms, is provided in the CBMATH.HLP file shipped
with the shareware version of Chalkboard Math.  The CBMATH.HLP
file is accessed via the Windows Help System -- menu bar
command "Help/Contents."  Registration information is also
provided in the ASCII text file, CBMATH.TXT.


_____________________

CHALKBOARD MATH (Version 1.50)
Copyright (c) 1993 Pegasus Development

"Microsoft" and "Windows" are registered trademarks of
Microsoft Corporation.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3763

     Volume in drive A has no label
     Directory of A:\

    CBMATH   EXE    177408   3-01-93   1:00p
    CBMATH   HLP     27379   3-01-93   1:00p
    CBMATH   INI       183   3-01-93   1:00p
    CBMATH   TXT     18910   3-01-93   1:00p
    CM_01    MDF       572   3-01-93   1:00p
    CM_02    MDF       289   3-01-93   1:00p
    CM_03    MDF       297   3-01-93   1:00p
    CM_04    MDF       297   3-01-93   1:00p
    CM_05    MDF       329   3-01-93   1:00p
    CM_06    MDF       273   3-01-93   1:00p
    CM_07    MDF       249   3-01-93   1:00p
    CM_08    MDF       344   3-01-93   1:00p
    README   TXT      4101   3-01-93   1:00p
    FILE_ID  DIZ       198   4-08-93  10:20a
    GO       BAT        32   6-04-93   1:15p
    SHOW     EXE      2040   9-12-88  10:48a
           16 file(s)     232901 bytes
                           78848 bytes free
