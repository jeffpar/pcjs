---
layout: page
title: "PC-SIG Diskette Library (Disk #1064)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1064/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1064"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "MAIL IT!"

    Print mailing labels without investing in an expensive or hard-to-learn
    database program.  With point-and-click menus, it's perfect for small
    businesses, churches, interest groups, etc.
    
    MAIL IT is flexible enough for most mailing needs.  It lets you enter up
    to 1,000 individual records and search most fields for information to be
    printed.  Several label-printing options are offered, but label
    printing
    is limited to single-column labels.  And, there's even a help file of
    state abbreviations.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1064.TXT

{% raw %}
```
Disk No: 1064                                                           
Disk Title: Mail It!                                                    
PC-SIG Version: S1.1                                                    
                                                                        
Program Title: Mail It!                                                 
Author Version: 1.2                                                     
Author Registration: $15.00                                             
Special Requirements: None.                                             
                                                                        
Print mailing labels without investing in an expensive or hard-to-learn 
database program.  With point-and-click menus, it's perfect for small   
businesses, churches, interest groups, etc.                             
                                                                        
MAIL IT is flexible enough for most mailing needs.  It lets you enter up
to 1,000 individual records and search most fields for information to be
printed.  Several label-printing options are offered, but label printing
is limited to single-column labels.  And, there's even a help file of   
state abbreviations.                                                    
                                                                        
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
║                    <<<<  Disk No 1064 MAIL IT!  >>>>                    ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To copy the documentation to your printer, type: MANUAL (press enter)   ║
║                                                                         ║
║ To start the program, type: MAILIT (press enter)                        ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## MAILIT.DOC

{% raw %}
```

===============================================================================
                          M A I L  I T !  Version 1.2
===============================================================================

Mail It! is a simple, easy to use, small mailing list program.  It supports up 
to 1000 records.  Mail It! prints labels one across only.  You may selectively 
print labels using a number of options.

Mail It! has been compiled using Microsoft's QuickBASIC (version 4.0) compiler. 

You are free to use this program without any feeling of obligation for 
payment to the author for review purposes only, however if you find this 
program useful and use it you are requested to become a registered user of the 
program by sending a $15.00 registration fee to:

                          Itasca Softworks
                          Bruce W. Muckala
                          Rt. 1, Box 408
                          Bagley, MN 56621

Registered users are notified of the availability of additional enhancements at 
no additional fee.                                                             

    Program (C) Copyright 1987, 1988, 1989 by Bruce W. Muckala


SOME FEATURES:

- Automatic duplication of fields from last previously entered record.  This 
cuts down on keying in the same state, zip, etc. 
- Verification of state abbreviations. 
- Output of file to Tab delimited or quote delimited file format.  Allows for 
importing into another database. 
- A listing of all states (including Puerto Rico and the Virgin Islands) and 
their associated abbreviations. 
- Searching on most fields. 
- Moving bar menus or pointer menus for ease of use. 



================================================================ Page Two =====
GETTING STARTED
===============================================================================

The requirements for using Mail It! are:

1.  an IBM PC, PCjr with at least 256k, XT, AT, or compatible computer
2.  at least one disk drive (two is preferrable, one for the program and one 
for the data files.)
3.  an 80 column monitor
4.  256k of RAM memory
5.  DOS 3.0 or later
6.  a printer for printing labels

        Make a backup of the disk with Mail It! and associated files.  Use this 
disk as your working copy.  Always make backups of your data files to avoid 
unpleasantness if your original is somehow damaged.
        If you have formatted your backup disk using the "/s" option then it is 
"self starting" - the computer may be started after placing the disk into the A 
drive.  The file AUTOEXEC.BAT will automatically load and run Mail It! after 
prompting for the date and time.

        This file - MAILIT.DOC - is not required on your working copy.  You may 
delete it from your working disk.

        To install Mail It! on a hard disk, place the distribution disk in 
drive A.  Next, create a sub-directory on your hard disk (such as MAIL) by 
typing MD MAIL <RETURN>.  Then type COPY A:*.* C:\MAIL.  Substitute your hard 
disk letter for C in the previous instructions if you are using a different 
drive designation.
        When using two floppy drives, place your working copy of Mail It! in 
the A drive and a formatted blank disk in the B drive.  Set the default disk 
drive letter to B (found in the File sub-menu.)  All your data files will be 
created and accessed on the B drive.

        To begin using Mail It! type MAILIT <RETURN>  at the DOS prompt.  The 
program will load and the title screen will be displayed.  


================================================================ Page Three ===
MENUS
===============================================================================

To select a menu option, move to the desired option using the right or left 
arrow keys.  When the option is highlighted, press <RETURN>.  Pressing Home 
moves the highlight bar to the first menu choice, End moves it to the last menu 
choice.  Pressing the Esc (Escape) key will back up to the previous menu if you 
are in a sub-menu.  

You may also press the first letter of the menu option.  This will immediately 
execute the option.

Some options have sub-menus.  Press Esc or choose Quit to return to the Main 
Menu. 

THE MAIN MENU:

FILE - allows the opening, closing of files and selection of the default disk 
drive letter.
SET - allows for selection of the default search field as well as the default 
sort field.  Also sorts the database.
EDIT - allows for adding, editing, deleting, and printing a label of individual 
records.
REPORTS - allows for multiple options in printing labels and reports.
UTILITIES - allows for alignment of labels, verification of state 
abbreviations, listing of all states and their abbreviations, and exporting a 
file to either tab delimited or quote delimited files, program status, option 
to print company names on labels, and color or monochrome monitor choices. 
QUIT - quits the application. 


================================================================ Page Four ====
THE FILE MENU:
===============================================================================
OPEN - this option first displays all the files with an extension of .LBL on 
the selected default drive.  You are then prompted to enter a file name of a 
file you wish to work with, or a new file to be created.

To open a previously saved file, you may enter the file name or press <RETURN> 
and you will see a list of all Mail It! files (with the extension .LBL)  Use 
the up and down arrow keys to move from one file name to the next.  Press the 
<RETURN> key when the file of your choice is highlighted to open the file.

CLOSE - closes the file currently opened.  Do this before opening a different 
file. 

DRIVE - this option allows you to set the default drive to be used for files.  
Drives A,B,C,or D are allowed.  Enter the letter and press <RETURN>.  This will 
remain the default drive until it is changed again if desired.

QUIT - Returns to the Main Menu.


THE SET MENU:

FIELD - this option allows you to set the field you wish searches to be 
performed on.  You may change the chosen field at any time, but all ensuing 
searches will then be performed on that field.  Move the pointer using the up 
and down arrow keys and press <RETURN> when it is pointing to the desired 
field.  You may also select the appropriate number.  Press <C>ancel or Esc to 
exit without selecting.

SORT - this option allows you to set the field you wish the file to be sorted 
on.  You may change the chosen field at any time, but all ensuing sorts and 
prints will then be performed on that field.  Move the pointer using the up and 
down arrow keys and press <RETURN> when it is pointing to the desired field.  
You may also select the appropriate number.  Press <C>ancel or Esc to 
exit without selecting.

The sort is performed immediately.

QUIT - Returns to the Main Menu.



================================================================ Page Five ====
THE EDIT MENU:
===============================================================================

ADD - choose this option to add a new record to the file.  Enter each field of 
information and press <RETURN> or the Tab key to advance to the next field.  
When you have completed each field you may press F3 to save the record and exit 
or F4 to save the record and enter another, or press Esc to cancel the save and 
exit the add option.

If you have entered at least one record in a session, pressing the F2 key at 
each field will insert the information that was entered for that field in the 
previous record.  This will eliminate rekeying recurrent cities, states, etc. 
when entering a large amount of records at one sitting.

UPDATE - when this option is selected you will first be prompted to enter a 
string to search for.  The field to be searched will be displayed (set by using 
the SET/FIELD option described above.)  Any field that contains the string 
entered will be displayed.  For example, if you enter JO you will get records 
which have names such as Joe, JOSEPH, JOAN, etc.  If you enter JOE, you will 
not get JO.  Once all records have been found containing the search string, the 
first one found will be displayed.  You may update a field of a record by 
pressing the F9 key.  
         To move to the next record, press F6; to move to the previous record 
press F5.  You may print a label of the record displayed by pressing F8.  To 
delete the record, press F7.  You will be prompted if you are sure you wish to 
delete the record.  Once it is deleted, it is gone and cannot be retrieved.
        Press Esc to exit the Update option.  Any changes made to the record 
will be saved.

QUIT - Returns to the Main Menu.
===============================================================================

THE REPORTS MENU:

ALL - prints out all labels for 3 1/2" x 15/16" labels.

MULTIPLE - prints out a specified number of labels for one record.  You will 
first be prompted to enter how many labels to be printed, then the record to be 
printed.  Whatever the current search field is set at will be searched for the 
string entered.  Once the record is found and displayed, press F8 to begin 
printing.

TOWN - prints out all labels for a specified town.

STATE - prints all labels for a specified state.

CODE - prints all labels for a specified code.

ZIP - prints all labels for a specified zip code.

REPORT - prints a complete report of all records entered in the current file.

QUIT - Returns to the Main Menu.



================================================================ Page Six =====
THE UTILITIES MENU:
===============================================================================

ALIGN - selecting this option allows you to align your labels in the printer 
prior to printing.  Three labels of four lines of x's will be printed.  Use 
this option to avoid a large print of labels only to find out they are coming 
out off center.

VERIFY - this option will check the State field for proper abbreviations.  If 
any do not match the accepted abbreviation, they will be displayed on the 
screen along with the record number, last name, and first name.  If you enter 
the state name in full, these will be flagged also.  This is simply a 
convenience if you do use state abbreviations.

LIST - this option simply lists the fifty states, Puerto Rico, and the Virgin 
Islands and their appropriate abbreviations.

OUTPUT - selecting this option will translate the Mail It! file currently in 
use to either a Tab delimited or quote delimited file.  You may then import the 
data into another database program or word processor.  Each record is 
delineated by a carriage return.

STATUS - displays the current file's statistics.  You may also set your printer 
output here.  If you wish company names to be printed on labels, this is where 
you inform the program of your choice.  You may also set the screen for either 
color or monochrome monitors.  Press the F3 key to save the configuration you 
have chosen or press Esc to cancel any changes.

QUIT - Returns to the Main Menu.


================================================================ Page Seven ===
RECORD STRUCTURE:
===============================================================================

Last Name               25 Characters
First Name              25 Characters
Company                 25 Characters
Code                    10 Characters
Address Line 1          25 Characters
Address Line 2          25 Characters
City                    25 Characters
State                   10 Characters
Zip Code                10 Characters
Phone Number            12 Characters
Last Edit Date          10 Characters - assigned by program

The application will not allow you to exceed these field limits. Maximum # of 
records is 1000 

An ancillary file is created by Mail It!  The file MAILIT.ADD stores the 
default search and sort fields as well as the default drive letter, color or 
monochrome status, printer port (either LPT1 or LPT2), and company name print 
choice.

PROGRAM FILES

The following files should be on your Mail It! disk when you receive it:

MAILIT.EXE      - the main program
MAILIT.DOC      - this documentation file
AUTOEXEC.BAT    - a start up file used if starting the computer with Mail It!



================================================================ Page Eight ===
REGISTRATION:
===============================================================================


MAIL IT!  Version 1.2

Itasca Softworks
Bruce W. Muckala
Rt. 1, Box 408
Bagley, MN 56621


Name ______________________________________________

Address ___________________________________________

City ______________________________________________

State ________________ Zip ________________________


Where did you obtain Mail It! from?

[ ] users group                                 Amt (15.00)     _______
[ ] telecommunications service                  MN Tax (6%)     _______
[ ] Public Domain/Shareware distributor
[ ] other ____________________________          Total           _______

Comments __________________________________________________________________

___________________________________________________________________________

Bugs ______________________________________________________________________

___________________________________________________________________________

System configuration, DOS version etc would be helpful when reporting bugs.
Thank you!




```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1064

     Volume in drive A has no label
     Directory of A:\

    AUTOEXEC BAT        20   3-09-88  11:23a
    FILE1064 TXT      1777  12-08-89   4:51p
    GO       BAT        38  10-19-87   3:56p
    GO       TXT       540   5-24-88  11:30a
    MAILIT   ADD        42   1-01-80   1:09a
    MAILIT   DOC     13772   1-01-80  12:21a
    MAILIT   EXE    122792   1-01-80   1:07a
    MANUAL   BAT       147   5-24-88  11:27a
            8 file(s)     139128 bytes
                           18432 bytes free
