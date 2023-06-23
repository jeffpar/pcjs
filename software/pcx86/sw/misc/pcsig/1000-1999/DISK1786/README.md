---
layout: page
title: "PC-SIG Diskette Library (Disk #1786)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1786/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1786"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "EXCHEQUER"

    This checkbook program is designed primarily for home users and small
    businesses wishing to automate and simplify the process of paying their
    bills.
    
    EXCHEQUER avoids the complexities of most small accounting
    programs, yet provides many features which support small business
    accounting. It also offers powerful and flexible reporting
    capabilities. Any part of the check register can be printed in
    chronological order, sorted by category, or sorted by payee. You can
    list all transactions in a single category or to/from a single party.
    EXCHEQUER even prints an income statement, and any report can be sent to
    a printer, the screen, or a file.
    
    Features:
    
    ~ Pay all of your regular monthly bills with one keystroke per check
    ~ Looks and works just like a regular checkbook register
    
    ~ Works with virtually all types of continuous-feed checks
    
    ~ Supports an unlimited number of accounts
    
    ~ Store up to 4000 transactions
    
    ~ Assign each transaction to one of 255 user-defined categories.
    Reporting functions allow the user to sort the check register by
    category, making tax preparation a breeze!
    
    ~ Offers 10 different report types which facilitate record keeping and
    expense analysis
    
    ~ Handle transaction amounts up to $99,999.99 and register balances up
    to $999,999.99 or down to -$99,999.99. The maximum expenditures or
    deposits to any single category can be up to $999,999.99.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## EXAMPLES.DOC

{% raw %}
```






                               EXCHEQUER EXAMPLES

      This file provides a number of step-by-step examples for performing
      some of Exchequer's most basic operations.  In all of these examples,
      we assume that you are starting from the Register Screen and that you
      are using the SAMPLE files provided with  Exchequer.  (Exchequer will
      automatically load these files upon startup until you change the
      program default values).  If the Register Screen is not displayed,
      press ESC repeatedly until you hear a beep, then press F6 to move to
      this screen.

      1. PRINTING A CHECK

      There are actually two ways to print checks with Exchequer. You can
      print checks one at a time or you can print a batch of checks all at
      once.

       a) PRINTING A SINGLE CHECK

          To print a single check to Pacific Bell for $35.00, follow
          these step-by-step instructions:

          1) Press F5 to go to the Check Screen.

          2) Press Ctrl-U to clear all of the markers in the far left
             column and tell Exchequer that you want to print a single
             check.

          3) Press the down arrow key repeatedly until "Pacific Bell..." is
             highlighted.  Press <Space> to tag this check, then press F10.

          4) If a "Insert PAPER in printer" message appears, press F10.

          5) Type "35.00" to enter the amount in the highlighted data
             field, then press F10.  The check will be printed, all of the
             information will be stored in the register, and the check form
             on the screen will be cleared.  In addition, Exchequer will
             automatically advance the check number.

          6) Press ESC to return to the Checks Screen.

       b) PRINTING A BATCH OF CHECKS

      To print a batch of checks all at once, follow these step-by-step
      instructions:

          1) Press F5 to go to the Check Screen.

          2) Select the checks you want to print by using the arrow keys to
             highlight a specific check, then press the space bar to "tag"
             it.  Pressing the space bar repeatedly "toggles" the marker in
             the far left column on and off.  If this indicator is shown,
             the check is selected and will be printed.  If the marker is
             not shown, the check is not selected and will not be printed.




                                        1








          3) When you are satisfied with your selections, press F10 for
             print.  A data entry screen which looks very similar to a
             regular check will appear on your screen.  This check will
             display the information for the first check which you "tagged"
             for printing in step 2.

          4) If the amount on the check selected is $0.00, you will hear a
             beep and a message will appear on the command line to enter
             the amount of the check.

          5) You can now enter or correct any of the information shown on
             the check prior to printing it.  Use the Up, Down, Tab, Shift-
             Tab, Ctrl-Left, Ctrl-Right keys or Return to move around to
             the different fields in the check.  (See Sections C.6 for how
             to enter data).

          6) When all of the information is correct, press F10 to print the
             check.  The check will be printed, all of the information will
             be stored in the register, and the check form will show the
             information for the next check in the batch.  In addition,
             Exchequer will automatically advance the check number.

             If you decide that you don't want to print a specific check,
             press F7 to skip that check when it appears on the screen.  It
             will not be entered in the register.  Exchequer will display
             the information for the next check to be printed.  

             You can cancel printing the remaining checks in this batch at 
             any time by pressing ESC.

          7) When all of the checks you selected have been printed, 
             Exchequer will display an empty check form so you can enter and
             print additional checks.

             Press ESC to return to the Checks Screen.  When you return to 
             the Checks Screen, notice that the batch markers have been 
             cleared for all checks which you printed.

      2. FINDING A TRANSACTION IN THE CHECK REGISTER

      Exchequer provides an easy way to find a specific transaction in the
      check register.  We'll give two examples. In the first, we'll find a
      check with the check number "1130". In the second, we'll find the
      last check we wrote to "Pacific Bell".

      To find the check numbered 1130:

          1) Press Ctrl-Home to go to the top of the register.

          2) Press Ctrl-F.  A Find box will appear in place of the
             highlight bar in the register.






                                        2








          3) Press Ctrl-Left (or Shift-Tab) twice to move to the check
             number field.

          4) Type "1130" and press the Down Arrow to search down from the
             current position in the register.  Exchequer will find the
             check and display that section of the register.

      To find the last check written to Pacific Bell:

          1) Press Ctrl-End to go to the bottom of the register.

          2) Press Ctrl-F to display the Find box.  

          3) Type "Pacific Bell" and press the Up Arrow to search up from
             the current position.  Exchequer will find the last check
             written to Pacific Bell and display that section of the
             register.

      4. ADDING A TRANSACTION TO THE REGISTER

      Although Exchequer automatically stores all checks which you print
      from the Memorized Checks screen, you may want to enter other
      transactions such as checks written on your regular checkbook, ATM
      deposits, etc.  To add a transaction to the register, do the
      following:

          1) Press F9 for Add.  The Register screen will be replaced by a
             blank data entry screen which looks very similar to a regular
             check.

          2) Enter the information about the transaction in the appropriate
             data fields.  Use the Up and Down arrows, Tab, Shift-Tab,
             Ctrl-Left, Ctrl-Right or Return to move around to the
             different check fields.  (See Sections C.6 on entering data).

          3) When all of the information is correct, press F9 to Save the
             transaction.  All of the information will be stored in the
             register and the check form will be cleared.

          4) If you wish to add more transactions, return to step 2.  If
             not, press ESC to return to the Register Screen.

    5. MEMORIZING A CHECK

      One of the major advantages of using Exchequer to pay your bills is
      that you can memorize all of the data for checks which you write
      routinely.  To memorize a check (or withdrawal or deposit), do the
      following:

          1) Press F5 to go to the Memorized Checks screen.

          2) Press F9 to Add a Memorized Check.  A data entry screen will
             appear.




                                        3








          3) You can now enter the payee's name, address, the amount of the
             check (if you know it), and the category to which you want to
             assign this check.  Use the Up and Down arrow, Tab, Shift-Tab,
             Ctrl-Left, Ctrl-Right or Return to move around to the
             different fields in the check.  (See Section C.6 on entering
             data).  You can leave any of this information blank and fill
             it in later when you actually print the check.

          4) When all of the information is correct, press F9 to save the
             check.  The check will be memorized and the check form will be
             cleared so you can memorize another check.

          5) Press ESC to return to the Checks Screen.

      6. ADDING A BUDGET/EXPENSE CATEGORY

      Follow these steps to add a budget/expense category to the list of
      categories:

          1) Press F4 to move to the Categories Screen.

          2) Press F9 to Add a category.  A blank line will appear at the
             bottom of the list.

          3) Enter the category number from 1 to 99 (e.g. "91") and press
             Return.

          4) Enter the category description (e.g. "Entertainment") and
             press Return.

          5) Choose a category type by pressing <Space>, then press Return.

          6) Enter a budget amount (e.g. $225) and press Return.

          7) Enter a budget period (e.g. Month) by pressing <Space> until
             the period you want is displayed, then press Return.

          5) When all of the data is correct, press F9 to Save this
             category.  If you want to add more categories, return to  
             Step 3.  If not, press ESC to return to the Categories Screen.

      7. BALANCING YOUR CHECKBOOK

      (To try this example, you either need to create your own account and
      use your own bank statement or just make up data as you move through
      the example.)

      Exchequer greatly simplifies the task of balancing your checkbook.  
      To use Exchequer's Balance Checkbook function, do the following
      (steps 2 and 3 should be familiar from balancing your checkbook
      manually):






                                        4







          1) Review your conventional checkbook to make sure you have
             entered all transactions into Exchequer's register.  (See
             Section C.6.b).

          2) Review your bank statement to identify any other deposits or
             withdrawals which should be entered into Exchequer's
             register.  Enter all of these transactions into Exchequer.

          3) Using your bank statement, mark all transactions in 
             Exchequer's register which have cleared the bank.  To do this,
             use the arrow keys (and PgUp, PgDn, Home, End, Ctrl-Home,
             Ctrl-End) to highlight the transaction, then press the space
             bar.  A checkmark will appear in the "?" column.  Pressing the
             space bar repeatedly will "toggle" the cleared indicator on
             and off.  The marker indicates that this transaction has been
             cleared by the bank.

          4) When you have accurately marked all cleared transactions,
             press F3 to display the Accounts Options menu.

          5) Press Return to select "Balance/Reconcile Account".

          6) Enter the ending balance listed on your bank statement and
             press Return.

          7) Exchequer will calculate and show you the following data:

             *  Number of uncleared checks  

             *  Dollar amount of uncleared checks  

             *  Number of uncleared deposits  

             *  Dollar amount of uncleared deposits 

             *  Check Register Balance  

             *  Adjusted Check Register Balance 

             *  Difference 

             If the difference is equal to zero, your checking account is
             balanced.  Press ESC to return to the Register Screen (and pat
             yourself on the back!)

             If the difference is not equal to zero, your account does not
             balance.  Look for errors as you normally do when your account
             does not balance.

          8) Press ESC to return to the Register Screen.








                                        5







      8. PRINTING THE CHECK REGISTER

      To print out the entire check register file, do the following:

          1) Verify that the paper is inserted properly into the printer.

          2) Press F10 to display the Report Options Menu.

          3) Press either F10 or Return.

          4) If an "Insert PAPER into printer" message appears, press F10
             to proceed with printing.  (This message only appears if you
             have printed some checks first).

          5) Move to the top of the Register by pressing Ctrl-Home, then
             press Return to select it as the start of the report range.

          6) Move to the bottom of the Register by pressing Ctrl-End, then
             press Return to select it as the end of the report range.

          7) Press F10 or Return to print the Report.

          8) When the report is finished, press ESC to return to the
             Register Screen.

      9. PRINTING THE LIST OF MEMORIZED TRANSACTIONS

      The Memorized Checks screen does not display all of the information
      which is stored for each memorized check.  Although you can see this
      information by pressing F8 (Modify) from the Checks Screen, you may
      also want a complete printout of this data.  To obtain such a list,
      do the following:

          1) Insert paper into your printer.

          2) Press F10 to display the Report Options menu.

          3) Press the down arrow repeatedly until the "List of Memorized
             Checks" option is highlighted, then press F10.

          4) If an "Insert PAPER into printer" message appears, press F10
             to proceed with printing.  (This message only appears if you
             have printed some checks first).

          5) Press F10 or Return to print the Report.

          6) When finished, press ESC to return to the Register Screen.

      10. PRINTING THE LIST OF CATEGORIES

      Perform the following steps to print a complete list of the
      budget/expense categories you are currently using.

          1) Insert paper into your printer.




                                        6








          2) Press F10 to display the Report Options menu.

          3) Press the down arrow until the "List of Categories" option is
             highlighted, then press F10.

          4) If an "Insert PAPER into printer" message appears, press F10
             to proceed with printing.  (This message only appears if you
             have printed some checks first).

          5) Press F10 or Return to print the Report.

          6) When the report is finished, press ESC to return to the
             Register Screen.

      11. OPENING A NEW ACCOUNT

      Although a sample account is included with the Exchequer distribution
      diskette, you will undoubtedly want to open a new account.  Let's
      assume you will name this account "MYCHECKS" and will create new
      files for both categories and memorized checks.  Let's also assume
      you will continue to use the "MOORE" check layout data file.

          1) Press F3 to display the Account Options menu.

          2) Press the Down Arrow repeatedly until the "Open New Account"
             option is highlighted and press Return.  A data entry box will
             appear in the middle of your screen.

          3) Enter the name of the account (i.e. "MYCHECKS") and press
             Return.

          4) Enter the account number (i.e. 132345-32345)  and press
             Return. 

          5) Enter a description of the account (i.e. "MYCHECKS") and press
             Return.

          6) Enter the name of the file which will contain the list of
             categories for this account (i.e. "MYCHECKS") and press
             Return.

          7) Enter the name of the file which will contain the list of
             memorized checks for this account (i.e. "MYCHECKS") and press
             Return.

          8) Enter the name of the file which will contain the check layout
             data (i.e. "MOORE").

          9) If you want, you can modify the remaining values at this time.

         10) Press F9 to open the account.  Exchequer will first save the
             current account files, then create the new account files and
             switch to the new account.




                                        7








      12. SWITCHING ACCOUNTS

      In many cases, you will maintain more than one account with 
      Exchequer.  To switch accounts:

          1) Press F3 to display the Account Options menu.

          2) Press the down arrow until the "Load Existing Account" option
             is highlighted and press Return.

          3) Enter the name of the drive/directory containing the new
             account (e.g. "C:\CHECKS") and press Return.  This directory
             must already exist.

          4) Enter the name of the account you want to load (e.g.
             "MYCHECKS") and press Return.

          5) Press F9 to switch to the new account.  Exchequer will save
             all of the current data files before switching to the new
             account.





































                                        8

```
{% endraw %}

## XC.DOC

{% raw %}
```




















                                    EXCHEQUER
                                   Version 2.2



                                  USER'S MANUAL



                               Left Coast Software
                                 P.O. Box 160601
                            Cupertino, CA 95016-0601
                                 (408) 996-3130




                                 April 11, 1990






                 Copyright 1988, 1989, 1990 Left Coast Software.
                              All rights reserved.


























                           SOFTWARE LICENSE AGREEMENT 

      Exchequer is distributed as a shareware program.  It is NOT a public
      domain program!  However, we encourage you to copy the program for
      trial purposes.  The program and all associated files can be freely
      copied and shared to allow others to try Exchequer.  You may upload
      this program and all associated files to any bulletin board system
      (BBS) or on-line computer service.  You may not charge more than $10
      to distribute Exchequer in any form.   

      If you try Exchequer and decide to use it, you must register your
      copy.  If you do not register your copy, you are not authorized to
      use the program beyond an initial evaluation period of thirty (30)
      days.

      By registering, Left Coast Software grants you a license to use the
      copyrighted computer program Exchequer on a single computer, subject
      to the terms and conditions of this license.  You agree not to (a)
      modify, disassemble, or decompile the program or (b) use this program
      on more than one terminal of a network, on a multi-user computer, on
      a time-sharing system, on a service bureau, or on any other system on
      which the program could be used (other than for trial purposes) by
      more than one person at a time.  

      The registration fee for Exchequer is $15.  When you register, you
      will receive the most recent version of the program and will be
      placed on our mailing list to receive information on future upgrades
      to the program.  To register for Exchequer, send your checks to:

                               LEFT COAST SOFTWARE
                                 P.O. BOX 160601
                            CUPERTINO, CA 95016-0601
                                 (408) 996-3130

      Users located outside the U.S. please send international money orders
      denominated in U.S. dollars.  You may also register or order by
      phone.  We accept VISA and MasterCard.  A registration/order form is
      included at the end of this manual.

      THE PROGRAM ON THIS DISKETTE IS PROVIDED "AS IS".  LEFT COAST 
      SOFTWARE DISCLAIMS ALL WARRANTIES, EITHER EXPRESS OR IMPLIED, AS TO 
      THE PROGRAM OR ITS PERFORMANCE OR QUALITY, INCLUDING BUT NOT LIMITED 
      TO IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
      PURPOSE.  IN NO EVENT WILL LEFT COAST SOFTWARE BE LIABLE FOR ANY 
      DAMAGES, INCLUDING WITHOUT LIMITATION DIRECT, INDIRECT, INCIDENTAL, 
      SPECIAL OR CONSEQUENTIAL DAMAGES, LOST PROFITS OR LOST DATA, 
      RESULTING FROM THE USE OF OR INABILITY TO USE THE PROGRAM. 



















                            EXCHEQUER USER'S MANUAL

                                TABLE OF CONTENTS


      A. INTRODUCTION...............................................1
              FEATURES..............................................1
              SYSTEM REQUIREMENTS...................................2
              FILES ON THIS DISKETTE................................2
              ABOUT CHECKS..........................................3
              ABOUT THIS MANUAL.....................................3
              HOW TO BEGIN..........................................4

      B. QUICK START................................................5
              OVERVIEW..............................................5
              THE REGISTER SCREEN...................................5
              THE MEMORIZED CHECKS SCREEN...........................6
              THE CATEGORIES SCREEN.................................6
              THE SETUP AND ACCOUNTS MENU...........................6
              DATA ENTRY HINTS......................................6

      C. USING EXCHEQUER............................................8
         C.1  MEMORY MANAGEMENT.....................................9
         C.2  STARTING EXCHEQUER...................................10
         C.3  MOVING AROUND THE SCREEN.............................11
         C.4  THE FUNCTION KEYS....................................11
         C.5  COMMAND MENUS........................................13
         C.6  ENTERING DATA........................................14
              C.6.a  ENTERING DATES................................14
              C.6.b  ENTERING DOLLAR AMOUNTS.......................15
              C.6.c  ENTERING TEXT.................................15
              C.6.d  ENTERING CATEGORIES...........................16
         C.7  REGISTER SCREEN......................................16
              C.7.a  FINDING A TRANSACTION.........................18
              C.7.b  ADD TRANSACTION...............................19
              C.7.c  SPLITTING A TRANSACTION.......................21
              C.7.d  MODIFYING A TRANSACTION.......................23
              C.7.e  DELETING A TRANSACTION........................25
         C.8  CHECKS SCREEN........................................25
              C.8.a  ADDING A MEMORIZED CHECK......................27
              C.8.b  MODIFYING A MEMORIZED CHECK...................28
              C.8.c  DELETING A MEMORIZED CHECK....................30
         C.9  CATEGORY SCREEN......................................30
              C.9.a  ADDING A CATEGORY.............................33
              C.9.b  MODIFYING A CATEGORY..........................33
              C.9.c  DELETING A CATEGORY...........................34
         C.10 PRINTING A CHECK(S)..................................34
              C.10.a PRINTING A BATCH OF CHECKS....................36
              C.10.b PRINTING A SINGLE CHECK.......................37
              C.10.c QUICK ENTRY...................................37
         C.11 REPORTS..............................................37
              1.  Check Register...................................39
              2.  Sorted by Category...............................39
              3.  Sorted by Payee..................................39












              4.  Single Category..................................39
              5.  Single Payee.....................................39
              6.  Uncleared Checks.................................40
              7.  Category Totals..................................40
              8.  Income/Expense...................................40
              9.  List of Memorized Checks.........................41
              10. List of Categories...............................41
         C.12 SETUP OPTIONS MENU...................................41
              C.12.a  PRINT TEST CHECK.............................41
              C.12.b  SET DRIVE/DIRECTORY..........................41
              C.12.c  SET TODAY'S DATC.............................41
              C.12.d  SET STARTING CHECK NUMBER....................42
              C.12.e  MODIFY PROGRAM DEFAULTS......................42
              C.12.f  MODIFY CHECK LAYOUT..........................43
         C.13 ACCOUNT OPTIONS MENU.................................45
              C.13.a  BALANCE/RECONCILE ACCOUNT....................45
              C.13.b  LOAD EXISTING ACCOUNT........................46
              C.13.c  BACKUP ACCOUNT FILES.........................46
              C.13.d  OPEN NEW ACCOUNT.............................46
              C.13.e  MODIFY ACCOUNT DATA..........................50
              C.13.f  ROLL ACCOUNT FORWARD.........................51

      D. OTHER USES FOR EXCHEQUER..................................53

         CUSTOMER SERVICE..........................................54

         OTHER LEFT COAST PROGRAMS.................................55

         REGISTRATION/ORDER FORM...................................57





































                             EXCHEQUER USER'S MANUAL


      A. INTRODUCTION

      Exchequer is an easy-to-use check writing and checkbook management
      program for IBM PC-compatible computers.  It is designed primarily
      for home users and small businesses wishing to automate and simplify
      the process of paying their bills.  

      Although Exchequer avoids the complexities of most small accounting
      programs, it also provides many features which support small business
      accounting.  It provides powerful yet flexible reporting
      capabilities.  Any part of the check register can be printed in
      chronological order, sorted by category, or sorted by payee.  You can
      list all transactions in a single category or to/from a single party.
      Exchequer even prints an income statement and any report can be sent
      to a printer, the screen or a file.

      FEATURES

      Exchequer provides the following features and functions:

      *  Exchequer can pay all of your regular monthly bills with just
         one keystroke per check. 

      *  Exchequer's check register looks and works just like a regular
         checkbook register.

      *  Exchequer makes balancing your checkbook easy by automatically
         totalling all uncleared checks and deposits.

      *  Exchequer works with virtually all types of continuous-feed
         checks.  The user has complete control over the check layout.

      *  Exchequer supports an unlimited number of accounts.

      *  Exchequer's check register can store up to 4000 transactions.  An
         archive function saves the oldest transactions to a separate file
         (e.g. at year's end), thus making room for more transactions.

      *  Exchequer can memorize up to 255 predefined transactions
         (checks, withdrawals, deposits, service charges, etc.)  These
         transactions can be easily recalled and used when paying bills.

      *  Exchequer can assign each transaction to one of 255 user-defined
         categories.  Reporting functions allow the user to sort the check
         register by category, making tax preparation a breeze!

      *  Exchequer offers 10 different report types which facilitate record
         keeping and expense analysis.







                                          1







      *  Exchequer can handle transaction amounts up to $99,999.99 and 
         register balances up to $999,999.99 or down to -$99,999.99.  The 
         maximum expenditures or deposits to any single category can be up
         to $999,999.99.

      SYSTEM REQUIREMENTS

      Exchequer will run on any IBM PC, XT, AT or PS/2 compatible computer
      running MS-DOS or PC-DOS Version 2.0 or higher.  It works with any
      graphics adapter.  Exchequer requires approximately 230 K of
      available memory (after installation of any memory-resident
      programs).  Exchequer can be operated quite easily with just one
      floppy-disk drive.  The program will work with any printer which
      handles continuous-feed checks. 

      FILES ON THIS DISK

      Exchequer comes with files for a sample checking account so you can
      immediately see how Exchequer works.  The diskette containing
      Exchequer contains the following twelve files:

         FILE           DESCRIPTION
         ----           -----------

         XC.EXE         Exchequer program

         XC.CFG         Program configuration file

         SAMPLE.CFG     Configuration file for SAMPLE account

         SAMPLE.REG     Sample check register file

         SAMPLE.CHK     Sample memorized transactions

         SAMPLE.CAT     Sample list of categories

         SAMPLE.SPL     Sample split transactions

         MOORE.DAT      Sample check layout data file

         XC.DOC         This manual

         GO.BAT         Batch file which gives instructions for printing
                        documentation and starting the program

         PRINTDOC.BAT   Batch file which prints the documentation

         DISCOUNT       Information on how to get discounts from selected
                        check suppliers.

      The diskette may also include the file CHANGES.!!! which contains
      last minute information about updates to the program and the file
      CHANGES.BAT which will print the CHANGES.!!! file.  Furthermore, if
      you received Exchequer on a 3-1/2 inch disk, the disk will contain




                                          2







      the file EXAMPLES.DOC.  This file contains step-by-step examples of
      how to perform basic functions with Exchequer.  This file is printed
      automatically when you run PRINTDOC.

      To avoid accidental erasure, you should not run Exchequer from the
      distribution diskette.  We strongly encourage you to make at least
      two backup copies of Exchequer before you first use the program, then
      use one of these copies to actually run Exchequer.  

      ABOUT CHECKS

      Exchequer works with virtually any continuous-feed check which has an
      actual width of 8-1/2 inches (i.e. standard business size checks). 
      It may also work with personal size checks with a width less than
      8-1/2 inches.  You checks can be almost any length, although checks
      shorter than 3-1/2 inches may not have enough room for all of the
      information which Exchequer can print on a check.  Exchequer works
      with both top- and bottom-stub checks as well as checks with no stub.

      Most continuous-feed checks also come with multiple parts (i.e.
      carbon copies).  Business users may need three- or four-part checks
      while two-part checks should be sufficient for personal use.  It is a
      good idea to keep a copy of all checks in a safe place just to have a
      permanent record.

      Continuous-feed checks are available from your bank and numerous
      other business form suppliers and check printers.  Left Coast does
      not sell checks for use with Exchequer.  However, we have negotiated
      agreements with several reputable check vendors to provide our
      customers with checks at reduced prices.  Typically, these prices are
      10 to 20 percent less than regular prices.  To obtain these
      discounts, you must provide a specific vendor number to the check
      supplier when ordering your checks.  

      The text file DISCOUNT on the distribution disk contains the latest
      information on the check suppliers who are participating in Left
      Coast's discount check program, the discounts each is offering, and
      instruction on how to obtain the discount.  Please read this file
      carefully.  In some cases, the discounts apply to a wide variety of
      office supplies and not just to checks.

      Exchequer is specifically designed to print checks for use with
      window envelopes, thus eliminating the need to address envelopes. 
      These envelopes are available from your check supplier and are well
      worth the extra expense.

      ABOUT THIS MANUAL

      This manual is designed to give a complete explanation of Exchequer
      to the relatively inexperienced computer user.  Since Exchequer is
      specifically designed to avoid the complexities of other computerized
      accounting systems, no prior knowledge of accounting is assumed or
      needed.  Experience with writing checks and balancing a checkbook is
      assumed, however.




                                          3








      All users should start by reading Quick Start (Section B). This
      provides a quick overview of Exchequer along with the essential
      information needed to get Exchequer running in the shortest possible
      time.  Since Exchequer's user interface is designed to be
      user-friendly and self-explanatory, experienced users may find that
      this section and the first few parts of Using Exchequer (Section C)
      are all they need to read.  Even inexperienced users may want to just
      play with the program to become familiar with it.

      Using Exchequer (Section C) gives a detailed description of all
      Exchequer functions.  Users who wish to understand all of Exchequer's
      unique features should read this section in its entirety.  Others can
      use it as a reference to find solutions to specific problems.

      In particular, we draw your attention to Section C.7.c, Splitting a
      Transaction, which contains important information which applies to
      most aspects of Exchequer's operation.  It is not complicated, but it
      is important.

      If you received Exchequer on a 3-1/2 inch disk, the distribution disk
      also contains the file EXAMPLES.DOC.  This file provides complete
      step-by-step descriptions of how to perform most of the necessary
      checkbook functions (e.g. writing a check, balancing your account,
      etc.) with Exchequer. 

      HOW TO BEGIN

      "Fine", you say, "forget the manual, the examples and the sample
      files.  I've copied all the files and am ready to go.  How do I
      actually start to do some useful work with Exchequer?"  It's simple:

      1.  Run Exchequer by typing "XC" and pressing Return.

      2.  Open a new account by using the Open New Account selection from
          the Accounts Menu (F3).  Be sure to make the appropriate
          selections for your checks.

      3.  Enter your beginning balance by pressing F9 (Add). Tell
          Exchequer that this is a deposit (assuming it's a positive
          balance) by pressing 'D'.  Move to the amount field of the check
          form and enter the amount.  Move to the payee field and enter
          "BEGINNING BALANCE".  Enter this in the register by pressing F9
          again.  Press ESC to return to the register.

      3.  If you want this account to load every time Exchequer starts,
          tell Exchequer by using the Modify Program Defaults selection
          from the Setup Menu (F2).  

      4.  Insert your checks in the printer, select Modify Check Layout
          from the Setup Menu and set the location of all the fields.  

      5.  Now you're ready to start printing checks.  Press F5 (Checks),
          then F10 (Print) and away you go!




                                          4







      B. QUICK START

      The best way to learn Exchequer is to just play with it.  THERE IS
      VIRTUALLY NOTHING YOU CAN DO FROM WITHIN EXCHEQUER TO DAMAGE THE
      PROGRAM, THE SAMPLE DATA FILES, YOUR COMPUTER SYSTEM OR ANY OTHER
      PROGRAM OR DATA FILES.  Go ahead, experiment!  Computers can be fun.

      OVERVIEW

      Exchequer uses four main data files and three main screens which act
      as "windows" into these data files.  The Register Screen displays the
      contents of the check register file (e.g. the "SAMPLE.REG" file on
      the distribution diskette) and the split file ("SAMPLE.SPL").  The
      Memorized Checks Screen shows the contents of the file ("SAMPLE.CHK")
      which holds memorized checks (and deposits or withdrawals).  The
      Categories Screen displays a list of budget/expense categories which
      is contained in the category file ("SAMPLE.CAT").

      To start Exchequer, move to the directory or disk containing
      Exchequer and enter "XC" at the DOS prompt.  The program
      automatically loads the default account (the "SAMPLE.*" files on the
      original diskette) and displays the sample check register.  

      Exchequer always displays a command line at the bottom of the screen
      which indicates the active function keys and their purpose.  In
      addition, Up, Down, PgUp, PgDn, Home, End, Ctrl-Home and Ctrl-End are
      usually active and can be used to move around the screen.  

      The ten function keys are used to activate most of Exchequer's
      functions.  Most of these keys have equivalent Control-key
      combinations.  (See Section C for a complete listing).  

      The ESC key is used to cancel functions and to "back up" in the
      program.  Pressing the ESC key repeatedly will always get you to one
      of the three main display screens.  You cannot hurt anything by
      pressing ESC.  You cannot exit from the program by pressing ESC.

      Exchequer has an autosave feature which will save any of the three
      main data files after you make at least 10 changes to it.   You can
      change the number of changes between autosaves using the Setup menu. 
      To save all data files at any time, press Ctrl-F9 (Add/Save).

      Pressing F1 (Quit) saves all data files, exits Exchequer and returns
      to DOS.  If you want to quit without saving the data files, press
      Ctrl-F1 (Quit).

      THE REGISTER SCREEN

      You can add transactions to the register by pressing F9 (Add/Save). 
      Press F7 (Delete) to delete the highlighted transaction.  To modify
      existing transactions, press F8 (Modify).  While modifying
      transactions, use the PgUp, PgDn, Ctrl-Home, and Ctrl-End keys to
      move through the check register and see various transactions.





                                          5







      To find a specific transaction in the Register, press Ctrl-F. Enter
      the data you wish to match, then press the up or down arrow to find
      the first match in that direction.  To repeat the search with the
      same data, press Ctrl-PgUp to search towards the top of the register
      or Ctrl-PgDn to search towards the bottom.

      Pressing the space bar <Space> toggles the cleared marker for
      the highlighted transaction on and off.  This indicates that the
      transaction has been cleared by the bank.  

      If you press F10 (Print), you will see a list of report options.  To
      print a report, highlight it using the arrow keys, then press F10
      (Print) or Return.

      THE MEMORIZED CHECKS SCREEN

      Pressing F5 (Checks) displays a list of memorized checks, withdrawals
      and deposits.  You can delete, modify, or add memorized checks by
      pressing F7 (Delete), F8 (Modify), or F9 (Add/Save) respectively. 
      While modifying a memorized check, use the PgUp, PgDn, Ctrl-Home, and
      Ctrl-End keys to move through the list of memorized checks.

      Pressing the space bar while a memorized check is highlighted "tags"
      or "untags" that check for printing.  Ctrl-T tags all of the checks
      for payment while Ctrl-U untags all of the checks.  To print several
      checks from this list, tag them, then press F10 (Print).

      To print a single check from this list, press Ctrl-U to untag all of
      the checks, then highlight that check, press <space> to tag it and
      press F10 (Print).

      THE CATEGORIES SCREEN

      You can display a list of budget/expense categories by pressing F4
      (Categories).  Pressing F7 (Delete), F8 (Modify) and F9 (Add/Save)
      will delete, modify or add categories on this list.   Pressing F10
      (Print) displays the report options menu.

      THE SETUP AND ACCOUNTS MENU

      The function keys F2 (Setup) and F3 (Account) call up the Setup
      Options menu and Account Options menu, respectively. The Setup menu
      allows you to change the account which is automatically loaded at
      startup, change the print format for your check, etc.  The Accounts
      menu lets you balance your account, open new accounts, change
      accounts, backup your account, etc.

      DATA ENTRY HINTS

      When entering data, the Backspace key can be used to delete the
      character or number to the left of the cursor; the Delete key will
      delete the character above the cursor.  Ctrl-Backspace will delete
      the entire entry.  





                                          6







      Enter dates by typing in the date in the format shown on the screen
      (e.g. "10/26/87").  Pressing "/" advances from the month field to the
      date field, then to the year field.  You can use the Backspace key to
      delete numbers within the active field.  Dates can also be entered by
      using the "+" and "-" keys to increment or decrement the date. 

      On data fields which have a limited number of allowed responses (e.g.
      "YES/NO"), hitting the space bar will cycle through those selections.

      When you need to enter a category number, pressing F4 will show the
      Screen.  You can add, delete or modify the categories at
      this time.  If you want to select a specific category from this list,
      highlight it by using the arrow keys, then press Return.  The category
      number will automatically be entered in the appropriate data field.












































                                          7







      C. USING EXCHEQUER

      Exchequer uses three main display screens -- Register, Memorized
      Checks and Categories -- which act as "windows" into separate data
      files.  You can move to any of these screens from any other screen by
      pressing F4 (Categories), F5 (Checks), or F6 (Register).

      The Register Screen displays the contents of the check register file
      which holds data on all individual transactions for the account (e.g.
      checks, deposits, ATM withdrawals, etc).  All register files have an
      extension of ".REG".  Each register file also has a secondary file
      which contains information about split transactions; these files have
      an extension of ".SPL".  Exchequer comes with a sample register and
      split file named "SAMPLE.REG" and "SAMPLE.SPL" respectively.  The
      layout of the Register Screen is explained in detail in Section C.7,
      which also describes how to add, delete and modify transactions in
      the register.

      Exchequer also maintains a list of memorized checks, deposits, or
      withdrawals in the "memorized checks" file.  This file contains the
      name of the payee, address, amount, etc. for any transaction which
      you have memorized and want to print or enter on a regular basis. 
      For example, you can memorize the information needed to write a check
      for your mortgage each month, then print that check with just a few
      keystrokes.  All checks files have an extension of "*.CHK".  
      Exchequer comes with a sample checks file named "SAMPLE.CHK". 
      (Please note that the information on these sample transactions is for
      demonstration purposes only.)  Section C.8 explains the layout of the
      Checks Screen, along with how to add, delete and modify memorized
      transactions.

      The third major type of data file has the extension "*.CAT" and
      contains a list of budget or expense categories.  Exchequer comes
      with a sample list of categories in a file named "SAMPLE.CAT".  Since
      everyone's accounting needs vary, you will probably want to develop
      your own list of categories.  The layout and operation of the
      Categories Screen is described in Section C.9.

      Exchequer has an "autosave" feature to help prevent accidental loss
      of data.  After you perform an operation on any of the three main
      data files, Exchequer will automatically save the file if you have
      made at least 10 changes to it since it was last saved.  You can
      change this number with the Setup Options menu.   This ensures that
      you will not lose significant amounts of data during a power outage
      or similar crisis.  To save all four data files at any time, press
      Ctrl-F9 (Add/Save).  As further protection against losing data, you
      should backup your data files frequently using the Account Options
      menu.

      Pressing F1 (Quit) saves all data files, exits Exchequer and returns
      to DOS.  If you want to quit without saving the data files, press
      Ctrl-F1 (Abort).  (You can also halt execution of the program at
      virtually any time by pressing Ctrl-Break.  This is not recommended
      except in an emergency).




                                        8








      Exchequer also maintains an account configuration file with an
      extension of "*.CFG" for each account.  For example, the SAMPLE
      account has a file with the name "SAMPLE.CFG".  This configuration
      file contains data about which categories and checks files to use
      with the account.  (If this file is accidentally destroyed, it can be
      re-created simply by using the "Open New Account" from the Account
      Options menu.  See Section C.13).

      C.1  MEMORY MANAGEMENT

      Although Exchequer can handle a maximum of 4000 transactions, 255
      memorized checks and 255 categories, the actual number of
      transactions, checks and categories you can use will depend upon how
      much memory is in your computer.  Each time you add one of these
      items, you use up some memory.  In addition, splitting a transaction
      uses additional memory beyond what is required for a regular
      transaction.  The memory requirements for each item is shown below.


         ITEM          BYTES      MAXIMUM NUMBER   MAXIMUM MEMORY USAGE
         ----          -----      --------------   --------------------

         Transaction     85            4,000              340,000

         Splits         232            4,000              928,000

         Category        48              255               12,240

         Checks         415              255              106,080

      Since DOS is limited to a total of 640 Kbytes of memory and Exchequer
      itself uses about 200 Kbytes, you cannot use the maximum number of
      all items at once.  The table below shows some representative
      combinations of items for various amounts of total free memory.
      Note that even with a full complement of 640 K in your computer, not
      all of this will be available to Exchequer since the operating system
      uses some memory.

                               AVAILABLE MEMORY (KBYTES)
         ITEM              300       400       400       500       600
         ----              ---       ---       ---       ---       ---

         Transaction       600      1000      1500      2000      2500

         Splits            135       250       200       420       400

         Category          100       150       100       200       255

         Checks             50       100        50       150       200         

      If you run out of memory will using Exchequer, the program will warn
      you of this fact and you will not be able to print any more checks
      nor add any more transactions, categories or memorized checks.  You




                                        9







      can find out how much memory you have available, expressed as a
      number of transactions, by pressing Alt-M.

      If you find yourself running out of memory, there are four things you
      can do.  First, remove any memory resident programs such as Sidekick,
      print spoolers, or disk caches that you are using prior to starting
      Exchequer.  Second, delete all unnecessary memorized checks; each
      check takes up the room of five transactions.  Third, don't split
      transactions unless absolutely necessary; each split takes up as much
      memory as three transactions.  Fourth, use the Roll Account Forward
      option from the Accounts Menu to store some of your transactions in a
      separate account.  You will almost certainly want to do this at the
      end of each year.

      If you try to load an account without enough memory, Exchequer will
      tell you that you are out of memory and will not load the data files.

      Finally, the size of the files you can work with may also be limited
      if you are working from a 360 K floppy disk.  If you have a lot of
      memory in your computer and add a lot of items, there may not be room
      to store all of the files on one floppy disk.  However, Exchequer
      checks if there is enough room to save each file prior to saving it
      and provides you with an opportunity to insert a fresh disk with
      enough space.  

      C.2  STARTING EXCHEQUER

      To start Exchequer, move to the directory or disk containing 
      Exchequer and type "XC" at the DOS prompt.   You can also start
      Exchequer from any directory or drive if your PATH includes the
      directory(s) which contains the Exchequer program (XC.EXE) and
      configuration files (XC.CFG).  If you do this, the configuration file
      MUST include the name of the directory containing the default account
      files.  However, this directory does not have to be on your PATH. 
      Refer to your DOS manual for more information on the PATH statement.

      When Exchequer starts, it displays a title screen and a shareware
      information screen, then loads the files for the default checking
      account (e.g. the SAMPLE account).  Once these are loaded, the
      Register Screen will appear.  To avoid the shareware screen, start
      Exchequer by typing "XC Q".

      When Exchequer first starts, it determines which video adapter you
      are using and sets appropriate screen colors.  On some adapter/
      monitor combinations (e.g. composite monochrome monitors with CGA
      adapters), these colors may not display properly and the screen will
      be illegible.  If this happens, start Exchequer by typing "XC BW" to
      force it to use black and white. (Note: you can enter multiple
      parameters, e.g. "XC BW Q" is perfectly acceptable).

      When it starts, Exchequer also retrieves the number of the last check
      which was written on this account.  If you do not change this number
      when you are printing checks, Exchequer will automatically start
      numbering checks at the next number.




                                        10








      Finally, Exchequer retrieves the current date from your computer if
      the date has been set from within MS-DOS (refer to the DOS manual for
      how to set the date).  In any case, Exchequer allows you to change
      the date as necessary when you actually print checks or add
      transactions.

      C.3  MOVING AROUND THE SCREEN

      Exchequer displays 20 lines of information at a time in the Register
      Screen, the Memorized Checks Screen and the Category Screen. One of
      these lines is always highlighted; this is the selected item.  Many
      of Exchequer's functions are performed by highlighting an item to
      select it, then pressing an appropriate function key.

      You can move around the screens to see or select different items by
      using the four arrow keys along with the PgUp, PgDn, Home, End, Ctrl-
      Home and Ctrl-End keys.  The following table lists the action of each
      of these keys in the Register, Memorized Checks and Categories
      screens:

      Down Arrow     Moves down one line.

      Up Arrow       Moves up one line.

      PgUp           Moves up 20 lines.

      PgDn           Moves down 20 lines.

      Home           Moves to the top of the current screen.

      End            Moves to the bottom of the current screen.

      Ctrl-Home      Moves to the first item (i.e. the top) in the file.  

      Ctrl-End       Moves to the last item (i.e. the bottom) in the file. 


      C.4  THE FUNCTION KEYS

      Exchequer uses the ten function keys (F1 through F10) which are
      found at the left hand side or across the top of your keyboard to
      activate virtually all of its functions.  Most of the function keys
      have equivalent Ctrl-key combinations.  A Ctrl-key combination
      such as "Ctrl-F" is entered by holding down the key marked "Ctrl"
      then pressing "f" or "F".  (It does not matter whether you type an
      upper or lower case letter when using a Control-key combination).

      Exchequer always uses the bottom line of the screen to display a
      Command Menu/Message line.  This command line serves two purposes:

              1. Identify which function keys are active at the time.

              2. Display messages, warnings, and prompts.




                                        11








      Each of the function keys is dedicated to a specific type of function
      as listed below.  However, not all of these function keys are active
      at all times.

                      EQUIVALENT
      KEY  FUNCTION    CTRL KEY            ACTION
      ---  --------   ----------           ------

      F1   Quit          Ctrl-Q    Exits Exchequer and returns to DOS.  All
                                   data files are saved first.  You must
                                   confirm that you want to exit.

      F2   Setup         N/A        Displays the Setup Options menu which
                                   lists various options for setting
                                   program defaults, changing a check
                                   format, etc.

      F3   Accounts      N/A       Displays the Account Options menu which
                                   allows the user to open a new account,
                                   switch to another account, etc.

      F4   Categories    Ctrl-B    Switches to the Category Screen.
                         (Budget)

      F5   Checks        Ctrl-C    Switches to the Checks Screen.

      F6   Register      Ctrl-R    Switches to the Register Screen.

      F7   Delete        Ctrl-D    Deletes a memorized check, a register
                                   transaction or a category, depending
                                   upon when it is pressed.

      F8   Modify        Ctrl-E    Modifies a memorized check, a register
                         (Edit)    transaction, or a category, depending
                                   upon when it is pressed.

      F9   Add/Save      Ctrl-A    Adds and/or saves a memorized check, a
                         Ctrl-S    register entry, or a category,
                                   depending upon when it is pressed.

      F10  Reports/Print Ctrl-P    Either prints a check or displays the
                                   Report Options menu, depending upon when
                                   it is pressed.

      The action of some of the function keys -- F7 (Delete), F8 (Modify),
      F9 (Add/Save) and F10 (Print) -- depends upon when they are pressed. 
      In general, their function should be clear from the context in which
      they are used.  Complete descriptions of their workings under various
      circumstances are given in the section of this manual which describes
      that part of the program.

      In addition to the function keys, there are several Ctrl-key and Alt-
      key combinations which are active throughout the program.  (Alt-key




                                        12







      combinations are similar to Control-Key except you hold down the Alt
      key while pressing the second key).

      KEY       FUNCTION         ACTION 
      ---       --------         ------

      Ctrl-F1   Abort     Exits Exchequer and returns to DOS.  None of the
                          data files are saved.  You will be asked to
                          confirm that you want to quit.

      Ctrl-F9   Save      Saves all of the data files.

      Ctrl-F    Find      Searches for a specific transaction, memorized
                          check or category.

      Ctrl-PgUp           Repeats the last find towards the top of the
                          file.

      Ctrl-PgDn           Repeats the last find towards the bottom of the
                          file.

      Alt-S     Split     In the Register or Checks Screens, pressing Alt-S
                          displays split transactions.  During data entry,
                          Alt-S is used to split a transaction or edit an
                          existing split transaction.

      Alt-M     Memory    Displays the amount of available memory.  See
                          Section C.1 for more details.

      Alt-B     Beeps     Toggles error and warning beeps on and off.

      The ESC key is used throughout Exchequer to cancel functions, remove
      data entry screens and eliminate menus.  Pressing ESC repeatedly will
      always return to one of the three main display screens.  You cannot
      hurt anything and you cannot exit Exchequer by pressing ESC.

      C.5  COMMAND MENUS

      Three of the function keys -- F2 (Setup), F3 (Accounts), F10 (Print)
      -- call up "point-and-shoot" menus in the middle of the screen which
      list several functions.  One of the functions is always highlighted;
      this is the selected function.  To execute a function, highlight that
      function, then press Return.  Some of the options can also be
      selected by pressing an appropriate function key.  The command line
      will indicate these choices.  The following four keys can be used to
      select specific options:

      Up Arrow       Moves the highlight bar up one option in the menu.  

      Down Arrow     Moves the highlight bar down one line in the menu.  

      Home           Moves the highlight bar to the first menu option.

      End            Moves the highlight bar to the last menu option.




                                        13







      C.6  ENTERING DATA

      Whenever you need to enter data into Exchequer, a data entry form or
      box will appear.  Pressing ESC will cancel the function and remove
      the data entry box or form. 

      The most common data entry form is similar to a normal check and is
      used throughout the program to enter data for a specific transaction
      (check, withdrawal or deposit).   Whenever this form appears, a title
      will also appear at the top of the screen to indicate what function
      is being used.

      In all data entry forms or boxes, the highlighted data entry "field"
      is active and ready to accept new data.  You can move to the various
      fields by using the following keys:

      Ctrl-Right          Advances to the next data entry field.
      Down Arrow
      Tab
      Return

      Ctrl-Left           Advances to the previous data entry field.
      Up Arrow 
      Shift-Tab 

      If you move to a field which already contains correct information,
      simply move on to the next field.  You do not need to re-enter the
      information every time a field is highlighted.

      When you have entered the appropriate data, you can tell Exchequer
      that you are finished with that field by pressing any of the cursor
      movement keys discussed above or any of the active function keys. 
      Exchequer will use the information as it is currently displayed.

      Some data entry fields require you to select from a limited number of
      choices (e.g. "YES/NO").  When a fields of this type is highlighted,
      pressing the space bar will cycle through the options.  You can also
      choose an option by pressing the first letter of that option (e.g.
      "y" for YES).  Make a final selection by pressing Return, an arrow key,
      or one of the active function keys.  

      C.6.a  ENTERING DATES

      Dates can be entered directly by typing them in the format in which
      Exchequer displays them and then pressing Return.  For example, you
      could type "10/26/87" and hit Return.

      When entering dates, the date which Exchequer displays at any given
      time can be entered by pressing Return.  For example, if Exchequer
      displays "7/8/88" and you type "8/1", then Exchequer will display
      "8/1/88".  You can enter this date by pressing Return.  There is no
      need to enter the year if it is unchanged.






                                        14







      Entering dates is actually a three part process.  You first enter the
      month, then the day, then the year.  Pressing "/" advances from one
      part of the date to the other.  The cursor indicates which part of
      the date you are entering.  You can delete numbers within each part
      by pressing the backspace key.  Once you have advanced to the next
      part of the date, however, you can no longer edit the preceding
      parts.  You must first leave the date field and then return to it.

      Dates can also be entered by using the "+" and "-" keys on your
      keyboard.  Pressing "+" will advance the date one day while pressing
      "-" will decrement the date.  Holding down either key will continue
      to advance the date in that direction.  

      C.6.b  ENTERING DOLLAR AMOUNTS

      Dollar amounts can be typed directly into Exchequer.  Enter the
      dollar amount, then press "." and enter the cents amount.  If you are
      entering an even dollar amount (e.g. "$30.00"), you do not need to
      enter the decimal point and the cents.  The program automatically
      displays the amount in the correct format; you do not need to enter
      commas or a dollar sign.  (In fact, the program will beep if you try
      to do this).  

      When entering dollar amounts, the cursor shows the current location
      within the data field.  You can edit dollar amounts by using the
      Backspace key to delete the number above the cursor.  Ctrl-Backspace
      clears the field and sets the amount to $0.00.

      You can also use the "+" and "-" keys to enter dollar amounts. 
      Pressing "+" increments the amount by one cent; "-" decrements the
      amount by one cent.  To change the amount rapidly, simply hold down
      the appropriate key.

      In general, you cannot enter existing dollar amounts.  When you
      highlight a dollar field and type a new amount, Exchequer replaces
      the existing amount with the new amount.  However, if you highlight
      an existing amount and immediatley press "+" or "-", you can then
      enter the number using the Backspace key.

      C.6.c  ENTERING TEXT

      Words and combinations of words for payee names, addresses and memos
      are simply typed into the program as you would type them on a
      typewriter.  You can use the left and right arrow keys to move the
      cursor within the text field.  Pressing the Backspace key will delete
      the character to the left of the cursor; the Delete key deletes the
      character over the cursor.  Ctrl-Backspace will delete the entire
      entry.

      When you highlight an existing text field, the cursor will be placed
      at the end of the current entry and you can edit the current entry
      using the keys discussed in the preceding paragraph.   






                                        15







      C.6.d  ENTERING CATEGORIES

      Many of the data entry screens allow you to enter a Category number. 
      There are two ways to enter these category numbers.  The first is to
      enter the number directly.  As with dollar fields, Backspace deletes
      the number above the cursor location and Ctrl-Backspace deletes the
      entire field.  You can also use the "+" and "-" keys to increment and
      decrement the category number.  

      You can also enter a category number by selecting it from your list
      of categories.  If you press F4 (Categories) at any time in the data
      entry form, the Categories Screen will be displayed.  When the
      Categories Screen is displayed, you can add, delete and modify
      categories as you would normally.

      If you highlight a specific category and press Return, you will
      return to the data entry screen, and that category number will be
      entered in the Category data field.  If you press ESC while the
      Categories Screen is displayed, you will be returned to the data
      entry screen but no category number will be entered.

      C.7  REGISTER SCREEN

      The Register Screen is Exchequer's primary display and provides a
      "window" into the register data file.  By using the arrow keys along
      with the PgUp, PgDn, Home, End, Ctrl-Home and Ctrl-End keys, you can
      move around and see all of the transactions currently recorded in the
      account.  You see the Register Screen when you first start up
      Exchequer.  From either the Category Screen or the Check Screen,
      pressing F6 will move you to the Register Screen.  To reach this
      screen from any other point in the program, press the ESC key until
      you hear a beep, then press F6.

      The Register Screen is very similar to the layout of a standard
      checkbook register.  On the top line are the headings for each of the
      columns.  From left to right, these are:

          *  Check Number
          *  Date
          *  Payee
          *  ?      (This is used to mark transactions that have been
                     cleared by the bank).
          *  Checks (and Withdrawals)
          *  Deposits
          *  Balance

      Below the headings are shown 20 transactions in the check register. 
      One of the transactions on the screen is always highlighted.  This is
      the active (or selected) transaction. Whenever you load an account
      (or first start the program), Exchequer shows you the most recent 20
      transactions.  You can see other transactions by using the Up arrow,
      Down arrow, PgUp, PgDn, Home, End, Ctrl-Home and Ctrl-End keys.






                                        16







      At the left end of the second line from the bottom, the name of the
      account which is currently open is shown.  The CURRENT balance of the
      Exchequer account is shown at the right end of this line.  In the
      middle of this line is a field marked "MEMO:"  This area displays a
      30-character long memo which is stored with the selected transaction.
      As you move around the register, you will notice that this area of
      the display constantly changes.  

      If a transaction has been assigned to a budget category, this
      category is shown just to the left of the memo field.  If you see a
      "<S>" in this location, it indicates that this particular transaction
      is split, i.e. allocated to more than one category.  To see the
      details of the split, press Alt-S.

      At the bottom of the screen is the command menu showing the active
      function keys.  In addition, several other keys are active and will
      activate specific Exchequer functions.  All of the active keys and
      their functions, as described below.  (The Ctrl-key equivalents
      are given in parentheses).

      F1  (Ctrl-Q)   Exits Exchequer and returns to DOS. Any changes to
                     files are saved first.

      Ctrl-F1        Exits Exchequer and returns to DOS without saving the
                     data files.

      F2             Displays the Setup Options menu (see Section C.12)

      F3             Displays the Account Options menu (see Section C.13)

      F4  (Ctrl-B)   Moves to the Categories screen.  

      F5  (Ctrl-C)   Moves to the Checks screen.  

      F6             Not active since the Register screen is already
                     displayed.

      F7  (Ctrl-D)   Deletes a transaction from the check register.  See
                     Section C.7.e.

      F8  (Ctrl-E)   Modifies a transaction in the check register.  See
                     Section C.7.f.

      F9  (Ctrl-A)   Adds a transaction to the check register.  See
          (Ctrl-S)   Section C.7.b.

      Ctrl-F9        Saves the four main data files. 

      F10 (Ctrl-P)   Displays the Report Options menu.  See Section
                     C.11.

      Ctrl-F         Finds a transaction.  See Section C.7.a.






                                        17







      Ctrl-PgUp      Repeats the last find towards the top of the register.
                     See Section C.7.a.

      Ctrl-PgDn      Repeats the last find towards the bottom of the
                     register.  See Section C.7.a.

      Alt-S          Displays detailed information on split transactions.
                     Split transactions are indicated by a "<S>" located
                     just to the right of the memo field at the bottom of 
                     the Register Screen.

      Alt-M          Displays the amount of remaining memory.

      Space          Marks/unmarks a transaction as cleared.  Pressing the
                     space bar repeatedly "toggles" the marked indicator in
                     the "?" column on and off.  A small beep alerts you
                     whenever you change the status of this indicator.

      C.7.a  FINDING A TRANSACTION

      Exchequer offers a convenient way to find virtually any transaction
      in the check register.  Pressing Ctrl-F activates a Find function which
      allows you to specify exactly which transaction you want to find.

      When you press Ctrl-F, a small box will appear in place of the
      highlighted transaction.  You simply enter the data (check number,
      date, payee, check amount or deposit amount) that you want to match,
      then press either the Up Arrow (to find the first match going toward
      the top of the register) or the Down Arrow (to find the first match
      going toward the bottom of the register).

      Exchequer will search through the register, find the first
      transaction which matches the data you have entered, and display that
      transaction on the screen.  For example, if you want to find check
      number 1103, enter "1103" in the first field and press the Up or Down
      Arrow.  If you want to find a check you wrote to John Smith, type
      "John Smith" in the third column and press the Up or Down Arrow.

      If you enter data in more than one field, Exchequer will try to
      match all of the fields.  Thus, you can search for a check to John
      Smith dated 8/8/87 by entering "John Smith" in the payee column and
      "8/8/87" in the date column.

      When searching for a date, Exchequer will find the transaction which
      is closest to the search date if there is not an exact match. 
      Specifically,  Exchequer will find the first transaction which occurs
      on or before the search date when searching toward the top of the
      register.  It will find the first transaction which occurs on or
      after the search date when searching toward the bottom.

      The find function is case insensitive.  For example, entering "john
      smith" would find any transactions involving "John Smith", "JOHN
      SMITH", "john Smith", etc. Likewise, Exchequer will find any
      transaction where the first part of the transaction payee matches the




                                        18







      data you entered.  For example, entering "MA" will match transactions
      involving "Mary Johnson","Maryland Credit Union","Matchbox
      Industries","Mats Unlimited", etc. while "MAR" would match "Mary
      Johnson" and "Maryland Credit Union" but not "Glomar Explorer".

      If you enter an amount in either the check or deposit column, 
      Exchequer will find the first transaction which matches either of these
      fields.  For example, if you enter "$300" in the check column (with a
      $0.00 in the deposit column), Exchequer will find the first
      transaction which is either (a) a check/withdrawal in the amount of
      $300.00 or (b) a deposit in the amount of $0.00.

      The following keys are active when using the Find function:

      Ctrl-Right     Advances to the next data entry field.
      Tab
      Return

      Ctrl-Left      Advances to the prior data entry field.
      Shift-Tab

      F7             Clears the data which Exchequer will try to find.

      Up Arrow       Executes the search toward the top of the register
                     (i.e. the earliest entry).

      Down Arrow     Executes the search toward the bottom of the register
                     (i.e. the most recent entries).

      ESC            Cancels the Find function and returns to the Register
                     Screen.

      You can repeat the last search you performed at any time by pressing
      Ctrl-PgUp (to search towards the top of the register) or Ctrl-PgDn
      (to search towards the bottom).  This allows you to find multiple
      checks to the same payee very quickly.  You can also use the Find
      function when selecting part of the register for printing (Section
      C.11) or to archive an account (Section C.13). 

      Exchequer also provides a way to rapidly find checks in the register
      with consecutive check numbers.  First, find the first check in the
      sequence using the Find function.  To find the next highest check
      number, simply press the "+" key.  To find the next lowest check
      number, press the "-" key.  This is similar to pressing Ctrl-PgDn and
      Ctrl-PgUp except that Exchequer will automatically increment or
      decrement the check number.  This feature is especially useful while
      balancing your checkbook since it allows you to find consecutive
      checks and mark them as cleared.  

      C.7.b  ADD TRANSACTION

      Although Exchequer automatically records all of the data for checks
      which it prints, you must manually enter other transactions such as
      checks written on your regular checkbook, ATM withdrawals, etc.  You




                                        19







      add a transaction by pressing F9 whenever the Register Screen is
      displayed.  A blank check form will be displayed.  This form is used
      for withdrawals and deposits as well as checks.  You specify the type
      of transaction in the first data field.  

      Enter all of the data for the new entry, then press F9 to Save the
      transaction to the register.  Exchequer saves all transactions in
      chronological order.  Transactions occurring on the same day are
      sorted by check number.  After the data is saved, the check form will
      be cleared and you can add another transaction.

      Once you have saved a transaction, you cannot modify it while using
      the Add Transaction function.  You must first return to the Register
      Screen by pressing ESC, then press F8 to modify.

      In many cases, the transactions you want to add to the register will
      be stored in the list of memorized checks.  Exchequer offers a
      convenient way for retrieving memorized transactions and adding them
      to the register.  Just enter the first few letters of the payee name,
      then press Ctrl-F (Find).  Exchequer will search from the top of the
      check list and display the first memorized transaction which matches
      the data you entered.  For example, if you enter "ba", then press
      Ctrl-F with the SAMPLE files, Exchequer will display the information
      for a Bank of America service charge.  

      You can repeat the search and search toward the bottom of the check
      list by pressing Ctrl-PgDn.  To search toward the top of the list,
      press Ctrl-PgUp.  This allows you to easily review and retrieve 
      memorized checks with a minimum of data entry.  For example, you can
      just enter the letter 'P' and quickly review all memorized checks to
      payees starting with 'P'.

      This search function is case insensitive; it does not matter if you
      enter lower- or upper-case letters.  Likewise, it is length
      insensitive; Exchequer will display any check which matches the data
      you have entered.

      You can review the transactions you have just entered without
      returning to the Register Screen.  Use the PgUp, PgDn, Ctrl-Home and
      Ctrl-End keys to move through these new transactions.  To continue
      adding transactions, press F7 to clear the display first.

      Exchequer stores the most recent 100 transactions from the current
      session in memory.  It stores both new transactions and those which
      have been modified.  It does not store deleted transactions.   

      Pressing F9 at any time will add another transaction (using the data
      currently displayed on the screen) to the register.  Thus, it is easy
      to enter several similar transactions.  Enter the first transaction
      and press F9 to save it, then press PgUp to re-display it.  Change
      the data which is different, then press F9 again to save this new
      transaction to the register.  






                                        20







      (This ability to enter similar transactions may cause some confusion.
      As you are reviewing recently entered transactions, Exchequer
      displays the current check number and date, not the check number and
      date which goes with that transaction.)

      In addition to the keys discussed in Entering Data (Section C.6), the
      following keys are active while adding a transaction:

      F4             Displays the Categories Screen.

      F7             Erases the transaction which is currently displayed.

      F9             Saves a new transaction to the register. 

      Alt-S          Splits the transaction (see Section C.7.c)

      PgUp           Displays the previous transaction which has been added
                     during this session.

      PgDn           Displays the next transaction which has been added
                     during this session.

      Ctrl-Home      Displays the first transaction which was added to the
                     register during this session.

      Ctrl-End       Moves to the last transaction which was added    
                     during this session.

      Ctrl-F         Finds the first memorized check which matches the data
                     entered in the payee field.

      Ctrl-PgUp      Repeats the last search toward the top of the list of
                     memorized transactions.

      Ctrl-PgDn      Repeats the last search toward the bottom of the list
                     of memorized transactions.

      ESC            Cancels the Add Transaction function and returns to
                     the Register Screen.

      C.7.c  SPLITTING A TRANSACTION

      [The information in this section applies to most aspects of
      Exchequer's operation.  In particular, it is relevant to adding and
      modifying register transactions, adding and modifying memorized
      checks, and printing checks.]

      There are many occasions when you will want to assign a specific
      transaction to more than one category.  A prime example is when you
      pay your credit card bill.  Part of the bill might be for vacation
      expenses and another for home repairs.  And some of it you might not
      want to allocate to any category at all.  






                                        21







      Although you could write separate checks for each of these
      categories, a simpler method is to "split" the transaction.  To
      understand this better, you might want to examine the SAMPLE files
      which come with Exchequer.  In the Register, transactions which are
      split will display "<S>" at the bottom of the screen just to the
      right of the Memo field.  When you have highlighted a split
      transaction, press Alt-S to see the Split Display.

      This display shows ten separate lines of information.  For each part
      of the split, you see a category number, a brief description (15
      characters maximum), whether that part of the transaction is a
      deposit, withdrawal or check, and the amount for that item.  

      Although you can display split information in the Register, you
      cannot enter or modify data here.  You can only do that when you are
      working with the check data entry form.  For example, press F9 then
      Alt-S to add split information for a new transaction.  As you are 
      adding information, you can move around the split by using the arrow
      keys, <Return>, PgUp, PgDn, Home and End.  PgUp and PgDn will move
      you to the top and bottom of the current column.  Home moves to the
      top left corner and End moves to the bottom right corner.  Pressing
      <Return> advances the cursor to the next column; when you reach the
      end of a row, it will advance the cursor to the first column of the
      next row.

      You can select categories from the Category Screen by pressing F4. 
      The new category number is entered on the current row.  You can clear
      the entire split and start over by pressing F7.  When you are done
      entering data, press ESC to return to the check form.  Note that
      Exchequer does not save any of the data you have entered or modified
      until you press F9 (or F10 if you are printing checks).  In this
      respect, the Split Display acts just like an extension of the check
      form.

      When you enter data for a split transaction, Exchequer tries to help
      you as much as it can by acting as a smart adding machine.  If you
      enter $0.00 as the amount for a transaction then split the
      transaction, Exchequer will automatically add all of your entries as
      you make them.  It will also determine what type of transaction
      (deposit, withdrawal, check) this transaction should be.  When you
      return to the check form by pressing ESC, Exchequer will enter the
      amount of the split on the check and set the type.

      However, if you enter a non-zero amount on the check form before
      pressing Alt-S, Exchequer acts a little differently.  In this case,
      it tries to keep the total amount constant by adjusting the last item
      in the split.  This is especially useful when you don't want to
      allocate an entire transaction to various categories.  

      If you want to use all ten lines for the split, just go ahead and
      enter the information.  If the tenth line does not use 0 as the
      category number, Exchequer will revert to its "adding machine mode"
      and calculate the revised total.  Finally, you can always override
      Exchequer and put it in adding machine mode by pressing Ctrl-A.




                                        22








      This may seem quite complicated but hopefully it will be pretty clear
      if you experiment a little.  In most situations, Exchequer does
      exactly what you want it to do naturally.  

      Also, don't be confused by the need to enter a type (withdrawal, etc.)
      for each line of the split.  The ability to specify a type provides a
      lot of power and flexibility.  For example, it allows you to write
      paychecks with payroll deductions or to track the deductions from
      your own paycheck.  Rather than get into a long-winded discussion of
      accounting techniques, we refer you to the examples in the SAMPLE
      files.

      If you don't know what type to enter for a specific item in a slit,
      just remember that if money goes into the account, it's a deposit,
      and everything else is a check or withdrawal.  For purposes of
      splitting a transaction, there is no difference between a check and a
      withdrawal.  

      To reiterate, the following keys are functional while you are
      entering a split transaction:

      Ctrl-A        Invokes "adding machine mode" and adds all of the split
                    items to determine the net amount of the transaction.

      F4            Displays the Categories Screen.

      F7            Clears all of the split information.

      ESC           Removes the split display and returns to the check form.
      F9            Again, none of the data is saved until you press F9 or
                    F10 (depending upon the context).

      A final note about split transactions.  If you have created a split
      and then modify the amount or type of the main transaction, Exchequer
      will not let you save that transaction (or print a check) until you
      correct the discrepancy.  As you can imagine, having discrepancies
      between the main transaction and the split could lead to serious
      problems in tracking expenses.

      C.7.d  MODIFYING A TRANSACTION

      If you want to modify an existing transaction in the check register
      (e.g. to correct a dollar amount), highlight the transaction with the
      arrow keys, then press F8.  This transaction will be displayed on a
      check form which allows you to change any of the data.  When you are
      satisfied with the changes, press F9 to save them.

      Exchequer saves all transactions in chronological order. If you
      change the date on a transaction, Exchequer will relocate the
      transaction to its proper place in the register.

      You can review and modify other transactions without returning to the
      Register Screen by using the PgUp, PgDn, Ctrl-Home and Ctrl-End keys




                                        23







      to move through the register.  Each transaction will be displayed in
      turn and you can modify any or all of the data.  If you want to save
      the changes, you MUST press F9 before leaving a specific transaction.

      If you have not saved the changes before pressing a key that will
      leave the current transaction, Exchequer will ask you if you want to
      save the changes first.  Note, however, that if you exit the program
      directly while modifying a transaction by pressing F1 or Ctrl-F1, you
      will not be asked if you want to save your changes.  (This will be
      changed in the next version).

      You can also use the Find function while modifying a transaction.  
      Highlight the item you want to search for (i.e. Date, Checknumber,
      Payee or Amount) and enter the search key (e.g. "ACME Plumbing"),
      then press Ctrl-F.  Exchequer will search from the current location
      in the register toward the top of the register for the first match. 
      You can repeat the search by pressing Ctrl-PgUp (to search up) or
      Ctrl-PgDn (to search down).  When searching for an amount, you must
      specify the correct transaction type before the search.  You cannot
      search on multiple fields (e.g. search for a check to "ACME Plumbing"
      that was written on "1/10/88") while modifying transactions.  

      In addition to the keys discussed in Entering Data (Section C.6), the
      following keys are active while modifying a transaction:

      F4             Displays the Categories Screen.

      F7             Deletes the transaction which is currently displayed. 
                     Pressing F7 at this point works exactly like pressing
                     F7 in the Register Screen. See Section C.7.d.

      F9             Saves all changes to the transaction which is
                     displayed to the register. The transaction is stored
                     exactly as displayed.

      Alt-S          Displays split information (if the transaction is
                     already split) or splits the transaction (if it is
                     not).

      Ctrl-F         Finds a transaction.  

      Ctrl-PgUp      Repeats the last find towards the top of the register.

      Ctrl-PgDn      Repeats the last find towards the bottom of the
                     register.  

      PgUp           Displays the preceding transaction in the register.

      PgDn           Displays the following transaction in the register.

      Ctrl-Home      Displays the first transaction in the register.

      Ctrl-End       Displays the last transaction in the register.





                                        24







      ESC            Cancels the Modify Transaction function and returns to
                     the Register Screen.

      C.7.e  DELETING A TRANSACTION

      Individual transactions in the check register can be deleted by
      highlighting the transaction you want to delete and pressing F7.  BE
      CAREFUL!  Once a transaction has been deleted, there is no way to
      recover it directly.  However, you may be able to recover the deleted
      data if you keep up-to-date backups of your data files.

      To prevent accidental erasure of important data, Exchequer asks you
      to confirm that you want to delete this item.  If you do, press F7
      (or Ctrl-D) to proceed with the deletion.  Otherwise, press ESC.  

      C.8  CHECKS SCREEN

      The Checks Screen displays a list of memorized transactions (in
      alphabetical order) which have been stored by the user. For example,
      you could store all of the data to pay your mortgage (payee, amount,
      address, etc) as a single item in this list.  Each month, you could
      then write a check to the bank by pressing a single key.  Whenever
      you load an account (or first start the program), Exchequer loads
      the associated list of memorized checks.

      You can move to the Register Screen from either the Checks Screen or
      Categories Screen by pressing F5.  To reach this screen from any
      other point in the program, press the ESC key until you hear a beep,
      then press F5.

      Although it is called the Checks Screen, this list can also contain
      information on withdrawals such as bank service charges and deposits
      such as automatic payroll deposits.  This manual often refers to such
      memorized transactions as checks.  Whether we mean a memorized
      transaction or the piece of paper you give to your grocer should be
      clear from the context.

      All printing of checks is done using the Checks Screen.  The Checks
      Screen can also used to "print" memorized withdrawals and deposits. 
      Exchequer will enter these transactions in the register just like a
      check but will not actually print anything on the printer.

      The Checks Screen has five columns:

      *  Batch (the little triangle indicates that this "check" is
         currently selected for "printing").

      *  Payee (for deposits, the payee column lists the party from whom
         you received the deposit).

      *  Category number.  If a memorized check is split, this column will
         display "<S>".  You can see detailed information on the split by 
         pressing Alt-S.





                                        25







      *  Memo

      *  Amount (an amount of $0.00 indicates that the amount changes every
         month.  The actual amount is entered at the time you print the
         check).

      Below these headings are shown 20 memorized checks (or other
      transactions).  One of the checks is always highlighted; this is the
      active (or selected) transaction.  You can see other checks by using
      the Up Arrow, Down Arrow, PgUp, PgDn, Home, End, Ctrl-Home and Ctrl-
      End keys on the keyboard.

      The far left column of the Checks Screen displays a small marker
      which indicates whether that check has been "tagged" for printing. 
      When you memorize a transaction, you specify whether you want to pay
      this bill on a monthly basis.  When it first loads the list of
      memorized transactions, Exchequer recalls this data and indicates
      which checks will be printed.  You can "untag" all of these checks by
      pressing Ctrl-U.

      The name of the account which is currently open is shown at the left
      end of the second line from the bottom.  The CURRENT balance of the
      account is shown at the right end of this line.

      In the middle of this line is a field marked "TYPE:" As you move
      around the screen, you will notice that this area of the display 
      constantly changes.  This area displays the type of the currently
      highlighted transaction.  There are three transaction types: (1)
      Check (2) Withdrawal or (3) Deposit.  The only difference between a
      check and a withdrawal is that Exchequer will not print a
      withdrawal.  Thus, your mortgage payment should be a check while the
      monthly service charge on your account should be a withdrawal.

      At the bottom of the screen is the command menu which shows the
      active function keys.  In addition, several other keys are active and
      will activate specific Exchequer functions as described below. 
      (Ctrl-key equivalents are given in parentheses).

      F1  (Ctrl-Q)   Exits Exchequer and returns to DOS.  Any changes to
                     files are saved first.

      Ctrl-F1        Exits Exchequer and returns to DOS without saving
                     files first.

      F2             Displays the Setup Options menu (see Section C.12)

      F3             Moves to the Register Screen and displays the
                     Account Options menu (see Section C.13)

      F4  (Ctrl-B)   Moves to the Categories screen.  

      F5  (Ctrl-C)   Not active since the Checks Screen is already
                     displayed.





                                        26







      F6  (Ctrl-R)   Moves to the Register Screen.  

      F7  (Ctrl-D)   Deletes a memorized check from the list.  See Section
                     C.8.c.

      F8  (Ctrl-E)   Modifies a memorized check. See Section C.8.b.

      F9  (Ctrl-S)   Adds (memorizes) a check.  See Section C.8.a.
          (Ctrl-A)

      Ctrl-F9        Saves the four main data files.

      F10 (Ctrl-P)   Prints a check(s).  See Section C.10.

      Space          Tags/untags a memorized check for printing.  Pressing
                     the space bar repeatedly "toggles" the tagged marker
                     in the far left column on and off.  When this marker
                     is displayed, the check is tagged for printing.

      Ctrl-T         Tags all of the memorized checks for printing.

      Ctrl-U         Untags all of the memorized checks for printing.

      Ctrl-F         Finds a memorized check. 

      Ctrl-PgUp      Repeats the last find towards the top of the list of
                     checks.  

      Ctrl-PgDn      Repeats the last find towards the bottom of the
                     list of checks.  

      Alt-S          Displays detailed information on split transactions.
                     Split transactions are indicated by a "<S>" located 
                     in the category column.

      Alt-M          Displays the amount of remaining memory.

      The Find function for the Checks Screen works just like the Find
      function for the Register Screen (See Section C.7.a).  The only
      difference is that you can just search for the name of a payee rather
      than date, check number, etc.

      C.8.a  ADDING A MEMORIZED CHECK

      Pressing F9 whenever the Checks Screen is displayed allows you to
      memorize another transaction and add it to the list of memorized
      checks.  When you press F9, a blank check form will be displayed. 
      Enter all of the data for the new transaction on this form, then
      press F9 again to Save the check.  After this transaction is
      memorized, the check form will be cleared and you can memorize
      another transaction.

      At the top of the form, you will see the word "Check" highlighted. 
      This field identifies the type of the transaction you are memorizing.




                                        27







      (Although these are called checks, they can also be deposits/credits
      or withdrawals/ charges which don't involve paper checks).  If you
      press the space bar repeatedly, Exchequer will cycle through these
      three options.  Or you can press the first letter of the type you
      want to select.  Press Return to select the appropriate type.

      Although some payments are always the same (e.g. a fixed rate
      mortgage), other payments differ from month to month. If you know the
      amount of a check, enter it in the amount data field.  If not, simply
      store the check with an amount of $0.00 (you do not need to actually
      enter this amount since it is the default value).  Every time you
      print this check, Exchequer will prompt you for the actual amount.

      You can specify whether you want to print this check on a monthly
      basis.  To do this, highlight the "BATCH?" data field on the check
      form and press the space bar until "YES" appears. By doing this, you
      tell Exchequer that you want the check tagged for printing every time
      it starts.  (Don't worry, you can easily untag it if you don't want
      to actually print it).

      You can leave any of the information on this check form blank when
      you memorize a transaction.  Exchequer always allows you to fill it
      in or change it later when you actually print the check.

      In addition to the keys discussed in the Entering Data section
      (Section C.6), the following keys are active while memorizing a
      check:

      F4      Displays the Categories Screen.

      F7      Clears the transaction which is currently displayed.

      F9      Saves a new memorized check to the list of memorized checks. 
              The transaction is stored exactly as displayed.

      Alt-S   Splits the memorized check.

      ESC     Cancels the Add Check function and returns to the Checks
              Screen.

      C.8.b  MODIFYING A MEMORIZED CHECK

      If you want to modify an existing memorized check (e.g. to change an
      address), highlight the transaction with the arrow keys, then press
      F8.  This memorized transaction will be displayed in a check format
      which allows you to change any of the data.  When you are satisfied
      with the changes, press F9 to save them.

      You can review and modify other memorized transactions without
      returning to the Checks Screen by using the PgUp, PgDn, Ctrl-Home and
      Ctrl-End keys to move through the list.  Each memorized check will be
      displayed in turn; you can modify any or all of the data. If you want
      to save the changes, you MUST press F9 before leaving a specific
      transaction.  




                                        28








      If you have not saved the changes before pressing a key that will
      leave the current check, will ask you if you want to save the changes
      first.  Note, however, that if you exit the program directly while
      modifying a transaction by pressing F1 or Ctrl-F1, you will not be
      asked if you want to save your changes.  (This will be changed in the
      next version).

      You can also find specific memorized transactions by using the Find
      function.  Just enter the first few letters of the payee name, then
      press Ctrl-F (Find).  Exchequer will search from the top of the check
      list and display the first transaction which matches the data you
      entered.  

      You can repeat the search and search toward the bottom of the check
      list by pressing Ctrl-PgDn.  To search toward the top of the list,
      press Ctrl-PgUp.  This allows you to easily review and retrieve 
      memorized checks with a minimum of data entry.  For example, you can
      just enter the letter 'P' and quickly review all memorized checks
      to payees starting with 'P'.

      This search function is case insensitive; it does not matter if you
      enter lower- or upper-case letters.  Likewise, it is length
      insensitive; Exchequer will display any check which matches the data
      you have entered.

      In addition to the keys described in Entering Data (Section C.6), the
      following keys are active:

      F4          Displays the Categories Screen.

      F7          Deletes the memorized transaction which is currently
                  displayed.  Pressing F7 at this point works exactly like
                  pressing F7 from the Checks Screen.  See Section C.8.c.

      F9          Saves all of the changes to the memorized check which is
                  displayed to the check file.  

      Alt-S       Displays the split information (if the transaction is
                  already split) or splits the transaction (if it is not).

      PgUp        Displays the preceding memorized check.

      PgDn        Displays the next memorized check.

      Ctrl-Home   Displays the first memorized check.

      Ctrl-End    Displays the last memorized check.

      Ctrl-F      Finds the first memorized check which matches the data
                  entered in the payee field.

      Ctrl-PgUp   Repeats the last search toward the top of the list of
                  memorized transactions.




                                        29








      Ctrl-PgDn   Repeats the last search toward the bottom of the list of
                  memorized transactions.

      ESC         Cancels the Modify Check function and returns to the
                  Checks Screen.

      C.8.c  DELETING A MEMORIZED CHECK

      You can delete a memorized transaction by highlighting it with the
      arrow keys, then pressing F7 (Delete). Once a memorized transaction
      has been deleted, there is no way to recover it directly.  If you
      keep up-to-date backups of your data files, however, you may be able
      to recover the deleted data.  

      To prevent accidental erasure of important data, Exchequer asks you
      to confirm that you want to delete this item.  If you do, press F9 to
      Save the deletion.  Otherwise, press ESC.  To repeat:

      F9     Saves (confirms) the deletion.

      ESC    Cancels the Delete Check function.


      C.9  CATEGORY SCREEN

      The Category Screen displays a list of user-defined expense/budget
      categories.  By assigning your checks and other transactions to
      specific categories, you can track expenses in that category.  
      Exchequer provides several reporting functions for this purpose.

      From either the Register Screen or the Check Screen, pressing F4 will
      move you to the Category Screen.  To reach this screen from any other
      point in the program, press the ESC key until you hear a beep, then
      press F4.

      If you see "F4 Categories" on the bottom command line of a data entry
      field (e.g. while printing a check), you can also access the Category
      Screen by pressing F4.  This allows you to review your categories and
      select the appropriate one for any transaction.  You can return to
      the data entry form by pressing either ESC or Return.  If you press
      Return, the category which is currently highlighted will be entered
      into the data entry form.  If you press ESC, no changes are made to
      the data entry form.

      There are six columns in the Category Screen:

          *  NUMBER 

             Exchequer allows you to define up to 255 different categories.
             Category numbers can be any number between 1 and 999.  The
             default category number 0 is automatically assigned to any
             transaction which is not explicitly assigned a different
             category number.




                                        30








             If you try to assign a transaction to a category which does
             not exist, Exchequer will warn you of this fact.  However, it
             will still allow you to use that number (on the assumption
             that you know what you're doing).  However, these transactions
             will not be included in the Sorted By Category Reports.

          *  DESCRIPTION

             This is simply a 35 character description of the category
             (e.g. "Automobile Repair".

          *  TYPE (INCOME, EXPENSE, TRANSFER)

             The Category Type determines how Exchequer treats the category
             for reporting purposes.  THE TYPE HAS NO IMPACT UPON HOW YOU
             ENTER TRANSACTIONS OR ASSIGN TRANSACTIONS TO CATEGORIES.  You
             can make deposits or withdrawals to any type of category.  For
             example, a check you write to a customer for some returned
             merchandise could be assigned to a "Sales" Income category. 
             The "Sales" category would then give you net sales rather than
             gross sales.  If you receive a rebate on a purchase, you could
             enter this as a deposit to a "Supplies" Expense category.

             The Expense and Income types are straightforward.  Most
             personal users will probably use  just these two types.  

             The Transfer type is designed for business that need to track
             income separately from cashflow.  It is used for transactions
             which do not affect net income.  For example, a bank loan is
             an example of a transfer.  Although you receive money, it is
             not included as income for accounting or tax purposes.  

             If you use Transfer categories, Exchequer will list these
             categories below the Expense and Income categories on the
             Income/Expense Report. The report uses the Transfer data to
             calculate net cashflow for the account separately from net
             income.  Transfers are arbitrarily treated as expenses.  

          *  BUDGET
          *  PERIOD (WEEK, MONTH, QUARTER, YEAR)
          *  TOTAL

             Exchequer allows you to enter a budget for each category. 
             First, you enter a budget figure, then you enter the period
             for the budget (e.g. Week, Month, Quarter, Year).  The maximum
             allowable budget is $99,999.99.  Exchequer calculates the
             total annual budget in the far right column; you cannot enter
             this number directly.  The maximum allowable annual budget is
             thus $99,999.99 x 52 (per week) or $5,199,999.48.  However,
             Exchequer supports total withdrawals or deposits of only
             $999,999.99 in a single category.  






                                        31







             Exchequer allows you to use either set of budgets for
             reporting purposes (specifically, in the Category Totals and
             Income/Expense Reports).  You make this selection using the
             Modify Account Data option on the Accounts Menu.  If you want
             to evaluate your budget performance for the year, use the
             Total Budget.  If you want to do a comparison for a specific
             month or quarter, use the Partial Budget. When you print the
             report, be sure to select a report range which corresponds to
             your budget period (i.e. a month or a quarter).  Also, you
             must be consistent in selecting your budget periods if you
             want to do partial-year reports.  

      This screen shows 20 categories at a time.  One of the categories is
      always highlighted. This is the active (or selected) category.  You
      can see and select other categories by using the Up arrow, Down
      arrow, PgUp, PgDn, Ctrl-Home and Ctrl-End keys on the keyboard.

      At the bottom of the screen is the command menu.  This shows the
      function keys which are currently active.  In addition, several other
      keys are active and will initiate specific Exchequer functions.  All
      of the active keys and their functions are described below. 
      (Ctrl-key equivalents are given in parentheses).

      F1 (Ctrl-Q)      Exits Exchequer and returns to DOS. Any changes
                       to files are saved first.

      Ctrl-F1          Exits Exchequer and returns to DOS without saving
                       files first.

      F2               Displays the Setup Options menu (see Section C.12)

      F3               Moves to the Register Screen and displays the
                       Account Options menu (see Section C.13)

      F4  (Ctrl-B)     Not active because the Categories Screen is
                       already displayed.

      F5  (Ctrl-C)     Switches to the Checks screen.  

      F6  (Ctrl-R)     Switches to the Register Screen.  

      F7  (Ctrl-D)     Deletes a category. See Section C.9.c.

      F8  (Ctrl-E)     Modifies a category. See Section C.9.b.

      F9  (Ctrl-A)     Adds a category.  See Section C.9.a.
          (Ctrl-S)

      Ctrl-F9          Saves the three main data files.

      F10 (Ctrl-P)     Displays the Report Options menu.  See Section C.11.

      Return           When the Category Screen is called from a data entry
                       form, pressing Return selects the currently




                                        32







                       highlighted category, returns to the data form, and
                       enters the selected category in the category field.  

      ESC              When the Category Screen is called from a data form,
                       pressing ESC returns to the data entry form without
                       selecting a category.  Otherwise, pressing ESC has
                       no effect.

      Ctrl-F           Finds a category. 

      Ctrl-PgUp        Repeats the last find towards the top of the list of
                       categories.  

      Ctrl-PgDn        Repeats the last find towards the bottom of the list
                       of categories.

      Alt-M            Displays the amount of available memory.  

      The Find function for Categories works just like the Find function
      for the Register.  The only difference is that you can search for a
      category number and/or description rather than date, check number,
      etc.

      C.9.a  ADDING A CATEGORY

      To add a new budget/expense category, press F9 (Add/Save).  A new
      line will appear at the bottom of the list of categories.  Enter the
      new category number and a description of the category.  Press F9
      again to save this new category.  Exchequer will insert the category
      in the proper location and clear the bottom line so you can add more
      categories.  Press ESC to cancel and display the existing categories.

      If you try to add a category number which is already used, Exchequer
      will ask you if you want to insert this number.  If you insert a new
      number, Exchequer will automatically renumber the smallest possible
      block of categories to make room for the new number.  It will also
      renumber the categories on all register transactions and all
      memorized checks as needed.

      The following keys are active:

      F7     Clears both the new category number and its description.

      F9     Saves the new category to the list.

      ESC    Cancels the Add Category function and re-displays the list of
             existing categories.

      C.9.b  MODIFYING A CATEGORY

      To modify a category, highlight it using the arrow keys, then press
      F8 (Modify).  You can then modify the existing data or enter new
      data.  To save these changes, press F9 (Add/Save).  Pressing ESC will
      cancel the changes and return you to the Category Screen.




                                        33








      If you try to change the category number to a number which is already
      used,  Exchequer will show an error message and refuse to do this. 
      (If you truly need to do this, you can insert a new category at the
      desired location, delete it to make room, then change the number on
      the existing category).

      If you modify a category number, Exchequer will automatically update
      the register and list of memorized checks to reflect the change.

      F7     Clears both the category number and its description.

      F9     Saves the modifications to the list.

      ESC    Cancels the Modify Category function and re-displays the list
             of existing categories.

      C.9.c  DELETING A CATEGORY

      Individual categories can be deleted by highlighting them with the
      arrow keys, then pressing F7 (Delete).  BE CAREFUL!  Deleting a
      category can affect all of your data files and there is no way to
      directly recover from an accidental erasure.  However, you may be
      able to recover if you keep up-to-date copies of your data files.

      To prevent accidental deletions, Exchequer will ask you to confirm
      (save) each deletion.  If you want to delete the category, press F9
      to save (confirm) the changes.  If not, press ESC.

      If you try to delete a category which is used anywhere in either the
      register or the list of memorized checks, Exchequer will warn you of
      this fact and ask you if you want to proceed.  If you do, then press
      F9 to Save (confirm) the deletion.  Otherwise, press ESC.  If you go
      ahead and delete this category, Exchequer will search through the
      register and the list of memorized checks and change the category
      number to 0 wherever the deleted category was used.

      F9          Saves (confirms) deletion.

      ESC         Cancels the Delete Category function and re-displays list
                  of existing Categories.

      C.10  PRINTING A CHECK(S)

      You can print checks either in batch mode or one-by-one by pressing
      F10 (Print) while the Checks Screen is displayed.  You can also
      "print" withdrawals and deposits by pressing F10.  Exchequer treats
      them just like checks, except that it doesn't actually print a check.
      It does, however, enter them into the register.  When you press F10,
      the Checks Screen is replaced with a data entry form that displays
      the information for the first check which is tagged.

      You do not have to specify if you want to be in batch mode. 
      Exchequer automatically goes into batch mode whenever any of the




                                        34







      memorized transactions on the Checks Screen is "tagged".  If you want
      to print just one memorized check, you must still tag it before
      pressing F10.

      A specific check is tagged and untagged for printing by pressing the
      space bar while the check is highlighted in the Checks Screen.  When
      a transaction is tagged, a small marker appears in the far left
      column.  Pressing Ctrl-T will tag all of the checks for printing
      while Ctrl-U will untag all checks and allow you to print checks
      one-by-one.

      If you print a check with an amount of $0.00, Exchequer will print a
      blank check made out to the designated payee.  This is useful if you
      know you are going to need a specific check (e.g. to a grocery store)
      but won't know the amount until later.  Don't forget to go back and
      modify this transaction in the register once you know the amount!

      Before you first print checks, Exchequer will remind you to insert
      your checks into the printer and properly align them.  If you wish to
      test your alignment prior to printing, choose the Print Test Check
      function from the Setup Options menu (See Section C.12) or press 
      Alt-T.

      You can review other checks which you have printed (as well as any
      other transactions which you have added to the register during this
      session) without moving to the Register Screen.  Use the PgUp, PgDn,
      Ctrl-Home and Ctrl-End keys to move through a list of these new
      transactions and display them on the check form.  It is not possible
      to modify any of these transactions while printing a check.  You must
      first go to the Register Screen, then press F8 (Modify).

      However, pressing F10 at any time will print another check using the
      data currently displayed on the screen.  It is therefore easy to
      print similar checks to the same person.  Print the first check, then
      press PgUp to re-display it.  Change the data which should be
      different, then press F10 again to print this new check.  Press F7 to
      clear the check form at any time.

      The following keys are active while printing checks:

      F4           Displays the Categories Screen.

      F7           In batch mode, skips the current check.  Otherwise
                   clears all data and displays a blank check form.

      F9           In batch mode, saves any changes to the memorized check.
                   Otherwise, adds the transaction to the check list.

      F10          Prints the check.

      Alt-S        Splits the transaction.

      PgUp         Displays the preceding check which was printed during
                   this session.




                                        35








      PgDn         Displays the next check which was printed during this
                   session.

      Ctrl-Home    Displays the first check which was printed during this
                   session.

      Ctrl-End     Displays the last check which was printed during this
                   session.

      Ctrl-F       Finds the first memorized check which matches the data
                   entered in the payee field.

      Ctrl-PgUp    Repeats the last search toward the top of the check list.

      Ctrl-PgDn    Repeats the last search toward the bottom of the list.

      Alt-T        Prints a test check.

      ESC          Cancels the Print Check function and returns to the
                   Checks Screen.

      Don't forget to sign your checks before you mail them !!!

      C.10.a PRINTING A BATCH OF CHECKS

      If you have tagged any of the checks before pressing F10, Exchequer
      will automatically display the information for the first tagged check
      when you press F10.  If the amount of the check you are printing is
      $0.00, Exchequer will prompt you for the actual amount by beeping and
      moving the cursor to the amount data field.

      While a specific check is displayed, you can modify any of the data
      prior to printing and recording.   If you want to permanently save
      these changes, press F9 to save the changes.  Until and unless you
      press F9, none of these changes are saved.  You can also make
      permanent modifications to a memorized check by pressing F8 (Modify)
      while the Check Screen is displayed.

      When all of the data is correct, press F10 again to print. Exchequer
      will print the check and add the transaction to the register.  In
      addition, it will clear the batch indicator on the Checks Screen. 
      Then it will display the information for the next check.

      If you decide that you do not want to print this check at this time,
      press F7 to skip the check.  If you decide to cancel this batch of
      checks, press ESC to return to the Checks Screen.  Note that 
      Exchequer only clears the batch indicator on a check when the check is
      actually printed.  If you skip a check or cancel the batch before it
      is complete, the checks not printed will still be tagged for payment.

      When Exchequer finishes printing a batch of checks, it clears the
      check form and allows you to print checks one-by-one (see following
      section).




                                        36








      C.10.b  PRINTING A SINGLE CHECK

      If none of the memorized checks is tagged for printing when you press
      F10 (Print), Exchequer allows you to print checks one-by-one.  When
      you press F10, a blank check form is shown.

      You can now enter the data for the new check.  When all of the data
      is correct, press F10 again to print.  Exchequer will print the check
      and add the transaction to the register (but not to the memorized
      check list).  When it is done printing, Exchequer will display the
      blank check form again.  You can then enter and print a new check if
      you wish.

      If you are working with a new check and decide that you want to
      memorize it, press F9 (Add/Save) to save the information to the list
      of memorized checks.  Exchequer will assume that you do not want to
      print this check every month.  If you do, you can modify the data
      using the Modify Check function (F8 from the Checks Screen).

      C.10.c  QUICK ENTRY

      Exchequer offers a convenient way for retrieving memorized
      transactions while you are printing checks.  Just enter the first few
      letters of the payee name, then press Ctrl-F (Find).  Exchequer will
      search from the top of the check list and display the first memorized
      transaction which matches the data you entered.  For example, if you
      enter "ba", then press Ctrl-F with the SAMPLE files, Exchequer will
      display the information for a Bank of America service charge.  

      You can repeat the search and search toward the bottom of the check
      list by pressing Ctrl-PgDn.  To search toward the top of the list,
      press Ctrl-PgUp.  This allows you to easily review and retrieve 
      memorized checks with a minimum of data entry.  For example, you can
      just enter the letter 'P' and quickly review all memorized checks to
      payees starting with 'P'.

      This search function is case insensitive; it does not matter if you
      enter lower- or upper-case letters.  Likewise, it is length
      insensitive; Exchequer will display any check which matches the data
      you have entered.

      C.11  REPORTS

      The Report menu provides access to Exchequer's 10 reports.  Press F10
      (Reports) from the Register Screen or Categories Screen to access the
      Report Options menu.  

      Reports can be sent to the printer, the screen or to an ASCII file. 
      Choose the report's destination by using the left and right arrow
      keys to select the destination at the bottom of the Reports menu.  

      If you display a report on the screen, you can start and stop the
      display by pressing the <Space> key.  You cannot move up and down




                                        37







      through the report when it is displayed on the screen; once the data
      has scrolled off the top of the screen, it is lost.  Press the ESC
      key to cancel the report.  

      If you send a report to a file, you will be asked to enter the name
      for the file.  Enter any legal DOS file/pathname.  Exchequer erases
      any existing files with this name and does not check to see if this
      file exists prior to sending the report, so be careful.  Each report
      must be sent to a separate file; you cannot append a report to an
      existing file.

      To select a report for printing, highlight the desired report using
      the up and down arrows or the Home and End keys, then press either
      F10 or Return to print that report.   If you use the same printer for
      printing both checks and reports, Exchequer will remind you to insert
      regular paper into the printer before printing a report.

      You can cancel a report while it is printing by pressing ESC.  
      Exchequer will ask you to confirm that you want to cancel the report.

      For the first eight reports (which involve the check register),  you
      must select a range to be included in the report.   This provides
      great flexibility in reporting.  For example, you can list all
      transactions for a given month, find out how much money you spent on
      groceries during February, etc.  If you want to print the entire
      register or sort all of your transactions by category, simply select
      the entire register as your report range.

      Once you have selected a print range, Exchequer assumes you want to
      use this range for all subsequent reports.  The first and last
      transactions in the current print range are used as the starting
      points when you select a range for the next report.  If you want to
      use the same range, simply press <Return> to accept these points. 
      You can also select a new range if you wish.  The current range is
      reset when you leave the Reports menu.

      If you select one of these reports, the Reports menu will disappear. 
      Using the arrow keys, PgUp, PgDn, Home, End, Ctrl-Home, Ctrl-End or
      Ctrl-F (Find), move the highlight bar to one end of the range you
      want to print (it doesn't matter whether it is the first or last
      transaction in the range).  Press Return to select this transaction
      and mark it as the start of the range.  (This transaction will be
      included in the report).  If you make a mistake, press ESC to backup
      and re-select part of the register.

      Use the arrow keys, PgUp, PgDn, Home, End, Ctrl-Home, Ctrl-End or
      Ctrl-F (Find) to select the other end of the section.  The section
      you have selected will be highlighted at all times.  When you are
      satisfied with your selection, press Return to print the report.  You
      will have one more chance to confirm that you want to proceed with
      this report.







                                        38







      You can also control the format and content of reports by setting
      certain values in the Account Configuration file.  For example, you
      can choose whether you want to print the memo and split information
      for each transaction.  You can also choose to double space reports
      which may make them easier to read.  This is not true double spacing;
      instead, a blank line is inserted after an entire transaction (up to
      12 lines) is listed.

      Use Modify Account Data from the Accounts Menu to make these choices
      (See Section C.13.3).  The first eight reports involve the check
      register.  Each of the ten reports is described below:

      1.  Check Register

          This report lists the selected range of the check register in
          chronological order.  It also calculates and displays the total
          withdrawals and deposits within the report range.


      2.  Sorted by Category

          This report lists the selected range of the register sorted by
          category number.  Deposits and withdrawals from each category are
          sub-totalled.  The net withdrawal or deposit for the category is
          also calculated and displayed.  Note that if you use split
          transactions, this report will display split information even if
          you have chosen not to print split information using the Accounts
          Menu.

      3.  Sorted by Payee

          This report shows the selected range of the register sorted
          alphabetically by payee name.  Deposits and withdrawals for each
          payee are sub-totalled.  The net withdrawal or deposit for the
          category is also calculated and displayed.  Be forewarned --
          printing the entire register sorted by payee can be a VERY 
          lengthy process.

      4.  Single Category

          This option allows you to list all of the transactions found
          within the report range which are assigned to a single category.
          The format is identical to the Sorted by Category Report.

          When this option is selected, a data entry box will appear below
          the Report Options menu.  Enter the number of the category you
          wish to print or press F4 to see the Categories screen and select
          a category.  When you are ready to print, press F10 or Return.

      5.  Single Payee

          This option allows you to list all of the transactions to/from a
          single party (payee).  The format is identical to the Sorted by
          Payee Report.  When this option is select, a data entry box will




                                        39







          appear below the Report Options menu.  Enter the name of the
          payee you wish to print.  

          Exchequer ignores the difference between upper and lowercase
          letters as it searches for matches to the payee name you entered.
          If you enter "maryland auto club", Exchequer will print
          transactions to "Maryland Auto Club", "maryland auto club",
          "maRYLanD auTo CLUb", etc.

          Unlike the Find function, however, Exchequer is length-sensitive
          and will not include partial matches.  For example, if you enter
          "Maryland" as the payee to match, Exchequer will NOT print
          transactions to "Maryland Auto Club", "Maryland AAA", etc.

          When you are ready to print, press F10 or Return.

       6. Uncleared Checks

          This report is identical to the Check Register Report, except
          only transactions which have not been marked as cleared are
          listed.

       7. Category Totals

          This report lists the total withdrawals and deposits as well as
          the net total for each category within the report range.  If you
          wish, the budget and the difference between budget and actual for
          each category will also be listed.  Only categories which have
          non-zero amounts or non-zero budgets are listed.  You can use the
          Modify Account Data function to select whether to show the
          budgets and also to select which budgets (total or partial) to
          show.  See the Categories Section for more details on partial and
          total budgets.

       8. Income/Expense 

          This report generates an income statement for this account.  The
          categories are organized by type (income, expense, transfer) and
          the total amounts in each category are listed.  Total income,
          total expenses, net income, total transfers and net cashflow are
          also calculated.  See the Categories Section (Section C.9) for
          more information on how to use income, expense and transfer
          categories.

          Note that this report is not a true income statement as your
          accountant would produce.  Exchequer is not designed to directly
          handle accrual accounting techniques nor is it designed to
          handled non-cash transactions such as depreciation expenses.

          However, this report can closely approximate a true income
          statement for many small business.  And if your need to handle
          accrual or non-cash items is minimal, you may be able to simulate
          them using "dummy" categories or accounts.  Ask your accountant
          for professional guidance if needed.




                                        40








       9. List of Memorized Checks

          This option prints a complete list of all memorized checks.

      10. List of Categories

          This option prints a complete list of all budget/expense
          categories.

      C.12  SETUP OPTIONS MENU

      The Setup Options Menu can be accessed at any time from the Checks,
      Register, or Categories screens by pressing F2.  This menu allows the
      user to set various default values for Exchequer.  

      To select one of the following six options, highlight that option
      with the Up and Down arrows, Home and End keys, then press Return. 
      Press ESC to remove the Setup Options Menu and return to the normal
      display.

      C.12.a  PRINT TEST CHECK

      When this option is selected, Exchequer will print a test check to
      verify that your checks are properly aligned in the printer.  Be sure
      to insert the checks into the printer before selecting this option.

      C.12.b  SET DRIVE/DIRECTORY

      When Exchequer starts, it reads the program configuration file
      (XC.CFG) to determine the drive/directory where the data files are
      located.  You can change this default drive/directory selection with
      the Modify Program Defaults option (Section C.12.e).

      When you select this option, a data entry box will appear below the
      menu.  Enter the name of the new drive/directory (a maximum of 35
      characters) and press Return.  This drive/directory will be used
      until you change it again.  

      If you have work which has not been saved, Exchequer will ask you if
      you want to save it to the current drive/directory before it changes
      the drive/directory.  If you save the data files after changing the
      current directory, they will be saved in the new directory.  (The new
      drive/directory must already exist.  See your DOS manual for
      instructions on how to create a directory.)  

      C.12.c  SET TODAY'S DATE

      Exchequer automatically retrieves the current date from the computer
      if it has been set with DOS.  (Refer to your DOS manual for how to
      set the date).  This option is used to change the current date.  
      Exchequer uses the current date when it prints checks and when it
      prints reports.  You can also change the date to be used on any
      individual check or transaction at the time you print or enter it.




                                        41








      When you select this option, a small data entry box will appear
      beneath the menu.  Enter the date that you want Exchequer to use on
      your checks and reports.  When you have entered the correct date,
      press Return to accept it or press ESC to cancel and return to the
      Setup Options menu.  Remember that you can use the "+" and "-" keys
      to change the date.

      C.12.d  SET STARTING CHECK NUMBER

      This option allows the user to set the check number for the first
      check which Exchequer will print.  A small data entry box will appear
      beneath the menu.  When you have entered the correct number, press
      Return.  Press ESC to cancel and return to the Setup Options menu. 
      Remember that you can use the "+" and "-" keys to change the number.

      Exchequer will automatically increment the check number each time it
      prints.  The check number can be changed any time you print a check. 
      Exchequer will automatically increment this new check number until it
      is changed again.

      C.12.e  MODIFY PROGRAM DEFAULTS

      When first started, Exchequer reads the program configuration file
      ("XC.CFG") to five four default values.  You can change these default
      settings by selecting this option.

          1) Default account name

             This is the name (a maximum of 8 characters) of the account
             which is automatically loaded whenever Exchequer is started. 
             This default is set to "SAMPLE" when you receive Exchequer.

          2) Default drive/directory

             This is the name of the disk drive and/or directory where the
             default data files are stored.  Exchequer will use this
             drive/directory as the current drive until and unless you
             change it using the Set Drive/Directory option.  Drive/
             directory names can be up to 35 characters long.  Examples of
             valid drive/directory names: "A:", "C:\CHECKS", "C:\XC".  The
             default directory must already exist.

             This default is not set when you receive Exchequer.  
             Exchequer will thus search only in the current drive/directory
             for the data files.  You must enter a valid drive/directory
             name if you want to start Exchequer from any directory using
             the DOS PATH statement.

             The Exchequer program file (XC.EXE) does not have to be stored
             in the same drive/directory as the data files. However, the
             Exchequer configuration file (XC.CFG) must either be in the
             same drive/directory as the program (XC.EXE) or on your PATH.





                                        42







          3) Changes between autosave?

             Exchequer automatically saves the data files after a certain
             number of changes have been made to them.  This prevents the
             loss of significant amounts of data during a power outage or
             other malfunction.  You can use this option to set the number
             of changes between "autosaves".  The larger the number, the
             longer you can use Exchequer before it saves a file.

             The default value is ten; the maximum allowable number is 999.
             Although you cannot turn the autosave feature off in 
             Exchequer, setting the number to a very high number will
             effectively eliminate this function.

             Remember:  Using F1 (Quit) to exit Exchequer always saves the
             data files before returning to DOS.  Also, pressing Ctrl-F9
             (Save) at almost any point in the program saves all three main
             data files.

          4) Printer for reports:
          5) Printer for checks:

             This option allows you to specify where you want to send your
             reports and checks.  Pressing the <SPACE> bar will cycle
             through the available options -- LPT1, LPT2, LPT3, PRN, COM1,
             COM2, COM3, AUX.  Although Exchequer can print to any of these
             devices, it cannot set their parameters.  See your DOS manual
             for information on how to do this (e.g. the Mode command).

      C.12.f  MODIFY CHECK LAYOUT

      Exchequer can be customized to work with virtually any type of
      continuous-feed check.  The Modify Check Layout function provides a
      highly visual and interactive method for changing the layout of the
      check.  

      Most continuous feed checks have a separate stub which Exchequer can
      use to print certain information.  The most common type of check is a
      bottom-stub check with an actual dimension of 8-1/2 inches wide by
      3-1/2 inches long.  Exchequer can also be configured to work with
      top-stub checks and checks with no stubs.  You make this choice by
      modifying the account data.  It will also work with checks which are
      shorter than 3-1/2 inches.  

      Exchequer is not designed to work with checks narrower than 8-1/2
      inches wide.  You may be able to use such checks by manually
      selecting a printer mode which prints 132 characters on a line such
      as the compressed mode on Epson FX-series printers.  However, Left
      Coast Software does not provide support for this type of check.

      Exchequer is specifically designed to print checks for use with
      window envelopes.  You have complete control over the location of the
      payee name (which is normally used as the first line in the address)
      plus three additional address lines.  If you cannot use the payee




                                        43







      name as the first line of the address on your particular check, you
      can type the payee name on the first address line.

      Exchequer prints up to 10 separate pieces of information on each
      check that it prints.  These are:

              o Check Number
              o Date
              o Amount (in numerals)
              o Amount (in words)
              o Payee
              o Address (3 separate lines)
              o Memo
              o Split 

      Although most checks come with pre-printed check numbers, Exchequer
      also prints the check number so you can verify that your check numbers
      and the numbers on the checks themselves correspond.  

      The memo field can be used for many purposes.  Some people use it to
      make notes to themselves; others use it to provide information to the
      payee (i.e. listing the invoice number or your credit card account
      number).  Your intended purpose will dictate where you should locate
      this field.  You can also control whether the memo field is printed
      at all by modifying the account configuration file.

      The Split information field lists the individual items comprising the
      split.  The 15-character description and the amount is printed for
      all non-zero amounts.  In addition, the date, the check number, and
      the total amount of the check are printed at the bottom.  This last
      line is printed even if the check itself is not split.  YOU MUST HAVE
      A CHECK WITH A STUB TO PRINT THE SPLIT INFORMATION.  You can also
      control whether the split information is printed at all by modifying
      the account configuration file.  

      When you select the Modify Check Layout function, a check layout
      screen will appear which displays the main body of the check.  This
      screen shows the actual location of each data field.  When you start,
      the date field will be highlighted.  The location of this field on
      the check can be changed by using the arrow keys to move it around
      the screen.  When you are satisfied with its location, press Return
      to move to the next field.

      Although the location of most of the data is restricted to the main
      body of the check, you can locate the memo field on either the body
      of the check or on the stub.  You can also locate the split
      information on either part of the check (although it will not print
      unless you have a stub).  

      To move either of these fields onto the stub (or back onto the check
      itself), simply move it below the bottom of the check (or the top of
      the stub).  The stub will be displayed and you can locate the data
      wherever you want.  





                                        44







      If the checks you are using do not have a separate stub, simply move
      both the memo and the split fields up until it appears on the main
      part of the check.  Don't worry -- the split information will not
      print if you do not have a stub.  You must also use the Modify
      Account Data option on the Accounts menu to tell Exchequer that your
      checks do not have a stub (See Section C.13.3).

      When locating the split information, remember that the layout screen
      only shows the top left corner of the split information.  When
      printed, this data can require up to 12 lines to print.  BE CAREFUL
      NOT TO OVERLAP THE SPLIT INFORMATION AND MEMO DATA FIELDS!

      You can change the length of the check by pressing PgUp or PgDn.  You
      must be working with the main body of the check; this does not work
      when you are working with the stub portion of the check.

      Pressing F10 (Print) will print a sample check on the printer which
      you can use to verify and adjust the check layout.  When you are
      satisfied with the entire check layout, press F9 (Add/Save) to save
      this information to the check layout data file (e.g. MOORE.DAT on the
      original distribution diskette).  You create this data file whenever
      you open an account (See Section C.13.b) or modify the account data
      (See Section C.13.e).

      Pressing ESC cancels this function and returns to the Setup menu.  

      If you layout a check with overlapping data fields, the printing
      results are unpredictable.  (Most of the time, the printer will print
      one check, then keep feeding checks through the printer).

      C.13  ACCOUNT OPTIONS MENU

      The Account Options Menu provides the user access to several
      account-related functions.  It can be activated from the Register,
      Checks or Categories Screens by pressing F3.  If either the Checks or
      Categories Screen is displayed, Exchequer will first move you to the
      Register Screen before displaying this menu.

      To select one of the following six options, highlight that option
      with the up and down arrows, home and end, then press Return.  Press
      ESC to remove the Account Options Menu and return to the Register
      Screen.

      C.13.a  BALANCE/RECONCILE ACCOUNT

      One of Exchequer's biggest time-saving features is the Balance
      Account function.  If you are using Exchequer to maintain the master
      record of your account, there are three steps you must follow before
      selecting this function.

      1. Enter all new transactions from your regular checkbook into 
         Exchequer using the Add Transaction function (F9 from the Register
         Screen).





                                        45







      2. Enter all additional transactions from you checking account
         statement (e.g. bank service charges) by using the Add Transaction
         Function.

      3. Review the bank statement and mark all transactions in the
         Register which have cleared the bank by pressing the space bar
         when that transaction is highlighted.

      After completing these steps, you can select this option and a new
      display screen will appear.  Enter the ending balance shown on your
      bank statement and press Return.  Exchequer will search through the
      check register for all uncleared checks and deposits and calculate
      the following:

      *  Number of uncleared checks

      *  Dollar amount of uncleared checks

      *  Number of uncleared deposits

      *  Dollar amount of uncleared deposits

      *  Check Register Balance

      *  Adjusted Check Register Balance (equals Check Register Balance
         plus uncleared checks minus uncleared deposits )

      *  Difference ( equals Ending Balance on Bank Statement minus
         Adjusted Check Register Balance)

      The adjusted balance calculated by Exchequer should equal your bank
      statement balance, so the Difference should be $0.00.  If this is not
      the case, return to the Register by pressing ESC and search for
      transactions which have been improperly marked (or not marked) as
      cleared. Also, search for additional transactions which you have not
      entered or have entered incorrectly into the register.

      If you are not using Exchequer as the master record for your account,
      Exchequer can still help balance your account by totalling the
      uncleared transactions in the register.  When you receive your
      statement, mark the cleared transactions (wherever they were entered)
      in your checkbook or in Exchequer's register.  Use the Balance
      Account function to determine how many of Exchequer's transactions
      have not been cleared.

      C.13.b LOAD EXISTING ACCOUNT

      Select this option to load another existing account.  A two-line data
      entry box will appear beneath the menu.  Enter the drive/directory
      which contains the data files for the new account and the name of the
      new account.  The drive/directory which you specify here becomes the
      new current directory.  Press F9 to load.  Press ESC to cancel and
      return to the Account Options Menu.





                                        46







      When you switch accounts, Exchequer will save all of your current
      data files (if they have been changed), then load the data files for
      the new account.  If Exchequer cannot load the specified file for any
      reason, you will not be able to work with the new account.  "NONAME"
      will appear as the account name at the bottom of the screen.

      C.13.c  BACKUP ACCOUNT FILES

      This function is used to copy all of the data files for a specific
      account for backup purposes.  We strongly encourage you to make a
      backup every time you use Exchequer.  This will help prevent against
      accidental loss of data.  (We also recommend that you print out, at a
      minimum, all new transactions every time you use Exchequer).

      When this function is selected, a two-line data entry box will appear
      below the menu.  Enter the name of the drive/directory where you want
      the backups stored and the name of the backup (e.g. "BACKUP").  The
      drive/directory you enter does NOT become the current directory.  The
      name of the backup must be different from the account name.

      Press F9 to Save the account files to the backup files.  Press ESC to
      cancel and return to the Account Options menu.

      After backing up an account, there will be five new files on your
      disk (e.g. "BACKUP.CFG", "BACKUP.REG", "BACKUP.CHK", "BACKUP.CAT",
      and "BACKUP.DAT").  In essence, you have created a new account which
      is identical to the original.  Therefore, you can access the backup
      files simply by switching to this backup account.

      If the backup files already exist, Exchequer will ask you if you want
      to replace these files.  If you want to keep separate backups for
      separate dates, give the backup files unique names!

      We also recommend that you make additional archive copies of all
      account files (and the backup files created by Exchequer) on floppy
      disks or tape cartridge and keep them in a safe place.

      C.13.c  OPEN NEW ACCOUNT

      Selecting this option opens a new account.  When you open an account,
      Exchequer creates a new account configuration file which contains
      information about the account.  When this option is selected, a data
      entry screen appears which allows you to enter the following
      information:

          1) Account Name

             This is the name of the account (a maximum of 8 characters).
             Enter the filename only without an extension.  Enter the file
             name only without an extension; Exchequer will automatically
             add the extension ".CFG" to the account configuration file and
             the extension ".REG" to the register file.






                                        47







          2) Account Number

             If you want you can enter the account number on this line.

          3) Account Description

             This is an optional description of the account (a maximum of
             35 characters).

          4) Category Filename

             This is the name of the file which contains the list of
             categories you want to use with this account.  Enter the file
             name only without an extension; Exchequer will automatically
             add an extension of ".CAT".  You can use an existing file of
             categories with any new account.  Simply enter the name of the
             file you want to use.

          5) Checks Filename

             The name of the file which contains the memorized checks you
             want to use with this account.  Enter the file name only
             without an extension; Exchequer will automatically add an 
             extension of ".CHK".  You can use an existing file of
             memorized checks with any new account.  Simply enter the name
             of the file you want to use.

          6) Check Layout Data

             The file which contains the check layout data.  Enter the file
             name only without an extension; Exchequer will automatically
             add the extension ".DAT".  You do not need to specify a check
             layout file.  If you do not, Exchequer will use its default
             values for printing checks.  

          7) Print Memo on Checks?

             If you want to print the memo field on your checks, select YES
             on this line.  The default is YES.

          8) Print Splits on Checks?

             If you want to print information on split transactions on your
             checks, select YES.  Exchequer will not print this information
             unless you tell it that you are using checks with stubs (see
             next item).  The default is YES.

          9) Do checks have a stub?

             If your checks have a top or bottom stub, select YES.  The
             default is YES.







                                        48







         10) Top or bottom stub?

             If your checks have a stub, you must also tell Exchequer
             whether it is a top or bottom stub.  The default is bottom
             stub.  If your checks do not have a stub, you can ignore this
             selection.

         11) Print memo line on reports?

             Most of the report options (see Section C.11) print numerous
             entries from the check register.  If this default value is set
             to YES, Exchequer will print the check number, date, payee and
             amount on one line and then will print the memo and category
             number on a second line just below that.  If this value is set
             to NO, Exchequer will not print the memo and category number
             line.

         12) Print Splits on Reports?

             If this selection is set to YES, Exchequer will print all of
             the information about split transactions in its reports. 
             Specifically, it will print the description, category number
             and amount of all non-zero items below the transaction itself.
             Note that if you set this setting to NO, Exchequer will still
             print the split information if you select the Sorted By
             Category Report.

         13) Use Budgets on Reports?

             Use this setting to choose whether you want to include the
             budget for each category as well as the difference between
             budget and actual expenditures/deposits on the Category Totals
             and the Income/Expense Reports.

         14) Use Total or Partial Budgets?

             If you choose to use budgets (see 13), you can also choose
             whether you want to use the total budget or the partial budget
             (i.e. $2000 per month).  This allows you to do partial-year
             reports.  For example, if all of your budgets are on a monthly
             basis, you could produce a monthly Income/Expense Report by
             choosing the appropriate report, then selecting all
             transactions for that month.  However, you must be consistent;
             if you mix budget periods, the budget figures in your reports
             will not be accurate.

         15) Double Space Reports?

             You can choose to double space most of the reports.  This is
             not true double spacing.  Instead, Exchequer will print a
             blank line after each transaction listing (which could be as
             long as 12 lines).






                                        49







      If you do not specify a filename for the Checks, Categories or Check
      Layout File, Exchequer will automatically use the Account name for
      these files.

      When all of the information is correct, press F9 to open the new
      account.  Exchequer will save the data files for the account which is
      currently loaded and create the new data files immediately.  The new
      files are created in the current drive/directory.  (Exchequer
      determines if there are any files with these names.  If so, 
      Exchequer uses these files rather than creating new files).

      Press ESC to cancel this function and return to the Account Options
      menu.

      If you want Exchequer to automatically load this account whenever it
      starts, you will need to change the program defaults by selecting the
      Modify Program Defaults from the Setup Options menu.  See Section
      C.12.e.

      C.13.e MODIFY ACCOUNT DATA

      This option allows you to modify the account configuration file you
      created when you opened a new account.  The data entry screen which
      appears is identical to the one you used to open the account. (See
      Section C.13.b).  The impact of changing any of the five items in the
      account configuration file is described below:

          1) Account Name

             Exchequer will first save the register to the current
             register data file, then create a copy of this file with the
             new name.  Any future changes will be saved to the new data
             file.

          2) Account Description

             Changing the account description has no impact on any file
             except the account configuration file.

          3) Checks Filename
          4) Category Filename
          5) Check Layout Data

             If you change the name of the checks file, the categories
             file, or the check layout file, Exchequer will search for an
             existing file (in the current directory only) with this name. 
             If it does not exist, Exchequer will create a new file with
             this name.  If it does exist, Exchequer will use this file
             whenever you load this account.  You must use the Load
             Existing Account option (See Section C.13.c) if you want to
             start using this new file immediately.

             (Although Exchequer allows you to specify a new category or
             checks file for an existing account, doing so can have




                                        50







             DISASTROUS results since this will almost certainly destroy
             the correlation between the category numbers on the three
             files.  BE VERY CAREFUL if you change the names of these two
             files).

      When you are satisfied with the account information, press F9 to Save
      it to the account configuration file.  Press ESC to cancel this
      function and return to the Account Options menu.

      C.13.f  ROLL ACCOUNT FORWARD

      Exchequer can handle up to 4000 transactions in its check register. 
      This should be more than sufficient to handle an entire year's worth
      of work for most Exchequer users.  At some time (typically at the
      start of the year) you will want to roll the account forward to make
      room for more transactions.  When you do this, Exchequer stores all
      of the old transactions in a separate archive (as opposed to a
      backup) file, calculates a new beginning balance for the account, and
      inserts an entry showing that beginning balance in your account.

      BE VERY CAREFUL WHEN USING THIS FUNCTION SINCE IT IS IRREVERSIBLE! 
      MAKE SEVERAL BACKUP COPIES OF YOUR ACCOUNT FILES BEFORE ROLLING AN
      ACCOUNT FORWARD.  IF YOU ARE NOT CERTAIN YOU WANT TO ROLL THE ACCOUNT
      FORWARD, STOP IMMEDIATELY!

      When you select this option, you will be asked to enter the
      drive/directory where you want the files stored and the name of the
      archive file.  When you are ready to proceed, press F9 (Add/Save). 
      Exchequer will then display the register and ask you to mark the end
      of the section you want to save in the archive file.  Use the arrow
      keys, Home, End, Ctrl-Home, Ctrl-End or Ctrl-F (Find) to make your
      selection, then press Return to proceed.  All transactions which are
      highlighted will eventually be stored in the archive file.  At this
      point, you will be given another chance to confirm that you actually
      want to archive this account.

      Exchequer will first save the current data files, then write all of
      the old transactions to the archive file.  These transactions are
      then deleted from the current register and the updated register file
      is saved again.  The first entry in the updated register will be
      labelled "BEGINNING BALANCE" and will show the balance as of that
      date.  Exchequer also creates copies of the account configuration,
      checks, category and check layout files.  This allows you to make a
      permanent record of these files as of this date.  

      The archive file which is created with this process can be viewed,
      modified, and printed just like any other account.  To do this,
      select the Load Existing Account option (Section C.13.c).  YOU SHOULD
      MAKE BACKUP COPIES OF THIS ARCHIVE FILE IMMEDIATELY either from
      within Exchequer or with DOS.

      If all checks in the archive file have been marked as cleared, the
      cleared marker on the beginning balance entry will be set on.  If
      there are some transactions in the archive file which have not been




                                        51







      cleared, this marker will be off.  As with the other transactions,
      you can toggle this marker on and off by pressing the space bar.

      The Balance Account function will not produce accurate results until
      all transactions in the old file are cleared. Balancing your account
      will be easier if you wait until all of the transactions that you
      want to write to the archive file are cleared before you archive
      them.


















































                                        52







      D. OTHER USES FOR EXCHEQUER

      Although Exchequer is designed primarily as a check writing/
      checkbook management program, you can use it for a wide variety of
      simple accounting tasks.  Some potential applications include:

      *  Savings Accounts

         Although you will not be writing checks on a savings account,
         Exchequer's other functions can be used just as they would be
         with a checking account.

      *  Credit Card Accounts

         Use Exchequer to manage your credit card accounts by opening a
         separate account for each credit card.  Simply enter each charge
         (including interest charges) on your credit card as a deposit and
         all payments as checks.  The balance shown in Exchequer's Register
         will be the amount you owe on your credit card.

         An advantage to using Exchequer for this purpose is that you can
         assign each charge to a category which is useful for identifying
         your tax-related expenditures when preparing your tax return.

      *  Payments to a Doctor

         Exchequer is also useful for tracking payments to a doctor. The
         method for doing this is essentially identical to tracking a
         credit card account.  Open a separate account for each doctor and
         enter all bills as deposits and all payments to the doctor as
         withdrawals.  The final balance shown on Exchequer's Register is
         the amount you owe the doctor at the current time.

         By assigning bills and payments to separate categories, you can
         easily track medical expenses for each member of your family.  You
         can also track insurance payments this way.

         (Hint:  Mark each doctor's bill as "cleared" in Exchequer's
         Register when you or your doctor receives the corresponding
         payment from your insurance company or when it is fully paid. 
         You'll be able to tell at a glance the status of each bill).

      *  Accounts Receivable

         If you run a small business, you can use Exchequer to track
         accounts payable as described in the preceding section.  You can
         also use it to track your accounts receivable.  Treat each invoice
         as a check (which allows you to enter invoice numbers as check
         numbers) and enter the customer and/or a description of the
         invoice as the payee. The amount you are owed will be shown as a
         negative balance.  By  assigning each customer a unique category
         number, you can use just one account to track all of your Accounts
         Receivable.  Use the Print Sorted By Category (or Print Sorted By
         Payee) from the Reports Menu to get an up-to-date status report.




                                        53








                               CUSTOMER SERVICE 

      Left Coast provides free technical support for Exchequer.  If you
      require technical support, please call us at (408) 996-3130 between
      9:00 A.M. and 5:00 P.M. Pacific time (12:00 Noon to 8:00 P.M. Eastern
      time).  You may also write us at:

              Left Coast Software 
              P.O. Box 160601 
              Cupertino, CA 95016-0601

      You may also send us a message on CompuServe (71160,756).  It may
      take us a several days to respond to CompuServe messages.

      You may obtain the most recent version of the program from 
      CompuServe or GEnie.  New versions are uploaded to these services
      almost immediately after their release.  

      We thank you for supporting Exchequer.  If you have suggestions for
      how to improve the program, please write us.  We love hearing from
      our customers.




































                                        54









                           OTHER LEFT COAST PROGRAMS 

      Left Coast Software also sells two other shareware programs for the
      PC -- PC-Areacode and Mandelbrot Magic.  To order any Left Coast
      product, call (408) 996-3130 or use the order form on the next page.
      We accept VISA and MasterCard.  

      PC-AREACODE (Version 2.1)

      PC-Areacode is a useful utility program which can find the areacode
      for virtually any city in the U.S. and Canada in less than two
      seconds on a 4.77 Mhz PC and a floppy drive.  It contains almost
      18,000 city names in its built-in database.  You can either browse
      through the cities in its database or type in the name of a city you
      want to locate.  You can even type in an areacode and PC-Areacode
      will tell you what state it serves.  PC-Areacode can run as either a
      standalone program or as a memory-resident utility.

      PC-Areacode runs on any IBM PC, XT, AT or PS/2 compatible computer
      running DOS 2.0 or higher.  The registration fee for PC-Areacode is
      just $15.00. 

      MANDELBROT MAGIC (Version 3.1) 

      Fractal geometry has been used in the past to create images and
      models of many differing subjects.  From three-dimensional pictures
      of landscapes in movies to an accurate cross section of the heart,
      fractals are at the leading edge of research in many fields.

      Mandelbrot Magic generates stunning color displays ("slides") of the
      Mandelbrot Set and Julia Sets, a famous group of fractals.  The
      Mandelbrot Set has been called "the most complicated object in
      mathematics."   Fractal geometry is a complicated mathematical field,
      but Mandelbrot Magic is easy to use and will create spectacular
      slides with a few simple inputs.

      With Mandelbrot Magic, you can create a new slide or load and view an
      existing slide from disk.  The program runs on virtually any color
      graphics adapter and supports four different color modes from CGA
      (320 x 200 x 4 colors) to VGA (640 x 480 x 16 colors), depending on
      which adapter you use.  Although the program offers three automatic
      coloring algorithms, the user has complete control over the color of
      any pixel as well as the color palette.  Several different pre-
      programmed palettes are also provided.  The program also features
      different "animation" techniques which make the features in the slide
      appear to move.

      One of the unique things about fractals is that they reveal more and
      more detail the closer you get and the small-scale details are
      similar to the large-scale details.  With Mandelbrot Magic, you can
      graphically select any part of the slide to magnify.  You can "zoom"
      in on various features of the fractal and reveal more detail.  You




                                        55







      can also create slideshows consisting of a sequence of up to 20
      existing slides.  

      Generating a slide is an intensive computational task and can take
      from three to sixteen hours.  However, the program supports the use
      of an 8087 math coprocessor which will cut generation times by a
      factor of 3 to 5.  You can also stop work on a slide then resume
      generation at a later time.  In addition, registered users receive a
      copy of BackMAGIC, a memory resident program that can generate slides
      in the background while you run other programs!

      The documentation includes a list of suggested parameters for
      interesting slides and a list of suggested readings for those who
      want to explore the theoretical foundations of fractals in greater
      detail.

      Mandelbrot Magic runs on any IBM PC, XT, AT or PS/2 compatible 
      computer running DOS 2.0 or higher.  It requires a CGA, MCGA, EGA or
      VGA video adapter (EGA or VGA recommended).  Mandelbrot Magic
      requires at least 200 K, 350 K and 430 K of free memory for a CGA,
      EGA and VGA equipped system, respectively.  An 8087, 80287 or 80387
      math co-processor is recommended but not required. 

      The registration fee for Mandelbrot Magic Version 3.1 is just $15.00.


































                                        56







                            ORDER/REGISTRATION FORM 

      If you want to register for Exchequer, simply order the appropriate
      number of copies of the program. You may also order/register by phone
      by calling (408) 996-3130.  

       Ship to:                          Bill to (if different): 

          _________________________          ___________________________ 

          _________________________          ___________________________ 

          _________________________          ___________________________ 

          _________________________          ___________________________ 

       Payment Method (please circle one):   VISA    MC    Check     COD   

       Credit Card Number:_________________     Expiration Date: _______ 

       Name on card (if different): ____________________________________ 

       Signature (if using credit card): _______________________________ 

       PLEASE SHIP ME THE FOLLOWING: 

       _____ copies of Exchequer at $15.00        = ____________________ 

       _____ copies of PC-Areacode at $15.00      = ____________________ 

       _____ copies of Mandelbrot Magic at $15.00 = ____________________ 
             (includes BackMAGIC)

       California Residents Add Sales Tax = ____________________________ 

       Shipping/Handling (per order)                             3.00 

                                   TOTAL:   ____________________________ 

       Send form to:
                Left Coast Software
                P.O. Box 160601
                Cupertino, CA 95016-0601















                                        57

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1786

     Volume in drive A has no label
     Directory of A:\

    CHANGES  !!!     10514   4-11-90   4:22p
    CHANGES  BAT       430   4-11-90   4:22p
    DISCOUNT         16451   4-11-90   4:22p
    EXAMPLES DOC     17502   4-11-90   4:22p
    GO       BAT       527   4-11-90   4:22p
    MOORE    DAT       110   4-11-90   4:22p
    PRINTDOC BAT      1076   4-11-90   4:22p
    SAMPLE   CAT      3072   4-11-90   4:22p
    SAMPLE   CFG       193   4-11-90   4:22p
    SAMPLE   CHK     10816   4-11-90   4:22p
    SAMPLE   REG      5440   4-11-90   4:22p
    SAMPLE   SPL      4872   4-11-90   4:22p
    XC       CFG        87   4-11-90   4:22p
    XC       DOC    158728   4-11-90   4:22p
    XC       EXE    122192   4-11-90   4:22p
           15 file(s)     352010 bytes
                               0 bytes free
