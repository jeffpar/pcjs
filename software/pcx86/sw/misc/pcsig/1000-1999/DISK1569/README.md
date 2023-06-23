---
layout: page
title: "PC-SIG Diskette Library (Disk #1569)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1569/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1569"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "DEDIT"

    Need a faster, easier way to correct or update data in your database
    files? Then consider DEDIT. DEDIT allows direct editing of dBase III
    and the 100%-compatible data files produced by Clipper, Foxbase, and
    PC-File:dB without going into your database program.
    
    Some database applications don't allow the user to quickly and easily
    correct mistakes made in data entry. DEDIT allows the user to access
    data files directly, find any errors, and correct them.
    
    It's easier and faster to enter the database and edit information with
    DEDIT than to struggle with the maze of menus and editing screens that
    populate those applications.
    
    Beginners will appreciate how simple it is to use the program.
    Experienced users will appreciate the access speed. No special
    knowledge of dBase, Clipper, Foxbase, or PC-File:dB is needed.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## DEDIT.DOC

{% raw %}
```















                                      d E D I T

                                     Version 1.10




                                Database Edit Utility


























                                   The PC Solution
                           710 Silver Spur Road, Suite 284
                           Rolling Hills Estates, CA  90274


                         Copyright (c) 1988  The PC Solution
                                 All Rights Reserved






















                                  TABLE OF CONTENTS




               Introduction . . . . . . . . . . . . . . .   1

                  Overview  . . . . . . . . . . . . . . .   1

                  Registration  . . . . . . . . . . . . .   2

                  Disclaimer  . . . . . . . . . . . . . .   2

                  System Requirements . . . . . . . . . .   2

               Installation . . . . . . . . . . . . . . .   3

               Program Operation  . . . . . . . . . . . .   5

                 Starting dEDIT . . . . . . . . . . . . .   5

                 Copyright  . . . . . . . . . . . . . . .   5

                 Date . . . . . . . . . . . . . . . . . .   5

                 Main Menu  . . . . . . . . . . . . . . .   5

                 Edit Database  . . . . . . . . . . . . .   5

                 Change Defaults  . . . . . . . . . . . .   8

                 Quit . . . . . . . . . . . . . . . . . .   8

               Glossary . . . . . . . . . . . . . . . . .   9















                                          i















                                     INTRODUCTION



          Overview

          dEDIT allows direct editing, browsing, and searching of dBase III
          and 100% compatible database files such as Clipper and Foxbase
          without having to own copies of each of these programs.  dEDIT
          can be used with many accounting programs such as SBT, Lake
          Avenue Software, and others.

          Often application programs written in Clipper and Foxbase prevent
          the user from directly accessing databases either to edit or to
          simply browse information.  This is often frustrating for the
          user who only wants to view information or make modest
          corrections.  dEDIT eliminates this frustration by allowing the
          user direct access to data files.

          We include dEDIT as an utility in our custom programs.  Users of
          our custom programs appreciate the speed in which data can be
          browsed and the ability to view several records at a time.   

          Beginners will appreciate how easy it is to use dEDIT.  No
          special knowledge of dBase, Clipper, or Foxbase is needed. 
          Experienced users will appreciate the speed at which database
          files can be accessed.  

          We hope that you find dEDIT useful and fun to use.





















                                          1













          Registration

          dEDIT is a shareware product.  Feel free to use the product and
          distribute copies to others.  However, we ask that you register
          your copy if you find the program useful and continue to use it
          after a 30 day evaluation period.  To register your copy, send a
          check or money order payable to The PC Solution for $20.00 ($25
          foreign) to the address below.


                         The PC Solution
                         710 Silver Spur Road
                         Suite 284
                         Rolling Hills Est.,  CA  90274
                           U.S.A.  

          Upon registering, you will be sent a new copy of dEDIT which
          contains many enhancements.  A multiuser version of dEDIT is
          being  planned for 1990.  Your comments and suggestions are
          welcome either at the above address or via CompuServe 73027,3100.


          Disclaimer

          dEDIT is distributed "as is" with no warranties of any kind,
          either expressed or implied, including, but not limited to, the
          implied warranties of merchantability and fitness for a
          particular purpose. 

          The PC Solution, nor anyone else who has been involved in the
          creation, production, or distribution of dEDIT shall be liable
          for any direct, indirect, incidental, special, general, or
          consequential damages, such as, but not limited to, lost profits
          or benefits, lost savings or other incidental or consequential
          damages, arising from the use of dEDIT.


          System Requirements

          The following hardware configuration is required to run dEDIT.

               IBM or 100% compatible computer
               320k of memory
               2 floppy drives or 1 floppy and hard disk
               DOS 2.0 or above







                                          2















                                     INSTALLATION


          dEDIT can be run either from a floppy or hard disk.  The
          performance is better with a hard disk.



          Floppy Disk

          To create a self booting disk, follow the instructions below:

          1.   Insert your DOS disk in drive A and a blank disk in drive B.

          2.   At the A> prompt, enter FORMAT B:/S and press ENTER (or 
          RETURN on some keyboards).

          3.   Replace your DOS disk with your dEDIT disk.

          4.   At the A> prompt, enter COPY A*.* B:

          5.   Remove the dEDIT disk from drive A.   Remove your self 
          booting dEDIT disk from drive B and place in drive A.

          6.   Reboot your computer.  dEdit will automatically start.



          Hard Disk

          To install dEDIT on a hard disk, follow the instructions below.

          1.   Place your dEDIT disk in drive A.

          2.   Type A:HDINSTAL and press ENTER.

          3.   Follow the instructions.  When finished, remove your dEDIT
               disk from drive A.

          Before running dEDIT on a hard disk, make sure that your
          CONFIG.SYS file contains the following commands.

                         BUFFERS=8
                         FILES=20

          Please refer to your DOS manual for information regarding the
          CONFIG.SYS file and the BUFFERS and FILES commands.



                                          3













          Starting dEDIT

          To start dEDIT, type dEDIT at the A> or C> prompt and press
          ENTER.  The program will take a few seconds to load.

          The first time dEDIT is run, you will be asked to enter some
          information.

          Company:             Enter your name or company name.

          Program Drive/Path:  Enter the drive and full path where your
                                   dEDIT program files reside.  For floppy 
                                   disk systems enter:

                                         A:\

                               You must include a "\" after the ":".

                               For hard disk systems, enter (for example):

                                        C:\dEDIT

                               Do not include a "\" at the end of the
                               subdirectory name.

          Data Drive\Path:     Enter the drive and full path where your
                               database files reside.  If you wish to use
                               the sample data provided, enter:

                                        A:\  or  C:\dEDIT

                               The former is for floppy disk systems and
                               the latter for hard disk systems.

          Database extension   Enter the database file name extension.  DBF
                               is the default.

          Index extension      Enter the index file name extension.  NTX is
                               the default.

          An error message will be displayed if you do not enter a company
          or your name or if you enter an invalid drive/path.  Press any
          key and you will be given an opportunity to re-enter the
          information.

          After completing the setup screen, the copyright notice will be
          displayed for 3 seconds after which you will be given an
          opportunity to enter today's date.  Make any change you want and
          press ENTER or press ENTER to accept the date displayed.

          Upon entering a date, the Main Menu will appear.

                                          4














                                  PROGRAM OPERATION



          Starting dEDIT

          To start dEDIT, type dEDIT at the DOS prompt and press ENTER (or
          RETURN on some keyboards).


          Copyright

          After a few seconds, the program's copyright notice will appear. 
          This notice will be displayed for 3 seconds or until any key is
          pressed.


          Date

          The program will display the current DOS date.  This date can be
          changed or press ENTER to accept the date displayed.


          Main Menu

          The Main Menu displays all of the program's functions.  A menu
          option can be selected either by pressing the first letter of the
          menu option and pressing ENTER or by using the cursor keys to
          move the highlight bar to the item of interest and pressing
          ENTER.

          Pressing F1 will display information on how to register your copy
          of dEDIT and how to receive an enhanced version of the program.


          Edit Database

          Selecting Edit Database will display a list of database files
          that reside in the data drive path specified during the
          installation process or Main Menu option 2, Change Defaults.  If
          no database files exist, then an error message will be displayed. 
          (Note: only dBase III and 100% compatible files with the
          extension DBF can be used by dEDIT.)  A database can be selected
          either by pressing the first letter of the name of the database
          and pressing ENTER or by using the cursor keys to move the
          highlight bar to the item of interest and pressing ENTER.






                                          5












          Upon selecting the database, you will asked if you wish to use an
          index.  Selecting "N" will immediately display the database edit
          screen.  Answering "Y" will display a list of all files with
          extensions matching the extension entered during the installation
          process or from Change Defaults(see below).  Select the index
          file of your choice either by pressing the first letter of the
          name of the database and pressing ENTER or by using the cursor
          keys to move the highlight bar to the item of interest and
          pressing ENTER.  Upon selecting an index, the database edit
          screen will be displayed.  (Please note that only indexes having
          the extension NTX can be used with this version of the program. 
          If the select file is not a valid index file, an error message
          will be displayed.  Upon registering, you can optionally order a
          version of the program that can use dBase III index files.)  Be
          sure that the index selected belongs to the selected database,
          otherwise, an error message will be displayed at in the middle of
          your screen.  Should this happen, press any key to try again. 
          Only one index can be selected for a database.

          The database edit screen will allow you to edit or browse the
          selected database.  The names of the database fields will be
          displayed at the top of the edit screen.  All fields will be
          displayed.  Long fields will only display the first 50
          characters.  However, the edit mode allows for horizontal
          scrolling of long fields so that the entire field can be viewed
          and edited.  Data will be in record number order unless you
          specified an index.  In the latter case, the data will be in the
          order specified by the index.  Memo fields cannot be edited.  

          The edit screen will initially be in the browse mode and the 
          following keys can be used.

          Up arrow             Up one row
          Dn arrow             Down one row
          Left arrow           Left one column
          Right arrow          Right one column

          PgDn                 Next screen
          PgUp                 Previous screen
          Ctrl-PgDn            Last row of current column
          Ctrl-PgUp            First row of current column
          Home                 Leftmost current screen column
          End                  Rightmost current screen column
          Ctrl-Home            Leftmost column
          Ctrl-End             Rightmost column

          F2                   Go to record
          F3                   Search current field
          F4                   Permanently remove all deleted records
          F5                   Remove all records from database
          Del                  Delete/Recall current record
          ESC                  Leave edit screen

                                          6












          Some of the above keys should be used with extreme caution. The
          F4 key will pack the database.  Packing the database will
          permanently remove all records that are marked for deletion. 
          After packing the database, deleted records cannot be recalled. 
          The F5 key will permanently remove all records from the database. 
          Use with caution.

          The search feature (F3) will display only the first 20 characters
          of a character field.  However, search strings longer than 20
          characters can be entered by scrolling horizontally to the right. 
          The HOME and END keys can be used to move the cursor to the far
          left and far right respectively.

          To edit a database field, move the cursor to the appropriate cell
          and press ENTER.  This initiates the cell edit mode and the
          following keys become active.

          Left arrow           One character to the left
          Right arrow          One character to the right
          Home                 First character in field
          End                  Last character in field   

          Del                  Delete character at cursor position
          Ins                  Toggle on/off insert mode

          Enter                Stop edit - cursor moves right
          Down arrow           Stop edit - cursor moves one row down
          Up arrow             Stop edit - cursor moves one row up


          When editing is completed, return to the browse mode and press
          ESC.

          After using dEDIT, it might be necessary to enter your
          application and reindex the databases to make sure that the index
          files reflect the changes that you made in your data.  If you
          only used dEDIT in the browse mode, then this step is not
          necessary.















                                          7













          Change Defaults

          The drive/path, database file extension, and index file extension
          used by dEDIT to look for database and index files can be changed
          from what was established during installation.

          To change the data drive/path, select Change Defaults from the
          Main Menu.  The current data drive/path will be displayed. Enter
          the new drive and full path where your data files reside.  For
          floppy disk systems enter:

                                   B:\

          and press ENTER to select Drive B, for example.  You must include
          a "\" after the ":".

          For hard disk systems, enter (for example):

                                    C:\dEDIT

          and press ENTER.  Do not include a "\" at the end of the
          subdirectory name.

          Selecting an invalid drive/path will produce an error message. 
          Press any key to try again.  After entering any changes, a prompt
          will be displayed to confirm the changes.  Answer "N" to edit the
          changes or "Y" to accept.

          To change the default file name extension for database and index
          files, select Change Defaults from the Main Menu.  The current
          setting will be displayed.  You may change these as desired. 
          Wild card characters "?" and "*" can be used.  Using "*" will
          list all files in the directory.  This method must be used for a
          database or index file which does not have an extension to its
          file name.  Sample database and index files with "SAM" as the
          file name extensions have been provided with dEDIT. 


          Quit

          To leave dEDIT, select Quit from the Main Menu.  You will return
          to DOS.










                                          8













                                       GLOSSARY


          Browse Mode    The mode in which you can view the information
                         contained in the database.  No changes can be made
                         to the data.


          Database       A collection of related information consisting of
                         one or more records.  Each record can contain one
                         or more fields.

          Delete         Mark a record deletion.  Packing will permanently
                         remove the record from the database.


          Edit Mode      The mode in which you can change information
                         contained in a field (cell) of a record.


          Fields         A collection of information such as last name or
                         quantity.


          Index          An index controls how the order of the records
                         contained in the database is displayed in the edit
                         screen.  The order is based on one or more fields.

          Pack           Permanently remove deleted records from the
                         database.

          Recall         Undelete a record.


          Record         One set (row) of database information containing
                         one entry for each field.

          Zap            Permanently remove all records, whether marked for 
                         deletion or not, from the database.













                                          9




```
{% endraw %}

## FILE1569.TXT

{% raw %}
```
Disk No: 1569                                                           
Disk Title: dEdit                                                       
PC-SIG Version: S1.1                                                    
                                                                        
Program Title: dEdit                                                    
Author Version: 1.10                                                    
Author Registration: $20.00                                             
Special Requirements: 320K RAM and two floppy drives.                   
                                                                        
If you need a faster, easier way to correct or update data in your      
database files then consider dEDIT.  dEDIT allows direct editing of     
dBase III and 100% compatible database files such as Clipper, Foxbase   
and PC-File:dB without having to go into your database program.         
                                                                        
Often database applications prevent users from directly accessing       
database information either to edit or to simply browse information.    
dEDIT was created to allow the user to easily enter the database and    
bypass this restriction.  Some database application programs don't allow
the user to easily correct mistakes made in data entry.  dEDIT allows   
the user to access data files directly, find the error(s), and correct  
them.                                                                   
                                                                        
Although dEDIT was created for the purposes previously mentioned, users 
have found that it is often easier and faster to edit information with  
dEDIT than to struggle with the myriad of menus and editing screens     
that clog their application programs.                                   
                                                                        
Beginners will appreciate how easy it is to use the program and that no 
special knowledge of dBase, Clipper, Foxbase, of PC-File:dB is needed.  
Experienced users will appreciate the speed at which database files can 
accessed.                                                               
                                                                        
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## FILES.TXT

{% raw %}
```
              Disk file listing

AUTOEXEC BAT        DOS autoexec.bat file
DOC      BAT        Program to print documentation
HDINSTAL BAT        Installatin program for hard disks
RUNME    BAT        Instructions
CUSTOMER DBF        Sample database
ORDERS   DBF        Sample database
PRODUCTS DBF        Sample database
SALESMAN DBF        Sample database
STATES   DBF        Sample database
CUSTOMER DBT        Memo field for customer.dbf
DEDIT    DOC        Documentation
DEDIT    EXE        dEDIT program
READ     ME         Latest information regarding dEDIT
CUSTOMER NTX        Sample index
ORDERS   NTX        Sample index
PRODUCTS NTX        Sample index
STATES   NTX        Sample index
APVENDOR SAM        Sample database
APVENDXX SAM        Sample index
GLCHART  SAM        Sample database
GLCHRTXX SAM        Sample index
GLDATA   SAM        Sample database
GLDATAXX SAM        Sample index
CONFIG   SYS        DOS Config.sys file    
FILES    TXT        This file


```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                   <<<<  Disk #1569   dEDIT  >>>>                        ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To start dEDIT, type:  DEDIT (press enter)                              ║
║ To install dEDIT to a hard disk, type:  HDINSTAL (press enter)          ║
║                                                                         ║
║ To print documentation, type:  RUNME (press enter)                      ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1569

     Volume in drive A has no label
     Directory of A:\

    APVENDOR SAM      1590  12-07-89   6:57p
    APVENDXX SAM      2048  12-07-89   6:57p
    AUTOEXEC BAT        41  12-07-89   6:57p
    CONFIG   SYS        22  12-07-89   6:57p
    CUSTOMER DBF      4919  12-07-89   6:57p
    CUSTOMER DBT       512  12-07-89   6:57p
    CUSTOMER NTX      2048  12-07-89   6:57p
    DEDIT    DOC     19476  12-07-89   6:57p
    DEDIT    EXE    209984  12-07-89   6:57p
    DOC      BAT       913  12-07-89   6:57p
    FILE1569 TXT      2813   1-02-90   6:26p
    FILES    TXT      1010  12-07-89   6:57p
    GLCHART  SAM      5753  12-07-89   6:57p
    GLCHRTXX SAM      4096  12-07-89   6:57p
    GLDATA   SAM     12931  12-07-89   6:57p
    GLDATAXX SAM      4096  12-07-89   6:57p
    GO       BAT        38   1-01-80   1:56a
    GO       TXT       617  12-29-89  11:26a
    HDINSTAL BAT       910  12-07-89   6:57p
    ORDERS   DBF      1024  12-07-89   6:57p
    ORDERS   NTX      2048  12-07-89   6:57p
    PRODUCTS DBF      1024  12-07-89   6:57p
    PRODUCTS NTX      2048  12-07-89   6:57p
    READ     ME        447  12-07-89   6:57p
    RUNME    BAT       177  12-07-89   6:57p
    SALESMAN DBF       162  12-07-89   6:57p
    STATES   DBF      1354  12-07-89   6:57p
    STATES   NTX      4096  12-07-89   6:57p
           28 file(s)     286197 bytes
                           25600 bytes free
