---
layout: page
title: "PC-SIG Diskette Library (Disk #2762)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2762/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2762"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## FILE2762.TXT

{% raw %}
```
Disk No: 2762
Disk Title: Gleaners Index
PC-SIG Version: S1

Program Title: Gleaners Index
Author Version: 2.0
Author Registration: $15.00
Special Requirements: None.

GLEANERS INDEX is an index of National Geographic articles, January 1957
through October 1990, to be searched, edited, and printed.  Search for
any keyword in the People, Place, Event, Animal, Vegetable, or Object
categories.  List the titles of all articles using the keyword as well
as the volume, number, month and year of publication.  GLEANERS INDEX
works easily and permits new databases to be written.

PC-SIG
1030D East Duane Avenue
Sunnyvale  Ca. 94086
(408) 730-9291
(c) Copyright 1991 PC-SIG, Inc.
```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║            <<<<  PC-SIG Disk #2721 GLEANERS INDEX  >>>>                 ║
╠═════════════════════════════════════════════════════════════════════════╣
║                                                                         ║
║ To run the program, type: GLEAN  (press Enter)                          ║
║                                                                         ║
║ To print documentation, type: PRINTDOC  (press Enter)                   ║
║                                                                         ║
║                                                                         ║
║                                        (c) Copyright 1991, PC-SIG Inc.  ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## HELP1.TXT

{% raw %}
```
              GLEANERS INDEX
                 WINDOWS 
╔═════════════════════════════════════════════╗
║             #1  TITLE WINDOW                ║
╚═════════════════════════════════════════════╝
╔═════════════════════════════════════════════╗
║                                             ║
║            #2 ACTION WINDOW                 ║
║                                             ║
╚═════════════════════════════════════════════╝
╔═════════════════════════════════════════════╗
║           #3 KEY SELECTION WINDOW           ║
╚═════════════════════════════════════════════╝

Window #1 is the title window.  In it will be 
the program name and the selection title. 

Window #2 is the action window.  It will either
contain a menu or it will be where records are 
displayed, edited, deleted, added or searched 
for. 

Window #3 is the key selection window.  This 
window will display active keys and what they 
do. 

                  SPECIAL KEYS 

F1 - The F1 key is the Help Key and it will 
activate a help window which corresponds to the 
screen you are viewing.  You may use the PgUp, 
PgDown and ESC Keys to view the help file or 
exit the help file. 

ESC - The ESC key will always bring the program 
back to the previous step in the program. 
Examples: if you are printing a category it 
will stop the printing, if you are at the main 
menu it will exit the program. 

                 MAIN MENU

Gleaners is a database for use in categorizing
magazine collections, to allow easy access to 
information. 

The six categories in which articles can be 
grouped are as follows. 

Category 1 - People
Category 2 - Places 
Category 3 - Events 
Category 4 - Animals 
Category 5 - Vegetable or Vegetation 
Category 6 - Object 

These categories correspond to record files in 
which the data is stored.  Example,  category 1 
information is stored in file Cat1.rec. 

The Main Menu has 5 selections. 

SELECTION: 

1. Search for a subject - searches record files 
for a subject matter which is input by the user 
and lists the volumes where the articles can be 
found. 

2. Display a category - Allows scrolling thru 
a category file. 

3. Print a category - Will send the entire 
contents of the category file to the printer in 
catalogue format. (password is required) 

4. Edit a category - Allows the editing, 
deleting and adding of records to a specific 
category. A maximum of 200 records can be 
edited or added at any one session. (password 
required) 

5. Add records - Allows the adding of records 
to all categories.  A maximum of 200 records 
can be added at any one session. (password 
required) 

<ESC> - EXIT PROGRAM

F1 - HELP

Password Protection

Password protection is a single word system.  
Please read the documentation for the password. 

```
{% endraw %}

## HELP2.TXT

{% raw %}
```

                  CATEGORY MENU

Selections 1 thru 6 are used in Searching, 
Displaying, Printing and Editing of records
in specific category files.

Selection 7 (All Categories) can be used when 
Searching or Printing categories.

The  /  key - is used to toggle the output to
the screen or the printer.  The printer output 
is allowed for Searching and is automatically 
set when printing a category. 

<ESC> - Main Menu

F1 - Help
```
{% endraw %}

## HELP3.TXT

{% raw %}
```

                   ADD RECORDS

Records can be added to any category.  There is 
a maximum number of 200 records which can be 
added at any one session.

THE POINTER -  >>>


SELECTION KEYS

F1 - Help Key

F7 - Edit Key - Starts the editing of the record
at the pointer. 

F9 - Add Key - Starts the add records mode.  
Records are added continuously until the ESC key 
is pressed.  The record at the pointer upon 
quitting is not recorded 

F10 - Delete Key - Toggle key for deleting or 
undeleting a record at the pointer.  A deleted 
record will have a "D" next to the record.

<ESC> - Escape Key - Ends the add record 
session. The records are then sorted and 
recorded in the appropriate category file.


SCROLL KEYS

Up Arrow & Down Arrow - Moves the pointer
either up or down through the displayed records,
one record at a time.         

PgUp & PgDn - Moves the pointer either up or 
down through the displayed records, one page at 
a time. 

Home - Moves the pointer to the first record. 

End - Moves the pointer to the last record. 


EDITING KEYS

Left Arrow & Right Arrow - Moves the cursor left 
or right one character.

Home - Moves the cursor to the beginning of the 
word, number or date.

End - Moves the cursor to the end of the word, 
number or date. 

Ins - Inserts a space between two characters at 
the cursor.

Del - Deletes a character at the cursor.

Back Arrow - Deletes one character back.

Enter - Accepts the field and moves to the next 
field or if on the date field it moves to start 
of the next new record. 

Esc - Quits to the Selection Screen.  The 
record at the pointer is not recorded.


FIELD LIMITATIONS

CATEGORY - A number between 1 & 6 must be 
entered as a category.  The field cannot be left 
blank.
               Categories

               1. - People
               2. - Place
               3. - Event
               4. - Animal
               5. - Vegetable
               6. - Object

TITLE - Any character is accepted.  The field 
cannot be left blank.

VOL. - Any number between 0 & 999 may be 
entered.  The field cannot be left blank.

NUM. - Any number between 0 & 9 may be entered.  
The field cannot be left blank.

DATE - Any date up to the year 2999 is accepted.  
The date is entered as MM/DD/YYYY.
The MONTH is 2 numbers.
The DAY is 2 numbers.
The YEAR is 4 numbers.
The Date Field may be entered with or without 
slashes.  The Date is checked for a valid date 
when the enter key is pressed.

RECORD ENTRIES 

After you have entered the desired data to a 
field Press ENTER to move to the next field. 

********************************************** 
                 IMPORTANT

You must press ENTER after the date field to 
finish the record you are working on.  If you 
press the ESC key at any field including the 
date field the record will be lost. 

Press ESC to end a record entry session. 
 

```
{% endraw %}

## HELP4.TXT

{% raw %}
```

                DISPLAY RECORDS

The category file can be viewed using the scroll 
keys. 

SELECTION KEYS

F1 - Help Key

<ESC> - Escape Key - Ends the scroll records 
session. 


SCROLL KEYS

Up Arrow & Down Arrow - Moves either up or down 
through the displayed records, one record at a 
time.         

PgUp & PgDn - Moves either up or down through 
the displayed records, one page at a time. 

Home - Moves to the first record. 

End - Moves to the last record. 

```
{% endraw %}

## HELP5.TXT

{% raw %}
```

                   EDIT RECORDS

Records can be added, deleted or edited to the 
selected category.  There is a maximum number of 
200 records which can be added or edited at any 
one session. 

THE POINTER -  >>>

SELECTION KEYS

F1 - Help Key

F7 - Edit Key - Starts the editing of the record
at the pointer. 

F9 - Add Key - Starts the add records mode.  
Records are added continuously until the ESC key 
is pressed.  The record at the pointer upon 
quitting is not recorded.

F10 - Delete Key - Toggle key for deleting or 
undeleting a record at the pointer.  A deleted 
record will have a "D" next to the record.

<ESC> - Escape Key - Ends the add record 
session. The records are then sorted and 
recorded in the appropriate category file.


SCROLL KEYS

Up Arrow & Down Arrow - Moves the pointer
either up or down through the displayed records,
one record at a time.         

PgUp & PgDn - Moves the pointer either up or 
down through the displayed records, one page at 
a time. 

Home - Moves the pointer to the first record. 

End - Moves the pointer to the last record. 


EDITING KEYS

Left Arrow & Right Arrow - Moves the cursor left 
or right one character.

Home - Moves the cursor to the beginning of the 
word, number or date.

End - Moves the cursor to the end of the word, 
number or date. 

Ins - Inserts a space between two characters at 
the cursor.

Del - Deletes a character at the cursor.

Back Arrow - Deletes one character back.

Enter - Accepts the field and moves to the next 
field or if on the date field it moves to start 
of the next new record. 

Esc - Quits to the Selection Screen.  The 
record at the pointer is not recorded.


FIELD LIMITATIONS

CATEGORY - Only the selected category can be 
entered and is set by default.  The field 
cannot be left blank. 

               Categories

               1. - People
               2. - Place
               3. - Event
               4. - Animal
               5. - Vegetable
               6. - Object

TITLE - Any character is accepted.  The field 
cannot be left blank.

VOL. - Any number between 0 & 999 may be 
entered.  The field cannot be left blank.

NUM. - Any number between 0 & 9 may be entered.  
The field cannot be left blank.

DATE - Any date up to the year 2999 is accepted.  
The date is entered as MM/DD/YYYY.
The MONTH is 2 numbers.
The DAY is 2 numbers.
The YEAR is 4 numbers.
The Date Field may be entered with or without 
slashes.  The Date is checked for a valid date 
when the enter key is pressed.

RECORD ENTRIES 

After you have entered the desired data to a 
field Press ENTER to move to the next field. 

********************************************** 
                 IMPORTANT
                                              
You must press ENTER after the date field to 
finish the record you are working on.  If you 
press the ESC key at any field including the 
date field the record will be lost. 


Press ESC to end a record entry session. 
```
{% endraw %}

## HELP6.TXT

{% raw %}
```

                EDITING KEYS

Left Arrow & Right Arrow - Moves the cursor left 
or right one character.

Home - Moves the cursor to the beginning of the 
word, number or date.

End - Moves the cursor to the end of the word, 
number or date. 

Ins - Inserts a space between two characters at 
the cursor.

Del - Deletes a character at the cursor.

Back Arrow - Deletes one character back.

Enter - Accepts the field and moves to the next 
field or if on the date field it moves to start 
of the next new record. 

Esc - Quits to the Selection Screen.  The 
record at the pointer is not recorded.


FIELD LIMITATIONS

CATEGORY - When you are in the EDIT A RECORD 
MODE only the selected category can be entered 
and is set by default.  When you are in the ADD 
A RECORD MODE  any of the 6 category numbers 
may be entered.  The field cannot be 
left blank. 

               Categories

               1. - People
               2. - Place
               3. - Event
               4. - Animal
               5. - Vegetable
               6. - Object

TITLE - Any character is accepted.  The field 
cannot be left blank.

VOL. - Any number between 0 & 999 may be 
entered.  The field cannot be left blank.

NUM. - Any number between 0 & 9 may be entered.  
The field cannot be left blank.

DATE - Any date up to the year 2999 is accepted.  
The date is entered as MM/DD/YYYY.
The MONTH is 2 numbers.
The DAY is 2 numbers.
The YEAR is 4 numbers.
The Date Field may be entered with or without 
slashes.  The Date is checked for a valid date 
when the enter key is pressed.

RECORD ENTRIES

After you have entered the desired data to a 
field Press ENTER to move to the next field. 

**********************************************
                 IMPORTANT

You must press ENTER after the date field to 
finish the record you are working on.  If you 
press the ESC key at any field including the 
date field the record will be lost. 

Press ESC to end a record entry session.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2762

     Volume in drive A has no label
     Directory of A:\

    HELP4    TXT       496   9-11-90   7:09p
    HELP2    TXT       453   9-04-90   7:04p
    HELP1    TXT      2867   9-11-90   7:00p
    HELP3    TXT      2985   9-11-90   7:09p
    HELP6    TXT      2048   9-11-90   7:18p
    HELP5    TXT      3082   9-11-90   7:15p
    CAT3     REC     16952   9-17-90   4:08p
    CAT4     REC     16120   9-17-90   4:08p
    CAT5     REC      2860   9-17-90   4:15p
    CAT6     REC     13728   9-11-90  11:25a
    CAT1     REC     14144   9-17-90   4:07p
    GLEAN    EXE     63344   9-13-90   7:22p
    GLEAN    DOC     22586   9-16-90   4:07p
    PRINTDOC BAT        25   9-10-90   7:14p
    CAT2     REC     50076   9-17-90   4:07p
    FILE2762 TXT       699   8-07-91  12:01a
    GO       BAT        29   8-07-91  12:00a
    GO       TXT       848   8-09-91   1:18a
           18 file(s)     213342 bytes
                          101376 bytes free
