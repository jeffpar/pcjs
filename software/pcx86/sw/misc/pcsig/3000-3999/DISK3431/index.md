---
layout: page
title: "PC-SIG Diskette Library (Disk #3431)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3431/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3431"
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
700 megabytes of software you can have immediate access to.

Easy to use, all you have to do is insert the disc and type 'GO' at the
DOS prompt.  We've included all the tools you need for fast easy access
to the programs and their descriptions.

The WordCruncher text retrieval software allows you to quickly access
the description for any program you want.  All the programs are indexed
by title, filename, PC-SIG disk number, and every word within the
program description.  There couldn't be an easier way to find just the
right program.

The Narc utility, newly instituted with the tenth edition, allows you to
look directly at all the compressed program files on the CD without
having to download the program to your hard disk.  So if you want to
look at the programmer's notes or on-line documentation before using
valuable hard disk space, you can.

The PC-SIG Encyclopedia of Shareware is included on the disk, and a
printed copy of the book is included so you can peruse the available
programs from the comfort of your favorite chair.  All the programs are
logically divided into one-hundred twenty categories making it easier to
find just the right software.

Whether you're interested in Accounting or Windows, there's a shareware
program for you on the PC-SIG Library on CD-ROM.

Winner of the Optical Publishing Assn's Best Consumer Product Award.

Shareware for every imaginable need: Accounting Chemistry Educational
Engineering Games Hypertext Networks Programming Spreadsheets Utilities
Word Processing

System Requirements:

IBM PC/XT/AT PS/2 or compatible with 384K memory DOS 3.1 or higher and
Microsoft MS-DOS CD ROM extensions.





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
Every program on the disc is indexed

by title, filename, PC-SIG disk number, and every word in the program
description.  A new utility, Narc, is implemented so you can look at the
program files and the author's on-line documentation without having to
first copy the program to your hard disk.  By using WordCruncher and
Narc, you can quickly find the program you want and review it to be
sure, without ever having to run it from your hard disk.

If you've got a CD-ROM player at home and want to get more use of it and
your computer, or if you're trying to avoid purchasing another Nintendo
cartridge, or if you just enjoy looking at new software, you need The
Essential Home & Business Collection.

System Requirements:

IBM PC/XT/AT PS/2 or compatible with 384K memory DOS 3.1 or higher and
Microsoft MS-DOS CD ROM extensions.



To Order in the U.S.A.: Call 800-245-6717 and ask for Customer Service.

Outside the U.S.A. call (408) 730-9291 for the name of the dealer in
your country.

```
{% endraw %}

## DIALREAD.TXT

{% raw %}
```
********
OVERVIEW
********

This program offers the following main features:
___________________________________________________________________________

Tone or Pulse and manual dialing.

It provides 2 address books for dialing and logging.

It can serve as a stand-alone address book (2 books).

It prints envelopes on LaserJet.

Logging and most other features functional both with or without a modem.

It can dial special Tone-Dial services that require additional numbers 
and/or digits.

It accepts non-numeric-character phone numbers ( 1-800-Egg-Head ).

It provides quick conversion of non-numeric numbers directly from the 
keyboard.

It makes it easy to set the system time while calling your local time 
operator.

It functions as a stop watch.

Phone logs may contain job codes.

Phone logs may be viewed, printed and saved to another file.

It offers password protection.

It provides a quick notepad. 

A Mini Version is available which provides all the capabilities without 
allowing alterations.


*****************************************
How to install DiaLog on your hard disk:
*****************************************

DiaLog will install itself on your hard disk in the default directory
c:\DiaLog or in a directory of your choice.  It will also optionally
create a program group window with icons for executing DiaLog.

This program will not effect any other program or directory on your system.
No modifications will be made to any of the files such as AutoExec.Bat,
Config.Sys, Win.Ini, or any others.

DiaLog requires the library file 'VBRUN100.DLL' to reside in your Windows
directory, or a directory in your PATH.  It is available on CompuServe in 
the MSBASIC forum Lib5 as 'VBRUN.ZIP', or the WinADV forum as 'VBRUN1.ZIP'.

The following files make up the DiaLog installation package and should all
reside together in the same directory  for the installation to succeed:
(Pleas note DiaLog files start with 'Dial' for easy identification.)

Install.Exe             The installation program
Install.In$             Part of the installation program
DiaLog.Exe              The DiaLog program
DialHelp.Hlp            The DiaLog help file
DialHelp.Idx            The DiaLog help file index
DialRgst.Txt            Registration form to register DiaLog
DialRead.Txt            This file


- Installation -

The installation procedure assumes you have created an Installation disk
from the Fone14.Exe file.  To obtain the installation diskette type:
	      Fone14 a:\ or Fone14 b:\
This will create the installation diskette on drive a: or b:, assuming you 
are in the directory where Fone14.Exe is located.  Label it as: 'DiaLog
Installation Disk'.  

1.  From the Windows Program Manager Menu select: <File> <Run ..>

2.  Enter the path where your installation disk resides and add the
    installation program name.  ( a:\Install or b:\Install )

3.  The installation program will suggest c:\DiaLog as the directory for
    the DiaLog program.  You may change the disk identifier and the
    directory name.  However, do NOT add another level of subdirectory, 
    unless the subdirectory exists.  If you have a previous version of
    DiaLog already installed, just let "Install" install it on top of it.

4.  The installation program will ask you if you want to create a program
    group window.  You should answer 'yes', because you can always ask
    windows to move or delete it later.  This provides you with ready-to-run
    icons.  (See 'Deleting DiaLog from your system' later in this document.)
    If you already have a previous version of DiaLog with icons, then you
    should answer no, or you will have two sets of icons.  (You can always
    delete one set.)

5.  You are told the program has been successfully installed.

You are now ready to execute DiaLog.  Simply double click on the DiaLog
icon.  DiaLog contains extensive help information.  (Don't forget, 
VBRUN100.DLL must be in your Windows directory, or any other directory that
is in your PATH.  The file may be obtained from CompuServe WinADV forum
Lib16 as VBRUN1.ZIP.)


**********************
DiaLog Version Changes
********************** 

- Version 1.14   6-23-92     *** uploaded as Fone14.exe ***

1.  Windows 3.1 had problems closing DiaLog via the Program Manager if 
    DiaLog had executed the help file.  Windows reported General Protection
    Fault.  Closing DiaLog directly caused no such error.  Got around the
    erroneous error reporting by deleting the unloading of the Help form
    before closing DiaLog.


- Version 1.13   6-18-92     *** uploaded as Fone13.exe ***

1.  Made Log Title processor check for max characters.
2.  Do not allow logging mode change while logfile present.
3.  Added pulse dialing.
4.  Added notepad.


- Version 1.12   5-30-92 -

1.  Fixed problem in help processor by changing pointer from Integer to Long.


- Version 1.11   5-27-92

1.  Changed logging scheme to text format to allow editing of file.
2.  Provided normal and extended logging.
3.  Let operator determine title for log output.
4.  Added optional "Timer-Running" beep.


- Version 1.10   5-20-92 -

1.  Added envelope printing.
2.  Added password protection.
3.  Program now loads minimized (icon).


- Version 1.01   5-7-92 -

1.  Clear "Special Features" flag when number is entered from keyboard.


- Version 1.0    4-9-92 -     *** uploaded as Fonelg.exe ***

Original program.


********************************
Deleting DiaLog from your system
********************************

Use Windows to delete each item in the DiaLog program group by selecting
the icon and then selecting <Delete> from the Program Manager <File> menu.

After all icons have been deleted, delete the program group in the same way.

Next delete all files in the DiaLog directory, and finally the DiaLog 
directory itself.

************
DISCLAIMER:
************

DiaLog COPYRIGHT (c) 1992 WOLFGANG JOHN  ALL RIGHTS RESERVED

THIS PROGRAM IS PROVIDED "AS IS" WITHOUT REPRESENTATION OR WARRANTY OF ANY 
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION, ANY 
REPRESENTATIONS OR ENDORSEMENTS REGARDING THE USE OF, THE RESULTS OF, OR 
PERFORMANCE OF THE PROGRAM, ITS APPROPRIATENESS, ACCURACY, RELIABILITY, OR 
CURRENTNESS.  THE ENTIRE RISK AS TO THE USE OF THIS PROGRAM IS ASSUMED BY 
THE USER.  IN NO EVENT WILL WOLFGANG JOHN OR HIS EMPLOYEES BE LIABLE FOR ANY
DAMAGES, DIRECT, INDIRECT, INCIDENTAL OR CONSEQUENTIAL, RESULTING FROM ANY 
DEFECT IN THE PROGRAM, EVEN IF WOLFGANG JOHN HAS BEEN ADVISED OF THE 
POSSIBILITY OF SUCH DAMAGES.  THIS DISCLAIMER SHALL SUPERSEDE ANY VERBAL OR 
WRITTEN STATEMENT TO THE CONTRARY.  IF YOU DO NOT ACCEPT THESE TERMS YOU 
MUST CEASE AND DESIST USING THIS PROGRAM.


******************
DiaLog TO OTHERS:
******************

There are two ways you are permitted to pass the DiaLog program to other 
people.  One way is by simply passing on the compressed file (Fone14.Exe) 
and the preferred way is by executing Fone14.Exe to a diskette, which 
copies the following files to a single disk (All the files listed MUST be 
included WITHOUT modification.)  Name that disk 'DiaLog Installation':

Install.Exe		The DiaLog Installation program
Install.In$		Part of the installation system
DiaLog.Exe		The DiaLog program
DialHelp.Hlp		The DiaLog Help File
DialHelp.Idx		The DiaLog Help File Index
DialRead.Txt		An info file to be read before installation
DialRgst.Txt		A registration form to register DiaLog

You may optionally include the file VBRUN100.DLL.

NO OTHER FILES MAY BE INCLUDED ON THAT DISK.

Anyone wishing to charge a fee for distributing DiaLog to others, must have 
been recognized by the ASP (Association of Shareware Professionals), 
otherwise the distributor is guilty of copyright violation.


**********************
THE SHAREWARE CONCEPT:
**********************

Shareware is copyrighted software which is distributed by authors through 
bulletin boards, on-line services, disk vendors, and copies passed among 
friends and acquaintances.  It is commercial software which you are allowed 
to try before you pay for it.  This makes Shareware the ultimate in money 
back guarantees.

With Shareware you get to try a program for a reasonable limited time 
(30-45 days), without spending any money other than perhaps for downloading 
from a bulletin board or paying a Shareware distributor a small fee for his 
disk.  You are able to use the software on your own computer, in your own 
work environment.  If you decide the program is not for you, you remove it 
from your computer and erase all copies, including the data files.  If you 
do decide to keep it, then - and only then - do you pay for it.

Shareware is a distribution method, not a type of software.  Shareware is 
produced by accomplished programmers, just like retail software.  There is 
good and bad Shareware, just as there is good and bad retail software.  The 
primary difference between Shareware and retail software is that with 
Shareware you know if it's good or bad before you pay for it.

The Shareware system and the continued availability of quality Shareware 
products depend on your willingness to register and pay for the Shareware 
you keep.  The registration fees you pay allow Shareware producers to 
support and continue to develop their products.  Please show your support 
for Shareware by registering those programs you actually keep and use and by 
passing them on to others.  Shareware is kept alive by your support!
```
{% endraw %}

## DIALREAD.TXT

{% raw %}
```
********
OVERVIEW
********

This program offers the following main features:
___________________________________________________________________________

Tone or Pulse and manual dialing.

It provides 2 address books for dialing and logging.

It can serve as a stand-alone address book (2 books).

It prints envelopes on LaserJet.

Logging and most other features functional both with or without a modem.

It can dial special Tone-Dial services that require additional numbers 
and/or digits.

It accepts non-numeric-character phone numbers ( 1-800-Egg-Head ).

It provides quick conversion of non-numeric numbers directly from the 
keyboard.

It makes it easy to set the system time while calling your local time 
operator.

It functions as a stop watch.

Phone logs may contain job codes.

Phone logs may be viewed, printed and saved to another file.

It offers password protection.

It provides a quick notepad. 

A Mini Version is available which provides all the capabilities without 
allowing alterations.


*****************************************
How to install DiaLog on your hard disk:
*****************************************

DiaLog will install itself on your hard disk in the default directory
c:\DiaLog or in a directory of your choice.  It will also optionally
create a program group window with icons for executing DiaLog.

This program will not effect any other program or directory on your system.
No modifications will be made to any of the files such as AutoExec.Bat,
Config.Sys, Win.Ini, or any others.

DiaLog requires the library file 'VBRUN100.DLL' to reside in your Windows
directory, or a directory in your PATH.  It is available on CompuServe in 
the MSBASIC forum Lib5 as 'VBRUN.ZIP', or the WinADV forum as 'VBRUN1.ZIP'.

The following files make up the DiaLog installation package and should all
reside together in the same directory  for the installation to succeed:
(Pleas note DiaLog files start with 'Dial' for easy identification.)

Install.Exe             The installation program
Install.In$             Part of the installation program
DiaLog.Exe              The DiaLog program
DialHelp.Hlp            The DiaLog help file
DialHelp.Idx            The DiaLog help file index
DialRgst.Txt            Registration form to register DiaLog
DialRead.Txt            This file


- Installation -

The installation procedure assumes you have created an Installation disk
from the Fone14.Exe file.  To obtain the installation diskette type:
	      Fone14 a:\ or Fone14 b:\
This will create the installation diskette on drive a: or b:, assuming you 
are in the directory where Fone14.Exe is located.  Label it as: 'DiaLog
Installation Disk'.  

1.  From the Windows Program Manager Menu select: <File> <Run ..>

2.  Enter the path where your installation disk resides and add the
    installation program name.  ( a:\Install or b:\Install )

3.  The installation program will suggest c:\DiaLog as the directory for
    the DiaLog program.  You may change the disk identifier and the
    directory name.  However, do NOT add another level of subdirectory, 
    unless the subdirectory exists.  If you have a previous version of
    DiaLog already installed, just let "Install" install it on top of it.

4.  The installation program will ask you if you want to create a program
    group window.  You should answer 'yes', because you can always ask
    windows to move or delete it later.  This provides you with ready-to-run
    icons.  (See 'Deleting DiaLog from your system' later in this document.)
    If you already have a previous version of DiaLog with icons, then you
    should answer no, or you will have two sets of icons.  (You can always
    delete one set.)

5.  You are told the program has been successfully installed.

You are now ready to execute DiaLog.  Simply double click on the DiaLog
icon.  DiaLog contains extensive help information.  (Don't forget, 
VBRUN100.DLL must be in your Windows directory, or any other directory that
is in your PATH.  The file may be obtained from CompuServe WinADV forum
Lib16 as VBRUN1.ZIP.)


**********************
DiaLog Version Changes
********************** 

- Version 1.14   6-23-92     *** uploaded as Fone14.exe ***

1.  Windows 3.1 had problems closing DiaLog via the Program Manager if 
    DiaLog had executed the help file.  Windows reported General Protection
    Fault.  Closing DiaLog directly caused no such error.  Got around the
    erroneous error reporting by deleting the unloading of the Help form
    before closing DiaLog.


- Version 1.13   6-18-92     *** uploaded as Fone13.exe ***

1.  Made Log Title processor check for max characters.
2.  Do not allow logging mode change while logfile present.
3.  Added pulse dialing.
4.  Added notepad.


- Version 1.12   5-30-92 -

1.  Fixed problem in help processor by changing pointer from Integer to Long.


- Version 1.11   5-27-92

1.  Changed logging scheme to text format to allow editing of file.
2.  Provided normal and extended logging.
3.  Let operator determine title for log output.
4.  Added optional "Timer-Running" beep.


- Version 1.10   5-20-92 -

1.  Added envelope printing.
2.  Added password protection.
3.  Program now loads minimized (icon).


- Version 1.01   5-7-92 -

1.  Clear "Special Features" flag when number is entered from keyboard.


- Version 1.0    4-9-92 -     *** uploaded as Fonelg.exe ***

Original program.


********************************
Deleting DiaLog from your system
********************************

Use Windows to delete each item in the DiaLog program group by selecting
the icon and then selecting <Delete> from the Program Manager <File> menu.

After all icons have been deleted, delete the program group in the same way.

Next delete all files in the DiaLog directory, and finally the DiaLog 
directory itself.

************
DISCLAIMER:
************

DiaLog COPYRIGHT (c) 1992 WOLFGANG JOHN  ALL RIGHTS RESERVED

THIS PROGRAM IS PROVIDED "AS IS" WITHOUT REPRESENTATION OR WARRANTY OF ANY 
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION, ANY 
REPRESENTATIONS OR ENDORSEMENTS REGARDING THE USE OF, THE RESULTS OF, OR 
PERFORMANCE OF THE PROGRAM, ITS APPROPRIATENESS, ACCURACY, RELIABILITY, OR 
CURRENTNESS.  THE ENTIRE RISK AS TO THE USE OF THIS PROGRAM IS ASSUMED BY 
THE USER.  IN NO EVENT WILL WOLFGANG JOHN OR HIS EMPLOYEES BE LIABLE FOR ANY
DAMAGES, DIRECT, INDIRECT, INCIDENTAL OR CONSEQUENTIAL, RESULTING FROM ANY 
DEFECT IN THE PROGRAM, EVEN IF WOLFGANG JOHN HAS BEEN ADVISED OF THE 
POSSIBILITY OF SUCH DAMAGES.  THIS DISCLAIMER SHALL SUPERSEDE ANY VERBAL OR 
WRITTEN STATEMENT TO THE CONTRARY.  IF YOU DO NOT ACCEPT THESE TERMS YOU 
MUST CEASE AND DESIST USING THIS PROGRAM.


******************
DiaLog TO OTHERS:
******************

There are two ways you are permitted to pass the DiaLog program to other 
people.  One way is by simply passing on the compressed file (Fone14.Exe) 
and the preferred way is by executing Fone14.Exe to a diskette, which 
copies the following files to a single disk (All the files listed MUST be 
included WITHOUT modification.)  Name that disk 'DiaLog Installation':

Install.Exe		The DiaLog Installation program
Install.In$		Part of the installation system
DiaLog.Exe		The DiaLog program
DialHelp.Hlp		The DiaLog Help File
DialHelp.Idx		The DiaLog Help File Index
DialRead.Txt		An info file to be read before installation
DialRgst.Txt		A registration form to register DiaLog

You may optionally include the file VBRUN100.DLL.

NO OTHER FILES MAY BE INCLUDED ON THAT DISK.

Anyone wishing to charge a fee for distributing DiaLog to others, must have 
been recognized by the ASP (Association of Shareware Professionals), 
otherwise the distributor is guilty of copyright violation.


**********************
THE SHAREWARE CONCEPT:
**********************

Shareware is copyrighted software which is distributed by authors through 
bulletin boards, on-line services, disk vendors, and copies passed among 
friends and acquaintances.  It is commercial software which you are allowed 
to try before you pay for it.  This makes Shareware the ultimate in money 
back guarantees.

With Shareware you get to try a program for a reasonable limited time 
(30-45 days), without spending any money other than perhaps for downloading 
from a bulletin board or paying a Shareware distributor a small fee for his 
disk.  You are able to use the software on your own computer, in your own 
work environment.  If you decide the program is not for you, you remove it 
from your computer and erase all copies, including the data files.  If you 
do decide to keep it, then - and only then - do you pay for it.

Shareware is a distribution method, not a type of software.  Shareware is 
produced by accomplished programmers, just like retail software.  There is 
good and bad Shareware, just as there is good and bad retail software.  The 
primary difference between Shareware and retail software is that with 
Shareware you know if it's good or bad before you pay for it.

The Shareware system and the continued availability of quality Shareware 
products depend on your willingness to register and pay for the Shareware 
you keep.  The registration fees you pay allow Shareware producers to 
support and continue to develop their products.  Please show your support 
for Shareware by registering those programs you actually keep and use and by 
passing them on to others.  Shareware is kept alive by your support!
```
{% endraw %}

## DIALRGST.TXT

{% raw %}
```
                REGISTRATION FORM - SINGLE COPIES
                       DiaLog version 1.14

-----------------------------------------------------------
                       For Site License
   please write or leave message on CompuServe 76214,1327
-----------------------------------------------------------


(Name to appear on license.  List additional names, for
 additional licenses.)

NAME_______________________________________________________

COMPANY____________________________________________________

STREET_____________________________________________________

CITY_______________________________________________________

STATE_________________________   ZIP_______________________

COUNTRY_______________________   CompuServe________________

TELEPHONE_____________________   FAX_______________________


How did you obtain DiaLog? ________________________________


DiaLog single copy license........USA.....$19.95...________
   Britain _10.90 pounds, Canada  $24.00
   France  108.00 francs,  Germany DM 32.00, Japan 2554.00 yen

Make check or money-order payable to: Wolfgang John

Mail to:

  Wolfgang John
  10920 Portal Rd.
  Atascadero, CA  93422


As a registered user you are entitled to 90 days of free support 
on CompuServe (max on-line time = 30 min) or by mail.  Your 
CompuServe charges are yours, of course.


What program(s) would you like to see developed?
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
(includes a 1 year subscription to Shareware Magazine )
(also The Encyclopedia of Shareware, and 5 free disks )

The PC-SIG Games CD-ROM (Over 380 playable games)      $39.00  ______

The Essential Home & Business Collection for           $59.00  ______

*** PC-SIG Library on CD-ROM 11th Edition  ***         $159.00 ______
              NEW LOWER PRICE!

Upgrade to the 11th Edition from ANY previous edition
of the PC-SIG Library on CD-ROM!                       $85.00  ______

Upgrade from ANY other shareware CD-ROM just           $99.00  ______

                                                    Subtotal   ______

If you want 3-1/2 inch disks please add .50 cents per disk     ______

Shipping and Handling                                          $4.00

                    California residents add 8.25% sales tax   ______

                                                       TOTAL   ______



      If you have any comments or suggestions, please let us know!

To order by phone with VISA or MASTERCARD call (800)245-6717
Ask for operator #2316





                                *****




              TO PRINT THIS ORDER FORM, PRESS ANY KEY AND
              THEN "Quit" ONCE TO RETURN TO THE MAIN MENU.
                     SELECT "Print Reply Form."
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3431

     Volume in drive A has no label
     Directory of A:\

    FONE114  ZIP    267914   3-01-93   1:07p
    CDROM    TXT      3693   1-21-92   6:10a
    GO-FORM  DAT      3332   2-10-93   8:49a
    GO-STRT  DAT       546   3-01-93   1:40p
    GO       EXE     26022   1-10-92  12:14p
    PCSIG    TXT      2335   2-10-93   8:50a
    PKUNZIP  EXE     23528   3-15-90   1:10a
    SHAREMAG TXT      1837   1-21-92   6:11a
    SIGORDER TXT      3332   2-10-93   8:49a
    DIALREAD TXT      9706   6-23-92   8:33p
           10 file(s)     342245 bytes
                           15360 bytes free
