---
layout: page
title: "PC-SIG Diskette Library (Disk #3481)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3481/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3481"
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

## ALLFADES.TXT

{% raw %}
```
;      Demonstration Program to show all basic fades of GRASP.

;           by Doug Wolfgram - Microtex Industries, Inc.

; To run this demo, press F10. When running, to quit, press ESC.
 
; The screen will clear to blue, then do each fade, full screen, 
; at what I consider to be the best speed on a PC.  To see  what
; effect the WINDOW command has  on  the  fades,  uncomment  the
; command at line 20 by removing the semi-colon and press F10 to
; run it again. 


	video a			; set video mode to 4 color cga
	pload grasp		; load the picture. default buffer is 1
	color 1			; set the drawing color for the boxes

; Un-comment the next line to see effect of clip window settings

;      	window 56,15,195,124	; set clip window to constrain fades

Top:				; label indicating the top of the loop
	box 0,0,319,199,100	; draw with box command to clear screen
	fade 1,1,0,0		; do the first fade
	box 0,0,319,199,100	;   etc...
	fade 2,1,0,0
	box 0,0,319,199,100
	fade 3,1,0,0
	box 0,0,319,199,100
	fade 4,1,0,0
	box 0,0,319,199,100
	fade 5,1,0,0
	box 0,0,319,199,100
	fade 6,1,0,0
	box 0,0,319,199,100
	fade 7,1,0,0
	box 0,0,319,199,100
	fade 8,1,0,0
	box 0,0,319,199,100
	fade 9,1,50,0
	box 0,0,319,199,100
	fade 10,1,50,0
	box 0,0,319,199,100
	fade 11,1,50,0
	box 0,0,319,199,100
	fade 12,1,50,0
	box 0,0,319,199,100
	fade 13,1,50,0
	box 0,0,319,199,100
	fade 14,1,50,0
	box 0,0,319,199,100
	fade 15,1,50,0
	box 0,0,319,199,100
	fade 16,1,50,0
	box 0,0,319,199,100
	fade 17,1,50,0
	box 0,0,319,199,100
	fade 18,1,50,0
	box 0,0,319,199,100
	fade 19,1,0,0
	box 0,0,319,199,100
	fade 20,1,0,0
	box 0,0,319,199,100
	fade 21,1,0,0
	box 0,0,319,199,100
	fade 22,1,100,0
	box 0,0,319,199,100
	fade 23,1,100,0
	box 0,0,319,199,100
	fade 24,1,0,0
	box 0,0,319,199,100
	fade 25,1,0,0

	goto Top		; loop back to label 'Top'

	exit			; Exit program. Here for cosmetics only.
```
{% endraw %}

## HISTORY.DOC

{% raw %}
```
      GRASP - GRAphical System for Presentation - Revision history

     The following is a LIFO list of the revision history of GRASP.

Do not worry about always keeping the latest version of GRASP around unless
one of these bugs or features directly affects you...
_____________________________________________________________________________

1.10c - August 15, 1986
-----

* The little '4' in upper left corner of CGA now gone. Whew!

* SLIDE (pfade 19) on CGA speed fixed. Now runs at full speed.

* Many, many HERCULES mode bugs fixed including the hang with fade speeds.

* Can change paths from Main Directory now.

* Fonts moved to far segment so larger fonts may be used.

* RE-compiled with MANX C which provides smaller, faster code.

* Lots of little fixes and code clean-ups.

* A couple of manual changes and clarifications.

* NEW COMMAND - MOVE - moves section of screen to another part of screen.
 
* NEW COMMAND - RECT - draws fast filled rectangles.

* NEW COMMAND - TILE - fills screen with a clipping, i.e., tiling effect.

* NEW COMMAND - POSITION - sets position in PCPAINT page where screen will
                           be displayed from. This allows you to create
                           very large pages and scroll around in them.

* NEW COMMAND - SETUPSCR - now required before PAN command. To do EGA panning
                           the sequence must be as follows:

                           SETUPSCR buffer
                           PFADE 0,1
                           PAN (around anywhere you like...)
                           CLEARSCR
                           RESETSCR

                           also note that SETUPSCR and RESETSCR will reset
                           the window parameters to screen size, so you
                           must reset with the window command if you need to.
_____________________________________________________________________________

1.10b - June 3, 1986
-----
* You can now load pictures of any type, even while in a different video
  mode.

* Text clipping placement is now correct.

_____________________________________________________________________________

1.10a - May 25, 1986
-----
* Hercules mode now works properly. You can read all menus.

* EGA monochrome mode now works better. The system will default to the proper
  configuration based on your hardware at start-up.

* Use of an old VIDEO command now signals an error instead of sometimes
  hanging.

* The routine that checks for existence of a mouse doesn't hang the machine
  now.

* Passing a video mode parameter to PCPAINT (ALT-F10 function in editor) now
  works all the time.

* GRASP used to support dual monitor configs. Due to the fact that may
  vendors have hercules emulation on their EGAs, I can't tell whether
  I need to switch monitors or not to get to herc. Therefore, GRASP no
  longer automatically switches monitors. If you have dual monitors, you
  need to do a DOS MODE command to switch before running GRASP.

* If you try to set EGA modes and don't have one, it tells you...instead
  of hanging.

_____________________________________________________________________________

1.10  - May 15, 1986 - Official First Release
-----

_____________________________________________________________________________

1.10* - April 15, 1986 - Beta Release
-----
_____________________________________________________________________________

```
{% endraw %}

## PCHELP.DOC

{% raw %}
```
                 HELP FOR NEW USERS & PROBLEMS YOU MIGHT HAVE 
                                   FROM:
                   PC PLUS CONSULTING / CALIFORNIA FREEWARE

     Public domain/shareware software is very easy to use if you are familiar
with a few basic "DOS" commands. These commands are "COPY", "DISKCOPY", "DIR",  
"TYPE", "FORMAT", & a few others.  None of the disks are "bootable", which
means that you cannot place the disk in your computer and turn it on.
     The first thing to do is to make a backup copy of your disk with the
 following command:
     A>DISKCOPY A: B:  <enter> - (will copy all files from 'A' to 'B')
     In the event that you get some sort of error message when using "DISKCOPY",
you will then have to use the "COPY" command to make a backup of your original
disk. Place a blank FORMATTED disk in the "B" drive, the original disk in 'A"
and enter the following command at the "A>" prompt: 
     A>COPY *.* B:  <enter> - (will copy all files from 'A' to 'B')
     Now put the original disk away and use the working copy.  The next thing
to do is see what files are on the disk.  Place the working copy in the "A"
drive and enter the following command:
     A>DIR   <enter> - will display the filenames
     Now you will see many different filenames.  A filename consists of two
parts; the filename & the extension.  The filename will be on the left (up to
8 characters long) & the extension will be just to the right (up to 3
characters long).  You will be looking for certain extension names; which
will tell you something about that type of file.  

******************************************************************************
*      IMPORTANT.....IMPORTANT.....IMPORTANT.....IMPORTANT.....IMPORTANT     *
*----------------------------------------------------------------------------*
* EXE - a program file - type in the name & press the enter key.             *
* COM - a command file - type in the name & press the enter key.             *
* BAT - a batch file - many uses, type in the name & press enter key.        *
* BAS - a "BASIC" program. Needs GWBASIC or BASICA to run the program.       *
* ARC - a archived file - needs to be unarchived, contains many files.       *
* DQC - a compressed file - needs to be uncompressed to be readable.         *
* DOC - A DOCUMENTATION FILE - instructions about the program - READ THIS    *
* TXT - A DOCUMENTATION FILE - instructions about the program - READ THIS    *
******************************************************************************

     You may also see files like READ.ME or README.1ST or just README. These
are all documentation files that will tell you about the program or how to
work the program properly.

VERY IMPORTANT:  READ DOCUMENTATION FILES FIRST BEFORE RUNNING THE PROGRAM!!!

===============================================================================

     To view a documentation file on your screen, use the "TYPE" command.
With your program disk in the "A" drive enter the following command:
     A>TYPE filename.ext  (enter) - where filename would be README.DOC
            or whatever the filename is that you wish to view.
     This will display the documentation to the screen.  To stop the text
from scrolling by, press "CTRL S" (the CTRL key and "S" key at the same
time), any other key to resume scrolling. To obtain a printout of the
documentation simply replace the "TYPE" command with the "DOS" command
"COPY". Turn your printer on and enter the following command:
     A>COPY filename.ext PRN <enter> - where filename would be README.DOC or 
                                       whatever file you wish to print.

===============================================================================

     An "EXE", "COM", or "BAT" file extension means that when you  
enter the filename, the computer will do something.  For instance,
if the filename were "POKER.EXE", or "POKER.COM, or "POKER.BAT" you would
enter the following at the "A" prompt:
     A>POKER  <enter> - the poker program would now come up on the screen.

===============================================================================

     Another type of file (a little tricky to run) is a "BASIC" file. These
types have the "BAS" extension.  Any file with this extension must be run with
the "BASIC" interpreter.  That simply means that you must have a copy of
"GWBASIC.EXE" if you have a clone, or "BASICA.COM" if you have an "IBM". These
2 files (GWBASIC & the "BAS" file) must reside together or be able to find
each other.  An easy way to do this is to simply copy "GWBASIC.EXE" to the 
disk that contains the "BAS" files. When both files are together &
this disk was in the "A" drive you would enter the following command:
     A>GWBASIC POKER  <enter> - the poker program would now be "running"
                                & you would be playing the game.

===============================================================================

     Another important file is one with an "ARC" extension.  This means it is
an archived file & contains many smaller files within it. This is done so 
all the files will fit on to the disk(s) you received. You must extract the
files with a special program.  The program most commonly used is called 
"PKXARC.EXE". To extract files from a file called "TEST.ARC", enter the
following command: 
     A>PKXARC TEST B:   <enter> - this would extract all the files and place
them on a disk that was in the "B" drive.  You must have a FORMATTED blank disk
in the "B" drive when issuing this command. You could copy the "ARC" files & 
the program "PKXARC.EXE" to your hard drive & enter the following command:
     C>PKXARC TEST   <enter>  -  this will extract all the files from an
                                 archived state. Then you will see some of
                                 the different filenames mentioned above when
                                 you use the "DIR" command.

===============================================================================

     Hopefully this help sheet will enable you to understand & use your disks.
If all this still sounds like "GREEK", then we strongly suggest that you 
purchase the following disks:

     #257 - BEGINNERS - a tutorial on using public domain/shareware software
     #256 - DOS TUTORIAL - an excellent program teaching about your
                           computer & how to use "DOS" commands
     #255 - DOS HELP - on-line help screens for "DOS" commands


                           Happy computing,


        PC PLUS CONSULTING              CALIFORNIA FREEWARE
        14536 ROSCOE BL. # 201          1747 E. AVE Q   UNIT C1
        PANORAMA CITY, CA. 91402        PALMDALE, CA. 93550
        818) 891-7930                   (805) 273-0300
        SHOWROOM / OFFICE               MAIN OFFICE / MAIL ORDERS




     



     

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

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3481

     Volume in drive A has no label
     Directory of A:\

    GRASP    ZIP    185778   4-13-93   8:05a
    GO-STRT  DAT       540   1-06-93   4:57p
    SIGORDER TXT      3090   3-10-93   3:22p
    GO-FORM  DAT      3090   3-10-93   3:22p
    GO       EXE     26022   1-10-92  12:14p
    PCSIG    TXT      2335   2-10-93   8:50a
    SHAREMAG TXT      1837   1-21-92   6:11a
    CDROM    TXT      4874   3-18-93   1:28p
    PKUNZIP  EXE     29378   2-01-93   2:04a
            9 file(s)     256944 bytes
                           60416 bytes free
