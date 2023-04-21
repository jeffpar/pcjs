---
layout: page
title: "PC-SIG Diskette Library (Disk #1091)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1091/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1091"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "CASSY"

    CASSY is a versatile, inexpensive Dewey Decimal System-based program
    that helps keep books and audiovisual materials in order.  Operation is
    menu-driven, simple, and intuitive.  Printer support lets you print sets
    of catalog cards, accession lists, and shelf lists.
    
    About 1,400 items can be stored on a single 360K disk and up
    to five subject headings are maintained per item.  All catalog card data
    is printed in proper upper- and lower-case combinations.  Also, catalog
    cards are printed in library order sets (AACR2) for easy filing.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CASSY.DOC

{% raw %}
```










                           C A S S Y          
                           =-=-=-=-=

           A  CATALOG  CARD / ACCESSION & SHELF  LIST
           =  =======  ==== = ========= = =====  ==== 
                             SYSTEM                    
                             ======
         
                 for the Dewey Decimal Library



                        Reference Manual


               Copyright (c) 1987  DIAKON Systems           
                      All Rights Reserved
                      


















                       page 1       





               Copyright (c) 1987  DIAKON Systems

        The Catalog Card / Accession & Shelf List Sytsem 
        and document files may be copied and freely 
        distributed so long as no changes or alterations 
        are made to any of the program, installation, or 
        documentation files.  It is expected that users 
        of the program will register their usage as 
        noted in the section "A Word About 
        Registration".



                           Disclaimer

        DIAKON Systems makes no representations or war-
        ranties with respect to the contents hereof and 
        specifically disclaims any implied warranties of 
        fitness for any particular purpose.  In no event 
        shall DIAKON Systems be liable for any loss of 
        profit or any other commercial damage.  Further, 
        DIAKON Systems reserves the right to make 
        changes in the specifications of the product 
        described within this manual at any time without 
        notice and without obligation to notify any 
        person of such revision or changes.  



        IBM and IBM PC/XT are registered trademarks of 
        International Business Machines.










                       page 2       













        A Word About Registration

        After using this CATALOG CARD/ACCESSION & SHELF 
        LIST SYSTEM, you may determine that it is a 
        useful tool for your continued use in your 
        library.  We of DIAKON Systems, the developers 
        of the program, are asking that you, the user, 
        contribute the modest amount of $20.00 to offset 
        our development and support costs.  

        Thank you for taking the time to evaluate DIAKON 
        Systems' CATALOG CARD / ACCESSION & SHELF LIST 
        SYSTEM.  If it meets your needs, become a 
        registered user by sending $20.00 along with 
        your name and address to: 
                   DIAKON Systems
                   Dept. Q 
                   3801 Glenmont Dr.
                   Fort Worth, TX  76133

        Registered users will receive information about 
        telephone support and will receive an 
        enhancement diskette  containing:
             1) Print AUTHOR listings,
             2) Print TITLE listings (AACR2 order, of 
                course),
             3) Merge multiple floppy diskette data 
                files into a single, fixed disk file.





                       page 3       



                       T A B L E    O F    C O N T E N T S



        Table of Contents . . . . . . . . . . . . . .  4    

        Introduction  
           CASSY Overview . . . . . . . . . . . . . .  5
           A Brief Word to Library Workers  . . . . .  8
                  
        Getting Started . . . . . . . . . . . . . . . 10

        Operating CASSY . . . . . . . . . . . . . . . 23
           A Word about Editing . . . . . . . . . . . 23
           The ACTIVITIES MENU  . . . . . . . . . . . 25
             (1)  Enter New Book Information  . . . . 26
             (2)  Alter and Delete Book Information . 30
             (3)  Enter New Audiovisual Information . 32
             (4)  Alter and Delete Audiovisual 
                      Information . . . . . . . . . . 37
             (5)  Print Catalog Cards . . . . . . . . 39
             (6)  Print Accession List  . . . . . . . 43
             (7)  Print Shelf List  . . . . . . . . . 44
             (8)  Alter Accession Number Sequence . . 45
             (9)  Rebuild Indexes . . . . . . . . . . 45
             (E)  Exit to DOS . . . . . . . . . . . . 46

        Questions and Answers . . . . . . . . . . . . 47

        Appendix A:
           Installing CASSY . . . . . . . . . . . . . 52
           Floppy Diskette System . . . . . . . . . . 52
           Fixed Disk System  . . . . . . . . . . . . 54
        Appendix B:
           Notes to the Fixed Disk User . . . . . . . 57
        Appendix C:
           DIAKON Systems Library Program Catalog
           and Order Form . . . . . . . . . . . . . . 58





                       page 4       




              INTRODUCTION TO CASSY
                              =====

        Welcome to DIAKON's CATALOG CARD / ACCESSION & 
        SHELF LIST SYSTEM.  This "software" system, or 
        computer "program", is designed to help the 
        media library worker as a tool for many of the 
        tedious library tasks.  The program will let
        the library worker enter and permanently store 
        the information for each book or audiovisual 
        item on the computer's floppy or fixed disk.  
        The program will then use this information to 
        print sets of catalog cards, accession listings, 
        and shelf listings.  Changes and corrections may 
        be made easily and cards or lists reprinted with 
        little extra effort.  All that, and the system 
        is EASY to learn and operate, too.

        The CASSY (short for Catalog card / Accession & 
        Shelf list SYstem) has the following features:
        * -  Both book and audiovisual cataloging with 
             the special catalog card formatting  for 
             each type is supported.     
        * -  Convenient, fast screen entry of informa-
             tion.  The normal "accessioning" and "cat-
             aloging" information is "typed" onto the 
             computer screen.  Powerful, yet simple-to-
             learn screen editing assures fast and easy 
             data entry.  
        * -  Certain items (such as accession date and 
             call letters) are automatically entered 
             onto the screen.  These items may be man-
             ually overwritten.
        * -  Automatic accession number assignment and 
             incrementing for book entry. The next num-
             ber is stored permanently and is available 
             when the computer is again turned on.
        * -  Catalog cards printed and automatically 
             formatted for the types AUTHOR, TITLE, 
             SUBJECT, and SHELF.  The format is defined      
             in "How to Process Media" from Broadman 

                       page 5       



             Press, 127 Ninth St. N., Nashville, 
             Tennesee, 37234.  [This book is an 
             inexpensive, yet thorough description of 
             how to establish and catalog a media 
             library.]
        * -  Batches of printed catalog cards are auto-
             matically alphabetized for easy merging 
             into the card catalog.  Shelf cards are 
             printed in shelf order.
        * -  Review of the stored information may be 
             easily done at any time to assure correct 
             spelling, etc.  A single keystroke will 
             "step" through the items allowing the 
             librarian to alter any along the way.
        * -  Print at any time a complete or a partial 
             Accession list.
        * -  Print a complete or a partial Shelf list 
             making for convenient inventory checking.
        * -  Multiple sets of cards may be printed.  A 
             single card or a group of cards may be 
             reprinted without re-entry of information.
        * -  The program can be "custom configured" for 
             your computer with a color or a monochrome 
             monitor.  It is personalized with your 
             library's name which will appear on screens 
             and printed listings.
        * -  The program is easy to learn, using menus 
             to move through the various activities.  

        CASSY (as the program will be affectionately 
        referred to throughout the rest of this manual) 
        is designed to operate on the IBM PC computer or 
        compatibles running PC or MSDOS 2.0 or greater 
        and having 256K or more memory.  The system must 
        have either two diskette drives or one diskette 
        and one fixed disk unit such as the IBM PC/XT.  
        A monochrome or color monitor may be used.  
        Also, a pin-feed printer will be used to print 
        catalog cards and the printed listings.  The 
        printer must be capable of handling standard 8-
        1/2"x 11" computer paper as well as pin feed 
        library card stock.  These items are readily 

                       page 6       



        available from your local library supply house 
        or one of the mail order suppliers such as  
        Demco, Box 7488, Madison, Wisconsin, 53707.    
        These folks will be delighted to send you a 
        catalog, I'll bet.

        A single floppy diskette will (conservatively) 
        contain about 1400 book or audiovisual entries.  
        This total may vary depending on how many sub-
        ject headings are used and how many accession 
        remarks are necessary. A 10-Meg fixed disk, on 
        the other hand, will store at least 15,000 
        entries. (Technically, a 10-Meg fixed disk can 
        store around 25,000 entries, but that leaves 
        room for little else.) 




























                       page 7       



                A BRIEF WORD TO LIBRARY WORKERS 
                  WHO ARE AFRAID OF COMPUTERS!

        If you, indeed, are AFRAID of computers, then 
        you probabaly have been intimidated by the pre-
        vious few pages already.  This little private 
        note is to reassure you.  You have made the 
        right move!  Tackling this computer project IS 
        worth the effort!  After a few hours of "doing" 
        CASSY, "reading" the CASSY manual will make much 
        more sense.  

        I need to let you in on a few secrets that folks 
        who work around computers alot already know, but 
        usually fail to tell anyone else.  If you tuck 
        these bits of information away in your mind, 
        they should surface when you need them the most.  

        1) The worst part of CASSY is getting it 
        INSTALLED.  Of course, this is the FIRST thing 
        you have to do, too.  (See GETTING STARTED 
        below)  Once you get passed this part, the rest 
        WILL be EASY!  Follow the INSTALLATION instruc-
        tions step by step.  During the INSTALLATION, 
        you may want to have someone around who knows a 
        little about computers.  This can be very 
        reassuring, but it is not essential.
        2)   Most computer programs (CASSY included) 
        work from the "top down".  After reaching the 
        ACTIVITY MENU (top), you may move "down" into an 
        activity (such as entering book information).  
        Before you are able to do something else (like 
        print a shelf list), you must return to the 
        ACTIVITY MENU (back to the top) before you can 
        drop "down" into another activity.
        3)   There is ALWAYS an escape route!  No matter 
        where you are in CASSY, you can escape!  
        Usually, the escape route involves pressing the 
        <ESC> key. (ESC stands for ESCape.  Appropriate, 
        no?)  ALWAYS look for the ESCape route as you 
        step to a new screen.  CASSY places this 
        information at the bottom of the screen.  

                       page 8       



        4)   The printer on which you print your catalog 
        cards will sooner or later rebel  at having to 
        print cards.  It will jam itself defiantly, 
        printing several lines on top of each other, 
        ruining several cards BEFORE it sounds its 
        alarm.  You have only to press the <ESC> key, 
        realign the cards, even printing a new alignment 
        sample if necessary, then "cooly" continue 
        printing.  Or, in your own act of defiance, QUIT 
        printing, making the printer repeat the process 
        at a later time when it decides it will behave 
        itself!  Remember, you can always reprint the 
        cards.  You have probably lost only one or two 
        cards in the jam-up.
        5)   Item #4 above was not meant to scare you.  
        It was merely to WARN you of what IS going to 
        happen.  That way, you can appear cool and know-
        ledgable when the crisis occurs. 
        6)   Believe it or not, you are smarter than the 
        computer.  YOU will decide what information it 
        is to "learn".  YOU will decide what rules it 
        will live by, what abbreviations are used, what 
        SUBJECT formats will be used.  YOU may change 
        your mind and alter the information.  The com-
        puter is only a tool or a slave of your wishes, 
        faithfully recording your choices.  It is basic-
        ally quite "dumb".  YOU are always the con-
        troller of the computer and not it the con-
        troller of you.  














                       page 9       



                        GETTING STARTED

        This section will show you how to get started 
        into CASSY  and how to move around in the pro-
        gram.  If this is your first time to use CASSY 
        on your system, you will need to "install" the 
        program onto your "working" diskettes or fixed 
        disk.  Thus, if you have not yet done so, please 
        refer to Appendix A for detailed installation  
        instructions.  

          +-------------------------------------------+ 
           NOTE:  If you attempt to work with an  "un-
           installed" CASSY, it simply will not  work.   
           The  installation process assigns the  name 
           of  your media library to the  screens  and 
           printer listings, defines data and  program 
           drive locations, pre-sets screen attributes 
           for  color  or  monochrome  monitors,   and 
           allows certain computer files to be created 
           that "hold" the information.  This  process 
           must  be  completed before CASSY  can  work   
           properly. 
          +-------------------------------------------+

        Each time CASSY is started, place the PROGRAM 
        diskette into drive A and the DATA diskette into 
        drive B.  (If, however, CASSY is operating on a 
        fixed disk system, your CASSY programs and data 
        will be on drive C.)   Now, start the computer 
        either by turning the unit on, or by pressing 
        the Ctl-Alt-Delete keys simultaneously if the 
        unit is already on.

        If you have a fixed disk system, go to the CASSY 
        directory and, at the system prompt [C>], type: 
           CASSY    <ENTER> <-- Press the <ENTER> key

        Throughout the CASSY instructions, we will use 
        the term <ENTER> to designate this key.  Dif-
        ferent computers label the key differently.  
        Some manufacturers call it the "RETURN" key.  

                       page 10       



        Earlier model IBM computers uses a reverse "L" 
        with an arrowhead (somewhat like <--').   
           
        Shortly, the CASSY sign-on screen appears with 
        your media library's name, copyright notice, and 
        a plea for financial participation in the on-
        going livelyhood of the developers.  Read the 
        message, send a check, then press <ENTER> to 
        move on to the ACTIVITIES MENU.  [The sending of 
        a check is only required once.  After that, you 
        may simply press <ENTER> unless you just WANT to 
        send a check each time...]

        At this time, if you are using a monochrome mon-
        itor, you may want to adjust the brightness and 
        contrast knobs so that the menu title appears 
        brighter than the numbered activity list.  A 
        correctly adjusted monitor will make moving 
        around in CASSY a bit more convenient.  A color 
        monitor will distinguish the highlighted items 
        with a different color so the brightness/ con-
        trast adjustment will be unecessary.

        After the sign-on screen, CASSY will settle at 
        the ACTIVITIES MENU.  It is from this location 
        that all CASSY activities are begun and return.  
        ALWAYS return to this ACTIVITIES MENU.  NEVER 
        turn off the computer until you have returned to 
        this ACTIVITIES MENU.  ("Not nice" things happen 
        to computer indexes and pointer files when 
        exiting improperly.)  Placing all fear aside, 
        now, let's look on at what CASSY can do.  

        The ACTIVITIES MENU is a list of "activities" 
        from which the selection of a task is made.  The 
        choice is made by entering the activity number 
        at the SELECTION line near the bottom of the 
        screen.  Simply press the desired number key as 
        CASSY will immediatley load the requested 
        program segment.  The various activities are 
        described in detail below in the section called 
        OPERATING CASSY.

                       page 11       




        Now that you have gotten into CASSY, we need a 
        way to leave CASSY gracefully.  You will find 
        throughout the program that an "escape route" is 
        always displayed on the screen.  Usually, it 
        will be simply pressing the <ESC> key.  This 
        will return you to the previous level.  Once you 
        have returned to the ACTIVITIES MENU, you may 
        exit to DOS by pressing "E" or you may turn off 
        the machine while in the ACTIVITIES MENU.  May 
        we remind you to NEVER turn off the machine 
        until you have returned to the ACTIVITIES MENU!

        Assuming you are still at the ACTIVITIES MENU, 
        let's now enter a book or two into the system 
        and see how it's done. You will need the acces-
        sion information for the books.  Be sure you 
        have the complete information such as the acces-
        sion number, author, title, subject headings, 
        etc.  [See the Questions and Answers section for 
        a way to create BLANK-SCREEN WORK SLIPS to use 
        in collecting information for entry.] 

        At the ACTIVITIES MENU press <1> to activate 
        "Enter New Book Information."  If this is the 
        very first time you have run your system, you 
        will be presented with a message saying that you 
        have no accession number on record, and that's 
        true! As the screen instructions direct, press 
        the <ENTER> key to take us back to the 
        ACTIVITIES MENU.  

        So we need to go to "8-Alter Accession Number 
        Sequence".  Press <8>.  An instruction screen 
        will appear.  At this point you will enter a 
        beginning accession number.  Type one to five 
        digits (no leading zeros), and press <ENTER>.  
        The new number will be stored and ready for use.  
        CASSY will then count from this point on all the 
        new books you enter.  It will increment automa-
        tically, saving you the problem of remembering 
        which number is next.  [NOTE: Though CASSY will 

                       page 12       



        automatically increment the accession numbers, a 
        way is provided for you to add information out 
        of sequence.  See Section 8 in OPERATING CASSY.] 

        Now, back to ACTIVITIES MENU "1-Enter New Book 
        Information" again.  This time you should come 
        up with a blank entry screen.  Note, that the 
        accession number we just entered appears in the 
        Accession Number "field".  Also note that the 
        computer's current date (you should have entered 
        it at computer turn-on) is displayed in the 
        Accession Date field.  The cursor also appears 
        in this field.  

        Let's enter some data now.  You will see the 
        cursor positioned at the first character of the 
        Accession Date field.  Enter the accession date 
        by typing the two month numbers, followed by the 
        two day numbers followed by the two year num-
        bers.  That is, August 3,1987, will be entered 
        080387.  

        After the last digit is entered, the cursor will 
        automatically advance to the Author field.  
        Enter the author's name using upper- and lower-
        case letters, placing the author's last name 
        first, followed by a comma, a space, the first 
        name, and finally, the middle name or initial.  
        Press <ENTER>.  Notice that the cursor jumps 
        down to the start of the Title field.  Also, did 
        you notice when you exited the Author field, the 
        first three letters of the author's name 
        appeared down in the Call Letters field?  In 
        most cases, these will be the correct call 
        letters, but we can change them if necessary.  

        Now enter the book's title as it would normally 
        be typed on a catalog card, using upper- and 
        lower-case letters.  Do not, however, add the 
        ending period normally used on the cards. Once 
        the title is complete, press the <ENTER> key.  
        The cursor advances to the Publisher field.

                       page 13       




        Probably, by now, you have typed a mistake some-
        where.  You may use the <Back Space> key or the 
        left and right arrow keys to position the cursor 
        at the error and type it correctly.  If you have 
        already left the field, you will be able to 
        correct it using the "review" mode. (More on 
        this later.  See also "A Word About Editing" in 
        the OPERATING CASSY section.) 

        Anyway, you may now enter the publisher infor-
        mation.  Again, upper- and lower-case letters 
        are allowed.  If the field is too short to 
        contain the complete publisher's name, abbre-
        viate.  Press <ENTER> to advance cursor.

        The Copyright Date is entered as "c1975".  Some-
        times a date is not known or the item may not be 
        copyrighted.  A publication year would then be 
        appropriate, example: "1890".   As is standard, 
        enter "n.d." for "no date".  Press <ENTER>.

        The cursor is now positioned at the start of the 
        Source field.  This field contains the informa-
        tion as to where the book came from such as a 
        "gift" or a store name where purchased.  If the 
        information is not known, simply press <ENTER> 
        to leave the field blank.  

        Enter the cost of the book as a simple "dollars. 
        cents" entry.  That is, a book costing $13.95 
        would be entered as "13.95".  Upon pressing 
        <ENTER>, the cost will re-format itself on the 
        screen.  This re-format feature allows us to 
        enter "15" for a $15.00 book and have it display 
        "15.00" without entering the trailing 0's.  

        The Remarks field is the additional accession 
        information which most often is left blank.  We 




                       page 14       



        will not presume to tell you what you may put in 
        this field, but here it is if you need it. The 
        information will only appear on the Accession 
        listing.

        Now we come to the Title Card question.  If you 
        wish the printing of catalog cards  to include a 
        title card for this book, you would answer <Y>, 
        otherwise answer <N>.  CASSY defaults to the <Y> 
        answer since most entries require a title card.  
        Once you enter a <Y> or an <N>, the cursor will 
        advance.
         
        The Classification Number field is next.  Enter 
        the standard Dewey Decimal numbers and press 
        <ENTER>.  Leading zeros are required for numbers 
        below 100.  Fiction, of course, uses "F" while 
        books for ages 8 - 11 contain a leading "J".  
        Other standard letter designations are 
        acceptable. 

        Now we come to the Call Letters field which, 
        probably, already has the correct letters in it.  
        Assuming it is correct, simply press <ENTER>.  
        The letters remain as though you had entered 
        them yourself.  Note here: a field which already 
        contains the correct information will retain 
        that information by pressing <ENTER>  when the 
        cursor is at the start of the field.  Had the 
        Call Letters been incorrect, as in the case of a 
        biography, you would be able to type the correct 
        letters over the incorrect ones.  

        The cursor now appears at the start of the first 
        Subject field.  CASSY  allows up to five subject 
        card entries.  Type the first subject heading in 
        the first blank.  Since subject headings are 
        always in upper-case, CASSY will type these 
        headings in upper-case whether or not you use 
        the <Shift> or <CapsLock> keys.  When the first 
        heading is complete, press <ENTER> and type in 
        the second heading.  If fewer than five subject 

                       page 15       



        cards are needed, press <ENTER> until the cursor 
        passes the last field.  

        Now you will see a new line near the bottom of 
        the screen requesting an OPTION selection.  The 
        possible choices are listed along the bottom of 
        the screen:  

        <S>save/print <N>save/noprint <R>review <E>exit

        Before choosing one of the selections, look over 
        what you have entered.  Do you see any mistakes?  
        If so, press <R> for "review" to place the 
        cursor  back at the Accession Date field. You 
        may now step through (by pressing <ENTER>) any 
        correct fields, or re-type any incorrect fields.  
        Any fields which are re-typed will need the 
        complete field re-entered since pressing <ENTER> 
        partially through the field will "blank" the 
        rest of the entry.  

        Once you have the data correct, Press <S> for 
        save and print.  The book information you have 
        just entered will now be stored on the 
        disk(ette) and placed on a "list" of entries to 
        have catalog cards printed at a later time.

        That's all there is to it!  All the hard work 
        for that book is done!  Well, most of it, any-
        way.  Let's enter another book before we stop.  

        Notice several exciting/confusing things have 
        taken place.  First, the accession number has 
        incremented automatically.  You won't need to 
        keep track of it any more.  The cursor is back 
        at the Accession Date field and the Subject 
        Headings have been cleared from the screen.  The 
        other information you entered still remains on 
        the screen.  CASSY is ready to accept 
        information on the next book.



                       page 16       



        Let's go ahead and enter another book.  Pro-
        bably, the Accession Date will be the same, so 
        just press <ENTER> to step forward.  If it is 
        not the same, simply re-enter it by typing over 
        the "old" date.  

        Now enter the new Author, again typing over the 
        "old" Author.  If, by chance, the Author name 
        you just entered is shorter than the previous 
        name, you will have some "extra" letters left 
        over from the previous entry.  Simply press the 
        <ENTER> key to clear these extra letters.  Enter 
        the rest of the items for your second book, 
        typing over the previous book's data.

        Again, we arrive at the "select OPTION" ques-
        tion.  If all is well, and it should be, press 
        <S> to save the information.  This puts us back 
        to the beginning for another entry.  (Note the 
        accession number is again incremented automat-
        ically...Don't you love it?)  Enter several more 
        books if you like, or you may wish to stop here.  
        So let's "escape" this entry procedure.  

        Be sure that you have pressed <S> (save/print) 
        on the last entry.  The cursor should be at the 
        Accession Date field.  Now for a fast escape 
        press the <ESC> key.  That action will take you 
        immediately to the "select OPTION" question.  
        This time, press <E> meaning exit to menu, and 
        you will find yourself again at the ACTIVITIES 
        MENU.

        Before we do anything else, let's go look at 
        what we've just entered.  That is quite easy to 
        do.  At the ACTIVITIES MENU select option "#2 - 
        Alter or Delete Book Information".  After a 
        brief wait, you will see a screen requesting the 
        accession number you wish to view.  

        Type the accession number of the first book you 
        entered above and press <ENTER>. Soon, the first 

                       page 17       



        book's information will be displayed on the 
        entry screen.  

        Scan the information on the screen.  If the 
        first book looks okay, then we will advance to 
        the next book.  Note the OPTIONS displayed 
        across the bottom of the screen:  

        <S>save <N>save/no prnt <R>rvw <D>delete <E>exit

        Let's move on.  Press the <Page Up> key now.  On 
        most keyboards it doubles as the number "9" on 
        the numeric keypad at the right side.  If, after 
        pressing it, nothing happens, then you need to 
        press the <NumLock> key to activate the "cursor 
        pad" (arrow keys).  Assuming all is well, you 
        should see the next book displayed.  Continue 
        pressing the <Page Up> key until all the entered 
        books have been viewed.  When the viewing is 
        complete, press the <ESC> key to return to the 
        ACTIVITIES MENU.  

        You may have noticed some corrections that are 
        necessary.  Using the <Page Up> and <Page Down> 
        keys, recall to the screen the book that needs 
        correction.  Press the <A> key to select the 
        "Alter/Delete" operation.  Note the cursor 
        appears at the Accession Date, and the OPTIONS 
        displayed across the bottom of the screen has 
        changed to show the ESCape route.    

        You will want to change only the incorrect 
        fields, so "step-through" the correct fields by 
        pressing the <ENTER> key.  When the cursor 
        arrives at an incorrect field, simply re-enter 
        the correct information and press <ENTER>.  Once 
        the incorrect fields have been corrected, press 
        the <ESC> key to make a hasty advance to the 
        "select OPTION" question.  We see the familiar 
        choices with the addition of a "D - delete" 
        function.  We will probably want to "S - 
        save/print" the changed book.  Even if it was 

                       page 18       



        previously saved for printing, CASSY will only 
        print one set of cards for the book.  

        After "saving" we may continue to view the book 
        information by using the <Page Up> and <Page 
        Down> keys.  Here we will enter and correct the 
        rest of our list or press <ESC> to return to the 
        ACTIVITIES MENU.

        That completes the entry of some books giving 
        CASSY something to work with.  We may turn the 
        computer off and come back later being assured 
        that all the information we just gave it will 
        still be there.  CASSY will also remember which 
        Accession Number to start with. 

        Let's go print some catalog cards, instead of 
        turning the computer off.  Since we should be at 
        the ACTIVITIES MENU, we simply press <5> to 
        select the printing ACTIVITY.  A Sub-Menu 
        appears allowing us to select between Book cat-
        alog cards or Audiovisual catalog cards.  Just 
        press <1> for Book cards.  The PRINT CATALOG 
        CARDS MENU appears.
         
        Now would be a good time to load the printer 
        with the standard, pin-feed, catalog card stock 
        available at your library supplies store.  
        Follow the loading directions supplied with your 
        printer.  As card stock is thicker than paper, 
        you may need to adjust the thickness lever on 
        the printer.  

        Since this is probably your first time to try 
        it, you may want to make a "test printing" on 
        paper. You may re-print the cards on card stock 
        later if you wish.  For this initial run of 
        cards, we will select "1 - Print full set of 
        catalog cards."  Press <1> and note that you 
        immediately are asked if you wish to "pause 
        between card types".  We will answer <N> for No, 
        this time through.  But later, we may want to 

                       page 19       



        use the "pause" feature to change card stock, 
        separate card types, or whatever.  

        Now we are asked if we wish to print an "align-
        ment sample."  An alignment sample prints a 
        positioning asterisk (*) in each corner of the 
        card.  We can adjust the printer (see your 
        printer's instruction manual for details), then 
        repeat the printing of a sample until the cards 
        are aligned exactly.  Answering <Y> to the ques-
        tion will print a sample.  Check the cards to be 
        sure the asterisks are lined-up evenly in each 
        corner.  If not, adjust the printer and card 
        stock, then press <Y> again to print another 
        sample.  Repeat the process until the sample 
        aligns perfectly.  This process will assure that 
        the cards also align perfectly.  

        Now answer <N> to the alignment sample question.  
        The computer starts a "reading and alpha-
        betizing" process before it starts printing 
        cards.  This step may take a few seconds up to 
        several minutes depending on how many cards are 
        to be printed.  Soon the computer starts 
        printing the cards.  As if by "magic" your 
        AUTHOR cards appear, properly formatted, and 
        even in order.  The computer continues to 
        whir...

        Soon the TITLE cards start printing followed by 
        the SUBJECT cards.  The cards are in order, too.  
        [NOTE: What to do if the printer jams ... a 
        likely occurance.  As the cards are printing you 
        may press the <ESC> key to stop the printer at 
        the next card.  After the printer stops, you 
        will be placed back at the "alignment sample" 
        question.  Realign the cards as necessary, then 
        continue printing where you left off.  Also, you 
        will be asked if you wish to terminate printing 
        at this point.  A <N> answer will continue 
        printing while a <Y> answer will send you imme-
        diately back to the PRINT CATALOG CARDS MENU.]

                       page 20       




        When the last cards are completed, the computer 
        asks if you wish to delete the "Cards-to-be-
        printed" LIST.  This ominous question (that 
        threatens to destroy data) really just wants to 
        be sure you are finished printing all the cards 
        for these books before CASSY starts a new list.  

        If you have printed the "test run" on paper, you 
        will definitely need to answer <Y> so that you 
        can re-print the cards on card stock.  On the 
        other hand, the cards printed on the card stock 
        are probably fine.  We have printed each of the 
        card types (AUTHOR, TITLE, and SUBJECT).  [If 
        you wish to print SHELF cards, answer <Y>, and 
        select <4> at the PRINT CATALOG CARDS MENU.  The 
        operation will be about the same as printing the 
        other cards except the SHELF cards will be 
        printed in shelf order.]  Unless we want to 
        print another set of these cards, just answer 
        <N> to the question, and the list will be 
        deleted.  We will then be back at the PRINT 
        CATALOG CARDS MENU.  Press <9> to return to the 
        ACTIVITIES MENU.

        A quick look at the Accession list comes via 
        pressing "6 - Print Accession List" at the 
        ACTIVITIES MENU.  Again, we will need to select 
        the Books or audiovisual listing.  Pick <1> for 
        the Books list.  Also, at this point, you will 
        want to change the card stock in the printer 
        back to standard fan-fold paper. Your printer 
        instruction book will give details.

        Once in the Accession List program segment, you 
        will be presented with two blanks to enter be-
        ginning and ending accession numbers, the range 
        to be listed.  Since our list is quite small, we 
        will list the complete group.  Simply press 
        <ENTER> at each blank to take the default mini-
        mum and maximum numbers.  The printer will start 
        printing the accession list.  You will see each 

                       page 21       



        book with its accession information printed in 
        an orderly format along with the remarks. Note 
        also that the system date is printed allowing us 
        to keep track of current versus obsolete acces-
        sion lists.  Once the list is complete, we are 
        returned to the ACTIVITIES MENU.

        Let's look now at a Shelf List.  Pressing "7 - 
        Print Shelf List", selecting Books <1> listing, 
        you will see a screen similar to the Accession 
        List screen asking for a beginning and an ending 
        Classification Number.  Again, since our list is 
        small, press <ENTER> at each blank to  accept 
        the minimum and maximum range.  This will then 
        print the complete Shelf List.   You will see 
        each book stored previously, listed in shelf 
        order.  Do you suppose we may eventually be able 
        to discard the SHELF cards?  

        Well, that about wraps up our our initial tour 
        of CASSY.  We have totally ignored the Audio-
        visual sections of CASSY.  They work very simi-
        larly, however.  We have breezed by many of the 
        detailed features.  You will want to read the 
        OPERATING CASSY section of this manual for more 
        explanation of these capabilities.  If some of 
        this "tour" (most of this tour?) seemed over 
        your head, don't worry.  A bit of practice and 
        you will be flying around in CASSY as though it 
        were as simple as a dictionary, because it 
        really is!  

        Remember, you are at the ACTIVITIES MENU, you 
        may now turn off the computer, or you may do 
        some other activity by exiting to DOS, or you 
        may want to go back into a section of CASSY.  
        Carry on ...






                       page 22       



                        OPERATING CASSY

        This section of the manual will describe each 
        ACTIVITY in the CASSY system in thorough detail.  
        It is intended to be used as a reference though 
        an initial reading is advised.  The section 
        starts with a fews notes on the CASSY editing 
        mechanics.  Next, description of the use of the 
        ACTIVITIES MENU.  It then describes each 
        ACTIVITIES MENU activity in menu order.  The 
        description starts with an overview then 
        proceeds to Sub-Menu Activities, and finally to 
        entry field descriptions.  






                     A WORD ABOUT EDITING:

        All of the CASSY program fields use a simple, 
        yet powerful field editing approach briefly 
        described as follows:

        Simply enter the desired data one character at a 
        time using the <Shift> key to generate upper 
        case characters.  The <Caps Lock> key may also 
        be used, but CASSY will automatically force the 
        critical fields into upper-case as needed.

        If an error is noted in the same field where the 
        cursor is located, using the <Right Arrow>, 
        <Left Arrow>, or <Backspace> key will position 
        the cursor over the incorrect character.  Enter 
        the correct character, then continue entering 
        the rest of the field.  If the rest of the let-
        ters are correct, simply pressing the forward 
        arrow repeatedly will advance the cursor over 
        the correct letters until the end of the line is 
        reached.  Then press the <ENTER> key to advance 
        to the next field.  

                       page 23       




        Should the entry of a field fill the allotted 
        space for that entry, the cursor will automa-
        tically advance to the next field.  If the cur-
        sor enters a field where the data is already 
        correct, pressing the <ENTER> key will accept 
        the data and advance the cursor to the next 
        field.

        Sometimes a field needs to have completely new 
        data entered into it.  Simply start typing over 
        the existing data with the new data.  Once the 
        new item is complete, press the <ENTER> key, the 
        cursor will advance to the next field clearing 
        off the end  any extraneous information that may 
        have been left from the previous entry.  

        At any point you may advance to the OPTIONS 
        selection by pressing the <ESC> key.  Be certain 
        the cursor is at the beginning of a field, else 
        the field may end up with partial information.

        If you need to back up to a previous field, you 
        must advance first to the OPTIONS selection, 
        chose Option <R> for "review".  This places the 
        cursor at the start of the data entry fields.  
        Then you may step through (using the <ENTER> 
        key) to the field needing correction.

        Sometimes you may need to "blank out" a field 
        which has data in it.  This is easily accomp-
        lised by entering a space in the first position 
        of the field, then pressing the <ENTER> key.  
        The rest of the field will blank out.









                       page 24       



                      The ACTIVITIES MENU
         
        After the initial CASSY sign-on screen, the pro-
        gram progresses to the ACTIVITIES MENU.  It is 
        from this location that all CASSY processing 
        starts and returns.  The CASSY procedure can be 
        visualized as an inverted "tree."  The 
        ACTIVITIES MENU is the "trunk" while the 
        ACTIVITIES shown on the ACTIVITIES MENU can be 
        thought of as the "main branches" which take us 
        to Sub-Menus.  The ACTIVITIES listed in the Sub-
        Menus represent smaller "branches" off the "main 
        branches."  

        The CASSY procedure flows from the trunk 
        (ACTIVITIES MENU) to the main branches (Sub-
        Menus), then down to the smaller branches (Sub-
        Menu Activities).  From a smaller branch (Sub-
        Menu Activity), you must return to the main 
        branch (Sub-Menu) before selecting another 
        smaller branch (Sub-Menu Activity) or before 
        returning to the trunk (ACTIVITIES MENU).   

        The ACTIVITIES MENU is a list of ACTIVITIES from 
        which you choose the program section to work on.  
        The choice is made by entering the activity 
        number at the SELECTION line near the bottom of 
        the screen.  You need only press the desired 
        digit key as CASSY  will immediately load the 
        requested program segment.  The various activ-
        ities are described in detail in the following 
        pages and are arranged in ACTIVITIES MENU order.

        Before going to the detailed ACTIVITY descrip-
        tions, it is important to be reminded:  
           NEVER TURN OFF THE COMPUTER UNTIL YOU 
           HAVE RETURNED TO THE ACTIVITIES MENU 
           or to DOS!
        The reason for this precaution is that CASSY 
        uses the computer's memory to temporarily store 
        permanent information.  Until you have returned 
        to the ACTIVITIES MENU, we can never be assured 

                       page 25       



        that the information has been permanently stored 
        on the disk.  



        1.  Enter New Book Information

        This ACTIVITY is the equivalent of "acces-
        sioning" a book and preparing a "work slip.".  
        The information will be entered and stored perm-
        anently on the computer's floppy or fixed disk.  
        Selecting <1> from the ACTIVITIES MENU, you will 
        see the "blank" New book entry screen.  Notice 
        that the "next" accession number automatically 
        appears in the upper left of your screen.  Also, 
        the current (computer) date appears at the upper 
        right of the screen.  The cursor is located at 
        the date "field."   As we are ready now to enter 
        data let's discuss each entry:

        ACCESSION DATE: This entry is simply the date of 
           the book's  accession.  CASSY defaults to the 
           computer's date entered at the time the com-
           puter was turned on.  Enter the one or two 
           month numbers (1-12 for January  through 
           December) followed by two day numbers (01-31, 
           leading zero is necessary) followed by the 
           two year numbers (85 for 1985.)  Invalid 
           dates will not be accepted.  If the date in 
           the field is already correct, simply press 
           the <ENTER> key. and the date will be ac-
           cepted as though you had entered it.
        AUTHOR:  The author entry is typed last name 
           first, followed by a comma, a space, and the 
           author's first  name or intial and middle 
           name or intial.  Enter both upper- and lower-
           case letters as is standard practice.  Once 
           the entry is complete, press the <ENTER> key.  
           Sometimes, the field size may be too small or 
           even just right.  As the last character in 
           the field is entered, the cursor will advance 
           on to the next field without pressing the 

                       page 26       



           <ENTER> key.  This feature may be a bit 
           annoying at first, but soon you will adjust 
           to it and be thankful for the reduced number 
           of keystrokes required.
        TITLE: This field is the book's title as it will 
           appear on the catalog cards.  The field may 
           be entered in both upper- and lower-case 
           letters.  Library practice calls for capital-
           ization of only the first letter of the first 
           word and the first letter of any proper name 
           in a title.  Enter the title's leading 
           article (A, An, The) as normal.  Do not enter 
           the ending period as you would normally do on 
           a catalog card.  (The computer does that when 
           it prints the cards.)  Once the  title has 
           been entered, press the <ENTER> key.  The 
           cursor will advance to the Publisher field.
        PUBLISHER: This field is simply the name of the 
           publisher.  The same entry features apply as 
           above.  Abbreviate if necessary.
        COPYRIGHT: This field accepts the copyright year 
           information formatted as follows: "c1983"  
           for a copyright in 1983.  This format is the 
           standard used on catalog cards.  Uncopy-
           righted books with known publishing dates use 
           the date only as in "1890".  Unknown dates 
           are entered as "n.d.".  It is NOT necessary 
           to enter the trailing period (.) except with 
           the "n.d." entry.   This will automatically 
           be entered by the computer at printing time.  
        SOURCE:  This information is only contained on 
           the accession list.  It describes where the 
           book came from.  Examples might be "gift" or 
           "memorial".  You may also choose to use the 
           name of the store where the book was 
           purchased such as "Bapt. Book".
        COST:  Here again is accession-only information.  
           Enter the book's cost in dollars followed by 
           the decimal then the cents.  This field some-
           times seems a bit offset, however, after you 
           have pressed the <ENTER> key, The computer 
           will re-format the field.  Verify that you 

                       page 27       



           have entered the cost correctly.  
        REMARKS:  Again, an accession-only field.  This 
           entry provides for other information that you 
           may want to place on the Accession listing.  
           Upper- and lower-case letters may be used.  
           Press <ENTER> when the field entry is 
           complete.
        TITLE CARD:  This field allows a single char-
           acter entry of <Y> or <N> (for Yes or No) to 
           designate whether or not you want a title 
           card printed.  Normally, title cards will be 
           printed so CASSY defaults to <Y>.   
        CLASSIFICATION NUMBER:  Using the standard Dewey 
           decimal system, enter the classification 
           number.  To isolate sections, the numbers may 
           have letters such as a "J" preceding the 
           classification number designating books for 
           ages 8 to 11.  The "F" fiction designation is 
           entered in this field.  Several other desig-
           nations are acceptable.  See Broadman's "How 
           to Process Media" for more information.  Press 
           <ENTER> when complete.
        CALL LETTERS:  A handy feature of CASSY occurs 
           in this field.  In most cases, the first 
           three letters of the author's last name 
           become the call letters.  CASSY automatically 
           inserts them for you at the Author field 
           entry allowing you to "step-through" the 
           field without re-entering the letters.  If 
           the Call Letters are different, you may, of 
           course, overwrite what CASSY has auto-
           matically entered.  Individual biographies 
           would not use the Author's name letters.  
        SUBJECT 1 - 5:  In these fields you may enter up 
           to five subject headings.  As is standard 
           practice, subject headings are printed in 
           upper-case only, therefore, CASSY automa-
           tically sets the entry characters to upper-
           case.  Press <ENTER> when the heading is com-
           plete.  You will advance to the next subject 
           field.  When the last subject has been 
           entered, press <ENTER> through the blank 

                       page 28       



           subject fields, or press the <ESC> key.  In 
           either case you will be advanced to the 
           OPTIONS selection.

        OPTIONS:  Here the data entries for a single 
        book are complete.  Look carefully over the data 
        on the screen as what is shown is what is 
        stored.  ("What you see is what you get.")  You 
        may now select what to do with the data.  
        Pressing a single letter (not followed by the 
        <ENTER> key) will do what is described below.  A 
        simplified options menu is displayed across the 
        bottom of the screen to remind you of the 
        choices.  They are as follows:
        S  - Save and Print - This selection will save 
           the data permanently to one or more files on 
           your computer's floppy or fixed disk. This 
           OPTION also maintains a "list" that can print 
           a batch of catalog cards from the 
           information.
        N  - Save and Not Print - The data is saved in 
           the necessary computer files, but will not 
           print catalog cards for this entry.
        R - Review -  This entry does not store any 
           information, but rather, allows you back onto 
           the entry screen to correct some incorrectly 
           entered data.  As the cursor enters a correct 
           field, simply pressing the <ENTER> key will 
           step you through the field without having to 
           re-enter the data.  Only the field that needs 
           changing must be re-entered.  Once the neces-
           sary field has been altered, press the 
           <ENTER> key to go to the next field, then 
           press the <ESC> key to advance immediately to 
           the OPTIONS selection.  
        E  - Exit to menu - Once all the entries have 
           been made and saved, you will use this option 
           to go back to the ACTIVITIES MENU. Always 
           finish the entry of a batch of book data with 
           this selection.  Note that you must SAVE the 
           current screen's book data before using the 
           "E" option.  Otherwise, the data will NOT be 

                       page 29       



           saved.  Likewise, you may use this option to 
           ignore the "just entered" data.  Remember, 
           ALWAYS return to the ACTIVITIES MENU before 
           turning off the computer!



        2.  Alter or Delete Book Information

        Choosing this ACTIVITY from the ACTIVITIES MENU, 
        you may alter a book's information, store it, 
        and optionally re-print catalog cards. After 
        arriving in this ACTIVITY, a screen will be 
        displayed requesting the book's Accession Num-
        ber.  Enter the Number and press <ENTER>.  If 
        the Accession Number is not found, a message 
        will advise you.  Then press <ENTER> to return 
        to the Accession Number entry field.  

        If a matching Accession Number is found, the 
        entry screen with the data will be displayed.  
        At this point, several "Preview" options exist:

        A - Alter:  Press the <A> key if you choose to 
           change any of the information on the screen.  
           The fields are labeled and entered exactly as 
           above, so we will not repeat the discussion.  
           Remember to <ENTER>-step through the correct 
           fields re-entering only the changed ones.  
           You may also use the <ESC> key to skip immed-
           iately down to the Options selection.   
           You will note that the Options selections are 
           slightly different than described above.  The 
           "Delete" Option has been added.  Using this 
           key will allow you to delete a book from the 
           files.  All other options will function as 
           described in the previous section.  
           You may safely "Save/print" a book more than 
           once since the printing process will only 
           print one set of cards per book per batch.  
           [Conversely, if you need more than one set of 
           cards per book, you may enter this Alter 

                       page 30       



           section, "save/print"  the desired books, 
           then print the batch of cards.  Then do not 
           erase the "list of cards to be printed" (see 
           more on this below), and re-print as many 
           times as desired.]  Selecting any of the 
           Options (except "R - review") will return to 
           the "Preview" options. 
           Perhaps we should note here that it is not 
           possible to directly alter the Accession 
           Number in this section.  Please refer to the 
           QUESTIONS and ANSWERS section of this manual 
           for a description of that procedure.

        <Page-Up> - Pressing the <Page-Up> will display 
           the next book in file which is in Accession 
           Number order.  You then have the options of 
           Altering the information, proceeding on, or 
           exiting to the Call Number entry screen.  
           When the end of the list is reached, a mes-
           sage indicating "no more items in the file" 
           will be briefly displayed before returning to 
           the Accession Number entry screen.

        <Page-Down> - Pressing the <Page-Down> will 
           display the previous book item in file which 
           is in Accession Number order.  You then have 
           the options of Altering the information, pro-
           ceeding backward, or exiting to the Accession 
           Number entry screen.  When the start of the 
           file is reached, a message indicating "no 
           previous items in the file" will be briefly 
           displayed before returning to the Accession 
           Number entry screen.

        E - Exit to Accession Number entry screen.  When 
           you have completed "Previewing" the informa-
           tion, pressing <E> will place you back at the 
           Accession Number entry screen where you may 
           enter another Number to view or you may 
           return to the ACTIVITIES MENU.
        Using this ACTIVITY, you may alter as many books 
        as you like.  To return to the ACTIVITIES MENU, 

                       page 31       



        press the <ESC> key.  Never turn off the com-
        puter before returning first to the ACTIVITIES 
        MENU. 



        3.   Enter New Audiovisual Information

        This ACTIVITY is the similar to accessioning a 
        book,  only this time we are accessioning an 
        Audiovisual item.  The information will be 
        entered and stored permanently on the computer's 
        floppy or fixed disk.  Selecting "3" from the 
        ACTIVITIES MENU, you will see the audiovisual 
        item entry screen.  

        You will notice first that the screen looks 
        similar to the Book Information entry screen.  
        As you would expect, the screen entry and 
        editing process will also be the same.

        Let's look at each item on the screen and dis-
        cuss its function plus entry information:

        CALL NUMBER:  Audiovisual items use the call 
           number as the accession number.  The number 
           is made up of 2 - 4 alpha characters followed 
           by a number.  The characters, known as the 
           media designator, are upper-case alphabetic 
           characters that define the media type.  Com-
           mon designations include:
                  AC - Audio cassette
                  FS - Filmstrip  
                  SL - Photograhic slide
                  VC - Video cassette 
           For further information on choosing the media 
           designators, see Broadman's "How to Process 
           Media".
           The second part of the Call Number is a 
           number between 1 and 999 that is the unique 
           accession number for the audiovisual item.  
           The librarian usually assigns this number in 

                       page 32       



           ascending order by types as the audiovisual 
           items are accessioned.  For example:
                  FS1       AC15      ACFS4
                  FS2       AC16      ACFS5
           Unlike the Book entry section, the Accession-
           /Call Number is NOT automatically assigned 
           nor incremented by CASSY.  It is the libra-
           rian's responsiblity to keep track of the 
           "next" number.  CASSY will, however, protect 
           against creating a duplicate number.  You 
           can, of course, refer to the Accession List 
           to obtain the last used number.
        PURCHASE DATE:  This item is a 6-digit entry in 
           the MMDDYY format.  The date is automatically 
           set to the computer's date as you begin.  You 
           may, however, alter it as necessary.  This 
           date may be treated as a purchase date (help-
           ful for warranty service) or as the accession 
           date.
        TITLE:   This item is a 55-character field to 
           contain the audiovisual item's Title.  As is 
           standard practice, the Title is entered in 
           upper- and lower-case letters capitalizing 
           only the first word of the Title and any 
           proper names.  Leading articles (A,An,The) 
           should be included.  CASSY will correctly 
           ignore them when sorting the card printing 
           order.  
        ARTIST/COMPOSER/PERFORMER:  This field corres-
           ponds to the book's Author field.  Many 
           audiovisual items do not have an individual 
           of "primary responsibility", and in these 
           cases, the field may be left blank.  However, 
           many times the item should be accessible in 
           the card catalog by the Artist's name.  Thus 
           an entry in this field will allow an Author-
           like card to be printed.  The information 
           should be entered in order of last name, 
           comma, space, first name or initial, space, 
           middle name or initial.  Use upper- and 
           lower-case letters as you would with a book's 
           Author.

                       page 33       



        PRODUCER:  This item is 15 characters and may be 
           entered as upper- or lower-case letters.  It 
           is the name of the production, distribution, 
           or publishing company.
        COPYRIGHT DATE:  This field is similar to the 
           copyright year of a book.  Enter the leading 
           "c" followed by the year as in "c1985".  Some 
           items (phonodisks) indicate the year with a 
           "p" such as "p1973".  In this case, use the 
           "p" instead.  As with books, an unknown date 
           is entered as "n.d."
        COST:   This is a numeric entry of the audio-
           visual item's cost.  It is a "dollars.cents" 
           formatted entry as "13.98" or "5.00".  After 
           the information has been typed in, press 
           <ENTER>.  CASSY will re-format the entry.
        AGE DESIGNATION:  This field is a 6-character 
           alpha-numeric entry that describes the audio-
           visual item's intended audience.  Some typical 
           uses could be:  
                       12-up          
                       Adult
           Be consistent with the terms used.  Keep a 
           list of your choices for future reference.
        TECHNICAL DESCRIPTION:  This entry gives a phys-
           ical description of the audiovisual item.  
           The length of play, size, speed and other 
           such information should be noted.  Also, 
           associated manuals and other support items 
           should be noted.  Examples:
               A filmstrip with a manual and a cassette:
                  54 frm.,man.,cass.(FS12) 
               An audio recording on disk:
                  12",2sd.,33-1/3rpm,stereo  
           Do not enter the ending period as CASSY will 
           automatically add it as it prints the cards.
        SUBJECT 1-5:   These five fields are 40-char-
           acter fields of upper-case alpha-numerics.  
           Enter up to five subject headings.  It is 
           important to maintain the same subject 
           heading consistency in audiovisual items as 
           you would in your books.  So refer to your 

                       page 34       



           "Sears List of Subject Headings" or other sub-
           ject authority.  CASSY automatically sets the 
           entry characters to upper-case.  Press 
           <ENTER> when the entry is complete.  You will 
           advance to the next subject field.  When the 
           last subject has been entered, press <ENTER> 
           through the blank subject fields, or press 
           the <ESC> key.  In either case you will be 
           advanced to the OPTIONS selection.

        OPTIONS:  At this point, the data entries for a 
        single audiovisual item are complete.  Carefully 
        look over the data on the screen as what is 
        shown is what is stored.  ("What you see is what 
        you get.")  You may now select what you wish to 
        do with the data.  Pressing a single letter (not 
        followed by the <ENTER> key) will do what is 
        described below.  A simplified options menu is 
        displayed across the bottom of the screen to 
        remind you of the choices.  They are as follows:
        S  - Save and Print - This selection will save 
           the data permanently to one or more files on 
           your computer's floppy or fixed disk. This 
           OPTION also maintains a "list" that can print 
           a batch of catalog cards from the infor-
           mation.
        N  - Save and Not Print - The data is saved in 
           the necessary computer files, but will not 
           print catalog cards for this entry.
        R - Review -  This entry does not store any 
           information, but rather, allows you back onto 
           the entry screen to correct some incorrectly 
           entered data.  As the cursor enters a correct 
           field, simply pressing the <ENTER> key will 
           step you through the field without having to 
           re-enter the data.  Only the field that needs 
           changing need be re-entered.  Once the      
           necessary field has been altered, press the 
           <ENTER> key to go to the next field, then 
           press the <ESC> key to advance immediately to 
           the OPTIONS selection.  
        E  - Exit to menu - Once all the entries have 

                       page 35       



           been made and saved, you will use this option 
           to go back to the ACTIVITIES MENU. Always 
           finish the entry of a batch of items with 
           this selection.  Note that you MUST SAVE the 
           current screen's item data before using the 
           "E" option.  Otherwise, the data will NOT be 
           saved.  Likewise, you may use this option to 
           ignore the "just entered" data.  Remember, 
           ALWAYS return to the ACTIVITIES MENU before 
           turning off the computer!

































                       page 36       



        4.  Alter or Delete Audiovisual Information

        Selecting this ACTIVITY from the ACTIVITIES 
        MENU, you may alter existing audiovisual infor-
        mation with corrected information, store it back 
        to the permanent storage, and optionally print 
        or re-print catalog cards.  After arriving in 
        this ACTIVITY, a screen will be displayed re-
        questing the audiovisual item's Call Number.  
        Enter the alphanumeric Call Number and press the 
        <ENTER> key (unless it fills the entry field, at 
        which time the system will automatically begin 
        its search.)  After a brief search, CASSY will 
        display the audiovisual item's data on an entry 
        screen identical to the one described in the 
        "Enter New Audiovisual Information" section 
        above.  If, however, the Call Number is not 
        found in the file, a message will advise you.  
        Then press <ENTER> to return to the Call Number 
        entry field.  

        If a matching Call Number is found, the entry 
           screen with the data will be displayed.  At 
           this point, several "Preview" options exist:

        A - Alter:  Press the <A> key if you choose to 
           change any of the    information on the 
           screen.  The fields are labeled and entered 
           exactly as above, so we will not repeat the 
           discussion.  (This time, however, you will 
           not be able to access the Call Number field.) 
           Remember to <ENTER>-step through the correct 
           fields re-entering only the changed ones.  
           You may also use the <ESC> key to skip imme-
           diately down to the Options selection.   
           You will note that the Options selections are 
           slightly different than described above.  The 
           "Delete" Option has been added.  Using this 
           key will allow you to delete an audiovisual 
           item from the files.  All other options will 
           function as described in the previous sec-
           tion.  

                       page 37       



            You may safely "Save/print" an audiovisual 
           item more than once  since the printing pro-
           cess will only print one set of cards per 
           item per batch.  [Conversely, if you need 
           more than one set of cards per item, you may 
           enter this Alter section, "save-to-print"  
           the desired items, then print the batch of 
           cards.  Then do not erase the "list of cards 
           to be printed" (see more on this below), and 
           re-print as many times as desired.]  
           As with the book alter section, changing a 
           Call Number is possible (though tedious).  
           See the QUESTIONS AND ANSWERS section of this 
           manual for details.  Selecting any of the 
           Options (except "R - review") will return to 
           the "Preview" options. 

        <Page-Up> - Pressing the <Page-Up> will display 
           the next audiovisual item in file which is in 
           Call Number order.  You then have the options 
           of Altering the information, proceeding on, 
           or exiting to the Call Number entry screen.  
           When the end of the list is reached, a mes-
           sage indicating "no more items in the file" 
           will be briefly displayed before returning to 
           the Call Number entry screen.

        <Page-Down> - Pressing the <Page-Down> will 
           display the previous audiovisual item in file 
           which is in Call Number order.  You then have 
           the options of Altering the information, 
           proceeding backward, or exiting to the Call 
           Number entry screen.  When the start of the 
           file is reached, a message indicating "no 
           previous items in the file" will be briefly 
           displayed before returning to the Call Number 
           entry screen.

        E - Exit to Call Number entry screen.  When you 
           have completed "Previewing" the information, 
           pressing <E> will place you back at the Call 
           Number entry screen where you may enter 

                       page 38       



           another Number to preview or you may return 
           to the ACTIVITIES MENU.
         
        Using this ACTIVITY, you may alter as many 
        audiovisual items as you like.  To return to the 
        ACTIVITIES MENU, press the <ESC> key.  Never 
        turn off the computer before first returning to 
        the ACTIVITIES MENU. 



        5.  Print Catalog Cards

        After a batch of items has been entered into the 
        computer,and, assuming you have saved them with 
        the option to print catalog cards, you will use 
        ACTIVITIES MENU selection <5> to actually print 
        the cards.  Note that the information may have 
        been entered at various times, but will all 
        print out at the same time.  

        After entering this program segement, we will 
        see a short menu that allows us to define 
        whether the cards to printed will be Books cards 
        or Audiovisual cards.  Select your choice by 
        typing a <1> or <2>.  Both types will not be 
        printed in one run.  

        After entering the Print Catalog Cards (Books)
        section, you will have another menu.  The 
        choices are given as follows:
        1.  Print all Card Types - This selection will 
            print each card type [Author, Title, and 
            Subject] in type order, one group after the 
            other.  You may pause between each type to 
            change cards.  
        2.  Print Author Cards - This selection prints 
            the Author cards only.  
        3.  Print Title Cards - This selection prints 
            Title cards only.
        4.  Print Subject Cards - This selection prints 
            Subject cards only.

                       page 39       



        5.  Print Shelf Cards - This selection prints 
            Shelf cards only.
        6.  Erase "Book Cards to be Printed" List - Each     
            time you finish printing a batch of cards, 
            CASSY will automatically give you the option 
            of keeping the list or erasing it.  There 
            may occassionally be a need to erase this 
            list without printing cards.  Hence, the 
            Erase "List" option.  This feature is not 
            often used, so if you do not see its func-
            tion at first, don't worry, it will be here 
            when you need it.
        E.  Return to ACTIVITIES MENU - This simply 
            takes us back to the ACTIVITIES MENU.

           +------------------------------------------+
            The  instructions  given here will be  the 
            same  for the audiovisual cards  with  the 
            exception  that audiovisual cards will not 
            print SHELF cards.   The TITLE card is the 
            Main  Entry  card for  audiovisual  items.  
            Thus  the  Subject Headings  and  tracings 
            will appear on the TITLE card.  The "cards 
            to  be printed" list for Books and  Audio-
            visual's are different, so activities done 
            with  one list will not affect the  other.  
            The  menu selection numbers are  different 
            than the ones in the audiovisual  section.                            
           +------------------------------------------+

        By selecting 1-5 in this sub menu, you will be 
        asked if you wish to print an alignment sample.  
        By this time you need to have loaded you printer 
        with pin-feed catalog card stock. Adjust the 
        position of the card stock in the printer to the 
        approximate printing position.  Answer <Y> to 
        the alignment question, and CASSY will print an 
        asterisk (*) in each corner of the card.  Adjust 
        the card stock in the printer so that the next 
        alignment sample will be correct.  Answer <Y> 
        again, repeating the alignment print and printer 
        adjustment until the asterisks line up exactly 

                       page 40       



        in each corner.  Once you are satisfied, press 
        <N> to start the printing procedure.  Typing 
        <ESC> will allow you to escape at this point 
        also.

        The printing procedure starts by building sev-
        eral indexes, then printing, building more 
        indexes, erasing old indexes, and repeating a 
        fairly laborious process (better the computer 
        than the librarian.)  All this, CASSY does auto-
        matically, though an occassional informational 
        message will be displayed on the screen.  You 
        may want to stay close by the printer as card 
        stock is notorious for jamming printers.

        During the printing process, you may need to 
        stop the printing.  Typical reasons may include 
        running out of cards, printer jamming, ribbon 
        replacement or whatever.  To stop the printing 
        in "midstream" simply press the <ESC> key.  The 
        printer will complete the card it is working on, 
        return you to the "alignment sample" question 
        (allowing you to realign the card stock).  Once 
        you have answered <N> to the alignment sample 
        question, you will be asked if you wish to 
        continue printing where you left off.  If you 
        answer "No", you will be returned to the 
        ACTIVITIES MENU.  Answering "Yes" will start the 
        printing again.  [Note: If your printer or com-
        puter is set up with a "spooler" or "buffer", 
        the printer will not stop immediately, but will 
        wait until the buffer is empty.  Also, some 
        computers use different keyboard techniques that 
        may require that the <ESC> be pressed repeat-
        edly, instead of just once.  Experimentation may 
        be necessary.]
         
        When the printing process is complete, CASSY 
        will ask you if you wish to erase the "Cards to 
        be Printed" List.  This list is maintained as 
        you enter, alter, and save-to-print book or 
        audiovisual information.  Once the printing is 

                       page 41       



        complete, however, you will want to keep the 
        "list".  Since we may print only one type of 
        cards at a time, and we may print them in any 
        order, CASSY will not know when we are through 
        printing.  Hence, you are asked if you wish to 
        delete the "list".  Answering <Y> will save the 
        list for future printing or re-printing.  [Note 
        that additional book or audiovisual information 
        saved-to-print will simply be added to the list.  
        You will have to re-print the "old" cards to get 
        the new ones.]  Answering <N> will delete the 
        "list" so the new entries will start with a 
        "clean" slate.  After you have answered the 
        "delete" question, you will be returned to the 
        PRINT CATALOG CARDS MENU.  

        Having completed OPTION 1, you will also have a 
        set of cards printed in three groups.  (They are 
        not separated, so you will have to determine 
        where the groupings change.)  The "blocks" are 
        in this order: AUTHOR cards, TITLE cards, then 
        SUBJECT cards.  

        The cards are alphabetized (except Shelf list 
        cards which are in "shelf" order).  Note that 
        leading A's, An's and The's are ignored.  There 
        are a number of exceptions to simple computer 
        alphabetization (abbreviations and numbers, for 
        example, can really confuse a computer) so be 
        certain that CASSY's alphabetization is double-
        checked.  Also CASSY does not alphabetize sev-
        eral titles under one subject heading or author 
        name.  (Hey, your typewriter doesn't even 
        attempt to alphabetize.  You want to go back to 
        it?)

        Most libraries mix the AUTHOR, TITLE, and 
        SUBJECT cards into one card catalog.  Even 
        though CASSY must separate the cards, you should 
        file them mixed if your card catalog is arranged 
        that way.  It is not necessary to switch to 
        three card catalogs because of computer 

                       page 42       



        limitations.

        Pressing "E - Return to ACTIVITIES MENU" will do 
        just that.  Remember to return to the ACTIVITIES 
        MENU before turning the computer off.   



        6.  Print Accession Listing

        Selection "6" prints a complete or partial 
        accession list in accession number order.  It is 
        printed on standard 8-1/2" x 11" computer paper 
        which will need to be loaded into the printer.  

        After selecting <6> you will be asked to select 
        whether the Accession listing is for Books or 
        for Audiovisuals.  Press the number for your 
        choice.  Next, you will be asked to enter a 
        "starting" number for the listing.  You will 
        also be asked to enter an "ending" number.  The 
        listing will print all of the accession entries 
        between and including the "starting" and 
        "ending" numbers.  You may press <ENTER> at the 
        "starting" field to start at the first. Like-
        wise, press <ENTER> at the "ending" number to 
        print to the end.   A heading will be printed on 
        each page giving the date, so later it will be 
        easy to determine how current the list is.  

        As with the CARD printing section, CASSY will 
        allow you to pause the printer before the pro-
        cess is completed.  Simply press the <ESC> key.  
        The printer will PAUSE and ask if you wish to 
        continue printing, or return to the ACTIVITIES 
        MENU.  Answer <Y> or <N> as desired.

        At the completion of printing the accession 
        list, CASSY will print a line showing the total 
        number of items on the list, along with the 
        total value (sum of the COSTS) of the items on 
        the list.  This is valuable information for 

                       page 43       



        inventory and insurance purposes.  Once the 
        printing is complete, you will be returned to 
        the ACTIVITIES MENU.



        7.  Print Shelf Listing

        ACTIVITY "7" prints a complete or partial shelf 
        list in shelf order.  The Shelf List will 
        include only books since the audiovisual Acces-
        sion List is also the audiovisual Shelf List.  
        It is printed on standard 8-1/2" x 11" computer 
        paper which will need to be loaded into the 
        printer.  

        After selecting <7> you will be asked to enter a 
        "starting" Classification number for the 
        listing.  You will also be asked to enter an 
        "ending" number.  The listing will print all of 
        the books between and including the "starting" 
        and "ending" numbers.  You may press <ENTER> at 
        the "starting" field to start at the first. 
        Likewise, press <ENTER> at the "ending" number 
        to to print to the end.   A heading will be 
        printed on each page giving the date, so it will 
        be easy to later determine how current the list 
        is.  

        As with the Accession Listing, CASSY will allow 
        you to pause the printer before the process is 
        completed.  Simply press the <ESC> key.  The 
        printer will PAUSE and ask if you wish to con-
        tinue printing, or return to then ACTIVITIES 
        MENU.  Answer <Y> or <N> as desired.

        At the completion of the Shelf List, a line 
        showing the total number of books on the list 
        will be printed.  Once the printing is complete, 
        you will be returned to the ACTIVITIES MENU.



                       page 44       



        8.  Alter Accession Number Sequence

        We have already used this procedure during 
        installation, and may never need to use it 
        again.  However, sometimes, the sequence of 
        accession numbers needs to be altered for some 
        reason.  

        Press <8> at the ACTIVITIES MENU and soon the 
        "change" message will be displayed.  You may 
        enter a new number, or press <ENTER> to retain 
        the old one.  Remember, leading zeros are not 
        necessary. Once you change a number, CASSY will 
        not revert back to the old number, but, rather, 
        start incrementing at the value of your entry.  
        This could possibly lead to overlapping 
        accession numbers, but CASSY will stop you with 
        a "DUPLICATE" message and not allow the 
        duplicate accession number to be stored.

        Note: CASSY has no provision for automatically 
        incrementing the audiovisual Call Numbers, so 
        changes in this section will only affect the 
        books Accession Number.



        9.  Rebuild Indexes

        This Utility allows us to "recover" as much as 
        possible if there has been an inadvertant com-
        puter turn-off at some place other than the 
        ACTIVITIES MENU.  This can occur during even a 
        brief power failure or can occur when the oper-
        ator turned off the computer before returning to 
        the ACTIVITIES MENU.  The information stored 
        temporarily in the computer's memory is lost 
        before it had a chance to be stored permanently 
        on disk or diskette.  

        This procedure can save part (sometimes all) of 
        the new information that was being processed at 

                       page 45       



        the time of the power failure.  Rest assured, 
        ALL of the information that had already been 
        stored permanently will still be there (barring 
        any catastrophic failures.)  Only the newly 
        entered information may be in jeopordy. 

        Well, enough computer talk...  Press <9> and 
        wait.  The computer will do all the work, 
        briefly telling you via screen messages what is 
        happening.  When the Indexes are complete, you 
        will be returned to the ACTIVITIES MENU.

        If you know that you have experienced a power 
        failure, please proceed to this ACTIVITY before 
        entering or altering more information.  You may 
        wish to wait until the storm is over and the 
        power has stabalized.  Using this utility cannot 
        hurt even if nothing was lost.



        E.  Exit to DOS

        You must ALWAYS come back to the ACTIVITIES MENU 
        before turning your computer off.  Should you 
        wish to exit CASSY  to run another program, you 
        will use <E> to place you back into the 
        computer's operating system (DOS).  When the <E> 
        is entered, you will see once again the "A>".  
        At this time you may remove the CASSY diskettes 
        and store them safely away.  (Fixed Disk users 
        will see the "C>", and, obviously, will not 
        remove the disk to be stored "safely away."  










                       page 46       



                     QUESTIONS and ANSWERS

        The following items are information that may be 
        helpful in case of problems or questions.  This 
        is far from an exhuastive list, so please write 
        DIAKON for additional information.

        1.   How do I enter more than one author?
          You must have noticed that the CASSY book 
          entry screen leaves room for only one author.  
          Indeed, that is true, so we have chosen to 
          stay with standard practice and enter only a 
          single author.  

        2.   I noticed that when I step-through the 
             author field or enter author information, 
             the call letters on the entry screen 
             change.  What if I don't want them to 
             change?
          This "feature" of CASSY in a few cases can 
          cause unwanted information to appear in the 
          call letter field.  We feel like the advan-
          tages out-weigh the disadvantages.  Be con-
          cious that certain entries will need cor-
          recting from what CASSY automatically  
          inserts.  These will be biographies and books 
          without authors.  Just keeping this in mind 
          will eliminate most of the problems.

        3.   I notice that frequently, you warn against 
             turning off the computer at any point other 
             than the ACTIVITIES MENU.  So what about a 
             power outage, or what if I forget?  
          First, take precautions against power outages 
          such as using a backup or uninterruptible 
          power supply or not working during heavy thun-
          der storms.  But still, that may be unreal-
          istic.  It would be a wise idea to occas-
          sionally exit to the ACTIVITIES MENU several 
          times during a massive entry session simply 
          for the purpose of keeping the disk directory 
          updated.  In any case, an untimely power out 

                       page 47       



          can also cause problems down the road as new 
          data could possibly overwrite existing data.  
          Use "#9 - Rebuild Indexes" from the ACTIVITIES 
          MENU.  This ACTIVITY will rebuild the indexes 
          to assure that the overwriting problems do not 
          occur.  

        4.   How many book entries can I store before I 
             actually print cards?
          Technically, CASSY will keep track of an 
          almost unlimited amount.  Practically, you 
          should try to print no more than 1000 cards at 
          once as that is a standard package of pin-feed 
          library cards.  Even though it may be a 
          temptation, especially when first setting up 
          the system, to "put them all in", we suggest 
          that you limit the batch to about 100 before 
          printing.  One of the early users, however, 
          set up an entire personal library of over 1200 
          books before printing out the cards.  Her 
          complaint was having to stay near the computer 
          for hours as it printed cards.  CASSY didn't 
          care, though.

        5.   You mentioned earlier that I could make 
             some BLANK-SCREEN WORK SLIPS...what are 
             they, and how do I make them?
          Work slips are used by the librarian to 
          collect all of the information together for 
          the accessioning of a book or media item.  
          Wouldn't it be nice to have a "blank screen" 
          on paper to "fill in the blanks" as you are 
          cataloging and selecting subject headings?  
          Well, you can.  Just call up a blank entry 
          screen, and press the <Shift> and <Prt Sc> 
          keys at the same time so that the screen is 
          "dumped" to the printer.  Copy this print-out 
          several times and use it guide you as you 
          look-up and fill in information.

        6.   What if I made a mistake and need to change 
             an Accession or Call Number?

                       page 48       



          First you will need to delete the book or 
          audiovisual item with the incorrect number.  
          Use the "2 or 4 - Alter and Delete" procedure 
          from the ACTIVITIES MENU.  After you have the 
          information on the screen, you might like to 
          make a printed "screen dump" of the infor-
          mation by pressing the <Shift> key and the 
          <PRT SC> key at the same time.  Be sure the 
          printer is on.  The screen will be printed on 
          the printer so that you have the data handy 
          for re-entry.  [A few printers will not work 
          properly in a screen dump, so you might have 
          to resort to writing the information down.]  
          Now return to the ACTIVITIES MENU, and if you 
          are changing a book, select "8 - Alter Acces-
          sion Number Sequence".  Write down the current 
          "next" accession number to re-enter later.  
          Enter as the new Accession Number , the 
          desired number for the book you are cor-
          recting.  If an audiovisual item is to be 
          changed, skip the #8 excersize. Go back to the 
          ACTIVITIES MENU selecting "1 - Enter New Book 
          Information" or "3 - Enter New Audiovisual 
          Information".  The information may now be re-
          entered referring to the printed screen dump 
          as most of it should be correct.  On audio-
          visual item changes, enter the correct Call 
          Number.  Store the information using the <S> 
          or <N> options.  The Accession or Call Number 
          is now correct on the entry. Remember too, go 
          back and set the Accession Number to the 
          previous sequence.

        7.  I noticed that if I make an extra SUBJECT 
            HEADING entry, save it, then try to delete 
            it, it always comes back.  How can I get rid 
            of it once and for all?
          Unfortunately CASSY does not delete the 
          SUBJECT HEADING by merely "blanking" the line.  
          The only procedure that will clear it 
          permanently is to use the delete and re-enter 
          procedure as described in question #6 above.  

                       page 49       



          The second time you enter the information, of 
          course, you will leave the extra SUBJECT 
          HEADING off. 

        8.  If I have multiple copies of one book, is 
            there a way to have all the Accession 
            Numbers print on the main entry card.
          CASSY is not able to keep track of multiple 
          copies of an item, at least not able to tie 
          them together.  You will want to add the 
          multiple items' Accession or Call Numbers to 
          the main entry cards with a typewriter.
          
        9.  Does CASSY have a way to make a "series" 
            title card for audiovisual items.
          Technically, no, CASSY does not support a 
          cross-referencing "series" card.  However, we 
          do have a way to work around this limitation.  
          First, print your normal sets of cards plus an 
          additional set of TITLE cards for each item in 
          the series.  Take each of the extra TITLE 
          cards and type the series title above the item 
          title.  File these in your catalog as though 
          the series title were the card's title.  Note 
          at the bottom of each real TITLE (Main Entry) 
          card that you have a "series" card also.  

        10. When I first start running CASSY I get the  
            message "not enough memory".  What do I do 
            about that?
          CASSY must have 256K of memory to run in.  
          Many models of personal computers require an 
          additional expansion card to reach that level 
          of memory.  Unfortunately, there is no 
          solution other than the hardware additions.  

        11.  My screen suddenly read "IOerror 243" (or 
             IOerror F3) just after I got ready to enter 
             some new books.  Why?
          This is an indication that you may not have 
          properly installed the CONFIG.SYS file or that 
          you turned on the computer with another 

                       page 50       



          diskette other then the CASSY diskette.  
          Either check the installation of CONFIG.SYS, 
          or re-boot the computer using the "installed" 
          CASSY diskette.

        12.  I was working along, adding some books to 
             the list and a message popped up telling me 
             my diskette was full.  What now?
          OK, then, you have filled up the diskettes 
          with information.  You will need to start a 
          new set.  Keep the two diskettes you were 
          working on.  You may continue to use them for 
          listings and cards, but you will not be able 
          to add items to them unless you delete some 
          old items.  To continue adding more items you 
          will need to create a new set of working 
          diskettes as described in Appendix A.
          
        13.  What if I am working away and suddenly I 
             see some crazy numbers and a message that 
             says "Program aborted"?  
          I sincerely hope this never happens as it 
          indicates a programming error.  Please take 
          the time to write down the numbers and the 
          conditions such as what ACTIVITY you were in 
          the process of doing and any out-of-the-
          ordinary keystrokes you may have made.  Then    
          write DIAKON as soon as possible so we can   
          solve the problem.

        14.  Okay, I've put all this information about 
             thousands of books on my disk.  Now I'm 
             ready to move up to something larger, maybe 
             with circulation and on-line card catalog.  
             Can I move this information over to another 
             system without re-entering it all?
          Good question!  It would be sad to not have 
          the capability of "upgrading" your CASSY data.  
          The answer is YES, you can.  Please write 
          DIAKON Systems and we will send you the 
          current upgrade information.


                       page 51       



        APPENDIX  A  -  Installing CASSY

        We must "install" CASSY to suit your particular 
        computer system before we do anything else.  We 
        must copy the program files from the distri-
        bution diskette (the one from with all the CASSY 
        files) to the actual "working" diskettes or 
        disk.  

        DUAL - FLOPPY  SYSTEM
        If you have a dual-floppy diskette system con-
        figure your CASSY working diskettes as follows:
        1. Create the Program working diskette and Data 
          working diskette using the following 
          procedure:
          A. Turn on your computer with the DOS diskette 
             in the A drive.  (The DOS diskette is the 
             provided for you by the computer 
             manufacturer.)
          B. Place a new diskette into drive B and type 
             the following command at the "A>":
                          FORMAT B:/S    <ENTER>
                                            ^--- This
                                        means Press 
                                        the "Enter", or
                                        "Return". Do not 
                                        type "ENTER". 
             This action will format the diskette in 
             drive B, placing the DOS files onto this 
             diskette.  [Answer "no" to the question 
             "Format another diskette? (Y/N)..."]  This 
             diskette will become the PROGRAM diskette.  
             This diskette should be labeled "CASSY 
             PROGRAM DISKETTE".
          C. Remove the PROGRAM diskette from drive B 
             (be sure you label it) and place another 
             new diskette into drive B.  We are about to 
             create the DATA diskette.  Type following 
             command at the "A>" :
                            FORMAT B:   <enter>
             The formatting done, remove the DATA 
             diskette from drive B and label it as 

                       page 52       



             "CASSY DATA DISKETTE".  
          D. Remove the DOS diskette from drive A and 
             place the CASSY distribution diskette into 
             drive A.  Place the CASSY PROGRAM diskette 
             into drive B.  Now at the "A>" type the 
             command line:
                        FLPYINST      <Press ENTER key>
             Part way throught the process, you will be 
             prompted to fill in some blanks about your 
             library's name and location, whether you 
             are using a COLOR monitor, and which drive 
             your information files will be stored on.  
             Follow the screen instructions, filling in 
             the blanks appropriately.  Since you are 
             using a dual-floppy diskette system, answer 
             "B" to the data drive question.  When the 
             information is correct, press <S> to save 
             the information onto your PROGRAM diskette.  
             It is necessary for you to have "Saved" the 
             information before CASSY will operate.  
          E. As the Installation progresses, you will be 
             asked to remove the PROGRAM diskette from 
             drive B and place the previously created 
             CASSY DATA DISKETTE back into drive B.  The 
             DATA diskette MUST be in drive B before 
             proceeding.  
          F. Next you will be asked if you wish to 
             create New Information files on the DATA 
             diskette.  Since we have no previous data 
             on the diskette answer "Y" to the question 
             of "create new..."  An ominous warning will 
             appear asking if you are sure you don't 
             mind destroying old data.  Since there is 
             no old data to destroy, fearlessly answer 
             "Y".  Soon a message will appear saying 
             that the files have been successfully 
             created.
          G. The Installation is complete!  The working 
             diskettes have been created, and we are 
             ready to run.  Store the CASSY distribution 
             diskette safely away.  Then, as the screen 
             message suggests, place the PROGRAM disk-

                       page 53       



             ette in to drive A.  Turn off the computer, 
             wait a few seconds and turn the computer 
             back on.  This assures that the computer is 
             "re-booted", loading the critical 
             CONFIG.SYS file. 
          H. After entering the time and date, you will 
             see the CASSY opening screen.  After 
             reading the opening message press <ENTER>, 
             and the CASSY ACTIVITIES MENU will appear.  
             You will want to stop at this point, go get 
             a cup of coffee, and congratulate yourself 
             on a completing a major computer instal-
             lation!  You deserve it!  The hardest part 
             of CASSY is now over.  The rest is fun.  
             Refer back, now, to the section named 
             GETTING STARTED for a "tutorial" on using 
             CASSY.
        2. Daily operation of CASSY will begin by 
           turning on the computer with the CASSY 
           PROGRAM DISKETTE in Drive A and the CASSY 
           DATA DISKETTE in Drive B.  After entering the 
           correct date and time, CASSY will begin 
           automatically.
        3. Ending an CASSY session is accomplished by 
           returning to the ACTIVITIES MENU and pressing 
           "E" to exit to DOS.  When the "A>" appears, 
           you may turn off the computer, or run another 
           program after removing the CASSY diskettes 
           and storing them safely away.


        FIXED  DISK  SYSTEM

        If you have a fixed disk system, you will need 
        to transfer the necessary files as described 
        below.  On most systems, the fixed disk is 
        designated drive "C".  For the sake of descrip-
        tion, we will stay with the "C" designation, but 
        you may need to use a different drive designator 
        such as "D" or "E".  You, therefore, will need 
        to substitute your fixed disk drive designator 
        in place of "C" in the outline below.  Also, you 

                       page 54       



        will need to change the drive designator in the 
        command FIXDINST from "C:" to "D:" or "E:" as 
        necessary. 
        1.A. Place the CASSY Distribution Diskette           
              into drive A.  Type:         
                         A:           <ENTER>
                                            ^--- This 
                                        means Press
                                        the "Enter", or
                                        "Return". Do not
                                        type "ENTER". 
              At the "A>" type :
                         FIXDINST C:  <ENTER>
          B.  As the Installation procedure progresses, 
              you will be asked to enter several items:  
              Institution name, a report subtitle, if 
              you are using a COLOR monitor, and which 
              drive your DATA will be on.  Answer the 
              questions as required, entering "C" for 
              the DATA drive.  Be sure to type "S" to 
              save your entries, or else CASSY will not 
              be able to run.
          C.  Next you will be asked if you wish to 
              create New Information files.  Since we 
              have no previous data on the disk answer 
              "Y" to the question of "create new..."  An 
              ominous warning will appear asking if you 
              are sure you don't mind destroying old 
              data.  Since there is no old data to des-
              troy, fearlessly answer "Y".  Soon a mes-
              sage will appear saying that the files 
              have been successfully created.
          D.  If a message appears about a file named 
              CONFIG.SYS, note carefully if it includes 
              the line:
                               FILES=20 
              The number may be greater than 20, but the 
              line must appear in the CONFIG.SYS file 
              for CASSY to run properly.  If the line 
              does not appear, you will need to add it 
              with a text processor such as EDLIN.  If 
              you saw no CONFIG.SYS message, then CASSY 

                       page 55       



              added one to the fixed disk automatically.
          E.  The Installation completes by copying the 
              program files from the distribution disk-
              ette.  Assuming CONFIG.SYS is in place, 
              turn off the computer and turn it back on 
              again.  At the "C>" type:
                                 CASSY        <ENTER>
              Soon you will see the CASSY opening screen. 
              After reading the opening screen, press 
              <ENTER>, and the CASSY ACTIVITIES MENU will 
              appear.  
              You will want to stop at this point, go 
              get a cup of coffee, and congratulate 
              yourself on a completing a major computer 
              installation!  You deserve it!  The 
              hardest part of CASSY is now over.  The 
              rest is fun.  Refer back, now, to the 
              section named GETTING STARTED for a 
              "tutorial" on using CASSY.
        2. Daily operation of CASSY will begin by turning 
           on the computer, then at the "C>" typing CASSY 
           and pressing <ENTER>.
        3.  Ending an CASSY session is accomplished by 
           returning to the ACTIVITIES MENU and pressing 
           "E" to exit to DOS.  When the "C>" appears, 
           you may turn off the computer, or run another 
           program.
















                       page 56       



        APPENDIX  B  -  Notes to Fixed Disk Users

        After a major session of DATA entry, you will 
        need to BACKUP your files.  Assuming the 
        BACKUP.COM file is currently on your "C drive", 
        with the cursor positioned at the "C>"  type:
               BACKUP C:\CASSY\CAS*.DAT A:     <ENTER>
        When this section is complete, type:
               BACKUP C:\CASSY\*.TMP A: /A     <ENTER>
        These will backup onto one or more diskettes the 
        data file information that cannot be obtained  
        from your CASSY Distrubution Diskette, or that 
        can be regenerated from the CASSY  Rebuild 
        Indexes routine.





























                       page 57       



             DIAKON Systems Library Program Catalog

        PC-CARD CATALOG (registered version) - 
           includes:  Full on-line catalog look- 
           up features (Author, Title, Subject, 
           Keyword) ; New item entry and 
           alteration; Print-out of holdings; 
           Index rebuild; Compatible with 
           CASSY book files; Documentation on 
           disk. (Two diskettes) ................. 39.00

        PC-CARD CATALOG - PUBLIC ACCESS CATALOG 
           - includes only the full on-line 
           catalog look up features noted above. 
           Excludes the ability to alter data or 
           print holdings.  This program is 
           designed for institutions that have 
           public access to the on-line catalog.  
           Once the program is running, no data 
           may be altered, access to DOS is via 
           password only.  This program is 
           available to registered PCCC users 
           only. (One diskette) .................. 29.00

        CASSY [CAtalog card/accession & Shelf 
           list SYstem] (Registered version) - A 
           companion program to PCCC that can 
           print formatted catalog cards 
           (Author, Title, Subject, Shelf); 
           Print listings in Author, Title, 
           Shelf, Accession order; Process 
           Audio-visual materials including 
           cards and listings.  Data files 
           (other than AV) are compatible with 
           PCCC.  Includes documentation on 
           diskette. (Two diskettes) ............. 24.00

        Each registered version ordered includes the 
        latest version of the Shareware program.  
        Registered versions include phone support.  
        Please order using the order form found on the 
        following page.

                       page 58       



                   DIAKON Systems Order Form
                   ------ ------- ----- ----
        Please send the following items:
        Quantity

        _____ PC-Card Catalog (Registered 
              Version) - $39.00 each .... _____________
        _____ PC-Card Catalog - Public 
              Access Catalog (please provide
              (PCCC registration number if
              not ordering PCCC at this 
              time. - No. ______________ )
              - $29.00 each ............. _____________
        _____ CASSY (Registered Version)
              - $24.00 each ............. _____________
        _____ Shipping & Handling (number 
              of diskettes x rate)( $2.00
              per diskette inside US; $4.00
              per diskette outside US to 
              allow for air mail.)....... _____________
        - - - Texas State Sales Tax (for
              orders inside of Texas only)
              add 8.0% .................. _____________

              TOTAL ENCLOSED (please make
              payments in US funds) ..... _____________

        Name __________________________________________

        Address _______________________________________

                _______________________________________

                _______________________________________

        Send order form and enclosed payment to:
                   DIAKON Systems
                   3801 Glenmont Dr.
                   Fort Worth, TX  76133-2955

        Purchase orders are NET + 10%, 30 days.


                       page 59       

```
{% endraw %}

## FILE1091.TXT

{% raw %}
```
Disk No: 1091                                                           
Disk Title: Cassy                                                       
PC-SIG Version: S1.6                                                    
                                                                        
Program Title: Cassy                                                    
Author Version: 1.1                                                     
Author Registration: $20.00                                             
Special Requirements: Two floppy drives.                                
                                                                        
CASSY is a versatile, inexpensive Dewey Decimal System-based program    
that helps keep books and audiovisual materials in order.  Operation is 
menu-driven, simple, and intuitive.  Printer support lets you print sets
of catalog cards, accession lists, and shelf lists.                     
                                                                        
About 1,400 items can be stored on a single 360K disk and up            
to five subject headings are maintained per item.  All catalog card data
is printed in proper upper- and lower-case combinations.  Also, catalog 
cards are printed in library order sets (AACR2) for easy filing.        
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1091

     Volume in drive A has no label
     Directory of A:\

    AUTOEXEC BAT        18   1-02-87
    CASSY    BAT        38   1-02-87
    CASSY    COM     15243   6-17-90
    CASSY    DOC    114176   5-05-90
    CASSY00  CS1     20057   5-05-90
    CASSY10  CS1     30294   6-01-90
    CASSY30  CS1     28850   6-01-90
    CASSY50  CS1     24004   6-01-90
    CASSY52  CS1     22160   6-01-90
    CASSY70  CS1     16675   6-17-90
    CASSY72  CS1     14298   5-05-90
    CASYFILE COM     20473   1-02-90
    CASYINST COM     20840   1-02-87
    CONFIG   SYS        20   1-02-87
    FIXDINST BAT      1280   1-02-87
    FLPYINST BAT       978   1-04-87
    README            3840   6-17-90
    GO       BAT        38  10-19-87   3:56p
    GO       TXT       575   7-09-90  12:56a
    FILE1091 TXT      1777   7-10-90   2:03p
           20 file(s)     335634 bytes
                           16384 bytes free
