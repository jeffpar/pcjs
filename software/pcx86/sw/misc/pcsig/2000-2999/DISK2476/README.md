---
layout: page
title: "PC-SIG Diskette Library (Disk #2476)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2476/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2476"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "PFAS  2 OF 2 (#2475 ALSO)"

    PERSONAL FINANCIAL ACCOUNTING SYSTEM (PFAS) is a small business
    checkbook manager to make bank reconciliation much faster and easier.
    PFAS provides the necessary information to get through any bank
    reconciliation statement. It can handle 1000 transactions for each
    account for a full calendar year. An outstanding feature lets you
    configure a customized chart of accounts to properly track your
    expenditures. This is a strong plus at tax time.
    
    PFAS has full edit, insert, and delete features, and the current
    bank balance and true account balance are posted at the top of the
    screen. You can issue date-specified reports to the screen and/or
    printer. You can search and list transactions to screen only, or
    printer, by any whole or partial "issued to" name, by date, or by check
    number.
    
    Screens look very similar to many dBase programs in their style of
    screen prompting. As a result, PFAS offers good, clear-cut instructions
    to get any beginning user off the ground quickly.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## EPSON.DOC

{% raw %}
```


       NOTE: If you want to access EPSON.EXE from within P.F.A.S., keep
             EPSON.EXE on the same disk or drive as PERSONAL FINANCIAL
             ACCOUNTING SYSTEM program files.

       The file EPSON.EXE was put together by PC SOFT-E for the
       convenience of those Epson and Epson compatible printer users. It's
       a handy little program to quickly configure your Epson printer.
       However, it does not substitute for any word processor functions
       where you need to turn off and on special print types at will. But
       if you want to print all emphasized, italic print, as an example,
       then EPSON.EXE will facilitate that need. The skip over perforation
       feature is very useful as another example.

       Be advised that EPSON.EXE encompasses features that your Epson may
       or may not have. If in doubt, please consult your printer manual.

       To get an interesting print type that all Epson printers will
       produce, choose option #5 to expand the print and then choose
       option #2 to compress the expanded print. This print type allows
       for about 60 column width instead of the standard 80 column. Its
       another option that you may have not been aware of....HAVE FUN!


```
{% endraw %}

## FILE.TXT

{% raw %}
```

  FILENAME:       DESCRIPTION:
  ---------       ------------------------------------------------------------
  PFAS.EXE        Main program file for personal financial accounting system.
  PFAS.DOC        Documentation for main program program operation.

  INSTALL.BAT     Batch program to properly install P.F.A.S. to
                  floppy drive system or hard drive system.

  PFASBKUP.BAT    Batch program that is run from within P.F.A.S. to properly
                  backup data files for hard drive systems.
  PFASRSTR.BAT    Batch program that is run from within P.F.A.S. to properly
                  restore data files for hard drive system.

  EPSON.EXE       Epson printer configuration utility program.
  EPSON.DOC       Documentation for printer configuration program.

  1.CF1           ASCII text config file containing category information for
                    main program file.
  1.CF2           ASCII text config file containing category information for
                    main program file.
  2.CF1           ASCII text config file containing category information for
                    main program file.
  2.CF2           ASCII text config file containing category information for
                    main program file.

  MONO.SCR        Closing credit and copyright screens for monographics.
  COLOR.SCR       Closing credit and copyright screens for color graphics.

  UPDATE.FIX      Text file that keeps you updated as to the differences
                   from earlier versions to the latest.

  REGISTER.FRM    Registration form for those who would like to register
                   with author.(Stongly encouraged. Programmers eat too!)

  90SAMPLE.DAT    Sample data file as a tutorial to use with (P.F.A.S.)
                   PERSONAL FINANCIAL ACCOUNTING SYSTEM

  PRINTDOC.BAT    Type "PRINTDOC" at Dos prompt to print full documentation.

       PERSONAL FINANCIAL ACCOUNTING SYSTEM version 1.9 is a small
       business/personal checkbook manager designed to make bank
       reconciliation absolutely painless. PERSONAL FINANCIAL ACCOUNTING
       SYSTEM provides the necessary information to get through any bank
       reconciliation statement. It can handle up to 1000 transactions in
       one account file for the full year.  You can have as many as 20
       working account data files in each hard drive subdirectory or
       floppy disk. An outstanding feature lets you define up to TEN
       different customized charts to properly categorize all your
       transactions. This is very much like a chart of accounts in a
       general ledger program. Each transaction can then be included in a
       neatly detailed expenditure report according to the nature of the
       expenditure for any date specified fiscal period within the year.
       This is a strong plus at tax time and for budget purposes. You also
       have the full ability to edit, insert new or delete current
       transactions and sort your transactions by Date, Check#/Deposit,
       Issued To and even by $Amount. The current balances are posted at
       the top of the screen to let you know how any transaction has
       affected your bottom line at anytime, any place in the file.



                                   File Pg. 1

       The program can search out transactions by date, check number, or
       by the nature of the expenditure by its "issued to" contents. If
       you search out by "issued to", it will list on the screen and/or
       printer all like transactions and sum the amounts at the bottom of
       screen again within any specified fiscal period within the year.
       This is useful if you would like an "on the spot" glance of a
       category expenditure without printing the expenditure report.

       P.F.A.S. offers just enough, clear instructions to get any beginner
       user off the ground quickly in computing. The program has enough
       structure in it to guide any newcomer in computing through the
       program without confusion or puzzlement but not "boging" down the
       experienced end user. The screens look very similiar to many DBASE
       programs in their style of screen prompting which are the least
       ambiguous of any screens used. The screens switch to monochrome or
       color automatically when using Hercules, MDA, mono adapters or CGA,
       EGA or VGA color adapters.

       PERSONAL FINANCIAL ACCOUNTING SYSTEM can issue date specified
       report to screen and/or printer:

                  - expediture report by user defined categories for budget
                     and tax purposes.

       PERSONAL FINANCIAL ACCOUNTING SYSTEM can search and list
       transactions to screen only or printer too:

                  - by any whole or partial "issued to" name and add
                     dollar amounts at bottom of screen of those items
                     searched. Search may also be contained in a fiscal
                     period within the calendar year in the file.

                  - by date
                  - by check number

       PERSONAL FINANCIAL ACCOUNTING SYSTEM can list transactions to
       screen only or printer too:

                  - transaction to transaction number
                  - date to date
                  - total transactions





















                                   File Pg. 2

```
{% endraw %}

## FILE2476.TXT

{% raw %}
```
Disk No: 2476                                                           
Disk Title: PFAS  2 of 2 (#1129 also)                                   
PC-SIG Version: S1.9                                                    
                                                                        
Program Title: Personal Financial Accounting System (PFAS)              
Author Version: 1.9                                                     
Author Registration: $25.00                                             
Special Requirements: None.                                             
                                                                        
PERSONAL FINANCIAL ACCOUNTING SYSTEM (PFAS) is a small business         
checkbook manager to make bank reconciliation much faster and easier.   
                                                                        
PFAS provides the necessary information to get through any bank         
reconciliation statement.  It can handle 1000 transactions for each     
account for a full calendar year.  An outstanding feature lets you      
configure a customized chart of accounts to properly track your         
expenditures.  This is a strong plus at tax time.                       
                                                                        
PFAS has full edit, insert, and delete features, and the current        
bank balance and true account balance are posted at the top of the      
screen.  You can issue date-specified reports to the screen and/or      
printer.  You can search and list transactions to screen only, or       
printer, by any whole or partial "issued to" name, by date, or by check 
number.                                                                 
                                                                        
Screens look very similar to many dBase programs in their style of      
screen prompting.  As a result, PFAS offers good, clear-cut instructions
to get any beginning user off the ground quickly.                       
                                                                        
                                                                        
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║   <<<<  Disk #2476  PERSONAL FINANCIAL ACCOUNTING SYSTEM (PFAS)  >>>>   ║
║                       (Disk 2 of 2, also #1129)                         ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To print the documentation, insert Disk 2, type: PRINTDOC (press Enter) ║
║                                                                         ║
║                                                                         ║
║ NOTE:  Before continuing with the following directions, make a backup   ║
║        copy of the program.  A counter is activated when the program    ║
║        is opened or "browsed."  Use the backup copy to install PFAS on  ║
║        your hard drive.                                                 ║
║                                                                         ║
║                                                                         ║
║ To browse program temporarily, insert Disk 1, type:  PFAS (press Enter) ║
║                                                                         ║
║ To install for full use, insert Disk 1, type:     INSTALL (press Enter) ║
║                                                                         ║
║                                                                         ║
║                                       (c) Copyright 1990, PC-SIG Inc.   ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## PFAS.DOC

{% raw %}
```






                                AUTHOR COMMENTARY


       I believe that software should be no harder to buy than a book or
       magazine. I believe that the shareware concept will help evolve a
       new way of marketing PC software. The new "niches" to marketing PC
       software in the future is to provide software that:

               1. provides practical features that will bring
               80%-100% usage for the dollar paid. The
               percentages are now around 20%-40% usage for
               commercial pkgs. This suggests too many superfulous
               "bells and whistles" that won't be used. Usually
               when a predominate need has been met, the user
               "plateau's out" and no increased "power usage" is
               learned. Hence, the PC owner is using a small
               percentage of the total dollar paid for the
               product. Most users complain that it is too
               belaboring and painful to learn more features even
               though it may benefit them later. PC consumers are
               usually encouraged to buy more than what they need.

               2. that the "learning curve" time be decreased by
               using more apparent and intuitive screens with "on
               the spot" help screens when furthur instructions are
               needed.(No more than two screens per function). This
               would decrease the need for thick and involved
               manuals if not eliminating the manual completely.

               3. with items 1 & 2 in place, the cost per package
               could be decreased to "bookstore" prices.

               4. each package would have an introductory booklet
               displaying the menu screens and other "picture
               examples" to quickly and accurately show the features
               and attributes of the program. This way the buyer
               could browse software as easily as he could a book or
               magazine.

       I believe the emphasis should be more about approach to "apparent
       learning" and "ease of productive use" than so called "power use"
       of monumental content.

       PERSONAL FINANCIAL ACCOUNTING SYSTEM will continue to strive to
       have all the above criteria in place. Please stay tuned!
















       TITLE -------------- : PERSONAL FINANCIAL ACCOUNTING SYSTEM
                              COPYRIGHT (C) 1987,1988,1989,1990 PC SOFT-E

       FILES -------------- : PFAS.EXE
                              PFAS.DOC
                              MONO.SCR
                              COLOR.SCR
                              1.CF1
                              1.CF2
                              2.CF1
                              2.CF2
                              EPSON.EXE
                              EPSON.DOC
                              90SAMPLE.DAT
                              INSTALL.BAT
                              PRINTDOC.BAT
                              PFASBKUP.BAT
                              PFASRSTR.BAT
                              REGISTER.FRM (for registration)
                              FILE.TXT
                              REVIEW.TXT
                              CATEGORY.MNU
                              UPDATE.FIX
                              READ.ME

       DATE OF RELEASE ---- : 10/5/90  Release 1.9 and (British) 1.9Z

       AUTHOR ------------- : Phillip C. Esch

                              PC SOFT-E
                              224 W. Hatcher Rd.
                              Phoenix, Az 85021
                              602-997-8894

       MINIMUM
       HARDWARE REQUIREMENTS: 640K of memory
                              two floppy drive 360k system
                               - or one 1.2 meg 5 1/4" drive
                               - or one 720k 3 1/2" drive
                              monochrome or any color graphics
                              Prefer DOS 3.1 or later

                              (Note: Cannot guarantee best
                               results with older DOS..


                              THANK YOU IN ADVANCE

       I want to thank everyone who has helped me with this software,
       especially my brother Roger and a good friend, Wayne Wilson from
       New Zealand, who were instrumental in helping me find some real
       problems by being my true blue "friendly users". If you find
       PERSONAL FINANCIAL ACCOUNTING SYSTEM useful to your home or
       business, you really should register with the author and get the
       latest update. See registration form print out for instructions on
       how to register.



                                       1

                          LICENSE AGEEMENT INFORMATION

       This software is sole property of PC SOFT-E and may not be bundled
       with other hardware and/or software without first arranging a
       licensing agreement with PC SOFT-E. PERSONAL FINANCIAL ACCOUNTING
       SYSTEM may be included on a diskette to be sold at a nominal price
       per disk as a shareware item only and that the disk include only
       the PERSONAL FINANCIAL ACCOUNTING SYSTEM files and that no other
       software be promoted on the same disk.

       For shareware distributors, I need only a written notice of intent
       to distribute PERSONAL FINANCIAL ACCOUNTING SYSTEM files as a
       shareware distributor, business name and location, and any label
       designation assigned to the PERSONAL FINANCIAL ACCOUNTING SYSTEM
       disk.

       PERSONAL FINANCIAL ACCOUNTING SYSTEM may not be sold across any
       "store front" counter or as a mail order item for commercial profit
       without obtaining written agreement from PC SOFT-E. PERSONAL
       FINANCIAL ACCOUNTING SYSTEM (P.F.A.S.) is copyrighted material. You
       may not make any changes or modifications to the files PFAS.EXE,
       PFAS.DOC, COLOR.SCR or MONO.SCR; you may not decompile or
       disassemble the file, PFAS.EXE. You may not rent or lease it to
       others. Operators of electronic bulletin board systems may post
       (P.F.A.S.) ARC or ZIP files for downloading by their users without
       written permission only as long as the above conditions are met.
       End users may make copies of all P.F.A.S. files contained in the
       ARC or ZIP file as long as no fee is charged. A fee may be charged
       for access to the BBS as long as no specific fee is charged for
       access to the P.F.A.S. files.


                               GENERAL INFORMATION

       This documentation will give you a general overview of each feature
       of the program and will cover areas where there might be questions.
       I have tried to keep things simple and as "user friendly" as
       possible. Effective software is software that is simple and
       powerful at the same time. But that doesn't mean to say that there
       won't be questions. Hence, you will find my phone number and
       address on page 1 of this documentation.

       Once the main menu is on the screen, you will see some interesting
       options that I'm sure you'll want to discover. I will cover every
       option of the menu by highlighting certain aspects of those
       options. Generally, every prompt that asks for dates with (MMDD)
       should be entered month and day as in "1231" for December 31 or
       "0123" as January 23. Most prompts will show options to escape out
       of any situation, such as "M" for menu or "Press Any Key to
       Continue..." or "Y/N". If you find no immediate escape out of a
       situation, the "Esc" key will get you back to familiar territory.
       If the program finds an error such as forgetting to turn on the
       printer, a window at the bottom of the screen will appear. The
       window will list the program location number and error message. You
       have the option then to (R)etry,(N)ext,(M)enu or (S)top. If the
       problem has been corrected, then choose "R" to retry. If (R)etry
       continues to be unsuccessful then try (N)ext or (M)enu. If all else
       fails, you will have to (S)top and reload P.F.A.S. again. If (S)top
       continues to be the only option that works, please notify me as the
       stop message indicates. But please try all other options first.


                                       2


                 THE INVERSE INPUT WINDOW STRIP  - EDIT COMMANDS

       All data input is prompted by the "Inverse Input Window Strip". For
       monochrome users, inverse is black letters on white background
       and/or white underline with black background for data input. For
       color users it will be white letters on blue background and/or red
       letters on yellow background. Within this strip, the cursor is
       waiting for you to type from the keyboard. If you type to the end
       of the input strip, one of two things will happen. Either you will
       hear a beep with the cursor stopping and going no further or the
       cursor will go on to the next input window strip as in the case of
       the main data input screen. (Choice #1 from the Main Menu).

       The following are keypad edit commands:

       "Home"    = the cursor is put at the beginning of the text.

       "End"     = the cursor is put at the end of the text.

       "Ins" key = the cursor will change to a full block and you may
                   insert a character from the keyboard.

       "Del" key = the cursor will move to mid character point and delete
                   a character to the right of the cursor position for
                   every "Del" key pressed. (Please be aware that the
                   "Del" key is used a little differently when inputing
                   dollar amounts at the main data input screen. As you
                   will notice, the dollar amount window keeps the cursor
                   to the far right and will delete the whole number at
                   once. Experiment with it and you will see how it
                   works.)

       "Right arrow/Left arrow" = will move cursor the right or left of
                                  present cursor position.

       "Ctrl-Y"  = (press and hold the "Ctrl" key while pressing
                   the "Y" key at the same time). Delete text from cursor
                   point to end of line. If the cursor is in the first
                   position, then the whole line will be deleted.


           CREATING NEW ACCOUNT FILES  OR  OPEN EXISTING ACCOUNT FILES

       Just for practice, load in the filename "90SAMPLE" (Option #3 of
       the Main Menu). The next screen will prompt you with "Enter Drive
       A, B, C or (Esc) to Menu". If the ".DAT" file is on C: drive press
       the "C" key, etc. The list of ".DAT" files will appear on the
       screen. Use the up/down arrow keys to move the inverse input window
       strip to the desired account file name and press "RETURN" or
       "ENTER" key. If the file you want to load is already high lighted,
       which means that the file is already loaded, then you can press the
       "Esc" key to get back to the main menu. Pressing the "RETURN" key
       will reload the file.

       To create a new account file, just move the inverse input window to
       an empty space and type in the new account name. Please start the
       account name with the year first. An example would be, "90" or
       "90CHECK" or "90SAVING" or "90ACCT1". P.F.A.S. gets it's year



                                       3

       reference for reports, etc. from the account name. You may with the
       same inverse window, rename an account file by typing over the
       existing file name. And, if you need to delete an account file,
       overtype the letters "KILL" over the account name with no other
       letters showing and press the "RETURN" key. I can't say enough
       about the judicious use of this feature. The rule of thumb is press
       the "Esc" key when in doubt. When exploring P.F.A.S., please use
       the "90SAMPLE.DAT" file for your trial and errors, first.

       PFAS.EXE uses memory for speedier searchs but when an edit or new
       transaction occurs, the file on disk will be immediately updated to
       reflect the change. Memory has an exact image of the account file
       on disk. Remember that an account file can have up to 1000 entries.
       After the transactions have been loaded, the last nine transactions
       will be listed on the screen.


                           THE MAIN DATA INPUT SCREEN

       The last nine transactions listed after loading the account file
       will put you automatically in the data input screen. Otherwise, to
       get to the main data input screen, choose option #1 from the main
       menu. At the bottom of the data input screen, there is a menu
       that gives control information. Try each control and see how they
       work. For example, if you press the tab key, the inverse input
       window will advance to the next input for data entry. It will be
       given that you will press the "RETURN" or "ENTER" key at each data
       entry point when entering new or editing existing information. To
       start a new transaction data entry line, press the down arrow key.
       Also a new data entry line will be created when pressing the
       "RETURN" key at the "ISSUE TO" data point, assuming that you will
       want a new transaction each time. However, please make note that
       the new transaction data entry line will not be fully created until
       you begin to enter data. When sorting or finding info (Alt-F), the
       last data entry line will only be included for the function if you
       have pressed the "RETURN" key at any of the data input points on
       that line. Press "F10" to see your true last line of data.


                      DATA ENTRY POINTS ON THE INPUT SCREEN

       The first data input point is the date. The date input is strickly
       numeric. Just type (MMDD) as "0101" for January 1st to "1231" for
       December 31 as examples. The next data entry is the check number or
       deposit designation. The number can be up to 8 digits long. To
       designate it as a deposit, just type the letter "D" or "d" and
       press "RETURN" key. The word "DEPOSIT" will automatically be typed.
       Notice how the balance at the far right is affected. If your
       transaction is a "DEPOSIT" then the balance will reflect an
       addition when you type in the the dollar amount. Similarly, you
       will notice a subtraction if you have typed in a check number. For
       your convenience the check number is automatically advanced so that
       all you need to do is press the "RETURN" key to minimize
       keystrokes. This also applies to the date as well. As mentioned
       previously, the dollar amount input will enter digits from the
       right. Just type the digits in the order in which you see them and
       the decimal point will take care of itself. Again this is to
       minimize keystrokes.




                                       4


                    SORTING THE DATA FILE ON THE INPUT SCREEN

       <<Please be aware that the P.F.A.S. preferred "DATE" sort will be
         permanent on disk while all the other sorts are temporary in
         computer memory.>>

       The sort feature is probably one of the most helpful for organizing
       your account file. This will be especially useful when printing
       your entries. (See option #2 from the main menu.) "Alt-S" will give
       you the option to sort on all the data types including $AMOUNT. If
       you are loading in an existing, first time P.F.A.S. file, please
       sort by "DATE" first. This will put all your transactions in the
       P.F.A.S. preferred order. You will notice that the sort will also
       rebalance the file and will rewrite it to disk. This sort not only
       sorts the dates but also puts the check numbers and deposits in
       numeric order within those dates with the deposits listed first for
       each date. That is why the "DATE" sort may take a little longer
       than the other sorts. If your data entry sequence does not follow
       date order sequence as in the case of batching deposits for data
       entry, don't forget to "DATE" sort after the data entry is
       completed.

       If on the other hand, you decide that you don't want to comply with
       the preferred "DATE" sort, please do not use the "DATE" sort for
       this will permanently reorder the file to disk. Instead, it will be
       assumed that your preferred order is the order in which you have
       manually assenmbled or entered the data. To know which sort you are
       in, please notice the upper right screen. Even if you do not
       actually sort for "DATE", P.F.A.S. will assume that you are in the
       preferred sort when in the "DATE" mode. To quickly revert back to
       the preferred mode from a temporary sort, type "Alt-R" for
       reloading the file from disk. This is the correct way to get back
       to the preferred ordered sequence.

       When you sort by CHECK#, ISSUE TO or $AMOUNT, the sort is
       temporary. However, it will allow you to make edit changes to the
       entries and still maintain proper "end balance" computation and
       proper transaction sequence for the screen and disk file. You will
       notice however, that P.F.A.S. will not allow you to add new entries
       at the end of the file nor edit the BEGIN BALANCE at transaction #0
       as only the preferred "DATE" sort will allow. Also the insert,
       delete, mark and unmark functions do not work in the temporary
       CHECK#, ISSUE TO or $AMOUNT sorts.

       Please experiment with the sample file first if you have any
       questions about how the sorts work. The sample file has already
       been sorted by "DATE".

                   INSERT/DELETE FUNCTIONS ON THE INPUT SCREEN

       The control function, "Alt-I" will allow you to insert a new entry
       anywhere in the database. After an entry has been inserted, it will
       be labeled in the "ISSUE TO" entry point as "INSERTED ENTRY". Think
       of the file as a vertical file of cards that are spring loaded.
       When a new entry is inserted, all entries below that point are
       advanced to a new transaction number. Reversely, if "Alt-D"
       function is used, all entries below the deleted entry, snap back to
       their new transaction number one place further up the file. "Alt-I"
       and "Alt-D", insert and delete respectively, will work only in the
       "DATE" sort mode.

                                       5

             OTHER USEFUL CONTROL FUNCTIONS ON THE INPUT DATA SCREEN

       The following is a list of all the control functions on the input
       data screen some of which have been previously discussed.

       Tab key = advance to next data input point on data entry line.

       Alt-S   = Sort account data file from sub-menu.

       Alt-G   = Goto any transaction number in the account file.

       Alt-F   = Find any information in any of the entry points.
                 RETURN or ENTER key is to search "forward" or further
                 down the file from the current transaction entry number.
                 Alt-B is to search "backward" or further up the file
                 towards the beginning from the current transaction entry
                 number.

       Alt-C   = to refer to the category chart codes when needed. (See option
                 #5 and #6 on main menu.)

       Alt-I   = insert new transaction data line.

       Alt-D   = delete old transaction data line.

       Alt-R   = reload preferred original sorted file from disk.

       F9/F10  = go to first and last transaction, respectively.

       F1/F2   = mark/unmark transactions for bank reconcilation

       up arrow/down arrow = move transactions up and down from data entry
                             point, one at a time.

       PgUp/PgDn = list full screen of transactions up and down the file.

       Esc = escape back to Main Menu.


                               BANK RECONCILIATION

       At the bottom menu in the data input screen, you will notice the
       options, "F1/F2 = Mark/Unmark Reconciled Trc#". When you get your
       bank statement for the month, you will be able to mark the checks,
       deposits and ATM activity by pressing the F1 key at the respective
       transaction. At the top of the screen, you will notice two
       balances. One is "YOUR BALANCE" that reflects the balance for all
       the transactions entered. The other is "BANK BALANCE" that accounts
       for the marked transactions from your bank statement. If you have
       marked all the transactions necessary for bank reconcilation, the
       "BANK BALANCE" will equal to the balance in the bank statement. Its
       just that simple. To unmark any transaction, move the input cursor
       to the transaction with the "smiling face" symbol in the "ISSUED
       TO" column with the arrow or PgUp/PgDn keys on the key pad and
       press F2 key. The "BANK BALANCE" will immediately reflect the
       change. If you need to "refresh" the "BANK BALANCE" to make sure
       that it reflects all changes, just press F2 any time. Use the
       sample data file and experiment with it to see how it works.
       The sample data file, 90SAMPLE.DAT, shows both balances are the
       same. This is because all the entries were marked. As you unmark
       any of the entries, it will show a different "BANK BALANCE".

                                       6

       By the way, marking and unmarking is only allowed when you are in
       the "DATE" sort. (Look in the upper right corner of the screen to
       see which sort you are in.) Any other sort, takes away any
       reference to marking/unmarking until you re-sort by "DATE" or
       reload with "Alt-R".

                                     ATM'S

       If you use the ATM (Automated Teller Machine), you may assign any
       kind of number sequence you like to denote ATM transactions in the
       check number entry. The check number value can be as high as
       99999999. Just make sure that the ATM or any other number sequence
       does not conflict with the normal check number sequence.


                           EXPENDITURE REPORT PRINTOUT

       I think you will find the printout report especially useful when it
       comes tax time. P.F.A.S. allows you to categorize all of your
       entries according to code letter/number sequence of any length
       separated with a hyphen "-". This would be an excellent way to keep
       track of your deductable items.

       Option #5 from the Main Menu allows up to ten user defined category
       files. There are two provided as examples, called "HOME" and
       "TAXES". To define a new category file or rename another, type the
       name while in the Category file menu window press the RETURN or
       ENTER key.

       Option #6 provides the user the ability to edit, add, insert or
       delete any category entry from within P.F.A.S. Option #6 from the
       Main Menu will bring up two windows. The first window lists out the
       standard categories and the second window lists the sub or
       dispersement categories. Each has the capacity of 132
       expenditure/income categories or 6 pages of 22 entries. "PgUp" and
       "PgDn" keys will advance to the desired page in the window, the
       "F1" key toggles the input strip from one window to the other and
       the "Esc" key will get you back where you started from. Another
       control that is not listed on the screen is "Alt-P". This control
       will print out the two category files on the printer as another
       convenient reference when determining what code will be assigned to
       each new data entry at the "ISSUE TO" point when entering new data
       in the input data screen. To start a new category file, just name
       it first in option #5 then choose option #6 from the main menu or
       "Alt-C" from the input data screen and begin typing in your own
       codes. Just be sure to place a "-" between the code and discription
       of the code. The HOME example provided should be a good guide to
       follow.

       The code letters/numbers separated by a hyphen in the category file
       is what P.F.A.S. looks for to match up your entries for the
       expenditure report. For example, if you have a listing in the HOME
       - CATEGORY window of H-HOUSEHOLD ITEMS, all of the entries in the
       account data file with the first letter H-SMITHS DRUGS or
       H-WALGREENS will be included together in the expenditure report
       under the category H-HOUSEHOLD ITEMS. Letters and/or numbers
       (alphanumeric) can be used for the code designation. For those who
       are using a standard chart of accounts for the business, one could
       use the same four digit account numbers-nature of
       expenditure/income. Example: 6000 to 7999-(Names of expenses).


                                       7

       You will probably find that you will need to incorporate an
       appropriate code letter/number sequence to the budget category file
       (option #6) to allow for miscellaneous and extemperaneous entries
       that would cover interest earned, service charges or any other
       miscellaneous charges. You may incorporate your own defined number
       series for automatic withdrawals or deposits. When you enter data
       in the data input screen, you may put a (-) sign in front of the
       dollar amount to allow for numbered credits to the file such as
       interest earned instead of denoting those transactions as
       positive(+) dollar deposits. The negative amount with check numbers
       does the same as if the amount were entered as a deposit. (See data
       file 90SAMPLE.DAT and how the entry "IE-INTEREST EARNED" is
       applied.)

       The sub or dispersement file is meant to be an extension of the
       main category listing. For example, if you want to know what you
       spent just at H-SMITHS DRUGS and H-WALGREENS separately, you would
       then list those two sources of expenditures in the HOME -
       DISPERSEMENT window as a way of designating dispersement for the
       main category of H-HOUSEHOLD ITEMS. Go to option #6 in the Main
       Menu to see the examples.

       Now let's go to option #4 to actually produce the report with the
       the category codes in place. After hearing the complaints of how
       the expenditure report was such a paper waster in previous releases
       of P.F.A.S., I set forth to implement a suggestion that I received
       from Wayne Wilson from New Zealand. First, when option #4 is chosen
       from the Main Menu, you will notice that P.F.A.S. detects a report
       file previously defined. I put a sample screen report file on the
       disk so that you can see how the report can be put to screen first
       and then to the printer frame by frame. To view the file on disk,
       press the "Y" key to say yes to view the current report file. Use
       the "PgUp" and "PgDn" keys to page through the file frame by frame.
       This file is the short version report which is an option you can
       choose when compiling the report. That option will be covered later
       when we make an actual report from scratch. "PgUp" and "PgDn" keys
       will take you to any part of the report frame by frame. The
       "F9/F10" keys will take you to the first or last frame
       respectively. Each frame contains evenly segmented parts of the
       report so that one could be selective in its final printing. If the
       whole report was not required for printing, just page to the frame
       desired and press "Alt-P" and you will notice that only the printed
       portion of the frame is printed. With "Alt-P" it is very easy to
       print frames together or separately for a whole or partial report
       from the screen to the printer.

       To actually make a report, lets go to option #4 from the Main Menu
       again. Instead of answering "Y" to viewing the current file on
       disk, press the "N" key. Now the window will prompt you for a start
       and end date. Type "0101" for the start date and "0131" for the end
       date. After answering, "Y" to "Are You Sure?", you will be asked to
       choose between creating the (M)ain or (S)ub-Dispersement Category
       report or (B)oth reports, either (L)ong or (S)hort forms to either
       (S)creen only or (P)rint only. Lets choose "B" for both categories,
       "L" for long form and "S" for the screen. If you have an Epson or
       Epson compatible printer, the last question can be answered "Y".
       This allows for a nicer printout. If you just want to inspect the
       report on the screen only, answer "N". Immediately, the screen will
       blank and begin to print the opening screen then blank again as it
       calculates and assembles the report frame by frame. After the
       report is finished, press the "Y" key to say yes to view the

                                       8

       current report from disk. Use the "PgUp" and "PgDn" keys to page
       through the file frame by frame.

       All new reports will erase and cover over any previous report file.
       If you want to keep any previous information, please print out the
       required frames first before compiling another report. Please
       experiment as many times as you need to get the feel for what is
       happening. Of course, you always have the option to print the
       complete report straight to the printer bypassing any screen action
       if you know that is what you need. (I am kind and allow you to
       "Esc" escape out anytime, while in the "direct to printer" mode.)

                       SEARCHING AND PRINTING TRANSACTIONS

       The Main Menu #2 is for the purpose of viewing and/or printing
       categorized entries from the ledger which can be very useful and
       interesting. (Do not confuse this with "Alt-F" or "Find" while in
       the data input screen.) The sub-menu option #1 asks you whether or
       not you would like to establish a fiscal period from which to
       search. If you answer "N" or no, it will search the whole file.
       Otherwise it will search only within that fiscal period. Let's say
       you want to search out all of your insurances. Enter the code
       letter "I" and all of your insurances will be listed. However,
       suppose you want to list out only your car insurances. Let's say
       you forgot how they were entered except that you're pretty sure
       they were listed under "STATE FARM". To find out, just enter "I-S"
       or "I-STATE" or "I-STATE FARM". The search string that will be sure
       to include all "STATE FARM" would be "I-S". Be sure to notice that
       there will be a total amount listed at the bottom of the screen in
       the amount column. This is very nice if you want to check a total
       of expenses or income at a glance and didn't want to use the
       report.

       From that same sub-menu you can see that there are other options to
       list your transactions to screen and/or printer. You will find that
       just putting your checks out on paper instead of dealing with the
       checkbook ledger is so much easier to track. After working with
       P.F.A.S., you will find that you won't need to rely on the
       checkbook ledger as much. Of course, you should still keep account
       of your checks as you write them if for nothing else but to enter
       them into the computer.

                BACK-UP AND RESTORE FEATURES FOR HARD DRIVE USERS

       Options "B" and "R", back up and restore, allow the user to back up
       the ".DAT" files more conveniently from within P.F.A.S. There are
       two ".BAT" files provided that will back up and restore your ".DAT"
       files given that the "BACKUP" and "RESTORE" DOS utility files are
       in the subdirectory, "C:\DOS". If you need to taylor the back up
       and restore features to another utility such as PCTOOLS or FASTBACK
       etc., you may use your word processor or text editor to load each
       ".BAT" file and change the contents accordingly. However, please do
       not change the file names, "PFASBKUP.BAT" or "PFASRSTR.BAT". Also
       be sure to save the files out in "unformatted" ASCII form. A small
       text editor or processor would suit best for this work. You may use
       EDLIN, which is provided with DOS.

       To be real easy about it, you could insert the line in the file
       "PFASBKUP.BAT" as follows: COPY *.DAT A:. "PFASRSTR.BAT" could
       have the line: COPY A:*.DAT. The disadvantage to COPY command
       instead of BACKUP or RESTORE is you will get a "Disk Full" error if

                                       9

       you run out of disk space during the transfer. BACKUP and RESTORE
       utilities allow full usage of disk space on each required
       successive disk until transfer is complete.

                           EPSON PRINTER CONFIGURATION

       You will notice that option #7 on the main menu allows the user to
       configure an Epson or Epson compatible printer. This option uses
       the file "EPSON.EXE" supplied on this disk. You may also use
       "EPSON" outside the P.F.A.S. enviornment if you wish. Read the
       Epson documentation text, EPSON.DOC, for more details about this
       file.


                         HARD DRIVE SYSTEM INSTALLATION

       The file "INSTALL.BAT" is a new file to correctly install the
       necessary files onto the hard drive. Just type "INSTALL HD" from
       the "A:>" prompt with P.F.A.S. program disk #1 inserted in A:
       drive. I tried to make the instructions as simple as I could. If
       you have any questions, you may call me at the phone number listed
       above and ask for Phil.

                        FLOPPY DRIVE SYSTEM INSTALLATION

       If you would like to make a bootable disk exclusively for the
       P.F.A.S. program files, format and pass the system over to a new
       disk. To do this, put a new disk in drive B: and your DOS system
       disk in drive A: and type at the "A:>" prompt: 'FORMAT/S B:' (See
       your DOS manual if in question.) After you have formatted and
       transferred the system to your new disk then label the new
       formatted disk as #A-PFAS PROG. (The installation procedure,
       "INSTALL" will refer to this disk name later.)

       An optional tip to make things more convenient, create the file
       "AUTOEXEC.BAT" on the #A-PFAS DOC by typing at the B:> prompt,
       'COPY CON AUTOEXEC.BAT '.

       With the cursor waiting, type in the following:
       (It is given that you press the "Return" Key after each line.)

       CLS
       DATE
       TIME
       PFAS

       The last keystroke will be a 'CTRL Z'. Hold down the 'CTRL' key and
       then press the 'Z' key. This will copy the above instructions to
       the file "AUTOEXEC.BAT". What this does is upon immediate boot, the
       screen will be cleared or blanked, it will prompt you for the date,
       time and then will run the P.F.A.S. program automatically for you.

       To start the installation for floppy drive systems, insert the
       original P.F.A.S. Disk #1 and type "INSTALL FL" at the "A:>" prompt
       and follow its instructions.

       NOTE: In a TWO FLOPPY DRIVE SYSTEM, putting the expenditure report
       in option #4 to the screen from the main menu may be limited and
       you may get a "Disk Full" error. If that is the case, you will have
       to print the report direct to the printer.


                                      10

       If however, you have a 5 1/4" or 3 1/2" high capacity floppy drive,
       there should be no limitations to any function. Also with the high
       capacity drive, the file "90SAMPLE.DAT" and the other ".DAT" files
       could be copied to the same program disk as well, eliminating a
       need for drive B:, depending on data storage requirements.

                                FAMOUS LAST WORDS

       I cannot guarantee that you will not run into a program error or
       "bug". Even commercial programs have a bug or two. However, you can
       be assured that every precaution has been taken to minimize any
       catastrophic errors. I would appreciate any word on these "bugs" if
       and when they occur. That way, we all can benefit. Please include
       the situation in which the error occured and the error window
       information. I have discovered all of the real major problems.
       However, please exercise all file keeping protective practices. One
       of which I can't say enough about; maintain backup data files!

       I would advise that you practice all options on the sample file,
       "90SAMPLE.DAT", to get a full understanding of its operation before
       you actually create your own database. GOOD LUCK!

                        TELEPHONE ASSISTANCE AND SUPPORT

       If you have any questions about anything that has been discussed in
       this documentation or other questions including "DOS", you may give
       me a call at 602-997-8894. If you give me your phone number, I then
       can call you right back. That's about as close to an 800 number
       service that I can get.(Registered users only, please?). All
       international calls, are on there own nickel! If you would like to
       write, use the address on page 1 of this "doc".


                                  NEXT RELEASE

       Version 2.0 + will include the ability to print checks, facilitate
       other fiscal years as well as the calendar year, provide HELP
       screens, and include more than one account in the expenditure
       reports. Be assured that we will continue to keep SIMPLICITY as
       its prime directive for the new computer enthusiast. All data from
       previous releases of PERSONAL FINANCIAL ACCOUNTING SYSTEM will be
       completely forward compatible.

                                  DISCLAIMER

       PC SOFT-E made a sincere effort to ensure the accuracy of the
       material described herein; however, PC SOFT-E makes no warranty,
       expressed or implied, with respect to the quality, correctness,
       reliablity, currentness, accuracy, or freedom from error of this
       document or the products it describes. PC SOFT-E makes no
       representation or warranty with respect to the contents hereof and
       specifically disclaims any implied warranties of fitness for any
       particular purpose. PC SOFT-E disclaims any liability for any
       direct, indirect, incidental or consequential, special or exemplary
       damages resulting from the use of the information in this document
       or from the use of any products described in this document. Mention
       of any product does not constitute an endorsement by PC SOFT-E of
       that product. Data used in examples and sample files are intended
       to be fictional. Any resemblance to real persons or companies is
       coincidental.


                                       11


```
{% endraw %}

## REVIEW.TXT

{% raw %}
```
            REVIEW OF PERSONAL FINANCIAL ACCOUNTING SYSTEM (P.F.A.S.)

       PERSONAL FINANCIAL ACCOUNTING SYSTEM version 1.9 is a small
       business/personal checkbook manager designed to make bank
       auto-reconciliation absolutely painless. PERSONAL FINANCIAL
       ACCOUNTING SYSTEM provides the necessary information to get
       through any bank reconciliation statement. It can handle up to
       1000 transactions in one file for the full year. You can have as
       many as 20 working account data files in each hard drive
       subdirectory or floppy disk. An outstanding feature lets you define
       up to ten different customized charts to properly categorize all
       your transactions for reports. This is very much like a chart of
       accounts in a general ledger. Each transaction can then be included
       in a neatly detailed expenditure report according to the nature of
       the expenditure for any date specified fiscal period within the
       year. This is a strong plus at tax time and for budget purposes.
       You also have the full ability to edit, insert new or delete
       current transactions and sort your transactions by Date,
       Check#/Deposit, Issued To and even by $Amount. The current balances
       are posted at the top of the screen to let you know how any
       transaction has affected your bottom line at anytime, any place in
       the file.

       P.F.A.S. offers just enough, clear instructions to get any beginner
       user off the ground quickly in computing. The program has enough
       structure in it to guide any newcomer in computing through the
       program without confusion or puzzlement but not "boging" down the
       experienced end user. The screens look very similiar to many DBASE
       programs in their style of screen prompting which are the least
       ambiguous of any screens used. The screens switch to monochrome or
       color automatically when using Hercules, MDA, mono adapters or CGA,
       EGA or VGA color adapters.

       The program can search out transactions by date, check number, or
       by the nature of the expenditure by its "issued to" contents. If
       you search out by "issued to", it will list on the screen and/or
       printer all like transactions and sum the amounts at the bottom of
       screen again within any specified fiscal period within the year.
       This is useful if you would like an "on the spot" glance of a
       category expenditure without printing the expenditure report.

       Transactions can be listed to screen only and printer too by
       transaction to transaction number, date to date or total
       transactions in file.

       Comments include:

       "The sorts are fast"

       "Easy access to data by variety of options"

       "P.F.A.S. has the potential of managing simple or complex needs"

       "Great for business or personal checking"

       "Tidy program that leaves no assumptions about the user"

       "Good, quick screen action"

       "P.F.A.S. leaves you feeling in complete control of your finances"


                                   Review Pg.1

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2476

     Volume in drive A has no label
     Directory of A:\

    PRINTDOC BAT       149   6-20-90  10:56p
    PFAS     DOC     40346  10-10-90   3:36a
    EPSON    DOC      1275   6-25-90   2:55p
    UPDATE   FIX      7298  10-11-90   5:40a
    REGISTER FRM      1876  10-06-90   6:20p
    FILE     TXT      5516  10-11-90   7:26a
    REVIEW   TXT      3224  10-11-90   5:13a
    READ     ME        732  10-06-90   6:21p
    GO       BAT        38   8-22-88   3:06p
    GO       TXT      1540   1-01-80   9:18a
    90SAMPLE DAT      4500  10-09-90  10:13a
    FILE2476 TXT      2665  10-31-90   5:10p
           12 file(s)      69159 bytes
                           87552 bytes free
