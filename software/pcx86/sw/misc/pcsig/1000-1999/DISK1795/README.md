---
layout: page
title: "PC-SIG Diskette Library (Disk #1795)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1795/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1795"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "MAILING-MADE-EZ"

    This address manager/mailing label system is so easy to use that you
    won't even need to read the instructions.  Intuitive design and pop-up
    menus will guide you through the entire program.
    
    The pop-up menu command consists of self explanatory choices like add,
    browse, delete, edit, find, print, and a few more.  These are all you
    need to work with most mailing lists.  If you should ever need more
    power, your data files can be crunched by any database software that
    uses standard dBASE file format.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1795.TXT

{% raw %}
```
Disk No: 1795                                                           
Disk Title: Mailing-Made-EZ                                             
PC-SIG Version: S1.02                                                   
                                                                        
Program Title: Mailing-Made-Ez                                          
Author Version: 1.02                                                    
Author Registration: $25.00                                             
Special Requirements: 512K RAM, and two floppy drives or a hard drive.  
                                                                        
This address manager/mailing label system is so easy to use that you    
won't even need to read the instructions.  Intuitive design and pop-up  
menus will guide you through the entire program.                        
                                                                        
The pop-up menu command consists of self explanatory choices like add,  
browse, delete, edit, find, print, and a few more.  These are all you   
need to work with most mailing lists.  If you should ever need more     
power, your data files can be crunched by any database software that    
uses standard dBASE file format.                                        
                                                                        
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
║                 <<<<  Disk #1795  MAILING-MADE-EZ  >>>>                 ║
╠═════════════════════════════════════════════════════════════════════════╣
║                                                                         ║
║ To print documentation, type: COPY MANUAL.DOC PRN                       ║
║                                                                         ║
║ To install the program, type: INSTALL                                   ║
║                                                                         ║
║ To start program, type: MME                                             ║
║                                                                         ║
║                                                                         ║
║                                          COPYGIGHT (c) 1990 PC-SIG INC  ║
║                                                                         ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## MANUAL.DOC

{% raw %}
```

















                             MAILING - MADE - EZ
                               USER'S  MANUAL


























                                        Copyright (c) 1990 by

                                            COMPUTELEDGE, Inc.
                                            2305 West 47th Street
                                            Chicago, IL  60609
                                            312-376-0411



                         TABLE OF CONTENTS




      SYSTEM REQUIREMENTS ...................................... 1

      PROGRAM OVERVIEW ......................................... 1

      INSTALLATION

         CONFIG.SYS ............................................ 2
         HARD DRIVE ............................................ 2
         FLOPPY DRIVE .......................................... 2

      OPERATION

         MAIN MENU ............................................. 4
         VIEW SCREEN ........................................... 4

         POP UP MENU COMMANDS

                ADD ............................................ 5
                BROWSE ......................................... 5
                DELETE ......................................... 5
                EDIT ........................................... 5
                FIND ........................................... 5
                GOTO ........................................... 6
                HIDE ........................................... 6
                LABEL .......................................... 6
                MARK ........................................... 7
                PRINT .......................................... 7
                SWITCH ......................................... 8

         FILE MAINTENANCE MENU

                CHANGE DRIVE DATA .............................. 9
                CHANGE DEFAULT DATA ............................ 9
                BACKUP DATA .................................... 9
                RESTORE OLD DATA .............................. 10
                REMOVE OLD DATA ............................... 10
                REBUILD INDEXES ............................... 10
                PACK FILES .................................... 10

          LABEL SIZES ......................................... 11

          REGISTRATION FORM ............................. APPENDIX


                                                             Page  1



    SYSTEM REQUIREMENTS

    IBM XT, AT or compatible, 384K of memory, two floppies or one hard
    and one floppy, and MS-DOS 2.0 or greater.


    PROGRAM OVERVIEW

    People oriented database useful for keeping personal details and
    generating lists and mailing labels with very little effort.

    The purpose of this program is to present a package that you can use
    with very little invested learning time.  To achieve this goal we had
    to limit the options included.  Using dBase III+, dBase IV, R:Base,
    or Paradox will allow you to perform all of this program's functions
    plus hundreds of others.  But since many users neither have the time
    nor the inclination to learn how to use such programs their power re-
    mains dormant.  We have tried to develop a highly functional mail list
    database to be as useful to the general user as possible.

    We realize that there are a lot of users that have specific needs.  We
    can build a mailing system for them based on this program.  For a modest
    fee we can modify this program to suit your needs, for example make
    field changes, label size changes, category changes, etc.

    We are adopting the shareware concept for the distribution of this pro-
    gram.  You may freely copy and distribute this program to anyone.  How-
    ever selling this program for more than a reasonable copying fee is
    prohibited.   If you find this program useful, we would like you to re-
    gister your copy for a fee of $25.00.  In addition to receiving a bound
    manual and the latest update of our program, you will receive free eva-
    luation copies of any other software that we intend to market.  Our
    immediate goals are to create software to span all areas of small busi-
    ness, and we are sure that some of these programs may be very useful to
    you.

    To register the program please fill out the form on the last page of
    this documentation.  If our software is to grow, we need your comments
    on the bugs you may have discovered, what improvements should be made,
    or what options you feel should be added.  If you wish modifications
    to personalize this program, make a precise list of all the changes de-
    sired and send it to us and we will write or call you with our modifi-
    cation fee.  If you have any ideas for software that you have not seen
    on the market, but feel should be, let us know and we'll see what we
    can do.   Address all inquiries  to

                        Computeledge, Inc.
                        2305 West 47th Street
                        Chicago,  IL    60609
                        (312) 376 - 0411


                                                             Page  2

    INSTALLATION

    The install program will initialize Mailing-Made-Ez. All you do is an-
    swer the questions asked by the program.  Since it is possible to use
    the program on a hard drive or a two floppy system you have a choice as
    to how you want to direct the installation.

    HARD DRIVE SYSTEM INSTALLATION

    If you are using a hard drive, enter "a" when making the first menu choice.
    This selects the hard drive installation procedure.  During the course
    of the installation you are asked for the boot drive and the drive you
    want the program installed on.  Normally this is the same drive but there
    are individuals with either two hard drives or a single physical drive
    partitioned into two drives.  Press the letter of the drive used to boot
    the computer then press the letter of the drive you want the program to
    be installed on.

    The installation program will create a directory named MME and copy the
    needed files from A: to this directory.  If for some reason an MME
    directory already exists on your hard drive, it will ask for another
    nonexistent directory to create and copy the program files to.

    After copying all the needed files to the created directory, it will
    go to the root directory and examine if a config.sys file exists that
    contains the entries

                        BUFFERS=15
                        FILES=20

    If no config.sys exits it will create one.  If one exists it will copy
    it to a file named config.old, then check if the above two entries are
    present or entries containing greater file and buffer numbers.  If either
    one or the other entry is absent or the entries have smaller buffer or
    file numbers the program will correct or add the necessary entries.
    However, the program preserves all other lines in the current config.sys
    so other programs that depend on it remain unaffected.  The config.old
    is created as a safeguard in the event power failure occurs during the
    time your config.sys is being altered.  In that case you just rename
    config.old to config.sys and you are back where you started.

    The program will then ask for the directory where your DOS files are
    stored.  This is necessary only if you wish to use the DOS backup and
    restore commands for your backups.  If you plan to use your data in
    for WordPerfect mail merges, it is convenient to specify the direc-
    tory where you keep your WordPerfect files so that Mailing-Made-Ez
    could write the secondary merge files it creates to this directory.
    If this directory is not specified and you choose to create secondary
    merge files, they will be written to the Mailing-Made-Easy data dir-
    ectory.  You may change any directories used by Mailing-Made-Ez after
    installation using the File Maintenance Menu.


                                                             Page  3

    TWO FLOPPY SYSTEM INSTALLATION

    IF you have two floppies insert your distribution disk in A, and run
    the Install program.  Enter "b" when making the first menu choice.
    Follow the directions of the install program.  It will create two
    floppies that you will use for operation.  First it creates a data
    disk then a program disk.

    During the installation you will be asked to insert the disk used
    to boot your computer.  The installation program will the check to
    see if a config.sys file is present and if it contains the following
    entries:

                        BUFFERS=15
                        FILES=20

    If no config.sys exits it will create one.  If one exists it will copy
    it to a file named config.old, then check if the above two entries are
    present or entries containing greater file and buffer numbers.  If either
    one or the other entry is absent or the entries have smaller buffer or
    file numbers the program will correct or add the necessary entries.
    However, the program preserves all other lines in the current config.sys
    so other programs that depend on it remain unaffected.  The config.old
    is created as a safeguard in the event power failure occurs during the
    time your config.sys is being altered.  In that case you just rename
    config.old to config.sys and you are back where you started.

    There is also option "c" as the first menu choice of the install program.
    This copies the proper files on a disk that are needed to use for extra
    data storage.  This option is primarily intended for two drive users
    after they run out of room on their initial data disk.  This option
    allows the user to have multiple databases on different disks.  Hard
    disk users can have floppy disk databases also.  They can switch from
    hard drive directories to floppies using File Maintenance Menu - Change
    Drive Data option.

                                                             Page  4
    OPERATION

    MAIN MENU

    The main menu allows you to group your data into three categories,
    CUSTOMER DATA, VENDOR DATA, and PERSONNEL DATA.  If you select any one
    of these categories and your database is empty you will go directly to
    the add screen until at least one record is added.  When you leave the
    add screen after adding one or more records, you will be placed in the
    VIEW SCREEN displaying the last record added.  If records are present
    when one of the three data items is selected, then you are placed in
    the VIEW SCREEN displaying the last record added.

    The main menu also allows you to enter the File Maintenance Menu.  This
    area contains utilities to set your drive defaults and company title, to
    backup your data, remove records from databases,  pack databases (remove
    deleted records permanently), and rebuild corrupted indexes.

    To select a menu item move the menu bar over your selected entry and press
    the ENTER key or press the number of the menu item desired. Pressing zero
    will allow you to exit to DOS.  You must confirm that you want to exit by
    pressing y or ENTER in response to the question "Do you want to exit to
    DOS?" If you press n you will remain in the program.

    VIEW SCREEN

    The VIEW SCREEN presents the current record along with a bottom menu
    showing the keys.

    Up Arrow         Moves one record up

    Down Arrow       Moves one record down

    PgUp             Moves ten records up

    PgDn             Moves ten records down

    /                Brings up popup menu

    Esc              Exit to main menu

    F2               Allows you to edit current record
                     (Same as  / Edit function)

    F3               Tags untagged record or Untags tagged record
                     (Same as / Mark One function)

    F4               Marks record for deletion or unmarks deleted
                     record (Same as / Delete function)

    F5               Finds a record by company or last name
                     (Same as / Find function)

    F8               Hides all deleted records if not hidden or
                     Displays deleted records if hidden
                     (Same as / Hide function)


                                                             Page  5

   The upper left hand corner indicates the selected label size.

   Next to it the time and date are displayed.

   Just to the right of the date is a space reserved for the word "hidden"
   which appears if the deleted records are made invisible.

   The upper right corner indicates the current way the records are organ-
   ized:  By number according to number, by name in alphabetical order, or by
   zip in zipcode order.


    POP UP MENU COMMANDS

    Add     Brings up the ADD screen and allows you to add records to the
            selected database. If the ESCAPE is pressed on a blank screen
            you will exit to the VIEW screen displaying the last added re-
            cord. If you just started and the database is empty you will
            automatically go to the ADD screen.  You can not go to the
            VIEW screen until you have at least one record entered into the
            selected database.

    Browse  Allows you to look through a screenful of records. UP and DOWN
            arrow keys move from record to record while PG UP and PG DN keys
            jump over 20 records at a time.  To edit a field press ENTER
            once and you can change what is in that field.  Pressing ENTER
            again accepts the edited entry.  Pressing the ESCAPE key will
            leave the BROWSE screen and return you to the VIEW screen at the
            record you had last highlighted when in the BROWSE screen.

    Delete  (Toggle key) Pressing this key when a record is undeleted marks
            the record for deletion.  Pressing this key when the record is
            marked DELETED undeletes or recalls the record.  When a record
            is deleted and the records are marked as hidden the records be-
            come invisible, the print or label menu options will not recog-
            nize these records.  When not hidden, all deleted records can be
            viewed and printed normally.  Deleted records can be permanently
            removed using the PACK option in the FILE MAINTENANCE MENU.  The
            F4 key when pressed from the normal operating mode of the VIEW
            screen will act as the Delete on the pop up menu.

    Edit    Causes the EDIT screen to appear and allows you to edit the cur-
            rent record. To terminate the edit at any field Press ESCAPE.
            You will be asked if the edited data is correct, if you want to
            reedit the data answer "n" and you will have another chance.  If
            you answer "y" you will leave the EDIT screen and return to the
            VIEW screen. The F2 key when pressed from the normal operating
            mode of the VIEW screen will elicit the same response as Edit.


    Find    Cause a prompt at the bottom of the screen to appear asking for
            Company or Last Name to go to? Type the company name or if there
            is no company type the last name.  You need not even have entire
            names. For example typing "MA" will go to the first name starting
            with "MA". If neither a company nor a last name is found a beep
            is sounded and you are returned to the VIEW screen. If either a
            company or last name is found the record appears immediately on



                                                             Page  6

            the VIEW screen.  If both a company and last name are found a
            prompt appears asking if you intended to search for a company. 
            If you answer "y" the record containing the company appears on the
            VIEW screen otherwise the record containing the last name appears
            on the VIEW screen and you are returned to normal VIEW screen op-
            erations.

   Goto     Submenu Bottom - Goes to last record and returns you to normal
            VIEW screen operations.

            Submenu Number - Goes to record number you enter and returns you
            to normal VIEW screen operations.

            Submenu Top - Goes to first record and returns you to normal VIEW
            screen operations.

            Bottom and Top have different meanings depending on the viewing
            mode.  For example, if records are viewed by Name (alphabetically),
            the top record is the one whose last name starts with the lowest
            letter of the alphabet.  If the records are viewed by number the
            top record is the one that was entered first.

    Hide    (Toggle key) Hides deleted records if the records are displayed,
            or unhides them if they were hidden.  When a record is hidden it
            is as if it is not there, it can not be viewed or printed.  When
            deleted records are displayed they act like normal records.  To
            permanently remove deleted records use the PACK option on the FILE
            MAINTENANCE MENU.  The F8 key when pressed from the normal oper-
            ating mode of the VIEW screen acts like the Hide on the pop up
            menu.

    Label   Submenu All - Prints labels for entire database

            Submenu Company - Prints company labels with or without a phone
            number. The information printed is entered by accessing the
            DEFAULT DATA of the FILE MAINTENANCE MENU.  If you want phone
            printed answer "Y" to the question print first phone on label.

            Submenu Limited - Prints labels from records starting at a speci-
            fic number and ending at a specific number.  The valid numbers
            are displayed before you are asked for a starting number and ending
            number.  Entering an invalid number will cause a beep and exit.

            Submenu Size - A screen pops up allowing you to pick a label size
            for supported labels. You are prompted to pick a number to set the
            label size.  After picking the number you are returned to normal
            VIEW screen operation.

            Submenu Tagged - Prints all labels previously tagged from the
            VIEW screen using the F3 key or the MENU MARK ONE key sequence.


                                                             Page  7




    Mark    Submenu All - Tags all records that can be used for report or
            label printing.  The purpose of tagging all records is when you
            desire most records to be printed, you can subsequently untag the
            records you do not need.

            Submenu One - (Toggle key) Tags record if record is untagged or
            untags record if record is tagged.  It is easier to use the F3
            key for this purpose if tagging multiple records is desired.

            Submenu Untag All - Untags all records so that you can start from
            scratch and review and tag all the records you find useful for a
            particular mailing.

    Print   Submenu Printer
            When selecting this submenu all output is directed to the line
            printer.

            Submenu All - Prints list of all records in the entire database

            Submenu Deleted - Prints records which have been marked for dele-
            tion.  The purpose of this function is to allow you to see if you
            really want to completely eliminate some records using the PACK
            section of the FILE MAINTENANCE MENU.  Deleted records can be un-
            deleted using the Delete menu function or key F4.

            Submenu Limited - Prints records starting at a specific number
            and ending at a specific number.  The valid numbers are display-
            ed before you are asked for a starting number and ending number.
            Entering an invalid number will cause a beep and exit.

            Submenu One - Prints the record currently displayed on the VIEW
            screen.

            Submenu Tagged - Prints all records previously tagged from the
            VIEW screen using the F3 key or the MENU MARK ONE key sequence.

            Submenu WordPerfect File
            If this submenu is selected WordPerfect secondary merge files
            are created using Mailing-Made-Ez data.  Under this option you
            will be asked to enter a file name.  Enter just the name.  The
            extension .MRG is automatically appended to the merge file to
            let you know it was created with Mailing-Made-Easy.  The file
            is saved to the WordPerfect directory you specify during the
            installation or through the File Maintenance Menu.  If a file
            with the same name exists you are asked if you want to over-
            write it.  If you say no you are asked for another file name
            otherwise the old file is overwritten.


                                                             Page  8


            You are also asked if you want the merge file to be in upper
            format.  For the sake of consistency and easier indexing, data
            is stored in upper case format.  You may wish your data in
            "proper" format for your merged documents.  "Proper" format capi-
            talizes only the first letter of each word.  If you desire this
            answer "N" to when asked if you desire upper format.  Some names
            that require capital letters in assorted positions may not be
            converted to "proper" format correctly.  You can examine your
            merge files and make these minor corrections if needed.

            In order for the files created by Mailing-Made-Easy to work
            in WordPerfect merges you must load the .MRG file using the
            WordPerfect F5 - 1 key and save it to itself using the F7
            key.  This converts the file to WordPerfect format.  Then
            you are ready to create a primary file and use CTRL-F9 to
            merge the primary file with the data from the Mailing-Made-
            Ez secondary file. (See your WordPerfect manual).

            Submenu All - Creates a WordPerfect secondary merge file
            consisting of all records in the entire database.

            Submenu Limited - Creates a WordPerfect secondary merge file
            beginning with a specific record number and ending at a specific
            number.  The valid numbers are displayed before you are asked
            for a starting number and ending number.  Entering an invalid
            number will cause a beep and exit.

            Submenu Tagged - Creates a WordPerfect secondary merge file for
            all records tagged from the VIEW screen using the F3 key or the
            MENU MARK ONE key sequence.

    Switch  Submenu Alphabetical - Arranges records in alphabetical order.
            The record order is by Company + Last + First.

            Submenu Number - Arranges records by customer, vendor, or em-
            ployee number.  The last record added has the highest number.

            Submenu Zip - Arranges records in zipcode order.  The record
            order is by Zip + Company + Last + First.

            The BROWSE screen and all printing will follow the set order.
            Labels will follow the set order unless you overide this with the
            zip order.

                                                             Page  9

    FILE MAINTENANCE MENU

    The File Maintenance Menu contains the following items:

    CHANGE DRIVE DATA

    You are first asked for the drive and directory of your dos files.  The
    purpose of this is so that the program can find the DOS backup command
    when it is required.  On a two disk system the DOS backup command is
    not required; the copy command is sufficient to backup all data since
    the total file size never exceeds the capacity of a single disk. If
    you are not using the DOS backup command this item will have no meaning.

    You are then asked for the location of your data files.  Enter a drive
    or drive path where all the data files are located.  For example
    c:\mail would be a valid entry.

    You are finally asked for a backup drive.  You can use a drive/path de-
    signation to backup your data to another directory.


    CHANGE DEFAULT DATA

    First you are asked if you want the program to hide deleted records by
    default.  If you select y then everything you delete will be made in-
    visible.  You cannot restore deleted records until you remove the hidden
    property by pressing / Hide function or selecting n from this screen.
    The selection made from this screen will be in effect when the program 
    is started.

    Next you are asked for the default way your records are organized, by
    name, number, or zip.     Records will be organized in the selected way
    until you use the / Switch function to set them differently or make a
    different selection from this screen.  The selection made from this 
    screen will be in effect when the program is started.
      
    Next you enter your company data.  This data is used to print your
    company label using the / Label Company function. 
    
    You will be asked the starting number for your records.  Select any
    number that is six digits or less.  When you have an empty database,
    numbering will start with this number and each subsequent record will
    be automatically increased by one.

    Finally you are asked for the default city and state that appears when-
    ever you add new records.  Leave blank if these defaults are not required.
    When adding records, all you need do is press enter to accept the default
    default city and state.  If the city and state are different you may type
    over these defaults.

                                                             Page  10

    BACKUP DATA

    This utility is especially useful if you are using a hard drive system.
    Prior to using this utility you must specify what your backup drive
    will be from the CHANGE DRIVE DATA section of the FILE MAINTENANCE MENU.
    You then must insert the formatted disk that you will be using for your
    backup.  If there is enough room on your backup disk, you are asked if
    you want to use the copy command.  If you are using a hard drive system,
    files backed up with the copy command can be viewed by changing the
    data drive to a floppy drive using the CHANGE DRIVE DATA section of
    the FILE MAINTENANCE MENU and using the program normally.  Not all files
    can fit on one backup disk and as a result you may have to use the DOS
    backup command.  The disadvantage of this is that the backed up files
    must be restored before they could be viewed.  The advantage of this
    method is that the database files can be as long as the available hard
    disk space and still be able to be backed up on multiple floppies.

    When using the backup option be sure that you have enough formatted
    disks to hold all the backed up files.


    RESTORE DATA

    If you have made backup copies using the DOS backup this function
    will put back your old files on the hard disk again.  Your old files
    will be restored to the directory they were taken from.  This means
    the current files will be overwritten.  If you want to preserve the
    current files, back them up, restore the old files and view them.
    When you are done restore the current files.


    REMOVE OLD DATA

    This utility will remove all data from either the Customer, Vendor,
    or Personnel database.  Needless to say, use this utility with ex-
    treme caution.  You are asked if you would like to backup your
    old records prior to removal.  You can quit this utility at any
    time using the escape key.  If you confirm that you want to proceed,
    all records in the designated section will be permanently removed.


    REBUILD INDEXES

    At times index files become corrupted.  This usually happens because
    power is shut off when viewing or adding to a database.  If you run
    into this problem use this utility and the problem will be corrected
    if the main database was not damaged.


    PACK FILES

    To pack a file means to permanently eliminate all the deleted records
    in the file.  To see which records are deleted, you can make a print-
    out of all deleted records before packing.  It is also a good idea to
    backup your data prior to packing, since the database could be damaged
    if there was a power outage while the pack was in progress.
                                                            Page  11


    LABEL SIZES

    Currently there are 7 types of labels supported by Mailing-Made-Ez.

    Three types are supported for laser printers.  These are marked with an
    "L" in the label definition.  Laser printer labels will eject after every
    page including the last page.  The matrix labels will not eject after the
    labels have been printed.  The following is a list of the labels that are
    supported:

    DOT MATRIX

    3.5" X 0.9375" one across
    3.5" X 0.9375" two across
    4.0" X 1.4375" one across
    4.0" X 1.4375" two across

    LASER PRINTER

    2.75" X 1.00" three across  (copy machine)
    4.00" X 1.00" two across
    2.58" X 1.00" three across

    When using three across laser printer labels make sure that you use
    enough abbreviations to have the text small enough to fit on the label.

                                                             Page  12


    dBase III+ and dBase IV are trademarks of Ashton-Tate, Inc.
    R:Base is a trademark of Microrim, Inc.
    Paradox is a trademark of Borland International, Inc.
    WordPerfect is a trademark of WordPerfect Corporation.

    DISCLAIMER

    In no event shall Computeledge, Inc. be liable for any loss of profit
    or any other damage, including but not limited to special, incidental,
    commercial, consequential or other damages of any kind resulting from
    defects in this software or its documentation.



                         REGISTRATION  FORM






    NAME    ____________________________________________________________

    COMPANY ____________________________________________________________

    ADDRESS ____________________________________________________________

    CITY    ________________ STATE _________________ ZIP _______________

    PHONE   ______________________________________________


    COMMENTS ___________________________________________________________

    ____________________________________________________________________

    ____________________________________________________________________

    ____________________________________________________________________

    ____________________________________________________________________

    ____________________________________________________________________

    ____________________________________________________________________


    Send completed form with $25.00 to

    Computeledge, Inc.
    2305 West 47th Street
    Chicago, IL  60609

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1795

     Volume in drive A has no label
     Directory of A:\

    MME      EXE    190416   7-05-90  10:33p
    MME1     OVL     30800   7-05-90  10:33p
    MME2     OVL     16608   7-05-90  10:33p
    INSTALL  EXE     25598   7-12-90   9:51p
    MANUAL   DOC     32218   7-01-90  11:00p
    COMPANY  DBF       525   7-12-90   8:52p
    CUSTOMER DBF       386   7-12-90   8:50p
    LABCFG   DBF       441   7-12-90   9:17p
    PERSON   DBF       386   7-12-90   8:50p
    TEST1    DBF      1024   7-04-90  10:45p
    TEST2    DBF      1536   7-04-90  10:44p
    VENDOR   DBF       386   7-12-90   8:50p
    CNUMDEX  NDX      1024   7-12-90   8:50p
    CUSTDEX  NDX      1024   7-12-90   8:50p
    CUSTZIP  NDX      1024   7-12-90   8:50p
    PERDEX   NDX      1024   7-12-90   8:50p
    PERZIP   NDX      1024   7-12-90   8:50p
    PNUMDEX  NDX      1024   7-12-90   8:50p
    VENDEX   NDX      1024   7-12-90   8:50p
    VENDZIP  NDX      1024   7-12-90   8:50p
    VNUMDEX  NDX      1024   7-12-90   8:50p
    COLOR    MEM       395   6-30-90  12:48a
    CUST     MEM       162   6-14-89   1:53p
    MONO     MEM       405   7-10-90   9:29p
    NUM      MEM       363   7-12-90   8:52p
    PER      MEM       158   6-14-89   1:53p
    VEND     MEM       159   6-14-89   1:53p
    GO       BAT        38   1-01-80   1:37a
    GO       TXT      1079   8-13-90   2:43a
    FILE1795 TXT      1777   8-14-90   1:01p
           30 file(s)     314076 bytes
                           35840 bytes free
