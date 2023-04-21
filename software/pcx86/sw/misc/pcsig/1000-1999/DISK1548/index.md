---
layout: page
title: "PC-SIG Diskette Library (Disk #1548)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1548/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1548"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "PAYROLL LITE 2 OF 2 (1547)"

    This easy-to-use module provides a very efficient way to record
    important information such as: hire date, earnings, deductions,
    vacation and sick time, overtime and holiday pay. It automatically
    calculates gross pay, net pay, deductions and liabilities, prints checks
    and W-2 forms, supports both hourly and salaried employees paid either
    weekly, bi-weekly, semi-monthly or monthly, and fully integrates into
    the General Ledger Module. Allows manual override of deductions and
    includes user-modifiable tax tables you can keep current. Allows
    payroll after the fact. Proper use requires the FINANCE MANAGER II (PC-
    SIG Disk #151).
    
    Up to 1000 employees, 32000 transactions, user-modifiable tax tables,
    user modifiable tax calculations, three additional earnings categories
    and two additional deduction categories with separate tax options; can
    delete paid and posted payroll transactions; supports 80 column printers
    and HP Laserjet checks; generates a complete range of reports, such as:
    quarterly tax summary reports, quarterly tax payments, paid payroll
    recap for your 941 form, and SDI option for employee or employer.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1548.TXT

{% raw %}
```
Disk No: 1548
Disk Title: Payroll Lite 2 of 2 (1547)
PC-SIG Version: S1

Program Title: Payroll Lite
Author Version: 1.3G
Author Registration: $41.95 includes printed manual, & Newsletter.
Special Requirements: 356K RAM, 2 floppy drives or hard disk, & disk #151.

This easy-to-use module provides a very efficient way to record
important information such as: hire date, earnings, deductions, vacation
and sick time, overtime and holiday pay.  It automatically calculates
gross pay, net pay, deductions and liabilities, prints checks and W-2
forms, supports both hourly & salaried employees paid either weekly,
bi-weekly, semi-monthly or monthly and fully integrates into the GENERAL
LEDGER MODULE.  Allows manual override of deductions and includes
user-modifiable tax tables you can keep current.  Allows payroll ofter
the fact.  Proper use requires the GENERAL LEDGER LITE (PC-SIG Disk
#151).

Up to 1000 employees, 32000 transactions, user-modifiable tax tables,
user modifiable tax calculations, three additional earnings categories
and 2 additional deduction categories with separate tax options, can
delete paid and posted payroll transactions, supports 80 column printers
and HP Laserjet checks, generates a complete range of reports like:
Quarterly Tax Summary reports, quarterly tax payments, Paid Payroll
Recap for your 941 form, aslo SDI option for employee or emplorer.

File Descriptions:

First Disk

CONFIG   SYS  Sample config.sys file (required to run FM II).
FMPR     COM  Main PAYROLL executable.
FMPR     000  PAYROLL overlay file 0.
FMPR     001  PAYROLL overlay file 1.
FMPR     002  PAYROLL overlay file 2.
FMPR2    CHN  PAYROLL module part 2.
FMPR2    000  PAYROLL overlay file 0.
FMPR2    001  PAYROLL overlay file 1.
FMPR2    002  PAYROLL overlay file 2.
FMPR2    003  PAYROLL overlay file 3.
FMPR2    004  PAYROLL overlay file 4.
INSTALL  COM  Installation program.
ORDER    DOC  Blank order form which can be printed.
README   BAT  Displays this file on screen.
RUN      BAT  Batch file to run PAYROLL LITE.

Second Disk

FMPR-DOC ARC  Archived documentation manual (See PRINT-PR below).
FMPR     DOC  Documentation manual (See PRINT-PR below).
ORDER    DOC  Blank order form which can be printed.
PRINT-PR BAT  Prints manual to printer (PRN).
WORK     EMP  Work Demo - PR Employees data file.
WORK     PRT  Work Demo - PR Transaction data file.
WORK     PRF  Work Demo - PR Configuration data file.
WORK     TAX  Work Demo - PR Federal & Colorado tax file.
WORK     PRK  Work Demo - PR Checks Configuration data file.
WORK     CHR  Work Demo - GL Chart of accounts data file.
WORK     GLT  Work Demo - GL Transaction data file.
WORK     CNF  Work Demo - System configuration data file.
README   BAT  Displays this file on screen.

PC-SIG
1030D East Duane Avenue
Sunnyvale  Ca. 94086
(408) 730-9291
(c) Copyright 1989 PC-SIG, Inc.
```
{% endraw %}

## FMPR.DOC

{% raw %}
```










                                FINANCE MANAGER II 





                                PAYROLL MODULE LITE

                                   USER'S MANUAL 










                                    Version 1.3f












                               Hooper International 
                                  P.O.  Box 62219 
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

          No price may  be charged, by club or user  group, for the software
          or documentation.   A distribution fee  may be charged  solely for
          the cost  of the diskette,  as long as  the total charge  does not
          exceed $8. 

          It is imperative that club members be informed of the user-support
          concept, which allows them to become familiar with FINANCE MANAGER
          through evaluation and  hands-on use.  It is  also imperative that
          member  users  be  informed  that  the  program  as  well  as  its
          documentation  is  the  sole  property  of  Hooper  International.
          Members, without exception, must be  encouraged to support its use
          by sending their user payments directly to Hooper International. 

          This  software and  documentation is  fully copyrighted  by Hooper
          International  and  may not  be  modified  in  any way  or  manner
          whatsoever.  The complete package must be distributed intact, as a
          self-complementing unit. 














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








      Finance Manager II is User-Supported (Shareware) software.  If you are
      using this software, and  find it to be of value  to you, your payment
      is necessary and appreciated. 

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





                            FINANCE MANAGER II - Payroll


                                 TABLE OF CONTENTS 

      COPYRIGHT NOTICE ...............................................  i 
      RESTRICTED PERMISSION TO COPY ..................................  i 
      WARRANTY INFORMATION ........................................... ii 
      PRODUCT INFORMATION ............................................ ii 

      SECTION ONE - GETTING STARTED 
          1a - Introduction ..........................................  3 
          1b - System requirements ...................................  4 
          1c - System Flowcharts .....................................  5 
          1d - Using the demo accounts ...............................  6 
          1e - Running the Payroll module ............................  6 


      SECTION TWO - THE PAYROLL MAIN MENU ............................  8 


      SECTION THREE - EMPLOYEE ACCOUNTS ..............................  9 
          3a - What are employee accounts ............................  9 
          3b - Employee accounts organization ........................  9 
          3c - Employee accounts data fields .........................  9 
          3d - Getting familiar with employee accounts ............... 12 
          3e - Entering your own employee accounts ................... 12 
          3f - Changing existing employees ........................... 17 
          3g - Deleting employees .................................... 17 
          3h - Suggested method for setting beginning balances........ 18 


      SECTION FOUR - TRANSACTIONS .................................... 20 
          4a - What are transactions ................................. 20 
          4b - Transaction data fields ............................... 20 
          4c - Getting familiar with transactions .................... 21 
          4d - Entering transactions ................................. 21 
          4e - Changing existing transactions ........................ 23 
          4f - Deleting transactions ................................. 25 
          4g - Points to remember .................................... 25 


      SECTION FIVE - REPORTS ......................................... 26 
          5a - General instructions for generating reports ........... 26 
          5b - Printing the Payroll Journal .......................... 27 
          5c - Printing the Payroll Register ......................... 28 
          5d - Printing the Check Register ........................... 29 
          5e - Printing the Vacation and Sick Report ................. 29 
          5f - Printing the Employee Listing ......................... 30 
          5g - Printing the Employee Address Labels .................. 32 
          5h - Printing the Paid Payroll Recap Report ................ 33 
          5i - Printing the Quarterly Tax Summary .................... 34 
          5j - Printing the Non-Posted Transaction Journal ........... 34 
          5k - Printing the General Ledger Distribution Report........ 34 


      SECTION SIX - WRITING EMPLOYEE PAYCHECKS ....................... 36 
          6a - Printing Checks ....................................... 36 
          6b - Voiding printed checks ................................ 37 
          6c - Entering manual checks ................................ 37 





                                       Page 1
                            FINANCE MANAGER II - Payroll


      SECTION SEVEN - OTHER FEATURES AND FUNCTIONS ................... 39 
          7a - Configuration settings ................................ 39 
          7b - Sorting transactions .................................. 43 
          7c - Posting to the General Ledger ......................... 44 
          7d - Payroll tax tables .................................... 45 
          7e - Printing end of year W-2s ............................. 47 



      SECTION EIGHT - ENHANCEMENTS & HINTS ........................... 49 
          8a - Enhancements by version ............................... 49 
          8b - Helpful hints and suggestions ......................... 49 


      SECTION NINE - PAYROLL DISK FILE NAMES ......................... 51 


      APPENDIX A - SAMPLE REPORTS .................................... 52 


      USER COMMENT FORM .............................................. 63 


      ORDER FORM ..................................................... 64 






































                                       Page 2
                            FINANCE MANAGER II - Payroll




                           SECTION ONE - GETTING STARTED

      1a - INTRODUCTION 

      The FINANCE MANAGER Payroll  module gives  you comprehensive, accurate
      payroll-related information on as many as 1,000 employees. 

      This easy to  learn, easy to use module provides  a very efficient way
      for you  to record important  employee information such as  hire date,
      earnings,  deductions, sick  leave,  overtime,  vacation, holiday  and
      extra income/deductions. 

      It also  provides automatic tax  calculations for your  deductions and
      liabilities, printing of payroll checks and W-2s, supports both hourly
      & salaried  employees either  paid weekly,  biweekly, semi-monthly  or
      monthly and is fully integrated into the General Ledger Module. 

      Some  of the  helpful, time-saving  and outstanding  features of  this
      module are as follows: 


        *  Employee accounts features 
               - Up to 1,000 employees 
               - Alpha/Numeric account numbers 
               - Allows Extra Income and Deductions for each employee 
               - Automated calculation of payroll deductions 
               - Enter prior payroll beginning balances 
               - Supports weekly, biweekly, semi-monthly or monthly 
                  payroll 
               - Employee listing 
               - Three sorting options on employee labels 
               - Pop-Up window displays employee account numbers 


        *  Transaction entry features 
               - Automatic multiple G/L distribution 
               - Up to 32,000 transactions per year 
               - Allows changing of calculated payroll deductions  
               - Pop-up window displays employees and account numbers      
               - Enter any extra income or deductions 
               - Multiple field transaction search capabilities 
               - Sort  by date,  employee,  check #  and transaction  input 
                 order 
               - Ability to delete paid and posted payroll transactions 


        *  Check writing features 
               - Use standard window envelopes (same envelopes as A/R and 
                  A/P modules) 
               - Can input  manual checks 
               - Ability to void checks 
               - Uses continuous form checks (Nebs check # 9001) 
               - Select checks by any pay period 



        *  Reports features 
               - Provides full range of reports including: 


                                       Page 3
                            FINANCE MANAGER II - Payroll


                     Payroll Journal 
                     Payroll Register 
                     Check Register 
                     Vacation and Sick Report 
                     Employee Listing 
                     Address Labels 
                     Paid Payroll Recap 
                     Quarterly Tax Summary 
                     Non-Posted Transaction Report 
                     General Ledger Distribution 
                     Prints employee's W-2s 
               - Print reports on your printer, or 
               - Save reports on disk 
               - Display reports on screen 
               - Reports may be printed multiple times 


        *  Integration 
               - Transactions can  be posted to  the General Ledger  with no
                  additional inputs required 


        *  Fiscal year features 
               - Use with any fiscal year 
               - Multiple years on-line at one time 
               - Books need not to be closed in order to begin next month or
                  year 


        *  System features 
               - Post to G/L in summary or detail format 
               - Posts each check written to proper G/L account 
               - User modifiable tax table  
               - Usable in every state 
               - Automatic calculations for State deductions in most States 
               - Select location of Employee address on check 
               - No monthly closing hassle to go through 
               - Allows you to post or pre-date all transactions 
               - Posts only Paid Payroll to G/L



      1b - SYSTEM REQUIREMENTS 

          - FINANCE MANAGER II General Ledger version 1.3 
          - IBM PC, XT, AT, PS/2, or compatible 
          - 384K memory (more memory allows more employees) 
          - Two 360K disk drives (or 1 DSHD or Hard disk) 
          - Dos 2.0 or higher 













                                       Page 4
                            FINANCE MANAGER II - Payroll



      1c - SYSTEM FLOWCHARTS 


                            ---------------------- 
                            |  PAYROLL MAIN MENU | 
                            ---------------------- 
                                      | 
          ----------------------------------------------------------- 
          |              |            |        |          |         |
        INPUT      CHANGE/DELETE   REPORTS   UPDATE    PAYROLL   PAYROLL 
      TRANSACTIONS  TRANSACTIONS    MENU    EMPLOYEE   CHECKS    UTILITY 
                                            ACCOUNTS    MENU      MENU 


                             ------------------------ 
                             | PAYROLL REPORTS MENU | 
                             ------------------------ 
                                        | 
        --------------------------------------------------------------- 
        |      |     |      |     |      |     |     |       |        | 
      PAYROLL  |   CHECK    |  EMPLOYEE  |   PAID    |   NON-POSTED   | 
      JOURNAL  |  REGISTER  |  LISTING   |  PAYROLL  |  TRANSACTIONS  | 
               |            |            |   RECAP   |    JOURNAL     | 
               |            |            |           |                | 
            PAYROLL      VACATION     EMPLOYEE   QUARTERLY         GENERAL 
            REGISTER      & SICK      ADDRESS       TAX            LEDGER 
                          REPORT       LABELS     SUMMARY       DISTRIBUTION 



                              ----------------------- 
                              | PAYROLL CHECKS MENU | 
                              ----------------------- 
                                         | 
                --------------------------------------------------- 
                |                        |                        |
              PRINT                     VOID                    MANUAL 
              CHECKS                   CHECKS                   CHECKS 



                              -------------------------- 
                              |  PAYROLL UTIILITY MENU | 
                              -------------------------- 
                                          | 
          ----------------------------------------------------------- 
          |           |         |         |            |            |  
         SORT         |       END OF      |         PAYROLL         | 
      TRANSACTIONS    |       PERIOD      |           TAX           | 
                      |       POSTING     |          TABLES         | 
                      |                   |                         | 
                    POST               PAYROLL                 PRINT END 
                TRANSACTIONS        CONFIGURATION               OF YEAR 
                   TO G/L              SETTING                    W-2s 







                                       Page 5
                            FINANCE MANAGER II - Payroll


      1d - USING THE DEMO ACCOUNTS 

      Included  at no  extra cost  with the  "Payroll" module,  is a  set of
      sample/demo accounts  for practice use.   On your disk are  some files
      with the  name of "WORK".   In order to  use these demo  files, simply
      copy all of  the "WORK.*" files onto  a blank disk to be  used as your
      demo disk.   When starting up FINANCE  MANAGER, use this disk  as your
      data disk and put it in the appropriate disk drive (usually B:).  When
      FINANCE MANAGER asks you for the  File name, enter "WORK".  The use of
      these demo files will very likely get you going faster and help you to
      use this module to your best advantage. 

      It is important to remember that you  do not use these demo files when
      you are  setting up  your own  live data,  since demo  files obviously
      contain existing practice-only data and  demo employees.  Setting up a
      new "live"  set of books,  however, is  very simple and  is thoroughly
      described in the following section. 

      1e - RUNNING THE PAYROLL MODULE 

      To run  the "Payroll" module, you  must first install it  by following
      the instructions  under "Installing  FINANCE MANAGER" in  the "Getting
      Started" Manual.   After it is  installed, follow the simple  steps in
      the order given below: 

      1.   Start up  FINANCE MANAGER  per the  instructions in  the "Getting
           Started" manual.  Upon starting  FINANCE MANAGER, you must decide
           to use either  live data or the practice-only  demo accounts data
           on  the Payroll  Documentation &  Demo  disk.  If  you prefer  to
           practice  and experiment,  you should  remember to  use the  Demo
           disk.  If  you wish to set  up your own live  Payroll, you should
           put your FINANCE  MANAGER General Ledger data disk  in your drive
           B: (not necessary if you have a hard disk).

      2.   At the disk  drive prompt, enter the disk drive  letter where you
           put your Demo  or G/L data disk,  usually drive B: (or  C: if you
           have a hard disk). 

      3.   At the Enter Filename prompt, enter the name of the data file you
           want to use ("WORK" if you have  the demo disk in drive B:, or if
           you are using your live G/L data files enter the filename you are
           using for your live data). 

           Remember, you can only use this module if you have previously set
           up  your  General Ledger  data  files  using the  General  Ledger
           module.  When  using the demo  data files, this has  already been
           done for you. 

      4.   You will now be at the FINANCE MANAGER Master Menu. 

      5.   OPTIONAL: If you have  not already done so (when you  set up your
                     G/L data  files), you  may go  to the  System Utilities
                     Menu  and  change  any   system  defaults.   This  may,
                     however, be  done at any  time and is not  necessary to
                     run FINANCE  MANAGER.  We do, however,  suggest you set
                     up  the "Compressed"  and "Normal"  print codes  before
                     printing the Payroll reports, since you will find it is
                     required for a few of them. 




                                       Page 6
                            FINANCE MANAGER II - Payroll



      6.   Next you must  add several accounts to your  General Ledger Chart
           of Accounts.  See section 7a for details.  These G/L accounts are
           required  to use  the Payroll  module.  See  your General  Ledger
           documentation manual  on setting up  your Chart of  Accounts.  If
           you have  these accounts  already set up  in your  General Ledger
           Chart of Accounts, this step is not necessary. 

      7.   From the FINANCE  MANAGER master menu: If you  have floppy disks,
           put your  Payroll program  disk into  drive A:  (if you  have not
           already done so).  Then select menu  "F5", and this will take you
           into Payroll.   If this is the  first time you are  using Payroll
           for this set of books, the  system will ask you: "Create new file
           (Y/N):_", which  you should  answer with  a "Y".   This procedure
           will create all the necessary Payroll data files.  Don't worry it
           will not damage your General Ledger data files. 

      8.   From the Payroll  main menu select "F6", and then  "F4", in order
           to  set up  your Payroll  configuration settings.   This step  is
           important since  it will set  up the interface with  your General
           Ledger Chart of Accounts.  See section 7a for details. 

      9.   Return to the  Payroll Utilities menu and select "F5",  to set up
           your tax tables.  These tax  tables will calculate federal, state
           and city taxes  as well as Earned Income Credit.   See section 7d
           for details. 

      10.  Return to  the Payroll main menu  and select "F4" to  set up your
           employees.  See section 3 on employee accounts. 

      11.  After  setting  up your  employees,  you  may print  an  employee
           listing report.  See section 5 on reports. 

      12.  Return  to  the  Payroll  main  menu and  select  "F1"  to  input
           transactions.  See section 4 on transactions. 

      13.  After you have entered some transactions, you may print a Payroll
           Register report  (select "F2" from  the Payroll Reports menu)  to
           see what you have entered.  See section 5 on reports. 

      14.  Print any other reports as required.  The most useful reports are
           "PAYROLL REGISTER" and the "PAID PAYROLL RECAP". 

      These basic steps are merely intended  to show you the order of events
      in setting up new Payroll books. 

















                                       Page 7
                            FINANCE MANAGER II - Payroll



                        SECTION TWO - THE PAYROLL MAIN MENU 

      The Payroll  Main Menu is  the starting point  for all of  the various
      Payroll  functions.  It  is  a sort  of "Table  of  Contents" for  the
      Payroll module.  It can guide you to all of the other useful sub-menus
      and practical features of the time and money-saving Payroll module. 

      The Payroll Main Menu appears as follows: 

                     ----------- PAYROLL MAIN MENU ---------- 
                     |                                      | 
                     |   ESC  Return to Master Menu         | 
                     |   F1   Input TRANSACTIONS            | 
                     |   F2   CHANGE/Delete Transactions    | 
                     |   F3   REPORTS Menu                  | 
                     |   F4   Update EMPLOYEE ACCOUNTS      | 
                     |   F5   Payroll Checks Menu           | 
                     |   F6   Payroll Utility Menu          | 
                     |                                      | 
                     |                                      | 
                     |                                      | 
                     |                                      | 
                     |   ENTER YOUR SELECTION:              | 
                     |   Payroll configuration not set up   | 
                     ---------------------------------------- 


      Note that  many of the  selections are used to  go on to  other menus.
      All of  the menu selections  are discussed  in later sections  in this
      documentation.   If  you get  a  message,  as above,  saying  "Payroll
      configuration not set up" or "Tax Tables not set up" you should set up
      these configurations  by selecting  "F6", "PAYROLL UTILITIES  MENU" to
      set these items up.  For clarification, these procedures are discussed
      in Section Seven. 


      As  mentioned   above,  it   is  essential  that   you  set   up  your
      configuration.   Jump to  Section 7a  to complete  that easy-to-follow
      procedure before continuing. 

      The next  step is to  set up  your employee accounts.   This procedure
      follows in Section Three. 



















                                       Page 8
                            FINANCE MANAGER II - Payroll


                         SECTION THREE - EMPLOYEE ACCOUNTS 

      Your Employee Accounts are the foundation of your Payroll.  To set up,
      or to change your employees, select "F4 Update EMPLOYEE ACCOUNTS" from
      the Payroll main menu. 

      3a - WHAT ARE EMPLOYEE ACCOUNTS 

      Your  employee  accounts  are  used  to keep  track  of  all  of  your
      employees, their address, overtime, holiday, sick leave, the amount of
      time they  worked, Pay frequency,  deductions and liabilities.   It is
      important to remember that any person  that is drawing a paycheck from
      you, should be set up as an employee. 

      Whenever you hire a  new employee, you must set up  this new person in
      the employee  accounts.  WHEN  YOU ENTER A  NEW EMPLOYEE  INTO FINANCE
      MANAGER HAVE THE EMPLOYEES COMPLETED W-4  FORM NEXT TO YOU, AS MOST OF
      THE INFORMATION YOU WILL ENTER  WILL COME DIRECTLY FROM THE EMPLOYEE'S
      W-4  FORM.  Each  employee must  be  given a  unique employee  account
      number,  which can  be any  alphanumeric input  up to  four characters
      long.  This account number will then be used whenever you are entering
      transactions for that employee. 


      3b - EMPLOYEE ACCOUNTS ORGANIZATION 

      Your employee account numbers, and their order within the program, are
      totally up to you. 

      An important  consideration for  your employee  account numbers  is to
      group  your employees  into  account number  ranges  or in  alphabetic
      order.  For example, give all of  your employees who work in shipping,
      account numbers 9000-9999.  This may  be useful when printing reports.
      Remember to  always leave  enough room  for new  accounts to  be added
      within your selected range. 


      3c - EMPLOYEE ACCOUNTS DATA FIELDS 

      Each account number in your  employee database represents one specific
      employee.   Along with  this employee  account number  are kept  other
      elements  of information  about  each employee.   When  setting up  an
      employee account, the following information will be needed: 

      EMPLOYEE NUMBER     An alphanumeric  input up to four  characters used
                          to identify each employee.  This can be any number
                          or group of letters or a combination of the two. 

      ACTIVE              Enter "Y" if the employee is currently working for
                          you  or "N"  if  he is  not and  you  do not  want
                          FINANCE MANAGER to continue to update his file. 

      NAME                Enter the  employee's full name (how  it is listed
                          on his W-4 form).  We  suggest that you enter last
                          name, comma (,), first name.  FINANCE MANAGER will
                          reverse the employee's  name when printing labels,
                          checks or  W-2s.  If  you do not  put a  comma (,)
                          between last and first  names, the employee's name
                          will be printed as input. 



                                       Page 9
                            FINANCE MANAGER II - Payroll


      ADDRESS             Enter  employee's address.   This address  is used
                          when printing  address labels,  employee paychecks
                          and W-2s. 

      ADDRESS             Enter second address line if any. 

      CITY                Enter employee's city. 

      STATE               Enter employee's two digit State or Province code. 

      ZIPCODE             Enter employee's zip or postal code. 

      PHONE               Enter up to 12 characters.   May be used for other
                          information if needed. 

      SEX(M,F)            Enter either "M" for male or "F" for female. 

      MARITAL(S,M)        Enter marital  status of employee as  shown on his
                          W-4,  used in  calculating taxes  and withholding.
                          Enter either "S" for single  or "M" for married or
                          "H" for head of household. 

      DEPT                If you are using departments, enter the department
                          for this employee. 

      HIRED               Enter employee's actual hire date. 

      HOURLY/SALARY(H,S)  This field  determines how each employee's  pay is
                          to be calculated.  Enter  either "H" for hourly or
                          "S" for salary. 

      FREQUENCY(W,B,S,M)  This  field  determines  how  employee's  pay  and
                          payroll  deductions are  calculated for  taxes and
                          withholding.  Enter length  of pay period.  Either
                          "W"  for   weekly,  "B"  for  biweekly,   "S"  for
                          semi-monthly or "M" for monthly. 

      PAYRATE             Enter amount  employee is  paid.  Amount  per hour
                          for hourly  employees.  Amount per pay  period for
                          salary   employees.    Enter   between   .01   and
                          999999.99. 

      OVERTIME            Hourly employees only.   Enter Overtime hourly pay
                          rate.  Enter between 0.00 and 99.99. 


      HOLIDAY             Hourly employees  only.  Enter Holiday  hourly pay
                          rate.  Enter between 0.00 and 99.99. 


      SOCIAL SECURITY 
      NUMBER              Employee's social security number as listed on his
                          W-4. 


      DEDUCTIONS FEDERAL  Enter  number   of  Federal   deductions  employee 
      (FWH)               claimed  on  his W-4.   Enter  between  0 and  99.
                          Enter 99 if no deduction is to be taken out. 




                                       Page 10
                            FINANCE MANAGER II - Payroll


      DEDUCTIONS STATE    Enter the number of State deductions.  This number 
      (SWH)               will be used to  calculate State Payroll Deduction
                          amounts.  Enter 99 if no  deduction is to be taken
                          out. 

      DEDUCTIONS CITY     Enter the number of City deductions.  This number 
      (CWH)               will be  used to calculate City  Payroll Deduction
                          amounts.  Enter 99 if no  deduction is to be taken
                          out.  (optional) 

      EIC 0-2             Enter the number of  Advanced Earned Income Credit
                          (if  any) the  employee  claimed on  his W-5.   If
                          employee does not fill out a W-5 form he cannot be
                          eligible for Advance  Earned Income Credit.  Enter
                          between 0-2.   "0" not  eligible for EIC,  "1" one
                          person in family eligible and "2" husband and wife
                          eligible for EIC. 


      PAY FICA, FUTA,     Use  if  FICA  (Social  Security),  FUTA  (Federal 
      SUTA, SDI           Unemployment),  SUTA (State  Unemployment) or  SDI
                          (State  Disability  Insurance)  will be  paid  for
                          employee.  Enter either "Y" if will be paid or "N"
                          if will not be paid.   For each category that will
                          be  paid you  must set  up an  account in  the G/L
                          Chart of Accounts.  The  same account numbers must
                          also be entered in the Payroll Configuration.  See
                          section 7a for details. 

      OTHER               Used for other payments required by law to be paid
                          by employer (Optional). 

      STATE ANNUAL        A  few  States  have  "STATE EXEMPTIONS".  If your 
      EXEMPTIONS          State does not have any skip this field (enter 0).
                          Otherwise enter  the total  dollar amount  for the
                          number of  exemptions employee claimed on  his W-4
                          form.  (Multiply  number of  exemptions on  W-4 by
                          dollar amount your state allows for each exemption
                          claimed).  

                          NOTE: May also  be used for any  additional dollar
                                amount that is needed  to be subtracted from
                                gross   income  if   the  number   of  state
                                deductions  on  this  form  and  the  annual
                                deduction  amount  in  the tax  table,  when
                                multiplied, are not the correct total dollar
                                amount for deductions  claimed on employee's
                                W-4. 

      STATE ANNUAL        A few states have "TAX CREDITS".  If your state 
      TAX  CREDIT         does  not  have any  skip  this  field (enter  0).
                          Otherwise  enter the  total dollar  amount of  tax
                          credit for this employee. 

      EXTRA TAXES         Enter the  dollar amount for extra  Federal, State
                          or City taxes the employee wants withheld from his
                          paycheck per pay period according to his W-4. 

      EXTRA AMOUNTS       Enter  extra amounts  paid  to,  or deducted  from
                          employee's  pay (per  pay period).   Examples: Car


                                       Page 11
                            FINANCE MANAGER II - Payroll


                          allowance added back into  pay, or Insurance taken
                          out. 

      ACCRUAL  RATES      Number of  hours (per pay period)  of vacation and
                          sick pay  that are  accrued.  Enter  hours accrued
                          between 0 and 99.999. 


      3d - GETTING FAMILIAR WITH EMPLOYEE ACCOUNTS 

      Before beginning to enter your own employee accounts, practice adding,
      changing and deleting  employee accounts by using the  WORK demo file.
      This will familiarize you with how to enter, change or delete employee
      accounts.   Changing and  deleting employee  accounts is  described in
      easy to follow lay mans terms in the following sections. 

      1. From the Payroll Main Menu select  "F4" on the menu.  You will then
         be prompted for the following information: 

      Employee Num:____ Active(Y/N):_  Social Security Number:_____________ 
      NAME   :_______________________  Deduction:FWH:__ SWH:__ CWH:__ EIC:_ 
      ADDRESS:_______________________  PAY FICA:_ FUTA:_ SUTA:_ SDI:_ OTH:_ 
      ADDRESS:_______________________    STATE ANNUAL: Exemption :_________ 
      CITY   :______________ STATE:__                  Tax Credit:_________ 
      ZIPCODE:________PHONE:_________    EXTRA TAXES:  Federal   :_________ 
                                                       State     :_________ 
      Sex(M,F):_ Marital(S,M):_ Dept:___               City      :_________ 
      Hired :__-__-__ Hour/Salary(H,S):_ EXTRA AMOUNTS:Earnings  :_________ 
      Frequency(W,B,S,M):_ Payrate:_____               Deductions:_________ 
      Overtime:___________ Holiday:_____ ACCRUAL RATES:Vacation  :_______ 
                                                       Sick      :_______ 

      3e - ENTERING YOUR OWN EMPLOYEE ACCOUNTS 

      When you actually enter your own employee accounts, it would be a good
      idea to collate your employees into some kind of logical order in your
      mind.  This will be  helpful to you later, each time  you need to look
      up employees by account number. 

      In order  to enter employee accounts  switch to your live  data files.
      To do  this, simply return to  the FINANCE MANAGER Master  Menu (press
      the ESC key  until you are there).   When you are at  the Master Menu,
      enter one  more ESC.   The program  will then prompt  "DO YOU  WANT TO
      RESTART (Y/N):_" enter "Y". 

      At this point (if you have your  data on floppy disks) switch from the
      Doc and Demo disk to your  live G/L data diskette.  Select your "real"
      data file  name.  From the Master  Main Menu select "F5".   The system
      should tell you that it did not find your Payroll files.  Enter "Y" at
      the "Create  new Files"  prompt.  From the  Payroll main  menu, select
      "F4" and you will be ready to enter your employee accounts. 

      1.   At  the  input screen,  the  cursor  will  be positioned  at  the
           employee account number field.  Unless you are entering your very
           first employee  account number, there  should be default  data in
           this field. 

      2.   Instead of using the default data  (if any), enter a new employee
           account number of your choice.   The step by step input procedure
           for an example employee account is as follows: 


                                       Page 12
                            FINANCE MANAGER II - Payroll



      3.   First, enter the employee account number.  For example: 

                                 Employee Num:SMIT 


      4.   Input if account is active or not: 

                                  Active (Y/N):Y 


      5.   Input Employee's full name as it is listed on his W4: 

                       Name:John Thomas Smith______________ 


      6.   Input Employee's mailing address: 

                      Address:3000 Main Street______________ 


      7.   Input Employee's mailing address: 

                      Address:Suite 300_____________________ 


      8.   Input the city: 

                              City:Colorado Springs__ 


      9.   Input the state: 

                                     State:CO 


      10.  Input the zip or postal code: 

                                Zipcode:80920_____ 


      11.  Input the employee's phone number: 

                                Phone:719-123-4567 


      12.  Input employee's sex: 

                                    Sex(M,F):M 


      13.  Input employee's marital status: 

                                  Marital(S,M):S 


      14.  Input the employee's Department (if any): 

                                     Dept:____ 



                                       Page 13
                            FINANCE MANAGER II - Payroll



      15.  Input employee's hire date: 

                                  Hired :01-01-89 


      16.  Input if employee is paid by the hour or is on a salary: 

                               Hourly/Salary(H,S):H 


      17.  How often you will be  paying this employee (see previous section
           for codes).

                               Frequency(W,B,S,M):B 


      18.  Input employee's  payrate PER HOUR.   If employee is on  a salary
           enter total pay PER PAY PERIOD. 

                                 Payrate:10.00____ 


      19.  Input  employee's overtime  payrate PER  HOUR when  paid overtime
           (hourly employees only). 

                                Overtime:15.00____ 


      20.  Input employee's holiday payrate PER HOUR when paid for a Holiday
           (hourly employees only). 

                                 Holiday:20.00____ 


      21.  Input employee's Social Security Number as listed on W-4 form. 

                        Social Security Number :123-45-6789 


      22.  Input the number of Federal deductions listed on his W-4 form. 

                                  Deduction FWH:1 


      23.  Input the number of State deductions. 

                                       SWH:1 


      24.  Input the number of City deductions. 

                                       CWH:1 


      25.  Input the amount of Earned Income Credit (if any) the employee is
           eligible for and has listed on his W-5 form.  (Enter 0 for none). 

                                     EIC 0-2:1 



                                       Page 14
                            FINANCE MANAGER II - Payroll



      26.  Input "Y" or  "N" if FICA (Social Security) will  be due for this
           employee. 

                                      FICA:Y 


      27.  Input "Y" or  "N" if FUTA (Federal Unemployment Tax)  will be due
           for this employee. 

                                      FUTA:Y 


      28.  Input "Y"  or "N" if  SUTA (State  Unemployment) will be  due for
           this employee. 

                                      SUTA:Y 


      29.  Input "Y" or "N" if SDI  (State Disability Insurance) will be due
           for this employee. 

                                       SDI:Y 


      30.  Input "Y"  or "N"  if other fees  or taxes will  be due  for this
           employee. 

                                       OTH:N 


      31.  Input the  total dollar  amount to  deduct from  employee's gross
           income per year (if any). 

                         STATE ANNUAL Exemption:6.65_____ 


      32.  Input the  total dollar  amount to  deduct from  employee's State
           Taxes per year (if any). 

                         STATE ANNUAL Tax Credit:20.00____ 


      33.  Input the  dollar amount to deduct  PER PAY PERIOD for  any extra
           taxes according to employee's W-4 form for the following: 

                          EXTRA TAXES: Federal:22.00____ 
                                       State  :13.00____ 
                                       City   :1.50_____ 


      34.  Input the dollar amount per pay period for any extra earnings. 

                        EXTRA AMOUNTS:  Earnings:20.00____ 


      35.  Input the dollar amount per pay period for any extra deductions. 

                       EXTRA AMOUNTS:  Deductions:5.00_____ 



                                       Page 15
                            FINANCE MANAGER II - Payroll



      36.  Input the number  of hours PER PAY PERIOD that  are to be accrued
           for vacation. 

                         ACCRUAL RATES:   Vacation:2.125__ 


      37.  Input the number  of hours PER PAY PERIOD that  are to be accrued
           for sick leave. 

                           ACCRUAL RATES:   Sick:1.50___ 


      38.  If you make a mistake in any field, and would like to correct it,
           you  can easily  back  up to  a previous  field  by pressing  the
           backspace key. 


      39.  After you have  entered the data in the Accrual  Rates field, the
           message "Change Beginning Balance  Data (Y/N):_" will appear.  If
           you answer with a "N" Finance Manager will continue to item 41. 

      40.  If you answer "Y" Finance Manager  will display on the lower half
           of the screen the following: 


      EMPLOYEE BEGINNING BALANCE: 
      Earnings taxable    :0_________  FICA  :0_________ Extra Deduct  :0___ 
      Earnings Non-taxable:0_________  FUTA  :0_________ 
      Withholdings Federal:0_________  SUTA  :0_________ 
      Withholdings State  :0_________  SDI   :0_________ Vacation Hours:0___ 
      Withholdings City   :0_________  Oth Tx:0_________ Sick Hours    :0___ 


      41.  Enter  any   preexisting  employee  balances.    These  beginning
           balances will show on your year-to-date reports and W-2. 

           NOTE: Another  alternative is  to  enter individual  transactions
                 broken  down by  pay periods  for each  employee, and  then
                 enter manual  checks to pay these  transactions.  Make sure
                 that you delete any preexisting payroll transactions in the
                 General Ledger.  You do not want to have these transactions
                 listed twice.   It is always  best to start this  module at
                 the beginning of the year to avoid any confusion. 


      42.  Once all  of the data has  been entered correctly, answer  "Y" at
           the "Are  inputs correct(Y/N):_"  prompt.  If  you answer  with a
           "N", the  cursor will  return to the  Employee Number  prompt and
           previous input will be ignored. 


      43.  If you answered with a "Y", the new employee account is added and
           you will automatically return to the employee number prompt.  You
           are then ready for more input. 

           NOTE: Please note that the employee number you have just added is
                 automatically added to the "pop  up" window which lists all
                 accounts.  Use the cursor keys (when at the employee number
                 field),  in order  to  scroll through  the active  employee


                                       Page 16
                            FINANCE MANAGER II - Payroll


                 accounts to search for the account you have just added.  If
                 you   have   added   your  account   correctly,   it   will
                 automatically be in order within this list.  The list reads
                 from left to right. 


      44.  The  cursor will  once again  be  at the  employee number  field.
           Repeat steps  2-41 until you  have finished entering all  of your
           employees. 


      45.  Make sure you answer the prompt "Are inputs correct (Y/N):_" with
           a "Y" to save your inputs before pressing the ESC key.  Otherwise
           all of the data  you just entered will be lost  and you will have
           to re-enter it.   To leave the current input field  and return to
           the previous menu simply press the ESC key. 


      3f - CHANGING EXISTING EMPLOYEES 

      The  steps below  outline the  procedure  for making  changes to  your
      existing employee accounts. 

      1.   Select "F4" at the Payroll main menu. 

      2.   With  the cursor  at  the  employee number  prompt,  type in  the
           account number  you wish to  change.  If  you wish to  accept the
           default account press ENTER.  To choose a different account, move
           the highlighted pointer through the  account list that appears on
           the screen by using the up and down keypad arrows. 

      3.   Because  the  account number  you  have  entered is  an  existing
           employee number, the system prompts: 


                    ACTIVE ACCOUNT Modify/Delete/Quit(M/D/Q):_ 


           Answer this prompt with "M".  You are now in the change mode. 

      4.   Make any desired changes the existing  data, but you are not able
           to change  the account  number.  Press ENTER  to leave  any field
           unchanged. 

      5.   If you want to go back to a previous field while you are changing
           data, you may do so by pressing the Backspace key. 

      6.   After you make the necessary changes to your data, press ENTER or
           the  PgDn  key  until  the system  prompts  "Are  inputs  correct
           (Y/N):_".  Type  "Y" to save your  changes.  If you enter  a "N",
           the system will ignore all changes  and the cursor will return to
           the account number field. 


      3g - DELETING EMPLOYEES 

      When deleting  employees, there  cannot be  any transactions  for that
      employee  number.  If  there are  transactions for  the account  to be
      deleted, FINANCE MANAGER will not allow the account to be deleted. 



                                       Page 17
                            FINANCE MANAGER II - Payroll



      Be sure  to practice deleting accounts  on your demo WORK  file before
      you delete a "real" employee from your "real" data files. 

      To delete an employee account follow the steps below: 

      1.   Select "F4" at the Payroll main menu. 

      2.   Then enter the  number of the account to be  deleted while at the
           employee account number prompt.  The system will then prompt: 


                    ACTIVE ACCOUNT Modify/Delete/Quit(M/D/Q):_ 


      3.  Select "D".  The system will prompt  you "Are you sure (Y/N):_" If
          you answer with "Y" the account will then be deleted. 


      3h - SUGGESTED METHOD FOR SETTING BEGINNING BALANCES 

      When setting up your Payroll,  as well as employee beginning balances,
      you must  be sure that  you are in  balance with your  General Ledger.
      This is a vitally important procedure to remember when setting up your
      books.  The following steps will insure that you are in balance: 

      1.   Set up all  your employee accounts with a  zero beginning balance
           first. 

      2.   You then have two options to enter any prior payroll balance: 

      3.   You  may  enter them  in  the  Employee Beginning  Balance  input
           fields.  These  balances will  then show  as a  lump sum  on your
           year-to-date  Payroll  Register  report  and W-2s.   If  you  are
           starting a new accounting year  and have preexisting vacation and
           sick leave  balances we recommend  for those  to be entered  as a
           total sum in there corresponding fields. 

      4.   Or you may enter them as individual transactions (see section 4),
           broken down by prior pay periods for each employee.  We recommend
           entering   all  your   prior  payroll   balances  as   individual
           transactions.  Then  enter manual checks to  pay all transactions
           just  entered.   As these  transactions  will  be posted  to  the
           General  Ledger  you should  ensure  that  you have  removed  any
           previously entered G/L transactions to avoid duplicate data. 

      5.   After  all   beginning  balances  have  been   entered,  print  a
           year-to-date  (Jan-Dec) Payroll  Register  report  to verify  all
           current  employee  balances for  your  selected  pay period.   To
           verify the correct balances for  sick leave and holiday print the
           Vacation & Sick Report. 

      6.   After you  have verified all account  balances you are now  up to
           date  and fully  operational.  If  you want  your General  Ledger
           Payroll account  to reflect the  current balances of  all Payroll
           accounts, you should go to the Payroll Utility main menu and post
           the  transactions to  the  General Ledger.   See  section 7c  for
           detailed information. 

           Note: Make  sure   that  you   delete  any   preexisting  payroll


                                       Page 18
                            FINANCE MANAGER II - Payroll


                 transactions in  the General  Ledger, so  they will  not be
                 listed twice. 




























































                                       Page 19
                            FINANCE MANAGER II - Payroll


                            SECTION FOUR - TRANSACTIONS 

      4a - WHAT ARE TRANSACTIONS 

      One transaction should  be entered into the payroll system  at the end
      of each pay period.  Each entered  transactions will become a check to
      the  employee when  paid.  Thus  only enter  one transaction  for each
      payroll check needed. 


      4b - TRANSACTION DATA FIELDS 

      The  transaction input  fields  are described  below.   Each of  these
      fields has a  default which is the last data  entered into that field.
      This default saves keystrokes when doing repetitive inputting. 

      EMPLOYEE NUMBER     This is  the account  number for the  employee for
                          which you  are entering a transaction.   Note that
                          the employee's name will automatically appear when
                          an active account number is entered as well as the
                          frequency of the employee's pay.  REQUIRED. 


      PAY PERIOD ENDING   This is  the last day  of the pay period)  not the
                          date on the check).  REQUIRED. 


      HOURS PAID          These are  the total number of  hours for regular,
                          overtime, sick, vacation  or holiday, the employee
                          will  be paid  for this  pay period.   Notice that
                          Finance Manager  will automatically  calculate the
                          number of  regular hours  paid for  each employee.
                          REQUIRED, HOURLY EMPLOYEES ONLY. 


      OTHER EARNINGS 1&2  These  input   fields  would  include   any  other
                          compensation the employee  receives (car allowance
                          etc.) If  this compensation should be  taxed enter
                          "Y" in the  following "Taxable(Y/N)" field.  Enter
                          "N" if this compensation  should not be taxed.  If
                          "N" is selected these amounts WILL NOT be shown on
                          the employees W-2.  OPTIONAL 

      OTHER DEDUCTION     This  deduction  can  be  used  for  miscellaneous
                          deductions from  the employees paycheck.   If this
                          deduction  should  be  taxed   enter  "Y"  in  the
                          following "Taxable(Y/N)" field.  Enter "N" if this
                          deduction should not be taxed.  These amounts WILL
                          be  shown   in  box  10  of   the  employees  W-2.
                          OPTIONAL. 

      ACCOUNT             The "Account"  field allows you to  select the G/L
                          account  number to  which the  Other Earnings  and
                          Other Deduction amount fields correspond (e.g. for
                          a car  allowance other  earnings you  would select
                          your   G/L   car   allowance   expense   account).
                          OPTIONAL. 





                                       Page 20
                            FINANCE MANAGER II - Payroll


      4c - GETTING FAMILIAR WITH TRANSACTIONS 

      Before entering your "real" transactions, follow the procedures listed
      below by practicing with the WORK demo accounts.  This will aid you in
      learning how to enter transactions without using live data. 

      1.   From  the  Payroll Main  Menu  select  "F1".   You will  then  be
           prompted for the following information: 

      Employee Number   :_____ 
      Pay Period Ending :__-__-__ 
      HOURS PAID:Regular:_______Overtime:_______Sick:_______Vacation:_______ 
                 Holiday:_______                         TOTAL HOURS:    

      Other Earnings 1:__________ Taxable(Y/N):_ Account:____ 
      Other Earnings 2:__________ Taxable(Y/N):_ Account:____ 
      Other Deduction :__________ Taxable(Y/N):_ Account:____ 


      2.   The cursor will be positioned at the "Employee Number" prompt. 

           On  the lower  half  of  the screen  you  will  see the  existing
           employee accounts appear.  Seeing  these accounts is helpful when
           you are selecting employees. 

           The selected employee  account is highlighted.  In  order to move
           to other accounts,  press the up or down arrow  keys on the right
           keypad.  If you  move the highlighting pointer down  a few lines,
           notice how the list scrolls. 

           You  may  select  an  existing   account  number  by  moving  the
           highlighting pointer up  or down to the desired  account and then
           pressing the ENTER key. 

           This advanced feature allows you  to scroll through your employee
           account listing without ever having to memorize, or even type in,
           an account number. 

      3.   To return to the previous menu, press ESC. 

      Before entering  your own transactions, practice  adding, changing and
      deleting  transactions  by  using  the WORK  demo  files.   This  will
      familiarize you  with how  to enter,  change, or  delete transactions.
      Changing  and  deleting transactions  is  described  in the  following
      sections. 


      4d - ENTERING TRANSACTIONS 

      As you enter each transaction,  FINANCE MANAGER saves this information
      and updates  the employee  listing as appropriate.    

      1.   In order  to begin  entering transactions,  select "F1"  from the
           Payroll Main Menu.   You will then be prompted  for the following
           information: 







                                       Page 21
                            FINANCE MANAGER II - Payroll


      Employee Number   :____ 
      Pay Period Ending :__-__-__ 
      HOURS PAID:Regular:_______Overtime:_______Sick:_______Vacation:_______ 
                 Holiday:_______                         TOTAL HOURS: 

      Other Earnings 1:__________ Taxable(Y/N):_ Account:____ 
      Other Earnings 2:__________ Taxable(Y/N):_ Account:____ 
      Other Deduction :__________ Taxable(Y/N):_ Account:____ 


      2.   When entering  transactions, the last transaction  entered always
           provides the  default data (unless  of course, this is  your very
           first  transaction).  To  accept the  default data,  simply press
           ENTER and  you will move to  the next field.  In  order to change
           data, simply type in the new data and then press ENTER. 

      3.   First enter the employee number: 

                                 Employee Num:SMIT 

           The existing employees will appear on the screen.  You may either
           select an employee from this list  by using keypad arrow keys (as
           described earlier), or  you may type in the  employee number.  If
           you are using the keypad arrow keys,  be sure the Num Lock key is
           off. 

           NOTE: When you  enter the  employee number the  following message
                 appears: 

                                FREQUENCY:BIWEEKLY 

           This message reminds you of the employee's pay schedule.   


      4.   Enter the date the Pay Period ends: 

                            Pay Period Ending:05-08-89 


      5.   Enter  the total  number of  hours for  regular, overtime,  sick,
           vacation or holiday to be paid: 

           Regular:80.00__ Overtime:3.00___ Sick:0.00____ Vacation:0.00____ 
           Holiday:0.00____ 


      6.   Enter any  other earnings and/or  deductions, as well  as taxable
           flags, and account numbers: 

             Other Earnings 1:10.00_____ Taxable(Y/N):Y Account:5230 
             Other Earnings 2:0_________ Taxable(Y/N):_ Account:____ 
             Other Deduction :0_________ Taxable(Y/N):_ Account:____ 


      7.   At  this point  FINANCE MANAGER  will calculate  and display  the
           deductions for this transaction.  After the automatic calculation
           is made the following message will be displayed: 

                        Change Payroll Calculations (Y/N):_ 



                                       Page 22
                            FINANCE MANAGER II - Payroll


           Note: Answer this message with "Y" if you need to manually change
                 the  computers  calculated payroll  deductions.   Otherwise
                 answer with  "N".  If you  had preexisting payroll  or were
                 calculating  earnings and  deductions differently  than the
                 automatic method  used by Finance Manager  you would answer
                 the above  prompt with  "Y".  You will  then be  allowed to
                 change each of the calculated amounts. 

      8.   If you are  entering a transaction and  you want to go  back to a
           previous field, use the Backspace key. 

      9.   You may abort the transaction at any time by pressing ESC. 

      10.  After  you have  entered all  your transactions  the system  will
           prompt you: 

                            Are inputs correct (Y/N):Y 

           Answer the prompt  with "Y" if you wish to  save the transaction.
           The cursor will then automatically  return to the Employee Number
           field for the next transaction.  If you answer this prompt with a
           "N", you will  return to the Employee Number field  and all prior
           inputs will be ignored and the  cursor returns to the first input
           field. 

      11.  After you have  entered all your transactions, press  the ESC key
           to return to the Payroll Main Menu. 


      4e - CHANGING EXISTING TRANSACTIONS 

      If you  discover an error in  an earlier transaction, or  if you would
      like to change previously  entered information, FINANCE MANAGER allows
      you  to  do  so.   Outlined  below are  the  procedures  for  changing
      previously entered transactions. 

      1.   Select "F2" at the Payroll Main Menu. 

      2.   The system  prompts you for  "ENTER DATA FOR  PAYROLL TRANSACTION
           SEARCH". 

      3.   Enter data in the fields you want to search for.  For example, if
           you want to  search for all transactions which have  a pay period
           ending  date of  "05-06-89", you  would  move to  the Pay  Period
           Ending field and  enter the date.  Upper and lower  case does not
           matter in  alphanumeric fields, and  you do not have  to complete
           the field.   For example, if you  entered only the first  part of
           the date  "05", FINANCE MANAGER  will find all dates  which begin
           with "05"  (i.e.  "05-06-89").   You could  also add  an employee
           number parameter to  the search and, consequently,  find only the
           "05" pay period dates for a particular employee. 

           Any field  left blank  is an  assumed wild  card for  that field.
           Thus if you  leave ALL of the fields blank,  all transactions are
           selected by the search.  Either press ENTER or the PgDn key until
           you  are prompted  with "Are  Inputs Correct  (Y/N):_".  If  your
           entries are correct enter "Y".  If  you enter "N" you will return
           to the first input screen to start again. 

           To assist you in finding an employee or chart of accounts account


                                       Page 23
                            FINANCE MANAGER II - Payroll


           number, pressing  the "F2" key  while at the  corresponding input
           field will display a pop-up  accounts window.  You can now scroll
           through your accounts listing  and select the appropriate account
           to search for.   Pressing "Enter" or "Backspace"  will remove the
           pop-up accounts window. 

      4.   Next, FINANCE  MANAGER searches  for all  transactions containing
           the values you have specified.  As each transaction is displayed,
           the program displays the following prompt: 

                Modify/Delete/Continue/Reverse/Begin/End/+/-/Quit:_ 

           You must select M,D,C,R,B,E,+,-, or Q. Where: 

                M = Modify (change) transaction shown. 
                D = Delete (remove) transaction shown. 
                C = Continue (find next transaction that matches search). 
                R = Reverse  continue (find  prior transaction  that matches
                    search). 
                B = Beginning (go to first transaction in file). 
                E = Ending (go to last transaction in file). 
                + = Go to next consecutive transaction in file. 
                - = Go to prior consecutive transaction in file. 
                Q = Quit transaction search. 

      5.   As long  as you  continue to  answer the  above prompt  with "C",
           FINANCE   MANAGER  continues   searching  for   all  transactions
           containing the values you have specified.  Selecting "R" does the
           same as "C" except it searches backwards. 

      6.   Answering  the  prompt with  a  "+",  causes FINANCE  MANAGER  to
           display the  next consecutive  transaction; a  "-" shows  you the
           previous transaction (regardless of search parameters). 

      7.   Entering a "B" or an "E" will take you to the Beginning or End of
           the transaction file respectively.  It ignores search parameters. 

      8.   When the  search function  displays the  transaction you  wish to
           change, answer the prompt with an "M" (Modify). 

      9.   You are now  in the change mode.  Remember, ENTER  leaves a field
           unchanged.  Change data  in any field by typing in  the new value
           for the  given field.  If  you change any payroll  number FINANCE
           MANAGER  will  recalculate  the  earnings,  deductions,  employer
           liability and  accrued vacation and  sick hours at the  bottom of
           the screen. 

      10.  FINANCE MANAGER will tell you if the transaction has already been
           posted  to your  General  Ledger.  If  the  transaction has  been
           posted  you will  not  be  able to  make  ANY  changes.  This  is
           necessary to  avoid out-of-balance  conditions with  your General
           Ledger.   

           If  you need  to change  the fields  of a  posted transaction  we
           recommend  that  you  enter  a new  transaction  to  reflect  any
           adjustment to the original transaction. 

      11.  If you  have made  a mistake, or  you would like  to return  to a
           previous field, simply use the Backspace key.  Use the ESC key to
           ignore your changes and return to the Main Menu. 


                                       Page 24
                            FINANCE MANAGER II - Payroll



      12.  After you  have made all  necessary changes to  your transactions
           the program will prompt you "Are inputs correct (Y/N):_".  Answer
           "Y" if you wish to save them.  The cursor will then return to the
           first input screen  and you can continue on.  Answer  "N" and the
           system  will ignore  all changes  and return  to the  first input
           field. 

      13.  If  you press  the  ESC key  the system  will  prompt you:  "FIND
           ANOTHER (Y/N):_"  if you  answer "Y" your  cursor returns  to the
           first input screen.  Answer "N" you will return to the main menu. 


      4f - DELETING TRANSACTIONS 

      To delete or remove a transaction PERMANENTLY, do the following: 

      1.   Select "F2" at the Payroll Main Menu. 

      2.   Enter search  data and find  desired transaction as  described in
           "Changing Transactions". 

      3.   When  the transaction  you wish  to  delete is  displayed on  the
           screen, answer "D" at the prompt below. 

                Modify/Delete/Continue/Reverse/Begin/End/+/-/Quit:

      5.   After you  have deleted the  desired transaction(s), you  may use
           the  "Sort" function.   (See  Section Seven  "Other features  and
           functions   -   Sorting    Transactions.")   When   sorting   the
           transactions,  the program  frees disk  space which  was formerly
           used by the now deleted transactions. 

      PAID (Not posted) To delete a  paid (not posted)  transaction you must 
      TRANSACTIONS:     first void the check and then you will be allowed to
                        delete the transaction. 

      PAID & POSTED     To delete a paid and posted transaction all you have 
      TRANSACTIONS:     to do  is delete  the transaction.   Finance Manager
                        will automatically delete the transaction and create
                        a reversal transaction to be  posted to the G/L next
                        time you do a posting. 


      4g - POINTS TO REMEMBER 

      When  searching for  transactions remember  that the  transaction file
      will be  shown in  the order  it was  last sorted  by. See  section 7b
      "Sorting Transactions" for more information. 

      When you delete a posted  transaction, Finance Manager will remove the
      transaction from the payroll system as  well as make a reversing entry
      to be posted to the General Ledger.   The net effect will be as if the
      transaction was never entered. 








                                       Page 25
                            FINANCE MANAGER II - Payroll


                              SECTION FIVE - REPORTS 


      The Payroll  Reports Menu allows  you to  generate a full  spectrum of
      Payroll reports from your data base.   The reports menu ("F3" from the
      Payroll Main Menu) appears as follows: 

                     --------- PAYROLL REPORTS MENU --------- 
                     |                                      | 
                     |   ESC  Return to Payroll Main Menu   | 
                     |   F1   Payroll Journal               | 
                     |   F2   Payroll Register              | 
                     |   F3   Check Register                | 
                     |   F4   Vacation & Sick Report        | 
                     |   F5   Employee Listing              | 
                     |   F6   Employee Address Labels       | 
                     |   F7   Paid Payroll Recap            | 
                     |   F8   Quarterly Tax Summary         | 
                     |   F9   Non-Posted Transaction Journal| 
                     |   F10  General Ledger Distribution   | 
                     |   ENTER YOUR SELECTION:              | 
                     |                                      | 
                     ---------------------------------------- 

      Reports can be generated to show results for a specific month, a range
      of months, a quarter,  a year, a pay period, etc.   All reports may be
      generated at any time and for any 12 month range.  This means that you
      are not limited to printing a report only once, and it also means that
      you can print a report for a prior period as well. 

      Samples of  each report are  shown in Appendix  A, and may  be printed
      while using the DEMO accounts. 


      5a - GENERAL INSTRUCTIONS FOR GENERATING REPORTS 

      While printing any report you  may, if desired, interrupt the printing
      in one of two ways: 

      PAUSE THE PRINTER:    When you  are printing reports on  your printer,
                            you may pause the  printing by pressing any key.
                            Please keep  in mind  that most printers  have a
                            print   buffer.     Consequently,   the   report
                            continues to  print until  the buffer  is empty.
                            Pressing  any  key   again  will  continue  your
                            printout.  This  function will  not work  if you
                            are sending reports to the screen, since reports
                            will stop automatically as each screen is full. 

      STOP THE PRINTER:     If while printing, you  wish to stop the printer
                            and return  to the menu,  all you have to  do is
                            press the  "Esc" key.  Please keep  in mind that
                            most printers  have a print buffer,  causing the
                            report to continue to  print until the buffer is
                            empty.  You  will, however,  return to  the menu
                            immediately. 






                                       Page 26
                            FINANCE MANAGER II - Payroll


      When generating  reports, you  have three output  destination options.
      First, you may send the reports to  the screen.  Second, if you have a
      printer,  you can  print  a hard  copy.  Finally,  you  can send  your
      reports  to a  disk file.   With this  useful option,  reports can  be
      stored and then printed at a later date. 

      This  "Destination" prompt  is an  option  for each  of the  available
      reports.  To select the destination, answer the prompt below: 

                         TO SCREEN/PRINTER/DISK (S/P/D):__ 

      If you  select "D"  for disk, the  system will prompt  you for  a disk
      "filename".  Enter  a filename  of up to  eight characters.   The file
      will be  saved on your data  disk, with the file  extension of ".RPT".
      If a file  with the name entered already exists,  the system will tell
      you so and ask if you want to delete the old file.  If you answer "N",
      the new report will be appended to the already existing disk file. 

      For some  reports, you also  need to  specify reporting dates  via the
      "Date" prompt.  The date prompt appears as follows: 


                           ENTER DATE RANGE FOR REPORTS: 
                               STARTING Month:__ Year:__ 
                                 ENDING Month:__ Year:__ 


      These  dates  determine which  months  and  years  are shown  on  your
      reports.  The  ending month and year  must be within twelve  months of
      the  starting month  and  year (maximum  12 month  range).   To get  a
      year-to-date report  you might  select the  dates 1-89  through 12-89.
      Likewise, if  you want a first  quarter report you should  select 1-89
      through 3-89.

      When entering prompts for reports, remember  that you may back up to a
      previous field by pressing the Backspace  key.  If you want to go back
      to the reports menu while you are at the input screen, press ESC. 


      5b - PRINTING THE PAYROLL JOURNAL 

      This  report  is  a  listing  of all  transactions  entered  during  a
      specified period of  time and shows which General  Ledger accounts are
      credited and debited. 

      When  printing  the  PAYROLL  JOURNAL  (F1), be  sure  to  employ  the
      following procedures: 

          a.  Select "F1" from the reports menu. 

          b.  The following screen will appear: 


                           TO SCREEN/PRINTER/DISK (S/P/D):_ 


                           SELECT PAID,UNPAID OR ALL (P,U,A) :_ 
                           ENTER DATE RANGE FOR REPORTS: 
                                     STARTING Month:__ Year:__ 
                                       ENDING Month:__ Year:__ 


                                       Page 27
                            FINANCE MANAGER II - Payroll




          c.  First, type in the destination for your report. 

          d.  Then, enter  the type of  transactions to be included  in this
              report.  If you enter "P",  only the paid transactions will be
              printed.  If you enter "U",  only the unpaid transactions will
              be  printed.   If you  enter  "A",  all transactions  will  be
              printed. 

          e.  Finally, enter  the date range  wanted for your  report.  This
              report  is  compared   to  the  Period  Ending   date  of  the
              transactions. 

          f.  The report will then be printed. 

              NOTE: If  the message  "LOAD PRINTER  WITH AT  LEAST 11"  WIDE
                    PAPER" comes up while you  are waiting for the report to
                    print, your settings for  printing in compressed mode is
                    not  set  up  correctly  in the  G/L  System  Utilities.
                    Please check your printer manual for the correct control
                    codes. 


      5c - PRINTING THE PAYROLL REGISTER 

      This report gives in detail a  gross total of all earnings, deductions
      and liabilities for the selected pay period. 

      When  printing the  PAYROLL  REGISTER (F2),  the following  procedures
      apply: 

          a.  Select "F2" from the reports menu. 

          b.  The following screen will appear: 


                             TO SCREEN/PRINTER/DISK (S/P/D):_ 


                             SELECT PAID,UNPAID OR ALL (P,U,A):_ 
                             ENTER DATE RANGE FOR REPORTS: 
                                     STARTING Month:__ Year:__ 
                                       ENDING Month:__ Year:__ 
                             Pay frequency(A,W,B,S,M):_ 

                             EMPLOYEE ACCOUNT RANGE: 
                                          STARTING EMPLOYEE:____ 
                                            ENDING EMPLOYEE:____ 


          c.  First, type in the destination for your report. 

          d.  Second, select  "P" for paid,  "U" for  unpaid or "A"  for all
              employees.  If you select "U", you  will not have a date range
              selection. 

          e.  Third, enter the date range wanted for your report. 

          f.  Next, answer the "Pay frequency" prompt with either "A" (all),


                                       Page 28
                            FINANCE MANAGER II - Payroll


              "W"  (weekly),  "B"  (biweekly), "S"  (semi-monthly),  or  "M"
              (monthly). 

          g. Finally, select the employee account range you want included in
             this report. 

          h.  The report will then be printed. 



      5d - PRINTING THE CHECK REGISTER 

      This report  shows the checks  you have  written for each  pay period,
      including the  gross pay, total  deductions and  the net pay  for each
      employee. 

      When printing the CHECK REGISTER (F3), the following procedures apply: 

          a.  Select "F3" from the reports menu. 

          b.  The following screen will appear: 


                      TO SCREEN/PRINTER/DISK (S/P/D):_ 


                      ENTER DATE RANGE FOR REPORTS: 
                                STARTING Month:__ Year:__ 
                                  ENDING Month:__ Year:__ 


          c.  First, enter the destination for your report.  Next, enter the
              date range wanted for your report.  This date is the paid date
              and NOT the transaction "Period Ending" date. 

          d.  The report will then be printed. 


      5e - PRINTING THE VACATION & SICK REPORT 

      This report shows the current balance and the used year to date figure
      of vacation and sick hours for any range of employees selected. 

      When  printing  the  VACATION  &   SICK  REPORT  (F4),  the  following
      procedures will apply: 

          a.  Select "F4" from the reports menu. 

          b.  The following screen will appear: 


                      TO SCREEN/PRINTER/DISK (S/P/D):_ 


                                AS OF: Month:__ Year:__ 
                      Skip Inactive Employees  :_ 
                      Pay frequency (A,W,B,S,M):_ 

                      EMPLOYEE ACCOUNT RANGE: 
                                     STARTING EMPLOYEE:____ 


                                       Page 29
                            FINANCE MANAGER II - Payroll


                                       ENDING EMPLOYEE:____ 


          c.  First, type in  the destination for your  report.  Next, enter
              the date wanted for your report. 

          d.  Then, answer the "Skip Inactive  Employees" prompt with "Y" or
              "N". 

          e.  Next, answer the "Pay  frequency" prompt with either "A"(all),
              "W"(weekly), "B"(biweekly), "S"(semi-weekly) or "M"(monthly). 

          f.  Then, enter employee  account number range for  which you want
              the  report to  be printed.   Notice that  when you  reach the
              "Starting Employee"  prompt, FINANCE  MANAGER will  display an
              employee  listing on  your  screen  so you  will  not have  to
              memorize any account numbers. 

          g.  Next, the following screen will appear: 


                     ---------- SELECT SORT ORDER ----------- 
                     |                                      | 
                     |   ESC  Return to Reports Menu        | 
                     |   F1   Employee Number Order         | 
                     |   F2   Zipcode Order                 | 
                     |   F3   Employee Name Order           | 
                     |                                      | 
                     |                                      | 
                     |                                      | 
                     |                                      | 
                     |                                      | 
                     |                                      | 
                     |                                      | 
                     |   ENTER YOUR SELECTION:              | 
                     |                                      | 
                     ---------------------------------------- 


          h.  Select either "F1",  "F2", or "F3" depending on  the order you
              want the report to print in. 

          i.  The report will be printed. 


      5f - PRINTING THE EMPLOYEE LISTING 

      This  report is  a  listing  of all  employees  and the  corresponding
      information in the Employee Account Number data base.  













                                       Page 30
                            FINANCE MANAGER II - Payroll



      When printing this report the following procedures apply: 

          a.  Select "F5" from the reports menu. 

          b.  The following screen will appear: 


                           TO SCREEN/PRINTER/DISK (S/P/D):_ 



                           Skip Inactive Employees  :_ 
                           Pay frequency (A,W,B,S,M):_ 

                           EMPLOYEE ACCOUNT RANGE: 
                                          STARTING EMPLOYEE:____ 
                                            ENDING EMPLOYEE:____ 


          c.  Type in the destination for your report. 

          d.  Next, answer the "Skip  Inactive Employees" prompt with either
              "Y" or "N". 

          e.  Then, answer the "Pay frequency" prompt with either "A" (all),
              "W"  (weekly),  "B"  (biweekly), "S"  (semi-monthly)  or  "M"
              (monthly). 

          f.  Next, enter the  employee account number range  which you want
              printed.  Notice  that when you reach  the "Starting Employee"
              prompt, FINANCE  MANAGER will  display an employee  listing on
              your  screen so  you will  not  have to  memorize any  account
              numbers. 

          g.  Then, the following screen will appear: 


                     ----------- SELECT SORT ORDER ---------- 
                     |                                      | 
                     |   ESC  Return to Reports Menu        | 
                     |   F1   Employee Number Order         | 
                     |   F2   Zipcode Order                 | 
                     |   F3   Employee Name Order           | 
                     |                                      | 
                     |                                      | 
                     |                                      | 
                     |                                      | 
                     |                                      | 
                     |                                      | 
                     |                                      | 
                     |   ENTER YOUR SELECTION:              | 
                     |                                      | 
                     ---------------------------------------- 








                                       Page 31
                            FINANCE MANAGER II - Payroll


          h.  Select either "F1",  "F2", or "F3" depending on  the order you
              want the report to print in. 

          i.  The report will be printed. 



      5g - PRINTING THE EMPLOYEE ADDRESS LABELS 

      This  report provides  mailing labels  for your  employees, sorted  in
      employee number  order, zipcode  order, or  employee name  order.  Use
      one-up labels with any length from 6 to 99 lines per label. 

      When printing this report the following procedures apply: 

          a.  Select "F6" from the payroll reports menu. 

          b.  The following screen will appear: 


                      TO SCREEN/PRINTER/DISK (S/P/D):_ 



                      Number of lines per label:__ 

                      Skip Inactive Employees  :_ 
                      Pay frequency (A,W,B,S,M):_ 

                      EMPLOYEE ACCOUNT RANGE: 
                                    STARTING EMPLOYEE:____ 
                                      ENDING EMPLOYEE:____ 


          c.  Type in the destination for your report. 

          d.  Enter  the number  of lines  per  label (6-99).   This is  the
              number of print lines from the top  of one label to the top of
              the next.  Usually 6 lines for 15/16 inch long labels. 

          e.  If  you  want labels  for  only  employees who  are  currently
              working for  you, answer the "Skip  Inactive Employees" prompt
              with "Y".  If you want labels  for ALL employees answer with a
              "N". 

          f.  Then, answer the "Pay frequency" prompt with either "A" (all),
              "W"  (weekly),  "B"  (biweekly),  "S"  (semi-monthly)  or  "M"
              (monthly). 

          g.  Next, enter the  employee account number range  which you want
              printed.  Notice  that when you reach  the "Starting Employee"
              prompt, FINANCE  MANAGER will  display an employee  listing on
              the lower half of your screen so you will not have to memorize
              any account numbers. 








                                       Page 32
                            FINANCE MANAGER II - Payroll


          h.  Finally, load your printer with  blank labels.  In order to be
              sure that  they are  lined up  properly, answer  the alignment
              prompt with a "Y".  Repeat  this until your labels are aligned
              properly  in your  printer.   Then answer  with  a "N".   This
              prompt will only  be displayed if you are  printing the labels
              to the printer. 

          i.  Next, the following screen will appear: 


                     ----------- SELECT SORT ORDER ---------- 
                     |                                      | 
                     |   ESC  Return to Reports Men         | 
                     |   F1   Employee Number Order         | 
                     |   F2   Zipcode Order                 | 
                     |   F3   Employee Name Order           | 
                     |                                      | 
                     |                                      | 
                     |                                      | 
                     |                                      | 
                     |                                      | 
                     |                                      | 
                     |                                      | 
                     |   ENTER YOUR SELECTION:              | 
                     |                                      | 
                     ---------------------------------------- 

          j.  Select either "F1",  "F2", or "F3" depending on  the order you
              want the report to print in. 

          k.  The labels will be printed. 


      5h - PRINTING THE PAID PAYROLL RECAP REPORT 

      This report will  show TOTAL earnings, deductions  and liabilities for
      the period you select.  The data used in this report will include ONLY
      PAID transactions and  the dates selected are the paid  check date NOT
      the "Period Ending" date. 

      When printing this report the following procedures apply: 

          a.  Select "F7" from the reports menu. 

          b.  The following screen will appear: 


                          TO SCREEN/PRINTER/DISK (S/P/D):_ 

                          ENTER DATE RANGE FOR REPORTS: 
                                       STARTING DATE:__-__-__ 
                                         ENDING DATE:__-__-__ 

          c.  First, enter the destination for your report.  Next, enter the
              starting date range and the  ending date range wanted for your
              report.  Remember,  this is  the "Paid  Date" not  the "Period
              Ending" date. 

          d.  The report will then be printed. 



                                       Page 33
                            FINANCE MANAGER II - Payroll



      5i - PRINTING THE QUARTERLY TAX SUMMARY 

      This report lists each employee,  social security number, taxed wages,
      FICA wages, and  SUTA wages for the time period  selected (usually one
      quarter).  It also shows the Federal, State, and City tax liability by
      date payroll paid which greatly simplifies your 941 reporting. 

      When printing this report the following procedures apply: 

          a.  Select "F8" from the reports menu. 

          b.  The following screen will appear: 

                          TO SCREEN/PRINTER/DISK (S/P/D):_ 

                          ENTER DATE RANGE FOR REPORT: 
                                       STARTING Month:__  Year:__ 
                                         ENDING Month:__  Year:__ 

          c.  First, enter the destination for your report.  Next, enter the
              date range wanted for your  report.  Usually you should select
              a quarter (i.e. month 1-3, January through March). 

          d.  The report will then be printed. 


      5j - PRINTING THE NON-POSTED TRANSACTION JOURNAL 

      This  report is  a listing  of transactions  which have  not yet  been
      posted to your General Ledger. 

      When printing this report the following procedures apply: 

          a.  Select "F9" from the reports menu. 

          b.  The following screen will appear: 


                      TO SCREEN/PRINTER/DISK (S/P/D):_ 


                      SELECT PAID,UNPAID OR ALL (P,U,A):_ 


          c.  Type in destination for your report. 

          d.  Next, enter  the type of  transaction to be  included.  Answer
              either "P" (paid), "U" (unpaid) or "A" (all). 

          e.  The report will then be printed. 


      5k - PRINTING THE GENERAL LEDGER DISTRIBUTION REPORT 

      This report shows the total  amount of payroll transactions (including
      payments) posted to  each General Ledger account  number.  This report
      includes  both PAID  and UNPAID  transactions.  Please  remember, that
      only paid transactions will be actually posted to the General Ledger. 



                                       Page 34
                            FINANCE MANAGER II - Payroll


          a.  Select "F10" from the reports menu. 

          b.  The following screen will appear: 


                           TO SCREEN/PRINTER/DISK (S/P/D):_ 


                            ENTER DATE RANGE FOR REPORTS: 
                                    STARTING Month:__ Year:__ 
                                      ENDING Month:__ Year:__ 


          c.  First, enter the destination for your report.  Next, enter the
              date range wanted for your report.

          d.  The report will then be printed. 













































                                       Page 35
                            FINANCE MANAGER II - Payroll


                     SECTION SIX - WRITING EMPLOYEE PAYCHECKS 


      This section  will discuss how  to print Payroll checks,  void checks,
      and enter manual (handwritten) checks, if desired. 

      In  order to  get to  the Payroll  Checks menu,  select "F5"  from the
      Payroll Main menu.  It appears as follows: 


                     ---------- PAYROLL CHECKS MENU --------- 
                     |                                      | 
                     |   ESC  Return to Payroll Main Menu   | 
                     |   F1   Print Checks                  | 
                     |   F2   Void Checks                   | 
                     |   F3   Manual Checks                 | 
                     |                                      | 
                     |                                      | 
                     |                                      | 
                     |                                      | 
                     |                                      | 
                     |                                      | 
                     |                                      | 
                     |   ENTER YOUR SELECTION:              | 
                     |                                      | 
                     ---------------------------------------- 

      We will  discuss each  of the  above menu  selections in  the sections
      which follow. 


      6a - PRINTING CHECKS 

      Load  your printer  with your  pre-printed continuous-form  checks and
      check to be sure you have  set up the Payroll configuration (utilities
      menu) for the  checks you will be using (Nebs check form # 9001). 

      Select "F1"  from the  checks menu  and you will  be prompted  for the
      following information: 

      NOTE: In order to  print continuous form checks you need  an 85 column
            printer. 

                        Enter DATE for Checks:__-__-__ 
                        Enter NEXT Check Number:____ 
                        G/L Check Account Number:____ 
                        Payroll for type(A,W,B,S,M):_ 

          a.  Enter the date you want printed on your checks. 

          b.  Enter  the check  number of  the  first check  in the  printer
              (FINANCE  MANAGER will  not print  the check  number on  check
              lineups).   If  your  checks  do not  have  pre-printed  check
              numbers,  enter the  number you  wish to  have printed  on the
              first  LIVE   (non-line  up)  check.   FINANCE   MANAGER  will
              automatically  increment  the  checks  numbers  for  the  live
              printed checks.





                                       Page 36
                            FINANCE MANAGER II - Payroll


          c.  Enter  the  General Ledger  checking  account  number for  the
              checks  you are  writing.  It  is important  that you  use the
              correct  G/L  account number  otherwise  your  funds for  this
              check(s) will come out of  the wrong account.  Notice when you
              reach  this  section, how  FINANCE  MANAGER  will display  the
              account number listing on your screen  so you will not have to
              memorize any account numbers. 

          d.  Enter the  category for which  you want checks to  be printed.
              Enter   "A"  (all),   "W"   (weekly),   "B"  (biweekly),   "S"
              (semi-monthly) or "M" (monthly). 

          e.  After entering  the category FINANCE  MANAGER will ask  you if
              you want printer lineup. 

                          Print Alignment Pattern (Y/N):_ 

              Answer with a "Y" until you have the checks properly lined up.
              When you  answer this prompt with  a "N", your checks  will be
              printed. 

      Until you answer the alignment pattern with a "N", you may at any time
      abort the  check printing process and  return to the menu  by pressing
      the ESC key. 


      6b - VOIDING PRINTED CHECKS 

      Check written to  a specific employee may be voided  by selecting "F2"
      from the checks  menu.  This function will allow you  to void the last
      check written  and also mark  the transaction(s) unpaid  again, either
      computer  generated  or  manual.   Upon selecting  this  function  the
      following screen will appear: 

                          Enter Check Number to Void:____ 


      If you  cannot remember which check  number you wanted to  void simply
      hit ENTER.   FINANCE MANAGER  will display  on the  lower half  of the
      screen all checks written, starting with the last one. 


      6c - ENTERING MANUAL CHECKS 

      Another great feature  included in the FINANCE  MANAGER Payroll module
      is  the  ability  to  enter  checks manually.   This  allows  you  the
      flexibility of  hand writing  checks.  You simply  write the  check by
      hand  if you  do not  want  to do  a full  check  run or  do not  have
      pre-printed checks. 

      In order to use this feature,  select "F3" from the Checks menu.  Upon
      selecting this function you will be prompted as listed below: 


                    Enter DATE for Checks      :__-__-__ 
                    Enter NEXT Check Number    :____ 
                    G/L Check Account Number   :____ 
                    Payroll for type(A,W,B,S,M):_ 

      Enter the DATE, CHECK NUMBER, G/L  ACCOUNT NUMBER AND PAY FREQUENCY as


                                       Page 37
                            FINANCE MANAGER II - Payroll


      in  section 6a.   This procedure  is just  like printing  computerized
      checks, except that no check will be printed. 

      Finance Manager will then display all the transactions (one at a time)
      that are not paid so you can select which ones to pay. 

      When a transaction to  be paid is found you will  be prompted for "PAY
      THIS EMPLOYEE".  Answer with  a "Y" to pay or "N" to  skip and not pay
      the transaction. 

      After all non-paid transactions are shown you will then be returned to
      the Checks Menu for further processing. 


















































                                       Page 38
                            FINANCE MANAGER II - Payroll


                                   SECTION SEVEN 
                           OTHER FEATURES AND FUNCTIONS 


      The remainder of the features and  functions of the Payroll Module are
      contained on the Payroll Utilities Menu.  These features are also very
      powerful  and  important  functions  of this  module.   To  use  these
      features select "F6"  from the Payroll Main Menu.   The following menu
      will be shown: 

                     -------- PAYROLL UTILITIES MENU -------- 
                     |                                      | 
                     |   ESC  Return to Payroll Main Menu   | 
                     |   F1   Sort Transactions             | 
                     |   F2   Post Transactions to GL       | 
                     |   F3   End of Period Posting         | 
                     |   F4   Payroll Configuration Setting | 
                     |   F5   Payroll Tax Tables            | 
                     |   F6   Print End of Year W-2s        | 
                     |                                      | 
                     |                                      | 
                     |                                      | 
                     |                                      | 
                     |   ENTER YOUR SELECTION:              | 
                     |                                      | 
                     ---------------------------------------- 

      In this section we will discuss each  function as well as its uses and
      features.  Since  setting up  the Configuration settings  are required
      before you  will be able  to enter  any transactions, we  will discuss
      this selection first. 


      7a - CONFIGURATION SETTINGS 

      The configuration settings allow you  to configure this module to your
      specific company, and to its  specific General Ledger account numbers.
      This  configuration  is  very  important  to  your  transactions,  for
      pre-printed continuous form  checks and to the  General Ledger account
      numbers used.   We recommend using  Nebs checks form #9001  and either
      standard business  window envelopes  or Nebs  form #775  DU-O-VUE Dual
      window  envelopes.  For  the W-2s  we recommend  using Nebs  W-2s form
      #9852.  Nebs toll free order number is 1-800-225-9550. 



















                                       Page 39
                            FINANCE MANAGER II - Payroll


      By selecting "F4"  from the utilities menu you will  see the following
      screen: 

      ID#'S FED:____________ STATE:____________ Detail posting to G/L(Y/N):_ 
      COMPANY  :_______________________________  Work days/year :___ 
      ADDRESS 1:_______________________________  HOURS PER:  Day:_____ 
      ADDRESS 2:_______________________________             Week:_____ 
      CITY     :__________________ STATE:__           Semi-Month:______ 
      ZIPCODE  :_________                                  Month:______ 

      FICA :_____% LIMIT:__________ G/L ACCOUNTS:Liability:____ Expense:____ 
      FUTA :_____%      :__________              Liability:____ Expense:____ 
      SUTA :_____%      :__________              Liability:____ Expense:____ 
      SDI  :_____%      :__________ Emply Pays:_ Liability:____ Expense:____ 
      OTHER:_____%      :__________              Liability:____ Expense:____ 
      G/L ACCOUNT for EXTRA Deductions:_____
      G/L LIABILITY ACCOUNTS:Federal withholding:_____State withholding:_____ 
                                City withholding:_____    

      G/L EXPENSE ACCOUNTS:       Salary & Wages:_____ 
                                                                       Row Col 
      CHECK WRITING:Print Check#(Y/N):_Print Address(Y/N):_Name Location:__ __ 


      The configuration  settings must be set  up for each set  of books you
      have.   Be sure  to  carefully employ  the  following procedures  when
      setting up the configuration settings. 

      Prior to setting up this configuration,  you must set up (add) several
      Payroll accounts to  your G/L Chart of Accounts.   These accounts must
      be active accounts in  your G/L Chart of Accounts in  order to be able
      to use  the Payroll Module  correctly (i.e.  do not use  these account
      numbers for  any General  Ledger transactions  - only  for use  by the
      Payroll module). 

      These accounts  are used  as interface  accounts and  posting accounts
      between the  Payroll module and  your General Ledger module.   You can
      not use  the Payroll module  without these important accounts  even if
      you want to  use the Payroll module  as a stand alone  module.  Set up
      one of each,  of the following accounts in your  G/L Chart of Accounts
      for Payroll: 

           a.  FICA Liability (type L) account 
           b.  FICA Expense (type E) account 
           c.  FUTA Liability (type L) account 
           d.  FUTA Expense (type E) account 
           e.  SUTA Liability (type L) account 
           f.  SUTA Expense (type E) account 
           g.  SDI Liability (type L) account 
           h.  SDI Expense (type E) account 
           i.  Other payroll tax Liability (type L) account 
           j.  Other payroll tax Expense (type E) account 
           k.  Federal Withholding (type L) account 
           l.  State Withholding (type L) account 
           m.  City Withholding (type L) account 
           n.  Salary & Wages (type E) account 
           o.  Checking account (type A) if not already set up 
           p.  Extra Deductions (type L) account 




                                       Page 40
                            FINANCE MANAGER II - Payroll


      When setting up the Payroll check printing feature for your continuous
      checks  and   other  forms,   you  must   specify  in   the  following
      configuration what  and where  you want to  have the  following fields
      printed: 

      ID#'S FED           Enter your employer  federal identification number
                          as it will be listed on your W-2 forms.           

      STATE               Enter your employer state identification number as
                          it will be listed on your W-2 forms. 

      COMPANY             Enter your  company name as  it will be  listed on
                          your W-2 forms. 

      ADDRESS 1           Enter the  address of your  company as it  will be
                          listed on your W-2 forms. 

      ADDRESS 2           You may enter a second address for your company as
                          it will be listed on your W-2 forms.   

      CITY                Enter your company's city. 

      STATE               Enter your company's two  letter state or province
                          code. 

      ZIPCODE             Enter your company's zipcode or postal code. 

      DETAIL POSTING      Allows the option of  posting transactions to your 
      TO G/L (Y/N)        General  Ledger  in   detail  or  summary  format.
                          Selecting  detail posting  will post  each Payroll
                          transaction   as  a   individual  General   Ledger
                          transaction and  you can  post at any  time; while
                          answering "N" will  cause the Payroll transactions
                          to be  grouped and  summarized when posted  to the
                          General Ledger.  Which ever  method you choose the
                          financial results will be  the same.  There is one
                          other  difference,  however,  if  you  select  the
                          detail  posting,  the actual  Payroll  transaction
                          date  will be  used  when posting  to the  General
                          Ledger, while summary posting  will prompt you for
                          a POSTING  DATE   and  will  post   every  entered
                          transaction to  the posting date (even  those with
                          different month dates).  If you are a beginner and
                          do not have many transactions, we suggest that you
                          select "Y" at this prompt. 

      WORK DAYS/          Enter the actual number of days your employees 
      YEAR                will  work  each   year  including  all  holidays,
                          usually 260 (52x5) days. 

      HOURS PER           Enter the number of hours your employees will work 
      DAY, WEEK,          for the pay periods listed.  When calculating for 
      SEMI-MONTH,         Semi-Month and Month, calculate the hours per 
      MONTH               year.  Example:  If your  employees work  40 hours
                          per week and are paid semi-monthly, multiply 40 by
                          52  weeks  in the  year,  divided  by the  24  pay
                          periods  per year  to  equal 86.67  hours per  pay
                          period. 

      FICA, FUTA, SUTA,   For these fields, enter the percentage of tax, the 


                                       Page 41
                            FINANCE MANAGER II - Payroll


      SDI, OTHER          yearly maximum  taxable income limit, and  the G/L
                          employer  liability accounts  as well  as employer
                          expense accounts for these taxes. 

                          FICA is paid by both  the employee and employer at
                          the percent input. 

                          FUTA is paid by the employer. 

                          SUTA is paid by the employer. 

                          SDI  is  paid  by   either  the  employer  or  the
                          employee.  Answer the "EMPLY PAYS" prompt with "Y"
                          to have the employee pay this amount, or enter "N"
                          to have the employer pay.   In most states this is
                          paid by the employer ("N"). 


      G/L ACCOUNTS        Enter here  the account  numbers you  have created
                          for:  FICA,  FUTA,  SUTA,  SDI,  Other  and  Extra
                          Deductions in  the G/L Chart of  Accounts in their
                          respective fields.  An account number listing will
                          appear on the screen when  you are at this prompt.
                          These accounts are used to keep track of the total
                          amounts deducted for liabilities and expenses.  If
                          you do not deduct  from the employee's paycheck or
                          you do not pay a particular amount you may enter a
                          "0" for this account number. 


      G/L LIABILITY       Enter here the account numbers you have created 
      ACCOUNTS            for:  Federal withholding,  State withholding  and
                          City withholding in the G/L chart of Accounts.  If
                          you are not  required to pay any one  of the above
                          withholding taxes, and have  not set up an account
                          in the General  Ledger you may enter  "0" for this
                          account number. 

      G/L EXPENSE         Enter here the account number you have created for 
      ACCOUNTS            the Salary  & Wages  account in  the G/L  chart of
                          accounts.  REQUIRED. 


      CHECK WRITING       At the "Print Check#(Y/N):_"  prompt answer "Y" if
                          you want the check number to be printed and "N" if
                          you have the check  number already printed on your
                          checks." 

                          At the  "Print Address(Y/N):_" prompt,  answer "Y"
                          if you want your  employee's address to be printed
                          on  his check,  or  "N"  if you  do  not want  his
                          address to be printed on his check. 

                          At  the "Name  Location:__  __"  prompt.  Enter  a
                          number between 32  and 36 in the  row field (which
                          indicates the number of lines  from the top of the
                          check starting  with the  first line on  the stub)
                          and a number between 2  and 29 in the column field
                          (which indicates  the number  of columns  from the
                          edge of the check, after the perforations).  These


                                       Page 42
                            FINANCE MANAGER II - Payroll


                          numbers will place the name and address so that it
                          will show correctly when  using a window envelope.
                          (Standard business window envelope uses Row 34 and
                          COL 11). 

      FINANCE MANAGER  will then ask  you "Are inputs correct  (Y/N):Y".  If
      you take the default of "Y"  then you be notified that FINANCE MANAGER
      is saving your  configuration and then you will return  to the Payroll
      Utilities menu.   If you answer "N"  the cursor will return  to "ID#'S
      FED" field and you can start again. 


      7b - SORTING TRANSACTIONS 

      The Payroll module normally keeps  transactions organized in the order
      in which they are input.  The Sort function allows the user to sort or
      organize  the  transactions  by:  date  of  input,  transaction  date,
      employee order or check number order. 

      The sort  procedure is not  a required feature  but it is  useful, for
      example,  when  printing  transaction  journals  or  employee  balance
      reports and you would like to insure that all transactions are in date
      order.  To  accomplish this, all you  have to do is  select date order
      sort.  It  would be a  good practice to  sort the transactions  once a
      month before  printing your reports.   The sort order does  not affect
      any  report balances  and it  is purely  for cosmetic  purposes.  When
      sorting  transactions this  will also  free  up disk  space which  was
      formally occupied by deleted transactions. 

      To start  sorting transactions, select  "F1" at the  Payroll Utilities
      Menu.  The following screen appears: 


                     ----------- SELECT SORT ORDER ---------- 
                     |                                      | 
                     |   ESC  Return to Utilities Menu      | 
                     |   F1   Transaction Input Order       | 
                     |   F2   Date Order                    | 
                     |   F3   Employee Order                | 
                     |   F4   Check Number Order            | 
                     |                                      | 
                     |                                      | 
                     |                                      | 
                     |                                      | 
                     |                                      | 
                     |                                      | 
                     |   ENTER YOUR SELECTION:              | 
                     |                                      | 
                     ---------------------------------------- 


      1.  Select the order in which you  would like to sort the transactions
          by. 

      2.  FINANCE MANAGER automatically sorts all transactions. 

      3.  Press any key to exit and return to the Payroll Main Menu when the
          sort is completed. 

      If you  have more transactions than  memory can hold at  one time, the


                                       Page 43
                            FINANCE MANAGER II - Payroll


      default disk  drive is used  to store  a temporary file  while sorting
      transactions.   It  is  important  to remember,  therefore,  that  the
      default drive must have adequate remaining disk space, and it must NOT
      be "write protected" . 

      The system  will tell if  there is not  enough memory on  your default
      drive  to sort  your file,  the sort  will abort  and you  must put  a
      formatted, blank disk in your  default drive (usually drive A:) before
      selecting your sort order again. 


      7c - POSTING TO THE GENERAL LEDGER 

      Payroll Utilities  Menu selection "F2" will  post transactions entered
      into  this  module to  your  General  Ledger accounts.   Depending  on
      whether  you  selected  the  detail  or summary  post  option  in  the
      configuration (described  above) your Payroll transactions  are posted
      according to the option you selected. 

      You'll  be pleased  to know  that this  posting procedure  is a  smart
      procedure.  It will only post  the transactions which have not already
      been posted.  Because of this  incredible time saving feature, you may
      accidentally  post as  many times  as you  wish without  worry of  any
      errors or double posting. 

      Note: This posting procedure will  only post the transactions (checks)
            which have already been paid. 

      This  posting process  is mandatory  in  order to  interface with  the
      General Ledger.   Without running  this procedure, no  transactions or
      activity  from  this   module  will  shown  on   your  General  Ledger
      reports. 

      NOTE: After this posting procedure is complete, the transactions which
            were posted can no longer be changed. 

      Because of this unique safety feature, we recommend that you only post
      after  you are  absolutely  sure all  transactions  have been  entered
      correctly and that any adjustments  have been made.  Generally, a good
      rule for you  to follow is to  post transactions once a  month, on the
      last day of that month. 

      After you  have run this procedure,  you can print any  General Ledger
      reports, and all  paid payroll from this module  will be automatically
      included in your General Ledger reports. 

      In order to  run this procedure, select "F2" on  the Payroll Utilities
      menu.   If you  selected the  detail posting  option the  posting will
      commence.   If you  did not  select detail  posting you  will then  be
      prompted for a posting date.  This prompt is as follows: 

                       Enter Post Transaction Date:__-__-__ 

      When using the summary post option this date will show for all of your
      Payroll transactions  in the  General Ledger as  the date  of posting.
      Usually this date  should be the current date (i.e.  the last date for
      the  current  month).  If  detail  posting  was selected  the  Payroll
      transactions in your  General Ledger will have the same  dates as they
      do in the Payroll Journal. 



                                       Page 44
                            FINANCE MANAGER II - Payroll



      7d - PAYROLL TAX TABLES 

      WARNING: It  is very  important that  you  enter your  Tax Table  data
               correctly.   Hooper International  assumes  no liability  for
               errors.   We  consider  it  mandatory to  test  your  payroll
               deductions  by manually  calculating your  payroll to  verify
               that all deductions are correct. 

      The payroll tax tables contain all  of the Federal, State and City tax
      information  as well  as  any other  information  about Earned  Income
      Credit for your particular state.  FINANCE MANAGER needs these numbers
      to calculate your employee's taxes  and withholdings.  Many states and
      cities have different percentages and  these percentages are liable to
      change every  year.  With  FINANCE MANAGER you  can modify  the tables
      yourself to keep them current with changing tax laws. 

      By selecting  "F5" from the  Payroll Utilities  menu you will  see the
      following screen: 


      TAX TABLE(F,S,C,E):_     DEDUCT FED TAX(Y/N):_ Max Amount:__________ 
      MARITAL TABLE(M/S/H):_ ANNUAL DEDUCTION:Amt:________ Pct:______%Greater:_
      ANNUAL WAGES OVER:__________TAX AMOUNT:__________PLUS PERCENTAGE:_______%
                       :__________          :__________               :_______%
                       :__________          :__________               :_______%
                       :__________          :__________               :_______%
                       :__________          :__________               :_______%
                       :__________          :__________               :_______%
                       :__________          :__________               :_______%
                       :__________          :__________               :_______%
                       :__________          :__________               :_______%
                       :__________          :__________               :_______%
                       :__________          :__________               :_______%
                       :__________          :__________               :_______%
                       :__________          :__________               :_______%
                       :__________          :__________               :_______%
                       :__________          :__________               :_______%
                       :__________          :__________               :_______%

      To set up the Payroll Tax Tables enter the following: 

      1.  Enter the type  of Tax Table you will be  entering on this screen.
          "F" Federal, "S" State, "C" City and "E" Earned Income Credit. 

                               TAX TABLE (F,S,C,E):F 


      2.  For state  and city  tax only.  Use  if you are  in a  state which
          allows you  to deduct the amount  of Federal tax you  have already
          paid.  (optional). 

                              DEDUCT FED TAX (Y/N):Y 









                                       Page 45
                            FINANCE MANAGER II - Payroll


      3.  For state and  city tax only.  Use with item  two above to specify
          the maximum federal tax deduction allowed in your state.  If there
          is no maximum enter 999999.99 (optional). 

                               Max Amount:999999.99_ 


      4.  Specify the type of tax table  you will be entering.  "M" married,
          "S" single, "H" head of household. 

                              MARITAL TABLE (M/S/H):M 


      5.  Enter the ANNUAL  amount for a SINGLE person  with ONE WITHHOLDING
          ALLOWANCE.  Refer to the  Federal Employer's Tax Guide Publication
          15, page 20 (Income tax withholding percentage method). 

                          ANNUAL DEDUCTION Amt:1950______ 


      6.  For  state or  city tax  only.   Enter the  percentage your  state
          income  tax  guide allows  an  alternative  to entering  a  dollar
          amount.   You can  also use  this field  if your  state gives  the
          option of  a dollar amount  or a  percentage amount as  the annual
          deduction amount. 

                                    Pct:17____% 


      7.  For state  or city tax only.   Use if you  are in a state  or city
          which requires you to take either  a dollar amount or a percentage
          amount and gives a qualifier.   For example, your state income tax
          guide tells you  to take either $5,000 or 17%  of the gross income
          which ever is greater.  Enter "Y".  Or your state income tax guide
          may tell  you to  take either  $5,000 or 17%  of the  gross income
          which ever is less.  You enter "N". 

                                     Greater:Y 


      8.  Enter the  beginning wage amount  your state specifies  from which
          you will begin deducting taxes.  Refer  to page 23 in your Federal
          Tax Guide, table 7. 

                           ANNUAL WAGES OVER:3050______ 


      9.  Enter  the dollar  amount you  will  withhold in  addition to  the
          percentage listed in section 9.   

                               TAX AMOUNT:0.00______ 











                                       Page 46
                            FINANCE MANAGER II - Payroll


      10. Enter the  percentage of the  employee's wages you  will withhold.
          Refer to  the same page  in the Federal Tax  Guide as you  did for
          number 7. 

                             PLUS PERCENTAGE:15_____% 


      When you finish entering all of the amounts in their respective fields
      press the PgDn key and FINANCE MANAGER will prompt "Are Inputs Correct
      (Y/N):_".  If you answer "Y" FINANCE MANAGER will save your inputs and
      the cursor will return to the Tax Table field.  Continue to enter your
      other tax  tables.  If you  enter "N" at  the prompt, the  cursor will
      return  to the  Tax Table  field and  will allow  you to  reenter your
      inputs.  It is very important that you enter the correct data into the
      correct fields  otherwise all of  your tax calculations will  be wrong
      for the entire year. 

      Continue entering  the Tax Table  information for your City  and State
      and the information for Earned Income Credit.  Please refer to the Tax
      Guides for your respective City and State.  Repeat steps 1-10 for each
      of the Tax tables you will need for your particular City and State. 

      After you have  entered all your Tax Table information  for each table
      that is  necessary for  your City  and State  and the  Advanced Income
      Credit information, make sure you  have saved your inputs by answering
      "Are Inputs Correct" before you  return to the Payroll Utlilities main
      menu. 


      7e - PRINTING END OF YEAR W-2s 

      This feature  of FINANCE  MANAGER will  print W-2  forms automatically
      without you having to figure out any of the amounts. 

      Load  your  printer  with   your  pre-printed  continuous  W-2  forms.
      Continuous W-2s can be ordered from Nebs.  Nebs toll free order number
      is 1-800-225-9550.  If  you do not have continuous W-2  forms the same
      information can be obtained from your Payroll Register Report. 

      Select "F6" from  the Payroll Utilities Menu and  FINANCE MANAGER will
      ask you to enter a city short name (to be placed in box 22 on the W-2)
      and ask if you want a  test printer lineup printed.  These prompts are
      as follows: 

                          Enter City short name:________ 
                          Print Alignment Pattern (Y/N):_ 

      First enter a eight character city  short name.  Next enter the "Print
      Alignment Pattern" prompt with a "Y"  until you have the W-2s properly
      lined up.   When you answer  this prompt with  an "N", your  W-2s will
      then be printed.   Until you answer the alignment pattern  with a "N",
      you  may abort  the W-2  printing process  and return  to the  menu by
      pressing the ESC key. 

      NOTE: Notice the warning at the bottom  of the screen that warns about
            Extra-Deductions  and  Non-taxable   Other  Earnings  being  not
            included on  the W-2 statement.   These amounts must  be entered
            manually in Box 16 or 16a as appropriate. 




                                       Page 47
                            FINANCE MANAGER II - Payroll



      After the W-2 forms have been  printed, FINANCE MANAGER will return to
      the Payroll Utilities menu. 



























































                                       Page 48
                            FINANCE MANAGER II - Payroll


                       SECTION EIGHT - ENHANCEMENTS & HINTS 

      8a - ENHANCEMENTS BY VERSION 

      Version 1.2 - First release of the Payroll Module. 

      Version 1.3 - All system  enhancements included in version  1.3 of the
                    General Ledger module. 
                  - Pop-up employee/chart  of account window  while entering
                    transaction search parameters. 
                  - Added city name shortname override for W-2s. 
                  - Ability to delete paid or posted payroll transactions. 
                  - Ability to select number  of city deductions independent
                    of the state deductions. 
                  - Added  two  other  earnings  and  one  additional  other
                    deduction  categories with  the  ability  to select  G/L
                    account number. 
                  - Taxable Y/N option for above other earnings/deductions. 
                  - Payroll recap report format enhanced. 
                  - Added select employees option to Payroll Recap Report. 
                  - Added  new Tax  Summary Report  which greatly  eases 941
                    reporting requirements. 
                  - SDI payable by employee or employer option. 


      8b - HELPFUL HINTS AND SUGGESTIONS 

        * Keep a CURRENT backup copy of  all your data files.  Each time you
          have finished entering new data make a copy of your data files and
          have at  least four set's  which you rotate.  This  will safeguard
          against loss of data due to a power failure or other problems. 

        * Use the  Shift PrtSc keys  to make a  hard copy of  current screen
          display. 

        * You  may run  this module  WITHOUT  the interface  to the  General
          Ledger module simply  by not posting to the General  Ledger (F2 on
          the  Utilities Menu).   The  system will,  however,  post to  your
          General Ledger  when you do  an End of  Period Posting (F3  on the
          Utilities Menu).   To totally avoid  any interface, simply  set up
          this module with a separate data file, using a different name than
          your General  Ledger data file  name.  You will, however,  have to
          set up a few dummy G/L accounts (the required G/L accounts need to
          run this module). 

        * When  printing checks,  be sure  that  your printer  can print  85
          column across.  Deviation  from this will result  in the inability
          to line up your pre-printed checks. 

        * The following explains how FINANCE MANAGER figures taxes: 

          1. FINANCE MANAGER figures the  yearly gross income by multiplying
             amount paid per pay period by either: 

                       12 for those employees paid monthly 
                       24 for those employees paid semi-monthly 
                       26 for those employees paid biweekly 
                       52 for those employees paid weekly 

          2. Subtracts deductions. 


                                       Page 49
                            FINANCE MANAGER II - Payroll



             Deductions =  Annual tax  deduction amount  (on the  tax table)
             times the number in the  State deduction field (in the employee
             account data base) 

             If the employee has more than  one deduction and the annual tax
             deduction amount (on the tax table) multiplied by the number in
             the state deduction  field (in the employee  account data base)
             is not correct  according to the state tax guide,  then you can
             add any additional amounts in the state exemption field (in the
             employee  account  data base).   For  example,  the annual  tax
             deduction  amount for  a  single deduction  is  $2,500 and  the
             annual tax deduction  amount for two deductions  is $3,000.  If
             the employee  has two deductions  you will enter $2,500  in the
             annual tax deduction amount field (on  the tax table) and a "1"
             in  the state  deduction field  (in the  employee account  data
             base).  1 times  $2,500 = $2,500.  Enter the  remaining $500 in
             the state annual exemption field  (in the employee account data
             base). 

          3. Subtracts  amount  in  State  annual exemption  field  (in  the
             employee account data base) 

          4. Subtracts Federal Income  Tax already paid if  you answered "Y"
             on the tax table and your state allows it to be deducted. 

          5. All of the above equals the annualized Taxable Income. 

          6. From  the Taxable  Income  FINANCE MANAGER  will calculate  the
             taxes that the employee will pay. 

          7. Finally, if your  state gives you a tax credit  enter the total
             dollar  amount in  the State  Annual  Tax Credit  field in  the
             employee account data base. 

          8. The annualized Payroll deduction is  then divided by the number
             of pay periods  in one year to give you  the deduction for this
             pay period. 

        * If you have multiple state payroll you have two options: 

           A. Set up  a set  of books for  each state and  then use  the G/L
              merge transactions  function to  combine the  G/L transactions
              into one set of books. 

           B. Using the  DOS copy command,  create different tax  tables for
              each state and save each one as a seperate filename.  Copy the
              one you need to the filename  of your set of books (e.g.  COPY
              COLORADO.TAX WORK.TAX to use Colorado tax tables). 













                                       Page 50
                            FINANCE MANAGER II - Payroll


                                   SECTION NINE 
                              PAYROLL DISK FILE NAMES 

      Listed below is a description of files on your payroll disk. 

      File name        Description 
      -------------    --------------------------------------------- 
      FMPR     000  -  Payroll overlay file 0. 
      FMPR     001  -  Payroll overlay file 1. 
      FMPR     002  -  Payroll overlay file 2. 
      FMPR     003  -  Payroll overlay file 3. 
      FMPR     004  -  Payroll overlay file 4. 
      FMPR     CHN  -  Payroll module. 
      CONV-PR  COM  -  Conversion program for version 1.2 datafiles. 
      README   BAT  -  Displays this file on screen. 
      ORDER    DOC  -  Blank order form which can be printed. 
      FMPR-DOC ARC  -  Payroll documentation manual (Archived). 
      PRINT-PR BAT  -  Prints manual for printer. 
      PKUNPAK  EXE  -  De-Archive program for manual. 
      WORK     CHR  -  Work Demo - GL Chart of accounts data file. 
      WORK     CNF  -  Work Demo - System Configuration data file. 
      WORK     EMP  -  Work Demo - PR Employees data file. 
      WORK     GLT  -  Work Demo - GL Transaction data file. 
      WORK     PRF  -  Work Demo - Payroll Configuration file. 
      WORK     PRK  -  Work Demo - PR Check Configuration data file. 
      WORK     PRT  -  Work Demo - PR Transactions data file. 
      WORK     TAX  -  Work Demo - PR Federal & Colorado tax file. 



































                                       Page 51
                            FINANCE MANAGER II - Payroll


                           APPENDIX A - SAMPLE REPORTS 

                                   Table of Contents 

          Payroll Journal . . . . . . . . . . . . . . . . . . . . . . . . . 53 

          Payroll Register  . . . . . . . . . . . . . . . . . . . . . . . . 54 

          Check Register  . . . . . . . . . . . . . . . . . . . . . . . . . 55 

          Vacation & Sick Report  . . . . . . . . . . . . . . . . . . . . . 56 

          Employee Listing  . . . . . . . . . . . . . . . . . . . . . . . . 57 

          Employee Address Labels . . . . . . . . . . . . . . . . . . . . . 58 

          Paid Payroll Recap  . . . . . . . . . . . . . . . . . . . . . . . 59 

          Quarterly Tax Summary . . . . . . . . . . . . . . . . . . . . . . 60

          Non-Posted Transaction Journal  . . . . . . . . . . . . . . . . . 61 

          General Ledger Distribution . . . . . . . . . . . . . . . . . . . 62 







































                                       Page 52
                          FINANCE MANAGER II - Payroll


JUL-5-89                       WORK DEMO ACCOUNTS                      PAGE 1
9:43am                    Colorado Springs, CO  80920
                                PAYROLL JOURNAL
                             MAY-89 Through JUL-89

                                           -- G/L  DEBIT --   -- G/L CREDIT --
  DATE   EMPL   EMPLOYEE NAME    TYPE CD   ACT#    AMOUNT     ACT#    AMOUNT
-------- ---- ------------------ --------  ----  ----------   ----  ----------
05-27-89    1 First Employee     EARNINGS  5010    1,500.00   1010    1,231.72
                                 FED WITH                     2050      113.75
                                 STATE WH                     2051       41.88
                                 FICA      5011      112.65   2053      225.30
                                 FUTA      5012        9.00   2054        9.00
                                 SUTA      5014       46.50   2055       46.50
                                 SDI       5015        6.15   2056        6.15

06-30-89    1 First Employee     EARNINGS  5010    1,500.00   1010    1,231.72
                                 FED WITH                     2050      113.75
                                 STATE WH                     2051       41.88
                                 FICA      5011      112.65   2053      225.30
                                 FUTA      5012        9.00   2054        9.00
                                 SUTA      5014       46.50   2055       46.50
                                 SDI       5015        6.15   2056        6.15

06-30-89 COLO Colorado Employee  EARNINGS  5010    1,500.00   1010    1,231.72
                                 FED WITH                     2050      113.75
                                 STATE WH                     2051       41.88
                                 FICA      5011      112.65   2053      225.30
                                 FUTA      5012        9.00   2054        9.00
                                 SUTA      5014       46.50   2055       46.50
                                 SDI       5015        6.15   2056        6.15

07-14-89 COLO Colorado Employee  EARNINGS  5010    1,500.00      0    1,231.72
                                 FED WITH                     2050      113.75
                                 STATE WH                     2051       41.88
                                 FICA      5011      112.65   2053      225.30
                                 FUTA      5012        9.00   2054        9.00
                                 SUTA      5014       46.50   2055       46.50
                                 SDI       5015        6.15   2056        6.15
                                                 ----------         ----------
                                                   6,697.20           6,697.20





















                                     Page 53
                          FINANCE MANAGER II - Payroll


JUL-5-89                       WORK DEMO ACCOUNTS                      PAGE 1
9:43am                    Colorado Springs, CO  80920
                                PAYROLL REGISTER
                             MAY-89 Through JUL-89

  DATE   EMPL         EMPLOYEE NAME          EARNINGS: Hours    Amount
-------- ---- ------------------------------ -------- ------- ----------
05-27-89    1 First Employee                  Regular:  0.000   1,500.00
                                             Overtime:  0.000       0.00
                                                 Sick:  0.000       0.00
                                             Vacation:  0.000       0.00
                                              Holiday:  0.000       0.00
                                                Other:              0.00
                                                  EIC:              0.00
                                                Extra:              0.00
                                                      ------- ----------
                                                TOTAL:  0.000   1,500.00

06-30-89    1 First Employee                  Regular:  0.000   1,500.00
                                             Overtime:  0.000       0.00
                                                 Sick:  0.000       0.00
                                             Vacation:  0.000       0.00
                                              Holiday:  0.000       0.00
                                                Other:              0.00
                                                  EIC:              0.00
                                                Extra:              0.00
                                                      ------- ----------
                                                TOTAL:  0.000   1,500.00

06-30-89 COLO Colorado Employee               Regular:  0.000   1,387.50
                                             Overtime:  0.000       0.00
                                                 Sick:  5.000      43.27
                                             Vacation:  8.000      69.23
                                              Holiday:  0.000       0.00
                                                Other:              0.00
                                                  EIC:              0.00
                                                Extra:              0.00
                                                      ------- ----------
                                                TOTAL:  0.000   1,500.00

07-14-89 COLO Colorado Employee               Regular:  0.000   1,500.00
                                             Overtime:  0.000       0.00
                                                 Sick:  0.000       0.00
                                             Vacation:  0.000       0.00
                                              Holiday:  0.000       0.00
                                                Other:              0.00
                                                  EIC:              0.00
                                                Extra:              0.00
                                                      ------- ----------
                                                TOTAL:  0.000   1,500.00

                                                              ----------
GRAND TOTALS                                           GROSS:   6,000.00









                                     Page 54
                          FINANCE MANAGER II - Payroll


JUL-5-89                       WORK DEMO ACCOUNTS                      PAGE 1
9:44am                    Colorado Springs, CO  80920
                                 CHECK REGISTER
                             MAY-89 Through JUL-89

CHK #   DATE   EMPL          EMPLOYEE            GROSS PAY   DEDUCT    NET PAY
----- -------- ---- --------------------------  ---------  --------  ---------
1005  05-31-89    1 First Employee               1,500.00    268.28   1,231.72
1006  06-30-89    1 First Employee               1,500.00    268.28   1,231.72
1007  06-30-89 COLO Colorado Employee            1,500.00    268.28   1,231.72
                                                --------- --------- ----------
                    TOTAL CHECKS:    3           4,500.00    804.84   3,695.16


















































                                     Page 55
                          FINANCE MANAGER II - Payroll


JUL-5-89                       WORK DEMO ACCOUNTS                      PAGE 1
9:44am                    Colorado Springs, CO  80920
                   EMPLOYEE VACATION & SICK IN ACCOUNT ORDER
                                  As of JUL-89

                                     ---- VACATION ----   ------ SICK ------
EMPL           EMPLOYEE              USED YTD   CUR BAL   USED YTD   CUR BAL
---- ------------------------------  --------  --------   --------  --------
   1 First Employee                     0.000     0.000      0.000     0.000
COLO Colorado Employee                  8.000    -8.000      5.000    -5.000
                                     --------  --------   --------  --------
                                        8.000    -8.000      5.000    -8.000


















































                                     Page 56
                          FINANCE MANAGER II - Payroll


JUL-5-89                       WORK DEMO ACCOUNTS                      PAGE 1
9:44am                    Colorado Springs, CO  80920
                       EMPLOYEE LISTING IN ACCOUNT ORDER

   1:First Employee **********************************************************
Status :ACTIVE      SS Num:111-22-3333   PAY FICA:Y FUTA:Y SUI:Y SDI:Y Other:N
Address:123 Your Street                  State Annual     Exemption:      0.00
       :P.O. Box 1234                                    Tax Credit:      0.00
City   :Colorado Springs      State:CO   Extra Taxes:    Federal   :      0.00
Zipcode:80900       Phone:719-123-4567                   State     :      0.00
Sex      :F   Marital:S                                  City      :      0.00
Hired    :01-01-89   Hourly/Salary:H     Extra Amounts:  Earnings  :     10.00
Frequency:Bi-Weekly  Payrate:    10.00                   Deductions:     10.00
Overtime :    15.00  Holiday:    20.00   Accrual rates:  Vacation  :  0.000
Deductions   Fed: 1  State: 1   EIC:0                    Sick      :  0.000
----------------------------- Beginning Balances -----------------------------
Earnings Taxable    :      0.00    FICA  :      0.00   Extra Deduct:      0.00
         Non-taxable:      0.00    FUTA  :      0.00
Withholdings Federal:      0.00    SUTA  :      0.00
             State  :      0.00    SDI   :      0.00    Beg Vac hours :  0.000
             City   :      0.00    Oth Tx:      0.00    Beg Sick hours:  0.000


COLO:Colorado Employee *******************************************************
Status :ACTIVE      SS Num:123-45-6789   PAY FICA:Y FUTA:Y SUI:Y SDI:Y Other:N
Address:100 Main Street                  State Annual     Exemption:      0.00
       :                                                 Tax Credit:      0.00
City   :Colorado Springs      State:CO   Extra Taxes:    Federal   :      0.00
Zipcode:80900       Phone:719-123-1234                   State     :      0.00
Sex      :M   Marital:M                                  City      :      0.00
Hired    :06-17-89   Hourly/Salary:S     Extra Amounts:  Earnings  :      0.00
Frequency:Monthly    Payrate: 1,500.00                   Deductions:      0.00
Overtime : N/A       Holiday: N/A        Accrual rates:  Vacation  :  0.000
Deductions   Fed: 3  State: 3   EIC:0                    Sick      :  0.000
----------------------------- Beginning Balances -----------------------------
Earnings Taxable    :      0.00    FICA  :      0.00   Extra Deduct:      0.00
         Non-taxable:      0.00    FUTA  :      0.00
Withholdings Federal:      0.00    SUTA  :      0.00
             State  :      0.00    SDI   :      0.00    Beg Vac hours :  0.000
             City   :      0.00    Oth Tx:      0.00    Beg Sick hours:  0.000






















                                     Page 57
                          FINANCE MANAGER II - Payroll


JUL-5-89                       WORK DEMO ACCOUNTS                      PAGE 1
9:45am                    Colorado Springs, CO  80920
                                EMPLOYEE LABELS


                                                        1
                          First Employee
                          123 Your Street
                          P.O. Box 1234
                          Colorado Springs CO 80900

                                                     COLO
                          Colorado Employee
                          100 Main Street
                          Colorado Springs CO 80900















































                                     Page 58
                          FINANCE MANAGER II - Payroll


Jul-5-89                       WORK DEMO ACCOUNTS                      PAGE 1
9:45am                     Colorado Springs, CO  80920
                              QUARTERLY TAX SUMMARY
                              JAN-89 Through MAR-89

 SS NUMBER            EMPLOYEE              TAXED WAGE  FICA WAGES  SUTA WAGES
----------- ------------------------------  ----------  ----------  ----------
111-22-3333 First Employee                    2,430.00    2,430.00    2,430.00
123-45-6789 Colorado Employee                 3,000.00    3,000.00    3,000.00
                                            ----------  ----------  ----------
                                              5,430.00    5,430.00    5,430.00


FUTA TAXES                                                               18.00
SDI                                                                      22.26



                       FEDERAL TAX LIABILITY (FWH & FICA)

      DATE WAGES PAID           JAN           FEB          MAR    QTR TOTAL
     -----------------   ----------   -----------   ----------    ---------
      1st through  3rd         0.00          0.00         0.00         0.00
      4th through  7th         0.00          0.00         0.00         0.00
      8th through 11th         0.00          0.00         0.00         0.00
     12th through 15th         0.00        226.90         0.00       226.90
     16th through 19th         0.00          0.00         0.00         0.00
     20th through 22nd         0.00          0.00         0.00         0.00
     23rd through 25th         0.00          0.00         0.00         0.00
     26th through 31st       565.95        565.95         0.00     1,131.90
                         ----------   -----------   ----------    ---------
                             565.95        792.85         0.00     1,358.80



                               STATE TAX LIABILITY

      DATE WAGES PAID           JAN           FEB          MAR    QTR TOTAL
     -----------------   ----------   -----------   ----------    ---------
      1st through  3rd         0.00          0.00         0.00         0.00
      4th through  7th         0.00          0.00         0.00         0.00
      8th through 11th         0.00          0.00         0.00         0.00
     12th through 15th         0.00         34.73         0.00        34.73
     16th through 19th         0.00          0.00         0.00         0.00
     20th through 22nd         0.00          0.00         0.00         0.00
     23rd through 25th         0.00          0.00         0.00         0.00
     26th through 31st        76.61         76.61         0.00       153.22
                         ----------   -----------   ----------    ---------
                              76.61        111.34         0.00       187.95













                                     Page 59
                          FINANCE MANAGER II - Payroll


JUL-5-89                       WORK DEMO ACCOUNTS                      PAGE 1
9:45am                    Colorado Springs, CO  80920
                          PAID PAYROLL RECAP (Taxable)
                           MAY-1-89 Through JUL-31-89

                        ------ EMPLOYEE EARNINGS -------
                           Description          Amount
                        -----------------   ------------
                        Regular                 4,387.50
                        Overtime                    0.00
                        Sick                       43.27
                        Vacation                   69.23
                        Holiday                     0.00
                        Other Taxable               0.00
                        EIC                         0.00
                        Extra                       0.00
                                            ------------
                        GROSS EARNINGS          4,500.00


                        ------ PAYROLL DEDUCTIONS ------
                           Description          Amount
                        -----------------   ------------
                        Federal Withhold          341.25
                        State Withholding         125.64
                        City Withholding            0.00
                        FICA                      337.95
                        Extra                       0.00
                                            ------------
                        TOTAL DEDUCTIONS          804.84

                                            ------------
                        NET EARNINGS            3,695.16
                                            ============



                        ----- EMPLOYER LIABILITIES -----
                           Description          Amount
                        -----------------   ------------
                        Federal Withhold          341.25
                        State Withholding         125.64
                        City Withholding            0.00
                        FICA                      675.90
                        Extra Deductions            0.00
                        FUTA                       27.00
                        SUTA                      139.50
                        SDI                        18.45
                        Other                       0.00
                                            ------------
                        TOTAL LIABILITY         1,327.74

                                            ------------
                        TOTAL PAYROLL COST      5,022.90








                                     Page 60
                          FINANCE MANAGER II - Payroll


JUL-5-89                       WORK DEMO ACCOUNTS                      PAGE 1
9:45am                    Colorado Springs, CO  80920
                        NON POSTED TRANSACTIONS JOURNAL
                             MAY-89 Through JUL-89

                                           -- G/L  DEBIT --   -- G/L CREDIT --
  DATE   EMPL   EMPLOYEE NAME     TYPE CD   ACT#    AMOUNT     ACT#    AMOUNT
-------- ---- ------------------ --------  ----  ----------   ----  ----------
04-30-89    1 First Employee     EARNINGS  5010    1,500.00   1010    1,231.72
                                 FED WITH                     2050      113.75
                                 STATE WH                     2051       41.88
                                 FICA      5011      112.65   2053      225.30
                                 FUTA      5012        6.00   2054        6.00
                                 SUTA      5014       46.50   2055       46.50
                                 SDI       5015        6.15   2056        6.15

06-30-89 COLO Colorado Employee  EARNINGS  5010    1,500.00   1010    1,231.72
                                 FED WITH                     2050      113.75
                                 STATE WH                     2051       41.88
                                 FICA      5011      112.65   2053      225.30
                                 FUTA      5012        9.00   2054        9.00
                                 SUTA      5014       46.50   2055       46.50
                                 SDI       5015        6.15   2056        6.15

07-14-89 COLO Colorado Employee  EARNINGS  5010    1,500.00      0    1,231.72
                                 FED WITH                     2050      113.75
                                 STATE WH                     2051       41.88
                                 FICA      5011      112.65   2053      225.30
                                 FUTA      5012        9.00   2054        9.00
                                 SUTA      5014       46.50   2055       46.50
                                 SDI       5015        6.15   2056        6.15
                                                 ----------         ----------
                                                   5,013.90           5,013.90





























                                     Page 61
                          FINANCE MANAGER II - Payroll


JUL-5-89                       WORK DEMO ACCOUNTS                      PAGE 1
9:45am                    Colorado Springs, CO  80920
                            PAYROLL G/L DISTRIBUTION
                                     JUN-89

         ACT#       ACCOUNT NAME              DEBITS       CREDITS
         ---- -------------------------    -----------   -----------
         1010 Checking Account #1                           2,463.44
         2050 FEDERAL WITHHOLDING TAX                         227.50
         2051 STATE WITHHOLDING TAX                            83.76
         2053 FICA PAYABLE                                    450.60
         2054 FUTA PAYABLE                                     18.00
         2055 SUTA PAYABLE                                     93.00
         2056 SDI PAYABLE                                      12.30
         5010 Salary & wages expense          3,000.00
         5011 FICA Expense                      225.30
         5012 FUTA Expense                       18.00
         5014 SUTA Expense                       93.00
         5015 SDI Expense                        12.30
                                           -----------   -----------
                                              3,348.60      3,348.60









































                                     Page 62
                          FINANCE MANAGER II - Payroll


                       FINANCE MANAGER II USER COMMENT FORM

                           _                       _
      Product being used: |_|General Ledger       |_|Account Reconciliation
                           _                       _
                          |_|Accounts Receivable  |_|Accounts Payable
                           _                       _
                          |_|Financial Utilities  |_|Payroll

      Version of Finance Manager being used:________________________________
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

      Please add any other comments about product on reverse side of form.

      RETURN THE COMPLETED FORM AND           HOOPER INTERNATIONAL
      ANY ADDITIONAL CORRESPONDENCE TO:       P.O. Box 62219
                                              Colorado Springs, CO  80962





                                     Page 63
                          FINANCE MANAGER II - Payroll

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
     | How did you hear about FINANCE MANAGER?____________________________ |
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

                                     Page 64
```
{% endraw %}

## FMPR.DOC

{% raw %}
```










                                FINANCE MANAGER II 





                                PAYROLL MODULE LITE

                                   USER'S MANUAL 










                                    Version 1.3f












                               Hooper International 
                                  P.O.  Box 62219 
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

          No price may  be charged, by club or user  group, for the software
          or documentation.   A distribution fee  may be charged  solely for
          the cost  of the diskette,  as long as  the total charge  does not
          exceed $8. 

          It is imperative that club members be informed of the user-support
          concept, which allows them to become familiar with FINANCE MANAGER
          through evaluation and  hands-on use.  It is  also imperative that
          member  users  be  informed  that  the  program  as  well  as  its
          documentation  is  the  sole  property  of  Hooper  International.
          Members, without exception, must be  encouraged to support its use
          by sending their user payments directly to Hooper International. 

          This  software and  documentation is  fully copyrighted  by Hooper
          International  and  may not  be  modified  in  any way  or  manner
          whatsoever.  The complete package must be distributed intact, as a
          self-complementing unit. 














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








      Finance Manager II is User-Supported (Shareware) software.  If you are
      using this software, and  find it to be of value  to you, your payment
      is necessary and appreciated. 

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





                            FINANCE MANAGER II - Payroll


                                 TABLE OF CONTENTS 

      COPYRIGHT NOTICE ...............................................  i 
      RESTRICTED PERMISSION TO COPY ..................................  i 
      WARRANTY INFORMATION ........................................... ii 
      PRODUCT INFORMATION ............................................ ii 

      SECTION ONE - GETTING STARTED 
          1a - Introduction ..........................................  3 
          1b - System requirements ...................................  4 
          1c - System Flowcharts .....................................  5 
          1d - Using the demo accounts ...............................  6 
          1e - Running the Payroll module ............................  6 


      SECTION TWO - THE PAYROLL MAIN MENU ............................  8 


      SECTION THREE - EMPLOYEE ACCOUNTS ..............................  9 
          3a - What are employee accounts ............................  9 
          3b - Employee accounts organization ........................  9 
          3c - Employee accounts data fields .........................  9 
          3d - Getting familiar with employee accounts ............... 12 
          3e - Entering your own employee accounts ................... 12 
          3f - Changing existing employees ........................... 17 
          3g - Deleting employees .................................... 17 
          3h - Suggested method for setting beginning balances........ 18 


      SECTION FOUR - TRANSACTIONS .................................... 20 
          4a - What are transactions ................................. 20 
          4b - Transaction data fields ............................... 20 
          4c - Getting familiar with transactions .................... 21 
          4d - Entering transactions ................................. 21 
          4e - Changing existing transactions ........................ 23 
          4f - Deleting transactions ................................. 25 
          4g - Points to remember .................................... 25 


      SECTION FIVE - REPORTS ......................................... 26 
          5a - General instructions for generating reports ........... 26 
          5b - Printing the Payroll Journal .......................... 27 
          5c - Printing the Payroll Register ......................... 28 
          5d - Printing the Check Register ........................... 29 
          5e - Printing the Vacation and Sick Report ................. 29 
          5f - Printing the Employee Listing ......................... 30 
          5g - Printing the Employee Address Labels .................. 32 
          5h - Printing the Paid Payroll Recap Report ................ 33 
          5i - Printing the Quarterly Tax Summary .................... 34 
          5j - Printing the Non-Posted Transaction Journal ........... 34 
          5k - Printing the General Ledger Distribution Report........ 34 


      SECTION SIX - WRITING EMPLOYEE PAYCHECKS ....................... 36 
          6a - Printing Checks ....................................... 36 
          6b - Voiding printed checks ................................ 37 
          6c - Entering manual checks ................................ 37 





                                       Page 1
                            FINANCE MANAGER II - Payroll


      SECTION SEVEN - OTHER FEATURES AND FUNCTIONS ................... 39 
          7a - Configuration settings ................................ 39 
          7b - Sorting transactions .................................. 43 
          7c - Posting to the General Ledger ......................... 44 
          7d - Payroll tax tables .................................... 45 
          7e - Printing end of year W-2s ............................. 47 



      SECTION EIGHT - ENHANCEMENTS & HINTS ........................... 49 
          8a - Enhancements by version ............................... 49 
          8b - Helpful hints and suggestions ......................... 49 


      SECTION NINE - PAYROLL DISK FILE NAMES ......................... 51 


      APPENDIX A - SAMPLE REPORTS .................................... 52 


      USER COMMENT FORM .............................................. 63 


      ORDER FORM ..................................................... 64 






































                                       Page 2
                            FINANCE MANAGER II - Payroll




                           SECTION ONE - GETTING STARTED

      1a - INTRODUCTION 

      The FINANCE MANAGER Payroll  module gives  you comprehensive, accurate
      payroll-related information on as many as 1,000 employees. 

      This easy to  learn, easy to use module provides  a very efficient way
      for you  to record important  employee information such as  hire date,
      earnings,  deductions, sick  leave,  overtime,  vacation, holiday  and
      extra income/deductions. 

      It also  provides automatic tax  calculations for your  deductions and
      liabilities, printing of payroll checks and W-2s, supports both hourly
      & salaried  employees either  paid weekly,  biweekly, semi-monthly  or
      monthly and is fully integrated into the General Ledger Module. 

      Some  of the  helpful, time-saving  and outstanding  features of  this
      module are as follows: 


        *  Employee accounts features 
               - Up to 1,000 employees 
               - Alpha/Numeric account numbers 
               - Allows Extra Income and Deductions for each employee 
               - Automated calculation of payroll deductions 
               - Enter prior payroll beginning balances 
               - Supports weekly, biweekly, semi-monthly or monthly 
                  payroll 
               - Employee listing 
               - Three sorting options on employee labels 
               - Pop-Up window displays employee account numbers 


        *  Transaction entry features 
               - Automatic multiple G/L distribution 
               - Up to 32,000 transactions per year 
               - Allows changing of calculated payroll deductions  
               - Pop-up window displays employees and account numbers      
               - Enter any extra income or deductions 
               - Multiple field transaction search capabilities 
               - Sort  by date,  employee,  check #  and transaction  input 
                 order 
               - Ability to delete paid and posted payroll transactions 


        *  Check writing features 
               - Use standard window envelopes (same envelopes as A/R and 
                  A/P modules) 
               - Can input  manual checks 
               - Ability to void checks 
               - Uses continuous form checks (Nebs check # 9001) 
               - Select checks by any pay period 



        *  Reports features 
               - Provides full range of reports including: 


                                       Page 3
                            FINANCE MANAGER II - Payroll


                     Payroll Journal 
                     Payroll Register 
                     Check Register 
                     Vacation and Sick Report 
                     Employee Listing 
                     Address Labels 
                     Paid Payroll Recap 
                     Quarterly Tax Summary 
                     Non-Posted Transaction Report 
                     General Ledger Distribution 
                     Prints employee's W-2s 
               - Print reports on your printer, or 
               - Save reports on disk 
               - Display reports on screen 
               - Reports may be printed multiple times 


        *  Integration 
               - Transactions can  be posted to  the General Ledger  with no
                  additional inputs required 


        *  Fiscal year features 
               - Use with any fiscal year 
               - Multiple years on-line at one time 
               - Books need not to be closed in order to begin next month or
                  year 


        *  System features 
               - Post to G/L in summary or detail format 
               - Posts each check written to proper G/L account 
               - User modifiable tax table  
               - Usable in every state 
               - Automatic calculations for State deductions in most States 
               - Select location of Employee address on check 
               - No monthly closing hassle to go through 
               - Allows you to post or pre-date all transactions 
               - Posts only Paid Payroll to G/L



      1b - SYSTEM REQUIREMENTS 

          - FINANCE MANAGER II General Ledger version 1.3 
          - IBM PC, XT, AT, PS/2, or compatible 
          - 384K memory (more memory allows more employees) 
          - Two 360K disk drives (or 1 DSHD or Hard disk) 
          - Dos 2.0 or higher 













                                       Page 4
                            FINANCE MANAGER II - Payroll



      1c - SYSTEM FLOWCHARTS 


                            ---------------------- 
                            |  PAYROLL MAIN MENU | 
                            ---------------------- 
                                      | 
          ----------------------------------------------------------- 
          |              |            |        |          |         |
        INPUT      CHANGE/DELETE   REPORTS   UPDATE    PAYROLL   PAYROLL 
      TRANSACTIONS  TRANSACTIONS    MENU    EMPLOYEE   CHECKS    UTILITY 
                                            ACCOUNTS    MENU      MENU 


                             ------------------------ 
                             | PAYROLL REPORTS MENU | 
                             ------------------------ 
                                        | 
        --------------------------------------------------------------- 
        |      |     |      |     |      |     |     |       |        | 
      PAYROLL  |   CHECK    |  EMPLOYEE  |   PAID    |   NON-POSTED   | 
      JOURNAL  |  REGISTER  |  LISTING   |  PAYROLL  |  TRANSACTIONS  | 
               |            |            |   RECAP   |    JOURNAL     | 
               |            |            |           |                | 
            PAYROLL      VACATION     EMPLOYEE   QUARTERLY         GENERAL 
            REGISTER      & SICK      ADDRESS       TAX            LEDGER 
                          REPORT       LABELS     SUMMARY       DISTRIBUTION 



                              ----------------------- 
                              | PAYROLL CHECKS MENU | 
                              ----------------------- 
                                         | 
                --------------------------------------------------- 
                |                        |                        |
              PRINT                     VOID                    MANUAL 
              CHECKS                   CHECKS                   CHECKS 



                              -------------------------- 
                              |  PAYROLL UTIILITY MENU | 
                              -------------------------- 
                                          | 
          ----------------------------------------------------------- 
          |           |         |         |            |            |  
         SORT         |       END OF      |         PAYROLL         | 
      TRANSACTIONS    |       PERIOD      |           TAX           | 
                      |       POSTING     |          TABLES         | 
                      |                   |                         | 
                    POST               PAYROLL                 PRINT END 
                TRANSACTIONS        CONFIGURATION               OF YEAR 
                   TO G/L              SETTING                    W-2s 







                                       Page 5
                            FINANCE MANAGER II - Payroll


      1d - USING THE DEMO ACCOUNTS 

      Included  at no  extra cost  with the  "Payroll" module,  is a  set of
      sample/demo accounts  for practice use.   On your disk are  some files
      with the  name of "WORK".   In order to  use these demo  files, simply
      copy all of  the "WORK.*" files onto  a blank disk to be  used as your
      demo disk.   When starting up FINANCE  MANAGER, use this disk  as your
      data disk and put it in the appropriate disk drive (usually B:).  When
      FINANCE MANAGER asks you for the  File name, enter "WORK".  The use of
      these demo files will very likely get you going faster and help you to
      use this module to your best advantage. 

      It is important to remember that you  do not use these demo files when
      you are  setting up  your own  live data,  since demo  files obviously
      contain existing practice-only data and  demo employees.  Setting up a
      new "live"  set of books,  however, is  very simple and  is thoroughly
      described in the following section. 

      1e - RUNNING THE PAYROLL MODULE 

      To run  the "Payroll" module, you  must first install it  by following
      the instructions  under "Installing  FINANCE MANAGER" in  the "Getting
      Started" Manual.   After it is  installed, follow the simple  steps in
      the order given below: 

      1.   Start up  FINANCE MANAGER  per the  instructions in  the "Getting
           Started" manual.  Upon starting  FINANCE MANAGER, you must decide
           to use either  live data or the practice-only  demo accounts data
           on  the Payroll  Documentation &  Demo  disk.  If  you prefer  to
           practice  and experiment,  you should  remember to  use the  Demo
           disk.  If  you wish to set  up your own live  Payroll, you should
           put your FINANCE  MANAGER General Ledger data disk  in your drive
           B: (not necessary if you have a hard disk).

      2.   At the disk  drive prompt, enter the disk drive  letter where you
           put your Demo  or G/L data disk,  usually drive B: (or  C: if you
           have a hard disk). 

      3.   At the Enter Filename prompt, enter the name of the data file you
           want to use ("WORK" if you have  the demo disk in drive B:, or if
           you are using your live G/L data files enter the filename you are
           using for your live data). 

           Remember, you can only use this module if you have previously set
           up  your  General Ledger  data  files  using the  General  Ledger
           module.  When  using the demo  data files, this has  already been
           done for you. 

      4.   You will now be at the FINANCE MANAGER Master Menu. 

      5.   OPTIONAL: If you have  not already done so (when you  set up your
                     G/L data  files), you  may go  to the  System Utilities
                     Menu  and  change  any   system  defaults.   This  may,
                     however, be  done at any  time and is not  necessary to
                     run FINANCE  MANAGER.  We do, however,  suggest you set
                     up  the "Compressed"  and "Normal"  print codes  before
                     printing the Payroll reports, since you will find it is
                     required for a few of them. 




                                       Page 6
                            FINANCE MANAGER II - Payroll



      6.   Next you must  add several accounts to your  General Ledger Chart
           of Accounts.  See section 7a for details.  These G/L accounts are
           required  to use  the Payroll  module.  See  your General  Ledger
           documentation manual  on setting up  your Chart of  Accounts.  If
           you have  these accounts  already set up  in your  General Ledger
           Chart of Accounts, this step is not necessary. 

      7.   From the FINANCE  MANAGER master menu: If you  have floppy disks,
           put your  Payroll program  disk into  drive A:  (if you  have not
           already done so).  Then select menu  "F5", and this will take you
           into Payroll.   If this is the  first time you are  using Payroll
           for this set of books, the  system will ask you: "Create new file
           (Y/N):_", which  you should  answer with  a "Y".   This procedure
           will create all the necessary Payroll data files.  Don't worry it
           will not damage your General Ledger data files. 

      8.   From the Payroll  main menu select "F6", and then  "F4", in order
           to  set up  your Payroll  configuration settings.   This step  is
           important since  it will set  up the interface with  your General
           Ledger Chart of Accounts.  See section 7a for details. 

      9.   Return to the  Payroll Utilities menu and select "F5",  to set up
           your tax tables.  These tax  tables will calculate federal, state
           and city taxes  as well as Earned Income Credit.   See section 7d
           for details. 

      10.  Return to  the Payroll main menu  and select "F4" to  set up your
           employees.  See section 3 on employee accounts. 

      11.  After  setting  up your  employees,  you  may print  an  employee
           listing report.  See section 5 on reports. 

      12.  Return  to  the  Payroll  main  menu and  select  "F1"  to  input
           transactions.  See section 4 on transactions. 

      13.  After you have entered some transactions, you may print a Payroll
           Register report  (select "F2" from  the Payroll Reports menu)  to
           see what you have entered.  See section 5 on reports. 

      14.  Print any other reports as required.  The most useful reports are
           "PAYROLL REGISTER" and the "PAID PAYROLL RECAP". 

      These basic steps are merely intended  to show you the order of events
      in setting up new Payroll books. 

















                                       Page 7
                            FINANCE MANAGER II - Payroll



                        SECTION TWO - THE PAYROLL MAIN MENU 

      The Payroll  Main Menu is  the starting point  for all of  the various
      Payroll  functions.  It  is  a sort  of "Table  of  Contents" for  the
      Payroll module.  It can guide you to all of the other useful sub-menus
      and practical features of the time and money-saving Payroll module. 

      The Payroll Main Menu appears as follows: 

                     ----------- PAYROLL MAIN MENU ---------- 
                     |                                      | 
                     |   ESC  Return to Master Menu         | 
                     |   F1   Input TRANSACTIONS            | 
                     |   F2   CHANGE/Delete Transactions    | 
                     |   F3   REPORTS Menu                  | 
                     |   F4   Update EMPLOYEE ACCOUNTS      | 
                     |   F5   Payroll Checks Menu           | 
                     |   F6   Payroll Utility Menu          | 
                     |                                      | 
                     |                                      | 
                     |                                      | 
                     |                                      | 
                     |   ENTER YOUR SELECTION:              | 
                     |   Payroll configuration not set up   | 
                     ---------------------------------------- 


      Note that  many of the  selections are used to  go on to  other menus.
      All of  the menu selections  are discussed  in later sections  in this
      documentation.   If  you get  a  message,  as above,  saying  "Payroll
      configuration not set up" or "Tax Tables not set up" you should set up
      these configurations  by selecting  "F6", "PAYROLL UTILITIES  MENU" to
      set these items up.  For clarification, these procedures are discussed
      in Section Seven. 


      As  mentioned   above,  it   is  essential  that   you  set   up  your
      configuration.   Jump to  Section 7a  to complete  that easy-to-follow
      procedure before continuing. 

      The next  step is to  set up  your employee accounts.   This procedure
      follows in Section Three. 



















                                       Page 8
                            FINANCE MANAGER II - Payroll


                         SECTION THREE - EMPLOYEE ACCOUNTS 

      Your Employee Accounts are the foundation of your Payroll.  To set up,
      or to change your employees, select "F4 Update EMPLOYEE ACCOUNTS" from
      the Payroll main menu. 

      3a - WHAT ARE EMPLOYEE ACCOUNTS 

      Your  employee  accounts  are  used  to keep  track  of  all  of  your
      employees, their address, overtime, holiday, sick leave, the amount of
      time they  worked, Pay frequency,  deductions and liabilities.   It is
      important to remember that any person  that is drawing a paycheck from
      you, should be set up as an employee. 

      Whenever you hire a  new employee, you must set up  this new person in
      the employee  accounts.  WHEN  YOU ENTER A  NEW EMPLOYEE  INTO FINANCE
      MANAGER HAVE THE EMPLOYEES COMPLETED W-4  FORM NEXT TO YOU, AS MOST OF
      THE INFORMATION YOU WILL ENTER  WILL COME DIRECTLY FROM THE EMPLOYEE'S
      W-4  FORM.  Each  employee must  be  given a  unique employee  account
      number,  which can  be any  alphanumeric input  up to  four characters
      long.  This account number will then be used whenever you are entering
      transactions for that employee. 


      3b - EMPLOYEE ACCOUNTS ORGANIZATION 

      Your employee account numbers, and their order within the program, are
      totally up to you. 

      An important  consideration for  your employee  account numbers  is to
      group  your employees  into  account number  ranges  or in  alphabetic
      order.  For example, give all of  your employees who work in shipping,
      account numbers 9000-9999.  This may  be useful when printing reports.
      Remember to  always leave  enough room  for new  accounts to  be added
      within your selected range. 


      3c - EMPLOYEE ACCOUNTS DATA FIELDS 

      Each account number in your  employee database represents one specific
      employee.   Along with  this employee  account number  are kept  other
      elements  of information  about  each employee.   When  setting up  an
      employee account, the following information will be needed: 

      EMPLOYEE NUMBER     An alphanumeric  input up to four  characters used
                          to identify each employee.  This can be any number
                          or group of letters or a combination of the two. 

      ACTIVE              Enter "Y" if the employee is currently working for
                          you  or "N"  if  he is  not and  you  do not  want
                          FINANCE MANAGER to continue to update his file. 

      NAME                Enter the  employee's full name (how  it is listed
                          on his W-4 form).  We  suggest that you enter last
                          name, comma (,), first name.  FINANCE MANAGER will
                          reverse the employee's  name when printing labels,
                          checks or  W-2s.  If  you do not  put a  comma (,)
                          between last and first  names, the employee's name
                          will be printed as input. 



                                       Page 9
                            FINANCE MANAGER II - Payroll


      ADDRESS             Enter  employee's address.   This address  is used
                          when printing  address labels,  employee paychecks
                          and W-2s. 

      ADDRESS             Enter second address line if any. 

      CITY                Enter employee's city. 

      STATE               Enter employee's two digit State or Province code. 

      ZIPCODE             Enter employee's zip or postal code. 

      PHONE               Enter up to 12 characters.   May be used for other
                          information if needed. 

      SEX(M,F)            Enter either "M" for male or "F" for female. 

      MARITAL(S,M)        Enter marital  status of employee as  shown on his
                          W-4,  used in  calculating taxes  and withholding.
                          Enter either "S" for single  or "M" for married or
                          "H" for head of household. 

      DEPT                If you are using departments, enter the department
                          for this employee. 

      HIRED               Enter employee's actual hire date. 

      HOURLY/SALARY(H,S)  This field  determines how each employee's  pay is
                          to be calculated.  Enter  either "H" for hourly or
                          "S" for salary. 

      FREQUENCY(W,B,S,M)  This  field  determines  how  employee's  pay  and
                          payroll  deductions are  calculated for  taxes and
                          withholding.  Enter length  of pay period.  Either
                          "W"  for   weekly,  "B"  for  biweekly,   "S"  for
                          semi-monthly or "M" for monthly. 

      PAYRATE             Enter amount  employee is  paid.  Amount  per hour
                          for hourly  employees.  Amount per pay  period for
                          salary   employees.    Enter   between   .01   and
                          999999.99. 

      OVERTIME            Hourly employees only.   Enter Overtime hourly pay
                          rate.  Enter between 0.00 and 99.99. 


      HOLIDAY             Hourly employees  only.  Enter Holiday  hourly pay
                          rate.  Enter between 0.00 and 99.99. 


      SOCIAL SECURITY 
      NUMBER              Employee's social security number as listed on his
                          W-4. 


      DEDUCTIONS FEDERAL  Enter  number   of  Federal   deductions  employee 
      (FWH)               claimed  on  his W-4.   Enter  between  0 and  99.
                          Enter 99 if no deduction is to be taken out. 




                                       Page 10
                            FINANCE MANAGER II - Payroll


      DEDUCTIONS STATE    Enter the number of State deductions.  This number 
      (SWH)               will be used to  calculate State Payroll Deduction
                          amounts.  Enter 99 if no  deduction is to be taken
                          out. 

      DEDUCTIONS CITY     Enter the number of City deductions.  This number 
      (CWH)               will be  used to calculate City  Payroll Deduction
                          amounts.  Enter 99 if no  deduction is to be taken
                          out.  (optional) 

      EIC 0-2             Enter the number of  Advanced Earned Income Credit
                          (if  any) the  employee  claimed on  his W-5.   If
                          employee does not fill out a W-5 form he cannot be
                          eligible for Advance  Earned Income Credit.  Enter
                          between 0-2.   "0" not  eligible for EIC,  "1" one
                          person in family eligible and "2" husband and wife
                          eligible for EIC. 


      PAY FICA, FUTA,     Use  if  FICA  (Social  Security),  FUTA  (Federal 
      SUTA, SDI           Unemployment),  SUTA (State  Unemployment) or  SDI
                          (State  Disability  Insurance)  will be  paid  for
                          employee.  Enter either "Y" if will be paid or "N"
                          if will not be paid.   For each category that will
                          be  paid you  must set  up an  account in  the G/L
                          Chart of Accounts.  The  same account numbers must
                          also be entered in the Payroll Configuration.  See
                          section 7a for details. 

      OTHER               Used for other payments required by law to be paid
                          by employer (Optional). 

      STATE ANNUAL        A  few  States  have  "STATE EXEMPTIONS".  If your 
      EXEMPTIONS          State does not have any skip this field (enter 0).
                          Otherwise enter  the total  dollar amount  for the
                          number of  exemptions employee claimed on  his W-4
                          form.  (Multiply  number of  exemptions on  W-4 by
                          dollar amount your state allows for each exemption
                          claimed).  

                          NOTE: May also  be used for any  additional dollar
                                amount that is needed  to be subtracted from
                                gross   income  if   the  number   of  state
                                deductions  on  this  form  and  the  annual
                                deduction  amount  in  the tax  table,  when
                                multiplied, are not the correct total dollar
                                amount for deductions  claimed on employee's
                                W-4. 

      STATE ANNUAL        A few states have "TAX CREDITS".  If your state 
      TAX  CREDIT         does  not  have any  skip  this  field (enter  0).
                          Otherwise  enter the  total dollar  amount of  tax
                          credit for this employee. 

      EXTRA TAXES         Enter the  dollar amount for extra  Federal, State
                          or City taxes the employee wants withheld from his
                          paycheck per pay period according to his W-4. 

      EXTRA AMOUNTS       Enter  extra amounts  paid  to,  or deducted  from
                          employee's  pay (per  pay period).   Examples: Car


                                       Page 11
                            FINANCE MANAGER II - Payroll


                          allowance added back into  pay, or Insurance taken
                          out. 

      ACCRUAL  RATES      Number of  hours (per pay period)  of vacation and
                          sick pay  that are  accrued.  Enter  hours accrued
                          between 0 and 99.999. 


      3d - GETTING FAMILIAR WITH EMPLOYEE ACCOUNTS 

      Before beginning to enter your own employee accounts, practice adding,
      changing and deleting  employee accounts by using the  WORK demo file.
      This will familiarize you with how to enter, change or delete employee
      accounts.   Changing and  deleting employee  accounts is  described in
      easy to follow lay mans terms in the following sections. 

      1. From the Payroll Main Menu select  "F4" on the menu.  You will then
         be prompted for the following information: 

      Employee Num:____ Active(Y/N):_  Social Security Number:_____________ 
      NAME   :_______________________  Deduction:FWH:__ SWH:__ CWH:__ EIC:_ 
      ADDRESS:_______________________  PAY FICA:_ FUTA:_ SUTA:_ SDI:_ OTH:_ 
      ADDRESS:_______________________    STATE ANNUAL: Exemption :_________ 
      CITY   :______________ STATE:__                  Tax Credit:_________ 
      ZIPCODE:________PHONE:_________    EXTRA TAXES:  Federal   :_________ 
                                                       State     :_________ 
      Sex(M,F):_ Marital(S,M):_ Dept:___               City      :_________ 
      Hired :__-__-__ Hour/Salary(H,S):_ EXTRA AMOUNTS:Earnings  :_________ 
      Frequency(W,B,S,M):_ Payrate:_____               Deductions:_________ 
      Overtime:___________ Holiday:_____ ACCRUAL RATES:Vacation  :_______ 
                                                       Sick      :_______ 

      3e - ENTERING YOUR OWN EMPLOYEE ACCOUNTS 

      When you actually enter your own employee accounts, it would be a good
      idea to collate your employees into some kind of logical order in your
      mind.  This will be  helpful to you later, each time  you need to look
      up employees by account number. 

      In order  to enter employee accounts  switch to your live  data files.
      To do  this, simply return to  the FINANCE MANAGER Master  Menu (press
      the ESC key  until you are there).   When you are at  the Master Menu,
      enter one  more ESC.   The program  will then prompt  "DO YOU  WANT TO
      RESTART (Y/N):_" enter "Y". 

      At this point (if you have your  data on floppy disks) switch from the
      Doc and Demo disk to your  live G/L data diskette.  Select your "real"
      data file  name.  From the Master  Main Menu select "F5".   The system
      should tell you that it did not find your Payroll files.  Enter "Y" at
      the "Create  new Files"  prompt.  From the  Payroll main  menu, select
      "F4" and you will be ready to enter your employee accounts. 

      1.   At  the  input screen,  the  cursor  will  be positioned  at  the
           employee account number field.  Unless you are entering your very
           first employee  account number, there  should be default  data in
           this field. 

      2.   Instead of using the default data  (if any), enter a new employee
           account number of your choice.   The step by step input procedure
           for an example employee account is as follows: 


                                       Page 12
                            FINANCE MANAGER II - Payroll



      3.   First, enter the employee account number.  For example: 

                                 Employee Num:SMIT 


      4.   Input if account is active or not: 

                                  Active (Y/N):Y 


      5.   Input Employee's full name as it is listed on his W4: 

                       Name:John Thomas Smith______________ 


      6.   Input Employee's mailing address: 

                      Address:3000 Main Street______________ 


      7.   Input Employee's mailing address: 

                      Address:Suite 300_____________________ 


      8.   Input the city: 

                              City:Colorado Springs__ 


      9.   Input the state: 

                                     State:CO 


      10.  Input the zip or postal code: 

                                Zipcode:80920_____ 


      11.  Input the employee's phone number: 

                                Phone:719-123-4567 


      12.  Input employee's sex: 

                                    Sex(M,F):M 


      13.  Input employee's marital status: 

                                  Marital(S,M):S 


      14.  Input the employee's Department (if any): 

                                     Dept:____ 



                                       Page 13
                            FINANCE MANAGER II - Payroll



      15.  Input employee's hire date: 

                                  Hired :01-01-89 


      16.  Input if employee is paid by the hour or is on a salary: 

                               Hourly/Salary(H,S):H 


      17.  How often you will be  paying this employee (see previous section
           for codes).

                               Frequency(W,B,S,M):B 


      18.  Input employee's  payrate PER HOUR.   If employee is on  a salary
           enter total pay PER PAY PERIOD. 

                                 Payrate:10.00____ 


      19.  Input  employee's overtime  payrate PER  HOUR when  paid overtime
           (hourly employees only). 

                                Overtime:15.00____ 


      20.  Input employee's holiday payrate PER HOUR when paid for a Holiday
           (hourly employees only). 

                                 Holiday:20.00____ 


      21.  Input employee's Social Security Number as listed on W-4 form. 

                        Social Security Number :123-45-6789 


      22.  Input the number of Federal deductions listed on his W-4 form. 

                                  Deduction FWH:1 


      23.  Input the number of State deductions. 

                                       SWH:1 


      24.  Input the number of City deductions. 

                                       CWH:1 


      25.  Input the amount of Earned Income Credit (if any) the employee is
           eligible for and has listed on his W-5 form.  (Enter 0 for none). 

                                     EIC 0-2:1 



                                       Page 14
                            FINANCE MANAGER II - Payroll



      26.  Input "Y" or  "N" if FICA (Social Security) will  be due for this
           employee. 

                                      FICA:Y 


      27.  Input "Y" or  "N" if FUTA (Federal Unemployment Tax)  will be due
           for this employee. 

                                      FUTA:Y 


      28.  Input "Y"  or "N" if  SUTA (State  Unemployment) will be  due for
           this employee. 

                                      SUTA:Y 


      29.  Input "Y" or "N" if SDI  (State Disability Insurance) will be due
           for this employee. 

                                       SDI:Y 


      30.  Input "Y"  or "N"  if other fees  or taxes will  be due  for this
           employee. 

                                       OTH:N 


      31.  Input the  total dollar  amount to  deduct from  employee's gross
           income per year (if any). 

                         STATE ANNUAL Exemption:6.65_____ 


      32.  Input the  total dollar  amount to  deduct from  employee's State
           Taxes per year (if any). 

                         STATE ANNUAL Tax Credit:20.00____ 


      33.  Input the  dollar amount to deduct  PER PAY PERIOD for  any extra
           taxes according to employee's W-4 form for the following: 

                          EXTRA TAXES: Federal:22.00____ 
                                       State  :13.00____ 
                                       City   :1.50_____ 


      34.  Input the dollar amount per pay period for any extra earnings. 

                        EXTRA AMOUNTS:  Earnings:20.00____ 


      35.  Input the dollar amount per pay period for any extra deductions. 

                       EXTRA AMOUNTS:  Deductions:5.00_____ 



                                       Page 15
                            FINANCE MANAGER II - Payroll



      36.  Input the number  of hours PER PAY PERIOD that  are to be accrued
           for vacation. 

                         ACCRUAL RATES:   Vacation:2.125__ 


      37.  Input the number  of hours PER PAY PERIOD that  are to be accrued
           for sick leave. 

                           ACCRUAL RATES:   Sick:1.50___ 


      38.  If you make a mistake in any field, and would like to correct it,
           you  can easily  back  up to  a previous  field  by pressing  the
           backspace key. 


      39.  After you have  entered the data in the Accrual  Rates field, the
           message "Change Beginning Balance  Data (Y/N):_" will appear.  If
           you answer with a "N" Finance Manager will continue to item 41. 

      40.  If you answer "Y" Finance Manager  will display on the lower half
           of the screen the following: 


      EMPLOYEE BEGINNING BALANCE: 
      Earnings taxable    :0_________  FICA  :0_________ Extra Deduct  :0___ 
      Earnings Non-taxable:0_________  FUTA  :0_________ 
      Withholdings Federal:0_________  SUTA  :0_________ 
      Withholdings State  :0_________  SDI   :0_________ Vacation Hours:0___ 
      Withholdings City   :0_________  Oth Tx:0_________ Sick Hours    :0___ 


      41.  Enter  any   preexisting  employee  balances.    These  beginning
           balances will show on your year-to-date reports and W-2. 

           NOTE: Another  alternative is  to  enter individual  transactions
                 broken  down by  pay periods  for each  employee, and  then
                 enter manual  checks to pay these  transactions.  Make sure
                 that you delete any preexisting payroll transactions in the
                 General Ledger.  You do not want to have these transactions
                 listed twice.   It is always  best to start this  module at
                 the beginning of the year to avoid any confusion. 


      42.  Once all  of the data has  been entered correctly, answer  "Y" at
           the "Are  inputs correct(Y/N):_"  prompt.  If  you answer  with a
           "N", the  cursor will  return to the  Employee Number  prompt and
           previous input will be ignored. 


      43.  If you answered with a "Y", the new employee account is added and
           you will automatically return to the employee number prompt.  You
           are then ready for more input. 

           NOTE: Please note that the employee number you have just added is
                 automatically added to the "pop  up" window which lists all
                 accounts.  Use the cursor keys (when at the employee number
                 field),  in order  to  scroll through  the active  employee


                                       Page 16
                            FINANCE MANAGER II - Payroll


                 accounts to search for the account you have just added.  If
                 you   have   added   your  account   correctly,   it   will
                 automatically be in order within this list.  The list reads
                 from left to right. 


      44.  The  cursor will  once again  be  at the  employee number  field.
           Repeat steps  2-41 until you  have finished entering all  of your
           employees. 


      45.  Make sure you answer the prompt "Are inputs correct (Y/N):_" with
           a "Y" to save your inputs before pressing the ESC key.  Otherwise
           all of the data  you just entered will be lost  and you will have
           to re-enter it.   To leave the current input field  and return to
           the previous menu simply press the ESC key. 


      3f - CHANGING EXISTING EMPLOYEES 

      The  steps below  outline the  procedure  for making  changes to  your
      existing employee accounts. 

      1.   Select "F4" at the Payroll main menu. 

      2.   With  the cursor  at  the  employee number  prompt,  type in  the
           account number  you wish to  change.  If  you wish to  accept the
           default account press ENTER.  To choose a different account, move
           the highlighted pointer through the  account list that appears on
           the screen by using the up and down keypad arrows. 

      3.   Because  the  account number  you  have  entered is  an  existing
           employee number, the system prompts: 


                    ACTIVE ACCOUNT Modify/Delete/Quit(M/D/Q):_ 


           Answer this prompt with "M".  You are now in the change mode. 

      4.   Make any desired changes the existing  data, but you are not able
           to change  the account  number.  Press ENTER  to leave  any field
           unchanged. 

      5.   If you want to go back to a previous field while you are changing
           data, you may do so by pressing the Backspace key. 

      6.   After you make the necessary changes to your data, press ENTER or
           the  PgDn  key  until  the system  prompts  "Are  inputs  correct
           (Y/N):_".  Type  "Y" to save your  changes.  If you enter  a "N",
           the system will ignore all changes  and the cursor will return to
           the account number field. 


      3g - DELETING EMPLOYEES 

      When deleting  employees, there  cannot be  any transactions  for that
      employee  number.  If  there are  transactions for  the account  to be
      deleted, FINANCE MANAGER will not allow the account to be deleted. 



                                       Page 17
                            FINANCE MANAGER II - Payroll



      Be sure  to practice deleting accounts  on your demo WORK  file before
      you delete a "real" employee from your "real" data files. 

      To delete an employee account follow the steps below: 

      1.   Select "F4" at the Payroll main menu. 

      2.   Then enter the  number of the account to be  deleted while at the
           employee account number prompt.  The system will then prompt: 


                    ACTIVE ACCOUNT Modify/Delete/Quit(M/D/Q):_ 


      3.  Select "D".  The system will prompt  you "Are you sure (Y/N):_" If
          you answer with "Y" the account will then be deleted. 


      3h - SUGGESTED METHOD FOR SETTING BEGINNING BALANCES 

      When setting up your Payroll,  as well as employee beginning balances,
      you must  be sure that  you are in  balance with your  General Ledger.
      This is a vitally important procedure to remember when setting up your
      books.  The following steps will insure that you are in balance: 

      1.   Set up all  your employee accounts with a  zero beginning balance
           first. 

      2.   You then have two options to enter any prior payroll balance: 

      3.   You  may  enter them  in  the  Employee Beginning  Balance  input
           fields.  These  balances will  then show  as a  lump sum  on your
           year-to-date  Payroll  Register  report  and W-2s.   If  you  are
           starting a new accounting year  and have preexisting vacation and
           sick leave  balances we recommend  for those  to be entered  as a
           total sum in there corresponding fields. 

      4.   Or you may enter them as individual transactions (see section 4),
           broken down by prior pay periods for each employee.  We recommend
           entering   all  your   prior  payroll   balances  as   individual
           transactions.  Then  enter manual checks to  pay all transactions
           just  entered.   As these  transactions  will  be posted  to  the
           General  Ledger  you should  ensure  that  you have  removed  any
           previously entered G/L transactions to avoid duplicate data. 

      5.   After  all   beginning  balances  have  been   entered,  print  a
           year-to-date  (Jan-Dec) Payroll  Register  report  to verify  all
           current  employee  balances for  your  selected  pay period.   To
           verify the correct balances for  sick leave and holiday print the
           Vacation & Sick Report. 

      6.   After you  have verified all account  balances you are now  up to
           date  and fully  operational.  If  you want  your General  Ledger
           Payroll account  to reflect the  current balances of  all Payroll
           accounts, you should go to the Payroll Utility main menu and post
           the  transactions to  the  General Ledger.   See  section 7c  for
           detailed information. 

           Note: Make  sure   that  you   delete  any   preexisting  payroll


                                       Page 18
                            FINANCE MANAGER II - Payroll


                 transactions in  the General  Ledger, so  they will  not be
                 listed twice. 




























































                                       Page 19
                            FINANCE MANAGER II - Payroll


                            SECTION FOUR - TRANSACTIONS 

      4a - WHAT ARE TRANSACTIONS 

      One transaction should  be entered into the payroll system  at the end
      of each pay period.  Each entered  transactions will become a check to
      the  employee when  paid.  Thus  only enter  one transaction  for each
      payroll check needed. 


      4b - TRANSACTION DATA FIELDS 

      The  transaction input  fields  are described  below.   Each of  these
      fields has a  default which is the last data  entered into that field.
      This default saves keystrokes when doing repetitive inputting. 

      EMPLOYEE NUMBER     This is  the account  number for the  employee for
                          which you  are entering a transaction.   Note that
                          the employee's name will automatically appear when
                          an active account number is entered as well as the
                          frequency of the employee's pay.  REQUIRED. 


      PAY PERIOD ENDING   This is  the last day  of the pay period)  not the
                          date on the check).  REQUIRED. 


      HOURS PAID          These are  the total number of  hours for regular,
                          overtime, sick, vacation  or holiday, the employee
                          will  be paid  for this  pay period.   Notice that
                          Finance Manager  will automatically  calculate the
                          number of  regular hours  paid for  each employee.
                          REQUIRED, HOURLY EMPLOYEES ONLY. 


      OTHER EARNINGS 1&2  These  input   fields  would  include   any  other
                          compensation the employee  receives (car allowance
                          etc.) If  this compensation should be  taxed enter
                          "Y" in the  following "Taxable(Y/N)" field.  Enter
                          "N" if this compensation  should not be taxed.  If
                          "N" is selected these amounts WILL NOT be shown on
                          the employees W-2.  OPTIONAL 

      OTHER DEDUCTION     This  deduction  can  be  used  for  miscellaneous
                          deductions from  the employees paycheck.   If this
                          deduction  should  be  taxed   enter  "Y"  in  the
                          following "Taxable(Y/N)" field.  Enter "N" if this
                          deduction should not be taxed.  These amounts WILL
                          be  shown   in  box  10  of   the  employees  W-2.
                          OPTIONAL. 

      ACCOUNT             The "Account"  field allows you to  select the G/L
                          account  number to  which the  Other Earnings  and
                          Other Deduction amount fields correspond (e.g. for
                          a car  allowance other  earnings you  would select
                          your   G/L   car   allowance   expense   account).
                          OPTIONAL. 





                                       Page 20
                            FINANCE MANAGER II - Payroll


      4c - GETTING FAMILIAR WITH TRANSACTIONS 

      Before entering your "real" transactions, follow the procedures listed
      below by practicing with the WORK demo accounts.  This will aid you in
      learning how to enter transactions without using live data. 

      1.   From  the  Payroll Main  Menu  select  "F1".   You will  then  be
           prompted for the following information: 

      Employee Number   :_____ 
      Pay Period Ending :__-__-__ 
      HOURS PAID:Regular:_______Overtime:_______Sick:_______Vacation:_______ 
                 Holiday:_______                         TOTAL HOURS:    

      Other Earnings 1:__________ Taxable(Y/N):_ Account:____ 
      Other Earnings 2:__________ Taxable(Y/N):_ Account:____ 
      Other Deduction :__________ Taxable(Y/N):_ Account:____ 


      2.   The cursor will be positioned at the "Employee Number" prompt. 

           On  the lower  half  of  the screen  you  will  see the  existing
           employee accounts appear.  Seeing  these accounts is helpful when
           you are selecting employees. 

           The selected employee  account is highlighted.  In  order to move
           to other accounts,  press the up or down arrow  keys on the right
           keypad.  If you  move the highlighting pointer down  a few lines,
           notice how the list scrolls. 

           You  may  select  an  existing   account  number  by  moving  the
           highlighting pointer up  or down to the desired  account and then
           pressing the ENTER key. 

           This advanced feature allows you  to scroll through your employee
           account listing without ever having to memorize, or even type in,
           an account number. 

      3.   To return to the previous menu, press ESC. 

      Before entering  your own transactions, practice  adding, changing and
      deleting  transactions  by  using  the WORK  demo  files.   This  will
      familiarize you  with how  to enter,  change, or  delete transactions.
      Changing  and  deleting transactions  is  described  in the  following
      sections. 


      4d - ENTERING TRANSACTIONS 

      As you enter each transaction,  FINANCE MANAGER saves this information
      and updates  the employee  listing as appropriate.    

      1.   In order  to begin  entering transactions,  select "F1"  from the
           Payroll Main Menu.   You will then be prompted  for the following
           information: 







                                       Page 21
                            FINANCE MANAGER II - Payroll


      Employee Number   :____ 
      Pay Period Ending :__-__-__ 
      HOURS PAID:Regular:_______Overtime:_______Sick:_______Vacation:_______ 
                 Holiday:_______                         TOTAL HOURS: 

      Other Earnings 1:__________ Taxable(Y/N):_ Account:____ 
      Other Earnings 2:__________ Taxable(Y/N):_ Account:____ 
      Other Deduction :__________ Taxable(Y/N):_ Account:____ 


      2.   When entering  transactions, the last transaction  entered always
           provides the  default data (unless  of course, this is  your very
           first  transaction).  To  accept the  default data,  simply press
           ENTER and  you will move to  the next field.  In  order to change
           data, simply type in the new data and then press ENTER. 

      3.   First enter the employee number: 

                                 Employee Num:SMIT 

           The existing employees will appear on the screen.  You may either
           select an employee from this list  by using keypad arrow keys (as
           described earlier), or  you may type in the  employee number.  If
           you are using the keypad arrow keys,  be sure the Num Lock key is
           off. 

           NOTE: When you  enter the  employee number the  following message
                 appears: 

                                FREQUENCY:BIWEEKLY 

           This message reminds you of the employee's pay schedule.   


      4.   Enter the date the Pay Period ends: 

                            Pay Period Ending:05-08-89 


      5.   Enter  the total  number of  hours for  regular, overtime,  sick,
           vacation or holiday to be paid: 

           Regular:80.00__ Overtime:3.00___ Sick:0.00____ Vacation:0.00____ 
           Holiday:0.00____ 


      6.   Enter any  other earnings and/or  deductions, as well  as taxable
           flags, and account numbers: 

             Other Earnings 1:10.00_____ Taxable(Y/N):Y Account:5230 
             Other Earnings 2:0_________ Taxable(Y/N):_ Account:____ 
             Other Deduction :0_________ Taxable(Y/N):_ Account:____ 


      7.   At  this point  FINANCE MANAGER  will calculate  and display  the
           deductions for this transaction.  After the automatic calculation
           is made the following message will be displayed: 

                        Change Payroll Calculations (Y/N):_ 



                                       Page 22
                            FINANCE MANAGER II - Payroll


           Note: Answer this message with "Y" if you need to manually change
                 the  computers  calculated payroll  deductions.   Otherwise
                 answer with  "N".  If you  had preexisting payroll  or were
                 calculating  earnings and  deductions differently  than the
                 automatic method  used by Finance Manager  you would answer
                 the above  prompt with  "Y".  You will  then be  allowed to
                 change each of the calculated amounts. 

      8.   If you are  entering a transaction and  you want to go  back to a
           previous field, use the Backspace key. 

      9.   You may abort the transaction at any time by pressing ESC. 

      10.  After  you have  entered all  your transactions  the system  will
           prompt you: 

                            Are inputs correct (Y/N):Y 

           Answer the prompt  with "Y" if you wish to  save the transaction.
           The cursor will then automatically  return to the Employee Number
           field for the next transaction.  If you answer this prompt with a
           "N", you will  return to the Employee Number field  and all prior
           inputs will be ignored and the  cursor returns to the first input
           field. 

      11.  After you have  entered all your transactions, press  the ESC key
           to return to the Payroll Main Menu. 


      4e - CHANGING EXISTING TRANSACTIONS 

      If you  discover an error in  an earlier transaction, or  if you would
      like to change previously  entered information, FINANCE MANAGER allows
      you  to  do  so.   Outlined  below are  the  procedures  for  changing
      previously entered transactions. 

      1.   Select "F2" at the Payroll Main Menu. 

      2.   The system  prompts you for  "ENTER DATA FOR  PAYROLL TRANSACTION
           SEARCH". 

      3.   Enter data in the fields you want to search for.  For example, if
           you want to  search for all transactions which have  a pay period
           ending  date of  "05-06-89", you  would  move to  the Pay  Period
           Ending field and  enter the date.  Upper and lower  case does not
           matter in  alphanumeric fields, and  you do not have  to complete
           the field.   For example, if you  entered only the first  part of
           the date  "05", FINANCE MANAGER  will find all dates  which begin
           with "05"  (i.e.  "05-06-89").   You could  also add  an employee
           number parameter to  the search and, consequently,  find only the
           "05" pay period dates for a particular employee. 

           Any field  left blank  is an  assumed wild  card for  that field.
           Thus if you  leave ALL of the fields blank,  all transactions are
           selected by the search.  Either press ENTER or the PgDn key until
           you  are prompted  with "Are  Inputs Correct  (Y/N):_".  If  your
           entries are correct enter "Y".  If  you enter "N" you will return
           to the first input screen to start again. 

           To assist you in finding an employee or chart of accounts account


                                       Page 23
                            FINANCE MANAGER II - Payroll


           number, pressing  the "F2" key  while at the  corresponding input
           field will display a pop-up  accounts window.  You can now scroll
           through your accounts listing  and select the appropriate account
           to search for.   Pressing "Enter" or "Backspace"  will remove the
           pop-up accounts window. 

      4.   Next, FINANCE  MANAGER searches  for all  transactions containing
           the values you have specified.  As each transaction is displayed,
           the program displays the following prompt: 

                Modify/Delete/Continue/Reverse/Begin/End/+/-/Quit:_ 

           You must select M,D,C,R,B,E,+,-, or Q. Where: 

                M = Modify (change) transaction shown. 
                D = Delete (remove) transaction shown. 
                C = Continue (find next transaction that matches search). 
                R = Reverse  continue (find  prior transaction  that matches
                    search). 
                B = Beginning (go to first transaction in file). 
                E = Ending (go to last transaction in file). 
                + = Go to next consecutive transaction in file. 
                - = Go to prior consecutive transaction in file. 
                Q = Quit transaction search. 

      5.   As long  as you  continue to  answer the  above prompt  with "C",
           FINANCE   MANAGER  continues   searching  for   all  transactions
           containing the values you have specified.  Selecting "R" does the
           same as "C" except it searches backwards. 

      6.   Answering  the  prompt with  a  "+",  causes FINANCE  MANAGER  to
           display the  next consecutive  transaction; a  "-" shows  you the
           previous transaction (regardless of search parameters). 

      7.   Entering a "B" or an "E" will take you to the Beginning or End of
           the transaction file respectively.  It ignores search parameters. 

      8.   When the  search function  displays the  transaction you  wish to
           change, answer the prompt with an "M" (Modify). 

      9.   You are now  in the change mode.  Remember, ENTER  leaves a field
           unchanged.  Change data  in any field by typing in  the new value
           for the  given field.  If  you change any payroll  number FINANCE
           MANAGER  will  recalculate  the  earnings,  deductions,  employer
           liability and  accrued vacation and  sick hours at the  bottom of
           the screen. 

      10.  FINANCE MANAGER will tell you if the transaction has already been
           posted  to your  General  Ledger.  If  the  transaction has  been
           posted  you will  not  be  able to  make  ANY  changes.  This  is
           necessary to  avoid out-of-balance  conditions with  your General
           Ledger.   

           If  you need  to change  the fields  of a  posted transaction  we
           recommend  that  you  enter  a new  transaction  to  reflect  any
           adjustment to the original transaction. 

      11.  If you  have made  a mistake, or  you would like  to return  to a
           previous field, simply use the Backspace key.  Use the ESC key to
           ignore your changes and return to the Main Menu. 


                                       Page 24
                            FINANCE MANAGER II - Payroll



      12.  After you  have made all  necessary changes to  your transactions
           the program will prompt you "Are inputs correct (Y/N):_".  Answer
           "Y" if you wish to save them.  The cursor will then return to the
           first input screen  and you can continue on.  Answer  "N" and the
           system  will ignore  all changes  and return  to the  first input
           field. 

      13.  If  you press  the  ESC key  the system  will  prompt you:  "FIND
           ANOTHER (Y/N):_"  if you  answer "Y" your  cursor returns  to the
           first input screen.  Answer "N" you will return to the main menu. 


      4f - DELETING TRANSACTIONS 

      To delete or remove a transaction PERMANENTLY, do the following: 

      1.   Select "F2" at the Payroll Main Menu. 

      2.   Enter search  data and find  desired transaction as  described in
           "Changing Transactions". 

      3.   When  the transaction  you wish  to  delete is  displayed on  the
           screen, answer "D" at the prompt below. 

                Modify/Delete/Continue/Reverse/Begin/End/+/-/Quit:

      5.   After you  have deleted the  desired transaction(s), you  may use
           the  "Sort" function.   (See  Section Seven  "Other features  and
           functions   -   Sorting    Transactions.")   When   sorting   the
           transactions,  the program  frees disk  space which  was formerly
           used by the now deleted transactions. 

      PAID (Not posted) To delete a  paid (not posted)  transaction you must 
      TRANSACTIONS:     first void the check and then you will be allowed to
                        delete the transaction. 

      PAID & POSTED     To delete a paid and posted transaction all you have 
      TRANSACTIONS:     to do  is delete  the transaction.   Finance Manager
                        will automatically delete the transaction and create
                        a reversal transaction to be  posted to the G/L next
                        time you do a posting. 


      4g - POINTS TO REMEMBER 

      When  searching for  transactions remember  that the  transaction file
      will be  shown in  the order  it was  last sorted  by. See  section 7b
      "Sorting Transactions" for more information. 

      When you delete a posted  transaction, Finance Manager will remove the
      transaction from the payroll system as  well as make a reversing entry
      to be posted to the General Ledger.   The net effect will be as if the
      transaction was never entered. 








                                       Page 25
                            FINANCE MANAGER II - Payroll


                              SECTION FIVE - REPORTS 


      The Payroll  Reports Menu allows  you to  generate a full  spectrum of
      Payroll reports from your data base.   The reports menu ("F3" from the
      Payroll Main Menu) appears as follows: 

                     --------- PAYROLL REPORTS MENU --------- 
                     |                                      | 
                     |   ESC  Return to Payroll Main Menu   | 
                     |   F1   Payroll Journal               | 
                     |   F2   Payroll Register              | 
                     |   F3   Check Register                | 
                     |   F4   Vacation & Sick Report        | 
                     |   F5   Employee Listing              | 
                     |   F6   Employee Address Labels       | 
                     |   F7   Paid Payroll Recap            | 
                     |   F8   Quarterly Tax Summary         | 
                     |   F9   Non-Posted Transaction Journal| 
                     |   F10  General Ledger Distribution   | 
                     |   ENTER YOUR SELECTION:              | 
                     |                                      | 
                     ---------------------------------------- 

      Reports can be generated to show results for a specific month, a range
      of months, a quarter,  a year, a pay period, etc.   All reports may be
      generated at any time and for any 12 month range.  This means that you
      are not limited to printing a report only once, and it also means that
      you can print a report for a prior period as well. 

      Samples of  each report are  shown in Appendix  A, and may  be printed
      while using the DEMO accounts. 


      5a - GENERAL INSTRUCTIONS FOR GENERATING REPORTS 

      While printing any report you  may, if desired, interrupt the printing
      in one of two ways: 

      PAUSE THE PRINTER:    When you  are printing reports on  your printer,
                            you may pause the  printing by pressing any key.
                            Please keep  in mind  that most printers  have a
                            print   buffer.     Consequently,   the   report
                            continues to  print until  the buffer  is empty.
                            Pressing  any  key   again  will  continue  your
                            printout.  This  function will  not work  if you
                            are sending reports to the screen, since reports
                            will stop automatically as each screen is full. 

      STOP THE PRINTER:     If while printing, you  wish to stop the printer
                            and return  to the menu,  all you have to  do is
                            press the  "Esc" key.  Please keep  in mind that
                            most printers  have a print buffer,  causing the
                            report to continue to  print until the buffer is
                            empty.  You  will, however,  return to  the menu
                            immediately. 






                                       Page 26
                            FINANCE MANAGER II - Payroll


      When generating  reports, you  have three output  destination options.
      First, you may send the reports to  the screen.  Second, if you have a
      printer,  you can  print  a hard  copy.  Finally,  you  can send  your
      reports  to a  disk file.   With this  useful option,  reports can  be
      stored and then printed at a later date. 

      This  "Destination" prompt  is an  option  for each  of the  available
      reports.  To select the destination, answer the prompt below: 

                         TO SCREEN/PRINTER/DISK (S/P/D):__ 

      If you  select "D"  for disk, the  system will prompt  you for  a disk
      "filename".  Enter  a filename  of up to  eight characters.   The file
      will be  saved on your data  disk, with the file  extension of ".RPT".
      If a file  with the name entered already exists,  the system will tell
      you so and ask if you want to delete the old file.  If you answer "N",
      the new report will be appended to the already existing disk file. 

      For some  reports, you also  need to  specify reporting dates  via the
      "Date" prompt.  The date prompt appears as follows: 


                           ENTER DATE RANGE FOR REPORTS: 
                               STARTING Month:__ Year:__ 
                                 ENDING Month:__ Year:__ 


      These  dates  determine which  months  and  years  are shown  on  your
      reports.  The  ending month and year  must be within twelve  months of
      the  starting month  and  year (maximum  12 month  range).   To get  a
      year-to-date report  you might  select the  dates 1-89  through 12-89.
      Likewise, if  you want a first  quarter report you should  select 1-89
      through 3-89.

      When entering prompts for reports, remember  that you may back up to a
      previous field by pressing the Backspace  key.  If you want to go back
      to the reports menu while you are at the input screen, press ESC. 


      5b - PRINTING THE PAYROLL JOURNAL 

      This  report  is  a  listing  of all  transactions  entered  during  a
      specified period of  time and shows which General  Ledger accounts are
      credited and debited. 

      When  printing  the  PAYROLL  JOURNAL  (F1), be  sure  to  employ  the
      following procedures: 

          a.  Select "F1" from the reports menu. 

          b.  The following screen will appear: 


                           TO SCREEN/PRINTER/DISK (S/P/D):_ 


                           SELECT PAID,UNPAID OR ALL (P,U,A) :_ 
                           ENTER DATE RANGE FOR REPORTS: 
                                     STARTING Month:__ Year:__ 
                                       ENDING Month:__ Year:__ 


                                       Page 27
                            FINANCE MANAGER II - Payroll




          c.  First, type in the destination for your report. 

          d.  Then, enter  the type of  transactions to be included  in this
              report.  If you enter "P",  only the paid transactions will be
              printed.  If you enter "U",  only the unpaid transactions will
              be  printed.   If you  enter  "A",  all transactions  will  be
              printed. 

          e.  Finally, enter  the date range  wanted for your  report.  This
              report  is  compared   to  the  Period  Ending   date  of  the
              transactions. 

          f.  The report will then be printed. 

              NOTE: If  the message  "LOAD PRINTER  WITH AT  LEAST 11"  WIDE
                    PAPER" comes up while you  are waiting for the report to
                    print, your settings for  printing in compressed mode is
                    not  set  up  correctly  in the  G/L  System  Utilities.
                    Please check your printer manual for the correct control
                    codes. 


      5c - PRINTING THE PAYROLL REGISTER 

      This report gives in detail a  gross total of all earnings, deductions
      and liabilities for the selected pay period. 

      When  printing the  PAYROLL  REGISTER (F2),  the following  procedures
      apply: 

          a.  Select "F2" from the reports menu. 

          b.  The following screen will appear: 


                             TO SCREEN/PRINTER/DISK (S/P/D):_ 


                             SELECT PAID,UNPAID OR ALL (P,U,A):_ 
                             ENTER DATE RANGE FOR REPORTS: 
                                     STARTING Month:__ Year:__ 
                                       ENDING Month:__ Year:__ 
                             Pay frequency(A,W,B,S,M):_ 

                             EMPLOYEE ACCOUNT RANGE: 
                                          STARTING EMPLOYEE:____ 
                                            ENDING EMPLOYEE:____ 


          c.  First, type in the destination for your report. 

          d.  Second, select  "P" for paid,  "U" for  unpaid or "A"  for all
              employees.  If you select "U", you  will not have a date range
              selection. 

          e.  Third, enter the date range wanted for your report. 

          f.  Next, answer the "Pay frequency" prompt with either "A" (all),


                                       Page 28
                            FINANCE MANAGER II - Payroll


              "W"  (weekly),  "B"  (biweekly), "S"  (semi-monthly),  or  "M"
              (monthly). 

          g. Finally, select the employee account range you want included in
             this report. 

          h.  The report will then be printed. 



      5d - PRINTING THE CHECK REGISTER 

      This report  shows the checks  you have  written for each  pay period,
      including the  gross pay, total  deductions and  the net pay  for each
      employee. 

      When printing the CHECK REGISTER (F3), the following procedures apply: 

          a.  Select "F3" from the reports menu. 

          b.  The following screen will appear: 


                      TO SCREEN/PRINTER/DISK (S/P/D):_ 


                      ENTER DATE RANGE FOR REPORTS: 
                                STARTING Month:__ Year:__ 
                                  ENDING Month:__ Year:__ 


          c.  First, enter the destination for your report.  Next, enter the
              date range wanted for your report.  This date is the paid date
              and NOT the transaction "Period Ending" date. 

          d.  The report will then be printed. 


      5e - PRINTING THE VACATION & SICK REPORT 

      This report shows the current balance and the used year to date figure
      of vacation and sick hours for any range of employees selected. 

      When  printing  the  VACATION  &   SICK  REPORT  (F4),  the  following
      procedures will apply: 

          a.  Select "F4" from the reports menu. 

          b.  The following screen will appear: 


                      TO SCREEN/PRINTER/DISK (S/P/D):_ 


                                AS OF: Month:__ Year:__ 
                      Skip Inactive Employees  :_ 
                      Pay frequency (A,W,B,S,M):_ 

                      EMPLOYEE ACCOUNT RANGE: 
                                     STARTING EMPLOYEE:____ 


                                       Page 29
                            FINANCE MANAGER II - Payroll


                                       ENDING EMPLOYEE:____ 


          c.  First, type in  the destination for your  report.  Next, enter
              the date wanted for your report. 

          d.  Then, answer the "Skip Inactive  Employees" prompt with "Y" or
              "N". 

          e.  Next, answer the "Pay  frequency" prompt with either "A"(all),
              "W"(weekly), "B"(biweekly), "S"(semi-weekly) or "M"(monthly). 

          f.  Then, enter employee  account number range for  which you want
              the  report to  be printed.   Notice that  when you  reach the
              "Starting Employee"  prompt, FINANCE  MANAGER will  display an
              employee  listing on  your  screen  so you  will  not have  to
              memorize any account numbers. 

          g.  Next, the following screen will appear: 


                     ---------- SELECT SORT ORDER ----------- 
                     |                                      | 
                     |   ESC  Return to Reports Menu        | 
                     |   F1   Employee Number Order         | 
                     |   F2   Zipcode Order                 | 
                     |   F3   Employee Name Order           | 
                     |                                      | 
                     |                                      | 
                     |                                      | 
                     |                                      | 
                     |                                      | 
                     |                                      | 
                     |                                      | 
                     |   ENTER YOUR SELECTION:              | 
                     |                                      | 
                     ---------------------------------------- 


          h.  Select either "F1",  "F2", or "F3" depending on  the order you
              want the report to print in. 

          i.  The report will be printed. 


      5f - PRINTING THE EMPLOYEE LISTING 

      This  report is  a  listing  of all  employees  and the  corresponding
      information in the Employee Account Number data base.  













                                       Page 30
                            FINANCE MANAGER II - Payroll



      When printing this report the following procedures apply: 

          a.  Select "F5" from the reports menu. 

          b.  The following screen will appear: 


                           TO SCREEN/PRINTER/DISK (S/P/D):_ 



                           Skip Inactive Employees  :_ 
                           Pay frequency (A,W,B,S,M):_ 

                           EMPLOYEE ACCOUNT RANGE: 
                                          STARTING EMPLOYEE:____ 
                                            ENDING EMPLOYEE:____ 


          c.  Type in the destination for your report. 

          d.  Next, answer the "Skip  Inactive Employees" prompt with either
              "Y" or "N". 

          e.  Then, answer the "Pay frequency" prompt with either "A" (all),
              "W"  (weekly),  "B"  (biweekly), "S"  (semi-monthly)  or  "M"
              (monthly). 

          f.  Next, enter the  employee account number range  which you want
              printed.  Notice  that when you reach  the "Starting Employee"
              prompt, FINANCE  MANAGER will  display an employee  listing on
              your  screen so  you will  not  have to  memorize any  account
              numbers. 

          g.  Then, the following screen will appear: 


                     ----------- SELECT SORT ORDER ---------- 
                     |                                      | 
                     |   ESC  Return to Reports Menu        | 
                     |   F1   Employee Number Order         | 
                     |   F2   Zipcode Order                 | 
                     |   F3   Employee Name Order           | 
                     |                                      | 
                     |                                      | 
                     |                                      | 
                     |                                      | 
                     |                                      | 
                     |                                      | 
                     |                                      | 
                     |   ENTER YOUR SELECTION:              | 
                     |                                      | 
                     ---------------------------------------- 








                                       Page 31
                            FINANCE MANAGER II - Payroll


          h.  Select either "F1",  "F2", or "F3" depending on  the order you
              want the report to print in. 

          i.  The report will be printed. 



      5g - PRINTING THE EMPLOYEE ADDRESS LABELS 

      This  report provides  mailing labels  for your  employees, sorted  in
      employee number  order, zipcode  order, or  employee name  order.  Use
      one-up labels with any length from 6 to 99 lines per label. 

      When printing this report the following procedures apply: 

          a.  Select "F6" from the payroll reports menu. 

          b.  The following screen will appear: 


                      TO SCREEN/PRINTER/DISK (S/P/D):_ 



                      Number of lines per label:__ 

                      Skip Inactive Employees  :_ 
                      Pay frequency (A,W,B,S,M):_ 

                      EMPLOYEE ACCOUNT RANGE: 
                                    STARTING EMPLOYEE:____ 
                                      ENDING EMPLOYEE:____ 


          c.  Type in the destination for your report. 

          d.  Enter  the number  of lines  per  label (6-99).   This is  the
              number of print lines from the top  of one label to the top of
              the next.  Usually 6 lines for 15/16 inch long labels. 

          e.  If  you  want labels  for  only  employees who  are  currently
              working for  you, answer the "Skip  Inactive Employees" prompt
              with "Y".  If you want labels  for ALL employees answer with a
              "N". 

          f.  Then, answer the "Pay frequency" prompt with either "A" (all),
              "W"  (weekly),  "B"  (biweekly),  "S"  (semi-monthly)  or  "M"
              (monthly). 

          g.  Next, enter the  employee account number range  which you want
              printed.  Notice  that when you reach  the "Starting Employee"
              prompt, FINANCE  MANAGER will  display an employee  listing on
              the lower half of your screen so you will not have to memorize
              any account numbers. 








                                       Page 32
                            FINANCE MANAGER II - Payroll


          h.  Finally, load your printer with  blank labels.  In order to be
              sure that  they are  lined up  properly, answer  the alignment
              prompt with a "Y".  Repeat  this until your labels are aligned
              properly  in your  printer.   Then answer  with  a "N".   This
              prompt will only  be displayed if you are  printing the labels
              to the printer. 

          i.  Next, the following screen will appear: 


                     ----------- SELECT SORT ORDER ---------- 
                     |                                      | 
                     |   ESC  Return to Reports Men         | 
                     |   F1   Employee Number Order         | 
                     |   F2   Zipcode Order                 | 
                     |   F3   Employee Name Order           | 
                     |                                      | 
                     |                                      | 
                     |                                      | 
                     |                                      | 
                     |                                      | 
                     |                                      | 
                     |                                      | 
                     |   ENTER YOUR SELECTION:              | 
                     |                                      | 
                     ---------------------------------------- 

          j.  Select either "F1",  "F2", or "F3" depending on  the order you
              want the report to print in. 

          k.  The labels will be printed. 


      5h - PRINTING THE PAID PAYROLL RECAP REPORT 

      This report will  show TOTAL earnings, deductions  and liabilities for
      the period you select.  The data used in this report will include ONLY
      PAID transactions and  the dates selected are the paid  check date NOT
      the "Period Ending" date. 

      When printing this report the following procedures apply: 

          a.  Select "F7" from the reports menu. 

          b.  The following screen will appear: 


                          TO SCREEN/PRINTER/DISK (S/P/D):_ 

                          ENTER DATE RANGE FOR REPORTS: 
                                       STARTING DATE:__-__-__ 
                                         ENDING DATE:__-__-__ 

          c.  First, enter the destination for your report.  Next, enter the
              starting date range and the  ending date range wanted for your
              report.  Remember,  this is  the "Paid  Date" not  the "Period
              Ending" date. 

          d.  The report will then be printed. 



                                       Page 33
                            FINANCE MANAGER II - Payroll



      5i - PRINTING THE QUARTERLY TAX SUMMARY 

      This report lists each employee,  social security number, taxed wages,
      FICA wages, and  SUTA wages for the time period  selected (usually one
      quarter).  It also shows the Federal, State, and City tax liability by
      date payroll paid which greatly simplifies your 941 reporting. 

      When printing this report the following procedures apply: 

          a.  Select "F8" from the reports menu. 

          b.  The following screen will appear: 

                          TO SCREEN/PRINTER/DISK (S/P/D):_ 

                          ENTER DATE RANGE FOR REPORT: 
                                       STARTING Month:__  Year:__ 
                                         ENDING Month:__  Year:__ 

          c.  First, enter the destination for your report.  Next, enter the
              date range wanted for your  report.  Usually you should select
              a quarter (i.e. month 1-3, January through March). 

          d.  The report will then be printed. 


      5j - PRINTING THE NON-POSTED TRANSACTION JOURNAL 

      This  report is  a listing  of transactions  which have  not yet  been
      posted to your General Ledger. 

      When printing this report the following procedures apply: 

          a.  Select "F9" from the reports menu. 

          b.  The following screen will appear: 


                      TO SCREEN/PRINTER/DISK (S/P/D):_ 


                      SELECT PAID,UNPAID OR ALL (P,U,A):_ 


          c.  Type in destination for your report. 

          d.  Next, enter  the type of  transaction to be  included.  Answer
              either "P" (paid), "U" (unpaid) or "A" (all). 

          e.  The report will then be printed. 


      5k - PRINTING THE GENERAL LEDGER DISTRIBUTION REPORT 

      This report shows the total  amount of payroll transactions (including
      payments) posted to  each General Ledger account  number.  This report
      includes  both PAID  and UNPAID  transactions.  Please  remember, that
      only paid transactions will be actually posted to the General Ledger. 



                                       Page 34
                            FINANCE MANAGER II - Payroll


          a.  Select "F10" from the reports menu. 

          b.  The following screen will appear: 


                           TO SCREEN/PRINTER/DISK (S/P/D):_ 


                            ENTER DATE RANGE FOR REPORTS: 
                                    STARTING Month:__ Year:__ 
                                      ENDING Month:__ Year:__ 


          c.  First, enter the destination for your report.  Next, enter the
              date range wanted for your report.

          d.  The report will then be printed. 













































                                       Page 35
                            FINANCE MANAGER II - Payroll


                     SECTION SIX - WRITING EMPLOYEE PAYCHECKS 


      This section  will discuss how  to print Payroll checks,  void checks,
      and enter manual (handwritten) checks, if desired. 

      In  order to  get to  the Payroll  Checks menu,  select "F5"  from the
      Payroll Main menu.  It appears as follows: 


                     ---------- PAYROLL CHECKS MENU --------- 
                     |                                      | 
                     |   ESC  Return to Payroll Main Menu   | 
                     |   F1   Print Checks                  | 
                     |   F2   Void Checks                   | 
                     |   F3   Manual Checks                 | 
                     |                                      | 
                     |                                      | 
                     |                                      | 
                     |                                      | 
                     |                                      | 
                     |                                      | 
                     |                                      | 
                     |   ENTER YOUR SELECTION:              | 
                     |                                      | 
                     ---------------------------------------- 

      We will  discuss each  of the  above menu  selections in  the sections
      which follow. 


      6a - PRINTING CHECKS 

      Load  your printer  with your  pre-printed continuous-form  checks and
      check to be sure you have  set up the Payroll configuration (utilities
      menu) for the  checks you will be using (Nebs check form # 9001). 

      Select "F1"  from the  checks menu  and you will  be prompted  for the
      following information: 

      NOTE: In order to  print continuous form checks you need  an 85 column
            printer. 

                        Enter DATE for Checks:__-__-__ 
                        Enter NEXT Check Number:____ 
                        G/L Check Account Number:____ 
                        Payroll for type(A,W,B,S,M):_ 

          a.  Enter the date you want printed on your checks. 

          b.  Enter  the check  number of  the  first check  in the  printer
              (FINANCE  MANAGER will  not print  the check  number on  check
              lineups).   If  your  checks  do not  have  pre-printed  check
              numbers,  enter the  number you  wish to  have printed  on the
              first  LIVE   (non-line  up)  check.   FINANCE   MANAGER  will
              automatically  increment  the  checks  numbers  for  the  live
              printed checks.





                                       Page 36
                            FINANCE MANAGER II - Payroll


          c.  Enter  the  General Ledger  checking  account  number for  the
              checks  you are  writing.  It  is important  that you  use the
              correct  G/L  account number  otherwise  your  funds for  this
              check(s) will come out of  the wrong account.  Notice when you
              reach  this  section, how  FINANCE  MANAGER  will display  the
              account number listing on your screen  so you will not have to
              memorize any account numbers. 

          d.  Enter the  category for which  you want checks to  be printed.
              Enter   "A"  (all),   "W"   (weekly),   "B"  (biweekly),   "S"
              (semi-monthly) or "M" (monthly). 

          e.  After entering  the category FINANCE  MANAGER will ask  you if
              you want printer lineup. 

                          Print Alignment Pattern (Y/N):_ 

              Answer with a "Y" until you have the checks properly lined up.
              When you  answer this prompt with  a "N", your checks  will be
              printed. 

      Until you answer the alignment pattern with a "N", you may at any time
      abort the  check printing process and  return to the menu  by pressing
      the ESC key. 


      6b - VOIDING PRINTED CHECKS 

      Check written to  a specific employee may be voided  by selecting "F2"
      from the checks  menu.  This function will allow you  to void the last
      check written  and also mark  the transaction(s) unpaid  again, either
      computer  generated  or  manual.   Upon selecting  this  function  the
      following screen will appear: 

                          Enter Check Number to Void:____ 


      If you  cannot remember which check  number you wanted to  void simply
      hit ENTER.   FINANCE MANAGER  will display  on the  lower half  of the
      screen all checks written, starting with the last one. 


      6c - ENTERING MANUAL CHECKS 

      Another great feature  included in the FINANCE  MANAGER Payroll module
      is  the  ability  to  enter  checks manually.   This  allows  you  the
      flexibility of  hand writing  checks.  You simply  write the  check by
      hand  if you  do not  want  to do  a full  check  run or  do not  have
      pre-printed checks. 

      In order to use this feature,  select "F3" from the Checks menu.  Upon
      selecting this function you will be prompted as listed below: 


                    Enter DATE for Checks      :__-__-__ 
                    Enter NEXT Check Number    :____ 
                    G/L Check Account Number   :____ 
                    Payroll for type(A,W,B,S,M):_ 

      Enter the DATE, CHECK NUMBER, G/L  ACCOUNT NUMBER AND PAY FREQUENCY as


                                       Page 37
                            FINANCE MANAGER II - Payroll


      in  section 6a.   This procedure  is just  like printing  computerized
      checks, except that no check will be printed. 

      Finance Manager will then display all the transactions (one at a time)
      that are not paid so you can select which ones to pay. 

      When a transaction to  be paid is found you will  be prompted for "PAY
      THIS EMPLOYEE".  Answer with  a "Y" to pay or "N" to  skip and not pay
      the transaction. 

      After all non-paid transactions are shown you will then be returned to
      the Checks Menu for further processing. 


















































                                       Page 38
                            FINANCE MANAGER II - Payroll


                                   SECTION SEVEN 
                           OTHER FEATURES AND FUNCTIONS 


      The remainder of the features and  functions of the Payroll Module are
      contained on the Payroll Utilities Menu.  These features are also very
      powerful  and  important  functions  of this  module.   To  use  these
      features select "F6"  from the Payroll Main Menu.   The following menu
      will be shown: 

                     -------- PAYROLL UTILITIES MENU -------- 
                     |                                      | 
                     |   ESC  Return to Payroll Main Menu   | 
                     |   F1   Sort Transactions             | 
                     |   F2   Post Transactions to GL       | 
                     |   F3   End of Period Posting         | 
                     |   F4   Payroll Configuration Setting | 
                     |   F5   Payroll Tax Tables            | 
                     |   F6   Print End of Year W-2s        | 
                     |                                      | 
                     |                                      | 
                     |                                      | 
                     |                                      | 
                     |   ENTER YOUR SELECTION:              | 
                     |                                      | 
                     ---------------------------------------- 

      In this section we will discuss each  function as well as its uses and
      features.  Since  setting up  the Configuration settings  are required
      before you  will be able  to enter  any transactions, we  will discuss
      this selection first. 


      7a - CONFIGURATION SETTINGS 

      The configuration settings allow you  to configure this module to your
      specific company, and to its  specific General Ledger account numbers.
      This  configuration  is  very  important  to  your  transactions,  for
      pre-printed continuous form  checks and to the  General Ledger account
      numbers used.   We recommend using  Nebs checks form #9001  and either
      standard business  window envelopes  or Nebs  form #775  DU-O-VUE Dual
      window  envelopes.  For  the W-2s  we recommend  using Nebs  W-2s form
      #9852.  Nebs toll free order number is 1-800-225-9550. 



















                                       Page 39
                            FINANCE MANAGER II - Payroll


      By selecting "F4"  from the utilities menu you will  see the following
      screen: 

      ID#'S FED:____________ STATE:____________ Detail posting to G/L(Y/N):_ 
      COMPANY  :_______________________________  Work days/year :___ 
      ADDRESS 1:_______________________________  HOURS PER:  Day:_____ 
      ADDRESS 2:_______________________________             Week:_____ 
      CITY     :__________________ STATE:__           Semi-Month:______ 
      ZIPCODE  :_________                                  Month:______ 

      FICA :_____% LIMIT:__________ G/L ACCOUNTS:Liability:____ Expense:____ 
      FUTA :_____%      :__________              Liability:____ Expense:____ 
      SUTA :_____%      :__________              Liability:____ Expense:____ 
      SDI  :_____%      :__________ Emply Pays:_ Liability:____ Expense:____ 
      OTHER:_____%      :__________              Liability:____ Expense:____ 
      G/L ACCOUNT for EXTRA Deductions:_____
      G/L LIABILITY ACCOUNTS:Federal withholding:_____State withholding:_____ 
                                City withholding:_____    

      G/L EXPENSE ACCOUNTS:       Salary & Wages:_____ 
                                                                       Row Col 
      CHECK WRITING:Print Check#(Y/N):_Print Address(Y/N):_Name Location:__ __ 


      The configuration  settings must be set  up for each set  of books you
      have.   Be sure  to  carefully employ  the  following procedures  when
      setting up the configuration settings. 

      Prior to setting up this configuration,  you must set up (add) several
      Payroll accounts to  your G/L Chart of Accounts.   These accounts must
      be active accounts in  your G/L Chart of Accounts in  order to be able
      to use  the Payroll Module  correctly (i.e.  do not use  these account
      numbers for  any General  Ledger transactions  - only  for use  by the
      Payroll module). 

      These accounts  are used  as interface  accounts and  posting accounts
      between the  Payroll module and  your General Ledger module.   You can
      not use  the Payroll module  without these important accounts  even if
      you want to  use the Payroll module  as a stand alone  module.  Set up
      one of each,  of the following accounts in your  G/L Chart of Accounts
      for Payroll: 

           a.  FICA Liability (type L) account 
           b.  FICA Expense (type E) account 
           c.  FUTA Liability (type L) account 
           d.  FUTA Expense (type E) account 
           e.  SUTA Liability (type L) account 
           f.  SUTA Expense (type E) account 
           g.  SDI Liability (type L) account 
           h.  SDI Expense (type E) account 
           i.  Other payroll tax Liability (type L) account 
           j.  Other payroll tax Expense (type E) account 
           k.  Federal Withholding (type L) account 
           l.  State Withholding (type L) account 
           m.  City Withholding (type L) account 
           n.  Salary & Wages (type E) account 
           o.  Checking account (type A) if not already set up 
           p.  Extra Deductions (type L) account 




                                       Page 40
                            FINANCE MANAGER II - Payroll


      When setting up the Payroll check printing feature for your continuous
      checks  and   other  forms,   you  must   specify  in   the  following
      configuration what  and where  you want to  have the  following fields
      printed: 

      ID#'S FED           Enter your employer  federal identification number
                          as it will be listed on your W-2 forms.           

      STATE               Enter your employer state identification number as
                          it will be listed on your W-2 forms. 

      COMPANY             Enter your  company name as  it will be  listed on
                          your W-2 forms. 

      ADDRESS 1           Enter the  address of your  company as it  will be
                          listed on your W-2 forms. 

      ADDRESS 2           You may enter a second address for your company as
                          it will be listed on your W-2 forms.   

      CITY                Enter your company's city. 

      STATE               Enter your company's two  letter state or province
                          code. 

      ZIPCODE             Enter your company's zipcode or postal code. 

      DETAIL POSTING      Allows the option of  posting transactions to your 
      TO G/L (Y/N)        General  Ledger  in   detail  or  summary  format.
                          Selecting  detail posting  will post  each Payroll
                          transaction   as  a   individual  General   Ledger
                          transaction and  you can  post at any  time; while
                          answering "N" will  cause the Payroll transactions
                          to be  grouped and  summarized when posted  to the
                          General Ledger.  Which ever  method you choose the
                          financial results will be  the same.  There is one
                          other  difference,  however,  if  you  select  the
                          detail  posting,  the actual  Payroll  transaction
                          date  will be  used  when posting  to the  General
                          Ledger, while summary posting  will prompt you for
                          a POSTING  DATE   and  will  post   every  entered
                          transaction to  the posting date (even  those with
                          different month dates).  If you are a beginner and
                          do not have many transactions, we suggest that you
                          select "Y" at this prompt. 

      WORK DAYS/          Enter the actual number of days your employees 
      YEAR                will  work  each   year  including  all  holidays,
                          usually 260 (52x5) days. 

      HOURS PER           Enter the number of hours your employees will work 
      DAY, WEEK,          for the pay periods listed.  When calculating for 
      SEMI-MONTH,         Semi-Month and Month, calculate the hours per 
      MONTH               year.  Example:  If your  employees work  40 hours
                          per week and are paid semi-monthly, multiply 40 by
                          52  weeks  in the  year,  divided  by the  24  pay
                          periods  per year  to  equal 86.67  hours per  pay
                          period. 

      FICA, FUTA, SUTA,   For these fields, enter the percentage of tax, the 


                                       Page 41
                            FINANCE MANAGER II - Payroll


      SDI, OTHER          yearly maximum  taxable income limit, and  the G/L
                          employer  liability accounts  as well  as employer
                          expense accounts for these taxes. 

                          FICA is paid by both  the employee and employer at
                          the percent input. 

                          FUTA is paid by the employer. 

                          SUTA is paid by the employer. 

                          SDI  is  paid  by   either  the  employer  or  the
                          employee.  Answer the "EMPLY PAYS" prompt with "Y"
                          to have the employee pay this amount, or enter "N"
                          to have the employer pay.   In most states this is
                          paid by the employer ("N"). 


      G/L ACCOUNTS        Enter here  the account  numbers you  have created
                          for:  FICA,  FUTA,  SUTA,  SDI,  Other  and  Extra
                          Deductions in  the G/L Chart of  Accounts in their
                          respective fields.  An account number listing will
                          appear on the screen when  you are at this prompt.
                          These accounts are used to keep track of the total
                          amounts deducted for liabilities and expenses.  If
                          you do not deduct  from the employee's paycheck or
                          you do not pay a particular amount you may enter a
                          "0" for this account number. 


      G/L LIABILITY       Enter here the account numbers you have created 
      ACCOUNTS            for:  Federal withholding,  State withholding  and
                          City withholding in the G/L chart of Accounts.  If
                          you are not  required to pay any one  of the above
                          withholding taxes, and have  not set up an account
                          in the General  Ledger you may enter  "0" for this
                          account number. 

      G/L EXPENSE         Enter here the account number you have created for 
      ACCOUNTS            the Salary  & Wages  account in  the G/L  chart of
                          accounts.  REQUIRED. 


      CHECK WRITING       At the "Print Check#(Y/N):_"  prompt answer "Y" if
                          you want the check number to be printed and "N" if
                          you have the check  number already printed on your
                          checks." 

                          At the  "Print Address(Y/N):_" prompt,  answer "Y"
                          if you want your  employee's address to be printed
                          on  his check,  or  "N"  if you  do  not want  his
                          address to be printed on his check. 

                          At  the "Name  Location:__  __"  prompt.  Enter  a
                          number between 32  and 36 in the  row field (which
                          indicates the number of lines  from the top of the
                          check starting  with the  first line on  the stub)
                          and a number between 2  and 29 in the column field
                          (which indicates  the number  of columns  from the
                          edge of the check, after the perforations).  These


                                       Page 42
                            FINANCE MANAGER II - Payroll


                          numbers will place the name and address so that it
                          will show correctly when  using a window envelope.
                          (Standard business window envelope uses Row 34 and
                          COL 11). 

      FINANCE MANAGER  will then ask  you "Are inputs correct  (Y/N):Y".  If
      you take the default of "Y"  then you be notified that FINANCE MANAGER
      is saving your  configuration and then you will return  to the Payroll
      Utilities menu.   If you answer "N"  the cursor will return  to "ID#'S
      FED" field and you can start again. 


      7b - SORTING TRANSACTIONS 

      The Payroll module normally keeps  transactions organized in the order
      in which they are input.  The Sort function allows the user to sort or
      organize  the  transactions  by:  date  of  input,  transaction  date,
      employee order or check number order. 

      The sort  procedure is not  a required feature  but it is  useful, for
      example,  when  printing  transaction  journals  or  employee  balance
      reports and you would like to insure that all transactions are in date
      order.  To  accomplish this, all you  have to do is  select date order
      sort.  It  would be a  good practice to  sort the transactions  once a
      month before  printing your reports.   The sort order does  not affect
      any  report balances  and it  is purely  for cosmetic  purposes.  When
      sorting  transactions this  will also  free  up disk  space which  was
      formally occupied by deleted transactions. 

      To start  sorting transactions, select  "F1" at the  Payroll Utilities
      Menu.  The following screen appears: 


                     ----------- SELECT SORT ORDER ---------- 
                     |                                      | 
                     |   ESC  Return to Utilities Menu      | 
                     |   F1   Transaction Input Order       | 
                     |   F2   Date Order                    | 
                     |   F3   Employee Order                | 
                     |   F4   Check Number Order            | 
                     |                                      | 
                     |                                      | 
                     |                                      | 
                     |                                      | 
                     |                                      | 
                     |                                      | 
                     |   ENTER YOUR SELECTION:              | 
                     |                                      | 
                     ---------------------------------------- 


      1.  Select the order in which you  would like to sort the transactions
          by. 

      2.  FINANCE MANAGER automatically sorts all transactions. 

      3.  Press any key to exit and return to the Payroll Main Menu when the
          sort is completed. 

      If you  have more transactions than  memory can hold at  one time, the


                                       Page 43
                            FINANCE MANAGER II - Payroll


      default disk  drive is used  to store  a temporary file  while sorting
      transactions.   It  is  important  to remember,  therefore,  that  the
      default drive must have adequate remaining disk space, and it must NOT
      be "write protected" . 

      The system  will tell if  there is not  enough memory on  your default
      drive  to sort  your file,  the sort  will abort  and you  must put  a
      formatted, blank disk in your  default drive (usually drive A:) before
      selecting your sort order again. 


      7c - POSTING TO THE GENERAL LEDGER 

      Payroll Utilities  Menu selection "F2" will  post transactions entered
      into  this  module to  your  General  Ledger accounts.   Depending  on
      whether  you  selected  the  detail  or summary  post  option  in  the
      configuration (described  above) your Payroll transactions  are posted
      according to the option you selected. 

      You'll  be pleased  to know  that this  posting procedure  is a  smart
      procedure.  It will only post  the transactions which have not already
      been posted.  Because of this  incredible time saving feature, you may
      accidentally  post as  many times  as you  wish without  worry of  any
      errors or double posting. 

      Note: This posting procedure will  only post the transactions (checks)
            which have already been paid. 

      This  posting process  is mandatory  in  order to  interface with  the
      General Ledger.   Without running  this procedure, no  transactions or
      activity  from  this   module  will  shown  on   your  General  Ledger
      reports. 

      NOTE: After this posting procedure is complete, the transactions which
            were posted can no longer be changed. 

      Because of this unique safety feature, we recommend that you only post
      after  you are  absolutely  sure all  transactions  have been  entered
      correctly and that any adjustments  have been made.  Generally, a good
      rule for you  to follow is to  post transactions once a  month, on the
      last day of that month. 

      After you  have run this procedure,  you can print any  General Ledger
      reports, and all  paid payroll from this module  will be automatically
      included in your General Ledger reports. 

      In order to  run this procedure, select "F2" on  the Payroll Utilities
      menu.   If you  selected the  detail posting  option the  posting will
      commence.   If you  did not  select detail  posting you  will then  be
      prompted for a posting date.  This prompt is as follows: 

                       Enter Post Transaction Date:__-__-__ 

      When using the summary post option this date will show for all of your
      Payroll transactions  in the  General Ledger as  the date  of posting.
      Usually this date  should be the current date (i.e.  the last date for
      the  current  month).  If  detail  posting  was selected  the  Payroll
      transactions in your  General Ledger will have the same  dates as they
      do in the Payroll Journal. 



                                       Page 44
                            FINANCE MANAGER II - Payroll



      7d - PAYROLL TAX TABLES 

      WARNING: It  is very  important that  you  enter your  Tax Table  data
               correctly.   Hooper International  assumes  no liability  for
               errors.   We  consider  it  mandatory to  test  your  payroll
               deductions  by manually  calculating your  payroll to  verify
               that all deductions are correct. 

      The payroll tax tables contain all  of the Federal, State and City tax
      information  as well  as  any other  information  about Earned  Income
      Credit for your particular state.  FINANCE MANAGER needs these numbers
      to calculate your employee's taxes  and withholdings.  Many states and
      cities have different percentages and  these percentages are liable to
      change every  year.  With  FINANCE MANAGER you  can modify  the tables
      yourself to keep them current with changing tax laws. 

      By selecting  "F5" from the  Payroll Utilities  menu you will  see the
      following screen: 


      TAX TABLE(F,S,C,E):_     DEDUCT FED TAX(Y/N):_ Max Amount:__________ 
      MARITAL TABLE(M/S/H):_ ANNUAL DEDUCTION:Amt:________ Pct:______%Greater:_
      ANNUAL WAGES OVER:__________TAX AMOUNT:__________PLUS PERCENTAGE:_______%
                       :__________          :__________               :_______%
                       :__________          :__________               :_______%
                       :__________          :__________               :_______%
                       :__________          :__________               :_______%
                       :__________          :__________               :_______%
                       :__________          :__________               :_______%
                       :__________          :__________               :_______%
                       :__________          :__________               :_______%
                       :__________          :__________               :_______%
                       :__________          :__________               :_______%
                       :__________          :__________               :_______%
                       :__________          :__________               :_______%
                       :__________          :__________               :_______%
                       :__________          :__________               :_______%
                       :__________          :__________               :_______%

      To set up the Payroll Tax Tables enter the following: 

      1.  Enter the type  of Tax Table you will be  entering on this screen.
          "F" Federal, "S" State, "C" City and "E" Earned Income Credit. 

                               TAX TABLE (F,S,C,E):F 


      2.  For state  and city  tax only.  Use  if you are  in a  state which
          allows you  to deduct the amount  of Federal tax you  have already
          paid.  (optional). 

                              DEDUCT FED TAX (Y/N):Y 









                                       Page 45
                            FINANCE MANAGER II - Payroll


      3.  For state and  city tax only.  Use with item  two above to specify
          the maximum federal tax deduction allowed in your state.  If there
          is no maximum enter 999999.99 (optional). 

                               Max Amount:999999.99_ 


      4.  Specify the type of tax table  you will be entering.  "M" married,
          "S" single, "H" head of household. 

                              MARITAL TABLE (M/S/H):M 


      5.  Enter the ANNUAL  amount for a SINGLE person  with ONE WITHHOLDING
          ALLOWANCE.  Refer to the  Federal Employer's Tax Guide Publication
          15, page 20 (Income tax withholding percentage method). 

                          ANNUAL DEDUCTION Amt:1950______ 


      6.  For  state or  city tax  only.   Enter the  percentage your  state
          income  tax  guide allows  an  alternative  to entering  a  dollar
          amount.   You can  also use  this field  if your  state gives  the
          option of  a dollar amount  or a  percentage amount as  the annual
          deduction amount. 

                                    Pct:17____% 


      7.  For state  or city tax only.   Use if you  are in a state  or city
          which requires you to take either  a dollar amount or a percentage
          amount and gives a qualifier.   For example, your state income tax
          guide tells you  to take either $5,000 or 17%  of the gross income
          which ever is greater.  Enter "Y".  Or your state income tax guide
          may tell  you to  take either  $5,000 or 17%  of the  gross income
          which ever is less.  You enter "N". 

                                     Greater:Y 


      8.  Enter the  beginning wage amount  your state specifies  from which
          you will begin deducting taxes.  Refer  to page 23 in your Federal
          Tax Guide, table 7. 

                           ANNUAL WAGES OVER:3050______ 


      9.  Enter  the dollar  amount you  will  withhold in  addition to  the
          percentage listed in section 9.   

                               TAX AMOUNT:0.00______ 











                                       Page 46
                            FINANCE MANAGER II - Payroll


      10. Enter the  percentage of the  employee's wages you  will withhold.
          Refer to  the same page  in the Federal Tax  Guide as you  did for
          number 7. 

                             PLUS PERCENTAGE:15_____% 


      When you finish entering all of the amounts in their respective fields
      press the PgDn key and FINANCE MANAGER will prompt "Are Inputs Correct
      (Y/N):_".  If you answer "Y" FINANCE MANAGER will save your inputs and
      the cursor will return to the Tax Table field.  Continue to enter your
      other tax  tables.  If you  enter "N" at  the prompt, the  cursor will
      return  to the  Tax Table  field and  will allow  you to  reenter your
      inputs.  It is very important that you enter the correct data into the
      correct fields  otherwise all of  your tax calculations will  be wrong
      for the entire year. 

      Continue entering  the Tax Table  information for your City  and State
      and the information for Earned Income Credit.  Please refer to the Tax
      Guides for your respective City and State.  Repeat steps 1-10 for each
      of the Tax tables you will need for your particular City and State. 

      After you have  entered all your Tax Table information  for each table
      that is  necessary for  your City  and State  and the  Advanced Income
      Credit information, make sure you  have saved your inputs by answering
      "Are Inputs Correct" before you  return to the Payroll Utlilities main
      menu. 


      7e - PRINTING END OF YEAR W-2s 

      This feature  of FINANCE  MANAGER will  print W-2  forms automatically
      without you having to figure out any of the amounts. 

      Load  your  printer  with   your  pre-printed  continuous  W-2  forms.
      Continuous W-2s can be ordered from Nebs.  Nebs toll free order number
      is 1-800-225-9550.  If  you do not have continuous W-2  forms the same
      information can be obtained from your Payroll Register Report. 

      Select "F6" from  the Payroll Utilities Menu and  FINANCE MANAGER will
      ask you to enter a city short name (to be placed in box 22 on the W-2)
      and ask if you want a  test printer lineup printed.  These prompts are
      as follows: 

                          Enter City short name:________ 
                          Print Alignment Pattern (Y/N):_ 

      First enter a eight character city  short name.  Next enter the "Print
      Alignment Pattern" prompt with a "Y"  until you have the W-2s properly
      lined up.   When you answer  this prompt with  an "N", your  W-2s will
      then be printed.   Until you answer the alignment pattern  with a "N",
      you  may abort  the W-2  printing process  and return  to the  menu by
      pressing the ESC key. 

      NOTE: Notice the warning at the bottom  of the screen that warns about
            Extra-Deductions  and  Non-taxable   Other  Earnings  being  not
            included on  the W-2 statement.   These amounts must  be entered
            manually in Box 16 or 16a as appropriate. 




                                       Page 47
                            FINANCE MANAGER II - Payroll



      After the W-2 forms have been  printed, FINANCE MANAGER will return to
      the Payroll Utilities menu. 



























































                                       Page 48
                            FINANCE MANAGER II - Payroll


                       SECTION EIGHT - ENHANCEMENTS & HINTS 

      8a - ENHANCEMENTS BY VERSION 

      Version 1.2 - First release of the Payroll Module. 

      Version 1.3 - All system  enhancements included in version  1.3 of the
                    General Ledger module. 
                  - Pop-up employee/chart  of account window  while entering
                    transaction search parameters. 
                  - Added city name shortname override for W-2s. 
                  - Ability to delete paid or posted payroll transactions. 
                  - Ability to select number  of city deductions independent
                    of the state deductions. 
                  - Added  two  other  earnings  and  one  additional  other
                    deduction  categories with  the  ability  to select  G/L
                    account number. 
                  - Taxable Y/N option for above other earnings/deductions. 
                  - Payroll recap report format enhanced. 
                  - Added select employees option to Payroll Recap Report. 
                  - Added  new Tax  Summary Report  which greatly  eases 941
                    reporting requirements. 
                  - SDI payable by employee or employer option. 


      8b - HELPFUL HINTS AND SUGGESTIONS 

        * Keep a CURRENT backup copy of  all your data files.  Each time you
          have finished entering new data make a copy of your data files and
          have at  least four set's  which you rotate.  This  will safeguard
          against loss of data due to a power failure or other problems. 

        * Use the  Shift PrtSc keys  to make a  hard copy of  current screen
          display. 

        * You  may run  this module  WITHOUT  the interface  to the  General
          Ledger module simply  by not posting to the General  Ledger (F2 on
          the  Utilities Menu).   The  system will,  however,  post to  your
          General Ledger  when you do  an End of  Period Posting (F3  on the
          Utilities Menu).   To totally avoid  any interface, simply  set up
          this module with a separate data file, using a different name than
          your General  Ledger data file  name.  You will, however,  have to
          set up a few dummy G/L accounts (the required G/L accounts need to
          run this module). 

        * When  printing checks,  be sure  that  your printer  can print  85
          column across.  Deviation  from this will result  in the inability
          to line up your pre-printed checks. 

        * The following explains how FINANCE MANAGER figures taxes: 

          1. FINANCE MANAGER figures the  yearly gross income by multiplying
             amount paid per pay period by either: 

                       12 for those employees paid monthly 
                       24 for those employees paid semi-monthly 
                       26 for those employees paid biweekly 
                       52 for those employees paid weekly 

          2. Subtracts deductions. 


                                       Page 49
                            FINANCE MANAGER II - Payroll



             Deductions =  Annual tax  deduction amount  (on the  tax table)
             times the number in the  State deduction field (in the employee
             account data base) 

             If the employee has more than  one deduction and the annual tax
             deduction amount (on the tax table) multiplied by the number in
             the state deduction  field (in the employee  account data base)
             is not correct  according to the state tax guide,  then you can
             add any additional amounts in the state exemption field (in the
             employee  account  data base).   For  example,  the annual  tax
             deduction  amount for  a  single deduction  is  $2,500 and  the
             annual tax deduction  amount for two deductions  is $3,000.  If
             the employee  has two deductions  you will enter $2,500  in the
             annual tax deduction amount field (on  the tax table) and a "1"
             in  the state  deduction field  (in the  employee account  data
             base).  1 times  $2,500 = $2,500.  Enter the  remaining $500 in
             the state annual exemption field  (in the employee account data
             base). 

          3. Subtracts  amount  in  State  annual exemption  field  (in  the
             employee account data base) 

          4. Subtracts Federal Income  Tax already paid if  you answered "Y"
             on the tax table and your state allows it to be deducted. 

          5. All of the above equals the annualized Taxable Income. 

          6. From  the Taxable  Income  FINANCE MANAGER  will calculate  the
             taxes that the employee will pay. 

          7. Finally, if your  state gives you a tax credit  enter the total
             dollar  amount in  the State  Annual  Tax Credit  field in  the
             employee account data base. 

          8. The annualized Payroll deduction is  then divided by the number
             of pay periods  in one year to give you  the deduction for this
             pay period. 

        * If you have multiple state payroll you have two options: 

           A. Set up  a set  of books for  each state and  then use  the G/L
              merge transactions  function to  combine the  G/L transactions
              into one set of books. 

           B. Using the  DOS copy command,  create different tax  tables for
              each state and save each one as a seperate filename.  Copy the
              one you need to the filename  of your set of books (e.g.  COPY
              COLORADO.TAX WORK.TAX to use Colorado tax tables). 













                                       Page 50
                            FINANCE MANAGER II - Payroll


                                   SECTION NINE 
                              PAYROLL DISK FILE NAMES 

      Listed below is a description of files on your payroll disk. 

      File name        Description 
      -------------    --------------------------------------------- 
      FMPR     000  -  Payroll overlay file 0. 
      FMPR     001  -  Payroll overlay file 1. 
      FMPR     002  -  Payroll overlay file 2. 
      FMPR     003  -  Payroll overlay file 3. 
      FMPR     004  -  Payroll overlay file 4. 
      FMPR     CHN  -  Payroll module. 
      CONV-PR  COM  -  Conversion program for version 1.2 datafiles. 
      README   BAT  -  Displays this file on screen. 
      ORDER    DOC  -  Blank order form which can be printed. 
      FMPR-DOC ARC  -  Payroll documentation manual (Archived). 
      PRINT-PR BAT  -  Prints manual for printer. 
      PKUNPAK  EXE  -  De-Archive program for manual. 
      WORK     CHR  -  Work Demo - GL Chart of accounts data file. 
      WORK     CNF  -  Work Demo - System Configuration data file. 
      WORK     EMP  -  Work Demo - PR Employees data file. 
      WORK     GLT  -  Work Demo - GL Transaction data file. 
      WORK     PRF  -  Work Demo - Payroll Configuration file. 
      WORK     PRK  -  Work Demo - PR Check Configuration data file. 
      WORK     PRT  -  Work Demo - PR Transactions data file. 
      WORK     TAX  -  Work Demo - PR Federal & Colorado tax file. 



































                                       Page 51
                            FINANCE MANAGER II - Payroll


                           APPENDIX A - SAMPLE REPORTS 

                                   Table of Contents 

          Payroll Journal . . . . . . . . . . . . . . . . . . . . . . . . . 53 

          Payroll Register  . . . . . . . . . . . . . . . . . . . . . . . . 54 

          Check Register  . . . . . . . . . . . . . . . . . . . . . . . . . 55 

          Vacation & Sick Report  . . . . . . . . . . . . . . . . . . . . . 56 

          Employee Listing  . . . . . . . . . . . . . . . . . . . . . . . . 57 

          Employee Address Labels . . . . . . . . . . . . . . . . . . . . . 58 

          Paid Payroll Recap  . . . . . . . . . . . . . . . . . . . . . . . 59 

          Quarterly Tax Summary . . . . . . . . . . . . . . . . . . . . . . 60

          Non-Posted Transaction Journal  . . . . . . . . . . . . . . . . . 61 

          General Ledger Distribution . . . . . . . . . . . . . . . . . . . 62 







































                                       Page 52
                          FINANCE MANAGER II - Payroll


JUL-5-89                       WORK DEMO ACCOUNTS                      PAGE 1
9:43am                    Colorado Springs, CO  80920
                                PAYROLL JOURNAL
                             MAY-89 Through JUL-89

                                           -- G/L  DEBIT --   -- G/L CREDIT --
  DATE   EMPL   EMPLOYEE NAME    TYPE CD   ACT#    AMOUNT     ACT#    AMOUNT
-------- ---- ------------------ --------  ----  ----------   ----  ----------
05-27-89    1 First Employee     EARNINGS  5010    1,500.00   1010    1,231.72
                                 FED WITH                     2050      113.75
                                 STATE WH                     2051       41.88
                                 FICA      5011      112.65   2053      225.30
                                 FUTA      5012        9.00   2054        9.00
                                 SUTA      5014       46.50   2055       46.50
                                 SDI       5015        6.15   2056        6.15

06-30-89    1 First Employee     EARNINGS  5010    1,500.00   1010    1,231.72
                                 FED WITH                     2050      113.75
                                 STATE WH                     2051       41.88
                                 FICA      5011      112.65   2053      225.30
                                 FUTA      5012        9.00   2054        9.00
                                 SUTA      5014       46.50   2055       46.50
                                 SDI       5015        6.15   2056        6.15

06-30-89 COLO Colorado Employee  EARNINGS  5010    1,500.00   1010    1,231.72
                                 FED WITH                     2050      113.75
                                 STATE WH                     2051       41.88
                                 FICA      5011      112.65   2053      225.30
                                 FUTA      5012        9.00   2054        9.00
                                 SUTA      5014       46.50   2055       46.50
                                 SDI       5015        6.15   2056        6.15

07-14-89 COLO Colorado Employee  EARNINGS  5010    1,500.00      0    1,231.72
                                 FED WITH                     2050      113.75
                                 STATE WH                     2051       41.88
                                 FICA      5011      112.65   2053      225.30
                                 FUTA      5012        9.00   2054        9.00
                                 SUTA      5014       46.50   2055       46.50
                                 SDI       5015        6.15   2056        6.15
                                                 ----------         ----------
                                                   6,697.20           6,697.20





















                                     Page 53
                          FINANCE MANAGER II - Payroll


JUL-5-89                       WORK DEMO ACCOUNTS                      PAGE 1
9:43am                    Colorado Springs, CO  80920
                                PAYROLL REGISTER
                             MAY-89 Through JUL-89

  DATE   EMPL         EMPLOYEE NAME          EARNINGS: Hours    Amount
-------- ---- ------------------------------ -------- ------- ----------
05-27-89    1 First Employee                  Regular:  0.000   1,500.00
                                             Overtime:  0.000       0.00
                                                 Sick:  0.000       0.00
                                             Vacation:  0.000       0.00
                                              Holiday:  0.000       0.00
                                                Other:              0.00
                                                  EIC:              0.00
                                                Extra:              0.00
                                                      ------- ----------
                                                TOTAL:  0.000   1,500.00

06-30-89    1 First Employee                  Regular:  0.000   1,500.00
                                             Overtime:  0.000       0.00
                                                 Sick:  0.000       0.00
                                             Vacation:  0.000       0.00
                                              Holiday:  0.000       0.00
                                                Other:              0.00
                                                  EIC:              0.00
                                                Extra:              0.00
                                                      ------- ----------
                                                TOTAL:  0.000   1,500.00

06-30-89 COLO Colorado Employee               Regular:  0.000   1,387.50
                                             Overtime:  0.000       0.00
                                                 Sick:  5.000      43.27
                                             Vacation:  8.000      69.23
                                              Holiday:  0.000       0.00
                                                Other:              0.00
                                                  EIC:              0.00
                                                Extra:              0.00
                                                      ------- ----------
                                                TOTAL:  0.000   1,500.00

07-14-89 COLO Colorado Employee               Regular:  0.000   1,500.00
                                             Overtime:  0.000       0.00
                                                 Sick:  0.000       0.00
                                             Vacation:  0.000       0.00
                                              Holiday:  0.000       0.00
                                                Other:              0.00
                                                  EIC:              0.00
                                                Extra:              0.00
                                                      ------- ----------
                                                TOTAL:  0.000   1,500.00

                                                              ----------
GRAND TOTALS                                           GROSS:   6,000.00









                                     Page 54
                          FINANCE MANAGER II - Payroll


JUL-5-89                       WORK DEMO ACCOUNTS                      PAGE 1
9:44am                    Colorado Springs, CO  80920
                                 CHECK REGISTER
                             MAY-89 Through JUL-89

CHK #   DATE   EMPL          EMPLOYEE            GROSS PAY   DEDUCT    NET PAY
----- -------- ---- --------------------------  ---------  --------  ---------
1005  05-31-89    1 First Employee               1,500.00    268.28   1,231.72
1006  06-30-89    1 First Employee               1,500.00    268.28   1,231.72
1007  06-30-89 COLO Colorado Employee            1,500.00    268.28   1,231.72
                                                --------- --------- ----------
                    TOTAL CHECKS:    3           4,500.00    804.84   3,695.16


















































                                     Page 55
                          FINANCE MANAGER II - Payroll


JUL-5-89                       WORK DEMO ACCOUNTS                      PAGE 1
9:44am                    Colorado Springs, CO  80920
                   EMPLOYEE VACATION & SICK IN ACCOUNT ORDER
                                  As of JUL-89

                                     ---- VACATION ----   ------ SICK ------
EMPL           EMPLOYEE              USED YTD   CUR BAL   USED YTD   CUR BAL
---- ------------------------------  --------  --------   --------  --------
   1 First Employee                     0.000     0.000      0.000     0.000
COLO Colorado Employee                  8.000    -8.000      5.000    -5.000
                                     --------  --------   --------  --------
                                        8.000    -8.000      5.000    -8.000


















































                                     Page 56
                          FINANCE MANAGER II - Payroll


JUL-5-89                       WORK DEMO ACCOUNTS                      PAGE 1
9:44am                    Colorado Springs, CO  80920
                       EMPLOYEE LISTING IN ACCOUNT ORDER

   1:First Employee **********************************************************
Status :ACTIVE      SS Num:111-22-3333   PAY FICA:Y FUTA:Y SUI:Y SDI:Y Other:N
Address:123 Your Street                  State Annual     Exemption:      0.00
       :P.O. Box 1234                                    Tax Credit:      0.00
City   :Colorado Springs      State:CO   Extra Taxes:    Federal   :      0.00
Zipcode:80900       Phone:719-123-4567                   State     :      0.00
Sex      :F   Marital:S                                  City      :      0.00
Hired    :01-01-89   Hourly/Salary:H     Extra Amounts:  Earnings  :     10.00
Frequency:Bi-Weekly  Payrate:    10.00                   Deductions:     10.00
Overtime :    15.00  Holiday:    20.00   Accrual rates:  Vacation  :  0.000
Deductions   Fed: 1  State: 1   EIC:0                    Sick      :  0.000
----------------------------- Beginning Balances -----------------------------
Earnings Taxable    :      0.00    FICA  :      0.00   Extra Deduct:      0.00
         Non-taxable:      0.00    FUTA  :      0.00
Withholdings Federal:      0.00    SUTA  :      0.00
             State  :      0.00    SDI   :      0.00    Beg Vac hours :  0.000
             City   :      0.00    Oth Tx:      0.00    Beg Sick hours:  0.000


COLO:Colorado Employee *******************************************************
Status :ACTIVE      SS Num:123-45-6789   PAY FICA:Y FUTA:Y SUI:Y SDI:Y Other:N
Address:100 Main Street                  State Annual     Exemption:      0.00
       :                                                 Tax Credit:      0.00
City   :Colorado Springs      State:CO   Extra Taxes:    Federal   :      0.00
Zipcode:80900       Phone:719-123-1234                   State     :      0.00
Sex      :M   Marital:M                                  City      :      0.00
Hired    :06-17-89   Hourly/Salary:S     Extra Amounts:  Earnings  :      0.00
Frequency:Monthly    Payrate: 1,500.00                   Deductions:      0.00
Overtime : N/A       Holiday: N/A        Accrual rates:  Vacation  :  0.000
Deductions   Fed: 3  State: 3   EIC:0                    Sick      :  0.000
----------------------------- Beginning Balances -----------------------------
Earnings Taxable    :      0.00    FICA  :      0.00   Extra Deduct:      0.00
         Non-taxable:      0.00    FUTA  :      0.00
Withholdings Federal:      0.00    SUTA  :      0.00
             State  :      0.00    SDI   :      0.00    Beg Vac hours :  0.000
             City   :      0.00    Oth Tx:      0.00    Beg Sick hours:  0.000






















                                     Page 57
                          FINANCE MANAGER II - Payroll


JUL-5-89                       WORK DEMO ACCOUNTS                      PAGE 1
9:45am                    Colorado Springs, CO  80920
                                EMPLOYEE LABELS


                                                        1
                          First Employee
                          123 Your Street
                          P.O. Box 1234
                          Colorado Springs CO 80900

                                                     COLO
                          Colorado Employee
                          100 Main Street
                          Colorado Springs CO 80900















































                                     Page 58
                          FINANCE MANAGER II - Payroll


Jul-5-89                       WORK DEMO ACCOUNTS                      PAGE 1
9:45am                     Colorado Springs, CO  80920
                              QUARTERLY TAX SUMMARY
                              JAN-89 Through MAR-89

 SS NUMBER            EMPLOYEE              TAXED WAGE  FICA WAGES  SUTA WAGES
----------- ------------------------------  ----------  ----------  ----------
111-22-3333 First Employee                    2,430.00    2,430.00    2,430.00
123-45-6789 Colorado Employee                 3,000.00    3,000.00    3,000.00
                                            ----------  ----------  ----------
                                              5,430.00    5,430.00    5,430.00


FUTA TAXES                                                               18.00
SDI                                                                      22.26



                       FEDERAL TAX LIABILITY (FWH & FICA)

      DATE WAGES PAID           JAN           FEB          MAR    QTR TOTAL
     -----------------   ----------   -----------   ----------    ---------
      1st through  3rd         0.00          0.00         0.00         0.00
      4th through  7th         0.00          0.00         0.00         0.00
      8th through 11th         0.00          0.00         0.00         0.00
     12th through 15th         0.00        226.90         0.00       226.90
     16th through 19th         0.00          0.00         0.00         0.00
     20th through 22nd         0.00          0.00         0.00         0.00
     23rd through 25th         0.00          0.00         0.00         0.00
     26th through 31st       565.95        565.95         0.00     1,131.90
                         ----------   -----------   ----------    ---------
                             565.95        792.85         0.00     1,358.80



                               STATE TAX LIABILITY

      DATE WAGES PAID           JAN           FEB          MAR    QTR TOTAL
     -----------------   ----------   -----------   ----------    ---------
      1st through  3rd         0.00          0.00         0.00         0.00
      4th through  7th         0.00          0.00         0.00         0.00
      8th through 11th         0.00          0.00         0.00         0.00
     12th through 15th         0.00         34.73         0.00        34.73
     16th through 19th         0.00          0.00         0.00         0.00
     20th through 22nd         0.00          0.00         0.00         0.00
     23rd through 25th         0.00          0.00         0.00         0.00
     26th through 31st        76.61         76.61         0.00       153.22
                         ----------   -----------   ----------    ---------
                              76.61        111.34         0.00       187.95













                                     Page 59
                          FINANCE MANAGER II - Payroll


JUL-5-89                       WORK DEMO ACCOUNTS                      PAGE 1
9:45am                    Colorado Springs, CO  80920
                          PAID PAYROLL RECAP (Taxable)
                           MAY-1-89 Through JUL-31-89

                        ------ EMPLOYEE EARNINGS -------
                           Description          Amount
                        -----------------   ------------
                        Regular                 4,387.50
                        Overtime                    0.00
                        Sick                       43.27
                        Vacation                   69.23
                        Holiday                     0.00
                        Other Taxable               0.00
                        EIC                         0.00
                        Extra                       0.00
                                            ------------
                        GROSS EARNINGS          4,500.00


                        ------ PAYROLL DEDUCTIONS ------
                           Description          Amount
                        -----------------   ------------
                        Federal Withhold          341.25
                        State Withholding         125.64
                        City Withholding            0.00
                        FICA                      337.95
                        Extra                       0.00
                                            ------------
                        TOTAL DEDUCTIONS          804.84

                                            ------------
                        NET EARNINGS            3,695.16
                                            ============



                        ----- EMPLOYER LIABILITIES -----
                           Description          Amount
                        -----------------   ------------
                        Federal Withhold          341.25
                        State Withholding         125.64
                        City Withholding            0.00
                        FICA                      675.90
                        Extra Deductions            0.00
                        FUTA                       27.00
                        SUTA                      139.50
                        SDI                        18.45
                        Other                       0.00
                                            ------------
                        TOTAL LIABILITY         1,327.74

                                            ------------
                        TOTAL PAYROLL COST      5,022.90








                                     Page 60
                          FINANCE MANAGER II - Payroll


JUL-5-89                       WORK DEMO ACCOUNTS                      PAGE 1
9:45am                    Colorado Springs, CO  80920
                        NON POSTED TRANSACTIONS JOURNAL
                             MAY-89 Through JUL-89

                                           -- G/L  DEBIT --   -- G/L CREDIT --
  DATE   EMPL   EMPLOYEE NAME     TYPE CD   ACT#    AMOUNT     ACT#    AMOUNT
-------- ---- ------------------ --------  ----  ----------   ----  ----------
04-30-89    1 First Employee     EARNINGS  5010    1,500.00   1010    1,231.72
                                 FED WITH                     2050      113.75
                                 STATE WH                     2051       41.88
                                 FICA      5011      112.65   2053      225.30
                                 FUTA      5012        6.00   2054        6.00
                                 SUTA      5014       46.50   2055       46.50
                                 SDI       5015        6.15   2056        6.15

06-30-89 COLO Colorado Employee  EARNINGS  5010    1,500.00   1010    1,231.72
                                 FED WITH                     2050      113.75
                                 STATE WH                     2051       41.88
                                 FICA      5011      112.65   2053      225.30
                                 FUTA      5012        9.00   2054        9.00
                                 SUTA      5014       46.50   2055       46.50
                                 SDI       5015        6.15   2056        6.15

07-14-89 COLO Colorado Employee  EARNINGS  5010    1,500.00      0    1,231.72
                                 FED WITH                     2050      113.75
                                 STATE WH                     2051       41.88
                                 FICA      5011      112.65   2053      225.30
                                 FUTA      5012        9.00   2054        9.00
                                 SUTA      5014       46.50   2055       46.50
                                 SDI       5015        6.15   2056        6.15
                                                 ----------         ----------
                                                   5,013.90           5,013.90





























                                     Page 61
                          FINANCE MANAGER II - Payroll


JUL-5-89                       WORK DEMO ACCOUNTS                      PAGE 1
9:45am                    Colorado Springs, CO  80920
                            PAYROLL G/L DISTRIBUTION
                                     JUN-89

         ACT#       ACCOUNT NAME              DEBITS       CREDITS
         ---- -------------------------    -----------   -----------
         1010 Checking Account #1                           2,463.44
         2050 FEDERAL WITHHOLDING TAX                         227.50
         2051 STATE WITHHOLDING TAX                            83.76
         2053 FICA PAYABLE                                    450.60
         2054 FUTA PAYABLE                                     18.00
         2055 SUTA PAYABLE                                     93.00
         2056 SDI PAYABLE                                      12.30
         5010 Salary & wages expense          3,000.00
         5011 FICA Expense                      225.30
         5012 FUTA Expense                       18.00
         5014 SUTA Expense                       93.00
         5015 SDI Expense                        12.30
                                           -----------   -----------
                                              3,348.60      3,348.60









































                                     Page 62
                          FINANCE MANAGER II - Payroll


                       FINANCE MANAGER II USER COMMENT FORM

                           _                       _
      Product being used: |_|General Ledger       |_|Account Reconciliation
                           _                       _
                          |_|Accounts Receivable  |_|Accounts Payable
                           _                       _
                          |_|Financial Utilities  |_|Payroll

      Version of Finance Manager being used:________________________________
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

      Please add any other comments about product on reverse side of form.

      RETURN THE COMPLETED FORM AND           HOOPER INTERNATIONAL
      ANY ADDITIONAL CORRESPONDENCE TO:       P.O. Box 62219
                                              Colorado Springs, CO  80962





                                     Page 63
                          FINANCE MANAGER II - Payroll

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
     | How did you hear about FINANCE MANAGER?____________________________ |
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

                                     Page 64
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

### Directory of PC-SIG Library Disk #1548

     Volume in drive A has no label
     Directory of A:\

    FMPR     DOC    171799   1-01-89
    FMPR-DOC ARC     59794   1-01-89
    ORDER    DOC      4844   1-01-89
    PKUNPAK  EXE     15112   8-02-88
    PRINT-PR BAT       445   1-01-89
    README   BAT      1904   1-01-89
    WORK     CHR      3735   1-01-89
    WORK     CNF       182   1-01-89
    WORK     EMP      1653   1-01-89
    WORK     GLT      4042   1-01-89
    WORK     PRF       710   1-01-89
    WORK     PRK        48   1-01-89
    WORK     PRT      3712   1-01-89
    WORK     TAX     15558   1-01-89
    GO       BAT        38  10-18-89  10:49a
    GO       TXT       540  10-18-89  11:20a
    FILE1548 TXT      2930  10-18-89  10:46a
           17 file(s)     287046 bytes
                           27648 bytes free
