---
layout: page
title: "PC-SIG Diskette Library (Disk #1318)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1318/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1318"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "LOTTO MASTER PROFESSIONAL"

    LOTTO MASTER PROFESSIONAL is a multifeatured menu-driven program that
    assists you in making decisions about placing Lotto bets.  The program
    is primarily designed for use with California Lotto 6/49, but can be
    used with other five or six-number lotteries, as long as the number
    field does not exceed 54.
    
    The extensive program is designed to maintain and track LOTTO bets,
    check bets against the LOTTO drawings, maintain a history of winning
    numbers, analyze historical numbers for significant information,
    generate bets based on statistical history, support bets based on user-
    selected numbers with statistical backup, and perform "wheeling"
    based on nine built-in systems.
    
    LOTTO MASTER PROFESSIONAL has a utility option that allows you to
    customize your game set up.  This program is accompanied by an on disk
    user's guide.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1318.TXT

{% raw %}
```
Disk No: 1318                                                           
Disk Title: Lotto Master Professional                                   
PC-SIG Version: S1.4                                                    
                                                                        
Program Title: Lotto Master Professional                                
Author Version: 1.6                                                     
Author Registration: $25.00.                                            
Special Requirements: None.                                             
                                                                        
LOTTO MASTER PROFESSIONAL is a multifeatured menu-driven program that   
assists you in making decisions about placing Lotto bets.  The program  
is primarily designed for use with California Lotto 6/49, but can be    
used with other five or six-number lotteries, as long as the number     
field does not exceed 54.                                               
                                                                        
The extensive program is designed to maintain and track LOTTO bets,     
check bets against the LOTTO drawings, maintain a history of winning    
numbers, analyze historical numbers for significant information,        
generate bets based on statistical history, support bets based on       
user-selected numbers with statistical backup, and perform ``wheeling'' 
based on nine built-in systems.                                         
                                                                        
LOTTO MASTER PROFESSIONAL has a utility option that allows you to       
customize your game set up.  This program is accompanied by an on disk  
user's guide.                                                           
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## LM.DOC

{% raw %}
```














Lotto Master Professional

Release 1.6

For Pick-5 And Pick-6 Lottos


Shareware Version User's Guide




Program and documentation (C) 1987-89 JPM Computer Products
All Rights Reserved









Copyright Notice

This software package and documentation are copyright 1987-1989
by Joseph P. Masching and JPM Computer.  All rights are reserved
worldwide.  JPM Computer licenses users to implement this
software for their own use on a trial basis and to make copies
for use by others on the same basis.  If, after a trial period of
thirty (30) days, the user wishes to continue using the program,
he is required to register with JPM Computer and to pay a
registration fee of $49.95 US.  This version of LOTTO MASTER
PROFESSIONAL is SHAREWARE and may be distributed via electronic
bulletin boards or by any other medium as long as the original,
unaltered documentation and all of the original files are
distributed with it. Commercial resale is strictly prohibited
without written permission of JPM Computer, P.O. Box 30742,
Portland, OR 97230. Telephone number is (503)287-8952.



Disclaimer

JPM Computer makes no warranties as to the contents of this
documentation or the LOTTO MASTER PRO program and specifically
disclaims any implied warranties of merchantability or fitness
for any particular purpose.  In no event shall Joseph Masching or
JPM Computer be liable for any loss of profit or any other loss
or damage, including but not limited to special, incidental,
consequential or other damages.  JPM Computer further reserves
the right to make changes to the specifications of the program
and contents of the documentation without notice.


                 NOTES ON THE SHAREWARE VERSION



All SHAREWARE versions of Lotto Master Pro releases are full and
complete versions of the program, and are furnished with complete
documentation.  Nothing has been left out and no features have
been disabled or crippled.  However, as an incentive for the user
to register, we issue a program to SHAREWARE only after a new
version has been developed.  This means that any SHAREWARE
version is a least one release behind the registered version.

When the user registers his program with JPM COMPUTER, and pays
the registration fee, he receives a copy of the latest version of
the program and an up-to-date data module of the lotto history of
his choice (if available).  He is also guaranteed to receive
advance notification of, and substantial discounts for, future
new releases of the program.  The registration form is located on
the last page of this User's Guide, and the registration fee is
$49.95.

If you like this program, you will like the registered version
even more.



LOTTO MASTER PROFESSIONAL is a program designed to maintain and
track LOTTO bets, check bets against the LOTTO drawings, maintain
a history of winning numbers, analyze historical numbers for
significant information, generate bets based on statistical
history, and support bets based on user-selected numbers with
statistical backup.  It is an easy-to-use menu-driven utility for
use as an aid to making decisions about placing Lotto bets.

While the program was designed originally for use with the
California LOTTO 6/49 lottery, it can now be used equally well
with any five or six-number lottery, with or without a 'bonus' or
'alternate' number.


Hardware Requirements and Installation

LOTTO MASTER PRO is designed to run on any IBM or compatible
computer with DOS 2.1 or higher and 256K of memory.  It will run
without problems on either a single floppy, dual floppy, or hard
drive system.  Before running Lotto Master Professional, make a
working copy of the program disk.  NEVER run the original program
disk.  The original should be stored away in a safe place and
used only for making working copies.

To run LOTTO MASTER PRO on a single floppy disk system, place the
working copy of the program disk in drive A and from the A:>
prompt, type 'LM' and press enter.  This working copy of the
program disk should not contain any documentation files or
support files.

To run the program on a dual-floppy disk system, you must first
copy the data files from the program disk to a separate data
disk. To do this, place a working copy of the program disk in
drive A, and a fresh formatted disk in drive B.  From the A:>
prompt, type the following commands:

copy *.rec b: <ENTER>
copy *.dat b: <ENTER>
copy *.cfg b: <ENTER>


(If you are starting a brand new game for which you do not yet
have history files on the disk, you will not need to copy any
files to the B disk.  They will be created the first time that
you run the program.) The data files will be transferred to your
working data disk. After transfer is complete, label your working
data disk to identify the lottery information that it contains.
be in drive A, and the data disk in drive B.  Make the B drive
current by typing and entering the following: b: <ENTER>.  Now,
from the B:> prompt type "PATH A:\" and <ENTER>. Then type "LM"
and <ENTER>.  The program will load and from this point will look
for all data files on drive B and all program files on drive A.
If the program detects upon loading that you are beginning a new
game it will automatically send you to the Game Configuration
sub-program.

To use the program on a hard drive system, copy the entire
program disk to a directory on your hard drive.  Each lottery
must be on its own directory on the hard drive; the data files
cannot be mixed.  (See your DOS manual for directions on creating
a new directory and for use of the COPY command.) To run the
program, make your Lotto Master directory the current directory
and type-in and enter 'LM'.  The program will load and run.
Again, if you are starting a brand new game, just copy the file
LM.EXE and the four .OBJ files to the new directory.

The Program Files

The LOTTO MASTER PRO program package contains sixty-seven files.
They are as follows:

LM.EXE            The main program
LIBB.OBJ          Subroutine libraries
LIBS.OBJ            "            "
LIBP.OBJ            "            "
LIBH.OBJ            "            "
HISTORY.DAT       History archives
HITREC.DAT          "        "
BONUSREC.DAT        "        "
1.REC - 54.REC      "        "
LOTTO.DAT         Bet archive
LM.DOC            This manual
README.1ST        update and startup information
PRINTDOC.BAT      A utility for printing this manual
LOTTO.CFG         Game configuration information


Getting Started

Getting started is simple.  Set up your system by one of the
methods described above under Hardware and Installation, type
'LM' and press <ENTER>. You will see the title screen first,
followed after a few seconds by the LOTTO MASTER main menu (NOTE:
if you are setting up a new game, the program will first ask you
for configuration information).


Using The Menus

Lotto Master Professional is almost entirely 'menu-driven'.  That
is, each action that you can take is presented as one of a series
of options on a screen 'menu'.  Each menu has a highlighted bar
that can be moved by an up or down arrow or 'cursor' key, and
each choice on the menu is numbered on the left.  To make a
selection from the menu, either move the highlighted bar to your
choice and press the ENTER key, or simply press a number key
corresponding to the number to the left of your choice.


Using The Speed-Keys

When entering numeric data, it is usually not necessary to press
the ENTER key to record your input.  You will see that when a
number field becomes full, the cursor will automatically drop
down to the next field.  In the case of entering single-digit
numbers, you can either enter the digit and press the ENTER key,
or you can preceed the digit with a zero and use the automatic
feature.  This feature facilitates the use of the keypad and
speeds up input.

Creating New Games

Lotto Master Pro generally comes furnished with a lotto history
on the program disk.  You may, however, initiate a new game at
any time.  To accomplish this, simply establish a new disk or
directory for the new game, place the directory or disk that
contains the Lotto Master Pro program files in the DOS path (see
your DOS manual for instructions on how to do this), and then
type LM from the new data disk or directory.  The program will
see that no game files exist on the new disk and, after asking
you a few questions about the new game, will create the necessary
files.  From this point you need only obtain the history data
from the lottery office of your state and enter it into the
history database through Option 1 on the History Management menu.
Remember, you cannot run more than one game on the same disk or
hard-drive directory.

Playing Pick-5 Lottos

Pick-5 lottos are handled the same way by the program as Pick-6
lottos except that wheeling is not available for them in the
present version.  It is planned that later versions of the
program will support Pick-5 wheeling.  As a registered user of
the program, you will be contacted when new releases become
available and you will be able to acquire them at a substantial
discount. The Main Menu

The main menu offers five options: You can WORK WITH BETS, WORK
WITH HISTORY, go to UTILITIES, print REPORTS, or EXIT LOTTO
MASTER. If you choose to exit you will be asked to verify that
you really wish to do so, and upon verification you will be
returned to the operating system prompt.  To insure that all
files are properly closed, you should exit the program only from
this menu.




WORK WITH HISTORY - THE HISTORY MENU


History Management deals with the archive of numbers from all
past lotto games that are stored on disk.  It allows you to add
new drawings to the archive, to edit or delete existing drawings
to generate statistics from the drawn numbers, and to search the
history files for information that you consider to be sig-
nificant.  Selecting the WORK WITH HISTORY option from the main
menu will bring you to the following sub-menu:

Option 1 - Add To History

Select this option to enter new or missing drawings.  You will be
asked how many boards you wish to enter (each board consists of a
date and five to seven numbers) and then you will be presented
with each board in turn until all are filled in.  The date is
entered first, in mmddyy format; that is, simply type in the 6
digits representing the date without spaces, slashes, or dashes.
For example January 1, 1987 would be typed in 010187.  The
program will check to see if the date is already on file and, if
not, will allow you to continue.  If it detects that the date
already exists in the file, it will ask you to re-enter it.

Next, type in and enter the numbers from the drawing for that
date. You will only be allowed numbers between 1 and the maximum
number accepted by the current game, and the numbers may be
entered in any order.  You may exit this option at any time by
pressing the ESC key in the date field or in any number field.
After all input has been entered, the program will sort it and
return you to the History Management menu.

Option 2 - Edit/Delete History

After selecting this option you will be asked to enter the date
of the drawing you are interested in.  Enter the date in the same
format as above.  Next, you will be shown the record and be given
a choice of editing or of deleting it.  If you delete, the record
will be removed from the files and you will be returned to the
menu.  If you choose to edit the record you will go into the
addmode described above and the old record will be over-written
with the new information.  When your edited record has been
stored you will be asked for a new record date to look at. If
you are finished with the Edit/Delete mode just press ESC and
you will be returned to the History Management menu.

Option 3 - Display History

This option will give you a page-by-page listing in date-order of
all past LOTTO drawings on file.  The default starting and ending
periods are the very first record and the very last record (in
other words, the entire file).  These periods may be changed by
using Option 6 on the menu.  The display option is valuable for
reviewing historical data for a given period and for selecting
entries to edit.  To use the option, simply press '3'.  You will
be shown how many pages are in the listing and, if more than one,
will be able to page through the listing in either direction.


Option 4 - Statistics And Wheeling

This option will calculate and display statistical information on
all numbers picked in the lotto drawings.  It will allow you to
isolate and analyze any period between two valid dates, it will
allow you to automatically generate bets, using any of the
built-in wheeling systems, based on the 'Hot' numbers for any
period, and it will allow you to generate bets with the wheeling
systems from manual input.  When you select option 4 from the
History Management menu, you are presented with a sub-menu and
another series of options.

    Sub-Option 1 - Game Summary

    This option provides the vital statistics of every
    number in the lotto game.  Reading from left to right,
    the chart tells you: (Column 1) The number being
    summarized, (Column 2) The number of times that it has
    been drawn as a regular pick, (Column 3) The percentage
    of times it has been drawn as a regular pick in rel-
    ation to all of the games, (Column 4) The number of
    times it has been drawn as a 'bonus' or 'alternate'
    number (if applicable), (Column 5) The bonus number
    percentage, (Column 6) The number of games back since it
    was last drawn as a regular pick, (Column 7) The number
    of games back since it was last drawn as a bonus num-
    ber, (Column 8) The average number of games that elapse
    between picks for that number, and, (Column 9) The
    statistical status of the number.  The statistical
    status states whether or not a number is statistically
    due to be drawn as a regular pick.  At the bottom of the
    last screen of the summary is a calculation of the
    Even/Odd status of all of the games.  That is, it shows
    the total hits for all even numbers and odd numbers and
    the percent- age that each hit total represents in
    relation to all of the games in the file.


    When you select this option you will be asked to enter
    the number that you wish to examine.  After entering
    the number you will see displays that show the
    relationship of that number to every other number in the
    file.

    For example; if you select number 20 and look down the
    first page listing to number 5 and see that number 5 has
    received 10 hits for a percentage of 20.0%, it means
    that number 5 has been drawn in combination with number
    20 ten times or a total of twenty percent.  In other
    words, twenty percent of the time that number 20 is
    selected in a lotto drawing, number 5 is selected with
    it. The purpose of this feature is to quickly identify
    numbers that are frequently drawn in pairs, or, as lotto
    'companion numbers'. Page two of this option is
    identical to page one except that the the same
    information is displayed in a different format for ease
    in finding the 'hottest' numbers, or numbers that most
    frequently show up as 'companions'.

    Note that on the top of the display are the vital
    statistics of the number being reviewed.  These
    statistics are to remind you of the overall standing of
    selected number in relation to all of the games in the
    history file.

    Sub-Option 3 - Period Analysis And Wheeling

    Period Analysis generates statistics that relate only
    to a user-selected period.  This allows you to analyze
    the statistics for any given period of time, with a view
    to detecting recurring patterns and trends.  A further
    capability of this option is the ability to generate
    bets from the statistical information pre- sented.  This
    'hot number' feature will generate a series of bets,
    using any of the nine wheeling systems, without any
    active decision-making on the part of the user. However,
    as the bets are based on statistical data, they
    constitute more of an 'ed- ucated' guess than would a
    bet based solely on simple random number generation. The
    bets are formed by combining the top numbers for the
    period into various combinations, depending on the wheel
    being used. The wheel is a mathematical model composed
    in such a way as to guarantee that if a certain number
    of the same numbers that compose the wheel are picked
    in the lotto drawing, then you will obtain a minimum win
    of so many numbers.

    To make this less confusing I will use an example: The
    'System 33' wheel uses a base of 14 numbers.  If you
    select this wheel for automatic bet creation for the
    period currently set, it will pick out the 14 highest
    hitting numbers for the period and combine them in a way
    that creates 40 different bets.  If any 5 of the 14
    numbers that form the wheel are picked in the lotto
    drawing, you are guaranteed at least one four-number
    win.  In many cases, because of the way the numbers are
    combined, a fivenumber match would result in a series
    of three and four-number wins.  As you can see, betting
    this way tends to bend the odds a little more in your
    favor.  Of course some of the wheel bets can get fairly
    expensive and if you would like to use the wheeling
    techniques regularly, you might consider joining with
    other players to help defray costs.  That's how lotto
    club and syn- dicate betting works.  See the section on
    Manual Wheeling below for a description of the wheels.


    Automatic bet creation is accomplished by selecting the
    <B> option from page 2 of the period display.  The bets
    are created and then displayed for review.  If you are
    satisfied with the bets, then you have two saving
    options.  If you choose the <R> option, the bets will be
    saved to your bet file and any existing bets will be
    removed.  If you choose the <A> option, then the bets
    will be added to any bets existing in the bet file.  If
    you do no wish to save the bets, just press the <M>
    option or the ESC key and you will exit to the History
    Management menu.

    A further word should be offered here on the setting of
    display periods.  When entering Period Analysis you are
    given the op- portunity to verify or change the current
    display period.  Try to keep the period as small as
    possible as this not only speeds up calculations, but
    offers more meaningful trend information. Lotto Master
    will examine the entire history file through this option
    if you wish, and this can be useful for automatic bet
    generation based on hot numbers derived from the entire
    history, but more significant information can usually be
    obtained by narrowing periods down and examining them
    closely for patterns.

    Sub-Option 4 - Manual Wheeling

    The explanation above of Period Analysis shows one
    method by which wheeling can be implemented.  The
    alternate method is to select certain numbers, using the
    various analytical tools provided by the program, and
    then to enter them manually into the wheel.  Once the
    wheel has been created and displayed, you will have the
    same save and exit options described above.

    Here are descriptions of the wheeling systems that the
    program uses:

    System 7

    7 number base, 7 bets. Contains all possible 6-number
    comb- inations of the 7 number base.  Guarantees a
    six-number win if six of the seven numbers are drawn.


    System 8

    8 number base, 28 bets.  Contains all possible 6-number
    comb- inations of the 8 number base.  Guarantees a
    six-number win if six of the eight numbers are drawn.

    System 33

    14 number base, 40 bets.  Guarantees a 4 number match
    if 5 of the 14 numbers are picked in the drawing.


    System 37

    12 number base, 6 bets.  Guarantees a 4 number match if
    6 of the 12 numbers are picked in the drawing.


    System 41

    16 number base, 38 bets.  Guarantees a 4 number match
    if 6 of the 16 numbers are picked in the drawing.

    System 42

    18 number base, 42 bets.  Guarantees a 4 number match
    if 6 of the 18 numbers are picked in the drawing.

    System 43

    20 number base, 100 bets.  Guarantees a 4 number match
    if 6 of the 20 numbers are picked in the drawing.

    System 55

    11 number base, 26 bets.  Guarantees a 5 number match
    if 6 of the 11 numbers are picked in the drawing.

    System 56

    12 number base, 42 bets.  Guarantees a 5 number match
    if 6 of the 12 numbers are picked in the drawing.


    Sub-Option 5 - Exit This Menu

    This option returns you from the Statistics And
    Wheeling menu to the History Management menu.


Option 5 - Search History

This option allows you to enter any number, combination of
numbers or complete bets, and check them for 'hits' against any
period of interest. This is an extremely useful and very powerful
tool for pattern detection, and a method for determining if a
potential bet falls within an historically successful range of
numbers.  You can use this option to check numbers or sets of
numbers for current trends (A series of hits clustered together
is a pretty fair indication of a trend in progress).  An ad-
ditional use for this option is for 'skip tracing'.  Skip tracing
is an analysis of the number of games between hits of a given
number or combination of numbers.  To use this option, simply
enter the numbers that you are interested in researching.  When
you have filled all number fields, or if you have pressed enter
on an empty field, the program will start hunting for the number
or combination that you have entered.  Each game will be
displayed in turn and the numbers that are hit for that game will
be highlighted.  To the right of the history numbers, columns
will show how many of the numbers entered showed up as picks for
the date shown, and how many showed up as bonus numbers (if
applicable to your game).


Option 6 - Set Display Period

This unique option allows you to limit the display and the period
to be analyzed to any two valid dates in the history file.  This
feature allows for a very refined trend analysis and speeds up
calculations and searches significantly.  When you select Option
6, you will be presented with an input screen that asks for both
a starting and ending period.  To set the starting period to the
very first record (the default value) simply press the ENTER key
on the blank field.  To set the ending period to the very last
record, again press ENTER on the blank field.  To set either of
these periods to any date between the first and last record,
simply enter the date in mmddyy format; i.e., 010188 for January
1, 1988.  The date need not be exact; if the date you have
entered is not a drawing date on file, the program will set the
period to the next valid date that it finds. This option should
be used when examining data for specific periods through Option 3
(Display History), when searching for patterns through Option 5
(Search History), and for analyzing trends.  Sub-Options 1 and 2
under Statistics And Wheeling are not effected by changes in the
period but always relate to the entire file.

IMPORTANT NOTE: Remember that once set, the period remains in
effect until it is changed or until the computer is re-booted. If
you enter new draws into the history file and then are not able
to see them when you display the file, it's probably because you
forgot to change the period setting.Option 7 - Exit

This option returns you to the Main Menu.  You can also get back
to the Main Menu by pressing the ESC key.



WORK WITH BETS - THE BET MANAGEMENT MENU


Bet Management deals with the archive of numbers relating to
active bets stored on disk.  It allows you to add new bets to the
archive, to edit or delete existing bets, to display all bets,
and to search the bet file for winning matches when the lotto
picks are drawn.  Selecting the WORK WITH BETS option from the
main menu will bring you to the Bet Management Menu shown below.

Options 1-3

These options work identically to those in History Management
except that they apply only to your current bets.  Your bets can
be entered, edited , and viewed.  You will notice that dates are
not used here and that bets are separated into, and selected by,
numbered 'boards'.

Option 4 - Clear Bets

This option clears the bet file and allows you to enter a new set
of boards and numbers.  NOTE: Be careful here.  If you in-
advertently clear the bet file you will have to reconstruct the
bets that it contained.

Option 5 - Search/Check Bets

This option allows you to enter the numbers drawn in the latest
LOTTO drawing and compare them to your bets.  If a winning board
is found it is flagged to catch your attention.  After the check
is complete, you are given the option of saving the drawing
numbers to the history file.  The Check for Wins option can also
be used to avoid duplication of bets by first running them
through this option before saving to the bet file.

Option 6 - Exit

This option returns you to the Main Menu from which you may exit
the program or select another menu.  The ESC key can also be used
to exit the menu.


UTILITIES - THE UTILITIES MENU

The Utilities menu offers two main options and an exit option.

Option 1 (Set Game ID) allows you to set or change the name of
the lottery that you are currently working in and to show the
type of lottery that it is.  This is important because of the
fact that each lottery that you play must reside on a separate
disk or directory from every other lottery.  Setting the name
will eliminate the problem of possibly updating the wrong history
file.

Option 2 (Set Color Off) is for hardware systems using a mono-
chrome display.  Turning the color signal off can sometimes make
for a clearer display.

Option 3 (Exit) Or the ESC key, returns you to the main menu.


REPORTS - THE REPORTS MENU

The Reports menu enables you to get printed reports on your line
printer.  Select an option below and follow the screen prompts:

1. History: This will give you a printout of all records in the
history file.

2. Active Bets: This will print out any bets that currently are
stored in the bet file.

3. Summary: This is a printed version of the on-screen summary
described in the section above under Statistics and Wheeling.

4. Frequency Chart: This report lists the number of games between
'hits' for every number used by the lotto for the entire history
of the game.  The number under review is shown at the left, and
each number to the right represents the number of games played
before a 'hit' was made.  Zeros indicate that the number was hit
in the next game.  For example, if you see 5 5 3 0 0, etc, this
means that five games elapsed before a hit, then another five
games, then three games, then a hit, then another hit, etc.


Option 5 on this menu, as well as the ESC key, will return you to
the Main menu.












                             SUMMARY


Whether you are a serious LOTTO player or just enjoy the
occassional game, we believe that you will find this program to
be useful and enjoyable.  Let us know what you think of it, and
any suggestions as to how it might be improved will be greatly
appreciated.  We can be reached at:

                      JPM Computer Products
                         P.O. Box 30742
                       Portland, OR  97230

                       Tel (503) 287-8952



                        Registration Form
                               For
                    Lotto Master Professional
                           Release 1.6

                        SHAREWARE VERSION



     Name_____________________________    Date_________

     Address __________________________________________

     City _________________  State _____  Zip _________

     Phone (   ) ____________________


     Date Purchased  ______________

     Where Obtained ___________________________________

     Where did you hear about Lotto Master?

     __________________________________________________


To be listed as a registered user for assistance, and to receive
the latest version as well as future product update information,
please detach and mail with your check for $49.95 US to:

                     JPM Computer Products
                          PO Box 30742
                      Portland, OR 97230

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1318

     Volume in drive A has no label
     Directory of A:\

    1        REC       216   5-28-89   5:23p
    10       REC       216   7-10-89   9:04a
    11       REC       216   5-28-89   5:23p
    12       REC       216   7-10-89   9:04a
    13       REC       216   6-22-89   9:12a
    14       REC       216   5-31-89   7:58p
    15       REC       216   7-03-89   8:50a
    16       REC       216   6-21-89  10:44a
    17       REC       216   6-03-89   8:21p
    18       REC       216   7-10-89   9:04a
    19       REC       216   6-21-89  10:44a
    2        REC       216   7-10-89   9:04a
    20       REC       216   6-21-89  10:44a
    21       REC       216   7-10-89   9:04a
    22       REC       216   6-07-89   8:02p
    23       REC       216   6-07-89   8:02p
    24       REC       216   6-21-89  10:44a
    25       REC       216   7-10-89   9:04a
    26       REC       216   6-03-89   8:21p
    27       REC       216   6-07-89   8:02p
    28       REC       216   6-25-89   8:35a
    29       REC       216   7-03-89   8:50a
    3        REC       216   7-10-89   9:04a
    30       REC       216   5-31-89   7:58p
    31       REC       216   6-22-89   9:12a
    32       REC       216   5-28-89   5:24p
    33       REC       216   7-03-89   8:50a
    34       REC       216   7-10-89   9:04a
    35       REC       216   6-21-89  10:44a
    36       REC       216   6-21-89  10:44a
    37       REC       216   7-03-89   8:50a
    38       REC       216   7-10-89   9:04a
    39       REC       216   7-03-89   8:50a
    4        REC       216   6-25-89   8:35a
    40       REC       216   7-03-89   8:50a
    41       REC       216   7-10-89   9:04a
    42       REC       216   7-10-89   9:04a
    43       REC       216   7-03-89   8:50a
    44       REC       216   7-03-89   8:50a
    45       REC       216   7-03-89   8:50a
    46       REC       216   7-03-89   8:50a
    47       REC       216   5-28-89   5:23p
    48       REC       216   7-10-89   9:04a
    49       REC       216   7-10-89   9:04a
    5        REC       216   5-28-89   5:23p
    50       REC       216   5-28-89   5:12p
    51       REC       216   5-28-89   5:12p
    52       REC       216   5-28-89   5:12p
    53       REC       216   5-28-89   5:12p
    54       REC       216   5-28-89   5:12p
    6        REC       216   6-25-89   8:35a
    7        REC       216   5-28-89   5:24p
    8        REC       216   7-03-89   8:50a
    9        REC       216   7-03-89   8:50a
    BONUSREC DAT       108   7-10-89   9:04a
    FILE1318 TXT      2295   1-08-90  10:25a
    GO       BAT        38  10-19-87   3:56p
    GO       TXT      1002   3-27-89  10:49a
    HISTORY  DAT      4720   7-10-89   9:04a
    HITREC   DAT       108   7-10-89   9:04a
    LM       DOC     29271   7-16-89   1:15p
    LM       EXE    156672   7-16-89  10:02a
    LOTTO    CFG        41   7-16-89  10:11a
    MANUAL   BAT       147   8-08-89   9:15a
    PRINTDOC BAT       627   6-04-89   3:31p
    README   1ST      9688   7-16-89  12:39p
           66 file(s)     216381 bytes
                           55296 bytes free
