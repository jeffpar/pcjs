---
layout: page
title: "PC-SIG Diskette Library (Disk #2908)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2908/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2908"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║          <<<<  PC-SIG Disk #2908  POWER BBS FOR WINDOWS  >>>>           ║
║                        Disk 2 of 2 (also #2907)                         ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To unzip the files from the two zipped files contained on the two       ║
║ diskettes, copy PKUNZIP.EXE on this disk to a temporary subdirectory on ║
║ on your hard drive. Then from that subdirectory, unzip the files to the ║
║ subdirectory by typing:                                                 ║
║                                                                         ║
║     PKUNZIP [floppy drive with PBBS diskette]:[zipped file]  <enter>    ║
║                                                                         ║
║ After decompressing the files, print the installation instructions by   ║
║ typing:  COPY SHARWARE.DOC PRN  <enter>                                 ║
║                                                                         ║
║                                        (c) Copyright 1992, PC-SIG Inc.  ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## ORDER.TXT

{% raw %}
```
────────────────────────────────────────────────────────────────────────────
────────────────────────────────────────────────────────────────────────────
──────────────────── ▓▓▓▓▓▓▓ ───────────────────────────────────────────────
──────────────────── ██   ██ ───────────────────────────────────────────────
──────────────────── ▓▓▓▓▓▓▓  ▓▓▓  ▓ ▓ ▓  ▓▓▓  ▓▓▓▓ ────────────────────────
──────────────────── ██       █ █  █ █ █  █▄   █  █ ────────────────────────
──────────────────── ▓▓       █ █  █ █ █  █▀   █▀█  ────────────────────────
──────────────────── ██       ▓▓▓  ▓▓▓▓▓  ▓▓▓  ▓  ▓  BBS ───────────────────
────────────────────────────────────────────────────────────────────────────
────────────────────────────────────────────────────────────────────────────

                ****************************************
                         POWERbbs Order Form

PowerBBS for WINDOWS (Windows Version):  This version of PowerBBS,
 includes WINDOWS Protocols, and all the advanced features
 that PowerBBS has to offer as a BBS.  This bbs is
 good, if you are looking to run your BBS on one computer
 (without SHARE LOADED, as it is not needed). SHARING is not
 supported in this version, but as long as you are running on one computer
 (and do not have SHARE loaded) it should not be needed.
 Normal Price is $95 per copy.

PowerBBS for WINDOWS (Windows Professional (Commercial) Version):
 This version of PowerBBS, includes all the features of the Windows
 Version. In addition, SHARING support is included for NETWORK
 support. As long as you have WINDOWS working and configured for your
 NETWORK, PowerBBS will use WINDOWS internal SHARING skemes
 to make the information available to all your nodes.
 You are licensed to use PowerBBS at one location (building or
 a home), with this version.  This is also a license to use PowerBBS
 for Commerical use.
 -------------------------------------------------------------------
  The Professional Version includes built in capabilities to permit
  your user to download and upload mail, using the QuickMail
  standard.
 -------------------------------------------------------------------
 Normal Price is $180 per copy.

PowerBBS (DOS Professional Version)
 This version of PowerBBS is our DOS Version.  It comes with a FOSSIL driver
 that will permit you to run up to 25 lines on one computer using a
 multitasker (compatable with Desqview).  You lose out on the WINDOWS
 capabilities, but PowerBBS for DOS runs much quicker (and also on XTs).
 Using the INT 14 FOSSIL, you can easily set up and operate a multiline
 bbs using Desqview (tm) and your favorite multiport card.
 Normal Price is $95 per copy.

**********************************************************************
* CREDIT CARDS are now accepted for purchase of PowerBBS.  To charge *
* PowerBBS to your MC/VISA, call up the PowerBBS Support Line at     *
* 516-822-7396 (USR DUAL), 516-822-7568 (2400).  You will be able to *
* charge your purchase online.                                       *
**********************************************************************

  If you are ordering through the mail,
  payment should be made by check. (Payable to Russell Frey)

  (You may order with your credit card only online via the support bbs)

  Remit to: Russell Frey
            35 Fox Ct.
            Hicksville, NY 11801

                                                      Price       Total
              Program/Description         # Copies    Per Copy    Cost

PowerBBS for WINDOWS Bulletin Board System
(Windows Version)                          _________   $95.00   _____________


PowerBBS for WINDOWS Bulletin Board System
(Windows Professional Version)             _________  $180.00   _____________


PowerBBS for DOS (Professional Version)    _________   $95.00   _____________


 Name     ___________________________________________________________________

 Full Name to be used as SysOp ______________________________________________

 BBS #    (______) _______________________

 Home #   (______) _______________________

 Address  ___________________________________________________________________

          ___________________________________________________________________

          ___________________________________________________________________

          ___________________________________________________________________

Have you ever run a BBS before?        Yes        No


If yes, what BBS Software did you use?   ____________________________________


Where did you learn about PowerBBS?  ________________________________________


Do you want a 5.25" disk                      Yes        No
```
{% endraw %}

## SHARWARE.DOC

{% raw %}
```
               -------------------------------------------
                 XXXXXXXX
                 X      X
                 X      X  xxxxxxx  x  x  x  xxx  xxxxxx
                 XXXXXXXX  x     x  x  x  x  x    x    x
                 X         x     x  x  x  x  xx   xxxxxx
                 X         x     x  x  x  x  x    x  x
                 X         xxxxxxx  xxxxxxx  xxx  x   x
               -------------------------------------------
                           Bulletin Board System
               -------------------------------------------
                 a FULLY capable TRUE SHAREWARE version
               -------------------------------------------
                            For DOS and WINDOWS!
               -------------------------------------------
                               Version 1.85
               -------------------------------------------
                 (c) Copyright 1989-1992 Russell E. Frey
                          All Rights Reserved
               -------------------------------------------
                            Support BBS Lines

                      (516) 822-7396   (v32/v32bis)
                      (516) 822-7568   (2400)
               -------------------------------------------
                 Help distribute this shareware package,
                 give it to your friends, and upload it
                 to your favorite BBSs!
               -------------------------------------------

----------------------------------------------------------------------------
Notes on the SHAREWARE version:

PowerBBS for SHAREWARE, is a true shareware version.  Everything is included
in this version, including Zmodem.  The only difference between the shareware
version and the registered version, is the message that specifies UNREGISTERED
in PowerBBS (Shareware), will not be displayed in the REGISTERED version.

Also, be aware that Registered users will receive a PRINTED MANUAL, with a
TABLE of CONTENTS (not available in the .WRI format MANUAL).

----------------------------------------------------------------------------
To install WINDOWS version (Here is a BRIEF explanation.  PLEASE read the
                            MANUAL on installation.):

 1) Copy Powrmain.exe and Powrfile.exe onto a floppy.  Put the floppy into
    disk A or B.
 2) run Install.exe.  This is a WINDOWS application, and must be run
    from WINDOWS.
 3) READ The DOCS on installation.

--> PROTOCOL INFORMATION:
PowerBBS provides TWO protocol programs (both named PBBSPROT.EXE).

The one provided in powrmain.exe, and which will be installed is the
WINDOWS API pbbsprot.  This version, uses the WINDOWS API to communication.
This is the highly recommended selection.  DO NOT CHANGE THIS, unless you
are exactly sure of what you are doing.

The one available in protintr.exe is the PBBSPROT.EXE that does it's
communications internally!   It does not use the Windows API!  Just simply
unextract the PBBSPROT.EXE in Protintr.exe, and place it in your \Powrbbs
directory.  Before doing this, be sure you know what you are doing, and have
the PBBSPROT.EXE already in your \powrbbs directory, saved.
----------------------------------------------------------------------------
To install DOS version:

 1) Copy Powrmain.exe and Powrfile.exe onto a floppy.  Put the floppy into
    disk A or B.  Also copy WINANSI.exe, if you want to install WINANSI (an
    ANSI editor for WINDOWS).
 2) Run POWRDOS.EXE this file will extract the DOS specific files.
 3) run Installd.exe.
 4) Copy the DOS specific files (such as powrbbs.exe), that were extracted,
    to your \Powrbbs directory.
 5) READ The DOS specific documentation, that was extracted from POWRDOS.EXE
----------------------------------------------------------------------------

** UPDATE.DOC contains update information!

** PowerBBS for Windows requires a 286 or higher processor to run.
   PowerBBS for DOS requires an XT or higher processor to run.

----------------------------------------------------------------------------

For the latest ORDERING INFORMATION, call the SUPPORT line at (516) 822-7396

----------------------------------------------------------------------------
Included files:

Disk 1   (pbbs##-a.zip)

  POWRMAIN.EXE, POWRFILE.EXE => Required files for INSTALL.EXE
  INSTALL.EXE   ==> Installs PowerBBS, a WINDOWS application
  ORDER.TXT     ==> Registration Form, ORDER PowerBBS Today!

Disk 2   (pbbs##-b.zip)
  ORDER.TXT     ==> Registration Form, ORDER PowerBBS Today!
  PBBSDOC.WRI   ==> PowerBBS Documentation in WINDOWS WRITE FORMAT.
  UPDATE.DOC    ==> Latest UPDATES to POWRDOC.WRI
  POWRDOS.EXE   ==> PowerBBS for DOS, executables and information
  PROTINTR.EXE  ==> The PBBSPROT.EXE, that bypasses WINDOWS API to talk
                    to the modem.  It is highly recommended that you do
                    not touch this file, unless you know what you are doing.
  FIDOINFO.EXE  ==> Run this file, and the FIDO Docs to interface
                    PowerBBS with FIDO, will be extacted.
```
{% endraw %}

## UPDATE.DOC

{% raw %}
```
1.85 Users:

The MANUAL has been updated with 1.85, so there is currently no new
information.  However, the following new features are highlighted
here for those upgrading.


* New ability to drop to DOS to run a BATch file, after each caller
-------------------------------------------------------------------

PowerBBS looks for a particular BATch file in your Powrbbs directory.

The file is "Logoff" + the node number + ".BAT"

For example, node #1 would be Logoff1.Bat.  If this file exists in your
Powrbbs directory, the file is run after each caller.

* New FORUM option to not permit private messages in certain forums
-------------------------------------------------------------------

This new option will not permit people to leave private messages in
certain forums (private messages will be routed to forum #0 automatically).

* PowerLANG command to run menu selections.
-------------------------------------------

                       Run_Menu_Command
                       ----------------

  Structure: Run_Menu_Command "Menu command # to run"

Description: Will take a built in Command, and run the option.

    Example: Run_Menu_Command "1"
                This will run the Forum Area Change built in command.

* PowerMAIL capabilities added to Professional Version.  Ability to
  quickly download mail on logon.
  -----------------------------------------------------------------

New Menu command #s:

        37: Command to permit User to Download Mail
        38: Command to permit User to Upload Mail

Added to Config Option:

     Path/File to script for newusers?

     Enter the path and filename to the file containing the script
     questionnaire that you want to give to newusers automatically.

     Ex: C:\powrbbs\work\quest1

New Credits Capability
----------------------

        The usual method to limit once's use of your system, would be
by putting a time limit (in the seclevel file) to onces security level.

        By selecting the "Use a Credit System", the following system
will result:

        * Each user must be granted a certain amount of credits
          by the Sysop, manually via the Update Users selection of
          the Sysops Menu.
        * The maximum amount of credits used per day, is the amount
          of time given (for example, if a 50 level user is given
          50 minutes, then they will only be able to use 50 credits
          for the day).
        * Using this CREDIT system, you can adjust each menu option
          to use a certain amount of credits (Entry #5 in the EDIT
          MENU section).
        * Sysop may grant credit amounts up to 2,000,000

|CREDITS| macro added, gives the current amount of credits aailable.

Screen to display when credits are used?
----------------------------------------

        This menu option should include the path/filename of the screen
filename to display, when the credits are VERY LOW.  This should give
the user information on ordering more credits, etc.

Permit ANONYMOUS names in designated forums
-------------------------------------------

New options on the OPTIONS #1 screen of CONFIG

Permit forums to have Anonymous names

        If you plan on having any anonymous forums, then enter
Yes to this selection.

Path/Filename to ask for Anon-Name Screen

        Enter the path/filename to the screen (ascii/ansi) file which
will give instructions to your users about the Anonymous capability.

NEW CONFIG FORUM Option:

Do you want ANONYMOUS Names?

        If you want anonymous names to be used in this forum, enter
Y.  With this selection turned on, whenever a user enters a message
in the forum, the anonymous name will be used.

|ANAME| macro has been added.  This gives the users Anonymous name.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2908

     Volume in drive A has no label
     Directory of A:\

    GO       TXT      1232  11-03-92  12:19p
    PBBS188B ZIP    319884   6-19-92  11:20a
    GO       BAT        38   1-31-91  12:58a
    PKUNZIP  EXE     23528   3-15-90   1:10a
            4 file(s)     344682 bytes
                           15360 bytes free
