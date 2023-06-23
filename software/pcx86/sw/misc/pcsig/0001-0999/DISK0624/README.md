---
layout: page
title: "PC-SIG Diskette Library (Disk #624)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0624/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0624"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}
{% comment %}samples_begin{% endcomment %}

## CRC.TXT

{% raw %}
```
PC-SIG Disk No. #5, version v4 
 
The following is a list of the file checksums which should be produced by
the CRCK4 program on this disk.  If the CRC numbers do not match the following
list you may have a bad file.  To use type:  CRCK4 <filespec>
 
CRCK4 output for this disk:
 

CRCK ver 4.2B (MS DOS VERSION )
CTL-S pauses, CTL-C aborts

--> FILE:  DOC     .BAT         CRC = A4 4C

--> FILE:  PC-DEF  .EXE         CRC = 41 9A

--> FILE:  PC-EXPOR.EXE         CRC = 9D AF

--> FILE:  PC-FILE .EXE         CRC = 62 2B

--> FILE:  PC-FILE .PRO         CRC = 03 C2

--> FILE:  PC-FILE .DOC         CRC = B8 2B

--> FILE:  PC-FIX  .EXE         CRC = 54 42

--> FILE:  PC-IMPOR.EXE         CRC = 57 D9

--> FILE:  PC-LABEL.EXE         CRC = 08 04

--> FILE:  PC-OVL  .EXE         CRC = 27 0F

--> FILE:  PC-PRINT.EXE         CRC = 39 00

--> FILE:  PC-SETUP.EXE         CRC = 8E D6

--> FILE:  PC-SORT .EXE         CRC = 29 F9

--> FILE:  PC-UTIL .EXE         CRC = 39 AA

--> FILE:  SAMPLE  .BAS         CRC = 09 CD

 ---------------------> SUM OF CRCS = B2 21

DONE 
 
These and other Public Domain and user-supported programs from:
 
PC Software Interest Group (PC-SIG)
1125 Stewart Ct  Suite G
Sunnyvale, CA 94086
(408) 730-9291
```
{% endraw %}

## FILES624.TXT

{% raw %}
```
---------------------------------------------------------------------------
Disk No  624  PC-File III  version 3                               v1 DS2
---------------------------------------------------------------------------
This is Jim Buttons' very popular database filing program.  Users
comment on its ease of use and excellent documentation.  It is a must
for anyone desiring an inexpensive, useful filing system. This version is
recommended for the PCjr. The version for all other systems can be found on disk
no 5.
 
GO       BAT  Explains how to start program and print documention
DOC      BAT  Batch file to print documentation file
PC-FILE  BAT  Batch file to start PC-File program
PC-DEF   EXE  Utility program to select system configuration
PC-FILE  DOC  Documentation file
PC-EXPOR EXE  Part of PC-File
PC-FILE  EXE  Main program for PC-File
PC-FILE  PRO  Part of PC-File
PCFILE   XXX  Part of PC-File
PC-FIX   EXE  Part of PC-File
PC-IMPOR EXE  Part of PC-File
PC-LABEL EXE  Part of PC-File
PC-OVL   EXE  Part of PC-File
PC-PRINT EXE  Part of PC-File
PC-SETUP EXE  Part of PC-File
PC-SORT  EXE  Part of PC-File
PC-UTIL  EXE  Part of PC-File
 
PC Software Interest Group (PC-SIG)
1030D East Duane Avenue
Sunnyvale, CA 94086
(408) 730-9291
 
```
{% endraw %}

## PC-FILE.DOC

{% raw %}
```
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
                                                          PC-File III(tm)
                                                             User's Guide
                                                        (Evaluation Copy)
 
 
                                                              Version 3.0
 
 
 
                                           (C)Copyright Jim Button, 1984.
                             Portions (C)Copyright Microsoft Corp., 1982.
                                                     All Rights Reserved.
 
 
 
 
 
 
 
 
 
 
 
 
 
                                                               Jim Button
                                                               ButtonWare
                                                            P.O. Box 5786
                                                       Bellevue, WA 98006
 
                                                         24 hr order line
                                                            1-800-JBUTTON
 
 
                                                       ISBN 0-922692-00-9
 
 
 
 
 
 
 
 
 
 
 
 
 
_
 
 
        TABLE OF CONTENTS
 
 
            You MUST Read This....................................  3
            General Information...................................  4
            Some Do-Not's.........................................  6
            Some Definitions......................................  6
            Getting Started.......................................  7
            Special Keys When Typing..............................  8
            Defining Your Database................................  10
            The Master Menu Screen................................  12
            Adding Records To Your Database.......................  13
            Modifying a Record....................................  14
            Deleting a Record.....................................  15
            Displaying a Record...................................  15
            Finding a Record......................................  15
            Listing the Records...................................  17
            Sorting the Database Index............................  22
            Using the Utilities...................................  23
            Altering a Field Name or Edit Mask....................  23
            Ending / Changing to a New Database...................  24
            Global Update and Delete..............................  24
            Merging Two Databases Together........................  24
            Setting Up the "Smart" Keys...........................  25
            Printing Mailing Labels...............................  25
            Snapshot Mailing Labels...............................  25
            Cloning: (Outputting a New Database)..................  26
            Splitting and Joining Fields..........................  26
            Exchanging Data With VisiCalc, Others.................  27
            Using Your Data With MailMerge........................  27
            Importing & Exporting Your Database...................  27
            Security (Encyphered) Databases.......................  28
            If Your Database Gets Damaged.........................  29
            Configuring Your System...............................  29
            Using MS-DOS (Non IBM "Compatible")...................  30
            Writing Your Own Programs.............................  31
            Calculating Disk Storage Space........................  32
            Users With Only 1 Disk Drive..........................  32
            A Features Checklist..................................  33
            Some Notes on Performance.............................  35
            Summary of Enhancements to this Version...............  35
            The Files on Your Program Disk........................  36
            Some Frequently Asked Questions.......................  36
            If You Need Help......................................  38
            Error Messages........................................  38
            The User-Supported Concept............................  38
            Why Should I Pay?.....................................  40
            Restricted Permission to Copy.........................  40
 
        INDEX.....................................................  43
 
 
 
 
 
 
 
 
 
 
 
 
 
_
 
 
                           PC-File III(tm) User's Guide           Page 3.
 
 
        YOU MUST READ THIS
 
        You can skip this section if you're a new user of PC-File and
        have no pre-existing PC-File databases.
 
        With this newest version of PC-File III, we've changed the
        structure of the database index to allow for the new maximum of
        32,767 records per database.
 
        This means that for the first time in the history of PC-File,
        your old databases will not run directly with the new version of
        the program.  You must do a database conversion to each of your
        old databases before PC-File III can use them.
 
        This is not difficult.  Just follow the instructions below to get
        each database converted.  An extra benefit is that your newly
        converted database will often take up less space on the disk than
        the old database.  It'll never take up more space.
 
 
        1.  Bring up DOS the way you usually do.
        2.  If you're using a hard disk, you'll need to change into the
            directory where your databases reside with a "CHDIR" command.
        3.  Put your new PC-File III program diskette into the "A:" disk
            drive.
        4.  Type "A:"  (no quote marks) then press the "Enter" key.
        5.  Type "PC-FIX" (no quote marks) then press the "Enter" key.
        6.  At this point, you can put your database diskette into the
            "A:" or "B:" disk drive, or no action required if your
            database is on the hard disk.
        7.  Now, answer the two questions from the PC-FIX program.
            You'll tell it which drive contains the database.  Then
            you'll give it the name of the database.  After that, the
            conversion will be done for the database which you named.
        8.  Repeat steps 2 through 7 for each of your old databases.
 
        A Note About Your Evaluation Copy
 
        At several places in this copy of the User's Guide you'll see the
        following notice.
 
              **************************************
              *  Omitted from the evaluation copy  *
              **************************************
 
        We honestly feel that we've supplied enough of the manual to
        allow you to make a good evaluation of the program.  There are
        several reasons why we didn't provide the entire manual on disk.
 
        -   We want to continually remind you to pay for the program if
            you're using it. We've priced PC-File so that you can afford
            it.  Frankly, it's the best bargain in the industry.  We also
            suspect and hope that you (the buying public) will want to
            cast your "vote" for lower priced software by paying readily
 
 
 
 
 
 
_
 
 
                           PC-File III(tm) User's Guide           Page 4.
 
 
            for such programs.  Other software publishers would then be
            forced to take notice.
 
        -   We feel that the honesty of our "registered" users should be
            rewarded.  They're entitled to some extra value that should
            rightfully be denied to those who don't pay.
 
        -   It takes up too much room on the diskette.
 
        We trust that you'll be open-minded about the omissions.  We hope
        that we can soon add you to our list of very satisfied customers.
 
 
        GENERAL INFORMATION
 
        PC-File III is a general purpose "Data Base Manager" program.
        It's designed specifically for ease of use.  With PC-File III you
        can easily create and maintain databases on the computer, and
        create simple printed reports based on your data.
 
        You can use PC-File III for all kinds of tasks:
 
        -   Maintain mailing lists and print mailing labels, 1-up or
            multi-up, and address envelopes.
        -   Maintain price lists.
        -   Maintain telephone or name and address directories.
        -   Keep various types of inventory records.
        -   Build personnel databases.
        -   Keep customer lists.
        -   Build and maintain databases to be exported for use by other
            programs, such as VisiCalc, Multiplan, 1-2-3, WORD, and
            MailMerge.
        -   Import files from other systems, into the PC-File III format.
        -   Maintain "secure" information in an encrypted format.  No one
            can view the data who doesn't know the security code.
        -   and many other tasks which only you can dream up.
 
        PC-File III will allow you to sort your data into almost any
        sequence.
 
        It allows rapid access to any record in the database, with
        sophisticated search techniques allowing comparison searches,
        soundex searches, wildcard searches, or generic searches on any
        field in the record.  For example, you can display all employees
        over a certain age, all customers with last names sounding like
        "Schwartz", or all items that are not in a certain category.
 
        You can print out reports from your database, listing all or some
        of the fields, from all or some of the records, in many different
        sequences, with subtotals and totals on the numeric fields.
        Report fields can be calculated based on information in other
        fields in the database.  Reports can be sent directly to your
        video screen or to any one of many different types of printers.
        They can also be sent to disk for later use with your word
 
 
 
 
 
 
_
 
 
                           PC-File III(tm) User's Guide           Page 5.
 
 
        processing programs.
 
        You can create entire new databases from existing databases.  The
        new database can be in a different format, and can be a subset of
        the database from which it was "cloned".  New fields can be
        added, old fields can be deleted, field positions can be
        rearranged, and field sizes can be lengthened or shortened.
 
        You can merge together two databases which have similar
        definitions.  Databases can thus be created and maintained on
        separate PC's, then combined when desired into a "master"
        database.
 
        You can export & import your databases for use with 1-2-3,
        Visicalc and other "calc"  programs, WORD, or as "MailMerge"
        files.
 
        Above all else, PC-File III is EASY!  Many people can use it with
        no training or instructions.  Please read the documentation
        carefully, however, to pick up the extra "fine points" of the
        program.  The author has steadfastly refused to make any
        additions to PC-File III which would make it more difficult to
        use.  Any suggestions which you have for improving this program
        will be thoughtfully considered and greatly appreciated.
 
        PC-File III contains many powerful features not normally found in
        other database programs.  Here are just a few of them that you'll
        be learning about and using.
 
        -   Three special (proprietary) disk writing techniques are used
            to ensure against accidental loss of data.
        -   Full screen editing for data entry and update.
        -   "Smart keys" (sometimes called "macros")
        -   Security encrypted databases.
        -   Soundex search on any field.
        -   Generic search on any field.
        -   Imbedded search on any field.
        -   Wildcard search on any field.
        -   Global update or delete on any field.
        -   A database "browse" mode.
        -   User defined data types.  You can define the valid input
            characters for any field.
        -   The date and time can be automatically entered for you into
            fields in your database.
        -   Every field in your database is indexed.  You don't have to
            arbitrarily select a few of them to be indexed.
        -   Sort on any fields, mixed ascending/descending.
        -   Select (for printing) on any fields with boolean "and/or"
            comparisons.
        -   Calculated report columns.
        -   Print mailing labels, multi-up.
        -   Print a "snapshot" mailing label while viewing a record.
        -   A "flip data before printing" character is provided.
        -   Import and export in many different formats.
 
 
 
 
 
 
_
 
 
                           PC-File III(tm) User's Guide           Page 6.
 
 
        -   Automatically uses all available RAM memory for super fast
            performance.
        -   Abbreviated menus help you every step of the way.
 
        You'll be using PC-File III in its basic form very quickly.  The
        advanced features will be there for you to discover later, as
        your confidence in this very powerful tool grows.  If you re-read
        this manual every few months, you'll be rewarded each time with
        some newly discovered capabilities.
 
 
        PC-File III requires a 128K or larger IBM-PC, PCjr, PC-XT, PC-AT,
        or IBM-PC "compatible" computer with a double sided disk drive,
        and DOS 1.1 or later.  PC-File III can be set up to support
        either 40 or 80 character wide displays, although an 80 character
        display is recommended.
 
 
        SOME DO-NOT'S
 
        -   DO NOT use PC-File III until you've read the User's Guide.
        -   DO NOT forget to make regular backup copies of your database.
        -   DO NOT remove the data diskette until you have completely
            ended the program through the normal END sequence ("END"
            followed by "Q" for Quit).
        -   DO NOT remove the PC-File III disk during program operation
            unless requested to do so by the computer.
        -   If you use the data encryption facilities, DO NOT forget to
            write down your security code.
 
 
        SOME DEFINITIONS
 
        Before you get too far into the documentation, some definitions
        of basic "database" terminology as used in this manual may be
        helpful.
 
        Byte
            A single character of information.  Each time you press a key
            on the keyboard, one "byte" goes into the computer.
 
        Field
            A meaningful piece of information (it is made up of one or
            more bytes).  Examples of fields are: a date, a name, a
            dollar amount.
 
        Record
            The collection of fields that describes one individual entity
            in your database.  For example: if your database is a
            name/address file, the fields might be "last-name",
            "first-name", "street-address", "city", "state", and
            "zip-code".  Each record in your database will contain these
            fields, and will describe one person.
 
 
 
 
 
 
 
_
 
 
                           PC-File III(tm) User's Guide           Page 7.
 
 
        Database
            The collection of all the individual records which you are
            keeping on file.  For our purposes, a different database
            exists for each of the types of things you are keeping track
            of.  You might have a name/address database, a personal
            inventory database, and a library database.
 
 
        GETTING STARTED
 
        Before trying to operate PC-File III, please carefully read all
        of this User's Guide.
 
        Please also make sure that you have placed a "write-protect" tab
        on your PC-File III distribution diskette, so that it can't be
        accidentally erased or overwritten.
 
        You should now make a copy of your PC-File III disk.  This will
        also serve as your "operations" diskette.  Assuming that you have
        a two-drive system, these are the steps that you should follow.
 
        1.  Put your DOS system diskette in the "A" drive, and an empty
            diskette in the "B" drive.  The diskette in the "B" drive
            will become your new PC-File III operation diskette.
 
        2.  If you don't see the normal DOS prompt on your screen, then
            "boot-up" the DOS operating system in the usual manner.  If
            you don't yet know how to do this, please return to your DOS
            manual for further reading.
 
        3.  Make sure that your are logged onto the "A" drive.  To do
            this, type "A:" (don't type the quote marks) and press the
            (return) key.
 
        4.  Format the diskette in the "B" drive as a system diskette.
            This is done by typing:  FORMAT B:/S
 
        5.  Remove the DOS diskette from the "A" drive and replace it
            with the PC-File III distribution diskette.
 
        6.  Copy the PC-File III executable programs to the "B" disk.  Do
            this by typing:  COPY  PC-*.EXE  B:
 
        7.  Type:  COPY  PC-FILE.PRO  B:
 
        8.  Remove the disk from the "B" drive and label it as your
            "PC-File III operation" diskette.
 
        9.  Store your PC-File III distribution diskette in a safe place.
 
        At this point, you may want to run the configuration program.  To
        run the configuration program, put your PC-File III operation
        diskette in the "A" drive.
 
 
 
 
 
 
 
_
 
 
                           PC-File III(tm) User's Guide           Page 8.
 
 
          Type:  PC-SETUP
 
        Follow the instructions from the program and, when directed,
        refer to the indicated sections in the printed user's guide.
 
        To start PC-File III, bring up your DOS system in the usual
        fashion.
 
        Then, put the PC-File III operation disk in one of the disk
        drives (this is typically the "A" drive) and enter the drive name
        followed by a colon.  Thus, if the disk is in the left-side drive
        type "A:" (don't enter the quote marks).  Press (Enter).  Then
        type "PC-FILE" (no quote marks).  Press (Enter).
 
        When prompted with the question "Which drive (A-H) for the
        Data:", enter the letter corresponding to the disk drive where
        your database will be stored.  The left hand drive is "A", the
        right hand drive is "B".
 
 
        SPECIAL KEYS WHEN TYPING
 
        Often, PC-File III will provide an assumed answer for you in the
        input area.  This is intended to save you some keystrokes.  If
        the assumed answer is correct, all you need to do is press the
        (Enter) key.  If the assumed answer is incorrect, just type in
        the correct reply.
 
        Whenever you're prompted for input of data or commands, certain
        of the keys have special significance.
 
        The left-facing arrow on the numeric keypad will move the cursor
        to the left one position.
 
        The right-facing arrow on the keypad will move the cursor to the
        right one position.
 
        The up-facing arrow will move the cursor to the field above the
        current one.  If there are no fields above, it will move to the
        bottom field.
 
        The down-arrow will move the cursor to the next field below the
        current one.  If there are no fields below, it will move to the
        top field on the screen.
 
        The "Del" key will delete the character at the cursor, and fill
        in the spot with the characters to the right.
 
        The "Ins" key will open up one space for a new character, and
        move all the characters at the cursor and to the right, over one
        position further so that a new character can be typed in.  Each
        time you press the (Ins) key another blank will be inserted.
 
        The "Home" key will move the cursor all the way to the left end
 
 
 
 
 
 
_
 
 
                           PC-File III(tm) User's Guide           Page 9.
 
 
        of the field.
 
        The "End" key will move the cursor to the right of the field,
        just past the last significant (non blank) character.
 
        The "PgUp" key will move the cursor to the first input field on
        the screen.  When browsing the database, it will move up one
        screenful of records in the database.
 
        The "PgDn" key will move the cursor to the last input field on
        the screen.  When browsing the database, it will move down one
        screenful of records in the database.
 
        The "Enter" key will move the cursor to the next field down on
        the screen.  If the cursor is in the last field on the screen
        when you press the "Enter" key, it will cause the data to be
        "read" as if the (F10) key had been pushed.
 
        The "tab" key will move the cursor to the next field on the
        screen.
 
        The "backwards-tab" key will move the cursor to the previous
        field on the screen.
 
        The (F10) key will cause all of the data on the screen to be
        accepted as "finished input."
 
        Some computers don't have function keys, so a means is provided
        for these keyboards to simulate pressing of the (F10) key.  Hold
        down the (Ctrl) key and then press the "A" key.  This is called
        "Ctrl-A" and will cause the program to pretend that (F10) was
        pushed.
 
        The "quote" and "apostrophe" key behave as a "duplication" key
        when adding or modifying data in the records.  If you enter a
        single quote or single apostrophe as the only data in a field,
        the data from the previously viewed record will be copied into
        the field for you, as if you had keyed it in.
 
        The "Esc" key should be thought of as the "cancel this operation"
        key.  It can get you out of most problem situations.  Sometimes
        you'll get into a part of the PC-File III program which you wish
        you weren't in!  (You may have pushed the wrong function key, for
        example).  At these times, you may push the "Esc" key to get back
        to the master menu screen.  You shouldn't rely too heavily on the
        "Esc" key, because overuse of it will gradually subtract from the
        main memory available during the current session with PC-File
        III.  Use this key when you can figure no other convenient way
        out of a situation.
 
 
 
 
 
 
 
 
 
 
 
_
 
 
                           PC-File III(tm) User's Guide          Page 10.
 
 
              **************************************
              *  Omitted from the evaluation copy  *
              **************************************
 
 
        DEFINING YOUR DATABASE
 
        The first step in defining a database is determining what you
        want to define and store.  We suggest that you use paper and
        pencil to plan your database before you run PC-File III.  First,
        determine what information you want and how many characters, or
        positions, each "field" or piece of data should contain.
 
        For example, a simple name/address database layout might look
        like this:
 
              Field name       Length
              ------------     ------
              Salutation         10
              FirstName          12
              LastName           15
              Address1           20
              Address2           20
              City               15
              State               2
              ZipCode             9
              HomePhone          12
              WorkPhone          12
              Comments          145
 
 
        After you've designed your database on paper, start up PC-File
        III.
 
        PC-File III will show you a screen with the message "These files
        are already defined:", and will then ask "FILE NAME:".  If this
        is the first time you have run the program, there will be no
        database names displayed.  Type in the name of the database you
        will want to define.  This should be a one to eight character
        name, starting with the characters A to Z.  The only other
        characters allowed in the name are the numerals 0 to 9, but do
        not include a numeral as the first character in the database
        name.  Do not include a file suffix (a period followed by three
        more characters), because PC-File III will supply standard
        suffixes for your database files.
 
        You can totally prevent others from viewing your database by
        telling PC-File III to encrypt the data.
 
 
 
 
 
 
 
 
 
 
 
 
_
 
 
                           PC-File III(tm) User's Guide          Page 11.
 
 
              **************************************
              *  Omitted from the evaluation copy  *
              **************************************
 
        The program "PC-Def" will be loaded automatically, to allow you
        to define your new database.  You'll be allowed to enter a list
        of field names and field lengths.
 
        The field names can be up to 12 characters long, and the field
        lengths can be any number from 1 to 25 or from 1 to 65, depending
        on the size of your display screen and the number of fields you
        are defining.
 
        The last field you define can be a "super" field - much longer
        than the others.  This type of field can be used to store text or
        descriptive information.
 
        The allowable field lengths are discussed later on in this
        chapter.  If you need help during database definition, you can
        press (F1) to get a help screen.
 
        You'll find it convenient to choose relatively short names, just
        long enough so you can remember what the name stands for each
        time you see it.  It's best to choose a name that's not longer
        than the number of characters actually in the field itself,
        because the name will be truncated to the data length when
        printing titles for your printed reports.  For example, if an
        employee number is six digits long, and you name the field
        "EMPLOYEE", the title for that field on your output reports will
        be "EMPLOY".  Sometimes you have to choose longer names, so let
        your own judgment and taste be your guide.  Just be careful not
        to use this same name for any other field in the record.  It's
        wise not to use special characters in the field names, as these
        may conflict with some of the advanced reporting capabilities you
        will later wish to specify for your fields.  You should stay away
        from the plus, minus, underscore, asterisk, slash, left
        parenthesis, right parenthesis, colon, quote, apostrophe,
        exclamation mark, comma, and period.
 
        If the field will contain numeric data, such as price, or
        quantity, give the name a "#" at the end.  Example: "PRICE#".
        This will cause PC-File III to keep totals for that data when
        printing the reports, and will also cause the data to be printed
        "right justified" on the output reports.
 
        Don't worry if you select an inappropriate name for a field.
        You'll be allowed to change the field names any time you wish
        after the database has been completely defined.
 
        Certain field names are reserved as "automatic" data entry
        fields.  If you use one of these names, data will be supplied
        automatically for the operator whenever you are ADDing records to
        the database.
 
 
 
 
 
 
 
_
 
 
                           PC-File III(tm) User's Guide          Page 12.
 
 
              **************************************
              *  Omitted from the evaluation copy  *
              **************************************
 
        For "FIELD LENGTH", enter the number of characters which are
        required to contain the data for that field.  You should give it
        a length as long as the longest piece of data that the field will
        contain.  For example, a field which will contain the names of
        cities should be at least 11 characters long if one of the cities
        in your database will be "Walla Walla."
 
        Field lengths must be 65 characters or less.  If you have a 40
        character display, or if your database has more than 21 fields,
        then field length must be kept to 25 characters or less.
 
        The last field you define can be a "super" field.
 
              **************************************
              *  Omitted from the evaluation copy  *
              **************************************
 
        The maximum number of fields which you'll be allowed to define is
        forty-two.  The minimum is one.
 
        After you've finished with record definition, PC-File III will
        take you to the Master Menu screen.
 
 
        THE MASTER MENU SCREEN
 
 
        It looks like this:
 
 
        FILE:xxxxxxx
        ________________________________________________
 
                F1 ADD - Add a record
                F2 MOD - Modify a record
                F3 DEL - Delete a record
                F4 DIS - Display a record
                F5 FIN - Find a record
                F6 LIS - List or clone
                F7 SOR - Sort the index
                F8 UTI - Utilities
                F9 NAM - Alter field name or mask
                   GLO - Global update or delete
                   KEY - Set up the smart keys
                   END - End or change database
 
        Awaiting your Command  [   ]
 
 
        You may perform any of the functions on the master menu screen by
 
 
 
 
 
 
_
 
 
                           PC-File III(tm) User's Guide          Page 13.
 
 
        pushing the appropriate function key at the left of the keyboard.
        You can accomplish the same thing by typing in the
        three-character function code (indicated by the three capitalized
        letters in each command).  For example, to alter a field name,
        you could either push (F9), or you could type NAM followed by the
        (enter) key.  Some people like function keys, some learn the
        names of the commands more easily and so prefer to type the three
        characters.  PC-File III lets you suit yourself!
 
        Now that you have defined your database, the first thing that
        you'll want to do is put some data into it.
 
 
        ADDING RECORDS TO YOUR DATABASE
 
        To add records to your database, push (F1) or type ADD when
        viewing the master menu screen.
 
        PC-File III will then find an empty spot for your new record to
        go into.  If there has been a record deleted previously from the
        database, that location will be reused for the added record.  If
        there are no deleted records in the database, the new record will
        be added to the end.  In either case, PC-File III will tell you
        at the top of the screen which location it has found for adding
        your record.
 
        You will then be allowed to enter your data, using the cursor
        movement keys to access any field on the screen.  A "Duplication"
        key is provided for data entry of repetitive information.
 
              **************************************
              *  Omitted from the evaluation copy  *
              **************************************
 
        This is especially handy if everyone in your database is from
        Albuquerque.
 
        After you've entered all the data for one record, press (F10) to
        cause the record to be added to the database.  PC-File III will
        then prompt you to add another record.  If there are no further
        records to add at this time, just press (F10) without entering
        any data.  You'll be returned to the master menu screen.
 
        There is a maximum of 32,767 records allowed in this version of
        PC-File III.  You must have enough disk space, of course, to
        handle the quantity of data in your database.
 
 
 
 
 
 
 
 
 
 
 
 
 
 
_
 
 
                           PC-File III(tm) User's Guide          Page 14.
 
 
        MODIFYING A RECORD
 
        To modify a record in your database, push (F2) or type "MOD"
        while viewing the master menu screen.  You will be asked "KEY or
        #n,*,+,-,++,--,\ ".  If you know the key (the data in the first
        field) of the record to be modified, enter it at this time.
 
        Alternatively, you can enter the record number of the record in
        the database.  The first record is number 1, the second is 2, and
        so on.  To modify record number 120, you would enter "#120".
 
        Entering an "*" will allow you to modify the most recently
        retrieved record.  This is handy when you have just used "FINd"
        to locate a record, and now you are using "MODify" to change it.
        Instead of having to enter the record # of the found record, just
        enter an "*".  It's also handy for making another modification to
        the same record that you just finished modifying.
 
        A fourth way to specify the record to be modified is to enter
        "+", meaning to modify the next record after the one which you
        just modified.
 
        You can also enter a "-", meaning to modify the record just prior
        to the one you just modified.
 
        If you enter a "++", you'll be taken into "browse" mode.  The
        next twenty records in sequence will be shown on the screen,
        preceded by their relative record numbers.  Each time you press
        "++" you'll see the next twenty records.  If your keyboard has
        the "PgDn" key, you can press it and get the same results.  When
        you see the record you wish to modify, just enter its number.
        Example: if you see that it's record number 123 that you want to
        modify, enter  #123.
 
        If you enter a "--", you'll be taken into "browse" mode.  The
        previous twenty records will be shown on the screen.  Each time
        you enter "--", you'll back up twenty records in the database.
        If your keyboard has the "PgUp" key, you can press it and get the
        same results.
 
        If you enter a "\" (backslash), you'll be presented with the last
        record in the database and allowed to modify it.
 
        PC-File III will retrieve the record to be modified and display
        it for modification on the screen.  You can use the cursor
        movement keys, data keys, and the insert and delete keys to
        change any of the data on the screen.  You can also use the
        "duplication" key (a single quote or a single apostrophe) to copy
        data from the corresponding field in the previously viewed
        record.
 
        After you've modified the data on the screen, press (F10) to
        cause the changes to be accepted.  You'll be prompted to enter
        the KEY value for another record to be modified.  If you have no
 
 
 
 
 
 
_
 
 
                           PC-File III(tm) User's Guide          Page 15.
 
 
        other modifications to make at this time,  just  press (enter) or
        (F10) and you'll be returned to the master menu screen.
 
 
        DELETING A RECORD
 
        To delete a record, press (F3) or type "DEL" while viewing the
        master menu screen.  You'll be asked "KEY or #n,*,+,-,++,--,\ ".
        You should then enter the Key value of the first field in the
        record to be deleted, or the record number in the database
        (preceded by a #), or an "*" to delete the most recently
        retrieved record, or a "+" to delete the next record in sequence,
        or a "-" to delete the previous record in sequence, or a "\"
        (backslash) to delete the last record in the database.  You can
        also go into "browse" mode at this time by entering "++" or
        (PgDn) or "--" or (PgUp).  (Read the above section "Modifying A
        Record" for a longer explanation of this prompt.)
 
        PC-File III will retrieve the record and display it for you and
        then ask you to "Type 'DELETE', or press (enter)".  If you decide
        that you really do wish to delete the record, type "DELETE".  If
        you decide not to delete this record, type "KEEP".  Press
        (enter).  You'll then be prompted for the next record KEY to be
        deleted.
 
        When you've finished with all your deletions, just press (enter)
        when asked for the next record KEY.  You will be returned to the
        master menu screen.
 
 
        DISPLAYING A RECORD
 
        To display a record, press (F4) or type "DIS" while viewing the
        master menu screen.  You'll be asked "KEY, or #n,+,-,++,--,\  ".
        You should then enter the Key value of the first field in the
        record to be displayed, or the record number in the database
        (preceded by a #), or a "+" to display the next record in
        sequence, or a "-" to display the previous record in sequence, or
        a "\" to display the last record in the database.  You can also
        enter "browse" mode by entering "++" or "--".  PC-File III will
        retrieve and display the record for you, and then prompt you for
        the next record to be displayed.  When you're through displaying
        records, just press (enter) and you'll be returned to the master
        menu screen.
 
 
        FINDING A RECORD
 
        To find a record, press (F5) or type "FIN" while viewing the
        master menu screen.  You will then be shown a list of all the
        field names in the database, and asked "FIELD TO SEARCH".  You
        should type in the name of the field which you wish to search on.
        You only need to enter as much of the field name as required to
        uniquely identify the field.  PC-File III will next prompt you
 
 
 
 
 
 
_
 
 
                           PC-File III(tm) User's Guide          Page 16.
 
 
        with:
 
             >xxx(scan full field)  ?xxx(soundex)
             Look for:__________
 
 
        You should now type in the data which you would like to search
        for.  But first, look at these FOUR different ways you can make a
        search.
 
        ONE: SCAN ACROSS
        If you precede the data with a ">" character, PC-File III will
        look for an occurrence of that data anywhere in the field.  For
        example, if you type ">mit", records will be returned which have
        "Smith", or "transmit", or "miter", etc.  This is a "full field
        scan" type of search.
 
        TWO:  GENERIC
        If you type "mit" (without the ">" in front) records will be
        retrieved only if they start out with "mit" in the field, such as
        "miter", "mitten", etc.  This type of search is fully "generic":
        that is, all records will be retrieved when the data field
        "begins with" the search data.  You can, for example, find all
        records with last names that start with "S", or find all records
        with zip codes starting with "980".
 
        Search TWO will proceed considerably faster than search ONE.
        Search ONE does a "full field scan", and therefore PC-File III
        must look at every record in the database.  In search TWO,
        however, PC-File III can take advantage of its index file for
        very rapid retrieval.
 
        THREE:  SOUNDEX
        Soundex searches retrieve records which sound the same as the
        search argument.  You can do a soundex search on any field in
        your database.
 
              **************************************
              *  Omitted from the evaluation copy  *
              **************************************
 
        Please note that the "soundex" method of locating names was not
        invented by the author of PC-File III.  It's only a computerized
        implementation of a standard name indexing method that's been
        around for many years.
 
        FOUR:  WILDCARD
        A wildcard search finds records which have certain characters
        appearing only in certain fixed positions within a field.
 
 
 
 
 
 
 
 
 
 
 
_
 
 
                           PC-File III(tm) User's Guide          Page 17.
 
 
              **************************************
              *  Omitted from the evaluation copy  *
              **************************************
 
        Whichever type of search you use, when a record is found which
        matches the search it'll be displayed followed by this prompt:
        "Continue, Stop, Modify, or Delete?".  If you want to find more
        records which match this search criterion, just type "C" or press
        (Enter).  The next record will be found and displayed.  If you
        wish to stop searching, type "S" and then push (Enter).  If you
        want to make changes to the record you just found, type "M" and
        then press (Enter).  To delete the record you just found, type
        "D" and press (Enter).
 
        After you modify or delete the record, the search will continue
        from that point.
 
 
        LISTING THE RECORDS
 
        The listing capabilities of PC-File III are very powerful indeed.
        You will be allowed to select records based on "equal",
        "unequal", "greater than", or "less than" relationships.  The
        data can be displayed in any format which you specify.  And you
        can list the report on your printer, on your screen, or to disk.
        There is even a data transposition (flip data) character
        provided. (See the section "Special Keys When Typing" or look up
        "flip data" in the index).
 
        To list the records, press (F6) or type "LIS" while viewing the
        master menu screen.  You will be shown the names of all the
        report formats which you have previously defined to the system,
        and asked "Which format, or press (enter)".
 
        If this is the first time you've ever created this particular
        report format, just press (enter).  You will be shown all of the
        field names in this database, and prompted with: "Column=0.
        Field to List:". You should type in the name of the field which
        you would like to see first on your report (at the far left).
        You don't need to type in the whole field name; only enough so
        that PC-File III can uniquely identify it.  As you continue to be
        prompted to enter field names, PC-File III will keep you
        informed, at the bottom of the screen, about the number of print
        columns which you've used up.  If the report will go to your
        screen, you should not let this number go beyond 79.  If the
        report will go to your printer, you shouldn't let the number go
        beyond the maximum width of a print line.
 
        PC-File III will list your fields side by side on the output
        report, with one space inserted between each field.  For most
        reporting purposes, this is all that you need to know.  Just
        specify the desired fields and let PC-File III do the rest.
        You're freed from the burden of calculating which column you want
        the data printed in, or of designing your output forms (which
 
 
 
 
 
 
_
 
 
                           PC-File III(tm) User's Guide          Page 18.
 
 
        some database programs force you to do).  You'll find that the
        report which is automatically generated for you is usually quite
        adequate.
 
        For unusual reporting requirements, however, PC-File III provides
        some formatting options which you may wish to utilize.  The
        following information will show you how to format customized
        output reports, placing your data in selected locations on the
        report.
 
              **************************************
              *  Omitted from the evaluation copy  *
              **************************************
 
        You can also cause calculations to occur and be printed as the
        output field.  The format for calculated fields looks like this:
 
              **************************************
              *  Omitted from the evaluation copy  *
              **************************************
 
        When you've specified all of the data to appear on the listing,
        just push (enter).
 
        Here is a summary with some sample answers to the question "Field
        to List?":
 
        RESPONSE        PRINTED RESULT
        ------------    ------------------------------------
        FIELD1          The data from FIELD1
        *               The relative record number
        "FRIDAY"        The constant "FRIDAY" will be printed
        >10             Print ten blanks (ten spaces)
        <               Backspace 1 space
        =25             Tab to printer column 25
        /               Start new line on the printer
        /FF             Skip to a new page
        (A+B)SUM:7.2    A calculated answer
 
 
        You'll be asked to enter the Title of the report.  If you enter a
        title at this time, it will be saved with the report format and
        used whenever the report is printed.  If you enter a "null" title
        (no data, just an "enter" key), you'll be prompted for a title
        each time the report is about to be printed.
 
        When you enter the Title, there are some characters which you can
        put at the front of the title line to give you extra control over
        the output.  These characters will allow you to bypass title or
        heading lines, bypass printing of totals, omit detail lines, or
        cause prompting for changing of paper or envelopes in friction
        feed printers.
 
 
 
 
 
 
 
 
_
 
 
                           PC-File III(tm) User's Guide          Page 19.
 
 
              **************************************
              *  Omitted from the evaluation copy  *
              **************************************
 
        When you're asked "Save this report format?", Reply "Y" if you
        will ever want to print this report again, or "N" if this is a
        one-time only report.  If you reply "Y", you'll then be asked
        "Name for this format:".  Just type in a 1 to 8 character name by
        which you would like to remember this report format.
 
        You will next be asked:  "List on Printer, Screen, or Disk
        (P,S,D)".  Type "P" to get a printed list, or "S" to get the
        listing on your video screen.  If you are "cloning" (creating a
        new database) or printing to disk, reply "D".  See the section on
        Cloning a new database.
 
        You'll be told to prepare your printer for output, and asked:
        "Shall I print an alignment pattern?".  If you answer "Y", a
        pattern of X's will be printed (one line only) so that you can
        see if your printer was lined up correctly.  After the X's are
        printed, the question will be repeated.  This is most useful if
        you are using pre-printed output forms, or if you are printing on
        labels and want to be sure you have things lined up properly.
 
        You'll be given the opportunity to have subtotals printed, or to
        have them omitted.  The prompt for this is:
 
             Field to trigger subtotals, or
             press (Enter) for no subtotals
 
        If you enter the name of a field in your database, subtotals will
        be printed for your numeric fields whenever the named field
        changes in value.  If you enter no field name (just press the
        'enter' key), subtotals will not be printed.  You would normally
        indicate the field which was the first field specified the last
        time you sorted the database.
 
        If you selected subtotals, you'll be asked two more questions.
 
        First, "Do you want Group Highlighting?".  If you reply "Y", then
        only the first group item in each subtotal group will be printed.
        Subsequent items will print as blanks.  For example, if you
        sorted on DEPARTMENT then selected DEPARTMENT as the field to
        trigger subtotals, your report might look like this:
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
_
 
 
                           PC-File III(tm) User's Guide          Page 20.
 
 
 
             DEPARTMENT    ACTIONS
             ----------    -------
             A27           173
                           212
                           555
 
             B33           212
                           066
 
        If you answer "N" to the Group Highlighting question, then the
        same report would look like this:
 
             DEPARTMENT    ACTIONS
             ----------    -------
             A27           173
             A27           212
             A27           555
 
             B33           212
             B33           066
 
 
        Second, you'll be asked "New page after each subtotal?".  If you
        want to skip to the top of a clean page after the subtotals for
        each group are printed, answer "Y".  If you answer "N", you'll
        get one blank line after the subtotals, before the start of the
        next group.
 
        You'll be asked "List All records or Selected records (A or S):".
        If you want to see all the records in your report, answer "A".
 
        If you only want to list some of the records, answer "S".  In
        this case, you will be shown all of the field names and asked
        "Field to Select on:".  PC-File III wants to know which field
        will determine whether or not the record will be printed.  Enter
        enough of the field name to uniquely identify it.  You will then
        be asked "Compare how? >,<,=,<> ".  The field which you have
        selected will later be compared to some value which you will also
        later enter.  PC-File III is asking how it should compare the
        field to the value.  If you will want them to be equal, enter
        "=".  If you will want to see records which have the field less
        than some value, enter "<".  For a "greater than" comparison,
        enter ">".  For "unequal", enter "<>".  Now you will be asked for
        the value which your field will be compared to.  PC-File III
        asks:  "Compared to value:".  Enter the value.  Example: To list
        all employees with age greater than 40 you would respond as
        follows:
 
           "Field to select on:"         AGE
           "Compare how?       "         >
           "Compared to value: "         40
 
        If the comparison is for equal or unequal, you're also allowed to
 
 
 
 
 
 
_
 
 
                           PC-File III(tm) User's Guide          Page 21.
 
 
        enter the ">" character at the front of the searched for value.
        This will cause PC-File III to scan the entire field for an
        occurance of the value.  Example: To list all employees with
        "ART" appearing anywhere in the field called "HOBBIES" you would
        respond as follows:
 
           "Field to select on:"         HOBBIES
           "Compare how?       "         =
           "Compared to value: "         >ART
 
        If the comparison is for equal or unequal, you'll be allowed to
        use the wildcard character "_" in your search value.  Example: a
        search on "equal" for a value of "___TH" (three wildcard
        characters in front of the "TH") would print records for SMITH,
        BROTHERS, FORTH, etc.
 
        In case you need to make multiple comparisons to select the
        records to be printed, you'll now be asked: "And, Or, or End".
        If you only have one comparison to make, reply "E".  If you reply
        "A" (for "And") or "O" (for "Or"), the results of your first
        comparison will be "ANDed" or "ORed" with the results of
        subsequent comparisons which you'll be prompted for.  In all, you
        can make a total of ten "and/or" comparisons.
 
        In this context, "AND" means that ALL of the comparisons must be
        true.  "OR" means that ANY one or more of the comparisons must be
        true.
 
        For example: Assume that we wish to list all Female employees
        between the age of 20 and 40 who are single.  This table shows
        the appropriate responses:
 
         FIELD TO     COMPARE   COMPARED TO   AND/OR/END
         SELECT ON      HOW       VALUE
         ---------    -------   ------------  ----------
         SEX             =          F             A
         AGE             >         20             A
         AGE             <         40             A
         STATUS          =          S             E
 
        We used "AND" because we wanted ALL of the conditions to be true.
 
        ANDing and ORing combines from left to right.  Each time you make
        a comparison, the result is saved as the "truth" value, and this
        truth value is then used for the next comparison, etc.  Until you
        get used to the way this works, it is wise to practice your
        intended comparison by listing to the screen, just to see if the
        results are as expected.
 
        If you are using a printer for output, PC-File III will now pause
        with a message to allow you to set up the printer.
 
        Now is when PC-File III really goes to work for you.  Here's a
        peek at what's going on behind the scene:
 
 
 
 
 
 
_
 
 
                           PC-File III(tm) User's Guide          Page 22.
 
 
              **************************************
              *  Omitted from the evaluation copy  *
              **************************************
 
 
        SORTING THE DATABASE INDEX
 
        If you wish to have your output reports printed in a specific
        sequence, you may wish to sort the database index.  For example,
        to print your customer file in alphabetic sequence by last name
        you would first sort the database on "LASTNAME".  If you don't
        care about the sequence of your output report, you won't need to
        do a sort before printing the report.
 
        To sort the records, press (F7) or type "SOR" while viewing the
        master menu screen.  PC-File III will load a special sort program
        into the computer, print out all the field names, and ask: "Sort
        field #1:".  You should enter the name of the field which you
        would like to use to sequence the database.  (Just enter enough
        of the name to uniquely identify it.).  If the sequence will
        depend on multiple fields, you should give the name of the most
        primary field in the sort sequence.  For example, you may be
        producing an alphabetic listing by name.  Within all of the
        "SMITH" names, you would want the sort to include the first
        names, so that all the JOHN SMITHs would appear together,
        followed by all the JUNE SMITHs.  Sort field #1 in this example
        would be "LASTNAME", and sort field #2 would be "FIRSTNAME".
        You'll be allowed to specify up to ten field names in the sort
        sequence.
 
        You can also pull out any portion of the field for use in
        sequencing.
 
              **************************************
              *  Omitted from the evaluation copy  *
              **************************************
 
        As you enter each field name, you'll be asked "Ascending or
        Descending (A or D):".  This is your chance to tell whether you
        want the field to be sorted into ascending or descending
        sequence.  You can freely intermix ascending fields with
        descending fields.  For example, you might wish to print a list
        of employee salaries, according to department.  Each department
        will be listed, in ascending sequence.  Within each department,
        you would list salaries by descending sequence (so that the big
        earners show up on top).  To produce this list, you would sort as
        follows:
 
             DEPARTMENT   (Ascending)
             SALARY#      (Descending)
 
 
        When you've finished identifying all the fields and their
        corresponding sequences, just push (enter).
 
 
 
 
 
 
_
 
 
                           PC-File III(tm) User's Guide          Page 23.
 
 
        Finally, you'll be asked to identify a "work" drive for the sort
        to use as an overflow area.  The work drive will be used to
        contain a small file of sort status information.  It will also be
        used as "spill over" work space if the sort is unable to sort the
        entire database index in RAM memory.  The sort will do as much of
        its work as possible in the memory you have available for it.
        This is why the sort runs so fast.  If it needs more work space
        than there is memory available, it'll use the work drive as an
        "extension" of RAM memory.
 
        You must select a work drive that has enough empty space on it to
        handle the sort work requirements.  Also, to help with the speed
        of the sort, it's best to make the work drive different from the
        database "data" drive.  However, if you have a "hard disk" or
        enough room in a "RAM-drive", definitely put the work drive
        there.  For most databases in the "under 2000 records" category,
        the work space won't be needed and so it won't matter which drive
        you specify.
 
        The sort will now proceed and keep you informed of its status as
        it progresses.
 
              **************************************
              *  Omitted from the evaluation copy  *
              **************************************
 
 
        USING THE UTILITIES
 
        It is important to make frequent "backup" copies of your
        database, in case something happens to make it unusable.  The
        Utilities provided with PC-File III allow you to Copy your
        database, or to Rename, Delete, Export or Merge databases.
 
              **************************************
              *  Omitted from the evaluation copy  *
              **************************************
 
 
        ALTERING A FIELD NAME OR EDIT MASK
 
        You can change the name of any field defined in your database.
        You might want to do this, for example, to change a field
        attribute from numeric to character, or to shorten the field
        name.  Press (F9) or type "NAM" while viewing the master menu
        screen.
 
        You will be shown a list of all the field names and asked "Which
        Name to Change:".  Type the name of the field you wish to change.
        You'll then be asked to "Enter the New Name:".  Type the name
        that you would like to use for the new name of the field.
 
        Underneath the field name, you can optionally provide information
        telling PC-File III what characters will be allowed when keying
 
 
 
 
 
 
_
 
 
                           PC-File III(tm) User's Guide          Page 24.
 
 
        data into the field.  If you don't provide this information, all
        characters in the ASCII character set will be allowed for the
        field if it's not numeric.  If it's a numeric field, only the
        digits 0 through 9, decimal, plus, minus, and the letters "D" and
        "E" will be allowed.  ("D" and "E" are used when entering
        floating point numbers.)  We call this optional editing
        information an "edit mask".
 
        A carefully thought out edit mask can prevent the operator from
        accidentally keying invalid characters into your data field.
 
              **************************************
              *  Omitted from the evaluation copy  *
              **************************************
 
 
        ENDING / CHANGING TO A NEW DATABASE
 
        To end the program and return to the DOS operating system, or to
        change to a different database, type "END" while viewing the
        master menu screen.  PC-File III will ask: "Quit, Change file, or
        Resume?(Q,C,R)".  Answer "Q" if you have completed processing
        with PC-File III.  Answer "C" if you would like to keep using
        PC-File III, but wish to process a different database.  Answer
        "R" if you didn't really mean to type "END", in which case you'll
        be returned to the master menu screen.
 
 
        GLOBAL UPDATE AND DELETE
 
        If you wish to delete a lot of records at one time, or update a
        lot of records with the same value, then you'll find the global
        update/delete capabilities of PC-File III to be very useful.
        You'll be allowed to name a field in the database, and a value
        which you're looking for.  For every record found in the database
        which has the value in the field, global delete will delete the
        record.  Or, if you're doing global update, each found record can
        have any field changed to a new value.
 
              **************************************
              *  Omitted from the evaluation copy  *
              **************************************
 
 
        MERGING TWO DATABASES TOGETHER
 
        There is occasionally a need to combine two databases into one.
        For example, you may have been keeping your data in two separate
        databases because of a limitation on diskette space.  Suddenly,
        you find yourself with a new hard disk on your PC and wish to
        combine both databases into one.  Here's how it's done.
 
 
 
 
 
 
 
 
 
_
 
 
                           PC-File III(tm) User's Guide          Page 25.
 
 
              **************************************
              *  Omitted from the evaluation copy  *
              **************************************
 
 
        SETTING UP THE "SMART" KEYS
 
        Ten different keys on your keyboard can be preloaded with data
        and/or commands.  The keys are the NUMBER keys 0-9 located along
        the TOP of your keyboard.  These are NOT the function keys.  When
        they have been setup with data or commands, they can be used by
        pressing the "Alt" key at the left of the space-bar and, while
        holding the Alt key down, pressing the desired number key.  If
        the particular key has been preloaded with characters, they will
        be emitted just as if you had typed them in from the keyboard.
        If the smart key hasn't been set up, then nothing will happen if
        it's pressed.
 
              **************************************
              *  Omitted from the evaluation copy  *
              **************************************
 
 
        PRINTING MAILING LABELS
 
 
        PC-File III can do a very nice job of producing mailing labels
        from your database.  Excess spaces and empty lines will be
        automatically removed.  Labels can be produced in the standard
        "1-up" format, or you can optionally produce them "multi-up" in a
        side by side format.  The multi-up labels can be printed on
        continuous forms labels or on sheets of labels.
 
              **************************************
              *  Omitted from the evaluation copy  *
              **************************************
 
 
        SNAPSHOT MAILING LABELS
 
        There's a very useful feature built into PC-File III which we've
        been using here at ButtonWare for quite some time.  We've decided
        to make it generally useable by everyone.  It's called "Snapshot
        Mailing Labels" and it works like this:
 
        When you're adding a record to your database, or just viewing or
        modifying a record, you may wish to print a mailing label for the
        person or address being viewed.  If you've previously defined a
        special snapshot format, then you can produce the label whenever
        you want by pressing the "snapshot key."
 
 
 
 
 
 
 
 
 
 
_
 
 
                           PC-File III(tm) User's Guide          Page 26.
 
 
              **************************************
              *  Omitted from the evaluation copy  *
              **************************************
 
 
        CLONING: (OUTPUTTING A NEW DATABASE)
 
        You can create an entirely new database from an existing
        database.  You may want to do this to create a subset of the
        original database (with fewer records), or to change the way your
        database was defined.  You can also "split" a database into
        multiple parts.  This is especially useful when you're running
        out of disk space and wish to divide the database into several
        different ones.
 
        The cloning operation allows you to define a new database which
        is similar to an existing one, and then it copies the data from
        the existing database into the new one.  The new database can
        differ from the original in the following ways:
 
 
        -   Field lengths can be lengthened
        -   Field lengths can be shortened
        -   New fields can be inserted
        -   Fields can be removed
        -   Fields can be rearranged (the order of their appearance on
            the screen changed)
        -   The new database can contain "selected" records from the
            original
        -   The database can be changed from normal to encrypted
        -   The database can be changed from encrypted to normal
        -   The database can be changed from encrypted to encrypted (with
            a new security code)
 
        Follow the steps below to create a new database from an old
        database:
 
              **************************************
              *  Omitted from the evaluation copy  *
              **************************************
 
 
        SPLITTING AND JOINING FIELDS
 
        It's also possible to combine two adjacent fields into one field
        in your database.  You may want to do this, for example, if you
        defined a YEAR field, a MONTH field, and a DAY field and wish to
        combine them into one single field called DATE.
 
        You can also split up a single field into multiple fields.  For
        example, you may want to take the DATE field and split it out
        into MONTH, DAY, and YEAR.
 
        Here's how to split or join fields:
 
 
 
 
 
 
_
 
 
                           PC-File III(tm) User's Guide          Page 27.
 
 
              **************************************
              *  Omitted from the evaluation copy  *
              **************************************
 
 
        EXCHANGING DATA WITH VISICALC, OTHERS
 
        You may export your database for use with Visicalc, 1-2-3, or
        Multiplan or any other program which will allow input of a "DIF"
        or Visicalc format file.
 
              **************************************
              *  Omitted from the evaluation copy  *
              **************************************
 
 
        USING YOUR DATA WITH MAILMERGE
 
        You can export your database into a format which can be used with
        MailMerge, WORD, or other types of programs which require your
        fields to be separated by commas.  This is handy for keeping a
        mailing labels database and then printing customized letters to
        each person on your mailing list.  To do this, press (F8) or type
        "UTI" while viewing the Master menu screen.  When asked "Export
        to Visicalc or Wordstar", reply "W".  Then answer the questions
        about the input and output drive and the database name.  When the
        program is finished, your newly created file will have the name
        "filename.WS"  (Where "filename" is the name of your database).
 
 
        IMPORTING & EXPORTING YOUR DATABASE
 
        A very powerful feature of the PC-File III system is its ability
        to share data with many other programs, such as Lotus 1-2-3,
        Multiplan, PC-Calc, VisiCalc, WordStar, WORD, and Personal
        Editor.
 
        IMPORTING:
 
        You can import files or databases created on other systems, into
        the PC-File III database format.  In order to do this, the file
        to be imported must be in one of these formats:
 
            MailMerge format.  This format consists of data fields
            separated by commas, with quote marks usually surrounding
            each field.  The end of each record has a carriage-return and
            optionally a line-feed.  This format is used by the WordStar
            "MailMerge" program, is produced by many BASIC programs, and
            is an export option in many existing database programs.
 
            Text editor format.  This format consists of fixed length
            fields with no separators between each field.  The end of
            each record has a carriage return and sometimes a line-feed.
            This format is produced by most of the text editors and many
 
 
 
 
 
 
_
 
 
                           PC-File III(tm) User's Guide          Page 28.
 
 
            of the word processing programs.
 
            PC-Calc format.  This format is used by the ButtonWare
            spreadsheet program called "PC-Calc".
 
            DIF format.  This format is produced as an output or export
            option by many of the existing spreadsheet programs, and by
            some database programs.
 
            Fixed Length format.  This format is just like the Text
            Editor format described above, except that the end of each
            record is not marked by a carriage return.  Fixed length
            format is used by many programs which create "random" files.
            Every record is exactly the same length, and there are no
            delimiters or record separators.  The only way to tell where
            one record stops and the next one starts is by knowing the
            exact length of the records when they were created.
 
        If your file exists or can be changed into one of these formats,
        it can be imported into PC-File III for use as a database.
 
              **************************************
              *  Omitted from the evaluation copy  *
              **************************************
 
        EXPORTING:
 
        You can also export your PC-File III database for use with many
        other programs.  You'll be able to export into "VisiCalc",
        "MailMerge", Microsoft WORD, "PC-Calc", "DIF", or "Text Editor"
        formats.
 
        When you export the database, all of the records in the database
        will be copied out into the export file.  They'll be copied in
        the most recent sort sequence.  Therefore, if you will want the
        exported file to appear in some special sequence, you'll need to
        sort the database first.
 
              **************************************
              *  Omitted from the evaluation copy  *
              **************************************
 
 
        SECURITY (ENCYPHERED) DATABASES
 
        You can tell PC-File III that the database is to be kept secure
        from other people.  If you do this, PC-File III will maintain all
        of the data, the index, and the database description in an
        encrypted format.  This data can't be viewed by ANYONE without
        the password, not even clever programmers with disk snooping
        tools, because the data is highly "scrambled".  The only people
        who will be able to access and see your database are those who
        know the special security key which you'll be asked to enter when
        you first define the database.
 
 
 
 
 
 
_
 
 
                           PC-File III(tm) User's Guide          Page 29.
 
 
              **************************************
              *  Omitted from the evaluation copy  *
              **************************************
 
 
        IF YOUR DATABASE GETS DAMAGED
 
        PC-File III takes great pains to make sure that you don't
        accidentally damage your database. Three special techniques
        proprietary to ButtonWare are utilized to keep your data in good
        form on the disk.  Therefore, the number of occurrences of damage
        to databases is very low.
 
        However, accidents do happen.  Diskettes are a notoriously
        unreliable medium for the storage of information.  Sectors do go
        bad on the disks.  Read/write heads in the drives do get dirty.
 
        If something unforeseen does happen to your database, don't
        panic!  Chances are pretty good that it can be recovered.
 
              **************************************
              *  Omitted from the evaluation copy  *
              **************************************
 
        To help minimize the chances that you will damage a database in
        the future, we offer the following suggestions.
 
              **************************************
              *  Omitted from the evaluation copy  *
              **************************************
 
 
        CONFIGURING YOUR SYSTEM
 
        You can change many of the PC-File III options to suit your
        individual configuration.  You do this by running, from DOS, the
        standalone program called PC-SETUP.  Instructions for running
        PC-SETUP are given in the section "Getting Started".  This
        chapter details some of the options that can be changed.
 
        Changing the Printer Defaults
 
        PC-File III is distributed for use with the IBM 80-column Printer
        or with the Epson MX-80.  However, you can override the printer
        defaults for use with other printers.  These defaults include the
        length of your printed page, the width of the page, the control
        characters to cause "normal" or "condensed" printing, the method
        used to skip to the next page, and the number of lines to print
        on each page.
 
        Changing the Screen Colors
 
        You can change the colors (white on black) which are normally
        displayed.  After you have defined these colors they will be used
 
 
 
 
 
 
_
 
 
                           PC-File III(tm) User's Guide          Page 30.
 
 
        whenever you start up PC-File III.
 
        Using 40-Character Width Displays
 
        If you have a video display which only allows viewing in
        "40-column" mode, such as a television set with an RF Modulator,
        you can configure for this.
 
        Miscellaneous Settings.
 
        There are some other settings that can be established by running
        PC-SETUP.  These include a default disk drive, a default database
        name, settings for running on MS-DOS (non-IBM compatible)
        machines, and the control commands for your "snapshot" mailing
        labels.
 
        A Program to Run When Finished
 
        Sometimes, PC users don't wish to return to DOS when they're
        completed with their database processing.  You can establish a
        program to be run at the completion of PC-File III processing.
 
              **************************************
              *  Omitted from the evaluation copy  *
              **************************************
 
 
        USING MS-DOS (NON IBM "COMPATIBLE")
 
        PC-File III will run on many MS-DOS computers which don't claim
        to be IBM "compatible".
 
        If PC-File III won't run on your MS-DOS computer, taking the
        following steps should allow you to run the program correctly.
 
        First, try utilizing the ROM BIOS routines rather than the high
        speed RAM screen output routines of PC-File III.  To do this, run
        the standalone program called PC-SETUP.  To the first question
        (about IBM PC compatibility), answer number 2 "Mostly compatible
        with the IBM-PC".  After answering the rest of the questions, try
        again to run PC-File III on your machine.
 
        If the above doesn't work, try utilizing the ANSI device
        driver provided which is built in to many versions of MS-DOS.
        Here's how to do it.
 
        You must be using MS-DOS version 2.0 or later.
 
        Run the standalone program called PC-SETUP.  To the first
        question (about IBM PC compatibility), answer number 3 "Not
        very compatible".  After answering the rest of the questions,
        try again to run PC-File III on your machine.
 
        Many MS-DOS computers have the ANSI "device driver" available as
 
 
 
 
 
 
_
 
 
                           PC-File III(tm) User's Guide          Page 31.
 
 
        a separate option.  The option must be specified to MS-DOS in
        order for PC-File III to run with the above indicated changes.
        If the screen still doesn't look correct, you may also have to do
        the following:
 
            The file named "ANSI.SYS" must be placed on your "boot-up"
            disk.  This file is provided as part of the MS-DOS system
            disk on most systems.
 
            The file "CONFIG.SYS" must be placed on your "boot-up" disk
            and must contain the following statement (you can put it
            there) as one of the command lines.
 
                      DEVICE=ANSI.SYS
 
            The CONFIG.SYS file is created by you and is described in
            your MS-DOS manual.
 
        If you faithfully meet all of the above conditions, PC-File III
        will try to use the special device driver called "ANSI.SYS" which
        will allow it to run on almost any MS-DOS computer.
 
        On some MS-DOS computers there are no function keys.  The only
        absolutely necessary function key is (F10).  Therefore, provision
        has been made for you to "simulate" the pressing of (F10).  Hold
        down the (Ctrl) key and then press "A".  This is called "Ctrl-A".
        If you type in the "Ctrl-A" character, PC-File III will pretend
        that you pressed (F10).
 
 
        WRITING YOUR OWN PROGRAMS
 
        This information is provided for programmers who may wish to use
        the PC-File III databases with other programs.
 
        PC-File III makes an excellent "Front End" program for other
        systems which you might develop.  You can use PC-File III to
        handle the file maintenance functions, and concentrate your
        efforts on the rest of the system.
 
              **************************************
              *  Omitted from the evaluation copy  *
              **************************************
 
        A sample BASIC program is provided for you, to show you how to
        process the Index and Data records in your database.  It is named
        "SAMPLE.BAS".  Why don't you print it and have a look at it?
 
 
 
 
 
 
 
 
 
 
 
 
 
_
 
 
                           PC-File III(tm) User's Guide          Page 32.
 
 
        CALCULATING DISK STORAGE SPACE
 
        You can calculate the amount of disk space your database will
        require.
 
              **************************************
              *  Omitted from the evaluation copy  *
              **************************************
 
        If you add together the calculated length of the INX record and
        the calculated length of the DTA record and multiply this by the
        maximum number of records you expect to have in your database,
        you'll have the approximate number of characters of disk space
        required to contain your database.
 
 
        USERS WITH ONLY 1 DISK DRIVE
 
        You have two options for running PC-File III.
 
        Option 1:  Database on the "B:" drive, PC-File III on the "A:"
        drive.
 
        Even though some computers don't have a "B:" drive, DOS lets them
        pretend that they do.
 
        If you tell PC-File that your database is on the "B:" drive, the
        DOS operating system will automatically prompt you whenever you
        need to change disks.  Whenever it asks for the "A:" drive
        diskette, insert the PC-File III program disk.  Whenever it asks
        for the "B:" diskette, insert your database diskette.  The
        advantage of this approach is that you can use an entire diskette
        (360,000 characters) for your database.  The disadvantage is that
        you might have to exchange diskettes frequently.
 
        Option 2:  Database on the "A:" drive and PC-File III also on the
        "A:" drive.
 
        If you tell PC-File III that your database is on the "A:" drive,
        you will have to share your database with the PC-File III
        programs.  The advantage of this approach is that you won't have
        to keep changing diskettes.  The disadvantage is that you won't
        have very much room for your database because of the space
        occupied by programs.  However, you can create a "Production"
        version of PC-File III, to give yourself the maximum amount of
        available disk space.
 
        To do this, make a copy of the PC-File III diskette, which will
        become your production copy.  Then, on this copy, delete all
        files except PC-OVL.EXE, PC-FILE.EXE, PC-SORT.EXE, PC-PRINT.EXE,
        PC-DEF.EXE, PC-UTIL.EXE, PC-EXPOR.EXE, PC-FIX.EXE, PC-IMPOR.EXE,
        and PC-FILE.PRO.
 
        Some of these files may even be deleted.
 
 
 
 
 
 
_
 
 
                           PC-File III(tm) User's Guide          Page 33.
 
 
              **************************************
              *  Omitted from the evaluation copy  *
              **************************************
 
 
        A FEATURES CHECKLIST
 
        Making comparisons of the many database programs that are on the
        market is a popular pastime.  This features checklist is provided
        to simplify the task.  You'll soon discover that PC-File III does
        far more than most programs selling for many times the price.
 
        Database Type:
           Indexed.
           Maximum databases open simultaneously is one.
        User Interface:
           Menu driven.
           Full screen input.
           Password protection optional.
           Macro definition capability.
        Entry/Editing Capabilities
           "Character" field type.
           "Number" field type.
           User defined field types.
           Automatic Date and Time.
        RAM Memory
           Minimum required is 128K.
           Maximum useable is 640K.
        Printers Supported:
           Any printer on the "parallel" port.
        Disk Drives
           Minimum required is 1.
           Maximum supported is 8.
          (Drives A through H, but all the programs
           must be on one drive, and all the data in a
           particular database must be on one drive.)
        Hard Disk Support:
           Program may reside on hard disk.
           Data may reside on hard disk.
          (Programs must be in same subdirectory
           with data if on same drive.)
        Electronic Disk Support:
           Program may reside on electronic disk.
           Data may reside on electronic disk.
        Program Capacities:
           Maximum Field length (most fields) is 65 characters.
           Maximum Field length (last field) is 1665 characters.
           Maximum Fields per Database is 42.
           Maximum Record length is 1665 characters.
           Maximum Records per Database is 32,767.
           Maximum Number of Sort Control Fields is 10.
           Maximum No. of Compares for print record
              selection is 10.
           Maximum Number of "calculated fields"
 
 
 
 
 
 
_
 
 
                           PC-File III(tm) User's Guide          Page 34.
 
 
              in a report is 20.
        Search Types
           Wild Card.
           Soundex.
           Generic.
           Scan across (imbedded).
        Ad hoc queries possible?
           Yes.
        Case independence:
           Searches are case independent.
           Sorts are case independent.
        Indexing
           ALL fields are automatically indexed.
           Search or sort on ANY field in the database.
        Reports
           Maximum report width is 32767 characters.
           Control breaks are supported.
           Titles on each page are supported.
           Fields can be placed anywhere on the page.
           Subtotals and totals.
           Calculated report fields.
           Print to disk, printer, or screen.
           Boolean logic for record selection.
        Communication with other programs
           Can read and write the following file types
              ASCII text files
              Comma-separated (WORD, MailMerge)
              Visicalc "VC" files
              VisiCalc "DIF" files
              PC-Calc files
              Fixed length files
        Openness of the system
           Is Program "copy-protected"?  No.
           Method is provided to calculate database sizes.
           Programmer information is provided.
           Sample BASIC program is provided.
        Miscellaneous advanced features
           Encryption.
           "Browse" mode.
           Global update & delete.
           Correctly handles floating point data.
           Data restructuring is supported.
           "Snapshot" mailing labels.
           Macro keys can be defined.
           Proprietary disk writing techniques
             protect against loss of data.
        Program cost
           Initial purchase is $49.
           Updates cost approx. $20.
 
 
 
 
 
 
 
 
 
 
 
_
 
 
                           PC-File III(tm) User's Guide          Page 35.
 
 
        SOME NOTES ON PERFORMANCE
 
        PC-File III is well known for its excellent speed of operation.
        However, with very large databases containing thousands of
        records, things can slow down considerably.  The following hints
        and information should help you to get the maximum possible speed
        when processing your data.
 
              **************************************
              *  Omitted from the evaluation copy  *
              **************************************
 
 
        SUMMARY OF ENHANCEMENTS TO THIS VERSION
 
 
        -   New high speed screen output routines are used for IBM
            compatible machines.
        -   Expanded capabilities allow 32767 records maximum.
        -   One "super" field is allowed per database.  It must be the
            last field defined, and can have a maximum size of all the
            remainder of the screen.
        -   A "wildcard" search character is provided for all PC-File and
            PC-Print searching.
        -   "Snapshot" mailing labels.  Users can print a mailing label
            instantly for the record being displayed.
        -   Added direct path from "FINding" a record to "MODifying" or
            "DELeting" it.  After the modify or delete, the FINd will
            continue with the next sequential record.
        -   Performance improvement.  ALL of RAM memory is now used by
            PC-File and PC-Sort.
        -   Change to the search logic. Records will now be searched
            beginning from the "current pointer" to the end of the index,
            then from the front of the index forward to the current
            pointer.  The old search was always from the beginning of the
            index to the end.  This change permits the user to process
            database updates in sequence for performance gains.
        -   Enhanced the "DUPE" key.  It now displays duplicated data
            instantly.  Data can be "duplicated" from previously viewed
            or modified records as well as from added records.
        -   PgDn and PgUp keys may now be used when browsing, as
            substitutes for "++" and "--".
        -   The amount of data that each "smartkey" can hold is now 300
            characters for each key.  It was 75.
        -   Provided new program PC-SETUP.  Asks configuration questions,
            then builds the profile file PC-FILE.PRO automatically.
        -   Option for "Group Highlighting" on reports.
        -   Option for new page after subtotals on reports.
        -   Numeric data will now add correctly even if it contains
            imbedded "$","+", or commas.
        -   The "transpose when printing" character (a tilde) is
            provided. "Smith~John" will print as "John Smith".
        -   Added a new user definable parameter "/PAGEWIDTH".  Allows
            user to tell PC-Print how wide a report may be in "normal"
 
 
 
 
 
 
_
 
 
                           PC-File III(tm) User's Guide          Page 36.
 
 
            print mode before going to "condensed" mode.
        -   Time of day removed from report titles.  (Many users
            requested this.)
        -   Mailing labels can now also be printed on sheets of labels.
            Sheets can be manually inserted or automatically fed.
        -   Option provided to use FORMFEED or NEWLINE characters to
            eject report pages.
        -   PC-IMPORt has been integrated with the rest of the system.
            It no longer needs to be run standalone.
        -   Utilities include deletion of report formats.
        -   Utilities will also copy filename.KEY files.
        -   Disk error recovery has been enhanced.  Errors on the disk
            will now be retried 10 times.
        -   Minor fixes and cosmetic improvements.
 
 
        THE FILES ON YOUR PROGRAM DISK
 
        This information is provided so that you'll know the function of
        each file in the PC-File III system.
 
              **************************************
              *  Omitted from the evaluation copy  *
              **************************************
 
 
        SOME FREQUENTLY ASKED QUESTIONS
 
        -   "Do you have any other programs that you're distributing?"
            ANSWER: Yes, we have an excellent communications program
            called "PC-Dial".  We have a spreadsheet program called
            "PC-Calc" which is by far the nicest available in its price
            range.  There's also a graphics program called "PC-Graph"
            which allows you to graph your PC-File database.  PC-Graph
            will be available in January, 1985.  Each program is
            available from ButtonWare for under $50 and can be ordered
            directly by calling (206)746-4296.  Visa and MasterCard
            accepted.
 
            We take great pride in our ability to provide high quality,
            high function, easy to use programs for a popular price.  We
            hope to have our word processing program (PC-Type) available
            sometime in 1985.
 
            Also in the plans are the integration of our products into
            one easily used package.  You'll be able to use the
            spreadsheet program, the database program, the graphics
            program, the communications program, and the word processor -
            all from one menu and with the same data.  The price will be
            "very popular".  We plan to name it "Medley(tm)".  We can't
            say for sure when "Medley" will be available, but we'll bust
            our Buttons (so to speak) getting it to you!
 
        -   "Do you have any predefined database applications available?"
 
 
 
 
 
 
_
 
 
                           PC-File III(tm) User's Guide          Page 37.
 
 
            ANSWER: Not at this time.  However, there are over 90,000
            users of PC-File now (and the number is growing rapidly), so
            if you'd like to become an entrepreneur, why don't you create
            an application and market it?  A very good one would be an
            address and phone number database with mailing labels.  How
            about a database for stamp collectors?  If you notify us of
            your product, we'll include a listing for you here in future
            versions of this manual.
 
            Here's the start of what we hope will become a long list:
 
            LETUS A-B-C is a database containing extracts of articles
            from the major PC magazines over the past several years.  You
            can do searches by keywords, subject, title, or author to
            find a needed article.
 
                      LETUS A-B-C
                      R. Nelson
                      3790 El Camino Real
                      Suite 2006
                      Palo Alto, CA  94306
 
 
                  **************************************
                  *  Omitted from the evaluation copy  *
                  **************************************
 
        -   "What computers does PC-File III run on?"  ANSWER: We've
            worked very hard to make PC-File III run on as many different
            "MS-DOS" computers as possible.  It's known to run on the
            following machines:
 
              AT&T PC
              CANNON AS100               ITT XTRA
              CHAMELEON                  KAYPRO 10 (8088 coprocessor)
              COLUMBIA 1600-4            LEADING EDGE
              COMPAQ                     OTRONA ATTACHE
              CORONA                     PANASONIC SR. PARTNER
              DIMENSION 6800 (IBM mode)  SANYO MBC 550
              EAGLE 1630                 SPERRY PC
              FUJITSU MICRO 16S          STEARNS (ST-DOS)
              GRID COMPASS (/ANSISYS)    TANDY 2000
              HONEYWELL 6/10             TELEX
              HYPERION                   TI PROFESSIONAL ("emulate" mode)
              IBM PC, PCjr, XT, AT       ZENITH Z-150
 
 
            This list was made possible through reports from users who
            kindly provided the information.  If you're able to add to
            our knowledge, please send the details so that we can improve
            the list.
 
        -   "Can I obtain the source code for the program?" ANSWER: No.
 
 
 
 
 
 
 
_
 
 
                           PC-File III(tm) User's Guide          Page 38.
 
 
        IF YOU NEED HELP
 
        It's our express goal to provide the highest quality programs for
        the lowest price in the industry.  Nobody benefits more from this
        policy than you, the computer user.
 
        Our products are so overwhelmingly popular that the telephone
        here rings almost constantly.  While the author heartily enjoys
        talking with users, it's becoming impossible to spend any time
        enhancing the programs.
 
        If we have to install support lines and hire technical personnel
        to provide telephone assistance, the price of our products will
        have to be increased.  We don't want to have to do this, and
        we're certain that you agree.
 
        Therefore, we no longer offer telephone support.  The best way
        to receive help with your questions or a response to your
        suggestions is to write us a letter.  Be certain that you
        carefully detail the problem and all symptoms.  Please
        include a stamped, self addressed return envelope.  We'll try
        to respond to all such mailings.
 
        Questions and requests from non registered users will be
        ignored.
 
 
 
        ERROR MESSAGES
 
        Although we try to prevent numbered error messages from ever
        appearing on your screen, we can't guarantee that it will never
        happen.  If you do receive an unusual error message that you
        can't figure out, the following list of messages and message
        numbers may help you to figure out what's happening.
 
              **************************************
              *  Omitted from the evaluation copy  *
              **************************************
 
 
 
 
 
        THE USER-SUPPORTED CONCEPT
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
_
 
 
                           PC-File III(tm) User's Guide          Page 39.
 
 
                              User-Supported Software
          You're encouraged to copy and share this diskette with others.
            If after evaluating this program you find it to be useful,
                       You're trusted to send a $49 payment.
 
                                    Jim Button
                                   P.O. Box 5786
                                Bellevue, WA  98006
 
 
 
        User-supported software is an experiment in distributing computer
        programs, based on these beliefs:
 
        1.  That the value and utility of software is best assessed by
            the user on his/her own system.
 
        2.  That the creation of personal computer software can and
            should be supported by the computing community.
 
        3.  That copying of programs should be encouraged, rather than
            restricted.
 
        Anyone may legally obtain an evaluation copy of the program from
        a friend or computer club.  After you've had a chance to use and
        evaluate the program in your own environment, you're trusted to
        either forward a payment to the author, or to discontinue use of
        the program.  In any case, you are encouraged to copy the program
        for evaluation by others.
 
        Free distribution of software and voluntary payment for its use
        eliminates costs for advertising and copy protection schemes.
        Users obtain quality software at greatly reduced cost.  They can
        try it out before buying, and do so at their own pace and in the
        comfort of their own home or office.  The best programs will
        survive, based purely on their quality and usefulness.
 
        Please join the experiment.  If you believe in these ideals, your
        payment is solicited to help make them work.
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
_
 
 
                           PC-File III(tm) User's Guide          Page 40.
 
 
        WHY SHOULD I PAY?
 
        We were hoping you would ask.
 
        You're trusted to use this copy of PC-File III for evaluation
        purposes only, until the requested payment is made.  There are
        some solid reasons for sending in your payment:
 
        -   It's the right thing to do.  You'll feel a lot better about
            yourself!
 
        -   When we receive your payment, we'll send you the latest
            version of PC-File III.  This is the version with the fewest
            bugs and the newest enhancements.  New features are being
            added regularly to this program.
 
        -   You'll receive a complete, printed copy of the User's Guide.
 
        -   We'll add you to our database of supporters.  Every time a
            new version comes out, we'll automatically send you a flyer
            giving  you the option of buying the new version for a
            nominal update charge - usually about $20.
 
        -   We'll give you "priority" treatment if you need to write to
            us with problems or questions.
 
 
        RESTRICTED PERMISSION TO COPY
 
        PC-File III is not a public domain program, and never has been.
        It is Copyright(C) 1983, 1984, 1985 by Jim Button.  The
        conditions under which you may copy the PC-File III programs and
        documentation are clearly outlined below.  WARNING!!!  The author
        intends to vigorously prosecute copyright violations.
 
        Individuals are granted permission by the author to freely copy
        the PC-File III diskette for their own use or for others to
        evaluate, so long as no price or other consideration is charged.
        The printed material may not be copied without the express
        written permission of the author.
 
        Computer clubs (non-profit) are granted permission by the author
        to copy the PC-File III diskette and share it with their members,
        so long as:
 
        1.  No price or other consideration is charged.  However, a
            distribution cost may be charged for the cost of the
            diskette, shipping and handling, as long as it's not more
            than $9 total.
        2.  The program or documentation are not modified in any way and
            are distributed together.
        3.  PC-File III may not be sold as part of some other more
            inclusive package.
        4.  The programs may not be "rented" to others.
 
 
 
 
 
 
_
 
 
                           PC-File III(tm) User's Guide          Page 41.
 
 
        5.  The programs may not be distributed via computerized
            "bulletin boards" or through any other telecommunications
            link.
        6.  The printed manual may not be copied or reproduced in any
            way.
 
        Any group, person, or organization which purchases advertising
        space in any publication may not distribute PC-File III under the
        "computer club" conditions.
 
        Companies, schools, universities, government and other
        organizations are granted permission by the author to copy the
        PC-File III programs and documentation for use on other computers
        and at other locations in the organization, so long as:
 
        1.  The full registration fee of $49 has been paid for the
            original copy of the program.
        2.  A usage fee of $40 is paid to ButtonWare for each additional
            building where PC-File III will be used.  Within any building
            for which the usage fee has been paid, PC-File III may be
            copied freely for use on any computer in that building.  You
            may also make as many copies as desired for classroom use or
            training which takes place within the building.
        3.  Where Local Area Networks, "LAN"s, are involved, the above
            building rule also applies.  The building usage fee must be
            paid if PC-File III is copied into the memory or storage of
            any computer in the building.
 
        Organizations are invited to correspond with ButtonWare
        concerning a special license agreement which would enable you to
        copy and distribute the diskettes with impunity within your
        organization.  We also offer quantity purchase discounts.
 
        Programmers, Software and hardware distributors and system
        developers are encouraged to include PC-File III with their own
        products.  You must have written permission from ButtonWare
        before you can copy or distribute PC-File III.  Please contact
        ButtonWare to obtain a written agreement.
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
_
 
 
        INDEX
 
 
      **************************************
      *  Omitted from the evaluation copy  *
      **************************************
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
_
 
 
                                  ORDER FORM
           -------------------------------------------------------
           JIM BUTTON          Call: 1-800-JBUTTON (24 hrs)
           ButtonWare
           P.O. Box 5786       Federal Employer I.D.# 91-1228699
           Bellevue, WA  98006
 
                      (Qty discounts avail)   PRICE     PRICE
           ITEM                        QTY    EACH      EXTENDED
           ==========================  ===    =====     ========
           "PC-File III"  version 3.0          $49      $
           (Includes User's Guide)     ---               -------
 
           Usage fee for additional            $40      $
           copies (each building)      ---               -------
 
           Extra printed User's Guide          $25      $
           (Registered users only)     ---               -------
 
           Package of 10 PC-File              $150      $
           Printed User's Guides       ---               -------
 
           Package of 100 PC-File            $1000      $
           Printed User's Guides       ---               -------
 
           PC-Dial                             $29      $
           Async communications pgm.   ---               -------
 
           PC-Calc
           Spreadsheet program         ---     $48      $-------
 
                                           SUBTOTAL:    $
                                                         -------
           7.8% state sales tax                         $
           (Washington state residents)                  -------
                                              TOTAL:    $
                                                         -------
           (Available only on double-sided diskette)
 
           MasterCard      or Visa      or personal check
                     -----        -----                  -----
           Card number:
                       -------------------------------------------
           Expiration date:          Signature:
                           ---------           -------------------
           Name
                  ------------------------------------------------
           Address
                  ------------------------------------------------
 
                  ------------------------------------------------
           City                            State      Zip
                  ------------------------      -----    ---------
 
 
 
 
 
 
 
 
 
 

```
{% endraw %}

## SAMPLE.BAS

{% raw %}
```bas
10 ' *********************************************************************
20 ' *   PC-File Sample program.                                         *
30 ' *   (C)Copyright 1984 by Jim Button                                 *
40 ' *********************************************************************
50 ' *
60 ' *  This program reads a sample database, in sequence by the most
70 ' *  recent sort (in sequence by the Index). For each record read, a
80 ' *  line is printed on the printer.
90 ' *  The name of the hypothetical database is "SAMPLE".
100 '*
110 '* The sample database was defined as follows:
120 '*    NAM          20
130 '*    ADDRESS      25
140 '*    CITY         12
150 '*    STATE         2
160 '*    ZIP           5
170 '*                ---
180 '*                 64  (total length of data fields)
190 '*
200 '* The length of an index record in this database is:
210 '*    2 * (number of fields) + 2,  or
220 '*    2 * 5 + 2 = 12
230 '*
240 '* The length of a data record in this database is:
250 '*    Length of data fields + 1,  or
260 '*    64 + 1 = 65
270 '
280 '* NOTE: if record length is longer than 128, then you must start BASIC
290 '*       with the /S:512 option. See page 2-4 in your BASIC manual.
300 '
310 END ' This is here because some people INSIST on trying to RUN this!
320 '     You'll want to put it elsewhere in a production program.
330 '....................................................................
340 '    DATA INITIALIZATION
350 '
360 INX.LEN = 12
370 DTA.LEN = 65
380 '....................................................................
390 '     OPEN FILES FOR PROCESSING
400 '
410 OPEN "SAMPLE.INX" AS #1 LEN=INX.LEN
420 FIELD #1,2 AS XNM$,2 AS XAD$,2 AS XCI$,2 AS XST$,2 AS XZI$,2 AS POINT.INX$
430 '  Each of the above 2-byte fields contains the first 2 bytes of the
440 '    the corresponding field in the data file.
450 '  The last 2 bytes of the index rcd are a binary pointer
460 '    to the relative record number in the data file.
470 '
480 OPEN "SAMPLE.DTA" AS #2 LEN=DTA.LEN
490 FIELD #2, 20 AS NAM$, 25 AS ADDRESS$, 12 AS CITY$, 2 AS STATE$, 5 AS ZIP$
500 '...................................................................
510 '     FOR EACH INDEX RECORD, RETRIEVE THE CORRESPONDING DATA RECORD
520 '
530 GET #1                            '  Get nxt sequential INX rcd
540 IF LEFT$(XNM$,1) = "/" THEN 530 '  Deleted record. Bypass it
550 IF LEFT$(XNM$,1) = "\" THEN 600 '  End of file.
560 POINTER = CVI(POINT.INX$)         '  Get pointer into DTA file
570 GET #2,POINTER                    '  Random retrieve DTA record
580 LPRINT NAM$;" ";ADDRESS$;" ";CITY$;" ";STATE$;" ";ZIP$
590 GOTO 530
600 '...................................................................
610 '      PROCESSING IS COMPLETED. SHUTDOWN.
620 '
630 CLOSE
640 END
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0624

     Volume in drive A is DISK0624
     Directory of A:\

    CRC      TXT      1285   1-01-80   1:28a
    CRCK4    COM      1536  10-21-82   5:50p
    DOC      BAT       249  11-02-84   3:00a
    FILES624 TXT      1536   1-01-80   7:03a
    GO       BAT       381   6-11-90   8:48a
    PC-DEF   EXE     12288  11-02-84   3:01a
    PC-EXPOR EXE     16512  11-02-84   3:00a
    PC-FILE  DOC    108505  11-02-84   3:00a
    PC-FILE  EXE     33408  11-02-84   3:00a
    PC-FILE  PRO       128  11-02-84   3:00a
    PC-FIX   EXE     14080  11-02-84   3:01a
    PC-IMPOR EXE     15104  11-02-84   3:00a
    PC-LABEL EXE      8960  11-02-84   3:00a
    PC-OVL   EXE     21376  11-02-84   3:00a
    PC-PRINT EXE     28672  11-02-84   3:01a
    PC-SETUP EXE     10368  11-02-84   3:01a
    PC-SORT  EXE     18432  11-02-84   3:00a
    PC-UTIL  EXE     18816  11-02-84   3:00a
    SAMPLE   BAS      2873  11-02-84   3:00a
           19 file(s)     314509 bytes
                               0 bytes free

### Directory of PC-SIG Library Disk #0624

     Volume in drive A has no label
     Directory of A:\

    DOC      BAT       249  11-02-84   3:00a
    PC-DEF   EXE     12288  11-02-84   3:01a
    PC-EXPOR EXE     16512  11-02-84   3:00a
    PC-FILE  EXE     33408  11-02-84   3:00a
    PC-FILE  PRO       128  11-02-84   3:00a
    PC-FILE  DOC    108505  11-02-84   3:00a
    PC-FIX   EXE     14080  11-02-84   3:01a
    PC-IMPOR EXE     15104  11-02-84   3:00a
    PC-LABEL EXE      8960  11-02-84   3:00a
    PC-OVL   EXE     21376  11-02-84   3:00a
    PC-PRINT EXE     28672  11-02-84   3:01a
    PC-SETUP EXE     10368  11-02-84   3:01a
    PC-SORT  EXE     18432  11-02-84   3:00a
    PC-UTIL  EXE     18816  11-02-84   3:00a
    SAMPLE   BAS      2873  11-02-84   3:00a
    CRC      TXT      1285   1-01-80   1:28a
    CRCK4    COM      1536  10-21-82   5:50p
    GO       BAT       381   6-11-90   8:48a
    FILES624 TXT      1536   1-01-80   7:03a
           19 file(s)     314509 bytes
                               0 bytes free
