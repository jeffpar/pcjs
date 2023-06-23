---
layout: page
title: "PC-SIG Diskette Library (Disk #1472)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1472/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1472"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "THE MUSIC MINDER"

    THE MUSIC MINDER is a comprehensive music library management system.
    Schools, churches, civic organizations and individuals use it to keep
    track of music orders, music library inventory and performances.
    
    Compositions in your music library are posted through the library
    system
    with all data concerning the composition available for editing.  The
    library is displayed and various reports can be run against the
    database.  Performance data can be posted and maintained, allowing the
    music director to view the performance history (three previous
    performances) for any composition.  THE MUSIC MINDER also supports
    multiple music libraries.
    
    Some of the features provided are:  a music library filing system,
    complete ordering information system, individual 3x5 library card
    printing, performance tracking, establishment of multiple libraries,
    performance history reports, and other reports based on composer,
    keywords and title.  Browse the library by keyword, composer or title.
    This program is fully menu-driven and easy to operate.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1472.TXT

{% raw %}
```
Disk No: 1472
Program Title: THE MUSIC MINDER
PC-SIG version: 1

THE MUSIC MINDER is a comprehensive music library management system.
Schools, churches, civic organizations and individuals use it to keep
track of music orders, music library inventory and performances.

Compositions in your music library are posted through the library
system, with all aspects of the composition available for editing.  The
library is viewed on screen and various reports can be run against the
database.  Performances can be posted and maintained, allowing the music
director to view the performance history (three previous performances)
for any composition.  THE MUSIC MINDER also supports multiple music
libraries.

Some of the features provided are; a music library filing system,
complete ordering information system, individual 3x5 library card
printing, performance tracking, establishment of multiple libraries,
performance history reports on screen and hardcopy, reports based on
composer, keywords and title, and more.  Browse the library by keyword,
composer or title.  This program is fully menu-driven and easy to
operate.

Synopsis: A music library management system for schools, churches, civic
organizations and individuals who need to organize music and musical
performances.

Usage:  Business/Entertainment -  Music Management Database.

Special Requirements:  512K memory, two floppy disks or hard disk,
CGA.

How to Start:  Type GO (press enter).

Suggested Registration:  $20.00

File Descriptions:

MUSMIND  EXE  Main program.
README   TXT  Small text file.
COMLIST  FRM  Form file.
COPIES   FRM  Form file.
ELIB     FRM  Form file.
KEYLIST  FRM  Form file.
MUSORDER FRM  Form file.
VOICE    FRM  Form file.
3X5      LBL  Label file.
SETUP    MEM  Setup file.
MUS      WIN  Data file.
MUSLIB   DBF  Data base.
TITLE    NDX  Index file.

PC-SIG
1030D E Duane Avenue
Sunnyvale CA 94086
(408) 730-9291
(c) Copyright 1989 PC-SIG Inc.

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                <<<<  Disk No 1472 THE MUSIC MINDER  >>>>                ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To start the program type, MUSMIND (press enter)                        ║
║                                                                         ║
║ To view the documentation on your screen, type VIEW (press enter)       ║
║                                                                         ║
║ To copy the documentation to your printer, type MANUAL (press enter)    ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## README.TXT

{% raw %}
```






		     " T h e   M u s i c   M i n d e r "
	       A Comprehensive Music Library Management System
			 Written by G. Reid Stringer
---------------------------------------------------------------------------
License
Copyright (c) 1988 G. Reid Stringer, All Rights Reserved.

You are free to use, copy and distribute "The Music Minder" providing that:

			 NO FEE IS CHARGED FOR USE,
			  COPYING OR DISTRIBUTION.
		       IT IS NOT MODIFIED IN ANY WAY.
	 THIS DOCUMENTATION FILE (UNMODIFIED) ACCOMPANIES ALL COPIES

     This program is provided AS IS without any warranty,  expressed  or
implied,  including  but not limited to fitness for a particular purpose.

---------------------------------------------------------------------------
     "The Music Minder" is a comprehensive music management system. It
includes three distinct systems; (1) Music Ordering, (2) Music Library,
(3) Performance Tracking.  Written in Quicksilver, "The Music Minder" is
designed to take the labor out of music management.


F E A T U R E S :

     1. Complete ordering information screen
     2. Music library filing system
     3. Performance tracking ability
     4. Ability to establish multiple libraries
     5. Performance history reports on screen and hardcopy
     6. Reports based on Composer, Keywords, Title and more.
     7. Browse the Library by keyword, composer, or title
     8. Print individual 3 x 5 music library cards


System Requirements:

     IBM PC,XT,AT,PS2 or %100 IBM compatible computer, 512k memory,
2 floppy disk drives or 1 fdd and a hard disk.  (It is possible
to run with 1 floppy, but storage is very limited.)  Mono graphics card
with mono monitor or CGA,EGA,VGA with a color monitor.  Any color card with
a mono monitor will not work properly with this release.  An Epson or Epson
compatible printer for hardcopy.







			      "The Music Minder"
				     Page 2
IN THE BEGINNING:

      First, make a backup copy of your program files and data files.
I have tried to test "The Music Minder" on a number of computers and
there should be no problems, but strange things happen with resident
memory programs, static electricity, inept computer operators, lousy
typists, etc.

To Make a backup:

Type the following command then press enter:   Diskcopy A: A:

This will copy all files. Label the disk and store.

     Print and read the documentation carefully.  Installation of files
in the proper directories is essential for the program to operate.

To Print documentation:

Turn on your printer:
Type the command that follows and press enter: Type readme.txt > lpt1

HARD DISK INSTALLATION

     Make a directory for the program files.  I use c:\muslib.  (See example
below).  Then copy from your program disk all of the files in the root
directory of the distribution disk.  Then make another directory for your
data files.  I use c:\muslib\data.

     The data files are "MUSLIB.DBF" and "TITLE.NDX".  All other files
should be in your program directory.  If the title.ndx file is in the same
directory with the program, it will work but, you will not be able to use
but one database.

     Almost every problem comes from files being in the wrong directory or
the index file has been corrupted.

Example:  Type the following at the C: prompt.

md c:\muslib
md c:\muslib\data
copy a:*.* c:\muslib
copy a:\data\*.* c:\muslib\data

FLOPPY INSTALLATION:

      Copy all programs onto a formatted floppy disk.  Copy the data files
(muslib.dbf and title.ndx) onto a second formatted floppy disk.  Place the
program disk in drive A: and the data disk in drive B:


T0 START THE PROGRAM:

    TYPE  "MUSMIND"  at the C:> for hardisk users, the A:> for floppy
users.  If the installation has been performed correctly, the data drive
setup screen will appear.  Type in the drive and directory path and end
with the back-slash.  Example:  "C:\muslib\data\"   IF THE BACKSLASH IS
LEFT OFF THE PROGRAM MAY CRASH AND BURN or HANG IN AN UNENDING LOOP.  If
this should happen--REBOOT the machine. Go to DOS and delete the file
"setup.mem"  in the program directory.  Retype the "musmind" command and
try again.


ORDER ENTRY:

     Press the (O) option, then the (E) to enter music orders.  Simply fill
in the blanks on the screen with the information indicated and be sure and
enter an order date.  It is from this date your order will be printed. The
information is saved and automatically can be accessed from the "Library
System" for editing.

		       Registration Information on Page 4





			       "The Music Minder"
				     Page 3
MUSIC LIBRARY:

       Compositions already in your library can be posted through the
library system under the (L)ibrary- (A)dd Music selection.  All aspects of
the composition can be posted and edited from the library system.  Various
printed reports are available or the database may be viewed on the screen.
This is accessed through the (R)eports menu.

       Performances can be posted and maintained through the Performance
System.  Each entry is posted and a history of the three previous
performances are updated.  This allows the director to easily view the
performance history of each selection.

       Multiple libraries may be kept by placing separate copies of the
data files in different sub-directories.  These "Libraries" may then be
accessed by setting the proper program and data paths from the "Utilities"
selection on the Main Menu.  This also allows you to view the libraries of
other musicians that also use "The Music Minder."


	    . . B A C K U P   Y O U R   F I L E S   O F T E N . .


Trouble Shooting:

#1.  If the program refuses to come up--
       Delete the setup.mem file and try again.  This will allow you to
define the paths for data and programs.

#2.  Errors occur in ordering of Compositions--
       Reindex the database.  This is found in the "Utilities" selection.

#3.  The System hangs--
       Reinstall the program files, set paths for data and program, reindex
the database.

#4.  Compositions that you know are there don't appear
       Reindex the database.

#5.  Other strange and unexplained things--

    If these steps do not remedy the problem support can be obtained by
registered users by calling area code 915-687-2126.  Ask for Reid.

		       Registration Information on Page 4





			       "The Music Minder"
				     Page 4
TO REGISTER:

      If you find "The Music Minder" to be useful, a contribution of $20
would be appreciated.  For this amount you will be furnished with the full
documentation with all features detailed. Adjustments can also be made to
allow for different needed printer interfaces. Updates will be available at
a nominal cost to all registered users.

Send the following information:

Name__________________________________________________________

Address_______________________________________________________

City, State Zip_______________________________________________

Computer:_________________________Printer:_____________________

Phone:_(_____)-______________________


Make checks payable to PC Works
Send registation and information to:

PC WORKS
REID STRINGER
815 West Golf Course Rd.
Midland, Texas 79701

Please enclose tax exemption information if ordering for a church
school, or other non-profit organization.

Updates:
     Suggestions for added features and any improvements/changes you would
like to see made should be made to the above address.  Suggestions for
other types of products that users would be interested in would also be
appreciated.


IBM, Quicksilver and Epson are trademarks of their respective companies.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1472

     Volume in drive A has no label
     Directory of A:\

    FILE1472 TXT      1998   7-27-89  10:26a
    MUSMIND  EXE    240986   9-12-88  10:35p
    README   TXT      8439   1-02-88  11:41p
    3X5      LBL      1034   9-12-88  10:35p
    COMLIST  FRM      1990   9-12-88  10:35p
    COPIES   FRM      1990   9-12-88  10:35p
    KEYLIST  FRM      1990   9-12-88  10:35p
    MUS      WIN     36530   9-12-88  10:35p
    MUSORDER FRM      1990   9-12-88  10:35p
    VOICE    FRM      1990   9-12-88  10:35p
    ELIB     FRM      1990   9-12-88  10:35p
    GO       BAT        38   7-14-89   8:01a
    GO       TXT       694   7-27-89  10:55a
    VIEW     BAT        42   7-27-89  10:56a
    PAGE     COM       325   1-06-87   4:21p
    MANUAL   BAT       152   7-27-89  10:56a
    DATA         <DIR>    
           17 file(s)     302178 bytes

     Directory of A:\DATA

    .            <DIR>    
    ..           <DIR>    
    TITLE    NDX      1024  11-02-88   6:53a
    MUSLIB   DBF      2201   9-12-88  10:35p
            4 file(s)       3225 bytes

    Total files listed:
           21 file(s)     305403 bytes
                            8192 bytes free
