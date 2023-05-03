---
layout: page
title: "PC-SIG Diskette Library (Disk #3183)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3183/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3183"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## BL.DOC

{% raw %}
```

















            ************************************************************
            *                                                          *
            *                                                          *
            *                B O O K   L I B R A R I A N               *
            *                         Version                          *
            *                           1.5s                           *
            *                                                          *
            *                       User's Guide                       *
            *                                                          *
            *                            by                            *
            *                                                          *
            *                     Lemuel D. Turner                     *
            *                      TurboSystemsCo                      *
            *               3595 Canton Rd, Suite A9-268               *
            *                    Marietta, Ga. 30066                   *
            *                        404-516-8575                      *
            *                                                          *
            ************************************************************

                      (C) Copyright 1991-1992 Lemuel D. Turner
                      (C) Copyright 1991-1992 TurboSystemsCo
                               _______
                          ____|__     |               (R)
                       --|       |    |-------------------
                         |   ____|__  |  Association of
                         |  |       |_|  Shareware
                         |__|   o   |    Professionals
                       -----|   |   |---------------------
                            |___|___|    MEMBER



                                 LICENSE AGREEMENT
                              BOOK LIBRARIAN PROGRAM


         (C) Copyright 1991-92 TurboSystemsCo and Lemuel D. Turner for this
         software, documentation, and user interface.  Marietta, Ga. United
         United States of America. All rights reserved.

         TurboSystemsCo grants you without charge the right to reproduce,
         distribute and use copies of this "shareware" version of our
         BOOK LIBRARIAN software product (including the on disk
         documentation), on the express condition that you do not receive
         any payment, commercial benefit, other consideration for such
         reproduction or distribution, or change this license agreement or
         copyright notice.  *(Shareware distributors, user's groups and BBSs
         may charge a distribution fee not to exceed $10.00, without written
         permission.)*

         The rights to receive any such financial or other benefit, and to
         modify the product or its components, are reserved exclusively by
         TurboSystemsCo.

         Support from users enables us to develop additional features and,
         future versions of the BOOK   LIBRARIAN product.  Your payment of
         $34.95 + $4 S/H would be greatly appreciated; send your payment to:


                              TurboSystemsCo
                       3595 Canton Rd,  Suite A9-268
                           Marietta, Ga. 30066


         By sending in your payment, along with your name, mailing address
         version number, and where you heard about the BOOK   LIBRARIAN
         product and obtained your copy, your copy of BOOK LIBRARIAN
         will be registered with us.  This will enable you to receive (1)
         technical support, (2) announcements of future releases, the latest
         version, (3) a printed manual and discounts on additional programs
         from TurboSystemsCo.

         THIS PRODUCT IS LICENSED WITHOUT ANY WARRANTY OF MERCHANTABILITY,
         FITNESS OF PARTICULAR PURPOSE, PERFORMANCE, OR OTHERWISE; ALL
         WARRANTIES ARE DISCLAIMED. BY USING THE BOOK LIBRARIAN PRODUCT,
         YOU AGREE THAT NEITHER TurboSystemsCo NOR ANY OF OUR EMPLOYEES,
         AFFILIATES, OWNERS, OR OTHER RELATED PARTIES WILL BE LIABLE TO
         YOU OR ANY THIRD PARTY FOR ANY USE OF (OR INABILITY TO USE) THIS
         SOFTWARE, OR FOR ANY DAMAGES WHATSOEVER. EVEN IF WE ARE APPRISED
         OF POSSIBILITY OF SUCH DAMAGES OCCURRING.

         This software may not be reversed-engineered or disassembled,
         and includes certain trade secrets and confidential information
         of TurboSystemsCo.

                 BOOK LIBRARIAN is a trademark of TurboSystemsCo.





                                       < i >

            BOOK LIBRARIAN Registration Payment Form
           ---------------------------------------------
        To order BOOK LIBRARIAN, please fill out the form below:

                                                       Date: _____________

        Name: _____________________________  Title:   ___________________

        Address: ________________________________________________________

        City: ___________________________________________________________

        State/Country: ________________________ Zip: ____________________

        Phone  Work: (_____) _____ - ______  Home: (_____) _____ - ______

        Source of Shareware Copy: _______________________________________

        Payment: Check[ ]   Money Order[ ]  VISA[ ]  MC[ ]  AMEX[ ]
                 Optima[ ]

        Card # : ______________________________________ Exp Date:___/_____

        Card Holder's Signature: __________________________________________

        ALL CHECKS AND MONEY ORDERS MUST BE DRAWN ON U.S. ACCOUNTS ONLY.

        +----------+------------------------------+----------+----------+
        |          |                              |   Cost   |   Total  |
        | Quantity |          Description         | per unit |   Cost   |
        +==========+==============================+==========+==========+
        |          |    BOOK  LIBRARIAN 1.5s      |  $34.95  |          |
        +==========+=+============================+==========+==========+
                     |  Ga Residents Add Sales Tax           |          |
        Ship/Handling+---------------------------------------+----------+
        US = $4      |      Shipping/Handling Fee            |          |
        OTHERS = $8  +---------------------------------------+==========+
                                                       TOTAL |          |
        Please indicate diskette format:  [ ] 5.25           +==========+
             ** $ .50 for 3.5 disk ***    [ ] 3.5
        --------------------------------------------------------------------
       Mail this completed order form to:

                             TurboSystemsCo
                             BL Order Department
                             P.O. Box 965368
                             Marietta, Ga. 30066
        -------------------------------------------------------------------
        If paying by credit card, you may place your order by
        calling 1-404-516-8575. 10am - 2:30pm & 5pm - 7:30pm EST Mon - Fri
                                10am - 2pm EST Sat
      
                                        < ii >





                                  TABLE OF CONTENTS



        Introduction
            Introduction .............................................   1
            Features .................................................   1
            System Requirements ......................................   2
            Distribution Files .......................................   2
            Disk Back-Up .............................................   2

        Getting Started
            Installing Book Librarian ................................   3
                Hard Disk System .....................................   3
                Floppy Disk System ...................................   3
            Start-Up .................................................   3
                Floppy Disk System ...................................   3
                Hard Disk System .....................................   4
                Printer Set-up .......................................   4
                Keyboard and Mouse Usage .............................   5

        Data Entry
           Data Entry Screen .........................................   5
               Command Menu ..........................................   5
               Edit Keys .............................................   7
           Data Operations ...........................................   8
               Adding Records ........................................   8
                  Data Entry Fields ..................................   9
               Editing Records .......................................   9
               Deleting Records ......................................  10

        Searching
           The Find Function .........................................  10
               List Book Window ......................................  11
           The Browse Function .......................................  12
           The Search Function .......................................  12
               Query Screen Fields ...................................  12

       Reports
           Reports ...................................................  13
               Report Type Menu ......................................  13
               List To Menu ..........................................  13
               List All ..............................................  14
               Sort By Menu ..........................................  14
               Spacing Menu ..........................................  14
           Report Formatter ..........................................  14
               Formatter Fields ......................................  14

       Customer Support ..............................................  15






                                               < iii >



                                   INTRODUCTION



        BOOK LIBRARIAN is an easy to use book database management system.
        It is ideal for managing a personal, professional, church, club,
        or business library.  You can quickly search your library by Title
        Author, Subject or Book type.  Can print reports to the screen,
        printer or disk file.


        FEATURES

        - Holds 16 Information Fields About Each Book
          -- Title, Author (first & last), Subject, Book Type, Edition,
             Pages, Copyright Year, Catalog #, ISBN, Purchase Date, Price,
             Publisher, Location, Note1, Note2.

          -- A memo field that can hold up to 30 lines of information about
             each title.


        - Database Management Functions.
          -- Next, Prev, Find, Top, Last, Edit, Add, Del, Search,
             Report, Browse, Quit


        - Reports
          -- Eight fixed format reports, plus a self design report.
             --- Reports may be printed to screen, printer or disk text file.
             --- Can print on continous form 3 X 5 cards.


        - Context Sensitive Help
          -- Press F1 to bring up a relevant help screen at any point in
             the program.

        - Mouse Support

        - Screen Saver
          -- A built-in screen saver activates when the keyboard is not used
             at a user customizable interval.

        - Browse and Find Windows
          -- Moveable, scrollable, resizeable

        - Find any Title, Subject, Author or Book Type in approximately 1
          second or less.

        - Search database on any combination of fields.

        - Can hold over 2 billion titles, approximately 900 on a 360k floppy
          if memo field is not used. Memo field only uses disk space if the
          field is used.



        ===============================  1  ==============================




        SYSTEM REQUIREMENTS

        To use BOOK LIBRARIAN you will require:

                      IBM PC/XT/AT PS/2 or Compatible.

                      At least 512k of memory.

                      Two floppy drives or 1 hard disk and a floppy

                      A color monitor (CGA,EGA,VGA)

                      Printer (capable of print in compressed mode to use
                      all the features of the program).

                      MS-DOS/PC-DOS 2.1 or higher.

                      Supports both keyboard and mouse input.




        Your CONFIG.SYS file must have the statement, FILES=16.  If the
        number is greater than 16 that's okay.  Refer to your DOS manual
        if you are not familiar with the CONFIG.SYS file.





        THE DISTRIBUTION FILES

           The Book Librarian disk should at a minimum contain the
           following files.  If all the files listed below are not found
           on this disk, please notify TurboSystemsCo of the source of
           disk so we can provide them a correct copy of the program.
           There may be additional files added by the distributor.

        BL.EXE     README.DOC     SAMPLE.K3     REPORT.DSW    ORDER.EXE
        BL.DBW     SAMPLE.BLF     SAMPLE.K4     REPORT.DSH    OPWIN.DSW
        BL.DBH     SAMPLE.K1      DBLANG.LAN    QUERY.DSW     FORM1.DSW
        BL.DOC     SAMPLE.K2      PRINTER.PTR   QUERY.DSH     FORM1.DSH

        DB_UTIL.IWF               EPSON.CFG
        DBPMENU.MEN               IBMPRO.CFG
        VENDOR.DOC                HPII.CFG


        BACKUP YOUR PROGRAM DISK

        Please make a backup copy of the program disk.  If required,
        please refer to your DOS manual for back-up procedures.




        ===============================  2  ================================




        INSTALL BOOK LIBRARIAN ON A HARD DISK


        Before continuing we remind you again to make a backup copy of
        the program disk.  Refer to your DOS manual for back-up pro-
        cedures if required.



        We suggest you set up a directory specifically for Book Librarian.
        From the "root" directory normally "C:\":

        Enter the DOS command:

        MD\BOOK     (Press RETURN)

        Next set the default to the new sub-directory by entering the
        DOS command:

        CD\BOOK    (Press RETURN)

        With your working copy disk in drive A; enter the DOS command:

        COPY A:\*.*  (Press RETURN)


        INSTALLING ON A FLOPPY DISK SYSTEM

        If you are using Book Librarian on a dual floppy disk system, then
        all that is required is to make a backup (copy) of the Book Librarian
        program disk and use the backup (copy) as your working disk.  You'll
        also need to format a blank floppy disk to hold your data files.


        START-UP

        This section describes how to load and start-up Book Librarian.
        Also see README.DOC file on the distribution diskette for the
        latest info.


        DUAL FLOPPY SYSTEM

        You need your working copy disk of Book Librarian and a blank
        formatted disk. To enter Book Librarian, (1) boot your system with
        your DOS disk, (2) place your working copy in drive A, and
        your blank formatted disk in drive B, (3) at the A> prompt type
        VLB and press RETURN, and the shareware notice screen will be dis-
        played, (4) after the shareware notice screen is displayed, press
        the space bar to continue and the file selection screen is dis-
        played.  Use the cursor to select a data file.  All Book Librarian
        data files have the extension .BLF.  If you select a file with the
        extension .BLF the file will be displayed on the main data entry
        screen.


        ================================= 3 ================================



       DUAL FLOPPY SYSTEM - Cont

       To select a data file on a different drive, press the control key
       and the drive letter.  For example to select a data file on drive
       B, press the control key and the letter B together.  To create a
       data file press the F2 function key, enter a name for the file up
       to eight characters long.  Do not enter an extension, the extension
       .BLF will be added.
       
       
       HARD DISK SYSTEM START-UP
       
       To enter Book Librarian, (1) start your system if not already start-
       ed, (2) at the C> prompt, type CD/BOOK or the name of the subdirect-
       ory you copied the Book Librarian master disk files, (3) type BL
       and press the ENTER/RETURN key and the program will load.  To select
       a data file see section under Dual Floppy Start-Up.
       
       
       PRINTER INSTALLATION
       
       The first time you use Book Librarian or if you change printers,
       you must install your printer for use with Book Librarian. To
       install your printer, select U)til from the Main Menu.  Then
       select S)elect Printer from the next menu.  The menu will display
       five selections. (1) Epson and Compatibles, (2) IBM Proprinter and
       Compatibles, (3) HP Laser Series II and Compatibles, (4) Generic
       and (5) TSC Printer.

       To select a printer, select the highligted letter or use the arrow
       key to move the cursor over the printer and press RETURN/ENTER.

       Most non-laser and some laser printers are compatible with the Epson
       or IBM ProPrinter.  If your printer is not an Epson or IBM Proprinter
       check your manual, it is probably compatible with one or both.
       Select the appropiate  printer.   If you have a laser printer, select
       the HP Laser printer.

       If your printer will not work with any of the first three selections
       then you should select the Generic Printer.  When you use the Generic
       printer printer control codes are sent to your printer.   You will
       not be able to print the Comprehensive and Index Cards unless you
       manually place your printer in compressed mode prior to starting the
       report.  Also the headings will not be printed in bold.

       The final selection (5) TSC, is used to load a custom driver for your
       printer created by TurboSystemsCo.  If none of the first three
       will work with your printer then contact TurboSystemsCo.  We may be
       able to construct a driver for you.  Please provide the manufactuer
       and model number.

       If you selcet one of the printers and the reports don't print
       correctly, always reset or turn your printer off then back on
       prior to trying another selection.


       
       ================================= 4 =================================



       DATA ENTRY
       
       After the File Selection Screen is displayed, the Main Data Entry
       Screen is displayed.  The screen contains 16 data entry fields, 1
       memo field and the Command Menu.
       
       The Command Menu provides Book Librarian with a selection of easy to
       use database management functions.   Each menu item can be selected by
       pressing the highlighted letter, or by using the arrow keys to place
       the cursor over an item and pressing ENTER, or by using the mouse.
       The function of each menu item is provided below:
       
       ITEM        FUNCTION
       -------     --------------------------------------------------------
       Next        Displays the next book title in alphabetical order.

       Prev        Displays the previous book title in alphabetical order.

       Find        Use this feature to rapidly locate any Title, Author,
                   Subject, or Book Type.

       Top         Displays the first book in Title index order.

       Last        Displays the last book in Title index order.

       Edit        Edit the book currently displayed on the screen.

       Add         Add a new book to the library file.

       Del         To delete the book displayed on the screen.

       Search      Displays the Search Selection Screen.  Search the lib-
                   rary file using multiple selection criteria.  Matches are
                   displayed on the Data Entry Screen.
                                
       Browse      Allows you to display the book records in tabular for-
                   mat in a browse window, scroll through the records
                   indexed by Title, Author, Subject or Book Type.


       Rpt         Displays the report selection screen.
       
       Quit        Exits Book Librarian.

       F1          Displays context sensitive help about menu items or data
                   entry fields.  The F1 key is not displayed.
                   
       Alt+'V'     Pressing the ALT key and pressing 'V' will display a 
                   screen to alter the delay before the screen saver.  
                   Valid entries are 5 to 600 seconds.  Enter 0 to turn
                   screen save off.
                   
       ESC         The same as Quit, also Alt+'X' has same function.
                   
       Copy        Add a new item, but copy fields currently displayed.



       ================================= 5 =================================


       EDIT KEYS
       
       
       The edit key listed below are in effect when entering data into the
       Main Data Screen and other screens where data can be entered.
       
       
       
       KEY        FUNCTION
       ---------  --------------------------------------------------------
       F1         Displays help screen.
       
       F2         Displays file name field on Data File Selection Screen.
       
       F5         The field is deleted from the cursor position to the end
                  of the field and the cursor is placed back at the left
                  margin of the field.
                  
       F10        The key is used to end editing.  If on the main data entry
                  screen, the data is written to a data file.  On other 
                  screens, control will be returned to the menu.
                  
       ESC        Key is used to exit from data entry while using the Add
                  or Edit functions.  The changes made to the data entry
                  screen are canceled. 
                  
       ENTER      Pressing ENTER/RETURN while in a data entry field ends
                  edit of the field and moves the cursor to the next field.
                  
       BACKSPACE  Causes the cursor to move to the left and erases the char-
                  acter to the left.
                  
       INS        Toggles between insert and overwrite of characters.
       
       DEL        Deletes the character under the cursor.
       
       UP ARROW   Moves the cursor to the previous field if not in the first
                  field.
                  
       DN ARROW   Moves the cursor to the next field on the screen.
       
       L ARROW    Moves cursor to left within a field.  Does not delete
                  characters.
                  
       R ARROW    Moves cursor to right within a field.  Does not delete
                  characters.
                  
                  
       KEYBOARD AND MOUSE USAGE

       Book Librarian can use both the keyboard and a mouse or a combi-
       nation of both.  There are three direct equivalences between the
       mouse and the keyboard.

       *    The left mouse button is exactly equal to the ENTER key.
       *    The right mouse button is exactly equal to the Esc(ape) key.
       *    The left and right button pressed together, (or the middle
            button in a three button mouse) is exactly equal to the F1 Key.




       ================================= 6 =================================





       DATA OPERATIONS
       
       This section describes how to add, edit and delete records.

       
       * ADDING RECORDS
       
       Adding a record is the process of typing information into blank data
       entry fields.

       To add a record to your book file select Add from the Command Menu
       by pressing A, or by using the mouse or arrow keys to highlight Add
       and pressing left mouse button or pressing the ENTER/RETURN key.
       
       Data entry begins with the Title field (top left) and proceeds left
       to right, top to bottom.  At the bottom of the screen is the 
       Memo area.




       You can enter up to 30 lines of information in the memo field. The
       This is a memo field is like a mini-wordprocessor, all edit keys
       work and words are automatically wrapped at the end of a line.



       NOTE:  The memo field only uses space in the database if you enter data
       in it.  The program allocates space in increments of 255 bytes.



       Saving the book information to disk is accomplished by pressing the
       F10 function key.  If you press ESC or the right mouse button while
       in any field, the information is erased and is not stored on disk.



       You can use the up/down arrow keys and or the mouse to revisit any
       field and edit the information prior to pressing F10 or ESC.  If in
       the memo field, you must press CTRL+PAGE-UP to exit the memo field
       and move back up to the note field.

       
                         
       
       
       
       




       
       ================================= 7 =================================



        * DATA ENTRY FIELDS
        
       Each record in the book file contains the following fields.

       Field           Contents
       ------------    --------------------------------------------------
       Title           Holds the book title, up to 43 characters.  This
                       is the primary index field.  The first 20 characters
                       are indexed.
                        
       Edition         Enter the book edition number, 1st, 2nd, 3rd etc.

       Subject         Enter the general subject of the book, mathmatics,
                       computers, etc.  An index field.

       Type            Enter the type of book, Childrens, Medical, Text,
                       How To, Catalog etc. An index field.

       Pages           Enter the number of pages contained in the book.

       Author(last)    Holds the last name of the author, an index field.
       
       Author(first)   Holds the first name of the author.

       Copyright       Enter the year the book was copyrighted.

       Price           Enter the price paid for the book or current value.

       Pur Date        Enter the date the book was bought or obtained.

       Cat #           Enter Dewey Decimal system #, or your own numbering
                       system to identify book.

       ISBN            Enter the 14 digit ISBN.

       Publisher       Enter the name of the books publisher.

       Location        Enter the location of the publisher or can hold the
                       physical location of the book.

       Note1           Can hold miscelleaneous information.

       Note2           Sames as note1.

       MEMO            30 line scrollable memo area.  Can be used to enter
                       a synopsis, review or other information.


       * EDITING RECORDS

       To edit a record select Edit from the menu by pressing E or by using
       the arrow keys or the mouse.  This function allows you to make changes
       to the record displayed on the screen.

       After you completed making changes to a field or fields, press F10
       and the changes are saved to your book file.


       ================================= 8 =================================



       * EDITING RECORDS - cont


       If you decide while editing the record that you don't want to save
       the changes, press the ESC key and the changes will be erased and the
       old information restored.


       * DELETING RECORDS

       To delete the record displayed select the Del function from the com-
       mand menu.  A prompt is displayed to confirm deletion of the record.
       Answer Yes to delete the record.


       SEARCHING

       There are two methods provided in the program to search your data-
       base, the FIND key and the SEARCH key.  The BROWSE key also lets
       you look at your database in tabular format and is also explained
       in this section.  The FIND function is quicker and easier to use
       but the Search function allows more complex searches.



       * THE FIND FUNCTION

       The FIND key rapidly locates a book by Title, Author(last name),
       Subject or Book Type.

       When you select FIND from the command menu a pop-up menu with the
       following choices is displayed: Title, Subject, Type, Author.

       Select one of the choices from the menu or press ESC to return to
       the Command Menu.  If you select Title, the following prompt is
       displayed:

          Enter Title To Find or ENTER/RETURN For All _________________

       A similar prompt is displayed for the other choices if selected.
       The prompt above allows you to specify a string to search for, or
       just press ENTER/RETURN.   If you press ENTER/RETURN key without
       entering a search string, then the data file is displayed indexed
       by the selected choice in the List Book Window.  The cursor will
       be placed at the beginning of the file.

       If a search string is entered, the data file is displayed in the
       List Book Window and the cursor is placed on the first record
       that matches the search string.  If the search string is not found
       then a prompt displays saying An Exact Match Not Found and the
       cursor is placed on the record that comes closest to matching the
       string entered.





       ================================= 9 ================================



       *FIND FUNCTION - Cont


       When using the FIND function the data base is displayed in a pop-
       up List Book Window.  You can use the arrow keys, mouse, Tab and
       Page-Up and Page Down keys to scroll through the data base.  The
       Tab key moves the cursor right 10 characters, Shift+Tab moves the
       cursor left 10 characters.  The Page Up and Page Down keys move the
       cursor up and down 10 lines respectively.

       A unique way to move through the data base or find a particular
       record is to type a letter or word from the keyboard while the
       List Book Window is displayed.  For example if the you typed the
       letter C then the cursor will move to the first entry or closest
       entry that starts with C.  To move the cursor to another location
       in the C list type another letter, for example U which would disp-
       lay CU in the left lower corner of the window.  The cursor would
       move to the CU location in the data base.  If Author was selected for
       the index and you typed CRUISE, the cursor would move to Cruise in
       the data base.  To erase the letters displayed in the lower left
       corner of the window press the Delete or Backspace key to erase the
       characters.  You can enter other characters to move about the data
       base.  For example enter the letter A to move to the top of the
       data base, then press Delete to erase the character and enter Z to
       move to the end of the data base.

       There are several options available to change the List Book
       Window.  The options are displayed at the bottom of the window.
       The options are (1) Brief, (2) Zoom (3) Resize and (4) move.  The
       options are explained below.

       List Book Window Options:

       (1) Brief - Limits display to only key fields. Can speed that rec-
       ords are accessed when paging around data in the find window.
       Press ALT 'B' to activate and deactivate.

       (2) Zoom - List Book Window expands to full screen.  Press ALT 'Z'
       to activate and deactivate.

       (3) Resize - Allows you to change the size of the window using the
       arrow keys or mouse.  You can only change the position of the bottom
       and right side of the window.  To activate press ALT 'R'.

       (4) Move - Allows you to move the window using the arrow keys or
       mouse.  Press ALT 'M' to activate.

       Note: If only one record in the Database matches the search string
       entered then the record is displayed on the main data entry screen
       and not in the find window.

       Also pressing ENTER/RETURN when the cursor is over one of the records
       in the List Book Window will display the book on the main data
       entry screen.


       ================================= 10 ================================


       THE BROWSE FUNCTION

       The browse function works identically to the FIND function except
       you can not enter a string to search for.  The function lets you
       browse through you database indexed by Title, Subject, Author or
       Book Type.  You should use this function if you just want to page
       through your data without looking for a particular item.

       THE SEARCH FUNCTION

       The FIND function can only perform searches on one of the key fields.
       The search function can perform searches on up to 10 fields, while
       setting up specific search criteria using logical operators.  When
       the Search menu selection is chosen, the book Query Screen is
       displayed along with the menu choices Edit, Recall Quit.

       Edit allows you to fill-in the book Query Screen,  Recall will
       display previously saved selections and allows you to load them from
       disk and fill in the book Query Screen.  Quit will return you to
       the main data entry screen.

       QUERY SCREEN FIELDS
       There are four fields on the screen used to set up the search cri-
       tiera: Field, Comparator, Value and LogOp.

       Field       Press ENTER/RETURN to pop up a pick list of fields
                   that can be tested. NOTE: There are 4 fields for Author,
                   Author_F, Author_L, and  Author.  For example you would
                   use Author_L if looking for a last name only match, ie
                   "Simon".  Use Author to match a first and last name, ie
                   "Burt Simon".

       Operator    Press ENTER/RETURN to pop up a pick list or type in one
                   of the seven operators.  This field defines the type of
                   test you want to make.

       Value       Enter the value to be compared/tested.

       LogOp       Select AND/OR from the pop up list to enter additional
                   selection criteria.  Enter "END" and/or press F10 to
                   stop entering data.

       The combination of a Field, an Operator and a Value forms the basic
       selection criteria.  When two basic criteria is joined together by
       a LogOp, this forms a selection pair.

       The program evaluates each selection pair separately and combines
       them progressively from top to bottom to determine if each record
       meets the selection criteria.  You can enter up to five selection
       pairs on the screen.
       A screen identical to the data entry screen is displayed with the
       prompt "****** Searching ******" at the bottom of the screen.
       When a match is found the following menu is displayed: "Next, Edit,
       Quit".  The mouse does not work with this menu.  Next starts the
       search process again to find the next match.  Edit functions the
       same as on the data entry screen.  Quit stops the search process
       and returns to the data entry screen.


       ================================= 11 ================================

       REPORTS

       The report screen appears when Rpt is selected from the command
       menu.  On the screen is five menus which determine the type of
       report, where to list the report, whether to list all or some of
       the books, the index to use, and line spacing.

       Upon arrival at the screen, the following menu is displayed:
       Edit, Continue, Quit.  Edit allows updating of the screen, Continue
       will cause the report to be listed, Quit returns you to the data
       entry screen.

       REPORT TYPE MENU
       Title           A pre-formatted report that can be listed to the
                       screen, printer or text file.  Report lists Title,
                       Author and Subject.

       Author          A pre-formatted report that can be listed to the
                       screen, printer or text file.  Report lists Author,
                       Title and Subject.

       Subject         A pre-formatted report that can be listed to the
                       screen, printer or text file.  Report lists Subject
                       Title, and Author.

       Book Type       A pre-formatted report that can be listed to the
                       screen, printer or text file.   Lists Book Type,
                       Subject, Title and Author Last Name.

       Valuation       A pre-formatted report that can be listed to the
                       screen, printer or text file.  Lists Title, ISBN,
                       Catalog#, Purchase Date, and Price.  Totals value
                       of all books.

       Comprehensive   A pre-formatted report that can be listed only, to
                       a printer or text file.  The report list all fields
                       in the database except for the memo field.

       Index Cards     Report listed on 3 X 5 continous form index cards.
                       Can not be listed to the screen.  All fields are
                       listed except for memo field.

       Custom          You select the fields to place in report.  Select-
                       ions are made using the Report Format Screen des-
                       cribed later.

       Memo            Prints all fields, plus the contents of the memo
                       field on a single sheet of paper.
       LIST TO MENU

       Screen          When selected the report is listed to your monitor.

       Printer         When selected the report is listed to your printer.

       Disk            When selected, you are prompted for a filename for
                       the text file.  Do not add an extension.  The pro-
                       gram adds the extension .TXT.  The file created can
                       be edited by any wordprocessor capable of reading
                       ASCII text.

       ================================= 12 ================================



       LIST ALL

       Yes        List all books in the data file.

       No         When selected, you will set-up selection criteria using
                  the Query Screen to list the desired books.



       SORT BY MENU

       Select the sort order in which you want your report listed. Choices
       are Title, Author, Subject and Type.  Selecting  Title would cause
       the report to be listed in alphabetical order by book title.


       SPACING

       Select Single or Double to print the Title, Author, Subject, Type,
       Valuation and Custom reports with single or double line spacing.
       Spacing has no effect The Index Card and Comprehensive Reports.



       REPORT FORMATTER

       When Custom report is selected from the Report Type Menu, the Report
       Formatter screen is displayed after completing the current screen.
       From this screen you select the fields to be included in your report
       and how you want the fields formatted.


       REPORT FORMATTER FIELDS

       Print Field    Enter the name of the field you want printed.  Press
                      ENTER/RETURN while the field is blank for a pop up
                      list of fields to select from.  Selecting Author
                      from the list will print last name, first name of
                      each. Choose L-MARGIN to set the size of the left
                      margin.

       Field Width    This is a display only field and you can not edit it.
                      it displays the number of characters the selected
                      field occupies.

       Print Width    This field allows you to specify the width in charac-
                      ters that you want the field to occupy on a line.
                      The number is added to the Line Width displayed at the
                      bottom of the screen.

       Wrap(Y/N)      Select YES(Y) when the Field Width is greater than the
                      Print Width and you want all the field information
                      printed.  The extra characters will be wrapped to the
                      next line.  The field information can occupy up to
                      three lines if wrap is used.


       ================================= 13 ================================


       REPORT FORMATTER FIELDS - Cont

       Wrap(Y/N)     If you select NO(N) and the Field Width is greater
                     than the Print Width, the extra characters are deleted.
                     Selecting either YES or NO when the Field Width is
                     less than or equal to Print Width has no effect on
                     the printout.

       Line Width    Display only field.  The field displays the width the
                     line will occupy as each Print Field and Print Width
                     is selected. NOTE:  If the Line Width exceeds 79 for
                     screen reports or for standard carriage printers, the
                     report will not be formatted properly when listed. If
                     you have a wide carriage printer, the reports can be
                     up to 129 characters wide.  The program prints the
                     reports in regular print and not in compressed print.

                     If you want to print long lines, I suggest you list
                     the report to a disk, and import the report into
                     your wordprocessor, format and print it out.

       Wrap Example
       This is a demonstration of the use and non use of Wrap on the Title
       field.  The Field Width for Title is 43, the selected Print Width is
       25.  The first line of the example below is with YES for Wrap and the
       second is with NO for Wrap.

             Title                   Author       Subject
          -----------------------------------------------
       1. Logistics Engineering And  Blanchard    Management
          Management

       2. Logistics Engineering And  Blanchard    Management

       CUSTOMER SUPPORT
       TurboSystemsCo has a strong commitment to customer support.  We
       provide technical support only to registered users.  However if
       you should experience problems getting the program to run on
       your systems prior to registering, we will attempt to resolve
       those problems.
       Lemuel D. Turner the owner and president of TurboSystemsCo and
       the author of Book Librarian is a member of the Association of
       Shareware Professionals.  While we don't think you'll ever need
       it,  by Mr. Turner's membership in the Association of Shareware
       Professionals, registered users have an additional avenue to
       resolve customer support disputes if they can not be resolved to
       the registered user's satisfaction.  See statement below:

       Lemuel D. Turner is a member of the Association of Shareware
       Professionals (ASP).  ASP wants to make sure that the shareware
       principle works for you.  If you are unable to resolve a share-
       ware-related problem with an ASP member by contacting that mem-
       ber directly, ASP may be able to help.  The ASP Ombudsman can help
       you resolve a dispute or problem with an ASP member, but does not
       provide technical support for member's products.  Please write the
       ASP Ombudsman at 545 Grover Road, Muskegon Mi. 49442-9427 or send a
       Compuserve message via easyplex to ASP Ombudsman 70007,3536.


       ================================= 14 ================================

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║               <<<<  PC-SIG Disk #3183 Book Librarian  >>>>              ║
╠═════════════════════════════════════════════════════════════════════════╣
║  To Print documentation, type;  COPY BL.DOC PRN  (press Enter)          ║
║                                                                         ║
║  To Start the program, type;  BL  (press Enter)                         ║
║                                                                         ║
║                                                                         ║
║                                         (c)Copyright 1992, PC-SIG, Inc. ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## README.DOC

{% raw %}
```


                                 Book Librarian
                                  Version 1.5s
                                      by
                                Lemuel D. Turner 
                 Member Association of Shareware Professionals (ASP)

                (C) 1991-1992 By Lemuel D. Turner and TurboSystemsCo

                Mailing Address: TurboSystemsCo
                                 P.O. Box 965368
                                 Marietta, Ga. 30066
                                 404-516-8575

    Registration Price: $34.00 + 4.00 S/H (US), $8.00 (Non-US)

    To Start: Type BL
    _______________________________________________________________________

                              PROGRAM DESCRIPTION
    _______________________________________________________________________

       - Holds 16 Information Fields About Each Book
          -- Title, Author (first & last), Subject, Book Type, Edition,
             Pages, Copyright Year, Catalog #, ISBN, Purchase Date, Price,
             Publisher, Location, Note1, Note2.

          -- A memo field that can hold up to 30 lines of information about
             each title.


        - Database Management Functions.
          -- Next, Prev, Find, Top, Last, Edit, Add, Del, Search,
             Report, Browse, Quit


        - Reports
          -- Eight fixed format reports, plus a self design report.
             --- Reports may be printed to screen, printer or disk text file.
             --- Can print on continous form 3 X 5 cards.


        - Context Sensitive Help
          -- Press F1 to bring up a relevant help screen at any point in
             the program.
 



    ______________________________________________________________________

                     SPECIAL FEATURES - cont  Book Librarian
    _______________________________________________________________________

        - Mouse Support

        - Screen Saver
          -- A built-in screen saver activates when the keyboard is not used
             at a user customizable interval.

        - Browse and Find Windows
          -- Moveable, scrollable, resizeable

        - Find any Title, Subject, Author or Book Type in approximately 1
          second or less.

        - Search database on any combination of fields.

        - Can hold over 2 billion titles, approximately 900 on a 360k floppy
          if memo field is not used. Memo field only uses disk space if the
          field is used.

    ______________________________________________________________________

                             SPECIAL REQUIREMENTS
    ______________________________________________________________________

     (1)  512K RAM   (2) Printer  (3) Color Monitor Recommended

    ______________________________________________________________________

                 SERVICES PROVIDED TO REGISTERED USERS
    ______________________________________________________________________


    (1)  The latest version of Book Librarian without the shareware
         registration screens.

    (2)  A printed manual.

    (3)  Customer Support by phone or mail by a member of ASP.

    (4)  Advisement of upgrades which are provided at low cost.

    (5)  Catalog of addtional products and discounts on additional
         product purchases.


    REGISTRATION PRICE: $34.95

    ______________________________________________________________________

                             FILES ON THIS DISK
    ______________________________________________________________________


      BL.EXE     README.DOC     SAMPLE.K3     REPORT.DSW    ORDER.EXE
      BL.DBW     SAMPLE.BLF     SAMPLE.K4     REPORT.DSH    OPWIN.DSW
      BL.DBH     SAMPLE.K1      PRINTER.PTR   QUERY.DSW     FORM1.DSW
      BL.DOC     SAMPLE.K2      EPSON.CFG     QUERY.DSH     FORM1.DSH

      DBPMENU.MEN     DBLANG.LAN    HPII.CFG
      VENDOR.DOC      IBMPRO.CFG    DB_UTIL.IWF
   ______________________________________________________________________

   Please refer to the VLB.DOC file for information on installing Video
   Librarian on your system and complete operating instructions.

   NOTE:
   Your CONFIG.SYS file must have the statement, FILES=16.  If the
   number is greater than 16 that's okay.  Refer to your DOS manual
   if you are not familiar with the CONFIG.SYS file.
```
{% endraw %}

## VENDOR.DOC

{% raw %}
```


                                 Book Librarian
                                  Version 1.5s
                                      by
                                Lemuel D. Turner 
                 Member Association of Shareware Professionals (ASP)

                (C) 1991-1992 By Lemuel D. Turner and TurboSystemsCo

                Mailing Address: TurboSystemsCo
                                 P.O. Box 965368
                                 Marietta, Ga. 30066
                                 404-516-8575

    Registration Price: $34.00 + 4.00 S/H (US), $8.00 (Non-US)

    To Start: Type BL
    _______________________________________________________________________

                              PROGRAM DESCRIPTION
    _______________________________________________________________________

        BOOK LIBRARIAN is an easy to use book database management system.
        It is ideal for managing a personal, professional, church, club,
        or business library.  You can quickly search your library by Title
        Author, Subject or Book type.  Can print reports to the screen,
        printer or disk file.
    ______________________________________________________________________

                                 SPECIAL FEATURES
    _______________________________________________________________________

       - Holds 16 Information Fields About Each Book
          -- Title, Author (first & last), Subject, Book Type, Edition,
             Pages, Copyright Year, Catalog #, ISBN, Purchase Date, Price,
             Publisher, Location, Note1, Note2.

          -- A memo field that can hold up to 30 lines of information about
             each title.


        - Database Management Functions.
          -- Next, Prev, Find, Top, Last, Edit, Add, Del, Search,
             Report, Browse, Quit


        - Reports
          -- Seven fixed format reports, plus a self design report.
             --- Reports may be printed to screen, printer or disk text file.
             --- Can print on continous form 3 X 5 cards.


        - Context Sensitive Help
          -- Press F1 to bring up a relevant help screen at any point in
             the program.
 



    ______________________________________________________________________

                     SPECIAL FEATURES - cont  Book Librarian
    _______________________________________________________________________

        - Mouse Support

        - Screen Saver
          -- A built-in screen saver activates when the keyboard is not used
             at a user customizable interval.

        - Browse and Find Windows
          -- Moveable, scrollable, resizeable

        - Find any Title, Subject, Author or Book Type in approximately 1
          second or less.

        - Search database on any combination of fields.

        - Can hold over 2 billion titles, approximately 900 on a 360k floppy
          if memo field is not used. Memo field only uses disk space if the
          field is used.

    ______________________________________________________________________

                             SPECIAL REQUIREMENTS
    ______________________________________________________________________

     (1)  512K RAM   (2) Printer  (3) Color Monitor Recommended

    ______________________________________________________________________

                 SERVICES PROVIDED TO REGISTERED USERS
    ______________________________________________________________________


    (1)  The latest version of Book Librarian without the shareware
         registration screens.

    (2)  A printed manual.

    (3)  Customer Support by phone or mail by a member of ASP.

    (4)  Advisement of upgrades which are provided at low cost.

    (5)  Catalog of addtional products and discounts on additional
         product purchases.


    REGISTRATION PRICE: $34.95

    ______________________________________________________________________

                             FILES ON THIS DISK
    ______________________________________________________________________


      BL.EXE     README.DOC     SAMPLE.K3     REPORT.DSW    ORDER.EXE
      BL.DBW     SAMPLE.BLF     SAMPLE.K4     REPORT.DSH    OPWIN.DSW
      Bl.DBH     SAMPLE.K1      PRINTER.PTR   QUERY.DSW     FORM1.DSW
      BL.DOC     SAMPLE.K2      EPSON.CFG     QUERY.DSH     FORM1.DSH

      DB_UTIL.IWF     HPII.CFG
      DBPMENU.MEN     DBLANG.LAN
      VENDOR.DOC      IBMPRO.CFG


    ______________________________________________________________________

                        DISTRIBUTION PERMISSION
    ______________________________________________________________________

    Permission is granted to shareware vendors, users groups and BBSs to
    add Book Librarian to their libraries and distribute the program
    as long as the distribution fee does not exceed $10.00.  If your dis-
    tribution fee exceeds $10.00, you must write for written permission to
    distribute Book Librarian.


    ______________________________________________________________________

                             PRODUCT HISTORY
    ______________________________________________________________________

    Version 1.5 Released Jan 29 1992

    Changes: (1) Added memo report - prints memo contents.

             (2) Added printer selection to utility menu..dropped
                 printer driver database program DBPRINST.EXE

             (3) Fixed bugs in custom report field selection.

             (4) Fixed bug that caused query screen selection criteria
                 to be ignored  when printing reports.  
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3183

     Volume in drive A has no label
     Directory of A:\

    BL       DOC     45344   2-10-92  11:49p
    BL       EXE     85128   1-28-92   5:29p
    BOOK     DBH      2619   1-28-92   5:29p
    BOOK     DBW       440   1-28-92   5:29p
    DBLANG   LAN      7776   1-28-92   5:29p
    DBPMENU  MEN     11375   1-28-92   5:29p
    DB_UTIL  IWF      9923   1-28-92   5:29p
    EPSON    CFG       416   1-28-92   5:29p
    FORM1    DSH      1052   1-28-92   5:29p
    FORM1    DSW       209   1-28-92   5:29p
    HPII     CFG       520   1-28-92   5:29p
    IBMPRO   CFG       416   1-28-92   5:29p
    OPWIN    DSW      1559   1-28-92   5:29p
    ORDER    EXE     19022   1-28-92   6:05p
    PRINTER  PTR        34   1-28-92   5:29p
    QUERY    DSH      2437   1-28-92   5:29p
    QUERY    DSW       745   1-28-92   5:29p
    README   DOC      4447   1-28-92   5:29p
    REPORT   DSH      1916   1-28-92   5:29p
    REPORT   DSW      1266   1-28-92   5:29p
    SAMPLE   BLF      6375   2-10-92   8:35a
    SAMPLE   K1       2098   2-10-92   8:35a
    SAMPLE   K2       1522   2-10-92   8:35a
    SAMPLE   K3       1018   2-10-92   8:35a
    SAMPLE   K4       1450   2-10-92   8:35a
    VENDOR   DOC      5741   1-28-92   5:29p
    GO       BAT        31   6-04-92   2:25a
    GO       TXT       770  10-02-92   1:36p
           28 file(s)     215649 bytes
                           90112 bytes free
