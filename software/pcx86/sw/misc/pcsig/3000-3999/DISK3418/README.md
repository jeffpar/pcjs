---
layout: page
title: "PC-SIG Diskette Library (Disk #3418)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3418/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3418"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║            <<<<  PC-SIG Disk #3418 NISUS MISSILE MASTER  >>>>           ║
║                         Disk 2 of 2 (3417 also)                         ║
╠═════════════════════════════════════════════════════════════════════════╣
║  To Install this game to your hard disk, type:                          ║
║     [hard drive letter]:  (Enter)                                       ║
║     CD\  (Enter)                                                        ║
║     MD MISSILE                                                          ║
║     CD MISSILE                                                          ║
║                                                                         ║
║  To Extract files, insert disk 2 (#3418) in drive A (or B) and type:    ║
║     A:PKUNZIP A:MISSILE  (use B: instead of A: if disk is in B drive)   ║
║                                                                         ║
║  To Start the game, type:  MISSILE  (Enter)                             ║
║                                                                         ║
║  You can also start the game from within Windows. See your Windows      ║
║  documentation on running programs.                                     ║
║                                                                         ║
║                                        (C) Copyright 1993, PC-SIG Inc.  ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## README.TXT

{% raw %}
```
                     Missile Master v2.62
                     --------------------
     Copyright (c) 1992-1993 Nisus Development & Technology

    Missile Master is Shareware.  It is not Freeware or
Public Domain.  As such, you are required to register this
software if you make continued use of it, usually longer
than 21 days.  In addition to the benefits of becoming a
registered user, you will feel good (I hope) about
supporting the Shareware concept.  I'm not making a living
at writing shareware, but a little encouragement in the
form of registrations will allow me to continue writing
fine pieces of software for all to enjoy.
    For more information on registering, please see the on-
line help from within the game or refer to the end of this
document.

======================
Disclaimer of Warranty
======================
THIS SOFTWARE AND DOCUMENTATION ARE PROVIDED "AS IS" AND
WITHOUT WARRANTIES AS TO PERFORMANCE, USEFULNESS,
ENTERTAINMENT VALUE OR ANY OTHER WARRANTIES WHETHER EXPRESSED
OR IMPLIED.  NO WARRANTY OF FITNESS IS OFFERED.

ALTHOUGH THIS PROGRAM HAS BEEN TESTED VERY THOROUGHLY, THE
USER ASSUMES ALL RISKS OF USING THE PROGRAM.  THE AUTHOR
ASSUMES NO RESPONSIBILITY FOR LOSS OF DATA, PHYSICAL DAMAGE
TO EQUIPMENT OR ANY OTHER DAMAGE THAT MAY OR MAY NOT OCCUR
DURING THE USE OF THIS PROGRAM.

THIS PROGRAM, ITS SOURCE CODE, ALL ADDITIONAL FILES INCLUDED,
AND THE DOCUMENTATION ARE PROTECTED UNDER INTERNATIONAL
COPYRIGHT LAWS.  DISASSEMBLING OR REVERSE ENGINEERING OF ANY
PORTIONS OF THIS PROGRAM OR ITS ACCOMPANYING FILES IS
STRICTLY PROHIBITED.

NISUS DEVELOPMENT & TECHNOLOGY RESERVES THE RIGHT TO ADD,
CHANGE OR REMOVE FEATURES AND PROGRAM COMPONENTS FROM THE
SHAREWARE OR REGISTERED VERSION OF THIS PROGRAM WITHOUT
PRIOR NOTICE.

=================
Installation Help
=================
If you have received Missile Master as a 'ZIP' file (ie:
MIMA262.ZIP), simply unzip the files to a floppy disk.
Then from within Windows, choose [RUN...] from the Program
Manager's [FILE] menu and type 'A:\SETUP' (or 'B:\SETUP',
depending on where the disk is).

Please note that Missile Master requires VBRUN200.DLL.
If you don't have VBRUN200.DLL, many BBSs have
VBRUN200.DLL available as a separate download, usually called
VBRUN200.ZIP or something similar.  Once obtained, place it
in your Windows System directory (usually C:\WINDOWS\SYSTEM).

=======================
Batch File Installation
=======================
If you have problems using the Windows SETUP automated
installation routine, I have provided a batch file to
automate the installation.  You must be logged to the
directory where the batch file exists.

Example (do not type quotes)

type "A:" and press [ENTER]
type "INSTALL"

===================
Manual Installation
===================
If you prefer to install Missile Master manually, the
following list will let you know where to put the files:

Filename       Copy to
----------------------------------------------------------------
VBRUN200 DLL   Your Windows System Directory
COMMDLG  DLL   Your Windows System Directory
CMDIALOG VBX   Your Windows System Directory
MCI      VBX   Your Windows System Directory
SPIN     VBX   Your Windows System Directory
THREED   VBX   Your Windows System Directory
EXPLOSIO WAV   Any Directory [directory]
MISSILE  WAV   To [directory]
LASER    WAV   To [directory]
OHOH     WAV   To [directory]
EMPTY    WAV   To [directory]
SCORE    WAV   To [directory]
AIRRAID  WAV   To [directory]
GAMEOVE1 WAV   To [directory]
GAMEOVE2 WAV   To [directory]
BCITY    WAV   To [directory]
BPULSE   WAV   To [directory]
HISCORE  WAV   To [directory]
MIRV     WAV   To [directory]
STREAMER WAV   To [directory]
ARRG     WAV   To [directory]
METBLAST MID   To [directory]
MISSILE  EXE   To [directory]
MISSILE  HLP   To [directory]
BOINK    EXE   To [directory]
SETUP    EXE   Not needed for manual install
SETUPKIT DLL   Not needed for manual install
VER      DL_   Not needed for manual install
MMSETUP  EXE   Not needed for manual install
SETUP    LST   Not needed for manual install

After this procedure, you will need to add a Program Manager
icon to run Missile Master.  Refer to your Windows
documentation if you require help in this area.

=====================
Shareware Limitations
=====================
This Shareware version of Missile Master is limited in these ways.

1] There is an opening 'Nag' screen
2] Maximum level to play is 25
3] Maximum starting level is 5
4] The 'Unlimited Missiles' option is unavailable

Read the online documentation for information on registering.

=======================
Distribution Guidelines
=======================
Here are a few rules I require any potential disk
distribution services to adhere to:

All
---
    The following rule(s) apply to everyone (individuals
and organizations):

1.Absolutely no changes, additions or deletions to the
  program code, data or documentation files are to be made
  without the prior written consent of Nisus Development &
  Technology.
2.Nisus Development & Technology reserves the right to
  prohibit any organization or individual from distributing
  Missile Master if the guidelines listed below are not
  followed.

Retail Shareware Vendors and CD-ROM Distributors
------------------------------------------------
    Retail Shareware Vendors and CD-ROM Distributors must contact Nisus
Development & Technology to negotiate royalty terms.  If you do not contact
Nisus before including Missile Master in a retail environment or in a CD-ROM
collection, you will be in direct violation of copyright laws.
    Nisus has adopted this policy because of confusion caused when users
purchase a disk in a retail setting or CD-ROM collection.  Some users
incorrectly assume that because they have paid for the disk or CD-ROM, no
further payment to the author is required.  This has caused several angry
calls to some shareware authors from irate users who don't understand why
they must pay twice for a program.  Your understanding is appreciated.
    Many reputable retail shareware vendors and CD-ROM distributors have
already adopted royalty policies with shareware authors.

Catalog Disk Distributors and Vendors
-------------------------------------
    You are hereby granted a non-exclusive license to include Missile Master
Shareware Version in your catalogs provided:

1.Your catalog must make it clear to the buyer that a disk purchase from you
  does not include registration of the programs on that disk.
2.No more than $10US is to be charged for a disk containing Missile Master
  and other programs.
3.If Missile Master is the only program on the disk, no more than $5US may
  be charged.
4.You must inform me by mail that you have decided to include Missile Master
  in your catalog.
5.You mail Nisus a copy of your catalog issue which contains Missile Master,
  and any review you might have done.

Electronic Bulletin Board Systems
---------------------------------
    You are hereby granted a non-exclusive license to
include Missile Master Shareware Version on your BBS
provided:

1.There is no additional charge (on top of regular on-line
  charges) for downloading.

User Groups
-----------
    You are hereby granted a non-exclusive license to
distribute/share a copy of Missile Master Shareware Version
with any member of your user group.

Individuals
-----------
    Individuals are encouraged to distribute Missile Master
Shareware Version by any means, providing that no
compensation be received, except that of the value of a disk
if one is given away with the program.

================
Contacting Nisus
================
If you wish to contact Nisus Development & Technology to
report bugs, submit comments or for any reason other than
registration (see how to register), use one of
the following:

Mail
----
Nisus Development & Technology
PO Box 703, Station 'A'
Toronto, ONT   CANADA
M1K 5C4

Phone
-----
(416) 261-7866
Nisus can be reached most weeknights and weekends between
the hours of 6:00pm and 10:00pm Eastern Standard Time.  An
answering machine will be very happy to take a message if no
one is home.
NOTE: Major phone support will be provided to registered
users only.  If you require minor assistance, or wish to
make comments or bug reports, phone support will be provided
to non-registered users.

Compuserve
----------
Scott A. Murray, President of Nisus, can be reached at
Compuserve ID# 70571,1647

Internet
--------
To send a message via internet, send to
sa.murray@canrem.com

------------------------------ cut here --------------------------------

=================
Registration Form
=================

Send To         : Nisus Development & Technology
                : Attn: Missile Master Registration
                : PO Box 703, Station 'A'
                : Toronto, ONT   CANADA
                : M1K 5C4

Name            : __________________________________________________________

Company         : __________________________________________________________

Address         : __________________________________________________________

                : __________________________________________________________

City            : __________________________________________________________

Province/State  : __________________________________________________________

Country         : __________________________________________________________

Postal/Zip Code : __________________________________________________________

Phone Number    : __________________________________________________________

CompuServe ID   : __________________________________________________________

Internet Address: __________________________________________________________

Payment will be accepted by Canadian or U.S. cheque payable to Nisus
Development & Technology, or international money order (preferred method).
We are currently working on getting VISA merchant status, please call for
availability.  Please allow up to 30 days for delivery.

Specify Disk Format (Circle only one):  1.2meg 5.25"    1.44meg 3.5"

031693262

QTY    Description                      Unit Price                Total

_____  Nisus Missile Master (latest)   $ 17.00 Cdn* ($ 14.45 US)  __________

_____  Shipping and handling add       $  3.00 Cdn* ($  2.55 US)  __________

_____  Overseas Shipping add           $  5.00 Cdn* ($  4.25 US)  __________

                                Ontario Residents Add 8.00% PST   __________

                                                    GRAND TOTAL ____________

*Note: Other currencies please use current exchange rates and remit in
Canadian funds by money order, or cheque drawn on a Canadian bank.

Please take some time to answer the following questions.  I am gathering this
information to better understand my user base, and tailor future applications
accordingly.

Where did you obtain Missile Master?

A) Friend                       B) Bulletin Board System
C) Shareware Distributor        D) Retail Outlet
E) Other

If B, C, D or E above, please specify:

____________________________________________________________________________

What type of computer and hardware do you play Missile Master on?

CPU
A) 386sx                B) 386/20
C) 386/33               D) 386/40
E) 486sx                F) 486/33
G) 486/50               H) 486/66
I) Other  _______________

VIDEO
A) EGA graphics         B) VGA (320x200)
C) VGA (640x480)        D) VGA (800x600)
E) VGA (1024x768)       F) Other  _______________

COLORS
A) Monochrome           B) 16 colors
C) 256 colors           D) 32,000 colors
E) Other  _______________

SOUND
A) Sound Blaster        B) Sound Blaster Pro
C) Adlib                D) Gravis Ultra Sound
E) ATI Stereo FX        F) Thunder Card
G) Roland               H) Pro Audio Spectrum
I) Other  _______________

If you have any suggestions and/or comments, please use the space below.

____________________________________________________________________________

____________________________________________________________________________

____________________________________________________________________________

____________________________________________________________________________

____________________________________________________________________________

May we use your comments in our documentation?  YES ____  NO ____

Thank you for your time!


------------------------------ cut here --------------------------------

Please read the online help from within Missile Master for
more details.  All information and much more is provided
online.

END OF DOCUMENTATION
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3418

     Volume in drive A has no label
     Directory of A:\

    MISSILE  ZIP    315874   3-17-93  10:50a
    PKUNZIP  EXE     29378   2-01-93   2:04a
    GO       BAT        31   6-04-92   2:25a
    GO       TXT      1540   2-09-92   1:55a
            4 file(s)     346823 bytes
                           13312 bytes free
