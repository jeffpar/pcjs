---
layout: page
title: "PC-SIG Diskette Library (Disk #2373)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2373/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2373"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "DBCLEAN"

    DBCLEAN is designed to search for, and optionally delete, duplicate
    records in a dBase or compatible file. Finding and eliminating
    duplicate .DBF records can save disk space and program processing time.
    
    DBCLEAN is completely menu-driven, using popular pull-down menus and
    on-line context-sensitive Help screens. A Help screen relating to the
    current operation is always available with a single keystroke,
    eliminating the need to refer to printed documentation.
    
    DBCLEAN provides three modes of operation. In TURBO mode, the easiest
    to use, the selected file is searched based on every field in the
    database. Duplicate records are automatically deleted. In BATCH mode,
    select the fields you want to search on. If any duplicate records are
    found, a list is presented and you select the ones you want deleted.
    INTERACTIVE mode functions the same as BATCH mode except that
    duplicate records are presented to you as they are found and you must
    take action at that time.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## DBCLEAN.DOC

{% raw %}
```
                            dbClean 2.2
               Copyright (c) 1990, Practical Programs
                       1013 East Dimond Blvd
                             Suite 141
                        Anchorage, AK 99515

I.    Introduction

      dbClean 2.2 is designed to detect and optionally delete duplicate
      records in a Dbase or compatible file.  These files normally end
      in the extension .DBF.  By finding and eliminating these dupli-
      cates you can save disk space, program processing time, and even
      money.

II.   Getting Started

      A.   Make sure the following files are all on the same drive and
           directory:

           1.  DBCLEAN.EXE - This is the executable program.

           2.  SETUP.FIL - This is the configuration file.

           3.  MENU.FIL - This file holds information that is crucial
               for the program to run.

           4.  HELP.DBF - The data base file for the on-line help system.

           5.  HELP.DBT - The help system text.

      B.   Log onto that drive and directory.  For example, if you copied
           the files onto the C: drive and into a subdirectory named DBC,
           then log onto the C: drive by typing:

           C: <Enter Key>

           Then log into the directory by typing:

           CD \DBC <Enter Key>

           You may then confirm that all of the needed files are present
           by typing:

           DIR <Enter Key>

      C.   To start dbClean, type:

           DBCLEAN <Enter Key>

      D.   If any of the files listed in paragraph I above are missing,
           you will receive an appropriate error message:

           1.  If it is the SETUP.FIL file, you will be warned that it is
               missing.  The program will then continue.  You must
               immediately go to the Options section on the main menu and
               choose a configuration for each option.  The Option menu
               is explained more fully below.

           2.  If the HELP.DBF or HELP.DBT files are missing, you will not
               be warned.  On-line help will just not be available.  You
               can confirm this by pressing the F1 key at the main menu.
               If the on-line help does not appear, then the two HELP files
               are not in the current drive/directory.

           3.  If the MENU.FIL file is missing, you will be warned.  The
               program will then halt.  MENU.FIL is essential for the
               program to run.

      E.   If all is well, you will be presented with the Opening Screen.
           To read the general on-line Help information, press the F1 key.
           Otherwise, press any other key to continue.

      F.   You are now at the Main Menu.  All of the menus in dbClean 2.1
           use the highlight bar menus.  Here are some general navigation
           tips:

           1.  You may choose an item on the menu by placing the highlight
               bar on the item you wish to choose and hitting the Enter
               key.  You may move the highlight bar with the arrow keys.

           2.  A faster way of choosing an item is to hit the letter that
               corresponds to the first letter of the item name.  No Enter
               key is required.  For example, you're at the main menu and
               wish to go into the Options section, so you type "O".
               This feature is not case sensitive.  This feature works only
               on the main and sub menus.  It is not implemented when
               choosing a file or field (which is discussed below).

           3.  If you are in a sub-menu and wish to return to a higher
               menu level, use the escape key (labeled ESC on most PCs).
               This key will also abort most operations.

      G.   If this is your first time in dbClean 2.2, you should visit the
           Options section.  From the Main Menu, type "O".  A sub-menu will
           appear with four items on it, each discussed below.

           1.  DRIVE.  In this option, you can set the default drive.  The
               default drive is where all of the temporary files will be
               stored.  dbClean will delete these files before quitting.
               There are two things to remember about the default drive:

               a.  Since this drive will be used for the majority of the
                   disk intensive operations, you should choose your
                   fastest drive, keeping in mind that it must have
                   room for the temporary files.

               b.  The temporary files are erased before quitting.  If
                   you disrupt the program before it is finished, how-
                   ever, those files may remain.

           2.  PATHS.  The Path option is for you to tell dbClean where to
               look for the data base files you wish to process.  It
               should be a full path name with a drive designator, if
               necessary (see you DOS manual).  An example would be:
               C:\DB\CUSTOMER\MAIL.  This tells dbClean to look for
               the data base files in the \DB\CUSTOMER\MAIL subdirectory
               of drive C:.

           3.  COLOR.  On some systems with a CGA card and a monochrome
               monitor, color programs tend to make the screen hard to
               read.  By choosing the "Change it" selection, the program
               will be changed to black and white.  You can always change
               it back at a later time.

           4.  NOSNO.  On some older CGA monitors, colors tend to produce
               "snow" on the screen.  If you have this problem, choose
               the "Change it" selection.  The displays will then be a
               bit slower, but will be free of "snow."

III.  Using dbClean

      A.  The first thing you must do is to select the data base file
          you wish to clean.  From the Main Menu type "C" to enter
          the Choose selection.

          1. You will then be presented with a pick list of data base
             (.DBF) files that are on the Path you set in the Options
             menu.  Merely use the arrow/page up/page down keys to
             navigate the highlight onto the file you wish to choose
             and press the Enter key.

          2. If you wish to abort the operation without choosing a file,
             then hit the Escape key.

      B.  The next action to take is to type "P", for the Purge section,
          from the Main Menu.  You will be presented with a sub menu,
          listing the three purge methods:

          1.  TURBO.  The Turbo mode is the easiest to use.  Just type
              "T" at the Purge sub menu and sit back.  The Turbo mode
              automatically checks for duplicates based upon every
              field in the data base.  If any are found they are
              automatically deleted.  NOTE:  When using Turbo mode,
              you must be sure that you want the duplicates deleted.
              The records deleted in this mode are unrecoverable.

          2.  BATCH.  Type "B" at the Purge sub menu to enter the
              Batch mode.

              a.  You will be presented with a pick list of the field
                  names in the data base.  Use the arrow keys to navigate
                  the list and hit the Space Bar to select each field.
                  What you are doing here is choosing the fields upon
                  which the duplicate comparisons will be made.  Once
                  you have chosen the fields to be compared (they will
                  be printed on the screen as you select them), hit the
                  Enter key to go on, or the Escape key to abort.

              b.  The next screen will be fairly similar to the last,
                  except you are choosing the fields that will be
                  displayed on screen when you enter the decision
                  portion of the Batch mode.  Here's an example:

                  You have a mailing list with customer information.
                  You find that you are wasting time, money, and
                  materials sending advertisements to some customers
                  at the same addresses.  Your data base has the
                  following fields:  Last Name, First Name,
                  Address, City, State, Zip, Zip + 4.  When you
                  enter the batch mode, you select the last four
                  fields for the comparison.  Since you want to
                  also see the names when duplicates are found,
                  you select all of the fields for the display.

                  Once you have chosen the display fields, press
                  the Enter key to go on, or the Escape key to abort.

              c.  dbClean then processes the entire data base
                  searching for, and marking, duplicate records.
                  If no duplicates are found, you are told this
                  and any key pressed after that returns you to
                  the Purge sub menu.

              d.  If, however, duplicates are found, the original
                  record is shown in the top half of the screen.
                  The duplicates are displayed in the bottom half.
                  Using the arrow keys, you can examine the
                  duplicates.  For each duplicate you decide to
                  delete, place the highlight in any field (column)
                  in the record (line) and hit the Delete key.  You
                  will then see the word "DELETE" appear on the status
                  line near the lower left corner of the screen.
                  Continue on this way for each record.  If you
                  found you deleted a record by mistake, place the
                  highlight back on the record and hit the delete
                  key again.  The "DELETE" will disappear from the
                  status line.  When you are satisfied with the
                  deletions, hit the Enter key to go on.

              e.  The next set of duplicates, if there are any, will
                  then appear.  Deal with them as you did with the
                  last set.  This cycle will continue until all the
                  duplicates are identified.

              f.  Once all the duplicates have been processed, you
                  will be given one last chance to Abort the deletions
                  or to Delete the marked records.

              g.  NOTE:  Beginning with dbClean 2.2, the Batch mode no
                  longer writes a temporary file while processing.  We
                  have found that, when run on some LANs (particularly
                  with DOS's SHARE.EXE loaded), this would produce an
                  error message.  We now keep track of the marked
                  duplicate series in RAM.  Due to this, the maximum
                  number of duplicate sets dbClean will mark in Batch
                  mode will be 500.  Please note that these are full
                  sets of duplicates, not individual duplicate records.

          3.  Interactive

              a.  The Interactive mode starts up just like the Batch
                  mode.  You are given your pick list of fields to
                  compare, then the list of fields to show on the
                  screen.

              b.  The difference between the Interactive and Batch
                  modes is that the Interactive mode stops
                  immediately upon finding a duplicate.  It displays
                  the original record in the upper portion of the
                  screen and the duplicate in the lower portion.
                  You are then given the option to delete the original,
                  the duplicate, or neither.  The program then starts
                  searching for more duplicates, based upon your
                  selection:

                  (1)  If you chose to delete the original record, then
                       the duplicate now becomes the original.  If
                       another duplicate exists, it will now show in the
                       lower window.

                  (2)  If you chose to delete the duplicate, the original
                       remains in the upper window.  If another duplicate
                       exists, it will now show in the lower window.

                  (3)  If you chose to delete neither of the records, the
                       original remains in the upper window.  If another
                       duplicate exists, it will now show in the lower
                       window.

              c.  Once a set of duplicates has been processed, the program
                  continues to search for other sets, stopping for your
                  selections as it encounters them.

              d.  Once the entire file has been processed, you are given
                  the prompt to either Abort the operation or Delete the
                  marked records.

IV.   General Information

      A.  On line context-sensitive help is available in dbClean.  Just
          press the F1 key and the help screen will appear.  You may
          scroll through the help text with the arrow/page up/page down
          keys.  Hit the Escape key to exit the help screen.

      B.  dbClean does not maintain indexes.  Therefore, if you delete any
          records in a data base that has associated indexes, you must
          reindex them before using the data base.

      C.  Before using ANY program that may alter your data base files,
          ALWAYS back up those files first.

V.    Registration

      A.  dbClean 2.2 is being distributed as shareware.  This means that
          you may use dbClean a few times to see if it meets your needs.
          If it does, then you must register it by sending your name,
          address, and a check for $20 plus $4 shipping and handling to:

          Practical Programs
          1013 East Dimond Blvd
          Suite 141
          Anchorage, AK 99515

      B.  Registered users receive a numbered copy of the latest version
          of dbClean, with the closing screen removed.  Registered users
          also receive a free upgrade to the next version of dbClean, if
          produced, and free unlimited technical support.

      C.  Site licenses, LAN licenses, and multiple copy discounts are
          available.  Write Practical Programs at the address above for
          more information.  LANs of 50 workstations or less require no
          additional registration other than that given in V.A. above.

      D.  Whether you are registered or not, user suggestions are always
          welcome.  Some of the improvements in this version were the
          direct result of user suggestions.

      E.  If you encounter any problems, you can contact us at the
          address given above, or through CompuServe ID # 72460,346.

      F.  We are currently developing a library of dbClean routines
          that will be available to Clipper developers for integration
          into their applications.  If you wish more information on this,
          and wish to be placed on our mailing list, please contact us
          at the address above.

VI.   DISCLAIMER

      -  The software, diskettes, and documentation are provided "as is."
         The entire risk as to the use, results, and performance of the
         software, diskettes, and documentation is assumed by you.  In no
         event will Practical Programs be liable  to you or anyone else for
         any consequential, special, or indirect damages resulting from
         possession, use, or malfunction of this product, including
         without limitation damage to property and, to the extent permitted
         by law, damages for personal injury.  You agree that the liability
         of the company (Practical Programs) arising out of any legal claim
         (whether in contract, tort, or otherwise) will not exceed the amount
         you originally paid for the use of this product.



```
{% endraw %}

## FILE2373.TXT

{% raw %}
```
Disk No: 2373                                                           
Disk Title: dbClean                                                     
PC-SIG Version: S1                                                      
                                                                        
Program Title: dbClean                                                  
Author Version: 2.2                                                     
Author Registration: $20.00                                             
Special Requirements: None.                                             
                                                                        
dbClean is designed to search for, and optionally delete duplicate      
records in a Dbase or compatible file.  These files normally end with   
an extension of .DBF.  By finding and eliminating these duplicate       
records you can save disk space and program processing time.            
                                                                        
dbClean is completely menu driven, using popular pull-down menus and    
on-line context sensitive help screens.  A help screen pertaining to    
the current operation is always available with a single key press,      
eliminating the need to refer to printed documentation.                 
                                                                        
dbClean provides three modes of operation.  In TURBO mode, the easiest  
mode to use, the selected file is searched for duplicates based on every
field in the data base, and duplicate records are automatically deleted.
In BATCH mode, you select the fields you want to search on and if any   
duplicate records are found, they are presented to you in list form and 
you select the ones you want deleted.  INTERACTIVE mode functions the   
same as BATCH mode except that duplicate records are presented to you   
as they are found and you must take action at that time.                
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2373

     Volume in drive A has no label
     Directory of A:\

    HELP     DBF       342   1-14-90   9:52p
    HELP     DBT     17197   1-14-90   9:52p
    DBCLEAN  DOC     16482   1-15-90   8:43p
    DBCLEAN  EXE    226696   1-14-90   9:52p
    MENU     FIL     14992   1-15-90   8:53p
    SETUP    FIL       197   1-15-90   8:55p
    GO       BAT        29  10-04-90   5:38a
    GO       TXT       735  10-04-90   6:24a
    FILE2373 TXT      2443  10-04-90   2:54p
            9 file(s)     279113 bytes
                           37888 bytes free
