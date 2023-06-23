---
layout: page
title: "PC-SIG Diskette Library (Disk #3438)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3438/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3438"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## LICENSE.TXT

{% raw %}
```
			DISCLAIMER - AGREEMENT

The purchaser of this registered copy of CD Audio is granted license
to use the CD Audio software on any one computer at any one time. The
software may be used by any number of people and may be freely moved
from one computer location to another, so long as there is no
possibility of its being used in two different locations at the same
time. A registered copy of CD Audio is like a book, which cannot be
read by two different people at the same time.

Users of CD Audio must accept the following disclaimer of warranty:
	"CD Audio is supplied as is. The author disclaims all
	warranties, expressed or implied, including, without
	limitation, the warranties of merchantability and of
	fitness for any purpose.  The author assumes no liability
	for damages, direct or consequential, which may result from
	the use of CD Audio."

Site license arrangements may be made by contacting the author.
You may not distribute any version of CD Audio for remuneration
without the prior consent of the author.

The author of CD Audio is:
	Mark E. O'Brien
	27 Trowbridge Street #2
	Cambridge, MA  02138
	U.S.A.

	Compuserve: 70312,303
	Internet: 70312,303@compuserve.com

CD Audio copyright (c) Mark E. O'Brien 1992.
All Rights Reserved.
```
{% endraw %}

## README.DOC

{% raw %}
```
			 CD Audio Readme File
			     June 8, 1993

Required files from the distribution disk:
	README.TXT	this file
	CDAUDIO.EXE	CD Audio program file
	CDAUDIO.HLP	CD Audio help file
	VBUTIL.DLL	General utilities
	QUICKCD.DLL	CD-ROM access utilities

Possibly required files from the distribution disk:
	TOOLHELP.DLL	Diagnostic utilities. You only need this file
			if you are running Windows version 3.0.
	THREED.VBX	Visual Basic 3-D push buttons. You do not need
			this file if you have installed the
			Microsoft Visual Basic Professional Toolkit
			on your system.
	VBRUN100.DLL	Visual Basic runtime support. You only need
			this if it is not already installed in your
			WINDOWS or WINDOWS\SYSTEM directory.

Notes on installation:
      -	You can install this version of the software over an existing
	version by just copying the files.

      -	If you are installing this software for the first time, then
	you should copy all files from the floppy disk onto your hard
	disk. You can install the software into any directory; it does
	not need to be in your Windows directory. However, your disc
	database CDAUDIO.INI will always be in your Windows directory,
	so you should back up that file in case your Windows directory
	is ever damaged and you need to re-install Windows.

-------------------------------------------------------------------------
		    Version 1.30 (Quick-CD v1.05)
-------------------------------------------------------------------------
	- Added the Options menu, allowing the control of several
	  options. Includes an Auto Play feature (starts playing
	  every time you start the program or insert a new disc),
	  a Mini-player (shrinks the main window down to minimal size),
	  and more.
	- Disc database files are now located in the CDAUDIO directory
	  instead of the Windows directory. However, if you have
	  existing database files in your Windows directory, CD Audio
	  will continue to use them there. If you would like to move
	  these files out of Windows and into CDAUDIO, just make sure
	  CD Audio is not running and move all files CDAUDIO*.INI from
	  your Windows directory into your CDAUDIO directory. The next
	  time you run CD Audio it will use the files in their new
	  location.
	- Fixed a bug involving the status display of repeated tracks
	  in a disc program.
	- Fixed bugs when run on a Mitsumi CD-ROM drive.

-------------------------------------------------------------------------
		    Version 1.29 (Quick-CD v1.03)
-------------------------------------------------------------------------
Changes:
	- The UP/DOWN, ENTER, PAGE UP/DOWN keys now navigate correctly
	  among the artist, disc title, and track title edit items.
	- Fixed errors in some CD-ROM drives when changing discs.
	- Added "Reset CD-ROM Drive" command to the Disc menu.
	- Fixed bugs involving multiple CD-ROM drives attached to a
	  single system.
	- Fixed bug in cancelling "Save changes to disc database?" when
	  quitting the program.
	- Cleaned up 17K of extraneous stuff from the EXE file.

-------------------------------------------------------------------------
			     Version 1.28
-------------------------------------------------------------------------
Changes:
	- Added Repeat command to the Disc menu to allow continuous
	  playback of discs.
	- Increased the storage capacity of the disc database from
	  64K to 640K (from about 100 CD's to about 1000). This should
	  be transparent, but in case you need to know, the disc databases
	  are stored as the files CDAUDIO.INI, CDAUDIO1.INI, ..., in your
	  Windows directory.
	- Fixed crash when entering track information for discs with
	  <= 10 tracks.
	- The main window caption is now updated instantaneously when
	  the disc title changes.
	- Disc programs can now contain the same track multiple times
	  using the "Allow Repeats" checkbox in the Disc Program window.

-------------------------------------------------------------------------
			     Version 1.27
-------------------------------------------------------------------------
Changes:
	- Fixed "Subscript out of range" errors that happened on some
	  CD-ROM drives when they reached the end of the disc or program.

-------------------------------------------------------------------------
			     Version 1.26
-------------------------------------------------------------------------
Changes:
	- Pause/Resume was not working correctly on some players;
	  it's now fixed.
	- (Quick-CD version 0.95 only) Fixed problems where changing
	  discs on certain drives would report "Drive Not Ready".

-------------------------------------------------------------------------
			     Version 1.25
-------------------------------------------------------------------------
Changes:
	- Fixed problems with startup on some CD-ROM drives (the program
	  would sometimes hang or return errors). If you are experiencing
	  problems on startup, try adding the following lines to the
	  [Settings] section of your CDAUDIO.INI file (if you do not
	  have a [Settings] section then create one):

		ResetOnStartup=1

	  This instructs CD Audio to reset the CD-ROM drive during startup.
	  It is totally safe but it does cause a slight delay during
	  startup. Possible values for the ResetOnStartup flag are:

	  	0	do not reset on startup
		1	always reset on startup
		2	reset on startup only if there is a CD in the
			drive
		3	reset on startup only if there is no CD in the
			drive

	- Changed all CD-ROM error handling to a timeout scheme. By
	  default the time out value is 3 seconds. If you would like to
	  change it then add the following line to the [Settings] section
	  of your CDAUDIO.INI file:
		WaitDiscChange=value
	  where "value" is the number of milliseconds to wait before
	  reporting an error from the CD-ROM drive.

	- Fixed a bug that happened when you changed the CD while the
	  main window was iconized.

-------------------------------------------------------------------------
			  Version 1.23, 1.24
-------------------------------------------------------------------------
Changes:
	- Shuffling or Un-Shuffling now positions the CD at track 1
	  every time.

	- Fixed problems where the current track was sometimes off by 1.

	- Changed the icon when minimized to have no background instead
	  of a white background (i.e. it now inherits your desktop back-
	  ground)

-------------------------------------------------------------------------
			    Version 1.22
-------------------------------------------------------------------------
Changes:
	- Fixed "Subscript out of range" errors that sometimes occured
	  when a disc program was in use. Also fixed generally flaky
	  behavior when you switch into or out of using a disc program.

	- Fixed a bug where scrolling horizontally to the end of the
	  last CD track caused a "Seek error".

	- Fixed positioning errors involving the up and down arrows in
	  the main window (i.e. current track indicator when the current
	  track is not visible in the window).

-------------------------------------------------------------------------
			    Version 1.20
-------------------------------------------------------------------------
New features:
	- Smart main window re-sizes itself based on the number of
	  tracks in the CD and your Windows screen resolution. Takes
	  up much less screen space than its predecessor. Supports all
	  screen resolutions EGA or higher.

	- Added support for multiple CD-ROM drives attached to a system.
	  The Disc menu contains a "Select CD-ROM Drive" command which
	  is available when CD Audio detects that multiple CD-ROM drives
	  are present.

	- More complete error reporting when an error occurs. The
	  CDAUDIO.LOG file now contains a memory dump for all errors;
	  this will help me track down bugs on a post-mortem basis.

	- Copying track titles to the clipboard now copies the disc
	  artist and title on the same line instead of putting them
	  on separate lines (i.e. not copies "Artist - Title").

	- Enhanced the Order Form to include your preferred diskette
	  size, current version number of CD Audio, and Windows version.

Bug fixes:
	- Added workarounds for certain CD-ROM drives that displayed
	  "General Failure", "Drive Not Ready", and "Invalid Disc Change"
	  errors. If you still experience these bugs, try adding the
	  following line to the [Settings] section of your CDAUDIO.INI
	  file (if you do not have a [Settings] section then create one):
	  	WaitDiscChange=5000

	- Added workaround for certain CD-ROM drives that display the
	  wrong current track during playback. If you are consistently
	  getting the wrong current track highlighted for tracks >15,
	  try adding the following line to the [Settings] section of
	  your CDAUDIO.INI file (if you do not have a [Settings] section
	  then create one):
	  	TrackFormat=hex

	- Exiting CD Audio via ALT+F4 now asks you if you want to save
	  changes to the disc database. Previously only exiting by the
	  Disc Exit command (CTRL+X) asked you.

-------------------------------------------------------------------------
			    Version 1.10
-------------------------------------------------------------------------
New features:
	- Shuffle play of discs
        - New key-based method of registration; once you are
	  registered, you can download future releases from
	  Compuserve and still be registered
	- Several minor bug fixes and small improvements over v1.00.

-------------------------------------------------------------------------
			    Version 1.00
-------------------------------------------------------------------------
To run CD Audio, you need the following:
      - Windows 3.1 or 3.0 (Multimedia Extensions are not required)
      - Microsoft CD-ROM Extensions (MSCDEX), version 2.20 or above
      - Visual Basic runtime (VBRUN100.DLL)

These are not included with CD Audio; however, MSCDEX and the VB runtime
are available on Compuserve. MSCDEX version 2.21 is in the Microsoft
Software Library forum (GO MSL-1), filename CDEXT.EXE; VBRUN100.DLL is
in the Microsoft Basic forum (GO MSBASIC), section 5 (Visual Basic),
filename VBRUN.ZIP.

WORD FOR WINDOWS USERS: WinWord can hang on File Open, if you have an
audio CD in your CD-ROM drive. Microsoft has fixed this bug with an
interim release of WinWord, version 2.0a, which is available free of
charge to registered WinWord users. Contact Microsoft Product Support
at 206-462-9673.

Contact information for CD Audio:
	Mark E. O'Brien
	27 Trowbridge Street #2
	Cambridge, MA  02138
	U.S.A.

	Compuserve: 70312,303
	Internet: 70312.303@compuserve.com

Copyright (c) Mark E. O'Brien 1992. All rights reserved.

Microsoft is a registered trademark of, and Windows is a trademark of,
Microsoft Corporation.

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

One year subscription to Shareware Magazine            $19.95  ______

Super Saver Membership                                 $39.95  ______
(includes a 1 year subscription to Shareware Magazine,
 the PC-SIG Encyclopedia on Disk with WordCruncher,
 and 5 free disks)

The PC-SIG Catalog on Disk                              $5.00  ______
($5.00 is refundable with your first order)

The PC-SIG Encyclopedia on Disk with WordCruncher      $20.00  ______

The PC-SIG World of Games CD-ROM                       $19.95  ______ 

The PC-SIG 12th Edition Library CD-ROM                 $99.00  ______

Upgrade to the 12th Edition from ANY previous edition
of the PC-SIG Library on CD-ROM!                       $59.00  ______

Upgrade from ANY other CD-ROM just!                    $59.00  ______

The Essential Home & Business Collection CD-ROM        $39.00  ______  

The PC-SIG Encyclopedia of Shareware on CD-ROM
(1 year subscription)                                  $99.00  ______


                                                    Subtotal   ______

Shipping and Handling                                          $4.00

                    California residents add 8.25% sales tax   ______

                                                       TOTAL   ______



      If you have any comments or suggestions, please let us know!

To order by phone with VISA or MASTERCARD: Call (800) 245-6717
Ask for operator #2351
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3438

     Volume in drive A has no label
     Directory of A:\

    CDAUDIO  ZIP    295393   6-21-93  12:19p
    GO-STRT  DAT       541   6-01-93  11:07a
    SIGORDER TXT      3336   6-01-93   2:30p
    GO-FORM  DAT      3336   6-01-93   2:30p
    GO       EXE     26022   1-10-92  12:14p
    PKUNZIP  EXE     29378   2-01-93   2:04a
            6 file(s)     358006 bytes
                            1024 bytes free
