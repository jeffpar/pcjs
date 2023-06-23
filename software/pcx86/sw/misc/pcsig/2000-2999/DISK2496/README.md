---
layout: page
title: "PC-SIG Diskette Library (Disk #2496)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2496/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2496"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## FILE2496.TXT

{% raw %}
```
Disk No: 2496                                                           
Disk Title: QUE Accounts Receivable                                     
PC-SIG Version: S1                                                      
                                                                        
Program Title: QUE Accounts Receivable                                  
Author Version: 1.1                                                     
Author Registration: $45.00                                             
Special Requirements: 640K RAM and two floppy drives or a hard drive, an
                                                                        
QUE ACCOUNTING ACCOUNTS RECEIVABLE (QUE A/R) integrates with the QUE    
General Ledger or works alone.  Like the QUE G/L it is menu driven,     
includes context sensitive help screens, and does take some accounting  
knowledge to operate.  QUE A/R supports multiple companies and is a     
serious financial tool.  Some of its features include:                  
                                                                        
~ Credit limits per customer and default credit terms                   
                                                                        
~ Automated dunning messages                                            
                                                                        
~ Invoices with user defined formats (Bill To:, Ship To:, etc)          
                                                                        
~ Unlimited number of distributions per invoice                         
                                                                        
~ Tracking of sales by salesperson and product with reports             
                                                                        
~ Customer statements                                                   
                                                                        
~ Aging (detail and summary) for any date                               
                                                                        
~ Uses dBase compatible files.                                          
                                                                        
The extensive report writer and query systems makes any information     
easily accessible.  QUE A/R integrates with the other QUE accounting    
modules and is a great way to get control of your receivables.          
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989-1991 PC-SIG, Inc.                                         
```
{% endraw %}

## INSTALL.TXT

{% raw %}
```
                         QUE ACCOUNTING
                  Accounts Receivable Installation

For the system to function properly, it must be installed on a
hard drive.  The specific requirements are listed below.  Note
some adjustments may be required of DOS configuration files.

HARDWARE

QUE requires : 
  - 640K MEMORY 
  - 1,000,000 BYTES FREE on hard disk * 
  - a floppy drive used for installation 

SOFTWARE 

  - CONFIG.SYS - needs to have FILES=25 and a BUFFERS=16 
  - Must be installed on C or D drive. To install to other 
    drives the knowledgeable person can change the INSTALL bat 
    files. 

The directory structure created during installation is the value
entered at the command: 
 
     eg A:INSTALL QUEAR

       where QUEAR is the name of the directory to be created
 
In case this directory is already used for another application,
no files or programs will be overwritten and no harm should come
to that system.  However removing the other system to a separate
directory, is advised.

PROCEDURE

The system comes with 1 diskette. To install the system insert
the diskette into  drive A and type in 

        C> A:INSTALL QUEAR 
 
To install from another drive(example B), change the INSTALL.BAT
file to read B: in all places where A: is found or type in the
following commands:

        C> MD QUEAR
        C> CD QUEAR
        C> B:PKUNZIP -O B:QUEAR

The documentation may be viewed on line or printed out by typeing
the following command. Note the manual is segregated into several
sections following the Main Menu structure.

        PRINTDOC 

You are now ready to start. Please do the following: 

        C: 
        CD\ 
        C> CD QUEAR
        C> ARMUC

Enter "AAA" for COMPANY and "test" for PASSWORD and then go to
the UT Menu and select the REINDEX option in order to create the
index files. If you don't do this step, the system will not work. 


```
{% endraw %}

## ARMAN.TXT

{% raw %}
```






                                                          
                       ▄▄▄▄ ▄  ▄ ▄▄▄     Version 1.1       
                       █  █ █  █ █▄▄     July  90          
                       █  █ █▄▄█ █▄▄                       
                       ▀▀▀▀▀                               
                       █▄▄▄▄▄▄▄▄▄▄▄█                       

                  <<< QUE ACCOUNTING >>>                  
                     Copyright (c) 1990                    
                     Accounts Receivable                   
                                                          
                              
                                                          
                      OPERATIONS MANUAL
                   

                       Table of Contents 



  CF Customer Files
     Customer Master    
     Display Invoices
     Group Payments
     Customer List

  RM Report Menu      
     Cash Receipts
     Adjustments         (credits, debits, service charges)
     Invoice Register    (Detail,Summary)
     Aging Report        (Detail,Summary)
     Customer Statements (History, Open Invoices)
     Products Sold
     Delinquent and Installments

  EP Period End Process    *

  MT Maintenance Table     
     Shipment Carrier
     Products and Services
     Credit Terms
     Credit Ratings   
     Chart of Accounts    *
     Ship To Addresses
     Bill To Addresses
     Units of Measure
     Invoice Format Setup 
     Source Code Table     *
     AR Setup File

  QR Query and Report Writer   *
     Manual
     Filelist

  UT Utility Menu   
     Backup         *
     Restore        *
     Reindex

  Other Functions   *
     Calculator
     Notepad


* These functions are generic to the QUE Accounting series of
programs and only appear on the AR menu for stand alone
systems. Otherwise they are included as options on the Main
Menu of the integrated QUE Accounting system. 

       Overview


     The Accounts Receivable(AR) program may be used as a
     stand alone system or as a stand alone module integrated
     into the QUE Accounting General Ledger. Like the General
     Ledger(GL), the AR system provides the ability to record
     transactions for a given company and department. However,
     unlike the GL system, only one department is assigned to
     a company. 

     All Companies or One

     Each time you log onto the system, you are required to
     enter the company code. The company activated at this
     time is also the company code recorded on each
     transaction (cash receipt, invoice or adjustment) entered
     unless otherwise changed for the duration of a particular
     function which allows the company to be overridden. The
     corresponding department code is retrieved from the
     company Setup record.

     The following lists those functions which allow override
     of the sign-on company. Regardless of the override, once
     complete, these functions reinstate the signon company.

     Functions Allowing Override

     Report Menu                   
          Cash Receipts            
          Adjustment Report
          Invoice Register
          Product Report
          Delinquent and Installments

     Customer Files
          F8 Payments

     Some functions are considered common to all companies and
     therefore allow no other option than showing 'ALL'
     company records. They include:

     Functions for All Companies Only

     Report Menu                        Customer Files
          Customer Statements                Customer List
          Inventory Listing
          Ageing Report
     Utility Menu
          Backup and Restore
          Reindex
     Maintenance Menu
          (All functions)
     End of Period

     Functions for Signon Company Only

     Customer Files
          F7 Display Invoices
               F3 Cash Receipts
               F4 Adjustments
               F5 Print Invoices
          D  Delete
          A  Add
          E  Edit

     Stand Alone vs Integrated

     The GL PATH field in the AR Setup file along with the
     existance of the GL program, MAINMENU.EXE, in that
     directory determines whether or not the system is to be
     used as stand alone or integrated.

     If integrated, the End of Period function is disabled on
     the main menu as well as the GL Chart of Accounts
     function on the MT maintenance menu. Other changes
     include the use of the General Ledger Chart of Accounts
     and Source Code tables in the validation of AR entries.

     If the GL PATH field is left blank in the company AR
     setup record the system will be treated as a stand alone
     program activating the End of Period process and
     substituting the AR Source Code and Chart of Account
     tables. The Chart of Accounts function on the Maintenance
     Menu will be activated for data entry.

     Company records may be set up as either stand alone or
     integrated regardless of the values placed in the setup
     records of other companies in the system.
           
     MAIN MENU 
           


                                                              
   19:45:10          Accounts Receivable          12/23/90   
   Company-> ABC           Main Menu              Period: 7  
                                                              
   F1 Help      ESC Exit         F6 Calculator   F10 Window  
                                                              
                    QUIT EXIT from System                     
                                                              
                    CF. Customer Files                        
                    RM. Report Menu                           
                    PE. End of Period Close       *           
                    MT. Maintenance of Tables                 
                    WR. Query and Report Write    *           
                    UT. Utility Menu                         
                                                              
                                                              


Description

The Main Menu provides the entry point to the various
functions within the system. The menu items are in the
sequence most likely to be used. 

Items are selected by moving the highlight bar to the desired
option and pressing enter or by pressing the leftmost
character of the desired selection.

The top two lines are standard screen headings and indicate
the time and date the function was accessed, the company
logged onto, and the current period.

The third line 0xscribes the global function keys that maybe
used throughout most of the system. 

    F1  Help        Context sensitive help
    ESC Exit        Exit current process
    F6  Calculator  Popup calculator
    F10 Window      Context sensitive lookup table 



* These options only appear on stand alone systems. Otherwise,
they are included in the integrated system as global
functions. 

 CF CUSTOMER FILES   
                 

 Overview

 This function provides the ability to Add, Change, and Delete
master records and invoices. The functions are displayed on
the vertical menu at the bottom of the screen. The activation
keys are highlighted.

 The Add, Edit and Delete options relate to the customer
master record while the function keys are used for other
purposes.

 F5   is used to write-off invoices with immaterial open
      balances.
 F7   is the access path to an individual customer's invoices.
 F8   is used to pay a number of invoices at once for a given
      customer.
 F9   produces a customer master report.

Selection Screen

 The first screen to be presented is the selection screen
which allows you to specify a given subset of customers as
identified by their group field value.  The group field value
is a value stored on each customer master record used to group
or categorize several customers together based on some like
characteristic such as type of products ordered, size, etc..
Usage is entirely controlled by you.


            Enter Group range          start  B1
                                       end    B2

 The Customer Id field is also used to find the master record
for a specific customer. Once into the display screen pressing
any letter other than A,E and D,(which are reserved for other
functions) will bring up the search prompt.


            Enter Id to search for __________


 The first customer with this given id will be highlighted. A
partial selection can be made if the exact value is unknown.
For example, 'AAA' would find the first record following 'AAA'
as if a CUSTID of 'AAA' actually existed and the operator hit
enter to move the highlight to the next record.

  Customer Control Screen





    19:32:20           Time Recorders Inc.         05/23/90
               Accounts Receivable Transactions    Period:9

    F1 Help      ESC Exit        F6 Calculator    F10 Window

    Customer    Company        Name         Phone       Ext
   ┌───────────────────────────────────────────────────────┐
   │BELL     Bell Towers    John Bell    111-222-3333  4444│
   │EEEEEEEE Screams Inc    Jill Shrill  123-help      5555│
   │HARRY    Handsome Harry Joe  Smith   302-123-6666  2222│
   └───────────────────────────────────────────────────────┘

    F5 Writeoff   F7 display invoices   F8 payments  F9 list
    B-Z Find A Add  E Edit  D Delete  <> to move  Esc to exit



1) Add and Edit                                          
                                                        
a) Description


 The only difference between the Add and Edit screens is that
the CUSTID field may not be changed in the Edit mode. All
other fields have the same edits and validations regardless of
the update mode.

 The screen is separated into two distinct sections;

      1) the address and
      2) credit information

 The address portion for the most part is self explanatory.
The first three lines of the address may be used in any
fashion. A company name exceeding the Company field presented
or 'Care of' addresses may be placed in the first address
field.

 Certain values within the credit section may need further
explanation. First of all, the CREDIT RATING and PAYMENT TERMS
fields must preexist in their respective tables before they
may be entered. These tables can be updated through the MT
function off of the Main Menu

 The PAYMENT TERMS field is the default, or usual payment
terms given for this particular customer. As invoices are
added these terms are applied to the invoice automatically;
although they may be overridden when needed. They constitute
such values as:

    2N3    2 percent net 30 days
    COD    Cash on delivery

 The CREDIT RATING field is used to rate customers according
to their payment record. The 4 character field may represent
any combination of letters and numbers desired. For example:

    POOR   Poor payment record    AAA  The best always on time
    GOOD   Good payment record    A2   Good but not the best
    FAIR   Not bad and not good

 The GROUP field may be used to group customers in various
categories such as:

    W,M,S  Weekly, Monthly, Seasonal  frequency of purchases 
    B,M,S  Big,Medium,Small           Size of client  
    EQ,SU  Equipment,Supplies         product type purchased 

  The EXEMPT field tells whether or not the Customer is exempt
from state tax. If so, space is provided for the authorization
number in the TAX ID  field.

    Y  Yes exempt
    N  No not exempt

Although the system does not prohibit taxing an exempt
customer a warning is displayed whenever a tax entry is made
against an exempt status customer. 
 
  The UNAPPLIED amount represents any overpayments made by the
customer. It can be applied to any open balanced invoice by
manually deleting the amount from the Master record and adding
the proper accounting transaction during one of the Payment
processes (F3 and F8).  Until it is applied, the UNAPPLIED
amount does not constitute a cash deposit unless a journal
entry is used to record it through the General Ledger Module
(ET module). The UNAPPLIED amount is automatically updated
during the F8 Payment function when there is a surplus of cash
to be applied.


  The OPEN BAL field is calclated each time the customer's
master record is brought into the Edit mode (E). All invoices
credits, debits, and payments are added together to derive the
customer's open balance.

      
b) Operations (Add/Edit screen)
      
      
   ┌───────────────────────────────────────────────────────┐
   │Customer    Company        Name        Phone      Ext  │
   │                                                       │
   │ BE┌─────────────<< Master Record >>─────────────────┐ │
   │ EE│                                                 │ │
   │ HA│Customer Id:  BELL      Company: Bell Towers     │ │   
   │   │Contact:  John       Bell    Phone: 111-222-3333 │ │
   │   │Address:  Care of John Bell                      │ │
   │   │Address2:  1450 West Chester Pike    Ext:   4444 │ │
   │   │City:     West Chester    State:PA  Zip:44444-444│ │
   │   ├─────────────────────────────────────────────────┤ │
   │   │Credit Rating:  good   Pay terms: ABC  Exempt?:F │ │
   │   │Credit Limit: 10000.00 Group:AA Open Bal:10000.00│ │
   │   │Comments  Tax Id: 888888888888 Unapplied:    50. │ │
   └───│this is the comment lineeeeeeeeeeeeeeeeeeeeeeeee │─┘
       └─────────────────────────────────────────────────┘
          Ctrl-W save edits        Esc exit without saving


Please consult the appendix for information on cursor movement
and keystrokes used to navigate around the screen.


2) Delete

 The delete mode will erase the customer's master record and
all invoices that belong to that customer id. If they exist, A
confirmation message will appear on the screen giving the
option to cancel the delete request.

 In case of an integrated system, all account balances will be
adjusted accordingly in the Trial Balance.



   F5 Write Off



  This option is used to 'write off' miscellaneous balances
still open on the books. A prompt is provided to allow for the
entry of a specific dollar amount for the write-off criteria.


       Enter amount for writeoff   ______


  All invoices that are to be written off are printed on a
report and each is credited with a 'WOF' source code
transaction. The offsetting debit entry is acquired from the
Source Code table.(see MT function in setting up source codes)


     F7 Display Invoices



  This option will display selected invoices for the
highlighted customer. All invoices or only those with open
balances can be shown. A prompt will display when F7 is
selected allowing you to make your choice


       17:19:16        Time Recorders Inc.          07/02/90
                  Accounts Receivable Master        Period:2

        F1 Help    ESC Exit    F6 Calculator     F10 Window

      Customer    Company    Name              Phone     Ext
   ┌────────────────────────────────────────────────────────┐
   │  BELL     Bell Towers John Bell      111-222-3333  4444│
   │  EEEEEEEE Screams Inc Jill Shrill    123-help      5555│
   └┬───────────────────<< BELL     >>───────────────────┬──┘
    │Custid   Invoice Inv Date Due Date   Invoice Amount │
    ├────────────────────────────────────────────────────┤
    │  BELL    BELL2  06/01/90 06/01/90    1000.00       │
    │  BELL    TEST   06/07/90 06/07/90     100.36       │
    └────────────────────────────────────────────────────┘
     F3 cash receipts   F4 adjustments   F5 print invoice

   B-Z Find  A Add   E Edit   D Delete  <> to move   Esc exit




1) Add, Edit

a) description/operations


  The Add function is used to add a new invoice while Edit is
used to modify an existing one and to add new line items. 


    ┌──────────────────<< Invoice >>    Open bal 1000.00──┐
    │                                                     │
    │Cust Id   BELL     Shipto 1    Billto 1  Shipby AAA  │
    │Invoice # TEST1                Amount    1000.00     │
    │Inv Date  05/23/90 Terms  ABC                        │
    │Due Date  01/23/90             Salepers _____        │
    │Order# _________                                     │
    │                                                     │
   ┌┴─────────────────────────────────────────────────────┴┐
   │Product Description     Unit  Qty X  Price   =    Total│
   ├───────────────────────────────────────────────────────┤
   │ 1111 Time clock prin          -8     96.00     -768.00│
   │ CSHP Transportation           -1     32.00      -32.00│
   │ CTAX Sales Tax                -1    200.00     -200.00│
   └───────────────────────────────────────────────────────┘
      Ctrl-W  goto detail records   Esc exit without saving


  When an invoice is selected, the operator is automatically
placed in the top portion of the screen for data entry. In the
case of add all fields are blank except the Cust Id, Inv Date,
Due Date and Terms fields which default to the current
customer, the current date and the normal payment terms as
retrieved from the customer master record, respectively.

  The CTRl W key combination is used to activate the detail
portion of the currently displayed invoice. The ESC option
performs the balancing routine and exits the invoice if the
detail line items are in balance with the invoice header (top
portion of screen).

  In both the Add and Change modes validations are made to:

  1) assure Payment and Shipment Carrier values exist in their
     respective tables
  2) a unique invoice number is used to identify the invoice
  3) product numbers are validated against the Chart of
     Accounts
  4) quantity on hand in the inventory file is sufficient
     for order (optional with inventory enhancement)

Invoice Balancing

  The Amount field which appears on the invoice header must be
the absolute equivalent of all detail line items in order for
the invoice to be saved and posted. The operator has the
option of using the control feature of manually calculating
the total amount before entry of the line items or use the
computer to determine the total.

  Skipping the header amount entry will cause an out of
balance condition when the ESC key is used at the end of line
item entry. In this case the cursor is placed back in the top
portion of the screen and the total of the line items as
calculated and displayed on the left portion of the screen may
be entered to balance the invoice.

Using the Calculator

  The pop-up calculator may be used to calculate taxes, total
line items and determine other fiqures while within the body
of the invoice. The amount calculated and appearing in the
calculator window may be transferred to the price or amount
field on the invoice by pressing the CTRL P combination.

Description field

  The description field appearing on each line item may
contain any text desired. Using the F10 key to select a
product or service code from the Chart of Accounts
automatically pulls in the description from the table.
However, this information may be overwritten or additional
information added. In the latter example, a product
classification of Time Clock may be a generic description but
additonal information such as the model number and
manufacturer may be added at the time of invoicing.


  The entire description field may be deleted with a CTRL T
combination or by pressing F10 again, a new description may be
retrieved from the table. If the product code is changed
without using F10, the original description stays entact.


Debits and Credits

    QUE Accounting has taken the position to use the natural 
polarity of the transaction amounts to properly reflect credit
and debit transactions. These are of course, negatives for
credits and positive values for debits.  Some accountants
prefer to use all positive values to reflect the 'normal'
balance of accounts but we have found this method is sometimes
more confusing in the long run. 


Product vs Sales

    The negative QTY figures in the screen example represent a
depletion in inventory and a increase in the Cost of Goods
Sold, a debit to Accounts Receivable(AR) and a credit to
sales. 

    The first portion of this entry is due to using the
invoice detail line to record inventory reduction. This is
detected by the range of product numbers setup as Inventory in
the ST Setup function. The AR and Sales accounts are pulled
from the Source Code Table.

* This option is only available with the inventory
enhancement.


Horizontal Scrolling

    The cutoff description field in the detail records is only
done for display purposes. In actuality the description field
is 60 characters long and uses a horizontal scrolling feature
that allows a larger field to be accessed in a smaller screen
space.  Moving the cursor to the end of the field will show
how the words scroll off the screen much like an electronic
message board.
 


2) Delete

  A deleted invoice will reverse all transactions associated
with the selected invoice in the current period. Fully
satisfied invoices cannot be deleted.

  In case of billing errors for closed invoices, adjustments
must be made to the customer's account through separate credit
and debit invoice transactions.


3) F3 Cash Receipts
  
  Payment transactions can be applied against a specific
invoice through this selection. When chosen, a transaction
window pops up with the total open balance amount in the
transaction amount field. This value as well as the default
account number for the Debit portion of the transaction can be
modified as long as the amount does not exceed the total
amount outstanding and the account number is a valid entry.

  Pressing the F8 key at this time will display the source
code table in case the default debit account number needs to
be changed.  The default value is retrieved from the first CSR
source code entry in the table. 


4) F4 Adjustments
 
 Similar to F3 Cash Receipts a transaction window pops up
allowing entry of a Credit or Debit transaction while the F8
key allows the selection of account values.

 In case of Credit (CRD) transactions, the amount may not
exceed the open balance of the invoice.

5) F5 Print Invoice

 This option prompts for a specific invoice format to be used
in the printing or displaying of the selected invoice. The
invoice format is stored in the Invoice Format table
accessible through the MT function.

 Invoices may also be printed through the DI option on the
Report Menu (RP).


 F8 Payments


a) Description

  The Payments screen allows distribution of a single cash
payment to several open invoices. The payment itself can be
split into three different segments representing, Tax and
other categories. 

b) Operations 


             ┌─────────────■<< BELL >>──────────────┐
             │                      Code     Amount │
             │Enter account code(s) CTAX    1000.00 │
             │      and amount(s)   CSHP    9200.00 │
             │Enter payment date    05/23/90        │
             ├──────────────────────────────────────┴┐
             │ TEST1           01/23/90    1000.00 √ │
             │ TEST2           02/23/90    1000.00   │
             │ TEST3           03/23/90     956.00   │
             │ TEST4           04/23/90   10000.00   │
             └───────────────────────────────────────┘
                1 Invoice selected for 1000.00
                    9200.00 still remaining

             Press Enter to Toggle invoices to be paid


  Highlight each of the desired invoices and press enter to
mark the invoice for payment. Pressing 'Enter' toggles invoice
selection off and on while reducing or increasing the amount
allocated. The bottom portion of the screen shows the number
of invoices selected, the total dollar amount and the amount
still undistributed.

  Hitting the 'ESC' key completes the selection process and
initiates the creation of the Cash(CSR) records. Each invoice
is processed by comparing the payment totals for each Cash
code(CTAX,CSHP) entered to the distribution lines in each
invoice. If there is a match, a record is created in the
amount of the open balance for that Cash code. The dollars
allocated to the selected invoice are subtracted from the
total payment and  the process continues to the next selected
invoice.

  Partial payments must be made through the F3 Cash receipt
function in the F7 Display Invoices module.

   For example, the transaction to record payment for the
following invoice with three line items, as listed, is to
debit two cash accounts and credit Accounts Receivable.

   Invoice Line Items

    1111  Time Clocks  - 1  100.00  -100.00
    CTAX  Tax          - 1   10.00   -10.00
    CTAX  Tax          - 1   10.00   -10.00

   Transaction recorded.

    Cash 100.00         Note the CTAX record is accumulated.
    Ctax  20.00         The AR credit and Cash entries are     
                        extracted from the Source Code Table.
       AR    120.00     


   The remaining balance is added to the Unapplied amount on
the customer's master rescord and no Cash Receipts is recorded
for this amount until it is applied to an invoice or entered
as a separate journal entry into the system.

   In the integrated system, an account number is used to
record the surplus automatically. It resides in the company AR
Setup record off of the Mainmenu.
 


 F9 Customer List



 The customer list is a hard copy report of the customer
master file. It should be periodically printed and used as a
reference document and backup to the master file residing on
the computer.

 It contains the same information that exists on the screen
and may be printed as often as needed.
 
 
    RP Report Menu  
              


 The Report Menu produces the transaction registers, aging
reports and sales reports by product codes, typical of most
business carrying receivables. The reports may be executed as
often as desired and always include the most updated
information from the transaction files.


Selection Parameters


  The transaction registers may be applied against a given
period or range of periods while the aging report can be shown
in both summary and detailed formats for a given customer or
range of customers. 



                     QUIT Return to Main Menu

                     CR. Cash Receipts
                     AR. Adjustment Report
                     IR. Invoice Register
                     RA. Aging Report
                     ST. Customer Statements
                     PR. Product Report
                     DI. Delinquent and Install










** Besides the reports listed above, the system comes equipped
with a Query and Report Writer function that allows you to
create your own reports selecting the data to appear, the
sequence and the desired range based on values entered for
dates, accounts, customer, etc..

*** An example of each report appears in the Appendix

CR Cash Receipts

  This report will list all cash receipt records(CSR source
code) for the selected period. A subtotal will be produced for
each unique account number used.


                     Period range Start  0
                                   End  13


AR Adjustment Report

  The adjustment report will list all adjustments for the
period range selected. Credits (CRD), Debits (DEB) or Service
Charges (SVC) transactions only may be specified.


                     Period range Start  0
                                    End  13
                 Enter CRD/DEB/SVC or blank  ____


IR Invoice Register

  This report lists all invoices for the selected range. The
Detail option will print a complete transaction list for each
invoice selected.


                     Period range Start  0
                                    End  13
                     Enter "D" for Detail ___
                     Enter Salesman Start _____
                                      End  _____


  The Salesman option is used to find the total sales
attributed to a given salesman(s).  This may be used in 
determining commissions by salesman code.

RA Aging Report

  The Aging report determines the how old an open invoice is
by comparing the invoice duedate to the date entered at the
prompt. By answering 'Y' at the second prompt, all open
invoices will be shown as a separate line item on the report.
Otherwise there will be only one line item per customer with
the total due under each aging category.


             Enter Date for Processing     05/23/90
             Enter 'Y' for Detail Listing    Y



ST Customer Statements

  The customer statements may be produced for all customers,
an individual customer or a range of customers as defined by
their customer ids.


                 Vendor range start   AAAAAAAA
                                end   CZZZZZZZ
                   Include History ?    ___


  The History option will print all transactions for the given
year.


PR Product Report

 The product report will list all transactions within the
ranges selected. Sub-totals will be given for each break in
the account(product) number. 


                     Period range Start  0
                                    End  13
                     Product Range from  0000
                                   to    9999


DI Delinquent and Installments

 This option allows reprint of invoices either past due or
those associated with installment type invoices.

 If any past due invoices have a credit term with service
charges then they will be invoiced for the charge at this time
and it will appear on the newly printed bill.

 Any open invoice that has not yet been printed will be
printed at this time. Duplicate prints will be noted and the
proper Dunning messages will appear as determined in the AR
setup table for the selected company. Past due messages are
determined by the age of the receivable as it falls within the
FRom/To categories.

 The option to pause between invoice prints allows adjustments
for friction feed invoices.

  A specific invoice format must be selected at the onset of
this option. Output can be directed to the screen or the
printer. Any service charges (SVC)  calculated will only be
posted during the Print option.
                                                       
                                                         
 PE END OF PERIOD PROCESSING 
                             



  19:45:43          Accounts Receivable           02/23/90
  Company-> ABC     PE Period Process            Period: 7


                 Do you wish to continue?



Description

  The PE end of period process clears out the current
  transaction files and archives the transactions into
  history files. Once performed the only way to go
  back into this closed period is to restore files from
  diskettes.

  Modifications can be made to past periods if the flag is
  set in the AR Setup file.(see AR Setup for instructions)
  Otherwise, changes can only be made to a closed period only
  if that period is activated by restoring the system files
  from diskette.
  
  Various prompts are displayed as warnings and requests for
  confirmations. 
  

         Archiving transactions...
         Indexing ...
                   
      MT MAINTENANCE MENU  
                   
                                                             


  09:51:48            Accounts Receivable          02/24/90  
  Company-> ABC         Maintenance Menu           Period: 7 
                                                             
  F1 Help      ESC exit         F6 Calculator    F10 Window  
                                                             
                    QUIT return to MAIN MENU                 
                                                             
                     1. Shipment Carrier                     
                     2. Salesperson Table                    
                     3. Inventory File   *             
                     4. Credit Terms                         
                     5. Credit ratings                       
                     6  Shipto Addresses                     
                     7. Billto Addresses                     
                     8. Units of Measure 
                     9. Source Codes
                    IS. Invoice Format Setup
                    AR. AR Setup Table                       
                                                             

Description

The maintenance menu provides the ability to modify and print
the system tables used in validation and in assuring system
integrity. 

Each option on this menu uses the same key strokes for
navigation and updating procedures. Once you're familiar with
these keys in one program the knowledge is immediately usable
for all the other maintenance tables.

The keys perform the following functions:

  Ctrl Home    Beginning of record
  Ctrl End     End of Record
  Ctrl ->      Pan to the right
  Ctrl <-      Pan to the left
  Enter        Open a field for modification
  F7           Find a specific value
  Ctrl-PgDn    Goto Bottom of file
  Ctrl-PgUp    Goto Top of file
  -            Delete current record
  +            Add a record                         
  PgUp         Previous screen
  PgDn         Next screen
 Source Code

   The Source Code table plays an important part in recording
the accounting transactions. With an integrated system, the
Source code table from the GL is used when entering in values
to the Ar system. Make sure the account numbers properly
reflect the debits and credits desired.

 Credit Terms

   The credit terms file has five fields for each term to be
added. The Credit and Description fields are used to identify
the entry. The Credit is the identifier entered on the Invoice
header and Customer master record.

   The Installment, Service Charge and Duration fields are
used in the Delinquent and Install report option. The
Installment field tells whether or not the code is for
installment type invoices. The Service charge is the amount
charged for late invoices. If less than 1.00 it is considered
as a percentage of the open balance. Amounts greater than 1.00
are considered flat charges. The Duration field is the number
of days allowed before the invoice is considered delinquent.
In the case of delinquency, the appropriate dunning message
from the AR Setup table is printed.

   The Message field in the table is used to print a reminder
or a notice on the invoice. In the case of Installment type
invoices, the message is always printed if the MES field is
used in the IS Invoice Format table.

Printing

   Using the WR Report Writer feature these tables can be
easily printed. 



 IS Invoice Setup


   The Invoice Setup program provides the facilities to layout
your invoice(s) format. The table provides for complete design
of an invoice including box drawing and underlineing. It can
also be used to fit the row and column combinations of
preprinted forms.

a) description

   CAUTION Depending on the options used, this function may be 
somewhat confusing. Consequently reading through the following
detailed description is recommended.

   Each unique format is composed of two separate sections, a
header and detail. The header contains the dimensions of the
invoice, special printer codes and your company's name,
address and telephone number to be printed. The detail portion
contains several records responsible for the design of the
invoice body. It determines the print position of pertinent
information such as shipto and billto addresses, the quantity
and prices of the products ordered and also allows input of
characters to print boxes and underline information. The
system comes equipped with a sample invoice layout that
implements these features.

 1)  Print Code

     The print code on the header record is used to format
your printer for printer fonts, spacing, page length and the
like. It handles a combination of three parameters common to
many EPSON type printers. Additional software and /or dip
switching may be needed to get the exact printer mode desired.
 
 2)  Type Field

     The TYPE field in the detail portion controls the
operations done to that entry. The acceptable values include

     T  Text field 
     F  Field from actual invoice
     G  Grand total (invoice amount)
     D  Detail line items

     The Text type entry is used when you desire printing of a
fixed value such as a column heading or a dotted underline.
When encountered the row,and col fields on the record
determine the print position of the text. While all other
fields are disregarded by the computer, the fieldname however
can be used to provide a brief description of the entry so
that it can be easily identified in the detail display screen.

     The Field type entry must contain a valid value from the
valid field list provided. If it does not the function will
abort. Proper spelling as shown is required. The field may
also contain text characters that appear either before or
after the printing of the field. All text entries are
truncated to the right for all spaces.  The position field
controls the print location (before and after) of the text
field relative to the ROW and COL positions.

     The Grand total entry is simply the total dollar value as
calculated from the invoice line items. Like a field, a text
line is provided to highlight the amount field entry. 

     The Detail type entry is the layout of the invoice line
items. It is different from the other types in that the
position of each field on a line is determined by the two
character number appearing after the field delimiter (/).
  
     eg. quantity/10descr/30price/40price*quantity/50

As the example shows, quantity, description, price and total
(price*quantity) are the fields to appear and their positions
are 10, 30,40,and 50 characters from the Col field,
respectively. All entries on file for the chosen invoice will
be printed unless the override code is used (to be discussed).
to defer printing.

2)  Conditional printing

    The override clause of the Field and Detail type entries
is used to conditionally skip the printing of a line depending
upon a value. For instance in the printing of miscellaneous
charges such as TAX or FREIGHT, one might prefer to print
those charges in a different position than that of normal
product lines.

    To do this in a F (Field) type entry, the conditional
identifier, a left bracket ([), is used to identify the start
of a condition. For example:

         quantity/03[val('1')]10
           |      |   |        |
           |      |   |        override column
           |      |   conversion code (* see list)
           |      normal print column
           field name from list

In this entry, the quantity field is printed at column 3
unless the quantity is equal to a 1, in which case it is
skipped until all other detail items are processed. All
override records are printed using the column values following
the condition(in brackets), in this case, at column 10.

    All fields within the detail line may contain a
conditional value. However, they are mutually exclusive.
Meaning that the first value encountered with a valid match
constitutes a deferred printing status.

     Printing of fields for override records with no
conditions is achieved by leaving the area between the
brackets, blank. For example:

          quantity/03[]10substr(descr,1,10)/15['Sales tax']30
                      |
                        note, no condition

The condition is removed from the quantity field and a new one
is added to the descr field. When a record is encountered with
a description (descr) field equal to 'Sales Tax' the record is
placed in the override area. When printed, the quantity field
will be printed at 10 columns pass the col value while the
descr will be printed 30 pass the value of col.

     Another feature added to this example is the use of a
substring clause on the field entry. This substring clause
enables us to print only the first 10 characters in the descr
field and to use those 10 characters as our base for
comparison to the condition ('Sales Tax'). Allowable clauses
and conversion codes are defined later.


3)  Reserved field entries

     There are four reserved words in the detail section:

          NAME
          SHIPTO
          BILLTO
          MES

     The NAME field identifies where the company name, address
and phone number are to appear on the invoice. When entered,
four records are created, one for each line item in the
address. If a line is to be deleted, it can be done so after
the initial creation. Only changes to the NAME field will
create the additional records. (NAME2,NAME23,NAME234).

     The SHIPTO and BILLTO words work accordingly. But at the
time of invoice printing the SEQ number on the invoice is used
to pull the appropriate address from the SHIPTO or BILLTO
file. If it is not present in these files,  the address
information on the customer's master will be printed in its
place.

     The MES field identifies where the dunning message from
the AR Setup file is to appear. If this field is left out of
the detail section the dunning message will not appear.

     ** All reserved words must be in capital letters.

4) Conditional clauses and conversion codes

     The following 'verbs' may be used and in some cases must
be used in order to perform conditional validations against
certain values. The purpose is to convert the information
entered in the detail entry, which is in 'Ascii' or text
format, into the appropriate forms for comparisons.

     There are three basic data types in the system. To
convert the detail entry clause to the proper type use the
values listed to the right of the data type.

          Data Type          VERB

          DATE               CTOD,CTOD
          NUMERIC            VAL
          Character          STR,SUBSTR

Although some data types may be intuitive, such as TRAN_DATE
being of DATE type, a list of types is provided with the VALID
FIELD list. 

      The CTOD function converts a character date into a date
value recognized by the system. For example:

            TRAN_DATE[CTOD('01/02/90')]

      The DTOC function performs just the opposite and is used
against the field value. For example:

            DTOC(TRAN_DATE)['01/02/90']

      The VAL functions is used to convert a character number
to a number recognized by the system while the STR function
does the opposite. Similar to  the data functions, the clauses
may be used on either side of the expression.

            QUANTITY[val('1000')]
            STR(QUANTITY)['1000']

       The SUBSTR function is used to look at a portion of a
larger character field. In the system, a 60 character
description field is provided for each invoice detail item. If
only a portion of the field is to printed or only a portion is
needed for comparisons, this function is used.

            SUBSTR(DESCR,1,10)['Sales Tax']

This value is always used on the field portion of the entry.   
        

* Since these functions are actual functions used in DBASE
dialects. Others may be used. Consult a book on DBASE if you
desire more flexibility. 

5) Multiple description lines

   Sometimes there is the need to print a product description
beyond the 60 characters provided in the detail record. To
print more than one line simply add a detail record to the
invoice with blank quantity and price fields in the position
desired.

   Using the tilda (~) character in any position within the
description field fixes the position of that line in the
invoice body regardless of any exceptional conditions noted
for that record.

b) operations


  21:40:31          Time Recorders Inc.           07/08/90
                      Maintenance Menu            Period:2

  F1 Help      ESC Exit        F6 Calculator     F10 Window

                 QUIT return to MAIN MENU
                    << Invoice Layout >>
      Invoice  Description       Length  Width  Company

        111   test number 111       24   70  QUE Account
                     << Invoice 111 >>
            Invoice  Field Name   Row   Col  Type

              111   NAME            2    5    F
              111   I N V O I C E   2   50    T
              111   NAME1           3    5    F
              111   invoice text    3   40    T
              111   NAME12          4    5    F

   B-Z Find  A Add  E Edit  D Delete  <> to move  Esc to exit

     The screen above shows the detail display table for the
selected format (111). Since there are no special conditions
or edits to these records, an explanation of the typical Add,
Delete, Edit and Search functions is missing.

     However, there is an option not shown that may be
accessed from the Header display screen that allows the
display of the selected invoice format to the screen. This
function is highlighted as F2 on the header screen.

     Note that the detail entries appear in Row, Col sequence.




AR Ar Setup Table


a) description

     The setup table is used to control access and store
certain miscellaneous information. The field names as they
appear on the screen are to the left. Those with a '(I)' after
the name are used when the system is integrated with the
General Ledger module.

     Period date        date the period ends
     Password           needed to signon to the system
     Company            three character company code
     Number of Periods  number in fiscal year
     Current period
     Screen header
     Report header
     Restore flag       indicates an improper shutdown  
     Auto restore       if T automatic restore will occur
     Force print        if T need a printout before end
     Status
     Tax Code           Code used to identify tax
     Dunning message1 | The messages to print on late invoices
     Dunning message2 | as determined by the degree of
     Dunning message3 | lateness comparing duedate with date
     From To1         | entered.  
     From To2         | The from to values indicates a range
     From To3         | for each message.

     Dept (I)           The department code used to record
                        transactions in the Trial Balance
     GLpath (I)         Directory name where QUE GL resides.

b) Operations

     The same keystrokes and navigation instructions used for
the other tables in the MT function are applicable here.

     This function is password protected.

   

   Integration



  This section highlights how the Accounts Receivable (AR)
module interfaces with the General Ledger and what must be
done to assure a smooth integration.


Accounts Receivable Requirements

  When integrated, the Chart of Accounts and Source Code
tables used in the General Ledger are used in the AR module
accordingly. Certain values must be placed in the AR setup
record for each company used in the GL. These include the
period dates and Company identifiers as defined in the ST
System file of the General Ledger.

  When transactions are added, deleted or modified in AR, the
balances in the GL Trial Balance are dynamically updated just
as they are when transactions are entered in the ET function
of the GL module. The accounts affected include the Accounts
Receivable entry from the source code table (INV) and each
individual sales account entered as invoice line items.

  The End of Period function in the GL, uses the AR Path set
up in the ST System file to find AR. If the system detects the
existance of AR files, it notifies the AR module that an End
of Period has been performed in the GL. Upon next sign-on
process to the AR system, the AR End of Period function is
automatically invoked to assure congruency between the GL and 
AR modules.


 a) Operations

  Select the AR Setup function from the MT menu and enter the
information as described above for all fields with an (I)
following the field column heading.
     
     GL directory   the directory where Gl is stored.
     Department     the department to be used for AR
                    updates to the GL Trial Balance.

                    All AR and Sales records are attributed
                    to one department.


General Ledger Requirements


  The GL requires the pathname of all satellite systems to be
included in the ST Setup table. 

  If Inventory depletion is be used, the Range file under ST
must contain an entry for Inventory (Type I). (See Inventory
interface below)

  There may be some required adjustments needed to the Chart
of Accounts and Source Code tables to properly reflect
Accounts Receivable. Ususally additional accounts are added to
the Chart of Accounts to reflect Inventory Sales.

 a) Operations

  Select the System file under the ST option off of the Main
menu and enter the directory path for AR. If left blank the
files for AR will be assumed to be in the same directory as
GL.

  Select the Range file under the ST option off of the main
menu and enter the range of Inventory Sale account numbers.



Inventory Interface

  When the General Ledger Range file has a value for Type =
'I', it indicates your desire to use the inventory interface
portion of the Accounts Receivable module. 

  The Inventory interface at this time simply checks inventory
levels against the inventory master file and adds and
subtracts inventory quantities to the Qty on Hand total when
it has been detected that an Inventory Sale has been
conducted, as determined by using an account number within the
range defined in the ST Range file of the General Ledger.

  The QTY on Hand may also be affected through the F4
Adjustment function. It is not affected through the deletion
of Invoices as a whole or for an entire customer.

  This system does not record the accounting transaction  for
Cost of Goods Sold. This, as well as Inventory Valuation, are
inherent to an Inventory system.
     
a) Operations

  To set up Inventory interface

     Go to ST Setup function in QUE General Ledger
     Select Range File and add an entry for Inventory (Type I)

          Range   Start    End 

            I     4200     4229

  The Start and End values represent the range of Inventory
Sales codes in the Chart of Accounts. This range is used when
detail line items are added to detect whether or not the
Account represents Inventory Sales.

            
 b) Additional functions

  The Inventory interface activates the Inventory File in the
MT function and the Inventory Report on the RP Report Menu. 

  The MT menu allows entry of Quantity on Hand, Preferred
Vendor, and Quantity Reorder points for individual products.

  During the production of an invoice the quantity field on
each line item is depleted from the Quantity on Hand in the
Inventory file. In the case of returns (positive figure) it is
added. 

  The Inventory report can be used to print all inventory
records, or those inventory items with Quantity on Hands
values close to their Reorder Points (as determined by the
value entered at prompt). 

  Although the Inventory Report shows balances only, the
Product Report can be used to see the actual transactions by
selecting the Inventory Sale range desired.






















 ** The Accounts Payable has the same Inventory Interface
capabilities, but is usually used to record purchases for
resale.

  Inventory Module  (future notes)
(Not included in this Version 2.0)

  The Account field represents the Cost of Goods Account
number to be used in the offsetting transactions. For example
a sale of 100 boxes of computer paper would constitute the
following accounting transaction:


       Accounts Receivable   200
              Inventory Sales      200

       Cost of Goods Sold    160
              Inventory Asset      160       



NOTE : The Cost of Goods sold is recorded at cost as extracted
from the Inventory file and entered at the time of initial
setup. The difference between the Gross sales amount and this
cost represents the profit on the recorded sale. Since the Net
Income figure is determined at the time of printing of the
balance sheet, no debit is made to Retained Earnings at this
time.
```
{% endraw %}

## COMMON.TXT

{% raw %}
```

                      QUE ACCOUNTING SYSTEM
                       USEFUL DOS COMMANDS




Command           Description

CTRL S            These two keys when pressed together will
                  pause the present activity.  It will stop
                  screen scrolling and halt the printer.  A
                  likely use would be  to change the printer's
                  paper when jammed.  Hitting CTRL S again will
                  resume activity.

CTRL ALT DEL      These three keys when hit together will
                  "reboot" the system.  Rebooting is similar to
                  turning the machine off and back on.  This is
                  a good command to try only when the computer
                  seems hung and no input is accepted from the
                  keyboard.

SHIFT PRTSC       These two keys allows us to print whatever is
                  on the screen.  It may be useful in recording
                  error messages or displaying data not readily 
                  available on reports.  For instance printing a 
                  single master file record.

CHKDSK /F         Used to check the memory  available for use 
                  and the amount of diskspace. The /F parameter
                  is used to rebuild bad file allocations.

FORMAT            Used to ready a diskette for copying during
                  the backup procedure.

                      QUE ACCOUNTING SYSTEM
                        USEFUL Keystrokes

Cursor Movement

The cursor, a flashing minus sign, may be moved through the use
of the four directional keys on the right hand side of the
keyboard.  The upper arrow is used to return back to the
preceding field.  The down arrow or the RETURN key are used to
move on to the next field.  The right and left arrows move the
cursor one space in the corresponding direction.

      Vendor PE     
      Invoice test12     
      Date    12/31/87

For instance, if the cursor was sitting on the eight of the date
field, hitting the up arrow twice would move it to the Vendor
field.  If I wanted to move it only to the beginning of date, I
would hit the left arrow 4 times, since the "/" are fixed and not
considered part of the data.

Any field where the last character entered fills up the display,
the computer will automatically assume the entry is finished and
will continue onto the next field.  In the case of most menu
selections, therefore, hitting return after a selection is not
necessary.

Screen Function Keys

While processing data on a data screen, certain key combination
can be used to facilitate the process. Intuitively, moving the
cursor key with the arrows, as described above and pressing the
DEL and INS keys will get the job done  and may be all that is
necessary. However, there are advantages to using the keystrokes
listed below:

  CTRL A          Moves the cursor a Word to the left.
  CTRL F          Moves the cursor a Word to the right.
  CTRL Home       Moves the cursor to the top of the screen.
  CTRL END        Moves the cursor to the bottom of the screen.
  CTRL T          Deletes the word to the right of the cursor.
  CTRL Y          Deletes from the cursor position to the end of
                  the field.
  CTRL U          Restore the current field to its original
                  value, as long as you did not exit the field. 
  CTRL U          Terminate the current process, saving all
                  changes made including the current field.
  ESC             Terminate current process, saving all changes 
                  but those made to the current field.

```
{% endraw %}

## DISCLAIM.TXT

{% raw %}
```


                           QUE Accounting

                       Copyright (c) 1989,1990


                             DISCLAIMER





              The QUE Accounting series is a well prepared
              and tested series of Accounting programs.
              QUE Accounting makes no expressed or implied
              warranty of any kind in regards to the
              programs and documentation. In no event
              will QUE Accounting be liable for
              damages incurred due to incidental use of
              these programs. QUE Accounting reserves the
              right to modify the programs and documentation
              as deemed necessary without any obligation of
              notifying any persons or organizations.
  





                          QUE Accounting
                          Suite 180
                          1450 West Chester Pike
                          West Chester, PA 19382
```
{% endraw %}

## FUNCKEY.TXT

{% raw %}
```


                         QUE ACCOUNTING
                    FUNCTION KEYS ASSIGNMENT



          Generally, the following keys are assigned
          within each module. 
 
 
               F1 - Help key to Help Database 

               F6  - Pop Up calculator

               F10 - Window to the Appropriate Master file 

               ESC - To abort out of a process or menu.
```
{% endraw %}

## GENFUNC.TXT

{% raw %}
```


                            Chapter 5
                         Other Functions


                            
 RW Query and Report Writer 
                            

The RW Query and Report writer function is a powerful utility to
select information upon complex condtions set with 'easy to
follow' instructions. It can even be used to access files outside
the QUE Accounting series or programs.

Description

The popup window style access allows you to select files, set
relations between files and to select the fields to appear on the
output. The output may be directed to either a table format on
the screen or a report.

Chosing Files

When you first enter the program, a listing of files in the
current directory are displayed. Highlight the desired file(s)
and press F10 to continue to the next phase.

Making Relations

When more than one file is selected, the first file chosen is
considered the parent and a relation must be set between it and
its children( subsequent files).

To relate files select the field in the parent by highlighting it
and pressing enter. Select the corresponding field in the child
file.

   eg. Soc Sec Num   relates to   Soc Sec Num

Press F10 when complete.

Select, Sorted by and Where

This section tells the computer what data is to be selected and
in what sequence.

  Select the fields from the files and press F10 when complete.
  Sort the fields in the order in which you would like to see
them displayed by selecting them in the sort sequence.

   eg. Lastname Firstname

  The Where section uses boolean algebra and range values to
create a subset of data.

  eg. State='PA' .and. Lastname>'MAAA' .or. rate>100.00


Screen or Printer Output

The selected information automatically goes to a table display
but may be redirected to a printer.

Printed reports may include one or more of the following:

    report headings
    subtotaling
    summation
    averaging
    maximum and minimun values
    margins
    page widths and lengths
  
The math functions are also available while in the screen mode.

Saving the Query

The selected boolean criteria may be saved for future reference
by pressing the F6 key and entering in the brief description.

Saved queries may be accessed and executed at any time
eliminating the need of having to rekey in the selection
criteria. Each time executed the latest data is read from the
files.

An example of a typical output screen appears below








╔═════════╗
║Filelist ║
╚═════════╝

General Ledger

     MEMFILE        Company Setup file
     GLMAS          Chart of Accounts
     GLTRANS        General Ledger Transactions
     GLBATCH        General Ledger Transaction Batch Headers
     TBDEPT         Trial Balance
     DEPTMAS        Department Master
     SOURCE         Source Code table
     RETRANS        Repeating entries
     SYSFILE        Account range file
     GLHIST         General Ledger Transaction History

Accounts Receivable

     ARMEM          AR Setup
     ARHEAD         Invoice Headers
     ARDETL         Invoice Line Items
     PRODUCT        Inventory file
     ARMAS          Customer master records




╔════════════╗
║Utility Menu║
╚════════════╝

 ┌──────────────────────────────────────────────────────────┐
 │09:51:48           Accounts Receivable           02/24/90 │
 │Company-> ABC         Utility Menu               Period: 7│
 │                                                          │
 │F1 Help      ESC Exit         F6 Calculator    F10 Window │
 │                 ┌────────────────────────┐               │
 │                 │QUIT return to MAIN MENU│               │
 │                 │                        │               │
 │                 │BU. Backup files        │               │
 │                 │RS. Restore from Backups│               │
 │                 │IX. Reindex files       │               │
 │                 └────────────────────────┘               │
 └──────────────────────────────────────────────────────────┘

Description

The utility menu includes miscellaneous functions and those
outside the normal realm of operations. They are however very
important elements of the system.

Backup / Restore / Reindex

The first three options on the menu prime responsibility is
recovering from hardware and unexpected system malfunctions. 

The Backup feature copies the system files to backup diskettes.
So that in the case of an emergency they may be used to restore
the system back to the point in time the copy was made. It is a
good idea to perform this operation periodically based on a
specific event such as after the close of a period. 

The Restore function is selected to perform the restoration of
files back onto the system. Diskettes must be saved using the
backup feature of this system in order to perform a restore.

The Reindexing utility is called automatically by the end of
period process but may be called more frequently. It recreates
your file linkages and cleans up any unused space reserved by
deleted records. It is usually the first recourse when
experiencing index problems as may be noted by missing or out of
sequence data.

The simple on screen instructions will guide you through the
operations.


NOTEPAD (optional)

Description

The NOTEPAD is a handy, mini word processor that will meet most
of your word processing needs. It works most effectively with
memo and letters but may be used to access larger documents.

Like many word processors it is limited by the size of available
memory. Most typical users (640K) will not have a problem.
However, it s a good precautionary measure to periodically save
your file as you are typing.

Operations

The NOTEPAD option may be activated from the menu or by pressing
the F9 key from within other designated functions.The following
keys are active within the NOTEPAD window.

    Alt-A  (A)ppend a file to current file and continue
    Alt-B  (B) place a block marker
    Alt-F  Insert a field from a database 
    Alt-G  (G)oto line number
    Alt-H  (H)elp screen
    Alt-I  (I)nsert line     
    Alt-K  (K)ill current line
    Alt-L  page (L)ength for printing
    Alt-M  change (M)argins
    Alt-N  edit (N)ew file             
    Alt-P  (P)rint file
    Alt-Q  (Q)uit but save edits           
    Alt-R  search and (R)eplace
    Alt-S  (S)ave file & continue          
    Alt-T  (T)oggle wordwrap on/off
    Alt-W  (W)rite to new file             
    Alt-X  e(X)it without saving
    Alt-Y  change director(Y)/wildcard

FUNCTIONS:

EDIT WINDOW/STATUS LINE: when you enter the notepad, the edit
window takes up nearly the full screen.  There is a status line
at the bottom, which displays the name of the file being edited,
the current line and column position of the cursor, the left and
right margins, and the status of wordwrap and insert modes
(displayed when active as "<Wrap>" and "<Ins>", respectively.)

When a file has been edited, an asterisk will appear at the right
side of the top row (next to the "Alt-H=Help" message).

CURRENT DIRECTORY/WILDCARD - the notepad gives you the ability to
change the working directory and/or filemask at any time.  When
you first enter the notepad, the current directory will be set to
the default DOS directory, and the wildcard will be set to '*.*'.

If you would like to change either the directory where the
notepad looks for files or the wildcard used (e.g., "*.TXT",
"*.PRG"), press Alt-Y and enter the new information.  You do not
have to enter slashes in front or back of the directory name
UNLESS you include a wildcard.  For example, to change the
current directory to "\ACCT\", you need only enter "ACCT". 
However, if you want the notepad to look for all the .TXT files
in subdirectory \ACCT\, you must enter "\ACCT\*.TXT".

If you enter just the wildcard, the current directory will remain
unchanged.  If you enter a directory name only, the wildcard will
be reset to "*.*".  If you press Enter without typing in
anything, neither the current directory nor the wildcard will be
changed.

Examples: let's assume that your application is in a subdirectory
named \WORKSTUF.  The initial current directory/wildcard will be
set to "\WORKSTUF\*.*".  If you press Alt-Y and enter "*.TXT
<CR>", the directory/wildcard will be changed to
"\WORKSTUF\*.TXT".  If you wish to change to the ACCT
subdirectory, press Alt-Y and enter "\ACCT <CR>".  The
directory/wildcard will then be changed to "\ACCT\*.*".   Suppose
you then want to look at only the .TXT files starting with the
letter P in the directory \ACCT You would press Alt-Y again, and
enter "\ACCT\P*.TXT".

FILENAMES: when you press Alt-N to edit a new file or Alt-W to
write to another file, a scrolling window will appear containing
all files that match the current directory and wildcard mask.

The directory and wildcard mask will be shown at the top of this
window for reference.  Note that files with the following
extensions will not appear in this directory, based on the
assumption that there should be no need to edit binary files:
.EXE .COM .DBF .NTX .DBT .NDX .OBJ.

To select a file, move the highlight bar to it and press Enter.
Also note by pressing a letter key, the first file starting with
that value is highlighted. PgUp, PgDn, Home and End keys are also
available.

INSERT and WORDWRAP: the start-up values for these modes is on.
They may toggled off and on at any time by pressing Insert and
Alt-W, respectively.  The status of these modes appears at the
right side of the status line.  Additionally, the cursor size
will change from large (insert) to small (overwrite) based on the
current mode.

MARGINS: the start-up margins are 1 and 80.  However, you may
change these margins at any time by pressing Alt-M and entering
the desired values.  When you change the margins, the on-screen
display will adjust to reflect the new margins.  You may use
larger values for the right margin than would appear on the
80-column screen.  In such instances, you should toggle wordwrap
off and scroll to the right to display text beyond the on-screen
right margin.  The current values of the margins appear on the
status line.


PAGE LENGTH: the start-up page length for printing is 60 lines. 
You can change this at any time by pressing Alt-L.

SEARCH AND REPLACE: you can search and replace for all or for
only a specific number of occurrences of a character string. 
When you press Alt-R, you will be prompted first to enter the
search string, then the replacement string.  You will then be
asked if you want to replace all occurrences of the search
string.  If you answer 'N', you will be prompted to enter the
number of occurrences to replace.

Please note that the search begins at the top of the file and
continues either to the end of the file or until the specified
number of occurrences have been replaced.

PRINTING: you may print the current file at any time by pressing
Alt-P.  Printing may be aborted at any time by pressing Esc.  The
format of the printed page is determined by the current settings
of the margins and page length.

BLOCK COPY used to highlight a block of text to be copied moved
or deleted. Alt-B both starts and stops the block marking. A
third Alt-B brings up the function window.

FIELD INSERTION used to bring in fields from a database. The
selected fields will be printed in the body of the letter.
 

CALCULATOR:(optional)

Description

This is a useful calculator that includes all the basic
operators: addition (+), subtraction (-), multiplication (*), and
division (/).

But it also has some other goodies, including exponentation (^),
a percentage(%), a paste function and a full-featured memory. 
Plus, whenever you press an operator ('+', '-', '*', '/', or
'^'), the previous number is shown above the display window. 
This is handy for when you are processing a list of numbers and
forget where you were.  Also the calculator can be moved around
the screen using the directional arrow keys.

The maximum value that can be stored in the calculator is
99,999,999,999.9999.

Operations

Active Keys:

    '+' -- addition                        '-' -- subtraction
    '*' -- multiplication                  '/' -- division
    '^' -- exponentation                   'C' -- clear 
    '%' -- Percentage                           current number
    'E' -- clear entry (does not clear previously
           entered number in pending operation)
    'P' -- print (adding machine mode)     'M' -- Memory
                                                operations
    '=' or Enter -- process operation       Esc -- exit
                                                Calculator
    'D' -- change the number of decimal options
    'R' -- round the numbers to a specified number pf places

Calculator movement keys:

    UpArrow      -- move calculator up one row
    DnArrow      -- move calculator down one row
    LtArrow      -- move calculator left one column
    RtArrow      -- move calculator right one column
    Ctrl-LtArrow -- move calculator to far left (rows
                    unchanged)
    Ctrl-RtArrow -- move calculator to far right (rows
                    unchanged)
    Home         -- move calculator to top left corner
    End          -- move calculator to bottom right corner
    PgUp         -- move calculator to top row (columns
                    unchanged)
    PgDn         -- move calculator to bottom row (columns
                    unchanged)
Memory Functions:

To access memory functions, press "M", then one of the flashing
function keys.  The function keys are:

    'R' -- recall number stored in memory
    'C' -- clear memory (reset to zero)
    '+' -- add current number to number stored in memory
    '-' -- subtract current number from number stored in
           memory
    '*' -- multiply number stored in memory by current number
    '/' -- divide number stored in memory by current number


PASTE function

The paste function enables you to paste the current calculator
value into a numeric field while adding or changing records in a
file.

However, erratic results may occur if the number of decimal
places in the number to be pasted is larger than the number
of decimals of the field described in your file. For example,
suppose that you have just used the calculator to derive the
result 75.2877.  You wish to paste this number into an amount
field on the screen prior to popping up the calculator. If the
field is only 2 decimal places than the probability is strong
that this number will be stored on-screen as 75.29 (although
internally it will remain 75.2877).


PRINT - Adding machine mode

By pushing "P" for Print, the calculator emulates an adding
machine.This will be noted by a small "P" to the right of the
number window. Each calculation will be sent to the printer (if
it is on-line). After all, if you have invested several thousand
dollars in PC hardware (and software), why bother spending more
money on a ten-key adding machine?  Press "P" again to leave
adding machine mode.


```
{% endraw %}

## INSTALL.TXT

{% raw %}
```
                         QUE ACCOUNTING
                  Accounts Receivable Installation

For the system to function properly, it must be installed on a
hard drive.  The specific requirements are listed below.  Note
some adjustments may be required of DOS configuration files.

HARDWARE

QUE requires : 
  - 640K MEMORY 
  - 1,000,000 BYTES FREE on hard disk * 
  - a floppy drive used for installation 

SOFTWARE 

  - CONFIG.SYS - needs to have FILES=25 and a BUFFERS=16 
  - Must be installed on C or D drive. To install to other 
    drives the knowledgeable person can change the INSTALL bat 
    files. 

The directory structure created during installation is the value
entered at the command: 
 
     eg A:INSTALL QUEAR

       where QUEAR is the name of the directory to be created
 
In case this directory is already used for another application,
no files or programs will be overwritten and no harm should come
to that system.  However removing the other system to a separate
directory, is advised.

PROCEDURE

The system comes with 1 diskette. To install the system insert
the diskette into  drive A and type in 

        C> A:INSTALL QUEAR 
 
To install from another drive(example B), change the INSTALL.BAT
file to read B: in all places where A: is found or type in the
following commands:

        C> MD QUEAR
        C> CD QUEAR
        C> B:PKUNZIP -O B:QUEAR

The documentation may be viewed on line or printed out by typeing
the following command. Note the manual is segregated into several
sections following the Main Menu structure.

        PRINTDOC 

You are now ready to start. Please do the following: 

        C: 
        CD\ 
        C> CD QUEAR
        C> ARMUC

Enter "AAA" for COMPANY and "test" for PASSWORD and then go to
the UT Menu and select the REINDEX option in order to create the
index files. If you don't do this step, the system will not work. 


```
{% endraw %}

## ORDER.TXT

{% raw %}
```


                       QUE ACCOUNTING     June 1990
                         Order Form

                                     Price  Qty

  QUE Accounting General Ledger      $ 45   ____

  QUE Accounting Accounts Payable    $ 45   ____

  QUE Accounting Accounts Receivable $ 45   ____

  QUE Accounting Payroll             $ 45   ____  

  QUE Accounting Query / Report      $ 10   ____  **
      Writer, Notepad and Calculator


All modules above may be purchased together for the reduced
price of $145.00.

  QUE Time and Attendance            $135   ____
      Query and Report Writer

  Printed Manual                      $10   ____
(for each function)

** Must be included with purchase of another module.


Mail Order and check payment to:

  QUE Accounting
  Suite 180
  1450 West Chester Pike
  West Chester, PA 19382

 
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2496

     Volume in drive A has no label
     Directory of A:\

    PKUNZIP  EXE     22022  10-01-89   1:02a
    QUEAR    ZIP    220940   9-14-90  10:16a
    INSTALL  BAT        37   8-04-90  11:47a
    GO       BAT        38  12-17-90   3:57p
    FILE2496 TXT      2966  10-10-90   1:51p
    INSTALL  TXT      1957   8-04-90  10:49a
    0D33221F             0  10-10-90   1:51p
    0D332246          1956  10-10-90   1:51p
            8 file(s)     249916 bytes
                           69632 bytes free
