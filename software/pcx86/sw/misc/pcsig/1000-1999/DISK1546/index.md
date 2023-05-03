---
layout: page
title: "PC-SIG Diskette Library (Disk #1546)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1546/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1546"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "ACCOUNTS PAYABLE LITE (ALSO 1545)"

    The ACCOUNTS PAYABLE LITE module provides a simple way to keep track of
    all your payables. This module is an essential element in managing your
    cash flow as it allows you to pay invoices using seven payment selection
    methods. Checks are generated automatically by the computer or you may
    make payments by writing checks manually. Full integration into your
    General Ledger will save you hours of time and effort, and avoids
    duplicate data entry. Proper use of this module requires the GENERAL
    LEDGER LITE PC-SIG Disk #151.
    
    Features include: up to 2000 vendors, 32000 transactions; continuous
    form checks; enter miscellaneous debits or credits, pre- or post-dated
    transactions; easy to use or learn, easy to modify or delete
    transactions and vendors, prior period adjustments. Complete range of
    financial reports; select reports by month, quarter, year and
    year-to-date or trended. Pop-up windows, sound, mouse compatible; 8-
    digit invoice and reference number, departments; allows multiple
    distribution; post the G/L in summary or detail format; and much more.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1546.TXT

{% raw %}
```
Disk No: 1546                                                           
Disk Title: Accounts Payable Lite (also 1545)                           
PC-SIG Version: S1                                                      
                                                                        
Program Title: Accounts Payable Lite                                    
Author Version: 1.3G                                                    
Author Registration: $36.95 includes printed & bound manual, & newsletter.
Special Requirements: 384K RAM, two floppy drives or a hard drive, 
                      and disk #151.
                                                                        
The ACCOUNTS PAYABLE LITE MODULE provides a simple way to keep track of 
all your payables.  This module is an essential element in managing your
cash flow as it allows you to pay invoices using seven payment selection
methods.  Checks are generated automatically by the computer or you may 
make payments by writing checks manually.  Full integration into your   
General ledger will save you hours of time, effort and avoids duplicate 
data entry.  Proper use of this module requires the GENERAL LEDGER LITE 
PC-SIG Disk #151.                                                       
                                                                        
Up to 2000 vendors, 32000 transactions, continues form checks, enter    
misc. debits or credits, pre-or post dated transactions, easy to use or 
learn, easy to modify or delete transactions and vendors, proior period 
adjustments.  Complete range of financial reports, select reports by    
month, quarter, year and year-to-date or trended.  Pop-up windows,      
sound, mouse compatible, 8-digit invoice and reference number,          
Departments, allows multiple distribution, Post the G/L in summary or   
detail format and much more.                                            
                                                                        
File Descriptions:                                                      
                                                                        
The first disk contains:                                                
FMAP     COM  Main Accounts Payable executable.                         
FMAP?    ???  Accounts Payable overlay files.                           
FMAP2    CHN  Accounts Payable module part 2.                           
INSTALL  COM  Installation program.                                     
ORDER    DOC  Blank order form which can be printed.                    
README   BAT  Displays this file on screen.                             
                                                                        
The second disk contains:                                               
FMAP-DOC ARC  Archived documentation manual (See PRINT-AP below).       
ORDER    DOC  Blank order form which can be printed.                    
PRINT-AP BAT  Prints manual to printer (PRN).                           
WORK     APC  Work Demo - AP Configuration data file.                   
WORK     APK  Work Demo - AP Check transaction data file.               
WORK     APT  Work Demo - AP Transaction data file.                     
WORK     APV  Work Demo - AP Vendors data file.                         
WORK     CHR  Work Demo - GL Chart of accounts data file.               
WORK     CNF  Work Demo - System configuration data file.               
WORK     GLT  Work Demo - GL Transaction data file.                     
README   BAT  Displays this file on screen.                             
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1988 PC-SIG, Inc.                                         
```
{% endraw %}

## FMAP.DOC

{% raw %}
```









                              FINANCE MANAGER II 





                             ACCOUNTS PAYABLE LITE

                                 USER'S MANUAL 










                                  Version 1.3f












                             Hooper International 
                                P.O. Box 62219 
                          Colorado Springs, CO 80962 















    Copyright (C) 1986-1989 by Hooper International 
    All rights reserved. 








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













                                       i 








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

                                      ii 








    Finance Manager II is User-Supported  (Shareware) software.  If you are
    using this software, and find it to be of value to you, your payment is
    necessary and appreciated. 

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
























                                      iii 







                     FINANCE MANAGER II - ACCOUNTS PAYABLE


                               TABLE OF CONTENTS 


    COPYRIGHT NOTICE ...........................................  i
    RESTRICTED PERMISSION TO COPY ..............................  i 
    WARRANTY INFORMATION ....................................... ii 
    PRODUCT INFORMATION ........................................ ii 

    SECTION ONE - GETTING STARTED 
        1a - Introduction ......................................  3 
        1b - System requirements ...............................  4 
        1c - System Flowcharts .................................  5 
        1d - Using the demo accounts ...........................  6 
        1e - Running the Accounts Payable module ...............  6 


    SECTION TWO - THE ACCOUNTS PAYABLE MAIN MENU ...............  8 


    SECTION THREE - VENDOR ACCOUNTS ............................  9 
        3a - What are vendor accounts ..........................  9 
        3b - Vendor accounts organization ......................  9 
        3c - Vendor accounts data fields .......................  9 
        3d - Getting familiar with vendor account .............. 10 
        3e - Entering your own vendor Accounts ................. 11 
        3f - Changing existing vendors ......................... 13 
        3g - Deleting vendors .................................. 14 
        3h - Suggested method for setting beginning balances.... 14 


    SECTION FOUR - TRANSACTIONS ................................ 16 
        4a - What are transactions ............................. 16 
        4b - Transaction data fields ........................... 16 
        4c - Getting familiar with transactions ................ 18 
        4d - Entering transactions ............................. 19 
        4e - Entering multiple distributions ................... 22 
        4f - Changing existing transactions .................... 23 
        4g - Deleting transactions ............................. 25 
        4h - Points to remember ................................ 26 


    SECTION FIVE - REPORTS ..................................... 28 
        5a - General instructions for generating reports ....... 28 
        5b - Printing the Accounts Payable Journal ............. 29 
        5c - Printing the Payable Aging Report ................. 30 
        5d - Printing the Schedule of Payables Report........... 31 
        5e - Printing the Open Invoices Report ................. 31 
        5f - Printing Vendor Account History ................... 31 
        5g - Printing the Vendor Accounts List ................. 32 
        5h - Printing the Vendor Address Labels ................ 33 
        5i - Printing the Non-posted Transaction Journal ....... 34 
        5j - Printing the Payments Journal ..................... 35 
        5k - Printing the General Ledger Distribution Report ... 35 


    SECTION SIX - MAKING VENDOR PAYMENTS ....................... 37 


                                    PAGE 1




                     FINANCE MANAGER II - ACCOUNTS PAYABLE


        6a - Selecting invoices for payment .................... 37 
        6b - Selecting from all invoices ....................... 40 
        6c - Selecting by Vendor number ........................ 40 
        6d - Selecting by Invoice number ....................... 40 
        6e - Selecting by due date ............................. 41 
        6f - Selecting by discount date ........................ 41 
        6g - Paying specific amount to vendor .................. 41 
        6h - Paying all invoices ............................... 42 
        6i - Clearing selected payments ........................ 42 
        6j - Printing selected payments journal ................ 42 
        6k - Printing checks ................................... 43 
        6l - Voiding printed checks ............................ 44 
        6m - Entering manual checks ............................ 45 


    SECTION SEVEN - OTHER FEATURES AND FUNCTIONS ............... 46 
        7a - Configuration settings ............................ 46 
        7b - Sorting Transactions .............................. 48 
        7c - Posting to the General Ledger ..................... 50 



    SECTION EIGHT - ENHANCEMENTS & HINTS ....................... 52 
        8a - Enhancements by Version ........................... 52 
        8b - Helpful hints and suggestions ..................... 52 


    SECTION NINE - ACCOUNTS PAYABLE DISK FILE NAMES ............ 54 


    APPENDIX A - SAMPLE REPORTS ................................ 55 


    USER COMMENT FORM .......................................... 68 


    ORDER FORM ................................................. 69 





















                                    PAGE 2




                     FINANCE MANAGER II - ACCOUNTS PAYABLE


                         SECTION ONE - GETTING STARTED 

    1a - INTRODUCTION 

    The  FINANCE MANAGER  "Accounts Payable"  module provides  you with  a
    wonderfully simple way  to keep track of all of  your vendor Payables.
    Likewise, you'll be delighted to note  that the module is an essential
    element  in easily  managing your  cash flow.   Vendor (companies  you
    purchase from)  information and balances  are always available  to you
    through on-line features.  This simple-to-use module will also greatly
    enhance  your ability  to  track  and to  pay  your  vendors on  time.
    Multiple distribution  and full  integration into your  General Ledger
    will save you  hours of time, effort and money.   Apply this module to
    your  needs and  you will  be thankful  to us  for allowing  you, with
    little cost, to  become familiar with this  incredible and easy-to-use
    software.  Be assured, we value you  as our customer and are dedicated
    to customer satisfaction. 

    Some of  the helpful,  time-saving, and  outstanding features  of this
    module are as follows: 

          * Vendor accounts features 
              - Zipcode sorted labels 
              - Set discount days and percent 
              - Set net due days 
              - Up to 2,000 vendors (w/640K memory) 
              - Vendor accounts listing in company order 

          * Transaction entry features 
              - Multiple G/L distributions 
              - Prior period adjustments allowed 
              - Miscellaneous debits & credits 
              - Up to 32,000 transactions per year 
              - Easy to correct or delete transactions 
              - Multiple field transaction search capabilities 
              - All transactions can be posted to your GL 
              - Sort by date, Vendor or input order 

          * Check writing features 
            - Uses ANY continuous form top-stub checks 
            - Advanced payment selection options 
            - Selected payments journal 
            - Ability to void printed checks 
            - Manual checks can be entered 
            - Use window envelopes for checks 

          * Reports features 
              - Provides full range of reports including: 
                  Payable journal 
                  Open invoices report
                  Vendor account history 
                  Aging report 
                  Schedule of Payables 
                  Vendor accounts list 
                  Vendor address labels 
                  Non-posted transactions journal 


                                    PAGE 3




                     FINANCE MANAGER II - ACCOUNTS PAYABLE


                  Payments journal 
                  General Ledger distribution report 
              - Print reports on your printer, or 
              - Save reports on disk, or 
              - Display reports on your screen 
              - Reports may be printed multiple times 

          * Integration 
            - Transactions can  be posted  to the  General Ledger  with no
              additional inputs required 

          * Fiscal year features 
              - Use with any fiscal year 
              - Multiple years on-line at one time 
              - Books need not  be closed in order to begin  next month or
                year 

          * System features 
              - Posts to G/L in summary or detail format 
              - Posts each check written to proper G/L account 
              - Defaults for all input fields 
              - No monthly closing hassle to go through 
              - Allows you to post or pre-date all transactions 


    This manual  assumes you  have, from  an accounting  point of  view, a
    working knowledge of how an  accounts-payable system operates.  If you
    are  new  to accounts-payable  bookkeeping,  however,  we suggest  you
    either  consult your  accountant  or get  a  book on  accounts-payable
    bookkeeping.  We  do, nevertheless,  try to  explain each  feature and
    function  in layman  terms,  so it  will be  easy  to understand  with
    minimal confusion.   This system is  uniquely set  up for the  ease of
    operation by the novice.   Consequently, sample basic transactions are
    included on your disk (filename "WORK") for your practice sessions. 


    1b - SYSTEM REQUIREMENTS 

              - FINANCE MANAGER II General Ledger version 1.3 
              - IBM PC, XT, AT, PS/2 or compatible 
              - 384K memory (more memory allows more vendors) 
              - Two 360K disk drives (or 1 DSHD or Hard disk) 
              - Dos 2.0 or higher 















                                    PAGE 4




                     FINANCE MANAGER II - ACCOUNTS PAYABLE



    1c - SYSTEM FLOWCHARTS


                         ---------------------------------
                         |  ACCOUNTS PAYABLE MAIN MENU   | 
                         ---------------------------------
                                         | 
               ---------------------------------------------------- 
               |          |           |        |        |         | 
             INPUT  CHANGE/DELETE  REPORTS   UPDATE  PAYMENTS  UTILITY 
             TRANS  TRANSACTIONS    MENU     VENDOR    MENU      MENU 
                                            ACCOUNTS 




                         ---------------------------------
                         | ACCOUNTS PAYABLE REPORTS MENU | 
                         ---------------------------------
                                         | 
       ---------------------------------------------------------------
       |      |      |       |     |      |      |     |      |      |
      A/P     |   SCHEDULE   |  VENDOR    |    VENDOR  |  PAYMENTS   |
    JOURNAL   |      OF      |  ACCOUNT   |   ADDRESS  |   JOURNAL   |
              |   PAYABLES   |  HISTORY   |    LABELS  |             |
             A/P           OPEN        VENDOR       NON-POST        G/L
            AGING        INVOICES      ACCOUNTS   TRANSACTION  DISTRIBUTION
           REPORT                       LIST        JOURNAL



                                 -----------------
                                 | PAYMENTS MENU | 
                                 -----------------
                                         | 
                       ------------------------------------- 
                       |          |        |        |      | 
                    PAYMENT    SELECTED  PRINT    VOID   MANUAL
                    SELECTION  PAYMENTS  CHECKS  PRINTED CHECKS
                               JOURNAL           CHECKS




                                ------------------
                                | UTILITIES MENU | 
                                ------------------
                                         | 
                   ------------------------------------------- 
                   |            |              |             | 
                  SORT        POST           END OF         A/P 
              TRANSACTIONS TRANSACTIONS      PERIOD    CONFIGURATION
                             TO G/L         POSTING      SETTINGS




                                    PAGE 5




                     FINANCE MANAGER II - ACCOUNTS PAYABLE


    1d - USING THE DEMO ACCOUNTS 

    Included, at  no extra cost with  the "Accounts Payable" module,  is a
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
    demo vendors.  Setting up a new  "live" set of books, however, is very
    simple and is thoroughly described in the following section. 


    1e - RUNNING THE ACCOUNTS PAYABLE MODULE 

    To run  the "Accounts Payable"  module, you  must first install  it by
    following the  instructions under "Installing FINANCE  MANAGER" in the
    "Getting Started"  manual.  After it  is installed, follow  the simple
    steps in the order given below: 


        1. Start up FINANCE  MANAGER per the instructions  in the "Getting
           Started"  Manual.   Upon  starting FINANCE  MANAGER,  you  must
           decide  to  use either  live  data  or the  practice-only  demo
           accounts  data on  the  Accounts Payable  Documentation &  Demo
           disk.  If  you prefer  to practice  and experiment,  you should
           remember to use the Demo disk.  If  you wish to set up your own
           live  Accounts Payable,  you  should put  your FINANCE  MANAGER
           General Ledger data disk in your drive B: (not necessary if you
           have a hard disk). 

        2. At the disk drive prompt, enter the disk drive letter where you
           put your Demo or G/L data disk,  usually drive B: (or C: if you
           have a hard disk). 

        3. At the Enter  Filename prompt, enter the name of  the data file
           you want to use ("WORK" if you  have the demo disk in drive B:,
           or if you are using your live G/L data files enter the filename
           of its files). 

           Remember, you can  only use this module if  you have previously
           set up your General Ledger  data files using the General Ledger
           module.  When using the demo  data files, this has already been
           done for you.

        4. You will now be at the FINANCE MANAGER Master Menu. 

        5. OPTIONAL: If you have not already done so (when you set up your
                     G/L data files),  you may go to  the System Utilities
                     Menu  and  change  any system  defaults.   This  may,


                                    PAGE 6




                     FINANCE MANAGER II - ACCOUNTS PAYABLE


                     however, be done at any  time and is not necessary to
                     run FINANCE MANAGER.  We do, however, suggest you set
                     up the  "Compressed" and "Normal" print  codes before
                     printing the A/P  reports, since you will  find it is
                     required for a few of them. 

        6. Next you  must add an account  to your General Ledger  Chart of
           Accounts.  Set up  an Accounts Payable (type  L) account.  This
           G/L  account is  required  to  use the  A/P  module.  See  your
           General Ledger documentation manual on setting up your Chart of
           Accounts.   If you  have  this account  already  setup in  your
           General Ledger Chart of Accounts, this step is not necessary. 

        7. From the FINANCE MANAGER master menu: If you have floppy disks,
           put your  Accounts Payable program  disk into drive A:  (if you
           have not  already done  so).  Then select  menu "F3",  and this
           will take you into Accounts Payable.  If this is the first time
           you  are using  Accounts Payable  for  this set  of books,  the
           system will ask you: Create File (Y/N), which you should answer
           with  a "Y".   This  procedure will  create  all the  necessary
           Accounts Payable  Data files.  Don't  worry it will  not damage
           your General Ledger data files. 

        8. You should now  select "F6", and then "F4", in  order to set up
           your A/P configuration settings.   This step is important since
           it will set up the interface  with your General Ledger Chart of
           Accounts.  See section 7a for details. 

        9. Return to  the A/P  main menu  and select "F4"  to set  up your
           vendors.  See section three on vendor Accounts. 

       10. After setting up your vendors,  you may print a vendor Accounts
           listing.  See section 5 on reports. 

       11. You  are  now  ready  to input  transactions  (invoices).   See
           section 4 on Transactions. 

       12. After  you have  entered some  transactions, you  may print  an
           Accounts Payable Journal  report to see what  you have entered.
           See section five on reports. 

       13. Print  any other  reports  as required.   The  two most  useful
           reports  are  "OPEN  INVOICES  REPORT"  and  the  "SCHEDULE  OF
           PAYABLES". 

    These basic steps are merely intended  to show you the order of events
    in setting up new Payable books. 











                                    PAGE 7




                     FINANCE MANAGER II - ACCOUNTS PAYABLE


                 SECTION TWO - THE ACCOUNTS PAYABLE MAIN MENU 


    The ACCOUNTS  PAYABLE Main Menu is  the starting point for  all of the
    various  ACCOUNTS  PAYABLE functions.   It  is  a  sort of  "Table  of
    Contents" for the ACCOUNTS PAYABLE module.  It can guide you to all of
    the  other useful  sub-menus and  practical features  of the  time and
    money-saving ACCOUNTS PAYABLE module. 

    The ACCOUNTS PAYABLE Main Menu appears as follows: 

                    |---- ACCOUNTS PAYABLE MAIN MENU ----| 
                    |                                    | 
                    |   ESC  Return to Master Menu       | 
                    |   F1   INPUT Transactions          | 
                    |   F2   CHANGE/Delete Transactions  | 
                    |   F3   REPORTS Menu                | 
                    |   F4   Update VENDOR ACCOUNTS      | 
                    |   F5   PAYMENTS Menu               | 
                    |   F6   A/P Utility Menu            | 
                    |                                    | 
                    |                                    | 
                    |                                    | 
                    |                                    | 
                    |   ENTER YOUR SELECTION:            | 
                    |                                    | 
                    |   A/P Configuration is not setup   | 
                    -------------------------------------- 

    Note that  many of the  selections are used to  go on to  other menus.
    All of  the menu selections  are discussed  in later sections  in this
    documentation.   If  you   get  a  message,  as   above,  saying  "A/P
    Configuration is not  set up" you should set up  your configuration by
    selecting "F6", and then "F4", to get to the configuration setup.  For
    clarification,  this  procedure  is   discussed  in  Section  Seven  -
    Configuration settings. 

    As  mentioned   above,  it   is  essential  that   you  set   up  your
    configuration.   Jump to  Section 7a  to complete  that easy-to-follow
    procedure before continuing. 

    The next step is to set up your vendor accounts.  This procedure is as
    follows: 















                                    PAGE 8




                     FINANCE MANAGER II - ACCOUNTS PAYABLE


                        SECTION THREE - VENDOR ACCOUNTS 

    Your Vendor Accounts are the very foundation of your Accounts Payable.
    To  set up,  or  to  change your  vendors,  select  "F4 Update  Vendor
    Accounts" from the A/P main menu. 


    3a - WHAT ARE VENDOR ACCOUNTS 

    Your  vendor  accounts  are  used  to   keep  track  of  all  of  your
    accounts-payable balances  by vendor  (who you owe  money to).   It is
    important to remember that any company or person you owe money to is a
    vendor and should be set up in this system.  If you purchase something
    with cash and  there is not a balance  due, you do not have  to set up
    that vendor.

    Whenever you receive a bill (invoice or statement) from a company, you
    must set up  that company as a  vendor (if that vendor  is not already
    set up).   Once set up, the  vendor will always be  available for more
    invoices in the future.  Each vendor  must be given an account number,
    to identify  him, which will  then be  used whenever you  are entering
    transactions for that vendor. 


    3b - VENDOR ACCOUNTS ORGANIZATION 

    Your vendor account  numbers, and their order within  the program, are
    totally up to you. 

    An important consideration  for your account numbers is  to group your
    vendors  into account-number  ranges.  For  example, put  all of  your
    out-of-state vendors into accounts 9000-9999.  This may be useful when
    printing reports which ask for an  account range to print (i.e. vendor
    labels).   Different  types  of  businesses may  also  be  grouped  in
    specific  ranges.   Remember  to  always leave  enough  room  for  new
    accounts to be added within your selected range. 


    3c - VENDOR ACCOUNTS DATA FIELDS 

    Each account in  your vendor database represents  one specific vendor.
    As mentioned  above, each vendor  is assigned a unique  account number
    between 1  and 9999.   Along with  this account  number is  kept other
    elements of information  about each vendor.  When you set  up a vendor
    account, the following information about each vendor will be needed: 

    VENDOR NUMBER    A number between  1 and 9999  to be used  to identify
                     each vendor.  This  number is decided by  you and can
                     be any number. 

    ATTENTION        This is used as the first address line for statements
                     and labels.   It is  usually the  accounts receivable
                     contact person for this vendor. 

    COMPANY          Name of the  company.  If a vendor is  not a company,
                     simply enter that vendors name here. 


                                    PAGE 9




                     FINANCE MANAGER II - ACCOUNTS PAYABLE



    ADDRESS          Street  address  for  vendor.  Used  for  checks  and
                     labels. 

    CITY             Vendors city. 

    STATE            Vendors two digit State/Province code. 

    ZIPCODE          Vendors zip or  postal code.  Used for  sort order on
                     mailing labels.  May be used for any other purpose as
                     well. 

    PHONE            Up to 12 character telephone number.  May be used for
                     other information if needed. 

    DISCOUNT PERCENT Percentage  discount for  early  payment of  invoice.
                     Enter percent between 0% and 99%. 

    DISCOUNT DAYS    Number of  days after invoice date  that discount may
                     be applied. 

    NET DUE DAYS     Default number  of days  until purchases  or invoices
                     for  this  vendor  are  due.  You  will  be  able  to
                     override it, if necessary, when entering invoices. 


    3d - GETTING FAMILIAR WITH VENDOR ACCOUNTS 

    Before  beginning to  enter your  own vendors,  follow the  procedures
    below using only the demo accounts. 

    1. From the  Accounts Payable Main  Menu select  F4 on the  menu.  You
       will then be prompted for the following information: 

         Vendor Number (1-9999):____ 
         Attention:______________________________ 
         Company  :______________________________  Discount Pct :_____% 
         Address  :______________________________  Discount Days:__ 
         City     :__________________    State:__  Net Due Days :__ 
         Zipcode  :__________  Phone:____________ 

    2. The cursor will be positioned at the "Vendor Number" prompt. 

       On the  lower half  of your screen,  you can see  a portion  of the
       existing vendors.   Seeing these accounts  is helpful when  you are
       adding new vendors. 

       The highlighted account is a  pointer, showing the selected vendor.
       To  move the  highlighted account  up or  down, press  the "up"  or
       "down"  arrow  keys  on  the  right keypad,  while  the  cursor  is
       positioned at this prompt.  If you  move the default pointer down a
       few lines, notice how the list scrolls. 

       You may select an existing account number by moving the highlighted
       pointer up  or down to  the desired  account and then  pressing the
       enter key.   To set up  a new account, you  simply type in  the new


                                    PAGE 10




                     FINANCE MANAGER II - ACCOUNTS PAYABLE


       account (Vendor) number. 

    3. If you  like, enter  some data  using the  demo files  for hands-on
       practice.  Remember to keep this demo  file well marked, and do not
       confuse its use with your actual file. 

    4. To return to the previous menu, press ESC. 

    Before  entering  your  own  vendors, practice  adding,  changing  and
    deleting vendor  accounts by using  the demo files to  practice.  This
    will  familiarize you  with how  to  enter, change,  or delete  vendor
    accounts.   Changing  and deleting  vendor  accounts  is described  in
    easy-to-follow lay terms in the following how-to sections. 


    3e - ENTERING YOUR OWN VENDOR ACCOUNTS 

    When you actually  enter your own vendor accounts, it  would be a good
    idea to collate  your vendors into some kind of  logical order in your
    mind.  This will be  helpful to you later, each time  you need to look
    up vendors by account number. 

    In order to enter vendor accounts, first switch over to your live data
    files.  To do  this, simply return to the FINANCE  MANAGER Master Menu
    (Press the ESC key  until you are there).  When you  are at the Master
    Menu, enter one  more ESC.  The program will then  prompt "DO YOU WANT
    TO RESTART (Y/N):_" enter "Y". 

    At this point (if you have your  data on floppy disks) switch the data
    disk  to your  live General  Ledger data  diskette.  Select  your real
    General Ledger data  file name.  After you enter  the Accounts Payable
    module ("F3") again,  the system should tell you that  it did not find
    your A/P files.  Enter "Y" at the "Create new Files" prompt.  From the
    A/P main menu, select "F4" and you  will be ready to enter your vendor
    accounts. 

    1. At the  input screen, the cursor  will be positioned at  the vendor
       account  number field.   Unless you  are entering  your very  first
       vendor account, there should be default data in this field. 

    2. Instead of  using the  default data  (if any),  enter a  new vendor
       number of  your choice.   The step  by step  input procedure  for a
       example vendor account is as follows: 

    3. First, enter the vendor account number.  For example: 

                          Vendor Number (1-9999):100_ 

    4. Input the attention name: 

                   Attention:Attn: Accounts Receivable Dept 


    5. Input the company name: 

                    Company:John Smith and Associates_____ 


                                    PAGE 11




                     FINANCE MANAGER II - ACCOUNTS PAYABLE




    6. Input the company mailing address: 

                    Address:3000 Main Street______________ 


    7. Input the city: 

                            City:Denver____________ 


    8. Input the state: 

                                   State:CO 


    9. Input the zip or postal code: 

                              Zipcode:80900_____ 


    10. Input the vendors phone number: 

                              Phone:303-123-4567 


    11. Input the vendors discount percent (if any): 

                              Discount Pct:2____% 

        When entering the discount percent please note that 2% discount is
        input as "2" not ".02". 


    12. Input the  number of  days the  discount percent  is good  for (if
        any): 

                               Discount Days:10 


    13. Input the net due days (the number of days until invoices for this
        vendor will be due): 

                                Net Due Days:30 


    14. If you make  a mistake in a  field, and would like  to correct it,
        you  can easily  back  up  to a  previous  field  by pressing  the
        backspace key. 


    15. Once all of the data has been entered correctly, answer "Y" at the
        "ARE INPUTS CORRECT  Y/N" prompt.  If you answer with  an "N", the
        cursor will return to the Account Number prompt and previous input
        will be ignored. 


                                    PAGE 12




                     FINANCE MANAGER II - ACCOUNTS PAYABLE



    16. If you answered with a "Y", the new account has been added and you
        will  automatically return  to the  vendor account  number prompt.
        You are then ready for more input. 

        NOTE: Please note that  the account number you have  just added is
              inserted into  the list at  the bottom half of  your screen.
              Use  the cursor  keys  (when at  the  account number  field)
              described  above,  in order  to  scroll  through the  active
              vendor  accounts to  search for  the account  you have  just
              added.  If  you have added  your account correctly,  it will
              automatically be in numerical order within this list. 

    17. The cursor will once again be at the account number field.  Repeat
        steps 2 - 16 until you have finished entering all of your vendors. 

    18. In order to return to the menu when you have finished entering, or
        at any  other time that you  wish to return to  menu, simply press
        the ESC key.  Your inputs will then be saved onto the disk and you
        will be back at the previous menu. 

    19. Any time you need to print a current vendor list, you may do so by
        going to  the reports menu  and printing the Vendor  Accounts List
        (see section five - reports). 


    3f - CHANGING EXISTING VENDORS 

    The  steps below  outline the  procedure  for making  changes to  your
    existing vendor accounts. 

    1. Select "F4" at the Accounts Payable main menu. 

    2. With the  cursor at the vendor  number prompt, type in  the account
       number you  wish to change.   Instead of  typing a number,  you may
       accept the default  account by simply pressing ENTER.   In order to
       choose a different  account, move the highlighted  pointer by using
       the up and down keypad arrows. 

    3. Because the account  number you have entered is  an existing vendor
       account, the system prompts: 

                  ACTIVE ACCOUNT Modify/Delete/Quit(M/D/Q):_ 

       Answer this prompt with "M".  You are now in the change mode. 

    4. Make  any  desired  changes.   Press   ENTER  to  leave  any  field
       unchanged. 

    5. If you want to  go back to a previous field  while you are changing
       data, you may do so by pressing the Backspace key. 

    6. After you  have changed the  data, press  return until you  get the
       "ARE  INPUTS CORRECT  (Y/N):"  prompt.  Press  "Y"  to accept  your
       changes.  If  you enter a "N"  instead, the system will  ignore all
       changes to that  account and the cursor will return  to the account


                                    PAGE 13




                     FINANCE MANAGER II - ACCOUNTS PAYABLE


       number field. 


    3g - DELETING VENDORS 

    When  deleting vendors,  there  cannot be  any  transactions for  that
    vendor  number.  If  there  are  transactions for  the  account to  be
    deleted, FINANCE  MANAGER will  not allow the  account to  be deleted.
    Remember, you will not  be able to delete that vendor  unless he has a
    zero balance when you run your end-of-period posting at the end of the
    year.  You will then be able to delete the account. 

    Be sure to practice deleting accounts by simulation on your dummy demo
    accounts.  Do  remember, only after  a bit  of practice should  you be
    deleting a "real" vendor from your real data files. 

    To delete a vendor account follow the steps below: 

    1. Select "F4" at the Accounts Payable main menu. 

    2. Then enter  the number of  the account to  be deleted while  at the
       Account Number prompt.  The system will then prompt: 

                  ACTIVE ACCOUNT Modify/Delete/Quit(M/D/Q):_ 

    3. Select "D".  The account will  be deleted.  However, if the account
       has transactions  entered, the  system will automatically  tell you
       so.  Fortunately,  the account will  not be deleted if  the account
       shows activity. 


    3h - SUGGESTED METHOD FOR SETTING BEGINNING BALANCES 

    When  setting up  your Accounts  Payable, as  well as  vendor starting
    balances, you must  be sure that you are in  balance with your general
    ledger.   This  is a  vitally  important  procedure to  remember  when
    setting  up your  books.  The  following  steps will  insure that  all
    accounts are in balance: 


    1. Set  up all  your vendor  accounts which  have a  non-zero starting
       balance (Section 3). 

    2. Be sure  that your  GENERAL LEDGER Accounts  Payable account  has a
       zero  beginning balance  and current  balance  (i.e. set  up a  new
       account for this modules use only). 

    3. Enter all  vendor starting  balances due  by entering  all non-paid
       invoices  for each  vender (Section  4).  Be  sure to  enter proper
       invoice, discount, and due dates. 

    4. After all have been entered, print a Schedule of Payables or Vendor
       balance report and verify all current vendor balances. 

    5. After you have verified all account balances you are now up to date
       and fully  operational.  If you  want your General  Ledger Accounts


                                    PAGE 14




                     FINANCE MANAGER II - ACCOUNTS PAYABLE


       Payable  account to  reflect the  current balances  of all  Payable
       accounts,  you should  go  to the  A/P Utility  menu  and post  the
       transactions to  the General Ledger.   See section 7d  for detailed
       information. 






















































                                    PAGE 15




                     FINANCE MANAGER II - ACCOUNTS PAYABLE


                          SECTION FOUR - TRANSACTIONS 

    4a - WHAT ARE TRANSACTIONS 

    A transaction  is any  invoice or  statement received  from a  vendor.
    Each time you  receive a bill from  a vendor, it must be  entered as a
    transaction  into the  accounts payable  system.  Likewise,  any other
    adjustments (interest, returns) to the account balance must be entered
    as  a transaction.   The  only  exception is  when  payments are  made
    (checks written).   Checks (payments) are  discussed in section  six -
    Making Vendor Payments. 


    4b - TRANSACTION DATA FIELDS 

    The  transactions input  fields are  described below.   Each of  these
    fields has a  default of the last data entered  into that field.  When
    entering  your   data,  this  default  saves   keystrokes  when  doing
    repetitive data inputting. 

    VENDOR NUMBER  This  is the  account  number for  the  vendor you  are
                   entering a transaction for.   The account number of the
                   company through which the purchase was made.  Required. 


    ITEM DATE      This is the  date when the transaction  occurred, or it
                   is the date on the invoice being entered.  Required. 


    DESCRIPTION    A short description of the transaction.  Optional. 


    REFERENCE NUM  Any 8  character reference  to this  transaction.  This
                   field will  show up on  the check  stub as well  as the
                   Vendor Balance Report.  To clear old data, simply press
                   the space key.  Optional. 


    INVOICE NUM    Any  8 character  invoice  number used  to reference  a
                   specific invoice.  It will be printed on the check stub
                   detail.  In order  to clear old data,  simple press the
                   space key.  Optional. 


    TYPE CODE      The type of  transaction this is, I,D,C  for Invoice (a
                   purchase), Debit (debit to  account or decrease account
                   balance)  and Credit  (credit  to  account or  increase
                   account balance) respectively.   Generally, you will be
                   using  type "I"  when  you receive  an  invoice from  a
                   vendor.   The type  "D" and  "C" are  for miscellaneous
                   balance  changes   (returns,  finance   charges,  etc.)
                   Required. 


    DUE DATE       Date when payment is due for a purchase (type I).  This
                   field  is only  used  for type  "I" transactions.   Its


                                    PAGE 16




                     FINANCE MANAGER II - ACCOUNTS PAYABLE


                   default is the Tran Date above, plus the number of "Net
                   Due Days" set  up for the vendor  selected.  Of course,
                   the default  may be overwritten.  This  is required for
                   type "I" transactions only. 

    DISCOUNT %     Percentage  amount  of  the  allowed  discount  if  the
                   payment  is made  by  the discount  date.  The  default
                   percentage is  the percent entered for  this particular
                   vendor.  The  default may be overwritten  by entering a
                   new number.  Enter a space or a zero in order to clear.
                   Optional. 


    DISCOUNT DATE  This is the  date the invoice must be paid  in order to
                   take  the above  discount  percent off  the bill.   The
                   default  is the  Tran Date  above, plus  the number  of
                   "Discount Days" set  up for  the vendor  selected.  The
                   default  may be  overwritten  by entering  a new  date.
                   This  field is  required only  if there  is a  discount
                   percentage entered above. 


    DEPARTMENT     If you are using  departments, enter the department for
                   which this transaction is for.  Optional. 


    DEBIT ACCOUNT  The  General  Ledger  debit  account  number.   If  you
                   entered a "D" in the type code field above, the General
                   Ledger Accounts  Payable account will  automatically be
                   placed here  since this type of  transaction requires a
                   debit  to  this  account.   Otherwise,  enter  the  G/L
                   account to  debit.  For type "I"  transactions, this is
                   the account  for which the  purchase was made.   If you
                   purchased an  asset, debit  the asset account.   If you
                   purchased an expense item (e.g. office supplies, rent),
                   debit the expense account.  Required. 


    DEBIT AMOUNT   Enter the amount to be debited.  For a vendor purchase,
                   this is  normally the  amount of  the purchase  for the
                   debit account above.  Required. 


    CREDIT ACCOUNT The  General  Ledger  credit account  number.   If  you
                   entered a "I" or "C" in  the type code field above, the
                   General   Ledger   Accounts    Payable   account   will
                   automatically  be  placed  here since  these  types  of
                   transactions   require  a   credit  to   this  account.
                   Otherwise, enter the G/L account to credit.  Required. 


    CREDIT AMOUNT  This amount is  normally the same as  the debit amount.
                   The ability  to change  this amount  is provided  as an
                   advanced feature  for those  who wish to  make multiple
                   distributions to several G/L accounts (see section 4e).
                   The  default will  be the  debit amount  entered above.


                                    PAGE 17




                     FINANCE MANAGER II - ACCOUNTS PAYABLE


                   Required. 


    4c - GETTING FAMILIAR WITH TRANSACTIONS 

    Before beginning to enter your own transactions, follow the procedures
    listed below  by doing  some practice simulation  using only  the demo
    accounts.  This  will aid  you in learning  how to  enter transactions
    without using live data. 

    1. From the Accounts  Payable Main Menu select "F1" on  the menu.  You
       will then be prompted for the following information: 

       Vendor Number:____ 
       Item Date    :__-__-__  Description:______________________________ 
       Reference Num:________  Invoice Num:________    Type Code(I,D,C):_ 
       Due Date     :__-__-__  Discount % :_____%    Disc Date  :__-__-__ 
       Dept  :____ 
       DEBIT :Account:____ _________________________   Amount:___________ 
       CREDIT:Account:____ _________________________   Amount:___________ 


    2. The cursor will be positioned at the "Vendor Number" prompt. 

       On the  lower half of your  screen, you will see  a pop-up accounts
       window which shows a portion of the existing vendors.  Seeing these
       accounts is helpful when you are selecting vendors. 

       The highlighted account is a  pointer, showing the selected vendor.
       In order to  move the highlighted account up or  down, press the up
       or  down arrow  keys  on  the right  keypad,  while  the cursor  is
       positioned at this prompt.  If you  move the default pointer down a
       few lines, notice how the list scrolls. 

       You may select an existing account number by moving the highlighted
       pointer up  or down to  the desired  account and then  pressing the
       enter key. 

       This select-an-account mode will also work for account numbers when
       at the debit account, as well as at the credit account fields. 

       This advanced feature allows you to scroll through your vendors and
       accounts  without ever  having to  memorize,  or even  type in,  an
       account number. 


    3. If you like, enter some data using the demo files for practice. 


    4. To return to the previous menu, press ESC. 


    Before entering  your own transactions, practice  adding, changing and
    deleting transactions by using the  demo files.  This will familiarize
    you with how  to enter, change, or delete  transactions.  Changing and
    deleting transactions is described in the following sections. 


                                    PAGE 18




                     FINANCE MANAGER II - ACCOUNTS PAYABLE



    EVERY transaction has  either a debit or a credit  to the G/L accounts
    Payable account.   For type "D" transactions  it will be a  debit, for
    type "I" and  "C" transactions it will be a  credit.  Because of this,
    FINANCE MANAGER  will always  select that account  number for  you and
    then will skip on over to the amount field.  This amount is the change
    you  are making  to  the vendors  account (the  amount  you owe).   In
    effect, you are  changing the vendor balance while, at  the same time,
    you are  changing the general  ledger accounts Payable  account.  This
    keeps your general ledger Payables  automatically up to date.  Posting
    to the  G/L is,  of course, required  to see this  impact in  your G/L
    reports. 


    4d - ENTERING TRANSACTIONS 

    As you enter each transaction,  FINANCE MANAGER saves this information
    and changes the vendor account as appropriate.  A list of transactions
    entered may be printed by printing the Accounts Payable Journal report
    (see section five - reports). 

    Each transaction entered is automatically checked to insure that it is
    in  balance  (i.e.  debit  amounts   =  credit  amounts).   This  will
    effortlessly insure that you will always be in balance. 

    1. In  order to  begin entering  transactions ,  select "F1"  from the
       Accounts  Payable Main  Menu.  You  will then  be prompted  for the
       following information: 

       Vendor Number:____ 
       Item Date    :__-__-__  Description:______________________________ 
       Reference Num:________  Invoice Num:________    Type Code(I,D,C):_ 
       Due Date     :__-__-__  Discount % :_____%    Disc Date  :__-__-__ 
       Dept  :____ 
       DEBIT :Account:____ _________________________   Amount:___________ 
       CREDIT:Account:____ _________________________   Amount:___________ 


    2. When  entering transactions,  the last  transaction entered  always
       provides the  default data  (unless, of course,  this is  your very
       first transaction).  To accept the default data, simply press ENTER
       and you  will move  to the  next field.  In  order to  change data,
       simply type in the new data and then press ENTER. 


    3. First enter the vendor number: 

                               Vendor Num :2000 

       The existing  vendors are shown  on the  lower half of  the screen.
       You may either  select a vendor from this list  by using the keypad
       arrow keys  (as described earlier), or  you may type in  the vendor
       number.  If  you are using the  keypad arrow keys, be  sure the Num
       Lock key is off. 




                                    PAGE 19




                     FINANCE MANAGER II - ACCOUNTS PAYABLE


    4. Enter the Item (or invoice) date: 

                            Item Date    :_1-_7-89 


    5. Enter the description: 

                  Description:Purchase PC clone computer____ 


    6. Enter the reference number: 

                            Reference Num:T001____ 


    7. Enter the invoice number: 

                             Invoice Num:87-0001_ 

       When  entering the  Invoice  number  you may  use  the  "+" key  to
       automatically  increment  the invoice  number.   Also,  if you  are
       entering the same  number in the invoice field as  in the Reference
       field  you  may   use  the  "="  key  to  input   the  same  number
       automatically. 


    8. Enter the transaction type code: 

                              Type Code(I,D,C):I 


    9. If the  transaction code is  NOT type "I"  then this field  will be
       skipped, otherwise enter the due date: 

                            Due Date     :_2-_6-89 


    10. Enter the Discount percentage: 

                              Discount % :2____% 


    11. Enter the discount date: 

                             Disc Date  :_1-17-89 


    12. If you are  using departments, enter the department  name for this
        transaction. 

                                 Dept   :R&D_ 

    13. If the transaction  type code is "I" or "C",  simply enter the G/L
        account  to be  debited.  For  other types  of transactions,  this
        field will be preset by the system. 



                                    PAGE 20




                     FINANCE MANAGER II - ACCOUNTS PAYABLE


                              DEBIT :Account:1500 

        The  existing G/L  accounts are  shown on  the lower  half of  the
        screen.  You may either select an  account from this list by using
        the keypad arrow  keys (as described earlier), or you  may type in
        the account  number.  If you are  using the keypad arrow  keys, be
        sure the Num Lock key is off. 

        In this example,  we selected General Ledger  account 1500.  Since
        this  transaction was  a type  "I" (Invoice),  we debited  the G/L
        Computer Hardware Asset account since this purchase increased that
        asset account. 


    14. Enter the transaction amount: 

                              Amount:899.89_____ 


    15. If the  transaction type code is  "D" enter the G/L  account to be
        credited.   For  other  types  of transactions,  this  field  will
        automatically be preset by the system. 

                              CREDIT:Account:2000 

        Again, the  existing G/L accounts are  shown on the lower  half of
        the screen.   You may either select  an account from this  list by
        using the  keypad arrow  keys (as described  earlier), or  you may
        type in  the account number.   If you  are using the  keypad arrow
        keys, be sure the Num Lock key is off. 

        In  this  example,  since  the   type  code  is  "I",  the  system
        automatically selects a credit account  2000.  This is the General
        Ledger Accounts Payable account as set up in the configuration. 


    16. Enter the credit amount: 

                              Amount:899.89_____ 

        The default amount  will be the amount entered  above.  You should
        press  ENTER  to  accept  this   amount.   If  you  have  multiple
        distributions,  and need  a  different amount,  see the  following
        section on Entering multiple distributions. 

        If you enter an amount different from the debit amount, the system
        will tell  you that you are  out of balance.  Press  the backspace
        key to backup and correct the amount. 


    17. If you  are entering a  transaction and you want  to go back  to a
        previous field, you may back up by using the Backspace key. 


    18. You may abort the transaction at any time by pressing ESC. 



                                    PAGE 21




                     FINANCE MANAGER II - ACCOUNTS PAYABLE



    19. To accept the transaction: 

                           ARE INPUTS CORRECT(Y/N):Y 

        Answer the prompt with "Y".  The transaction will then be accepted
        and  saved.  The  cursor  will then  automatically  return to  the
        Vendor Number field and be ready for the next transaction.  If you
        answer  this prompt  with a  "N", you  will return  to the  Vendor
        Number field and be allowed to  make any changes or corrections as
        necessary. 


    20. After  you have  entered all  desired transactions,  press ESC  to
        return to the Accounts Payable Main Menu. 


    4e - ENTERING MULTIPLE DISTRIBUTIONS 

    Many transactions have  only one debit and one  credit account.  There
    are  instances, however,  when  there are  several  debits or  credits
    within a single transaction. 

    Let's take the example shown above, except that we had to add 5% sales
    tax to the purchase.  This transaction  would have one debit of 899.89
    to  account 1500  (as above).   However, we  would now  have a  second
    credit of 44.99  for the sales tax, making the  total purchase 944.88.
    This  type of  multiple-distribution transaction  would be  entered as
    follows: 

    1. Follow steps 1-15 in "Entering Transactions" above. 


    2. Enter the credit transaction amount: 

                              Amount:944.88_____ 

       This is the total amount you owe the vendor, purchase plus taxes. 



    3. The  system will  now  tell  you that  the  transaction  is out  of
       balance: 

                TRANSACTION IS OUT OF BALANCE, CONTINUE (Y/N):Y 

       We know that  we did not make  an error, so we would  answer with a
       "Y". 


    4. When the  screen reappears, notice  that there is a  column labeled
       "CUM AMT", at the  right, which registers the  cumulative debit and
       credit amounts entered. 


    5. Now  the second  part  of  the transaction  needs  to be  recorded,


                                    PAGE 22




                     FINANCE MANAGER II - ACCOUNTS PAYABLE


       namely, the sales tax for the transaction. 


    6. Since this is  the second part of the transaction,  the cursor will
       skip down to the debit account  field.  You will notice that all of
       the date, description, type code,  invoice, etc. fields are left as
       they were  in the first  part of  the transaction.  They  cannot be
       changed, and are displayed only  as a reminder of which transaction
       you happen to be working on. 

       Enter the second debit account: 

                              CREDIT:Account:5670 

       In this  example we selected  General Ledger account 5670,  the G/L
       Sales tax expense account. 


    7. Enter the debit amount for account 5670: 

                              Amount:44.99______ 

       Note  that the  system default  for  the amount  is the  cumulative
       remaining amount which is required to balance the transaction.  The
       system thus saves you keystrokes in completing the transaction. 


    8. Answer the "ARE INPUTS CORRECT" prompt with a "Y": 

                          ARE INPUTS CORRECT (Y/N):Y 


    9. In this  example, the transaction would  now be in balance  and you
       would be ready for the next one. 


    You may have a  situation in which there are more  than one credit for
    two debits, or visa versa.  As  long as the cumulative amounts are not
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



                                    PAGE 23




                     FINANCE MANAGER II - ACCOUNTS PAYABLE


    1. Select "F2" at the Accounts Payable Main Menu. 

    2. The system prompts you for "Transaction Search Data". 

    3. Enter data  in the fields where  you want to match  that data.  For
       example, if  you want to search  for all transactions which  have a
       description  of  "Purchase  PC  clone",   you  would  move  to  the
       description field and enter the  description.  Upper and lower case
       does not matter,  and you do not have to  complete the description.
       For example, if you entered only  the first part of the description
       "Purc", FINANCE MANAGER will find all descriptions which begin with
       the letters "purc" (i.e.  "Purchase PC Clone").  You could also add
       a month and  year parameter to  the search and,  consequently, find
       only the "purc" descriptions in a particular month. 

       Any field left blank is an assumed wild card for that field.  Thus,
       if you leave ALL of the fields blank, all transactions are selected
       by the search. 

       While  you are  at one  of  the Account  Number fields  and do  not
       remember the account number you are seeking press "F2" and a pop-up
       window will appear  to select your account number  from.  To remove
       the select-an-account window press the Esc or Enter keys. 

    4. Next, FINANCE  MANAGER II searches for  all transactions containing
       the values you  have specified.  As each  transaction is displayed,
       the program displays the following prompt:

              Modify/Delete/Continue/Reverse/Begin/End/+/-/Quit: 

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


    5. As  long as  you  continue to  answer the  above  prompt with  "C",
       FINANCE MANAGER continues searching for all transactions containing
       the values you have specified.  Selecting  "R" does the same as "C"
       except it searches backwards. 

    6. Answering the prompt  with a "+" causes FINANCE  MANAGER to display
       the  next consecutive  transaction; a  "-" shows  you the  previous
       transaction. 

    7. Entering a "B" or  an "E" will take you to the  Beginning or End of
       the  transaction   file  respectively.   It  ignores   your  search
       parameters. 



                                    PAGE 24




                     FINANCE MANAGER II - ACCOUNTS PAYABLE


    8. When  the search  function  displays the  transaction  you wish  to
       change, answer the prompt with an "M" (Modify). 

    9. You are  now in the change  mode.  ENTER leaves a  field unchanged.
       Change data in any  field by typing in the new  value for the given
       field.  

       If  the transaction  has been  posted to  your General  Ledger, the
       changes  allowed  will be  minimal.   This  is necessary  to  avoid
       out-of-balance  conditions  with your  General  Ledger.   If it  is
       posted,  there  will  be  a "Transaction  Posted  Changes  Limited"
       message on the  screen, and you will only be  allowed to change the
       dates, description,  reference and invoice fields.   Changes to any
       other fields would cause a conflict with your General Ledger. 

       If you  need to  change other  fields of  a posted  transaction, we
       suggest  that  you  enter  a  new  transaction  which  reflects  an
       adjustment to the original transaction. 

    10. If you have made a mistake, or  would like to return to a previous
        field, use  the Backspace  key.  Use  the ESC  key to  ignore your
        changes and return to the Main Menu. 

    11. If your  changes cause the transaction  to be out of  balance, the
        system  will  not accept  your  change.   You must  re-enter  your
        changes,  making  sure  your cumulative  debits  equal  cumulative
        credits. 

        NOTE: If  you  are changing  a  transaction  with multiple  debits
              and/or credits  you can not  change the number of  parts the
              transaction  had  originally.  If  you  need  to change  the
              number of parts of a  transaction we suggest that you delete
              the old transaction and add a completely new one. 


    4g - DELETING TRANSACTIONS 

    To delete or remove a transaction permanently, do the following: 

    1. Select F2 at the Accounts Payable Main Menu. 

    2. Enter  search data  and find  desired transaction  as described  in
       "Changing Transactions". 

    3. When the transaction you wish to delete is displayed on the screen,
       answer "D" at the prompt below. 

              Modify/Delete/Continue/Reverse/Begin/End/+/-/Quit: 


       If  the transaction  has been  posted  to the  General Ledger,  the
       system  will not  allow  you  to delete  it.   This  would cause  a
       conflict with your General Ledger. 

       If you  need to delete  a posted  transaction, we suggest  that you
       enter a new  transaction which reflects a reversal  of the original


                                    PAGE 25




                     FINANCE MANAGER II - ACCOUNTS PAYABLE


       transaction. 

    4. When you are deleting a multiple-part transaction, all parts of the
       transaction are deleted. 

    5. After you have deleted the  desired transaction(s), you may use the
       "Sort" function.  (See Section  Seven "Other features and functions
       - Sorting  Transactions.")  When   sorting  the  transactions,  the
       program  frees  disk  space  which was  formerly  used  by  deleted
       transactions.  



    4h - POINTS TO REMEMBER 

    When entering transactions in this  module, you are basically entering
    transactions with debits  and credits, just as you would  when you are
    entering transactions into  your General Ledger.  In fact,  all of the
    debits  and credits  which you  have entered  will be  posted to  your
    General Ledger  as if you  had entered  them into your  General Ledger
    yourself. 

    The  only difference  between  entering transactions  in your  General
    Ledger,  or the  Accounts Payable  module, is  that this  module keeps
    detailed information on each vendor without cluttering up your General
    Ledger. 

    In fact,  you could set up  an Accounts Payable account  (one for each
    vendor) in  your General Ledger,  and do  exactly what this  module is
    doing for  you.  The  only disadvantage  of doing  that would  be, for
    example, if you  had 200 vendors, you would have  200 Accounts Payable
    accounts  in  your  General  Ledger  Chart  of  Accounts  liabilities.
    Obviously these would clutter up your balance sheet significantly.  Of
    course,  this  module  also  allows  you  to  do  many  vendor-related
    functions which you cannot do with your General Ledger.

    Each transaction must  have at least one debit account  and one credit
    account (just like in General  Ledger transactions).  However, it also
    needs one more account: the vendor account number.  This third account
    number, the vendor  account, is what allows you to  keep track of each
    vendor individually.  Other than this  third account number, and other
    vendor  related inputs,  this transaction  is  the same  as a  General
    Ledger transaction.   Think of  debits and credits  just as  you would
    when entering purchases or payments in your General Ledger. 

    Be  sure to  remember that  any transactions  which are  entered here,
    should not be  entered in your General Ledger  transactions since they
    will automatically be placed there when you post to the General Ledger
    (see section 7c - Posting to the General Ledger).

    The accounts Payable module uses  accrual accounting.  This means that
    purchases are recorded at date of invoice,  and not at the time that a
    payment is  made.  Thus,  when recording a  purchase, the  system will
    always credit your Accounts Payable  account, and you should debit the
    G/L account  which is affected by  this purchase.  At time  of payment
    (when you  generate a check),  the system  will credit your  G/L asset


                                    PAGE 26




                     FINANCE MANAGER II - ACCOUNTS PAYABLE


    checking account and debit the  related vendor account balance as well
    as the G/L Accounts Payables account. 

    There are three different types  of transactions.  A brief description
    of each, as well as typical debits and credits follow: 

                                   ----- GENERAL LEDGER ACCOUNT ------
       DESCRIPTION            TYPE DEBIT             CREDIT
       ---------------------  ---- ----------------- -----------------
       PURCHASE                 I  Asset account or  Accts Payable
       (receive invoice)           Expense account   (System Selected)


       MISC DEBIT TO ACCOUNT    D  Accts Payable     Asset account or
       (For example, A purchase    (System Selected) Expense account
        return or other REDUCTION
        of the account balance).


       MISC CREDIT TO ACCOUNT   C  Asset account or  Accts Payable
       (For example, A finance     Expense account   (System Selected)
        charge or other INCREASE
        of the account balance).
            


































                                    PAGE 27




                     FINANCE MANAGER II - ACCOUNTS PAYABLE


                          SECTION FIVE - REPORTS 

    The  Accounts Payable  Reports  Menu  allows you  to  generate a  full
    spectrum  of Payable  reports from  your database.   The reports  menu
    ("F3" from the Accounts Payable Main Menu) appears as follows: 

                   |--- ACCOUNTS PAYABLE REPORTS MENU ----| 
                   |                                      | 
                   |   ESC  Return to A/P Main Menu       | 
                   |   F1   Payable Journal               | 
                   |   F2   Payable Aging                 | 
                   |   F3   Schedule of Payables          | 
                   |   F4   Open Invoices                 | 
                   |   F5   Vendor Account History        | 
                   |   F6   Vendor Accounts List          | 
                   |   F7   Vendor Address Labels         | 
                   |   F8   Non-Posted Transaction Journal| 
                   |   F9   Payments Journal              | 
                   |   F10  G/L Distribution Report       | 
                   |   ENTER YOUR SELECTION:              | 
                   |                                      | 
                   ---------------------------------------- 

    Reports can be generated to show results for a specific month, a range
    of months,  a quarter, a year,  etc.  All reports may  be generated at
    any time and for any time period.  This means that you are not limited
    to printing a report only once, and it also means that you can print a
    report for a prior period as well. 

    Samples of  each report  are shown  in Appendix A,  or may  be printed
    while using the DEMO accounts. 


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
                       screen,  since reports  will stop  automatically as
                       each screen is full. 

    STOP THE PRINTER:  If, while  printing, you  wish to stop  the printer
                       and return to the menu, all you have to do is press
                       the  "Esc"  key.  Please  keep  in  mind that  most
                       printers have a print buffer, causing the report to
                       continue to  print until the buffer  is empty.  You
                       will, however, return to the menu immediately. 

    When generating  reports, you  have three output  destination options.


                                    PAGE 28




                     FINANCE MANAGER II - ACCOUNTS PAYABLE


    First, you may simply list reports to the screen.  Second, if you have
    a printer, you  can print a hard  copy of the reports.   You also have
    the option of sending  your reports to a disk file,  instead of to the
    printer.   With this  useful option,  reports can  be stored  and then
    printed at a later date. 

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

    These  dates  determine which  months  and  years  are shown  on  your
    reports.  The  ending month and year  must be within twelve  months of
    the starting month  and year.  To get a year-to-date  report you might
    select the  dates 1-89 through 12-89.   Likewise, if you want  a first
    quarter report you could select 1-89 through 3-89. 

    When entering prompts for reports, remember  that you may back up to a
    previous field by pressing the Backspace  key.  If you want to go back
    to the reports menu while you are  at the input screen, press ESC.  If
    you want to return to the  reports menu after your report has finished
    listing to the screen, press ENTER.

    Since there  are different reporting  options within reports,  some of
    the different types  of screen options follow, as well  as the reports
    to which they apply. 


    5b - PRINTING THE ACCOUNTS PAYABLE JOURNAL 

    This report is a listing of all transactions which took place during a
    specified period of time. 

    When printing the Accounts Payable Journal (F1), be sure to employ the
    following procedures: 

    a. Select "F1" from the reports menu. 

    b. The following screen will appear: 





                                    PAGE 29




                     FINANCE MANAGER II - ACCOUNTS PAYABLE


                     TO SCREEN/PRINTER/DISK (S/P/D):_ 

                     ENTER DATE RANGE FOR REPORTS: 
                          STARTING  Month:__  Year:__ 
                            ENDING  Month:__  Year:__ 

                     ENTER TRANSACTION TYPE:_ 
                     (I,D,C or space) 
                      space = all types 
                     ENTER DEPARTMENT:____ 


    c. First, type  in the destination  for your report.  Then,  enter the
       date range wanted for your report. 

    d. Next, enter the type of transactions to be included in this report.
       If you enter  a space all transaction types will  be included.  The
       transaction types  are the  same types  used when  the transactions
       were entered.  Unless you want  only a specific type of transaction
       shown you would normally enter a space (for all types). 

    e. If you are  using departments, enter the department  you would like
       included in this report.  Blank or space equals all departments. 

    f. The report will then be printed. 


    5c - PRINTING THE PAYABLE AGING REPORT 

    This report  shows vendor payables  by due-date age.  It  allows quick
    access in order to  show your payment habits as well  as your past due
    invoice amounts. 

    When printing the Payable Aging  report (F2), the following procedures
    apply: 

    a. Select "F2" from the reports menu. 

    b. The following screen will appear: 

                     TO SCREEN/PRINTER/DISK (S/P/D):_ 

                     ENTER REPORT DATE:__-__-__ 

    c. Type in the destination for your report.  Next, select the date you
       want the report to show.  Normally  this would be the current date.
       By selecting a  future or past date, however, you  can see how your
       vendor aging looked last week, versus  what it might look like next
       week.  By using  different dates, you can readily see  how you have
       been  paying  your  vendors.    You  may,  moreover,  do  cash-flow
       forecasting by selecting a date in the future. 

    d. The report will then be printed. 





                                    PAGE 30




                     FINANCE MANAGER II - ACCOUNTS PAYABLE


    5d - PRINTING THE SCHEDULE OF PAYABLES REPORT 

    This report  shows vendor  balances for  any selected  month.  Trended
    option shows vendor balances, by month, for payables balances history. 

    When printing the Schedule of  Payables (F3), the following procedures
    apply: 

    a. Select "F3" from the reports menu. 

    b. The following screen will appear: 

                     TO SCREEN/PRINTER/DISK (S/P/D):_ 

                     ENTER DATE RANGE FOR REPORTS: 
                             STARTING  Month:__  Year:__ 
                               ENDING  Month:__  Year:__ 

                     DO YOU WANT A TRENDED REPORT(Y/N):_

    c. First, type  in the destination  for your report.  Next,  enter the
       date range wanted for your report. 

    d. Then,  answer the  "Trended Report"  prompt with  "Y" or  "N".  See
       Appendix A for examples of trended and non-trended reports. 

    e. The report will then be printed. 


    5e - PRINTING THE OPEN INVOICES REPORT 

    This report shows all open invoices by vendor regardless of invoice
          and due dates. 

    a. Select "F4" from the reports menu. 

    b. The following screen will appear: 

                     TO SCREEN/PRINTER/DISK (S/P/D):_ 

    c. Type in the destination for your report. 

    d. The report will then be printed. 


    5f - PRINTING VENDOR ACCOUNT HISTORY 

    This  report shows  all  activity (transactions  &  payments) for  any
    selected vendor.  It shows  beginning balance, transactions and ending
    balance for a  specific period of time.  When printing  this report be
    sure to employ the following procedures: 

    a. Select "F5" from the reports menu. 

    b. The following screen will appear: 



                                    PAGE 31




                     FINANCE MANAGER II - ACCOUNTS PAYABLE


                     TO SCREEN/PRINTER/DISK (S/P/D):_ 

                     ENTER DATE RANGE FOR REPORTS: 
                             STARTING  Month:__  Year:__ 
                               ENDING  Month:__  Year:__ 

                     ACCOUNT NUMBER RANGE: 
                                   STARTING ACCOUNT:____ 
                                     ENDING ACCOUNT:____ 

    c. First, type  in the destination  for your report.  Next,  enter the
       date  range wanted  for  your report.   Finally,  enter the  vendor
       account number  range which  you want  printed (i.e.  vendor number
       1000 through 2000). 

    d. The report will then be printed. 



    5g - PRINTING THE VENDOR ACCOUNTS LIST 

    This  report is  a listing  of  all vendors,  showing all  information
    currently set up for each vendor. 

    When printing this report, the following procedures apply: 

    a. Select "F6" from the reports menu. 

    b. The following screen will appear: 

                    |--------- SELECT SORT ORDER --------| 
                    |                                    | 
                    |   ESC  Return to Reports Menu      | 
                    |   F1   Vendor Number Order         | 
                    |   F2   Zipcode Order               | 
                    |   F3   Vendor Name Order           | 
                    |                                    | 
                    |                                    | 
                    |                                    | 
                    |                                    | 
                    |                                    | 
                    |                                    | 
                    |                                    | 
                    |   ENTER YOUR SELECTION:            | 
                    |                                    | 
                    -------------------------------------- 

    c. Select either "F1",  "F2", or "F3" depending on the  order you what
       the labels to be in. 


    d. Next, the following will be prompted: 

                       TO SCREEN/PRINTER/DISK (S/P/D):_ 

    e. Type in the destination for your report. 


                                    PAGE 32




                     FINANCE MANAGER II - ACCOUNTS PAYABLE



    f. The report will then be printed. 


    5h - PRINTING THE VENDOR ADDRESS LABELS 

    This report provides mailing labels for your vendors, sorted by vendor
    account or zipcode order.  Use one-up labels with any length from 6 to
    99 lines per label. 

    When printing this report the following procedures apply: 

    a. Select "F7" from the reports menu. 

    b. The following screen will appear: 

                    |------ VENDOR ADDRESS LABELS -------| 
                    |                                    | 
                    | TO SCREEN/PRINTER/DISK (S/P/D):_   | 
                    |                                    | 
                    |                                    | 
                    | Number of lines per label:__       | 
                    |                                    | 
                    |                                    | 
                    | Labels for Printed Checks(Y/N):_   | 
                    |                                    | 
                    | ACCOUNT NUMBER RANGE:              | 
                    |              STARTING ACCOUNT:____ | 
                    |                ENDING ACCOUNT:____ | 
                    |                                    | 
                    | Do you want an Alignment(Y/N):_    | 
                    -------------------------------------- 

    c. Type in the destination for your report. 

    d. Enter the number of lines per  label (6-99).  This is the number of
       print lines  from the  top of  one label  to the  top of  the next.
       Usually 6 lines for 15/16 inch long labels. 

    e. If you  want labels for only  vendors whom you last  printed checks
       for answer the "Labels for Printed Checks" prompt with "Y".  If you
       want labels  for ALL vendors  answer with  a "N".  If  you answered
       with a "Y" go to step G. 

    f. Enter the  vendor account  number range for  which you  want labels
       (i.e. vendor number 1000 through 3000). 

    g. Finally, load your printer with blank  labels.  In order to be sure
       you have them lined up properly, answer the alignment prompt with a
       "Y".  Repeat  this until your  labels are aligned properly  in your
       printer.  Then answer with a "N". 

    h. Next the following screen will appear: 





                                    PAGE 33




                     FINANCE MANAGER II - ACCOUNTS PAYABLE


                    |--------- SELECT SORT ORDER --------| 
                    |                                    | 
                    |   ESC  Return to Reports Menu      | 
                    |   F1   Vendor Number Order         | 
                    |   F2   Zipcode Order               | 
                    |   F3   Vendor Name Order           | 
                    |                                    | 
                    |                                    | 
                    |                                    | 
                    |                                    | 
                    |                                    | 
                    |                                    | 
                    |                                    | 
                    |   ENTER YOUR SELECTION:            | 
                    |                                    | 
                    -------------------------------------- 

    i. Select either "F1",  "F2", or "F3" depending on the  order you what
       the labels to be in. 


    j. The labels will then be printed. 


    5i - PRINTING THE NON-POSTED TRANSACTION JOURNAL 

    This report is  a listing of ALL transactions which  have not yet been
    posted to your General Ledger. 

    When printing this report the following procedures apply: 

    a. Select "F8" from the reports menu. 

    b. The following screen will appear: 

                     TO SCREEN/PRINTER/DISK (S/P/D):_ 

                     ENTER TRANSACTION TYPE:_ 
                     (I,D,C or space) 
                      space = all types 
                     ENTER DEPARTMENT:____ 


    c. Type in the destination for your report. 

    d. Next, enter the type of transactions to be included in this report.
       If you enter  a space all transaction types will  be included.  The
       transaction types  are the  same types  used when  the transactions
       were entered.  Unless you want  only a specific type of transaction
       shown you would normally enter a space (for all types). 

    e. If you are  using departments, enter the department  you would like
       included in this report.  Blank or space equals all departments. 

    f. The report will then be printed. 



                                    PAGE 34




                     FINANCE MANAGER II - ACCOUNTS PAYABLE



    5j - PRINTING THE PAYMENTS JOURNAL 

    This  report is  a listing  of ALL  payments which  have not  yet been
    posted to your General Ledger. 

    a. Select "F9" from the reports menu. 

    b. The following screen will appear: 

                   |----------- PAYMENTS JOURNAL ----------| 
                   |                                       | 
                   | TO SCREEN/PRINTER/DISK (S/P/D):_      | 
                   |                                       | 
                   | ENTER DATE RANGE FOR REPORTS:         | 
                   |           STARTING Month:__ Year:__   | 
                   |             ENDING Month:__ Year:__   | 
                   |                                       | 
                   | CHECK NUMBER RANGE:                   | 
                   |               STARTING CHECK #:_____  | 
                   |                 ENDING CHECK #:_____  | 
                   |                                       | 
                   | ACCOUNT NUMBER RANGE:                 | 
                   |               STARTING ACCOUNT:____   | 
                   |                 ENDING ACCOUNT:____   | 
                   |                                       | 
                   | Just NON-POSTED Payments (Y/N):_      | 
                   ----------------------------------------- 

    c. First, type  in the destination  for your report. 

    d. Next, enter the date range you would like included in this report. 

    e. Then, enter  the starting and  ending check numbers you  would like
       included  in  this  report.   Check numbers  1  through  99999  for
       starting and ending respectively will include all checks. 

    f. Enter  the  vendor account  number  range  which you  want  printed
       (vendor number 1 through 9999 will print all vendors). 

    g. Lastly, if you only want to  show non-posted payments select "N" at
       the  "Just NON-POSTED  Payments" prompt.   A "Y"  will select  both
       posted and non-posted payments. 

    h. The report will then be printed. 


    5k - PRINTING THE GENERAL LEDGER DISTRIBUTION REPORT 

    This report  shows the total  amount of Accounts  Payable transactions
    (including payments) posted to each General Ledger account number. 

    a. Select "F10" from the reports menu. 

    b. The following screen will appear: 



                                    PAGE 35




                     FINANCE MANAGER II - ACCOUNTS PAYABLE


                     TO SCREEN/PRINTER/DISK (S/P/D):_ 

                     ENTER DATE RANGE FOR REPORTS: 
                          STARTING  Month:__  Year:__ 
                            ENDING  Month:__  Year:__ 

    c. First, type  in the destination  for your report.  Then,  enter the
       date range wanted for your report. 

    d. The report will then be printed. 
















































                                    PAGE 36




                     FINANCE MANAGER II - ACCOUNTS PAYABLE


                     SECTION SIX - MAKING VENDOR PAYMENTS 

    This section discusses the most important and powerful feature of this
    module.  The biggest advantage of using  this module is its ability to
    select invoices  for payment  while allowing the  computer do  all the
    thinking, including writing the check  for you.  Selection of invoices
    for payment by different methods allows you to maximize your cash flow
    and lessen your working capital requirements.  The object is to select
    invoices for payments based on due  dates and discount dates.  You can
    avoid paying invoices  early (and loosing cash flow)  AND avoid paying
    invoices late (and incurring finance charges).  As a result, your bank
    book may  be fatter and  your venders  happier.  In addition,  you may
    even give your company a better credit rating. 

    This section  will discuss how  to select  invoices to pay,  print the
    checks  by  computer,  void  any mistakes,  and  produce  non-computer
    generated checks, if desired.  The heart of these features lies within
    the Payments Menu. 

    In order  to get  to the Payments  Menu, select F5  from the  A/P Main
    Menu.  It appears as follows: 

                    |---------- PAYMENTS MENU -----------| 
                    |                                    | 
                    | ESC Return to A/P Main Menu        | 
                    | F1  PAYMENT Selection Menu         | 
                    | F2  Print Selected Payments Journal| 
                    | F3  Print CHECKS                   | 
                    | F4  VOID Printed Checks            | 
                    | F5  MANUAL Checks                  | 
                    |                                    | 
                    |                                    | 
                    |                                    | 
                    |                                    | 
                    |                                    | 
                    | ENTER YOUR SELECTION:              | 
                    |                                    | 
                    -------------------------------------- 

    We will  discuss each  of the  above menu  selections in  the sections
    which follow. 


    6a - SELECTING INVOICES FOR PAYMENT 

    After  arriving at  the  Payments  Menu, the  first  selection is  "F1
    PAYMENT Selection Menu".  The "F1" menu selection is the first step in
    making vendor  payments (printing checks).   This is how you  tell the
    computer which checks it should  write.  Select "F1" and the following
    screen will appear. 








                                    PAGE 37




                     FINANCE MANAGER II - ACCOUNTS PAYABLE


                      ---------------------------------- 
                      |                                | 
                      |   PAY THROUGH DATE:__-__-__    | 
                      |                                | 
                      ---------------------------------- 

    Enter the  date where  you will  pay invoices.  This  date is  used to
    validate discount  dates and  their expirations.   The default  is the
    current date. 

    After entering the payment date you  will be at the PAYMENTS SELECTION
    MENU.  This screen is seen as follows: 


                    |------ PAYMENT SELECTION MENU ------| 
                    |                                    | 
                    | ESC Return to Payments Menu        | 
                    | F1  Select From ALL                | 
                    | F2  Select By VENDOR Number        | 
                    | F3  Select By INVOICE Number       | 
                    | F4  Select By DUE DATE             | 
                    | F5  Select By DISCOUNT DATE        | 
                    | F6  SPECIFIC AMOUNT to Vendor      | 
                    | F7  PAY ALL                        | 
                    | F8  CLEAR Selected Payments        | 
                    |                                    | 
                    |                                    | 
                    | ENTER YOUR SELECTION:              | 
                    |      TOTAL SELECTED:      0.00     | 
                    -------------------------------------- 

    As  you can  see,  there  are seven  different  methods available  for
    selecting invoices for payment.  Don't let all of the choices worry or
    confuse you.   As we  continue, we  will discuss  each in  detail.  In
    simple terms, the most important selection method is "F4 SELECT By DUE
    DATE".  This is the way you would select payments if your main concern
    was to pay  invoices on the due  date.  The "F8" option  allows you to
    de-select payments in case you make an error in selecting. 

    In  each  of  the  "Select"  (F1 - F5)  options,  you  will  be  shown
    individual  invoices and  you will  be  able to  tell FINANCE  MANAGER
    whether or not you want to pay  that invoice.  F6 and F7 are automatic
    selection methods where the computer  decides what to pay, rather than
    letting you choose.

    After selecting F1,  F2, F3, F4 or F5 FINANCE  MANAGER will search for
    non-paid invoices.  When it finds one, it will display the transaction
    and ask you if you want to  pay it.  The screen display when selecting
    invoices is as follows: 









                                    PAGE 38




                     FINANCE MANAGER II - ACCOUNTS PAYABLE


    Vendor Number:____ 
    Item Date    :__-__-__  Description:______________________________ 
    Reference Num:________  Invoice Num:________    Type Code(I,D,C):_ 
    Due Date     :__-__-__  Discount   :_____%    Disc Date  :__-__-__ 
    Dept  :____ 
    DEBIT :Account:____ _________________________   Amount:___________ 
    CREDIT:Account:____ _________________________   Amount:___________ 


    ------------------------------------------------------------------ 
    | Discount Amount:__________          Total Amount   :__________ | 
    | Approved Amount:__________          Total Paid     :__________ | 
    |                                     Discount Taken :__________ | 
    | Are Inputs Correct (Y/N):_          End Balance Due:__________ | 
    ------------------------------------------------------------------ 

     Select for payment? (Y/N):_           Total Selected:      0.00 


    The procedure for selecting individual  transactions for payment is as
    follows: 

    1. The cursor will be at the "Select for payment?  (Y/N)" prompt.  You
       may skip  (not pay) this transaction  by answering "N", or  you may
       select it for payment by answering "Y". 

       If you  answer with  a no,  the computer will  search for  the next
       transaction  and ask  you again.   Whenever  you wish  to stop  and
       return to the menu, simply press the ESC key. 

    2. If  you answered  with a  yes, you  will then  be prompted  for the
       "Discount Amount" to take on this payment.  If there is no discount
       percentage in  the selected transaction,  this input field  will be
       skipped.

       The default for this field  is calculated from the discount percent
       and amount for  this transaction.  If the payment date  is past the
       discount date, the default discount will be zero.  If you wish, you
       may change the default discount by entering another amount. 

    3. Next, enter the "Approved Amount".  This  is the amount you want to
       pay on this transaction.  This is  the net check amount (i.e. after
       discounts).  If you do not pay  the entire balance (amount due less
       discount), FINANCE MANAGER will not allow you to take a discount at
       this  time and  will  zero  out the  "Discount  Amount".  The  full
       discount may be taken at the time you pay the transaction in full.

    4. Answer the  "Are Inputs Correct?  (Y/N)"  prompt with a "Y"  or "N"
       accordingly.  If  you answer with an  "N", you will be  returned to
       the "Discount Amount" prompt, and if you answer "Y", your selection
       will be saved and you will move to the next unpaid transaction. 

    If you wish  to stop selecting transactions, simply press  the ESC key
    and you will return to the menu. 

    Some points  to remember: when  selecting type "D"  transactions, this


                                    PAGE 39




                     FINANCE MANAGER II - ACCOUNTS PAYABLE


    Miscellaneous Debit is  a reduction in what you owe  a vendor and will
    thus  reduce  the   total  amount  paid.   When   selecting  "D"  type
    transactions,  you are  in effect  applying that  transaction to  your
    payment and thus reducing the amount paid. 

    Also, if you  run through the selection process two  or more times and
    see a  non-zero "Approved Amount",  this means that you  selected that
    amount to  be paid during your  last pass at selecting  payments.  You
    may skip it  (approved amount will remain unchanged)  by not selecting
    it a second  time, or you may  change the amount paid  by selecting it
    for payment again. 

    You may  also de-select a payment  by entering a zero  in the approved
    amount field of a selected transaction. 

    We will now explain each selection method  (and the time to use it) in
    detail. 


    6b - SELECTING FROM ALL INVOICES 

    Choosing the  menu option "F1  Select From  All" allows you  to select
    invoices for payment  by showing you all open  (non-paid) invoices and
    letting you decide  whether or not to  pay each one.  This  is an easy
    way to look at each transaction and decide whether you want to pay it. 


    6c - SELECTING BY VENDOR NUMBER 

    Selecting "F2 Select  by VENDOR Number" will allow you  to select only
    those  transactions for  a specific  vendor.   It is  useful when  one
    vendor must be paid now, or if  you only want to pay specific vendors.
    Upon  choosing this  selection method  you  will be  prompted for  the
    vendor number you want to select.  The prompt is as follows: 

                           ENTER VENDOR NUMBER:____ 

    As with all  account number input requests, you may  select the vendor
    from the list  on the bottom of  the screen by using  the keypad arrow
    keys or by typing in the specific vendor number. 

    After choosing your  vendor you will be at the  payment selection menu
    as described above.  Only transactions for the selected vendor will be
    shown.  You may select any or all transactions for this vendor. 


    6d - SELECTING BY INVOICE NUMBER 

    Selecting "F3 Select by INVOICE Number"  will allow you to select only
    those transactions for a specified  vendor and with a specific invoice
    number.   It is  useful  when a  vendor is  requesting  payment for  a
    specific invoice.

    Upon choosing this selection method you  will be prompted for a vendor
    number and invoice number.  The prompt is as follows: 



                                    PAGE 40




                     FINANCE MANAGER II - ACCOUNTS PAYABLE


                          ENTER VENDOR NUMBER:____ 
                         ENTER INVOICE NUMBER:________ 

    As with all  account number input requests, you may  select the vendor
    from the list  on the bottom of  the screen by using  the keypad arrow
    keys or by typing in the specific vendor number. 

    If you  leave the invoice  number field  blank, you will  be selecting
    those transactions with no invoice number. 

    After entering  your responses  you will be  at the  payment selection
    menu as  described above.  Only  transactions for the  selected vendor
    and invoice number  will be shown.  You  may select any or  all of the
    transactions for this vendor. 


    6e - SELECTING BY DUE DATE 

    Selecting  "F4 Select  by DUE  DATE" will  allow you  to select  those
    transactions  which fall  on or  before  a specified  due date.   This
    selection option  is useful when you  want to pay all  bills which are
    due on or before a certain date (e.g.  pay all bills due by the end of
    the month).

    Invoices  selected for  payment are  based on  the "Pay  through Date"
    selected earlier (see section 6a).  Only transactions which have a due
    date on or before this date will  be displayed.  You may select any or
    all displayed transactions.


    6f - SELECTING BY DISCOUNT DATE 

    Choosing the  menu option "F5 Select  by DISCOUNT DATE" allows  you to
    select transactions for  payment based on the  "Payment Date" selected
    earlier.  All transactions which have a discount date on or before the
    payment date will be shown for selection. 

    This method of selection is a great way to be sure you do not miss any
    discounts  for early  payments.   You may  select all  or  any of  the
    displayed transactions. 


    6g - PAYING SPECIFIC AMOUNT TO VENDOR 

    This selection  option "F6" allows  you pay  a vendor only  a specific
    amount.  This  is a marvelous  method to use  when you prefer  to make
    monthly  payments  to  a  vendor.   The  selected  payments  are  made
    automatically by FINANCE MANAGER, based  on due dates, and with oldest
    transactions  first.  If  any debit  or credit  type transactions  are
    found they are also applied in date order. 

    Upon choosing this selection option you  will be prompted for a vendor
    number and an amount to pay.  The input display is as follows: 

                         ENTER VENDOR NUMBER:____ 
                         ENTER AMOUNT TO PAY:________ 


                                    PAGE 41




                     FINANCE MANAGER II - ACCOUNTS PAYABLE



    As with all  account number input requests, you may  select the vendor
    from the list on  the bottom of the screen simply  by using the keypad
    arrow keys or by typing in the specific vendor number. 

    Next, enter the  amount you want to pay that  vendor.  FINANCE MANAGER
    will then search for transactions  and select them AUTOMATICALLY.  You
    will not be prompted for specific ones to pay. 

    After  FINANCE MANAGER  makes its  selections, both  the total  amount
    requested  to pay  and the  approved to  pay for  that vendor  will be
    displayed. 


    6h - PAYING ALL INVOICES 

    Menu selection "F7" will allow  FINANCE MANAGER to SELECT ALL non-paid
    transactions.  The difference between this and "F1 Select from ALL" is
    that you will  not be prompted for each  transaction.  FINANCE MANAGER
    will  select ALL  for payment  without  any prompts.   This method  of
    payment selection is useful for those persons who have enough money to
    pay all invoices regardless of due dates. 


    6i - CLEARING SELECTED PAYMENTS 

    The menu selection "F8 CLEAR Selected Payments" provides a way to undo
    all of the transactions which you  have selected.  It is useful if you
    have made a mistake in selecting  payments and you want to start over.
    During all selection procedures, you will notice that the total amount
    you  have selected  is  displayed on  the lower  half  of the  screen.
    Likewise,  you will  notice  after you  clear  selected payments  this
    number will return to zero. 


    6j - PRINTING SELECTED PAYMENTS JOURNAL 

    After you  have selected  all the  transactions you  wish to  pay, you
    would return to the PAYMENTS MENU by pressing ESC.  This menu is again
    shown below: 


















                                    PAGE 42




                     FINANCE MANAGER II - ACCOUNTS PAYABLE


                    |---------- PAYMENTS MENU -----------| 
                    |                                    | 
                    | ESC Return to A/P Main Menu        | 
                    | F1  PAYMENT Selection Menu         | 
                    | F2  Print Selected Payments Journal| 
                    | F3  Print CHECKS                   | 
                    | F4  VOID Printed Checks            | 
                    | F5  MANUAL Checks                  | 
                    |                                    | 
                    |                                    | 
                    |                                    | 
                    |                                    | 
                    |                                    | 
                    | ENTER YOUR SELECTION:              | 
                    |                                    | 
                    -------------------------------------- 

    By  selecting "F2"  at  this menu  a journal  report  will be  printed
    listing all of the transactions which  you have selected.  You will be
    prompted for the destination of the report as follows: 

                       TO SCREEN/PRINTER/DISK (S/P/D):_ 

    Select the report destination and  your selected payments journal will
    then be printed.  This report will  show you, by vendor, the amount of
    each check  to be written  as well  as the total  of all checks  to be
    written.  It  is suggested that  you always review this  report before
    actually printing checks so as to ensure you have selected the correct
    transactions  for  payment.  A  sample  of  this  report is  shown  in
    Appendix  A.  After  reviewing  this  report you  are  ready to  print
    checks.  This is clearly described in the following section. 


    6k - PRINTING CHECKS 

    After you  have selected  the transactions for  payment, and  you have
    reviewed the  Selected Payments Journal  report, you are now  ready to
    print checks. 

    Load  your printer  with your  pre-printed continuous-form  checks and
    check to  be sure  you have  set up  the A/P  configuration (utilities
    menu) for the checks you will be using.  Select "F3" from the PAYMENTS
    MENU and you will be prompted for the following information: 

                        Enter DATE for Checks:__-__-__ 
                      Enter Next Check Number:_____ 
                     G/L Check Account Number:_____ 

    1. Enter the date you want printed on your checks. 

    2. Enter the check  number of the first check in  the printer (FINANCE
       MANAGER will increment the number for each check lineup you print).
       If  your checks  do not  happen to  have check  numbers, enter  the
       number  you wish  to have  printed on  the first  LIVE (non-lineup)
       check. 



                                    PAGE 43




                     FINANCE MANAGER II - ACCOUNTS PAYABLE


    3. Enter  the G/L  checking  account  number for  the  checks you  are
       writing.  It is  important that you get the  correct account number
       for the checks  you are writing or  the funds will come  out of the
       wrong account. 

    4. After entering the  account number FINANCE MANAGER will  ask you if
       you want a check lineup pattern printed. 

                      PRINT AN ALIGNMENT PATTERN? (Y/N):_ 

       Answer with  a "Y"  until you  have the  checks properly  lined up.
       When  you answer  this  prompt with  an "N",  your  checks will  be
       printed. 

    Until you answer the alignment pattern with a "N", you may at any time
    abort the  check printing process and  return to the menu  by pressing
    the ESC key. 


    6l - VOIDING PRINTED CHECKS 

    The last check written to a specific vendor may be voided by selecting
    "F4" from the payments menu.  This function will allow you to void the
    last  check  written,  either  computer generated,  or  manual.   Upon
    selecting this function the following screen will appear: 

                           ENTER VENDOR NUMBER:____ 

    Enter the  vendor number of the  check to be voided.   Finance Manager
    will then search  for the check and  ask if you want to  void it.  The
    following screen is displayed: 

                    ------------ VOID CHECK -------------- 
                    |                                    | 
                    |     ENTER VENDOR NUMBER:____       | 
                    |                                    | 
                    |      CHECK NUMBER:______           | 
                    |      VOID THIS CHECK? (Y/N):_      | 
                    |                                    | 
                    -------------------------------------- 

    If you do not wish to void this check, answer with an "N" and you will
    be allowed to enter another vendor number.  If you do want to void it,
    answer with a "Y".   After answering with a "Y", in  order to void the
    check, FINANCE MANAGER will show you a detail of all transactions that
    were paid with  that check.  Then you  will be asked one  more time if
    you want  to "VOID THIS  CHECK?" in order to  be sure that  you really
    want to void it.

    After the check is voided you will return to the Payments Menu. 

    NOTE: You will only  be allowed to void the last  check written to any
          one vendor. 





                                    PAGE 44




                     FINANCE MANAGER II - ACCOUNTS PAYABLE


    6m - ENTERING MANUAL CHECKS 

    Another  great  feature  included  in  the  FINANCE  MANAGER  Accounts
    Payables module is the ability  to enter checks manually.  This allows
    you the flexibility  of hand writing those checks which  must be paid,
    even if you do not want to do a full check run. 

    In order  to use  this feature,  select "F5"  from the  Payments Menu.
    Upon selecting this function you will  be prompted for a vendor number
    as below: 

                           ENTER VENDOR NUMBER:____ 

    After entering  the vendor  number for  the manual  check you  wish to
    write, you  will be allowed to  select transactions for payment  as in
    Section 6c - Selecting by Vendor  Number.  After you have selected the
    transactions for payment, the following screen is displayed: 

                        Enter DATE for Checks:__-__-__ 
                    Enter Manual Check Number:_____ 
                     G/L Check Account Number:_____ 

    Enter the DATE, CHECK NUMBER and G/L ACCOUNT NUMBER as in section 6k -
    Printing Checks.  This procedure is  just like printing checks, except
    that no check will be printed.   The transactions will be paid and the
    total paid by the manual check will be displayed when it is finished. 

    You will then be returned to the Payments Menu for further processing. 






























                                    PAGE 45




                     FINANCE MANAGER II - ACCOUNTS PAYABLE


                 SECTION SEVEN - OTHER FEATURES AND FUNCTIONS 


    The remainder  of the features  and functions of the  Accounts Payable
    Module are  contained on the  Accounts Payable Utilities  Menu.  These
    features  are  also very  powerful  and  important functions  of  this
    module.   To use  these features  select  "F6" while  on the  Accounts
    Payable Main Menu.  The following menu will be shown: 

                    |--------- A/P UTILITY MENU ---------| 
                    |                                    | 
                    |  ESC  Return to A/P Main Menu      | 
                    |  F1   SORT Transactions            | 
                    |  F2   POST Transactions to GL      | 
                    |  F3   A/P CONFIGURATION Settings   | 
                    |                                    | 
                    |                                    | 
                    |                                    | 
                    |                                    | 
                    |                                    | 
                    |                                    | 
                    |                                    | 
                    |  ENTER YOUR SELECTION:             | 
                    |                                    | 
                    -------------------------------------- 

    In this section we will discuss each  function as well as its uses and
    features.  Since  Configuration settings are required  before you will
    be  able to  enter any  transactions, we  will discuss  this selection
    first. 


    7a - CONFIGURATION SETTINGS 

    The configuration settings allow you  to configure this module to your
    specific  company, and  to  its specific  G/L  account numbers.   This
    configuration is  very important to your  transactions, to pre-printed
    continuous form checks, and to GL account numbers used. 

    By  selecting  "F3" from  the  Configuration  menu  you will  see  the
    following screen: 

                         ROW COLUMN

         CHECK NUMBER( 6):27    73           STARTING ROW OF STUB:5 
                 DATE( 8):31    45  MAXIMUM DETAIL LINES PER STUB:14 
          VENDOR NAME(30):35    12              NEXT CHECK NUMBER:1001 
       DECIMAL AMOUNT(14):31    65  VENDOR ADDRESS ON CHECK (Y/N):Y 
    AMOUNT WITH WORDS(50):33    12    DETAIL POSTING TO G/L (Y/N):Y 
        SIZE OF CHECK    :42    80   G/L ACCOUNTS PAYABLE ACCOUNT:____ 


    The configuration settings must be set  up for each set of books which
    you  happen  to have.   Be  sure  to  carefully employ  the  following
    procedures when setting up your configuration settings: 



                                    PAGE 46




                     FINANCE MANAGER II - ACCOUNTS PAYABLE


    1. The input fields on the left are the row and column print positions
       on  the  continuous form  checks  which  you  will be  using.   The
       defaults are  set up to  use the following pre-printed  checks from
       Nebs,  Inc.,  Groton,   MA  01471.   To  order,   phone  toll  free
       1-800-225-9550.  The following product numbers should be ordered. 

             Continuous form checks   Product 9021-1 (1 part) 
                                              9021-2 (2 part) 
                                              9021-3 (3 part) 

             Envelopes                Product 775 DU-O-VUE 

       If you already have continuous form  checks, or want to use another
       kind, you may do so by  changing the check printing location fields
       above.   The only  requirement is  that you  use a  TOP-STUB check.
       There  are eight  print  fields  which you  must  specify for  your
       checks. 

       To set up the A/P check printing  for your own checks you must tell
       FINANCE MANAGER where to print  the fields listed above.  These are
       as follows: 

       CHECK NUMBER:      Location of check number on check 

       DATE:              Location of check date 

       VENDOR NAME:       Location of vendors name (and address) 

       DECIMAL AMOUNT:    Location of decimal amount (i.e.  500.00) 

       AMOUNT WITH WORDS: Location      of     amount      spelled     out
                          (i.e. ***FIVE HUNDRED and NO/100) 

       SIZE OF CHECK:     This is  the number of  rows and columns  on the
                          physical check.  Usually  a check (including top
                          stub) is  7" X 8 1/2",  which is 42 rows  and 85
                          columns. 

       STARTING ROW:      This is  the first line available  (from the 
       OF STUB            top) for printing  detail invoice information on
                          the check stub. 

       MAXIMUM DETAIL:    This is  the maximum  number of  detail text 
       LINES PER STUB     lines that fit on the check stub. 

       Enter the data into the  input fields for your specific pre-printed
       checks.  If your  pre-printed check does not have  a specific field
       for one  of the 5 print  position fields, simply enter  zero (0) in
       the row field and the field will not be printed on your checks. 

    2. Next, enter your starting check  number for your computer generated
       checks.  (i.e. Your first check number.) 

    3. At the  VENDOR ADDRESS  ON CHECK  field, enter  either "Y"  or "N",
       depending on whether or not your vendor's address is printed on the
       check. 


                                    PAGE 47




                     FINANCE MANAGER II - ACCOUNTS PAYABLE



    4. The next  selection "DETAIL  POSTING TO G/L"  allows the  option of
       posting  transactions to  your  G/L in  detail  or summary  format.
       Selecting  detail  posting will  post  each  A/P transaction  as  a
       separate G/L  transaction; while answering  "N" will cause  the A/P
       transactions to be grouped and  summarized keeping the total number
       of transactions posted to the G/L  to a minimum.  Which ever method
       you choose  the financial results will  be the same.  There  is one
       other difference,  however, if you  select the detail  posting each
       A/P  transaction's  date   will  be  used  in   the  resultant  G/L
       transaction while summary posting will prompt you for a date at the
       time you  post and use that  date on the G/L  transactions.  If you
       are a beginner  and do not have many transactions,  we suggest that
       you select "Y" at this prompt. 

    5. Prior to  setting up this configuration,  you must set up  (add) an
       Accounts Payable account  in your General Ledger  Chart of Accounts
       (using the General Ledger module).   This account must be active in
       your General Ledger Chart of Accounts in order to be able to select
       it for use in this configuration  setup.  We recommend that you set
       up the account for use by the Accounts Payable module only (i.e. do
       not use  these account  numbers when  entering your  General Ledger
       transactions). 

       This General Ledger  account is the interface account,  and is used
       to interface the  Accounts Payable Module with  your General Ledger
       Module.   It's  important to  remember  that  the Accounts  Payable
       Module cannot be used without this important GL account. 

       Enter your G/L Accounts Payable  account number at the input field.
       You may use the "select account"  feature by using the keypad arrow
       keys.  For easy selection, all  active G/L liabilities accounts are
       shown on the bottom half of the screen. 

    6. Finally, at the "ARE INPUTS  CORRECT (Y/N)" prompt, answer "Y".  If
       you answer with  "N", you will be returned to  the first input line
       in order to allow you to make more changes. 

    You may leave or skip over any field simply by pressing "return".  You
    may back up to a previous  field simply by pressing the Backspace key.
    Or you can  easily quit, without saving any input,  merely by pressing
    the Esc key. 


    7b - SORTING TRANSACTIONS 

    The Accounts  Payable module normally keeps  transactions organized in
    the order in which they are  input.  The Sort function allows the user
    to choose the  manner in which FINANCE MANAGER sorts  or organizes the
    transactions.  Transactions  may be  sorted either  by date  of input,
    transaction date, or vendor number order. 

    The sort  procedure is not  a required feature  but it is  useful, for
    example, when printing transaction  journals or vendor balance reports
    and you would like to be sure that all transactions are in date order.
    To accomplish this, all you have to  do is select date order sort.  It


                                    PAGE 48




                     FINANCE MANAGER II - ACCOUNTS PAYABLE


    would be  good practice to sort  the transactions once a  month before
    printing  your reports.   The sort  order does  not affect  any report
    balances and it is purely for cosmetic purposes. 

    To start  sorting transactions,  select "F1"  at the  Accounts Payable
    Utilities Menu.  The following screen appears: 

                    |--------- SORT TRANSACTIONS --------| 
                    |                                    | 
                    |   ESC  Return to Utilities Menu    | 
                    |   F1   Transaction Input Order     | 
                    |   F2   Date Order                  | 
                    |   F3   Vendor Number Order         | 
                    |   F4   Department Order            | 
                    |                                    | 
                    |                                    | 
                    |                                    | 
                    |                                    | 
                    |                                    | 
                    |                                    | 
                    |   ENTER YOUR SELECTION:            | 
                    |                                    | 
                    -------------------------------------- 

    1. Select the order in which you would like to sort the transactions. 

    2. FINANCE MANAGER automatically sorts all transactions. 

    3. Press any key to exit and return  to the Main Menu when the sort is
       completed. 


    If you  have more transactions than  memory can hold at  one time, the
    default disk  drive is used  to store  a temporary file  while sorting
    transactions.   It  is  important  to remember,  therefore,  that  the
    default drive must have adequate remaining disk space, and it must NOT
    be "write protected". 

    If there is not enough space on  your default drive to sort your file,
    you must  put an empty  disk in this  drive (usually drive  A:) before
    selecting your sort order.  If you DO run out of disk space, your sort
    is aborted and your transaction file remains unchanged. 

    If a  temporary disk file  is required for  the sort, the  system will
    inform you and it  will allow you to put a blank  disk in your default
    disk drive (NOT YOUR DATA DISK  DRIVE).  It is most important that you
    DO NOT take out your data disk  from its drive, or the program will be
    aborted. 










                                    PAGE 49




                     FINANCE MANAGER II - ACCOUNTS PAYABLE


    7c - POSTING TO THE GENERAL LEDGER 

    Accounts  Payable   Utilities  Menu  selection  "F3"   will  post  all
    transactions entered  into this module  to your General  Ledger books.
    Depending on whether you selected the detail or summary post option in
    the   configuration   (described   above)   your   Accounts   Payables
    transactions are posted individually or are read, then summarized, and
    then posted to your General Ledger in summary format. 

    You'll  be pleased  to know  that this  posting procedure  is a  smart
    procedure.  It will only post  the transactions which have not already
    been posted.  Because of this  incredible time-saving feature, you may
    accidentally post as  many times as you wish without  the worry of any
    errors or double posting. 

    This posting process is mandatory in  order to interface with the G/L,
    and should be done before you run any General Ledger reports.  Without
    running this procedure,  no transactions or activity  from this module
    will be shown on your General Ledger reports. 

    NOTE: After this posting procedure is complete, the transactions which
          were posted  may no longer  be changed  as far as  type, account
          numbers or amounts. 

    Because of this unique safety feature, we recommend that you only post
    after  you are  absolutely  sure all  transactions  have been  entered
    correctly and that any adjustments  have been made.  Generally, a good
    rule for you  to follow is to  post transactions once a  month, on the
    last day of that month. 

    After you  have run this procedure,  you can print any  General Ledger
    reports,  and all  activity  from this  module  will be  automatically
    included in your General Ledger reports. 

    In order  to run this procedure,  select "F2" on the  Accounts Payable
    Utilities menu.  If you selected  the detail post configuration option
    the posting will commence.  If you did not select detail post you will
    be prompted for a date to use when posting transactions to the General
    Ledger.  This prompt is as follows: 

                     Enter Post Transaction Date:__-__-__ 

    When using the summary post option this date will show on your General
    Ledger transactions  as the  date of the  posting.  Usually  this date
    should be the current date (i.e. the last date for the current month).
    If detail post was selected  the General Ledger transactions will have
    the same date as they do in the Accounts Payable Journal. 

    After you enter this date, the  posting process will be run.  You will
    be  able  to  watch its  progress  on  the  screen  as it  is  reading
    transactions and posting them to your General Ledger accounts. 







                                    PAGE 50




                     FINANCE MANAGER II - ACCOUNTS PAYABLE




























































                                    PAGE 51




                     FINANCE MANAGER II - ACCOUNTS PAYABLE


                     SECTION EIGHT - ENHANCEMENTS & HINTS 

    8a - ENHNACEMENTS BY VERSION 

    Version 1.1 - First Release of this module. 

    Version 1.2 - All  changes  included in  version  1.2  of the  General
                  Ledger module. 
                - Provide "=" and "+" keys for invoice number input to get
                  same-as-reference-number or  incremental invoice numbers
                  respectively. 
                - Added label sort by vendor company name. 
                - Added Payments Journal. 
                - Added G/L Distribution Report. 
                - Option to print labels only for last checks printed. 
                - Added transaction type selection to A/P Journal. 
                - Allow  check writing  to  85 columns  for wide  carriage
                  printers. 
                - Added sort by company name to Vendor Accounts Listing. 
                - Added "DETAIL POST" to General Ledger option. 
                - Payments posted to G/L now show Vendor Name, account and
                  check number. 
                - Fixed delete vendor problem. 

    Version 1.3 - All  system  changes  included  in version  1.3  of  the
                  General Ledger module. 
                - Pop-up  vendor selection  window  when selecting  report
                  options. 
                - Pop-up  vendor/chart of  accounts window  while entering
                  transaction search parameters. 
                - Enhanced format of Selected Payments Journal report. 
                - Added Vendor Account History report. 
                - Added new Open Invoices Report. 


    8b - HELPFUL HINTS AND SUGGESTIONS 

    * Keep a  CURRENT backup copy of  your data disk each  time you update
      your data.  This will safeguard against  loss of data due to a power
      or other problem. 

    * Use  the Shift  PrtSc  keys to  make a  hardcopy  of current  screen
      display. 

    * You may run this module WITHOUT  the interface to the General Ledger
      module  simply by  not  posting to  the General  Ledger  (F2 on  the
      Utilities Menu).   The system  will, however,  post to  your General
      Ledger when  you do an  End of Period  Posting (F3 on  the Utilities
      Menu).  To  totally avoid any  interface, simply set up  this module
      with a separate data file, using  a different name than your General
      Ledger data  file name.   You will,  however, have to  set up  a few
      dummy G/L  accounts (the  required G/L accounts  needed to  run this
      module). 

    * When printing checks, be sure that your printer is in its default 10
      character per inch mode, and that it is set with its normal margins.


                                    PAGE 52




                     FINANCE MANAGER II - ACCOUNTS PAYABLE


      Deviation from  this will result  in the  inability to line  up your
      pre-printed checks. 
























































                                    PAGE 53




                     FINANCE MANAGER II - ACCOUNTS PAYABLE


                SECTION NINE - ACCOUNTS PAYABLE DISK FILE NAMES 

    Listed below is a description of files on your accounts Payable disk. 


    File name      Description 
    ------------   --------------------------------------------------- 
    FMAP-DOC ARC - Archived A/P documentation manual (see PRINT-AP). 
    FMAP     000 - A/P module program overlay 0. 
    FMAP     001 - A/P module program overlay 1. 
    FMAP     002 - A/P module program overlay 2. 
    FMAP     003 - A/P module program overlay 3. 
    FMAP     004 - A/P module program overlay 4. 
    FMAP     005 - A/P module program overlay 5. 
    FMAP     006 - A/P module program overlay 6. 
    FMAP     CHN - A/P program module. 
    PRINT-AP BAT - Prints documentation manual on your printer (PRN). 
    PKUNPAK  EXE - De-Archive program for manual. 
    ORDER    DOC - Blank order form which can be printed. 
    README   BAT - Display this information on screen. 
    WORK     APC - WORK demo A/P configuration file. 
    WORK     APK - WORK demo A/P check data file. 
    WORK     APV - WORK demo A/P vendor data file. 
    WORK     APT - WORK demo A/P transaction data file. 
    WORK     CHR - WORK demo Chart of Accounts data file. 
    WORK     CNF - WORK demo System configuration file. 
    WORK     GLT - WORK demo G/L transaction data file. 































                                    PAGE 54




                     FINANCE MANAGER II - ACCOUNTS PAYABLE


                          APPENDIX A - SAMPLE REPORTS 


                               Table of Contents


         Payable Journal ........................................  56 


         Selected Payments Journal ..............................  57 


         Payable Aging Report ...................................  58 


         Schedule of Payables ...................................  59 

         Schedule of Payables - Trended .........................  60 


         Open Invoices Report ...................................  61 


         Vendor Account History .................................  62 


         Vendor Accounts List ...................................  63 


         Vendor Address Labels ..................................  64 


         Non-Posted Transaction Journal .........................  65 


         Payments Journal .......................................  66 


         General Ledger Distribution Report .....................  67 



















                                    PAGE 55



                      FINANCE MANAGER II - ACCOUNTS PAYABLE


JUL-8-89                     YOUR COMPUTER COMPANY                     PAGE 1
11:28am                     WORK Demo Accounts Test
                            ACCOUNTS PAYABLE JOURNAL
                             JAN-89 Through JUN-89

  DATE   VEND           VENDOR NAME         INVOICE   REFER # T     AMOUNT
-------- ---- ----------------------------- -------- -------- - -------------
01-01-89 1800 Tree & Landscape Service      1234     1234     I        350.00
                Yearly maint. contract
01-01-89 1100 Jones Corporation                               I      1,500.00
                Monthly Office Rent
02-01-89 1100 Jones Corporation                               I      1,500.00
                Monthly Office Rent
03-01-89 1100 Jones Corporation                               I      1,500.00
                Monthly Office Rent
03-25-89 1300 Computer Supplies                               I      3,150.00
                Purchase AT clone computer
04-01-89 1500 Coastside Comunications       8700000  8700000  I      5,000.00
                Phone System
04-01-89 1100 Jones Corporation                               I      1,500.00
                Monthly Office Rent
04-07-89 1000 Hooper International          8700001  8700001  I         40.00
                Finance Manager G/L
04-07-89 1000 Hooper International          8700001  8700001  I         15.00
                Finance Manager Acct. Reconcil
04-07-89 1000 Hooper International          8700001  8700001  I         20.00
                Finance Manager Fin. Utilities
04-07-89 1000 Hooper International          8700001  8700001  I         30.00
                Finance Manager A/R
04-07-89 1000 Hooper International          8700001  8700001  I         30.00
                Finance Manager A/P
04-07-89 1000 Hooper International          8700001  8700001  D        -20.25
                Multi order Discount 15%
04-07-89 1200 ABC Office Supplies           8700002  8700002  I        210.00
                Office Supplies
04-15-89 1300 Computer Supplies             8700003  8700003  I         50.00
                Computer cables
04-25-89 1300 Computer Supplies             67534    67534    I     15,000.00
                Purchase Computer Inventory
05-01-89 1800 Tree & Landscape Service      1234     1234     C         15.75
                Finance Charge
05-01-89 1100 Jones Corporation                               I      1,500.00
                Monthly Office Rent
06-01-89 1100 Jones Corporation                               I      1,500.00
                Monthly Office Rent
                                                                -------------
                                                                    32,890.50













                                     PAGE 56


                      FINANCE MANAGER II - ACCOUNTS PAYABLE


Jul-8-89                      YOUR COMPUTER COMPANY                    PAGE 1
11:28am                      WORK Demo Accounts Test
                            SELECTED PAYMENTS JOURNAL

DUE DATE T DESCRIPTION                     INVOICE AMT   DISC. AMT   NET AMOUNT
-------- - ------------------------------ ------------  ---------- ------------
1000 Hooper International
-------------------------
04-22-89 D Multi order discount 15%              20.25                   -20.25
04-22-89 I Finance Manager A/P                   30.00        0.00        30.00
04-22-89 I Finance Manager A/R                   30.00        0.00        30.00
04-22-89 I Finance Manager Fin. Utilities        20.00        0.00        20.00
04-22-89 I Finance Manager Acct. Reconcil        15.00        0.00        15.00
04-22-89 I Finance Manager G/L                   40.00        0.00        40.00
                                                                   ------------
           TOTAL                                                         114.75

1100 Jones Corporation
----------------------
05-16-89 I Monthly office rent                1,500.00        0.00     1,500.00
                                                                   ------------
           TOTAL                                                       1,500.00

1200 ABC Office Supplies
------------------------
04-22-89 I Office supplies                      210.00        0.00       210.00
                                                                   ------------
           TOTAL                                                         210.00

1300 Computer Supplies
----------------------
05-30-89 I Computer cables                       50.00        0.00        50.00
05-09-89 I Computer Supplies                  3,150.00        0.00     3,150.00
                                                                   ------------
           TOTAL                                                       3,200.00

1500 Coastside Communications
-----------------------------
05-16-89 I Phone System                       5,000.00        0.00     5,000.00
                                                                   ------------
           TOTAL                                                       5,000.00

1800 Tree & Landscape Service
-----------------------------
01-31-89 I Yearly maint. contract               350.00        0.00       350.00
                                                                   ------------
           TOTAL                                                         350.00

                                                                   ============
           GRAND TOTAL                                                10,374.75










                                     PAGE 57


                      FINANCE MANAGER II - ACCOUNTS PAYABLE


JUL-8-89                     YOUR COMPUTER COMPANY                     PAGE 1
11:30am                     WORK Demo Accounts Test
                                 PAYABLE AGING
                                 As of JUN-8-89

                                                   ------ Days Past Due -----
VEND      VENDOR NAME                    CURRENT       1 - 30       31 - 60
---- ------------------------------  ------------  ------------  ------------
1000 Hooper International                    0.00          0.00        114.75
1100 Jones Corporation                   3,000.00      1,500.00      1,500.00
1200 ABC Office Supplies                     0.00          0.00        210.00
1300 Computer Supplies                  15,000.00      3,200.00          0.00
1400 Soaps Inc.                              0.00          0.00          0.00
1500 Coastside Comunications                 0.00      5,000.00          0.00
1600 The Happy Balloon Ltd.                  0.00          0.00          0.00
1700 John Smith and Associates               0.00          0.00          0.00
1800 Tree & Landscape Service                0.00         15.75          0.00
                                     ------------  ------------  ------------
                                        18,000.00      9,715.75      1,824.75









































                                     PAGE 58


                      FINANCE MANAGER II - ACCOUNTS PAYABLE


JUL-8-89                     YOUR COMPUTER COMPANY                     PAGE 1
11:31am                     WORK Demo Accounts Test
                              SCHEDULE OF PAYABLES
                                     JUN-89

               VEND         VENDOR NAME                 BALANCE
               ---- -----------------------------   -------------
               1000 Hooper International                   114.75
               1100 Jones Corporation                    4,500.00
               1200 ABC Office Supplies                    210.00
               1300 Computer Supplies                   18,200.00
               1400 Soaps Inc.                               0.00
               1500 Coastside Comunications              5,000.00
               1600 The Happy Balloon Ltd.                   0.00
               1700 John Smith and Associates                0.00
               1800 Tree & Landscape Service               365.75
                                                    -------------
                    Total Payable                       28,390.50










































                                     PAGE 59


                      FINANCE MANAGER II - ACCOUNTS PAYABLE


JUL-8-89                     YOUR COMPUTER COMPANY                     PAGE 1
11:31am                     WORK Demo Accounts Test
                              SCHEDULE OF PAYABLES
                             APR-89 Through JUN-89

VEND         VENDOR NAME                 APR-89         MAY-89         JUN-89
---- ----------------------------  -------------  -------------  -------------
   1 test                                   0.00           0.00           0.00
1000 Hooper International                 114.75         114.75         114.75
1100 Jones Corporation                  1,500.00       3,000.00       4,500.00
1200 ABC Office Supplies                  210.00         210.00         210.00
1300 Computer Supplies                 18,200.00      18,200.00      18,200.00
1400 Soaps Inc.                             0.00           0.00           0.00
1500 Coastside Comunications            5,000.00       5,000.00       5,000.00
1600 The Happy Balloon Ltd.                 0.00           0.00           0.00
1700 John Smith and Associates              0.00           0.00           0.00
1800 Tree & Landscape Service             350.00         365.75         365.75
                                    ------------  -------------  -------------
     Total Payable                     25,374.75      26,890.50      28,390.50









































                                     PAGE 60


                      FINANCE MANAGER II - ACCOUNTS PAYABLE


JUL-8-89                     YOUR COMPUTER COMPANY                     PAGE 1
11:31am                     WORK Demo Accounts Test
                                  OPEN INVOICES

DUE DATE T          DESCRIPTION            INVOICE   ORIG AMOUNT  UNPAID AMOUNT
-------- - ------------------------------ --------- ------------- -------------
1000 Hooper International
-------------------------
04-22-89 I Finance Manager G/L             8700001          40.00         40.00
04-22-89 I Finance Manager Acct. Reconcil  8700001          15.00         15.00
04-22-89 I Finance Manager Fin. Utilities  8700001          20.00         20.00
04-22-89 I Finance Manager A/R             8700001          30.00         30.00
04-22-89 I Finance Manager A/P             8700001          30.00         30.00
04-22-89 D Multi order discount 15%        8700001         -20.25        -20.25
                                                    ------------- -------------
           TOTAL                                           114.75        114.75

1100 Jones Corporation
----------------------
05-16-89 I Monthly office rent                           1,500.00      1,500.00
                                                    ------------- -------------
           TOTAL                                         1,500.00      1,500.00

1200 ABC Office Supplies
------------------------
04-22-89 I Office supplies                 87123           210.00        210.00
                                                    ------------- -------------
           TOTAL                                           210.00        210.00

1300 Computer Supplies
----------------------
05-09-89 I Computer Supplies                             3,150.00      3,150.00
05-30-89 I Computer cables                 6478             50.00         50.00
                                                    ------------- -------------
           TOTAL                                         3,200.00      3,200.00

1500 Coastside Communications
-----------------------------
05-16-89 I Phone System                    870000        5,000.00      5,000.00
                                                    ------------- -------------
           TOTAL                                         5,000.00      5,000.00

1800 Tree & Landscape Service
-----------------------------
01-31-89 I Yearly maint. contract          1234            350.00        350.00
                                                    ------------- -------------
           TOTAL                                           350.00        350.00


                                                                  -------------
           GRAND TOTAL                                                10,374.75









                                     PAGE 61


                      FINANCE MANAGER II - ACCOUNTS PAYABLE


JUL-8-89                     YOUR COMPUTER COMPANY                     PAGE 1
11:31am                     WORK Demo Accounts Test
                             VENDOR ACCOUNT HISTORY
                                     APR-89

  DATE   T          DESCRIPTION            INVOICE  REFERENCE     AMOUNT
-------- - ------------------------------ --------- --------- -------------
1000 Hooper International
-------------------------
           BEGINNING BALANCE                                           0.00
04-07-89 I Finance Manager G/L             8700001   8700001          40.00
04-07-89 I Finance Manager Acct. Reconcil  8700001   8700001          15.00
04-07-89 I Finance Manager Fin. Utilities  8700001   8700001          20.00
04-07-89 I Finance Manager A/R             8700001   8700001          30.00
04-07-89 I Finance Manager A/P             8700001   8700001          30.00
04-07-89 D Multi order discount 15%        8700001   8700001         -20.25
                                                              -------------
           ENDING BALANCE                                            114.75

1100 Jones Corporation
----------------------
           BEGINNING BALANCE                                           0.00
04-01-89 I Monthly office rent                                     1,500.00
                                                              -------------
           ENDING BALANCE                                          1,500.00

1200 ABC Office Supplies
------------------------
           BEGINNING BALANCE                                           0.00
04-07-89 I Office supplies                 87123     87123           210.00
                                                              -------------
           ENDING BALANCE                                            210.00

1300 Computer Supplies
----------------------
           BEGINNING BALANCE                                       3,150.00
04-15-89 I Computer cables                 6478      6478             50.00
                                                              -------------
           ENDING BALANCE                                          3,200.00

1400 Soaps Incorporated
-----------------------
           BEGINNING BALANCE                                           0.00
                                                              -------------
           ENDING BALANCE                                              0.00

1500 Coastside Communications
-----------------------------
           BEGINNING BALANCE                                           0.00
04-01-89 I Phone System                    870000    870000        5,000.00
                                                              -------------
           ENDING BALANCE                                          5,000.00


                                                              -------------
           GRAND TOTAL                                            10,024.75




                                     PAGE 62


                      FINANCE MANAGER II - ACCOUNTS PAYABLE


JUL-8-89                     YOUR COMPUTER COMPANY                     PAGE 1
11:32am                     WORK Demo Accounts Test
                            VENDOR ACCOUNTS LISTING

ACT#    VENDOR NAME & ADDRESS          PHONE          TERMS
---- ------------------------------ ------------ ----------------
1000 Accounts Receivable            813-466-0050 Disc Pct : 0.00 %
     Hooper International                        Discount Days: 0
     P.O. Box 08430                              Net Due Days :10
     Fort Myers FL 33908-8430

1100 Attn: John Jones               800-555-1212 Disc Pct : 0.00 %
     Jones Corporation                           Discount Days: 0
     555 Main Street                             Net Due Days :15
     Fort Myers FL 33111

1200 Mrs. Smith                     206-123-4040 Disc Pct : 0.00 %
     ABC Office Supplies                         Discount Days: 0
     4753 Supply Blvd.                           Net Due Days :15
     Seattle WA 98000

1300 Attn: C. Crabtree              912-555-1212 Disc Pct : 2.00 %
     Computer Supplies                           Discount Days:10
     2010 Seacoast Drive                         Net Due Days :45
     Atlanta GA 11111

1400 Accounts Receivable            813-555-1212 Disc Pct : 0.00 %
     Soaps Inc.                                  Discount Days: 0
     1011 First Street NW                        Net Due Days :30
     Fort Myers FL 33333

1500 Accounts Receivable            813-511-1000 Disc Pct : 2.00 %
     Coastside Comunications                     Discount Days:10
     8100 Tech Center Drive                      Net Due Days :45
     Fort Myers FL 33123

1600 Rick Johnston                  813-444-3333 Disc Pct : 0.00 %
     The Happy Balloon Ltd.                      Discount Days: 0
     6434 102nd Avenue                           Net Due Days :30
     Fort Myers FL 33911

1700 Attn: Accounts Payable Dept.   303-123-4567 Disc Pct : 0.00 %
     John Smith and Associates                   Discount Days: 0
     3000 Main Street                            Net Due Days :45
     Denver CO 80000-0000

1800 Jerry Smith                    213-444-3000 Disc Pct : 0.00 %
     Tree & Landscape Service                    Discount Days: 0
     755 Picosa Street                           Net Due Days :30
     Fort Myers FL 33900










                                     PAGE 63


                      FINANCE MANAGER II - ACCOUNTS PAYABLE


                             YOUR COMPUTER COMPANY
                            WORK Demo Accounts Test
                                 VENDOR LABELS


                                                   1300
                        Attn: C. Crabtree
                        Computer Supplies
                        2010 Seacoast Drive
                        Atlanta GA 11111

                                                   1100
                        Attn: John Jones
                        Jones Corporation
                        555 Main Street
                        Fort Myers FL 33111

                                                   1500
                        Accounts Receivable
                        Coastside Comunications
                        8100 Tech Center Drive
                        Fort Myers FL 33123

                                                   1400
                        Accounts Receivable
                        Soaps Inc.
                        1011 First Street NW
                        Fort Myers FL 33333

                                                   1800
                        Jerry Smith
                        Tree & Landscape Service
                        755 Picosa Street
                        Fort Myers FL 33900

                                                   1000
                        Accounts Receivable
                        Hooper International
                        P.O. Box 08430
                        Fort Myers FL 33908-8430

                                                   1600
                        Rick Johnston
                        The Happy Balloon Ltd.
                        6434 102nd Avenue
                        Fort Myers FL 33911

                                                   1700
                        Attn: Accounts Payable Dept.
                        John Smith and Associates
                        3000 Main Street
                        Denver CO 80000-0000








                                     PAGE 64


                      FINANCE MANAGER II - ACCOUNTS PAYABLE


JUL-8-89                     YOUR COMPUTER COMPANY                     PAGE 1
11:32am                     WORK Demo Accounts Test
                        NON POSTED TRANSACTIONS JOURNAL

  DATE   VEND           VENDOR NAME         INVOICE   REFER # T     AMOUNT
-------- ---- ----------------------------- -------- -------- - -------------
04-07-89 1000 Hooper International          8700001  8700001  I         40.00
                Finance Manager G/L
04-07-89 1000 Hooper International          8700001  8700001  I         15.00
                Finance Manager Acct. Reconcil
04-07-89 1000 Hooper International          8700001  8700001  I         20.00
                Finance Manager Fin. Utilities
04-07-89 1000 Hooper International          8700001  8700001  I         30.00
                Finance Manager A/R
04-07-89 1000 Hooper International          8700001  8700001  I         30.00
                Finance Manager A/P
04-07-89 1000 Hooper International          8700001  8700001  D        -20.25
                Multi order Discount 15%
01-01-89 1100 Jones Corporation                               I      1,500.00
                Monthly Office Rent
02-01-89 1100 Jones Corporation                               I      1,500.00
                Monthly Office Rent
03-01-89 1100 Jones Corporation                               I      1,500.00
                Monthly Office Rent
04-01-89 1100 Jones Corporation                               I      1,500.00
                Monthly Office Rent
05-01-89 1100 Jones Corporation                               I      1,500.00
                Monthly Office Rent
06-01-89 1100 Jones Corporation                               I      1,500.00
                Monthly Office Rent
07-01-89 1100 Jones Corporation                               I      1,500.00
                Monthly Office Rent
04-07-89 1200 ABC Office Supplies           8700002  8700002  I        210.00
                Office Supplies
03-25-89 1300 Computer Supplies                               I      3,150.00
                Purchase AT clone computer
04-15-89 1300 Computer Supplies             8700003  8700003  I         50.00
                Computer cables
04-25-89 1300 Computer Supplies             67534    67534    I     15,000.00
                Purchase Computer Inventory
04-01-89 1500 Coastside Comunications       8700000  8700000  I      5,000.00
                Phone System
01-01-89 1800 Tree & Landscape Service      1234     1234     I        350.00
                Yearly maint. contract
05-01-89 1800 Tree & Landscape Service      1234     1234     C         15.75
                Finance Charge
                                                                -------------
                                                                    34,390.50












                                     PAGE 65


                      FINANCE MANAGER II - ACCOUNTS PAYABLE


JUL-8-89                     YOUR COMPUTER COMPANY                     PAGE 1
11:32am                     WORK Demo Accounts Test
                               PAYMENTS JOURNAL

  DATE   VEND          VENDOR NAME           ACT# CHECK#    AMOUNT
-------- ---- -----------------------------  ---- ------  ------------
05-01-89 1000 Hooper International           1010 1001          114.75
05-01-89 1200 ABC Office Supplies            1010 1002          210.00 VOIDED
05-01-89 1800 Tree & Landscape Service       1010 1003          365.75
05-15-89 1200 ABC Office Supplies            1010 1004          210.00
                                                          ------------
                                                                690.50
















































                                     PAGE 66


                      FINANCE MANAGER II - ACCOUNTS PAYABLE


JUL-8-89                     YOUR COMPUTER COMPANY                     PAGE 1
11:32am                     WORK Demo Accounts Test
                           PAYABLES G/L DISTRIBUTION
                             JAN-89 Through DEC-89

         ACT#       ACCOUNT NAME              DEBITS       CREDITS
         ---- -------------------------    -----------   -----------
         1010 Checking Account #1                             690.50
         1300 Software Inventory              5,000.00
         1400 Hardware Inventory             10,000.00
         1500 IBM Personal Computer           3,150.00
         1530 Other Computer Equipment           50.00
         1550 Computer Software                 114.75
         1600 Office Building                 5,000.00
         2000 Accounts Payable                             29,200.00
         5620 Office expenses                   200.00
         5630 Rent on business property       6,000.00
         5670 Sales tax expense                  10.00
         5900 Misc other expenses               365.75
                                           -----------   -----------
                                             29,890.50     29,890.50







































                                     PAGE 67


                      FINANCE MANAGER II - ACCOUNTS PAYABLE


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




                                     PAGE 68

                      FINANCE MANAGER II - ACCOUNTS PAYABLE

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
     | How did you hear about FINANCE MANAGER?___________________________lap
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

                                     PAGE 69
```
{% endraw %}

## FMAP.DOC

{% raw %}
```









                              FINANCE MANAGER II 





                             ACCOUNTS PAYABLE LITE

                                 USER'S MANUAL 










                                  Version 1.3f












                             Hooper International 
                                P.O. Box 62219 
                          Colorado Springs, CO 80962 















    Copyright (C) 1986-1989 by Hooper International 
    All rights reserved. 








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













                                       i 








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

                                      ii 








    Finance Manager II is User-Supported  (Shareware) software.  If you are
    using this software, and find it to be of value to you, your payment is
    necessary and appreciated. 

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
























                                      iii 







                     FINANCE MANAGER II - ACCOUNTS PAYABLE


                               TABLE OF CONTENTS 


    COPYRIGHT NOTICE ...........................................  i
    RESTRICTED PERMISSION TO COPY ..............................  i 
    WARRANTY INFORMATION ....................................... ii 
    PRODUCT INFORMATION ........................................ ii 

    SECTION ONE - GETTING STARTED 
        1a - Introduction ......................................  3 
        1b - System requirements ...............................  4 
        1c - System Flowcharts .................................  5 
        1d - Using the demo accounts ...........................  6 
        1e - Running the Accounts Payable module ...............  6 


    SECTION TWO - THE ACCOUNTS PAYABLE MAIN MENU ...............  8 


    SECTION THREE - VENDOR ACCOUNTS ............................  9 
        3a - What are vendor accounts ..........................  9 
        3b - Vendor accounts organization ......................  9 
        3c - Vendor accounts data fields .......................  9 
        3d - Getting familiar with vendor account .............. 10 
        3e - Entering your own vendor Accounts ................. 11 
        3f - Changing existing vendors ......................... 13 
        3g - Deleting vendors .................................. 14 
        3h - Suggested method for setting beginning balances.... 14 


    SECTION FOUR - TRANSACTIONS ................................ 16 
        4a - What are transactions ............................. 16 
        4b - Transaction data fields ........................... 16 
        4c - Getting familiar with transactions ................ 18 
        4d - Entering transactions ............................. 19 
        4e - Entering multiple distributions ................... 22 
        4f - Changing existing transactions .................... 23 
        4g - Deleting transactions ............................. 25 
        4h - Points to remember ................................ 26 


    SECTION FIVE - REPORTS ..................................... 28 
        5a - General instructions for generating reports ....... 28 
        5b - Printing the Accounts Payable Journal ............. 29 
        5c - Printing the Payable Aging Report ................. 30 
        5d - Printing the Schedule of Payables Report........... 31 
        5e - Printing the Open Invoices Report ................. 31 
        5f - Printing Vendor Account History ................... 31 
        5g - Printing the Vendor Accounts List ................. 32 
        5h - Printing the Vendor Address Labels ................ 33 
        5i - Printing the Non-posted Transaction Journal ....... 34 
        5j - Printing the Payments Journal ..................... 35 
        5k - Printing the General Ledger Distribution Report ... 35 


    SECTION SIX - MAKING VENDOR PAYMENTS ....................... 37 


                                    PAGE 1




                     FINANCE MANAGER II - ACCOUNTS PAYABLE


        6a - Selecting invoices for payment .................... 37 
        6b - Selecting from all invoices ....................... 40 
        6c - Selecting by Vendor number ........................ 40 
        6d - Selecting by Invoice number ....................... 40 
        6e - Selecting by due date ............................. 41 
        6f - Selecting by discount date ........................ 41 
        6g - Paying specific amount to vendor .................. 41 
        6h - Paying all invoices ............................... 42 
        6i - Clearing selected payments ........................ 42 
        6j - Printing selected payments journal ................ 42 
        6k - Printing checks ................................... 43 
        6l - Voiding printed checks ............................ 44 
        6m - Entering manual checks ............................ 45 


    SECTION SEVEN - OTHER FEATURES AND FUNCTIONS ............... 46 
        7a - Configuration settings ............................ 46 
        7b - Sorting Transactions .............................. 48 
        7c - Posting to the General Ledger ..................... 50 



    SECTION EIGHT - ENHANCEMENTS & HINTS ....................... 52 
        8a - Enhancements by Version ........................... 52 
        8b - Helpful hints and suggestions ..................... 52 


    SECTION NINE - ACCOUNTS PAYABLE DISK FILE NAMES ............ 54 


    APPENDIX A - SAMPLE REPORTS ................................ 55 


    USER COMMENT FORM .......................................... 68 


    ORDER FORM ................................................. 69 





















                                    PAGE 2




                     FINANCE MANAGER II - ACCOUNTS PAYABLE


                         SECTION ONE - GETTING STARTED 

    1a - INTRODUCTION 

    The  FINANCE MANAGER  "Accounts Payable"  module provides  you with  a
    wonderfully simple way  to keep track of all of  your vendor Payables.
    Likewise, you'll be delighted to note  that the module is an essential
    element  in easily  managing your  cash flow.   Vendor (companies  you
    purchase from)  information and balances  are always available  to you
    through on-line features.  This simple-to-use module will also greatly
    enhance  your ability  to  track  and to  pay  your  vendors on  time.
    Multiple distribution  and full  integration into your  General Ledger
    will save you  hours of time, effort and money.   Apply this module to
    your  needs and  you will  be thankful  to us  for allowing  you, with
    little cost, to  become familiar with this  incredible and easy-to-use
    software.  Be assured, we value you  as our customer and are dedicated
    to customer satisfaction. 

    Some of  the helpful,  time-saving, and  outstanding features  of this
    module are as follows: 

          * Vendor accounts features 
              - Zipcode sorted labels 
              - Set discount days and percent 
              - Set net due days 
              - Up to 2,000 vendors (w/640K memory) 
              - Vendor accounts listing in company order 

          * Transaction entry features 
              - Multiple G/L distributions 
              - Prior period adjustments allowed 
              - Miscellaneous debits & credits 
              - Up to 32,000 transactions per year 
              - Easy to correct or delete transactions 
              - Multiple field transaction search capabilities 
              - All transactions can be posted to your GL 
              - Sort by date, Vendor or input order 

          * Check writing features 
            - Uses ANY continuous form top-stub checks 
            - Advanced payment selection options 
            - Selected payments journal 
            - Ability to void printed checks 
            - Manual checks can be entered 
            - Use window envelopes for checks 

          * Reports features 
              - Provides full range of reports including: 
                  Payable journal 
                  Open invoices report
                  Vendor account history 
                  Aging report 
                  Schedule of Payables 
                  Vendor accounts list 
                  Vendor address labels 
                  Non-posted transactions journal 


                                    PAGE 3




                     FINANCE MANAGER II - ACCOUNTS PAYABLE


                  Payments journal 
                  General Ledger distribution report 
              - Print reports on your printer, or 
              - Save reports on disk, or 
              - Display reports on your screen 
              - Reports may be printed multiple times 

          * Integration 
            - Transactions can  be posted  to the  General Ledger  with no
              additional inputs required 

          * Fiscal year features 
              - Use with any fiscal year 
              - Multiple years on-line at one time 
              - Books need not  be closed in order to begin  next month or
                year 

          * System features 
              - Posts to G/L in summary or detail format 
              - Posts each check written to proper G/L account 
              - Defaults for all input fields 
              - No monthly closing hassle to go through 
              - Allows you to post or pre-date all transactions 


    This manual  assumes you  have, from  an accounting  point of  view, a
    working knowledge of how an  accounts-payable system operates.  If you
    are  new  to accounts-payable  bookkeeping,  however,  we suggest  you
    either  consult your  accountant  or get  a  book on  accounts-payable
    bookkeeping.  We  do, nevertheless,  try to  explain each  feature and
    function  in layman  terms,  so it  will be  easy  to understand  with
    minimal confusion.   This system is  uniquely set  up for the  ease of
    operation by the novice.   Consequently, sample basic transactions are
    included on your disk (filename "WORK") for your practice sessions. 


    1b - SYSTEM REQUIREMENTS 

              - FINANCE MANAGER II General Ledger version 1.3 
              - IBM PC, XT, AT, PS/2 or compatible 
              - 384K memory (more memory allows more vendors) 
              - Two 360K disk drives (or 1 DSHD or Hard disk) 
              - Dos 2.0 or higher 















                                    PAGE 4




                     FINANCE MANAGER II - ACCOUNTS PAYABLE



    1c - SYSTEM FLOWCHARTS


                         ---------------------------------
                         |  ACCOUNTS PAYABLE MAIN MENU   | 
                         ---------------------------------
                                         | 
               ---------------------------------------------------- 
               |          |           |        |        |         | 
             INPUT  CHANGE/DELETE  REPORTS   UPDATE  PAYMENTS  UTILITY 
             TRANS  TRANSACTIONS    MENU     VENDOR    MENU      MENU 
                                            ACCOUNTS 




                         ---------------------------------
                         | ACCOUNTS PAYABLE REPORTS MENU | 
                         ---------------------------------
                                         | 
       ---------------------------------------------------------------
       |      |      |       |     |      |      |     |      |      |
      A/P     |   SCHEDULE   |  VENDOR    |    VENDOR  |  PAYMENTS   |
    JOURNAL   |      OF      |  ACCOUNT   |   ADDRESS  |   JOURNAL   |
              |   PAYABLES   |  HISTORY   |    LABELS  |             |
             A/P           OPEN        VENDOR       NON-POST        G/L
            AGING        INVOICES      ACCOUNTS   TRANSACTION  DISTRIBUTION
           REPORT                       LIST        JOURNAL



                                 -----------------
                                 | PAYMENTS MENU | 
                                 -----------------
                                         | 
                       ------------------------------------- 
                       |          |        |        |      | 
                    PAYMENT    SELECTED  PRINT    VOID   MANUAL
                    SELECTION  PAYMENTS  CHECKS  PRINTED CHECKS
                               JOURNAL           CHECKS




                                ------------------
                                | UTILITIES MENU | 
                                ------------------
                                         | 
                   ------------------------------------------- 
                   |            |              |             | 
                  SORT        POST           END OF         A/P 
              TRANSACTIONS TRANSACTIONS      PERIOD    CONFIGURATION
                             TO G/L         POSTING      SETTINGS




                                    PAGE 5




                     FINANCE MANAGER II - ACCOUNTS PAYABLE


    1d - USING THE DEMO ACCOUNTS 

    Included, at  no extra cost with  the "Accounts Payable" module,  is a
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
    demo vendors.  Setting up a new  "live" set of books, however, is very
    simple and is thoroughly described in the following section. 


    1e - RUNNING THE ACCOUNTS PAYABLE MODULE 

    To run  the "Accounts Payable"  module, you  must first install  it by
    following the  instructions under "Installing FINANCE  MANAGER" in the
    "Getting Started"  manual.  After it  is installed, follow  the simple
    steps in the order given below: 


        1. Start up FINANCE  MANAGER per the instructions  in the "Getting
           Started"  Manual.   Upon  starting FINANCE  MANAGER,  you  must
           decide  to  use either  live  data  or the  practice-only  demo
           accounts  data on  the  Accounts Payable  Documentation &  Demo
           disk.  If  you prefer  to practice  and experiment,  you should
           remember to use the Demo disk.  If  you wish to set up your own
           live  Accounts Payable,  you  should put  your FINANCE  MANAGER
           General Ledger data disk in your drive B: (not necessary if you
           have a hard disk). 

        2. At the disk drive prompt, enter the disk drive letter where you
           put your Demo or G/L data disk,  usually drive B: (or C: if you
           have a hard disk). 

        3. At the Enter  Filename prompt, enter the name of  the data file
           you want to use ("WORK" if you  have the demo disk in drive B:,
           or if you are using your live G/L data files enter the filename
           of its files). 

           Remember, you can  only use this module if  you have previously
           set up your General Ledger  data files using the General Ledger
           module.  When using the demo  data files, this has already been
           done for you.

        4. You will now be at the FINANCE MANAGER Master Menu. 

        5. OPTIONAL: If you have not already done so (when you set up your
                     G/L data files),  you may go to  the System Utilities
                     Menu  and  change  any system  defaults.   This  may,


                                    PAGE 6




                     FINANCE MANAGER II - ACCOUNTS PAYABLE


                     however, be done at any  time and is not necessary to
                     run FINANCE MANAGER.  We do, however, suggest you set
                     up the  "Compressed" and "Normal" print  codes before
                     printing the A/P  reports, since you will  find it is
                     required for a few of them. 

        6. Next you  must add an account  to your General Ledger  Chart of
           Accounts.  Set up  an Accounts Payable (type  L) account.  This
           G/L  account is  required  to  use the  A/P  module.  See  your
           General Ledger documentation manual on setting up your Chart of
           Accounts.   If you  have  this account  already  setup in  your
           General Ledger Chart of Accounts, this step is not necessary. 

        7. From the FINANCE MANAGER master menu: If you have floppy disks,
           put your  Accounts Payable program  disk into drive A:  (if you
           have not  already done  so).  Then select  menu "F3",  and this
           will take you into Accounts Payable.  If this is the first time
           you  are using  Accounts Payable  for  this set  of books,  the
           system will ask you: Create File (Y/N), which you should answer
           with  a "Y".   This  procedure will  create  all the  necessary
           Accounts Payable  Data files.  Don't  worry it will  not damage
           your General Ledger data files. 

        8. You should now  select "F6", and then "F4", in  order to set up
           your A/P configuration settings.   This step is important since
           it will set up the interface  with your General Ledger Chart of
           Accounts.  See section 7a for details. 

        9. Return to  the A/P  main menu  and select "F4"  to set  up your
           vendors.  See section three on vendor Accounts. 

       10. After setting up your vendors,  you may print a vendor Accounts
           listing.  See section 5 on reports. 

       11. You  are  now  ready  to input  transactions  (invoices).   See
           section 4 on Transactions. 

       12. After  you have  entered some  transactions, you  may print  an
           Accounts Payable Journal  report to see what  you have entered.
           See section five on reports. 

       13. Print  any other  reports  as required.   The  two most  useful
           reports  are  "OPEN  INVOICES  REPORT"  and  the  "SCHEDULE  OF
           PAYABLES". 

    These basic steps are merely intended  to show you the order of events
    in setting up new Payable books. 











                                    PAGE 7




                     FINANCE MANAGER II - ACCOUNTS PAYABLE


                 SECTION TWO - THE ACCOUNTS PAYABLE MAIN MENU 


    The ACCOUNTS  PAYABLE Main Menu is  the starting point for  all of the
    various  ACCOUNTS  PAYABLE functions.   It  is  a  sort of  "Table  of
    Contents" for the ACCOUNTS PAYABLE module.  It can guide you to all of
    the  other useful  sub-menus and  practical features  of the  time and
    money-saving ACCOUNTS PAYABLE module. 

    The ACCOUNTS PAYABLE Main Menu appears as follows: 

                    |---- ACCOUNTS PAYABLE MAIN MENU ----| 
                    |                                    | 
                    |   ESC  Return to Master Menu       | 
                    |   F1   INPUT Transactions          | 
                    |   F2   CHANGE/Delete Transactions  | 
                    |   F3   REPORTS Menu                | 
                    |   F4   Update VENDOR ACCOUNTS      | 
                    |   F5   PAYMENTS Menu               | 
                    |   F6   A/P Utility Menu            | 
                    |                                    | 
                    |                                    | 
                    |                                    | 
                    |                                    | 
                    |   ENTER YOUR SELECTION:            | 
                    |                                    | 
                    |   A/P Configuration is not setup   | 
                    -------------------------------------- 

    Note that  many of the  selections are used to  go on to  other menus.
    All of  the menu selections  are discussed  in later sections  in this
    documentation.   If  you   get  a  message,  as   above,  saying  "A/P
    Configuration is not  set up" you should set up  your configuration by
    selecting "F6", and then "F4", to get to the configuration setup.  For
    clarification,  this  procedure  is   discussed  in  Section  Seven  -
    Configuration settings. 

    As  mentioned   above,  it   is  essential  that   you  set   up  your
    configuration.   Jump to  Section 7a  to complete  that easy-to-follow
    procedure before continuing. 

    The next step is to set up your vendor accounts.  This procedure is as
    follows: 















                                    PAGE 8




                     FINANCE MANAGER II - ACCOUNTS PAYABLE


                        SECTION THREE - VENDOR ACCOUNTS 

    Your Vendor Accounts are the very foundation of your Accounts Payable.
    To  set up,  or  to  change your  vendors,  select  "F4 Update  Vendor
    Accounts" from the A/P main menu. 


    3a - WHAT ARE VENDOR ACCOUNTS 

    Your  vendor  accounts  are  used  to   keep  track  of  all  of  your
    accounts-payable balances  by vendor  (who you owe  money to).   It is
    important to remember that any company or person you owe money to is a
    vendor and should be set up in this system.  If you purchase something
    with cash and  there is not a balance  due, you do not have  to set up
    that vendor.

    Whenever you receive a bill (invoice or statement) from a company, you
    must set up  that company as a  vendor (if that vendor  is not already
    set up).   Once set up, the  vendor will always be  available for more
    invoices in the future.  Each vendor  must be given an account number,
    to identify  him, which will  then be  used whenever you  are entering
    transactions for that vendor. 


    3b - VENDOR ACCOUNTS ORGANIZATION 

    Your vendor account  numbers, and their order within  the program, are
    totally up to you. 

    An important consideration  for your account numbers is  to group your
    vendors  into account-number  ranges.  For  example, put  all of  your
    out-of-state vendors into accounts 9000-9999.  This may be useful when
    printing reports which ask for an  account range to print (i.e. vendor
    labels).   Different  types  of  businesses may  also  be  grouped  in
    specific  ranges.   Remember  to  always leave  enough  room  for  new
    accounts to be added within your selected range. 


    3c - VENDOR ACCOUNTS DATA FIELDS 

    Each account in  your vendor database represents  one specific vendor.
    As mentioned  above, each vendor  is assigned a unique  account number
    between 1  and 9999.   Along with  this account  number is  kept other
    elements of information  about each vendor.  When you set  up a vendor
    account, the following information about each vendor will be needed: 

    VENDOR NUMBER    A number between  1 and 9999  to be used  to identify
                     each vendor.  This  number is decided by  you and can
                     be any number. 

    ATTENTION        This is used as the first address line for statements
                     and labels.   It is  usually the  accounts receivable
                     contact person for this vendor. 

    COMPANY          Name of the  company.  If a vendor is  not a company,
                     simply enter that vendors name here. 


                                    PAGE 9




                     FINANCE MANAGER II - ACCOUNTS PAYABLE



    ADDRESS          Street  address  for  vendor.  Used  for  checks  and
                     labels. 

    CITY             Vendors city. 

    STATE            Vendors two digit State/Province code. 

    ZIPCODE          Vendors zip or  postal code.  Used for  sort order on
                     mailing labels.  May be used for any other purpose as
                     well. 

    PHONE            Up to 12 character telephone number.  May be used for
                     other information if needed. 

    DISCOUNT PERCENT Percentage  discount for  early  payment of  invoice.
                     Enter percent between 0% and 99%. 

    DISCOUNT DAYS    Number of  days after invoice date  that discount may
                     be applied. 

    NET DUE DAYS     Default number  of days  until purchases  or invoices
                     for  this  vendor  are  due.  You  will  be  able  to
                     override it, if necessary, when entering invoices. 


    3d - GETTING FAMILIAR WITH VENDOR ACCOUNTS 

    Before  beginning to  enter your  own vendors,  follow the  procedures
    below using only the demo accounts. 

    1. From the  Accounts Payable Main  Menu select  F4 on the  menu.  You
       will then be prompted for the following information: 

         Vendor Number (1-9999):____ 
         Attention:______________________________ 
         Company  :______________________________  Discount Pct :_____% 
         Address  :______________________________  Discount Days:__ 
         City     :__________________    State:__  Net Due Days :__ 
         Zipcode  :__________  Phone:____________ 

    2. The cursor will be positioned at the "Vendor Number" prompt. 

       On the  lower half  of your screen,  you can see  a portion  of the
       existing vendors.   Seeing these accounts  is helpful when  you are
       adding new vendors. 

       The highlighted account is a  pointer, showing the selected vendor.
       To  move the  highlighted account  up or  down, press  the "up"  or
       "down"  arrow  keys  on  the  right keypad,  while  the  cursor  is
       positioned at this prompt.  If you  move the default pointer down a
       few lines, notice how the list scrolls. 

       You may select an existing account number by moving the highlighted
       pointer up  or down to  the desired  account and then  pressing the
       enter key.   To set up  a new account, you  simply type in  the new


                                    PAGE 10




                     FINANCE MANAGER II - ACCOUNTS PAYABLE


       account (Vendor) number. 

    3. If you  like, enter  some data  using the  demo files  for hands-on
       practice.  Remember to keep this demo  file well marked, and do not
       confuse its use with your actual file. 

    4. To return to the previous menu, press ESC. 

    Before  entering  your  own  vendors, practice  adding,  changing  and
    deleting vendor  accounts by using  the demo files to  practice.  This
    will  familiarize you  with how  to  enter, change,  or delete  vendor
    accounts.   Changing  and deleting  vendor  accounts  is described  in
    easy-to-follow lay terms in the following how-to sections. 


    3e - ENTERING YOUR OWN VENDOR ACCOUNTS 

    When you actually  enter your own vendor accounts, it  would be a good
    idea to collate  your vendors into some kind of  logical order in your
    mind.  This will be  helpful to you later, each time  you need to look
    up vendors by account number. 

    In order to enter vendor accounts, first switch over to your live data
    files.  To do  this, simply return to the FINANCE  MANAGER Master Menu
    (Press the ESC key  until you are there).  When you  are at the Master
    Menu, enter one  more ESC.  The program will then  prompt "DO YOU WANT
    TO RESTART (Y/N):_" enter "Y". 

    At this point (if you have your  data on floppy disks) switch the data
    disk  to your  live General  Ledger data  diskette.  Select  your real
    General Ledger data  file name.  After you enter  the Accounts Payable
    module ("F3") again,  the system should tell you that  it did not find
    your A/P files.  Enter "Y" at the "Create new Files" prompt.  From the
    A/P main menu, select "F4" and you  will be ready to enter your vendor
    accounts. 

    1. At the  input screen, the cursor  will be positioned at  the vendor
       account  number field.   Unless you  are entering  your very  first
       vendor account, there should be default data in this field. 

    2. Instead of  using the  default data  (if any),  enter a  new vendor
       number of  your choice.   The step  by step  input procedure  for a
       example vendor account is as follows: 

    3. First, enter the vendor account number.  For example: 

                          Vendor Number (1-9999):100_ 

    4. Input the attention name: 

                   Attention:Attn: Accounts Receivable Dept 


    5. Input the company name: 

                    Company:John Smith and Associates_____ 


                                    PAGE 11




                     FINANCE MANAGER II - ACCOUNTS PAYABLE




    6. Input the company mailing address: 

                    Address:3000 Main Street______________ 


    7. Input the city: 

                            City:Denver____________ 


    8. Input the state: 

                                   State:CO 


    9. Input the zip or postal code: 

                              Zipcode:80900_____ 


    10. Input the vendors phone number: 

                              Phone:303-123-4567 


    11. Input the vendors discount percent (if any): 

                              Discount Pct:2____% 

        When entering the discount percent please note that 2% discount is
        input as "2" not ".02". 


    12. Input the  number of  days the  discount percent  is good  for (if
        any): 

                               Discount Days:10 


    13. Input the net due days (the number of days until invoices for this
        vendor will be due): 

                                Net Due Days:30 


    14. If you make  a mistake in a  field, and would like  to correct it,
        you  can easily  back  up  to a  previous  field  by pressing  the
        backspace key. 


    15. Once all of the data has been entered correctly, answer "Y" at the
        "ARE INPUTS CORRECT  Y/N" prompt.  If you answer with  an "N", the
        cursor will return to the Account Number prompt and previous input
        will be ignored. 


                                    PAGE 12




                     FINANCE MANAGER II - ACCOUNTS PAYABLE



    16. If you answered with a "Y", the new account has been added and you
        will  automatically return  to the  vendor account  number prompt.
        You are then ready for more input. 

        NOTE: Please note that  the account number you have  just added is
              inserted into  the list at  the bottom half of  your screen.
              Use  the cursor  keys  (when at  the  account number  field)
              described  above,  in order  to  scroll  through the  active
              vendor  accounts to  search for  the account  you have  just
              added.  If  you have added  your account correctly,  it will
              automatically be in numerical order within this list. 

    17. The cursor will once again be at the account number field.  Repeat
        steps 2 - 16 until you have finished entering all of your vendors. 

    18. In order to return to the menu when you have finished entering, or
        at any  other time that you  wish to return to  menu, simply press
        the ESC key.  Your inputs will then be saved onto the disk and you
        will be back at the previous menu. 

    19. Any time you need to print a current vendor list, you may do so by
        going to  the reports menu  and printing the Vendor  Accounts List
        (see section five - reports). 


    3f - CHANGING EXISTING VENDORS 

    The  steps below  outline the  procedure  for making  changes to  your
    existing vendor accounts. 

    1. Select "F4" at the Accounts Payable main menu. 

    2. With the  cursor at the vendor  number prompt, type in  the account
       number you  wish to change.   Instead of  typing a number,  you may
       accept the default  account by simply pressing ENTER.   In order to
       choose a different  account, move the highlighted  pointer by using
       the up and down keypad arrows. 

    3. Because the account  number you have entered is  an existing vendor
       account, the system prompts: 

                  ACTIVE ACCOUNT Modify/Delete/Quit(M/D/Q):_ 

       Answer this prompt with "M".  You are now in the change mode. 

    4. Make  any  desired  changes.   Press   ENTER  to  leave  any  field
       unchanged. 

    5. If you want to  go back to a previous field  while you are changing
       data, you may do so by pressing the Backspace key. 

    6. After you  have changed the  data, press  return until you  get the
       "ARE  INPUTS CORRECT  (Y/N):"  prompt.  Press  "Y"  to accept  your
       changes.  If  you enter a "N"  instead, the system will  ignore all
       changes to that  account and the cursor will return  to the account


                                    PAGE 13




                     FINANCE MANAGER II - ACCOUNTS PAYABLE


       number field. 


    3g - DELETING VENDORS 

    When  deleting vendors,  there  cannot be  any  transactions for  that
    vendor  number.  If  there  are  transactions for  the  account to  be
    deleted, FINANCE  MANAGER will  not allow the  account to  be deleted.
    Remember, you will not  be able to delete that vendor  unless he has a
    zero balance when you run your end-of-period posting at the end of the
    year.  You will then be able to delete the account. 

    Be sure to practice deleting accounts by simulation on your dummy demo
    accounts.  Do  remember, only after  a bit  of practice should  you be
    deleting a "real" vendor from your real data files. 

    To delete a vendor account follow the steps below: 

    1. Select "F4" at the Accounts Payable main menu. 

    2. Then enter  the number of  the account to  be deleted while  at the
       Account Number prompt.  The system will then prompt: 

                  ACTIVE ACCOUNT Modify/Delete/Quit(M/D/Q):_ 

    3. Select "D".  The account will  be deleted.  However, if the account
       has transactions  entered, the  system will automatically  tell you
       so.  Fortunately,  the account will  not be deleted if  the account
       shows activity. 


    3h - SUGGESTED METHOD FOR SETTING BEGINNING BALANCES 

    When  setting up  your Accounts  Payable, as  well as  vendor starting
    balances, you must  be sure that you are in  balance with your general
    ledger.   This  is a  vitally  important  procedure to  remember  when
    setting  up your  books.  The  following  steps will  insure that  all
    accounts are in balance: 


    1. Set  up all  your vendor  accounts which  have a  non-zero starting
       balance (Section 3). 

    2. Be sure  that your  GENERAL LEDGER Accounts  Payable account  has a
       zero  beginning balance  and current  balance  (i.e. set  up a  new
       account for this modules use only). 

    3. Enter all  vendor starting  balances due  by entering  all non-paid
       invoices  for each  vender (Section  4).  Be  sure to  enter proper
       invoice, discount, and due dates. 

    4. After all have been entered, print a Schedule of Payables or Vendor
       balance report and verify all current vendor balances. 

    5. After you have verified all account balances you are now up to date
       and fully  operational.  If you  want your General  Ledger Accounts


                                    PAGE 14




                     FINANCE MANAGER II - ACCOUNTS PAYABLE


       Payable  account to  reflect the  current balances  of all  Payable
       accounts,  you should  go  to the  A/P Utility  menu  and post  the
       transactions to  the General Ledger.   See section 7d  for detailed
       information. 






















































                                    PAGE 15




                     FINANCE MANAGER II - ACCOUNTS PAYABLE


                          SECTION FOUR - TRANSACTIONS 

    4a - WHAT ARE TRANSACTIONS 

    A transaction  is any  invoice or  statement received  from a  vendor.
    Each time you  receive a bill from  a vendor, it must be  entered as a
    transaction  into the  accounts payable  system.  Likewise,  any other
    adjustments (interest, returns) to the account balance must be entered
    as  a transaction.   The  only  exception is  when  payments are  made
    (checks written).   Checks (payments) are  discussed in section  six -
    Making Vendor Payments. 


    4b - TRANSACTION DATA FIELDS 

    The  transactions input  fields are  described below.   Each of  these
    fields has a  default of the last data entered  into that field.  When
    entering  your   data,  this  default  saves   keystrokes  when  doing
    repetitive data inputting. 

    VENDOR NUMBER  This  is the  account  number for  the  vendor you  are
                   entering a transaction for.   The account number of the
                   company through which the purchase was made.  Required. 


    ITEM DATE      This is the  date when the transaction  occurred, or it
                   is the date on the invoice being entered.  Required. 


    DESCRIPTION    A short description of the transaction.  Optional. 


    REFERENCE NUM  Any 8  character reference  to this  transaction.  This
                   field will  show up on  the check  stub as well  as the
                   Vendor Balance Report.  To clear old data, simply press
                   the space key.  Optional. 


    INVOICE NUM    Any  8 character  invoice  number used  to reference  a
                   specific invoice.  It will be printed on the check stub
                   detail.  In order  to clear old data,  simple press the
                   space key.  Optional. 


    TYPE CODE      The type of  transaction this is, I,D,C  for Invoice (a
                   purchase), Debit (debit to  account or decrease account
                   balance)  and Credit  (credit  to  account or  increase
                   account balance) respectively.   Generally, you will be
                   using  type "I"  when  you receive  an  invoice from  a
                   vendor.   The type  "D" and  "C" are  for miscellaneous
                   balance  changes   (returns,  finance   charges,  etc.)
                   Required. 


    DUE DATE       Date when payment is due for a purchase (type I).  This
                   field  is only  used  for type  "I" transactions.   Its


                                    PAGE 16




                     FINANCE MANAGER II - ACCOUNTS PAYABLE


                   default is the Tran Date above, plus the number of "Net
                   Due Days" set  up for the vendor  selected.  Of course,
                   the default  may be overwritten.  This  is required for
                   type "I" transactions only. 

    DISCOUNT %     Percentage  amount  of  the  allowed  discount  if  the
                   payment  is made  by  the discount  date.  The  default
                   percentage is  the percent entered for  this particular
                   vendor.  The  default may be overwritten  by entering a
                   new number.  Enter a space or a zero in order to clear.
                   Optional. 


    DISCOUNT DATE  This is the  date the invoice must be paid  in order to
                   take  the above  discount  percent off  the bill.   The
                   default  is the  Tran Date  above, plus  the number  of
                   "Discount Days" set  up for  the vendor  selected.  The
                   default  may be  overwritten  by entering  a new  date.
                   This  field is  required only  if there  is a  discount
                   percentage entered above. 


    DEPARTMENT     If you are using  departments, enter the department for
                   which this transaction is for.  Optional. 


    DEBIT ACCOUNT  The  General  Ledger  debit  account  number.   If  you
                   entered a "D" in the type code field above, the General
                   Ledger Accounts  Payable account will  automatically be
                   placed here  since this type of  transaction requires a
                   debit  to  this  account.   Otherwise,  enter  the  G/L
                   account to  debit.  For type "I"  transactions, this is
                   the account  for which the  purchase was made.   If you
                   purchased an  asset, debit  the asset account.   If you
                   purchased an expense item (e.g. office supplies, rent),
                   debit the expense account.  Required. 


    DEBIT AMOUNT   Enter the amount to be debited.  For a vendor purchase,
                   this is  normally the  amount of  the purchase  for the
                   debit account above.  Required. 


    CREDIT ACCOUNT The  General  Ledger  credit account  number.   If  you
                   entered a "I" or "C" in  the type code field above, the
                   General   Ledger   Accounts    Payable   account   will
                   automatically  be  placed  here since  these  types  of
                   transactions   require  a   credit  to   this  account.
                   Otherwise, enter the G/L account to credit.  Required. 


    CREDIT AMOUNT  This amount is  normally the same as  the debit amount.
                   The ability  to change  this amount  is provided  as an
                   advanced feature  for those  who wish to  make multiple
                   distributions to several G/L accounts (see section 4e).
                   The  default will  be the  debit amount  entered above.


                                    PAGE 17




                     FINANCE MANAGER II - ACCOUNTS PAYABLE


                   Required. 


    4c - GETTING FAMILIAR WITH TRANSACTIONS 

    Before beginning to enter your own transactions, follow the procedures
    listed below  by doing  some practice simulation  using only  the demo
    accounts.  This  will aid  you in learning  how to  enter transactions
    without using live data. 

    1. From the Accounts  Payable Main Menu select "F1" on  the menu.  You
       will then be prompted for the following information: 

       Vendor Number:____ 
       Item Date    :__-__-__  Description:______________________________ 
       Reference Num:________  Invoice Num:________    Type Code(I,D,C):_ 
       Due Date     :__-__-__  Discount % :_____%    Disc Date  :__-__-__ 
       Dept  :____ 
       DEBIT :Account:____ _________________________   Amount:___________ 
       CREDIT:Account:____ _________________________   Amount:___________ 


    2. The cursor will be positioned at the "Vendor Number" prompt. 

       On the  lower half of your  screen, you will see  a pop-up accounts
       window which shows a portion of the existing vendors.  Seeing these
       accounts is helpful when you are selecting vendors. 

       The highlighted account is a  pointer, showing the selected vendor.
       In order to  move the highlighted account up or  down, press the up
       or  down arrow  keys  on  the right  keypad,  while  the cursor  is
       positioned at this prompt.  If you  move the default pointer down a
       few lines, notice how the list scrolls. 

       You may select an existing account number by moving the highlighted
       pointer up  or down to  the desired  account and then  pressing the
       enter key. 

       This select-an-account mode will also work for account numbers when
       at the debit account, as well as at the credit account fields. 

       This advanced feature allows you to scroll through your vendors and
       accounts  without ever  having to  memorize,  or even  type in,  an
       account number. 


    3. If you like, enter some data using the demo files for practice. 


    4. To return to the previous menu, press ESC. 


    Before entering  your own transactions, practice  adding, changing and
    deleting transactions by using the  demo files.  This will familiarize
    you with how  to enter, change, or delete  transactions.  Changing and
    deleting transactions is described in the following sections. 


                                    PAGE 18




                     FINANCE MANAGER II - ACCOUNTS PAYABLE



    EVERY transaction has  either a debit or a credit  to the G/L accounts
    Payable account.   For type "D" transactions  it will be a  debit, for
    type "I" and  "C" transactions it will be a  credit.  Because of this,
    FINANCE MANAGER  will always  select that account  number for  you and
    then will skip on over to the amount field.  This amount is the change
    you  are making  to  the vendors  account (the  amount  you owe).   In
    effect, you are  changing the vendor balance while, at  the same time,
    you are  changing the general  ledger accounts Payable  account.  This
    keeps your general ledger Payables  automatically up to date.  Posting
    to the  G/L is,  of course, required  to see this  impact in  your G/L
    reports. 


    4d - ENTERING TRANSACTIONS 

    As you enter each transaction,  FINANCE MANAGER saves this information
    and changes the vendor account as appropriate.  A list of transactions
    entered may be printed by printing the Accounts Payable Journal report
    (see section five - reports). 

    Each transaction entered is automatically checked to insure that it is
    in  balance  (i.e.  debit  amounts   =  credit  amounts).   This  will
    effortlessly insure that you will always be in balance. 

    1. In  order to  begin entering  transactions ,  select "F1"  from the
       Accounts  Payable Main  Menu.  You  will then  be prompted  for the
       following information: 

       Vendor Number:____ 
       Item Date    :__-__-__  Description:______________________________ 
       Reference Num:________  Invoice Num:________    Type Code(I,D,C):_ 
       Due Date     :__-__-__  Discount % :_____%    Disc Date  :__-__-__ 
       Dept  :____ 
       DEBIT :Account:____ _________________________   Amount:___________ 
       CREDIT:Account:____ _________________________   Amount:___________ 


    2. When  entering transactions,  the last  transaction entered  always
       provides the  default data  (unless, of course,  this is  your very
       first transaction).  To accept the default data, simply press ENTER
       and you  will move  to the  next field.  In  order to  change data,
       simply type in the new data and then press ENTER. 


    3. First enter the vendor number: 

                               Vendor Num :2000 

       The existing  vendors are shown  on the  lower half of  the screen.
       You may either  select a vendor from this list  by using the keypad
       arrow keys  (as described earlier), or  you may type in  the vendor
       number.  If  you are using the  keypad arrow keys, be  sure the Num
       Lock key is off. 




                                    PAGE 19




                     FINANCE MANAGER II - ACCOUNTS PAYABLE


    4. Enter the Item (or invoice) date: 

                            Item Date    :_1-_7-89 


    5. Enter the description: 

                  Description:Purchase PC clone computer____ 


    6. Enter the reference number: 

                            Reference Num:T001____ 


    7. Enter the invoice number: 

                             Invoice Num:87-0001_ 

       When  entering the  Invoice  number  you may  use  the  "+" key  to
       automatically  increment  the invoice  number.   Also,  if you  are
       entering the same  number in the invoice field as  in the Reference
       field  you  may   use  the  "="  key  to  input   the  same  number
       automatically. 


    8. Enter the transaction type code: 

                              Type Code(I,D,C):I 


    9. If the  transaction code is  NOT type "I"  then this field  will be
       skipped, otherwise enter the due date: 

                            Due Date     :_2-_6-89 


    10. Enter the Discount percentage: 

                              Discount % :2____% 


    11. Enter the discount date: 

                             Disc Date  :_1-17-89 


    12. If you are  using departments, enter the department  name for this
        transaction. 

                                 Dept   :R&D_ 

    13. If the transaction  type code is "I" or "C",  simply enter the G/L
        account  to be  debited.  For  other types  of transactions,  this
        field will be preset by the system. 



                                    PAGE 20




                     FINANCE MANAGER II - ACCOUNTS PAYABLE


                              DEBIT :Account:1500 

        The  existing G/L  accounts are  shown on  the lower  half of  the
        screen.  You may either select an  account from this list by using
        the keypad arrow  keys (as described earlier), or you  may type in
        the account  number.  If you are  using the keypad arrow  keys, be
        sure the Num Lock key is off. 

        In this example,  we selected General Ledger  account 1500.  Since
        this  transaction was  a type  "I" (Invoice),  we debited  the G/L
        Computer Hardware Asset account since this purchase increased that
        asset account. 


    14. Enter the transaction amount: 

                              Amount:899.89_____ 


    15. If the  transaction type code is  "D" enter the G/L  account to be
        credited.   For  other  types  of transactions,  this  field  will
        automatically be preset by the system. 

                              CREDIT:Account:2000 

        Again, the  existing G/L accounts are  shown on the lower  half of
        the screen.   You may either select  an account from this  list by
        using the  keypad arrow  keys (as described  earlier), or  you may
        type in  the account number.   If you  are using the  keypad arrow
        keys, be sure the Num Lock key is off. 

        In  this  example,  since  the   type  code  is  "I",  the  system
        automatically selects a credit account  2000.  This is the General
        Ledger Accounts Payable account as set up in the configuration. 


    16. Enter the credit amount: 

                              Amount:899.89_____ 

        The default amount  will be the amount entered  above.  You should
        press  ENTER  to  accept  this   amount.   If  you  have  multiple
        distributions,  and need  a  different amount,  see the  following
        section on Entering multiple distributions. 

        If you enter an amount different from the debit amount, the system
        will tell  you that you are  out of balance.  Press  the backspace
        key to backup and correct the amount. 


    17. If you  are entering a  transaction and you want  to go back  to a
        previous field, you may back up by using the Backspace key. 


    18. You may abort the transaction at any time by pressing ESC. 



                                    PAGE 21




                     FINANCE MANAGER II - ACCOUNTS PAYABLE



    19. To accept the transaction: 

                           ARE INPUTS CORRECT(Y/N):Y 

        Answer the prompt with "Y".  The transaction will then be accepted
        and  saved.  The  cursor  will then  automatically  return to  the
        Vendor Number field and be ready for the next transaction.  If you
        answer  this prompt  with a  "N", you  will return  to the  Vendor
        Number field and be allowed to  make any changes or corrections as
        necessary. 


    20. After  you have  entered all  desired transactions,  press ESC  to
        return to the Accounts Payable Main Menu. 


    4e - ENTERING MULTIPLE DISTRIBUTIONS 

    Many transactions have  only one debit and one  credit account.  There
    are  instances, however,  when  there are  several  debits or  credits
    within a single transaction. 

    Let's take the example shown above, except that we had to add 5% sales
    tax to the purchase.  This transaction  would have one debit of 899.89
    to  account 1500  (as above).   However, we  would now  have a  second
    credit of 44.99  for the sales tax, making the  total purchase 944.88.
    This  type of  multiple-distribution transaction  would be  entered as
    follows: 

    1. Follow steps 1-15 in "Entering Transactions" above. 


    2. Enter the credit transaction amount: 

                              Amount:944.88_____ 

       This is the total amount you owe the vendor, purchase plus taxes. 



    3. The  system will  now  tell  you that  the  transaction  is out  of
       balance: 

                TRANSACTION IS OUT OF BALANCE, CONTINUE (Y/N):Y 

       We know that  we did not make  an error, so we would  answer with a
       "Y". 


    4. When the  screen reappears, notice  that there is a  column labeled
       "CUM AMT", at the  right, which registers the  cumulative debit and
       credit amounts entered. 


    5. Now  the second  part  of  the transaction  needs  to be  recorded,


                                    PAGE 22




                     FINANCE MANAGER II - ACCOUNTS PAYABLE


       namely, the sales tax for the transaction. 


    6. Since this is  the second part of the transaction,  the cursor will
       skip down to the debit account  field.  You will notice that all of
       the date, description, type code,  invoice, etc. fields are left as
       they were  in the first  part of  the transaction.  They  cannot be
       changed, and are displayed only  as a reminder of which transaction
       you happen to be working on. 

       Enter the second debit account: 

                              CREDIT:Account:5670 

       In this  example we selected  General Ledger account 5670,  the G/L
       Sales tax expense account. 


    7. Enter the debit amount for account 5670: 

                              Amount:44.99______ 

       Note  that the  system default  for  the amount  is the  cumulative
       remaining amount which is required to balance the transaction.  The
       system thus saves you keystrokes in completing the transaction. 


    8. Answer the "ARE INPUTS CORRECT" prompt with a "Y": 

                          ARE INPUTS CORRECT (Y/N):Y 


    9. In this  example, the transaction would  now be in balance  and you
       would be ready for the next one. 


    You may have a  situation in which there are more  than one credit for
    two debits, or visa versa.  As  long as the cumulative amounts are not
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



                                    PAGE 23




                     FINANCE MANAGER II - ACCOUNTS PAYABLE


    1. Select "F2" at the Accounts Payable Main Menu. 

    2. The system prompts you for "Transaction Search Data". 

    3. Enter data  in the fields where  you want to match  that data.  For
       example, if  you want to search  for all transactions which  have a
       description  of  "Purchase  PC  clone",   you  would  move  to  the
       description field and enter the  description.  Upper and lower case
       does not matter,  and you do not have to  complete the description.
       For example, if you entered only  the first part of the description
       "Purc", FINANCE MANAGER will find all descriptions which begin with
       the letters "purc" (i.e.  "Purchase PC Clone").  You could also add
       a month and  year parameter to  the search and,  consequently, find
       only the "purc" descriptions in a particular month. 

       Any field left blank is an assumed wild card for that field.  Thus,
       if you leave ALL of the fields blank, all transactions are selected
       by the search. 

       While  you are  at one  of  the Account  Number fields  and do  not
       remember the account number you are seeking press "F2" and a pop-up
       window will appear  to select your account number  from.  To remove
       the select-an-account window press the Esc or Enter keys. 

    4. Next, FINANCE  MANAGER II searches for  all transactions containing
       the values you  have specified.  As each  transaction is displayed,
       the program displays the following prompt:

              Modify/Delete/Continue/Reverse/Begin/End/+/-/Quit: 

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


    5. As  long as  you  continue to  answer the  above  prompt with  "C",
       FINANCE MANAGER continues searching for all transactions containing
       the values you have specified.  Selecting  "R" does the same as "C"
       except it searches backwards. 

    6. Answering the prompt  with a "+" causes FINANCE  MANAGER to display
       the  next consecutive  transaction; a  "-" shows  you the  previous
       transaction. 

    7. Entering a "B" or  an "E" will take you to the  Beginning or End of
       the  transaction   file  respectively.   It  ignores   your  search
       parameters. 



                                    PAGE 24




                     FINANCE MANAGER II - ACCOUNTS PAYABLE


    8. When  the search  function  displays the  transaction  you wish  to
       change, answer the prompt with an "M" (Modify). 

    9. You are  now in the change  mode.  ENTER leaves a  field unchanged.
       Change data in any  field by typing in the new  value for the given
       field.  

       If  the transaction  has been  posted to  your General  Ledger, the
       changes  allowed  will be  minimal.   This  is necessary  to  avoid
       out-of-balance  conditions  with your  General  Ledger.   If it  is
       posted,  there  will  be  a "Transaction  Posted  Changes  Limited"
       message on the  screen, and you will only be  allowed to change the
       dates, description,  reference and invoice fields.   Changes to any
       other fields would cause a conflict with your General Ledger. 

       If you  need to  change other  fields of  a posted  transaction, we
       suggest  that  you  enter  a  new  transaction  which  reflects  an
       adjustment to the original transaction. 

    10. If you have made a mistake, or  would like to return to a previous
        field, use  the Backspace  key.  Use  the ESC  key to  ignore your
        changes and return to the Main Menu. 

    11. If your  changes cause the transaction  to be out of  balance, the
        system  will  not accept  your  change.   You must  re-enter  your
        changes,  making  sure  your cumulative  debits  equal  cumulative
        credits. 

        NOTE: If  you  are changing  a  transaction  with multiple  debits
              and/or credits  you can not  change the number of  parts the
              transaction  had  originally.  If  you  need  to change  the
              number of parts of a  transaction we suggest that you delete
              the old transaction and add a completely new one. 


    4g - DELETING TRANSACTIONS 

    To delete or remove a transaction permanently, do the following: 

    1. Select F2 at the Accounts Payable Main Menu. 

    2. Enter  search data  and find  desired transaction  as described  in
       "Changing Transactions". 

    3. When the transaction you wish to delete is displayed on the screen,
       answer "D" at the prompt below. 

              Modify/Delete/Continue/Reverse/Begin/End/+/-/Quit: 


       If  the transaction  has been  posted  to the  General Ledger,  the
       system  will not  allow  you  to delete  it.   This  would cause  a
       conflict with your General Ledger. 

       If you  need to delete  a posted  transaction, we suggest  that you
       enter a new  transaction which reflects a reversal  of the original


                                    PAGE 25




                     FINANCE MANAGER II - ACCOUNTS PAYABLE


       transaction. 

    4. When you are deleting a multiple-part transaction, all parts of the
       transaction are deleted. 

    5. After you have deleted the  desired transaction(s), you may use the
       "Sort" function.  (See Section  Seven "Other features and functions
       - Sorting  Transactions.")  When   sorting  the  transactions,  the
       program  frees  disk  space  which was  formerly  used  by  deleted
       transactions.  



    4h - POINTS TO REMEMBER 

    When entering transactions in this  module, you are basically entering
    transactions with debits  and credits, just as you would  when you are
    entering transactions into  your General Ledger.  In fact,  all of the
    debits  and credits  which you  have entered  will be  posted to  your
    General Ledger  as if you  had entered  them into your  General Ledger
    yourself. 

    The  only difference  between  entering transactions  in your  General
    Ledger,  or the  Accounts Payable  module, is  that this  module keeps
    detailed information on each vendor without cluttering up your General
    Ledger. 

    In fact,  you could set up  an Accounts Payable account  (one for each
    vendor) in  your General Ledger,  and do  exactly what this  module is
    doing for  you.  The  only disadvantage  of doing  that would  be, for
    example, if you  had 200 vendors, you would have  200 Accounts Payable
    accounts  in  your  General  Ledger  Chart  of  Accounts  liabilities.
    Obviously these would clutter up your balance sheet significantly.  Of
    course,  this  module  also  allows  you  to  do  many  vendor-related
    functions which you cannot do with your General Ledger.

    Each transaction must  have at least one debit account  and one credit
    account (just like in General  Ledger transactions).  However, it also
    needs one more account: the vendor account number.  This third account
    number, the vendor  account, is what allows you to  keep track of each
    vendor individually.  Other than this  third account number, and other
    vendor  related inputs,  this transaction  is  the same  as a  General
    Ledger transaction.   Think of  debits and credits  just as  you would
    when entering purchases or payments in your General Ledger. 

    Be  sure to  remember that  any transactions  which are  entered here,
    should not be  entered in your General Ledger  transactions since they
    will automatically be placed there when you post to the General Ledger
    (see section 7c - Posting to the General Ledger).

    The accounts Payable module uses  accrual accounting.  This means that
    purchases are recorded at date of invoice,  and not at the time that a
    payment is  made.  Thus,  when recording a  purchase, the  system will
    always credit your Accounts Payable  account, and you should debit the
    G/L account  which is affected by  this purchase.  At time  of payment
    (when you  generate a check),  the system  will credit your  G/L asset


                                    PAGE 26




                     FINANCE MANAGER II - ACCOUNTS PAYABLE


    checking account and debit the  related vendor account balance as well
    as the G/L Accounts Payables account. 

    There are three different types  of transactions.  A brief description
    of each, as well as typical debits and credits follow: 

                                   ----- GENERAL LEDGER ACCOUNT ------
       DESCRIPTION            TYPE DEBIT             CREDIT
       ---------------------  ---- ----------------- -----------------
       PURCHASE                 I  Asset account or  Accts Payable
       (receive invoice)           Expense account   (System Selected)


       MISC DEBIT TO ACCOUNT    D  Accts Payable     Asset account or
       (For example, A purchase    (System Selected) Expense account
        return or other REDUCTION
        of the account balance).


       MISC CREDIT TO ACCOUNT   C  Asset account or  Accts Payable
       (For example, A finance     Expense account   (System Selected)
        charge or other INCREASE
        of the account balance).
            


































                                    PAGE 27




                     FINANCE MANAGER II - ACCOUNTS PAYABLE


                          SECTION FIVE - REPORTS 

    The  Accounts Payable  Reports  Menu  allows you  to  generate a  full
    spectrum  of Payable  reports from  your database.   The reports  menu
    ("F3" from the Accounts Payable Main Menu) appears as follows: 

                   |--- ACCOUNTS PAYABLE REPORTS MENU ----| 
                   |                                      | 
                   |   ESC  Return to A/P Main Menu       | 
                   |   F1   Payable Journal               | 
                   |   F2   Payable Aging                 | 
                   |   F3   Schedule of Payables          | 
                   |   F4   Open Invoices                 | 
                   |   F5   Vendor Account History        | 
                   |   F6   Vendor Accounts List          | 
                   |   F7   Vendor Address Labels         | 
                   |   F8   Non-Posted Transaction Journal| 
                   |   F9   Payments Journal              | 
                   |   F10  G/L Distribution Report       | 
                   |   ENTER YOUR SELECTION:              | 
                   |                                      | 
                   ---------------------------------------- 

    Reports can be generated to show results for a specific month, a range
    of months,  a quarter, a year,  etc.  All reports may  be generated at
    any time and for any time period.  This means that you are not limited
    to printing a report only once, and it also means that you can print a
    report for a prior period as well. 

    Samples of  each report  are shown  in Appendix A,  or may  be printed
    while using the DEMO accounts. 


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
                       screen,  since reports  will stop  automatically as
                       each screen is full. 

    STOP THE PRINTER:  If, while  printing, you  wish to stop  the printer
                       and return to the menu, all you have to do is press
                       the  "Esc"  key.  Please  keep  in  mind that  most
                       printers have a print buffer, causing the report to
                       continue to  print until the buffer  is empty.  You
                       will, however, return to the menu immediately. 

    When generating  reports, you  have three output  destination options.


                                    PAGE 28




                     FINANCE MANAGER II - ACCOUNTS PAYABLE


    First, you may simply list reports to the screen.  Second, if you have
    a printer, you  can print a hard  copy of the reports.   You also have
    the option of sending  your reports to a disk file,  instead of to the
    printer.   With this  useful option,  reports can  be stored  and then
    printed at a later date. 

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

    These  dates  determine which  months  and  years  are shown  on  your
    reports.  The  ending month and year  must be within twelve  months of
    the starting month  and year.  To get a year-to-date  report you might
    select the  dates 1-89 through 12-89.   Likewise, if you want  a first
    quarter report you could select 1-89 through 3-89. 

    When entering prompts for reports, remember  that you may back up to a
    previous field by pressing the Backspace  key.  If you want to go back
    to the reports menu while you are  at the input screen, press ESC.  If
    you want to return to the  reports menu after your report has finished
    listing to the screen, press ENTER.

    Since there  are different reporting  options within reports,  some of
    the different types  of screen options follow, as well  as the reports
    to which they apply. 


    5b - PRINTING THE ACCOUNTS PAYABLE JOURNAL 

    This report is a listing of all transactions which took place during a
    specified period of time. 

    When printing the Accounts Payable Journal (F1), be sure to employ the
    following procedures: 

    a. Select "F1" from the reports menu. 

    b. The following screen will appear: 





                                    PAGE 29




                     FINANCE MANAGER II - ACCOUNTS PAYABLE


                     TO SCREEN/PRINTER/DISK (S/P/D):_ 

                     ENTER DATE RANGE FOR REPORTS: 
                          STARTING  Month:__  Year:__ 
                            ENDING  Month:__  Year:__ 

                     ENTER TRANSACTION TYPE:_ 
                     (I,D,C or space) 
                      space = all types 
                     ENTER DEPARTMENT:____ 


    c. First, type  in the destination  for your report.  Then,  enter the
       date range wanted for your report. 

    d. Next, enter the type of transactions to be included in this report.
       If you enter  a space all transaction types will  be included.  The
       transaction types  are the  same types  used when  the transactions
       were entered.  Unless you want  only a specific type of transaction
       shown you would normally enter a space (for all types). 

    e. If you are  using departments, enter the department  you would like
       included in this report.  Blank or space equals all departments. 

    f. The report will then be printed. 


    5c - PRINTING THE PAYABLE AGING REPORT 

    This report  shows vendor payables  by due-date age.  It  allows quick
    access in order to  show your payment habits as well  as your past due
    invoice amounts. 

    When printing the Payable Aging  report (F2), the following procedures
    apply: 

    a. Select "F2" from the reports menu. 

    b. The following screen will appear: 

                     TO SCREEN/PRINTER/DISK (S/P/D):_ 

                     ENTER REPORT DATE:__-__-__ 

    c. Type in the destination for your report.  Next, select the date you
       want the report to show.  Normally  this would be the current date.
       By selecting a  future or past date, however, you  can see how your
       vendor aging looked last week, versus  what it might look like next
       week.  By using  different dates, you can readily see  how you have
       been  paying  your  vendors.    You  may,  moreover,  do  cash-flow
       forecasting by selecting a date in the future. 

    d. The report will then be printed. 





                                    PAGE 30




                     FINANCE MANAGER II - ACCOUNTS PAYABLE


    5d - PRINTING THE SCHEDULE OF PAYABLES REPORT 

    This report  shows vendor  balances for  any selected  month.  Trended
    option shows vendor balances, by month, for payables balances history. 

    When printing the Schedule of  Payables (F3), the following procedures
    apply: 

    a. Select "F3" from the reports menu. 

    b. The following screen will appear: 

                     TO SCREEN/PRINTER/DISK (S/P/D):_ 

                     ENTER DATE RANGE FOR REPORTS: 
                             STARTING  Month:__  Year:__ 
                               ENDING  Month:__  Year:__ 

                     DO YOU WANT A TRENDED REPORT(Y/N):_

    c. First, type  in the destination  for your report.  Next,  enter the
       date range wanted for your report. 

    d. Then,  answer the  "Trended Report"  prompt with  "Y" or  "N".  See
       Appendix A for examples of trended and non-trended reports. 

    e. The report will then be printed. 


    5e - PRINTING THE OPEN INVOICES REPORT 

    This report shows all open invoices by vendor regardless of invoice
          and due dates. 

    a. Select "F4" from the reports menu. 

    b. The following screen will appear: 

                     TO SCREEN/PRINTER/DISK (S/P/D):_ 

    c. Type in the destination for your report. 

    d. The report will then be printed. 


    5f - PRINTING VENDOR ACCOUNT HISTORY 

    This  report shows  all  activity (transactions  &  payments) for  any
    selected vendor.  It shows  beginning balance, transactions and ending
    balance for a  specific period of time.  When printing  this report be
    sure to employ the following procedures: 

    a. Select "F5" from the reports menu. 

    b. The following screen will appear: 



                                    PAGE 31




                     FINANCE MANAGER II - ACCOUNTS PAYABLE


                     TO SCREEN/PRINTER/DISK (S/P/D):_ 

                     ENTER DATE RANGE FOR REPORTS: 
                             STARTING  Month:__  Year:__ 
                               ENDING  Month:__  Year:__ 

                     ACCOUNT NUMBER RANGE: 
                                   STARTING ACCOUNT:____ 
                                     ENDING ACCOUNT:____ 

    c. First, type  in the destination  for your report.  Next,  enter the
       date  range wanted  for  your report.   Finally,  enter the  vendor
       account number  range which  you want  printed (i.e.  vendor number
       1000 through 2000). 

    d. The report will then be printed. 



    5g - PRINTING THE VENDOR ACCOUNTS LIST 

    This  report is  a listing  of  all vendors,  showing all  information
    currently set up for each vendor. 

    When printing this report, the following procedures apply: 

    a. Select "F6" from the reports menu. 

    b. The following screen will appear: 

                    |--------- SELECT SORT ORDER --------| 
                    |                                    | 
                    |   ESC  Return to Reports Menu      | 
                    |   F1   Vendor Number Order         | 
                    |   F2   Zipcode Order               | 
                    |   F3   Vendor Name Order           | 
                    |                                    | 
                    |                                    | 
                    |                                    | 
                    |                                    | 
                    |                                    | 
                    |                                    | 
                    |                                    | 
                    |   ENTER YOUR SELECTION:            | 
                    |                                    | 
                    -------------------------------------- 

    c. Select either "F1",  "F2", or "F3" depending on the  order you what
       the labels to be in. 


    d. Next, the following will be prompted: 

                       TO SCREEN/PRINTER/DISK (S/P/D):_ 

    e. Type in the destination for your report. 


                                    PAGE 32




                     FINANCE MANAGER II - ACCOUNTS PAYABLE



    f. The report will then be printed. 


    5h - PRINTING THE VENDOR ADDRESS LABELS 

    This report provides mailing labels for your vendors, sorted by vendor
    account or zipcode order.  Use one-up labels with any length from 6 to
    99 lines per label. 

    When printing this report the following procedures apply: 

    a. Select "F7" from the reports menu. 

    b. The following screen will appear: 

                    |------ VENDOR ADDRESS LABELS -------| 
                    |                                    | 
                    | TO SCREEN/PRINTER/DISK (S/P/D):_   | 
                    |                                    | 
                    |                                    | 
                    | Number of lines per label:__       | 
                    |                                    | 
                    |                                    | 
                    | Labels for Printed Checks(Y/N):_   | 
                    |                                    | 
                    | ACCOUNT NUMBER RANGE:              | 
                    |              STARTING ACCOUNT:____ | 
                    |                ENDING ACCOUNT:____ | 
                    |                                    | 
                    | Do you want an Alignment(Y/N):_    | 
                    -------------------------------------- 

    c. Type in the destination for your report. 

    d. Enter the number of lines per  label (6-99).  This is the number of
       print lines  from the  top of  one label  to the  top of  the next.
       Usually 6 lines for 15/16 inch long labels. 

    e. If you  want labels for only  vendors whom you last  printed checks
       for answer the "Labels for Printed Checks" prompt with "Y".  If you
       want labels  for ALL vendors  answer with  a "N".  If  you answered
       with a "Y" go to step G. 

    f. Enter the  vendor account  number range for  which you  want labels
       (i.e. vendor number 1000 through 3000). 

    g. Finally, load your printer with blank  labels.  In order to be sure
       you have them lined up properly, answer the alignment prompt with a
       "Y".  Repeat  this until your  labels are aligned properly  in your
       printer.  Then answer with a "N". 

    h. Next the following screen will appear: 





                                    PAGE 33




                     FINANCE MANAGER II - ACCOUNTS PAYABLE


                    |--------- SELECT SORT ORDER --------| 
                    |                                    | 
                    |   ESC  Return to Reports Menu      | 
                    |   F1   Vendor Number Order         | 
                    |   F2   Zipcode Order               | 
                    |   F3   Vendor Name Order           | 
                    |                                    | 
                    |                                    | 
                    |                                    | 
                    |                                    | 
                    |                                    | 
                    |                                    | 
                    |                                    | 
                    |   ENTER YOUR SELECTION:            | 
                    |                                    | 
                    -------------------------------------- 

    i. Select either "F1",  "F2", or "F3" depending on the  order you what
       the labels to be in. 


    j. The labels will then be printed. 


    5i - PRINTING THE NON-POSTED TRANSACTION JOURNAL 

    This report is  a listing of ALL transactions which  have not yet been
    posted to your General Ledger. 

    When printing this report the following procedures apply: 

    a. Select "F8" from the reports menu. 

    b. The following screen will appear: 

                     TO SCREEN/PRINTER/DISK (S/P/D):_ 

                     ENTER TRANSACTION TYPE:_ 
                     (I,D,C or space) 
                      space = all types 
                     ENTER DEPARTMENT:____ 


    c. Type in the destination for your report. 

    d. Next, enter the type of transactions to be included in this report.
       If you enter  a space all transaction types will  be included.  The
       transaction types  are the  same types  used when  the transactions
       were entered.  Unless you want  only a specific type of transaction
       shown you would normally enter a space (for all types). 

    e. If you are  using departments, enter the department  you would like
       included in this report.  Blank or space equals all departments. 

    f. The report will then be printed. 



                                    PAGE 34




                     FINANCE MANAGER II - ACCOUNTS PAYABLE



    5j - PRINTING THE PAYMENTS JOURNAL 

    This  report is  a listing  of ALL  payments which  have not  yet been
    posted to your General Ledger. 

    a. Select "F9" from the reports menu. 

    b. The following screen will appear: 

                   |----------- PAYMENTS JOURNAL ----------| 
                   |                                       | 
                   | TO SCREEN/PRINTER/DISK (S/P/D):_      | 
                   |                                       | 
                   | ENTER DATE RANGE FOR REPORTS:         | 
                   |           STARTING Month:__ Year:__   | 
                   |             ENDING Month:__ Year:__   | 
                   |                                       | 
                   | CHECK NUMBER RANGE:                   | 
                   |               STARTING CHECK #:_____  | 
                   |                 ENDING CHECK #:_____  | 
                   |                                       | 
                   | ACCOUNT NUMBER RANGE:                 | 
                   |               STARTING ACCOUNT:____   | 
                   |                 ENDING ACCOUNT:____   | 
                   |                                       | 
                   | Just NON-POSTED Payments (Y/N):_      | 
                   ----------------------------------------- 

    c. First, type  in the destination  for your report. 

    d. Next, enter the date range you would like included in this report. 

    e. Then, enter  the starting and  ending check numbers you  would like
       included  in  this  report.   Check numbers  1  through  99999  for
       starting and ending respectively will include all checks. 

    f. Enter  the  vendor account  number  range  which you  want  printed
       (vendor number 1 through 9999 will print all vendors). 

    g. Lastly, if you only want to  show non-posted payments select "N" at
       the  "Just NON-POSTED  Payments" prompt.   A "Y"  will select  both
       posted and non-posted payments. 

    h. The report will then be printed. 


    5k - PRINTING THE GENERAL LEDGER DISTRIBUTION REPORT 

    This report  shows the total  amount of Accounts  Payable transactions
    (including payments) posted to each General Ledger account number. 

    a. Select "F10" from the reports menu. 

    b. The following screen will appear: 



                                    PAGE 35




                     FINANCE MANAGER II - ACCOUNTS PAYABLE


                     TO SCREEN/PRINTER/DISK (S/P/D):_ 

                     ENTER DATE RANGE FOR REPORTS: 
                          STARTING  Month:__  Year:__ 
                            ENDING  Month:__  Year:__ 

    c. First, type  in the destination  for your report.  Then,  enter the
       date range wanted for your report. 

    d. The report will then be printed. 
















































                                    PAGE 36




                     FINANCE MANAGER II - ACCOUNTS PAYABLE


                     SECTION SIX - MAKING VENDOR PAYMENTS 

    This section discusses the most important and powerful feature of this
    module.  The biggest advantage of using  this module is its ability to
    select invoices  for payment  while allowing the  computer do  all the
    thinking, including writing the check  for you.  Selection of invoices
    for payment by different methods allows you to maximize your cash flow
    and lessen your working capital requirements.  The object is to select
    invoices for payments based on due  dates and discount dates.  You can
    avoid paying invoices  early (and loosing cash flow)  AND avoid paying
    invoices late (and incurring finance charges).  As a result, your bank
    book may  be fatter and  your venders  happier.  In addition,  you may
    even give your company a better credit rating. 

    This section  will discuss how  to select  invoices to pay,  print the
    checks  by  computer,  void  any mistakes,  and  produce  non-computer
    generated checks, if desired.  The heart of these features lies within
    the Payments Menu. 

    In order  to get  to the Payments  Menu, select F5  from the  A/P Main
    Menu.  It appears as follows: 

                    |---------- PAYMENTS MENU -----------| 
                    |                                    | 
                    | ESC Return to A/P Main Menu        | 
                    | F1  PAYMENT Selection Menu         | 
                    | F2  Print Selected Payments Journal| 
                    | F3  Print CHECKS                   | 
                    | F4  VOID Printed Checks            | 
                    | F5  MANUAL Checks                  | 
                    |                                    | 
                    |                                    | 
                    |                                    | 
                    |                                    | 
                    |                                    | 
                    | ENTER YOUR SELECTION:              | 
                    |                                    | 
                    -------------------------------------- 

    We will  discuss each  of the  above menu  selections in  the sections
    which follow. 


    6a - SELECTING INVOICES FOR PAYMENT 

    After  arriving at  the  Payments  Menu, the  first  selection is  "F1
    PAYMENT Selection Menu".  The "F1" menu selection is the first step in
    making vendor  payments (printing checks).   This is how you  tell the
    computer which checks it should  write.  Select "F1" and the following
    screen will appear. 








                                    PAGE 37




                     FINANCE MANAGER II - ACCOUNTS PAYABLE


                      ---------------------------------- 
                      |                                | 
                      |   PAY THROUGH DATE:__-__-__    | 
                      |                                | 
                      ---------------------------------- 

    Enter the  date where  you will  pay invoices.  This  date is  used to
    validate discount  dates and  their expirations.   The default  is the
    current date. 

    After entering the payment date you  will be at the PAYMENTS SELECTION
    MENU.  This screen is seen as follows: 


                    |------ PAYMENT SELECTION MENU ------| 
                    |                                    | 
                    | ESC Return to Payments Menu        | 
                    | F1  Select From ALL                | 
                    | F2  Select By VENDOR Number        | 
                    | F3  Select By INVOICE Number       | 
                    | F4  Select By DUE DATE             | 
                    | F5  Select By DISCOUNT DATE        | 
                    | F6  SPECIFIC AMOUNT to Vendor      | 
                    | F7  PAY ALL                        | 
                    | F8  CLEAR Selected Payments        | 
                    |                                    | 
                    |                                    | 
                    | ENTER YOUR SELECTION:              | 
                    |      TOTAL SELECTED:      0.00     | 
                    -------------------------------------- 

    As  you can  see,  there  are seven  different  methods available  for
    selecting invoices for payment.  Don't let all of the choices worry or
    confuse you.   As we  continue, we  will discuss  each in  detail.  In
    simple terms, the most important selection method is "F4 SELECT By DUE
    DATE".  This is the way you would select payments if your main concern
    was to pay  invoices on the due  date.  The "F8" option  allows you to
    de-select payments in case you make an error in selecting. 

    In  each  of  the  "Select"  (F1 - F5)  options,  you  will  be  shown
    individual  invoices and  you will  be  able to  tell FINANCE  MANAGER
    whether or not you want to pay  that invoice.  F6 and F7 are automatic
    selection methods where the computer  decides what to pay, rather than
    letting you choose.

    After selecting F1,  F2, F3, F4 or F5 FINANCE  MANAGER will search for
    non-paid invoices.  When it finds one, it will display the transaction
    and ask you if you want to  pay it.  The screen display when selecting
    invoices is as follows: 









                                    PAGE 38




                     FINANCE MANAGER II - ACCOUNTS PAYABLE


    Vendor Number:____ 
    Item Date    :__-__-__  Description:______________________________ 
    Reference Num:________  Invoice Num:________    Type Code(I,D,C):_ 
    Due Date     :__-__-__  Discount   :_____%    Disc Date  :__-__-__ 
    Dept  :____ 
    DEBIT :Account:____ _________________________   Amount:___________ 
    CREDIT:Account:____ _________________________   Amount:___________ 


    ------------------------------------------------------------------ 
    | Discount Amount:__________          Total Amount   :__________ | 
    | Approved Amount:__________          Total Paid     :__________ | 
    |                                     Discount Taken :__________ | 
    | Are Inputs Correct (Y/N):_          End Balance Due:__________ | 
    ------------------------------------------------------------------ 

     Select for payment? (Y/N):_           Total Selected:      0.00 


    The procedure for selecting individual  transactions for payment is as
    follows: 

    1. The cursor will be at the "Select for payment?  (Y/N)" prompt.  You
       may skip  (not pay) this transaction  by answering "N", or  you may
       select it for payment by answering "Y". 

       If you  answer with  a no,  the computer will  search for  the next
       transaction  and ask  you again.   Whenever  you wish  to stop  and
       return to the menu, simply press the ESC key. 

    2. If  you answered  with a  yes, you  will then  be prompted  for the
       "Discount Amount" to take on this payment.  If there is no discount
       percentage in  the selected transaction,  this input field  will be
       skipped.

       The default for this field  is calculated from the discount percent
       and amount for  this transaction.  If the payment date  is past the
       discount date, the default discount will be zero.  If you wish, you
       may change the default discount by entering another amount. 

    3. Next, enter the "Approved Amount".  This  is the amount you want to
       pay on this transaction.  This is  the net check amount (i.e. after
       discounts).  If you do not pay  the entire balance (amount due less
       discount), FINANCE MANAGER will not allow you to take a discount at
       this  time and  will  zero  out the  "Discount  Amount".  The  full
       discount may be taken at the time you pay the transaction in full.

    4. Answer the  "Are Inputs Correct?  (Y/N)"  prompt with a "Y"  or "N"
       accordingly.  If  you answer with an  "N", you will be  returned to
       the "Discount Amount" prompt, and if you answer "Y", your selection
       will be saved and you will move to the next unpaid transaction. 

    If you wish  to stop selecting transactions, simply press  the ESC key
    and you will return to the menu. 

    Some points  to remember: when  selecting type "D"  transactions, this


                                    PAGE 39




                     FINANCE MANAGER II - ACCOUNTS PAYABLE


    Miscellaneous Debit is  a reduction in what you owe  a vendor and will
    thus  reduce  the   total  amount  paid.   When   selecting  "D"  type
    transactions,  you are  in effect  applying that  transaction to  your
    payment and thus reducing the amount paid. 

    Also, if you  run through the selection process two  or more times and
    see a  non-zero "Approved Amount",  this means that you  selected that
    amount to  be paid during your  last pass at selecting  payments.  You
    may skip it  (approved amount will remain unchanged)  by not selecting
    it a second  time, or you may  change the amount paid  by selecting it
    for payment again. 

    You may  also de-select a payment  by entering a zero  in the approved
    amount field of a selected transaction. 

    We will now explain each selection method  (and the time to use it) in
    detail. 


    6b - SELECTING FROM ALL INVOICES 

    Choosing the  menu option "F1  Select From  All" allows you  to select
    invoices for payment  by showing you all open  (non-paid) invoices and
    letting you decide  whether or not to  pay each one.  This  is an easy
    way to look at each transaction and decide whether you want to pay it. 


    6c - SELECTING BY VENDOR NUMBER 

    Selecting "F2 Select  by VENDOR Number" will allow you  to select only
    those  transactions for  a specific  vendor.   It is  useful when  one
    vendor must be paid now, or if  you only want to pay specific vendors.
    Upon  choosing this  selection method  you  will be  prompted for  the
    vendor number you want to select.  The prompt is as follows: 

                           ENTER VENDOR NUMBER:____ 

    As with all  account number input requests, you may  select the vendor
    from the list  on the bottom of  the screen by using  the keypad arrow
    keys or by typing in the specific vendor number. 

    After choosing your  vendor you will be at the  payment selection menu
    as described above.  Only transactions for the selected vendor will be
    shown.  You may select any or all transactions for this vendor. 


    6d - SELECTING BY INVOICE NUMBER 

    Selecting "F3 Select by INVOICE Number"  will allow you to select only
    those transactions for a specified  vendor and with a specific invoice
    number.   It is  useful  when a  vendor is  requesting  payment for  a
    specific invoice.

    Upon choosing this selection method you  will be prompted for a vendor
    number and invoice number.  The prompt is as follows: 



                                    PAGE 40




                     FINANCE MANAGER II - ACCOUNTS PAYABLE


                          ENTER VENDOR NUMBER:____ 
                         ENTER INVOICE NUMBER:________ 

    As with all  account number input requests, you may  select the vendor
    from the list  on the bottom of  the screen by using  the keypad arrow
    keys or by typing in the specific vendor number. 

    If you  leave the invoice  number field  blank, you will  be selecting
    those transactions with no invoice number. 

    After entering  your responses  you will be  at the  payment selection
    menu as  described above.  Only  transactions for the  selected vendor
    and invoice number  will be shown.  You  may select any or  all of the
    transactions for this vendor. 


    6e - SELECTING BY DUE DATE 

    Selecting  "F4 Select  by DUE  DATE" will  allow you  to select  those
    transactions  which fall  on or  before  a specified  due date.   This
    selection option  is useful when you  want to pay all  bills which are
    due on or before a certain date (e.g.  pay all bills due by the end of
    the month).

    Invoices  selected for  payment are  based on  the "Pay  through Date"
    selected earlier (see section 6a).  Only transactions which have a due
    date on or before this date will  be displayed.  You may select any or
    all displayed transactions.


    6f - SELECTING BY DISCOUNT DATE 

    Choosing the  menu option "F5 Select  by DISCOUNT DATE" allows  you to
    select transactions for  payment based on the  "Payment Date" selected
    earlier.  All transactions which have a discount date on or before the
    payment date will be shown for selection. 

    This method of selection is a great way to be sure you do not miss any
    discounts  for early  payments.   You may  select all  or  any of  the
    displayed transactions. 


    6g - PAYING SPECIFIC AMOUNT TO VENDOR 

    This selection  option "F6" allows  you pay  a vendor only  a specific
    amount.  This  is a marvelous  method to use  when you prefer  to make
    monthly  payments  to  a  vendor.   The  selected  payments  are  made
    automatically by FINANCE MANAGER, based  on due dates, and with oldest
    transactions  first.  If  any debit  or credit  type transactions  are
    found they are also applied in date order. 

    Upon choosing this selection option you  will be prompted for a vendor
    number and an amount to pay.  The input display is as follows: 

                         ENTER VENDOR NUMBER:____ 
                         ENTER AMOUNT TO PAY:________ 


                                    PAGE 41




                     FINANCE MANAGER II - ACCOUNTS PAYABLE



    As with all  account number input requests, you may  select the vendor
    from the list on  the bottom of the screen simply  by using the keypad
    arrow keys or by typing in the specific vendor number. 

    Next, enter the  amount you want to pay that  vendor.  FINANCE MANAGER
    will then search for transactions  and select them AUTOMATICALLY.  You
    will not be prompted for specific ones to pay. 

    After  FINANCE MANAGER  makes its  selections, both  the total  amount
    requested  to pay  and the  approved to  pay for  that vendor  will be
    displayed. 


    6h - PAYING ALL INVOICES 

    Menu selection "F7" will allow  FINANCE MANAGER to SELECT ALL non-paid
    transactions.  The difference between this and "F1 Select from ALL" is
    that you will  not be prompted for each  transaction.  FINANCE MANAGER
    will  select ALL  for payment  without  any prompts.   This method  of
    payment selection is useful for those persons who have enough money to
    pay all invoices regardless of due dates. 


    6i - CLEARING SELECTED PAYMENTS 

    The menu selection "F8 CLEAR Selected Payments" provides a way to undo
    all of the transactions which you  have selected.  It is useful if you
    have made a mistake in selecting  payments and you want to start over.
    During all selection procedures, you will notice that the total amount
    you  have selected  is  displayed on  the lower  half  of the  screen.
    Likewise,  you will  notice  after you  clear  selected payments  this
    number will return to zero. 


    6j - PRINTING SELECTED PAYMENTS JOURNAL 

    After you  have selected  all the  transactions you  wish to  pay, you
    would return to the PAYMENTS MENU by pressing ESC.  This menu is again
    shown below: 


















                                    PAGE 42




                     FINANCE MANAGER II - ACCOUNTS PAYABLE


                    |---------- PAYMENTS MENU -----------| 
                    |                                    | 
                    | ESC Return to A/P Main Menu        | 
                    | F1  PAYMENT Selection Menu         | 
                    | F2  Print Selected Payments Journal| 
                    | F3  Print CHECKS                   | 
                    | F4  VOID Printed Checks            | 
                    | F5  MANUAL Checks                  | 
                    |                                    | 
                    |                                    | 
                    |                                    | 
                    |                                    | 
                    |                                    | 
                    | ENTER YOUR SELECTION:              | 
                    |                                    | 
                    -------------------------------------- 

    By  selecting "F2"  at  this menu  a journal  report  will be  printed
    listing all of the transactions which  you have selected.  You will be
    prompted for the destination of the report as follows: 

                       TO SCREEN/PRINTER/DISK (S/P/D):_ 

    Select the report destination and  your selected payments journal will
    then be printed.  This report will  show you, by vendor, the amount of
    each check  to be written  as well  as the total  of all checks  to be
    written.  It  is suggested that  you always review this  report before
    actually printing checks so as to ensure you have selected the correct
    transactions  for  payment.  A  sample  of  this  report is  shown  in
    Appendix  A.  After  reviewing  this  report you  are  ready to  print
    checks.  This is clearly described in the following section. 


    6k - PRINTING CHECKS 

    After you  have selected  the transactions for  payment, and  you have
    reviewed the  Selected Payments Journal  report, you are now  ready to
    print checks. 

    Load  your printer  with your  pre-printed continuous-form  checks and
    check to  be sure  you have  set up  the A/P  configuration (utilities
    menu) for the checks you will be using.  Select "F3" from the PAYMENTS
    MENU and you will be prompted for the following information: 

                        Enter DATE for Checks:__-__-__ 
                      Enter Next Check Number:_____ 
                     G/L Check Account Number:_____ 

    1. Enter the date you want printed on your checks. 

    2. Enter the check  number of the first check in  the printer (FINANCE
       MANAGER will increment the number for each check lineup you print).
       If  your checks  do not  happen to  have check  numbers, enter  the
       number  you wish  to have  printed on  the first  LIVE (non-lineup)
       check. 



                                    PAGE 43




                     FINANCE MANAGER II - ACCOUNTS PAYABLE


    3. Enter  the G/L  checking  account  number for  the  checks you  are
       writing.  It is  important that you get the  correct account number
       for the checks  you are writing or  the funds will come  out of the
       wrong account. 

    4. After entering the  account number FINANCE MANAGER will  ask you if
       you want a check lineup pattern printed. 

                      PRINT AN ALIGNMENT PATTERN? (Y/N):_ 

       Answer with  a "Y"  until you  have the  checks properly  lined up.
       When  you answer  this  prompt with  an "N",  your  checks will  be
       printed. 

    Until you answer the alignment pattern with a "N", you may at any time
    abort the  check printing process and  return to the menu  by pressing
    the ESC key. 


    6l - VOIDING PRINTED CHECKS 

    The last check written to a specific vendor may be voided by selecting
    "F4" from the payments menu.  This function will allow you to void the
    last  check  written,  either  computer generated,  or  manual.   Upon
    selecting this function the following screen will appear: 

                           ENTER VENDOR NUMBER:____ 

    Enter the  vendor number of the  check to be voided.   Finance Manager
    will then search  for the check and  ask if you want to  void it.  The
    following screen is displayed: 

                    ------------ VOID CHECK -------------- 
                    |                                    | 
                    |     ENTER VENDOR NUMBER:____       | 
                    |                                    | 
                    |      CHECK NUMBER:______           | 
                    |      VOID THIS CHECK? (Y/N):_      | 
                    |                                    | 
                    -------------------------------------- 

    If you do not wish to void this check, answer with an "N" and you will
    be allowed to enter another vendor number.  If you do want to void it,
    answer with a "Y".   After answering with a "Y", in  order to void the
    check, FINANCE MANAGER will show you a detail of all transactions that
    were paid with  that check.  Then you  will be asked one  more time if
    you want  to "VOID THIS  CHECK?" in order to  be sure that  you really
    want to void it.

    After the check is voided you will return to the Payments Menu. 

    NOTE: You will only  be allowed to void the last  check written to any
          one vendor. 





                                    PAGE 44




                     FINANCE MANAGER II - ACCOUNTS PAYABLE


    6m - ENTERING MANUAL CHECKS 

    Another  great  feature  included  in  the  FINANCE  MANAGER  Accounts
    Payables module is the ability  to enter checks manually.  This allows
    you the flexibility  of hand writing those checks which  must be paid,
    even if you do not want to do a full check run. 

    In order  to use  this feature,  select "F5"  from the  Payments Menu.
    Upon selecting this function you will  be prompted for a vendor number
    as below: 

                           ENTER VENDOR NUMBER:____ 

    After entering  the vendor  number for  the manual  check you  wish to
    write, you  will be allowed to  select transactions for payment  as in
    Section 6c - Selecting by Vendor  Number.  After you have selected the
    transactions for payment, the following screen is displayed: 

                        Enter DATE for Checks:__-__-__ 
                    Enter Manual Check Number:_____ 
                     G/L Check Account Number:_____ 

    Enter the DATE, CHECK NUMBER and G/L ACCOUNT NUMBER as in section 6k -
    Printing Checks.  This procedure is  just like printing checks, except
    that no check will be printed.   The transactions will be paid and the
    total paid by the manual check will be displayed when it is finished. 

    You will then be returned to the Payments Menu for further processing. 






























                                    PAGE 45




                     FINANCE MANAGER II - ACCOUNTS PAYABLE


                 SECTION SEVEN - OTHER FEATURES AND FUNCTIONS 


    The remainder  of the features  and functions of the  Accounts Payable
    Module are  contained on the  Accounts Payable Utilities  Menu.  These
    features  are  also very  powerful  and  important functions  of  this
    module.   To use  these features  select  "F6" while  on the  Accounts
    Payable Main Menu.  The following menu will be shown: 

                    |--------- A/P UTILITY MENU ---------| 
                    |                                    | 
                    |  ESC  Return to A/P Main Menu      | 
                    |  F1   SORT Transactions            | 
                    |  F2   POST Transactions to GL      | 
                    |  F3   A/P CONFIGURATION Settings   | 
                    |                                    | 
                    |                                    | 
                    |                                    | 
                    |                                    | 
                    |                                    | 
                    |                                    | 
                    |                                    | 
                    |  ENTER YOUR SELECTION:             | 
                    |                                    | 
                    -------------------------------------- 

    In this section we will discuss each  function as well as its uses and
    features.  Since  Configuration settings are required  before you will
    be  able to  enter any  transactions, we  will discuss  this selection
    first. 


    7a - CONFIGURATION SETTINGS 

    The configuration settings allow you  to configure this module to your
    specific  company, and  to  its specific  G/L  account numbers.   This
    configuration is  very important to your  transactions, to pre-printed
    continuous form checks, and to GL account numbers used. 

    By  selecting  "F3" from  the  Configuration  menu  you will  see  the
    following screen: 

                         ROW COLUMN

         CHECK NUMBER( 6):27    73           STARTING ROW OF STUB:5 
                 DATE( 8):31    45  MAXIMUM DETAIL LINES PER STUB:14 
          VENDOR NAME(30):35    12              NEXT CHECK NUMBER:1001 
       DECIMAL AMOUNT(14):31    65  VENDOR ADDRESS ON CHECK (Y/N):Y 
    AMOUNT WITH WORDS(50):33    12    DETAIL POSTING TO G/L (Y/N):Y 
        SIZE OF CHECK    :42    80   G/L ACCOUNTS PAYABLE ACCOUNT:____ 


    The configuration settings must be set  up for each set of books which
    you  happen  to have.   Be  sure  to  carefully employ  the  following
    procedures when setting up your configuration settings: 



                                    PAGE 46




                     FINANCE MANAGER II - ACCOUNTS PAYABLE


    1. The input fields on the left are the row and column print positions
       on  the  continuous form  checks  which  you  will be  using.   The
       defaults are  set up to  use the following pre-printed  checks from
       Nebs,  Inc.,  Groton,   MA  01471.   To  order,   phone  toll  free
       1-800-225-9550.  The following product numbers should be ordered. 

             Continuous form checks   Product 9021-1 (1 part) 
                                              9021-2 (2 part) 
                                              9021-3 (3 part) 

             Envelopes                Product 775 DU-O-VUE 

       If you already have continuous form  checks, or want to use another
       kind, you may do so by  changing the check printing location fields
       above.   The only  requirement is  that you  use a  TOP-STUB check.
       There  are eight  print  fields  which you  must  specify for  your
       checks. 

       To set up the A/P check printing  for your own checks you must tell
       FINANCE MANAGER where to print  the fields listed above.  These are
       as follows: 

       CHECK NUMBER:      Location of check number on check 

       DATE:              Location of check date 

       VENDOR NAME:       Location of vendors name (and address) 

       DECIMAL AMOUNT:    Location of decimal amount (i.e.  500.00) 

       AMOUNT WITH WORDS: Location      of     amount      spelled     out
                          (i.e. ***FIVE HUNDRED and NO/100) 

       SIZE OF CHECK:     This is  the number of  rows and columns  on the
                          physical check.  Usually  a check (including top
                          stub) is  7" X 8 1/2",  which is 42 rows  and 85
                          columns. 

       STARTING ROW:      This is  the first line available  (from the 
       OF STUB            top) for printing  detail invoice information on
                          the check stub. 

       MAXIMUM DETAIL:    This is  the maximum  number of  detail text 
       LINES PER STUB     lines that fit on the check stub. 

       Enter the data into the  input fields for your specific pre-printed
       checks.  If your  pre-printed check does not have  a specific field
       for one  of the 5 print  position fields, simply enter  zero (0) in
       the row field and the field will not be printed on your checks. 

    2. Next, enter your starting check  number for your computer generated
       checks.  (i.e. Your first check number.) 

    3. At the  VENDOR ADDRESS  ON CHECK  field, enter  either "Y"  or "N",
       depending on whether or not your vendor's address is printed on the
       check. 


                                    PAGE 47




                     FINANCE MANAGER II - ACCOUNTS PAYABLE



    4. The next  selection "DETAIL  POSTING TO G/L"  allows the  option of
       posting  transactions to  your  G/L in  detail  or summary  format.
       Selecting  detail  posting will  post  each  A/P transaction  as  a
       separate G/L  transaction; while answering  "N" will cause  the A/P
       transactions to be grouped and  summarized keeping the total number
       of transactions posted to the G/L  to a minimum.  Which ever method
       you choose  the financial results will  be the same.  There  is one
       other difference,  however, if you  select the detail  posting each
       A/P  transaction's  date   will  be  used  in   the  resultant  G/L
       transaction while summary posting will prompt you for a date at the
       time you  post and use that  date on the G/L  transactions.  If you
       are a beginner  and do not have many transactions,  we suggest that
       you select "Y" at this prompt. 

    5. Prior to  setting up this configuration,  you must set up  (add) an
       Accounts Payable account  in your General Ledger  Chart of Accounts
       (using the General Ledger module).   This account must be active in
       your General Ledger Chart of Accounts in order to be able to select
       it for use in this configuration  setup.  We recommend that you set
       up the account for use by the Accounts Payable module only (i.e. do
       not use  these account  numbers when  entering your  General Ledger
       transactions). 

       This General Ledger  account is the interface account,  and is used
       to interface the  Accounts Payable Module with  your General Ledger
       Module.   It's  important to  remember  that  the Accounts  Payable
       Module cannot be used without this important GL account. 

       Enter your G/L Accounts Payable  account number at the input field.
       You may use the "select account"  feature by using the keypad arrow
       keys.  For easy selection, all  active G/L liabilities accounts are
       shown on the bottom half of the screen. 

    6. Finally, at the "ARE INPUTS  CORRECT (Y/N)" prompt, answer "Y".  If
       you answer with  "N", you will be returned to  the first input line
       in order to allow you to make more changes. 

    You may leave or skip over any field simply by pressing "return".  You
    may back up to a previous  field simply by pressing the Backspace key.
    Or you can  easily quit, without saving any input,  merely by pressing
    the Esc key. 


    7b - SORTING TRANSACTIONS 

    The Accounts  Payable module normally keeps  transactions organized in
    the order in which they are  input.  The Sort function allows the user
    to choose the  manner in which FINANCE MANAGER sorts  or organizes the
    transactions.  Transactions  may be  sorted either  by date  of input,
    transaction date, or vendor number order. 

    The sort  procedure is not  a required feature  but it is  useful, for
    example, when printing transaction  journals or vendor balance reports
    and you would like to be sure that all transactions are in date order.
    To accomplish this, all you have to  do is select date order sort.  It


                                    PAGE 48




                     FINANCE MANAGER II - ACCOUNTS PAYABLE


    would be  good practice to sort  the transactions once a  month before
    printing  your reports.   The sort  order does  not affect  any report
    balances and it is purely for cosmetic purposes. 

    To start  sorting transactions,  select "F1"  at the  Accounts Payable
    Utilities Menu.  The following screen appears: 

                    |--------- SORT TRANSACTIONS --------| 
                    |                                    | 
                    |   ESC  Return to Utilities Menu    | 
                    |   F1   Transaction Input Order     | 
                    |   F2   Date Order                  | 
                    |   F3   Vendor Number Order         | 
                    |   F4   Department Order            | 
                    |                                    | 
                    |                                    | 
                    |                                    | 
                    |                                    | 
                    |                                    | 
                    |                                    | 
                    |   ENTER YOUR SELECTION:            | 
                    |                                    | 
                    -------------------------------------- 

    1. Select the order in which you would like to sort the transactions. 

    2. FINANCE MANAGER automatically sorts all transactions. 

    3. Press any key to exit and return  to the Main Menu when the sort is
       completed. 


    If you  have more transactions than  memory can hold at  one time, the
    default disk  drive is used  to store  a temporary file  while sorting
    transactions.   It  is  important  to remember,  therefore,  that  the
    default drive must have adequate remaining disk space, and it must NOT
    be "write protected". 

    If there is not enough space on  your default drive to sort your file,
    you must  put an empty  disk in this  drive (usually drive  A:) before
    selecting your sort order.  If you DO run out of disk space, your sort
    is aborted and your transaction file remains unchanged. 

    If a  temporary disk file  is required for  the sort, the  system will
    inform you and it  will allow you to put a blank  disk in your default
    disk drive (NOT YOUR DATA DISK  DRIVE).  It is most important that you
    DO NOT take out your data disk  from its drive, or the program will be
    aborted. 










                                    PAGE 49




                     FINANCE MANAGER II - ACCOUNTS PAYABLE


    7c - POSTING TO THE GENERAL LEDGER 

    Accounts  Payable   Utilities  Menu  selection  "F3"   will  post  all
    transactions entered  into this module  to your General  Ledger books.
    Depending on whether you selected the detail or summary post option in
    the   configuration   (described   above)   your   Accounts   Payables
    transactions are posted individually or are read, then summarized, and
    then posted to your General Ledger in summary format. 

    You'll  be pleased  to know  that this  posting procedure  is a  smart
    procedure.  It will only post  the transactions which have not already
    been posted.  Because of this  incredible time-saving feature, you may
    accidentally post as  many times as you wish without  the worry of any
    errors or double posting. 

    This posting process is mandatory in  order to interface with the G/L,
    and should be done before you run any General Ledger reports.  Without
    running this procedure,  no transactions or activity  from this module
    will be shown on your General Ledger reports. 

    NOTE: After this posting procedure is complete, the transactions which
          were posted  may no longer  be changed  as far as  type, account
          numbers or amounts. 

    Because of this unique safety feature, we recommend that you only post
    after  you are  absolutely  sure all  transactions  have been  entered
    correctly and that any adjustments  have been made.  Generally, a good
    rule for you  to follow is to  post transactions once a  month, on the
    last day of that month. 

    After you  have run this procedure,  you can print any  General Ledger
    reports,  and all  activity  from this  module  will be  automatically
    included in your General Ledger reports. 

    In order  to run this procedure,  select "F2" on the  Accounts Payable
    Utilities menu.  If you selected  the detail post configuration option
    the posting will commence.  If you did not select detail post you will
    be prompted for a date to use when posting transactions to the General
    Ledger.  This prompt is as follows: 

                     Enter Post Transaction Date:__-__-__ 

    When using the summary post option this date will show on your General
    Ledger transactions  as the  date of the  posting.  Usually  this date
    should be the current date (i.e. the last date for the current month).
    If detail post was selected  the General Ledger transactions will have
    the same date as they do in the Accounts Payable Journal. 

    After you enter this date, the  posting process will be run.  You will
    be  able  to  watch its  progress  on  the  screen  as it  is  reading
    transactions and posting them to your General Ledger accounts. 







                                    PAGE 50




                     FINANCE MANAGER II - ACCOUNTS PAYABLE




























































                                    PAGE 51




                     FINANCE MANAGER II - ACCOUNTS PAYABLE


                     SECTION EIGHT - ENHANCEMENTS & HINTS 

    8a - ENHNACEMENTS BY VERSION 

    Version 1.1 - First Release of this module. 

    Version 1.2 - All  changes  included in  version  1.2  of the  General
                  Ledger module. 
                - Provide "=" and "+" keys for invoice number input to get
                  same-as-reference-number or  incremental invoice numbers
                  respectively. 
                - Added label sort by vendor company name. 
                - Added Payments Journal. 
                - Added G/L Distribution Report. 
                - Option to print labels only for last checks printed. 
                - Added transaction type selection to A/P Journal. 
                - Allow  check writing  to  85 columns  for wide  carriage
                  printers. 
                - Added sort by company name to Vendor Accounts Listing. 
                - Added "DETAIL POST" to General Ledger option. 
                - Payments posted to G/L now show Vendor Name, account and
                  check number. 
                - Fixed delete vendor problem. 

    Version 1.3 - All  system  changes  included  in version  1.3  of  the
                  General Ledger module. 
                - Pop-up  vendor selection  window  when selecting  report
                  options. 
                - Pop-up  vendor/chart of  accounts window  while entering
                  transaction search parameters. 
                - Enhanced format of Selected Payments Journal report. 
                - Added Vendor Account History report. 
                - Added new Open Invoices Report. 


    8b - HELPFUL HINTS AND SUGGESTIONS 

    * Keep a  CURRENT backup copy of  your data disk each  time you update
      your data.  This will safeguard against  loss of data due to a power
      or other problem. 

    * Use  the Shift  PrtSc  keys to  make a  hardcopy  of current  screen
      display. 

    * You may run this module WITHOUT  the interface to the General Ledger
      module  simply by  not  posting to  the General  Ledger  (F2 on  the
      Utilities Menu).   The system  will, however,  post to  your General
      Ledger when  you do an  End of Period  Posting (F3 on  the Utilities
      Menu).  To  totally avoid any  interface, simply set up  this module
      with a separate data file, using  a different name than your General
      Ledger data  file name.   You will,  however, have to  set up  a few
      dummy G/L  accounts (the  required G/L accounts  needed to  run this
      module). 

    * When printing checks, be sure that your printer is in its default 10
      character per inch mode, and that it is set with its normal margins.


                                    PAGE 52




                     FINANCE MANAGER II - ACCOUNTS PAYABLE


      Deviation from  this will result  in the  inability to line  up your
      pre-printed checks. 
























































                                    PAGE 53




                     FINANCE MANAGER II - ACCOUNTS PAYABLE


                SECTION NINE - ACCOUNTS PAYABLE DISK FILE NAMES 

    Listed below is a description of files on your accounts Payable disk. 


    File name      Description 
    ------------   --------------------------------------------------- 
    FMAP-DOC ARC - Archived A/P documentation manual (see PRINT-AP). 
    FMAP     000 - A/P module program overlay 0. 
    FMAP     001 - A/P module program overlay 1. 
    FMAP     002 - A/P module program overlay 2. 
    FMAP     003 - A/P module program overlay 3. 
    FMAP     004 - A/P module program overlay 4. 
    FMAP     005 - A/P module program overlay 5. 
    FMAP     006 - A/P module program overlay 6. 
    FMAP     CHN - A/P program module. 
    PRINT-AP BAT - Prints documentation manual on your printer (PRN). 
    PKUNPAK  EXE - De-Archive program for manual. 
    ORDER    DOC - Blank order form which can be printed. 
    README   BAT - Display this information on screen. 
    WORK     APC - WORK demo A/P configuration file. 
    WORK     APK - WORK demo A/P check data file. 
    WORK     APV - WORK demo A/P vendor data file. 
    WORK     APT - WORK demo A/P transaction data file. 
    WORK     CHR - WORK demo Chart of Accounts data file. 
    WORK     CNF - WORK demo System configuration file. 
    WORK     GLT - WORK demo G/L transaction data file. 































                                    PAGE 54




                     FINANCE MANAGER II - ACCOUNTS PAYABLE


                          APPENDIX A - SAMPLE REPORTS 


                               Table of Contents


         Payable Journal ........................................  56 


         Selected Payments Journal ..............................  57 


         Payable Aging Report ...................................  58 


         Schedule of Payables ...................................  59 

         Schedule of Payables - Trended .........................  60 


         Open Invoices Report ...................................  61 


         Vendor Account History .................................  62 


         Vendor Accounts List ...................................  63 


         Vendor Address Labels ..................................  64 


         Non-Posted Transaction Journal .........................  65 


         Payments Journal .......................................  66 


         General Ledger Distribution Report .....................  67 



















                                    PAGE 55



                      FINANCE MANAGER II - ACCOUNTS PAYABLE


JUL-8-89                     YOUR COMPUTER COMPANY                     PAGE 1
11:28am                     WORK Demo Accounts Test
                            ACCOUNTS PAYABLE JOURNAL
                             JAN-89 Through JUN-89

  DATE   VEND           VENDOR NAME         INVOICE   REFER # T     AMOUNT
-------- ---- ----------------------------- -------- -------- - -------------
01-01-89 1800 Tree & Landscape Service      1234     1234     I        350.00
                Yearly maint. contract
01-01-89 1100 Jones Corporation                               I      1,500.00
                Monthly Office Rent
02-01-89 1100 Jones Corporation                               I      1,500.00
                Monthly Office Rent
03-01-89 1100 Jones Corporation                               I      1,500.00
                Monthly Office Rent
03-25-89 1300 Computer Supplies                               I      3,150.00
                Purchase AT clone computer
04-01-89 1500 Coastside Comunications       8700000  8700000  I      5,000.00
                Phone System
04-01-89 1100 Jones Corporation                               I      1,500.00
                Monthly Office Rent
04-07-89 1000 Hooper International          8700001  8700001  I         40.00
                Finance Manager G/L
04-07-89 1000 Hooper International          8700001  8700001  I         15.00
                Finance Manager Acct. Reconcil
04-07-89 1000 Hooper International          8700001  8700001  I         20.00
                Finance Manager Fin. Utilities
04-07-89 1000 Hooper International          8700001  8700001  I         30.00
                Finance Manager A/R
04-07-89 1000 Hooper International          8700001  8700001  I         30.00
                Finance Manager A/P
04-07-89 1000 Hooper International          8700001  8700001  D        -20.25
                Multi order Discount 15%
04-07-89 1200 ABC Office Supplies           8700002  8700002  I        210.00
                Office Supplies
04-15-89 1300 Computer Supplies             8700003  8700003  I         50.00
                Computer cables
04-25-89 1300 Computer Supplies             67534    67534    I     15,000.00
                Purchase Computer Inventory
05-01-89 1800 Tree & Landscape Service      1234     1234     C         15.75
                Finance Charge
05-01-89 1100 Jones Corporation                               I      1,500.00
                Monthly Office Rent
06-01-89 1100 Jones Corporation                               I      1,500.00
                Monthly Office Rent
                                                                -------------
                                                                    32,890.50













                                     PAGE 56


                      FINANCE MANAGER II - ACCOUNTS PAYABLE


Jul-8-89                      YOUR COMPUTER COMPANY                    PAGE 1
11:28am                      WORK Demo Accounts Test
                            SELECTED PAYMENTS JOURNAL

DUE DATE T DESCRIPTION                     INVOICE AMT   DISC. AMT   NET AMOUNT
-------- - ------------------------------ ------------  ---------- ------------
1000 Hooper International
-------------------------
04-22-89 D Multi order discount 15%              20.25                   -20.25
04-22-89 I Finance Manager A/P                   30.00        0.00        30.00
04-22-89 I Finance Manager A/R                   30.00        0.00        30.00
04-22-89 I Finance Manager Fin. Utilities        20.00        0.00        20.00
04-22-89 I Finance Manager Acct. Reconcil        15.00        0.00        15.00
04-22-89 I Finance Manager G/L                   40.00        0.00        40.00
                                                                   ------------
           TOTAL                                                         114.75

1100 Jones Corporation
----------------------
05-16-89 I Monthly office rent                1,500.00        0.00     1,500.00
                                                                   ------------
           TOTAL                                                       1,500.00

1200 ABC Office Supplies
------------------------
04-22-89 I Office supplies                      210.00        0.00       210.00
                                                                   ------------
           TOTAL                                                         210.00

1300 Computer Supplies
----------------------
05-30-89 I Computer cables                       50.00        0.00        50.00
05-09-89 I Computer Supplies                  3,150.00        0.00     3,150.00
                                                                   ------------
           TOTAL                                                       3,200.00

1500 Coastside Communications
-----------------------------
05-16-89 I Phone System                       5,000.00        0.00     5,000.00
                                                                   ------------
           TOTAL                                                       5,000.00

1800 Tree & Landscape Service
-----------------------------
01-31-89 I Yearly maint. contract               350.00        0.00       350.00
                                                                   ------------
           TOTAL                                                         350.00

                                                                   ============
           GRAND TOTAL                                                10,374.75










                                     PAGE 57


                      FINANCE MANAGER II - ACCOUNTS PAYABLE


JUL-8-89                     YOUR COMPUTER COMPANY                     PAGE 1
11:30am                     WORK Demo Accounts Test
                                 PAYABLE AGING
                                 As of JUN-8-89

                                                   ------ Days Past Due -----
VEND      VENDOR NAME                    CURRENT       1 - 30       31 - 60
---- ------------------------------  ------------  ------------  ------------
1000 Hooper International                    0.00          0.00        114.75
1100 Jones Corporation                   3,000.00      1,500.00      1,500.00
1200 ABC Office Supplies                     0.00          0.00        210.00
1300 Computer Supplies                  15,000.00      3,200.00          0.00
1400 Soaps Inc.                              0.00          0.00          0.00
1500 Coastside Comunications                 0.00      5,000.00          0.00
1600 The Happy Balloon Ltd.                  0.00          0.00          0.00
1700 John Smith and Associates               0.00          0.00          0.00
1800 Tree & Landscape Service                0.00         15.75          0.00
                                     ------------  ------------  ------------
                                        18,000.00      9,715.75      1,824.75









































                                     PAGE 58


                      FINANCE MANAGER II - ACCOUNTS PAYABLE


JUL-8-89                     YOUR COMPUTER COMPANY                     PAGE 1
11:31am                     WORK Demo Accounts Test
                              SCHEDULE OF PAYABLES
                                     JUN-89

               VEND         VENDOR NAME                 BALANCE
               ---- -----------------------------   -------------
               1000 Hooper International                   114.75
               1100 Jones Corporation                    4,500.00
               1200 ABC Office Supplies                    210.00
               1300 Computer Supplies                   18,200.00
               1400 Soaps Inc.                               0.00
               1500 Coastside Comunications              5,000.00
               1600 The Happy Balloon Ltd.                   0.00
               1700 John Smith and Associates                0.00
               1800 Tree & Landscape Service               365.75
                                                    -------------
                    Total Payable                       28,390.50










































                                     PAGE 59


                      FINANCE MANAGER II - ACCOUNTS PAYABLE


JUL-8-89                     YOUR COMPUTER COMPANY                     PAGE 1
11:31am                     WORK Demo Accounts Test
                              SCHEDULE OF PAYABLES
                             APR-89 Through JUN-89

VEND         VENDOR NAME                 APR-89         MAY-89         JUN-89
---- ----------------------------  -------------  -------------  -------------
   1 test                                   0.00           0.00           0.00
1000 Hooper International                 114.75         114.75         114.75
1100 Jones Corporation                  1,500.00       3,000.00       4,500.00
1200 ABC Office Supplies                  210.00         210.00         210.00
1300 Computer Supplies                 18,200.00      18,200.00      18,200.00
1400 Soaps Inc.                             0.00           0.00           0.00
1500 Coastside Comunications            5,000.00       5,000.00       5,000.00
1600 The Happy Balloon Ltd.                 0.00           0.00           0.00
1700 John Smith and Associates              0.00           0.00           0.00
1800 Tree & Landscape Service             350.00         365.75         365.75
                                    ------------  -------------  -------------
     Total Payable                     25,374.75      26,890.50      28,390.50









































                                     PAGE 60


                      FINANCE MANAGER II - ACCOUNTS PAYABLE


JUL-8-89                     YOUR COMPUTER COMPANY                     PAGE 1
11:31am                     WORK Demo Accounts Test
                                  OPEN INVOICES

DUE DATE T          DESCRIPTION            INVOICE   ORIG AMOUNT  UNPAID AMOUNT
-------- - ------------------------------ --------- ------------- -------------
1000 Hooper International
-------------------------
04-22-89 I Finance Manager G/L             8700001          40.00         40.00
04-22-89 I Finance Manager Acct. Reconcil  8700001          15.00         15.00
04-22-89 I Finance Manager Fin. Utilities  8700001          20.00         20.00
04-22-89 I Finance Manager A/R             8700001          30.00         30.00
04-22-89 I Finance Manager A/P             8700001          30.00         30.00
04-22-89 D Multi order discount 15%        8700001         -20.25        -20.25
                                                    ------------- -------------
           TOTAL                                           114.75        114.75

1100 Jones Corporation
----------------------
05-16-89 I Monthly office rent                           1,500.00      1,500.00
                                                    ------------- -------------
           TOTAL                                         1,500.00      1,500.00

1200 ABC Office Supplies
------------------------
04-22-89 I Office supplies                 87123           210.00        210.00
                                                    ------------- -------------
           TOTAL                                           210.00        210.00

1300 Computer Supplies
----------------------
05-09-89 I Computer Supplies                             3,150.00      3,150.00
05-30-89 I Computer cables                 6478             50.00         50.00
                                                    ------------- -------------
           TOTAL                                         3,200.00      3,200.00

1500 Coastside Communications
-----------------------------
05-16-89 I Phone System                    870000        5,000.00      5,000.00
                                                    ------------- -------------
           TOTAL                                         5,000.00      5,000.00

1800 Tree & Landscape Service
-----------------------------
01-31-89 I Yearly maint. contract          1234            350.00        350.00
                                                    ------------- -------------
           TOTAL                                           350.00        350.00


                                                                  -------------
           GRAND TOTAL                                                10,374.75









                                     PAGE 61


                      FINANCE MANAGER II - ACCOUNTS PAYABLE


JUL-8-89                     YOUR COMPUTER COMPANY                     PAGE 1
11:31am                     WORK Demo Accounts Test
                             VENDOR ACCOUNT HISTORY
                                     APR-89

  DATE   T          DESCRIPTION            INVOICE  REFERENCE     AMOUNT
-------- - ------------------------------ --------- --------- -------------
1000 Hooper International
-------------------------
           BEGINNING BALANCE                                           0.00
04-07-89 I Finance Manager G/L             8700001   8700001          40.00
04-07-89 I Finance Manager Acct. Reconcil  8700001   8700001          15.00
04-07-89 I Finance Manager Fin. Utilities  8700001   8700001          20.00
04-07-89 I Finance Manager A/R             8700001   8700001          30.00
04-07-89 I Finance Manager A/P             8700001   8700001          30.00
04-07-89 D Multi order discount 15%        8700001   8700001         -20.25
                                                              -------------
           ENDING BALANCE                                            114.75

1100 Jones Corporation
----------------------
           BEGINNING BALANCE                                           0.00
04-01-89 I Monthly office rent                                     1,500.00
                                                              -------------
           ENDING BALANCE                                          1,500.00

1200 ABC Office Supplies
------------------------
           BEGINNING BALANCE                                           0.00
04-07-89 I Office supplies                 87123     87123           210.00
                                                              -------------
           ENDING BALANCE                                            210.00

1300 Computer Supplies
----------------------
           BEGINNING BALANCE                                       3,150.00
04-15-89 I Computer cables                 6478      6478             50.00
                                                              -------------
           ENDING BALANCE                                          3,200.00

1400 Soaps Incorporated
-----------------------
           BEGINNING BALANCE                                           0.00
                                                              -------------
           ENDING BALANCE                                              0.00

1500 Coastside Communications
-----------------------------
           BEGINNING BALANCE                                           0.00
04-01-89 I Phone System                    870000    870000        5,000.00
                                                              -------------
           ENDING BALANCE                                          5,000.00


                                                              -------------
           GRAND TOTAL                                            10,024.75




                                     PAGE 62


                      FINANCE MANAGER II - ACCOUNTS PAYABLE


JUL-8-89                     YOUR COMPUTER COMPANY                     PAGE 1
11:32am                     WORK Demo Accounts Test
                            VENDOR ACCOUNTS LISTING

ACT#    VENDOR NAME & ADDRESS          PHONE          TERMS
---- ------------------------------ ------------ ----------------
1000 Accounts Receivable            813-466-0050 Disc Pct : 0.00 %
     Hooper International                        Discount Days: 0
     P.O. Box 08430                              Net Due Days :10
     Fort Myers FL 33908-8430

1100 Attn: John Jones               800-555-1212 Disc Pct : 0.00 %
     Jones Corporation                           Discount Days: 0
     555 Main Street                             Net Due Days :15
     Fort Myers FL 33111

1200 Mrs. Smith                     206-123-4040 Disc Pct : 0.00 %
     ABC Office Supplies                         Discount Days: 0
     4753 Supply Blvd.                           Net Due Days :15
     Seattle WA 98000

1300 Attn: C. Crabtree              912-555-1212 Disc Pct : 2.00 %
     Computer Supplies                           Discount Days:10
     2010 Seacoast Drive                         Net Due Days :45
     Atlanta GA 11111

1400 Accounts Receivable            813-555-1212 Disc Pct : 0.00 %
     Soaps Inc.                                  Discount Days: 0
     1011 First Street NW                        Net Due Days :30
     Fort Myers FL 33333

1500 Accounts Receivable            813-511-1000 Disc Pct : 2.00 %
     Coastside Comunications                     Discount Days:10
     8100 Tech Center Drive                      Net Due Days :45
     Fort Myers FL 33123

1600 Rick Johnston                  813-444-3333 Disc Pct : 0.00 %
     The Happy Balloon Ltd.                      Discount Days: 0
     6434 102nd Avenue                           Net Due Days :30
     Fort Myers FL 33911

1700 Attn: Accounts Payable Dept.   303-123-4567 Disc Pct : 0.00 %
     John Smith and Associates                   Discount Days: 0
     3000 Main Street                            Net Due Days :45
     Denver CO 80000-0000

1800 Jerry Smith                    213-444-3000 Disc Pct : 0.00 %
     Tree & Landscape Service                    Discount Days: 0
     755 Picosa Street                           Net Due Days :30
     Fort Myers FL 33900










                                     PAGE 63


                      FINANCE MANAGER II - ACCOUNTS PAYABLE


                             YOUR COMPUTER COMPANY
                            WORK Demo Accounts Test
                                 VENDOR LABELS


                                                   1300
                        Attn: C. Crabtree
                        Computer Supplies
                        2010 Seacoast Drive
                        Atlanta GA 11111

                                                   1100
                        Attn: John Jones
                        Jones Corporation
                        555 Main Street
                        Fort Myers FL 33111

                                                   1500
                        Accounts Receivable
                        Coastside Comunications
                        8100 Tech Center Drive
                        Fort Myers FL 33123

                                                   1400
                        Accounts Receivable
                        Soaps Inc.
                        1011 First Street NW
                        Fort Myers FL 33333

                                                   1800
                        Jerry Smith
                        Tree & Landscape Service
                        755 Picosa Street
                        Fort Myers FL 33900

                                                   1000
                        Accounts Receivable
                        Hooper International
                        P.O. Box 08430
                        Fort Myers FL 33908-8430

                                                   1600
                        Rick Johnston
                        The Happy Balloon Ltd.
                        6434 102nd Avenue
                        Fort Myers FL 33911

                                                   1700
                        Attn: Accounts Payable Dept.
                        John Smith and Associates
                        3000 Main Street
                        Denver CO 80000-0000








                                     PAGE 64


                      FINANCE MANAGER II - ACCOUNTS PAYABLE


JUL-8-89                     YOUR COMPUTER COMPANY                     PAGE 1
11:32am                     WORK Demo Accounts Test
                        NON POSTED TRANSACTIONS JOURNAL

  DATE   VEND           VENDOR NAME         INVOICE   REFER # T     AMOUNT
-------- ---- ----------------------------- -------- -------- - -------------
04-07-89 1000 Hooper International          8700001  8700001  I         40.00
                Finance Manager G/L
04-07-89 1000 Hooper International          8700001  8700001  I         15.00
                Finance Manager Acct. Reconcil
04-07-89 1000 Hooper International          8700001  8700001  I         20.00
                Finance Manager Fin. Utilities
04-07-89 1000 Hooper International          8700001  8700001  I         30.00
                Finance Manager A/R
04-07-89 1000 Hooper International          8700001  8700001  I         30.00
                Finance Manager A/P
04-07-89 1000 Hooper International          8700001  8700001  D        -20.25
                Multi order Discount 15%
01-01-89 1100 Jones Corporation                               I      1,500.00
                Monthly Office Rent
02-01-89 1100 Jones Corporation                               I      1,500.00
                Monthly Office Rent
03-01-89 1100 Jones Corporation                               I      1,500.00
                Monthly Office Rent
04-01-89 1100 Jones Corporation                               I      1,500.00
                Monthly Office Rent
05-01-89 1100 Jones Corporation                               I      1,500.00
                Monthly Office Rent
06-01-89 1100 Jones Corporation                               I      1,500.00
                Monthly Office Rent
07-01-89 1100 Jones Corporation                               I      1,500.00
                Monthly Office Rent
04-07-89 1200 ABC Office Supplies           8700002  8700002  I        210.00
                Office Supplies
03-25-89 1300 Computer Supplies                               I      3,150.00
                Purchase AT clone computer
04-15-89 1300 Computer Supplies             8700003  8700003  I         50.00
                Computer cables
04-25-89 1300 Computer Supplies             67534    67534    I     15,000.00
                Purchase Computer Inventory
04-01-89 1500 Coastside Comunications       8700000  8700000  I      5,000.00
                Phone System
01-01-89 1800 Tree & Landscape Service      1234     1234     I        350.00
                Yearly maint. contract
05-01-89 1800 Tree & Landscape Service      1234     1234     C         15.75
                Finance Charge
                                                                -------------
                                                                    34,390.50












                                     PAGE 65


                      FINANCE MANAGER II - ACCOUNTS PAYABLE


JUL-8-89                     YOUR COMPUTER COMPANY                     PAGE 1
11:32am                     WORK Demo Accounts Test
                               PAYMENTS JOURNAL

  DATE   VEND          VENDOR NAME           ACT# CHECK#    AMOUNT
-------- ---- -----------------------------  ---- ------  ------------
05-01-89 1000 Hooper International           1010 1001          114.75
05-01-89 1200 ABC Office Supplies            1010 1002          210.00 VOIDED
05-01-89 1800 Tree & Landscape Service       1010 1003          365.75
05-15-89 1200 ABC Office Supplies            1010 1004          210.00
                                                          ------------
                                                                690.50
















































                                     PAGE 66


                      FINANCE MANAGER II - ACCOUNTS PAYABLE


JUL-8-89                     YOUR COMPUTER COMPANY                     PAGE 1
11:32am                     WORK Demo Accounts Test
                           PAYABLES G/L DISTRIBUTION
                             JAN-89 Through DEC-89

         ACT#       ACCOUNT NAME              DEBITS       CREDITS
         ---- -------------------------    -----------   -----------
         1010 Checking Account #1                             690.50
         1300 Software Inventory              5,000.00
         1400 Hardware Inventory             10,000.00
         1500 IBM Personal Computer           3,150.00
         1530 Other Computer Equipment           50.00
         1550 Computer Software                 114.75
         1600 Office Building                 5,000.00
         2000 Accounts Payable                             29,200.00
         5620 Office expenses                   200.00
         5630 Rent on business property       6,000.00
         5670 Sales tax expense                  10.00
         5900 Misc other expenses               365.75
                                           -----------   -----------
                                             29,890.50     29,890.50







































                                     PAGE 67


                      FINANCE MANAGER II - ACCOUNTS PAYABLE


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




                                     PAGE 68

                      FINANCE MANAGER II - ACCOUNTS PAYABLE

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
     | How did you hear about FINANCE MANAGER?___________________________lap
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

                                     PAGE 69
```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║    <<<<  Disk #1546  ACCOUNTS PAYABLE LITE Disk 2 of 2 (1545)  >>>>     ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To intsall program to either a floppy drive system or a hard drive      ║
║ system, insert disk #1545 and type: INSTALL (press enter)               ║
║                                                                         ║
║ To print documentation, type:  PRINT-AP (press enter)                   ║
╚═════════════════════════════════════════════════════════════════════════╝
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

### Directory of PC-SIG Library Disk #1546

     Volume in drive A has no label
     Directory of A:\

    FMAP     DOC    173217   1-01-89
    FMAP-DOC ARC     61424   1-01-89
    ORDER    DOC      4844   1-01-89
    PKUNPAK  EXE     15112   8-02-88
    PRINT-AP BAT       463   1-01-89
    README   BAT      1981   1-01-89
    WORK     APC       128   1-01-89
    WORK     APK        36   1-01-89
    WORK     APT      2805   1-01-89
    WORK     APV      2256   1-01-89
    WORK     CHR      3735   1-01-89
    WORK     CNF       182   1-01-89
    WORK     GLT      4042   1-01-89
    GO       TXT       617  10-17-89   9:57a
    GO       BAT        38   1-01-80   1:56a
    FILE1546 TXT      4106  10-16-89  10:24p
           16 file(s)     274986 bytes
                           38912 bytes free
