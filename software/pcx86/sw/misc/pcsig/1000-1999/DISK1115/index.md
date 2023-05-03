---
layout: page
title: "PC-SIG Diskette Library (Disk #1115)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1115/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1115"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "C-A-S-E ACCOUNTING"

    C-A-S-E ACCOUNTING offers a system of accounting functions that meet the
    needs of most small to mid-sized businesses.
    
    C-A-S-E maintains three journals: the general journal and two
    subsidiary journals, sales and payroll. Sales are recorded in the sales
    journal because all sales transactions are basically similar. Payroll
    transactions are recorded in the payroll journal because that provides
    confidentiality, if desired. Also, both kinds of transactions generate
    large numbers of detailed transactions with low dollar amounts, such as
    sales tax and deductions, that clutter up the general journal when
    entered individually. Totals for these two subsidiary journals are
    entered into the general journal whenever desired, usually at fixed
    accounting intervals.
    
    C-A-S-E also maintains files detailing the transactions for cases or
    projects (using the name that you use in your business), for invoices
    and credit sales, for employee pay and deductions, for payables, and for
    capital equipment. Whenever a transaction is entered through any of
    these systems, the appropriate information is fed to the others that are
    affected and to the appropriate journal. This information is readily
    available, either on the screen or in printed reports.
    
    C-A-S-E produces both the standard accounting reports and the
    management reports that are most useful to knowledge firms: sales
    journal, by profit line and tax class, between any two dates; payroll
    journal, by employee by month, with deductions, between any two dates;
    general journal, between any two dates. Transactions in any general
    journal account between any two dates, with totals and balance. C-A-S-E
    financial histories that detail every transaction for a case, line item
    by line item. These use an easy-to-remember coding system that enables
    you to match billings against expenses and partner's time. The total
    expenses, billings, partner's time, disbursements from retainers, unpaid
    invoices and balance are also shown. Accounts receivable, by invoice.
    Accounts payable, by commitment and by firm.
    
    This is a straightforward and professional accounting program with every
    feature the small business will need.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CASEMAN.DOC

{% raw %}
```















                                   C-A-S-E ACCOUNTING


                               ACCOUNTING FOR CONSULTANTS

                                  AND SMALL ENTERPRISES

                                IN THE KNOWLEDGE BUSINESS


                             for IBM-PC-compatible computers

                            Prepared For C-A-S-E Version 2.3




                                John Forester, M.S., P.E.















                                  Custom Cycle Fitments
                                    726 Madrone Ave.
                                   Sunnyvale CA 94086







                                                                           ii







                      The C-A-S-E program was written and developed
                             in dBase III+ from Ashton-Tate
                          and compiled with additional features
                                by Clipper from Nantucket










                                      Published by
                                  Custom Cycle Fitments
                                    726 Madrone Ave.
                                   Sunnyvale CA 94086

                                      408-734-9426

                                 Third Issue, April 1988
                                Fourth Issue, March 1989
                                Fifth Issue, October 1989
                               Sixth Issue, February 1990


                               C-A-S-E Programs and Manual
                     Copyright John Forester, 1987, 1988, 1989, 1990
                       The purchaser has purchased only a license
                            to use these software materials 
                            on one computer for one company.



            Copying  of the  C-A-S-E system  as a  unit from  the distributed
            disk,  consisting of its  program, its  data file  structures and
            this  manual, is permitted for purposes  of evaluation and trial.
            Those who decide to use it should pay a user license fee  of  $75
            to John Forester at the above address. 







                                                                          iii

                                    TABLE OF CONTENTS


            OVERVIEW  . . . . . . . . . . . . . . . . . . . . . . . . . .   1
              ACCOUNTING SYSTEM STRUCTURE   . . . . . . . . . . . . . . .   2
                JOURNALS  . . . . . . . . . . . . . . . . . . . . . . . .   2
                INFORMATION FILES   . . . . . . . . . . . . . . . . . . .   2
                REPORTS   . . . . . . . . . . . . . . . . . . . . . . . .   2
                DISPLAYS  . . . . . . . . . . . . . . . . . . . . . . . .   3
                PARTNERS & PROFIT CENTERS   . . . . . . . . . . . . . . .   3
                ACCOUNTING PERIODS  . . . . . . . . . . . . . . . . . . .   3
                ACCOUNTS  . . . . . . . . . . . . . . . . . . . . . . . .   3
                BALANCE SHEET AND INCOME STATEMENT  . . . . . . . . . . .   4
                PRIVACY OF INFORMATION  . . . . . . . . . . . . . . . . .   4
              TRANSACTION POSTING:  . . . . . . . . . . . . . . . . . . .   4
                THE FLOW OF FINANCIAL DATA  . . . . . . . . . . . . . . .   4
                CLOSE OF THE YEAR   . . . . . . . . . . . . . . . . . . .   5
                LONGEVITY OF RECORDS  . . . . . . . . . . . . . . . . . .   5
              AUTOMATIC PROCESSING OF CERTAIN TRANSACTIONS  . . . . . . .   5
                SALES CALCULATIONS  . . . . . . . . . . . . . . . . . . .   5
                CAPITAL EQUIPMENT FILE & CALCULATION OF DEPRECIATION  . .   5
                JOB OR CASE RECORDS   . . . . . . . . . . . . . . . . . .   6
                DEPOSITS OR RETAINERS FOR JOBS OR CASES   . . . . . . . .   6
                KNOWING THE TRANSACTIONS FOR AN ACCOUNT   . . . . . . . .   6
                CREDIT SALES AND INVOICES   . . . . . . . . . . . . . . .   6
                PAYABLES  . . . . . . . . . . . . . . . . . . . . . . . .   6
                PAYROLL   . . . . . . . . . . . . . . . . . . . . . . . .   6
                INVENTORY AND PHYSICAL INVENTORY  . . . . . . . . . . . .   7
                LABOR COST REPORTS  . . . . . . . . . . . . . . . . . . .   7
                ALLOCATION OF OVERHEAD  . . . . . . . . . . . . . . . . .   7
                DIVISION OF PROFITS   . . . . . . . . . . . . . . . . . .   7
                INCOME CALCULATION  . . . . . . . . . . . . . . . . . . .   8
                BILLING FOR PARTNERS' TIME, KNOWING TOTAL BILLED TIME   .   8
              BOOKKEEPING PRACTICES   . . . . . . . . . . . . . . . . . .   9
                BALANCING THE BOOKS   . . . . . . . . . . . . . . . . . .   9
                BOOKKEEPING: DEBITS AND CREDITS   . . . . . . . . . . .    10
              SOME ACCOUNTING PHILOSOPHY  . . . . . . . . . . . . . . .    11
              TECHNICAL SUPPORT   . . . . . . . . . . . . . . . . . . .    13

            INSTALLING THE C-A-S-E SYSTEM   . . . . . . . . . . . . . .    14
              BACKUP COPIES OF DISKS  . . . . . . . . . . . . . . . . .    14
              EQUIPMENT REQUIRED  . . . . . . . . . . . . . . . . . . .    14
              SCREEN DRIVERS - IBM & ANSI   . . . . . . . . . . . . . .    15
              MATERIALS REQUIRED  . . . . . . . . . . . . . . . . . . .    15
              KEYING IN DATA  . . . . . . . . . . . . . . . . . . . . .    15
                INSERT AND TYPEOVER   . . . . . . . . . . . . . . . . .    16
                UPPER AND LOWER CASE LETTERS  . . . . . . . . . . . . .    16







                                                                           iv
            C-A-S-E Table of Contents

                Y y N n T t F f   . . . . . . . . . . . . . . . . . . .    17
              FILE STRUCTURE AND DIRECTORIES FOR C-A-S-E  . . . . . . .    17
              C-A-S-E DISKS AND CONTENTS  . . . . . . . . . . . . . . .    17
              WHAT YOU NEED TO KNOW ABOUT DOS   . . . . . . . . . . . .    18
                FILE COMMANDS   . . . . . . . . . . . . . . . . . . . .    18
                DIRECTORY COMMANDS  . . . . . . . . . . . . . . . . . .    18
              WHAT YOU NEED TO KNOW ABOUT YOUR PRINTER  . . . . . . . .    19
              INSTALLING C-A-S-E IN A DUAL-FLOPPY SYSTEM  . . . . . . .    20
              INSTALLING C-A-S-E ON A HARD DISK SYSTEM  . . . . . . . .    21
                Direct Start & BAT Files  . . . . . . . . . . . . . . .    22
              ALL INSTALLATIONS   . . . . . . . . . . . . . . . . . . .    23
                ALLOWING SUFFICIENT FILES   . . . . . . . . . . . . . .    23
                TESTING THE STARTUP   . . . . . . . . . . . . . . . . .    23
              INSTALLING ADDRESS LABELS   . . . . . . . . . . . . . . .    23
              PRINTER SETTINGS  . . . . . . . . . . . . . . . . . . . .    24

            PRACTICING WITH A FICTITIOUS COMPANY  . . . . . . . . . . .    25

            OPERATING INSTRUCTIONS  . . . . . . . . . . . . . . . . . .    27
              MENU STRUCTURE  . . . . . . . . . . . . . . . . . . . . .    27
              SETTING UP THE SYSTEM FOR YOUR COMPANY  . . . . . . . . .    27
              YOUR BUSINESS: FIRM NAME, PARTNERS,  PROFIT LINES, PAY DEDUC-
                TIONS, COMPUTER OPERATIONS, PRINTER CONTROL ETC.  . . .    28
              SETTING UP THE ACCOUNTS   . . . . . . . . . . . . . . . .    30
                KEYING IN CHANGES TO THE ACCOUNT LIST   . . . . . . . .    30
                TYPES OF ACCOUNT  . . . . . . . . . . . . . . . . . . .    30
                ACCOUNT INSTRUCTION CODES   . . . . . . . . . . . . . .    31
                SUBSIDIARY AND CONTROL ACCOUNTS   . . . . . . . . . . .    32
              ADDING LINE ITEMS TO BALANCE SHEET AND INCOME STATEMENT      33
              PRINTING REPORTS  . . . . . . . . . . . . . . . . . . . .    33
              GENERAL JOURNAL SYSTEM  . . . . . . . . . . . . . . . . .    34
                TRANSACTION ENTRY   . . . . . . . . . . . . . . . . . .    34
                REPORTS AND DISPLAYS  . . . . . . . . . . . . . . . . .    34
                CORRECTIONS   . . . . . . . . . . . . . . . . . . . . .    34
                POSTING THE GENERAL JOURNAL TRANSACTIONS TO THE ACCOUNTS    35
              SALES JOURNAL SYSTEM  . . . . . . . . . . . . . . . . . .    35
                TRANSACTION ENTRY   . . . . . . . . . . . . . . . . . .    35
                REPORTS AND DISPLAYS  . . . . . . . . . . . . . . . . .    36
                POSTING   . . . . . . . . . . . . . . . . . . . . . . .    36
              INVOICES AND CREDIT SALES   . . . . . . . . . . . . . . .    36
                INVOICE FORMATS   . . . . . . . . . . . . . . . . . . .    36
                ISSUING AN INVOICE  . . . . . . . . . . . . . . . . . .    36
                ENTERING INVOICE DATA   . . . . . . . . . . . . . . . .    37
                PREARRANGED PAYMENT FROM RETAINER   . . . . . . . . . .    37
                PRINTING OF ADDRESS LABEL   . . . . . . . . . . . . . .    38
                RECEIPT OF PAYMENT  . . . . . . . . . . . . . . . . . .    38







                                                                            v
            C-A-S-E Table of Contents

              YOUR UNIT OF BUSINESS: PROJECTS, CASES OR WHATEVER  . . .    38
                USING JOB OR PROJECT FINANCIAL REPORTS  . . . . . . . .    38
                  Job Report Line Item Coding   . . . . . . . . . . . .    39
                  Job List  . . . . . . . . . . . . . . . . . . . . . .    39
              CAPITAL EQUIPMENT AND DEPRECIATION  . . . . . . . . . . .    39
                DATA ENTRY  . . . . . . . . . . . . . . . . . . . . . .    40
                DEPRECIATION CALCULATIONS   . . . . . . . . . . . . . .    40
                REVISIONS   . . . . . . . . . . . . . . . . . . . . . .    40
                DURATION OF RECORDS   . . . . . . . . . . . . . . . . .    40
                REPORTS AND DISPLAYS  . . . . . . . . . . . . . . . . .    40
              ACCOUNTS PAYABLE SYSTEM   . . . . . . . . . . . . . . . .    41
                TRANSACTION ENTRY   . . . . . . . . . . . . . . . . . .    41
                REPORTS AND DISPLAYS  . . . . . . . . . . . . . . . . .    41
              INVENTORY SYSTEM  . . . . . . . . . . . . . . . . . . . .    41
                TRANSACTION ENTRY   . . . . . . . . . . . . . . . . . .    42
                INVENTORY POLICY  . . . . . . . . . . . . . . . . . . .    42
                PHYSICAL INVENTORIES - CORRECTING THE INVENTORY VALUE      43
              PAYROLL SYSTEM  . . . . . . . . . . . . . . . . . . . . .    43
                TRANSACTION ENTRY   . . . . . . . . . . . . . . . . . .    44
                POSTING TO THE GENERAL JOURNAL  . . . . . . . . . . . .    44
                REPORTS AND DISPLAYS  . . . . . . . . . . . . . . . . .    44
                REVISIONS   . . . . . . . . . . . . . . . . . . . . . .    45
                LABOR COST REPORT   . . . . . . . . . . . . . . . . . .    45
              PRINTING JOURNAL BLANK SHEETS   . . . . . . . . . . . . .    45
              MAIL MERGE AND FORM LETTERS   . . . . . . . . . . . . . .    45
              TRANSACTION NUMBERS   . . . . . . . . . . . . . . . . . .    47
              MAKING BACKUP COPIES  . . . . . . . . . . . . . . . . . .    47
              CHOICES TO BE MADE WHEN STARTING UP   . . . . . . . . . .    48
                ONLY NEW JOBS [OR] ALL JOBS, NEW TRANSACTIONS [OR]
                  ALL JOBS, ALL TRANSACTIONS  . . . . . . . . . . . . .    48
                DATA TO BE INPUT WHEN STARTING UP   . . . . . . . . . .    48
                RESETTING TRANSACTION NUMBERS   . . . . . . . . . . . .    49
              EXAMPLES OF UNUSUAL TRANSACTIONS  . . . . . . . . . . . .    49
                CHOOSING THE PROPER ACCOUNT NUMBERS   . . . . . . . . .    49
                CHARGING PAID LABOR COSTS TO CASES  . . . . . . . . . .    49
                CHARGING PARTNER'S TIME TO JOBS   . . . . . . . . . . .    50
                SALES FROM OTHER PROFIT LINES   . . . . . . . . . . . .    50
                RECORDING PROFIT IN JOB RECORDS   . . . . . . . . . . .    50
                TRANSACTIONS WITH MORE THAN TWO ACCOUNTS  . . . . . . .    51
              CLOSING THE BOOKS   . . . . . . . . . . . . . . . . . . .    51
                CURRENT PERIOD  . . . . . . . . . . . . . . . . . . . .    51
                PERIOD CLOSING  . . . . . . . . . . . . . . . . . . . .    51
                ANNUAL CLOSING  . . . . . . . . . . . . . . . . . . . .    52
                DETAILED INSTRUCTIONS   . . . . . . . . . . . . . . . .    52
              RECLOSING THE BOOKS   . . . . . . . . . . . . . . . . . .    57







                                                                           vi
            C-A-S-E Table of Contents

            PASSWORD PROCEDURE  . . . . . . . . . . . . . . . . . . . .    58

            LIST OF FILES IN CASE SYSTEM  . . . . . . . . . . . . . . .    59
              DATA FILES ON THE C-A-S-E DATA DISK DIRECTORIES   . . . .    59
                PROGRAM FILES ON THE C-A-S-E DATA DISK DIRECTORY UTILPROG     60
                PROGRAM FILES ON THE C-A-S-E Program Disk   . . . . . .    60

            MENUS   . . . . . . . . . . . . . . . . . . . . . . . . . .    61

            INDEX   . . . . . . . . . . . . . . . . . . . . . . . . . .    71
















                                   C-A-S-E ACCOUNTING
                             CONSULTING AND SMALL ENTERPRISE
                                    ACCOUNTING SYSTEM

                                   INSTRUCTION MANUAL


                                        OVERVIEW

            A COMPUTERIZED ACCOUNTING SYSTEM
            SPECIALLY DESIGNED FOR SMALL FIRMS
            IN THE KNOWLEDGE BUSINESS
                  The  Consulting  and  Small  Enterprise  Accounting  System
            (C-A-S-E) does far more than keep records of sales and expenses.

                  First, it  makes your business easier to operate because it
            handles many of the details that otherwise clutter your time. All
            you have to do  is to  record the information  once, and  C-A-S-E
            copies  it  wherever  necessary  with  the  proper  organization,
            performs the  required calculations, and  returns the information
            to  you when you need  it in the  form you need to  see. When you
            prepare to bill a client  C-A-S-E presents to you all the history
            about past expenses and billings, so you can easily enter the new
            billings, which C-A-S-E turns into printed invoices for you. 

                  Second, C-A-S-E  does all the  accounting drudgery for you.
            Proprietors and  partnerships who provide  small project services
            such  as consulting  or designing  have special  accounting needs
            that formerly could be met only by large, complicated and  expen-
            sive  accounting systems.  Because of  this limitation  few small
            consultants properly accounted for their operations, most thereby
            losing some money by inaccurate reporting of expenses, failure to
            take allowable deductions, and simple failure to know the  finan-
            cial status of  each project. Those  that tried to keep  up spent
            too  much time  and effort  in  accounting operations,  yet their
            firms were too small to justify an accountant or even a full-time
            bookkeeper. C-A-S-E  makes  adequate accounting  much easier  and
            quicker  for firms of this type  and size, from the one-person or
            two partners  part-time firm to  the few  partners, few employees
            full-time firm.







                                                                            2
            C-A-S-E Overview

                  With C-A-S-E  the proprietor or  partner can rapidly obtain
            financial information about  the firm as a whole or  any project,
            credit  sale or  account. He  or she  can rapidly  enter all  the
            transactions  for a  small firm  and C-A-S-E  does all  the rest.
            C-A-S-E  produces  invoices and  case  reports  when  needed. The
            computations for closing the books or getting a quick to-date P &
            L take only a few minutes  once all the transactions are entered.
            Of course, the time for printing of journals and reports natural-
            ly  depends on  the number of transactions  and the  speed of the
            printer.


            ACCOUNTING SYSTEM STRUCTURE

            JOURNALS
                  C-A-S-E maintains three  journals: the General  Journal and
            two subsidiary journals, Sales and Payroll. Sales are recorded in
            the Sales  Journal because  all sales transactions  are basically
            similar. Payroll transactions are recorded in the Payroll Journal
            because  that  provides confidentiality,  if desired.  Also, both
            kinds of transactions generate large numbers of detailed transac-
            tions with low dollar amounts, such as sales tax and  deductions,
            that clutter  up the  General Journal when  entered individually.
            Totals  for these two  subsidiary journals  are entered  into the
            General  Journal whenever  desired, usually  at fixed  accounting
            intervals.

            INFORMATION FILES
                  C-A-S-E also maintains files detailing the transactions for
            cases or projects (using the name that you use in your business),
            for invoices and credit  sales, for employee pay and  deductions,
            for payables,  and for capital equipment.  Whenever a transaction
            is entered through any of these systems, the appropriate informa-
            tion is fed to the others that are affected  and to the appropri-
            ate journal. This information is readily available, either on the
            screen or in printed reports.

            REPORTS
                  C-A-S-E produces both the  standard accounting reports  and
            the management reports that are most useful to knowledge firms.

            Sales  Journal, by  profit line  and tax  class, between  any two
                  dates.

            Payroll Journal,  by employee by month,  with deductions, between
                  any two dates.







                                                                            3
            C-A-S-E Overview

            General Journal, between any two dates.

            Transactions  in  any General  Journal  Account  between  any two
                  dates, with totals and balance.

            Case  Financial Histories  that  detail every  transaction  for a
                  case, line item by line item. These use an easy-to-remember
                  coding system  that enables  you to  match billings against
                  expenses and partner's time.  The total expenses, billings,
                  partner's  time, disbursements  from retainers,  unpaid in-
                  voices and balance are also shown. 

            Accounts Receivable, by invoice.

            Accounts Payable, by commitment and by firm.

            DISPLAYS
                  C-A-S-E displays  the journals  and several  other types of
            transaction, but not the reports  that require analysis for their
            production. 

            PARTNERS & PROFIT CENTERS
                  C-A-S-E allows  for up  to  four partners  and up  to  four
            profit  centers or  profit lines,  plus an  overhead  center. The
            assignment   of  profit   centers  to   partners  is   completely
            selectable, so that any partner may be responsible for any profit
            center.

            ACCOUNTING PERIODS
                  C-A-S-E allows for 1, 2, 4, or 12 accounting periods in the
            year.  While a  quick-look  Income Statement  of  revenues versus
            expenses for  the period-to-date is  available at  any time, full
            Balance Sheets and Income  Statements are available only  for the
            end of any period.

            ACCOUNTS
                  999 general journal  accounts are  available (plus  another
            999 case  or project numbers). A few account numbers are taken up
            by accounts  that must  be used  for the  system to  operate; the
            others  are entirely  optional,  depending on  the  user's needs.
            While good  practice dictates that  similar accounts  ought to be
            grouped  together, such  grouping is  not  a  requirement of  the
            system. Any available account number can be used for any purpose.
            This  is possible because each account is coded with instructions
            that state  where the balance of  the account is to  be posted on
            the Income Statement,  the Balance Sheet,  or the  Federal Income







                                                                            4
            C-A-S-E Overview

            Statement.

            BALANCE SHEET AND INCOME STATEMENT
                  Both Balance Sheet and Income Statement may include a large
            number  of lines  according to  the user's  needs. Up to  99 line
            numbers  are available.  However,  in these  statements  the line
            numbers are grouped so that, in the Income Statement for example,
            sales or other revenues must be numbered between 1 and 9, expens-
            es between 10 and 89, and capital adjustments between 90  and 99.
            The Income  Statement is additionally divided  into four indepen-
            dent profit  centers and  one  overhead center,  so that  a  very
            detailed presentation  is possible  if desired.  Standard formats
            are provided that the user may change at will.

            PRIVACY OF INFORMATION
                  C-A-S-E  provides password  access protection,  if desired,
            for  the Payroll, Balance Sheet, Income Statement and Closing the
            Books modules. Passwords  may be selected and changed at  will by
            the authorized person,  and are stored in encrypted form  so that
            they cannot be  read. If password protection is not  desired, the
            password system automatically becomes invisible to the user.

            TRANSACTION POSTING:

            THE FLOW OF FINANCIAL DATA
                  Each  General  Journal  transaction  is  recorded with  its
            amount and the numbers of the accounts to be debited and credited
            according to standard accounting  practice. Each sale is recorded
            in the Sales Journal  with its tax class, sales  tax and shipping
            amounts.  Each  pay transaction  (one  employee,  one  period) is
            entered into the  Payroll Journal, where gross pay, net  pay, and
            up to seven kinds of deductions are recorded in one  transaction.
            Whenever ordered, the sales and pay transactions that are not yet
            posted to  the  General Journal  are summarized  and  the  totals
            posted  to the  General Journal.  Whenever ordered,  the unposted
            transactions in  the General  Journal are  posted to  the Current
            Period field  of the  Accounts.  Naturally,  there is  an  error-
            trapping  mechanism so  that  transactions with  nonvalid account
            numbers are held for correction and later posting.

                  At any time during the period C-A-S-E calculates and prints
            a quick-look Income Statement of revenues versus expenses for the
            current period from the Current Period field of the Accounts.

                  At the close of the period the Current Period Balances  are
            posted to the Year-to-Date field of each Account. From this field







                                                                            5
            C-A-S-E Overview

            the year-to-date amounts are posted to line items of the  Balance
            Sheet and the Income Statement  Files for that period,  according
            to  the codes  contained  in each  account record.  C-A-S-E  then
            computes and prints  the Balance  Sheet and the Income  Statement
            from that  information. Income Statements  are made  for both the
            year-to-date and the current period.

            CLOSE OF THE YEAR
                  At the close  of the accounting year (or other  period when
            you desire to completely close the books)  a new set of files  is
            opened for  current work. The  accounts for  the old year may  be
            worked  on during  the first  period of  the  new year.  When the
            accounts for  the  old  year  are  complete, C-A-S-E  copies  the
            appropriate year-end values to  become the initial values for the
            new year.  So long as the  books for the  new year have  not been
            closed for the end of the first period, C-A-S-E requires no other
            work  from you.  If the  books for  the  previous year  have been
            closed, correcting entries must  be made into the General Journal
            for the next year.

            LONGEVITY OF RECORDS
                  C-A-S-E  never  discards a  record.  Every  record  remains
            available  on the  disks  for  the accounting  years  (or shorter
            periods) for which that record was valid.  You can copy the files
            from the  old disk into the  directory for last year  and work on
            them just as  if they were today's. However, C-A-S-E  copies onto
            the  disk for the new year only those records that will be useful
            during the new year. Records of paid-up invoices, closed-out jobs
            or cases, employees who have been terminated and the like are not
            copied onto the disk  for the new year. This keeps the  volume of
            records down to the minimum necessary size.

            AUTOMATIC PROCESSING OF CERTAIN TRANSACTIONS
                  C-A-S-E provides  automatic processing for several  classes
            of transactions that are troublesome to do.

            SALES CALCULATIONS
                  C-A-S-E  maintains the Sales Journal. When recording sales,
            so  long as you  correctly enter the profit  line, project number
            and the tax class  of each item, C-A-S-E automatically  allocates
            sales to profit lines and projects  and totals the sales of  each
            class for each profit line. This enables you to operate different
            profit lines and many projects with no extra effort.

            CAPITAL EQUIPMENT FILE & CALCULATION OF DEPRECIATION
                  C-A-S-E maintains  the Capital  Equipment File  of cost and







                                                                            6
            C-A-S-E Overview

            life  information for  each  item of  capital  equipment. C-A-S-E
            calculates  the depreciation  of equipment  and makes  the appro-
            priate  General Journal  entries  at the  close of  each  period.
            C-A-S-E automatically allocates the depreciation for each item to
            the  appropriate  profit lines  according  to  a  table  that you
            select. When the depreciable life  of an item changes or the item
            dies before being  fully depreciated, C-A-S-E automatically makes
            different journal  entries to account for  this. All depreciation
            calculations are straight line. 

            JOB OR CASE RECORDS
                  C-A-S-E maintains financial records for each job or project
            for  the full  life of  that  job or  project.  It records  every
            expense,  revenue,  and  deposit  or  retainer. Upon  demand,  it
            reports all transactions and  the total costs  and revenues,  the
            contribution  of partner's  time, the  balances after  payment of
            invoices and the invoices as yet unpaid.

            DEPOSITS OR RETAINERS FOR JOBS OR CASES
                  C-A-S-E carries out your instructions for handling deposits
            or retainers,  applying them to  past invoices, to  the next  in-
            voice, to earned income or returning them, as you direct for each
            job  or case.  You don't  have to  enter special  transactions or
            worry about account numbers or debits and credits.

            KNOWING THE TRANSACTIONS FOR AN ACCOUNT
                  C-A-S-E provides  a report  of all the  transactions in any
            account  between any  two dates,  with totals  of the  debits and
            credits.  This enables  you  to rapidly  trace  down questionable
            transactions and to know how much activity there  has been in any
            account.

            CREDIT SALES AND INVOICES
                  C-A-S-E handles everything to do with credit sales, issuing
            invoices and receiving payment for them. All you have to do is to
            list the  items billed and  the payments received.  You can  also
            issue invoices as  detailed sales receipts for cash sales  if you
            want to.

            PAYABLES
                  C-A-S-E lists  payables and cancels them  as you enter pay-
            ments made. This is a simple system for accounting for items that
            you have ordered but not received or paid for yet.

            PAYROLL
                  C-A-S-E  maintains records  showing each  payment  of gross







                                                                            7
            C-A-S-E Overview

            pay, net  pay and each  type of deduction for  each employee, and
            the time spent on each profit line. It lists these and the totals
            of  these for each employee by month  and for year-to-date, as is
            required for deductions reporting. Each employee's report is on a
            separate sheet. In the same report it gives the same  information
            for all  employees for  each pay  period and  for each  month and
            year-to-date. From  the Payroll  Journal, C-A-S-E  summarizes the
            transactions  and makes  the appropriate  entries in  the General
            Journal whenever ordered.  C-A-S-E does not  automatically calcu-
            late how much the deductions ought to be; you must calculate them
            according to your own tables. 

            INVENTORY AND PHYSICAL INVENTORY
                  The value of the inventory for each product line is  recal-
            culated whenever the General  Journal is posted to  the accounts,
            based on the purchases to inventory and the issues from inventory
            that are recorded in the  General Journal. You have the option of
            recording  any purchase as  expense immediately,  which therefore
            doesn't  go through  the inventory.  The recalculated  values are
            perpetual, in  the sense  that they will  carry on  from year  to
            year.  However,  they must  be  periodically  verified  by taking
            physical inventories. C-A-S-E automatically corrects the invento-
            ry value  when any  physical  inventory is  made and  prepares  a
            General  Journal  entry that  corrects  the  inventory  value and
            adjusts the material used account to match.

            LABOR COST REPORTS
                  There are two types of labor cost report. From the  Payroll
            Journal, C-A-S-E  lists and  totals the  employee cost  for  each
            profit  line for each  pay period. From the  case records C-A-S-E
            lists  both the payroll  cost and the putative  cost of partner's
            time (which  is not  a legal  accounting cost) for  each case  or
            project, as incurred.

            ALLOCATION OF OVERHEAD
                  Overhead  expenses  are those  that  cannot  reasonably  be
            attributed to any  particular profit  line or  project.   C-A-S-E
            allocates overhead expenses to profit lines according  to the net
            profit before  overhead in  each profit line,  which is  probably
            about as fair as can be done.

            DIVISION OF PROFITS
                  C-A-S-E calculates  the profits  for each  product line and
            directs  those  profits  to  the  income account  of  the partner
            designated for that profit line.  If you wish the profits of some
            profit lines  to be  allocated to  particular  partners and  from







                                                                            8
            C-A-S-E Overview

            another profit line to be  divided between several partners, then
            establish a  fictitious partner's  name to represent  the several
            and divide the profits later.  

            INCOME CALCULATION
                  C-A-S-E  initially computes income by  computing the change
            in the net value of the firm  over the period and combining  this
            with the  amount of  capital contributed and withdrawn  over that
            same  period.   There  is  less likelihood  of error  using  this
            process because  it uses  only  a few  transactions that  can  be
            carefully supervised.  Then C-A-S-E prepares the income statement
            from revenues and expenses and calculates the difference, if any,
            between the incomes calculated  in both ways.  C-A-S-E  automati-
            cally calculates  the appropriate  adjustment that will  make the
            income calculated from the income statement equal that calculated
            from the balance  sheet. This appears in the Income  Statement at
            line 38 as Overhead Adjustment and in Account #299, OVHD  Expense
            Adjustment.  It should be zero.

                  If the Overhead Adjustment is not zero,  use your judgement
            about what  to do.  If it is a small amount, it may not be worth-
            while to chase down the  cause.  If it is a significant amount or
            if you  suspect systematic error  or chicanery, then  it must  be
            chased down.  Find the errors, enter correcting adjustments, post
            them  to the List  of Accounts and recalculate  first the Balance
            Sheet and then the Income Statement until the Overhead Adjustment
            is satisfactorily  small.  Because C-A-S-E  does these operations
            rapidly, you can repeat the process until you get a  satisfactory
            result.

            BILLING FOR PARTNERS' TIME, KNOWING TOTAL BILLED TIME
                  Accepted accounting principles don't allow  the expense for
            the time of  sole proprietors or of  partners to be entered  into
            the  expense accounts.   These persons  are rewarded  by profits;
            they are not paid a  salary or any fixed amount.  However, in the
            consulting business  you very frequently  bill for  your time, so
            you have to know how much you have put in on any project in order
            to know how much to  bill.  To solve this problem,  C-A-S-E has a
            special series of accounts, Nos  801 to 804, one for each partner
            to input the expense  of his time.  Whenever  any partner decides
            that he has provided X dollars of work for a project, he enters a
            transaction  saying what  he has done, when  he has  done it, the
            case number of the case or project, the dollar amount, and debits
            and credits  the same account,  #801 for  partner #1, etc.   This
            means that each partner's work account is always in balance  with
            itself, so it cannot affect the company's total value.   However,







                                                                            9
            C-A-S-E Overview

            since each entry is available to the project reporting system  it
            appears in the reports for  each case or project, so  the partner
            can  know how  much to  bill.   Also, the  entries are  available
            through  the  account activity  reporting  system,  so  that each
            partner can find out the total amount he ought to have billed for
            his own efforts on all cases or projects.

            BOOKKEEPING PRACTICES

            BALANCING THE BOOKS
                  Don't be mislead  by the phrase "Getting the Books  to Bal-
            ance."    Balancing  the  books merely  means  that debits  equal
            credits and is only  a test of  the consistency in entering  them
            and adding them up.   Since C-A-S-E takes one amount for a trans-
            action  and always adds  that amount to both  credits and debits,
            the books  are always balanced.  The books can  be unbalanced  by
            only one kind of error.  This is if you directly change the value
            of an asset or liability account in a way that is  not covered by
            a  transaction. If  this  occurs, C-A-S-E  compensates  for these
            errors at closing time by calculating the  compensating change in
            expense that  that change would  require, and posts  that to  the
            Overhead Adjustment Account.  By and  large, you should never  do
            this,  but always  make any  such changes  that are  necessary by
            entering  a correcting transaction.   If you suspect  that such a
            change has  occurred, either by  accident or by  design, you  can
            test it by  taking the account list for the end  of last year and
            by posting the current journals against those account balances to
            see if you end up with the same values that your current accounts
            show.  [For just one  account you can do it easier by  printing a
            report  of the  activity of  that account  for the  current year,
            which shows the net balance for the year to date, and adding that
            change  to last year's balance  for that account.]   If there are
            differences, then you have had non-transactional changes.

                  The accounts  are supposed to  reflect reality. Even though
            balanced,  they can  be  incorrect.  In entering  an  expense you
            should debit the appropriate expense  account and credit the Cash
            account.  If  in error  you debited  and  credited  two different
            expense  accounts, the  books will still balance.  They will show
            that some  expense was first assumed  to be of one  type and then
            was reclassified into another type. The  error will show up as  a
            deficiency in Cash; you will have less Cash than the  books show,
            by the amount of the expense transaction. You detect and  correct
            the errors by comparing the books against reality, not the debits
            and credits against each other.







                                                                           10
            C-A-S-E Overview

            BOOKKEEPING: DEBITS AND CREDITS
                  As  a start to using  debits and  credits properly, examine
            the  general  journal of  Sandoval and  Duerksen (the  firm whose
            accounts are in  the DEMODATA files of the C-A-S-E  Data Disk) to
            see examples of various  transactions. This gives you examples to
            copy, but you will need some theory as well.

                  To  operate any  accounting  system you  must  understand a
            little of  accounting  and bookkeeping  terminology.  Debits  and
            credits refer  to changes  in  the money  value of  the  company.
            Assets represent  the values of items  possessed, liabilities the
            values that  are owed  to others,  and capital  the value  of the
            owner's share. Capital  comes last; it is not the  value contrib-
            uted by  the owner but merely  the difference between  the sum of
            the  assets less the sum of  the liabilities. C =  A - L. Because
            bookkeeping  was  invented  when  adding  was much  simpler  than
            subtracting  (which couldn't  be  done manually  with  columns of
            numbers),  bookkeepers  and  accountants  look  at  this  formula
            differently as A = C + L. 

                  In  double-entry bookkeeping  all transactions  require two
            entries of  equal amounts in different accounts, arranged to keep
            the A = C + L equation in balance. You can add the same amount to
            both sides or subtract  the same amount  from both sides, or  you
            can add and subtract the same amount from only  one side. Accoun-
            tants simplify  this complexity  by saying that  each transaction
            must have equal debits and credits.

            DEBITS 
            A debit  is any  entry that  increases an  asset or  decreases  a
            liability or capital.
            When increasing  an asset  or decreasing  a liability,  debit the
            account.

            CREDITS
            A  credit is  any entry that  decreases an  asset or  increases a
            liability or capital.
            When  decreasing an asset or  increasing a liability,  credit the
            account.

                  Some transactions  merely trade  one asset  for another. If
            you spend cash to purchase a productive machine, you increase the
            equipment owned  account and decrease the  cash account, each  by
            the same amount.  Hence you debit equipment and credit  cash. You
            could  also exchange  items  on  the liability  side, as  when  a
            creditor accepts a share  in the  business in payment  of a  debt







                                                                           11
            C-A-S-E Overview

            that he  can't collect  in  any other  way. That  would  decrease
            liabilities  and  increase capital,  so you  would  debit  a debt
            account and credit a capital account. 

                  Other transactions  add or  subtract to both  sides. If you
            borrow  money to  buy  a productive  machine  you  increase  both
            liabilities and equipment owned. So you debit equipment (an asset
            account) and  credit  the debt  account (a  liability). When  you
            withdraw cash from  the business you decrease both Cash  and your
            Capital  account. The  rule then  says that  you credit  Cash and
            debit Capital.

                  However,  most transactions  involve expenses  or revenues,
            which are neither assets nor liabilities and whose presence makes
            it  difficult to determine  which account  should be  debited and
            which credited. When you pay the electric light bill you certain-
            ly decrease Cash,  but where is the asset  that might replace it?
            Similarly,  when you  bill  your  services to  a  customer, which
            certainly increases either Cash  or Accounts Receivable, what was
            the asset  that you sold or liability that  you incurred? To take
            care of  these we  have  two other  classes of  account,  expense
            accounts and  revenue accounts. Fortunately, nearly  all of these
            transactions have  an asset  or a  liability on  one side  or the
            other.  When you have  a sales or expense transaction,  don't try
            to figure out which account to debit and which to credit from the
            idea  of expense or  revenue changing the condition  of the firm,
            because your  guess will come out backwards. Look at the asset or
            liability that is being changed. When you pay cash for an expense
            item, Cash is  the asset that is decreased. Therefore  you credit
            Cash, which means that the expense account must be debited.  When
            you  bill  your services  you  increase  Accounts  Receivable, an
            asset. Therefore you debit  Accounts Receivable and therefore the
            Sales account must be credited. Remember, transactions arise that
            are contrary to normal practice.  You can refund a sale or cancel
            an expense. If you work from the  change in assets or liabilities
            you will  correctly identify debits  and credits  for expense and
            revenue accounts. 

            SOME ACCOUNTING PHILOSOPHY
                  A few words of philosophy are in order here. After all this
            talk about  balanced books through  double-entry bookkeeping,  it
            sounds contrary to say that you don't want the books  to balance.
            You want to trade one asset with less value for another, general-
            ly  Cash, with greater  value. That's the profit  in the venture.
            While  the books  "balance" through  the legerdemain  of expenses
            equalling  their costs  and sales  equalling their  revenues, you







                                                                           12
            C-A-S-E Overview

            want sales to be larger than expenses. Then assets increase  more
            than liabilities  and the difference  appears as  an increase  in
            capital, your profit. 

                  Discrepancies  in the books  are not the end  of the world.
            While bookkeeping is an exact process, accounting is far from  an
            exact science,  and in fact  too great a  concentration on  exact
            bookkeeping  hinders  proper  accounting.   Exact  bookkeeping is
            required to  prevent and catch theft,  and reasonably exact book-
            keeping is required to satisfy your obligations to your partners,
            if any, and to the  tax collectors.  However, the actual value of
            a business and, therefore, the actual profits it produces are not
            subject to accurate measurement.  For instance, what is the value
            of a  machine?   Almost for  certain, it  is not the  book value.
            What's the value of  your Accounts Receivable?   Even if all  the
            items will be  paid eventually, the actual value depends  on when
            each  item is paid, and  of course some may  never be paid.  In a
            partnership, accounting principles don't allow  the work contrib-
            uted by a partner to be included in the value of work-in-process,
            so that if you have  two identical items, one made by an employee
            and the other by a partner, they officially have different values
            based on different costs.

                  C-A-S-E produces two large benefits to its users.:

                  First,  C-A-S-E  reduces  the  fiddling,  trouble and  time
            required for  bookkeeping and  producing the reports  required by
            law.   In most cases, that  means that the proprietor  can do his
            own bookkeeping  without outside  expense and without  taking too
            much of his own valuable time.

                  Second, C-A-S-E produces the management information reports
            that enable  the small consultant  to do his  job better,  charge
            properly for  projects, and be as  certain as he  can be  that he
            gets paid.   These latter benefits are probably greater  than the
            first.







                                                                           13
            C-A-S-E Overview

            TECHNICAL SUPPORT
                  The program's  author will  answer  technical questions  by
            letter  or  phone  from  registered users  without  charge for  a
            reasonable time  after initial purchase to get the C-A-S-E system
            installed  and  operating in  their  firms.  Contact  him  at the
            following address:

                                      John Forester
                                  Custom Cycle Fitments
                                    726 Madrone Ave.
                                   Sunnyvale, CA 94086

                                      408-734-9426







                                                                           14







                              INSTALLING THE C-A-S-E SYSTEM

            BACKUP COPIES OF DISKS
                  The  Consulting and  Small Enterprise  Accounting (C-A-S-E)
            diskettes are not copy-protected but  they are copyrighted.  Upon
            receipt, copy  the original diskette  to a  working diskette  and
            store the original in a safe place.  The programs and data on the
            C-A-S-E diskette are copyrighted and may not be used elsewhere or
            copied  beyond the  copies  used  to protect  your own  data  and
            programs. The programs and data structures for the C-A-S-E system
            itself are copyrighted by John Forester of Custom  Cycle Fitments
            and licensed to  you for use on one  computer for the accounts of
            one company.

                  Custom Cycle Fitments retains title to and ownership of the
            C-A-S-E programs  and data structures. C-A-S-E  programs and data
            structures may  not be  modified without  the written consent  of
            Custom Cycle  Fitments. Copying beyond that  necessary for backup
            protection is a violation of the copyright laws.

                  How you copy from the working copy of the original  C-A-S-E
            disk  to the  disk for your  own work will depend  on whether you
            have a  dual floppy system or  a hard disk  system. See  your DOS
            instruction manual for the Diskcopy command.

            EQUIPMENT REQUIRED
                  C-A-S-E requires the following equipment:
            IBM-PC compatible computer with at least the following:

            465K of memory;

            Two 360K floppy disk drives or one floppy drive and a hard disk;

            Printer with  at least 120  columns. If it has  12 characters per
                  inch, all reports and  documents can be made  on 8-1/2 x 11
                  inch paper, while if it has 10 characters per inch you will
                  require 14-7/8 inch wide paper for reports.

            On  a dual-floppy system, one floppy drive will contain programs,
                  the  other data.  A 360K  floppy disk  has the  capacity of
                  about  2000 C-A-S-E transactions,  which average  about 150







                                                                           15
            C-A-S-E Installation

                  bytes per transaction,  depending on the mix of transaction
                  types.

            SCREEN DRIVERS - IBM & ANSI
                  The standard  C-A-S-E program  is designed  to provide good
            displays and intuitive cursor controls with  the IBM-PC and close
            compatibles. When you  press a cursor arrow key the  cursor moves
            without changing the information that is displayed. However, some
            similar machines don't use the IBM-style screen controls. If your
            machine requires that you use the ANSI.SYS screen driver instead,
            the  C-A-S-E program is available  compiled for that  system. The
            disadvantage of  the ANSI.SYS  screen driver is  that the  cursor
            arrow keys must not be used because they copy extraneous  charac-
            ters into  the data to  be input. If  you find that  you need the
            ANSI.SYS version of C-A-S-E, return the  disk for installation of
            the ANSI version of C-A-S-E.


            MATERIALS REQUIRED
            Blank, formatted diskettes for copying programs and data.

            8-1/2"w x  11"h paper for invoices and statements of professional
                  services. This may be  letterheaded or C-A-S-E will print a
                  heading, as you prefer.

            11"w x 8-1/2"h  paper, or continuous paper, for  internal reports
                  when printing 12 characters per inch.

            13-7/8"w paper  for internal reports when  printing 10 characters
                  per inch.
            If you choose to use the heading that C-A-S-E prints on invoices,
                  paper  called  3-rd perf,  that  is  perforated  to provide
                  either 8.5  x 11 or  13-7/8 x 11, enables you  to print all
                  documents from one box of paper with one printer setting.

            Address Label  stock: C-A-S-E uses  3-1/2" x 15/16"  labels in  a
                  single strip. Since you probably won't print many labels at
                  one time,  friction-feeding a strip  without a tractor feed
                  will probably work.

            Binders for holding reports, to match your paper size.



            KEYING IN DATA
                  C-A-S-E operates with the frequently-used key input conven-







                                                                           16
            C-A-S-E Installation

            tions.  Information for your  use appears in bright  letters on a
            black background. The space for you to  key in new information is
            indicated by an illuminated box in which letters appear in  black
            (reverse video). The place where the program will place your next
            keystrokes  is indicated  by a  blinking  black cursor  within an
            illuminated box. There are  two ways to complete  the information
            in the box.  If your  data doesn't  fill the  box, <Enter>  (This
            means to press  the Enter key.) to indicate  that that is all. If
            your  data fills the  box, the cursor will  automatically move to
            the next box and the computer will beep. 

                  If the data picture contains a decimal point, then when you
            key in the decimal point all digits previously entered will  line
            up on the decimal point, the computer will beep, and (since these
            are all dollars and cents items) you will have two more digits to
            enter.  If any box already contains data that  you want to accept
            without change, just <Enter> when the cursor is anywhere in  that
            box. If you want to enter a zero in a blank box, just <Enter> and
            zero will  appear. If the box  has space for two  digits and con-
            tains only one, a 6  for example when the correct value should be
            5,  when you input the  5 both digits will  appear. However, when
            you <Enter> the original digit will disappear without your having
            to erase it. 

                  With most data input screens, when several boxes  are shown
            you  can return to  previous boxes to make  corrections until you
            reach the  last box. Completing  the last box  completes all  the
            previous boxes.

            INSERT AND TYPEOVER
                  When  making corrections  you  make them  in either  of two
            ways.  One way  inserts  new  characters at  the  cursor, pushing
            remaining characters to  the right. The other way types  over the
            existing characters, obliterating them. By pressing  the INS(ert)
            key you switch from  one mode  to the other.  Use whichever  best
            fits the circumstances.

            UPPER AND LOWER CASE LETTERS
                  In the cases where input letters control the program, as in
            selecting items from a  menu, when you key in  lower case letters
            they are  automatically changed to  upper case  letters. In these
            cases you  may key in either  upper or lower case  letters as you
            choose. In  all other cases  where you are  keying in  accounting
            data,  the program maintains  upper and lower cases  as you input
            them.







                                                                           17
            C-A-S-E Installation

            Y y N n T t F f
                  These are the  characters that indicate Yes or No,  True or
            False  for times when  there is a logical  choice. However, dBase
            and Clipper display  only T  or F. If  you key  in "y" to  answer
            "Yes" to a  question, the screen will display  T. T means True or
            Yes while  F means False or No. You just have to get used to this
            convention. 

            FILE STRUCTURE AND DIRECTORIES FOR C-A-S-E
                  C-A-S-E is set up so that its programs and  its data are in
            separate directories on a hard disk or on separate floppy  disks.
            This simplifies  backing up and  enables one set  of programs  to
            operate on several sets of data files  if necessary.  The C-A-S-E
            program file is CASE.EXE. The data files have .DBF,  .NTX or .MEM
            extensions; .DBF files are  multi-record data files [such  as the
            General Journal] in which all  records in one file have the  same
            structure. The .NTX files specify the sequences in which the .DBF
            file records  are searched,  presented and  used. The  .MEM files
            each contain  an assortment of things  with dissimilar structures
            that have to be remembered,  such as company name and the date of
            the start of the current accounting period.

            C-A-S-E DISKS AND CONTENTS
                  The C-A-S-E program comes to you on one disk that  contains
            the entire C-A-S-E  system in compressed [ZIP] form, in  the file
            CASE.ZIP. With  this file  are the program that  expands [unzips]
            the C-A-S-E system, PKUNZIP.EXE,  and two .BAT files that control
            the  unzipping,   UZIPCASF.BAT  for   dual  floppy   systems  and
            UZIPCASH.BAT, for  hard disk  systems.  Also on  the disk  is  an
            instruction file, READ-CAS.ME1 that gives initial instructions.

                  When unzipped  on  a  hard-disk  system,  C-A-S-E  installs
            itself almost  completely into the correct  directories. You must
            establish a new  directory for each set of  accounts and copy all
            the empty files from the directory \CASE\MTF into each one.  Then
            you must set the paths to those directories as instructed below.

                  When unzipped  on  a  dual-floppy system,  C-A-S-E  becomes
            three  disks.  The C-A-S-E  Program  disk  contains  the CASE.EXE
            program and  the file ROADS.DBF. The C-A-S-E Manual Disk contains
            the Instruction  Manual CASEMAN.DOC.  The C-A-S-E Data  Disk con-
            tains  the  directory CASE  with  three  subdirectories. \CASE\SD
            contains  the  accounting files  for  the  demonstration  company
            Sanderson  & Duerksen. \CASE\MTF contains a set of empty account-
            ing files  for you to  copy onto another disk  for your accounts.
            \CASE\UT contains  optional mailing label formats,  a sample .BAT







                                                                           18
            C-A-S-E Installation

            file for calling CASE, and a directory-tree diagramming program.

            WHAT YOU NEED TO KNOW ABOUT DOS

            FILE COMMANDS
                  For preparing diskettes and copying files  you will need to
            know how to use a few of  the DOS commands. To prepare  diskettes
            you need the Format A: or  Format B: commands. To copy  diskettes
            you need the  DiskCopy command. To copy  files you need  the Copy
            command.  To copy all the  files from a given  directory you need
            the  Copy  *.*  version  of the  Copy  command.  (In contrast  to
            DiskCopy,  *.* reorganizes the  files as it copies  them, so that
            they are more quickly read after there have been  a lot of chang-
            es.) To remove files you need the Delete command. 

            DIRECTORY COMMANDS
                  If you  will operate  C-A-S-E on a  hard disk,  you need to
            understand DOS's system of  directories and method for describing
            the paths to reach them. Each hard disk  and each floppy diskette
            may  be divided  into  parts. Each  of these  parts  may also  be
            divided, and each of  those parts also, and so on to  more levels
            of  detail than you will need.  DOS confuses matters by using the
            word  directory in two  senses. Directory means both  any part of
            the disk and the list of files that that part contains. 

                  This system of directories enables you to logically arrange
            your files so that  each directory contains information about one
            subject. It also enables you to have files with the same name but
            with different data, provided that they are in different directo-
            ries.  For example, you  can have two files  named Sales Journal,
            one  for this  year's  sales  in the  directory for  this  year's
            accounts and the other for last year's sales in the directory for
            last year's accounts, and DOS won't get them mixed up. To prevent
            mixups, DOS  works in  only one  directory at  a time  unless you
            specifically tell it which other directories it can also use.  To
            work  on one Sales Journal you must  either move to the directory
            that contains the Sales Journal you want  to work on or tell  DOS
            in which directory  to look for it. You move  between directories
            with the  Change Directory (CD)  command. You tell  DOS where  to
            look by describing the Path by which DOS can reach a directory.

                  Each Path starts from the drive that contains the disk-- A:
            or B:  for floppy disks, C:  for most hard disks.  Next, you name
            each directory that  you must pass through to reach the file. You
            separate each level  of detail from the next  by a \ (backslash).
            So the Sales Journal for Last Year's sales that  is on the floppy







                                                                           19
            C-A-S-E Installation

            disk that is in drive B: will be reached by the Path B:\Accounts-
            \LastYear. Given that path, when the accounting program looks for
            a sales journal file it will find only the sales journal for last
            year, not the one for this year,  which will be in the  directory
            that is reached by the path B:\Accounts\ThisYear

                  To  make directories you need the  Make Directory (MD) com-
            mand,  and to  remove directories  you need the  Remove Directory
            (RD) command.  To move  between directories  you need  the Change
            Directory (CD) command. To make the screen display which directo-
            ry you are in you need to change your DOS screen display with the
            Prompt $p$_$g command. To show you how the directories are linked
            together  you need the  TreeD program that comes  in the UTILPROG
            directory. Since  TreeD is not part  of DOS, you need  to copy it
            into  either your  DOS directory  or, if you  have made  one, the
            directory for utility programs that is also searched when you key
            in commands.

                  To operate C-A-S-E you must first make the proper directory
            structure for the  C-A-S-E program and for each set  of accounts,
            and then describe to C-A-S-E, when you first run it, the path for
            each set of accounts.

            WHAT YOU NEED TO KNOW ABOUT YOUR PRINTER
                  Printers obey  two kinds of signal  from the  computer. All
            the printable  characters and  the other major commands,  such as
            line feed, carriage return  and form feed (eject) are transmitted
            as standard ASCII codes that are designated by number. "A" is 65,
            "!" is 33, etc. All computers and word processing systems  gener-
            ate these ASCII  codes and all printers obey them.  However, many
            printers have additional capabilities, such as selecting particu-
            lar fonts, making elongated characters and underlining, capabili-
            ties that were not considered when the ASCII codes were  created.
            Therefore, each printer has its own set of special commands  that
            control these additional  functions. In nearly all cases,  all of
            these  commands consist  of  a  series of  ASCII  character codes
            starting with the  ASCII code for  the "escape"  character, ASCII
            #27, a code that would not otherwise be sent to the printer.

                  If your printer  has additional capabilities that you would
            like to  use when  printing headings  for invoices  and financial
            reports, or for setting the printer to normal for printing  other
            reports, you will need to find from the printer's manual the code
            sequences that you need. These sequences may be listed as  print-
            able characters (generally using "[" for the escape character) or
            as numbers. Furthermore,  numbers may be listed  in decimal (base







                                                                           20
            C-A-S-E Installation

            10), octal  (base 8) or  hex (base 16) form.  The C-A-S-E program
            uses  the decimal  form. You  may have  to use  an ASCII  list to
            convert the listings in the manual to this decimal form.

            INSTALLING C-A-S-E IN A DUAL-FLOPPY SYSTEM
                  To install C-A-S-E on a dual-floppy system, first decide on
            names for the  three sets of  accounts that you will  need. These
            three are:  the demonstration  accounts of Sandoval  and Duerksen
            (necessary only  while you are learning  the C-A-S-E system), the
            accounts for your own company for the current year and, after you
            move to  the next  accounting  year, the  accounts for  your  own
            company  for the  previous  year.  Give names  that are  easy  to
            remember and to key in. I suggest "sd" for Sandoval and Duerksen,
            your company  initials for  your company's current  year accounts
            and your company initials plus "ly" for last year's accounts.

                  Make  a  working copy  of  the C-A-S-E  Program Disk  using
            either the  COPY *.* or the  Diskcopy command.  Use the following
            instructions to make  working disks for the two sets  of accounts
            on the C-A-S-E Data Disk. Insert the Data Disk into drive A and a
            blank formatted disk into  drive B. Make drive A the  prime drive
            by <A:> [The  angle brackets mean to type in the characters, then
            press the Enter  key], then  change to  the \CASE\SD directory by
            <CD  CASE> and <CD  SD>. Then <COPY *.* B:> to  copy the complete
            set of  demonstration files  onto  the new  floppy. Move  to  the
            \CASE\MTF directory by <CD ..> and <CD MTF>. Insert the disk  for
            your own company's accounts into drive B. Then <COPY *.*> to copy
            from the \CASE\MTF  directory to make the initial files  for your
            own company.

                  To start C-A-S-E on  a dual-floppy system, insert the  Pro-
            gram Disk into drive  A and the appropriate data disk  into drive
            B.  Make A the prime drive by <A:>. Then <CASE>. The first screen
            that C-A-S-E shows will ask you for the name of the accounts. The
            screen will  reply that  that name  is not  in the file,  and you
            should press any key. The second screen is a menu for maintaining
            the file  of paths. This file  contains name of  each set  of ac-
            counts and  the path to its data directory. Select A for entering
            a new name  and path, and the screen will ask  again for the name
            and the path to  the data directory. Since this  is a dual-floppy
            system and the data disk  is in drive B:, enter <B:>. Then select
            D  to tell C-A-S-E which set of accounts you want to work on, and
            enter their name. If you get an  error message across the top  of
            the screen  saying "open  error", that means that  C-A-S-E cannot
            open the  first file  in the set  of accounts.  You have probably
            made an error in entering  the path or have  not copied a set  of







                                                                           21
            C-A-S-E Installation

            accounting files to the working data disk. The other situation is
            that  you have not  instructed DOS to allow  sufficient files. In
            this  case,  see  the  ALL  INSTALLATIONS paragraph  for  further
            instructions.

                  Thereafter,  whenever you start C-A-S-E  for these accounts
            you need  only enter  their  name at  the  first screen  and  the
            program will proceed. When you want to work on a different set of
            accounts, which  must be on a different floppy,  you must enter a
            new  name and follow the  initial routine to enter  that name and
            path into the  file. In a dual-floppy  system, all the paths  are
            B:, because there is insufficient room on one 360K floppy for two
            sets of accounts with  significant data. If  you want to put  two
            sets of  accounts on a 720K  floppy (if your computer  has a 720K
            drive),  then you must  make directories and enter  the paths for
            them.

            INSTALLING C-A-S-E ON A HARD DISK SYSTEM
                  To  install C-A-S-E on  a hard disk, first  decide on names
            for the three  sets of accounts that  you will need.  These three
            are: the demonstration accounts  of Sandoval and Duerksen (neces-
            sary only  while you are  learning the C-A-S-E  system), the  ac-
            counts for your  own company for the current  year and, after you
            move to  the next  accounting  year, the  accounts for  your  own
            company  for the  previous  year.  Give names  that are  easy  to
            remember and to key in. I suggest "sd" for Sandoval and Duerksen,
            your company  initials for  your company's current  year accounts
            and your company  initials plus  "ly" for  last year's  accounts.
            Next, make four directories, one for the C-A-S-E program and  one
            each  for  each  set  of accounts.  C-A-S-E  doesn't require  any
            particular logical relation  between the directories; place  them
            so they make sense  to you. Copy all files from  the distribution
            disk to the CASE directory.

                  When you first install C-A-S-E using the UZIPCASH.BAT
            program, you get a directory structure that is probably close  to
            what you need. It is:

            \CASE       contains CASE.EXE  and ROADS.DBF    [It  also contains
                        the Manual CASEMAN.DOC until you have printed it out
                          and delete its file.]
            \CASE\SD    contains the  accounting files  for the  demonstration
                        company Sanderson & Duerksen.
            \CASE\MTF   contains  a set  of empty  accounting files  that  you
                        must copy into other directories, one for each set  of
                        accounts  that you will need. Move to the new directo-







                                                                           22
            C-A-S-E Installation

                        ry and COPY \CASE\MTF\*.*.
            \CASE\UT    contains alternative format  mailing labels, a    sam-
                        ple .BAT file for calling C-A-S-E, and a      directo-
                        ry-tree diagramming program.

                  To  start C-A-S-E, move  to the  directory for  the C-A-S-E
            program. Then  <case>. [The angle  brackets mean to  type in  the
            characters and then  press the Enter key.] The first  screen that
            is  displayed will  ask you for  the name of the  set of accounts
            that you want to work on. Enter that name.  The screen will reply
            that that name is not in  the file, and to press any  key. Do so,
            and C-A-S-E displays the screen for maintaining the file of names
            of accounts  and their paths. Select  A to enter a  new name, and
            enter the  name and  its path.  You may  enter all the  names and
            paths now, or at any later time whenever you start C-A-S-E.  Then
            select  D, to use a set of accounts, and enter the name again. If
            you get  an error  message across  the top  of the  screen saying
            "open error", that means that C-A-S-E cannot open the first  file
            in the set of accounts. This means that you  probably have made a
            mistake in entering the path or have not copied the  account data
            files to that directory. The other situation is that you have not
            instructed DOS to  allow sufficient files. In this case,  see the
            paragraph ALL INSTALLATIONS for further instructions.

                  Whenever you start C-A-S-E after this, entering the name at
            the first screen  allows C-A-S-E to move directly to  that set of
            accounts. 

            Direct Start & BAT Files
                  C-A-S-E also allows  users of hard disks  to start  C-A-S-E
            and move directly  to the desired set  of accounts with  one com-
            mand.  Suppose that you have two sets of accounts, one for Sando-
            val and  Duerksen in the current  year and one for  their firm in
            the previous year.  You can assign them the abbreviations  sd and
            sdly. Once you have entered the paths for these abbreviations  by
            following the  procedure in  the previous  section, you  may then
            start  C-A-S-E and  move directly  to the sd  set of  accounts by
            <case/sd>  or <case sd>.  The startup process is  even simpler if
            you build this into a .BAT file that you can call out from the C:
            prompt. The SD.BAT file looks like this:

            CD \CASE\CASEPROG  (or other sequence to get to the directory    
                            in which the C-A-S-E program resides)
            CASE/sd            (This activates C-A-S-E for the sd files)
            CD \               (Upon exiting C-A-S-E this returns you to     
                            the C: directory)







                                                                           23
            C-A-S-E Installation

            Naturally, you  can have  a separate  .BAT file  for each  set of
            accounts that you frequently work on.

            ALL INSTALLATIONS: ALLOWING SUFFICIENT FILES
                  C-A-S-E requires more files than DOS initially allows. Your
            CONFIG.SYS file  should include  the statement FILES=15  (or some
            larger number  if you have  a print spooler  or similar  resident
            program  that also  requires files).  Insert the  FILES statement
            into your  CONFIG.SYS file and  reboot the computer  so that  DOS
            knows to allow  for more files. Increasing the number  of buffers
            to  15 by  BUFFERS=15 may  increase the  speed of  operation. For
            further  information  on the  CONFIG.SYS  file  consult  your DOS
            manual under the headings Files and Configuration.

            TESTING THE STARTUP
                  To test whether the paths have been properly set, you  need
            to input data  and read  it back. An  easy way  is to change  the
            dates for the current year and  period of the year. Since C-A-S-E
            allows you to  use either the British (DD/MM/YY) or  the American
            (MM/DD/YY)  date formats and  you haven't set that  yet, use days
            less than 13 in  your test. From the Main Menu select  I, Closing
            The Books  For Period Or  Year. The  Closing The Books Menu  will
            appear. Select A,  Set New Period Dates. The screen  will display
            the current dates for start  of year, last day of  previous year,
            last  day of  last accounting period,  end of  current accounting
            period and number of the accounting period. Write down or  Print-
            Screen  the current  dates,  then  change one  or more  of  them.
            <Enter> until  you have  completed  all the  boxes. You  will  be
            returned to the Closing the Books  Menu. Then reselect A, Set New
            Period Dates. If the path has been correctly set, the screen will
            display the changed dates. Key in the correct dates and  <Enter>.
            Return to the  Main Menu by selecting X. You are now ready to run
            C-A-S-E for your accounts.

            ALL INSTALLATIONS: INSTALLING ADDRESS LABELS
                  C-A-S-E provides  two sets  of formats  for address labels,
            one for 10-pitch printers with 35 characters per line and one for
            12-pitch printers with 40 characters per line. The formats are in
            the \CASE\UT directory of the C-A-S-E Data Disk. XXMAIL10.LBL are
            the 10-pitch  formats and XXMAIL12.LBL are  the 12-pitch formats.
            XX is US, BR or  EU for US, British and European address formats.
            You need  one set of either the 10-pitch  or the 12-pitch formats
            in  your data directory to  be able to print  address labels, but
            you must strip off the 10 or the 12 portion of the name. That is,
            if your want to use a 10-pitch printer you must copy USMAIL10.LBL
            to  your data  directory as  USMAIL.LBL. To  do this,  insert the







                                                                           24
            C-A-S-E Installation

            C-A-S-E Data Disk in drive  A and move to the \CASE\UT directory.
            Then move to your data directory in drive C (or drive B for dual-
            floppy systems). Now  <COPY A:\CASE\UT\USMAIL10.LBL  USMAIL.LBL>.
            Then do the same for the BRMAIL and EUMAIL files also.

            PRINTER SETTINGS
                  You  may find that  you want to print  C-A-S-E reports with
            different printer settings  than you do other kinds of  work. You
            can enter  the printer  instructions through  the Setting  Up The
            Accounting  System menu, and,  once entered, they may  be sent to
            the printer at  any later time. Each printer has its own instruc-
            tions,  but generally  each instruction is preceded  by the ASCII
            code 27,  the escape code. Therefore these are called escape-code
            sequences. Consult your printer manual to find the code sequences
            that  you need. Convert  these codes to their  ASCII code numbers
            (like 27 for Escape, 67 for C).  From the Setting Up menu  select
            Enter Printer Settings. In the illuminated box enter the sequence
            of  ASCII code numbers  with exactly a single  space between each
            number (not between each digit). Like so: 27 67 93. Then <enter>.
            At  any later  time, when the printer  is On,  Selected, and With
            Paper, you  may send this  code sequence to  reset the  printer's
            settings by selecting Reset The Printer.







                                                                           25







                                   PRACTICING WITH A 
                                   FICTITIOUS COMPANY

                  Before you install C-A-S-E for your own company you need to
            learn how the system  operates by playing with the accounts  of a
            fictitious company.  The DEMODATA  directory of the  C-A-S-E Data
            Disk contains  just such  accounts, those of  the partnership  of
            Sandoval and  Duerksen, who supply advice and conduct seminars as
            a part-time activity and  who occasionally employ some other help
            for particular projects. 

                  Copy the files  from the DEMODATA directory of  the C-A-S-E
            Data Disk to either a floppy  for data (for a dual-floppy system)
            or  to the directory you  have set up  for last year's accounting
            data. Set the  paths to those directories. For both  these opera-
            tions follow the directions that were given above.

                  Whenever you  copy the DEMODATA files  you must make suffi-
            cient copies of the Balance Sheet and Income Statement forms  for
            all the periods in the year. From the Main  Menu select J, Start-
            ing  a New  Period or  New  Year, and  from that  menu  select D,
            Prepare  Balance Sheet  and  Income Statement  Blank  Records. Be
            prepared to wait a few minutes; this is a lengthy operation.

                  The  Sandoval and  Duerksen files  run from  1 Jan  86 into
            December. For practicing with the S & D files it will  be best to
            temporarily change the computer's date to a date in 1986 on which
            you plan to  enter invoices. Remember, after practicing with  S &
            D's files return the date to the proper date, or you will misdate
            your other  work. S &  D operates  on a quarterly  system and the
            dates are set for  the first quarter of 1986, but no  posting has
            been done. Even  though the general,  sales and  payroll journals
            contain  entries for later quarters,  when you post  the journals
            and close the  books for one quarter C-A-S-E  will not operate on
            any entries for  later quarters.  This is  a normal  part of  the
            C-A-S-E system.  It enables  you  to continue  work in  a  normal
            manner  before you  finish closing  the  books  for the  previous
            quarter.

                  Examine the operating instructions that follow and practice
            each of them with the S  & D files. I won't give  you any special







                                                                           26
            C-A-S-E Practicing With Fictitious Company

            instructions because  you  can't really  hurt  the  files.  I  do
            recommend that you follow the procedure for closing the books for
            each  of the quarters of the year. If you make too big a mistake,
            just  recopy the files  from the original disk.  You aren't using
            any  original  disks are  you?  Never  use  original  disks, only
            working copies. 

                  Obey  various  parts of  the  operating  instructions  that
            follow until you  understand the workings of the system  from the
            outside,  as a black box  to which you give  certain commands and
            data  and which returns the  logically necessary outputs.  If you
            enter a  new transaction,  that  must show  when the  journal  is
            displayed or printed and, when posted, it must show in the proper
            accounts. Learn  the process of  closing the books  by doing  it.
            Then make some additional transactions and  close the books again
            to see the effects of those transactions. 







                                                                           27






                                 OPERATING INSTRUCTIONS

            MENU STRUCTURE
                  All C-A-S-E  operations are ordered  by selecting from menu
            items.  Two levels  of menu  control  all the  normal operations,
            while there  is a third  level for the  operations required  when
            setting up or  modifying your accounting system. The top  menu is
            the Main Menu.  From this menu you select  a class of operations,
            for example those dealing with the General Journal, item D.  This
            takes you to the General Journal Menu, from which you can select:

            A, to Enter General Journal Transactions; 
            B, Display General Journal On Screen; 
            C, Revise General Journal Transaction; 
            D, Print General Journal; 
            X, Return To Main Menu. 

            All menus are set up  so that X returns you to the previous menu.
            The menus  are shown  in the  illustrations at  the back  of this
            manual.

            SETTING UP THE SYSTEM FOR YOUR COMPANY
                  First, copy  all files  from the EMPTYFIL  directory of the
            C-A-S-E Data Disk  to the directory for accounting data,  or, for
            dual-floppy users,  to a disk  that will  contain the  accounting
            data.

                  Three  tasks are  required  when installing  an  accounting
            system that already has the capabilities that you require.
            1     You  must establish  the particular  Accounts and  the line
                  items  in the Balance  Sheet and the Income  Statement that
                  you require.
            2     You must  input certain operating  instructions to the sys-
                  tem.
            3     You must input the initial values of the accounts and other
                  records.

                  To  order  these operations  first  select  Setting  Up The
            Accounting System, selection  K from the Main Menu. Then  in turn
            select from the  Setting Up The Accounting System Menu  the next-
            level menus  for General  Company Information, for  Accounts, for
            Balance Sheet and for Income Statement.







                                                                           28
            C-A-S-E Operating Instructions

            YOUR BUSINESS:
            FIRM NAME, PARTNERS, PROFIT LINES, PAY DEDUCTIONS,
            COMPUTER OPERATIONS, PRINTER CONTROL ETC.
                  C-A-S-E modifies its operations according  to certain oper-
            ating  instructions  that you  input  through  the  Enter General
            Company Information operation, choice  A from the Setting  Up The
            Accounting System Menu. Before doing this, check the printouts of
            the five kinds of data input screen that are in the back of  this
            manual to see the questions asked. Most are self-evident but  you
            have to think about them. 

                  The first screen  asks you about the  organization of  your
            business with its profit lines  and partners, if any. You  key in
            data about  the name of your  firm, its partners'  full names and
            short names, its IRS number, its profit lines and their abbrevia-
            tions, and  how the profits of  each profit line are  assigned to
            partners.

                  The second screen asks about your own names for the  people
            with  whom you do  business and what their  purchases are called.
            You may call them clients, customers, attorneys, or whatever. You
            may call their purchases  cases, jobs, projects, or whatever.  If
            they  provide money  in advance  you may  call  it an  advance, a
            deposit, a retainer,  or whatever. Your customers may not  be the
            principals in the case or project, and you may need to use a name
            for those whom  they represent. Enter the names that  you custom-
            arily use,  and these names will appear in all data entry screens
            and reports. Those questions that appear with an asterisk do  not
            have to  be answered.  If  you leave  their answers  blank  these
            categories  will never appear  on the data entry  screens and you
            will never have to answer questions about them.

                  The third screen asks you about  which letterheads you want
            printed  on the invoices  and case reports for  each profit line.
            You have up to 5 letterheads available, numbered from 1 to 5. Key
            in the number of the appropriate letterhead for each profit  line
            and for  overhead. If  you  intend  to normally  use  pre-printed
            sheets for these documents, you may either enter 0, in which case
            C-A-S-E will  never print  a  letterhead, or  you may  enter  the
            number  of a  letterhead format  which you  describe on  the next
            screen. In this case, C-A-S-E will print that letterhead whenever
            you turn on letterhead printing in the last screen. 

                  The screen  next  asks for  the printer  control codes  for
            regular printing. If you never change your printer font or format
            settings, you may leave this blank. If you do change them for any







                                                                           29
            C-A-S-E Operating Instructions

            purpose, inserting the proper code sequence here will ensure that
            whenever C-A-S-E starts to print, it will first reset the printer
            to  print in normal style. The code  sequences must be entered in
            the proper format. Suppose that the control sequence is given  in
            the  printer manual as  escape, asterisk, E. The  ASCII codes for
            these are  27, 42,  69. You  must enter  these starting  with the
            first character  position and with exactly  1 space between  each
            number. So: 27 42 69.

                  The fourth through  eighth screens  are all the  same. Each
            asks  for the details of one  letterhead form, numbered from 1 to
            5. You have 6  lines of letterhead available and each one  may be
            printed in its  own style, depending on the capabilities  of your
            printer. Each  screen shows 6 pairs  of lines, one  pair for each
            line  of  letterhead. The  upper  line of  each pair  is  for the
            printer control codes; the lower  line is for the actual text  of
            that  line. Enter  the printer  control codes following  the same
            format as you used for the regular control codes in the preceding
            screen. Enter  the text for the  line as you  want it  to appear.
            Since there is  no centering command, if  you want the  text cen-
            tered you  must  position it  first  by eye.  Then print  out  an
            invoice using  that format, and  count the spaces  that you  must
            move the text sideways to bring it to exact center. 

                  The top  half of  the ninth screen asks  you about  payroll
            deductions. In addition  to the Federal Withholding and  the FICA
            (Social security)  deductions, you have 8  more available to you.
            For each that you want to use, select the name of up to 8 charac-
            ters. Only those that  you name will appear in  your accounts and
            reports, so erase each one that you don't want to use.

                  The lower  half of the ninth  screen asks for miscellaneous
            information  about  your operations.  You  select  the  number of
            accounting  periods per year,  you enter the sales  tax rate, you
            select the  date format as  either American or  British. You  say
            whether  you lump together the cash in the office and the cash in
            the bank, or  keep separate accounts. The merged account  is 301,
            the separate accounts  are 304 (bank) and 305 (office).  Once you
            tell  C-A-S-E  whether  you  use separate  accounts  or a  merged
            account, C-A-S-E handles the rest.   You can print invoices on an
            80-column  printer,  which is  a  handy  option  when  your wider
            printer is out of service. You can use either letterheaded  paper
            for invoices or have the heading printed by C-A-S-E. Finally, you
            say which floppy drive, A or B, you will use for  backing up your
            C-A-S-E data. 







                                                                           30
            C-A-S-E Operating Instructions

                  You  can change  the answers  at any  time, all  except the
            number of accounting periods in a year. Increasing the number  of
            accounting periods in a year during the year requires  additional
            work. The simplest  method is to use the Reclose  choice from the
            Closing The  Books Menu.  This  takes the  accounts back  to  the
            beginning of the year and reposts all the entries that are in the
            general journal. 


            SETTING UP THE ACCOUNTS
                  The EMPTYFIL directory of the C-A-S-E Data  Disk contains a
            typical set of accounts. Print out the List of Accounts (Choice A
            from the Accounts, Reports and Journals Menu) and examine them to
            see  what you need.  Accounts are coded in  three ways: UsedHere,
            NonDelete,  and  MustUse. MustUse  accounts  are  those  that the
            system must have in order  to operate. If you don't have  Account
            303, Accounts Receivable,  the invoice system won't have  a place
            to deposit the proceeds of invoices. NonDelete Accounts are those
            that, if used, must have exactly this number  and the other coded
            instructions, so  that you are  not allowed to  delete these  ac-
            counts. UsedHere Accounts are those that are used in this instal-
            lation.  You can  control  this UsedHere  function  for NonDelete
            Accounts. If you declare  an account Not UsedHere no transactions
            can be posted to it and  it won't appear on any report. Just  the
            same, the  account will still be  there for you  to use  when you
            find it useful. Accounts  for all the partners  are of this  Non-
            Delete type.  Even though  there are  changes in  the partnership
            structure, the accounts  for four partners will  always be avail-
            able to  you if you need  them, but only those  that you actually
            use will show in displays and reports.

            KEYING IN CHANGES TO THE ACCOUNT LIST
                  The  Changing Accounts  Menu  allows you  to  add accounts,
            delete accounts,  activate accounts and it  provides two ways  of
            revising  account  information,  with  safety  check and  without
            safety check. Normally use the revision with safety check because
            that limits you  to only the changes that normally  are required.
            Use  the revision without  safety check only when  you are really
            sure of what  you are doing, or when following  instructions from
            this source.

            TYPES OF ACCOUNT
                  All  accounts in the EMPTYFIL directory  are flagged  Used-
            Here so that you can see them. You can activate inactive accounts
            and inactivate those accounts  that are not coded MustUse through
            the  Changing Accounts  Menu.  You  can also  add a  new  account







                                                                           31
            C-A-S-E Operating Instructions

            through that  menu. All accounts  that you add  yourself will  be
            coded  Not NonDelete and  Not MustUse. However, you  must add the
            proper codes for the account type and the destination of its data
            on the Balance Sheet, the Income Statement and the Federal Income
            Statement. Accounts must be classified as one of ASS(et), LIA(bi-
            lity), CAP(ital), EXP(ense), REV(enue) or DUM(my). Use the normal
            accounting  principles to  determine which it  is. The  moneys in
            DUM(my)  accounts  go nowhere.  They  are  for  inputting initial
            values  without affecting  any other  account,  or other  ways of
            circumventing the  double-entry system in those  rare cases where
            that  is proper,  or  for  serving as  the collection  point  for
            transactions  in  which one  debit  must  equal  several credits.
            Account #100,  Start Up  Dummy, serves  the first purpose,  while
            #101, Payroll Summary, serves the second when pay is divided into
            paid and  withheld portions.  When serving the  summary function,
            whenever any series of linked transactions has been completed the
            balance should have returned to 0.

            ACCOUNT INSTRUCTION CODES
                  The coded  instructions for  posting the  account  balances
            follow a  logical rule.  Each  account may  have three  types  of
            instruction code. The  three instruction  codes are shown in  the
            List of  Accounts printout under the  column headings BAL SHT for
            Balance Sheet, INC STM for Income Statement,  and FED FRM for the
            U.S. Partnership  Return of Income. The  instructions are 3-digit
            numbers whose  last two  digits  (tens and  units) refer  to  the
            Sequence Number  of the  line  item in  the C-A-S-E  report:  the
            Balance Sheet, the  Income Statement or  the Federal  Form Income
            Statement.  The hundreds  digit  (leading zeroes  are  not shown)
            controls how the data is transferred.

                  An instruction code  of zero in any column means  that that
            account  balance has  no  connection with  the  report  for  that
            column.

                  An instruction code  of 0xx (codes between 1 and  99) means
            that the balance of  the account is posted  to the 'xx'  Sequence
            Number of the document for that column.

                  An  instruction code  of  1xx (codes  between 101  and 199)
            means that the negative of the  account balance is posted to  the
            'xx' Sequence  Number of the  document for that  column. This  is
            used for 'contra accounts'  or 'offsetting accounts', for example
            #271  Pack & Post Received and  #272 Pack & Post Expense. Packing
            and postage is an  expense, so the balance for #272 is  posted to
            an expense line  of the Income Statement. However, you  expect to







                                                                           32
            C-A-S-E Operating Instructions

            recoup part of  your packing and postage expense by  fees charged
            for  this service, which  appear in the Revenue  account #271. If
            you posted the balance of this account directly to  the same line
            of the income statement to which you had posted the expense,  the
            revenue would appear to  increase the expense instead of reducing
            it. Therefore you must post the negative of that balance in order
            to reduce the expense. C-A-S-E does this whenever the instruction
            code is between 101 and 199.

                  An instruction  code of  2xx (codes  between  201 and  299)
            means that the information flows  in the reverse direction,  from
            the document to the account. When C-A-S-E computes the income for
            each partner as one  of the final  steps of computing the  income
            statement, it has to change the capital account for each  partner
            accordingly. An  instruction code  of 2xx under  Income Statement
            means that the balance of the account comes from Sequence  Number
            xx of  the Income  Statement. You will  probably never  set up an
            account that uses this function.

                  An instruction  code of  3xx (codes  between 301  and  399)
            means operates like one of 2xx except that the value  transferred
            is  the negative  of the  value in  the Statement.  This function
            probably will not be used.

                  If  you are  establishing a  new overhead  expense account,
            then you  probably want to send  its balance to the  same line of
            the Income Statement that  other similar expenses go. However, if
            you are establishing  that account  for a  very important  reason
            that deserves  special  identification on  the Income  Statement,
            then you also have to create a new line item number on the Income
            Statement  and put its  sequence number on that  account. See the
            instructions under Adding Line  Items to Balance Sheet and Income
            Statement.

            SUBSIDIARY AND CONTROL ACCOUNTS
                  An account may be divided into several subsidiary accounts.
            For example, the materials expense account for a profit line  may
            be  divided into subsidiary accounts  for the different  kinds of
            materials that  are used. As another example,  a building expense
            account may be divided into subsidiaries for routine housekeeping
            and unusual repairs. Accountants  term the more detailed accounts
            subsidiary  accounts and  the  less detailed  accounts  they call
            control accounts.

                  During  the  posting process  the  total  for  a subsidiary
            account is added to  the total  for its control  account, and  is







                                                                           33
            C-A-S-E Operating Instructions

            forwarded to the Balance Sheet or Income Statement in that  form.
            Therefore, it must not be  forwarded on its own. To  prevent that
            from  happening,  all  subsidiary  accounts must  have  0 in  the
            Balance Sheet  and Income Statement codes. C-A-S-E has a built-in
            rule that forces this in case you forget.

                  C-A-S-E allows  one level of  subsidiary accounts. When you
            add or change the description of an account you may indicate that
            it is a subsidiary account by keying in the number of the account
            to which  it is  subsidiary. When  you do so,  C-A-S-E makes  the
            Balance  Sheet, Income  Statement and  Federal Income  Form codes
            zero. However, you must be sure that the control account that you
            enter is not itself  a subsidiary  account. If it  is, the  total
            will be counted twice and you will have to straighten the problem
            out.

            ADDING LINE ITEMS TO BALANCE SHEET AND INCOME STATEMENT
                  Line items for the  Balance Sheet and the Income Statements
            may be changed through the menus for these two documents. In each
            case the magnitude of the line item number indicates its position
            on  the document  and how the  value of its item  is treated. The
            permitted additions are shown in the following tables:

            Allowed Additions to
            Income Statement
            Seqn   Desc.
             1- 9  Sales
            11-19  Other revenues
            20-68  Expenses

            Allowed Additions to
            Balance Sheet
            Seqn   Desc.
             1-48  Assets
            51-79  Liabilities


            PRINTING REPORTS
                  Always have  the printer  turned on and  with paper  before
            ordering any printed report. If you don't, the computer may  hang
            up  so that you have  to reboot  it and restart  C-A-S-E. C-A-S-E
            tries  to arrange that this will not wipe out any data, but it is
            possible that  some recently-entered data might  be lost. If  you
            lose power or reboot the computer during a C-A-S-E session, check
            to see the last data entered and re-enter it if necessary.
             







                                                                           34
            C-A-S-E Operating Instructions

            GENERAL JOURNAL SYSTEM
                  Most operations are  commanded through the  General Journal
            Menu. Printing  blank forms for the journal  is commanded through
            the Setting  Up Menu,  and  posting the  General Journal  to  the
            Accounts is commanded through the Closing The Books Menu.
             
            TRANSACTION ENTRY
                  Most entries that  you key into the General Journal  may be
            made either  at the actual time if you  have the computer running
            or at a later time from a paper journal. C-A-S-E prints forms for
            writing such entries. Your regular  checkbook register is also  a
            handy place  for recording  the entries resulting  from disburse-
            ments by  check; you need only  to add the  account number  to be
            debited (the account to be credited is always the same number for
            checks from one checkbook) and the case number. Remember, though,
            that neither  the handwritten journal nor  the check register  is
            the  General  Journal.  Only  the  computer file  is  the General
            Journal and it is made permanently visible by printing it out.

            You enter the simple  General Journal transactions through selec-
                  tion A of the General Journal Menu. 
            You key in the following information:

            Transaction date
            Transaction description
            Amount
            Account to be debited
            Account to be credited
            Check number (if applicable)
            Case number (if applicable) 

            C-A-S-E automatically adds the transaction number.

                  The Invoice, Sales, Payables, Capital Equipment and Payroll
            systems enter  their transactions into the  General Journal auto-
            matically.

            REPORTS AND DISPLAYS
                  The General  Journal between any two dates  may be printed.
            The General Journal  may be displayed on the screen,  starting at
            any date and continuing as long as desired. The display may be of
            all transactions, or only of those that have not been posted.

            CORRECTIONS
                  Transactions that have not  been posted to the accounts may
            be revised.   Since C-A-S-E will not post transactions  that have







                                                                           35
            C-A-S-E Operating Instructions

            improper account  numbers, the display of  only unposted transac-
            tions  makes it easy  to identify and revise  those with improper
            account  numbers. Corrections of incorrect transactions that have
            been posted must  be made by entering a reversing  transaction to
            remove  the effect  of the  erroneous one  and then  entering the
            correct one.

            POSTING THE GENERAL JOURNAL TRANSACTIONS TO THE ACCOUNTS
                  This operation  is commanded through  the Closing The Books
            Menu.

            SALES JOURNAL SYSTEM
                  Most of  these operations  are commanded  through the Sales
            Menu. Printing  forms for the sales  journal is commanded through
            the Setting Up Menu. Posting the sales to the General Journal  is
            commanded through the Closing The Books Menu.

            TRANSACTION ENTRY
                  Sales that do not involve the Invoice System may be record-
            ed  in a  paper journal for later  entry into  the Sales Journal.
            C-A-S-E  prints forms  for recording  such sales.  Remember that,
            like the General Journal, the real Sales Journal is the  computer
            file of that name, not  the handwritten forms, and the real Sales
            Journal is made permanently visible by printing it out.


            You enter  simple sales through selection A of the Cash Sales and
                  Journal Menu. 
            You key in the following information:



            Date of sale
            Description of items sold
            Sale amount
            Profit line abbreviation
            Tax class (Taxable, Wholesale, Interstate, or Services)
            Sales tax amount
            Shipping amount
            Case number (if applicable)

            C-A-S-E adds the sales number.

                  The Invoice and  Credit Sales  system automatically  enters
            the sales transactions that it generates into the Sales Journal.







                                                                           36
            C-A-S-E Operating Instructions

            REPORTS AND DISPLAYS
                  The Sales Journal between any two dates may be printed. The
            report  lists  all transactions  and the  totals for  each profit
            line, for each tax  class, for sales tax,  for shipping, and  for
            credit sales.

                  The Sales Journal may be displayed on the  screen, starting
            with any date and continuing as long as desired.

            POSTING
                  Whenever  ordered, C-A-S-E  summarizes  the  unposted sales
            transactions  and  posts the  totals in  each category  (sales by
            profit  line,  sales  tax  received,  shipping received)  to  the
            General Journal. This operation  is commanded through the Closing
            The Books Menu.


            INVOICES AND CREDIT SALES

            INVOICE FORMATS
                  The C-A-S-E system  allows you to issue  both invoices  and
            statements  of  professional services.    You  probably  will use
            invoices  for  sales  of  items  and statements  of  professional
            services  for services  rendered  to clients,  even  though these
            latter  may include  supplying some  items.   The invoice  format
            extends unit price  by quantity to calculate total cost  for you.
            The professional services format provides more space for descrip-
            tion  by ignoring  quantity and  unit price.    It also  puts the
            invoice number discretely at the  bottom left corner.   Whichever
            type of invoice is being prepared, if you  tell C-A-S-E that this
            invoice is for  the regular client of a particular  case, C-A-S-E
            will enter the proper name and address for you. 

            ISSUING AN INVOICE
                  The operations  for invoices  and credit  sales are ordered
            through  the Invoices  Menu. There  are two  forms of  invoice: a
            product format invoice that includes  the unit price and quantity
            for  each item, and a  professional services format  invoice that
            does not  show unit  price and quantity  and has  a more discreet
            format with more  space for description. You may select  the type
            for each invoice you issue. Up to  9 copies of an invoice may  be
            printed  at the time  of issue. As  many more as you  need may be
            printed later.

                  C-A-S-E  keeps two  kinds of  invoice records:  the invoice
            summary  and all  the line  items, so  that each  invoice  can be







                                                                           37
            C-A-S-E Operating Instructions

            reprinted in its entirety at any later date. 

            ENTERING INVOICE DATA
                  When an invoice is designated for a particular case and for
            the normal  customer for that case,  the invoice system automati-
            cally inserts the name and address of the customer. 

            In all other situations, you key in:
            Customer's name and address.

            C-A-S-E  asks for the data for  each line item until you indicate
                  that there are no more. 
            For each line item, you key in:

            Description of the item

            For product-type invoices you then key in:

            Unit cost and the quantity

            For professional-services-type invoices you key in:

            Total cost

            You then key in:

            Profit line for that item
            Tax classification of that transaction as T(axable), W(holesale),
                  I(nterstate) or S(ervices)

            When you  indicate no more  line items, then  the Invoice  System
                  tells you the  total taxable sale and the proper  amount of
                  sales tax.
            Accept the calculated sales tax or input a different amount.
            Then  the Invoice  System asks  the amount  for shipping  and the
                  amount prepaid.
            If these are not zeroes, enter the amounts.

            PREARRANGED PAYMENT FROM RETAINER
                  If the  invoice bills the  regular client for a  particular
            case,  C-A-S-E searches  the case  information file  to determine
            whether there is an instruction to pay the next invoices from the
            balance  of the deposit  or retainer. If so,  C-A-S-E applies the
            balance to this invoice and recalculates the balance.

                  When an invoice is issued,  C-A-S-E automatically transfers







                                                                           38
            C-A-S-E Operating Instructions

            the sales data to the Sales Journal and to Accounts Receivable. 


            PRINTING OF ADDRESS LABEL
                  C-A-S-E  will  print the  mailing  label  for  any invoice,
            making it specially easy to  print the label for the last invoice
            issued. If your printer makes it  easy to insert a one-wide sheet
            of 3-1/2 x 15/16 labels this is quick and easy.

            RECEIPT OF PAYMENT
                  When  a payment  against  an invoice  is  received, C-A-S-E
            displays  summaries of  unpaid invoices so you  can determine the
            number  of the  invoice to  which the  payment applies.  Then you
            apply  the payment  to that  invoice. Partial  payments, complete
            payments and  overpayments are  allowed for. C-A-S-E  records the
            payment against both the invoice and Accounts Receivable.

                  C-A-S-E prints a report that lists all outstanding invoices
            and  totals the amount due,  so that this  can be checked against
            the Accounts Receivable total.


            YOUR UNIT OF BUSINESS: PROJECTS, CASES OR WHATEVER
                  All of these operations  are ordered  through the Case  [or
            Job or your chosen name] Menu.

                  C-A-S-E allows  you to name your  unit of business whatever
            you choose. For  this manual we will use cases.  The nonfinancial
            information for cases is maintained through the  Case Menu, which
            provides  for adding  new cases,  revising case  information, and
            showing or  printing the list of cases. The financial information
            is maintained through the feed of information from the Sales  and
            General  Journal  transactions.  Every  transaction   from  those
            journals  that is  identified with  a particular  case number  is
            duplicated in the file for that case  and stored by date. Special
            transactions for  handling  deposits, retainers  or advances  are
            also  made available through  the Case Menu. Any  portion of each
            retainer  may  be  received,  disbursed  against past  or  future
            invoices or  cash payments, or retained as  earnings, as required
            for the circumstances.

            USING JOB OR PROJECT FINANCIAL REPORTS
                  A complete financial history for each case is  available by
            order from  the Case  Menu,  either displayed  on the  screen  or
            printed. These  reports are among  the most useful  tools of  the
            C-A-S-E system.  Each report contains a  list of all the transac-







                                                                           39
            C-A-S-E Operating Instructions

            tions made  against the  case:    expenses, partner's  time,  and
            revenues.  It closes with the total  of expenses, the total value
            of partner's  time, the total  billed and the  balance.   Expense
            transactions should  be  entered  as  they  occur, each  with  an
            adequate description.   When you intend to bill the client, get a
            report and  review it.   The balance represents the  amount to be
            billed [adjusted for the balance of  the retainer, if any].  Scan
            over the  report to  match expense items, with  negative amounts,
            against the  billed items with  equal positive  amounts, and line
            out all  that match.  To  make this  easy, every  transaction  is
            coded, in the last column, to show its class. 

            Job Report Line Item Coding
            A number indicates  a receipt that is a  line item on the invoice
            with that number.
            EXP indicates an expense. 
            EAR [for earnings] indicates the value of partner's time. 
            DIS indicates a disbursement from the retainer. 
            REC indicates a receipt that did not involve an invoice. 
            Any expense items  that are not matched are candidates  for bill-
            ing.

                  Then prepare  an invoice or  statement of professional ser-
            vices that lists each of the unmatched items, using a description
            that you prefer to submit  to the client but that you  can tie to
            the expense item.

            Job List
                  C-A-S-E displays and prints lists of open cases, as ordered
            through the Case  Menu. The printed list gives   summary informa-
            tion regarding the case name, the customer and his city and phone
            number. An up-to-date  list is  handy to keep on  one's desk  for
            ready reference when considering a telephone call.

                  Naturally, C-A-S-E permits changing the nonfinancial infor-
            mation about a case as that becomes necessary.


            CAPITAL EQUIPMENT
            AND DEPRECIATION
                  The  operations  for entering  the  value  and  factors for
            equipment  are ordered  through the  Capital Equipment  Menu. The
            Depreciation Calculation is ordered through the Closing The Books
            Menu.







                                                                           40
            C-A-S-E Operating Instructions

            DATA ENTRY
                  The capital  equipment  files are  maintained  through  the
            Capital Equipment Menu. You  key in information upon installation
            of the equipment.
            You key in the following information: 

            Equipment name and file number
            Original cost
            Date of purchase
            Date when  the equipment  is  expected  to be  fully  depreciated
                  [Amortization date]
            Percentages of  depreciation to be allocated to  each profit line
                  or to overhead.

            You  must also  make the  appropriate  entries  into the  General
                  Journal  to  record  the  expenses  of  the new  equipment.
                  C-A-S-E does not do this automatically because each instal-
                  lation may have unique aspects that only you know.

            DEPRECIATION CALCULATIONS
                  C-A-S-E computes the  depreciation at the end  of each  ac-
            counting  period (you  have  to order  the operation  through the
            Closing  The Books  Menu),  allocates  that to  profit  lines and
            overhead according to the percentages, recomputes the book value,
            and makes the proper entries to the General Journal. 

            REVISIONS
                  At any time the depreciation factors may be changed for the
            next computation. The depreciation  may be reallocated to differ-
            ent profit lines. If the equipment appears to be deteriorating so
            that its value will be zero at some other  date than the original
            amortization date,  the amortization date can  be changed. If the
            equipment dies, the dead date can be keyed in. C-A-S-E  automati-
            cally  takes care of these changes.  The depreciation is straight
            line, and  is calculated by  the ratio  of the length  of the ac-
            counting period to the remaining depreciation life. 

            DURATION OF RECORDS
                  Equipment remains  on the file  as long as it  has not been
            declared dead.  At  the end  of the  year in  which  it has  been
            declared  dead, its record  is removed and its  original cost and
            accumulated depreciation are removed from the Balance Sheet.

            REPORTS AND DISPLAYS
                  The  Capital Equipment  System  prints  out a  list  of all
            capital equipment items. The following data is presented for each







                                                                           41
            C-A-S-E Operating Instructions

            item of  capital  equipment: the  item's  name  and  number,  its
            original cost  and date of  purchase (or  installation date  when
            that  is appropriate),  date  of scheduled  amortization, current
            book  value, the  date on  which that  value was  calculated, the
            depreciation  for  the  year-to-date  (the  last valuation  date,
            usually the  end of  the  last accounting  period), and,  if  the
            equipment has been discarded, that date (the dead date).

            ACCOUNTS PAYABLE SYSTEM
                  These  operations  are  all ordered  through  the  Accounts
            Payable Menu.

            TRANSACTION ENTRY
                  The Accounts Payable  system maintains records of purchases
            made on credit and the payments against them. 
            When making a credit purchase 
            You key in the following information: 

            Name and address of the vendor
            Description of the item purchased
            Amount
            Profit line that will use the item
            Account number to be charged
            Payment due date.

            C-A-S-E adds the payable number and makes the appropriate General
            Journal entries.

                  When you pay the bill, the Accounts Payable System displays
            the  unpaid transactions so  you can determine the  number of the
            item that you are paying. Then you enter:
            Payable number
            Amount paid
            The  Accounts Payable  System posts the  payment to  the Accounts
            Payable record and makes the appropriate General Journal entries.

            REPORTS AND DISPLAYS
                  The Accounts Payable System prints  a report of all  unpaid
            payables and totals the amounts owed. The Accounts Payable System
            also displays the credit purchase transactions either by creditor
            or by date due, and either all transactions or only those unpaid.

            INVENTORY SYSTEM
                  The Inventory System maintains dollar totals for the inven-
            tories for  each profit  line and  for overhead.  Since knowledge
            firms typically have few  inventory transactions and typically do







                                                                           42
            C-A-S-E Operating Instructions

            not stock  many items  for direct sale,  such a  simple system is
            satisfactory.

            TRANSACTION ENTRY
                  When purchasing material,  record its purchase by a General
            Journal entry. The  value of the material may  either be added to
            inventory by debiting the inventory account number or expensed by
            debiting  the  expense  account  number.  The value  of  material
            withdrawn  from  or  returned  to  inventory is  entered  through
            General Journal transactions. 

                  The user must be  alert to the typical errors that occur in
            this simple system. Purchased  material is entered into inventory
            simply  by entering  the  purchase transaction  into  the General
            Journal. Since the  expenditure of funds must be recorded  in any
            case, recording the entry of the material into inventory does not
            require  a  separate  transaction.  However,  many  purchases  of
            material are in  much larger quantities than those in  which that
            material is  used, and often  with many items  combined into  one
            purchase.  The tendency  is  to not  enter  individual withdrawal
            transactions, so that over time the supposed value of the  inven-
            tory grows even though the actual value doesn't. It is practical-
            ly impossible to insist that every withdrawal be documented by  a
            General Journal entry.

            INVENTORY POLICY
                  Firms that trade  in physical items require complicated and
            expensive   inventory  systems,  both  for  accounting  purposes,
            including taxation, and for  operating their businesses. Firms in
            the  knowledge business  don't want  to operate  such complicated
            systems, but they do need an inventory system that documents  the
            value  of inventory  and the  relationship between  inventory and
            profit.  Accountants and  tax collectors  have to  pay  much more
            attention to one's physical possessions than to the mental assets
            with which you earned them  and with which you plan to earn more.
            Therefore,  the knowledge  firm must  pay  more attention  to its
            inventory than  would be  justified from  its  low importance  in
            operations. Besides, you might  have the unusually important item
            of inventory that makes all the difference between a  comfortable
            level of assets and looming bankruptcy. 

                  C-A-S-E allows you to  follow a middle course  in inventory
            policy. While C-A-S-E  uses the change in inventory value  as one
            term in the profit equation, it doesn't require that all invento-
            ry transactions be  documented individually. You should  document
            the major  transactions and  charge  them  to the  correct  case,







                                                                           43
            C-A-S-E Operating Instructions

            project or overhead.  However, at  the close  of each  accounting
            period  you must  take a  physical inventory  (casually month-by-
            month, more  carefully quarterly,  and properly at  least at  the
            close of  the year). It is  a question of which  is more trouble:
            entering  all withdrawals  as individual  transactions  or taking
            inventory more frequently.


            PHYSICAL INVENTORIES - CORRECTING THE INVENTORY VALUE
                  After  posting  the  General Journal  transactions  to  the
            Accounts and taking a physical inventory with  whatever degree of
            thoroughness appears justified,  examine the transactions in each
            inventory account  by getting  a report  for that account  number
            (selection  B of  the Accounts,  Reports  and Journals  Menu) and
            examine the Inventory Accounts to  see  the calculated  inventory
            value. That is shown by the Year_to_Date plus  the Current-Period
            amounts. Remember  that Current-Period  may have a plus  or minus
            value.  Then make  General  Journal  entries as  follows.  If you
            recognize any  significant inventory movements  that haven't been
            recorded,  make  transactions for  them.  They usually  represent
            withdrawals  but they  may represent  additions,  particularly of
            items  that are  made in  house,  such as  models. If  items have
            decreased in  value  because of  obsolescence  or  deterioration,
            enter transactions  to write  down their value.  These operations
            take care of  all the transactions that you can  recognize. There
            will  probably  still  be  a  difference between  the  calculated
            inventory value and that shown by the physical inventory. 

                  C-A-S-E will automatically take care of this problem if you
            enter  the value of the  physical inventory  at the close  of any
            period. The C-A-S-E system has a dummy inventory account, #  102,
            and five  physical inventory accounts,  one for  each profit line
            and numbered 819,  829, 839, 849 and 859. If the actual inventory
            value for the profit line for account 839 is $1900.10, then enter
            this value as a General Journal transaction as follows. "Physical
            Inventory Profit Line xx,  Date", 1900.10, Credit 829, Debit 102.
            C-A-S-E  will perform  the  necessary calculations  and  make the
            proper journal  entries whenever you calculate  the balance sheet
            for the end of that period.

            PAYROLL SYSTEM
                  All  of these  operations are  ordered through  the Payroll
            Menu.
            Access  to the Payroll Menu may  be controlled by password, if so
            desired.







                                                                           44
            C-A-S-E Operating Instructions

            TRANSACTION ENTRY
                  The Payroll  System maintains records  of the  pay and  pay
            deductions for each employee by month and allocates payroll costs
            to profit lines. 
            You key in the following information:

            Employee's name (which is verified before proceeding further)
            Gross pay
            Net pay
            Federal income deduction
            Social Security (FICA)deduction
            And up to 8 more deductions that you name.

            C-A-S-E checks that  the parts all add up  to equal the gross pay
            and recycles the input screen if corrections are required. 
            You next key in:

            Percent of time spent on each profit line or overhead.

            C-A-S-E again makes sure that the total is 100%.

            POSTING TO THE GENERAL JOURNAL
                  When ordered by the command to post the subsidiary journals
            to  the general journal  (selection C from the  Closing the Books
            Menu), C-A-S-E summarizes the  unposted Payroll Journal  transac-
            tions and makes the appropriate entries into the General Journal.
            Note that the labor costs  are allocated to profit lines but  not
            to particular cases.  Entering the  cost of  labor to  particular
            cases is done in the same way that partner's time is entered, but
            using the dummy account #100. See the examples.

            REPORTS AND DISPLAYS
                  The Payroll System prints a report  that lists, on separate
            pages for  each employee, the employee's  pay and deductions  for
            each pay period,  totaled for each month of  the year and for the
            year-to-date. The report then  gives the same information totaled
            for all employees.  The month by month reporting is  made regard-
            less  of your  choice  of accounting  periods  because government
            reports require this information. The employee pay report is also
            available for any selected employee.

                  The Payroll System will display the  monthly pay and deduc-
            tions  records for any one  employee at a time,  for the year-to-
            date.







                                                                           45
            C-A-S-E Operating Instructions

            REVISIONS
                  The Payroll  System records each  employee's status as cur-
            rently  employed,  on leave,  or terminated.  This status  may be
            changed at any time. Corrections to the pay record may be made by
            entering reversing transactions with negative amounts. At the end
            of the  year, the Payroll  System copies into the  new files only
            the records of those employees who have not been terminated.

            LABOR COST REPORT
                  The Payroll System lists and totals the labor expenses that
            have been entered for each product line between any two dates.


            PRINTING JOURNAL BLANK SHEETS
                  These operations are ordered  from the  Setting Up The  Ac-
            counting System Menu.

                  Make sure  that the  paper is  horizontally in  the printer
            [11" wide or wider]. Then select the type of  form that you want.
            The printer will print one page at a time until you answer "N" to
            the question "Any More?"

            MAIL MERGE AND FORM LETTERS
                  C-A-S-E enables  you do  mail merges  to send individually-
            addressed, variable form letters to any of the groups of  persons
            or businesses with whom you do business. These are your customers
            or clients  whom you have served, customers to whom you have sent
            invoices, and creditors listed on your accounts payable. For each
            group, you can choose to send to all the persons listed, to those
            with open jobs or unpaid invoices or unpaid payables, or to those
            whom you designate.

                  You must  start with  a  form letter  to send.  These  have
            specific names:  JOBLETT.TXT for  jobs or cases,  INVLETT.TXT for
            invoices, PAYLETT.TXT  for accounts  payable. The  maximum letter
            size  is 5000 characters, which is more  than 2 pages. The letter
            must be prepared  in DOS-text  format, commonly  called the  non-
            document mode by most word processors. This format uses only  the
            printable  characters, spaces, line  feeds, carriage  returns and
            form feeds (paper  ejects). C-A-S-E makes each copy of  this form
            letter  different by  inserting  such things  as  the addressee's
            name, his or  her address, case or  job name, dates  and amounts.
            C-A-S-E will also prepare mailing labels for each of the  letters
            to be sent, if you wish.

                  You  indicate where  each of  the variable  items is  to be







                                                                           46
            C-A-S-E Operating Instructions

            inserted by using the otherwise-unused  character ^ followed by a
            number  from 1  to 8:  ^1, ^6,  etc. The  insertion codes  are as
            follows:

            INSERTION CODES FOR ALL LETTERS:
            ^1  Date
            ^2  Addressee
            ^3  First line of address (this is often the firm's name)
            ^4  Second line of address
            ^5  Third line of address
            ^6   Fourth line of address  (Insert codes for all lines         
            unless you know that no address requires all lines.)

            INSERTION CODES FOR JOB OR CASE LETTERS
            ^7  Name of job or case

            INSERTION CODES FOR INVOICE LETTERS
            ^7  Invoice date (as in 3 June, 1988)
            ^8  Amount owed (inserts $ before amount)
            ^9  Invoice number (inserts # before number)

            INSERTION CODES FOR PAYABLES LETTERS
            ^7  Date that debt was incurred (as in 3 June, 1988)
            ^8  Amount owed (inserts $ before amount)

                  Therefore you will probably start a JOBLETT.TXT form letter
            as follows:

                                                   ^1

                  ^2
                  ^3
                  ^4
                  ^5
                  ^6

                  Re: ^7

                  Dear ^2,

                        Sandoval and  Duerksen  Consulting  has been  able  to
            obtain considerably larger offices  at a more convenient location
            and will be moving shortly  etc., etc.

                  C-A-S-E  cannot reformat  your  letter to  account  for the
            different lengths of the inserted variables but simply pushes the







                                                                           47
            C-A-S-E Operating Instructions

            remaining characters in  the line to the  right. Therefore, allow
            sufficient space at the end of each line that contains an insert-
            ed variable  so the end does  not project beyond  the margin when
            the longest value of the variable has been inserted.

                  C-A-S-E allows you to use preprinted letterheads or it will
            print your letterhead  in the same  way as it does  for invoices.
            However, you must put the proper number of blank lines at the top
            of the letter for  the type of letterhead that you use,  and, for
            multi-page letters, you  must insert  page breaks  at the  proper
            places. Try out  a new letter by asking  for only one copy. Then,
            once you  get a format that  suits your purposes, make  a note of
            the lines at which certain items appear for ease in making future
            letters.

                  Copy the form letter, under its required name, to the  same
            directory that has the data for your accounts. To use the letter,
            move to  the menu  for  that system:  for example,  the  invoices
            (credit system) menu  for a letter addressed to persons  who have
            been invoiced.  Then select Issuing  Form Letter  from the  menu.
            Then answer the questions from the screen about whether you  want
            address  labels also, and  to which persons you  want the letters
            sent: all in  the file, those with open  jobs or unpaid accounts,
            those  whom you designate.  If you choose to  designate, you will
            enter  the numbers of the items, be  they job, invoice or payable
            records. C-A-S-E will  first print the letters, then  the address
            labels (after stopping for you to install the label stock).

            TRANSACTION NUMBERS
                  Transaction numbers  may be  between 1 and  9999 for  sales
            journal, general journal,  invoices and  payables, and 1 and  999
            for cases.  If  at an annual closing the next  transaction number
            is more  than 8000 [800  for cases],  the system will reset  that
            sequence to  1.   This gives you  room for 2000  of each  type of
            transaction in the  coming year and a cycle  of more than 4 years
            between repetitions.   If you  produce more than  this number  of
            transactions in  a  year, then  you  can  reset  the  transaction
            numbers through  selection D  of the  Setting Up  The  Accounting
            System Menu. 

            MAKING BACKUP COPIES
                  All disk drives fail  eventually, and  you don't know  when
            they  will. When  a  hard disk  fails you  are really  in trouble
            because you  lose not only the  data you were working  on but all
            other data  from other tasks  that you stored on  the disk months
            before.  Therefore,  always make  backup  copies  of  data before







                                                                           48
            C-A-S-E Operating Instructions

            accumulating  more data  than  you  are prepared  to lose  or  to
            replace.
                  On a hard  disk system, insert a formatted floppy  into the
            drive  that you have  designated for backup. From  the Main Menu,
            Select L, Make  Backup of Data to Floppy  Disk. This uses the DOS
            BackUp command. If  you have more data than  one floppy can hold,
            you will be prompted to insert another. If you  use more than one
            floppy, number them in sequence because you will have to  Restore
            them in the same sequence once you have repaired a failed disk.

                  To  restore to  a new  or  repaired hard  disk, set  up the
            C-A-S-E directories with the same names and structure as  before.
            Move into  the C-A-S-E Data  Directory. Put the  number 1  backup
            floppy into drive A:. Then command Restore A: C:*.*. If your data
            requires  more than one  floppy, you will be  prompted to replace
            the floppy when all its data have been copied.

                  On  a dual-floppy  system you  cannot  use the  Make Backup
            selection from  the Main Menu,  because one drive  must hold  the
            C-A-S-E  Program Disk and the  other the company  accounting data
            disk.  Therefore  you  make  backup copies  after  you exit  from
            C-A-S-E by using the DOS DiskCopy or Copy *.* commands.  Prefera-
            bly use  three data  disks in  rotation, so  that if one  pair of
            disks are ruined by failure of the source drive when copying, you
            have a still relatively recent disk to work from.


            CHOICES TO BE MADE WHEN STARTING UP

            ONLY NEW JOBS [OR] ALL JOBS, NEW TRANSACTIONS [OR]
            ALL JOBS, ALL TRANSACTIONS
                  When starting up, you must decide whether to cover only new
            cases  or to input all open cases at the startup. Either of these
            will work. However, only transactions made after the startup will
            be  recorded, so  that existing  cases must  be completed  on the
            basis of  one part old-fashioned records,  the other part C-A-S-E
            records. If  presentation of new-style records  is thought impor-
            tant, the prior transactions could be entered and then the  books
            closed as for the  end of a year. Then make the  official startup
            as if it were the start of a new year.

            DATA TO BE INPUT WHEN STARTING UP
                  The  current  values  of existing  assets,  liabilities and
            capital must be  input when starting up the C-A-S-E  system. Look
            over the  list of these accounts  and add any more  that you find
            necessary. Determine the amount for  each account. Make sure that







                                                                           49
            C-A-S-E Operating Instructions

            the sum  of liabilities and  capital equals the  assets. For  any
            nonzero amount,  enter it  through a General  Journal transaction
            that  describes  the  transaction  as the  entry  of the  initial
            amount,  debits or  credits  the appropriate  account,  and lists
            Account 100, Startup Dummy, as the opposite account. 

            RESETTING TRANSACTION NUMBERS
                  You may choose  to start with a new series  of transaction,
            invoice, case and  employee numbers each starting with 1.  If so,
            you don't need to do anything. If you wish  to start with differ-
            ent  numbers, you must enter  these numbers through  selection D,
            Reset Transaction Numbers, of the Setting Up Menu. 

            EXAMPLES OF UNUSUAL TRANSACTIONS

            CHOOSING THE PROPER ACCOUNT NUMBERS
                  Most  difficulties in  entering transactions  center around
            which  account to debit  and which to credit.  For sales, invoice
            and payroll  transactions these  choices are  made  by the  entry
            program because  these types  of transaction follow  simple logic
            that  is implicit in each transaction. This can't be done for the
            General Journal  because of the wide variety of transactions that
            must  be made.  For  each  General Journal  transaction  you must
            decide which account to credit and which to debit.

            CHARGING PAID LABOR COSTS TO CASES
                  In the small knowledge firm most of the "direct labor cost"
            of each case is contributed by the proprietor or by partners, but
            tax law prohibits  this from  being accounted as  a cost.  Only a
            small  portion of  "direct  labor cost"  is contributed  by  paid
            employees,  who typically  perform  overhead tasks.  However, the
            proprietor or partners need to know both how much of their "free"
            time has  been devoted  to each case  and how much  that time  is
            worth, and also how much paid labor  has been used in that  case.
            To have one simple, consistent system for recording the costs  of
            cases, C-A-S-E  separates the payroll transactions  from the case
            transactions. All  payroll  costs are  automatically  charged  to
            either profit lines or overhead, but not to particular cases. 

                  Don't  charge paid  labor  costs to  cases by  debiting the
            profit  line expense  account and  crediting some  other account.
            Since paid labor has already been accounted for, that would count
            paid labor twice. 

                  Charge paid labor costs  to cases by debiting and crediting
            the same dummy account #100 (or another dummy that you  establish







                                                                           50
            C-A-S-E Operating Instructions

            for this purpose) and entering the case number in the usual place
            in  the transaction entry screen.  C-A-S-E then lists  that labor
            cost against that case without affecting the rest of the system.

            CHARGING PARTNER'S TIME TO JOBS
                  Charge the value of  a partner's time to a case by debiting
            and  crediting the  same  account for  that  partner's consulting
            (account numbers 801 to 804) and entering the  case number in the
            usual place  in the transaction entry  screen. C-A-S-E then lists
            that cost  against that case  without affecting the  rest of  the
            system.

            SALES FROM OTHER PROFIT LINES
                  When a case in one profit line sells material from  another
            profit line       ,  the transaction  can  be  handled in  several
            different ways.  One simple way is  to record the sale  as if the
            item  were directly  sold by  the contributing profit  line (this
            gives all the profit  to that profit line) and  record its retail
            value  as a cost in the case  records by entering it as a general
            journal  transaction  that  credits  and  debits the  same  dummy
            account, say  #100. A  different  way would  be to  transfer  the
            material at cost or an agreed price from the contributing  profit
            line to  that which has the  case. To do so,  debit the inventory
            account of the receiving profit line and credit the sales account
            of the contributing profit line. Then account for the profit from
            selling the material by the method in the next paragraph.

            RECORDING PROFIT IN JOB RECORDS
                  When all  the cost  items  for a  case have  been  properly
            billed,  the case  records show  a zero  balance rather  than the
            profit earned. This  is for  two reasons. First, knowledge  firms
            typically bill  expenses  as  incurred  without  profit,  earning
            profit from  selling the proprietor's or  partners' expert knowl-
            edge or skill as determined  by the time required to exercise it.
            The client pays the  expense portion of  the bill based on  exact
            statements of the  expense items. Second, the zero balance  is an
            easily-recognizable condition  that serves  as a signal  that all
            items have been billed.

                  However,  profit on  an  expense item  may well  be allowed
            under some  conditions. Consider the firm  that offers both goods
            or  services at  fixed prices  and consulting  services  as well.
            Suppose that the firm offers a book or manual that gives instruc-
            tion in  the same subject as  that in which the  firm consults. A
            client for the  consulting service might well also desire  a copy
            of the manual. The  firm sells  the manual at  the normal  retail







                                                                           51
            C-A-S-E Operating Instructions

            price with profit included. This requires two transactions in the
            general  journal  and the  case  records.  The  first transaction
            records  the cost  of the manual  in the  normal way.  The second
            records the difference  between its  cost and its selling  price,
            debiting  and crediting  the same  dummy  account. Then  the case
            records will again  show zero when all items are  properly billed
            without affecting the rest of the system.

            TRANSACTIONS WITH MORE THAN TWO ACCOUNTS
                  Transactions occur that involve more than two accounts. For
            example, a loan payment  typically involves three accounts: cash,
            loans and  interest expense. C-A-S-E requires  that this transac-
            tion be divided into  its constituent parts, making two  transac-
            tions. The  first transaction credits  cash and  debits loans for
            the  amount of  the principal  repayment, the  second transaction
            credits  cash  and  debits interest  expense  for the  amount  of
            interest paid.

            CLOSING THE BOOKS
                  Closing the Books  operations are ordered through the Clos-
            ing The  Books Menu.  Access to  this menu may  be controlled  by
            password if desired.

                  There are three levels of closing  the books, Current Peri-
            od, Period Close, and Annual. 

            CURRENT PERIOD
            Current Period is  ordered by posting the  subsidiary journals to
            the General Journal  and then posting the General Journal  to the
            Current Period Accounts. These  simply post all transactions made
            to date to the Current Period field of the List of Accounts. This
            enables you  to make a quick  estimate of how you  are doing, and
            can be done at any time during a  period and any number of times.
            It ignores  periodic charges  such as depreciation  and interest.
            The  assessment of revenues versus expenses is obtained by either
            printing  and examining  the  Account List  (Reports,  Accounts &
            Journals Menu selection  A) or computing and  printing the Sales-
            vs-Expenses Report [Closing The Books selection I].

            PERIOD CLOSING
            Period Closing transfers the  Current Period account summaries to
            the  Year-to-Date  fields and  reports  the  sales,  expenses and
            income through the balance sheet and the income statement. Income
            statements  are available in  two forms: for the  period only and
            year-to-date.







                                                                           52
            C-A-S-E Operating Instructions

            ANNUAL CLOSING
            Annual Closing  does the same  as Period Closing  and adds  three
            extra  operations. Initially  it  prepares the  accounts  for the
            coming year's transactions so you can carry on while closing  the
            old year's books. Then it closes the old year's books and makes a
            final calculation of  income for the old year.  Last it posts the
            old  year's final  results to the  coming year's  initial account
            values.   The operations  for  starting the  new year's  disk  or
            directory  are ordered  through  the  Starting A  New  Year Menu,
            access to which is also controlled by password if desired. 


            DETAILED INSTRUCTIONS
                  The following  instructions are  labeled [P&A]  or [A], de-
            pending on which  level of closing is being done.  You select the
            number of accounting periods per year when initially entering the
            names of the  firm, the partners, etc. The available  choices are
            1, 2, 4, or 12. You designate the number of the period within the
            year when resetting the dates for  the period. If you change  the
            number of accounting  periods per year during the year,  you must
            use the  Reclosing choice  from  the Closing  The Books  Menu  to
            remake the Balance Sheets and Income Statements.

            [P&A]  PHYSICAL INVENTORIES
                  Take physical inventories of your materials with the appro-
                  priate  degree of accuracy. Enter the value of the physical
                  inventory for each profit line as follows. If the value for
                  the inventory  named in account  #839 is actually $1900.10,
                  enter  it into  the General  Journal as  follows. "Physical
                  Inventory, Profit Line  X, Date",  1900.10, Credit  Account
                  839,  Debit Account  102.  (Account #102  is  the inventory
                  dummy account.) 

            [A]  MAKE DUPLICATE RECORDS
                  The  first  task in  annual  closing is  to make  duplicate
                  records and  backup copies.   Before you  do anything else,
                  make backup diskettes of the accounting data directory. 

                  If you are on  a dual-floppy system you may use DiskCopy or
                  Copy *.*. Make three; one  will be for the coming year, one
                  for the  old year,  and one  is backup.  You will  use  the
                  diskettes for  the coming  year  and for  the old  year  as
                  appropriate, depending on which task you are doing or which
                  data you are working on.

                  If  you are  on a  hard disk,  make a  backup  copy through







                                                                           53
            C-A-S-E Operating Instructions

                  selection L of the Main Menu, Make Backup of Data to Floppy
                  Disk. Then copy the data for the old year into the directo-
                  ry for  last year's data that you  established when setting
                  up directories.  If you  didn't make  a directory then  for
                  last year's data, you must do so now.

            [A]  SELECTING ACCOUNTS FOR DIFFERENT YEARS
                  Dual-floppy  users select  the accounts  for the  different
                  years by  inserting the appropriate  disk in Drive B. Hard-
                  disk users switch directories by using the Set Paths choice
                  from the  Setting Up  Menu, or  by restarting  C-A-S-E  and
                  entering the  name for that particular set  of accounts. If
                  you haven't already done so,  you will need to  enter a new
                  name and path.

            [A] ENTER NEW DATES
                  Before  you do anything  else after making two  sets of the
                  accounting data, one for each year, reset the dates for the
                  copy for the coming year. Then you know which set is which.

            [A]  BE SURE TO WORK ON THE CORRECT SET OF ACCOUNTS
                  You  will have  noticed  by now  that C-A-S-E  displays the
                  company name and  the year to which the accounts  belong as
                  the heading of every menu. When  you have two sets of books
                  in work at the same time, as when closing the books for the
                  previous year after the start of the new year, always check
                  the heading of the  menu to see whether you have named  the
                  correct set of accounts. If there is any doubt about  which
                  set of records  is the one that you  want to work on, don't
                  enter its initials at the first C-A-S-E screen, but enter a
                  blank. This gets you to the Setting Paths Screen, and  when
                  you  enter through this  screen it shows you  both the name
                  and  year of the accounts  and the path to reach them. This
                  will enable to  confirm that you are working on  the proper
                  set.

            [A]  PREPARE DATA FOR COMING YEAR
                  Use the disk or directory for the coming year. This  opera-
                  tion is  commanded through selection B, Get  Disk Ready, of
                  the Starting a New Period or Year Menu.
            This:

            Empties the general and sales journals.
            Resets the last  transaction number to 0 if  more than 80% of the
                  sequence capacity has been used.
            Prompts you to enter the dates of the new year and period. If you







                                                                           54
            C-A-S-E Operating Instructions

                  decide  that  you want  a  different  number  of accounting
                  periods  in a  year, this  is  the best  time  to make  the
                  change.
            Removes the  records for paidup invoices and payables, for closed
                  cases and  projects, for terminated  employees and for dis-
                  carded equipment.
            Instructs you  to erase  the following files:  Balance.dbf, Acct-
                  List.dbf and CapEquip.dbf.

                  This disk or directory is now ready to receive transactions
            for  the  coming year,  although  it is  not  ready for  any more
            complicated work.

                  Now switch diskettes or switch to the directory for the old
            year. Most of the following operations  are commanded through the
            Closing The Books Menu.

            [P&A]  SALES TRANSACTIONS
                  If there are any unentered sales transactions, enter these.

            [P&A]  GENERAL JOURNAL TRANSACTIONS
                  If  there are  any unentered general  journal transactions,
                  enter these. 

            [P&A]  PRINT RECEIVABLES LIST
                  Print the list and total of outstanding invoices.

            [P&A]  PRINT PAYABLES LIST
                  Print the list and total of accounts payable.

            [P&A]  PRINT THE SALES JOURNAL

            [P&A]  POST THE SUBSIDIARY JOURNALS
                  Post  the subsidiary  journals (Sales  and Payroll)  to the
                  general journal.

            [P&A]  COMPUTE DEPRECIATION
                  Compute depreciation and post it to the general journal.

            [P&A]  PRINT CAPITAL EQUIPMENT
                  Print the Capital Equipment List.

            [P&A]  POST GENERAL JOURNAL TO CURRENT PERIOD ACCOUNTS
                  Post general  journal transactions  to  the Current  Period
                  field of the Accounts. At this time you may wish to examine
                  the Current  Period summaries  of the  transactions for the







                                                                           55
            C-A-S-E Operating Instructions

                  period, to see what  happened in this period. If you get an
                  error message  saying that  certain  transactions were  not
                  posted because they  carried nonvalid account numbers,  you
                  should Display  the General Journal  with the Unposted Only
                  option. This will show you the unposted transactions so you
                  can  select them  by  transaction number  and  correct them
                  through the General Journal Menu. 


            [P&A]  TRANSFER CURRENT PERIOD BALANCES TO YEAR-TO-DATE FIELD
                  This adds the current-period summaries  to the year-to-date
                  totals and zeroes the current period fields.

            [P&A]  PRINT ACCOUNT LIST

            [P&A]  COMPARE & ADJUST ACCOUNT BALANCES
                  This  is not a  computer operation.  Compare  the following
                  account balances  with the physical  assets or the detailed
                  list:

                  Cash against the total in bank and on hand.
                  Petty cash against the petty cash on hand.
                  Accounts  Receivable  against  the  total  for  outstanding
                  invoices.
                  Accounts  Payable against  the total  for  outstanding pay-
                  ables.
                  Capital Equipment against the Capital Equipment report.
                  Accumulated  Depreciation  against  the  Capital  Equipment
                  report.
                  Inventory Accounts against the physical inventory.

                  There should be no differences except in the case of inven-
            tories of materials or changes in capital equipment.  For materi-
            als, the differences should reflect the use of materials that has
            occurred without  documenting transactions.  If you  have already
            entered  physical  inventory  values, C-A-S-E  will  already have
            adjusted  the calculated  values  and made  the  proper adjusting
            entries.  Sort out the differences and make adjusting entries  in
            the General Journal.  

            [P&A]  POST GENERAL JOURNAL AGAIN
                  After entering  any adjusting transactions,  again post the
                  general journal to the accounts. 

            [P&A]  REPRINT LIST OF ACCOUNTS
                  Reprint the List of  Accounts.  Check  to see that the  ad-







                                                                           56
            C-A-S-E Operating Instructions

                  justments have corrected the errors.

            [P&A]  PRINT GENERAL JOURNAL

            [P&A]  COMPUTE THE BALANCE SHEET
                  This  computes the  income and  the  Balance  Sheet in  the
                  Balance file  and copies  the balance sheet to  the set  of
                  BalShts records for the appropriate period for later refer-
                  ence.

            [P&A]  PRINT THE BALANCE SHEET
                  This prints the balance sheet for any completed period,  as
                  you designate.

            [P&A]  COMPUTE THE INCOME STATEMENT
                  This computes the Income Statement in the CoIncome file and
                  copies it to the IncStats file for later reference.

            [P&A]  PRINT THE INCOME STATEMENT
                  This prints the  Income Statements for any completed period
                  in either of  two formats as you designate, for  the period
                  only or year-to-date.

            [A]  COMPUTE THE FEDERAL FORM ENTRIES

            [A]  PRINT THE FEDERAL FORM ENTRIES

            [A]  TRANSFER THE OLD YEAR'S RESULTS TO THE COMING YEAR'S DISK OR
            DIRECTORY
                  Exit C-A-S-E and copy the following files from the disk  or
                  directory for the old year to the disk or directory for the
                  coming  year:    Balance.dbf,  AcctList.dbf,  CapEquip.dbf,
                  Employee.dbf.

            [A]  RESTART WITH COMING YEAR'S DATA
                  Switch to the accounts for the coming year. From the  Start
                  New Year Menu choose "Add Last Year's Final Data to the New
                  Year's Disk".   This moves all the information to  the cor-
                  rect places in the new files.

            [A]  PREPARE NEW BALANCE SHEET AND INCOME STATEMENT BLANK RECORDS

                  This prepares  sufficient records in  the Balance Sheet and
                  Income Statement files for the number of accounting periods
                  that you have previously declared will be in the year. 







                                                                           57
            C-A-S-E Operating Instructions

            [A]  FINAL COPIES
                  Once you have made sure that all has gone correctly and the
                  files  for both  years  are readable  and working,  make  a
                  permanent diskette copy of the accounts for the end of  the
                  old year  and store  it in  a safe  place.   Also store the
                  printed reports.  The working diskettes  may then be erased
                  and  hard disk users  may erase the files  in the directory
                  for the old year.

            RECLOSING THE BOOKS
                  If you find that you have made major mistakes in accounting
            since the  start of the  year and would like  to correct matters,
            you can use the Reclosing  choice of the Closing The  Books Menu.
            This  lets you change the number of  periods in the year, returns
            the accounts to the values of the start of the year and makes new
            Balance  Sheet and  Income Statement forms  according to  the new
            number of  periods. From  this start, while C-A-S-E  prevents you
            from  changing  any  existing  entries  you can  enter  reversing
            entries to reverse the effect of improper entries and then  enter
            the proper entries. 

                  The simplest way to enter a reversing entry is to enter the
            exact same entry  except with a negative amount  and, if you have
            room, an explanation or reference to one.  An alternate way is to
            enter  the  original  amount but  switch  the accounts  that  are
            debited and credited. This preserves the accuracy of the histori-
            cal  record, a  defense  against  chicanery, but  enables  you to
            produce an accurate  set of Balance Sheets  and Income Statements
            for the intervening periods. 

                  Since the  original sales and payroll entries remain in the
            General Journal, it  is best to repost the correcting  entries in
            these  subsidiary journals  at the  ends of  the  same accounting
            periods. Do this by stepping through the periods and closing  the
            books as you would in a normal year.







                                                                           58






                                   PASSWORD PROCEDURE
                     THIS PAGE MAY BE STORED IN A CONFIDENTIAL PLACE

                  At the start the password procedure is invisible because no
            password  has been chosen.  When the operator selects  any of the
            three modules that can be protected by password (Payroll, Closing
            the Books,  Starting a New  Period or Year),  C-A-S-E opens  that
            module without indicating that password protection is possible. 

                  To choose a password, move to the Setting Up the Accounting
            System  Menu. Then  make a  selection that is  not listed  on the
            screen, ^  (the caret symbol, shift  6). The screen will  ask for
            your  password  and  illuminate  a  box for  20  characters. Your
            password may  be any word or  phrase of up to  20 characters. You
            may change the password at any time by repeating this procedure. 

                  Once you  choose a password, when the  operator selects one
            of the  protected modules the  screen asks for  the password  but
            does not  illuminate a box  or show what the  operator enters for
            the  password. If  the operator's  password matches  the original
            password, C-A-S-E opens the module. Otherwise, C-A-S-E returns to
            the Main Menu.

                  The password is stored in the files in an encrypted form so
            that it cannot  be read even by somebody  who can read the files.
            Since the programs that use the password are encrypted also,  the
            encryption procedure is hidden. Naturally, restrict the knowledge
            of  how to  enter a  new password  to as  few trusted  persons as
            possible. However,  even if somebody  learns how to  enter a  new
            password and does so to enter the system, they leave the evidence
            of their entry.  Since they cannot return to your  original pass-
            word the change in password indicates their entry. If you consid-
            er the  secrecy of your accounting  information worth protecting,
            change passwords frequently and use  the passwords daily. If  you
            discover  an  unauthorized change  in  the  password,  conduct an
            investigation to  determine who tried to  access the confidential
            modules. 

                  To  cancel the  password  system, merely  <Enter>  when the
            screen  asks for  the new  password. Then the  password procedure
            becomes again invisible.







                                                                           59



                              LIST OF FILES IN CASE SYSTEM

            FILES ON THE INITIAL C-A-S-E DISTRIBUTION DISK

            CASE.ZIP     This is the C-A-S-E system.
            PKUNZIP.EXE        This   expands   [unzips]  CASE.ZIP   into  the
                              C-A-S-E system.
            UZIPCASF.BAT This directs the unzipping for a dual-floppy        
                system.
            UZIPCASH.BAT This directs the unzipping for a hard-disk
                         system.
            READ-CAS.ME1 and READ-CAS.ME2 carry instructions for  the initial
            unzipping.

            DATA FILES ON THE C-A-S-E DATA DISK
            DIRECTORIES \CASE\MTF AND \CASE\SD

            ACCTLIST.DBF
            ACCTPAY.DBF
            BALANCE.DBF
            BALSHTS.DBF
            CAPEQUIP.DBF
            CASEINFO.DBF
            CASETRAN.DBF
            COINCOME.DBF
            CREDTRAN.DBF
            EMPLOYEE.DBF
            EMPPAY.DBF
            FEDINC.DBF
            GENJOUR.DBF
            INCSTATS.DBF
            INVOLIST.DBF
            MAILFILE.DBF
            SALEJOUR.DBF
            MEMCOMP.MEM
            MEMGEN.MEM
            MEMPRNT1.MEM
            MEMPRNT2.MEM
            MEMPRNT3.MEM
            MEMPRNT4.MEM
            MEMPRNT5.MEM
            ACTINDEX.DBF
            BALSDX.DBF
            CAPDEX.DBF
            COIINDEX.NTX







                                                                           60
            C-A-S-E List of Files

            CREDNUM.NTX
            CSALPHA.NTX
            CSNUM.NTX
            DATECASE.NTX
            EMPAYDEX.NTX
            FEDINDEX.NTX
            FIRMPAY.NTX
            INCSDX.NTX
            INVNUM.NTX
            JOURDATE.NTX
            JOURNUM.NTX
            MPDEX.NTX
            PAYDATE.NTX
            PAYDEX.NTX
            PAYRDEX.NTX
            SALEDATE.NTX
            SALENUM.NTX
            JOBLETT.TXT
            INVLETT.TXT
            PAYLETT.TXT

            PROGRAM FILES ON THE C-A-S-E DATA DISK
            DIRECTORY UTILPROG

            TREED.COM
            Shows the  directory structure  of a disk as  a diagram.  This is
            particularly useful for hard  disks. Command: TREED [directory to
            start diagram from]

            CASE.BAT
            An example  of a DOS program  (what DOS calls a  batch file) that
            enables you to initiate C-A-S-E from the root directory of a hard
            disk and to return to that root directory after you have finished
            working with C-A-S-E. The words after the CD commands are  direc-
            tory names and may be changed to suit your own directory setup.

            PROGRAM FILES ON THE C-A-S-E Program Disk

            CASE.EXE
            This is the C-A-S-E program.

            ROADS.DBF
            This data file contains the names of the sets of accounts and the
            paths to their directories that you set up.







                                                                          61







                                          MENUS




             YOUR COMPANY'S ACCOUNTING
             --- 1988 ---
                 MAIN MENU

             A   Cash Sales and Sales Journal
             B   Credit Sales and Invoices
             C   Accounts Payable
             D   General Journal
             E   Cases or Projects
             F   Payroll
             G   Reports, Accounts and Journals
             H   Capital Equipment
             I   Closing the Books for Period or Year
             J   Starting a New Period or New Year
             K   Setting Up The Accounting System
             L   Make Backup of Data to Floppy Disk
             X   Exit the Accounting Program



            Copyright 1986, 1987 John Forester: All Rights Reserved






             YOUR COMPANY'S ACCOUNTING
             --- 1988 ---
                 CASH SALES & JOURNAL MENU

             A   Enter Cash Sale
             B   Display Sales Journal
             C   Print Sales Journal
             X   Return to Main Menu







                                                                          62
            C-A-S-E Menu Illustrations



             YOUR COMPANY'S ACCOUNTING
             --- 1988 ---
                 INVOICES MENU

             A   Make Product Invoice
             B   Make Consulting Invoice
             C   Record Payment of Invoice
             D   Print And Total List of Invoices
             E   Print Copy of Old Invoice
             F   Print Invoice Mailing Label
             G   Delete Existing Invoice
             H   Display Invoice Summaries
             I   Issue Invoices Form Letters
             X   Return to Main Menu








             YOUR COMPANY'S ACCOUNTING
             --- 1988 ---
                 ACCOUNTS PAYABLE MENU

             A   Record A Credit Purchase
             B   Record Payment of Credit Amount
             C   Show List of Payables
             D   Print and Total Payables
             E   Delete A Payable
             F   Print A Mailing Label
             G   Issue Payables Form Letters
             X   Return To Main Menu







                                                                          63
            C-A-S-E Menu Illustrations



             YOUR COMPANY'S ACCOUNTING
             --- 1988 ---
                 GENERAL JOURNAL MENU

             A   Enter General Journal Transactions
             B   Display General Journal on Screen
             C   Print General Journal
             D   Revise Incorrect Account Numbers
             X   Return To Main Menu









             YOUR COMPANY'S ACCOUNTING
             --- 1988 ---
                 CASES MENU

             A   Add New Case
             B   Receive Retainer
             C   Display Financial Transactions
             D   Print Financial Report
             E   Disburse Retainer
             F   Close Case
             G   Change Case Information
             H   Show List of Cases
             I   Print List of Open Cases
             J   Print List of Retainers
             K   Print Address Labels
             L   Issue Cases Form Letters
             X   Return To Main Menu







                                                                          64
            C-A-S-E Menu Illustrations



             YOUR COMPANY'S ACCOUNTING
             --- 1988 ---
                 PAYROLL MENU

             A   Enter Pay for Employees
             B   Display Employee's Pay Records
             C   Print Payroll Report For All Employees
             D   Add Employee
             E   Change Employee Status
             X   Return To Main Menu









             YOUR COMPANY'S ACCOUNTING
             --- 1988 ---
                 REPORTS, ACCOUNTS AND JOURNALS MENU

             A   Display List of Accounts With Data
             B   Print List of Accounts With Data
             C   Print Transactions and Balance for an Account
             D   Display Sales Journal
             E   Print Sales Journal
             F   Display General Journal
             G   Print General Journal
             H   Print Labor Cost Report
             X   Return to Main Menu







                                                                          65
            C-A-S-E Menu Illustrations



             YOUR COMPANY'S ACCOUNTING
             --- 1988 ---
                 CAPITAL EQUIPMENT MENU

             A   Enter New Capital Equipment
             B   Print Capital Equipment List
             C   Compute Depreciation
             D   Revise Factors For Capital Equipment Item
             X   Return to Main Menu








             YOUR COMPANY'S ACCOUNTING
             --- 1988 ---
                 CLOSING THE BOOKS MENU

             A   Set New Period Dates
             B   Print Sales Journal
             C   Post Subsidiary Journals To General Journal
             D   Compute Depreciation & Post To General Journal
             E   Enter Transactions Into General Journal
             F   Print General Journal
             G   Post General Journal Transacts to Current-Period Accounts
             H   Print Account List and Balances
             I   Compute and Print Expenses vs Revenues, Curr. Per. To Date
             J   Transfer Curr. Per. Balances to Year-To-Date Accounts
             K   Compute Balance Sheet
             L   Print Balance Sheet
             M   Compute Income Statement
             N   Print Income Statement
             O   Compute Federal Income Tax Form Entries
             P   Print Federal Income Tax Form Entries
             Q   Return To Beginning Of Year For Reclosing All Periods
             X   Return To Main Menu







                                                                          66
            C-A-S-E Menu Illustrations



             YOUR COMPANY'S ACCOUNTING
             --- 1988 ---
                 STARTING A NEW PERIOD OR NEW YEAR MENU

             A   Set New Dates For Period
             B   Get Disk Ready For New Year's Transactions
             C   Add Last Year's Final Data To New Year's Disk And
                 Prepare Balance Sheet and Income Statement Blank Records
             D   Prepare Balance Sheet and Income Statement Blank Records
             X   Return To Main Menu








             YOUR COMPANY'S ACCOUNTING
             --- 1988 ---
                 SETTING UP THE ACCOUNTING SYSTEM MENU

             A   Enter Names of Company, Partners, Profit Lines
             B   Print Forms For General Journal
             C   Print Forms For Sales Journal
             D   Reset Transaction Numbers
             E   Change List of Accounts
             F   Change Balance Sheet Line Items
             G   Change Income Statement Line Items
             H   Set Paths To Sets of Accounts
             X   Return To Main Menu







                                                                          67
            C-A-S-E Menu Illustrations



             YOUR COMPANY'S ACCOUNTING
             --- 1988 ---
                 CHANGING ACCOUNTS MENU

             A   Displaying Accounts
             B   Adding A New Account
             C   Revising Account Name & Control Codes With Safety Check
             D   Activating Or Inactivating An Account
             E   Changing The Amounts In An Account
             F   Deleting An Account
             G   Revising Acct Name & Control Codes Without Safety Check
             X   Return To Setup Menu







             YOUR COMPANY'S ACCOUNTING
             --- 1988 ---
                 CHANGING BALANCE SHEET MENU

             A   Add A Line Item To Balance Sheet
             B   Change A Balance Sheet Line Item
             C   Delete A Balance Sheet Line Item
             X   Return To Setup Menu







             YOUR COMPANY'S ACCOUNTING
             --- 1988 ---
                 CHANGING INCOME STATEMENT MENU

             A   Add A Line Item To Income Statement
             B   Change An Income Statement Line Item
             C   Delete An Income Statement Line Item
             X   Return To Setup Menu







                                                                          68
            C-A-S-E Menu Illustrations


                    Company Information Data Entry Screen Number One

            (Long lines on the screen have been wrapped to the next line 
            for printing on your printer with proper margins.)

                         ENTERING COMPANY STRUCTURE INFORMATION
            Company Name: Sandoval  & Duerksen          Your IRS Num:  9999-
            00000001

                        Short Name        Full Name
            Partner #1: Sandoval          Morris J. Sandoval
            Partner #2: Duerksen          Eugene O. Duerksen
            Partner #3:
            Partner #4:

                 DO NOT USE "O" OR "X" OR " " FOR PROFIT LINE ABBREVIATION
            Profit  Line A:SandConsul  Abbrev for Profit Line A:S Profits To
            Partner No:1
            Profit  Line B:DuerConsul  Abbrev for Profit Line B:D Profits To
            Partner No:2
            Profit Line C:Instruct    Abbrev for Profit Line  C:I Profits To
            Partner No:1
            Profit Line D:             Abbrev for Profit Line D:X Profits To
            Partner No:0

                                   More On Next Screen


                  Company Information Data Entry Screen Number Two

                           ENTERING JOB OR PROJECT INFORMATION

            Insert Your Words For The Following:
            (Asterisked Items May Be Left Blank If You Don't Use Them)
                           Job, Case or Project: Case
                                       Customer: Attorney
                               *Customer's Firm: Law Firm
                      Customer's Personal Phone: Personal Phone
                       *Customer's Firm's Phone: Firm's Phone
            *Principal Whom Customer Represents: Principal
                   Deposit, Retainer or Advance: Retainer

                                   More On Next Screen







                                                                          69
            C-A-S-E Menu Illustrations




                     Company Information Data Entry Screen Number Three

                             ENTERING LETTERHEAD INFORMATION

            Letterhead Form Number For Profit Line A: 1
            Letterhead Form Number For Profit Line B: 1
            Letterhead Form Number For Profit Line C: 2
            Letterhead Form Number For Profit Line D: 1
                 Letterhead Form Number For Overhead: 1
                 
                     ENTERING PRINTER CONTROL CODES FOR REGULAR PRINTING
            Printer Command Must Be ASCII Numbers Separated by Single Spaces
            27 26 73 27 42 49 27 69 49 48 27 74

                                   More On Next Screen




                Company Information Data Entry Screens Four Through Nine

                              LETTERHEAD FORM NUMBER: 1 through 5

            UPPER: Line 1 Control Codes. LOWER: Line 1 Text.
            27 42 49 27 69 49 48 27 33
                            Sandoval & Duerksen Consultants
            UPPER: Line 2 Control Codes. LOWER: Line 2 Text.
            27 34
                                  12345 Some Street
            UPPER: Line 3 Control Codes. LOWER: Line 3 Text.

                                  Anywhere, CA 99999
            UPPER: Line 4 Control Codes. LOWER: Line 4 Text

                                     415-999-9999
            UPPER: Line 5 Control Codes. LOWER: Line 5 Text.


            UPPER:  Line 6 Control Codes. LOWER: Line 6 Text.

                                   More On Next Screen







                                                                          70
            C-A-S-E Menu Illustrations


               
                     Company Information Data Input Screen Number Nine

                              ENTERING PAYROLL INFORMATION

            Name The Payroll Deductions That You Wish To Use
            Leave The Other Boxes Blank

            Fed W/H      FICA        Pay Ded1      Cal SDI       Cal W/H
            Pay Ded4     Pay Ded5    Pay Ded6      Pay Ded7      Pay Ded8

                           ENTERING MISCELLANEOUS INFORMATION

            (Long lines  on the screen have been wrapped to the next line to
            allow printing on your printer with proper margins.)

                     1/2/4/12 Periods Per Year?  4        Sales Tax Rate  in
            Decimal?  0.0700

                    Date Format A(mer.)/B(rit.)? B  Separate Office and Bank
            Cash Accounts? F
                            Is Printer Handfed?  T    Pre-Printed Letterhead
            For Invoices? T
            Print Invoices  on 80-Column Printer? F             Floppy Drive
            For Backup Data: B







                                                                71







                                      INDEX
               Accounting
                 not an exact science  . . . . . . . . . . . .  12
               Accounting Periods  . . . . . . . . . . . . . . . 3
               Accounting System Structure . . . . . . . . . . . 2
               Accounts  . . . . . . . . . . . . . . . . . . . . 3
                 ASS(et  . . . . . . . . . . . . . . . . . . .  31
                 CAP(ital  . . . . . . . . . . . . . . . . . .  31
                 changes to list of  . . . . . . . . . . . . .  30
                 DUM(my  . . . . . . . . . . . . . . . . . . .  31
                 EXP(ense  . . . . . . . . . . . . . . . . . .  31
                 instruction codes for . . . . . . . . . . . .  31
                 LIA(bility  . . . . . . . . . . . . . . . . .  31
                 MustUse . . . . . . . . . . . . . . . . . . .  30
                 NonDelete . . . . . . . . . . . . . . . . . .  30
                 process codes . . . . . . . . . . . . . . . .  31
                 REV(enue  . . . . . . . . . . . . . . . . . .  31
                 subsidiary  . . . . . . . . . . . . . . . . .  32
                 types of  . . . . . . . . . . . . . . . . . .  30
                 UsedHere  . . . . . . . . . . . . . . . . . .  30
               Accounts payable  . . . . . . . . . . . . . . .  41
               Address labels  . . . . . . . . . . . . . . . .  23
               Advantages  . . . . . . . . . . . . . . . . . . . 1
               ANSI Screen driver  . . . . . . . . . . . . . .  15
               Backup copies . . . . . . . . . . . . . . .  14, 47
               Balance Sheet . . . . . . . . . . . . . . . . . . 4
               Balancing the Books . . . . . . . . . . . . . . . 9
               Bookkeeping
                 exact process . . . . . . . . . . . . . . . .  12
               Capital Equipment . . . . . . . . . . . . . . 5, 39
               Case History  . . . . . . . . . . . . . . . . . . 6
               Case Records  . . . . . . . . . . . . . . . . . . 6
               Case system . . . . . . . . . . . . . . . . . .  38
               Cases
                 list of . . . . . . . . . . . . . . . . . . .  39
                 report coding . . . . . . . . . . . . . . . .  39
               Closing . . . . . . . . . . . . . . . . . . . 5, 51
                 current period  . . . . . . . . . . . . . . .  51
                 detailed instructions . . . . . . . . . . . .  52
                 for period  . . . . . . . . . . . . . . . . .  51
                 for year  . . . . . . . . . . . . . . . . . .  52







                                                                72
               C-A-S-E Index

               Company information
                 data entry screen illustrated . . . . . . . .  68
                 entry of  . . . . . . . . . . . . . . . . . .  28
               Confidentiality . . . . . . . . . . . . . . . . . 4
               CONFIG.SYS
                 for files and buffers . . . . . . . . . . . .  23
               Consultants
                 useful for  . . . . . . . . . . . . . . . . . . 1
               Credit Sales  . . . . . . . . . . . . . . . . 6, 36
               Credits . . . . . . . . . . . . . . . . . . . .  10
               Current P&L . . . . . . . . . . . . . . . . . . . 4
               Data entry  . . . . . . . . . . . . . . . . . .  15
               Debits  . . . . . . . . . . . . . . . . . . . .  10
               Deposits  . . . . . . . . . . . . . . . . . . . . 6
               Depreciation  . . . . . . . . . . . . . . . . 5, 39
                 calculations  . . . . . . . . . . . . . . . .  40
               Designers
                 useful for  . . . . . . . . . . . . . . . . . . 1
               Direct start  . . . . . . . . . . . . . . . . .  22
               Disks
                 in set  . . . . . . . . . . . . . . . . . . .  17
               Displays
                 general . . . . . . . . . . . . . . . . . . . . 3
               DOS . . . . . . . . . . . . . . . . . . . . . .  18
                 directory commands  . . . . . . . . . . . . .  18
                 file commands . . . . . . . . . . . . . . . .  18
               Equipment required  . . . . . . . . . . . . . .  14
               Expense accounts  . . . . . . . . . . . . . . .  11
               Expenses  . . . . . . . . . . . . . . . . . . .  11
               Files . . . . . . . . . . . . . . . . . . . . .  17
                 Information stored in . . . . . . . . . . . . . 2
                 list of . . . . . . . . . . . . . . . . . . .  59
                 sufficient number . . . . . . . . . . . . . .  23
               Financial reports
                 for cases or projects . . . . . . . . . . . .  38
               Form letters
                   . . . . . . . . . . . . . . . . . . . . . .  45
               General Journal . . . . . . . . . . . . . . . .  34
               Income
                 calculation . . . . . . . . . . . . . . . . . . 8
               Income Statement  . . . . . . . . . . . . . . . . 4
                 new line item . . . . . . . . . . . . . . . .  32
               Installation  . . . . . . . . . . . . . . . . .  14
                 dual-floppy system  . . . . . . . . . . . . .  20
                 hard disk system  . . . . . . . . . . . . . .  21
               Instructions







                                                                73
               C-A-S-E Index

                 operating . . . . . . . . . . . . . . . . . .  27
               Inventory
                 correcting the value of . . . . . . . . . . .  43
               Inventory system  . . . . . . . . . . . . . . .  41
               Invoice
                 formats available . . . . . . . . . . . . . .  36
               Invoices  . . . . . . . . . . . . . . . . . . 6, 36
                 receipt of payment  . . . . . . . . . . . . .  38
               Jobs
                 list of . . . . . . . . . . . . . . . . . . .  39
               Journal forms, printing of  . . . . . . . . . .  45
               Journals  . . . . . . . . . . . . . . . . . . . . 2
               Key entry . . . . . . . . . . . . . . . . . . .  15
               Labor Cost  . . . . . . . . . . . . . . . . . . . 7
               Labor Cost Report . . . . . . . . . . . . . . .  45
               Letterhead
                 printing of . . . . . . . . . . . . . . . . .  29
                 selecting for profit lines  . . . . . . . . .  28
               Longevity of records  . . . . . . . . . . . . . . 5
               Mail merge
                   . . . . . . . . . . . . . . . . . . . . . .  45
               Mailing labels  . . . . . . . . . . . . . . . .  23
               Materials required  . . . . . . . . . . . . . .  15
               Menus
                 general . . . . . . . . . . . . . . . . . . .  27
                 illustrations of  . . . . . . . . . . . . . .  61
               Overhead Adjustment . . . . . . . . . . . . . . . 8
               Overhead Allocation . . . . . . . . . . . . . . . 7
               P&L, quick, for current period  . . . . . . . .  51
               Partner's time  . . . . . . . . . . . . . . . . . 8
               Partners  . . . . . . . . . . . . . . . . . . . . 3
               Password
                 procedures  . . . . . . . . . . . . . . . . .  58
               Password Protection . . . . . . . . . . . . . . . 4
               Payables  . . . . . . . . . . . . . . . . . . . . 6
               Payroll . . . . . . . . . . . . . . . . . . . . . 6
                 transaction entry . . . . . . . . . . . . . .  44
               Payroll System  . . . . . . . . . . . . . . . .  43
               Posting . . . . . . . . . . . . . . . . . . . . . 4
               Practice files  . . . . . . . . . . . . . . . .  25
               Printer
                 control codes . . . . . . . . . . . .  19, 28, 29
               Printer instructions  . . . . . . . . . . . . .  24
               Privacy . . . . . . . . . . . . . . . . . . . . . 4
               Profit Lines  . . . . . . . . . . . . . . . . . . 3
               Profits







                                                                74
               C-A-S-E Index

                 division of . . . . . . . . . . . . . . . . . . 7
               Project system  . . . . . . . . . . . . . . . .  38
               Reclosing
                 accounts  . . . . . . . . . . . . . . . . . .  57
               Reports . . . . . . . . . . . . . . . . . . . . . 2
               Retainer
                 payment of invoice from . . . . . . . . . . .  37
               Retainers . . . . . . . . . . . . . . . . . . . . 6
               Revenue accounts  . . . . . . . . . . . . . . .  11
               Revenues  . . . . . . . . . . . . . . . . . . .  11
               Reversing entry . . . . . . . . . . . . . . . .  57
               Sales Journal . . . . . . . . . . . . . . . . .  35
               Sales Transactions  . . . . . . . . . . . . . . . 5
               Sandoval & Duerksen . . . . . . . . . . . . . .  25
               Screen drivers  . . . . . . . . . . . . . . . .  15
               Setting up
                 accounts  . . . . . . . . . . . . . . . . . .  30
                 choices to be made  . . . . . . . . . . . . .  48
                 initial data input  . . . . . . . . . . . . .  48
                 system  . . . . . . . . . . . . . . . . . . .  27
               Technical support . . . . . . . . . . . . . . .  13
               Transaction numbers
                 ranges of . . . . . . . . . . . . . . . . . .  47
                 resetting . . . . . . . . . . . . . . . . . .  49
               Transactions
                 between profit lines  . . . . . . . . . . . .  50
                 paid labor  . . . . . . . . . . . . . . . . .  49
                 partner's time value  . . . . . . . . . . . .  50
                 recording profit of subsidiary transaction  .  50
                 unusual . . . . . . . . . . . . . . . . . . .  49
                 with more than 2 accounts . . . . . . . . . .  51
               Accounting
                 not an exact science  . . . . . . . . . . . .  12
               Accounting Periods  . . . . . . . . . . . . . . . 3
               Accounting System Structure . . . . . . . . . . . 2
               Accounts  . . . . . . . . . . . . . . . . . . . . 3
                 ASS(et  . . . . . . . . . . . . . . . . . . .  31
                 CAP(ital  . . . . . . . . . . . . . . . . . .  31
                 changes to list of  . . . . . . . . . . . . .  30
                 DUM(my  . . . . . . . . . . . . . . . . . . .  31
                 EXP(ense  . . . . . . . . . . . . . . . . . .  31
                 instruction codes for . . . . . . . . . . . .  31
                 LIA(bility  . . . . . . . . . . . . . . . . .  31
                 MustUse . . . . . . . . . . . . . . . . . . .  30
                 NonDelete . . . . . . . . . . . . . . . . . .  30
                 process codes . . . . . . . . . . . . . . . .  31







                                                                75
               C-A-S-E Index

                 REV(enue  . . . . . . . . . . . . . . . . . .  31
                 subsidiary  . . . . . . . . . . . . . . . . .  33
                 types of  . . . . . . . . . . . . . . . . . .  31
                 UsedHere  . . . . . . . . . . . . . . . . . .  30
               Accounts payable  . . . . . . . . . . . . . . .  41
               Address labels  . . . . . . . . . . . . . . . .  23
               Advantages  . . . . . . . . . . . . . . . . . . . 1
               ANSI Screen driver  . . . . . . . . . . . . . .  15
               Backup copies . . . . . . . . . . . . . . .  14, 48
               Balance Sheet . . . . . . . . . . . . . . . . . . 4
               Balancing the Books . . . . . . . . . . . . . . . 9
               Bookkeeping
                 exact process . . . . . . . . . . . . . . . .  12
               Capital Equipment . . . . . . . . . . . . . . 6, 40
               Case History  . . . . . . . . . . . . . . . . . . 6
               Case Records  . . . . . . . . . . . . . . . . . . 6
               Case system . . . . . . . . . . . . . . . . . .  38
               Cases
                 list of . . . . . . . . . . . . . . . . . . .  40
                 report coding . . . . . . . . . . . . . . . .  39
               Closing . . . . . . . . . . . . . . . . . . . 5, 52
                 current period  . . . . . . . . . . . . . . .  52
                 detailed instructions . . . . . . . . . . . .  53
                 for period  . . . . . . . . . . . . . . . . .  53
                 for year  . . . . . . . . . . . . . . . . . .  53
               Company information
                 data entry screen illustrated . . . . . . . .  71
                 entry of  . . . . . . . . . . . . . . . . . .  28
               Confidentiality . . . . . . . . . . . . . . . . . 4
               CONFIG.SYS
                 for files and buffers . . . . . . . . . . . .  23
               Consultants
                 useful for  . . . . . . . . . . . . . . . . . . 1
               Credit Sales  . . . . . . . . . . . . . . . . 6, 36
               Credits . . . . . . . . . . . . . . . . . .  10, 11
               Current P&L . . . . . . . . . . . . . . . . . . . 5
               Data entry  . . . . . . . . . . . . . . . . . .  15
               Debits  . . . . . . . . . . . . . . . . . .  10, 11
               Deposits  . . . . . . . . . . . . . . . . . . . . 6
               Depreciation  . . . . . . . . . . . . . . . . 6, 40
                 calculations  . . . . . . . . . . . . . . . .  40
               Designers
                 useful for  . . . . . . . . . . . . . . . . . . 1
               Disks
                 in set  . . . . . . . . . . . . . . . . . . .  17
               Displays







                                                                76
               C-A-S-E Index

                 general . . . . . . . . . . . . . . . . . . . . 3
               DOS . . . . . . . . . . . . . . . . . . . . . .  18
                 directory commands  . . . . . . . . . . . . .  18
                 file commands . . . . . . . . . . . . . . . .  18
               Equipment required  . . . . . . . . . . . . . .  14
               Expense accounts  . . . . . . . . . . . . . . .  11
               Expenses  . . . . . . . . . . . . . . . . . . .  11
               Files . . . . . . . . . . . . . . . . . . . . .  17
                 Information stored in . . . . . . . . . . . . . 2
                 list of . . . . . . . . . . . . . . . . . . .  62
                 sufficient number . . . . . . . . . . . . . .  23
               Financial reports
                 for cases or projects . . . . . . . . . . . .  39
               Form letters
                   . . . . . . . . . . . . . . . . . . . . . .  46
               General Journal . . . . . . . . . . . . . . . .  34
               Income
                 calculation . . . . . . . . . . . . . . . . . . 8
               Income Statement  . . . . . . . . . . . . . . . . 4
                 new line item . . . . . . . . . . . . . . . .  32
               Installation  . . . . . . . . . . . . . . . . .  14
                 dual-floppy system  . . . . . . . . . . . . .  20
                 hard disk system  . . . . . . . . . . . . . .  21
               Instructions
                 operating . . . . . . . . . . . . . . . . . .  27
               Inventory
                 correcting the value of . . . . . . . . . . .  43
               Inventory system  . . . . . . . . . . . . . . .  42
               Invoice
                 formats available . . . . . . . . . . . . . .  36
               Invoices  . . . . . . . . . . . . . . . . . . 6, 36
                 receipt of payment  . . . . . . . . . . . . .  38
               Jobs
                 list of . . . . . . . . . . . . . . . . . . .  40
               Journal forms, printing of  . . . . . . . . . .  45
               Journals  . . . . . . . . . . . . . . . . . . . . 2
               Key entry . . . . . . . . . . . . . . . . . . .  15
               Labor Cost  . . . . . . . . . . . . . . . . . . . 7
               Labor Cost Report . . . . . . . . . . . . . . .  45
               Letterhead
                 printing of . . . . . . . . . . . . . . . . .  29
                 selecting for profit lines  . . . . . . . . .  28
               Longevity of records  . . . . . . . . . . . . . . 5
               Mail merge
                   . . . . . . . . . . . . . . . . . . . . . .  46
               Mailing labels  . . . . . . . . . . . . . . . .  23







                                                                77
               C-A-S-E Index

               Materials required  . . . . . . . . . . . . . .  15
               Menus
                 general . . . . . . . . . . . . . . . . . . .  27
                 illustrations of  . . . . . . . . . . . . . .  64
               Overhead Adjustment . . . . . . . . . . . . . . . 8
               Overhead Allocation . . . . . . . . . . . . . . . 8
               P&L, quick, for current period  . . . . . . . .  52
               Partner's time  . . . . . . . . . . . . . . . . . 8
               Partners  . . . . . . . . . . . . . . . . . . . . 3
               Password
                 procedures  . . . . . . . . . . . . . . . . .  60
               Password Protection . . . . . . . . . . . . . . . 4
               Payables  . . . . . . . . . . . . . . . . . . . . 7
               Payroll . . . . . . . . . . . . . . . . . . . . . 7
                 transaction entry . . . . . . . . . . . . . .  44
               Payroll System  . . . . . . . . . . . . . . . .  44
               Posting . . . . . . . . . . . . . . . . . . . . . 4
               Practice files  . . . . . . . . . . . . . . . .  25
               Printer
                 control codes . . . . . . . . . . . . . .  19, 29
               Printer instructions  . . . . . . . . . . . . .  24
               Privacy . . . . . . . . . . . . . . . . . . . . . 4
               Profit Lines  . . . . . . . . . . . . . . . . . . 3
               Profits
                 division of . . . . . . . . . . . . . . . . . . 8
               Project system  . . . . . . . . . . . . . . . .  38
               Reclosing
                 accounts  . . . . . . . . . . . . . . . . . .  58
               Reports . . . . . . . . . . . . . . . . . . . . . 2
               Retainer
                 payment of invoice from . . . . . . . . . . .  38
               Retainers . . . . . . . . . . . . . . . . . . . . 6
               Revenue accounts  . . . . . . . . . . . . . . .  11
               Revenues  . . . . . . . . . . . . . . . . . . .  11
               Reversing entry . . . . . . . . . . . . . . . .  58
               Sales Journal . . . . . . . . . . . . . . . . .  35
               Sales Transactions  . . . . . . . . . . . . . . . 6
               Sandoval & Duerksen . . . . . . . . . . . . . .  25
               Screen drivers  . . . . . . . . . . . . . . . .  15
               Setting up
                 accounts  . . . . . . . . . . . . . . . . . .  30
                 choices to be made  . . . . . . . . . . . . .  49
                 initial data input  . . . . . . . . . . . . .  50
                 system  . . . . . . . . . . . . . . . . . . .  27
               Technical support . . . . . . . . . . . . . . .  13
               Transaction numbers







                                                                78
               C-A-S-E Index

                 ranges of . . . . . . . . . . . . . . . . . .  48
                 resetting . . . . . . . . . . . . . . . . . .  50
               Transactions
                 between profit lines  . . . . . . . . . . . .  51
                 paid labor  . . . . . . . . . . . . . . . . .  50
                 partner's time value  . . . . . . . . . . . .  51
                 recording profit of subsidiary transaction  .  51
                 unusual . . . . . . . . . . . . . . . . . . .  50
                 with more than 2 accounts . . . . . . . . . .  52

```
{% endraw %}

## DES_CASE.DOC

{% raw %}
```






CONSULTING AND SMALL ENTERPRISE 
ACCOUNTING SYSTEM (C-A-S-E)

SPECIALLY DESIGNED FOR SMALL FIRMS IN THE KNOWLEDGE BUSINESS

By John Forester, Custom Cycle Fitments
726 Madrone Ave., Sunnyvale, CA 94086, 408-734-9426

    This financial  operating system is designed for small firms in the
knowledge business:  consultants, designers,  experts of  all types who
operate on a case or project basis, often with reimbursement of outside
expenses.  C-A-S-E  aids  them  in  operating  their  businesses  while
collecting  and  processing  the  required accounting information. Many
such  persons  can  install  C-A-S-E  themselves,  or  with  only minor
accounting advice.  C-A-S-E will  handle firms with up to four partners
and up to  four  profit  lines  that  are  independently  assignable to
partners. C-A-S-E  handles cash sales, credit sales, invoicing, case or
project  financial   reporting,   retainers   or   deposits,  payables,
inventories   by   dollar   value,  capital  equipment  with  automatic
calculation of depreciation, payroll  with deductions.  Case or project
financial reports show every item of expense and income, coded for ease
and accuracy in billing. Retainers or  deposits are  properly accounted
for.

    At  start  of  new  period  or year, books are immediately open for
continued use  while books  of last  period are  being properly closed.
Once  previous-period  books  are  closed, proper data is automatically
transferred to next-period's accounts.  Correcting entries  may be made
for previous  periods and  the books reclosed to date. All transactions
are numbered. No records are destroyed. All completed records are saved
to permanent  records at  the close  of the year. Overhead expenses are
automatically allocated to profit lines. 

    999  General  Journal   accounts;   some   mandatory,   all  others
individually chosen. One level of subsidiary account. 999 current cases
or projects. 9999 each, current invoices  and payables.  1, 2,  4 or 12
periods per year.

    Completely   menu-driven.   All   journals   and  lists  are  shown
immediately on the screen  or  can  be  printed.  Reports  that require
computation during  production are  available in  printed form. C-A-S-E
also produces mailing labels and form  letters for  customers, vendors,
creditors.

```
{% endraw %}

## INVLETT.TXT

{% raw %}
```






                                                  ^1



              ^2
              ^3
              ^4
              ^5
              ^6

              Dear ^2,

                    My  records  show  that  you  have not paid our
              invoice ^7 
              for the amount of ^8. 
              If indeed you have not  done  so  I  would appreciate
              receiving your  payment. If  you have done so, please
              inform me so that I may correct my records.

                                                  Very truly yours,



                                                  John Forester

```
{% endraw %}

## JOBLETT.TXT

{% raw %}
```






                                                  ^1



              ^2
              ^3
              ^4
              ^5
              ^6

              Re: ^7

              Dear ^2,

                    I have  found it  necessary to  raise the rates
              for my services as  litigation consultant  and expert
              witness in cases involving bicycles. The accompanying
              fee schedule gives the new rates. 

                                                  Very truly yours,



                                                  John Forester

```
{% endraw %}

## PAYLETT.TXT

{% raw %}
```






                                                  ^1



              ^2
              ^3
              ^4
              ^5
              ^6

              Dear ^2,

                    I thank  you for your courtesy in extending the
              time of payment of the ^8 
              that we have owed you since ^7. 
              I expect payment  to  be  made  within  60  days from
              today's date.

                                                  Very truly yours,



                                                  John Forester

```
{% endraw %}

## INVLETT.TXT

{% raw %}
```






                                                  ^1



              ^2
              ^3
              ^4
              ^5
              ^6

              Dear ^2,

                    My  records  show  that  you  have not paid our
              invoice ^7 
              for the amount of ^8. 
              If indeed you have not  done  so  I  would appreciate
              receiving your  payment. If  you have done so, please
              inform me so that I may correct my records.

                                                  Very truly yours,



                                                  John Forester

```
{% endraw %}

## JOBLETT.TXT

{% raw %}
```






                                                  ^1



              ^2
              ^3
              ^4
              ^5
              ^6

              Re: ^7

              Dear ^2,

                    I have  found it  necessary to  raise the rates
              for my services as  litigation consultant  and expert
              witness in cases involving bicycles. The accompanying
              fee schedule gives the new rates. 

                                                  Very truly yours,



                                                  John Forester

```
{% endraw %}

## PAYLETT.TXT

{% raw %}
```






                                                  ^1



              ^2
              ^3
              ^4
              ^5
              ^6

              Dear ^2,

                    I thank  you for your courtesy in extending the
              time of payment of the ^8 
              that we have owed you since ^7. 
              I expect payment  to  be  made  within  60  days from
              today's date.

                                                  Very truly yours,



                                                  John Forester

```
{% endraw %}

## DES_CASE.DOC

{% raw %}
```






CONSULTING AND SMALL ENTERPRISE 
ACCOUNTING SYSTEM (C-A-S-E)

SPECIALLY DESIGNED FOR SMALL FIRMS IN THE KNOWLEDGE BUSINESS

By John Forester, Custom Cycle Fitments
726 Madrone Ave., Sunnyvale, CA 94086, 408-734-9426

    This financial  operating system is designed for small firms in the
knowledge business:  consultants, designers,  experts of  all types who
operate on a case or project basis, often with reimbursement of outside
expenses.  C-A-S-E  aids  them  in  operating  their  businesses  while
collecting  and  processing  the  required accounting information. Many
such  persons  can  install  C-A-S-E  themselves,  or  with  only minor
accounting advice.  C-A-S-E will  handle firms with up to four partners
and up to  four  profit  lines  that  are  independently  assignable to
partners. C-A-S-E  handles cash sales, credit sales, invoicing, case or
project  financial   reporting,   retainers   or   deposits,  payables,
inventories   by   dollar   value,  capital  equipment  with  automatic
calculation of depreciation, payroll  with deductions.  Case or project
financial reports show every item of expense and income, coded for ease
and accuracy in billing. Retainers or  deposits are  properly accounted
for.

    At  start  of  new  period  or year, books are immediately open for
continued use  while books  of last  period are  being properly closed.
Once  previous-period  books  are  closed, proper data is automatically
transferred to next-period's accounts.  Correcting entries  may be made
for previous  periods and  the books reclosed to date. All transactions
are numbered. No records are destroyed. All completed records are saved
to permanent  records at  the close  of the year. Overhead expenses are
automatically allocated to profit lines. 

    999  General  Journal   accounts;   some   mandatory,   all  others
individually chosen. One level of subsidiary account. 999 current cases
or projects. 9999 each, current invoices  and payables.  1, 2,  4 or 12
periods per year.

    Completely   menu-driven.   All   journals   and  lists  are  shown
immediately on the screen  or  can  be  printed.  Reports  that require
computation during  production are  available in  printed form. C-A-S-E
also produces mailing labels and form  letters for  customers, vendors,
creditors.

```
{% endraw %}

## FILE1115.TXT

{% raw %}
```
Disk No: 1115                                                           
Disk Title: C-A-S-E Accounting                            
PC-SIG Version: S3.2                                                    
                                                                        
Program Title: C-A-S-E Accounting                                       
Author Version: 2.4                                                     
Author Registration: $75.00                                             
Special Requirements: 640K RAM and two floppy drives.                   
                                                                        
C-A-S-E ACCOUNTING offers a system of accounting functions that meet the
needs of most small to mid-sized businesses.                            
                                                                        
C-A-S-E maintains three journals: the general journal and two subsidiary
journals, sales and payroll.  Sales are recorded in the sales journal   
because all sales transactions are basically similar.  Payroll          
transactions are recorded in the payroll Journal because that provides  
confidentiality, if desired.  Also, both kinds of transactions generate 
large numbers of detailed transactions with low dollar amounts, such as 
sales tax and deductions, that clutter up the general journal when      
entered individually.  Totals for these two subsidiary journals are     
entered into the general journal whenever desired, usually at fixed     
accounting intervals.                                                   
                                                                        
C-A-S-E also maintains files detailing the transactions for cases or    
projects (using the name that you use in your business), for invoices   
and credit sales, for employee pay and deductions, for payables, and for
capital equipment.  Whenever a transaction is entered through any of    
these systems, the appropriate information is fed to the others that are
affected and to the appropriate journal.  This information is readily   
available, either on the screen or in printed reports.                  
                                                                        
C-A-S-E produces both the standard accounting reports and the           
management reports that are most useful to knowledge firms.  Sales      
journal, by profit line and tax class, between any two dates.  Payroll  
journal, by employee by month, with deductions, between any two dates.  
General journal, between any two dates.  Transactions in any general    
journal account between any two dates, with totals and balance.  C-A-S- 
E financial histories that detail every transaction for a case, line    
item by line item.  These use an easy-to-remember coding system that    
enables you to match billings against expenses and partner's time.  The 
total expenses, billings, partner's time, disbursements from retainers, 
unpaid invoices and balance are also shown.  Accounts receivable, by    
invoice.  Accounts payable, by commitment and by firm.                  
                                                                        
This is a straightforward and professional accounting program with every
feature the small business will need.                                   
                                                                        
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
║              <<<<  Disk #1115 C-A-S-E ACCOUNTING SYSTEM  >>>>           ║
╠═════════════════════════════════════════════════════════════════════════╣
║                                                                         ║
║ To begin using the program, type:  Copy READ_CAS.* PRN  (press enter)   ║
║                                                                         ║
╚═════════════════════════════════════════════════════════════════════════╝
(c) Copyright 1990, PC-SIG Inc.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1115

     Volume in drive A has no label
     Directory of A:\

    CASE     ZIP    278895   6-07-90  10:56a
    DES_CASE DOC      2368   2-08-90   9:47a
    PKUNZIP  EXE     21440   7-21-89   1:01a
    READ_CAS ME1      2920   3-18-90   3:09p
    READ_CAS ME2      1983   2-08-90   9:46a
    UZIPCASF BAT      1162  10-13-89   8:43a
    UZIPCASH BAT       796  11-16-89  10:55a
    GO       BAT        38   7-06-88   3:47p
    GO       TXT       575   7-10-90  12:16a
    FILE1115 TXT      3835   7-10-90   2:59p
           10 file(s)     314012 bytes
                            4096 bytes free
