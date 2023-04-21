---
layout: page
title: "PC-SIG Diskette Library (Disk #706)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0706/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0706"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "NAMEPAL"

    NAMEPAL is the complete automatic address book.  It keeps lists of
    names, addresses, phone numbers, and related comments, and prints them
    in a pocket-size "book" you can use anywhere.  NAMEPAL works on plain
    paper with any printer -- even lasers.  You can optionally print on both
    sides of each page, and you can code your data to keep track of club
    members, birthdays, babysitters, or any other grouping.  It also
    performs other handy tasks, like printing mailing labels, Rolodex card
    files, and full-page rosters.  NAMEPAL is also completely menu-driven,
    and has on-line help screens.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES706.TXT

{% raw %}
```
Disk No:  706                                                           
Disk Title: NamePal                                                     
PC-SIG Version: S2.0                                                    
                                                                        
Program Title: NamePal                                                  
Author Version: 1.46                                                    
Author Registration: $19.95                                             
Special Requirements: None.                                             
                                                                        
NAMEPAL is the complete automatic address book.  It keeps lists of      
names, addresses, phone numbers, and related comments, and prints them  
in a pocket-size ``book'' you can use anywhere.  NAMEPAL works on       
plain paper with any printer -- even lasers.  You can optionally print  
on both sides of each page, and you can code your data to keep track of 
club members, birthdays, babysitters, or any other grouping.  It also   
performs other handy tasks, like printing mailing labels, Rolodex card  
files, and full-page rosters.  NAMEPAL is also completely menu-driven,  
and has on-line help screens.                                           
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## MANUAL.DOC

{% raw %}
```




        
        
        
        

                                N a m e P a l  (1.44)
        
        
        
                Data Base for Names, Addresses, Telephones & Comments
        
        
                                Prints Mailing Labels
                              Pocket-size Address Books
                                 Rolodex & 3x5 Cards
                                  Full Page Rosters
                              Envelopes & Custom Labels
        
        
        

        
        
            
        
       
                              Program and Documentation
        
                                  Copyright 1989 by
           
                                     WR Software
                                    P.O. Box 4819
                               Walnut Creek, CA 94596
          
                                 Registration $19.95
        
                  Permission hereby granted to make exact copies of
                              Program and Documentation
        

        
        
           
           
                                    N a m e P a l
           
           
                                  Table of Contents
           
           
           Getting Started
             Introduction..........................................1-1
             Setting Up Disk Files.................................1-1
             Program Loading.......................................1-2
             Using a NamePal Menu..................................1-2
             Help..................................................1-2
             Record Types..........................................1-2
             Vary Setup............................................1-3
             States & Area Codes...................................1-3
           
           Record Selection
             Introduction..........................................2-1
             Personal and Business Names...........................2-1
             Last Name/Key (or portion)............................2-1
             Categories or Cat.(s).................................2-2
             Revise Categories.....................................2-2
             Record Number.........................................2-3
             Summary...............................................2-3
           
           Commands
             Adding Records........................................3-1
             Changing Records......................................3-1
             Modeling Records......................................3-2
             Deleting Records......................................3-2
             Summary...............................................3-2
           
           Printed Listings
             Introduction..........................................4-1
             Choosing Records for Printing.........................4-1
             Sequence & RE-SORT....................................4-1
             Address Book..........................................4-1
             Labels................................................4-2
             Custom Labels & Envelopes.............................4-3
             Page Size & File Cards................................4-3
             Setup Printer (Compress, etc.)........................4-3
        
           
       



                                 NamePal User Manual                         
        GETTING STARTED                                                   1-1


        Welcome to NamePal, the complete automatic address book. It will keep
        your lists of names, addresses, phone numbers, and related comments
        on your computer, and then print them out in an address book that
        you can use anywhere. The address book can be almost any size, and
        can be optionally printed on both sides of each page like a real
        book. You can code your data to keep track of friends, club members,
        pizza places, or any other grouping that is important to you. NamePal
        also performs other handy tasks, like printing mailing labels,
        Rolodex card files, and full-page rosters.

        Best of all, NamePal is quite easy to use. The program is completely
        "menu-driven" so choices are made from a list of options. These
        options are described on-screen in Help messages, if you want
        assistance. You can also select an on-screen introduction to the
        entire program.

        NamePal is a "shareware" program, so you are encouraged to try it out
        and make copies for friends. If you like the program and continue to
        use it, we ask that you send in a $19.95 registration fee (mail to:
        WR Software, PO Box 4819, Walnut Creek, CA 94596 U.S.A.). When you
        register, you are sent the latest version of NamePal, along with two
        pocket-size vinyl address book covers, book mounting templates, and
        printed documentation. You also receive a separate Export/Import
        program that lets you exchange name data with other programs, such as
        word processors (for mail merge) and data base programs. We will also
        provide free program support and information about future upgrades.
        
        If you decide not to register because the program isn't quite right
        for you, we would really like to know why. For example, NamePal may
        not meet all your needs, or may not work correctly with your printer.
        We want to fix these kinds of problems whenever possible, so please,
        take a few minutes and tell us about them.
        
        
        Setting Up Disk Files
        
        This documentation is more helpful if you read it at your computer,
        and try out the various commands. To use NamePal you will need DOS
        2.1 (or later), and at least 128K of memory. To begin, copy the
        NamePal diskette to another floppy or your hard disk, and save the
        original disk as a backup. Floppy users should format a new diskette
        (FORMAT B:), and then make the copy (COPY A:*.* B:).

        Hard disk users should be logged on to the hard disk, so the DOS
        prompt "C>" is showing. You will probably want to set up a directory
        for NamePal, for example one called "NP". Type "MKDIR \NP" and press
        <Enter> to create the directory, then type "CHDIR \NP" and press
        <Enter> to change to the new directory. Finally, insert the NamePal
        diskette into floppy drive A, and type "COPY A:*.*" and press <Enter>
        to copy the files to your hard disk.
        GETTING STARTED                                                   1-2


        Program Loading
        
        NamePal will use the date in your computer to tell you when names
        were added or changed on your file. If your system asks for the date
        when you turn the computer on, you should reply with the correct
        current date. At the DOS prompt (for example, A>) type NAMEPAL and
        press the <Enter> key. After the program loads, you will see an
        introductory message. Press any key to advance to the Main Menu.
        
        
        Using a NamePal Menu
        
        A "menu" is a list of things you can do with NamePal. You can select
        menu items by pressing their first letter ("a" or "A" for "Add"). You
        can also use the down arrow key to move the "light bar" until the
        item you want is highlighted, and then press <Enter>. Another way
        is to choose the number next to the menu item you want (press "1"
        for "Add"). If you select "Quit" (or press the ESCape key) on the
        Main Menu, you will leave NamePal and return to DOS. Doing the same
        thing on any other menu will return you to the Main Menu.
        
        In the upper left-hand corner of the Main Menu is a count of records
        on the file. The original NamePal files contain a few sample records
        to help demonstrate the program. If you are using a floppy diskette,
        be sure to leave it in the computer drive from now on.
        
        
        HELP
        
        If you select "HELP" on the Main Menu, you will begin a brief
        on-screen introduction to NamePal. The bottom of your screen shows
        directions for viewing or exiting this introduction. You can also use
        the function keys to get additional HELP on any NamePal menu. Use the
        function key that corresponds to the menu number you want help with
        (for example, for help with "2. Change," press the F2 function key).
        The valid HELP function keys are displayed on the right side of every
        NamePal menu.
        
        
        Record Types
        
        There are three kinds of records you can add to NamePal. Select ADD
        on the Main Menu to see the record types: Personal, Business, and
        Notecard. The Notecard record is a freeform layout that lets you
        enter up to seven comment lines with any kind of information.
        Notecard records are used for miscellaneous notes and additional
        comments for "name" records. Notecard records can also hold "printer
        setup" codes, if you want to change the standard character size or
        style on printed reports. See "Printed Listings--Setup" for more
        information about this feature.
        GETTING STARTED                                                   1-3


        Personal and Business records are very similar. Both contain places
        for name, address, phone, category, and comment data. The KEY to
        Personal records is the Last Name, while Business records have a KEY
        that is separate from the name of the business. Records can be
        selected by their KEYs, for changing, printing, etc. Records are also
        selected by their Type, Number, or Category (see "Record Selection").

        Personal records are alphabetized (sorted) by last name, but if the
        last names are identical, then part of the first name is also used.
        For example, Bob Smith will come before Jim Smith. Business and
        Notecard records are alphabetized by their KEYs. Also, records can
        be sorted by their "re-sort" field, if you need printouts in another
        order. For example, you might want mailing labels printed in Zip Code
        sequence.
        
        
        Vary Setup
        
        You can use VARY SETUP to change mailing label widths and the size
        of printed ADDRESS BOOKs.  See the "Printed Listings" section for
        more information about these settings.
        
        Select VARY SETUP and then PRINTER to change the way "page skips"
        are handled by your printer.  Printer Setup has three options:
        DEFAULT, STD EJECT, and CUSTOM.  The DEFAULT setting creates "line
        feeds" only, and is the best choice if you hand feed each sheet of
        paper individually into your printer.  The STD EJECT option uses
        ASCII (12) for page ejects (form feeds), and is the best choice for
        most printers.  Select the STD EJECT option first, and see if FULL
        PAGE and ADDRESS BOOK reports work correctly on your system.  If STD
        EJECT doesn't work with your printer, you should look in your printer
        manual for the "page eject" code (also called "form feed" or "top of
        form"), and then enter this 'decimal' number using the CUSTOM option.
        
        If you have a color monitor, you may want to change the colors on
        your display. First, select VARY SETUP, and then MONITOR. Each time
        you select FOREGROUND or BACKGROUND on the VARY COLOR menu, your
        screen will change to a new color combination. When the colors you
        desire are on the screen, exit this menu (Quit) and your color choice
        will be permanently saved.
        
        
        States & Area Codes
        
        Select STATES/AREA CODES on the Main Menu to see a list of these
        tables. One set of tables contains the official Post Office two-
        letter state abbreviations. There is also a telephone "reverse" area
        code directory -- if you know the area code, the directory shows you
        which state has that area code.
        RECORD SELECTION                                                  2-1


        There are a number of ways to access NamePal records. You can use
        the sample records that come with NamePal to demonstrate the various
        selection commands. The INQUIRE command lets you look at records on
        your file, but not revise them. If you choose INQUIRE from the Main
        menu, the next thing you see is the "Selection" menu.

        The Selection menu shows all the ways you can choose records. This
        same Selection menu appears with the other primary commands (PRINT,
        CHANGE, DELETE, and MODEL). After you learn how to select records
        using INQUIRE, you will know how to select records for any purpose.

        Notice that the lower left-hand corner of the Selection menu screen
        displays the menu choice you made previously (in this case, INQUIRE).
        This "history" of menu choices appears on every display after the
        Main Menu. It shows all the menu choices you made prior to the
        current menu.
        
        
        Personal and Business Names
        
        If you choose PERSONAL NAMES on the "Selection" menu, NamePal chooses
        all the names on the file added with the "Personal" record format.
        Using the file that comes with NamePal, you see the record for
        "Robert A. Samuelson." The KEY to this record is the last name:
        "Samuelson." This is the only "Personal" record (Type "P") on the
        demonstration file. If there was more than one "Personal" record, you
        would first see a list of the names.

        Now select INQUIRE again, and then BUSINESS NAMES. With the initial
        file you see a list of Business records in alphabetical order. Each
        line shows a "select letter," the Business KEY, the Record Number,
        the Type ("B" for Business), and the Categories, if any. You can
        press the "select letter" displayed in the far left column, to choose
        a record. You can also use the "cursor down" key until the desired
        record is in the highlight bar, and then press <Enter>. If there were
        more than 20 records to list, "more..." will appear at the bottom of
        the screen, and pressing the F2 (More) function key will display the
        next 20 items. Press F1 (Quit) to return to the Main Menu.

        
        Last Name/Key (or portion)
        
        This search finds records whose "keys" match the letters you enter.
        Select INQUIRE on the Main Menu, and then choose LAST NAME/KEY on the
        next menu. NamePal will ask "Which Key?". Type in "Sam" (capital "S")
        and press <Enter>. You can use the Backspace key to correct mistakes.
        You should see a list of records that have "keys" beginning with
        "Sam..." Use the SEL(ect) letters or the highlight bar to look at
        each record.
        RECORD SELECTION                                                  2-2


        To find a single record without first seeing the list, type enough of
        the name so that it is unique on your file. For example, to see the
        "Samuelson" record, just type "Samu" in response to "Which Key?" Of
        course, you could also type the entire last name. To see all names
        beginning with a certain letter, enter just that letter.

        You can also put an asterisk (*) as the first part of the KEY,
        followed by some letters. Then NamePal finds all the KEYs that have
        these letters anywhere in the KEY, not just at the beginning. For
        example, use "*Rob" to find "Samuelson, Robert." As with all NamePal
        searches, the upper and lower case letters must match exactly ("Rob"
        does not match "rob" or "ROB").

        
        Categories or Cat.(s)
        
        The CATEGORY is a way of classifying groups of name records. For
        example, you might assign people in your Art Class the category of
        "A". Each name on your file can be put in up to eight different
        categories. Once you have coded the people in your Art Class with an
        "A" in their category field, you can use a CATEGORY select to print a
        roster of the class, or create mailing labels for the class, etc.

        On the main menu, if you select INQUIRE and then CATEGORY, NamePal
        will ask "Which Category?". Type in "s" (lower case) and press
        <Enter>. From the initial disk you will see that three records have
        been selected. You can choose the one you want using the "select
        letter," or the highlight bar. These records are in the "Printer
        Setup" category. They can be used for some special printing needs
        (see "Printed Listings--Setup").

        There are many ways to use categories. You could put a category of
        "C" on the records of everyone who receives your Christmas or
        Chanukah cards. Then with one category selection, you could print
        address labels for all these cards.

        
        Revise Categories
        
        Since there are only 8 category positions per record, you will want
        to use single letters or numbers whenever possible. You can select
        REVISE CATEGORIES (Main Menu) to enter a short description for up to
        15 of your categories. These descriptions will be displayed when you
        Add or Change a name, or do Category Selections.

        RECORD SELECTION                                                  2-3


        There is a warning message and tone if you use category letters that
        have not been defined with REVISE CATEGORIES. However, it is not
        required to define categories in order to use them (you are NOT
        limited to the 15 categories that have descriptions). Any character
        on the keyboard can be used for a category. Using just the upper and
        lower case letters, 52 different categories are possible.
                
        
        Record Number
        
        You can choose records using their number on the file. The record
        number is shown when you add or view records, and on PAGE SIZE and
        FILE CARD printouts. For Printing, you can use Record Number to
        select as many specific records as you desire.
        
        
        Summary
        
        The record selection methods described above for INQUIRE, work the
        same way for all Commands (CHANGE, DELETE, PRINT, etc.). Regardless
        of what you do with the records after you choose them, the selection
        techniques are identical.


        COMMANDS                                                          3-1


        Adding Records

        To put new records on your file, select ADD on the Main Menu and then
        choose the type of record you wish to add (Personal, Business, or
        Notecard). You will see blank lines for each kind of information
        (name, address, phone, etc.). As you type in the data, you can use
        the arrow (cursor), Ins(ert), Del(ete), and Backspace keys to move
        around on the screen and correct mistakes.

        As you finish typing each item, press <Enter> to move to the next
        line. To skip an item press <Enter> or the "cursor down" arrow key.
        When you finish entering data for a record, push the F2 (Update)
        function key to put the record on your file. After you ADD the last
        record, press F1 (Quit) to exit the ADD process (or press the ESCape
        key). The meaning of the F1 and F2 function keys is shown on the
        right side of your display. The right side also displays Categories
        you have defined with the REVISE CATEGORIES option (described above).
        
        Business format records have both a KEY area (used for selection and
        sorting), and a BUS. NAME area (used for printing, as on mailing
        labels). Usually you will want the same Business Name in both places
        (for example, Acme Printing). If you first type the name in the KEY
        area, and then type only an equal sign (=) in the BUS. NAME area, the
        name from the KEY field will be copied for you.
        
        The bottom right side of the screen displays warning messages. The
        message "Category not defined" appears when you use categories not
        yet entered with REVISE CATEGORIES. The message "2 1/2 inch label
        exceeded" (or "2 5/8" or "3") appears when name or address lines are
        too long to fit on these address labels (assuming 10 characters per
        inch on your printer). It's OK to enter longer names and addresses,
        but NamePal will have to shorten them when you print 2 1/2, 2 5/8,
        or 3 inch labels. NamePal will print as much of the name and address
        as possible. Personal names print without the end of the first name,
        while Business names and addresses truncate the end of the line.

        If you find that four comment lines are not sufficient for some of
        your names, you can add a Notecard record with the same key and a
        "-1" suffix. This will provide seven more comment lines. You can add
        any number of these "suffix" records (-2, etc.).

        
        Changing Records

        To revise existing records on your file, select CHANGE on the Main
        Menu. You can then select records using the methods discussed in the
        chapter on Record Selection. As records are chosen, they will appear
        on your screen in the ADD format.
        COMMANDS                                                          3-2


        The editing keys (cursor arrows, Del, etc.) work just like they did
        during the Add command. When you finish changing the record, press
        the F2 (Update) function key to replace the record with the changes
        you have made. Or press F1 (Quit) if you decide not to save the
        changes to the record. The F1 and F2 function keys appear on the
        right side of the screen with their meanings.

        
        Modeling Records

        Main Menu choice MODEL lets you copy the data in an existing record
        to create a new record. After selecting the record you want to copy,
        you can modify it. When you finish changing the data, you can add it
        to your file as a new record. Use Model to save keying time when you
        add names with similar addresses (for example, the same City, State,
        and Zip).

        
        Deleting Records

        Choose DELETE on the main menu to get rid of unwanted records. Select
        the records in the usual manner. As each record appears on your
        screen, reply "Y" if you wish to "Delete this one (Y/N)?". The file
        space occupied by deleted records is automatically re-used by new
        records as you add them to your file.

        
        Summary

        A good way to get started with these commands is to experiment with
        them. Try ADDing some records. Then use the various Record Selection
        methods to CHANGE, MODEL and finally DELETE the new records until you
        are comfortable with all the commands. Use the function keys to get
        HELP when you need it.

        PRINTED LISTINGS                                                  4-1

        When you select PRINT on the main menu, the next thing you see is the
        FORMAT menu. This menu is used to choose between different kinds of
        printed output. The first three LABEL choices are for address labels.
        ADDRESS BOOK prints book pages in a wide variety of sizes. PAGE SIZE
        prints various reports on 8 1/2 by 11 inch pages. FILE CARDS prints
        3x5 or Rolodex rotary file cards (two sizes). CUSTOM LABELS prints on
        any size address label or directly onto envelopes.

        If you have trouble with PAGE SIZE or ADDRESS BOOK printing, see the
        Getting Started section (VARY SETUP) for information on printer page
        ejects. All output formats, including Address Book pages, are
        designed to print using standard pica type (10 characters per inch).
        With many printers you can change this with the SETUP (COMPRESS, ETC)
        option that is described below. This can be useful, for example, to
        print smaller address books.

        
        Choosing Records for Printing
        
        Select records for printing the same way as for other purposes
        (Change, Inquire, etc.). See the section on Record Selection if you
        have questions about how to do this. When choosing records for
        printing, you are shown a count of the selected records on the bottom
        of your screen, rather than seeing the actual records. Once you start
        printing, you can pause or quit, by pressing the Esc(ape) key.

        Along with the selected record count, you will often see the message
        "No Notes." This means that Notecard records have been excluded from
        the selection process. This happens when you select a type of listing
        that cannot print the "notecard" format (like mailing labels).
        
        Sequence & RE-SORT
        
        The Sequence Menu lets you choose the order in which names will be
        printed. Usually, you will want to choose LAST NAME/KEY, which will
        alphabetize records by Last Name or Business KEY. You can also select
        FILE REC#, in which case records will print in Record Number order
        (basically, the order in which the records were added to the file).     
        Finally, you can specify RE-SORT. Then records will be ordered by
        what is put in the RE-SORT area of each record, such as Zip Code.
                
        Address Book
        
        You can change the size of address book "pages" using the VARY SETUP
        option on the main menu. The LEFT MARGIN is the number of spaces on
        the left side of the book border. The TEXT COLUMN WIDTH is the number
        of characters for each name, from the start of the name to the end of
        the phone number. The COLUMN SPACING is the number of spaces between
        columns. The NUMBER TEXT LINES controls the vertical size of the page
        by setting the maximum lines used for printing names, addresses, etc.
        PRINTED LISTINGS                                                  4-2


        The NUMBER TEXT LINES must be a multiple of 8 with a maximum value of
        80 (possible values are 8, 16, 24, 32, 40, 48, 56, 64, 72, or 80).
        Use these settings in combination with "compressed" printer setup
        (see below) to produce the exact book "page" size that you need.
        
        These book "pages" are printed on regular 8 1/2 by 11 inch paper.
        There are several ADDRESS BOOK formats available (optional phone,
        address, comments, etc.). The book format lets you "preview" the
        output on your monitor, to see the various output styles and the
        names selected for printing. Record Number, categories, and the Date
        Added/Changed data do not print in the Address Book format.

        You may choose to print your address book on BOTH SIDES of each page.
        This gives the book a more professional appearance without any blank
        pages. With the BOTH SIDES option, book pages must be centered (equal
        left and right margins). Use the VARY SETUP "Left Margin" setting to
        center Address Book "pages" on your printer. After printing the first
        side of each numbered page, the computer will prompt you to turn the
        page over and re-insert it in your printer to print the back side. If
        you print a Title Page, it should NOT be re-inserted.
        
        To assemble the book, first cut along the dotted outline of each
        page. Then fold each page in half so the left column of names lies
        over the right column. If you use a title page, it should be face
        down while folding. Finally, place all the pages on top of each other
        in the correct sequence, and staple twice along the fold line. When
        you register, you will receive two vinyl book covers, plus mounting
        templates, designed for the NamePal address book.

        
        Labels
        
        NamePal works with continuous mailing labels in five common sizes.
        You can also print labels on a laser printer using the Avery 2 5/8
        inch labels that are 3 across each sheet. Use VARY SETUP on the main
        menu to choose the label width. You can revise the label width at any
        time, but you only need set it once to continue using the same label
        size. Labels can be 1, 2, or 3 across the printer. Before purchasing
        labels, try printing with the label format on plain paper. Check the
        page to make sure your printer is wide enough for the label format
        you select. If you see a space between address lines, the format is
        "wider" than your printer.
         
        Self-adhesive (Avery type) labels, that peel off backing sheets and
        stick on envelopes, are the best ones to use for most purposes. If
        you select only one name for label printing, NamePal gives you the
        option of printing up to 999 copies (return address labels, etc.).
        
        PRINTED LISTINGS                                                  4-3


        To check that continuous labels are correctly positioned in your
        printer, print one label using the "Lineup" record provided with
        NamePal. For laser printers, if you are printing 10 or fewer labels,
        choose the "1 UP" option. Then you can re-use the label sheet by
        setting a wide left margin, and choosing "1 UP" again to print in the
        second column.

        
        Custom Labels & Envelopes
        
        The Custom format prints any size label up to 11 inches high. These
        labels may be any width, but can only be one across the page. This
        option is often used with large business address labels that are
        preprinted with the return address. You can also use this option to
        address envelopes, by varying the LEFT MARGIN so the address prints
        in the proper location on the envelope.

        
        Page Size & File Cards
        
        Choose the PAGE SIZE option to print reports on 8 1/2 by 11 inch
        paper. If you use a TITLE, the date and page number will also print.
        Use FILE CARDS to print Rolodex cards or standard 3x5 cards. This
        option will print either 2 1/6 by 4, or 3 by 5 inch sizes. Use the
        special "continuous" type computer forms for printing FILE CARDS.

        
        Setup (Compress, etc.)
        
        You can use SETUP to send "control codes" to your printer for
        compressed, enhanced, and other special print styles. Use this
        technique to print smaller address books, and for other special
        effects. These "control codes" must first be added on Notecard
        records. Use the regular ADD function for Notecards. Put just the
        "control code" decimal numbers on comment lines in the Notecard (for
        example, 15 27 48). Do NOT use "letter" codes. Leave at least one
        space between numbers on the same line. For samples, see "Compress"
        and "Normal" on the initial NamePal data. These "control code" values
        are not the same for all printers, so consult your printer manual for
        specific values.
        
        To send these setup codes to the printer, first choose SETUP PRINTER
        (COMPRESS, ETC.) on the PRINT FORMAT menu. Then, using the standard
        Record Selection techniques, select the Notecard record with the
        desired "control codes."
        

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0706

     Volume in drive A has no label
     Directory of A:\

    CATEGORY NP0       512   9-24-88   5:45p
    COUNT    NP0       128   5-24-89  12:42p
    DATA     NP0      2048   5-25-89   8:36a
    FILES706 TXT      1777   3-09-90   7:55p
    GO       BAT        14   1-08-86   1:59p
    GO1      BAT        39   3-09-90   1:22p
    GO1      TXT       540   3-09-90   1:23p
    HELP     NP1     28044   5-23-89  11:16a
    INDEX    NP0      3584   2-13-90   4:02p
    MANUAL   DOC     32753   2-13-90   3:59p
    NAMEPAL  EXE     61146   2-13-90   2:34p
    PRINTDOC BAT        22   2-13-90   4:08p
    READ     ME       1044   2-13-90   4:07p
    SETUP    NP0       128   7-20-89  10:13a
           14 file(s)     131779 bytes
                           24576 bytes free
