---
layout: page
title: "PC-SIG Diskette Library (Disk #3904)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3904/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3904"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## FILES.TXT

{% raw %}
```

 Volume in drive B has no label
 Directory of B:\

INSTALL  TXT      1262 04-27-92   5:17p
BRTHDAYS DBF     51832 03-02-92  12:08p
NEWS     EXE    115095 04-02-92   4:56p
FILES    TXT         0 04-27-92   5:19p
VERSION  TXT        70 04-22-92   5:19p
SYSFILE  DBF      2640 04-27-92   4:04p
BRTHDAYS NDX      8192 03-02-92  12:08p
README   DOC     12767 04-27-92   4:18p
CONFIG   SYS        23 08-30-90   2:46p
NEWS     MEM       801 03-02-92  10:13a
       10 file(s)     192682 bytes
                      531456 bytes free
```
{% endraw %}

## INSTALL.TXT

{% raw %}
```
News of the Past shareware volume 1.0

The command to start the program is NEWS.
At your dos prompt simply type the word NEWS and press the enter 
key to start the program.  First take a look at the following example.

With the NEWS disk in drive A and the DATA disk in drive B make sure
you have your dos prompt for A drive  A:\
then type the command NEWS and press enter.

If you intend to copy the program into a hard disk drive directory
first make a directory on your hard drive and copy all files from
both the NEWS and DATA disks into that directory.

Example: At the DOS prompt,  C:\  type  MD then press the space bar
one time then type NEWS and press the enter key.  Once this is done
type CD one space and NEWS then press the enter key. The prompt should
look like this C:\NEWS.   Now to copy the files from the News and Data 
disks into this new directory.  Type   COPY   space    A:*.*  and press enter
All of the files on drive  A  will be copied into your  C  directory 
named News.  Repete the copy command with the Data disk in drive A . Once 
both disks are copied type the command News and press enter to run the program.
Depending on your system and it's configuration the above instructions 
will need to be modified.
```
{% endraw %}

## README.DOC

{% raw %}
```
Welcome to News of the Past - shareware version 1.0  

This program will run on a dual 5.25" 360k drive system or with one 5.25"
drive and a hard drive.  If you only have one 3.5" disk drive you will need
to have both 5.25" disks ( NEWS and DATA ) copyied onto a formatted 3.5" disk.

TO START type the command NEWS from your dos prompt and press the enter key.

Anyone distributing News of the Past for any kind of remuneration must first
contact Spectrum Unlimited at (415) 647-1070 or at the address below for 
authorization.  This authorization will be automatically granted to distributors
recognized by the (ASP) as adhering to its guidlines for shareware distributors
and such distributors may begin offering News of the Past immediately ( however
Spectrum Unlimited must still be advised so that the distributor can be kept 
up-to date with the latest version of News of the Past.).

This is a low-density version of our program News of the Past.  Over
300.000 individuals in the USA and Canada have received a printed greeting
created with News of the Past.

Low-density refers to the quantity of information found in News of the Past,
particularly in the category EVENTS OF THE MONTH.  Because we needed to adjust
this program to be compatible with single drive systems, only 1/2 of the months
(6 of the 12 months per year-every other month) are included in this version
under EVENTS OF THE MONTH catagory. This version will display or print inform-
ation that occurred on or about the month you were born. Registered users will
receive a complete database (12 months) for a hard drive system.

Registration fee is $49.95.  This price includes 100 personalized printed
greeting forms, a $19.95 value FREE with your registration.  These forms are
on continuous feed paper and ork with either a dot-matrix or laser printer. 

We are not able to cover all of the features found in News of the Past here, 
but we will try and cover the important areas to enable you to get the program 
working.

TABLE OF CONTENTS.....

Before You Begin................Chapter 1
Overview........................Chapter 2
Introduction....................Chapter 3
Getting Started.................Chapter 4
Copyright Agreement.............Chapter 5
Today' Date.....................Chapter 6
Main Menu.......................Chapter 7
Print Reports...................Chapter 8
Display Reports.................Chapter 9
Utilities.......................Chapter 10
Problem Solving.................Chapter 11












			Chapter 1    Before you begin.....

For this program to run fast and efficiently, it may or may not be necessary
to make the following changes to your CONFIG.SYS file.  If you are using a
hard disk drive, you should edit or replace the CONFIG.SYS file in the root
directory so that it includes the following lines:

     Files=40
     Buffers=40

A CONFIG.SYS file is included on your News of the Past program disk, and you 
can use the DOS COPY command to put it in the root directory of your hard disk.
Alternatively, you can use a word processing program to modify the CONFIG.SYS
or use the DOS program, Edlin, to edit your CONFIG.SYS file.  For more inform-
ation regarding any problems with installing and running News of the Past check
the chapter "Problem Solving", or if you register this program, you will be
entitled to free customer telephone support, and a complete detailed instruction
manual. 
 
Users that don't have a hard disk drive should follow the hard disk instructions
in the preceding paragraph but should make the changes to the DOS boot diskette
rather than to the root directory of your hard disk.




			Chapter 2  Overview.....

WHAT HAPPENED ON THE DAY YOU WERE BORN???. 

The News of the Past program prints or displays interesting facts for any date
back to the year 1900 (registered program versions go back to the 1800's).

Information categories include: EVENTS OF THE MONTH, SPORTS, COST OF LIVING,
SHARED BIRTHDAYS, POPULAR SONGS, MOVIES, YOUR BIRTHSTONE, and YOUR BIRTHSIGN.

Program upgrades and enhancements are ongoing.  New information categories 
and new printout form designs are a yearly event.  Presently we have 4 multi-
colored greeting forms printed on high-quality watermarked bond. We have a
greeting form for every occasion.

At the present time, there are three News of the Past volumes.  Each volume
contains different information. Whether you present a greeting from Volume I,
II or III, each volume remains fresh by not presenting the same information.
Registering users will receive Volume I.

Here's your chance to change history. News of the Past contains an editor,
designed to give the user access to all information contained in "News of the
Past." You may add, change, or update the database.

Printed greetings can be created to celebrate any occasion. Registered users are
authorized to earn money by selling the greetings, or may choose to give the
greetings away as fun gifts to valued clients, relatives, investors, etc.  Our
geetings are fun, educational, personalized products that are great for people
of all ages.














			Chapter 3   Introduction.....

The authors have made this program very easy to use. People of all ages can
use the various program features with only a minimal understanding of
computers.  Although this program is written with the beginner in mind, it is
assumed that the user is familiar with some DOS (Disk Operating System) 
commands.

This program requires an IBM or compatible computer with 640K memory and two
360K 5.25", or one 720K 3.5", floppy disk drive.  However, the program will be
enhanced considerably with the addition of a hard disk drive to speed up
operations.




			Chapter 4  Getting Started.....

FLOPPY DISK DRIVE SYSTEM
First load DOS (Disk Operating System). Remove your DOS disk and insert the
News of the Past disk and type the command INSTALL. Follow the on screen
instructions carefully.

HARD DISK DRIVE SYSTEM 
Use the same instructions as the paragraph above except you will probably be
booting your system from your hard disk drive rather than a floppy.





			Chapter 5   Copyright Agreement.....

NEWS OF THE PAST program was developed by SPECTRUM UNLIMITED and is
Copyrighted by SPECTRUM UNLIMITED, 1991 All rights reserved.

It is with the permission from SPECTRUM UNLIMITED that this evaluation copy
of the program NEWS OF THE PAST be distributed through vendors and associate
members of the ASSOCIATION OF SHAREWARE PROFESSIONALS (ASP) as SHAREWARE.

DISCLAIMER: Spectrum Unlimited makes no warranties either expressed or implied
regarding the enclosed computer software package, its merchantability, its
fitness for any particular purpose or the accuracy of information contained
within. Furthermore, Spectrum Unlimited reserves the right to revise this 
publication from time to time and the content thereof without obligation to 
notify any person of such changes. 

IMPORTANT NOTICE:
This program and all related data bases and materials are fully copyrighted 
and such is protected under the copyright laws of the United Stated of America.  
The acquiring of this Shareware Evaluation copy of the program News of the Past
through any means does not entitle the user to create printed greetings 
(The printed output) for any purpose other than evaluation. Duplication for any 
other purpose whatsoever would constitute infringement of copyright laws and 
the offender would be liable to civil damages for up to one year imprisonment
and/or $10.000 fine.










			Chapter 6   Today's Date.....

Once you are through the startup procedures, you will be asked to confirm
today's date.  Cost Of Living compares past information to the last date 
information was added to any of the categories under Cost Of Living.






			Chapter 7   Main Menu.....

The MAIN MENU contains the various News of the Past program options. To use
each option, simply type the letter next to your choice. Example: type the
letter "Q" to Quit.






			Chapter 8   Print Reports.....

To print reports, type the letter "P" from the Main Menu.  The odometer in 
the upper right corner will keep an accurate count of all reports printed.
You will be asked "Are using pre-printed forms?". When you register this
program for $49.95, you will receive 100 FREE beautiful pre-printed forms
included free with your registration.  The program has a LASER PRINTER option
described later under SET PRINTER OPTIONS.
	




			Chapter 9  Display Reports.....

To display reports, go the the MAIN MENU and type the letter "D".
Steps to display a report.
	1. Enter a name and press the ENTER key.
	2. Type in the birthday in MM/DD/YY format.
	3. Choose one option,
	   (D) Display (R) Re-enter (Q) Quit











Continued











			Chapter 10   Utilities.....

From the MAIN MENU type the letter "U" for the UTILITIES MENU. The utilities
menu has the following options:
	1. Modify Message.
	2. Set Drives.
	3. Set Printer Options.
	4. Adjust Printout.
	5. Add Or Change Data.
	6. Set Color.


Let's take a look at each option.

MODIFY MESSAGE. Registered users will have access to this option for inserting
your own personalized message into the bottom 3 lines printed on each form.
A message can be quickly added to celebrate any occasion. This evaluation 
copy allows you to change the bottom three-line statement, but only for the
DISPLAY option.  You must be a registered user to print your own personal
message on the greeting forms. 

SET DRIVES. From the Utilities Menu, type the number 2. This option allows 
you to tell the program where each program disk is located. This is important
because if these settings are not correct, the program will crash.

SET PRINT OPTIONS. With this option you can:
	1. Set the print output to 10 or 12 characters per inch (default is 10).  
	2. Choose to print, or not to print, the birthstone and birthsign 
	   information.
	3. Change Laser printer options
	
ADJUST PRINTOUTS. When you register your program and you receive your 
pre-printed forms, you may need to use this option to align the printed
information on the form.

ADD OR CHANGE DATA. This feature allows you to edit the information stored
on the Data Disk.  The information was researched by the program authors,
and you are not permitted to alter, add, delete or change any of the 
information within this the evaluation shareware version of News of the Past.
Registered users are entitled to add, edit and or delete any of the 
information he or she chooses.

SET COLOR. From the Utility Menu type the number 6. This option lets you choose
the foreground and background colors for the monitor display. Colors may be 
changed at any time. 













Continued








			Chapter 11   Problem Solving.....

PROBLEM MESSAGE:
PROC TRIVIAD line 626, open error B: Birthdays.NDX (4) Retry? (Y/N)

Solution: If this or any other similar error message appears when you 
attempt to print or display a report the file named CONFIG.SYS needs to be
edited. The CONFIG.SYS file should contain two lines of information along with
other information important to your system. Those two lines are:
FILES=40
BUFFERS=40

If you have the file named Config.sys it should be located in the root directory
of your boot disk (system disk) hard or floppy depending on your system.
Not all systems need as many as 40 files and 40 buffers to run News of the Past.
 
To edit your CONFIG.SYS file. Please refer to your DOS instruction manual.


HELPFUL HINT:
Another thing that can cause the program to crash is TRS's. These are DOS shells
and other programs that load into memory when you boot your system.  If you have
trouble getting News of the Past to operate, try booting your system off a
floppy disk but make sure that this floppy has the file CONFIG.SYS with 40 Files
and 40 Buffers as discussed earlier.   					
 
PROBLEM MESSAGE:
"C: event.dbf not found" or "Proc Indexer line 3928, open error C: event.dbf(3)
or similar message.

Solution: Review the section SET DRIVE LOCATION under UTILITIES section
earlier in this manual for instructions. 







Thank you for sampling News of the Past. We look forward to your order. 

Send your order to:

  Spectrum Unlimited
  2261 Market Street Suite 276
  San Francisco CA 94114
  (415) 647-1070

Make your check payable to SPECTRUM UNLIMITED.
A complete order form and information is found in the program's MAIN MENU.      

```
{% endraw %}

## VERSION.TXT

{% raw %}
```
News of the Past - Shareware edition version 1.0
Version/Shareware
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3904

     Volume in drive A has no label
     Directory of A:\

    NEWS     EXE    115095   4-02-92   4:56p
    INSTALL  TXT      1264   4-27-92   5:28p
    README   DOC     12767   4-27-92   4:18p
    VERSION  TXT        70   4-22-92   5:19p
    FILES    TXT       543   4-27-92   5:19p
    CONFIG   SYS        23   8-30-90   2:46p
    BRTHDAYS DBF     51832   3-02-92  12:08p
    SYSFILE  DBF      2640   4-27-92   5:20p
    BRTHDAYS NDX      8192   3-02-92  12:08p
    NEWS     MEM       801   3-02-92  10:13a
    GO       BAT        40   8-11-93   2:46p
           11 file(s)     193267 bytes
                          122880 bytes free
