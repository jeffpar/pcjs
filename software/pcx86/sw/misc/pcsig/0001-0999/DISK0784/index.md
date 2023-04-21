---
layout: page
title: "PC-SIG Diskette Library (Disk #784)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0784/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0784"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "CHECKMATE"

    Keep an accurate account of your personal finances -- without all the
    hassle.  It records and maintains your checking and charge transactions
    while giving you full editing capabilities at your fingertips. It sorts
    and prints reports, searches for selected items, helps you reconcile
    your statements, and even prints your checks for you. CHECKMATE can
    also print checks and reports in any of three pitches, and reports can
    be printed in two different layouts.
    
    CHECKMATE is very intuitive. It has a user's guide and built-in,
    context-sensitive help menus.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CHECKS.DOC

{% raw %}
```
Ordering Checks

CheckMate allows you define your own check layout, and you do not need to use
continuous form checks.

However,  CheckMate will automatically configure itself for computer form
checks (and save you the effort).

You may order continuous form checks compatible with CheckMate from
NEBS Computer Forms.

NEBS requires that your first order be by mail (since they need one of
your blank checks to create new ones).  You can get an order form and
some sample checks by calling NEBS toll-free at

     1-800-225-9550

Ask for an order form and sample checks.  Be sure and mention that you are
using "Custom Technologies' CheckMate", and reference code Number "95024".

This code is unique to Custom Technologies and NEBS needs this in
order to send the correct sample package.  This will also help expedite
your order.

CheckMate supports two checks from NEBS:  product number is 9029-1 (no stub)
and product number 9025-1 (with a stub).

SPECIAL OFFER!  Through a special arrangement with NEBS, users who register
CheckMate will receive a coupon for 250 window envelopes FREE with their
first check order.  That's an $18.50 value!  (Note: this offer applies to
product number 775 "Du-o-Vue" envelopes, and uses the 9025-1 checks with
stubs).  Offer may end without notice.

If you have any other questions, call Custom Technologies directly.  We
can also supply you with additional check samples and order forms.

See the CheckMate User's Guide for information regarding the proper setup
for these checks.
```
{% endraw %}

## CM.DOC

{% raw %}
```










      ------------------------------------------------------------------

                  CheckMate (tm) -- Introductory User's Guide
                                 Version 1.70A
                            Released July 28, 1988

                Copyright (c) 1986,87,88 by Custom Technologies
                              All Rights Reserved


                   1-800-541-6234 (Orders Only, 24 hrs/day)
                    (719) 282-0402 (Questions and Support)
      

      ------------------------------------------------------------------
                    Custom Technologies is a member of the
                    Association of Shareware Professionals
      ------------------------------------------------------------------

      
      
      
      The CheckMate software is property of Custom Technologies.  You
      are granted a limited license to use this software on an
      evaluation basis.
      
      CheckMate is provided AS IS, with no warranty expressed or
      implied.  Custom Technologies specifically disclaims any and all
      warranties including but not limited to fitness for a particular
      purpose.
      



      CONTENTS
      
      1. Introduction.................................................2
           1.1 Greetings
           1.2 Features
           1.3 Support
           1.4 Other Products
      2. Things You Need to Know......................................5
           2.1 The Bottom Line
           2.2 The Pull-Down Menu System
           2.3 The Help System
           2.4 Date Formats
           2.5 Editing in CheckMate
      3. Installing CheckMate.........................................7
           3.1 Hardware Requirements
           3.2 File Paths
      4. Running CheckMate............................................8
           4.1 Setting Up Accounts
           4.2 Entering and Editing Transactions
           4.3 Generating Reports
           4.4 Financial Calculator
           4.5 Setup
      5. Final Thoughts..............................................17
      Appendix A.....................................................18
      
      
      



























      
      CheckMate (tm) Introductory User's Guide                         1



      1. INTRODUCTION
      
      1.1 Greetings
      
      Greetings!  Welcome to CheckMate, a full-featured, interactive
      home financial program.
      
      CheckMate is designed to help you keep an accurate track of your
      personal financial activity... no more will you have to "guess" at
      your balance, or labor furiously to make your checkbook match your
      bank statement.  CheckMate will record and maintain your
      transactions, with full editing capabilities at your fingertips.
      It will sort and print reports, search for selected items, help
      you reconcile your statements, and even print your checks for you.
      Your balances are automatically updated and reported, and your
      records are accurate to the penny... guaranteed!
      
      
      1.2 Features
      
           - Uses intuitive pull-down menu system
           - Supports up to eight accounts simultaneously
              (total number of accounts is limited only by disk space)
           - Supports Checking and Savings accounts
           - Up to 32,767 transactions may be active per account
           - Prints reports in standard format or in Borland Intl's
               Traveling SideKick (tm) format
           - Reports and Checks may be printed in PICA, ELITE or
               CONDENSED print
           - Transactions may be edited or printed and search criteria
               may be specified on ANY field in the transaction
           - Check printer supports continuous feed AND standard checks
               (YOU define the check printing in the Check Set-Up form
                and can use your own checks!)
           - Allows  100 predefined transactions that can be called up
               at a keystroke (such as mortgage payments, utility
               bills, etc)
           - Provides a financial calculator for quick figures on
               loans, regular deposit accounts, and compounding
           - Helps you reconcile your accounts when your statements
               arrive, and prints a complete report of outstanding
               transactions
           - Includes extensive, context sensitive on-line help
      
      
      CheckMate is very intuitive, and you should be able to evaluate it
      effectively with this user's guide and the built-in context
      sensitive HELP.  We suggest that you make good use of the HELP
      system by pressing the <F1> key (note that some help screens have
      multiple pages, use <PgUp> and <PgDn> to move back and forth
      through the message).  Additional documentation is available,
      however, and may be obtained by registering.  The complete manual
      is much more detailed than this introductory guide, and includes a

      
      CheckMate (tm) Introductory User's Guide                         2



      "quick start tutorial" as well as a "commonly asked questions"
      appendix.
      
      We hope you enjoy CheckMate!
      
      Tim Bougan
      President, Custom Technologies
      
      
      
      1.3 Support
      
      CheckMate, like many other fine "shareware" products, has been
      released by its authors to the public for evaluation.  We allow
      and encourage free copying and distribution of the program (in its
      un-altered original form).  We are committed to supporting and
      improving CheckMate, as well as developing additional products.
      
      If you find CheckMate useful, you should register your copy.  The
      shareware concept is meant to provide a full working copy to the
      user for evaluation, and NOT to give away the author's hard work.
      If you choose not to register, then erase or pass your copy on to
      someone else.  You can register by sending $29.95 (plus $3
      shipping and handling).
      
      When you register, you will be placed on our mailing list and will
      receive a new disk and a complete, 112-page illustrated User's
      Guide. The User's Guide is 5.5"x8.5", glossy covered, typeset,
      offset press printed, and saddle stitched.  You will also receive
      the latest version of CheckMate on disk and be eligible for
      telephone support.  We also offer low cost upgrades and discounts
      on future products to registered users.
      
      We accept checks, money orders, CODs, MasterCard, and VISA.  Make
      checks payable to Custom Technologies.  Colorado residents please
      add 3% sales tax.  Send your registration and all other
      correspondence to:
      
                              Custom Technologies
                                 PO Box 62118
                       Colorado Springs, CO  80962-2118
                                (719) 282-0402
      
      You may also order our products (charge cards or COD) by calling
      TOLL FREE:
      
                         1-800-541-6234 (Orders Only)
      
      If you are outside the United States and can't call toll free, you
      may reach our order line at:
      
                         (719) 597-8389 (Orders Only)
      
      This line is open 24 hours a day, seven days a week.  If you have
      
      CheckMate (tm) Introductory User's Guide                         3



      questions, want to make a quantity or dealer purchase, or if you
      need support, call:
      
                                (719) 282-0402
      
      Thank you for your support!
      
      
      1.4 Other Products
      
      We also have released CheckMate-GL, a fully functional, multiple-
      entry general ledger (accounting) package that integrates with
      CheckMate.  If you need a more detailed break-down of your
      expenses and revenues, or if you run a business, then CheckMate-GL
      is for you.
      
      -- CheckMate-GL Features:
      
           - Uses intuitive pull-down and pop-up menu system
           - Fully implemeted "classical" general ledger system for
             both home and business use
           - Integrates with CheckMate (tm) Personal Financial Software
           - Supports up to 256 accounts simultaneously
           - Powerful search and filter routines available for all
             databases and reports
           - Unique "Quick-Look" reports (including pre-posting)
           - Flexible pre-defined reports with output flow control
           - Unique and powerful "custom" report command language for
             the power user with automatic generation for the novice
           - Fully editable journal entries allowing pen and ink
             corrections (no reverse entries!) prior to posting
           - Allows 50 predefined journal transactions that can be
             called up at a keystroke
           - Pop-up chart of accounts for quick reference
           - Pop-up accountant's calculator with rolling tape
           - Includes extensive, context sensitive on-line help
      
      You can order CheckMate-GL by sending $39.95 plus $3 shipping and
      handling.
      
      













      
      CheckMate (tm) Introductory User's Guide                         4



      2. THINGS YOU NEED TO KNOW
      
      
      This section discusses some of the "basics" of CheckMate's
      operation.
      
      
      
      2.1 The Bottom Line
      
      As you run CheckMate, the bottom line of the screen summerizes the
      functions that are available to you.  It is always present, and
      should speed your use of the program as you become familiar with
      its many capabilities.  Most of CheckMate's functions are
      activated by the PC's function keys.  The bottom line identifies
      the operation of these keys (and others).
      
      
      2.2 The Pull-Down Menu System
      
      CheckMate uses the popular "pull-down" menu system as its primary
      user interface.  After your start CheckMate, you will see a row of
      five "choices" for you to choose from.  You may select any of the
      choices in one of two ways: first, by moving the high-lighted bar
      to the item of your choice (using the left or right arrow keys)
      and then pressing "return" (which we will also refer to as <CR>),
      or, by pressing the starting letter of your choosing.  Either
      method will instantly produce a secondary menu (with a bar that
      moves up and down instead of left to right).  Select individual
      functions in the same manner.
      
      
      2.3 The Help System
      
      As mentioned earlier, CheckMate includes built in on-line help.
      Just press <F1> at any time while running CheckMate for instant
      help.  Some help screens have multiple pages, so use <PgDn> and
      <PgUp> to move through the message.  The help screens are
      contained in the file "CM.HLP" and this file must be present in
      the program file path at runtime. The program file path is set
      with CMINST.COM.
      
      
      2.4 Date Formats
      
      One of the most annoying aspects of many programs is rigid data
      entry, especially DATES.  Our goal is to make life (computing, at
      least) a little bit easier, so we built a "free-format" date entry
      into CheckMate.  Whenever CheckMate calls for a date to be
      entered, you can key it in almost any fashion you choose.  Dates
      like 7-12-84, 3/5/86, 12 Sept 82, and so forth are all valid.  So
      long as you include some delimiter between the month, the day, and
      the year CheckMate should figure out what you mean.  A delimiter
      can be a space, a dash, a slash, or virtually any non-number or
      
      CheckMate (tm) Introductory User's Guide                         5



      non-letter.  You can even leave all or part of the date out, and
      CheckMate will use defaults (the DOS date).
      
      
      2.5 Editing within CheckMate
      
      All data entry fields within CheckMate are fully "editable." The
      following control-key combinations are defined within CheckMate:
      
           Control Key     Alternate Key               Function
           -----------     -------------       -----------------------
      
           Control-D        right-arrow        move one character right
           Control-S        left-arrow         move one character left
           Control-F                           move one word right
           Control-A                           move one word left
      
           Control-E        up-arrow           move up one field
           Control-X        down-arrow         move down one field
      
           Control-G        DEL                delete character at cursor
           Control-T                           delete word right
           Control-K                           delete field right
           Control-Y                           delete entire field
           Control-H        BACKSPACE          delete character left
      
                            INS                toggle INSERT/OVERWRITE
      
      
      Notice that the control sequences closely resemble those of
      MicroPro's WordStar (tm).  We chose these combinations because of
      WordStar's popularity.  For your convenience we have also
      implemented the PC's standard editing keys as alternatives.
      
      
      


















      
      CheckMate (tm) Introductory User's Guide                         6



      3. INSTALLING CHECKMATE
      
      
      3.1 Hardware Requirements
      
      CheckMate will run on an IBM PC/XT/AT/jr/PS2 (or compatible) with
      at least 256K of memory and 1 DSDD floppy disk drive (2
      recommended).  It supports all IBM compatible displays.
      
      
      3.2 File Paths
      
      You can specify the files paths for which CheckMate will look for
      its overlay and data files with CMINST.COM.  If you are using a
      hard disk, you can put CheckMate's program and overlay files in
      one directory and its data files in another.  If you include the
      program file path in a DOS "PATH", you can run CheckMate from any
      drive or directory.  If you are using a floppy disk system, you
      should put you data files on drive B and your program files on
      drive A.  (You can use CheckMate on a single drive system, but you
      will have limited space for data files.  You should remove all
      unnecessary files from your working disk, like CMINST.COM and
      perhaps even CM.HLP).  If you are using floppies but have a good
      sized RAM disk, CheckMate's performance will increase
      significantly if you copy its program files to the RAM disk.
      
      Run CMINST (make sure that CM.COM is in the default directory
      first) and set up your paths.  CMINST will first display the
      current default paths and then prompt you to enter new ones.  In
      order to save disk space, CMINST is a simple program and does not
      include CheckMate's editing features.  Note that entering only a
      <CR> at the prompts will cause CMINST to clear the file paths (and
      CheckMate will use the default directories when run).  Before you
      do run CheckMate, make sure that the paths you selected are valid
      (you may need to create them).
      
      

















      
      CheckMate (tm) Introductory User's Guide                         7



      4. RUNNING CHECKMATE
      
      
      4.1 Setting Up Accounts
      
      The first pull-down menu includes five functions associated with
      setting up and maintaining accounts.  They are described below.
      
           1)  Enter Accounts --
                Here is where you set up your accounts.  The first field
                holds the full name of the account.  The next field is
                for a shorter name that will appear on the menu.  The
                account type can be either Checking or Savings, with
                checking the default. (You will find that virtually any
                type of account can fit in one of these two general
                categories).  Enter your account number and the opening
                balance.  If the account is checking, you can enter the
                number of the next check that you will write.  When you
                are satisfied with your entries, press <F10> to save the
                account.  You can create up to eight accounts.
      
           2)  Edit Account --
                You can modify account data with this function.  The
                <F3> key will pop-up a menu with all your accounts
                listed.  Choose the account you want to change and
                proceed as you did when you created it.  Use <F10> to
                save your changes.  If you modify the opening balance,
                CheckMate will automatically update the entire data
                file.
      
           3)  Delete Account --
                This is a drastic step.  The data and index files for
                the account are gone forever.  Use the <F4> key to
                delete.  For safety, you will be prompted to confirm
                your intention.
      
           4)  Select Default Account --
                Use this function to select the account you wish to use
                for transaction entry and for the reports.  Note that
                the first account that you enter will automatically be
                selected at start-up, so enter your most active account
                first.
      
           5)  Rebuild Account Files --
                There are two reasons that you may want to use this
                function.  The first one is to condense the data file
                after a significant number of deletions (ie after
                purging old transactions).  Deleted records will be
                reused automatically, but you may want to use this
                function anyway to make back-up files smaller.  Another
                reason for using this function is to repair corrupted
                files.  Abnormal shutdown (such as a power loss) can
                cause files to be improperly closed.  Other problems can
                occur for a variety of reasons.  If your files seem
      
      CheckMate (tm) Introductory User's Guide                         8



                improper or CheckMate reports an error, try this
                function.  It should fix most problems.  A <CR> will
                start the process, <ESC> will abort the function.
      
      
      4.2 Entering and Editing Transactions
      
      The next pull-down menu list the four functions associated with
      maintaining the transactions within the accounts.
      
           1)  Enter Transactions --
                When you select this function, you will immediately see
                another menu asking for the type of transaction you wish
                to make.  Select the type, and press <CR>.  The screen
                that appears next is based on the type of transaction
                that you are making and the type of account you are
                using.  Fill in the blanks accordingly.  The "Account
                Number" field is not for the account you are using, but
                rather a reference for the transaction (such as your
                VISA credit card number if you are writing a check to
                VISA).  You can direct the check printer to print this
                number anywhere on your check (more on this later).  The
                "Tax Flag" is simply a boolean value you can use to mark
                checks that are tax deductible.  "Printed" and "Cleared"
                are used by CheckMate and will automatically be updated
                as appropriate.  You should set the "Printed" field
                yourself if you are not going to use your printer to
                print your checks or if you are entering old
                transactions.  You can mix use of your printer and
                writing by hand to your heart's desire (Personally, I
                hate writing checks!).  The "Cleared" field is to help
                reconcile your accounts.  Mark this field ONLY if your
                the transaction already appears on your  bank statement.
                The "Expensed" flag in  used  to indicate  whether  or
                not  the  transaction  has  been "merged"  into
                CheckMate-GL (our  full-fledged  general ledger
                complement to CheckMate).
      
                At any time while entering transactions, you can bring
                up a menu of frequent transactions by pressing <F2>.
                You set these frequent transactions up in the Set-Up
                menu.  This is a powerful timesaver, and one that you
                will really appreciate.
      
                The <F3> key brings up the Transaction Type menu so that
                you can change types (as you enter multiple
                transactions).
      
                The <F10> key will add the transaction.  If the
                transaction is entered out of sequence, the transaction
                file will be updated to reflect the change.
                Transactions are always stored chronologically.  For
                writing checks, the check number is incremented after
                each transaction.  You can change the number and write
      
      CheckMate (tm) Introductory User's Guide                         9



                them out of sequence, but keep a close eye on the check
                number since CheckMate has no way of knowing what you
                are doing.
      
           2)  Editing Transactions
                One of CheckMate's most powerful features is your
                ability to edit any transaction quickly and without
                reverse entries.  Selecting the Edit Transactions
                function will take you to the last transaction that was
                entered.  You can edit this transaction or move from
                transaction to transaction with the <F7> and <F8> keys.
                You can make changes to any field, and you can even pop-
                up your frequent transactions menu just as you can while
                entering transactions.  You save your changes to disk
                with <F10> (CheckMate will prompt you first for
                confirmation).  As always, CheckMate will update the
                entire file to reflect the alterations.
      
                To help you quickly find a particular transaction, we
                have provided a robust "search" utility.  Press <F5> to
                activate the search window.  Here you can specify
                criteria that must match any transactions to be edited.
                Of particular use is the EXACT MATCH versus the ANY
                MATCH function.  With ANY MATCH you can look for key
                words within any field.  For instance, you may enter the
                word "gulf" in the Payto field and hit the <F6> key.
                You would match entries like "Gulf Power", "Gulf Coast
                Community College", or "Dr. Gulfman."  CheckMate looks
                for any occurance of the string "gulf" (regardless of
                case).  You can use <F7> and <F8> to move through the
                different transactions that match your search
                specifications.
      
                You can also specify the type of transactions to search
                for using the <F3> key.  The default is "All Types."
      
                SPECIAL NOTE:  Since CheckMate's files are keyed ISAM,
                specifying the starting and ending dates can
                significantly increase search performance.  CheckMate
                maintains an index file based on dates, and limiting
                your search dates will decrease the file accesses that
                CheckMate has to make.
      
           3)  Deleting Transactions --
                Select this function when you wish to remove individual
                transactions.  This function is identical to Editing
                Transactions.  When you want to delete an entry, simply
                press <F4>.  CheckMate will prompt you for confirmation
                before proceeding, and then it will update the
                transaction file.
      
           4)  Purging Transactions --
                You will use this function to remove multiple
                transactions, probably as you close out a year and start
      
      CheckMate (tm) Introductory User's Guide                        10



                a new one.  If you want to keep a backup, do it before
                you purge, as purged transactions CANNOT be recovered.
                You may want to rebuild your account files (as described
                above) to reclaim the released space.
      
      
      4.3 Generating Reports
      
      The Reports menu has four options (for very different functions).
      They are described below, but first there are a few common
      features that should be discussed.
      
      All of the reports may be printed in any of three "pitches", which
      are PICA, ELITE, or CONDENSED.  To use these pitches, your printer
      must be capable of supporting them.  You must enter the control
      codes to configure your printer in the Printer Setup function
      (discussed later).  You may specify a separate pitch for your
      checks and reports.
      
      With the exception of printing the checks, you can choose from two
      different "types" for you reports.  The "Standard Type" is for
      8.5x11 inch paper in a three ring binder. The alternate type is
      "Traveling SideKick."  (Traveling SideKick is a trademark of
      Borland International).  Selecting this option will generate
      reports in a style suited for inclusion in the Traveling SideKick
      binder.  Borland International has been a breath of fresh air to
      the microcomputing world, and many of their products served as
      inspiration for CheckMate.
      
      Some of the reports offer a choice of format as well.  The short
      format gives a one line, quick glance at the data.  This is the
      default.  The long format gives a comprehensive view of all
      available data (and consumes much more paper!).
      
      In addition to the above options, you may also specify where you
      wish the reports to go.  You may channel them to the printer
      (default), to a disk file, or to the screen.  If you specify a
      disk file, then you must enter a valid file name for the report to
      be written to.  If you choose the screen or the printer, then you
      may choose between continuous printing or have it pause between
      pages.  You may abort any report at any time by pressing the <ESC>
      key.
      
      You may also supply an optional title to be printed at the top of
      your reports.
      
           1)  Transaction Register --
                Here is where you generate lists of all your
                transactions.  You may set any of the above options
                before you start.  You may also "selectively" print
                transactions by invoking the same "search" window that
                was described in the Editing Transactions function.
                Only the transactions that match your pattern will be
                printed.  Press <F5> to bring up the search window, and
      
      CheckMate (tm) Introductory User's Guide                        11



                either <F5> again to find exact matches, or <F6> for the
                more powerful "any match" search.  The short report
                format  will generate one line for each transaction,
                while the long report includes all of the data.  At the
                end of the transaction report, CheckMate will list
                totals for the transactions printed.
      
           2)  Print Checks --
                Now for the best part -- printing the checks.  With
                CheckMate, you can let your printer write your checks
                and you DO NOT have to buy expensive, computer form
                checks (unless you want to).  Virtually any checks will
                work, and almost any printer.  See the Check Setup
                function in the Setup menu.  When you first invoke this
                function, you will see a search window appear.  You must
                specify the starting and stopping dates for printing.
                The defaults are the beginning and end of the file, and
                it could be slow if the computer always has to start at
                the beginning to look for unprinted checks.  Pressing
                the <TAB> key in the search window will bring up the DOS
                date.  Press <F5> after you have specified the dates,
                and you will be ready to print.  If you are using
                continuous form checks, you can print them all at once.
                If not, the computer will prompt you one at a time.  As
                checks are printed, CheckMate will automatically update
                the "Printed" field in the transaction.  The <F7> and
                <F8> keys will move you back and forth through the
                available checks.  When all the checks are printed,
                CheckMate will display a message and return to the menu.
      
           3)  Reconcile Account --
                At the end of each month there is a day of reckoning.
                Its here that CheckMate can really help.  When you enter
                this function, press <F4> to start the reconciliation
                process.  CheckMate will prompt you, transaction by
                transaction, for all entries that have cleared on your
                current bank statement (you should have the statement in
                front of you).  When you have marked all of the
                transactions, you generate the report with the <F10>
                key.  (Remember to select your format and print options
                first).  CheckMate will print a report listing all
                remaining outstanding transactions, your actual balance,
                your outstanding balance, and what your statement
                balance should be.  If there are no mistakes, this
                figure will match the one on your statement.  Most of
                the time they will match perfectly.  If not, you can use
                CheckMate's report and editing features to find and
                correct the mishap.
      
           4)  Account Report --
                Use this function to print general reports of all
                defined accounts.  Again, you can select format, type
                and print options before you proceed.  The long report

      
      CheckMate (tm) Introductory User's Guide                        12



                format generates a report similar to the one generated
                in the Reconcile Accounts function.
      
      
      4.4 Financial Calculator
      
      The Calc menu includes three popular functions that we believe you
      will find useful.  Although they have no bearing or effect on
      CheckMate's data files, they provide helpful information to assist
      you making financial decisions.  The functions are robust in that
      you can calculate any one variable by providing the others.  For
      instance, you can calculate the interest rate on a loan by
      providing the monthly payment, the amount borrowed, the length of
      the loan, and the number of payments per year.  Simple set the
      interest rate to zero and press <F4>.
      
           1)  Loans --
                Calculate loans based on APR (annual percentage rate).
                This is the most popular and widely used method.  To
                reemphasize, you may calculate ANY of the variables that
                you wish, but you can set only ONE variable to zero at a
                time.
      
           2)  Regular Deposits --
                These are savings accounts, IRAs, etc.  The method for
                calculating interest varies from bank to bank, so these
                values may be slightly different from the ones your bank
                generates.
      
           3)  Compounding --
                This function is not widely used, but basically shows
                how a fixed sum of money will grow if left unused.
      
      
      4.5 Setup
      
      Perhaps CheckMate's strongest point is its flexibility.  The
      following paragraphs describe the how you can configure CheckMate
      to suit your particular needs.
      
           1)  File Directories --
                By selecting this function, you can view the file paths
                that CheckMate searches while looking for its program
                and data files.  For logistical reasons, we chose to
                make manipulation of these paths available through a
                separate installation program (CMINST.COM).  CheckMate
                fully supports the DOS 2.0 (and above) directory struc
                ture.
      
           2)  Edit PayTos --
                In this section you can pre-define checks that you write
                often (such as monthly bills).  When first invoked, a
                menu appears.  This menu lists previously defined
                PayTos.  Note that although only ten items are
      
      CheckMate (tm) Introductory User's Guide                        13



                displayed, there are FIFTY that are available.  The
                <PgDn> and <PgUp> keys will scroll through the five
                available pages.  You may select any one to edit (if you
                select a blank entry, you are essentially adding a new
                PayTo).  You can enter as many fields as you like, and
                they will be automatically inserted in your check when
                you select the item off the menu while entering
                transactions.  This can be a tremendous timesaver.  The
                <F10> key will save your changes to disk, while the <F4>
                key deletes an entry.  SPECIAL NOTE:  On some items, the
                amount of the check will change from month to month
                (like your power bill).  In these cases leave the amount
                blank, and the cursor will automatically jump to it when
                you select the item from the menu.
      
           3)  Edit Reasons --
                This function is identical to Editing PayTos except that
                "Reasons" are used for deposits, withdrawals, debits,
                and credits instead of checks.  You may, for instance,
                make an entry for your paycheck or an automatic IRA
                deposit.
      
           4)  Printer Setup --
                The Printer Setup function allows you to select four
                options and designate six printer control strings.  It
                is important to note that any changes made here are
                temporary unless you use <F10> to write the changes to
                disk.  Saving the changes requires the presence of
                CM.COM on the program file path, and you must not change
                the name of the file!
      
                The first option is for the type of printer that you are
                using.  You have two choices (IBM or generic).  The only
                place where this choice will make a difference is in
                printing Traveling SideKick style reports.  If you
                select IBM, the reports will use IBM block graphics for
                borders.  The <F3> key brings up the menu.  (Traveling
                SideKick is a trademark of Borland Int'l, IBM is a
                trademark of International Business Machines).
      
                The next option that you have is for the type of reports
                that you will print.  You may select the standard style
                or the Traveling SideKick style (which is suitable for
                inclusion in the Traveling SideKick binder). Pressing
                <F4> will pop-up the appropriate menu.
      
                The third option sets the pitch for printing reports.
                You have PICA (10 cpi), ELITE (12 cpi), or CONDENSED (17
                cpi).  To use this option you must specify the
                appropriate control codes in the Printer Setup strings
                (discussed below).  The <F5> key brings up a menu for
                selecting the report pitch.
      

      
      CheckMate (tm) Introductory User's Guide                        14



                The last option allows you to specify the pitch that you
                want your checks to be printed with.  This is
                independent of the report pitch but just as above you
                must specify correct printer control codes in the
                Printer Setup strings.  Press <F6> for the menu.
      
                The printer control codes can be found in your printer
                manual.  You have six available strings that you can
                enter.  The format for entry is
      
                          \<decimal code>\<decimal code>\....
      
                The back-slashes delimit the codes.  Below is an
                example:
      
                          \27\85
      
                This string represents an <ESC> 'U'.  (That's an escape-
                capital-U).  This is a popular means of defining printer
                codes.  CheckMate comes pre-installed for an IBM
                graphics printer.
      
                The Half-Line Feed String should advance the carriage
                one half line.  If your printer supports this feature,
                enter the correct string here.  This will enable
                CheckMate to print your checks on half-lines (this is
                sometimes necessary to be able to effectively print
                single feed checks). If you want to print on whole-lines
                only, then leave this field blank.
      
                The PICA, ELITE, and CONDENSED Pitch strings should
                configure your printer to the correct pitch.  The
                Printer Setup and Exit strings are optional and provided
                for your convenience.
      
           5)  Check Setup --
                When you create an account, CheckMate will automatically
                configure your check setup for NEBS COMPUTER FORMS
                continuous feed checks.  You may use this setup if you
                wish, or you may erase the entries (by pressing <F9>)
                and enter your own definition.
      
                If you want to use NEBS checks, then call NEBS directly
                at:
      
                                1-800-225-9550
      
                Tell the operator that you want check samples for
                "Custom Technologies' CheckMate", and give them code
                number "95024".  They should then send you an order form
                and check samples suitable for CheckMate.  The NEBS
                product number is 9029-1.
      

      
      CheckMate (tm) Introductory User's Guide                        15



                If you want to define your own layout, then press <F9>
                to clear the definition that CheckMate created.
      
                The Check Setup form allows 22 entries.  Each entry has
                4 parts, a Line Number, a Variable Number, a Column
                Number, and a Length.  The Line and Column Numbers refer
                to the lines and columns on your checks.  You will need
                to print out a template to determine these locations.
                Use the Print Template option on the SetUp menu to print
                out your template.
      
                The Variable Numbers are defined within CheckMate, and
                their definitions are listed in appendix A.  In each
                entry, enter the line number of the variable, the
                variable number, the column number, and the maximum
                length that each variable can have.  Note that you have
                the option of printing checks in several different
                pitches, and that these values will differ with the
                different pitches.  Also note that line numbers are in
                increments of 1/2, so that the line numbers 1.5, 3.5,
                etc are valid.  In fact, you will most probably need to
                define some variables on the check on these half-line
                boundries (if so, you MUST define a valid half line feed
                string as described above). It is a good idea to
                experiment with some blank sheets of paper until you are
                satisfied with your check layout.
      
                You also need to indicate whether you are using
                continuous form checks or not, and you must indicate the
                length in lines of each check (regardless of whether or
                not they are continuous).
      
                The variable definitions are in Appendix A.  Note that
                you may maintain a separate check definition for each
                checking account that you have.  Pressing <F10> saves
                the definition to disk (in your account data file, NOT
                in CM.COM!).
      
           6)  Print Template --
                Use this function to print a template on an 8.5x11 sheet
                of paper (or continuous paper).  You can then use the
                template to help you define your checks.  The template
                will be printed out in the pitch that you selected to
                print your checks in, and you will insert your checks
                into the printer in the same manner that you inserted
                your template.
      
      






      
      CheckMate (tm) Introductory User's Guide                        16



      5. FINAL THOUGHTS
      
      We sincerely hope that you find CheckMate to be work-saving,
      friendly, and helpful.  Please pass it along to your friends.
      Remember that you can help us improve CheckMate with your support
      (by registering) and with your comments and ideas.  If you find
      any bugs or need assistance, do not hesitate to write to us.  We
      try to answer all our correspondence and are committed to making
      CheckMate everything that it can and should be.  Happy computing!
      
      











































      
      CheckMate (tm) Introductory User's Guide                        17



      APPENDIX A -- CheckMate Variable Definitions:
      
      
        Variable #       Variable       Format           Example
      
           0             Date           MMM DD, YYYY     May  4, 1986
           1             Date           MMM DD           May  4
           2             Date           YYYY             1986
           3             Date           MMM              May
           4             Date           DD               04
           5             Date           YY               86
           6             Date           MM               05
           7             Date           MM/DD/YY         05/04/86
           8             Date           MM/DD            05/04
      
           20            Amount         DD,DDD,DDD.CC    1,184,877.76
           21            Amount         DDDDDDDD.CC      1184877.76
           22            Amount         DD,DDD,DDD       1,184,877
           23            Amount         DDDDDDDD         1184877
           24            Amount         CC               76
           25            Amount         .CC              .76
      
           30            Amount         DD,DDD,DDD.CC    ***1,184,877.76
           31            Amount         DDDDDDDD.CC      *****1184877.76
           32            Amount         DD,DDD,DDD       ******1,184,877
           33            Amount         DDDDDDDD         ********1184877
      
           40            Balance        DD,DDD,DDD.CC    1,184,877.76
           41            Balance        DDDDDDDD.CC      1184877.76
           42            Balance        DD,DDD,DDD       1,184,877
           43            Balance        DDDDDDDD         1184877
           44            Balance        CC               76
           45            Balance        .CC              .76
      
           60            Amount String  (spelled out amount)
           65            PayTo
           66            For
           67            Account Number (to be printed on check)
           68            Comments
           69            Addr1 (Address Line #1)
           70            Addr1 (Address Line #1)
           71            Addr1 (Address Line #1)
      
           80            Tax Flag       'Tax Ded'
      
           90            Check Number   NNNNNNNN         1546
      
           100           '.'
           101           ','
           102           '$'
           103           '('
           104           ')'
           105           '*'
           106           '-'
      
      CheckMate (tm) Introductory User's Guide                        18



           107           '+'
           108           'L' (British Pound Sign)                          -                      
      
           120           Bank Account Name
           121           Bank Account Number
      
           130           'Date:'
           131           'Check Number:'
           132           'Payto:'
           133           'Amount:'
           134           'Balance:'
           135           'For:'
           136           'Comments:'
           137           'Account Number:'
           138           'Address:'
           139           'Dollars'
      





































      
      CheckMate (tm) Introductory User's Guide                        19

```
{% endraw %}

## FILES784.TXT

{% raw %}
```
Disk No  784
Program Title: CHECKMATE version 1.70A
PC-SIG version 1.1
 
CHECKMATE is a financial program designed to help you keep an accurate
account of your personal financial activity with a minimum of hassle and
unnecessary work.
 
CHECKMATE will record and maintain your transactions, with full editing
capabilities at your fingertips.  It will sort and print reports, search
for selected items, help you reconcile your statements, and even print
your checks for you.  CHECKMATE can also print checks and reports in any
of three pitches, and reports in two different layouts.
 
CHECKMATE is very intuitive, and allows you to evaluate it effectively
with its user's guide and the built-in context sensitive HELP.
Additional documentation is available, however, by registering.
 
Usage:  Financial
 
System Requirements:  None.
 
How to Start:  Type CM (press enter).
 
Suggested Registration:  $29.95  (+ $3.00 S&H).
 
File Descriptions:
 
CM       COM  Main CheckMate program
CM       000  Data file
CM       OVL  Overlay file used by CheckMate
CM       HLP  Help file
CMINST   COM  Installation program
ORDER    DOC  Order form
CM       DOC  User`s guide
READ     ME   Information on update changes
CHECKS   DOC  Information on how to order checks for this program
 
PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987,88 PC-SIG Inc.

```
{% endraw %}

## ORDER.DOC

{% raw %}
```

          CheckMate Series Order Form

          To:  Custom Technologies
               PO Box 62118
               Colorado Springs, CO  80962-2118


          Name: _________________________________________________

          Address:  _____________________________________________

                    _____________________________________________

                    _____________________________________________

          =======================================================
          Where did you hear about (and/or receive a copy of)
          CheckMate or CheckMate-GL?

               [ ] BBS    Name_________________  Ph______________
               [ ] SIG    Name___________________________________
               [ ] CompuServe
               [ ] Friend
               [ ] Other ________________________________________

          =======================================================
          Indicate the Product and Quantity to Order:

          Product                                Qty       Price
          -------                                ---       -----
          CheckMate @ $29.95 EA                  ___    ________
          CheckMate-GL @ $39.95 EA               ___    ________
          CheckMate/CheckMate-GL Bundle Pack
            @ $59.95 (save $10!)                 ___    ________

          Shipping & Handling ($3 ea pc)         ___    ________
            ($10 outside US/Canada)
          Tax (Colorado Residents add 3%)               ________

          TOTAL.....................................    ________

          ======================================================
          Payment by:

          [ ] Check/MO    [ ] VISA    [ ] MasterCard    [ ] COD

          (Make Checks Payable to Custom Technologies)

          Credit Card Number __________________________________

          Expires __________

          Name on the Card ____________________________________

          ======================================================
          YOU MAY ALSO ORDER BY CALLING TOLL FREE 1-800-541-6234
          OR (719) 597-8389.  Operators are on duty 24 hours a
          day, seven days a week.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0784

     Volume in drive A has no label
     Directory of A:\

    CHECKS   DOC      1556   6-30-88   7:27a
    CM       000    111360   7-28-88   5:41a
    CM       COM     36530   7-28-88   5:41a
    CM       DOC     47851   7-28-88   6:25a
    CM       HLP     46144   6-27-88   5:30a
    CM       OVL     45498   7-11-88   5:00a
    CMINST   COM      5272   4-25-88   6:15a
    FILES784 TXT      1418   9-16-88   3:08p
    GO       BAT        38   6-18-87   1:25p
    GO       TXT       848   9-16-88  11:11a
    ORDER    DOC      2221   6-26-88   8:16p
    READ     ME       5225   7-28-88   6:15a
           12 file(s)     303961 bytes
                           11264 bytes free
