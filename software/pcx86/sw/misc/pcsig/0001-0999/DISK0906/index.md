---
layout: page
title: "PC-SIG Diskette Library (Disk #906)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0906/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0906"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "MISC. UTILITIES"

    This disk contains about twenty different utilities for your PC or
    compatible computer.  For example, the selective print screen utility
    will select the number of rows on the screen that you want to printout
    using the ``PrtSc'' option on your keyboard.  An ``unprotect'' guide
    helps you run ``Managing Your Money'' from a hard disk without
    inserting the original disk in drive A.
    
    Also included are communication utilities for Qmodem and other
    utilities for Microsoft Word; DOS command utilities within windows;
    some C language utilities; how to unprotect Chessmaster 2000; a
    multi-level window in Turbo BASIC; and more.  See File Descriptions for
    explanations of individual programs.
    File Descriptions
    
    DBRELATE ARC  Extensions of dBase, Clipper relations.
    CORDFORM ARC  AIA change order for Microsoft Word with style sheet.
    CM2PTCH  ARC  Patch for Chessmaster 2000.
    99       DIR  Telecommunication service library directory.
    MIRRORDD ARC  Dialing directory from Mirror.
    LOCKIT   DOC  Documentation for LOCKIT.COM.
    DR       ARC  Better than DIR from ``PC Magazine.''
    DC1      ARC  PC Junior DOS color program from CIS.
    LOCKIT   COM  Lock/Unlock keyboard -- turn screen on/off.
    FACE     COM  Lots of faces on your screen.
    LINE26   DOC  Documentation for LINE26.COM.
    LINE26   COM  Memory resident program that displays status info.
    MYMENU   ARC  Menu maker for hard disk.
    NEWDEX   ARC  Great floppy disk cataloger.
    MYMUNP   ARC  Managing Your Money patches with version 3.0.
    TYPEHEAD ARC  Clipper/dBase3-type ahead quash and why.  With demo progra
    TCSEARCH ARC  Search for files - Turbo C source code.
    TC-EQUIP ARC  Display PC equipment - Turbo C with source code.
    TBWINDOW ARC  Turbo BASIC window routines with source code.
    SLEEVE2  ARC  Print DIR on disk sleeve.
    SLEEVE1  ARC  Make disk sleeve with DIR on it.
    QUICKCHA ARC  Change color on any programs.
    PRNTSCR- ARC  Print any part of screen with PrtSc key.
    PKFIND11 EXE  Locate files on hard disk.
    PCKWKPAT ARC  Patch for shareware PC-Kwik.
    PKXARC   COM  Archiving utility.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## DC1.DOC

{% raw %}
```
Documentation for DC1.COM  DOS color program

*******************************************************************************
Special note: Users of enhanced keyboards please remember that keyboard
              commands to DC1 must be issued with Number Lock off (otherwise
              the program will just ignore).  This is to avoid problems with
              BIOS routine's accomodation for entering ASCII codes directly
              from the keyboard via the ALT NumLock nnn combination.  This
              means that you will need to issue keyboard commands to DC1 from
              your NUMERIC keypad with NUMBER LOCK OFF.

              DON'T USE DC1 WITH A COMMAND.COM THAT'S BEEN PATCHED WITH MY
              CP21 patch.  The patch causes DOS colors to be redefined and
              my DC1 program won't work properly with it.

*******************************************************************************

KEYBOARD COMMANDS:

   After installing DC1 (by entering DC1 at the A> prompt: A>DC1) you can
easily flip through foreground, background, and border colors by ALT
arrow key combinations. These combinations are as follows:

              (WITH NUMBER LOCK OFF)

   ALT LEFT ARROW     Flips through 16 BORDER colors
   ALT UP ARROW       Flips through 16 FOREGROUND colors
   ALT RIGHT ARROW    Flips through 7 BACKGROUND colors

   ALT DOWN ARROW     Toggles program ON/OFF

Once you select the colors you want via the ALT ARROW KEY combinations----
you're set........Your selected colors will survive mode changes and
DOS CLS's (If you enter a graphics mode the program will deactivate itself
but your colors will once again return as soon as you enter back into a text
mode).


COMMAND LINE COMMANDS:

   After you've installed DC1 you can turn the program on and off, or cause
it to uninstall itself and return your memory via command line parameters.
These parameters are as follows:

   S  will suspend DC1  Example: A>DC1 S
   R  will resume DC1   Example: A>DC1 R

   V  will vacate DC1 and return memory to system pool Example: A>DC1 V


A WARNING ABOUT THE V PARAMETER:

   DON'T USE IT EXCEPT FROM THE DOS LEVEL (i.e. don't try to use it from a
                                           DOS shell).
   DON'T USE IF YOU'VE LOADED OTHER TSR (terminate stay resident) TYPE
   PROGRAMS AFTER YOU LOADED DC1. (as this could create "holes" in your memory
                                   --- and maybe cause a system crash).

*******************************************************************************

TRYING IT OUT:

   With the DC1.COM program on a disk in your A drive type  DC1

Example:  A>DC1

   A message telling you DC1 has installed itself and containing instructions
similiar to the above should appear on your screen.

   Now, make sure you're not in Number Lock mode (if you've got a standard PCjr
keyboard this is probably already the case).

   Press down on the ALT key (in lower left corner of your keyboard)

   While holding down on ALT press and release the LEFT ARROW key.

   Your border color should change. WOW!

   Hold down the ALT key and press LEFT ARROW repeatedly (this will have the
   effect of "flipping" through the border colors) until you find one you like.

   Now hold down ALT, press and release UP and RIGHT ARROW until you get
   foreground and background colors you find pleasing. It's that simple.

   OH MY GOSH! ALL MY TEXT HAS DISSAPPEARED!!!!!!!!!

   No, not really, your text is still there.  What's happened is that you've
   defined background and foreground to the same color.

   Just press ALT UP ARROW or ALT RIGHT ARROW and YOUR TEXT WILL REAPPEAR.

*******************************************************************************

TECHIE NOTES:
   DC1 works by redefining some values in the VGA registers.  It's a PCjr
specific, PCjr only program.

******************************************************************************

COPYRIGHT:

DC1.COM is Copyright 1987 by Mark Boatright

THIS PROGRAM IS NOT TO BY DISTRIBUTED FOR PROFIT OR "DISK FEES" WITHOUT THE
AUTHOR'S EXPRESS, WRITTEN PERMISSION.

PROBLEMS:
  You can get ahold of me via Compuserve 74206,1751


OH, YEAH.

   Now that you got a DOS border you may notice that your screen isn't
   properly centered.  TO CENTER YOUR SCREEN:

      ALT + CTRL + RIGHT ARROW shifts screen right
      ALT + CTRL + LEFT ARROW shifts screen left



```
{% endraw %}

## FILES906.TXT

{% raw %}
```
Disk No  906
Program Title: MISCELLANEOUS UTILITIES
PC-SIG version 1
 
    This disk contains about 20 different utilities for your PC. For
example, the selective print screen utility will select the number of rows
on the screen that you want to printout using the "PtrSc" option on your
keyboard. An "unprotect" guide helps you run "Managing Your Money" from a
hard disk without inserting the original disk in drive A:. Also included
are some communication utilities for QMODEM and other utilities for
Microsoft Word, DOS command utilities within windows, some C language
utilities, how to unprotect CHESSMASTER 2000, a multi-level windows in
TURBO BASIC, and more.
 
Usage: Miscellaneous Utilities
 
System Requirements: 128K memory, two disk drives, and color graphics.
 
How to start: Most of the programs on this disk are archived and must
be un-archived, with PKXARC, to be used. Place PKXARC and the file you
wish to un-archive on a blank formatted disk and type: PKXARC [filename]
(press enter).
 
Suggested Registration: $5.00 to $50.00, depending on the program.
 
File Descriptions:
 
99       DIR   Telecommunication service library directory.
CM2PTCH  ARC   Patch for CHESMASTER 2000.
CORDFORM ARC   AIA change order for Microsoft Word with style sheet.
DBRELATE ARC   Extensions of DBASE, CLIPPER relations.
DC1      ARC   PC Junior DOS color program from CIS.
DR       ARC   Better than DIR from PC Magazine.
FACE     COM   Lots of faces on your screen.
LINE26   COM   Memory resident program that displays status info.
LINE26   DOC   Documentation for LINE26.COM.
LOCKIT   COM   Lock/Unlock keyboard - Turn screen on/off.
LOCKIT   DOC   Documentation for LOCKIT.COM.
MIRRORDD ARC   Dialing directory from Mirror.
MYMENU   ARC   Menu maker for hard disk.
MYMUNP   ARC   Managing Your Money patches with version 3.0.
NEWDEX   ARC   Great floppy disk cataloguer.
PCKWKPAT ARC   Patch for shareware PC-KWIK.
PKFIND11 EXE   Locate files on hard disk.
PRNTSCR- ARC   Print any part of screen with 'PrtSc' key.
QUICKCHA ARC   Change color on any programs.
SLEEVE1  ARC   Make disk sleeve with DIR on it.
SLEEVE2  ARC   Print DIR on disk sleeve.
TBWINDOW ARC   Turbo BASIC window routines with source code.
TC-EQUIP ARC   Display PC equipment - Turbo C with source code.
TCSEARCH ARC   Search for files - Turbo C source code.
TYPEHEAD ARC   Clipper/dBase3-type ahead quash and why. With demo program.
 
PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987 PC-SIG Inc.

```
{% endraw %}

## LINE26.DOC

{% raw %}
```
                          LINE26  Ver 2.00
                         (C) Copyright 1986
                      NetWork Business Systems
                         ALL RIGHTS RESERVED

                           Tue 11-Nov-86


LINE26 is an MS-DOS(TM) compatible memory-resident utility that displays
system status information on line 26, a portion of the monitor screen
not used by application programs. The status line consists of day of
week, date, caps, num & scroll indicators, and time of day.

LINE26 is a productivity enhancement tool that provides the computer
operator with access to important system variables within a
consistent format among various application programs.  This is accom-
plished by increasing the display area of the screen to include an
additional line of text located in the previously unused border area.
This "user friendly" utility reduces frustrating keyboard errors for
both "power users" and occasional or new computer users alike.

LINE26 is compatible with the color graphics adaptor and is active in 
screen modes 2 & 3 (80 column text) only with composite, color, and
Compaq(TM) monochrome-graphics monitors.

LINE26 is inactive when used with the monochrome, EGA, and Hercules(TM)
Graphics Card video adaptors.  (EGA compatibility is currenty under
development.)

To invoke LINE26, enter "LINE26 n" 
             
          where n is 0 = white on black  (default)
                     1 = white on blue
                     2 = black on green
                     3 = black on turquoise
                     4 = black on red
                     5 = black on purple
                     6 = black on yellow
                     7 = black on white
                     8 = inactivate LINE26

Color combinations may be changed, and LINE26 may be inactivated or re-
activated in 80 column text mode by entering "LINE26 n" with a new "n" 
parameter.  When an application program changes screen mode to graphics
or 40 column text, LINE26 remains resident but becomes inactive (no dis-
play).  As soon as screen mode returns to 80 column text, LINE26 re-
appears on the screen.  Compaq(TM) users may have LINE26 active in either
internal (Ctrl-Alt->) or external (Ctrl-Alt-<) screen modes.  When 
LINE26 is active, it always uses the currently displayed video page.
LINE26 will not "reload" to an additional memory location after it
is already resident.  LINE26 may be included in "autoexec.bat" as well
as other batch files providing a transparent means (through switching
the "n" parameter) of changing colors and active status of LINE26 with
various application programs.  LINE26 will not scroll on the screen,
and is not included in the printer output of "PrtSc" (Print Screen).

MS-DOS is a trademark of Microsoft Corporation.
Compaq is a trademark of Compaq Computer Corporation.
Hercules is a trademark of Hercules Computer Technology, Inc. 





                             LICENSE


LINE26 is the copyrighted property of NetWork Business Systems.  You are
granted a limited license to use LINE26 on a single computer.  If you
received your copy of LINE26 from an unauthorized source, a voluntary 
contribution (suggested amount $10) for the use of the program would be
appreciated and would make your copy legal.  You may not use this program
in a commercial environment or a govenmental organization without obtain-
ing a commercial license or a site license.  Commercial licenses, site
licenses, source code, and distribution licenses are available.  Contri-
butions and inquiries should be sent to:

                   LINE26
                   NetWork Business Systems
                   10070 Westpark, Suite 703
                   Houston, Texas  77042
                   Telephone (713) 781-9268

LINE26 is designed as a "well behaved" memory-resident program, comp-
atible with many of the other memory-resident and applications programs.
Some applications and memory-resident utilities assign processor
interrupts to their exclusive use ("not well behaved"). LINE26 is design-
ed to remain resident but inactive (no display) during the execution of
these types of programs, and resume active status (display) upon the
termination of the "not well behaved" program.

NetWork Business Systems specifically disclaims any warranty as to the 
operational suitability of LINE26 in your particular computer operating
environment.  Should operational problems with LINE26 occur, discontinue
use of LINE26 and contact NetWork Business Systems.  If NetWork Business
Systems is unable to correct the problem, you may request a full refund 
of the origional purchase price of LINE26, if request is made within 10
days of the origional purchase date.  NetWork Business Systems will not 
be liable for any loss or damages in excess of the origional purchase
price of LINE26.

```
{% endraw %}

## LOCKIT.DOC

{% raw %}
```
                        LOCKIT  Version 1.00
                         (C) Copyright 1986
                      NetWork Business Systems
                         ALL RIGHTS RESERVED

LOCKIT is an MS-DOS(TM) compatible memory-resident utility that locks/
unlocks the keyboard and turns the screen off/on at user command.

When LOCKIT is loaded, the user is prompted to enter a return code.
The return code may be any four of the normal keyboard characters.
Ctl-Alt-L invokes LOCKIT, clearing the screen and locking the keyboard.
If a program is running, it continues to execute in the background.
The screen is restored and the keyboard is unlocked by typing the
return code on the keyboard.  The return code may be changed at any time
by entering LOCKIT at the DOS prompt and typing a new return code.

LOCKIT is compatible with the color graphics adapter and composite,
color, and Compaq(TM) monitors.  Monochrome and EGA compatibility are
under development.

MS-DOS is a trademark of Microsoft Corporation.
Compaq is a trademark of Compaq Computer Corporation.





                         LICENSE & WARRANTY

LOCKIT is the copyrighted property of NetWork Business Systems.  You are
granted a limited license to use LOCKIT on a single computer.  If you
received you copy of LOCKIT without paying the license fee, a voluntary
contribution of $10 for the use of the program would be appreciated and
would make your copy legal.  You may not use this program in a commercial
environment or a governmental organization without obtaining a commercial,
site, or corporate license.  These are available as follows:

              Commercial License (1)                  $ 50.00
              (Up to 10 users at one site)
              Site License (1)(2)                     $200.00
              (Unlimited users at one site)
              Corporate License (1)(2)                $500.00
              (Unlimited users at multiple
              sites for one corporation)

              (1) includes one year free updates
              (2) includes source code

Fees and inquiries should be sent to

              NetWork Business Systems-LOCKIT
              P. O. Box 671
              Sugar Land, Texas  77487-0671

Your license agreement and the current version of LOCKIT will be sent to
you by return mail.

LOCKIT is designed as a "well-behaved" memory-resident program, compatible
with many of the other memory-resident and application programs.  Some
applications and memory-resident utilities assign processor interrupts to
their exclusive use (not "well-behaved").  LOCKIT is designed to remain
resident but inactive (no display) during the execution of these types of
programs, and resume active status (display) upon the termination of the
not "well-behaved" program.

NetWork Business Systems specifically disclaims any warranty as to the
operation or suitability of LOCKIT in your particular computer operating
environment.  Should operational problems with LOCKIT occur, discontinue
use of LOCKIT and contact NetWork Business Systems.  If NetWork Business
Systems is unable to correct the problem, you may request a full refund of
the original license fee of LOCKIT if such request is made within ten (10)
days of the original license date.  NetWork Business Systems will not be
liable for any loss or damages in excess of the original license fee for
LOCKIT.

```
{% endraw %}

## MIRRORDD.DOC

{% raw %}
```
OLD USERS: see section entitled XTRA...XTRA for new features!!!



If you like my script, you can always send me a five or ten spot:

				Paul Doland
				10910 Gulf Frwy  #519
				Houston, TX  77034
				(713) 944-5253  wk.
				(713) 946-8679  hm.



On with the documentation:

QUICKSTART:
As with much software, somethings are just easier to see for
yourself than they are to explain.  I suggest running it just to
see what it does before reading all of the documentation.  It is
really easy, I just don't know it the instructions are clear
enough or not.  I understand them, but I wrote it.  Load
Fkeys.xtk.  Then DO MIRRORDD.  If your in Houston, then many of the
boards are probably familier to you.  If not, just unplug the
phone and pretend.  Type A B C <ENTER> (no spaces) to the
prompts.  It should dial directory entries A, B and C in circular
fashion.  After it has dialed a few times, hit escape three times
quickly.  Hit F8.  It will delete from the queue the number it
was on and now only dial the other two numbers.  Hit escape 3
times quickly.  Now hit F9.  This time, it will not delete, it
will restart where it left off, dialing the two numbers.  Try
again and use F8 again.  There will only be one number left to
dial.  If it does not go smoothly, the rest of the documentation
should be of help.


INTRODUCTION:

MIRRORDD.XTS gives Mirror a dialing directory with simaler to Qmodem.
MIRRORDD.XTS is a scipt file that will allow you to dial in a
circular fashion up to ten numbers chosen from a menu.  As it is
a script file, it can run in the background while you are
working with other software in the foreground.  When it reaches
a connection, it will beep you, even if Mirror is in the
background.  When you finish that call, you have the option to
continue dialing the same list of numbers minus the one that you
reached.  In case you got disconnected,  you can have it
continue dialing the list including and starting with the one
you reached.  You can of course choose to use different function
keys than I use, but in expaining what to do, I will say "hit
F9" so you are stuck with learning my keys.  This is for my ease
of making this documentation.  You might also try a DO XFER right
away.  I think my documentation on it makes it sound like you
need a college degree in Mirror to use it, but its simple.

OPERATION:

Enter the command:  DO MIRRORDD <return.>  (Note: it will run a
little faster if you keep MIRRORDD.XTS on a RAM disk)   You will
be given a menu of 46 names.  Setting the directory entries up
will be covered in the section SET UP.  Beside each number is a
letter, digit, or special character such as ].  The command line
will prompt you for the first number for the queue.  Type the
letter of character to the left of the desired entry.  It will
prompt you for the second number.  Continue this process until
you have given it the entire list you wish to dial.  If you have
entered less than ten numbers, hit the return key to terminate the
list and start dialing.

When it gets a connection, you will be beeped.  Even if you were
processing in the foreground.  When you complete that call, you
can type the command JUmp Continue.  You will be prompted as to
whether you wish to delete from the queue.  Typing Y will delete
the number that you were connected to from the list.  Typing N
will not delete from the queue and will start dialing starting
with the number you were just connected to.  This is in case you
were inadvertantly disconnected.

Another way to accomplish restarting the list is to assign
function keys.  There are several labels in the program to
assist you.  If you set a function key to @JUMP DELETE|  hitting
that function will delete from the queue and start dialing.
@JUMP RECALL|  will start dialing from the last number.
@JUMP CONTINUE|  will prompt you if you wish to delete or not.

When dialing, you may wish to abort a dial and have it continue
with the list.  Hit the ESC key once.  You might wish to
delete from the queue.  For example, if you see that one number
is just ringing.  Hit the ESC key three times quickly.
Then do whichever method of deletion described above.  You might
wish to immediatly redial a number.  Hit the ESC key three times
quickly and do whichever method of recall as described above.
Note, the above suggestions only work if you hit the ESC key
before the dial in question is aborted by Mirror.  (before
timeout, busy, etc.)  If you wait to hit the ESC key after a
BUSY or NO CONNECTION message appears, it is to late to do as
described above.  (If you are to late you will delete the next call
from the queue; or you will restart from the next call in the
queue.)

SET UP:

Use your favorite editor to edit MIRRORDD.XTS.  Using Mirror's
built in editor is recomended because you will then be able to
edit MIRRORDD.XTS even if you have a program suspended in the
background.

The first section is a the menu section.  You will see two
columns of letters and other characters.  Beside each letter,
put in the name of a computer system you wish to have in your
directory.  Leave insert off to avoid moving of the columns
around.  But this section does nothing but give you the menu, so
its appearance is up to you.

Farther down in the program is a label, LABEL START-DIAL.  You
may wish to use your editor's search capability to find it.  Its
purpose is to initial all of your stardard parameters before it
starts to dial.  If you're like most people, you probably don't
change vary many parameters from one system to another,
especially if your modem supports automatic speed setting.  But
you may find one system requires 7 data bits and others require
8.  Later, I will tell you where to put the DAta 7 statement for that
one number.  But rather than now having to put a DAta 8 under all
other numbers, instead, put DATA 8 on a line under
START-DIAL.  Alternatively, you may wish to reload your entire STD
file.  You will need to convert your STD.XTK to a nested script
file.  To do this, copy STD.XTK to STD.XTS.  Change the last
statement which should be a GO statement to a RTurn statement.
Then put a DO STD statement under START-DIAL.  NOTE:  The
statements after START-DIAL are executed before it starts to
dial the chain, not between each dial.  Therefore, it will not
slow down redials if you put nested script files under
START-DIAL.

Farther down is where you place the names and phone numbers.
There is a section that that looks like the following:

LABEL CALL-A
NAME
NUMBER
GO R1/45
IF -$ JUMP @C10
JUMP ONLINE

LABEL CALL-A is for menu choice A, CALL-B is for menu choice B,
and so on.  Put each name and number into this section.  Make
sure they corrospond to what you put into the menu section.  If
this particular system is one that requires 7 data bits, put a
DATA 7 statemtent between the IF -$ and the the JUMP ONLINE
statements.  You can put as much as you want here.
Alternatively, you may wish to call a nested script file.
Perhaps even one that was created with the LRn command.  Be sure
it ends with a RTurn statement.  You will note you won't have to
stick in DATA 8 statements anywhere else because you already put
it under START-DIAL.  (This has been an example of course)


NOTE:  MIRRORDD.XTS uses the alternate function key assignments to
store what numbers to dial.  It also uses FK C7,C8,C9 and C10 as
internal variables.

Another hint:  It is suggested you set the first two characters
of the Call Progress string to hyphens.  (ie. disable NO
CONNECTION)  First of all, this message means your modem timed
out and it should not be set to time out before Mirror does.  If
your modem times out first, lengthen its timeout.  This is
stored in register 7 of Hayes compatable modems.  Second of all,
a NO CONNECTION message from you modem can get stored into
Mirror's buffer and foul the next redial.  If everytime you
start to redial, the first redial gets aborted, then this is
what is happening!!!  I was told this bug with Mirror had been
corrected, but I find it not works fine with my old setup, so I
haven't messed with it.



XTRA...XTRA...XTRA:  NEW FEATURES:

Once Mirror detects that a call has been successful, it will put
itself into a WAit Manual mode.  This means that the script file
has been suspended so that you can continue it.  The JUmp
statements unsuspend the script file.  But if you decide to run
another script file while MIRRORDD is suspended, MIRRORDD will
get aborted.  I wish Mirror would treat such a condition as a
nested script file, but it doesn't.  There is a get around.
But before I descibe it, I will tell you that I
made some mods to help keep MIRRORDD from getting aborted by getting
it to run nested script files.  But then I figured I might as well
set it up so that it can easily be restarted.  To restart Mirrordd, just hit
F10 (rerun MIRRORDD), then a return to the first prompt.  You will be asked
whether or not you wish to delete (from the previous queue) and
you will continue as though nothing has happened.  This assumes you
don't mess with the function keys I have reserved for MIRRORDD.

The next couple of paragraphs show how to get Mirrordd to run nested
script files.  This will keep it from getting aborted.  But you can
really just ingore this feature as you might as well just restart.  A DO
by itself will unsuspend MIRRORDD.  MIRRORDD will now ask you what
script file you wish to run.  If you hit return, it will give you
a menu of the script files from the current drive and directory.
If you hit return again, MIRRORDD will return to suspended mode.
If you tell it to run a script file that ends in a RTurn, it will
return to suspended mode, retaining the ability to Delete or
Recall.  I set up F5 to @DO| to do this.  As I said, you if you
do as I say, you will still be able to hit F8 or F9 to restart
the queue.  From now on, all my script files end with these two lines:

Label RTurn
RTurn

If the script in question wasn't really nested, this satement
will have no effect.  I set up F7 to @JUmp RTurn|.  This is in
case I abort a script file run as a nested script via the method
described above.  I hit F7, this will get me out of the
nested script, back to MIRRORDD, suspended.  F8 and F9 work.

In case you didn't understand what I've said in the last couple of
paragraphs, let me restate it a bit.  I first tried to find a work-
around to keep MIRRORDD from getting aborted when running other
script files.  I set MIRRORDD to up to run nested script files.
A DO command will get MIRRORDD to run a nested script file.  Then
I decided that I would like to make MIRRORDD restartable even if
it does get aborted.  This is the F10 <return> (rerun MIRRORDD)
method.  Below, when
I describe XFER.XTS, I say to type DO <return> XFER <return>  rather
than just DO XFER <return>  This is because the later method will
get MIRRORDD aborted.  But if you want, you can really ignore all
the garbage about RTurns and keeping MIRRORDD active and just use
the F10 <return> method.

As of now, I'm including two script files set up like this.
The first, NS.XTS is very simple, but it may make you realize a
little script file might make your life easier.  When I ask a
BBS for a list of all files in all directories, it will keep
asking me Y,N,NS?  Even if I type NS (non stop) when it gets to
the next directory, it will ask again.  NS.XTS makes an infinite
loop to watch for [NS]?  or NS?  And will reply NS|

XFER.XTS is a file transfer menu.  Believe me, I'm not a menu
finatic and I would just as soon type RX xxxx.xxx than put up a
menu asking me what protocol, etc.  But since Mirror won't beep
at you when it completes a transfer, I needed at least a small
script file to ALarm after the transfer.  Second of all, since a
lot of Sysops don't like you to set up a download and leave the
BBS to timeout afterwords, it is set up that if you don't do
respond within 5 seconds after the end-of-transfer alarm, it will
log off.  XFER isn't too smart at logging off, but it works for
the BBS's I've so far tried it with.  It sends a G| for goodbye.
Then it sends N| for those boards that ask if you want to leave a
comment.  For those boards that ask if your sure you want to log
off, it then sends G| then Y| then N| then BYe.  You may need to make
this smarter if it won't always log you off.  Enter DO <return>
XFER <return>.  I use F5 for DO| and F6 for XFER|
It will give you a menu of protocols, ask you if you are
receiving or xmitting, and the file name.  While some protocols
do not allow specifying the file name on the receiver, they all
allow at least a path name.  Some protocols even allow a second
parameter.  If necessary, just type this in too.  Just remember
that when it asks for filename, just type whatever you would
type if you were entering the command yourself.  The command
structure to my menu is set up so that you type the same thing
you would ordinarily type, but give you the added features as
described above.  For instance XX is the Mirror command to xmit with
xmodem and the XFER command to do likewise.  The menu is
put on the status screen, then you are put back on the terminal screen.
My menu also adds RS which means receive single file ymodem protocol.
And RN for no error checking version of ymodem.  According to SoftKlone,
these options are not needed for the transmit ymodem, but I do have
XN and XS on my menu.  These menu choices just append a /s or /n to
the command for you.  You can do this yourself by using the normal
RY command and appending a /s or /n to the filename.  This is what you
have to do if you want both (according to SoftKlone, use /sn)  And you
can also do this with the /t option.  I've never messed with these, so
I don't really know if my menu options work, but they should.

PERSONAL NOTES:
An off line utility maintanance utility would ease set up of the
dialing directory.  I have thought about writing such a utility.
Features that it would have would include easy entry of names
and phone numbers, set up of length of time allowed per dial,
whether it would be silent or alarm, etc.  I also thought about
having it set up nested scripts so that a person could have it
call up to 10 BBS's and automatically get all of his messages
off of each board.  The nested scripts would most likely be
created by the LRn command.  Presently, the dialing directory is
limited to one screen of 46 numbers.  I have also planned to add
additional screens.  Adding multiple pages would start to make
the script file rather large.  Of course that really doesn't hurt
anything.  But one small enhancement to the script language would
eliminate one large section of code.  There is a section of code
that follows the following pattern:

LABEL SET-A
@C9 CALL-A
JUMP @C10

This entire section would not be needed if I could simply have
a statement:  @C9 CALL-@   where the present value of @ would be
processed.

```
{% endraw %}

## MYMFIX.DOC

{% raw %}
```


               HOW TO RUN "MANAGING YOUR MONEY(tm)" FROM A
                  HARD DISK WITHOUT THE "KEY" DISK AND 
                      WITHOUT PROGRAM MODIFICATIONS 

         If you wish to run "Managing Your Money" (including version 
     2.0) from a hard disk, but are annoyed by the requirement for 
     having the original disk 1 in drive A, then read on....  

         Part of this ARC file is the program "MYMFIX.COM".  All you have to
     do is to include this program in your "autoexec" file when running
     Managing Your Money.  For instance, your "autoexec.bat" might look like
     this:

         DATE
         TIME
         MYMFIX  (to install "MYMFIX")
         MYM
         MYMFIX  (to uninstall "MYMFIX")

         That's all there is to it.  MYM will no longer look for the key 
     disk in drive A.  If you are using version 2.0 of MYM, when the 
     request is made to put the key disk in drive A, simply proceed as 
     though you had actually inserted the disk.  

     A request:

         If you find this program of value and wish to encourage the
     availability of similar programs in the future, then you may wish 
     to contribute $10 to the author at the address below: 

                 Herbert Sorock
                 2241 Thornwood Avenue
                 Wilmette, IL  60091

     ------------------------------------------------------------------------
     "Managing Your Money" is a registered trademarks of Micro Education 
     Corporation of America.  

```
{% endraw %}

## PCKWKPAT.DOC

{% raw %}
```
Did you see the writeup in the August issue of PC Tech Journal about disk
cacheing?  They have good things to say about Super PC-Kwik.  Have you seen
the shareware version of PC-Kwik, usually found in the arc file

    SHAREPCK.ARC

If you have tried it, you probably got disgusted looking at all 6 (count
em, 6) of the opening screens.  The following is a simple patch to stop the
screen display of the 6 opening screens, and also the necessity of hitting
return 6 times.  The first patch gets rid of the call to the subroutine
which displays the screens and waits for the ENTER keys.  The second part of
the patch is necessary because the writers were sneaky.  They incremented a
counter each time you pressed enter, and later they check this counter and
reboot your system if the counter is not equal to 6.  What is this?  Reminds
me of copy protection in a so-called "shareware" program.

I created this patch mainly because I enjoy tinkering with the innards of such
programs.  It is not my intention to deprive MultiSoft Corporation of their
right to registration fees if you use their program.  As a matter of fact, I
encourage you to register your copy if you use it regularly.  Shareware will
only work if we support it.  However, I resent anyone who releases a program
as "shareware" and then makes you look at six screens of advertising every
time you use the program.

On to the actual operation.  Extract the files from the Sharepck.arc file,
and copy three files onto a blank, formatted floppy disk.  The three files
are:
      1.  SHAREPCK.COM      The "shareware" version of PC-KWIK
      2.  DEBUG.COM         from your DOS disk.  Any version >= 2.00
      3.  PCKWKPAT.SCR      The other file that come along with this doc file

Make the disk drive containing the new floppy the default drive, and then
type in:
         DEBUG   <PCKWIKPAT.SCR

This will alter the SHAREPCK.COM file.


```
{% endraw %}

## SPS.DOC

{% raw %}
```
          SPS.COM ver 2.0 by Bob Montgomery, 4-23-87

This is a Terminate and Stay Resident (TSR) program which does  a
Selective  Print Screen (hence the name SPS). Once installed,  it
vectors  interrupt 5 (the print screen interrupt) to itself,  and
sits waiting for a print screen request. When you request a print
screen,  the  cursor is moved to the top of the screen,  and  the
prompt  'Set  start  position' appears in the  lower  right  hand
corner.  The  cursor  can be moved around  the  screen  with  the
following keys:

     Right arrow - move cursor right; stops at right edge
     Left arrow -  move cursor left; stops at left edge
     Up arrow -    move cursor up one line; stops at top line
     Down arrow    move cursor down one line; stops at bottom line
     Page Up       move cursor to top line
     Page Down     move cursor to bottom line
     ^Right arrow  move cursor to right edge of screen
     ^Left arrow   move cursor to left edge of screen
     Home          move cursor to upper left corner of screen
     End           move cursor to lower right corner of screen
     P             Print whole screen
     Escape        Cancel print screen

When the cursor is at the desired start position, press Enter and
the prompt 'Set end position' will appear in the lower right hand
corner.  Move the cursor to the desired end position,  and  press
Enter  again. The text within the rectangle defined by the  start
and end positions will then be printed.

If  you don't want to do a print screen, press Escape  to  cancel
the operation and return to the interrupted program. If you  want
to print the whole screen, press the P (upper or lower case) key.

Before the printer starts printing, the prompt in the lower right
corner  is  removed  and the original text is  restored.  If  the
printer  is  not  ready (or deselected), a  prompt  'Printer  not
ready'  will  appear  in the lower right  corner  after  about  2
seconds. Then after about 10 seconds, if the printer is still not
ready,  the  print  screen operation aborts and  returns  to  the
interrupted  program.  If during the print screen  operation  the
printer  becomes  'not ready', a prompt will tell you  this,  and
give you about 10 seconds to fix the problem before aborting.

The  program only traps interrupt 5 (print screen) until  invoked
by  pressing Shift PrtSc. Then, it vector the timer and  keyboard
interrupts  (8 and 9) to itself, and saves the old vectors.  When
it is done, it puts the old vectors back, and quits. In this way,
it is essentialy 'not there' until called, and 'not there'  after
it  is  done. This means that it will not  interfere  with  other
programs,  and  not  cause  additional  processing  delays.  Once
invoked, it traps all keyboard input and does not pass it on,  so
the  interrupted  program, other TSRs, and BIOS never  know  that
keys have been pressed. Since the last thing BIOS knew before the
program  was invoked was that the Shift and PrtSc keys  had  been
pressed, the releasing of the Shift key is passed on so that BIOS
can do its housekeeping; releasing the PrtSc key does not  affect
the  BIOS housekeeping, so it is not passed on. This  means  that
the  program must service the keyboard each time it generates  an
interrupt 9, a job which is normally done by BIOS.

This program  solves  a number of problems, some  of  which  were
present with the previous version of SPS by Paul Trioano.

     1. Passing  keys  on is sometimes a problem,  because  other
        programs (like CED) will save the keypresses, and act  on
        them  after the interrupting program quits.
     2. Sending  the  screen characters directly is  sometimes  a
        problem,  since  some screens contain  control  character
        (below  20h) and make them appear as blanks  by  changing
        the attribute to black on black; HDIR is an example. This
        will  cause  the printer output to not  match  the  video
        screen.
     3. Routing  interrupts  thru  a program  when  not  required
        takes  extra processing time, and can cause  interference
        with other programs.

The source code is included, and is liberally commented to  allow
those  interested to understand how it works. It uses  only  BIOS
calls  and no DOS calls; DOS calls will not work in TSR  programs
because DOS is not re-entrant. It has been tried on the XT and AT
with no problems, so will probably work on all machines with  IBM
compatible  BIOS. If you have any problems or comments,  leave  a
message  with the Black Hole BBS in Orlando, Florida, (305)  260-
6397. Enjoy.

Bob Montgomery



         ----------------end-of-author's-documentation---------------

                        Software Library Information:

                   This disk copy provided as a service of

                        The Public (Software) Library

           If you have received this disk from another source, you
         should be aware that disks in the P(s)L are updated monthly
            so this copy may not be the latest version available.
         For a copy of the latest monthly software library newsletter
          and a list of the 800+ disks in the library, call or write

                        The Public (Software) Library
                              P.O.Box 35705 - F
                           Houston, TX 77235-5705
                               (713) 721-6104

         We are not the authors of this program, nor are we associated
         with the author in any way other than as a distributor of the
         program in accordance with the author's terms of distribution.

         Please direct shareware payments and specific questions about
         this program to the author of the program, whose name appears
         elsewhere in  this documentation. If you have trouble getting
         in touch with the author,  we will do whatever we can to help
         you with your questions. All programs have been tested and do
         run.  To report problems,  please use the form that is in the
         file PROBLEM.DOC on many of our disks or in other written for-
         mat with screen printouts, if possible.


```
{% endraw %}

## QUICKCHA.BAS

{% raw %}
```bas
1 ' Program to create SETCOLOR.COM
2 'COPYRIGHT 1987 COMPUTE! PUBLICATIONS, INC.
3 'ALL RIGHTS RESERVED.
4 CLS:PRINT "COPYRIGHT 1987":PRINT"COMPUTE! PUBLICATIONS, INC.":PRINT ALL RIGHTS RESERVED."
5 FOR ZZ=1 TO 1500:NEXT:CLS
6 PRINT "CREATING SETCOLOR.COM ....... PLEASE WAIT."
10 OPEN "SETCOLOR.COM" FOR OUTPUT AS 1
20 PRINT#1,CHR$(&HE9);CHR$(&H32);CHR$(&H4);
30 PRINT#1,CHR$(34);
40 FOR N=1 TO 146:PRINT#1,CHR$(0);:NEXT
50 T=0:FOR J=1 TO 963:READ A$:N=VAL("&H"+A$)
60 T=T+N:PRINT#1,CHR$(N);:NEXT:CLOSE 1
70 IF T=88099! THEN PRINT"SETCOLOR.COM SUCCESSFULLY CREATED!":END
80 DATA 00,00,00,00,00,00,C9,07,CD,07
90 DATA CD,07,CD,07,CD,07,CD,07,CD,07
100 DATA CD,07,CD,07,CD,07,CD,07,CD,07
110 DATA CD,07,BB,07,BA,07,20,07,42,07
120 DATA 4F,07,52,07,44,07,45,07,52,07
130 DATA 20,07,20,07,20,07,20,07,20,07
140 DATA BA,07,BA,07,20,07,42,07,41,07
150 DATA 43,07,4B,07,47,07,52,07,4F,07
160 DATA 55,07,4E,07,44,07,20,07,BA,07
170 DATA BA,07,20,07,46,07,4F,07,52,07
180 DATA 45,07,47,07,52,07,4F,07,55,07
190 DATA 4E,07,44,07,20,07,BA,07,C8,07
200 DATA CD,07,CD,07,CD,07,CD,07,CD,07
210 DATA CD,07,CD,07,CD,07,CD,07,CD,07
220 DATA CD,07,CD,07,BC,07,00,00,00,00
230 DATA 2E,80,3E,04,01,00,75,22,FB,50
240 DATA 53,51,52,56,57,1E,06,E4,60,2E
250 DATA 3A,06,03,01,75,08,B4,02,CD,16
260 DATA A8,08,75,0D,07,1F,5F,5E,5A,59
270 DATA 5B,58,2E,FF,2E,28,02,E8,C4,02
280 DATA 0E,1F,0E,07,B4,0F,CD,10,3C,01
290 DATA 74,0D,3C,03,74,09,07,1F,5F,5E
300 DATA 5A,59,5B,58,CF,A2,05,01,C6,06
310 DATA 9A,01,01,C6,06,9B,01,01,C6,06
320 DATA 95,01,00,C6,06,96,01,00,C6,06
330 DATA 97,01,00,88,3E,06,01,C6,06,04
340 DATA 01,01,B4,03,CD,10,89,0E,07,01
350 DATA B4,01,E8,51,02,E8,1E,01,E8,96
360 DATA 01,E8,DE,01,E8,5D,02,B4,00,CD
370 DATA 16,3C,1B,75,03,E9,95,00,80,FC
380 DATA 48,75,10,80,3E,9A,01,01,74,E9
390 DATA FE,0E,9A,01,E8,BD,01,EB,E0,80
400 DATA FC,50,75,10,80,3E,9A,01,03,74
410 DATA D4,FE,06,9A,01,E8,A8,01,EB,CB
420 DATA 80,FC,4D,75,C6,80,3E,9A,01,01
430 DATA 75,1C,FE,06,95,01,80,26,95,01
440 DATA 07,E8,F8,01,B8,00,0B,B7,00,8A
450 DATA 1E,95,01,CD,10,E8,02,02,EB,A3
460 DATA 80,3E,9A,01,02,75,20,FE,06,96
470 DATA 01,80,26,96,01,07,8A,16,96,01
480 DATA B1,04,D2,E2,88,16,99,01,C6,06
490 DATA 98,01,8F,E8,38,00,E9,7C,FF,FE
500 DATA 06,97,01,80,26,97,01,0F,8A,16
510 DATA 97,01,88,16,99,01,C6,06,98,01
520 DATA F0,E8,1C,00,E9,60,FF,E8,A2,01
530 DATA E8,BE,00,E8,B4,01,B4,01,8B,0E
540 DATA 07,01,CD,10,C6,06,04,01,00,E9
550 DATA 00,FF,E8,89,01,06,B8,00,B8,8E
560 DATA C0,B9,D0,07,B8,00,10,80,3E,05
570 DATA 01,03,74,06,B9,E8,03,B8,00,05
580 DATA 8A,1E,06,01,32,FF,F7,E3,8B,F8
590 DATA 47,8A,36,98,01,8A,16,99,01,26
600 DATA 8A,05,22,C6,0A,C2,26,88,05,47
610 DATA 47,E2,F2,07,8D,3E,09,01,47,B9
620 DATA 46,00,8A,05,22,C6,0A,C2,88,05
630 DATA 47,47,E2,F4,E8,82,00,E8,CA,00
640 DATA E8,49,01,C3,06,0E,07,BE,82,06
650 DATA B8,00,10,80,3E,05,01,03,74,06
660 DATA BE,3A,03,B8,00,05,8A,1E,06,01
670 DATA 32,FF,F7,E3,03,F0,8D,3E,09,01
680 DATA 1E,B8,00,B8,8E,D8,E8,03,00,1F
690 DATA 07,C3,BB,05,00,B8,84,00,2E,80
700 DATA 3E,05,01,03,74,03,B8,34,00,B9
710 DATA 1C,00,F3,A4,03,F0,4B,83,FB,00
720 DATA 75,F3,C3,06,8D,36,09,01,BF,82
730 DATA 06,B8,00,10,80,3E,05,01,03,74
740 DATA 06,BF,3A,03,B8,00,05,8A,1E,06
750 DATA 01,32,FF,F7,E3,03,F8,B8,00,B8
760 DATA 8E,C0,E8,2F,00,07,C3,06,8D,36
770 DATA 9C,01,BF,82,06,B8,00,10,80,3E
780 DATA 05,01,03,74,06,BF,3A,03,B8,00
790 DATA 05,8A,1E,06,01,32,FF,F7,E3,03
800 DATA F8,B8,00,B8,8E,C0,E8,03,00,07
810 DATA C3,C3,BB,05,00,B8,84,00,80,3E
820 DATA 05,01,03,74,03,B8,34,00,B9,1C
830 DATA 00,F3,A4,03,F8,4B,83,FB,00,75
840 DATA F3,C3,E8,67,00,06,B8,00,B8,8E
850 DATA C0,BF,87,06,B8,00,10,80,3E,05
860 DATA 01,03,74,06,BF,3F,03,B8,00,05
870 DATA 8A,1E,06,01,32,FF,F7,E3,03,F8
880 DATA 8B,F7,8A,0E,9B,01,BB,A0,00,80
890 DATA 3E,05,01,03,74,03,BB,50,00,03
900 DATA FB,E2,FC,B0,07,B9,0A,00,26,88
910 DATA 05,47,47,E2,F9,8B,FE,8A,0E,9A
920 DATA 01,03,FB,E2,FC,B0,70,B9,0A,00
930 DATA 26,88,05,47,47,E2,F9,A0,9A,01
940 DATA A2,9B,01,07,E8,19,00,C3,BA,DA
950 DATA 03,EC,A8,08,74,FB,83,EA,02,B0
960 DATA 25,80,3E,05,01,03,74,02,FE,C8
970 DATA EE,C3,B0,29,80,3E,05,01,03,74
980 DATA 02,FE,C8,BA,D8,03,EE,C3,E4,61
990 DATA 8A,E0,0C,80,E6,61,8A,C4,E6,61
1000 DATA FA,B0,20,E6,20,FB,C3,B9,07,06
1010 DATA B4,01,CD,10,B4,35,B0,09,CD,21
1020 DATA 89,1E,28,02,8C,06,2A,02,B4,25
1030 DATA B0,09,8D,16,2C,02,CD,21,BA,36
1040 DATA 05,CD,27
```
{% endraw %}

## SLEEVE.BAS

{% raw %}
```bas
10  '***********************************
20  '**                               **
30  '**       SLEEVE / DIRECTORY      **
40  '**                               **
50  '**   (C) Copyright 1984, 1987    **
60  '**              by               **
70  '**       Glenn M. Dickson        **
80  '**        654 Gilpin St.         **
90  '**        Houston, Texas         **
100 '**             77034             **
110 '**        (713) 944-3937         **
120 '**  (Replies only if S.A.S.E.)   **
130 '***********************************
140 '  >>> IBM Proprinter Version  <<<
150 '***********************************
160 '*    This program will print the  *
170 '* disk directory and the outline  *
180 '* of a disk sleeve (jacket) on a  *
190 '* sheet of paper. Cut it out,     *
200 '* fold and glue. You have a disk  *
210 '* sleeve with the directory       *
220 '* printed on it. No more pieces   *
230 '* of paper to loose.              *
240 '***********************************
250 DEF SEG=0:POKE 1047,PEEK(1047) OR 64:DEF SEG
260 CLEAR:WIDTH 80:KEY OFF:CLS:WIDTH "LPT1:",255
270 DIM TB$(144),AB$(144),TT$(24)
280 INFO$=SPACE$(44)
290 FOR X=1 TO 44
300 READ BYTE$
310 MID$(INFO$,X,1)=CHR$(VAL("&H"+BYTE$))
320 NEXT X
330 '
340 HC=45:   'Horizontal printed character
350 VC=124:  'Vertical printed character
360 '
370 LOCATE 11,31:PRINT "DO YOU WANT COLOR?"
380 LOCATE 14,31:PRINT "( Yes ) or ( No )"
390 IN$=INKEY$:IF IN$=CHR$(13) THEN IN$="Y"
400 IF (IN$="Y") OR (IN$="y") THEN CLR=1 ELSE IF (IN$="N") OR (IN$="n") THEN CLR=0 ELSE 390
410 CLR=1
420 IF CLR THEN COLOR 2,0,0
430 CLS
440 T=16
450 R=6
460 LOCATE R,1
470 PRINT TAB(T)"▒▒▒▒▒▒▄ ▒▒▄     ▒▒▒▒▒▒▄ ▒▒▒▒▒▒▄ ▒▒▄   ▒▒▄ ▒▒▒▒▒▒▄"
480 PRINT TAB(T)"▒▒█▀▀▀▀ ▒▒█     ▒▒█▀▀▀▀ ▒▒█▀▀▀▀ ▒▒█   ▒▒█ ▒▒█▀▀▀▀"
490 PRINT TAB(T)"▒▒▒▒▒▒▄ ▒▒█     ▒▒▒▒▒▄  ▒▒▒▒▒▄  ▒▒█   ▒▒█ ▒▒▒▒▒▄ "
500 PRINT TAB(T)" ▀▀▀▒▒█ ▒▒█     ▒▒█▀▀▀  ▒▒█▀▀▀   ▒▒▄ ▒▒█▀ ▒▒█▀▀▀ "
510 PRINT TAB(T)"▒▒▒▒▒▒█ ▒▒▒▒▒▒▄ ▒▒▒▒▒▒▄ ▒▒▒▒▒▒▄    ▒▒█▀▀  ▒▒▒▒▒▒▄"
520 PRINT TAB(T)" ▀▀▀▀▀▀  ▀▀▀▀▀▀  ▀▀▀▀▀▀  ▀▀▀▀▀▀     ▀▀     ▀▀▀▀▀▀"
530 LOCATE R+7,25:PRINT"Version 1.0 for IBM Proprinter"
540 IF CLR THEN COLOR 6
550 LOCATE 21,24:PRINT "Press 'P' for Program Information"
560 IF CLR THEN COLOR 2
570 LOCATE 23,8:PRINT "(c) Copyright 1984, 1987 by Glenn M. Dickson, All Rights Reserved"
580 IF CLR THEN COLOR 6
590 LOCATE 25,28:PRINT "Press any key to continue";
600 IN$=INKEY$:IF IN$="" THEN 600
610 LOCATE ,28:PRINT "                         ";
620 IF IN$="P" OR IN$="p" THEN GOSUB 1830
630 '**************************** ENTER DATE ****************************
640 IF CLR THEN COLOR 14,1,1
650 CLS:LOCATE 2,10:PRINT "Enter the date:"
660 IF CLR THEN COLOR 7
670 LOCATE 3,25:PRINT "Type 'B' to leave blank":LOCATE 4,25:PRINT "Press 'ENTER' to use the system date"
680 IN$=INKEY$:IF IN$="" THEN 680
690 IF CLR THEN COLOR 15
700 IF IN$=CHR$(13) THEN FDATE$=LEFT$(DATE$,6)+RIGHT$(DATE$,2):LOCATE 2,27:PRINT FDATE$;:GOTO 730
710 IF (IN$="B") OR (IN$="b") THEN FDATE$="        ":LOCATE 2,27:PRINT "(blank)";
720 '**************************** SELECT DRIVE **************************
730 IF CLR THEN COLOR 14
740 LOCATE 6,10:PRINT "Drive A or B:"
750 IF CLR THEN COLOR 7
760 LOCATE 7,25:PRINT "Enter drive to read from, A or B"
770 IF CLR THEN COLOR 15
780 LOCATE 6,27
790 DR$=INKEY$:IF DR$="" THEN 790
800 IF DR$="A" OR DR$="a" THEN PRINT "A":DR=65:GOTO 830
810 IF DR$="B" OR DR$="b" THEN PRINT "B":DR=66 ELSE 780
820 '**************************** ENTER DISK NAME ***********************
830 IF CLR THEN COLOR 14
840 LOCATE 9,10:PRINT "Name of disk:"
850 IF CLR THEN COLOR 7
860 LOCATE 10,25:PRINT "19 characters maximum"
870 IF CLR THEN COLOR 15
880 LOCATE 9,27
890 LINE INPUT;"";DNAME$
900 IF LEN(DNAME$) > 19 THEN DNAME$=LEFT$(DNAME$,19):LOCATE 9,27:PRINT STRING$(53," ");:LOCATE ,27:PRINT DNAME$
910 IF LEN(DNAME$)=0 THEN LOCATE 9,27:PRINT "(blank)"
920 '**************************** ENTER DISK NUMBER *********************
930 IF CLR THEN COLOR 14
940 LOCATE 12,10:PRINT "Disk Number:"
950 IF CLR THEN COLOR 7
960 LOCATE 13,25:PRINT "8 characters maximum"
970 LOCATE 14,25:PRINT "Press 'ENTER' for blank"
980 IF CLR THEN COLOR 15
990 LOCATE 12,27
1000 LINE INPUT;"";DNUM$
1010 IF LEN(DNUM$)=0 THEN LOCATE 12,27:PRINT "(blank)"
1020 IF LEN(DNUM$) > 8 THEN DNUM$=LEFT$(DNUM$,8):LOCATE 12,27:PRINT STRING$(53," ");:LOCATE ,27:PRINT DNUM$
1030 IF LEN(DNUM$) < 8 THEN DNUM$=" "+DNUM$:GOTO 1030
1040 GOSUB 1680:DEF SEG=0
1050 '*************************** GET DISK DIRECTORY ********************
1060 IF CLR THEN COLOR 15,1,1
1070 CLS
1080 PRINT "READING DIRECTORY....."
1090 FSPEC$=DR$+":*.*"
1100 HEAD=1050:TAIL=1052:BUFFER=1054:C=0
1110 ON ERROR GOTO 1130
1120 FILES FSPEC$:ON ERROR GOTO 0:GOTO 1150
1130 IF CLR THEN COLOR 4,0,0
1140 BEEP:CLS:LOCATE 12,24:PRINT "Cannot read directory on drive "DR$:ON ERROR GOTO 0:END
1150 LOCATE 3,1:ROWS=0
1160 POKE HEAD,30:POKE TAIL,34:POKE BUFFER,0:POKE BUFFER+1,79:POKE BUFFER+2,13:POKE BUFFER+3,28
1170 LINE INPUT TT$(ROWS):IF TT$(ROWS)<>"" THEN ROWS=ROWS+1:GOTO 1160
1180 ROWS=ROWS-1:FOR I=0 TO ROWS:FOR J=0 TO 3
1190 T$=MID$(TT$(I),J*18+1,12)
1200 IF T$<>"" THEN TB$(C)=T$:C=C+1
1210 NEXT J:NEXT I:ERASE TT$:DEF SEG
1220 IF C>135 THEN GOSUB 1770:' Too many files
1230 '*************************** SORT ROUTINE **************************
1240 IF CLR THEN COLOR 14
1250 LOCATE 24,22:PRINT "Do you want a sorted listing ? [Y/N]";
1260 AN$=INKEY$:IF AN$="" THEN 1260
1270 IF AN$="N" OR AN$="n" THEN 1340
1280 CLS:PRINT "Sorting Directory....."
1290 Z$=CHR$(255):E=1
1300 FOR A=0 TO C-1:C$=Z$:FOR B=0 TO C-1:IF C$<TB$(B) THEN 1320
1310 C$=TB$(B):D=B
1320 NEXT:AB$(E)=C$:E=E+1:TB$(D)=Z$:NEXT
1330 '*************************** PRINT ROUTINE *************************
1340 CLS:PRINT "Printing Sleeve.....":KT=0:SK=1:Z=21:Y=0
1350 LPRINT CHR$(27)"0";CHR$(15);CHR$(27)"U""1":'Set 8 LPI & Condensed (17.1 CPI)
1360 LPRINT TAB(15);"F";TAB(110);"F":LPRINT "C";TAB(15);"O";TAB(110);"O";TAB(124);"C":LPRINT "U"; TAB(15);"L";TAB(110);"L";TAB(124);"U":LPRINT "T";TAB(15);"D";TAB(110);"D";TAB(124);"T"
1370 LPRINT CHR$(VC);STRING$(122,CHR$(HC));CHR$(VC);"CUT":KT=KT+1
1380 LPRINT CHR$(VC);TAB(15);CHR$(VC);TAB(20);DNAME$;TAB(60);FDATE$;TAB(97);DNUM$;TAB(110);CHR$(VC);TAB(124);CHR$(VC):KT=KT+1
1390 LPRINT CHR$(VC);TAB(15);CHR$(VC);STRING$(94,CHR$(HC));CHR$(VC);TAB(124);CHR$(VC):KT=KT+1
1400 LPRINT CHR$(VC);TAB(15);CHR$(VC);TAB(19);C;"Files";TAB(85);
1410 LPRINT USING "#,###,### bytes free";BYTES%*SECTORS%*CLUSTERS%;
1420 LPRINT TAB(110);CHR$(VC);TAB(124);CHR$(VC):KT=KT+1
1430 LPRINT CHR$(VC);TAB(15);CHR$(VC);STRING$(94,CHR$(HC));CHR$(VC);TAB(124);CHR$(VC):KT=KT+1
1440 FOR W=1 TO C
1450 IF Y=0 THEN LPRINT CHR$(VC);TAB(15);CHR$(VC);TAB(Z);AB$(W); ELSE IF Y=1 THEN LPRINT TAB(Z);AB$(W);
1460 Y=1:Z=Z+18:IF Z>100 THEN Y=0:LPRINT TAB(110);CHR$(VC);TAB(124);CHR$(VC):Z=21:KT=KT+1
1470 NEXT W
1480 IF Z>22 THEN LPRINT TAB(110);CHR$(VC);TAB(124);CHR$(VC):KT=KT+1
1490 FOR L=KT TO 30
1500 LPRINT CHR$(VC);TAB(15);CHR$(VC);TAB(110);CHR$(VC);TAB(124);CHR$(VC)
1510 NEXT L
1520 LPRINT CHR$(VC);STRING$(13,CHR$(HC));CHR$(VC);TAB(110);CHR$(VC);STRING$(13,CHR$(HC));CHR$(VC);"CUT"
1530 LPRINT TAB(11);"FOLD";CHR$(VC);STRING$(94,CHR$(HC));CHR$(VC);"FOLD"
1540 FOR L=1 TO 37
1550 LPRINT TAB(15);CHR$(VC);TAB(110);CHR$(VC)
1560 NEXT L
1570 LPRINT TAB(12);"CUT";CHR$(VC);STRING$(94,CHR$(HC));CHR$(VC);"CUT"
1580 LPRINT TAB(15);"C";TAB(110);"C":LPRINT TAB(15);"U";TAB(110);"U":LPRINT TAB(15);"T";TAB(110);"T"
1590 FOR L=1 TO 9:LPRINT:NEXT L
1600 IF CLR THEN COLOR 14
1610 CLS
1620 LOCATE 11,25:PRINT"MAKE ANOTHER SLEEVE OR QUIT ?"
1630 LOCATE 13,30:PRINT "[A]nother or [Q]uit"
1640 AN$=INKEY$:IF AN$="" THEN 1640
1650 IF AN$="a" OR AN$="A" THEN CLS:GOTO 830
1660 IF AN$="q" OR AN$="Q" THEN CLS:END ELSE 1640
1670 '*************************** FREESPACE ROUTINE *********************
1680 DRIVE%=DR:BYTES%=0:SECTORS%=0:CLUSTERS%=0:TOTAL%=0
1690 XX=VARPTR(INFO$)
1700 DISKINFO=PEEK(XX+1) + 256 * PEEK(XX+2)
1710 CALL DISKINFO(DRIVE%,BYTES%,SECTORS%,CLUSTERS%,TOTAL%)
1720 RETURN
1730 DATA 55,89,E5,8B,76,0E,8B,14,80,FA,00
1740 DATA 74,03,80,EA,40,B4,36,CD,21,8B,76
1750 DATA 0C,89,0C,8B,76,0A,89,04,8B,76,08
1760 DATA 89,1C,8B,76,06,89,14,5D,CA,0A,00
1770 IF CLR THEN COLOR 12,0,0
1780 CLS:LOCATE 12,19:PRINT "You have"C"files.  I will print 135 of them."
1790 LOCATE 25,28:PRINT "Press any key to continue";
1800 IF INKEY$="" THEN 1800 ELSE LOCATE ,28:PRINT "                         ";
1810 RETURN
1820 '*************************** PROGRAM INFO **************************
1830 IF CLR THEN COLOR 15,1,1
1840 CLS
1850 LOCATE 1,30:PRINT " SLEEVE / DIRECTORY "
1860 PRINT:PRINT TAB(29)"IBM Proprinter version"
1870 PRINT:PRINT "   This program will print the outline of a disk sleeve and then print the disk directory in the outline.  All you have to do is cut it out, fold, and glue or"
1880 PRINT "tape the flaps.  You will have a disk sleeve (jacket) with the directory printedon it.  No more pieces of paper to loose or get mixed up."
1890 PRINT:PRINT "   This program is hereby entered into the PUBLIC DOMAIN.  No one may charge    anything for the use or distribution of this program."
1900 PRINT:PRINT "Share this program with others.  If you modify and improve this program I would appreciate a copy of the modified version."
1910 PRINT:PRINT "   Since this program is being distributed via freeware and modifications to    the code will certainly result, I can make no claims as to the suitability of"
1920 PRINT "this program for use on any particular computer or printer.  There are no       warranties or claims, express or implied.  While I have made every effort to    insure that there are no bugs in this program, you use it entirely at your own"
1930 PRINT "risk.  This program is furnished 'AS IS'."
1940 GOSUB 2030
1950 CLS
1960 PRINT "   I originally wrote this program back in 1983 for use on the Radio Shack      Color Computer.  I decided it was time to rework it for use on IBM types."
1970 PRINT:PRINT"   The print routines are from the original program.  The disk free bytes       routine is from PC Magazine, December 23, 1986, page 264.  The routine to read  the disk directory is by Gregory Jackmond, address unknown."
1980 PRINT:PRINT "   Live long and prosper."
1990 PRINT:PRINT TAB(30)"Glenn M. Dickson"
2000 PRINT TAB(31)"654 Gilpin St."
2010 PRINT TAB(29)"Houston, TX, 77034"
2020 GOSUB 2030:RETURN
2030 IF CLR THEN COLOR 12
2040 LOCATE 25,27:PRINT "Press any key to continue";
2050 IN$=INKEY$:IF IN$="" THEN 2050 ELSE LOCATE 25,27:PRINT "                         ";
2060 IF CLR THEN COLOR 15
2070 RETURN
```
{% endraw %}

## SLEEVE.BAS

{% raw %}
```bas
10  '***********************************
20  '**                               **
30  '**       SLEEVE / DIRECTORY      **
40  '**                               **
50  '**          Version 2.0          **
60  '**                               **
70  '**   (C) Copyright 1984, 1987    **
80  '**              by               **
90  '**       Glenn M. Dickson        **
100 '**        654 Gilpin St.         **
110 '**        Houston, Texas         **
120 '**             77034             **
130 '**        (713) 944-3937         **
140 '**  (Replies only if S.A.S.E.)   **
150 '***********************************
160 '
170 '***********************************
180 '*    This program will print the  *
190 '* disk directory and the outline  *
200 '* of a disk sleeve (jacket) on a  *
210 '* sheet of paper. Cut it out,     *
220 '* fold and glue. You have a disk  *
230 '* sleeve with the directory       *
240 '* printed on it. No more pieces   *
250 '* of paper to loose.              *
260 '* This version is for 17.1 CPI    *
270 '* and 8 LPI.                      *
280 '***********************************
290 CLEAR:WIDTH 80:KEY OFF:CLS:WIDTH "LPT1:",255
300 DIM TB$(144),AB$(144),TT$(24),FILE.NAME$(200),DTA%(22)
310 LOCATE 11,31:PRINT "DO YOU WANT COLOR?"
320 LOCATE 14,31:PRINT "( Yes ) or ( No )"
330 IN$=INKEY$:IF IN$=CHR$(13) THEN IN$="Y"
340 IF (IN$="Y") OR (IN$="y") THEN CLR=1 ELSE IF (IN$="N") OR (IN$="n") THEN CLR=0 ELSE 330
350 IF CLR THEN COLOR 14,0,0
360 CLS
370 LOCATE 12,29:PRINT"ONE MOMENT PLEASE....."
380 INFO$=SPACE$(44)
390 FOR X=1 TO 44
400 READ BYTE$
410 MID$(INFO$,X,1)=CHR$(VAL("&H"+BYTE$))
420 NEXT X
430 BASDIR$=SPACE$(76)
440 FOR X=1 TO 76
450 READ X$
460 MID$(BASDIR$,X,1)=CHR$(VAL("&H"+X$))
470 NEXT X
480 '
490 HC=45:   'Horizontal printed character
500 VC=124:  'Vertical printed character
510 '
520 IF CLR THEN COLOR 2,0,0
530 CLS
540 T=16
550 R=6
560 LOCATE R,1
570 PRINT TAB(T)"▒▒▒▒▒▒▄ ▒▒▄     ▒▒▒▒▒▒▄ ▒▒▒▒▒▒▄ ▒▒▄   ▒▒▄ ▒▒▒▒▒▒▄"
580 PRINT TAB(T)"▒▒█▀▀▀▀ ▒▒█     ▒▒█▀▀▀▀ ▒▒█▀▀▀▀ ▒▒█   ▒▒█ ▒▒█▀▀▀▀"
590 PRINT TAB(T)"▒▒▒▒▒▒▄ ▒▒█     ▒▒▒▒▒▄  ▒▒▒▒▒▄  ▒▒█   ▒▒█ ▒▒▒▒▒▄ "
600 PRINT TAB(T)" ▀▀▀▒▒█ ▒▒█     ▒▒█▀▀▀  ▒▒█▀▀▀   ▒▒▄ ▒▒█▀ ▒▒█▀▀▀ "
610 PRINT TAB(T)"▒▒▒▒▒▒█ ▒▒▒▒▒▒▄ ▒▒▒▒▒▒▄ ▒▒▒▒▒▒▄    ▒▒█▀▀  ▒▒▒▒▒▒▄"
620 PRINT TAB(T)" ▀▀▀▀▀▀  ▀▀▀▀▀▀  ▀▀▀▀▀▀  ▀▀▀▀▀▀     ▀▀     ▀▀▀▀▀▀"
630 LOCATE R+7,34:PRINT"Version 2.0"
640 IF CLR THEN COLOR 6
650 LOCATE 21,24:PRINT "Press 'P' for Program Information"
660 IF CLR THEN COLOR 2
670 LOCATE 23,8:PRINT "(c) Copyright 1984, 1987 by Glenn M. Dickson, All Rights Reserved"
680 IF CLR THEN COLOR 6
690 LOCATE 25,28:PRINT "Press any key to continue";
700 IN$=INKEY$:IF IN$="" THEN 700
710 LOCATE ,28:PRINT "                         ";
720 IF IN$="P" OR IN$="p" THEN GOSUB 2150
730 '**************************** ENTER DATE ****************************
740 IF CLR THEN COLOR 14,1,1
750 CLS:LOCATE 2,10:PRINT "Enter the date:"
760 IF CLR THEN COLOR 7
770 LOCATE 3,30:PRINT "Type 'B' to leave blank":LOCATE 4,30:PRINT "Press 'ENTER' to use the system date"
780 IN$=INKEY$:IF IN$="" THEN 780
790 IF CLR THEN COLOR 15
800 IF IN$=CHR$(13) THEN FDATE$=LEFT$(DATE$,6)+RIGHT$(DATE$,2):LOCATE 2,27:PRINT FDATE$;:GOTO 830
810 IF (IN$="B") OR (IN$="b") THEN FDATE$="        ":LOCATE 2,27:PRINT "(blank)";
820 '**************************** SELECT DRIVE **************************
830 IF CLR THEN COLOR 14
840 LOCATE 6,10:PRINT "Drive A or B:"
850 IF CLR THEN COLOR 7
860 LOCATE 7,30:PRINT "Enter drive to read from, A or B"
870 IF CLR THEN COLOR 15
880 LOCATE 6,27
890 DR$=INKEY$:IF DR$="" THEN 890
900 IF DR$="A" OR DR$="a" THEN PRINT "A":DR=65:GOTO 930
910 IF DR$="B" OR DR$="b" THEN PRINT "B":DR=66 ELSE 880
920 '**************************** ENTER DISK NAME ***********************
930 IF CLR THEN COLOR 14
940 LOCATE 9,10:PRINT "Name of disk:"
950 IF CLR THEN COLOR 7
960 LOCATE 10,30:PRINT "19 characters maximum"
970 IF CLR THEN COLOR 15
980 LOCATE 9,27
990 LINE INPUT;"";DNAME$
1000 IF LEN(DNAME$) > 19 THEN DNAME$=LEFT$(DNAME$,19):LOCATE 9,27:PRINT STRING$(53," ");:LOCATE ,27:PRINT DNAME$
1010 IF LEN(DNAME$)=0 THEN LOCATE 9,27:PRINT "(blank)"
1020 '**************************** ENTER DISK NUMBER *********************
1030 IF CLR THEN COLOR 14
1040 LOCATE 12,10:PRINT "Disk Number:"
1050 IF CLR THEN COLOR 7
1060 LOCATE 13,30:PRINT "8 characters maximum"
1070 LOCATE 14,30:PRINT "Press 'ENTER' for blank"
1080 IF CLR THEN COLOR 15
1090 LOCATE 12,27
1100 LINE INPUT;"";DNUM$
1110 IF LEN(DNUM$)=0 THEN LOCATE 12,27:PRINT "(blank)"
1120 IF LEN(DNUM$) > 8 THEN DNUM$=LEFT$(DNUM$,8):LOCATE 12,27:PRINT STRING$(53," ");:LOCATE ,27:PRINT DNUM$
1130 IF LEN(DNUM$) < 8 THEN DNUM$=" "+DNUM$:GOTO 1130
1140 GOSUB 1750
1150 '*************************** GET DISK DIRECTORY ********************
1160 IF CLR THEN COLOR 15,1,1
1170 CLS
1180 LOCATE 12,29:PRINT "READING DIRECTORY....."
1190 GOSUB 1850
1200 IF C>135 THEN GOSUB 2090:' Too many files
1210 '******************* PC MAG SORT ROUTINE **************************
1220 IF CLR THEN COLOR 14
1230 LOCATE 24,22:PRINT "Do you want a sorted listing ? [Y/N]";
1240 AN$=INKEY$:IF AN$="" THEN 1240
1250 IF AN$="N" OR AN$="n" THEN 1410
1260 CLS:LOCATE 12,29:PRINT "Sorting Directory....."
1270 AX=COUNT:AY=COUNT
1280 AY=AY\2
1290 IF AY=0 THEN 1410
1300 AZ=AX-AY
1310 FOR CNT=1 TO AZ
1320 PTR1=CNT
1330 PTR2=PTR1+AY
1340 IF FILE.NAME$(PTR1) <= FILE.NAME$(PTR2) THEN 1380
1350 SWAP FILE.NAME$(PTR1),FILE.NAME$(PTR2)
1360 PTR1=PTR1-AY
1370 IF PTR1 > 0 THEN 1330
1380 NEXT
1390 GOTO 1280
1400 '*************************** PRINT ROUTINE *************************
1410 CLS:LOCATE 12,30:PRINT "Printing Sleeve.....":KT=0:SK=1:Z=21:Y=0
1420 LPRINT CHR$(27)"0";CHR$(15);CHR$(27)"U""1":'Set 8 LPI & Condensed (17.1 CPI)
1430 LPRINT TAB(15);"F";TAB(110);"F":LPRINT "C";TAB(15);"O";TAB(110);"O";TAB(124);"C":LPRINT "U"; TAB(15);"L";TAB(110);"L";TAB(124);"U":LPRINT "T";TAB(15);"D";TAB(110);"D";TAB(124);"T"
1440 LPRINT CHR$(VC);STRING$(122,CHR$(HC));CHR$(VC);"CUT":KT=KT+1
1450 LPRINT CHR$(VC);TAB(15);CHR$(VC);TAB(20);DNAME$;TAB(60);FDATE$;TAB(97);DNUM$;TAB(110);CHR$(VC);TAB(124);CHR$(VC):KT=KT+1
1460 LPRINT CHR$(VC);TAB(15);CHR$(VC);STRING$(94,CHR$(HC));CHR$(VC);TAB(124);CHR$(VC):KT=KT+1
1470 LPRINT CHR$(VC);TAB(15);CHR$(VC);TAB(19);COUNT;"Files";TAB(85);
1480 LPRINT USING "#,###,### bytes free";BYTES%*SECTORS%*CLUSTERS%;
1490 LPRINT TAB(110);CHR$(VC);TAB(124);CHR$(VC):KT=KT+1
1500 LPRINT CHR$(VC);TAB(15);CHR$(VC);STRING$(94,CHR$(HC));CHR$(VC);TAB(124);CHR$(VC):KT=KT+1
1510 FOR W=1 TO COUNT
1520 IF Y=0 THEN LPRINT CHR$(VC);TAB(15);CHR$(VC);TAB(Z);FILE.NAME$(W); ELSE IF Y=1 THEN LPRINT TAB(Z);FILE.NAME$(W);
1530 Y=1:Z=Z+18:IF Z>100 THEN Y=0:LPRINT TAB(110);CHR$(VC);TAB(124);CHR$(VC):Z=21:KT=KT+1
1540 NEXT W
1550 IF Z>22 THEN LPRINT TAB(110);CHR$(VC);TAB(124);CHR$(VC):KT=KT+1
1560 FOR L=KT TO 30
1570 LPRINT CHR$(VC);TAB(15);CHR$(VC);TAB(110);CHR$(VC);TAB(124);CHR$(VC)
1580 NEXT L
1590 LPRINT CHR$(VC);STRING$(13,CHR$(HC));CHR$(VC);TAB(110);CHR$(VC);STRING$(13,CHR$(HC));CHR$(VC);"CUT"
1600 LPRINT TAB(11);"FOLD";CHR$(VC);STRING$(94,CHR$(HC));CHR$(VC);"FOLD"
1610 FOR L=1 TO 37
1620 LPRINT TAB(15);CHR$(VC);TAB(110);CHR$(VC)
1630 NEXT L
1640 LPRINT TAB(12);"CUT";CHR$(VC);STRING$(94,CHR$(HC));CHR$(VC);"CUT"
1650 LPRINT TAB(15);"C";TAB(110);"C":LPRINT TAB(15);"U";TAB(110);"U":LPRINT TAB(15);"T";TAB(110);"T"
1660 FOR L=1 TO 9:LPRINT:NEXT L
1670 IF CLR THEN COLOR 14
1680 CLS
1690 LOCATE 11,25:PRINT"MAKE ANOTHER SLEEVE OR QUIT ?"
1700 LOCATE 13,30:PRINT "[A]nother or [Q]uit"
1710 AN$=INKEY$:IF AN$="" THEN 1710
1720 IF AN$="a" OR AN$="A" THEN CLS:GOTO 930
1730 IF AN$="q" OR AN$="Q" THEN CLS:END:SYSTEM ELSE 1710
1740 '******************* PC MAG FREESPACE SUB-ROUTINE *****************
1750 DRIVE%=DR:BYTES%=0:SECTORS%=0:CLUSTERS%=0:TOTAL%=0
1760 XX=VARPTR(INFO$)
1770 DISKINFO=PEEK(XX+1) + 256 * PEEK(XX+2)
1780 CALL DISKINFO(DRIVE%,BYTES%,SECTORS%,CLUSTERS%,TOTAL%)
1790 RETURN
1800 DATA 55,89,E5,8B,76,0E,8B,14,80,FA,00
1810 DATA 74,03,80,EA,40,B4,36,CD,21,8B,76
1820 DATA 0C,89,0C,8B,76,0A,89,04,8B,76,08
1830 DATA 89,1C,8B,76,06,89,14,5D,CA,0A,00
1840 '******************* PC MAG GET DIRECTORY SUB-ROUTINE *************
1850 FOR XY=1 TO 200
1860 FILE.NAME$(XY)=SPACE$(12)
1870 NEXT XY
1880 IF DR=65 THEN FILE.NAME$(0)="A:*.*"+CHR$(0)
1890 IF DR=66 THEN FILE.NAME$(0)="B:*.*"+CHR$(0)
1900 XY=VARPTR(BASDIR$)
1910 BASDIR=PEEK(XY+1) + 256 * PEEK(XY+2)
1920 CALL BASDIR(DTA%(0),FILE.NAME$(0))
1930 COUNT=0
1940 WHILE ASC(FILE.NAME$(COUNT+1))
1950 COUNT=COUNT+1
1960 PRINT FILE.NAME$(COUNT)
1970 WEND
1980 PRINT COUNT "files found"
1990 RETURN
2000 DATA 55,8B,EC,8B,56,08,8B,DA,83,C3,1E,B4
2010 DATA 1A,CD,21,8B,EC,8B,6E,06,8B,56,01,B4
2020 DATA 4E,B9,00,00,CD,21,3D,12,00,74,1C,83
2030 DATA C5,03,8B,7E,01,8B,F3,B9,0C,00,AC,84
2040 DATA C0,74,04,AA,49,EB,F7,B0,20,F3,AA,B4
2050 DATA 4F,EB,DA,83,C5,03,8B,7E,01,C6,05,00
2060 DATA 5D,CA,04,00
2070 '******************* PC MAG SHELL SORT SUB-ROUTINE ****************
2080 '************************** TOO MANY FILES ************************
2090 IF CLR THEN COLOR 12,0,0
2100 CLS:LOCATE 12,19:PRINT "You have"C"files.  I will print 135 of them.":C=135
2110 LOCATE 25,28:PRINT "Press any key to continue";
2120 IF INKEY$="" THEN 2120 ELSE LOCATE ,28:PRINT "                         ";
2130 RETURN
2140 '*************************** PROGRAM INFO **************************
2150 IF CLR THEN COLOR 15,1,1
2160 CLS
2170 LOCATE 1,30:PRINT " SLEEVE / DIRECTORY "
2180 PRINT:PRINT "   This program will print the outline of a disk sleeve and then print the disk directory in the outline.  All you have to do is cut it out, fold, and glue or"
2190 PRINT "tape the flaps.  You will have a disk sleeve (jacket) with the directory printedon it.  No more pieces of paper to loose or get mixed up."
2200 PRINT:PRINT "   This program is hereby entered into the PUBLIC DOMAIN.  No one may charge    anything for the use or distribution of this program."
2210 PRINT:PRINT "Share this program with others.  If you modify and improve this program I would appreciate a copy of the modified version."
2220 PRINT:PRINT "   Since this program is being distributed via freeware and modifications to    the code will certainly result, I can make no claims as to the suitability of"
2230 PRINT "this program for use on any particular computer or printer.  There are no       warranties or claims, express or implied.  While I have made every effort to    insure that there are no bugs in this program, you use it entirely at your own"
2240 PRINT "risk.  This program is furnished 'AS IS'."
2250 GOSUB 2350
2260 CLS
2270 PRINT "   I originally wrote this program back in 1983 for use on the Radio Shack      Color Computer.  I decided it was time to rework it for use on IBM types."
2280 PRINT:PRINT"   The print routines are from my original program.  The disk free-bytes        routine, the directory read routine, and the directory sort routine are from    PC Magazine, December 23, 1986."
2290 PRINT:PRINT"   These are solid routines and I couldn't see re-inventing the wheel when threeperfectly good ones were already available."
2300 PRINT:PRINT "   Live long and prosper."
2310 PRINT:PRINT TAB(30)"Glenn M. Dickson"
2320 PRINT TAB(31)"654 Gilpin St."
2330 PRINT TAB(29)"Houston, TX, 77034"
2340 GOSUB 2350:RETURN
2350 IF CLR THEN COLOR 12
2360 LOCATE 25,27:PRINT "Press any key to continue";
2370 IN$=INKEY$:IF IN$="" THEN 2370 ELSE LOCATE 25,27:PRINT "                         ";
2380 IF CLR THEN COLOR 15
2390 RETURN
```
{% endraw %}

## CALCATTR.ASM

{% raw %}
```
              title          CALCATTR
              page           60,132

attr          equ            [bp + 06h]          ; ATTR%
back          equ            [bp + 0Ah]          ; BACK%
fore          equ            [bp + 0Eh]          ; FORE%

program       segment                            ; begin program segment
              assume         cs:program          ; parameters on stack
              push           bp                  ; save for basic
              mov            bp,sp               ; establish stack
              push           es                  ; save for basic
              les            di,fore             ; point to foreground color
              mov            dx,es:[di]          ; get the color
              les            di,back             ; point to background color
              mov            ax,es:[di]          ; get the color
              and            ax,0007h            ; and 7
              mov            cl,04h              ; move shift count to CL
              shl            ax,cl               ; shift AL to AH (back and 7)*16
              mov            si,dx               ; move foreground to si
              and            si,0010h            ;
              mov            cl,03h              ; move shift count to CL
              shl            si,cl               ; shift left 3
              or             ax,si               ;
              and            dx,000fh            ;
              or             ax,dx               ;
              les            di,attr             ; point to ATTR%
              mov            es:[di],ax          ; send back to basic
              pop            es                  ; restore ES
              pop            bp                  ; back to basic
program       ends
              end


```
{% endraw %}

## DEMO20.BAS

{% raw %}
```bas
'Demonstration of TBWINDO
$INCLUDE "TBWINDO.INC"
key off
':color 7,1:cls

'Dimension array for screen saving
dim scrn%(6000)
'Tell TBWINDO whether to check for snow or not
SNOCHK%=1  '0=YES 1=NO
'Put up opening screen
'4 windows of different colors and a Title Window
call qfill(1,1,25,80,asc(" "),snochk%,fnattr%(7,1))
call makewindow(4,15,10,30,fnattr%(4,3),4,1,0)
call makewindow(3,36,13,40,fnattr%(15,2),3,1,0)
call makewindow(9,10,13,40,fnattr%(0,5),2,1,0)
call makewindow(12,42,11,36,fnattr%(3,4),1,1,0)

call makewindow(8,20,7,40,fnattr%(0,7),2,1,0)

color 0,7:locate 11,35:print"Presenting...";
delay 4

call makewindow(8,20,7,40,fnattr%(0,7),2,1,0)
locate  9,26:print"      T B W I N D O"
locate 10,26:print"           2.0
locate 12,26:print" Windowing Routines for the"
locate 13,26:print"Borland Turbo BASIC Compiler"

delay 3

call makewindow(17,55,7,24,fnattr%(0,6),1,1,0)
color 0,6
locate 18,57:print "By:"
locate 20,57:print "  Rick Fothergill"
locate 21,57:print " 141 Oak Hill Road"
locate 22,57:print "Pittsfield, MA 01201"


delay 4

call makewindow(8,25,10,32,fnattr%(7,1),2,0,1)

color 15,1
locate 9,35:print "Including ..."
locate 11,30:print "*** Window Tools ***"
locate 13,28:print "A collection of routines"
locate 14,28:print "for integration into your"
locate 15,28:print "own programs.

delay 4

call makewindow(8,25,10,32,fnattr%(7,1),2,0,0)

locate 9,28:print  " * * * * * * * * * * * * * "
locate 11,28:print "Stand by for a guided tour"
locate 13,28:print "through the many facets of"
locate 15,28:print "this exciting program."
call recolor(fnattr%(15,1),fnattr%(13,1),snochk%)
for a% = 0 to 14
for b% = 0 to 7
call recolor(fnattr%(a%,b%),fnattr%(a%+1,b%),snochk%)
next b%
next a%



delay 3

'cls
call qfill(1,1,25,80,asc(" "),snochk%,fnattr%(7,1))
call makewindow(9,16,8,52,fnattr%(0,7),2,0,1)

color 0,7

locate 10,18:print "The basic  purpose of TBWINDO is to provide"
locate 11,18:print "the  fundamental  routines for  implementing"
locate 12,18:print "simple 'windowing' into your Turbo BASIC pro-"
locate 13,18:print "grams.   With  just a few simple statements,"
locate 14,18:print "you can 'pop-up'  a colored  window onto the"
locate 15,18:print "screen; just like this ..."

delay 3

call makewindow(1,47,7,30,fnattr%(15,4),1,0,0)

delay 3

call makewindow(9,16,8,52,fnattr%(0,7),2,0,1)

locate 12,18:print"The window can be a solid panel of any of
locate 14,18:print"the BASIC background colors; such as ..."

delay 4

call makewindow(1,2,7,35,fnattr%(1,2),0,0,0)

delay 3

call makewindow(9,16,8,52,fnattr%(0,7),2,0,1)

locate 12,18:print"or it can be surrounded by a 'frame' in any"
locate 13,18:print"of four styles..."

delay 3

call makewindow(5,5,8,35,fnattr%(9,5),1,0,0)
call titlewindow(1,"[ Frame Style 1 ]")
call makewindow(8,8,8,35,fnattr%(12,3),2,0,0)
call titlewindow(2,"[ Frame Style 2 ]")
call makewindow(11,11,8,35,fnattr%(15,4),3,0,0)
call titlewindow(3,"[ Frame Style 3 ]")
call makewindow(14,14,8,35,fnattr%(0,6),4,0,0)
call titlewindow(1,"[ Frame Style 4 ]")

delay 4

color 7,1
'cls
call qfill(1,1,25,80,asc(" "),snochk%,fnattr%(7,1))
call makewindow(9,16,8,52,fnattr%(0,7),2,0,1)

color 0,7
locate 10,18:print "The frame itself can be in any one of the"
locate 11,18:print "BASIC foreground colors. It can even blink"
locate 12,18:print "if you want..."

delay 3
for i=0 to 15
  clr%=i
  label$="[ Color:"+str$(i)+" ]"

  call makewindow(14,10,11,35,fnattr%(clr%,5),4,0,0)
  call titlewindow(2,label$)
  delay 1
next i
call makewindow(14,10,11,35,fnattr%(31,5),4,0,0)
call titlewindow(2,"[ Color: 31 ]")

delay 4

color 7,1
'cls
call qfill(1,1,25,80,asc(" "),snochk%,fnattr%(7,1))
call makewindow(9,16,8,52,fnattr%(0,7),2,0,1)
color 0,7
locate 14,18:print "The window itself can be presented in many"
locate 15,18:print "different ways. It can be flat..."

delay 3

call makewindow(1,2,11,30,fnattr%(15,4),1,0,0)

delay 3

call makewindow(9,16,8,52,fnattr%(0,7),2,0,0)
locate 14,17:print "or it can have a black shadow underneath; giving"
locate 15,17:print "a three-dimensional effect..."
delay 3
call makewindow(1,38,11,30,fnattr%(15,5),2,1,0)

delay 3

color 7,1
'cls
call qfill(1,1,25,80,asc(" "),snochk%,fnattr%(7,1))
color 0,7

call makewindow(9,16,8,52,fnattr%(0,7),2,0,1)
locate 12,18:print "For a particularly dramatic effect, the window"
locate 13,18:print "can 'grow' onto the screen..."

delay 3
call makewindow(7,10,12,63,fnattr%(15,4),2,1,1)
color 15,4
locate 12,37:print "W O W !!!
delay 3

color 0,7
call makewindow(9,16,8,52,fnattr%(0,7),2,0,1)
locate 10,18:print "Once you have your window on the screen, simply"
locate 11,18:print "use LOCATE, COLOR,  and PRINT statements to put"
locate 12,18:print "text in them. Another call with the same param-"
locate 13,18:print "eters as the first ...
delay 3

call makewindow(9,16,8,52,fnattr%(0,7),2,0,0)
locate 10,18:print "will erase the window for new text. But suppose"
locate 11,18:print "that instead of clearing the window,  you would"
locate 12,18:print "rather SCROLL the data inside either up or down,"
locate 13,18:print "and put a new line of text on either the top or"
locate 14,18:print "bottom line; as the case might be..."
delay 3

call scroll(10,17,14,66,1,6)
locate 14,18:print"   NEVER FEAR . . .  "
delay 1
call scroll(10,17,14,66,1,6)
delay 1
call scroll(10,17,14,66,1,6)
locate 14,18:print"   The SCROLL routine will do just that!  You can"
delay 1
call scroll(10,17,14,66,1,6)
locate 14,18:print"   scroll lines of text  -  "
delay 1
call scroll(10,17,14,66,1,6)
locate 14,18:print"                            UP"
delay 1
call scroll(10,17,14,66,1,6)
locate 14,18:print"                            UP"
delay 1
call scroll(10,17,14,66,1,6)
locate 14,18:print"                            UP"
delay 1
call scroll(10,17,14,66,1,7)
delay 1
call scroll(10,17,14,66,1,7)
delay 1
call scroll(10,17,14,66,1,7)
delay 1
call scroll(10,17,14,66,1,7)
locate 10,18:print"                      or  DOWN"
delay 1
call scroll(10,17,14,66,1,7)
locate 10,18:print"                          DOWN"
delay 1
call scroll(10,17,14,66,1,7)
locate 10,18:print"                          DOWN"
delay 1

call makewindow(9,16,8,52,fnattr%(0,7),2,0,1)
locate 10,18:print "Just as easily as you can create the window!"
locate 11,18:print "In fact, all of the commands of TBWINDO are"
locate 12,18:print "very  easy to use.  Here is a call to create"
locate 13,18:print "this window ..."
locate 15,18:print "   CALL MAKEWINDOW(8,14,8,52,fnattr%(0,7),2,0,1)"
delay 5

call makewindow(9,16,8,52,fnattr%(0,7),2,0,0)
locate 11,18:print "And this is the call used to perform the SCROLL"
locate 12,18:print "operation ..."
locate 14,18:print "       CALL SCROLL(9,15,16,65,1,6)
delay 3

call makewindow(9,16,8,52,fnattr%(0,7),2,0,0)
locate 10,18:print "An even simpler command allows you to save the"
locate 11,18:print "contents of the screen  into an integer array;"
locate 12,18:print "so that  you can place a window  on the screen"
locate 13,18:print "and then quickly remove it; leaving the under-"
locate 14,18:print "lying  information as it was.  Here is  a good"
locate 15,18:print "example . . ."
call savescrn(SNOCHK%,scrn%(0))
delay 5
call makewindow(3,5,15,45,fnattr%(0,2),4,1,1)
locate 9,10:color 0,2:print "This is the first level ..."
delay 2
call savescrn(SNOCHK%,scrn%(2000))
call makewindow(6,29,17,50,fnattr%(15,4),4,1,1)
locate 12,40:color 15,4:print "This is the second level ..."
delay 2
call savescrn(SNOCHK%,scrn%(4000))
call  makewindow(9,22,15,35,fnattr%(12,3),4,1,1)
locate 16,24:color 12,0:print "This is the third level ..."
delay 2
locate 16,24:print "Now to go back ...           "
delay 1
call restscrn(SNOCHK%,scrn%(4000))
delay 1
call restscrn(SNOCHK%,scrn%(2000))
delay 1
call restscrn(SNOCHK%,scrn%(0))
delay 2
'cls
call qfill(1,1,25,80,asc(" "),snochk%,fnattr%(7,1))
call makewindow(4,15,10,30,fnattr%(4,3),4,0,1)
call makewindow(3,36,13,40,fnattr%(15,2),3,0,1)
call makewindow(9,10,13,40,fnattr%(0,5),2,0,1)
call makewindow(12,42,11,36,fnattr%(3,4),1,0,1)

call makewindow(9,16,8,52,fnattr%(0,7),2,0,1)
color 0,7
locate 10,21:print"This was the original opening screen."
locate 11,21:print"You can selectively change the color"
locate 12,21:print"of an area simply by changing the"
locate 13,21:print"attribute."
delay 1

call recolor(fnattr%(4,3),fnattr%(6,2),snochk%)
delay 2

call recolor(fnattr%(0,5),fnattr%(14,5),snochk%)
delay 2

call recolor(fnattr%(15,2),fnattr%(14,6),snochk%)
delay 2

call recolor(fnattr%(0,7),fnattr%(15,1),snochk%)
delay 2
call recolor(fnattr%(15,1),fnattr%(0,7),snochk%)
delay 2
call makewindow(9,16,8,52,fnattr%(0,7),2,0,0)
locate 10,21:print "These are the commands required:"
locate 11,21:print"      call calcattr(0,7,x%)  'old"
locate 12,21:print"      call calcattr(15,1,y%) 'new"
locate 13,21:print"      call recolor(x%,y%,snochk%)"
delay 4
color 7,1
'cls
call qfill(1,1,25,80,asc(" "),snochk%,fnattr%(7,1))
call makewindow(9,16,8,52,fnattr%(0,7),2,2,0)
locate 10,18:color 0,7:print "The basic routines in the  TBWINDO  package"
locate 11,18:          print "give you all you  need to create some power-"
locate 12,18:          print "ful 'toolbox' modules to integrate into your"
locate 13,18:          print "programs. But if you would rather not do all"
locate 14,18:          print "the work yourselves, please see the accomp- "
locate 15,18:          print "anying demo program DEMO.EXE ...           "
delay 5
end
```
{% endraw %}

## QATTR.ASM

{% raw %}
```
              title          QATTR
              page           60,132

attr          equ            [bp + 06h]
snochk        equ            [bp + 0Ah]
cols          equ            [bp + 0Eh]
rows          equ            [bp + 12h]
col           equ            [bp + 16h]
row           equ            [bp + 1Ah]

program       segment
              assume         cs:program
              push           bp
              mov            bp,sp
              push           ds
              push           es
              mov            ah,15
              int            10h
              mov            dx,0B000h
              push           dx
              pop            es
              mov            dx,03BAh
              cmp            al,7
              jz             ok
              mov            dx,0B800h
              push           dx
              pop            es
              mov            dx,03DAh
ok:           lds            si,rows
              mov            cx,ds:[si]
              push           cx
              lds            si,attr
              mov            ax,ds:[si]
              push           ax
              lds            si,row
              mov            ax,ds:[si]
              dec            ax
              lds            si,col
              mov            bx,ds:[si]
              dec            bx
              shl            bx,1
              mov            cl,05
              shl            ax,cl
              mov            cx,ax
              shl            ax,1
              shl            ax,1
              add            cx,ax
              add            bx,cx
              pop            ax
              push           bx
              lds            di,snochk
              mov            cx,ds:[di]
              jcxz           snow
              pop            bx
nxtrow:       lds            di,cols
              mov            cx,ds:[di]
              cld
nosnow:       mov            di,bx
doagain:      inc            di
              stosb
              loop           doagain
              pop            cx
              dec            cx
              push           cx
              add            bx,160
              jcxz           endit
              jmp            nxtrow
snow:         pop            bx
nxtrow1:      lds            di,cols
              mov            cx,ds:[di]
              cld
              mov            di,bx
              cli
doagain1:     inc            di
              push           ax
waitlo1:      in             al,dx
              shr            al,1
              jc             waitlo1
waithi1:      in             al,dx
              shr            al,1
              jnc            waithi1
              pop            ax
              stosb
              loop           doagain1
              pop            cx
              dec            cx
              push           cx
              add            bx,160
              jcxz           endit
              jmp            nxtrow1
endit:        pop            cx
              pop            es
              pop            ds
              pop            bp
program       ends
              end
```
{% endraw %}

## QFILL.ASM

{% raw %}
```
              title          QFILL
              page           60,132

attr          equ            [bp + 06h]
snochk        equ            [bp + 0Ah]
char          equ            [bp + 0Eh]
cols          equ            [bp + 12h]
rows          equ            [bp + 16h]
col           equ            [bp + 1Ah]
row           equ            [bp + 1Eh]

program       segment
              assume         cs:program
              push           bp
              mov            bp,sp
              push           ds
              push           es
              mov            ah,15
              int            10h
              mov            dx,0B000h
              push           dx
              pop            es
              mov            dx,03BAh
              cmp            al,7
              jz             ok
              mov            dx,0B800h
              push           dx
              pop            es
              mov            dx,03DAh
ok:           lds            si,rows
              mov            cx,ds:[si]
              push           cx
              lds            si,char
              mov            ax,ds:[si]
              mov            bl,al
              lds            si,attr
              mov            ax,ds:[si]
              mov            bh,al
              push           bx
              lds            si,row
              mov            ax,ds:[si]
              dec            ax
              lds            si,col
              mov            bx,ds:[si]
              dec            bx
              shl            bx,1
              mov            cl,05
              shl            ax,cl
              mov            cx,ax
              shl            ax,1
              shl            ax,1
              add            cx,ax
              add            bx,cx
              pop            ax
              push           bx
              lds            di,snochk
              mov            cx,ds:[di]
              jcxz           snow
              pop            bx
nxtrow:       lds            di,cols
              mov            cx,ds:[di]
              cld
nosnow:       mov            di,bx
doagain:      stosw
              loop           doagain
              pop            cx
              dec            cx
              push           cx
              add            bx,160
              jcxz           endit
              jmp            nxtrow
snow:         pop            bx
nxtrow1:      lds            di,cols
              mov            cx,ds:[di]
              cld
              mov            di,bx
              cli
doagain1:     push           ax
waitlo1:      in             al,dx
              shr            al,1
              jc             waitlo1
waithi1:      in             al,dx
              shr            al,1
              jnc            waithi1
              pop            ax
              stosw
              loop           doagain1
              pop            cx
              dec            cx
              push           cx
              add            bx,160
              jcxz           endit
              jmp            nxtrow1
endit:        pop            cx
              pop            es
              pop            ds
              pop            bp
program       ends
              end
```
{% endraw %}

## QPRINT.ASM

{% raw %}
```
                title   QPRINT
                page    60,132

Attr            equ     [bp + 06h]      ; ATTR%
SnoChk          equ     [bp + 0Ah]      ; SNOCHK%
StrDat          equ     [bp + 0Eh]      ; STRDAT$
Column          equ     [bp + 12h]      ; COL%
Row             equ     [bp + 16h]      ; ROW%

program         segment                 ; begin program segment
                assume  cs:program      ; parameters on stack
                push    bp              ; save registers for return
                mov     bp,sp           ; establish addressibility of stack
                push    ds              ; save cause we will manipulate
                push    es              ; ditto
                les     di, StrDat      ; load length address
                mov     cx, es:[di]     ; load length into cx
                and     cx, 7FFFh       ; and off high byte
                jcxz    GetOut          ; quit if empty string
                push    cx
                mov     dx, ds:[0]      ; get the beginning of the string segment from ds:[0]
                push    dx              ; push data segment onto stack
                pop     ds              ; make ds point to string segment
                mov     si, es:[di + 2] ; get offset into string segment from es:[di + 2]
                push    ds              ; save address of string to write to screen
                push    si              ;
Scr_Check:      mov     ah, 15          ; function to get current video state
                int     10h             ; video bios call
                mov     dx, 0B000h      ; assume mono
                push    dx
                pop     es
                mov     dx, 03BAh       ; address of 6845 chip for mono
                cmp     al, 7           ; is it mono?
                jz      Store_Screen    ; it sure is!
                mov     dx, 0B800h      ; no - it must be color
                push    dx
                pop     es
                mov     dx, 03DAh       ; address of 6845 chip for CGA
Store_Screen:   push    es              ; push es onto stack - screen segment
                lds     di, Column      ; get the address of the column
                mov     bx, ds:[di]     ; BX has the column
                dec     bx              ; convert into 0-79
                shl     bx, 1           ; multiply by 2 to accomodate attributes
                lds     si, Row         ; get the address of the line
                mov     ax, ds:[si]     ; get line (1-25)
                dec     ax              ; convert to 0-24
CalcScrnOff:    mov     cl, 05          ; Times 160 bytes per line
                shl     ax, cl          ; First x 32
                mov     cx, ax          ; Temp Hold
                shl     ax, 1
                shl     ax, 1           ; x 128
                add     cx, ax          ; X128 + X32 = X160
                add     bx, cx          ; Add column
                lds     si, Attr        ; get the address of the attribute
                mov     ax, ds:[si]     ; load attribute into ax
                pop     es              ; ditto
                lds     si, SnoChk      ; Snow Check if not 0
                mov     cx, ds:[si]     ; to CX
                jcxz    Snow
                pop     si              ; ditto
                pop     ds              ; ditto
                pop     cx              ; get length back
                mov     di, bx          ; move over to line/column
                cld                     ; Clear direction flags
NoSnow1:        movsb                   ; AX has attribute to spread
                mov     es:[di], al     ; Put attribute
                inc     di
                loop    NoSnow1
GetOut:         jmp     endit
Snow:           pop     si              ; get length back
                pop     ds              ; ditto
                pop     cx              ; ditto
                mov     di, bx          ; move over to line/column
                cld                     ; Clear direction flags
                cli
Snow1:          push    ax
WaitLo1:        in      al, dx          ; get status
                shr     al, 1           ; is it low?
                jc      WaitLo1         ; wait until it is
WaitHi1:        in      al, dx          ; get status
                shr     al, 1           ; is it high?
                jnc     WaitHi1         ; wait until it is
                movsb
WaitLo2:        in      al, dx          ; get status
                shr     al, 1           ; is it low?
                jc      WaitLo2         ; wait until it is
WaitHi2:        in      al, dx          ; get status
                shr     al, 1           ; is it high?
                jnc     WaitHi2         ; wait until it is
                pop     ax
                mov     es:[di], al     ; move attribute byte
                inc     di
                loop    Snow1           ; go until all bytes moved
                sti
Endit:          pop     es              ; pop and restore all the registers
                pop     ds
                pop     bp
program         ends                    ; end program segment
                end

```
{% endraw %}

## QPRINTC.ASM

{% raw %}
```
                title   QPRINTC
                page    60,132

Attr            equ     [bp + 06h]      ; ATTR%
SnoChk          equ     [bp + 0Ah]      ; SNOCHK%
StrDat          equ     [bp + 0Eh]      ; STRDAT$
ColL            equ     [bp + 12h]      ; COLL%
ColR            equ     [bp + 16h]      ; COLR%
Row             equ     [bp + 1Ah]      ; ROW%

program         segment                 ; begin program segment
                assume  cs:program      ; parameters on stack
                push    bp              ; save registers for return
                mov     bp,sp           ; establish addressibility of stack
                push    ds              ; save cause we will manipulate
                push    es              ; ditto
                les     di, StrDat      ; load length address
                mov     cx, es:[di]     ; load length into cx
                and     cx, 7FFFh       ; and off high byte
                jcxz    GetOut          ; quit if empty string
                push    cx
                mov     dx, ds:[0]      ; get the beginning of the string segment from ds:[0]
                push    dx              ; push data segment onto stack
                pop     ds              ; make ds point to string segment
                mov     si, es:[di + 2] ; get offset into string segment from es:[di + 2]
                push    ds              ; save address of string to write to screen
                push    si              ;
Scr_Check:      mov     ah, 15          ; function to get current video state
                int     10h             ; video bios call
                mov     dx, 0B000h      ; assume mono
                push    dx
                pop     es
                mov     dx, 03BAh       ; address of 6845 chip for mono
                cmp     al, 7           ; is it mono?
                jz      Store_Screen    ; it sure is!
                mov     dx, 0B800h      ; no - it must be color
                push    dx
                pop     es
                mov     dx, 03DAh       ; address of 6845 chip for CGA
Store_Screen:   push    es              ; push es onto stack - screen segment
                lds     di, ColL        ; get the address of the left column
                mov     bx, ds:[di]     ; BX has the left column
                lds     di, ColR        ; get the address of the right column
                mov     cx, ds:[di]     ; CX has the left column
                add     bx,cx           ; total them
                lds     di, StrDat      ; point to string data
                mov     cx, ds:[di]     ; get length again
                and     cx, 7FFFh       ; and off high bit
                shr     bx, 1           ; divide by 2
                shr     cx, 1           ;    "   "  "
                sub     bx,cx           ; subtract length of string
                dec     bx              ; convert into 0-79
                shl     bx, 1           ; multiply by 2 to accomodate attributes
                lds     si, Row         ; get the address of the line
                mov     ax, ds:[si]     ; get line (1-25)
                dec     ax              ; convert to 0-24
CalcScrnOff:    mov     cl, 05          ; Times 160 bytes per line
                shl     ax, cl          ; First x 32
                mov     cx, ax          ; Temp Hold
                shl     ax, 1
                shl     ax, 1           ; x 128
                add     cx, ax          ; X128 + X32 = X160
                add     bx, cx          ; Add column
                lds     si, Attr        ; get the address of the attribute
                mov     ax, ds:[si]     ; load attribute into ax
                pop     es              ; ditto
                lds     si, SnoChk      ; Snow Check if not 0
                mov     cx, ds:[si]     ; to CX
                jcxz    Snow
                pop     si              ; ditto
                pop     ds              ; ditto
                pop     cx              ; get length back
                mov     di, bx          ; move over to line/column
                cld                     ; Clear direction flags
NoSnow1:        movsb                   ; AX has attribute to spread
                mov     es:[di], al     ; Put attribute
                inc     di
                loop    NoSnow1
GetOut:         jmp     endit
Snow:           pop     si              ; get length back
                pop     ds              ; ditto
                pop     cx              ; ditto
                mov     di, bx          ; move over to line/column
                cld                     ; Clear direction flags
                cli
Snow1:          push    ax
WaitLo1:        in      al, dx          ; get status
                shr     al, 1           ; is it low?
                jc      WaitLo1         ; wait until it is
WaitHi1:        in      al, dx          ; get status
                shr     al, 1           ; is it high?
                jnc     WaitHi1         ; wait until it is
                movsb
WaitLo2:        in      al, dx          ; get status
                shr     al, 1           ; is it low?
                jc      WaitLo2         ; wait until it is
WaitHi2:        in      al, dx          ; get status
                shr     al, 1           ; is it high?
                jnc     WaitHi2         ; wait until it is
                pop     ax
                mov     es:[di], al     ; move attribute byte
                inc     di
                loop    Snow1           ; go until all bytes moved
                sti
Endit:          pop     es              ; pop and restore all the registers
                pop     ds
                pop     bp
program         ends                    ; end program segment
                end

```
{% endraw %}

## RECOLOR.ASM

{% raw %}
```
              title          RECOLOR
              page           60,132

oldattr       equ            [bp + 0Eh]          ; OLDATTR%
newattr       equ            [bp + 0Ah]          ; NEWATTR%
snochk        equ            [bp + 06h]          ; SNOCHK%

program       segment
              assume         cs:program          ; begin program segment
              push           bp                  ; save for basic
              mov            bp,sp               ; establish stack
              push           es                  ; save for return
              push           ds                  ; save for return
              mov            ax,0040h            ; dos segment
              mov            es,ax               ; to es
              mov            si,0001             ; start on odd for attr
              mov            dx,es:[0063h]       ; point to status reg
              add            dx,06h              ;   "    "    "    "
              mov            ax,0b800h           ; assume color
              mov            bx,es:[0010h]       ; get the byte
              and            bx,30h              ; get ready
              cmp            bx,30h              ; compare it
              jnz            SetScrn             ; yup, it's color
              mov            ah,0b0h             ; nope, change it
SetScrn:      lds            di,oldattr          ; get old attribute
              mov            cx,ds:[di]          ; to CX
              lds            di,newattr          ; get new attribute
              mov            bx,ds:[di]          ; to BX
              mov            bh,cl               ; put old in BH,new in BL
              lds            di,SnoChk           ; point to SNOCHK%
              mov            cx,ds:[di]          ; get it
              jcxz           Snow                ; do Snow checking
              mov            ds,ax               ; point to screen
              mov            cx,07d0h            ; do whole screen
              mov            di,0002             ; use for increment
              cld                                ; clear direction flags
ChngColor:    mov            al,[si]             ; get screen attribute
              cmp            al,bh               ; compare it
              jnz            ColorOK             ; don't bother changing
              mov            [si],bl             ; put the new attribute
ColorOK:      add            si,di               ; increment screen pointer
              loop           ChngColor           ; do until CX=0
              jmp            endit               ; done
Snow:         mov            ds,ax               ; point to screen
              mov            cx,07d0h            ; do whole screen
              mov            di,0002             ; use for increment
              cld                                ; clear direction flags
ChngColor1:   cli                                ; disable interrupts
WaitLo1:      in             al,dx               ; get status
              shr            al,1                ; is it low?
              jc             WaitLo1             ; wait until it is
WaitHi1:      in             al,dx               ; get status
              shr            al,1                ; is it high?
              jnc            WaitHi1             ; wait until it is
              mov            al,[si]             ; get screen attribute
              cmp            al,bh               ; compare it
              jnz            ColorOK1            ; don't bother changing
WaitLo2:      in             al,dx               ; get status
              shr            al,1                ; is it low?
              jc             WaitLo2             ; wait until it is
WaitHi2:      in             al,dx               ; get status
              shr            al,1                ; is it high?
              jnc            WaitHi2             ; wait until it is
              mov            [si],bl             ; put the new attribute
ColorOK1:     sti                                ; enable interrupts
              add            si,di               ; increment screen pointer
              loop           ChngColor1          ; do it until CX=0
endit:        pop            ds                  ; restore DS
              pop            es                  ; restore ES
              pop            bp                  ; back to basic
program       ends
              end


```
{% endraw %}

## RESTSCRN.ASM

{% raw %}
```
          title     RESTSCRN
          page      60,132

varray    equ       [bp + 06h]          ; VARPTR(ARRAY)
snochk    equ       [bp + 0Ah]          ; SNOCHK%

program   segment
          assume    cs:program
          push      bp
          mov       bp,sp
          push      es
          push      ds                  ;save for basic
          xor       ax,ax
          mov       es,ax               ;segment 0000h
          mov       dx,es:0463h         ;point to 6845
          add       dx,6                ;point to status reg
          mov       di,0410h            ;equipment flag
          mov       ax,0b800h           ;assume color monitor
          mov       bx,es:[di]          ;get the byte
          and       bx,30h              ;
          cmp       bx,30h              ;is it color
          jne       ok                  ;yup
          mov       ax,0b000h           ;nope - so change it

ok:       mov       ds,ax               ;point to screen
          les       di,snochk           ;pointer to test byte
          mov       ax,es:[di]
          push      ax                  ;save it for later
          les       di,varray           ;point to array
          mov       cx,2000             ;no. of times
          push      es                  ;
          push      ds                  ;swap since we are moving
          pop       es                  ;data from array to screen
          pop       ds                  ;
          xor       si,si               ;zero out si
          xchg      si,di               ;exchange them too
          pop       ax                  ;get test byte
          cmp       ax,1                ;is it a one
          jz        go                  ;yes - don't test for snow
          mov       bx,es
          cmp       bx,0b000h           ;check dest. if mono
          jz        go                  ;if it is don't test
snow:     cli                           ;disable interrupts
WaitLo:   in        al,dx               ;test retrace
          shr       al,1                ;wait for low
          jc        WaitLo
WaitHi:   in        al,dx               ;wait for high
          shr       al,1
          jnc       WaitHi
          movsw                         ;ok to move now
          loop      WaitLo              ;do it 2000 times
          sti                           ;enable interrupts
          jmp       short done
go:       movsw
          loop      go
done:     pop       ds
          pop       es
          pop       bp                  ;back to basic
program   ends
          end
```
{% endraw %}

## SAVESCRN.ASM

{% raw %}
```
          title     SAVESCRN
          page      60,132

varray    equ       [bp + 06h]          ; VARPTR(ARRAY)
snochk    equ       [bp + 0Ah]          ; SNOCHK%

program   segment
          assume    cs:program
          push      bp
          mov       bp,sp
          push      ds                  ;save for basic
          xor       ax,ax
          mov       es,ax               ;segment 0000h
          mov       dx,es:0463h         ;point to 6845
          add       dx,6                ;point to status reg
          mov       di,0410h            ;equipment flag
          mov       ax,0b800h           ;assume color monitor
          mov       bx,es:[di]          ;get the byte
          and       bx,30h
          cmp       bx,30h              ;is it color
          jne       ok                  ;yup
          mov       ax,0b000h           ;nope - so change it
ok:       mov       ds,ax               ;
          xor       si,si               ;point to screen with ds:si
          les       di,snochk           ;pointer to test byte
          mov       ax,es:[di]
          les       di,varray           ;point to array with es:di
          mov       cx,2000
          cmp       ax,1                ;is it a one
          jz        go                  ;yes - don't test for snow
          mov       bx,ds
          cmp       bx,0b000h           ;check source if mono
          jz        go                  ;if it is don't test
snow:     cli                           ;disable interrupts
WaitLo:   in        al,dx               ;test retrace
          shr       al,1                ;wait for low
          jc        WaitLo
WaitHi:   in        al,dx               ;wait for high
          shr       al,1
          jnc       WaitHi
          movsw                         ;ok to move now
          loop      WaitLo              ;do it 2000 times
          sti                           ;enable interrupts
          jmp       short done
go:       movsw
          loop      go
done:     pop       ds
          pop       bp                  ;back to basic
program   ends
          end
```
{% endraw %}

## SCROLL.ASM

{% raw %}
```
              title     SCROLL
              page      60,132

dir           equ       [bp + 06h]          ; DIR%
lines         equ       [bp + 0Ah]          ; LINES%
rtcol         equ       [bp + 0Eh]          ; RTCOL%
botrow        equ       [bp + 12h]          ; BOTROW%
leftcol       equ       [bp + 16h]          ; LEFTCOL%
toprow        equ       [bp + 1Ah]          ; TOPROW%

program       segment                       ; begin program segment
              assume    cs:program          ; parameters on stack
              push      bp                  ; save for basic
              mov       bp,sp               ; establish stack
              push      es                  ; save for return
              push      bp                  ; save for later
              mov       ah,0Fh              ; dos function
              int       10h                 ; get current video mode
              pop       bp                  ; restore bp
              les       di,leftcol          ; get pointer to left column
              mov       dl,es:[di]          ; get lsb only to dl
              dec       dx                  ; dec for 0-79 format
              les       di,toprow           ; get pointer to top row
              mov       dh,es:[di]          ; get lsb only to dh
              dec       dh                  ; dec for 0-24 format
              push      bp                  ; save for later
              push      dx                  ; save for later
              push      bx                  ; save for later
              mov       ah,02h              ; dos function
              int       10h                 ; set cursor to inside area
              pop       bx                  ; restore bx
              mov       ah,08h              ; dos function
              int       10h                 ; get attribute
              pop       cx                  ; ch=toprow cl=leftcol was dx
              pop       bp                  ; restore bp
              les       di,rtcol            ; get pointer to right column
              mov       dl,es:[di]          ; get lsb only to dl
              dec       dx                  ; dec for 0-79 format
              les       di,botrow           ; get pointer to botrow
              mov       dh,es:[di]          ; get lsb only to dh
              dec       dh                  ; dec for 0-24 format
              les       di,lines            ; get pointer to lines
              mov       al,es:[di]          ; get lsb only to al
              mov       bh,ah               ; mov attribute to bh
              les       di,dir              ; get pointer to direction
              mov       ah,es:[di]          ; put in ah
              int       10h                 ; finally scroll
              pop       es                  ; restore es
              pop       bp                  ; back to basic
program       ends
              end

```
{% endraw %}

## TBWIND20.DOC

{% raw %}
```




                                                         June 6, 1987



                                     TBWINDO
                               MULTI-LEVEL WINDOWS
                             FOR BORLANDS TURBO BASIC
                                   Version 2.0

        PURPOSE:

        This utility creates incredibly quick multi-level windows
        in Turbo Basic programs for IBM PC/XT/AT compatibles.


        TEST DRIVE:

        Compile and run the tutoring program DEMO20.BAS to get a feeling
        for features and speed.


        FILES:

        In this version, TBWINDO.ARC contains:
            TBWINDO.INC  - Turbo Basic include file
            QPRINT.BIN   - Quick print inline subroutine
            QPRINTC.BIN  - Quick print between columns
            QATTR.BIN    - Re-attribute an area of the screen
            QFILL.BIN    - Fill an area of the screen with a
                           specified character and attribute
            SAVESCRN.BIN - Save screen inline subroutine
            RESTSCRN.BIN - Restore screen inline subroutine
            SCROLL.BIN   - Scroll inline subroutine
            CALCATTR.BIN - Calculate Attribute inline subroutine
            RECOLOR.BIN  - Screen area recoloring inline subroutine
            DEMO20.BAS   - Demonstration program source code
            TBWIND20.DOC - This document file.

            Assembly language source code for all BIN files is included
            for all those interested.  Any suggestion for improvements to
            the code would be appreciated, as I do not profess to be good
            at Assembly Language.

        USING TBWINDO

        Include the TBWINDO.INC program in your program with
        the following statement:

        $INCLUDE "TBWINDO.INC"

        Dimension the array for screen saves(see below).

        Set the SNOCHK% variable (see below).

        You invoke the routines by means of a CALL with a list of
        parameters, rather than a GOSUB.








        Using the MAKEWINDOW procedure:

        CALL MAKEWINDOW(ROW%,COL%,ROWS%,COLS%,ATTR%,BRDRSEL%,SHADOW%,ZOOM%)

        Where: ROW - the screen row of the upper left hand corner of your
                     desired window.  Value should be between 2 and 23
                     (for reasons explained below).  WARNING - the subroutines
                     doe not check for proper values. You must check these
                     yourself or accept the consequences.

               COL - the screen column of the upper left hand corner. Value
                     should be between 2 and 79.

              ROWS - the number of rows long the window should be.

              COLS - the number of columns wide the window should be.

              ATTR - the attribute of the window colors.

           BRDRSEL - the border you desire around the window.  Valid
                     selections in this release are:

                        0 - No Frame (just a border of BACKground
                            color.
                        1 - Single Line Frame
                        2 - Double Line Frame
                        3 - Single Horizontal Line, Double Vertical
                            Line Frame
                        4 - Single Vertical Line, Double Horizontal
                            Line Frame

            SHADOW - Another "switch" to indicate if the window should
                     have a black "shadow" under it offset down and to
                     the left. This gives a three-dimensional effect
                     that seems to "raise" the window away from the
                     screen. A value of 1 indicates a shadow is desired
                     while a value of 0 means no shadow.

              ZOOM - A "switch" used to indicate to the subroutine if
                     the window should "grow" from a small box at the
                     midpoints of the coordinates to full size. A value
                     of 1 indicates the window should grow. A value of
                     0 indicates it should not.























        using the TITLEWINDOW procedure:

        CALL TITLEWINDOW(LOC%,TITLE$)

        Where: LOC - Indicates where the title should be placed.  Valid
                     selections are:

                        1 - Top left hand corner
                        2 - Top center
                        3 - Top right hand corner
                        4 - Lower left hand corner
                        5 - Lower center
                        6 - Lower right hand corner

             TITLE - The string data you would like printed.

                     NOTE:  The TITLEWINDOW procedure uses the coordinates
                            from the most recent use of MAKEWINDOW.  Use this
                            procedure only after a call has been made to
                            MAKEWINDOW.

        Using the FNATTR% function:

        FNATTR%(FORE%,BACK%)

        Where: FORE - is the foreground color.  Any Turbo Basic color
                      number is valid.

               BACK - is the backgound color.  Any Turbo Basic background
                      color number is valid.

               FNATTR% returns the attribute of the colors specified.


        Using the SAVESCRN procedure:

        First you must  define  an  integer array  with  a  dimension
        of 2000 (allowing for 4000 bytes)  for each screen you store, early
        in the program.  If you plan on saving screens three deep then the
        array must be 6000.

        When making the call to SAVESCRN, you  must  pass the location of
        this array as follows:
                   10 DIM SCRDATA%(2000)
                   .
                   80 SNOCHK%=0:'Test retrace (1 will not test retrace)
                   90 FIRST%=VARPTR(SCRDATA%(0))
                  100 CALL SAVESCRN(SNOCHK%,FIRST%)
        Also,  since  the  SAVESCRN operation 'loses' the position of the
        cursor, you should preserve it prior to making the  call  if  you
        need it as follows:
                   90 OLDX=CSRLIN:OLDY=POS(0)
        The RESTSCRN procedure is used in exactly the same way:
                  200 CALL RESTSCRN(SNOCHK%,FIRST%)
        and  if  necessary,  the cursor position can be restored by using
        the following statement:
                  210 LOCATE OLDX,OLDY









        Using the CALCATTR procedure:

        CALL CALCATTR(FORE%,BACK%,ATTR%)

        Where: FORE - Is the foreground color. Valid numbers are 0-31.

               BACK - Is the background color. Valid numbers are 0-7.

               ATTR - The attribute is returned in this variable.

                   CALL CALCATTR(15,1,ATTR%)
                   Y% = ATTR%

        Using the RECOLOR procedure:

        CALL RECOLOR(OLDATTR%,NEWATTR%,SNOCHK%)

        Where: OLDATTR - Is the attribute of the areas on the screen
                         you wish to change.

               NEWATTR - Is the attribute of the color you want.

               SNOCHK  - Snow checking switch.

                    X% = SCREEN(1,1,1)  ' RETURNS CURRENT SCREEN ATTRIBUTE
                    CALL CALCATTR(14,4,ATTR%) ' CALCULATE NEW ATTRIBUTE
                    CALL RECOLOR(X%,ATTR%,SNOCHK%)

                    This will recolor everything on the screen that has
                    the same attribute a the upper left corner of the screen
                    to a foreground of 14 and a background of 4.


        All of the above variables (with the exception  of  TITLE$)  must
        either  be  declared  globally  as  integers by means of a DEFINT
        statement early  in  the  program;  or  must  have  the  specific
        integer  identifier  (%)  attached  wherever  they  appear in the
        program. The BASIC compiler is picky about this; so  be  sure  to
        verify that the type assignment is correct.

        TBWINDO  requires  no special handling when it comes to compiling
        your program. Just  make  certain  that  all  of  your  variables
        passing  parameters  to  the TBWINDO subroutine are identified as
        integers, and you will  be  able  to  proceed  with  the  compile
        operation as with any other program.


        ACKNOWLEDGEMENTS

        I would like to express my thanks to Dave Evers (BASWIN22),
        Tom Hanlin (ADVBAS33) and Jim LeMay (WINDOW33).  The routines
        presented are patterned after routines that were written by
        them for MicroSoft Quick Basic and Borland Turbo Pascal.

        Rick Fothergill
        141 Oak Hill Road
        Pittsfield, MA 01201
        (413) 442-2456

        GEnie Address: R.FOTHERGILL
           Compuserve: 76210,443







                             TBWINDO QUICK REFERENCE


        MakeWindow(Row%,Col%,Rows%,Cols%,Attr%,BrdrSel%,Shadow%,Zoom%)

        TitleWindow(Loc%,Title$)

        FNAttr%(Fore%,Back%)

        SaveScrn(SnoChk%,VarPtr(Scrn%(??)))

        RestScrn(SnoChk%,VarPtr(Scrn%(??)))

        ReColor(OldAttr%,NewAttr%,SnoChk%)

        CalcAttr(Fore%,Back%,Attr%)

        Scroll(ULRow%,ULCol%,LRRow%,LRCol%,Rows%,Dir%)

        Qprint(Row%,Col%,StrDat$,SnoChk%,Attr%)

        QprintC(Row%,ColLeft%,ColRight%,StrDat$,SnoChk%,Attr%)

        QFill(Row%,Col%,Rows%,Cols%,Char%,SnoChk%,Attr%)

        QAttr(Row%,Col%,Rows%,Cols%,SnoChk%,Attr%)

        QBox(Row%,Col%,Rows%,Cols%,Attr%,BrdrSel%)
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0906

     Volume in drive A has no label
     Directory of A:\

    99       DIR     11870   8-09-87   2:50a
    FACE     COM      3840   8-09-87   2:49a
    PKFIND11 EXE     20480   8-08-87   9:42p
    TCSEARCH ARC      2176   8-08-87   9:38p
    TC-EQUIP ARC      5632   8-08-87   9:36p
    PRNTSCR- ARC      4352   8-08-87   9:18p
    MYMUNP   ARC     11136   8-07-87   3:24p
    PCKWKPAT ARC      1408   8-06-87  11:47p
    MIRRORDD ARC     12672   8-06-87  10:21p
    CORDFORM ARC      5120   8-06-87   4:33p
    DR       ARC      3328   8-06-87  12:16p
    QUICKCHA ARC      3200   8-06-87  10:37a
    SLEEVE2  ARC      6144   8-05-87   6:47p
    NEWDEX   ARC     30848   8-05-87   5:20p
    TYPEHEAD ARC       768   8-05-87   3:43p
    SLEEVE1  ARC      5632   8-03-87   8:09p
    CM2PTCH  ARC      2048   8-03-87   4:19a
    MYMENU   ARC     34944   7-29-87   1:06p
    DBRELATE ARC      4224   7-29-87  10:20a
    TBWINDOW ARC     61184   7-28-87   6:27p
    DC1      ARC      4224   6-28-87   2:26p
    LINE26   COM      1964  11-11-86  12:00p
    LINE26   DOC      4913  11-11-86  12:00p
    LOCKIT   COM       743  12-11-86  12:00p
    LOCKIT   DOC      3446  12-11-86  12:00p
    FILES906 TXT      2567  12-08-87   1:36p
    PKXARC   COM     11482  12-15-86
    GO       BAT        38  10-19-87   3:56p
    GO       TXT       771  12-07-87   2:27p
           29 file(s)     261154 bytes
                           47104 bytes free
