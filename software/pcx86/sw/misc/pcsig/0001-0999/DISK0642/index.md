---
layout: page
title: "PC-SIG Diskette Library (Disk #642)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0642/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0642"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "MENU-MASTER"

    MENU-MASTER is a general-purpose menu utility designed to allow easy
    access to up to 12 applications and DOS functions on a fixed disk.
    Commonly used applications may be defined in terms that are meaningful
    to the user.  Date changes and directory viewing are supported from
    within the menu system, which is designed to be loaded automatically
    through an Autoexed file.
    
    MENU-MASTER is configured through a menu selection which defines an
    English language application name and a corresponding DOS path and
    program name combination.  The configuration program features a
    context sensitive HELP Function, and the configuration page may be
    password protected to avoid unauthorized changes.  The menu name
    itself is user-defined, as is the sub-function menu.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE0642.TXT

{% raw %}
```
Disk No:  642
Program Title:  Menu-Master
PC-SIG version:  1.1

MENU-MASTER is a general purpose menu utility designed to allow easy access
to up to 12 applications and DOS functions on a fixed disk. Commonly used
applications may be defined in terms that are meaningful to the user.
Date Changes and Directory viewing are supported from within the menu system,
which is designed to be loaded automatically through an AUTOEXEC file.

Menu-Master is configured (through a menu selection of course) by defining
an English Language application name and a corresponding DOS path and program
name combination. The Configuration program features a context sensitive HELP
Function, and the Configuration page may be password protected to avoid
unauthorized changes.  The menu name itself is user-defined, as is the
sub-function menu.

The screen may be defined in color or black and white using the Basic color
codes as defined in IBM's Basic Manual and/or Guide to Operations.

Usage:  Menuing system

Special Requirements:  None.

Suggested Registration:  $29.00

File Descriptions:

MENU     BAT  The batch file to load MENU1.EXE
MENU1    EXE  The main MENU MASTER program
MENUDIR  COM  A directory desplay program for use with MENU MASTER
MENUMAST DOC  The MENU MASTER Manual
MENUMAST ARC  All files in archived format.
MENUSEG  HLP  Help file for the configuration process
MENUSEG  USR  User's menu info file
MENUSET  EXE  Part of menu program

PC-SIG
1030D East Duane Avenue
Sunnyvale, CA  94086
(408) 730-9291
(C) Copyright 1986, 1989 PC-SIG, Inc.
```
{% endraw %}

## MENUMAST.DOC

{% raw %}
```




                                MENU-MASTER



           Menu Utility for the IBM PC, XT, AT and Compatibles

                                    by

                     Micro-Baron Software Products Div.
                            Blue Caboose Systems

                              (513) 398-3957
                     (513) 398-0928  BBS Support Line



                Programs and Manual Copyright (C) 1986,1989

                                    by

                       Micro-Baron Software Products
                                P.O. BOX 9
                              Mason, OH 45040

                                 June, 1989






                             TABLE OF CONTENTS



            Topic                                           Page

     License and Copyright                                   3

     Limited Warranty                                        3

     Menu-Master Description                                 4

     Operating Requirements                                  4

     Getting Started                                         4

     The AUTOEXEC.BAT file                                   5

     Configuration and Name Changes                          5

     Color  Choices                                          7

     Specifying Pathnames and Applications                   8

     Exiting to DOS                                          9

     Operational Notes                                       9

     User Registration & Comments                           10


                           STATEMENT OF LICENSE

The purchase and installation of this software obligates the user/purchaser
to abide by United States Copyright Law, as interpreted and governed by the
laws of the State of Ohio.  You are authorized to make one (1) archival
copy of the registered version of this software for the sole purpose of
protecting your investment from loss, and to freely share this shareware
system as received with other users as long as no fees are charged for it.
Menu-Master version 2.5 is distributed as User Supported Software for a
suggested donation of $29.00, however, all rights are reserved by the
author.  The corporate site license agreement allows unlimited copies to be
made for use within a single corporation.

                                COPYRIGHTS

This manual from time to time and place to place may make reference to
programs or machines that somebody else thought of.  It is therefore
legally prudent to include a list of those nice folks who were smart enough
to think of things before we were.

IBM and PC-DOS are trademarks of International Business Machines Corp.

MS-DOS and Multiplan are registered trademarks of Microsoft Corporation.

Lotus 1-2-3 is a registered trademark of Lotus Development Corp.

Sidekick is copyrighted by Borland International, Inc.

PC-MOS is a trademark of The Software Link.


                       STATEMENT OF LIMITED WARRANTY

SPECIAL NOTICE should be taken that Micro-Baron Software (the "author")
reserves the right to make improvements in the product described in this
manual, at any time, without prior notice, and without obligation to pro
vide or notify users of the improved product.  Licensees of prior versions
may upgrade to the latest version at a nominal cost.  The Author's products
are distributed on as "as-is" basis.  The licensee assumes the entire
risk as to the quality and performance in his or her own operating environ
ment.

The Author warrants, to the original purchaser of registered copies only,
that the magnetic media (if any) on which the programs are recorded will be
free from defects in material and workmanship under normal use, service and
conditions for a period of ninety (90) days from the date of receipt.  If a
defect in the media should occur during this period, the media may be
returned to Micro-Baron Software or its authorized or designated dealer or
representative for repair or replacement without charge.  The above
warranty for goods is made in lieu of all other express warranties, and no
implied warranties or merchantability and fitness for a particular purpose
or any other warranty obligation on the part of Micro-Baron Software shall
last longer than ninety (90) days.  At no time will Micro-Baron Software or
anyone else who has been involved in the creation, production and
distribution of this software program be liable for indirect, special or
consequential damages, such as, but not limited to, loss of anticipated
profits or benefits resulting from the use of this program or arising out
of any breach of this warranty.



                            PROGRAM DESCRIPTION

MENU-MASTER is a general purpose menu utility designed to allow easy access
to up to 12 day to day applications and built in DOS functions on a fixed
disk PC, PC-XT, AT, 386 or Compatible.  Instead of changing directories and
constantly searching for application names, commonly used applications may
be defined in terms that are meaningful to the user and Menu-Master worries
about where it is.  Date Changes and Directory viewing are supported from
within the menu system, which is designed to be loaded automatically
through an AUTOEXEC file.  Menu-Master is configured (through a menu selec
tion of course) by defining an English Language application name and a cor
responding DOS path and program name combination.  The DOS Path Command is
fully supported.  The Configuration program features a context sensitive
HELP Function, and the Configuration page may be password protected to
avoid unauthorized changes.  The menu name itself is user-defined, as is
the sub-function menu.  The name "Menu-Master" does not appear anywhere in
the screen area.  The screen may be defined in color or black and white
using the Basic color codes as defined in IBM's Basic Manual and/or Guide
to Operations, and further on in this manual.

                          OPERATING REQUIREMENTS

MENU-MASTER requires the use of PC-DOS or MS-DOS version 2.0 or greater.
It may be used with multiple volumes of fixed disk, or a single 5 megabyte
disk.  It may even be used with floppy based systems, although their lim
ited storage will limit the number of programs available via the menu.

                              GETTING STARTED

Menu-Master's logical use is as a main program selector when first turning
on your PC.  It may also be used as a sub function menu under any directory
on your system.   To get going at first, let's assume that you will be
starting from the Root Directory.  Return there if not there already by
issuing a DOS Change Directory Command to the Root Directory as follows:

C>CD \ [Return]

Insert the Menu-Master diskette in floppy drive A: and type:

C>COPY A:*.* [Return]

The program, user definition and help files will be transferred to your
root directory.  If you already have an AUTOEXEC.BAT file set up to set
your clock or perform other housekeeping functions, you will have to add
the following line as the last line in the AUTOEXEC.BAT file using EDLIN or
another editor of your choice.  Simply add the word MENU or MENU.BAT to
the AUTOEXEC.BAT file.  Since Menu-Master builds its own batch files to
call your applications and return to itself, you should remove any lines in
the AUTOEXEC file which call other programs.  The exceptions to this guide
line are programs which are of the Terminate & Stay Resident (TSR) variety,
such as various SETCLOCK routines, SK for Sidekick, network loading, etc.


To install Menu-Master as a Sub-Directory menu, you must set the default
directory the one you wish to set up the menu for.  For example, if you
have a directory named "APP" with sub-programs to be called via Menu-
Master, change to the APP directory with the following command:

C>CD \APP [Return]

Now copy all the menu files from the root directory by typing:

C>COPY \MENU *.* [Return]

Before leaving the subdirectory, configure this copy with names and a valid
"return to" directory in Configuration Page item #19.  You may wish to
return to the Root Directory Menu or to the Sub-Directory Menu.  You may do
either, so the choice is yours.  If you are working with multiple hard
drives, or a single drive with multiple partitions, be sure to include the
drive letter in Configuration Page Item #19, along with the directory to
return to.  This will insure that you will return to the menu on the same
drive that you started with.  Start the menu by typing:

C>MENU [Return]

Some sample application names will be presented as examples.  It will be
helpful to display the Configuration Option Screen while reading the next
section on configuring your Menu-Master System.  Enter the Configuration
module by typing:

[F-2] to bring up the DOS Menu on the right side of the screen, and:

1        to load the Configuration Module (Change Menu Names).


                           THE AUTOEXEC.BAT FILE

Since Menu-Master provides access to DOS commands through its menu, DOS
itself must have a way to find these commands.  If you store your DOS com
mands in a separate DOS Directory then the AUTOEXEC file should include the
following as a requirement for your menu system.

PATH C:\DOS;  (or the name of your DOS directory)
MENU.BAT

If your DOS command library is included in your Root Directory, which is
not recommended, you may omit the PATH reference to \DOS.


                  CHANGING THE MENU NAMES (CONFIGURATION)

The first thirteen lines (numbered 1 through 13) on the very left side of
the Configuration Page are the application names that are presented on the
menu.  Items 1 through 6 are for Application selections 1 through 6.  Item
7 is the Name of the sub-menu, presented on the right side of the screen,
where the applications defined as numbers 8 through 13 are displayed as
menu options 1 through 6.  Any of the numbered items may be replaced
through 6.  Any of the numbered items may be replaced with your own defini
tions by selecting the number to change and following the on-screen
prompts.  For your convenience, the meanings of each group of numbers is
presented in the on-screen help function, which is made available by typing
"H" for "Help" or by touching [F-1] .  If you are following along in the
program, try it now.  Pressing any key from the Help screen will return you
to the Configuration Page.

The exact usage of all of the fields in the configuration page are as fol
lows:

1  -  6  User defined application names for main menu presentation.
7        Secondary menu name which appears as main menu item 7.
8  - 13  Secondary menu displays 1 through 6.
15 - 16  DOS Command descriptions which appear as DOS Menu Display items 5
         and 6.
17       Chirp ON or Chirp OFF and "12" or "24" hour clock .  The word
         "Chirp" is optional.  Screen Style is also indicated here.  The
         line format is the default, and the orignal "block" format is
         optional if the word "BLOCK" appears here as well.
18       The default "Return To" Directory Pathname.  This is usually "c:\"
when Menu-Master is run in the Root Directory.  After exiting your applica
tion, the batch file Menu-Master built will change to this drive and
directory and look for the file called MENU.BAT

19       Default Pathnames to search for called programs.  See your DOS
Manual  for a complete description of how to use the Path Command.  When
used, this selection overrides any Path parameters set up by other batch
files, such as your AUTOEXEC.BAT file.  Entries must include the "\" and
end with a semi-colon.  For example,"C:\DOS;D:\APP;" would be a valid
entry.

20       Menu name as it appears in the menu Title Bar.

21 - 26  DOS Path and Application names used by Menu-Master to build the
batch files to call the applications presented in fields 1 - 6. (the left
side of the menu)

27       Optional Password which, if present, will be required by Menu-
Master before exiting to the Change Menu Names program. (selection [1] on
the DOS Menu)  This password is case sensitive.  It must be entered in the
same upper or lower case structure that you define when entering it here.
As a precaution, wait until your menu system is functioning the way you
want it to before entering anything here.  This eliminates your having to
enter the password to make minor adjustments.

28 - 33  DOS Path and Application names used by Menu-Master to build the
batch files to call the applications presented in fields 8 - 13. (the sec
ondary menu names on the right side of the menu.)

35 - 36 Valid DOS Command names which correspond with menu entries 15 -16
above.  Invalid command names will result in an error message when selected
by the DOS Menu selections 5 or 6.  The system default for items 14 and 34
is a Directory Display which calls the program MENUDIR.COM, which is NOT
supplied with Menu-Master.  You may wish to use the IBM DIR command or any
directory utility of your choice. (My favorite is DDIR.COM from PC Maga
zine, which is available on almost every bulletin board or through PC-SIG).
Simply copy it to the subdirectory containing Menu-Master with the new name
of MENUDIR.COM.  The default directory may be changed or modified as
selected.  You will be prompted on-screen and may select any valid
directory.  (i.e.  instead of viewing the default directory you can get a
double wide display of the items in \LOTUS\DATA by responding:

\LOTUS\DATA [Return] to the prompt presented after selecting #4.


Other DOS Commands which may be useful include BACKUP, RESTORE, TREE, or
COPY.   The entire command structure should be included, but cannot exceed
the line limitation of 34 characters.  For example:
Field 15 = Lotus Backup to A:
Field 35 = BACKUP C:\LOTUS\DATA\*.* A:  (only 28 characters)


37       Foreground Color     -- see your Basic manual
38       Background Color     -- or refer to the color
39       Border Color         -- chart below.


        Colors for use in 37-39

0    Black                  8  Gray
1    Blue                   9  Light Blue
2    Green                 10  Light Green
3    Cyan                  11  Light Cyan
4    Red                   12  Light Red
5    Magenta               13  Light Magenta
6    Brown                 14  Yellow
7    White                 15  High Intensity White

Background colors must be between 0 and 7.  All color selections are
ignored if your system is equipped with an IBM Monochrome Display Adapter.
If however, you have a Color Graphics Adapter, EGA or VGA adapter, and use
it with a monochrome display, the system will accept color choices.  For
this reason, Menu-Master is shipped with black and white colors of 7,0,0
installed.  Some color combinations are not readable with any display!

               SPECIFICATIONS FOR PATH AND APPLICATION NAMES

Configuration Page fields 21-33.  Most users of fixed disk systems divide
the disk into directories which make it easier to find applications and
data, especially when some application names may duplicate themselves
between directories.  For this reason, the root directory should consist
primarily of directories and, of course, your Menu-Master System files.  A
nice clean Root Directory might look like our example in Figure 1 after you
have loaded the Menu-Master files.

As users become more and more users and not computer experts, Menu-Master
does all the set-up work involved in transitioning between directories and
starting applications.

                     EXECUTING FILES IN SUBDIRECTORIES

In the example, all of the Lotus Files are in the directory called Lotus.
When the menu choice of Lotus 1-2-3 is made, we need to change to the Lotus
directory and call the program called LOTUS. Hence our Configuration Page
entry begins with a "\LOTUS" which results in a change to the LOTUS direc
tory and the entry "\LOTUS" which calls the program LOTUS.COM.  The entire
entry then consists of "\LOTUS\LOTUS".  When the user enters the Quit Com
mand to Lotus, the system returns to the menu display which called it as
specified in configuration item #19, usually the root directory.



                    DIRECTORY CHANGE WITHOUT EXECUTION

Sometimes it may be desirable to change to a subdirectory without executing
a program file.  This is easily done by specifying the directory name and
a backslash with no program name.  For example "\LOTUS\" would result in a
change to the directory called LOTUS and a display of the directory con
tents with no program execution.  Used in this way Menu-Master must be
recalled by entering the MENU command from the root directory.


                  CALLING AN APPLICATION VIA A BATCH FILE

If your application is called from a batch file, all things change.  Noth
ing Menu-Master can't handle, just a minor inconvenience which is easily
accommodated.   Applications called via a batch file, like Menu-Master,
must be specified on the Configuration Page as follows.   Assume that you
wish to call Menu-Master which resides also within the sub-directory called
"BASIC".  Just as before we set up the subdirectory and application name as
"\BASIC\MENU", but now we follow this name with with its .BAT filename
extension, or via a shorthand method, the vertical bar "|".  Our
Configuration Page entry now becomes "\BASIC\MENU.BAT", OR "C:\BASIC\MENU|.
This convention tells Menu-Master that it will be calling a batch file and
Menu-Master constructs the calling batch file according to the appropriate
DOS rules, which become transparent to the menu's user.

                     RETURNING TO THE MENU APPLICATION

When you have constructed all of your menu choices following these guide
lines, simply press [Return] or [F-10] and you will see you own menu appear
under your own title.  The Set-Up or Configuration choices have been saved
and will be included next time your Menu-Master Menu appears.

                              EXITING TO DOS

You may exit from Menu-Master at any time when the menu screen is present
by touching [F-10] or [Esc] twice in succession ( [Esc] to the DOS Menu
side and [Esc] to Exit to DOS).  This convention is included to provide
backwards compatibility with previous versions of Menu-Master, and
keystroke recognition by remote access programs such as CarbonCopy. This
will leave you in the directory established by Configuration Page item #19
or the Root Directory.

                             OPERATIONAL NOTES

Some applications do dynamic things to memory boundaries and other operat
ing system internals which may effect the way that other applications oper
ate.  Microsoft Multiplan is an example of a program that changes the oper
ating environment.  Other programs which are called by Menu-Master after
the conclusion of a Multiplan session (for example) may behave in an unpre
dictable fashion because they inherit their operating environment from the
just terminated program.   (They would naturally behave in the same way if
run without Menu-Master.)   The only way around this phenomenon is to "re-
boot" the system causing Menu-Master to appear when called from the AUTO
EXEC.BAT file.  Most well behaved programs of reasonably current vintage,
however, will always return your machine to the state they found it in when
exiting.  Menu-Master itself is NOT memory resident, and does NOT modify
your operating environment in any fashion.

If you are installing Menu-Master in conjunction with PC-MOS/386 from The
Software Link, be sure to install the menu for multiple users in multiple
directories.  If multiple users attempt to access the same menu system,
your system may lock until manually re-booted.

Images may become "burned-in" to a CRT Display, and remain visible even
when the monitor is turned off.   In order to avoid the possibility of hav
ing your menu permanently etched into your display screen, Menu-Master pro
vides a user defined time-out period.  It is set as delivered for 240 sec
onds or 4 minutes.  After 4 minutes the screen clears to a one-line
reminder that it's soon to go away, and 60 seconds later the one-liner dis
appears and the time, date and day-of-week display  will be shown on one
line chosen by random selection on a black screen.  This will remind you
that Menu-Master is alive and waiting for your next key depression as well
as giving you a handy reference to the day and time.

If you have defined a secondary (right hand side) display menu, the name
you defined appears as Main Menu selection #7.  It will also appear as DOS
Menu #6.  This is to allow you to change menu screens easily without having
to go back to the main menu.  The exception to this rule occurs when you
have defined a DOS function in Configuration File item #36.  This function
then appears in menu position #6 and you must return to the Secondary Menu
through the Main Menu. (Selection #7)

You may always bring up the DOS Menu to the right side of the display by
pressing [F-2], and exit to DOS from anywhere by touching [F-10].  The
copyright screen appears when the system is started for the first time each
day.  After that, you won't see it again until the following day unless you
touch [F-5].  To get rid of it again, just touch any key.
 
The On Screen Function Key reminders will change, depending on whether or
not you use all 7 positions of the Secondary menu or all 7 positions of the
DOS Function Menu.   These may all be defined by the user and you will be
prompted to return to the other available screens via Function Keys.

Because of the variances between different brands of color displays, it may
be possible to adjust parameters 37-39 so that no display is produced on
your monitor.  If this happens, use the audible chirp to change 37 to 7 and
38 & 39 to 0.  This will allow you to see the display again.  Pressing
[Return] alone, or [F10] will save the display parameters and you won't be
able to see the menu either.



                    REGISTRATION AND USER COMMENT FORM

Those of us at Blue Caboose Systems and Micro-Baron Software are
continually striving to provide quality products at a most reasonable price
in a User Supported format.  Please use the following form to register your
product so that we may advise you as new enhancements to Menu-Master become
available.  Product support will only be offered to those individuals with
a registration form on file.

When we receive your registration, we will ship to you the most recent
version of Menu-Master along with the most recent published and
professionally printed documentation booklet in a fold-over binder.
Registered copies also have the ability to modify the initial copyright
screen to your own liking, customized for you or your company.


NAME:_______________________________________________

PHONE:(____)_____-_______

ADDRESS:____________________________________________

CITY:_______________________STATE:_____ZIP:_________

COMPUTER BRAND:_____________________________________

CONFIGURATION:______________________________________

VERSION NUMBER:_________(from the copyright screen, touch [F-5])

COMMENTS AND SUGGESTIONS:
























___User Supported $29.00 Registration Fee Enclosed.

___Corporate Site-License fee of $200 enclosed.  Your agreement will be
returned with the program binder and documentation.
```
{% endraw %}

## MENUMAST.DOC

{% raw %}
```




                                MENU-MASTER



           Menu Utility for the IBM PC, XT, AT and Compatibles

                                    by

                     Micro-Baron Software Products Div.
                            Blue Caboose Systems

                              (513) 398-3957
                     (513) 398-0928  BBS Support Line



                Programs and Manual Copyright (C) 1986,1989

                                    by

                       Micro-Baron Software Products
                                P.O. BOX 9
                              Mason, OH 45040

                                 June, 1989






                             TABLE OF CONTENTS



            Topic                                           Page

     License and Copyright                                   3

     Limited Warranty                                        3

     Menu-Master Description                                 4

     Operating Requirements                                  4

     Getting Started                                         4

     The AUTOEXEC.BAT file                                   5

     Configuration and Name Changes                          5

     Color  Choices                                          7

     Specifying Pathnames and Applications                   8

     Exiting to DOS                                          9

     Operational Notes                                       9

     User Registration & Comments                           10


                           STATEMENT OF LICENSE

The purchase and installation of this software obligates the user/purchaser
to abide by United States Copyright Law, as interpreted and governed by the
laws of the State of Ohio.  You are authorized to make one (1) archival
copy of the registered version of this software for the sole purpose of
protecting your investment from loss, and to freely share this shareware
system as received with other users as long as no fees are charged for it.
Menu-Master version 2.5 is distributed as User Supported Software for a
suggested donation of $29.00, however, all rights are reserved by the
author.  The corporate site license agreement allows unlimited copies to be
made for use within a single corporation.

                                COPYRIGHTS

This manual from time to time and place to place may make reference to
programs or machines that somebody else thought of.  It is therefore
legally prudent to include a list of those nice folks who were smart enough
to think of things before we were.

IBM and PC-DOS are trademarks of International Business Machines Corp.

MS-DOS and Multiplan are registered trademarks of Microsoft Corporation.

Lotus 1-2-3 is a registered trademark of Lotus Development Corp.

Sidekick is copyrighted by Borland International, Inc.

PC-MOS is a trademark of The Software Link.


                       STATEMENT OF LIMITED WARRANTY

SPECIAL NOTICE should be taken that Micro-Baron Software (the "author")
reserves the right to make improvements in the product described in this
manual, at any time, without prior notice, and without obligation to pro
vide or notify users of the improved product.  Licensees of prior versions
may upgrade to the latest version at a nominal cost.  The Author's products
are distributed on as "as-is" basis.  The licensee assumes the entire
risk as to the quality and performance in his or her own operating environ
ment.

The Author warrants, to the original purchaser of registered copies only,
that the magnetic media (if any) on which the programs are recorded will be
free from defects in material and workmanship under normal use, service and
conditions for a period of ninety (90) days from the date of receipt.  If a
defect in the media should occur during this period, the media may be
returned to Micro-Baron Software or its authorized or designated dealer or
representative for repair or replacement without charge.  The above
warranty for goods is made in lieu of all other express warranties, and no
implied warranties or merchantability and fitness for a particular purpose
or any other warranty obligation on the part of Micro-Baron Software shall
last longer than ninety (90) days.  At no time will Micro-Baron Software or
anyone else who has been involved in the creation, production and
distribution of this software program be liable for indirect, special or
consequential damages, such as, but not limited to, loss of anticipated
profits or benefits resulting from the use of this program or arising out
of any breach of this warranty.



                            PROGRAM DESCRIPTION

MENU-MASTER is a general purpose menu utility designed to allow easy access
to up to 12 day to day applications and built in DOS functions on a fixed
disk PC, PC-XT, AT, 386 or Compatible.  Instead of changing directories and
constantly searching for application names, commonly used applications may
be defined in terms that are meaningful to the user and Menu-Master worries
about where it is.  Date Changes and Directory viewing are supported from
within the menu system, which is designed to be loaded automatically
through an AUTOEXEC file.  Menu-Master is configured (through a menu selec
tion of course) by defining an English Language application name and a cor
responding DOS path and program name combination.  The DOS Path Command is
fully supported.  The Configuration program features a context sensitive
HELP Function, and the Configuration page may be password protected to
avoid unauthorized changes.  The menu name itself is user-defined, as is
the sub-function menu.  The name "Menu-Master" does not appear anywhere in
the screen area.  The screen may be defined in color or black and white
using the Basic color codes as defined in IBM's Basic Manual and/or Guide
to Operations, and further on in this manual.

                          OPERATING REQUIREMENTS

MENU-MASTER requires the use of PC-DOS or MS-DOS version 2.0 or greater.
It may be used with multiple volumes of fixed disk, or a single 5 megabyte
disk.  It may even be used with floppy based systems, although their lim
ited storage will limit the number of programs available via the menu.

                              GETTING STARTED

Menu-Master's logical use is as a main program selector when first turning
on your PC.  It may also be used as a sub function menu under any directory
on your system.   To get going at first, let's assume that you will be
starting from the Root Directory.  Return there if not there already by
issuing a DOS Change Directory Command to the Root Directory as follows:

C>CD \ [Return]

Insert the Menu-Master diskette in floppy drive A: and type:

C>COPY A:*.* [Return]

The program, user definition and help files will be transferred to your
root directory.  If you already have an AUTOEXEC.BAT file set up to set
your clock or perform other housekeeping functions, you will have to add
the following line as the last line in the AUTOEXEC.BAT file using EDLIN or
another editor of your choice.  Simply add the word MENU or MENU.BAT to
the AUTOEXEC.BAT file.  Since Menu-Master builds its own batch files to
call your applications and return to itself, you should remove any lines in
the AUTOEXEC file which call other programs.  The exceptions to this guide
line are programs which are of the Terminate & Stay Resident (TSR) variety,
such as various SETCLOCK routines, SK for Sidekick, network loading, etc.


To install Menu-Master as a Sub-Directory menu, you must set the default
directory the one you wish to set up the menu for.  For example, if you
have a directory named "APP" with sub-programs to be called via Menu-
Master, change to the APP directory with the following command:

C>CD \APP [Return]

Now copy all the menu files from the root directory by typing:

C>COPY \MENU *.* [Return]

Before leaving the subdirectory, configure this copy with names and a valid
"return to" directory in Configuration Page item #19.  You may wish to
return to the Root Directory Menu or to the Sub-Directory Menu.  You may do
either, so the choice is yours.  If you are working with multiple hard
drives, or a single drive with multiple partitions, be sure to include the
drive letter in Configuration Page Item #19, along with the directory to
return to.  This will insure that you will return to the menu on the same
drive that you started with.  Start the menu by typing:

C>MENU [Return]

Some sample application names will be presented as examples.  It will be
helpful to display the Configuration Option Screen while reading the next
section on configuring your Menu-Master System.  Enter the Configuration
module by typing:

[F-2] to bring up the DOS Menu on the right side of the screen, and:

1        to load the Configuration Module (Change Menu Names).


                           THE AUTOEXEC.BAT FILE

Since Menu-Master provides access to DOS commands through its menu, DOS
itself must have a way to find these commands.  If you store your DOS com
mands in a separate DOS Directory then the AUTOEXEC file should include the
following as a requirement for your menu system.

PATH C:\DOS;  (or the name of your DOS directory)
MENU.BAT

If your DOS command library is included in your Root Directory, which is
not recommended, you may omit the PATH reference to \DOS.


                  CHANGING THE MENU NAMES (CONFIGURATION)

The first thirteen lines (numbered 1 through 13) on the very left side of
the Configuration Page are the application names that are presented on the
menu.  Items 1 through 6 are for Application selections 1 through 6.  Item
7 is the Name of the sub-menu, presented on the right side of the screen,
where the applications defined as numbers 8 through 13 are displayed as
menu options 1 through 6.  Any of the numbered items may be replaced
through 6.  Any of the numbered items may be replaced with your own defini
tions by selecting the number to change and following the on-screen
prompts.  For your convenience, the meanings of each group of numbers is
presented in the on-screen help function, which is made available by typing
"H" for "Help" or by touching [F-1] .  If you are following along in the
program, try it now.  Pressing any key from the Help screen will return you
to the Configuration Page.

The exact usage of all of the fields in the configuration page are as fol
lows:

1  -  6  User defined application names for main menu presentation.
7        Secondary menu name which appears as main menu item 7.
8  - 13  Secondary menu displays 1 through 6.
15 - 16  DOS Command descriptions which appear as DOS Menu Display items 5
         and 6.
17       Chirp ON or Chirp OFF and "12" or "24" hour clock .  The word
         "Chirp" is optional.  Screen Style is also indicated here.  The
         line format is the default, and the orignal "block" format is
         optional if the word "BLOCK" appears here as well.
18       The default "Return To" Directory Pathname.  This is usually "c:\"
when Menu-Master is run in the Root Directory.  After exiting your applica
tion, the batch file Menu-Master built will change to this drive and
directory and look for the file called MENU.BAT

19       Default Pathnames to search for called programs.  See your DOS
Manual  for a complete description of how to use the Path Command.  When
used, this selection overrides any Path parameters set up by other batch
files, such as your AUTOEXEC.BAT file.  Entries must include the "\" and
end with a semi-colon.  For example,"C:\DOS;D:\APP;" would be a valid
entry.

20       Menu name as it appears in the menu Title Bar.

21 - 26  DOS Path and Application names used by Menu-Master to build the
batch files to call the applications presented in fields 1 - 6. (the left
side of the menu)

27       Optional Password which, if present, will be required by Menu-
Master before exiting to the Change Menu Names program. (selection [1] on
the DOS Menu)  This password is case sensitive.  It must be entered in the
same upper or lower case structure that you define when entering it here.
As a precaution, wait until your menu system is functioning the way you
want it to before entering anything here.  This eliminates your having to
enter the password to make minor adjustments.

28 - 33  DOS Path and Application names used by Menu-Master to build the
batch files to call the applications presented in fields 8 - 13. (the sec
ondary menu names on the right side of the menu.)

35 - 36 Valid DOS Command names which correspond with menu entries 15 -16
above.  Invalid command names will result in an error message when selected
by the DOS Menu selections 5 or 6.  The system default for items 14 and 34
is a Directory Display which calls the program MENUDIR.COM, which is NOT
supplied with Menu-Master.  You may wish to use the IBM DIR command or any
directory utility of your choice. (My favorite is DDIR.COM from PC Maga
zine, which is available on almost every bulletin board or through PC-SIG).
Simply copy it to the subdirectory containing Menu-Master with the new name
of MENUDIR.COM.  The default directory may be changed or modified as
selected.  You will be prompted on-screen and may select any valid
directory.  (i.e.  instead of viewing the default directory you can get a
double wide display of the items in \LOTUS\DATA by responding:

\LOTUS\DATA [Return] to the prompt presented after selecting #4.


Other DOS Commands which may be useful include BACKUP, RESTORE, TREE, or
COPY.   The entire command structure should be included, but cannot exceed
the line limitation of 34 characters.  For example:
Field 15 = Lotus Backup to A:
Field 35 = BACKUP C:\LOTUS\DATA\*.* A:  (only 28 characters)


37       Foreground Color     -- see your Basic manual
38       Background Color     -- or refer to the color
39       Border Color         -- chart below.


        Colors for use in 37-39

0    Black                  8  Gray
1    Blue                   9  Light Blue
2    Green                 10  Light Green
3    Cyan                  11  Light Cyan
4    Red                   12  Light Red
5    Magenta               13  Light Magenta
6    Brown                 14  Yellow
7    White                 15  High Intensity White

Background colors must be between 0 and 7.  All color selections are
ignored if your system is equipped with an IBM Monochrome Display Adapter.
If however, you have a Color Graphics Adapter, EGA or VGA adapter, and use
it with a monochrome display, the system will accept color choices.  For
this reason, Menu-Master is shipped with black and white colors of 7,0,0
installed.  Some color combinations are not readable with any display!

               SPECIFICATIONS FOR PATH AND APPLICATION NAMES

Configuration Page fields 21-33.  Most users of fixed disk systems divide
the disk into directories which make it easier to find applications and
data, especially when some application names may duplicate themselves
between directories.  For this reason, the root directory should consist
primarily of directories and, of course, your Menu-Master System files.  A
nice clean Root Directory might look like our example in Figure 1 after you
have loaded the Menu-Master files.

As users become more and more users and not computer experts, Menu-Master
does all the set-up work involved in transitioning between directories and
starting applications.

                     EXECUTING FILES IN SUBDIRECTORIES

In the example, all of the Lotus Files are in the directory called Lotus.
When the menu choice of Lotus 1-2-3 is made, we need to change to the Lotus
directory and call the program called LOTUS. Hence our Configuration Page
entry begins with a "\LOTUS" which results in a change to the LOTUS direc
tory and the entry "\LOTUS" which calls the program LOTUS.COM.  The entire
entry then consists of "\LOTUS\LOTUS".  When the user enters the Quit Com
mand to Lotus, the system returns to the menu display which called it as
specified in configuration item #19, usually the root directory.



                    DIRECTORY CHANGE WITHOUT EXECUTION

Sometimes it may be desirable to change to a subdirectory without executing
a program file.  This is easily done by specifying the directory name and
a backslash with no program name.  For example "\LOTUS\" would result in a
change to the directory called LOTUS and a display of the directory con
tents with no program execution.  Used in this way Menu-Master must be
recalled by entering the MENU command from the root directory.


                  CALLING AN APPLICATION VIA A BATCH FILE

If your application is called from a batch file, all things change.  Noth
ing Menu-Master can't handle, just a minor inconvenience which is easily
accommodated.   Applications called via a batch file, like Menu-Master,
must be specified on the Configuration Page as follows.   Assume that you
wish to call Menu-Master which resides also within the sub-directory called
"BASIC".  Just as before we set up the subdirectory and application name as
"\BASIC\MENU", but now we follow this name with with its .BAT filename
extension, or via a shorthand method, the vertical bar "|".  Our
Configuration Page entry now becomes "\BASIC\MENU.BAT", OR "C:\BASIC\MENU|.
This convention tells Menu-Master that it will be calling a batch file and
Menu-Master constructs the calling batch file according to the appropriate
DOS rules, which become transparent to the menu's user.

                     RETURNING TO THE MENU APPLICATION

When you have constructed all of your menu choices following these guide
lines, simply press [Return] or [F-10] and you will see you own menu appear
under your own title.  The Set-Up or Configuration choices have been saved
and will be included next time your Menu-Master Menu appears.

                              EXITING TO DOS

You may exit from Menu-Master at any time when the menu screen is present
by touching [F-10] or [Esc] twice in succession ( [Esc] to the DOS Menu
side and [Esc] to Exit to DOS).  This convention is included to provide
backwards compatibility with previous versions of Menu-Master, and
keystroke recognition by remote access programs such as CarbonCopy. This
will leave you in the directory established by Configuration Page item #19
or the Root Directory.

                             OPERATIONAL NOTES

Some applications do dynamic things to memory boundaries and other operat
ing system internals which may effect the way that other applications oper
ate.  Microsoft Multiplan is an example of a program that changes the oper
ating environment.  Other programs which are called by Menu-Master after
the conclusion of a Multiplan session (for example) may behave in an unpre
dictable fashion because they inherit their operating environment from the
just terminated program.   (They would naturally behave in the same way if
run without Menu-Master.)   The only way around this phenomenon is to "re-
boot" the system causing Menu-Master to appear when called from the AUTO
EXEC.BAT file.  Most well behaved programs of reasonably current vintage,
however, will always return your machine to the state they found it in when
exiting.  Menu-Master itself is NOT memory resident, and does NOT modify
your operating environment in any fashion.

If you are installing Menu-Master in conjunction with PC-MOS/386 from The
Software Link, be sure to install the menu for multiple users in multiple
directories.  If multiple users attempt to access the same menu system,
your system may lock until manually re-booted.

Images may become "burned-in" to a CRT Display, and remain visible even
when the monitor is turned off.   In order to avoid the possibility of hav
ing your menu permanently etched into your display screen, Menu-Master pro
vides a user defined time-out period.  It is set as delivered for 240 sec
onds or 4 minutes.  After 4 minutes the screen clears to a one-line
reminder that it's soon to go away, and 60 seconds later the one-liner dis
appears and the time, date and day-of-week display  will be shown on one
line chosen by random selection on a black screen.  This will remind you
that Menu-Master is alive and waiting for your next key depression as well
as giving you a handy reference to the day and time.

If you have defined a secondary (right hand side) display menu, the name
you defined appears as Main Menu selection #7.  It will also appear as DOS
Menu #6.  This is to allow you to change menu screens easily without having
to go back to the main menu.  The exception to this rule occurs when you
have defined a DOS function in Configuration File item #36.  This function
then appears in menu position #6 and you must return to the Secondary Menu
through the Main Menu. (Selection #7)

You may always bring up the DOS Menu to the right side of the display by
pressing [F-2], and exit to DOS from anywhere by touching [F-10].  The
copyright screen appears when the system is started for the first time each
day.  After that, you won't see it again until the following day unless you
touch [F-5].  To get rid of it again, just touch any key.
 
The On Screen Function Key reminders will change, depending on whether or
not you use all 7 positions of the Secondary menu or all 7 positions of the
DOS Function Menu.   These may all be defined by the user and you will be
prompted to return to the other available screens via Function Keys.

Because of the variances between different brands of color displays, it may
be possible to adjust parameters 37-39 so that no display is produced on
your monitor.  If this happens, use the audible chirp to change 37 to 7 and
38 & 39 to 0.  This will allow you to see the display again.  Pressing
[Return] alone, or [F10] will save the display parameters and you won't be
able to see the menu either.



                    REGISTRATION AND USER COMMENT FORM

Those of us at Blue Caboose Systems and Micro-Baron Software are
continually striving to provide quality products at a most reasonable price
in a User Supported format.  Please use the following form to register your
product so that we may advise you as new enhancements to Menu-Master become
available.  Product support will only be offered to those individuals with
a registration form on file.

When we receive your registration, we will ship to you the most recent
version of Menu-Master along with the most recent published and
professionally printed documentation booklet in a fold-over binder.
Registered copies also have the ability to modify the initial copyright
screen to your own liking, customized for you or your company.


NAME:_______________________________________________

PHONE:(____)_____-_______

ADDRESS:____________________________________________

CITY:_______________________STATE:_____ZIP:_________

COMPUTER BRAND:_____________________________________

CONFIGURATION:______________________________________

VERSION NUMBER:_________(from the copyright screen, touch [F-5])

COMMENTS AND SUGGESTIONS:
























___User Supported $29.00 Registration Fee Enclosed.

___Corporate Site-License fee of $200 enclosed.  Your agreement will be
returned with the program binder and documentation.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0642

     Volume in drive A has no label
     Directory of A:\

    FILE0642 TXT      1591   8-06-89   1:52p
    GO       BAT        28  11-27-86  12:31p
    GO       TXT       694   9-06-89   1:50p
    MANUAL   BAT       147   9-06-89   1:48p
    MENU     BAT        89   7-03-89  12:19p
    MENU1    EXE     73398   6-21-89   9:00p
    MENUDIR  COM       761   5-18-86  11:41a
    MENUMAST ARC    115337   7-03-89  12:27p
    MENUMAST DOC     23724   7-03-89  12:13p
    MENUSEG  HLP      1547   3-15-86   8:13p
    MENUSEG  USR       275   7-03-89  12:17p
    MENUSET  EXE     41818   3-16-86  11:56a
    PAGE     COM       325   1-06-87   4:21p
    README   SIG       306   7-03-89  11:01a
    VIEW     BAT        44   9-06-89   1:49p
           15 file(s)     260084 bytes
                           53248 bytes free
