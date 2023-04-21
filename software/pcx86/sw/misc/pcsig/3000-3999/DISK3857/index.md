---
layout: page
title: "PC-SIG Diskette Library (Disk #3857)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3857/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3857"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## HISTORY.TXT

{% raw %}
```
          WizManager Versions/Releases History


Version 1.1c (current version)
************

Fixed the display of WizManager's Buttonbar in Windows for 
Workgroups and Microsoft's "updated" File Manager when the 
Drivebar is showing its drives in more than one line.


Version 1.1b
************

Fixed COPY and MOVE commands to LPTx or COMx.

Fixed edit fields in the Preferences options "Set DOS PIF",
"Set Fast Open" and "Set Viewer". Auto-horizontal scroll is now
implemented.

Fixed "Lock" and "Minimize All" functions when minimizing
applications which do not have a minimize box.

Fixed hard copy left margin for "Print Dir" and "Print Tree".
Now the left margin is independant of the resolution (dpi) of
the output device (about 1/2").


Version 1.1a
************

Fixed path shortcut symbol when used as a command parameter.

Fixed RENAME problem (rename with pathshortcut in Source and
not in Target).


Version 1.1
***********

Fixed potential General Protection Fault errors (GPF).

Further optimized functions and commands.


Version 1.0
***********

Initial WizManager version (June '93)

```
{% endraw %}

## LICENSE.DOC

{% raw %}
```
WizManager 1.1 Copyright (C) 1993 Mijenix - All Rights Reserved

For ordering information, see the file ORDERFRM.TXT.


      SHAREWARE LICENSE AGREEMENT AND WARRANTY DISCLAIMER

You should carefully read the following terms and conditions
before using this software.  Use of this software indicates
your acceptance of these terms and conditions.  If you do not
agree with them, do not use the software.

****************************************************************
  SHAREWARE VERSION LICENSE
****************************************************************

You are hereby licensed to:  use the Shareware Version of the
software for a 21 day evaluation period; make as many copies of
the Shareware version of this software and documentation as you
wish; give exact copies of the original Shareware version to
anyone; and distribute the Shareware version of the software
and documentation in its unmodified form via electronic means.
There is no charge for any of the above.

You are specifically prohibited from charging, or requesting
donations, for any such copies, however made; and from
distributing the software and/or documentation with other
products (commercial or otherwise) without prior written
permission, with one exception:  Disk Vendors approved by the
Association of Shareware Professionals are permitted to
redistribute WizManager, subject to the conditions in this
license, without specific written permission.

Unregistered use of WizManager after the 21-day evaluation
period is in violation of federal copyright laws.

****************************************************************
  EVALUATION AND REGISTRATION
****************************************************************

WizManager is not free software.  This license allows you to
use the software, for evaluation purposes, without charge for a
period of 21 days.  If you use this software after the 21 day
evaluation period a registration fee of $39.95 plus shipping
and handling is required.  Payments must be in US dollars drawn
on a US bank, and should be sent to Mijenix, 6666 Odana Road,
Suite 326, Madison, WI 53719. Credit card ordering and quantity
discounts are available, as described in the README.TXT and
ORDERFRM.TXT files.  When payment is received you will be sent
a registered copy of the latest version of WizManager and a
user's manual. You will also receive 90 days of free technical
support and the newsletter "Tips and Tricks for File Manager".

****************************************************************
  GOVERNING LAW
****************************************************************

This agreement shall be governed by the laws of the State of
Wisconsin.

****************************************************************
  DISCLAIMER WARRANTY
****************************************************************

This software and the accompanying files are sold "as is" and
without warranties as to performance or merchantability or any
other warranties whether expressed or implied. Because of the
various hardware and software environments into which
WizManager may be put, no warranty of fitness for a particular
purpose is offered.

Good data processing procedure dictates that any program be
thoroughly tested with non-critical data before relying on it.
The user must assume the entire risk of using the program. 
Mijenix's and its suppliers entire liability and the user's 
exclusive remedy shall be at Mijenix's option, either (a) return 
of the price paid, or (b) repair or replacement of the software 
that does not meet Mijenix's Limited Warranty and which is 
returned with proof of purchase.
```
{% endraw %}

## NETWORK.TXT

{% raw %}
```
	WizManager Installation on a Network Server


WizManager can be installed on a network server so that all
connected users can load and run WizManager on their stations.
Each computer running WizManager should have a WizManager
License. Contact Mijenix for volume discount information.

1. WINFILE.INI SETUP

WizManager WIZMGR.INI file is created during the installation
process in WizManager's directory. WIZMGR.INI contains the
information and modifications to perform on the WINFILE.INI file
in order to have File Manager load and run WizManager (see
README2.TXT). WIZMGR.INI is only an information file and is not
used by WizManager.

File Manager loads a specified extension when the latter path and
filename is provided in WINFILE.INI. This information is stored
under the [AddOns] section. Each station which is to run
WizManager must have its WINFILE.INI modified by adding a
specific entry to the [AddOns] section.

In addition to the [AddOns] section modification, it is necessary
to add the [WizManager] section with the path to the WizManager
directory as a sole entry. WizManager needs the specified path to
launch its memory unit WIZUNIT.EXE at startup.

All the information which should be merged with WINFILE.INI is
contained in the WIZMGR.INI file.

If users wish to run WizManager scripts, the following entry has
to be added to the users' WIN.INI file under the [Extensions]
section:

  WIZ=[...]\WIZUNIT.EXE ^.WIZ

where [...] represents the path to the WizManager directory (an
entry example could be WIZ=F:\WIZMGR\WIZUNIT.EXE ^.WIZ)


2. WIZBAR.DLL

It is important that the file WIZBAR.DLL be in the users' file
search path.

By default, WIZBAR.DLL is installed in the Windows directory, but
it can be installed in any directory declared in the user's file
search path.

If WIZBAR.DLL is not found during File Manager's startup process,
WizManager will not be loaded and therefore will not be available
to the user.


3. MERGEINI.EXE UTILITY PROGRAM

MERGEINI Copyright (c) 1993, Mijenix - Dan Antonuk. All rights 
reserved.

A useful utility program named MERGEINI.EXE is provided with the
registered version of WizManager. MERGEINI is a DOS program
which can be used to 'smartly' merge the information contained in
WIZMGR.INI with WINFILE.INI.

The MergeIni command syntax is as follows:

        MERGEINI <SourceFile> <DestinationFile>

If any section declared in the <SourceFile> does not exist in 
the <DestinationFile>, it is automatically created and the 
related entries are copied from the <SourceFile> to the 
<DestinationFile>. If a section already exits in the 
<DestinationFile>, MERGEINI adds or updates the related entries.

MERGEINI can be declared in a login script or batch file so 
that each user who should have access to WizManager (stored on 
a file server) would have its WINFILE.INI modified, so that 
WizManager could be found and loaded when File Manager is 
launched.
```
{% endraw %}

## ORDERFRM.TXT

{% raw %}
```
                      WIZMANAGER ORDER FORM

Please send your CHECK or MONEY ORDER to:
****************************************
  Mijenix
  6666 Odana Road, Ste 326
  Madison, WI 53719

Please place CREDIT CARD orders through:
****************************************
  Public Software Library (PsL)
  P. O. Box 35705,  Houston, TX 77235-5705
  USA Sales: 1-800-242-4775     Overseas  : (713) 524-6394
  Fax      : (713) 524-6398     CompuServe: 71355,470

! THE PsL NUMBERS ABOVE ARE EXCLUSIVELY FOR PLACING ORDERS WITH
! CREDIT CARDS, MIJENIX CANNOT BE REACHED AT THOSE NUMBERS. IF YOU
! HAVE QUESTIONS ABOUT THE STATUS OF YOUR ORDER, VOLUME DISCOUNTS,
! TECH SUPPORT, ETC, PLEASE CONTACT MIJENIX DIRECTLY.

NAME:	 _________________________________________________________

COMPANY: _________________________________________________________

STREET:	 _________________________________________________________

CITY:	 _____________________________ STATE: _____ ZIP: _________

COUNTRY: _______________________ TEL: _____________ FAX: _________

WizManager (item #10869) $ 39.95 US x ___ unit(s) =  $ _________
Shipping & Handling:
	Continental  U.S.		$  4.00
	AK, HI, CAN, MEX		$  6.00
	International			$ 12.00
	Express USA			$ 20.00    > $ _________ <
					Subtotal:  > $ _________ <
	Wisconsin residents add 5.5% sales tax  :  > $ _________ <

					TOTAL   :  > $ _________ <
Diskette format: __ 3.5"  or __ 5.25"
Payment by: __ Mastercard  __ Visa     __ AMEX     __ Discovery
            __ Check (US)  __ Certified Check (US) __ Money Order

Card #: _________________________________________ Exp. Date: ____
Card Holder Name: _______________________________________________
Signature: ______________________________________________________
*** NB: Send credit card orders to PsL (NOT to Mijenix) ***

Where did you here about WizManager?
```
{% endraw %}

## README.TXT

{% raw %}
```
                 WizManager version 1.1c


WizManager is a powerful, innovative Windows 3.1 File Manager
add-on.  WizManager maximizes your efficiency and makes working
in File Manager a breeze. WizManager adds many long awaited
features to File Manager such as a color scrollable Buttonbar,
a Command Line Box to start programs, open files, or enter DOS
commands without shelling out (over 100 commands available),
and many "utilities"  like Print Directory, Print Tree, Lock
and Restore, System and Disk Information, Scripts, Customized
Launch Menus, File Viewer connection, etc.

***************************************************************
  HOW TO INSTALL WIZMANAGER?
***************************************************************

Installing WizManager is very easy using the installation
program provided. From your Windows Program Manager, choose
"File" in the menu bar and then choose "Run" from the displayed
pull down menu.  In the dialog box type the full path to
WizManager's files, and the program name INSTALL.EXE.  For
example, if you were installing from drive A:, you would enter
"A:\INSTALL.EXE".  If you were installing from the "WIZ"
directory of drive C:, you would enter "C:\WIZ\INSTALL.EXE".

After the installation program is started, follow the
instructions displayed in each dialog. Once WizManager is
successfully installed, start (or restart) File Manager.
WizManager's Buttonbar will automatically be displayed and the
"WizManager" menu will be added to the menu bar.

***************************************************************
  INFORMATION FILES
***************************************************************

For Versions/Releases and Updates information, please read the
file HISTORY.TXT.

For Network installation and informations about MERGEINI.EXE, 
please read the file NETWORK.TXT.

To Un-install WizManager consult the UNINSTAL.TXT file.

For software license information see the file LICENSE.DOC

***************************************************************
  TECHNICAL SUPPORT
***************************************************************

If you encounter any difficulties with WizManager, during or after
its installation, please contact Mijenix through one of the
following channels:

  Mijenix
  6666 Odana Rd, Ste 326
  Madison, WI 53719

  Tel/Fax       :    (608) 277-1971
  CompuServe    :    75430,1545
  America Online:    Mijenix
  Internet      :    75430.1545@compuserve.com

              _______
         ____|__     |               (R)
      --|       |    |-------------------
        |   ____|__  |  Association of
        |  |       |_|  Shareware
        |__|   o   |    Professionals
      -----|   |   |---------------------
           |___|___|    MEMBER

Mijenix is a member of the Association of Shareware
Professionals (ASP). ASP wants to make sure that the shareware
principle works for you. If you are unable to resolve a
shareware-related problem with an ASP member by contacting the
member directly, ASP may be able to help. The ASP Ombudsman can
help you resolve a dispute or problem with an ASP member, but
does not provide technical support for members' products.
Please write to the ASP Ombudsman at 545 Grover Road, Muskegon,
MI 49442 or send a CompuServe message via CompuServe Mail to
ASP Ombudsman 70007,3536.

***************************************************************
  HOW TO ORDER WIZMANAGER? (REGISTRATION)
***************************************************************

WizManager is distributed as Shareware. Shareware is
copyrighted software which you can "try before you buy".
Shareware is a great concept and we encourage you to try out
WizManager and pass along shareware copies to your friends.

Please understand that WizManager is NOT free software. You are
welcome to evaluate WizManager for 21 days. If you continue to
use WizManager, you should buy the program.

WHAT DO YOU GET WHEN YOU ORDER WIZMANAGER?

You get the latest full-featured version of WizManager, a
comprehensive user's manual, new release information, the
newsletter Tips & Tricks for File Manager, and 90 days of free
technical support...and, of course, you'll never have to see
the reminder dialog again. Order WizManager today for only
$39.95 (plus Shipping and Handling).

You can order WizManager either by sending a check or money
order, or by placing a credit card order.

* Please send your check or money order along with a completed
  order form (see ORDERFRM.TXT file) to:

  Mijenix
  6666 Odana Road, Suite 326
  Madison, WI 53719
  USA

* Please place credit card orders through

  Public Software Library (PsL)
  Sales: 1-800-242-4775
  International: (713) 524-6394
  Fax: (713) 524-6398
  CompuServe: 71355,470

  *** WARNING ***

  The PsL numbers above are exclusively for placing orders with
  credit cards, Mijenix CANNOT be reached at those numbers. If
  you have questions about the status of your order, volume
  discounts, WizManager, etc, please contact Mijenix through
  the channels listed above under Technical Support.

***************************************************************
  LIST OF FILES
***************************************************************

The files provided with WizManager shareware version 1.1 are:

  - WIZMGR.DLL     (WizManager main library)
  - WIZBAR.DLL     (WizManager Buttonbar library)
  - WIZUNIT.EXE    (WizManager Memory Unit)
  - WIZMGR.HLP     (WizManager Help file)
  - INSTALL.EXE    (Installation program)
  - INSTALL.BIN    (Installation File)
  - INSTALL.INF    (Installation File)
  - INSTALL.BMP    (Installation File)
  - INSTLIB.DLL    (Installation File)
  - README.TXT     (The file you are currently reading)
  - README2.TXT    (Installation notes and known problems)
  - UNINSTAL.TXT   (Information on how to un-install WizManager)
  - NETWORK.TXT    (Information about network installation)
  - HISTORY.TXT    (Versions/Releases/Updates information)
  - ORDERFRM.TXT   (WizManager Order Form)
  - LICENSE.DOC    (Shareware program license)
  - VENDOR.DOC     (Distribution information and rules)
  - FILE_ID.DIZ    (WizManager descriptor)


***************************************************************
  PLEASE READ THE ADDITIONAL INFORMATION PROVIDED IN THE
  README2.TXT FILE.
***************************************************************

```
{% endraw %}

## README2.TXT

{% raw %}
```
             WELCOME TO MIJENIX WIZMANAGER 1.1c

WizManager is a powerful, innovative Windows 3.1 File Manager
add-on. It appends many features missing in File Manager, and
enhances your power to manage your disks and files. WizManager
maximizes your efficiency and makes working in File Manager a
breeze.

****************************************************************
        !!! IMPORTANT INSTALLATION NOTES, PLEASE READ !!!
****************************************************************

IF YOU ENCOUNTER ANY PROBLEM DURING OR AFTER THE INSTALLATION,
PLEASE NOTIFY MIJENIX. WE WILL TRY TO IDENTIFY AND CORRECT THE
PROBLEM. Mijenix's address can be found at the end of this file.

-> WizManager's Buttonbar uses powerful techniques to provide
   speed and innovative features. This can push certain Windows
   video drivers for ACCELERATED video boards to the edge. Make
   sure you have the latest video drivers for your video board.
   Standard Windows video drivers (VGA and SuperVGA) cause no
   problem.

   If you encounter General Protection Fault (GPF) error
   messages while running WizManager, start the Windows Setup
   program and change the video driver of your system to a
   standard Windows video driver (VGA or Super VGA for example)
   and determine whether General Protection Fault messages still
   appear. If they don't, update the video drivers you were
   using to the latest available version.

-> DO NOT DECLARE MORE THAN 4 EXTENSIONS IN THE WINFILE.INI
   [AddOns] section:

Extensions to File Manager are not executable files (EXE) but
Dynamic Link Libraries (DLL) which are automatically loaded by
File Manager when the latter is started and destroyed when File
Manager is closed.

How does File Manager 'know' or recognize extensions?

File Manager gets all the necessary information by reading its
initialization file WINFILE.INI (not WIN.INI!) which is located
in the Windows directory. The different data in WINFILE.INI is
sorted by sections (a section title is enclosed in square
brackets [...]). The section of interest for recognizing and
loading extensions is called [AddOns]. This is where extension
paths are declared, one per line, in the form (example):

           [AddOns]
           Extension1=PathToExtension1\extension1.dll
           Extension2=PathToExtension2\extension2.dll

Each extension will add a top-level menu to File Manager. The
documentation for the Windows File Manager Extender Interface
states that 5 top-level menus may be added to the File Manager
menu. However, due to what appears to be a bug in Windows File
Manager, the fifth menu item does not work properly. Any
command selected from the fifth menu item becomes confused with
the adjacent File Manager "Window" menu, and the corresponding
command from the "Window" menu is executed instead.

What this means is simple:
DO NOT DECLARE MORE THAN 4 EXTENSIONS IN THE [AddOns] section!

You may presently be using File Manager Extensions, like

           - DOS 6 Tools (Microsoft)
           - MetzLaunch (Metz TaskManager)
           - NDW (Norton Desktop)
           - File Commander (Wilson WindowWare)
           - FExtend (BarbarSoft)
           - or others.

As File Manager limits you to 4 extensions, it is up to you to
"keep up" and maintain the [AddOns] section of WINFILE.INI. If
you have more than 4 declarations under [AddOns], simply type a
';' (without the quotes) at the beginning of the line(s) you
want File Manager to ignore. This lets you keep all the
declarations in case you decide later to alter your choices and
start only the ones you need.

During the installation of WizManager, the [AddOns] section of
WINFILE.INI is updated to include the WizManager library path.
This declaration is appended at the end of the [AddOns]
section. If more than 3 other declarations exist above
WizManager's line, proceed as explained above to cancel out one
or more declarations (use Notepad.exe for example to edit
WINFILE.INI, and modify the [AddOns] entries only).

****************************************************************
  WINDOWS NT
****************************************************************

Mijenix will soon port WizManager to the 32-bit world of
Windows NT. However, the WizManager version you have installed
is a set of 16-bit DLL's written for Windows 3.10 and Windows
for Workgroups (WFW); it will not work under Windows NT.

****************************************************************
  MIJENIX ADDRESS
****************************************************************

  Mijenix
  6666 Odana Rd, Ste 326
  Madison, WI 53719

  Tel/Fax       :    (608) 277-1971
  CompuServe    :    75430,1545
  America Online:    Mijenix
  Internet      :    75430.1545@compuserve.com

              _______
         ____|__     |               (R)
      --|       |    |-------------------
        |   ____|__  |  Association of
        |  |       |_|  Shareware
        |__|   o   |    Professionals
      -----|   |   |---------------------
           |___|___|    MEMBER

Mijenix is a member of the Association of Shareware
Professionals (ASP). ASP wants to make sure that the shareware
principle works for you. If you are unable to resolve a
shareware-related problem with an ASP member by contacting the
member directly, ASP may be able to help. The ASP Ombudsman can
help you resolve a dispute or problem with an ASP member, but
does not provide technical support for members' products.
Please write to the ASP Ombudsman at 545 Grover Road, Muskegon,
MI 49442 or send a CompuServe message via CompuServe Mail to
ASP Ombudsman 70007,3536.


```
{% endraw %}

## UNINSTAL.TXT

{% raw %}
```
	         WizManager Un-Installation


***************************************************************
  USING THE UN-INSTALLATION PROGRAM: UNINSTAL.EXE
***************************************************************

The easiest way to un-install WizManager is to use the
un-install program provided with the REGISTERED version of
WizManager. Make sure that File Manager is not running
(WizManager is not loaded) when you launch UNINSTAL.EXE.
UNINSTAL.EXE is available on WizManager's installation
disk (disk 2 for 5 1/4" disks).


***************************************************************
  MANUALLY UN-INSTALL WIZMANAGER
***************************************************************

To un-install WizManager manually  you must erase or suspend
the WizManager specific information in the WINFILE.INI file
(not WIN.INI!) and, if desired, delete all of the WizManager
files.

1. WINFILE.INI

Edit the WINFILE.INI file with notepad.exe or any other text
editor (not a word processor, unless you know how to save the
modified file as a text file). WINFILE.INI should be in your
Windows directory.

Look for the [AddOns] section and either:

  - Delete the entry (entire line) which starts with
    WizManager=(...)WIZMGR.DLL, where (...) is the path to
    WIZMGR.DLL.

    or

  - Add a ';' (without the quotes) at the beginning of the
    entry WizManager=(...)WIZMGR.DLL. Adding a ';' makes the
    line a comment and is therefore discarded by File
    Manager. Choosing this method to un-install WizManager
    leaves you the option to have WizManager back at any time
    by simply removing the ';' at the beginning of the entry.


2. DELETION OF WIZMANAGER FILES

If you choose to completely remove WizManager, your second step
is to erase all the WizManager files in the directory where
WizManager is installed. You can look up in WINFILE.INI what
WizManager's path is under the [WizManager] section in the
WizManagerPath entry.

WizManager files to delete are:

  WIZMGR.DLL
  WIZMGR.HLP
  WIZMGR.INI
  WIZUNIT.EXE
  INSTALL.EXE
  INSTALL.BIN
  INSTALL.INF
  INSTALL.BMP
  INSTLIB.DLL
  INSTALL.LOG
  README.TXT
  README2.TXT
  NETWORK.TXT
  ORDERFRM.TXT
  UNINSTAL.TXT
  HISTORY.TXT
  LICENSE.DOC
  VENDOR.DOC
  FILE_ID.DIZ


Another WizManager file has been installed during the
installation process in your Windows directory. You can delete
it as well:

  WIZBAR.DLL


If you wish to have WizManager again available and running,
remove the ';' you placed in the WINFILE.INI (if you opted for
this route) or re-install WizManager using the installation
program (INSTALL.EXE) provided with WizManager.

```
{% endraw %}

## VENDOR.DOC

{% raw %}
```
WizManager 1.1c Copyright (c) 1993, Mijenix - All rights reserved

This file provides information for Shareware Distributors and
Disk Vendors who wish to distribute the WizManager 1.1 package.

****************************************************************
                       Distribution
****************************************************************

The following paragraph is an extract from the license agreement
regarding the distribution of the Shareware version of
WizManager:

    You are specifically prohibited from charging, or requesting
    donations, for any such copies, however made; and from
    distributing the software and/or documentation with other
    products (commercial or otherwise) without prior written
--> permission, with one exception: Disk Vendors approved by the
--> Association of Shareware Professionals are permitted to
--> redistribute WizManager, subject to the conditions in this
--> license, without specific written permission.


****************************************************************
         Versions/Releases/Updates information:
****************************************************************

Please read the file HISTORY.TXT. The WizManager version
provided with this set of files is 1.1c


****************************************************************
         Suggested One Line Program Description:
****************************************************************

WizManager 1.1c: Outstanding Win 3.1 File Manager add-on.


****************************************************************
             Suggested Compressed File Name:
****************************************************************

WIZMGR.ZIP


****************************************************************
                     Suggested Keywords:
****************************************************************

WizManager WizMgr File Manager Add-on Addon Extension Toolbar
Buttonbar Shareware ASP


****************************************************************
            Suggested Brief Program Description:
****************************************************************

Just about all the features a user could wish for in Windows
File Manager are finally available in this innovative and
powerful File Manager add-on. Install WizManager with its slick
installation program and get 1) the ease-of-use of a colorful,
scrollable buttonbar, 2) a Command Line Box which allows you to
enter DOS commands such as COPY, DEL, MKDIR, etc, and 3) many
great utilities like Print Directory, Print Tree, Lock and
Restore, System and Disk Information, Scripts, Customized
Launch Menus, File Viewer connection, and more. WizManager will
save you time and open the door to new possibilities.
WizManager is the ultimate Windows 3.1 File Manager extender,
try it!


****************************************************************
                  Suggested Long Description:
****************************************************************

Did you ever think Windows File Manager could be easier to use
with a colorful, scrollable buttonbar? Did you ever wish you
could type DOS commands like COPY, DEL, MKDIR, etc, within File
Manager? Did you ever want to print a directory listing,
quickly view files or open files which don't have an associated
application?  Now you can!

Just about all the features you dreamed of in Windows File
Manager are finally available with this innovative and powerful
File Manager add-on. Install WizManager with its slick
installation program and make working in Windows File Manager a
breeze. Get 1) the ease-of-use of a fast access buttonbar, 2)
the possibility of entering DOS commands in a Command Line Box
(without leaving File Manager), and 3) many great utilities
such as Print Directory, Print Tree, Lock and Restore, System
and Disk Information, Scripts, Customized Launch Menus, Fast
Open Files, File Viewer connection, Task Manager, direct access
to the Control Panel Options, Exit Windows, Restart Windows,
Reboot, and more. All this additional power in a single and
unique addition. WizManager will save you time and open the
door to new possibilites.  WizManager is the ultimate Windows
3.1 File Manager extender, try it!


****************************************************************
                       Other Information
****************************************************************

Requirements:	Windows 3.1 or WFW, 525 kB of free disk space,
               	latest video drivers.

Registration:	$39.95 plus shipping and handling to receive
		disk with latest version, user's manual,
		newsletter "Tips and Tricks for File Manager",
		90 days free technical support.

Author:		Mijenix, 6666 Odana Road, Suite 326,
		Madison, WI 53719, (608) 277-1971

		Mijenix is an ASP Member
              _______
         ____|__     |               (R)
      --|       |    |-------------------
        |   ____|__  |  Association of
        |  |       |_|  Shareware
        |__|   o   |    Professionals
      -----|   |   |---------------------
           |___|___|    MEMBER
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3857

     Volume in drive A has no label
     Directory of A:\

    WIZMGR   ZIP    331624   8-07-93  11:03a
    PKUNZJR  COM      2750   2-01-93   2:04a
    GO       EXE     26022   1-10-92  12:14p
    GO-STRT  DAT       541   6-01-93  11:07a
            4 file(s)     360937 bytes
                               0 bytes free
