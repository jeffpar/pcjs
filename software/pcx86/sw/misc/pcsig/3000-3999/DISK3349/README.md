---
layout: page
title: "PC-SIG Diskette Library (Disk #3349)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3349/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3349"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## COLLECT!.TXT

{% raw %}
```






         █████▒              █▒   █▒
        █▒    █▒             █▒   █▒                       █▒       ███▒
       █▒                    █▒   █▒                    ███████▒    ███▒
       █▒                    █▒   █▒     ▄▄▄▄▄             █▒       ███▒
       █▒          ██████▒   █▒   █▒    █▒    █▒ █████▒    █▒        █▒
        █▒    █▒   █▒   █▒   █▒   █▒    █▀▀▀▀▀   █▒        █▒
         █████▒    ██████▒   █▒   █▒    █▄▄▄▄█▒  █████▒    █▒       ███▒



                  ╔════════════════════════════════════════╗
		  ║          Collect! Ver 1.04             ║
                  ║                                        ║
		  ║   Intelligent Collection Management    ║
                  ║                                        ║
                  ║   Copyright (c) 1991 by G.L. Alston    ║
                  ╚════════════════════════════════════════╝


           ┌───────────────────────────────────────────────────────┐
           │  ATTENTION:                                           │
           │                                                       │
           │  For those of you who are using a floppy based        │
           │  system, place a copy of DOS (COMMAND.COM) on to the  │
           │  Collect! floppy.                                     │
           └───────────────────────────────────────────────────────┘


         ┌──────────────┐
         │ INTRODUCTION │
         └──────────────┘

          Collect! is an advanced specialty database that is used to
          keep track of the things people collect. It can also be
          used by small dealers of items like baseball cards, antiques,
          comic books, video / audio tape, records, fine arts, books and
          magazines. The list of collection types is practically endless.
          It will also serve to keep track of household inventory.

          Collect! offers unique features that make this collector's
          database faster and easier to use than any other product:

                      * Common spelling file
                      * Works in RAM memory, not the disk
                      * All data on one screen
		      * User changeable database templates
		      * Mouse Support
                      * Financial data
                      * Masked printing

          Collect! is not as cryptic as some database products can be.
          Rather than using the standard menu system (Add, Change,
	  Delete, etc.), Collect! uses pop-up windows and a mouse and
	  is laid out to be easily understood.







         ┌──────────────┐
         │  QUICKSTART  │
         └──────────────┘

          Copy your copy of COMMAND.COM onto the Collect! floppy
          if you are using a floppy based system. Otherwise, be
          sure that COMMAND.COM is in the PATH on your hard disk.

	  To start, type "Collect!" at the DOS prompt. The
	  program will load.

	  1. Press the "F" key and then press "O". Press
	     'Enter' to load in a sample data file.

          2. Press "V" and use the arrow keys to scroll through
             the records. Press "Esc" to bring you back to the
             main menu.

          3. To quit Collect!, press "F" to pop up the file
             window, and "Q" to quit.

          4. To print this manual -- at the DOS prompt, type:

             type collect!.txt > lpt1

             including the word "type." This will use DOS to
             redirect the screen output to the printer.





         ┌─────────────┐
         │  DATABASES  │
         └─────────────┘

          A database uses the concept that information will always
          follow a given format. This format breaks down the individual
          pieces of information into blocks called "fields." Each
          group of FIELDS is called a "Record." As a 'for instance',
          take the case of a mailing list:


                          Name
                          Street
                          City
                          Zip
                          Phone


          The above constitutes a RECORD. Each line of information is
          a FIELD. In the case of a mailing list, the database uses the
          same format for each and every RECORD, although the information
          in each FIELD will change depending on the RECORD viewed. A
          Rolodex (tm) is a database.











          Collect! is also a database, but it has twists:

                 * You can modify the FIELD names for any
                   type of collection.

                 * The financial information can be used
                   in a search.

          Generally, if you purchase a database, it can be rather
          expensive. The good news is that it will function as a
          mechanism to record your collection information. It will
          not, however, be of any use to you in looking for items
          that increased in value by any percentage. That's where
          Collect! comes in. This database is designed exclusively
          for the collector.


                       RECORD EXAMPLE: (Movies Database)


          1) Title         :         <---- 1 FIELD
          2) Starring      :
          3) Running Time  :
          4) Movie Type    :
	  5) Director      :                     FINANCE DATA:
          6) Year Made     :
          7) Condition     :                 File Value      :
          8) Year Purchased:                 Paid out        :
          9) Purchase Price:                 Pct of change   :
          10) Current Value:
          11) Studio       :
          12) Film Number  :
          13) Any Comments :


         ┌─────────────┐
         │ DATA  FILES │
         └─────────────┘


          Your collection will be contained in a disk file that is
	  a group of records. This file is one you OPEN by name.


          Collect! limits the number of records in any given data
	  file to 2000. You may, however, have as many data files as
          you have room for. As data files can be stored on floppy
          disks, the amount of data that could be ultimately stored
	  is limitless.

          Using multiple data files for your collections also will
          help you organize. Rather than have a master file of all
          of your collections, having one named "China" and another
          named "Dolls" (for instance) helps you categorize.












	  So why so few items in a file? Many database programs
          boast up to millions of records per file.

          Many reasons. Collect! :

          *  works in RAM, not disk. It assumes a machine
	     of minimum (modern) configuration. (640K)

          *  is designed to catalog items that have some real
	     value. If you have over a few hundred expensive items,
	     like original Renoir paintings, you could buy your own
             accounting firm to do this for you. Many good
             collections comprise a couple of hundred individual
             items at the outside. Even massive collections such
	     as valuable stamps usually do not exceed 500 or so
	     items in a given category.

          *  needs to be fast even on PC/XT technology, which
             many of you have.

          *  needs to be able to operate on LCD screen laptop
             computers. A standard disk based database program
             will run the batteries down faster because the
             disk drive, a power hungry device, needs to be
             running all the time.



          ┌──────────────────┐
          │ RUNNING COLLECT! │
          └──────────────────┘


          Collect! uses pop up windows over a main screen area. The
          main system menu appears horizontally beneath the copyright
          notice:

                 File     View     Search     Print     Utilities
                 -        -        -          -         -

          All menu items, whether using the main system menu or any
          within a pop up window, are accessed either by pressing
          the highlighted letter key (shown here as underlined) or
          by moving the highlight bar with the ARROW (cursor) keys
          and pressing ENTER. To PRINT something, for instance, pressing
          either "P" or highlighting 'PRINT' will bring up the "Print"
	  pop up window.

	  You may also use a mouse if you prefer. The general Rule is
	  that any window with a '■' in the upper left corner can be
	  exited by clicking the '■'. The Mouse is NOT used in the
	  editor. If the Mouse cursor is on-screen, it can be used.
	  You also have the ability to click menu items and filenames,
	  as well as the Up and Down arrows when on screen.
          The action inside pop up menus is the same.
          Once a window has been popped up, you can get back to
	  the main menu by pressing the "Esc" (Escape) key or by
	  clicking the upper left corner.

	  Menu selections inside a window work as described above.






          Collect! is configured such that pop up windows will
          overlay. The "active" window is the one most whole.


             ┌─────────────┐
             │             │
             │   ┌─────────────┐
             │   │             │
             └───│             │ <---------- ACTIVE WINDOW
                 │             │
                 └─────────────┘


          If there are any instructions, they will appear in the
          window.


          ┌───────────────────┐
          │  ON LINE  HELP !  │
          └───────────────────┘

	  At most points in the program, pressing the "?" key or
	  clicking the "? = HELP" will bring up a context sensitve
	  HELP pop up window. Press the ESCAPE key or click the upper
	  left corner to exit the window. The HELP is available in all
	  sub-menus as well. The On Line HELP should not be used
	  exclusively in place of this manual. HELP is available at
	  all menus and screen changes, and can be customized: each
	  of the help subjects is contained in a *.HLP disk file. You
	  may reword these using an ASCII text editor (no special
	  formatting characters, such as in a word processor, can be
	  used.) Just follow the existing format - 37 chars x 19 lines
	  in each file. In this way, HELP can be customized for your
	  (or your employees) special needs.



          ┌───────────────────┐
          │  MENU SELECTIONS  │
          └───────────────────┘



          ** = main menu selections



          ** FILE:

                  used to access, save, and create disk based
                  data files; enter DOS; and Quit the program.















          THE "FILE" WINDOW:

	  1) OPEN

	     A window showing up to 57 data files is presented. You may
	     scroll through the list by using the arrow keys to high-
	     light the desired filename. Pressing ENTER will OPEN the
	     highlighted file. You may also use the mouse in two ways:
	     you may simply double-click the filename, or you can click
	     the '( OK )' to open the highlighted file. If the AutoSave
	     toggle is ON (see UTILITIES), a backup copy of the file is
	     created upon OPEN. If you have been working on a file and
	     forgot to Save it, A window will pop up that asks you to
	     Save your file prior to OPENing the new one.

          2) Save

             After you edit your database, use this to put the
             new data back on the disk.

          3) New

             This starts a new database file. You will need
             enter the name you wish to call it, such as
             "dolls", etc. This action will erase the current
	     file in memory. The new name will be tested to see
	     if it is the same as an existing filename. If it
	     is, Collect! will have you re-enter the name as it
	     will NOT let you overwrite existing files.
	     If you have edited any file you have OPENed, Collect!
	     will give a warning that you need to SAVE the current
	     file before starting a NEW one.

             You are next presented with a list of collection
             types to choose from. Enter a number corresponding
             to the type of collection your NEW data file is for.


          5) DOS Shell

             Allows you to enter DOS while leaving Collect! running.
             You can do anything in DOS that you normally would,
             such as format disks or even run another program. Type
             the word "exit" at the command line prompt ( such as
             A:> , c:\>, etc. ) to return to Collect! and where you
             left off. The amount of memory left to run other programs
	     will depend on your system memory. This shareware version
	     of Collect! uses about 260K of RAM.


           6) Quit

              Allows you to quit Collect! and return to DOS.
              Make sure you SAVE any changes you made to a
              database file before you quit.

	   7) ABOUT

	      Gives you revision number, and any other needed info.






          ** SEARCH:
                    used to search for records that either match or
                    fall within a given pattern set or parameters.


          In the search window, a list of the data fields is
          presented. Also, there are financial data fields.
          Use the Up and Down arrow keys to move the highlight
          bar to the field to search in. Press the "Enter" key
          to activate. At this time, the "how to search" window
          pops up:

                       *  =  Equality
                       *  <  Less Than
                       *  >  Greater Than
                       *  -  Range

          You should again use the Up Down keys to choose the type
	  of search to be made in the field you selected. Note that
	  the mouse will be inoperative for the DEFINE SEARCH TYPE
	  window.
	  Press "Enter" to activate. Note that alphanumeric
	  (text) fields are searched as MATCH only. Standard numeric
	  fields can be searched in any method. Common Spelling Data
	  fields ( #4 and #7 ) are MATCH only. After entry of your
	  search criteria, the window pops away and you can then
	  select any other remaining (unused) data field to search in.

	  This process can continue on ALL fields until "Esc" is
          pressed, OR until the search has narrowed the "found"
	  records to less than 2 records. As each search criteria
          gets entered, it will appear in the search window.

          In the bottom of the search window is a display that
          shows the current number of records left to search in.

                   LEFT:  xx  OF yy

          After the search is done, the search window will pop
          away, leaving the main screen. Near the top of the
          screen will be:

                    Search Found XX Records

          Where XX is the number of matching records.

          The first matching record (if any) is displayed. If there
          were none, the first record in the file is displayed.

          The up and down cursor keys will cycle through all of the
          "found" records.

          To exit the search function, press the Escape [Esc]
	  key. The currently shown record will stay on screen, and
	  VIEW mode will start from that point for editing. Note
	  that the Search 'found' records can be operated on in
	  other ways - they can be printed out (See PRINT) or moved
	  or copied into other files (see UTILITIES).







          ** VIEW:
                  used to VIEW and EDIT the database file.

          The right side of the screen (at the border) is replaced
          with a scroll bar. This is a visual aid to help determine
          how far you are in the file:
                                       <-----  Top (end)
                                     │
                                     │
          Scroll Bar Marker  ------> █ <----- Current Position
                                     │
                                     │
                                     │
                                     │
                                       <----- Bottom (1st record)

          Near the bottom of the screen, instructions will appear.
          The keys pressed do not require <Enter> afterward. A
	  single keypress will suffice. The mouse can be likewise
	  used as well. To do the same thing as a letter key, click
	  the appropriate box. To Scroll, click the Up and DOWN
	  arrows on either end of the scroll bar. Holding the button
	  down on an arrow will allow fast cycling. Release it to stop.

                         Up Down ARROW keys to
                         cycle through file.

                         "F" to access the
                         FIRST record.

                         "L" to access the
                         LAST record.

                         "C" to CHOOSE a
                         record number.

                         "D" to DELETE the
                         current record.

                         "E" to EDIT.

          As you use the ARROW keys to cycle through entries, the
          scroll bar marker will move up and down to give a
          quick visual indicator of your position in the file.
          Using The "C" ( CHOOSE ) key is a fast way to get to a
	  get to a certain position in large files. To Add a record
	  to the file, Cycle to the last record, and click or press
	  the UP arrow for the LAST record PLUS 1.

          The "E" (EDIT) Key:

          The up and down keys are used to cycle through the
          data fields in each record. To make a change, cycle
          through the record to the desired data field. The
	  current information will appear in reverse video.
	  The mouse is deactivated for editing.
          Start typing in the revised information and press
          the "Enter" key. Look for on-screen help at the
          screen bottom that will remind you that fields
          4 and 7 are used for common data and are accessed
          using the F1 key.




                          ┌─────────────────┐
                          │  COMMON  DATA   │
                          └─────────────────┘


          When a common data field is accessed, a window will
          pop up and prompt you for numeric entry. One of these
          fields is CONDITION.


                ┌───────[ Condition ]───────┐
                │                           │
                │  1) Poor                  │
                │  2) Fair                  │
                │  3) Good                  │
                │  4) Very Good             │
                │  5) Excellent             │
                │                           │
                │  Enter 1 - 5:             │
                └───────────────────────────┘


          However, looking at the CONDITION field on screen (in
          your database record), you will see an alpha entry,
          such as "Excellent."

          The reason this was done is because we're too lazy to
          type "Excellent" for 70, 120, or more records. We wanted
          a way to enter common data without all that typing. We
          figured you might not relish typing this out either.

          One of the problems we've seen in most databases has
          two symptoms, but it's the same problem:

               Commonly typed data gets misspelled. Searches
               tend to suffer.

               People tend to abbreviate a lot. This winds
               up being confusing for others. Was "P" POOR
               or PREMIUM ?

          So, considering we were lazy and had a dislike for too
          much abbreviation, we came up with common spelling
          files. They are simply a shortcut to get readable,
          meaningful data on the screen or a printer.

          To finish editing, press the Escape "Esc" key, and you
          will return to the view mode. Press Escape once more
          when you wish to quit viewing; this will return you to
          the main menu.















          ** PRINT:
                   Printing out data from Collect! Print will use any
                   printer at LPT1, including Lasers. If you have
                   only one printer, this is no problem. If your
                   printer is serial, you will need to redirect the
                   LPT1 output to the Comm port your serial printer
                   is connected to. This uses the DOS MODE command:

                   Mode LPT1 = COMx

                   where (x) = port number


                   Collect! printouts have the capability of being
                   masked. Masking is much like the use of masking
                   tape during painting. Masked data fields will
                   not be printed. Print, when selected, assumes
                   that you want to print a record or group of
                   records in their entireity.



          THE PRINT WINDOW:

          1) Print All

             Prints the entire database loaded in memory.

          2) Print Last Search

             Prints all records from last search. If no search was
             ever performed, it prints all records.

          3) Print Current Entry

             Prints the record currently on screen.

          4) Print Entry Number

             Allows you to enter a record number to print.

          5) Print Using Mask

             Pops up another print window for further choices
             using the print mask.

          6) Set Up Mask

             This choice will bring up an instruction window as
             well as the work window. Essentially, you are shown a
             list of the data fields, and you toggle them in a
             masked or unmasked state by entering the field number.

	     Masked fields (those that will NOT be printed) will
             show up in reverse video. To Mask the NAME field, for
             instance, type a "1" and press "Enter." The NAME field
             will then be presented in reverse video; any time you
             print using the mask, the NAME will be ommitted. To
             UNmask the name field, type "1" again, and NAME will
             show up in normal video; it can now be printed.

             The masking is saved to disk, and will stay the same
             until changed by you.




         PRINT USING MASK WINDOW:

         This window has choices 1 - 4 as in normal Print, but the
         mask is used.


         Why use a mask? If you are a dealer, masking off the "price
         paid" field would enable you to hand a printout directly to
         a customer. Likewise, a trader may not want privy information
         about an item being given out. A printout is much easier to
         generate than a typed or handwritten list, and is more
	 convenient than memory alone. In the UTILITIES is another
	 use for the mask.



         ** UTILITIES:
                      used to Change Printout Header or Edit
                      Database Fields.


          THE UTILITIES WINDOW:


	  1) Change Printout Name

            When Collect! prints records, it starts out by
            first printing a header. The default says

                    "Collect! ver. 1.XX"

            You can change this to anything you prefer, such
            as "Mr. Bill's Baseball Card Emporium / Choklit Shoppe."

            When any printouts are made, the header precedes any
            of your collection data. This header comes up only
            once per printout. If you print 1 record, the header
            will be printed first. If you print out 20 records,
            the header will likewise be printed only once, NOT
            once per record.


          2) Edit Collection Type

             The entire main screen window is cleared, and a series of
             letters (A-Z) are shown. Each letter is related to a type
             of collection. Collect! is allowed 26 different collection
             types per disk or directory.

             We have provided some startup samples:

                           c = sports cards
                           m = tape (movies) library
                           s = stamp collection
                           a = antiques / misc.
                           t = audio library
                           b = book library









             These samples can be kept as is or modified. Modification
             and creation of wholly new collection types is the purpose
             of the editor. Perhaps you can use one of the supplied
             samples with some modification.

             When you create data files that are used by Collect!, each
             is "keyed" to a collection type. This is the mechanism that
             allows you to LOAD the books data file and see the fields
             related to books on screen.

             The distribution floppy, for instance, comes with the
             following example data files:

                              *  Movies
                              *  Audio
                              *  Stamps
                              *  Antiques
                              *  Books

             The next step is to decide if you wish to modify an existing
             collection type or create a new one. Press a letter key at
             this point. If you choose an unused letter, you will see a
             default set of field names. If you choose a "used" letter,
             the corresponding fields are shown. If you press 'Esc', you
             will be returned to the main screen.

             To the right of these names is the expected entry type. The
             entry type is fixed; be careful not to insert TEXT data in
             a field that would normally expect numeric data.


             FIELD Entry Types: (1st 13 entries)


                    * TEXT

                      Alpha Numeric -
                      e.g. letters and numbers, such as
                      1622 Wesson Ave. or John Smith.


                    * INTEGER

                      Numeric -
                      Whole numbers in the range
                      -32767 to +32767, such as
                      1111 or 1897 or -34.


                    * FLOATING POINT

                      Numeric -
                      entry with a decimal point, such as
                      10.87  or  1298767986.098.

             SPECIAL FIELD Entry Types: (Entries 14 - 16)









             14) EDITOR MESSAGE

                 This is the reminder for pressing F1 key at
                 entry #4 in the EDIT mode:

                   ┌───────────────────────────────────────┐
                   │ To Change XXXX or CONDITION, Press F1 │
                   └───────────────────────────────────────┘

                 where XXXXX is what you would like to call
                 the field.

             15) FIELD 4 COMMON DATA FILE WINDOW NAME

                 During operation of Collect! in the EDIT mode,
                 pressing the F1 key at field # 4 pops up the
                 common spelling file window. The window is labeled;
                 this will change the name of the window.

             16) DATABASE NAME

                 When Collect! is up and running, the name of the
                 database is put on the screen (Upper Left) for you.

                 This entry allows you to name the database template
                 what you wish.

             Screen entries are limited in length by the editor (It
             doesn't want you to let the Collect! screen data overlap.)

             To EDIT a field name, simply type the corresponding number
             and press 'Enter.' Then, begin typing the new name. Press
             'Enter' when done.

             Press 'Esc' when you are done editing. You will be asked
             whether or not to save the changes. If YES, you proceed to
             editing of the Common Spelling File. If NO, you are returned
             to the main screen.

             You may wish to view a couple of included samples prior
             to creating a new collection type.

             Editing of the Common Spelling File is the same as above.
             Press 'Esc' when done and you will return to the main screen.
	     The common spelling file will be automatically saved.


          3) Auto Save Toggle

             Normally, data files loaded by Collect! are automatically
             backed up upon LOADing as a direct image. This can cause
             loading of large files to take a long time. The TOGGLE
             allows disabling of this feature. By default, it is "ON"
             when Collect! starts. To change the state, bring up the
             AUTO SAVE TOGGLE window and press ENTER. Subsequent
             presses will toggle the state ON and OFF. When it is in
	     the desired state, Press ESCAPE to EXIT the window. You
	     may also toggle the state using the mouse by clicking the
	     text.







	  4) Mouse Toggle

	     If you prefer to not use a mouse, you may toggle it off.
	     This simply gets rid of the cursor and the mouse is not
	     listened to. To restore, toggle by pressing ENTER.


	  5) Copy / Cut / Paste

	     This selection uses data from the LAST SEARCH and brings
	     up another menu window. The Last Search data can be moved
	     into other files (which erases the records in the current
	     file) or copied into other files (which leaves the current
	     file intact.) If you choose an option for an EXISTING file,
	     the filename window (See FILE - OPEN) pops up for you to
	     choose the file to add to. If you choose to move or copy
	     data to a new file, you are asked for a FileName. Should
	     the filename already exist, Collect! will NOT let you
	     overwrite this - you must come up with a unique name.

	     The last option is Modem File. This is simply a mechanism
	     to copy search data onto the disk as ASCII text that can
	     be viewed, such as using the DOS 'TYPE' command. The data
	     is grouped with the appropriate field names and the MASK
	     is used. For all practical intents and purposes, this
	     selection does the same thing as PRINT Last Search (Using
	     Mask) except that the data is routed to the disk instead
	     of the printer. The new file (DOS extension ".MOD") can
	     then be sent via disk or MODEM to another collector for
	     trades, to another dealer for inventory purposes, or to
	     other interested parties. The receiving party can then
	     use DOS or a word processor to PRINT out the file as if
	     Collect! had printed it.


          ┌────────────────────────────────┐
          │  FILES AND BACKING UP OF DATA  │
          └────────────────────────────────┘

          Files used by Collect! use a DOS extension of .ADB and
          .BAK. The .BAK file is created as soon as the .ADB file
	  (your database) is OPENed, and it is an image of the
	  .ADB file that got OPENed. This is done to provide you
          with a last resort way of saving your data. Normally,
          you never see the backups, nor do you see the .ADB DOS
          extension; when you load a file you enter just the
          primary name. (see Auto Save discussion about backups.)
          If you do lose your primary file and require use of the
          backup, exit Collect! to DOS (Use the DOS Shell as
          described above) and rename the backup. For instance,
          if you were somehow to lose your database called "DOLLS",
          what you lost was the file DOLLS.ADB.  The backup would be
          called DOLLS.BAK, and you could then use the DOS 'RENAME'
          command as follows:












          A:> rename dolls.bak dolls.adb

	  This will now be OPENable by Collect!, and Collect! will
	  then create another backup as soon as you OPEN the
          file name "DOLLS."
          A batch file called "NAME.BAT", provided on the
          distribution floppy, does the same thing; however,
          it is easier to use:

          A:> name dolls

          If possible, you should use 720K or higher capacity
          disks so that all of your database files (and their
          backups) get saved properly. Better yet, place Collect!
          on your hard drive; just remember to make file backups
          and place them in a safety deposit box.
          The batch file "ADB2A.BAT", provided on the distribution
          floppy, will copy all of your .ABD database files to a
          formatted floppy disk in drive A:

          C:\Collect!>adb2a

          After all, it IS the database files that are important
          to save; this batch file copies them over in a fast way
          so that you do not have to back up the whole drive.

          The batch file "COLLINST.BAT" will create a subdirectory
          on your hard disk and install Collect!

          ┌─────────────┐
          │  SHAREWARE  │
          └─────────────┘

	  As this programme is distributed as "shareware", you should
          know a little about the concept. Shareware is not free.
	  Basically, if you use this programme and you like it, we
          would like to be paid for it. Shareware is a method of
	  distribution that allows you, the user, to obtain
          quality software without going through a middleman. Many
	  of today's best known programmes either ARE shareware or got
          their start this way.

          One of the wonderful things about shareware is the "try
	  before you buy" philosopy. You also are free to make
          copies and distribute them at your discretion, providing
          that you do not charge a fee for any distribution. Each
          recipient can also try Collect! and register if they can
          use it. Upon registration, we will send you a manual and a
	  new registered version of the programme. You will also receive
	  free upgrades for One Year, and a copy of the Windows 3
	  version upon release.

	  Registration of Collect! is $40.00 from:

			     L.J. Alston
			     1320 Standiford Ave
			     Suite # 242
			     Modesto CA 95350
			     (209) 522 - 8666


	  G.L. Alston     May, 1991

          Collect! is copyrighted material (c) 1991  G.L. Alston
          All rights reserved.

          DOS and MS-DOS are registered trademarks of Microsoft Corp.,
          Redmond, Washington.

          IBM is a registered trademark of International Business Machines,
          Armonk, New York.

```
{% endraw %}

## INSTRUCT.TXT

{% raw %}
```


     INSTRUCTIONS:

     This readme file uses the Public Utility "BROWSE.COM"

     To read the Collect! manual:

     Use the PgUp and PgDn keys to move one screen at a time, and use
     the up and down arrow keys to move one line at a time.

     Press Escape [Esc] when you are done reading about Collect!

     .
```
{% endraw %}

## Q&A.TXT

{% raw %}
```


		Common Questions and Answers for New Users


	 Q: How do I ADD a record?

	 A: Choose VIEW. Press 'L' or click LAST for the LAST record.
	    Click or press UP arrow. Click EDIT or press 'E' to edit.
	    The record you add is logically at the end of the current
	    file. You choose "L" (LAST) to see the last record, and
	    UP Arrow to get to LAST + 1. As soon as you enter your
	    data, the LAST record is now the number of the one you
	    entered, and adding another will be at LAST + 1 again.


	 Q: How do I Change or Edit the fields?

	 A: In the MAIN Menu, choose UTILITIES. Choose EDIT COLLECTION
	    TYPE. If you wish to change an EXISTING set of fields,
	    press the letter key that corresponds. If you wish to CREATE
	    a new set, choose an unused letter.


	 Q: It takes too long to LOAD a large file. Can it be shortened?

	 A: Collect! makes an automatic backup of your data under a
	    separate file name when loading. You can disable this
	    feature and get faster LOADing. In the MAIN menu, choose
	    UTILITIES. Choose AUTO SAVE TOGGLE. Press ENTER or click
	    the text to turn the AutoSave off. Subsequent LOADs will
	    now take 1/2 the time, but the automatic backups will not
	    be made.


	 Q: Can text searching be mixed case?

	 A: Sure. Collect! will find "TexT" and "tExT" and "TEXT" just
	    the same. However, do not insert spaces or control characters
	    into search text, as it tends to confuse things. The best
	    idea is to search for a consecutive string of characters,
	    such as "couch" or such.


	 Q: Why Common Spelling Files?

	 A: Well... Let's assume you collect dinosaur bones. To make sure
	    that searches ALWAYS work, it's easier to pick STENONYCHOSAURUS
	    from a list rather than to type it in each time. Subsequent
	    searches would be in error if the above name got misspelled
	    in any of the records. This is especially true if more than
	    one person is adding data to Collect!

```
{% endraw %}

## WINDOWS.TXT

{% raw %}
```


    Microsoft Windows(tm) Users Note:

    If you are intending to launch Collect! from Microsoft Windows 3.0,
    we've included 2 files that will help:

                 collect!.ico  ---------- Collect! Icon file

                 collect!.pif  ---------- Collect! PIF file

    The icon file can be directly inserted into the DOS Applications
    group.

    The supplied PIF file is set up as:

                    dir  -  c:\collect\collect!.exe

                    mode - TEXT MODE             REAL/STANDARD MODE

                    RAM - requires 384K RAM

    The PIF file tells Windows(tm) to allocate a minimum of 384K RAM to
    Collect!, and where it is located.
```
{% endraw %}

## ARRANGE.TXT

{% raw %}
```

			     Arrange V 1.0

  Due to requests we've had from people who wish to alphabetize (I.E. Sort)
  their collection listings and holdings, we have included the ARRANGE
  programme. What this does is alphabetize the first data field (usually
  used as a base descriptor) by the first letter. This is not a function
  that belongs in the main body of Collect! but functions rather well as
  a utility programme.

  Usage:

  ARRANGE [d:][\path\] filename

  Drive [d:] and path [\path\] are optional parameters.

  The filename DOES NOT REQUIRE a DOS extension.

```
{% endraw %}

## COLLECT!.TXT

{% raw %}
```






         █████▒              █▒   █▒
        █▒    █▒             █▒   █▒                       █▒       ███▒
       █▒                    █▒   █▒                    ███████▒    ███▒
       █▒                    █▒   █▒     ▄▄▄▄▄             █▒       ███▒
       █▒          ██████▒   █▒   █▒    █▒    █▒ █████▒    █▒        █▒
        █▒    █▒   █▒   █▒   █▒   █▒    █▀▀▀▀▀   █▒        █▒
         █████▒    ██████▒   █▒   █▒    █▄▄▄▄█▒  █████▒    █▒       ███▒



                  ╔════════════════════════════════════════╗
		  ║    Collect!  Release 2   Ver 1.01      ║
                  ║                                        ║
		  ║   Intelligent Collection Management    ║
                  ║                                        ║
                  ║   Copyright (c) 1991 by G.L. Alston    ║
		  ╚════════════════════════════════════════╝


         ┌──────────────┐
         │ INTRODUCTION │
         └──────────────┘

          Collect! is an advanced specialty database that is used to
          keep track of the things people collect. It can also be
          used by small dealers of items like baseball cards, antiques,
          comic books, video / audio tape, records, fine arts, books and
          magazines. The list of collection types is practically endless.
          It will also serve to keep track of household inventory.

          Collect! offers unique features that make this collector's
          database faster and easier to use than any other product:

                      * Common spelling file
                      * Works in RAM memory, not the disk
                      * All data on one screen
		      * User changeable database templates
		      * Mouse Support
                      * Financial data
		      * Masked printing
		      * VGA 3d Graphics Presentation with
			pushable pushbuttons

          Collect! is not as cryptic as some database products can be.
          Rather than using the standard menu system (Add, Change,
	  Delete, etc.), Collect! uses pop-up windows and a mouse and
	  is laid out to be easily understood. The use of 16 color VGA
	  graphics makes for an exciting display; it is certainly not
	  the same old "tired" TEXT display.











	  Collect! uses 3 different user interface methods simultaneously:
	  Mouse, Light bars, and Highlighted letters. Most functions can
	  be operated via the keyboard, but we think that you'll find that
	  the mouse is much faster anyway. This product comes fast on the
	  heels of Collect! 1.03, the mouse driven TEXT version; it can
	  share the same Data files. The many features of Collect! are
	  unmatched by ANY collector's package on the market.

	  Another thing we think is good is that everything you need is
	  right on the screen, and all you need to do is "click" it
	  with the mouse. There are no arcane FUNCTION KEYs to be forced
	  to remember.


         ┌──────────────┐
         │  QUICKSTART  │
         └──────────────┘

	  To start, type "Collect!" at the DOS prompt. The program will
	  load.

	  1. Choose "F" for FILE and then choose "O" for OPEN.
	     Press 'Enter' to load in a sample data file.

          2. Press "V" and use the arrow keys to scroll through
             the records. Press "Esc" to bring you back to the
             main menu.

          3. To quit Collect!, press "F" to pop up the file
             window, and "Q" to quit.

          4. To print this manual -- at the DOS prompt, type:

             type collect!.txt > lpt1

             including the word "type." This will use DOS to
             redirect the screen output to the printer.




























         ┌─────────────┐
         │  DATABASES  │
         └─────────────┘

          A database uses the concept that information will always
          follow a given format. This format breaks down the individual
          pieces of information into blocks called "fields." Each
          group of FIELDS is called a "Record." As a 'for instance',
          take the case of a mailing list:


                          Name
                          Street
                          City
                          Zip
                          Phone


          The above constitutes a RECORD. Each line of information is
          a FIELD. In the case of a mailing list, the database uses the
          same format for each and every RECORD, although the information
          in each FIELD will change depending on the RECORD viewed. A
          Rolodex (tm) is a database.

          Collect! is also a database, but it has twists:

                 * You can modify the FIELD names for any
                   type of collection.

                 * The financial information can be used
                   in a search.

          Generally, if you purchase a database, it can be rather
          expensive. The good news is that it will function as a
          mechanism to record your collection information. It will
          not, however, be of any use to you in looking for items
          that increased in value by any percentage. That's where
          Collect! comes in. This database is designed exclusively
          for the collector.


                       RECORD EXAMPLE: (Movies Database)


          1) Title         :         <---- 1 FIELD
          2) Starring      :
          3) Running Time  :
          4) Movie Type    :
          5) Director      :                     BASIC DATA:
          6) Year Made     :
          7) Condition     :                 File Value      :
          8) Year Purchased:                 Paid out        :
          9) Purchase Price:                 Pct of change   :
          10) Current Value:
          11) Studio       :
          12) Film Number  :
          13) Any Comments :









	 ┌─────────────┐
         │ DATA  FILES │
         └─────────────┘


          Your collection will be contained in a disk file that is
	  a group of records. This file is one you OPEN into
          Collect! by a name you give it.

          Collect! limits the number of records in any given data
	  file to 2000. You may, however, have as many data files as
          you have room for. As data files can be stored on floppy
          disks, the amount of data that could be ultimately stored
	  is limitless.

          Using multiple data files for your collections also will
          help you organize. Rather than have a master file of all
          of your collections, having one named "China" and another
          named "Dolls" (for instance) helps you categorize.


          ┌──────────────────┐
          │ RUNNING COLLECT! │
          └──────────────────┘


	  The main system menu appears horizontally as a series of
	  pushbuttons at the screen top. Pressing the RED HIGHLIGHTED
	  letter key or clicking with the mouse. ( The term "click,"
	  which is used liberally throughout this guide, means to
	  momentarily depress the LEFT mouse button while the arrow
	  cursor points at an item.) When this happens, the pushbutton
	  will push in, and in all cases but VIEW/EDIT, a menu will
	  appear. Note the small box with a spacebar Icon in the upper
	  left corner of menu windows. This is the CLOSE button, which
	  will CLOSE the menu and POP UP the pushed in pushbutton.

	  The  Main Menu pushbuttons are very much like the pushbuttons
	  in a Car radio -- only one can be pushed in at a time. Therefore,
	  if one of these is pressed in, you can click the other buttons
	  all day long, but the clicks will be ignored.

	  MAIN MENU:


                 File     View     Search     Print     Utilities
                 -        -        -          -         -

	  All menu items within a pop up window, are accessed either
	  by pressing the highlighted letter key (shown here as underlined)
	  or by moving the highlight bar with the ARROW (cursor) keys
          and pressing ENTER. To PRINT something, for instance, pressing
          either "P" or highlighting 'PRINT' will bring up the "Print"
	  pop up window. Of course, you can always click the text.

          Once a window has been popped up, you can get back to
	  the main menu by pressing the "Esc" (Escape) key or by
	  clicking the upper left corner CLOSE BUTTON. You will see
	  Some DIALOG windows periodically; these usually have an
	  "OK" pushbutton. You must either click the button, or
	  press ENTER or ESCAPE to EXIT. The ESCAPE key always takes
	  on the meaning EXIT.





          ┌───────────────────┐
          │  ON LINE  HELP !  │
          └───────────────────┘

	  At most points in the program, pressing the "?" key or
	  clicking the "? = HELP" will bring up a context sensitve
	  HELP pop up window. Press the ESCAPE key or click the close
	  button to exit the window. The HELP is available in all
	  sub-menus as well. The On Line HELP should not be used
	  exclusively in place of this manual. HELP is available at
	  all menus and screen changes, and can be customized: each
	  of the help subjects is contained in a *.HLP disk file. You
	  may reword these using an ASCII text editor (no special
	  formatting characters, such as in a word processor, can be
	  used.) Just follow the existing format - 75 chars x 60 lines
	  in each file. In this way, HELP can be customized for your
	  (or your employees) special needs.

	  When in HELP, clicking the arrow buttons will move by 4 lines
	  (the display maximum) at a time. Pressing the arrow (Cursor)
	  keyboard keys scrolls the display one line at a time.



          ┌───────────────────┐
          │  MENU SELECTIONS  │
          └───────────────────┘



          ** = main menu selections



          ** FILE:

                  used to access, save, and create disk based
                  data files; enter DOS; and Quit the program.


	  THE "FILE" MENU:

	     OPEN

	     A window showing up to 57 data files is presented. At the
	     window bottom are some drive icons and filename / path
	     information. You may click a drive icon if data files are
	     located in a different drive than the program; the file
	     names available will appear in the window. If the program
	     does not display any file names, there may be either
	     something wrong with the drive (maybe the door is not
	     closed, or the disk is not in all the way) or the disk
	     does not REALLY have data files on it. If you do click
	     the "A:" drive, for instance, Collect! will remember what
	     drive is the one for data files. When you SAVE a OPENed
	     Data File, Collect! does not ask you to save Where; it
	     will attempt to save to the DATA drive. Otherwise, click
	     the desired Data File you wish to OPEN.








	     You may scroll through the list by using the arrow keys to
	     highlight the desired filename; it will appear near the
	     screen bottom next to "FILENAME:".  Pressing ENTER will
	     load the highlighted file into memory, effectively OPENing
	     the file for manipulation.

	     If you attempt to OPEN a file and an EDITed file (already
	     OPENed) is in memory, you will be asked to SAVE the older
	     Data file before proceeding.

	     If you change your mind, and do not wish to REALLY OPEN
	     a Data File, press ESCAPE or click the close button of
	     the OPEN FILE window.

	     NEW (CREATE)

             This starts a new database file. You will need
             enter the name you wish to call it, such as
             "dolls", etc. This action will erase the current
	     file in memory. The new name will be tested to see
	     if it is the same as an existing filename. If it
	     is, Collect! will have you re-enter the name as it
	     will NOT let you overwrite existing files.
	     Collect! will also not accept an attempt by you to
	     put in a DOS extension. Collect! Data Files have
	     their own unique extension.
	     If you have edited any file you have Opened, Collect!
	     will give a warning that you need to SAVE the current
	     file before starting a NEW one.

             You are next presented with a list of collection
	     types to choose from. Click the text of the name
	     of the collection type. If you simply click "OK",
	     or just press ENTER, the collection type will be
	     the one at the TOP of the list.

             SAVE

             After you edit your database, use this to put the
	     new data back on the disk.

	     SAVE AS

	     This function allows you to save a Data File under a
	     different name than it was OPENed under. You will need
	     to type in a Data File name. Make one up; Collect! will
	     not allow you to overwrite existing Data Files. It will
	     also disallow the addition of a DOS extension, as it
	     appends its' own extension to be able to automatically
	     find the Data Files later. As described in File OPEN,
	     the Data file will be saved to the disk chosen for Data
	     files.

	     QUIT / EXIT

	     Allows you to quit Collect! and return to DOS. Make sure
	     you SAVE any changes you made to a database file before you
	     quit. Collect! will not let you quit UNTIL a data file that
	     has been edited has been saved. If you really do not want to
	     save the edited file, simply choose SAVE AS and enter a
	     name to save under (such as "garbage") to make Collect!
	     happy; then, when you go back to DOS simply delete the file:





	     C:\COLLECT > del garbage.*


	     ABOUT

	     This window shows the revision information, and any other
	     information you may need to know.



          ** SEARCH:
                    used to search for records that either match or
                    fall within a given pattern set or parameters.


          In the search window, a list of the data fields is
          presented. Also, there are financial data fields.
          Use the Up and Down arrow keys to move the highlight
          bar to the field to search in. Press the "Enter" key
	  to activate. Of course, you may also click the text
	  of the field name.
	  At this time, the CRITERIA window pops up:

		       *  =  Match
                       *  <  Less Than
                       *  >  Greater Than
                       *  -  Range

	  You can again use the Up Down keys to choose the type
	  of search to be made in the field you selected rather
	  than use the mouse.
	  Press "Enter" or click to activate. Note that alphanumeric
	  (text) fields are searched as MATCH only. Standard numeric
	  fields can be searched in any method. Common Spelling Data
	  fields ( #4 and #7 ) are MATCH only. After entry of your
	  search criteria, the window pops away and you can then
	  select any other remaining (unused) data field to search in.
	  Search of any CRITERIA through all possible records takes
	  a few milliseconds, NEVER more than 1/2 second. As soon
	  as you have entered your SEARCH FOR data, it is ready to
	  continue...

	  This process can continue on ALL fields until "Esc" is
          pressed, OR until the search has narrowed the "found"
	  records to less than 3 records. As each search criteria
	  gets entered, it will appear in the search window.

	  You can also stop the search progress by closing the
	  search window.

          In the bottom of the search window is a display that
          shows the current number of records left to search in.

                   LEFT:  xx  OF yy











          After the search is done, the search window will pop
	  away, leaving the main screen. At the screen bottom,
	  an EXIT button and a line of text appears:

		Use arrow keys to scroll through XX records.

          Where XX is the number of matching records.

          The first matching record (if any) is displayed. If there
          were none, the first record in the file is displayed.

          The up and down cursor keys will cycle through all of the
	  "found" records; you also can click the up and down arrow
	  buttons an thescroll bar at the right side of the screen.

          To exit the search function, press the Escape [Esc]
	  key, or click the EXIT button.
	  The currently shown record will stay on screen. Note
	  that the Search 'found' records can be operated on in
	  other ways - they can be printed out (See PRINT) or moved
	  or copied into other files (see UTILITIES).



          ** VIEW:
                  used to VIEW and EDIT the database file.

	  On the right side of the screen (at the border) is a
	  scroll bar. This is a visual aid to help determine
	  how far you are in the file:



                                       <-----  Top (end)
                                     │
                                     │
          Scroll Bar Marker  ------> █ <----- Current Position
                                     │
                                     │
                                     │
                                     │
				       <----- Bottom (1st record)



	  Near the bottom of the screen, a series of buttons will
	  appear. Each has a highlighted letter for those of you
	  who prefer the keyboard. Also there is a Clipboard Icon
	  to the left.

	  To Scroll through the records, click the Up and DOWN
	  arrows on either end of the scroll bar. Holding the button
	  down on an arrow will allow fast cycling. Release it to stop.
	  You can also use the keyboard arrow keys to scroll.












			 Up Down ARROW keys to
                         cycle through file.

                         "F" to access the
                         FIRST record.

                         "L" to access the
                         LAST record.

			 "P" to PICK a
                         record number.

                         "D" to DELETE the
                         current record.

                         "E" to EDIT.

	  As you scroll through entries, the scroll bar marker will
	  move up and down to give a quick visual indicator of your
	  position in the file. The scroll bar can also be manipulated
	  as well: The button can be dragged to a new position. To drag,
	  click the scroll button and move the mouse up and down WHILE
	  HOLDING THE LEFT BUTTON DOWN. Also, clicking the areas between
	  the scroll button and the arrow buttons will cause the records
	  to PAGE, I.E. 10% of the file size. Of course, you need to
	  have at least 10 records in the file... The supplied Example
	  Data File, ANTQUES, has 10 records to demonstrate this feature.

	  Using The "P" ( PICK ) key is another way to get to a
	  certain position in large files, but this is primarily a
	  mechanism for those of you who don't care for mice.

	  EDITING A RECORD:

          The up and down keys are used to cycle through the
          data fields in each record. To make a change, cycle
          through the record to the desired data field. The
	  selected Data will appear in RED video.
	  Of course, you can get there much faster by simply
	  clicking the desired data.
          Start typing in the revised information and press
	  the "Enter" key. If you access common spelling file
	  fields (4th and 7th from the top), a separate window
	  will pop up.



	  USING THE CLIPBOARD:

	  The Clipboard can be use to copy the entire contents of
	  any record over to any other record. This may save time
	  when updating your Data file and you have an item to enter
	  that is similar to one of the current entries. The default
	  clipboard entry is always record #1 when OPENing a file.
	  To access the clipboard, click the clipboard icon or press
	  the 'C' key. The record currently held in the clipboard
	  is shown.









	  To copy the record on the notepad into the clipboard,
	  click the 'IN' button (or press 'I'). The record seen on
	  screen at that point will be copied into the clipboard.
	  This copy action does not do anything to the record on
	  the notepad you are copying. Therefore to copy the contents
	  of ANY record to the clipboard, navigate through to the
	  record desired, and copy it into the clipboard as described.
	  To PASTE the clipboard's contents into a Data record, click
	  the clipboard (to access it) and click 'OUT' (or press 'O').
	  Whatever is held in the clipboard will be copied into the
	  record number you were at.

	  EXAMPLE: Add A Telescope to the Sample Antiques file --

	  OPEN the antiques sample data file. Choose View/Edit, and
	  scroll to the record that describes a Telescope. Click the
	  clipboard and choose 'IN'. Scroll the records to the EMPTY
	  record (#11), choose the clipboard again, and this time
	  choose 'OUT'. The contents will now copy into record 11.

	  Note that you can also access the Clipboard using the
	  keyboard. If you look at it, you'll see a 'C' written on
	  the pad of paper in the board.


                          ┌─────────────────┐
                          │  COMMON  DATA   │
                          └─────────────────┘


          When a common data field is accessed, a window will
	  pop up and prompt you for entry. One of these fields
	  is CONDITION.


                ┌───────[ Condition ]───────┐
                │                           │
		│     Poor                  │
		│     Fair                  │
		│     Good                  │
		│     Very Good             │
		│     Excellent             │
                │                           │
		│           OK              │
                └───────────────────────────┘


          However, looking at the CONDITION field on screen (in
          your database record), you will see an alpha entry,
          such as "Excellent."

          The reason this was done is because we're too lazy to
          type "Excellent" for 70, 120, or more records. We wanted
          a way to enter common data without all that typing. We
          figured you might not relish typing this out either.











          One of the problems we've seen in most databases has
          two symptoms, but it's the same problem:

               Commonly typed data gets misspelled. Searches
               tend to suffer.

               People tend to abbreviate a lot. This winds
               up being confusing for others. Was "P" POOR
               or PREMIUM ?

          So, considering we were lazy and had a dislike for too
          much abbreviation, we came up with common spelling
          files. They are simply a shortcut to get readable,
	  meaningful data on the screen or a printer.

	  To operate the CONDITION field, click the desired text,
	  and click "OK". The current condition is shown in RED
	  lettering when the window pops up. Clicking "OK", or
	  pressing ENTER or ESCAPE will not change the data.
	  In condition, you may alternately use the keyboard arrow
	  keys to move the RED lettering to the desired text.

	  In the Common Spelling File window (Field 4), you MUST
	  use the mouse. A second set of scroll arrows is presented
	  within this window. You may click these up and down to
	  scroll through the list. As in CONDITION, the present
	  selection is RED lettered. Simply click the desired text
	  to highlight it, and click "OK" or press ENTER. You can
	  also click the gray part of the scroll bar to get to the
	  top or bottom of the list quickly. The DRAG function of
	  the scroll button is disabled for now to maintain a
	  semblence of compatibility with the TEXT only version
	  (currently 1.03) of Collect! The click of the gray area
	  allows movement through all 30 possible choices by
	  "paging" 15 at a time. This will be amended on the next
	  release of the text version (1.04), which will allow up
	  to 100 words / phrases.

	  To finish editing, press the ESCAPE key, or click the
	  EXIT button. You will then return to the view mode.
	  Press Escape once more when you wish to quit viewing;
	  this will return you to the main menu.


	  QUICK GUAGES:

	  By clicking somewhere on the Yellow 'Legal Pad' you will bring up
	  the QUICK GUAGES window. These guages are used to give you an idea
	  of how this (current) particular item stacks up financially against
	  the other items in the Data File.
















          ** PRINT:
                   Printing out data from Collect! Print will use any
                   printer at LPT1, including Lasers. If you have
		   only one printer, this is no problem.

                   Collect! printouts have the capability of being
                   masked. Masking is much like the use of masking
                   tape during painting. Masked data fields will
                   not be printed. Print, when selected, assumes
                   that you want to print a record or group of
                   records in their entireity.

		   Collect! printing will "page" the data (it assumes
		   a continuous sheet type printer, such as a dot matrix
		   with a tractor feed or LASER with a paper tray) so
		   that the page breaks will be skipped. The print function
		   is not designed to print to a single feed device such as
		   older Daisy Wheel printers.


          THE PRINT WINDOW:

	     Print All

	     Prints the entire Data File in memory.

	     Print Last Search

             Prints all records from last search. If no search was
	     ever performed, it prints 0 records.

	     Print Current Entry

             Prints the record currently on screen.

	     Print Entry Number

             Allows you to enter a record number to print.

	     Print Using Mask

             Pops up another print window for further choices
	     using the print mask.

	     Set Up Mask

	     The mouse MUST be used...
	     Masked fields (those that will NOT be printed) will
	     show up in grey lettering, and the corresponding check
	     box will show up with an "X" in it.
	     To Mask a data field, click the check box. Subsequent
	     clicks of the check box will TOGGLE the state of the
	     masking ON and OFF.
	     When you print any records using the mask, the GREY
	     (or checked) fields and the corresponding Data will
	     not be printed. Close the window in the usual manner
	     and the mask data will be saved to the disk.









	 PRINT USING MASK MENU:

         This window has choices 1 - 4 as in normal Print, but the
         mask is used.


         Why use a mask? If you are a dealer, masking off the "price
         paid" field would enable you to hand a printout directly to
         a customer. Likewise, a trader may not want privy information
         about an item being given out. A printout is much easier to
         generate than a typed or handwritten list, and is more
	 convenient than memory alone. In the UTILITIES is another
	 use for the mask.


         ** UTILITIES:
                      used to Change Printout Header or Edit
                      Database Fields.


	  THE UTILITIES MENU:


	    Change Printout Name

            When Collect! prints records, it starts out by
            first printing a header. The default says

                    "Collect! ver. 1.XX"

            You can change this to anything you prefer, such
            as "Mr. Bill's Baseball Card Emporium / Choklit Shoppe."

            When any printouts are made, the header precedes any
            of your collection data. This header comes up only
            once per printout. If you print 1 record, the header
            will be printed first. If you print out 20 records,
            the header will likewise be printed only once, NOT
            once per record.

	    Auto Backup

	    Normally, data files loaded by Collect! are not automatically
	    backed up upon OPENing. This can cause loading of large files
	    to take a long time. The TOGGLE allows enabling of this feature
	    for those of you who desire the extra safety factor.

	    ( WHY DOES IT TAKE SO LONG?

	      Collect! Data Files are saved as ASCII text, not as a binary
	      form most databases use. The primary reason is that the data
	      is easier to reconstruct if something becomes corrupted. You
	      can reconstruct binary data if you know the format, but having
	      it as ASCII makes it a bit easier. )













	    By default, it is "OFF" when Collect! starts.

	    To change the state, bring up the AUTO SAVE TOGGLE window
	    and press ENTER. Subsequent presses will toggle the state
	    ON and OFF. When it is in the desired state, Press ESCAPE
	    to EXIT the window. You may also toggle the state using the
	    mouse by clicking the check box, which is checked when ON.

	    Copy / Cut / Paste

	    This selection uses data from the LAST SEARCH and brings
	    up another menu window. The Last Search data can be moved
	    into other files (which erases the records in the current
	    file) or copied into other files (which leaves the current
	    file intact.)
	    If you choose to move or copy data to a new file, you are
	    asked for a FileName. Should the filename already exist,
	    Collect! will NOT let you overwrite this - you must come
	    up with a unique name. Whenever a Copy/Cut/Paste choice is
	    selected and used, a dialog box will appear to confirm that
	    what you wanted has been done. All you need to do is press
	    Enter or click the 'OK'.

	     The next option is Modem File. This is simply a mechanism
	     to copy search data onto the disk as ASCII text that can
	     be viewed, such as using the DOS 'TYPE' command. The data
	     is grouped with the appropriate field names and the MASK
	     is used. For all practical intents and purposes, this
	     selection does the same thing as PRINT Last Search (Using
	     Mask) except that the data is routed to the disk instead
	     of the printer. The new file (DOS extension ".MOD") can
	     then be sent via disk or MODEM to another collector for
	     trades, to another dealer for inventory purposes, or to
	     other interested parties. The receiving party can then
	     use DOS or a word processor to PRINT out the file as if
	     Collect! had printed it.


	     *.DBF File Create

	     Quite a few database products use the *.DBF (dBASE) file format.
	     Collect! data can be Exported into other products by writing a
	     copy of the data file to the disk in a comma delimited sequential
	     file format. This is then readable by dBASE, Paradox, and other
	     database products supporting the dBASE format.


	     Statistics

	     This choice pops up a menu with 3 choices. The first two
	     are graphs, and the third is just BASIC statistics that
	     shows how much the items are worth on the average. The
	     graphs show you how much you've been spending by year,
	     and how much the items are worth vs. the year purchased.











          ┌────────────────────────────────┐
          │  FILES AND BACKING UP OF DATA  │
          └────────────────────────────────┘

          Files used by Collect! use a DOS extension of .ADB and
	  .BAK. If you have the Auto Backup Toggle turned on,
	  the .BAK file is created as soon as the .ADB file
          (your database) is loaded, and it is an image of the
          .ADB file that got loaded. This is done to provide you
          with a last resort way of saving your data. Normally,
          you never see the backups, nor do you see the .ADB DOS
	  extension.

          If you do lose your primary file and require use of the
	  backup, exit Collect! to DOS and rename the backup. For
	  instance, if you were somehow to lose your database called
	  "DOLLS", what you lost was the file DOLLS.ADB.  The backup
	  would be called DOLLS.BAK, and you could then use the DOS
	  'RENAME' command as follows:

          A:> rename dolls.bak dolls.adb

          This will now be loadable by Collect!, and Collect! will
          then create another backup as soon as you Load the
          file name "DOLLS."
          A batch file called "NAME.BAT", provided on the
          distribution floppy, does the same thing; however,
          it is easier to use:

          A:> name dolls

          If possible, you should use 720K or higher capacity
          disks so that all of your database files (and their
          backups) get saved properly. Better yet, place Collect!
          on your hard drive; just remember to make file backups
          and place them in a safety deposit box.
          The batch file "ADB2A.BAT", provided on the distribution
          floppy, will copy all of your .ABD database files to a
          formatted floppy disk in drive A:

          C:\Collect!>adb2a

          After all, it IS the database files that are important
          to save; this batch file copies them over in a fast way
          so that you do not have to back up the whole drive.

	  The batch file "INSTALL.BAT" will create a subdirectory
	  on your hard disk and install Collect!



















	  COLLECTION TYPE EDITOR: EDITYPE.EXE

	  The supplied collection types were originally lifted from
	  the text version of Collect!. Since we have found that very
	  little time is actually spent adding TYPES, it seemed prudent
	  to have this as a Standalone utility. This TEXT mode program
	  will allow you to Create or Edit a collection type:

	      You can customize the data field names for your
	      collections, and Create or Edit a Common Spelling
	      File unique to your application.


	  Edit Collection Type

             The entire main screen window is cleared, and a series of
             letters (A-Z) are shown. Each letter is related to a type
             of collection. Collect! is allowed 26 different collection
             types per disk or directory.

             We have provided some startup samples:

                           c = sports cards
                           m = tape (movies) library
                           s = stamp collection
                           a = antiques / misc.
                           t = audio library
                           b = book library


             These samples can be kept as is or modified. Modification
             and creation of wholly new collection types is the purpose
             of the editor. Perhaps you can use one of the supplied
             samples with some modification.

             When you create data files that are used by Collect!, each
             is "keyed" to a collection type. This is the mechanism that
             allows you to LOAD the books data file and see the fields
             related to books on screen.

             The distribution floppy, for instance, comes with the
             following example data files:

                              *  Movies
                              *  Audio
                              *  Stamps
                              *  Antiques
                              *  Books

             The next step is to decide if you wish to modify an existing
             collection type or create a new one. Press a letter key at
             this point. If you choose an unused letter, you will see a
             default set of field names. If you choose a "used" letter,
             the corresponding fields are shown. If you press 'Esc', you
             will be returned to the main screen.

             To the right of these names is the expected entry type. The
             entry type is fixed; be careful not to insert TEXT data in
             a field that would normally expect numeric data.






             FIELD Entry Types: (1st 13 entries)


                    * TEXT

                      Alpha Numeric -
                      e.g. letters and numbers, such as
                      1622 Wesson Ave. or John Smith.


                    * INTEGER

                      Numeric -
                      Whole numbers in the range
                      -32767 to +32767, such as
                      1111 or 1897 or -34.


                    * FLOATING POINT

                      Numeric -
                      entry with a decimal point, such as
                      10.87  or  1298767986.098.

             SPECIAL FIELD Entry Types: (Entries 14 - 16)

             14) EDITOR MESSAGE

                 This is the reminder for pressing F1 key at
                 entry #4 in the EDIT mode:

                   ┌───────────────────────────────────────┐
                   │ To Change XXXX or CONDITION, Press F1 │
                   └───────────────────────────────────────┘

                 where XXXXX is what you would like to call
		 the field.

		 This should be filled in when you are also using
		 the TEXT version of Collect!. However, the graphics
		 version ignores this.

             15) FIELD 4 COMMON DATA FILE WINDOW NAME

                 During operation of Collect! in the EDIT mode,
                 pressing the F1 key at field # 4 pops up the
                 common spelling file window. The window is labeled;
		 this will change the name of the window.

		 Same as above. You need to edit this ONLY if you
		 will be running the TEXT version.

             16) DATABASE NAME

                 When Collect! is up and running, the name of the
                 database is put on the screen (Upper Left) for you.

                 This entry allows you to name the database template
                 what you wish.








             Screen entries are limited in length by the editor (It
             doesn't want you to let the Collect! screen data overlap.)

             To EDIT a field name, simply type the corresponding number
             and press 'Enter.' Then, begin typing the new name. Press
             'Enter' when done.

             Press 'Esc' when you are done editing. You will be asked
             whether or not to save the changes. If YES, you proceed to
             editing of the Common Spelling File. If NO, you are returned
             to the main screen.

             You may wish to view a couple of included samples prior
             to creating a new collection type.

             Editing of the Common Spelling File is the same as above.
             Press 'Esc' when done and you will return to the main screen.
	     The common spelling file will be automatically saved.

          ┌─────────────┐
          │  SHAREWARE  │
          └─────────────┘

	  As this programme is distributed as "shareware", you should
          know a little about the concept. Shareware is not free.
	  Basically, if you use this programme and you like it, we
          would like to be paid for it. Shareware is a method of
          distribution that allows you, the user, to have obtain
          quality software without going through a middleman. Many
	  of today's best known programmes either ARE shareware or got
          their start this way.

          One of the wonderful things about shareware is the "try
	  before you buy" philosophy. You also are free to make
          copies and distribute them at your discretion, providing
          that you do not charge a fee for any distribution. Each
          recipient can also try Collect! and register if they can
          use it. Upon registration, we will send you a manual and a
	  new registered copy of the programme. Also, you will recieve
	  free upgrades for one year, including the upcoming Windows
	  version.

	  Registering this programme is simple: You may order by cheque,
	  Credit Card, or Money Order. The Cost is $40.00.

	  Contact:

			L.J. Alston
			1320 Standiford Ave.
			Suite # 242
			Modesto CA 95350
			(209) 522-8666 Voice or FAX


          Collect! is copyrighted material (c) 1991  G.L. Alston
          All rights reserved.

          DOS and MS-DOS are registered trademarks of Microsoft Corp.,
	  Redmond, Washington, USA.

          IBM is a registered trademark of International Business Machines,
	  Armonk, New York, USA.



```
{% endraw %}

## INSTRUCT.TXT

{% raw %}
```


     INSTRUCTIONS:

     This readme file uses the Public Utility "BROWSE.COM"

     To read the Collect! manual:

     Use the PgUp and PgDn keys to move one screen at a time, and use
     the up and down arrow keys to move one line at a time.

     Press Escape [Esc] when you are done reading about Collect!

     .
```
{% endraw %}

## WINDOWS.TXT

{% raw %}
```


    Microsoft Windows(tm) 3.0  Users Note:

    If you are intending to launch Collect! from Microsoft Windows 3.0,
    we've included 2 files that will help:

                 collect!.ico  ---------- Collect! Icon file

                 collect!.pif  ---------- Collect! PIF file

    The icon file can be directly inserted into the DOS Applications
    group.

    The supplied PIF file is set up as:

                    dir  -  c:\collect\collect!.exe

		    mode - GRAPHICS MODE             REAL/STANDARD MODE

		    RAM - requires 540K RAM

    The PIF file tells Windows(tm) to allocate a minimum of 540K RAM to
    Collect!, and where it is located.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3349

     Volume in drive A has no label
     Directory of A:\

    COLLECTV ZIP    174597   4-14-92   1:47p
    COLLECTT ZIP    116219   4-14-92   2:32p
    BROWSE   COM       958   1-02-86   3:54a
    DESCRIPT ION      2141   2-09-92   2:28p
    README   1ST     19242   2-09-92   2:21p
    README   BAT        22   2-09-92   1:00p
    GO       BAT        32   1-28-93   8:06a
    SHOW     EXE      2040   9-12-88  10:48a
            8 file(s)     315251 bytes
                            3072 bytes free
