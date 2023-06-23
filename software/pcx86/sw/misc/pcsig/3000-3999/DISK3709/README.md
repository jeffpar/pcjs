---
layout: page
title: "PC-SIG Diskette Library (Disk #3709)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3709/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3709"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## CDROM.TXT

{% raw %}
```
        T h e  P C - S I G  L i b r a r y  o n  C D - R O M


++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

This may well be the greatest collection of software ever compiled.

The PC-SIG Library on CD-ROM is our premier collection of the entire
PC-SIG library.  Every shareware program we have is on one disc; over
900 megabytes of software you can have immediate access to.

Easy to use, all you have to do is insert the disc and type 'INSTALL' at
the DOS prompt.  We've included all the tools you need for fast easy
access to the programs and their descriptions.

The WordCruncher text retrieval software allows you to quickly access
the description for any program you want.  All the programs are indexed
by title, filename, PC-SIG disk number, and every word within the
program description.  There couldn't be an easier way to find just the
right program.  All the programs are logically divided into thirteen
major categories with subcategories, making it easier to find just the
right software.

All of the programs have been scanned for viruses.  There are also three
online virus utilities that can be run from the CD-ROM which will scan,
screen and clean viruses.  Not only does this save hard disk space, but
also gives every user added security from viruses.

Whether you're interested in Accounting or Windows, there's a shareware
program for you on the PC-SIG Library on CD-ROM.

Winner of the Optical Publishing Assn's Best Consumer Product Award.

Shareware for every imaginable need: Accounting Chemistry Educational
Engineering Games Hypertext Networks Programming Spreadsheets Utilities
Word Processing

Additional BBS file descriptions are available from PC-SIG so that the
CD-ROM can be set up quickly on a bulletin board.

System Requirements:

IBM PC/XT/AT PS/2 or compatible with 530K memory DOS 3.1 or higher and
a graphics monitor (Hercules/EGA/VGA/SVGA).  A mouse is optional.





T h e E s s e n t i a l H o m e & B u s i n e s s C o l l e c t i o n
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

"Never before has such a valuable collection of popular shareware been
compiled on one CD-ROM that everyone can afford." Dr. File Finder a.k.a.
Michael Callahan

Finally, 368 of the most useful, popular, important shareware programs
have been put together on one CD. No matter what your need, it's on The
Essential Home & Business Collection.  Everything from Administration to
Windows software is here.

The Essential CD incorporates the WordCruncher text retrieval system.
Every program on the disc is indexed by title, filename, PC-SIG disk
number, and every word in the program description.  A new utility, Narc,
is implemented so you can look at the program files and the author's
on-line documentation without having to first copy the program to your
hard disk.  By using WordCruncher and Narc, you can quickly find the
program you want and review it to be sure, without ever having to run it
from your hard disk.

If you've got a CD-ROM player at home and want to get more use of it and
your computer, or if you're trying to avoid purchasing another Nintendo
cartridge, or if you just enjoy looking at new software, you need The
Essential Home & Business Collection.

System Requirements:

IBM PC/XT/AT PS/2 or compatible with 384K memory DOS 3.1 or higher and
Microsoft MS-DOS CD ROM extensions.


                      The PC-SIG Games CD-ROM
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Now you can play a game a day fo over a year.  This CD-ROM is jammed
with over 380 shareware games of all types, designed to appeal to the
new generation of CD-ROM users out for fun.  The CD incorporates a
hypermedia interface and allows 250 of the games to be played directly
from the CD-ROM.

The hottest games in shareware are on this disk, including the
action/arcade games "Jill of the Jungle" and "Wolfenstein 3D," which
rival or surpass commercial PC and Nintendo for use of animation,
SoundBlaster audio, and VGA graphics.  There are also games designed to
teach children mathematics, spelling and even ecology.  All these games
for less than a dime each!

Over 250 of the games can be played directly from the CD without copying
them to a floppy or a hard drive.  Being able to run from the CD means
that users can explore games without using up valuable hard disk space
or spending time downloading and deleting files.  The hypermedia
interface makes it easy to browse the titles, read a one line
description or full review, and copy or start a game by clicking the
mouse or using the keyboard.


To Order in the U.S.A.: Call 800-245-6717 and ask for Customer Service.

Outside the U.S.A. call (408) 730-9291 for the name of the dealer in
your country.
```
{% endraw %}

## INSTALL.TXT

{% raw %}
```
WINWHEEL INSTALL.DOC
Installation Instructions
     WINWHEEL is provided in archived form.  You must unarchive the
files to your hard drive.  The INSTALL program will unarchive files
where necessary.
     Since WINWHEEL is a Windows application, it is installed similar to
other Windows application.  You may wish to review the procedure by
referring to your Windows User's Guide, pp.87-96.
The included INSTALL.BAT program must be used to copy the program files to
your hard drive.  The syntax used is "INSTALL C:".  A subdirectory called
WINWHEEL will be created on the C: drive and the game files will be copied
into it.  Alternately, you may install the program manually using the
instructions below.  With either installation method and Windows 3.0,
it is necessary for the user to copy the SOUND.DRV file as explained below!

Install WINWHEEL by first making a directory on your hard drive called
WINWHEEL.
          MD C:\WINWHEEL
     You may choose a different hard drive other than the C: drive if you wish.
Then copy the following files into this directory.  You must have already
unzipped the distribution file into another directory onto your hard drive.

The files are:

CHAMP.DAT       Data for Top Ten Wheelers
EDITWHEE.EXE    Data Editor for WINWHEEL.DAT
EDITWHEE.PIF    PIF file for data editor.  Must be edited for path
SPIN.DAT        Data For Money Values on Wheel
VBRUN100.DLL*   The Run-Time Module
                for Visual Basic Applications.
VBTOOLS.VBX     VBTOOLS Run-Time Module
                for Visual BASIC Applications
WINWHEEL.DAT    Data File of Puzzles
WINWHEEL.DOC    Information file on WINWHEEL
                and the Shareware Concept
WINWHEEL.EXE    The WINWHEEL executable file

     There is a bug in the SOUND.DRV file that comes with Windows V.3.0.
The bug causes all sounds to be played slowly, ignoring any tempo commands in
programs.  A replacement file is provided here which must be copied to your
\WINDOWS\SYSTEM subdirectory in order for the sounds to work properly.  This
file is provided by Micro Help Inc.  If you have previously been using
the shareware version 1.20 of WINWHEEL, then you should already have received
the new SOUND.DRV file and copied it to the \WINDOWS\SYSTEM subdirectory.
If you have Windows 3.1, DO NOT copy the SOUND.DRV file!
     You must choose into which program group you wish to install WINWHEEL. You
may create a program group by selecting Files, New, Group in Program Manager.
You may have already created a GAMES group for all of your games. Select this
group by clicking on it with your mouse.  Now in the PROGRAM MANAGER, Select
File, NEW, Program Item, OK. Type in WINWHEEL for the Description; and for
the Command Line, type in the path and file name, including the drive, where
the WINWHEEL files reside. Now select OK. (i.e. C:\WINWHEEL\WINWHEEL.EXE).
     Run the PIF editor in Windows and load the WINWHEE.PIF file.  Change the
path to the path where you have placed the WINWHEEL files.  Save the file and
quit the PIF editor.
     To run WINWHEEL, just double-click the mouse on the WINWHEEL icon, and
enjoy.

Note that WINWHEEL is Shareware and not freeware.  If you continue to
use WINWHEEL then you are obligated to register it. Registration
information is contained in the menu within the game.  If you have already
registered, then the author Thanks You for supporting the shareware concept of
software distribution.

*Note about VBRUN100.DLL. This is the run-time dynamic link library
 required by programs written with Microsoft Visual Basic.  If you have
 other programs written in this language, you will save disk space by
 moving this file into your Windows directory, since only one copy of
 this file is required, and the Windows subdirectory is in the path
 statement of your AUTOEXEC.BAT file. The file VBTOOLS.VBX is another
 run-time module which may be used by other Visual Basic programs, and
 may also be moved to your Windows subdirectory.  If you acquired WINWHEEL
 from an electronic Bulletin Board, a Shareware disk vendor, or from
 Compuserve, and did not get the VBRUN100.DLL file, then you must get it in
 order for WINWHEEL to run. On Compuserve, GO MSBASIC and download the file
 VBRUN.ZIP from library 5. Or contact your disk vendor for the file. Or you
 may request it from the author at the registration address. Include $2.00
 for shipping and handling.
```
{% endraw %}

## PCSIG.TXT

{% raw %}
```


                            P C  -  S I G





++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Welcome to the world of Shareware, state of the art software you can
actually try before you buy.

Shareware, a term coined in the early eighties, refers to the method of
distribution chosen by the software authors.  With shareware, you can
receive a program and put it through its paces without having to pay for
it. If you find the program useful, and choose to keep the program, then
you pay a modest registration fee to the author.

For the last nine years, PC-SIG has been providing shareware and public
domain software to its customers and members.  Since 1982 PC-SIG has
developed an unprecedented library of shareware programs, constantly
updated, consistently strong in every category.  Our library of
shareware contains over 3500 titles divided into 120 logical categories.

Every program we add to the library is thoroughly reviewed and tested to
insure that each one meets the high standards of reliability and value we
insist upon and you expect.  As a result, our library doesn't contain
every shareware program available, just those that really work.

PC-SIG has grown into the premier distributor of shareware and and
shareware information by producing shareware collections on CD-ROM,
publishing an encyclopedia of shareware, and by publishing Shareware
Magazine, a bi-monthly magazine distributed world-wide.

Quality and support - guaranteed.  All of our programs are guaranteed
virus free.  We've isolated our systems and check every program
submitted to insure that no viruses make their way to your computer or
ours.

Our support staff is available by phone as well as on our BBS to help
you with questions about installation and operation of PC-SIG's
products.

Through our network of international distributors, PC- SIG strives to
bring you the most current, exciting, technically advanced software
available as shareware.

If you can't find the software you need in PC-SIG's library, it may well
not exist.

To order the latest in Shareware, in the U.S.A: Call (800) 245-6717

Outside the U.S.A. call (408) 730-9291 for the name of the dealer in
your country.

++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
```
{% endraw %}

## SHAREMAG.TXT

{% raw %}
```
              S H A R E W A R E  M A G A Z I N E
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Shareware Magazine has distinguished itself as the only internationally
distributed periodical devoted to the use and business of shareware.
Shareware Magazine provides detailed reviews of new products,
hard-hitting comparisons of shareware programs with regular retail
software, and timely information about changes in the industry and the
latest technology.

Intriguing columnists and regular features add to the excitement.  The
beginners section sheds light on new user's concerns regarding
everything from choosing the right operating system to alleviating the
intimidation of using on-line systems.

Educational sections focus on how low cost shareware can aid in
classroom learning, curriculum development, and as a forum for
discussing the impact of computers and technology in schools.

Graphics Gallery renders expert advice and suggestions on how to better
work with graphics, desktop publishing, CAD systems, and the Windows
environment.

Programmers benefit from others experience in developing new programs or
polishing existing ones as well as choosing the right programming
language.

And columnists provide that subjective component, sometimes
controversial, that calls for a closer look at the way we compute and
how shareware effects what we do.

Published bimonthly, Shareware Magazine is available on a subscription
or at your local newsstand or computer bookstore.  In conjunction with
PC-SIG, there are special benefits for subscribers as well as
opportunities for discount purchases from PC-SIG.


To Order, in the U.S.A.: Call 800-245-6717 and ask Customer Service.

Outside the U.S.A. call (408) 730-9291 for the name of the dealer in
your country.
```
{% endraw %}

## SIGORDER.TXT

{% raw %}
```
                                      [B]

FROM:  ___________________________

       ___________________________

       ___________________________
[A]                                                                         [B]
       ___________________________


                                  PC-SIG Inc.
[A]                                                                         [B]
                            1030-D East Duane Avenue

                               Sunnyvale  California

                                     94086


























Fold - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - Fold

       HOW TO USE THIS RETURN ENVELOPE

       1.  Place any other pages underneath this page.
       2.  Using the Fold lines (above) as a guide, fold this flap under.
       3.  Fold the address flap so it covers this flap.
       4.  Tape or staple the envelope at the two spots marked [A].
       5.  Slip in any other enclosures (business cards, cheques, etc.).
       6.  Tape or staple the envelope at the spots marked [B].














THANKS FOR TAKING THE TIME TO PRINT THIS FORM -*- MAIL YOUR ORDER TO:
PC-SIG Inc. 1030-D East Duane Avenue Sunnyvale CA 94086






---------------------------------------------------------------------

     Do not mail cash.   Please allow four weeks for processing.

---------------------------------------------------------------------




Check the items desired:

PC-SIG Disks - Member $2.49 for 5.25" or $2.99 for 3.5"
           Non-member $3.50 for 5.25" or $4.00 for 3.5"

_____  _____  _____  _____  _____  _____  _____  _____  _____

_____  _____  _____  _____  _____  _____  _____  _____  _____

_____  _____  _____  _____  _____  _____  _____  _____  total  ______

One year subscription to Shareware Magazine            $14.95  ______

Super Saver Membership                                 $34.95  ______
(includes a 1 year subscription to Shareware Magazine,
 the PC-SIG Encyclopedia on Disk with WordCruncher,
 and 5 free disks)

The PC-SIG Catalog on Disk                              $7.00  ______

The PC-SIG Encyclopedia on Disk with WordCruncher      $20.00  ______

GAMES CD Amazing Disk - Amazing Price!                 $25.00  ______

*** PC-SIG Library on CD-ROM 12th Edition  ***         $99.00  ______

Upgrade to the 12th Edition from ANY previous edition
of the PC-SIG Library on CD-ROM!                       $59.00  ______

Upgrade from ANY other shareware CD-ROM just           $59.00  ______

                                                    Subtotal   ______

Shipping and Handling                                          $4.00

                    California residents add 8.25% sales tax   ______

                                                       TOTAL   ______



      If you have any comments or suggestions, please let us know!

To order by phone with VISA or MASTERCARD call (800)245-6717
Ask for operator #2351
```
{% endraw %}

## DESCRIBE.DOC

{% raw %}
```
WINWHEEL is a shareware "Wheel of Fortune"/hangman type word game
for IBM compatible computers requiring VGA, mouse, and Microsoft Windows.
The game features: a colorful wheel, 1-3 players, 5 rounds of play, a sound
on/off toggle option, automatic win after all the letters have been bought
and guessed, a high score table for the top ten WHEELERS, and a data editor
to add/delete/modify puzzles.   Registered owners ($19 U.S. funds) receive
the author's database of over 11,900 puzzles. The author is a member of the
Association of Shareware Professionals.
```
{% endraw %}

## HISTORY.DOC

{% raw %}
```
V.1.00  (06/09/91)
    1) Initial release on Compuserve only.
V.1.10  (06/15/91)
    1) Fixed bug in high-score table. Wasn't sorting properly.
V.1.10a (06/21/91)
    1) Added radio buttons at edge of wheel segments for added effect.
V.1.20  (07/24/91)
    1) Sound support added using VBTOOLS.
    2) Wheel slows down as it spins.
    3) Longer spins.
V.1.30  (03/02/92)
    1) Sound Stopped after pressing OK when viewing Top Ten Wheelers.
    2) Sound stopped after pressing WINWHEEL button at center of Wheel
       preventing run-on from previous actions.
    3) Changed random number selection of next puzzle to try and prevent
       duplicate puzzles.
    4) Fixed 'slash' character next to radio buttons on Wheel.
    5) Fixed WINWHEEL not being released fully from memory.
V.1.40 (03/15/92)
    1) Fixed Use Free Spin after Lose Turn and Bankrupt.
    2) Disable Spin button after Lose Turn or Bankrupt.  It was possible
       to click fast and spin the wheel before the dialog box appeared.
    3) Cleared Free Spins after completing game and starting new game.
    4) Added Data Editor

```
{% endraw %}

## INSTALL.DOC

{% raw %}
```
WINWHEEL INSTALL.DOC
Installation Instructions
     WINWHEEL is provided in archived form.  You must unarchive the
files to your hard drive.  The INSTALL program will unarchive files
where necessary.
     Since WINWHEEL is a Windows application, it is installed similar to
other Windows application.  You may wish to review the procedure by
referring to your Windows User's Guide, pp.87-96.
The included INSTALL.BAT program must be used to copy the program files to
your hard drive.  The syntax used is "INSTALL C:".  A subdirectory called
WINWHEEL will be created on the C: drive and the game files will be copied
into it.  Alternately, you may install the program manually using the
instructions below.  With either installation method and Windows 3.0,
it is necessary for the user to copy the SOUND.DRV file as explained below!

Install WINWHEEL by first making a directory on your hard drive called
WINWHEEL.
          MD C:\WINWHEEL
     You may choose a different hard drive other than the C: drive if you wish.
Then copy the following files into this directory.  You must have already
unzipped the distribution file into another directory onto your hard drive.

The files are:

CHAMP.DAT       Data for Top Ten Wheelers
EDITWHEE.EXE    Data Editor for WINWHEEL.DAT
EDITWHEE.PIF    PIF file for data editor.  Must be edited for path
SPIN.DAT        Data For Money Values on Wheel
VBRUN100.DLL*   The Run-Time Module
                for Visual Basic Applications.
VBTOOLS.VBX     VBTOOLS Run-Time Module
                for Visual BASIC Applications
WINWHEEL.DAT    Data File of Puzzles
WINWHEEL.DOC    Information file on WINWHEEL
                and the Shareware Concept
WINWHEEL.EXE    The WINWHEEL executable file

     There is a bug in the SOUND.DRV file that comes with Windows V.3.0.
The bug causes all sounds to be played slowly, ignoring any tempo commands in
programs.  A replacement file is provided here which must be copied to your
\WINDOWS\SYSTEM subdirectory in order for the sounds to work properly.  This
file is provided by Micro Help Inc.  If you have previously been using
the shareware version 1.20 of WINWHEEL, then you should already have received
the new SOUND.DRV file and copied it to the \WINDOWS\SYSTEM subdirectory.
If you have Windows 3.1, DO NOT copy the SOUND.DRV file!
     You must choose into which program group you wish to install WINWHEEL. You
may create a program group by selecting Files, New, Group in Program Manager.
You may have already created a GAMES group for all of your games. Select this
group by clicking on it with your mouse.  Now in the PROGRAM MANAGER, Select
File, NEW, Program Item, OK. Type in WINWHEEL for the Description; and for
the Command Line, type in the path and file name, including the drive, where
the WINWHEEL files reside. Now select OK. (i.e. C:\WINWHEEL\WINWHEEL.EXE).
     Run the PIF editor in Windows and load the WINWHEE.PIF file.  Change the
path to the path where you have placed the WINWHEEL files.  Save the file and
quit the PIF editor.
     To run WINWHEEL, just double-click the mouse on the WINWHEEL icon, and
enjoy.

Note that WINWHEEL is Shareware and not freeware.  If you continue to
use WINWHEEL then you are obligated to register it. Registration
information is contained in the menu within the game.  If you have already
registered, then the author Thanks You for supporting the shareware concept of
software distribution.

*Note about VBRUN100.DLL. This is the run-time dynamic link library
 required by programs written with Microsoft Visual Basic.  If you have
 other programs written in this language, you will save disk space by
 moving this file into your Windows directory, since only one copy of
 this file is required, and the Windows subdirectory is in the path
 statement of your AUTOEXEC.BAT file. The file VBTOOLS.VBX is another
 run-time module which may be used by other Visual Basic programs, and
 may also be moved to your Windows subdirectory.  If you acquired WINWHEEL
 from an electronic Bulletin Board, a Shareware disk vendor, or from
 Compuserve, and did not get the VBRUN100.DLL file, then you must get it in
 order for WINWHEEL to run. On Compuserve, GO MSBASIC and download the file
 VBRUN.ZIP from library 5. Or contact your disk vendor for the file. Or you
 may request it from the author at the registration address. Include $2.00
 for shipping and handling.

```
{% endraw %}

## SOUND.DOC

{% raw %}
```
SOUND.DRV is a replacement for the file which comes with Windows V.3.0 and
V.3.0a. The old versions of SOUND.DRV contain a bug which may cause some
programs with sound to play the sound slowly or at the wrong speed.  Copy
the new file to your \WINWHEEL\SYSTEM subdirectory.

DO NOT use if you have WINDOWS 3.1 or later!
```
{% endraw %}

## VBRUN.DOC

{% raw %}
```
VBRUN.ZIP contains VBRUN100.DLL & VBTOOLS.VBX Visual Basic run-time
modules. They are required to be in the user's path in order to run
Visual Basic applications, such as WINWHEEL. It is suggested that these
files be copied to the user's WINDOWS subdirectory, since the WINDOWS
subdirectory will be in the user's path statement in the AUTOEXEC.BAT file.
```
{% endraw %}

## VENDOR.DOC

{% raw %}
```
Dear BBS SYSOP/Shareware Librarian
Welcome to WINWHEEL V.1.40 for Microsoft Windows 3.X
This word guessing game was written by a member of the Association of
Shareware Professionals.
  The small distribution version (1000 puzzles) of the game is supplied
here in archived form.  The full version is also available for distribution
directly from the author.  See details below. There are additional files
included here which sysops/librarians may wish to keep separate.  These
files are common to other programs written in Microsoft Visual Basic.
VBRUN100.DLL is the Microsoft run-time module.  VBTOOLS.VBX is the
MicroHelp, Inc. run-time module (only required when the author has used
this add-on in his programming (WINWHEEL).  SOUND.DRV is a replacement for
the sound driver in the \WINDOWS\SYSTEM subdirectory.  The sound driver
which comes with Windows V.3.0 and V.3.0a contains a bug which may cause
sound and music to play slowly, rather than at the tempo which the author
has programmed. Windows 3.1 does not require the replacement SOUND.DRV.
The author suggests that all files except VBRUN100.DLL be
kept on one floppy disk in a disk vendor's library. This may not be
practical for a BBS. It is suggested that VBRUN100.DLL be archived
(VBRUN.ZIP) separately.
The enclosed archive contains 10 files: CHAMP.DAT
                                        EDITWHEE.EXE
                                        EDITWHEE.PIF  
                                        HISTORY.DOC
                                        INSTALL.DOC
                                        SOUND.DOC
                                        SOUND.DRV
                                        SPIN.DAT
                                        VBTOOLS.VBX
                                        WINWHEEL.DAT
                                        WINWHEEL.DOC
                                        WINWHEEL.EXE

WINWHEEL may be distributed on BBS's and by Shareware distribution
companies.  ASP vendor members have automatic rights to distribute these
programs.  Other BBS sysops and shareware librarians must write to the
author for distribution rights.  All disk vendors may request the full
distribution version containing over 11,900 puzzles (300 Kbytes without the
VBRUN100.DLL file) for a nominal fee of $5.00 to cover shipping and
handling.
     I retain all copyrights to the programs.  The 10 files in the ZIP may
not be modified in any way and must be distributed together. VBRUN100.DLL
may be placed in a separate file on a BBS.  The file WINWHEEL.ZIP may be
distributed separately from the VBRUN file, as long as it is made clear to
the customer (either in a catalog listing, or in a file description on a
BBS) that the file VBRUN100.DLL is also required.  Distribution fees may
not exceed $5.00 per copy.  BBS's may not charge any download fee except
for normal connect charges.  The 10 files in the ZIP may be re-archived to
be consistent with your distribution system.
-  Russ Mueller
   507 Washington Gdns
   Washington, NJ  07882-9205
   U.S.A.
```
{% endraw %}

## WINWHEEL.DOC

{% raw %}
```
WINWHEEL Documentation
V.1.4 (03-15-92)
Requires VGA Card, Mouse, and Microsoft Windows 3
Copyright 1991-1992 by Russell Mueller
Member of the Association of Shareware Professionals
              _______
         ____|__     |                (R)
      --|       |    |-------------------
        |   ____|__  |  Association of
        |  |       |_|  Shareware
        |__|   o   |    Professionals
      -----|   |   |---------------------
           |___|___|    MEMBER

This program requires the file VBRUN100.DLL. If you did not get it
with WINWHEEL, then please contact your shareware vendor. Or you
may download it from Compuserve. It is in the file VBRUN.ZIP in
the MSBASIC forum in the Visual Basic library (lib #5). Alternately,
contact the author at the address below. There is a $2.00 shipping
and handling charge.

DEFINITION OF SHAREWARE

Shareware distribution gives users a chance to try software
before buying it. If you try a Shareware program and continue
using it, you are expected to register. Individual programs
differ on details -- some request registration while others
require it, some specify a maximum trial period. With
registration of WINWHEEL, you get the most recent revision of
the program with over 11,900 puzzles.
Copyright laws apply to both Shareware and commercial software,
and the copyright holder retains all rights, with a few specific
exceptions as stated below. Shareware authors are accomplished
programmers, just like commercial authors, and the programs are
of comparable quality. (In both cases, there are good programs
and bad ones!) The main difference is in the method of
distribution. The author specifically grants the right to copy
and distribute the software, either to all and sundry or to a
specific group. For example, some authors require written
permission before a commercial disk vendor may copy their
Shareware.
Shareware is a distribution method, not a type of software. You
should find software that suits your needs and pocketbook,
whether it's commercial or Shareware. The Shareware system makes
fitting your needs easier, because you can try before you buy.
And because the overhead is low, prices are low also. Shareware
has the ultimate money-back guarantee -- if you don't use the
product, you don't pay for it.

DISCLAIMER - AGREEMENT

Users of WINWHEEL must accept this disclaimer of warranty:
"WINWHEEL is supplied as is.  The author disclaims all
warranties, expressed or implied, including, without limitation,
the warranties of merchantability and of fitness for any purpose.
The author assumes no liability for damages, direct or conse-
quential, which may result from the use of WINWHEEL."

There is a known problem with WINWHEEL and some other Windows
programs when used at resolutions higher than standard VGA (640 X480)
on graphic cards using the Tseng video chipset. The Orchid ProDesigner II
and SpeedStar cards are known to have this problem. The buttons will be
improperly placed on the screen. This is caused by using a non-standard
font-size in Windows.  Portions of the Windows screen are sized and
positioned proportional to the font size.  Some video drivers have options
for using a large font in the higher resolutions.  This will cause the
buttons and some text to be improperly positioned on the screen.  The
solution at this time is to get new Windows video drivers for your
Super VGA card which will select the correct font.  There are replacement
drivers on Compuserve for the Tseng ET4000 cards (Orchid Prodesigner, and
Diamond SpeedSTAR cards, among others).

WINWHEEL V.1.4 is a "shareware program" and is provided at no charge
to the user for evaluation.  Feel free to share it with your
friends, but please do not give it away altered or as part of
another system.  The essence of "user-supported" software is to
provide personal computer users with quality software without
high prices, and yet to provide incentive for programmers to
continue to develop new products.  If you find this program
useful and find that you are using WINWHEEL and continue to use
WINWHEEL after a reasonable trial period, you must make a reg-
istration payment of $19.00 to Russell Mueller.  The $19.00
registration fee will license one copy for use on any one
computer at any one time.  You must treat this software just like
a book.  An example is that this software may be used by any
number of people and may be freely moved from one computer
location to another, so long as there is no possibility of it
being used at one location while it's being used at another.
Just as a book cannot be read by two different persons at the
same time.

Commercial users of WINWHEEL must register and pay for their
copies of WINWHEEL within 30 days of first use or their license
is withdrawn.  Site-License arrangements may be made by contacting
Russell Mueller at the address below.

Anyone distributing WINWHEEL for any kind of remuneration must
first contact Russell Mueller at the address below for authorization.

You are encouraged to pass a copy of WINWHEEL V.1.4 along to your
friends for evaluation.  Please encourage them to register their
copy if they find that they can use it.  All registered users
will receive a copy of the latest version of the WINWHEEL
system, software support via mail, and free upgrades/fixes for 90 days
from date of registration.

WINWHEEL, EGAWHEEL, and VGAWHEEL have been found to be useful to educators
at all levels.  These programs are being used for improving language skills
in the English language. EGAWHEEL and VGAWHEEL are DOS programs nearly
identical to WINWHEEL, without the requirement for Microsoft Windows or a
mouse.  Thy also contain a built-in editor which may be used to create a
custom database of puzzles for education and entertainment.  Please contact
the author for a site-license agreement with quantity discount.

***ASP Ombudsman Policy*****************************************************
"This program is produced by a member of the Association of Shareware
Professionals (ASP).  ASP wants to make sure that the shareware principle
works for you.  If you are unable to resolve a shareware-related problem with
an ASP member by contacting the member directly, ASP may be able to help.
The ASP Ombudsman can help you resolve a dispute or problem with an ASP
member, but does not provide technical support for members' products.  Please
write to the ASP Ombudsman at 545 Grover Road, Muskegon, MI  49442 
or send a Compuserve message via Compuserve Mail to ASP Ombudsman
70007,3536."
****************************************************************************
	Beware, younger children may not fully understand the
rules and are prone to fighting when one player monopolizes
the Wheel.
	Players outside the U.S. may not recognize some of the
puzzles, especially those which pertain to U.S. television celebrities or
programs.  I do not have a database which is specific to the world market.

I have included a program EDITWHEE.EXE which is a DOS program to edit the
puzzles and create a new CHAMP.DAT file, should the original become corrupted
or if you wish to start a new Top Ten WHEELERS list.  Run it from the DOS
prompt, from the Edit option on the menu line, or add it to your games group.
You can add it to a group by using the Program Manager, "File-New-Browse" and
add the EDITWHEE.PIF file in the Command Line.

ATTENTION EGA & VGA owners with DOS systems.
   EGAWHEEL V.17.0S(Shareware with 1000 puzzles)         $ 3.00*
   EGAWHEEL V.17.00(Shareware with over 12,000 puzzles)  $10.00*
   VGAWHEEL V.1.7S (Shareware with 1000 puzzles)         $ 3.00*
   VGAWHEEL V.1.70 (Shareware with over 12,000 puzzles)  $10.00*
   WINWHEEL V.1.40 (Shareware with 1000 puzzles)         $ 3.00*
   WINWHEEL V.1.40 (Shareware with over 12,000 puzzles)  $19.00*

* U.S. funds only.  Non-U.S. customers please use International Postal Order

	Enjoy!--
                     Russell Mueller
                     507 Washington Gardens
                     Washington, NJ  07882-9205  
                     U.S.A

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3709

     Volume in drive A has no label
     Directory of A:\

    WINWHEEL ZIP    135179   5-19-93   1:31p
    INSTALL  TXT      4466   3-15-92  10:05p
    SIGORDER TXT      3090   3-10-93   3:22p
    GO-FORM  DAT      3090   3-10-93   3:22p
    GO       EXE     26022   1-10-92  12:14p
    PKUNZIP  EXE     29378   2-01-93   2:04a
    PCSIG    TXT      2335   2-10-93   8:50a
    SHAREMAG TXT      1837   1-21-92   6:11a
    CDROM    TXT      4874   3-18-93   1:28p
    GO-STRT  DAT       540   5-19-93   2:09p
           10 file(s)     210811 bytes
                          105472 bytes free
