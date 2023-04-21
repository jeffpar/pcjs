---
layout: page
title: "PC-SIG Diskette Library (Disk #1542)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1542/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1542"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "LORAN LOCATOR"

    LORAN LOCATOR is an "electronic numbers book" for those mariners who
    accumulate LORAN numbers for their fishing and diving hot spots.
    Fifteen LORAN chains around the world are supported. Using the system
    requires prior knowledge of the Loran C navigational system, and the
    author suggests that a Loran manual be kept handy to enter GRI's. The
    package is configured to operate in any Loran chain in the United States
    and most chains worldwide, and is intended to be used ONLY as a guide.
    
    LORAN LOCATOR calculates heading and distance between any waypoint
    entered. Multiple data files, scratch pad function, waypoint register,
    and float plans are all supported.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1542.TXT

{% raw %}
```
Disk No: 1542                                                           
Disk Title: Loran Locator                                               
PC-SIG Version: S1.4                                                    
                                                                        
Program Title: The Loran Locator                                        
Author Version: 5.0                                                     
Author Registration: $49.95                                             
Special Requirements: 512K RAM.                                         
                                                                        
LORAN LOCATOR is a navigational aid for sail and engine-powered         
watercraft.  Using the system requires prior knowledge of the Loran C   
navigational system, and the author suggests that a Loran manual be kept
handy to enter GRI's.  The package is configured to operate in any Loran
chain in the United States and most chains worldwide, and is intended to
be used ONLY as a guide.                                                
                                                                        
LORAN LOCATOR allows use of more than one location file, offers a       
scratch pad for recording notes on any waypoint in a file, and          
subsidiary files to break up any location file that is becoming too     
large.                                                                  
                                                                        
Please note that this version of the program allows only 25 waypoints.  
The registered version provides for 500 waypoints per file.             
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## LORAN50.DOC

{% raw %}
```




The Loran Locator Ver 5.0







USER'S GUIDE

















Marine Software 
By 
Ron Stange

 



Fundamental Services 
 1546 Peaceful Lane N. 
 Clearwater, FL 34616-1705



PREFACE

DEDICATION

This program and this documentation is dedicated to my loving wife, 
Sandra, without whose love, understanding, patience, and assistance 
this program could not have been written.

DISCLAIMER

It is assumed that the user is familiar with the use of LORAN and 
its terminology. It is further assumed that the user is knowledgable 
in the use of his computer and its operating system.

WARNING - The output of this program is to be used 
as a guide ONLY. Your own common sense and proper navigational charts 
take precedence. Fundamental Services is not responsible for your 
actions on the water.

COPYRIGHT NOTICE

This manual is copyrighted and contains proprietory information. All 
rights are reserved. This document may not, in whole or part, be copied, 
photocopied, reproduced, translated, or reduced to any electronic 
medium or machine readable form without prior consent, in writing, 
from Fundamental Services.

REVISION HISTORY

1984 - Initial Version

1985 - R1.0 New math equations

1986 - R1.1 Added Latitude/Longitude.

1987 - R2.0 Added world-wide LORAN chains

1988 - R2.2 Various fixes incorporated.

1988 - R3.0 Added file conversions and sorting of WPs.

1990 - R5.0 New generation format, mouse support.




INTRODUCTION

The LORAN LOCATOR gives you an intelligent new way to manage your 
LORAN waypoint information. It combines sophisticated filing and reporting 
in one software package. Using The LORAN LOCATOR, you can ask for 
and retrieve stored facts and figures and create reports with just 
a few keystrokes.

The LORAN LOCATOR is designed to help you quickly and easily organize, 
store, recall, update, and print LORAN waypoint information in ways 
that are most meaningful to the task at hand.

The LORAN LOCATOR, extremely easy to use from the beginning, allows 
you to gradually implement its many powerful features as you need 
them. The program and this manual are both designed to help you get 
started quickly. The more you use The LORAN LOCATOR, the sooner you'll 
be able to take advantage of all its unique features.

THEORY OF OPERATION

The LORAN LOCATOR accepts information about any waypoint by prompted 
keyboard input and stores a record containing this information in 
a random disk file. This random disk file is your "electronic 
numbers book". The Loran Locator allows you to have multiple 
data files. This manual, and the program itself, will refer to these 
data files as books. Each waypoint entered into a book is referred 
to as a PAGE in that book.

All the pages in a book MUST refer to the same LORAN "triplet"! 
A LORAN triplet is defined as the chain and the pair of secondary 
stations used to obtain the LORAN "fix". If you are in the 
Southeast US and you are using 14241.3 and 44818.7 to locate the Clearwater 
Pass Bell then you are using the 7890WX triplet. You MUST create and 
use a separate book(or file) for each LORAN triplet you have waypoints.

The primary function of the program is to provide a relationship of 
any waypoint in the file with any or all other waypoints in the file. 
The output of this function is a single sheet of paper providing you 
with bearing and distance to all the other waypoints in the file. 
This output is sorted by distance with the closest being printed first. 
The print-out defaults to printing only the closest forty waypoints 
to keep the output on a single page. 

This is accomplished by retrieving the record of the selected waypoint 
and storing it in memory. The current book is then sequentially scanned, 
and the heading and distance to every other waypoint in the book is 
calculated. 

MULTIPLE DATA FILES

The program allows for the use of more than one data file. The LORAN 
Locator is shipped with one sample data book(file) which contains 
a small number of waypoints in the 7890WX triplet.

You will want to enter your waypoints into your own book. The chapter 
START-UP in this manual tells you how to do this.

If you require more than one waypoint book, you can create as many 
as your available disk space will allow.

You might wonder when you would ever want more than one file. One 
example is when you have a large number of waypoints to store. The 
amount of internal memory in your computer determines how many pages 
you can put into each data book. (More on that later.)

Another reason for separate books is when there will be no overwater 
relationship between the two groups of waypoints. For instance, if 
you had some numbers around the Tampa Bay area and also some numbers 
in the Florida Keys, you might want to keep them separate to speed 
processing (sorts and searches) since you would never go from one 
to another by boat.

Remember, you MUST use a separate book for each different LORAN triplet 
used.

DESIGN LIMITATIONS

1.  The number of pages in each book is limited by the amount of internal 
memory available to the program. With  512K of memory installed in 
your computer you will have room for well over a thousand entries 
per data file (Book).

2.  You can only use ONE LORAN triplet in each data file.

3.  Your hardware must be 100% compatible with an IBM personal computer 
with 512K of internal memory and must be running release 3.1 or higher 
of PC-DOS or MS-DOS.



INSTALLATION

DISK FILES

The files supplied with the program are described below:



 Original Edition 	 Advanced Edition 	        Description 

LX50.EXE	AX50.EXE	Main program module

LX50BOOK.SMP	LX50BOOK.SMP	Sample data book.

LX50CNFG.PMS	AX50CNFG.PMS	Permanent parameters.

If there is a file on the supplied program diskette named READ.ME, 
it would do well for you to do just that. The READ.ME file, if it 
exists, would contain last minute information about the program that 
was available too late to include in the manual.

COPYING THE SYSTEM DISKETTE

Take a new blank diskette, format it, and put the appropriate operating 
system for your hardware on it. You should know how to do that so 
I won't tell you here.

With the original LORAN LOCATOR diskette in the "A" drive 
and your TARGET diskette in the "B" drive and the "A" 
prompt displayed, enter the command:

COPY A:*.*  B:*.*

This will copy all files from the transmittal diskette to your system 
diskette.

Verify that all the files on the transmittal diskette were copied 
to your working diskette in drive "B":

Now put your original LORAN LOCATOR system diskette back in its envelope 
and store it in a safe place. Do not use the original system 
diskette as your working system. Use it only to make a "working" 
copy of the LORAN LOCATOR system. 

HARD DISK INSTALLATION

Create a new directory on your hard disk for The Loran Locator . 
Copy all the files on the transmittal diskette to this new directory 
on your hard disk.

START UP

All you have to do is enter the command LX50 , or AX50 
if you have the advanced edition, at the DOS prompt. The Loran Locator's 
opening screen will be displayed. If the opening screen does not appear, 
review the installation procedure and verify that all copy commands 
executed correctly.

Now read through this entire manual to get a feel for the operation 
of the program before you do anything else with the system.

USER INTERFACE

The user interface is the method with which you, the user of the program, 
and the program communicate with each other. The Loran Locator 
Version 5.0 and above support both keyboard and "mouse" input 
and utilizes pull-down menus, windows, and dialog boxes as much as 
possible.

The first screen you see has a row of information across the top, 
a fancy design for the rest of the screen, which we call the "desktop" 
with an open window proclaiming this to be The Loran Locator .

The top row has the menu names on the left and certain key program 
information on the right. 

Except when plotting, the displayed program information will be the 
active LORAN triplet, the active printer port, the current data drive, 
the current data book extension, and at various times the waypoint 
page currently the center of attention.



RUNNING THE PROGRAM

You can use either the keyboard or a mouse to operate the program.

Selecting a Menu

 Mouse: Position the mouse cursor on the desired menu name and 
press the left mouse button. This is called "CLICKING" the 
mouse.

 Keyboard: Press the > key. Then press the letter highlighted 
on the menu you want to see.

Selecting a Menu Item

 Mouse: Click the mouse on the desired menu item.

 Keyboard: Highlight the desired menu item using the direction 
keys as needed and then press >.

Windows

A window can contain up to three different types of fields. There 
are EDIT fields that allow you to enter keyboard data, there are OPTION 
buttons that let you choose an item from the number of them offered, 
and then there are COMMAND buttons that tell the program to do something.

You can select any field in a window either by clicking the mouse 
on it or positioning the keyboard cursor on it using the direction 
keys.

If the selected field is an EDIT field, use the keyboard to enter 
the desired information. The edit field will scroll if the data is 
longer than the area displayed. Pressing > will cause the cursor 
to jump to the next field. You can backspace, delete, or insert data 
into an edit field. If you try to enter too much data you will hear 
a beep.

If the selected field is an OPTION field, click on the desired option 
with the mouse or position the keyboard cursor to the desired option 
and press >.

Once all data and options are correct, click on the appropriate COMMAND 
button to begin the operation. You guessed it! With the keyboard highlight 
the desired COMMAND button using the direction keys and press >.

Alert Boxes

Alert boxes are similiar to windows but only have up to three COMMAND 
buttons. Alert boxes are used to:

Inform you of operator input errors.

Report operational status.

Provide contextual help information

Offer operational options.

INITIALIZATION

When you first start up The Loran Locator you are required to 
do the following:

Enter User Preferences

Pull down the CONFIG menu and select DEFAULTS .

Enter the desired data in each field. When complete, highlight the 
OK button and press > or click your mouse.

Select Printer Port

Pull down the CONFIG menu and select Ptr Port .

Highlight the parallel port identifier to which your printer is connected. 
When ready, highlight the OK button and press > or click your 
mouse.

Select Data Drive

Pull down the CONFIG menu and select Data Drive .

Highlight the drive identifier of the disk drive that is to contain 
your data books. New books will be created on this drive and the program 
will always go to this drive to read and write waypoint data.

Create a Data Book

Pull down the CONFIG menu and select Data File .

A Listbox of all the existing LX50BOOK files will be displayed. An 
extra entry MAKE NEW FILE appears at the bottom of the list. At this 
time the only data book listed should be LX50BOOK.SMP. 

If you have waypoint data in LOCATION.xxx files from 
previous versions of The Loran Locator , you MUST convert 
them to the new format used by Version 5.0 before using them. (See 
Convert on Util menu description.)

All data books have the filename LX50BOOK . You make multiple 
books by changing the three character extension of the filename.

If you were to select LX50BOOK.SMP and click on >, then LX50BOOK.SMP 
would be the book currently active and available to the program. Right 
now, though, we want to create the first book for you to use for your 
waypoints.

Select MAKE NEW FILE and click on >. A window appears asking you 
for the three character filename extension to be given to the data 
book you are creating. You may enter any three characters acceptable 
for filename extensions with the exceptions listed in the window. 
These are filenames that The Loran Locator reserves for its use.

Next, a second window opens and displays the list of the currently 
supported LORAN chains. Highlight the chain you intend to be used 
with the file being created and click on >.

Following the selection of the desired LORAN chain, another window 
appears with a list of the valid secondary pairs associated with that 
chain. Select the secondary pair you will use with this file from 
the list and click on >. You have now determined the LORAN triplet 
to be used for the data in this file.

The Loran Locator calculations all deal with TRUE compass 
values. You are now prompted to enter the value that is the difference 
in degrees to cause magnetic values to be displayed for all headings 
and bearings calculated by the program. This value can be found in 
the center of the compass rose on any NOAA chart. Use the compass 
rose closest to the area of the waypoints you will enter in this book. 
If your correction is West, enter a negative value. East corrections 
are positive. Enter zero if you wish true compass bearings to be displayed. 
Otherwise, enter the deviation required to correct for magnetic bearings 
for the area associated with the data book being created.

Now just click on > and the file will be created and will also 
be selected to be the currently open book. Just remember, you still 
haven't put any data in it. The Add a Waypoint function will do that.



The following LORAN C chains are supported by this program:



4990	Central Pacific

5930	Canadian East Coast

5990	Canadian West Coast

7930	Labrador Sea

7960	Gulf of Alaska

7970	Norwegian Sea

7980	Southeast United States

7990	Mediterranean Sea

8970	Great Lakes

9940	United States West Coast

9960	Northeast United States

9970	Northwest Pacific

9980	Icelandic Sea

9990	North Pacific



MENU FUNCTIONS

There are four menus associated with The Loran Locator . Those 
program functions not offered in the "Original" edition will 
not be displayed in the menus of the "Original" edition of 
the program. They will be included in the manual for reference and 
will be marked (Adv. Ed. Only).

RUN MENU

Edit a Waypoint

This function is used to alter the data on a waypoint page. You can 
change any field except the time delay and Lat/Lon  values. The thinking 
here is that if you change the location of a waypoint it becomes another 
place. Instead of changing the location of this waypoint, add a new 
one instead. If you don't wan't the old waypoint any longer, delete 
it!

Change the values in the edit fields as desired and then click on 
the > button. You also have the options of viewing other pages 
in the book, exiting the function, and getting a little help.

Add a Waypoint

This is the place to enter new waypoints into a book. Be sure that 
you have the proper book open to accept the new waypoints. Remember, 
they must use the LORAN triplet showing on the top row of the screen.

First, tell the program if you are entering LORAN TDs or Lat/Lon coordinates 
to determine the waypoint. Now enter the data associated with the 
new waypoint. You MUST enter the complete "fix" in either 
LORAN TDs or Lat/Lon values. Data for all the other fields is optional 
and may be edited in later.

Delete a Waypoint

Be very careful when deleting waypoints. You will be prompted to enter 
the page number of the waypoint you want to delete. Be sure that you 
have the correct book open and that you have specified to correct 
page number to delete. Once it's gone, it's GONE! Do NOT interrupt 
the delete process while it is active. You could lose the whole book 
if you do so. A reminder to keep backup files of all your data might 
be in order here.





Vicinity Info

This function allows you to print or display a waypoint detail page 
for any page in the current book. You will be prompted for the page 
number of the waypoint desired. At this prompt you may enter any valid 
page number.

After a bit of calculating, it will then print the waypoint detail 
page or display a list of the 16 closest waypoints to your reference 
waypoint, depending on the output device you had selected previously. 


Calculator

Selecting this function will allow you to calculate heading and distance 
from any set of LORAN TDIs to any other set of LORAN TDIs entered. 
If either position is a position in the LOCATION file you need only 
to enter the page number of that position. The program will get the 
LORAN TDIs from the file and plug them in for you. Otherwise you will 
have to enter the LORAN TDs in response to the prompt. In addition, 
the program will display a chart of time to destination for various 
speeds underway.

Float Plan

A float plan is like a flight plan except it relates to boats instead 
of airplanes. The float plan records selected waypoints for a day 
at sea. You can also add the names of passengers on board for the 
trip. If you want a chart of the selected waypoints printed you may 
indicate so at that prompt. You may also select waypoint detail pages 
to be printed for those waypoints in the float plan.

You might want to make two copies of the float plan so you can leave 
one on shore. It indicates a good place to start looking if you don't 
get back on time.

Waypoint Register

This function will show all the waypoints in the currently open book. 
You will be prompted to enter the sort sequence in which you would 
like the output to appear. You may select the waypoint name, time 
delay number 1, or LORAN unit memory position.

You will be prompted to enter the sort sequence in which you would 
like to see the output appear.

You are given the option of directing the output to the printer or 
to the screen. If you direct the output to the screen, fifteen waypoints 
at a time will be displayed.  You can browse through the file by using 
the direction keys. In this way:  the > to the previous record: 
the > to the next record; >moves down 10 records; 
 >moves up 10 records; > to the start of the file; and > 
, you guessed it, to the end of the file. 



Plot Waypoints(Adv. Ed. only)

This function allows you to have your waypoints plotted on a printer 
or on the display screen using a central reference point.

You have five different ways of determining the reference point for 
the plot:

 PAGE - Enter any page number of the open book, and it will be 
used as the central reference point.

 LORAN - Enter any LORAN C fix using the triplet of the currently 
open book.

 LAT/LON - Enter any Lat/Lon fix within the range of the current 
LORAN triplet.

 BOOK - This will plot ALL the pages in the current book using 
a calculated central reference point.

 MEMORY - This will plot all pages that have been associated 
with a position of memory in  your loran unit.

After the plot has completed you will be given the option of displaying 
a list of those waypoints plotted or changing the range of the scan 
for the plot. The BOOK and MEMORY options calculate the range and 
can not be changed.

Shell to DOS

This function allows you to temporarily EXIT The Loran Locator 
to run another program. You must have enough available memory or the 
other program will not run. Enter EXIT at the DOS prompt to return 
to The Loran Locator .

Exit to DOS

This is the normal exit of the program. It is recommended that you 
use this function when you are leaving The Loran Locator . This 
will assure that no data is lost and that all required parameters 
are saved and will be ready for your next session.



CONFIG MENU

Ptr Port

Select the printer port to be used by the program. If you don't know 
what port to use, or if you only have one parallel port, select LPT1:.

Color

Click on this menu item if you have a color screen.

Monochrome

Click on this menu item of you have a monochrome display.

Data Drive

Select the desired disk drive from the list presented in the list 
box. All data will be directed to (and looked for on) the drive selected 
here until you select another.

Data File

Select the desired data book to be opened for your use or create a 
new book.

A Listbox of all the existing LX50BOOK files will be displayed. An 
extra entry MAKE NEW FILE appears at the bottom of the list.

All data books have the filename LX50BOOK . 
make multiple books by changing the three character extension of the 
filename.

To select an existing data book highlight the desired filename and 
click on >. The desired book will be opened and the screen shows 
a clear desktop waiting for your input.

To make a new book, select MAKE NEW FILE and click on >. A window 
appears asking you for the three-character filename extension to be 
given to the data book you are creating. You may enter any three characters 
acceptable for filename extensions with the exceptions listed in the 
window. These are filenames that The Loran Locator reserves for 
its use.

The Loran Locator calculations all deal with TRUE compass 
values. You are now prompted to enter the value that is the difference 
in degrees to cause magnetic values to be displayed for all headings 
and bearings calculated by the program. This value can be found in 
the center of the compass rose on any NOAA chart. Use the compass 
rose closest to the area of the waypoints you will enter in this book. 
If your correction is West, enter a negative value. East corrections 
are positive.  Enter zero if you wish true compass bearings to be 
displayed otherwise enter the deviation required to correct for magnetic 
bearings for the area associated with the data book being created.

Next, a second window opens and displays the list of the currently 
supported LORAN chains. Highlight the chain you intend to be used 
with the file being created and click on >.

Following the selection of the desired LORAN chain, another window 
appears with a list of the valid secondary pairs associated with that 
chain. Select the secondary pair you will use with this file from 
the list and click on >.

Now, just click on > and the file will be created and will also 
be selected to be the currently open book. Just remember, you still 
haven't put any data in it. The Add a Waypoint function will do that.

User Info

Enter your user related information here as prompted.

Expert

This is a switch that toggles EXPERT mode on and off. When EXPERT 
mode is off, help screens will be displayed before each program function 
automatically. As soon as you become familiar with the program you 
can turn the EXPERT toggle on for smoother program operation. Clicking 
on this function will reverse the current state of EXPERT mode.



FILES MENU

The Files menu controls the program functions that deal with data 
file manipulation.

Convert

If you have Loran Locator data in LOCATION.xxx files from previous 
versions of The Loran Locator , you MUST convert them to 
the new format used by Version 5.0 before using them.

At the prompt, enter the filename and extension, if any, of the input 
file. You may also enter the drive and path to the input file if it 
isn't located in the current disk directory.

You will be further prompted to enter the LORAN TRIPLET and the magnetic 
compass compensation value just as if you were creating a new file. 
After all, this is a new file to the program.

Once the information is entered, conversion begins. When all is done, 
an alert box tells you conversion has completed. Your old data will 
now be located in a data book named LX50BOOK.NEW. It is up to you 
to rename it to something else before you run CONVERT again or it 
will be overwritten.

Merge (Adv. Ed. Only)

This function will merge into the currently open book all the pages 
of any other book you select. You will be prompted to enter the name 
of the book desired. Once it is verified that it is a Loran Locator 
book, it is sequentially read and the records are appended to the 
end of the currently open book.

Extract (Adv. Ed. Only)

This is the opposite of the merge function above. It will extract 
certain records from the currently open book and put them in a new 
book that will be named LX50BOOK.SUB. You can select the records to 
be extracted in three different ways.

1. AREA - You are prompted to enter a reference waypoint 
and a radius in nautical miles. The program will select all waypoints 
in the open book that fall into that range and put them into LX50BOOK.SUB.

2. PAGE - Using the EDIT function you must enter a single 
alphabetic character into Flag3. The Extract function will scan Flag3 
of each page in the open book for the character specified. Those having 
Flag3 matching the selected character will be extracted.

3. PLOT - Plot search is the same as page search except 
it extracts all pages that had been selected on the last plot of the 
current book. To invoke the PLOT extract, select the asterisk (*) 
as the character to be extracted.

Dup Search (Adv. Ed. Only)

This function scans the currently open book for duplicate, or near 
duplicate, waypoints. You are prompted to enter a value representing 
hundredths of a micro-second that will be the tolerance, or varience, 
of an exact duplicate. Any records matching within the tolerance specified 
will be considered duplicates. When a duplicate is found, both records 
are displayed on the screen for you to determine their fate. You are 
given five choices.

1. Keep both records.

2. Keep Record "A" only.

3. Keep Record "B" only.

4. Don't keep either one.

5. Select automatic mode.

Automatic mode will choose for you and it will always choose "KEEP 
RECORD A". Once in automatic mode dup searching will continue 
uninterrupted until it reaches end of file.

Export (Adv. Ed. Only)

This converts any LX50BOOK file to an ASCII text file named LXEXPORT.ASC. 
ASCII format files can be imported and exported from and to dBASE 
III+, Q&A, and other data base programs. See their respective user 
manuals for import and export instructions. 

EXPORT builds an intermediate text file in a more or less stardard 
format. All data is recorded in ASCII format. Each record is terminated 
by a carraige return/line feed sequence (0D0A). Each field in the 
record is enclosed in quotation marks and the fields are separated 
with a comma.

This ASCII output record contains THIRTEEN variable length fields 
as described below:

FIELD	NAME	 DESCRIPTION

1	ITD#1	Time delay #1. 
2	ITD#2	Time delay #2. 
3	LATITUDE(DD.MMSS)	Latitude in degrees, minutes, seconds. 
4	LONGITUDE(DD.MMSS)	Longitude in degrees, minutes, seconds. 
5	NAME	The name given to this spot (waypoint). 
6	LORAN TRIPLET	Loran master and secondaries. (i.e. 7890WY) 
7	FLAGS	Five position flag field. 
8	Loran Memory Position	The name given to this spot (waypoint). 
9	Detail Record Number	Pointer to the notes record in the notes file. 
10	Structure Type	Number code describing structure. 
11	COMMENTS	LX Comments. 
12	LATITUDE(DDMM.mmm)	Latitude in degrees, minutes, decimal minutes. 
13	LATITUDE(DDMM.mmmm)	Longitude in degrees, minutes, decimal minutes.

A typical record on disk would look like this: 
"14241.40","44818.70","27.5804","Clearwater Pass Bell","7890WY","A 
CD-","23","2", 
"Normal return from sea","82.5048","27.9678119","8250.80594" >



Import (Adv. Ed. Only)

This is the reverse of menu selection 1 above. It takes an ASCII file 
as input and adds these records to the currently open book.

You will be prompted to enter the name of the ASCII file to be imported. 
The data imported will be appended to the currently open book.

It is up to you to be sure that the imported records are compatible 
with the loran triplet of the book into which they are being imported.

The ASCII input file MUST be configured as follows

FIELD	NAME	 DESCRIPTION

1	ITD#1	Time delay #1. 
2	ITD#2	Time delay #2. 
3	NAME	The name given to this spot (waypoint). 
4	COMMENTS	LX Comments 30 characters maximum. 
5	Loran Memory Position	The name given to this spot (waypoint).

A typical record on disk would look like this: 
"14241.40","44818.70","Clearwater Pass Bell","Normal 
Return from sea.","23" >





HELP MENU

The help menu controls a list of help screens that deal with general 
information about the program. Other help screens are available within 
each function dealing specifically with that particular function.



APPENDIX A

FLAG FIELD DEFINITION

As used in this program, the concept of flagging is just a way to 
mark a record you might want to go back to later. It's the same as 
putting paper clips on certain pages of a catalog for quick recall. 
You could extend the meaning of the paper clip on the page if you 
used a red one for fishing rods and a green one for shoes and so forth. 
It's not the paper clip that's important but what it represents.

For instance, the letter "H" in the second flag field means 
that this page is a pass or inlet and is to print ALL waypoints, instead 
of only 40, in order of distance when printing a waypoint detail page.

The FLAGS field in the waypoint record is five characters long. The 
first four characters are reserved for the program. The last character 
can be user defined.

Flag1: (Flag Field Position One)

A=Primary location. 

B=Secondary location. 

C=Unverified location. 

T=Tourist attraction. Good dive spot.

Flag2: (Flag Field Position Two)

H=Home port of call. This identifies the pass or inlet you 
use to return to home port. The waypoint detail page for this record 
will contain all associated related points and not be limited to forty. 


Flag3: (Flag Field Position Three)

Used by PAGE EXTRACT in the advanced edition only. If the character 
in this flag agrees with the character chosen in the PAGE EXTRACT 
function, then the page will be extracted from the current book and 
inserted into book LX50BOOK.NEW. You may enter any alpha-numeric character 
to mark a waypoint to be extracted. 

Flag4:(Flag Field Position Four)

Used by both PLOT and EXTRACT in the advanced edition only. Each time 
a plot is run Flag4 will be set to a "*" or a "-". 
If the waypoint of that flag is plotted it will contain a "*"; 
if not, it will contain a "-".

Flag5:

USER DEFINED - You may enter and use any characters you so desire 
to mark waypoints with a special meaning. The program does not use 
this flag at all.



TYPE CODES

1 = Depression

This is a "hole" or gouge in the bottom that really doesn't 
qualify as a bona fide ledge.



2 = Dropoff/Ledge

This is what we all look for. A sharp dropoff in the bottom. Look 
around here. Some ledges go a long way.



3 = Mound/Rocks

Either a large rock, a pile of rocks, or a rocky bottom.



4 = Undercut/Cave

Just what it says. Real good for the divers but it's hard for us fishermen 
to drop a line inside of a cave.



5 = Pass/Inlet

This is where you usually can get out into the ocean from where you 
keep your boat.



6 = Landmark

A coastal landmark can be most anything. I mark fishing piers, jetties, 
etc. with this code.



7 = Manmade Obstruction/Reef

Use this for all those fish havens and junk piles the government puts 
out in saltwater.



8 = Navigation Aid

Usually a fairway marker or the like.



9 = Wreck

This is used to indicate a sunken vessel of one kind or another


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1542

     Volume in drive A has no label
     Directory of A:\

    GO       BAT        38  10-19-87   3:56p
    LORAN50  DOC     32134   4-16-90   8:41a
    LX50BOOK SMP      1536   3-24-90   1:13p
    LX50CNFG PMS       175   4-23-90   7:39p
    LX5S     EXE    229102   4-24-90   8:59a
    ORDER    FRM      1809   4-16-90   8:18a
    READ     ME       1822   4-16-90   8:44a
    GO       TXT       617   5-08-90  12:35a
    FILE1542 TXT      2147   5-08-90   1:59p
            9 file(s)     269380 bytes
                           48128 bytes free
