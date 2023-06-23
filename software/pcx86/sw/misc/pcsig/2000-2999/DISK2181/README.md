---
layout: page
title: "PC-SIG Diskette Library (Disk #2181)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2181/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2181"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "PC-NAMES"

    Tired of looking through your little black book only to find the
    numbers have faded or are so messy you have no idea what they are?
    Well, you're in luck!  PC-NAMES, a combination mail list manager and
    address book program, stores an unlimited number of names and prints
    many mailing label and report formats.  In addition, it prints
    pocket-sized address books in several sizes and styles.  And it even
    prints address books on both sides of the page.
    
    PC-NAMES features a phone dialer, mailing labels, Rolodex cards,
    automatic sequence by name or zip code, five report formats,
    envelopes, automatic vertical address centering and blank line
    suppression, large five-line address formats, personal and business
    name formats, hot key for individual label or envelope printing, two
    phone numbers per name, portable pocket-size address book, mail merge
    with five levels of salutation defaults, export, import, categories for
    grouping names, duplicate search, documentation on disk,
    user-defined custom label sizes, and support for dot matrix, laser, and
    impact printers.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE2181.TXT

{% raw %}
```
Disk No: 2181                                                           
Disk Title: PC-Names                                                    
PC-SIG Version: S1.3                                                    
                                                                        
Program Title: PC-Names                                                 
Author Version: 1.3                                                     
Author Registration: $18.00                                             
Special Requirements: 512K RAM.                                         
                                                                        
Tired of looking through your little black book only to find the        
numbers have faded or are so messy you have no idea what they are?      
Well, you're in luck!  PC-NAMES, a combination mail list manager and    
address book program, stores an unlimited number of names and prints    
many mailing label and report formats.  In addition, it prints          
pocket-sized address books in several sizes and styles.  And it even    
prints address books on both sides of the page.                         
                                                                        
PC-NAMES features a phone dialer, mailing labels, Rolodex cards,        
automatic sequence by name or zip code, five report formats,            
envelopes, automatic vertical address centering and blank line          
suppression, large five-line address formats, personal and business     
name formats, hot key for indvidual label or envelope printing, two     
phone numbers per name, portable pocket-size address book, mail merge   
with five levels of salutation defaults, export, import, categories     
for grouping names, duplicate search, documentation on disk,            
user-defined custom label sizes, and support for dot matrix, laser,     
and impact printers.                                                    
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## MANUAL.DOC

{% raw %}
```







                           PC-Names (TM)

                          (Version  1.3)










                     Program and Documentation

                         Copyright 1990 by

                            WR Software
                           P.O. Box 4819
                      Walnut Creek, CA  94596








              Permission hereby granted to make exact
                copies of Documentation and program
               diskettes for shareware distribution





                     Effective: July 29, 1990



Introduction

Welcome to PC-Names (TM).  This program is a combination address
book and mailing list manager.  It will store an unlimited number
of names, depending only on the amount of disk storage you have
available.  You can group your names into categories to keep track
of clients, club members, pizza places, or any other grouping that
is important to you.

PC-Names (TM) has unusually large areas for name and address
information.  The flexible address format is designed for U.S. and
Canadian addresses, but works for addresses of almost all
countries.  The mail merge facility has optional salutations, which
can have default or custom greeting options.

The program prints mailing labels (including laser labels), rotary
card files, envelope addresses (with optional return address),
custom size labels, and a variety of "page size" reports.  An
address book can be printed in many sizes from quite small to full
page, with options to print on both sides of a printer page, just
like a real book.  There is also a duplicate name search report,
file import, file export, sort by name and Zip Code, and "hot key"
printing for individual labels and envelopes.

Best of all, the program is easy to use.  It is "menu-driven" so
choices are made from a list of options.  In addition, the bottom
of each display window lists the commands and function keys that
can be used.


Shareware Registration

PC-Names (TM) is a shareware program, so you are encouraged to try
it out and make copies for friends.  If you like the program and
continue to use it, we ask that you become a registered user. 
Registration is only $18 and includes a free upgrade disk, vinyl 
address book cover, printed documentation, and program support.

California residents please add $1.31 Sales Tax.  We provide
information about future upgrades to all registered users.  To
print an Order Form just type ORDER at the DOS prompt.  To
register, send check or money order (sorry, no credit cards) for
U.S. dollars to:

     WR Software
     PO Box 4819
     Walnut Creek, CA 94596
     U.S.A. 

If you decide not to register because the program is missing a
feature that you require, or does not work with your computer or
printer, please let us know.  We want to fix these kinds of
problems whenever possible, so please, take a few minutes and tell
us about them.


Setting Up Disk Files

To use the program you will need DOS 2.1 (or later), and at least
512K of computer memory.  If you have a hard drive, you can use the
HARDDISK install procedure.  This install procedure will create a
directory \PCN on your C: drive, and then move the required files
to this directory.  For HARDDISK installs, put the PC-Names
diskette in your A: drive, type A:HARDDISK, and press <Enter>.

If you have a hard disk drive, but don't want to use C: and \PCN,
then use the DOS "MD" command to create another directory name (for
example, enter MD \DIRNAME).  Next, change to the new directory
(enter CD \DIRNAME).  Finially, enter the following command to
transfer PC-Names to your new directory:
     A:PKUNZIP A:PROGRAM

Floppy diskette users can use the FLOPPY install procedure.  First,
place the PC-Names diskette in the A: drive, and a blank
(formatted) diskette in the B: drive.  The blank diskette should
hold at least 720K, so there is enough room for name data.  Next
type A:FLOPPY and press <Enter>.


Upgrading from Prior Versions

Use the procedures HARDUPGR (for hard disks) and FLOPUPGR (for
floppy diskettes) to install new versions of the PC-Names program. 
To use the automatic upgrade procedure for hard disk systems, your
current PC-Names must be on the C: drive in the \PCN directory.  To
perform this upgrade, put the new PC-Names diskette in your A:
drive, type A:HARDUPGR and press <Enter>.

If you use a hard drive but have PC-Names elsewhere on your system
(not in C:\PCN), then change to the drive and directory where you
currently keep PC-Names. Next, place the new PC-Names diskette in
your A: drive, and enter these two separate commands:
     A:PKUNZIP A:PROGRAM PCN.EXE
     A:PKUNZIP A:PROGRAM SETUP.DAT

For floppy diskette users, put the new PC-Names in your A: drive,
and your current PC-Names disk (the one with your names on it) in
the B: drive.  Next type A:FLOPUPGR and press <Enter>.  After the
"upgrade" is complete, the new PC-Names program will be copied to
your original diskette.  Continue using your original diskette, and
save the new PC-Names diskette for a program backup.


Program Loading

PC-Names (TM) will use the date in your computer to tell you when
names were added or changed on your file, and to show the current
date at the top of your monitor.  If your system asks for the date
when you turn the computer on, you should reply with the correct
current date.

To start the program, floppy users must first insert the newly
created diskette into the A: drive.  Hard disk users must change to
the new directory (type CD \PCN if you used the INSTALL procedure). 
Next, both floppy and hard drive users should type PCN and press
<Enter>.


Main Menu

The main menu is a list of things you can do with the program.  You
can use the left and right arrow keys to select the item you want,
and then press <Enter> to start it.  You can also select menu items
by pressing their first letter, which moves the highlight to that
item, and then <Enter>.  For example, press "v" or "V" to highlight
"View" and then <Enter> to select "View."  

In addition, two menu items can be called by function keys in many
places throughout the program.  These menu items are:
 
     Categories (press F6)
     Initialize (press F9)


HELP

There is a main menu choice called "Help" that provides a very
brief overview of the program.  For those familiar with computer
programs, this may be all the help needed to get started.  In
addition, the bottom of each display window has a command summary. 
These shorthand reminders list most of the specific commands and
function keys that can be used with the current window.


Getting Started

When you select "Names" on the main menu, you will see a list of
the names in your file.  If your file doesn't have any names in it
yet, then instead of a list, you will see a window that lets you
add the first name.  The "Name" record holds the name, address,
phone numbers, and other miscellaneous information for a person or
business.

When you select "Categories" you see a list of the categories that
have been defined.  If your file doesn't have any categories, then
instead of a list, you will see a window that lets you add the
first category.  A category is a sub-group for your "name" records,
and it consists of a single letter and the corresponding
description of the category.

The "Views" option lets you look at the names in one category. 
Choose "Print" to see a sub-menu listing all the report options. 
The "Initialize" option lets you choose the category to "View" or
"Print," as well as the title for reports.  Choose "Setup
Utilities" to tell PC-Names about your computer system and desired
report styles, and to choose Import, Export, and Mail Merge.


Adding Information

Adding either a new name, or a new category, is done in a similar
way.  The first step is to choose the list you wish to update.  For
example, choose "Names" to see an alphabetical list of the names on
your file.  If there are no names on the file, the program will
automatically "bounce" to the window used to add a name.  This is
true for all "list" windows: if there are no items in the list, the
program goes right to the "add" window.

If there are names on the file, they are shown in an alphabetical
list.  To add to the list, press the <Ins> key to transfer to the
"add" window ("Ins" is the abbreviation for "insert").  Be sure the
"Num Lock" is not depressed, as this converts the <Ins> key to the
number zero.  The <Ins> key can be pressed from the top of the
list, or any point in the list, regardless of what name you want to
add.  The name will be automatically placed in its correct
alphabetical position.  You can add any number of names before
returning to the list.

The "add" window is used to type in data in order to put it on your
file.  After typing a given field, press the <Enter> key to move to
the next field.  For example, after typing "Bill" into the "First
Name" field of the name record, press <Enter> to move to the "Last
or Business Name" field.  You can skip a field by pressing the
<Enter> key, or using the DOWN arrow key.  You can move to a prior
field with the <Esc> key or the UP arrow key.  If you are in the
middle of typing a new field, the <Esc> key will move to the start
of the field and delete what you just typed.  If you are on the
first field shown, the <Esc> key will take you to the prior window.

Once you have keyed all the data for the record, hold down the
<Shift> key and press the <Enter> key.  This will update your file
with the new record.  You can use Shift<Enter> to update from any
point on the display.

If you decide after typing some data that you do not want to add
the record, hold down the <Shift> key and press the <Esc> key. 
This will cause the program to return to the prior list window,
without saving anything that you have just typed.

In summary, use <Enter> after keying some data (like "First Name")
to register that piece of data; or use <Esc> to remove what you
have just typed and start over at the beginning of the field. 
Similarly, use Shift<Enter> to update an entire record (name,
address, etc.); or use Shift<Esc> to skip updating, and return to
the prior list window.  You can think of it as "small" <Enter> adds
one field, while "capital" <Enter>, or Shift<Enter>, adds an entire
record (a record is a group of fields).  Similarly, <Esc> stops the
change to a field, while Shift<Esc> stops the changes to a record.


Changing Records

The records for names and categories are revised in the same way. 
The first step is to choose a list of the items you wish to update. 
For example, choose "Categories" on the main menu to see a list of
the categories on your file.  To change an item on a list, first
position the highlight bar on the item to be revised, then press
<Enter>.  You can use the down arrow key to move the highlight bar,
and the <PgDn> key to see a new "page" on a long list.

You can also type the first few letters of a name into the "Find"
area (top of the "Names" list), to locate a specific name when your
list gets longer.  To get to "Smith" on a list with thousands of
names, begin by typing the first few letters of "Smith."  For
example, you might key in "smi" and then press <Enter>.  If the
name you want still doesn't appear, you can key in more letters,
and press <Enter> again.  Stop typing when the name "Smith" appears
on the screen, and use the down arrow key to move the highlight bar
to the name.  The search is not case sensitive, so it is not
necessary to type an uppercase "S" to find "Smith."

Once the highlight bar is positioned over the item you wish to
change (say "Smith, Robert A."), press the <Enter> key and the
program will display the "change" window.  This window shows all
the information about the name you selected.  The "change" window
is identical to the "add" window, so the same keys will move the
cursor and let you make changes.  The bottom of the window shows
the command and function keys that can be used.  Again, use
Shift<Enter> to update the record with your changes.  If you use
Shift<Esc>, the record will not be revised, even after you type
changes to some of the values.


Deleting Records

Names and categories are deleted in the same way.  The first step
is to choose the list which has the item you wish to delete.  For
example, choose "Names" on the main menu to see a list of the names
on your file.  To remove a name from your file, position the
highlight bar over the item, and press the <Del> key (the "delete"
key).  The program will display the "delete" window.  You will see
the details for the selected item, along with the message "Press
Enter to confirm delete."  If you press <Enter>, the item is
removed permanently from your file, and no longer appears on the
list.  If you press any other key, you will return to the list, and
the item will not be deleted from your file.
Categories

Use a "category" to group names that have something in common.  For
example, you might want to assign people in your Bridge club into
a "B" category.  Then you can use the "B" category to print a phone
list of just club members, or to print mailing labels for party
invitations to a club function.  With the VIEW function, you can
see a list window with just Bridge club members, or any other
category you select.

Before you can use a category, you must first define it.  To define
a category, choose "Categories" from the main menu, or use the F6
"Categories" function key from elsewhere in the program.  When you
select "Categories," the first thing you see is a list of
categories that have been defined previously.  For example, you may
see "S" and "Software Companies" in the data supplied with the
program.

If no categories have been setup, the program will "bounce" to the
window where you can add a new category.  If you are on the list of
categories, press the <Ins> key to move to the window for adding
new categories.  Now you can type any letter, number, or other
symbol to represent the category.  Whenever possible, you will want
to use the first letter of one of the words used to describe the
category, to help you remember it.  For example, use "P" for "Pizza
Delivery Places."  Next type the description of the category, then
press <Enter> to save the category definition.

You can change or delete categories just like other records.  To
change a category, move the highlight bar to the desired category
and press the <Enter> key.  To delete a category, move the
highlight bar to the item and press the <Del> key.

After adding a category, you can assign names to the new category
as you add the names, by typing the category letter into the
"Categories" place on the "Names" add window.  You can also add
categories to existing names, by using the "Names" change window. 
The "Categories" area can hold up to eight different categories. 
So, each name on your file can belong to as many as eight different
groups that you define.  For a given name, if you try to add a
category that has not been defined yet, the program will give you
a warning "beep" and display an error message.

If you forget a category, or want to define a new one, while adding
or changing names, just press the F6 "Categories" function key. 
The "Categories" list window will display the current categories
and definitions, and you can press <Ins>ert to add a new category.
Names

The "Names" option is used to display your names, and then add,
change or delete name information.  The names list shows an
alphabetical listing of all the names in your file, one "screen
full" (or "page") at a time (see "Getting Started" above for more
information about the names list).  Besides the names, the screen
shows either phone number or address information.  Press the F7
function key to switch between "phone numbers" and "addresses." 
You can also switch from the "alphabetical" order to a "ZIP Code"
sequence on the names list by pressing the F8 function key.

From the names list, press the <Ins> ("insert") key to add a name. 
To change a name, first select the name and then press <Enter>. 
Delete a name by selecting the name, and then pressing the <Del>
("delete") key.  To locate a name on a long list, key in the first
few letters of the "last" or business name, and press <Enter>.  Use
the DOWN and UP arrow keys to move through the list of names.  Use
<PgDn> and <PgUp> keys to see the next or prior "page" of names. 
Press <Home> to select the top name on the screen, and <End> to
select the bottom name on the screen.  Press Ctrl<PgDn> to move to
the bottom name on the list, and Ctrl<PgUp> to move to the top name
on the list.

When adding or changing names, the screen shows the various types
of information that can be kept for a person or business (name,
address, phone, notes, etc.).  For a person, you can enter a
"Title" (Mr., Mrs., etc.) if you wish, and put their given name or
nickname (Robert, Bob, etc.) in the "First Name" area.  Place their
surname in the "Last Name" area.

If a record is for a business, leave the "Title" and "First Name"
areas blank, and put the name of the business in the "Last Name"
area.  If the record is for a particular person at a business, you
could put "Attn: Joe Smith" in the first "address" line. 
Alternatively, you could put the person's name in the name area,
and the name of the business in the first "address" line.  Which
technique is best to use depends on whether you want to find the
record by the name of the person, or by the name of the business. 
Put the name you will use to find the record in the "Last Name"
area. 

Since the file is alphabetized on the "Last or Business Name"
field, you may occasionally want to split a business name between
the "First" and "Last" name fields.  For example, if you put "The
JC" into "First Name" and "Penny Company" into "Last Name," then
the record would appear with the "P's" using "Penny Company" but
"The JC Penny Company" would print as the first line on address
labels.  Be sure and leave "Title" blank for all business names.

If the name record is for a person, couple, or family, then the
"Title" is used for "Ms." or "Mr. and Mrs." etc. ("Title" is
optional).  The "First Name(s)" area can be used for the first name
and/or initials of one or more persons.  When printing address
labels, the program will not show the "and" or "&" (and what
follows it) from the "First Name(s)" field, if you put something in
the "Title" field.

For example, let's say you entered "John and Sue" into the "First
Name(s)" field and "Smith" into the "Last Name" field.  If you put
"Mr. and Mrs." in the "Title" area, the program will print address
labels without "and Sue" as follows:
     Mr. and Mrs. John Smith
If the "Title" is left blank, the same address label would print as
follows:
     John and Sue Smith
For this reason, you will usually want to enter the man's name
first for a married couple if a "Title" is also entered, in order
to avoid printing labels that say:
     Mr. and Mrs. Sue Smith

If all this sounds confusing, there is a program feature that will
help by showing you the result of all these formatting rules.  Just
press the F7 function key after entering the name, and the name
will be shown in the address label or envelope format.

The "Address" area has three lines with 33 spaces each, to provide
for almost any conceivable address format.  You can leave any of
these lines blank, and the program will discard the blank lines
such that a normal looking address label will be printed. Again,
the F7 key will display the final format.

For U.S. and Canadian addresses, you should use the "City State
Zip" fields.  However, these fields can be left blank for addresses
that don't fit this format.  If you want to print labels in Zip
order, then you must put the Zip Code into the "Zip" area.  The
"Zip/Country" field can also be used for Canadian, British, and
other Postal Codes, as well as the "country name" for "foreign"
addresses.

The "Categories" field is used to put a name into one or more of
the category groups you have defined.  Each name can belong to up
to eight different category groups.  See the CATEGORIES section of
this document for more information about defining categories.  The
program checks to see if the categories you enter here have been
previously defined.  If the categories are not defined, there is a
warning beep, an error message is displayed at the top of the
screen, and the program will not save the name record until the
category is corrected.  When adding names, you can use the F6
"Categories" function key to define a new category or see a list of
categories you have already defined.

The "Salutation" field is used when mail merge files are created,
if called for by the "Setup1" function.  Use "Salutation" to put
names after the word "Dear" at the start of a letter.  For example,
you might put "Bill," into "Salutation," so letters begin with
"Dear Bill," and still put "William" into "First Name" so mailing
address labels print as "Mr. William Jones".  You may want to
include the "Dear" and/or the final punctuation mark with the
salutation, depending on how your word processor is set up for mail
merge.  For example, a salutation can be set up as either "Dear
Bill," or "Bill" (use "Bill" if the word processor supplies the
"Dear" and the ",").

If you leave "Salutation" empty, the program will create one for
mail merge files using the "Title" and "Last Name" (for example,
"Mr. Jones:").  If the "Title" and "Salutation" are both blank, the
program substitutes "Sir or Madam:" when mail merge files are
created.  A colon (:) is supplied as the final punctuation mark
whenever the program "creates" a salutation.  See the "Setup1"
section for additional "default" salutation rules.  You can use the
F7 function key to see the salutation format that will be used for
any particular name.

The "Notes" area can be used for miscellaneous comments, extra
phone numbers, etc.  This area works like a simple word processor. 
It has "word wrap" which lets you keep typing at the end of a line,
and move automatically to the next line without dividing words in
the middle.  You can use the <Ins> and <Del> keys to insert and
delete words.  The arrows underneath the Notes line show where
"Book" printing will divide the line, because the full line will
not fit the address book format.

Sometimes, when you are entering data, you will want to skip over
some of the fields.  For example, you may be entering names that
don't have phone numbers.  In this case, after keying the last
name, use the F5 Skip key instead of <Enter>.  This will cause you
to skip the phone fields and move directly to the address
information.  In general, use F5 Skip to move quickly through the
name fields.
Initialize

The Initialize function is used to specify the category (sub-group
of names) to PRINT on a report or VIEW on your monitor, as well as
the title for reports.  The category and title are easy to change.

For example, if you're about to print a phone list report from the
"Print" menu, the category and title will be displayed.  If you
wish to change them, press F9 to bring up the Initialize "window,"
key in the new category and title, and press <Enter> to return to
the "Print" menu.

The "Category" entered on the Initialize window selects the names
to PRINT or VIEW.  To choose all the names in your file, key a
space into the "Category" field on the Initialize window.

Views

Choose "Views" to see the names in a single category.  The "Views"
list is similar to the "Names" list, except that you can choose to
see only the names in one category.  Use the F9 Initialize key to
select the category.  Once the names are displayed, you can key the
first few letters of a name into "Find" to locate a particular
name.  You can also move down through the list with the down arrow
and PgDn keys.  Hold down <Ctrl> and press PgUp to return to the
start of the list.

You can use the F8 Change Order function key to change the sequence
from alphabetical by name, to Zip code sequence.  When you press F8
the words "Zip Order" appear at the screen top and the names appear
in Zip Code sequence.  In the "Zip Order" you can key in the first
part of a Zip Code to locate names on the list.  In the "Zip
Order," names are shown alphabetically only if they have the same
Zip Code.  Press F8 again to return to the alphabetical name order.

After the word "View" in the screen title is the category letter
that you have selected.  The top of the name column has a
description of the category.  You can add, change, and delete names
just like on the "Names" list.  However, if you add a name, it will
only appear on the "Views" list if you remember to assign the same
category to the name as you selected for viewing.  

You can use "Views" in a variety of ways.  For example, you might
want to see a list of pizza places that deliver, so you can order
a pizza.  Or you might have a customer who wants to know which of
your dealers is closest to where he lives.  To locate the dealer,
first select the category for dealers, and then press F8 for Zip
Order.  Finally, key a portion of your customer's Zip Code into
"Find" to locate the nearest dealer.Print

Choose "Print" on the main menu to see a list of report, book,
label, envelope, and rolodex printing options.  All program outputs
can be sent to dot matrix, laser, or letter quality printers (use
"Setup1" to choose which type).

Use the F9 "Initialize" key to change the "Title" and "Category"
from the PRINT window.  The "Title" prints at the top of each page
on reports, or on the first address label.  If you enter a
"Category" it will limit the printing to just names in that
category (a description of the category prints at the top of each
page).  If the "Category" is left blank, then all the names on your
file will be printed.

To begin printing, use the arrow keys to highlight the desired
output on the "Print" menu, and press <Enter>.  While the printer
is running, you can press <Esc> to suspend the printing, and then
decide whether to resume or quit printing.

The "Names & Phones" report will print names with home and work
phone numbers.  The three reports shown under "Names & Phones"
each add more information to the reports.  For example, "Address +
above" shows address data as well as name and phone.  The "Misc. +
above" shows categories, salutation, and date updated, as well as
name and phone data.

The "Duplicates" report shows names that may be repeated on your
file.  It will print only those names that match on the first 17
letters of last name, the 1st 5 letters of first name, and the Zip
Code.

The "Book" selection prints an address book in a variety of sizes
and with many other options.  See the "Setup2" section of this
documentation for an explanation of these options.  From the PRINT
window you can use the F8 "Setup2" function key to change these
book options.

Choose "Mail Labels" to print address labels.  Use the F7 "Setup1"
function key on the PRINT menu to choose the label format, the
width of the label, and the number across the printer.  If you
always use the same labels, you only need to enter the setup values
the first time.  You can also "setup" the label sequence to be in
name or Zip order.  All "setup" values can be revised at any time. 
Labels can be 1, 2, and 3 across the printer, as well as in
regular, compressed, or laser formats.  Labels printed with the
"Mail Labels" option must be 15/16 inch high.

Align continuous form (pin feed) labels for printing by using the
F3 "Print Label" function on the "Names" list window.  Just choose
"Names" on the main menu, then highlight any name and press the F3
function key to print a label for the highlighted name.  It is best
to select a label with 4 or 5 address lines, to ensure proper
alignment.  Repeat this process until the labels are printing
correctly.  This is also a good way to select a small number of
names for printing on mailing labels, or to print a few envelope
addresses using the F2 "Envelope" function key.

The "Envelope" and "Custom Labels" options are used to print
address information on envelopes and labels of any size.  These
options also need "setup" values.  The "Indent Address" value sets
the number of spaces to the left of the address lines for return
address or addressee.  The "Lines high" is the number of lines from
the top to the bottom of the label or envelope.  If a printer
outputs 6 lines per vertical inch (the most common value), a
standard 4 1/6 inch high business envelope would need a "lines
high" value of "25" (lines).

Rolodex cards can be printed in the two most common sizes.  From
the Print menu, choose "Rolodex 2 1/6" to print 2 1/6 by 4 inch
cards, or "Rolodex 3" to print 3 by 5 inch cards.  Both card types
print name, address, and phone number information.  The larger 3 by
5 inch size also prints "Notes" information for each name.
Setup/Utilities

The "Setup" functions are used to define your computer environment
and personal preferences.  Typically, most of these "setup" values
are entered the first time you use PC-Names, and left unchanged as
you use the program in the future.  The "Utilities" functions
include Mail Merge (send names and addresses to your word
processor), Import (load name data from another program), and
Export (send name data to another program).

Setup 1

The "Setup 1" display is used to enter values that tell PC-Names
how you want various things handled.  These setup values can be
changed at any time, and may require some "experimenting" to set
the values that work best with your system.

PRINTER DEVICE NAME: You can use this value to switch your printing
between printers (if you have more than one), or to route printing
to a DOS disk file name.  Most people have a single "parallel"
printer, and should enter either LPT1 or PRN in device name.  Use
COM1 for most "serial" printers.

PRINTER TYPE: The "Type" of printer you have is important for book,
label and envelope printing.  For other reports the type printer
does not matter.  This is because books can be printed in
"compressed" format, envelopes are rotated for laser printing, and
labels must be aligned differently for laser and compressed
printing.

Enter printer Type "1" or "3" for Dot Matrix printers (either value
works for most dot matrix printers, but try the "other" if you have
problems).  Use printer Type "2" for laser printers, and set your
printer to a "HP LaserJet II" compatible mode.

If none of these settings works with your printer, then choose
printer Type "4" (Other).  This is a "custom setup" mode that lets
you enter specific codes from your printer manual to get
"compressed" (small) size letters and "8 lines per inch" (vertical)
line spacing.  The first part of each "custom setup" code usually
requires an "escape" code, which must be entered between special
symbols, as follows: <27> (note: these symbols are usually found on
your keyboard above the "comma" and "period").  Any codes that you
enter as "decimal" values must be between these special symbols
(for example, <27><48> is a common pair of codes).  It is easier to
use the actual character instead of the "decimal equivalent"
whenever possible (for example, use <27>2 instead of the equivalent
<27><50>).  After printing labels or address books that use these
special codes, you will need to turn your printer off to clear
them, or they will affect subsequent printing.

MODEM: If you have a Hayes compatible modem, you can have PC-Names
dial phone numbers for you.  Specify your telephone type (touchtone
or rotary), modem port number, and speed.  Then from the Names or
View list, select the person you wish to dial, and press the F10
"Dial" key.  You can also dial from the name window.
 
LABEL/ENVELOPE SEQUENCE: The sequence for standard labels, custom
labels and envelopes can be set to name or Zip order.  Use "1" for
name sequence, and "2" for ZIP Code sequence.

MAILING LABEL FORMAT: You can define the size and number across the
printer of the mailing labels you are using.  The "Normal" formats
work with all printers except lasers.  The "Compress" formats
require a dot matrix type of printer, while the "Laser" format
works with laser printers set to the HP LaserJet II mode.

MAIL MERGE: You can choose whether or not to include a salutation,
when a mail merge file is created for your word processor.  The
salutation is used with the word "Dear" at the top of each letter,
as in "Dear Bill,".  If you choose to have a salutation included,
the program will use the value you put in the "Salutation" area of
the name record.  If the "Salutation" in the name record is left
blank, the program builds a salutation (see the "Names" section for
details).

You can also specify a universal default salutation (for name
records that don't have a salutation), such as "Friends,".  You can
also specify that the "default" value be used every time, and
override the salutation in the name record, if any.

WHEN ADDING NAMES: When adding a lot of names, you can often save
keying time by using some of the information from the prior name. 
For example, sometimes many names have the same City, State, and
Zip code, or you may wish to assign them to the same categories. 
Answer "Y" for "Yes" to use the data from the previous name,
instead of a blank "add" screen, when adding more than one name.

IF REGISTERED: If you have registered PC-Names, enter the name and
serial number exactly as shown in the registration letter.  This
will prevent the "registration information" window from appearing
as you use the program.

Setup 2

The "Setup 2" display is used to enter values that tell PC-Names
how you want various things handled.  These setup values can be
changed at any time, and may require some "experimenting" to set
the values that work best with your system.

ENVELOPES/CUSTOM LABELS: Custom size labels and envelopes require
an "Indent Address" value.  This is the number of spaces from the
left edge of the form to the addressee, thereby positioning the
address correctly on the label or envelope.

You must also indicate the "Lines high" (form height).  This is the
number of printer spaces or lines from the top to the bottom of the
label or envelope.  For example, a standard size business envelope
is 4 1/6 inches high (or wide) and most printers put 6 lines per
vertical inch, or 25 lines in 4 1/6 inches; so the "Lines high"
value for this envelope is 25.  Two inch high labels have a "Lines
high" value of 12 (2 inches multiplied by 6 lines per inch).

ENVELOPES: You can choose to print a "return address" on each
envelope as you print the "addressee."  Enter the "Indent Address"
value that positions the "return address" near the left edge of
your envelopes.  The number of spaces to the left of the "return
address" may be quite large depending on your printer and the size
of the envelopes you are using.  You can enter up to 5 lines of
name and address information to be printed in the "return address"
portion of your envelopes.

ADDRESS BOOK: The rest of the Setup values are for address "Book"
printing.  Many of these values must be established by trial and
error, as they vary between individual printers and the size and
type of address book desired.

PRINT PAGES ON BACK SIDE: You can choose to print an address book
on the "back side also" so that every other "book" page is not
blank.  If printing both sides, first all the front sides are
printed, then you must turn the pages over and feed them through
the printer again to print the back sides.

COMPRESSED: Choose this option to print with the smaller printer
type size (approximately 17 letters per inch), which will result in
smaller address book "pages."  Dot matrix or laser printers are
required if you choose the compressed format.  

LEFT MARGIN: This value increases the space to the left of the
left-hand book page.  The "Left Margin" value can be used to center
the book pages (equal left and right margins), so that "back side
also" printing will align correctly, with the page fronts on top of
the backs.  This has to be somewhat by trial and error, but once
the right setting is found, no further adjustments are required.

TEXT LINE WIDTH: This value controls the width of the area where
the name, address, phone, and notes will print.  If this area is
wide enough, phone numbers will print on the right side of the same
line that has the name and address.  For best results, make the
"text line width" as wide as possible, without exceeding the width
of your address book cover or printer carriage width.

BOOK PAGE MARGIN: The "Book page margin" refers to the smaller book
pages that print two across each printer page.  The "Margin" is on
the left side if you choose "Left" binding (see below), and in the
middle between the pages if you choose "Center" binding.  This
value will change the width of the book pages that are printed. 
The two "Book page margins" and "Text Line Widths" (one each for
left and right hand side pages) plus the "Left Margin," must not
exceed the width of your printer paper.  There is a warning tone
and error message if these combined values are too large.

PRINT LINES PER INCH: You can choose to print the book at either 6
or 8 lines per inch (vertical spacing).  This value and the "Lines
per book page" (see below) determine the "height" of the book.  The
program will print as many book pages as will fit on each sheet of
printer paper.  This can be as many as 8 book pages on each side of
an 8 1/2 by 11 inch sheet of printer paper.

BIND PAGES LEFT OR CENTER: This option affects the basic style and
page numbering of the book.  The "Left" option puts the margins on
the left side of each page.  This option requires you to cut
between the two book pages that are next to each other, and then
staple or hole punch all the pages on the left side.  With the
"Center" option the margins are in the middle, so you should cut
around the outside of the left and right pages, and then staple
pages in the middle between the two pages.  With the "Center"
option, don't cut between the left and right hand side pages. 

LINES PER BOOK PAGE: This value determines the total number of
lines on each "book" page.  "Lines per page" includes name and
address lines, as well as the blank lines at the top and bottom of
each page.  This value and the "Print lines per inch" value
described above, determine the "height" of the book. 

START NEW PAGE WHEN 1ST LETTER CHANGES: This option causes a new
book page to start when you change from the "A" names to the "B"
names, and so on.  Otherwise, printing will continue without
starting a new page for the next letter of the alphabet, which
results in fewer pages in your (smaller) address book.

PRINT PHONE NUMBERS, ADDRESS, NOTES: This option lets you choose
whether or not to print phone number, address, and note information
for each name in your address book.

Mail Merge

The "Mail Merge" selection creates an ASCII file with the name
MERGE.FIL to be used with your word processor.  The "Category"
value determines which names are put on the file.  Use the F9
"Initialize" function key to change the category, or to select the
"blank" category for all names.

Each name placed on the MERGE.FIL will have five lines of name and
address information.  Most names will probably have some blank
lines, since not all the address lines will be filled.  There is an
optional sixth line for salutation, which is present if called for
in the "Setup1" area.  See the salutation section of "Setup1" and
"Names" for more information.

Export

The "Export" selection creates an ASCII file with the name
EXPORT.FIL to be used with other software programs.  The "Category"
value determines which names are put on the file.  Use the F9
"Initialize" function key to change the selection category, or to
select the "blank" category for all names.

For each selected name record, the "Export" function creates a
"comma delimited ASCII" file record (also called a Data Interchange
File, or DIF).  This is the most common format for exchanging data
between different programs, and should work with most other
software.

Import

The "Import" function loads a file of names into this program.  The
"Category" value has no effect on this function.  The file name
must be IMPORT.FIL, and the format must be identical to the
"Export" file described above.  The expected sequence of data
fields and their maximum lengths is as follows: TITLE (12), FIRST
NAME (20), LAST NAME (33), ADDRESS LINE 1 (33), ADDRESS LINE 2
(33), ADDRESS LINE 3 (33), CITY (18), STATE (2), ZIP CODE (10),
HOME PHONE (15), WORK PHONE (15), EXTENSION (4), SALUTATION(20),
CATEGORIES (8), and NOTES (128).

MISCELLANEOUS ITEMS

Phone Dialing

You can automatically dial the phone numbers of names on your file. 
Just highlight the name on the NAMES or VIEWS list, and press the
F10 Dial function key.  You can also dial from the name record
itself.  After pressing F10, press "H" for home phone, or "W" for
work phone.  To use "autodial" your computer must have a modem, and
it must be defined using "Setup1."

Monitor Problems

If you have trouble seeing some of the displays or fields with a
laptop or monochrome monitor, try keying MODE BW80 before starting
the program.  On color monitors a slight adjustment of the color
intensity "knobs" on the monitor itself, will often clarify faint
or invisible information. 

Screen Protection

If you don't press any keys for a period of 10 minutes, the program
will blank your display monitor.  This protects your monitor from
having a pattern "burned" into the display.  To see the display
again just press any key, and the program will re-display what you
were using before the monitor went blank.  To avoid this feature,
start the program by keying "PCN V=0" (zero) and pressing <Enter>.

Warrantee Disclaimer

WR Software makes no warrantee concerning the function or fitness
of this documentation or the corresponding program, and shall have
no liability or responsibility to any recipient with respect to any
liability, loss, or damage, directly or indirectly arising out of
the use of the documentation and programs, including but not
limited to, any loss of business or other incidental or
consequential damages.
```
{% endraw %}

## SETUP.DOC

{% raw %}
```
The PC-Names program has been provided in an archived form in order
to save space. Before using, put PC-Names in your A: drive, and:

With a 2-floppy system:

  1) Put a blank (formatted) disk in the B: drive
  2) At the A> prompt, type:  PKUNZIP PROGRAM B:  and press <Enter>
  3) Put the blank disk in the A: drive, type:  PCN  and press <Enter>

With a hard disk system:

  1) Prepare a subdirectory for the data      C> MD \PCN
    (PCN can be any name, but PCN works
     best with future upgrades)

  2) Go to that new subdirectory              C> CD \PCN

  3) Issue the command                        C> A:PKUNZIP A:PROGRAM

  4) To start PC-Names, issue the command:    C> PCN

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2181

     Volume in drive A has no label
     Directory of A:\

    PROGRAM  ZIP    167249   7-24-90   3:25p
    PKUNZIP  EXE     22022  10-01-89   1:02a
    ORDER    BAT        21   2-26-89   7:22p
    GO       BAT        17   7-28-90  10:52a
    HARDDISK BAT       903   7-28-90  11:06a
    HARDUPGR BAT      1134   7-28-90  12:28p
    FLOPPY   BAT       840   7-28-90  12:51p
    FLOPUPGR BAT       978   7-28-90  12:29p
    ORDER    FRM      1208   7-24-90   3:40p
    READ     ME       1202   7-28-90  12:55p
    SETUP    DOC       707   7-28-90  10:43a
    MANUAL   DOC     43100   7-29-90   1:45p
    FILE2181 TXT      2443   8-14-90   5:32p
           13 file(s)     241824 bytes
                           72704 bytes free
