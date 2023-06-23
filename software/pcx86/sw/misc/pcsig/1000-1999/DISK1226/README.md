---
layout: page
title: "PC-SIG Diskette Library (Disk #1226)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1226/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1226"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "DISK_TAG & FONEBOOK"

    DISK_TAG allows you to print custom disk labels, directory listings,
    and even disk sleeves for your diskettes.
    
    DISK_TAG is a disk label program with the added feature of being able
    to create sleeves for your disks. When you have those couple of disks
    that just don't seem to have any sleeves for them, it's nice to be able
    to make your own.
    
    The program also makes sleeves for 3.5" disks. It's not necessary to
    have sleeves for the smaller disks but it also leaves you without a
    place for your directory listings. The sleeve the program prints for
    these disks has been tested in several disk holders and fits fine.
    
    Sleeves or labels printed by DISK_TAG can include a complete listing of
    all the subdirectories on a disk, or only the root directory, in
    alphabetical or actual order, at your option.  DISK_TAG will also print
    the contents of .ARC or .ZIP files, if necessary. A line for comments
    is provided as well, printed in condensed print to allow for longer
    comments.
    
    FONEBOOK lets you use your computer as your personal telephone
    directory and will even dial the numbers for you.
    
    If you're like most people, you probably have names, addresses, and
    phone numbers scribbled on little bits and pieces of paper all over the
    place.  FONEBOOK helps you organize all those bits and pieces into a
    single database of names, addresses, and phone numbers.
    
    With FONEBOOK you can:
    
    ~ Create and add names, addresses, and phone numbers
    
    ~ Send your database to an ASCII file for easy editing
    
    ~ Browse through the database
    
    ~ Search on any field in the database
    
    ~ Quickly find and dial (with modem) any phone number
    
    ~ Print the entire database or only selected records or fields
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## DISK_TAG.DOC

{% raw %}
```






















                           *.* Wildcard Software *.*

                                   Presents

                                   DISK_TAG

                                  Version 2.3

                            Written by Ron Blessing

              Copyright (C) 1988, 1989 Ron Blessing, Elkhart, IN
                              All rights reserved



                                                                       page 1
ADDITION IN VERSION 2.3
=======================

  1) The changes I made in this version came only a couple of days after I
     released version 2.0.  After running a number of disks thru the program, I
     decided to add the auto number feature.

  2) The program will now print the contents of files compressed using PKware's
     new "ZIP" file format, thanks to their "APPNOTE.TXT" file that they
     provide with their programs.

  3) Changed the time format from military time to am pm format, like that
     used by DOS.


ADDITIONS & IMPROVEMENTS IN VERSION 2.0
=======================================

  1) The major improvement in this version is that the program will now list
     the names, dates, times and size of files inside an archived file.

  2) The disk envelopes are now printed out in condensed print to allow an
     increase in the length of the "Comment" field.

  3) Changed the size and positioning of several fields to make things look
     nicer and easier to read.




INTRODUCTION                                                            page 2
============

  Disk_Tag is another disk label program.  However, I've added the ability to
create your own sleeves for the disks.  Oh, I know, they aren't as good as
those "SUPER TOUGH" sleeves you can buy but when you have those couple of disks
that just don't seem to have any sleeves for them, because they got stuck in a
book somewhere or slid under something, it's nice to be able to make your own.
Another nice thing about the sleeves, that the program creates, is that they
have the volume, disk number and a comment on a tab that sticks up above the
disk. This makes it much easier to find files when you need them.
  I've also added support for 3 1/2" disks. It's nice not having sleeves to
mess with for the smaller disks in some ways but it also leaves you without a
place to stick your directory listings. The sleeve the program prints out for
these disks has been tested in several disk holders and fits fine. Several
people I have shown them to have loved them.
  The program is really easy to use and shouldn't require much explanation.
I hope you find Disk_Tag useful and encourage you to register it for $10.00,
if you do.  You'll find a pre-printed form at the end of this documentation for
easy registration.

DTCONFIG.EXE
============

  This program will allow you to customize Disk_Tag.  If you have a color
system you can select the foreground and background colors that the program
uses and if you wish to use BIOS calls for screen writes, to prevent "snow" on
a CGA monitor, you can select this option too.  The last two selections "Normal
Text" and "Condensed Text" are the printer codes needed to put your printer in
10-Pitch Font mode (Normal) and 17-Pitch Font mode (Condensed).  See your
printer manual for the codes needed and then just enter the key strokes
needed.  For instance, the code for 17-Pitch on my NEC is [Escape] [Q].  To
enter this, just type the "Esc" key and the "Q" key.  Another way to enter
these codes is to hold down the "Alt" key, type the decimal code for any
particular character and then release the "Alt" key.  You will see the IBM
ASCII graphical representation of any special keys typed.  The program is
pretty self-explanatory.  Some of the selections can be toggled by pressing the
space bar and some need to be typed in.  The color selections will clear the
screen and redraw it in the new colors as they are toggled, so you can see what
you're selecting.  When you are happy with the selections, press "F1" and a
file named "DISK_TAG.CFG" will be created containing all the configuration
information.  This file needs to be kept in the same directory as the Disk_Tag
main program so that the program can find it when it starts up each time.  If
this file can't be found during start-up, the program will default to NOT CGA,
gray letters, black background, and the printer codes used by Epson printers.


MAIN MENU                                                               page 3
=========

  After starting the program the first thing you will see is my commercial
also known as the "send me some money" screen. Just press any key and you'll
be presented with the main menu. The main menu has 10 parameters or selections
that you can change. These selections are:

Selection               Function
===============================================================================

Drive       - The drive you will use to read disks in. Can be toggled between A:
              and B: with the space bar. Make sure the disk is loaded before
              starting the print process.

Disk Size   - The size of the disk you are printing labels/sleeves for. Can be
              toggled between 3 1/2" and 5 1/4" with the space bar.

Disk Number - The program prints a disk number field on sleeves and labels. If
              you enter a number here, it will be printed out in the number
              field.

Auto Numbering - If set to YES, the number entered into the "Disk Number"
                 field will be incremented by 1 each time the program is told
                 to print (F1 is pressed). If set to NO, you must manually
                 change the "Disk Number". Can be toggled with the space bar.

Print Sleeve - This will cause the program to print a sleeve for the disk if it
               is set to YES or none will be printed if set to NO. Can be
               toggled with the space bar.

Print Label  - This will cause the program to print a label for the disk if it
               is set to YES or none will be printed if set to NO. Can be
               toggled with the space bar.

Alphabetical - If set to YES, all files will be printed in alphabetical order.
               If set to NO, files will be printed in the order they appear
               in the directory. Can be toggled with the space bar.

Subdirectories - If set to YES, the program will print out the contents of
                 subdirectories.  If set to NO, the program will only print the
                 contents of the root directory.  Can be toggled with the space
                 bar.

Compressed File Contents - If set to YES, the program will print out the
                           contents of archived and ZIP files.  If set to NO,
                           the program will only print the ZIP or archived file
                           name but not its contents.  Can be toggled with the
                           space bar.

Comment Line - Anything typed on this line will be printed on the sleeve as
               well as the labels. Its length varies with the disk size
               being used.




SPECIAL KEYS                                                            page 4
============


Key                     Function
===============================================================================

Up/Down
Arrows
  or
Enter key - You can move between records by using these keys.

Delete    - This key will delete the character immediately under the cursor and
            pull any characters to the right back one space left.

Backspace - This key will delete the character immediately to the left of the
            cursor and pull any characters to the right of the deleted
            character left one space.

F1        - Once all your parameters have been set to your liking, press this
            key to start printing the sleeve and/or label. You will see a
            flashing "PRINTING" message in the upper right corner, which will
            disappear when the printing is finished.

ESC       - This key will abort the program and return you to DOS.



TIPS                                                                    page 5
====

  -- Don't turn the "Auto Numbering" ON if you are using letters in your disk
     number because the program won't increment it right. However, you can
     use leading zeros in the number.

  -- The first fold for the labels, if it's long enough, should be down, then
     up, then down, etc.

  -- If you are printing a lot of 3 1/2" labels, try printing half of them and
     then flip the paper over and print the rest on the back of the other side.

  -- All folds for the sleeves should be in the up direction and you should
     be able to assemble it with only two pieces of tape.

  -- When you assemble the sleeves, it is easier to tape them if you stick a
     disk inside them.


USER SUPPORTED SOFTWARE
=======================

  This program is copyrighted material written for private use.  It was not
intended specifically for commercial use.  You may freely distribute this
software as long as:

  1) No fee is charged for such distribution, other than the cost of
     duplication and mailing.
  2) The entire package is distributed as a whole without modification of any
     kind.

  No claims are made as to the program's suitability for any specific purpose.
The author disavows responsibility for any damages resulting from the use of
this program.

   If, after a reasonable evaluation period, you find this program useful please
send a check or money order for $10.00 to the address below.  If you don't wish
to use the program, please pass it on to someone who may want to use it.




COMMERCIAL                                                              page 6
==========

   If you like DISK_TAG, you might also like our program FONEBOOK.  FONEBOOK
turns your computer into a personal telephone directory that even dials for
you!
   If you're like most people, you probably have names, addresses and phone
numbers scribbled on little bits and pieces of paper all over the place.
FONEBOOK is a tool to help you organize all those bits and pieces into a single
database of names, addresses, phone numbers and comments.
   With FONEBOOK you can add and change names, addresses and phone numbers;
browse or search through the database on any field; and quickly find and
dial (with modem) any phone number.
   You can also print out everything or only selected records, showing just
phone numbers, just addresses or all fields to a printer or to disk as an
ASCII file.



==============================================================================
[                           REGISTRATION FORM                                ]
[                         DISK_TAG Version 2.3                               ]
[                                                                            ]
[   Date: ____/____/____                        TO: Wildcard Software        ]
[                                                   28480 C.R. 4 West        ]
[                                                   Elkhart, IN   46514      ]
[                                                                            ]
[  FROM:                                                                     ]
[        Name: __________________________________________________            ]
[                                                                            ]
[     Address: __________________________________________________            ]
[                                                                            ]
[        City: __________________________ State: ___ Zip: _______            ]
[                                                                            ]
[     Area Code (______) Phone: _________________________________            ]
[                                                                            ]
[   Comments:  __________________________________________________            ]
[                                                                            ]
[              __________________________________________________            ]
[                                                                            ]
[              __________________________________________________            ]
[                                                                            ]
[                                                                            ]
[      ___ Enclosed is $10.00 for a single registration of DISK_TAG.         ]
[                                                                            ]
[      ___ Enclosed is $15.00 please mail me a registered copy of DISK_TAG.  ]
[                                                                            ]
[      ___ Enclosed is $15.00 please mail me a registered copy of FONEBOOK.  ]
[                                                                            ]
[                                                                            ]
==============================================================================





```
{% endraw %}

## FILE1226.TXT

{% raw %}
```
Disk No: 1226
Program Title: DISK_TAG version 2.X and FONEBOOK version 3.X
PC-SIG Version: 1.1

DISK_TAG allows you to print custom disk labels, directory listings and
even disk sleeves for your diskettes; FONEBOOK let's you use your
computer as your personal telephone directory and even dials for you.

DISK_TAG is another disk label program.  However, it has the added
feature of being able to create sleeves for the disks.  Now, they aren't
as good as those "SUPER TOUGH" sleeves you can buy but when you have
those couple of disks that just don't seem to have any sleeves for them,
because they got stuck in a book somewhere or slid under something, it's
nice to be able to make your own.

The program also makes sleeves for 3 1/2" disks.  It's nice not having
sleeves to mess with for the smaller disks in some ways but it also
leaves you without a place to stick your directory listings.  The sleeve
the program prints out for these disks has been tested in several disk
holders and fits fine.

Sleeves or labels printed by DISK_TAG can include a complete listing of
all the subdirectories on a disk or only the root directory, in
alphabetical or actual order at your option.  A line for comments is
provided as well.

Now, about FONEBOOK....if you're like most people, you probably have
names, addresses and phone numbers scribbled on little bits and pieces
of paper all over the place.  FONEBOOK is a tool to help you organize
all those bits and pieces into a single database of names, addresses and
phone numbers.

With FONEBOOK you can:

1) Easily create and add names, addresses and phone numbers to your
database.

2) Browse thru the database.

3) Search thru the database, on any field.

4) Quickly find and dial (with modem) any phone number.

5) Print out the entire database or only selected records showing just
the phone numbers, just the addresses, or all fields.

FONEBOOK comes with a configuration program that will set up the program
for your moniter type, your modem, and your favorite screen colors.

Usage:  Disk Labeling/Addresses/Phone Dialing.

Special Requirements:  A modem for making phone calls with FONEBOOK.

How to Start:  Type GO (press enter).

Suggested Registration:  $10.00 for DISK_TAG and $10.00 for FONEBOOK.

File Descriptions:

-------- ---  DISK_TAG
DISK_TAG DOC  Instruction manual for DISK_TAG.
DISK_TAG EXE  Main program.
DTCONFIG EXE  Configuration for DISK_TAG.
-------- ---  FONEBOOK
BOOK1    FON  Data file.
FBCONFIG EXE  Configuration program.
FBCONVER EXE  Utility for older versions.
FONEBOOK DOC  Documentation.
FONEBOOK EXE  Main program.

PC-SIG
1030D E Duane Avenue
Sunnyvale CA 94086
(408) 730-9291
(c) Copyright 1989 PC-SIG, Inc.

```
{% endraw %}

## FONEBOOK.DOC

{% raw %}
```



















                           *.* Wildcard Software *.*

                                   Presents

                                   FONEBOOK

                                  Version 3.0

                            Written by Ron Blessing

              Copyright (C) 1988, 1989 Ron Blessing, Elkhart, IN
                              All rights reserved






INTRODUCTION                                                            page 1
============

  Fonebook arose out of both an idea, given to me by my wonderful wife and
friend, and the frustration of having recently acquired my BS in CS and not
being able to find a job.

  If you're like most people I know, you probably have names and addresses
scribbled on little bits and pieces of paper all over the place.  Fonebook is a
tool to help you organize all those bits and pieces into a single database of
names, addresses and phone numbers.

  With Fonebook you can:

              1) Easily create and add names, addresses and phone numbers
                 to your database.

              2) Browse thru the database.

              3) Search thru the database, on any field.

              4) Quickly find and dial (with modem) any phone number.

              5) Print out the entire database or only selected records
                 in one of 3 possible formats, to a printer or to a disk
                 file.

  I hope you find Fonebook useful and encourage you to register it for $10.00,
if you do.  You'll find a pre-printed form at the end of this documentation for
easy registration.


FBCONVER.EXE                                                            page 2
============

  If you have been using version 1.0 of Fonebook, you will need to run this
program first. It will convert the records in your files to the new format.
There are two ways you can run this program. Either you can type its name
followed by a space and the name of the file to be converted. In which case,
you will be asked if you want phone numbers put in the home or business field.
For example:

A> FBCONVER BOOK1.FON

  Or you can just type "FBCONVER" and press return. In which case, you will
be prompted for both a filename and asked which field to put the phone numbers
in (home or business).

  I suggest you make a back-up of your files, just in case, before you
convert them to the new format.


FBCONFIG.EXE
============

  This program will allow you to customize Fonebook.  If you have a modem, you
can set the serial port that the modem is attached to and the commands that are
sent to the modem.  The "Dial Prefix" should be those characters that command
your modem to dial, usually "ATDT" for touch tone or "ATDP" for pulse dial.
The "Dial suffix" should be the characters that reset your modem, usually "Z".
The proper entries in the prefix and suffix fields will allow you to use the
autodial feature of the program.  If you have a color system, you can select
the foreground and background colors that the program uses and if you wish to
use BIOS calls for screen writes, to prevent "snow" on a CGA monitor, you can
select this option too.  The program is pretty self-explanatory.  Some of the
selections can be toggled by pressing the space bar and some need to be typed
in.  The color selections will clear the screen and redraw it in the new colors
as they are toggled, so you can see what you're selecting.  When you are happy
with the selections, press "F1" and a file named "FONEBOOK.CFG" will be created
containing all the configuration information.  This file needs to be kept in
the same directory as the Fonebook main program so that the program can find it
when it starts up each time.  If this file can't be found during start-up, the
program will default to NOT CGA, Com port 1, gray letters, black background
and "AT" type modem commands.


START-UP                                                                page 3
========

  There are two ways in which you can initially start running Fonebook. First,
you can simply type:

A> FONEBOOK <ENTER>

  In this case, the program tries to load your database from a file called
"BOOK1.FON".  If this file isn't present in the current directory or if this is
the first time you have run the program, the program will inform you that it
can't find the file and ask if you wish to create it.  By responding "y" to
this question, a new database will be created and you will be presented with
Fonebook's main menu.  Any other response will abort the program and return you
to DOS.

  The second way to start Fonebook is to again type the program name but to
follow it with the name of the database you wish to load.

A> FONEBOOK "filename" <ENTER>

  This time the program will try to load your database from the drive
(optional), directory (optional) and file specified in "filename".  As
mentioned above, if the file can't be found, the program will ask you if you
wish to create it.


MAIN MENU
=========

  Selections are made from the main menu by highlighting the letter of the
selection you want and then pressing the <ENTER> key.  You can change
selections by either using the up/down arrow keys or typing the letter of the
selection, followed by the <ENTER> key.
  The main menu also displays the name of the database file that is currently
loaded, the last time that file was updated and the total number of records in
that file.



ADD MODE                                                                page 4
========

  This selection allows you to add new names to your database.  It will call up
a display of a blank form and positions the cursor at the first field of that
form.  You will also notice that the top line of the display is used to remind
you what mode you are in and any assigned functions of function keys.  The name
of the database (filename) that you are working with is also displayed at the
top center of the screen.  The bottom line of the display is used to list
functions of any other special keys.  The current number of records in the
database is displayed at the bottom center of the screen.  You can now
start entering information into the record.  Each time you press the <ENTER>
key, the cursor will advance to the next field.  You also have some limited
editing functions by using the <Delete>, <Backspace> and arrow keys.
  Something to keep in mind is that if you are using the autodialer, be sure to
limit the characters in the phone number fields to numbers and characters that
your modem can handle.  My own modem will allow me to use the characters "-",
"/", and ",".  Any improper characters may cause problems with the modem.

The following is a list of keys and their functions:

Key                     Function
===============================================================================

F1        - Saves any new records added, including the current one, and returns
            you to the main menu.

F2        - Saves any new records added, including the current one, and
            presents you with a blank form. This allows you to continue adding
            records.

F3        - Saves the current record to the list in memory and presents you
            with a blank form. The new record doesn't get saved to disk until
            you exit the add function or press F1 or F2. This will allow you
            to enter several names quickly without having to wait after each
            entry for a disk save. BE SURE TO SAVE THE LIST EVERY SO OFTEN! If
            you don't and power goes out, get ready to retype everything.

F4        - If you have entered a record already and need to create a second
            with many of the same entries, in several of the fields, you can
            press this key and it will duplicate the last record. Then you
            can go to the fields that need changes and enter those changes.
            This key should make similar entries alot faster to do.

Up/Down
Arrows    - You can move between fields by using these keys. The <ENTER> key
            will also move you thru the fields.

Left/Right
Arrows    - Allows you to move back and forth between entered characters of a
            single field.

Delete    - This key will delete the character immediately under the cursor and
            pull any characters to the right back one space left.

Backspace - This key will delete the character immediately to the left of the
            cursor and pull any characters to the right of the deleted
            character left one space.

ESC       - This key will abort editing of the current record, save records
            added with F4 and return you to the main menu. The currently
            displayed record WILL NOT BE SAVED.


BROWSE MODE                                                             page 5
===========

  This selection allows you to browse thru the names you have entered in your
database.  It displays the data for each record using the same format used to
enter the data.

The following is a list of keys and their functions:

Key                     Function
===============================================================================

F1        - Puts you in an edit mode, similar to Add mode, and allows you to
            make changes to the currently displayed record.

F7        - This key will activate the autodial feature. The program will prompt
            you, on the bottom line of the display, to select the home number
            or business number (H or B) and then dial whichever you choose, if
            it exists. Once the dialing has started, you can pick-up the phone
            and once it has stopped, press any key to return connection to the
            phone. This feature has been tested on a Prometheus, CTS 2424ADH
            and a Hayes 2400 and works perfectly. You must make sure you have
            set up the command to dial ("ATDT" or "ATDP"  for most modems) in
            the "Dial Prefix" field with the program FBCONFIG.

F10       - This key will delete the currently displayed record from the
            database. You are then returned to browse and the previous record
            is displayed.

Space Bar - The space bar will select the currently displayed record for
            possible printing from the print menu. The upper right corner of
            the display indicates the status of the print flag for each record.
            This status can be toggled ON and OFF with the space bar.

Up/Down
Arrows    - You can move between records by using these keys. The system will
            beep if the up arrow is pressed at the top of the list or if the
            down arrow is pressed at the bottom of the list.

Page
Up/Down   - Page Down will advance the displayed record to the first occurrence
            of a record whose last name starts with the next available letter.
            In other words, if the first letter of the last name of the record
            you are viewing is "A" and you press <Page Down>, if there are any
            last names starting with "B", the next displayed record will be the
            first of the "B"s or the first of whatever letter occurs next. The
            Page Up key works the same way but in reverse alphabetical order.
            This will allow you to page thru your database by first letters of
            the last name.

Home      - This key will advance the display to the first record of the
            database.

End       - This key will advance the display to the last record of the
            database.

ESC       - This key will return you to the main menu and save the file to
            disk if any editing changes have been made or any records have
            been deleted.



BROWSE - EDIT                                                           page 6
=============

  This selection is accessed by typing the <F1> key from Browse mode.  It
allows you to make changes to the currently displayed record.  The editing
features are almost identical to those of the Add mode.

The following is a list of keys and their functions:

Key                     Function
===============================================================================

F1        - Saves any changes to the current record (to memory) and returns you
            to the Browse mode display.


Up/Down
Arrows    - You can move between fields by using these keys. The <ENTER> key
            will also move you thru the fields.

Left/Right
Arrows    - Allows you to move back and forth between entered characters of a
            single field.

Delete    - This key will delete the character immediately under the cursor and
            pull any characters to the right back one space left.

Backspace - This key will delete the character immediately to the left of the
            cursor and pull any characters to the right of the deleted
            character left one space.

ESC       - This key will abort editing of the current record and return you
            to the Browse mode display. ANY CHANGES WILL NOT BE SAVED.




LOAD FILE MODE                                                          page 7
==============

  The load selection offers you two options, load a new file or merge another
file.  The load a new file option will clear what is currently in memory and
load a new file.  It will prompt you for a file name, try to open the file and
give you the option of creating a file by that name if none already exists.

The file name can consist of:

  [Drive identifier] [Path] "File name"

  The drive identifier and path are optional. The total specification can't
exceed 50 characters in length.

  The merge option will combine a second file with the current file.  First,
you'll be prompted for a file name, this name will follow the same format as
above for the load new file option.  Next, you'll be asked if you wish to
combine duplicate names.  If you reply "no" to this, any names already in the
current list will be rejected in the new list, i.e.  if a John Smith already
exists in the file and a second John Smith is in the merge file, it will be
ignored.  If, on the other hand, you answer "yes" to merge duplicate names,
even though a name may already exist in the current file, if another record of
the same name is found in the merge file, it will still be added to the current
file.  However, the program will not combine "identical" records.  If two
records are found and all fields are exactly the same, the program will not
combine the second copy.  This should make it fairly easy to update a list that
is given to several people who are separately adding to the list.  You will
also be given the option of listing any duplicate names to the screen or to the
printer so that you can go through the list and check to see if they are
actually different records for the same person.




PRINT MODE                                                              page 8
==========

  This selection presents you with 4 possible selections.  The first 3
selections will allow you to either print names and phone numbers only,
addresses or all information contained in each record.  By the way, selection
#2 will only print records that contain enough information for an address
label.  The fourth selection will go thru the database and reset all print
flags to OFF.

--If you select #1 (Print phone numbers), the program will display a menu with
  the following options:

Print:                  - If you choose Selected, only those records which
                          were selected using the space bar from the Browse
                          mode will be printed. You can change this selection
                          with the space bar.

Double Column:          - If selected, it prints the names in two columns on
                          each sheet. You can change this selection with the
                          space bar.

Company Names:          - If selected, it will print the company name under the
                          person's name. You can change this selection with the
                          space bar.

Work Numbers:           - If selected, the phone numbers listed in the business
                          phone fields will be printed. You can change this
                          selection with the space bar.

Home Numbers:           - If selected, the phone numbers listed in the home
                          phone fields will be printed. You can change this
                          selection with the space bar.

Header for printout:    - Anything entered here will get printed at the top of
                          each sheet.

Lines per page:         - The number of lines that can be printed on each page.
                          (defaults to 58)

Characters per line:    - The number of characters wide that the printer is
                          set to handle. This will allow you to set your
                          printer to condensed mode or print the phone number
                          list out to a wide carriage printer and not have
                          any information truncated because of lack of space.

Number of copies:       - Set the number of copies you want printed out.

Print to:               - This option can be toggled between "Printer" and
                          "Disk". If set to "Disk", the program will prompt
                          you, on the bottom line, for a file name. (this can
                          include a path also). The program will then print
                          the output to an ASCII file, which can be edited
                          anyway you would like with an editor.



PRINT MODE (Continued)                                                  page 9
==========

--If you select #2 (Print addresses), the program will display a menu with
  the following options:

Print:                  - If you choose Selected, only those records which
                          were selected using the space bar from the Browse
                          mode will be printed. You can change this selection
                          with the space bar.

Labels:                 - If you are printing continuous labels, select "YES"
                          for this option. This will turn off the formfeeds at
                          the end of each page. You will also notice it sets
                          the lines per page to 0. You can change this selection
                          with the space bar.

F9-Align Labels         - When the "Labels" option is set to YES, this option
                          will appear on the top line. It is meant to help you
                          align your labels in the printer properly. When F9 is
                          pressed, a message asking you to set the printer up
                          properly will appear. Set the first label where you
                          think the first line should be printed and press a
                          key. The program will print out a block the size of
                          the largest possible label and then advance to the
                          first line of the next label. The printed block
                          should be centered top to bottom on the label. If
                          not, you need to adjust the starting position of the
                          label. If the block is centered but the print head
                          doesn't stop at the same starting position on the
                          next label, you need to adjust the "Skip lines"
                          value. Once things look good, start the actual
                          printing with the F8 key.


Header for printout:    - Anything entered here will get printed at the top of
                          each sheet. This option will disappear if the print
                          labels option is selected.

Lines per page:         - The number of lines that can be printed on each page.
                          (defaults to 58)

Skip lines:             - The number of lines to skip between each address
                          printed. (defaults to 3)

Number of copies:       - Set the number of copies you want printed out.

Print to:               - This option can be toggled between "Printer" and
                          "Disk". If set to "Disk", the program will prompt
                          you, on the bottom line, for a file name. (this can
                          include a path also). The program will then print
                          the output to an ASCII file, which can be edited
                          anyway you would like with an editor.



PRINT MODE (Continued)                                                  page 10
==========


Note: The skip lines setting for the print addresses selection is the minimum
      number of lines that will be skipped between addresses. The number of
      lines printed per address varies from 3 to 5 lines and since the program
      tries to maintain a constant spacing from top of one label to top of the
      next label, the spacing between the bottom of one label and the top of
      the next may differ.


--If you select #3 (Print all fields), the program will display a menu with
  the following options:

Print:                  - If you choose Selected, only those records which
                          were selected using the space bar from the Browse
                          mode will be printed. You can change this selection
                          with the space bar.

Header for printout:    - Anything entered here will get printed at the top of
                          each sheet.

Lines per page:         - The number of lines that can be printed on each page.
                          (defaults to 58)

Skip lines:             - The number of lines to skip between each record
                          printed. (defaults to 3)

Number of copies:       - Set the number of copies you want printed out.

Print to:               - This option can be toggled between "Printer" and
                          "Disk". If set to "Disk", the program will prompt
                          you, on the bottom line, for a file name. (this can
                          include a path also). The program will then print
                          the output to an ASCII file, which can be edited
                          anyway you would like with an editor.


--If you select #4 (Clear all print flags), the program will examine each
  record and set all the print flags to "OFF". It will display a count of each
  record as it goes thru the list.


**Remember you can always use the "Print Screen" button to print an
  individual record.


  The up and down arrows or "Enter" key will let you move between fields in the
print menus and function key F8 will actually start the printing when you have
all options set to your liking. When F8 is pressed in the print addresses menu
and the print labels option is selected, the program will prompt you to make
sure that the printer is positioned correctly on the first label and you must
press another key to start the printing.  Press the "ESC" key to exit any of
the print menus and return to the main menu.





SEARCH MODE                                                             page 11
===========

  This selection allows you to search the names in the database using any or
all of the fields in the record.  The initial screen and key functions are very
similar to those of the Add mode and Edit mode.  To search for a particular
pattern in any field, just type that pattern in the field and initiate the
search with either the F5 or F6 function key.

  For example, if you wanted to search for all records that have addresses in
Indiana, just enter "IN" or "in" (not case sensitive) in the state field and
press the function key.  If, on the other hand, you wanted all addresses in
Indiana of people with the last name of Smith, as before, just type "IN" in
the state field and "Smith" in the last name field and press the function key.

  Once you have entered the strings to search for in their proper fields, you
have a choice of two ways in which to perform the search.

  If you press the F5 function key and any matching records are found, you will
be placed in Browse mode with the first matching record displayed on the screen.
However, if you look at the top line of the display, you'll notice that F5 is
now listed as the "Search" key.  With each press of F5, the search will
continue stopping at the next matching record, and finally return you to the
search screen.  This is a great way to search for a particular group of records
and use the space bar to flag them for later printing.

  If you press the F6 function key to start the search, you will get a listing
of names and phone numbers only, a screen at a time.  This search is a quick
way to call up those forgotten numbers to make a quick phone call.  If you have
a modem attached to your system you can also have the program automatically
dial the number for you.  You'll notice that the first line of the displayed
names and numbers is highlighted. Just use the up and down arrow keys to move
this highlighted bar to the phone number you wish to dial, make sure your modem
is turned on and press function key F7.  You can pick up the phone and press
any key when the dialing is complete and the modem will turn the connection
over to the handset.



SEARCH MODE (Continued)                                                 page 12
===========


The following is a list of keys and their functions:

Key                     Function
===============================================================================

F5        - Begins the record search and turns control over to Browse mode if
            any matching records are found. This key also allows you to
            continue the search from Browse mode.

F6        - Begins the phone number search. This search displays only the names
            and phone numbers of any matching records.

F7        - This key will activate the autodial feature. The program will ask
            if you wish to dial the home number or business number (H or B)
            and then dial whichever you choose, if it exists. Once the
            dialing has started, you can pick-up the phone and once it has
            stopped, press any key to return connection to the phone. This
            feature has been tested on a Prometheus, CTS 2424ADH and a Hayes
            2400 and works perfectly.

Up/Down
Arrows    - You can move between fields by using these keys. The <ENTER> key
            will also move you thru the fields. These keys also allow you to
            move the highlighted bar to select a number to call if the F6 key
            has been pressed.

Left/Right
Arrows    - Allows you to move back and forth between entered characters of a
            single field.

Delete    - This key will delete the character immediately under the cursor and
            pull any characters to the right back one space left.

Backspace - This key will delete the character immediately to the left of the
            cursor and pull any characters to the right of the deleted
            character left one space.

ESC       - This key will return you to the main menu.



CLOSING COMMENTS                                                        page 13
================

  Since the program uses the name fields to maintain the order of the database,
first by last name and then first name, a good way to enter any records which
only have a company name, is to enter that name in the first name field.  That
way the program keeps those records sorted separately at the start of the
list.  As for the number of records the program will support, it appears that
500K of memory will support approximately 600 - 650 records.  BE SURE TO MAKE A
BACKUP OF YOUR DATABASE!!!



USER SUPPORTED SOFTWARE
=======================

  This program is copyrighted material written for private use.  It was not
intended specifically for commercial use.  You may freely distribute this
software as long as:

  1) No fee is charged for such distribution, other than the cost of
     duplication and mailing.
  2) The entire package is distributed as a whole without modification of any
     kind.

  No claims are made as to the program's suitability for any specific purpose.
The author disavows responsibility for any damages resulting from the use of
this program.

   If, after a reasonable evaluation period, you find this program useful please
send a check or money order for $10.00 to the address below.  If you don't wish
to use the program, please pass it on to someone who may want to use it.





COMMERCIAL                                                              page 14
==========

  If you like FONEBOOK, you might also like our program DISK_TAG.  DISK_TAG
allows you to print a custom directory listing that will tuck nicely inside
the disk sleeve and if you need the sleeve, it will print out a custom sleeve
for your disk.  You can choose to print out just the root directory or the
contents of all directories, and choose to print out the contents of archived
files found on the disk or just the archived file name.  The listings and
sleeves contain space for a comment line and a disk number.  The program
creates sleeves and directory listings for both the 5 1/4" and 3 1/2" disks.
The sleeves will fit in standard disk holders.


==============================================================================
[                           REGISTRATION FORM                                ]
[                         FONEBOOK Version 3.0                               ]
[                                                                            ]
[   Date: ____/____/____                        TO: Wildcard Software        ]
[                                                   28480 C.R. 4 West        ]
[                                                   Elkhart, IN   46514      ]
[                                                                            ]
[  FROM:                                                                     ]
[        Name: __________________________________________________            ]
[                                                                            ]
[     Address: __________________________________________________            ]
[                                                                            ]
[        City: __________________________ State: ___ Zip: _______            ]
[                                                                            ]
[     Area Code (______) Phone: _________________________________            ]
[                                                                            ]
[   Comments:  __________________________________________________            ]
[                                                                            ]
[              __________________________________________________            ]
[                                                                            ]
[              __________________________________________________            ]
[                                                                            ]
[                                                                            ]
[      ___ Enclosed is $10.00 for a single registration of FONEBOOK.         ]
[                                                                            ]
[      ___ Enclosed is $15.00 please mail me a registered copy of FONEBOOK.  ]
[                                                                            ]
[      ___ Enclosed is $15.00 please mail me a registered copy of DISK_TAG.  ]
[                                                                            ]
==============================================================================





```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║             <<<<  Disk No 1226 DISK_TAG & FONEBOOK  >>>>                ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To start the DISK_TAG program, type DISK_TAG (press enter)              ║
║                                                                         ║
║ To copy DISK_TAG documentation to the printer, type MANUAL (press enter)║
║                                                                         ║
║ To start the FONEBOOK program, type FONEBOOK (press enter)              ║
║                                                                         ║
║ To copy FONEBOOK documentation to the printer, type DOC (press enter)   ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1226

     Volume in drive A has no label
     Directory of A:\

    BOOK1    FON       576   7-09-88   1:42p
    DISK_TAG DOC     13429   2-20-89   3:56p
    DISK_TAG EXE     64994   2-21-89  11:34a
    DTCONFIG EXE     17292   7-23-88   3:00p
    FBCONFIG EXE     18450   7-22-88   5:57p
    FBCONVER EXE     14622   7-03-88   6:30p
    FILE1226 TXT      2773   3-14-89   3:39p
    FONEBOOK DOC     32661   2-18-89   1:27a
    FONEBOOK EXE     77501   2-13-89   5:42p
    GO       BAT        38   1-18-88   1:38p
    GO       TXT       848   3-09-89   8:49a
    MANUAL   BAT       154  11-17-88   9:55a
           12 file(s)     243338 bytes
                           72704 bytes free
