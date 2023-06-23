---
layout: page
title: "PC-SIG Diskette Library (Disk #2655)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2655/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2655"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## CALENDAR.DOC

{% raw %}
```








     Calendar Keeper                                         Version 3
                             Table of Contents


     Table of Figures  . . . . . . . . . . . . . . . . . . . . .   iii
        Note to shareware trial users  . . . . . . . . . . . . .   iii

     1.   Introduction . . . . . . . . . . . . . . . . . . . . . .   1
        1.1  The Bottom Line . . . . . . . . . . . . . . . . . . .   1
        1.2  Upgrading Calendar Keeper Users . . . . . . . . . . .   1
        1.3  Hardware Requirements . . . . . . . . . . . . . . . .   2
        1.4  Registration  . . . . . . . . . . . . . . . . . . . .   3
        1.5  Product Support . . . . . . . . . . . . . . . . . . .   4
        1.6  Warranty Information  . . . . . . . . . . . . . . . .   4
        1.7  The Association of Shareware Professionals (ASP)  . .   5

     2.   Installation and Setup . . . . . . . . . . . . . . . . .   6
        2.1  Files on distribution diskette  . . . . . . . . . . .   6
        2.2  Files created by Calendar Keeper  . . . . . . . . . .   6
        2.3  Hardware Requirements . . . . . . . . . . . . . . . .   7
        2.4  Installation Procedure  . . . . . . . . . . . . . . .   8
          Hard Disk Installation . . . . . . . . . . . . . . . . .   8
          Floppy Disk Installation . . . . . . . . . . . . . . . .   9

     3.   Starting Calendar Keeper . . . . . . . . . . . . . . .    10
        3.1  Hard Disk Users . . . . . . . . . . . . . . . . . .    10
        3.2  Floppy Disk Users . . . . . . . . . . . . . . . . .    10
        3.3  Starting Calendar Keeper for the FIRST Time . . . .    10

     4.   New to Version 3.0 . . . . . . . . . . . . . . . . . .    11

     5.   Upgrading from a Prior Release of Calendar Keeper  . .    13
        5.1  Upgrading the Calendar Keeper Software  . . . . . .    13
        5.2  Converting Calendar Keeper 2.x files to 3.0 . . . .    14

     6.   Changing Printer Definitions . . . . . . . . . . . . .    15
        6.1  The PDS (Printer Definition Source) File Line-by-Line   16
          If your Wall Calendars have lots of strange characters    17
        6.2  Compiling a New PDF (Printer Definition)  . . . . .    18

     7.   The Pop-Up Calendar  . . . . . . . . . . . . . . . . .    19

     8.   Maintain Calendar Events . . . . . . . . . . . . . . .    21

     9.   Adding Events to the Event DataBase  . . . . . . . . .    26
        Event types supported in Calendar Keeper 3.0 . . . . . .    27
        9.1  Adding a Permanent Event  . . . . . . . . . . . . .    28
        9.2  Adding a Current-Year-Only Event  . . . . . . . . .    30
        9.3  Adding a Consecutive Days Event . . . . . . . . . .    31
        9.4  Adding an Every 'n' Days Event  . . . . . . . . . .    33
        9.5  Adding a Monthly on Day-of-Week Event . . . . . . .    36







     Calendar Keeper

     10.  Selecting a DataBase to Use  . . . . . . . . . . . . .    38

     11.  Drawing a Calendar . . . . . . . . . . . . . . . . . .    40
        11.1 Monthly Wall Calendars  . . . . . . . . . . . . . .    41
        11.2 Week-at-a-Glance Calendars  . . . . . . . . . . . .    43
        11.3 Year-at-a-Glance Calendars  . . . . . . . . . . . .    45
        11.4 Common Calendar Draw Options  . . . . . . . . . . .    47

     12.  Change Program Display Colors  . . . . . . . . . . . .    50

     13.  Program Configuration  . . . . . . . . . . . . . . . .    51

     14.  Reorganize Current DataBase  . . . . . . . . . . . . .    56

     15.  Delete Calendar Data for a Year  . . . . . . . . . . .    57

































     ii                                                      Dataphile







                                                             Version 3

     Table of Figures

     Figure 1 - The Registration Reminder Screen . . . . . . . . .   3
     Figure 2 - Calendar Keeper's MAIN Menu  . . . . . . . . . .    10
     Figure 3 - Pop-Up Calendar  . . . . . . . . . . . . . . . .    19
     Figure 4 - Maintain Calendar Events (Empty DataBase)  . . .    21
     Figure 5 - Maintain Calendar Events Help Screen . . . . . .    22
     Figure 6 - Maintain Calendar Events (ViewEdit)  . . . . . .    23
     Figure 7 - Add Events Type Selection Menu . . . . . . . . .    26
     Figure 8 - Adding a Permanent Event . . . . . . . . . . . .    28
     Figure 9 - Adding a Current-Year-Only Event . . . . . . . .    30
     Figure 10 - Adding a Consecutive Days Event . . . . . . . .    31
     Figure 11 - Adding an Every 'n' Days Event  . . . . . . . .    33
     Figure 12 - Adding a Monthly on Day-of-Week Event . . . . .    36
     Figure 13 - Monthly on Day-of-Week (Select Day) . . . . . .    37
     Figure 14 - Monthly on Day-of-Week (Which Week?)  . . . . .    37
     Figure 15 - Select Calendar DataBase  . . . . . . . . . . .    38
     Figure 16 - Calendar Draw Menu  . . . . . . . . . . . . . .    40
     Figure 17 - Monthly Wall Calendar Draw Options  . . . . . .    41
     Figure 18 - Week-at-a-Glance Calendar Draw Options  . . . .    43
     Figure 19 - Week-at-a-Glance (Select Week)  . . . . . . . .    43
     Figure 20 - Year-at-a-Glance Calendar Draw Options  . . . .    45
     Figure 21 - Draw Options Common to All Calendar Types . . .    47
     Figure 22 - Program Configuration Options Screen  . . . . .    51
     Figure 23 - Program Config (Select Printer) . . . . . . . .    54
     Figure 24 - Delete Calendar Data for Specified Year . . . .    57

        Note to shareware trial users: the graphic figures described
        in this table are not visible in the shareware CALENDAR.DOC
        file.  This is not a form of 'crippling' but simply a
        technical shortcoming associated with ASCII files.  This
        format is useful because it can be printed on any type of
        printer.  Dataphile Software apologizes for any inconvenience
        this may cause.














     Software                                                      iii







                                                             Version 3

     1.   Introduction

        This manual is prepared with the novice Calendar Keeper user
        in mind.  It covers every detail of Calendar Keeper operation.

        Calendar Keeper version 3.0 was designed to be easy to use
        without even referencing this documentation.  The menus are
        straight-forward and easy to understand; Help is available
        from any Calendar Keeper screen and is context sensitive to
        aid the user with the current function; prompt messages are
        given for every type of entry and response to help the user
        determine what action is required and why Calendar Keeper did
        whatever it did.

        1.1  The Bottom Line

        Keep your eyes on the 'bottom line!'  The bottom of your
        screen always displays a help message telling you what you
        should do next.  If an error occurs, Calendar Keeper will
        usually pop-up a dialogue box telling you what happened.

        1.2  Upgrading Calendar Keeper Users

        If you have been using a previous version of Calendar Keeper,
        be sure to read the section titled New to Version 3.0 on page
        11 and especially the section titled Upgrading from a Prior
        Release of Calendar Keeper on page 13.  These cover functional
        differences in this release and also describe the automated
        conversion process from prior versions to the current version
        of Calendar Keeper.


















     Software                                                        1







     Calendar Keeper

        1.3  Hardware Requirements

        Calendar Keeper version 3.0 requires either a hard disk or
        floppy disk with capacity greater than 360 Kb to run.  That
        is, Calendar Keeper can be run from a single 1.2 Mb diskette,
        a single 3.5" (720 Kb or 1.44 Mb), and of course from Hard
        Disk.

        Calendar Keeper requires about 512 Kb available memory, but
        the more memory the better.  If you have Expanded Memory then
        Calendar Keeper will take advantage of it for program and
        data.  The size of your Calendar Data is limited by the amount
        of memory you have and the amount of disk space you have.

        See the section titled Installation and Setup on page 6 for
        more information about setup and hardware requirements.
































     2                                                       Dataphile







                                                             Version 3

        1.4  Registration

        Calendar Keeper is a Shareware software product.  IT IS NOT
        FREE!!  If you use Calendar Keeper beyond a trial period of 21
        days you are obligated to register.

        Shareware is a method software developers use to distribute
        their software products enabling users to evaluate the
        software without buying it.  If after a reasonable evaluation
        period you decide to continue using Calendar Keeper please
        send your license fee of $33.00 to:

          Dataphile Software
          7058 Sandpiper
          Kalamazoo, MI  49002































     Figure 1 - The Registration Reminder Screen

     Software                                                        3







     Calendar Keeper


        1.5  Product Support

        Dataphile Software can be reached by any of the following
        methods:

          1)   Compuserve Mail to PPN 74706,506

          2)   U.S. Mail to the address of

             Dataphile Software
             7058 Sandpiper
             Kalamazoo, MI  49002

          3)   Telephone number (616) 327-7811

        Both Registered and UnRegistered users are encouraged to
        contact Dataphile Software for assistance.

        1.6  Warranty Information

        Dataphile Software offers a 'no questions asked' 90 day
        guarantee effective on date of registration receipt.  If you
        are not satisfied with Calendar Keeper during the warranty
        period your full registration price will be refunded.

        The warranty period has no bearing on the availability of
        technical support.  It is the policy of Dataphile Software to
        provide technical support even after the warranty period has
        expired, and to registered and non-registered users alike.


















     4                                                       Dataphile







                                                             Version 3

        1.7  The Association of Shareware Professionals (ASP)

        Dataphile Software is a member of the Association of Shareware
        Professionals (ASP).  ASP wants to make sure that the
        shareware principle works for you. If you are unable to
        resolve a shareware-related problem with an ASP member by
        contacting the member directly, ASP may be able to help. The
        ASP Ombudsman can help you resolve a dispute or problem with
        an ASP member, but does not provide technical support for
        members' products. Please write to the ASP Ombudsman at 545
        Grover Road, Muskegon, MI 49442-9427 or send a CompuServe
        message via CompuServe Mail to ASP Ombudsman 70007,3536.




































     Software                                                        5







     Calendar Keeper

     2.   Installation and Setup

        2.1  Files on distribution diskette

            CALENDAR.EXE   - The Calendar Keeper program
            CALENDAR.HLP   - Online HELP information (required for online help)
            CALENDAR.IDX   - HELP index file (required for online help)
            CALENDAR.PDF   - Printer Definition File
            CALENDAR.PDS   - Source for the delivered Printer Definition File
            CAL30PDF.EXE   - Printer Definition File generator program.  See section
                              titled Changing Printer Definitions on page 15 below
                              for instructions regarding the use of the CAL30PDF
                              program.
            REGISTER.FRM   - Calendar Keeper Registration Form
            CALENDAR.DOC   - Calendar Keeper Documentation

         2.2  Files created by Calendar Keeper

            CALENDAR.CNF   - Calendar Keeper Configuration File
            CALNDR??.DAT   - Calendar Keeper Event DataBase Files (?? can be 00 -
                              09)
            CALNDR??.21B   - Prior version data files after conversion  (?? can be
                              00 - 09)
            CALENDAR.21B   - Prior version configuration file after conversion

            Warning:  In release 3.0, the CALENDAR.CNF and CALNDR??.DAT
          files contain internal control/index information which can
          only be maintained by the CALENDAR.EXE program!  Editing
          these files outside of the Calendar Keeper environment or
          deleting a file with the DOS delete command will result in
          unpredictable responses by Calendar Keeper.

















     6                                                       Dataphile







                                                             Version 3

        2.3  Hardware Requirements

        Calendar Keeper 3.0, in its 'unpacked' form, takes up
        approximately 400 Kb of disk space if the CALENDAR.DOC file is
        not kept on the same diskette/directory.  The amount of space
        required increases as you add events to your calendar
        databases.  Each event adds 64 bytes (characters) to the
        target calendar database.  Thus, if you are running Calendar
        Keeper from a 720 Kb 3.5" diskette you can expect to be able
        to add over 5000 events without running out of space.

        Calendar Keeper version 3.0 requires a minimum memory
        configuration amount of 512 Kb.  Calendar Keeper may 'load'
        into less memory but the number of events you will be able to
        create (per database) will be limited.

        Calendar Keeper runs fine off a network drive but be sure to
        have a registered copy of the program for each user (quantity
        discounts are available).  Each user should be assigned a
        unique storage path which must contain the CALENDAR.HLP and
        CALENDAR.PDF files as well as any user CALNDR??.DAT files. 
        The only 'sharable' file is the CALENDAR.EXE program itself.


























     Software                                                        7







     Calendar Keeper

        2.4  Installation Procedure

        Note to Calendar Keeper 2.x users.  Be sure to read the
        section titled Upgrading From a Prior Release of Calendar
        Keeper starting on page 13 for notes concerning upgrading to
        Calendar Keeper version 3.0 .

          2.4.1   Hard Disk Installation

          2.4.1.1   Create a Directory for Calendar Keeper

                  C:\> MD \CALENDAR

          2.4.1.2   Make the new Directory the 'Current' one

                  C:\> CD \CALENDAR

          2.4.1.3   Execute the installation program.  Calendar Keeper
               version 3 is distributed as a self-extracting archive. 
               Executing this program will 'unpack' the distribution
               files.  Assuming the distribution diskette is in drive
               A: you should type the following command to install
               Calendar Keeper ...

                  C:\CALENDAR> A:CAL30

          2.4.1.4   That's all there is to it!  Store your
               distribution diskette in a safe place.  See the section
               titled Starting Calendar Keeper on page 10 below for
               start-up instructions.


















     8                                                       Dataphile







                                                             Version 3

          2.4.2   Floppy Disk Installation

          2.4.2.1   Create a 'working copy' of the Calendar Keeper
               distribution diskette and put away your original in a
               safe place (example assumes diskette in drive A:)

                  A:\> DISKCOPY A: A:

          2.4.2.2   Execute the installation program.  As described
               above, Calendar Keeper version 3.0 is distributed as a
               self-extracting archive.  Executing this program will
               'unpack' the distribution files.

                  A:\> CAL30

          2.4.2.3   Delete the self-extracting archive from your
               working copy to leave more room for event data.  Do NOT
               delete the self-extracting archive from the
               distribution diskette!

                  A:\> DELETE CAL30.EXE

          2.4.2.4   See the section titled Starting Calendar Keeper on
               page 10 below for start-up instructions.
























     Software                                                        9







     Calendar Keeper

     3.   Starting Calendar Keeper

        3.1  Hard Disk Users

          3.1.1   Make the Calendar Keeper directory the 'current'
               directory.

               C:\> CD \CALENDAR

          3.1.2   Start Calendar Keeper.

               C:\CALENDAR> CALENDAR


        3.2  Floppy Disk Users

          3.2.1   Insert the Calendar Keeper diskette into any floppy
               drive and make that the current drive (this example
               assumes A: to be the current floppy disk drive).  Start
               Calendar Keeper by running the main program.

               A:\> CALENDAR

        3.3  Starting Calendar Keeper for the FIRST Time

        Calendar Keeper requires the presence of two files that are
        not distributed on the distribution diskette.  These are the
        CALENDAR.CNF and CALNDR00.DAT files.  These files are not
        distributed because they are created the first time you start
        Calendar Keeper and remain unique to your configuration.

        The first time you start Calendar Keeper you will see three
        prompts warning you that these required files are not present
        and asking whether or not your monitor supports color.  You
        have the choice of replying to these prompts or pressing
        <Escape> to terminate the start-up process.

        If you ever see these prompts again (after the first start-up)
        then something is wrong!  Note: Calendar Keeper will never
        delete these files.  If they are not found then you probably:
        (a) are using the wrong directory or data diskette;
        (b) deleted them yourself somehow.

        Note to Calendar Keeper 2.x users.  Be sure to read the
        section titled Upgrading From a Prior Release of Calendar
        Keeper starting on page 13 for notes concerning the first time
        you start Calendar Keeper version 3.0 .

     10                                                      Dataphile







                                                             Version 3

     4.   New to Version 3.0

        Calendar Keeper version 3.0 is virtually a re-write of the
        Calendar Keeper system!  It has much, much more functionality
        than the Calendar Keeper 2.x and has additional reports added
        too.  Rather than repeating the entire manual in this section,
        only major functional differences appear here.

        4.1  There is no longer any limit to the number of events you
             can have on a single day or within a given calendar event
             database (except as limited by your available memory and
             disk space).  The only real exception to this is on the
             Wall Calendar report which has a limit to the number of
             events it can physically fit into a calendar day 'box.'

        4.2  Context sensitive help available from any Calendar Keeper
             screen or prompt.





























     Figure 2 - Calendar Keeper's MAIN Menu

     Software                                                       11







     Calendar Keeper

        4.3  A Pop-Up calendar is now available from any Calendar
             Keeper screen or prompt.  This is especially useful when
             entering event information.  Can't remember the right
             date for your new event as you enter it ... press <F2> to
             display the Pop-Up calendar!

        4.4  Virtually ANY printer is now supported by Calendar
             Keeper!  Six printer drivers are distributed with
             Calendar Keeper, and a printer driver generation utility
             is included to create your own printer driver if
             necessary (see section titled Changing Printer
             Definitions on page 15 ).  And, NO, you don't have to be
             a rocket scientist to use this utility.

        4.5  Calendar Keeper now supports five different event types:
             current year only events; permanent events; consecutive
             days (range of dates); every 'n' days events; monthly on
             day-of-week events.

        4.6  In addition to the existing Wall Calendar format,
             Calendar Keeper now has a Week-at-a-Glance and Year-at-a-
             Glance report.

        4.7  Calendar Keeper now makes much better use of memory and
             disk space.  Only event dates which are in use have any
             memory or disk space reserved for them.

        4.8  Data is retained until you want to delete it.  While
             Calendar Keeper will only display one year at a time in
             the ViewEdit window, you can <F9> page back and <F10>
             page forward from year to year within a database.  All
             events (including Current Year Only events) are retained
             until you delete them with the <D>elete event or 'Delete
             YEAR' functions.














     12                                                      Dataphile







                                                             Version 3

     5.   Upgrading from a Prior Release of Calendar Keeper

        If you have been using Calendar Keeper 2.x then you're in for
        a treat.  Calendar Keeper 3.0 uses a menu-driven interface
        very similar to previous versions, but has a great deal more
        functionality.  Be sure to read the section titled New to
        Version 3.0 starting on page 11 for a discussion of major
        feature differences.

        5.1  Upgrading the Calendar Keeper Software

        As described in the Installation Procedures on page 8,
        Calendar Keeper 3.0 is delivered as a self-extracting archive. 
        Before following the install procedures you should first
        perform the following steps:

          5.1.1   Backup your Calendar Keeper directory

               C:\CALENDAR> COPY *.* A:

          5.1.2   Delete your old Calendar Keeper Main Module

               C:\CALENDAR> DELETE CALENDAR.EXE

            5.1.3 Install Calendar Keeper 3.0 into your old directory so Calendar
                  Keeper can continue to use the same configuration and database
                  files.

        You should now continue with the installation procedures as
        described on page 8.  After installation is complete, return
        to the discussion of conversion to Calendar Keeper 3.0 which
        begins on page 14.
















     Software                                                       13







     Calendar Keeper

        5.2  Converting Calendar Keeper 2.x files to 3.0

        Conversion is an automatic process.  The FIRST time you use
        Calendar Keeper 3.0 a dialogue window will appear to warn you
        that conversion is about to take place.  You have the option
        of confirming or aborting the conversion process (aborting the
        process will cause 3.0 to return you to the DOS prompt). 
        Press <Enter> to confirm the conversion process, press
        <Escape> to exit this process.

        All of your data files and configuration preferences will be
        carried forward into version 3.0.  Check the Program
        Configuration screen anyway to verify your preferences and to
        review the many new configuration options.

        There is a fundamental difference between the way data is
        stored in Calendar Keeper 3.0 versus prior releases.  Prior
        releases had four lines of data per day, but 3.0 will store an
        unlimited number of events for any day.  In the conversion
        process the conversion program creates a new event for each
        line of data you had in your old database.  Thus if you had an
        event with two lines of text data (and two blank lines) your
        new database would contain two successive events each
        containing one line of data from the old event.

        It goes without saying that some editing will be necessary on
        your part to get things just the way you want them, but most
        of the work is done for you.

        Your old data and configuration files will be renamed in the
        conversion process.  Their new names will be CALNDR??.21B and
         CALENDAR.21B (where ?? is 00 - 09 for each of your old database
        files).  These files are no longer necessary but are saved for
        you to delete at your convenience.  Please check to insure
        that all your data looks right before deleting the old files. 













     14                                                      Dataphile







                                                             Version 3

     6.   Changing Printer Definitions

        Calendar Keeper 3.0 is delivered with six common printer
        drivers.  If yours is not named try the IBM Proprinter driver
        as many other printer manufacturers have emulated the
        Proprinter command format.  If all else fails you can easily
        add your printer's commands to the printer definition file. 
        You'll need your printer manual so have it handy.

        Two files and a utility program are delivered on your Calendar
        Keeper 3.0 distribution diskette.

        CALENDAR.PDS - Printer Definition Source file
         CALENDAR.PDF - Printer Definition File (compiled)
         CAL30PDF.EXE - Printer Definition Compiler (creates PDF)

        Basically, all that is required is to edit the PDS (source)
        file and then compile it using CAL30PDF to create a new PDF
        file.  It is the PDF file which is used by Calendar Keeper
        during the print process to send printer commands to your
        printer.

        Note: You Must Re-Select your printer type (option 'P' in
        Program Configuration) whenever you re-compile the PDF file!!! 
        Failure to do so may result in the production of some strange
        looking things on your printer where you thought a calendar
        was going to appear.

        Please note that each entry in the PDS file is separated by a
        blank line.  This is for clarity only (it's not really
        necessary) but it is recommended.  Also note that the first
        two entries in the PDS file are for 'DOS Text Printer' and 'HP
        LaserJet' respectively.  Please leave these where they are
        even if you don't use them.  Calendar Keeper assumes that
        these will be where they are, and will respond accordingly
        whenever printers (1) or (2) are selected.  The special
        features associated with these printers are discussed further
        in the section titled Program Configuration on page 54.

        The following is an extract from the PDS (Printer Definition
        Source) file.  It is the printer definition for an Okidata
        193+ for IBM.


         $Okidata ML 193+ IBM Okidata ML193+ in IBM Mode
         RESET=/027/024       Master reset


      Software                                                       15







      Calendar Keeper

         INITS=/027/033/065   Select zero with no slash
         FONTS=/255           No font selection
         17CPI=/015           17 characters per inch
         10CPI=/018           10 characters per inch
         SUBSO=/027/083/049   Subscript ON
         SUBSF=/027/084       Subscript OFF
         NLQON=/027/073/051   Near Letter Quality ON
         NLQOF=/027/073/049   Near Letter Quality OFF
         FFEED=/012           Form Feed


        The order of each line above is not optional!  In fact, the
        first six characters of each line are not even read by the
        CAL30PDF compiler program.  This text is specified for your
        benefit only.  Also, it is essential that you include all
        eleven lines of each printer definition.  Leaving out any part
        of a printer definition will cause unpredictable results when
        you run CAL30PDF.

        Time to get out your printer manual!  Your manual probably
        offers more than one way to specify a command for your
        printer; one of which will be a decimal command.  This is the
        one you should specify in the PDS file.  Always specify the
        decimal commands as three-digit numbers separated by a slash
        (/).  For example, the decimal digit '1' is specified as /001. 
        Up to 20 decimal 'commands' may be specified on any line.

        Specify /255 for any functions your printer does not support.

        A blank space always indicates the end of the current command
        line.  Any text following the first space will be considered
        comments only.


        6.1  The PDS (Printer Definition Source) File Line-by-Line

        ($)    The ($) dollar sign tells the PDF compiler program that
          this is the beginning of a new printer definition.  Twenty
          (20) characters of description may be specified for the
          printer name.  The 21st position to the end of the line are
          considered to be comments only.

        (RESET)   The RESET command should specify your printer's
          Master Reset command.  It is sent to the printer at the
          beginning and end of each print session.



     16                                                      Dataphile







                                                             Version 3

        (INITS)   INITS is short for 'Initialization String.'  Use
          this command line to specify any options you'd like to make
          your calendars more appealing (the example turns off the
          Okidata default of zeros with slashes through them).  INITS
          is sent to your printer at the beginning of each print
          session, after the RESET command.

        (FONTS)   Font Selection command string.  The FONTS command
          string is sent to your printer immediately after the INITS
          command at the beginning of each print session.  Use this
          command to select the correct print 'font' or 'character
          set.'  For instance, extended ASCII characters are not
          supported in the default HP LaserJet character set, but you
          can use FONTS to switch to a character set that does support
          these characters.

          If your Wall Calendars have lots of strange characters
          instead of nice boxes surrounding your event text then
          either: (1) your printer does not support the 'box' edge
          characters which are a part of the extended ASCII character
          set; or (2) you need to switch to an alternate character set
          in your printer which does support these characters.

        (17CPI)   Specify the command your printer uses to switch to
          its 17 characters-per-inch character type.  Some printer
          manuals refer to this simply as its compressed type.  If
          your printer does not support 17 cpi then pick the character
          density closest to 17.  If you don't use a 17 cpi type then
          you will have to adjust your Wall Calendars left-or-right
          using the Left margin adjustment in Program Configuration. 
          See the section titled Program Configuration section
          starting on page 51 for more on this topic.

        (10CPI)   Specify the command your printer uses to switch to
          its 10 characters-per-inch character type.

        (SUBSO)   Specify the command your printer uses to activate
          SubScript printing.  This command is not used by Calendar
          Keeper 3.0 at any time but is included for compatibility
          with other Dataphile Software products.  You needn't specify
          it if your printer does not support SubScript or even if you
          just don't feel like it.

        (SUBSF)   Specify the command your printer uses to turn off
          SubScript printing.  This command is not used by Calendar
          Keeper 3.0 at any time but is included for compatibility


     Software                                                       17







     Calendar Keeper

          with other Dataphile Software products.  As with SUBSO, you
          don't really have to specify this command.

        (NLQON)   Specify the command your printer uses to turn on its
          Near Letter Quality mode.  If your printer does not support
          NLQ or if NLQ is not necessary (as in any Laser printer)
          then specify /255 instead (the null command).

        (NLQOF)   Specify the command your printer uses to turn off
          its Near Letter Quality mode.  If you specified /255 for
          NLQON then your should specify /255 here as well.

        (FFEED)   Specify your printer's Form-Feed command here.  That
          is, the command to Eject a page.  Nearly every printer in
          the known universe uses /012.

        6.2  Compiling a New PDF (Printer Definition)

        You are free to add up to a total of 12 printer definitions to
        the PDS (source) file.  You must leave the first two
        definitions for the 'DOS Text Printer' and 'HP LaserJet' in
        place (although you are free to modify the printer commands
        associated with them).  You can remove any of the remaining
        delivered printer definitions if you wish.  Alternately, you
        can leave all of these in place and add your new definitions
        to the end of the PDS file.

        After completing any edits on the PDS (source) file all you
        need to do is to run the CAL30PDF program.  Type CAL30PDF on
        the command line and hit <Enter>.  No options are necessary.

        CAL30PDF does not have to be in the 'current' directory but
        must be in a directory which is specified in your DOS PATH
        statement.  It is easiest just to keep it in the same
        directory as your PDS and PDF files.  CAL30PDF uses the
        CALENDAR.PDS file as input and creates a new output CALENDAR.PDF
        file.











     18                                                      Dataphile







                                                             Version 3

     7.   The Pop-Up Calendar

        The Calendar Keeper Pop-Up Calendar -shown here displayed over
        the Calendar Keeper Main Menu- can be displayed at any time by
        pressing the <F2> key.  The current date will remain
        highlighted during Pop-Up display (i.e. the 21st of each month
        will be highlighted if today is February 21st).

        Once the Pop-Up Calendar displayed the following functions may
        be used:

        The up/down arrows (cursor keys) will cause the Pop-Up
        calendar to increment up/down one year at a time.  For
        instance, if February 1991 is displayed you can change the
        display to February 1992 by pressing the UP arrow.

        The left/right arrows (cursor keys) will cause the Pop-Up
        calendar to increment up/down one month at a time.  For
        instance, if February 1991 is displayed you can change the
        display to March 1991 by pressing the RIGHT arrow.


























     Figure 3 - Pop-Up Calendar

     Software                                                       19







     Calendar Keeper

        The <HOME> key will bring the display back to the current
        month no matter what month is displayed in the Pop-Up window.














































     20                                                      Dataphile







                                                             Version 3

     8.   Maintain Calendar Events

        The 'Maintain Calendar Events' selection is the heart of the
        Calendar Keeper system.  Choose selection (1) or press the
        letter 'M' from the Main Menu (the highlighted selection
        letter) to enter the Maintain Calendar Events function.  This
        is also referred to as the ViewEdit window for compatibility
        with prior releases (and for other obvious reasons)

        The illustration below (Figure 4) shows the ViewEdit window
        before any events have been entered for the current display
        year.  There may, in fact, be events present in the selected
        Calendar DataBase but simply not for the year currently
        displayed.  Use <F9> and <F10> to move backward and forward
        (respectively) one year at a time through the Calendar Event
        DataBase.






























     Figure 4 - Maintain Calendar Events (Empty DataBase)

     Software                                                       21







     Calendar Keeper

























     Figure 5 - Maintain Calendar Events Help Screen


        Navigation through an Event DataBase is an easy matter.  An
        important note to keep in mind, however, is that Calendar
        Keeper only displays one year at a time in the ViewEdit
        window.  In other words, if the selected calendar contains
        only five events -one each for New Year's Day for five
        consecutive years- then you would only be able to view one
        event at a time as you paged through the years.  On the other
        hand, this does keep matters from getting confusing as you
        view events in the real world ... in Event DataBases which
        contain many events for each year.

     <Arrows>  Use the up/down arrow keys to move up/down one event at
        a time in the ViewEdit window.  This will not traverse a 'year
        boundary' but can be used to move up or down an event at a
        time within the current year.






     22                                                      Dataphile







                                                             Version 3

     <PgUp/PgDn>  Use the <PgUp> and <PgDn> keys to move up/down one
        full screen of events at a time (12 events at a time).  As
        with the arrow keys, this will not traverse a 'year boundary'
        but will move up and down within the current display year.

     <Home><End>  Use <Home> to move to the first event in the current
        display year.  Use the <End> key to move to the last event in
        the current display year.

     <Ctrl-Home><Ctrl-End>  The <Ctrl-Home> key combination positions
        you at the TOP of the current Event DataBase.  That is, it
        positions the cursor on the first event of the first year in
        the currently selected Event DataBase.  The <Ctrl-End> key
        combination moves you to the last event of the last year in
        the currently selected Event Database.































     Figure 6 - Maintain Calendar Events (ViewEdit)

     Software                                                       23







     Calendar Keeper

     <F2> As described in the section titled The Pop-Up Calendar
        starting on page 19 above, pressing the <F2> key at any time
        will display the Pop-Up Calendar for your reference.

     <F8> The <F8> function key will cause Calendar Keeper to find the
        date closest to 'today' in the currently selected Event
        DataBase.  Thus, if you are reviewing last year's (or any
        other year's) events you can easily navigate back to the
        'today' with <F8>.

     <F9><F10> The <F9> (minus 1 year) and <F10> (plus 1 year)
        function keys move up and down one year at a time through the
        currently selected Event DataBase.  If you move to a year
        which has no events <A>dded into it Calendar Keeper will
        display the 'No Events in DataBase' warning message and will
        limit your options to <A>dd.

     <F>ind  Pressing the 'F' key will display the Find-Date window. 
        Calendar Keeper will prompt you for a date as mm-dd (or dd-mm
        based upon your Program Configuration options).  After you
        enter the desired date and press <Enter> Calendar Keeper will
        position the cursor to the date nearest to the one you
        requested within the current display year.

     <S>earch  Pressing the 'S' key will display the Search-Text
        window.  Calendar Keeper will search for any text you enter
        from the current date to the end of the current display year. 
        Upper and Lower case are not considered during the search. 
        That is, the search arguments 'keeper', 'KEEPER', and 'KeEpEr'
        would all produce the same results.  Partial text is OK, but
        must be an exact match.  That is, 'KEEP' would be considered a
        hit if the actual Event text was 'Calendar Keeper'.

     <Ctrl-S>earch  Works just like <S>earch except searches from the
        current date to the end of the Calendar Event DataBase!

     <E>dit  Places your cursor within the Event text of the 'current'
        event within the ViewEdit window.  You may modify the event
        text in any way, pressing <Enter> to save your changes.  Press
        <Escape> to exit <E>dit without saving changes.

     <D>elete  Pressing the 'D' key causes the event at the cursor
        to be deleted.  A confirmation request will be made prior to
        actual deletion of the event.  To confirm, simply press
        <Enter>, press the <Escape> key to exit the <D>elete request
        without losing your event.


     24                                                      Dataphile







                                                             Version 3

        If the event is part of a Group of Events (as with
        <C>onsecutive, <E>very 'n' Days, and some <M>onthly events)
        you will be presented with a second prompt after you confirm
        the delete process.  The second prompt will ask if you wish to
        delete this single event only, or if you wish to delete the
        entire group.

        Press <Enter> to delete only the single event; leaving the
        remainder of the Group of Events intact.

        Press the <Tab> key to move the cursor to <Group> and then
        press <Enter> if you wish to delete the entire group of
        events.

        Press <Escape> at any time to exit the <D>elete request
        without losing any data.

        Once an Event (or Event Group) has been <D>eleted it can not
        be recovered!  Your only recourse will be to re-enter the
        event if you decide you didn't really mean to <D>elete it.

     <Q>  Use the <Q>uit key to exit the Maintain Calendar Events
        function.  The <Escape> key works, too.

























     Software                                                       25







     Calendar Keeper

     9.   Adding Events to the Event DataBase

        Adding events is really just another selection from within the
        Maintain Calendar Events ViewEdit window.  It is discussed
        here as a separate topic in order to cover it more clearly and
        completely.

        The term 'Event' is used throughout this manual to refer to
        your user data, but there are really several different types
        of events which Calendar Keeper will cheerfully manage for
        you.  Figure 7, below, illustrates the Event Type selection
        menu which is displayed when you depress the <A>dd key from
        within the ViewEdit window.

        The following page summarizes these five event types.































     Figure 7 - Add Events Type Selection Menu

     26                                                      Dataphile







                                                             Version 3

        Event types supported in Calendar Keeper 3.0 include:

        Permanent Events - These events replicate themselves from year
          to year if the Program Configuration option 'Copy Perm
          Events to New Year' is set to 'Yes.'  See page 28 for
          details.

        Current Year Only - These events look just like Permanent
          Events but are one-time events associated with the 'current
          display year' when they are entered.  See page 30 for
          details.

        Consecutive Events - This event type is best used for events
          which span a block of days.  The best example is a vacation
          which may last for several days or weeks.  See page 31 for
          details.

        Every 'n' Days - This event type is used for entry of events
          which repeat on regular intervals.  For example, a meeting
          every Monday, PayDay every other Friday, or perhaps a
          reminder for your status report which is due every 3
          business days.  See page 33 for details.

        Monthly on Day-of-Week - This event type is great for events
          which occur on a certain 'weekday' every month.  How about
          the monthly status meeting which falls on the 2nd Tuesday of
          each month, or perhaps Thanksgiving Day which falls on the
          4th Thursday of November.  See page 36 for details.




















     Software                                                       27







     Calendar Keeper

        9.1  Adding a Permanent Event

        Permanent Events are special in Calendar Keeper 3.0 .  A
        Permanent Event is self-replicating.  That is, once defined, a
        Permanent Event will be automatically copied from year to year
        as you page backward and forward using the <F9> and <F10> keys
        (Events are created with the same date and description in the
        target years).

        To activate the copy process set Program Configuration option
        'Copy Perm Events to New Year' to "YES."  You will be prompted
        for and requested to confirm the copy process.  Simply press
        <Enter> if you wish to copy Permanent Events.  See the section
        titled Program Configuration Options on page 53 for more on
        this subject.

        Use Permanent Events to remind you of Events that recur from
        year to year such as: Holidays, Birthdays, Anniversaries, etc. 
        Once entered, these Events will remain with you forever (or
        until you delete them).


























     Figure 8 - Adding a Permanent Event

     28                                                      Dataphile







                                                             Version 3

        Adding a Permanent Event is simple.  After pressing <A>dd from
        the ViewEdit window follow these 'Add Permanent Event' steps:

        1)   Select <F5> to tell Calendar Keeper that you are adding a
          Permanent Event.

        2)   Enter the Month desired for your Event.  To do so, enter
          a digit (1-12) or a three-character month identifier (such
          as Jan, Feb, Mar, etc) and press <Enter>.

        3)   Enter the Day desired for your Event.  To do so, enter
          the 1 or 2 digit day/date of the Event and press <Enter>.

        4)   Calendar Keeper will supply the Event Year for you using
          the current display year from the ViewEdit window.  If you
          want to enter an Event for a different year you should first
          press <F9> or <F10> as many times as necessary to go
          backward or forward to the desired year.

        5)   Enter the Event Description for your Event.  Calendar
          Keeper will prompt you for up to 10 or 17 characters
          depending on your Program Configuration.  After entering a
          description you are satisfied with press <Enter>.


          You have just successfully added a Permanent Event to your
          selected Calendar Event DataBase.





















     Software                                                       29







     Calendar Keeper

        9.2  Adding a Current-Year-Only Event

        A Current-Year-Only Event looks a lot like a Permanent Event. 
        The only difference is in the fact that C-Y-O Events are one-
        time events that remain associated with the current displayed
        year at the time of their entry.  That's a [sic] piece of
        phraseology meaning that C-Y-O Events do not get copied from
        year to year in the same manner as Permanent Events do.

        Use Current-Year-Only Events to remind yourself of things that
        you want to remember this year only.  For instance, if the
        Watt's are coming over for dinner on June 15, 1991 it is
        unlikely that you want to be reminded of that event on June
        15, 1992.

        Current-Year-Only events are added in exactly the same fashion
        as Permanent Events.  See the previous section beginning on
        page 28 for a discussion of this topic.




























     Figure 9 - Adding a Current-Year-Only Event

     30                                                      Dataphile







                                                             Version 3

        9.3  Adding a Consecutive Days Event

        A Consecutive Days Event is useful for Vacations, Conferences,
        Trips, Projects or any type of event which may span a
        consecutive group of days.

        Consecutive Events are not considered to be permanent in the
        sense that they are not copied from year to year as Permanent
        Events are.

        In Program Configuration is an option named 'Schedule
        Consecutive Events on Weekends' which affects the scheduling
        of these events.  If set to "YES" Calendar Keeper will simply
        schedule the number of days you specify one right after the
        other (i.e. THU, FRI, SAT, SUN, MON, etc).

        Business users may wish to set 'Schedule Consecutive Events on
        Weekends' to "NO" to prevent business activities from being
        scheduled on Saturdays and Sundays.  In this way, if you



























     Figure 10 - Adding a Consecutive Days Event

     Software                                                       31







     Calendar Keeper

        schedule a 5 day project starting on Wednesday, Calendar
        Keeper will schedule it as WED, THU, FRI, MON, TUE.  In a like
        manner, if you take two weeks vacation, you should schedule it
        starting on Monday for a duration of 10 days since the
        intervening Saturday and Sunday won't count as far as the
        schedule is concerned.

        After pressing <A>dd from the ViewEdit window follow these
        'Add Consecutive Days Event' steps:

        1)   Select <F6> to tell Calendar Keeper that you are adding a
          Consecutive Days Event.

        2)   Enter the Month desired for your Event.  To do so, enter
          a digit (1-12) or a three-character month identifier (such
          as Jan, Feb, Mar, etc) and press <Enter>.

        3)   Enter the Day desired for your Event.  To do so, enter
          the 1 or 2 digit day/date of the Event and press <Enter>.

        4)   Calendar Keeper will supply the Event Year for you using
          the current display year from the ViewEdit window.  If you
          want to enter an Event for a different year you should first
          press <F9> or <F10> as many times as necessary to go
          backward or forward to the desired year.

        5)   Enter the Event Description for your Event.  Calendar
          Keeper will prompt you for up to 10 or 17 characters
          depending on your Program Configuration.  After entering a
          description you are satisfied with press <Enter>.

        6)   Enter the number of consecutive days for the event.  You
          must schedule at least 2 days but the upper limit is
          determined only by the size of your DataBase defined in
          Program Configuration.













     32                                                      Dataphile







                                                             Version 3

        9.4  Adding an Every 'n' Days Event

        This event type is used for entry of events which repeat on
        regular intervals such as Every '3' Days or Every '14' Days. 
        For example, a meeting every Monday, PayDay every other
        Friday, or perhaps a reminder for your status report which is
        due every 3 business days.

        Events of the Every 'n' Days type are not considered to be
        permanent in the sense that they are not copied from year to
        year as Permanent Events are.

        Although this is not extremely intuitive, events of the Every
        'n' Days type are also affected by the Program Configuration
        option 'Schedule Consecutive Events on Weekends.'  If this
        option is set to "NO" Calendar Keeper will not count weekends
        as a part of the schedule, and will schedule any events which
        might naturally occur on a Saturday or Sunday into the
        following Monday.  Thus, an event which occurs Every '3' Days



























     Figure 11 - Adding an Every 'n' Days Event

     Software                                                       33







     Calendar Keeper

        starting on a Monday would be scheduled as MON, THU, TUE, FRI,
        WED, MON, THU, etc.

        With a little imagination one can see how this event type can
        be useful to schedule an event which occurs every Monday
        (starting on Monday; occurs every 7 days) or every 3rd Friday
        (starting on Friday; occurs every 21 days) or perhaps simply
        to remind you to perform a task on a sort-of-regular interval
        such as every 8 business days (starting on some date; occurs
        every 8 days; 'Schedule Consecutive Events on Weekends' set to
        "NO").

        After pressing <A>dd from the ViewEdit window follow these
        'Add Every 'n' Days Event' steps:

        1)   Select <F7> to tell Calendar Keeper that you are adding
          an Every 'n' Days Event.

        2)   Enter the Start Month desired for your Event.  To do so,
          enter a digit (1-12) or a three-character month identifier
          (such as Jan, Feb, Mar, etc) and press <Enter>.

        3)   Enter the Start Day desired for your Event.  To do so,
          enter the 1 or 2 digit day/date of the Event and press
          <Enter>.

        4)   Calendar Keeper will supply the Event Year for you using
          the current display year from the ViewEdit window.  If you
          want to enter an Event for a different year you should first
          press <F9> or <F10> as many times as necessary to go
          backward or forward to the desired year.

        5)   Enter the Event Description for your Event.  Calendar
          Keeper will prompt you for up to 10 or 17 characters
          depending on your Program Configuration.  After entering a
          description you are satisfied with press <Enter>.

        6) Enter the Number of Days Until Next Event.  If your event
          should be scheduled Every '7' Days then enter '7'.

        Calendar Keeper will now prompt you for the date it should not
        schedule your Every 'n' Days event beyond.  This date does not
        have to be a scheduled day/date for the event, it is simply
        the end of the date-range for the event <A>dd process.

        Thus, if you want your event to occur Every '4' Days through
        the end of June you could set the 'Don't Schedule Past Date'

     34                                                      Dataphile







                                                             Version 3

        to June 30 even though Calendar Keeper may schedule the last
        event in the group on June 28 (if that is one of the event's
        occurrences).  After the June 28 schedule, Calendar Keeper
        will start counting days to the next occurrence and will
        terminate the <A>dd process before it reaches another
        occurrence.

        7)   Enter the Month Event Ends for your Event.  To do so,
          enter a digit (1-12) or a three-character month identifier
          (such as Jan, Feb, Mar, etc) and press <Enter>.

        8)   Enter the Day Event Ends for your Event.  To do so, enter
          the 1 or 2 digit day/date of the Event and press <Enter>.



































     Software                                                       35







     Calendar Keeper

        9.5  Adding a Monthly on Day-of-Week Event

        This event type is designed for Events which occur on a
        certain weekday each month.  For instance, you may have a
        regular business meeting on the 1st Monday of each month. 
        Even if you don't, you certainly celebrate Thanksgiving which
        occurs on the 4th Thursday of November.

        You have the choice during the <A>dd process of specifying a
        'single Monthly event' (same start and end month) or one which
        has multiple occurrences and is thus part of an event group
        (starts in one month, ends in a later month).


































     Figure 12 - Adding a Monthly on Day-of-Week Event

     36                                                      Dataphile







                                                             Version 3

        Single Monthly on
        Day-of-Week Events
        are considered to be
        Permanent Events in
        nature (see
        discussion of how
        Permanent events are
        treated on page 28).
        Group Monthly on Day-
        Of-Week events are
        not considered to be
        permanent in the
        sense that they are
        not copied from year
        to year as Permanent
        Events are.           Figure 13 - Monthly on Day-of-Week
                              (Select Day)




























     Figure 14 - Monthly on Day-of-Week
     (Which Week?)

     Software                                                       37







     Calendar Keeper

     10.  Selecting a DataBase to Use

        Choose selection (2) or press the letter 'S' from the Main
        Menu (the highlighted selection letter) to enter the Select
        Calendar DataBase function.  This selection screen allows you
        to Create, <U>se, <R>ename or <D>elete Calendar Keeper Event
        DataBases.

        As previously referenced, Calendar Keeper enables you to
        maintain 10 separate Event DataBases.  From within this
        selection screen you tell Calendar Keeper which of these
        DataBases you wish to work with.

        Selecting a previously "Unused" Event DataBase will cause
        Calendar Keeper to prompt you for a name for the new DataBase. 
        Once entered, the DataBase will be initialized and will become
        the "SELECTED" DataBase.  All View/Scan/Edit/Delete, ADD and
        DRAW operations will always occur on the SELECTED DataBase
        only!



























     Figure 15 - Select Calendar DataBase

     38                                                      Dataphile







                                                             Version 3

        Selecting an existing Event DataBase will invoke a prompt
        asking you if you wish to <U>se, <R>ename or <D>elete that
        DataBase.

        <U>  Pressing "U" returns you to the MAIN MENU with that Event
             DataBase being the current SELECTED DataBase.

        The NAME of the current SELECTED DataBase will always appear
        at the bottom of your screen.

        <R>  Pressing "R" will cause a prompt requesting a new NAME
             for the existing DataBase to be displayed (this does not
             affect the contents of the DataBase).

        <D>  Pressing "D" will invoke a prompt requesting you to
             confirm the DELETE action.  A <Y>es confirmation will
             cause that DataBase to be DELETED and the DataBase name
             to be reset to "Unused".

        Calendar Event DataBase #0 is delivered as the "Default
        Calendar".  You may <R>ename or <U>se this DataBase but
        Calendar Keeper will not permit you to <D>ELETE it!


























     Software                                                       39







     Calendar Keeper

     11.  Drawing a Calendar

        Figure 16, below, illustrates the menu you see when you choose
        selection (3) or press the letter 'D' from the Main Menu (the
        highlighted selection letter) to enter the Calendar Draw
        function.

        The three report types you can select include the 'Monthly
        Wall Calendar,' the 'Week-at-a-Glance Calendar' and the 'Year-
        at-a-Glance Calendar.'  Each prints on a full 8 1\2 by 11 inch
        page, and each has options for multiple report pages to be
        printed at one time.


































     Figure 16 - Calendar Draw Menu

     40                                                      Dataphile







                                                             Version 3

        11.1 Monthly Wall Calendars

        Choosing option (1) from the Calendar Draw menu selects the
        'Monthly Wall Calendar.'  This report type prints a Wall
        Calendar, filling in the 'boxes' associated with each date
        with the events from the currently selected Calendar.

        In order to print a Monthly Wall Calendar you must enter the
        following information:

        1)   Enter the Start Month desired for your Calendar.  To do
          so, enter a digit (1-12) or a three-character month
          identifier (such as Jan, Feb, Mar, etc) and press <Enter>.

        2)   Enter the Year desired for your Event.  To do so, enter
          the 4 digit year (or simply overtype any part of the
          suggested year) and press <Enter>.  Calendar Keeper will
          suggest the Current Display Year (from the most recent
          ViewEdit display); just hit <Enter> if this is correct.



























     Figure 17 - Monthly Wall Calendar Draw Options

     Software                                                       41







     Calendar Keeper

        3)   Enter the Number of Months desired to be drawn (starting
          with the month you specified in step number (1) above. 
          Calendar Keeper will suggest '1' month only, but if you wish
          you can specify any number from 1 to 12 months.

        4)   Press the number '1' or '2' on your keyboard to select
          'Include Calendar Events' or 'Draw Plain Calendar Only.'

     Note:   Due to the restrictions of the size of the day/date 'box'
          on a Wall Calendar, Calendar Keeper is limited to 5 events
          per day when using this report type.  If the events of any
          day within the printed months overflows the Calendar (more
          than 5 events on a given day) then you will be warned.  A
          prompt will also be displayed giving you the option to print
          a separate report summarizing the events which did not fit
          on your calendar.

        See the section titled Common Calendar Draw Options starting
        on page 47 for a detailed discussion of the remaining input
        requirements for producing a Monthly Wall Calendar.

        The following options from 'Program Configuration'
        specifically affect the Monthly Wall Calendar report:
        (1) Calendar Borders; (2) Print Days Passed/Remaining;
        (3) Prev/Next Month Calendar Footer; (4) Print Calendar Name
        on Calendar; (5) Top Margin Lines; (6) Left Margin Characters;
        (7) Squeeze Calendar Top-to-Bottom.  Be sure to review the
        section titled Program Configuration starting on page 51 for a
        detailed description of these options.



















     42                                                      Dataphile







                                                             Version 3

        11.2 Week-at-a-Glance Calendars

        Choosing option (2) from the Calendar Draw menu selects the
        'Week-at-a-Glance Calendar.'  This report type prints a single
        page report in a Sunday-through-Sunday format, filling in each
        day's report space with the events from the currently selected
        Calendar.

        In order to print a Week-at-a-Glance Calendar you must enter
        the following information:

        1)   Enter the Start Month desired for your Calendar.  To do
          so, enter a digit (1-12) or a three-character month
          identifier (such as Jan, Feb, Mar, etc) and press <Enter>.

        2) The next step is to select
        the Start Week desired for
        your Week-at-a-Glance draw. 
        Figure 19, at right,








                                      Figure 19 - Week-at-a-Glance
                                      (Select Week)

















     Figure 18 - Week-at-a-Glance Calendar Draw Options

     Software                                                       43







     Calendar Keeper

        illustrates the selection screen displayed for this purpose. 
        Simply press a number '1' through '6' to indicate your
        preference for start week.  If you select a partial week
        Calendar Keeper will include days from the prior (or next)
        month in order to print a complete Sunday-through-Sunday week
        format.

        3)   Enter the Number of Weeks desired to be drawn (starting
          with the week you specified in step number (2) above. 
          Calendar Keeper will suggest '1' week only, but if you wish
          you can specify any number from 1 to 5 weeks.

        See the section titled Common Calendar Draw Options starting
        on page 47 for a detailed discussion of the remaining input
        requirements for producing a Week-at-a-Glance Calendar.

        The following options from 'Program Configuration'
        specifically affect the Week-at-a-Glance Calendar report:
        (1) Prev/Next Month Calendar Footer; (2) Print Calendar Name
        on Calendar; (3) Top Margin Lines.  Be sure to review the
        section titled Program Configuration starting on page 51 for a
        detailed description of these options.


























     44                                                      Dataphile







                                                             Version 3

        11.3 Year-at-a-Glance Calendars

        Choosing option (3) from the Calendar Draw menu selects the
        'Year-at-a-Glance Calendar.'  This report type uses as many
        pages as necessary to print a three column report with the
        events from the currently SELECTED Calendar in the center
        column.  The columns which border this report contain small
        inset calendars for each month of the selected year (January
        through June in the left margin; July through December in the
        right margin).

        Calendar Keeper will use the Current Display Year (from the
        most recent ViewEdit display) as the year for the draw
        command.  You have the option of limiting the calendar months
        printed on the Year-at-a-Glance report using the procedure
        described below.

        In order to print a Year-at-a-Glance Calendar you must enter
        the following information:



























     Figure 20 - Year-at-a-Glance Calendar Draw Options

     Software                                                       45







     Calendar Keeper

        1)   Enter the Start Month desired for your Calendar.  To do
          so, enter a digit (1-12) or a three-character month
          identifier (such as Jan, Feb, Mar, etc) and press <Enter>.

          Calendar Keeper will always suggest January as the start
          month for a Year-at-a-Glance report.

        2)   Enter the End Month desired for your Calendar using the
          same procedure as in step (1) above.

          Calendar Keeper will always suggest December as the end
          month for a Year-at-a-Glance report.

        See the section titled Common Calendar Draw Options starting
        on page 47 for a detailed discussion of the remaining input
        requirements for producing a Year-at-a-Glance Calendar.

        The following options from 'Program Configuration'
        specifically affect the Year-at-a-Glance Calendar report:
        (1) Print Calendar Name on Calendar; (2) Top Margin Lines.  Be
        sure to review the section titled Program Configuration
        starting on page 51 for a detailed description of these
        options.

























     46                                                      Dataphile







                                                             Version 3

        11.4 Common Calendar Draw Options

        Once the timeframe for your calendar has been established, all
        report types have the following prompts in common.

        Basically, there are only two more decisions to be made before
        Calendar Keeper can produce your report: (1) whether or not to
        include your calendar Events in the report; (2) where to print
        your report.

        Include Events on Calendar Output?

        To make the first decision simply press the '1' or '2' key on
        your keyboard.  Including Events means that your calendar data
        will be inserted into the appropriate days of the output. 
        Drawing a plain calendar refers to creating output without
        inserting your calendar data.  Plain calendars are sometimes
        useful as worksheets during planning sessions.  When drawing a
        plain calendar you may wish to set the Program Configuration



























     Figure 21 - Draw Options Common to All Calendar Types

     Software                                                       47







     Calendar Keeper

        option 'Print Calendar Name on Calendar' to "NO" to avoid any
        confusion.

        Print Destination

        1)   Selection #1 tells Calendar Keeper to print your report
          on your printer.  Program Configuration options which you
          should review that affect printing on a printer include:
          (1) Eject Page After Draw; (2) Print Destination; (3)
          Printer; (4) Prompt for Printer Ready.

        2)   Selection #2 tells Calendar Keeper you want to preview
          your calendar output on your screen (this was called 'Print
          to Screen' in prior releases of Calendar Keeper).

          Program note: when performing a screen preview of a Monthly
          Wall Calendar, Calendar Keeper will draw your calendar in
          '80 column' mode for your screen (graphic draw is not used
          on your screen).  This requires Calendar Keeper to truncate
          Event descriptions to 10 characters while displaying them on
          your screen.  This has no affect on the actual Events stored
          in your Calendar DataBase.  When printing on your printer
          (if your printer supports compressed print) events will not
          be truncated.

        3)   Selection #3 tells Calendar Keeper to print your output
          into the file whose name is displayed at the 'Set Print File
          Name' prompt.  The print file name can be set here on the
          Print Destination screen (using option #5 described below)
          or in the 'Program Configuration' screen using option 'N.' 
          Calendar Keeper will imbed all of the necessary printer
          commands within the print file just as if it were actually
          printing to your selected 'Printer' (your selected 'Printer'
          type is displayed at the bottom of the Print Destination
          screen).

          Printing to a file is a very useful tool which allows you to
          make use of printers that are not attached to your computer. 
          For instance, if you have access to a laser printer
          elsewhere you may elect to set the 'Printer' type
          accordingly and then use 'Print to File' to create a print
          file in that printer's format.  You then take your diskette
          to the computer attached to that printer and use the DOS
          command 'COPY MYCAL.PRN LPT1:' to print on the printer.  Of
          course this assumes that you set the print file name to
          MYCAL.PRN prior to selecting 'Print to File.'


     48                                                      Dataphile







                                                             Version 3

        4)   Selection #4 has the same affect as pressing the <Escape>
          key and is retained simply to retain the same look-and-feel
          as the prior release.

        5)   Selection #5 opens a dialogue window in which you specify
          the name of the file you wish to use with the 'Print to
          File' option described above.  File names must comply with
          DOS conventions or an error will occur during the 'Print to
          File' process.  You may optionally specify a drive
          designation along with your filename and optional file
          extension.  Hence file names such as A:CALENDAR.PRN may be
          considered useful as well as descriptive.

        Program note: the currently selected option for 'Printer' type
        as well as the current setting of the 'Append/OverWrite'
        toggle are displayed at the bottom of the Print Destination
        screen.  These are described in the section titled 'Program
        Configuration' starting on page 54.






























     Software                                                       49







     Calendar Keeper

     12.  Change Program Display Colors

        Select option (1) or press the letter 'C' (the highlighted
        selection letter) from within the 'Program Defaults /
        Utilities' menu screen to change your display colors.

        This selection displays all colors supported by your display
        screen and prompts for your preferences.  Press <W> to set the
        Window color for popup windows; press <M> to set the color for
        Menu selection screens; press <I> to set the color for
        Intensified display.

        For the most 'eye pleasing' results you should choose all
        three color selections from the same 'row' in the selection
        list (that is, they should all be the same background color).

































     50                                                      Dataphile







                                                             Version 3

     13.  Program Configuration

     Select option (2) or press the letter 'P' (the highlighted
     selection letter) from within the 'Program Defaults / Utilities'
     menu screen to display the Program Configuration options screen.

     The Program Configuration screen is where all user selectable
     options are set.  Most are toggle switches which flip/flop from
     "Y" to "N" when they are selected.  Some require some form of
     input (as described below).

     <A>  Calendar Borders: this option toggles between Graphics and
        Asterisk.  Some printers will not support the use of 'extended
        Ascii characters' which are required to print real 'boxes' for
        Wall Calendars.  If your printer prints garbage during the
        print of a Wall Calendar then change this option to asterisk. 
        Calendar Keeper will then border Wall Calendar days with
        asterisks (i.e. ******) which any printer is capable of.




























     Figure 22 - Program Configuration Options Screen

     Software                                                       51







     Calendar Keeper

     <B>  Eject Page After Draw: Y/N toggle to send a form feed to
        your printer after printing a page.  If set to "NO" then a
        form feed will not be sent.

     <C>  Print Days Passed/Remaining: this Y/N toggle affects Wall
        Calendars only.  If set to "Yes" Calendar Keeper will print
        the number of days passed/remaining relative to the current
        date for each day of the year (i.e. 32/334 for February 1st ..
        the 32nd day of the year).

     <D>  Prev/Next Mth Calendar Footer: this Y/N toggle affects Wall
        Calendars and Week-at-a-Glance Calendars only.  If set to
        "Yes" Calendar Keeper will print inset calendars at the bottom
        of the page for the previous/next months relative to the
        current month.  (i.e. Prints January and March as footer for
        February calendar).

     <E>  Print Calndr Name on Calendar: Y/N toggle prints the
        Calendar name (the name which appears at the bottom of your
        screen as selected calendar) during calendar print if set to
        "Yes".

     <F>  Sched Consec Events on Wkends: Y/N toggle affects add
        operation for Consecutive-Days Events.  If set to "Yes"
        Calendar Keeper will schedule consecutive type events during
        all 7 days of the week.

        If set to "No" Calendar Keeper will not schedule consecutive
        events on weekends.  For instance a 5-day event starting on a
        Thursday will be scheduled on Thu, Fri, Mon, Tue, Wed.  A two
        week conference might be scheduled as starting on Monday for
        10 days.  Calendar Keeper would schedule this as Monday thru
        Friday, Monday thru Friday for two weeks in a row.

     <G>  Prompt Current Mth During Add: Y/N toggle affects add
        operation for all event types.  If "Yes" Calendar Keeper will
        fill in the month prompt with the current calendar month (this
        can be overtyped as desired).  If "No" Calendar Keeper will
        require you to fill in the month each time.

     <H>  Max Events in a DataBase: initially set to 100, this option
        is limited only by your computer's memory.  If you attempt to
        set it too high you will be warned by Calendar Keeper.  This
        option can be changed even for existing databases, but can not
        be set lower than the number of events in your largest
        database (Calendar Keeper will monitor this for you).


     52                                                      Dataphile







                                                             Version 3

     <I>  Display Month-Day As: toggles between mm-dd and dd-mm for
        your preference.  Affects display in ViewEdit window as well
        as <F>inddate display.  The only report affected is the
        Year-at-a-Glance report.

     <J>  Month/Day Separator Character: initially set to '-' the dash
        character you can change this to any other character.  Affects
        ViewEdit screen display and Year-at-a-Glance report only.

     <K>  Copy Perm Events to New Year: Y/N toggle is invoked when
        <F9> or <F10> is pressed while in the ViewEdit window. If set
        to "Yes" Calendar Keeper will scan the event database and will
        copy a duplicate event to the next year (up or down one year
        based upon your selection of <F9> or <F10>).  For instance, if
        you have a Permanent Event for January 1, 1991 and press <F10>
        Calendar Keeper will automatically create a Permanent Event
        for 1992 with the same event date and description.

        Program note: two types of events qualify as Permanent Events
        in respect to Program Configuration option <K>: Any Event
        created as Permanent with <F5> during the Event <A>dd process;
        Single Monthly-on-DayofWeek Events created with <F8> during
        the Event <A>dd process (those created with the same Start and
        End Months).

     <L>  Event Text Length 10/17 Chars: toggles between 10 and 17
        characters.  This option sets the length of the Event
        description which is input during an <A>dd operation. 
        Obviously this option affects all reports since it limits the
        size of your event text.  The only reason why you might choose
        to use the 10 char option is if you printer is unable to print
        in a 17 cpi mode.

        If you select 'DOS Text Printer' in Configuration option <P>
        then you should select a length of 10 since text printers are
        not capable of producing compressed print (actually this will
        be set for you if you select the 'DOS Text Printer' but
        Calendar Keeper will not prevent you from changing it back to
        17).  The Week-at-a-Glance and Year-at-a-Glance reports do not
        use compressed print; hence if you do not intend to use the
        Wall Calendar report you can use Event length of 17 even with
        'DOS Text Printer.'

     <M>  Print Destination: toggles between LPT1, LPT2, LPT3 when
        selected.



     Software                                                       53







     Calendar Keeper

     <N>  Print to file: works just like selection #5 in the 'Print
        Destination' screen during Calendar Draw.  When selected, a
        window opens where you may enter a file-spec for the
        Print-to-File option.  File names may include a drive
        designation (i.e. A:MYCALNDR.PRN).

        Remember that Calendar Keeper will imbed all necessary
        printer-control-characters for the selected printer type (you
        set the printer type in option <P> below).  This file may then
        be printed later by 'copying' it to a printer.  For instance,
        at the DOS prompt you might enter the following command:

          COPY A:MYCALNDR.PRN LPT1:

     <O>  Append/Overwrite Prt File: toggles between Append and
        Overwrite; this option relates to the print to file option <N>
        above.  When in overwrite calendar keeper will replace the
        designated print-to-file file-spec if one is present by that
        name.  In append mode calendar keeper will add-to-the-end of
        the print-to-file file-spec if one is present by that name. 
        The append option is useful if you wish to print more than one
        calendar which will be 'copied' to a printer at a later time
        (perhaps a printer not attached to this computer).

     <P>  Printer: Selecting this
        option opens the 'Select
        Printer' window as shown in
        Figure 23 at right.  The list
        of printers available for
        selection is determined by
        the contents of the
        CALENDAR.PDF file.  See the
        section titled Changing
        Printer Definitions starting
        on page 15 for instructions
        on how to add printers to the
        list.                         Figure 23 - Program Config
                                      (Select Printer)
        Use of the 'DOS Text Printer'
        assumes 10 character event
        length.  17 character event descriptions will be truncated to
        10 during print operation.  This does not affect the actual
        events which are stored in your database.

     <R>  Prompt for Printer Ready: Y/N toggle, if set to "Yes" will
        prompt you before starting a print operation.  If you print
        more than one calendar at the same time, Calendar Keeper will

     54                                                      Dataphile







                                                             Version 3

        prompt you between each page.  This is useful for sheet feeder
        type printers which have to be manually loaded.


     Printer margin control: some printers have built in margins (such
     as the LaserJet) for top, bottom and sides which may cause your
     report to not center properly on the physical page.  The
     following options help you to control 'centering' during calendar
     draw.  They affect the Wall Calendar only.

     <S>  Top Margin Lines: the number of lines between the top of the
        physical page and the top of your printed report.  Print
        density (10 cpi, 17 cpi, etc) has no affect on this setting. 
        Calendar Keeper does not alter the number of lines per inch
        during print.

     <T>  Left Margin Characters: the number of characters between the
        left edge of the physical page and the left-most character of
        your printed report.  Keep in mind that the number of
        characters for indent will depend on the print density used. 
        That is, if your printer supports 17 cpi then it takes 17
        characters to indent an inch.  If you use a printer that does
        not support 17 cpi (such as the DOS Text Printer) then it only
        takes 10 characters to indent an inch (in 10 cpi mode).

        Selecting 'DOS Text Printer' automatically changes the left
        margin characters to '2'.  If you are using an HP LaserJet
        then a good suggestion for left margin characters is '6'.

        If during a Wall Calendar print your print lines wrap-around
        or print off the edge of the right side of the page then
        decrease left margin characters.

     <U>  Squeeze Calndr Top-to-Bot: Y/N toggle; this switch affects
        the Wall Calendar only.  Set this switch to "Yes" if your Wall
        Calendar overflows the page during a draw.  This may happen if
        your printer has a built-in top/bottom margin during the print
        of a 6-week month (a 30-31 day month where the first day falls
        on a Friday or Saturday).  If you have problems with page
        overflow, then another option you may choose to experiment
        with is the 'Print Calendar Name on Calendar' option <E>. 
        Setting this option to "No" saves you two lines of print on
        the output calendar.





     Software                                                       55







     Calendar Keeper

     14.  Reorganize Current DataBase

        Select option (3) or press the letter 'R' (the highlighted
        selection letter) from within the 'Program Defaults /
        Utilities' menu screen to invoke the Reorganize function. 
        There are no subordinate screens displayed; Calendar Keeper
        simply commences to reorganize the currently selected Event
        DataBase and notifies you of its success when complete.

        You should never really have to select this option!  Your
        Calendar Databases are automatically reorganized when they are
        loaded (if needed).  However if you perform a substantial
        amount of maintenance on a database which includes deleting a
        large number of events, then you can immediately recover the
        empty 'slots' by selecting this option.

        The 'threshold' for Automatic Reorganization is when 10% of a
        database is deleted.  Automatic Reorganization will occur the
        next time the database is loaded (Selected from the 'Select
        DataBase to Use' option).




























     56                                                      Dataphile







                                                             Version 3

     15.  Delete Calendar Data for a Year

        Select option (4) or press the letter 'D' (the highlighted
        selection letter) from within the 'Program Defaults /
        Utilities' menu screen to display the 'Delete Calendar Data'
        screen.

        This utility is provided to assist you in keeping your Event
        DataBases as small as possible.  There is no real need to
        delete old data, but if you are no longer referring to prior
        years' Events then it may be a good idea.  Depending on the
        amount of old data in your DataBase you may find 'load' and
        'save' time to be decreased after deleting data from prior
        years.  The currently selected calendar is always the one upon
        which the delete action will occur.

        Calendar Keeper will always suggest the prior year in the
        delete prompt.  You may overtype this to delete data for any
        year including the current year.



























     Figure 24 - Delete Calendar Data for Specified Year

     Software                                                       57







     Calendar Keeper

        There is no danger in even emptying an Event DataBase by
        deleting data for all years present.  Of course, if this is
        your goal you might find it quite a bit easier to simply
        <D>elete the database from the 'Select DataBase to Use' screen
        and then re-create it.











































     58                                                      Dataphile

```
{% endraw %}

## FILE2655.TXT

{% raw %}
```
Disk No: 2655                                                           
Disk Title: Calendar Keeper                                             
PC-SIG Version: S1.0                                                    
                                                                        
Program Title: Calendar Keeper                                          
Author Version: 3.00                                                    
Author Registration: $33.00                                             
Special Requirements: 512K RAM, DOS 3.0+, and high density floppy drive.
                                                                        
Looking for an easy yet elegant way to maintain, print, and distribute  
your household, business, or association's appointments or schedule of  
events?  CALENDAR KEEPER is your answer.                                
                                                                        
It draws wall calendars, week-at-a-glance calendars, and                
year-at-a-glance calendars and includes the events you want to remember.
You can keep up to 10 different calendar databases so you don't get     
things mixed up. Easy data entry of permanent events, one-time events,  
events which span consecutive days, and repeating events. There's a     
utility included to create a printer driver for any printer. Context    
sensitive help and pop-up calendars are always available.               
                                                                        
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
║             <<<<  PC-SIG Disk #2655 CALENDAR KEEPER  >>>>               ║
╠═════════════════════════════════════════════════════════════════════════╣
║   The files for CALENDAR KEEPER are in the self-extracting file CAL30.  ║
║   To extract the program files, copy the files on this disk to either   ║
║   a subdirectory on your hard drive or to a high density floppy disk.   ║
║                                                                         ║
║   After copying the files over, extract the files by typing: GO (Enter) ║
║                                                                         ║
║   To print the documentation for CALENDAR KEEPER, type:                 ║
║                        COPY CALENDAR.DOC PRN  (press Enter)             ║
║                                                                         ║
║   To start the program, type:  CALENDAR  (press Enter)                  ║
║                                                                         ║
║   To print the registration form, type:  COPY REGISTER.FRM PRN  (Enter) ║
║                                                                         ║
║                                                                         ║
║                                           Copyright 1991, PC-SIG, Inc.  ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2655

     Volume in drive A has no label
     Directory of A:\

    CAL30    EXE    239551   2-18-91
    CALENDAR DOC     93119   2-01-91
    GO       BAT        20   6-25-91   1:27a
    FILE2655 TXT      1925   6-26-91   5:19p
    GO1      TXT      1464   6-26-91   5:09p
    GO1      BAT        39   6-26-91   4:55p
            6 file(s)     336118 bytes
                           23552 bytes free
