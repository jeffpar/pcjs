---
layout: page
title: "PC-SIG Diskette Library (Disk #1302)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1302/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1302"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "HOME BUDGET MANAGEMENT SYSTEM"

    Financial record-keeping, a desirable and enlightening habit to get
    into, is usually a dreaded task and a prime target for procrastination.
    HBMS was created to make it as painless as possible.
    
    HBMS is a double-entry ledger system that helps you set up a chart of
    accounts (such as rent, medical costs, clients, professional services,
    bank interest, office expenses, etc.) into which you post (record) all
    your expenses, income, assets and liabilities. At any time,
    particularly when figuring taxes, you can see your complete financial
    position, readily viewed on screen or printed in a variety of useful
    reports.
    
    Daily financial transactions can be posted to as many as 254 accounts to
    generate monthly and yearly reports showing totals broken down by those
    categories. For instance, how much you spent on auto repair. You pick
    the codes (of one to four letters) for the various accounts, so it is
    relatively easy to remember them when posting entries without having to
    look up numbers, as is required by some ledger systems.
    
    HBMS provides a budgeting function, easy editing for incorrect entries,
    checkbook balancing, and check printing. It can handle 12 separate
    checking accounts and up to 1140 transactions per month.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1302.TXT

{% raw %}
```
Disk No: 1302                                                           
Disk Title: Home Budget Management System                               
PC-SIG Version: S2.2                                                    
                                                                        
Program Title: Home Budget Management System                            
Author Version: 4.11                                                    
Author Registration: $30.00                                             
Special Requirements: Printer.                                          
                                                                        
Financial record-keeping, a desirable and enlightening habit to get     
into, is usually a dreaded task and a prime target for procrastination. 
HBMS was created to make it as painless as possible.                    
                                                                        
HBMS is a double-entry ledger system that helps you set up a chart of   
accounts (such as rent, medical costs, clients, professional services,  
bank interest, office expenses, etc.) into which you post (record) all  
your expenses, income, assets and liabilities.  At any time,            
particularly when figuring taxes, you can see your complete financial   
position, readily viewed on screen or printed in a variety of useful    
reports.                                                                
                                                                        
Daily financial transactions can be posted to as many as 254 accounts to
generate monthly and yearly reports showing totals broken down by those 
categories.  For instance, how much you spent on auto repair.  You pick 
the codes (of one to four letters) for the various accounts, so it is   
relatively easy to remember them when posting entries without having to 
look up numbers, or such, as is required by some ledger systems.        
                                                                        
HBMS provides a budgeting function, an audit trail (if a change is made 
to a past entry, it shows), and checkbook balancing.  It can handle 12  
separate checking accounts and up to 1140 transactions per month.       
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## HBMS.DOC

{% raw %}
```








      ********************************************************************
      ********************************************************************
      **                                                                **
      **                                                                **
      **       $$$    $$$   $$$$$$$    $$$      $$$     $$$$$$          **
      **       $$$    $$$   $$$  $$$   $$$$    $$$$   $$$    $$$        **
      **       $$$    $$$   $$$  $$$   $$$$$  $$$$$   $$$               **
      **       $$$$$$$$$$   $$$$$$$    $$$ $$$$ $$$    $$$$$$$$         **
      **       $$$    $$$   $$$  $$$   $$$  $$  $$$          $$$        **
      **       $$$    $$$   $$$  $$$   $$$      $$$   $$$    $$$        **
      **       $$$    $$$   $$$$$$$    $$$      $$$     $$$$$$          **
      **                                                                **
      **                                                                **
      **                             the                                **
      **                                                                **
      **  H O M E    B U D G E T    M A N A G E M E N T    S Y S T E M  **
      **                                                                **
      **                Version 4.11     December 1989                  **
      **                                                                **
      **                                                                **
      **         Copyright (C) 1988,1989   Brentson L. Worrell          **
      ********************************************************************
      ********************************************************************


           The fastest, easiest, and most flexible system to record 
            and report on most all of your financial transactions. 















                               Brentson L. Worrell
                               6404 Mornay Dr.
                               Tampa, FL   33615
                               (813) 886-2282






               Table of Contents                        page
            ___________________________________________________


               ABOUT SHAREWARE .........................  1
               SYSTEM REQUIREMENTS and LIMITATIONS .....  2
               WHAT IS HBMS and WHAT WILL IT DO? .......  3
                  Sample Data ..........................  3
               HOW DO I GET STARTED and USE HBMS? ......  4
               CONCEPTS ................................  6
               CONVENTIONS (usage) .....................  8



                    MAIN MENU: (detailed descriptions)
             *-----------------------------------------------*
             |                                               |
             |    INITIALIZING NEW YEAR ................ 12  |
             |       Begin New Year .................... 12  |
             |       Initial Balances .................. 12  |
             |                                               |
             |    SETUP UTILITIES ...................... 13  |
             |       Printer Setup ....................  13  |
             |       Adding Color .....................  15  |
             |       Sound effects ....................  15  |
             |                                               |
             |    ACCOUNT MAINTENANCE .................. 16  |
             |                                               |
             |    BUDGET ASSIGNMENT .................... 18  |
             |                                               |
             |    LEDGER POSTING ....................... 19  |
             |       Action Prompt ..................... 21  |
             |       VIEW Ledger ....................... 21  |
             |       EDIT Mode ......................... 21  |
             |       TEMPLATES ......................... 22  |
             |       Printing Checks ................... 23  |
             |       Tips & Shortcuts .................. 24  |
             |                                               |
             |    RECONCILE STATEMENTS ................. 25  |
             |                                               |
             |    REPORTS (screen) ..................... 26  |
             |                                               |
             |    PRINTED REPORTS ...................... 27  |
             |                                               |
             |    FILE EXPORT .......................... 28  |
             |                                               |
             |    CLOSE/OPEN MONTH ..................... 29  |
             |                                               |
             |    CHANGE YEAR/PATH ..................... 29  |
             |                                               |
             *-----------------------------------------------*


             FOR USERS of OLDER VERSIONS(before 3.0) ... 30


                            ABOUT SHAREWARE
                          --------------------
          HBMS is being distributed under the ShareWare concept.  This does 
      not mean it is a free program.  While you may give the program to 
      others and try it out for free, you are expected to pay a $30.00 
      registration fee if you continue to use it.  Registration not only 
      includes support and keeps you abreast of updates, but encourages 
      authors to create and maintain quality software.  If you obtained 
      HBMS from a ShareWare distributor that typically sells disks for $6 
      or less, rest assured than none of that money comes to me. 

          HBMS is constantly being improved.  There are several ways you can 
      obtain a copy of the latest version of HBMS.  

      1.  I will provide a disk and mailer for a media/handling fee of $5 
          for either 5-1/4 inch, or 3-1/2 inch disk.  PLEASE SPECIFY  (This 
          service is not to be considered as part of the registration fee.) 

      2.  Send me your blank floppy in a mailer that can be re-used.
          (PLEASE INCLUDE RETURN POSTAGE)

      3.  Download HBMS directly from my computer.  Since I don't run a 
          bulletin board, you will have to call ahead by voice first so I 
          can set up my communications program on this end. 

      *********************************************************************
      * There is an order form in a file named ORDER.FRM, included in the *
      * HBMS package.  Just copy it to your printer.  ALWAYS MENTION WHAT *
      * VERSION OF HBMS YOU ARE USING IN CORRESPONDENCE.                  *
      *********************************************************************

          Registered users will be notified of major updates or important 
      events.  I feel that I can provide the best support for HBMS by 
      telephone and mail.  Although the latest version of HBMS is always 
      kept on Compuserve and the GEnie network, please don't try to contact 
      me via these services. 

          Please share HBMS with others.  You may give it away for free, as 
      long as you make sure that the package is complete and includes the 
      files listed on the following page. 

          All comments and suggestions are welcome.


      WARRANTY

          The Home Budget Management System (HBMS), is supplied AS IS.  
      There is no warranty of any kind, expressed or implied.  I shall not 
      be held liable for any damages, whether direct or indirect, from a 
      failure of this program to operate in the manner desired by the user. 


                             Brentson L. Worrell
                             6404 Mornay Dr.
                             Tampa, FL   33615
                             (813) 886-2282


                                  - 1 -



      SYSTEM REQUIREMENTS

          IBM PC, or compatible
          DOS 2.0 or later
          320K RAM  (program uses approx. 221K)
          1 disk drive  
          Printer recommended, but full screen reports available

                Printer should be capable of printing 132 columns, 
                such as a dot matrix printer using a condensed font
                (approx. 17 characters per inch). 




      LIMITATIONS

            38 categories
           254 accounts   (38 per category)
            12 reconcilable accounts (checking)
          1148 ledger transactions per month.




      This program is sometimes distributed in an "ARC" or "ZIP" file 
      format named HBMS411.ARC or HBMS411.ZIP.  

      The following files make up the HBMS package: 
      -----------------------------------------------------------
          README.BAT        batch file to display introductory text
          ORDER.FRM         order form for registration and latest version
          WHATSNEW.DOC      new features in version 4.11 and others
          TESTDRIV.DOC      text file with demonstration instructions
          HBMS.DOC          main documentation
          PRCHECK.DOC       documentation file on how to create PRCHECK.HBM.
                            (needed to print checks)
          HBMS.EXE          main program
          HBMS.OVR          overlay for main program
          CATS.84           sample data file
          ACCOUNTS.84       sample data file
          LEDGR-4.84        sample data file

          -------------------------------------------------------------

          HCONVERT.EXE      conversion program for data created from 
                            versions before 3.0.  (available from author
                            and supplied to registered users only)








                                  - 2 -

                   WHAT IS HBMS and WHAT WILL IT DO?
                   -------------------------------------
          HBMS is a means to record your daily transactions and create 
      reports.  Have you ever wondered: "Where did all the money go?".  If 
      you kept track of your finances you would know where it went, and how 
      to handle it better in the future.  Financial record keeping is a 
      desirable and enlightening habit to get into, but it's usually a 
      dreaded task and a prime target for procrastination.  HBMS is 
      designed to help make it as painless as possible. 

          HBMS is fast, easy, and flexible.  You may want to use it as a 
      reference on your entire financial position, or just use it as a 
      check register.  It's easy to keep accurate and complete records of 
      all your financial transactions.  Faithful record keeping and a 
      carefully designed Chart of Accounts will reward you with a variety 
      of useful and informative reports, either on screen or printed in 
      formatted statements.  These reports can help you decide how to 
      better manage your money and the figures will be very welcome when 
      tax time arrives!  

          Along the way, while you are creating this "history" of your 
      finances, HBMS allows you to compare budget goals, and reconcile your 
      checkbook or credit card purchases.  The ability to print checks was 
      introduced in version 4.0.  HBMS will not draw charts or create other 
      graphics, but it does include an export feature to allow other 
      programs to use the data HBMS has recorded. 

          HBMS uses a double entry ledger system.  This concept is 
      explained later, and it's easier than it sounds.  IF YOU ARE NOT 
      CLEAR ON ANY CONCEPT, SEE HOW IT'S HANDLED IN THE SAMPLE DATA. 


                              SAMPLE DATA
                            ---------------
          Supplied  with HBMS you should find three sample data files 
      consisting of CATS.84, ACCOUNTS.84, and LEDGR-4.84.  The "84" 
      extension refers to the year.  I recommend that you first read the 
      rest of this document and then experiment with this data. 

          By running HBMS with this sample data you can easily see what the 
      program has to offer.  You will be able to see the results that can 
      be achieved before you begin your own budget and have to wait for the 
      data to accumulate.  Specify "84" as the year extension to load these 
      files. 

      WARNING:  The current open month in the sample data is April.  In 
      order to keep the program package size down, the ledger transaction 
      files for the first three months are missing.  Since HBMS will not be 
      able to find these ledger files, it will refuse to do some functions 
      associated with these months.  However, all the actual values are 
      stored in the ACCOUNTS.84 file.  

      NOTE:  Before trying to print any of the sample data, go to the 
      printer setup section (start from the Main Menu).  Make a test 
      printout to see if you need to override the default printer commands 
      contained in HBMS.  Printer setup is described later in this document.


                                  - 3 -


                      HOW DO I GET STARTED AND USE HBMS?
                -----------------------------------------------

          This documentation includes sections on CONCEPTS and CONVENTIONS 
      (usage), that you must know to use HBMS.  Following CONCEPTS and 
      CONVENTIONS, is the detailed information about each selection on the 
      Main Menu.  The Ledger Posting and Account maintenance topics are 
      especially important.  

          If you are new to HBMS, I strongly suggest that you read at least 
      through CONCEPTS and CONVENTIONS even before you attempt to use the 
      sample data.  If you have already taken the "test drive", don't forget 
      about the sample data.  It contains examples that can be very helpful 
      when questions arise, or you are unsure about how to do something.  


      NOTE: I have discovered that most of the problems that users have, are 
      associated with (in order of frequency), failure to read the 
      documentation, trying to run HBMS via a DOS shell or menu type 
      program, damaged or incomplete program files, and conflicts with 
      memory resident programs.  Problems with printer setup seems to be the 
      most frequent trouble spot.  I have given extra attention to the 
      printer setup documentation.  Please read it carefully. 


          When you are ready to start your own budget, you will need only 
      HBMS.EXE and its overlay HBMS.OVR.  Both these files should be on the 
      same floppy, or in the same directory.  It's also very important that 
      you run HBMS from the directory that you place the main program.  It's 
      ok for your data files to be located elsewhere since you can tell HBMS 
      where to look via the "data path" mentioned below.  Please do not try 
      to run HBMS from another directory.  Some shell or menu type programs 
      attempt to do this.  HBMS expects to find its support files (those 
      with an extension of ".HBM") in the default directory.  Good examples 
      are the two optional configuration files PRCODES.HBM and COLORS.HBM. 
      These files are created by HBMS via the setup section.  I SUGGEST THAT 
      YOU ACCESS THE PRINTER SETUP TO SEE IF YOU NEED TO MAKE ANY CHANGES 
      FOR YOUR PRINTER, BEFORE PRINTING ANY REPORTS.   

          When you run the program the opening screen will prompt you for 
      the "year of data to load".  Unless your fiscal year is different from 
      the calendar year, enter the last two digits, such as "89" for 1989.  
      Next you will be asked for the "data path".  This tells HBMS where to 
      look for your personal data files.  If your data files are to be in 
      the same directory as the program files, you can leave this field 
      blank.  Otherwise you must describe what disk\directory the data files 
      are in.  IF YOU SPECIFY A SUBDIRECTORY, A TRAILING BACKSLASH ("\") IS 
      REQUIRED. 









                                  - 4 -



      Creating your own Budget System consists of the following basic steps: 

                                                       Main Menu Selection
      --------------------------------------------------------------------
      1.  Run HBMS and "Begin a New Year".                    (INITIALIZE)

      2.  Build your "Chart of Accounts".            (ACCOUNT MAINTENANCE)

      3.  Enter any "Initial Balances" for your Assets and Liabilities.  
          These would be the current balances for your checking, savings, 
          credit cards, loans, etc.                   (back to INITIALIZE) 

      4.  Assign any Budget goals you would like to shoot for and compare 
          later.  This is an optional feature.                    (BUDGET) 

      5.  If you have not done so already, check your printer setup, and 
          optionally select your screen colors.          (SETUP UTILITIES) 

      6.  Record your transactions over the days and months.
          (This is the tough part).                       (LEDGER POSTING)

      7.  At the end of each month you will "Close the Month" in 
          preparation for the following month.  Transactions can only be 
          posted in the current open month.                   (CLOSE/OPEN) 

      8.  REAP THE BENEFITS of your hard work with the screen and printed 
          reports.  If you've done it right, your complete financial 
          picture will be at your fingertips.                    (REPORTS) 

      9.  When you reach the end of your fiscal year, use the "Begin New 
          Year" menu selection to set up for the next year.  You can 
          optionally use the same Chart of Accounts.          (INITIALIZE)
























                                  - 5 -


                              BASIC CONCEPTS
                            ------------------
      * CHART of ACCOUNTS *
      HBMS requires a valid Chart of Accounts before most of its features 
      will function.  A Chart of Accounts is simply an outline of the way 
      you account for your money.  In order to create your own personal 
      Chart of Accounts you must first decide what types of financial 
      transactions you want to manage.  Usually this will be everything, so 
      you can gain a true financial picture.  

          The basic hierarchy of the Chart of Accounts begins with the four 
      "Money Groups": INCOME, EXPENSES, ASSETS, and LIABILITIES.  Each Money 
      Group is split further into CATEGORIES, and finally into ACCOUNTS.  
      You build your Chart of Accounts by creating these categories and 
      accounts to your personal preferences.  Also you will assign each one 
      a CODE name consisting of up to four letters.  You will find that 
      codes are much easier to type and remember than numbers or lengthy 
      names.  Whenever you need to access an account in HBMS, you call it up 
      by its CODE name.  Finally, there are the TRANSACTIONS.  These are the 
      records of purchases, transfers, etc., that you enter into the 
      program.  Remember that all your transactions are entered into 
      accounts.  The categories and Money Groups are there for grouping and 
      reporting functions only. 

          After creating your Chart of Accounts it becomes a simple matter 
      of recording your transactions.  This is done in the Ledger Posting 
      section, which I like to refer as the "heart" of HBMS.  


      * DOUBLE ENTRY *
      HBMS is a "double entry" ledger system.  This means that any type of 
      transaction, such as a purchase, transfer, paycheck, etc. will need a 
      minimum of two entries to represent it.  That sounds like a lot of 
      work, but HBMS makes it easy!  If you stop and think about it, every 
      financial transaction consists of at least two steps.  

          Lets take a simple case of writing a check at the drug store to 
      purchase a prescription.  The first part of the double entry, would be 
      the decrease of the balance in your checking account.  The second part 
      of the double entry would be the increase of whatever account you 
      would charge the prescription to.  If your check covered more than one 
      purchase, then this transaction would consist of more than the minimum 
      of two entries.  You might for example, have bought a roll of film 
      also.  This would simply be an additional third part of this 
      transaction.  The amount that went toward the film would be charged to 
      whatever account you use for this type of expense.  The amount for 
      both items will of course total up to the amount of the check. 

          "Fine" you say, "but how do I represent getting money into my 
      checking account?"  When you first start up your budget system, you 
      would enter your current checking account balance by way of the 
      "Initial Balances" section, located under the Initialize System menu.  
      From that point on, it's just the normal double entry system.  A good 
      example might be a payroll check.  The first part of this double entry 
      would show whatever INCOME account you use for paychecks, increasing.  


                                  - 6 -


      If you deposited the entire payroll check into your checking account, 
      the second part of this transaction would show your checking account 
      balance going up by the same amount.  Paychecks of course, are not 
      usually that simple.  They have deductions for taxes, social security, 
      etc.  A more realistic transaction of this nature would show your 
      INCOME account increasing by the gross amount of the paycheck.  Income 
      tax and social security accounts would increase by their respective 
      amounts, and the remainder would go into checking, spending cash or 
      whatever.  A transaction like this might consist of several parts.  

          Credit card purchases are just as easy.  To begin with, your 
      credit card balance would go up.  You are increasing a LIABILITY 
      account.  The second part of this transaction would show a change in 
      whatever account you use for that purchase, by the same amount. 

          Making a payment toward a LIABILITY is also simple.  A good way 
      to treat this circumstance would be to have separate accounts for the 
      liability, and the interest incurred from that liability.  This would 
      be a three part transaction.  The first part would show the full 
      amount decreasing the checking balance.  The second part would show a 
      partial amount charged to and increasing an interest EXPENSE account 
      for this liability.  The third part would show the remainder 
      DECREASING the principal in your liability account. 

          By now you should understand the concept of "double entry".  
      Money transfers work just as you would expect; Out of one account 
      and into the other.  Remember that every type of transaction consists 
      of at least two parts.  If you made several cash purchases in the 
      course of a day, you could combine them under one transaction.  The 
      total amount would come out of your spending cash account and then 
      being disbursed to the other respective accounts.  Save your 
      receipts, or make a note of them, and you'll find that its easy to 
      document every financial transaction you make. 
























                                   - 7 -


                            HBMS CONVENTIONS 
                          --------------------
      Now that you have a feel for the concepts, the following operational 
      facts are also vital for successful usage of the program. 


      * SETUP **********
      The SETUP section will allow you to test and change the default 
      commands that HBMS uses to communicate with printers.  Make a sample 
      printout before attempting to print any reports.  It also allows you 
      to add color. 

      * COMMAND LINE **********
      To run the program, simply type "HBMS".  There are also two optional 
      parameters which will allow you to bypass the opening screen.  They 
      are the drive\path specification for your data files, and the last two 
      digits of the budget year.  Use only spaces as separators.     

                         HBMS <drive\path> <year extension>

      example ->         HBMS 
                         HBMS b: 
                         HBMS b:\data\  
                         HBMS c:\budget\data\  87 

          If you are specifying a subdirectory, the ending backslash "\"  IS 
      REQUIRED.  You can leave off the year extension unless you want to 
      load a year other than that of the system date.  If so, it must follow 
      the drive\path specification.  You might want to create a batch file 
      for this purpose.  If you include these command line parameters, HBMS 
      will not prompt you for this data on the opening screen.  Make sure 
      that the system date and time are correct.  HBMS uses the system date 
      as a prompt for the year of data to load.  It's also used to date all 
      printouts. 



      * FILENAMES **********
      HBMS.EXE is the main program file.  It creates the following 
      DATA FILES: 
      ---------------------------------------------------
         CATS    .yr     category names
         ACCOUNTS.yr     account names and values
         LEDGR-m .yr     transaction data for each month
         TEMPLATE.yr     optional file containing often used transactions
         DUEDATES.yr     companion file to TEMPLATE.yr

             (yr = year extension of data,  m = month)

          You might want to keep these DATA FILES in a separate 
      subdirectory, or on a separate disk.  You should be able to fit an 
      entire year of data on one disk, or maybe have individual disks for 
      separate budgets.  In any case, when the free space gets low, HBMS 
      will warn you. 



                                  - 8 -

      * DATA ENTRY **********
      Throughout the program when you are prompted to enter data, you will 
      see a field in reverse video.  Your data, be it a code, name, 
      description, etc., will be limited to the length of this field.  In 
      some cases you will be supplied with a default answer.  If it's not 
      what you want, just start typing.  Unless you use an editing key, the 
      first keystroke will erase whatever was there.  

      The editing keys available are listed below and work just as you would 
      expect: 

                  <INSERT>         <DELETE>
                  <RIGHT ARROW>    <LEFT ARROW>
                  <HOME>           <END>
                  <BACKSPACE>      <TABS>
                  <ESC>  

          The <ESC> key needs further mention.  It can serve a dual purpose.  
      If an entry field contains data, hitting the ESC key will erase it and 
      leave you with a "null" (empty) field.  If the entry field is empty 
      (or zero in the case of a number), the ESC key will act just as if you 
      had hit the ENTER key to accept the null value.  You will often see a 
      help prompt on line 25 that will say "<ESC> to quit".  In most cases, 
      what this really means is that HBMS will respond to a null value by 
      canceling the current mode and returning you to a menu.  The ESC key 
      is usually all you need to "back up" out of anything. 

         Beginning with version 4.1, numerical entries are treated 
      differently.  They now resemble a "calculator" style of input.  Number 
      entries can be cleared by either the Backspace key, the ESC key, or by 
      the first digit typed. 

          The <F1> key has multiple uses.  In most parts of the program you 
      will need to supply a code for the account you are interested in.  If 
      you can't remember the code you assigned to it, hit the F1 key and you 
      will be able to browse through your Chart of Accounts on screen.  When 
      you first access this CODE-HELP feature, you will see the four Money 
      Groups along the top of screen.  The highlighted one will have its 
      associated Categories displayed.  The Left/Right arrows select 
      different Money Groups, and the Up/Down arrows move between different 
      Categories.  If you summoned help from a Category field, striking 
      ENTER will insert the highlighted code into your entry field for you.  
      If you were in an Account code field, the ENTER key will display the 
      Accounts for that Category.  From that point you can move the cursor 
      to the account you want, hit ENTER and it will be inserted.  The 
      ESCape key will back up one level at a time and will not insert any 
      data. 
          The F1 key has other uses in the Ledger Posting and Setup 
      sections.  It's function there is explained later. 

          <KEYPAD> will be seen in some parts of the program on the prompt 
      line.  It refers to the Up, Down, PgUp, PgDn, Home, and End keys.  
      They work exactly as you would expect.  Use them to "navigate" 
      through the data.  The control keys work in addition to these keypad 
      keys for you "WordStar" fans.  

          The <+> and <-> keys are used to step months forward and backward. 

                                  - 9 -


      * FISCAL YEAR *********
      Usually, the file extension of all the above mentioned data files 
      will be the last two digits of the year.  Beginning with version 4.0, 
      HBMS can have a fiscal year different from the calendar year.  If 
      this is the case, the file extension of the ACCOUNTS and CATS files 
      will be different.  This extension uses the last two digits of the 
      first year, appended with the last digit of the second year.  For 
      example, the Accounts file for the 88/89 budget year would be 
      "ACCOUNTS.889".  


      * CHART of ACCOUNTS REQUIREMENT **********
      HBMS will refuse to do most of the functions on the main menu until 
      the following requirements are met.  You must have assigned AT LEAST 
      ONE CATEGORY FOR EACH OF THE FOUR MONEY GROUPS, and there must be AT 
      LEAST ONE ACCOUNT FOR EACH CATEGORY.  If you get a warning and can't 
      remember what accounts and categories you have assigned, go to the 
      printed reports section and print out the "Raw" account data.  It 
      will show you what has been assigned and how it has been arranged. 


      * CODE SELECTION **********
      Sometimes you will be provided with a starting code.  After that, 
      your prompt will be the next code in order of their appearance in the 
      Chart of Accounts.  


      * INFORMATION CHARACTERS **********
      The ">" sign shows up in many of the reports, both on screen and in 
      print.  Depending on where you see it, it could mean that the check 
      has been cleared or that the account is flagged for reconciliation.  
      The "*" sign also shows up on screen and in print, and means that the 
      specified budget has been exceeded. 


      * RECORD NUMBERS ************
      Transaction record numbers are displayed on the Ledger Posting screen 
      and in various reports.  While they are necessary for HBMS, they can 
      also be helpful if you are trying to reference a particular entry.  If 
      you spotted a transaction in a Sorted report that you wanted to look 
      at (or possibly edit), use the record number to help you locate it in 
      the VIEW mode of the Ledger Posting section. 


      * SAVING DATA **********
      In an effort to speed up the program, HBMS keeps all account values 
      for the whole year and all transactions for the month you are working 
      with, in memory.  HBMS is now much more careful with your data.  If 
      needed, it will save all data when leaving any of the sections listed 
      on the Main Menu.  However, you can still force a save from the 
      "Action Prompt" in the Ledger Posting section.  If you are entering a 
      lot of transactions, it's probably a good idea to save data 
      occasionally to prevent possible loss.  A power outage or (should I 
      dare mention) a program crash could negate any data that was entered 
      since the last save. 


                                  - 10 -



      * I/O ERROR TRAPPING ********** 
      HBMS will sense Input/Output problems such as a paper out condition, 
      printer offline, full disk, drive door open, etc.  However, some 
      computers seem to take forever before they time out and signal an 
      error condition.  If things seem to stop for no reason, please wait 
      at least a minute before you give up or try to reset the computer.  
      When HBMS saves data it rewrites the respective data file completely.  
      It does not do any appends.  If a problem is encountered, HBMS will 
      display a warning message and give you a chance to correct the 
      situation.  If it's a full disk, you can substitute another disk with 
      more room as an emergency measure.  If you have to resort to this, I 
      suggest that you immediately quit the program and inspect your data 
      disks.  If there are any duplicate files, make sure that you retain 
      only the ones with the latest date and time stamp.  There is a notice 
      in the Close/Open Month explanation about what to do if things go 
      wrong.

          PLEASE keep backup copies of your data.  HBMS is as reliable as I 
      could make it, but backups are good insurance. 





































                                  - 11 -




                           INITIALIZE SYSTEM
                         ----------------------

      * BEGIN NEW YEAR *
      When starting a budget system for the first time, or at any time when 
      HBMS cannot find a valid ACCOUNTS file, you will be given the option 
      to go directly to the Begin New Year section.  Any other time this is 
      just a normal selection from the Initialize System menu.  At this 
      point you will be asked for year of data, first fiscal month, and 
      beginning month information.  

          With version 4.0, I added the ability to have a "fiscal year" 
      different from the calendar year.  Please be careful with this and 
      don't get the first fiscal month and beginning month confused.  Unless 
      you are starting a budget system in the middle of your fiscal year, 
      the beginning month of data will be the same as the first fiscal 
      month.  

          If you already have an existing budget system and need to start a 
      new year, you will probably want to reuse your existing Chart of 
      Accounts.  If this is the case, HBMS will allow you to do so, and will 
      optionally transfer Asset and Liability balances, as well as Budget 
      data.  In order to take advantage of this, make sure you have a COPY of 
      your current data files (ACCOUNTS.yr & CATS.yr) on your NEW data disk.  
      Start HBMS with your existing year data files just as you normally 
      would.  Go to the Initialize System menu and select Begin New Year.  
      After the new year has been initialized you can delete the old copies 
      of data.  NOTE that if you pass any balances forward, they will come 
      from the current open month in the old budget.  



      * INITIAL BALANCES *
      This section allows you to enter the current balances of assets and 
      liabilities when you first start your budget system.  After you are up 
      and running you should have no need to enter initial balances again.  
      If you add an asset or liability account in a later month, its 
      beginning balance will be initialized through normal transactions. 

















                                  - 12 -


                             SETUP UTILITIES
                          ---------------------

          This section is designed to create configuration files which will 
      override the defaults in HBMS for color and printer support.  Be aware 
      that on startup, HBMS will look for these configuration files only in 
      the default drive or directory.  If found they will be loaded and 
      replace the normal default values.  This means that you should make 
      sure that these files (if needed) are in the same drive\directory that 
      you run HBMS from. 


      PRINTER SETUP 
      ------------- 
          HBMS is designed to make full use of the various options available 
      on most dot-matrix printers.  For example, printed reports use 
      enlarged text in the titles.  Double-strike, underline, and italics 
      are also used.  These features enhance the readability of reports, 
      but are not absolutely necessary.  HBMS can work without most of them, 
      as explained later. 

          Most printers use a system of control codes and ESCape sequences 
      to turn on and off the different fonts, enhancements, etc.  HBMS comes 
      with default printer commands which work with most Epson compatible 
      printers, but you can edit these commands if they fail to work with 
      your brand of printer.  The first thing you should do when you reach 
      this section is to use the F1 key to print out a sample page of text.  
      This sample sheet will contain text in every font used by HBMS.  READ 
      THIS SHEET CAREFULLY!  I can not stress this point enough.  Not only 
      does it allow you to see if the different options are working 
      properly, it offers insights on how HBMS uses these commands.  If you 
      do need to make changes, you must consult your printer manual.  It 
      should give you the information you need to edit each particular 
      command. 

          If you fail to get a readable copy of this sample printout, or 
      are having no success with getting HBMS to work with your printer, try 
      the following.  "Nullify" all 15 of the commands.  When I say nullify 
      a command, I mean select the number of the command and use the ESC key 
      to erase all characters in that field.  Once you have a "clean slate", 
      you have two choices: 

        1.  Save the data so that HBMS will load and use these empty printer 
            commands instead of trying to use its defaults.  Set up your 
            printer manually, or by any means that you can, so it will print 
            in small type (approximately 17 characters per inch).  Your 
            reports will not be as nice, but at least they will work, and 
            not "word wrap" (go past the right margin).

        2.  Start trying to make each command compatible, one at a time.  I 
            suggest that you start with the CONDENSED ON and CONDENSED OFF 
            commands.  The CONDENSED commands set the printer to use small 
            print, 17 characters per inch (17 cpi), or something close 
            depending on your printer.  Otherwise, you will need a wide 
            carriage printer.  Next try the 1/8 line feed command.  It will 
            allow you to get more information on a sheet.  

                                  - 13 -


          When entering printer commands, you will find that some of the 
      characters can not be entered directly from the keyboard.  The ESC 
      character, and other characters with an ASCII value of less than 32 
      are examples of this.  You must enter these characters by entering 
      their ASCII values, surrounded by double quotes.  For example, the 
      Epson command for Pica font consists of two characters, the ESCape 
      character and the letter P.  The ASCII value of the ESC character is 
      27.  This PICA command can be entered in two ways: 

          "27""80"     (80 is the ASCII value of P)

          "27"P        (this is the easier way)

      As you can see, if you needed to enter two unprintable characters in 
      succession, both ASCII values would have to be surrounded in their own 
      quotes such as "27""24".  Also pay special attention to the case of 
      printer commands.  An 'ESC A' is different from an 'ESC a'. 

          HBMS is set up to detect empty printer commands and adjust things 
      accordingly.  This includes title spacing and page lengths.  IF YOU DO 
      ENTER A PRINTER COMMAND, HBMS WILL TRY TO USE IT EVEN IF IT IS WRONG.  
      It's sometimes better to nullify a command and let HBMS adjust, than 
      to have it try to act on a faulty command and possibly cause trouble.  
      The only absolutely necessary command is the one for condensed print. 
      If your printer uses wide paper, you could even get away without this 
      one too.  

          If you need to make changes, consult your printer manual and 
      experiment.  Some printers will have to be reset, or put into an 
      alternate mode before you can get results.  The INITIALIZE PRINTER 
      command is sent before every report that HBMS prints.  In most cases 
      this command can be left blank, but if needed, this is the place to 
      insert a reset or change mode command.  

          None of the HBMS printouts are designed to be printed in PICA (10 
      cpi) font, but the PICA command is used when setting up for condensed 
      (17 cpi) font.  Because of the way some printers work, HBMS sends a 
      PICA command immediately before it sends the condensed command.  This 
      will assure that you get approximately 17 cpi. 

          If your printer has no ELITE (12 cpi) command, it may be replaced 
      with whatever command you use for CONDENSED ON.

          WHEN PRINTING, THERE WILL BE A PROMPT AT THE BOTTOM OF THE SCREEN 
      THAT TELLS YOU WHETHER HBMS IS USING ITS DEFAULTS, OR HAS LOADED YOUR 
      CONFIGURATION FILE.

          If you still have trouble setting up your printer, call and I'll 
      be glad to help if I can.  In some cases, I may have the correct 
      commands for a particular printer, or be able to get them.  If you get 
      your non-compatible printer to work, please consider sending me a copy 
      of the test printout and a "print screen" that shows the commands you 
      used.  I get calls all the time for help with printer setup.  I can't 
      possibly keep track of all the different types of printers and your 
      help would be appreciated.  Information on successful laser printer 
      setups would be especially welcome. 

                                  - 14 -


      
      ADDING COLOR 
      -------------
          Beginning with version 4.01 of HBMS, the program defaults to black 
      and white screens to be compatible with as many monitor combinations 
      as possible.  If you use a monochrome monitor, you do not need to 
      make any changes.  

          HBMS is designed to take full advantage of color monitors.  If 
      color is desired, use this section to select them.  On the menu there 
      is a selection to insert a default set of colors.  Use this as a 
      starting point.  The F1 key will display a sample screen with the 
      colors you have selected.  Be careful that you don't set any 
      foreground colors to the same color as the background. 

          Once you are happy with your selections, make sure you save them.  
      A configuration file named COLORS.HBM will be created.  If you don't 
      save before leaving, colors will revert back to those you began with.

          Again, if you have a monochrome monitor, or want to start color 
      selection from scratch, make sure there is no file named COLORS.HBM in 
      your default directory when starting HBMS. 




      SOUNDS
      -------
      The beeps and chirps will be noticed most in the Ledger Posting 
      section.  They can be helpful when one person is dictating data, from 
      notes, to another who is doing the typing.  In this way the person 
      doing the dictating can listen for the chirps and will know when the 
      next bit of information is needed.  He need not watch the screen.  

          These sound effects may be annoying to some, and can be turned on 
      or off in the Setup menu.  Their state will be stored and will not 
      have to be reset when the program is started again. 





















                                  - 15 -


                           ACCOUNT MAINTENANCE
                        -------------------------

      * CHART of ACCOUNTS *  (Add, Delete, Change)

          Your Chart of Accounts can be brief, with just a few accounts, or 
      it can be like an "outline" of your financial transactions, very 
      detailed with multiple accounts under many categories.  You might want 
      to keep special accounts just for tax related items.  I like to keep 
      separate principal and interest accounts on liabilities.  By doing 
      this I have an accurate running balance on how much I owe. 

          Great care should be taken in creating your Chart of Accounts.  I 
      cannot stress this point enough.  With a little thought you should be 
      able to come up with a personalized Chart of Accounts that will 
      require minimal "grooming" as you go along.  A well defined Chart of 
      Accounts will allow HBMS to report accurate net worth values. 

        If you are still a little "fuzzy" on how it should be done, print 
      out a Chart of Accounts from the sample data.  It will give you some 
      ideas.  Some users have said they used the sample data as a starting 
      point for their own Chart of Accounts.  They just loaded up the sample 
      data, went to the Initialize System Menu and selected "Begin New 
      Year".  Since HBMS allows you to "reuse" an older chart of accounts, 
      it was simpler to just edit the codes and names to personal taste.  
      While I don't recommend this, it is an alternative. 

          All data in HBMS is stored as Account values.  The Categories are 
      there only to group the Accounts for more informative reports.  The 
      Categories fall in one of the four money groups: INCOME, EXPENSES, 
      ASSETS, or LIABILITIES.   

      NOTE:  Categories must be created first, so that accounts will 
             have somewhere to be assigned. 

          When you add or change an asset or liability account, you will be 
      asked if you want it to be reconcilable.  To be eligible for the 
      reconciliation features in HBMS, accounts must be flagged as such.  
      Also, you will not be prompted for a check number in the ledger 
      posting section if the account is not flagged for reconciliation.  

           *** THERE IS A LIMIT OF 12 RECONCILABLE ACCOUNTS. ***

          Accounts may be added, changed, or deleted at any time during the 
      budget year.  While using the program, accounts and categories will 
      be referred to by a code which you also assign.  These codes can 
      consist of up to four characters.  Try to keep them short and easy to 
      remember.  Codes are not case sensitive.  You can enter them in lower 
      case and HBMS will convert them to upper case.  


      The restrictions that apply are as follows: 

          *  THERE MUST BE AT LEAST ONE CATEGORY FOR EACH MONEY GROUP. 

          *  THERE MUST BE AT LEAST ONE ACCOUNT FOR EVERY CATEGORY.

                                  - 16 -

          *  Total number of categories can not exceed 38. 

          *  Total number of accounts can not exceed 254, and no more than 
             38 accounts per category.  

          *  No more than 12 reconcilable accounts.

          *  Accounts may be moved to different categories as long as they 
             don't cross money group boundaries.  (EXAMPLE: an account under 
             an income category may not be moved to an expense category)  

          *  Account names or codes may be changed, but this may lead to 
             confusion if printed reports under the first part of the year, 
             differ from those after the change is made.  None of the other 
             data contained in these accounts will be changed.  

          *  Category codes and names may be changed but the confusion 
             factor mentioned above still applies.  

          *  Accounts may be deleted only if they have had no action during 
             the year (this includes initial balances). 

          *  Categories may be deleted if they do not have any accounts 
             assigned to them.  This constraint may be avoided by moving all 
             accounts from under the category to be deleted, to other 
             categories first.  

          *  If you cancel the reconciliation ability of an account, you 
             should go back and unmark any transactions that have been 
             reconciled to avoid confusion, but this is not a requirement. 





      * RESEQUENCE ACCOUNTS *

          The order in which categories and accounts appear in your Chart 
      of Accounts can be different from the order in which they were 
      entered.  After creating or editing your Chart of Accounts, you may 
      change their order of appearance by selecting "Resequence Accounts".  
      The current order will be displayed and you will be allowed to change 
      them around to suit your taste.  

          If you want to resequence Accounts, you have to specify their 
      "parent" category.  Likewise, if you want to resequence Categories 
      you will have to specify the money group. 











                                  - 17 -


                            BUDGET ASSIGNMENT
                          ---------------------
          HBMS allows you to assign a budget figure for each month.  By 
      using this feature you may set goals for your projected income and 
      expenses.  While it may sound unusual, you may even set budget amounts 
      for assets and liabilities.  You might want to set goals for your 
      savings, or budget how soon you plan to pay off a debt.  Of course it 
      wouldn't make sense to budget for your checking account, as its 
      balance varies to no set pattern.  

          After selecting an account to budget for, the values for each 
      particular month will be shown along with a grand total for the year.  
      If you want to make changes, answer "n" to the prompt, and you will be 
      allowed to enter figures for each month.  If all your months will have 
      the same budget value, you can select "m", enter the amount, and HBMS 
      will insert them automatically. 

          If you decide you don't want to budget for an account, just enter 
      a zero value for each month.  If all months have a zero budget value, 
      your reports will show a "n/a" in place of a budget figure. 

          Please note that budget figures can be updated at any time, but 
      you will only be allowed to change values for the months which have 
      not been closed.  

          When you exit the Budget Assignment section you will automatically 
      be presented with a summary of your budget status.    






























                                  - 18 -


                              LEDGER POSTING
                           --------------------
          The Ledger Posting section is the part of the program where you 
      enter transactions.  It's the heart of HBMS, and where you will spend 
      the most time.  As mentioned before, HBMS is a double entry ledger 
      system, meaning that at least two entries will be needed to represent 
      a completed transaction.  Before attempting to go any farther, you 
      should have read about double entry in the Concepts part of this 
      documentation.  There are some other terms that HBMS uses that you 
      need to become familiar with.  They are capitalized in the text below. 

          For any type of transaction, be it a check, cash, credit, or 
      transfer, you will have to decide what account it will be drawn from.  
      Most of the time you will be working with a checking account or a cash 
      account.  I will be referring to this as the SOURCE account.  Once you 
      have determined which SOURCE will be used, you must decide how its 
      balance will be effected.  Will it be INCREASED or DECREASED?  

          When you access the Ledger Posting section you will see what looks 
      like a blank check at the top of the screen.  The cursor will be 
      flashing at the ACTION prompt.  At this point, for a normal 
      transaction entry, you would enter either an "I" or a "D" character.  
      The "I" or "D" tells HBMS whether you want to INCREASE or DECREASE the 
      SOURCE account. 

          Once you have decided on the "Action" and provided the code for 
      the SOURCE account, you will be prompted for: the check number (if the 
      account has been flagged for checking), the date, a description of 
      this SOURCE account, and it's amount. 

          Now for the other half of this double entry transaction.  If you 
      were writing a check, you would need to specify what item(s) this 
      check was written for.  List these purchases in the lower half of the 
      screen, where they will be disbursed into their respective accounts.  
      I will refer to these as TARGET accounts. 

          You need not worry whether these "TARGET" account balances will 
      increase or decrease.  HBMS will make that decision for you.  In fact, 
      THERE IS NO PLACE IN THE LEDGER POSTING SECTION WHERE YOU WILL HAVE TO 
      PROVIDE A NEGATIVE SIGN.  Once you have specified whether your SOURCE 
      account is Increasing or Decreasing, HBMS takes care of the rest and 
      makes sure your double entry transaction balances. 

          There are many examples of transactions in the sample data.  If 
      you print out a "Transaction Report" from this sample data you will be 
      able to see how to do most any type of transaction needed.  For now, 
      I'll step through a simple transaction of writing a check to the Drug 
      store. 


      Step  1.  At the ACTION prompt you would select "D" to DECREASE 
                checking.  (SOURCE ACCOUNT) 

      Step  2.  Enter the code for your checking account.  At this point 
                HBMS will show you the current balance for that account.  


                                  - 19 -

      Step  3.  Enter the check number.  This field is optional and it will 
                be skipped if the SOURCE account has not been flagged as 
                being reconcilable. 

      Step  4.  Enter the date.  

      Step  5.  Enter to whom the check was written.  This field is also 
                optional.  (You might not want to describe a multiple 
                spending cash transaction.) 

    * Step  6.  This step is where some of the flexibility of HBMS shines.  
                In the case of a checking transaction you would want to 
                enter the full amount of the check.  Later, as you disburse 
                the money to the TARGET accounts, HBMS will prompt you with 
                the remaining balance of the check as you go along. 

                In the case of a spending cash transaction you might want to 
                leave the SOURCE amount blank.  As you enter the separate 
                amounts in the TARGET accounts, HBMS will keep a running 
                total for you.  

      Step  7.  Now you will begin to disburse this money to the TARGET 
                accounts.  If all the money is intended to go to one account 
                only, enter the full amount.  Otherwise, enter the partial 
                value.  

      Step  8.  Enter the code for the TARGET account selected.  (The F1 key 
                is available for help.) 

      Step  9.  Enter a description for the TARGET transaction.  This field 
                is also optional, but it helps to describe each item for 
                future reference.  (see Tips & Shortcuts) 

      Step 10.  Now you have fulfilled the minimum of two entries for a 
                transaction.  If the value you entered in step 7 accounts 
                for all the money in the SOURCE account you will be 
                finished.  Otherwise you will be able to keep adding entries 
                to be drawn from the SOURCE.  

          A null entry at the TARGET amount tells HBMS that you are 
      finished.  When finished you will be asked if everything is ok.  If 
      the source account has been marked as reconcilable, there will be an 
      additional choice to accept and print the check.  If you made a 
      mistake in an entry, answer "n" and you will be allowed to go back and 
      make corrections.  See the explanation on Editing.

          The entire transaction can be aborted at any time by entering a 
      null value for a code prompt. 

      NOTE: If you answer no to the "Above OK?" prompt, the automatic 
      prompting for the remaining balance will not be in effect.  This was 
      done so as not to change any TARGET amounts that may have been 
      correctly entered.  Beginning with version 4.1, there are 
      circumstances where you can have HBMS insert the remaining balance by 
      using the F1 key.  The requirements are:  you must be in "edit" mode, 
      you must have entered a non zero value in the SOURCE amount, and of 
      course the cursor must be at a TARGET amount. 

                                  - 20 -


                               ACTION PROMPT 
                            -------------------
          There are many other choices you can make at the Action prompt.  A 
      HELP LINE WILL BE DISPLAYED AT THE BOTTOM OF THE SCREEN TO REMIND YOU 
      WHAT IS AVAILABLE.  From the action prompt you also have the 
      opportunity of going directly to the Screen Reports or the Account 
      Maintenance section.  Need to check a balance, or add an account on 
      the fly?  You can do it from here without going back through the main 
      menu.  Under most conditions HBMS will remember any data that you had 
      entered, but had aborted prematurely.  When you get back, just keep 
      hitting the <ENTER> key and HBMS will recall it. 
          The View Ledger mode is accessed from the Action prompt.  From 
      this view mode you have the opportunity to review and/or edit previous 
      transactions.  
          Templates are called from the Action prompt by entering a "T".  
      In order to activate this feature, you must have built and stored at 
      least one template screen previously.  The Template, View, and Edit 
      modes are explained in detail later in this document. 
          HBMS will always save your data to disk whenever you return to the 
      Main Menu, but you still have the ability to Save data from the Action 
      prompt.  If you have been entering a lot of transactions, it might be 
      wise to save this data occasionally. 
          The <ESC> will abort everything and take you back to the main 
      menu. 


                               VIEW LEDGER
                           --------------------
          If you enter a "V" in response to the Action prompt you will be 
      allowed to view any transactions already recorded for the entire year.  
      This can be very handy if you don't remember if you have entered 
      something.  First, you will be prompted for a beginning month to view.  
      The initial transaction screen for that month will be displayed just as 
      you entered it.  From this point you can "scroll" through the screens 
      at will by using the keypad keys.  The PgUp and PgDn keys jump 50 
      records at a time.  The "+" and "-" keys change months.  The "ESC" key 
      returns you to the Ledger Posting screen.  If you need to make a 
      change, bring up the intended Ledger screen into view and enter an 
      "E" to access the edit mode. 



                                EDIT MODE
                          ------------------------
          If you make a mistake in your data entry, you can correct it by 
      getting into EDIT MODE.  This can be done in several ways.  Most 
      often it is done by answering no to the "Above OK?" prompt.  Exceeding 
      the limit of an assigned source value will generate a warning and put 
      you in edit mode also.  Edit mode allows you to go back and change any 
      of your entries.  You can step through them one at a time, in a 
      similar fashion to the way they were first entered.  However there are 
      some other valuable features available only in Edit mode. They are 
      explained later in the TIPS and SHORTCUTS section. 

          ANY TIME YOU ARE IN EDIT MODE THERE WILL BE A FLASHING REMINDER 
      NEAR THE TOP OF THE SCREEN. 

                                  - 21 -


          If you are using the VIEW feature to review some previously 
      entered transactions, the Edit mode is also available.  There is one 
      restriction on editing from the VIEW mode.  Editing is allowed in the 
      current open month only.  If you need to make a change in an earlier 
      month, you will have to reopen each month until you get back to it.  
      See the CLOSE/OPEN month menu.  While editing from a screen in VIEW 
      mode, you also have the ability to wipe out the entire screenful of 
      transactions.  If this is what you want, enter a "K" (for Kill all) at 
      the Action prompt.  You will be given a chance to abort before 
      accepting this command.  Remember that if you try to edit individual 
      entries first and then decide to "Kill All", the entire ORIGINAL 
      transaction will be wiped out, including the attempted individual 
      changes.  The <ESC> key at the Action prompt will abort all changes 
      and return you to the View Mode.  Again, be sure and read the TIPS and 
      SHORTCUTS on Editing. 


                              TEMPLATES
                          ------------------
          New for version 4.1 is the ability to build "Templates".  If you 
      have repetitive types of transactions that you enter at least once a 
      month, why not store a sample of this transaction screen to disk where 
      you could call it up with just a couple of key strokes!  Monthly bills 
      and paychecks would be good candidates for this type of feature.  

          In order to take advantage of this, create an often used 
      transaction screen, just as you would normally.  When you reach the 
      "Above OK?" prompt, enter a "T" for Template.  The Template assignment 
      screen will pop up and ask you to assign a number, and enter a 
      descriptive title for this transaction.  You will also be asked for a 
      due date, but I will explain that later.  Just hit ENTER for now.  
      Your template will be stored in a file named TEMPLATE.yr.  The file 
      extension will match that of your data files.  Now, whenever you need 
      to make this type of entry again, you can call it up from the Action 
      prompt by hitting "T".  The same template screen (now titled Template 
      Selection) will appear and you will be able to select any of up to 30 
      templates that have already been built.  Your selection will be 
      displayed on the Ledger Posting screen, ready for you to accept it.  
      If it needs editing, just answer no to the "Above Ok" prompt. 

          Also new for version 4.1 is the ability to assign a "due date" to 
      any of the templates you have built.  If you would like to be reminded 
      that you need to pay a bill, or make some other type of transaction, 
      just assign the dates that apply.  There is room for up to 24 
      different dates.  In other words you could instruct HBMS to remind you 
      that a template needs to be entered, up to 24 separate times in a year 
      (even more if you go back and edit it).  These dates should be entered 
      in a four digit format.  September 4th would be entered as "0904".  
      November 23rd would be "1123".  They should also be in calendar 
      sequence, starting with the earliest reminder.  The reason for this is 
      that when you select a template to be inserted in the Ledger screen 
      that has a due date assigned to it, that date will be deleted and the 
      next one in sequence will take it's place. 




                                  - 22 -


          If you don't want this reminder feature then leave the first date 
      field blank.  Otherwise you can assign as many as you like, up to 24.  
      The first dates assigned (if any) will be displayed on the template 
      selection screen next to the title.  If any of them fall earlier than 
      the current system date, they will blink.  Also, on your first entry 
      into the Ledger Posting section, HBMS will check the template file 
      dates and warn you if any of them have come due.  The actual dates are 
      stored in a file named DUEDATES.yr, and like the TEMPLATE file, they 
      will reside in your data directory. 

          You can edit these dates, or the title if necessary.  Just access 
      the Template Selection screen from the Action prompt, enter the 
      desired template number, and hit the UP arrow instead of the ENTER 
      key.  If you enter a null value for the title, the entire template 
      will be deleted.  The dates can be edited as desired. 

          BE AWARE that assigning and storing a transaction screen to a 
      template, does NOT enter it into your transaction file.  You have to 
      call it back up from the Action prompt, and answer yes to the Above Ok 
      prompt in order to save it. 




                            PRINTING CHECKS
                         ----------------------
          A check printing instruction file is needed to allow HBMS to 
      print checks.  The documentation on how to create this file is 
      contained in the PRCHECK.DOC file.  The check printing feature can be 
      triggered by a "P" response either in the View mode, or at the "Above 
      OK" prompt in the Posting mode.  If the SOURCE account has been marked 
      as reconcilable, and HBMS is able to find the PRCHECK.HBM file, check 
      printing will take place.  Be aware that a "P" response to the "Above 
      OK" prompt will also accept the transaction as being correct. 


                                  - 23 -



                           TIPS and SHORTCUTS
                         ------------------------
      a)  EDITING: If you make a mistake and would like to correct it before 
          you reach the "Above OK" prompt, you can use the UP arrow.  It 
          will step the cursor up a line at a time.  NOTE that once you use 
          the UP arrow, the editing mode will be in effect. 

              Once you are in the editing mode, the DOWN arrow will step you 
          down a line at a time also. (If you are not in editing mode the 
          Down arrow acts just like the ENTER key.)  These UP and DOWN 
          arrows can save you a lot of time if you have to go back and 
          correct something on a whole screenful of data.  The cursor will 
          always stop at either the Action prompt, or an amount field.  If 
          you are at the SOURCE amount, remember that you have two options.  
          If you enter an amount, HBMS will use it to monitor Target 
          amounts, and provide you with a remaining balance if requested 
          with the F1 key.  If you leave the SOURCE amount blank, there will 
          be no checks made on the TARGET amounts, and a "running balance" 
          will be displayed. 

              Another editing feature added in version 4.1, is the ability 
          to "delete" a whole TARGET transaction line.  The CTRL-Y key does 
          this job (Hold down the Control key and hit "Y").  The entire 
          TARGET line will be deleted, and any remaining Targets below will 
          move up.  This feature is especially useful when editing Templates. 

      b)  HBMS will remember the last check number for every checking 
          account.  If you make any entry other than a number (such as 
          "jrnl" for a journal entry), it will not increment the check 
          number. 

      c)  If you enter the tilde <~> character only, HBMS will copy the 
          SOURCE description entered in step 9.  See the paycheck 
          transactions in the sample data for an example.  

      d)  The "+" and "-" keys can be used at the Action prompt in place of 
          "I" and "D" for Increase and Decrease. 

      e)  If you have a keyboard macro utility such as Borland's SuperKey, 
          you can program it to insert entries into the Ledger that you use 
          repeatedly.  Please be careful if you decide to try this.  It can 
          cause some confusion and possibly missed data if you try to go 
          back and correct something while you are in the middle of a macro. 

      f)  NOTE: I find it helpful to save my receipts from each day and jot 
          down any other transactions.  At the end of each week I commit 
          these transactions to HBMS via the Ledger Posting section.  You 
          may want to do this on a daily basis.  In either case, you will 
          then have a printed record of all your transactions available.  







                                  - 24 -


                            RECONCILE STATEMENTS
                          ------------------------
          When your bank statement comes in, use this section of HBMS to 
      reconcile your checkbook or credit card statement.  You do this by 
      "MARKING" each check that has cleared the bank and appears on your 
      statement.  The reconciliation feature only works on accounts that 
      have been flagged as such in the Account Maintenance section.  With 
      version 4.0 the ability to keep track of Liability accounts is 
      possible also.  


      * MARK/UNMARK *
      When first entering this section, you will be prompted with the 
      earliest month that contains uncleared transactions.  You can enter 
      any month that falls within the beginning month and the current open 
      month. 

          A screenful of all transactions for that month will be 
      displayed.  The lines for the first and last transaction for that 
      month will be highlighted.  The Up/Dn arrow keys move the cursor to 
      the transaction you need to clear.  If there are more transactions 
      than can be seen at one time, the screen will scroll.  To mark a 
      transaction as being cleared, use the ENTER key.  A ">" symbol will 
      appear and signify a cleared transaction.  The ENTER key functions as 
      a toggle and will turn the ">" mark on or off.  The PgUp, PgDn, HOME, 
      and END keys work just as you would expect, and will move you through 
      the data.  When you are ready to switch months, use the "+" or "-" 
      keys to step the month forward or back.  The ESC key will save the 
      changes and return you to the Reconciliation menu. 

          HBMS examines each month you access to see if all transactions 
      have been cleared.  However if you unmark a transaction in a month 
      that previously had all transactions cleared, and then mark it back 
      again,  HBMS will think that this month is the last one that was 
      completely cleared.  This month and all the remaining months may be 
      reconciled correctly.  This condition will be resolved when you ask 
      for a Summary Report, mentioned below. 

      * SHOW ALL UNCLEARED TRANSACTIONS *
      This feature will display the uncleared transactions in the order 
      they were entered.  There is no scrolling capability here as there 
      was in the MARK/UNMARK section, only a screen pause. 

      * SUMMARY REPORT *
      This section is where you check to see if your records and the bank 
      statement agree.  Make sure that you have entered (via the Ledger 
      Posting Section), and cleared (via MARK/UNMARK feature), any bank 
      charges, interests, or other miscellaneous entries that appear only on 
      your bank statement.  You will be prompted for the ending balance on 
      your statement.  If you have not browsed through all the uncleared 
      transactions before asking for a Summary Report, HBMS will quickly 
      tally them up.  Everything you need to verify your statement will be 
      displayed.  If you receive a discrepancy warning, the information 
      presented should help you figure out if it was a data entry error, a 
      failure to make an entry, or even a bank error. 


                                  - 25 -

                            REPORTS  (screen)
                          ---------------------
          In this section you have access to almost all data that HBMS has 
      to offer.  Upon entering, you will be prompted for the latest month 
      you want to look at.  Next, enter the code of an account to view.  
      After a short delay for HBMS to calculate some totals, you will be 
      presented with the "MONTH" view of data.  From here you can select 
      among three other formats which include: a PERCENTAGE VALUE report, 
      an ANNUAL VIEW, and a SORTED LEDGER.  You also have the opportunity to 
      change accounts.  By just striking <ENTER> you will be able to keep 
      the format you are in and select another account. 

          In the SORTED view, the transactions will be sorted by date first, 
      then check number or record number (depending on the type of account).

          In the PERCENTAGE view you will not only be presented with  
      percent values for the selected account, you will also see the values 
      for its associated category.  Monthly values and year to date values 
      will be displayed.  These percentages use MONTH and YTD totals when 
      compared with INCOME and EXPENSES.  They use TOTAL BALANCES when 
      compared with ASSETS and LIABILITIES. 

          The following table shows how the values are divided to arrive at 
      a percent figure.  They are listed in the same relative locations 
      that you will see on screen.  (The dashed line represents a division 
      symbol.  The resulting quotient is multiplied by 100.) 



      Month Actual     Ytd Actual    |
      --------------   ------------  |
      Month Category   Ytd Category  |
                                     |
                                     |
      Month Actual     Ytd Actual    |   Month Category    Ytd Category
      ------------     ----------    |   --------------    ------------
      Month INCOME     Ytd INCOME    |   Month INCOME      Ytd INCOME
                                     |
                                     |
      Month Actual     Ytd Actual    |   Month Category    Ytd Category
      -------------    -----------   |   --------------    ------------
      Month EXPENSE    Ytd EXPENSE   |   Month EXPENSE     Ytd EXPENSE
                                     |
                                     |
      Month Actual     Ytd Actual    |   Month Category    Ytd Category
      ------------     ------------  |   --------------    ------------
      Total ASSETS     Total ASSETS  |   Total ASSETS      Total ASSETS
                                     | 
                                     |
      Month Actual     Ytd Actual    |   Month Category    Ytd Category
      ------------     ----------    |   --------------    ------------
      Total LIAB.      Total LIAB.   |   Total LIAB.       Total LIAB.






                                  - 26 -

                             PRINTED REPORTS
                          ---------------------

          Beginning with version 4.1, any printed report can be directed to 
      a file, instead of the printer.  When you reach the "Printer Ready?" 
      prompt, answer "F" instead of "Y".  You will be asked to supply a 
      valid DOS filename to store the data.  This "disk" printout will be 
      stripped of all printer commands. 



      * SORTED LEDGER REPORT for the month *
      Prints the transactions with their values and balances, for all 
      accounts that had activity for the selected month.  They will be 
      sorted by account and appear in order of the Chart of Accounts.  
      Entries in individual accounts will be sorted by date, then check 
      number if applicable.


      * SORTED LEDGER by ACCOUNT *
      Prints the sorted data for a selected account, for up to a whole year. 


      * TRANSACTION REPORT *
      Prints a copy of your ledger transactions just as you entered them.  
      You might want to print out the transactions after every ledger 
      posting session.  If so, HBMS will remember the last record printed 
      for the month and prompt you for the next unprinted record number.  I 
      usually have posting sessions about 4 to 5 times a month, but wait 
      till the end of the month to print out a Transaction Report.  If I 
      need to see a transaction that has not been printed yet, I use the 
      "VIEW" feature in the Ledger Posting section.  


      * FINANCIAL STATEMENTS *
      Prints the Income and Expense Report, and a Balance Sheet Report.  The 
      Income and Expense Report prints all the monthly oriented data 
      including averages, budget figures, budget left, etc.  Similar to the 
      Monthly Totals screen report, any actual dollar amounts that have 
      exceeded your budget projections will be flagged with an asterisk.  
      The Balance Sheet gives you an opportunity to print out just the Asset 
      and Liability information.  


      * ANNUAL ACTUALS *
      Prints the monthly totals up to and including the current month.  All 
      figures are in whole dollars because of space limitations. 


      * ANNUAL BUDGET *
      Prints monthly budget figures for the entire year. 


      * CHART OF ACCOUNTS *
      Prints a list of accounts grouped in their respective categories 
      according to the sequence you have selected.  


                                  - 27 -


      * INITIAL BALANCES *
      Prints a report similar to the Balance sheet but contains the 
      beginning balances for your assets and liabilities.  These figures do 
      not show up on any other report. 

      * RAW ACCOUNT INFO *
      This printout is provided in case you get into trouble while working 
      with your Chart of Accounts.  HBMS will not let you do most of the 
      Main Menu functions until you have met the requirement of: at least 
      one account per category and at least one category for each money 
      group.  From this report you will be able to determine if you have an 
      "orphan" category, or no categories in a money group.  THIS REPORT 
      SHOULD BE PRINTED AND SAVED after creating or changing your Chart of 
      Accounts.  In an emergency, the record numbers could possibly be used 
      to recreate a new accounts file.  (Check with author for details.) 







                               FILE EXPORT
                            -----------------
          File exporting was changed in version 4.1 since the "print to 
      file" capability was added.  Now it writes the data to an ASCII file 
      in a "Standard Data Format".  Any text (in this case the account name) 
      is surrounded by quotes, and each field is separated by a comma.  Most 
      graphics and spreadsheet programs will accept this format. 

          The two available reports are very similar to the printed versions 
      of the ANNUAL ACTUALS and the BUDGET REPORT.  Each line will start 
      with the account name.  Following it will be zero values for any 
      months between the first fiscal month and your beginning month, if 
      they were different.  Next will be the Month To Date values for each 
      of the months up to the current month.  Lastly there will be zero 
      values for any remaining months in the year.  This means that all 12 
      months will be represented, but the months that are not applicable 
      will contain zero values.  Also, if you have a fiscal year different 
      from the calendar year, the first value written will be from your 
      first fiscal month, and progress from there (just as it is on the 
      printed version). 

          If you ask for a combination report, the MTD value will be written 
      first, followed by its budget value.  If you view this text file, you 
      will notice that MTD values contain a decimal point, while the budget 
      values do not.

          You can also specify that the category name and/or a blank line is 
      inserted in the report.

           When asked for a file name, you can use any legal DOS name.  Be 
      sure to include a path if necessary.  Entering a null file name aborts 
      the export. 



                                  - 28 -



                           CLOSE/OPEN MONTH
                          --------------------
          This section does just what you would expect.  At the end of each 
      month you should select the "Close Current Month" routine.  HBMS will 
      read the entire ledger for the current month, update totals, and 
      declare the following month open.  

          Remember that ledger posting and editing can only be done in the 
      current open month.  If you have to go back to a previous month to 
      make additions or changes, use the reopen feature.   



      *******************************************************************
      *      If for any reason you feel that the figures for your data  *
      *  are wrong or missing, try reopening each month until you get   *
      *  back to a valid month.  Then close each month until you get    *
      *  back to where you started.  HBMS calculates all it's values    *
      *  from the data you enter in the Ledger Posting section.  When   *
      *  you close a month, HBMS reads this data from the ledger files  *
      *  and recalculates its totals on a monthly basis.                *
      *******************************************************************





                           CHANGE YEAR/PATH
                         --------------------
          If you have several years of data or more than one budget system, 
      you can change to them without quitting the program.  When you select 
      "Y" from the Main Menu, the opening screen will reappear and you will 
      be able to change the year and data path. 























                                  - 29 -




                TO USERS of HBMS WITH VERSIONS OLDER THAN 3.0
            -----------------------------------------------------
          If you have accumulated data under older versions of HBMS you will 
      have to run the program HCONVERT.EXE to update it to the current file 
      format.  The check reconciliation feature required that I change the 
      format.  In doing so I also incorporated the STARTUP.HBM file into the 
      ACCOUNTS file.  Once you have run your data through the conversion 
      program you can delete the STARTUP file.  P L E A S E ... use COPIES 
      of your older data.  The conversion program will replace them in the 
      process.  If something goes wrong you can start over. 

          The program HCONVERT.EXE is supplied only to registered users.  
      See the ShareWare registration procedures near the beginning of this 
      document. 

          The old CREDIT/DEBIT format has been scratched and replaced with 
      INCREASE/DECREASE.  Although it worked fine in the way HBMS approached 
      it, it was confusing to many who are trained in accounting and viewed 
      it with a different meaning.  I hope this will clear up any 
      misconceptions about the way HBMS handles ledger transactions. 

          I am using a new screen writing technique beginning with v3.0 that 
      writes directly to memory.  Report speed has improved significantly.  

          HBMS now loads all it's data in a "block" format.  Also the ledger 
      transactions for the month are now held in memory.  Loading data now 
      takes less than 25% of the time it did before.  Sorted ledger displays 
      really fly now.  If you are using a floppy based system you should see 
      a big improvement. 




                             Brentson Worrell
                             6404 Mornay Dr.
                             Tampa, FL   33615
                             (813) 886-2282


















                                  - 30 -

```
{% endraw %}

## PRCHECK.DOC

{% raw %}
```

                       CHECK PRINTING for HBMS 4.11
                     -------------------------------

          Beginning with version 4.0, check printing is supported.  In 
      order to be compatible with different check forms, HBMS requires 
      instructions on what information you want to print, and where to 
      locate it.  You will have to supply HBMS with this information in the 
      form of a text file named PRCHECK.HBM.  

          You can use any word processing program that creates pure "ASCII" 
      files to create PRCHECK.HBM.  It can contain up to 40 lines of 
      instructions.  Each line consists of three items and should be in the 
      following format: 

          Number of CRLF's, Number of SPACES to skip, INSTRUCTION

      Each of the above three items must be separated by one and ONLY ONE 
      space.  Do NOT include the commas.  The Number of CRLF's refers to 
      carriage return/line feeds.  It represents how many lines you want to 
      skip from the last position of the printhead.  The Number of SPACES 
      to skip refers to how many spaces to skip from the last printed field 
      on your check.  INSTRUCTION refers to either an item to print, or a 
      print command.  If you enter "2" for the number of CRLF's, and "10" 
      for the number of spaces to skip, the instruction would be executed 
      at 2 lines down from the last printhead position and 10 spaces from 
      the left margin.  The INSTRUCTIONS are not case sensitive and only 
      the first three characters necessary.  You can use the rest of the 
      line for comments.  HBMS executes each line in succession.  This 
      means a printer command must come before the item(s) it is intended 
      to affect.  Also there are NO BLANK LINES ALLOWED, EACH LINE MUST 
      BEGIN ON THE LEFT MARGIN, and THE LAST LINE MUST CONTAIN THE 
      INSTRUCTION "END".  The other instructions you can send to HBMS are 
      listed on the next page. 

          HBMS will look for PRCHECK.HBM on the default drive\directory 
      (the same directory you run HBMS from), when you make the first 
      request to print a check.  If found and loaded, it will check each 
      line for a valid instruction.  If HBMS finds an instruction it cannot 
      understand, an error message containing the line number of the 
      problem will be displayed.  By necessity, creating a successful 
      PRCHECK.HBM file is a trial and error process.  It requires that you: 

          (1) Create and/or edit PRCHECK.HBM 
          (2) Run HBMS
          (3) Print a sample check to see if it meets your expectations.

      You probably won't have everything placed right on the first attempt.  
      This trial and error process can become a frustrating experience, but 
      it's necessary to allow flexibility in check forms.  I suggest that 
      you print a check from the "VIEW" mode of Ledger Posting, and use 
      regular paper until you get the desired results.  You should be able 
      to hold a regular sheet of paper and your check forms up to the light 
      to compare them. 



                                  - 1 -


              The instructions that HBMS understands are:

                   Field
      Instruction  Length  Meaning
      -----------  ------  -----------------------------------------
      MONth           2    Month (in digits)
      DAY             2    Day (in digits)
      SYR             2    Short form of year (last two digits)
      LYR             4    Long form of year (1988) 
      DATe            8    Full date  (10/01/88) 
      CK#             4    Check number
      PAYee          40    Source description
      AMO            10    Amount of check in digits
      SCRipt          *    Amount of check in script
      MEMo           40    Target description
      BALance        10    Balance of account after check was written
      $$$             1    Dollar sign "$"
      END             0    Tells HBMS this is the last line in file. MANDATORY!

      S50             0    Script field length of 50
      S60             0    Script field length of 60
      S70             0    Script field length of 70  {DEFAULT}
      S80             0    Script field length of 80
      S90             0    Script field length of 90

      INItialize      0    Initialize printer
      LF8             0    1/8th inch line feed
      LF6             0    1/6th inch line feed       {DEFAULT}
      PICa            0    Pica print size            {DEFAULT}
      ELIte           0    Elite print size
      CD+             0    Condensed print ON
      CD-             0    Condensed print OFF        {DEFAULT}
      IT+             0    Italics print ON
      IT-             0    Italics print OFF          {DEFAULT}
      LG+             0    Enlarge print ON
      LG-             0    Enlarge print OFF          {DEFAULT}
      DS+             0    Double strike print ON
      DS-             0    Double strike print OFF    {DEFAULT}



          The script field length instructions need further explanation.  
      When HBMS prints a scripted amount that does not take up the full 
      field, it pads the right-most side with "*" characters for security 
      reasons.  If the check amount is large, the script representation 
      could be very long and take up more room than the default field 
      length of 70 spaces.  If this happens, HBMS will print out the entire 
      script, but it will possibly throw off the spacing of any other 
      fields on the same line.  Even in condensed font it may be hard to 
      fit long script amounts on your check form.  However, most amounts 
      under $100,000.00 can be handled in 60 spaces.  One example that 
      would take 57 spaces is "SEVEN THOUSAND SEVEN HUNDRED AND SEVENTY-
      SEVEN AND 77/100".  If you want to specify a script field length 
      other than the default of 70, this length instruction must come 
      before the actual script instruction. 


                                  - 2 -


          The following 15 lines of instructions are an example of a 
      PRCHECK.HBM file: 


      3 8 CK#       line feed 3 times, move 8 spaces and print check number
      0 39 DATe     do not line feed, step 39 spaces and print date
      0 0 ELI       change to elite font (12 cpi)
      2 9 PAYee     2 line feeds, 9 spaces, and print to whom check was made
      0 0 PICa      change back to pica font (10 cpi)
      0 2 $$$       2 spaces on same line and print a dollar sign
      0 0 AMO       immediately print how much check was written for
      0 0 S60       set script field length to 60
      0 0 CD+       change to condensed font (17 cpi) for script & memo 
      0 0 IT+       set italics print on for script
      2 2 SCR       2 line feeds, 2 spaces and print amount in words(script)
      0 0 IT-       turn italics off
      2 8 MEMo      2 line feeds, 8 spaces and print what check was for
      0 0 CD-       turn condensed off
      5 0 END       tell HBMS this is the last line of file (required!)




          The above file of instructions would allow HBMS to print a check 
      similar to the example below.  The labels "Chk#:", "Date:", "Payee:", 
      and "Memo" are assumed to be existing on the form already, and the 
      smaller font is not represented. 

      ----------------------------------------------------------------
      |                                                              |
      | Chk#: 1001                                   Date: 10/01/88  |
      |                                                              |
      | Payee: Corner Drug Store                        $     14.95  |
      |                                                              |
      | FOURTEEN AND 95/100 **************************************** |
      |                                                              |
      | Memo: School supplies                                        |
      ----------------------------------------------------------------












                             Brentson Worrell
                             6404 Mornay Dr.
                             Tampa, FL   33615
                             (813) 886-2282


                                  - 3 - 

```
{% endraw %}

## TESTDRIV.DOC

{% raw %}
```

                TEST DRIVE .....  the Home Budget Management System 

          Welcome to the HBMS "test drive".  This file and the sample data 
      has been included for demonstration purposes.  Following the steps in 
      this document can be the most efficient way to acquaint you with HBMS, 
      show off SOME of its capabilities, and help you decide if the program 
      will serve your needs.                            

          The time period for this data is from January through April, 1984.  
      However, in the interest of disk space, the ledger files for January, 
      February, and March are missing.  This means that you will be unable 
      to view or print transaction entries for these three months.  Also you 
      should not try to reopen March.  The actual totals for these months 
      are still recorded in the accounts file. 

          Be aware that this data is fictitious.  If some of the amounts or 
      descriptions seem odd, bear with me. 

          Please follow the steps closely and resist the temptation to 
      experiment on your own until you have been completely through this 
      "Test Drive".  

          Make sure that the files HBMS.EXE, HBMS.OVR, CATS.84, ACCOUNTS.84, 
      and LEDGR-4.84 are on your disk.  It might be helpful to check off the 
      steps as you go along.  Having a copy of the documentation to refer to
      could also be handy.  

          Throughout this document the verb "strike" will mean to tap the 
      intended key only.  You will not have to use the ENTER key.  The verb 
      "enter" will mean type in your data and strike the ENTER key.  

      **********************************************************************
      **********************************************************************

      1.   Start the program by typing HBMS and strike ENTER.  Enter "84" 
           as the year of data.  Leave the data path blank (just hit 
           ENTER).  You should be at the Main Menu screen.  Notice that it 
           reminds you of the current open month and fiscal year.  

      First we will explore the Reports section, as these reports will be 
      the end result of your financial record-keeping. 

       2.  Select "R" for Reports.  Accept "4" as the Month to Report.

       3.  You will be prompted for an Account Code.  Enter "EL" to select  
           Electricity, and you will be presented with the "Monthly" view 
           of this account.

      The data inside the heavy outlined box is for the Account only.  Notice
      that a red star flags both April, and Year To Date Actuals as being 
      outside the budgeted limits.  Electricity falls under the UTILITIES 
      category, which is displayed below.  Similarly, UTILITIES is part of the 
      EXPENSES money group, which is used to calculate your NET INCOME.  

       4.  Notice the prompt on the bottom line of the screen, and strike 
           "A" for an annual view of Electricity. 

      The data in this screen is pretty much self explanatory.  

       5.  Strike the ENTER key and you will be prompted with the code of 
           the next account to report on.  Striking the ENTER key again 
           will accept that prompt.  

      You will find that by just using the ENTER key alone you will be 
      able to step through the accounts in the order they appear in the 
      Chart of Accounts.  

       6.  Bring the Repair/Improvement account on screen by entering "RI" 
           at the account code prompt. 

       7.  Strike "S" to select a Sorted Ledger view of Repair/Improvement. 

       8.  You will be prompted with a beginning month of 4 (April).  
           NOTE: In a normal budget you would be able to start at the 
           beginning of the year, but since the first three months of ledger 
           entries have not been included in the sample data, please accept 4 
           as a starting point.  

      All the transactions involving Repair/Improvement for April will be 
      displayed.  The numbers under the "Rec" column are the record numbers 
      of the transactions as they were entered in the Ledger Posting 
      section.  

       9.  Before leaving the sorted ledger screen, enter "CK" in the 
           account code field to view the checking account.  Notice that the 
           screen will pause when it fills so you can view the data before 
           it scrolls off.  At this point you can strike <ENTER> to continue 
           scrolling or strike <ESC> to end this account and select another.  

      By now you should have the idea of how to select the different views 
      and step through the accounts, but there is one more way of observing 
      data on screen, and it resides in the Ledger Posting section. 

      10.  Leave the Screen Reports section by using the ESC key. 

      11.  From the Main Menu, strike "L" for the Ledger Posting section. 

      12.  Notice the bottom line on the screen and enter a "V" at the 
           action prompt to view the previously entered transactions.  

      13.  Accept month 4 as a starting point. 

      You will be presented with the first transaction screen in April, 
      exactly as it was entered.  You can browse through the other 
      transactions by using the Up, Down, PgUp, PgDn, Home, and END keys.  

      14.  When finished, use the ESC key to get back to the Ledger Posting 
           screen.  

      At this point you have seen some of the screen reporting capabilities 
      of HBMS.  The printed reports are just as informative, but please 
      wait until later to try them.  In some cases you will have to 
      configure your printer first, as HBMS is designed to make full use 
      dot matrix capabilities. 

      If you have stayed with me this far and have been favorably  
      impressed, please continue and I'll demonstrate two different methods 
      of entering ledger data into the system.  


      15.  You should be at the Ledger Posting screen with the Action prompt 
           waiting.  Accept "D" for Decrease.  

      16.  Enter "CK" for Checking as the "source" account.  The current 
           balance for that account will be displayed.  

      17.  Enter "123" as the check number.  

      18.  Enter "16" as the date. 

      19.  Enter "The Drug Store" for the Payee. (Source description) 

      20.  Enter $14.73 for the amount of the check.  Notice how the amount 
           turns to a negative value.  That's because you will be decreasing 
           the balance of that account (by writing a check).  

      Now you will disburse the money to the "target" accounts.  

      21.  Instead of accepting the full amount, enter $9.95 as a target 
           amount.  

      22.  Enter "FC" for the target code.  

      23.  Enter "Processing" for the target description.  

      24.  You will be prompted with the remaining $4.78 as the value for 
           the next target amount.  Accept it. 

      25.  Enter "RX" for the account code. 

      26.  Type in "Vitamins" for the description but DO NOT hit ENTER. 

      27.  This will be a good chance to experiment with the editing keys 
           of HBMS.  Try the HOME key, the END key, the INSERT and DELETE 
           keys.  Save the ESC key for last.  

      28.  Striking ESC should blank the description field.  Type in the 
           Tilde "~" character only and hit ENTER.  

      This action will automatically enter whatever was in the Payee/Payor 
      field above.  It can come in handy on certain types of transactions.  

      29.  At this point you will have to decide whether the above 
           information is ok.  Strike "N" for no.  Now you are in the "EDIT" 
           mode.  Use the ENTER key to step through the fields by accepting 
           each value until you get back to the Rx Drugs description.  
           Change the description back to "Vitamins".  

      30.  Accept the information as being ok. 

      For the second and last screen we will do a Spending Cash transaction.  

      31.  Strike "D" for Decrease, enter "SC" for Spending Cash, and accept 
           the same date.  There is no check number, and in this case, 
           nothing in the Payee field.  


      32.  Leave the source amount field empty for this transaction. 

      When the source amount is left empty, HBMS will keep a running total 
      as you disburse the money to the target accounts listed below. 

      33.  Enter $2.05, "BM" for Books/Magazines, and any description you 
           desire. 

      34.  Enter $3.53 and "EO" for Eating Out. 

      Notice how a running total is being tallied for Spending Cash in the 
      source amount field. 

      35.  At this point you could continue to list as many items that you 
           bought with spending cash on this date.  When finished leave an 
           amount value empty and you should be prompted for the "Above Ok" 
           decision. 

      36.  You can return to the Main Menu by striking ESC at the Action 
           prompt.  




      Please be aware that HBMS has many more features, and even some short 
      cuts.  By now though you should have an idea of what HBMS is designed 
      to do.  I hope it suits your needs. 

```
{% endraw %}

## WHATSNEW.DOC

{% raw %}
```

                             HBMS HISTORY FILE


    VERSION 4.11 (December 1989)
    ----------------------------
    Released to fix the following bugs. (no new features)

    1.  If entries were made out of date sequence, the new sort feature 
        incorporated in v4.1 could cause balances to be displayed wrong 
        on sorted reports and in the reconciliation section.  No data
        was affected, only the report was in error. 

    2.  The "Ledger by Account" printed to a printer normally, but when 
        directed to a file, it printed the header only.



    VERSION 4.1  (November 1989)
    ----------------------------
    NEW FEATURES:

    1.  Repetitive or similar transactions can now be saved to "templates".  
        Whole screenfuls of transaction data can be easily inserted with 
        a couple of keystrokes. 

    2.  Ability to assign due dates to these templates to remind you about 
        any transactions due. 

    3.  The editing features in Ledger Posting have been improved: 

        a.  Now you have the ability to delete a "Target" item without 
            affecting any remaining lines below it.  

        b.  When editing, you now have the option of retaining the "Source" 
            amount or setting it back to zero.  If retained, HBMS will act 
            just as it does when the data was first entered.  In other 
            words, a checksum will be kept and you will be alerted if you go 
            over the source amount, or stop before satisfying that amount.  
            Before, HBMS would allow you only one chance to do this. 

        c.  In order to make the above feature easier to use, the Up and Down 
            arrows work slightly different now.  Before, if you used Down 
            arrow at the ACTION prompt, it jumped straight to the first 
            Target amount.  Now it stops at the Source amount. 

        d.  In normal posting mode, if you enter a source amount HBMS will 
            prompt you with the remaining balance on Target amounts.  When 
            editing, this feature was disabled so that any correct amounts 
            would not be changed.  Now if you are editing, and do not set the 
            source amount to zero, you have the option of using the F1 key to 
            insert the remaining balance. 

    4.  New "calculator" style input for numerical entries.  A number field 
        can be zeroed by the first typed digit, a Backspace, or an ESCape. 


    5.  ESCape key now works more consistently.  No more having to hit ENTER 
        on a "null" value, the ESC key will do.  Also, if you decide not to 
        accept a prompted value (such as an account code), the first typed 
        character will erase whatever was there before.  No more having to 
        use ESC to blank the field first. 

    6.  "Setup" now incorporated in the main program. (no HBSETUP.EXE needed) 

    7.  Sorted Ledger reports are now sorted by date first, then check #. 

    8.  All printed reports can now be directed to a file. 

    9   File export now writes in a "Standard Data Format" to an ASCII file.  
        It is comma delimited and strings are enclosed in quotes. 

   10.  Budget "Totals" routine changed to a multiple entry scheme. 

   11.  All "entry" fields appear in the same color now. (makes it more 
        consistent and easier to select colors) 


    BUGS FIXED (from v4.01)
    ---------- 
    1.  If you tried to "KILL" the last transaction screen of data left in a 
        month, HBMS saw negative record numbers, and would fail. 

    2.  If you went to Reports, View, or Account Maintenance from the Action 
        prompt (in Ledger Posting section), there was a slight possibility 
        that a printed check might show the wrong balance or month. 

    3.  Now, absolutely no printed report will be more than 59 lines for 1/6" 
        line feed, or 79 lines for 1/8" line feed.  Some printers insist on 
        providing their own form feed if the page exceeds 60/80 lines. 

    4.  If you used the "Y" selection from Main Menu to load data from a 
        different year or disk, AND the current open month on the new data 
        was the same as the data you just left, AND you had already accessed 
        the Ledger Posting screen, HBMS would continue to use the old LEDGR-
        m.yr data until you attempted to change months.  This was a nasty 
        bug, but there was only a remote chance that ALL the circumstances 
        would be met.                                      

    5.  If you left the "Data path" field on the opening screen blank, there 
        was a small possibility that HBMS could check the wrong disk for free 
        space.   

    6.  In the reconciliation section, if your HBMS balance was a negative 
        amount, and did not agree with your statement amount, an incorrect 
        "difference" amount could be reported. 


    =======================================================================


      VERSION 4.01  (February 1989)
      -----------------------------
      NEW FEATURES:

      * Provided new documentation on HBSETUP program as well as clarifying 
      other parts of main documentation.

      * Started to include the information to print checks, which was 
      previously provided to registered users only.  

      * HBMS will now display in black and white, unless you create an 
      appropriate COLORS.HBM file via the HBSETUP program.  This avoids 
      problems with amber monitors on color cards. 


      BUGS fixed (from v4.0, main reason for this release)
      -----------
      * In the re-sequence routine, all previous versions did not prevent you 
      from specifying the same position number for both the code to be moved, 
      and its intended position.  This of course would serve no useful 
      purpose, but if it did happen, the code would be rendered inaccessible.  
      Also the Category resequence screen failed to list the position numbers. 

      *  In the Ledger Posting section: (1) if you were prompted with a 
      remaining balance in a TARGET amount field, and (2) used the DEL key to 
      delete the numbers shown but left leading spaces, and (3) decided to 
      abort by striking the ENTER key, the program would hang.  This should 
      have been a rare occurrence because the ESC key is far quicker and 
      easier to use than the DEL key, and this event could only happen under 
      a combination of the above three circumstances. 

      * In the Reconciliation section, if you cleared all checks in the last 
      fiscal month, the program would flag the first month as having 
      uncleared checks.  Ordinarily this would cause no harm unless you 
      started your budget in the middle of your fiscal year.  HBMS would not 
      find the missing "LEDGR" files (inexcusable bug).  Also if you "edited" 
      a checking transaction, it would not adjust the last uncleared month if 
      necessary. (minor annoyance) 

      * In check printing, if you tried to print a date field after printing 
      a script amount, the date would be corrupted.  (Should have been a rare 
      request.) 

      * When trying to print a "Sorted Ledger by Account" and the account in 
      question contained no entries the page length was not checked.  If this 
      happened near the bottom, it could cause it to run over. 

      * Would not let you "change" an account in a "full" category.  This 
      condition could be overcome by changing the account to another category 
      first, making the change, and then changing back to the full category. 

    =======================================================================


      VERSION 4.0  (November 1988)
      ----------------------------
      NEW FEATURES:

      * Faster operation throughout. 

      * Improved documentation.

      * The long awaited transaction editing ability.

      * You can now have a fiscal year different from calendar year.

      * Check printing by user-designable format.

      * Select your own screen colors.

      * New setup program for colors and printer commands. 
        (improved printer support)

      * Ability to go straight to Account Maintenance or Reports from the 
        "Action prompt" in Ledger Posting.

      * Change to a different budget year and/or path without quitting. 

      * Ability to reconcile liabilities. (credit cards purchases, etc.) 

      * Delete accounts already marked for reconciliation.

      * Much more careful with your data.  Full I/O error trapping allows a 
        second chance when a full disk or other Input/Output problems occur.

      * Handles paper out or other printer errors.

      * Ability to pause during printout or abort printout.

      * Now resets printer back to normal after printouts.

      * Erases the data area in reports when changing accounts.
        (avoids confusion)

      * New opening screen and command line parameters.

      * Escape key now works on all menus.

      * New insert feature on input routines.

      BUGS FIXED:

      * If the beginning month was different from the first fiscal month, 
        the average totals would be calculated wrong.

      * An extra title page was sometimes printed on income/expense printouts. 


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1302

     Volume in drive A has no label
     Directory of A:\

    ACCOUNTS 84      11025  11-12-89   5:44p
    CATS     84        594  11-12-89   5:44p
    HBMS     DOC     86851  12-10-89   8:10p
    HBMS     EXE     75936  12-10-89   8:10p
    HBMS     OVR     67108  12-10-89   8:10p
    LEDGR-4  84       6954  11-12-89   5:44p
    ORDER    FRM      2337  12-10-89   8:10p
    PRCHECK  DOC      8500  12-10-89   8:10p
    README   BAT      4315  12-10-89   8:10p
    TESTDRIV DOC      9496  12-10-89   8:10p
    WHATSNEW DOC      9549  12-10-89   8:10p
    FILE1302 TXT      2739   7-10-90   2:15p
    GO       BAT        40   1-01-80   6:00a
    GO       TXT       745   1-01-80   3:09a
           14 file(s)     286189 bytes
                           28672 bytes free
