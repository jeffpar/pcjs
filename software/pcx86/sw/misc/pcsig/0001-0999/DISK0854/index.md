---
layout: page
title: "PC-SIG Diskette Library (Disk #854)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0854/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0854"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "DATABASE PUBLISHER"

    DATABASE PUBLISHER is a menu-driven program to record and track any
    kind of data you wish to store on the people in your life or the
    customers of your business.
    
    DATABASE PUBLISHER handles data for up to 2,000 people, each with up to
    100 categories. Records can be linked to multiple categories. Each
    record can contain information about a person, the status of an
    account, purchase history, demographic information or any other data
    you may need to manage. A telephone call timer even helps you charge
    customers for time spent on the phone.
    
    Print out sorted mailing labels with any combination of selected
    categories. Format the database information into booklet form. The
    records can be printed either on a laser or dot-matrix printer.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## DATAPUB.DOC

{% raw %}
```


21-SEP-87             DATABASE PUBLISHER by Neil Albala                 page i



                                                                          page
PROGRAM DESCRIPTION. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1
LICENSE AGREEMENT. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1
[+] FORWARD. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2
[-] REVERSE. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2
[e] EDIT . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2
[n] NEW RECORD . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2
[s] SEARCH FOR NAME. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2
[#] SEARCH FOR TEL # . . . . . . . . . . . . . . . . . . . . . . . . . . . . 3
[&] SEARCH FOR COMPANY . . . . . . . . . . . . . . . . . . . . . . . . . . . 3
[d] DELETE RECORD. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 3
[t] DELETE TEXT. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 3
[ ] TIMER ON/OFF . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 3
[!] ADD TO OWES. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 3
[$] ADD TO PAID. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 3
[0] ZERO TIMER . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 3
[f] FORMAT BOOKLET . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 4
[p] PRINT MENU . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 4
    [l] LABELS . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 4
    [b] BOOKLET. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 5
    [r] TRANSACTION REPORT . . . . . . . . . . . . . . . . . . . . . . . . . 5
[*] DEFAULT MENU . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 5
    [a] Name, [b] Company. . . . . . . . . . . . . . . . . . . . . . . . . . 5
    [c] Tel #, [d] Tel # . . . . . . . . . . . . . . . . . . . . . . . . . . 5
    [e] Address. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 5
    [f] City, [g] State, [h] Zip . . . . . . . . . . . . . . . . . . . . . . 5
    [i] Category . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 5
    [j] Timer. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6
    [k] Owes . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6
    [l] Paid . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6
    [m] Expiration Date. . . . . . . . . . . . . . . . . . . . . . . . . . . 6
    [r] City, [s] State. . . . . . . . . . . . . . . . . . . . . . . . . . . 6
    [t] Name in Booklet Masthead . . . . . . . . . . . . . . . . . . . . . . 6
    [u] Hourly Wage. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6
    [v] PG File Extension for Booklet Pages. . . . . . . . . . . . . . . . . 6
    [w] Printer Control Code for Dot Matrix Printers . . . . . . . . . . . . 7
    [x] Printer Control Code for Laser Printers. . . . . . . . . . . . . . . 7
[=] CATEGORY MENU. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 7
    [PgUp], [PgDn] . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 7
    [n] New. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 7
    [d] Delete . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 7
    [s] Select . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 7
    [m] Move . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 8
    [c] Clear. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 8
    [e] Exit . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 8
[/] EXIT . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 8
















21-SEP-87             DATABASE PUBLISHER by Neil Albala                 page 1


        PROGRAM DESCRIPTION
                Database Publisher is a unique computer publishing program
            that is especially suited to organizing people and/or products for
            a profit.
                Database Publisher keeps track of up to 2000 people and/or
            products. Create a catalog of people, services, products,
            software, etc. Using any dot matrix or laser printer, set to
            condensed mode, print a booklet on both sides of 8.5 x 11 paper.
            Descriptions of products or services can be up to 60 words.
                Using a dot matrix printer, a typical catalog containing 200
            people and/or products cost just 15 cents to print. The same
            catalog sent to a printer would cost 40 or 50 cents each. And you
            wouldn't have the flexibility of being able to make additions and
            changes at any time. Print 2 or 2000. It's tough to wear out a dot
            matrix printer.
                Database Publisher is also the simplest mailing list manager
            on the market. People with no computer experience whatsoever can
            immediately enter, edit, and print mailing labels, without having
            to read this documentation. Mailing lists can be categorized, by
            including any key word in the Category field. Then you'll be able
            to print selected categories. Also people can easily linked to
            multiple categories.
                But Database Publisher is much more than a mailing list
            manager.
                Using any text editor, or word processor set to save files in
            ASCII format, you can add articles to the booklet, thus making the
            format very much like a magazine. If you're putting a catalog of
            products together why not include an order form. Leave the last
            page blank and you won't even need an envelope.
                If you're charging for subscriptions just enter the expiration
            date and the mailing labels will only print if that subscriber is
            current.
                Database Publisher also has two numeric fields for each
            person/product. Keep track of monies owed and paid. Ideal for a
            pledge drive. Keep track of stock on hand and amount sold. Then
            there's the transaction report that list each transaction, and an
            optional comment.
                There's even a timer for telephone consultants. Define hourly
            wage, and the elapsed time and dollars are automatically
            displayed. A single keystroke and the dollar amount is moved to
            the owes field.
                Datapub is adaptable to your design. Rename all the field
            labels to suit your business. Whether you're already in business
            or just getting started Database Publisher will allow your IBM-PC
            or compatible to pay for itself.
            

        LICENSE AGREEMENT
                This program may be copied and shared with others. A nominal
            distribution fee is acceptable.
                Shareware is a relatively new concept is software
            distribution. You're welcome to try the program for free. If you
            use this software you're expected to purchase the program, by
            becoming a registered user.
                Without the high cost of advertising and distribution,
            shareware authors are able to offer quality software at modest
            prices.






21-SEP-87             DATABASE PUBLISHER by Neil Albala                 page 2




                Support Shareware and the further development of this program.
            Become a registered user by sending a check for $59 to:

                                                 Neil Albala
                                                 PO Box 2346
                                                 Tucson, AZ 85745
                                                 (602) 884-1177

                Registered users receive:        * The latest version.
                                                 * An instruction manual
                                                 * Telephone Support
                                                 * Notice of updates


        [+] FORWARD
                Forward will display the next person or product. If one or
            more categories are selected then the next person or product
            displayed, will be from one of these selected categories. (See [*]
            Category Menu)
                Each time you press the "+" key another record will be
            retrieved and displayed. Do try holding down the "+" key. The
            person or products name will be previewed. Release the key and
            that record will be retrieved.

        [-] REVERSE
                Reverse will display the next person or product. If one or
            more categories are selected then the next person or product
            displayed will be from one of these selected categories. (See [*]
            Category Menu)
                Each time you press the "- key another record will be
            retrieved and displayed. By holding down the "- key, the records
            will be previewed. Release the key and that record will be
            retrieved.

        [e] EDIT
                This is how you edit an existing person or product. Once you
            enter the edit mode you will be prompted for input at each line.
            To leave the edit mode quickly, just hold down the carriage return
            key.

        [n] NEW RECORD
                This is how you enter a new name or product into the system.
            Very Simple. Nothing to it.

        [s] SEARCH FOR NAME
                This function will search the Name field for the person or
            products name and bring up that record. Remember capital letters
            are different from small letters. Example If you looking for "John
            Doe" and you entered "john doe" you'll not find the record you're
            looking for. You'll need to enter "John Doe" with the capitals.
                You will also find the record you're looking for if you enter
            just "John". If there are more than one "John" in the system,
            you'll be prompted, "next occurrence y/n" . In response to this
            prompt a carriage return is the same as a no.







21-SEP-87             DATABASE PUBLISHER by Neil Albala                 page 3


            

        [#] SEARCH FOR TEL #
                The Search for Tel # function works exactly the same way as
            the Search for Name function only this one searches both Tel #
            fields.

        [&] SEARCH FOR COMPANY
                The Search for Company function works exactly like the Search
            for Name function only the search is on the Company field.

        [d] DELETE RECORD
                This command will deleted the entire record including the text
            portion from the entire system.

        [t] DELETE TEXT
                This command will deleted only the text portion of the record
            from the system. You'll be able to enter new text through the Edit
            command.

        [ ] TIMER ON/OFF
                The space bar turns the timer on and off. As soon as the timer
            is turned on you'll see the seconds ticking away on Timer on/off
            line of the screen. If you have set a hourly wage you'll also see
            the dollar amount displayed. (See [=] Default Menu)

        [!] ADD TO OWES
                Here you can add any dollar amount less than 100,000 to the
            amount a person owes or has pledged. When you receive a check
            enter that amount into the Paid field and that amount is
            automatically subtracted from the Owes field. If you were selling
            products, you rename the Owes field to "Stock on Hand" and the
            Paid field to "Amount Sold". When you received new stock you'd add
            that amount to Stock on Hand. When you sold something you'd enter
            that into Amount Sold and that amount would automatically be
            subtracted from Stock on Hand. (See [*] Default Menu about
            redefining the label)

        [$] ADD TO PAID
                The Paid field keeps track of the all time amount of money a
            person has paid you, or the all time quantity of that item sold.
            You can clear this field by adding the negative of the total
            amount.

        [0] ZERO TIMER
                This is used at the end of the phone call. This function will
            set the timer back to zero, calculate the amount due for the
            consultation by multiplying the length of the call, by your hourly
            wage (See [*] Default Menu), and adding that amount to the Owes
            field.













21-SEP-87             DATABASE PUBLISHER by Neil Albala                 page 4


        [f] FORMAT BOOKLET
                This command formats the Database information into a booklet.
            You'll be prompted for "Month" and that date will be placed above
            the masthead. This is what happens next. The database information
            is converted to pages, but not printed pages. Disk pages, stored
            as files. Because a sheet of 8.5x11 paper folded in half has 4
            pages (both sides) the amount of pages formatted to disk will
            always be multiples of 4: 4, 8, 12, 16, etc. 4 pages is one sheet
            of paper printed on both sides. 8 pages is two sheets of paper
            printed on both sides, etc. The Print Booklet command (See [p]
            Print Menu) will take these page files and print them in the right
            sequence, so that you when put together, all the booklet pages
            will be in order.
                In between the time you use the Format Booklet command to
            format the booklet and the Print Booklet command to print the
            booklet you can add to or edit the booklet pages. Use any text
            editor or word processor set to save text in ASCII format. (All
            word processors have this option.) When editing the PG or page
            files set the line width to be 52 characters per line, with no
            margin.
                Using this feature you can add additional text or articles to
            the empty spaces in the booklet. Empty spaces happen two ways.
            One, if there is not enough information in the database to fill
            the last sheet of paper. Two, when formatting a categorized
            booklet, new categories always start on a new page and there is
            often empty space at the bottom of the previous page. (See [*]
            Category Menu)
                Be careful. If you've formatted and edited a booklet version
            you want to keep, go into the default menu and change the PG File
            Extension, otherwise the last booklet version of the same
            extension will be erased.
                Also, if you're going to be sending the catalog through the
            mail, do leave the last page empty, or partially empty. Just
            staple the booklet closed, and use that last page for addresses
            add postage.

        [p] PRINT MENU
            [l] LABELS
                    Mailing labels are always sorted by zip. Before the actual
                printing starts you will be prompted, "Space bar to test <cr>
                to begin". Use the space bar to advance the labels one line at
                a time. Adjust the labels so that the printing will begin on
                the top line of any label and all the rest will follow suit.
                    If you have selected one or more categories (See [*]
                Category Menu) then only people or products with that category
                in the Category Field will be printed.
                    Also be aware of this feature: When an Expiration Date is
                present, that label will only be printed if the date is
                current. When you're keeping track of subscriptions, place the
                expiration date in the Expiration Date field and when the
                subscription expires there will be no mailing label.












21-SEP-87             DATABASE PUBLISHER by Neil Albala                 page 5


            [b] BOOKLET
                This selection begins the printing of the booklet(s). You will
                be prompted, "How many?" A carriage return defaults to one.
                You can enter as many as you like though be careful not ask
                for more booklets than you have paper. If you're going to be
                printing 1000 booklets print them in groups of 100.

            [r] TRANSACTION REPORT
                    This selection will begin the printing of the Transaction
                Report. Each time you add to the Owes or Paid field, or Zero
                the Timer an entry is made to the report file. (REPORT.DP)
                You'll notice that every time a money or math field is changed
                you'll be prompted for a comment. This is optional. Your
                comments will appear on the Transaction Report.
                    The Transaction report is a log of all transactions. This
                is used for record keeping and referencing exactly what
                happened when.
                    The transaction file is called REPORT.DP. Entries are not
                deleted until you use the DOS command: DEL  REPORT.DP

        [*] DEFAULT MENU
                 Listed below are each of the selections on the Category Menu
            and a description of each. Selections "a" thru "m" are merely
            labels. These labels are displayed when the program is installed.
            They're just default labels and may be changed.
                 Note: for the purposes of this instruction manual all
            references to commands are made by their default name.

            [a] Name, [b] Company
                    This are both 30 character fields.  The Name field could
                possibly  be changed to "Full Name" or if your primary focus
                is on Companies you might want to define this field as
                "Company" and then define the Company field as "Attention:".
                These are just examples. You can define these field as any way
                you want.

            [c] Tel #, [d] Tel #
                    These two fields are both 20 characters each, so there is
                not only enough space for an area code but also and extension.
                If you you'd need two fields for telephone numbers then
                redefine the label and use one or both for something else.

            [e] Address
                    This field is 36 characters. If you're keeping track of
                products you might want to define this field as "Supplier".

            [f] City, [g] State, [h] Zip
                    City is 16 characters, State 2, and Zip 10. These field
                labels may also be redefined.

            [i] Category
                    This field is 30 characters long. This is just the label
                for the Category field. For a detailed explanation of
                categories, their definition, and use, See [*] Category Menu.









21-SEP-87             DATABASE PUBLISHER by Neil Albala                 page 6


            [j] Timer
                    The timer not only keeps track of seconds, and minutes,
                but hours too. The only way to access this field is by using
                the space bar as an on/off switch. If you like you may
                redefine this label.

            [k] Owes
                    The maximum amount for this field is 100,000 whether that
                be dollars, units or whatever. You may want to redefine this
                label to "Pledged"

            [l] Paid
                    The maximum amount for this field is 100,00 whether that
                be dollars, units or whatever. You can redefine this label
                too.

            [m] Expiration Date
                    The date field is 8 characters. Example 01-01-88. This
                field label may be redefined.

            [r] City, [s] State
                    This is not a field label. This is an actual city and
                state. Tucson, AZ is the default. When you're entering or
                editing data you do not have to type the same city and state
                over and over again. Just hit return and as long as you put in
                the zip code the default city and state will be inserted into
                the record for you.
                    These two selections allow you to change the default city
                and state.

            [t] Name in Booklet Masthead
                    Place your business name here and that name will be
                printed out in the booklet masthead.

            [u] Hourly Wage
                    Set you hourly wage here and when the Timer is turned on
                the dollar amount will be calculated and displayed. If you
                want to turn off this feature set the hourly wage to zero.

            [v] PG File Extension for Booklet Pages
                    As was mentioned in the [f] Format Booklet section, once a
                booklet is formatted to disk you can make additions and
                changes with any text editor or word processor set to save
                files in ASCII format, 52 characters per line. Once you've put
                the work into editing these booklet editions you'll want to
                save them.
                    If you don't change the PG File Extension the next time
                you go to Format a Booklet the previous edition with your
                changes will be lost.
                    When you want to save an edition, change the PG File
                Extension before doing a Format Booklet. Use any three letter
                extension. Here are some examples: Jan, Feb, Mar, etc. Or if
                you're publishing weekly editions use numbers: 1, 2, 3, etc.










21-SEP-87             DATABASE PUBLISHER by Neil Albala                 page 7


            [w] Printer Control Code for Dot Matrix Printers
                    This is important. Before your booklets will print
                correctly, you must set the decimal code that sets your
                printer to print 132 characters per line. You'll need to look
                this up in your printer manual. The default is 15 for IBM and
                compatible printers.

            [x] Printer Control Code for Laser Printers
                    If you have a laser printer you'll need to enter the
                decimal codes that set the printer to 132 characters per line.
                This will probably be an escape, decimal code 27, and some
                other number. You'll need to check your manual for the full
                sequence.

        [=] CATEGORY MENU
                Use full names when defining category names because these will
            be printed as booklet headings. Only when selections are made will
            booklets be categorized.
                When prompted for category in the main screen, you can use the
            full name, though only the first four characters are required.
                Remember, upper and lower case letters are different.
                When categories are selected only records which include one of
            those categories will be displayed or printed.
                All selections are saved. Remember, if you can't find a record
            just clear all selections.
                If a record is to be selected a being part a category you must
            include the category name, or the first four characters of that
            name,in the category field of that record.
            

            [PgUp], [PgDn]
                    The screen lists 20 categories at a time. Use the Page Up
                and Page Down keys to jump to the next or previous 20
                categories.

            [n] New
                    Use this command to define a new category name.

            [d] Delete
                    Use this command to delete a category. Follow the prompts.
                You'll first use the Up and Down arrows to position the
                pointer on the category you want to delete. When this is done
                then hit return and the category will be deleted. If you
                change you mind just hit the Escape key.


            [s] Select
                    This is the function that allows you to select particular
                categories. When one or more categories are selected then only
                those categories will be displayed, or printed. For records to
                be displayed or printed they must have the selected category
                name, or the first four letters of that category name, in the
                Category field exactly as it is defined on the Category Menu.
                When ever you're creating or editing a record you're prompted
                for Category. That's the Category field. Remember upper case
                letters are different from lower case.







21-SEP-87             DATABASE PUBLISHER by Neil Albala                 page 8


                
                    To select categories follow the prompts. Use the Up and
                Down arrows to position the pointer on the category you want
                to select. Then tap the space bar and that category will be
                highlighted, and thus selected. Tap the space bar again, and
                that category will be unselected.
                    Once you've selected a category you may continue to use
                the Up and Down arrows and the Space Bar to position the
                pointer and select or unselect other categories.
                    When you've got all the categories selected as you want
                them, hit return and you'll be back at the original Category
                Menu.

            [m] Move
                    When you make selections by way of this menu the booklet
                is formatted by category. The order in which these categories
                are printed is controlled by this move function.
                    The first selected category will be printed first, the
                second second, and so forth.
                    To move a category follow the prompts. First you position
                the cursor next to the category you want to move. A return
                will highlight that category. Then use the Up and Down arrows
                to move the category.

            [c] Clear
                    If you have a number categories selected and you want to
                unselect all categories this one command will do that. All
                highlighted categories will instantly be unhighlighted,
                unselected, or cleared. But not deleted.

            [e] Exit
                    There are three ways to exit the Category Menu. An "e" or
                a carriage return will save all selections and bring you back
                to the main screen. An escape will retain all selections for
                the duration of the session though they will not b e saved to
                disk so the next time you start the program your original
                selections will be intact.

        [/] EXIT
                This is the command you use to exit the program.

```
{% endraw %}

## FILE0854.TXT

{% raw %}
```
Disk No:  854                                                           
Disk Title: Database Publisher                                          
PC-SIG Version: S1.2                                                    
                                                                        
Program Title: Database Publisher                                       
Author Version: V2.5                                                    
Author Registration: $59.00                                             
Special Requirements: Hard drive recommended.                           
                                                                        
DATABASE PUBLISHER is a menu-driven program which records and tracks any
kind of data you wish to store on the people in your life or the        
customers of your business.                                             
                                                                        
DATABASE PUBLISHER handles data for up to 2,000 people, each with up to 
100 categories.  Records can be linked to multiple categories.  Each    
record can contain information about a person, the status of an account,
purchase history, demographic information or any other data you may need
to manage.  A telephone call timer even helps you charge customers for  
phone calls to consultants.                                             
                                                                        
The program will print out sorted mailing labels by any combination of  
selected categories.  The database information can be formatted into a  
booklet form, so the records can be printed either on a laser or dot    
matrix printer.                                                         
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## FILES.DOC

{% raw %}
```
          DataBase Publisher - Files You should be aware of.

DATAPUB.EXE ..................... The executable program.
DATAPUB.DOC ..................... Eight pages of program documentation.
COVER.TXT ....................... Text to appear on cover of booklet (PG-1)
PG-1.SAV - PG-8.SAV ............. Sample booklet. Can be printed by program.
REPORT.DP ....................... Transaction report. Printed by program.

<DATA> .......................... These files should be left alone.

This disk contains the DataBase Publisher program. Sample files are included, 
so you don't have to spend a lot time entering test data just to see what the
program can do. When you're ready to set up your own database just copy
DATAPUB.EXE on a new floppy, or a sub directory of your hard disk, and the
program will create all files it needs.

To print out the program documentation: copy datapub.doc lpt1

Comments and suggestions for improvement are much appreciated.

Neil Albala, 233 S. Panorama Circle, Tucson AZ 85745, 602 884-1177


```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                <<<<  Disk #854 DATABASE PUBLISHER  >>>>                 ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To copy the documentation to your printer, type: COPY DATAPUB.DOC PRN   ║
║                                                                         ║
║ To start the program, type: DATAPUB (press enter)                       ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0854

     Volume in drive A has no label
     Directory of A:\

    DATAPUB  DOC     28362   9-21-87   1:36p
    DATAPUB  EXE    161054  12-18-89  11:34a
    FILES    DOC      1052  10-10-87   9:49a
    PG-1     SAV      2349  12-18-89  11:42a
    PG-2     SAV      2396  12-18-89  11:42a
    PG-3     SAV      2400  12-18-89  11:42a
    PG-4     SAV      2031  12-18-89  11:42a
    PG-5     SAV      2276  12-18-89  11:42a
    PG-6     SAV      2454  12-18-89  11:42a
    PG-7     SAV      1877  12-18-89  11:42a
    PG-8     SAV         1  12-18-89  11:42a
    GO       BAT        38  10-19-87   2:14p
    FILE0854 TXT      2221   1-19-90   9:58a
    GO       TXT       540   1-17-90   1:46p
    DATA         <DIR>    
           15 file(s)     209051 bytes

     Directory of A:\DATA

    .            <DIR>    
    ..           <DIR>    
    06191709           322  10-05-87   3:58p
    06192248           251  10-05-87   3:58p
    06192446           197  10-05-87   3:59p
    06192849           324  10-05-87   3:59p
    06193212           230  10-05-87   4:00p
    06193402           316  10-05-87   4:00p
    06194659           226  10-05-87   4:00p
    06194926           287  10-05-87   4:00p
    06195207           306  10-05-87   4:01p
    06195431           197  10-05-87   4:01p
    06195619           305  10-05-87   4:01p
    06200158           270  10-05-87   4:02p
    06200422           243  10-05-87   4:02p
    06200851           255  10-05-87   4:02p
    06200951           197  10-05-87   4:03p
    06201129           319  10-05-87   4:03p
    06201426           307  10-05-87   4:04p
    06201833           244  10-05-87   4:04p
    06202152           271  10-05-87   4:04p
    06202751           271  10-05-87   4:05p
    06203000           217  10-05-87   4:05p
    06203135           205  10-05-87   4:05p
    06203340           269  10-05-87   4:06p
    06203703           204  10-05-87   4:06p
    06203853           302  10-05-87   4:06p
    06204119           244  10-05-87   4:06p
    06204304           241  10-05-87   4:07p
    06204505           271  10-05-87   4:07p
    06204705           217  10-05-87   4:07p
    07180413           291  10-05-87   3:57p
    14075808 87        270  10-05-87   3:58p
    28131145 87        284  10-05-87   4:02p
    28135844 87        354  10-05-87   3:58p
    CATEGORY DP        492  11-14-87   1:32p
    DEFAULTS           189  12-18-89  11:51a
    NAMES    DP      11500   3-14-85   3:48a
           38 file(s)      20888 bytes

    Total files listed:
           53 file(s)     229939 bytes
                           54272 bytes free
