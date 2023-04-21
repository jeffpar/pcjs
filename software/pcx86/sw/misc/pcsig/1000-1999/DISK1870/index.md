---
layout: page
title: "PC-SIG Diskette Library (Disk #1870)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1870/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1870"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "PC-DEAL"

    PC-DEAL is a double-entry ledger program, an application of cash
    accounting. The object is to keep track of cash or money. Where is it
    coming from? Where is it going? How much is available? How much is
    owed?
    
    The basic mechanisms for doing this are the account and the transaction.
    PC-DEAL supports 300 accounts and up to 1,200 transactions per month. It
    maintains a journal of transactions entered and a separate ledger and
    transaction journal for each account.
    
    PC-DEAL is designed for double entry booking; that is, the specification
    of two account numbers (the To/Debit and From/Credit accounts), for each
    transaction. The transaction is recorded in two account ledgers and a
    balance is maintained between the cash coming in and the cash going out.
    
    PC-DEAL maintains transaction journals and account ledgers for a period
    of thirteen months -- the twelve month accounting period and the first
    month of the next year.
    
    Generate and print the following reports:
    
    ~  Chart of accounts
    
    ~  Cash flow
    
    ~  Monthly transactions journal
    
    ~  Trial balance
    
    ~  Balance sheet
    
    ~  Monthly income and expense
    
    ~  Monthly activity in asset and liability accounts
    
    ~  Change in net asset value
    
    ~  Budget comparison
    
    ~  Budget projection
    
    ~  Annual income and expense
    
    ~  Annual asset and liability account activity.
    
    PC-DEAL is fully menu-driven and intuitive to operate.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1870.TXT

{% raw %}
```
Disk No: 1870                                                           
Disk Title: PC-Deal                                                     
PC-SIG Version: S1.2                                                    
                                                                        
Program Title: PC-Deal                                                  
Author Version: 2.4                                                     
Author Registration: $40.00                                             
Special Requirements: None.                                             
                                                                        
PC-DEAL is a double-entry ledger program, an application of cash        
accounting.  The object is to keep track of cash or money.  Where is it 
coming from?  Where is it going?  How much is available?  How much is   
owed?                                                                   
                                                                        
The basic mechanisms for doing this are the account and the transaction.
PC-DEAL supports 80 accounts and a maximum of 1,200 transactions.  It   
maintains a journal of transactions entered and a separate ledger and   
transaction journal for each account.                                   
                                                                        
PC-DEAL is designed for double entry booking, that is, the specification
of two account numbers (the TO and FROM accounts), for each transaction.
The transaction is recorded in two account ledgers and a balance is     
maintained between the cash coming in and the cash going out.           
                                                                        
Maintain transaction journals and account ledgers for a period of       
thirteen months -- the twelve month accounting period and the first     
month of the next year.                                                 
                                                                        
Generate and print the following reports:                               
                                                                        
~  Chart of accounts                                                    
                                                                        
~  Cash flow                                                            
                                                                        
~  Monthly transactions journal                                         
                                                                        
~  Trial balance                                                        
                                                                        
~  Balance sheet                                                        
                                                                        
~  Monthly income and expense                                           
                                                                        
~  Monthly activity in asset and liability accounts                     
                                                                        
~  Change in net asset value                                            
                                                                        
~  Budget comparison                                                    
                                                                        
~  Budget projection                                                    
                                                                        
~  Annual income and expense                                            
                                                                        
~  Annual asset and liability account activity.                         
                                                                        
PC-DEAL is fully menu driven and intuitive to operate.                  
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## GUIDE1.DOC

{% raw %}
```
   *************************************************************
   * Individual users are granted a license to use PC-DEAL     *
   * for an evaluation period not to exceed sixty days.  After *
   * evaluation the payment of a registration fee is required  *
   * if the program is adopted for use.                        *
   *************************************************************






                                     tm
                        P C - D E A L
                 Double Entry Accounts Ledger
                          Version 2.4




                    User Supported Software

                             from

                K I N D R E D  S P I R I T S

                       RFD 2, Box 291
                   Waldoboro, Maine  04572




       Member, Association of Shareware Professionals
    




 **************************************************************
 *                                                            *
 * PC-DEAL is distributed as is with no warranty of any kind, *
 * expressed or implied.  The entire risk as to the quality   *
 * and performance of this software is with the user. In no   *
 * event will KINDRED SPIRITS be liable for any damages,      *
 * including lost profits, lost savings, or other incidental  *
 * or consequential damages arising out of the use or         *
 * inability to use these programs, even if KINDRED SPIRITS   *
 * has been advised of the possibility of such damages, or    *
 * for any claim by any other party.                          *
 *                                                            *
 **************************************************************
 (C)Copyright Kindred Spirits, 1984, 1988, 1990.  All rights reserved.
 portions(C)Copyright Microsoft Corp., 1982.   All rights reserved.

~--------------------------------------------- TABLE OF CONTENTS



                           SECTION             page

                GETTING STARTED................. 2
                ACCOUNTING PRINCIPLES........... 3
                PROGRAM OVERVIEW................ 6
                USE OF THE KEYBOARD............  9
                TOGGLE KEYS.................... 10
                <Alt> COMBINATIONS............. 10
                MENU SELECTION................. 11
                INPUT.......................... 11
                OUTPUT......................... 11
                OPENING A LEDGER............... 12
                CREATING A LEDGER.............. 13
                MENU AND FUNCTION KEY OPTIONS.. 14
                MAIN MENU
            *-----ACCOUNTS..................... 14
                    ADD........................ 14
                    REVIEW & EDIT.............. 15
            *-----TRANSACTIONS ................ 20
                    ADD........................ 20
                    REVIEW & EDIT.............. 21
            *-----REPORTS...................... 22
            *-----BAR GRAPHS................... 26
            *-----OPEN/CLOSE/OPEN NEXT YEAR.... 28
            *-----MISCELLANEOUS................ 28
                    LEDGER DATA................ 28
                    COPY CHART OF ACCOUNTS..... 28
                    SYSTEM PARAMETERS.......... 29
                    PURGE TRANSACTIONS......... 30
                    RESET BUDGETS TO ZERO...... 31
                    EXPORT DATA................ 31
            *-----LEDGER CHANGE................ 32
                ERRORS......................... 32
                SWAPPING DISKS................. 33
                SYSTEM FILES................... 33
                RESERVED FILE NAMES............ 34
                USER SUPPORTED SOFTWARE........ 35
                LIMITED PERMISSION TO COPY..... 35
                SYSTEM LIMITATIONS............. 36
                SYSTEM REQUIREMENTS............ 36
                REGISTRATION FORM.............. 37
                PRODUCT COMMENT FORM........... 38

                * denotes a MAIN MENU option.






~----------------------------------------------- GETTING STARTED

First time users of PC-DEAL are encouraged to proceed as follows:

   1) Read the ACCOUNTING PRINCIPLES section if you are unfamiliar
      with the basic concepts.

   2) Read the PROGRAM OVERVIEW section to get a general idea of
      the program's structure and MAIN MENU options.

   3) Read the sections on USE OF THE KEYBOARD
                           TOGGLE KEYS
                           <Alt> COMBINATIONS
                           MENU SELECTION
                           INPUT
                           OUTPUT

      These will acquaint you with the basic features used
      throughout PC-DEAL.

   4) Read the section on OPENING A LEDGER.  Open the
      demonstration ledger: DEMO.

   5) Using the reference sections on menu and function key
      options as a guide work your way through each of the
      options.  The DEMO files may be altered in the process. 
      So long as you have a backup of the DEMO files you can
      feel free to try anything.  This should serve to acquaint
      you with the features and operational details of PC-DEAL.

   6) Read the section on CREATING A LEDGER.  Write out your chart
      of accounts, budgets, opening balances, account starting
      numbers and decide on the year end date before trying to set
      up your ledger.




















~----------------------------------------- ACCOUNTING PRINCIPLES

PC-DEAL is an application of cash accounting.  The objective is
to keep track of cash, or money; where is it coming from?; where
is it going?; how much is available?; how much is owed?

The basic mechanisms for doing this are the account and the
transaction.

A transaction describes an individual transfer of cash.  It
consists of the following information - the date of the
transfer, the amount of cash involved, where the cash went,
where it came from and a check number if payment was in that
form.

An account is used to describe where cash is going to or coming
from.  PC-DEAL allows for four basic types of accounts or
account categories.  They are INCOME, EXPENSE, ASSET and
LIABILITY.

An INCOME account is used to keep track of a source of cash.  
Some examples of income accounts are interest, dividends, sales,
gifts and inheritance.

An EXPENSE account is the opposite of an INCOME account.  It
describes where cash goes, a cash sink in contrast to a cash
source.  Examples are food, clothing, transportation, fuel,
telephone, postage and entertainment.

NET INCOME is the difference between the cash which is received
through INCOME and the cash which is spent on EXPENSEs.

A common way of controlling expenses and tracking income is
through the use of a BUDGET.  The budget process requires an
estimate of the amount to be received from each income source as
well as the anticipated outlay for each expense.  In a balanced
budget the total income expected will equal that budgeted for
all expenses.

A bank account, either savings or checking, is an example of an
ASSET account.  An ASSET represents cash which is available.

A loan is an example of a liability.  A LIABILITY account is
used to keep track of what we owe.  A credit card purchase;
taxes witheld from employees but not yet paid to the government;
and a mortgage are also examples of liabilities.

NET ASSETS are the difference between what we have in reserve
(ASSET) and what we owe (LIABILITY).  Depending on how the books
are kept the NET ASSETS may equal what is known as your NET
WORTH.  NET WORTH is the proverbial "bottom line", it's what you
would have left after you sold everything you owned and paid all
your bills.

At the beginning of the annual accounting period, which usually 
corresponds to the calander year, the ASSET and LIABILITY
accounts are assigned an OPENING BALANCE.

At the start of the year the books are said to be OPENED. 
BALANCE is used to describe the amount of cash associated with
an account, the balance resulting from cash receipts and
expenditures identified with the account.  The term TOTAL is
also used in PC-DEAL with reference to INCOME and EXPENSE
accounts where the initial amount, or opening balance, is zero.

Similarly the books are said to be CLOSED at the end of an
accounting period such as a month or year.  Each account will
then have a CLOSING BALANCE.

One of the first steps in setting up your books will be to
define the accounts which will be maintained in each of the four
categories - INCOME, EXPENSE, ASSET and LIABILITY.  In PC-DEAL
each account will be assigned a number and description such as
200, RENT in the expense category.  Budgets may be assigned for
INCOME and EXPENSE accounts and the OPENING BALANCE is required
for ASSET and LIABILITY accounts.  This information is known as
the CHART OF ACCOUNTS.

Constructing the CHART OF ACCOUNTS will be the most important,
and time-consuming, step in setting up your accounting system. 

In PC-DEAL account numbers are of the form ###.## where #
denotes a digit (0 through 9).  A non-zero decimal portion is
used to identify a SUBACCOUNT.   Suppose we set up an account
for UTILITIES in the EXPENSE category and also want to keep
track of spending for telephone and  electricity.  The expense
accounts might be set up as follows:

           Account              Account
           Number             Description

            300               UTILITIES
            300.1             TELEPHONE
            300.2             ELECTRICITY

Account number 300: UTILITIES is known as the MAIN ACCOUNT. 
300.1 and 300.2 are SUBACCOUNTS.  The balance in the MAIN
ACCOUNT will be the sum of all three accounts.  If you are
interested in the expense for all utiities you need only examine
the MAIN ACCOUNT.  If a single utility such as TELEPHONE is of
interest that account would be examined.

When using subaccounts it is recommended that transactions be
entered to subaccounts only.  An option to prevent posting to
main accounts is available (see System Parameters).  

In defining the CHART OF ACCOUNTS it will be necessary to
specify the starting account number for each category.  That
allows PC-DEAL to identify the type of account when the number
is entered.  The initial or default assignment of starting account
numbers is:
             Category           Starting Number
              INCOME                100
              EXPENSE               400
              ASSET                 800
              LIABILITY             900

This assigment anticipates more accounts in the INCOME and
EXPENSE categories than in those of ASSET and LIABILITY as is
usually the case.

With the CHART OF ACCOUNTS defined the principal function
performed by PC-DEAL is the maintenance of two types of books
for each account, a LEDGER and a JOURNAL OF TRANSACTIONS.

The JOURNAL is a listing in chronological order of the
transactions relating to the account.  As indicated above a
transaction consists of the following information: date,
description, amount($) involved, the number of the account which
identifies where the cash went (the TO account), the account
number which indicates where it came from (the FROM account),
and an optional check number.

The LEDGER is similar to your checking account record book.  It
maintains a chronological listing of transactions relating to
the account in a form which shows the flow of cash and the
balance, or total, after each transaction.  Each entry consists
of the date, description, the amount of cash going to (a TO
entry), or coming from (a FROM entry), the account and the
resultant balance, or total.  

For INCOME and EXPENSE accounts PC-DEAL gives you the option of
displaying the ledger balance in terms of the budget remaining.

The following table indicates what happens to the balance, or
total, in an account when it is specified as the TO or FROM
account.  The plus denotes an increase and the minus a decrease.


        | INCOME | EXPENSE | ASSET | LIABILITY |
  ------------------------------------------------------
     TO |    -   |    +    |   +   |     -     | DEBIT
  ------------------------------------------------------
   FROM |    +   |    -    |   -   |     +     | CREDIT
  ------------------------------------------------------

In this guide the terms TO and FROM are used rather than the
traditional accounting terms DEBIT and CREDIT in the belief that
they reflect more clearly the flow of cash in relation to the
account.  PC-DEAL provides the option of substituting DEBIT for
TO, and CREDIT for FROM, for those who prefer these terms.

~---------------------------------------------- PROGRAM OVERVIEW

A PC-DEAL ledger is defined by specifying the following:

    *  a ledger or organization name, e.g. The XYZ Company
    *  the starting account number for each account category
    *  the closing or year end date
    *  a chart of accounts consisting of the account number,
          description and budget or opening balance
          for each account
    *  a set of transactions consisting of a date,
          description, amount, TO account number,
          FROM account number and optional check number

Account numbers may range from 1.00 to 999.99.  A non-zero
decimal portion denotes a subaccount.  Four categories of
accounts are allowed for: INCOME; EXPENSE; ASSET and LIABILITY. 
When the ledger is set up you are required to specify the
starting account number for each category.  This allows PC-DEAL
to implicitly identify and display the account category or type
during transaction data entry.  

PC-DEAL reserves account number 999.00 for posting of year end
net income.  This account is given a description of ACCUMULATED
NET INCOME and an opening balance of zero when the ledger is
created.  The name and opening balance may be edited to provide
a more appropriate description or bring the ledger into balance.

PC-DEAL maintains a journal of transactions entered and a
separate ledger and transactions journal for each account. 
Transactions are the principal input data.  

PC-DEAL is a cash accounting system which means that it keeps
track of where the cash is coming from and where it ends up.   
The sign convention is such that a positive account total is
interpreted as follows: 
                          INCOME = CASH RECEIVED
                          EXPENSE = CASH PAID OUT
                          ASSET = CASH AVAILABLE 
                          LIABILITY = CASH OWED.

The amount of cash in the transaction is always entered as a
positive number.  The signs, whether a debit or credit is
required, are handled automatically by the program in accord
with the sign convention presented above.

PC-DEAL is designed for double entry bookkeeping, that is, the
specification of two account numbers (the TO and FROM accounts),
for each transaction.  The transaction is thus recorded in two
account ledgers and a balance is maintained between the cash
coming in and that going out.  Single account entries may also
be made.


For those who prefer the traditional accounting terms DEBIT and
CREDIT, PC-DEAL allows for the substitution of DEBIT for TO and
CREDIT for FROM.

PC-DEAL will maintain transaction journals and account ledgers
for a period of thirteen months, the twelve month accounting
period and the first month of the next year.  The next year's
transactions are carried over into next year's ledger at year
end closing.

PC-DEAL will generate a variety of printed reports.  Printed
copies may also be made of selected portions of the journal of
all transactions as well as the ledgers and transaction journals
for individual accounts.

PC-DEAL will generate the following reports: 

                 CHART OF ACCOUNTS
                 CASH FLOW
                 MONTHLY TRANSACTIONS JOURNAL
                 TRIAL bALANCE
                 BALANCE SHEET
                 MONTHLY INCOME AND EXPENSE
                 MONTHLY ACTIVITY IN ASSET AND LIABILITY ACCOUNTS
                 CHANGE IN NET ASSET VALUE
                 BUDGET COMPARISON
                 BUDGET PROJECTION
                 ANNUAL INCOME AND EXPENSE
                 ANNUAL ASSET AND LIABILITY ACTIVITY

The annual reports present the activity in each account for all months
to date.

Bar graphs may be generated for month-to-month income, expense,
net income, cash flow, net worth and individual account
activity.  Budgets may be included where applicable.

If the maximum limit on transactions is to be exceeded during
the accounting period the transactions in earlier months may be
purged, in monthly increments.

PC-DEAL is menu driven, that is you will be presented with a
list of options to choose from.  The main menu options are:

                 ACCOUNTS
                 TRANSACTIONS
                 REPORTS
                 BAR GRAPHS
                 OPEN ( or CLOSE) month
                 MISCELLANEOUS
                 LEDGER CHANGE

ACCOUNTS will allow you to define the initial chart of accounts;
add or delete accounts; restore an inactive account; review and
edit the account data; examine an account ledger; review and
edit the transactions on file which reference a given account;
reconcile an asset or liability account.  Submenus and function
keys are used to gain access to these features through the
ACCOUNTS option.

TRANSACTIONS is used to add, review, edit and delete
transactions.

REPORTS is used to generate reports.  The report output may be
directed to the screen, printer or disk file.  The output to a
disk file creates an ASCII text file permitting these reports to
be modified using most word processors.  The output destination
is controlled with a toggle or switching key.

BAR GRAPHS is used to generate bar graphs for month to month
income, expense, net income, cash flow and individual account
activity.  Like reports, the bar graphs may be output to the
screen, printer, or disk file.

OPEN (or CLOSE) month.  The fifth menu option displayed depends
on the setting of the Add/edit closed months switch under SYSTEM
PARAMETERS.  If set to YES you may edit transactions over a period
of up to twelve months.  The option displayed in this case is OPEN
month and is used to open another month for transaction entry.

Transactions entries may be limited to a period of two months,
the current and next month.  This is done by setting the Add/edit
closed months switch to NO.  In this case the MAIN MENU option will
be CLOSE month.  Selection of this option will close the current
month, make the next month the current one, and open another month.
Transaction entries will no longer be accepted for the closed month.
Closing a month does not automatically eliminate the transactions for
that month.  They are retained on file but may not be edited.

The Add/edit closed months switch setting may be changed at any time.

Transactions for months prior to the current months may be purged
if necessary to make room for added transactions.  PC-DEAL allows
for the transactions to be exported in a variety of formats.

When the year is closed the next year's books may be opened
carrying forward the closing account balances, budgets and
transactions which have been entered for the coming year before
closing the books.  PC-DEAL allows transaction entries to be
made for the first month of the new year before the books are
closed for the current year.

MISCELLANEOUS contains options to edit ledger data and system
parameters; make a copy of the chart of account; purge
transactions; and export account budget or transaction data.

LEDGER CHANGE is used to change from one ledger to another.  
PC-DEAL allows multiple ledgers to be maintained on the same
disk if there is room for them all.

Submenus and function keys are used to provide access to
subordinate options.  Function key options are displayed at the
bottom of the screen in the format F#: OPTION.


~------------------------------------------- USE OF THE KEYBOARD

The notation <key> will be used to represent a key on the
keyboard, e.g. <Enter> means the ENTER key.  Combination keying
will be denoted by a "+" sign.  <key1>+<key2> means hold down
<key1> and press <key2>.

The key notation <Up>, <Down>, <Left> and <Right> will be used
to describe the cursor control keys which are indicated by
corresponding arrows on the keyboard.

<Enter> is the data entry key.  It is synonymous with <Return>.  
When entering a set of data, such as a transaction entry, all
data items are entered at the designated locations on the screen
first.  Then press <Enter> to record the transaction.  <Up> and
<Down> are used to move vertically between data fields, .

<Esc> is the "panic button" in PC-DEAL.  It will cancel data
entry and editing changes, halt printing, take you back to the
previous menu.

PC-DEAL makes use of many of the special keys on the PC keyboard
including the function keys, <F1> to <F10>.  <F1> through <F6>
are used to select options which are displayed on the bottom of
the screen.  In general, their function changes depending on the
menu option selected so make sure you check the display before
pressing them.  <F4> EDIT and <F5> DELETE are used consistently
in accounts and transactions REVIEW & EDIT.

<F7> through <F10> are used as toggles or switching keys.

Key combinations <Alt>+<key> are used to select display options.

<PgUp> and <PgDn> are used in scrolling and editing.  Their
function is more readily appreciated if they are renamed
mentally as <Previous> and <Next>.  When scrolling, the screen
display may be thought of as a page from a ledger or journal,
for example.  <PgUp> serves to take you to the previous page and
<PgDn> to the next.  In editing these keys are used to go from
the current transaction or account being edited to the previous,
or next, for editing without returning to an intermediate display. 

WARNING: Do not attempt to exit PC-DEAL with <Ctrl>+<Break> or
<Ctrl>+<C>.  You must exit the program via the MAIN MENU option
EXIT PC-DEAL or the ledger data may be corrupted.
```
{% endraw %}

## GUIDE2.DOC

{% raw %}
```
~--------------------------------------------------- TOGGLE KEYS

The function keys <F7> through <F10> are used to switch between
options by repeated pressing of the key.  The active toggle keys 
are presented at the bottom of the menu display in the format
<F#>:option.  The current setting is displayed immediately
below.  Repeated pressing of the toggle key will cycle through
the available options.  The following is a listing of toggle
keys, their function, and the options available.

    <F7>:BUDGETS - used to select the bar graph budget option 
                   for INCOME and EXPENSE accounts.
                   options: INCLUDE, EXCLUDE and ONLY.


    <F7>:BROWSE -  used to toggle the on screen browse option
                   ON/OFF.  If OFF, reports more than 80
                   characters wide may not be viewed on screen.

    <F8>:NOTATION - accounting terminology toggle
                   options TO/FROM and DEBIT/CREDIT

    <F9>:SUB-ACCTS - to include subaccounts in reports or
                   displays.
                   options: INCLUDE or EXCLUDE.

    <F10>:OUTPUT - to select the destination for program output.
                   options: SCREEN, PRINTER or a DISK FILE.

<F7> is also used to go directly from the transactions add
screen to accounts add option screen.  <Enter> is used as a
toggle to mark/unmark transactions when reconciling ASSET or
LIABILITY accounts.  See F6:RECONCILE under the ACCOUNTS REVIEW
& EDIT option below.

In all cases the function key notation <Fn> and the function, or
parameter, which it refers to or alters is displayed on screen.


~-------------------------------------------- <Alt> COMBINATIONS

The following keys are used in combination with <Alt>:

     <A> switches to accounts display in transaction entry

     <L> activates left window in accounts display

     <R> activates right window in accounts display

     <T> switches to transactions display in transaction entry




~------------------------------------------------ MENU SELECTION

PC-DEAL is primarily menu driven and a standard format is used. 
The ledger descriptive name and current menu name are displayed
at top center of the screen.  The available options are
displayed at center screen.  Menu selections may be made in
either of two ways: by positioning a light bar with <Up> &
<Down> and pressing <Enter > or by pressing the key corresponding
to the character highlighted in the option.  <Esc> may be used
to exit all but the MAIN MENU.


~-------------------------------------------------------- INPUT

Input to the program is monitored.  When entering numeric data
only the numeric characters 0 to 9, a blank, or minus sign in
the case of negative values will be accepted.  The opening
balance for ASSET and LIABILITY accounts is the only numeric
entry which may be input as a negative value.  For delimited
numeric entry a delimiter, such as a period (.) in a dollars and
cents entry, or a dash (-) in the date will be accepted.  
 
For character data entry such as an account or transaction
description all characters are allowed except the double quote
(").  The double quote is used to copy forward the field
contents from the previous transaction entry.  The data entry
field is delimited by square brackets. <Left> and <Right> may be
used to position the cursor within the data entry field.  <End>
will move the cursor to the end of the data entered and <Home>
will move it to the first character position.  <Del> will delete
the character at the cursor.  <Ins> will toggle the insert mode
with insertion being made at the cursor location and data pushed
to the right.  <Backspace> will delete the character to the left
of the cursor.

<Enter> is used to enter the data and <Esc> to cancel data
entry.  When multiple data fields are being entered, for example
a transaction, <Up> and <Down> control keys are used to move
vertically between fields.  <Tab> and <Shift+Tab> are used to
move horizontally, right and left, between fields (e.g. in
entering monthly budgets).


~-------------------------------------------------------- OUTPUT

When output is being generated it may be routed to the screen or
printer and sometimes a disk file.  The destination for the
output is indicated in the lower right corner of the display. 
<F10> is used to change, or toggle, the output destination.  The
available output options may be seen by repeated pressing of
<F10>.  See TOGGLE KEYS above.  When reports are displayed on
screen using the BROWSE feature a printed copy may be obtained
by pressing <F10>.

<Esc> may be used to cancel, or terminate, output in progress. 
DO NOT terminate printer output by turning the printer off or
taking it off line.  Press <Esc> first.  See ERROR TRAPPING
below for more details.


~---------------------------------------------- OPENING A LEDGER

To use PC-DEAL type DEAL <Enter>.  A logo and copyright notice
will be displayed for five seconds.
  
If not specified in DEALPATH.DAT (see SYSTEM FILES), the 
DRIVE:\PATH and then the ledger file name will be requested.
The ledger files available in the DRIVE:\PATH will be displayed
for reference.

The file name must follow the usual rules for naming files. 
Begin with an alphabetic character; do not include a drive
designation or extension.  For example, to load the
demonstration ledger type DEMO <Enter>. 

If the ledger file is new, the ledger descriptive name (up to 30
characters), year end date (format MM-DD-YY), and account
category starting numbers (format ###) will be requested.  

If the chart of accounts has been copied over from another
ledger only the name and date will be requested.  

If the system date and time have not been set they also will be
requested.

Next, the ledger name, opening and closing dates, current month,
year-to-date totals,  number of accounts and transactions read
will be displayed.

Pressing <space bar> will bring you to the MAIN MENU. 

PC-DEAL consists of four program modules: DEAL.EXE, ENTRY.EXE,
LEDGER.EXE and REPORTS.EXE.  PC-DEAL will select and load the
appropriate module for the option selected from the MAIN MENU. 
That means that the working copy of PC-DEAL must be in the
default drive at all times.  When a MAIN MENU option is selected
which requires a different module there will be a short delay
while the module is loaded.  

With PC-DEAL on a floppy disk you will see the status light on
the default drive come on and probably hear the file being
loaded.  In general, the transfer from one module to another
does not take long.  With a hard disk, especially on an AT, the
delay is hardly noticable.  In any event, wait for the display
to change in response to your menu selection before pressing any
other keys.


DEAL.EXE, is the program access module which displays the logo
and copyright notice, and initializes the common data.  It is
the only program module which may be executed directly.


~--------------------------------------------- CREATING A LEDGER

Step 1: decide on a descriptive name, up to thirty characters
        for your ledger.  This name will be used in report
        headings.  Also choose a filename, up to eight
        characters.

Step 2: make a list of the accounts which you want to keep. 
        That is,  sources of income (INCOME) e.g. employment,
        interest, tips, gambling; the things you spend money
        on (EXPENSE) e.g. food, clothing, housing; where your
        money is (ASSET) e.g. checking and savings accounts;
        what you owe, or will owe (LIABILITY) e.g. credit cards;
        loans etc.

Step 3: place each of the accounts in one of the four account
        categories - INCOME, EXPENSE, ASSET or LIABILITY.

Step 4: select starting numbers for each account category and
        assign account numbers to each of the accounts.  (Note:
        The PC-DEAL default starting account numbers are: INCOME
        = 100, EXPENSE = 400, ASSET = 800 and LIABILITY = 900. 
        Account number 999 is reserved for posting year end net
        income.) 
 
Step 5: decide if you want to use a budget.  If so write down an
        annual budget figure for each INCOME and EXPENSE
        account.  It's a good idea for the sum of the amounts
        budgeted for EXPENSE to equal that for INCOME.  For
        seasonal accounts such as heating break the annual
        budget down into monthly amounts.  If subaccounts are
        used DO NOT enter a budget for the main account. 
        Subaccount budgets will total to the main account.

Step 6: for ASSET and LIABILITY accounts you will need an
        opening balance.  That is how much is in the checking
        account or is owed on a loan at the start of the
        accounting period.  For balanced books your assets and
        liabilities should be equal.  This may be accomplished
        by using account number 999.00 ACCUMULATED NET INCOME to
        bring the ledger into initial balance.

Step 7: decide on a year end date.  PC-DEAL will figure out the
        corresponding opening date.  If you are starting at 
        midyear and want to use the calander year 19XX pick 
        12-31-XX as the year end date.  PC-DEAL will use 
        01-01-XX as the first day and you will have to close 
        the months prior to the month in which you want to 
        start entering transactions.

~----------------------------------- MENU & FUNCTION KEY OPTIONS

Function keys are used to select options or as toggle keys.  For
example, function keys are used to select the option to edit 
account or transaction data, to review an account ledger or the
transactions journal, to delete, to mark for printing and
generate a printout, and reconcile an asset or liability account
statement.

When function key options are selected the sequence of calling
menus and function key options will be displayed on the top
line.  The MAIN MENU option will be on the left and the sequence
may be used to locate the relevent reference section in this
guide.  Repeated pressing of <Esc> will allow you to "back-out"
to the MAIN MENU.

The main menu, submenu and function key options are described in
the following sections.  The section heading format is such that
the menu or function key option is on the right and the calling
or source menu is indicated on the left.  Function key options
are identified by the prefix F#, where # is a number from 1 to
10.


~MAIN MENU -------------------------------------------- ACCOUNTS

A subsidiary menu with the options ADD and REVIEW & EDIT will be
displayed.  <Esc> or <Q> will return you to the main menu.


~ACCOUNTS MENU --------------------------------------------- ADD

Option to add accounts to the chart of accounts.  The following
data must be entered for each account:
 
    ACCOUNT NUMBER: format ###.## where a non-zero decimal
         portion denotes a subaccount.  Subaccounts may not
         be entered until the main account has been defined. 
         Only the digits 0 to 9 or blank and the decimal point
         (.) allowed.

    DESCRIPTION: 30 characters maximum, all characters except
         the double quote (") allowed.  May not be blank.

    ANNUAL BUDGET/OPENING BALANCE: maximum magnitude is
         9999999.99.  The annual budget must be positive and
         will be distributed uniformly over months remaining in
         the year.  Only the digits 0 to 9 or blank and the
         decimal point allowed.

    MONTHLY BUDGETS: applicable to INCOME and EXPENSE accounts
         only.  Must be positive and between 0 and 999999.99. 
         Initially set to a portion of the annual budget.  The
         annual budget is adjusted automatically following a
         change to a monthly budget.  Changes which result in
         negative monthly or annual budgets not allowed.


<Left>, <Right>, <Home>, and <End> will position the cursor and
<Del>, <Ins> and <Backspace> may be used to edit within the data
fields.  <Up> and <Down> are used to move between fields
vertically.  <Tab> and <Shift+Tab> will allow you to move
between horizontal fields.  <Enter> will record the data.  Each
data item is checked as it is entered with highlighted error
messages being displayed on line 25 at the bottom of the screen.

The opening balance or budgets for subaccounts are automatically
added to the main account.  

Account category number ranges and existing account numbers and
descriptions are displayed for reference.

<Esc> will cancel the data entry and return you to the ACCOUNTS
menu.


~ACCOUNTS MENU ----------------------------------- REVIEW & EDIT

An intermediate menu will appear for selection of the account
category to be reviewed.  The account number, description, net
activity for the current and next month, and year to date
balance will be displayed.  The last account in the category
range will be the last on display.

The totals presented for main accounts include those for the
sub-accounts.  Since either the main account number or sub-account
numbers may be specified as the TO or FROM account in
transactions, the main account total may not equal the total of
the associated subaccounts.  The difference is the amount which
has been posted directly to the main account.  Posting to a main
account when sub-accounts exist may be prevented by setting the
MAIN ACCOUNT POSTING option to NO.  See MISCELLANEOUS
MENU>SYSTEM PARAMETERS.

A pointing arrow is initially placed next to the uppermost
account.  The pointer may be repositioned using <Up>, <Down>,
<Home> and <End>.  Six function key options are displayed at the
bottom of the screen: F1:LEDGER, F2:TRANSACTIONS, F3:RESTORE,
F4:EDIT, F5:DELETE, F6:BUDGET (INCOME and EXPENSE accounts) or
F6:RECONCILE (ASSET and LIABILITY accounts).  Each is described
in more detail below.

A tabulation of subtotals for selected accounts may be made on
the fourth line from the bottom of the screen using <+> and <->.  
The display may be scrolled using <PgUp>, <PgDn>, <Up> and <Down>.

<Esc> will return you to the ACCOUNTS menu.

~ACCOUNTS REVIEW & EDIT OPTION ----------------------- F1:LEDGER

The account ledger will be displayed for review or printout
only.  The account number,  description and category are
displayed at the top of the screen.  If the ledger is with
respect to the budget the annual budget will also be displayed. 
The ledger scrolls down onto the screen starting with the latest
entry.  The date, description, TO or FROM entry amount and
resultant total, or account balance, are shown.

The ledgers for main accounts include subaccount transactions. 
Subaccount ledgers consist of only transactions for that
subaccount.

The print related function key options F1:MARK BEGIN, F2:MARK
END, and F3:PRINT are presented on the bottom line.  Pressing
<F3> will generate a printout of the ledger for all transactions
from beginning (Beg) to end (End) markers.  The dates for the
beginning and ending transactions are also displayed.  The
markers may be reset by pointing to the transaction with the
arrow to the left and pressing <F1> or <F2>.  These are toggle
keys.  If the transaction pointed to is already marked the
marker will be reset.  For example, if it is marked Beg,
pressing <F1> will remove the marker and place it at the first
transaction on file, which may take it off the display.  The
date corresponding to the marked transactions is also displayed.

Scrolling of the display and positioning of the pointer is
accomplished as described under REVIEW & EDIT above.

For INCOME and EXPENSE accounts the ledger may be displayed with
reference to the annual budget.  This allows the budget balance
to be displayed rather than the total received or expended. 
When a ledger is displayed with reference to the annual budget
the budget amount will be displyed on line three, top right; the
menu/function key option sequence on line one will indicate
BUDGET LEDGER as the last selection; and the last display column
will be labeled BALANCE.  See F6:BUDGET below for additional
information on the budget referenced ledger option.














~ACCOUNTS REVIEW & EDIT OPTION ----------------- F2:TRANSACTIONS

The transaction data posted to the account will be displayed -
date, description, check number, TO account number, FROM account
number and amount.  The function key options F1:MARK BEGIN,
F2:MARK END, F3:PRINT, F4:EDIT and F5:DELETE  are presented on
the bottom line.  The dates for the transactions marked for
beginning and ending printing are also shown.

Only transactions posted directly to the account are displayed. 
Main account transaction displays do not include subaccount
transactions.

Scrolling of the display and positioning of the pointer is
accomplished as described under REVIEW & EDIT above.  The first
three function key options are described in detail in the
previous section.

The F4:EDIT option will display the transaction data for editing
in the same screen format as transaction data entry described
under the ADD option of the TRANSACTIONS MENU.  <Enter>, <PgUp>
or <PgDn> may be used to record the edited transaction.  <Enter>
will return you to the transactions display.  <PgUp> will cause
the previous transaction to be presented for editing and <PgDn>
the next without returning to the transactions display if that 
transaction has not been closed.  <Esc> will cancel the editing
changes and return you to the transactions display.

Selection of the F5:DELETE option will cause the transaction
description to be masked with a comment to press <Y> to confirm
deletion.  Pressing any other key will cancel the delete.

<Esc> will return you to the accounts display.  The transactions
may also be edited through the  TRANSACTIONS option of the MAIN
MENU (see below).


~ACCOUNTS REVIEW & EDIT OPTION ---------------------- F3:RESTORE

If the account pointed to is inactive it will be restored to
active status and the asterisk removed from the left of the
account number.  The main account must be restored before the
subaccounts.
```
{% endraw %}

## GUIDE3.DOC

{% raw %}
```
~ACCOUNTS REVIEW & EDIT OPTION ------------------------- F4:EDIT

The account data - number, description, annual budget/opening
balance and monthly budgets will be displayed for editing in the
same screen format as used in the ADD option described above. 
Monthly budgets are applicable only to INCOME and EXPENSE
accounts.  The account number may not be edited.  The monthly
opening balance and corresponding activity display at the bottom
of the screen is for reference only.  These may not be edited
and the display is not updated immediately to reflect editing
changes made to the opening balance.  To see these changes press
<Enter> to return to the ACCOUNTS REVIEW & EDIT display and
press <F3> once again.

<Up> and <Down> are used to move vertically between fields. 
Similarly, <Tab> and <Shift>+<Tab> are used to move horizontally
between monthly budget fields.  Changes to the annual budget are
distributed uniformly over the budgets for months not already
closed.  Alterations to monthly budgets are automatically
incorporated in the annual budget.  Editing changes which result
in negative monthly or annual budgets are not allowed.  The
budgets for closed months may be edited.

<Enter>, <PgUp> or <PgDn> may be used to record the edited
account.  <Enter> will return you to the accounts display. 
<PgUp> will cause the previous account to be presented for
editing and <PgDn> the next without returning to the accounts
display.  <Esc> will cancel the editing changes and return you
to the accounts display.

Editing changes to the opening balance or budgets for
subaccounts are automatically made to that of the main account
as well.  After making such changes for subaccounts it is
advisable to review the main account to verify that the changes
have been made as intended.


~ACCOUNTS REVIEW & EDIT OPTION ----------------------- F5:DELETE

The account description will be masked with the request to press
<Y> to confirm deletion.  Pressing any other key will cancel the
delete.  All subaccounts must be deleted before the main account
may be deleted.  Accounts with no transactions entered to date
will be removed from the chart of accounts.  If transactions
have been posted to the account it will be marked as inactive
with an asterisk to the left of the account number.  Inactive
accounts may be reactivated using the RESTORE option.







~ACCOUNTS REVIEW & EDIT OPTION -------------------- F6:RECONCILE

Applicable to asset and liability accounts only.  The account
number, description and account category are displayed at the
top of the screen.  The ledger scrolls down onto the screen
starting with the latest entry.  The date, transaction
description, check number, entry amount and resultant account
balance are shown.  Deposits/charges are positive and
checks/payments negative.

The current balance, unrecorded deposits/charges and
checks/payments, and the corresponding statement balance are
displayed at the bottom of the screen.  The pointing arrow along
with <Enter> as the marking toggle are used to designate
checks/payments and deposits/charges which are on file but not
recorded on the statement.  

Position the arrow using <Up>, <Down>, <Home>, or <End> and mark
the transaction by pressing <Enter>.  A mark will be placed to
the right of the check column to indicate an unrecorded
transaction.  The transaction may be unmarked in a similar
manner.  As transactions are marked the unrecorded check/payment
and deposit/charge sums as well as the resultant statement
balance are updated.

To scroll the display use <PgUp>, <PgDn> for full screen
scrolling or <Up> and <Down> for single line scroll with the
pointer on the top or bottom line.


~----------------------------------------------------- F6:BUDGET

This is more like a selection toggle key than an option key. 
<F6> is used to specify whether the ledger, selected with <F1>,
will be displayed with reference to the annual budget or not.  
Press <F6> and the highlighed option changes from yes to no or
vice versa.

If the "yes" option is chosen the opening balance is set to the
annual budget value and income received, or expenses paid, are
subtracted off.  The balance indicates the budget remaining. 
With a "no" setting the figure dispayed represents the total
amount either received in the case of an INCOME account or
expended for an EXPENSE.

When a ledger is displayed with reference to the annual budget
the budget amount will be displyed on line three, top right; the
menu/function key option sequence on line one will indicate
BUDGET LEDGER as the last selection; and the last display column
will be labeled BALANCE.




~MAIN MENU ---------------------------------------- TRANSACTIONS

A subsidiary menu with the options ADD and REVIEW & EDIT will be
displayed.  <Esc> will return you to the MAIN MENU.


~TRANSACTIONS MENU ----------------------------------------- ADD

This option is used to add transactions to the ledger.  The
transaction record consists of the following:

  DATE - format is MM-DD, the date must be input and must be
         within the current or next month; only the numbers
         0 to 9 or blank and the dash (-) are accepted as entry.

  DESCRIPTION - up to thirty characters, all characters
         except double quotes (") accepted.  This field
         may not be blank.

  AMOUNT - a positive number between 0 and 999999.99, (0 not
         allowed), only the numbers 0 to 9 or blank and a
         decimal point are acceptable entry.

  TO - the account number to which the cash is going.  Format
         is ###.##, only the numbers 0 to 9 or blank and the
         decimal point are accepted as entry.  Either the TO or
         FROM account number may be left blank (i.e. single
         entry) but not both.

  FROM - the account number from which the cash is coming. 
         Format is ###.##, only the numbers 0 to 9 or blank and
         the decimal point are accepted as entry.  Either the TO
         or FROM account number may be left blank (i.e. single
         entry) but not both.

  CHECK - check number.  This may be an optional entry (see
         SYSTEM PARAMETERS).  Only the numbers 0 to 9 or blank
         are accepted as entry.  The check number must be from
         1 to 32767.

The transaction data item being entered is indicated by square
brackets and a reverse video cursor.  The date is carried
forward from the last transaction or set to the calendar date
for the first addition to the ledger.

<Up> and <Down> are used to move from one data item to the next. 
Each item is checked as it is entered with error messages being
displayed on line 25.

When the TO or FROM account numbers are specified the account
description and category will be displayed along with a plus or
minus sign indicating whether the amount specified will be added
to, or subtracted from, the account balance.  If the account is
not found on file, the ACCOUNTS>ADD display will be presented
allowing the new account to be added.  Upon exiting the
ACCOUNTS>ADD display the TRANSACTIONS>ADD display is restored.

When entering delimited numeric data such as the date or amount
only the numeric characters 0 to 9 or blank and the delimiter
will be accepted.

<Left> and <Right> may be used to position the cursor within the
data field.  <Home> will place the cursor at the beginning of
the field and <End> will place it at the end of the data entered
or displayed.  <Del> will delete the character at the cursor
location and <Backspace> the character to the left.  <Ins> will
toggle the insert mode with characters being entered at the
cursor location and pushed to the right.

To enter the transaction press <Enter>.  <Esc> is used to quit
or cancel transaction data entry.

The year to date summaries and ledger balance at mid-screen will
be updated as transactions are entered.


~TRANSACTIONS MENU ------------------------------- REVIEW & EDIT

The transaction data on file will be displayed - date,
description, check number, TO account number, FROM account
number and amount.  The latest transaction will be the last on
display.  The function key options F1:MARK BEGIN, F2:MARK END,
F3:PRINT, F4:EDIT, F5:DELETE and F6:COPY  are presented on the
bottom line.

Pressing <F3> will generate a printout of the ledger for all
transactions from beginning (Beg) to end (End) markers.  The
dates for the transactions marked for beginning and ending
printing are also shown.  The markers may be reset by pointing
to the transaction with the arrow to the left and pressing <F1>
or <F2>.  These are toggle keys.  If the transaction pointed to
is already marked the marker will be reset.  For example, if it
is marked Beg, pressing F1 will remove the marker and place it
at the first transaction on file which may remove it from the
display.
  
The F4:EDIT option will display the transaction data for editing
in the same screen format as transaction data entry described
under the ADD option of the TRANSACTIONS MENU.  <Enter>, <PgUp>
or <PgDn> may be used to record the edited transaction.  <Enter>
will return you to the transactions display.  <PgUp> will cause
the previous transaction to be presented for editing, and <PgDn>
the next, without returning to the transactions display if that 
transaction has not been closed.  <Esc> will cancel the editing
changes and return you to the transactions display.

Selection of the F5:DELETE option will cause the transaction
description to be masked with a request to press <Y> to confirm
deletion.  Pressing any other key will cancel the delete.  The
transactions may also be edited through the ACCOUNTS menu  (see
F2:TRANSACTIONS under the ACCOUNTS REVIEW & EDIT OPTION above).

Pressing F6:COPY will cause the selected transaction to be
presented for editing with the date changed to that of the last
transaction entered.  This feature may be used to copy forward
recurrant transactions from month to month.  <Enter> will record
the new transaction, and <Esc> cancel it, with return to the
transactions display.  The <PgDn> and <PgUp> keys may be used to
record the new transaction and then copy forward the next or
previous transaction.  The key combinations <Ctrl>+<PgDn> and
<Ctrl>+<PgUp> will cause the previous or next transactions to be
copied forward without recording the transaction copy on
display, that is "skipping" it.

A pointing arrow is initially placed next to the uppermost
transaction.  The pointer may be repositioned using <Up>,
<Down>, <Home> and <End>.  The display may be scrolled using
<PgUp>, <PgDn>, <Up> with the pointer on the top line, and
<Down> with it on the bottom.

<Esc> will return you to the TRANSACTIONS menu.


~MAIN MENU --------------------------------------------- REPORTS

The REPORTS menu will be displayed.  Twelve different report
formats may be generated with these first twelve options:

                 * LIST OF ACCOUNTS
                   FLOW OF CASH
                   JOURNAL OF TRANSACTIONS
                   TRIAL BALANCE
                 * BALANCE SHEET
                 * INCOME & EXPENSE/MONTHLY
                 * MONTHLY ASSET & LIABILITY 
                 * NET ASSET VALUE CHANGES
                 * COMPARE BUDGETS
                 * PROJECT BUDGETS
                 * YTD INCOME & EXPENSE 
                 * ANNUAL ASSET & LIABILITY 

The thirteenth option SELECT ACCOUNTS may be used to mark the
accounts which are to be included in the reports denoted by an
asterisk(*) above.  When this option is selected all accounts
will be listed for marking.  The function keys <F1> through <F4>
are used for marking/unmarking accounts which are to be
reported.   

A pointing arrow appears to the left of the list and is
positioned with <Up>, <Down>, <Home> and <End>.  The list may be
scrolled with <PgUp> and <PgDn> or <Up> and <Down> when on the
top or bottom lines.  <Esc> will return you to the REPORTS MENU.

The reports generated by PC-DEAL may be output to the video
monitor, printer or a disk file.  The destination for the output
is selected using <F10> and is displayed in the lower right
corner of the screen.

The screen output includes a BROWSE.  This allows the display of
reports up to 130 characters to be reviewed on screen.  If the
full report will not fit within the available memory, a message
to that effect will be displayed and the report generated in
segments which fit within the memory constraints.  <F10> may be
used to generate a printout of the report being reviewed on
screen.

The <F9>:SUB-ACCTS toggle key may be used to omit or include the
subaccounts in the reports which are generated.  The status of
the toggle is shown at the bottom of the menu display.  Remember
that subaccount totals are incorporated in the main account when
checking totals on reports which include subaccounts.

For output to the printer, or a disk file, the report title will
be displayed for editing.  Make any desired changes then press
<Enter>.  If the title is satisfactory as displayed simply press
<Enter>.  The DRIVE:\PATH and file name will be requested for
disk file output.


~REPORTS MENU --------------------------------- LIST OF ACCOUNTS

The account number, description and annual budget (INCOME &
EXPENSE) or opening balance (ASSET & LIABILITY) are listed.  The
accounts are listed in numerical order for each category.  The
option is available to generate a chart for all categories or a
single category.


~REPORTS MENU-------------------------------------- FLOW OF CASH

Total income, total expense, net income and cash flow are output
for each month and the year to date.  The cash flow is defined
as the net change in asset value (asset activity).


~REPORTS MENU -------------------------- JOURNAL OF TRANSACTIONS

Detailed record of transactions for a given month and selected
account categories.  General three line format for each
transaction.  Line 1 consists of date, transaction description
and check number.  Line 2 gives TO (DEBIT) account description
and number with amount in the TO (DEBIT) column.  Line 3 gives
FROM (CREDIT) account description and number with amount in the
FROM (CREDIT) column.


~REPORTS MENU ------------------------------------ TRIAL BALANCE

Listing of beginning, current and ending balance for all
accounts in the TO (DEBIT) or FROM (CREDIT) columns depending on
account category.  Column totals confirm balance or indicate
degree of imbalance if TO and FROM totals not equal.


~REPORTS MENU ------------------------------------ BALANCE SHEET

Variant of the ASSET & LIABILITY report (see below) for a
selected month through the current month.  Presents ASSET and
LIABILITY account balances and net income to confirm that:
Assets = Liability + Net Income when the Assets and Liabilities
are in balance at the beginning of the year.


~REPORTS MENU ------------------------- INCOME & EXPENSE/MONTHLY

The account number, account description, opening balance,
monthly activity, and closing balance for a selected month, are
output for each of the accounts in the INCOME  and EXPENSE
categories.  Sums for each category and net income are also
output.



~REPORTS MENU ------------------------ MONTHLY ASSET & LIABILITY

The account number, account description, opening balance,
monthly activity, and closing balance for a selected month, are
output for each of the accounts in the ASSET and LIABILITY
categories.  Sums for each category and net assets are also
output.


~REPORTS MENU -------------------------- NET ASSET VALUE CHANGES

The account number, account description, year opening balance,
current balance and change (current less year open) are output
for each of the accounts in the ASSET and LIABILITY categories. 
Sums for each category are also output as well as net assets.


~REPORTS MENU ---------------------------------- COMPARE BUDGETS

The account number, account description, budget, year to date
activity and the difference between the budgeted amount and the
year to date figure are output for each of the accounts in the
INCOME  and EXPENSE categories.  Sums for each category and net
income are also output.



~REPORTS MENU ---------------------------------- PROJECT BUDGETS

The account number, account description, budget amount, a linear
projection of the annual activity anticipated based on year to
date activity, and the difference between budgeted and projected
amounts is output for each of the accounts in the INCOME and
EXPENSE categories.  

Two budget projection methods are used.  If the budget to date
is greater than zero the projected value will be in the same
proportion to the annual budget as year to date activity is to
the budget to date that is:
                                    
                                           YEAR TO DATE
     PROJECTED ACTIVITY = ANNUAL BUDGET * ----------------
                                          BUDGET TO DATE

When the budget to date is zero the projected activity is set
equal to the annual budget plus the amount projected at current
rates.  The current rate is defined as the average rate of
income (or expense) for the account through the current month. 
The formula used is:

                                                      12
  PROJECTED ACTIVITY = ANNUAL BUDGET + Y-T-D * ---------------
                                                CURRENT MONTH

Sums for each category and net income are also output.


~REPORTS MENU ----------------------------- YTD INCOME & EXPENSE

The account number, account description, monthly activity and
year to date activity are output for each of the accounts in the
INCOME and EXPENSE categories.  Sums for each category and net
income are also output.  Figures are rounded to the nearest
dollar in this report.


~REPORTS MENU ---------------- ANNUAL ASSET & LIABILITY ACTIVITY

The account number, account description, monthly activity and
year to date activity are output for each of the accounts in the
ASSET and LIABILITY categories.  Sums for each category and net
assets are also output.  Figures are rounded to the nearest
dollar in this report.








~MAIN MENU ------------------------------------------ BAR GRAPHS

The BAR GRAPHS menu will be displayed.  With the exception of
accounts within a chosen category, bar graphs may be output to
the screen, printer or a disk file.  The bar graph of year to
date activity and/or budget, where applicable, for accounts
within a given category may be generated on the screen only.

A sample bar graph is shown below.

<F7>:BUDGETS is used to toggle or select whether the budgets are
to be included, excluded or be the only quantity plotted.

Graphs from which budgets are excluded are plotted through the
current month only.

The scale may be different for each graph since the minimum and
maximum values are used to define full scale.  The bars are
created in increments of one character.  The purpose of the
graphs is primarily to communicate the qualitative relationship 
of several quantities.  The half scale value will be indicated
and the actual value may only be estimated from the plot to
within plus or minus the value associated with one-half 
character space.

SAMPLE BAR GRAPH:
                             CASH FLOW
                                 0                   ACTUAL
           **********************|              JAN     351-
                                 |*********     FEB     146 
    *****************************|              MAR     462-
                                 |*******       APR     109 
                                 0
             * ACTUAL  +/-     $8


The characters which are used to form the bar graphs may be
selected with SETUP.  See the SYSTEM PARAMETERS section below.


~BAR GRAPHS MENU ---------------------------------------- INCOME

Generates a bar graph of total monthly income and/or total
budgeted income.  


~BAR GRAPHS MENU --------------------------------------- EXPENSE

Generates a bar graph of total monthly expense and/or total
budgeted expense.  




~BAR GRAPHS MENU ------------------------------------ NET INCOME

Generates a bar graph of total monthly net income and/or total
budgeted net income.  


~BAR GRAPHS MENU ------------------------------------- CASH FLOW 

Generates a bar graph of monthly cash flow.  


~BAR GRAPHS MENU ------------------------------------- NET WORTH 

Generates a bar graph of monthly net worth (assets less
liabilities).  


~BAR GRAPHS MENU ---------------------------- ACCOUNT CATAGORIES

A subsidiary menu will be presented for selecting the account
category.  The year to date totals and/or annual budget for
INCOME and EXPENSE accounts and the current balance for ASSET
and LIABILITY accounts will be plotted on the screen for the
category chosen.

A pointing arrow appears to the left and the account number,
description, year to date amount, budget if applicable and
percentages are displayed at the bottom of the screen for the
pointer location.  The percentages are given in terms of the
total amount greater than or less than zero.  That is, if the
amount is positive, the percentage is relative to the sum of all
amounts in the category which are positive.  Similarly, if the
amount is negative, the percentage is relative to the sum of all
amounts in the category which are negative.  Usually all amounts
will be positive.

The pointing arrow may be positioned using <Up>, <Down>, <Home>
and <End>.


~BAR GRAPHS MENU -------------------------------------- ACCOUNTS

A list of account numbers and descriptions will be displayed for
selecting the bar graph.  The pointer to the left is positioned
using <Up>, <Down>, <Home>, and <End>.  The list may be scrolled
using <PgUp>, <PgDn>  and <Up> or <Down> when on the top or
bottom lines.  <Enter> is used to request the bar graph for the
account pointed to. 

The option toggles <F7>:BUDGETS and <F10>:OUTPUT are active and
may be reset with the indicated keys.

The bar graph will display monthly activity and/or budget for
the account selected.
```
{% endraw %}

## GUIDE4.DOC

{% raw %}
```
~MAIN MENU ------------------------------------------ OPEN month

This option will appear if the Add/edit closed months switch is
set to YES.  Selection will open another month.  Transaction
entry/edit may still be made for up to ten prior months.


~MAIN MENU ----------------------------------------- CLOSE month

This option will appear if the Add/edit closed months switch is
set to NO.  Selection will close the current month.  To avoid
inadvertent closing a second entry is necessary to confirm the
request.  Transactions are accepted for only two months at a
time, the current month and next month.  Closing a month does
not automatically eliminate the transactions for that month. 
They are retained on file but may not be edited, that is they
are closed.  When the twelfth month is closed the ledger is
closed for the year and no additional transaction entries may be
made.


~MAIN MENU -------------------------------------- OPEN NEXT YEAR

When the twelfth month is closed this menu option will appear in
the place of CLOSE MONTH.  The next year's books will be opened
carrying forward the closing account balances, budgets and
transactions which have been entered for the coming year before
closing the books.

The INCOME and EXPENSE account balances will be reset to zero. 
The net income for the year will be posted to 999 ACCUMULATED
NET INCOME to maintain a balanced ledger.


~MISCELLANEOUS MENU -------------------------------- LEDGER DATA

This option is used to edit the ledger data: ledger name,
account category starting numbers and the year end date if no
transactions have been entered.


~MISCELLANEOUS MENU --------------------- COPY CHART OF ACCOUNTS

PC-DEAL will make a copy of the current chart of accounts for
use in a new ledger.  The FILENAME for the new ledger will be
requested and the transaction and account data files will be
created.  A temporary ledger descriptive name of "<copy>" is
assigned.  A new name will be requested when the copy is first
used as will the year end date.  The account numbering and
descriptions are maintained.  Only active accounts are copied,
inactive accounts are ignored.  Account opening balances are set
to zero and budgets may be either carried forward or reset to
zero.  Accounts may be added or deleted as necessary once the
new ledger has been opened.

~MISCELLANEOUS MENU -------------------------- SYSTEM PARAMETERS

PC-DEAL is set up for use with a monochrome monitor and Epson or
IBM printer without graphics.  This option may be used to reset
parameters for other systems.

The parameters which may be set are described below.  The
default settings are indicated in parentheses.

FOREGROUND COLOR CODE (7):  Set to white.  Limited to 0-7.

BACKGROUND COLOR CODE (0):  Set to black.  Limited to 0-7.

PAGE LENGTH (66): Lines per page. Must be greater than 7 and
     greater than or equal to the text length.  Set for 
     sixty-six lines or six lines per inch on eleven inch paper.


TEXT LENGTH (60): Lines of text per page.  Must be greater than
     7 and less than or equal to the page length.  Set to sixty
     lines which corresponds to three line margins at top and
     bottom with a page length of sixty-six.

COMPRESSED TYPE CODE (15): Code for compressed type of 132
     character width.  The annual reports may require between
     80 and 132 character width for printout.  If your printer
     does not have a compressed type but allows for a width of
     132 characters set the code to zero (0).  If your printer
     will not print to a width of 132 characters you will not be
     able to generate annual reports once the 80 character limit
     has been exceeded.

NORMAL TYPE CODE (18): Code for normal type of 80 character
     width.  If the compressed type code is set to zero set
     this code to zero also. 


BAR GRAPH DISPLAY CODE #1 (176): ASCII character code for
     screen display of account and category balances in bar
     graphs.

BAR GRAPH DISPLAY CODE #2 (177): ASCII character code for
     screen display of budgets in bar graphs.

BAR GRAPH PRINTER CODE #1 (223): ASCII character code for
     printing of account and category balances in bar
     graphs.

BAR GRAPH PRINTER CODE #2 (185): ASCII character code for
     printing of budgets in bar graphs.

NOTATION: the TO/FROM or DEBIT/CREDIT terminology may be
     selected using <F1> as a toggle switch.  The notation may
     also be selected from within the program.  This sets the
     opening, or default, value.

PRINTER: type of printer.  Toggling <F2> presents the options:
     PARALLEL, NONE and OTHER.  With the PARALLEL option PC-DEAL
     will check printer status prior to printout.  The NONE
     option will remove the PRINTER from the list of output
     options.  OTHER will surpress the printer status check.  

SOUND: ON or OFF.  Toggle <F3>.  Error messages are accompanied
     by a sound if the ON option is selected.

REQUIRED CHECK #: ON or OFF.  Toggle <F4>.  If ON, pressing
     <Enter> at the FROM entry in TRANSACTIONS>ADD will move the
     entry mask to the CHECK NO field.  If OFF, pressing <Enter>
     will record the transaction without requesting the check
     number.

MAIN ACCOUNT POSTING: YES or NO.  Toggle <F5>.  If YES,
     posting will be allowed to a main account whether or
     not subaccounts exist.  If NO, posting is permitted to
     subaccounts only when they are present.

REPORT BROWSE ON SCREEN: YES or NO.  Toggle <F6>.  If YES, the
     complete report will be prepared and displayed in the
     BROWSE mode.  If NO, the report will be displayed on screen
     as it is prepared, pausing at each full screen.

ADD/EDIT CLOSED MONTHS: YES or NO.  Toggle <F7>.  If YES, 
     transactions may be added or edited in up to ten prior
     months.  If NO, entries may be made to only two months.

All codes must be between 0 and 255 inclusive.


~MISCELLANEOUS MENU ------------------------- PURGE TRANSACTIONS

Transactions for closed months may be erased if necessary to
make room for added transactions.  PC-DEAL allows for the erased
transactions to be recorded for future reference as a printed
copy, or a disk file.  

A submenu will be presented which allows the month through which
transactions are to be erased to be selected.  That is, if the
first month is January and March is chosen all transactions
dated from January through March will be erased.



~MISCELLANEOUS MENU --------------------- RESET BUDGETS TO ZERO 

In the event that budget data becomes corrupted, this option may
be used to reset all budgets to zero.

~MISCELLANEOUS MENU --------------------------- ACCOUNTS EXPORT 

The account data may be exported in any one of six different
formats:  dBASE II (DBF), dBASE III (DBF), standard (SDF),
continuous (CON), mail merge (MMF), comma delimited (CDF), and
spreadsheet (PRN).  The file extension assigned by PC-DEAL is
indicated in parentheses.  The structure of the account data is
as follows:

field name length  type  decimals
  NUMBER      6      N       2     account number
  CATEGORY    1      N       0     1=income, 2=expense
                                   3=asset, 4=liability
  NAME       30      C       0     account description
  TYPE        2      N       0     1=TO(DEBIT), -1=FROM(CREDIT)
  OPEN       13      N       2     opening account balance
  PERIOD_01  13      N       2     account activity for month 1
     .
     .
     .
  PERIOD_12  13      N       2     account activity for month 12

where N denotes numeric and C, character data.  For the PRN 
format the length of the TYPE field is increased to three.


~MISCELLANEOUS MENU ----------------------------- BUDGETS EXPORT

The formats are the same as given above and the data structure
is similar to that for accounts except that the field name OPEN
is replaced by ANNUAL and contains the annual budget.  The
PERIOD_nn data gives the monthly budgets.  Budgets are only
applicable to account categories 1 (INCOME) and 2 (EXPENSE).


~MISCELLANEOUS MENU ------------------------ TRANSACTIONS EXPORT

The export formats are the same as those indicated for accounts. 
The date range for transactions to be exported may be specified. 
The data structure for exported transactions is as follows:

field name length  type  decimals
 DATE         7      N      4       transaction date, YY.MMDD
 DESCRIPT    30      C              transaction description
 ACCOUNT      6      N      2       account number
 CHECK_NO     5      N      0       check number
 TO          13      N      2       TO (DEBIT) amount
 FROM        13      N      2       FROM (CREDIT) amount

If the DEBIT/CREDIT notation is selected these terms are used in
place of TO/FROM.



~MAIN MENU --------------------------------------- LEDGER CHANGE

The disk drive and ledger file name will be requested.  This is
equivalent to re-running the program.  The only difference is
that the copyright notice and PC-DEAL logo will not appear.


~-------------------------------------------------------- ERRORS

PC-DEAL will trap most errors and display a highlighted error
message on line 25 at the bottom of the screen.  Most of the
error messages relate to limitations on data entry and are self
explanatory.

Certain hardware related errors will be trapped.  If the program
is capable of recovering from the error you will be given an
opportunity to take the necessary corrective action before
continuing.   For example, if you neglected to close the disk
drive tab do so before making another keyboard entry.  PC-DEAL
may return to the menu from which the option in which the error
occurred was selected.  In that case, repeat the selection
process once the cause of the error has been dealt with. 

Printer errors which result from turning the printer off or
taking it off line while printing is in progress may result in
error detection at DOS level.  This will terminate the program
returning you to the DOS prompt and should be avoided.  Printing
should be halted first by pressing <Esc>, then turn the printer
off or take it off line.

A DISK FULL error will cause the program to initiate
termination.  This will usually occur during entry of added
accounts or transactions.  In terminating an attempt will be
made to update the account and transaction index files if
necessary.  That will usually result in a second DISK FULL error
and you will be requested to change the disk.  The replacement
disk must have room for the index files.  After the index files
are written, and before the new disk is used, the following
files must be copied over from the full disk: filename.GL,
filename.ACD, filename.TRD, filename.BUG where "filename" is the
name of the ledger file you were working on at the time of the
DISK FULL error.   The easiest way to do this is with the DOS
COPY command. Consult your DOS manual for details.

Following a DISK FULL error it is advisable to thorougly review
the ledger to insure that no data has been lost.  If there is
any doubt use your backup disk and re-enter data after making
the necessary adjustments to insure that the DISK FULL error
will not be encountered again.

It is possible to avoid DISK FULL errors by assuring that
adequate space is available on the data diskette to store the
accounts and/or transactions which are added.  A reasonable
estimate of the disk file storage requirements may be obtained
as follows:

   bytes of storage required  = 1000 + 300 x no. accounts
                                  + 80 x no. transactions

The DOS CHKDSK function may be used to determine the space
available on the disk.
If PC-DEAL is incapable of recovering from an error the
following message will appear:

  BASIC error number ## on line number #### in module ???????
  Error description: ?????????????????

Record the error number, description, and line number.  Note the
circumstances under which the error occured.  When you press a
key the program will be terminated.  Use the Product Comment
Form at the end of this manual, or the one in the READ.ME file,
to report serious errors to KINDRED SPIRITS.


~------------------------------------------------ SWAPPING DISKS

The disk containing the PC-DEAL program files must remain in the
default drive at all times.  The data disk, in a two-drive
system, may be changed at the time the disk drive is requested
at start-up or following the selection of the CHANGE LEDGER
option.  The data disk should be changed while the disk drive
request is displayed and prior to pressing <Enter>.


~-------------------------------------------------- SYSTEM FILES

There are four program files - DEAL.EXE, ENTRY.EXE, LEDGER.EXE
and REPORTS.EXE.  DEAL.EXE is the access module.  PC-DEAL is
invoked, or accessed, by typing DEAL <Enter> at the DOS prompt. 
DEAL.EXE will display the logo and copyright notice, define
common data and pass contol to ENTRY.EXE.

PC-DEAL creates and maintains up to six data files for each
ledger.  The FILENAME is specified by the user and extensions
.GL, .ACD, .ACI ,.BUG, .TRD, and .TRI are used to distinguish
them.

GUIDE.EXE is the program which is used to review and/or printout
the PC-DEAL Users Guide.  The data file GUIDE.DAT is necessary
for the proper execution of the GUIDE.EXE program.  The text of
the guide is stored in the ASCII text files GUIDE?.DOC where ?
denotes a digit from 0 to 5.

BASRUN.EXE is the Microsoft BASIC Compiler's runtime module.  It
is required to run any of the executable files (.EXE).  If, for
example, you copy the guide program, data file and text files to
another disk be sure and copy the BASRUN.EXE file as well.

PC-DEAL uses the file DEAL.DAT to store the parameters for your
system as entered through SETUP.  If the working PC-DEAL disk 
does not contain DEAL.DAT the EDIT SYSTEM PARAMETERS screen will
appear.

The file DEALPATH.DAT may be created to set the default path and
ledger.  For example, if the path to the ledger is C:\BOOKS and
the ledger name is LEDGER, the COPY CON: command or EDLIN may be
used to create a file containing two lines as follows

              C:\BOOKS
              LEDGER

At start-up PC-DEAL will look for DEALPATH.DAT.  If found the
path will be read and set then the ledger will be selected if
specified.  The path may be specified without the ledger but the
ledger may not be specified without a path.

When the destination for output from PC-DEAL is specified as a
disk file, an ASCII text file with the extension TXT will be
created by PC-DEAL.  The text files are intended to be used with
a wordprocessor allowing customized reports to be created.


~------------------------------------------- RESERVED FILE NAMES

  GUIDE.EXE    REPORTS.EXE    DEALPATH.DAT  *.ACI   *.TRD 
  DEAL.EXE     CONVERT.EXE    ERRORMSG.DAT  *.BUG   *.TRI
  ENTRY.EXE    DEAL.DAT       GUIDE#.DOC    *.GL
  LEDGER.EXE   GUIDE.DAT      *.ACD         *.TRD

where * denotes a user defined ledger filename, and # a digit
from 0 to 9.

Text files created by PC-DEAL are given the extension TXT.  The
extensions DBF, SDF, CON, MMF, CDF and PRN are used for exported
data files.

















~--------------------------------------- USER SUPPORTED SOFTWARE

User supported software, also known as shareware, is a method of
distributing software based on the following principles:

    1. The value and utility of software is best assessed
       by users on their own system.

    2. The creation of personal computer software can and
       should be supported by the user community.

    3. The copying of programs should be encouraged rather
       than restricted.

In general the software is copyrighted, as is PC-DEAL, but it
may be copied by individuals subject to certain restrictions. 
The restrictions pertaining to PC-DEAL are cited in the
following section.  This provides the opportunity for users to
evaluate the software in their own chosen environment.  If the
software is found to be of value, and placed in use, a
registration fee is required.  These provide for the support,
maintenance and continued development of the software.

Free distribution of software for end user evalation eliminates
costly advertising and copy protection schemes.  Users obtain
quality software at greatly reduced cost.  They can try it out
before buying, at their own pace, and in the comfort of their
own home or office.  The better programs will survive on their
merits of quality and utility.

The registration fee for users adopting PC-DEAL is $40 payable
to:

                  KINDRED SPIRITS
                  RFD 2, Box 291
                  Waldoboro, Maine 04572


~-------------------------------------LIMITED PERMISSION TO COPY

KINDRED SPIRITS reserves the exclusive right to distribute 
PC-DEAL, or any part thereof, for profit.

Individuals are granted permission to copy the PC-DEAL programs
and documentation for their own use, or to share it with others,
so long as no price or other consideration is charged.

Individual users are granted a license to use the shareware
version of PC-DEAL for an evaluation period not to exceed sixty
days.  After evaluation the payment of a registration fee is
required if the program is adopted for use.

Non-profit Computer Clubs and electronic Bulletin Board Services
may copy the shareware version of PC-DEAL and share it with their
members subject to the following conditions:

  1. No price or other consideration is charged beyond a
     production & distribution cost (diskette, copying,
     handling and shipping) which is not to exceed $6

  2. Club members are informed of the Shareware method of
     software distribution and are encouraged to support it.

  3. The programs and documentation are not modified in
     any way and are distributed together.

Qualifying organizations distributing PC-DEAL are urged to
notify KINDRED SPIRITS in order to be informed of updates and
new releases.  

For profit distributors of shareware are required to obtain the
written permission of KINDRED SPIRITS to distribute PC-DEAL
subject to the above conditions.


~-------------------------------------------- SYSTEM LIMITATIONS

     Accounts..........................   300
     Transactions...................... 1,200 on file
     Main account numbering ...........   3 digits
     Subaccount numbering .............   2 digits
     Maximum transaction amount ....... $999999.99
     Maximum amount output............. $9999999.99
     Check numbering .................. 1 to 32767
     Budgeting ........................ monthly
     Accounting period ................ 12 months
     Ledger name, account and
         transaction descriptions ..... 30 characters

PC-DEAL allows for purging of closed transactions which permits
the entry of up to 14,400 transactions per year.


~------------------------------------------- SYSTEM REQUIREMENTS

IBM PC/XT/AT, PS/2, or compatible; 256 KB of RAM; two 5.25", 
one 3.5" diskette drive(s), or a hard disk; MS-DOS 2.1 or above.











~------------------- PC-DEAL REGISTRATION FORM -----------------


The development and maintenance of PC-DEAL is supported through
user registration fees.

To register, complete the following and return with your
registration fee of $40 to:

               KINDRED SPIRITS
               RFD 2, Box 291
               Waldoboro, Maine  04572
     
Registered users receive a copy of the latest release, and notice
of all future updates and upgrades.
     
Thank you for your support.
     
     
Version:  2.4              Obtained from: ______________________
     
Name: _________________________________________  Date: _________
     
Address: _______________________________________________________
     
City: ____________________________  State: ______  Zip: ________
     
     
COMMENTS:_______________________________________________________
     
    
________________________________________________________________
     
    
________________________________________________________________
     
    
________________________________________________________________
     
    
________________________________________________________________
     
    
________________________________________________________________
     
    
________________________________________________________________
     
    
________________________________________________________________
     
     
________________________________________________________________

~----------------------------------------- PRODUCT COMMENT FORM 

We would appreciate knowing of any problems which you might
encounter with PC-DEAL as well as your suggestions for
improvements or enhancements.  Please use the form below for
this purpose.  Thank You. 

                    PRODUCT COMMENT FORM 

Software product: _____________________________  Version:  2.4

Name: _________________________________________  Date: _________

Address: _______________________________________________________

City: ____________________________  State: ______  Zip: ________

Please describe in detail the problem encountered or your
suggestions for improvement:

________________________________________________________________

________________________________________________________________

________________________________________________________________

________________________________________________________________

________________________________________________________________

________________________________________________________________

________________________________________________________________

________________________________________________________________

________________________________________________________________

________________________________________________________________

________________________________________________________________

________________________________________________________________

________________________________________________________________

________________________________________________________________

________________________________________________________________

________________________________________________________________
Return to: KINDRED SPIRITS / RFD 2 Box 291 / Waldoboro, ME 04572
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1870

     Volume in drive A has no label
     Directory of A:\

    BASRUN   EXE     21376   4-24-84  12:00p
    DEAL     DAT       128   6-15-90  11:15a
    DEAL     EXE     14080   5-24-90  11:42a
    DEMO     ACD      6400  11-04-88  11:28a
    DEMO     ACI       384   6-15-90  11:01a
    DEMO     BUG      2816  10-14-88  10:41a
    DEMO     GL        256   6-15-90  11:03a
    DEMO     TRD      4736   6-15-90  11:01a
    DEMO     TRI      1664   6-15-90  11:01a
    ENTRY    EXE     57728   5-24-90  10:15a
    ERRORMSG DAT       128   6-06-90   9:33a
    GUIDE    DAT       150   5-24-90  10:22a
    GUIDE    EXE     15232   4-29-90   1:29p
    GUIDE1   DOC     22486   5-31-90  11:55a
    GUIDE2   DOC     18364   5-23-90  11:41a
    GUIDE3   DOC     22474   5-23-90  12:12p
    GUIDE4   DOC     22751   5-31-90  11:55a
    LEDGER   EXE     60416   6-06-90   9:31a
    MAKE     BAK        62   6-15-90  11:10a
    READ_ME            689   5-25-90  10:37a
    REGISTER          1443   5-25-90  10:32a
    REPORTS  EXE     61440   5-24-90  10:18a
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       575   1-01-80   2:03a
    FILE1870 TXT      4515   7-13-90  11:26a
           25 file(s)     340331 bytes
                           10240 bytes free
