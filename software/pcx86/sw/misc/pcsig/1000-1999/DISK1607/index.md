---
layout: page
title: "PC-SIG Diskette Library (Disk #1607)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1607/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1607"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "I FOUND IT"

    I FOUND IT offers an absolutely simple database for people who keep
    lists of other people as well as things. For home or business, I FOUND
    IT sets up the database with 19 predefined fields that are perfect for
    things like Christmas mailing lists and Little League rosters.
    
    All the user has to do is hit a couple of keys and begin entering
    names, addresses and phone numbers. I FOUND IT will print the data as
    mailing labels, records, or in tabular form. It will find individual
    records, print selected records, merge two files and user change the
    names of the fields. The menus and prompts are the nearest thing to
    total simplicity. Multiple files are allowed on each disk.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1607.TXT

{% raw %}
```
Disk No: 1607                                                           
Disk Title: I Found It                                                  
PC-SIG Version: S1                                                      
                                                                        
Program Title: I Found It                                               
Author Version: 2.0                                                     
Author Registration: $20.00                                             
Special Requirements: 384K RAM.                                         
                                                                        
I FOUND IT offers an absolutely simple database for people who keep     
lists of other people as well as things.  For home or business, I FOUND 
IT sets up the database with 19 predefined fields that are perfect for  
things like Christmas mailing lists and Little Leage rosters.           
                                                                        
All the user has to do is hit a couple of keys and begin entering       
names, addresses and phone numbers.  I FOUND IT will print the data as  
mailing labels, records or in tabular form.  It will find individual    
records and print selected records.  It can also merge two files.  The  
user can change the names of the fields.  The menus and prompts are the 
nearest thing to total simplicity.  Multiple files are allowed on each  
disk.                                                                   
                                                                        
File Descriptions:                                                      
                                                                        
README        Tells how to start program and print documentation.       
IFI      EXE  Main program.                                             
IFI      DOC  User guide.                                               
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1988 PC-SIG, Inc.                                         
```
{% endraw %}

## IFI.DOC

{% raw %}
```



                          "I FOUND IT" USER'S GUIDE

                                 Version 2.0


                       copyright 1989 by John Davis

                            ALL RIGHTS RESERVED






INTRODUCTION

"I Found It" is an easy to use database program written specifically for the 
home and small business.  It would be very difficult to find a program that is 
easier to use.  "I Found It" is perfect for Christmas Card lists, Little 
League team rosters, Church membership rolls and client lists. The user is 
presented with both table and record views of the data.  A pre-defined 19 
field by 70 character record is used by "I Found It".  All the user has to do 
is enter the data into the fields and then print it off in either record, 
labels or tabular report format. "I Found It" includes also a powerfull search 
function, any number of files per disk, the ability to merge two files and 
includes many easy to use menus and prompts.


SHAREWARE

"I FOUND IT" is being marketed under a unique scheme known as shareware.
This software is not public domain and is fully protected by all federal
copyright laws. You are encouraged to make copies of "I FOUND IT" and
distribute them to anyone that you wish. The only stipulation for making 
copies is that you do not charge for making copies (except for the cost of 
copying and distribution) and you copy all files on the disk.  If you found "I 
FOUND IT" to be usefull and plan to continue using it; it is to your benefit 
that you register your copy.  By registering your copy of "I FOUND IT" you 
let the author know that there is enough interest in the program to make 
future enhancements and changes.  In addition, as a registered user you will 
be entitled to receive future versions for the cost of distribution (currently 
$5.00).

To register your copy of "I FOUND IT", send $20.00 along with your name and 
address to -

                    John Davis
                    1011 Brookgreen Dr.
                    Cary, N.C. 27511


FILES ON DISK

     README      -  Any last minute changes to the documentation
     IFI.DOC     -  This documentation
     IFI.EXE     -  "I FOUND IT" program module



TO USE "I FOUND IT"

     1)   Boot DOS,
     2)   Insert "I FOUND IT" program disk into disk drive,
     3)   Type "IFI" and "I FOUND IT" will begin execution. 
          Alternatively type "IFI /Q" to avoid the opening credits screen.



A NOTE ABOUT MENUS

A number of different menus appear within "I FOUND IT". When a menu
appears, to highlight a menu record, simply press the up or down arrow. To
select the highlighted menu record, press the enter key. To exit from the
menu, either select the last menu item or press the escape key.


"I FOUND IT" MAIN MENU

After the program loads and displays a credit's screen you will be presented 
with the main menu.  From this menu you can load a default file, specify a 
file to load, specify the default file or exit "I FOUND IT". It is important 
that you always exit "I FOUND IT" by using this option rather than simply 
turning off your machine, as "I FOUND IT" rewrites the configuration file 
while executing the last option. 


"I FOUND IT" FILE STRUCTURE

The file structure used by "I FOUND IT" is very simple.  Each record is 
predefined to contain 19 fields and each field can be of any length up to 70 
characters.  The fields initially have the following names - "Name", "Address 
1", "Address 2", "Address 3", "Address 4", "Address 5", "Telephone" and 
"Comments"; with the rest of the 19 fields have blank names.  Within the 
Utilities Menu is a function that enables the user to change the names of the 
fields to anything desired up to a field name length of nine.   When assigning 
field names the only important thing to remember is that if you are planning 
to print labels, the labels printed contain the first six fields and use 
standard six lines per inch type labels. Fields can be either text or numbers 
or any combination.


"I FOUND IT" DISPLAY SCREENS

Two different types of displays are used by "I FOUND IT".  When the program 
begins the record index is displayed; this is basically a table view of the 
file, with the first field of the file being displayed in the table.  To move 
around the index simply use the up and down arrow keys, page up, page down, 
home or end. Initially, the index contains one blank record.  This blank 
record can be deleted after additional records are added (using function key 
2).

The second display is presented when the escape key is pressed.  This display 
presents the entire record for which record was highlighted on the index 
display.  Likewise the up and down arrow keys, page up, page down, home and end 
work here also.  To flip back to the index simply press escape again.

Highlighted at the bottom of the screen (regardless of which display is being 
presented) is a list of the available function keys. The following is a list 
of all function keys that perform certain commands in "I FOUND IT". The 
function keys work identically from both record and register displays.

     FUNCTION KEY             DESCRIPTION
     ------------             -----------

          F1        Displays a help screen.

          F2        Enter a new record.  A blank record display will appear.
                    You should then key values followed by the enter key
                    for each field on the screen. During entry (or 
                    changing) of an record, you can press the up and down arrows 
                    to position you at a field. If the field already 
                    has a value, the cursor will appear at the end of the 
                    value. Press backspace to delete the field and reenter or 
                    change the value as needed. To exit from entry (or change)
                    mode, press the escape key. The entry (or change)
                    menu will then appear. From this menu you can choose
                    to accept the entry as keyed, abort the entry or
                    to return to entry mode.  You are also given the option of 
                    adding the record to the end of the file or inserting 
                    the record after the current record.

          F3        Change current record.  Works very similar to F2.

          F4        Delete current record. If only one record is present in 
                    the file, you can not delete it.

          F5        Find a record. Search can be performed on any field in the
                    record. Values searched for are performed on a partial 
                    string basis and the record is found if the partial string 
                    is found anywhere within the field.  The search is case 
                    sensitive. The search is of the "AND" type meaning that if 
                    you have search values entered into two fields both 
                    searches have to be true for the record to be selected.

          F6        Print function.  Records can be printed either in record, 
                    labels or tabular report format.  You are also given the 
                    choice of beginning print at the first record, current 
                    record or you can enter search criteria for the records to 
                    be printed.  For tabular reports the columns to be printed 
                    can be selected by placing an "X" next to the field to be 
                    printed.  Column width is computed by taking the width of 
                    the widest value in a field.  Single spaces separate each 
                    field.  Tabular reports also allow you to specify fields 
                    to be totaled by placing a "T" next to the field to be 
                    totaled.  When labels are to be printed the user is 
                    prompted to see if test labels are to be printed first for 
                    alignment purposes.  Labels printing is performed for only 
                    the first six fields in the file. The labels are assumed 
                    to be of the standard six lines per inch variety. For 
                    either record or tabular format the user is prompted for a 
                    report title that is printed at the top of each page; in 
                    addition the field names are printed over the columns on 
                    the tabular format and beside the fields on record format.

          F9        Utilities menu. Will be explained below.

          F10       Save checkbook and exit "I FOUND IT".  It is very 
                    important that this be the only way you exit "I FOUND IT".  
                    If you simply turn off your computer any new records or 
                    changed made to your file will be lost.


UTILITIES MENU

     Function key 9 will display the utilities menu. The various menu
selections appear below.

     MENU SELECTION                     DESCRIPTION
     --------------                     -----------

Registration Information      Displays information on how to register your
                              copy of "I FOUND IT". (PLEASE READ THIS)


Merge Two Files               Loads to the current file all records from 
                              another file.

Display File Menu             Displays a file menu that is similar to the 
                              opening main menu.  The current file is 
                              saved before any additional actions take place.

Set Screen Colors             You can change colors for normal text,
                              highlighted text and the background. Your
                              color changes are automatically saved when
                              the configuration file is written to disk.

Change File Description       Allows you to change the description of 
                              the currently loaded file. This does
                              not change the disk file name only the
                              name that appears at the top of the
                              register screen. To change the disk file
                              name use the DOS rename command. Note though
                              that all files must end with a ".DAT" suffix.

Change Field Names            Allows you to change the names of all the fields 
                              within the file; as previously described.

Display Free Space            Displays free space.


FINALLY

I hope you find "I FOUND IT" to be very usefull to you.  As far as I know 
there is not an easier to use database program on the market. I had alot of 
fun programming it and have alot of ideas for enhancements. I would encourage 
you to register your copy of "I FOUND IT". The main advantage to registering 
is that you will be notified when future versions are available and have the 
opportunity to acquire future versions for a small distribution charge 
(currently $5.00).  I am always willing to listen to suggestions for 
enhancements and of course would appreciate prompt notification of any bugs 
found in the program.

If you liked "I FOUND IT", you might also be interested in another shareware 
product I have on the market.  PC-BILL MASTER is a very easy to use checkbook 
manager with quite a few advanced functions.  It's display look alot like the 
displays in "I FOUND IT".  PC-BILL MASTER has received excellent reviews from 
PC-SIG as well as a number of user groups.  It carries a registration fee of 
$25.00.  If you would like for me to mail you a copy, simply send me $25.00 
along with your name and adress.  


                              John Davis
                              1011 Brookgreen Dr.
                              Cary, N.C. 27511


STATEMENT OF WARRANTY AND LIABILITY

The author makes no warranty of any kind, express or implied, including
without limitation, any warranties of merchantability and/or fitness for a
particular purpose. The author shall not be liable for any damages, whether
direct, indirect, special or consequential arising from a failure of this
program to operate in the manner desired by the user. In addition, the
author shall not be liable for any damage to data or property which may be
caused directly or indirectly by use of the program.

IN NO EVENT WILL THE AUTHOR BE LIABLE FOR ANY DAMAGES, INCLUDING ANY LOST
PROFITS, LOST SAVINGS OR OTHER INCIDENTAL OR CONSEQUENTIAL DAMAGES ARISING
OUT OF YOUR USE OR INABILITY TO USE THE PROGRAM, OR FOR ANY CLAIM BY ANY
OTHER PARTY.


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1607

     Volume in drive A has no label
     Directory of A:\

    FILE1607 TXT      2443  10-16-89   7:59p
    GO       BAT        38  10-12-89   9:37a
    GO       TXT       540   1-01-80   6:23a
    IFI      DOC     12855   3-15-89   1:42p
    IFI      EXE    121799   3-15-89   3:24p
    README             812   3-15-89   1:03a
            6 file(s)     138487 bytes
                           19968 bytes free
