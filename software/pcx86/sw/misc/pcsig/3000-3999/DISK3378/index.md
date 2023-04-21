---
layout: page
title: "PC-SIG Diskette Library (Disk #3378)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3378/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3378"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## DRAGNZIP.TXT

{% raw %}
```



                            Drag And Zip version 1.8

Zip Utilities for Windows 3.1 File Manager


What is Drag And Zip?

Drag And Zip is a set of utilities that makes Windows 3.1 file manager into
a file manager for Zip files. 

Drag And Zip makes it very easy to run PKZIP and compress groups of files
from any Windows file manager that supports "Drag and Drop".

To make a Zip file with Drag And Zip you merely "drag" files from the file
manager and "drop" them on the Drag And Zip icon, fill out a dialog box with
the Zip filename and destination directory, and Drag And Zip will run PKZIP
on them automatically. 

Viewing the contents of a Zip file is as easy as double clicking on the file
listing in file manager.  The Drag And Zip Zip file viewer, Zip View, will
automatically be loaded and will you show you the contents of the Zip file.
You can tag any group of files in Zip View for extraction or deletion.  You
can view any file with Zip View's built in file viewer or the file viewer of
your choice. You can temporarily extract any file from the Zip file and run
it if it is a program, or run the program associated w ith it.  If you make
modifications to the extracted file, you will also have the opportunity to
replace the older file currently in the Zip file with the modified one.  New
to version 1.8 is the option to run ZIP2EXE on a Zip file and make it into a
self-extraction EXE file.

Also part of the Drag And Zip utilities is Fileman Launcher.  You can use
this program to run Windows file manager and Drag And Zip together.  When
you exit File Manager, Drag And Zip will automatically be closed at the same
time.  If you have other utilities that you like to run with File Manager,
you can also add them to Fileman Launcher and they will be run also.  When
you exit File Manager, Fileman Launcher will attempt to close those
programs, too.

Along with Drag And Zip you need to be running Windows 3.1 or better and
have your own copies of PKZIP and PKUNZIP.  You also need a copy of
ZIP2EXE.EXE if you want to make self-extracting Zip files.  The Drag And Zip
Zip viewer can be used to show you the contents of a Zip file, but if you
want to extract any files you will need your own copy of PKUNZIP.


File Listing
A complete copy of the Drag And Zip utilities should include the following
files:

DRAGNZIP.EXE - 	The Drag And Zip program
ZIPVIEW.EXE -   The Zip file viewing Program
FMLAUNCH.EXE -  The Fileman Launcher program
DZSETUP.EXE -   Setup program for Drag And Zip
DOSBOX.DLL -    Module for running PKZIP in a DOS window
DRAGNZIP.WRI -  Documentation for Drag And Zip in Windows Write format
DRAGNZIP.TXT -  Documentation for Drag And Zip in ASCII format
REGFORM.WRI -   Registration form for Drag And Zip in Windows Write format
REGFORM.TXT -   Registration form for Drag And Zip in ASCII format
DZSITEL.WRI -   Site license information
DZ$.BAT -   	Batch file to run PKZIP and PKUNZIP in enhanced mode
DZP$.BAT -  	Batch file to run PKUNZIP and PKUNZIP in standard mode
DZ.PIF -    	PIF file for PKZIP in enhanced mode
ZV.PIF -        PIF file for PKUNZIP in standard mode
ZV.PIF -        PIF file for running PKZIP and PKUNZIP in the background
SFX.PIF -   	PIF for running ZIP2EXE

Installing Drag And Zip
Installation of Drag And Zip and Zip View is very easy with the setup
program provided.  From Program Manager, choose "File" from the menu bar and
then choose "Run" from the pull down menu.  In the dialog box type the full
path where the files are, and the program name DZSETUP.EXE.  For example, if
you were installing from drive A:, you would enter "A:\DZSETUP.EXE".  If you
were installing from the "DZ" directory of drive C:, you would enter
"C:\DZ\DZSETUP.EXE".

The DZSetup program will ask you what drive and directory you are installing
Drag And Zip from, and what drive and directory you would like to install
them to.  If the source path is different from the destination path, all
files will be copied over to the new path.  If they are the same, the
installation program will assume that you only want to make modifications to
a currently installed version of Drag And Zip.  The DZSetup program will
then ask you where your copies of PKZIP.EXE and PKUNZIP.EXE are.  DZ Setup
will look in the directory that you entered for PKZIP and see if there is a
copy of ZIP2EXE.EXE there.  This is the program that PKWARE provides for
making self-extracting Zip files.  If a copy of ZIP2EXE is found, Drag And
Zip will add a button to the Zip file viewer allowing you to make the Zip
file into a self-extracting one.  DZSetup will then ask you for permission
to add a line to the "extensions" section of your "WIN.INI" file so Windows
file manager will know to run Zip View when you double cl ick on a Zip file.

If you choose not to have "WIN.INI" modified, you can still run Zip View
from its Icon in Program Manager and use Zip View's "File" menu to load Zip
files.

The DZSetup program will then create a program group called Drag And Zip and
put the Drag And Zip, Zip View and Fileman Launcher icons in it.  DZSetup
will then give you the opportunity to have Drag And Zip load automatically
when you start Windows. That way its icon will always be at the bottom of
your screen when you need it.  If you don't choose this option you can use
Fileman Launcher to run File Manager and Drag And Zip together.  When you
exit File Manager, Drag And Zip will exit too.  You can also ch oose to run
Drag And Zip from its icon in Program Manager.

Using Drag And Zip
When you run Drag And Zip, it will load and show its zipper icon at the
bottom left of your screen.  Drag And Zip must be running for you to use it.
It will not work if you try to drag files to its icon in Program Manager.
If you are constantly covering the Drag And Zip icon with other applications
and then can't find it when you need it, you can choose to make the Drag And
Zip icon visible all the time.  To do this, first load Drag And Zip.  Then,
click on its icon and bring up the menu.  Click on the la st selection in
the menu, "Always Visible".  That will cause the Drag And Zip icon to show
through anything that is trying to cover it.  You can turn that option off
the same way.  Click on the Drag And Zip icon and bring up the menu.  You
will notice that there is now a check before the choice "Always Visible".
Click again on "Always Visible" and Drag And Zip will stop peeking through
applications that are covering it.  The state of the Always Visi ble option
will be saved when you exit Drag And Zip and w ill become active the next
time you run Drag And Zip.  The Drag And Zip icon will remember its last
placement, so if you would rather have it in another place other than the
bottom left of your screen, move the icon there; then each time you run Drag
And Zip it will go to the place where you last left it.

When you want to create a Zip file, run File Manager or any file manager
that supports Drag and Drop, and tag the files that you want to Zip.  Then
hold  the mouse down on one of the tagged files.  The mouse cursor will
become a white rectangle with a "+" on it.  Move the mouse without taking
your finger off the left button to the Drag And Zip icon.  While you are
moving the mouse, the cursor will become a circle with a slash through it.
When the cursor is over the Drag And Zip icon, it will once more beco me a
white rectangle with a "+" on it.

Let go of the mouse button.  The Drag And Zip dialog box will pop up asking
you for a name for the Zip file that you want to create.  You will also have
the opportunity to add additional command line arguments and specify a
directory where you want the Zip file to be created.  When you choose "OK",
Drag And Zip will run PKZIP and create the Zip file.  If you are running
Windows 3.1 in enhanced mode, PKZIP will be run in a window.  If you are
running in standard mode, PKZIP will be run as a DOS application i n full
screen.  To simply compress the files with PKZIP, you will not have to enter
anything on the Arguments line.  If you do want to specify special command
line arguments, you can click on the "Args" button to pop up a dialog box
with a listing of arguments.

If you specify an output directory that doesn't exist, Drag And Zip
will let you know, and give you the option to create the directory before
running PKZIP.

The window that PKZIP is running in will stay open until you press a key or
click the mouse on the OK button, so you will be able to see any messages
output by PKZIP.

If you're working with the file manager from Windows, the file manager
screen will be updated to reflect any changes to the file listing.

Dragging and Dropping Directories
With Drag And Zip, you can drag and drop sub directories just like files.
In the Windows file manager, you can only drag directories if you have them
listed along with files on the right hand side of the file manager.  When a
directory is dragged, it will be presented to PKZIP as DIRNAME\*.*.  If you
want PKZIP to also Zip any sub directories in the dragged directory, you can
use the arguments "-r" and "-p".  "-r" will recurse the sub directories and
"-p" will store the path names in the Zip file.  Norton Desktop for Windows
allows you do drag whole directory branches from the directory tree.  If you
are dragging a whole directory branch with sub directories in Norton
Desktop, you should not use the "-r" argument because that would make the
directories get Zipped twice.

Using Zip View: the Drag And Zip Zip file viewer
The easiest way to use Zip View is to double click on a ZIP file in Windows
3.1 File Manager or any file manager that supports Drag and Drop.  If you've
let the setup program put an association line in your WIN.INI or if you've
put one in yourself, Zip View will be run and will show a file listing of
the contents of the Zip File in a window.  The listing will have the file
name, the size in bytes, the date and time of the file, the compression
method used; and if there is a stored directory name, Zip View w ill show
that also.  You don't have to close the Zip View window to view another Zip
file.  Just double click on another Zip file and Zip view will show it.

There are five or six buttons across the top of the screen.  You can click
the mouse on them or use the Alt key and the underlined letter on the
button.  Clicking on a file will move the highlight bar to that file.  You
can then tag the file so Zip View will know that you want to unZip it. You
can tag any in one of three ways: 1. Hold down the Ctrl key and click on the
file with the left mouse button. 2. Click on the file with the right mouse
button. 3. First, highlight the file and then press the space bar. 4. First,
highlight the file and press the left arrow key.

You can untag the file by doing the same procedure on a tagged file.

A tagged file will have a red arrow at the front of its listing.  Like File
Manager, Zip View lets you tag a group of files by holding down the Shift
key and clicking on a file.  You can also tag and untag files with the Right
and Left Arrow keys respectively.  Use the Ctrl key with the arrow keys to
tag and untag all the files.  Double clicking on a file will extract it and
run it if it is a "COM", or "EXE" file, or run the program that you have
associated with the file if it is a data file.  For example, if you clicked
on CHESS.BMP, Zip View would extract CHESS.BMP from the parent Zip file and
then check which program you have associated with it.  Most likely you have
Windows Paintbrush as the associated program.  In this case, Zip View will
run the Paintbrush with CHESS.BMP as an argument.  When you close the
associated program, Zip View will delete the file.  Before deleting the
file, Zip View will check if it has been modified.  If it has been modified,
you can have Zip View replace the older version of the file in the Zip file
with the newer modified one.  Simply click on OK when Zip View asks you if
you want to put the modified file back into the Zip file.

View
The first button is "View".  Clicking on this or pressing "Alt-V" will have
Zip View extract the file from the Zip File and load up a file viewer so you
can see the contents of the file.  Unlike previous versions of Zip View,
this version has its own built in file viewer which can accept files of
unlimited length.  If you would rather use another viewer, add the statement
"viewer=<path and viewer program name>" under the "ZipView" heading in the
DZ.INI file found in your Drag And Zip directory.  When you close the
viewer, the file you are viewing will be deleted.  If you want the file
extracted permanently, you must choose the extract button from the button
bar.

Delete
You can delete any file or group of tagged files from the Zip file by
clicking on the "Delete" button or pressing "Alt-D".  Zip View accomplishes
this by running PKZIP with the "-d" option.  

Run
Clicking on "Run" or pressing "Alt-R" will extract any "EXE" or "COM" file
from the Zip file and run it.  

Path/CRC
You can toggle the display to show either the path or the CRC number for
each file in the Zip file by clicking on the "Path/CRC" button.

Extract
To extract (unzip) files from a Zip file, choose the  "Extract" button from
the button bar.  A dialog box will pop up in which you can enter the Zip
filename, any special command line arguments and a specific output
directory.  In the Extract Dialog box there are three radio buttons that
give you the choice of extracting all the files, just the tagged files, or
just the highlighted file.   To simply extract files with PKUNZIP, you will
not have to enter anything on the Arguments line.  If you do want to spe
cify special command line arguments, you can click on the "Args" button to
pop up a dialog box with a listing of arguments.

If you've entered an output directory that does not exist, Zip View will pop
up a dialog box informing you of such, and will give you the opportunity to
create the directory.

The window that PKUNZIP is running in will stay open until you press a key
or click on the OK button, so you will be able to see any messages output by
PKUNZIP.

Make Exe
If the DZSetup program was able to find a copy of ZIP2EXE.EXE in your PKZIP
directory, you will have an additional button on the button bar entitled
"Make EXE".  If you click on this button or press "Alt-E", Zip View will run
your copy of ZIP2EXE and make a self-extracting executable (EXE) file from
your Zip file.  Zip View will present you with a dialog box where you can
enter an output directory and a check box where you can specify if you want
the resulting EXE file to be a "mini PKSFX".  A mini PKSFX ha s a smaller
header than a regular EXE file made with ZIP2EXE, and is therefore smaller.
To make a mini PKSFX file, Zip View runs ZIP2EXE with the "-j" option.


Change Fonts
Clicking on Fonts will bring up a standard Win 3.1 font dialog box from
which you can change the default font in Zip View.

Sort
A new menu option has been added to this version of Zip View.  That menu
option is "Sort".  From this menu, you can have the Zip file listing sorted
by filename, extension, date and time, size or unsorted.  The default is
unsorted.  Whatever sort option that you choose will remain active for only
that session of Zip View.  You can choose to make the sort option permanent
by choosing the sort that you want, and then choosing "Save" from the Sort
menu.

Using Zip View Without File Manager
Zip View can also be run alone instead of from Windows File Manager.  You
can use the "File\Load" menu option to choose a Zip file to view.

Using Fileman Launcher
You can have Drag And Zip run automatically when you run File Manager by
running them both with Fileman Launcher.  Double clicking on the Fileman
Launcher icon will run File Manager and then run Drag And Zip.  When you
exit File Manager, you will automatically exit Drag And Zip also.  Fileman
Launcher comes with its own configuration file called FMLAUNCH.INI.  In it
you can specify other programs to be run with File Manager.  In FMLAUNCH.INI
the first entry you will see is prog0=c:\dz\dragnzip.exe except th e path
for Drag And Zip will be the one you specified when you ran DZSetup.  You
can add up to nine additional programs for Fileman Launcher to run by
listing them on separate line in FMLAUNCH.INI.  The second program will be
listed as "prog1=<path and program name>", the third as prog2=, up to
prog9.  When you exit File Manager, Fileman Launcher will try to exit all of
the programs you specified.  Whether Fileman Launcher can successfully close
the program depends on the way the program responds to Fileman Launcher's
exit request.

Installing Drag And Zip and Zip View Without the DZSetup Program
I've tried to make the setup program easy to use and to make as little
changes to your Windows system files as necessary.  The files install in
their own directory and have their own "INI" files.  I have to make one
change to the "WIN.INI" file so File Manager will know what program to run
when you double click on a Zip file.

If, however, you'd rather manually install the programs yourself, here's
how: 1.  Copy all the files to a directory on your hard disk. 2.  Create a
file in that directory called "DZ.INI".  On the first line of DZ.INI type
"[DragAndZip]".  On the second line type "zippath=" and enter the directory
and drive where you have PKZIP installed, including an ending backslash. 3.
On the third line type [ZipView]. 4.  If you have a copy of ZIP2EXE in your
PKZIP directory, type "zip2exe=1" on the next line, otherwise, type
"zip2exe=0". 4.  If you want to be able to run Zip View from Windows File
Manager, you have to add a line to WIN.INI under the "[extensions]" heading.
You can find WIN.INI in your Windows directory.  The line you need to add is
"zip=C:\DZ\zipview.exe ^.ZIP".  Instead of the path "C:\DZ", substitute the
path that you have put your copy of Zip View in.

Getting Help
If you have questions or problems with Drag And Zip, Zip View or Fileman
Launcher, help is free for all registered users.  I can be reached at (415)
453-9779; on CompuServe my ID is 71320,1277; or you can write to me:

                    Dan Baumbach
                    Canyon Software
                    1527 Fourth St., Suite 131
                    San Rafael, CA 94901

```
{% endraw %}

## LICENSE.DOC

{% raw %}
```
Drag And Zip Copyright (C) 1992 Dan Baumbach/Canyon Software
- All Rights Reserved

For ordering information, see the file REGFROM.TXT.

License Agreement and Warranty Disclaimer

You should carefully read the following terms and conditions before
using this software.  Use of this software indicates your acceptance of
these terms and conditions.  If you do not agree with them, do not use
the software.

Shareware Version

You are hereby licensed to:  use the Shareware Version of the software
for a 60 day evaluation period; make as many copies of the Shareware
version of this software and documentation as you wish; give exact
copies of the original Shareware version to anyone; and distribute the
Shareware version of the software and documentation in its unmodified
form via electronic means.  There is no charge for any of the above.

You are specifically prohibited from charging, or requesting donations,
for any such copies, however made; and from distributing the software
and/or documentation with other products (commercial or otherwise)
without prior written permission, with one exception:  Disk Vendors
approved by the Association of Shareware Professionals are permitted to
redistribute Drag And Zip, subject to the conditions in this license,
without specific written permission.

Unregistered use of Drag And Zip after the 60-day evaluation period is in
violation of federal copyright laws.

Evaluation and Registration

This is not free software.  This license allows you to use this software
for evaluation purposes without charge for a period of 60 days.  If you
use this software after the 60 day evaluation period a registration fee
of $20 plus $5 shipping and handling is required.  Payments can be in US
dollars or through MasterCard or Visa.

Send payment to:
                Canyon Software
                1537 Fourth St., Suite 131
                San Rafael, CA 94901
                415 453-9779
                FAX 415 459-4904
 
Payment can also be made by phone with MasterCard or Visa.

When payment is received you will be sent a registered copy of the latest
version of Drag And Zip.

One registered copy of Drag And Zip may be dedicated to a single person who
uses the software on one or more computers or to a single workstation
used by multiple people.

You may access the registered version of Drag And Zip through a network,
provided that you have obtained individual licenses for the software
covering all workstations that will access the software through the
network.

Governing Law

This agreement shall be governed by the laws of the State of California.

Disclaimer of Warranty

This software and the accompanying files are sold "as is" and without
warranties as to performance of merchantability or any other warranties
whether expressed or implied.  

Because of the various hardware and software environments into which
Drag And Zip may be used, no warranty of fitness for a particular purpose is
offered.

Good data processing procedure dictates that any program be thoroughly
tested with non-critical data before relying on it.  The user must
assume the entire risk of using the program.  Any liability of the
seller will be limited exclusively to product replacement or refund of
purchase price.
```
{% endraw %}

## REGFORM.TXT

{% raw %}
```
The Drag And Zip utilities are Shareware
I wrote these programs with the goal of making your working in Windows 
easier and more fun.  I have released them as shareware for you and 
your friends and associates to try them out at your leisure.  If I you think 
that I have achieved my goal and I have contributed to making your 
computing life easier and more fun, I would like you to acknowledge that 
by paying for them.  The price for Drag And Zip, Zip View and Fileman 
Launcher is only $20 plus $5 for shipping.  For your $25 dollars you will 
get a new diskette with the latest version of the programs and no 
registration reminder screens.  Your payment will let me know that my 
work is appreciated as well as help to support my efforts in providing the 
best products for you, so that I can continue to improve these programs 
and write new ones.  

Getting Help
If you have questions or problems with Drag And Zip, Zip View or 
Fileman Launcher, help is free for all registered users.  I can be reached 
at (415) 453-9779 on CompuServe my ID is 71320,1277 or you can 
write to me:
Dan Baumbach
Canyon Software
1527 Fourth St., Suite 131
San Rafael, CA 94901




REGISTRATION FORM
Persons registering ASP shareware will receive a free CompuServe 
membership with a complimentary $15 usage credit.

 ____ Drag And Zip version 1.8 diskettes @ $20 ea.        $________

					            Subtotal                  $________

California residents please add 7.25% sales tax:          $________

Shipping $5 per each order of up to 2 copies              $________
										                 
                                 Total                    $________

Diskette size   3 1/2" [ ]   5 1/4" [ ]


All orders will be send by US mail unless requested otherwise. 

Master Card & Visa Orders.  You may call in your registrations to me  at 
(415) 453-9779 or send in this form with the information below.

Name As It Appears On Credit  Card 
________________________________________________________

MC/VISA # ______________________________________________

MC [ ]  VISA [ ]

Expiration Date ___/___

Name:__________________________________________________

Company:_______________________________________________

Address:________________________________________________

_______________________________________________________

Where did you obtain Drag And Zip _________________________

Any comments, suggestions or bugs?  

_______________________________________________________

_______________________________________________________

________________________________________________________

Please make checks payable to:

Canyon Software
1537 Fourth Street Suite 131
San Rafael, CA 94901


My name is Dan Baumbach I am a member of ASP., The Association of 
Shareware Professionals.  I can be reached either at the above address, 
on CompuServe electronic mail 71320,1277, or at (415) 453-9779.  
Thank you for your registration.


This program is produced by a member of the Association of Shareware 
Professionals (ASP).  ASP wants to make sure that the shareware 
principle works for you.  If you are unable to resolve a shareware-related 
problem with an ASP member by contacting the member directly, ASP 
may be able to help.  The ASP Ombudsman can help you resolve a 
dispute or problem with an ASP member, but does not provide technical 
support for members' products.  Please write to the ASP Ombudsman at 
P.O. Box 5786, Bellevue, WA 98006 or send a CompuServe message 
via CompuServe Mail to ASP Ombudsman 70007,3536"



```
{% endraw %}

## VENDOR.DOC

{% raw %}
```
Drag And Zip 1.8 Copyright (c) 1992 by Dan Baumbach/Canyon Software
- All rights reserved.

This file provides information for Shareware Distributors and Disk Vendors
who wish to distribute the Drag And Zip 1.8 package.

                               Distribution

The following paragraph is an extract from the license agreement
regarding the distribution of the Shareware version of Drag And Zip:

    You are specifically prohibited from charging, or requesting
    donations, for any such copies, however made; and from distributing
    the software and/or documentation with other products (commercial or
    otherwise) without prior written permission, with one exception:
--> Disk Vendors approved by the Association of Shareware Professionals
--> are permitted to redistribute Drag And Zip, subject to the conditions in
--> this license, without specific written permission.

                Suggested One Line Program Description:

Drag and Drop ZIP Shell for Win 3.1 File Mngr, View, Run, Assoc - ASP Shareware

                          Suggested Keywords:

Drag And Zip Win 3.1 File Manager Drag and Drop View Run Assoc ASP Shareware

                  Suggested Brief Program Description

Drag And Zip makes any file manager that supports Drag and Drop into a
Zip file manager.  Drag files to a zipper icon and run PKZIP on them.
Double click on a zip file and view it.  Extract, delete, view, make EXE.
run and run the associated program on files in the Zip file.

                       Suggested Long Description

Drag And Zip works with any file manager that supports Drag and Drop and
makes it into a manager for Zip files.  Tag files in the file manager and
drag them to a zipper icon and run PKZIP on them.  Double click on a Zip
file in the file manager and a window with the contents of the Zip file
pops up.  From the Zip file viewer you can tag files for extraction or
deletion.  You can view a file of any size in Drag And Zip's built in file
viewer.  Double click on any file in the listing and it is temporarily
extracted and run along with its associated program.  If you make any
changes to the file while in the associated program, Drag And Zip will
give you the opportunity to rezip it into the arcive.  If you have a copy
of ZIP2EXE.EXE, you can also make self extracting executables with Drag And
Zip.  Also included is Fileman Launcher.  Fileman Launcher runs Windows
File Manager and DZ together. It closes DZ when you close File Manager.
Nine additional programs may be added to Fileman Launcher's INI file.
Requires PKZIP/PKUNZIP.

                           Other Information

Requirements:  Windows 3.1 in Enhanced or Standard mode.
               The Shareware PKZIP/PKUNZIP product from PKWARE, Inc.

Registration:  $20 plus $5 shipping to receive disk with latest version
				and printed manual.

Author:        Dan Baumbach/Canyon Software, 1527 4th St, Suite 131
               San Rafael, CA 94901

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3378

     Volume in drive A has no label
     Directory of A:\

    DOSBOX   DLL      7184  11-17-92   9:55a
    DRAGNZIP EXE     26640  12-04-92   8:27a
    DRAGNZIP TXT     18639  12-03-92   6:37p
    DRAGNZIP WRI     21248  12-13-92   5:50p
    DZ$      BAT        45  11-01-92  12:13p
    DZ       PIF       545  11-01-92  12:20p
    DZP$     BAT        54  11-04-92   8:37a
    DZSETUP  EXE     21008  12-02-92  10:32a
    DZSITEL  WRI     12544  10-02-92   8:40p
    FILE_ID  DIZ       396  12-03-92   6:49p
    FMLAUNCH EXE      8208  10-02-92   8:40p
    LICENSE  DOC      3332  10-04-92   5:36p
    REGFORM  TXT      3645  12-03-92   6:37p
    REGFORM  WRI      4736  12-03-92   6:38p
    SFX      PIF       545  10-31-92  11:05a
    UNZIP    ARG       848  10-02-92   8:40p
    VENDOR   DOC      3008  12-03-92   6:53p
    ZIP      ARG      1135  10-02-92   8:40p
    ZIPVIEW  EXE     56336  12-03-92   7:00p
    ZV       PIF       545  11-01-92  12:20p
    ZV1      PIF       545  10-02-92   8:40p
    GO       BAT        20   2-17-93   5:37a
    SHOW     EXE      2040   9-12-88  10:48a
           23 file(s)     193246 bytes
                          114688 bytes free
