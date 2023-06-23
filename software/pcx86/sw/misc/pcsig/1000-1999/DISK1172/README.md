---
layout: page
title: "PC-SIG Diskette Library (Disk #1172)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1172/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1172"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "DMAIL"

    DMAIL makes advanced mailing list functions a snap because of its new
    pull-down menus.  DMAIL makes mailing list management a breeze.  Create
    any number of master and subsidiary lists, tag addresses with key
    words,
    sort on any of nine fields and target mailings down to the city block.
    Print addresses directly on envelopes if you prefer not using computer
    labels.  It also prints Rolodex cards as well as two different kinds of
    quick-reference lists.  If you are sending personalized letters DMAIL
    will also create name and address files for Word Perfect, Microsoft Word
    and Wordstar.
    
    DMAIL makes it a snap to identify and locate those individuals in a
    master list who have something (anything) in common.  Through the key
    word tagging feature you can automatically create a sub-list of people
    who satisfy any condition you choose.  Lists can be joined, split, and
    sorted according to your particular needs.
    
    DMAIL is being used by institutions and businesses that need to
    organize
    mailings to as many as 15,000 people.  It eliminates repetitive typing,
    and has added reporting features, and a streamlined envelope printing
    function.  It is completely menu-driven.  The number of addresses
    stored
    is limited only by disk space.
    
    Features include:
    
    ~ Copy selected addresses from one list to another.
    
    ~ Target your mail by City, State, Zip Code, Area Code, key word etc.
    
    ~ Classify addresses with key words or your own coding system.
    
    ~ Perform key word searches and duplicate checking.
    
    ~ Print with any dot matrix or daisywheel printer.
    
    ~ Print addresses on one-up or two-up labels.
    
    ~ Print from 1 to 99 copies of each label.
    
    ~ Automatically record mailing date when addresses are printed.
    
    ~ Redirect printer output to a disk file.
    
    ~ Uses dBase/FoxBase compatible address files.
    
    ~ Uses pull-down menus -- the choices available are always on the
    screen.
    
    ~ Provides automated file backup and restore.
    
    ~ Displays in monochrome or color.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## DMAIL.DOC

{% raw %}
```
------------------------------------------------------------------------------
----------------------------- DMAIL  V 5.0 -----------------------------------
------------------------------------------------------------------------------
K. EGGER, 255 ONTARIO STREET, TORONTO, ONTARIO, CANADA  M5A 2V6  (416)863-1643
------------------------------------------------------------------------------

DMAIL is an advanced mailing list system for all MS-DOS microcomputers.
It has the following features:

 -> Create any number of lists - limited only by disk space.
 -> Sort addresses on any of eight nine sort keys.
 -> Copy selected addresses from one list to another.
 -> Target your mail by City, Postal/Zip Code, Area Code, Key Word etc.
 -> Classify addressees with key words or your own coding system.
 -> Perform key word searches and duplicate checking.
 -> Extract selected addresses from a master list using any of six criteria.
 -> Create mailmerge files for WordPerfect, Microsoft Word and Wordstar.
 -> Display visual scanning in three different ways.
 -> Print with any dot matrix or daisywheel printers.
 -> Print addresses on one-up or two-up Avery labels.
 -> Print from 1 to 99 copies of each label.
 -> Print addresses on envelopes.
 -> Automatically record mailing date when addresses are printed.
 -> Print two types of quick-reference lists.
 -> Redirect printer output to a disk file.
 -> Uses dBASE compatible files.
 -> Uses pull-down menus - the choices available are always on the screen.
 -> Provides automated file backup and restore.
 -> Displays in monochrome or colour.

------------------------------------------------------------------------------

DMAIL SYSTEM REQUIREMENTS:

 -> IBM micro or close compatible.
 -> Floppy drive or hard disk system.
 -> 640 KB of memory.
 -> Color or monochrome display.
 -> Any dot matrix or daisy wheel printer that prints the standard 10
    characters per inch and 66 lines per page.


DMAIL prints on the three most common label sizes.

 -> 3-1/2 inches by 15/16 inches wide (one up).
 -> 4 inches by 1-7/16 inches wide  (one up).
 -> 4 inches by 15/16 of an inch wide (two up).

------------------------------------------------------------------------------


DMAIL is supplied with the following files:


 -> DMAIL.EXE - the main program file.

 -> DMAIL.DBF - a sample address file.

 -> DMAIL.NTX - a sample index file.

 -> DMAIL.MEM - a file that saves sort key data.

 -> DMAIL.DOC - the user guide.


        MAKE A BACKUP COPY OF THESE FILES AND KEEP THEM IN A SAFE PLACE.



DMAIL.DBF must always be present on your data disks because it is used as a
model on which to create your new address files. Even if you don't put any
addresses in it you must keep a copy of DMAIL.DBF on your data disks.

The program creates other files as they are needed. The .NTX and .MEM files
associated with any list must always stay on the same disk with the list.

------------------------------------------------------------------------------

DMAIL is a disk-intensive program - it frequently reads from and writes to
it's files. The number of disk accesses required can be reduced by increasing
the memory buffers in your setup. This is done by putting a file called
CONFIG.SYS on the disk you use to start your system. DOS automatically looks
for this file when you power up your computer. If it is present then the
system configuration it describes will be used. Simply use your text editor to
create a file called CONFIG.SYS and put these two lines into it:

                                  FILES = 20
                                  BUFFERS = 8

You can run DMAIL on a single 360KB floppy disk but that would leave room for
about 400 addresses only. This would increase to about 1000 on a 720KB disk.

------------------------------------------------------------------------------

SETTING UP ON A SYSTEM WITH TWO FLOPPY DISKS :

First format a new data disk using FORMAT B:/S and then write on the label the
type of address lists it is to contain. Be sure to use the system option (/S)
when formatting. Then copy DMAIL.DBF, DMAIL.NTX and DMAIL.MEM from the program
disk to the new data disk.




To use DMAIL:

 1 - Put the program disk in drive A:

 2 - Put the data disk in drive B:

 3 - Set the logged drive to B: by typing B:

 4 - Start the program by typing A:DMAIL

DMAIL will now save all your addresses on the B: drive.


                                C A U T I O N !

  - DO NOT CHANGE THE DISK IN DRIVE B: UNLESS DMAIL IS DISPLAYING THE MAIN
    MENU OTHERWISE DATA MAY BE LOST.

  - AFTER INSERTING A NEW DISK YOU MUST USE THE "LISTS" COMMAND ON THE
    MAIN MENU TO TELL DMAIL WHICH LIST TO USE ON THE NEW DISK.


DMAIL sorts the contents of each mailing list on any of eight sort keys. The
address files are not actually re-written when they are sorted, but instead an
index file is created that determines the order in which the addresses are
displayed and printed.

This eliminates the need to waste precious disk space required for re-writing
sorted files. You can store about 1000 addresses on one 360KB floppy disk.
It is a good idea to look at the status box (available under "Addresses" on
the main menu) to check the remaining disk space before adding new data.

------------------------------------------------------------------------------

SETTING UP ON A HARD DISK SYSTEM:


 1 - Create a new directory on your hard disk for mailing lists.

 2 - Copy all files supplied to the new directory.

 3 - Start the program by typing DMAIL

DMAIL does not use directory paths. All addresses should be kept in the same
directory as the program.

------------------------------------------------------------------------------

                  IF YOU ARE UPGRADING TO DMAIL VERSION 4.0

If you are upgrading DMAIL you need only perform two simple steps.

-> Copy the new program file over the old one.

-> Delete the existing files that have the file type ".MEM".
   You can do this by entering "DEL *.MEM" at the DOS prompt.
   This is done because DMAIL now uses a different format for these support
   files and the old ones can be deleted.


------------------------------------------------------------------------------

In order to explore DMAIL without having to enter addresses a sample address
file has been included.

Each time you start the program DMAIL.DBF will be the active list. Later on
you can delete the sample addresses in it and enter your own so DMAIL will
always come up with one of your lists active.


------------------------------------------------------------------------------

                           P L E A S E   N O T E

DMAIL has standard error handling functions but there are two fatal errors
from which it cannot recover. These occur when you are (a) running DMAIL in a
small amount of free memory and (b) when you run out of space on your floppy
drive. The message at the top of the screen will look like this:


               proc:XXXXXXXX   error X,          QUIT? (Q/A/I)


You must press "Q" to quit the program and re-start it. If you have lots of
memory resident utilities on your system be sure to leave at least 356 KB of
free memory for DMAIL.

------------------------------------------------------------------------------

Once you have started DMAIL you will see the main menu options accross the
top of the screen:


             Addresses   Lists   Print    Scan   Utility   Quit


Make your selection on this menu either by pressing the right & left arrow key
until your choice is highlighted or by pressing the first letter in the
option you want to use. As you move from one option to another you will see
a few words describing what each one does at the bottom of the screen. When
you have the option you want just press ENTER to start. Once you are
familiar with the DMAIL menus you can save keystrokes by using only the
first letters of the menu items to make your choices.

At the bottom of the screen you will see a description line that explains
the currently selected menu option and the name of the active address
list.

---------------------------------------------------------------------------
             THE CHOICES ON THE MAIN MENU AND WHERE THEY LEAD
---------------------------------------------------------------------------



                            ------------------
                            THE ADDRESSES MENU
                            ------------------

---------------------------------------------------------------------------
Addresses
Add addresses, edit existing addresses, or get status info
---------------------------------------------------------------------------
This option leads to menus for adding new addresses, finding existing
addresses, and getting information about lists you have created.


DMAIL has been supplied with some sample address files so you can
experiment witht he various features without having to enter data. You may
wish to explore the other menus before trying out the data entry function.




                            ADDING ADDRESSES


---------------------------------------------------------------------------
Add
Add new addresses
---------------------------------------------------------------------------
This command puts a blank data entry form on your screen (see the next page
for cursor control keys). You may now enter:

                          -> Mr., Ms., Dr. etc.
                          -> First name
                          -> Last name
                          -> Title
                          -> Company name
                          -> Street address
                          -> City name
                          -> Province or state
                          -> Postal or Zip code
                          -> Country name
                          -> Phone number
                          -> Phone extension
                          -> Second phone number
                          -> Second phone extension
                          -> Contact person first name
                          -> Contact person last name
                          -> A comment, code or key words
                          -> Set print flag

The last field is called the "print flag". This field is set to "Y" (yes)
and can be changed to "N" (no) by pressing "N" on the keyboard. When set to
"Y" the address will be included when you print, create merge files or copy
addresses from one list to another. If you want to leave it at "N" just press
RETURN. There are several other ways to set the print flag on and off. The
"Flag" command on the main menu has already been described and the "Find"
option leads to two more methods.

Hint: If you want an address to read "Mr. and Mrs." just enter "and Mrs."
where the first name usually goes. It will then print correctly on your
labels.

The field labeled "Last Mailing" on your screen is a "display only" field. In
other words you cannot enter information in this field from the keyboard. The
date it displays is the date on which you last printed the address onto a
label or an envelope.

When DMAIL is used to manage client contacts the comment field can contain a
code or some key words that classify the addresses in useful ways. The "Copy"
and "Find by Key Word" options can then be used to locate all addresses
that have something in common. The comment field can also be used to note
the type of material usually sent to a given addressee. You will then have
a record of what was sent to whom and when it was last sent.


------------------------------------------------------------------------------

                             CURSOR CONTROL


You can move around the screen in several ways:

 -> The cursor will advance to the next field each time you:

               - press ENTER.
               - type a character at the end of a field.
               - press the DOWN ARROW key.


 -> The cursor will move back to the previous field when you press the Up
    Arrow key.

 -> The cursor will move to the beginning of a field when you press Home, and
    to the end of a field when you press End.

 -> The cursor moves to the first field when you press Ctrl-Home and to the
    last field when you press Ctrl-End.

 -> The cursor moves to the beginning of the current word when you press
    Ctrl-Left Arrow and to the beginning of the next word when you press Ctrl-
    Right Arrow.

 -> Ctrl-T deletes the word to the right of the cursor.

 -> Ctrl-Y deletes from the cursor to the end of the field.

 -> Ctrl-U restores a field to it's original contents. This is most useful
    when you leave a field and then come back to it. If you have not
    previously passed the field this command simply erases whatever you have
    typed.


When you re-type the contents of a field it will write over the existing
contents unless you press Ins to activate the "insert text" function. Press
Ins again when you want to turn it off. When active, "<insert>" will be
displayed at the top of the screen.

Each time you type a letter in the first position of a field it will
automatically be capitalized - you do not need to hold down the shift key.
Province/State names will be all capitals and the letters in Canadian postal
codes will also be capitalized.

Ctrl-C or PgDn exits the data entry/editing function. Pressing "T", "F" or
RETURN while the cursor is on the "Flag?" field has the same effect. You will
then be asked if you wish to continue editing or if you are done.

 -> Press "E" if you want to continue.

 -> Press "D" if you are done.



You will then be asked if you are given three options: Save, Edit or
Abandon.


 -> Press "S" to save it.

 -> Press "E" to edit what has been entered.

 -> Press "A" to abandon the record as shown.


If you are in the "Add" command you will be give three more option:  New,
Copy or Quit.


 -> Press "N" to enter a new address.

 -> Press "C" to copy everything but the name from your last entry.

 -> Press "Q" to return to the main menu.

NOTE: The "Copy" option does not appear if you have not yet saved a new
address to the list.





                                FINDING DATA



---------------------------------------------------------------------------
Find
Find existing addresses
---------------------------------------------------------------------------
When this command is selected you will be presented with the following
options:


---------------------------------------------------------------------------
By Index
Fast find using file index
---------------------------------------------------------------------------
This option allows to locate addresses quickly by name or organization.
It's speed depends on the index file being available. If you have sorted a
list by city but you want to search by name then it will take longer than
if it were already sorted by name.

---------------------------------------------------------------------------
All Matches
Find all matches for a given string of characters
---------------------------------------------------------------------------
This option allows you to search for all occurreneces of a given character
string in one of the following fields: Name, Organization, Title, Key Word.


This option allows you to find things even if you don't remember exactly
what they are. You will be prompted for all or any part of the field you
want to search. Enter as few or as many characters as you wish but remember
that the search is case sensistive. This means that a target entered as
"smith" will not locate "Smith". If you enter "ith" however, it will be
found.


---------------------------------------------------------------------------
First Record
Go to the top of the list
---------------------------------------------------------------------------
This command calls the first address to the screen.



---------------------------------------------------------------------------
Last Record
Go to the bottom of the list
---------------------------------------------------------------------------
This command calls the last address to the screen.



When a record is found and displayed you will be given another set of
options:


    Edit   Flag   Skip   +One   -One   Del   Print   Next  Return


 -> Press "E" to edit the address.

 -> Press "F" to change the Print Flag.

 -> Press "S" to skip up or down the list - enter the number of addresses to
    skip forward or a negative number to skip backward i.e. -10.

 -> Press "+" to see the next address in the sort order.

 -> Press "-" to see the previous address in the sort order.

 -> Press "D" to mark the address for deletion. The record will not actually
    be deleted until the next time the list is sorted. If the record has
    already been marked for deletion then pressing "D" will undelete it.

 -> Press "P" to print the address - make sure the printer is on and that
    there is an envelope in the carriage. The last mailing date in the
    address record will be set to the current system date.

 -> Press "N" to find the next address that satisfies the search
    criteria. This option is displayed only if you have identified a search
    criteria.

 -> Press "R" to return to the main menu.




                              --------------
                              THE LISTS MENU
                              --------------

---------------------------------------------------------------------------
Lists
Use a different address list or create a new one
---------------------------------------------------------------------------
When you select "Lists" on the main menu you have access to a pull-down
menu. The options shown are "Select", "Create", "Back Up", "Restore" and "Exit". Below is a
description of each option:



---------------------------------------------------------------------------
Select
Select another list
---------------------------------------------------------------------------
This option shows all the lists currently available. Use the UP &
DOWN ARROW keys to move the highlight to the list you want then press
ENTER"



---------------------------------------------------------------------------
Create
Start a new list
---------------------------------------------------------------------------
The "Create" command is used to start a new list. When prompted for a new
filename enter only a filename of up to eight characters - do not enter a file
type or drive specification. The "Create" function reads the structure of
DMAIL.DBF (which must be present) and duplicates it under your new filename.
The new file then becomes the active list.


---------------------------------------------------------------------------
Back Up
Make back up copies of your lists to drive A: or B:
---------------------------------------------------------------------------
Use this function to copy your lists to a diskette. This should be done
as often as possible so that you will always have at least two copies
of every list. Just follow the screen prompts to make your backups.


---------------------------------------------------------------------------
Restore
Restore lists from drive A: or B:
---------------------------------------------------------------------------
Use this function to restore a list from a diskette. Once again, just follow
the screen prompts.


---------------------------------------------------------------------------
Exit
Exit to the main menu
---------------------------------------------------------------------------
This option returns you to the main menu.



                            --------------
                            THE PRINT MENU
                            --------------


DMAIL uses Print Flags as a means for you to select addresses for printing.
This is a simple YES/NO field that is associated with each address. If a
Print Flag is set to YES then the address is selected in subsequent print
operations. If it is set to NO then the address is left out. There are
several ways you can set Print Flags to YES or NO. These will be covered as
we work through the menus.



---------------------------------------------------------------------------
Print
Print labels, reports or rolodex cards
---------------------------------------------------------------------------
This option leads to a pull-down menu that accesses DMAIL's various print
features. Below is a descrition of each item on the pull-down menu.



---------------------------------------------------------------------------
Addresses
Print addresses on mailing labels or envelopes
---------------------------------------------------------------------------
Each time you use the "Addresses" option you will be asked if you want to
print on labels or envelopes. Use the up & down arrow keys to highlight the
choice you want and then Press ENTER. Pressing the first letter of the
choice will also execute that choice without waiting for you to press ENTER
i.e. press "L" if you want labels, "E" if you want envelopes or "R" if you
want to return to the main menu.



---------------------------------------------------------------------------
Labels
Use label output
---------------------------------------------------------------------------
This option leads to another menu of choices. These are:



---------------------------------------------------------------------------
Small One Up Labels
Select 3-1/2 X 15/16 inch one-up labels
---------------------------------------------------------------------------
Use this option to select small one-up labels.



---------------------------------------------------------------------------
Large One Up Labels
Select 4 X 1-7/16 inch one-up labels
---------------------------------------------------------------------------
Use this option to select large one-up labels.



---------------------------------------------------------------------------
Two Up Labels
Select 4 X 15/16 two up labels
---------------------------------------------------------------------------
Use this option to select two-up labels.



---------------------------------------------------------------------------
Number of copies
Specify number of copies of each label
---------------------------------------------------------------------------
Use this option if you want to print more than one copy of each label. In
many offices a supply of address labels is kept in the file folder of each
client for use as needed.



---------------------------------------------------------------------------
Begin Label Printing
Start printing
---------------------------------------------------------------------------
Once you have chosen the label size and tested the position of the labels
in the printer you are ready to start. Use this option to start the print
run. Please note that only those addresses with the PRINT FLAG set
to YES will be printed. If for any reason you need to interupt the printer
just press ESCAPE. The printer may not stop until it has printed another
three or four labels. This is because most printers have a "buffer" that
holds a small amount of output from your computer and will keep on printing
until this buffer is empty.



---------------------------------------------------------------------------
Envelopes
Use envelope output
---------------------------------------------------------------------------
With this option DMAIL will send all flagged addresses to the printer one
at a time. You will be prompted to change envelopes between each address.
Press ESCAPE if you want to stop the process at any time. If the printing
of a set of envelopes has to be interupted you can re-start it later and
DMAIL will pick up where you left off as long as the Print Flag fields
remain unchanged.

You may get a "paper empty" error with some printers. This is because
the mechanism that detects the presence of paper is placed before the
carriage roller and it fails to detect a standard business envelope. If
this happens check your printer manual for instructions on how to
temporarily disable the paper detector. Please note that not all printers
can correctly handle a single envelope. Ask the supplier about this when
shopping for a printer.



---------------------------------------------------------------------------
Short Ref
Print reference list with name, organization and phone number only
---------------------------------------------------------------------------
The "Short Ref" option sends a quick reference list to the printer. The
list will contain only the name, organization and phone number. The data
will be printed in whichever sorting order you have chosen. The addressee's
name will always appear first unless the sort order is by organization, in
which case the organization name appears first.



---------------------------------------------------------------------------
Full Ref
Print a complete reference list with all data
---------------------------------------------------------------------------
This option sends a complete hard copy address list to the printer. It
contains all the fields in the data file.


---------------------------------------------------------------------------
Cards
Print rolodex cards
---------------------------------------------------------------------------
This option sends the contents of all flagged records to the printer in a
format that will fit on rolodex cards. The addressee's name will always
appear first unless the sort order is by organization, in which case the
organization name appears first. Before you begin you will be given an
opportunity to send a test pattern to the printer to check the position of
the cards. If you have never used this method of creating a rolodex index
card file ask your local office supplies store for 3 by 5 inch tractor feed
rolodex cards. These can be loaded into a printer in the same fashion as
labels.


---------------------------------------------------------------------------
Text File
Send printer output to a text file instead
---------------------------------------------------------------------------
This option allows you to send all printer output to a text file on your
disk. You will be prompted for the name of the file to which you want it
sent. Enter only a file name of up to 8 characters. A file type of ".TXT"
will be supplied. After that you can proceed with printing of labels,
reference lists or even rolodex cards and the resulting output will be
found in the file you designated. The named file will receive the printer
output only if you do not leave the Print menu. As soon as you leave the
Print menu then output will again be routed to the printer.



---------------------------------------------------------------------------
Exit
Exit to the main menu
---------------------------------------------------------------------------
This option exits the Print submenu and returns you to the main menu.




                            -------------
                            THE SCAN MENU
                            -------------


---------------------------------------------------------------------------
Scan
Look through the active list
---------------------------------------------------------------------------
This option allows you to choose between two ways of visually scanning your
address lists.


---------------------------------------------------------------------------
Summary
Show only name, organization and phone number
---------------------------------------------------------------------------
This is the screen version of the short reference list. Use the PAGE UP and
PAGE DOWN keys and the ARROW keys to move around the screen. If you want to
edit the contents of a field press RETURN, enter your changes, then press
RETURN again to save the changes. Press ESCAPE to exit the screen and
return to the main menu.

---------------------------------------------------------------------------
All Data
Show all data
---------------------------------------------------------------------------
This option allows you to display your address lists in tabular format.
Once again use the PAGE UP and PAGE DOWN keys and the ARROW keys to move
around the screen. If you want to edit the contents of a field press
RETURN, enter your changes, then press RETURN again to save the changes.
Press ESCAPE to exit the screen and return to the main menu.



                           ----------------
                           THE UTILITY MENU
                           ----------------


---------------------------------------------------------------------------
Add Merge
Produce an address merging file for a word processor
---------------------------------------------------------------------------
The Add Merge option will write all flagged addresses into a file that can
be used with word processors for addressing form letters. Four types of
file compatibilities are possible - WordPerfect, Microsoft Word, a generic
left justified format, and Wordstar. Only addresses with a Print Flag set
to "Y" (yes) will be written to the output file.

When you are prompted for an output file name just enter a filename of up
to eight characters - do not enter a file type or a drive specification. A
file type will automatically be supplied depending on your choice of output
file. WordPerfect lists will be ".SEC" files, Microsoft Word lists will be
".ADD" files and the generic left-justified lists will be ".TXT" files.




Chances are you will only need one of the above file formats, but having
access to all of them may make it easier for you to supply address lists to
clients and associates who use different word processors.


Wordstar Users :

Since DMAIL uses dBASE compatible data files and Wordstar can read this
file format it is not necessary to create a separate merge file for use
with Wordstar. You need only to create a list of the addresses you want
then tell Wordstar to read from that list with it's dBASE file feature. For
more information on this look up "dBASE" in the index of whichever Wordstar
manual you have.



You can use DMAIL files directly with Wordstar. The following should appear
at the top of your Wordstar form letters:

      .DF filename.DBF       (filename is the name of the DMAIL address list)
      .RV*

      &FNAME/O& &LNAME/O&
      &TITLE/O&
      &INST/O&
      &ADDR/O&
      &CITY/O& &PROV/O&  &PCODE/O&

      Dear &PRE& &LNAME&,

This arrangement can handle an address of three to six lines and no blanks
will be left where you have a blank field in the address file. With Wordstar
you can merge print the contents of any DMAIL field. See the end of this
document for the field names to use.



A similar format for Microsoft Word is:

      <<DATA filename.ADD>>       (filename is the name of the address list
                                   you created with the Add Merge option)

      <<FNAME>> <<LNAME>>,
      <<TITLE>>,
      <<ORGANIZATION>>,
      <<ADDRESS>>,
      <<CITY>>, <<PROV-STATE>>   <<PCODE>>

      Dear <<PREFIX>> <<LNAME>>,


And for WordPerfect it will look something like this:

      ^F2^ ^F3^,
      ^F4?^,
      ^F5?^,
      ^F6^,
      ^F7^, ^F8^  ^F9^

      Dear ^F1^ ^F3^,


The question marks in the last example tell WordPerfect not to leave any blank
lines where you have not entered a title or organization name. If you are
merging directly to the printer with WordPerfect don't forget to put the
required control characters at the end of the last line in your letter
(^T^N^P^P).


There is considerable flexibility in the use of these formats. If you are
new to mailmerging, re-read the relevant chapter in your word processing
manual and try a little experimenting to get the results you want before
tackling a big printing job.


---------------------------------------------------------------------------
Flag
Set all print flags ON or OFF
---------------------------------------------------------------------------
Each address can be independently flagged for printing when you enter, edit
or search your lists. The "Flag" command will set all the Print Flags at
once to "Y" (yes) or "N" (no).


---------------------------------------------------------------------------
Copy
Copy or Move addresses to another list
----------------------------------------------------------------------------
The "Copy" command allows you to create new lists by mixing addresses from
several lists or by distilling a large list down into a smaller one.

You will first be prompted for a source filename and a destination filename.
Enter filenames only, not file types or drive specifications. If you specify a
destination file that does not already exist then it will be created.

You are then asked if you wish to "copy or move" the addresses. The difference
is that "copying" leaves the source file unchanged while "moving" deletes the
target addresses from the source file. If moving addresses leaves the source
file empty then it will be deleted (except DMAIL.DBF which must always be
present).

The next choice you make is whether to move/copy only the flagged addresses
or to use other criteria for selecting them. If you want to use other criteria
you can enter these on a selection menu.

Use the "Target By Name" option to split up a list alphabetically. To
create a separate list of all addresses with a last name begining with "A"
enter only an upper case "A" when prompted for a selection criteria.

When copying by City, Area Code or State/Province you must enter them as
they appear in the address file. If a city is misspelled then the address
will not be copied. We commonly write Province and State names in
abbreviated form. When copying by Province/State you will miss some
addresses if you have not been consistent in the abbreviations you use.
See Appendix A for a list of the correct abbreviations.

When copying by Postal/Zip codes you may enter from 1 to 10 characters as the
"Target Code". If you are using American extended Zip codes the longest number
you can enter would be in this format: 99999-9999. In most densely populated
areas of the U.S. this is enough to target a single building. When using
either American or Canadian codes, the more characters you enter as the Target
Code the fewer addresses will be selected.

When you copy by Title you may enter any string of characters. If the string
is found within the Title field of any address then it will be copied. This
allows you to extract addresses from a list that contain similar but not
identical Title fields. You can enter a few characters, a word or several
words. If you enter only a few characters then you will get more addresses
than if you enter whole words. If, for example you want to create a sublist
of all the addresses that contain the word "Manager" in the title field
you can enter "Man" when prompted for a selection criteria.

The same applies to copying by Key Word, except that the field being searched
is the Key field. This field can be used to contain your own coding system
or some other key words that describe or classify each addressee. Copying
by Key Word can then pull out all the addressees that have a given string
of characters in the Key field.



Each address has a field labeled "Last Mailing". It contains the date on which
you last printed the address onto a label or an envelope. If you choose to
copy by "Mailing Date" you will be asked if you want to copy addresses with
mailing dates occurring before or after the target date. You can now enter
the target date itself. DMAIL will then copy the addresses with a "Last
Mailing" either on/before the specified date or on/after the specified
date.


If you copy addresses to another list you are in fact duplicating them. If you
then print addresses from either of the two lists you will be left with two
versions of the duplicated addresses - each with a different mailing date.
This can be avoided by moving addresses instead of copying them. If necessary
you can move them back into the original list after printing. Unless you are
working with a large list you may find it easier to print selected addresses
by skipping through the list using the Find option. You can go to the first
record then uses the "+" key to move down the list. When you see an
address you want to select just press "F" to set the Flag to "Y".


Please Note: When addresses are moved or copied their print flags are set
to "Y" (yes). If you wish to have them re-set to "N" (no) use the "Flag"
command on the main menu.


Use the sample address list provided to experiment with the "Copy" command.




---------------------------------------------------------------------------
Sort
Choose a sort key and re-sort filename
---------------------------------------------------------------------------
DMAIL works best when it's address files are sorted with up-to-date indexes.
You can change the sorting order at any time to suit your needs. Addresses
will always be displayed and printed in the sorting order you have chosen.

Most of the sorting options are self explanatory. The "Phone Exchange"
option is used to sort by area code and local exchange.

If you are using the field labeled "Per:" to contain the names of your
sales staff then sorting by "Contact Person" will group your clients by
salesman.

DMAIL uses the adressee's last name as the secondary sort key. Once your
primary sorting order has been satisfied the addresses are listed alphabet-
ically. If more complex sorting is required it can be achieved by creating
sub-lists using the "Copy" command.



---------------------------------------------------------------------------
Duplicate
Look for name and address duplications
---------------------------------------------------------------------------
There are two options when this command is used. For fast unattended
operation select Automatic Deletion on the menu. This will automatically
locate addresses that have identical name and address fields and marks them
for deletion. The duplicates are not actually removed from the list until
the list is re-sorted.

When you choose Selective Deletion DMAIL locates duplication of names only
and displays both addresses when one is found. You are then given the
choice of which of the two records containing name duplications to delete
(if any) before going on.

Automatic Deletion can be canceled by pressing "ESCAPE". When a search is
canceled you will be given an opportunity to undelete any addresses that
were marked for deletion during the search.



---------------------------------------------------------------------------
Undelete
Undelete addresses marked for deletion
---------------------------------------------------------------------------
This is a safety net for those occassions when you change your mind about
deleting addresses from a list. This only works if you have not re-sorted
the list after marking addresses for deletion.



---------------------------------------------------------------------------
Monitor
Change monitor to color/b&w
---------------------------------------------------------------------------
Use this option to toggle between colour and monochrome display. When DMAIL
starts up it checks to see if there is a colour adapter in your computer. If
that adapter happens to be connected to a mono graphics monitor you may prefer
to display DMAIL in monochrome.





---------------------------------------------------------------------------
Quit
Return to the main menu
---------------------------------------------------------------------------
This command calls the main menu back to the screen.




If you are a dBASE user you can load your address records into dBASE and
perform all the functions that it allows. The data file structure used by
DMAIL is as follows:

                FLD# NAME     TYPE  WIDTH  DESCRIPTION

                1    PR          L      1  - print flag
                2    PRE         C      3  - Mr., Ms. etc.
                3    FNAME       C      9  - first name
                4    LNAME       C     16  - last name
                5    TITLE       C     29  - title
                6    INST        C     30  - organization
                7    ADDR        C     30  - street address
                8    CITY        C     15  - city
                9    PROV        C      4  - province or state
               10    PCODE       C     10  - postal or zip code
               11    CO          C      9  - country
               12    PHONE       C     13  - phone - pict "(XXX)XXX-XXXX"
               13    EXT         C      4  - phone extension - pict "XXXX"
               14    LMAIL       D      8  - last mailing
               15    COMMENT     C     66  - comment line
               16    PHONE2      C     13  - second phone number
               17    EXT2        C      4  - second phone extension
               18    FPER        C      9  - contact person first name
               19    LPER        C     16  - contact person last name


You can extract addresses and phone numbers from your existing dBASE records
and load them into DMAIL but the above structure must be observed.

If you are an experienced dBASE programmer it will not take long to write a
routine that reads any dBASE file and writes the appropriate fields to a
DMAIL address file with the above structure.

------------------------------------------------------------------------------
ALWAYS MAKE SURE TO HAVE BACKUP COPIES OF ALL YOUR ADDRESS LISTS. SOME DAY YOU
MAY BE VERY GLAD THAT YOU DO.
------------------------------------------------------------------------------

DMAIL is distributed as Shareware so you can try it before you buy it. As a
registered DMAIL user you will receive the latest version (without the on-
screen registration notice), printed documentation and unlimited telephone
support (your dime). Please send a cheque or money order for $35 to the
address below. Send U.S. $35 for air mail orders sent to destinations
outside Canada. Please specify 5.25 or 3.5 inch diskette.


                                    contact:

                                  Mr. K. Egger
                               TeleMedica Systems
                               255 Ontario Street
                                Toronto, Ontario
                                Canada   M5A 2V6

                                  416-863-1643
------------------------------------------------------------------------------


                                APPENDIX A

             Abbreviations of Canadian Provinces and Territories

       ALBERTA -------------- AB             NOVA SCOTIA ---------- NS
       BRITISH COLUMBIA ----- BC             ONTARIO -------------- ON
       LABRADOR ------------- LB             PRINCE EDWARD ISLAND - PE
       MANITOBA ------------- MB             QUEBEC --------------- PQ
       NEW BRUNSWICK -------- NB             SASKATCHEWAN --------- SK
       NEWFOUNDLAND --------- NF             YUKON TERRITORY ------ YT
       NORTH WEST TERRITORY - NT


               Abbreviations of American States and Territories

       ALASKA --------------- AK             NEBRASKA ------------- NE
       ALABAMA -------------- AL             NEVADA --------------- NV
       AMERICAN SAMOA ------- AS             NEW HAMPSHIRE -------- NH
       ARIZONA -------------- AZ             NEW JERSEY ----------- NJ
       ARKANSAS ------------- AR             NEW MEXICO ----------- NM
       CALIFORNIA ----------- CA             NEW YORK ------------- NY
       COLORADO ------------- CO             NORTHERN MANANA ISLA - CM
       CONNECTICUT ---------- CT             NORTH CAROLINA ------- NC
       DELAWARE ------------- DE             NORTH DAKOTA --------- ND
       DISTRICT OF COLUMBIA - DC             OHIO ----------------- OH
       FLORIDA -------------- FL             OKLAHOMA ------------- OK
       GEORGIA -------------- GA             OREGON --------------- OR
       GUAM ----------------- GU             PENNSYLVANIA --------- PA
       HAWAII --------------- HI             PUERTO RICO ---------- PR
       IDAHO ---------------- ID             RHODE ISLAND --------- RI
       ILLINOIS ------------- IL             SOUTH CAROLINA ------- SC
       INDIANA -------------- IN             SOUTH DAKOTA --------- SD
       IOWA ----------------- IA             TENNESSEE ------------ TN
       KANSAS --------------- KS             TEXAS ---------------- TX
       KENTUCKY ------------- KY             TRUST TERRITORY ------ TT
       LOUISIANA ------------ LA             UTAH ----------------- UT
       MAINE ---------------- ME             VERMONT -------------- VT
       MARYLAND ------------- MD             VIRGINIA ------------- VA
       MASSACHUSETTS -------- MA             VIRGIN ISLANDS ------- VI
       MICHIGAN ------------- MI             WASHINGTON ----------- WA
       MINNESOTA ------------ MN             WEST VIRGINIA -------- WV
       MISSOURI ------------- MO             WISCONSIN ------------ WI
       MISSISSIPPI ---------- MS             WYOMING -------------- WY
       MONTANA -------------- MT

------------------------------------------------------------------------------

```
{% endraw %}

## FILE1172.TXT

{% raw %}
```
Disk No: 1172                                                           
Disk Title: Dmail                                                       
PC-SIG Version: S2.0                                                    
                                                                        
Program Title: Dmail                                                    
Author Version: 5.0                                                     
Author Registration: $35.00                                             
Special Requirements: 640K RAM and a printer.                           
                                                                        
DMAIL makes mailing list management a breeze.  If organizing your       
mailings has ever been a problem, then DMAIL will simplify the work.    
Create any number of master and subsidiary lists, tag addresses with key
words, sort on any of nine fields and target mailings down to the city  
block.  DMAIL has printing features and options that make any printer a 
more useful machine whether you are using an HP Laserjet, dot matrix, or
daisywheel.  Print addresses directly on envelopes if you prefer not use
computer labels.  It also prints Rolodex cards as well as two different 
kinds of quick-reference lists.  If you are sending personalized letters
DMAIL will also create name and address files for Word Perfect,         
Microsoft Word and Wordstar.                                            
                                                                        
DMAIL makes it a snap to identify and locate those individuals in a     
master list who have something (anything) in common.  Through the key   
word tagging feature you can automatically create a sub-list of people  
who satisfy any condition you choose.  Lists can be joined, split, and  
sorted according to your particular needs.                              
                                                                        
DMAIL is being used by institutions and businesses that need to organize
mailings to as many as 15,000 people.  It eliminates repetitive typing, 
and has added reporting features, and a streamlined envelope printing   
function.  It is completely menu-driven.  The number of addresses stored
is limited only by disk space.                                          
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                   <<<<  Disk No 1172 DMAIL  >>>>                        ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To start the program, type: DMAIL (press enter)                         ║
║                                                                         ║
║ To print the documentation, type: COPY DMAIL.DOC PRN   (press enter)    ║
╚═════════════════════════════════════════════════════════════════════════╝
(c) Copyright 1990, PC-SIG Inc.
```
{% endraw %}

## PC-SIG.TXT

{% raw %}
```
DMAIL 5.0 makes advanced mailing list functions a snap because of it's new
pull-down menus. Create any number of master and subsidiary lists - you are
limited only by the available disk space. The following is a list of some of
DMAIL's many features:

Sort addresses on any of nine sort keys.
Copy selected addresses from one list to another.
Target your mail by City, State, Zip Code, Area Code, Key Word etc.
Classify addresses with key words or your own coding system.
Perform key word searches and duplicate checking.
Select addresses from a master list using any of six criteria.
Create mailmerge files for WordPerfect, Microsoft Word and Wordstar.
Display visual scanning in three different ways.
Print with any dot matrix or daisywheel printer.
Print addresses on one-up or two-up labels.
Print from 1 to 99 copies of each label.
Print addresses on envelopes.
Automatically record mailing date when addresses are printed.
Print two types of quick-reference lists.
Redirect printer output to a disk file.
Uses dBase/FoxBase compatible address files.
Uses pull-down menus - the choices available are always on the screen.
Provides automated file backup and restore.
Displays in monochrome or colour.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1172

     Volume in drive A has no label
     Directory of A:\

    DMAIL    EXE    278672   6-10-90   5:51p
    PC-SIG   BAK      1220   6-10-90   6:18p
    PC-SIG   TXT      1228   6-10-90   6:19p
    DMAIL    DBF      4110   2-24-90  10:26a
    DMAIL    NTX      2048   6-07-90  10:07p
    DMAIL    MEM        38   6-07-90  10:07p
    DMAIL    DOC     46235   6-10-90  10:32a
    FILE1172 TXT      2813   7-09-90   9:58a
    GO       BAT        38   1-18-88   1:38p
    GO       TXT       573   1-01-80   1:45a
           10 file(s)     336975 bytes
                           18432 bytes free
