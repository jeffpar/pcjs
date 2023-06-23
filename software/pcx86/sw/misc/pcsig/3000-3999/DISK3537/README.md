---
layout: page
title: "PC-SIG Diskette Library (Disk #3537)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3537/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3537"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## MANUAL.TXT

{% raw %}
```









                    Tear Down the Wall

                 Copyright (c), 1990, 1991
           by Chet Langin, all rights reserved

                      Langin Software
                       532 W. 3rd St.
                    Centralia, IL  62801
                       CIS:  73770,615

                    _______
               ____|__     |               (tm)
            --|       |    |-------------------
              |   ____|__  |  Association of
              |  |       |_|  Shareware
              |__|   o   |    Professionals
            -----|   |   |---------------------
                 |___|___|    MEMBER


Users of "Tear Down the Wall" must accept this
disclaimer of warranty:

 "Tear Down the Wall" is supplied as is.  The
 author disclaims all warranties, expressed or implied,
 including, without limitation, the warranties of
 merchantability and of fitness for any purpose.  The
 author assumes no liability for damages, direct or
 consequential, which may result from the use of it.




                      <<<  Page 2  >>>


                     Table of Contents

        Welcome                                   3
        Who is this program for?                  3
        What is this program?                     3
        Installation                              3
        Tutorial                                  4

        Appendix A -- A list of files             5
        Appendix B -- Troubleshooting             5




                      <<<  Page 3  >>>


     ***************
     **  Welcome  **
     ***************

Welcome to "Tear Down the Wall."


     ********************************
     **  Who is this program for?  **
     ********************************

This is a stratagy game for kids and adults.


     *****************************
     **  What is this program?  **
     *****************************

"Tear Down the Wall" is a strategy game invented by
the author where players are awarded points for
destroying the most bricks in a wall.

Bricks have different point values and hardness.
The hardness determines how the wall crumbles.

Play against a human opponent or against the computer.

Select Help from the game menu for the exact rules of the
game.


     ********************
     **  Installation  **
     ********************

What this program needs:

>  384K of memory
>  Any monitor
>  MS-DOS 2.0 or higher

No installation is required.  Enter WALL to start
the program.  All of the program's files must be in
the default directory.




                      <<<  Page 4  >>>


     ****************
     **  Tutorial  **
     ****************

If you are reading this on your computer screen, you
should first print the manual.  Make sure all of files
are in the default directory.  Refer to a DOS manual
to see what this means.  To print the manual, enter
PRINTMAN at the DOS prompt.

It is assumed that you will be looking at the printed
manual as you try out the program.

The tutorial is a series of steps.

1)  Start the program.

    Enter:  WALL

2)  Read the copyright notice, then continue:

    Press:  <ENTER>

3)  The wall has already been built and is
ready to go.  Select a brick with the arrow
keys or mouse and watch the wall begin to
crumble.

4)  The computer will select a brick to play
against you.  Watch the scores at the top of
the screen.

5)  It is your turn again.  Select a brick
that supports others so that more will fall.

6)  Keep alternating turns with the computer
until no more bricks are left.  The computer
will annouce the winner.

7)  Select NEW GAME from the menu to keep
playing (press <F1> to get the menu if it
is not displayed).

8)  To exit the program,

    Press:  <ESC>




                      <<<  Page 5  >>>


     ******************
     **  Appendix A  **
     ******************

The files included with DosEA.

MANUAL.TXT     This file!

PRINTMAN.BAT   A batch file to print the manual.

README.TXT     A file with important information.

README.BAT     A batch file which displays README.TXT.

WALL.EXE       The program, itself.

WALL.OVL       An overlay.

ORDERFRM.TXT   The order form to register.

REGISTER.BAT   A batch file which prints the order form.

VENDOR.DOC     A text file with information for shareware
               distributors.


     ******************
     **  Appendix B  **
     ******************

Troubleshooting.

>>>  You get a "file not found" message.

All of the files must be in the default directory.
Check a manual on DOS to see what this means.

>>>  Possible incompatibility

There has been one report that Tear Down the Wall does
not work properly with NANSI.SYS.  Remove NANSI.SYS and
then try, again.

```
{% endraw %}

## ORDERFRM.TXT

{% raw %}
```

               **************************
          *******  Tear Down the Wall  ******
          **  Registration and Order Form  **
          ***********************************

For summaries of the programs, see the "Langin Software"
topic in the index of the program.
                                          US$ Price Total
                                          --------- ------
Register:
Tear Down the Wall                           10.00  ______

Evaluation disks only (see "Notes" below):
Nine Men's Morris (1 disk)                    5.00  ______
Hangman for Students (1 disk)                 5.00  ______
The World's Simplest Computer (2 disks)*     10.00  ______
DosEA 1 -- For Absolute Beginners (1 disk)    5.00  ______
DosEA 2 -- What is DOS? (1 disk)              5.00  ______
DosEA 3 -- 10 Easy Commands (1 disk)          5.00  ______
DosEA 4 -- Find That Command! (1 disk)        5.00  ______

Disk orders from outside US and Canada, add   5.00  ______
Sub-total                                           ______
Less credit (with certificate/s, only)              ______

                                             TOTAL  ______

*Requires EGA/VGA and GIF viewer (not included).  If you
do not know what a GIF viewer is, do not order this.

Notes:  The prices for evaluation disks do not include
registration.  However, you will receive a certificate of
credit towards registration.  Non-US payments should be
drawn on US bank.  Traveller's checks accepted.  Canadian
postal money orders accepted.  Site licenses are available.

Name:                ______________________________________

Title (Optional):    ______________________________________

Company (Optional):  ______________________________________

Address:             ______________________________________

                     ______________________________________

                     ______________________________________

                     ______________________________________
Send to:

     Langin Software                 Disk size:
     532 W. 3rd St.                    5.25" ____
     Centralia, IL  62801 USA          3.5"  ____

Did you get this program from a book?  (Circle)  Y   N

If you got this progam from a catalog, computer Bulletin
Board Service (BBS), or user group, which one was it?

________________________________________________________

```
{% endraw %}

## README.TXT

{% raw %}
```
README.TXT

> A synopsis of the program:  Tear Down the Wall is a stratagy game where
points are awarded for tearing down the most parts of the wall.

> A list of files included in the DosEA program:

  WALL.EXE      WALL.OVL      MANUAL.TXT    PRINTMAN.BAT  ORDERFRM.TXT
  REGISTER.BAT  VENDOR.DOC    README.BAT    README.TXT

> The One Installation Requirement:  All of the files must be in the default
directory.  If you do not know what this means, check a DOS manual.

> Instructions for printing the manual:  It is 5 pages long.  To print
the manual, enter PRINTMAN.

>  To start the program, enter WALL.
```
{% endraw %}

## VENDOR.DOC

{% raw %}
```
VENDER.DOC

"Tear Down the Wall" is a copyrighted program and you must have permission
to distribute it.

Permission is hereby granted to:

1)  Association of Shareware Professionals (ASP) approved vendors.

2)  All computer bulletin board services.

3)  Anyone who distributes the program for non-commercial reasons.

4)  Others who are granted special permission.

To obtain ASP approval, contact the Association of Shareware Professionals,
P.O. Box 5786, Bellevue, WA  98006  (CIS:  71327,2051).

Distributors should advise Langin Software, 532 W. 3rd St., Centralia, IL
62801, so that the distributor can be kept up-to-date with the latest
version of the program.

Include the version number, listed below, with your request.

Program History:

WALL.ZIP
 Version 1.00, September 1, 1990, the orginal release, $5.
 Version 1.01, March 17, 1991, ASP version, $9.
 Version 1.02, May 6, 1991, international version, $10.

This is version 1.02.

CIS Filename:  WALL.ZIP
Registration fee:  US $10.00
CIS ID:  73770,615
CIS Forum & LIBrary:  IBMNEW, LIB 6 (General Fun & Games)
Keywords:  ASP SHAREWARE TEAR DOWN WALL GAME LANGIN
Program:  "Tear Down the Wall"
Version: 1.02 (5-6-91)
Reason for version:
 Same features, 40K smaller.
 Documentation changes for international distribution.
 Registration changed from US $9.00 to US $10.00
BBS filenames:  WALL.*
User support:  CompuServe, and mail.
Vender upgrade policy:  Inquire if interested.
Disks needed:  One 360K disk.
Description:  Tear down the wall without using a pick or going to Berlin.
Great strategy game.  On line help.  3 speeds.  2 players.  Sound toggle.
Hours of fun.  Don't think you can beat the computer!

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3537

     Volume in drive A has no label
     Directory of A:\

    WALL     OVL     11477   5-06-91   4:36p
    WALL     EXE    208281   5-06-91   4:36p
    README   BAT        18   5-06-91   4:36p
    MANUAL   TXT      4909   5-06-91   4:36p
    ORDERFRM TXT      2431   5-06-91   4:36p
    PRINTMAN BAT        24   5-06-91   4:36p
    README   TXT       629   5-06-91   4:36p
    REGISTER BAT        22   5-06-91   4:36p
    VENDOR   DOC      1725   5-06-91   4:36p
    GO       BAT         9   3-30-93  12:19p
           10 file(s)     229525 bytes
                           86016 bytes free
