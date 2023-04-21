---
layout: page
title: "PC-SIG Diskette Library (Disk #901)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0901/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0901"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "PC-BOOKS - FINANCIAL SOFTWARE"

    PC-BOOKS is a menu-driven general ledger program for small businesses,
    designed so you can convert a manual system to a computerized system
    with minimal effort.
    
    Standard financial reports, including journals, balance sheets, income
    statements and general ledgers, are simple to produce.  The number of
    accounts and transactions are limited only by disk space and each
    transaction can have up to 14 accounts.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES901.TXT

{% raw %}
```
Disk No  901
Program Title:  PC-BOOKS version 1.20
PC-SIG version 1.1

PC-BOOKS is a menu-driven general ledger program designed with the small
business in mind.  It is designed so you can convert a manual system to a
computerized system with minimal effort.  The user of this program must know
how to manually post journal entries.  You may add the number of accounts
and transactions, limited only by disk space, and new accounts, without
interrupting the input of transactions.  The total number of accounts and
journal entries are limited only by disk space.

PC-BOOKS is divided into two subprograms:  PC-BOOK1 and PC-BOOK2.  PC-BOOK1 is
used to set up and update a chart of accounts and entering transactions.  PC-
BOOK2 is for creating standard financial reports including journals, balance
sheets, income statements, and general ledgers.

Usage:  Financial.

System Requirements:  Two disk drives.

How to Start:  Type GO (press enter).

Suggested Registration:  $30.00

File Descriptions:

PC-BOOK1 EXE  Program for account set up and transactions.
PC-BOOK2 EXE  Program for producing financial reports.
READ     ME   How to get started.
PC-BOOKS PRT  Listing of reports for sample problem.
PC-BOOKS DOC  Documentation.

PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987,88 PC-SIG Inc.

```
{% endraw %}

## PC-BOOKS.DOC

{% raw %}
```












                       ********************************* 
                       *                               * 
                       *            PC-BOOKS           * 
                       *            ========           * 
                       *        by Barry Edelman       *
                       *                               *
                       *          Version 1.20         *
                       *            May 1987           *
                       *                               * 
                       ********************************* 


































                    (C) Copyright 1986, 1987 by EDELMAN INC. 
                    ---------------------------------------- 











                                    PC-BOOKS 
                              PROGRAM DISTRIBUTION 
                              ==================== 

       The PC-BOOKS programs and this on-disk documentation can be
       freely copied and shared with others as long as there are no
       modifications made to any of the files and no fee is charged.
       The complete printed hardcopy reference manual for PC-BOOKS may
       not be copied without permission from EDELMAN INC. 

       You are encouraged to try the program before you buy it.  If you
       find that the program is helpful to you, a small fee should be
       sent to the author.  The current fee and address is shown on the
       monitor when the PC-BOOKS programs are run. 

       This unique marketing approach has several advantages. 

           - The price of these programs can be kept low by minimizing
             the costs of marketing, distributing, advertising and copy
             protecting. 

           - Software authors can be supported by users and continue to
             develop low cost useful programs. 

           - Programs can be tried before being purchased. 

       If you have already paid for PC-BOOKS, I thank you for your
       support.  If you are benefiting from the use of PC-BOOKS, and
       have not yet sent in the fee, I request your support.  Upon
       receipt of the fee, you will become a registered user.  Future
       versions of PC-BOOKS and a complete printed Reference Manual with
       more than 100 pages describing all the features of PC-BOOKS will
       be sent to registered users.  Information on the Reference
       Manual, updates and fees appear on the monitor when the PC-BOOKS
       programs are run. 




       BARRY EDELMAN 
       May 1987 

























                                  INTRODUCTION 
                                  ============ 

       PC-BOOKS is an easy to learn and easy to use general ledger
       program.  It is designed for a small business that is either
       starting a computerized accounting system or wishes to convert
       from a manual system to a computerized system with a minimum of
       effort.  In order to use this program no prior knowledge of
       computer accounting systems is needed.  However, the user of this
       program must know how to manually post journal entries. 

       Some of the major advantages of PC-BOOKS are listed below: 

         - Menu driven. 

         - Easy to learn and use. 

         - Number of accounts and transactions limited only by disk
           space. 

         - No complicated system of account codes to memorize.
           Alphabetic as well as numeric account codes are allowed. 

         - New accounts can be added without interrupting input of
           transactions. 

         - On screen, easy to understand error messages with suggested
           corrections. 

         - Up to 14 accounts allowed in each transaction. 

         - Easy to create standard financial reports. 

         - Full screen editing 

         - Automatic monthly or weekly transactions. 

         - Easy copying of similar transactions. 

       Two files containing menu driven programs are included in
       PC-BOOKS.  PC-BOOK1.EXE allows the user to input the chart of
       accounts and the journal entries in a simplified manner.
       PC-BOOK2.EXE is used to create standard financial reports
       including balance sheets, income statements, and general ledgers. 

       This on-disk documentation contains a breif summary of the major
       features of PC-BOOKS.  For more complete information, see the
       Reference Manual available to registered users. 

       The following tutorial provides the easiest way to learn how to
       use the major features of PC-BOOKS and see the power of the
       programs.  I urge you to take the time to follow the
       keystroke-by-keystroke directions.













                      LEARNING TO USE PC-BOOKS: A TUTORIAL
                      ====================================

       This tutorial should be read while sitting at your computer and
       following along with the instructions.  In this sample, an overly
       simplified set of books will be prepared step by step for a
       fictitious corporation, Xyz Consulting, for a single month.  Only
       some of the features of PC-BOOKS are used in this example.
       However, if you take the time to follow these steps exactly as
       shown, you will get a basic idea of how to use the programs. 

       SYNTAX 
       ------ 

       The following conventions will be used to describe keyboard input
       in this example. 

       (1) Items in curly brackets, { }, should be typed exactly as
           shown.   

       (2) Special control keys are shown in square brackets, [ ].  If
           two keys are shown separated by a comma within a single set
           of square brackets, the key listed first should be pressed
           and while that key is held down the second key should be
           pressed.

       For this example, let us assume that the list below is a
       complete list of accounts along with the four character codes
       which identify each account.  For your accounting system you can
       chose any four character codes that you like to represent your
       accounts.  A real corporation will obviously have many more
       accounts but this list has been kept small to keep the example as
       simple as possible. 

            Type                   Name                          Code

            Current asset(CA)      Bank                          BANK
                                   Receivables - Company A       RECA
                                   Receivables - Company B       RECB
            Noncurrent asset(NA)   Plant and equipment           PLNT 
            Current liability(CL)  Accounts payable              PAYA
            Equity(OE)             Invested capital              CAPT 
                                   Retained earnings                  
            Revenue(RV)            Consulting fees               FEES 
            Expenses(EX)           Rent                          RENT

       Notice that a code is not given for the Retained earnings
       account.  The program initially sets RETE as the code for
       retained earnings.  The code for retained earnings can be
       changed later.  In addition to the above, you would like to
       combine the receivables (the accounts with the codes RECA and
       RECB) for reporting on the balance sheet.  To do this you will
       define a group account named Total receivables with the code
       RECT. 












       The following table lists the starting account balances as of
       January 1, 1986 for Xyz Consulting. 

            ACCOUNT                                STARTING BALANCE 

            Bank                                   $ 3,000  Debit
            Receivables - Company A                $ 4,000  Debit
            Receivables - Company B                $ 2,000  Debit
            Plant and equipment                    $10,000  Debit
            Accounts payable                       $ 4,000  Credit
            Invested capital                       $ 8,000  Credit
            Retained earnings                      $ 7,000  Credit

       During January 1986, the only financial activities are the
       receipts of payments of $150 for consulting fees on each Monday
       of the month and a $410.15 payment on January 15 for office rent. 

       Try to follow the steps below exactly as shown.  If you make a
       mistake while inputting the data see the Guide To Control Keys
       for information on editing the input.  If you can not correct the
       problem, simply erase the data files (JOURNAL.DAT AND
       ACCOUNTS.DAT) and try again.  No harm will have been done. 

       PRELIMINARY STEPS 
       ----------------- 

         (1) Using the DOS diskcopy command copy the PC-BOOKS diskette
             to a backup diskette.  Keep the original diskette in a safe
             place and use the backup diskette.  See your operating
             system manual for information on the use of diskcopy. 

         (2) Place the backup diskette that you have just made into the
             default drive.  If you have a hard disk system, copy
             PC-BOOK1.EXE and PC-BOOK2.EXE onto the current directory on
             the hard disk. 

             See your operating system manual for information on
             starting the DOS operating system. 

         (3) From the operating system prompt, type {PC-BOOK1} and press
             [ENTER] to start the program. 

         (4) A message will appear on the monitor.  After reading this
             message press any key to continue the program. 

         (5) If you have run PC-BOOK1.EXE before and JOURNAL.DAT is on
             the default drive/directory, follow the instructions in the
             section SETTING UP A CHART OF ACCOUNTS below.  This step
             and the following steps (6) and (7) will be skipped. 

             If this is the first time that you are using PC-BOOK1.EXE,
             a message will appear stating that the file JOURNAL.DAT can
             not be found.  Type {C} and press [ENTER] to create and
             initialize JOURNAL.DAT. 












         (6) You will be asked whether you would like the option of
             being able to delete journal entries after they are
             entered.  For the purposes of this tutoruial only, let us
             assume that you would like to allow deletions.  Type {D}
             and press [ENTER]. 

         (7) Press any key to continue.  The main menu for PC-BOOK1 will
             appear on the screen. 

       SETTING UP A CHART OF ACCOUNTS 
       ------------------------------ 

         (1) From the PC-BOOK1 main menu, type {U} and press [ENTER] to
             work on the file ACCOUNTS.DAT which contains the chart of
             accounts.  

         (2) Type {A} and press [ENTER] to add accounts to the chart of
             accounts.  A template will appear on the screen with
             reverse video areas for CODE, TYPE, DESCRIPTION, GROUP, and
             REFERENCE. 

         (3) Group accounts must be defined before accounts which are
             members of that group account are defined.  Therefore set
             up the group account Total receivables first.  

         (4) Type {RECT} in the space below the word CODE and press
             [ENTER].  You have defined the characters RECT as the code
             which will represent the account Total receivables.  

         (5) Type {CA} in the space below the word TYPE and press
             [ENTER].  This will identify the account Total receivables
             as a current asset. 

         (6) Type {Total receivables} in the space below the word
             DESCRIPTION and press [ENTER]. 

         (7) Type {****} in the space below the word GROUP and press
             [ENTER].  The characters **** define an account as a group
             account. 

         (8) Press [ENTER] to leave the reference field blank. 

         (9) At this point the account Total receivables has been
             entered into the chart of accounts and a blank template
             will appear on the screen. 

        (10) Repeat steps (4) through (8) for each account of Xyz
             Consulting shown at the beginning of this chapter.  See the
             section ACCOUNT TYPES below for the characters to be input
             for each account under the word TYPE.  For the accounts
             Receivables - Company A (RECA) and Receivables - Company B
             (RECB), type {RECT} under the word GROUP to indicate that
             these accounts belong to the group account Total
             receivables.  For all other accounts, leave the fields
             under the word GROUP and under the word REFERENCE blank by
             pressing [Ctrl,End] after typing the account DESCRIPTION.










             The following keystrokes will enter the other accounts into
             the chart of accounts: 

             Type {BANK}, press [ENTER], type {CA}, press [ENTER], type
             {Bank}, and press [Ctrl,End]. 

             Type {RECA}, press [ENTER], type {CA}, press [ENTER], type
             {Receivables - Company A}, press [ENTER], type {RECT},
             press [ENTER], and press [ENTER] again. 

             Type {RECB}, press [ENTER], type {CA}, press [ENTER], type
             {Receivables - Company B}, press [ENTER], type {RECT},
             press [ENTER], and press [ENTER] again. 

             Type {PLNT}, press [ENTER], type {NA}, press [ENTER], type
             {Plant and equipment}, and press [Ctrl,End]. 

             Type {PAYA}, press [ENTER], type {CL}, press [ENTER], type
             {Accounts payable}, and press [Ctrl,End]. 

             Type {CAPT}, press [ENTER], type {OE}, press [ENTER], type
             {Invested capital}, and press [Ctrl,End]. 

             Type {FEES}, press [ENTER], type {RV}, press [ENTER], type
             {Consulting fees}, and press [Ctrl,End]. 

             Type {RENT}, press [ENTER], type {EX}, press [ENTER], type
             {Rent}, and press [Ctrl,End]. 

        (11) Press [Esc] to return to the menu choices for UPDATE
             ACCOUNTS. 

       LISTING THE CHART OF ACCOUNTS 
       ----------------------------- 

       The following steps decribe how to list the accounts which you
       have just input into the chart of accounts. 

         (1) From the UPDATE ACCOUNTS menu, type {L} and press [ENTER]
             to choose listing of the chart of accounts. 

         (2) The next menu asks how you would like to list the chart of
             accounts.  Type {A} and press [ENTER] to list accounts
             alphabetically. 

         (3) You will be asked where to start the listing of accounts.
             Press [ENTER] to choose the default of listing all the
             accounts. 

         (4) Next you will be asked whether you would like to save the
             listing on a file.  Press [ENTER] to choose the default of
             not saving the listing to a file. 














         (5) You should see the following listing of the chart of
             account on the screen. 

          CODE  TYPE  DESCRIPTION                     GROUP  REFERENCE
          BANK   CA   Bank
          CAPT   OE   Invested capital
          FEES   RV   Consulting fees
          PAYA   CL   Accounts payable
          PLNT   NA   Plant and equipment
          RECA   CA   Receivables - Company A         RECT
          RECB   CA   Receivables - Company B         RECT
          RECT   CA   Total receivables               ****
          RENT   EX   Rent
          RETE   OE   Retained earnings

         (6) Press [Esc] twice to return to the PC-BOOK1 main menu.

       ENTERING TRANSACTIONS 
       --------------------- 

         (1) From the PC-BOOK1 main menu, type {J} and press [ENTER] to
             work on journal entries. 

         (2) From the JOURNAL ENTRIES menu, type {I} and press [ENTER]
             to start the insert mode. 

         (3) The journal entry template will appear on the screen.  The
             template contains a line with a reverse video field for a
             date and two lines with reverse video fields for the
             account code, indication of debit or credit, the dollar
             amount, and a number.  Near the bottom of the screen there
             is a reverse video field for a comment. 

         (4) The first journal entry that you will input sets up the
             starting account balances.  (Starting account balances are
             input only once.  Afterwards, account balances are
             automatically passed from one period to the next.) 

         (5) Type {1/1/86} and press [ENTER] to record the date of the
             transaction. 

         (6) Type {BANK}, press [Tab], type {D}, press [Tab], type
             {3000}, and press [ENTER] to indicate a debit of $3000 to
             the account Bank. 

         (7) Repeat step (6) for each of the accounts with a starting
             balance on January 1,1986 as shown in the table earlier in
             this chapter.  Remember to type a {D} in the second field
             of each line to indicate a debit balance or a {C} in that
             field to indicate a credit balance.  After the first two
             lines of account information have been input, the program
             will automatically add a new line to receive more data.
             The following keystokes take care of the other accounts
             involved in this transaction. 

             Type {RECA}, press [Tab], type {D}, press [Tab], type
             {4000}, and press [ENTER]. 









             Type {RECB}, press [Tab], type {D}, press [Tab], type
             {2000}, and press [ENTER]. 

             Type {PLNT}, press [Tab], type {D}, press [Tab], type
             {10000}, and press [ENTER]. 

             Type {PAYA}, press [Tab], type {C}, press [Tab], type
             {4000}, and press [ENTER]. 

             Type {CAPT}, press [Tab], type {C}, press [Tab], type
             {8000}, and press [ENTER]. 

             Type {RETE}, press [Tab], type {C}, press [Tab], type
             {7000}, and press [ENTER]. 

         (8) Press [End] to move to the comment field. 

         (9) Type {Starting account balances} to indicate the reason for
             the journal entry. 

        (10) Press [Ctrl,End] to signify that the journal entry is
             complete. 

        (11) If you have not made an error, a new menu will appear above
             the journal entry template with choices for INSERT, WEEKLY,
             MONTHLY and REVERSE.  Type {I} and press [ENTER] to insert
             this transaction into the journal. 

        (12) The screen will be cleared and a new journal entry template
             will appear on the screen.  The following keystrokes will
             result in a journal entry for the payment of rent. 

             Type {1/15/86}, press [ENTER], type {BANK}, press [Tab],
             type{C}, press [Tab], type {410.15}, press [ENTER], type
             {RENT}, press [Tab], type {D}, press [Tab], type {410.15},
             press [End], type {January rent}, press [Ctrl,End].

        (13) Type {I} and press [ENTER] to insert this transaction into
             the journal. 

        (14) The screen will be cleared and a new journal entry template
             will appear on the screen.  The following keystrokes will
             record an entry for receipt of consulting fees. 

             Type {1/6/86}, press [ENTER], type {BANK}, press [Tab],
             type {D}, press [Tab], type {150}, press [ENTER], type
             {FEES}, press [Tab], type {C}, press [Tab], type {150},
             press [End], type {Retainer fees}, press [Ctrl,End]. 

        (15) In response to the menu which appears above the journal
             entry template, type {W} and press [ENTER] to indicate that
             this journal entry is to be repeated weekly.  

        (16) A new line will appear above the journal entry template
             with reverse video fields for the initial and ending dates
             for the weekly entries.  Type {1/6/86}, press [Tab], type
             {1/31/86}, press [ENTER] to record this journal entry on
             January 6, 13, 20 and 27. 








        (17) A new journal entry template will appear on the screen.
             Press [Esc] three times to return to the operating system. 

             Note that the MODIFY mode, which simplifies transaction
             input, has not been used in this tutorial.  Please see the
             Reference Manual for information on the MODIFY mode. 

       CREATING FINANCIAL REPORTS 
       -------------------------- 

         (1) From the operating system prompt, type {PC-BOOK2} and press
             [ENTER] to start the program. 

         (2) A message will appear on the monitor.  After reading this
             message press any key to continue the program. 

         (3) From the main menu of PC-BOOK2, you choose the reports
             which you would like to produce.  Type {A} and press
             [ENTER] to create all of the reports: journal, balance
             sheet, income statement and general ledger. 

         (4) You will be be prompted for a title which will be printed
             on the top of all the financial reports.  Type {Sample
             problem for PC-BOOKS} and press [ENTER]. 

         (5) You will be prompted for the date at which to start the
             accounting period.  Type {1/1/86} and press [ENTER]. 

         (6) An error message will appear stating that the file
             BG010186.DAT can not be found.  You will be asked to change
             the start date or if all the accounts are to start with
             zero balances.  For now, ignore the message, type {Z} and
             press [ENTER]. 

         (7) You will be prompted for the ending date of the accounting
             period.  Type {1/31/86} and press [ENTER].

         (8) The next prompt is for the number of lines per page on your
             printer.  The default is 66 lines per page.  If you are
             using stantard ll inch paper, press [ENTER] to accept the
             default.  If you have a different length paper, type in the
             number of lines you would like between page breaks and then
             press [ENTER]. 

         (9) You will be asked whether or not you would like to close
             the revenue and expense accounts on the ending date of the
             accounting period.  The default is no.  For this example
             type {Y} and press [ENTER] to close accounts.

        (10) The last prompt asks whether you would like to create a
             file with starting values for the next period.  The default
             is yes, however for this example type {N} and press
             [ENTER].  At any time before you have completed this step,
             you can go back to the previous prompt by pressing the [Up
             arrow] key.











        (11) A message will apppear on the screen stating that the
             financial reports are being created.  When the reports are
             finished, PC-BOOK2 ends and control is returned to the
             operating system.

        (12) Four new files have been created by PC-BOOK2.  These files
             are JOURNAL.PRT, INCOME.PRT, BALANCE.PRT, and LEDGER.PRT.
             These files are standard ascii files and can be viewed on
             the screen by using the DOS type command.  For example, to
             see the balance sheet on the screen type {TYPE BALANCE.PRT}
             and press [ENTER]. 

        (13) To print any of these files, use the DOS copy or print
             command.  Print each of the FINANCIAL REPORTS.  

             Type {COPY JOURNAL.DAT PRN} and press [ENTER] 

             Type {COPY INCOME.DAT PRN} and press [ENTER] 

             Type {COPY BALANCE.DAT PRN} and press [ENTER] 

             Type {COPY LEDGER.DAT PRN} and press [ENTER] 

        (14) Compare the reports that you have produced in step (13)
             with the reports for the sample problem provided.  If there
             are differences, review this tutorial to find the errors.
             If the reports match you are ready to do your own set of
             financial books.






































                             GUIDE TO CONTROL KEYS 
                             ===================== 

       This list tells which keys to use to move the cursor and edit.
       If two keys are shown together separated by a comma, the key
       listed first should be pressed and while that key is held down
       the second key should be pressed. 

       In most cases there are two ways to get the same results. 

          Key(s) to    Alternative   Results
          press        method
          ---------    -----------   -------

          Esc                        Return to the previous menu.

          Ctrl,->      Tab           Cursor to beginning of next field.

          Ctrl,<-      Shift,tab     Cursor to beginning of previous field.

          Up arrow     F7            Cursor up one line.

          Down arrow   F9            Cursor down one line.

          ENTER                      For full screen input, cursor to
                                     beginning of next line.
                                     For single line input, cursor to
                                     beginning of next field.

          End          F8            For full screen input, cursor to
                                     beginning of next section.
                                     For single line input, cursor to
                                     beginning of next field.

          Ctrl,End     F10           Entry is completed.

          Del          F4            Delete character at the cursor.

          Ins          F3            Toggles insert mode.

          Backspace                  Deletes the character one space to the
                                     left of the cursor.

          ->           F6            Cursor one space to the right.

          <-           F5            Cursor one space to the left.




















                              HELPFUL INFORMATION 
                              =================== 

       USE OF MENUS 
       ------------ 

       A menu choice is made by typing the letter shown next to the
       desired option and then pressing the ENTER key.  Either upper or
       lower case letters are acceptable.  Pressing the backspace key
       will erase the previously selected letter. 


       DATES 
       ----- 

       All dates must be entered in the format of mm/dd/yy, where mm,
       dd, and yy represent the month, day and year respectively.
       05/01/86 and 5/1/86 are valid inputs for dates.  05-01-86 is
       invalid and will not be accepted by the program. 
        
       ACCOUNT TYPES 
       ------------- 

       The following table shows the codes which are used to
       represent each of the classes of accounts.  

            CODE              ACCOUNT TYPE

            CA                Current asset
            NA                Noncurrent asset
            CL                Current liability
            NL                Noncurrent liability
            OE                Equity
            RV                Revenue
            EX                Expense
            CN                Contra

       FILES 
       ----- 

       The programs for PC-BOOKS are contained in the files PC-BOOK1.EXE
       and PC-BOOK2.EXE.  The data for PC-BOOKS are contained in the
       files ACCOUNTS.DAT and JOURNAL.DAT.  STARTING VALUES files
       contain data carried from one run of PC-BOOKS to another.  Files
       with the extension .PRT are created by PC-BOOKS and contain
       information to be printed.  In addition there are temporary files
       which are created and then erased by the programs of PC-BOOKS. 

       Except where specifically noted, all PC-BOOKS files should be on
       the default drive/directory.  In the tutorial described above,
       it is assumed that all files are on the default drive/directory. 















       SIZE AND TIME LIMITS 
       -------------------- 

       The total number of accounts and journal entries are each limited
       to 32,766.  The accounts and journal entries are also limited by
       the size of the disk.  

       With all options chosen simultaneously, a double sided diskette
       with 360,000 bytes will easily handle a set of books where the
       sum of the number of accounts and the number monthly transactions
       is 350.  Several simple ways in which the effective capacity of a
       double sided diskette can be doubled or tripled are illustrated
       in Appendix B of the Reference Manual.  With a hard disk the
       number of accounts and journal entries is virtually unlimited. 

       While inputting accounting information, there will be no
       noticeable delay.  However, the time required to create reports
       is highly dependent on the type of disk in use.  As an example,
       the writing of reports for the tutorial shown above is 133
       seconds, 46 seconds, and 11 seconds using a floppy disk, hard
       disk and RAM disk respectively.  If the time required to produce
       reports is critical, an inexpensive RAM disk program should be
       used in conjunction with PC-BOOKS. 











































                              SUMMARY OF PROGRAMS 
                              =================== 

       PC-BOOKS consists of two files and three major programs.  The
       file PC-BOOK1.EXE contains the programs UPDATE ACCOUNTS and
       JOURNAL ENTRIES.  The file PC-BOOK2.EXE contains the program
       FINANCIAL REPORTS. 

       The program UPDATE ACCOUNTS is used to define, change, and report
       the accounts contained in the chart of accounts.  UPDATE ACCOUNTS
       is divided into ADD, MODIFY and LIST modes 

       The program JOURNAL ENTRIES is used to record financial
       transactions into a journal.  JOURNAL ENTRIES is divided into
       INSERT and MODIFY modes. 

       The program FINANCIAL REPORTS is used to produce files which
       contain the standard financial reports.  These reports include
       journals, general ledgers, income statements and balance sheets. 

       UPDATE ACCOUNTS 
       --------------- 

       The ADD mode is used to define accounts which have not been
       previously included in the chart of accounts. 

       The MODIFY mode is used to change an account which has previously
       been defined.  There are several restrictions which limit the
       changes that can be made in the MODIFY mode.

       The LIST mode is used to list the information contained in the
       chart of accounts.  The accounts can be listed in alphabetical
       order, by account type, or by groups. 

       JOURNAL ENTRIES 
       --------------- 

       When this program is called, a transaction template is provided
       for information defining a journal entry.  The control keys are
       used to move the cursor and edit the transaction template. 

       The total number of debits and credits are limited to fourteen.
       If a larger number of accounts are involved in a single
       transaction, the transaction should be split into two entries.
       Up to 3 lines of description are allowed for each entry.   

       To a limited extent new account codes can be defined in the
       JOURNAL ENTRIES section without moving to the UPDATE ACCOUNTS
       section.  If a new account code is input, the user will be
       prompted for further information.

       After the transaction template has been completed, the entry can
       be input in several different ways.  It can be entered one time
       only.  The journal entry can also be recorded repeatedly every
       week or every month for a specified time span.  There is also an
       option to reverse all debits and credits.  This option can be
       useful to correct a previously recorded incorrect entry. 









       Entries closing revenue and expense accounts should NOT be
       entered.  This will be done automatically, if requested. 

       In the INSERT mode a blank template is shown on the monitor and
       you must type in all the necessary information.   

       The MODIFY mode is used to make an entry similar to a previous
       entry.  You save time by only typing the differences from a
       previous entry. 

       The previous entry can be found by specifying the date or by
       scrolling forward or backwards.  Once the desired entry is found,
       the control keys can be used to move the cursor and edit the
       template. 


       FINANCIAL REPORTS 
       ----------------- 

       The FINANCIAL REPORTS program is used to choose and create the
       standard financial reports.  For each report an ASCII file with
       the extention .PRT will be created.  These can be viewed on the
       monitor or printed using the DOS commands TYPE and PRINT
       respectively.  Any combination of the following financial reports
       can be selected.

             FINANCIAL REPORT           ASCII FILE
             ----------------           ----------
             Journal listing            JOURNAL.PRT
             Income statement           INCOME.PRT
             Balance sheet              BALANCE.PRT
             General ledger             LEDGER.PRT

       After selecting the desired financial reports the user will be
       prompted for additional information. 

       The response to the TITLE prompt will be printed at the top of
       each page of all reports. 

       The dates given in response to the BEGIN DATE and END DATE
       prompts specify the time frame for which journal entries will be
       processed.  For example, if reports for the month of May 1986 are
       desired, {05/01/86} and {05/31/86} should be typed in response to
       the START DATE and END DATE prompts respectively. 

       In most cases a STARTING VALUES file should be on the default
       drive/directory.  The first time that FINANCIAL REPORTS are run,
       there will be no STARTING VALUES file and starting account
       balances should be input as a journal entry.  This is illustrated
       in the tutorial.  For a complete explanation of STARTING VALUES
       files see the chapter FINANCIAL REPORTS in the Reference Manual. 

       The lines per page prompt is used to determine paging on the
       financial reports. 












       The default on the CLOSE EXPENSE AND REVENUE ACCOUNTS prompt is
       No.  This should be the usual response.  The last prompt asks
       whether to CREATE FILE WITH STARTING VALUES FOR NEXT TIME PERIOD.
       The default and normal response to this prompt should be Yes.
       PC-BOOKS provides a great deal of flexibility in the time frames
       of reports that can be produced by varying responses to these
       last two prompts.  For a full discussion of these prompts see the
       Reference Manual. 


























































                             AND NOW THE COMMERCIAL 
                             ====================== 

       This on-disk documentation, although only a brief summary, should
       contain enough information to enable you to use many of the
       features of PC-BOOKS.  A hardcopy of the full PC-BOOKS Reference
       Manual containing over 100 pages and describing and explaining
       all the features of PC-BOOKS will be sent to registered users.
       Information on the registration fee, the Reference Manual and
       program updates appear on the monitor when either of the PC-BOOKS
       programs are run.

       Again, I would like to request that you send the fee which is
       also shown on the monitor when the PC-BOOKS programs are run.
       Remember that unless you send a check to EDELMAN INC., the
       program author has not received payment for this copy of
       PC-BOOKS. 



















































                              PC-BOOKS VERSION 1.20
                                REGISTRATION FORM
                              =====================


                NAME           ____________________________________


                ADDRESS        ____________________________________


                CITY           ____________________________________


                STATE, ZIP     __________________   _______________



       COMMENTS: ___________________________________________________

                 ___________________________________________________

                 ___________________________________________________

                 ___________________________________________________

                 ___________________________________________________

                 ___________________________________________________

                 ___________________________________________________

                 ___________________________________________________

                 ___________________________________________________ 

                 ___________________________________________________ 

        _
       |_| Enclosed is the registration fee of $30.  Please send me the 
           Reference Manual now and the next updated version when
           available.



       Please make check payable to EDELMAN INC.  (specify version 1.20)
       and mail to: 
                  EDELMAN INC.  
                  Dept EE 
                  P.O Box 40175 
                  San Antonio, TX 78229  










```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0901

     Volume in drive A has no label
     Directory of A:\

    PC-BOOK1 EXE     77824   5-22-87   4:53p
    PC-BOOK2 EXE     61568   5-22-87   5:18p
    PC-BOOKS DOC     39236   5-29-87   4:54p
    PC-BOOKS PRT     12498   5-22-87   5:33p
    READ     ME       1046   5-28-87  12:12a
    FILES901 TXT      1369   7-28-88   1:36p
    GO       BAT        38  10-19-87   3:56p
    GO       TXT       617   6-09-88  11:36a
    MANUAL   BAT        24   6-09-88  11:36a
            9 file(s)     194220 bytes
                          121856 bytes free
