---
layout: page
title: "PC-SIG Diskette Library (Disk #1300)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1300/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1300"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "ABSTRACT (LORAN LOCATOR NOW ON #1542)"

    ABSTRACT is designed for cataloging and labeling photographs and other
    similar items such as sound recordings, video tapes, motion pictures,
    computer disks, paintings, etc.  It can also be used for other database
    applications such as addresses, suppliers, lists, etc.
    
    Each photo/tape/disk is described in a record that has four sorting
    fields and fits on a single line for easy printing and reviewing.  The
    four fields represent categories of your choice, such as roll number,
    item number, frame number, name, description, date, subject matter,
    etc.  Records can be sorted, edited, searched, viewed, and printed as
    reports, as well as labels to fit both slides and prints.
    
    Each database holds 950 entries, but multiple databases can be joined
    for searching.  Pull-down menus and help screens lead you through every
    option.  Mouse compatible.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## ABSTRACT.DOC

{% raw %}
```



            Abstract Documentation - Version 1.1                5/12/89

                                            (c) 1988-89 Richard Lesnick
                                                    All rights reserved

                CONTENTS


            1.  Introduction                13.  Input
            2.  Program Distribution        14.  Review
            3.  Disclaimer                  15.  Arrange
                                            16.  Output
            4.  Quick Start                 17.  Setup
            5.  Installation                18.  Complete
            6.  Regular Start
            7.  Speech Output               19.  Customizing
            8.  Program Overview            20.  Program Design
            9.  Disk Files                  21.  Acknowledgments
                                            22.  Invoice
            10.  File #'s
            11.  Section Field
            12.  Description Fields         23.  Index







            1.  INTRODUCTION


            Abstract is for cataloging photographs and other similar
       items such as sound recordings, video tapes, motion pictures,
       computer disks, paintings, etc.  It can also be used for other
       database applications such as addresses, suppliers, lists, etc.

            It is designed to be quick, easy and flexible.  Each record
       has four fields and fits on a single line for easy printing &
       reviewing.  As many lines as desired can be used for each item.

            The goal has been to make the program as simple and self-
       explanatory as possible while including the necessary features to
       make it truly useful.



            This is an example set of entries for photographs:


       File #      Section        Description                   Desc. #

       87-5                       Plus-X  35mm  36 exp  E.I. 64       1
       87-5                       Nikon F1                            2
       87-5                       D-76 1:3  8 min  68%                3
       87-5        5-14,17        Polarizing Filter                   2
       87-5        7-14           1/15 sec at f8                      4
       87-5                       San Francisco                       7
       87-5                       Early May                           8
       87-5        1-12           Golden Gate Bridge                  6
       87-5        8-14,16,19     Boats on the Bay                    6
       87-5        24-36          Golden Gate Park Arboretum          7
       87-5        30,32-36       Paths in the fog                    6

       87-6                       Kodachrome 64 135-36                1
       87-6                       Nikon F1, 35mm Nikkor               2
       87-6                       Coast views                         6
       87-6        5-12           1. The wind was blowing hard and it 9
       87-6        5-12           2. sent streamers of spray off the  9
       87-6        5-12           3. the top of each breaking wave.   9


            In this example, the File # identifies the roll and the
       Section refers to the frame number.

            The program has special capabilities for handling frame
       numbers which are explained below in 11. Section Field.  The
       technique for printing slide labels is described in 16. Output.


            To use this system, each item (roll, disk, person, etc)
       needs to have a File #.  A name may serve as a File #.  In the
       case of photographs, this File # would be written on the negative
       envelope (or slide) and also on the back of prints along with the
       frame number.

            Once the data is input it is easy to locate pictures or
       groups of pictures.  It is also easy and convenient to print all
       or part of the file.


            Use is essentially a three step process.

                 1. Data is entered.
                 2. Data is sorted.
                 3. Data is output.



            2.  PROGRAM DISTRIBUTION


            The following 14 unmodified files should be included when
       Abstract version 1.1 is distributed:

            ABSTRACT.DOC  - this documentation file
            README        - introduction
            NEW.DOC       - new features

            ABSTR.EXE     - the program

            ABSTR.MNU     - mouse menu file
            ABSTR.DEF     - mouse definition file

            1_SAMPLE.DAT  - sample photo data file
            2_SAMPLE.DAT  - sample address data file

            T_ADDRS.DAT   - sample address template file
            T_ADDRS.ASC   - sample ASCII text file

            CRC.COM       - CRC67 program
            CRC.DOC       - CRC documentation
            CRCKLIST.CRC  - CRC list

            A.BAT         - batch file for starting


            The file ABSTR.INI is created by the program to store any
       setup information selected by a user and should not be included
       when the program is distributed.

            Abstract version 1 is being distributed as Shareware and
       only a reasonable distribution fee is permitted.  All files
       should be in their original unmodified form.

            Initially I wrote this program in BASIC for my own use.
       Over time I have evolved it and re-implemented it in Modula-2.
       At some point along the way I thought it might be of interest to
       others and have tried to put it together in a way that makes it
       useful for more than just my particular needs.

            I would appreciate suggestions and details of interesting
       uses as well as feedback about any problems.

            The distribution of Abstract is based on the concept of use
       in the same way that the price of a photograph used for
       commercial purposes is priced based on use.

            The same photograph costs much more for use in LIFE magazine
       than for the cover of a computer users group's newsletter.

            This same approach makes sense to me for computer programs.
       Before trying a program it is impossible to tell how useful it's
       going to be for one's purposes.  Once in use, it's value can vary
       significantly.



            Use of the program is free of charge to the following:

              - Anyone trying it out.

              - Anyone who has written programs that have been
                released free of charge to the public domain.


            Use by an individual:           Use by an organization:

             $ 15 - Light/Medium             $ 25 - Light/Medium
               25 - Substantial                50 - Substantial


            Those registering will receive notice of new versions and
       other useful information.  This documentation is available on
       audio cassette.

            I would rather have people use, enjoy, and share Abstract
       version 1 with others than refrain from using it because they
       have not sent in a fee.

            Custom versions of this program that accommodate different
       file numbering systems, hardware, or specific configurations are
       available by arrangement.

            Please send correspondence to:

                 Richard Lesnick
                 P. O. Box 14633
                 S.F., CA  94114

            For those who need an Invoice, one is included at the end of
       this document (22. Invoice).  Registration is required for any
       Organization using this program.  Site Licenses are available.



            3.  DISCLAIMER


            Hopefully Abstract will be useful for its intended
       purpose and its features will work as described, this however
       is not guaranteed and there is no actual or implied warranty.
       Luckily, Shareware programs like this can be tried out prior
       to use to see if they meet one's needs.



            4.  QUICK START


            Skip this section unless you're an experienced computer user
       who wants the minimum amount of documentation.

            The program is mostly self-explanatory.  The Info/Help
       screens contain most key information as well as the basics.  They
       can be accessed from most sections of the program and paged
       through quickly with PgDn & PgUp.

             For information on supported file labeling systems, refer
       below to 10. FILE #'s.

            When entering data, the File # and sometimes the Section
       remain the same for a group of entries.  For rapid input, Press
       F9 to repeat the prior entry field and then F10 to move to the
       next field.  After editing an entry from Review, that entry
       becomes the new prior entry.

            Most sections of the program are reachable from the cursor
       keypad.  DEL is the same as ESC except while editing.  Horizontal
       menus are selectable with the Down Arrow.  Vertical menus can be
       exited with the Up Arrow.  For (y/n) prompts, ENTER = y, DEL &
       ESC = n.

            Up to six entries, with !! for their File #, customize the
       program for any data file that they are in.  A data file with an
       entry in it that has the File #: !!a, would automatically use an
       ASCII sort when Arranging.  Likewise for Standard and Method.
       Refer to 15. Arrange.

            File #: !! entries with Section fields that begin with
       numbers, change the field name prompts (File #, Section, etc.)
       when adding entries.  The text "1. Last Name" - in the Section
       field would replace "File #      :" with "Last Name   :" on the
       screen.  Make sure to number all of the File #: !! Section fields
       to keep them in order after sorting.  The change will only occur
       if text follows the numbers.

            File #: !! entries with Desc. #'s from 1 up to 6 change the
       -= Description Numbers =- prompt.  The description fields of
       these entries will appear in place of the initial prompt.

            All of the above customizing options fit into six entries.
       Files that contain only these File #: !! entries make good
       template files for starting similar data files.  Refer to 19.
       Customizing.



            5.  INSTALLATION


            One disk drive, 256K of RAM memory and MS/PC-DOS 2.0 or
       greater are needed.  No special installation is necessary.  The
       program will make initial selections based on the hardware of the
       computer it is running on.  These default options can easily be
       changed by choosing Setup at the main menu.

            The program CRC version 6.71 is included for verifying that
       all of Abstract's distribution files are intact.  The README file
       and the file CRCKLIST.CRC contain a list of the CRC values for
       all of the files.  The easiest way to check the files is to type:

            A>CRC <press ENTER>


            The remainder of this section contains instructions for
       copying the program.

            The first thing to do is make a copy of the computer disk
       that this program came on.  Place a write protect tab over the
       notch on the disk to prevent accidental erasure.  Place a
       formatted disk into the B: drive and the original program disk
       into the A: drive.  To copy all of the files enter:

            A>COPY A:*.* B:    <Press ENTER>

            The disk in the B: drive now contains a copy of the program.


            This new disk has enough room on it for both the program and
       the entered data.  Alternately, this disk containing the program
       can be placed in the A: drive and separate formatted data disks
       placed in the B: drive.  See 9. Disk Files and 17. Setup for ways
       to specify B: as the logged drive.


            For hard disk users, the recommended technique is to create
       a new directory for the program on the hard disk and then copy to
       that directory.  The following makes the directory ABSTRACT on
       the C drive and then copies all the files into it.

            C>MD C:\ABSTRACT            <Press ENTER>
            C>CD C:\ABSTRACT                  "
            C>COPY A:*.* C:\ABSTRACT          "

            There are other ways to accomplish this.  Any directory name
       is ok.



            6.  REGULAR START


            This document file (that you are reading) describes how to
       use Abstract.

            To print this document, place the disk with this file on it
       into the A: drive, make sure the printer is on with the paper set
       and then from the A> prompt enter:

            A>TYPE ABSTRACT.DOC >PRN    <Press ENTER>

            To start the program, first place a copy of the original
       disk into the computer and then type:

            A>ABSTR   <Press ENTER>

            If the program is on a hard disk, first change the directory
       to the directory that ABSTR.EXE is in (CD directory_name).

            It is ok to rename ABSTR.EXE provided the extension remains
       .EXE (A.EXE).

            Once the program is loaded into the computer's active
       memory, it will prompt for a filename.  At this point, do one of
       the following:

              - Press the ENTER key for a directory of data files
                on the disk.  Position the bar cursor over the
                desired filename with the Arrow Keys or by typing
                the first letter of the filename, and then press
                ENTER.

              - Type any filename of up to 8 characters and then
                press the ENTER key.  If this file exists on the
                disk, it will be opened.  If it isn't on the disk,
                the program will ask whether or not to start one
                with that name.  Answer yes by typing the letter y
                or by pressing ENTER.

              - Type \ and then press ENTER to change the drive and
                or directory for the program to look for files in.


            To review the contents of a file quickly, select Review.  Do
       this from the main menu by using the left or right Arrow Keys to
       position the block cursor over Review and then press ENTER or the
       Down Arrow.  Typing R or r also selects Review.

            After selecting Review, use the same technique to select a
       position within the file.  The quickest are: Top, Middle or
       Bottom.  Then use the cursor keys (including Home, End, PageUp
       and PageDown) to move within the file.  To return to the main
       menu, press ESC twice.

            To enter data into the currently opened file, select Input
       from the main menu and then select Add entries.



            7.  SPEECH OUTPUT


            When Abstract is used with a speech output device and a
       talking program, Full Sound should be turned on.  This way,
       Abstract beeps when it doesn't recognize a keystroke.  Many
       screen messages are also routed through DOS for immediate speech
       output.

            Full Sound is turned on from the main menu by typing the
       letter "S" for Setup, followed by "S" for Sounds and then "F" for
       Full Sound.  The program will then ask at the lower left corner
       of the screen: "Use these values (y/n)?" - respond by typing the
       letter "y".  The next prompt will be: "Write them to disk (y/n)?"
       - once again type "y".  From now on when Abstract is started it
       will be in Full Sound.

            The regular screen cursor is only used some of the time.
       Some talking programs need to be set to recognize the hardware
       cursor.



            8.  PROGRAM OVERVIEW


            The seven primary functions on the main menu are:

            Input    - New entries are added from the keyboard or
                       read from a disk file.  - (13. Input)

            Review   - A quick way to view and modify the entries
                       in the current file.  - (14. Review)

            Arrange  - Sort the current file.  - (15. Arrange)

            Output   - Send all or part of one or many files to the
                       screen, disk or printer.  - (16. Output)

            Setup    - Change the colors and sound or specify where
                       to find disk files.  - (17. Setup)

            Help     - Information on how to use Abstract.

            Complete - Update the disk files, exit the program or
                       open a new file.  - (18. Complete)



            Throughout the program:

            Help     - Help information is available by pressing
                       F1, or selecting Help, Info, or -=*=- from a
                       menu.  Press ENTER, Page Down or Page Up for
                       more help.

            Menus    - Most parts of the program are accessed
                       through quick menus.  Items are selected by:

                       - Using the cursor keys to highlight the
                         desired option and then pressing ENTER
                         (Return).

                       - Typing the first capitalized letter of an
                         option.

                       - Horizontal Menu items are selectable by
                         pressing the Down Arrow key.

                       - Vertical Menus can be exited by pressing
                         the Up Arrow.  Exit areas of the program
                         by pressing ESC.

            Yes/No   - When prompted "(y/n)?" type:
                       Y, y or ENTER for yes.
                       N, n, ESC or DEL for no.

            Mouse    - The file ABSTR.MNU is included for use with
                       a mouse.  A .MNU file is used with most
                       mice; please refer to the documentation that
                       came with the mouse for details.  The left
                       button is ENTER. The right button is ESC.

            The menus can be navigated from the cursor keypad.  The Up
       and Down cursor keys select and exit many of the menus.  The
       ENTER key is the same as Yes and the DEL (delete) key is the same
       as ESC (escape) and No.  The best way to get the feel for this is
       to try moving around in the program by using the Arrow, DEL, and
       ENTER keys.



            9.  DISK FILES


            The program always has an active data file.  To open a data
       file, enter up to eight characters when prompted for a data file-
       name to open.  The filename extension will automatically be .DAT.
       If the disk file already exists on the disk, it will be opened.
       If it doesn't exist the program will prompt on whether to start a
       new one.

            To get a directory from the file prompt, press ENTER instead
       of entering a filename.

            A file will be loaded when the program is started if its
       name is included on the DOS command line (A>abstr filename).  The
       extension is not necessary.

            If you want to look for files on a different disk drive or
       in a different directory, press \ and then ENTER.  Now enter the
       new drive and/or directory.


            Directory  - Display up to 60 files in the current directory
                         that have the specified extension. Items can be
                         selected by using the cursor keys to highlight
                         a file and then pressing ENTER.


            Path       - Specify a new disk drive by entering its
                         letter.  Specify a new directory by entering
                         its entire path, include the drive if different
                         from the current one (a:\abstr\dat,
                         \abstr\dat).


            Data files - Files with the extension DAT hold the data used
                         by the program.   One is active at all times.
                         When the program starts it requests a filename
                         to start, or find.  A .DAT file can also be
                         loaded when first calling the program by
                         entering its name after the program name (drive
                         & path are optional - extension will be .DAT).


            Text files - Files with the extension .ASC are used for
                         importing & exporting data for use with other
                         programs.  They are plain ASCII with 1 space
                         between each field and Carriage Return/Line
                         Feed's between records.



            Each Data file holds up to 950 entries (58K).  When a data
       file approaches this size, start another one for new entries.  To
       divide an existing file, use Output-Some to write part of it to a
       text file.  Start a new data file and then read in this text file
       with Input - Import a File.

            Although data files are limited in size, Output's Multi
       option accesses multiple data files as if they were one large
       file.  Refer to 16. Output for details on Multi.


            Floppy Disks:

            Leave 60K of free space on the data disks for backup files.
       If a disk becomes full and the program is unable to write the
       data to disk, the program will prompt for another disk.  Simply
       place a formatted disk with ample room on it into the same data
       disk drive and try again.



            10.  FILE #'s


            File Labeling Systems:

            Many different File Labeling Systems are supported.  The
       important thing is to pick a system for each type of application
       and then stick with it.  There are three different sorting
       options: ASCII, Standard & Method.  To be effective with this
       program a File Labeling System needs to work with one of these
       sorting options.

              Before selecting a system check the sorting section
       (15. Arrange) to find out the other details of these different
       systems.

            There is no need to figure out all the different possible
       systems.  Standard is appropriate for sequential listings,
       accession numbers and date oriented systems and will accommodate
       many variations.  Method supports an unconventional minimum size
       date.  ASCII provides extra flexibility as well as compatibility
       with conventional computer sorting.



            Standard   uses '.' or '-' as a separator and right
                       justifies following sections to 4 spaces
                       when sorting.  This means that numbers from
                       0 to 9999 will sort in correct order without
                       the need for preceding 0's, as long as the
                       number is preceded by a '.' or '-'.

                       This works for year-sequential numbers:

                       87-1   - For the first roll in 1987
                       87-2   -  "   "  second  "   "  "
                       87-134 -  "   "  134 th  "   "  ", etc.


                       It also works well for subject filing:

                       P-351  - Portraits roll # 351
                       SF-25  - San Francisco roll # 25


            Method     uses a starting # if there are multiple
                       items on the same day, followed by a letter
                       code (which may specify the year) and a
                       month-day number. The month-day number is
                       designed to be as short as possible.  For
                       January through October it is quite
                       conventional.

                       11   - Jan 1st
                       430  - April 30th
                       1012 - Oct 12th

                       November & December are less conventional:
                       01 for November and 02 for December

                       011  - Nov 1st
                       0217 - Dec 17th

                       Here is a way to use this method:

                       First select a year to begin with and call
                       it A. Lets say 1976 is A then:

                       M412   - would be 4/12/88

                       When there is more than one item (roll) on a
                       given day, begin with a number:

                       3L011  - 3rd roll on 11/1/87



            ASCII      uses any style desired and sorts in ASCII
                       order.  This is the current way most
                       computer sorting is done.  Sorting is by
                       position starting from the left.  Results do
                       not always seem to make sense:

                       10 will come before 7 because in the first
                       position the 1 is less than the 7.

                       10
                       7

                       For this to come out differently the nine
                       would have to be preceded by a 0. (09).  In
                       use the user must left pad with enough
                       zero's to match the maximum number of
                       expected digits.  If 9999 is the highest
                       expected number then 1 should be written as
                       0001.

                       ASCII sorting can also be used for many
                       diverse applications, here is a quick sample
                       of an address file:


            Last Name    First Name     Description           Desc #

            Newman       Alfred         Alfred E. Newman           0
            Newman       Alfred         c/o Mad Magazine           1
            Newman       Alfred         New York, NY               2
            Newman       Alfred         magazine character         9

            See 19. Customizing for how to change the on screen
       -= Description Numbers =- and field name prompts to ones better
       suited to this file.

            The Last and First Names are repeated for each record.  This
       allows for any number of entries per item.  The names only need
       to be written out once and can subsequently be entered with F9.



            11.  SECTION FIELD


            The contents of the Section field depends on the type of
       data.  Refer to 19. Customizing for details on changing the field
       headings.  Below are examples of possible File #'s and Sections:


                                     File #            Section

               Photography           Roll              Frame
               Computer Disk         Disk              Filename
               Address Book          Last name         First Name
               Audio Tape            Tape              Position
               Phono Record          Album Name        Track


            Frame #'s:

            With the Standard & Method systems, there is a special
       feature for frame numbers.  For a range of frames, the program
       knows that 5-8 includes 6 and 7.  This simplifies Input and is
       very useful when Outputting labels.  To use this feature, observe
       the following conventions when entering frame #'s into the
       Section field.

            To enter Frame #'s (-5 thru 50) into Section:  Place a comma
       or space between frames (1,2 or 1 2).  Non numbers are ok (32A).

            For a range of frames use a dash (12-25).
            A blank Section field refers to the entire roll.


            When Outputting labels the program needs to know the lowest
       and highest frame # for a given File #.  It will scan all the
       entries with the same File # and select the lowest and highest
       frame # it finds.



            12.  DESCRIPTION FIELDS


            Enter into the Description Field the data to remember about
       the item.  The Description # field specifies what is described in
       the Description field.  Dividing the description into various
       types allows for easy retrieval of data.  The default description
       categories are:

                     1 - Format            5 - Who
                     2 - Equipment         6 - What
                     3 - Processing        7 - Where
                     4 - Technical         8 - When

                     0 - File Data         9 - Misc.

            These categories are useful for items such as photographs
       and recordings.  Ways to handle other types of items are
       explained in 19. Customizing.

            With the above categories, 0-4 pertain to the medium in use
       and 5-9 pertain to the subject matter of the photograph
       (recording, etc).  These categories are designed to be as generic
       as possible to allow their use on a wide variety of mediums.  To
       use other categories, please refer to 19. Customizing.

            File Data (0) is intended as something of a miscellaneous
       category for filing details.  This field might refer to an
       extended description of an item in a word processing document.
       If the word processed document also included the same File #
       along with the extended description, it would be easy to locate
       by searching for that File #.  File Data (0) could also be used
       to note the location of the item being described.


            Descriptions - To keep descriptions longer than one line in
       order, start them with a sequential number and keep the other 3
       fields the same.

                 87-3   2,5,8     1. Like this...         9
                 87-3   2,5,8     2. ...to here.          9



            13.  INPUT


            Data is entered either from the keyboard or a text file.
       Most of the time entries are input from the keyboard.  As with
       most word processors, the INS (Insert) key shifts the program
       between insert and overwrite mode.  To change a field once it is
       full, either delete some characters (or spaces) and then add
       more, or use overwrite mode.

            Use the four Cursor (Arrow) keys and the Home & End keys to
       position the cursor.  For added convenience, the Tab, ENTER and
       F10 keys all move the cursor to the next field.  The four
       function keys that affect individual fields are:

            F7  - deletes the field the cursor is in.
            F8  - undeletes the field the cursor is in.
            F9  - repeats the same field from the prior entry.
            F10 - move to the next field.

            F5  - is a short cut key for jumping to Review.

            When entering data, the File # and sometimes the Section
       remain the same for a group of entries.  Press F9 to repeat the
       prior entry field and then F10 to move to the next field.  After
       editing an entry from Review, that entry becomes the new prior
       entry.

            To change an entry after is has been entered, choose Review
       from the main menu.  The most recent entries are at the bottom of
       the file until it is sorted.


            The other way to add entries is by reading in the type of
       text file created by Output.  This is convenient for making major
       changes to a data file with a word processor or for making a
       subset of an existing file.

            Use Input - Import a file - to import the type of ASCII text
       file (.ASC) created by Output back into a data file (.DAT).  When
       editing the text file, make sure to retain its line lengths and
       column widths.  An ASCII editor in overwrite mode does this quite
       nicely.   20. Program Design has details on ASC files.



            14.  REVIEW


            Review works hand-in-hand with Input.  It provides a quick
       and simple way to review the current file as well as change or
       delete entries.

            Start from the Top, Middle or Bottom of the data.

            When Adding entries the most recent ones are at the bottom
       until after Sorting.

            Place - Enter all or part of a File # to go to.
            Line  - Enter line (record) # to go to.  Line #'s are
                    shown at the second from bottom line on the right.


            While Browsing:

            Use the Cursor, Home, End, PgUp & PgDn keys for positioning.

            F5 - is a short cut key for jumping to Input - Add entries.

            For easier use with a mouse, the Left Arrow key is the same
       as PgUp and the Right Arrow key is the same as PgDn.

            There are markers at the left and right side of the screen
       about half way up.  These mark the active record (line) for
       optional editing or modifying.

            F7 - delete the active record
            F8 - undelete the active record (prior to any motion)

            To Modify the active record press ENTER.  The cursor will
            appear and the line can then be edited.


            While Modifying:

            F7 - delete field       F8  - undelete field
            F9 - repeat field       F10 - move to next field

            After editing a record, press F4 or press ENTER on the last
       field to make the change or press ESC to leave the record
       unchanged.



            15.  ARRANGE


            Here is where the sorting takes place.  It is recommended
       that the data be sorted prior to Output or Exiting the program if
       the data has been modified.  The program will prompt about
       sorting in these instances.  If so, select the type of sort
       desired for the file.  Refer to 10. File #'s for sorting details.

            To pre-define the sort to use with a specific data file, add
       an entry to the file with a File # of !! followed by the desired
       sort.  Possible options are:

                 File #                Sort

                 !!a                 - ASCII
                 !!ascii             - ASCII
                 !!Standard          - Standard

            The -= Description Numbers =- prompt and the field names
       prompt are also changed by adding entries with File # !!.  If
       this is desired, then refer above to 18. Customizing for details;
       otherwise, make sure the Desc. # fields for this entry are left
       blank.

                               ASCII

            Sorts by File #, Section, Desc. #, then Desc.


                         Standard & Method

            Sort in order by File #, Section, Desc. #, then Desc.

            Within a group of File #'s:
            Desc. #'s 0 - 4 precede Desc #'s 5 - 9.



            16.  OUTPUT


            The data in a file can be output many ways.  By responding
       to a series of prompts and menus the specific type of output is
       selected.

            First choose:

            All      - The entire current file.
            Some     - Part of the current file.
            Multi    - Outputs from selected disk file(s).  The
                       names of up to 60 data files in the current
                       directory appear on screen.  Position the
                       block cursor over the files to use for the
                       report in the order desired and press ENTER.

            If Some or Multi is selected, the next step is to determine
       which records to output.  This is done by filling in a series of
       sample records with the desired values.

            From, To - Limit the range of the report.
            Match    - Enter values to equal.
            And, Or  - Enter an additional set to match.

            And - both sets of values must match, Or - either set.

            From & To values are inclusive.

            Case (upper-case or lower-case) is significant in From & To.
       With Match & And/Or the program will ask whether or not to
       consider the case.

            With the Method numbering system a '*' followed by the
       month-day as a File # will specify a date range - *5 will be
       interpreted as May.  Remember that with the Method system 01 is
       November and 02 is December.


            As the sample records are filled in, the current selections
       are shown at the top of the screen.  The program remembers prior
       selections for ease of entry.  When doing more than one report,
       make sure that the top of the screen has only the desired values
       for the current report.



            The following are some sample criteria as they would appear,
       along with a description of their effect.

                   File #   Section   Description       Desc. #

         From   :  87-3                                       1
         To     :  87-8                                       4
         Match  :
         And/Or :

            This would output all records from 87-3 to 87-8 with
       Description numbers 1 thru 4.


         From   :
         To     :
         Match  :  87-8               FOG
         And/Or :

            This would output all records that included 87-8 in
       their File # and had the word FOG in their description.


         From   :                                             7
         To     :                                             9
         Match  :  87                 Montana
         And    :                     streams

            This one outputs records with Description #'s from 7 to
       9, whose File #'s have 87 in them and Descriptions that
       contain both Montana and streams.

            The And criteria is most useful when entries are
       grouped by File # or Section as described next.


            The program will prompt for how to group the entries:


            Entry    - Individual entry lines that meet the
                       selected criteria are output.  There is a
                       blank line between different File #'s, with
                       as many lines per screen or page as fit.

            File #   - All entry lines with the same File # are
                       regarded as a group.  If any combination of
                       its lines meet the reports criteria then the
                       entire group is output.  One group to a page
                       or screen.

            Section  - Entry lines with the same File # & Section
                       are a group.  There are blank lines between
                       groups, with as many groups per page or
                       screen as fit.



            Label    - Similar to Section Output with a label
                       format and optional Frame # processing of
                       the Section field.

                       If Label is selected, the program will ask
                       if the Sections are Frame #'s.  Refer to 11.
                       Section Field for details on Frame #'s.  All
                       the Frame #'s for a particular File # are
                       Output together unless specific Frame #'s
                       are specified with From, To, Match, And/Or.

            Labels:

            Use pin feed 1 across labels (one column of labels wide).
       The default label size is three lines.

            For standard address labels of 3 1/2" x 15/16" select a
       Label size of 5 lines.

            For 35mm photographic slides, use 1 11/16" by 7/16" labels.
       Choose Small print.  Foil backed archival labels are available in
       this size.

            Regular commercial 2 3/4" by 7/16" labels are also useful
       for slides.  They are wider than a 35mm slide mount and need to
       be trimmed or wrapped around to fit.

            Small Print outputs compressed print at 8 lines to the inch
       with standard Dot Matrix printers.

            Now pick where to send the report:

            Screen   - The report is sent to the screen.  It's a
                       good idea to preview reports that are going
                       to the printer or a file by sending them to
                       the screen first.

            File     - Use any filename.  This format (with the
                       extension .ASC) can be read back into the
                       program with the Input - Import a File menu
                       option.

            Printer  - Report will go to the printer.  Reports
                       format differently depending on whether they
                       are by Entry, File #, Section or Label.  See
                       just above for details.

            The following printing options are available:

            Header text will print at the top of each page.
            Page numbers are centered at the bottom of each page.
            The program prompts about single sheet or form feed paper.
            Press the Space Bar to pause while printing.


            For other formatting options, Output to a File and then
       print with any word processor that imports ASCII files.



            17.  SETUP


            No setup is required.  The program automatically adjusts to
       the computer it is running on.  Use Setup to change these initial
       values if desired.

            After setting new values in Setup, the program will prompt
       whether to "Use these values?".  Answer yes to try them, they
       will be in effect until the program is exited or they are changed
       again.  Answer no to return to the values that were in effect
       prior to selecting Setup.

            Upon answering yes to use the values, the program will
       prompt "Write them to disk?".  Answer yes to have them stored in
       the file "ABSTR.INI" and used from then on.

            When the program is started it looks for "ABSTR.INI" in the
       currently active directory.  If it is found, the selected values
       are read from the file and used.  These options are easily
       modified within the program.  To return to the initial values,
       just Delete the file "ABSTR.INI".


            The Setup options are:

            Path     - Where the program initially looks for Data
                       files.  If a Path is not set, the program
                       uses the drive and directory that the
                       program is started from.


            Sounds   - The options are:

                       - Silent
                       - No Beep: The only sound will be a short
                         one after sorting is finished.
                       - Full sound: Adds a beep tone.  It also
                         sends certain screen messages through DOS
                         for speech output devices.


            Colors   - If the computer in use supports graphics
                       (either colors or shades of one color) then
                       these colors or shades can be adjusted.


            The colors are adjusted with the cursor keypad.  Make sure
       that Num Lock is off.  The Home key moves between the regular and
       reverse group and the Up & Down Arrows move between categories.
       The Left Arrow key rotates through the text colors and the Right
       Arrow key rotates through the background colors.

            The reverse color set is used for contrast.

            As options are changed, the colors will change on the
       screen.  When finished press END or ESC.



            Display  - A graphics display adapter can be set to
                       Monochrome or Color.  If snow appears on the
                       screen, select a No Snow option.  This only
                       occurs with CGA adapters.


            Other    - The -= Description Numbers =- prompt, the
                       field names prompt, and an automatic sort
                       are definable for individual data files.
                       See 19. Customizing and 15. Arrange for
                       details.



            18.  COMPLETE


            There are four options for updating the data file, exiting
       the program or opening a new data file.  As entries are added
       they are stored in the computers RAM memory.  When the power is
       turned off they will be gone.  It is therefore important to write
       them to a disk file on a regular basis.  This is done
       automatically with all of the below options except "No update
       exit".  The files will only be written if the data has been added
       to or changed.


            Update & stay  - Writes current data to disk.  For periodic
                             use when adding data.

            Exit & update  - If data has changed during this session and
                             has not been sorted, the program will
                             prompt to sort and then write the data to
                             disk.

            No update exit - Exit program without writing data to disk.

            Open another   - Open another file.


            A backup copy is retained each time data is written to disk.



            19.  CUSTOMIZING


            Certain modifications are possible on a file by file basis.
       The text in the -= Description Numbers =- prompt box that appears
       on screen when Adding entries, as well as the field name prompts,
       can be changed.  An auto-sort can also be specified.

            When Abstract uses a data file, it looks for up to six
       entries whose File #'s are !!.  Exclamation points are used
       because they sort (Arrange) to the beginning of the files.

            If the !! is followed by an A, S or M then Abstract will
       automatically Arrange with a ASCII, Standard or Method sort.
       15. Arrange has more details on this.


            The Section fields of these File #: !! entries control the
       field name prompts.

            File #    Section        Description               Desc. #

            !!        1. Last Name
            !!        2. First Name

            This example replaces the prompts "File #" with "Last Name"
       and "Section" with "First Name" but leaves "Description" and
       "Desc. #" unchanged as shown below.

                 File #      :            Last Name   :
                 Section     :            First Name  :
                 Description :            Description :
                 Desc. #     :            Desc. #     :


            To change the -= Description Numbers =- prompt, use up to
       six entries with the File #: !! and make their Desc. #'s from 1
       up to 6. The Description fields of these entries will appear in
       place of the initial -= Description Numbers =- prompt.

            File #    Section         Description               Desc. #

            !!ascii   1. Last Name    0 - Name        5 - Work Phone  1
            !!ascii   2. First Name   1 - Address 1   6 - Work Place  2
            !!ascii   3.              2 - Address 2   7 - Memo        3
            !!ascii   4.              3 - Address 3                   4
            !!ascii   5.              4 - Home Phone                  5

            This example sets the sort to ASCII, changes two field name
            prompts and replaces the -= Description Numbers =- prompt.

            When changing both sets of prompts, make sure to include the
       numbers (1., 2., etc.) at the beginnings of all of the Section
       fields of the File #: !! entries.  As long as the remainder of
       the Section field is blank, the screen prompt will remain the
       same.



            Templates:

            Templates are files that contain only File # !! entries as
       described just above.  Templates make it very easy to start
       additional files of the same type.  Use DOS to copy the template
       to the desired name for the new data file.

            A>COPY RECORD.DAT RECORD87.DAT     <Press ENTER>

            This starts a new file RECORD87.DAT from the template file
       RECORD.DAT.  Enter data into RECORD87.DAT and retain RECORD.DAT
       for starting the next file of it's type.


            20.  PROGRAM DESIGN


            The program has been kept as straight forward as possible.
       This makes use of the data very easy.  Data & Text files include
       only the standard ASCII printing characters (32 - 126 decimal).
       There are no special headers, footers or formatting characters.

            Data files start with the first record consisting of a 12
       character field followed by ones of 14, 35 and then 1.  All
       unused places are spaces (ASCII 32).  There are no field or
       record separators.  One record follows the next till the end of
       the file which is a ^Z (ASCII 26).

            Starting with version 1.1 the Data files first record is a
       header.  It is the same size as a regular record.

                1         2         3         4         5         6
       12345678901234567890123456789012345678901234567890123456789012

       { Abstract }{version 1.1 }{                                 }}

            ASCII text files are one record per 65 character line.  Any
       editor or word processor that has an ASCII mode (or that can
       import & export ASCII) can be used with a Text file.  There are
       many reasons for doing this.  First off, data from this program
       can then be easily used in other documents or programs.  Another
       reason is for convenient substantial editing of a file, which
       would then be imported back into the program.  Files can be
       printed using one's preferred word processor's formats.

            Text files are one record per line with a space between each
       field and a Carriage Return/Line Feed (ASCII 13/10) between each
       record that has the same File # (first 12 characters field) and 2
       CR/LF's between records with different File #'s.

                1         2         3         4         5         6
       12345678901234567890123456789012345678901234567890123456789012345

       87CA-34      12             Park bench                          6
       87CA-34      2-24           Trees blowing in the wind           6

       87SF-75      2,5,10         Street Car Festival                 6



            21.  ACKNOWLEDGMENTS


            Thanks to the other members of Modula-2 Users of the Bay
       Area (M2UBA).  Also to Amey Garber, Gerson Lesnick, Robert
       Weinstein, Marty Isserlis, Paul Medina, Tom Karnes & Deena.



            22.  INVOICE


            For those at organizations that need an invoice, the
       following one is included.  Refer to 2. Program Distribution
       above for details.

            This Invoice is easily printed by positioning it on the
       computer screen and then holding down the Shift key and pressing
       Print/Screen with the printer on.




       Richard Lesnick                              INVOICE
       P.O. Box 14633
       San Francisco, CA 94114
                                      Date: ___________________________

                                      Invoice # (optional):____________
       Registered by:

          ________________________________________________________

          ________________________________________________________

          ________________________________________________________

          ________________________________________________________

       Permission is granted to the above for use of Abstract
       version 1.1 on one computer for:
                                               (please circle one)


                 Light usage within an organization        $ 25.00

                 Substantial usage within an organization  $ 50.00





            23.  INDEX                   (#'s refer to sections)


       !                                 E
       !!, 4, 15, 19                     Editing, 14
                                         Entry, 16
       A                                 Exit & Update, 18
       ABSTR.INI, 2, 17, 20
       ACKNOWLEDGMENTS, 21               F
       Active record, 14                 Field names, 19
       Address, 2                        File #, 16
       All, 16                           FILE #'s, 10
       And, 16                           File Data - Desc. #, 12
       ARRANGE, 15                       File Labeling Systems, 10
       Arrow keys, 13                    File report, 16
       ASC files, 9                      Filenames, 6, 9
       ASCII files - tech., 20           Files, 9
       ASCII sorting, 10, 15             Fixed disk, 5
       ASCII text files, 9               Floppy disk, 9
       Auto sorting, 15                  Formatting, 16
                                         Frame #'s, 11
       B                                 From, 16
       Backup .BAK, 18                   Function keys, 13, 14
       Beep, 17
       Browsing, 14                      H
                                         Hard disk, 5
       C                                 Hardware, 5
       Case sensitive, 16                Header, 16
       Categories, 12                    Help, 8
       Change directory, 9
       Color, 17                         I
       Color display, 17                 Import a File, 13
       Command line, 9                   Info, 8
       COMPLETE, 18                      INPUT, 13
       Compressed print, 16              Insert, 13
       Computer, 5                       INSTALLATION, 5
       Configuration, 17                 INTRODUCTION, 1
       CONTENTS, 1                       INVOICE, 22
       Copying, 5
       CRC, 5                            K
       Cursor keys, 13                   Keyboard, 13
       CUSTOMIZING, 19
                                         L
       D                                 Label, 16
       DAT files - tech, 20              Labeling systems, 10
       Data files, 9                     Labels, 11, 16
       Data path, 17                     Line, 14
       Default Desc. #'s, 12
       Description #'s, 12, 15           M
       DESCRIPTION FIELDS, 12            Match, 16
       Directory, 9                      Memory, 18
       DISCLAIMER, 3                     Menus, 8
       DISK FILES, 9                     Method, 15, 16
       Display, 17                       Method sorting, 10, 11
       Display - tech, 20                Modifying, 14
       DISTRIBUTION, 2                   Monochrome, 17
                                         Mouse, 8, 14



       Multi, 16                         U
                                         Update & Stay, 18
       N
       No Update Exit, 18                W
                                         Word processor, 12, 16
       O
       Open Another, 18                  Y
       Or, 16                            Yes/No, 8
       OUTPUT, 16

       P
       Page #'s, 16
       Path, 9, 17
       Place, 14
       Printer, 16
       PROGRAM DESIGN, 20
       Program files, 2
       PROGRAM OVERVIEW, 8
       Prompts, 19

       Q
       QUICK START, 4

       R
       Registration, 2
       REGULAR START, 6
       Repeat, 13
       Reports, 16
       Review, 6, 13, 14

       S
       Saving, 18
       Screen colors, 17
       Screen prompt, 12
       Screen report, 16
       Section, 16
       SECTION FIELD, 11
       SETUP, 17
       Sheet feed, 16
       Slide labels, 16
       Small print, 16
       Some, 16
       Sorting, 15
       Sounds, 17
       SPEECH OUTPUT, 7
       Standard, 15
       Standard sorting, 10, 11

       T
       Talking Programs, 7
       Technical details, 20
       Templates, 19
       Text files, 9
       To, 16                            (#'s refer to sections)


```
{% endraw %}

## FILE1300.TXT

{% raw %}
```
Disk No: 1300
Disk Title: Abstract
PC-SIG Version: S1.3

Program Title: Abstract
Author Version: 1.1
Author Registration: $15.00 to $50.00
Special Requirements: Dot matrix printer.

ABSTRACT is designed for cataloging and labeling photographs and other
similar items such as sound recordings, video tapes, motion pictures,
computer disks, paintings, etc.  It can also be used for other database
applications such as addresses, suppliers, lists, etc.

Each photo/tape/disk is described in a record that has four sorting
fields and fits on a single line for easy printing and reviewing.  The
four fields represent categories of your choice, such as roll number,
item number, frame number, name, description, date, subject matter,
etc.  Records can be sorted, edited, searched, viewed, and printed as
reports, as well as labels to fit both slides and prints.

Each database holds 950 entries, but multiple databases can be joined
for searching.  Pull-down menus and help screens lead you through every
option.  Mouse compatible.

File Descriptions:

ABSTR    DEF  Mouse definition file.
ABSTR    EXE  Main program.
ABSTR    MNU  Mouse menu file.
ABSTRACT DOC  Documentation.
CRC      DOC  Manual for CRC.EXE.
CRC      EXE  CYCLIC-REDUNDANCY-CHECK program.
CRCKLIST CRC  Text file.
DEFAULTS      Default constants.
DETAIL   DAT  Data file.

PC-SIG
1030D East Duane Avenue
Sunnyvale, Ca. 94086
(408) 730-9291
(c) Copyright 1988,89 PC-SIG, Inc.

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                 <<<<  Disk No 1300 ABSTRACT  >>>>                       ║
╠═════════════════════════════════════════════════════════════════════════╣
║   To print the documentation, type:  MANUAL (press enter)               ║
║                                                                         ║
║   To run the program ABSTRACT, type:  ABSTR (press enter)               ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## NEW.DOC

{% raw %}
```

     NEW.DOC             Abstract version 1.1             5/10/89

     Abstract continues to evolve.  Most of the changes from earlier
     versions are minor and self explanatory, such as alphabetically
     sorted directories.  There is one area of change worth noting
     for users of Abstract prior to version 1.1.

     File handling is slightly different.  ASCII text files used to
     have the extension TXT.  They now have the extension ASC.  To
     use earlier TXT files with version 1.1, simply rename their
     extensions to ASC:

     C:> RENAME SAMPLE.TXT SAMPLE.ASC


     Data files now include a header.  If you try to open a file
     with the extension DAT that isn't an Abstract data file, the
     program will prompt:

         The selected file is not a current Abstract file.
     Open it anyway (y/n)?

     If the file is from an earlier version of Abstract, type y to
     open it anyway.  At this point, the file will not be changed.
     To verify that this is an Abstract data file, use Review.

     If the file is modified by adding new entries, editing any
     entries or sorting; then when it is written to disk, it will be
     in the new data file format.  For more details about the
     header, please refer to the Program Design section of
     ABSTRACT.DOC.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1300

     Volume in drive A has no label
     Directory of A:\

    1_SAMPLE DAT      1861   5-10-89   2:16p
    2_SAMPLE DAT      2171   5-10-89   2:16p
    A        BAT         8   5-10-89   8:23p
    ABSTR    DEF       557  12-27-87   9:43p
    ABSTR    EXE    101019   5-10-89   8:43a
    ABSTR    MNU       210  12-27-87   9:43p
    ABSTRACT DOC     57169   5-12-89   9:19a
    FILE1300 TXT      1485   9-28-89   9:35a
    GO       BAT        38  10-19-87   3:56p
    GO       TXT       540   9-28-89   9:16a
    MANUAL   BAT       164   9-21-89   9:38a
    NEW      DOC      1337   5-10-89   9:02p
    README            1191   5-12-89   9:20a
    T_ADDRS  ASC       336   5-10-89   2:17p
    T_ADDRS  DAT       373   5-10-89   2:17p
           15 file(s)     168459 bytes
                          144384 bytes free
