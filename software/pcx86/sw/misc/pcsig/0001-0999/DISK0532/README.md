---
layout: page
title: "PC-SIG Diskette Library (Disk #532)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0532/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0532"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "PC-MONEY"

    PC-MONEY is a program designed to maintain personal, family, and small
    business financial and tax records. It includes a module that keeps
    records for a home business, and a module that consolidates tax
    information from personal and home business tax records and then
    estimates federal income tax liabilities.
    
    PC-MONEY makes it possible to keep records for as many as nine bank
    accounts. It also maintains an annual tax account which includes up to
    44 categories for easy consolidation and compilation of like items for
    income tax estimating or preparation. Entries such as checks or
    deposits that affect both a bank account and your tax account are made
    in a single entry. Bank and tax records can be displayed (and printed)
    a number of different ways. All operations are selected by menus that
    are easy to use. All account data is entered via fill-in forms with
    editing capabilities.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## BRIEFMAN.DOC

{% raw %}
```






                                       BRIEF MANUAL
     
               This document helps you get familiar with PC-MONEY by exploring
          it with data furnished on the diskette.  It covers the highlights of
          PC-MONEY.  Details will be found in the PC-MONEY Operating Manual.
     
                1.  Copy your original diskette onto a "practice" or "training"
          diskette and store the original in a safe place.
     
               2.  At each training session, start your computer in the normal
          manner with a DOS diskette, then insert your training diskette in
          drive A and type PC-MONEY followed by the <ENTER> key.
     
               3.  Press any key at the initial screen and at the MAIN MENU, se-
          lect #1 by pressing <ENTER>, which puts you in the BANK ACCOUNT & TAX
          MANAGEMENT area of the program.
     
               4.  Then select #2 - DISPLAY/CORRECT BANK DATA.  (Menu selections
          are made by either typing the selection number or by moving the arrow
          with the cursor keys, then pressing the <ENTER> key.) When asked
          "Current Year?", reply with N (for "NO"), and then type 83<ENTER> to
          use the practice data which is furnished with the program diskette.
     
               5.  Explore the various ways of displaying this practice bank
          file.  Don't be afraid to make corrections to some of the items--you
          can always go back to the original version (if you completely mess it
          up) by copying BANK83.DT8 from the original diskette.
     
               6.  Now return to the Bank/Tax Menu and do the same thing with
          each selection--explore it until you are thoroughly familiar with it.
          We suggest you do it in this order:  2,1,3,5,4.  Then return to the
          MAIN MENU by selecting #6.
     
               7.  On the MAIN MENU, select number 3 - HOME BUSINESS ACCOUNTING.
          (If you are not interested in this subject, skip to para 8).  The
          practice data for this section is called SMITH83.  Here again, explore
          the menu and sub-menu items, and practice displaying, printing and
          correcting data just as you did in the BANK & TAX section above.
     
               8.  At the MAIN MENU, now select #2 - FEDERAL INCOME TAX
          ESTIMATING.  Use the training data on the disk (use 83 as the year and
          SMITH83 for the business file).  You'll find it easy to calculate
          taxes for this mythical tax account and small business.
     
               9.  You get the idea now.  Explore the whole program.  Whenever
          you see "F1 = " (anything) in the lower left box, press, F1 for a help
          screen or a list of Codes.  Don't be afraid of fouling things up.
          It's highly unlikely you'll do anything to the program itself and the
          data is just there to be played with.  You can always go back to the
          original diskette and copy it and start over if the data gets too
          jumbled...  Good luck.









```
{% endraw %}

## FILE0532.TXT

{% raw %}
```
Disk No:  532
Program Title:  PC-MONEY version 89
PC-SIG version:  5

PC-MONEY is a personal and family financial and tax-recording system
with sections for portfolio management and federal tax estimating.  It
is menu-driven for ease of use.  It lets you print out your income tax
returns and includes a checkbook program that creates tax records.

Features:

  /* Includes two sample data files for familiarization purposes.
  /* Menu-driven
  /* Support for multiple checking accounts

Usage:  Financial Tracking Aids

Special Requirements:  None.

How to Start:  Type GO (press enter).

Suggested Registration:  $25.00

File Descriptions:

BANK183  DT8  Sample (Training) data for use with PC-MONEY.
BRIEFMAN DOC  A Brief Operations Manual to get started with PC-MONEY.
GO       BAT  Starts PC-MONEY
INITDAT8      Sample Initialization data used by PC-MONEY.
PC-CONV8 EXE  Converts older PC-MONEY data to this version.
PC-MONEY DOC  Operations Manual for PC-MONEY.
PC-MONEY EXE  The Main PC-MONEY program.
PCMOHELP 001  HELP Messages for the Main (PC-MONEY) Program.
README   DOC  Information about the program and documentation.
SMITH83  AC8  Sample (Training) data for use with PC-MONEY.
SMITH83  PR8  Sample (Training) data for use with PC-MONEY.
TAXES83  DTA  Sample (Training) data for use with PC-MONEY.

PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987,88,89 PC-SIG, Inc.

```
{% endraw %}

## PC-MONEY.DOC

{% raw %}
```
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
                               == P C - M O N E Y ==
  
                                     Version 89
  
                          A Personal Finance Program from
  
                                  KEITH CONSULTING
  
                                3435 Mansfield Road
  
                            Falls Church, Virginia 22041
  
  
  
  
  
  
  
  
                         O P E R A T I O N S    M A N U A L
  
                          Copyright 1989 Keith Consulting
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
                P C - M O N E Y   O P E R A T I O N S   M A N U A L
  
                          TABLE OF CONTENTS
                                                                PAGE
       GENERAL DESCRIPTION........................................1
           Registration...........................................1
       DISCLAIMER.................................................1
       BRIEF MANUAL...............................................2
       GETTING STARTED............................................3
           What You Need..........................................3
           Starting the Program the First Time....................3
           Subsequent Starts......................................4
           Stopping the Program...................................4
       PROGRAM OPERATION..........................................4
           General................................................4
           Menus..................................................4
           Forms..................................................5
           Help Screens...........................................5
           PROGRAM DETAILS........................................5
               MAIN MENU..........................................5
               PROGRAM INITIALIZATION.............................5
               BANK ACCOUNT & TAX MANAGEMENT......................7
                   ENTER DEPOSITS/WITHDRAWALS.....................8
                   DISPLAY/PRINT/CORRECT BANK DATA................9
                   BALANCE BANK ACCOUNT...........................9
                   ENTER TAX INFORMATION.........................10
                   DISPLAY/PRINT/CORRECT TAX DATA................10
              FEDERAL INCOME TAX ESTIMATING......................11
                   Entering Data.................................11
                   Expanded Tax Codes............................13
                   The Estimation................................15
                   Changing Data.................................15
              HOME BUSINESS ACCOUNTING...........................17
                   Creation of new Home Business Data Files......18
                   Starting Balances.............................18
                   MAKE JOURNAL ENTRIES..........................19
                   DISPLAY/PRINT JOURNAL.........................20
                   JOURNAL DISPLAY--BY PROJECT...................20
                   DISPLAY/PRINT GENERAL LEDGER..................21
                   DISPLAY/PRINT INCOME STATEMENT................22
                   PRINT BILLS/STATEMENTS........................24
       HINTS AND KINKS...........................................26
           Converting old Data Files.............................27
  
  
  
  
  
  
  
    
 
  
  
  
  
  
  
  
  
  
                P C - M O N E Y   O P E R A T I O N S   M A N U A L
                                       page 1
  
  
  
       GENERAL DESCRIPTION
  
            PC-MONEY is a program designed to  maintain personal, family, and
       small business financial and tax records.  It includes a section that
       keeps business records for a home business, and one that consolidates
       tax information from personal and home business tax records and then
       estimates federal income tax liabilities.
  
            PC-MONEY is written in Turbo Pascal (a product of Borland
       International, Inc.) for IBM-PC and compatible computers with DOS 2.0
       or later Disk Operating Systems.  At least 256K of memory and only one
       disk drive is required, although it will be more convenient if two
       drives are available.
  
  
            PC-MONEY is distributed as a User-Supported program for personal
       use.  It is available through computer bulletin boards and library
       (disk copying) services.  Copying of the program for trial use by
       other users is encouraged.  If users find this program useful, a
       contribution of $25 to become a Registered User is expected.  On
       registration,the Registered User's name is put on a mailing list for
       notices concerning updates and new programs which will be available at
       a nominal price.  Comments, criticisms and suggestions about the
       program, especially constructive ones, are encouraged.   Send
       contributions and suggestions to:
  
                                  KEITH CONSULTING
                                3435 Mansfield Road
                              Falls Church, VA, 22041
       DISCLAIMER
  
            Although we are proud of this program, we make NO guarantees that
       it will keep your bank and tax records straight, nor that it will make
       your home business a success.  Particularly, we disclaim any re-
       sponsibility for your income taxes.  The income tax estimates in this
       program should be used ONLY as estimates and all figures should be
       double-checked separately prior to submission to the IRS!
  
            IT IS NOT NECESSARY TO READ THIS ENTIRE DOCUMENT BEFORE USING PC-
       MONEY.  The program is generally self-explanatory.  It is suggested
       that you learn to use it by using it!  Then refer to this Operations
       Manual when you need to look up some fine point.  To assist you in
       exploring the program, a short "manual" named BRIEFMAN.DOC is included
       on your original diskette.  Follow its instructions as a training
       guide.  A copy of this Brief Manual follows:
  
  
  
  
  
  
  
    
  
  
  
  
  
                P C - M O N E Y   O P E R A T I O N S   M A N U A L
                                       page 2
  
  
  
                                    BRIEF MANUAL
  
            This document helps you get familiar with PC-MONEY by exploring
       it with data furnished on the diskette.  It covers the highlights of
       PC-MONEY.  Details will be found in the PC-MONEY Operating Manual.
  
             1.  Copy your original diskette onto a "practice" or "training"
       diskette and store the original in a safe place.
  
            2.  At each training session, start your computer in the normal
       manner with a DOS diskette, then insert your training diskette in
       drive A and type PC-MONEY followed by the <ENTER> key.
  
            3.  Press any key at the initial screen and at the MAIN MENU, se-
       lect #1 by pressing <ENTER>, which puts you in the BANK ACCOUNT & TAX
       MANAGEMENT area of the program.
  
            4.  Then select #2 - DISPLAY/CORRECT BANK DATA.  (Menu selections
       are made by either typing the selection number or by moving the arrow
       with the cursor keys, then pressing the <ENTER> key.) When asked
       "Current Year?", reply with N (for "NO"), and then type 83<ENTER> to
       use the practice data which is furnished with the program diskette.
  
            5.  Explore the various ways of displaying this practice bank
       file.  Don't be afraid to make corrections to some of the items--you
       can always go back to the original version (if you completely mess it
       up) by copying BANK83.DT8 from the original diskette.
  
            6.  Now return to the Bank/Tax Menu and do the same thing with
       each selection--explore it until you are thoroughly familiar with it.
       We suggest you do it in this order:  2,1,3,5,4.  Then return to the
       MAIN MENU by selecting #6.
  
            7.  On the MAIN MENU, select number 3 - HOME BUSINESS ACCOUNTING.
       (If you are not interested in this subject, skip to para 8).  The
       practice data for this section is called SMITH83.  Here again, explore
       the menu and sub-menu items, and practice displaying, printing and
       correcting data just as you did in the BANK & TAX section above.
  
            8.  At the MAIN MENU, now select #2 - FEDERAL INCOME TAX
       ESTIMATING.  Use the training data on the disk (use 83 as the year and
       SMITH83 for the business file).  You'll find it easy to calculate
       taxes for this mythical tax account and small business.
  
            9.  You get the idea now.  Explore the whole program.  Whenever
       you see "F1 = " (anything) in the lower left box, press, F1 for a help
       screen or a list of Codes.  Don't be afraid of fouling things up.
       It's highly unlikely you'll do anything to the program itself and the
       data is just there to be played with.  You can always go back to the
       original diskette and copy it and start over if the data gets too
       jumbled...  Good luck.
  
    
  
  
  
  
  
                P C - M O N E Y   O P E R A T I O N S   M A N U A L
                                       page 3
  
  
  
       GETTING STARTED
  
            What You Need
  
            An IBM PC/XT/AT or PS/2 with 256K (or more) of random access
       memory, DOS 2.0 (or later Disk Operating System) or any other brand of
       computer and DOS that are compatible.
  
            At least one double density disk drive.  (Two are better and a
       fixed disk is even better.  And if you want to operate FAST, use
       RamDisk!.
  
            A diskette containing the  PC-MONEY programs (or a copy of them
       on a fixed disk.)
  
             A formatted diskette for your data (or a fixed disk sub-
       directory for this purpose).
  
       Starting the Program the First Time
  
            Start your computer with a diskette containing your Disk Operat-
       ing System (DOS) in your normal way.  It is important that you have
       the correct date in your machine, especially the current year, so if
       you are asked the question "Date?", be sure you answer it correctly!
       Place the program diskette in a disk drive and type PC-MONEY <ENTER>.
       (Note: the <ENTER> key may be marked "RETURN" on your keyboard.)  The
       first thing you should see on your screen is a "box" surrounding the
       program name and how and where to make contributions.  Press a key on
       the keyboard to go on.  If there is not a file on your program disk-
       ette by the name of "INITDAT8",  the screen will next inform you that
       the initialization data is missing and will give you the following
       choices:
  
            1 - Try Again.
  
            2 - Create new Initialization Data File.
  
            3 - Quit.
  
            Since we are getting started, choose #2.  You will now see on
       your screen a "form" for filling in data that your program will use
       each time you use it in the future.  To get started, it is suggested
       you fill in only the first two items at this time.  You can always
       come back to this form (via the INITIALIZATION selection described
       later) and change it or add to it as you wish.  For now, fill in the
       "Data Disk" blank with an appropriate disk drive letter.  If you have
       a single drive system, type A:  If you have a two drive system, you
       probably will want to keep your checking account, tax data, and home
       business data on a diskette in drive B:, so enter B: in that case.  If
       you have a fixed disk and want to keep your data there, type the drive
       designator AND the sub-directory name.  For example C:\ACCOUNTS.
  
            If you need help working with this form, see the paragraph on
       forms in the Program Operation section later in this manual.
  
  
  
  
                  P C - M O N E Y   O P E R A T I O N S   M A N U A L
                                       page 4
  
  
  
            And now, move the cursor (press <ENTER>) to the blank by "Number
       of Bank Accounts" and enter a "1" to keep it simple when you're
       starting.
  
            If you know you have a graphics or color display adapter in your
       computer and you are using a monographic (non-color) video display
       unit, go down to the last form item and enter N.  If you don't kow,
       don't worry about it.  The only effect will be that your HELP screens
       will have a bad background "color".
  
            Press the <ESC> (escape) key and then answer the "ALL OKAY? (Y or
       N) (Use X to abort entry)" question at the bottom of your screen with
       a "Y".  In a few seconds you should see the PC-MONEY Main Menu.
  
       Subsequent Starts
  
            Now that you have the initialization data on your diskette, each
       time you start PC-MONEY, you need only:
  
                 1) Start your computer with your DOS diskette or hard disk,
       making sure that you have entered the correct date. (You may wish to
       copy PC-MONEY to a diskette containing DOS and start from your program
       diskette.)
  
                 2) Insert your program diskette in a disk drive and your
       data diskette in a second drive (if you have one), and
  
                 3) type PC-MONEY <ENTER>.  You should be off and running!
  
       Stopping the Program
  
            Normally the program is exited by selecting MAIN MENU selection
       "5 - QUIT".  You may leave after any question in the program by an-
       swering with <CTRL><BREAK>, but you may lose data you've recently en-
       tered if you do this, so it's not advised!
  
       PROGRAM OPERATION
  
       General
  
            The operation of PC-MONEY is pretty much self-explanatory.  There
       are no "Commands" to learn.  Every operation is selected by menus and
       all data are entered into blanks on forms.  Questions to be answered
       are always at the bottom of the screen.
  
        Menus
  
            Selection of menu items can be made two ways--either by typing
       the number in front of the item you want, or by moving the arrow up or
       down the menu until the arrow is opposite the item you wish to select
       and then pressing <ENTER> to select that item.  If you use the latter
       method, you can use the F1 key (function key F1) at each menu item to
       see a help screen describing that item.
  
      
  
                P C - M O N E Y   O P E R A T I O N S   M A N U A L
                                       page 5
  
  
  
       Forms
  
            Forms are used to enter Initialization information, Bank Account,
       Tax, and Home Business Journal information.  In some cases, there is
       data already entered into the form, such as when a bank record has
       been selected for correction.  In all cases, make corrections by
       locating the cursor on the blank and type over any data that is
       already there.  Blanks may be filled in by typing over the underlines
       (______) on the form.  The cursor is moved to the next blank by the
       <ENTER> key.  It is moved to the previous blank by holding down
       <SHIFT> and pressing the <TAB> key.  Within a blank the cursor can be
       moved forward or backward with the right and the left cursor keys and
       it may be moved up and down between lines with the up and down cursor
       keys.  Note that blanks requiring numbers will accept ONLY numbers.
       You may exit the form at any point by pressing the escape <ESC> key
       and answering the "ALL OKAY" question with Y or X (for YES or Abort,
       respectively).
  
       Help Screens
  
            Whenever a "Help Screen" is available, it is indicated in one or
       both of the boxes at the bottom of the screen.  Function Key F1 is
       usually used to display a help screen or a screen which identifies a
       set of codes.  At times Function key F2 or F10 is also active.
  
       PROGRAM DETAILS
       ----------------------------------------------------------------------
  
                             P C - M O N E Y   Vers 89
                                     MAIN MENU
  
                           1 - BANK ACCOUNT & TAX MANAGEMENT
  
                           2 - FEDERAL INCOME TAX CONSOLIDATING
  
                           3 - HOME BUSINESS ACCOUNTING
  
                           4 - INITIALIZATION
  
                           5 - QUIT
  
       ----------------------------------------------------------------------
       MAIN MENU SELECTION 4 - PROGRAM INITIALIZATION
  
            On selection of this menu item, you are presented with a form to
       fill.  Most of the data on this form is optional and will be used only
       after you've had some experience with PC-MONEY and want to streamline
       your use of it.  However, the first two blanks should be entered prior
       to your use of PC-MONEY.  The first blank is where you designate the
       disk drive that will contain your data.  This should be entered in the
       form:     B:        (including the colon).
  
            If you are using a fixed disk and want to keep your data in a
       sub-directory (a good idea!), use the full name of the disk and
       directories (up to three levels).  For example:  C:\FINANCES\DATA
       would indicate that your bank and tax data will be found in sub-
       directory DATA of directory FINANCES on drive C:.
  
      
                P C - M O N E Y   O P E R A T I O N S   M A N U A L
                                       page 6
  
  
  
            The next blank is for your Number of Bank Accounts.  The only ef-
       fect this has on operation of PC-MONEY is that if you indicate you
       have more than one account, you are asked which account you wish to
       use when you select the Bank Account and Tax Management section.
  
            The rest of the second line and the next three lines may be used
       to designate a particular Tax Code, called the "command Code" which
       will automatically trigger multiple entries in your Tax File each time
       you use it.
  
            For example, the Tax Code for Salary might be used to trigger
       SubCode entries for Withholding Taxes, Hospitalization Insurance, etc.
       In this manner, when you enter your net salary deposit in Bank Trans-
       actions and identify the Tax Code as Salary, the gross amount of your
       salary (for tax purposes) is entered into the tax data, along with any
       of the SubCodes you have identified on this INITIALIZATION form.
  
                 A sample entry:
       ----------------------------------------------------------------------
  
       Command Code 1_      Command Code Amount 2788.00___
  
       SubCode A 21   A Amount -800.00___ A Payee IRS_______ A Purpose W/H___
  
       SubCode B 24   B Amount -84.69____ B Payee Blue Cross B Purpose Ins___
  
       SubCode C 0_   C Amount __________ C Payee __________ C Purpose______
       ----------------------------------------------------------------------
  
            The next section of the INITIALIZATION form permits you to add
       Tax Codes numbers 41 through 44 if you so desire.  The first 40 codes
       have been selected to perform with the INCOME TAX CONSOLIDATING
       program, so are not changeable, but you may find you wish additional
       categories.  If so, enter them here and on subsequent runnings on PC-
       MONEY they will be listed on the Tax Code Help Screen along with the
       first 40.  Note that these codes are useful only for displaying and
       printing.  They are not used in the Income Tax Estimating section of
       the program.
  
            If you have a graphics or color display adapter in your computer
       and you are using a monochrome (non-color) video display unit, go down
       to the last form item and enter N.  This change will make your HELP
       screens easier to read by changing the background "color".
  
            NOTE: Some changes you make to this form will not be used by the
       program until the next time you start PC-MONEY, so if you've made
       changes that are essential to this running, quit the program (via Main
       Menu Selection 5 - QUIT) and then restart PC-MONEY.
  
  		 Use the blank after "Number of Printer Lines per Page if you
 wish to print fewer than 66 lines (the default if you leave this space
 blank) on a page. This may be required if you have a laser printer.

		Use the blank after "Printer Page Width (80 or 132) if your
 printer is set up for 132 columns.  This will keep some reports from
 printing two lines for a record and will put the record on one line.
  The default, if you leave this blank is 80.




                P C - M O N E Y   O P E R A T I O N S   M A N U A L
                                       page 7
  
  
  
       ----------------------------------------------------------------------
       MAIN MENU SELECTION 1 - BANK ACCOUNT & TAX MANAGEMENT
  
            This section of PC-MONEY makes it possible to keep records for as
       many as 9 bank accounts.  It also maintains an annual Tax record which
       includes up to 44 tax categories for easy consolidation and
       compilation of items for income tax estimating and preparation.
       Entries such as checks or deposits that affect both a bank account and
       your tax account are made in a single entry.  Bank and Tax records can
       be displayed (and printed) a number of different ways.  All operations
       are selected by menus that are easy to use.  All account data is
       entered via fill-in forms with editing capabilities.
  
            Select MAIN MENU #1 and you will see the following sub-menu:
       ----------------------------------------------------------------------
  
                              P C - M O N E Y  Vers 89
  
                           BANK ACCOUNT & TAX MANAGEMENT
  
                           1 - ENTER DEPOSITS/WITHDRAWALS
  
                           2 - DISPLAY/PRINT/CORRECT BANK DATA
  
                           3 - BALANCE BANK ACCOUNT
  
                           4 - ENTER TAX INFORMATION
  
                           5 - DISPLAY/PRINT/CORRECT TAX DATA
  
                           6 - RETURN TO MAIN MENU
       ----------------------------------------------------------------------
  
             On selection of any of the first five of the above menu items,
       you will be asked the question:  Current Year? (Y or N). At this
       point, you will normally answer with Y or y, (for "yes") but you may
       want to look at last year's (or earlier) data, so you may select the
       year at this juncture.  Practice data dated 1983 is on your original
       diskette, so you may wish to use it at this time.  If so, answer the
       above question with an N and the next question with 83<ENTER>.  If you
       want to create new bank and tax files for the current year (or if you
       have already done so), answer Y to the "Current Year?" question.
  
            IF you have indicated on the PROGRAM INITIALIZATION form that you
       have more than one Bank Account, you will now be asked "Which Ac-
       count?".  You may have accounts numbered 1 to 9.  At this point, if
       the Bank file for the Account Number and the Year you've identified is
       NOT found on the data disk you've designated (via the Initialization
       procedure), you will see a message to that effect on the screen.  Take
       one of the 4 choices.  If you choose #3 - Create a New Bank File, you
       will be asked to furnish the starting balance of your bank account.
       Similarly, if your Tax file for the year you've designated is not
       found on the data diskette, you will have the opportunity to create a
       new one or to redesignate your drive identification.
  
  
  
  
  
  
  
                P C - M O N E Y   O P E R A T I O N S   M A N U A L
                                       page 8
  
  
  
       SELECTION 1 - ENTER DEPOSITS/WITHDRAWALS
  
            A message appears which tells you where you left off the last
       time you made an entry to your bank data.  It shows the last check
       number, its date, and the bank balance at that time.  Press any key to
       proceed.
  
            The form for entering Bank transactions now appears.  (A transac-
       tion is either a withdrawal or a deposit.)  You will note that the
       cursor is on the blank for Transaction Type.  By default this is a "W"
       for "Withdrawal" (the majority of transactions seem to be with-
       drawals!), but you may type a "D" if this is a deposit.  Press <ENTER>
       to move the cursor to the Budget Code blank, where you may wish to en-
       ter a Budget Code.  (This is optional--you may leave it blank if you
       have not assigned Budget Codes.)  The next blank is for your check
       number.  If this is a deposit, you will probably wish to just skip it
       (leave it blank).  Then enter the month, day and Amount of the with-
       drawal or the deposit.  Note that the year is not entered since all
       records are kept on a calendar year basis and you have already
       indicated the year (see above).  (Do NOT use commas or dollar signs
       when entering numerals such as Amounts.)
  
            If this transaction involves your Federal Income Taxes, enter the
       appropriate Tax Code in the next blank.  Tax Codes can be seen on the
       screen by pressing Function Key F1.  If the total amount of your
       transaction, or the Purpose or the Payee is okay for your bank trans-
       action but NOT correct for your Tax records, you may at this point,
       call up the Tax Transaction Entry form, by putting number 91 in the
       tax code space.  If you put a 92, you will be able to enter two tax
       entries, 93 for 3, and so on up to 99 for nine entries.
  
            Example:  A bank  deposit of $250 might represent $150 stock
       dividend plus a $100 interest payment you have received.  In the Bank
       Entry form, place $250 for the amount, 92 for the Tax Code, and
       "Various" in the Payee/Payer and Purpose blanks.  When the Tax Code
       form appears on the screen, enter Tax Code 2,  Amount 100, etc. in the
       first one and Tax Code 3, Amount 150 in the second one.
  
            Review your form entry when "ALL OKAY? <Y or N> (Use X to abort
       entry)" is displayed.  If it is NOT okay, reply with an N and the
       cursor will return to the form so that you may make corrections.  If
       all is okay, answer with a Y.  If you decide not to enter ANY data,
       answer with an X to abort the entry--that is , to make NO entry.
  
            If you have not aborted your entry, you will then be asked if you
       wish to make another entry.  Answer Y or N (for Yes or No
       respectively.)
  
  
  
  
  
  
  
  
  
  
  
  
  
  
                P C - M O N E Y   O P E R A T I O N S   M A N U A L
                                       page 9
  
  
  
       SELECTION 2 - DISPLAY/PRINT/CORRECT BANK DATA
  
            The selection of this Menu Item, causes the next menu to be dis-
       played:
  
       ----------------------------------------------------------------------
                             P C - M O N E Y   Vers 89
                            DISPLAY/PRINT  BANK ACCOUNT
  
                           1 - Entire Bank File
  
                           2 - By Check Numbers
  
                           3 - By Status
  
                           4 - By Budget Code
  
                           5 - By Payee/Payer
  
                           6 - By Purpose
  
                           7 - Return to Bank/Tax Menu
  
       ----------------------------------------------------------------------
            All of these display functions work in essentially the same way.
       First you are asked if you wish to print.  ("Print" refers to printer
       output on paper as opposed to displaying on the screen.)  If you
       choose to display, twenty lines of data are displayed, after which you
       may quit by entering the letter "Q", or continue by pressing the
       <SPACE BAR>.  When you have quit or when all the data has been dis-
       played, you are asked if there are any corrections to be made.  If you
       do have corrections to make in the displayed data, answer with a Y and
       then identify the number of the record to be corrected.
  
            Corrections are made on the same form as was used for transaction
       entry.  Make your correction(s) and press the <ESC> key to and answer
       with a Y to proceed.  Note that you can correct Transaction number 0,
       (even though it is never displayed or printed) to correct your bank
       balance.
  
       SELECTION 3 - BALANCE BANK ACCOUNT
  
            This selection is used to reconcile periodic statements from the
       bank with your own data.  It also marks those transactions which have
       cleared the bank by setting their Status field to "C" vice "O".  You
       must first enter the amount of the previous balance.  Then each can-
       celed check is listed by number.  You may enter groups of consecutive
       numbers by using First-Last inclusive.  For example, if you enter 100-
       110, all checks from 100 through 110 will be cleared.  After the last
       check, enter a "0" to so indicate.  Then you are asked to enter de-
       posits.  These are entered by the amount of the deposit rather than a
       number.  Again, indicate the last one has been entered by entering a
       "0".  PC-MONEY will then go through your data, search for each check
       and deposit, and keep a running total of those found in your data.  It
       will then give you a total which should, of course, be the same as
       your bank statement total.  If not, it's time to go back to the Dis-
       play/Correct Bank Data section and search for errors!
  
    
                  P C - M O N E Y   O P E R A T I O N S   M A N U A L
                                      page 10
  
  
  
       SELECTION 4 - ENTER TAX INFORMATION
  
            This part of PC-MONEY is used when there is tax information to be
       entered in your tax data file that is NOT part of a checking account
       transaction.  On selection, you will see a form similar to that which
       is used for entering Bank Deposits/Withdrawals.
  
            Tax Codes may be displayed on the screen by pressing the F1 key.
       Fill in each blank and answer the "OKAY?" question with a "Y" when you
       have correctly filled the blanks.
  
       SELECTION 5 - DISPLAY/PRINT/CORRECT TAX DATA
  
            The selection of this Menu Item, causes the next menu to be
       displayed:
  
       ----------------------------------------------------------------------
                             P C - M O N E Y   Vers 89
                              DISPLAY/PRINT  TAX DATA
  
                           1 - Entire Tax File
  
                           2 - By Tax Codes
  
                           3 - By Payee/Payer
  
                           4 - By Purpose
  
                           5 - Return to Bank/Tax Menu
  
            All of these display functions work in essentially the same way.
       First you are asked if you wish to print.  If you choose to display,
       twenty lines of data are displayed, after which you may quit by enter-
       ing the letter "Q", or continue by pressing the <SPACE BAR>.  When you
       have quit or all the records have been displayed, you are asked if
       there are any corrections to be made.  If you do have corrections to
       make in the displayed data, answer with a "Y" and then identify the
       number of the line to be corrected.
  
            Corrections are made on the same form as was used for Tax Infor-
       mation Entry.  You may skip any items on the form that are already
       correct, and type over any items you wish to change.
  
       SELECTION 6 - RETURN TO MAIN MENU
  
       This selection takes you back to the beginning, the MAIN MENU.
  
  
  
      
                P C - M O N E Y   O P E R A T I O N S   M A N U A L
                                      page 11
  
  
  
       MAIN MENU SELECTION #2 - FEDERAL INCOME TAX ESTIMATING
  
            This section of PC-MONEY is designed to assist the user in
       consolidating and estimating federal income taxes.  Output from the
       computer, which includes a summary report and an optional detailed
       report can be either displayed on the screen or printed.  Details
       include schedules A and B line items.  Schedules C and D details are
       included to the extent such items are described in previously
       developed (by PC-MONEY) tax files.
  
       NOTE:  There is NO guarantee that the figures produced by this
       estimator are accurate enough to use directly on your income tax
       forms.  You must double-check them independantly before submitting to
       the IRS.
  
            Tax data can be entered in several different ways:
  
            1.  From a tax file developed by the PC-MONEY program.
  
            2.  From a PC-MONEY tax file , augmented from the keyboard.
  
            3.  Entered from the keyboard.
  
            4.  From a previously-saved file which was developed by any of
       the above.
  
            Recalculations using changed data can be rapidly made so that the
       user can see the effects of various actions that might be taken to
       change tax liabilities.
  
            The first screen displayed is a brief description of INCTAX, fol-
       lowed by the question "Do you want to proceed with this program (Y or
       N)? ".  If you answer with any letter other than a "Y" (or a "y"), the
       program will go back to the MAIN MENU.  Normally, you will answer with
       a "Y" and INCTAX will ask for some initial information as follows:
  
       ----------------------------------------------------------------------
                                 INITIAL DATA INPUT
  
          Name of Taxpayer(s) _______________________________
  
          Date of estimation (M/D/Y) ____________ Type of Return (1-5) __
  
          Nmbr of over 65 and or Blind Deductions__   Number of Exemptions __
  
          Data Source (K=Kybd, P=PC-MONEY,S=Saved) __
  
                        TYPE OF RETURNS
  
                      1 = Single
                      2 = Married, Joint Return
                      3 = Married, Separate Returns
                      4 = Unmarried Head of Household
                      5 = Qualifying Widow(er)
       ----------------------------------------------------------------------
  
    
                P C - M O N E Y   O P E R A T I O N S   M A N U A L
                                      page 12
  
  
  
            Each of these questions should be answered. If you leave the Date
       of estimation blank, the current date will be used.  If you leave the
       number of deductions and number of exemptions blank, 0 will be used.
       You MUSt fill in the Type of Return and the Data Sourceh.
  
            If you indicate that the Data Source will be the keyboard, you
       will immediately see the TAX DATA INPUT screen as shown below.  If you
       indicate that the source is a saved file, you will then be asked for
       the name of that file.  If the file is found, the program calculates
       the tax and shows the Summary screen as shown below.  If the file is
       not found, the cursor returns to the INITIAL DATA INPUT form above so
       that you can either try again with another file name, or change the
       data source field.
  
            If you indicated PC-MONEY as the Data Source you will be queried
       as follows:
  
       ----------------------------------------------------------------------
            Note: if your tax file was developed via the PC-MONEY program,
       your tax file will be named TAXESxx.DTA, where xx represents the year.
  
            Enter the YEAR of the file (e.g. 89) <ENTER>
  
       ----------------------------------------------------------------------
            (Note:  a practice file named TAXES83.DTA is on your original
       diskette.  If you wish to use it for practice, type 83<ENTER> here.
  
            Enter only the last two digits of the year.  If the tax file is
       not found on the designated data disk drive, an error message will
       appear which allows you to either try again with a different year
       designator or go back to the MAIN MENU and change the drive
       designator.
  
            After the tax file is found you will next see a message that
       says:
  
       ----------------------------------------------------------------------
          If you have used the PC-MONEY Home Business Accounting Section,
             your home business (Schedule C) data is in a disk file.
  
            Do you have such a file?
  
       ----------------------------------------------------------------------
  
             If your answer is yes (Y), you then will be asked:
  
            What is the name of your data file? <ENTER>
  
             If the file whose name you input is not found, you will be given
       the opportunity (after a "File Not Found" error message) to either try
       again or to quit trying to identify such a file.  Note:  the practice
       file furnished with PC-MONEY is named SMITH83.
  
            Next you will see on the screen this message:
  
            "NOW ANALYZING DATA IN DISK FILE....."
      
                P C - M O N E Y   O P E R A T I O N S   M A N U A L
                                      page 13
  
    
            While this message is displayed, the computer is going through
       your tax file and combining all entries with the same Tax Code.  In
       other words, all entries with Tax Code #1, will be added up under
       "Wages, Salaries, Tips, etc.", all entries for Tax Code #30 will be
       totaled for "Home Mortgage Interest", and so on throughout the 40 Tax
       Codes.  Furthermore, certain entries will be sub-divided for purposes
       of  displaying or printing details for your income tax form.  Entries
       that will be sub-divided (by Payee/Payer) are:
  
                      Tax Code      Tax Item
  
                        2        Interest Income
                        3        Dividends
                        25       Other Medical Expenses
                        29       Other Deductible Taxes
                        32       Other Interest Paid
                        38       Other Miscellaneous Deductions
  
            When all items have been analyzed and summed up, the screen will
       clear and the computer will then display each item and its total as
       follows:
  
       ----------------------------------------------------------------------
                                   TAX DATA INPUT
  
        Wages, Salaries, Tips, etc.            18000.00
  
  
              As each item is displayed, enter any additions <ENTER>
  
       ----------------------------------------------------------------------
  
            Each total is displayed near the center of the screen.  If you
       wish to add to the amount displayed, type the amount of the addition,
       followed by the <ENTER> key.  If the displayed total is correct, just
       press the <ENTER> key.  The new total will then be displayed in the
       far right column and the next tax item will then appear:
  
                                                            18000.00
                 Interest Income
  
                 NOW ACCOUNT          334.09
                 CREDIT UNION         434.64       34.50
                 MUTUAL LIFE INS      172.77
  
                 Interest Income                   976.00          976.00
  
             The above is example of the display of an "expanded" Tax Code
       item.  As each of the individual lines are displayed, the computer
       pauses and waits for any additions you may wish to make.  One of these
       is shown in the CREDIT UNION line above, where 34.50 was added to the
       displayed total.  If the total shown is acceptable as is, press the
       <ENTER> key.  At the end of the expanded list, the total for the tax
       code item is shown in the column near the center of the screen.  Here,
       too, you may make any corrections or you may accept the total with the
       <ENTER> key.  The accepted total is then shown at the right and the
       next Tax Code item is displayed.
  
  
                  P C - M O N E Y   O P E R A T I O N S   M A N U A L
                                      page 14
  
  
  
            If there are no line items in your tax file for one of the expan-
       sion items, it will be displayed as follows:
  
            Dividends
  
                 Dividends                                  0.00
  
            After some items, an additional question will be asked IF the
       amount for the item is not zero.  These items, and the questions are
       as follows:
  
             Other Pensions/Annuities-Total
  
                 Taxable amount of Other Pensions? <ENTER>
  
             Social Security Benefits
  
                 Taxable amount of Social Security Benefits? <ENTER>
  
            Note:  If you make an error and have passed the point of
       correcting it, do not despair, you will be able to correct any Tax
       item amount after the first estimation.
  
            The order of display of the items follows, in general, the order
       of form 1040--Name, Filing Status, Exemptions, Income, Adjustments to
       income, Deductions, Credits and Other Taxes.  Payments (Withholding
       and Estimated payments) are between Adjustments to Income and Deduc-
       tions.
  
            Deductions entered via the PC-MONEY program will be preceded by
       negative signs since they represent withdrawals from your account.
       To increase them, precede your amount with a negative sign.  (For
       example, if Prescription Medicine, Drugs shows -300 and you want to
       add $150, you should enter it as -150.
  
            Capital Gains and Business Income (Sked C) can be either gains
       or losses by preceding the amounts with a negative sign if they are
       losses.
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
                P C - M O N E Y   O P E R A T I O N S   M A N U A L
                                      page 15
  
  
  
       The Estimation
             When you have finished the last Tax item (Other Taxes), INCTAX
       will rapidly estimate your Federal Income tax and present a summary on
       the screen in the following format:
  
       ----------------------------------------------------------------------
  
       Summary for (NAME)            (DATE)
       Adjusted Gross Income--                 (AMOUNT)
       Deductions--                                "
       Adj Gr Income less Deductions--             "
       $1950 times Number Dependents--             "
       Taxable Income--                            "
       Computed Tax--                 (AMOUNT)
       Tax Credits--                      "
       Tax less Credits--                 "
       Other Taxes--                      "
       Total Tax--                        "
  
       Federal Tax Withheld--         (AMOUNT)
       Estimated Taxes Paid--             "
       Tax Overpaid--                           (AMOUNT)
       (or Tax Owed--                               "  )
  
            Do you want to change any data and re-estimate? (Y or N)
  
       ----------------------------------------------------------------------
            Here you have the opportunity to change any of the previously
       entered amounts and have the program re-estimate your tax.  If you
       wish to do this, answer with a "Y".  You will then see two successive
       "forms" on the screen.  The first will contain items 1-20 of the list
       below and the second will have items 21 to 40 on it.
  
       1 Wages, Salaries, Tips, etc.       21 Federal Taxes Withheld
       2 Interest Income                   22 Estimated Federal Taxes Pd
       3 Dividends                         23 Prescription Medicine, Drugs
       4 Refunds of State Income Taxes     24 Doctors,Dentists,Ins.Premium
       5 Alimony Received                  25 Other Medical
       6 Business Income or (loss)         26 State & Local Income Taxes
       7 Short Term Cap Gains (Sked D)     27 Real Estate Taxes
       8 Long Term Cap Gains (Sked D)      28
       9 Capital Gains Distributions       29 Other Taxes (Pers.Property)
       10 Taxable Pensions/IRA/Annuity     30 Home Mortgage Interest
       11 Other Pensions/Annuities-Taxbl   31 Charge Account Interest Expn
       12 Rents, Royalties, etc (Sked E)   32 Other Interest Paid
       13 Unemployment Compensation-       33  Cash Contributions
       14 Social Security Benefits         34 Other than cash Contribution
       15 Other Income                     35 Casualty or Theft Losses
       16 Moving Expense (3303)            36 Union & Professional Dues
       17 Employee Bus. Expenses (2106)    37 Tax Return Preparation Fee
       18 IRA Deduction                    38 Other Miscellaneous Deduction
       19 Keogh Payments                   39 Tax Credits (Energy, etc.)
       20 Alimony Paid                     40 Other Taxes (Self-employment)
  
  
  
  
                P C - M O N E Y   O P E R A T I O N S   M A N U A L
                                      page 16
  
  
  
            Make all the changes you wish to make on these forms.  Use the
       Escape key and answer All OKAY? with a Y when you finish each form.
       NOTE:  changes are NOT additive as they were on the preliminary input.
       In other words, to change an item from say, 1000 to 1200, enter 1200
       (not 200 as before).  After all changes are made,  your taxes will be
       rapidly re-estimated and the summary screen will reappear.
  
            This data change and re-estimation may be done as many times as
       you wish.  When you have the data adjusted to your satisfaction, an-
       swer the question at the bottom of the summary with an  N  and then
       you will be asked if you wish to print the summary.
  
            After making this choice, you are asked if you want to save this
       data.  This is your opportunity to save a file on your diskette that
       represents all of the input and the latest changes you have made to
       your tax data.  It is NOT the same as the tax file developed by the
       Bank and Tax Management section, but a total of each of the 40 tax
       items.  If you wish to save it, you are then asked to enter a file
       name.  Enter one to eight letters or numerals.  These will be used by
       the program to form a file with the extension .TAX.  (If you enter
       JACK89, for example, the file on the diskette will be named
       JACK89.TAX).
  
             Next you are queried as to whether or not you want to
       display/print the details.  This is usually done only when you are
       ready to prepare form 1040 for submission, but of course, may be done
       at any time.  You may either just look at the details on the screen or
       you may print them by selecting the proper answer at the next (Do you
       want to Print?) question.
  
            After displaying (or printing, if you so chose) the information
       which normally appears on the basic Form 1040, you are then asked in
       succession if you wish to display/print schedules A and B.  Note that
       if you have changed any amounts for items such as Interest or Dividend
       Income, the TOTAL amount will appear in your detailed display, but if
       you changed individual lines in the expanded lists, they will NOT
       appear opposite those line items.  You will have to make note of these
       and adjust them accordingly.
  
             Schedules C and D can be displayed or printed if your Tax input
       was obtained from a PC-MONEY home business accounting file and a tax
       file.
  
  
  
  
  
  
  
  
  
  
  
  
  
  
    
                P C - M O N E Y   O P E R A T I O N S   M A N U A L
                                      page 17
  
  
  
       MAIN MENU SELECTION #3 - HOME BUSINESS ACCOUNTING
  
            This section of the program is for maintaining financial records
       of a home (small) business.  It accepts data via single entries (debit
       and credit accounts are both identified when a transaction is
       entered).  These entries are made via a simple "form" that appears on
       the computer screen.  Help screens are available throughout.
       Business data can be displayed or printed in a number of ways,
       including income statements, balance sheets, and ledger reports.
       There are 39 "accounts" to which items can be credited/debited.  These
       are designed to assist in preparation of Federal Income Tax Schedule
       C.  Five of these income accounts and 18 of the expense accounts can
       be named to fit your particular business needs.  Data developed by
       this section can be read and consolidated by the INCOME TAX ESTIMATING
       section of PC-MONEY.
  
            When you first select this section, the following screen appears:
  
       ----------------------------------------------------------------------
                     H O M E   B U S I N E S S   A C C O U N T I N G
  
             This is an accounting program for "home" (small) businesses.  It
       has facilities for keeping a general journal, displaying and printing
       income statements, balance sheets, journals and ledgers.
  
            Enter the name of your account file below.  Use Q to quit.
  
  
  
                       The Name of your account file? <ENTER>
       ----------------------------------------------------------------------
  
            Enter the name of your account file, and press the ENTER key.
       You may keep records on as many businesses as you wish by giving their
       account files different names.  (Note: the practice Home Business data
       furnished with PC-MONEY is named SMITH83.)  It is suggested that you
       include the year in the file name, to facilitate keeping records
       straight in future years.  Names can be up to 8 characters long.  If
       this is the first time you are starting an account file, or if you
       make an error when entering the account file name you will see this
       message:
  
       ----------------------------------------------------------------------
            Account File and/or Project File not found on disk: A:\   [or
       whatever disk you've identified]
  
                              PRESS ANY KEY TO CONTINUE
       ----------------------------------------------------------------------
  
                      (Note:  if disk or directory in error,
  
          Quit & return to Program Initialization in Main Menu.)
  
             Rename File, Create new file, or Quit (R C or Q)?
  
       ----------------------------------------------------------------------
  
  
                P C - M O N E Y   O P E R A T I O N S   M A N U A L
                                      page 18
  
  
  
            Reply with R, C or Q.  Use R if you made an error in naming the
       file the first time, C to create a new file with the name you gave, or
       Q if you want to quit or go back to the PC-MONEY MAIN MENU.
  
       Creation of new Home Business Data Files.
  
            If you chose C - Create new file, you will next see a form that
       looks like this (for this example, we assume you named your account
       SMITH89):
  
       ----------------------------------------------------------------------
                         CREATING NEW ACCOUNT FILE SMITH89
  
        Project Name or ID OVERHEAD____________  Client Name_________________
  
       Address _____________________________City_____________________________
  
       State __  ZIP ________________
  
            NOTE:  This is your OVERHEAD "project".  You should use the
       Client Name and address space to record your own company name and ad-
       dress.
  
       ----------------------------------------------------------------------
            As stated in the above NOTE on the screen, you should use this
       "project" form (more on "projects" later in these instructions) to
       record YOUR business name and address.  The "project" is automatically
       named OVERHEAD.
  
            Next you will see a screen like this:
  
       ----------------------------------------------------------------------
                         Starting Balances SMITH89 ACCOUNT
  
       Cash ______  Receivables ________  Inventory ________  Equipment _____
  
       Investments ________  Miscellaneous Assets ________  Payables ________
  
       Notes ________  Long Term Payables ________
  
                          NOTE:  Enter 0 if starting balance is 0.
  
       ----------------------------------------------------------------------
            This form gives you the opportunity to establish any starting as-
       set or liability amounts for the period of this record.
  
            Note:  once these are entered, they can be corrected by display-
       ing any of the Journal entries and when the "Any Corrections <Y or N>"
       question has been answered affirmatively, selecting Journal Transac-
       tion number 0 to be corrected.
  
  
  
  
  
  
  
  
  
                P C - M O N E Y   O P E R A T I O N S   M A N U A L
                                      page 19
  
  
  
             After your data files have been successfully found or newly cre-
       ated, the screen will clear and you will see the primary HOME BUSINESS
       ACCOUNTING MENU:
  
       ----------------------------------------------------------------------
                               P C - M O N E Y Vers 89
                  H O M E   B U S I N E S S   A C C O U N T I N G
  
                      ==> 1 MAKE JOURNAL ENTRIES
  
                          2 DISPLAY/PRINT JOURNAL
  
                          3 DISPLAY/PRINT GENERAL LEDGER
  
                          4 DISPLAY/PRINT INCOME STATEMENT
  
                          5 DISPLAY/PRINT BALANCE SHEET
  
                          6 PRINT BILLS/STATEMENTS
  
                          7 MANAGE PROJECTS & ACCOUNT CODES
  
                          8 RETURN TO MAIN MENU
  
       ----------------------------------------------------------------------
            Each of the MENU elements will be explained in detail below.  But
       first, a word about the data files that are created and maintained by
       this part of the program.   There are two files are used each time you
       invoke HOME BUSINESS.  One has the extension ".AC8" and the other the
       extension ".PR8".  These files will contain your transaction activity
       and the names of your projects.  "Projects" in this program are
       individual "cost centers" or individual "divisions" of your work.
       Project 0 is automatically assigned to "Overhead".  You may assign (or
       not if you so choose) project names to as many consecutive numbers as
       you wish.  This is done by selecting MENU item 7 - MANAGE PROJECTS &
       ACCOUNT CODES (described later).
  
       MENU SELECTION #1 - MAKE JOURNAL ENTRIES
  
            MENU item #1 is selected to make journal, or transaction entries.
       This is the heart of your bookkeeping system--when amounts, credit
       and debit account numbers and project numbers are identified.  The
       form that is used is as follows:
  
       ----------------------------------------------------------------------
  
                          J O U R N A L   E N T R Y  # 44
  
       Date _____  Amount _______  Debit Account # __  Credit Account # __
  
       Project ___  Reference __________  Payee/Payer ____________________
  
       Remarks ________________________________________
  
       ----------------------------------------------------------------------
  
  
                P C - M O N E Y   O P E R A T I O N S   M A N U A L
                                      page 20
  
  
  
            The blanks are more or less self-explanatory.  Function Key F1
       may be used to display a "help screen" that includes all the debit and
       credit account numbers.  Likewise, F2 will display all the projects
       which you have identified.  The Date should be entered in the form
       MM/DD/YY (M/D/YY is also suitable if the day and/or month are single
       digit ones).  Amounts should not include any commas nor dollar signs
       (1054.63 and NOT $1,054.63).  The "Reference" blank may be used to
       identify check numbers or charge numbers.
  
       MENU #2 - DISPLAY/PRINT JOURNAL
  
             Selection of this MENU item (#2) will produce a sub-menu on the
       screen as follows:
  
       ----------------------------------------------------------------------
                              P C - M O N E Y Vers 89
                               DISPLAY/PRINT JOURNAL
  
                           ==> 1 BY PROJECT NUMBER
  
                               2 BY TRANSACTION NUMBER
  
                               3 BY BEGINNING DATE
  
                               4 BY ACCOUNT CODE
  
                               5 BY PAYEE
  
                               6 RETURN TO HOME BUSINESS MENU
  
       ----------------------------------------------------------------------
             As you can see, you may select journal entries to display or
       print in a number of different ways.  The different categories are
       self-explanatory, so we will describe only one, the first one:
  
       ----------------------------------------------------------------------
                            JOURNAL DISPLAY--BY PROJECT
  
                Which Project Journal do you wish to display? <ENTER>
       ----------------------------------------------------------------------
  
                            Do you want to Print? (Y or N)
       ----------------------------------------------------------------------
  
            The screens above are typical of all of the Journal Display/Print
       screens.  In this case, if we choose Project 1, you would see (as an
       example) the following report:
  
  
  
  
  
  
  
  
  
  
  
                P C - M O N E Y   O P E R A T I O N S   M A N U A L
                                      page 21
  
  
  
       ----------------------------------------------------------------------
                           J O U R N A L   D I S P L A Y
  
       No.  DATE    AMOUNT    DB    CR  PROJ  REFERENCE      PAYEE   /REMARKS
       1  2/4/85    400.00    1     11    1   CHECK          NOPA
                 QUARTERLY SERVICE FEE
       5  3/11/85    20.78    30    1     1   CASH           SIR SPEEDY COPY
                 NOPA ROSTER COPIES
       10 6/1/85    400.00    1     11    1   CHECK 685      NOPA
                 QUARTERLY SERVICE FEE
  
                             Any Corrections? (Y or N)
       ----------------------------------------------------------------------
  
                 As you can see, each time you display your journal (or any
       portion of it), you are given the opportunity to make any corrections
       necessary.  If you want to do this, answer the "Any Corrections?"
       question with a "Y" and then you will be asked which journal entry you
       wish to correct.  Use one of the numbers in the left hand column.  You
       will then see a form just like the one used for the original entry,
       except this one will be filled with the existing information for that
       entry.  Make your corrections on the appropriate blank(s) of the form.
  
            Reminder: select Journal Entry #0 if you wish to correct your
       starting balances for this accounting period.
  
            When you have finished displaying/printing/correcting your jour-
       nal, you may return to the HOME BUSINESS MENU by selecting #6 in the
       DISPLAY/PRINT JOURNAL Menu.  The next menu item there is #3:
  
		Note that the Journal Display shown above will print each item on a
single line if your printer is set up for 132 columns and you have put 132 in
the proper space on the INITIALIZATION form.

       MENU #3 - DISPLAY/PRINT GENERAL LEDGER.
  
            Selection results in:
  
       ----------------------------------------------------------------------
                             L E D G E R  D I S P L A Y
  
               Which Ledger (Acct Code) do you wish? (A=All) <ENTER>
  
       ----------------------------------------------------------------------
  
            (Note, if All is selected, only those items which have a balance
       will be displayed or printed.  In other words, if the amount in an
       account equals zero it will not be displayed or printed).
  
  
  
  
  
  
  
  
  
  
  
  
                P C - M O N E Y   O P E R A T I O N S   M A N U A L
                                      page 22
  
  
  
            If for example, Account Code 30 is entered, the following would
       be a sample display:
  
       ----------------------------------------------------------------------
                            Office Expense  (30) LEDGER
  
       JOURN  DATE     DEBIT  CREDIT  ACCT   PAYEE/PAYER        R E M A R K S
  
       5   3/11/85     20.78           1   SIR SPEEDY COPY CTR  NOPA ROSTER
       9    4/4/85      0.56           1   US POSTAL SERVICE    MAILED DISK
       14  6/15/85     70.51           1   ACTION COPY CENTER   NOPA ROSTER
       35  10/4/85     29.12           1   AMER. SPEEDY PRINT   NOPA ROSTER
       41 11/29/85     18.80           1   U.S. Postal Service  Stamps
  
            TOTALS    139.77   0.00
       ----------------------------------------------------------------------
  
            Note that amounts debited or credited to the selected account,
       will be listed in the proper column and totaled.  The number under the
       "ACCT" column indicates the account which each item is credited if
       this is a debit or debited if this is a credit.
  
       MENU #4 - DISPLAY/PRINT INCOME STATEMENT
  
       A series of questions is asked prior to displaying/printing an Income
       Statement:
  
       ----------------------------------------------------------------------
  
                          I N C O M E   S T A T E M E N T
  
               What is date (M/D/Y) period begins? (<ENTER> = 1/1/CY)
  
               What is date (M/D/Y) period ends? (<ENTER> = 12/31/CY)
  
                    Include Overhead and all Projects? (Y or N)
  
                               Which Project? <ENTER>
  
                           Do you want to Print? (Y or N)
       ----------------------------------------------------------------------
  
             Note that, if you want the Income Statement for the whole
       (current) year, the first two questions may be answered by pressing
       the ENTER key, otherwise you must enter the appropriate dates.  If the
       third question is answered affirmatively, then the "Which Project?"
       question is omitted.
  
  
  
  
  
  
  
  
  
    
                P C - M O N E Y   O P E R A T I O N S   M A N U A L
                                      page 23
  
  
  
                 Here's the format of the Income Statement:
  
       ----------------------------------------------------------------------
                          INCOME STATEMENT 1/1/89 to 12/31/89
  
            Service Fees                             3375.06
            Royalties                                1000.00
            Net Sales                                2500.00
  
                    TOTAL INCOME:                    6875.06
  
  
            Advertising                                17.10
            Depreciation                             5047.40
            Dues & Publications                       301.95
            Freight                                    35.00
            Insurance                                  60.00
            Office Expense                            139.77
            Supplies                                  477.21
            Taxes                                     180.06
            Travel & Entertainment                      3.80
            Utilities & Telephone                       4.28
            Other Expenses                              5.00
  
                    TOTAL EXPENSES:                  6271.57
  
                    TOTAL NET:                        603.49
       ----------------------------------------------------------------------
  
       MENU #5 - .c.::DISPLAY/PRINT BALANCE SHEET.
  
             When this MENU item is selected, the following appears:
  
       ----------------------------------------------------------------------
                              B A L A N C E   S H E E T
  
               What is date (M/D/Y) period ends? (<ENTER> = 12/31/CY)
  
                           Do you want to Print? (Y or N)
       ----------------------------------------------------------------------
  
            Note that December 31 of the current year can be indicated by
       pressing the ENTER key without entering a date.  Then the question re
       printing should be answered with a Y or an N.  Here is the form of the
       Balance Sheet:
  
  
  
  
  
  
  
  
  
  
  
  
  
                P C - M O N E Y   O P E R A T I O N S   M A N U A L
                                      page 24
  
  
  
       ----------------------------------------------------------------------
                            BALANCE SHEET as of 12/31/89
  
               Cash                                      603.49
  
               Receivables                                 0.00
  
               Inventory                                   0.00
  
            Total Current Assets                                603.49
  
               Equipment                                   0.00
  
               Investments                                 0.00
  
               Miscellaneous Assets                        0.00
  
            Total Long Term Assets                                0.00
  
            TOTAL ASSETS                                        603.49
  
                 -------------------------------------------------------
  
            Payables                                    0.00
  
            Notes                                       0.00
  
            Total Current Liabilities                            0.00
  
            Long Term Payables                          0.00
  
            Total Long Term Liabilities                         0.00
  
             Proprietor                               603.49
  
             Total Equity                                     603.49
  
               TOTAL LIABILITIES & EQUITY                     603.49
  
       ----------------------------------------------------------------------
       MENU #6 - PRINT BILLS/STATEMENTS.
  
            This item on the MENU is used to print bills and/or statements
       which can be sent to clients listed in your Project file.  It does not
       calculate the amount of the bill from your journal, but asks you to
       itemize each item that should appear on the bill.  It then totals
       these items.  Bill printing and statement printing is designed around
       blank forms that are obtainable from stationers.  Little is pre-
       printed on these forms other than an outline as to where each item
       goes.  It is suggested that you experiment with this on plain paper.
       In fact, plain paper, with very little addition, can be used for your
       bills.  Note that the clients' name and address appear in position so
       that window envelopes can be used for mailing. Here are the questions
       you must answer prior to printing:
  
  
  
  
                P C - M O N E Y   O P E R A T I O N S   M A N U A L
                                      page 25
  
  
  
       ----------------------------------------------------------------------
                             B I L L   P R I N T I N G
  
               For which Project do you wish to print a bill? <ENTER>
  
  
                 Date of Statement? (M/D/Y) <ENTER> = current date.
  
                             Statement Number? <ENTER>
  
                   How many items on Statement? (1 to 9) <ENTER>
  
  
                              Date of Item # 1 (M/D/Y)
  
  
            Description of Item # 1:                         |
  
                                    |
  
            Amount of Item # 1:
  
       ----------------------------------------------------------------------
  
             (Note: the last three questions are repeated as many times as
       you have items for the statement/bill.  The vertical marks after
       "Description of Item #  " are to indicate to you where the lines to be
       printed will end, so that you can make sure a space appears here
       rather than splitting a word in two.  Type the whole description be-
       fore pressing <ENTER>).
  
       MENU #7 -MANAGE PROJECTS & ACCOUNT CODES.
  
            When this MENU item is selected, the following MENU is shown:
  
       ----------------------------------------------------------------------
                          MANAGE PROJECTS & ACCOUNT CODES
  
                           1 - START A NEW PROJECT
  
                           2 - MODIFY EXISTING PROJECT
  
                           3 - MODIFY ACCOUNT CODES
  
                           4 - RETURN TO HOME BUSINESS MENU
  
       ----------------------------------------------------------------------
  
  
  
  
  
  
  
  
  
  
  
                P C - M O N E Y   O P E R A T I O N S   M A N U A L
                                      page 26
  
  
  
            If you choose to Modify an existing project description, you will
       next be asked for the project number.  After that OR if you want to
       start a new project you will see the form below:
  
       ----------------------------------------------------------------------
  
          Project Name or ID ________________________
  
          Client Name __________________   Address _________________________
  
          City _________________________   State __  ZIP ________________
  
          Date Started (M/D/Y) ________  Date Ended (M/D/Y) ________
  
          Status (C=Current, P=Pending, F=Finished) __
  
       ----------------------------------------------------------------------
  
            If you are modifying an existing project, this form will be
       filled with the existing information.  You may change any field you
       wish to change.  For a new project, fill all the fields you wish.
  
       3 - MODIFY ACCOUNT CODES
  
            This section makes it possible for you to set up your income
       account codes and 18 of your expense account codes to meet the
       requirements of your business.  It is not, however, necessary to
       change any of these if you wish to accept the codes that are built-in
       the program.  On selection of this menu item, the Income codes are
       first displayed on a "form".  These will be filled with the built-in
       account names, so just type over those you wish to change.  The second
       screen displays the 18 expense accounts whose names may be similarly
       altered to suit your needs.
  
            Menu Item #4 in the MANAGE PROJECTS & ACCOUNT CODES Menu will
       return you to the HOME BUSINESS ACCOUNTING Menu and Menu item #8 there
       will  return to the Main Menu of PC-MONEY.
  
       HINTS AND KINKS
  
            No matter how hard one tries, there are bound to be glitches when
       someone else runs a computer program.  We don't know of any in PC-
       MONEY, but they'll be found by you, the user.  Let us know, so we can
       continue to improve the program.  Some things you might run into and
       what to do about them:
  
            If, when starting to enter withdrawals or deposits in your bank
       account, the message you receive shows an incorrect balance, you may
       correct this balance by selecting (after you've finished entering the
       transaction) one of the "Display Bank Account" selections and then
       correcting record number 0.  Record 0 does not display on the screen,
       but it is used to store the current balance and can be brought up on
       the screen for purposes of correcting it.
  
  
  
  
  
                P C - M O N E Y   O P E R A T I O N S   M A N U A L
                                      page 27
  
  
  
            If you should get a "Disk Not ready" message, you may have the
       wrong disk designated in your Initialization form.  Check it to make
       sure its a valid disk drive.  Other possibilities:  you may have
       failed to put a diskette in the drive, or the drive door may be open,
       or the diskette may be "Write-protected".
  
            We hope you don't see an "I/O Error" message, but if you do, just
       start PC-MONEY again.  Look at your display (Bank or Tax, whichever
       you were working on) and make sure all the recent data you entered is
       in the file.  If not, re-enter it.
  
  
            Users of previous versions of PC-MONEY:  Data files developed with
 version 88 of PC-MONEY do NOT have to be converted, however if you wish to use
data developed with earlier versions, several files must be converted to
       work with PC-MONEY version 89.  Use the program on the distribution
       diskette called PC-CONV8.  Run it by typing PC-CONV8<ENTER> at the DOS
       prompt and then follow instructions.  It converts, for example,
               BANK188.DTA to BANK188.DT8
               SMITH88.PRO to SMITH88.PR8
               SMITH88.ACT to SMITH88.AC8
       The file TAXESXX.DAT does not need to be converted as it will work
       with old and new versions of PC-MONEY.
  
            GOOD LUCK!
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
```
{% endraw %}

## README.DOC

{% raw %}
```
          INSTRUCTIONS
 
     This diskette contains:
  
     PC-MONEY.EXE     PC-MONEY.DOC     BRIEFMAN.DOC
     PC-CONV8.EXE     PCMOHELP.001

     BANK183.DT8     TAXES83.DTA     INITDAT8
     SMITH83.AC8     SMITH83.PR8     README.DOC

     To read short instructions, load DOS and type:
     TYPE BRIEFMAN.DOC<ENTER>

     To read detailed instructions, type:
     TYPE PC-MONEY.DOC<ENTER>

      A printed copy can be obtained by typing:
      TYPE PC-MONEY.DOC >PRN<ENTER>

     To run the program type:
     PC-MONEY <ENTER>.  

     PC-CONV8.EXE is used to convert old data files to
	this version of PC-MONEY.  (See PC-MONEY.DOC)

     PCMOHELP.001 contains the PC-MONEY "Help Screens"

     SMITH83.AC8, SMITH83.PR8, INITDAT8,
     BANK183.DT8, and TAXES83.DTA
     are furnished for practice and familiarization with
     sample data before you enter your own.

                           KEITH CONSULTING
                           3435 Mansfield Road
                           Falls Church, VA 22041

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0532

     Volume in drive A has no label
     Directory of A:\

    PCMOHELP 001     10800   8-01-89  10:24p
    PC-CONV8 EXE     49167   8-01-89   9:33p
    INITDAT8           281   8-01-89   8:19p
    PC-MONEY DOC     76778   8-01-89   5:24p
    GO       BAT        10   8-01-89   2:58p
    TAXES83  DTA      1558   8-01-89   2:52p
    README   DOC      1050   8-01-89   2:40p
    SMITH83  PR8       732   8-01-89   2:31p
    BANK183  DT8      2484   8-01-89   2:31p
    BRIEFMAN DOC      3145   8-01-89   2:28p
    PC-MONEY EXE    132832   8-01-89   2:02p
    SMITH83  AC8      1056   8-01-89   9:41a
    MANUAL   BAT       147  11-02-88  10:42a
    FILE0532 TXT      1462   9-08-89   2:33p
           14 file(s)     281502 bytes
                           31744 bytes free
