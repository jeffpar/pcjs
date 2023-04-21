---
layout: page
title: "PC-SIG Diskette Library (Disk #1281)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1281/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1281"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "NIRVANA"

    When you enter this world of Wimsey, an incredible interactive fantasy
    awaits you.  You will explore uncharted territory, solve ingenious
    puzzles, and talk to fascinating and sometimes deadly characters.  Your
    quest: Destroy the Ice Maiden, Nirvana, and end the monthly
    disappearance of young men from the village.
    
    Nirvana can only be destroyed by ringing a crystal bell.  You must find
    the bell, enter her dark castle and destroy her.  Otherwise, a fate
    worse than death awaits you.  Here is a good thinking person's game with
    a vocabulary of more than 1,000 words you can use when speaking to the
    characters you meet.
    
    This program can also be used as a door on some bulletin board services.
    Check your BBS software to see if it has this capability.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1281.TXT

{% raw %}
```
Disk No: 1281
Program Title:  NIRVANA version 3.1
PC-SIG version:  1.1

When you enter this world of Wimsey, an incredible interactive fantasy
awaits you.  You will explore uncharted territory, solve ingenious
puzzles, and talk to fascinating and sometimes deadly characters.  Your
quest: Destroy the Ice Maiden, Nirvana, and end the monthly
disappearance of young men from the village.

Nirvana can only be destroyed by ringing a crystal bell.  You must find
the bell, enter her darkling castle and destroy Nirvana.  Otherwise, a
fate worse than death awaits you.  Here is a good thinking person's game
with a vocabulary of more than a thousand words you can use when
speaking to the characters you meet.

This program also has the capability of being used as a door on some
bulletin board services.  Check your BBS software to see if it has
this capability.

Usage:  Game.

Special Requirements:  None.

How to Start:  Type GO (press enter).

Suggested Registration:  $2.00

File Descriptions:

NIRV     D1   Data file.
NIRV     D2   Data file.
NIRV     D3   Data file.
NIRV     D4   Data file.
NIRVANA  DOC  Program documentation.
NIRVANA  EXE  Main program.
NIRVTECH DOC  Technical documentation
BULLETIN 1    BBS contest information.
NIRVXTR  EXE  Sub-program.
README   1ST  Start-up information.

PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1989 PC-SIG, Inc.

```
{% endraw %}

## NIRVANA.DOC

{% raw %}
```

 
 


 
 
                  Wimsey Games BBS, (404) 255-8646, presents 
 
 
                                 N I R V A N A 
 
 
                       An Adventure in the World of Wimsey 
 
 
 
                        Copyright (c) 1989 by Wimsey Co. 
                          235 River Springs Dr., N.W. 
                               Atlanta, GA 30328




You may copy and use this product and documentation complete and without
modification, provided that:
(a) if you run NIRVANA offline, you must register your copy by sending $2.00 to
    Wimsey Co. with your name and address;
(b) if you run NIRVANA online, you must register by mailing to us a letter or
    postcard (costs 15 cents postage) stating the version of NIRVANA, along
    with your name, the name and phone number of your BBS or business, your BBS
    software type and version number, and your mailing address (unless you ask
    us not to, we make this information public); and you must display at
    least the first sentence of the file BULLETIN.1 online as a news item or
    bulletin until the First Wimsey Contest is over, and make the Nirvana
    archive file freely available for download by your users.
All other rights are reserved.  TO REGISTER: Write to Wimsey Co., 235 River
Springs Dr. NW, Atlanta, GA 30328.

THIS SOFTWARE AND ACCOMPANYING MATERIALS ARE DISTRIBUTED "AS IS" WITHOUT
WARRANTY, EXPRESS, IMPLIED OR STATUTORY, INCLUDING BUT NOT LIMITED TO ANY
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE.  IN
NO EVENT SHALL ANYONE INVOLVED WITH THE CREATION AND PRODUCTION OF THIS PRODUCT
BE LIABLE FOR INDIRECT, SPECIAL, OR CONSEQUENTIAL DAMAGES, ARISING OUT OF ANY
USE THEREOF OR BREACH OF ANY WARRANTY.







                               TABLE OF CONTENTS


                      LOADING THE GAME . . . . . . . . 1

                      YOUR MISSION . . . . . . . . . . 2

                      HOW TO TALK TO NIRVANA . . . . . 3

                      SAVING & RESTORING . . . . . . . 4 
 
                      FURTHER ADVENTURES  . . . . . . .5
 
 
 

 
 
1 
LOADING THE GAME 
 
To run NIRVANA, you need an IBM PC or compatible running MS-DOS 2.0 or later, 
at least 256K of RAM, a 360K disk drive and a monochrome or color display. 
 
1.  Start your machine running MS-DOS.
2.  Place the NIRVANA files on a diskette in Drive A (or in the current
    directory of your hard disk).
3.  Type NIRVANA and press return.  (To stop snow on the screen, try typing
    NIRVANA /S.)

When you have correctly loaded NIRVANA, the disk will spin for approximately 20
seconds while the program is loaded into your machine, and on the screen there
will appear "NIRVANA An Adventure in the World of Wimsey."  If it does not,
then check the following:

1.  Check that the game diskette is properly oriented in the disk drive and
    that the drive door is closed.
2.  Check that the drive containing the game diskette spins.
3.  Inspect the diskette carefully for visible damage.

 
2 



         YOUR MISSION

         It is long ago in the magic land of Cornwall, where the
         Village of Lostwithiel nestles in the shadow of Bald
         Mountain.

         There is an evil curse upon the land.  Each month, at the 
         full of the moon, a young man disappears from the village, 
         never to return.  He has been bewitched by Nirvana  the Ice
         Maiden.  She lures him to her marble palace atop Bald 
         Mountain, where he faces a fate worse than death. 
 
         Nirvana can only be destroyed by ringing a crystal bell.  
         Your quest is to find the bell, ring it in her presence and 
         so dispel the evil curse. 




3

          How to talk to NIRVANA

          Commands may be typed when the prompt (>) appears on the screen.

     For example:

               >TAKE THE BOTTLE.

          End the commands with a carriage return (sometimes called
          <ENTER>).

          Talk to NIRVANA by typing commands in plain English.  NIRVANA
          does not understand questions or statements, only commands.
          You may type several commands on one line separated by periods.

    For example:

               >OPEN THE GATE.  LEAVE.  GO RIGHT.

          For more extensive help, type HELP at the prompt (>).

4 
    SAVING & RESTORING

    When you save your game position, use a formatted disk with at least 40 K
    bytes of unused space.  The program can create up to twenty storage files
    numbered 1 to 20.  You will be prompted to select a number, to insert the
    save disk in the current drive during save and restore, and to reinsert the
    game disk in the current drive to resume play.  To retrieve the saved game
    position, type RESTORE and enter the file number you saved the position
    under.

    If SAVE or RESTORE do not work, check the following items:
         1.   Check that the diskette is properly oriented in the disk
              drive, and the disk drive is closed.
         2.   Inspect the disk for visible damage.
         3.   If you have more than one disk drive, be sure the diskette
              is in the correct drive, and that that drive spins.
         4.   Be sure the diskette is formatted and not write-protected
              (i.e.  that there is nothing covering the notch on the side
              of the diskette).
         5.   Try using a different diskette.


5 
 
 
 
 
 

 
          FURTHER ADVENTURES -- MOONSTONE 
 
          Nirvana is a World of Wimsey game in miniature. 
 
          Prepare for high excitement as you explore the magical 
          land of Moonstone, a FULL SCALE Wimsey adventure! 
 
 
 
 
 
 
 
 

```
{% endraw %}

## NIRVTECH.DOC

{% raw %}
```







NIRVANA TECHNICAL INFORMATION FOR SYSOPS

Wimsey Co. presents NIRVANA 3.1, with door interface for PCBoard v. 11.8 thru
14, adaptable to other boards.  Discard older versions.  The differences among
versions 3.0 through 3.1 relate to the operation of the door program.

Nirvana is a premium BBS door program.  It is very easy to install on most BBS
systems.  There is NO CHARGE required to run the door version, but YOU MUST
REGISTER your copy of Nirvana for use on your BBS.

This file provides information to BBS Sysops for registering and setting up the
Nirvana program as a BBS online game door.


THE LEGALESE

NIRVANA 3.1, Copyright (c) 1989 by Wimsey Co.  You may copy and use this
product and documentation complete and without modification, provided that:

(a) if you run NIRVANA offline, you must register your copy by sending $2.00 to
    Wimsey Co. with your name and address;

(b) if you run NIRVANA online, you must register by mail or online telling
    Wimsey Co. the version of NIRVANA, along with your name, the name and phone
    number of your BBS or business, your BBS software type and version number,
    and your mailing address (unless you ask us not to, we make this
    information public); and you must display at least the first sentence of
    the file BULLETIN.1 online as a news item or bulletin until the First
    Wimsey Contest is over, and make the Nirvana archive file freely available
    for download by your users.

All other rights are reserved.  See NIRVANA.DOC for disclaimer of liability.

A gentle reminder to those who fail to register: you are subjecting yourself to
legal liability.  Willful violations of the Copyright Law of the United States
can result in civil damages of $50,000.00 plus actual damages, and criminal
penalties.  It's the law.  Thank you for registering.







    List of files:

NIRVANA.EXE    NIRV.D1      NIRV.D3       NIRVANA.DOC  (Player manual)
NIRVXTR.EXE    NIRV.D2      NIRV.D4       NIRVTECH.DOC (This document)
README.1ST     BULLETIN.n









1




REGULAR FEATURES OF NIRVANA DOOR

  - Easy to install.  Runs on PCBoard, RBBS, Opus, TBBS, Wildcat, WWIV, QBBS,
    NOCHANGE, Auntie, GT PowerComm, Asgard, and other BBS software worldwide.

  - Optional SAVE feature allows users to save a game position.  This option is
    available to sysops with PCBOARD.SYS file who register for the save feature
    (see REG below).

  - Creates a Top 10 Players bulletin, if you have a PCBOARD.SYS file.

  - Does not drop carrier, and terminates cleanly through exit code, so your
    BBS software can log off user.

  - A commercial message that appears in offline mode does not appear when you
    run Nirvana on your BBS system.

  - Runs in most multi-tasking and network environments including DoubleDOS
    two node operation, LANtastic, and with US Robotics Courier HST 9600 baud
    modem when properly configured.  (See notes to multi-node users and to
    high speed modem users.)


SPECIAL FEATURES OF NIRVANA DOOR

If you designate COM1 or COM2 in the configuration file, the following special
features are also in effect.  (If you don't designate COM1 or COM2 you may use
a redirection method such as DOORWAY, described below.)

  - Sysop function keys to return to the board, toggle screen on and off, and
    for chat mode:

     <Home> This key displays a status line on the local screen.  (If you do
            not use DOS SCREEN, the status line always appears on line 1 and
            Home has no effect.)

      F8    Terminates the program, returning control to the board.

      F9    Toggles the local screen on and off.

     F10    Chat mode.  (Escape to exit chat mode)

  - Detects lost carrier, operates at 8N1 or 7E1, ignores Control-C from modem.

  - Supports interrupt driven com port I/O.

  - Carrier must be present.  Does NOT operate in local mode.

  - Gives warnings and terminates if keyboard is inactive and when time is up
    (bell is not sounded locally).











2






To install NIRVANA you will need to write a BATCH FILE and a CONFIGURATION
FILE, as described below:


BATCH FILE SETUP

Create a batch file to invoke the program.  Suggested setups:

For a Single Node      For Multiple Nodes
                       Node 1
NIRV.BAT               NIRV1.BAT
--------------------   -------------------
CD C:\NIRVANA          CD C:\NIRVANA         {change to NIRVANA directory}
NIRVANA.EXE NIRV.CFG   NIRVANA NIRV1.CFG     {invoke NIRVANA}
CD C:\PCB              CD C:\PCB1            {your board's main directory}
BOARD.BAT              BOARD1.BAT            {return to the board}
--------------------   -------------------

For PCBoard:

  - Put the NIRV batch file in the \PCB directory, and leave off the .BAT file
    extension.

  - Run PCBSETUP's File Name option and designate a DOOR's Data File called
    DOORS.DAT.

  - Run PCBSM or PCBSETUP and edit the Doors Listing (DOORS.DAT) to include a
    line in the form <door batch file name>, <password>, <security level>.  If
    the optional password is omitted, the command "type doors.dat" shows an
    entry in the form:

             NIRVANA,,20

  - The DOORS.DAT file for each applicable conference needs an entry.

  - If your DOORS.DAT is shared between nodes, you can call each batch file
    NIRV, but place a different NIRV in the "\PCBn" subdirectory for each node.


For non-PCBoard:

  - Nirvana works fine without a PCBOARD.SYS file.  However, this file is
    needed for the scoreboard and save the game features to operate.

  - Programs exist to create a PCBOARD.SYS file for a variety of BBS types.
    If possible, use such a program and set up the configuration as if you ran
    PCBoard.

  - The scoreboard bulletin function takes the user name from PCBOARD.SYS.

  - The SAVE function takes the user record number from PCBOARD.SYS.  This
    works best when a different and consistent user record number is supplied
    for each user.  Otherwise, you could tell users that SAVE works for the
    current session only and add add the following line to your NIRV.BAT file:

             IF EXIST N-*.SAV DEL N-*.SAV



3





CONFIG FILE SETUP (ENTRIES CAN BE IN ANY ORDER)

Make a \NIRVANA directory containing the distribution NIRVANA files and a text
file called NIRV.CFG.  (Multi-node users see NOTES FOR MULTI-NODE USERS on last
page.)

The following examples document the configuration file setup.  Each entry can
go in ANY ORDER, but must be on a separate line.  Each entry is more fully
described later.


NIRV.CFG file for users with a PCBOARD.SYS file on C\:PCB:
---------------------------
BBS=<Your BBS's Name>       {registered BBS Name shows up on initial screen;
                             this entry is required}
COM1                        {select COM1 or COM2}
PCB14SYS=C:\PCB\PCBOARD.SYS {path of PCBOARD.SYS file, version 14}
 { or }
PCB12SYS=C:\PCB\PCBOARD.SYS {path of PCBOARD.SYS file, versions 11.8 thru 12.1}
TOP10=C:\PCB\GEN\BLT7       {location of Bulletin file "Top 10 Players"}
SAVE                        {option allows player to save and restore a game
                             position, when you register online on our BBS}
REG=00000                   {Registration number, needed for SAVE to work}
---------------------------


Options for multi-node PCBoard: (See NOTES FOR MULTI-NODE USERS on last page.)
---------------------------
SCORE=E:\NIRVANA\SCORE.DTA  {one file for all multi-node scores data}
SAVE=E:\NIRVANA\            {one directory for all multi-node save files}
---------------------------


NIRV.CFG for non-PCBoard:
---------------------------
BBS=<Your BBS's Name>       {registered BBS Name shows up on initial screen;
                             this entry is required}
COM1                        {select COM1 or COM2}
MINLEFT=60                  {caller time remaining, if no PCBOARD.SYS file}
---------------------------


Options for both PCBoard and non-PCBoard:
---------------------------
BIOS MODEM                  {selects BIOS calls for modem I/O}
DOS SCREEN                  {all local I/O via DOS calls, for multi-tasking
                             and allows I/O redirection as described below}
NUL SCREEN                  {screen off till toggled, for multi-tasking,
                             add this after the door is working}
---------------------------










4




DESCRIPTION OF CONFIG FILE ENTRIES:


BBS=Your BBS Name

When you have mailed your sysop registration postcard or registered online, you
may insert your registered BBS name here and it will show up on the initial
screen.  You must insert a name containing at least six characters and spaces
for the program to run online.


COM1 or COM2

You must designate a Com port for the special features to work (except for
DOS SCREEN, which can work by itself to enable redirection of I/O as described
later.)


PCB14SYS=C:\PCB\PCBOARD.SYS or PCB12SYS=C:\PCB\PCBOARD.SYS

The program gets the user name and user record number and time left from the
PCBoard.SYS file.

Use PCB14SYS= for version 14 and PCB12SYS= for PCBoard versions 11.8 thru 12.1.
After the =, show the full path and name of your PCBoard.SYS file.


TOP10=[<drive:>]<pathname>

If you designate a PCBOARD.SYS file, a one-screen "SCOREBOARD" bulletin file
will automatically be maintained.  You may optionally designate the path and
file name by a config entry such as TOP10=C:\PCB\GEN\BLT7, so this bulletin can
be accessed from a BBS bulletin menu.  This file may be deleted and will
automatically be re-created during play.

Note:
    If your BBS reads bulletins from a RAM disk, then designate the RAM disk in
    the config file, but also place the following entry in the batch file which
    initializes your RAM disk.  This will create a current bulletin when your
    RAM disk is created:  (Spaces are significant separators.)

    [<drive:>][<path>]NIRVANA.EXE TOP10=[<drive:>]<path> SCORE=[<drive:><path>
    E.G. C:\NIRVANA\NIRVANA.EXE TOP10=D:\BLT7 SCORE=E:\NIRVANA\SCORE.DTA


SAVE

This optional feature enables the user to save a game position.  It is
available without charge to sysops who register online (see REG below), and who
have a PCBOARD.SYS file.  The program saves one game position per player in a
separate 4 K file under the name N-nnnnn.SAV, where nnnnn is the user record
number as read from PCBOARD.SYS.  These save files would need to be deleted or
renamed if your BBS user file is packed or sorted.  Verify installation of this
feature by entering 'save' at the '>' game prompt.


REG=nnnnn

Sysops can register without charge to receive a registration number that
enables the SAVE the game feature.  See SYSOP REGISTRATION below.

5



SCORE=[<drive:>]<pathname>

If you designate a PCBOARD.SYS file, an internal score data file will be
maintained.  You may optionally designate the path and file name by a config
entry such as SCORE=E:\NIRVANA\SCORE.DTA, so that this file can be accessed
from several nodes and keep system-wide score results.  This file should be
kept on a non-volatile (hard or floppy) disk.  This non-readable file contains
the source data used to create the readable "SCOREBOARD" bulletin, which is
placed with your other bulletins, even if on RAM disk.  If this file is
deleted, Nirvana starts a new one.


MINLEFT=n

If you don't specify a PCBoard.Sys file, this option lets you set the number of
minutes for the session in the range 0 to 700.  (The default is 30 minutes.)

The program gives the warnings "Three minutes left!" and "Time is up!" and
terminates, so user is returned to your BBS software.


BIOS MODEM

This option uses BIOS calls for all modem control and I/O, instead of reading
and writing directly to the serial port registers.  This was Nirvana's original
(tried and true for many) modem I/O.  Let us know if you need this--we might
want to remove it from future releases.


DOS SCREEN

This makes the program do local output through DOS calls, rather than writing
into screen memory.  The local status line is suppressed, so use this only if
needed, such as on a multi-tasking system or to enable I/O redirection.

DOS SCREEN takes priority over /S, described in NIRVANA.DOC, which does local
output through BIOS calls.


NUL SCREEN

Multi-taskers use this to suppress local screen output (bleed through) at the
start of the program.  This may be toggled by pressing F9, as described below.


REDIRECTION OF INPUT/OUTPUT AS A METHOD OF DOOR INSTALLATION

To redirect NIRVANA's input/output to a com port by DOS redirection methods
such as CTTY COM1 and the DOORWAY program, use DOS SCREEN and do not use COMn.
Other config file entries are optional.  NIRVANA's special door features will
not be in effect.  This version of NIRVANA and Gateway are not compatible.

For the DOORWAY program, set up a batch file such as (see DOORWAY's
documentation for details):

            CD \NIRVANA
            <path>\DOORWAY COM1 /B:M /G:ON /S:\PCB\ /P:NIRVANA.EXE NIRV.CFG
            CD \PCB
            BOARD.BAT



6


HIGH SPEED MODEM CONFIGURATION

Our users report that they have trouble using the US Robotics HST modem for
Nirvana and other doors unless it is properly configured.  Try setting $Y3 to
prevent the modem from clearing its internal buffer when a break is received.
It might also help to set &R1 to ignore RTS.


NOTES FOR MULTI-NODE USERS

This version of Nirvana writes data files to disk.  DOS SHARE.EXE file locking
only (not record locking) is required for file sharing compatibility.  At this
writing, Multi-node DOS file-level locking has been tested in a limited range
of environments, including networks and multi-tasking.

Use a shared \NIRVANA directory for the SAVE file and the SCORE file by
specifying something like SAVE=E:\NIRVANA and SCORE=E:\NIRVANA\SCORE.DTA in all
nirv.cfg files.  The bulletin file can be shared or not.  All other files can
be in local \NIRVANA directories for each node (to minimize network traffic) or
in the single shared \NIRVANA directory containing a NIRVn.cfg file for each
node.


TESTING NIRV.CFG

If you use the command line NIRVANA.EXE TEST NIRV.CFG, the program will display
config file entries that it recognizes, and then halt.


SUPPORT!

If you find Nirvana and support worthwhile, please help out by mailing $20.00
or what you can afford.  THANK YOU FOR YOUR SUPPORT!


ONLINE SYSOP REGISTRATION IS EASY--CALL US!

You must register your copy of Nirvana for use on your BBS.  You may do this by
postcard or online on WIMSEY GAMES BBS in Atlanta, (404) 255-8646.

Once online, registration is speedy.  Just enter the Nirvana registration door
and you'll also receive a registration number without charge to enable the SAVE
& RESTORE feature.  Your questions and comments are welcome.  An effort will be
made to assist with or correct any problem.

     Bill White, Wimsey Co., 235 River Springs Dr. NW, Atlanta, GA 30328


SYSOP REGISTRATION FORM for Nirvana Version 3.1

My name:   ____________________   Note:  Sysops may register online on Wimsey
                                         Games BBS, (404) 255-8646 and get
BBS Name:  ____________________          immediate ability to save and restore!

Address:   ________________________________________

BBS phone number: _____________  BBS/Network Software type: ____________

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1281

     Volume in drive A has no label
     Directory of A:\

    BULLETIN 1         567   4-06-89   7:35p
    FILE1281 TXT      1448   7-22-89   8:15a
    GO       BAT        38   1-11-89   1:55p
    GO       TXT       540   1-17-89   4:44p
    MANUAL   BAT       153   8-24-89   4:20p
    NIRV     D1      13518   4-06-89   8:14p
    NIRV     D2       4352   4-06-89   9:54p
    NIRV     D3      49920   4-06-89   9:50p
    NIRV     D4       5347   4-06-89   7:36p
    NIRVANA  DOC      5843   3-31-89   1:20p
    NIRVANA  EXE    130448   4-06-89   9:57p
    NIRVTECH DOC     15752   4-06-89   7:37p
    NIRVXTR  EXE     61168   4-06-89   7:34a
    README   1ST      2009   4-06-89   7:38p
           14 file(s)     291103 bytes
                           23552 bytes free
