---
layout: page
title: "PC-SIG Diskette Library (Disk #1107)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1107/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1107"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "FINANCE MGR II ACCOUNTS REC"

    If you don't get paid, you can't pay your bills. This critical module
    lets you remain in control easily and effortlessly. You can have up to
    2,000 customers and send out invoices (using either pre-printed or blank
    sheets) and statements using balance-forward accounting. To allow
    correct interface with the income and other important accounts, the
    general ledger module, FINANCE MANAGER II (PC-SIG disk #151) is
    required.
    
    Important Features:
    
    ~ Up to 2,000 customers
    
    ~ Integrated with G/L
    
    ~ Finance Charges
    
    ~ Misc. debits/credits
    
    ~ Custom message on statements
    
    ~ Up to 32,000 transactions/year
    
    ~ Post to G/L in detail or summary format
    
    ~ Multiple G/L distribution
    
    ~ Prior period adjustments allowed
    
    ~ Post-dated transaction allowed
    
    ~ Balance-forwarding accounting
    
    ~ And much more
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FMAR.DOC

{% raw %}
```









                                FINANCE MANAGER II 





                             ACCOUNTS RECEIVABLE LITE

                                   USER'S MANUAL 










                                   Version 1.3f













                               Hooper International 
                                  P.O. Box 62219 
                            Colorado Springs, CO  80962 














      Copyright (C) 1986-1989 by Hooper International, Inc. 
      All rights reserved. 







                       FINANCE MANAGER II - ACCOUNTS RECEIVABLE



                                 COPYRIGHT NOTICE 

      FINANCE MANAGER is  not a public domain program.  It  is Copyright (C)
      1986-1989 by Hooper International.

      No part of  this manual may be reproduced, translated,  in any form or
      by  any  means,  without  the   prior  written  permission  of  Hooper
      International.

      The software described in this manual is protected by copyright laws. 


                   Copyright (C) 1986-1989 Hooper International 





                           RESTRICTED PERMISSION TO COPY 

      Clubs  and other  non-profit organizations  are granted  permission by
      Hooper International to  copy the evaluation version  of this program,
      as well as  its documentation, for member use only.   It is imperative
      that you  be aware that  said member use  is subject to  the following
      strictly-enforced restrictions: 

           No price may be charged, by  club or user group, for the software
           or documentation.  A  distribution fee may be  charged solely for
           the cost  of the diskette, as  long as the total  charge does not
           exceed $8. 

           It  is   imperative  that  club   members  be  informed   of  the
           user-support concept,  which allows them to  become familiar with
           FINANCE MANAGER through evaluation and  hands-on use.  It is also
           imperative that member users be informed that the program as well
           as   its   documentation  is   the   sole   property  of   Hooper
           International.  Members, without exception, must be encouraged to
           support its use by sending their user payments directly to Hooper
           International. 

           This software  and documentation  is fully copyrighted  by Hooper
           International  and may  not  be  modified in  any  way or  manner
           whatsoever.  The complete package  must be distributed intact, as
           a self-complementing unit. 













                                        PAGE 1




                       FINANCE MANAGER II - ACCOUNTS RECEIVABLE


                               WARRANTY INFORMATION 

      HOOPER INTERNATIONAL LICENSES THIS SOFTWARE AND MANUAL "AS IS" WITHOUT
      WARRANTY OF ANY KIND, EITHER  EXPRESSED OR IMPLIED, INCLUDING, BUT NOT
      LIMITED  TO, THE  PARTICULAR PURPOSE.   HOOPER INTERNATIONAL  DOES NOT
      WARRANT   THAT  THE   "FINANCE  MANAGER"   SOFTWARE  WILL   MEET  YOUR
      REQUIREMENTS,  OR  THAT  THE  OPERATION OF  FINANCE  MANAGER  WILL  BE
      UNINTERRUPTED OR ERROR FREE. 

      IN NO  EVENT WILL  HOOPER INTERNATIONAL  BE LIABLE  FOR CONSEQUENTIAL,
      INCIDENTAL,  INDIRECT OR  OTHER DAMAGES,  INCLUDING ANY  LOST PROFITS,
      LOST SAVINGS, OR OTHER INCIDENTAL OR CONSEQUENTIAL DAMAGES ARISING OUT
      OF THE  USE OF, OR  INABILITY TO USE,  THESE PROGRAMS, EVEN  IF HOOPER
      INTERNATIONAL HAS BEEN ADVISED OF  THE POSSIBILITY OF SUCH DAMAGES, OR
      FOR ANY CLAIM BY ANY OTHER PARTY. 

      Please  keep in  mind, WE  DO NOT  ACCEPT RETURNS  OR GIVE  REFUNDS ON
      REGISTERED COPIES.  Instead, we give  you every opportunity to try the
      software before you  decide to register your copy.   We will, however,
      replace defective disks for a  minimal shipping and handling charge of
      $5.00,  for up  to a  period of  90 days  from initial  shipping date.
      Please note that defective disks  must be returned prepaid and insured
      by  sender.   In  this  way,  we  are  assured  of  complete  customer
      satisfaction.  And, as you can see, we value your business. 

      Information in  this manual  is subject to  change without  notice and
      does not represent a commitment on the part of Hooper International. 

      This  product could  include technical  inaccuracies or  typographical
      errors.   Changes are  periodically  made to  the information  herein;
      these  changes   may  be  incorporated   in  new  additions   of  this
      publication. 



                                PRODUCT INFORMATION 

      FINANCE   MANAGER   II   is  an   extraordinary,   easy-to-understand,
      user-supported software  package.  Since we are  dedicated to customer
      satisfaction, we  heartily recommend  that you  take advantage  of the
      incredible money-saving opportunity that we offer, allowing you to use
      the  evaluation copy  in order  to determine  its suitability  to your
      individual financial  application.  Please  do this, and  discover for
      yourself that this  software is easy to use and  certainly what you've
      been hoping  it would be,  before registering  your copy with  us.  We
      sincerely value customer satisfaction. 

      Since we are  so confident of your satisfaction with  our software, we
      are able to offer evaluation copies at an unbelievable minimal cost to
      you.   We therefore  urge  you  to take  advantage  of inspecting  and
      evaluating this  software, including hands-on use  for your particular
      needs   and  financial   applications.   This   is  an   unprecedented
      opportunity  for complete  customer satisfaction  before you  make any
      outlay of  money for  an individually-registered  copy.  We  want your
      name  to be  added to  our  ever-growing list  of satisfied  customers
      throughout the world! 


                                        PAGE 2




                       FINANCE MANAGER II - ACCOUNTS RECEIVABLE



      Finance Manager  II Accounts Receivable is  User-Supported (Shareware)
      software.  If you are using this software,  and find it to be of value
      to you, your payment is necessary and appreciated. 

      You are  encouraged to  copy this  software and  share it  freely with
      others.  You have  the luxury of trying out the  complete programs, at
      your own pace and in the comfort  of your own home or workplace.  This
      is not a crippled or "demo"  copy, but the complete working version of
      the program. 

      After you have used Finance Manager for a reasonable evaluation period
      you  should  either discontinue  use  of  the  program or  purchase  a
      licensed copy from Hooper International  or from an authorized dealer.
      Your  support   is  important  and  greatly   appreciated.   With  it,
      User-supported  (Shareware)  authors  are  encouraged  to  design  and
      distribute new  products.  Without it,  a great deal of  high quality,
      low cost software will cease to be available. 


                                _______ 
                           ____|__     |                  (tm) 
                        --|       |    |------------------ 
                          |   ____|__  |  Association of 
                          |  |       |_|  Shareware 
                          |__|   o   |    Professionals 
                        -----|   |   |-------------------- 
                             |___|___|       MEMBER 


      Hooper  International is  a member  of the  Assocication of  Shareware
      Professionals and agrees with the association's standards of integrity
      in software distribution. 

























                                        PAGE 3




                       FINANCE MANAGER II - ACCOUNTS RECEIVABLE


                                 TABLE OF CONTENTS 


      COPYRIGHT NOTICE ...............................................  1 
      RESTRICTED PERMISSION TO COPY ..................................  1 
      WARRANTY INFORMATION ...........................................  2 
      PRODUCT INFORMATION ............................................  2 


      SECTION ONE - GETTING STARTED 
          1a - Introduction ..........................................  6 
          1b - System requirements ...................................  7 
          1c - System Flowcharts .....................................  8 
          1d - Using the demo accounts ...............................  9 
          1e - Running the Accounts Receivable module ................  9 


      SECTION TWO - THE ACCOUNTS RECEIVABLE MAIN MENU ................ 12 


      SECTION THREE - CUSTOMER ACCOUNTS .............................. 13 
          3a - What are customer accounts ............................ 13 
          3b - Customer accounts organization ........................ 13 
          3c - Customer accounts data fields ......................... 13 
          3d - Getting familiar with customer account ................ 14 
          3e - Entering your own Customer Accounts ................... 15 
          3f - Changing existing customers ........................... 17 
          3g - Deleting customers .................................... 18 
          3h - Suggested method for setting beginning balances ....... 19 


      SECTION FOUR - TRANSACTIONS .................................... 22 
          4a - What are transactions ................................. 22 
          4b - Transaction data fields ............................... 22 
          4c - Getting familiar with transactions .................... 23 
          4d - Entering transactions ................................. 24 
          4e - Entering multiple distributions ....................... 27 
          4f - Changing existing transactions ........................ 29 
          4g - Deleting transactions ................................. 31 
          4h - Points to remember .................................... 31 


      SECTION FIVE - REPORTS ......................................... 34 
          5a - General instructions for generating reports ........... 34 
          5b - Printing the Accounts Receivable Journal .............. 35 
          5c - Printing Customer Statements .......................... 36 
          5d - Printing Customer Invoices ............................ 37 
          5e - Printing the Receivable Aging Report .................. 37 
          5f - Printing the Schedule of Receivables Report ........... 38 
          5g - Printing the Customer Accounts Report ................. 38 
          5h - Printing the Customer Address Labels .................. 39 
          5i - Printing the Non-posted Transaction Journal ........... 41 
          5j - Printing the General Ledger Distribution Report ....... 41 


      SECTION SIX - OTHER FEATURES AND FUNCTIONS ..................... 43 


                                        PAGE 4




                       FINANCE MANAGER II - ACCOUNTS RECEIVABLE


          6a - Configuration settings ................................ 43 
          6b - Sorting Transactions .................................. 45 
          6c - Calculating Finance Charges ........................... 46 
          6d - Posting to the General Ledger ......................... 47 



      SECTION SEVEN - ENHANCEMENTS & HINTS ........................... 50 
          7a - Enhancements by Version ............................... 50 
          7b - Helpful hints and suggestions ......................... 50 


      SECTION EIGHT - FINANCE MANAGER II DISK FILE NAMES ............. 52 


      APPENDIX A - SAMPLE REPORTS .................................... 53 


      USER COMMENT FORM .............................................. 64 


      ORDER FORM ..................................................... 65 




































                                        PAGE 5




                       FINANCE MANAGER II - ACCOUNTS RECEIVABLE


                         SECTION ONE - GETTING STARTED 

      1a - INTRODUCTION 

      The   FINANCE  MANAGER   "Accounts  Receivable"   module  provides   a
      wonderfully  simple  way  to  keep  track  of  all  of  your  customer
      receivables.  It  allows you to set  up customer accounts, as  well as
      customer billing, by using  balance-forward accounting.  The program's
      versatility allows you to print statements  on blank paper, as well as
      on your own pre-printed forms. 

      This  extremely   helpful  and  easy-to-use  module   allows  multiple
      distribution of  funds and,  you'll be  pleased to  know, it  is fully
      integrated  into the  FINANCE  MANAGER General  Ledger.  This  feature
      totally  eliminates  all  data   entry  duplication.   Likewise,  this
      time-saving Accounts  Receivable module  uses similar  prompts, menus,
      and input  screens, thus making  it operationally compatible  with all
      other  FINANCE MANAGER  modules.  This  practical compatibility  alone
      saves hours of valuable time  in operational training for new modules,
      as well as an obvious saving of your own carefully budgeted money. 

      Customer information and balances are always available, for any month,
      through  interactive screen  displays  of  all pertinent  information.
      This  simple-to-use,  menu-driven  module will  greatly  enhance  your
      ability to track and to understand your customer receivables.  At last
      you  have that  all-important  opportunity for  a time-saving  module,
      along with your own informational input,  help you better grasp a hold
      on and  improve your cash  flow.  And that, we  can all agree,  is the
      bottom line and what a well-run business is all about! 

      Some of  the helpful,  time-saving, and  outstanding features  of this
      module are as follows: 

            * Customer accounts features 
                - Zipcode sorted labels 
                - Set up credit limits 
                - Set net due days 
                - Up to 2,000 customers (w/640K memory) 

            * Transaction entry features 
                - Multiple G/L distributions 
                - Prior period adjustments allowed 
                - Miscellaneous debits & credits 
                - Up to 32,000 transactions per year 
                - Easy to correct or delete transactions 
                - Multiple field transaction search capabilities 
                - All transactions can be posted to your GL 
                - Sort by date, input, reference,invoice or customer order 

            * Integration 
              - Transactions can  be posted  to the  General Ledger  with no
                additional inputs required 

            * Reports features 
                - Provides full range of reports including: 
                    Receivable journal 


                                        PAGE 6




                       FINANCE MANAGER II - ACCOUNTS RECEIVABLE


                    Customer statements 
                    Non-inventory invoices 
                    Aging report 
                    Schedule of receivables 
                    Customer accounts list 
                    Customer address labels 
                    Non-posted transactions journal 
                    General Ledger distribution report 
                - Sends reports to screen, printer or disk file 
                - Save reports on disk 
                - Display reports on your screen 
                - Reports may be printed multiple times 
                - Statements set up for window envelopes 
                - Option for pre-printed statements and invoices 
                - Custom message on statements 

            * Fiscal year features 
                - Use with any fiscal year 
                - Multiple years on-line at one time 
                - Books need not be closed in order to begin next year 

            * System features 
                - Pop-up Windows 
                - LAN Support 
                - Mouse Compatibility 
                - Calculate finance charges on overdue balances 
                - Posts to G/L in summary format 
                - Defaults for all input fields 
                - No monthly closing hassle to go through 
                - Allows you to post or pre-date all transactions 


      This manual  assumes you  have, from  an accounting  point of  view, a
      working knowledge of  how an accounts receivable  system operates.  If
      you are  new to accounts  receivable bookkeeping, however,  we suggest
      you   either   consult   your   accountant    or   get   a   book   on
      accounts-receivable bookkeeping.  We do,  nevertheless, try to explain
      each  feature and  function in  layman terms,  so it  will be  easy to
      understand, with  minimal confusion.  This  system is uniquely  set up
      for the ease  of operation by the novice.   Consequently, sample basic
      transactions  are included  on your  disk (filename  "WORK") for  your
      practice sessions. 


      1b - SYSTEM REQUIREMENTS 

                - FINANCE MANAGER II General Ledger version 1.3 
                - IBM PC, XT, AT, PS/2 or compatible 
                - 320K memory (more memory allows more customers) 
                - Two 360K disk drives (or 1 DSHD or Hard disk) 
                - Dos 2.0 or higher 







                                        PAGE 7




                       FINANCE MANAGER II - ACCOUNTS RECEIVABLE


      1c - SYSTEM FLOWCHARTS


                         ---------------------------------
                         | ACCOUNTS RECEIVABLE MAIN MENU | 
                         ---------------------------------
                                         | 
                 ------------------------------------------------ 
                 |             |           |         |          | 
               INPUT     CHANGE/DELETE  REPORTS   UPDATE       A/R 
            TRANSACTIONS TRANSACTIONS    MENU    CUSTOMER    UTILITY 
                                                 ACCOUNTS      MENU 




                               --------------------
                               | A/R REPORTS MENU | 
                               --------------------
                                         | 
         -------------------------------------------------------------- 
         |       |      |      |      |       |       |      |        | 
        A/R      |   CUSTOMER  |   SCHEDULE   |    ADDRESS   |       G/L 
      JOURNAL    |   INVOICES  |    OF A/R    |     LABELS   |    DISTRIBUTION
             CUSTOMER      RECEIVABLE      CUSTOMER       NON-POST 
            STATEMENTS       AGING         ACCOUNTS     TRANSACTIONS 
                                             LIST         JOURNAL




                              ----------------------
                              | A/R UTILITIES MENU | 
                              ----------------------
                                         | 
                 ------------------------------------------------- 
                 |            |              |                   | 
                SORT      CALCULATE         POST                A/R
            TRANSACTIONS   FINANCE      TRANSACTIONS       CONFIGURATION
                           CHARGES        TO G/L              SETTINGS


















                                        PAGE 8




                       FINANCE MANAGER II - ACCOUNTS RECEIVABLE


      1d - USING THE DEMO ACCOUNTS 

      Included, at no extra cost with the "Accounts Receivable" module, is a
      set of sample/demo  accounts for practice use.  On your  disk are some
      files with  the name  of "WORK".   In order to  use these  demo files,
      simply copy all of the "WORK.*" files  onto a blank disk to be used as
      your demo  disk.  When starting up  FINANCE MANAGER, use this  disk as
      your data disk and put it  in the appropriate disk drive (usually B:).
      When FINANCE  MANAGER asks you for  the File name, enter  "WORK".  The
      use of these demo files will very likely get you going faster and help
      you to use this module to your best advantage. 

      It is important to remember that you  do not use these demo files when
      you are  setting up  your own  live data,  since demo  files obviously
      contain existing practice-only data  as well as existing practice-only
      demo customers.   Setting up a  new "live"  set of books,  however, is
      very simple and is thoroughly described in the following section. 


      1e - RUNNING THE ACCOUNTS RECEIVABLE MODULE 

      To run the "Accounts Receivable" module,  you must first install it by
      following the  instructions under "Installing FINANCE  MANAGER" in the
      "Getting Started"  manual.  After it  is installed, follow  the simple
      steps in the order given below: 


          1. To  run  FINANCE MANAGER  Accounts  Receivable  you must  first
             install  it  by  typing  "A:INSTALL" after  you  have  put  the
             original  Accounts Receivable  disk  in drive  A:.  Follow  the
             instructions on the screen.  More detailed install instructions
             can  be  found in  the  General  Ledger  manual (Section  1b  -
             INSTALLING FINANCE MANAGER). 

          2. After installing the Accounts Receivable  module you can run it
             by typing  in "FMAR".  If you  are running on floppy  disks you
             should first  put your Accounts Receivable  Master Program Disk
             (created during the install procedure,  DO NOT USE THE ORIGINAL
             DISK) in  drive A:.  If  you are using  a hard disk  you should
             first  change  to the  directory  where  you installed  Finance
             Manager into (e.g.  CD\FMGL) and then type in "FMAR". 


          3. Upon starting  FINANCE MANAGER, you  must decide to  use either
             live  data  or the  practice-only  demo  accounts data  on  the
             Accounts Receivable  Documentation & Demo disk.   If you prefer
             to practice and experiment, you should remember to use the Demo
             disk.  If you wish to set up your own live Accounts Receivable,
             you should put your FINANCE MANAGER General Ledger data disk in
             your drive B: (not necessary if you have a hard disk). 

          4. At the disk drive prompt, enter the disk drive letter where you
             put your Demo or G/L data disk,  usually drive B: (or C: if you
             have a hard disk). 

          5. At the Enter  Filename prompt, enter the name of  the data file


                                        PAGE 9




                       FINANCE MANAGER II - ACCOUNTS RECEIVABLE


             you want to use ("WORK" if you  have the demo disk in drive B:,
             or if you are using your live G/L data files enter the filename
             of its files). 

             Remember you  can only use  this module if you  have previously
             setup your General  Ledger data files using  the General Ledger
             module.  When using  the demo data files this  has already been
             done for you.

          6. You will now be at the FINANCE MANAGER Master Menu. 

          7. OPTIONAL: If you have not already done so (when you set up your
                       G/L data files),  you may go to  the System Utilities
                       Menu  and  change  any system  defaults.   This  may,
                       however, be done at any  time and is not necessary to
                       run FINANCE MANAGER.  We do, however, suggest you set
                       up the  "Compressed" and "Normal" print  codes before
                       printing the A/R  reports, since you will  find it is
                       required for a few of them. 

          8. Next you must add two accounts  to your General Ledger Chart of
             Accounts.  Set up an Accounts Receivable (type A) account and a
             Finance Charge Income (type I) account.  These two accounts are
             required  to  use the  A/R  module.   See your  General  Ledger
             documentation manual on setting up  your Chart of Accounts.  If
             you  have these  two  accounts already  setup  in your  General
             Ledger Chart of Accounts this step is not necessary. 

          9. From the  FINANCE MANAGER  master menu,  select menu  "F2", and
             this will  take you into  Accounts Receivable.  If this  is the
             first time  you are using  Accounts Receivable for this  set of
             books, the  system will ask  you: Create File (Y/N),  which you
             should answer with  a "Y".  This procedure will  create all the
             necessary Accounts Receivable Data  files.  Don't worry it will
             not damage your General Ledger data files. 

         10. You should  now select "F5", and  then "F5" again, in  order to
             set up your A/R configuration settings.  This step is important
             since it  will set  up the interface  with your  General Ledger
             Chart of Accounts.  See section 6a for details. 

         11. Return to  the A/R  main menu  and select "F4"  to set  up your
             customers.  See section three on Customer Accounts. 

         12. After  setting up  your  customers, you  may  print a  Customer
             Accounts listing.  See section five on reports. 

         13. You are  now ready  to Input transactions  (Invoices, Payments,
             Etc.).  See section Four on Transactions. 

         14. After  you have  entered some  transactions, you  may print  an
             Accounts  Receivable  Journal  report  to  see  what  you  have
             entered.  See section five on reports. 

         15. Print  any other  reports  as required.   The  two most  useful
             reports  are   "Customer  Statements"  and  the   "Schedule  of


                                        PAGE 10




                       FINANCE MANAGER II - ACCOUNTS RECEIVABLE


             Receivables". 

      These basic steps are merely intended  to show you the order of events
      in setting up new receivable books. 






















































                                        PAGE 11




                       FINANCE MANAGER II - ACCOUNTS RECEIVABLE


                  SECTION TWO - THE ACCOUNTS RECEIVABLE MAIN MENU 


      The ACCOUNTS RECEIVABLE Main Menu is the starting point for all of the
      various  ACCOUNTS RECEIVABLE  functions.  It  is a  sort of  "Table of
      Contents" for the ACCOUNTS RECEIVABLE module.  It can guide you to all
      of  the  other   useful  sub-menus  and  practical   features  of  the
      time-saving ACCOUNTS RECEIVABLE module. 

      The ACCOUNTS RECEIVABLE Main Menu appears as follows: 

                      --- ACCOUNTS RECEIVABLE MAIN MENU ---- 
                      |                                    | 
                      |   ESC  Return to Master Menu       | 
                      |   F1   Input TRANSACTIONS          | 
                      |   F2   CHANGE/Delete Transactions  | 
                      |   F3   REPORTS Menu                | 
                      |   F4   Update CUSTOMER ACCOUNTS    | 
                      |   F5   A/R Utility Menu            | 
                      |                                    | 
                      |                                    | 
                      |                                    | 
                      |                                    | 
                      |   ENTER YOUR SELECTION:            | 
                      |                                    | 
                      |   A/R Configuration is not setup   | 
                      -------------------------------------- 

      Note that  many of the  selections are used to  go on to  other menus.
      All of  the "F"  selections are  discussed in  later sections  in this
      documentation.   If  you   get  a  message,  as   above,  saying  "A/R
      Configuration is not  set up" you should set up  your configuration by
      selecting  "F5", and  then "F5"  again,  to get  to the  configuration
      setup.  For clarification, this procedure  is discussed in Section Six
      - Configuration settings. 

      As  mentioned   above,  it   is  essential  that   you  set   up  your
      configuration.   Jump to  Section 6a  to complete  that easy-to-follow
      procedure before continuing. 

      The next step is to set  up your customer accounts.  This procedure is
      as follows: 
















                                        PAGE 12




                       FINANCE MANAGER II - ACCOUNTS RECEIVABLE


                         SECTION THREE - CUSTOMER ACCOUNTS 

      Your  Customer  Accounts are  the  very  foundation of  your  Accounts
      Receivable.  To set up, or to change your customers, select "F4 Update
      Customer Accounts" from the A/R main menu. 


      3a - WHAT ARE CUSTOMER ACCOUNTS 

      Your customer accounts are used to  keep track of all of your accounts
      receivable  balances, by  customer.  Each  customer must  be given  an
      account number, to identify him, which  will then be used whenever you
      are entering transactions for that customer. 


      3b - CUSTOMER ACCOUNTS ORGANIZATION 

      Your customer account numbers, and their order within the program, are
      totally up to you.   We do suggest, if you ever want  to keep track of
      cash sales  with Accounts  Receivable, that you  set up  Cash Customer
      accounts.  This will allow you to  print an invoice for any cash sales
      which you may have. 

      The only other consideration for  account numbers is to possibly group
      your customers  into account-number ranges.   For example, put  all of
      your  out-of-state customers  into  accounts 9000-9999.   This may  be
      useful when printing  reports which ask for an account  range to print
      (i.e. customer  labels).  Different  types of  businesses may  also be
      grouped in specific ranges.  Remember  to always leave enough room for
      new accounts to be added within your selected range. 


      3c - CUSTOMER ACCOUNTS DATA FIELDS 

      Each  account  in  your  customer  database  represents  one  specific
      customer.   As mentioned  above, each  customer is  assigned a  unique
      account number between 1 and 9999.   Along with this account number is
      kept other elements of information  about each customer.  When you set
      up a customer  account, the following information  about each customer
      will be needed: 

      ACCOUNT NUMBER    A number between  1 and  9999 used to  identify each
                        customer.  This number is decided  by you and can be
                        any number. 

      ATTENTION         This  is   used  as  the  first   address  line  for
                        statements and  labels.  It is usually  the accounts
                        payable contact persons name for this customer. 

      COMPANY           Name  of  the  company.   If a  customer  is  not  a
                        company, enter that customers name here. 

      ADDRESS           Street  address for  customer.  Used  for statements
                        and labels. 

      CITY              Customers city. 


                                        PAGE 13




                       FINANCE MANAGER II - ACCOUNTS RECEIVABLE



      STATE             Customers two digit State/Province code. 

      ZIPCODE           Customers zip  or postal code.  Used  for sort order
                        on  mailing  labels.   May  be used  for  any  other
                        purpose as well. 

      PHONE             Up to  12 character  telephone number.  May  be used
                        for other information if needed. 

      BEGINNING BALANCE Customers   beginning  balance,   when  setting   up
                        customer account.  For new customers, this is always
                        zero.   For  pre-existing customers,  enter  account
                        balance as  of when you  are putting them  into this
                        module.  Total beginning  balances for all customers
                        must  tie into  the Accounts  Receivable balance  on
                        your General Ledger.  Never use a negative beginning
                        balance unless you owe money to a customer. 

      CREDIT LIMIT      Used  only  for   information  purposes.   Shows  on
                        non-trended  Schedule  of  Receivables report  as  a
                        credit available column. 

      NET DUE DAYS      Default number  of days until purchases  or invoices
                        for  this customer  are due.   You will  be able  to
                        over-ride it, if necessary, when entering invoices. 

      INTEREST RATE     The  annual  interest  rate  you  will  charge  this
                        customer   when  using   automatic  Finance   Charge
                        calculation. 


      3d - GETTING FAMILIAR WITH CUSTOMER ACCOUNTS 

      Before beginning  to enter your  own customers, follow  the procedures
      below using only the demo accounts. 

          1. From the Accounts  Receivable Main Menu select F4  on the menu.
             You will then be prompted for the following information: 


          Account Num (1-9999):____ 
          Attention:______________________________ Beginning Bal:___________ 
          Company  :______________________________ Credit Limit :___________ 
          Address  :______________________________ Net Due Days :__ 
          City     :__________________    State:__ Interest Rate:_____% 
          Zipcode  :__________  Phone:____________ 

          2. The cursor will be positioned at the "Account Num" prompt. 

             On  the lower  half  of  your screen,  you  will  see a  pop-up
             customers list.  Seeing these accounts  is helpful when you are
             adding new customers. 

             The  highlighted account  is  a pointer,  showing the  selected
             customer.  To  move the highlighted  account up or  down, press


                                        PAGE 14




                       FINANCE MANAGER II - ACCOUNTS RECEIVABLE


             the "up"  or "down" arrow keys  on the right keypad,  while the
             cursor is positioned  at this prompt.  If you  move the default
             pointer down a few lines, notice how the list scrolls. 

             You  may  select  an  existing account  number  by  moving  the
             highlighted pointer up or down  to the desired account and then
             pressing the  enter key.  To set  up a new account,  you simply
             type in the new account number. 

          3. If you like, enter some data  using the demo files for hands-on
             practice.  Remember to keep this  demo file well marked, and do
             not confuse its use with your actual file. 

          4. To return to the previous menu, press ESC. 

      Before  entering your  own  customers, practice  adding, changing  and
      deleting customer  accounts using  the demo  files to  practice.  This
      will familiarize  you with  how to enter,  change, or  delete customer
      accounts.   Changing and  deleting customer  accounts is  described in
      easy to follow lay terms in the following how-to sections. 


      3e - ENTERING YOUR OWN CUSTOMER ACCOUNTS 

      When you actually enter your own customer accounts, it would be a good
      idea to collate your customers into some kind of logical order in your
      mind.  This will be  helpful to you later, each time  you need to look
      up customers by account number. 

      In order  to enter customer accounts,  first switch over to  your live
      data files.  To  do this, simply return to the  FINANCE MANAGER Master
      Menu (Press  the ESC key  until you are there).   When you are  at the
      Master Menu, enter one more ESC.  The program will then prompt "DO YOU
      WANT TO RESTART (Y/N):_" enter "Y". 

      At this point (if you have your  data on floppy disks) switch the data
      disk  to your  live General  Ledger data  diskette.  Select  your real
      General  Ledger  data  file  name.    After  you  enter  the  Accounts
      Receivable module ("F4") again, the system should tell you that it did
      not find your A/R files.  Enter  "Y" at the "Create new Files" prompt.
      From the  A/R main menu,  select "F4" and you  will be ready  to enter
      your customer accounts. 

          1. At  the input  screen, the  cursor  will be  positioned at  the
             account number field.  Unless you  are entering your very first
             customer account, there should be default data in this field. 

          2. Instead  of  using the  default  data  (if  any), enter  a  new
             customer  number  of  your  choice.  The  step  by  step  input
             procedure for a example customer account is as follows: 

          3. First, enter the customer account number.  For example: 

                             Account Num (1-9999):100_ 




                                        PAGE 15




                       FINANCE MANAGER II - ACCOUNTS RECEIVABLE


          4. Input the attention name: 

                     Attention:Attn: Accounts Payable Dept.__ 


          5. Input the company name: 

                      Company:John Smith and Associates_____ 


          6. Input the company mailing address: 

                      Address:3000 Main Street______________ 


          7. Input the city: 

                              City:Denver____________ 


          8. Input the state: 

                                     State:CO 


          9. Input the zip or postal code: 

                                Zipcode:80900_____ 


         10. Input the customers phone number: 

                                Phone:303-123-4567 


         11. Input the customers beginning balance: 

                                Beginning Bal:0__________ 

             When entering  a customers  beginning balance,  please remember
             that all  new customers should  have a zero  beginning balance.
             If you enter  any non-zero beginning balances,  you MUST follow
             the  steps  in  section  3h --  Suggested  method  for  setting
             beginning balances. 


         12. Input the customers credit limit: 

                             Credit Limit :5000_______ 

             The credit limit amount is used only for report purposes.  This
             amount will be shown on the non-trended schedule of receivables
             to show available credit amounts. 


         13. Input the net  due days (the number of days  until invoices for


                                        PAGE 16




                       FINANCE MANAGER II - ACCOUNTS RECEIVABLE


             this customer will be due): 

                                  Net Due Days:30 


         14. Input  the annual  interest rate  you will  charge on  past due
             invoices: 

                               Interest Rate:18___% 

             When entering  the interest  rate please  note that  18% annual
             interest rate is input as "18" not ".18". 

         15. If you make a mistake in a field, and would like to correct it,
             you can  easily back  up to  a previous  field by  pressing the
             backspace key. 

         16. Once all of the data has  been entered correctly, answer "Y" at
             the "ARE INPUTS CORRECT Y/N" prompt.   If you answer with a "N"
             the  cursor  will  return  to the  Account  Number  prompt  and
             previous input will be ignored. 

         17. If you answered with a "Y",  the new account has been added and
             you  will automatically  return to  the account  number prompt.
             You are then ready for more input. 

             NOTE: Please note that  the account number you  have just added
                   is  inserted into  the list  at the  bottom half  of your
                   screen.  Use the cursor keys  (when at the account number
                   field) described  above, in  order to scroll  through the
                   active customer  accounts to  search for the  account you
                   have  just  added.   If   you  have  added  your  account
                   correctly, it  will automatically  be in  numerical order
                   within this list. 

         18. The  cursor will  once again  be at  the account  number field.
             Repeat steps  2 - 16  until you  have finished entering  all of
             your customers. 

         19. In order to return to the menu when you have finished entering,
             or at  any other time that  you wish to return  to menu, simply
             press the  ESC key.  Your inputs  will then be saved  onto disk
             and you will be back at the previous menu. 

         20. Any time you need to print  a current customer list, you may do
             so  by going  to the  reports  menu and  printing the  Customer
             Accounts list (see section five - reports). 


      3f - CHANGING EXISTING CUSTOMERS 

      The  steps below  outline the  procedure  for making  changes to  your
      existing customer accounts. 

          1. Select "F4" at the Accounts Receivable main menu. 



                                        PAGE 17




                       FINANCE MANAGER II - ACCOUNTS RECEIVABLE


          2. With  the cursor  at the  account  number prompt,  type in  the
             account number you wish to change.  Instead of typing a number,
             you may  accept the default  account by simply  pressing ENTER.
             In order  to choose a  different account, move  the highlighted
             pointer by using the up and down keypad arrows. 

          3. Because  the account  number you  have entered  is an  existing
             customer account, the system prompts: 

                    ACTIVE ACCOUNT Modify/Delete/Quit(M/D/Q):_ 

             Answer this prompt with "M".  You are now in the change mode. 

          4. Make  any desired  changes.   Press ENTER  to  leave any  field
             unchanged. 

          5. If  you want  to go  back  to a  previous field  while you  are
             changing data, you may do so by pressing the Backspace key. 

          6. After you have changed the data, press return until you get the
             "ARE INPUTS CORRECT  (Y/N):" prompt.  Press "Y"  to accept your
             changes.  If  you enter a  "N" instead, the system  will ignore
             all changes to  that account and the cursor will  return to the
             account number field. 


      3g - DELETING CUSTOMERS 

      When deleting  customers, there must  be a zero beginning  balance and
      there can not be any transactions  for that customer number.  If there
      is a beginning balance, or transactions for the account to be deleted,
      FINANCE MANAGER will  not allow the account to  be deleted.  Remember,
      you will  not be  able to delete  that customer unless  he has  a zero
      ending balance when  you run your end-of-period posting at  the end of
      the year.   If a customer account  has a zero ending  balance, it will
      have a zero beginning balance after the end of year posting.  You will
      then be able to delete the account. 

      Be sure to  practice deleting accounts by practice  simulation on your
      dummy  demo accounts.   Only after  a bit  of practice  should you  be
      deleting a "real" customer from your real data files. 

      To delete a customer account follow the steps below: 

          1. Select "F4" at the Accounts Receivable main menu. 

          2. Then enter the number of the account to be deleted while at the
             Account Number prompt.  The system will then prompt: 

                    ACTIVE ACCOUNT Modify/Delete/Quit(M/D/Q):_ 


          3. Select  "D".  The  account will  be deleted.   However, if  the
             account has  either a  beginning balance, or  transactions, the
             system  will  automatically  tell  you  so.   Fortunately,  the
             account will not be deleted if the account shows activity. 


                                        PAGE 18




                       FINANCE MANAGER II - ACCOUNTS RECEIVABLE




      3h - SUGGESTED METHOD FOR SETTING BEGINNING BALANCES 

      When  setting  up  your  accounts  receivable,  as  well  as  customer
      beginning balances, you must be sure that you are in balance with your
      general ledger.   This is  a vitally  important procedure  to remember
      when setting up your books. 

      IF: 
          1. You set up ALL CUSTOMER ACCOUNTS with a zero beginning balance 

          2. AND  your  GENERAL  LEDGER   accounts  receivable  has  a  zero
             beginning balance 

          3. AND there  are no  General Ledger  transactions posted  to your
             GENERAL LEDGER accounts receivable account (giving that account
             number a zero current balance) 

             Then  you can  skip this  procedure (all  balances of  zero are
             effectively in balance). 

      IF NOT: 
             Then you  MUST follow the  procedures listed below in  order to
             ensure that your Accounts  Receivable Module beginning balances
             are  in  balance  with  your  General  Ledger  Module  Accounts
             Receivable  Account current  balance.  We  strongly stress  the
             importance of this step! 

          1. Enter  all  customer  beginning  balances.   You  must  pick  a
             specific  date  for  the   customer  beginning  balances  (i.e.
             1-1-87). 

                     *** DO NOT ENTER ANY TRANSACTIONS YET *** 

          2. The total of  all customer beginning balances MUST  be equal to
             the current balance in  your General Ledger Accounts Receivable
             account for this date. 

          3. We recommend that you set up a specific General Ledger Accounts
             Receivable Account  to be  used only by  this module.   See the
             demo General Ledger accounts for example. 

          4. Below  is  an example  of  a  small  balance sheet  and  sample
             customer beginning balances. 













                                        PAGE 19




                       FINANCE MANAGER II - ACCOUNTS RECEIVABLE


             EXAMPLE GENERAL LEDGER REPORT: 

                                  Example Company 
                                   Balance Sheet 
                                As of December 1989 

                    ACCT ACCOUNT NAME              BALANCE
                    ---- ------------------------- -------
                     100 CASH ON HAND                 2000
                     200 ACCOUNTS RECEIVABLE          1000
                     300 OFFICE EQUIPMENT             5000
                                                    ------
                         TOTAL ASSETS                 8000

                     400 OWNERS EQUITY                7500
                     500 RETAINED EARNINGS             500
                                                    ------
                         TOTAL LIAB & EQUITY          8000



           EXAMPLE ACCOUNTS RECEIVABLE MODULE REPORT: 

                                  Example Company 
                              Customer Accounts List 

                    CUST COMPANY NAME              BEG BAL
                    ---- ------------------------- -------
                    1000 JOHN SMITH & ASSOCIATES       700
                    1001 CLONE COMPUTER CORP           300
                                                    ------
                         TOTAL                        1000


      This example  assumes that  you selected December  31 as  your balance
      date.  Please note that the  Accounts Receivable balance (account 200)
      on the General Ledger balance sheet report shows 1000.  Also note that
      the total of all customer beginning balances is 1000. 

      Thus, the  general ledger balance-sheet  balance is "in  balance" with
      the accounts receivable module's total customer beginning balances. 

      From now on,  the General ledger accounts  receivable account (account
      200)  will  be updated  by  the  accounts  receivable module,  and  no
      transactions should be  posted to that account when  using the General
      Ledger. 

      In  summary,  the  current  balance in  the  General  Ledger  Accounts
      Receivable account should  be the total amount owed to  you, by all of
      your customers.   This same amount then  should be equal to  the total
      beginning balances for all of your customer accounts. 

      If these two numbers are not equal, then: 

          1. You have  receivables other  than customer receivables  in your
             General Ledger A/R  balance.  This is solved by  setting up two


                                        PAGE 20




                       FINANCE MANAGER II - ACCOUNTS RECEIVABLE


             General Ledger  A/R accounts.   One for your  customer balances
             and one for other receivables. 

          2. Or  you  do not  have  all  customer  accounts entered  in  the
             Accounts Receivable beginning balances, or possibly the account
             balances are wrong. 




















































                                        PAGE 21




                       FINANCE MANAGER II - ACCOUNTS RECEIVABLE


                            SECTION FOUR - TRANSACTIONS 

      4a - WHAT ARE TRANSACTIONS 

      A transaction is  any event which  will change your  customers account
      balance.  Examples  of transactions  are a purchase  by a  customer on
      credit,  a payment  on an  account,  a merchandise  return (credit  to
      account), a  finance charge, etc.   More simply, anything  involving a
      change  in  a  customers  account balance  is  a  transaction.   Thus,
      anything your customer  purchases with cash (i.e. no  credit terms) is
      NOT an accounts receivable transaction  and should NOT be entered into
      this module. 

      There is one  exception to cash transactions, however.  If  you have a
      customer who has an account with  you, and he purchases something with
      cash, he may be entered into accounts receivable transactions in order
      to show all purchases for a specific customer.  In this case you would
      enter two  transactions, one for  the purchase  and the other  for the
      immediate payment for that purchase. 


      4b - TRANSACTION DATA FIELDS 

      The  transactions input  fields are  described below.   Each of  these
      fields has a  default of the last data entered  into that field.  When
      entering your data this default saves keystrokes when doing repetitive
      data inputting. 

      TRAN DATE      This  is  the  date   when  the  transaction  occurred.
                     Required. 

      DESCRIPTION    A short description of the transaction.  Optional. 

      REFERENCE NUM  Any 8  character reference  to this  transaction.  This
                     field  will show  up on  the customer  statement.  This
                     could be the customers order number for invoices or the
                     check number for payments.  Optional. 

      INVOICE NUM    Any 8 character invoice  number to reference a specific
                     invoice.  Is  used when printing a  customer invoice by
                     invoice number.  Optional. 

      TYPE CODE      The  type  of  transaction  this  is,  I,P,C,D,F,M  for
                     Invoice  (a  purchase),   Payment  (customer  payment),
                     Credit (credit  to account), Debit (debit  to account),
                     Finance  Charge (to  add  a finance  charge), and  Memo
                     (extra description) respectively.   Generally, you will
                     be using type "I" when you  sell to a customer and type
                     "P" when he pays for his purchases.  Required. 

      DUE DATE       Date when payment is due for a purchase (type I).  This
                     field  is only  used  for type  "I" transactions.   Its
                     default is the Tran Date above, plus the number of "Net
                     Due  Days"  set  up  for the  customer  selected.   The
                     default may  be overwritten,  of course.   Required for
                     type "I" transactions only. 


                                        PAGE 22




                       FINANCE MANAGER II - ACCOUNTS RECEIVABLE



      DEBIT ACCOUNT  The  General  Ledger  debit  account  number.   If  you
                     entered a "I", "D" or "F"  in the type code field above
                     the  General Ledger  Accounts  Receivable account  will
                     automatically  be  placed  here since  these  types  of
                     transactions   require  a   debit   to  this   account.
                     Otherwise, enter  the G/L  account to  debit.  Usually,
                     for type "P" transactions, this is the account to which
                     you  will  deposit   the  payment  (checking  account).
                     Required. 

      DEBIT AMOUNT   Enter  the  amount  to  be  debited.   For  a  customer
                     purchase,  this is  normally  the total  amount of  his
                     purchase.  Required. 

      CREDIT ACCOUNT The  General  Ledger  credit account  number.   If  you
                     entered a "P"  or "C" in the type code  field above the
                     General   Ledger  Accounts   Receivable  account   will
                     automatically  be  placed  here since  these  types  of
                     transactions   require  a   credit  to   this  account.
                     Otherwise, enter  the G/L account to  credit.  Usually,
                     for type  "I" transactions, this is  the income account
                     designated for sales.  Required. 

      CREDIT AMOUNT  This amount is  normally the same as  the debit amount.
                     The ability  to change  this amount  is provided  as an
                     advanced feature  for those  who wish to  make multiple
                     distributions to several G/L accounts (see section 4e).
                     Required. 


      4c - GETTING FAMILIAR WITH TRANSACTIONS 

      Before beginning to enter your own transactions, follow the procedures
      listed below  by doing  some practice simulation  using only  the demo
      accounts.  This  will aid  you in learning  how to  enter transactions
      without using live data. 

          1. From the Accounts Receivable Main Menu select "F1" on the menu.
             You will then be prompted for the following information: 

          Customer Num :____ 
          Tran Date    :__-__-__  Description:______________________________ 
          Reference Num:________  Invoice Num:________   Type(I,P,C,D,F,M):_ 
          Due Date     :__-__-__ 

          DEBIT :Account:____ _________________________   Amount:___________ 
          CREDIT:Account:____ _________________________   Amount:___________ 


          2. The cursor will be positioned at the "Customer Num" prompt. 

             On the lower half of your  screen, you will see a POP-UP window
             which  shows  existing  customers.  Seeing  these  accounts  is
             helpful when you are selecting customers. 



                                        PAGE 23




                       FINANCE MANAGER II - ACCOUNTS RECEIVABLE


             The  highlighted account  is  a pointer,  showing the  selected
             customer.  To  move the highlighted  account up or  down, press
             the up or down arrow keys on the right keypad, while the cursor
             is positioned at this prompt.   If you move the default pointer
             down, notice how the list scrolls to show you more customers. 

             You  may  select  an  existing account  number  by  moving  the
             highlighted pointer up or down  to the desired account and then
             pressing the enter key. 

             This select-a-customer mode will  also work for account numbers
             when at  the debit  account as  well as  at the  credit account
             fields. 

             This  advanced  feature  allows  you  to  scroll  through  your
             customers and accounts without ever having to memorize, or even
             type in, an account number. 


          3. If you like, enter some data using the demo files for practice. 

          4. To return to the previous menu, press ESC. 

      Before entering  your own transactions, practice  adding, changing and
      deleting transactions by using the  demo files.  This will familiarize
      you with how  to enter, change, or delete  transactions.  Changing and
      deleting transactions is described in the following sections. 

      EVERY transaction has  either a debit or a credit  to the G/L accounts
      receivable account.  For type "I","D"  and "F" transactions it will be
      a debit,  for type  "P"  and "C"  transactions it  will  be a  credit.
      Because  of this,  FINANCE  MANAGER will  always  select that  account
      number for you  and skip on to  the amount field.  This  amount is the
      change you  are making to the  customers account.  In effect,  you are
      changing  the customers  balance on  his account,  while changing  the
      general ledger  accounts receivable  account at  the same  time.  This
      keeps  your  general  ledger  receivables automatically  up  to  date.
      Posting to the G/L is, of course,  required to see this impact in your
      G/L reports. 


      4d - ENTERING TRANSACTIONS 

      As you enter each transaction,  FINANCE MANAGER saves this information
      and  changes  the   customer  account  as  appropriate.    A  list  of
      transactions entered can  be seen by printing  the Accounts Receivable
      Journal report (see section five - reports). 

      Each transaction  entered is checked to  ensure that it is  in balance
      (i.e. debit amounts = credit amounts).  This will ensure that you will
      always be in balance. 

          1. In order to begin entering  transactions , select "F1" from the
             Accounts Receivable Main  Menu.  You will then  be prompted for
             the following information: 



                                        PAGE 24




                       FINANCE MANAGER II - ACCOUNTS RECEIVABLE


          Customer Num :____ 
          Tran Date    :__-__-__  Description:______________________________ 
          Reference Num:________  Invoice Num:________   Type(I,P,C,D,F,M):_ 
          Due Date     :__-__-__ 

          DEBIT :Account:____ _________________________   Amount:___________ 
          CREDIT:Account:____ _________________________   Amount:___________ 


          2. When entering transactions, the last transaction entered always
             provides the default data (unless, of course, this is your very
             first transaction).   To accept the default  data, simply press
             ENTER and you will move to  the next field.  In order to change
             data, simply type in the new data and then press ENTER. 


          3. First enter the customer number: 

                                Customer Num :2000 

             The  existing customers  are shown  on  the lower  half of  the
             screen.  You  may either  select a customer  from this  list by
             using the keypad arrow keys  (as described earlier), or you may
             type in the customer number.  If you are using the keypad arrow
             keys, be sure the Num Lock key is off. 


          4. Enter the transaction date: 

                              Tran Date   :_1-_7-89 


          5. Enter the description: 

                    Description:Purchase PC clone computer____ 


          6. Enter the reference number: 

                              Reference Num:T001____ 

             When entering the  Reference number you may use the  "+" key to
             automatically increment from the last entry. 

          7. Enter the invoice number: 

                               Invoice Num:89-0001_ 

             When entering  the Invoice number  you may  use the "+"  key to
             automatically increment  the invoice number.  Also,  if you are
             entering  the  same number  in  the  invoice  field as  in  the
             Reference  field you  may use  the "="  key to  input the  same
             number automatically. 


          8. Enter the transaction type code: 


                                        PAGE 25




                       FINANCE MANAGER II - ACCOUNTS RECEIVABLE



                                Type(I,P,C,D,F,M):I 


          9. If the transaction code is NOT type "I" then this field will be
             skipped, otherwise enter the due date: 

                                 Due Date:_2-_6-89 


         10. If the  transaction type code is  "P" or "C", simply  enter the
             G/L account  to be debited.   For other types  of transactions,
             this field will be preset by the system. 

                                DEBIT :Account:1200 

             The existing  G/L accounts are shown  on the lower half  of the
             screen via a pop-up chart  of accounts listing.  You may either
             select an account from this list by using the keypad arrow keys
             (as described earlier), or you  may type in the account number.
             If you  are using the keypad  arrow keys, be sure  the Num Lock
             key is off. 

             In  this  example, since  the  type  code  is "I",  the  system
             automatically  selects  a  debit  account 1200.   This  is  the
             General Ledger  Accounts Receivable  account as  set up  in the
             configuration. 


          11. Enter the transaction amount: 

                                Amount:899.89_____ 


          12. If the transaction type code is "I", "D" or "F", enter the G/L
              account to be credited.  For other types of transactions, this
              field will automatically be preset by the system. 

                                CREDIT:Account:4010 

              The existing G/L  accounts are shown on the lower  half of the
              screen.  You  may either select  an account from this  list by
              using the keypad arrow keys (as described earlier), or you may
              type in the account number.  If you are using the keypad arrow
              keys, be sure the Num Lock key is off. 

              In  this example,  we  selected General  Ledger account  4010.
              Since this transaction  was a type "I"  (customer purchase) we
              credited the G/L Computer  Hardware Income account, since this
              sale is an income to our company. 


          13. Enter the credit amount: 

                                Amount:899.89_____ 



                                        PAGE 26




                       FINANCE MANAGER II - ACCOUNTS RECEIVABLE


              The  default amount  will be  the amount  entered above.   You
              should  press  ENTER  to  except this  amount.   If  you  have
              multiple distributions,  and need a different  amount, see the
              following section on Entering multiple distributions. 

              If you  enter an amount  different from the debit  amount, the
              system will tell  you that you are out of  balance.  Press the
              backspace key to backup and correct the amount. 


          14. If you are entering a transaction and you want to go back to a
              previous field, you can back up by using the Backspace key. 


          15. You may abort the transaction at any time by pressing ESC. 


          16. To accept the transaction: 

                             ARE INPUTS CORRECT(Y/N):Y 

              Answer  the prompt  with "Y".   The transaction  will then  be
              accepted and saved.  The cursor will then automatically return
              to  the  Customer Number  field  and  be  ready for  the  next
              transaction.  If you  answer this prompt with a  "N", you will
              return to the Customer Number field and be allowed to make any
              changes or corrections as necessary. 


          17. After you have entered all  desired transactions, press ESC to
              return to the Accounts Receivable Main Menu. 


      4e - ENTERING MULTIPLE DISTRIBUTIONS 

      Many transactions have  only one debit and one  credit account.  There
      are instances, however, when there are several debits or credits for a
      single transaction. 

      Let's take the example shown above, except that we had to add 5% sales
      tax to the purchase.  This transaction would have one credit of 899.89
      to  account 4010  (as above).   However, we  would now  have a  second
      credit of 44.99  for the sales tax, making the  total purchase 944.88.
      This  type of  multiple-distribution transaction  would be  entered as
      follows: 1.   Follow steps 1-10 in "Entering Transactions" above. 


          2. Enter the debit transaction amount: 

                                Amount:944.88_____ 

             This  is the  total  amount the  customer  owes, purchase  plus
             taxes. 


          3. Next, enter the first credit account: 


                                        PAGE 27




                       FINANCE MANAGER II - ACCOUNTS RECEIVABLE



                                CREDIT:Account:4010 

             In this  example we selected  General Ledger account  4010, the
             G/L Computer Hardware Income account. 


          4. Enter the credit amount for account 4010: 

                                Amount:899.89_____ 

              This is the income we have received from the sale. 


          5. The system  will now tell  you that  the transaction is  out of
             balance: 

                  TRANSACTION IS OUT OF BALANCE, CONTINUE (Y/N):Y 

             We know that we did not make  an error, so we would answer with
             a "Y". 


          6. When  the  screen reappears,  notice  that  there is  a  column
             labeled "CUM AMT", at the right, which registers the cumulative
             debit and credit amounts entered. 


          7. Now the  second part of  the transaction needs to  be recorded,
             namely, the sales tax for the transaction. 


          8. Since this  is the second  part of the transaction,  the cursor
             will skip  down to the  credit account field.  You  will notice
             that all  of the  date, description,  type code,  invoice, etc.
             fields  are  left  as  they  were in  the  first  part  of  the
             transaction.  They cannot be changed, and are displayed only as
             a reminder of what transaction you happen to be working on. 

             Enter the second credit account: 

                                CREDIT:Account:2100 

             In this  example we selected  General Ledger account  2100, the
             G/L Sales tax liability account.   It is a liability because it
             must be paid to the state at a later date. 


          9. Enter the credit amount for account 2100: 

                                Amount:44.99______ 

             Note that the  system default for the amount  is the cumulative
             remaining  amount required  to  balance  the transaction.   The
             system thus saves you keystrokes in completing the transaction. 



                                        PAGE 28




                       FINANCE MANAGER II - ACCOUNTS RECEIVABLE



         10. Answer the "ARE INPUTS CORRECT" prompt with a "Y": 

                            ARE INPUTS CORRECT (Y/N):Y 


         11. In this example,  the transaction would now be  in balance, and
             you would be ready for the next one. 


      You may have a situation in which  there are more than two credits for
      one debit, or  visa versa.  As long as the  cumulative amounts are not
      equal, you will  be allowed to enter more accounts  and amounts (up to
      25 total parts). 

      When you are entering multiple  distributions, FINANCE MANAGER will go
      to either  the debit or credit  side of the transaction,  depending on
      which has a lower cumulative amount (it assumes this is where you will
      put another amount).  If  you wish to put an amount  on the other side
      of the  transaction, move to the  next or previous field  by using the
      return or backspace keys respectively. 


      4f - CHANGING EXISTING TRANSACTIONS 

      If you  discover an error in  an earlier transaction, or  if you would
      like  to change  previously  entered information,  FINANCE MANAGER  II
      allows you to  do so.  Outlined below are the  procedures for changing
      previously entered transactions: 

          1. Select "F2" at the Accounts Receivable Main Menu. 

          2. The system prompts you for "Transaction Search Data". 

          3. Enter data  in the fields  which you  want to match  that data.
             For example, if  you want to search for  all transactions which
             have a  description of "Purchase  PC clone", you would  move to
             the  description field  and enter  the description.   Upper and
             lower case does not matter, and you do not have to complete the
             description.  For example,  if you entered only  the first part
             of  the  description  "Purc",  FINANCE MANAGER  will  find  all
             descriptions  which   begin  with  the  letters   "purc"  (i.e.
             "Purchase  PC Clone").   You could  also add  a month  and year
             parameter to the search, and  consequently find only the "purc"
             descriptions in a particular month. 

             Any field  left blank is an  assumed wild card for  that field.
             Thus, if  you leave ALL  of the fields blank,  all transactions
             are selected by the search. 

          4. Next,  FINANCE   MANAGER  II  searches  for   all  transactions
             containing the values you  have specified.  As each transaction
             is displayed, the program displays the following prompt:

                Modify/Delete/Continue/Reverse/Begin/End/+/-/Quit: 



                                        PAGE 29




                       FINANCE MANAGER II - ACCOUNTS RECEIVABLE


             You must select M,D,C,R,B,E,+,-, or Q. Where: 

               M = Modify (change) transaction shown. 
               D = Delete (remove) transaction shown. 
               C = Continue (find next transaction that matches search). 
               R = Reverse continue (find prior tran. that matches search). 
               B = Beginning (go to first transaction in file). 
               E = Ending (go to last transaction in file). 
               + = Go to next consecutive transaction in file. 
               - = Go to prior consecutive transaction in file. 
               Q = Quit transaction search. 


          5. As long  as you continue to  answer the above prompt  with "C",
             FINANCE  MANAGER  continues   searching  for  all  transactions
             containing the  values you have specified.   Selecting "R" does
             the same as "C" except it searches backwards. 

          6. Answering  the prompt  with  a "+"  causes  FINANCE MANAGER  to
             display the next  consecutive transaction; a "-"  shows you the
             previous transaction. 

          7. Entering a "B" or an "E" will  take you to the Beginning or End
             of the  transaction file respectively.  It  ignores your search
             parameters. 

          8. When the search  function displays the transaction  you wish to
             change, answer the prompt with an "M" (Modify). 

          9. You  are  now  in  the  change  mode.   ENTER  leaves  a  field
             unchanged.  Change data in any field by typing in the new value
             for the given field.  

             If the transaction has been  posted to your General Ledger, the
             changes allowed  will be minimal.   This is necessary  to avoid
             out-of-balance conditions  with your General Ledger.   If it is
             posted, there  will be  a "Transaction Posted  Changes Limited"
             message on the  screen, and you will only be  allowed to change
             the dates, description, reference, invoice and due date fields.
             Changes to  any other fields  would cause a conflict  with your
             General Ledger. 

             If you need to change other  fields of a posted transaction, we
             suggest  that you  enter a  new transaction  which reflects  an
             adjustment to the original transaction. 

         10. If  you have  made a  mistake,  or would  like to  return to  a
             previous  field, use  the Backspace  key.  Use  the ESC  key to
             ignore your changes and return to the Main Menu. 

         11. If your changes cause the transaction to be out of balance, the
             system will  not accept  your change.   You must  re-enter your
             changes, making  sure your  cumulative debits  equal cumulative
             credits. 

             NOTE: If you  are changing  a transaction with  multiple debits


                                        PAGE 30




                       FINANCE MANAGER II - ACCOUNTS RECEIVABLE


                   and/or credits you can not change the number of parts the
                   transaction had  originally.  If  you need to  change the
                   number  of parts  of a  transaction we  suggest that  you
                   delete the old transaction and add a completely new one. 


      4g - DELETING TRANSACTIONS 

      To delete or remove a transaction permanently, do the following: 

          1. Select F2 at the Accounts Receivable Main Menu. 

          2. Enter search data and find  desired transaction as described in
             "Changing Transactions". 

          3. When the  transaction you  wish to delete  is displayed  on the
             screen, answer "D" at the prompt below: 

                   Modify/Delete/Continue/Reverse/Begin/End/+/-/Quit: 

             If the transaction  has been posted to the  General Ledger, the
             system will  not allow you  to delete  it.  This would  cause a
             conflict with your General Ledger. 

             If you need to delete a posted transaction, we suggest that you
             enter  a  new transaction  which  reflects  a reversal  of  the
             original transaction. 

          4. When you are deleting a multiple-part transaction, all parts of
             the transaction are deleted. 

          5. After you have deleted the  desired transaction(s), you may use
             the  "Sort" function.   (See  Section Six  "Other features  and
             functions   -   Sorting   Transactions.")  When   sorting   the
             transactions,  the program  frees disk  space formerly  used by
             deleted transactions.  


      4h - POINTS TO REMEMBER 

      When entering transactions in this  module, you are basically entering
      transactions with debits  and credits, just as you would  when you are
      entering transactions into  your General Ledger.  In fact,  all of the
      debits  and credits  which you  have entered  will be  posted to  your
      General Ledger  as if you  had entered  them into your  General Ledger
      yourself. 

      The  only difference  between  entering transactions  in your  General
      Ledger, or the  Accounts Receivable module, is that  this module keeps
      detailed  information  on each  customer  without  cluttering up  your
      General Ledger. 

      In fact, you could set up an accounts receivable account (one for each
      customer) in your  General Ledger, and do exactly what  this module is
      doing for  you.  The  only disadvantage  of doing  that would  be, for
      example,  if  you had  200  customers,  you  would have  200  accounts


                                        PAGE 31




                       FINANCE MANAGER II - ACCOUNTS RECEIVABLE


      receivable accounts  in your General  Ledger Chart of  Account assets.
      These would obviously clutter up your balance sheet significantly.  Of
      course,  this  module also  allows  you  to do  many  customer-related
      functions which you cannot do with your General Ledger.

      Each transaction must  have at least one debit account  and one credit
      account (just like in General  Ledger transactions).  However, it also
      needs  one more  account:  the customer  account  number.  This  third
      account number, the customer account, is what allows you to keep track
      of each customer individually.  Other  than this third account number,
      and other customer  related inputs, this transaction is the  same as a
      General Ledger transaction.   Think of debits and credits  just as you
      would when entering sales or payments in your General Ledger. 

      Be  sure to  remember that  any transactions  which are  entered here,
      should not be  entered in your General Ledger  transactions since they
      will automatically be placed there when you post to the General Ledger
      (see section 6d - Posting to the General Ledger).

      The accounts  receivable module  uses accrual accounting.   This means
      that income is  recorded at time of  sale, and not at the  time that a
      payment is made.  Thus, when recording  a sale, the system will always
      debit your accounts receivable account, and you should always remember
      to credit your  sales income account.  At time of  payment, be sure to
      debit your  cash account, or,  if payment is  to be deposited  to your
      checking account,  debit your  checking account.   By doing  this, the
      system will credit your accounts receivable account. 

      With  this  accrual  accounting  method, your  General  Ledger  income
      account will  show income  when earned,  and your  Accounts Receivable
      account will show the amount owed by all of your customers. 

      There are five  different types of transactions.   A brief description
      of each, as well as typical debits and credits follow: 
























                                        PAGE 32




                       FINANCE MANAGER II - ACCOUNTS RECEIVABLE


                                         ----- GENERAL LEDGER ACCOUNT ------
             DESCRIPTION            TYPE DEBIT             CREDIT
             ---------------------  ---- ----------------- -----------------
             CUSTOMER PURCHASE        I  Accts Receivable  Sales Income
                                         (System Selected) (Accrued income)

             CUSTOMER PAYMENT         P  Checking account  Accts Receivable
                                         (Deposit)         (System Selected)

             MISC DEBIT TO ACCOUNT    D  Accts Receivable  Any Account
             (For example, If a check    (System Selected) (Checking acct ?)
              from a customer is
              returned you would credit
              your checking account.)

             MISC CREDIT TO ACCOUNT   C  Any Account       Accts Receivable
             (For example, If a customer (Sales income ?)  (System Selected)
              returned an item you would
              debit your sales income
              or other income account.)

             FINANCE CHARGE           F  Accts Receivable  Finance Chg Income
                                         (System Selected)

             MEMO TRANSACTION
             (Transaction to enter    M      N/A               N/A
              extra description.)































                                        PAGE 33




                       FINANCE MANAGER II - ACCOUNTS RECEIVABLE


                              SECTION FIVE - REPORTS 

      The Accounts  Receivable Reports  Menu allows you  to generate  a full
      spectrum  of  Receivable reports  from  your  customer database.   The
      reports menu ("F3" from the  Accounts Receivable Main Menu) appears as
      follows: 

                     ----------- A/R REPORTS MENU ----------- 
                     |                                      | 
                     |   ESC  Return to AR Main Menu        | 
                     |   F1   Receivable Journal            | 
                     |   F2   Customer Statements           | 
                     |   F3   Customer Invoices             | 
                     |   F4   Receivable Aging              | 
                     |   F5   Schedule of Receivables       | 
                     |   F6   Customer Accounts List        | 
                     |   F7   Customer Address Labels       | 
                     |   F8   Non-Posted Transaction Journal| 
                     |   F9   General Ledger Distribution   | 
                     |                                      | 
                     |   ENTER YOUR SELECTION:              | 
                     |                                      | 
                     ---------------------------------------- 

      Reports can be generated to show results for a specific month, a range
      of months,  a quarter, a year,  etc.  All reports can  be generated at
      any time and for any time period.  This means that you are not limited
      to printing a report only once, and it also means that you can print a
      report for a prior period as well. 

      Samples of each report are shown in Appendix A or may be printed while
      using the DEMO accounts. 


      5a - GENERAL INSTRUCTIONS FOR GENERATING REPORTS 

      While printing any report you  may, if desired, interrupt the printing
      in one of two ways: 

      PAUSE THE PRINTER: When you are printing  reports on your printer, you
                         may pause the printing by pressing any key.  Please
                         keep  in  mind  that  most printers  have  a  print
                         buffer.   Consequently,  the  report  continues  to
                         print until the buffer  is empty.  Pressing any key
                         again will  continue your printout.   This function
                         will not  work if  you are  sending reports  to the
                         screen  since reports  will  stop automatically  as
                         each screen is full. 

      STOP THE PRINTER:  If, while  printing, you  wish to stop  the printer
                         and return to the menu, all you have to do is press
                         the  "Esc"  key.  Please  keep  in  mind that  most
                         printers have a print buffer, causing the report to
                         continue to  print until the buffer  is empty.  You
                         will, however, return to the menu immediately. 



                                        PAGE 34




                       FINANCE MANAGER II - ACCOUNTS RECEIVABLE


      When generating  reports, you  have three output  destination options.
      First, you may simply list reports to the screen.  Second, if you have
      a printer, you  can print a hard  copy of the reports.   You also have
      the option of sending  your reports to a disk file,  instead of to the
      printer.  With this option, reports can be stored, and then printed at
      a later date. 

      This  "Destination" prompt  is an  option  for each  of the  available
      reports.  To select the destination, answer the prompt below: 

                         TO SCREEN/PRINTER/DISK (S/P/D):_ 

      If you  select "D"  for disk, the  system will prompt  you for  a disk
      filename.  Enter a filename of up  to eight characters.  The file will
      be saved on your  data disk, with the file extension  of ".RPT".  If a
      file with the name entered already exists, the system will tell you so
      and ask if  you want to delete  the old file.  If you  answer "N", the
      report will be appended to the already existing disk file. 

      For some  reports, you also  need to  specify reporting dates  via the
      "Date" prompt.  The date prompt appears as follows: 

                       ENTER DATE RANGE FOR REPORTS: 
                                   STARTING Month:__ Year:__  
                                     ENDING Month:__ Year:__ 

      These dates determine what months and years are shown on your reports.
      The ending month and year must be within twelve months of the starting
      month and  year.  To get  a year-to-date  report you might  select the
      dates  1-89 through  12-89.  Likewise,  if  you want  a first  quarter
      report you could select 1-89 through 3-89. 

      When entering prompts for reports, remember  that you may back up to a
      previous field by pressing the Backspace  key.  If you want to go back
      to the reports menu while you are  at the input screen, press ESC.  If
      you want to return to the  reports menu after your report has finished
      listing to the screen, press ENTER.

      Since there  are different reporting  options within reports,  some of
      the different types  of screen options follow, as well  as the reports
      to which they apply. 


      5b - PRINTING THE ACCOUNTS RECEIVABLE JOURNAL 

      This report is a listing of all transactions which took place during a
      specified period of time. 

      When printing the Accounts Receivable  Journal (F1), be sure to employ
      the following procedures: 

          a. Select "F1" from the reports menu. 

          b. The following screen will appear: 

                         TO SCREEN/PRINTER/DISK (S/P/D):_ 


                                        PAGE 35




                       FINANCE MANAGER II - ACCOUNTS RECEIVABLE



                           ENTER DATE RANGE FOR REPORTS: 
                                     STARTING  Month:__  Year:__ 
                                       ENDING  Month:__  Year:__ 

                           ENTER TRANSACTION TYPE:_ 
                           (I,P,D,C,F,M, or space) 
                            space = all types 

          c. First, type  in the destination  for your report.   Then, enter
             the date range wanted for your report. 

          d. Next, enter  the type  of transactions to  be included  in this
             report.  If  you enter  a space all  transaction types  will be
             included.  The transaction  types are the same  types used when
             the transactions were entered.  Unless you want only a specific
             type of transaction shown you would normally enter a space (for
             all types). 

          e. The report will then be printed. 


      5c - PRINTING CUSTOMER STATEMENTS 

      Statements (or  bills) for each  customer show beginning  balance, and
      all transactions  and ending  balance for a  specific period  of time.
      These may be sent  to each customer as a bill by  using blank paper or
      pre-printed forms (Nebs Inc. product 9226-2). 

      When  printing  customer  statements  (F2),  be  sure  to  employ  the
      following procedures: 

          a. Select "F2" from the reports menu. 

          b. The following screen will appear: 

                          TO SCREEN/PRINTER/DISK (S/P/D):_ 

                             ENTER DATE RANGE FOR REPORTS: 
                                     STARTING  Month:__  Year:__ 
                                       ENDING  Month:__  Year:__ 

                             ACCOUNT NUMBER RANGE: 
                                           STARTING ACCOUNT:____ 
                                             ENDING ACCOUNT:____ 


          c. First, type  in the destination  for your report.   Next, enter
             the  date range  wanted for  your report.   Finally, enter  the
             customer  account number  range you  want statements  for (i.e.
             customer number 1000 through 2000. 

          d. The report will then be printed. 

      To  avoid printing  statements on  accounts with  a zero  balance, you
      should set  the "PRINT ACCOUNTS  WITH ZERO AMOUNTS"  to no "N"  on the


                                        PAGE 36




                       FINANCE MANAGER II - ACCOUNTS RECEIVABLE


      Change  System  Defaults option  on  the  System Utilities  Menu  (see
      getting started manual). 


      5d - PRINTING CUSTOMER INVOICES 

      Shows all transactions  for a customer with a  specific invoice number
      and with  a total due  amount.  Use  blank paper or  pre-printed forms
      (Nebs Inc. product 9296-2). 

      An  invoice differs  from  a statement  in  that it  does  not have  a
      beginning or ending balance.  It is  simply a list of transactions for
      a customer, which have a specific selected invoice number on them. 

      When printing customer invoices (F3) follow the following procedures: 

          a. Select "F3" from the reports menu. 

          b. The following screen will appear: 

                         TO SCREEN/PRINTER/DISK (S/P/D):_ 


                         INVOICE NUMBER STARTING:________ 
                                          ENDING:________ 

                         ACCOUNT NUMBER RANGE: 
                                       STARTING ACCOUNT:____ 
                                         ENDING ACCOUNT:____ 


          c. First, type in the destination for your report. 

          d. Next,  enter the  invoice number(s)  wanted (i.e.  transactions
             with that invoice number). 

          e. Finally enter the  customer account number range  for which you
             want an invoice (i.e. customer number 1000 through 1000). 

          f. The report will then be printed. 


      5e - PRINTING THE RECEIVABLE AGING REPORT 

      This report  shows customer  receivables by  due-date age.   It allows
      quick  access to  slow and  delinquent customer-payments  information.
      Aging report  uses balance-forward accounting and  payments are always
      applied to the oldest balance. 

      When  printing   the  Receivable  Aging  report   (F4)  the  following
      procedures apply: 

          a. Select "F4" from the reports menu. 

          b. The following screen will appear: 



                                        PAGE 37




                       FINANCE MANAGER II - ACCOUNTS RECEIVABLE


                         TO SCREEN/PRINTER/DISK (S/P/D):_ 


                             ENTER REPORT DATE:__-__-__ 


          c. Type in the destination for your report.  Next, select the date
             you  want the  report  to  show.  Normally  this  would be  the
             current date.  By selecting a future or past date, however, you
             can see how  your customer aging looked last  week, versus what
             it might look like next week.  By using different dates you can
             readily see how different customers  pay their bills.  You can,
             moreover, do cash-flow  forecasting by selecting a  date in the
             future. 

          d. The report will then be printed. 


      5f - PRINTING THE SCHEDULE OF RECEIVABLES REPORT 

      This  report shows  customer  balances, credit  limits, and  available
      credit  for  any  selected   month.   Trended  option  shows  customer
      balances, by month, for receivables balances history. 

      When  printing  the  Schedule   of  Receivables  (F5),  the  following
      procedures apply: 

          a. Select "F5" from the reports menu. 

          b. The following screen will appear: 

                           TO SCREEN/PRINTER/DISK (S/P/D):_ 

                           ENTER DATE RANGE FOR REPORTS: 
                                   STARTING  Month:__  Year:__ 
                                     ENDING  Month:__  Year:__ 

                           DO YOU WANT A TRENDED REPORT(Y/N):_

          c. First, type  in the destination  for your report.   Next, enter
             the date range wanted for your report. 

          d. Then, answer the "Trended Report"  prompt with "Y" or "N".  See
             Appendix A for examples of trended and non-trended reports. 

          e. The report will then be printed. 


      5g - PRINTING THE CUSTOMER ACCOUNTS REPORT 

      This report  is a  listing of all  customers, showing  all information
      currently set up for each customer. 

      When printing this report the following procedures apply: 

          a. Select "F6" from the reports menu. 


                                        PAGE 38




                       FINANCE MANAGER II - ACCOUNTS RECEIVABLE



          b. The following screen will appear: 

                      ---------- SELECT SORT ORDER --------- 
                      |                                    | 
                      |   ESC  Return to Reports Menu      | 
                      |   F1   Account Number Order        | 
                      |   F2   Zipcode Order               | 
                      |   F3   Customer Name Order         | 
                      |                                    | 
                      |                                    | 
                      |                                    | 
                      |                                    | 
                      |                                    | 
                      |                                    | 
                      |   ENTER YOUR SELECTION:            | 
                      |                                    | 
                      |                                    | 
                      -------------------------------------- 

          c. Select either "F1",  "F2", or "F3", depending on  the order you
             what the report to be in. 

          d. Next the following screen will appear: 

                         TO SCREEN/PRINTER/DISK (S/P/D):_ 

          e. Type in the destination for your report. 

          f. The report will then be printed. 


      5h - PRINTING THE CUSTOMER ADDRESS LABELS 

      This  report provides  mailing labels  for your  customers, sorted  by
      customer account, zipcode, or customer  name order.  Use one-up labels
      with any length from 6 to 99 lines per label. 

      When printing this report the following procedures apply: 

          a. Select "F7" from the reports menu. 

          b. The following screen will appear: 















                                        PAGE 39




                       FINANCE MANAGER II - ACCOUNTS RECEIVABLE


                      ---------- SELECT SORT ORDER --------- 
                      |                                    | 
                      |   ESC  Return to Reports Menu      | 
                      |   F1   Account Number Order        | 
                      |   F2   Zipcode Order               | 
                      |   F3   Customer Name Order         | 
                      |                                    | 
                      |                                    | 
                      |                                    | 
                      |                                    | 
                      |                                    | 
                      |                                    | 
                      |   ENTER YOUR SELECTION:            | 
                      |                                    | 
                      |                                    | 
                      -------------------------------------- 

          c. Select either "F1",  "F2", or "F3", depending on  the order you
             what the labels to be in. 

          d. Next the following screen will appear: 

                      ------ CUSTOMER ADDRESS LABELS ------- 
                      |                                    | 
                      | TO SCREEN/PRINTER/DISK (S/P/D):_   | 
                      |                                    | 
                      |                                    | 
                      |                                    | 
                      | Number of lines per label:__       | 
                      | Print Zero Balance Accounts (Y/N)_ | 
                      |                                    | 
                      |                                    | 
                      |                                    | 
                      | ACCOUNT NUMBER RANGE:              | 
                      |              STARTING ACCOUNT:____ | 
                      |                ENDING ACCOUNT:____ | 
                      |                                    | 
                      | Do you want an Alignment(Y/N):_    | 
                      -------------------------------------- 

          e. Type in the destination for your labels. 

          f. Enter the number of lines per label (6-99).  This is the number
             of print  lines from  the top of  one label to  the top  of the
             next.  Usually 6 lines for 15/16 inch labels. 

          g. If  you  want  labels  for all  selected  accounts  answer  the
             "Print Zero Balance Accounts" prompt with a "Y".  If you answer
             with a  "N" (print only  accounts with a non-zero  balance) you
             will be  prompted for  the as  of month and  year to  check for
             non-zero  account  balances.   Enter  the  month  and  year  as
             follows: 

                             ENTER  Month:__  Year:__ 




                                        PAGE 40




                       FINANCE MANAGER II - ACCOUNTS RECEIVABLE


          h. Next, enter the  customer account number range  you want labels
             for (i.e. customer number 1000 through 3000). 

          i. Finally, load your  printer with blank labels.  In  order to be
             sure you  have them  lined up  properly.  Answer  the alignment
             prompt with a  "Y".  Repeat this until your  labels are aligned
             properly in your printer.  Then answer with a "N".

          j. The labels will then be printed. 


      5i - PRINTING THE NON-POSTED TRANSACTION JOURNAL 

      This report is  a listing of ALL transactions which  have not yet been
      posted to your General Ledger. 

      When printing this report the following procedures apply: 

          a. Select "F8" from the reports menu. 

          b. The following screen will appear: 

                           TO SCREEN/PRINTER/DISK (S/P/D):_ 


                           ENTER TRANSACTION TYPE:_ 
                           (I,P,D,C,F,M, or space) 
                            space = all types 

          c. Type in the destination for your report. 

          d. Next, enter  the type  of transactions to  be included  in this
             report.  If  you enter  a space all  transaction types  will be
             included.  The transaction  types are the same  types used when
             the transactions were entered.  Unless you want only a specific
             type of transaction shown you would normally enter a space (for
             all types). 

           e. The report will then be printed. 


      5j - PRINTING THE RECEIVABLES G/L DISTRIBUTION REPORT 

      This report shows the total amount of Accounts Receivable transactions
      posted to each General Ledger account number. 

      a. Select "F9" from the reports menu. 

      b. The following screen will appear: 









                                        PAGE 41




                       FINANCE MANAGER II - ACCOUNTS RECEIVABLE


                       TO SCREEN/PRINTER/DISK (S/P/D):_ 

                       ENTER DATE RANGE FOR REPORTS: 
                            STARTING  Month:__  Year:__ 
                              ENDING  Month:__  Year:__ 

      c. First, type  in the destination  for your report.  Then,  enter the
         date range wanted for your report. 

      d. The report will then be printed. 
















































                                        PAGE 42




                       FINANCE MANAGER II - ACCOUNTS RECEIVABLE


                    SECTION SIX - OTHER FEATURES AND FUNCTIONS 


      The remainder of the features and functions of the Accounts Receivable
      Module are contained on the Accounts Receivable Utilities Menu.  These
      features are some of the most powerful and important functions of this
      module.   To use  these features  select  "F5" while  on the  Accounts
      Receivable Main Menu.  The following menu will be shown: 


                      --------- A/R UTILITIES MENU --------- 
                      |                                    | 
                      |   ESC  Return to AR Main Menu      | 
                      |                                    | 
                      |   F1   Sort Transactions           | 
                      |   F2   Calculate Finance Charges   | 
                      |   F3   Post Transactions to GL     | 
                      |   F4   A/R Configuration Settings  | 
                      |                                    | 
                      |                                    | 
                      |                                    | 
                      |                                    | 
                      |                                    | 
                      |   ENTER YOUR SELECTION:            | 
                      |                                    | 
                      |                                    | 
                      -------------------------------------- 

      In this section we will discuss each  function as well as its uses and
      features.  Since  Configuration settings are required  before you will
      be  able to  enter any  transactions, we  will discuss  this selection
      first. 

      6a - CONFIGURATION SETTINGS 

      The configuration settings allow you  to configure this module to your
      specific  company, and  to  its specific  G/L  account numbers.   This
      configuration  is very  important  to your  transactions, to  customer
      statements, to  types of forms used,  to GL account numbers  used, and
      also to automatic finance-charge calculations. 

      By  selecting  "F4" from  the  Configuration  menu  you will  see  the
      following screen: 

      STATEMENT RETURN ADDRESS & MESSAGE: 
      Attention :__________________________ Detail posting to G/L(Y/N):_ 
      Company   :__________________________ Preprinted Statements(Y/N):_ 
      Address   :__________________________ 
      City/State:__________________________ G/L account number for 
                                                Accounts Receivable:____ 
                                                Fin. Charge Income :____ 
      Message 1 :_________________________________________ 
      Message 2 :_________________________________________ 


      The configuration  settings must be set  up for each set  of books you


                                        PAGE 43




                       FINANCE MANAGER II - ACCOUNTS RECEIVABLE


      have.   Be sure  to  carefully employ  the  following procedures  when
      setting up your configuration settings: 

          1. The  first   four  fields  (Attention,  Company,   Address  and
             City/State) are  used when printing customer  statements.  This
             name and address will print on the top of the statement, and is
             used as a return address for your customers to use when mailing
             their  payments back  to you.   Be  sure to  enter the  correct
             address which you  want your customers to use  for their return
             payments.  These  fields are not  used if you  have pre-printed
             statements and invoices. 

          2. Next,  (Message 1  and Message  2) are  used for  statement and
             invoice messages.   The message you  enter here will  appear on
             the bottom of each customer statement and invoice. 

          3. The next selection "DETAIL POSTING TO G/L" allows the option of
             posting transactions to  your G/L in detail  or summary format.
             Selecting detail  posting will post  each A/R transaction  as a
             separate G/L  transaction; while  answering "N" will  cause the
             A/R transactions to be grouped and summarized keeping the total
             number of transactions  posted to the G/L to  a minimum.  Which
             ever method you choose the  financial results will be the same.
             There  is one  other  difference, however,  if  you select  the
             detail posting each A/R transaction's  date will be used in the
             resultant G/L transaction while summary posting will prompt you
             for a date  at the time you  post and use that date  on the G/L
             transactions.   If you  are a  beginner  and do  not have  many
             transactions, we suggest that you select "Y" at this prompt. 

          4. The "Preprinted Statements" prompt  tells the system whether or
             not you are using pre-printed customer statements and invoices.
             If you are  using pre-printed forms, answer this  prompt with a
             "Y". 

             This system  is set up  to use the following  pre-printed forms
             from Nebs, Inc., Groton, MA 01471.  To order pre-printed forms,
             phone toll free 1-800-225-9550.   The following product numbers
             should be ordered. 

                    Pre-printed Statements   Product 9226-1 (1 part) 
                                                     9226-2 (2 part) 
                                                     9226-3 (3 part) 
                                                     9226-4 (4 part) 

                    Pre-printed Invoices     Product 9296-1 (1 part) 
                                                     9296-2 (2 part) 
                                                     9296-3 (3 part) 
                                                     9296-4 (4 part) 

             If you answer this prompt with a "N" the system will assume you
             are using  regular blank white paper,  and it will fill  in all
             headings and titles for reports. 

          5. Next, you will be asked for  two account numbers.  The first is
             your General Ledger, Accounts Receivable, asset-account number,


                                        PAGE 44




                       FINANCE MANAGER II - ACCOUNTS RECEIVABLE


             and  the  second  is   your  General  Ledger,  Finance  Charge,
             income-account number. 

             Prior to setting  up this configuration, you must  set up (add)
             these two  accounts to  your General  Ledger Chart  of Accounts
             (using the General Ledger module).  Both of these accounts must
             be active in your General Ledger  Chart of Accounts in order to
             be able to select them for use in this configuration setup.  We
             recommend that  you set up  these two  accounts for use  by the
             Accounts Receivable module only (i.e.  do not use these account
             numbers when entering your General Ledger transactions). 

             These two  General Ledger accounts are  the interface accounts,
             and are used  to interface the Accounts  Receivable Module with
             your General  Ledger Module.   It's important to  remember that
             the Accounts Receivable Module cannot be used without these two
             important GL accounts. 

             Enter  your   General  Ledger   Chart  of   Accounts,  Accounts
             Receivable account number in the first field.  Next, enter your
             General Ledger Chart of Accounts, Finance Charge Income account
             number in the second field. 

          6. Finally, at the "ARE INPUTS  CORRECT (Y/N)" prompt, answer "Y".
             If you  answer with a  "N", you will  be returned to  the first
             input line in order to allow more changes. 

      You may leave any field unchanged simply by pressing "return", to skip
      over it.   You may backup to  a previous field simply  by pressing the
      Backspace  key.  Or  you can  easily quit,  without saving  any input,
      merely by pressing the Esc key. 


      6b - SORTING TRANSACTIONS 

      The Accounts Receivable module  always keeps transactions organized in
      the order in which they are  input.  The Sort function allows the user
      to choose the  manner in which FINANCE MANAGER sorts  or organizes the
      transactions.  Transactions  may be  sorted either  by date  of input,
      transaction date, invoice, reference, or customer account order. 

      The sort procedure is not a required feature but it is useful when for
      example you are  printing the Accounts Payables Journal  and you would
      like to be sure that all transactions are in date order.  All you have
      to do is select date order sort to accomplish this. 

      To start sorting transactions, select  "F1" at the Accounts Receivable
      Utilities Menu.  The following screen appears: 










                                        PAGE 45




                       FINANCE MANAGER II - ACCOUNTS RECEIVABLE


                      ---------- SELECT SORT ORDER --------- 
                      |                                    | 
                      |   ESC  Return to Utilities Menu    | 
                      |   F1   Transaction Input Order     | 
                      |   F2   Date Order                  | 
                      |   F3   Invoice Order               | 
                      |   F4   Reference Order             | 
                      |   F5   Customer Number Order       | 
                      |                                    | 
                      |                                    | 
                      |                                    | 
                      |                                    | 
                      |   ENTER YOUR SELECTION:            | 
                      |                                    | 
                      |                                    | 
                      -------------------------------------- 

          1. Select  the  order  in  which   you  would  like  to  sort  the
             transactions. 

          2. FINANCE MANAGER automatically sorts all transactions. 

          3. Press any key to exit and return to the Main Menu when the sort
             is completed. 

      If you  have more transactions than  memory can hold at  one time, the
      default disk  drive is used  to store  a temporary file  while sorting
      transactions.   It  is  important  to remember,  therefore,  that  the
      default drive must have adequate remaining disk space, and it must not
      be "write protected". 

      If there is not enough space on  your default drive to sort your file,
      you must  put an empty  disk in this  drive (usually drive  A:) before
      selecting your sort order.  If you do run out of disk space, your sort
      is aborted and your transaction file remains unchanged. 

      If a  temporary disk file  is required for  the sort, the  system will
      inform you and it  will allow you to put a blank  disk in your default
      disk drive (NOT YOUR DATA DISK  DRIVE).  It is most important that you
      DO NOT take out your data disk  from its drive, or the program will be
      aborted. 


      6c - CALCULATING FINANCE CHARGES 

      To calculate finance charges select  "F2" from the Accounts Receivable
      Utilities Menu.  You will then be prompted for a date as follows: 

                          ENTER DATE FOR FINANCE CHARGES 

                                 Month:__ Year:__ 

      Enter the month  and year which you want to  calculate finance charges
      (usually the current month/year). 

      The system will  then calculate each customer's ending  balance due as


                                        PAGE 46




                       FINANCE MANAGER II - ACCOUNTS RECEIVABLE


      of the END of the selected month and year (i.e.  12-89 will be assumed
      to  be 12-31-89).   The due  dates for  each transaction  are used  to
      determine this ending due balance,  and transactions with due dates in
      the future  will never  be included  in this  balance.  By  using this
      calculated current due balance, as well as the interest rate specified
      for that customer  account, the system will generate  a finance charge
      transaction automatically  for all  past due customers.   This finance
      charge  will show  up on  the customer  statement as  a type  "F" code
      transaction. 

      You may review  all generated finance charges by  printing an Accounts
      Receivable Journal  report for the  same month and year.   Select type
      "F" transactions  to show only  the finance charge  transactions.  Any
      finance charge which you want to change or delete may be done so using
      the Change/Delete transactions "F2" on the main A/R menu.  To find and
      change these finance charges simply  input the month, year, (leave day
      blank), and tran type "F"  on the transaction search parameter screen.
      All finance  charge transactions will then  be displayed individually,
      one at a time, to allow you to make changes as necessary. 

      You can calculate finance charges at any time and as many times as you
      want.   In  order to  prevent  charging  your customers  duplicate  or
      incorrect finance  charges, we  strongly recommend  that you  only run
      this procedure  once a month,  usually on the  last day of  the month,
      after all transactions and payments  for that month have been entered.
      This will insure that your customer balances  are up to date as of the
      end of the month. 


      6d - POSTING TO THE GENERAL LEDGER 

      Accounts  Receivable  Utilities  Menu  selection "F3"  will  post  all
      transactions entered  into this module  to your General  Ledger books.
      Transactions are  read, summarized,  and then  posted to  your General
      Ledger in summary format. 

      You'll  be pleased  to know  that this  posting procedure  is a  smart
      procedure.  It will only post  the transactions which have not already
      been posted.  Because of this  incredible time-saving feature, you may
      accidentally post as  many times as you wish without  the worry of any
      errors or double posting. 

      This posting process  is mandatory, and should be done  before you run
      any  General  Ledger  reports.   Without running  this  procedure,  no
      transactions  or activity  from  this  module will  be  shown on  your
      General Ledger reports. 

      NOTE: After this posting procedure is complete, the transactions which
            were posted  can no longer  be changed  as far as  type, account
            numbers or amounts. 

      Because of this unique safety feature, we recommend that you only post
      after  you are  absolutely  sure all  transactions  have been  entered
      correctly and that any adjustments  have been made.  Generally, a good
      rule for  you to follow  is to post transaction  once a month,  on the
      last day of that  month.  Be sure that your posting  is done AFTER you


                                        PAGE 47




                       FINANCE MANAGER II - ACCOUNTS RECEIVABLE


      run the calculate finance charge procedures (if you are using it). 

      After you  have run this  procedure you  can print any  General Ledger
      reports,  and all  activity  from this  module  will be  automatically
      included in your General Ledger reports. 

      In order to run this procedure, select "F3" on the Accounts Receivable
      Utilities menu.  If you selected  the detail post configuration option
      the posting will commence.  If you did not select detail post you will
      then be  prompted for a date  to use when posting  transactions to the
      General Ledger.  This prompt is as follows: 

                       Enter Post Transaction Date:__-__-__ 

      When using the summary post option  this date will show on you General
      Ledger transactions  as the  date of the  posting.  Usually  this date
      should be the current date (i.e. the last date for the current month).
      If detail post was selected  the General Ledger transactions will have
      the same date as they do in the Accounts Receivable Journal. 

      After you enter this date, the  posting process will be run.  You will
      be  able  to  watch its  progress  on  the  screen  as it  is  reading
      transactions and posting them to your General Ledger accounts. 



































                                        PAGE 48




                       FINANCE MANAGER II - ACCOUNTS RECEIVABLE




























































                                        PAGE 49




                       FINANCE MANAGER II - ACCOUNTS RECEIVABLE


                       SECTION SEVEN - ENHANCEMENTS & HINTS 

      7a - ENHANCEMENTS BY VERSION 

      Version 1.1 - First release of this module. 

      Version 1.2 - All  changes  included in  version  1.2  of the  General
                    Ledger module. 
                  - Increased maximum customers to 2,000. 
                  - Provide "=" and "+" keys for invoice number input to get
                    same-as-reference-number or  incremental invoice numbers
                    respectively. 
                  - Up to 4  times faster statement printing  with much less
                    disk access. 
                  - Added transaction sort by customer number. 
                  - Added label sort by company name option. 
                  - Added sort options on Customer listing. 
                  - Option  to  produce  labels only  for  non-zero  balance
                    accounts. 
                  - Added option to do summary  or detail posting to General
                    Ledger. 
                  - Added a G/L Distribution report. 
                  - Added type of transaction selection to A/R Journal. 
                  - Fixed delete customer bug. 

      Version 1.3 - All  changes  included in  version  1.2  of the  General
                    Ledger module. 

                  - Pop-up customer  selection window when  selecting report
                    options. 
                  - Pop-up customer/chart of  accounts window while entering
                    transaction search parameters. 
                  - Added due date to invoices. 
                  - Greatly increased the speed of invoice printing. 
                  - Allow  printing of  a range  of invoice  numbers at  one
                    time. 
                  - Longer 2 line statement and invoice messages. 
                  - Last invoice  number used is  saved to allow the  use of
                    "+"  key  to  get  next available  invoice  number  when
                    entering transactions. 
                  - The "+"  key can be  used in the reference  number input
                    field to increment reference numbers automatically. 
                  - Added a Memo transaction  type for extra descriptions on
                    statements and invoices. 


      7b - HELPFUL HINTS AND SUGGESTIONS 

          * Keep  a CURRENT  backup copy  of your  data disk  each time  you
            update your data.  This will  safeguard against loss of data due
            to a power or other problem. 

          * Use the  Shift PrtSc keys to  make a hardcopy of  current screen
            display. 

          * If you are using preprinted  statements or invoices be sure that


                                        PAGE 50




                       FINANCE MANAGER II - ACCOUNTS RECEIVABLE


            your printer is in it's default  10 character per inch mode with
            it's normal  margins.  Deviation  from this  will result  in the
            inability to line up your pre-printed forms. 

          * You can  run this  module WITHOUT the  interface to  the General
            Ledger module simply by not posting to the General Ledger (F3 on
            the  Utilities Menu).   The  system will  however  post to  your
            General Ledger when  you do an End of Period  Posting (F4 on the
            Utilities Menu).  To totally avoid  any interface, simply set up
            this module  with a  separate data file  using a  different name
            than your  General Ledger  data file  name.  You  will, however,
            have  to set  up  a few  dummy G/L  accounts  (the required  G/L
            accounts needed to run this module). 

          * IMPORTANT  INSTRUCTIONS WHEN  USING  THE ACCOUNT  RECONCILIATION
            MODULE:   If  you   are   using  the   General  Ledger   Account
            Reconciliation module and you are  not using the "DETAIL POST TO
            G/L" you should post the  A/R transactions to the General Ledger
            each time  you make a checking  deposit.  Each time you  post to
            the  G/L all  non-posted transactions  are grouped  to make  one
            large transaction for  each account.  Thus, all  checks you have
            received  (type "P"  transactions) will  be grouped  together to
            make one large  debit (deposit) to your  checking account.  This
            procedure will  help you  balance your  checking account  as the
            amount debited (deposited) to your  checking account in each G/L
            transaction will match your bank statement. 

            If you do not follow this procedure, and post only once a month,
            your  G/L checking  account will  show one  large debit  for the
            entire month.   You will  then have difficulty  if some  of your
            deposits are  not shown on  your bank  statement as you  can not
            clear each debit individually. 

            IF YOU ARE NOT USING "DETAIL POST" option each customers payment
            will show as  a separate deposit to your  checking account.  You
            will need a copy  of your deposit slip in order  to clear all of
            the  checks  included  in  one   bank  deposit  when  using  the
            reconciliation module. 




















                                        PAGE 51




                       FINANCE MANAGER II - ACCOUNTS RECEIVABLE


                SECTION EIGHT - ACCOUNTS RECEIVABLE DISK FILE NAMES 

      Listed below  is a  description of files  on your  accounts receivable
      disk. 


        File name      Description 
        ------------   --------------------------------------------------- 
        RUN      BAT - Use to  run FINANCE MANAGER 
        FMAR-DOC ARC - Archived A/R documentation manual (see PRINT-AR). 
        FMAR     000 - A/R main module overlay 0. 
        FMAR     001 - A/R main module overlay 1. 
        FMAR     002 - A/R main module overlay 2. 
        FMAR     003 - A/R main module overlay 3. 
        FMAR     COM - A/R main program module. 
        PRINT-AR BAT - Prints documentation manual on your printer (PRN). 
        README   BAT - Display this information on screen. 
        WORK     ARF - WORK demo A/R configuration file. 
        WORK     ART - WORK demo A/R transaction data file. 
        WORK     CHR - WORK demo Chart of Accounts data file. 
        WORK     CNF - WORK demo System configuration file. 
        WORK     CUS - WORK demo A/R customer data file. 
        WORK     GLT - WORK demo G/L transaction data file. 
        ARCE     COM - Archive extract program to print manual.


































                                        PAGE 52




                       FINANCE MANAGER II - ACCOUNTS RECEIVABLE


                            APPENDIX A - SAMPLE REPORTS 


                                 Table of Contents


      Accounts Receivable Journal .................................... 54 


      Customer Statements ............................................ 55 


      Customer Invoices .............................................. 56 


      Receivable Aging ............................................... 57 


      Schedule of Receivables ........................................ 58 

      Schedule of Receivables - Trended .............................. 59 


      Customer Accounts Listing ...................................... 60 


      Customer Address Labels - 6 lines per label .................... 61 


      Non-posted Transaction Journal ................................. 62 


      General Ledger Distribution Report ............................. 63 

























                                        PAGE 53




                    FINANCE MANAGER II - ACCOUNTS RECEIVABLE


JUL-7-89                     YOUR COMPUTER COMPANY                     PAGE 1
11:11am                     WORK Demo Accounts Test
                          ACCOUNTS RECEIVABLE JOURNAL
                             JAN-89 Through FEB-89


  DATE   CUST         CUSTOMER NAME         INVOICE   REFER # T     AMOUNT
-------- ---- ----------------------------- -------- -------- - -------------
01-01-89 1000 CASH SALES                    870001   csc      I      1,200.00
                Cash Sale - Computer
01-01-89 1000 CASH SALES                    870001   csc      P     -1,200.00
                Cash Sale - Computer
01-02-89 1200 Jones Corporation             870002   csc      I        525.00
                Clone PC
01-07-89 2000 John Smith and Associates     870007   T001     I        899.89
                Purchase PC clone computer
01-07-89 1100 Your Customer Inc.            870008   Y997     I        944.88
                Purchase PC clone computer
01-22-89 1100 Your Customer Inc.            870017   Y1003    I        577.50
                Purchase software
01-22-89 1100 Your Customer Inc.            870017   Y1003    I        400.00
                Training
01-31-89 1100 Your Customer Inc.                              F         14.17
                Finance Charge
02-01-89 1100 Your Customer Inc.            870008   1484     P       -944.88
                payment
02-28-89 1100 Your Customer Inc.                              F         14.88
                Finance Charge
02-28-89 1200 Jones Corporation                               F          5.25
                Finance Charge
02-28-89 2000 John Smith and Associates                       F         13.50
                Finance Charge
                                                                -------------
                                                                     2,450.19


























                                     PAGE 54


                    FINANCE MANAGER II - ACCOUNTS RECEIVABLE


                                   STATEMENT
                                     JAN-89



          Accounts Receivable
          Your Computer Company                        DATE: JUL-7-89
          100 Computer Blvd.
          Computer City, FL  12345-6789
                                                        ACCOUNT: 1100



                                                      _______________
TO:                                                   AMOUNT REMITTED
         Accounts Payable
         Your Customer Inc.
         100 His Street
         His City HI 98765-4321
                                                           PAGE 1

REFERENCE   DATE   T           DESCRIPTION             AMOUNT        BALANCE
--------- -------- -  ----------------------------- ------------  -------------
                      Balance Forward                                      0.00
Y997      01-07-89 I  Purchase PC clone computer          944.88         944.88
Y1003     01-22-89 I  Purchase software                   577.50       1,522.38
Y1003     01-22-89 I  Training                            400.00       1,922.38
          01-31-89 F  Finance Charge                       14.17       1,936.55





















                                                                  -------------
                                   TOTAL AMOUNT DUE:                   1,936.55

Your Business is appreciated.







                                     PAGE 55


                    FINANCE MANAGER II - ACCOUNTS RECEIVABLE


                                    INVOICE
                                     870017



          Accounts Receivable
          Your Computer Company                        DATE: MAR-30-89
          100 Computer Blvd.
          Computer City, FL  12345-6789
                                                        ACCOUNT: 1100



TO:
         Accounts Payable
         Your Customer Inc.
         100 His Street
         His City HI 98765-4321

                                          DUE DATE:APR-30-89     PAGE 1

REFERENCE                  DESCRIPTION                       AMOUNT
--------- ---------------------------------------------  --------------
Y1003     Purchase software                                      577.50
Y1003     Training                                               400.00
          Finance Charge                                          14.17
1508      Payment                                               -991.67
























                                                         --------------
                                      TOTAL AMOUNT DUE:            0.00







                                     PAGE 56


                    FINANCE MANAGER II - ACCOUNTS RECEIVABLE


JUL-7-89                     YOUR COMPUTER COMPANY                     PAGE 1
11:11am                     WORK Demo Accounts Test
                                RECEIVABLE AGING
                                 As of FEB-1-89

                                                  ------ Days Past Due ------
CUST    CUSTOMER NAME                    CURRENT       1 - 30       31 - 60
---- ------------------------------  ------------  ------------  ------------
1000 CASH SALES                              0.00          0.00          0.00
1100 Your Customer Inc.                    992.38         14.17          0.00
1200 Jones Corporation                     530.25          0.00          0.00
1300 ABC Office Supplies                     0.00          0.00          0.00
1400 Crabtree Laboratory                     0.00          0.00          0.00
1500 Tree & Landscape Inc.                   0.00          0.00          0.00
1600 The Happy Balloon Limited               0.00          0.00          0.00
1700 Soaps Inc                               0.00          0.00          0.00
1800 Coastside Comunications                 0.00          0.00          0.00
2000 John Smith and Associates             913.39          0.00          0.00
                                     ------------  ------------  ------------
                                         2,436.02         14.17          0.00








































                                     PAGE 57


                    FINANCE MANAGER II - ACCOUNTS RECEIVABLE


JUL-7-89                     YOUR COMPUTER COMPANY                     PAGE 1
11:11am                     WORK Demo Accounts Test
                            SCHEDULE OF RECEIVABLES
                                     JAN-89

CUST        CUSTOMER NAME               BALANCE     CREDIT LIMIT   AVAIL CREDIT
---- -----------------------------   ------------   ------------   ------------
1000 CASH SALES                              0.00  99,999,999.00  99,999,999.00
1100 Your Customer Inc.                  1,936.55       5,000.00       3,063.45
1200 Jones Corporation                     525.00      20,000.00      19,475.00
1300 ABC Office Supplies                     0.00       1,000.00       1,000.00
1400 Crabtree Laboratory                     0.00       4,500.00       4,500.00
1500 Tree & Landscape Inc.                   0.00       5,000.00       5,000.00
1600 The Happy Balloon Limited               0.00         200.00         200.00
1700 Soaps Inc                               0.00         500.00         500.00
1800 Coastside Comunications                 0.00       5,000.00       5,000.00
2000 John Smith and Associates             899.89       5,000.00       4,100.11
                                    -------------
     Total Receivable                    3,361.44









































                                     PAGE 58


                    FINANCE MANAGER II - ACCOUNTS RECEIVABLE


JUL-7-89                     YOUR COMPUTER COMPANY                     PAGE 1
11:11am                     WORK Demo Accounts Test
                            SCHEDULE OF RECEIVABLES
                             JAN-89 Through MAR-89

CUST        CUSTOMER NAME               JAN-89         FEB-89         MAR-89
---- -----------------------------  -------------  -------------  -------------
1000 CASH SALES                              0.00           0.00           0.00
1100 Your Customer Inc.                  1,936.55       1,006.55          14.88
1200 Jones Corporation                     525.00         530.25           5.25
1300 ABC Office Supplies                     0.00           0.00           0.00
1400 Crabtree Laboratory                     0.00           0.00           0.00
1500 Tree & Landscape Inc.                   0.00           0.00           0.00
1600 The Happy Balloon Limited               0.00           0.00           0.00
1700 Soaps Inc                               0.00           0.00           0.00
1800 Coastside Comunications                 0.00           0.00           0.00
2000 John Smith and Associates             899.89         913.39         913.39
                                    -------------  -------------  -------------
     Total Receivable                    3,361.44       2,450.19         933.52









































                                     PAGE 59


                    FINANCE MANAGER II - ACCOUNTS RECEIVABLE


JUL-7-89                     YOUR COMPUTER COMPANY                     PAGE 1
11:11am                     WORK Demo Accounts Test
                           CUSTOMER ACCOUNTS LISTING

CUST    CUSTOMER NAME & ADDRESS        PHONE     DU  CREDIT LIMIT BEGIN BALANCE
---- ------------------------------ ------------ -- ------------- -------------
1100 Accounts Payable               123-123-1234 10      5,000.00          0.00
     Your Customer Inc.
     100 His Street                                Annual Finance Charge:18.00%
     His City HI 98765-4321

1200 Attn: John Jones               800-555-1212 30     20,000.00          0.00
     Jones Corporation
     555 Main Street                               Annual Finance Charge:12.00%
     Springs City AB 11111

1300 Mrs. Smith                     206-123-4040 14      1,000.00          0.00
     ABC Office Supplies
     4753 Supply Blvd.                             Annual Finance Charge:14.00%
     Seattle WA 98000

1400 Attn: Carman Crabtree          912-555-1212 45      4,500.00          0.00
     Crabtree Laboratory
     2010 Seacoast Drive                           Annual Finance Charge:18.00%
     Atlanta GA 11111

1500 Jerry Long                     213-444-3000 30      5,000.00          0.00
     Tree & Landscape Inc.
     745 Pico Avenue                               Annual Finance Charge:18.00%
     Los Angeles CA 90046

1600 Rick Johnston                  206-444-3333 10        200.00          0.00
     The Happy Balloon Limited
     6034 102nd Avenue                             Annual Finance Charge:18.00%
     Vancouver WA 98666-1111

1700 Accounts Payable               512-512-5125 15        500.00          0.00
     Soaps Inc
     1011 First Street NW                          Annual Finance Charge:18.00%
     Houston TX 11111

1800 Accounts Payable               303-555-1000 45      5,000.00          0.00
     Coastside Comunications
     8100 Tech Center Drive                        Annual Finance Charge:12.00%
     Denver CO 80210

2000 Attn: Accounts Payable Dept.   303-123-4567 30      5,000.00          0.00
     John Smith and Associates
     3000 Main Street                              Annual Finance Charge:18.00%
     Denver CO 80000-0000










                                     PAGE 60


                    FINANCE MANAGER II - ACCOUNTS RECEIVABLE


JUL-7-89                     YOUR COMPUTER COMPANY                     PAGE 1
11:11am                     WORK Demo Accounts Test
                            CUSTOMER ADDRESS LABELS


                                                   1400
                        Attn: Carman Crabtree
                        Crabtree Laboratory
                        2010 Seacoast Drive
                        Atlanta GA 11111

                                                   1700
                        Accounts Payable
                        Soaps Inc
                        1011 First Street NW
                        Houston TX 11111

                                                   1200
                        Attn: John Jones
                        Jones Corporation
                        555 Main Street
                        Springs City AB 11111

                                                   2000
                        Attn: Accounts Payable Dept.
                        John Smith and Associates
                        3000 Main Street
                        Denver CO 80000-0000

                                                   1800
                        Accounts Payable
                        Coastside Comunications
                        8100 Tech Center Drive
                        Denver CO 80210

                                                   1500
                        Jerry Long
                        Tree & Landscape Inc.
                        745 Pico Avenue
                        Los Angeles CA 90046

                                                   1300
                        Mrs. Smith
                        ABC Office Supplies
                        4753 Supply Blvd.
                        Seattle WA 98000

                                                   1600
                        Rick Johnston
                        The Happy Balloon Limited
                        6034 102nd Avenue
                        Vancouver WA 98666-1111








                                     PAGE 61


                    FINANCE MANAGER II - ACCOUNTS RECEIVABLE


JUL-7-89                     YOUR COMPUTER COMPANY                     PAGE 1
11:11am                     WORK Demo Accounts Test
                        NON POSTED TRANSACTIONS JOURNAL


  DATE   CUST         CUSTOMER NAME         INVOICE   REFER # T     AMOUNT
-------- ---- ----------------------------- -------- -------- - -------------
01-01-89 1000 CASH SALES                    870001   csc      I      1,200.00
                Cash Sale - Computer
01-01-89 1000 CASH SALES                    870001   csc      P     -1,200.00
                Cash Sale - Computer
01-02-89 1200 Jones Corporation             870002   csc      I        525.00
                Clone PC
01-07-89 2000 John Smith and Associates     870007   T001     I        899.89
                Purchase PC clone computer
01-07-89 1100 Your Customer Inc.            870008   Y997     I        944.88
                Purchase PC clone computer
01-22-89 1100 Your Customer Inc.            870017   Y1003    I        577.50
                Purchase software
01-22-89 1100 Your Customer Inc.            870017   Y1003    I        400.00
                Training
01-31-89 1100 Your Customer Inc.            870017            F         14.17
                Finance Charge
02-01-89 1100 Your Customer Inc.            870008   1484     P       -944.88
                payment
02-28-89 1100 Your Customer Inc.                              F         14.88
                Finance Charge
02-28-89 1200 Jones Corporation                               F          5.25
                Finance Charge
02-28-89 2000 John Smith and Associates                       F         13.50
                Finance Charge
03-01-89 1100 Your Customer Inc.            870017   1508     P       -991.67
                Payment
03-15-89 1200 Jones Corporation             870002   3227     P       -525.00
                Payment
                                                                -------------
                                                                       933.52























                                     PAGE 62


                    FINANCE MANAGER II - ACCOUNTS RECEIVABLE


JUL-7-89                     YOUR COMPUTER COMPANY                     PAGE 1
11:11pm                     WORK Demo Accounts Test
                          RECEIVABLES G/L DISTRIBUTION
                             JAN-89 Through MAR-89

         ACT#       ACCOUNT NAME              DEBITS       CREDITS
         ---- -------------------------    -----------   -----------
         1000 Petty Cash                      1,200.00
         1010 Checking Account #1             2,461.55
         1200 Accounts Receivable               933.52
         2100 Sales tax payable                                72.49
         4000 Software sales in-state                       1,750.00
         4010 Computer sales in-state                       2,324.78
         4020 Service sales in-state                          400.00
         4040 Finance Charge Income                            47.80
                                           -----------   -----------
                                              4,595.07      4,595.07











































                                     PAGE 63


                    FINANCE MANAGER II - ACCOUNTS RECEIVABLE


                      FINANCE MANAGER II USER COMMENT FORM 
                         _                       _
    Product being used: |_|General Ledger       |_|Account Reconciliation
                         _                       _
                        |_|Accounts Receivable  |_|Accounts Payable
                         _                       _
                        |_|Financial Utilities  |_|Payroll
                     _            _            _
    Use of product: |_|Business  |_|Personal  |_|Other____________________

    What type of computer are you using:__________________________________

    Do you have a unique use for this product?_____  If so please explain.

    ______________________________________________________________________

    Please circle your rating:   Poor  Fair  Average  Very Good  Excellent
                                 ----  ----  -------  ---------  ---------
         Performance.              x     x      x         x          x

         Documentation.            x     x      x         x          x

         Ease of learning.         x     x      x         x          x

         Ease of use.              x     x      x         x          x

         Manual Reliability.       x     x      x         x          x

         Error Handling.           x     x      x         x          x

         Support.                  x     x      x         x          x

         Value.                    x     x      x         x          x

    Did you find any problems in using this product?  Please describe.

    ______________________________________________________________________

    ______________________________________________________________________

    ______________________________________________________________________

    Do  you  have  any  suggestions  for  improving  this  program  and/or
    documentation.  Use the reverse side of this form if necessary:

    ______________________________________________________________________

    ______________________________________________________________________

    ______________________________________________________________________

    Please add any other comments about product on reverse side of form.

    RETURN THE COMPLETED FORM AND           HOOPER INTERNATIONAL
    ANY ADDITIONAL CORRESPONDENCE TO:       P.O. Box 62219
                                            Colorado Springs, CO  80962



                                     PAGE 64



     -----------------------------------------------------------------------
     |       F I N A N C E   M A N A G E R  II     O R D E R   F O R M     |
     |                                                                     |
     | MAIL:Hooper International           24 Hr ORDER LINE:1-800-245-7789 |
     |  TO  P.O. Box 62219                   24 Hr FAX line:(719) 528-8997 |
     |      Colorado Springs, CO 80962                                     |
     |      U.S.A.                             Tech Support:(719) 528-8989 |
     |---------------------------------------------------------------------|
     | Mastercard:___   Visa:___   Amex:___   Check:___ (U.S. FUNDS ONLY)  |
     |                                                                     |
     | Card Number:________________________________  Expiration:__________ |
     |                                                                     |
     | Name:______________________________ Signature:_____________________ |
     |                                                                     |
     | Company Name:_______________________________ PC Brand:_____________ |
     |                                                                     |
     | Address:____________________________________ DISK SIZE:3"___  5"___ |
     |                                                                     |
     | City:____________________________  State:____  Zipcode:____________ |
     |                                                                     |
     | Country:______________________________    Phone:(____)_____________ |
     |                                                                     |
     | Registration number on disk you were evaluating:___________________ |
     |                                                                     |
     | How did you hear about FINANCE MANAGER?___________________________lar
     |---------------------------------------------------------------------|
     | ITEMS ORDERED - Version 1.3                |QTY|UNIT PRICE| AMOUNT  |
     |--------------------------------------------|---|----------|---------|
     | FINANCE MANAGER II - REGISTERED COPIES:    |   |          |         |
     |                                            |   |          |         |
     |           GENERAL LEDGER (Main module)     | _ |  $49.95  | $       |
     |                                            |   |          |         |
     |           Accounts Receivable              | _ |  $36.95  | $       |
     |                                            |   |          |         |
     |           Accounts Payable                 | _ |  $36.95  | $       |
     |                                            |   |          |         |
     |           Payroll                          | _ |  $41.95  | $       |
     |                                            |   |          |         |
     |           Account Reconciliation           | _ |  $14.95  | $       |
     |                                            |   |          |         |
     |           Financial Utilities              | _ |  $25.95  | $       |
     |                                            |   |          |         |
     |                                            |   |          |         |
     | EVALUATION COPY of General Ledger Lite     | _ |  $ 3.00  | $       |
     |-----------------------------------------------------------|---------|
     |                                                  SUBTOTAL | $       |
     |-----------------------------------------------------------|---------|
     | LESS QUANTITY DISCOUNT SCHEDULE PER ORDER                 |         |
     |    3 or 4 modules = 10% discount,  5+ modules 15% discount|$<      >|
     |-----------------------------------------------------------|---------|
     | ADD  Shipping/Handling charge                             | $ 3.00  |
     |-----------------------------------------------------------|---------|
     | ADD  AIR MAIL POSTAGE for orders                  $3.00   |         |
     |      shipped out of North America              per module | $       |
     |-----------------------------------------------------------|---------|
     |                                                     TOTAL | $       |
     |-----------------------------------------------------------|---------|
     |                     Colorado residents add 6.5% sales tax | $       |
     |-----------------------------------------------------------|---------|
     | Prices subject to change.                                 |         |
     | All amounts in US currency.            GRAND TOTAL (US $) | $       |
     -----------------------------------------------------------------------

                                     PAGE 65
```
{% endraw %}

## ORDER.DOC

{% raw %}
```



     -----------------------------------------------------------------------
     |       F I N A N C E   M A N A G E R  II     O R D E R   F O R M     |
     |                                                                     |
     | MAIL:Hooper International           24 Hr ORDER LINE:1-800-245-7789 |
     |  TO  P.O. Box 62219                   24 Hr FAX line:(719) 528-8997 |
     |      Colorado Springs, CO 80962                                     |
     |      U.S.A.                             Tech Support:(719) 528-8989 |
     |---------------------------------------------------------------------|
     | Mastercard:___   Visa:___   Amex:___   Check:___ (U.S. FUNDS ONLY)  |
     |                                                                     |
     | Card Number:________________________________  Expiration:__________ |
     |                                                                     |
     | Name:______________________________ Signature:_____________________ |
     |                                                                     |
     | Company Name:_______________________________ PC Brand:_____________ |
     |                                                                     |
     | Address:____________________________________ DISK SIZE:3"___  5"___ |
     |                                                                     |
     | City:____________________________  State:____  Zipcode:____________ |
     |                                                                     |
     | Country:______________________________    Phone:(____)_____________ |
     |                                                                     |
     | Registration number on disk you were evaluating:___________________ |
     |                                                                     |
     | How did you hear about FINANCE MANAGER? PC-SIG_____________________ |
     |---------------------------------------------------------------------|
     | ITEMS ORDERED - Version 1.3                |QTY|UNIT PRICE| AMOUNT  |
     |--------------------------------------------|---|----------|---------|
     | FINANCE MANAGER II - REGISTERED COPIES:    |   |          |         |
     |                                            |   |          |         |
     |           GENERAL LEDGER (Main module)     | _ |  $49.95  | $       |
     |                                            |   |          |         |
     |           Accounts Receivable              | _ |  $36.95  | $       |
     |                                            |   |          |         |
     |           Accounts Payable                 | _ |  $36.95  | $       |
     |                                            |   |          |         |
     |           Payroll                          | _ |  $41.95  | $       |
     |                                            |   |          |         |
     |           Account Reconciliation           | _ |  $14.95  | $       |
     |                                            |   |          |         |
     |           Financial Utilities              | _ |  $25.95  | $       |
     |                                            |   |          |         |
     |                                            |   |          |         |
     | EVALUATION COPY of General Ledger Lite     | _ |  $ 3.00  | $       |
     |-----------------------------------------------------------|---------|
     |                                                  SUBTOTAL | $       |
     |-----------------------------------------------------------|---------|
     | LESS QUANTITY DISCOUNT SCHEDULE PER ORDER                 |         |
     |    3 or 4 modules = 10% discount,  5+ modules 15% discount|$<      >|
     |-----------------------------------------------------------|---------|
     | ADD  Shipping/Handling charge                             | $ 3.00  |
     |-----------------------------------------------------------|---------|
     | ADD  AIR MAIL POSTAGE for orders                  $3.00   |         |
     |      shipped out of North America              per module | $       |
     |-----------------------------------------------------------|---------|
     |                                                     TOTAL | $       |
     |-----------------------------------------------------------|---------|
     |                     Colorado residents add 6.5% sales tax | $       |
     |-----------------------------------------------------------|---------|
     | Prices subject to change.                                 |         |
     | All amounts in US currency.            GRAND TOTAL (US $) | $       |
     -----------------------------------------------------------------------

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1107

     Volume in drive A has no label
     Directory of A:\

    CONFIG   SYS        22   1-01-89
    FMAR-DOC ARC     53929   1-01-89
    FMAR     000     11776   1-01-89
    FMAR     001     15872   1-01-89
    FMAR     002     44032   1-01-89
    FMAR     003     77056   1-01-89
    FMAR     004     12544   1-01-89
    FMAR     005     37888   1-01-89
    FMAR     COM     30499   1-01-89
    INSTALL  COM     28294   1-01-89
    ORDER    DOC      4844   1-01-89
    PKUNPAK  EXE     15112   8-02-88
    PRINT-AR BAT       472   1-01-89
    README   BAT      1264   1-01-89
    RUN      BAT        19   1-01-89
    WORK     ARF       782   1-01-89
    WORK     ART      1944   1-01-89
    WORK     CHR      3105   1-01-89
    WORK     CNF       182   1-01-89
    WORK     CUS      2101   1-01-89
    WORK     GLT      4558   1-01-89
           21 file(s)     346295 bytes
                            5120 bytes free
