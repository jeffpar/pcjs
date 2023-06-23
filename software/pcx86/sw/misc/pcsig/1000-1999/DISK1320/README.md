---
layout: page
title: "PC-SIG Diskette Library (Disk #1320)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1320/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1320"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "DISKCAT"

    DISKCAT is a floppy disk cataloging program for hard disk-based
    systems. Files from each disk are automatically read by the program and
    put into the catalog. The catalog records the file name, size, and
    extension. DISKCAT allows you to add your own description of the file
    and the file category. Afterwards, you may search for a file or print
    a report by disk, by file name, or by file category. DISKCAT will also
    print 1-7/16" x 5"-sized disk labels.
    
    DISKCAT is not only a convenient way to keep track of what programs you
    have and where they are located, but it also allows you to
    describe each file so you can immediately recall the program's usage.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## DISKCAT.DOC

{% raw %}
```
@CB





            
            
            
            
            
            
            
            
                           EDiskCat Disk Cataloging SystemF
                                          
                                        EV1.0F
                                          
                        (c) Copyright 1988. J. M. Nerwinski.
            
            DiskCat is distributed under the Shareware concept. Feel
            free to make copies and pass them on to friends and
            associates.
            
            If you find Diskcat to be of use, please support it.  Your
            registration fee of $30.00 will earn you an honored place in
            my database, a registered copy of the latest version of
            DiskCat, 50 free labels,a source for additional labels and
            insure future support of the program.  Please use the
            registration and label order form included on this disk.
            
            You will be notified of all major upgrades and be given the
            opportunity to purchase upgrades at a nominal charge.
            
            Send all registrations, bug reports, comments, suggestions,
            etc. to:
            
                                  J. M. Nerwinski
                                  112 Leon Street
                                  Durham, NC 27704


                      DiskCat Disk Cataloging System   Page: 2


                                          
                                          
                                 ETABLE OF CONTENTSF
            
            
                      System Requirements ....................  3
                      
                      Installation ...........................  4
                      
                      General Information ....................  5-6
                           Printed Disk Labels ............  5
                           Help System ....................  5
                           Data Entry .....................  5
                           Menu Option Selection ..........  5
                           Escape Key .....................  6
                           Disk and File Deletion .........  6
                      
                      Cataloging Disks .......................  7-8
                           Disk Number ....................  7
                           Volume Label ...................  7
                           File Cataloging Process ........  8
                           Disk Labels ....................  8
                      
                      Delete Disks from Catalog ..............  9
                      
                      Review Files on Disk ...................  10-12
                      
                      Catalog Search .........................  13
                      
                      Reports ................................  14
                      
                      Utilities ..............................  15-16
                           Reindex Databases ..............  15
                           Start New Catalog ..............  15
                           Set System Defaults ............  15
                           Remove Deleted Disks and Files .  16
                           Print Labels ...................  16
                           Edit Category Listing ..........  16
                      
                      Label Order Form .......................  17
                      
                      Registration Form ......................  18
                      


                      DiskCat Disk Cataloging System   Page: 3


                      
                      
                                ESYSTEM REQUIREMENTSF
                                          
                                          
                                          
            The minimum requirements for DiskCat are:
            
		      *  512K Random Access Memory
                      *  A hard disk system with one floppy drive
                      *  An 80 column printer (Epson or compatible)
                      *  a monochrome or color monitor
            
            
            DiskCat was designed to be used on a hard drive system.
            Since all catalog items will be stored on the default drive,
            it is impractical to run DiskCat from a single floppy drive.
            The database files will fill up quite quickly and you will
            run out of disk space.
            
            Future versions of DiskCat will include the option to
            operate the program on a floppy drive system.
            
            It is also necessary to have a CONFIG.SYS file in your root
            directory.  If you already have a CONFIG.SYS file, make sure
            that it contains these statements:
            
                                FILES = 20
                                BUFFERS = 22
            
            If there is no CONFIG.SYS file, consult your DOS manual for
            the information on how to create it.
            
            
            


                      DiskCat Disk Cataloging System   Page: 4


                                          
                                    EINSTALLATIONF
            
            Installation of Diskcat is quite simple.
            
            Copy all files on the distribution diskette onto your hard
            disk.  It is recommended that you create a unique directory
            for DiskCat.  Consult your DOS manual for instructions on
            how to create a new directory.
            
            Change to that directory, insert the distribution diskette
            into drive A, and issue the DOS command:  Copy a:*.*
            
            To start DiskCat simply type DISKCAT.  The program will load
            and the introductory screen will appear.  Diskcat
            automatically detects a color monitor and will display
            accordingly.  After carefully reading the introductory
            screen press any key.
            
            The first time you run DiskCat, the system screen will
            appear.  You need to supply Diskcat with two pieces of
            information.
            
                      1.  The disk drive you will be using for your      
                          cataloging. (This is NOT your hard disk! it
                          must be either drive A or B.  If you specify   
                          drive C, DiskCat will catalog your hard drive
                          which may take a day or two.)
                 
                      2.  Your name or Company Name.  This is the name   
                          that will be printed on your diskette labels.
                      
                             DISK CATALOG OF ------------------
            
            After you have entered the above information, DiskCat will
            display the Main Menu.  This information will not be
            requested again.  You may, however, change it any any time
            through the Utilities Menu.
            
            


                      DiskCat Disk Cataloging System   Page: 5


                                          
                                EGENERAL INFORMATIONF
                                          
                                          
            EPRINTED DISK LABELSF
            
                 DiskCat requires one-up labels, 1 7/16" x 5".  I know
                 from experience that these labels are not only
                 difficult to find, but are usually only sold in boxes
                 of 5,000 labels.
                 
                 Now, unless you have 5,000 disks to catalog, this may
                 pose a problem.  REGISTER YOUR  COPY OF DISKCAT!  I
                 will automatically send you 50 labels with your
                 registration.  You will also be able to purchase more
                 labels, either with your registration or at a later
                 time.  The order form can be found in ORDER.TXT.
                 Labels will only be available to REGISTERED USERS!
                 
            
            EHELPF
            
                 Help is available at every turn.  There are context     
                 sensitive help screens for every menu option and data   
                 entry item.  Simply press F1 key when needed.
            
            EDATA ENTRY - CAUTION!F
            
                 Please be careful when entering file name, extensions,
                 etc. manually.  DiskCat will automatically go to the    
                 next data item when the previous item has been filled.
                 Press the <Enter> key only if your entry does not fill
                 the entire field.  This especially holds true for       
                 single digit or character entries.  If you press        
                 <Enter> after making your entry, you may find that you
                 have automatically skipped the next item in the list.
            
            
            EMENU OPTION SELECTIONF
            
                 There are two ways of making a selection from a menu.
            
                      1.  You can move the light bar to the desired      
                          selection.  This method is recommended         
                          for first time users since it gives you        
                          access to on-line HELP.  Once you become       
                          familiar with the menu options you can         
                          use the direct method.


                      DiskCat Disk Cataloging System   Page: 6


            
                      2.  Press the letter of your desired               
                          selection.  Diskcat will go directly to        
                          the procedure selected.
            
                             EREMEMBER! DON'T PRESS <Enter>!F
            
            
            EESCAPEF
            
                 Pressing the <Esc> key will usually get you out of      
                 whatever you are doing.
            
                 If you escape out of a data entry routine, any changes
                 or additions that you have made will be ignored.
            
                 During the cataloging process, you can escape at any    
                 time except when entering a new volume label, and while
                 DiskCat is processing and reading the diskette.
            
                 There is only one SAFE way out of the system - through
                 the Exit to DOS option from the Main Menu.  If you      
                 reboot your system or turn it off without properly      
                 exiting DiskCat, you run the risk of damaging your      
                 databases. You must also be very careful with DOS       
                 errors.  If at all possible, NEVER 'Abort'.  DOS has a
                 bad habit of leaving the database files open when you   
                 abort.  Try to rectify the situation and 'Retry'.
                                     
                                     BE FOREWARNED!!
            
            
            EDISK AND FILE DELETIONF
            
                 When you request to delete a file or disk from the      
                 catalog, Diskcat will mark the deletion with an         
                 asterisk.  Whatever you mark for deletion can always be
                 unmarked until you physically remove it through the     
                 Utilities Menu.
            
                 DiskCat will advise you if a disk or file is marked for
                 deletion in one of two ways.  If the entire disk is to
                 be deleted, a message will appear at the top of the     
                 screen.  If a file is marked for deletion, an asterisk
                 will appear to the left of the item number.  When you   
                 delete a disk all of its associated files are also      
                 marked.
            


                      DiskCat Disk Cataloging System   Page: 7


                                          
                                  ECATALOGING DISKSF
            
            
                 From the Main Menu, Select Option A.
            
            
            EDISK NUMBER:F
            
                 DiskCat will catalog up to 9,999 disks.
                 
                 DiskCat keeps track of the next Disk number available.
                 That  number will be shown in the Disk Number box.
                 Press Enter to accept this number.
                 
                 If you know that you have deleted a disk from the
                 catalog, and want to reuse that number you can enter
                 the number at this time.
                 
                 If the number you enter is already in use, and the disk
                 has not been deleted from the catalog, you will receive
                 an error message and be given the opportunity to select
                 a new number.
                 
                 To return to the Main Menu without continuing with the
                 cataloging process, simply press <Esc>.
                 
                 Once you have entered the disk number, you will be
                 instructed to insert the disk to be cataloged into the
                 drive you have specified (usually A:).  Diskcat will
                 then look for a volume label.
                 
            
            EVOLUME LABEL:F
            
                 If the disk has a label, it will de displayed in the
                 Label Box.  You will then be asked if you want to
                 change that label.
                 
                 If you wish to change the label, answer Y and enter the
                 new label (maximum 11 characters).  The new label will
                 be displayed in the Label Box and the volume label of
                 the disk will also be changed.
                 
                 NOTE:  I am using a public domain utility (Volser.com)
                 to change the disk label.  There are a few cases when
                 this utility can not change the volume name.  Should
                 this happen, your only recourse is to escape out of the
                 cataloging process for that disk and change the disk
                 label through DOS.  You can then catalog the disk
                 normally.
                 


                      DiskCat Disk Cataloging System   Page: 8


                 No duplicate volume labels are permitted by the system.
                 If the label you enter already exists in the catalog,
                 you will be given the opportunity to change your entry.
                 
                 You can cancel the cataloging process by pressing the
                 <Esc> key.  The system will return to the Main Menu.
            
                                          
                            ETHE FILE CATALOGING PROCESS:F
            
                 Once the volume label has been entered, DiskCat will
                 proceed to read all of the files on the diskette.
                 
                 DiskCat is able to catalog all files on the disk,
                 including files in sub directories.  The location of
                 each file on the disk is stored along with the file
                 name.
                 
                 After DiskCat has read all files on the disk, the
                 screen will clear and you will be able to catalog a new
                 disk.
                 
                 If there are no more disks to catalog, press <Esc>.
            
            
            EDISK LABELS:F
            
            E     F** See the information regarding labels used by DiskCat
                 in the General Information Section.
            
                 After each cataloging session, you will be given the
                 opportunity to print disk labels for all NEWLY
                 cataloged disks.  This is optional.  You can also print
                 labels through the Print Label Option in the Utilities
                 area.
                 
                 If you decide to print labels at this time, DiskCat
                 will first ask if you want a sample label to check your
                 printer alignment.  Once you have determined that the
                 labels are properly aligned, answer N to "Print
                 Sample?" and labels will be printed.
            


                      DiskCat Disk Cataloging System   Page: 9


            
                            EDELETING DISKS FROM CATALOGF
            
            
                 Select Option B from the Main Menu.
                 
                 DiskCat will ask for the disk number to delete.  Once
                 you have entered a valid number, one page of files on
                 that disk will be displayed.  This gives you the
                 opportunity to verify that the disk you have entered is
                 the correct one.
                 
                 If the disk has not already been marked for deletion,
                 DiskCat will verify that you really want to delete the
                 disk.  If, however, the disk has already been marked
                 for deletion, DiskCat will ask you if you want to
                 recall it (unmark it).
                 
                 Remember that deleting a disk also deletes all of its
                 files from the catalog.
                 
                 When finished, press <Esc> to return to the Main Menu.
                 
                 If you want to physically remove deleted disks from the
                 catalog at this time, you can do so through the
                 Utilities Menu.


                      DiskCat Disk Cataloging System   Page: 10


                                          
                                EREVIEW FILES ON DISKF
                 
                 Select Option C from the Main Menu.
                 
                 Enter the number of the disk you want to review.  If
                 the disk is not in the catalog, DiskCat will display an
                 error message and you will be given the opportunity to
                 request another disk.  You can return to the Main Menu
                 from this point by entering 0 or pressing <Esc>.
                 
                 If the disk is in the catalog, DiskCat will display the
                 first page of files.  All further activity will depend
                 on the use of the function keys as displayed at the
                 bottom of the screen.
                 
                 You can page up and down through the file list and add,
                 delete and edit files.  The directory location of the
                 files will be displayed directly below the disk number
                 always starting with the root directory.
                 
                 The file listing displays the file name, extension,
                 size, and date as read from the disk.  There are two
                 fields for you to fill in if desired:  Description and
                 Category.
                 
                 The file Description is strictly informational.  No
                 processing or reports are affected by it.  The Category
                 field, however, is rather important.  After you have
                 categorized your files, you will be able to search for
                 all files in a particular category and print listings
                 by category.  More about categories a little later.
                 
                 
            
            EUSING THE FUNCTION KEYSF
                 
                 F1 - Always used for HELP.
                 
                 F2 - Page Up.  Pressing F2 will give you the previous
                      page of files.  If you are already on the first    
                      page DiskCat will 'beep' to alert you.
                 
                 F3 - Page Down.  Pressing F3 will give you the next     
                      page of files.  If you are on the last page of     
                      files when you press F3, DiskCat will 'beep' to    
                      alert your.
                 
                 F4 - Chr Dir.  Pressing F4 will allow you to change
                      to a directory displayed on the file screen.  A
                      directory can be identified by <DIR> in the size
                      column.  When you press F4 the cursor will be
                      positioned at the bottom right corner of the
                      screen requesting Item #.  Enter the item number


                      DiskCat Disk Cataloging System   Page: 11


                      to the left of the directory listing.  If your
                      entry is a valid sub directory, the screen will
                      change to show only the files in that
                      subdirectory.  You can always return to the root
                      directory by pressing F4 and entering 0.
            
                 F5 - Add.  You can add a file to a disk listing by      
                      pressing F5.
            
                      The current listing will clear and you will be
                      presented with a line of blanks to be filled in.
                      Enter the description, category, filename,
                      extension, size and date of the new file.
                      Remember the caution about using the <Enter> key.
                      
                      You can cancel your entry by pressing <Esc>.
                      
                      Now for that word about CATEGORIES.  When the
                      cursor is positioned in the category box, press
                      F1.  A normal HELP screen will appear.  Press F1
                      again, and a list of all established categories
                      will appear.  You can page through these existing
                      categories by using the up and down arrows and the
                      PgUp and PgDn keys.  When you have found the
                      category you want to use, press <Enter>.  The
                      screen will clear, and your category selection
                      will be entered automatically.  If you can not
                      find the category you want, press <Esc>.
                      
                      If you wish to use a category which is not in the
                      list simply type it in.  DiskCat will look at the
                      existing list and add any new category as
                      necessary.
                      
                      The Category list can also be modified through the
                      Utilities Menu.
                      
                 
                 F6 - Edit.  You can edit any file or directory listing
                      in the catalog by pressing F6.  The cursor will be
                      positioned at the lower right corner awaiting the
                      item number to edit.  Enter the number located to
                      the left of the file you wish to edit.
                      
                      That file information will now be highlighted and
                      you can make the necessary changes.  To keep the
                      existing information, simply press enter and the
                      cursor will move to the next field.  You can
                      cancel the editing process by pressing <Esc>.
                      
                      You will probably use edit primarily to enter file
                      descriptions and categories.  See the notes about
                      the category lists under F5.  Once you have added
                      the description and/or category and, if there are


                      DiskCat Disk Cataloging System   Page: 12


                      no more changes to make, you can press PgDn.
                      DiskCat will accept your changes and skip all of
                      the remaining fields.
                      
                 F7 - Del/Rec.  Press F7 to Delete or Recall a file in
                      the file list.  As with Add and Edit, DiskCat will
                      request the Item Number to Delete or Recall.  If
                      the item has not been previously deleted, it will
                      be marked for deletion and an asterisk will appear
                      to the left of the item number.  If the item was
                      already marked for deletion, it will be recalled
                      (unmarked) and the asterisk will disappear.
                      
                      Remember, that items marked for deletion are not
                      physically removed until you request DiskCat to do
                      so through the Utilities Menu.
                      
                 F10 - Exit.  F10 will clear the existing screen and
                      request a new disk number.  Enter another disk
                      number or press <Enter> or <Esc> to return to the
                      Main Menu.
                      


                      DiskCat Disk Cataloging System   Page: 13


            
                               ECATALOG SEARCH UTILITYF
            
            Select option C from the Main Menu.
            
            A new Search Options Menu will appear.
            
            You can search DiskCat for files several ways:
            
                      A.  By File Name and/or Extension
                      B.  By Disk Label Name
                      C.  By Category
            
            The search procedure is basically the same for all searches.
            A display screen will appear requesting the search criteria.
            If DiskCat is able to match your request, it will display
            only those files which match the request. If there is no
            match, you will be advised.
            
            So, if you want a list of all GAMES in your catalog, request
            option C. Search by Category, and enter the category GAMES.
            Don't forget the Category list is available by pressing F1.
            DiskCat will display all files that have been categorized as
            games, showing the file name, extensions, descriptions,
            locations, sizes, dates and, most importantly, the disk
            number.
            
            One item to note is that when searching by filename and/or
            extension, you CAN NOT USE DOS WILDCARD CHARACTERS. If you
            want all files beginning with the letter C, simply enter C
            and leave the extension blank.
            
            If you fill in both the filename and extension, DiskCat will
            search for an exact match.  Therefore, in the above example,
            if you enter C in the filename and COM in the extension,
            DiskCat will search for C.COM.
            
            Again, don't forget the HELP screens.  They give examples
            for all searches.
            
            Once you have received a screen of files, you can use the F2
            and F3 keys to page up and down through the listing.  You
            can not add or edit any file from the search area.
            
            When you are finished with the current listing, press F10
            and you will be able to either request another search or
            return to the Search Menu by pressing <Esc>.
            


                      DiskCat Disk Cataloging System   Page: 14


            
                                      EREPORTSF
            
            Select Option E from the Main Menu.
            
            A new Reports Menu will be displayed.
            
            There are 5 basic reports available:
                 
                 A.   Individual Disk Listing:  This report will give a
                      listing of all files on a particular disk.  Disks
                      will be separated into their own reports.  That
                      is, if you request a listing for your entire
                      catalog, each disk will have it's own report, even
                      if there are only one or two files on that disk.
                      
                      This report is best suited for a permanent record
                      in a binder.
                      
                 B.   Complete by Disk Number:  This report will produce
                      a continuous listing by order of disk number.  You
                      can limit the report to any number of consecutive
                      disks, or print the entire catalog.
                      
                 C.   Complete By File Extension and File Name:  This
                      report will produce a complete listing of files
                      ordered first by extension and then file name.
                      You can limit the report by entering an individual
                      extension.
                      
                 D.   Complete by File Name and Extension:  This report
                      will produce a continuous listing of all files in
                      the catalog by order of File Name and then
                      Extension.  This report can only be printed as a
                      complete catalog.
                      
                 E.   Complete by Category:  This report will produce a
                      continuous listing by order of category.  This
                      report can be limited to a single category if
                      desired.  Please note that when requesting the
                      complete catalog, only those files which have been
                      categorized will be included in the listing.
                      


                      DiskCat Disk Cataloging System   Page: 15


                      
                                   EUTILITIES MENUF
                                          
            Select option F from the Main Menu.
            
            The Utilities Menu will be displayed.
            
            There are six options available through the Utilities Menu:
            
                 A.   Reindex Database Files.  During normal operation
                      of DiskCat, reindex of the databases should not be
                      necessary.  However, should you experience a power
                      failure or other such horror, you may find that
                      the system is not displaying or reporting the data
                      properly.
                      
                      Should this occur, your first line of action
                      should be to reindex the databases.  If the
                      problem is not solved, you will have to rely on
                      your backups (You have been making regular
                      backups, haven't you?).
                      
                      Be aware that a reindex on a large database could
                      take some time.
                      
                 B.   Start New Catalog.  This option will delete and
                      remove EVERYTHING from your catalog except your
                      category listing.  I have provided this option for
                      two reasons.  First of all, if you are like me,
                      you will want to play with DiskCat a little before
                      getting down to the serious business of cataloging
                      all of your disks.
                      
                      Once you are satisfied that DiskCat really is
                      wonderful, you can clean out everything you have
                      done and begin to catalog in earnest.
                      
                      Secondly, there may be some who may want to just
                      start from scratch after a period of time.  Both
                      options are possible.
                      
                      When you select this option, DiskCat will verify
                      that you truly want to start a new catalog.  If
                      you answer Y, the catalog will be cleaned out.
                      
                 C.   Set System Defaults.  This option is provided in
                      case you wish to change either the drive
                      containing disks to be cataloged or the name to be
                      printed on the disk labels.
                      


                      DiskCat Disk Cataloging System   Page: 16


                 D.   Remove Deleted Disks.  As explained previously,
                      records marked for deletion will physically remain
                      in the catalog until you run this option.  They
                      can, therefore, be recalled at any time prior to
                      running this option.
                      
                      Once this option is run, however, the deleted
                      records are gone and can not be recalled.
                      
                 E.   Print Labels.  This option allows you to print
                      labels for any disk in the catalog.  You can print
                      labels for a single disk, a range of disks, or the
                      entire catalog.
                      
                      Labels used are one-up, 1 7/16" x 5". See the
                      General Information  section of this documentation
                      for more about labels.
                      
                 F.   Edit Category Listing.  This option allows you to
                      add, edit, and delete predefined file categories.
                      
                      You can move up and down through the category list
                      by using the up and down arrow keys, PgUp and
                      PgDn.
                      
                      To add a category, press the <Ins> key.  DiskCat
                      will ask for the name of the new category.  Once
                      entered DiskCat will verify that the category does
                      not already exist and will insert it into the list
                      alphabetically.  If the category does already
                      exist you will be advised and your entry will be
                      ignored.
                      
                      To delete a category, move the highlight to the
                      category to be deleted and press the <Del> key.
                      The category will be deleted and the list
                      redisplayed.  In this one case, once deleted, the
                      category can not be recalled.
                      
                      To edit a category, move the highlight to the
                      category to be edited and press the <Enter> key.
                      The cursor will appear and you can edit the
                      category.  When finished press the <Enter> key
                      again.  The list will be redisplayed.
                      
                      To return to the Utilities Menu, press the <Esc>
                      key.


                      DiskCat Disk Cataloging System   Page: 17


                 
            
            
            
                              EDISKCAT LABEL ORDER FORMF
                                          
                                          
            
            
                 Name:__________________________________________________
                 
                 Address:_______________________________________________
                 
                         _______________________________________________
                 
                    City:_______________________________________________
                 
                   State:_______  Zip: ______________
            
                 
                 Registration Number: _____________________________
                 
                 
                 
                 Labels are available in lots of 100 to registered users
                 only.  This includes postage.
                 
                 
                                                   Quantity:  ________
                 
                                                              x $5.00
                 
                                             Total Enclosed:____________
                 
                 
                 
                 Mail To:  J. M. Nerwinski
                           112 Leon Street
                           Durham, NC 27704
                 
                 


                      DiskCat Disk Cataloging System   Page: 18


            
                        EDISKCAT REGISTRATION AND LABEL ORDERF
            
            
            Registration includes:
            
                      A Registered Copy of the Latest Version of DiskCat
            
                      50 Free Labels
            
                      Prompt Notification of Upgrades and Special price
                           on Upgrade Purchase.
            
                      The Ability to Purchase Additional Disk Labels in
                                     Lots of 100.
                 
            
                 Name:__________________________________________________
                 
                 Address:_______________________________________________
                 
                         _______________________________________________
                 
                    City:_______________________________________________
                 
                   State:_______  Zip: ______________
                 
                 
                 Where did you get this copy of DiskCat?:
                 
                 ______________________________________________________
                 
                 
                 
                                          Registration Fee:      $30.00
                 
                 Extra Labels (available to registered users only)
                      Add $5.00 per 100  labels. Sold in lots
                      of 100.   Includes postage.
                 
                                Quantity: ________  X $5.00     ________
                 
                                                    Total:      ________
                 
                 Please include any comments or observations on a
                 separate sheet of paper or on reverse of registration
                 form.  Thank You.
                 
                                Mail to: J. M. Nerwinski
                                         112 Leon Street
                                         Durham, NC 27704
```
{% endraw %}

## FILE1320.TXT

{% raw %}
```
Disk No: 1320
Program Title:  DISKCAT
PC-SIG version: 1

DISKCAT is a floppy disk cataloging program for hard disk based systems.
Each disk is automatically read by the program in either drive A or B
and put into the catalog.  The catalog records the file name, size, and
extension.  DISKCAT allows you to later add your own description of the
file and the file category.  Afterwards you may search for a file or
print a report by disk, by file name, or by file category.  DISKCAT will
also print 1-7/16" x 5" sized disk labels, which can be ordered from the
author of the program.

DISKCAT is not only a convenient way to keep track of what programs you
have and where they are located, but it also allows you to describe each
file you own so that you can immediately recall the program's usage.

Usage:  Disk Cataloging.

Special Requirements:  512K RAM memory, a hard disk, and an 80-column
printer.

How to Start:  Type GO (press enter).

Suggested Registration:  $30.00

File Descriptions:

README        Program introduction.
DOC      BAT  Prints documentation to the printer.
VOLSER   COM  Volume label program.
CATEGORY DAT  Data file.
DISKCAT  DAT  Data file.
FILECAT  DAT  Data file.
DISKCAT  DOC  Documentation.
DISKCAT  EXE  Main program.
FILES    TXT  File descriptions.
ORDER    TXT  Label order form.
REGISTER TXT  Registration form.

PC-SIG
1030D E Duane Avenue
Sunnyvale CA 94086
(408) 730-9291
(c) Copyright 1989 PC-SIG, Inc.

```
{% endraw %}

## FILES.TXT

{% raw %}
```

README
DISKCAT  EXE     Main Disk Cataloging Program
*        DAT     Database Files
DOC      BAT     Batch File to print Documentation
DISKCAT  DOC     Documentation (18 pages)
VOLSER   COM     Create/Alter Volume labels
FILES    TXT     File Listing
REGISTER TXT     Registration Form
ORDER    TXT     Label Order Form
```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                  <<<<  Disk No 1320  DISKCAT  >>>>                      ║
╠═════════════════════════════════════════════════════════════════════════╣
║                                                                         ║
║   To print the documentation, type:                                     ║
║                                                                         ║
║             DOC (press enter)                                           ║
║                                                                         ║
║   To start the program, type:                                           ║
║                                                                         ║
║             DISKCAT (press enter)                                       ║
║                                                                         ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## ORDER.TXT

{% raw %}
```


			      DISKCAT LABEL ORDER FORM




		 Name:__________________________________________________

		 Address:_______________________________________________

			 _______________________________________________

		    City:_______________________________________________

		   State:_______  Zip: ______________


		 Registration Number: _____________________________



		 Labels are available in lots of 100 to registered users
		 only.  This includes postage.


						   Quantity:  ________

							      x $5.00

					     Total Enclosed:____________



		 Mail To:  J. M. Nerwinski
			   112 Leon Street
			   Durham, NC 27704


```
{% endraw %}

## REGISTER.TXT

{% raw %}
```



			DISKCAT REGISTRATION AND LABEL ORDER


	    Registration includes:

		      A Registered Copy of the Latest Version of DiskCat

		      50 Free Labels

		      Prompt Notification of Upgrades and Special price
			   on Upgrade Purchase.

		      The Ability to Purchase Additional Disk Labels in
				     Lots of 100.


		 Name:__________________________________________________

		 Address:_______________________________________________

			 _______________________________________________

		    City:_______________________________________________

		   State:_______  Zip: ______________


		 Where did you get this copy of DiskCat?:

		 ______________________________________________________



					  Registration Fee:      $30.00

		 Extra Labels (available to registered users only)
		      Add $5.00 per 100  labels. Sold in lots
		      of 100.   Includes postage.

				Quantity: ________  X $5.00     ________

						    Total:      ________

		 Please include any comments or observations on a
		 separate sheet of paper or on reverse of registration
		 form.  Thank You.

				Mail to: J. M. Nerwinski
					 112 Leon Street
					 Durham, NC 27704
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1320

     Volume in drive A has no label
     Directory of A:\

    CATEGORY DAT       126   2-14-88   1:29p
    DISKCAT  DAT        98   2-14-88   1:29p
    DISKCAT  DOC     40304   2-14-88   1:29p
    DISKCAT  EXE    232812   2-14-88   1:29p
    DOC      BAT        45   2-14-88   1:29p
    FILE1320 BAK      1498   2-09-88   7:00p
    FILE1320 TXT      1493   2-21-89   4:54p
    FILECAT  DAT       322   2-14-88   1:29p
    FILES    TXT       332   2-14-88   1:29p
    GO       BAT        38  10-19-87   3:56p
    GO       TXT      1002   3-14-89  11:49a
    MANUAL   BAT       147   1-19-89   9:21a
    ORDER    TXT       675   2-14-88   1:29p
    README            1478   2-14-88   1:29p
    REGISTER TXT      1221   2-14-88   1:29p
    VOLSER   COM      1152   2-14-88   1:29p
           16 file(s)     282743 bytes
                           28672 bytes free
