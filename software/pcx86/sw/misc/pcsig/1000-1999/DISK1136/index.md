---
layout: page
title: "PC-SIG Diskette Library (Disk #1136)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1136/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1136"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "SEARCHLIGHT BBS"

    Looking for a bulletin board system that's both powerful and
    easy-to-use? Take a look at SEARCHLIGHT BBS.
    
    Unlike other bulletin board systems, SEARCHLIGHT BBS is user friendly
    with both you (the system operator) and those who call in to your
    system. It has an easy to understand menu command system, so users who
    call in to your system need no documentation or help from you to use the
    bulletin board system. If any help is needed, the program has an on-line
    help system. Moreover, it has some significant features, such as
    optional ANSI graphics and color selections for the screen,
    customized menus, public message boards, private mail, a full-screen
    text editor (compatible with WordStar commands), and a file transfer
    system with both Xmodem and Ymodem transfer protocols.
    
    SEARCHLIGHT BBS has password protection and 255 levels of security,
    letting you control access to your system. Like other bulletin boards,
    this one can be left unattended while callers leave messages and
    transfer files to and from your board. The program lets you specify an
    upload/download ratio for all who use the file transfer system, so there
    is a fair trade-off of programs.
    
    There is a complete electronic mail system with up to 24 message
    subsections, each with up to 300 messages. SEARCHLIGHT BBS has enough
    system operator utilities so you can easily manage the system from a
    remote location, and also shell to DOS to run a program or DOS command.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1136.TXT

{% raw %}
```
Disk No: 1136                                                           
Disk Title: Searchlight BBS  (Disk 1 of 2)                              
PC-SIG Version: S1.3                                                    
                                                                        
Program Title: Searchlight BBS                                          
Author Version: 1.31                                                    
Author Registration: $35.00 to $95.00.                                  
Special Requirements: Hard drive, a modem, DOS 3.1, and PKUNZIP.        
                                                                        
Looking for a bulletin board system that's both powerful and            
easy-to-use?  Take a look a SEARCHLIGHT BBS.                            
                                                                        
Unlike other bulletin board systems, SEARCHLIGHT BBS is user friendly   
with both you (the system operator) and those who call in to your       
system.  It has an easy to understand menu command system, so users who 
call in to your system need no documentation or help from you to use the
bulletin board system.  If any help is needed, the program has an       
on-line help system.  Moreover, it has some significant features, such  
as optional ANSI graphics and color selections for the screen,          
customized menus, public message boards, private mail, a full-screen    
text editor (compatible with WordStar commands), and a file transfer    
system with both Xmodem and Ymodem transfer protocols.                  
                                                                        
SEARCHLIGHT BBS has password protection and 255 levels of security,     
letting you control access to your system.  Like other bulletin boards, 
this one can be left unattended while callers leave messages and        
transfer files to and from your board.  The program lets you specify an 
upload/download ratio for all who use the file transfer system, so there
is a fair trade-off of programs.                                        
                                                                        
There is a complete electronic mail system with up to 24 message        
subsections, each with up to 300 messages.  SEARCHLIGHT BBS has enough  
system operator utilities so you can easily manage the system from a    
remote location, and also shell to DOS to run a program or DOS command. 
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║               <<<<  Disk #1136 SEARCHLIGHT BBS   >>>>                   ║
╠═════════════════════════════════════════════════════════════════════════╣
║                                                                         ║
║     Use PKUNZIP to uncompress the files.                                ║
║                                                                         ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## UPDATE.DOC

{% raw %}
```

                -------------------------------------------
                     SEARCHLIGHT BULLETIN BOARD SYSTEM
                              by Frank LaRosa

                (c) Copyright 1987,88,89 Searchlight Software
                      PO Box 640, StonyBrook, NY 11790
                  BBS Support Line (516) 724-0971 (HST 9600)

                -------------[ Version 1.31 ]--------------


Welcome to SLBBS version 1.31!

This file describes the new features found in Searchlight BBS versions 1.29 
through 1.31, relative to the original version 1.28 released on 4/1/88.

Additional SLBBS support is now available at The Wise Byte BBS, 212-962-1920 
located in New York City (NYNYO dialing code for those with PC-Pursuit). Ron 
Chibnik, the SYSOP of Wise Byte, is available to help with most SLBBS 
questions; I can be reached at Wise Byte as well if more technical help is 
required. For your convenience, both support boards are now using US Robotics 
HST modems supporting speeds up to 9600 baud.


Release 1.31  (8/26/89)
-----------------------
    In this version we add support for viewing PKZIP files, including Zip-
comments and file comments. The old ArcDir command is replaced with a new 
command, VIEW. The View command supports both ZIP and ARC files, but uses 
the .ZIP extension by default. To view ARC or PAK files, you must type in 
the entire filename including the extension.
    Some minor code changes were made and the programs are now compiled with 
Turbo Pascal 5.5.


Release 1.30a (4/26/89)
-----------------------
    This version was released primarily to update the READ.ME and order form
files, and does not include any significant code changes, although the code
was recompiled with some minor updates. A minor problem which prevented 
earlier versions from running under DOS 4.0 has been corrected. If you are 
running DOS 4.0, it is suggested that you use absolute pathnames (pathnames 
beginning with a drive letter or '\' character), rather than relative 
pathnames, in your CONFIG setup screens and *.DEF files.


Release 1.30  (11/03/88)
------------------------
    Version 1.30 is a minor update being released primarily to correct some
minor bugs in the code, revise the order form, and to ensure that all of the 
early 1.28 and 1.29 users get the latest update. In addition, Searchlight is 
now compiled with Turbo Pascal version 5.0, providing faster and smaller code 
than the previous release. 
    The following small changes were made:

  - The modem I/O and initialization code has been revised and improved.

  - The door handling routines have been updated. Specifically, the code
      has been revised so that it will no longer generate ANSI sequences
      when non-ansi users are running a door program.

  - A bug in the color routines has been fixed (caused incorrect colors to
      be displayed for some color combinations) 

  - The program no longer hangs if LOGIN.EXE cannot be found in the 
      specified program path. Instead, an error message is printed.

The documentation is unchanged.  


Release 1.29b (8/29/88)
-----------------------
    A couple of bugs were found in the original version 1.29, and are
corrected by this version:

  - The idle time limit did not work.

  - The download command always gave 1 minute as the d/l time; besides
      just being an annoyance, this allowed users to download way past
      their time limits.

  - The FILES program ran into an out-of-stack-space condition when more
      than 50 or 60 files were loaded.

  - The command prompt and other prompts were sometimes out of sync
      on the remote terminal.

  - The FILES program sometimes allowed unauthorized use of some of the
      commands (Edit, Move, etc).

  - The NEW message scan worked improperly. This was due not to a bug
      in the NEW command but to a bug in the initialization of new users.
      Version 1.29b will fix this bug, but your existing users will still
      see the problem. To correct it fully, you will need to download the
      program NEWFIX and run it on your system. NEWFIX is a new utility 
      that does some additional message checking beyond what the Check 
      command does; it will fix out-of-sync new message pointers. I will 
      be making NEWFIX available as widely as possible.


Release 1.29 (8/01/88)
----------------------

PROGRAM FILES
-------------
    Perhaps the most obvious change in SLBBS 1.29 is that the COM, CHN and 
overlay files of the previous version are gone, replaced by EXE files.  
While the change won't mean a whole lot to most, other than the fact that 
the new programs are somewhat smaller and faster, Turbo Pascal freaks will 
note that it signifies the upgrade to version 4 of the Turbo compiler. The 
EXE format gives us much more flexibility in program format, and at the 
very least the EXE files look a lot cleaner on your disk than the various 
COMs, CHNs and overlays of the previous version.
    To install this version over your old system, delete your old COM, CHN 
and overlay (BBS.000 and BBS.001) files and replace them with the six EXE 
files of the new system. If starting a new BBS, follow the instructions in 
our user's manual but replace all references to "COM" files with "EXE".  
Since there are no overlay files, the Overlay Path option has been 
eliminated from the CONFIG program.
     Please make sure you eliminate all version 1.28 executables before you 
begin with 1.29. Mixed program files are sure to cause errors.


SCREEN DISPLAY
--------------
    A major new feature is the addition of a BIOS/Direct video output 
switch (located on CONFIG menu #2). In the old version, Searchlight used 
direct screen writes for many operations (most notably in full screen 
editing) and thus could not be run as a "background" task in multitasking 
environments such as DesqView or TopView. With the new version, the option 
to use BIOS calls is available, and thus will allow you to run Searchlight 
in a window or as a background task without interfereing with other tasks. 
For those not interested in multitasking, the direct video capability is 
retained and will provide much faster screen displays.  
    A DesqView "PIF" file, SL-PIF.DVP, is provided in the 1.29 archive.
This file describes the settings needed to run Searchlight in a window 
under DesqView.
    Please note that althought you can now run Searchlight in a multi-
tasking system, you CANNOT use this version of the program to run a 
multinode BBS! If you try it (please don't), your system will quickly crash 
and your data files will become riddled with errors. To run multiuser, you 
must order our multinode version of the program which includes record 
locking logic (and many other features as well).  


FULL SCREEN EDITOR
------------------
    Searchlight 1.29 features a revised full screen text editor. We added 
needed new editor commands, added control-key equivalents for others, and 
increased the maximum message length to 250 lines. In addition, remote 
editing has been improved through the implementation of a new "ANSI 
Compatibility" switch.
    In previous versions, remote full screen editing required a robust ANSI 
terminal or terminal emulator, because Searchlight used many ANSI escape 
sequences to control the remote screen. This led to certain incompati- 
bilities, since many popular terminal programs claiming to support ANSI do 
not, in fact, support a very large subset of the ANSI functions.
    Beginning with this version, the full screen editor can be configured 
with a three-way compatiblity switch. When set to "Generic" mode, the 
editor uses only a few well-supported ANSI escape sequences to control the 
edit, and will work with virtually any ANSI terminal. The drawback is that 
editing will be slow, since much text will have to be resent. In "Full" 
mode, the editor will make maximum use of the available ANSI sequences for 
a very fast edit; if this mode is selected, you must use a full featured 
ANSI terminal or emulator on the remote end. Finally, a special mode called 
"ProComm" is provided for use with the ProComm (TM Datastorm Technologies) 
communications software. The ProComm mode is similar to the Full mode, but 
takes into account several quirks specific to ProComm.
    To select the appropriate mode, execute the Options command. A new 
option number 5 will be available. Move the cursor to the highlighed field 
and press the spacebar until the desired value is displayed.
    The LOGIN program briefly explains the ANSI modes available to new 
users and asks new users to select an appropriate mode when logging in for 
the first time. Established users will be set for "Generic" mode by default 
and should be informed to select an appropriate mode via Options.


USER TIME LIMITS
----------------
    By popular demand, the old system of "per-session" time limits, with a 
minimum time between sessions, has been replaced by a per-day time limit. 
All user time limits are now daily limits; for example, if a user has a 
time limit of 45 minutes and she uses 15 minutes when logging on in the 
morning, her time limit will be 30 minutes for her next call that day. At 
midnight, the full daily time limit is again available.
    In addition, time limit checking has been added between messages while 
reading public or private mail, and at the close of a DOOR. Thus, it is no 
longer possible for users to stay on the system longer than their time 
limits when reading mail or messages, or running repeated Doors.
    The old "Min. Time Between Calls" parameter has been removed from the 
CONFIG menus.


IDLE TIME LIMIT
---------------
    An idle time limit feature has been added. Searchlight will now detect 
when a certain amount of time has passed without keyboard activity, and 
automatically restart the system. The time delay can be found on Config 
menu #1 and should be set to between 5 and 15 minutes. A value of zero 
disables the idle time check.
    In addition, the system now checks the idle time limit while a DOOR is 
active in remote mode. Should the caller fail to press a key within the 
defined time, the BBS will treat it like a carrier loss, and either attempt 
to exit the running DOOR or reboot the computer. However, this will ONLY 
work if the DOOR program uses the BIOS INT 16 interrupt for the keystroke 
wait loops. For programs that implement their own loops, Searchlight will 
not enforce the idle time limit (note, however, that most DOOR programs do
include their own time limit checking).
   Finally, the "Hit any key to return to Searchlight BBS" message is now 
timed. If no key is hit in 1-2 minutes, the program returns to the BBS 
automatically.


ACTIVITY LOG FILE
-----------------
    The format of entries in the ACTIVITY.LOG file has been changed. The 
new format looks like this:

  880629 2243
Y 880629 2243  L - SYSOP

Notice that the date field is now expressed as "YYMMDD" and that both dates
and times now sport leading zeros. Also, the one-character field to the 
left of the username now contains "-" for visible login, in addition to "+" 
for invisible and "*" for new user.
    These changes have been made to make the log file easier to process 
with standard utilities such as GREP, AWK and SORT.


OTHER FEATURES AND CHANGES
--------------------------

 - A bug in the communications routines that caused the BBS to reset both
   COM1 and COM2, regardless of which port was selected, has been fixed.

 - General improvements in the communications routines have been included
   to help reduce initialization problems with the modem.

 - The ALT-H (Hangup) feature has been fixed.

 - The new mail scan ("Checking Your Mailbox...") can now be aborted if
   desired with ^C.

 - If you abort a Mail/List command, the program will now prompt you for a
   message number whereas previously the entire command was aborted.

 - A bug in the "include" file processing ("@@" and "%%") has been fixed.

 - Logoff quotes are now optional. A user can ignore the request for a
   quote when logging off by pressing the RETURN key. The "Logged off 
   improperly" message is replaced by "Did not leave a quote".

 - It is now possible to create and edit files with lines longer than 75 
   characters. Just append an underbar character "_" to the ends of long 
   lines, and they'll be connected to the next line when printed or written
   to disk. Text files loaded into the editor will have "_"s added where
   needed automatically.

 - The PCBOARD.SYS file format has been updated to reflect version 12.0 of 
   PCB. This should solve any previous problems with PCB door interfacing.  

 - Finally, several improvements have been made to the DOORS interface. 
   Handling of control keys has been improved, and the SLBBS program itself
   has been made both smaller and faster. A bug which prevented the remote
   screen from scrolling during DOS shells on some machines has been fixed.
   For those writing DOOR software, you can now access some of Search- 
   light's control variables through your program- see our sample program 
   "Door.Pas" for examples.  


---------------------------------------------------------------------------
                                                              Frank LaRosa

```
{% endraw %}

## QUICK.DOC

{% raw %}
```

                -------------------------------------------
                     SEARCHLIGHT BULLETIN BOARD SYSTEM
                      QUICK INSTALLATION INSTRUCTIONS
                              by Frank LaRosa

                 (c) Copyright 1987,88 Searchlight Software

                -------------[ Version 1.30 ]--------------


THE FOLLOWING INSTRUCTIONS are intended as a guide for experienced users of 
both MSDOS and BBS software.  The full documentation for Searchlight BBS is 
contained in the file SLBBS.DOC.  Use these instructions only if you're in a 
hurry to get your BBS up and running; consult the full manual for further 
information.



(1) Files List

  To begin the installation process, you need the following files:

  CONFIG.EXE  - Configuration/initialization program
  SLBBS.EXE   - Startup program/doors manager
  LOGIN.EXE   - Login/new user program
  BBS.EXE     - Searchlight BBS main program
  FILES.EXE   - Searchlight Files system
  SYSOP.EXE   - Searchlight Sysop program
  
In addition, the file TEXT.ZIP, containing the online help files, will be 
needed if online help is desired, although omitting the online help files is 
not an error.



(2) Installation

  Begin by creating a directory on your hard disk for Searchlight BBS; usually 
this directory is simply called BBS, although you may call it anything you 
like.  Make your BBS directory active and copy the above six files into it.



(3) File Setup

  The program CONFIG.EXE must be run first.  It creates the BBS's main data 
files and lets you configure your communications and other system options.  
Just type CONFIG and press RETURN.  CONFIG says,

  Searchlight BBS data files cannot be found.
  Do you wish to create them in the current directory (Y/N)?

Type 'Y' to proceed.  CONFIG creates six data files, as follows:

  CONFIG.BBS   - SLBBS configuration info
  USER.BBS     - User file
  MESSAGE.BBS  - Message file
  INDEX.BBS    - Subboard file
  LOG.BBS      - Call log file
  QUOTES.BBS   - Quotes file

These six files are used and maintained by the BBS system; these are the only 
six data files you need to run Searchlight BBS.  Of these six files, only 
USER.BBS and MESSAGE.BBS grow dynamically as more users and messages are added 
to the system.  The remaining files are static in length.



(4) Configuration

  Continuing with the CONFIG program, you should now see a menu with the items 
General Setup, Communications Setup, and Screen Colors Setup.  Select each 
section and edit the fields as desired.  Here is a brief rundown of the CONFIG 
options found in each section:

  (A) General Setup
  This section contains 19 fields for configuring your system's name, access
  levels assigned to new and validated users, path and file names, etc.  The
  most important item in this list is TEXT FILE PATH.  This field defines the
  path to the directory where SLBBS will look for its online help files, user
  defined text files (such as the login screen), custom menus, etc.  Type a 
  pathname here, such as "C:\BBS\TEXT", and be sure to create the directory
  with the MKDIR command after exiting CONFIG.
    The Program Path option lets you define the path where Searchlight's 
  EXE files will be found.  If left blank, the path defaults to the current 
  directory.  If nonblank, it can be used to allow you to place your 
  program files on a different drive (ie. RAMdisk) for faster access.  
    Consult the SLBBS main manual for a description of the other items.

  (B) Communications Setup
  These options configure your COMM port, modem speeds, and modem init 
  strings.  For the two init strings, use the ! character to generate a 
  carriage return, and ~ (tilde) to generate a 1/2 second pause.  Remote Init 
  String is trans-mitted to the modem each time the BBS resets itself for 
  another call.  Local Init String is issued during a local login; it 
  typically contains the string "ATH1!" to make the phone busy while the SYSOP 
  logs in.  
    Searchlight uses interrupt-driven input AND it will use interrupt-driven 
  output if the "Output Buffering Factor" is set to a nonzero value.  IF YOU
  EXPERIENCE PROBLEMS with modem I/O, try setting your Output Buffering Factor
  to zero.  Some RS232 adapters or internal modems do not work reliably with
  output buffering.
    The BBS waits for an "OK" message from the modem after issuing init 
  strings.  If no OK message is received, a warning message is printed.  
  Please consult the main manual for further information.  
    The "Direct Video" option found in this section lets you specify whether 
  direct writes or BIOS calls will be used for screen output. Select BIOS mode
  if running Searchlight in a multitasking, windowed environment; use Direct 
  otherwise.

  (C) Screen Colors Setup
  These fields define screen colors used by the program on color CRT's.  If 
  your CRT is monochrome, the colors selected will not affect you, but they
  will affect those users selecting the Color ANSI mode when logging in.
  Colors are expressed as numeric values from 0 to 15; the numbers correspond
  to screen colors as follows:

    (Dark Colors)          (Light Colors)
     0: Black               8: Dark Gray
     1: Blue                9: Light Blue
     2: Green              10: Light Green 
     3: Cyan               11: Light Cyan
     4: Red                12: Light Red
     5: Magenta            13: Light Magenta
     6: Brown              14: Yellow
     7: Light Gray         15: White



(5) Running Searchlight BBS

  After exiting CONFIG, you are ready to run SEARCHLIGHT BBS.  Simply type 
SLBBS on the command line and press RETURN.  You must be positioned in the 
"current" directory containing the six BBS data files to run Searchlight; 
otherwise, an error message will result.
  SLBBS.EXE is the startup file which will invoke the main program, BBS.EXE, 
login program, and other programs automatically.  Always run SLBBS, rather than
BBS.EXE or LOGIN.EXE, when starting Searchlight.  You can exit Searchlight BBS
and return to DOS at any time by pressing ALT-X.  You can log in to the system
locally by pressing the spacebar or RETURN key.  Other "hot keys" are described
in detail in the main manual.
  To log in, type the RETURN key, select [C]olor or [M]onochrome graphics, and 
enter SYSOP in response to the "Enter Your Name" prompt.  SYSOP is a default 
account created automatically by the initilization program.  Although most 
SLBBS operators use the SYSOP account, you can create other accounts for your-
self as neccesary.  BE SURE TO ASSIGN A PASSWORD to your SYSOP account with 
the OPTIONS command; otherwise, other users will be able to gain access to 
your system.



(6) Text Directory Setup
  
  The pathname specified as the "Text File Path" (item #13 on the General 
Configuration Menu) determines where Searchlight will look for certain text 
files, including online HELP files, menus, ANSI screens, etc.  If you left this 
field blank earlier, create a directory named TEXT and enter its pathname into 
the Text File Path.  Install the Searchlight online HELP files by unpacking the 
file TEXT.ZIP into this directory (or, if you did not receive your HELP files 
in archive form, copy all files with *.MH, *.SH, *.FH and *.TXT extensions into 
your text directory).
  Other files in the TEXT directory are files you create with a text editor or 
ANSI type editor.  Text files have the extension .TXT if the file is a general 
text file for all users, or .ANS if the file contains ANSI sequences.  You can 
create seperate versions of a file for ANSI and non-ANSI users; for example, 
if you have the files LOGIN.TXT and LOGIN.ANS, the TXT file is displayed when 
a user selecting non-ANSI graphics mode logs in, and the ANS file is used when 
an ANSI user logs in.  If you want to use one file for both, name it LOGIN.TXT.

Here are the files you can create.  All are optional.

  LOGIN.TXT/ANS   : Title screen, displayed with each login
  LOGOFF.TXT/ANS  : Ending screen, displayed at logoff
  NEWUSER.TXT/ANS : File displayed once for each new user
  MMENU.TXT/ANS   : File to replace the main HELP menu
  FMENU.TXT/ANS   : File to replace the files system HELP menu
  SMENU.TXT/ANS   : File to replace the sysop HELP menu

  SUBA.TXT/ANS    : Subboard message files, displayed once each time a user
  SUBB.TXT/ANS    :   accesses the indicated subboard.
     ...          :
  SUBX.TXT/ANS    :

In addition, the online HELP files (files ending in .MH, .FH, and .SH) are 
ordinary text files and may be edited if desired.



(7) Files and Doors Setup

  To use the FILE transfer system and the DOORS system, you first need to 
create two files, FILEDIR.DEF and DOORS.DEF.  These files should be present 
in the BBS's main working directory (same directory as the BBS data files).
These files must follow a strict format.  Please consult the main manual 
for complete details; check the table of contents under "Files System" and 
"Doors System".



(8) General Information

  Some general information and oft-overlooked points of interest:

Abort Key: At any time, the ^C key aborts messages, listings, or other 
  output in progress.  It is quite responsive in comparison to much other
  BBS software; use this key often.

Access Levels: Access levels go from 0 to 255.  In general, access levels 
  do not have any "absolute" significance, but are relative to the minimum
  access levels you set up on subboards, file directories, and DOORS.  The
  exceptions are access level 255, defining the SYSOP who has ultimate 
  access to all functions, and 254, defining a Co-SYSOP who has access to
  most features except things like changing his/her own access level, etc.

Help Files: Read the online help files if you want a fast overview of the
  system without reading the manual.  Just select a command on the main 
  menu and type the '?' key.  Press 'H', then RETURN, for a help menu.

Text Editor: Searchlight BBS's full screen, WordStar(TM) compatible text 
  editor works with most terminal software supporting the ANSI or VT100 
  terminal codes. A three-way setup switch (accessable via the Options 
  command) lets you configure the editor's level of ANSI support. In the 
  "Full" ANSI mode, the editor requires a robust ANSI terminal at the remote
  end to work correctly. "Generic" mode is a relaxed ANSI mode, requiring
  less support from the remote terminal but more modem I/O. "ProComm" mode
  is provided as a special mode for ProComm(TM) users.
     * FLASH * Telix 3.0 has been tested and found to work very well with 
  Searchlight when vt102 mode is selected within Telix. The only bug found,
  with Searchlight configured for "Full" ansi mode, was in Telix's
  implementation of the insert-character function. However, since ProComm 
  doesn't support that either, Telix works perfectly in Searchlight's 
  ProComm mode.  
  
Doors: The Searchlight BBS Doors System is much more powerful than DOORS 
  systems provided by other BBS software.  Rather than simply redirecting 
  output to the serial device, Searchlight completely replaces the BIOS INT 
  10 function, allowing ANY software that uses the BIOS to run as a door.
  Cursor positioning, window clearing, color/attribute changes, etc. are 
  supported by translation into appropriate ANSI terminal sequences.  On 
  the input side, F-Keys, cursor keys, and other special keys are trans- 
  lated from ANSI sequences to IBM extended keyboard codes.  What this 
  means is that you can run not only line oriented programs, but many full 
  screen programs as Doors.  The best way to see if a program will run as a 
  Door is to simply try it; make sure you use an ANSI compatible terminal 
  and run in ANSI mode if the door program uses full-screen features.  

ShareWare vs. Extended Version: This ShareWare version of Searchlight BBS 
  is NOT a stripped-down or modified version of our Extended Version.  It
  is a powerful, flexible program in its own right.  We offer the Extended
  Version as an advanced Searchlight BBS offering more features and more
  flexibility to those who need it.  If you are unsure, you can use this
  version now and upgrade later.  Please consult the READ.ME file contained
  in this package for complete details and order forms.



(9) Technical Comments

  Finally, here is some information for the technically oriented.

Language: Searchlight BBS is written in Turbo Pascal.  Versions starting 
  with 1.30 are compiled with Turbo 5.0 and are distributed as .EXE files.
  Earlier versions were compiled with Turbo 3.0 and included .COM, .CHN, 
  and overlay (.000, .001, etc) files.

User File: Searchlight's user file (USER.BBS) is implemented as a binary 
  tree. The tree is not maintained as a balanced or AVL tree, but it may be 
  balanced on demand with the BALANCE function on the Extended Sysop Menu.
  Deleted records are maintained internally on a free record list, and 
  reused automatically; when no free records exist, the file is expanded.

Message File: Searchlight BBS maintains messages as linked lists of data 
  blocks in the MESSAGE.BBS data file.  Messages do not occupy fixed 
  amounts of storage but allocate as many blocks as is needed for the 
  message.  Deleted message blocks are maintained in a free block list, and
  reused automatically.  MESSAGE.BBS contains text of all messages, mail, 
  and bulletins on the system.
    Message texts are compressed before being stored according to one or
  both of two simple compression algorithms.  Compression reduces the size
  of the message file 10-15%.
    User mailboxes are implemented as linked lists of messages; thus, there
  is no limit on the number of messages that may be in a user's mailbox.

  Both the USER and MESSAGE files are totally self-maintaining; no 
  "packing" type operations need be performed.  Deleted file space is 
  automatically and efficiently reused.  

Directory Files: Each .DIR file is stored as a binary tree with an extra 
  set or pointers forming a chronological list.  Thus, all single file 
  references, alphabetical file lists, and NEW message scans are extremely 
  efficient; only wild-card searches require the entire file to be 
  processed.  


Limitations: The following values apply ONLY to ShareWare versions of 
  Searchlight BBS, and are subject to change in future versions:

  Subboards: The number of message subboards is fixed at 24.

  Messages: The maximum number of messages that may be posted on any 
    subboad is 290. In Extended Versions, this has been increased to 480.

  Message File: The message file is subject to an upper limit of approx-
    imately 3.1 megabytes.  Searchlight BBS will return an "out of disk
    space" message if this limit is reached (this represents thousands of
    messages). The size limit is doubled to 6.2mb with Extended Version.

  File Directories: The maximum number of entries in each FILEx.DEF file
    is 26.  However, you can have up to 24 seperate FILEx.DEF files,
    giving you thousands of file system options.

  Doors: For readability only, it is suggested that each DOORSx.DEF file 
    contain less than 20 entries.  You can chain DOOR menus and you can 
    have seperate DOOR listings for each subboard.

```
{% endraw %}

## SLBBS.DOC

{% raw %}
```
.R:E
.X:12
.H:...LICENSE STATEMENT AND WARRANTY
.H:
.H:

SEARCHLIGHT SOFTWARE LICENSE STATEMENT

This software and printed documentation are copyrighted products of myself 
and of Searchlight Software, and are protected by both United States 
copyright law and International Treaty provisions. As the purchaser of this 
software, you are allowed to make archival copies solely for your own 
purposes and to protect your investment from loss.  

You may NOT transfer any copy or copies of this software to any person or 
organization UNLESS you transfer ALL of the copies that you own, and there 
is NO POSSIBILITY that the software can be used by two or more persons at 
different locations at the same time. For example, should you wish to sell 
or give away your copy of the software, you may do so provided that you 
transfer the original disk(s) and manuals to the new owner, and either 
erase any other copies you may have, or transfer these copies to the new 
owner as well.  

You may not copy this printed manual in any way.  



WARRANTY

With respect to the physical diskette and physical documentation enclosed 
herein, Searchlight Software warrants the same to be free of defects in 
materials and workmanship for a period of 60 days from the date of 
purchase. In the event of notification within the warranty period of 
defects in material or workmanship, Searchlight Software will replace the 
defective diskette or documentation. The remedy for breach of this warranty 
shall be limited to replacement and shall not encompass any other damages, 
including but not limited to loss of profit, special, incidental, con
sequential, or other similar claims.  

Searchlight Software specifically disclaims any other warranties, expressed 
or implied, including (but not limited to) implied warranties of merchant
ability and fitness for a particular application. In no way shall Search
light Software be liable for loss of profit or any other commercial, 
special, incidental, consequential, or similar damages.



ACKNOWLEDGEMENTS

The following applies to the entire contents of this manual as well as to 
the online system documentation: 

Turbo Pascal is a trademark of Borland International, Inc.  

MS-DOS is a trademark of Microsoft Corporation.

Hayes is a trademark of Hayes Microcomputer Products, Inc.

Wordstar is a trademark of Micropro International Corporation.

IBM and IBM PC, PCJr, XT, AT and PC-DOS are trademarks of International 
Business Machines Corporation.
.L:63
.N:1
.F:
.F:
.F:...$$$
.H:...INTRODUCTION
.H:
.H:


INTRODUCING SEARCHLIGHT

The Searchlight Bulletin Board System (BBS) is a program that allows you to 
set up and run a remote access message system.  Using your computer, a 
modem, and the Searchlight software, you'll have a complete bulletin board 
system that will

   - Allow others to access your PC via telephone and exchange mail and
     other messages, even when you are not at your computer.

   - Provide password access and multiple levels of security, enabling you
     to control exactly who has access to what information on your system.

   - Allow unattended, error-free transfer of programs and data to and from 
     your PC and other PC's via telephone.

   - Provide a complete, user friendly environment that's easy enough for 
     most people to use intuitively, without the need for any printed 
     documentation or assistance from you.

Those familliar with the BBS community, and especially those who have used 
other BBS software, will appreciate the Searchlight's long list of powerful 
functions and enhancements:

    - Wordstar compatible full screen text editor makes it easy to enter 
      and edit text and messages, even from a remote terminal.

    - Unique user interface with built in Online Help facility gives both 
      you and your users full access to the system's documentation.

    - ANSI graphics support for flexible screen displays.

    - Full security system with 255 levels of access.

    - Up to 24 message subsections, up to 300 messages per section.

    - Complete Electronic Mail system.

    - SYSOP utilites allow you to adjust most aspects of the system to your 
      liking and give you powerful mass deletion commands.  You can control 
      the entire system from a remote location.

    - FILES system featuring alphabetical and date sorted directories, 
      passwords and access levels, XMODEM and YMODEM transfers, archive
      directories, etc.  FAST file transfers with advanced buffering 
      techniques.

    - DOORS system gives you infinite expandability: run almost any program 
      from within your BBS, write your own commands (in any language), even 
      give DOS commands from a remote terminal.  Searchlight is compatible 
      with many of the popular PCBoard(TM) door programs.


WHAT DO I NEED TO RUN SEARCHLIGHT BBS?

The answer:

    - IBM PC, XT, AT or true compatible
    - Hayes compatible modem
    - RS232 serial port and modem cables (for external modems only)
    - At least 256K of memory
    - DOS 2.0 or higher

Although the program has been successfully tested on many compatibles (and, 
indeed, has not yet proved incompatible with any of them), we cannot 
guarantee that it will run on every computer.  In particular, your serial 
ports must be hardware-compatible with IBM's, since neither DOS nor the 
BIOS provides adequate RS232 support, and the BBS impliments its own 
drivers at the hardware level.  

A hard disk drive is strongly recommended.  Although the software can be 
run on floppy disks, doing so will be cumbersome and leave you with very 
little room to store messages and user information.  

You will need a telephone line, preferably a seperate line devoted entirely 
to your computer.  Avoid lines with "call waiting" or other such features.

Although not stated in any manual, also required for running a BBS is a 
somewhat fanatical ability to spend your hard earned time and money for the 
pleasure of having strangers (often in faraway lands) use your computer 
with seemingly little or no gratitude.  If you feel as though you don't 
have this capacity, don't worry about it because it usually develops soon 
after your BBS first goes on line.



DIFFERENCES BETWEEN SEARCHLIGHT BBS 
         AND OTHER BBS SYSTEMS

Before you begin using Searchlight, we thought we would provide a short 
explination of some of the major design features of the BBS and how these 
compare to other BBS systems.  It seems that all of the common BBS systems 
that we can think of are based on a similar set of standards, and we have 
noticed a lot of people becoming confused when Searchlight does things they 
don't expect.  A quick look at some major features of Searchlight might 
clear up a lot of things.  If you come to a point where you can't figure 
out how to do something that you know the program should do, there's a good 
chance that you are simply going about it the wrong way.  


Message System

Many BBS's have a "flat" message system structure; that is, all the 
messages on the BBS are viewed as one long list, with the oldest messages 
at the beginning of the list, and the newest messages at the end.  Still 
others have message sub-sections (often called Conferences, Subboards, 
etc.) that provide you with, essentially, several smaller lists of messages 
rather than one long list.  

Searchlight is, for the most part, similar to these systems.  On Search
light the message subsections are called "Subboards" and you can have as 
many as 24 of them, each with a different name and access level.  In 
addition, you can assign a "Subsysop" to each message section who acts as 
the mediator for the discussion and has special privlidges to edit and 
delete messages under his/her domain.


Electronic Mail

On most systems, sending a private message to another user is possible by 
specifying the name of the user to whom the message is directed.  Such a 
message cannot be read by others, but it still appears on the message 
subsection with the other messages.  Typically, you can find messages 
directed to you by performing an automatic search of all the messages in 
the system, looking for ones with your name on them.

Searchlight uses a different approach.  Rather than placing private 
messages in with the general message base, you send messages directly TO 
another person on the system.  This operation is called Electronic Mail, 
and it is similar to the way real mail works.  When you decide to send a 
personal message to someone, the system looks up their name and places your 
message into that user's personal "mailbox".  To read a personal message, 
you inquire into your own mailbox to see what mail other people have sent 
to you.  This method is a lot faster than the traditional approach and 
gives you an easy way to manage your own messages, seperate from the main 
stream of things.

Incidentally, writing a public message on Searchlight is known as "Posting" 
the message, and is done with a command called POST.  Sending a private 
message is referred to as "Sending" the message, and is done through the 
MAIL command.  


Message Numbers

Most BBS's assign a sequential message number to each message that is 
entered into the system.  While this seems like a wholly obvious and 
logical way to organize a message base, anyone who's used a well 
established BBS has probably encountered the major deficiency in this kind 
of design.  Even though old messages are deleted, message numbers continue 
in sequence, resulting in hard to remember four and five digit message 
numbers, even if there are less than 100 messages in the system.  While 
most BBSs (as does Searchlight) provide you with commands that let you 
access the most common operations without having to type numbers, large 
numbers are still unsightly and confusing, especially when, for example, 
there are only 10 messages between message 3000 and message 4000.

We thought a better idea would be to have "floating" message numbers.  On 
Searchlight, the number of the highest message is always equal to the 
number of messages on the subboard.  If, for example, a subboard contains 
75 messages, the oldest message is message 1 and the most recent is message 
75.  What this really means is that messages don't actually HAVE numbers- 
because when a message is deleted, all subsequent messages are "renumbered" 
one number down.  So don't be suprised if what was message 50 one day 
becomes message 45 the next.  That's the way the system works.  


Bulletins

Searchlight BBS has user-definable bulletins.  Unlike other systems, where 
the bulletin feature is defined by the sysop, users can post bulletins.  
The bulletin function is actually a special message base with features that 
make it good for posting announcements and urgent messages.  Complete 
details on how it works follow in the body of this manual.


Quotes

As with bulletins, quotes on Searchlight is not a static file of quotes as 
found on some systems, but a function that stores and displays quotes left 
by the users of the system.


Flow Control

The term "flow control" refers to the flow of characters between the BBS 
and a remote terminal, and it's very important on an interactive system 
like Searchlight BBS.  During almost all operations, you can pause the 
output from the BBS by pressing control-s, and abort a message or listing 
by pressing the spacebar or control-c (to enter a "control" character, you 
hold down the key marked "Ctrl" on your keyboard and press the desired 
character, then release both keys. In this manual, control keys will 
generally be indicated with the ^ symbol; in other words, ^C means control-
c).  

Most BBSs have, or claim to have, this kind of flow control, but on 
Searchlight we designed accurate flow control into every part of the 
system.  Whereas some programs won't stop sending output until several 
seconds after you press ^S, Searchlight will almost always "stop on a 
dime".  On many BBSs that we've seen, the ^C feature rarely works; on 
Searchlight it works so well that it is sometimes the only way to exit from 
long listings and printouts.  For example, after the screen fills up with 
text, most systems will stop and present a prompt such as "More? (Y/N/NS)" 
and take the respone.  Searchlight's "more" prompt simply says "more", and 
it takes any key as the response to continue sending output.  There's no 
need to explicitly ask if you want more, because you can halt the BBS at 
any time by pressing ^C- and keep that thought in mind, because ^C (or 
spacebar) is a very powerful and oft overlooked feature of the BBS.  

One final word about flow control: in practically every situation where the 
BBS requires you to answer an input prompt with a single character 
response, you need only type the desired character, NOT type the character 
and then press RETURN.  You only need to press RETURN after typing a whole 
line of input.  If you forget, and DO press the return key, it will be 
stored in memory (all input is fully "buffered") and used as the response 
to the NEXT input prompt.  This can be quite undesirable and confusing, if 
you do not understand what's going on- so be a little careful at first.  

There are many more interesting Searchlight features, but rather than go 
into detail here, let's get started with the installation instructions.  
These are the major points we want you to keep in mind as your system 
unfolds, and we'll get to the rest of the goodies in turn.
.H:...INSTALLATION
.H:
.H:


SEARCHLIGHT BBS INSTALLATION AND SETUP INSTRUCTIONS


Searchlight BBS requires an IBMPC, XT, AT, or compatible, running PCDOS or 
MSDOS version 2.0 or higher.  You need a Hayes compatible modem and a 
serial (RS232) interface (for external modems only).

Your modem should be connected to the computer and configured as either 
COM1, 2, 3, or 4.  Refer to your modem's documentation for instructions on 
how to install and set up the modem.  If you are using a new modem or 
computer, you should verify that the modem is working correctly by running 
the modem software that came with your modem.  This way, if you have 
trouble setting up your BBS, you'll know whether the modem itself might be 
at fault.  

Some sort of text editor or word processor will generally be required for 
creating/editing text files needed by the BBS.  Since most people already 
have their favorite, we'll assume you know how to "edit" text files (such 
as CONFIG.SYS) on your system.  We use the excellent PcWrite(TM) system 
which is available as a shareware product from many sources.


THE CONFIG.SYS FILE

Somewhere in the root directory of your hard disk, or on your MS-DOS disk 
if you have only floppies, there should be a file called CONFIG.SYS.  This 
file is used to configure various aspects of your computer as it boots.

Using a text editor or word processor, examine the CONFIG.SYS file and make 
sure it contains these three lines:

  Files   = 20
  Buffers = 20
  Device  = ANSI.SYS

These commands ensure that your computer allocates enough file buffer space 
for the BBS, and that the ANSI.SYS driver is loaded.  If your CONFIG.SYS 
file already contains lines like those shown above, make sure the values 
for Files and Buffers are at least as large as those shown above; other
wise, change them to the above values.  If your disk does not contain the 
CONFIG.SYS file, create it, and add the three lines shown above.

If too few file buffers are allocated when you try to run Searchlight BBS, 
the program may crash with an "I/O Error F3" message.  If this occurs, 
check to make sure your CONFIG.SYS file contains the appropriate commands.

The ANSI.SYS driver is not required by the BBS, but it is neccesary if you 
wish to display text files which contain ANSI escape sequences.  Note that 
we recommend using the DOS ANSI.SYS driver, because other ANSI drivers 
which bypass the BIOS may prevent some programs from running as Doors.

More information on the CONFIG.SYS file can be found in your DOS manual.



INSTALLING THE SYSTEM FROM THE DISTRIBUTION DISK

We assume you will be installing your BBS system on a computer with a hard 
disk drive that's configured as drive "C:" and a floppy drive configured as 
drive "A:".  If you will be installing on floppies, please read this 
section and the following instructions for "Installing With Floppies".

Begin the installation by placing your original disk in drive A: (NOTE: you 
should make a backup copy of your original disk before you begin.  You may 
do so with the usual DOS command, ie. DISKCOPY.  The Searchlight disk is 
not "copy protected"- but see the copyright notice at the beginning of this 
manual).  Your original disk should contain the following files, which you 
can confirm by doing a DIR of drive A:

 CONFIG.EXE   --  Configuration & setup program
 SLBBS.EXE    --  System startup program & doors manager
 LOGIN.EXE    --  Login and new user registration
 BBS.EXE      --  Main BBS system
 SYSOP.EXE    --  Sysop command menu
 FILES.EXE    --  File transfer menu
 TEXT.ARC     --  Archive file containing online help files

If your disk has a file called "READ.ME", it contains some last minute 
instructions or information that could not be included in the manual.  READ 
THIS FILE FIRST.  You can display it on your screen with the command 
"TYPE READ.ME".

The first step in setting up the BBS is to create a directory for it on 
your hard disk.  Although you CAN run the system by dumping everything into 
the "root" directory, this is strongly discouraged, as it will prevent you 
from using some of the system's features as they are intended to be used.  
At the least, you will require a "main" directory that contains all of the 
data files associated with the BBS, a "text" directory that contains text 
files that the BBS will use (for example, help files and custom messages), 
and a "program" directorie that contains the program files (the programs 
can, and often will, be in the "main" directory- we'll show you how to do 
it that way first, and tell you how you can change it later if you want).  

As an example, we will create a main directory called "\BBS" and a text 
directroy UNDERNEATH the main directory, as "\BBS\TEXT".  The commands to 
do this from the "C>" prompt would be as follows: 

  C> MKDIR \BBS
  C> CD \BBS
  C> MKDIR \BBS\TEXT

Next, copy the executable files from the floppy disk in drive "A:" to the 
hard disk.  Use this command: 

  C> COPY A:*.EXE C:\BBS

Finally, the online HELP files should be copied into the TEXT directory.  
These files are provided by on the installation disk either as an archive
(TEXT.ARC) or as a group of text files in a subdirectory called TEXT. If 
your help is ARChived, you need an archive program (such as PKXARC by Phil 
Katz) to unpack it; issue the commands

  C> CHDIR \BBS\TEXT
  C> PKXARC A:TEXT

If you don't have an ARC file, give these commands instead:

  C> CHDIR \BBS\TEXT
  C> COPY A:\TEXT\*.*

That takes care of transferring the system to your hard drive.  Now, 
position yourself in the "main" directory by typing "CD \BBS" from the "C>" 
prompt.  It's important that you ALWAYS be in the main directory (NOT the 
root directory) when attempting to run the BBS.  Otherwise, the system will 
not be able to locate the BBS's data files, even if it can find the program 
you want to run.  

If you find the above "DOS" commands confusing, don't worry!  You will not 
have to issue any DOS commands once you have the BBS loaded and running.  
Just type the above commands verbatim, and you should be able to accomplish 
the installation job even if you have little or no knowledge of DOS.

You are now ready to configure your system, using the CONFIG.EXE program.
.H:...FLOPPY INSTALLATION
.H:
.H:


INSTALLING WITH FLOPPIES

If you will be running your system with floppy disks only, we recommend the 
following setup procedure.

1. Copy the files SLBBS.EXE, BBS.EXE, LOGIN.EXE, FILES.EXE and SYSOP.EXE 
   onto a blank floppy disk.  This disk will be placed in the "A:" drive
   when you run the BBS program.

2. If you have two drives: place the Searchlight Distribution Disk in the 
   "B:" drive and type CONFIG.  After CONFIG loads and asks you if you want
   to create the Searchlight data files, remove the disk from the B: drive 
   and replace it with a blank disk.  The B: drive will contain the data 
   files for your BBS system.
     If you have only one drive, use the A: drive and replace the distrib
   ution disk with the disk containing the .EXE files.

3. Use CONFIG to set the proper pathnames for Program files, as discussed 
   in the next section of the manual.  In this case just enter "A:" for the 
   program pathname.

4. To start the BBS, place your disk(s) in the drives and type A:SLBBS 
   while positioned in the drive containing the .BBS data files.


Notice that you do not need to keep the CONFIG.EXE program on the working 
diskettes.  You can keep it offline while the BBS is running, and run it 
only when neccesary.  However, we recommend keeping it online at all times, 
if you have the room.

It is not necessary to install the online HELP files.  These files will 
consume much of your available space if used, therefore, you probably won't 
want to keep them on your working disks.  A "help file not available" 
message is displayed by the BBS if a request for HELP files is made and the 
files are not available.  

Space for messages, files, and DOOR options will be limited.  Usually you 
will want to opt to support one or another.  If you do not intend to have 
any file directories at all, FILES.EXE may be removed from your working 
disks, giving you a little more room.

Try to leave a little extra room on the disk with the program files.  This 
way, you won't have a problem upgrading to a future version of Searchlight 
BBS if the .EXE files are larger.

.H:...CONFIGURATION
.H:
.H:

SEARCHLIGHT BBS CONFIGURATION

The CONFIG.EXE program creates the BBS's data files (the files that will 
hold messages, user names, etc.) and allows you to edit a variety of 
available options as needed.  To set up Searchlight BBS, you run CONFIG 
once to create the data files, and again whenever you need to change a 
system configurable option on one of the CONFIG menus.  Options include 
such things as the BBS system's name, standard access levels, modem setup 
commands, and screen colors.
 
You should always be located in the "main" BBS directory- the directory 
where your BBS data files are or will be located- when you run CONFIG.EXE.  
Run the configuration program by typing CONFIG at the DOS prompt.  If you 
have been following our example so far, the command would be: 
  
  C> CONFIG

Because you are running the program for the first time, you will receive 
this message: 

  Searchlight BBS system files cannot be found.
  Do you wish to create them in the current directory? (Y/N):

Press "Y" to intitialize the new system.  CONFIG creates the following 
files in the current directory:

  CONFIG.BBS   --  Configuration, options & current settings file
  USER.BBS     --  Searchlight's user file
  INDEX.BBS    --  Subboard definition file
  MESSAGE.BBS  --  Message text file
  LOG.BBS      --  Caller log file
  QUOTES.BBS   --  User quotations file

If you run CONFIG again later on, you should not see the "system files 
cannot be found" message.  If you DO, it indicates that you are NOT located 
in the main directory that contains the files, and you should switch to 
that directory and try it again.

Your screen should now show Searchlight's main configuration menu.  CONFIG 
divides the setup procedures into three categories, as follows: 

1. General System Setup  -  configures almost all of the system's operations
2. Communications Setup  -  configures modem and serial I/O control
3. Screen Colors Setup   -  sets colors displayed on the screen

Begin by selecting item #1, General System Setup, by pressing the "1" key 
on your keyboard (don't press RETURN- just press "1").  The screen now 
shows the General System Setup options, as described on the following 
pages.
.H:...GENERAL CONFIGURATION
.H:
.H:


Searchlight BBS General Setup Menu

 1. System Name ..................... Searchlight
 2. Allow New Users ................. Yes
 3. New User Access Level ...........   1
 4. New User Time Limit .............  20
 5. Validated Access Level ..........   5
 6. Validated Time Limit ............  45
 7. New User Files Access ...........   1
 8. Validated Files Access ..........   5
 9. Idle Time Limit .................   0
10. Max. Mail Length ................  99
11. Max. Bulletin Length ............  99
12. Program Path ....................
13. Text File Path .................. C:\BBS\TEXT
14. Include File Path ...............
15. Default Log File ................
16. Default Passwd for Uploads ......
17. Maximum Download:Upload Ratio ...   0
18. Activity Logging ................ No
19. DOORS Setup Filename ............


The first field, System Name, is highlighted by a reverse-video bar.  To 
change the value of the field, you can type over the existing string, or 
edit it with the cursor keys.  To switch to other fields, press the up and 
down arrow keys.  Numeric values are entered by typing a number within the 
allowable range, which is indicated to the right of the field when a 
numeric field is selected; Yes/No fields are changed by typing Y or N.


Here is a detailed description of the functions of each option.  As you 
move down the list, change the options as neccesary or desired for your 
particular system. 

1 - System Name
This is an alphabetic field that you can use to enter an identifying name 
for your BBS.  This name is used at the login message, on the help screen 
display, at the top of the Bulletin listing, and in the logoff message.

2 - Allow New Users
This option, normally set to "Yes", determines whether your system will 
allow new users to register their names and passwords.  When set to "Yes", 
new users will be allowed to register by typing "NEW" at the login prompt.
If changed to "No", your BBS becomes a "closed" system, allowing only those 
users with passwords already on file to log in.
     If you decide to run a closed system, you must still set this option 
to "Yes" initially to allow users to register.  You can either allow your 
users to register themselves or you can register the names yourself by 
logging in locally and typing "NEW" at the login prompt.

3 to 8 - Message & File Access Levels and Time Limits
Fields 3 thru 8 allow you to set two levels of default user options.  "New 
User" values are the values assigned to new users upon registration via the 
"NEW" login facility.  "Validated" fields contain the values assigned to 
users by the "Validation" feature of the BBS.  The validation process is 
totally up to you; if you set the new user and validated user fields to the 
same values, all users will be validated automatically.
     Access levels range from 0 to 255.  A level 10 user has all the 
privileges of level 0 thru 9 users, etc.  Level 255 is Sysop level and 
should not be assigned to anyone but the owner of the sysetm.  254 is co-
sysop level which provides sysop privleges with two restrictions:  Co-
sysops cannot change the SYSOP's password or access level, nor can they 
raise their own access level to SYSOP (255).  
     Access levels determine the extent of a user's access to the message 
bases and other features of the system.  Use of access levels is described 
in conjunction with the commands which refer to it.
     "Files Access" is a seperate value that defines access to the file 
system directories.  Normally, you would set these fields to the same 
values as the "access level" fields, but they can be changed for special 
purposes later on.

9 - Idle Time Limit
This field contains a value between 0 and 59 and it specifies, in minutes, 
the amount of time that the BBS will wait for incoming keystrokes.  If the 
system is waiting for input and no keys are typed by the user for more than 
the specified amount of time, the BBS will hang up the telephone and 
recycle to the Login screen.
     For best results, a value between 5 and 15 is recommended.  A value of 
zero disables idle time limit checking.

10 and 11 - Maximum Mail and Bulletin Length
These fields store the maximum length, in lines, of bulletins and of 
messages sent via the MAIL facility.  Normally, these are set to 250 (the 
maximum allowable length) but you can change them if you wish to restrict 
the lengths of these types of messages.  

12 - Program file pathname
This option determines where the BBS will look for its executable (.EXE) 
files.  If no pathname is given, it defaults to the current directory.  
     Use this field if you wish to have your program files located on a 
different drive or directory than your data files.  You may wish to do this 
if you're running a floppy-only system to maximize the amount of data on 
your data disk; you can also use this option to place your .EXE files into 
a high-speed RAMdisk for faster access.
     Note that there are no "Overlay" type files in this version of 
Searchlight BBS (some previous versions included overlay files and an 
overlay file path option).

13 - Text File Pathname
The Text File path is the directory where the BBS will look for all of its 
text files.  These include the user-defined login and info files, subboard 
and file file directory signon messages, HELP files, and any files 
referenced in messages via the @@FILENAME directive.  Note: The text 
files "FILEDIR.DEF" and "DOORS.DEF" should be located in the "main" 
directory, rather than the text directory.  
    For security reasons, we reccomend that the Text directory be different 
from the current directory and the Program File path.  This is because the 
@@FILENAME command can access any file in the text path, and can lead to 
unwanted access to system or other private files (@@FILENAME is discussed 
further later in the TEXT EDITING section of this documentation).
    If you've been setting up your system according to our tutorial, you 
should now enter C:\BBS\TEXT into this field.  Do this by pressing the down 
arrow key until the field is highlighted, and then typing the string 
"C:\BBS\TEXT".

14 - Include File Pathname
This pathname allows you to specify a directory which the users of you BBS 
can access for the purpose of "including" text files in messages (via the 
"%%FILENAME" directive, as discussed later in the manual).  Normally, if 
you use this pathname, you'll also have a file transfer directory set to 
the same directory.  See the FILES system section for more details.

15 - Default Log File
Default Log File is a default name that will be shown whenever a log 
(ALT-L) or forward to disk operation is selected.  A default name is not 
required, and is only a convenience that allows you to log messages and 
information to one file without having to enter its name each time.  

16 - Default Password for Uploads
This field, if filled in, defines a default password that will be assigned 
to each new file that is uploaded to the BBS via the File Transfer system.  
The purpose behind having a default password is to allow you to have 
control over new files.  Once a file is uploaded and assigned the default 
password, no one will be able to download the file until you remove the 
password, thus giving you the opportunity to check each new file before you 
allow it to be downloaded by the users of your BBS.  
     Most sysops will leave this field blank, allowing all new files to be 
downloaded without having to be cleared.  If you do set this field, 
remember that you, or a co-sysop, must reset the passwords on all new files 
before they can be accessed (see the FILES system documentation for more 
info).

17 - Maximum Download:Upload Ratio
The value in this field determines the maximum download/upload ratio that 
will be allowed.  A value of 3, for example, indicates that users may 
download three times as much data as they've uploaded.  You can use this 
field to prevent users from downloading excessively without uploading; when 
the dl/ul ratio is exceeded by a user, the program will not allow any more 
downloads by that user until he or she has uploaded a sufficient amount of 
files to bring the ratio to within the allowed range.  Uploads and down
loads are measured in kilobytes rather than as the number of files sent and 
received.
     Setting field 18 to zero disables the dl/ul ratio check and allows 
users to download freely.  

18 - Activity Logging
When this field is set to "Yes", the LOGIN program produces a continuous 
log of all logins and logouts that occur.  This log is written to a file 
called ACTIVITY.LOG within the main directory.  The format and possible 
uses of the activity log are discussed further in Appendix A, Using The 
Activity Log, at the end of this manual.  
     Set this field to "No" if you wish to disable the continuous log.

19 - DOORS Setup Filename
This field can be used to set the filename, including drive and/or path, of 
the setup file created by the DOORS system when an external program is run.  
The DOORS Setup File is a file containing information about the BBS that 
can be accessed by an external program; it is provided primarily for 
compatibility with the PCBoard(TM) BBS system.  The format and use of this 
file is discussed further in the DOORS section of the manual.
     This field should specify a full filename, not just a path.  If you 
leave this field blank, no setup file is generated by the BBS.

.H:...COMMUNICATIONS CONFIGURATION
.H:
.H:


Searchlight BBS Communications Setup

When you're through configuring the general setup options, press the F1 key 
to go back to the main menu, then select option 2, Communications Setup.  
This menu lets you configure your system to the type of modem and serial 
port you have on your computer.  PLEASE READ THIS SECTION CAREFULLY; proper 
modem setup is vital to the correct operation of your BBS system.  


 1. Comm Port .....................   1
 2. Support 300 Baud .............. Yes
 3. Support 1200 Baud ............. Yes
 4. Support 2400 Baud ............. No
 5. Support 4800 Baud ............. No
 6. Support 9600 Baud ............. No
 7. Remote Init String ............ ATH0S0=1!
 8. Local Init String ............. ATH1!
 9. Modem Msg Baud Detect ......... No
10. Direct Screen Writes .......... Yes
11. Output Buffering Factor .......  15


1 - Comm Port
This controls which communications port, 1 thru 4, will be used to communi
cate with the modem.  Make sure you set this option to the correct value 
for the modem in your system.  

2 to 6 - Baud Rate
Searchlight provides serial I/O support for speeds of up to 9600 baud, 
depending on the modem used.  The default setting, as shown above, is 
for a 300/1200 baud modem.  You must NOT configure the BBS to support any 
baud rate higher than your modem actually supports.  You can disable or 
"lock out" lower baud rates, in particuar 300 baud, if you do not wish to 
support them even though your modem is capable of doing so.  Users who 
attempt to communicate at a "locked out" speed will be not be allowed to 
access your BBS in any way.  

7 - Remote Init String
This field defines the string of characters that will be sent to your modem 
whenever the BBS begins running or resets itself after completing a call.  
You can use this string to send whatever initialization commands your modem 
requires before being able to accept a call.
   Besides ASCII characters, there are two special characters that you 
can insert into the modem init string:

    ~  Causes a 1/2 second delay between characters sent
    !  Causes a carriage return (CR) to be sent

NOTE that it is important to end the string with a ! character if you want 
it to terminate with a C/R.  The ! can be used several times within the 
string, allowing you to send several commands to the modem.
     In the above example, the string ATH0S0=1 followed by a carriage 
return is send to the modem for initialization.  ATH0 is the command to 
tell a Hayes compatible modem to go "on hook", thus ready to answer a call; 
ATS0=1 sets modem register zero to a value of 1 (this allows most modems to 
answer the phone on the first ring).  Various modems may require additional 
commands for proper operation.  Check the manual that came with your modem.  
     The init string is sent to the modem at the highest speed indicated in 
options 2 through 6.  For most modems, it is essential that at least some 
command is sent to the modem after each call in order to initialize the 
modem to the proper transmission speed.  Therefore, we recommend that you 
ALWAYS have something in this field, even if it's just the empty modem 
command (AT!).
     Please read the following section, "Additional Modem Considerations", 
for more information about modem configuration.

8 - Local Init String
This string is similar to the Remote Init String, except that it is sent to 
the modem whenever you initiate a "local" logon to the system (by pressing 
a key at the keyboard while the system is waiting for a call).  In the 
above example, ATH1 is sent.  This command places the phone "on hook", that 
is, it tells the modem to make the telephone line busy.  This is very 
useful, since any users who attempt to call your BBS while you are logged 
on locally will receive a busy signal, rather than no answer.

9 - Modem Msg Baud Detect
This option determines how the BBS will determine the baud rate of a remote 
call.  When set to "Yes", the program will set the baud rate by the Modem 
Message method; that is, it expects the modem to send a message that says 
"CONNECT xxxx" (where xxxx is the baud rate) upon connecting to the remote.
The BBS reads this message and uses it to set the baud rate.
     If this field is set to "No", the program will determine the baud rate 
via the Keystroke method.  It will cycle through the defined baud rates 
until the user presses the RETURN key on the remote end.  If you use this 
method, you must press the RETURN key several times upon connecting with 
the BBS in order to establish the proper baud rate.
     This topic is discussed further below.

10 - Direct Screen Writes
This option controls the way Searchlight BBS writes information to your 
computer's screen.  If set to "Yes", Searchlight will directly access the 
computer's video hardware.  If "No" is specified, Searchlight will use the 
BIOS calls for all output.
     Generally, set this option to "Yes" as it provides much faster output.
However, if you want to run Searchlight BBS under a multitasking or 
windowing operating system (such as DesqView, TopView, or Microsoft 
Windows) you must set Direct Screen Writes to "No" in order to keep Search
light from interfering with other programs.  A setting of "No" may also 
enable Searchlight to run on some non-IBM compatible MS-DOS machines 
(although we cannot guarantee that all aspects of the program will function 
correctly on such machines).

11 - Output Buffering Factor
This value controls the size of the BBS's output buffer during interrupt 
driven communications.  The default value of 15 is adequate for most hard 
disk based systems.  On slower systems, or when using floppy disks, setting 
the output buffering factor to a higher value increases the total through
put speed of the system.  On faster systems (such as the newer 286 and 386 
based systems), setting the output buffer to a smaller value allows 
slightly greater I/O control from the remote end.  
     The actual buffer sized used is scaled according to the baud rate and 
is equal to the output buffering factor * (baud rate/300).  Notice that this 
value affects the output buffer only, not the (more important) input 
buffer, which is fixed in size at 1024 bytes.
     Experience has shown that some modems and/or serial ports do not work 
well during interrupt driven output.  In these cases, output buffering can 
be disabled completely by placing a zero in field 11.  If you experience 
sluggish output or system "lockups" when operating with a nonzero output 
buffer, please try using your system with a zero in this field.  Interrupt 
driven input remains in effect regardless of the setting.
     If you are unsure about what value to assign, use the default value of 
15.  This option is strictly for "fine tuning" the performance of your BBS 
and it will not affect performance greatly in either direction.


ADDITIONAL MODEM CONSIDERATIONS

In order for Searchlight to work properly, your modem must be at least 
minimally compatible with the Hayes Smartmodem standard.  These things are 
required:

  The modem must assert the Carrier Detect (CD) signal when a carrier is 
  detected, and remove it when carrier is absent;

  The modem must hang up the telephone in response to a negative toggle on 
  the Data Terminal Ready (DTR) line;

  The modem must respond with a "CONNECT" or "CONNECT xxxx" message when
  connecting to a remote modem (where "xxxx" is the baud rate).  This is 
  only required if you use the "Modem Msg" method of baud rate detection.


Most modems have options to disable the CD and DTR signals, either via dip 
switches or commands.  If your modem uses dip switches, you must configure 
the switches to show the "true" state of CD, and respond to the DTR signal 
from the computer.  If commands are required, you must place the commands 
in the modem remote initialization string (option number 7 in the comm
unications configuration menu).  Remember that you can enter more than one 
modem command in the modem initialization string- most modems will accept 
several AT commands strung together (ie. ATH0M0S0=1), and if not, you can 
use the "!" character to generate a carriage return.  If you send several 
commands seperated by carriage returns you may also need to place one or 
more "~" characters after each command to allow the modem enough time to 
complete the command before executing the next instruction.  
     For most 2400 baud modems, the init string "ATH0M0X4&D3&C1S0=1!" works 
well.  Try "H" instead of "H0" or "M" instead of "M0" if you have problems.

If your modem has a speaker, you will probably want to disable it while 
your BBS is running.  You can do this by inserting the command to turn off 
the speaker into your Remote Init String (usually ATM0).


If your modem does not answer the telephone, chances are that modem 
register S0 needs to be initialized to a nonzero value.  While most modems 
initialize S0 to 1 when reset, some, particularly internal modems, initial
ize it to 0, preventing the modem from answering any calls.  Use the 
command 

  ATS0=1!

in your remote initialization string (this command is present in the 
default init string when you first set up your BBS).


If your modem won't hang up the phone at the end of each session (ie. after 
the GOODBYE command is executed), it means that the modem is ignoring the 
status of the DTR signal coming from the computer.  This is a common 
situation, and can usually be corrected by setting a dip switch on the 
modem.  If you can't correct this problem, try setting your modem init 
string to:

  ~~~+++~~~ATH!

This will cause the BBS to perform a soft-reset of the modem at the end of 
each call by sending the modem escape sequence, followed by the hangup 
command.  Since this method takes longer and is less reliable than a hard
ware hangup, it is recommended that you use it only if you can't get the 
hardware hangup to work.


When sending a command to the modem, the BBS will wait for the modem to 
respond with an "OK" message.  If the "OK" is not received, the program 
will print a warning message on the screen.  If this happens it indicates 
that your modem is not responding; usually, this means that your modem is 
turned off, connected to the wrong communications port, or improperly 
connected.  You should check the modem and try to alleviate the problem.  
If you receive this message the first time you run your BBS, make sure that 
the COMM port selected in option 1 on the configuration menu corresponds to 
the port to which the modem is connected, and make sure that the baud rates 
selected (options 2-6) correspond to the baud rates supported by your 
modem.  Finally, some modems have a dip switch that can be set to have the 
modem ignore all commands; make sure this switch is turned off.  If you 
continue to have difficulty, it could indicate that your modem is not Hayes 
compatible (or needs to be configured for Hayes compatibility) or that your 
communications ports, computer, or operating system are not IBM compatible; 
although this is rarely the case.  


REMOTE BAUD RATE DETECTION

The BBS can be configured to determine the baud rate of an incoming call in 
one of two ways, according to the value of field number 9 on the Communi
cations Configuration menu.  When this field is set to "Yes", the program 
reads the modem connect message; when set to "No", it samples keyboard 
input to determine the baud rate.

The modem message method is usually preferred, since it does not require 
that you strike the RETURN key before the BBS recognises you.  However, 
this method requires a Hayes compatible modem configured to respond with 
the proper message (ie. CONNECT 1200, CONNECT 2400, etc).  The keystroke 
method requires that you press the RETURN key on the remote terminal 
several times before the connection is established; however, this method 
will work with non-Hayes compatible modems and with other types of 
connections, such as local area networks.

If your BBS answers the telephone but connects at the wrong baud rate (for 
example, if it registers a 300 baud connection even though a 1200 baud call 
has been made), it indicates that the modem is not sending the proper 
connect message to the BBS (in this case, "CONNECT 1200").  Some modems can 
be configured to send the CONNECT message as numbers instead of words, or 
just send "CONNECT" without a baud rate, or not send any message at all.  
You will have to configure your modem- either through dip switches or via 
commands in the modem init string- to send the proper message when 
connecting.  Since these operations are nonstandard and vary from modem to 
modem, you will have to check the manual that came with your modem for the 
proper switch settings and commands for your modem.
     If you have this problem and don't have an "ATS0=1" in your init 
string, try adding that; "ATX4" also seems to be neccesary for some modems.

It is expected that the "CONNECT xxxx" message will be sent at the highest 
baud rate that's been selected for the BBS in options 2 thru 6 on the 
configuration menu.  Many modems will actually send the connect message at 
whatever speed the last command from the computer was sent at.  For this 
reason, we recommend that you always have a modem init string; if you don't 
need to send any commands to your modem, just send 

  AT!

as this will cause the modem to be reset to its highest operating speed at 
the start of each new call.
  Remember to add the ! character at the end of your modem init strings. 
Leaving off the ! is a common mistake.

If you can't get your modem to connect properly using the modem message 
method, use the keystroke method instead.


MODEM OUTPUT BUFFERING

Searchlight BBS normally uses a two-way system of interrupt-driven i/o 
buffering.  What this means is that both input and output are buffered.

Buffered input means that characters entering the BBS from the modem- keys 
typed by the remote user- are stored in a buffer for use by the BBS when 
they are needed.  This allows you to "type ahead" without losing any 
characters; the keys you type appear whenever the BBS is next able to 
accept them.

Buffered output is also supported.  Output buffering allows the BBS system 
to "dump" many characters of output into a buffer, and "spool" these output 
characters to the modem at the modem's speed, even while the BBS is 
performing other tasks.  Modem output is done in the background.  Using an 
output buffer has an important effect on the speed of the BBS as viewed 
from the remote end.

However, we have found that modem output buffering doesn't work properly 
with all systems.  In a few cases, using an output buffer will cause the 
BBS to run much more slowly than it should.  If you experience any problem 
running Searchlight with an output buffer, it is suggested that you disable 
the output buffer.  To disable output buffering, simply enter a value of 0 
in the "Output Buffering Factor" field (field #11) on the Communications 
Setup menu.

.H:...SCREEN COLORS CONFIGURATION
.H:
.H:


Searchlight BBS Screen Colors Setup

The final selection on the Setup menu is used to set screen colors.  When a 
color CRT is used, Searchlight can display up to ten different foreground 
and two background colors, selected from a palette of 16 colors.  The 
Screen Colors menu looks like this:

 1. Normal Text Color .............   3
 2. Normal Background Color .......   0
 3. Inverse Text Color ............   7
 4. Inverse Background Color ......   1
 5. Command Color .................   5
 6. Subboard Highlight Color ......  14
 7. Heading Color .................  15
 8. Input/Chat Mode Color .........   2
 9. Prompt Color ..................  13
10. Special Messages Color ........   4
11. Error Messages Color ..........   9
12. Alternate Color ...............   5


Each entry is a number from 0 to 15.  The numbers correspond to the 
following colors:

  (Dark Colors)          (Light Colors)
   0: Black               8: Dark Gray
   1: Blue                9: Light Blue
   2: Green              10: Light Green 
   3: Cyan               11: Light Cyan
   4: Red                12: Light Red
   5: Magenta            13: Light Magenta
   6: Brown              14: Yellow
   7: Light Gray         15: White

Note that some color monitors do not recognise the "Light" colors; on these 
monitors, the light colors will be displayed as their dark equivalents.

The colors you enter into the above fields are used by the BBS when run on 
a computer with a color display, or when [C]olor mode is selected by a 
remote terminal.  In order to see the colors, the remote terminal must have 
a color CRT and it must recognise the ANSI escape sequences used to create 
colored text (the specific ANSI sequences used to create each of the above 
colors can be found in your DOS manual).
     "Normal Background Color" (field #2) affects only the background color 
of the local PC.  The background color of the terminal is always black, 
except when highlighting input fields.
     The BBS is capable of supplying color or monochrome graphics to the 
remote terminal independently of the local PC.  That is, if the local PC 
(the computer running the Searchlight BBS Software) has a color CRT, but 
the logged-in user selects Monochrome graphics, color will still be 
displayed on the local screen, even though only monochrome codes are being 
sent to the terminal.  Similarly, if the system is run on a Monochrome 
display, only monochrome graphics are sent to the screen even though color 
graphics are being sent to the terminal.  Note that while the colors sent 
in Color mode can be adjusted, the monochrome mode is fixed and will always 
appear the same regardless of the colors selected for Color mode.  
     If you don't own a color display, it is suggested that you leave the 
colors set to their default values.  Experience has shown that it is 
difficult to estimate how a particular color combination will look without 
actually viewing it on a color CRT.  


When you are done with the configuration program, exit it by pressing the 
RETURN key.  The settings you select are saved to disk in the CONFIG.BBS 
file.  You are now ready to run your BBS system and "log in" to the Sysop 
account!

.H:...TEXT FILES
.H:
.H:

SETTING UP TEXT FILES

Searchlight provides you with a way to customize your BBS by defining your 
own messages that will be displayed by various parts of the program.  You 
can define a "greeting" message that will be shown to all users when they 
connect with your system, a message to be shown to new users, a general 
information message, etc.  In addition, you can set up seperate messages 
for ANSI and non-ANSI terminals, or use the same message for all.

Setting up text files is not required, but most people will want to do so 
before running their system.  If you're in a hurry, you can skip this 
section of the manual and set up your text files later.

The messages you define will be saved in files.  To write them, you must 
use a word processor or text editor that can write standard ASCII files to 
disk.  You can use the Searchlight's built-in text editor for this purpose, 
provided that it is adequate for the files you intend to produce.  

Files that end in .TXT are "standard" text files.  These should contain 
only ASCII text.  The standard text file will be used when ANSI graphics 
capability is not selected.

Files ending in .ANS are ANSI files.  These can contain ANSI escape 
sequences, as well as IBM character graphics (ie. eight-bit character 
codes).  The ANSI version of the file is used when ANSI graphics are 
enabled.  

You do not need to create two versions of a file if you don't wish to send 
seperate text to ANSI and non-ansi users; simply create one file with the 
TXT extension, and it will be used in all cases.

All text files should be located in the "text" directory, as defined in 
your configuration file. The following sets of files are defined:

LOGIN.TXT / LOGIN.ANS
This file is displayed immediately after the "Select Graphics" prompt 
during the login sequence.  It normally contains a welcome message with the 
name of your BBS, etc.  

NEWUSER.TXT / NEWUSER.ANS
This file contains information for new users.  It is displayed when someone 
logs in as NEW and attempts to register their name.  You can use this file 
to communicate any requirements or rules to new users of your system.  Each 
user sees this file only once, when first registering with the BBS.

INFO.TXT / INFO.ANS
The "info" file can be used to enter a short description of your system.  
It is displayed whenever the INFO command is used.

FILES.TXT / FILES.ANS
This text file is displayed whenever you enter the FILES system.  Use it to 
provide news and information about your file transfer directories.

LOGOFF.TXT / LOGOFF.ANS
Similar to LOGIN, these files contain a short message to be displayed on 
the screen when a user logs off (disconnects).

DEFAULT SUBBOARD ENTRY MESSAGES

For each message subboard A thru X, you can define a text message that will 
be displayed upon entry to the subboard.  To define a message for a sub
board, create a file called "SUBn.TXT" and/or "SUBn.ANS", where "n" is the 
subboard letter (A to X).  For example, the files

  SUBF.TXT
  SUBF.ANS

would contain text messages to be displayed upon each access to subboard 
letter 'F' (the .TXT file is displayed if ANSI graphics are not selected, 
the .ANS file is displayed if they are).

Since the 'A' subboard is accessed by default each time you log in to the 
BBS, a file named "SUBA.TXT" or "SUBA.ANS" will be displayed each time you 
log into the system.

You don't have to define text messages for any subboard.  If no message 
file exists, no message is printed upon entry to that subboard.



DEFAULT FILE DIRECTORY MESSAGES

You can define a default text message to be displayed upon each entry to a 
file directory in the FILES section of the BBS.  To do so, create a text 
file with the directory's name followed with a .TXT and/or .ANS extension.  
For example, if you have a directory called UPLOADS, the file

  UPLOADS.TXT

would be used to contain the message to be displayed each time the UPLOADS 
directory is accessed.

Note that the file directory text messages should be in the text directory, 
as with the other text messages; not in the directory containing the 
uploaded files for that directory.


MENUS

You can define your own menus to replace Searchlight BBS's main menu, files 
system menu, and SYSOP menu (the menus shown in response to the 'Help' 
commands).  If you choose to do this, make sure you accurately reproduce 
the BBS's menu selections in your file.  You can capture the system's menus 
to disk, or print them out, with the ALT-L (logging) function.

User defined menu files reside in the text directory, as usual, and have 
the following file names:

.E
  MMENU.TXT / MMENU.ANS     replaces the Main menu
  FMENU.TXT / FMENU.ANS     replaces the Files System menu
  SMENU.TXT / SMENU.ANS     replaces the Sysop menu
.E

If one or more of the above menu files exists, Searchlight will display the 
menu file, instead of the usual menu, in response to a 'Help' command.  You 
do not need to redefine all the menus; create only those which you desire 
to enhance with your own messages or logo.
.H:...LOGGING IN
.H:
.H:


RUNNING SEARCHLIGHT BBS:
  LOGGING IN FOR THE FIRST TIME


Once your BBS is set up and configured according to the previous 
instructions, running it is a relatively simple matter.  Once again, make 
sure that you're in the same directory as the BBS data files- the "main" 
directory- and also make sure that your .EXE files are available in the 
directories you've defined for the program path (or the current directory, 
if you left Program Path blank).  Run the bbs by typing the command 

  C> SLBBS

and pressing RETURN.  In a few seconds, your screen will clear and you 
should see the message:

  Waiting. Press any key for local login, ALT-X to exit.

along with the letters "sac l" in the lower right hand corner of the screen 
(these are status indicators; we'll get to them later).  If the computer 
beeps at you and says "Check Modem", do so- it indicates that the modem did 
not respond to the modem init string with an OK message.  Check to make 
sure that

  - the modem is turned on
  - the modem is connected to the proper comm port
  - the BBS is configured for the proper comm port
  - the baud rate(s) selected correspond to the modem's capability

If all else fails, please reread the Communications Configuration section 
of this manual.

Assuming you now see the "waiting" message, strike the RETURN or SPACEBAR 
key on your keyboard to initiate a local login session.  At this point the 
BBS will display an opening message and present the prompt,

  Select Graphics Mode: [C]olor, [M]onochrome, or [N]one ?

(Note: from this point on, most of what we describe will be what you and 
the people who use your BBS will see routinely when logging on).  The 
response to the graphics question depends on the type of terminal being used 
when the system is accessed from a remote location.  If an ANSI (or vt100) 
terminal with color capability is being used, type C in response to this 
question.  If you're using a monochrome ANSI terminal, type M.  Otherwise, 
type N to indicate that no ANSI graphics are to be used.

Since ANSI is always available when logging in locally (it will operate 
correctly even if you don't boot DOS with the ANSI.SYS driver), answer this 
question now by typing C if you have a color system or M if your system is 
monochrome.  Additional info on ANSI will be provided later on.  

Finally, you will see a prompt asking you to "Enter your name".  If you are 
running a system that allows new users, it will note that you may also type 
the word NEW.
    The BBS is asking you to type the name of a valid user account.  Since 
your system is new, there are only two valid accounts on file: one called 
SYSOP and one called GUEST.  The SYSOP account is provided as the "super
user" account.  SYSOP is a permanent part of the BBS, and can't be deleted 
from the user file.  Many sysops will want to use the SYSOP account as the 
account they use to log into the bbs regularly, whereas others will want to 
set up an account with a different name for themselves; we recommend using 
SYSOP, because most people recognise that as the name they can use to reach 
the operator of the BBS.

Respond to the "Enter your name" prompt by typing SYSOP.

You will now be logged into the BBS.  First you'll see a greeting message 
that displays some information about the system, the previous caller, etc.  
After pressing the RETURN key, as prompted, you will enter the BULLETINS 
subsystem.  Since there are no Bulletins on file yet, press the "Q" key to 
exit from the Bulletin menu.  Finally, the system will announce that you 
have no electronic mail waiting, and deposit you at the BBS system's main 
command prompt, which looks like this (the underscore shows your cursor 
position): 

  [A] Command: Help_

You are now ready to use the BBS system.


THINGS TO DO WHEN FIRST LOGGING IN

Here's a quick checklist of some of the things you should do the first time 
you log in to your BBS:

1. Familiarize yourself with the user interface.  It's quite easy to use.  
   Try selecting commands, reading the online HELP files, etc.

2. Use the OPTIONS command to assign a password to your SYSOP account.  
   This is very important!  If you forget to assign yourself a password, 
   others will be able to use the SYSOP account and cause damage to your 
   system.  Don't forget the password you choose; write it down if you have 
   to.

3. You will want to set up a few message subboards.  To do so, use the JUMP 
   and 1-SUBOP commands (we'll explain these further in a moment).

4. Post a few messages and bulletins.  This will not only help you learn 
   how the text editor works but it will give your first users something to 
   read when they call your BBS.
.H:...NEW USERS
.H:
.H:


ADDING NEW USERS TO THE SYSTEM

New usernames and passwords are added to the system by typing NEW in 
response to the login prompt.  In order to use this facility, you must have 
the "Allow New Users" option (in the CONFIG program) set to "Yes".

Typing NEW will present the New User menu, which looks like this:


  Searchlight New User Menu

  [R] - Register as a New User
  [G] - Enter the system as a GUEST
  [C] - Call the SYSOP to Chat

  Command ->_


To register his or her name in the user database, a new user would press 
the "R" key to access the Register option.  The program will

    - display the new user message (NEWUSER.TXT), if it exists
    - prompt the user for their name, location, phone number,
      system type, password, and ANSI mode.
    - enter the user's info into the BBS database
    - log the user in to the BBS

A new user is given initial access levels and time limit as defined in the 
CONFIG file.  Duplicate names are not allowed.  If the new user tries to 
enter a name that already exists in the user file, a warning message is 
printed, and the user must enter another name.  


The "G" option allows the user to log in using the GUEST account.  If GUEST 
is available on your system, it can be accessed via this menu choice.
    The GUEST account may be deleted if you do not wish to allow this form 
of access to your BBS.  If you delete the GUEST account, an attempt to use 
the "G" option will simply result in a message stating that the guest login 
is not available.


Finally, the "C" option will issue a page to the SYSOP (if the "sysop 
available" mode is enabled).  You can answer the page by pressing any key 
at the keyboard; after you're done chatting, press the ESC key to exit from 
chat mode.
    You may notice that the tone emitted from the speaker by the CHAT 
command is lower than usual when a new or nonvalidated user is paging.  
Thus, you can discern a new user's page without having to look at the 
screen.  
.H:...BBS COMMAND SUMMARY
.H:
.H:


SUMMARY OF MAIN MENU COMMANDS

The following pages contain a command-by-command summary of the major 
commands that are available at the BBS's main command prompt.  You can view 
help text from within the BBS, provided that you have the online help files 
copied into your "text" directory; press the first letter of the command 
you need an explaination of, and type the "?" key.  

In the following discussion, the "remote terminal" refers to the computer 
or terminal being used to connect to the BBS from a remote location (if a 
telephone call has been placed), and the "local computer" refers to the 
computer on which the BBS program is running.  In the case of a "local" 
login (ie. where you log in to the BBS at the local computer, without using 
a remote terminal or placing a phone call), certain operations, such as 
paging the SYSOP, serve no useful purpose, but can still be executed.  A 
"user" is someone who uses your system (usually from a remote terminal).  A 
"sysop" is yourself, or someone with an access level of 255; a "co-sysop" 
is someone assigned access level 254.  "Users" are prevented from per
forming certain operations, such as deleting messages that don't belong to 
them, or changing the accounts of other users.  As the owner, or SYSOP, of 
your BBS, you can execute all commands when logged in to the SYSOP account 
(or any account with an access level of 255).  

ANSI terminal emulation is always available in the local mode.  Therefore, 
select either [C]olor or [M]onochrome graphics when logging in locally.

To execute commands, press the first letter of the command, followed by the 
RETURN key.



QUICK GUIDE TO COMMANDS

The following chart shows which commands are associated with the various 
operations that the BBS performs:


Operation                                  Command(s)

Assign Access Levels & Time Limits         OPTIONS, 2-SYSOP, also see "hotkeys"
Set Up Message Subboards                   1-SUBOP                   
Access Subboards                           LIST, JUMP, NEW
Read, Post, & Manage Public Messages       READ, POST, EDIT, NEW, KILL
Send & Read Mail                           MAIL
Use Bulletins                              BULLETIN
Display & Change Options                   OPTIONS, TIME
Show User Lists & Info                     USER
Execute SYSOP Functions                    2-SYSOP, also see "hotkeys"
Access Upload/Download System              FILES
Access External Programs                   DOORS
End Session                                GOODBYE

Searchlight BBS's main menu looks like this:


  -----------------[ Searchlight BBS Command Summary ]-----------------

   Ansi ...... ANSI Graphics Toggle    New ....... New Message Scan
   Bulletin .. System Bulletins        Options ... User Options/Stats
   Chat ...... Page Sysop              Post ...... Post Message
   Doors ..... External Programs       Quotes .... Logoff Quotations
   Edit ...... Edit Message            Read ...... Read Message(s)
   Files ..... File Transfer System    Scan ...... Scan Message Titles
   Goodbye ... Log Off System          Time ...... Time Information
   Info ...... System Information      User ...... User Lists & Info
   Jump ...... Jump To Subboard        Version ... System Version No.
   Kill ...... Delete Message(s)       1-Subop ... Subop Options Mode
   List ...... Subboard List           2-Sysop ... Sysop Command Mode
   Mail ...... Electronic Mail

  --------------------[ Press <?> For Online Help ]--------------------


HELP
----
The HELP command prints a list of all the available commands, with a short 
description of what each command does. Notice that two commands, FILES and 
2-SYSOP, contain their own submenus with additional commands; use the HELP 
command to get a list of the commands available at a particular menu.
     The commands that begin with numbers rather than letters are special 
privlidged commands. These commands are only visible on the menu by users 
who can access them.  
     You can customize the HELP menu. See "SETTING UP TEXT FILES" in the 
Installation section of this manual.


ANSI
----
The ANSI command is used to select the desired Ansi graphics mode. Color, 
Monochrome, or no graphics can be selected. Select "None" when logging into 
the BBS from a remote terminal that is non-ANSI compatible; select Color or 
Monochrome mode respectively for Color or Monochrome ANSI terminals, or 
when logging in locally.
     If ANSI is enabled, the BBS will use Ansi escape sequences to control 
output, allow eight-bit IBM graphics characters to be sent to the remote 
terminal, and enable you to use the full-screen text editor to enter mess
ages.  
     You can use ANSI when logging in locally, even if you do not have the 
ANSI.SYS console driver installed (see your DOS manual).  However, if you 
use text files that contain ANSI sequences, these will not be displayed 
correctly. We recommend installing ANSI.SYS at all times.


BULLETIN
--------
This command displays the system's bulletins. Bulletins are a special 
message section that's displayed automatically each time a user logs on. Up 
to eight bulletins can be available at one time. Old bulletins, unless 
assigned a "protected" status by the SYSOP, are deleted as new bulletins 
are posted. Bulletins are always displayed in order from most to least 
recent, allowing you to view the latest messages quickly.
     To read a bulletin, type a number from 1 to 8. The [P]ost subcommand 
is used to post a bulletin (any validated user can Post). [K]ill is used to 
delete bulletins; as with messages, only the SYSOP or the person who posted 
the bulletin can delete it. Old bulletins are also deleted automatically 
when new ones are posted.
     A special hidden command, [S]tatus, is available to SYSOPs. This 
command lets you "protect" and "unprotect" a bulletin; protected bulletins 
cannot be deleted. 
     The Bulletin facility is designed for important messages of general 
interest. Restricting the Bulletins system to 8 messages is a feature 
designed to emphasize the importance of the messages posted, and increase 
the likelihood that they will be read rather than passed over by the casual 
user. Both public messages and private mail also available (see the POST 
and MAIL commands); general text file libraries can be created with the 
FILES system, which provides a TYPE command for displaying text on the 
screen as well as several error-free download protocols.


CHAT
----
This command allows a remote user to page the system operator. If the SYSOP 
indicates that he/she is available (via the ALT-A command), paging occurs, 
otherwise the message "sysop not available" is displayed.
     To answer a page at the local computer, press any key. To exit from 
the chat mode, press the ESC key.


DOORS
-----
This command allows you to access features external to the BBS program that 
can be provided by adding new programs. To use DOORS, you must configure 
define the available programs via the the DOORS.DEF file; see the "DOORS 
SUBSYSTEM" section of this manual for details.


EDIT
----
The EDIT command can be used to edit an existing public message on the 
current subboard. Users can only edit message which they posted; subsysops 
can edit any message on their respective sub-boards, and sysops, of course, 
can edit any message in the system.
     When editing, you can change the message's title, text, or both. In 
addition, the SYSOP can assign a "protected" status to a message. Protected 
messages are exempt from all "mass" message deletions (instances where more 
than one message is deleted at a time), but can still be deleted indi
vidually.  
     Consult the "TEXT EDITING" section of this manual for further inform
ation on using the line and full screen message editors.  


.E
FILES
-----
This command executes the Searchlight file transfer system, a subsystem 
that can be used to send and receive files to/from the bbs. The files 
system provides many subcommands and has its own HELP facility which can 
be used to get more information on the individual file system commands.
     You must define the file directories with a FILEDIR.DEF file. See 
"FILES SUBSYSTEM" in this manual for further information.
.E


GOODBYE
-------
Use this command when you are ready to log off, or disconnect, from the 
BBS. The computer will prompt you to "Please leave us a quote". Type a 
short 1-line message and press RETURN (sysops may just press RETURN).
     Note that is is considered good practice to always log off properly by 
using the Goodbye command, rather than simply hanging up. However, hanging 
up will not cause any damage to the system.
     If using the SYSOP account, and logging in locally, you'll receive 
this prompt when logging off:

  Reset (Y/N)?

Enter 'Y' to reset the BBS for another call.  Enter 'N' if you wish to 
terminate the BBS program and return to DOS.  


INFO
----
The INFO command displays a short message defined by the sysop.  It will 
simply display the contents of a file called INFO.TXT or INFO.ANS 
(depending on whether you are in ANSI mode), if that file exists in the 
"text" directory. See "SETTING UP TEXT FILES" in the installation part of 
this manual for further details.


JUMP
----
This command is used to access the various message subboards available on 
the bbs. Public messages are grouped by subject, and up to 24 seperate sub 
sections are available, indicated by the letters [A] thru [X] to the left 
of the command prompt. The Jump command will prompt you for the letter of 
the subboard you want.
     To see the list of available subboards, either type "?" in response to 
the Jump command's prompt, or use the List command from the main menu.
     To define a subboard, "Jump" to the subboard and use the "1-Subop" 
command to give the board a title and adjust the other attributes ass
ociated with it.  


KILL
----
The KILL command is used to delete public messages. Unless you are a sysop 
or subop, you can only Kill messages you have posted; otherwise you may 
delete any message. The system prompts you for the message number, prints 
the message heading, and confirms the command before proceeding with the 
deletion.
     When run by a sysop, the Kill command will continue by displaying the 
next message and asking you if you'd like to delete that message, too. You 
can press Y to delete it, N to skip it, or Q to abort the command and 
return to the main prompt.
     You can also mass-delete messages older than a certain date across all 
subboards and user mailboxes. The command to do this is on the Extended 
Sysop menu and can be accessed through the "2-SYSOP" command.


LIST
----
This command provides a list of the message subboards available on the 
system. Up to 24 subboards, indicated by the letters [A] thru [X] to the 
left of the command prompt, may be available at any time. The listing shows 
the title, number of messages, subsysop, and new message status of each 
board.  
     To access the messages on a particular subboard, enter the sub's 
letter in response to the prompt that follows the listing (you can also 
press the key while the list is still in progress). If you wish to jump to 
a subboard without viewing the list first, you may use the Jump command.  


.E
MAIL
----
The MAIL command is used to send private messages to other users, and to 
read the private messages that other users send to you. You can only send 
mail to someone who's name is registered in the BBS user file (ie. you 
can't send mail to "ALL", etc). You can only read mail that's been sent to 
you (unless you use the special SYSOP command to read user mail).  
     To use the mail facility, execute the Mail command. This will present 
you with a short menu of mail subcommands. The commands are-
.E

     [R]ead - this options lets you read your mail, if you have any. Each 
message in your private mailbox is displayed in sequence. After reading a 
message, a prompt appears with options to reply to the message, re-read it, 
forward it (send a copy of the message to another user or a public message 
subboard), and delete it. Please remember that all messages in your mailbox 
are private and addressed to you, therefore, mail should be deleted as soon 
as you are finished with it.

     [S]end - allows you to send a message to another user. You must type 
the name of a user who is logged into the system, otherwise the command 
cannot proceed. You need not type the user's full name; you may type the 
first few characters, and the bbs will locate all users with matching names 
and prompt you for the correct one.

     [N]ew - this command is exactly like [R]ead, except that only new 
messages are presented for reading.  

     [L]ist - lists the messages in your mailbox, showing the sender, date, 
and subject of each. You can choose a message from the list and start 
reading your mail from that message on.

     [I]nquire - lets you examime the mail you've sent to another user. If
your mail has not yet been received, you can edit it or delete it from the 
other user's mailbox.  

Notes: Help in using the text editor is available from within the editor.
       The Mail command is for private messages only. Refer to the Post 
       command for information on sending public messages.


NEW
---
The NEW command gives you a listing of those subboards that contain new 
messages, ie. any messages posted after the most recent message that you've 
read on that sub. You are then prompted for the desired subboard letter; 
upon entering the sub, you will receive a scan of the new messages.  You 
can automatically begin reading the messages by responding with a 'Y' to 
the "Read new messages now" query.  
     Refer to the Scan and List commands for further information.


OPTIONS
-------
This command displays a variety of information about your account on the
BBS. It lists the dates of your first and last logons, your access levels
and time limits, the amount of uploading and downloading you have done, and
the information you gave about yourself when you logged in.
     As indicated on the Options screen, you may change your location, type
of system, phone number, and password. If you are using an ANSI compatible
terminal, you can press the up and down arrow keys to select a field (as
indicated by the highlight bar), and edit it with the usual cursor keys
(left, right, DEL, etc.), pressing F1 or <ctrl-z> when done. Non-ANSI users
can change fields by responding to the prompt with the proper field number.
The "location" and "system type" fields have no actual bearing on the
operation of the BBS; they are simply there to provide information about
you to others who use the system. The phone number field is for the SYSOP's
reference only- it is never shown to anyone else.
     Notice that, for security purposes, your password is not displayed on
the screen except right after you enter or change it. If you alter your
password, the system will confirm the new password before assigning it to
your account.


POST
----
This is the command you use to enter a public message on the current message 
subboard. You are prompted to enter a 1 to 40 character title for the 
message, and then placed in the text editor to enter the text (documentation 
for the editor's commands is available from within the editor). Upon 
completion, your message is saved as the highest-numbered message on the 
subboard.
     See also: Read, for reading back posted messages, and Mail, for sending 
private messages to other users.


QUOTES
------
The quotes command displays, at random, a few of the one-line quotations 
left by users in response to the "Please leave us a quote" query that's 
presented as you log off the system.
    The QUOTES.BBS file is filled with a default message when the BBS is 
first initialized. Therefore you'll find this command quite redundant until 
a number of calls have been logged to your system.


READ
----
The READ command lets you read messages on the current subboard. You must 
enter the number of the first message you want to read. Notice that messages 
are always numbered sequentially; ie. if there are active 56 messages on a 
particular subboard, the first message is always number 1 and the last is 
number 56, regardless of the fact that message deletions may have taken 
place in the past.
     After reading a message, you have several options. You may type 'N' (or 
simply press RETURN) to read the next message. You can re-read the message 
by pressing 'A'. You may reply to the message, either publically or 
privately; if the reply is public, it is appended to the current subboard, 
otherise the Mail facility is invoked to send the reply directly to the user 
who wrote the original message.
     The message forwarding option can be invoked by pressing 'F'. This 
facility allows you to send a copy of the message you've just read to 
another place on the BBS: the destination can be a user's mailbox or a 
public message subboard (the SYSOP can optionally output the message to a 
text file as well). The forward command prompts you for the required 
parameters.
     For more information, refer to: List and Jump for selecting other 
message subboards, Scan for scanning message titles, and New for reading new 
messages.


SCAN
----
Use the SCAN command to get a quick summary of the messages on the currently 
active subboard. The scan shows the message number, the date the message was 
posted, the name of the sender, and the title of the message. You may scan 
messages in forward or reverse direction by replying to the Scan prompt with 
'F' for forward or 'R' for reverse. Note that you can abort a scan at 
anytime simply by pressing <spacebar> or <ctrl-c> keys.
     Refer to the Read command for reading messages, New for scanning new 
messages only, and List and Jump commands for selecting a new message 
subboard.


TIME
----
This command displays the current time and date, as well as the time which 
you logged onto the system, your elapsed time on the bbs, and the amount of 
time remaining in your current session (for users only; SYSOPs are not 
timed when using the BBS).


USER
----
The USER command displays information about the registered users on the 
BBS. It has three subcommands: 

     [L]ist - gives you a list of the registered users, showing the users'
names, dates of last login, locations, and system types (the type of 
computer or terminal they use). The list is alphabetical, and you don't 
have to read the list from the beginning to the end; you can start at any 
particular place by entering the first few letters of the name where you 
wish to start. Notice that you can abort the listing at any time by 
pressing the <spacebar> or <ctrl-c> keys.
    SYSOPs are prompted to enter minimum and maximum access levels when 
using this option. You can use this feature to list only those users who 
have access levels within the specified range. Press RETURN twice to 
default to all users.

     [S]earch - allows you to search for a particular name in the user file. 
You need not type in the entire name; typing the first few characters is 
sufficient. If the name is found, it is listed along with information about 
the user.

     [C]allog - this displays a list, in reverse order, of the names of the 
last 75 users to log into the system, including the times and dates of the 
calls. Again, you can abort the list early by pressing <spacebar> or 
<ctrl-c>.
     The Call Log is initialized to say SYSOP in all 75 locations when the 
BBS is first set up, therefore it will be somewhat inaccurate until 75 
calls have been logged.


SUBOP (1)
---------
The SUBOP command, which can only be executed by sysops or sub-sysops,
allows you to display and change the parameters for the current subboard.
You use this commnand to initially setup your message subboards and to
change or reconfigure them later.  To execute this command, press the "1" 
key and then RETURN.
     Subop displays four fields: Subboard title, subsysop, access level, and
maximum message length. If using an ANSI terminal, you can change fields by
moving the highlight bar to the desired field, and using the cursor keys to
edit the field contents. In non-ANSI mode, type the number of the field you
wish to change, and enter the new information.
     Subboard title is any alphanumeric string defining the name of the
subboard. The subsysop field must either be blank or the name of a valid
user on the system. If nonblank, it defines the user who will have control
over the contents and format of the subboard.
     Access level defines the minimum access level that a user will need to
access the subboard. An access level of 254 or 255 makes the board
accessable only to sysops, and effectively "deactivates" the sub. This
feature allows you to have private subs and create different classes of
users. The first subboard (sub 'A') should always have an access level of 
zero, since ALL users will be able to access it by default upon logging in 
to the system.  
     Maximum message length defines the maximum length (in lines) of a
message that can be posted. It normally defaults to 99, but can be changed.


SYSOP (2)
---------
The SYSOP command, which is only executable by users with access level 254
or 255, allows you to change and maintain various aspects of the bulletin
board. Press the "2" key to execute this command.  Sysop displays a prompt 
with four options: 

[M]ail, [O]ptions, [T]extEdit, [E]xtended ?

     [M]ail allows you to inquire into the mailbox of a specific user. You
are prompted for the user's name, after which you are transferred to the
MAIL command prompt, where you can execute any MAIL operation on the
specific user's account. Note that if you read a user's mail, the "times
read" indicator is not incremented.

     [O]ptions is similar to [M]ail but it allows you to change and inquire
into a user's stats and options. In addition to the regular options, you can
change a user's access levels and time limit with this command.
     Users with access level 255 are deemed to be full SYSOPs and may 
execute any command on the BBS, regardless of access level restrictions. It 
is reccommended that you assign this level of access only to the SYSOP 
account. Access level 254 defines a Co-Sysop. Co-Sysops may execute most 
SYSOP level functions, but are prevented from assigning SYSOP or Co-Sysop 
access to other accounts, inquiring or changing the account of a SYSOP or 
another Co-Sysop, editing an external text file, executing DOOR programs 
with access level 255, and accessing password protected files without using 
the password.
     Assignment of other access levels is up to you, and the capabilites of 
a particular access level depend upon the access levels that you assign to 
subboards, file directories, and doors. Non-Validated users- users with 
access levels less than the "default" validated user access level that you 
define via the CONFIG program- are assigned special restrictions: these 
users may not download files or send mail to anyone except the SYSOP.

     [T]extedit gives you a way to edit short text files directly using the
system's text editor. At the moment, you can only edit files less than 100
lines long, with less than 75 characters per line, and no control
characters. [T]extedit gives you the option to create a new file, too.

     [E]xtended is the command that runs the "extended sysop" menu, which
contains a host of commands relating to BBS maintenance. For a full
description, run the extended sysop command and use the online help facility
to get more information, or see the SYSOP COMMAND SUMMARY in this manual.
.H:...READ SUBCOMMANDS SUMMARY
.H:
.H:


SUMMARY OF MESSAGE READ SUBCOMMANDS

After reading a public or private message, the BBS prompts you with a 
number of options, to which you can respond by entering a 1-keystroke 
command.  Here's a summary of the message disposition options:


[A]gain
The "Again" option is available with both mail and public messages.  It 
clears the screen and re-displays the last message read.  Use this option 
when you want to review a long message; it is also useful for redisplaying 
a message in case the message is garbled by line noise.


[N]ext
The "Next" subcommand is used to proceed to the next message in your 
mailbox or on the currently active subboard.  If there is no next message, 
the READ command exits.
     You may press the RETURN key instead of "N" to execute the next 
message subcommand.


[Q]uit
Select this option if you wish to quit reading messages and exit back to 
the main system prompt.


[R]eply
This option lets you reply to the message you've just read.  If reading 
electronic mail, the reply is sent to the mailbox of the person who sent 
the message you've just read.  If reading a public message, you have the 
option of sending the reply privately (as an electronic mail message) or 
publicly (as a posting on the current subboard).  You are prompted with: 

  Is the Reply Private (Y/N)?

Type "Y" if you wish to send a private message, "N" if you wish to post a 
public reply.
     When you reply to electronic mail, and you don't delete the original 
message, the fact that you replied is recorded in the original message's 
header.  The next time you read the message, it will display the number of 
times you've replied to that message as part of the header information.  
This helps you keep track of which messages have been replied to.
     After writing the reply, you return to the read command in progress, 
and begin reading the next message in sequence.


[K]ill
This option appears only when reading public messages, and only if the 
person reading the message has permission to delete it.  Selecting this 
option allows you to delete the message just read.  It will ask you first 
if you really want to delete the message; type "Y" to kill it, "N" to keep 
it.
     After deleting the message, the next message in sequence is displayed.

[F]orward
The "Forward" subcommand is used to forward a COPY of the message you just 
read to another place on the bulletin board.  You may forward a message to 
a public message subboard or to a particular user's mailbox.
     Pressing "F" prompts you with:

  Forward to [U]ser or [S]ubboard?

If you wish to forward the message to a public message board, press "S"; 
the BBS will then prompt you to enter the subboard letter of the board you 
wish to forward to.  To forward the message to a user, type "U"; you will 
then be prompted to enter the name of the user to whom you wish to send the 
message.
     Forwarding a message to a subboard is the same as POSTing the message 
on that subboard.  Forwarding to a user is the same as sending the message 
to that user via the MAIL command.
     If the SYSOP or a cosysop is logged in, a third forwarding option 
appears in the menu of destinations:

  Forward to [U]ser, [S]ubboard or [D]isk?

Selecting [D]isk allows you to write the message directly to a text file on 
your disk.  It will prompt you to enter the filename, which may include a 
drive letter or directory path.  If the file exists, the message is 
appended to the end of the file, otherwise a new file is created.  



THE DELETE PROMPT

After reading each message in your electronic mailbox, and responding to it 
with one of the above subcommands, an additional prompt appears:

  Delete this message (Y/N)?

Press "Y" if you wish to delete the message you just read; or "N" if you 
don't want to delete the message.  Note that if you selected the [F]orward 
subcommand before deleting the message, the deletion will occur after the 
message is forwarded to its destination.



THE VALIDATION PROMPT

If the SYSOP or a co-sysop reads an electronic mail message that was sent 
by a non-validated user, this prompt appears after reading the message:

  Validate this user (Y/N)?

If you respond to this prompt by pressing "Y", the user who sent the 
message is validated (ie. assigned "validated" access levels and time 
limits as defined in the configuration file).  If you press "N", the user's 
status is not changed.
     This prompt gives you a convenient way of validating new users without 
having to execute a sysop/options command for each new user.  Simply ask 
your new users to send you electronic mail requesting validation.
.H:...STATUS LINE & HOTKEYS
.H:
.H:


THE STATUS LINE

Whenever someone is logged into your BBS from a remote terminal, the local 
PC screen will display a status line in inverse video at the bottom of the 
screen.  The status line gives you information about the currenly logged in 
user.  It looks something like this:

--------------------------------------------------------------------------
 Online: USER NAME             Access: AAA/BBB     Time: XXX/YYY    sac l
--------------------------------------------------------------------------

USER NAME shows you the name of the person who is logged in.  AAA and BBB 
are the user's BBS access level and FILES access level, respectively.  XXX 
is the amount of time (in minutes) that the user has been logged in, and 
YYY is the user's time limit for this session.  The lowercase letters to 
the right are status flags, as explained below.



HOT KEYS

As the SYSOP, there is a group of operations that you can perform through 
the use of what we call "hot keys" at the local keyboard.  A "hot key" is a 
special key that can be pressed at almost any time the BBS is running, 
without disturbing the call in progress.  For example, ALT-V is the hot key 
for validating users.  If you press ALT-V while a new user is logged in, 
that user will be instantly validated, and the status line on the bottom of 
the screen will be updated to show the user's new status.  Pressing ALT-V 
while a validated user is online results in un-validating the user, or 
returning the user to the defined new user access levels and time limit.  
The user at the remote terminal doesn't see any of this happening.

The F9 and F10 keys can be used to adjust a user's time limit.  Pressing F9 
adds five minutes to the currently logged in user's time limit, and 
pressing F10 subtracts 5 minutes.  The new time limit is in effect only for 
the current call.

The F8 key is a status line toggle. Pressing F8 changes the format of the 
status line, alternately displaying the above access level/time limit 
display and a display showing the user's name, location, and computer type.

The letters "sac l" on the lower right hand side of the screen are flags, 
and they are controlled with hot keys as well.  The "S" flag is called the 
superuser status flag.  When the flag is OFF, a lowercase s is displayed.  
When it is ON, an uppercase S is shown.  You toggle it on or off by 
pressing the ALT-S key on the local keyboard.
     When superuser status is ON, any user who is logged in is granted full 
SYSOP privliges.  Normally, you use this command in order to allow yourself 
to execute sysop commands while someone else is logged in.  You can also 
use it to grant temporary SYSOP privs to the logged in user.  Note that if 
you turn this switch ON, it remains ON until you turn it off, or until the 
current user logs off (or hangs up).  

The "a" and "c" flags control the operation of the chat command.  The "a" 
flag is the Sysop Availability flag.  When it is ON, an uppercase "A" is 
displayed, and paging is enabled; that is, the system will beep to inform 
you of an attempt by a user to call you with the "Chat" command.  If 
availablilty is turned OFF, the computer will remain silent, and inform all 
users attempting to chat that no sysop is available.  The sysop availablity 
mode is turned on and off by pressing ALT-A.

The "c" flag tells you whether or not the current user has attempted to 
page you since logging on.  If a capital "C" is displayed, it means the 
user attempted to Chat.  This is true regardless of the setting of the "A" 
flag.

ALT-C is the chat hotkey.  At most times when the BBS is running, you can 
"break in" to chat with the logged user by pressing ALT-C.  This causes you 
to go into chat mode immediately, suspending any operation in progress.  
When you exit the chat mode (by pressing the ESC key), the user is returned 
to the exact place where he or she left off.
     If a user is writing a message, especially with the full screen 
editor, be aware that using the ALT-C key will interrupt the work in 
progress, usually with confusing resuts when it returns (confusing because 
the screen no longer reflects the true image of the text being typed).  If 
you must interrupt a full screen edit, press CTRL-W when you're done.


Output Logging

The "L" status flag and the ALT-L command control output logging.  Logging 
allows you to capture all of the text being sent to and from the BBS and 
output it to a disk file or device.  For example, you could use this 
feature to record a conversation with a user while in CHAT mode, or to make 
ASCII text files containing listings of your upload/download directories, 
or to get a printout of almost any listing, message, or display that the 
the BBS normally sends to the screen.
     To begin logging, press ALT-L; you are prompted to enter a filename. 
If you defined a default log file in the CONFIG program, it is displayed, 
and you can use it by pressing RETURN. Otherwise, you must enter the name 
of the file to capture the log to. Logging begins, and continues until you 
press ALT-L again, change from one program module to another (ie. run the 
Files or Extended Sysop commands), log off, exit via ALT-X, or execute a 
DOOR program.  All text normally displayed on the screen is copied into the 
log file.
     If you wish to obtain a hard copy (printout) of BBS activity, use PRN 
as the output filename.  PRN is the printer device file, and it will cause 
subsequent output to go to the printer.
     Note that backspace characters are processed out of the logged output, 
and ANSI escape sequences are removed.  Also, the "-- more --" prompt is 
disabled during logging.  


Exit Key

ALT-X can be used to temporarily exit the BBS and return to DOS.  When you 
press ALT-X (from the local keyboard only), all files are closed, the BBS 
program terminates, and you return to DOS.  When you rerun the BBS (by 
executing SLBBS.EXE), you are returned to the BBS at (approximately) the 
same place where you left off.  
     If you use ALT-X while a remote user is online, the modem will not 
hang up the telephone, but the remote user will cease to receive output or 
be able to give input to the system until you return to the BBS.
     You don't have to return to the BBS after ALT-X: it is safe to shut 
your computer off, for example.  However, the next time you run the program 
it will return to the current session.  You must log off (using the GOODBYE 
command) in order to allow the BBS to receive further calls.  


Hangup Key

The ALT-H key has been provided to enable you to terminate a user's session 
immediately.  If you press ALT-H from the console while a user is logged 
in, the modem will hang up on the user and the BBS system will recycle to 
accept another call.
     It is, of course, rather rude to hang up on someone this way.  ALT-H 
is provided for use at your own discretion.  If someone is on your BBS and 
you need to use the computer, we suggest you use ALT-C first to chat with 
the user, and ask him or her to log off politely.
.H:...EDITING
.H:
.H:


TEXT EDITING: INTRODUCTION

The Searchlight programs contain two text editors that are used whenever 
you enter a message or send electronic mail.  The text editors, while not 
full-fledged word processors, contain many features and commands that allow 
you to easily compose, enter, and change short to medium length messages.  
In addition, you can use the BBS's text editing capabilites to edit text 
files on disk, even from a remote terminal.  

A line-oriented text editor, similar in nature to the DOS EDLIN editor and 
to the editors found on many BBS systems, is provided for use with non-ANSI 
terminals.  The line editor provides a fast and simple way of entering 
messages, with rudimentary editing facilities, and it works from almost any 
kind of remote terminal, from IBM PCs to older home computers to printing 
terminals.  

Searchlight also contains a full-screen text editor that resembles the 
types of editors most people are used to working with on the IBM PC.  It 
gives you an exact representation on the screen of what your message will 
look like when read back, and it allows you to move the cursor anywhere on 
the screen and insert, change, or delete text with simple keystrokes.  The 
commands used are a subset of the popular WordStar(TM) word processing 
program, so chances are you already know how to use Searchlight's editor.
     The main disadvantage of the full screen editor is that it's not 
compatible with all terminals- you must have an ANSI (or VT100) compatible 
terminal (or terminal emulator) to use it in remote mode.  Fortunately, 
software to emulate ANSI terminals is available for most microcomputers- 
for the IBM PC, we recommend the excellent ProComm communications package 
(TM Datastorm Technologies Inc).  In addition, you'll find that certain 
operations, such as PageUp and PageDown, are inherently slower when running 
from a remote terminal than when executed on a normal word processor- 
that's because the BBS can only send text at the speed of the modem being 
used, and cannot manipulate the screen at high speeds the way regular text 
editors can.  However, Searchlight makes extensive use of ANSI control 
sequences to minimize the amount of text that must be retransmitted to the 
remote screen.  In local mode, it operates at speeds comprable to most full 
screen text editors.  

Searchlight determines which editor to use based on the status of the ANSI 
graphics mode.  When ANSI (color or monochrome) is enabled, the full screen 
editor is used; otherwise, the line editor is used.  You can change the 
status of the ANSI flag from the main menu with the ANSI command.  

.H:...USING THE LINE EDITOR
.H:
.H:


USING THE LINE EDITOR

When ANSI mode is not selected, the line oriented editor is used by the 
BBS.  The editor is invoked whenever you POST a message or bulletin, EDIT 
an existing message, or send a message via the MAIL command.  

When the line editor is running, you'll see the message

  Enter text; type a period (.) when done.  Max NNN lines.

followed by the number "01".  NN is the maximum number of lines that you 
may enter into the message (it can be anywhere from 5 to 250, as defined on 
the subboard definition screen and in the CONFIG file).  

You would now begin typing your message.  As you type, you can correct 
errors by pressing the BACKSPACE key.  There's no need to press the RETURN 
key when you reach the end of a line; instead, the editor automatically 
performs "word wrapping", that is, it breaks the line at the nearest word 
boundry and moves the last word on the line down to the next new line.  As 
you type, you'll see the line numbers to the left of your text increase.

When you are done entering text, press the RETURN key once (so that the 
cursor is directly to the right of a line number).  Then type a single 
period (.), and press RETURN again.  This takes you out of the text 
insertion mode and places you at the line editor's subcommand prompt, which 
looks like this:

  Cont  Edit  Ins  Del  List  Abort  Save  -?

You can now enter an editor subcommand by typing the first letter of one of 
the above command words at the prompt.  The commands work as follows:


Save
This is the command that saves the message you just entered (or edited) 
onto the disk.  You use this command when you are done with the message, 
unless you've changed your mind and decided not to send the message at all.


Abort
The abort subcommand can be used to throw away the message in case you 
decide you don't want to send it.  It will prompt you to make sure that's 
what you really want to do, in order to insure that you don't abort the 
message by mistake.


Cont
The cont, or continue, subcommand lets you continue entering lines at the 
end of the message.  It places you back into the text entry mode at the 
next highest line number.


List
This command can be used to list, or review, the message just entered.  It 
will prompt you for a line number; if you enter 1, or simply press RETURN, 
the message is listed from line 1 to the end.  If you wish the listing to 
start at a specific line number, you can enter that line number.
     You can pause the listing with ^S, and cancel it with ^C.


Ins
This is the insert command.  It lets you insert one or more new lines of 
text in between two existing lines.  You are prompted to enter the number 
of the line that you want to insert BEFORE; for example, to insert between 
lines 11 and 12, you'd give line 12 as the target of the insertion.
     Once in insert mode, you can type as many new lines as you like.  To 
exit back to the subcommand prompt, once again enter a period at the 
beginning of a new line.


Del
The delete command lets you delete one or more entire lines of text from 
the message.  It prompts you to enter the starting and ending line numbers 
of the range of lines that you want to remove.


Edit
This command gives you a way to edit the individual characters on a line.  
It prompts you for the line number of the line you wish to edit, and gives 
you a choice:

  Change or Retype?

Respond by pressing "C" to change the line, or "R" to retype it.
Retyping simply lets you re-enter the entire line of text from scratch.  
You can only retype one line at a time.
     Change gives you the opportunity to edit portions of the line without 
having to re-key the entire line.  It works by prompting you for a "source" 
and a "replacement" string.  The "source" is a portion of the text, exactly 
as it appears in the line.  The "replacement" is a string of text that will 
replace the source string.  As an example, suppose we typed this into our 
message at line number 7: 

  07 Beethoven was bitten by a communist roach when he visited New York.
  08 .

Obviously, we meant to type the word "salmon" instead of "roach".  To 
correct it, we would edit the line and enter "roach" as the source string, 
and "salmon" as the replacement:

  Cont  Edit  Ins  Del  List  Abort  Save  -? E
  Line Number: 7

  Change or Retype? C
  Source String: roach
  Replacement  : salmon

Although the corrected line is not displayed on the screen, we could view 
it by using the "List" subcommand.  The new version of the line would look 
like this:

  07 Beethoven was bitten by a communist salmon when he visited New York.

     Notice that you can replace a string with a string of a different 
length (or even a null string, in which case the original text is deleted 
entirely).  However, the total length of the line cannot exceed 76 char
acters.  



EDITING EXISTING MESSGAES

The line editor can also be used to edit existing messages via the "Edit" 
command on the main menu.  When used in this fashion, it operates 
identically to the above description, except that you'll go right to the 
"Cont  Edit  List..." prompt rather than to the "Enter Text" prompt.  
Saving the message results in the edited version of the message replacing 
the old version on disk.  If you abort the edit, the changes you've made to 
the message, if any, are not saved; the original message is left intact.  

.H:...USING THE FULL SCREEN EDITOR
.H:
.H:


USING THE FULL SCREEN EDITOR

When using an ANSI compatible remote terminal, or when logged in locally, 
you'll be able to enter and edit text via Searchlight's full screen editor.  
The screen editor signs on by displaying an inverse video bar near the top 
of the screen that contains this message: 

  Editing, max NNN lines.  Press F1 or ^Z to exit, F2 or ^J for HELP.

If entering a new message, the lower portion of the screen will be clear 
and the cursor will be positioned at the top of the text entry "window" on 
the screen.  If editing and existing message, you'll see the first few 
lines of the message, with the cursor positioned at the first character in 
the first line.  You are now ready to enter or edit text.

To enter text, simply begin typing.  As with the line editor, you can 
correct single character mistakes as you type by pressing the BACKSPACE 
key.  As you approach the end of a line, the text will "word wrap" down to 
the next line, so there's no need to press the RETURN key at the end of 
lines (unless, of course, you wish to type lines shorter than the width of 
the screen).

Unlike the line editor, which has subcommands for performing editing, you 
can edit text in the full screen mode interactively, using the cursor 
position keys and control keys.  As you change the text, your screen is 
updated instantly to reflect exactly what the file looks like.  If you've 
ever used a word processor on your IBM PC, you're probably very familliar 
with this method of editing: you'll need only learn a few of the commands 
and keystrokes that are specific to Searchlight's editor.


WORDSTAR COMPATIBILITY

When we say Searchlight's editor is "WordStar Compatible", what we mean is 
that, in most cases, we've used the same key sequences to perform the same 
editing tasks as the WordStar word processor.  We picked WordStar because 
it's a well-known standard, and because its use of control key sequences 
(rather than menus or function keys) is particularly suitable for use with 
modems and remote terminals.
     Searchlight doesn't support ALL of WordStar's commands; in fact, it 
uses only a small subset of them.  In addition, we've incorporated a few 
special commands and keystrokes that are unique to our editor.



SCREEN EDITOR SUBCOMMANDS

If you press either F2 or ^J (control-J) while in the editing mode, you'll 
see one of two help messages at the top of your screen.  Press F2 again to 
see the second message.  The help text looks like this:

------------------------------------------------------------------------------
Left/^S  - Cursor left        ^A  - Word left     DEL/^G - Delete character
Right/^D - Cursor right       ^F  - Word right       ^T  - Delete word
 Up/^E   - Cursor up          ^V  - Insert mode      ^Y  - Delete line
Down/^X  - Cursor down      CR/^N - Insert line      ^B  - Reform paragraph
------------------------------------------------------------------------------

------------------------------------------------------------------------------
 PgUp/^R - Page up             ^QR - Top of file       ^QY - Truncate line
 PgDn/^C - Page down           ^QC - End of file       ^QL - Restore line
Home/^QS - Begin of line        ^L - Redraw line        ^W - Redraw screen
 End/^QD - End of line
------------------------------------------------------------------------------

These are the main editing commands.  Many are self-explanitory, some need 
further study as we'll devulge below.

The ^ character means CONTROL.  To generate a control key, you hold down 
the key marked "Ctrl" on your keyboard, then press the indicated letter 
key, then release both keys.

Notice that some commands have two ways of being entered, either via a 
control key or via a function key.  This is done because some remote 
terminals don't configure the function keys the same way they're supposed 
to be set up on the true ANSI terminal.  If a key such as F1 or HOME 
doesn't work on your terminal, you can always use the control key instead.

Remember to press F1 (or ^Z) to exit the full screen editor.


CURSOR MOVEMENT

To edit text, you must first move the cursor to the character, word, or 
line that you want to change.  The cursor movement keys accomplish this.

The four arrow keys (left, right, up, down) move the cursor one character 
in the indicated direction.  If you move up or down past the top or the 
bottom of the screen, the screen will scroll to display the previous or 
next line of text.  You cannot move the cursor past the beginning or end of 
the file, but you can append text to the end of the file.

Press the HOME key to move the cursor to the beginning of the current line.  
The END key takes the cursor to the end of the line.  

The ^A and ^F keys move you left and right a word at a time.  They don't 
move you off of the current line, however.

You can scroll a long message forward and backward one full screen at a 
time.  Press the PgUp and PgDn keys for this.  On a remote terminal, you 
must use ^R for pageup and ^C for pagedown.  

Finally, you can move directly to the beginning or end of the text.  Press 
^QR to get to the top of the file, ^QC to go to the bottom.


DELETION

You can delete text by characters, words, or lines.

To delete the character under the cursor, press either DEL or ^G.  Pressing 
the BACKSPACE key deletes the character to the left of the cursor.  When 
you delete text, the text to the right of the cursor moves left to fill the 
gap left by the deleted characters.

Text can be deleted a word at a time.  Place the cursor on the first char
acter in the word and press ^T.

You can delete all the text on the current line from the cursor position to 
the end of the line.  Press ^QY to perform this function.

To delete an entire line, position the cursor anywhere in the line you wish 
to delete, and press ^Y.  When you delete a line, the remaining lines in 
the message move up to fill the gap left by the deleted line.



INSERTION

The Searchlight editor supports either insert or ovestrike mode.  In insert 
mode, text you enter in the middle of a line causes the text to the right 
of the cursor to shift, making room for the new characters.  In overstrike 
mode, text overwrites any text underneath it, and no scrolling occurs.  The 
editor is in insert mode each time it starts up, but you can toggle between 
modes with the ^V key.

When insert mode is active, an attempt to insert characters into a full 
line causes the line to be split in half at the cursor position.  The 
message "Press ^B to reform paragraph" appears at the top of the screen.  
After typing your new text, press the ^B key and the subsequent text will 
move back up and reformat into a paragraph.  In overstrike mode, press ^N 
to force a line break before entering new text.

You can also press the RETURN key to enter a new line in the text.  In this 
case, the cursor moves down to next line, rather than remaining stationary 
as it does with ^N.



ERROR RECOVERY

If you make a mistake, you can restore the contents of the current line 
provided the cursor has not left the line.  Press ^QL for this function.



REFORMATTING TEXT

After performing many insert and delete operations, your text will no doubt 
have lost its original format: you'll have some lines that are shorter than 
others.  Never fear; you can reformat any continuous piece of text back 
into neat paragraph form by using the ^B command.  Simply move the cursor 
up to the first line in the paragraph and press ^B.  The editor will format 
all the subsequent text into a paragraph, until it reaches a blank line or 
a line that begins with a space or another non-alphabetic character.  



REDRAWING THE SCREEN

One of the pitfalls of using a full-screen editor via modem is that modems 
often generate spurious characters due to excessive noise on the phone 
lines.  Even with good modems and clean lines, you're bound to experience 
modem garbage at least once in a while.  If it happens while you're using 
the full screen editor, the results can be devistating: you'll see extra 
characters on the (remote) screen, your cursor will move, but the editor 
won't know about it, and will continue to operate under the assumption that 
your screen still looks the way it did before the "line hit" occured.

Fortunately, the Searchlight editor provides ways to recover the screen 
display when this happens.  If a modem error effects only the current line 
you're typing on, press ^L.  This command will resend the line to your 
terminal, and clear any garbage that might be present at then end of the 
line.  If there are a lot of errors on several lines, you can redraw the 
entire screen.  Simply press ^W.  The editor will clear the remote screen, 
resend the text window, and position the cursor in its rightful location.  

If you experience a lot of noise on a particular call, using the full 
screen editor can become extremely frustrating.  In this extreme case, you 
can always fall back to the line editor; simply disable ANSI graphics, and 
enter the message again.



ANSI COMPATIBILITY

Searchlight's full screen editor actually has three modes of operation, 
designed to allow it to interface with a variety of popular terminal 
software.  When editing remotely using an ANSI terminal, certain operations 
(such as inserting and deleting lines) require that the terminal software 
implement the appropriate ANSI escape sequences that will cause the remote 
screen to scroll appropriately.  Unfortunately, many terminal programs are 
geared for more traditional BBS systems without full screen editors, and 
thus do not support the required commands.  To work with such terminals, 
Searchlight includes a "Generic" ANSI mode.  To select the editor's mode of 
operation, type the "Options" command (on the BBS main menu) and adjust 
option number 5, called "Ansi Compatibility Mode".  There are three 
possible settings: Generic, ProComm, and Full.

In Generic mode, the Searchlight editor minimizes the types of ANSI commands 
sent to the terminal to a small subset of the most widely supported ones.  
Instead of scrolling the screen and performing inserts and deletes directly 
on the terminal, Searchlight redraws portions of the screen when a change 
needs to be made.  Of course, the time it takes to continuously redraw the 
screen can range from long to unbearable, depending on the speed of the 
modem used; but all of the supported features will work correctly.

In Full mode, Searchlight will edit with the full set of ANSI commands for 
the fastest possible output, and will require a full featured ANSI 
terminal.  The remaining mode, ProComm, is similar to Full but takes into 
account several quirks found in the ProComm (TM Datastorm Technologies) 
terminal software.

The New User Registration procedure displays information about ANSI modes, 
and prompts each new user for the correct mode as they log in.  



ADDITIONAL THOUGHTS ON FULL-SCREEN EDITING

Notice that, when you're using the BBS in ANSI mode, the above full screen 
editing commands are actually available everywhere in the system where a 
line of input is required.  This includes entry of message subjects, user 
names, etc.; you can edit the line of text being typed with all of the 
commands that pertain to editing of the current line, including the ^L 
command to redraw the line.

.H:...USING PREPARED TEXT FILES
.H:
.H:


USING PREPARED TEXT FILES

Sometimes, instead of typing a message by hand, you'll want to insert a 
previously written file of text into a message, bulletin, or electronic 
letter.  There are several ways to accomplish this with the Searchlight's
editors.



UPLOADING

The simplest way to insert a text file into a message is to log on from a 
remote location using a terminal that's capable of sending lines of text 
from a file (this is sometimes referred to as "ASCII Upload" by the 
terminal's software).  The editor doesn't know that you aren't really 
typing the message; it simply accepts the text coming from the terminal as 
if it were keyboard input, regardless of the fact that the terminal is 
really sending text from a file.  The message editor is able to accept text 
at the fastest rate it can be sent by the terminal.  

There are a couple of things to look out for when using this method of 
sending text.  First, the text file should not contain lines longer than 76 
characters; if it does, the BBS will try to wordwrap the text, resulting in 
a sloppy format.  Also make sure the text doesn't exceed the maxium line 
length of the message.

Some communications programs won't show a correct display when you upload 
text to the full screen text editor.  In particular, ProComm(TM) shows an 
excessive amount of control characters on the screen, even though the 
upload proceeds normally.  The solution is to press ^W after the text has 
been sent.

You can't send text that contains embedded ANSI escape sequences, such as 
text that moves the cursor around on the screen or effects color changes 
(although eight-bit IBM graphics characters CAN be used).  Since the full 
screen editor interprets these sequences as commands, not as part of the 
message, it will cause undesirable things to happen to the message.  If you 
want embedded control codes, use one of the other methods for inserting 
text into messages.  



LOADING FILES DIRECTLY

The text editors feature a special function, executable only by SYSOPs, 
that lets you load a text file directly into a message.  To use it, press 
F1 and then "L" for the full screen editor, or press "F" at the subcommand 
prompt of the line editor.

The editor will prompt you for a filename, and load the text of the 
specified file into the message.  You can give a full pathname and drive 
letter if you want.



THE '%%FILENAME' DIRECTIVE

A third method of including text in messages is to use the '%%FILENAME' 
directive inside of a message.  It's the most efficient and most flexible 
method, and should be used in most cases.

This method involves placing a special line within the message.  It doesn't 
matter which editor you use to create the message.  Let's suppose we have a 
text file called "PHONE.TXT" that we wish to include in a message we're 
sending to someone.  We could write the following:

  01 Bill,
  02 Here's that phone number list I promised you:
  03
  04 %%PHONE.TXT
  05
  06 Enjoy.

When we list, save, or edit this message later on, it looks exactly like 
the six lines shown above.  However, when the message is read by the BBS 
system's read routines, something special happens when line 4 is encoun
tered.  Instead of printing line 4 verbatim, the BBS looks into a special 
directory for a file called PHONE.TXT, and displays the contents of that 
file on the screen.  When the PHONE.TXT file is done, the BBS goes back and 
prints out lines 5 and 6.

The '%%FILENAME' directive is convenient because the included file doesn't 
take space in the BBS's message file, doesn't have to be less than 250 lines 
long, and can contain any ANSI sequences that you desire.  Notice, however, 
that you may give ONLY a filename with this directive, NOT a drive letter 
or pathname.  The text file must reside in the directory you designated as 
the "include" directory when configuring your system via the CONFIG 
program.  This is done for the purpose of security; since anyone can enter 
a '%%' directive into a message, you want to ensure that users don't try to 
read files which they don't have access to.  It is assumed that anything in 
the "include" directory is public knowledge.  

The '%%' characters must be in the first column on the line, and the line 
must not contain any other text after the filename.  You can have more than 
one include file in a particular message, however.

If you only use file inclusion yourself, it doesn't matter what you choose 
as your "include" directory, as long as you store all the files which you 
want to include in messages there.  However, if you want your users to be 
able to upload files to the system and include them in messages, make the 
"include" directory acessable via the FILES system; that is, define a file 
directory in your FILEDIR.DEF file that uses the include directory to store 
the uploads.  This way, your users will be able to upload files to the 
include directory, and access them in messages they post or send.  Using 
include files this way, for example, is the only way to allow users to post 
messages containing ANSI escape sequences on your BBS.


THE '@@FILENAME' DIRECTIVE

In addition to including files in the "include" directory, we've also 
provided a way to access files in your "text" directory from within a 
message.  It's similar to the "%%filename" construct used above, but you 
type "@@filename" instead.

This directive lets you access any of your system's text files- including 
custom menus, help files, login screens, etc.- from within a message.  We 
don't recommend letting your users have upload access to your TEXT 
directory, however, since these text files are used by Searchlight BBS and 
you'll want to remain in total control of their contents.

.H:...EXTENDED SYSOP COMMANDS
.H:
.H:


SUMMARY OF EXTENDED SYSOP COMMANDS

The following pages contain a summary of the commands available on the 
Extended Sysop Command menu.  SYSOPs can access this menu by entering the 
"2-Sysop" command on the BBS main menu, and typing "E" to enter the 
Extended Sysop mode.

While at the "Sysop:" prompt, you may enter any of the commands listed 
below by typing the first letter of the command followed by the RETURN key.  
To read the documentation for a command while on-line, use the "?" (online 
help) command.



  ----------------[ Searchlight Sysop Command Summary ]----------------

   Balance ... Balance User File       MsgPurg ... Old Message Purge
   Check ..... Check Message File      Quit ...... Return to BBS
   Delete .... Delete User             SwapSub ... Swap Subboards
   Free ...... Show Free Space         UserPurg .. Inactive User Purge

  --------------------[ Press <?> For Online Help ]--------------------


BALANCE
-------
The BALANCE command can be used periodically to "rebalance" the user file
search tree. Rebalancing optimizes the search path to each name, and results
in faster searching of the user file. Rebalancing can also be used to repair
a user file that's been corrupted due to power failures, etc.
     Upon completion, the Balance command determines if your USER.BBS data 
file can be made smaller by truncating unused records from the end of the 
file.  If unused records exist and can be removed, the program informs you, 
and asks you whether you wish to truncate the file.  If you press "Y", the 
excess records are deleted; otherwise, they are kept in the file (notice, 
however, that free records within the USER.BBS file are reused by the 
program; the purpose of truncating the file is to allow you to free up disk 
space to DOS rather that have the BBS hold on to it until it is needed).
     It is reccomended that you use this command once every few months, or
more often if you add and delete many user names. If you run a "closed"
system and do not add or delete users, you will only have to run this once,
after all your usernames have been entered. The best time to run BALANCE is
right after purging a large number of names from the user file.


CHECK
-----
The CHECK command performs a complete check and repair operation on the BBS
message file, including subboards, mailboxes, and bulletins. Its purpose is
to verify the integrity of the message file and to repair a "crashed" file.
Such a file might result from

  - Power failure during critical disk write operations
  - Disk errors (damaged portions of the disk)
  - Improper modification of the BBS files by other programs
  - Hardware malfunctions, glitches, etc.

If you notice messages that do not save or display correctly, "garbage" in
messages, or any apparent malfunction of the message system, you should take
the following steps:

  1. Run the CHECK command
     CHECK will automatically repair any errors that it finds.
  2. Return to the BBS and delete any messages that appear incorrect

If you consistently have errors or if you trace the cause of an error to an 
apparent bug in the BBS program, please contact Searchlight Software for 
further assistance.  

As an additional feature, the Check command looks for free message space at 
the end of the MESSAGE.BBS file which can be truncated and returned to DOS.
If such space is available, you are given the opportunity to truncate the 
file (thus reducing the size of your MESSAGE.BBS file on disk). 


.E
DELETE
------
This command allows you to delete a single username from the user file. The
user's name, along with their logon information and any mail in their mail
box, are removed from the system.  
     To delete multiple users, refer to the USERPURG command.
.E


FREE
----
This command will display the total number of records and number of free 
records available in the system's User and Message files (USER.BBS and 
MESSAGE.BBS).


MSGPURG
-------
The MSGPURG command allows you to automatically purge old messages from the 
system. When you run the command, it will prompt you for a cutoff date, a 
cutoff access level, and will let you choose to delete mail, public 
messages, or both.  
     The cutoff date is the date which defines an "old" message. All
messages posted on or before this date are considered for deletion.
     The cutoff access level is used to screen out messages from the delete
mail scan. Only users with access levels equal to or less than this number
will have their mail considered for deletion.
     Protected public messages are not deleted under any conditions. Public
messages can be protected by the SYSOP by using the EDIT command from the
main menu.
     The system will warn you before it begins the delete scan. You must
press Y to continue, or N to abort the scan. When completed, the command
will report the number of messages deleted. You can abort the command early 
by pressing Spacebar or ^C.


.E
QUIT
----
The QUIT command returns you to the Searchlight BBS Main Menu.
.E


SWAPSUB
-------
The SwapSub command is used to exhange the contents of two subboards. Enter 
the subboard letters of the first and second subboards; the titles, messages 
and other information of the first subboard is interchanged with those of the 
second subboard. You can type '?' to get a subboard listing, or press the 
<return> key to quit the command without making any changes.
     Any external files associated with a subboard, such as opening text 
messages, door definition files, or file directory definition files, are 
NOT renamed or altered in any way. It is up to you to manage these files if 
desired.


USERPURG
--------
The USERPURG command effects a purge of the user file. It automatically 
deletes users, along with their mail, based on the date the user last 
logged in and the user's access level.  
     You must specify the cutoff date and cutoff access level. The program
will scan the entire user file. Those users who have not logged in since the
cutoff date, and who have access levels less than or equal to the cutoff
access level, will be removed from the system (note: the GUEST and SYSOP
accounts are exempted from the scan).
     Before the deletion begins, the program will warn you of what it is
about to do. You must press Y to confirm the deletion, or N to abort the
purge command.  In addition, you have the option to confirm all deletions 
before they occur; you are prompted with:

  Confirm each deletion (Y/N)?

If you respond with "Y", each username being considered for deletion is 
printed, and you are prompted to enter a Y to delete the user, N to not 
delete the user, or Q to quit the entire command.
     If you choose NOT to confirm each deletion, the command will progress 
without any further prompts until the entire file is processed; however, 
you can still abort the command by pressing the ^C key.

.H:...FILES SUBSYSTEM
.H:
.H:


SEARCHLIGHT BBS FILE TRANSFER SYSTEM


Introduction

    One of the most valuable features of the Searchlight BBS is its file 
transfer system.  With file transfer, Searchlight gives you the ability to 
transmit files of any type from one computer to another over the telephone, 
with the capability to check for errors.  It lets you set up multiple 
directories where users can "upload" a file or choose from a selection of 
files to "download".  You can have as many as 26 directories active at 
once, and a different set of directories for each message subboard on your 
system, giving you thousands of possible directory setups.  As the sysop, 
you can assign different access levels to control what users have access to 
what files.  

    The Searchlight's file system has many useful features: alphabetical 
and chronological directory listings, wildcard directories, global 
directory scans, Xmodem, CRC Xmodem, and Ymodem file transfers, password 
protection, and private file transfers.  Users can view the internal 
directory of an ARChive file while online.  SYSOPs can delete files, move 
files between directories, and import filenames from existing files on disk 
quickly and easily.  You can even edit file descriptions after they've been 
entered.  Plus, the Searchlight's file transfer programs are the fastest 
available, due to advanced two-way interrupt driven RS232 handling.  



SETTING UP DIRECTORIES

Now that the hype is out of the way, let's get down to the business of 
setting up your system to send and receive files.  If you tried to run the 
file system (by issuing the "Files" command from the BBS main menu) you 
probably received a message saying that "no file transfer directories are 
available".  You must set up some directories before you can begin.  

First, a word about what we mean by "file transfer directories".  You are 
undoubtably aware that the MSDOS operating system uses directories and sub
directory structures.  For the purposes of the BBS, however, we will be 
defining our own directory structure, partly to afford a greater level of 
security than is available with DOS, partly to extend the functionality of 
the directory beyond what DOS provides.  Still, your upload/download 
directories can, and should, be constructed so that they correspond to 
actual DOS directories- it makes a lot of operations much easier.

The first step should be to create DOS directories on your disk to hold the 
files that will appear in the file transfer directories.  You can have as 
many as 26 directories.  Most SYSOPs set up directories according to 
various topics such as utilities, communications, word processing, games, 
graphics, etc.  The topics you choose, of course, are totally up to you.

One directory that almost every BBS has is called UPLOADS, and it's used to 
contain all the "new and recently uploaded" files on the system.  As an 
example, we will create this directory in the "root" directory of the C: 
drive.  The proper command, from the DOS prompt, would be:

  C> MKDIR C:\UPLOADS

Next, we have to configure the FILES program to use the new UPLOADS 
directory.  The FILES program is configured via a text file called 
FILEDIR.DEF, and/or a series of text files called FILEn.DEF, where "n" is a 
letter from A to X, designating a particular message subboard.  These files 
must be present in the BBS's main working directory.  

File system .DEF files contain lists of available file directories, one per 
line, written in the format shown below.  FILEDIR.DEF is the "master" 
directory list, which is used when no subboard-specific directory list is 
available.  FILEn.DEF files are used to create file directory lists for 
individual subboards.  For example, if you create a file named FILEC.DEF, 
it is used as the file system definition file when entering the FILES 
section from the [C] subboard on the main menu.  If FILEC.DEF did not 
exist, FILEDIR.DEF would be used instead.  Thus, you can have individual 
file directories for particular subboards, and a default set of directories 
for the rest.

Use a text editor to create your .DEF files.  Parameters are typed in with 
semicolons to seperate them.  The format is as follows: 


  NAME;Access;Path;Description


NAME is the name for the directory.  It must be a one to eight character, 
legal DOS filename, with no extension.  NAME is used as the filename for 
the file that will hold the directory information.

ACCESS is a number from zero to 255, and it defines the access level for 
the directory.  This is similar to subboard access levels; users who's 
Files Access level is greater than or equal to this number can have access 
to the files in this directory, and others may not (note that additional 
security is available with the "Password" option).
     You must set the access level of the FIRST directory in your list to 
zero.  This is because all users will be placed into directory 'A' initi
ally.

PATH is the pathname to the directory that will contain the files.  
Description is a discription of the directory's contents.  For our example, 
the line entered into the FILEDIR.DEF file might look like this:

  UPLOADS;10;C:\UPLOADS;New and Recently Uploaded Files

Don't leave any blank lines, or extra spaces between items or at the 
beginning or end of the line.  If you wish to create more directories, 
simply add more such lines to your FILEDIR.DEF file, or create additional 
files as noted above to provide subboard-specific directory lists.


SETTING A DEFAULT TEXT MESSAGE

You can create a message that will be displayed automatically each time the 
FILES program is run.  This message can contain any instructions or 
comments that you wish to give each time you enter the file transfer 
system.

The FILES default message is a text file called FILES.TXT and/or FILES.ANS.  
It must be located in the user-defined "text" directory.  As with BBS text 
files, you can either provide both a .TXT and an .ANS version of the file, 
or just the .TXT version, which will be delivered to everyone.  The FILES 
text message is optional; if you don't provide one, no error message will 
be generated.



USING THE FILE TRANSFER SYSTEM

To use the file transfer system, log in to the BBS and execute the FILES 
command from the main menu.  You'll see a message indicating that the files 
system is active, followed by your text message (if you created one), and 
finally a command prompt similar to the BBS's main menu prompt.  From here, 
you can execute the FILES system commands, as we'll describe in a moment.

If no subboard-specific .DEF file exists for the subboard you're using when 
you execute FILES, the FILEDIR.DEF file is loaded.  If a particular 
subboard's .DEF file is available, it is loaded, and the message "Loading 
Subboard Directories" appears, informing you that a special group of file 
directories, available only from that subboard, is becoming available.


IF YOU RECEIVE AN ERROR MESSAGE ...

If you receive an error message when entering the FILES system for the 
first time, it's probably because you made a mistake when creating the 
FILEDIR.DEF file, or because you specified the name of a directory or 
directory path that does not exist (perhaps you misspelled something).  
Check the FILEDIR.DEF file and try it again.  



FILES SYSTEM COMMANDS

Accessing the FILES system presents you with a new command prompt and a new 
set of commands.  The new prompt works the same way as the BBS's main 
command prompt; it allows you to enter commands by typing the first letter 
of the command or by scrolling through the commands with the SPACEBAR and 
BACKSPACE keys, it will list available commands via the "Help" command, and 
it will display an explination of each command when the "?" key is pressed.
The name and letter of the currently active file directory is displayed to 
the left of the prompt.  To return to the BBS, you use the "Quit" command.


PROTOCOLS
You can select an upload/download protocol using the Xproto command.  
Xmodem, CRC Xmodem, and Ymodem protocols are currently available.


UPLOADING
Use the "Upload" command to upload files to the BBS.  "Uploading" means to 
send a file FROM the remote terminal TO the BBS.  The remote terminal must 
support one of the file transfer protocols used by the BBS.
     Before an upload begins, the program checks all directories to see if 
a file of the same name already exists on the BBS.  If the file is a 
duplicate, the message

  File already exists. Thanks anyway.

is displayed, and the upload aborts. If the file doesn't appear in any of 
the BBS directories but a file of the same name exists on the disk in the 
directory where the upload will be placed, the message

  Filename exists

appears, and the file transfer is similarly aborted.
     Don't attempt to use the Upload command when logged in to the system 
locally.  Instead, you can use the Get command to load existing files into 
your BBS's list of files available for downloading.


.E
DOWNLOADING
Files in the currently active directory can be downloaded, or sent FROM the 
BBS and TO the remote terminal, via the Download command.  Don't use 
Download during a local login.
     If a user's download/upload ration exceeds the maximum value as 
defined in the CONFIG program, no downloading is allowed until the user has 
uploaded enough to reduce his or her ratio to within the allowed range. 
Users who are "non-validated" (those who's access level is no larger than 
the default new user's access level) are prevented from downloading.
     The approximate time for the download is computed before the file 
transfer begins.  If the time to download the file exceeds the amount of 
time left in the current user's session, the download is not allowed.
.E


DIRECTORY LISTINGS
There are several types of directory listings that can be gotten using the 
Files and New commands.  Wildcard, alphabetical, and date-sorted listings 
are available.
     To switch from one download directory to another, use the List command 
for a list of available directories, and Jump to move between them.


FILE MAINTENANCE
Sysops and co-sysops can delete files, move files from one directory to 
another, and change the description associated with a file.  The commands 
to execute these functions are Kill, Move, and Edit.  These operations can 
also be performed by the user who uploaded the file.


PASSWORD PROTECTION
Passwords can be assigned to files on an individual basis using the Passwd 
command.  Once a file is assigned a password, it cannot be downloaded or 
deleted without giving the password.  Even cosysops must know the password 
of a protected file to download it; only the SYSOP can access the file 
without using the password.
     A typical use of the Passwd option would be to allow two users to 
exchange a file privately.  The sender would upload the file and assign a 
password to it.  He or she would then communicate the password to the 
intended receiver (by sending a private message), who would then use the 
password to download the file.  If more than one user needs to access the 
file, the sender gives the password to each person who needs to be able to 
download it.
     Another way password protection can be used is via the "default 
password for uploads" field in the CONFIG file.  If this field is filled 
in, each new file that is uploaded to the system is assigned the default 
password.  Thus, newly uploaded files cannot be accessed by the general 
user population; only the SYSOP, and those who know the default password, 
can access a new file.  Typically, you'd use this option to give yourself 
the opportunity to check all new files before they can be downloaded by the 
users of your BBS.  After confirming that the file is OK to download, you 
would remove the password (by using the Passwd command).
     A "+" sign appears in the directory listing of a password protected 
file.  This allows you to identify such files easily.
.H:...FILES COMMAND SUMMARY
.H:
.H:


SUMMARY OF FILES SYSTEM COMMANDS

Here's a printout of the File System's main menu of commands, followed by 
an explanation of what each command does.


  ----------------[ Searchlight Files Command Summary ]----------------

   ArcDir .... View Files in Archive   New ....... New Files by Date
   Chat ...... Page the Sysop          Owner ..... Show Add'l File Info
   Download .. Download File           Passwd .... Assign/Change Passwords
   Edit ...... Edit File Descriptions  Quit ...... Return to BBS
   Files ..... Directory of Files      Space ..... Show Free Upload Space
   Get ....... Get Disk FIlenames      Type ...... Read Text Files
   Jump ...... Jump to Directory       Upload .... Upload File
   Kill ...... Delete File             WideDir ... Brief File Listing
   List ...... List of Directories     XProto .... Change Xfer Protocol
   Move ...... Move File to New Dir

  --------------------[ Press <?> For Online Help ]--------------------


ARCDIR
------
This command displays the internal directory of an ARChive file (a com-
pressed library file created with one of the popular archive utility
programs). You are prompted for the filename; you may leave off the .ARC
extension. The ARC file's directory is displayed in a format similar to that
of the "verbose" list option found in the archive utility programs.


CHAT
----
This command allows a remote user to page the system operator. If the SYSOP 
indicates that he/she is available (via the ALT-A command), paging occurs, 
otherwise the message "sysop not available" is displayed.
     To answer a page at the local computer, press any key. To exit from 
the chat mode, press the ESC key.


DOWNLOAD
--------
The Download command is used to transfer files from the BBS to the remote 
terminal. The remote computer or terminal must be capable of receiving the 
file using one of three possible transfer protocols: Xmodem, CRC Xmodem, or 
Ymodem. If no protocol has been previously selected when you give the 
Download command, you will be prompted for a protocol; otherwise, the 
protocol used last is used.  
     To begin downloading, enter the name of the file you wish to receive.
You must enter the full filename. ONLY FILES IN THE CURRENT DIRECTORY may be
downloaded; if you wish to download a file from a directory other than the
one that's current, you must Jump to that directory first. When the BBS
displays the message "Ready to send", the file transfer is ready to begin.
However, before you can receive the file, you must give your terminal the
proper command. Usually, this is done by selecting an option to receive
files on a menu.
     A file may be password protected. If you attempt to download such a
file, you will be prompted for a password, and the download will proceed
only if you provide the correct password.
     To get a directory of the files available for downloading, use the
Files and New commands.


EDIT
----
This command allows you to change the 40-character description associated
with a file. You can only change a file that you uploaded, unless you have
sysop status, in which case you may edit any file's description.


.E
FILES
-----
The Files command displays a listing of files available for downloading. It
prompts you to enter the "Starting Filename or Wildcard" of the directory
you wish to view. There are three ways to respond to this prompt:
.E
     Pressing RETURN without typing anything gives you a list of all files
in the current directory. The list is in alphabetical order and shows the
filename, date uploaded, size in Kilobytes, and a description of the file.
     Typing a filename, or the first few characters of a filename, WITHOUT a
wildcard, lists files in alphabetical order starting with the filename
entered. For example, if you enter "L", you will get a list beginning with
the files that start with the letter L, and continuing to the end.
     Finally, you may type a wildcard (a filename containing one or more
"*" or "?" characters). In this case, only those files that match the
wildcard specification are shown. In addition, the prompt "Search all
directories (Y/N)?" appears. If "Y" is selected, the program will list all
files in all directories that match the wildcard; otherwise, only files in
the current directory are listed.
     A "+" sign displayed in the file listing indicates a password protected
file. You can only be download such a file if you know the password.
     You may abort any file listing at any time by pressing the <spacebar>
or <ctrl-c> keys. Also, refer to the "New" command for information about
date-sorted file listings.


GET
---
The GET command is used (by the SYSOP only) to load the names of existing
files into the BBS's directory, without having to upload them.
     To add files to a directory, use DOS commands to copy the files to the
appropriate disk and directory. When you execute GET, the BBS reads the disk
directory of the active drive and compares the filenames it finds to the
filenames in its own internal directory list. When a new file is found, its
name is printed and you are prompted to enter a 1 to 40 character
description of the file. If you enter no description, the file is skipped;
otherwise, it is added to the BBS's list of files.
     You must enter a filename or wildcard mask for GET to use.  The 
command will search the disk's directory for files matching the filename or 
wildcard that you entered.


.E
JUMP
----
This command is used to access the various file directories available on
the system. Up to 26 directories are available, indicated by the letters
[A] thru [Z] to the left of the command prompt. The Jump command will
prompt you for the letter of the directory you want to access. You can only
download files in the "current" directory.
     To see the list of available directories, either type "?" in response
to the Jump command's prompt, or use the List command.
.E

KILL
----
The KILL command deletes a file. If you have Sysop or Co-Sysop access, you
may delete any file; otherwise, you can only delete a file if you uploaded
it.
       SYSOP ONLY: You may delete the file from the BBS's list of files
without actually deleting the file from the disk. You will be prompted for
this option.


LIST
----
The LIST command gives you a list of available directories. In order to view
or download files in a specific directory, you must make it the current
directory; you do this by responding to the List command's prompt with the
directory letter, [A] thru [Z], or by using the Jump command (see Jump).


MOVE
----
Use the MOVE command to transfer, or move, a file from one directory to
another. Actually, the file is copied into the destination directory and
then the original file is deleted.
     Users with Sysop access can move any file. Otherwise, you can only move
your own files (files you have uploaded) into directories that you have
access to.


NEW
---
The NEW command allows you to get a listing of "new" files since the last
time you logged on, or since any specified date.
     To use the New command, answer the prompt with the desired target date.
The date shown in brackets, which is the date you last logged on, is used
as the default date if you press RETURN. A second prompt appears, "Scan all
directories (Y/N)"- if you enter Y, all directories will be searched for
new files, otherwise only the current directory is searched.
     Dates are entered in the form month-day-year. You can use dashes,
slashes, or any nonnumeric seperators. If you don't include the year (eg.
"9/21"), it defaults to the current year.
     The new file listing appears in reverse date-sorted order. It is often
useful to run the NEW command with a very early target date, as this gives
you a chronological file listing rather than an alphabetical listing as
with the FILES command.


.E
OWNER
-----
This command prompts you for a filename and it displays the file's owner
(the name of the person who uploaded the file) and the number of times that
the file has been downloaded.
.E

PASSWD
------
The PASSWD command lets you assign a password to a file. Once a password is
assigned, only users who know the password are able to download the file.
     You can only assign a password to a file that you have uploaded. If
the file already has a password, you can only change it if you can give the
old password. Note that the SYSOP can assign an automatic password to all
newly uploaded files, thus preventing anyone from downloading a new file
until it has been cleared by the sysop.


QUIT
----
The QUIT command returns you to the Searchlight BBS Main Menu.


SPACE
-----
This command displays the amount of free space, in bytes, available on the
disk for uploading files, as well as the total capacity of the disk drive.


TYPE
----
The TYPE command allows you to read a text file. The output will pause every
24 lines and can be controlled with pause (^S) and break (^C) keys, just
like when you read messages and other text.
     You should only try to TYPE files that contain text. Typing other files
will (usually) result in "garbage" characters being sent to your terminal.
If this happens, press ^C to abort the file.


UPLOAD
------
The Upload command is used to send files from a remote computer to the BBS. 
The remote computer or terminal must be capable of sending the file using 
Xmodem, CRC Xmodem, or Ymodem protocol. If no protocol has been previously 
selected when you give the Upload command, you will be prompted for a 
protocol; otherwise, the previously selected protocol is used.  
     To begin uploading, enter the filename of the file you wish to send.
You must enter a legal MSDOS filename (8 character filename with optional 3
character extension). Do not include drive letters or directory pathnames. 
You cannot upload a file that already exists on the BBS (delete the file 
first).
     If less than 200K of disk space is available, the BBS will display the
amount of space left and ask if you wish to continue. Press "N" if your file
is larger than the amount of space available, or "Y" to go on.
     When the BBS is ready to receive your file, it will display the message
"ready to receive". What happens next depends on the terminal software that
you use. In most cases, you must give a command to your software that tells
it to load the file and begin sending it using the proper protocol.
     When the file transfer completes successfully, you will be prompted to
enter a 1 to 40 character description of the file to be displayed so that
others will know what information the file contains. When uploading a file 
as a SYSOP, you have the option of NOT giving the file a description. In 
this case, the file is not entered into the download directory, although it 
remains on the disk.
     If the SYSOP has assigned a "default" password to the files system,
your file will be password protected until it is cleared by the sysop.
     The system "gives back" the amount of time it took you to upload the
file by increasing your time limit by the time it took, so that you lose no
time on the system for uploading.


WIDEDIR
-------
This command gives you a "wide", four-across file listing which shows only 
the filename and file size in Kilobytes. It is similar to the DIR/W command 
in MSDOS. There is no parameter for WideDir; all files in the current 
directory are listed. You may abort the listing with ^C.


XPROTO
------
This command lets you change the transfer protocol used for uploading and
downloading files. The available protocols are Xmodem, CRC Xmodem, and
Ymodem. If you attempt to upload or download a file without first selecting 
a protocol, the program will prompt you for one before continuing.
     Once a protocol is selected, it is used by default for all subsequent 
file transfers until you change it with the XProto command. 
.H:...DOORS SUBSYSTEM
.H:
.H:


SEARCHLIGHT BBS DOORS SUBSYSTEM


Introduction

The Searchlight BBS DOORS system provides a method for linking external 
programs to your BBS.  You can add additional features and capabilities to 
your system, such as games, user polls, extended sysop features, etc.  
DOORS can be programs provided by Searchlight Software, programs you write 
yourself, or programs written by others.  In addition, many general purpose 
MSDOS programs and utilities can be used as DOORS.  

Most popular bulletin board systems provide only a means of executing a 
subprocess as the DOORS mechanism.  This has led to a plethora of external 
programs, drivers, and other methods of directing a Door program's input 
and output to the COM port for use by a remote caller.  By contrast, 
Searchlight BBS fully supports the COM port during Door operation; you can 
use almost any program directly as a door, without having to alter the 
program, load a serial port driver, or use a BATCH file.  Even programs 
which use full-screen cursor manipulation, color, IBM type character 
graphics, and simple sound effects will work, as long as these programs use 
either the BIOS or DOS for their input and output.  In addition, the 
Searchlight DOORS system monitors and handles loss of carrier; optionally 
write-protects disk drives while the Door is active; and consumes only 30K 
of memory above DOS, freeing the rest of your RAM for use by the Door.  

We've also included features that help make Searchlight compatible with 
many of the Door programs already written for other BBS systems.  Search
light's COM port support can be fully disabled, allowing you to run pro
grams which provide their own COM support, and Searchlight will optionally 
generate a configuration file (normally called PCBOARD.SYS) which is 
compatible with the configuration file created by the PCBoard(TM) bulletin 
board system when running a Door.  

IMPORTANT NOTE: If you use an ANSI.SYS replacement which bypasses the BIOS 
level of I/O, you will be unable to run DOS shells and other programs that 
output through DOS on your system.  We recommend switching back to the 
original DOS ANSI.SYS driver when running Doors under Searchlight.


SETTING UP DOORS: THE DOORS.DEF AND DOORSn.DEF FILES

Setting up a list of Doors is done by creating a text file called 
DOORS.DEF, which must be present in the bbs "main" directory (the directory 
that's active when you run the BBS).  You can use any text editor or word 
processor that writes standard ASCII text files.  The Searchlight's built 
in text editor can be used for this purpose via the "TextEdit" option on 
the Sysop's menu.

DOORS.DEF contains a list of available Doors, one per line.  As with the 
FILEDIR.DEF files, you can define a seperate DOORS menu for each message 
subboard on your system, for a total of up to 24 seperate DOORS menus (each 
with up to 40 choices).  To designate a DOORS list for a particular sub
board, you create a file called DOORSn.DEF, where "n" is a letter from A to 
X (corresponding to subboards A thru X).  If a particular DOORSn.DEF file 
does not exist, the general file, DOORS.DEF, is used instead; therefore, 
you need create only one file if you don't want seperate DOORS menus for 
each subboard.  If no .DEF file exists at all, the BBS will display the 
message "No Doors Available" when you try to execute a Doors command.  

To define doors, enter one line of text for each door program, up to 40 
lines per file.  The format of a door definition entry is as follows:


  type;writeprot;abort;access;description;dir;command


TYPE is a number, either 0, 1, 2 or 9.  Zero specifies that NO modem i/o 
support will be provided for this program; the program is expected to 
interface with the serial port itself.  1 indicates that the program does 
not contain serial i/o support, and serial support will be provided by the 
BBS.  
     Use type 1 with most programs.  Type 0 can be used with programs that 
use the serial port themselves, such as door programs written for use with 
other BBS systems which do not provide serial i/o support.  Usually, type 0 
programs will require parameters to tell them which serial port and baud 
rate to use; they may read this information in the doors system con
figuration file, Searchlight CONFIG file, or via explicit command line 
parameters.  
     The type 2 switch is provided to allow Searchlight to correctly handle 
Door programs using color on a monochrome system.  Normally, Doors 
determines whether you are using a color or monochrome CRT on your system, 
and interprets the door program's request to change screen attributes 
accordingly.  However, with some programs, notably games written in BASIC,
you will want to use color regardless of the fact that the local CRT is 
monochrome.  Specifying "2" as the door type allows you to do this.
     Finally, type 9 is a special type that allows you to create multilayer 
DOORS menus.  This option is discussed further below.

WRITEPROT is a value that determines whether the disk drives will be write 
protected during the execution of the door.  If set to 0, write protection 
is not in effect, and all disk i/o proceeds as usual.  If set to 1, soft
ware write protect is enabled on all disk drives.  No disk writes will be 
allowed while this door is running.  
     Write protection is useful when you wish to run a program that allows 
users to specify filenames to which data will be written.  For example, a 
game program might have a "save game" option that asks the user to enter 
the name of the file to hold the saved game.  If the user were to type the 
name of an existing file, he or she could easily destroy important data on 
your disk.  The software write protect guards against this.  Any attempt to 
write to a disk while write protect is in effect will result in the 
standard DOS "Write protect error writing drive" message.

ABORT specifies the action to be taken if the Doors system detects a 
carrier signal loss (ie. if the user hangs up the telephone) during the 
operation of a door.  If set to 0, the carrier is not monitored, and no 
action is taken.  If set to 1, the door system will attempt to terminate 
the running program via the DOS terminate procedure.  If set to 2, the 
doors system will reboot the computer when a carrier loss occurs.  
     Abort type 0 should only be used with programs that do their own 
carrier loss checking, or with programs that must not be interrupted during 
processing.  Abort type 1 is the standard abort method; it will work with 
programs that abort normally through the DOS TERMINATE process.  Type 1 is 
the preferred way to abort a program.
     Some programs, notably COMMAND.COM, will not abort via the standard 
DOS call, because they replace the return vector with a pointer back to 
their own code.  Many games and other ill-behaved programs fall under this 
category.  If a program will not return to the BBS via the TERMINATE call, 
an alternative is to set abort type 2, which will initiate a warm boot of 
the computer if a carrier loss is detected during the operation of the door 
program.  If you use this method of abort, you must have a DOS disk in 
drive A:, or a hard disk and no floppy in the A: drive, and you must 
include in your AUTOEXEC.BAT file the commands neccesary to start up the 
BBS program after the system boots itself up.  Since it will be an 
unattended bootup, you must eliminate any programs from your AUTOEXEC that 
prompt you for input when they run.  

ACCESS defines the minimum access level that a user will need to be able to 
access the program.  Only users with BBS Access levels greater than or 
equal to this number will be able to run the door; other users will neither 
see nor be able to execute this program.  

DESCRIPTION is a short description of the external program.  Don't use the 
";" character as part of the description, since this character is used as a 
field seperator.  

DIR is the drive/directory specification for the directory that will be 
made the "current" directory before the program is run.  Since many 
programs require data files that reside in the current directory when they 
are run, you can specify the directory to switch to before the program is 
executed.  The BBS automatically switches back to its own directory when 
the door "closes".  
     If you do not need to change directories when running an external 
program, or you wish to use the current directory, type a single period 
(".") as the directory name.

COMMAND is the name of the program that will be run.  It should look 
exactly like the command line you'd normally type when starting the program 
from DOS, including any parameters, with one exception: if the program is a 
COM or EXE file, you should specify the .COM or .EXE extension in the 
program's name (for example, use COMMAND.COM instead of just COMMAND).  If 
you DON'T specify an extension of .COM or .EXE, the BBS assumes the program 
you wish to run is a batch (.BAT) file or a DOS command such as DIR, TYPE, 
etc.  In this case, the BBS will first load a copy of COMMAND.COM, and then 
execute the command.  If the command is really a .COM or .EXE file and you 
don't say so, it will still run, but you'll have an extra copy of 
COMMAND.COM in memory which serves no purpose.  
     If COMMAND.COM must be loaded, the BBS will try to find it by 
examining the environment table for the line "COMSPEC=".  Failing to find 
this, it will attempt to load COMMAND.COM from the current directory.  If 
COMMAND.COM (or the DOOR program itself) cannot be found, an error will 
occur, and control returns to the BBS.


Don't type any extra spaces at the beginning or end of the lines, or before 
or after the semicolons.  

Finally, you can add comment lines to the DOORS listing by prefacing the 
line with a '#' character.  Comment lines are displayed along with the list 
of available Doors when you enter the "Doors" command from the BBS.


Here is an example of a DOORS.DEF file:


#  Games and Entertainment:
#
1;1;2;2;NEWTREK by R.H. Johnson;C:\GAMES\NEWTREK;NEWTREK.EXE
1;1;1;10;Infocom's Leather Goddesses of Phobos;C:\INFOCOM\LEATHER;LEATHER.COM
#
#  SYSOP and System Programs:
#
1;0;2;255;DOS Command Shell;.;C:\COMMAND.COM
1;0;0;255;BBS Configuration Program;.;C:\BBS\CONFIG.EXE


Lines beginning with '#' are comments, displayed along with the doors list.
The first example Door specifies that the program NEWTREK.EXE is to be run.
The numbers 1;1;2;2 specify that (a) the program does not support its own 
serial i/o; (b) the disk drives will be write protected while the program 
is running; (c) the computer will reboot itself if the user drops carrier 
while the program is running; and (d) users with access levels of 2 and 
above will be able to access this program.  Before the program begins to 
run, C:\GAMES\NEWTREK becomes the current directory.  

The second entry, for running the program LEATHER.COM, is similar except 
that the normal DOS ABORT call is used in case of carrier loss, and access 
level 10 is required to run the program.
     NOTE: THE USE OF COMMERICAL AND COPYRIGHTED SOFTWARE AS DOORS MAY BE 
SUBJECT TO THE APPROVAL OF THE MANUFACTURER.  If in doubt, contact the 
manufacturer before using a program as a door.  LEATHER and Leather 
Goddesses of Phobos are copyrighted products of Infocomm, Inc.

The third entry in this file defines a COMMAND.COM door.  Using COMMAND.COM 
as a door is an extremely useful practice, as it allows you to enter the 
DOS command level from a remote terminal, and issue commands just as if you 
were sitting in front of the remote computer.  Zero is specified in the 
write protect field, allowing us to write to the disk while in this door.  
An access level of 255 prevents all but SYSOP level users from having 
access to this door (a good idea, since access to the DOS shell allows you 
to do anything, including erasing files and even reformatting the disk!).  
Abort type 2 is used, since DOS normally returns to itself when a normal 
abort is attempted.

The final entry shows the CONFIG.EXE program being used as a door.  Adding 
CONFIG to your DOORS menu lets you access the system configuration menus 
from within the BBS, even when logging in from remote.  If you do this, 
however, you must use caution: don't change vital parameters such as the 
baud rate or COM port while on line, or you won't be able to return to the 
BBS after exiting CONFIG.
     As with the DOS shell, an access level of 255 is assigned to this door 
to prevent it from being used by anyone except the SYSOPs.  


CREATING MULTILEVEL DOORS MENUS

As with the Files command, Doors lets you have a seperate menu for each of 
the 24 possible message subboards, if you desire.  However, unlike Files, 
Doors offers as an additional menu management function the ability to 
create multilevel DOORS menus.

By multilevel, we mean that you can have a choice on the DOORS menu which,
when selected, instead of running an external program, presents you with 
another menu of DOORS selections.  You can divide your available Door 
programs into sections such as Games, Utilites, etc.  As an example, you 
might have a DOORS menu that looks like this: 


     Searchlight External Programs Menu

       1. Searchlight Games Menu
       2. Searchlight User Utilites
       3. Searchlight SYSOP Utilites
       4. DOS Command Shell


When a user presses "1", another menu might appear that looks like this:


     Searchlight Games Menu

       1. Online Adventure Games
       2. Ron Chibnik's Slot Machine
       3. PC-Hack


Some menu selections might run actual programs; others might bring up yet 
another menu with additional choices.

As mentioned breifly above, multilevel menus are created with the special 
"Type 9" designator in the DOORS.DEF file.  A line in DOORS.DEF that calls 
another menu looks like this:

  9;0;0;10;Searchlight Games Menu;.;GAMES.DEF

The "command" name, GAMES.DEF, is actually the name of the menu file that 
contains the menu selections for the GAMES menu (in the same format as the 
DOORS.DEF menu).  The access level, 10, makes this menu accessable only to 
those users with access level 10 or above.
      The other fields in this line- aborttype, writeprot, and default 
directory- are not used, but they must be filled in.  Just fill them in 
with zeros and "." for the directory, as we've done above.

You can extend the layered menu system by having submenus chain to other 
submenus, etc.; you can even chain back to the original menu.  Thus, you 
have complete flexibility in designing the DOORS interface for your BBS.


IF YOU RECEIVE AN ERROR MESSAGE ...

If you give the name of a non-existent program in your DOORS.DEF file, or 
if you make an error in the file format as shown above, you'll get an error 
message when you try to execute the DOORS command from the BBS.  Check your 
definition file and try to correct the error.


COMPATIBILITY: WHAT PROGRAMS CAN BE USED AS DOORS?

The goal of the DOORS system is to enable you to run any program that uses 
the standard BIOS calls on a remote terminal.  Since there are many ways of 
using the BIOS calls, and each program has its own quirks, we could not 
possibly test them all, so you will probably encounter programs that don't 
run correctly when used at a remote terminal.  However, we will continue to 
refine our program and improve it to handle new exceptions as we discover 
them.  

Programs that do not use the BIOS, but access the screen directly, will not 
work under the DOORS system (this includes most word processors, games, or 
other programs that provide fast screen displays).  Progams that use high 
resolution graphics can't be used as DOORS, either.  Some programs use the 
BIOS some of the time, and directly access the screen some of the time.  
These programs may run, but produce confusing results on the remote end.  
Finally, a few BIOS calls can't be adequately emulated on a terminal, and 
programs that use these calls won't be able to run correctly as DOORS.

If you write your own DOOR programs, be sure to use the BIOS for all input 
and output.  For example, in Turbo Pascal 3.0, use the $P and $G compiler 
directives to have Turbo use the standard input and output; in Turbo 4, set 
the DirectVideo variable to "false".  The easiest way to write DOORS com
patible programs is to output only straight text, without using any cursor 
positioning, colors, attributes, etc.  Such programs will be suitable for 
use on any remote terminal.  Programs that use cursor positioning, etc. 
will work correctly only if an ANSI terminal is used at the remote end.  
Similarly, eight-bit IBM graphics characters can be used, but only if the 
remote terminal is expected to be an IBMPC.  


Using COMMAND.COM as a Door

If you use COMMAND.COM as a Door, as shown in our example above, you'll 
receive a DOS command prompt (ie. "C>") at the remote terminal, and you 
will be able to enter DOS commands, such as DIR and CHKDSK, as well as 
execute other programs.  Be careful when using this door; if you execute a 
program that uses strictly BIOS I/O, it should run at the remote terminal; 
if you attempt to run a program that ignores the BIOS, the program will 
still run, but you may be unable to see the output or provide input from 
the remote.  In this case, all you can do is hang up the phone and wait for 
the BBS to recover.  
     Abort type 2 is normally used with a COMMAND.COM door, since the new 
DOS shell points the abort return pointers back to itself and not back to 
the BBS.  Make sure you have your system configured to run the BBS when it 
is booted up (ie. as part of the AUTOEXEC.BAT file) whenever you use a type 
2 abort.
     To exit back to the BBS from the command shell, give the command EXIT.


Using BATCH Files as Doors

The use of BATCH files (files with the .BAT extension), as well as MSDOS 
direct commands (such as DIR and COPY), is supported by the DOORS system 
through the execution of a COMMAND.COM door.  When you give a command line 
in the DOORS.DEF file which does not specify a .COM or .EXE file to be run, 
Searchlight loads a COMMAND.COM shell and passes your command to it; this 
is neccesary for the execution of DOS commands and Batch files.
     In order to run COMMAND.COM, of course, it must be available on the 
disk.  Searchlight finds COMMAND.COM by looking for the "COMSPEC=" line in 
the environment table.  If no "COMSPEC" entry is found, it attempts to load 
the command processor from the current directory.  If this fails, the 
message "Error running command" appears, and control returns to the BBS 
(you also get this error message if the command or program you're trying to 
execute is invalid or does not exist).
     If you use a hard disk, COMMAND.COM will usually always be available 
in your root directory.  If you use floppies, make sure a copy of 
COMMAND.COM is on the floppy if you plan on running DOS commands or batch 
files as doors.
     Notice that the BBS will assume that any command without a ".COM" or 
".EXE" extension is a batch file.  Therefore, when executing commands that 
are executable files, always include the extension in the command line.


HOW THE DOORS SYSTEM WORKS

The code that enables you to run programs "online" is contained within the 
file SLBBS.EXE.  SLBBS is the program you normally run to start up the BBS.  
When it runs, SLBBS, which takes only about 30K of memory, actually loads 
and runs the program BBS.EXE "underneath" it as a subprocess.  While BBS is 
running, the SLBBS program simply sits in memory above it, doing nothing, 
until a request to run a DOOR program is received.

When you execute a DOOR, the BBS records the request in the CONFIG.BBS 
file, and simply terminates, returning control to SLBBS.EXE.  At this 
point, SLBBS determines that a request for a door is in effect, and it does 
two things.  First, it installs its own serial i/o routines on top of the 
BIOS i/o routines.  Specifically, BIOS interrupts 8, 10, 16, and 21 
(hexadecimal) are intercepted by SLBBS and augmented with additional 
processing to handle the serial port.  If software write protect is 
requested, interrupt 13 is also intercepted.  

Finally, the DOOR program is initiated as a sub-process underneath the 
SLBBS process.  When the DOOR attempts to use the BIOS functions to do 
input and output, the SLBBS routines come into play, interpreting calls for 
input and output and linking the remote terminal into the system.  The 
local screen and keyboard are still available; you can view the operation 
of the door while it is running, and you can type commands at the keyboard 
even while the remote user is typing commands.  Exiting from the door 
returns control to SLBBS, which removes its code from the BIOS and restarts 
the BBS program.  

Notice that this method of running the door off of a small "driver" 
program, rather than as a sub-process of the BBS itself, provides you with 
a maximum amount of free memory in which to execute external programs.  
Since all of the memory needed to run the BBS is deallocated before a door 
is run, the net amount of overhead is only the amount of code needed for 
the driver program.  This amounts to about 30K, so you'll have about 30K 
less memory available when running programs as DOORS than you would if 
running them normally.  

If you use TSR (Terminate and Stay Resident) programs, such as SideKick (TM 
Borland Int.), in conjunction with your BBS, these programs may cause 
problems for the DOORS system.  If you have trouble, eliminate the TSR's 
when running DOORS on your BBS.

Note that in the case of a type 0 door, ie. a door which is presumed to 
handle its own serial I/O, no BIOS calls are intercepted, no additional 
processing is added to DOS, and the program executes exactly as it would 
normally.  In this case it is up to the door program itself to make use of 
the serial port, if serial i/o is required.


Output

Not all calls to the BIOS interrupts are interpreted literally.  An attempt 
is made to provide the most efficient output at low baud rates.  For 
example, many programs will issue a "cursor position" request after each 
character is output.  Since this would cause the BBS to transmit an extra 6 
to 8 characters for each output character, a check is made for this 
condition, and no characters are output.  Similarly, requests to move the 
cursor to the next line or to column zero of the current line are 
transmitted to the remote as linefeeds and carriage returns.

If a cursor position request cannot be resolved with control characters, an 
ANSI cursor position sequence is issued.  This presumes you have an ANSI 
terminal at the remote end.  No check is made; if you use door programs 
that require absolute cursor positioning or other ANSI features such as 
text highlighting, an ANSI terminal is required at the remote.  If you have 
many non-ANSI terminal users, it is suggested that you use comment lines in 
the DOORS.DEF file to identify those DOORS which require ANSI terminals.  

In some cases, satisfactory performance of a full-screen DOOR cannot be 
achieved unless the remote ANSI terminal is adjusted properly.  Specific
ally, such parameters as Destructive/Non-Destructive Backspace, Line Wrap, 
and Screen Scroll should be experimented with.

Be aware that some programs which use the BIOS calls that output to the 
screen without moving the cursor will not work.  Also, some BIOS commands, 
such as those for horizontal screen scrolling, cannot be emulated on the 
remote, and programs that use them won't run properly.


Input

The DOORS system attempts to convert ANSI escape sequences from the remote 
terminal into the IBM character codes that are generated by the BIOS.  
However, ANSI terminals don't support all of the keys provided on the PC 
keyboard, and some terminals handle control keys differently than others.  
This will mean that some programs won't interpret keystrokes from the 
remote terminal correctly.


Access To Original BIOS Vectors

When Searchlight is in control of a door program's I/O, all standard BIOS 
output is sent to the modem, and all modem input is made to look like 
standard BIOS input.  However, you may, on occasion, wish to write programs 
which write some output only to the local screen, or can distinguish 
between local and remote keyboard input.  To allow for this, Searchlight 
provides access to a block of memory containing the original BIOS vectors 
and other useful information about the state of the SLBBS routines.

To access the SLBBS information, call the MS-DOS interrupt dispatch routine 
(ie. INT 21) with a value of $C7 loaded into the AH register.  $C7 is an 
invalid DOS function and will have no effect if Searchlight is not loaded.
If Searchlight is active, however, the register pair AX:BX will be returned 
with a far memory pointer to the SLBBS data block.  You can use this far 
pointer to access the data, which will be in the format given below:


.E
      Field Name and Type               Contents
      -------------------               --------

      PROGID: string[6];                { Program ID } 
      carrier: boolean;                 { true if carrier check enabled }
      writeprotect: boolean;            { true if disk write protected }
      aborttype: byte;                  { 0=no abort, 1=terminate, 2=reboot }

      rsactive: boolean;                { set if rs232 port is active }
      ansi: boolean;                    { user ANSI mode }
      color: boolean;                   { user COLOR mode }
      directvid: boolean;               { system DirectVideo mode }

      curratt: byte;                    { current video attribute }
      commtype: byte;                   { run parameter (0, 1, or 2) }
      idletime: word;                   { idle time limit (seconds) }

      lastkey: boolean;                 { TRUE = last key from local kbd }

      OldVector: array[$00..$FF] of pointer;   { old user int vectors }
.E


Notes: A 'boolean' variable is a one-byte variable which will be set to 
binary 1 if true, zero if false.  Words are two-byte unsigned integers, and 
pointers are four-byte far pointers.

The PROGID field contains the string 'SLBBS' to identify the presence of 
Searchlight (byte zero contains the string length, bytes 1-5 contain the 
characters, and byte 6 contains a binary zero [for the convenience of C 
programmers]).  If the string SLBBS is not found here, Searchlight is not 
loaded and all other data should be considered invalid.

If 'rsactive' is true, then interrupts 8, 10 and 16 (hex) will point to the 
Searchlight code.  If false, then these interrupts remain at their original 
BIOS addresses.  Int 13 belongs to Searchlight only if 'writeprotect' is 
true.  Int 21 always contains Searchlight code.

If you wish to restore any interrupt belonging to Searchlight back to its 
original value, the original vectors can be found in the 'OldVector' array 
(which actually contains space for up to 255 pointers).  Be sure to read 
the existing vector first if you plan to restore it.  Don't set interrupts 
8, 10, 13 or 16 unless they actually belong to Searchlight.

The 'lastkey' variable can be read to determine if the last keystroke 
entered came from the local keyboard or the remote terminal.  'Lastkey' is 
true if the last keystroke was local.

Other variables can be read to obtain the information listed.  The above 
table is not meant to be used to provide information such as the current 
user's name or baud rate to the DOOR; other methods for passing these types 
of parameters are given in the next section.  

Finally, although we advise against it, some of the above fields can be 
usefully written to.  However, setting or resetting 'rsactive' and 'write
protect' will NOT have any effect on the door's behavior.

A sample program, DOOR.PAS, is provided to demonstrate the use of the above 
data.  Refer to this program for additional information.

PASSING PARAMETERS TO A DOOR PROGRAM

Often, a program running as a DOOR will need to know something about the 
status of the BBS system at the time the program is run.  Many programs 
will need to know the name or access level of the person who is using the 
door; others will need information such as the user's time limit or the 
active COM port and communications speed being used.  Searchlight provides 
several methods for communicating this information to the Door process.



USING THE COMMAND LINE: METACHARACTERS

The easiest way to pass parameters to a program is via the command line.  
Searchlight provides 11 system variables, or "metacharacters", which you 
can include on a command line in the DOORS.DEF file.  When Searchlight 
executes the door, the metacharacters are replaced by specific information.  

Here is a list of the characters available:

    %N   Current User's Name
    %U   Current User's Name, with spaces replaced by underbars
    %K   Current User's First Name
    %A   User's BBS Access Level
    %F   User's FILES Access Level
    %G   ANSI Graphics Mode (C, M, or N)
    %T   User's time limit, in minutes
    %M   Amount of time left in current session (in minutes)
    %L   Time the user logged in (HH:MM)
    %B   Current Baud Rate
    %P   Active Communications Port (0-4)
    %C   Sysop 'Chat Available' status (Y or N)
    %S   BBS System Name
    %O   Node Number (Multiuser systems only)


The time parameter, %L, is given in the format "HH:MM", as a 24-hour time.  
All other parameters appear as strings of characters or decimal numbers in 
the range 0 to 255.  Baud rates appear as "300", "1200", etc.  The %N and 
%U parameters differ in that %N returns the user's exact name, including 
any spaces, while %U replaces spaces with underbars.  Since the space 
character normally delimits command line parameters, many programs won't 
interpret a name containing spaces properly; you can use %U to send the 
full name as one word.  %K returns the first name with all but the first 
character converted to lowercase.

%P returns a value of zero if the current user is logged in locally; other
wise, it returns the value of the active COMM port, 1 thru 4.  If %P 
returns zero, the value returned by %B is undefined and should be ignored.

As an example of how to use metacharacters, let's say you have a game 
called SLOTS that you want to run as a door.  SLOTS takes as a command line 
parameter the name of the person running the program; it uses your name to 
keep a high scores table.  The command line sytax is SLOTS <name>.

To make SLOTS accept the first name of the logged in user, without the user 
having to type his or her name, enter SLOTS %K as the command line in the 
DOORS.DEF file; for example,

  1;0;1;10;Ron's Slot Machine;\SLOTM;SLOTS.EXE %K

Now, if a user named MICHAEL TOBKES executes this door selection, the 
actual command line sent to DOS will look like this:

  SLOTS Michael

The SLOTS program would run, and use "Michael" as the user name.  
Similarly, a %N parameter line would have produced "SLOTS MICHAEL TOBKES", 
using the entire name, and %U would return "SLOTS MICHAEL_TOBKES".


USING THE DOORS CONFIGURATION FILE

A second way to pass parameters to a DOOR program is through an inter
mediate file.  Option number 19 on the "General Configuration" menu of the 
CONFIG.EXE program allows you to enter a filename for the DOORS system to 
write information to before a DOOR is invoked.  If you do not specify a 
filename, no file is created.

The file that the DOORS system writes is compatible with the file created 
by the PCBOARD (TM) bulletin board system when executing doors; this file 
is normally called "PCBOARD.SYS" on PCB systems.  Searchlight provides this 
file primarily as a means of achieving compatibility with door programs 
written for PcBoard.  We recommend using this method of parameter passing 
only if you must use existing PcBoard programs, or if you are developing 
programs which you wish to be usable with PCB.

For your reference, here is the format of the DOOR parameter file:


       Field
       Length     Format     Contents
       ------     ------     --------
   1.      2       Ascii     Display on/off (always "on")
   2.      2       Ascii     Printer on/off (always "on")
   3.      2       Ascii     Page bell on/off ("A" on status line)
   4.      2       Ascii     Caller page on/off ("C" on status line)
   5.      2       Ascii     Sysop next on (always "off")
   6.      4       Ascii     Current baud rate (" 300", "1200", etc.)
   7.     27       Ascii     User's name (padded with spaces)
   8.     15       Ascii     User's first name (padded with spaces)
   9.      2       Ascii     ANSI status (on/off)
  10.     12       Ascii     Password (always blank; see note below)
  11.      2       MKI$      User's record number
  12.      4       MKS$      Time user logged in, in seconds from midnight
  13.      4       MKS$      User's time limit, in seconds
  14.      4       MKS$      Current time, in seconds from midnight
  15.      5       Ascii     Time user logged in, as HH:MM
  16.      2       MKI$      Current subboard number
  17.     20       ---       Unused (padded with binary zeros)
  18.      8       MKD$      Download limit in Kbytes
  19.      2       ---       Unused (padded with binary zeros)
  20.      4       Ascii     Language version (not used; padded with spaces)
  21.      2       Ascii     Error correcting modem (always " 0")
  22.      1       Ascii     Chat Status (always "A" in single-user systems)


Notes:

  Two-byte ASCII fields for the on/off options contain the string "-1" for 
the on condition, or " 0" for the off condition.  Fields that contain 
options not supported by Searchlight BBS are set to the default condition 
as shown above.  

  Baud rates are given as " 300", "1200", etc.  For a local login, the baud 
rate field contains the string "Loca".

  Fields indicated as MKI$, MKS$, and MKD$ correspond to the integer, real 
number, and double-precision real number format as found in Microsoft 
BASIC.  Since PCBOARD is written in BASIC, it uses BASIC real number 
formats; if you want to access these values from a different language, you 
will have to perform a conversion.  The BASIC real number format is given 
in Microsoft's reference manual.

  Field 10 is not supported.  Passwords are stored by Searchlight BBS as 
hash codes, not as strings; therefore, they cannot be passed to a Door 
program in ASCII format.

  Field 11 provides the user's physical record number in the USER.BBS file.  
This information will not be useful to a PCBOARD specific program, however, 
since the Searchlight user file is not in the same format as PCB's.

  If no upload/download ratio is in effect, a value of 32000 is assigned as 
the download limit (field 19).  Otherwise, the actual download limit is 
computed from the user's upload and download credits and the system's 
maximum ratio.  
 

DIRECT USE OF SEARCHLIGHT FILES

As a final method of obtaining information, a DOOR program can access 
Searchlight BBS's binary data files (files ending in .BBS).  Since Search
light closes all of its files before DOOR processing begins, and reopens 
them when processing resumes, DOORS are free to read and/or write to these 
files, provided the proper data formats are retained.  A program that reads 
Searchlight's data files can obtain everything the BBS knows about its 
current state, including the ID of the current user, baud rates, configur
ation information, etc.  

The exact formats of the SLBBS data are provided on disk in the files
FILEDEF.LIB and READ.LIB.  Please refer to these files for commented type 
definitions and code examples.



SOME DOOR PROGRAMMING TIPS

Here are some tips for programmers writing DoorWare:

 - Use DOS or BIOS calls for all input and output; don't write directly
   to the screen.  Programs that do direct screen writes won't run as 
   remote Doors, and also won't work with windowing or multitasking 
   operating system software.  Most compilers default to or can be set for 
   BIOS I/O.

 - Don't access the serial port.  Searchlight will handle all modem I/O
   automatically when the door runs online.  If you must access the local
   console independently of the remote, use the methods outlined above for
   accessing the original BIOS pointers from your program.

 - Use command line parameters to pass information to your program.  Don't 
   access Searchlight data files directly.  Command line parameters are 
   much faster and easier to use, and provide the advantage that your 
   program can be distributed to and use by others who don't have a BBS.

 - Door programs should be as easy to run from the command line as they are
   to invoke from the BBS.  Make parameters optional where possible; 
   default username to SYSOP, baud rate to LOCAL, etc.
  
 - If you write a utility program that uses SLBBS files directly, bear in 
   mind that the data file format is subject to change.  Your program 
   should document which version of Searchlight it is to be used with.  
.H:...APPENDIX A
.H:...USING THE ACTIVITY LOG
.H:


                                 APPENDIX A
                           USING THE ACTIVITY LOG

Searchlight's LOGIN program can be configured to generate a continuous log 
of all logins and logouts to the system.  The generation of the activity 
log is controlled via option 18 on the General Configuration menu of the 
CONFIG program.

When logging is active, the BBS generates a file called ACTIVITY.LOG.  Each 
time a user logs into the BBS, and each time the BBS resets the modem after 
a call, one line of data is added to this file.  The file is a text file; 
you may view it with the TYPE command or with a word processor, for 
example.

The data in ACTIVITY.LOG consists of lines of two types.  The line gener
ated when a user logs in to the BBS contains six pieces of information, 
arranged in fields, and looks like this:

         Y 871015 1745 12 * MICHAEL KLEIN

The leftmost character, Y or N, shows the status of ANSI graphics when the 
user logged in; N means no graphics, Y means color or monochrome graphics.  
This is followed by a six-character field containing the date of the login, 
in YYMMDD (year, month, day) format.  The next four-space field contains 
the time of the login in the format HHMM (hour, minute).  The time is given 
as a 24-hour time.  The next field gives the baud rate for the logon; 3 
means 300 baud, 12 is 1200, etc.  An 'L' in this field, right-justified 
(ie. preceded by one space) indicates that the login was from the local 
terminal rather than via modem.  
     Immediately following the baud rate is either an asterisk (as shown 
above), a "+" sign, or a "-" sign.  An asterick indicates that this is 
the first logon by a new user; a "+" sign indicates an "invisible" login 
(by a Sysop or CoSysop), and a "-" indicates a regular visible login by 
an established user.  
     The remainder of the line contains the user's name, terminated by an 
end of line character sequence (CR/LF).
     Each of the fields is followed by a single blank space, as shown in 
the example line above.  In the date and time fields, numbers less than 10 
will appear with leading zeros.  

Upon resetting after a call, the BBS logs a termination line to the 
activity file.  The terminate line contains only the time and date fields, 
in the same format as above:

         871015 1822

The data is preceded by three blank spaces.  This serves to align the date 
and time with the dates and times in the login lines, and to mark the line 
as a terminating log entry.

.E
These two lines together:

       Y 871015 1745 12 * MICHAEL KLEIN
         871015 1822

indicate that a new user named MICHAEL KLEIN signed on to the BBS at 
5:45pm on October 15th, 1987.  He called at 1200 baud and selected ANSI 
graphics mode at login, and he logged off at 6:22pm.
.E

Here's a printout of what a small section of an activity log file might 
look like:

------------------------------------------
Y 871015 1745  L + SYSOP
  871015 1757 
Y 871015 1855 24 - ALADDIN SANE
  871015 1924 
N 871015 1943 12 * ROBERT CHURCH
  871015 1947 
Y 871015 1952 24 - FNORD
  871015 2009
  871015 2015 
N 871015 2039  3 - GUEST
  871015 2042 
Y 871015 2046 12 - ADAM GLASS
  871015 2104
N 871015 2113  3 * THE IRON MAIDEN
  871015 2144 
------------------------------------------

Note that it's perfectly possible, as shown in the example, to have two 
(or more) terminate-type lines in a row.  Since the line is written 
whenever the BBS resets, it can occur twice if a caller connects but hangs 
up before logging in.  Terminate type lines not immediately preceeded by 
login lines may simply be ignored.  


USING THE ACTIVITY LOG FILE

There are many ways in which the ACTIVITY.LOG file can be used.  As you've 
probably guessed, the format of the file is designed to allow it to be read 
by programs rather than humans, although it's not quite so cryptic that you 
can't read it directly.

Programs which read the ACTIVITY.LOG file could compute many statistics 
about the operation of your BBS.  Once you've accumulated several weeks or 
months worth of information, you could compute such things as:

  - total number of calls within a given period of time
  - number of new users added
  - percentages of callers calling at specific baud rates
  - average duration of calls
  - average number of calls per day or week
  - peak and off-peak calling hours
  - average number of users requesting ANSI graphics


Programs which read the ACTIVITY.LOG file will be available from 
Searchlight Software; you may also write such programs yourself, using the 
above information as a guide for reading the log file.

ACTIVITY.LOG also gives you a permanent record of all calls made to your 
system.  The DOS FIND command, or a similar utility, can be used to locate 
specific information in the log file.  For example, the DOS command

  C> FIND "MIKE DONOVAN" ACTIVITY.LOG

will search the ACTIVITY.LOG file and print out all lines which contain the 
name MIKE DONOVAN (this would be all the times that MIKE DONOVAN logged in 
to the system).  The command

  C> FIND "*" ACTIVITY.LOG

will show the first logins of all new users (since the last time the log 
file was cleared).  FIND is a program that comes with MSDOS/PCDOS; it 
should be available on the DOS disk you received with your computer.


Since the log file will grow continuously, you'll need to delete it 
every once in a while.  The best scheme, if you wish to keep an ongoing 
record of calls, is to make a backup copy of ACTIVITY.LOG periodcially 
(every month, six months, etc.) and store the backup on floppy disks or 
tape.  Then simply delete the ACTIVITY.LOG file from your disk; a new file 
will be created with the next login.

.H:...APPENDIX B
.H:...GUIDE TO ERROR MESSAGES
.H:


                                APPENDIX B:
                          GUIDE TO ERROR MESSAGES

In general, there are two kinds of error messages that you can get when 
running Searchlight BBS: Friendly and Unfriendly.  Friendly errors are 
those which we've anticipated and for which the program provides a means of 
recovery; these are the types of error or warning messages you will 
encounter most often.  "Unfriendly" errors are those generated by the 
compiler used to create the program (Turbo Pascal, in this case)- with a 
little patience you should be able to avoid errors of this kind totally, 
but we've provided this error guide just in case.

Since compiler generated errors (also known as crashes) are usually the 
most difficult to deal with, we will list these errors first.  When one of 
these messages appears, the BBS program will halt and return you to DOS; 
you must type SLBBS to restart the program (hopefully after correcting the 
problem).


Errors 2 and 3  (File/Path does not exist)
  This error indicates that the BBS is trying to read a file on the disk, 
and the file does not exist.  There are several possible causes:
  1. The Program Path specified in the CONFIG program points to an invalid 
pathname, or the program files do not exist in the specified directory.
  2. A pathname or filename specified in the FILEDIR.DEF file does not 
exist, or is an illegal name.
  3. An illegal or nonexistent pathname was specified in the DOORS.DEF 
file.
  Please make sure to test all FILEDIR.DEF and DOORS.DEF entries before you 
put your BBS system on-line.


Error 100  (Disk read error)
  This error will occur if a data file on disk is corrupted or otherwise 
damaged.  It may also occur if you make an error in a .DEF type file; check 
all of your DEF files before using them on your BBS.
  If I/O Error 99 occurs when trying to log in, read a message, or access a 
user record, it indicates a problem with one or more of the BBS data files.  
Usually, you can recover your data files by taking the following steps:

  (1) Exit from the BBS, and type CHKDSK/F at the command prompt;
  (2) Run the BBS, and execute the SYSOP program;
  (3) Run the CHECK and BALANCE commands in the SYSOP module.

Refer to the SYSOP COMMAND SUMMARY in this manual for further information 
on recovering bad data.  If you cannot run the BBS program, log in, or 
access the Sysop menu, you can run the sysop program directly by typing 
SYSOP from the DOS prompt.


Error 101  (Disk or Directory is full)
  This error occurs if the BBS must create a file (a .DIR file in the case 
of the FILES program, or the .BBS data files in the case of CONFIG) and the 
disk or directory is full.  The solution is to delete some files or create 
a new directory.  


Error 4  (Too many open files)
  This message will occur the first time you try to execute the BBS or the 
CONFIG program if your system doesn't have enough file handles available.  
The solution to this problem is simple; you must insert the line "Files=20" 
(or higher) into your CONFIG.SYS file, as discussed in the installation 
instructions.  Be sure to reboot your system after editing your CONFIG.SYS, 
in order to install the new configuration.


Error 202 and 203  (Heap/Stack Overflow)
  This message indicates that the program ran out of RAM memory when trying 
to allocate more memory.  To correct the problem, you must make more RAM 
available to the program: reduce the size of RAM-disks, disk caches, etc. 
or remove any RAM-resident programs you may have installed, until you have 
enough memory available.  This error is rare; the BBS does not need very 
much memory to run.


Other Errors
  Other errors in the range 5-6, 16-17, and 150-162 are MSDOS errors 
indicating disk or device access errors.  Check your disk, files, and 
directories and try the command again.
  If other errors occur, please write down the exact error message as well 
as the exact conditions that caused the error, and contact us.  Be sure to 
include your SLBBS version number, DOS version number, and the equipment 
you use.  We will try to diagnose the problem as quickly as possible.

```
{% endraw %}

## HELP.TXT

{% raw %}
```
SEARCHLIGHT BBS GENERAL HELP FILE

Commands -->  Commands are executed by selecting the command and pressing the
              <return> key.  To select a command, type the first letter of the
              command, or scroll through the commands by pressing the space-
              bar and backspace keys.  Use the 'Help' command for a brief
              list of available commands.

  Help   -->  To read a detailed description of a command, select the command
              as described above, and then press the question-mark <?> key.

  Flow   -->  Output can be paused and/or aborted at most times by pressing
              Control-S (^S) to pause output, ^Q to resume paused output, and
              spacebar or ^C to abort output.  Listings longer than 24 lines
              are paused every screenful with the message "-- more --"; press
              any key to clear the message and continue output.

Graphics -->  Users of ANSI-standard terminals may enjoy ANSI graphics
              support, including text highlighting, cursor positioning, and a
              full-screen text editor for message input.  Use the Ansi command
              to select the desired ANSI graphics mode.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1136

     Volume in drive A has no label
     Directory of A:\

    SLBBS31A ZIP    176801   3-02-90   1:00a
    SLBBS31B ZIP    132364   8-26-89   6:50p
    SLBBS    LST     22987   2-05-90  12:34a
    SLINFO   ZIP      5576   3-02-90   1:11a
    GO       BAT        38   9-08-88   3:22p
    GO       TXT       542   7-09-90   1:24a
    FILE1136 TXT      2961   7-09-90   9:42p
            7 file(s)     341269 bytes
                           17408 bytes free
