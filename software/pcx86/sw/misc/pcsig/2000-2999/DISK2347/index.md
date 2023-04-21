---
layout: page
title: "PC-SIG Diskette Library (Disk #2347)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2347/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2347"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "INDEX MAKER"

    Give your document files that professional touch -- by adding an
    index.  Creating an index to a document is a time-consuming process.
    INDEX MAKER can greatly reduce that investment of time by having your
    computer do the work.  Load the file to be indexed, create a word list
    for the index, and sit back and watch.  INDEX MAKER can index up to 500
    words with a maximum of 50 page citations per word.
    
    INDEX MAKER is menu-driven for ease of operation.  Index word lists can
    be saved on disk and then imported when needed.  Add or delete words
    from existing lists.  Once the index has been created, it can be viewed
    on screen before being sent to the printer.
    
    INDEX MAKER can also be used to locate key words as markers in large
    document files to find information quickly and easily.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES.TXT

{% raw %}
```
Creating an index to a document is a time-consuming process.  Although 
creating a complete index is considered an art, using a computer utility will 
greatly decrease the amount of time required in making that complete index.

Index Maker is a utility program for creating an index of your source document 
based on words you wish to have indexed.  Index Maker will index files in 
ASCII format.  It will index up to 500 words with a maximum of 50 page 
citations per word.

Itasca Softworks
Rt. 1, Box 408
Bagley, MN  56621

The requirements for using Index Maker are:

1.  an IBM PC, XT, AT, or compatible computer with at least 256k of memory.
2.  at least one disk drive (two is preferrable, one for the program and one 
for index files.)
3.  an 80 column monitor either color or monochrome.
4.  256k of RAM memory.
5.  DOS 3.0 or later.
6.  a printer is optional for printing indexes.

Files included:

INDEXER.EXE             the main application file
INDEXER.DOC             the program manual
INDEXER.ADD             program defaults
SAMPLE.IND              sample index
SAMPLE.DOC              sample document
SAMPLE.WRD              sample word list
AUTOEXEC.BAT            start up batch file
MANUAL.BAT              batch file to print manual

```
{% endraw %}

## INDEXER.DOC

{% raw %}
```



                                  Index Maker
                                  Version 1.0
                                 User's Manual

                              by Bruce W. Muckala
                       Copyright 1990 by Bruce W. Muckala

                                Itasca Softworks
                                 Rt. 1, Box 408
                               Bagley, MN  56621


                               Table of Contents

Introduction ................................................... 1
Setting Up ..................................................... 2
Status Display ................................................. 3
Creating an Index .............................................. 4
Selecting Files ................................................ 5
Word Lists
        Creating a Word List ................................... 6
        Loading a Word List File ............................... 6
        Viewing a Word List .................................... 7
        Saving a Word List ..................................... 7
Selecting Page Options ......................................... 8
Indexing
        Compiling the Index .................................... 9
        Viewing the Index ...................................... 9
        Printing the Index ..................................... 9
Menus
        Using Index Maker's Menus .............................. 10
        Menu Hierarchy ......................................... 10
        Index Maker Menus ...................................... 11
Appendix
        Index Structure ........................................ 12
        Program Files .......................................... 12
        Registration Form ...................................... 13
Index .......................................................... 14

=================================================================  Page 1   ===
Introduction
===============================================================================

Creating an index to a document is a time-consuming process.  Although creating 
a complete index is considered an art, using a computer utility will greatly 
decrease the amount of time required in making that complete index.

Index Maker is a utility program for creating an index of your source document 
based on words you wish to have indexed.  Index Maker will index files in ASCII 
format only.  It will index up to 500 words with a maximum of 50 page citations 
per word.

Index Maker is NOT "Public Domain" and it is NOT "Freeware."  You are free to 
use this program without any feeling of obligation for payment to the author 
FOR REVIEW PURPOSES ONLY.  However, if you find this program useful and use it, 
you are required to become a registered user of the program by sending a $45.00 
registration fee to:

                                Itasca Softworks
                                 Rt. 1, Box 408
                               Bagley, MN  56621

Registered users are notified of the availability of additional enhancements at 
no additional fee.  You may freely distribute Index Maker to friends and 
consorts as long as you do not charge for the program.

                 Program (C) Copyright 1990 by Bruce W. Muckala
    Index Maker was written and compiled using Microsoft's QuickBASIC (TM) 
                             Compiler, Version 4.1.

=================================================================  Page 2   ===
Setting Up & Getting Started
===============================================================================

The requirements for using Index Maker are:

1.  an IBM PC, XT, AT, or compatible computer with at least 256k of memory.
2.  at least one disk drive (two is preferrable, one for the program and one 
for index files.)
3.  an 80 column monitor either color or monochrome.
4.  256k of RAM memory.
5.  DOS 3.0 or later.
6.  a printer is optional for printing indexes.

Make a backup copy of the disk with Index Maker and associated files.  Use this 
disk as your working copy.  Always make backups of your index files to avoid 
unpleasantness if your original is somehow damaged.

If you have formatted your backup disk using the "/s" option then it is 
"self-starting" - the computer may be started after placing the disk into the A 
drive.  The file AUTOEXEC.BAT will automatically load and run Index Maker after 
prompting for the date and time.

This file - INDEXER.DOC - is not required on your working copy.  You may delete 
it from your working disk.

To install Index Maker on a hard disk, place the distribution disk in drive A.  
Next, create a sub-directory on your hard disk named INDEX by typing MD INDEX 
<RETURN>.  Then type COPY A:*.* C:\INDEX.  Substitute your hard disk drive 
letter for C in the previous instructions if you are using a different disk 
drive designation.

To begin using Index Maker type INDEXER <RETURN> at the DOS prompt.  The 
program will load and the title screen will be displayed.

=================================================================  Page 3   ===
Status Display
===============================================================================

The status of the source file and index is displayed in the Status Section 
located in the upper right hand corner of the screen.

Line #:                         [the line currently being indexed]
Word #:                         [the words being parsed in the current line]
Page #:                         [the current page determined by Page Options]

Words to be Indexed:            [the total number of words in the Word List]
Total Words Indexed:            [the total number of words actually found in 
                                 the source file]
Total Words in File:            [the actual number of words in the source file]

During the compilation of the index, a message is displayed above Line #: 
showing the stage of the indexing.  There are two passes through the file.  The 
first locates all the words found in the word list and stores them in a 
temporary file (named DATAFILE) which is later deleted.  The second pass 
locates all the pages the words are found on.  Following the second pass the 
index file is written to disk.

=================================================================  Page 4   ===
Basic Steps to Creating an Index with Index Maker
===============================================================================

1.  Prepare the Source File

Begin to prepare the source file by making sure it is saved in ASCII format.  
Most, if not all, word processors have an option to save files in this format.  
Saving a file in ASCII format will not save any character formatting such as 
bold or underline type codes.  Only the actual text of the document is saved 
along with tabs, carriage returns, and page breaks (see Page Options below for 
more on page breaks.)

Next, make sure your file is saved with an extension of DOC.  These are the 
only files Index Maker will display to choose from in it's File Selection 
Screen.  To use files with other file extensions, you will have to type in the 
complete file name and extension.  To rename a file with the extension DOC, the 
example below shows how to rename a file called MYFILE.TXT:

At the DOS prompt > type REN MYFILE.TXT MYFILE.DOC and press <RETURN>.  This 
would rename the file MYFILE.TXT as MYFILE.DOC.  See your DOS manual for more 
complete information on the REN (Rename) command.

2.  Load Index Maker

Load Index Maker by typing INDEXER at the DOS prompt.

3.  Choose Open ASCII File to be Indexed

Choose this option to open the source file to be indexed.

Type in the name of the disk drive to be used and the file name and press F2. 
You may also type in the disk drive letter and press F2 without a file name to 
see the File Selection Screen.  On this screen, use the up and down arrow keys 
to highlight the source file and then press <RETURN>.  (See Selecting Files.)

4.  Load or Create a Word List

Word list files created from a text processor must have an extension of .WRD.

5.  Select the option desired to determine page breaks - either by the number 
of lines per page or a form feed character.

6.  Choose Compile the Index from the Compile menu.

Once the index is compiled you may either view it or print it.  At any time you 
may add new words to the word list and re-compile the index.  The index is 
saved in an ASCII disk file with the name of your source file and the extension 
.IND.  You may load this file into your text processor to further edit the 
index.

=================================================================  Page 5   ===
Selecting Files
===============================================================================

To load a word list or source file from the File Selection screen, use the up 
and down arrows to highlight the file names displayed.  When you have 
highlighted a file you wish to load, press the <RETURN> key.  Pressing the Home 
key moves to the first file name in the upper left and pressing the End key 
moves the highlight to the last file in the list.

To cancel a file selection, press the Esc key.

Any files with an extension of .WRD will be displayed when selecting a word 
list file and any file with an extension of .DOC will be displayed when 
selecting a source file.

=================================================================  Page 6   ===
Word Lists
===============================================================================

Loading a Word List into Memory

Choose Load Word List from the Word Menu to load a previously saved list of 
words.  You do not have to create a word list using Index Maker.  You may 
create a list of words using any text processor.  The only conditions on this 
list for Index Maker to load it is that each word in the list must end with a 
carriage return and that the file have an extension of .WRD.

To load the list, type in the word list's file name and press <RETURN>.  The 
disk drive that will be searched for the file name will be the same one 
selected in opening a source file.  If you wish, you may press the <RETURN> key 
when prompted for a file name and the File Selection screen will appear with 
any files with an extension of .WRD.  You may then select from these files 
using the arrow keys.

Creating a Word List

To create a list of words to index choose Import/Create Index Word List from 
the Main Menu.  Next, select Create Word List from the Word Menu.  You will be 
given two additional choices; to create a new word list or to add words to a 
list you have already loaded into the computer's memory.

Start New Word List

Select this option when you wish to define words to be indexed.  You willl be 
prompted for a word which you should type in just as you wish it displayed in 
the index.  The case of the word is irrelevant to Index Maker's search for it, 
though it will be displayed in the created index just as you typed it.  The 
exact word will be found.  For example:  if you type in "file" the word "files" 
will not be indexed.  If you type in "file name", neither word will be indexed. 

After you have typed in all the words you wish to index, press the F2 key to 
exit the creation of a word list.

Add Words to Current List

If you already have a word list created or loaded into the computer's memory, 
you may choose this option to add additional words to the word list.  Enter 
words as described above and press the F2 key when complete.

=================================================================  Page 7   ===
Word Lists
===============================================================================

Viewing the Word List

To view the list of words already entered or loaded, choose View Word List from 
the Word Menu.  The words will be displayed on the screen.  If the list is 
longer than may be displayed, press any key to display another screen full or 
press Esc to cancel viewing the words.

Saving the Word List

To save a word list to disk, choose Save Word List from the Word Menu.  You 
will be prompted for a file name.  Type in the word list's file name and press 
<RETURN>.  No extension is needed as the program will assign all word lists the 
extension of .WRD.  The disk drive that will be searched for the file name will 
be the same one selected in opening a source file.

=================================================================  Page 8   ===
Page Options
===============================================================================

Choose Page Options to determine how page breaks will be determined during the 
compilation of the index.  There are two ways you may do this.  If your text 
processor has the option to mark page breaks in an ASCII document (ASCII 
character 12 - form feed) this is the easiest way.  Whenever a form feed 
character is encountered in a line of text, the page count is incremented.  You 
may also choose to set the number of lines per page by entering a digit.  This 
option works just as well except you should test the document beforehand to 
assure the correct pagination.  Otherwise, you index pages will not correspond 
to the actual pages printed.

To enter an option, choose Page Options from the Main Menu.  Enter an F for 
form feed character or an L to enter a line number.  Pressing Esc will exit the 
option.

The form feed option is the default.

=================================================================  Page 9   ===
Compiling the Index
===============================================================================

Compiling the Index

Once you have selected the ASCII source file to be indexed, loaded or created a 
word list, and selected the method of determining page breaks, you are ready to 
compile the index.  Select Compile/View the Index from the Main Menu.  Next 
select Compile the Index from the Compile menu.  The index will be compiled 
onto the default disk drive you specified when loading the source file.

Be sure you have plenty of empty disk space for the temporary files created 
during the index process.  A good base is at least twice the size of the source 
file.

All indexes are saved as an ASCII disk file using the name of your source file 
and the extension .IND.

If you created an index and then added more words to the word list, simply 
re-compile the index and a new one will replace the old one.

Viewing the Index

Once the index is compiled you may view it on screen.  Select View the Index 
from the Compile Menu.  The index will be displayed on the screen.  If you 
compiled the index in a previous session, you must select the source file first 
to view the index.

Printing the Index

Once the index is compiled you may print it on your printer.  Assure that your 
printer is on and on-line before printing.  Select Print the Index from the 
Compile Menu.  If you compiled the index in a previous session, you must select 
the source file first to print the index.


=================================================================  Page 10  ===
Menu Hierarchy
===============================================================================

To select a menu option, move to the desired option using the up and down arrow 
keys.  When the option is highlighted, press <RETURN>.  Pressing the Home key 
moves the highlight bar to the first menu choice.  The End key moves it to the 
last menu choice.  Pressing the Esc key will back up to the previous menu if 
you are in a sub-menu.

The following shows the hierarchy of the Main Menu and sub-menus:

Open ASCII File to be Indexed
Import/Create Index Word List ------------
Page Options                             |
Compile/View the Index ----              |
Quit                      |              |
        -------------------              |    
        |                         Load Word List
Compile the Index                 Create Word List -----------
View the Index                    View Word List             |
Print the Index                   Save Word List             |
Return to Main Menu               Return to Main Menu        |
                                                             |
                                                    Add Words to Current List
                                                    Start New Word List
                                                    Return to Previous Menu


=================================================================  Page 11  ===
Index Maker Menus
===============================================================================

1.  Main Menu

        Open ASCII File to be Indexed - choose this option to open the source 
             file to be indexed.
        Import/Create Index Word List - choose this option to either create a 
             list of words to be indexed in the source document or to start a 
             new word list.
        Page Options - choose this to select if you wish page breaks to be 
             determined by a set number of lines of text or by form feed 
             characters.
        Compile/View the Index - choose this option to compile an index or view 
             or print an index already compiled.
        Quit - choose this to end an Index Maker session.

2.  Word Menu

        Load Word List - loads a previously saved word list.
        Create Word List - allows for the creation of words to be indexed in 
             the source file.
        View Word List - allows you to view the words in the word list.
        Save Word List - allows you to save the word list in a disk file.
        Return to Main Menu - returns to the Main Menu.

3.  Add Words Menu

        Add Words to Current List - this option will allow you to add words to 
             a previously loaded word list.
        Start New Word List - allows you to begin a new word list.
        Return to Previous Menu - returns to the Word Menu.

4.  Index Menu

        Compile the Index - reads the source file and creates an index based on 
             the words in the Word List.
        View the Index - allows you to view on screen a completed index.
        Print the Index - allows you to print a completed index on your 
             printer.
        Return to Main Menu - returns to the Main Menu.

=================================================================  Page 12  ===
Appendix
===============================================================================

Index Structure

Indexes created with Index Maker have the following structure:

entry, 2, 3

where [entry] is the word indexed followed by a comma.  Each page the word is 
found on will be placed after the entry up to xx page citations.  The index 
words will be sorted in ascending alphabetical order.  The word's case will be 
exactly as it was entered in the word list.

The maximum number of words allowed in a word list is 500.  The maximum number 
of page citations for a word is 50.

Program Files

The following files should be on your Index Maker disk when you receive it:

INDEXER.EXE     - the main program
INDEXER.DOC     - this documentation file
INDEXER.ADD     - file for storing program defaults
AUTOEXEC.BAT    - a start up file used if starting the computer with your Index 
                  Maker disk.


=================================================================  Page 13  ===
Registration Form
===============================================================================

Index Maker - Version 1.0

Itasca Softworks
Rt. 1, Box 408
Bagley, MN  56621

Name _________________________________________________________

Address ______________________________________________________

City _________________________________________________________

State _________________________________ Zip Code _____________


Where did you obtain Index Maker from?

[  ] users group                
[  ] telecommunications service
[  ] Public Domain/Shareware distributor ____________________
[  ] other _____________________________


Index Maker ..................................... $45.00      __________
Mail It! (mailing label program) ................ $15.00      __________

Minnesota Sales Tax      ........................ (6%)        __________

Total ...........................................             __________

Commments ____________________________________________________________________

______________________________________________________________________________

______________________________________________________________________________

Thank You!


=================================================================  Page 14  ===
Index
===============================================================================

backup, 2
case of indexed word, 6, 12
compiling the index, 4, 9, 10, 11
creating an index, 4
creating a word list, 6
disk
    backup, 2
    hard, 3
    empty space, 9
drive - default, 4, 6, 7, 9
extension - file name, 4, 5, 6, 7, 9
file,
    AUTOEXEC.BAT, 2
    backup, 2
    index, 4
    selecting a, 5
    source status, 3
    source,
       extension - see extension
       indexing, 4, 9
       preparation, 4
       program, 12       
    word list, 4, 6
    temporary, 3
    total words in, 3
form feed, 4, 8, 11
installation, 2
lines per page - selecting, 4, 8, 11
loading, 
    source file, 9
    word lists, 6
menu, 4, 6, 7, 8, 9, 10, 11
options - page, 4, 8, 10, 11
page - options, 4, 8, 10, 11
printing, 9
re-compile, 4, 9
rename files, 4
requirements, 2
saving, 4, 7
selecting files, 4, 5
source file, 1, 3, 4, 5, 6, 7, 9, 11
status display, 3
structure of the index, 12
viewing,
    word lists, 7
    indexes, 9
word lists, 6, 7, 12


```
{% endraw %}

## SAMPLE.DOC

{% raw %}
```

              Managing Staffing with a Personal Computer - Part 1

                     by Corrinne Bergman and JoAnn Johnson
                       Excerpted from Nursing Management
                                 Vol. 19, No. 7
                                   July 1988


     Staffing the hospital nursing service is the most difficult challenge in 
the assignment of personnel.  What other industries can claim such a dynamic 
workload!  Nursing is forced to evaluate patient care requirements at least 
three times a day to predict need for the next eight hours.  Frequently, 
adjustments are required even during the shift.
     Staffing, budgeting and hiring practices are based on average 
requirements. Prior to prospective payment, personnel budgets were fairly 
stable, and a 24-hour staffing model was developed during the budget process.  
Recently, this has not been the case as patient populations in acute care 
settings have been much more unpredictable.  The large shift to outpatient 
surgery sharply reduced hours of service on surgical units.  For example, when 
cataract surgery was made an outpatient procedure, one surgical unit lost 45 
inpatient days per week!  This trend affects other areas also, such as 
orthopedics, cardiac, genito-urinary, perinatal, etc.  For efficiency, some 
units have been downsized, others combined.  New services have been created to 
attempt to increase volume.

     "In 1984, the nation's hospitals closed 1000 beds and reduced FTE 
positions by 73,000.  However, as hospitals downsize and length of stay 
decreases, acuity increases."1  These less stable patient populations have 
created the need for a convenient method of adjusting staffing models.
     Many hospitals carry out their shift-to-shift staffing with the aid of 
computers and sophisticated software.  This article will demonstrate how a 
personal computer (PC) can be used to: 1)build a 24-hour staffing model and 
2)calculate a personnel budget and allocation.  Using available software for 
electronic drafting, charting and displaying spreadsheets, you can create 
flexible computer tools to meet any kind of staffing requirements on any kind 
of unit.  Use of such software can be self taught by reading the manuals 
supplied with the disks.

     An example of a computerized, 24-hour staffing model and allocation for a 
34-bed surgical nursing unit is shown in Figures 1A and 1B.  The staffing 
organizational model was done using electronic drafting software and the 
allocation/budget using a spreadsheet program.
     Hours per patient per day (HPD) usually are established during the budget 
process.  Most often, the figure is determined with the help of acuity or time 
studies, but there are still some facilities in which it is set arbitrarily by 
administration.  A key role of a nurse executive is to see that the budgeted 
HPD is appropriate to: 1)carry out the standards of care, 2)maintain high 
productivity and 3)assure a fair workload for staff.  To do this, nurse 
managers must track acuity levels so that the HPD can be adjusted when there is 
a change in the workload.

     Also set during the budget process is volume, expressed in units of 
service (patient days/census).  The number is based on historical data and 
projected changes which may affect census.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2347

     Volume in drive A has no label
     Directory of A:\

    AUTOEXEC BAT        21  12-29-89  12:40a
    FILES    TXT      1291  12-29-89   1:14a
    INDEXER  ADD        17   1-04-90  12:03a
    INDEXER  DOC     22176  12-29-89  12:35a
    INDEXER  EXE     91602  12-28-89   7:00a
    MANUAL   BAT       237  12-29-89  12:41a
    SAMPLE   DOC      3383  12-29-89   2:47a
    SAMPLE   IND       140  12-29-89   2:50a
    SAMPLE   WRD        88  12-29-89   2:47a
    GO       BAT        40   1-01-80   6:00a
    GO       TXT       826  10-05-90   1:59a
    FILE2347 TXT      2147  10-05-90   9:34a
           12 file(s)     121968 bytes
                           34304 bytes free
