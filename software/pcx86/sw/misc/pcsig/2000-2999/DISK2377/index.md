---
layout: page
title: "PC-SIG Diskette Library (Disk #2377)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2377/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2377"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "INFORMATION PLEASE!"

    INFORMATION PLEASE! is a text storage and retrieval program that stores
    and retrieves full-text information, such as memos, catalogs,
    briefs, letters, invoices, product descriptions, articles, scientific
    papers, and so on.  You can enter information from the keyboard or
    import it from an ASCII file.  Search, display, and print entries using
    keyword or full-text searches that allow multiple AND and OR criteria.
    Relate text to a PCX graphic or another program.  User interface is an
    easy-to-learn pull-down menu (Windows-like) interface.  The program
    contains an example "textbase" with help for dealing with DOS disk
    problems.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE2377.TXT

{% raw %}
```
Disk No: 2377                                                           
Disk Title: Information Please                                          
PC-SIG Version: S2.0                                                    
                                                                        
Program Title: Information Please                                       
Author Version: 2.00                                                    
Author Registration: $49.00                                             
Special Requirements: 356K RAM, and CGA.                                
                                                                        
Information Please is a text storage and retreival program allowing you 
to store and retreive full-text information - such as memos, catalogues,
briefs, letters, invoices, articles, product descriptions, scientific   
papers, and so on.  Enter information from keyboard or import from      
ASCII file. Search, display and print entries using keyword or full-text
searches that allow mulitple AND and OR criteria. Relate text to a PCX  
graphic or ANOTHER program. User interface is an easy to learn pull down
menu (Windows-Like) interface. Contains example "textbase" with helps   
for dealing with DOS disk problems.                                     
                                                                        
                                                                        
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## IP.DOC

{% raw %}
```





                      ORDER BLANK FOR INFORMATION PLEASE
                                  SN:IP200790

      INFORMATION PLEASE software package, bound manual, latest version
      registration, diskette               ($49) x _______= $____________

      Information Please EXTRA MANUALS ($10 each) x ______= $____________

      AUTO UPDATE to next future IP version ($25)x _______= $____________

      Other TexaSoft Programs:
      KWIKSTAT:Statistical Analysis Package ($49)x _______= $____________
      PC-CAI:Write your own tutorials       ($49)x _______= $____________
      SPELL GAMES:Practice spelling game    ($19)x _______= $____________
      BANNERIFIC:Vertical/Horizontal Banners($15)x _______= $____________

      ALL ORDERS:Add $4 P&H or $8 if PO, COD or RUSH,       $____________
      $15 for Express Mail or add $10 if overseas.
      Texas Residents add 7.25% sales tax                   $____________

      TOTAL ENCLOSED                                        $
                                                             ============
                Ask about quantity discounts and site licenses
      -------------------------------------------------------------------
      Specify:    ____5 1/4 inch disk or      ____ 3.5 inch disk
      -------------------------------------------------------------------
      Check one:___Check or M.O.   ___MC   ___VISA   ___P.O. #___________
      -------------------------------------------------------------------

        IF CREDIT CARD:Name on card:______________________________

        Card Number is:____________________________Exp Date_______

        Authorized Signature:_____________________________________
      -------------------------------------------------------------------

        Mail order to:____________________________________________

        Address:__________________________________________________

        City, State, Zip:_________________________________________

        Phone (    )______________________________________________
      -------------------------------------------------------------------
      Where Did you hear about Information Please?_______________________
      -------------------------------------------------------------------
      MAIL TO:TexaSoft, P.O. Box 1169, Cedar Hill, TX 75104. Thanks!
      30 day guaranteed satisfaction or return for a full refund.
      Phone Orders: Call 214-291-2115 (MasterCard & Visa) ORDER TODAY!




                                        1

















                              INFORMATION PLEASE
                                     2.00



                  An Information Storage and Retrieval System
                      for IBM PC and Compatible Computers





                      (C)Copyright TexaSoft, 1983, 1990
                                P.O. Box 1169
                            Cedar Hill, Texas 75104
                                 214-291-2115





















                        Please Become a Registered User



                                        2






          Information Please Version 2.00
          __________________________________________________________


        All Rights Reserved

        No patent liability is assumed with respect to the use of
        the information contained herein. While every precaution has
        been taken in the preparation of this publication, the
        publisher assumes no responsibility for errors or omissions.
        Neither is any liability assumed for damages resulting from
        the use of the information herein.

        What is Shareware?

        Shareware programs are copyrighted just like programs you
        purchase from a retail software store. However, there are
        some differences. Shareware is a way to distribute software
        programs so that users can "try it before they buy it."
        Instead of paying the full retail price for a program and
        then getting stuck with it when you decide its not for you--
        with shareware your investment to try a program is
        minimized. Shareware software companies "advertize" by
        allowing you to copy disks and give them to friends and by
        allowing disk-copy companies permission to copy the disks
        and sell them at a low cost to users. These disk duplicating
        companies are selling disks, not fully registered versions
        of the software. When you purchase a disk from a disk
        vendor, you can try out the program to decide if you want to
        use the program on a regular basis. If you make the decision
        that the program is what you want, you should fill out the
        registration form and send in the registration fee. When you
        register a TexaSoft program, this not only gives you a
        license for long-term use of the program, but you will
        receive a printed manual, 90 day phone support, information
        and discounts on future versions and you will receive the
        Kwik-Bits newsletter. Professional shareware companies, like
        TexaSoft, subscribe to the principles of the Association of
        Shareware Professionals (ASP). Thank you for your support of
        the shareware concept.








                        Please Become a Registered User



                                        3






          Information Please Version 2.00
          __________________________________________________________







                              C O N T E N T S



         Introduction to Information Please.............5
         Installing Information Please..................6
         Beginning Information Please...................6
         Take a Quick Tour..............................7
         How Information Please is Organized............10
                The Files Menu..........................10
                The Edit Menu...........................13
                The View Menu...........................17
         Options While Viewing Records..................20
         Information Please Editor......................23
                Edit Function Keys......................23
                Edit Control Commands...................24
         Using Command Line Switches....................25
         User Ballot....................................27





















                        Please Become a Registered User



                                        4






          Information Please Version 2.00
          __________________________________________________________


                     INTRODUCTION TO INFORMATION PLEASE

        Information Please is a text storage and retrieval program
        allowing you to store and retrieve full-text information -
        such as memos, catalogues, briefs, letters, invoices,
        articles, product descriptions, scientific papers, and so
        on. "Text is the next great frontier of information
        processing." (John Verity, Information Processing Magazine,
        June 18, 1990) Enter information from keyboard or import
        from ASCII file. Search, Display and Print entries using
        keyword or full-text searches that allow multiple AND and OR
        criteria. Relate text to a PCX graphic or another program.
        User interface is an easy to learn pull down menu
        (Windows-Like) interface. Example "textbases" databases
        could store information such as:

         	- How to Respond PC-DOS Error Messages
         	- Information on Toxic Chemicals
         	- Directory of National Parks
         	- Poison Control Information
         	- Franchise Opportunities
                - Patent Infringement Case Studies

        Suppose you run a business for people wanting to buy
        franchises. If you had the Information Please textbase
        "Franchise Information", and you wanted to know what AUTO
        franchises deal with BRAKES, you could cross-reference that
        information in an IP textbase-database. (Could you imagine
        how much time it would take cross-referencing that look-up
        in a book (or books)! After defining a search, examine the
        find on the screen, print it, or continue the search for
        more relevant information. Simple. Intuitive.

        Suppose employees in your company call into a central help
        line to get help when their cash register or computer acts
        up. Over a period of time, most questions will have standard
        answers. Do you need have a staff of several experts to
        answer these questions over and over again? Should you
        reinvent a solution each time a question is asked -- even
        though it may be the same question that was asked two weeks
        ago, a month ago, or a year ago? Why not store a description
        of the problem in a Information Please (IP) database. Then,


                        Please Become a Registered User



                                        5






          Information Please Version 2.00
          __________________________________________________________


        when someone calls up with a problem that has been
        previously solved, the helpdesk operator can easily search
        for that problem and relate the answer to the caller. In
        fact, if you place a copy of Information Please on each
        employee's computer, they can find the answer to their own
        question without even having to call the central help line.

        IP is a time saving, money saving, productivity enhancing
        benefit! IP is designed to help you find the information you
        need quickly and with a minimum number of keystrokes. Its
        intuitive menu system can be mastered in minutes.

                        INSTALLING INFORMATION PLEASE

        To place Information Please on your hard disk, place the
        Information Please distribution disk in your A: drive (or
        B:, C:, D: etc). Make A: (or B: etc) the default by typing
        A: (or B: etc) at the DOS prompt. Enter the command:

              INSTALL d: \IP

        Where d: is the name of the disk where you want Information
        Please loaded. It will be load on that disk in a directory
        named \IP. There is a BLANK SPACE between the d: and the
        \IP. For example, to load Information Please on your disk
        C:, enter the command:

              INSTALL C: \IP

        Then follow the prompts on the screen.

                        BEGINNING INFORMATION PLEASE

        To begin Information Please from the DOS prompt, make sure
        your are logged into the correct drive and are in the \IP
        directory. If you are not in the IP directory, enter the
        command:

              CD \IP

        To begin Information Please, enter the command



                        Please Become a Registered User



                                        6






          Information Please Version 2.00
          __________________________________________________________


              IP

        Copyright information will appear. Press Enter. A screen
        will appear with a menu bar at the top and a status bar at
        the bottom. The Files menu will be display. To choose an
        option from the menu, press the first letter of the option
        or use the up and down arrow keys to highlight the desired
        option, then press Enter.

                          SETUP INFORMATION PLEASE

        To setup Information Please for your computer, select
        "Choose Program Options" from the menu. You will be prompted
        to enter the path to be used for the program. For now, just
        enter the name of the disk drive, such as C: or A: and press
        Enter. You will then be prompted to choose the kind of
        monitor you are using. If your monitor will display colors,
        choose color. If you are using a laptop with an LCD monitor,
        you will probably choose the LCD option, else choose the
        monochrome option (black and white, green and black, etc).
        The monitor selections control the colors used to display
        information on the screen. Choose the one that is most
        comfortable to you. You will be asked to specify a printer
        port. Usually your choice will be LPT1: (first parallel
        printer port). This information is saved to disk so you will
        not have to set these options again unless you want to
        change something. You can reset program options at any time.

                  TAKE A QUICK TOUR OF INFORMATION PLEASE

        To give you an idea of what Information Please can do,
        follow along with the example given here. All of the menus
        and options used here are explained later in more detail.
        Begin Information Please by entering the command IP at the
        DOS prompt. You should first see a copyright notice. Press
        Enter.

        1. CHOOSE DATABASE: Choose the Information Please database
        to use by selecting the option "Open a Database" from the
        Files menu (Either press the O key or highlight this option
        and press Enter). When you choose this option, one or more
        database names will be listed on the screen. Using the up


                        Please Become a Registered User



                                        7






          Information Please Version 2.00
          __________________________________________________________


        and down arrow keys, highlight the name "IP-DOS" and press
        Enter. At the bottom left of the screen, you should see a
        note than the database IP-DOS is currently in use.

        2. GO TO VIEW MENU: Press the right arrow key twice to
        change to the View menu. With the View menu extended, use
        the up and down arrow keys to highlight the option "View
        Keyword List." With this option highlighted, press Enter to
        select it. A list of keywords, one per line, will appear on
        the screen. Use the Up and Down arrow key to move to record
        number 5, then press the Enter key. This causes the contents
        of record number 5 to be displayed on the screen.

        3. VIEW NEARBY RECORDS: With record number 5 displayed on
        the screen, press the F10 key a couple of times. This moves
        you forward in the database. Pressing the F9 key moves you
        backwards in the database. Press the Esc key to return to
        the screen listing the keywords. Press Esc again to return
        to the View Menu.

        4. DO A KEYWORD SEARCH: While in the View menu, press the
        "K" key to choose the option "Keyword Search."  A list of
        match types will appear. Choose the Single Keyword Search
        option. You will be prompted to enter a keyword. Enter the
        word DISK and press Enter. Information Please will now
        search the keyword lists for the word DISK, and will display
        the first record that contains that keyword.

        5. CONTINUE SAME SEARCH: When a record is displayed, observe
        the keyword list to find the word DISK. Press the F10 key to
        continue to the search to the next keyword list containing
        the word DISK, or press the F9 key to search backwards in
        the file. If there are no more matches, the search ends.

        6. END THE PROGRAM: Press Esc one or more times until you
        are back to the View menu. Press Esc once more and you will
        see an "End Information Please (y/N)" prompt. Enter Y and
        press Enter to end the program and return to the DOS prompt.






                        Please Become a Registered User



                                        8






          Information Please Version 2.00
          __________________________________________________________


        OTHER DATABASES ON DISK

        There are other Information Please Databases on Disk to give
        you more examples of how the program may be used:

        PARKS DATABASE: This database contains information about US
        National Parks. Open this database and look at the first
        record for an Alaska National Park. Notice that when the
        record is displayed, there is a menu item F4 at the bottom
        of the window. This indicates that there is a command
        associated with this record. In this case, it is a command
        to show a map of the Alaska National Parks. (Action commands
        are described later) If you have a CGA compatible monitor
        (including an EGA or VGA), press the F4 key and the Alaska
        parks map should appear on the screen. Press Enter to return
        to the text of the record.

        FRANCHISE DATABASE: This database contains information about
        US Franchise Opportunities. Only a few records are included
        in this example database.

        SAMPLER DATABASE: This database contains single examples of
        other kinds of information you could store in an Information
        Please Database. Look through the records in this database
        to give you ideas about how you can more effectively use
        Information Please.

        This quick tutorial has shown you a little of what
        Information Please is all about. You can also perform more
        complicated searches in a database, edit the keywords and
        record contents, deleted records and more. Besides the
        information in the IP-DOS database, you can create your own
        databases. The following information details the various
        commands and options available to you in Information Please.










                        Please Become a Registered User



                                        9






          Information Please Version 2.00
          __________________________________________________________


                    HOW INFORMATION PLEASE IS ORGANIZED

        The Information Please main menu consists of three options;
        Files, Edit, and View. When you choose one of these options,
        a menu will be displayed with another set of options. FILE
        is used to deal with file (database) related issues such as
        creating a new database, opening a current database,
        deleting a database and so on. EDIT is used to deal with
        individual entries (records) in the database such as editing
        a record, deleting records and so on. VIEW is used to search
        for and look at entries in the database.

        Each entry in a Information Please database is called a
        record. A record consists of two parts, a keyword list and a
        description. The keyword list is a list of  words that
        describe the entry. For example, the keywords might be "HARD
        DISK WILL NOT BOOT" and the entry might explain what can
        cause a hard disk to lose its ability to boot, and give some
        solutions for solving the problem. The Keyword list consists
        of up to 65 characters. The entry description can consists
        of up to 500 lines of free-form information - usually one or
        more paragraphs of information.

                  USING THE INFORMATION PLEASE FILES MENU

        The File menu allows you to use and manipulate Information
        Please files and also contains some options that deal with
        program setup and operation. The Files menu options are:

         FILES MENU OPTIONS
         ------------------
         Help
         New Database
         Open a Database
         Delete a Database
         Edit Database Description
         Print a Database
         Sort a Database
         About Information Please
         Choose Program Options
         Go to DOS, Return with EXIT
         Quit, Return to DOS


                        Please Become a Registered User



                                        10






          Information Please Version 2.00
          __________________________________________________________



        To choose one of these options, you may use the up and down
        arrow keys to highlight the desired option and then press
        the Enter key. Optionally, you can press the first letter of
        the option. For example, to choose the "About Information
        Please" option, press the A key. Following is a brief
        description of each of these options.

        HELP

        The Help option displays a series of help screens that
        summarize the contents of the manual. When Help is chosen, a
        menu of items will appear. You can then choose a topic to
        examine or return to the main menu.

        NEW DATABASE

        The New Database option allows you to name a new database.
        Before entering information into a database you must either
        open an existing database or create a new database.

        OPEN DATABASE

        The Open Database option allows you to choose which
        Information Please database on disk you will be using. A
        list of the available databases will be displayed on the
        screen from which you can choose one to open.

        DELETE A DATABASE

        The Delete a Database option allows you to delete database
        files from your disk. It will delete the currently open
        database -- but will ask for a confirmation to make sure you
        really want to delete the database files.

        EDIT A DATABASE DESCRIPTION

        The Edit a Database Description option allows you to enter
        or edit the 40 character description of the currently open
        database. This database description is displayed in the list
        of databases when you choose the Open Database or Delete
        Database options.


                        Please Become a Registered User



                                        11






          Information Please Version 2.00
          __________________________________________________________



        PRINT DATABASE

        The Print Database option allows you to print the contents
        of the database to a printer or to a file.

        SORT DATABASE

        The Sort Database option allows you to sort the database
        keyword lists. In order to effectively use the sort option,
        you may pre-plan your keyword list so they can be sorted.
        For example, you might make the first word in your keyword
        list your most important word. For example, in the Franchise
        Database, it might be the kind of franchise such as
        AUTOMOTIVE, BUSINESS, FOOD, and so on. Then, when you enter
        new items and want to place the keyword list in alphabetical
        order, you can sort on the first word of your keyword list.

        When you choose to Sort a Database, you will be asked to
        enter the range of the keyword list to use as the sort key.
        For example, if you want to use the first 5 characters of
        the keyword list, you would enter 1-5 as your sort key
        range. When Information Please sorts a database, the
        database is also automatically compressed. Thus, any records
        that have been marked for delete will be gone when you
        perform a sort.

        If this sort does not place your database in the order you
        want, another option is to print the database to a file,
        then use a word processor to move records around. When your
        database is in the order you want, delete the old
        Information Please database and re-create the database name
        and import the information from your word processed file (it
        must be an ASCII text file). - See Import.

        ABOUT INFORMATION PLEASE

        The About Information Please option gives copyright
        information about the program.





                        Please Become a Registered User



                                        12






          Information Please Version 2.00
          __________________________________________________________


        CHOOSE PROGRAM OPTIONS

        The Choose Program Options item allows you to choose the
        disk drive and path to use for Information Please and to
        indicate what kind of monitor you are using. For the path,
        you can enter just the disk drive name, such as C: or a
        drive and path, such as C:\IP\. If no path is specified,
        Information Please will use information in the current
        default directory on your disk. You may choose from monitor
        types Color, LCD or Monochrome. The color option refers to
        CGA, EGA, PGA, VGA or other monitor types that display
        color. The LCD option displays only black and white. THe
        Monochrome option displays black, white and bright white.
        Choose the one that is most pleasant for your use. After you
        make your choice, the information is stored to disk so the
        settings will be the same the next time you begin the
        Information Please program.

        GO TO DOS

        The Go to DOS option allows you to temporarily return to the
        DOS prompt. You may enter DOS commands or run another
        program. When you type EXIT at the DOS prompt, Information
        Please will resume.

        QUIT

        The Quit, Return to DOS option ends the Information Please
        program and returns you to the DOS prompt.

                   USING THE INFORMATION PLEASE EDIT MENU

        The Edit menu is used to edit or manipulate individual
        records in the database. Before using the Edit menu, you
        must have an open database. If a database is open, the
        database name will be located at the bottom left of the
        screen. The options on the Edit menu are:







                        Please Become a Registered User



                                        13






          Information Please Version 2.00
          __________________________________________________________


         EDIT MENU OPTIONS
         -----------------
         Add New Entry
         Delete an Entry
         Restore a Deleted Entry
         Edit and Entry
         Import from a File
         Compress the Database

        ADD NEW ENTRY

        The Add New Entry option allows you to enter a new record
        into the database. This record consists of a description and
        a keyword list. When you choose to enter a record, the
        Information Please Editor will display with a mostly blank
        screen. On this screen, you will enter the description that
        you want to appear in the record. Also, you must enter a
        keyword description. To display the keyword entry box, press
        the F2 function key. A dialog box will appear in which you
        can enter the keywords for this record. Press enter to
        return to the editor.

        Optionally, you can enter an Action Command to be associated
        with this record. An Action Command is a DOS command that
        you want to be issued during the viewing of the record. For
        example, In the PARKS database, when you view information
        about Alaskan parks, you can view a map of the parks by
        pressing the F4 key. The F4 key invokes a command that was
        defined when this entry was added (or edited). To define a
        command, press the CTRL-K key while adding or editing this
        record. The command may be any DOS command up to 25
        characters in length. The main stipulation is that there
        must be enough memory in the computer for this command to
        execute. See the discussion on ACTION COMMANDS later.

        When you have finished entering the description and
        keywords, press the F7 function key to save the information.
        If you decide to abandon this entry and not save the
        information, press the Esc key.





                        Please Become a Registered User



                                        14






          Information Please Version 2.00
          __________________________________________________________


        DELETE AN ENTRY

        The Delete an Entry option allows you to delete a record
        from the database. You will be asked to enter the record
        number of the entry to delete. Optionally, you can enter a
        range of records to delete. This process does not actually
        permanently get rid of the entry or entries - you can
        restore a deleted entry. If a record is deleted, you cannot
        read it or display its contents. To permanently get rid of
        all deleted record, use the Compress option.

        RESTORE A DELETED ENTRY

        If you have deleted an entry, you can get it back by using
        the Restore a Deleted Entry option. You will be prompted to
        enter the number of the entry to restore.

        EDIT AN ENTRY

        The Edit an Entry option allows you to edit the keywords and
        description of an entry. The entry will be displayed in the
        Information Please editor, where you can change, add to, or
        delete information in the description. Use the F2 key to
        edit the keyword list or CTRL-K to edit the Action Command
        (see description for Adding an Entry). Editing records can
        cause slack space in your database file. This is space in
        your database that formerly held information, but now is not
        used because of editing. You should periodically run the
        Compress option to free up the slack space in the database.

        IMPORT FROM A FILE

        Using the Import from a File option, you can enter
        information that you may already have information on your
        computer into an Information Please database. To import
        information in to Information Please, your information
        should be in a standard ASCII text file with lines less than
        75 characters long. Most word processors will save
        information in this manner as an option. Your text file
        should have keyword lists before each description. This
        keyword list must begin with KEY: followed by up to 65
        characters for the key list. For example:


                        Please Become a Registered User



                                        15






          Information Please Version 2.00
          __________________________________________________________



              KEY:HARD DISK WILL NOT BOOT

        After the key list place the text of the description. You
        may have any number of entries in your text file. When you
        import them into Information Please, the "KEY:" statement
        will signal the beginning of a new entry.

        Optionally, you may also have a command line in the file.
        For example, if you want the command

              IPPCX ALASKA /M:0

        to be available when this record is viewed, place

              COMMAND:IPPCX ALASKA /M:0

        flush left in the description of this record on a line
        following the KEY: line. (see Action Commands, described
        later). You may also enter a title for the database. to do
        this, place

            TITLE:The title you want

        as the first line in the file.

        Once you have created the file containing the entries you
        may choose the Import From a File option. You will be asked
        the name of the file to import, and Information Please will
        read the file and add those entries to the record of the
        currently opened database. If you are beginning with a blank
        database, choose Create a Database from the Files menu, then
        choose Import from the Edit menu.

        An example text file is included on disk called
        FRANCHIS.TXT. To make this file into a database, first
        choose NEW DATABASE from the FILE menu (leave the database
        description blank) Then, go to the EDIT menu and choose
        IMPORT. When you are asked for the import file name, enter
        FRANCHIS.TXT. The information from this file will be read
        into Information Please, and the new database will be ready
        for use.


                        Please Become a Registered User



                                        16






          Information Please Version 2.00
          __________________________________________________________



        COMPRESS THE DATABASE

        When you have deleted records from a database, they are not
        physically removed, and they may be restored. To permanently
        get rid of these records, use the Compress the Database
        option. This will free up space on your disk and make
        searching the database more efficient.

                   USING THE INFORMATION PLEASE VIEW MENU

        The View menu is where you search and view the information
        in the Information Please database. You may choose to view a
        record by number, by searching for a keyword in the keyword
        list, by searching for one or more words in the record
        description or by looking at a list of the keywords. The
        items on the View Menu are:

         VIEW MENU OPTIONS
         -----------------
         Number Choice
         Keyword Choice
         In-Text Search
         View Keyword List

        You must have a currently open database to choose one of
        these options. Choose an option by highlighting the option
        and pressing the Enter key, or press the first letter of the
        option.

        NUMBER CHOICE

        When you choose the Number Choice option, you will be asked
        to enter the number of the record to view. This record will
        then be displayed on the screen. You may use the F9 key to
        view the previous record, the F10 key to view the next
        record. Deleted records will not be displayed. Press the F2
        key if you wish to edit this record. Press the Esc key to
        end the viewing.





                        Please Become a Registered User



                                        17






          Information Please Version 2.00
          __________________________________________________________


        KEYWORD CHOICE

        When you choose the Keyword Choice option, you will see
        another menu giving you the following options:

         Single Keyword Search
         AND - Multiple AND Search
         OR - Multiple OR Search
         Quit

        A single keyword search allows you to enter a one keyword or
        phrase (such as DISK). Information Please will then display
        the first record that matches the search. Case is not
        checked, so DISK will match disk. You may use the F9 key to
        view the previous matching record, the F10 key to view the
        next matching record. Deleted records will not be displayed.
        Press the F2 key if you wish to edit this record. Press the
        Esc key to end the viewing.

        A Multiple AND search allows you to specify 2 to 10 words to
        match. For example, you might want to match on the words
        DISK and BOOT. The AND match criteria means that the keyword
        must contain BOTH the word DISK and the word BOOT. You will
        be prompted to enter a list of match words with the AND sign
        (&) between each word. In this case you would enter

              DISK&BOOT

        Information Please will display the first record that
        matches the search criteria. You may use the F9 key to view
        the previous matching record, the F10 key to view the next
        matching record. Deleted records will not be displayed.
        Press the F2 key if you wish to edit this record. Press the
        Esc key to end the viewing. A Multiple OR search allows you
        to specify 2 to 10 words to match. For example, you might
        want to match on the words DISK or BOOT. The match criteria
        means that the keyword must contain EITHER the word DISK or
        the word BOOT. You will be prompted to enter a list of match
        words with a ~ (tilde) between each word. In this case you
        would enter

              DISK~BOOT


                        Please Become a Registered User



                                        18






          Information Please Version 2.00
          __________________________________________________________



        Information Please will display the first record that
        matches the search criteria. You may use the F9 key to view
        the previous matching record, the F10 key to view the next
        matching record. Deleted records will not be displayed.
        Press the F2 key if you wish to edit this record. Press the
        Esc key to end the viewing.

        IN-TEXT SEARCH

        An In-text Search searches the contents of the entry, not
        just the keyword list. This search tends to be slower than a
        keyword search.

        When you choose the In-Text Search option, you are give the
        same options as in the Keyword search - a single keyword
        search, multiple AND matches and multiple OR matches.

        VIEW KEYWORD LIST

        The View Keyword List option displays a list of the keyword
        descriptions of all of the entries in the currently opened
        database. If there are more entries than the screen can
        display, you may press the down arrow key of PgDn to view
        additional keyword lists. To move back up the list, press
        the up arrow key or PgUp. To view the contents of a record,
        highlight the keyword list and press the Enter key.  Press
        the Esc key to end the View Keyword List option.
















                        Please Become a Registered User



                                        19






          Information Please Version 2.00
          __________________________________________________________



                        OPTIONS WHILE VIEWING RECORDS

        While viewing records, there are several function key
        commands that are available to you. Pressing the F10
        function key will cause Information Please to search for the
        next record. The F9 key searches for the previous record.
        Pressing the F2 key allows you to edit the record being
        viewed. Pressing the F3 key allows you to print this record.
        If and action command has be defined for a record, the F4
        key will activate that command. Press the Esc key to quit
        viewing records and return to the previous menu.

        USING ACTION COMMANDS (F4)

        An Action Command is a DOS command that you want to be
        issued during the viewing of the record. If an Action
        Command has been created for a record, while viewing the
        record the F4 function key will appear at the bottom of the
        view window. When the F4 function key is pressed, the Action
        Command is executed.

        An Action Command is defined when an entry is added (or
        edited) in a Information Please database. To define a
        command while in the editor, press the CTRL-K key. The
        command may be any DOS command up to 25 characters in
        length. The main stipulation is that there must be enough
        memory in the computer for this command to execute. The
        Parks information file uses an Action Command to display a
        map of Alaska associated with the description of Alaskan
        National Parks. A program that displays PCX (Paintbrush)
        files is included on your Information Please disk. This
        program, IPPCX.EXE, displays a graphic on the screen. When
        the user presses any key, the program ends, and control is
        turned back over to Information Please. See the description
        about how to use the IPPCX program.

        You can use any DOS command as an Action Command. There are
        any number of programs available to you that can display
        graphics (PCX, GIF, TIF and others), programs that can
        display spreadsheets, database file, text files, and so on.
        When the program you have initiated quits, control will be


                        Please Become a Registered User



                                        20






          Information Please Version 2.00
          __________________________________________________________


        turned back over to Information Please.

        The primary concern in using an Action Command is if the
        user's PC has that program available and if it will work on
        his or her PC. For example, if you have a PCX graphic
        created to be viewed on a VGA type monitor, a person with a
        CGA monitor will not be able to see the graphic properly.

        If the command you want to issue is longer than 25
        characters, you can use the Action Command to call a batch
        file. The batch file can then contain other commands that
        you want executed. See your DOS manual for a description of
        batch files.

        The program IPPCX was included on disk to illustrate how to
        use an Action Command. A description of how IPPCX works
        follows.

        USING THE IPPCX PROGRAM

        The IPPCX Program allows you to display PCX type files to
        the monitor. The format of the IPPCX program is

         IPPCX filename [/M:n]

        where filename is the name of the PCX file and the optional
        switch /M:n designates the Monitor type being used. The
        option n many range from 0 to 9, with the following
        meanings:

        PCX Monitor Modes for the IPPCX Program

         0 - 320 x 200 pixel CGA (4 colors)
         1 - 640 x 200 pixel CGA (2 colors)
         2 - 320 x 200 pixel EGA (16 colors)
         3 - 640 x 299 pixel EGA (16 colors)
         4 - 640 x 350 pixel EGA (2 colors)
         5 - 640 x 350 pixel EGA (16 colors)
         6 - 640 x 480 pixel VGA (2 colors)
         7 - 640 x 480 pixel VGA (16 colors)
         8 - 320 x 200 pixel VGA (256 colors)
         9 - 720 x 348 pixel Hercules (2 colors)


                        Please Become a Registered User



                                        21






          Information Please Version 2.00
          __________________________________________________________



        The monitor type should match the type used to create the
        PCX file. If a monitor cannot display the monitor type, the
        PCX graphic will appear distorted.

        For example, in the PARKS database, the command

              IPPCX ALASKA /M:0

        was used as an Action Command. This command began the IPPCX
        program to display the PCX file named ALASKA.PCX. The switch
        /M:0 indicates that this graphic is made to display on a CGA
        type monitor. (It will also display properly on most EGA and
        VGA monitors.)






























                        Please Become a Registered User



                                        22






          Information Please Version 2.00
          __________________________________________________________



                    USING THE INFORMATION PLEASE EDITOR

        The Information Please editor allows you to enter new record
        descriptions or to modify descriptions already in a
        database. The following commands are available in the
        editor. Commands are accessed by pressing a function key or
        by entering a CTRL (control) command. The function keys
        command are:

         EDIT FUNCTION KEYS
         -------------------------------------------
         Esc-End - Exit without saving modifications
         F1-Help: Help screens.
         F2-Keyword - Enter or Modify Keyword list
         F3-Top: Move to the top of the record
         F4-Bottom: Move to the bottom of the record
         F5-Files: List files or get file from disk.
         F6-Center a line
         F7-Save Record and any modifications
         F8-Clear: Clears editor contents (Does not clear
            copy buffer).
         F9-Mark: Mark block for copy.
         F10-Copy: Copy text.  See also Ctrl-C.

        To edit or enter a keyword list, use the F2 function key.
        The F9 and F10 commands are used to copy text from one
        location to another. To mark text (store it to be moved),
        place the cursor at the top left of the text and press the
        F9 key once. Then move the cursor to the bottom right of the
        text and press the F9 key again. Make sure your rectangle
        covers all of the text to move. When you mark the text, it
        will be highlighted on the screen. Move your cursor to where
        you want the text to be moved and press the F10 key. This
        will insert the text between existing lines in the record.
        To copy text directly over exiting text, use the CTRL-C
        command rather than the F10 command.

        To exit the editor and save the description, press the
        F7-Save key. To exit and not save, press the Esc key. The
        following list of commands are Control commands. Control
        commands are issued by pressing the CTRL key like a shift


                        Please Become a Registered User



                                        23






          Information Please Version 2.00
          __________________________________________________________


        key, and then simultaneously pressing a single command key.

        CONTROL COMMANDS (CTRL)
        ----------------------------------------------------------
        CTRL A - Makes characters UPPER CASE.

        CTRL C - Is similar to the F10 function key. However,
        instead of first inserting blank lines before making a copy,
        CTRL C will place the copied text in the position specified
        by the cursor, directly over any text that may happen to
        exist.

        CTRL D - Deletes all characters on the current line which
        are to the right of the cursor. If the cursor is in column
        one, the entire line will be deleted.

        CTRL K - Allows you to enter or edit an Action Command.

        CTRL F - "Fills" the text from the current line to the next
        blank line which starts with a dot "." Each line is filled
        with as many words as will fit while observing the current
        line length specifications.

        CTRL J - Justifies line to right line length (margin) in
        editor. CTRL L - Reset the line length (right margin) within
        EDIT. After pressing CTRL L, you will be prompted to enter
        the new line length.

        CTRL S - Will search for a specified text. You will be
        prompted to enter the text to be located. Each time this
        text is matched, it will be highlighted on the screen.

        CTRL W - Deletes text from the position of the cursor to the
        next blank. This is usually used to delete a word.

        CTRL Y - Delete a line.

        CTRL Z - Makes characters lower case.






                        Please Become a Registered User



                                        24






          Information Please Version 2.00
          __________________________________________________________


                        USING COMMAND LINE SWITCHES

        This section lists some special features of Information
        Please. These may be of particular interest to
        organizational PC Support Coordinators.

        COMMAND LINE SWITCHES:

        The format for the Information Please command is

              IP [/MESS:filename][/OPEN:dabasebasename]

        The items in brackets are optional switches to the command.
        Information in switches must not contain any blank spaces.
        The /OPEN: switch allows you to open a Information Please
        database file without having to choose it from the
        Information Please menu. This allows you to setup the
        Information Please program to automatically use a particular
        database. For example, if you want the database IP-DOS to be
        open when you begin the program, you would enter the
        command:

              IP /OPEN:IP-DOS

        The /MESS: switch allows you to display the information from
        a text file on the screen at the beginning of the
        Information Please program. This could be helpful if you are
        using Information Please as a part of an organizational
        support program. You can use this "Special Message" as a
        description of how to use Information Please, what updates
        you have included in a database, and other important
        message. For example, suppose you place some ASCII text in a
        file named SPECIAL.TXT that you want displayed when
        Information Please is begun. You would use the command

              IP /MESS:SPECIAL.TXT

        This message will be displayed in a message box with the
        caption "Special Message" at the top and "Press Enter to
        Continue" at the bottom. ASCII text files can be created by
        most word processors. Create a file using margins that
        create a document about 60 characters wide. Save the


                        Please Become a Registered User



                                        25






          Information Please Version 2.00
          __________________________________________________________


        document as a DOS, ASCII or Text file (different word
        processors use different terms.). Then, use the /MESS:
        switch in the Information Please command to display the
        message.

        Distributing Information Please Information Databases

        If you are distributing Information Please databases around
        your organization, you must supply two files for each
        database. Of course, there must be a copy of the Information
        Please program on the computer, also. The file with the .IPI
        extension contains the index of Keywords. The file with the
        extension .IPD contains the data records. To distribute an
        Information Please database, all you need to do is supply
        these two files. That is, copy these files to the PC hard
        disk where you want them to be available. When you choose
        "Open a Database" from the Files menu, Information Please
        searches the directory for database names. Those database
        names that are found are the ones displayed when the user
        chooses Open Database.

        If you are going to commercially distribute an information
        database you have created, you will need to include a
        runtime version of Information Please on the disk. Please
        contact TexaSoft for information about licensing the
        run-time module.


















                        Please Become a Registered User



                                        26






          Information Please Version 2.00
          __________________________________________________________


     USER BALLOT

     In order to continue to improve Information Please, we need your
     input. This ballot is used to help us prioritize changes in future
     versions. Please indicate the changes you would like to see most in
     this program. Place a number from 0 to 10 next to each item, where 10
     indicates a HIGH priority for change and 0 means a LOW priority for
     change. We appreciate your suggestions.

     Your Vote      Item
     ---------       -----------------------------------------------
      _____          Support use of a mouse
      _____          Make the program searching faster
      _____          Make the keyword field longer
      _____          Provide password protection for use of a database
      _____          Allow encryption of database contents so the user
                     cannot change the contents of a database
      _____          Allow fixed-length fields within the keyword field
      _____          Allow sort by numeric and/or date keyword items
      _____          Provide more examples on disk & in the manual
      _____          Allow printing of all records that match
                     search criteria with one command
      _____          Allow mixed AND and OR search criteria in
                     one search
      _____          Use single keystroke commands to go to commonly
                     commonly used  options (such as Alt-V to go to
                     view keyword list)
      _____          __________________________________________________
      _____          __________________________________________________

     Write Other Suggestions Here:



     Please fill out this ballot and return to Texasoft, PO Box 1169, Cedar
     Hill, Texas 75104.












                                        27

```
{% endraw %}

## VENDOR.DOC

{% raw %}
```
Note to shareware vendors: Distribute this disk under the guidelines
of the Association of Shareware Professionals (ASP) vendor policies.

Program: Information Please
Version: 2.01
Reason for version: New Version

Registration fee: $49.00 plus P&H

BBS filename: IP201.ARC

Support: Registered user receives 3 months phone support, Compuserve 
support on 70721, 3145. Also gets printed, bound manual with 
illustrations, newsletter, information on upgrades, changes and 
discounts on new versions. 

Disks needed: Floppy or a Hard Disk

Description: Information Please is a text storage and retreival 
program allowing you to store and retreive full-text information - 
such as memos, catalogues, briefs, letters, invoices, articles, 
product descriptions, scientific papers, and so on. "Text is the next 
great frontier of information processing" (John Verity, Information 
Processing Magazine, June 18, 1990) Enter information from keyboard or 
import from ASCII file. Search, Display and Print entries using 
keyword or full-text searches that allow mulitple AND and OR criteria. 
Relate text to a PCX graphic or another program. User interface is an 
easy to learn pull down menu (Windows-Like) interface. Contains 
example "textbase" with helps for dealing with DOS disk problems. 
Requires 360K RAM. Can be run on floppy or hard disk. ASP Shareware. 
Register through TexaSoft, PO Box 1169, Cedar Hill, Texas 75104, or by 
phone (MC/VISA) at 214-291-2115. 

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2377

     Volume in drive A has no label
     Directory of A:\

    PRINTDOC COM      7282  10-01-90   2:01a
    IP201    EXE    187347  10-01-90   2:01a
    IP       DOC     54527  10-01-90   2:01a
    INSTALL  BAT      2432  10-01-90   2:01a
    VENDOR   DOC      1497  10-01-90   2:01a
    README   BAT      1922  10-01-90   2:01a
    FILE2377 TXT      1925  10-17-90   8:35a
            7 file(s)     256932 bytes
                           62464 bytes free
