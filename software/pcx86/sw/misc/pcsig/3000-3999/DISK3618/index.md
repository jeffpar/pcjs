---
layout: page
title: "PC-SIG Diskette Library (Disk #3618)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3618/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3618"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## README.TXT

{% raw %}
```

=================================================================
WinWisdom v3.0 - Copyright (c) 1992 by Richard Pitts.
	         All rights reserved.
=================================================================

General
=======
    WinWisdom is designed to be a Quote-Of-The-Day program for
Microsoft Windows 3.0 and higher.  It will display a quote
every time you start Windows.  You can even print it.  It
allows you to store and lookup quotes by author or subject.
You can build quote files for your own favorite quotes or use
the starter file that comes in this distribution package.

    Once installed, WinWisdom will display quote from the quote
file every time Windows is started.  If desired, additional
quotes can be displayed by pressing the MORE button.
WinWisdom can also be minimized to an icon and remain on your
desktop throughout your session; this allows you to get
additional quotes whenever you want by just double clicking
on the icon.  You may also customize the colors and fonts used
to display the quote.  It even comes with quote file maintenance
functions so you can build quote files of your own favorites.

Registration
============
    WinWisdom is shareware, it is NOT public domain.  The
registration fee is $10 (US) with a free 15-day trial period.
If you intend to use WinWisdom beyond the trial period, you may
register by filling out the form in file REGISTER.TXT or providing
the same information written on a sheet of paper and sending it
along with your registration fee to:
	
	Richard Pitts
	P.O. Box 963
	Alpharetta, GA 30239

Remember to specify your disk size.

With your registration, you will receive the most current version
of the program and additional quote files with many more quotes.
Your registration supports shareware development.  The ability
to provide future releases depends on your support.

Installation
============
Because this program is written using Visual Basic v1.0, it
requires the file VBRUN100.DLL.  It is required to run all
Visual Basic v1.0 applications.  If you do not already have a
copy of this file, you may obtain it from Microsoft, Compuserve
or other on-line service, local BBS's, or shareware distributors.
In some cases, it may also be provided with the WinWisdom
distribution package.  Make sure that this file is in either the
c:\windows or c:\windows\system directory.

WinWisdom v3.0 makes use of VB/ISAM.  VB/ISAM requires the file
VBISAMMX.DLL and it is distributed with WinWisdom.  While you may
copy this file into any directory in your DOS path or keep it in
the same directory containing the WinWisdom executable file, it
is best to place this file in either the c:\windows or
c:\windows\system directory.

The following other files are part of the WinWisdom distribution
package:
	WINWIS.EXE		- Program executable
	WINWIS.HLP		- WinWisdom Help file
	WINWIS30.ISM		- Starter quote file map component
	WINWIS30.ISF		- Starter quote file finder component
	WINWIS30.ISD		- Starter quote file data component
	README.TXT		- WinWisdom information and instructions
	REGISTER.TXT		- WinWisdom registration form

The WINWIS.ZIP file is in Zipped (compressed) format.
To Unzip the file, type: PKUNZIP WINWIS (press Enter).

The easiest thing to do is to copy all of these files into the
c:\windows directory.  Doing this insures that everything is
available to Windows.  If you want to keep WinWisdom in a
separate directory, set one up and copy the above files into it.

In order to use the WinWisdom pop-up quote-of-the-day feature,
you will need to do one of the following depending on whether
you are running Windows 3.0 or 3.1.

If you have Windows 3.0, do the following:
1.  Using any text editor (Notepad is good for this, SysEdit is
    better), open the WIN.INI file in your Windows directory.
2. Several lines down from the top of the file, you will find
   a line which begins with 'RUN='.  This line tells Windows
   what programs to run after it boots.  Change this line to
   read:  RUN=WINWIS.EXE [plus any other startup programs].
3. Save the WIN.INI file.  The next time you start Windows,
   WinWisdom will pop-up displaying your quote-of-the-day.

If you have Windows 3.1 you can do the above, or the following:
1. Open the group that you have designated as your start-up group
   (by default, the group is 'StartUp').
2. From the File menu, select 'New', then select 'Program Item'.
3. Type WinWisdom as the description (or any thing else you want
   to call it) and type WINWIS.EXE as the command line.
4. If you put WinWisdom in a directory other than the Windows
   directory, you will need to type the directory in the working
   directory field, and add the directory to the command line
   field.

Due to the use of VB/ISAM, this version of WinWisdom requires a
change to your CONFIG.SYS file.

Make a backup of this file in case anything goes wrong.  Using
any text editor (Notepad is good for this, SysEdit is better),
insert the following line into your CONFIG.SYS file:

	install=c:\dos\share.exe

This assumes that the SHARE.EXE file resides in the DOS
directory of your C: drive.  If not, use whatever is appropriate
for your system.  Save the file.

Note: In order for this change to take effect, your computer
must be rebooted.  To do that, exit Windows.  At the DOS prompt,
press CTRL+ALT+DEL.


Distribution
============
    I retain the copyright on all versions.  You may distribute
any version as long as you include this document with all
of the original files and distribute the software unmodified,
free of charge, and without additional restrictions.


Packing List
============
    The complete WinWisdom v3.0 package should contain the
following files:

        File Name      Description
        WINWIS.EXE     Program Executable
	WINWIS.HLP     On-line help file
        WINWIS30.ISD   Starter Quote file - data
	WINWIS30.ISF   Starter Quote file - finder
	WINWIS30.ISM   Starter Quote file - map
	README.TXT     This file
	REGISTER.TXT   Registration Form
	VBISAMMX.DLL   VB/ISAM DLL required at run time


VB/ISAM MX
==========
The database structure used by WinWisdom is managed through
VB/ISAM MX - Visual Basic Indexed-Sequential Access Method,
Multiple indeX version.  Their required legalese follows.

This software was created using VB/ISAM, Copyright Software
Source 1991, 1992; all rights reserved.  VB/ISAM software may
not be used, copied, modified, transferred, or distributed
except as expressly provided in its software license.  Only
licensees of VB/ISAM may create software that uses any part
of VB/ISAM.  Software Source, Fremont, California, USA;
telephone (510)623-7854.

Disclaimer
==========
This software is provided 'as is' without warranty of any kind, either
express or implied.
```
{% endraw %}

## README.TXT

{% raw %}
```

=================================================================
WinWisdom v3.0 - Copyright (c) 1992 by Richard Pitts.
	         All rights reserved.
=================================================================

General
=======
    WinWisdom is designed to be a Quote-Of-The-Day program for
Microsoft Windows 3.0 and higher.  It will display a quote
every time you start Windows.  You can even print it.  It 
allows you to store and lookup quotes by author or subject.
You can build quote files for your own favorite quotes or use
the starter file that comes in this distribution package.

    Once installed, WinWisdom will display quote from the quote
file every time Windows is started.  If desired, additional
quotes can be displayed by pressing the MORE button.
WinWisdom can also be minimized to an icon and remain on your
desktop throughout your session; this allows you to get
additional quotes whenever you want by just double clicking
on the icon.  You may also customize the colors and fonts used
to display the quote.  It even comes with quote file maintenance
functions so you can build quote files of your own favorites.

Registration
============
    WinWisdom is shareware, it is NOT public domain.  The
registration fee is $10 (US) with a free 15-day trial period.
If you intend to use WinWisdom beyond the trial period, you may
register by filling out the form in file REGISTER.TXT or providing
the same information written on a sheet of paper and sending it
along with your registration fee to:
	
	Richard Pitts
	P.O. Box 963
	Alpharetta, GA 30239

Remember to specify your disk size.

With your registration, you will receive the most current version
of the program and additional quote files with many more quotes.
Your registration supports shareware development.  The ability
to provide future releases depends on your support.

Installation
============
Because this program is written using Visual Basic v1.0, it
requires the file VBRUN100.DLL.  It is required to run all
Visual Basic v1.0 applications.  If you do not already have a
copy of this file, you may obtain it from Microsoft, Compuserve
or other on-line service, local BBS's, or shareware distributors.
In some cases, it may also be provided with the WinWisdom
distribution package.  Make sure that this file is in either the
c:\windows or c:\windows\system directory. 
 
WinWisdom v3.0 makes use of VB/ISAM.  VB/ISAM requires the file
VBISAMMX.DLL and it is distributed with WinWisdom.  While you may
copy this file into any directory in your DOS path or keep it in
the same directory containing the WinWisdom executable file, it
is best to place this file in either the c:\windows or
c:\windows\system directory. 
 
The following other files are part of the WinWisdom distribution
package: 
	WINWIS.EXE		- Program executable 
	WINWIS.HLP		- WinWisdom Help file 
	WINWIS30.ISM		- Starter quote file map component 
	WINWIS30.ISF		- Starter quote file finder component 
	WINWIS30.ISD		- Starter quote file data component 
	README.TXT		- WinWisdom information and instructions 
	REGISTER.TXT		- WinWisdom registration form
 
The easiest thing to do is to copy all of these files into the
c:\windows directory.  Doing this insures that everything is
available to Windows.  If you want to keep WinWisdom in a
separate directory, set one up and copy the above files into it.

In order to use the WinWisdom pop-up quote-of-the-day feature,
you will need to do one of the following depending on whether
you are running Windows 3.0 or 3.1. 
 
If you have Windows 3.0, do the following: 
1.  Using any text editor (Notepad is good for this, SysEdit is
    better), open the WIN.INI file in your Windows directory. 
2. Several lines down from the top of the file, you will find
   a line which begins with 'RUN='.  This line tells Windows 
   what programs to run after it boots.  Change this line to 
   read:  RUN=WINWIS.EXE [plus any other startup programs]. 
3. Save the WIN.INI file.  The next time you start Windows,
   WinWisdom will pop-up displaying your quote-of-the-day. 
 
If you have Windows 3.1 you can do the above, or the following: 
1. Open the group that you have designated as your start-up group
   (by default, the group is 'StartUp'). 
2. From the File menu, select 'New', then select 'Program Item'. 
3. Type WinWisdom as the description (or any thing else you want
   to call it) and type WINWIS.EXE as the command line. 
4. If you put WinWisdom in a directory other than the Windows
   directory, you will need to type the directory in the working
   directory field, and add the directory to the command line
   field. 

Due to the use of VB/ISAM, this version of WinWisdom requires a
change to your CONFIG.SYS file. 
 
Make a backup of this file in case anything goes wrong.  Using
any text editor (Notepad is good for this, SysEdit is better),
insert the following line into your CONFIG.SYS file:
 
	install=c:\dos\share.exe 

This assumes that the SHARE.EXE file resides in the DOS
directory of your C: drive.  If not, use whatever is appropriate
for your system.  Save the file.   
 
Note: In order for this change to take effect, your computer 
must be rebooted.  To do that, exit Windows.  At the DOS prompt,
press CTRL+ALT+DEL. 


Distribution
============
    I retain the copyright on all versions.  You may distribute
any version as long as you include this document with all
of the original files and distribute the software unmodified, 
free of charge, and without additional restrictions.


Packing List
============
    The complete WinWisdom v3.0 package should contain the
following files:

        File Name      Description
        WINWIS.EXE     Program Executable
	WINWIS.HLP     On-line help file
        WINWIS30.ISD   Starter Quote file - data
	WINWIS30.ISF   Starter Quote file - finder
	WINWIS30.ISM   Starter Quote file - map
	README.TXT     This file
	REGISTER.TXT   Registration Form   
	VBISAMMX.DLL   VB/ISAM DLL required at run time


VB/ISAM MX
==========
The database structure used by WinWisdom is managed through
VB/ISAM MX - Visual Basic Indexed-Sequential Access Method,
Multiple indeX version.  Their required legalese follows. 
 
This software was created using VB/ISAM, Copyright Software
Source 1991, 1992; all rights reserved.  VB/ISAM software may
not be used, copied, modified, transferred, or distributed
except as expressly provided in its software license.  Only
licensees of VB/ISAM may create software that uses any part
of VB/ISAM.  Software Source, Fremont, California, USA;
telephone (510)623-7854.

Disclaimer
==========
This software is provided 'as is' without warranty of any kind, either
express or implied.
```
{% endraw %}

## REGISTER.TXT

{% raw %}
```

WinWisdom v3.0 by Richard Pitts



Please send this form and registration fee of $10 (US) to:

	Richard Pitts
	P.O. Box 963
	Alpharetta, Ga 30239


You will receive latest version of WinWisdom, plus additional
quote files.


Name:    ______________________________________________________

Address: ______________________________________________________ 

         ______________________________________________________

City:    __________________________ State: ____ Zip: __________



Disk Size (check one)     [ ] 3 1/2      [ ] 5 1/4

Do you need VBRUN100.DLL? [ ] Yes        [ ] No 

Where did you acquire WinWisdom? ______________________________


Comments:______________________________________________________

         ______________________________________________________

         ______________________________________________________

         ______________________________________________________

(Comments may also be left on CompuServe at [71042,1123]
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3618

     Volume in drive A has no label
     Directory of A:\

    GO       BAT        38   6-08-93   8:57a
    README   TXT      6907   6-08-93   8:56a
    SHOW     EXE      2040   9-12-88  10:48a
    WINWIS   ZIP    306813   6-08-93   8:52a
    PKUNZIP  EXE     29378   2-01-93   2:04a
            5 file(s)     345176 bytes
                           15360 bytes free
