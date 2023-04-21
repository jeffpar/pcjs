---
layout: page
title: "PC-SIG Diskette Library (Disk #106)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0106/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0106"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "DISKCAT"

    DISKCAT keeps track of all your disk files. The program reads eight- or
    nine-sectored, single- or double-sided disks. It will not read fixed
    disks or high-capacity drives, or other non-standard disks.
    
    Features:
    ~ Read a disk's directory
    ~ Form a table-of-contents for a disk
    ~ Print a file listing for each disk
    ~ Display the names of all disks in the catalog
    ~ Display the number of sectors and free space left on each disk
    ~ Compare two catalog files and print a comparative list
    ~ Create data files in a format that can be read by Lotus 1-2-3
    ~ Search the catalog for a specific file
    
    System Requirements: RAM disk-emulator or hard disk to hold the
    data, a printer, and a graphics board are all recommended.
    
    How to Start: To start, run DC4-READ and edit the program parameters.
    Change DC4-SAMP to whatever you like and respond Y when asked "Make
    the changes permanent?"  Press the Esc key, as directed, and the file
    will be created.  To read the documentation, enter TYPE DC4-DOC.
    
    Suggested Registration:  $50.00 for source code
    
    File Descriptions:
    
    DC4-CAT  EXE  Program to add descriptions to DISKCAT data files
    DC4-DOC  EXE  Prints DISKCAT documentation
    DC4      DOC  Documentation file for DISKCAT  (41K)
    DC4-PGM  DTA  DISKCAT program data file
    DC4-FIND EXE  Finds a file in DISKCAT catalog
    INVOICE  DC4  Invoice for your records or to bill your company
    CNVRTDC  COM  Conversion program
    DC4-SORT EXE  Program to sort & print DISKCAT catalog
    DC4-SAMP DTA  Sample data file for DISKCAT
    DC4-SAMP DT2  Sample data file for DISKCAT
    DC4-READ EXE  Program to read & catalog disk files
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## DC4.DOC

{% raw %}
```
 
 
 
 
 
 
 
 
 
 
 
 
 
 
                                  DISKCAT(tm)
 
                                  version 4.3
 
 
                                  DISK  FILE
                                CATALOG PROGRAM
 
 
                     (C) Copyright 1983,1984  Nelson Ford
 
 
 
 
                            DISCLAIMER OF WARRANTY
 
   THIS SOFTWARE AND MANUAL ARE SOLD  "AS IS"  AND WITHOUT WARRANTIES AS TO
   PERFORMANCE OF MERCHANTABILITY OR ANY OTHER WARRANTIES WHETHER EXPRESSED
   OR IMPLIED.    BECAUSE OF THE VARIOUS HARDWARE AND SOFTWARE ENVIRONMENTS
   INTO WHICH THIS PROGRAM MAY BE PUT, NO WARRANTY OF FITNESS FOR A PARTICU-
   LAR PURPOSE IS OFFERED.
 
   GOOD  DATA PROCESSING PROCEDURE DICTATES  THAT ANY PROGRAM BE THOROUGHLY
   TESTED WITH NON-CRITICAL DATA BEFORE RELYING ON IT. THE USER MUST ASSUME
   THE ENTIRE RISK OF USING THE PROGRAM.   ANY LIABILITY OF THE SELLER WILL
   BE LIMITED EXCLUSIVELY TO PRODUCT REPLACEMENT OR REFUND OF PURCHASE PRICE.
 
 
 
 
                                  Nelson Ford
                                 P.O.Box 61565
                               Houston, TX 77208
                                (713) 960-1347
                             CompuServe: 71355,470
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
                      DISKCAT - Disk File Catalog Program
 
 
 
 
 
 
                                   CONTENTS
 
 
        Hardware requirements ....................................  1
        What DISKCAT does ........................................  1
        Incompatibilities with earlier versions & other programs .  2
        Entering information .....................................  2
        DC4-READ.EXE Program Functions
          1)  Read a disk's files into the catalog ...............  2
          2)  Add descriptions to file names (DC4-CAT.EXE) .......  3
          3)  Give a disk its own catalog ........................  3
          4)  Delete a disk from the catalog .....................  3
          5)  Display all files for a disk name ..................  3
          6)  Display all disk names .............................  3
          7)  Print a hardcopy catalog listing (DC4-SORT.EXE) ....  3
          8)  Purge deleted files from catalog ...................  3
          9)  Change program parameters ..........................  3
                Entering printer control codes ...................  3
        DC4-CAT.EXE Program Functions
          1)  Enter file category and description ................  4
          2)  Volume name entries ................................  4
          3)  Subdirectory name entries ..........................  4
          4)  Automatic file descriptions ........................  4
          5)  [Alt]-key commands .................................  4
        DC4-SORT.EXE  Program Functions
          1)  Compare two catalogs ...............................  6
          2)  Print catalog sorted by file name,
              disk name, file type, date or filename extension ...  6
        Sending data to the disk .................................  6
        Specifying a range to print ..............................  6
        Data file structure ......................................  7
 >>>>>  Starting a new catalog ...................................  8
        Suggestions for using DISKCAT.............................  8
        Using DOS 2's FIND.EXE to locate a file in the catalog ...  8
        Assigning categories .....................................  8
        DISTRIBUTION OF DISKCAT PROGRAMS .........................  9
        Source code ..............................................  9
        Acknowledgement of suggestions for improvements .......... 10
        Invoice
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
                  DISKCAT - Disk File Catalog Program       Page 1
 
 
        HARDWARE REQUIREMENTS:
 
        Minimum:  128K (192 on Compaq), one disk drive, 80-column monitor.
        Recommended:  a RAM disk-emulator  or  hard disk to hold the data
                      printer, graphics board.
        DOS:  1.0  1.1  2.0  2.1
 
        Maximum # of file name entries:  up to 3000, depending on memory.
 
 
        WHAT DISKCAT DOES:
 
        DISKCAT  keeps track of all of your disk files - no more sticking
           disk after disk into a drive to see if the file you need is on
           it.  It reads 8- or 9-sectored, single- or double-sided disks.
           It will not read fixed disks  or high-capacity drives or other
           non-standard disks.
 
        DC4-READ.EXE  reads a disk's directory, adds file names, date and
           size to a catalog file, gives a disk its own table-of-contents
           file, prints a file listing to keep with each disk,  deletes a
           disk from the catalog file, displays names of all disks in the
           catalog, along with number of sectors and sides and free space
           remaining on each disk, allows changing program parameters.
 
        DC4-CAT.EXE  add file category and description, rename files/disk,
           delete file, view file contents, locate file/disk in catalog.
 
        DC4-SORT.EXE  sorts, prints the catalog file; it will compare two
           catalog files and print a comparative list showing differences
           and matching files; creates new catalog file; prints to screen
           or printer or disk file for later printing; creates data  file
           in a format that can be read by Lotus 1-2-3.  All or part of a
           catalog can be sorted by file name, disk name, file type, date
           or file extension.
 
        DC4-FIND.EXE  is a quick way to search the catalog for a specific
           file to find which disk it is on.
 
        DC4-DOC.EXE  contains an introduction to  DISKCAT  and prints the
           DC4.DOC documentation file to the screen or printer.
 
        DC4-PGM.DTA contains the program parameters:  file names, drives,
           screen colors, printer controls.
 
        DC4-SAMP.DTA and  DC3-SAMP.DT2  are samples of the two data files
           created by DISKCAT.   The first contains the file catalog with
           the following information about each file:   file name,  size,
           creation time and date, file category and description and disk
           name.    The second data file contains the number of disks and
           files in the catalog  and the following information about each
           disk:  disk name, number of sides and sectors, free space, and
           the catalog record number of the disk's first and last files.
 
 
 
 
 
 
 
 
 
 
                  DISKCAT - Disk File Catalog Program       Page 2
 
 
 
 
 
 
        INCOMPATIBILITIES:
 
           DC4-CAT.EXE  uses keys that may be intercepted by some utility
           programs such as Prokey.   Such programs must be exited before
           using DC4-CAT.EXE, but may be left active with DC4-READ & SORT.
 
           If you have been using a version of  DISKCAT earlier than 3.0,
           you must use the program DC4-CNVT.BAS to convert DC4.DTA's re-
           cord format to the current format.   The current format has a
           36-character description field, increased from 25 characters.
           You may keep the names of your data files if you wish by using
           the  "Modify program parameters" option in  DC4-READ to change
           the default data file name.
 
 
        ENTERING INFORMATION:  When entering data, the edit keys work the
          same way that they do in BASIC and in most word processors:
 
           CURSOR keys
             -left & right move the cursor within the data field.
             -up & down moves to fields above or below current field.
 
           CTRL + CURSOR left or right
             -moves one word if cursor is within a field or
             -moves to adjoining fields if cursor is at either end
                of the current field.
 
           ENTER causes all characters displayed in the field to be
              accepted as input, regardless of cursor location.
 
           INS toggles the Insert function on and off.
 
           DEL deletes the character at the cursor position.
 
           HOME moves the cursor to the beginning of the field.
 
           END moves the cursor to the end of the field.
 
           CTRL + END deletes to the end of the field.
 
          Entering a character at the start of a field automatically
          deletes the  rest of the field  so that a new entry can be
          made.   To add  characters to the front  of displayed text
          without deleting existing text,  toggle the Insert mode on
          first. You may have to delete characters first to make room.
 
 
 
 
 
 
 
 
 
 
 
 
 
 
                  DISKCAT - Disk File Catalog Program       Page 3
 
 
 
 
        DC4-READ.EXE Program Functions (Main Menu):
 
        1)  Read a disk's files into the catalog.
             -prompts for a name for the disk.   If the disk has a volume
               label, it is made the default disk name.  When asked for a
               disk name, press Enter to use the default name.
             -checks to see if name is already used.  If so, choices are
              * delete the disk from the file
              * read the disk and update the file
                This option allows you to update a disk's records without
                wiping out the file descriptions for files that are still
                on the disk.  If a file has the same name but a different
                file size or date, the name, category and description are
                retained and the size and date are updated.
              * enter another disk name
             -file names, size  & date are read from disk, sorted by name
               and added to the data file with the "DTA" extension.   The
               disk name,  disk type (number of sides & sectors) and free
               space remaining are added to the data file with the  "DT2"
               extension.
 
        2)  Add descriptions to file names. (See DC4-CAT)
 
        3)  Give a disk its own catalog.
             -puts a directory listing on a  disk with file descriptions.
               The file can be TYPEd from DOS to review contents of disk.
               If you gave the volume name a description, it is displayed
               in the heading of the listing along with the disk name.
 
        4)  Delete a disk from the catalog.
             -removes all files from the catalog that belong to the  disk
               that is being deleted.
 
        5)  Display all files for a disk name.
             -allows a list to be made of file names and descriptions for
               a disk.  The printout can be inserted into the disk sleeve
               for reference.
 
        6)  Display all disk names.
             -also displays number of sectors and sides and free space.
 
        7)  Print a hardcopy catalog listing.
             -goes to the DC4-SORT program to print a catalog file.
               (DC4-SORT is discussed in detail later.)
 
        8)  Purge deleted files from catalog.
             -eliminates records that have been marked for deletion.
              NOTE: compressing records in  a random access file does not
               change the file size in the directory.  To change the file
               size, copy DC4.DTA in DOS using /A which will cause DOS to
               stop at the EOF marker.  (See COPY in DOS manual.)
             -the catalog should be purged before creating a new file via
               DC4-SORT.
 
 
 
 
 
 
 
 
                  DISKCAT - Disk File Catalog Program       Page 4
 
 
 
        9)  Change program parameters.
             -allows you to change the names of the DISKCAT  programs and
               data files to suit your taste.  You can use this option to
               change catalogs if you have more than one catalog file.
             -change default drives and screen colors.
             -put in printer commands for your printer.  Example:  To put
               the Epson/IBM printer into compressed print, you must send
               the printer an ASCII 15. From BASIC, to put the Epson into
               compressed print you would type LPRINT CHR$(15). So in the
               DC4-READ program, enter the print control code as CHR$(15).
               Press Alt-E or Alt-I or Alt-O to get the control codes for
               Epson, IDS, or Okidata printers, respectively. Others must
               be entered manually as described. See your printer manual.
 
 
        DC4-CAT.EXE  Program Functions:
 
         1)   Displays the disk name and file name  and prompts for a 10-
               character file category and 36-character file description.
               The categories displayed at the top  of the screen  can be
               entered into the category field by entering  the number or
               highlighted characters of the desired category name.
 
         2)   DOS 2 volume labels are automatically given a category name
               of "Vol. Name" so that all disk  names will print out in a
               group when the file is sorted and printed by category.  In
               the description field enter a description of disk contents.
 
         3)   DOS 2 subdirectory names are automatically given a category
               name of "Subdir.".
 
         4)   The following is a list of filename extensions and their de-
               fault descriptions which automatically appear. Press Enter
               to accept a default description or enter a new description.
 
                    EXTENSION               DEFAULT DESCRIPTION
                 ----------------   ------------------------------------
                 EXAMPLE.ASM        Assm. source code for EXAMPLE.EXE
                 EXAMPLE.DOC        Documentation file for EXAMPLE
                 EXAMPLE.DTA/.DAT   Data file for EXAMPLE
                 EXAMPLE.HEX        EXAMPLE in hex format for downloading
                 EXAMPLE.OBJ        File used to generate EXAMPLE.EXE
                 EXAMPLE.VC         VisiCalc template to ...
                 EXAMPLE.WKS/.PRN   123 template to ...
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
                  DISKCAT - Disk File Catalog Program       Page 5
 
 
 
         5)   Several commands are available to make entering descriptions
              easier and quicker. The commands are displayed at the bottom
              of the screen.  They are executed by holding the Alt key and
              pressing the appropriate key.  The key to press is indicated
              by being highlighted and capitalized on the screen.  It will
              be the same key as is shown in brackets in the following:
 
         [P] Prior entry: displays previous entry.
 
         [F] Find file:  finds a file from all  or part of the name  and
                           makes it the current record.
 
         [D] Find disk:  finds a disk from all or part of the name,  and
                           makes the first file on the disk the  current
                           record.   Optionally, skips files in the data
                           file not on the selected disk. The reason for
                           this option is  that when a disk is  updated,
                           new files on the disk are added to the end of
                           the catalog.   As a result, all the files for
                           a disk  will no longer be grouped together in
                           the catalog.   This option allows you to work
                           on the files for just one specific disk.
 
         [K] Kill file:  marks  the displayed entry  for deletion by the
                           "Purge" routine.   Also allows the file to be
                           deleted from the disk.
 
         [V] View file: displays contents of a file one screen at a time,
                           to aid in entering file descriptions.  If the
                           file is not an ASCII file, the display may be
                           meaningless, unless it is a BASIC program, in
                           which case it will be translated to ASCII.
 
         [R] Repeat entry: repeats category  & description from previous
                           file:  for programs with multiple files, such
                           as FK.DOC, FK.HEX, FK.COM.  Also see [F1-F10].
 
         [S] Skip disk: finds the next disk name and makes its first file
                           the current record.
 
         [C] Edit categories:  allows you to change the category names.
                           The names will be sorted and re-displayed when
                           you are through making changes.
 
         [N] Rename disk/file:   (1) Change the name of a disk throughout
                           the catalog file.     (2) Rename a file in the
                           catalog file and on the disk.
 
         [B] Find Blank description:   finds the next file in the catalog
                           with a blank description field.
 
         [M] Manual entry:   Allows a manual entry to be made for non-DOS
                           disks, such as Flight Simulator.
 
 
 
         (continued)
 
 
 
 
 
                  DISKCAT - Disk File Catalog Program       Page 6
 
 
 
 
        (DC4-CAT.EXE  Program Functions, continued:)
 
 
         [F1-F10] Memorize/recall a category and description:
 
         IF THE FUNCTION KEY DOES NOT HAVE ANYTHING ASSIGNED TO IT:
 
              -The next category and description entered will be assigned
                 to the function key pressed.
              -If the current file already has a category and description
                 that you want assigned to the Fkey, press Enter twice.
              -Otherwise, enter a category and description or press [Esc]
                 to abort.
              -The Fkey number and first six characters of the description
                 will be displayed at the bottom of the screen.
 
         IF THE FUNCTION KEY ALREADY HAS A CATEGORY AND DESCRIPTION:
 
              -They will become the prompts for the current file.
              -Press Enter twice to accept the prompts or press [Alt] and
                 a different function key to recall different prompts.
              -Or press [Esc] to clear the function key. The program will
                 then be ready to assign new text to the Fkey.  If you do
                 not want to set up this function key, press [Esc] again.
 
 
 
        DC4-SORT.EXE  Program Functions:
 
        1)  Compare two catalogs.
             -compares two catalogs and prints a comparative list.   This
               function is designed to facilitate comparing software lib-
               raries by different user groups or individuals who collect
               public domain software.
 
        2)  Print catalog sorted by file name, disk name, file type, date
             or filename extension.
 
        Print Options:
 
        1)  Output can be sent to the screen, the printer, or to a disk.
 
        2)  When the data in the sorted field, such as disk name, changes,
            you may choose to skip two lines on the printout, skip to the
            top of the next page, or not skip at all.
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
                  DISKCAT - Disk File Catalog Program       Page 7
 
 
 
        3)  Data sent to a disk file can be formatted in three ways:
             -the same as the printout (to dump to a printer later.)
             -as a LOTUS 1-2-3 ".PRN" file (to be loaded into 1-2-3.)
             -as a new catalog file.    When a disk is first read, all of
               its files are grouped together. When a disk in the catalog
               is re-read and the catalog updated, new files are added to
               the end of the catalog.  Then when the catalog is searched
               for the files of a particular disk the program must search
               longer.   By sorting the catalog by disk name and creating
               a new catalog file,  you can cut down on disk search time.
               After creating  the new file,  you must purge it using the
               DC4-READ menu selection 8.  Purging causes the record num-
               ber for the first and last record for each disk to be calc-
               ulated and stored for faster record retrieval.
 
        4)  You may specify a range to print.  Examples:
             -to print file names starting with  A through  M, enter A as
               the starting parameter and M as the ending one. If you get
               the message  "Out of string space" when trying to load and
               print the entire catalog, you may have to use use this op-
               tion to print one part of the catalog at a time.
             -to print all files with the category of "BASIC Util", first
               select "Sort by category" then specify "BASIC Util" as the
               starting and ending parameters.
 
        DATA FILES:
 
        1)  DC4-PGM.DTA contains the program parameters.   This file must
             always be present to run DISKCAT.   (The information in this
             file used to be included in DC#.NFO with the disk data.)
 
        2)  ***.DTA is a random access file containing file names & info.
            The name of this file on the distribution disk is DC4-SAMP.DTA
            but can be changed to any legal file name by menu selection 9
            in the DC4-READ program.
              Record layout:
                file name        12 spaces
                disk name         8 spaces
                file type        10 spaces
                file descrip.    36 spaces
                file date         8 spaces
                file size         6 spaces
                car. rtn./l.f.    2 spaces  (carriage return & line feed)
                                 --
                record length    82
 
        3)  ***.DT2 is a sequential file containing disk names & info. as
              well as the number of files and disks in the catalog.  This
              file is name DC4-SAMP.DT2 on the distribution disk.
 
 
 
 
 
 
 
 
 
 
 
 
 
                  DISKCAT - Disk File Catalog Program       Page 8
 
 
 
 
        STARTING A NEW CATALOG:
 
        When you receive DISKCAT it is set to read the DC4-SAMP files. To
        create your own catalog file, run  DC4-READ  and edit the program
        parameters. Change DC4-SAMP to whatever you like and respond  "Y"
        when asked  "Make the changes permanent?"   The program will look
        for whatever filename you entered on whatever drive you specified
        and, not finding it, will ask you what drive it is on. Just press
        the Esc key, as directed, and the file will be created.
 
 
        SUGGESTIONS FOR USING DISKCAT:
 
        As already mentioned,  this program makes it easy for user groups
        to catalog  and describe  their public  domain software libraries
        and to compare them with other groups.  Because disks can be read
        so quickly,  libraries of up to  3000  files each can be read and
        compared in a matter of minutes.
 
        People who have a hard disk that is backed up on floppy disks will
        find that by keeping the  catalog file on the hard disk,  you can
        use DOS 2's FIND.EXE or  DC4-FIND to find in seconds which disk a
        file is backed up on.
 
        Those without a hard disk may find it handy to have a printout of
        the catalog sorted by filename for reference at times  when it is
        not convenient to load DISKCAT.
 
        Some people are using  Diskcat exclusively for keeping an index of
        word processing text files.   They change the category captions to
        suit their needs and give each entry a description. Since such text
        files can accumulate and get out of control quickly, this is a good
        way to be able to find a particular letter long after you have writ-
        ten it.
 
        USING DOS 2's FIND.EXE ("FIND")-
 
        FIND  will search for a string of  characters anywhere in a file.
        You may prefer to use FIND instead of DC4-FIND.EXE  to search the
        catalog. To use it to display all files of a particular category,
        such as "DOS Util", enter the following:  FIND "DOS Util" DC4.DTA
        Notice that  upper case and  lower case must be correct to find a
        match. Also, the file extension must be right-justified:  to find
        the file, TEST.BAS, you must specify  "TEST    .BAS".
        A batch file to make  FIND  a little easier to use can be created
        by typing in the following at the DOS prompt:
        COPY CON: F.BAT
        FIND "%1" DC4.DTA
        (press F6 to get a ^Z)
        With this batch file, you can just enter F  and the characters in
        the file that you want to locate.
 
        To use DC4-FIND.EXE, at the A> prompt, enter DC4-FIND.   You will
        be prompted for all or part of a file name to search for.
 
 
 
 
 
 
 
                  DISKCAT - Disk File Catalog Program       Page 9
 
 
        ASSIGNING CATEGORIES-
 
        The Category is meant to be a "key field" that you can use to get
        similar file to print out together. Let's say you are classifying
        the DISKCAT programs.  For Category, you could call DC4-CAT.EXE a
        "Disk catalog"  file, the  .DOC  file a "Documentation" file, the
        .DTA file a "Data file".    But when you sort by Category, do you
        want to see all the  documentation files listed by themselves and
        all the data files by themselves?    You might prefer to classify
        all related files the same as the main program, so that they will
        be grouped together when printing a list sorted by Category.
 
        If you use the Categories displayed at the top of the screen, you
        will be assured that file categories that you want  to match will
        match exactly so that they will print out together.   To edit the
        Categories, press Alt-C in the "Add Descriptions" program, as de-
        cribed earlier.
 
        DISTRIBUTION OF DISKCAT PROGRAMS-
 
        A limited license is granted to copy the COMPILED versions of the
        DISKCAT version 4.3 programs and the associated files under the
        following conditions:
 
        1. Copying is for the sole purpose of allowing potential buyers
           of the program an opportunity to try out DISKCAT before paying
           for it.
 
        2. The BASIC source code should not be needed for such an evalua-
           tion, therefore, it may not be copied or distributed.
 
        3. All copyright notices must be left intact.
 
        4. All the files on the distribution disk, including the invoice
           file must be offered together as a complete set.
 
        5. NO FEE MAY BE CHARGED FOR PROVIDING ANYONE WITH COPIES OF THE
           DISKCAT FILES NOR MAY COPIES BE GIVEN AWAY AS PART OF ANY TYPE
           OF COMMERCIAL ENDEAVOR, SUCH AS, BUT NOT LIMITED TO, SOFTWARE
           PROMOTIONAL GIVE-AWAYS BY VENDORS WITHOUT THE EXPRESS WRITTEN
           CONSENT OF THE AUTHOR.  WRITE FOR MORE INFORMATION.
 
        Since there is no way for me to control the continued distribution
        of outdated copies of  DISKCAT, users should be aware that changes
        in the program, the price or in the terms of distribution may have
        occurred since this document was written.
 
        SOURCE CODE-
 
        Registered users may get the source code for DISKCAT by sending
        a DSDD formatted disk, ppd. mailer plus $50. The source code for
        DISKCAT may NOT be copied and distributed.  If you make changes
        or have suggestions for improvements I am interested in hearing
        of them,  but no modified versions of DISKCAT may be copied and
        distributed,  since I have no way to help other users when they
        have problems with the modified versions.
 
 
 
 
 
 
 
                  DISKCAT - Disk File Catalog Program       Page 10
 
        Acknowledgements for Suggestions:
 
        (1) Kill file from disk when deleting entry from DISKCAT.
        (2) Show free space on disk along with file name.
            (James Jacques    Delafield,WI)
 
        (3) Show disk type (# sectors and # sides) along with file name.
            (Bob Duval   Charleston, SC)
 
        (4) Include DC4.HDR file for easier use with PC-FILE.
        (5) Read DOS 2.0 subdirectories (possible future enhancement.
            I would first like to know if many people are using
            subdirectories on floppies.)
            (John Burns    Mattawan, MI)
 
        (6) Several people have suggested a routine to print a disk
            directory on a label to be attached to the disk.  The reasons
            that this has not been done yet are (1) the idea of this
            program is to make it easy to locate files using the DC4-FIND
            program or a sorted list printed out, (2) disk contents
            change easily, disk labels change less easily, and (3) there
            are several programs in the public domain already that print
            such labels.  Another problem is squeezing 112 files onto a
            label that will fit on the disk.  One company has solved this
            by using the subscript character set for the Epson printer.
            What do people without Epsons do?
 
            As a substitute, option 6 at the main menu [Display All Files
            for a Disk] will let you print out a list to be inserted into
            the disk's sleeve.  This routine prints the name and descrip-
            tion of all the files in two columns.  To get the printout to
            fit into a diskette sleeve, you need to set your printer to
            compressed print (15+ char. per inch) by setting the printer
            switches or entering the control codes in the DC4-READ program.
 
        (7) Put time and date on catalog listings.
        (8) Sort the disk names.
        (9) When sorting and printing the catalog, insert blank lines or
            a form feed when the sorted field changes.
            (George Margolin     Newport Beach, CA)
 
       (10) Allow a file to be renamed from within program.
       (11) Allow a disk to be renamed in the catalog file.
            (John Markley      Homer, LA)
 
       (12) Allow screen colors to be changed from within the program.
            (Mike Hawkins    whereabouts unknown)
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
                  DISKCAT - Disk File Catalog Program       Page 11
 
 
       (13) Allow the user to enter a range to print in DC4-SORT.
       (14) Make the disk's volume name the default disk name.
       (15) Allow the user to assign a volume name from DC4-CAT.
       (16) Add routine to read files on hard disk.
       (17) Add some color.
       (18) In printouts, place size and date fields adjacent to file
              name for easier reading.
       (19) Read the disk name from the (DOS 2) volume label.
            Other people have suggested reading the volume label from the
            directory to use for the disk name, but it seemed like more
            trouble that it was worth.  But Michael Roland also has a
            very clever idea for using the volume names.  Michael came up
            with the idea of giving each disk's volume name (which is
            read along with the other file names from the directory) the
            same category so that all of the disks' volume names will be
            grouped together when the file is printed by DC4-SORT sorted
            by category.  Now why didn't I think of that?  He also
            suggests using the "Add descriptions" routine to add a
            description of disk contents to the volume name entry.
            (Michael B. Roland   Dammam, Saudi Arabia)
 
       (20) Speed up the sort 600-900%.
       (21) Put time and date on comparative printout and mark matching
            files to make them easier to spot.
       (22) Show on the printout which field the file was sorted on.
       (23) Add an option to allow printing the data file sorted by date.
       (24) Make it easier to delete a disk from the file.
       (25) Change the symbol for a deleted record from "z" to "/" to be
            compatible with PC-FILE.
            (Pete Smothers,  President, New Orleans PC User Group)
            Pete backed up his suggestions with BASIC code.  Using the
            sort routine he provided, a sort that took 5 minutes 15
            seconds with the routine I was using now takes 7 seconds!
            The first time I tried it, I thought that it had kicked out
            of the routine without sorting.  Boy was I surprised!
            Thanks, Pete.
   4.0
       (26) SPLIT "ADD CATEGORIES" INTO ITS OWN PROGRAM.  I fought this
            as long as possible, wanting to keep the speed of having as
            many functions as possible in one program, but kept running
            out of room in the main program.  The new feature that pushed
            it over the limit this time was keeping track of each file's
            first and last record number in the data base.  When you have
            a large data base, this will greatly speed up functions that
            search for all files for a particular disk.
       (27) Allow program parameters to be changed from within the program.
            I have always been annoyed at not being able to look at two
            different catalog files on my hard disk without moving or
            renaming them.  Now this is possible.
            (Me,      Houston, Texas)
 
       (29) Make the documentation easier to read and make it easier to
            start a new catalog.
            (George Margolin     Newport Beach, CA)
   4.1
       (30) Added the routines to allow the entry and use of printer
            control codes.
       (31) Added routines to allow temporarily assigning file categories
            and descriptions to function keys to be recalled and assigned
            to other file names.
 
 
 
                  DISKCAT - Disk File Catalog Program       Page 12
 
 
             Changes to DC4-CAT:
   4.2  (32) Routine to allow manual entries for non-DOS disks.
        (33) Routine to View BASIC programs not saved in ASCII.
        (34) Fixed bug that hung up system when end of file reached while
             adding descriptions under the option that skips all files not
             on a specified disk. (whew!) (reported by Jim Layfield)
        (36) Replaced code (stolen by gremlins) that saves changes made to
             categories.
 
        (37) Added routine to display NumLock and CapsLock status.
 
        (38) Fixed bug in DC4-READ that truncated right digit of file size
             if over 99,999.
        (39) Fixed bug in DC4-SORT that kept printout from starting a new
             page when a change in the sorted field occurred.
             (Thanks to my chief bug-finder: Dwight Espensen, who has long
             been keeping me honest.)
        (40) Removed the data file name DC4.DTA from DC4-FIND.EXE.
        (41) Added option to DC4-SORT to pause at each page to change paper.
             (Suggested by David Romer, Toronto, Ontario, Canada, who also
             provided enough info to allow me to track down another elusive
             bug that follows:)
        (42) Fixed bug that deleted the last file name for a disk if it did
             not have a volume label.
 
   4.3  (43) Fixed several minor problems and one major one in DC4-SORT that
             caused the same file name to be repeated when printing to disk,
             and another that caused sorted printouts to be inconsistent.
 
   DISKCAT 5.0, when completed, will allow reading subdirectories. With this
   version, the disk name field will be expanded to 11 characters to be com-
   patible with the actual volume name on the disk. Path names and other en-
   hancements will be added. DISKCAT 5.0 may be distributed through regular
   commercial channels. If so, registered users of earlier versions will be
   able to upgrade at regular upgrade cost.
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
-
1350
 
            -------------------------------------------------------
            * * * * * * * * * *  I N V O I C E  * * * * * * * * * *
            -------------------------------------------------------
 
 
 
                                 D I S K C A T
 
                                     4 . 3
 
 
                          Please make check payable to:
 
                                  Nelson Ford
                                 P.O.Box 61565
                               Houston, TX 77208
                                (713) 960-1347
 
 
 
 
 
         Date: _____________
 
         Name: _________________________________
 
         Address: ______________________________
 
                  ______________________________
 
 
 
         Where did you get your copy of Diskcat?
 
         _______________________________________________________________
 
 
                                            Qty.    Price       Total
                                            ---     -----     ----------
 
        DISKCAT Disk File Catalog Program   ___  @ $39.95     $_________
 
        Source Code                         ___  @  50.00      _________
 
        Total                                                 $_________
 
        Sales Tax for Texas Residents                          _________
 
                                                              $_________
 
 
 
 
 
        Thank you for your order.
 
 
 
 
 
 
 
 
-
                   DISKCAT DISTRIBUTION LICENSING AGREEMENT
 
 
    Anyone wishing to charge people a fee for giving them a copy of Disk-
    cat must have the written authorization of the author, without which,
    the distributor is guilty of copyright violation.    To receive such
    authorization, send this completed application, along with a copy of
    your software library's order form to:   Nelson Ford,  P.O.Box 61565,
    Houston, TX 77208.    Include $7 to cover the cost of processing the
    application and of sending you the latest version of Diskcat.   (Fee
    may be waived for non-profit, non-mail-order user groups.)
 
         Name of Organization: ____________________________________
 
         Your Name: _______________________________________________
 
         Address:   _______________________________________________
 
                    _______________________________________________
 
 
         TERMS OF DISTRIBUTION OF DISKCAT:
 
         1. The fee charged may not exceed $7, including postage,
            mailer and any other charges.  If Diskcat is shipped
            along with other disks, the $7 limit includes the
            charge for the disk plus a pro-rata share of the total
            shipping and handling and other charges.
 
         2. Your library's catalog or listing must state that this
            program is not free, but is copyrighted software that is
            provided to allow the user to evaluate it before paying.
 
         3. The label on the disk should show that this is a demo
            program for which payment is expected on acceptance for
            use. Labels will be furnished on request.
 
         4. The offering and sale of Diskcat will be stopped at any
            time the author so requests.
 
         5. Copies must be made from the copy of Diskcat sent to you
            with this agreement. This is required for control purposes.
 
         6. Problems or complaints will be reported to the author for
            resolution.
 
         In return for the right to charge a fee for the distribution of
         the program Diskcat, I agree to comply with the above terms of
         distribution.
 
         Signed,
 
         ______________________________________    ______________
                  your signature                        date
 
 
         __________________________   _________    ______________
                Nelson Ford           control #         date

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0106

     Volume in drive A has no label
     Directory of A:\

    DC4-DOC  EXE     23936   1-06-85  11:20p
    DC4      DOC     41379   2-26-85  10:28p
    DC4-READ EXE     65664   2-10-85   8:53p
    DC4-SORT EXE     48384   1-17-85   9:15p
    DC4-CAT  EXE     56704   1-31-85   9:17p
    DC4-FIND EXE     19712   1-06-85  11:20p
    DC4-PGM  DTA       640   1-06-85  11:20p
    DC4-SAMP DTA       896   1-31-85   7:57p
    DC4-SAMP DT2       128   1-31-85   7:55p
    CNVRTDC  COM     12800   1-06-85  11:21p
    INVOICE  DC4      1976   2-26-85  10:28p
           11 file(s)     272219 bytes
                           44032 bytes free
