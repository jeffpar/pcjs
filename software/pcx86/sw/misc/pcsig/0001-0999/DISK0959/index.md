---
layout: page
title: "PC-SIG Diskette Library (Disk #959)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0959/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0959"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "FLOPCAT - DISK CATALOGING SYSTEM"

    FLOPCAT is a menu-driven disk-cataloging system with 23 functions to
    organize and manage your ever-increasing inventory of floppy disks.
    
    The disk labeling feature alone makes it well worth owning. Print
    labels with volume name, volume comment line, disk number, free bytes,
    file names and extensions. Build and update your catalog of disks.
    Look through the index or at the directory of a specific disk. Change
    the volume name, add a comment about the volume or make specific
    comments about individual files as you review the contents of each
    disk. Search through all floppy directories for volume names or wild
    card search strings. Volumes or files found are displayed on the
    screen or printer. A numerical or alphabetical listing of volumes is
    supported.
    
    Print a disk label in 3.5" or 5.25" formats. This function takes the
    directory information and neatly prints it on self-adhesive labels.
    This makes your selection of disks uniformly labeled, numbered, named,
    and dated, with the free bytes listed as well.
    
    New features include pop-up command windows, choice of file date
    record or comments, disk label path mask (allows labels to be printed
    only for selected drives), and expanded search functions.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE0959.TXT

{% raw %}
```
Disk No:  959                                                           
Disk Title: FlopCat - Disk Cataloging System                            
PC-SIG Version: S2.3                                                    
                                                                        
Program Title: FlopCat                                                  
Author Version: 3.10                                                    
Author Registration: $15.00                                             
Special Requirements: 512K RAM and two floppy drives.                   
                                                                        
FLOPCAT is a menu-driven disk-cataloging system with 23 functions to    
organize and manage your ever-increasing inventory of floppy disks.     
                                                                        
The disk labeling feature alone makes it well worth owning.  Print      
labels with volume name, volume comment line, disk number, free bytes,  
file names and extensions.  Build and update your catalog of disks.     
Look through the index or at the directory of a specific disk.  Change  
the volume name, add a comment about the volume or make specific        
comments about individual files as you review the contents of each disk.
Search through all floppy directories for volume names or wild card     
search strings.  Volumes or files found are displayed on the screen or  
printer.  A numerical or alphabetical listing of volumes is supported.  
                                                                        
Print a disk label in 3.5" or 5.25" formats.  This function takes the   
directory information and neatly prints it on self-adhesive labels.     
This makes your selection of disks uniformly labeled, numbered, named,  
and dated, with the free bytes listed as well.  Labels used are 4" x    
1-7/16" or 2-3/4" x 1-15/16" single-width labels.                       
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## FLOPDOC3.TXT

{% raw %}
```












                                    FLOPCAT
                                  USERS GUIDE





                                   Version 3.1
                             COPYRIGHT 1986, 1988, 1990
                                   WR Software
                               All rights reserved









                                 WR Software
                                 P.O. Box 1235
                                 Atwater, CA  95301






























-


                             INTRODUCTION

         FLOPCAT 3.1 is a multi-featured disk catalog system for MS/PC
     DOS computers.  FLOPCAT requires a minimum of 512K of RAM and two
     floppy disk drives or one floppy and one hard disk drive to operate.
     Full program features require use of a printer.  The program is menu
     driven and is self-prompting during program execution.

         The FLOPCAT 3.1 system provides over 30 different functions to
     organize and manage your ever increasing number of floppy and hard
     disk files.  The disk label feature alone makes it well worth having.
     Several disk label sizes are supported.  The printed label with name,
     date, disk number, free bytes, comments, file names and extensions
     makes disk organization neat and attractive.  A detailed description
     of each of these functions is found in the section entitled Master
     MENU.

         This documentation is included on each program diskette.  To
     obtain a printout of this documentation insert the FLOPCAT 3.1 MASTER
     DISK in the active drive, ready your printer with paper and enter
     DOC. This file will print out for use as reference.

                         GETTING STARTED

     DO NOT ATTEMPT TO USE YOUR FLOPCAT PROGRAM BEFORE READING THIS
     SECTION.  USERS OF FLOPCAT 2.0 THROUGH 3.0 MAY UPGRADE THEIR PRESENT
     DATA FILES AND AVOID RE-INSTALLING FLOPPY DISKS.  SEE CLONEDAT.EXE
     UTILITY INSTRUCTIONS.  Note: CLONEDAT.EXE is only provided to
     registered users, since use of this utility indicates continued long
     term use and therefore user registration is warranted.

     INITIALIZATION FOR COMPUTERS WITHOUT HARD DISK DRIVES:

         Before attempting to run the install program, you must have
     formatted at least two system disks with the DOS FORMAT /S command.

         FLOPCAT 3.1 now provides two options for floppy disk data
     storage.  With the first option all files are installed on the
     program disk.  High density floppy disk users with prefer this method
     as disk swapping during program operation is not required.  As
     FLOPCAT features have been added it has been necessary to reduce the
     amount of record storage to accommodate the increase in the FLOPCAT
     program size and still have it all fit on one 360K floppy disk.  As
     with FLOPCAT, DOS has increased in size through the years.  Because
     of the storage limitations of 360K disks, it is recommended that the
     separate data disk method be used for FLOPCAT data storage with the
     low density 360K disks.

         If you require more records to handle your disk records than will
     fit on a single program and data disk, use the second option of a
     separate data disk in addition to the program disk.  This allows data
     files nearly as large as the diskette capacity.  This option is
     recommended for low capacity floppy disk drives.  Remember, whatever
     disk the data is stored on must be a system disk formatted as
     described below.











     IMPORTANT DEFINITIONS:
     ARCHIVE MASTER DISK:  the original disk you received containing
     FLOPCAT program files.  Never, repeat, never erase any files on this
     disk.  It contains some files that are not needed after installation
     for runtime operation that should be retained for archive purposes.

     ARCHIVE WORK DISK:  a working disk you will make for installation
     purposes.  Follow directions below in it's preparation.  Need not be
     retained after successful installation.

     PROGRAM WORK DISK:  the work disk from which the FLOPCAT program will
     start.  May be fixed disk or floppy disk.  FLOPCAT DATA FILES may or
     may not be on this disk, depending on your installation option.

     FLOPCAT DATA DISK (separate data disk): contains FLOPCAT DATA FILES.
     Must always remain installed in active drive.  May be on fixed or
     floppy disk.  In fixed disk, will co-reside with all other FLOPCAT
     PROGRAM FILES.


     FLOPPY DISK ONLY INSTALLATION

         Insert the ARCHIVE MASTER DISK in your boot up drive, normally
     drive A, and copy appropriate ARCHIVE MASTER files to the Program
     Work disk with the FLOPCOPY.BAT utility.  The FLOPCOPY utility
     requires you to specify the destination drive and path when started.

            Example:   FLOPCOPY B:

     Copies program files onto disk in drive B.  If separate data disk is
     desired insert that disk when prompted by the FLOPCOPY utility.  If
     you have high density large capacity drive and wish program and data
     files on same drive, just leave the program disk in the designated
     drive and data files will be created on it.  After data files have
     been created, you must make sure the COMMAND.COM file is on both
     program and data disk, and copy the following files from your DOS
     disk onto the data disk: MORE.COM and TREE.COM

         EXAMPLE:  COPY A:MORE.COM B:
                   COPY A:TREE.COM B:

         This example copies MORE.COM and TREE.COM from the DOS disk in
     drive A to drive B.  Once this is complete insert the FLOPCAT program
     disk you have created in your boot up drive and run the install
     program.  Now see INSTALL.EXE program description.

     HARD (FIXED) DISK INSTALLATION:

         This is the easiest installation.  Insert the ARCHIVE MASTER disk
     in DRIVE A and TYPE: A:INSTALL Then just follow directions of the
     INSTALL.EXE program.  See INSTALL.EXE program description that
     follows.

     INSTALL.EXE PROGRAM DESCRIPTION:

         This is a new utility written to aid in installation of FLOPCAT
     version 3.1.  The INSTALL utility will ask a series of questions and
     configure FLOPCAT for your particular hardware installation.  If you
     should at some later date change your mind about the FLOPCAT default
     configuration or if your equipment changes,  you can make the same
     changes from within FLOPCAT by the CHANGE HARDWARE CONFIGURATION
     option on the FLOPCAT MASTER MENU.





         Insert the FLOPCAT program disk for floppy disk installations or
     ARCHIVE MASTER for hard disk in DRIVE A: and type: A:INSTALL

         The opening page is to remind you that INSTALL will overwrite
     already existing FLOPCAT data files.  INSTALL is intended to be run
     prior to first use of FLOPCAT.  Pressing (Y)es indicates you
     understand this an desire to continue with the installation process.

         Next you will be asked to select the type of monitor you are
     using.  If your monitor is color or provides gray shade emulation of
     color use this selection.

         The next selection is to define your operating environment.
     Select 1 for floppy disk only systems.  Select 2 to install the
     program on fixed disk.

         Next you will select the drive for the data file.  The FLOPCAT
     data files must be in this drive at all times during program
     operation.  Additionally, this should normally be the drive you
     boot the computer from.  FLOPCAT periodically accesses DOS
     functions so COMMAND.COM needs to be present on the FLOPCAT data
     and / or program disks.  Hard (fixed) disk users should select the
     particular fixed disk they wish to install FLOPCAT on.  Following
     your selection you will be asked to verify the drive you have
     selected.

         Next hard disk users will be asked to indicate drive and path in
     which your DOS files will be located.
                 Example:    C:\DOS

         Next you will be asked to select the number of records you will
     be needing.  The menu shows the resultant storage media requirements.
     The last option (6) was in response to user requests to be able to
     define their own requirements.  Be advised that nothing is free.  If
     you get carried away with how many records you wish, you will be
     eating up disk space.  Floppy disk installations should also be
     careful that you do not use all space on your FLOPCAT data disk.
     FLOPCAT creates and uses some temporary files during operation and 2K
     or so overhead should be available for these.  Each record is 32
     bytes long. Therefore, 10,000 records will require 320,000K of disk
     storage space.  Number of records in excess of 10,000 normally should
     be considered only on hard disk systems because of access time
     limitations of floppy disk systems, assuming floppy disk density
     allow this large a file in the first place.  Each directory, disk
     file, disk title, comment, and other disk information will require
     at least one record.


     Printer selection follows.  Normally the default settings you will
     see will work for most dot matrix printers.  These are the EPSON
     defacto standard that seems to be pretty universal.  Until you
     determine that these settings do not work, do not change them.
     Option 8 selects whatever settings are present and saves them for
     FLOPCAT use.  For those that must modify the default settings options
     5, 6 and 7 allow you to test your changes without having to leave the
     INSTALL program.  The CHR$ number values are decimal values and can
     be found in your printer manual.  I do not have the resources to test
     and develop printer drivers for specific printers.  This utility was
     developed to allow users to provide for present and future printers.







         The last thing that the install utility accomplishes is to
     initialize the random access data file that you specified previously.
     This process may take several minutes.  The length of time required
     depends on the number of records that you selected, and if you have a
     fixed or floppy disk environment.  Some users have become impatient
     and rebooted in the middle of the process.

     RUNNING FLOPCAT

         FLOPCAT runs similar to many other data base programs.  Floppy
     disk installations will insert the FLOPCAT program disk in the boot
     drive and type FLOPCAT.  Hard disk users must change to the FLOPCAT
     directory by typing CD\FLOPCAT then type FLOPCAT and press the enter
     key.  You will be greeted with title page, various data files will
     load and you will be greeted  with the FLOPCAT MASTER MENU.  Separate
     data disk floppy installations will be prompted when to insert the
     data disk and then data files will be loaded and MASTER MENU appear.

     MASTER MENU

         This is the master menu of program options.  You will always
     start and return to this menu during different program functions.
     Twelve different function groupings are called from the master menu
     via the function keys F1 through ALT F10.  These functions are listed
     individually below.


     F1 - DISPLAY DISK DIRECTORY

         This function key will display the directory of a floppy disk
     located in the selected read drive.  Selected read drive and path
     are displayed.  They may be changed by pressing D to change drive
     or P to change path.  R reads what is selected and M returns you to
     the MAIN MENU.  It is effectively the same as a DOS DIR command.  No
     data is changed or stored, it is simply displayed on your CRT
     display for your information.


     ALT F1 -  DISPLAY DIRECTORY TREE

         Pressing the ALT key and F1 together will display a directory
     tree of the selected read drive.  The display will vary depending on
     which version of DOS you are using.  Those running DOS 4.0 or higher
     may select specific path directories by changing the path.  The drive
     may be changed on any version of DOS.  This function operates as
     the DOS command TREE.COM.  This allows you to preview a disk prior to
     entering into the FLOPCAT CATALOG and break it up into logical
     portions when building your data base.

     F2 - ADD / CHANGE DISK IN INDEX

         This function allows you to build and update your catalog of
     disks. Initial addition of a disk or updating to include added files
     are performed automatically in the same manner.  Follow the prompts
     after pressing F2 to activate this function.

         Read drive and path are selected as in the previous two functions
     by pressing C.  D selects dummy disk.  (See copy protected disk
     instructions below.)  M returns to the MAIN MENU.








         Hard or high density floppy disk users utilizing subdirectories
     may now enter all hard disk directory and disk information into the
     FLOPCAT data base.  There are programming and hardware memory
     constraints that limit the data that may be placed in each catalog
     number.  In other words don't expect to enter the entire hard disk
     under one catalog number.  High capacity floppy drives should be
     treated as a hard drive and entered by subdirectories.

     ATTEMPTING TO ENTER A HARD DISK UNDER A SINGLE CATALOG ENTRY MAY
     EXCEED YOUR SYSTEM MEMORY CAPABILITY AND RESULT IN ERROR INDICATIONS.

         An entire hard disk under one catalog number would defeat the
     purpose of this program and would make it more difficult to find a
     file anyway if you are looking for it. You should break down your
     disk into logical organization such as by subdirectories.  An
     asterisk placed following a specified directory will make that
     directory wild card and all subdirectories with it will be included.
     The catalog title field will show the selected directory and included
     in the directory information will be all included subdirectories.
     Files will be listed following their respective subdirectory entry.
     The comment field now includes file creation dates.  These may be
     left for search functions or overwritten with comments on any nature
     as previously.

         Insert the disk to be added or updated in the designated read
     drive.  Then press any key other than C, D, or M at the prompt when
     the disk is installed.  FLOPCAT 3.1 advises you of how much more room
     is in the data file, and the indicates the next disk number in
     sequence as well as any available empty catalog slots with a lower
     number.  It then asks for a disk number. If you wish the next number
     in sequence simply press enter.  Input any other number between 1 and
     999 you wish the disk labeled.  Selection of a disk number already in
     use will overwrite and replace earlier information with that of the
     disk you are reading in the drive.  This is how you update a disk
     later with added files. Periodically insert your disks that may have
     changed to update the directory and to get current disk labels.

      WARNING: SOME COPY PROTECTED DISKS MAY REQUIRE SPECIAL HANDLING
         Copy protected disks with invisible directories or other
     non-standard directory structure may cause disk read problems.  Any
     disk that results in problems from a DOS DIR command or F1 function
     attempt to read will result in an error message.  Since such copy
     protection schemes are so varied and change so frequently, it is of
     little use to attempt to work around any copy protection scheme.  If
     such a disk is encountered, it still may be entered into the
     directory by use of the dummy disk option. This gets the disk into
     the directory and makes a label available if you want it.  Previous
     versions required the use of a blank formatted dummy disk to enter
     certain copy protected disks into the FLOPCAT data base.  FLOPCAT 3.1
     and later allows you to simply select the dummy disk during the
     addition of catalog entries.  The blank formatted disk is no longer
     necessary.

         Next FLOPCAT 3.1 will read the volume name from the disk.  If the
     disk volume has no label, NO LABEL will be indicated.  If you wish
     the same volume label just press enter.  If you desire a different
     one, type it in when asked.  The field will hold 18 characters. If
     the disk is one of several use this field to indicate that also.  The
     hatched area shows the available field.  If you make a mistake here







     or anywhere else when typing into a hatched field use the left arrow
     on the numeric key pad to avoid eating your hatched field. It makes
     no difference to the program in either case; you won't be allowed to
     exceed the given field length.

          You may now provide a 64 character comment appropriate for each
     disk.  If you wish to comment the disk later, just press enter and the
     volume comment may be added during the REVIEW DISK FILE / COMMENT
     function at any time later.

          When FLOPCAT 3.1 has successfully read the disk and stored its
     data you get the "Press any key when ready to read disk" prompt
     indicating FLOPCAT 3.1 is ready for another disk.  If you wish to
     exit the disk loading function, just press M to return to the main
     menu at this time.

         If FLOPCAT 3.1 chokes on a disk, and cannot read directory
     information, an error message will be displayed asking you to correct
     the problem and continue.  If you cannot correct the problem, and do
     not wish to use the dummy disk method described above, now you may
     abort the entry loop by pressing A to abort this will return you to
     the main menu.

         Depending on the number of files per disk, FLOPCAT 3.1 will
     manage up to 1000 catalog entries (the actual number is limited by
     data space on the FLOPCAT floppy disk and the number of files per
     disk).  The number of records available to you was preselected during
     program installation. If you attempt to exceed the amount of record
     space available for data the program will issue the appropriate
     prompt.


     F3  REVIEW OR COMMENT DISK INDEX FILE

         This function allows you to look through the index or look at the
     directory of a specific disk.  Another feature allows you to change the
     volume name of a disk in the directory, add or change volume comments,
     or to make specific comments about individual files as you review the
     contents of each disk.   You will be asked to "Input beginning
     catalog number.

         The listing displays all records under the given catalog number.
     After all the files on a disk have scrolled through, a command menu
     will appear at the bottom of the screen.  Pressing the "M" key takes
     you back to the Master Menu. Hitting the "+" key (the one to the
     right of the numeric keypad is most convenient) brings up the next
     disk.  Pressing the "-" key displays the previous catalog entry.
     Pressing the "C" key activates the comment mode.


     COMMENT MODE

         A "C" pressed when displayed in the command level prompt allows you
     to change the volume name (only in FLOPCAT) of the disk, add or change
     volume comments, and add comments to each individual file listed.  In
     the comment mode the bottom command line prompt shows the keys to press.
     Pressing the "INS" key allows you to change the disk volume title,
     insert or change a volume comment or insert a comment about a file on
     the line in which the curser is located. The field available is also






     displayed. After the text is typed into the field, press the "ENTER"
     key to capture the text.  The numeric keypad down arrow will scroll
     you down through the files.  The left arrow on the numeric keypad will
     backspace if you make a mistake and need to over type an error.  "END"
     key on the numeric keypad can be pressed at any time displayed to
     terminate the comment process.  The command line prompt will then
     change to allow "M" to be pressed for Master Menu or the "+" key
     located to the right of the numeric key pad will bring up the next
     disk information.

     F4  SEARCH FUNCTIONS

     Underlying this Master Menu option is a sub-menu allowing nine
     different searching operations:


     (F1 Sub-Menu) SEARCH VOLUME OR COMMENT FOR KEYWORD - TO SCREEN

         This function will search the volume names and volume comments for
     a keyword.  This function is always wild card.  For example entering a
     keyword of "DB" will list all volume names or volume comments that
     have the characters "DB" in them.

     (F2 Sub-menu) SEARCH FOR FILE NAME - TO SCREEN

         Will search through all floppy directories in FLOPCAT looking for
     all occurrences of a file name you have input. This may be wildcarded by
     suffixing an asterisk (*) after the text string.  (Example: typing FI*
     will list all files that contain FI)  If the keyword to locate is not
     wildcarded with the asterisk character, the file name must contain only
     the keyword and no other characters.  Character case is ignored.  Found
     files will be displayed on the screen.  Following the search, pressing
     "M" will return you to the Master Menu or "+" will return the Search
     Sub-menu.

     (F3 Sub-menu) SEARCH FOR FILE NAME - TO PRINTER

         Similarly searches for a file name but sends the results to the
     printer.  The wildcard function works as above in F2 Sub-menu.  The
     "Printer ready?" prompt allows you to check paper alignment at the
     very top of the form and turn on the printer.

     (F4 Sub-menu) SEARCH FOR FILE EXTENSION / DIR - TO SCREEN

         Searches through all FLOPCAT records searching for all occurrences
     of a particular file extension, printing the found files to the
     screen.  If DIR is entered, FLOPCAT will display all directories and
     subdirectories in the data base.

     (F5 Sub-menu) SEARCH FOR FILE EXTENSION / DIR - TO PRINTER

         Similarly searches for file extension or directories but sends
     the results to the printer.

     (F6 Sub-menu) SEARCH FILE COMMENT FOR KEYWORD - TO SCREEN

         Allows you to search file comment for keyword.  This function is
     always wildcarded.  All file comments will be searched and found files
     displayed on the screen.  You can for example search for all files
     created in 1989 by entering "-89" as your search string.






     (F7 Sub-menu) SEARCH FOR DRIVE / PATH [#]- TO SCREEN

         This function is always wild card.  Enter the drive or path that
     you wish to look for.  For example if your B: Drive is a 730K drive,
     you may specify searching for all files entered from your B: drive.
     Additionally you may pull up anything under a specific subdirectory
     path no matter which catalog number it may be filed under.

     (F8 Sub-menu) RETURN TO MAIN MENU

         Allows exit from this submenu to the main menu.

     F5 DELETE DISK FROM INDEX

         This function allows you to delete a specified disk and its'
     associated information from the directory without replacing it with
     another disk.  All associated disk fields will display blank.  If you
     want to replace it with another disk it is easier to just put in the
     disk you wish in its' place, press F2, and input the desired disk
     number.  The new disk will assume this disk number location. If you
     inadvertently enter this menu or change your mind about deleting a
     disk, enter zero (0) for a disk number and you will exit to the main
     menu without any changes to data.

     F5 PRINT DISK LABEL

         This function takes the directory information and neatly prints it
     on self adhesive labels (or plain paper if you want to cut and paste).
     This makes your selection of disks uniformly labeled, numbered, named,
     volume comment added, dated, free bytes printed and files listed.

        In response to user requests five disk label sizes are now
     supported.  These sizes are readily available at most computer or
     office supply stores.  Avery 4240 and 4241 are in relatively small
     quantities so you do not have to buy thousands.  Also, these labels
     have special adhesives that are supposed to stick to floppy disks
     without coming off and gumming up your disk drive.

         The default printer drivers should work for most dot matrix
     printers.  It is an EPSON defacto standard (even Epson printers vary
     some printer to printer) and should work for most printers.  For
     those of you with laser printers and other exotic equipment, I
     apologize and hope you can emulate the EPSON default or make your
     own driver with the INSTALL or RECONFIG utilities.  I unfortunately
     do not have the resources to obtain such things and develop printer
     drivers.

         The default label size is displayed and may be changed by
     selecting the number of the desired label format.

     These are your options:
         1.  5.25 inch disk (4.75 X 1.25 Avery 4240)
         2.  5.25 inch disk (4 X 1 7/16)
         3.  3.5 inch disk  (2.75 X 1 15/16)
         4.  3.5 inch disk  (2.75 X 2.75 Avery 4241)
         5.  Mini (standard file) labels  (3.5 X 15/16)

        Disks with a larger number of files than will fit on one label
     automatically use more than one label on 5.25 inch disk format. These
     can then be placed one over another to show all disk files.  The 3.5
     inch format does not have room on a diskette for more that one label.





     If the number of files exceeds what one label will hold, all remaining
     files will be truncated and a plus (+) will appear to the right of the
     last file listed indicating all files are not on the label.

         Mini labels may be used on any size disk.  Because of size/space
     limits file and directory names are not included.

         With versions 3.1 and later a drive / path mask function is
     included so you may exclude hard disk drives, or unwanted floppy
     drives from a label run.  In this way you do not end up with floppy
     disk labels for hard disk directories or labels for a disk of a
     different size than the labels you are running.  You may exclude up
     to 4 different drives or paths from the label run.  For example, to
     exclude a hard disk drive D, press 1 to select exclude path one, and
     type "D:\".   When ready to continue printing labels press C.

         Next select the first and the last disk you wish a printed label
     for.  To align the printer, initially print one label until you have
     the labels aligned then start your label run. I will normally
     complete a directory update and then print out all the labels for the
     same sized disks in one operation. You can, however, print any or all
     labels at any time.  When printing is complete, the label selection
     menu will appear.  Press M to return to Main Menu.

     F7 PRINT FILES IN CATALOG INDEX

         This function prints a listing of all files by specified catalog
     number.  The print head should be even with the top of the page and
     FLOPCAT will align top and bottom print margins accordingly. Follow
     the prompts.

         Input first and last disk to print out. After the standard
     'Printer Ready?' prompt, pressing <ENTER> will start the printout.
     This printout aids disk organization and serves as a power off
     reference to look for a particular file or files.


     F8 LIST BY VOLUME NAME

         This main menu function consists of a submenu list of four
     functions for listing volume names of disks.

     (F1 Sub-Menu)  LIST VOLUMES TO SCREEN IN NUMERICAL ORDER

         Selecting this function produces a screen listing of volume names
     in numerical order.  This allows a rapid scan for a particular disk
     without listing files information.

     (F2 Sub-Menu)  LIST VOLUMES TO PRINTER IN NUMERICAL ORDER

         Several users of previous versions have requested this feature
     which lists disks by number and volume name to the printer.

     (F3 Sub-Menu)  LIST VOLUMES TO SCREEN IN ALPHABETICAL ORDER

         This function lists volumes to the screen after sorting them into
     alphabetical order by volume name.  The sort may take up to several
     minutes for a large number of disks.









     (F4 Sub-Menu)  LIST VOLUMES TO PRINTER IN ALPHABETICAL ORDER

         This function sorts by volume title as above but lists the results
     to your printer.

     (F5 Sub-Menu)  RETURN TO MAIN MENU

         This allows return back to the main menu.


     F9 CHANGE HARDWARE CONFIGURATION

         This allows the you to change hardware options / configuration
     anytime after program installation.  A FLOPCAT in exited and an
     separate utility named RECONFIG.EXE is executed.  Program defaults
     that you entered during installation can be changed if necessary at
     any later date. The RECONFIG.EXE program operation is similar to
     installation except that record data is not changed. If you want to
     change the configuration press (Y)es at the FLOPCAT prompt and make
     the appropriate selections as during installation. At any point in
     this sequence, pressing M for menu will return you to the master
     menu.   Floppy disk installations will have to re-insert the FLOPCAT
     program disk in the specified drive when prompted to re-enter
     FLOPCAT.


     F10 NORMAL PROGRAM EXIT

         The program should normally be terminated with F10 on the master
     Menu. This will ensure all files are closed, program usage information
     updated, and put you back at system command level. Failure to use this
     function may result in lost data.  If several disks have been deleted
     or changed during program operation, the next function, ALT F10
     should be used to compress the data file and restore the maximum
     number of available records.


     ALT F10 COMPRESS AND EXIT

         This mode compresses the data file after disks have been deleted
     or disks have been re-entered.  It only makes room for more
     records if room is available.  It has no effect on the overall
     size of your FLOPCAT data base.  You do not even have to use it after
     each disk delete or change session, it may be accomplished any time
     later that you use the program.

     THIS FUNCTION SHOULD NOT BE USED indiscriminately BUT ONLY WHEN
     NEEDED COMPRESS THE DATA FILE.  IT may take several minutes for large
     numbers of records and a disk read or write error or power fluxuation
     during this operation would render your data file unusable.  If you
     have not deleted or re-entered a large number of disks there is no
     reason to use this function unless you are running out of available
     record space.  The primary purpose of this function is to retrieve
     usable data space.  If you have a large number of disks and do not
     want to risk having to put them all back in, make a backup copy of
     all data files (they all have the extension of DAT) prior to using
     COMPRESS AND EXIT function.  Then if the power fails during this
     operation, you can reload the data files onto your floppy or fixed
     disk data environment to recover.






     CLONEDAT.EXE

         WARNING PROCEED SLOWLY AND CAREFULLY WITH THIS UTILITY SINCE THE
     POTENTIAL EXISTS TO DESTROY PREVIOUSLY EXISTING FLOPCAT DATA.
     This utility is only provided to registered users.  Use of
     the CLONEDAT utility indicates long term use of FLOPCAT and is not
     necessary for evaluation of the program.  CLONEDAT serves two
     purposes.  The first allows present FLOPCAT users of versions 2.0
     through 3.0 to upgrade their data file and avoid re-entering all the
     disks.  The data file in version 3.1 was modified to incorporate
     directory path data.  Using CLONEDAT will modify version 2.X or 3.0
     data structure to be compatible with version 3.1; however, path data
     for previous data will be missing.

         The second use of CLONEDAT is to allow users to transfer disk
     catalog data into a larger (or smaller) file if they wish to change
     the size of that data file after initialization and a large number of
     records are loaded into the catalog.

         The destination file must already exist or have been initialized
     with the INSTALL.EXE utility.  In other words, the file RFILE.DAT
     must exist on your destination disk and directory.

         First copy the data files you presently have to a blank formatted
     system disk that is installed in DRIVE A (you may designate any
     other).  (EXAMPLE: COPY B:*.* A: would copy the files from DRIVE B to
     DRIVE A)  Once the data files are copied they will serve as your
     source and backup in case something goes wrong.

         CLONEDAT should be run from drive A for floppy disk users, or run
     from the destination drive and directory for hard disk users.  Enter
     CLONEDAT to start.  Next place the disk with these backup files in
     DRIVE A and then designate drive A as the source of old data.  (Fixed
     disk users may designate the drive and directory of old Flopcat data
     if a new directory destination has been created with the Install
     utility.)

         Determine how many records are in the file you are transferring
     data to.  If you do not recall the records that you specified, do a
     DOS command DIR on the drive in which this RFILE.DAT file resides.
     The number of records is the file size in bytes divided by 32.  You
     will need to know the number of records before running CLONEDAT.

         Once this has been done answer the question about how many
     records are in the RFILE.DAT file you are transferring to.  Then
     select the destination drive by pressing the appropriate key.
     CLONEDAT will now read information from the backup disk and transfer
     it in the FLOPCAT 3.1 format to your designated destination drive.

          Once CLONEDAT is complete (it may take several minutes for a
     large number of records, and longer for floppy disk based systems)
     you can now run FLOPCAT 3.1 with the updated information.  If
     anything goes wrong during the transfer (power failure or whatever)
     you can reattempt or reinstall the backup data files onto your
     FLOPCAT operating environment or try the CLONEDAT utility again.

     EVALUATION COPY DISTRIBUTION RESTRICTIONS

         FLOPCAT is distributed under the user distributed software
     concept.  You can copy, give to friends, furnish to bulletin boards,
     and software clubs as restricted below.  Some users believe that





     because they paid for the disk from a Shareware distributor they are
     a registered user.  Unless received direct from the author, you have
     been furnished this copy for short term evaluation of the program.
     If you or your friends wish to continue to use the program, become a
     FLOPCAT registered user. WR Software is small company and its
     survival depends on your honesty.  Whether or not you become a
     registered user, pass it on to interested friends.

     REGISTERED USER PRIVILEGES

     1.  Upon registration you will receive the latest revision of
     your version of the program and the CLONEDAT utility.
     2.  You will be advised of new versions as soon as they are available
     and allowed registration and updates at a reduced rate.
     3.  You will receive priority help if you have problems or questions.
     I am obligated to helping those who have registered first.  Others are
     helped on a time available basis.
     4.  Suggestions resulting in major program improvements will get you
     the new version of the program FREE!!!.  This version contains several
     recommendations for new functions from users.  In case of duplicate
     suggestions, the first received will get a free update.


     RESTRICTED PERMISSION TO COPY FLOPCAT (EVALUATION DISK)

         This program is not a public domain program.  It has been
     Copyrighted by the author.  FLOPCAT was compiled with the Microsoft
     QuickBASIC compiler, therefore portions of the runtime code are also
     Copyrighted by the Microsoft Corporation.  Permission to copy is only
     as described below unless you have written permission from the
     author. You may copy only to furnish it for evaluation purposes only.
     No fee may be charged for copies furnished to others except Shareware
     distributors may charge up to $6.00 to cover cost of diskette,
     shipping, and handling.

     SHAREWARE DISTRIBUTORS

          You must supply written statement of intent to distribute. This
     allows me to furnish updates you and ensures you have that latest
     version available for your customers.  Distribution without said
     letter of intent is copying without my permission and is an
     infringement of the Copyright Law.

     BULLETIN BOARDS CLUBS AND OTHER ELECTRONIC MEDIA

     WARNING:  I have not released this program to any electronic media or
     bulletin board.  Therefore, I am in no way responsible for it or any
     other version you have available.  Users can only have assurance that
     they have an unadulterated copy if it comes directy from WR Software.
     Systems operators etc should take all precautions to prevent virus or
     worm type contamination of their systems.  Upon request I will supply
     the latest version as I would to any other distributor.  This program
     is not distributed in a compressed format.  Such compression
     indicates second party involvement.  Bulletin boards and other
     electronic media may make this program available provided they
     furnish all files, this documentation in total, and do not charge
     fees specifically for the program other than normal on-line service
     fees.  Groups, clubs or individuals may not modify the program in any
     way.  The author is in no way accountable for quality, content or
     operation of copies furnished by others.






     FLOPCAT 2.10 ENHANCEMENTS OVER VERSION 2.00
     Allows selection of read disk drive during runtime operation.
     Improves read disk operation for disks without readable files in
     directory.
     Improves disk label format:  file sequence changed; free bytes
     moved to top of label.
     Data storage further optimized to allow more disk storage.

     FLOPCAT 2.2 ENHANCEMENTS OVER VERSION 2.1
     Format problem on disk labels with up to max allowable files
     corrected.
     Means of escaping disk delete routine.
     Problems encountered with over 100 disks corrected.

     FLOPCAT 3.0 ENHANCEMENTS
     Each volume may have a comment.
     Wild card search of volume names or comments
     Wild card search of files.
     Wild card search of comments.
     Automatic read of existing volume names.
     List of volume names to screen and printer by disk number.
     Alphabetical list of volume names to screen or printer.
     Support for 3.5 inch floppy drive labels.
     Increased number of files on each disk label.
     Data file compression
     Ability to upgrade or clone from another data file
     Ability to select the size of data file during initialization

     FLOPCAT 3.1 ENHANCEMENTS
     INSTALL utility now provided to simplify installation
     Hardware configuration revision changed to background operation
     Display directory tree function added
     Dummy disk selection on ADD / CHANGE CATALOG ENTRY
     Hard disk files may be included in catalog
     Subdirectories on hard or floppy disks now supported
     File creation dates included
     Search functions for directories only
     Search function all files under specified paths or subdirectories
     Three new label sizes added
     User may install other printer drivers
     Disk label path mask function added
     Menu formats improved

     RUNTIME ERROR CODES

         Every attempt has been made to simplify program installation, but
     it is a fairly complex process.  Ensure you have carefully followed
     installation directions before reporting problems.

         You should not encounter runtime error codes, however should you
     receive one please make record of when, where, what computer, DOS
     version and error code as it occurs to enable trouble shooting.
     Error codes are the same as MS/PC BASIC if you wish to attempt to
     determine the cause yourself.  What portion of the program and what
     you were attempting at the time are critical in determination of
     error conditions.  Extensive error trapping has been written in but
     users are sometimes very creative in the ways in which they try to
     run the program.








                        FLOPCAT REGISTRATION / ORDER FORM

     WR Software
     P.O. Box 1235
     Atwater, CA 95301                    90.XX.3.1 Date: ____________

     Name   ______________________________________________________________
     Street ______________________________________________________________
     City   __________________________State _________ Zip Code____________
     Country ______________________

     Where did you get / hear about FLOPCAT? ______________________________

     Street_____________________City_______________State________ZIP_______
     List your computer_____________ Installed on Hard disk [ ]yes [ ]no
     Installed on floppy drive  [ ]360K  [ ]730K  [ ]1.2M  [ ]1.4M
     Default printer driver works on disk labels [ ]yes  [ ]no
     Make and model number of printer____________________
     Running FLOPCAT on [ ]CGA   [ ]EGA   [ ]VGA   [ ]color  [ ]monochrome

     [ ] Registration is free if program received direct from the author.

     [ ] Registered users of earlier versions of FLOPCAT may upgrade their
     registration with $10.00 donation to cover supplies, handling, and
     shipment of latest version.

     Latest FLOPCAT Version available author direct for $15.00 donation
     for those not previously registered.
     (Users outside USA add $3.00 for additional shipping costs)

     [ ] Program obtained from some other source.  Register me as user and
     send latest update of the program. $15.00 donation enclosed. (Users
     outside USA add $3.00 for additional shipping costs)

     [ ] Send information on REMEMBER-IT.  Never forget important dates,
     payments due, birthdays, billings, tax payments etc.  REMEMBER-IT
     reminds you of only those of importance today or in your predetermined
     warning period every time you power up your computer. Supports one
     time, annual, or same day every month reminders. REMEMBER-IT available
     author direct for $10.00 registration.  This program should save you
     at least $10.00 worth of embarrassment or late fees in a single year.


     SORRY NO CREDIT CARDS
     INTERNATIONAL CHECKS OR MONEY ORDERS MUST BE IN US FUNDS
     MAKE CHECK OR MONEY ORDER PAYABLE TO WR Software

     Please list additional features or improvements you would like to see
     or any problems encountered with documentation.
```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                    <<<<  Disk #959 FLOPCAT  >>>>                        ║
╠═════════════════════════════════════════════════════════════════════════╣
║                                                                         ║
║ To copy the documentation to your printer, type:  DOC (press enter)     ║
║                                                                         ║
╚═════════════════════════════════════════════════════════════════════════╝
(c) Copyright 1990, PC-SIG Inc.
```
{% endraw %}

## NEWUSER.TXT

{% raw %}
```
             FLOPCAT NEW USERS INFORMATION

    FLOPCAT is a multi-featured floppy disk catalog system for
MS/PC DOS computers.  FLOPCAT requires a mimimum of 512K of RAM
and two floppy disk drives or one floppy and one hard disk drive
to operate. Full program features require a printer.

    DO NOT ATTEMPT PROGRAM OPERATION WITHOUT READING THE `GETTING
STARTED' SECTION IN THE DOCUMENTATION.  The FLOPCAT working disk
requires proper initialization.  Hard disk users refer to the
appropriate section.

    Documentation is included in each program diskette.  To
obtain a copy of the documentation, insert the FLOPCAT master
disk in drive A, ready your printer, and enter DOC. Documentation
will automatically be printed.  Or if you prefer to use your word
processor, documentation text is in the file FLOPDOC3.TXT
```
{% endraw %}

## PCSIG.TXT

{% raw %}
```
    Disk No  xxx Program Title: FLOPCAT Version 3.1
    FLOPCAT is a multi-featured disk-cataloging database system for
    MS/PC-DOS computers. It is menu-driven and self-prompting. FLOPCAT has
    30 functions to organize and manage your hard and floppy disks files.
    Floppy or hard disk sub-directories are included into the database.
    You always start at and return to the master menu during different
    program functions. Twelve functions are called from the master menu via
    the function keys F1 - ALT F10 (they are listed below). There are two
    sub-menus with an additional 10 functions. The system allows you to
    build and update your catalog of disks or subdirectories.  Initial
    addition of a disk or updating to include added files are done the same
    way. You can look through the index or at the directory of a specific
    disk. Another feature lets you change the volume name, add a comment
    about the volume or make specific comments about individual files as
    you review the contents of each disk. You can also search through all
    directories for volume names or wild card search string or for all
    occurrences of a volume or file.  Volumes or files found are displayed
    on the screen or printer.  Search by drive or path is supported.  A
    numerical or alphabetical listing of volumes is supported. Another
    function lets you delete a specified disk and its associated
    information from the directory with or without replacing it with
    another disk.  You can also print a disk label in 3.5 or 5.25 inch
    formats.  The disk label feature has five different label sizes.  The
    printed label with volume name, volume comment line, disk number, free
    bytes, directories, file names and extensions makes disk organization
    simple.  A masking feature allows you to exclude hard or other specific
    disks when printing labels. This function takes the directory
    information and neatly prints it on self-adhesive labels. This makes
    your selection of disks uniformly labeled, numbered, named, and dated,
    with the free bytes listed as well.  The user may use the default
    settings or create a custom printer driver.  One exit option compresses
    data after changes or deletions. A utility is available to clone data
    into another data file.

    Usage: Disk Cataloging Database System
    Requirements: 512K memory and two floppy or one floppy and one fixed
    disk drives
    How to Start: Type: INSTALL
    Suggested Registration: $15.00
    File Descriptions:
    FLOPCAT.EXE   Main program.
    FLOP3-1.TTL   Title graphics.
    FLOPCOPY.BAT  Batch file to install on floppy based system.
    INSTALL.EXE   Installation utility, run this after reading
                  documentation.
    RECONFIG.EXE  Allows installed default settings to be
                  changed.
    BRUN40.EXE    Runtime library module
    DOC.BAT       Batch file for printing the documentation.
    FLOPDOC3.TXT  Program documentation.
    NEWUSER.TXT   New user information.
    README.BAT    Batch file to view NEWUSER.TXT.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0959

     Volume in drive A has no label
     Directory of A:\

    FLOPCAT  EXE     88316   5-30-90   2:35p
    INSTALL  EXE     52529   4-26-90   4:36p
    RECONFIG EXE     16011   4-07-90   2:17p
    FLOP3-1  TTL       955   4-11-90   5:02p
    BRUN40   EXE     76816  10-08-87   5:57p
    DOC      BAT        26   9-30-88   2:01p
    README   BAT        28   9-30-88   3:46p
    NEWUSER  TXT       896   4-10-90   7:48p
    PCSIG    TXT      3200   6-15-90   4:22p
    FLOPDOC3 TXT     44544   4-25-90  12:07p
    FLOPCOPY BAT       756   4-21-90  11:46a
    GO       BAT        38  12-15-87   9:53a
    FILE0959 TXT      2443   7-16-90   3:53p
    GO       TXT       573   7-17-90  12:56p
           14 file(s)     287131 bytes
                           26624 bytes free
