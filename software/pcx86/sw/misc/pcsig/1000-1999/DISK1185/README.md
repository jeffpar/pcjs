---
layout: page
title: "PC-SIG Diskette Library (Disk #1185)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1185/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1185"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## CNVSOAR.DOC

{% raw %}
```

		     CONVERTING OLD SOAR DATA FILES


SOAR users with version numbers less than 3.00 MUST convert their data
files before using the new SOAR.  This is done as follows:

1. BACKUP YOUR DATA FILES!!  Copy your data to a floppy disk for
   future reference.  Assuming you have a SOAR directory and a sub-
   directory for data, put a formatted disk in drive A and type:
		CD \SOAR <ENTER.
		COPY SOAR.SYS A:  <ENTER>
		CD \DATA  <ENTER>
		COPY *.CAT A:  <ENTER>
		COPY CUSTOMER.MAS A:  <ENTER>
		COPY SOAR.SUM A:  <ENTER>
		COPY *.TRN A:  <ENTER>
		COPY *.BSM A:  <ENTER>

2. Delete your current program files (you DO have copies??) by:
		CD C:\SOAR  <ENTER>
		ERASE *.EXE  <ENTER>

3. Copy your new program files (Disks 1, 2 and 3) into the SOAR directory.
		COPY A:*.EXE .  <ENTER>
		repeat for disks 2 and 3

4. Convert your old data files by:
		CNVSOAR  <ENTER>

   Select the "ALL" option and the program will convert your system file,
   customer master file, transaction category file, summary category file
   and then ask if you want to convert transaction files.  You can answer
   "Y" and convert the transaction files in your data directory.  DO NOT
   convert the same file twice!!  Be very careful!

If you make a mistake, just copy the files from the floppy disk you used for
backup and repeat step 4.  Restoring is done by putting the backup disk in
drive A and doing the following:
		CD C:\SOAR  <ENTER>
		COPY A:SOAR.SYS .  <ENTER>
		CD C:\SOAR\DATA  <ENTER>
		COPY A:*.* .  <ENTER>
		ERASE SOAR.SYS  <ENTER>
		CD ..  <ENTER>

You can now go back to step four and convert again.

```
{% endraw %}

## FILE1185.TXT

{% raw %}
```
Disk No: 1185
Disk Title: Soar 3 of 3 (812,813 also)  (Disk 3 of 3)
PC-SIG Version: S2.5

Program Title: SOAR
Author Version: 3.08
Author Registration: $49.00
Special Requirements: Two floppy drives.

SOAR (Service-Oriented Accounts Receivables) helps you simplify customer
billing, generate meaningful management reports, and quickly get a
snapshot of your business income and its sources.  The program is
menu-driven and easy to operate.  Some of SOAR's major features include:

~  Simplified billing for businesses that provide services as well as
products; three billing formats are supported - two industry-
standard general-purpose forms, as well as a ``generic'' form.

~  Charges based on fixed-item (inventory item), services, hourly
rates, fixed-cost, or variable-cost.

~  Customers assigned a late-charge rate so you can give special
treatment to good customers;  automatic billing of customers with
fixed-rate service or support contracts; customer inquiries are
rapid and provide an instant history of the customer's activities.

~  Mailing lists are generated from the customer database and labels
can be prepared for customers billed, all customers, active
customers, inactive customers or customers with past-due balances.

~  A tax-exempt status for dealing with government agencies or
wholesale transactions; taxable and non-taxable sales are automatically
stored and reported.

~  22 categories to summarize your business activity.

~  Powerful reporting of specific areas of income; data files can be
merged to have your business reported in quarters or other increments.

~  Easy identification of items or services that are profitable for
your business.

~  Reports sorted by up to five keys to give you the specific
information you need for your business and directing your areas of
effort.

SOAR does not teach accounting rules and assumes a certain level of
expertise in accepted accounting procedures and protocols.


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
║                <<<<  Disk #1185 SOAR Disk 2 of 3  >>>>                  ║
╠═════════════════════════════════════════════════════════════════════════╣
║ Type: MAKEDOC (press enter)                                             ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## REBILL.DOC

{% raw %}
```
                            SOAR REBILLING UTILITY

SOAR gives you the option of printing a bill and/or sending the bill to a
disk file.  This utility, "REBILL.EXE", allows you to scan through the
disk file and optionally reprint a bill and/or save it to another file.  It
is important to note that this utility will only work properly with SOAR
Versions 3.00 or greater.  In the Version 3.00 update a special character
was embedded in the bill file to indicate the start of a bill.  This is used
in this program to identify one bill from another.

REBILL must be loaded into your SOAR DATA directory (NOT the program
directory) for use.  Assuming you setup your directories as suggested in
the manual, place the disk containing REBILL.EXE in Drive A and proceed as
follows:

          CD \SOAR\DATA  <ENTER>
          COPY A:REBILL.EXE .  <ENTER>

Whenever you wish to use the program, type:

          CD \SOAR\DATA  <ENTER>
          REBILL  <ENTER>

The opening screen will ask for a filename.  If you don't know the name,
just depress the ENTER key and a listing of all bill files will be shown
in a window.  REBILL looks only for files with the extension ".BLL".  For
example, JAN-89.BLL.  You need only enter the name without the extension.
For instance,  JAN-89 <ENTER>.  If the file cannot be found, an error
message will be displayed and you will again be prompted for a file name.

If the file is found, REBILL will display the bill on the screen.  You can
work on the files with the following commands:

     Down Arrow :  Scroll down the bill toward the end
     Up Arrow   :  Scroll up the bill toward the start
     ENTER      :  go on to the next bill
     PgDn       :  go on to the next bill
     P <ENTER>  :  print the bill shown on the screen
     S <ENTER>  :  save the bill shown to a disk file
     ESC        :  exit the program

Once you have gone past a particular bill, you cannot backup.  The only way
to get to a bill you passed over is to run REBILL again.

The SAVE option sends the selected bill to a disk file with the extension
".DBL".  For example, bills selected from JAN-89.BLL would be saved in the
file JAN-89.DBL in the same directory.  The disk file is useful for
extracting selected bills that must be edited.  This is most valuable when
you have billed a lot of customers and the .BLL file is too big for your
word processor.
















Potential Problems:
The display directory feature makes use of a shell that operates through
COMMAND.COM.  This file is always in the root directory of a bootable
disk.  If the directory feature doesn't work, make sure your PATH is
properly defined in your AUTOEXEC.BAT file.  For example,
          PATH C:\; ......

An alternative solution is to copy COMMAND.COM into your SOAR data
directory.  Try this if you have problems.

If you edit the saved file with a wordprocessor, the funny little symbol at
the end of each bill is a formfeed character.  This will be found for all
billing formats except "A".  Format A does not use a formfeed.  Most word
processors recognize the formfeed character and will not cause problems.

If you SAVE some bills, exit REBILL, and then go back and save some more you
will find that there is a formfeed character missing between the last bill
saved from the first session and the first bill saved from the subsequent
session.  Use your wordprocessor to insert a page break between these bills.

If you have any problems, please call.

                                     Ed Croson
                                     438 Ave De La Vereda
                                     Ojai, CA  93023
                                     (805) 646-1335



```
{% endraw %}

## SOAR-1.DOC

{% raw %}
```










                                SERVICE ORIENTED
                              ACCOUNTS RECEIVABLES






                                      SOAR
                                  USERS GUIDE



                                 April 17, 1989
                                  Version 3.06








                                  E.B. Croson
                                 P.O. Box 1575
                                Ojai, CA  93023
				                (805) 646-1335




                                _________
                               |         |
                          _____|___      |               (tm)
                      ---|         |     |-----------------
                         |   ______|__   | Association of
                         |  |         |__|   Shareware
                         |__|         |    Professionals
                      ------|    o    |--------------------
                            |    |    |    MEMBER
                            |____|____|





          Copyright (C) 1989 by Eddie B. Croson.  All Rights Reserved
          except those expressly granted to the user by this document.






     



                              DISTRIBUTION NOTICE

        SOAR is distributed by way of the "User Supported Software"
        concept.  If you use this program and find it of value you are
        encouraged to become a registered owner.  You may become a reg-
        istered owner by filling out the registration form at the end
	    of this document and mailing it with a check for $59.00 to:

                 E.B. Croson            or    Business Automation Co.
                 438 Ave. De La Vereda        P.O. Box 1575
                 Ojai, CA  93023              Ojai, CA  93023
                 (805) 646-7507               (805) 646-1335

        When you become a registered owner you will receive the latest
        program diskettes, a complete Users Manual, telephone support,
        and notification of updates.  The Users Manual is much more
        comphrensive than this guide and fully describes all of the
        capabilities of SOAR.  The manual is over 100 pages long.

        You are encouraged to copy and distribute SOAR with the
        following restrictions:

                 1.  SOAR must be distributed as a complete set.  Do
                     not alter or erase any program files from the
                     distribution copies.

                 2.  No Charge or Fee other than that necessary to
                     cover the cost of diskettes shall be made for
                     distributing SOAR.

                 3.  Commercial sale of SOAR in any manner is pro-
                     hibited without the written permission of the
                     author, E.B. Croson.





                                   DISCLAIMER

        Although the author, Eddie B. Croson, has tried to make this
        program error free, there is still the possibility of errors.
        You are therefore using this program at your own risk.  There
        is no warranty of merchantability or fitness.  The author is
        not responsible for any losses incurred through the use of this
        program.



















                               TABLE OF CONTENTS


        SECTION 1
          INTRODUCTION                                        1

        SECTION 2
          A BIT ABOUT SOAR                                    3
            2.1 System File                                   3
            2.2 Customer Records                              3
            2.3 Summary Categories:                           3
            2.4 Transaction Categories                        4
            2.5 Charge or Payment Transactions                5
            2.6 Transaction Interactions                      6

        SECTION 3
          CREATING CATEGORIES                                 8
            3.1 Selecting Summary Categories                  8
              3.1.1 Income Categories                         8
              3.1.2 Charge Categories                         8
            3.2 Transaction Categories                        9
              3.2.1 General Purpose Categories                9
              3.2.2 Specific Transaction Categories          10
              3.2.3 Miscellaneous Transaction Categories     11
            3.2.4 Partitioning Transaction Categories        11

        SECTION 4
          GETTING STARTED                                    13
            4.1 Some Conventions                             13
            4.2 SOAR Distribution Diskettes                  13
            4.3 Making Copies of SOAR                        13
            4.4 Installing SOAR For Your System              14
              4.4.1 SOAR IN A Hard Disk System               14
              4.4.2 SOAR IN A 360K Floppy Disk System        15
            4.4.3 SOAR In A 1.2M Floppy Disk System          15
            4.5 Setting Up The SOAR System File              16
            4.5.1 Starting SOAR                              17

        SECTION 5
          BUILDING A CUSTOMER FILE                           20
	    5.1 Saving Your Customer Data                    20

        SECTION 6
	  ENTERING SUMMARY CATEGORIES                        22

        SECTION 7
	  BUILDING A TRANSACTION CATEGORY FILE               23
	    7.1 Adding A Block of Categories                 23
	    7.2 Adding A Single Category                     24

        SECTION 8
	  EXPLORING SOAR                                     25
	    8.1 Saving Your Work                             25
	    8.2 Entering Transactions                        26
	    8.3 Posting Transactions                         28
	    8.4 Applying Automatic Charges                   29
	    8.5 Applying Late Charges                        29
	    8.6 Preparing Bills                              30
	    8.7 End of Period Processing                     31
	    8.8 More Exploring                               31







        SECTION 9
	  PHASING SOAR INTO YOUR BUSINESS                    32
	    9.1 Completing Your Data Files                   33
	    9.2 Running Parallel                             33

        SECTION 10
	  HOW OFTEN TO USE SOAR                              34
	    10.1 Daily                                       34
	    10.2 Monthly                                     34
	    10.3 Yearly                                      35
	    10.4 Final Note                                  35

	SOAR REGISTRATION FORM                               36




                                _________
                               |         |
                          _____|___      |               (tm)
                      ---|         |     |-----------------
                         |   ______|__   | Association of
                         |  |         |__|   Shareware
                         |__|         |    Professionals
                      ------|    o    |--------------------
                            |    |    |    MEMBER
                            |____|____|

     The program author, Eddie B. Croson, is an active member of the
     Association of Shareware Professionals (ASP).  ASP wants to make sure
     that the shareware principle works for you. If you are unable to
     resolve a Shareware related problem with an ASP member by contacting
     the member directly, ASP may be able to help. The ASP Ombudsman can
     help you resolve a dispute or problem with an ASP member, but does not
     provide technical support for members' products. Please write to the
     ASP Ombudsman at P.O. Box 5786, Bellevue, WA 98006 or send a
     Compuserve message via easyplex to ASP Ombudsman 70007,3536.




































```
{% endraw %}

## SOAR-2.DOC

{% raw %}
```
                               SOAR USERS GUIDE



                                   SECTION 1
                                 INTRODUCTION


        SOAR (Service Oriented Accounts Receivables) has been designed
        to simplify customer billing, provide powerful and meaningful
        management reports, and allow one to rapidly obtain a "snap-
        shot" of their business income and its sources.  Most
        importantly, SOAR is EASY TO USE!  One need not be a computer
        scientist to use SOAR.  SOAR is, to coin an overused phrase,
        "User Friendly".  The key features of SOAR are:

          o  Simplified billing for businesses that provide services as
             well as products.  Charges can be fixed item (inventory
             item), services, hourly rates, fixed cost, or variable
             cost.

          o  Each customer can be assigned a late charge rate so you
             can give special treatment to good customers.  Any
             customer can be declared as tax exempt for dealing with
             government agencies or wholesale transactions.

          o  Automatic billing of customers with fixed rate service or
             support contracts.

          o  23 summary categories available to summarize you business
             activity.

          o  Powerful reporting to identify specific areas of income
             and easy identification of items or services that are
             profitable for your business.

          o  Reports can be sorted or ordered with up to five (5) keys
             to give you the specific information you need for your
             business and directing your areas of effort.

          o  Nine billing formats supported.  Two industry standard
             general purpose forms as well as a "generic" form.

          o  Mailing list generated from customer data base.  Mailing
             labels can be prepared for customers billed, all
             customers, active customers, inactive customers, or
             customers with past due balances.

          o  Mailing label file compatible with popular word processors
             such as PC Write for use in preparing form letters, etc.

          o  Taxable sales and tax exempt sales automatically stored
             and reported.

          o  Customer inquiries are rapid and provide an instant
             history of the customer's activity.



                                    Page 1                                    






                               SOAR USERS GUIDE




          o  Transactions are categorized to simplify billing and
             applying charges; i.e., a transaction category can be a
             fixed price inventory item, an hourly charge or a variable
             charge.

          o  Number of customers and transaction categories or types
             limited only by available disk space.

          o  Data files can be merged to allow your business to be
             reported in quarters or whatever increment you desire for
             tax purposes and/or management information.

          o  Data files can be exported to popular data base systems
             such as dBASE III PLUS by Ashton-Tate and PC-FILE+ by 
             ButtonWare.  Data can also be exported to Lotus 1-2-3.
             This further enhances the reporting capabilities.

          o  Billing footer and header messages can be customized for
             your business.  Late payment messages can be customized.

          o  The currency symbol can be changed for countries outside the
             U.S.  The date format can be MM/DD/YY or DD/MM/YY.

          o  SOAR will operate on any IBM PC, IBM XT, IBM AT or true
             compatible with 192K of memory and at least two floppy
             disk drives or one floppy disk and a hard disk.  SOAR requires
             DOS versions 3.00 or greater.  Reports and billing require an
             80 column printer.  Please note that SOAR is most efficient in
             a hard disk environment.











        IBM PC, IBM XT, and IBM AT are registered trademarks of the IBM
        Corporation.

        PC-Write is a trademark of Quicksoft.

        dBASE III PLUS is a trademark of Ashton-Tate.

        PC-FILE+ is a trademark of ButtonWare.

    	1-2-3 is a trademark of Lotus Development Corporation.



                                    Page 2                                    







                               SOAR USERS GUIDE                               



                                   SECTION 2
                               A BIT ABOUT SOAR


        PLEASE READ THIS SECTION!!  The value and utility of SOAR can
        only be realized if there is a complete understanding of the
        mechanics and features of the program.  This section is most
        important since it describes and defines the methods used by
        SOAR in handling transactions.

        There are five key elements of SOAR.  These are the system
        file, customer records, summary categories, transaction
        categories, and charge or payment transactions.  Each of these
        elements will be defined and then their interaction described.

        2.1 System File:
        The system file contains all the information about your company
        including the company name and address to be put on reports and
        bills.  This file also contains information about which of
        three billing formats you want to use, the last statement
        number used and the sales tax percentage for use in computing
        sales tax.  Lastly, the system file provides information to
        tell SOAR where the data files are located in the computer
        system.


        2.2 Customer Records:
        Charges and payments can only be applied to customers that SOAR
        knows about.  Therefore, the customers must be entered into the
        system before they can be billed.  Each customer record
        contains the name and address of the customer, their present
        balance, past due balance, current charges, and information
        about their last payment.  The customer record informs SOAR
        of the late charge percentage to be used in computing late
        charges on past due balances and indicates whether or not the
        customer is "tax exempt".

        2.3 Summary Categories:
        A summary category is a means to allow you to identify specific
        areas of your business activity.  For example, if your business
        involves retail sales, repair, service, and installation then
        you can setup summary categories for PAYMENTS, TAXABLE SALES,
        REPAIR, SERVICE and INSTALLATION.  Each time a payment or
        charge transaction is posted by SOAR, the amount of the
        transaction is added to the accumulating total in the summary
        category.  Thus, at any time you can tell how much REPAIR
        business you have done.  Every transaction must report to a
        summary category and you must therefore give some thought as to
        how you want to summarize your business.

        SOAR allows up to 23 summary categories to be defined.  Six of
        these are reserved for income and 16 are reserved for charges.



                                    Page 3                                    






                               SOAR USERS GUIDE                               
        



        Six of the categories are pre-defined and cannot be changed.
        These are PAYMENTS, TAXABLE SALES, TAX EXEMPT SALES, SALES TAX,
        SERVICE CHARGES and APPLIED CREDITS.  The summary categories that
        might be used by a computer consulting firm are shown below.

               INCOME CATEGORIES                CHARGE CATEGORIES
         1. PAYMENTS          22090.64   11. SOFTWARE SUPPORT  2810.00
         2. CREDITS               0.00   12. REPAIR             150.00
         3. DEPOSITS              0.00   13. CONSULTING         520.00
         4.                       0.00   14. TRAINING            80.00
         5.                       0.00   15. CUSTOM SOFTWARE    100.00
         6. ADJUSTMENTS           2.70   16. INSTALLATION       240.00
                                         17. SHIPPING/HANDLING   24.28
               CHARGE CATEGORIES         18.                      0.00
         7. TAXABLE SALES     13697.35   19.                      0.00
         8. TAX EXEMPT SALES     65.00   20. MISCELLANEOUS        0.00
         9. SERVICE            1785.96   21. SALES TAX          821.84
        10. HARDWARE SUPPORT   1060.00   22. SERVICE CHARGES      3.30
				                     23. APPLIED CREDITS     14.50

        Note that categories 4, 5, 18 and 19 are not used.  The amounts
        shown to the right of each category reflect the charges or
        incomes for that category.

        2.4 Transaction Categories:
        A transaction category specifically defines a transaction and
        is the central feature of SOAR.  A transaction category can be
        an inventory item you sell, an hourly charge for a service, a
        fixed charge for task, or a variable charge.  Each transaction
        category is composed of the following:

          1. Category Number: A number assigned by SOAR when the
             category is created and is used to reference the category
             for entering transactions or changing the category data.

          2. Title:  Wording that will be printed on the bill and
             describes the transaction.  For example, "hrs Consulting",
             "widgets @ $4.00 each" and "bxs computer paper" are all
             valid titles.  There are some special features of the
             title that are more fully described later in this
             document.

          3. Charge Factor:  A unit charge associated with the
             category.  The actual charge applied to a customer is the
             charge factor of the transaction category times the
             amount/quantity entered with the transaction.  Or,
                   AMOUNT = CHARGE FACTOR X (AMOUNT/QUANTITY)
             For example, if you sell three widgets then the trans-
             action category defines the price per widget (Charge
             Factor) and the quantity sold is entered as part of the
             transaction.  The total price is the quantity sold times
             the unit price.


                                    Page 4                                    






                               SOAR USERS GUIDE                               
        




             If the transaction category defines an inventory item or
             fixed price charge, the charge factor is the price.  If
             this represents a service based on an hourly charge, then
             the charge factor is the hourly rate.  If this is a var-
             iable item, then a charge factor of 1.0 is entered.  A
             charge factor of 0 can be entered to indicate a service or
             action for which no charge is to be applied.

          4. Taxable:  Informs SOAR whether or not to apply sales tax
             to the transaction.  In California, for example, most
             retail sales have a sales tax applied.  However, time-
             based services do not have a sales tax applied.  The
             amount of tax is derived from the sales tax rate in the
             system file and the amount of the transaction.

          5. Automatic Billing:  Tells SOAR whether or not to auto-
             matically bill a customer each billing period.  Suppose
             you provide a service to Ajax Company for a fixed fee of
             $150 per month.  You would create a transaction category
             for that service and enter a Charge Factor of $150,
             indicate Automatic Billing, and specify Ajax Company to
             bill each billing period.

          6. Bill To:  When you specify Automatic Billing you must
             also specify the customer to bill.  This is entered as
             the customer id or reference.  The customer id will be
             discussed in more detail later.

          7. Summary Category Number:  Every transaction must report to
             a summary category.  Using the Ajax Company example above,
             the Summary Category Number would be the one you set aside
             for SERVICE.  If this were a taxable sale item, it would
             report to 7, TAXABLE SALES.

        Transaction Categories also contain fields that indicate the
        number of times used, the total quantity, and the total amount.
        As transactions are posted, the transaction category they ref-
        erence is updated.  If a transaction category refers to an
        inventory item, you can tell at a glance the number of items
        sold.  If it refers to an hourly charge, you can tell how many
        hours of this work have been done.  The transaction category
        concept may at first appear cumbersome, but you will find it to
        be very easy to use and will provide you with meaningful data.


        2.5 Charge or Payment Transactions:
        Once you have defined your customer base, created summary
        categories, and defined transaction categories then all pay-
        ments or charges are entered as transactions.  Transactions are
        entered by specifying the customer, transaction date, trans-
        action category number, and quantity or amount.  You may also


                                    Page 5                                    






                               SOAR USERS GUIDE                               
        



        enter a comment that becomes a permanent part of the trans-
        action.  An example of what appears on the screen during
        transaction entry is shown below.

                  Customer Id: AJAX            Record No: 21
               1. Date (MM/DD/YY): 03/11/87
               2. Transaction Category:   20
                  Description: Miscellaneous Taxable Sales
               3. Amount or Quantity:    12.95
                  Taxable (Y or N): Y
               4. Comment: 1 ea Widget
                  Sales Tax:   0.78       Amount:      12.95

        In the example, a transaction category (number 20) was defined
        to be 'Miscellaneous Taxable Sales" with a Charge Factor of 1.
        Therefore, the amount of the transaction was entered (12.95)
        and a comment was used to identify what the sale was.  This
        makes use of what is called a "variable transaction category".
        Note that SOAR computed the sales tax since the transaction
        category was defined to be "Taxable".  Also note that the lines
        with numbers preceeding them can be changed during entry.  All
        other data are supplied by SOAR either from the transaction
        category record or by computation.

        You do not have to memorize all transaction categories since
        SOAR provides you with a windowed list that can be scrolled
        during transaction entry.


        2.6 Transaction Interactions:
        As you enter transactions the following actions take place:

          1. When you enter a customer id, SOAR quickly checks to see
             that there is such a customer on file.
          2. When you specify the date, SOAR checks to see that it is a
             valid date.
          3. When you specify the Transaction Category, SOAR checks to
             see that such a category exists and that you may manually
             use it; i.e., automatic billing transaction categories
             cannot be entered manually ... only SOAR can do this. SOAR
             then displays the Transaction Category Title and whether
             or not it is taxable.
          4. When you specify the quantity or amount, SOAR computes the
             total amount and sales tax (if any).  Note that the total
             amount is the quantity or amount you entered times the
             Charge Factor in the Transaction Category record.
          5. The transaction record is added to the current transaction
             file.  This file should contain only the current billing
             period transactions (charges and payments).





                                    Page 6                                    






                               SOAR USERS GUIDE                               




        When you apply late charges the following actions occur:

          1.  Payments are automatically posted to ensure that the
              customer's payments are applied before late charges are
              computed.  The customer records are scanned for past due
              amounts.  A late charge corresponding to the past due
              amount times the late charge rate (in the customer
              record) is appended to the transaction file.  If the
              late charge rate is zero, but there is still a past due
              amount, then an entry is still made to ensure that the
              customer is billed.

        When you post charges or payments the following actions occur:

          1. The Transaction Category is updated to reflect this
             transaction in the times used, quantity, and total.
          2. The Summary Category (specified as part of the Trans-
             action Category record) is updated to reflect the amount
             of the transaction.
          3. The customer record is updated.  If the transaction is a
             payment then it is applied against the Past Due Balance
             and the Present Balance and the payment history data is
             updated.  If the transaction is a charge, then the Current
             Charges figure is updated.
          4. The transaction record is marked to show that it has been
             posted.

        When you bill a customer the following actions occur:

          1.  The transaction file is sorted by customer and date.
          2.  The transaction record is marked to show that it has been
              billed and prevents multiple billing.
          3.  A bill for the specified customer(s) is prepared.  This
              can be printed and/or filed on disk.
          4.  A billing summary and register are prepared as disk files
              that can be printed from the REPORTS MENU.

        When you perform End of Period Processing the following occurs:

          1.  Automatic Billing flags in the Transaction Category
              records are cleared.  You can only automatically bill
              once each billing period.
          2.  Customer records are updated such that:
                if the Present Balance is positive (they owe you)
                  Past Due Balance = Old Past Due + Old Present Balance
                  Present Balance = Current Charges
                  Current Charges = 0.00
                if the Present Balance is negative (they have a credit)
                  Past Due Balance = 0.00
                  Present Balance = Current Charges - Credits
                  Current Charges = 0.00



                                    Page 7                                    






                               SOAR USERS GUIDE                               
        


                                   SECTION 3
                              CREATING CATEGORIES


        If you skipped Section 2 you really should go back and read
        it.  We are about to setup SOAR so it will run on your
        computer.  You need to understand the meaning and utility of
        Summary Categories and Transaction Categories since we are
        about to set them up for your business.


        3.1 Selecting Summary Categories:
        Before actually running SOAR it is best to do some paperwork
        and select the Summary Categories you are going to use.  You
        can always go back and change these at a later time, but it is
        best to try to select the ones you will need now.  Summary Cat-
        agories are needed for INCOME and CHARGES.


        3.1.1 Income Categories:
        SOAR provides up to six income categories that can be used to
        summarize the income portions of your business.  Category 1 is
        predefined as PAYMENTS and is used whenever you receive a pay-
        ment from a customer.  Some other income categories you might
        consider include:

                 CREDITS ....... To summarize any credits given to
                                 customers for whatever reason.

                 DEPOSITS ...... Summarizing deposits received for
                                 equipment, goods, or whatever.

                 DISCOUNTS ..... Since discounts are considered as
                                 income, you might wish to create a
                                 category for this so you have an
                                 instant record of discounts given.

        Write your income categories down on a piece of paper and look
        over your list to see if there are any other categories you
        wish to add.  Once you are satisfied with your list, proceed to
        the next section.


        3.1.2 Charge Categories:
        SOAR provides up to 16 charge categories to be used to identify
        the source of your income.  Four of these categories are pre-
        defined by SOAR as:

                         7 ... TAXABLE SALES
                         8 ... TAX EXEMPT SALES
                        21 ... SALES TAX
                        22 ... SERVICE CHARGES



                                    Page 8                                    






                               SOAR USERS GUIDE                               




        Category 7 totals all sales requiring sales tax and can be used
        for filing your sales tax reports.  Note that this category
        DOES NOT include the tax charged for a transaction; Category 21
        summarizes all taxes charged.  Thus, you instantly have the
        sales tax picture of your business readily at hand.

        Category 8 is used for customers that are exempt from sales
        tax.  This might include government agencies or customers with
        resale permits that allow them to buy from you without paying
        sales tax.

        Category 22 reflects the service or late charges you apply
        against customers with past due amounts.  SOAR treats a service
        charge as any other transaction but summarizes the total in
        this category.

        You may now select any of the categories between 9 and 20 to
        summarize your sources of income other than taxable sales.  You
        should jot these down on a piece of paper and give them some
        serious thought.  Some categories you might consider are:

                 REPAIR ......... Summarize repair charges involving
                                  labor or fixed fees.
                 SERVICE ........ If your business provides a service
                                  to your customers.
                 SHIPPING ....... If your business requires you to ship
                                  items to customers at their expense.
                 TRAINING ....... Does your business provide training
                                  services to customers?
                 CONSULTING ..... If you do any kind of consulting,
                                  summarize it here.
                 MISCELLANEOUS .. Always a good one because something
                                  is going to come up that you can't
                                  tie to an existing category.

        It is your business, so decide how you want it summarized so
        you can instantly see how much of your income is tied to cer-
        tain areas of effort.  Review your choices and, when you are
        satisfied, proceed to the next section.


        3.2 Transaction Categories:
        Transaction Categories, as described in Section 2, are a major
        feature of SOAR.  Some general guidelines will be presented,
        but you must decide the categories that make sense for your
        business.

        3.2.1 General Purpose Categories:
        There are many transactions that fall into a general category
        and need no further resolution.  For example, PAYMENT RECEIVED
        is a general purpose category that can be used whenever a
        customer makes a payment.  Another general purpose category is


                                    Page 9                                    






                               SOAR USERS GUIDE                               
        


        MISCELLANEOUS TAXABLE SALES and is used for the sale of items
        for which a specific category has not been established.  Ex-
        amples of general purpose categories used by the author are:

                 Payment Received ... THANK YOU
                 Credits Applied
                 Deposit Received ... THANK YOU
                 Credit Adjustment to Account
                 ' Note
                 Software Sales
                 Hardware Sales
                 -hrs Consulting @ $80/hr
                 Miscellaneous Taxable Sales

        The list above is actually the title line that would be printed
        on a bill.  The first character of a title can have a special
        meaning and will be discussed in a later section when we
        actually enter the Transaction Categories.  However, it must be
        pointed out that you can create a category that can be used to
        include a special message or note to a customer.  This category
        will not print the title line or the amount, but will only
        print what you enter in the comment field for a transaction.

        Thus far the Transaction Categories look very similar to the
        Summary Categories.  This is because we are dealing with
        general purpose categories.  Also remember that a transaction
        is entered via a transaction category and reports to a summary
        category.  In many cases the totals accumulated for a
        transaction category will be the same as for a summary
        category; e.g., Payment Received ... THANK YOU should have the
        same cumulative total as Summary Category 1, PAYMENTS.


        3.2.2 Specific Transaction Categories:
        Specific transaction categories include inventory items, fixed
        price services or tasks, and automatic billing items.  Inven-
        tory items can be assigned a unique transaction category such
        that a transaction merely references the category and the
        quantity sold.  Fixed price services or tasks includes those
        things you do for a fixed amount.  For example, a maintenance
        firm might clean a swimming pool for a fixed cost.  Therefore,
        a transaction category would be setup for Pool Cleaning and the
        cost entered as the Charge Factor.

        Automatic Billing is important to businesses that provide a
        service to a customer on a regular basis and receive a fixed
        amount for that service.  This could include retainers, service
        contracts, day-care centers, building or yard maintenance, and
        so on.  Each customer to be automatically billed would have a
        transaction category created with the amount entered as the
        Charge Factor.




                                   Page 10                                    






                               SOAR USERS GUIDE                               




        Some examples of specific transaction categories are:

                 DFS Shipping & Handling
                 Smith's Monthly Pool Service
                 -bx DF51-4 Multi Form
                 _ea Printer Ribbons

        An automatic billing transaction category is shown as the
        second example.  The monthly cost to service Smith's swimming
        pool is entered as the Charge Factor.

        The third example is for an inventory item sold in units of
        boxes.  The leading hyphen informs SOAR to include the quantity
        as part of the transaction description.  If two boxes were
        sold, the transaction record (and bill) would read:

                 2 bx DF51-4 Multi Form

        The final example uses an underbar as the lead-in character and
        informs SOAR to print the quantity as part of the description
        line and to print the unit cost (Charge Factor) on the comment
        line of the transaction record.  If three ribbons were sold
        then the following would appear:

                 3 ea Printer Ribbons
                 Per Unit Price is $7.95


        3.2.3 Miscellaneous Transaction Categories:
        It was mentioned earlier that a personal note or message could
        be included as part of a customer's bill.  The single quote
        mark as the lead-in for a Transaction Category title informs
        SOAR that a message is forthcoming and not to include the
        Title, Charge Factor, Date, or Quantity in the transaction
        record.  The only thing included is the comment that is
        supplied when the transaction is entered.  A Transaction Cat-
        agory of this sort would look like:

                 'Note for customer

        The last special lead-in character to be discussed is the
        asterisk.  This tells SOAR to ignore the category since it is
        only being used as a filler.  Thus, a Transaction Category file
        can be built-up with fillers and then changed when a new
        category is needed.  For example,

                 * Just a Filler Record


        3.2.4 Partitioning Transaction Categories:
        The following suggestions are offered for setting up your



                                   Page 11                                    






                               SOAR USERS GUIDE                               
        



        Transaction Category file.  They are derived from the Author's
        experience and have worked quite well.

          1. Assign the first 20 categories for general purpose and
             miscellaneous uses.  These should be the most commonly
             used categories.  During transaction entry SOAR displays
             on a split screen 20 Transaction Categories at a time.
             The first 20 represent the first screen displayed.  You
             might use 1-9 for income purposes (e.g., Payment Received
             ... THANK YOU), number 10 for customer notes (e.g.,
             'Note), and 11-20 for general purpose uses such as -hrs
             Consulting @ $35/hr.  Please note that each Transaction
             Category must report to a Summary Category.  Therefore
             while compiling your list include the Summary Category
             and Charge Factor as part of the list.

          2. You should now group all your automatic billing categories
             together and enter them following the ones described
             above.  Leave some space (filler categories) for future
             growth.  While building your list keep including the
             Summary Category and the Charge Factor.

          3. Now organize all your fixed price inventory items.  Try to
             make a logical sequence by keeping similar items in the
             same numerical area.  For example, if you are selling
             three types of widgets, then put them in sequence in you
             list.  If there is a chance of adding more widgets, allow
             space by using fillers.


























                                   Page 12                                    






                               SOAR USERS GUIDE                               
        


                                   SECTION 4
                                GETTING STARTED


        This section describes the things you must do to get SOAR
        setup in your computer.  You should follow the procedures just
        as they are presented.


        4.1 Some Conventions:
        Throughout the remainder of this document the following
        conventions will be used:

             <E> ......... depress the ENTER key on your keyboard

             ESC ......... depress the ESC key on your keyboard

             <filename> .. the name you have given to a file without
                           the extension.  For example, a transaction
                           file might be given the name "JUL-87".  In
                           the computer directory this would be listed
                           as "JUL-87.TRN".  However, SOAR knows when
                           it is looking for a transaction file and
                           only requires the "JUL-87".


        4.2 SOAR Distribution Diskettes:
        SOAR is distributed on two 360K 5.25 inch floppy disks.  The
        following files are included on the disks:

        Disk Number 1:
          SOAR.EXE ........ The main SOAR program file and Main Menu.
          SOARUTL3.EXE ... SOAR utilities linked from the Main Menu.
          SOARTCM3.EXE .... Summary Category and Transaction Category
                            maintenance programs linked from the
                            Main Menu.
        Disk Number 2:
	     SOARCUS3.EXE .... Customer Maintenance programs linked from
			             the Main Menu
          SOARARM3.EXE .... Receivables Menu and Billing program.
          SOARTMU3.EXE .... Transaction Menu and transaction programs
                            linked from the Receivables Menu.
        Disk Number 3:
		CNVSOAR.EXE ..... Converts data from older versions of SOAR
          SOAR-1.DOC ...... This document.
          SOAR-2.DOC ...... More of this document.
          SOAR-3.DOC ...... And more of this document.
          READ.ME ......... How to get going and final notes.
          MAKEDOC.BAT ..... A batch file to print this document.
          FILES ........... A list of the distribution files.

        4.3 Making Copies of SOAR:
        It is recommended that you make working copies of the SOAR

                                   Page 13







                               SOAR USERS GUIDE




        distribution disks using the DOS DISKCOPY program.  Store your
        original disks in a safe place and use the copies from now on.

        DISKCOPY can be used as follows:
          Type
               DISKCOPY A: A: <E>   ... remember <E> is the ENTER key.
          Follow the instructions and make a copy of SOAR Distribution
          Disk number 1.  Then repeat the procedure for Disks 2 and 3.


        4.4 Installing SOAR For Your System:
        SOAR was designed to operate in a hard disk environment, but
        can be used in a floppy disk system.  Because of the number and
        size of the files, three 360K diskettes are required to hold the
        programs.  If you are using a high-density 1.2M floppy disk,
        all of the programs can easily fit on one disk.


        4.4.1 SOAR In A Hard Disk System:
        The following procedures will allow you to establish a separate
        sub-directory for SOAR and its data.

              1. Turn on your computer and go to the root directory.
                 After the DOS prompt type:

                              CD \ <E>

              2. Type:
                              MKDIR SOAR <E>
                              CD \SOAR <E>
                              MKDIR DATA <E>

                 The above sequence created a sub-directory titled
                 "SOAR" and a sub-directory within SOAR titled "DATA".

              3. Place your SOAR Distribution Disk #1 in floppy disk
                 drive A, close the door, and type:

                              COPY A:*.EXE . <E>

              4. Repeat the procedure for disks 2 and 3.  Install
                 the remaining distribution disks and type:

                              COPY A:*.EXE . <E>

                 All of the SOAR program files are now loaded into your
                 SOAR sub-directory along with some utility programs.

        This completes the initial installation of SOAR and you are
        ready to setup your data files.  Put your SOAR distribution
        disks in a safe place.  You may skip the following sections
        about floppy disk based systems and go directly to Section 4.5.


                                   Page 14






                               SOAR USERS GUIDE



        4.4.2  SOAR In A 360K Floppy Disk System:
        The performance of SOAR is greatly enhanced in a hard disk
        system.  If you do not have a hard disk, you should give some
        serious consideration to buying one.  However, since you want
        to operate this with floppy disks, the following allows you to
        do so.

	  1. Format three (3) floppy disks.  You may want to put
	     the operating system on the two to be used to hold the
	     program files.  The third floppy disk will be used to
	     setup the data files.

	  2. Create the program disks by putting Distribution Disk #1 in
	     drive B and a newly formatted disk in drive A.  Close the disk
	     doors and type:

                              COPY B:SOAR*.EXE A: <E>

	  3. Remove the diskette from Drive A and label it as SOAR
	     DISK #1.  Include the names of the files on the label.

	  4. Load a blank formatted diskette into Drive A and put
	     Distribution Disk #2 in Drive B.  Type:

                              COPY B:SOAR*.EXE A: <E>


	  5. Remove the diskette from Drive A and label it as SOAR
	     DISK #2.  Include the names of the files on the label.


	  6. Label the third disk as SOAR DATA DISK.  Put your SOAR
	     distribution disks in a safe place and proceed to
	     Section 4.5.



        4.4.3  SOAR In A 1.2M Floppy Disk System:
        A 1.2M floppy disk system will allow all the SOAR programs to
        fit on one disk and the other to be used for data.

              1. Format two (2) diskettes.  The one to be used as the
                 program disk should contain the DOS operating system.

              2. Place the SOAR Distribution Disk #1 in Drive B and a
                 blank formatted disk in Drive A.  Type:

                              COPY B:*.EXE . <E>







                                   Page 15






                               SOAR USERS GUIDE




	  3. Repeat the procedure with Distribution Disks #2 and #3.  For each
         of the remaining disks type:

                              COPY B:*.EXE . <E>

	  4. Remove the disk from Drive A and label it as your SOAR
	     PROGRAM DISK.

	  5. Label the remaining disk as SOAR DATA DISK.

        This completes the initial SOAR installation.  Put the
        distribution disks in a safe place and proceed to the next
        section.


        4.5 Setting Up The SOAR System File:
        SOAR needs to know how your system is configured and where to
        store and fetch data.  The system file contains the information
        used throughout SOAR.

        Hard Disk Users:  It is assumed that you are in the SOAR sub-
        directory.  If you would like to be able to start SOAR from the
        root directory, type the following:

                      CD \ <E>
                      COPY CON SOAR.BAT <E>
                      ECHO OFF <E>
                      CD SOAR <E>
                      SOAR <E>
                      CD \ <E>
                      F6 <E>

        Note that the last line, F6, means the function key on the left
        or top of your keyboard.  Now you can enter SOAR after bootup
        from the root by typing:

                      SOAR <E>


        Floppy Disk Users:  It is assumed that your program disk is in
        Drive A and that Drive B will be used for data.  If you are
        using 360K floppies, make sure that SOAR DISK #1 is in Drive A.
        If SOAR cannot find a program it is looking for, you will be
        prompted to load the disk containing the required file.  If you
        load the wrong disk, SOAR will exit to the operating system;
        i.e., SOAR will try the new disk once and then quit.  This is
        why you were asked to include the program names on the labels.







                                   Page 16                                    






                               SOAR USERS GUIDE                               




        4.5.1 Starting SOAR:
        OK, its been a long haul getting here but now you are ready to
        run the program and get the data files setup.  Type:

              SOAR <E>

        Once the program loads you should see the following message:

              A system file has not been found.  After depressing
              a key you will be transferred to the UTILITY MENU.

              Select option 1, System File Maintenance, to create a
              system file.  Key to CONTINUE ...

        You are now stuck!  You must create a system file to continue.
        Of course you could get out by turning off the power or re-
        booting the computer.  Lets create a system file.

        Note that the Utility Menu has a value of "0" after "Option:"
        at the bottom of the menu.  This is the default value and de-
        pressing the ENTER key will accept this value.  The use of
        defaults is widespread in SOAR to minimize your typing.

        To get to the System File Maintenance program type:   1 <E>

        You should now see a display similar to the one shown below.


                            SYSTEM FILE MAINTENANCE
           XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
           X   1. Company Name:                                       X
           X   2. Company Address 1:                                  X
           X   3. Company Address 2:                                  X
           X   4. Company City:                                       X
           X   5. Company State:                                      X
           X   6. Company ZIP:                                        X
           X   7. Company Telephone:                                  X
           X                                                          X
           X   8. Data Drive/Path Specification:                      X
           X   9. Mono or Color Display (M or C):                     X
           X  10. Preprinted Name on Statements (Y or N):             X
           X  11. Statement Format (A,B, or C):                       X
           X  12. Last Statement Number:                              X
           X  13. Sales Tax (e.g., .06)                               X
           XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
              Line to Change (0 when DONE):  0

        Type 1 <E> and enter your business or company name as you would
        like it printed on bills and reports.  You may use up to 25
        characters and they may be upper or lower case.  Note that you
        may edit your entry with the back-space key.  Also note that
        the highlighted area indicates how many characters you may use.


                                   Page 17                                    






                               SOAR USERS GUIDE                               
        


        Select 2 to enter your company address.  If you need an
        additional line, go on to change Company Address 2.  Continue
        entering your company information (1-7).  You can enter up to
        15 characters for your state (e.g., CA or CALIFORNIA) and you
        can use a 5-digit ZIP code with a 4 digit extension for line 6.

        Line 8 informs SOAR where your data files are to be located.
        This will depend on whether you are a hard disk or floppy disk
        user.
              Hard disk users:  If you created the suggested sub-
              directories enter:
                                             C:\SOAR\DATA\ <E>

              Otherwise, enter the drive/path specification leading to
              your data file.  SOAR assumes the program files are on
              the defalult drive in the current directory.

              Floppy disk users: Enter:       B: <E>
              Your data files will reside on Drive B.

        For line 9 enter an M if you are using a monochrome display 
        and a C if you are using an EGA compatible color display.

        Line 10 tells SOAR whether or not to print your company name
        and address at the top of the bills.  If you do not as yet have
        preprinted forms then enter "N".  Note, you may change this at
        any time should you wish to use preprinted billing forms.

        Line 11 allows you to select the billing format to be used in
        preparing your bills.  SOAR supports seven formats; two
        standard forms, a "generic" form, and others.  The forms are:

              A ... DF50 9.5 X 7 (8.5 X 7 detached).  Available in 1 or
                    carbonless 2 and 3 part sets.  Your company name
                    and address would be preprinted at the top.

              B ... DF51 9.5 X 11 (8.5 X 11 detached).  Available in 1
                    or carbonless 2, 3 and 4 part sets.  Your company
                    name and address would be preprinted at the top.

              C ... Bill is printed on 9.5 X 11 standard white computer
                    paper (8.5 X 11 detached).  SOAR will print your
                    company name and address at the top of the bill if
                    you answered "N" to line 10.

	      D - J ... Descriptions are in the Users Manual.

        The DF50 and DF51 forms and window envelopes may be ordered
        directly from:
                              Business Automation Co.
                              P.O. Box 1575
                              Ojai, CA  93023
                              (805) 646-1335




                                   Page 18                                    




                               SOAR USERS GUIDE



        Line 12 is for the LAST statement number you used on a bill.
        This must be a number (no letters) and is limited to 6 digits.
        You might use something like "870123" to indicate number 123 in
        the year 1987.  Remember this wants the LAST statement number,
        not the one you wish to start with.  If you want your first
        bill to be statement number 87000 then you must enter 86999.

        The final line, 13, sets your state and local sales tax.  This
        must be entered as a decimal.  For example, enter 6% as .06.
        SOAR only directly supports one sales tax; other methods are
        described in the manual for multiple sales taxes.

	    The second System Maintanance screen is fully described in the
        SOAR USERS MANUAL.

        This completes the setup of the system file.  Just press the
        ENTER key and you will save your system data and return to the
        Utility Menu.  At the Utility Menu depress the ENTER key (or
        hit the ESC key) and you will go to the SOAR Main Menu.  If you
        want to verify or change your system data you may do so by
        returning to the Utility Menu (6 at the Main Menu) and going to
        1, System File Maintenance.  The data you entered should be
        displayed.

        Floppy Disk Users:
        SOAR requires SOAR.SYS to be on the default drive when trying
        to run a program.  Therefore, if you are using 360K floppy
        disks, you need to copy the system file to all program disks.
        You should currently have SOAR Disk #1 in Drive A.  Put SOAR
        Disk #2 in Drive B and type:

                      COPY A:SOAR.SYS B:

        Please note that the Last Statement Number in the system file
        will only be updated on Disk #2; the disk containing the
        billing program.



















                                   Page 19                                    






                               SOAR USERS GUIDE
        

























































                                   Page 20                                    







```
{% endraw %}

## SOAR-3.DOC

{% raw %}
```
                               SOAR USERS GUIDE


                                   SECTION 5
                            BUILDING A CUSTOMER FILE


        Now that you have setup your system file, SOAR knows where to
        store and fetch the data for the other required files.  At this
        point it is best to add five or ten customers so you can get on
        with exploring the capabilities of SOAR.

        From the Main Menu select 3, Customer Maintenance.  SOAR will
        load the customer maintenance program and display the Customer
        Maintenance Menu.  You can see that you have five choices (not
        counting the EXIT choice) and these are fully described in the
        manual.  At this time we want to add customers so select option
        number 1.

        Start entering your customers and filling in the data described
        in the SOAR USERS MANUAL.  You will be prompted for every
        entry and given an opportunity of making changes before the
        data is saved.

        A few comments are in order concerning the various balances.
        SOAR uses the principal that anything billed today is due
        before the next billing period.  If you bill on a monthly basis
        then you expect payment before you bill again.  Therefore, Past
        Due Balance is that which has not been paid since the last
        billing period.  Using SMITH for an example,  assume that
        SMITH had $100 in charges in January and that you billed him on
        February 1st.  When the End of Billing Period processing was
        run after your billing, his Current Charges were set to zero
        and his Present Balance was set to $100.  SMITH did not make
        any payments in February.  Now, after billing on March 1st and
        running End of Billing Period processing the $100 was trans-
        ferred to Past Due Balance.

        Now is as good a time as any to discuss how payments are
        handled.  Whenever a payment transaction is entered and posted,
        the amount of the payment is first applied against the Past Due
        Balance.  Any remainder is applied against the Present Balance.
        Should a customer make a payment greater than their balance,
        then their Present Balance would be a negative number to in-
        dicate that they have a credit.


        5.1 Saving Your Customer Data:
        After completing the last entry  you will see a prompt on
        the screen "S to SAVE, C to CHANGE, A to ABORT:".  If the data
        is correct, enter S <E> and SOAR will save the data to the
        disk and prompt you for the next customer.  If you wish to make
        changes the enter C <E> and you will be prompted for the line
        number you wish to change.  After making all your changes, you
        would save the data by entering S <E>.  You may abort the
        program by entering ESC or A <E>.  All data previously saved is
        intact; you simply aborted from the current screen.


                                   Page 20                                    






                               SOAR USERS GUIDE                               



        After entering 5 or 10 customers you might like to leave the
        data entry mode and try the View or Change options on the
        Customer Maintenance Menu.  To exit, depress the ESC key.  You
        will then see a message flashed to the screen:

                              SORTING CUSTOMER.MAS

        SOAR keeps all customer records in ascending order by the
        customer id.  This is done to speed up accessing any customer
        in the file.  Once the sort is complete you will be returned to
        the Customer Maintenance Menu.  Return to the Main Menu by
        either accepting the default option or depressing the ESC key.











































                                   Page 21                                    






                               SOAR USERS GUIDE                               
        


                                   SECTION 6
                          ENTERING SUMMARY CATEGORIES


        Now that you have the system file setup and your customers
        entered, it is time to enter your Summary Categories.

           (1) At the Main Menu select 2, Category Maintenance.
           (2) At the Charge Maintenance Menu select 1, Summary
               Category Maintenance.

        The screen will now display all the empty summary categories
        and their associated totals.  Since this is a new file the only
        categories labeled are those created by SOAR; i.e., PAYMENTS,
        TAXABLE SALES, etc.

        Using the data you prepared after Sections 2 and 3, select the
        category you want to enter.  Enter the title and, if you have
        it, the year to date totals for this category.  Once you have
        entered all your summary categories, exit the program by
        accepting the default when prompted for a line to change.  The
        exit path from Summary Category Maintenance is to the Charge
        Maintenance Menu.

        You will probably want to make some changes to your summary
        categories after you have run SOAR for a while.  To do so, just
        follow the path from the Main Menu as described above.




























                                   Page 22                                    






                               SOAR USERS GUIDE                               
        


                                   SECTION 7
                      BUILDING A TRANSACTION CATEGORY FILE


        The final step in installing SOAR is creating the transaction
        categories you will use for entering payments and charges.
        If you skipped over Sections 2 and 3, please go back and read
        them so you have a good feel for the relationship between
        transactions and transaction categories.

        There are two ways in which a transaction category file can be
        created.  These are (1) creating a "block" of dummy categories
        and then changing them as needed, or, (2) creating (adding)
        categories one at a time.  Both methods will be described.


        7.1 Adding A Block of Categories:
        A suggestion was made in Section 3 for you to partition your
        transaction categories such that your most commonly used
        categories were at the start of the list, your automatic
        billing categories next, and your "inventory" or fixed price
        items last.  Using this strategy, you can create an initial
        block of categories with sufficient space to hold all your
        items.  However, make sure you have allowed enough room for
        growth in the lower numbered categories.

        As an example, suppose you think that you will need no more
        than 30 categories for commonly used charges; i.e., hours
        consulting, fixed price jobs, payments, etc.  To allow room for
        growth, reserve at least 50 or 60 categories for this purpose.

        If you have, for instance, 50 customers for which you perform
        a service and bill them automatically each month, then you
        should reserve at least 100 categories to allow for growth.
        Remember, each customer to be billed automatically requires a
        transaction category.

        The final partition will encompass the "things" that you sell
        such as supplies, plants, or whatever.  These are the retail
        or inventory items that are sold on a regular basis and for
        which you wish some historical data as well as simplifying a
        transaction entry.  Suppose you have 100 items that fall into
        this classification, then allow at least 200 categories in
        building the initial file.  Note that new blocks can be added
        at any time as you add new items.

        Based on the example above, you would need:

              Commonly used categories .......  60
              Automatic billing categories ... 100
              Inventory type categories ...... 200
                                              ----
                      Total required ......... 360


                                   Page 23                                    






                               SOAR USERS GUIDE                               
        


        Since this is an estimate, you would probable establish an
        initial block of 400-500 transaction categories.  This is done
        as follows:

              (1) At the Main Menu select 2, Category Maintenance
              (2) At the Charge Maintenance Menu select 2, Transaction
                  Category Maintenance
              (3) At the Transaction Category Maintenance Menu select
                  4, Add/Create TC Block

        SOAR will display the following message:

           This program allows you to create a transaction category
           file if one does not exist or to add to an existing file.
           Do you want to continue (Y or N):

        The default response is "N", so enter Y <E>, and you will be
        asked how many categories you wish to create.  The default is
        100.  Either accept the default (depress ENTER) or enter the
        number you require.  SOAR will then create a transaction
        category file with the specified number of dummy categories and
        return you to the Transaction Category Maintenance Menu.

        SOAR creates dummy categories with the following fields already
        filled in:
                      Title:              *
                      Charge Factor:      1.0
                      Taxable:            Y
                      Summary Category:   7 (TAXABLE SALES)

        Since these categories are not useable, you must now change
        them such that they can be used for entering transactions.  The
        transaction categories can be changed via the Category Maintenance
	Menu.  The SOAR USERS MANUAL contains detailed instructions.

        Enter a few more categories to have enough to experiment with.
        Don't worry about losing your work, you will save this initial
        work before experimenting with SOAR.  Exit from the program
        when you are ready by depressing the ESC key.  Remember, ESC
        will always get you out of a program and back to a previous
        menu.  If you do not wish to add a single category you may skip
        the next section and go on to Chapter 8.


        7.2 Adding A Single Category:
        If your business revolves around a very few types of trans-
        actions you can build your transaction category file one at a
        time.  This method has the drawback of not allowing "gaps" in
        the number sequence for adding new categories.  Therefore, you
        must be thorough when you prepare your list of categories.





                                   Page 24                                    







                               SOAR USERS GUIDE                               
        



                                   SECTION 8
                                 EXPLORING SOAR


        The most difficult part of any accounting program is setting up
        the data files.  You should have entered enough data to allow
        you to begin experimenting.  After experimenting you can go
        back and finish entering your customers and transaction
        categories.  Before continuing it would be best to get a hard
        copy of what has been done thus far.

	Go to the Main Menu and select 4, Reports Menu.  Make sure you have
	paper in the printer and properly aligned.  From the Reports Menu
	select reports for a Customer Master List, Transaction Categories,
	and Summary Categories.

        Carefully look over the reports for errors.  If an error is
        found, go to the appropriate menu and make corrections.


        8.1 Saving Your Work:
        You have gone to a lot of work in getting this far and it would
        be a shame to mess it up with the exploring and experimenting
        to follow.  You can protect your work by copying it onto a
        floppy disk and then restoring it when you are through
        exploring.  The procedures are different for hard disk and
        floppy disk users.  Exit SOAR by either <E> or ESC at the Main
        Menu.

        Hard Disk Users:
              (1) Go to the SOAR sub-directory by:  CD \SOAR <E>.
              (2) Put a freshly formatted diskette in Drive A.
              (3) Type:       COPY SOAR.SYS A: <E>
              (4) Type:       CD \DATA <E>
              (5) Type:       COPY CUSTOMER.MAS A: <E>
              (6) Type:       COPY *.CAT A: <E>
              (7) Type:       CD .. <E>

        Floppy Disk Users:
              (1) Put SOAR Disk #1 in Drive A.
              (2) Put a freshly formatted diskette in Drive B.
              (3) Type:       COPY A:SOAR.SYS B: <E>
              (4) Put your Data disk in Drive A.
              (5) Type:       COPY A:CUSTOMER.MAS B: <E>
              (6) Type:       COPY A:*.CAT B: <E>
              (7) Put SOAR Disk #1 in Drive A.

        All the data files have been copied to the floppy disk.  If you
        do a DIR A: <E> (DIR B: <E> for floppy users), you should see a
        list of the following files:



                                   Page 25







                               SOAR USERS GUIDE



              SOAR.SYS ......... Defines your system
              CUSTOMER.MAS ..... Your customer master file
              SUMMARY.CAT ...... Your Summary Categories
              TRANS.CAT ........ Your Transaction Categories

        Save this backup to restore the data files after exploring.  Go
        back to SOAR by typing SOAR <E>.  Floppy users should put their
        Data disk back into Drive B and SOAR Disk #2 in Drive A.


        8.2 Entering Transactions:
        Now there is something to work with!  SOAR uses the trans-
        actions you enter as the basis for crediting payments and
        applying charges.  To get a feeling what SOAR does with the
        data you should do the following:

	    Go to the Customer Maintenance Menu and:
	      (1) Give one customer a present balance.
	      (2) Give another customer a past due balance and make
		  sure the customer has a service charge rate (e.g.,
                  .015) so you can see how service charges work.
              (3) Give another customer a past due balance and a
                  service charge rate of 0.

        Go to the Transaction Menu by entering 1 <E> at the Receiv-
        ables Menu. To enter transactions, select 1 <E>.  You will be
        asked for a transaction file name.  Since this is your first entry,
        there are no transaction files.  If you had files but couldn't
        remember their names, just depress ENTER and SOAR will display
        the names of all transaction files it knows about.

        Transaction files should reflect the billing period you are
        currently using.  The author uses a scheme like "APR-87" as a
        transaction file for April, 1987.  For our exploring enter the
        following:    TEST <E>.

        Note: if there is already a file by that name SOAR will inform
        you and ask if you want to create a new one or append to the
        old one.  In almost all cases you will want to APPEND to the
        existing file; i.e., during a billing period you will keep
        adding to an existing file.

        You were also asked if you wished a control report.  This
        report will show all transactions entered and allow you a
        chance to review your transactions for correctness.  It is good
        practice to always get the control reports.

        You are now presented with the transaction entry screen and are
        prompted for the Customer ID.  Enter a customer that you have
        on file.  If the customer is not on file you will receive an
        error message.  Once you enter a Customer ID it will become the
        default value until a new customer is entered.


                                   Page 26







                               SOAR USERS GUIDE



        Next you are prompted for the transaction date.  The default
        is today's date.  You may either change it or accept the de-
        fault.  If you change the date, then the new date will be the
        default until it is changed again.

        The next required entry is the Transaction Category.  The
        bottom half of the screen displays the first 20 Transaction
        Categories.  You can move about your entire Transaction
        Category file using the cursor keys on the right of your key-
        board.  The keys work as follows:


              PgUp .....  Move up to the previous screen.
              PgDn .....  Move down to the next screen (next 20
                          categories will be displayed).
              Home .....  Go to the first screen.
              End ......  Go to the last screen (end of the transaction
                          file).
              Up .......  Up Arrow.  Move up one half of the way to the
                          first screen; e.g., the Transaction Category
                          numbers will be one half of those currently
                          displayed.
              Dn .......  Down Arrow.  Move one half of the way from
                          the current screen to the end of the file.
              CTRL PgUp   Move 100 categories toward the first screen.
              CTRL PgDn   Move 100 categories toward the last screen.

        The last two commands are executed by holding down the CTRL key
        (on the left of the keyboard) and then depressing the PgUp or
        PgDn key on the right of the keyboard.  Experiment with the
        keys and learn how to move about the file to see the trans-
        action categories.  Select a category for this transaction and
        enter its number.  For example if you are entering a payment
        and you have Transaction Category 1 as Payments Received, then
        enter 1 <E>.  SOAR will fill in the screen with the information
        it extracted from the transaction category.

        Now you are prompted to enter the amount or quantity of the
        transaction.  If this is a variable category (Payments, for
        example) enter the amount of the payment.  If this is an hourly
        charge, enter the number of hours.  If this is a fixed price,
        enter the quantity; e.g., 3 if you sold 3 widgets.

        SOAR will now display the complete transaction including total
        price (less taxes) and the taxes (if any).  You are now given
        the opportunity of changing any of the fields you entered.  If
        everything is correct, accept the default to SAVE the data.

        The last entry for a transaction is the comment field.  You may
        use this to include a comment on the transaction to give more
        information to the customer.  For example, this can be used to



                                   Page 27







                               SOAR USERS GUIDE




        identify what the 2 hours of consulting were for or what was
        purchased under a general Miscellaneous Taxable Sales category.
        If you do not wish to enter a comment, just press ENTER.

        For payments, the Comment field will be changed to a Check
        Number field.  If you enter a number it will be included in the
        customer file and on the bill.  If you wish not to include a
        check number, just depress ENTER.  You may also include any
        comment here provided it does not start with a digit (number).
        SOAR scans the comment field (check number field) for payment
        transactions and converts leading numbers to the check number
        for the payment.

        This completes your first transaction entry.  Easy wasn't it!
        You are now prompted for a new customer id.  The default is the
        customer you just entered; this simplifies multiple entries for
        the same customer.  Keep entering transactions until you have
        entered some for at least three or four customers.  You may
        exit this screen by entering ESC.  If you opted for a control
        report, you will be prompted to align the paper.  Depress a key
        and your control report will be printed.

        Scan the report for errors.  If there are errors you CANNOT
        correct them; this preserves all entries for audit purposes.
        However, you can DELETE the transaction if it has not been
        posted.  The transaction number is shown on the control report
        and this is what you use to delete a transaction.  You can do
        this through selection 4, Delete Transactions on the Trans-
        action Menu.

        Suppose you forgot to enter a transaction several days ago and
        you have since entered more transactions.  No problem, just go
        to Transaction Entry and enter the transaction using the
        correct transaction date.  SOAR will place all transactions in
        date order when bills are prepared.


        8.3 Posting Transactions:
        Posting is the process in SOAR where payments and charges are
        used to update the customer files and the summary categories.
        Once posted, a transaction cannot be deleted.  If an error was
        discovered AFTER posting, the only way to correct it is to
        generate an offsetting transaction; i.e., enter a payment or
        credit to cover the improper charge and vice versa.

        Some business post transactions at the end of a business day
        while others post after they are entered.  SOAR gives you the
        option of doing it which ever way you wish.  The author uses
        the second approach since customer files are therefore always
        up to date.  To post transactions, select the desired posting



                                   Page 28







                               SOAR USERS GUIDE





        option from the Transaction Menu.  For our experiment, enter 5,
        Post All Transactions.  You will be prompted for the trans-
        action file name and the option for a control report.  Enter
        the file name as TEST <E>.

        You may be interested to see what was done during posting.  Go
        to the Customer Maintenance Menu and VIEW one of the customers
        for which you entered transactions.  The customer file should
        have been updated with the new data.  Charges will be applied
        to the Current Charges Field and payments will be shown in the
        payment history portion of the record.


        8.4 Applying Automatic Charges:
        If you entered some transaction categories for automatic
        billing, you can have these added to the transaction file by
        selecting 2 at the Transaction Menu.  You will be prompted
        again for a file name and given the option of a control report.
        Automatic charges are like other charge transactions except
        they can only be applied once a billing period.  You will also
        be asked if you would like to include a comment with each
        transaction.  For instance if SMITH is automatically billed for
        some service you might want to include a comment such as:
                        Service for 3/87 to 4/87
        The comment will be part of the transaction and included in the
        bill.  As each automatic billing transaction is prepared you
        will be prompted with the customer id and a request for a
        comment.  If you don't want to include a comment for a part-
        icular customer, just depress ENTER.


        8.5 Applying Late Charges:
        You should always apply late charges even if you have not in-
        cluded a late charge percentage in the customer file.  This
        ensures that ALL customers with outstanding balances will be
        billed.  As you experiment with billing, note the difference
        in the bills for customers with a late charge percentage and
        those without.

        Before applying late charges you must be sure that all payment
        transactions have been entered.  This ensures that customers
        receive credit for payments.  SOAR will scan the transaction
        file before computing late charges to ensure that all payments
        have been posted.  However, SOAR cannot post what has not been
        entered.  The author uses the practice of entering transactions
        on a regular basis and applying late charges and again posting
        all transactions as the last action before preparing bills.





                                   Page 29







                               SOAR USERS GUIDE




        8.6 Preparing Bills:
        The whole purpose of any business is to make money.  This can't
        be done unless we provide bills to those for whom we do work,
        provide a service or sell goods.  Thus, SOAR was primarily
        developed to simplify the process of billing and to allow more
        time to be spent on the actual business of earning more money.
        SOAR serves this purpose well.

        You are ready to bill when you have entered all transactions,
        posted payments (and charges), applied automatic billing and
        late charges, and posted all payments and charges.  It may
        appear that there is a lot of posting going on, but it is one
        way to insure that things are properly entered and kept track
        of.  You can post as many times as you wish; if something has
        been posted once, it will not be posted again.

        To prepare bills, goto to the Receivables Menu and select 2, Billing.
        As in any of the SOAR modules that deal with transaction files,
        you will be asked for a file name and the option of a control
        report.  You may have wondered why SOAR keeps asking for a file
        name.  SOAR was designed such that you can have multiple trans-
        action files effective at the same time.  For example, you may
        have one file for out-of-state customers, another for this or
        another for that.  Since SOAR does not know how you are going
        to run your business, you are asked for a file name.

        SOAR now sorts the transaction file by customer, date and
        transaction number.  This means that all transactions will
        first be grouped by customer and then in date order for each
        customer.  Transactions entered for the same customer on the
        same date will be grouped in the same sequence as they were
        entered.  This was done to ensure, among other things, that
        comments and messages (' Note transaction categories) could be
        contiguous and not scrambled.

        You will now be asked a series of questions.  Answer them all, and
        the billing will be completed.  Details concerning these questions
        is fully described in the SOAR USERS MANUAL.

        After answering all these questions, SOAR will then process the
        transaction file and prepare the bills.  During processing a
        billing register and summary file are created or appended that
        give you a report of the bills prepared and a summary of where
        the charges or payments were directed (summary categories).

        Using the experimental data you have been tinkering with,
        prepare some bills.  This is what you have been striving for
        these last 30 pages or so.  You should have found the billing
        to be easy and painless.  It takes almost more time to fold,
        stuff, and stamp the bills than it does to prepare them!



                                   Page 30







                               SOAR USERS GUIDE




        8.7 End of Period Processing:
        Once bills have been prepared it is necessary to inform SOAR
        that there are no more payments or charges forthcoming this
        billing period and to update the customer and automatic trans-
        action categories.  End of Period adds the Present Balance to
        the Past Due, replaces the Present Balance with Current Charges
        and zeros the Current Charges.  End of Period also clears the
        billed flag from the automatic billing transaction categories
        so they can be used during the next billing period.

        To perform End of Period, select 3 from the Receivables Menu.
        From the End of Period Menu, select 1, End of Billing Period.
        Thats all there is!


        8.8 More Exploring:
        Thus far you have been exposed to all the menus of SOAR.  It is
        not possible to discuss all the features in a USERS GUIDE.  You
        are encouraged to become a registered user and to receive the
        manual describing SOAR in greater detail.  Besides, it gives
        the author a warm feeling to be able to put money in the bank.

        So, experiment with SOAR and learn what it can do.  When you
        feel comfortable, go to the next section and begin to use SOAR
        for your billing.
                                   



























                                    Page 31







                               SOAR USERS GUIDE                               
        



                                   SECTION 9
                        PHASING SOAR INTO YOUR BUSINESS


        Hopefully you have explored SOAR sufficiently to feel comfor-
        table with it and to find it of use.  Now you can get rid of
        the files created while exploring and restore your original
        files to put SOAR to work.

        The first thing we must do is purge the system of the data
        files created during the evaluation.  Again, this is different
        for hard disk users than it is for floppy users.

        Hard Disk Users:
              (1) Exit SOAR from the Main Menu by <E> or ESC.
              (2) Type:       CD \SOAR <E>
              (3) Type:       ERASE SOAR.SYS <E>
              (4) Type:       CD \DATA <E>
              (5) Type:       ERASE CUSTOMER>MAS <E>
              (6) Type:       ERASE *.CAT <E>
              (7) Type:       ERASE TEST.* <E>

              (8) Load your copy of your original files into Drive A.
              (9) Type:       COPY A:CUSTOMER.MAS . <E>
             (10) Type:       COPY A:*.CAT . <E>
             (11) Type:       CD .. <E>
             (12) Type:       COPY A:SOAR.SYS . <E>

        Your original files are now restored and you are ready to pro-
        ceed to Section 9.1.

        Floppy Disk Users:
              (1) Exit SOAR from the Main Menu by <E> or ESC.
              (2) Type:       ERASE B:*.CAT <E>
              (3) Type:       ERASE B:CUSTOMER.MAS <E>
              (4) Type:       ERASE B:TEST.* <E>
              (5) Type:       ERASE A:SOAR.SYS <E>   This assumes that
                                      SOAR Disk #2 is in Drive A.
              (6) Load you copy of your original files into Drive B.
              (7) Type:       COPY B:SOAR.SYS A: <E>
              (8) Load your SOAR Disk #1 in Drive A.
              (9) Type:       COPY B:SOAR.SYS A: <E>
             (10) Load your Data disk into Drive A.
             (11) Type:       COPY B:CUSTOMER.MAS A: <E>
             (12) Type:       COPY B:*.CAT A: <E>
             (13) Put your Data disk in Drive B and SOAR Disk #1 in
                  Drive A and proceed to the next section.







                                   Page 32                                   






                               SOAR USERS GUIDE                               



        9.1 Completing Your Data Files:
        You are back to where you were when you started experimenting.
        You must now continue entering the rest of your customers and
        the transaction categories you will initially be using.  You
        have experience at this so it shouldn't be a problem; just time
        consuming and frustrating (at times).

        You actually have two ways of completing your data files.
        These are (1) all at once in a binge of data entry, and (2) as
        you need them during transaction entry.  Perhaps the best way
        is to compromise; i.e., enter those customers and categories
        you KNOW you will definitely need.  Then, as new customers or
        categories come up, enter them before entering transactions.


        9.2 Running Parallel:
        Once your data is setup, you should start using SOAR for
        entering transactions.  However, since this is a new step for
        you, it is best to keep doing it the "old" way until you have
        gained experience and confidence.  If you make errors, you can
        correct them through one of the SOAR menus.  The key thing is
        to track SOAR with your manual method and see if it is any
        easier, saves you time, and gives you the management informa-
        tion you need to run your business.  If it does these things
        then you certainly should be a registered user.  A registration
        form is included at the end of this GUIDE just for this reason.





























                                   Page 33                                    






                               SOAR USERS GUIDE                               
        


                                   SECTION 10
                             HOW OFTEN TO USE SOAR


        There is no absolute guide as to how often you must do certain
        things.  The guidelines following are based on the Author's ex-
        perience and are biased by the number of times he has been
        bitten by Murphy's Law.  You must make your decision based on
        the volumn of your business and the number of transactions
        your process.  If in doubt, do it often!

        10.1 Daily:
        Enter transactions as they occur.  Don't put it off; the surest
        way of forgetting to bill someone is to wait until tomorrow.
        Enter the transactions and review the reports to catch errors.
        Post as often as you think necessary.  If you don't know, then
        post as soon as you finish reviewing and correcting trans-
        actions just entered.

        Backup your data files after entering transactions and posting.
        There is nothing more frustrating than to lose your data and
        trying to enter it again.  You can backup your data files using
        the procedures defined earlier but including the command:

                      COPY <filename>.* A:

        All data files reside on the same drive or in the same
        directory as your customer and category files.  Floppy disk
        users should modify the command above for their system.  Note
        that <filename> refers to the name given to a transaction file
        during data entry.


        10.2 Monthly:
        End of month is traumatic for some people.  For SOAR it is a
        breeze!  Assuming you have been entering transactions on a
        regular basis, just do the following:

              (1) Apply Automatic Billing
              (2) Apply Late Charges (you did enter all payments?)
              (3) Post All Transactions
              (4) Backup you data files
              (5) Prepare bills
              (6) Perform End of Billing Period Processing
              (7) Generate the reports you need.

        Obviously you should be preparing reports as you go along, but
        it is important at the end of the month so you can gauge how
        well your business did this last month and make any necessary
        changes in your efforts.





                                   Page 34                                    






                               SOAR USERS GUIDE                               
        



        10.3 Yearly:
        End of year processing is a simple step that follows after end
        of month.  To do this simply do your normal End of Billing
        Period Processing as described above and then do End of Year
        processing.  These are done via the End of Period Menu.

        10.4 Final Note:
        The most important thing to stress is maintaining good copies
        of your data.  SOAR, and, for that matter any other program, is
        less likely to cause problems if you have backups of your data.
        When in doubt, back it up!  So often we get lazy and put off
        the FEW minutes to make copies of our data and spend hours or
        days trying to recover from some act of nature.  The easiest
        way to defeat Murphy is to have good copies of all your work.
        The author well remembers the work that went into writing a
        specialized interpreter in assembly language for testing
        electronics components.  He failed to backup his data on the
        day there was a major disk crash and lost six months of work.
        Of course there were hard copies, but these had to be keyed in
        by hand and took weeks.  Needless to say, there are lots of
        backups of SOAR in his office; the source code is over 150
        pages long and he is very slow at the keyboard...
































                                   Page 35                                    







                             SOAR REGISTRATION FORM


        As a registered owner of SOAR you will receive the latest
        version of SOAR, a complete SOAR manual, and notification of
        updates.



	      SOAR Registration at $59.00 ......... __________

              Shipping/Handling
                  $5.00 (U.S. and Canada)
                  $10.50 (outside the U.S.) ... __________

	      California residents add $3.54 tax .. __________

                                              --------------
              Total Amount Enclosed ........... __________



        Name:      ___________________________________________

        Company:   ___________________________________________

        Address:   ___________________________________________

        City:      ___________________________  State: _______

        ZIP:       ____________  Telephone: (____) ___________

	   TYPE OF COMPUTER:  ___________________________________

        DO YOU HAVE A HARD DISK: _____________________________


        Please send your check or money order to:

              E.B. Croson            or     Business Automation Co.
              438 Ave De La Vereda          P.O. Box 1575
              Ojai, CA  93023               Ojai, CA  93023

















                                                                       







```
{% endraw %}

## UTILITY.DOC

{% raw %}
```
				 SOAR UTILITIES

DROPCUST: Drop (delete) a customer from the SOAR master customer file.  This
program allows you to delete a customer without regard to present balance,
etc.  Copy the program into your SOAR directory and type: DROPCUST <ENTER>
Each customer will be displayed sequentially on the screen and you will be
asked whether or not to delete the customer.  Answer Y or N and include the
ENTER key.  You can have the program stop asking by entering an "x" or "X";
in this case the rest of the records will be copied as is to the new master
list.  You may abort the program at any time by depressing the ESC key.
When you are done, the old customer file will have the name "CUSTOMER.OLD"
and the new file "CUSTOMER.MAS".  Be sure you have a backup of your data
before running this program.

UNPOST: Once a transaction has been posted, it may not be edited or deleted.
UNPOST removes the posting flag from a transaction after it has been posted.
Summary Categories, the customer record, and the transaction category data
are restored to what they were before the transaction was posted.  Note that
if the transaction being unposted is a payment (summary category less than
7) then the program does not know which balance to adjust.  The scheme used
is to test the past due balance.  If the past due balance is greater than
zero then it is increased by the amount of the payment.  Otherwise, the
present balance is increased by the amount of the payment.  If the payment
was exactly equal to the past due balance, then you will have to change
the figures manually via Customer Maintenance.  Once a transaction has been
unposted, it can be deleted and a new transaction entered with correct data.
Load the program into your SOAR program directory and type:  UNPOST <ENTER>
You must know the transaction number to be unposted.  This can be obtained
through the Reports Menu (Transactions As Entered).

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1185

     Volume in drive A has no label
     Directory of A:\

    READ     ME       1187  10-16-88   1:01p
    SOAR-3   DOC     39934   4-18-89   7:25p
    MAKEDOC  BAT        75   5-23-87  11:39a
    CNVSOAR  DOC      1646  11-12-88  10:25p
    CNVSOAR  EXE     75237   1-19-89   8:10p
    DROPCUST EXE     63071  11-13-88  11:27a
    UNPOST   EXE     78585  11-15-88   9:39p
    UTILITY  DOC      1938  11-14-88   9:54a
    REBILL   EXE     16160   3-24-89   5:40p
    REBILL   DOC      3764   3-24-89   3:17a
    SOAR-1   DOC      8075   4-17-89  10:30p
    SOAR-2   DOC     49694   4-17-89  10:33p
    FILES             2014   4-17-89  10:41p
    UPDATE   308      8435   8-22-89  11:47p
    GO       BAT        38   8-07-87   4:03p
    GO       TXT       386  10-21-88   4:49p
    FILE1185 TXT      2100  12-05-89  11:37a
           17 file(s)     352339 bytes
                            2048 bytes free
