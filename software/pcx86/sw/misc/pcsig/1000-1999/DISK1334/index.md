---
layout: page
title: "PC-SIG Diskette Library (Disk #1334)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1334/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1334"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "TOUCH TYPE TUTOR"

    TOUCH TYPE TUTOR is going to make you the fastest typist in town.  Or if
    you don't know how to type, this program will teach you.
    
    The program has three teaching modes.  The first is for the person who
    knows how to type, but wants to be faster.  It provides four different
    letters on which you are tested.  After you have become proficient on
    these, you can add your own letters for variety.  The second mode is a
    graduated series of lessons that allow you to move along at your own
    pace.  The third mode is a game for the beginning typist that teaches
    the keyboard layout.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1334.TXT

{% raw %}
```
Disk No: 1334                                                           
Disk Title: Touch Type Tutor                                            
PC-SIG Version: S1.3                                                    
                                                                        
Program Title: Touch Type Tutor                                         
Author Version: 2.4                                                     
Author Registration: $10.00                                             
Special Requirements: None.                                             
                                                                        
TOUCH TYPE TUTOR is going to make you the fastest typist in town.  Or if
you don't know how to type, this program will teach you.                
                                                                        
The program has three teaching modes.  The first is for the person who  
knows how to type, but wants to be faster.  It provides four different  
letters that you are tested on.  After you have become proficient on    
these, you can add your own letters for variety.  The second mode is a  
graduated series of lessons that allow you to move along at your own    
pace.  The third mode is a game for the beginning typist that teaches   
the keyboard layout.                                                    
                                                                        
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989, 1990 PC-SIG, Inc.                                         
```
{% endraw %}

## MANUAL.DOC

{% raw %}
```

			TOUCH TYPE TUTOR   -   TTT<tm>
			~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

	Copyright 1988, 1989, David P. Gray, Gray Design Associates
			   All Rights Reserved

		Member, Association of Shareware Professionals




-----------------------------[ C O N T E N T S ]-----------------------------


		1.      Specification.
		2.      System Requirements.
		3.      Files Distributed.
		4.      Revision History.
		5.      Future Versions.

		6.      USER GUIDE
			6.1     Start-Up Procedure.
			6.2     Option Selection.

		7.      Site Licenses.
		8.      Comments to the Author.
		9.      Association of Shareware Professionals.




----------------------------[ 1.  SPECIFICATION ]----------------------------

	Teach Mode:
	Has eight graduated lessons and adapts itself automatically to the
	users skill level.

	Speed Mode:
	Is designed for typists and companies to measure typing speeds.

	Game Mode:
	Adapts itself to the typists skill, forcing the user to type faster
	and faster throughout the five skill levels.




-------------------------[ 2.  SYSTEM REQUIREMENTS ]-------------------------

TOUCH TYPE TUTOR is designed for minimal system requirements and should be
runable on just about any IBM PC type or compatible.  A command parameter
allows the program to run on non-IBM or incompatible MS-DOS base machines.
In these cases invoke TOUCH TYPE TUTOR using the command:

				ttt -b

which causes it to use MS-DOS system calls instead of BIOS calls.  In this case
it is imperative that either the DOS ANSI.SYS device driver is included in the
CONFIG.SYS file, or that the machine accepts standard ANSI cursor codes.  Add
the line DEVICE=C:\DOS\ANSI.SYS or similar (depending on where you keep your
DOS files) to the config.sys file.  TOUCH TYPE TUTOR uses no graphics display
modes and so is compatible with any type of color or black and white adapter.

The style files for the speed test are standard ASCII files which may be edited
should you wish to expand or modify them.  There is no limit to the length, they
will get split into 11-line screens automatically when the test is running.  As
supplied, they are 11 or fewer lines long as this has proved sufficient in
practice to accurately measure a typist's speed without wasting their time with
lengthy material.




--------------------------[ 3.  FILES DISTRIBUTED ]--------------------------

	COMPUTER.TTX            :       Computer style speed test file
	CUSTOM.TTX              :       Custom speed test file
	GENERAL.TTX             :       General style speed test file
	LEGAL.TTX               :       Legal style speed test file
	MANUAL.DOC              :       This file
	MEDICAL.TTX             :       Medical style speed test file
	README.DOC              :       Important Information
	TTT.000                 :       Overlay for the TTT<tm> program
	TTT.COM                 :       The TTT<tm> program
	TTT.HLP                 :       Text file used for online help
	TTX.HLP                 :       Text file used for online help
	TUT.HLP                 :       Text file used for online help




---------------------------[ 4.  REVISION HISTORY ]--------------------------

	2.0     11/22/88        :       Baseline version.
	2.1     05/28/89        :       Include demo timeout and delay screen.
	2.2     09/11/89        :       ASP membership, new colors, name entry.
	2.3     11/18/89        :       Flush files when saving.
	2.4     04/29/90        :       Added corruption protection.



---------------------------[ 5.  FUTURE VERSIONS ]---------------------------

	A future version will be released with more sentences.




-------------------------[ 6.  U S E R   G U I D E ]-------------------------




-------------------------[ 6.1  START-UP PROCEDURE ]-------------------------

From the DOS prompt type the following to start TOUCH TYPE TUTOR: ttt

There is an alternative method of starting TOUCH TYPE TUTOR which supplies the
name of the user from the command line.  This is the same name you would use
when running the tutor in teach-mode and allows an automatic way of starting
e.g. from a batch file, so that you do not need to type in your name every
time you run the program.  For example, if the name you use is "Fred" start
the program by typing: ttt -nFred

(The "-n" is a standard UNIX way of specifying switches).




--------------------------[ 6.2  OPTION SELECTION ]--------------------------

The program features menu boxes for ease of use.  Select the desired option
using the up and down arrow keys and then hit enter.  Select the QUIT option
to return one menu level back and finally to quit the program from the top
level.

Remember to use the online help provided if you are not sure which option to
select.




----------------------------[ 7.  SITE LICENSE ]-----------------------------

COMPANIES please note that only ONE USER at ONE LOCATION may use and operate
TOUCH TYPE TUTOR.

Additional computers, users and locations should be registered separately,
by volume, or by obtaining a site license.

DISCOUNT RATES are offered to companies registering for a site license or by
volume.   Please write to Gray Design Associates, P.O. Box 333, Northboro,
MA 01532, USA for a rate schedule.




------------------------[ 8.  COMMENTS TO THE AUTHOR ]-----------------------

Any feedback would be greatly appreciated.  Please direct any comments to
author personally via mail to David P. Gray, Gray Design Associates,
P.O. Box 333, Northboro, MA 01532, U.S.A.




----------------[ 9.  ASSOCIATION OF SHAREWARE PROFESSIONALS ]---------------

This software is produced by David P. Gray who is a member of the Association
of Shareware Professionals (ASP).  ASP wants to make sure that the shareware
principle works for you.   If you are unable to resolve a shareware-related
problem with an ASP member by contacting the member directly, ASP may be able
to help.

The ASP Ombudsman can help you resolve a dispute or problem with an ASP member,
but does not provide technical support for members' products.  Please write to
the ASP Ombudsman at P.O. Box 5786, Bellevue, WA 98006, USA or send a CompuServe
message via easyplex to ASP Ombudsman 70007,3536.




----------------------------[ END OF MANUAL.DOC ]----------------------------
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1334

     Volume in drive A has no label
     Directory of A:\

    COMPUTER TTX       848   6-28-89   7:09p
    CUSTOM   TTX       138  11-27-88   8:13p
    GENERAL  TTX       760  12-03-88   3:10p
    LEGAL    TTX       781  12-03-88  11:40a
    MANUAL   DOC      6440   4-29-90  10:59a
    MEDICAL  TTX       762  12-03-88  11:42a
    README   DOC     10395   1-01-90  12:40p
    TTT      000     23552   4-29-90  11:46a
    TTT      COM     46532   4-29-90  11:46a
    TTT      HLP       999   7-06-89   7:20p
    TTX      HLP      1117  11-26-88   5:41p
    TUT      HLP      2101  11-26-88   7:01p
    GO       BAT        38   1-11-89   1:55p
    GO       TXT       540   5-16-90  11:07p
    FILE1334 TXT      1931   5-18-90   3:21p
           15 file(s)      96934 bytes
                           59392 bytes free
