---
layout: page
title: "PC-SIG Diskette Library (Disk #2030)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2030/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2030"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "MICRO ACCOUNTING SYSTEM"

    Those looking for a single entry general ledger accounting program need
    look no further. Micro Accounting System (MAS) provides a service
    needed by many small businesses. In addition to the general ledger
    functions, MAS has banking and budgeting functions. These additional
    sections are not included by many other programs.
    
    Those who do not need invoicing, accounts receivable or payable
    functions, and who need a simple-to-use general ledger with ample
    report options, will like this program.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE2030.TXT

{% raw %}
```
Disk No: 2030                                                           
Disk Title: Micro Accounting System                                     
PC-SIG Version: S1                                                      
                                                                        
Program Title: Micro Accounting System                                  
Author Version: 2.0                                                     
Author Registration: $95.00                                             
Special Requirements: 512K RAM, and a hard drive recommended.           
                                                                        
Those looking for a single entry general ledger accounting program need 
look no further.  MAS [Micro Accounting System] provides a service      
needed by many small businesses.  In addition to the general ledger     
functions, MAS has banking and budgeting functions.  These additional   
sections are not included by most other programs.                       
                                                                        
Those who do not need invoicing, accounts receivable or payable         
functions, and who need a simple to use general ledger with ample report
options, will like this program.                                        
                                                                        
The program menus pop up quickly but do not contain instructions on how 
to return to a previous menu [YOU MUST PRESS ESC].  The program is easy 
to set up and use.  It uses non-standard account numbers [Ex: A09100]   
and the program is not easy to correct if an entry is incorrect or      
results in the statement being out of balance.                          
                                                                        
                                                                        
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
║            <<<<  Disk #2030  MICRO ACCOUNTING SOFTWARE  >>>>            ║
╠═════════════════════════════════════════════════════════════════════════╣
║ Read INSTALL.DOC to help install program onto your hard drive.          ║
║                                                                         ║
║ To start program, type: MAS          (press enter)                      ║
║                                                                         ║
║ To print documentation, type: COPY MAS.DOC PRN                          ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## INSTALL.DOC

{% raw %}
```
=============================================================================
             Micro Accounting System - Installation Procedures
=============================================================================

If the INSTALL.EXE program fails then you can install the program by
following the instructions below:

HARD DISK INSTALLATION:

   1.  Create a sub directory on your hard disk to place the program.
   2.  Change to that subdirectory
   3.  Change to drive A:
   4.  Type:  PKUNZIP MAS <drive>

   -   Installation is Complete

   Example:

   1.  C> MD ACCOUNT
   2.  C> CD\ACCOUNT
   3.  C> A:
   4.  A> PKUNZIP MAS C:

   To run the program change to drive 'C' and type:  MAS


FLOPPY DISKETTE INSTALLATION:

   Note:  You will need three formatted diskettes to use this system.
          They will be PROGRAM, OVERLAY, & DATA Diskettes.

   1.  Insert Original Diskette into drive A:
   2.  Insert PROGRAM (1st blank diskette) into drive B:
   3.  Change to drive A:
   4.  Type:  PKUNZIP MAS B: MAS.EXE
   5.  Remove PROGRAM Diskette from drive B:
   6.  Insert OVERLAY (2nd blank diskette) into drive B:
   7.  Type:  PKUNZIP MAS B: @floppy

   -   Installation is complete

   Example:

   3.  A:
   4.  PKUNZIP MAS B: MAS.EXE
   7.  PKUNZIP MAS B: @floppy

   To run the program do the following:

   1.  Insert PROGRAM Diskette into drive A:
   2.  Insert DATA Diskette into drive B:
   3.  Change to drive B:
   4.  Type A:MAS

   This will create all data files on drive B:


```
{% endraw %}

## MAS.DOC

{% raw %}
```








                     Micro Accounting System
                     =======================







                           Version 2.0









                      Copyrighted (c) 1989









                     SonShine Software, Inc
                         P. O. Box 4761
                   Dublin, Georgia 31021-4761







                         (912) 272-1714


                            Ron Byxbe
=================================================================

                       SHAREWARE STATEMENT

=================================================================


This program is offered as Shareware on a trial basis.  All
features of this program work in Full.

The User is asked to register the program with the Author if he
is going to use it.

Data entered into this system is directly compatible with the
registered version that you will receive so feel free to enter
any "real" data you have at this time.

Upon registration you will receive the latest version of the
program along with support and updates for 6 months.

Any suggestions for modifications should be done in writing and
forwarded to me.  They will be given close consideration when
producing the next version of this program.

Source code is not available for this program.

Individual customizing is not available at this time unless the
modification requested is beneficial to the entire system.  If
this is true then the modification will be considered and a new
release offered to all.

=================================================================
                         GETTING STARTED
=================================================================

Requirements:

To run the system it is recommended that you have a hard disk.
The system can be run on two floppies with limited disk space.
Dos Version 3.0 or higher is also recommended.  Ram Memory should
be 512k or more.

You MUST have a CONFIG.SYS file on your startup disk.  If you
have a hard disk then this file must be in your root directory
i.e. "C:\".  If you are using floppies then this file must be on
your DOS diskette.  The file must contain the following
statements:

          FILES=30
          BUFFERS=30

The system will not run unless these commands are added to your
CONFIG.SYS file.  Once you have added them you must reboot your
system.  This can be accomplished by CTRL-ALT-DEL sequence or
turning off the computer and turning it back on.

If you do not have an existing CONFIG.SYS file on your computer
then copy the one supplied on the program disk to either your
root directory (if using a hard disk) or to your DOS diskette (if
using two floppies).

Examples:

Hard Disk:    Copy A:CONFIG.SYS C:\   (Program Disk in drive A:)
Floppy Disk:  Copy B:CONFIG.SYS A:    (Program Disk in drive B:)

=================================================================
                          SYSTEM SETUP
=================================================================

Once the program is installed and loaded then you are ready to
set it up for use.  Follow the steps below to accomplish this.

EDIT NAME:

1.  Go to "Setup" from the Main Menu
2.  Select "Edit Name"
3.  Fill in all Spaces

     *Note:

     If you have a monochrome monitor that emulates color then   
     you may wish to place an "M" in the Monitor field to specify 
     that the program always comes up in Monochrome Mode. 

4.  If this is a registered version then enter your serial       
    number.

5.  When you have entered the last field then the program will   
    save the system parameters.


CREATE HEADING RECORDS

Now we must create heading records to define our accounts.  Go to
the menu item "CREATE HEADINGS".  This is located on the "SETUP"
menu.

See the Appendix for an example of Headings.

Accounts are defined as follows:

'A' = Assets
'B' = Liabilities
'C' = Capital/Equity/Fund balance
'D' = Income
'E' = Expense
The first letter of the account tells the computer what section
the account number belongs in.  The next (2) digits tell the
computer what Sub Group (Headings) the account belongs in.

Examples:      A01 = Checking Accounts       Assets
               A10 = Fixed Assets            Assets
               A21 = Current Assets          Assets

               B10 = Notes Payable           Liability
               B24 = Accounts Payable        Liability

               C22 = Retained Earnings       Capital/Equity/Fund
               C24 = Fund Balance            Capital/Equity/Fund

               D05 = Income From Operations  Income
               D10 = Misc Income             Income

               E10 = Direct Expenses         Expense
               E11 = Salaries                Expense
               E34 = Utilities               Expense

Create all your Headings First.  Print them out before assigning
Account Numbers.  This list will come in handy.

CREATE ACCOUNT NUMBERS

Once the Headings have been created we are now ready to create
the actual account numbers.  Account Numbers must fall under a
predefined Heading.

Go to the section "CREATE ACCOUNT" on the "SETUP" menu.

Now create your Account Numbers for the Headings you have set up
previously.

Examples:      Heading                  Account

          A01 = Checking           A01100 = General Checking
                                   A01200 = MIA Checking

          A10 = Fixed Assets       A10010 = Building
                                   A10020 = Land

          D05 = Income From Op.    D05100 = Sales
                                   D05200 = Programs

          E10 = Direct Expenses    E10005 = Advertising
                                   E10100 = Paper
                                   E10200 = Postage

The "Bank Account (Y/N)" tells the computer if this is an account
to which deposits will be made or checks written.  If it is place
a "Y" in this field.
=================================================================
                          BUDGET MODULE
=================================================================

EDIT SECTION

If you are going to use the budget module then select the
"BUDGET" option from the main.  Go to "EDIT BUDGET ACCOUNTS". 
Here you may enter a twelve month budget value for each account.

After you have entered the first dollar amount you can press the
"F5" key to spread the previous value into the rest of the
fields.  The can be done from any month at any time.


PRINT SECTION

This option will allow you to print your budget on the printer. 
You can print a single month or the totals for the year.  When
the date menu appears simply select the month you want and press
enter.


VIEW SECTION

This option will print the budget to a disk file and allow you to
view the file on the screen.  The disk file is called
"ACCOUNT.PRN".  After selecting this option you transport this
file to another software package if you so desire.
=================================================================
                           POST MODULE
=================================================================

This module is used to enter Bank Deposits, Bank Checks, and
Journal Entries.  This is the only place in the program where you
can enter data into the ledger.

*Note:  When entering any type of transaction the date entered
must be in the current period you will receive an error.

You can always look at the bottom of the Main Menu and see the
current period in which you are working.

ENTER CHECKS/DEPOSITS

Use this option to enter checks written from a bank account or
Deposits made to a Bank Account.

When you select this option a list of all your bank accounts will
appear on the screen.  Select the account you are working with
and press enter.

*Note:  If a bank account did not show up then you will need to
go to the Setup Menu, Edit Account section, find the account
number and place a "Y" in the "Bank Account" field.

When the screen appears you will be prompted for Date, Reference
Number (or check number), Amount, Whether it is a Check or a
Deposit, and a Description (Who you wrote the check to) or (Where
the Deposit came from).

After you have entered this information you can enter up to 50
accounts for this check or deposit.  Only one is required.  The
total of all entries is shown in the bottom right corner of
your screen.  This number must be equal to the amount entered at
the top before the computer will accept the check or deposit.

If you need to look up an Account Number press the "F1" key.  A
list of all Account Numbers will appear on the screen.  Select
the one you want and press enter.  The Number will be placed in
the field and the description will appear next to it.

Next enter a short description for this transaction and the
amount of the transaction.  In most cases the Transaction amount
is the same as the check amount.

After you have entered all information you must press the
F10 key to record this transaction.

DO NOT PRESS THE ESCAPE KEY UNLESS YOU WISH TO ABORT THIS CHECK.

JOURNAL ENTRIES

The journal entry program is used to make entries to the ledger
that does not effect a bank account (Check or Deposit).  Many
entries will be posted to a Bank Account but not in the form of a
check or deposit.

This program was written in the form of a single entry ledger. 
HOWEVER, the balance of the entry you are making must equal zero
when you are finished or you will not be able to finalize your
entries.

The program will ask you for several fields of information. 
Date, Account Number, Debit or Credit (D/C), Description, and
Amount.  Enter all this information and press enter.  The balance
of the Journal Entry will be displayed in the lower right corner
of your screen.  

You can stop at any time, exit the journal entry screen, and
return later to complete the entry.  However, if you do this the
Journal Balance in the lower right screen will reset to zero. 
This does not mean that you entry does not balance. When you
print the edit report you will find out if you balance or not.

You can also press the "F1" key to locate an Account Number.

*NOTE:  If you are posting an entry that will effect a Bank
Account the entry will not show up on the Bank Book
Reconciliation.  You will be out of balance that amount unless
the charge was a Bank Charge and is listed on the Bank Statement.

You may consider using the "Post Checks" or "Post Deposits"
option when making entries that effect a Bank Account.


EDIT REPORT

This option is used to print an Edit Report of all entries posted
so far.  This is the report that tells you if the Posting File is
in Balance.  You should print this report periodically while
posting to verify that you are in balance.


FINALIZE

After you have entered your checks, deposits, and journal entries
you should print an edit report.  If the report is in balance you
MUST Finalize.

The Finalize program will take all the entries that have been
posted so far and move them to the permanent ledger.
=================================================================
                         REPORTS MODULE
=================================================================

The Reports Section has several reports and can be run for one
month or the entire year.  Please note that in some cases when
you select Year-To-Date the computer will look at the current
period and print the report from the beginning of the year to the
current period (not December unless the current period is
December).

To print a report simply select the desired report from the menu
and press enter.  You will be prompted with a date screen.  The
menu bar will automatically be positioned on the current period. 
If this is the month you wish just press enter.  If you want
another month then place the menu bar over that month and press
enter.

A message will appear requesting that you start your printer. 
Verify that your printer is ready and press enter.

The reports are:

     -    Income Statement
     -    Balance Sheet
     -    Trial Balance
     -    General Ledger
     -    Account Analysis (One Account)
     -    Account Analysis (Multiple Accounts)
     -    Expense Statement
     -    Check Book Statement (Or Savings)
     -    Current Income Statement versus Budget
     -    Current Income Statement versus Last Month

*Note:  If you feel that other reports need to be added please
write down what you are looking for and mail to me.

=================================================================
                          CLOSE MODULE
=================================================================

This module allows you to change the current period or close the
year.

CURRENT PERIOD

To change the current period simply select this option and enter
the desired month.  The computer will change the period to that
month.  All entries posted will now go into this period.


CLOSE YEAR

The "Close End of Year" does more than change the period.  This
option adds up all the months and places this number into the
beginning balance for the next year.  It also places zeroes in
all the months.  The entire Income/Expense section will be
blanked out to start the next year.

ERRORS:

If you have not Finalized the entries made on the "Posting" menu
then you cannot close the Year.

If you have not made an entry to move Net Income to the Balance
Sheet you cannot close the year.
==============================================================================
                                    APPENDIX
==============================================================================

                            ACCOUNT HEADING LISTING 
 
                                 "My Church" 
                             Dublin, Georgia  31021 
 
                          Wednesday  February 22, 1989 
============================================================================== 
 
     ASSET HEADINGS 
     Current Assets..............................................A10 
     Fixed Assets................................................A11 
 
     LIABILITY HEADINGS 
     Current Liabilities.........................................B10 
     Longterm Liabilities........................................B11 
 
     CAPITAL/EQUITY HEADINGS 
     Fund Balance................................................C10 
 
     INCOME HEADINGS 
     Member Giving...............................................D10 
     Other Income................................................D11 
 
     EXPENSE HEADINGS 
     Salaries....................................................E10 
     Utilities...................................................E11 
     Insurance...................................................E12 
     Music.......................................................E13 
     Education...................................................E14 
     Library.....................................................E15 
     Nursery.....................................................E16 
     Evangelistic................................................E17 
     Missions....................................................E18 
     Activities..................................................E19 
 
                               CHART OF ACCOUNTS                    Page    1 
 
                                  "My Church" 
                             Dublin, Georgia  31021 
 
                          Wednesday  February 22, 1989 
============================================================================== 
 
     CURRENT ASSETS                 
     Checking - General Fund.....................................A10100 
     Checking - Special Account..................................A10110 
     Checking - Memorial Account.................................A10120 
     General Savings Account.....................................A10130 
     Petty Cash..................................................A10140 
 
     FIXED ASSETS                   
     Vehicles....................................................A11110 
     Office Equipment............................................A11120 
     Furniture & Fixtures........................................A11130 
     Building....................................................A11140 
     Land........................................................A11150 
     Pastor's Home...............................................A11160 
 
     CURRENT LIABILITIES            
     Reimbursable Expenses.......................................B10110 
     Accounts Payable............................................B10120 
 
     LONGTERM LIABILITIES           
     First Bank Mortage..........................................B11110 
     Church Bus Note.............................................B11120 
     Education Center Note.......................................B11130 
 
     FUND BALANCE                   
     Fund balance................................................C10100 
 
     MEMBER GIVING                  
     General Giving..............................................D10110 
     Building Fund...............................................D10120 
     Missions Gifts..............................................D10130 
     Youth Fund Receipts.........................................D10140 
     Memorial Gifts..............................................D10150 
     Special Project Gifts.......................................D10160 
     Loose Plate Offerings.......................................D10170 
 
     OTHER INCOME                   
     Rent Income.................................................D11110 
     Interest Income.............................................D11120 
     Other Income................................................D11130 
 
                               CHART OF ACCOUNTS                    Page    2 
 
                                  "My Church" 
                             Dublin, Georgia  31021 
 
                          Wednesday  February 22, 1989 
============================================================================== 

     SALARIES                       
     Pastor......................................................E10100 
     Education Director..........................................E10110 
     Music Director..............................................E10120 
     Nursery Worker..............................................E10130 
 
     UTILITIES                      
     Church Electricity..........................................E11100 
     Church Natural Gas..........................................E11120 
     Church Water/Sewage.........................................E11130 
     Pastorium Electricity.......................................E11140 
 
     INSURANCE                      
     Church Insurance............................................E12100 
     Pastorium Insurance.........................................E12200 
     Church Bus..................................................E12300 
 
     MUSIC                          
     Choir Robes.................................................E13100 
     Sheet Music.................................................E13200 
     Education Seminars..........................................E13300 
 
     EDUCATION                      
     Literature..................................................E14100 
     Magazines...................................................E14200 
 
     LIBRARY                        
     Equipment...................................................E15100 
     Books/Magazines.............................................E15200 
 
     NURSERY                        
     General Supplies............................................E16100 
     Teaching Aids...............................................E16200 
     Toys........................................................E16300 
 
     EVANGELISTIC                   
     Revival Costs...............................................E17100 
     Pulpit Supply/Pastor........................................E17200 
     Pulpit Supply/Music.........................................E17300 
 
 
                               CHART OF ACCOUNTS                    Page    3
 
                                  "My Church" 
                             Dublin, Georgia  31021 
 
                          Wednesday  February 22, 1989 
============================================================================== 

     MISSIONS                       
     Foreign Missions............................................E18100 
     Home Missions...............................................E18200 
     State Missions..............................................E18300 
     Children's Home.............................................E18400 
 
     ACTIVITIES                     
     Youth.......................................................E19100 
     Royal Ambassadors...........................................E19200 
     Girls in Action.............................................E19300 

```
{% endraw %}

## SAMPLES1.DOC

{% raw %}
```
==============================================================================
                          SAMPLE CHART OF ACCOUNTS
==============================================================================

                            ACCOUNT HEADING LISTING

                                 "My Church"
                             Dublin, Georgia  31021

                          Wednesday  February 22, 1989 
============================================================================== 
 
     ASSET HEADINGS 
     Current Assets..............................................A10 
     Fixed Assets................................................A11 
 
     LIABILITY HEADINGS 
     Current Liabilities.........................................B10 
     Longterm Liabilities........................................B11 
 
     CAPITAL/EQUITY HEADINGS 
     Fund Balance................................................C10 

     INCOME HEADINGS 
     Member Giving...............................................D10 
     Other Income................................................D11 
 
     EXPENSE HEADINGS 
     Salaries....................................................E10 
     Utilities...................................................E11
     Insurance...................................................E12 
     Music.......................................................E13 
     Education...................................................E14 
     Library.....................................................E15 
     Nursery.....................................................E16 
     Evangelistic................................................E17 
     Missions....................................................E18 
     Activities..................................................E19 
 
                               CHART OF ACCOUNTS                    Page    1 
 
                                  "My Church" 
                             Dublin, Georgia  31021 

                          Wednesday  February 22, 1989 
============================================================================== 
 
     CURRENT ASSETS                 
     Checking - General Fund.....................................A10100 
     Checking - Special Account..................................A10110 
     Checking - Memorial Account.................................A10120
     General Savings Account.....................................A10130 
     Petty Cash..................................................A10140 
 
     FIXED ASSETS                   
     Vehicles....................................................A11110 
     Office Equipment............................................A11120 
     Furniture & Fixtures........................................A11130 
     Building....................................................A11140 
     Land........................................................A11150 
     Pastor's Home...............................................A11160 
 
     CURRENT LIABILITIES            
     Reimbursable Expenses.......................................B10110 
     Accounts Payable............................................B10120
 
     LONGTERM LIABILITIES           
     First Bank Mortage..........................................B11110 
     Church Bus Note.............................................B11120 
     Education Center Note.......................................B11130 
 
     FUND BALANCE
     Fund balance................................................C10100 
 
     MEMBER GIVING                  
     General Giving..............................................D10110 
     Building Fund...............................................D10120
     Missions Gifts..............................................D10130
     Youth Fund Receipts.........................................D10140
     Memorial Gifts..............................................D10150
     Special Project Gifts.......................................D10160
     Loose Plate Offerings.......................................D10170

     OTHER INCOME
     Rent Income.................................................D11110
     Interest Income.............................................D11120
     Other Income................................................D11130 
 
                               CHART OF ACCOUNTS                    Page    2 
 
                                  "My Church" 
                             Dublin, Georgia  31021 

                          Wednesday  February 22, 1989 
============================================================================== 

     SALARIES                       
     Pastor......................................................E10100
     Education Director..........................................E10110 
     Music Director..............................................E10120 
     Nursery Worker..............................................E10130 
 
     UTILITIES                      
     Church Electricity..........................................E11100 
     Church Natural Gas..........................................E11120 
     Church Water/Sewage.........................................E11130 
     Pastorium Electricity.......................................E11140 
 
     INSURANCE                      
     Church Insurance............................................E12100 
     Pastorium Insurance.........................................E12200 
     Church Bus..................................................E12300 
 
     MUSIC
     Choir Robes.................................................E13100 
     Sheet Music.................................................E13200 
     Education Seminars..........................................E13300 
 
     EDUCATION
     Literature..................................................E14100 
     Magazines...................................................E14200 
 
     LIBRARY                        
     Equipment...................................................E15100 
     Books/Magazines.............................................E15200 
 
     NURSERY                        
     General Supplies............................................E16100 
     Teaching Aids...............................................E16200 
     Toys........................................................E16300 
 
     EVANGELISTIC                   
     Revival Costs...............................................E17100 
     Pulpit Supply/Pastor........................................E17200 
     Pulpit Supply/Music.........................................E17300
 
 
                               CHART OF ACCOUNTS                    Page    3
 
                                  "My Church"
                             Dublin, Georgia  31021 
 
                          Wednesday  February 22, 1989 
============================================================================== 

     MISSIONS                       
     Foreign Missions............................................E18100 
     Home Missions...............................................E18200 
     State Missions..............................................E18300 
     Children's Home.............................................E18400 
 
     ACTIVITIES                     
     Youth.......................................................E19100 
     Royal Ambassadors...........................................E19200 
     Girls in Action.............................................E19300 

```
{% endraw %}

## SAMPLES2.DOC

{% raw %}
```
                            ACCOUNT HEADING LISTING

                                                                                
                                                                                

                            Saturday, May 6th, 1989                             
==============================================================================

     ASSET HEADINGS
     Current Assets..............................................A10
     Accounts Receivable.........................................A11
     Property & Equipment........................................A12
     Software....................................................A13
     Accumulated Depreciation....................................A14
     Other Assets................................................A20

     LIABILITY HEADINGS
     Reimbursable Expenses.......................................B10
     Current Liabilities.........................................B11
     Long-Term Liabilities.......................................B12

     CAPITAL/EQUITY HEADINGS
     ShareHolders Equity.........................................C10

     INCOME HEADINGS
     Revenue From Sales..........................................D10
     Other Income................................................D11

     EXPENSE HEADINGS
     Cost of Goods Sold..........................................E10
     General & Administrative....................................E11
     Business Expenses...........................................E12
     Employee Benefits/Payroll...................................E13

                               CHART OF ACCOUNTS                    Page    1

                                                                                


                            Saturday, May 6th, 1989
==============================================================================

     CURRENT ASSETS
     General Checking............................................A10100
     Petty Cash..................................................A10300
     Accounts Receivable.........................................A10400

     PROPERTY & EQUIPMENT
     Computer System.............................................A12100
     Epson LQ850 Printer.........................................A12300
     Office Equipment............................................A12400
     Automotive Equipment........................................A12450
     Typewriter..................................................A12500
     Accumulated Depreciation....................................A12600

     SOFTWARE                      
     Turbo Pascal V5.0...........................................A13100
     Turbo Plus Screen Generator.................................A13200
     dpMax File Software.........................................A13300
     Word Perfect V4.2...........................................A13400
     Btrieve File Software.......................................A13500
     Microsoft Macro Assembler...................................A13600
     Borland Assembler...........................................A13650
     Power Tools Plus............................................A13700
     Borland Sprint..............................................A13750
     Screen Sculptor.............................................A13800

     OTHER ASSETS                  
     Amortized Costs.............................................A20100
     Investments.................................................A20200
     Loans: Federal Taxes........................................A20300
     Loans: State Taxes..........................................A20310

     REIMBURSABLE EXPENSES         
     Postage Due Byxbe Account...................................B10100
     Misc Due Byxbe Account......................................B10200

     CURRENT LIABILITIES           
     Accounts Payable - Trade....................................B11100
     Accounts Payable - Other....................................B11200
     Fica Taxes Payable..........................................B11300
     WH Taxes Payable............................................B11400
     State Payroll Taxes Payable.................................B11500
     Loans From Shareholder......................................B11600

     LONG-TERM LIABILITIES
     SSB - Tandy Computer........................................B12100
     Notes Payable - Byxbe.......................................B12200

     SHAREHOLDERS EQUITY
     Common Stock................................................C10100
     Retained Earnings...........................................C10200

                               CHART OF ACCOUNTS                    Page    2




                            Saturday, May 6th, 1989
==============================================================================

     REVENUE FROM SALES
     Sales - Membership System...................................D10100
     Sales - Prospect System.....................................D10300
     Sales - Sermon Indexer......................................D10500
     Sales - Purchase Order System...............................D10600
     Sales - Accounting System...................................D10700
     Program Returns.............................................D10900

     OTHER INCOME
     Computer Programming Services...............................D11100
     Interest Income.............................................D11200
     Misc Income.................................................D11300
     Freight Income..............................................D11400
     Gain/Loss on Assets.........................................D11500

     COST OF GOODS SOLD
     Software Materials..........................................E10050
     Bulk Diskettes..............................................E10100
     Floppy Mailers..............................................E10110
     Freight Expense.............................................E10120
     Labels......................................................E10130
     Printed Manuals.............................................E10140
     Packaged Programs...........................................E10150
     Preprinted Binders..........................................E10160

     GENERAL & ADMINISTRATIVE
     Telephone...................................................E11100
     Paper and Supplies..........................................E11110
     Computer Charges............................................E11120
     Misc Software...............................................E11130
     Misc Supplies...............................................E11140

     BUSINESS EXPENSES
     Advertising.................................................E12100
     Corporation Fees............................................E12110
     Accounting Fees.............................................E12120
     Legal Fees..................................................E12125
     Bank Charges................................................E12130
     Interest Expense............................................E12135
     Depreciation Expense........................................E12140
     Travel Expenses.............................................E12150
     Meals & Entertainment.......................................E12160

     EMPLOYEE BENEFITS/PAYROLL
     Administrative Salaries.....................................E13025
     Payroll Taxes...............................................E13050

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2030

     Volume in drive A has no label
     Directory of A:\

    CONFIG   SYS        22   2-04-89   6:28p
    FILE2030 TXT      2295   1-15-90   6:21p
    FLOPPY              37   5-05-89   3:15p
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       694   1-16-90  11:52a
    INSTALL  DOC      1563   5-14-89  11:39a
    INSTALL  EXE     18096   5-14-89  10:44a
    MAS      ZIP    180728   6-08-89   6:47p
    PKUNZIP  EXE     18208   3-06-89
            9 file(s)     221681 bytes
                           95232 bytes free
