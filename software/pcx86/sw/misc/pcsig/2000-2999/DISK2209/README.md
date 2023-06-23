---
layout: page
title: "PC-SIG Diskette Library (Disk #2209)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2209/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2209"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "DSKRAK"

    Quickly organizes your software into a professional library with fast
    access to information about specific files or programs.
    
    DSKrak manages your software by dividing your programs into "trays" of
    diskettes in the same way that you would use a tray to store disks.
    Each disk in a particular tray can be assigned a number from 0-999.
    Each record, which you can browse or print, contains a wide variety of
    important information that you can use to find your software. As well
    as tray and disk number, add title, comments, user-definable
    categories, and the total number of bytes available on a particular
    disk.
    
    Create a comprehensive printed index listing for use outside the
    program. Sort by number, category, or file name. When you're looking
    for that specific program, or want to see exactly what game or utility
    programs you've got, you'll have complete information at your
    fingertips.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE2209.TXT

{% raw %}
```
Disk No: 2209                                                           
Disk Title: DSKrak                                                      
PC-SIG Version: S2                                                      
                                                                        
Program Title: DSKrak!                                                  
Author Version: 3.00                                                    
Author Registration: $24.95                                             
Special Requirements: 384K RAM.  Hard drive recommended.                
                                                                        
A program that quickly organizes your software into a professional      
library which allows fast access to information about a particular data 
file or program.                                                        
                                                                        
DSKrak manages your software on floppy disk by dividing your programs   
into "trays" of diskettes in much the same way that you would normally  
use a tray to store disks.  Each disk in a particular tray can be       
assigned a number from 0-999.  Each record, which you can browse or     
print, contains a wide variety of important information that you can    
use to find your software.  In addition to tray and disk number, you can
add title, comments, user definable categories, and the total number of 
bytes avaliable on a particular disk.                                   
                                                                        
DSKrak can create a comprehensive printed index listing for use outside 
the program.  It can sort by number, category, or file name.  So when   
you're looking for that specific program, or want to see exactly what   
game or utility programs you've got, you'll have complete information at
your fingertips.                                                        
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## GO1.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                   <<<<  Disk #2209  DSK-RAK!  >>>>                      ║
╠═════════════════════════════════════════════════════════════════════════╣
║                                                                         ║
║ To install the program to the hard drive, type:  HDINSTAL (press Enter) ║
║                                                                         ║
║ To start the program, type:  GO (press Enter)                           ║
║                                                                         ║
║ To print the documenation, type: COPY MANUAL.DOC PRN  (press enter)     ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## MANUAL.DOC

{% raw %}
```
 








                               * * * * * * * * *






				   Disk Rak
                Diskette Labeling/Cataloging Management System
                        (c)opyright 1989,1990 by SOFTreat>_
                              ALL RIGHTS RESERVED
                           Distributed via SHAREWARE
				 Version 3.00
                                 Users Manual
                            User support requested


                                    * * * *














                     - - - - N O T I C E - - - -



        This software has been distributed via SHAREWARE and
      subsequently SOFTreat>_ and/or it's employee's assumes NO
            LIABILITY for it's use.  The user accepts ALL
                           RESPONSIBILITY
      before, during, and after it's use.  Disk Rak may be freely
      copied and distributed provided that all associated files
      in their original form are included and that no financial
      gains are incurred over and above legitimate distribution
      costs.















                        * * INTRODUCTION * *             Page 1

      Welcome to Disk Rak!  If you have a computer then you also have
      a collection of software for use on the computer, and this
      collection is probably growing at an unmanageable rate.  Some
      time along the way all this software is going to become a
      'burden' to manage, at least in a way that will allow for easy
      access to a particular file/program when it is needed.  Disk Rak
      can help you very quickly to organize your software into a
      professional library that allows quick access to information
      about a particular data file/program.  Gone is the 'hassle' of
      flipping thru numerous, hand labeled, diskettes every time you
      want your software.

      Disk Rak now includes support for AVERY # 4241 2-3/4" x 2-3/4"
      (3.5" disk) label stock as well as AVERY # 4240 4-3/4" x 1-1/4"
      (5-1/4" disk) label stock.  These labels may be found at most office
      supply stores. Disk Rak still supports the standard 3-1/2" x
      15/16" labels that are available everywhere.

      Disk Rak manages your software on floppy by dividing your
      programs into 'trays' of diskettes in much the same way that
      you would normally use a diskette tray to store disks.  Each
      tray may be assigned any number from 0-999 with each tray's number
      being unique in that no other tray may have the same number.  Each
      tray may contain up to 1000 diskettes that are each numbered from
      0-999.  No other diskette in the tray can carry the same
      number as another in the same tray.  Each diskette in the trays may
      be labeled with specific information provided by you during the
      cataloging process.  If you are labeling the diskettes using either
      of the AVERY disk labels, an alphabetized listing of all the files
      included on the disk will be printed on the label as well.
      The 3.5" disk label will allow up to 66 filenames per label and the
      5-1/4" disk label will allow up to 35 filenames printed.

      To provide as much information to the user as possible, the label
      contains the following data as well....

      DISK #.........  The numerical position assigned to this disk in
                       the current tray.
      TRAY #.........  The current tray number this disk is assigned to.
      TITLE .........  User supplied data typically describing the disk
                       contents.
      CATEGORY ......  User supplied 'category' assigned to this disk that
                       typically describes a 'type' of software.
      SUBJECT .......  User supplied 'subject' assigned to this disk that
                       is typically an extension to the category assignment
                       that further groups this disk into a sub-category.
      VOLUME ID .....  The volume label of the diskette.
      BYTES USED ....  The amount of bytes USED on the diskette.
      BYTES FREE ....  The remaining amount of disk storage in bytes.
      DATE ..........  The date the diskette was cataloged.
      COMMENT .......  A descriptive line about the disk and/or contents.

      All of this data conveniently located on the label provides an
      excellent summary of the diskette contents that is invaluable when
      browsing through the diskettes.







                                                              Page 2

      To make it easy to locate your software, Disk Rak provides the user
      with comprehensive index reports.  These reports reflect a collective
      summary of all the diskettes cataloged in all the trays and provide
      you with a means to locate your software quickly.

      The results, are a wonderfully organized software library,
      that is professional looking, is easily updated and maintained
      and providing you with a wealth of information WHEN you need
      it!  After all, your software did COST you money, so why
      'fiddle' with your diskettes the old way and waste your time
      and RISK forgetting about or LOSING pieces of valuable
      software you once had!






















































                    * * HARDWARE REQUIREMENTS * *          Page 3




      In order for Disk Rak to operate properly on your system, your
      computer will need to meet the necessary hardware
      requirements.

                    Minimum Hardware Requirements


       1> IBM PC, XT, or AT Compatible computer
       2> Hard disk drive and 1 floppy disk drive
       3> 384K DRAM
       4> Monochrome, CGA, EGA, or VGA Video adapter
       5> Epson, Toshiba, Brother, or Tandy compatible Printer

















































	      * * The Disk Rak DISTRIBUTION DISKETTE * *     Page 4

      The Disk Rak distribution diskette contains the Disk Rak program
      and it's associated files.  It is suggested that you install
      Disk Rak on your HARD DRIVE and/or make a backup copy of the program
      diskette to guard against accidental damage or loss.



	Making a BACKUP of Disk Rak

      1> Turn on your computer and obtain the 'DOS' prompt.
      2> Obtain a BLANK and preferably FORMATTED diskette.
      3> Insert the BLANK diskette into Drive B:
      4> At the A> prompt type ...

       (2-drive system)
       DISKCOPY A: B:     and press <ENTER>

       (1-drive system)
       DISKCOPY A: A:     and press <ENTER>

      Follow the 'DOS' prompts assuming that your Disk Rak
      distribution diskette is the 'SOURCE' diskette and your BLANK
      diskette is the 'TARGET' diskette.

      After completion, you will have a working copy of Disk Rak on
      TARGET diskette.  Label the diskette as your Disk Rak
      'working diskette' and use this disk to run Disk Rak.  Store
      your original Disk Rak program diskette in a safe place.




    Installing Disk Rak to a HARD DRIVE

      1> Turn your computer on and obtain the 'DOS' prompt.
      2> Insert your Disk Rak program diskette into DRIVE A:
      3> At the A> prompt type ...

  HDINSTAL           and press <ENTER>

      Disk Rak will begin installation to your hard drive in a sub-
      directory named 'DSKrak'.






















      Before You Begin ....                                Page 5

      Have your diskettes available that you wish to catalog, and
      understand with some thought, how you wish to organize your
      software.  For instance, pre-define various CATEGORIES and
      SUBJECTS that will adequately cover your different software
      types.  Try not to have TOO many or be TOO SPECIFIC with a
      category or subject.  The goal here is to allow Disk Rak to
      GROUP types of software together that are similar in nature to
      the other software in the same group so that retrieval at a
      later time will be easy.  Having too many or making the
      definition too restrictive will counter this effort.

			 To run Disk Rak ....

      At the C> prompt type ...

                   cd DSKRAK     and press <ENTER>

      At the C:\DSKRAK> prompt type ...

                   GO            and press <ENTER>

      Disk Rak will begin to execute by displaying the title screen.
      To continue, press ANY KEY and the Disk Rak main menu will
      appear.








































                      * * INITIAL SETTINGS * *             Page 6

      The first time you run Disk Rak you will need to select your
      printer type and the type of label you intend to use.  The current
      printer selected is displayed in the upper left of the screen window
      border along with the current label type.  The default printer selected
      is Epson with the default label being 'standard label' (mailing labels).
      If you have a different printer than what is selected, select from the
      main menu 'SETUP'.  This selection will bring up another menu where you
      may select either 'printer type' or 'label type'.  Selecting the printer
      option will allow you to choose a different printer type.  If your
      printer IS NOT shown, then try a selection that is 'CLOSE' to the
      printer type that you have.  If this does not work properly and you are
      a REGISTERED user, SOFTreat>_ can install YOUR printer type upon
      request.  Selecting the label option will allow you to choose the
      preferred label type from the menu.  As you make these selections, you
      will note that the current printer and label information at the top of
      the window is updated to reflect you choices.

      Cataloging diskettes requires that the database files be present to do
      so.  The first time you try to catalog a diskette Disk Rak will find that
      there is NO database available and will ask you if you want to create
      one.  Disk Rak allows you to locate your Disk Rak database anywhere on the
      system you desire.  Check the lower left screen border for the 'current
      database path' and decide if this is acceptable or not.  If it
      is not, select the 'DATABASE UTILITIES' function from the 'MAIN MENU' to
      set the desired database path.  The path displayed will change
      accordingly once a valid pathname has been entered.  Disk Rak will use
      this pathname to create the database in the chosen path.  Once selected
      Disk Rak will remember this path, until a new one is entered at a later
      time.



































		  * * ABOUT the Disk Rak SCREENS * *         Page 7

      The Disk Rak screen is composed mainly of '3' sections.
                            They are ....

       1> Information line

          Located at the very TOP of the screen, this line
          displays certain information pertaining to the
          database, such as CURRENT MODE, CURRENT DATABASE
          and the number of records in the database.  This
          will only be visible during various database
          operations when the database is OPENED.

       2> The main viewing screen ...

          This is where most of the work is accomplished
	  during the use of Disk Rak and is located beneath the
          Information line .  Take particular note to the
          upper border and the lower left border.  The
          currently selected printer and label is displayed in the
          upper border and the current DATABASE path is
          displayed in the lower left.  Pop-up menus and data
          entry windows are displayed within the border.

       3> The status/command line at the bottom ...

          This area provides prompts, error messages, and
          user input.  It is important to train yourself to
          keep an eye in this area thru-out the use of
	  Disk Rak as important operational information is
          displayed here when and as it is needed.


































                * * MAKING SELECTIONS FROM a MENU * *      Page 8

      Throughout the use of Disk Rak, various 'POP-UP' menus will
      appear that will allow you to make a selection to perform
      various functions, depending upon what you wish to accomplish
      at the particular time.  Each menu can be identified by a
      'highlighted' menu bar with a various number of selections.
      Each selection has a 'letter' of a different 'color' which may
      be used as a 'HOT KEY' selector.  Pressing the 'colored
      letter' key will immediately select that function.  The menu
      bar may be moved up or down by the use of the 'UParrow' and
      'DNarrow' keys.  Also, the 'HOME' key moves the menu bar to
      the first selection and likewise, the 'END' key moves the menu
      bar to the last selection.  Placing the menu bar on an item
      within the menu and pressing the <ENTER> key, will select the
      corresponding function.  Selecting RETURN from a menu will
      'return' you to a previous menu.

















































               * * DATA ENTRY and the FIELD EDITOR * *     Page 9

      Fields that accept user input are indicated by the '[' and ']'
      characters displayed to the right of a field 'title'.  The
      maximum length of data that may be entered into any field
      is the area shown by a series of '_' characters placed between
      the '[' and ']' characters in the field. Data may be entered
      (left justified) AFTER and BEFORE these characters.  Typing
      characters to the end of the field and continuing will result
      in only the 'last' character in the field accepting the new
      character.  The '1st' character in each field is automatically
      CAPITALIZED to ease typing constraints and produces uniform
      and well looking output.




                Commands Available During Field Entry

       <DEL> ...

             Pressing this key will delete the entire
             contents of the field and position the cursor to
             the start of the data field.

       <BACKSPACE> ...

             Provided that data is present in the field,
             pressing this key will delete the character from
             the current cursor position and backspace the
             cursor '1' cursor position.  If characters are
             positioned to the right of the cursor, pressing
             backspace will delete the current character and
             'pull' the remaining string of characters back
             one cursor position.

       < <- > ...  (Left Arrow)

             Positions the cursor to the left '1' character
             position.  Non-destructive.

       < -> > ...  (Right Arrow)

             Positions the cursor to the right '1' character
             position up to the last character in the data
             string.  Non-destructive.

       <TAB> ...

             Advances to the NEXT data field.  Data entered
             in the field when pressed will be lost.

       <UParrow> ...

             Advances to the PREVIOUS data field.

       <DNarrow> ...

             Advances to the NEXT data field.






       <ENTER> ...                                        Page 10

             Advances to the NEXT data field and accepts the
             entered data.


                     * * DATABASE UTILITIES * *

     Disk Rak 'Database Utilities Rak' menu provides you with '6'
     functions that handle operations directly involved with the
     database files.  The following provides information on each of
     these functions.  To obtain the 'Database Utilities Rak' menu
     go to the 'DSKrak Main' menu and select 'Database Utilities'.

     <Create New Index File> ...

     Selecting this function will create a 'NEW' index file provided
     an existing database file exists.  Disk Rak maintains a series of
     key fields composed of various data items within the database
     file that allow Disk Rak to function as it does.  These 'keys'
     are written and updated 'every time' a new diskette is
     cataloged and therefore is always up-to-date.  However, there
     may be times when the index file may have been damaged or even
     lost, and without this file, access to your information would
     be impossible.  A new 'index file' may be created as long as
     the dskrak.db file is present.  The file 'DSKrak.idx' does not
     have to exist in order for this function to work.

                           When to use ...

          1> If you receive an error 'INDEX FILE GARBLED'.
          2> If you receive the message 'DATABASE does not EXIST'
             DO YOU WISH TO CREATE? <Y/N>, but the database file
             is KNOWN to exist.
          3> If there has been a substantial number of DELETIONS
	     throughout the use of Disk Rak.
          4> If you have 'LOST' the index file.
             NOTE: During the process of creating a new index file, THE
             SYSTEM SHOULD NOT BE TURNED OFF.  Allow the process to finish
             once it has been started.  Creation of the new index file
             generally takes little time.

     <Rebuild Data File> ...

     This function will 'rebuild' an existing data file and it's
     effect is to compress the datafile into it's smallest form.
     During the process of utilizing Disk Rak, you will undoubtedly
     'DELETE' previously cataloged records such as in updating a
     diskette that has had it's contents changed from a previous
     cataloging.  Deleting records creates 'holes' in the database
     and is natural.  Disk Rak does try to minimize the holes by using





                                                           Page 11

     as much of the free space as possible when making new entries
     into the data file, however, it is not always possible to fill
     in all the holes because of the randomness of the new data.
     Therefore, 'Rebuilding' the data file will eliminate these
     holes and thus have the effect of compressing the datafile.
     Also the data in the newly created file will be organized by
     key and thus will aid in record retrieval.  Use this function
     when you have had a large number of deletions.  NOTE: This


     function can take some time to complete, depending on the speed
     of your computer and the SIZE of the datafile.  Once the
     process has been started, it SHOULD NOT BE INTERRUPTED.  Also,
     this function WILL NOT restore a previously LOST datafile.  It
     is always IMPORTANT to maintain proper BACKUPS of your
     datafiles as it is with any other database or program. Failure
     to do so can result in a LOSS OF DATA.

     <Set new path for Database> ...

     This function allows you to enter the 'path' including the
     drive designator where YOU wish the database files to reside.
     The current path to the database is ALWAYS displayed in the
     lower left border of the main viewing screen as a reminder.
     Disk Rak will always remember the LAST path entered from session
     to session.  This function should be selected BEFORE you start
     your first cataloging session.  As a default, Disk Rak will use
     the default drive and path if not selected.

     NOTE: You may select any valid DRIVE and/or pathname.  If the
     path DOES NOT EXIST, Disk Rak will CREATE it for you
     automatically, so be careful and sure of what is entered for
     the PATH.

     <Create a NEW database> ...

     This function allows you to create a NEW database in the
     currently selected database path.  If an EXISTING database
     resides in the current database path, it WILL BE DESTROYED!
     Be careful when using this function as you can easily LOSE a
     previous datafile and ALL of it's DATA and it won't be
     recoverable.























                  * * PREVIEWING DISK CONTENTS * *          Page 12

     Disk Rak provides you with the capability to 'preview' a disk and
     it's contents BEFORE the actual cataloging process is
     completed.  This gives you the opportunity to examine the disk
     closely and even MODIFY the disk thru the utilization of the
     'COPY', 'MOVE' and 'DELETE' options.  You may also use a
     'FILTER' for examining ONLY specific file types on the diskette
     or drive.  To select this function you must be at the 'Diskette
     Cataloging Information' data entry window.  From the 'Disk Rak
     MAIN' menu select 'Catalog a Diskette' and the data window will
     appear.  Notice on the 'status/command' line the following ...

     "Enter Diskette Label Info .. <CRTL-P>review Disk contents
     <ESC> cancel"

     Normally, from within this data window, you would enter
     specific information about the diskette that you are about to
     catalog.  However, it is impossible to always KNOW before hand
     what exactly DOES reside on the diskette and therefore it would
     be very helpful to be able to EXAMINE the disk contents at this
     point before continuing on.

     To 'preview' a diskette press the CTRL key and hold down while
     pressing the letter 'P' key.  Once activated, the
     'status/command' line will prompt you to enter a 'FILTER'.  As
     an example, suppose we have a diskette and all that we are
     interested in viewing on the disk are the files ending in
     'EXE'.  To do this, press the 'DEL' key as the default path and
     filter is always 'A:\*.*'.  Now enter the NEW filter, such as
     "A:\*.EXE" and press <ENTER>.  Once a FILTER has been selected, Disk Rak
     will ask you to select the type of 'SORT' order preferred.  You may have
     the files viewed in order of 'Filename', 'File Extension', 'File Size',
     'File Date', or 'File Time'.  Make the preferred sort selection and
     Disk Rak will prompt you to insert a disk in Drive A:, so be sure that you
     have done this.  Press <ENTER> and Disk Rak will read the disk
     utilizing the FILTER that you provided and will display all the
     files found meeting the requirements of the filter in the order of the
     selected 'SORT'.  You may change the order of the 'SORT' at anytime by
     simply selecting <ALT-S>.  The Sort selection menu will again appear.
     After selection of the new sort order, Disk Rak will read the disk contents
     once again utilizing the FILTER and re-display the contents in the window
     in the new sort order.  If you wish to CHANGE the FILTER, simply press
     the <ESC> key and Disk Rak will return you to the 'data entry window' where
     you may re-initiate the process once again utilizing a different
     filter.

     Now, that we have a directory listing of the diskette we may
     examine the list by utilizing the following keys ...

     <UParrow> ...

          Move UP one item in the list.

     <DNarrow> ...

          Move down on item in the list.

     <PGup> ...

          Advance the list up ONE page.




                                                            Page 13
     <PGdn> ...

          Advance the list down ONE page.

     <END> ...

          Move to the LAST page in the list.

     <HOME> ...

          Move to the FIRST page in the list.


     If the disk contains SUB-DIRECTORIES, then the directories will
     be listed as <DIR>.  The VOLUME LABEL, if present will be
     indicated by <VOLID>.  If you are viewing the contents of a
     SUB-DIRECTORY, then the 'parent' directory will be listed as
     <PARENT> in the listing.  To explore the diskette further and
     sub-directories ARE listed in the directory, we may place the
     menu bar on a <DIR> item in the list and press the <ENTER> key.
     Disk Rak will now step INTO the DIR that was selected and read
     it's directory and provide a new listing in the window.  To
     step back OUT of a sub-directory, move the menu bar to one of
     the <PARENT> listings and press the <ENTER> key.  Disk Rak will
     step to the <PARENT> directory and provide you with a directory
     listing of that parent directory.  If NO <PARENT> items are shown
     in the listing, then your are currently viewing the ROOT directory and
     are at the TOP of the TREE.  With this capability, you may navigate
     freely around the entire disk to learn all there is about the disk
     contents.

     Disk Rak also provides the ability to change the contents of the
     current disk thru the use of the 'DELETE', 'MOVE', and 'COPY'
     commands.  The following describes their proper usage.

     <DELETE> ...
         To 'Delete' a file listed in the directory, place the menu-bar
         on the desired filename in the list and press the 'F1' function
	 key.  Disk Rak will prompt you as to whether or not to proceed.
         Answer 'y' if you WANT TO DELETE the file named in the window.
         Press 'n' if you WANT TO ABORT this selection.  If you select
         'y' it WILL BE DELETED so be careful and sure or your
         selection.

     <COPY> ...
         You may copy a selected file from one location to another by
         placing the menu bar on the desired file and pressing the 'F2'
	 key.  Once selected, Disk Rak will prompt you for a new path.
         Enter the new path and press <ENTER>.  You may also use this
         function to 'DUPLICATE' a file using a different name by
         entering a NEW FILENAME when prompted to enter the DESTINATION.

     <MOVE> ...
         The move function will allow you to take the selected item from
         the list and 'MOVE' it to the desired DESTINATION.  You may
         also RENAME it by entering a different filename in the
         destination pathname.  NOTE: This is a 'MOVE' function and
         therefore will ERASE the original copy once the new COPY has
         been made.





                                                           Page 14

     Disk Rak provides facilities that allow you to 'Jump to DOS' or to
     temporarily suspend operations and run another program without leaving
     Disk Rak to do so.  To access these functions do the following ...


      <F8> .... Jump to 'DOS'
	  Selecting the <F8> key will temporarily halt Disk Rak and place you at
          the system command prompt.  You may perform any DOS command function
          or even run another program if desired.  This is helpful, if you
          need 'format' floppy diskette or read a .DOC file, etc.  To return
	  to Disk Rak when finished, simply type EXIT and press <ENTER> and you
	  will return to Disk Rak where you had left off.

      <F10> ... Execute (Run) program
	  You may execute a program directly from within Disk Rak and pass any
          command line arguments to the executable program if desired.  This
          is helpful in the case of viewing ARCHIVED file contents by
          executing the appropriate archiving program with the required
          command line arguments.  When the executing program has terminated,
	  control will be returned to Disk Rak.














































                    * * CATALOGING a DISKETTE * *           Page 15

     To start your cataloging process, from the 'DSKrak MAIN' menu,
     select 'Catalog a Diskette'.  The 'Diskette Cataloging
     Information' data window will appear.  This window contains
     important information that will be stored to the database AND
     printed to the label for the particular diskette and is also
     the beginning step in cataloging a diskette.  To RETURN to the
     'DSKrak MAIN' menu you may press the <ESC> at anytime.  Doing
     this ABORTS the cataloging process and any label information that
     may have been entered will be discarded.

     The following describes the various fields in the window for
     which data is to be entered.

     <This Diskette Number> ...

     This field will contain THE number you will assign to this
     particular diskette.  Only ONE diskette PER TRAY may carry this
     number.  Entering a number that is currently being used in the
     database tells Disk Rak that you are planning to up-date this
     diskette in the catalog and will inform you of this.  If you
     wish to up-date this diskette then follow the prompts from the
     'status/command' line otherwise, if this is a new cataloging,
     then select an UNUSED number of the NEXT sequence in the TRAY.
     Disk Rak, as an aid in sequentially numbering your diskettes,
     AUTO-INCREMENTS this field after every successful cataloging so
     that the NEXT diskette number is READY and already entered for
     you to start off the next cataloging.  You may, however,
     override this by pressing the <DEL> key and entering the
     desired number.  This field is valid for numbers 0-999 and will
     accept NUMERIC DATA only.

     <Tray Number> ...

     You may assign this cataloging to any one of 1000 trays (0-999)
     and it also accepts NUMERIC data only.  During a normal
     cataloging process, Disk Rak assumes that you will be cataloging
     by TRAY and therefore carries the previously entered TRAY #
     over to the next cataloging session.

     <Diskette Title> ...

     You may assign a 'title' of your choice to the diskette which
     will inform you at a glance as to the nature of this diskette.
     Use descriptive wording as much as possible so that a 'good'
     image is passed to when read.  This field may be entered in one
     of '2' ways.  First, If you would like your title to STAND-OUT
     and be easily read, then choose a title that is '16' characters
     or less (indicated by the '^' character symbol in the field).
     Doing this will cause Disk Rak to print the TITLE in DOUBLE WIDTH
     on the label.  If this is NOT preferred, simply select a title
     that is longer than '16' characters.  NOTE: This field will
     SELF-CENTER when printed to the label.
     <Category> ...

     Enter a descriptive 'label' which signifies a type of software
     in this field, such as GAMES, ENTERTAINMENT, HDUTILITIES,
     PROGRAMMING, WORD PROCESS, etc.






                                                            Page 16
     <Subject> ...

     Enter a description that further divides the CATEGORY into
     significant groups, such as, ARCADE, DATA, LETTERS, SOURCE
     FILES, etc.

     <Comment> ...

     Enter a descriptive comment about the diskette up to 50
     characters long.

     NOTE: Disk Rak places the SYSTEM DATE in the bottom of the data
     window for reference as this date will be placed into the
     database and on the diskette label as a date stamp.  If you
     wish to use a DIFFERENT date or the one shown is incorrect,
     then you must select 'Run DOS shell' from the 'Main Menu'or exit
     Disk Rak to the system prompt where you may change the system date
     on your computer using the DATE command.

     Once all of the fields have been entered press the 'F1' key.
     Disk Rak will prompt you for a FILTER for use in collecting the
     desired data from the diskette.  Use the FILTER wisely as in
     many cataloging's, there are quite a few program files that
     would not be of interest to you in your library, but will
     consume a tremendous amount of storage space in your database
     causing a large database file.  For example, many programs
     utilize *.HLP files and are there to simply support the main
     *.EXE or *.COM program run file and would not be of interest to
     show up in Index listings.  Your choice.

     After entering the FILTER, Disk Rak will read the diskette and
     summarize the information it has found and the 'DISK
     INFORMATION' window will appear.  Study it carefully for correct
     information and answer the prompt in the 'status/command' line
     appropriately.  If you answer 'n', you will return to the 'Diskette
     Cataloging Information' data entry window where you may try again or
     ultimately end the session entirely.

     Selecting 'y', Disk Rak will provide you with the opportunity to
     print your 'LABEL' now if you like.  Selecting <P> will cause
     the label to be printed, <L> to print ONLY an alignment pattern
     for label alignment prior to printing the actual label, or <N>
     to continue WITHOUT printing the label.  Be sure that you have
     loaded the printer with the CORRECT label type that has been
     selected for use.



     Disk Rak allows you to save your cataloging information in '1' of
     '2' ways, ie. , SUMMARY or DETAIL.  Selecting SUMMARY, is the
     most economical and fastest method, but provides your database
     with the least amount of information about the diskette.
     Selecting DETAIL provides you with the maximum amount of
     diskette information and is the basis for many of the printed
     reports, but the database file size will GROW considerably.  A
     proper tradeoff is the proper use of the FILTER.  This allows
     you to gather information (files) from the diskette that are of
     most importance, not including the unwanted files in the
     database, yet still providing the database with the information
     that will be useful.





                                                           Page 17

     If selecting DETAIL, Disk Rak also provides you with a means to
     comment each file as it is about to be saved.  This provides a
     way to describe EACH disk entry if need be and will appear in many of the
     index reports.  Each file contained on the diskette (selected by the
     FILTER chosen) will be displayed in a window as it is being read.  During
     the automatic DETAIL cataloging process, information about the file
     is read such as, it's FILE SIZE, CREATION DATE & TIME, and it's
     ATTRIBUTE.

     When all selected information has been read and saved, Disk Rak
     informs you ...
     "Cataloging of this diskette has been completed ...  Press any
     key to continue"

     At which time you will return to the 'Diskette cataloging
     Information' data entry window ready for the NEXT diskette to
     catalog.
















































                    * * THUMBING thru the RAK * *           Page 18

     To view your database records ON SCREEN, select 'Thumb thru
     Rak' from the 'DSKrak MAIN' menu.  The 'Record Selection
     Criteria' menu will appear.  You may view your database by one
     of '4' methods.  They are ...

     <Disk and Tray Number> ...

     Allows you to access your library by DISK # and TRAY #.  Enter
     desired DISK and TRAY numbers and Disk Rak will search the
     database for a matching entry.  If NO match is found, then
     Disk Rak will inform you and ask if you want the 'closest' match.
     Selecting 'y' will call the closest matching record to the
     screen.

     <Category of Diskette> ...

     Entering a specific 'category' allows you to browse thru the
     file viewing all records that fall into your specified
     'category'.

     <Subject of Diskette> ...

     Entering a specific 'Subject' will select only those records
     containing the specified subject.

     <Filename> ...

     To locate a specific 'file' in your library, enter the desired
     'filename' and only those that match or come close will be
     viewed.

     Once a record has been displayed, you have several options.
     They are ...

       <E>dit ...

          This will allow you to 'edit' certain fields of the current record
          displayed.

       <D>elete ...

       Selecting 'D' will DELETE the current record.  If this
       was a DETAIL cataloging, then ALL files assigned to this
       record will be deleted as well.  This will open the referenced
       DISK # for the shown TRAY for future cataloging.

       <N>ext ...

       Selecting 'N' will display the NEXT record in the
       database until EOF (end of file) has been reached.


       <M>atch ...

       Selecting 'M' will search for the NEXT match in the
       database up to the EOF.







                                                           Page 19

       <P>revious ...

       Selecting 'P' will callup the PREVIOUS record in the
       database up to the BOF (beginning of file).

       p<R>int ...

       Selecting 'R' will display a menu that gives you the option
       of either printing the entire record and it's contents, printing
       a label for the diskette, printing an alignment pattern for the
       label, or to cancel the operation.

       <Home> ...

       Selecting the 'HOME' key will display the FIRST record
       in the database.

       <End> ...

       Selecting the 'END' key will display the LAST record
       in the database.

       <ESC> ...

       Pressing the <ESC> key will EXIT you to the 'Record
       Selection Criteria' menu.






































                       * * LABEL UTILITIES * *              Page 20

     In addition to the diskette cataloging capabilities, Disk Rak
     provides you with the ability to print your diskette labels all
     at once, only selected labels, or do backup labels.

     To enter the 'Print Label Menu', select 'Label Utilities' from
     the 'DSKrak MAIN' menu.  The label utilities menu will appear
     with the following selections ...

     <Cataloged Diskette Labels by Date> ...

     Select this function when you desire to print all labels on a
     specific 'date'.  This is useful when you have cataloged a
     series of diskettes in a day's time and you now want to print
     ONLY those labels on that day's date.  NOTE: You must enter the
     date specifically, ie., 10/12/89 and not 101289.  Disk Rak will
     remind you if need be.

     <Cataloged Diskette Labels by TRAY> ...

     Select this function if you wish to print ALL the labels for
     the diskettes in a specific TRAY #.

     <Backup Diskette Labels> ...

     Disk Rak provides a way to provide you with labels for your
     diskettes used in the 'BACKUP' process.  Selecting this
     function will display the 'Backup Label Info' data entry
     window.  You will be prompted to enter a 'SERIES TITLE' for
     identification of the backup diskettes.  This field will print
     DOUBLE-WIDE if you enter 16 or less characters.  Provided also
     are fields to describe the 'path' used in the backup and a
     comment up to 50 characters in length to further describe the
     nature of the backup series.
     Disk Rak allow you to enter the 'number' of disks involved in the
     backup and will print exactly that number, EACH labeled as
     diskette 1 of 6, 2 of 6, etc. depending upon the number you
     have entered.

     <Print Label Alignment> ...

     Selecting this function will print a TEST PATTERN for use in
     aligning your '1' UP mailing label stock in your printer.























                             * * INDEX REPORTS * *          Page 21

     To provide QUICK, EASY and OFFLINE access to your newly created
     Software Library, Disk Rak provides a means for printing a set of
     comprehensive Index reports that may be used for lookup of
     those wanted files when needed.  It is suggested that a master
     index be kept up to date with the current database(s) for easy
     and accurate reference.  To obtain the printed reports, select
     'Index Reports' form the 'DSKrak MAIN' menu.  The 'Reports
     Menu' will appear with '6' options to choose from.
     They are ...

     <Diskette Detail Listing> ...

     This report will print ALL of the diskette catalogues in the
     database, include both summary and detail.  For use as an
     overall look into the database.  This printout is indexed by
     DISK # and TRAY #.

     <Tray Index Listing/search> ...

     This option will allow an Index to be Printed by TRAY only.  If
     you wish a complete Index listing by TRAY # select this option.
     You may also Print ALL trays by leaving the Field blank when
     entering the Tray number.

     <Filename Index Listing/search> ...

     Use this option when you want an index listing by FILENAME.
     You may leave the field blank to select ALL or you may enter
     the EXACT filename and only those records containing the
     filename will be printed.  For instance, if you would like to
     find all DISKs and TRAYs that contain a file starting with the
     letters FR, then simply enter 'FR' in the field.  Only those
     files will be printed.

     <Category Index Listing/search> ...

     To produce an Index by 'CATEGORY' select this function.  This
     will show you where all DISKs reside that fall under the
     specified 'category' that you have entered.  Leaving the field
     blank, will produce an Index in ASCENDING order by 'CATEGORY'
     of all categories.


     <Subject Index Listing/search> ...

     Selecting this option will provide a means for finding any item
     in the database that was grouped under a specific 'SUBJECT' in
     ascending order.  For specific 'subject's, enter only the
     desired subject, otherwise, leaving the field blank will select
     all.


     <Title Index Listing/search> ...

     To produce an Index sorted on disk 'TITLE' use this function.
     All catalogues will be printed in ASCENDING order by TITLE.
     Good if you can only remember the 'title' you gave a diskette
     and want to find it quickly.





                                                               Page 22

     It is hoped that Disk Rak will serve you well and help you in maintaining a
     processional, well maintained library of all your software on diskette.
     User suggestions are welcome and invited.  Disk Rak is distributed via
     shareware and our only support is thru your support.  Our modest
     registration fee of $24.95 will help us to continue to support Disk Rak and
     to introduce NEW products into the marketplace for all to share.
     Considerable effort went into the production of this software and your
     support will certainly be appreciated.  This manual is available in
     typeset upon registration as well as telephone support, the most recent
     version of Disk Rak, along with our continued support toward your
     satisfaction.


     To register, please include the printed order form available from the
     DSKrak 'Main Menu', include your check or money order and mail to ..

                  SOFTreat>_
                  Rt. 2, Box 67-S
                  Youngsville, NC   27596

          Thank you .....
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2209

     Volume in drive A has no label
     Directory of A:\

    HDINSTAL EXE      9319   8-07-90   5:17p
    DSKRK300 EXE    278409   8-07-90   5:14p
    GO       BAT        42   8-07-90   5:18p
    MANUAL   DOC     43887   8-07-90   5:26p
    FILE2209 TXT      2443   8-29-90   3:22p
    GO1      BAT        43   1-01-80   1:44a
    GO1      TXT       771   1-01-80   7:13a
            7 file(s)     334914 bytes
                           23552 bytes free
