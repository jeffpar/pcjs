---
layout: page
title: "PC-SIG Diskette Library (Disk #857)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0857/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0857"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "LEDGER EXPRESS, REQUIRES LOTUS 1-2-3"

    LEDGER EXPRESS is a menu-driven, macro-programmed demonstration disk of
    a general ledger accounting system for use with Lotus 1-2-3.  The
    application extracted transactions from the 1GJRL.WKS into Extract
    files and then posts the sorted and extracted information to the
    respective ledger accounts.  The application has a feature to print the
    ledger accounts during posting and also has an account balance
    extraction feature for posting to the balance sheet.
    
    Although LEDGER EXPRESS is a demonstration, the experienced macro
    programmer should be able to use this demo as a guide for producing
    their own application.
    
    The complete application is available for $49.95 for those desiring
    INSTALLATION worksheets, subsidiary ledger worksheets
    (payables/receivables), and a complete system for financial statements.
    
    System Requirements:  Lotus 1-2-3.
    
    How to Start:  Type GO (press enter).
    
    Suggested Registration:  $49.95
    
    File Descriptions:
    
    LEDGER-X ARC  Archived file.
    MANUAL   BAT  Prints manual.
    PKXARC   COM  Unarchiving program.
    INSTALL  BAT  Install files to hard drive.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES857.TXT

{% raw %}
```
Disk No  857
Program Title: LEDGER EXPRESS Demo version 1.01
PC-SIG version 1.1

    LEDGER EXPRESS is a menu-driven, macro-programmed demonstration disk of
a general ledger accounting system, which is available as a shareware
program. The application extracted transactions from the 1GJRL.WKS into
Extract files and then posts the sorted and extracted information to the
respective ledger accounts. The application has a feature to print the
ledger accounts during posting and also has an account balance extraction
feature for posting to the balance sheet.

    Although this is a demonstration, the experienced macro programmer
should be able to use this demo as a guide for producing their own
application. A complete application is available for $49.95 for those
desiring INSTALLATION worksheets, subsidiary ledger worksheets
(payables/receivables), and a complete system for financial statements.

Usage: Financial

System Requirements: 256K memory, a hard disk drive and you need LOTUS
1-2-3 also.

How to Start: Type GO (press enter).

Suggested Registration: $49.95

File Descriptions:

LEDGER_X ARC  Archived file
PKXARC   COM  Unarchiving utility
INSTALL  BAT  Installation batch file

PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987,88 PC-SIG, Inc.

```
{% endraw %}

## LEDGER.DOC

{% raw %}
```






              
              
              
              
              
              
              
                                        LEDGER eXpress
                                   PREFACE TO VERSION 1.01
              
             In  response to  an article in  the June/July  1988 issue of
             "Shareware"  magazine  concerning  demo  programs,  the demo
             previously  available  has  been  replaced  with  this fully
             functioning Version 1.01 of Ledger eXpress.
              
             Release  2.0 of Ledger eXpress is currently available and is
             a   greatly  enhanced   Version  of   this  worksheet  based
             Accounting  package. The installation  procedure for Release
             2.0  has been greatly modified  and eliminates the necessity
             for  the end user  to modify Macro  code. Although all V1.01
             Macro  code modifications  are performed   (you  guessed it)
             using  Macros that  position the  cursor where modifications
             are  necessary,  the chance  of improper  modifcations still
             exists.
              
             Release  2.0 has eliminated this danger and the installation
             procedure  for all worksheets is  screen panel prompt driven
             and the end user will only be responsible for proper input.
              
             Users  may obtain a copy of  Release 2.0 by registering with
             the  author for $69.95  + $5 s/h.  The original registration
             for Version 1.01 was $49.95 but you may register for support
             and notification of any future upgrades for $25.
              
             A Description of the enhancements is as follows:
              (1)  V1.01 requires installation of  your Chart of Accounts
             into the General Journal worksheet and modification when any
             new Account is added. V2.0 uses a seperate worksheet that is
             imported  into the General  Journal each time  you post your
             transactions.  Adding an Account is a simple addition to the
             V2.0  worksheet versus Macro code installation (or deletion)
             with V1.01 into the General Journal worksheet.
              (2)   V1.01  requires  Macro  code  installation  into  the
             Financial  Statements,  Subsidiary Ledger  Control Accounts,
             and  General Journal. V2.0 only  requires that you enter the
             Account Names and Numbers, the application has been enhanced
             to  use this  information to  create "self-modifiying" Macro
             code that executes at the appropriate time.
              (3) The installation time has been reduced by approximately
             60%  due to the enhancements  of V2.0. Also, the possibility
             for  improper  installation  has also  been  greatly reduced
             because of the redesign.
              (4)  The speed of the V2.0 application is greatly increased
             over  V1.01 due to the fact that installation of "import and
             extract   Macro  code"  due  to  the  enhancement  has  been
             eliminated and  creation of "self-modifying" Macro code only
             when  needed  greatly increases  execution speed  versus the
             line of "conditional operating" Macro code.
              
              






              
              
              
                                     LEDGER eXpress
                                   Copyright (c) 1987
              
                                    MACRO X SERVICES
                                    2442 Laura Drive
                                    Flint, Mi. 48507
                                     (313) 767-0127
              
                                     Warren Fesmire
                                   Application Author
              
              
              
              
              
             System  Requirements: A minimum  of 320k RAM  is required to
             use  this  application, a  10  Megabyte Fixed  (Hard) Drive,
             Lotus  1-2-3 (tm) or a WKS compatible spreadsheet (excluding
             Microsoft Works (tm)).
              
             The interaction of this application is as follows:
                  1) Journalize the transactions into the General Journal
                       worksheet   named   GJRL.wk*.   The   journalizing
                       procedure   is  menu   driven  with   the  command
                       selection  made from an Alternate Macro Menu. When
                       you  have filled the General Journal worksheet you
                       will be able to automatically sort and extract the
                       Journal   entries  by   Account  for  distributive
                       posting  to  the respective  Ledger  Accounts. You
                       will  install the sorting  and extracting commands
                       into  the  GJRL  worksheet  and    your individual
                       accounts.  A sample  Chart of  Accounts is offered
                       but   this package will  automatically fit to your 
                       Chart of Accounts !
                   
                  2)  Distribute the Journal  Transactions to the various
                       accounts.  You will need to  install your Chart of
                       Accounts.  The  application  will  create  Extract
                       files  that  will  be  ready  for  posting  to the
                       accounts.  After you have  installed your accounts
                       you will only need to Retrieve the lowest numbered
                       account   and  the   computer  will  automatically
                       process  the remaining extract files ,be there one
                       or    one   hundred   !   The   application   will
                       automatically  delete the extract files after each
                       account  has  had the  respective  journal entries
                       posted to it.
                   
                   
                   













             NOTE:  This application  will "Archive"  the GJRL worksheets
                  when  filled  by  making  an  Alternate  Menu selection
                  (NEWPAGE  from  the  GJRL  or  ARCHIVE  from  any other
                  worksheet).  The NEWPAGE  Macro Menu  command will save
                  the current GJRL and prepare a blank GJRL worksheet and
                  increment  the page number and File Name identifier (ie
                  1GJRL  is saved and 2GJRL  will be prepared for further
                  Journalizing of transactions).
                   
                  3) Prepare the periodic financial statements.  You will
                       install  the Account Balance "import" commands for
                       your   specific  Chart  of  Accounts.  (Most  user
                       installed  commands have been automated with Macro
                       commands   that  will  require  little  more  than
                       accurate   keypunching.)  You   will  extract  the
                       Account  Balances from  each account  by selecting
                       the Alternate Menu Selection AUTOFUNCTIONS.
                   
             NOTE:  IF your accounting system  is an accrual based system
                  then  you may wish to  create Subsidiary Ledger Control
                  Accounts  which will  require installation  of "import"
                  commands.  This is not absolutely  necessary but if you
                  choose not to create Subsidiary Ledger Control Accounts
                  you  will be required to  install the "import" commands
                  into  the BALSHEET (Financial Statement worksheet). You
                  will  not be  saving yourself  any effort  but you will
                  have  a  much  cleaner  and  faster  operating BALSHEET
                  worksheet.   Overall,   you  will   lessen   the  total
                  processing  time  of  this  application  by  installing
                  Subsidiary Ledger Control Accounts.
              
             The  Financial Statement (BALSHEET.wk*)  consists of a Trial
             Balance  worksheet, Balance Sheet, and Income Statement. The
             Financial  Statement will require you  to install your Chart
             of  Accounts. the  information required will  be the Account
             Names,  Account  Numbers,  and  "import"  commands  for  the
             extracted Account balances.
              
             This  application has been created and designed with ease of
             installation  foremost as  a product feature.  If you follow
             instructions  carefully  ,  you should  be  able  to quickly
             install this application to your specifications ! 
              
             **********************IMPORTANT NOTE************************
             If you are using Version 2.0 or 2.01 then you must first 
             save  all worksheets  in the WK1  format ! Failure  to do so 
             will cause you to experience initial installation conflicts.
             ************************************************************ 
             A  Note  about  KeyNames: Throughout  this  manual  you will
             encounter  instructions to press a  key (eg <ALT><A> for the
             Macro  Menu.  Do not  type literally  but the  Key contained
             within  the  angle  Brackets  <>.  You  will  also encounter
             KeyNames  within {}. Also Key the contents. <F3> denotes the
             Function 3:  F3 key.












             This  application creates various  types of worksheet files,
             they are:
                  1) Data Input/Data Storage worksheets. 
                       a)  The General Journal worksheet (GJRL.wk*) which
                       is the point of entry for your transactions.
                       b) The Ledger Account worksheets of which there is
                       a  separate  format  for  General  and  Subsidiary
                       Ledger Accounts
                       c) The Financial Statement worksheet. 
                  2) Extracted Data Transfer files. 
                       These files are temporary  files  that are created
                       purpose of  transfering  information  between  the
                       various   worksheets.   This   application  relies
                       heavily upon the 1-2-3 commands FILE  EXTRACT  and
                       FILE COMBINE.
                  3) Variable Operator Storage Files. 
                       These  files (PRNTOPER.wk*  and AUTOBAL.wk*) store
                       decision   operator   values  that   instruct  the
                       computer  to automatically  Print the  Accounts or
                       extract  Account Balances. Setting the "switchs or
                       flags"   off  will  increase   the  speed  of  the
                       application  and  can be  set  when you  desire to
                       perform  printing  or  creation  of  the financial
                       statement.
                        
             ************************************************************
                       THE ORIGINAL DISK FILES ARE AS FOLLOWS:
              
                  1)  1GJRL.wk*: The  worksheet where you  will enter all
                       transactions.   This   application   is   a  batch
                       processing system and will not post out of balance
                       batchs  and  has a  preventive feature  to prevent
                       duplicate posting of batchs.
                  2) LDGINSTL.wk*:The General Ledger Account Installation
                       worksheet.  You  will be  able to  quickly install
                       each individual account. The application will save
                       the  account you create and present you with a new
                       LDGINSTL.wk*  ready for  installation of  the next
                       account.  Be certain  that you  use this worksheet
                       for   installing  your  Ledger  accounts  and  not
                       SUBINSTL.wk*. 
                  3)  SUBINSTL.wk*:  The  Subsidiary  Ledger Installation
                       worksheet for Receivables/Payables.
                  4) BALSHEET.wk*: The Financial Statement worksheet. 
                  5) CONTROL.wk*: Account Control Worksheet for  Accounts 
                       Receivables/Payables. Will require installation of
                       Account  Balance  "import" commands.  Each Control
                       account  will  contain the  summary  or cumulative
                       balance  of  Accounts Receivable  or  Payable. Use
                       this worksheet for both, you will need to assign a
                       name to each to differentiate between the two. All
                       detail  of the individual  accounts will be stored
                       in separate worksheets.
                        












                        
                       The  Financial  Statement  will  only  contain the
                       balance  (summary or  cumulative) and  the Control
                       Cards   will   contain   the   individual  account
                       balances.
                  6)  REGISTER.wk*: A worksheet  to accumulate a detailed
                       transaction  listing for Sales, Sales Returns  and
                       Allowances,   Purchases,  Purchases   Returns  and
                       Allowances,  Cash  Receipts,  Cash  Disbursements,
                       Summary  Accounts  Payables/Receivables.  You will
                       need  to  make  a separate  installation  for each
                       register that you desire.
                  7)  CHKRGSTR.wk*: The check register that will "import"
                       all  the  Checks Disbursed  from the  GJRL.wk* and
                       allow  you to reconcile your account at the end of
                       the period.
                  8)  AUTOBAL.wk*:  This  a variable  operator  file that
                       contains  the value that will be used as a "switch
                       or   flag"  to  control  automatic  extraction  of
                       account  balances  for  posting  to  the financial
                       statement.
                  9)  PRNTOPER.wk*: This is also a variable operator file
                       that  contains the  value that  will be  used as a
                       "switch  or flag" to control automatic Ledger card
                       printing during the distributive posting process. 
                  10)RUNDATE.wk*:  This Variable storage  file stores the
                       date that is entered upon initial retrieval of the
                       GJRL.wk*.  This  date  will be  stamped  upon each
                       Ledger  worksheet to indicate the most recent date
                       that transactions entered into the General Journal
                       have  been extracted and  distributively posted to
                       the Ledger accounts.
                  11)SMPLGJRL.wk*:  This is a sample of the appearance of
                       transactions  that  have  been  entered  into  the
                       General Journal.
              
             **********************BEFORE YOU BEGIN**********************
             It  is recommended that you carefully read the documentation
             for  this application and  experiment with a  small Chart of
             Accounts  to be certain that you understand the installation
             procedure  and  the method  of operation.  Failure to  do so
             could cause you immense frustration ! 
              
             BE CERTAIN TO MAKE SEVERAL BACKUP COPIES OF THIS APPLICATION
             BEFORE YOU BEGIN !
             ************************************************************
              
             PLEASE NOTE THAT YOUR DISTRIBUTION DISK CONTAINS FILES NAMED
             CONTROL3.wk*,CONTROL5.wk*,BALSHET3.wk*, and BALSHET5.wk*. If
             your  Accounts  are  3  digits  use  the  files  with  3 (ie
             Control3.wk*),  or  5  digits  use  the  files  with  5  (ie
             Control5.wk*)    when   installing    the   CONTROL.wk*   or
             BALSHEET.wk*  worksheets. The default files  are for 4 digit
             Account numbers.












                                            
                                ABOUT THOSE .ARC FILES 
             In  order to  save disk space  and provide  you with several
             other  useful  and  compatible utility  programs  along with
             LEDGER eXpress, you will find all programs have an extension
             of .ARC. This is an archiving convention that squeezes files
             and  allows  for  greater  storage  on  a  single  disk. The
             archiving  program employed was written by Phil Katz and the
             "unarcing"  program is included here.  If you would like the
             complete  program that  will allow you  to Archive (squeeze)
             files  as well, you may obtain one from Macro X Services for
             $4.00  dollars shipping and handling. This  is a "Shareware"
             product  and  you  will find  within  the  documentation Mr.
             Katz's  address and it is requested that you send Mr. Katz a
             nominal  amount  of  money  if you  are  satisfied  with his
             product and wish to register with him as a registered user. 
              
                     UNARCING THE FILES ON THE DISTRIBUTION DISK 
             To "Unarchive" the LEDGER eXpress files do the following.
                  1) Be certain that the program PKXARC.com is accessible
                  from your active drive. From the DOS prompt enter:
                   
                       A>PKXARC A:\LEDGER.ARC C:\
                  If  you  wish to  install the  LEDGER X  files into   a
                  particular subdirectory then at the DOS prompt enter:
                   
                       A>PKXARC A:\LEDGER.ARC C:\LEDGER
                  where C:\LEDGER is the name of the subdirectory. If for
                  example you  copy to a subdirectory from within a 1-2-3
                  subdirectory type................. C:\123\LEDGER.
                   
                  2) Follow the above procedure for the remaining Archive
                  files.
                  3)  If you wish  to quickly "Unarchive"  all files onto
                  your   Fixed   (Hard)  Drive   or  into   a  particular
                  subdirectory  you process all .Arc  files as a batch in
                  the following manner.
                        
                       A>PKXARC  A:* C: to install  all files on the hard
                            drive.
                       A>PKXARC  A:* C:\LEDGER to install  all files on a
                            subdirectory named LEDGER.
              
             **********LEDGER eXpress Installation Requirements**********
             The  Ledger  worksheets  that  will  require  user installed
             commands  and the  type of  installation required  is listed
             below.  Most installation  procedures have  been implemented
             with self-modifying Macro /X program commands. The user will
             responsible for accurate keypunching only. You will not need
             to  understand the 1-2-3 Macro  programming language. For an
             understanding  of the Macro programming language the user is
             referred to the 1-2-3 manual or to LOTUS magazine.
             ************************************************************ 
                                              












                                              
                             Installation Requirements (contd)
                  1)  1GJRL.wk*:  requires  installation  of  the extract
                       commands for each individual account in your Chart
                       of  Accounts. Prior to installation it is required
                       that  you assemble your  Chart of Accounts, making
                       note  of each account as  a General  or Subsidiary
                       Ledger Account.
                  2)  LDGINSTL.wk*: this is your "generic" General Ledger
                       account  installation worksheet. You  will need to
                       install  each individual Ledger account using this
                       worksheet.  The  installation  procedure  has been
                       automated   making   heavy  reliance   upon  Self-
                       Modifying    Macros.   Be    certain   to   follow
                       instructions  carefully.  There will  be occasions
                       that  your Panel will not  display any messages to
                       help  you  ! At  these  times the  program  may be
                       waiting  for you  to "point" at  a particular cell
                       using  the cell cursor. Your status indicator will
                       be  displaying CMD to help  clue you. Each General
                       Ledger  Account will require  31k of storage space
                       on your Fixed (Hard) Drive.
                  3)  SUBINSTL.wk*: Like LDGINSTL above  you will need to
                       install  each subsidiary  account. Each Subsidiary
                       Ledger Account Requires 60k of Disk storage space.
                  4)  CONTROL.wk*: This is an optional installation. This
                       worksheet   has  been   designed  to   accept  the
                       Subsidiary  Account Ledger  balances that  will be
                       extracted  from each  account. You  will then post
                       the  total balance  of Subsidiary  Ledger accounts
                       (Receivables   and  Payables)   to  the  Financial
                       Statement.  You  will be  required to  install the
                       Account  balance  "import"  commands.  It  is  not
                       necessary but you will then be required to install
                       Account   balance  "import"   commands  into  your
                       Financial  Statement. You  will not  save yourself
                       any  work but you  will increase the  speed of the
                       Financial  Statement by creating Subsidiary Ledger
                       Control  Accounts.  You will  need to  rename this
                       account to indicate it is a Control Account.
                       (eg  Your Payables are numbered  2001 to 2999, you
                            could  number  (name)  your  Payables control
                            account as 2000. Your Receivables are 5001 to
                            5999,   you  could  number  your  Receivables
                            control account as 5000).
                  5)  REGISTER.wk*: This  worksheet will provide you with
                       a  detailed, chronological transaction listing for
                       the  type  of register  you  desire to  create. To
                       employ  Special Registers you will need to install
                       "extract   commands"  in  the  GJRL.wk*  and  also
                       install  "import"  commands  here  in  the Special
                       Register.
                        
                        












                        
                  6)  CHKRGSTR.wk*: This worksheet is your Check Register
                       that  will receive the listing of disbursed checks
                       that  you  write using  the  "WriteChecks" command
                       that  is  available  from  the  General  Journal's
                       Alternate Macro Menu. You will not need to perform
                       any   special   installation  to   this  worksheet
                       although  you  will need  to manually  extract the
                       disbursed  checks from the General Journal from an
                       Alternate  Macro Menu. This  provides you with the
                       choice  of implementing  the CheckRegister  or not
                       according to your desires.
                  7)  BALSHEET.wk*: This  is the  worksheet that  is your
                       Financial  Statement.  Contained within  it  are a
                       Trial  Balance,  Balance Sheet,  Income Statement,
                       and  Statement of  Changes in  Financial Position.
                       You  will need  to install  the Account  Names and
                       Numbers,  the  Extracted  Account  Balance  import
                       commands  and establish the Account categories for
                       the  Income  Statement  and  Changes  in Financial
                       Position.   Subscribers  to  LOTUS  magazine  will
                       recognize   the  format  from   the  June  through
                       September   1986  series  on  creating  a  General
                       Ledger.  If you  find the  documented instructions
                       here  to be insufficient then you may consult with
                       the  September 1986 issue  for assistance as well.
                       The  format was incorporated into this application
                       in  the  hopes of  providing  you with  a familiar
                       Financial Statement to work with and provide you a
                       format that you could modify easily if desired. 
              
             ***********************GETTING STARTED********************** 
             Assemble   your Chart  of Accounts noting  which are General
             Ledger   Accounts,   Accounts   Receivables,   and  Accounts
             Payables.  Make sure that they  are in numerically ascending
             order.  You will be  able to insert  accounts after you have
             installed  your  Chart of  Accounts  but for  expediency you
             should  have the Account Names  and their Account Numbers in
             numerical order at hand.
              
             When  you begin to install any  worksheet or account be sure
             to  first  select "SetUp"  or  "Install" from  the Alternate
             Macro  Menu commands. Each worksheet uses as it's entry into
             the  Macro Menu the Key  combination of <ALT><A>. You should
             press  both Keys at the same  time. The Macro Menu will then
             appear.  The  menu operates  in an  identical manner  as the
             worksheets (/) commands.
              
             IF  YOU ARE  USING VERSION 2.0  or 2.01 be  certain that you
             save  the original  disk files  in a  WK1 format  before you
             begin  the  installation procedure.  Failure  to do  so will
             hamper the installation procedure.
                                            
                                            












             *****************SAMPLE CHART OF ACCOUNTS*******************
                            1oooo ASSETS
                            11ooo  Current Assets
                            111oo   Petty Cash 
                            112oo   Cash in Bank 
                            1121o    Cash: 1st National Bank 
                            1122o    Cash: 2nd National Bank 
                            113oo  Accounts Receivable Control Account 
                            11301 
                             thru {..Individual Accounts Receivable 
                            11399 
                            11400  Inventory 
                            11401 
                             thru {..Individual Inventory Accounts Detail 
                            11499 
                            15ooo  Fixed Assets
                            151oo   Automobiles 
                            1511o    Original Value-Automobile 
                            1512o    Depreciation-Automobiles 
                            15130     Replacement Inventory 
                            15131     Spark Plugs 
                            15132     Brake Shoes 
                            152oo   Plant/Buildings 
                            1521o    Original Value-Plant Buildings 
                            15212     Depreciation-Plant Buildings 
                            153oo  Land 
                            154oo  Prepaid Expenses
                            1541o   Prepaid Rent 
                            1542o   Prepaid General Insurance 
                            15421    Prepaid Automobile Insurance 
                            15422    Prepaid Fire Insurance 
                            2oooo LIABILITIES
                            21ooo  Current Liability
                            211oo   Accounts Payable Control Account 
                            21101  
                             thru {..Individual Accounts Payable  
                            21199 
                            215oo   Taxes  
                            2151o    Sales Tax  
                            21511     State Sales Tax Payable 
                            21512     Local Sales Tax Payable 
                            2152o    Payroll Taxes 
                            21521     Federal Withholding Taxes Payable 
                            21522     Federal Unemployment Taxes Payable 
                            21523     FICA Taxes Payable 
                            2153o    Income Taxes 
                            21531     Federal Income Taxes Payable 
                            21532     State Income Taxes Payable 
                            22ooo  Long Term Liability
                            221oo   Notes Payable 
                            2211o    N/P: 1st National Bank 
                            2212o    N/P: 2nd National Bank 
                            222oo   Mortgages 
                             












                            5oooo STOCKHOLDERS EQUITY 
                            51ooo  Stock
                            511oo   Stock: Par Value
                            512oo   Stock Surplus
                            52ooo  Retained Earnings
                            521oo  Profit Previous Year
                            53ooo  Profit/Loss
                            6oooo REVENUE 
                            61ooo  Sales
                            62ooo  Other Revenue
                            621oo   Interest
                            622oo   Freight
                            623oo   Miscellaneous
                            7oooo EXPENSES 
                            71ooo  Cost of Goods Sold          
                            72ooo  Purchases 
                            73ooo  Rent Expense 
                            731oo   Rent Expense:North Store Location 
                            732oo   Rent Expense:South Store Location 
                            74ooo  Repair Expense 
                            75ooo  Utility Expense 
                            751oo   Utility Expense:North Store Location 
                            752oo   Utility Expense:South Store Location 
                            76ooo  Depreciation Expense 
                            77ooo  Payroll Expense 
                            771oo   Employer FICA Tax Expense 
                            772oo   Other Payroll Tax Expense 
                            78ooo  Miscellaneous Expense 
                            79ooo  Income Tax Expense 
              
             It is assumed that you already have a Chart of Accounts with
             corresponding  Account  Numbers  unless  you  are  a startup
             business.  If you are  a startup it  is strongly recommended
             that  you  consult  with  an  Accountant  for  assistance in
             creating  your  Chart  of  Accounts.  This  Sample  Chart of
             Accounts is provided for illustration purposes. 
              
             ***************INSTALLING THE GENERAL JOURNAL***************
             If  you have  your Chart of  Accounts ready  and have marked
             your subsidiary accounts then you are ready  to begin. Using
             the  Worksheet commands (/)  select File Retrieve (/fr1GJRL)
             to  load the General  Journal into the  computers Main (RAM)
             memory.  You will be  presented with a  query in the Display
             Panel.  Answer the  query with  todays date.  The query will
             first ask for the Month, then Day, then Year. After you have
             completed  stamping  the  General Journal  with  the current
             date,  activate the Macro Menu  by keying <ALT><A> together.
             You will be presented with  the menu listed below:
              
                  Commands Extract SetUp WriteChecks AccountList   
             Select  <C>ommands and you will  be presented with a SubMenu
             listed below:
              
                  JrnlEntry Edit SubPost Print Quit NewPage AutoFunctions












             Select  <E>dit and your screen will become active. Your cell
             cursor will rest upon the cell AP27 (Range Name:SubEdit).
             The cell contents of AP27 (Range Name:SubEdit) will be:
                                     /bbbbbb{esc}
             Press the <Ret>urn key twice and the computer will insert a
             blank cell.
                  NOTE:  The reason you  must key <Ret>urn  twice is that
                  when  you desire  to alter  your Chart  of Accounts you
                  will  need to insert the  "extract" command for the new
                  account  in the Extract  "que". This will  allow you to
                  highlight the cell to insert the new account before.
             Notice  that  your panel display  now contains a question as
             to  the  type  of account  you  wish to  install.  Make your
             selection  accordingly from your Chart  of Accounts that you
             assembled  previously  (If you  do  not have  your  Chart of
             Accounts handy then stop here, do not continue, and assemble
             them as described previously.).
             If  you desire to install a General Ledger Account the blank
             cell will be stamped with text that appears as below:  
                       {goto}crit~{?}~/dqeq/fxv{?}E~GenXtrac~r
             The  blinking panel cursor will come  to rest under the left
             bracket  of the  Left {?}  Type the  Account number  and key
             <Ret>urn.  The cursor  will shift  right and  rest under the
             Left  bracket of /fxv{?}. Type  the Account number again and
             key  <Ret>urn. You will now  be presented with the following
             query:
                                Another? Yes=1;No=2:
             Answer the query according to your wishes.
              
             If  you desire  to install  a Subsidiary  Ledger Account the
             blank cell will be stamped with text that appears as below:
                       {goto}crit~{?}~/dqeq/fxv{?}E~OutPut~r
             Follow  the procedure  as described  above for  installing a
             General  Ledger Account since the  procedure is the same but
             if  you inspect  the two commands  you will  notice that the
             difference between the commands is the GenXtrac v. Output. 
              
             THE  FINISHED COMMAND for General  Ledger Account #1000 (for
             example) should appear as below:
                      {goto}crit~1000~/dqeq/fxv1000E~GenXtrac~r
             Continue  installing  the  extract commands  until  you have
             created  an extract  command for every  account, General and
             Subsidiary,  when finished  answer No(2) to  the panel query
             and  immediately  return to  the  Alternate Macro  Menu, key
             <Alt><A>   together.  Select  <C>ommands  and  you  will  be
             presented with a SubMenu listed below:
              
               JrnlEntry Edit SubPost Print Quit NewPage AutoFunctions
             Select  <Q>uit,  Key  <Ret>urn and  <R>eplace  to  save your
             1GJRL.wk* with your installed extract commands.
             **************IF YOU MAKE AN INSTALLATION ERROR*************
             There  are two  methods for  dealing with  a keypunch error.
             Since  you are operating within a Macro you cannot move back
             to the erroneous cell and edit it during installation.












                      If You Make an Installation Error (contd) 
             If you make an error during the installation process you can
             correct the error in one of two ways.
                  1)  You will need to "break" the Macro command in order
                  to perform a "direct edit". Press <Control><Break> 
                        NOTE:If  you have  a keyboard  with a  key marked
                            SysReq/Reset..next  to the break  key then be
                            extremely  careful as to  which key you press
                            !!!!     If     you     should     Key    the
                            <Control><SysReq/Reset>     combination    by
                            mistake  you will reset the computer and lose
                            your work. It is suggested that you Save your
                            work before you make any corrections. Use the
                            Macro  Menu; <Alt><A>;  <C>ommands, <Q>uit as
                            described  on the previous  page to save your
                            work.
                  together   and  move  the  cell   cursor  to  the  cell
                  containing  the  error.  Use  the  1-2-3  command Range
                  Unprotect  (/ru) to  unprotect the  cell and  make your
                  correction. Be sure to protect the cell using the 1-2-3
                  command Range Protect (/rp).
                  2)  The second  method of  correction is  to delete the
                  erroneous cell and reinstall the command. To do this:
                       a)  First  place  your  Cell  Cursor  on  the Cell
                       containing   the  error   ,  then   Unprotect  the
                       worksheet   using   the  1-2-3   Worksheet  Global
                       Protection Disable command sequence (/wgpd).
                       b)  Erase the erroneous cell using the Range Erase
                       (/re) 1-2-3 command.
                       c)  Move the cell cursor  down one cell. (You must
                       now  move  the  block of  extract  commands  up to
                       replace  the now vacant cell you just erased.) Use
                       the  1-2-3 command Move  (/m) and the {END}{DOWN},
                       <RET>  keystroke sequence to indicate the range to
                       move. Now move your cell cursor up (using the {UP}
                       key)   to  the  blank  cell  you  erased  and  Key
                       <Ret>urn.  Now reprotect the  worksheet  using the
                       1-2-3 command sequence Worksheet Global Protection
                       Enable  (/wgpe). You may now resume installing the
                       extract commands.
             To  resume  installing  commands select  from  the Alternate
             Macro  Menu  <ALT><A>; <C>ommands,  <E>dit. The  cell cursor
             will move to the cell containing:
                                     /bbbbbb{esc}
             your panel will display the message:
                           Select Account to insert B4:<RET>1st:
             Key  <Ret>urn once  and using the  {Up} cursor  key move the
             cell  cursor  to the  cell you  wish  to insert  the extract
             command  in front of for example if you desire to insert the
             extract  commands for Account #7515  place the cursor on the
             highlighted cell as below:
                      {goto}crit~7510~/dqeq/fxv7510E~GenXtrac~r
                      {goto}crit~7520~/dqeq/fxv7520E~GenXtrac~r
                      /bbbbbbb{esc}












             Of  the  two methods  of  editing installation  error  it is
             highly  recommended that you use method #1 but if you should
             make  further errors and wish  to reinstall the command then
             you may use method #2.
              
             Once  you  have finished  installing  your commands  and any
             edits  then again  save your  worksheet using  the Alternate
             Macro Menu commands <ALT><A>, <C>ommands, <Q>uit. Your panel
             cursor will present you with the message:
                              Enter Save File Name:1GJRL
             Key  Return and <R>eplace to update your worksheet. You will
             now be free to Retrieve any other file.
             ************************************************************
              
                            INSTALLING THE LEDGER ACCOUNTS
             Before  you begin make  certain that your  Chart of Accounts
             has  been assembled  in ascending  numerical order.  You may
             create  a worksheet with  your Chart of  Accounts, if you do
             then you will have your Chart of Accounts "on-line" from the
             GJRL.wk*.  The Alternate  Macro Menu command  that will list
             your  Chart of Accounts is <Alt><A>, <A>countlist. If you do
             not create a Chart of Accounts worksheet  it will not hamper
             performance  but  could  be a  nice  convenience.  Enter the
             Information in the following format:
              
                          _____A___________________B_____________
                      1   |   1000               CASH 
                      2   |   2000               ACCOUNTS PAYABLE   
                                         etc. 
              
                             LEDGER ACCOUNT INSTALLATION 
             Depending  on which type of Account you wish to install File
             Retrieve  (/fr)  LDGINSTL.wk* or SUBINSTL.wk* from the 1-2-3
             File Menu.
                  Tip: After selecting (/fr); press the <F3> key and your
                       screen  will display all the files that are in the
                       active directory. Highlight the file name you wish
                       to retrieve and press <Ret>urn.
             Once a Account installation worksheet is loaded into memory;
             begin by:
                  1)  Selecting from the  Alternate Macro Menu, <Alt><A>,
                  <I>nstall,  <S>etUp. Answer the  prompts in your screen
                  panel  as they appear. Remember  this from the SetUp of
                  the GJRL.wk* ?? If you failed to do so for the GJRL.wk*
                  don't  panic,  but  remember  to do  so  the  next time
                  GJRL.wk*  is loaded into  memory ! Always  look for the
                  <S>etUp  command  each  time  you  load  the  different
                  worksheets the first time. You will find it in the Main
                  Menu or under the Install Submenu.
                   
                                              
                                              
                                              
                                              












                            LEDGER ACCOUNT INSTALLATION (contd)
                  2)  Next select from the Alternate Macro Menu <Alt><A>,
                  <I>nstall,  <C>reateAcct.  In  response  to  the screen
                  panel  type in this accounts  name, the journal page as
                  "1"  or whatever number you wish the number the journal
                  page as.
              
             The  cell cursor and your screen  will become active and the
             cell  cursor will come  to rest on  cell AC6 (Range Name:1E)
             which means 1st cell to Edit and contains:
                          /XiTrans=0~/fcce{?}E~{calc}/XgSeq~
             The  blinking panel cursor will come  to rest under the left
             bracket  of  the    {?}  Type  the  Account  number  and key
             <Ret>urn.  The cell  cursor will shift  and come  to rest on
             cell AC16 (Range Name:2E) which contains:
                                      /fe~{?}E~y
             With The panel cursor resting under the Left {?} Type the
             Account number and key <Ret>urn. You will now be presented
             with the following query:
                         What is this Account Number Again?:
             Key in the Account Number and <Ret>urn.
             ************************************************************
             Be  absolutely  sure  that  you  enter  the  account  number
             correctly  !  Failure to  do so  will place  a "bug"  in the
             program  that  will  not  become  evident  until  you  begin
             processing  ! Your  response is  stored at  cell AB56 (Range
             Name:FilSav)  and it  is part  of the  command sequence that
             saves  the Account you are installing.  If you were to enter
             10000  instead of  1000 then the  account would  be saved as
             10000  and when  you go to  post the Account  balance to the
             Financial  Statement The balance would not be posted (unless
             of  course  you  made an  identical  keypunching  error when
             installing   the   "import"   commands   in   the  Financial
             Statement).  If any accounts in  the Financial Statement are
             posted  as 0.00 (Zero) during  the import routine this would
             be  the likely culprit. If any edit is necessary then select
             from  the Alternate  Macro Menu  select <ALT><A>; <I>nstall;
             <M>odifyAcct#.
             ************************************************************
             Finally, the cell cursor will rest upon AC20 (Range Name:3E)
             with the panel cursor resting under the left bracket of:
                                       /fr{?}~ 
             IMPORTANT:  Key  in  the next  account  number  in ascending
             numerical  order that you will  be installing. The worksheet
             will  be automatically saved and  then you will be presented
             with  the  File Menu.  Key <F3>  and select  the appropriate
             installation worksheet for the next Account type you wish to
             install (LDGINSTL or SUBINSTL).
             You   have   now  completed   the  General   Ledger  account 
             installation procedure.
              
                                            
                                            
                                            












                        INSTALLING SUBSIDIARY LEDGER ACCOUNTS
             Installation  of the Subsidiary Ledger accounts is performed
             exactly   as  the   General  Ledger   described  above.  The
             difference between the two is that the Subsidiary Ledger has
             been  formatted to  calculate totals  for Invoice Discounts,
             and Invoice Due Date. The commands that require installation
             are  physically  located at  different locations  within the
             SUBINSTL.wk*.
              
             The first command you install:
                          /XiTrans=0~/fcce{?}E~{calc}/XgSeq~
             is  located at cell AY6, the Range Name is  1E (which stands
             for 1st command to Edit).
                  *************************************************
             The second command you install:
                                      /fe~{?}E~y
             is located at cell AY16 (Range Name:2E).
                  *************************************************
             The response to the query:
                         What is this Account Number Again?:
             is stored at cell  location AX56 (Range Name:FilSav).
                  *************************************************
             The Final command that retrieves the next account in
             ascending order:
                                        /fr{?}~
             is located at cell location AY20 (Range Name:3E).
              
             This  installation  procedure  will  establish  the Autoexec 
             Macro  that  will execute  each time  you retrieve  a Ledger
             Account  file. It  is required that  you post  each batch of
             extracted  Journal  Transactions after  extraction  from the
             General  Journal. The Autoexec Macro  will cause the program
             to  cycle  though  your  entire  Chart  of  Accounts.  It is
             recommended  that  you install  {?} as  the last  account to
             retreive when presented with:
                                      /fr{?}~
             during  installation of your highest numbered account. Doing
             this will return you to the 1-2-3 File Menu when transaction
             posting is complete.
             NOTE:  When you retrieve an  Account worksheet and there are
                  no  extracted transactions  to post  ,the computer will
                  beep and present you with a "File does not exist" error
                  message.  This  is  normal !  The  Autoexec  Macro will
                  execute  at all times but  since there are no extracted
                  transactions in a file to be posted (imported using the
                  File  Combine 1-2-3 command) you  will receive an error
                  message.   Simply  Key  <C>ontrol<B>reak  together  and
                  proceed with whatever work you wish to perform with the
                  particular file.
             IF  YOU MAKE  AN INSTALLATION  ERROR...installing General or
                  Subsidiary   Ledger  worksheets.  Simply  retrieve  the
                  appropriate installation worksheet and begin again. Due
                  to  the  ease of  installing  the Ledger  accounts this
                  method is fastest and least prone to further errors !












             Extract  Files:  The  Program  will  save  your  sorted  and
                  extracted  Journal transactions  in files  that have an
                  imbedded E in the file name. For example after you have
                  extracted  from the General Journal you will find files
                  with the E such  as 1000E, 1010E. After posting the
                  Extracted  transaction files to the respective accounts
                  the program will delete the Extract file from the 1-2-3
                  File Menu.
             Account  Balance Extract Files: are similar in nature to the
                  transaction  Extract. These files have an imbedded B in
                  the  file  name  (eg. 1000,  1000B).  These  files will
                  remain  on  your 1-2-3  File Menu  until you  prepare a
                  Financial  Statement.  The program  has a  "switch" for
                  (de)activating B account processing/extraction.
              
             *************MODIFYING YOUR CHART OF ACCOUNTS***************
             If  after  you  have  completed  installing  your  Chart  of
             Accounts  you discover that you omitted an account or in the
             future  you desire  to install  a new  account that  did not
             exist  at the time of initial  installation you will be able
             to   modify  your  Chart  of  Accounts.  The  procedure  for
             modifying your Chart of Accounts is as follows:
              
                  1)  File  Retrieve  the GJRL.wk*  and  select  from the
                  Alternate  Macro Menu: <Alt><A>;<C>ommands;<E>dit. Your
                  panel will display:
                        Select Account to insert B4:<RET>1st:
                  Press <Ret>urn once and then using your {UP} cursor key
                  move the cell cursor to the cell containing the extract
                  command  you wish to insert  before. For example if you
                  wish  to insert Account  #7515 you would  move the cell
                  cursor  to the cell containing  the highlighted text as
                  below and press <Ret>urn.
                      {goto}crit~7510~/dqeq/fxv7510E~GenXtrac~r
                      {goto}crit~7520~/dqeq/fxv7520E~GenXtrac~r
                      /bbbbbbb{esc}
                  The  computer will insert a blank extract command ready
                  for   installation  and  prompt  you  for  the  Account
                  information  necessary.  When  you  have  completed the
                  installation  (Look for the CMD indicator to disappear)
                  select     from     the    Alternate     Macro    Menu;
                  <Alt><A>;<C>ommands;<Q>uit. Key <Ret>urn in response to
                              Enter Save File Name:1GJRL
                  and <R>eplace to save your edit.

                  2)  Retrieve the Account  worksheet that is immediately
                  lower  in  value to  the account  you wish  to install.
                  Using  the  example above,  you would  retrieve Account
                  7510   and  select   from  the   Alternate  Macro  Menu
                  <Alt><A>;<I>install;<M>odifyAcct#.   Your  cell  cursor
                  will  be located at (Range Name:3E) the cell to modify.
                  In the example the cell would contain:
                                       /fr7520~
                   












                         Modifying Your Chart of Accounts (contd)
                  2)  contd: with the blinking panel cursor resting under
                  the  7 of 7520. Enter the number of the account you are
                  inserting;  in this  case 7515. The  command should now
                  look like:
                                   /fr75157520~
                  with  the blinking panel cursor  under the right 7. Now
                  press the {DEL} (Delete Key) until the command looks as
                  it should..../fr7515~ and press <Ret>urn.
                  3)    Select    from   the    Alternate    Macro   Menu
                  <Alt><A>;<C>ommands;<Q>uit.  Follow  the  procedure for
                  saving  your modified worksheet as described previously
                  by  Keying <Ret>urn  and <R>eplace  in response  to the
                  panel messages.
                  NOTE:  If your Chart of Accounts has a numerical format
                       of 3, 5, or 6 digits then the blinking cursor will
                       not  perform as described above, however, you will
                       still be able to modify the command. You will need
                       to  use  your cursor  keys  to position  the panel
                       cursor and make the modifications as needed.
                  4)   Retrieve  the   appropriate  Account  Installation
                       worksheet   (LDGINSTL.wk*  or   SUBINSTL.wk*)  and
                       install the account as described in the section on
                       LEDGER   ACCOUNT   INSTALLATION.  When   you  have
                       completed this you have finished the procedure for
                       modifying your Chart of Accounts.
                   
             *******SUBSIDIARY LEDGER CONTROL ACCOUNT INSTALLATION*******
             If your company has a large number of Accounts Receivable or
             Accounts  Payable you may desire to create Subsidiary Ledger
             Control  Accounts. Although  this is  not necessary,  if you
             have a large number of accounts then you will be required to
             install  the Account Balance Extract files "import" commands
             into  the Financial  Statement which  will greatly  slow the
             speed  of creating a Financial Statement and you will not be
             saving  yourself any work. The  Control Account will provide
             you  with  a  detailed  listing  of  the  balance  for  each
             individual  account. Your Financial Statement will then only
             contain the cumulative balance for your Accounts Receivables
             and Payables.
              
             If  you decide to install Subsidiary Ledger Control Accounts
             then you should first retrieve the worksheet CONTROL.wk* and
             rename  it  to some  name  you choose.  Suggested  names are
             AR_cntrl  and AP_cntrl  or some  other name  you choose that
             will clearly indicate what the name of these worksheets are.
             To  do this retrieve  the file using  the 1-2-3 command File
             Retrieve (/fr) and once loaded Save the file using the 1-2-3
             command  File Save (/fs) to rename your file. When the panel
             reads: Enter Save File Name:Control...Type the name you wish
             to  change the file to and press <Ret>urn. Then retrieve the
             file  for the Control Account  you wish to begin installing.
             BE  SURE TO USE  THE PROPER CONTROL.wk*  FOR YOUR PARTICULAR
             CHART OF ACCOUNTS ! CONTROL3.wk*, CONTROL5.wk* ??












                           Control Account Installation (contd)
                  1)  After the  Renamed Control.wk* is  loaded begin the
                  installation  by first  performing the  SetUp procedure
                  from        the       Alternate        Macro       Menu
                  <Alt><A>;<I>nstall;<S>etUp.  Answer the prompts as they
                  appear in your display panel.
                  2)    Select   from    your   Alternate    Macro   Menu
                  <Alt><A>;<I>nstall;<A>cctCall.  Your  cell  cursor will
                  rest  upon  cell  A10  (Range  Name:Insert)  which will
                  contain the numerical value 9999.
                       NOTE:  This (9999) is the  "stop operator" for the
                       Macro  programming  code. If  you have  an Account
                       numbered  9999  then  you will  need  to  edit the
                       command.  To do this you  will need to contact the
                       author for specific instructions.
                  Your screen panel will display the following message:
                            Mark Acct to Insert Before! <RETURN>1st
                  Press  <Ret>urn  twice (again  like the  Ledger Account
                  installation worksheets you need to key <Ret>urn twice)
                  and  the program will insert a  blank prior to the 9999
                  stop  operator.  Enter  the  Account  number  and press
                  <Ret>urn;  the  cursor  will  shift  right,  enter  the
                  Account  Name and press <Ret>urn; the cursor will again
                  shift  right and you may  enter the Account Balance for
                  the  Account you  are installing. The  cell cursor will
                  move  to cell  Q131 (Range  Name:Next). This  cell will
                  display the following:
                                 /XiXpost=9999~/xgend~
                  Press <Ret>urn twice and the program will insert the
                  code you will need to install.
              
                  /XiXpost={??}~{goto}test~{edit}{left}{left}{left}{LEFT}
                  {LEFT}{LEFT}{DEL}{DEL}{DEL}{DEL}{??}~{down}{edit}{LEFT}
                  {LEFT}{LEFT}{LEFT}{LEFT}{LEFT}{LEFT}{DEL}{DEL}{DEL}
                  {DEL}{??}~/xgRun~
                   
                       NOTE:  This is  an extremely long  command and you
                       will not be able to see the entire command in your
                       screen panel. (Inspect as much as you can.)
                        
                  The panel cursor will rest under the left bracket of:
                                      /XiXpost={??}~
                  Key  in the Account number and press <Ret>urn. You will
                  be  able to  see the panel  cursor shift  right in your
                  panel, it will stop under the left bracket of:
                                  {DEL}{??}~{down}{edit}
                  Again  key the  Account number  of the  account you are
                  installing  and press <Ret>urn. Again, you will be able
                  to  observe the panel cursor  shifting right. The panel
                  cursor will rest under the left bracket of:
                                     {DEL}{??}~/xgRun~
                   
                   
                   












                           Control Account Installation (contd)
                  Again  key the  Account number  of the  account you are
                  installing  and  press  <Ret>urn.  The  Account Balance
                  "import"  command is now installed  ! Answer the screen
                  prompt according to your desires.
             NOTE:  Install  these commands  carefully  ! It  is strongly
             recommended  that you visually inspect the Account Number as
             you  enter them,  be sure the  number is  correct before you
             press the <Ret>urn key. If you notice you have made an error
             you  will be  able to  edit the  entry before  you continue.
             Simply  use  your cursor  key to  position the  panel cursor
             under  the error, press the {Del} key and  enter the correct
             number  then reposition the panel cursor back under the left
             bracket  and  press <Ret>urn.  An  error here  will  be very
             difficult  to discover.  Since the  command scrolls  off the
             screen  panel, you will not be  able to use your cell cursor
             to scroll through the commands and inspect the code.
              
                   IF YOU MAKE A CONTROL ACCOUNT INSTALLATION ERROR
             If  you make an  installation you may  correct your error in
             the following manner.
                  1)  Break out of  the Macro command if  it is active by
                  pressing <Control><Break> together.
                  2) Press the <Home> key to position the cursor and then
                  scroll  down to the Account that  is in error.  Use the
                  1-2-3   command  Worksheet  Global  Protection  Disable
                  (/wgpd)  unprotect the worksheet.  With the cell cursor
                  resting  upon   the cell containing  the Account Number
                  select the 1-2-3 command Worksheet Delete Row  (/wdr).
                  3)  Use the "Goto"  Function Key <F5>  to goto the cell
                  named Next. In response to the screen message:
                                  Enter Address to Go to:
                  type in Next and press <Ret>urn. The cell contents
                  should be:
                                 /XiXpost=9999~/xgend~
                  use  your cursor key  to scroll up  to the command cell
                  containing the error.
                  4)  Use  the 1-2-3  command  Range Erase  to  erase the
                  contents of the cell.
                  5)  Move you cell cursor down  one cell. (You should be
                  immediately  below the  cell you just  erased.) Now use
                  the 1-2-3 Move command.
                       a)  Use  the  1-2-3  command  Move  (/m)  and  the
                       {END}{DOWN},  <RET> keystroke sequence to indicate
                       the  range to move.  Now move your  cell cursor up
                       (using  the {UP} key) to the blank cell you erased
                       and  Key  <Ret>urn.  Now  reprotect  the worksheet
                       using  the 1-2-3 command sequence Worksheet Global
                       Protection  Enable  (/wgpe).  You  may  now resume
                       installing the account balance import commands.
              
              
              
              












             ***************INSTALLING THE CHECK REGISTER****************
             The  installation of the Check Register is relatively simple
             in  comparison  to  previous  installation  procedures.  The
             register will require extracted information from the General
             Journal.  If  you have  not  previously extracted  the Check
             Disbursement   information  from  the  General  Journal  the
             computer  will issue a  "File Does Not  Exist" error message
             when  you   load  the  ChkRgstr.wk*. This  means  either you
             forgot  to extract the information  from the General Journal
             or  you are loading the worksheet to inspect the contents or
             work  with the CheckRegister.  Simply press <Control><Break>
             and  continue with your work or retrieve the General Journal
             and extract the Check Disbursement information.
                  NOTE:  This  application has  been  designed in  such a
                  manner  that you  will need to  extract information for
                  the  CheckRegister  and the  Special Registers  from an
                  Alternate  Macro Menu. This  allows you the flexibility
                  to  design your  system without  the Special Registers.
                  Customization is available to automate the procedures !
             To   install  the  CheckRegister   simply  select  from  the
             Alternate   Macro   Menu   <Alt><A>;<I>nstall.   Answer  the
             questions  that appear  in your screen  panel. When finished
             save  your  work..<Alt><A>;  <C>ommands;  <Q>uit;  <Ret>urn;
             <R>eplace.
              
             ************A NOTE ABOUT THE SPECIAL REGISTERS**************
             If  you  desire  to implement  special  registers  into your
             system  you will need to install "extract" commands into the
             General  Journal  worksheet and  "import" commands  into the
             individual special register worksheets. The instructions for
             performing  installation will not be  explained here ! Since
             you  may  not  desire to  implement  special  registers, the
             installation   instructions  will  be  explained  after  the
             installation  instructions  for  the  BALSHEET.wk*  to avoid
             confusion to those of you who do not desire to implement the
             special registers.
             ************************************************************
              
              
             *************INSTALLING THE FINANCIAL STATEMENT*************
             Upon  completion of the installation of the Extract commands
             in  the GJRL.wk* and all  your General and Subsidiary Ledger
             Accounts   you  will  be  ready  to  install  the  Financial
             Statement.  The Financial Statement worksheet (BALSHEET.wk*)
             requires  installation of the Account Names and Numbers into
             the  Trial  Balance,  the  Balance  sheet,  and  the  Income
             Statement.
              
                   NOTE:   Remember  to  use  the  proper  worksheet  for
                       installation of your particular Chart of Accounts.
                       If  your Accounts are numbered  with 3 digits then
                       use  BALSHET3.wk* or BALSHET5.wk* if your Chart of
                       Accounts employs 5 digit Account numbers.
              












                      Installing The Financial Statement (contd)
             If  you  plan on  installing Control  accounts (Control.wk*)
             into  your system make a note  of the Control Account Number
             and  install it into your  Financial Statement worksheet. DO
             NOT  install the  Account Numbers  for your  Receivables and
             Payables   Accounts  if  you   plan  on  installing  Control
             Accounts.  If you do not plan on installing Control accounts
             then   you   will   install   import   commands   for   your
             Receivables/Payables  accounts into  the Financial Statement
             if your Accounting system is an accrual system.
                                            
             Load  the appropriate BALSHEET.wk* in memory using the 1-2-3
             command  File Retrieve (/fr). Once loaded into memory, begin
             installation:
                  1)  Select the  initial Setup from  the Alternate Macro
                  Menu  <Alt><A>;<I>nstall;<S>etup. Answer the prompts as
                  they appear in your Screen Panel.
                  2)    Select    from   the    Alternate    Macro   Menu
                  <ALT><A>;<I>stall;<A>cctCall. The cell cursor will rest
                  on  cell B11 (Range Name:Insert) which will contain the
                  value  9999  which is  the  stop operator.  Your screen
                  panel will now display:
                           Mark Acct to Insert B4! <RET>1st:
                  Press  <Ret>urn  twice and  the  program will  insert a
                  blank  cell above the stop  operator. Enter the Account
                  number  and press <Ret>urn. The  cell cursor will shift
                  right,  enter the  Account Name  nd <Ret>urn.  The cell
                  cursor  will now  shift to  AA155 (Range Name:MarkCall)
                  which will contain:
                                 /XiXpost=9999~/xgend~
                  Press <Ret>urn twice and the program will insert the
                  command you will need to install. The command is:
                   
                  /XiXpost={??}~{goto}test~{edit}{left}{left}{left}{LEFT}
                  {LEFT}{LEFT}{DEL}{DEL}{DEL}{DEL}{??}~{down}{edit}{LEFT}
                  {LEFT}{LEFT}{LEFT}{LEFT}{LEFT}{LEFT}{DEL}{DEL}{DEL}
                  {DEL}{??}~/xgRun~
                       *NOTE:   If   you   are   using   BALSHET3.wk*  or
                       BALSHET5.wk*  this command will  not be exactly as
                       listed.  The  total  number  of  {LEFT}  or  {DEL}
                       commands  will  vary depending  on  the particular
                       installation worksheet you are using.
                   
                  The panel cursor will rest under the left bracket of:
                                      /XiXpost={??}~
                  Key  in the Account number and press <Ret>urn. You will
                  be  able to  see the panel  cursor shift  right in your
                  panel, it will stop under the left bracket of:
                                  {DEL}{??}~{down}{edit}
                  Again  key the  Account number  of the  account you are
                  installing  and press <Ret>urn. Again, you will be able
                  to  observe the panel cursor  shifting right. The panel
                  cursor will rest under the left bracket of:
                                     {DEL}{??}~/xgRun~












                  Again  key the  Account number  of the  account you are
                  installing  and  press  <Ret>urn.  The  Account Balance
                  "import"  command is now installed  ! Answer the screen
                  prompt according to your desires.
             NOTE:  Install  these commands  carefully  ! It  is strongly
             recommended  that you visually inspect the Account Number as
             you  enter them,  be sure the  number is  correct before you
             press the <Ret>urn key. If you notice you have made an error
             you  will be  able to  edit the  entry before  you continue.
             Simply  use  your cursor  key to  position the  panel cursor
             under  the error, press the {Del} key and  enter the correct
             number  then reposition the panel cursor back under the left
             bracket  and  press <Ret>urn.  An  error here  will  be very
             difficult  to discover.  Since the  command scrolls  off the
             screen  panel, you will not be  able to use your cell cursor
             to scroll through the commands and inspect the code.
              
                 IF YOU MAKE A FINANCIAL STATEMENT INSTALLATION ERROR
             If  you make an  installation you may  correct your error in
             the following manner.
                  1)  Break out of  the Macro command if  it is active by
                  pressing <Control><Break> together.
                  2) Press the <Home> key to position the cursor and then
                  scroll  down to the Account that  is in error.  Use the
                  1-2-3   command  Worksheet  Global  Protection  Disable
                  (/wgpd)  to  unprotect  the  worksheet.  With  the cell
                  cursor  resting upon   the cell  containing the Account
                  Number  select the  1-2-3 command  Worksheet Delete Row
                  (/wdr).
                  3)  Use the "Goto"  Function Key <F5>  to goto the cell
                  named Next. In response to the screen message:
                                  Enter Address to Go to:
                  type in MarkCall and press <Ret>urn. The cell contents
                  should be:
                                 /XiXpost=9999~/xgend~
                  use  your cursor key  to scroll up  to the command cell
                  containing the error.
                  4)  Use  the 1-2-3  command  Range Erase  to  erase the
                  contents of the cell.
                  5)  Move your cell cursor down one cell. (You should be
                  immediately  below the  cell you just  erased.) Now use
                  the 1-2-3 Move command.
                       a)  Use  the  1-2-3  command  Move  (/m)  and  the
                       {END}{DOWN},  <RET> keystroke sequence to indicate
                       the  range to move.  Now move your  cell cursor up
                       (using  the {UP} key) to the blank cell you erased
                       and  Key  <Ret>urn.  Now  reprotect  the worksheet
                       using  the 1-2-3 command sequence Worksheet Global
                       Protection  Enable  (/wgpe).  You  may  now resume
                       installing the account balance import commands.
              
             When  you have completed installing  all the import commands
             into the Financial Statement you will have the capability to
             create a Trial Balance.












                   NOTE:  After  you  have  finished  installing  all the
                       commands  you will need to "Set" the  commands. Do
                       this  by selecting  from the  Alternate Macro Menu
                       the command <ALT><A>; <C>ommands;<M>thEndPost. The
                       program will run for a short period and the screen
                       will  "Flash and Shift", this  is normal. After it
                       is      completed,     save     the     worksheet.
                       <ALT><A>;<C>ommands;<Q>uit.
              
             *********************TESTING THE SYSTEM*********************
             To  test the  system for proper  operation and installation.
             Make  a copy of your GJRL.wk*. Now that you have made a copy
             of  the GJRL.wk* and stored it in a safe place, with a blank
             GJRL.wk*    select from  the  GJRL.wk* Alternate  Macro Menu
             <Alt><A>;<C>ommands;<A>utoFunctions.  In  your  screen panel
             you will be presented with the message:
                        Post Totals to Bal Sheet? Yes=1; No=2:
             You should answer Yes by keying <1> and <Ret>urn. The screen
             panel will next display the query:
                        AutoPrint of Ledger Pages? Yes=1;No=2:
             You  may answer Yes or No to this query ! Answering Yes will
             test the AutoPrinting during the posting process. This will,
             however, lengthen the processing time of the test run. After
             you  have answered these  queries you may  begin the testing
             process  by selecting from the GJRL.wk* Alternate Macro Menu
             <Alt><A>;<C>ommands;<S>ubpost.
                   
                  1)  The screen will become  active and the program will
                  begin   the  extraction  process.  Since  you  have  no
                  transactions  to extract the Extract Files created will
                  be  empty. Depending on the number of Accounts you have
                  and  the particular computer you have the computer will
                  continue  extracting transactions for these approximate
                  times.
                  4.77 mhz PC/XT will extract two (2) to (4) accounts per
                       minute  depending on the  particular Hard Drive in
                       your system.
                  8 mhz PC/XT will extract three (3) to five (5) accounts
                       per  minute depending on the particular Hard Drive
                       in your system.
                  10  mhz  PC/AT  will  extract  eight  (8)  to  ten (10)
                       accounts  per minute  depending on  the particular
                       Hard Drive in your system.
             If  your Chart of Accounts contains  50 Accounts and you are
             operating  a 10mhz PC/AT then  the extraction process should
             require approximately five to six minutes to complete.
                   
                   
                   
                   
                   
                   
                   
                                 Testing the System (contd)












                  2)  Next using  your 1-2-3 File  Retrieve command (/fr)
                  and  the <F3> key inspect  the files that were created.
                  For   every  account  (ie  1000)   there  should  be  a
                  corresponding  E Extract file (ie  1000E). If there are
                  any  omissions  then you  should inspect  the "extract"
                  commands that are listed in your GJRL.wk* for a missing
                  command.  If you should discover  an error (ie 1000 and
                  10000E)  or something similar then you have committed a
                  keypunch error.
                  3)  If  everything  looks accurate  then  retrieve your
                  lowest  numbered Account.  The computer  will now begin
                  the posting process. Again the speed of processing will
                  be  dependent  upon  your particular  computer  and the
                  speed  of your  Hard Drive.  If you  have installed the
                  Autoexec  commands  correctly  then  the  program  will
                  "import" all extract files into the respective accounts
                  in sequence  until processing is completed.
                       a)  If the computer should  "hang" then look for a
                            nonexistent  E Extract file  or an improperly
                            installed  Autoexec (check  Range Name cells;
                            ie  <F5>  1E; 1E,2E,3E,  and  FilSav) command
                            within  the  file that  has "hung".  Once you
                            have  corrected  the  error,  check  for  the
                            existence  of  the  E Extract  file  for that
                            particular   Account,  if  the  Extract  file
                            exists  then  reload the  Account  that "hung
                            up".  If the file does not then load the next
                            Account in ascending numerical order.
                  4) Once the posting process is complete you should load
                  a    Control.wk*    Account   worksheet    and   select
                  <Alt><A>;<C>ommands;<B>alPost.  This  will  import  the
                  Account Balances for the Accounts.
                  *******************************************************
                  Note:  You will receive an error message "File Does not
                       Exist"   if   you   failed  answer   Yes   to  the
                       AutoFunctions query:
                            Post Totals to Bal Sheet? Yes=1; No=2:
                       If  you failed to  do this you  will need to rerun
                       the process..BE CERTAIN TO ANSWER YES !
                  *******************************************************
                  After  the Account Balances have been imported you will
                  need to extract the Control Account Balance for posting
                  to  the Financial Statement. To do this select from the
                  Alternate Macro Menu <Alt><A>;<C>ommands;<E>xtractBal.
                  Be  certain to repeat the balance import processing for 
                  the other Control.wk* account. 
              
              
              
              
              
              
                              Testing The System (contd)













             5)  After  you  have posted  the  Subsidiary  Ledger Account
             Balances  to the Control Accounts  (if you installed Control
             accounts)  then you will "import"  account balances into the
             Financial  Statement. To  do this  you will  select from the
             Alternate  Macro  Menu  <Alt><A>;<C>ommands;<M>thEndBal. The
             computer  will begin importing the Account Balances into the
             Financial Statement.
                       5a)  If  the  program  should  "hang"  during  the
                       Account   Balance  import  processing  you  should
                       check:
                            i)  for  a  Non-existent  Balance  (eg  1000,
                                 1000b) extract file. If you find that it
                                 is  non-existent then  inspect cell AG28
                                 (Range  Name:Xbal)  in the  Account that
                                 hung.
                            ii)for an improperly installed Balance import
                                 command. Goto the cell (Range Name:Next)
                                 and  scroll up using your cursor keys to
                                 inspect the commands.
                            NOTE:  Any  time  the computer  hangs  in the
                            Financial  Statement  you should  inspect the
                            Self-Modifying   Macro   that   performs  the
                            importing.   It  is  located  at  cell  Range
                            Name:Test.....  <F5>;Test;<Ret>urn.  The cell
                            contents  and the  cell immediately  below it
                            should appear as follows:
                                                /fcce1000b~
                                                /fe~1000b~y
                            If  the cell contents of "test" do not appear 
                            exactly  as above then you must edit the cell 
                            contents  to  restore  the  integrity  of the 
                            command !
             ************************************************************
              
              
              
             If  you  have  correctly  installed  the  commands  into the
             various worksheets then the program should step down through
             the  Accounts listed in the Balance  Sheet and stop when the
             cell cursor reachs the "stop operator" 9999.
              
             If  the program is now  properly Extracting Transactions and
             creating  Extract files , Posting the   Extract files to the
             proper  Accounts,  Extracting and  Creating  Account Balance
             files  and properly importing the Account Balance files into
             the Financial Statement then you are now ready to create the
             Balance Sheet, Income Statement, and Statement of Changes in
             Financial Position.
              
              
              
              
             You  will  notice  that  column  'A'  of  the  Balance Sheet
             worksheet  is labeled Report Line. If you scroll down column












             A  you  will notice  the Report  Line format  numbers. These
             represent  the  various  categories  that  the  Accounts are
             grouped  into for  the Balance Sheet,  Income Statement, and
             Financial Changes Statement. You may categorize the Accounts
             as  you see fit for your  reporting purposes. Simple use the
             1-2-3  command  Worksheet Insert  Row  (/wir) to  insert the
             report lines for the various accounts where desired and fill
             in the information. When you prepare your Periodic Financial
             Reports  you will be able to select the particular report to
             produce      form      an      Alternate      Macro     Menu
             (<Alt><A>;<C>ommand;<P>rint).
                  NOTE:  For  further  information  on  setting  up  your
                  statement  you  may  find the  June  through  July 1986
                  issues  of  LOTUS magazine  to  be a  helpful reference
                  source.
             If  you find the illustration  provided to be inadequate and
             do  not have access to the noted LOTUS magazines issues then
             contact  the program  author for further  assistance. If you
             are equipped for MODEM operations, you may leave messages on
             the Electronic Bulletin Board at: 
              
                                  Kinkers Print Shop 
                                     313-767-7269 
                                   300, 1200, 2400 
                                        N,8,1 
                     Please address all E-Mail to the Program Author: 
                                              
                                    WARREN FESMIRE 
                                            
             If  you are not equipped  for modem operation please contact
             the  author at  the Address  or Phone  Number listed  on the
             title page. 
                                            
             *******************THE SPECIAL REGISTERS********************
              
             Since  this application was written  to allow you, the user,
             some  flexibility in assembling  the various worksheets into
             an  Accounting  information  system;  there  has  been  some
             necessary  tradeoffs.  If  you  desire  to  use  the Special
             Registers  you will need to extract the information from the
             GJRL.wk*   by    making  a  specific  Alternate  Macro  Menu
             Selection.   Extraction  of  information   for  the  Special
             Registers  is not  automatic like  the Journal Transactions.
             This   includes  the   extractions  of   Check  Disbursement
             information for posting to the Check Register. You will also
             need  to install the extract  commands into the GJRL.wk*. Do
             not be intimidated, this is an easy and painless process.
              
              
              
              
             The Special Registers are not extravagant. They will provide
             you   with  a   detailed  listing   of  all   your  specific
             transactions.   Hopefully,   you  will   find  this   to  be












             sufficient.  The Special Registers play  no integral role to
             the functioning of the application but should be viewed as a
             repository  for your  transactions to help  you quickly view
             the transactions history for the Accounting period.
              
             ***************INSTALLING THE SPECIAL REGISTERS*************
             To  install the special registers you should first determine
             what  you desire to name  the Account Files. Suggested Names
             are AcctPybl for Sales on Account, AcctRcvb for Purchases on
             Account, CashRcpt for Cash Receipts, and Disbursmnt for Cash
             Disbursements.  You may leave the  CheckRegister named as it
             is;  ChkRgstr; or  change to  your preference  but determine
             what you wish to name the Special Registers before you begin
             the installation.
              
             To  rename the Register.wk* simply retrieve the file and use
             the  1-2-3 command  File Save  (/fs). When  you see  in your
             panel:
                                 Enter Save File Name:Register
             Type  in the  name of  the File you  wish to  save the blank
             Register  worksheet  under.  Repeat  this  process  for  all
             Special Registers you wish to create.
              
                  NOTE:  The default names of the extract files that will
                       be  created when  extracting the  information from
                       the General Journal (GJRL.wk*) are as follows:
                            a) AcctPybl..........XAcctPay
                            b) AcctRcvb..........XAcctRcv
                            c) CashRcpt..........XCashRct
                            d) Disbrsmt..........XDisBurs
                            e) Checks............XChkReg
                       It  is these  e<X>tract files that you will import
                       into   the  Various  Special  Registers  that  you
                       create.
              
             When  you have  completed creating the  blank worksheets use
             the 1-2-3 command File Retrieve (/fr) to load the particular
             file  you wish to install. Once the file is loaded in memory
             you should proceed as follows:
              
             For illustration purposes assume we are going to install the
             Special Register AcctPybl.
                   
                  1)  With  the particular  Special Register  loaded into
                  memory   (in  this  case   Acctpybl)  select  from  the
                  Alternate  Macro  Menu <ALT><A>;<I>nstall.  The program
                  will query you for your company name , the current year
                  and the Name of the Special Register be installed.
                   
                   
                  2)  Your  cell cursor  will  move to  cell  AA25 (Range
                  Name:1E).Your screen panel will display the following:
                                           
                        /XiTrans=0~/fcce{?}~{calc}/XgAuto_dwn~












                  with the blinking panel cursor resting under the Left
                  bracket of:
                                       /fcce{?}
                  type in the name of the e<X>tract file to be "imported"
                  which is XAcctPay and press <Ret>urn.
                   
                   
                  The  cell  cursor will  drop down  to cell  AA29 (Range
                  Name:Auto_dwn) and the screen panel will display:
                   
                                       /fe~{?}~y
                  with  the blinking panel cursor  resting under the Left
                  Bracket of...............{?}
                  Again  type in the  e<X>tract file name....XAcctPay and
                  press  <Ret>urn. Finish  the installation  by selecting
                  from        the       Alternate        Macro       Menu
                  <ALT><A>;<C>ommands;<Q>uit  and Save the worksheet. You
                  are now finished installing the Special Register.
              
             Repeat this process for the other Special Registers you wish
             to  install.  If you  have not  already installed  the Check
             Register  then  refer  to  the  section  on  Check  Register
             installation earlier in the manual.
              
             ******INSTALLING THE SPECIAL REGISTER EXTRACT COMMANDS******
             Now  that you have created  the Special Registers with names
             that  are clear  to you,  you will  now need  to install the
             Special  Register  Extract commands  in the  General Journal
             worksheet (GJRL.wk*).
                  1)  Use the 1-2-3  command File Retrieve  (/fr) to load
                  the GJRL.wk* worksheet.
                  2)  Press the <F5> "Goto" Key to go to cell AG32 (Range
                  Name:X) it will read as AcctPybl. Using your cursor key
                  scroll  down seven (7) cells to cell AG39 or until your
                  screen panel displays the following:
                   
                     {Goto}Crit~+first>2100#AND#+first<2200~/dqeq
                  Assuming  that you  have installed  an Accounts Payable
                  Control  Account  #2100  then  this  command  would  be
                  correct  if your  Accounts Payable  are numbered #2101-
                  2199.  Notice that the  formula is >  greater than 2000
                  and < less than 2200.
                        
                        
                        
                        
                        
                        
                        
                       a)  Let's assume  your Chart of  Accounts is using
                       Account  #3100  as  the Control  Account  and your
                       Accounts  Payable are  numbered #3101  thru #3199.
                       You  would  first  use  the  1-2-3  command  Range
                       Unprotect  to unprotect  the cell.  Then press the












                       "Edit"  key <F2>. Use your cursor keys to move the
                       blinking  panel cursor until it  rests under the 2
                       of 2100 as illustrated  below:
                        
                         {Goto}Crit~+first>2100#AND#+first<2200~/dqeq
                       Use  the  del key  to  delete 2100  and  enter the
                       appropriate   account   number.  Then   move  your
                       blinking  panel cursor until it  rests under the 2
                       of  2200 and repeat the  procedure. If the command
                       looks  good you  may use  the 1-2-3  command Range
                       Protect (/rp) to lock up the cell.
                                              
                                              
                     Installing the Special Register  Commands (contd)
             3) Repeat the process for your Accounts Receivable. The cell
             to edit is located directly next to the cell you just edited
             and  the procedure  is identical  excepting for  the Account
             numbers that you install.
             4)  To install the  Extract commands for  extraction of Cash
             Receipts  and Cash Disbursements is similar to the procedure
             for  installing Receivables/Payables.  The command  you will
             need  to edit  for installing  the extract  command for Cash
             Receipts is located at cell AI39 and appears as below:
              
                 {Goto}Crit~+first=1000~{goto}drcrit~+firstdeb>0~/dqeq
             To edit this command you should again first unprotect (/ru)
             the cell and place your blinking cell cursor under the 1 of
                                     +first=1000~
             Use  your  delete  key  to  edit the  cell  and  be  sure to
             reprotect  the cell  when you have  completed installing the
             Account Number of you cash accounts. 
             ********************************************************** 
                  NOTE:  If you have more than  one Cash Account that you
                  would  like to post  to the Cash  Receipts Journal then
                  follow these instructions below ! 
             Assume  you have four Checking Accounts and you wish to have
             all  transactions for  each account extracted  posted to the
             Cash  Receipts Journal.  For example, you  have assigned the
             Four  Checking Accounts the  Account numbers 1000,1001,1002,
             and  1003. To install the command  so that all four accounts
             will  have the transactions extracted  you should proceed as
             follows:
             Edit the command below:
                 {Goto}Crit~+first=1000~{goto}drcrit~+firstdeb>0~/dqeq
             To read as below:
                {Goto}Crit~+first>=1000#AND#+first<=1003~{goto}drcrit~
                +firstdeb>0~/dqeq
                       The significant changes are highlighted.
             ************************************************************
             Follow the previous procedure to install the extract command
             for your Cash Disbursements transactions.
              
             ********************INSTALLATION SUMMARY********************
              












             Use this list to check that you have installed all necessary
             items for each WK* that requires installation.
                  1) GJRL.wk*: Company Name; Time Period; Installation of
                       all Account Transaction Extract Commands.
                  2)  SUBINSTL.wk*: SetUp; CreateAcct( Install Acct Name,
                       Page#,   Import   Command   to   Import  Extracted
                       Transactions File (ie 1000E), Retrieval Command to
                       Retrieve Next Account during Posting Process.
                  3) LDGINSTL.wk*: This WK* has installation requirements
                       like SUBINSTL.wk*
                  4)  BALSHEET.wk*: SetUp; CreateAcct (install listing of
                       G/L Acct Numbers and Names, and the Ledger Account
                       Balance  import commands of extracted B (ie 1000B)
                       Account Balance files.
             THIS IS THE MINIMUM REQUIREMENT FOR A FUNCTIONING ACCOUNTING
             INFORMATION SYSTEM.
                  5)  CONTROL.wk*: SetUp(Name,  Time Period,  and Control
                       Account   #)  AcctCall(   Install  Account  Names,
                       Install  and  Subsidiary  Account  Balance  Import
                       Commands).
                  6)  REGISTER.wk*:  Install(Name,Year,Name  of Register,
                       Name  of Xtrac(eg.  XAcctPay) File  to import into
                       the SPECIAL REGISTER, erase import file command.
              
             ***************JOURNALIZING YOUR TRANSACTIONS***************
             Now that you have installed all the worksheets and are ready
             to   begin  using  LEDGER  eXpress   it  is  time  to  begin
             Journalizing Transactions.
              
             GETTING STARTED.... After you have loaded the GJRL.wk* using
             the 1-2-3 command File Retrieve (/fr) your screen panel will
             query you for the current date. Activate the Alternate Macro
             Menu  by pressing <Alt><A> and the  menu will appear in your
             screen panel.
                  NOTE: If you have not yet "SetUp" the GJRL.wk* then you
                  may do so at this time.
             The menu in your screen panel should appear as below:
              
                  Commands Extract SetUp WriteChecks AccountList
             Select  <C>ommands and a submenu  will appear in your screen
             panel that will appear as below:
                   
                  JrnlEntry Edit SubPost Print Quit NewPage AutoFunctions
             Select  <J>ournalEntry.  The cursor  will become  active and
             when  it stops use your cursor  key to place the cell cursor
             at  cell A7. You are now ready to begin entering transaction
             information.
              
              
                        *****ENTERING JOURNAL TRANSACTIONS****
              
             It   is  of  the  utmost  importance  that  you  assign  all
             transactions a Transaction Number in Column A. IF you do not
             then  you will cause the system  to "crash" and you will not












             be  able to use  the system for  any productive purpose. You
             may  if you  wish to enter  the month of  the transaction or
             enter   a  number   that  will  be   incremented  with  each
             transaction.  It is recommended that you use the incremental
             method.  If you like  to leave a  blank between Transactions
             you  may, but you should still enter a transaction number in
             the A column. An example of transactions is shown below:
                   
              Trans#|Date    Description       Invoice #  Check #    
                  1 |1-5  CASH               |
                  1 |1-5   SALES             |
                  1 |                        |
                  2 |1-5  RENT EXPENSE       |
                  2 |1-5   CASH-rent         |
                  2 |                        |
                  3 |1-5  UTILITY EXPENSE    |
                  3 |1-5   CASH-utility      |
                  3 |                        |
              
             The format for entering transactions is as follows:
                  1) Enter the Trans# and press <Ret>urn. The cursor will
                  shift right.
                  2) Key in the Current Mth (1..12) and <Ret>urn. Key the
                  Current Date (1..31) and <Ret>urn. The cell cursor will
                  shift right.
                  3)  Enter  the Transaction  Item Description  and press
                  <Ret>urn. The cell cursor will shift right.
                  4)  Enter the Invoice  # if this is  a Sale or Purchase
                  and press <Ret>urn. The cell cursor will shift right.
                  5) Enter the Check# if applicable
                       NOTE:  Since this column is  used as an extraction
                       key field you must enter Check# in two manners. If
                       it  is a transaction you  desire to extract to the
                       CheckRegister or Cash Disbursements registers then
                       enter   the  number  as  a   value.  If  it  is  a
                       Transaction  you  do not  wish  to extract  to the
                       CheckRegister  or Cash  Disbursements Register (eg
                       You  desire to keep a  record of which checks were
                       used  to pay  expenses) then  you enter  the Check
                       Number  as a label. You  do this by first entering
                       an  apostrophe ' (eg '1000)  before you key in the
                       number.  This will prevent  the extraction process
                       from erroneously extracted information that should
                       not   be  posted  to  the  CheckRegister  or  Cash
                       Disbursements register.
                  and press <Ret>urn. The cell cursor will shift right.
                  6)  Enter the current Journal  page number and the cell
                  cursor will shift right.
                  7) Enter the Account Number and press <Ret>urn.
                             Journalizing Transactions (contd)
                  8)  Enter  the Debit  amount  to $999,999.99  and press
                  <Ret>urn.
                  9)  Enter the  Credit amount  to $999,999.99  and press
                  <Ret>urn.












                  10)  If your transaction is a  sale or purchase you mat
                  wish  to enter the  date of the  sale or purchase. This
                  will  help in computing Due Dates and Date Stamping the
                  Check Register. First enter the Month and <Ret>urn, the
                  Date and <Ret>urn , the Year and <Ret>urn.
                  11)  The cell cursor  will shift right  to the "Disc %"
                  field.  Enter  appropriate  terms (eg  2%)  offered and
                  <Ret>urn.
                  12) Enter the invoice term (eg 30 days) and <Ret>urn.
                       NOTE:    The   application    does   not   perform
                       calculations  on  "Prox" Terms  (eg 10th  and 25th
                       Prox).
             IF  YOU MAKE A KEYPUNCH  ERROR: You may back  up to an error
             made  without breaking out of  the Macro command. Simply use
             your  cursor key to  back up and  use your edit  <F2> key to
             make  corrections and  then use the  down arrow  key NOT THE
             RETURN  KEY to  write the correction  to the  cell. Then use
             your  cursor key to  return to your  original cell, That may
             sound  confusing but experiment  little and you will find it
             to be a great time saver versus breaking out of the Macro to
             make corrections.
                  NOTE:  IF  you  desire  to  have  a  blank  row between
                  transactions; when you go to stamp a Transaction number
                  to  column A of the blank row, key in the Trans# number
                  for  the blank row and use the down arrow cursor key to
                  move  down to the  next Transaction and  the Macro will
                  still perform normally !
                   
             After you have filled the General Journal, you may print the
             Journal before extracting the transactions by selecting from
             the  Alternate Macro  Menu <Alt><A>;<C>ommands;<P>rint. When
             you  are  satisfied  with  the  Journal  you  may  begin the
             extraction  process  by selecting  from the  Alternate Macro
             Menu <Alt><A>;<C>ommands;<S>ubpost.
              
             After  the computer extracts transactions  to a file it will
             beep  to let you know that it is processing properly. If the
             computer  does not beep  it means that it  has "hung" or you
             are  overwriting previous Extract Files that were not posted
             to  the Ledger Accounts this is a serious problem. Watch and
             listen  to the program extract the  first few accounts to be
             certain  it  is not  overwriting files.  If the  computer is
             silent   then   immediately   break   out   of   the   Macro
             <Control><Break>   and  contact   the  Program   Author  for 
             assistance.  
              
             After  you have completed extracting the information frm the
             filled  General  Journal you  will  need to  create  a Blank
             Journal.
                          Journalizing Transactions (contd)
             Select      from      the      Alternate      Macro     Menu
             <Alt><A>;<C>ommands;<N>ewpage.  The  computer will  save the
             old  General  Journal worksheet  increment the  Journal page













             number,   and  offer  you  the  option  of  saving  the  new
             worksheet.
              
             After  you  have extracted  the  Journal information;  it is
             recommended  that you  inspect the list  of extracted files.
             You  may use  the 1-2-3 command  File List  (/fl). Make sure
             that  every  Account has  a  corresponding Extract  file (ie
             1000,  1000E, 2000, 2000E, etc.).  If everything is in order
             then  you may post  the extracted transactions (1000E,2000E,
             etc)  to  the Ledger  Accounts.  Simply retrieve  the lowest
             numbered  Ledger Account and the computer will cycle through
             your  Chart  of  Accounts  posting  the  transactions.  This
             assumes  you  have  properly  installed  and  inspected  the
             transaction extract commands in the General Journal and have
             properly  installed and inspected the Autoexec Macro in each
             respective  Ledger Account. If you  set the Autofunctions to
             Print  and Extract  Account Balances  you will  have a "hard
             copy"  of your  Ledger and  you will  be ready  to prepare a
             Financial Statement. 
               
              
             ************THE ALTERNATE MACRO MENU COMMANDS*************** 
              
             All  Alternate Macro Menu's are invoked by keying <Alt><A> t
             the  same time. This listing of the Macro Menu commands will
             be made by worksheet.
              
             Common  Commands: There are several commands that are common
             to all worksheets, these are:
                  1) Print..follow your screen prompts.
                   
                  2)  Quit..This  command will  calculate  the worksheet,
                       protect  the worksheet globally  and offer to save
                       the worksheet.
                   
                  3)  Archive..use this  command when  you have  filled a
                       worksheet and are ready  to start a new worksheet.
                       (Note:  The  equivalent  command  in  the  General
                       Journal is NewPage). The Archive command will name
                       the  Archive file  in ascending  order and perform
                       housekeeping  chores such as incrementing the page
                       number,  resetting  input  forms,  and  forwarding
                       account balances. 
              
              
              
              
              
                                            
                                            
                        Alternate Macro Menu Commands (contd)
             WK*: GJRL...The General Journal
                  <Alt><A>:<C>ommands:<J>rnlEntry













                       Journalizes  your  transactions  into  the General
                       Journal.
                  <Alt><A>:<C>ommands:<E>dit
                       Editor  for the  Account Extract  Command Listing.
                       Use this during initial installation or during any
                       subsequent  additions to  your Chart  of Accounts.
                       Use  care  when  installing  the  commands,  it is
                       suggested  that you  set you  {NUMLOCK} to  on for
                       keying  in numbers. Be careful (if you do not have 
                       an "enhanced 101 key keyboard") when instructed to 
                       use  your cursor key that the {NUMLOCK} key is off 
                       or   you  use  the  {SHIFT}  key  to  disable  the 
                       {NUMLOCK}  key. Failure  to do  so will  cause the
                       program  to behave  erratically and  make accurate
                       installation difficult.
                  <Alt><A>:<C>ommands:<S>ubPost
                       This  command should  be used only  after you have
                       installed  the Extract commands  into the GJRL.wk*
                       and   you  have  filled  a  General  Journal  with
                       transaction  information.  This command  will Sort
                       the  transactions by  account and  Save the Sorted
                       information  into  <E>xtract  Files  (i.e.  1000E,
                       1001E,  1002E, etc.) ready  for posting (importing
                       into) to respective Ledger Accounts.
                  <Alt><A>:<C>ommands:<N>ewPage
                       This command will prepare a new GJRL.wk* after you
                       have  extracted  Transactions into  the respective
                       <E>xtract   files.  BE  CERTAIN   TO  EXTRACT  the
                       transactions  using <S>ubPost before  you create a
                       "NewPage"  !!!! this command will Save the Current
                       GJRL  (eg.  1GJRL), then  erase the  input fields,
                       increment  the Page#, and  Rename the GJRL.wk* (eg
                       2GJRL).  A Confirmation Submenu  exists to prevent
                       accidental selection.
                   <Alt><A>:<C>ommands:<A>utoFunctions
                       This  command sets the Automatic Print and Account
                       Balance Extract Functions. Setting the "AutoPrint"
                       Function  to  "YES=1"  will  cause  all individual
                       Ledgers  tp print during  the posting of extracted
                       transactions  (<E>xtract files)  to the respective
                       Ledger Accounts. Printing the Ledger Accounts will
                       slow the processing of the application. If you set
                       the "AutoBal" Function to "YES=1" the program will
                       extract  each  individual  Accounts  Balance after
                       posting   of   the   extracted   transactions  has
                       occurred. This will create the extracted <B>alance
                       files  that  will  be  used  for  transfering  the
                       Account     Balance     into     the     Financial
                       Statement/Balance Sheet. (more)....
                        
                        
                             Alternate Macro Menu Commands (contd)
                       This  command (AutoFunctions)  can be  called from
                       within  the  General  Journal  (GJRL.wk*)  or each












                       individual  Ledger Account  (Accounts created with
                       LdgInstl.wk* or SubInstl.wk*).
                  <Alt><A>:<E>xtract:<A>cctPybl
                       This  command which requires user-installation for
                       operation. This command will extract all Purchases
                       on  Account  for transfer  posting to  the Special
                       Registers.
                  <Alt><A>:<E>xtract:<A>cctRcvb
                       This  command which requires user-installation for
                       operation.  This command will extract all Sales on
                       Account   for  transfer  posting  to  the  Special
                       Registers.
                  <Alt><A>:<E>xtract:<C>ashRcpt
                       This  command which requires user-installation for
                       operation.  This  command  will  extract  all Cash
                       Receipts  for  transfer  posting  to  the  Special
                       Registers.
                  <Alt><A>:<E>xtract:<D>isbursmnt
                       This  command which requires user-installation for
                       operation.  This  command  will  extract  all  Csh
                       Disbursements  for transfer posting to the Special
                       Registers.
                  <Alt><A>:<E>xtract:<C>hecks
                       This  command which requires user-installation for
                       operation. This command will extract all Disbursed
                       Checks   for   transfer  posting   to   the  Check
                       Register.
                  <Alt><A>:<S>etup
                       Installs  your Company Name,  Date Info, and other
                       Miscellaneous  Items.  Follow  the  panel  prompts
                       during  SetUp.  It  is  recommended  to  use  this
                       command first when you load the worksheet.
                  <Alt><A>:<W>riteChecks
                       Allows   you  to  Write  Checks  from  within  the
                       Application.  If the  format of  the Check Writing
                       feature  does  not  fit  your  needs  then  please
                       contact the author for  a customized worksheet.
                  <Alt><A>:<A>cctList
                       This  command will  import your  Chart of Accounts
                       for Viewing into the General Journal worksheet for
                       viewing   if   you   create   a   worksheet  named
                       AcctList.wk*
             WK*: SUBINSTL.....Subsidiary Ledger Installation Worksheet
                  <Alt><A>:<I>nstall:<S>etUp
                       This  command is for  installing your company name
                       and  the  current  year. Be  certain  to  use this 
                       command before you begin installing accounts. 
                   
                   
                   
                   
                           Alternate Macro Menu Commands (contd)
                  <Alt><A>:<I>nstall:<C>reateAcct













                       This  command  is used  to create  each individual
                       Ledger  Account. Install  the Account  Name, Ldger
                       Page#,  the Import Extract File command, the Erase
                       Extract  File command (which  occurs after posting
                       the  Ledger Account), the  Account number, and the
                       Automatic  retrieval command for  the next Account
                       in  ascending numerical order.
                  <Alt><A>:<I>nstall:<M>odifyAcct#
                       Use this command when inserting a new account into
                       your  Chart of Accounts. You will edit the command
                       and  install(modify) the  command to  retrieve the
                       next higher Account number in ascending order.
                  <Alt><A>:<I>nstall:<P>aidInvoice
                       This  a command  that is unique  to the Subsidiary
                       Ledger.  This command  may be  used in conjunction
                       with  the <L>ist/Tabulate command.  If you entered
                       invoice information when Journalizing transactions
                       in  the General Journal then you will need to Mark
                       those  invoices  as paid  in  order to  prepare an
                       accurate  aging  report.  (Before  you  mark  your
                       invoices  you should use the List/Tabulate command
                       to  create a status report  on the invoices.) Upon
                       command  selection  the cell  cursor will  move to
                       cell  F8 (Range Name:Marker) containing:  INV #  :
                       The screen panel will display the message:
                   
                              Select Invoice to Mark Pd:<RETURN>1st
                       Press   <Ret>urn  and  use  your  cursor  keys  to
                       highlight   the cell containing the invoice number
                       you   wish  to   mark  as  paid.   Once  you  have
                       highlighted  the proper  cell press  <Ret>urn, The
                       cursor  will shift right to  the "Day" column. The
                       computer  will place  brackets ()  around the day.
                       Assume  the date is "1 1  87" the marked date will
                       appear  as "1  (1) 87". If  you make  an error and
                       mark  an invoice incorrectly then you will need to
                       "break"  out  of the  Macro  command and  edit the
                       error  using the  edit <F2>  key. Simply  type a 1
                       into the Day column to restore the original entry.
                  <Alt><A>:<C>ommands:<L>ist/Tabulate
                       This  command will list all  invoices in a special
                       area  of  the  worksheet then  tabulate  the total
                       Debits  and Credits  to a  particular invoice even
                       partial payments will be accepted. For an accurate
                       Report  it is imperative  that you correctly enter
                       all invoices into the General Journal.
                  <Alt><A>:<C>ommands:<B>alExtract
                       This  command  allows you  to extract  the Account
                       Balance  for  th  particular  account.  This  is a
                       duplicate  of  the  AutoBal command  and  you will
                       probably find little use for it.
                        
                             Alternate Macro Menu Commands (contd)













                       However,  if  you  need to  edit  the  account and
                       desire  to  "manually"  extract,  the <B>alExtract
                       command will be handy.
                  <Alt><A>:<C>ommands:<R>ptAge
                       Use  this command  when you  desire to  produce an
                       aging  report for the invoices. Again; if you have
                       not properly entered the invoices into the General
                       Journal,  then  the  inaccuracy  will  be  carried
                       through  the system.  The program  will remind you
                       that  all invoices  should be  marked; ask  if you
                       wish  to print  the report;  and then  display the
                       aging  report.  Follow the  panel prompts,  if you
                       wish  to view the report  then press <Ret>urn once
                       and  use your cursor key  to view the report, your
                       second  <Ret>urn will  print the  report or return
                       program control to you.
             WK*: LDGINSTL.....The Ledger Installation Worksheet
                  The  commands  here are  essentially   the same  as the
                  commands  the for  SUBINSTL.wk*. No  further discussion
                  will be made here.
             WK*:   BALSHEET.....The   Financial   Statements   Worksheet
                  contains  the Trial Balance,  Balance Sheet, and Income
                  Statement
                  <Alt><A>:<I>nstall:<S>etUp
                       Installs  your Company Name, the Current Month and
                       Year.
                  <Alt><A>:<I>nstall:<A>cctCall
                       Installs  the Account Balance  import command into
                       the  worksheet. Each General and Subsidiary Ledger
                       Account  will  require  an  import  command  to be
                       installed  into the  worksheet to  transfer import
                       the  Account Balance into  the Financial Statement
                       worksheet (BALSHEET.wk*).
                  <Alt><A>:<C>ommands:<M>thEndPost
                       Use  this  command when  you  desire to  produce a
                       Trial Balance, Balance Sheet, or Income Statement.
                       After  you have  completed installing  the Account
                       Balance  import commands you will need to run this
                       command   with  no  Account  <B>alance  files  for
                       importing  in  order  to  "set"  the  commands for
                       proper   operation.  You  should  also  "set"  the
                       commands  again  any  time  you  edit  the Account
                       Balance import command listing.
             WK*:  CONTROL.....The installation  worksheet for Subsidiary
                  Ledger Control Accounts.
              
                  <ALT><A>:<I>nstall:<S>etUp
                       Installs  the  Company  Name; the  Time  Period to
                       Account for; and the Control Account Number.
                  <ALT><A>:<I>nstall:<A>cctCall
                       This  command is installed  in an identical manner
                       to  BALSHEET.wk* Here, install the Account numbers
                       of the Subsidiary Ledger Accounts for import of
                             Alternate Macro Menu Commands (contd)












                       Subsidiary   Ledger  Account   Balances  into  the
                       CONTROL   account.  Again,  you   should  set  the
                       commands after installation or modification of the
                       transfer import command listing.
                  <ALT><A>:<C>ommands:<B>alPost
                       This  command will  import the  individual Account
                       Balances  into the  CONTROL.wk*. Be  sure that all
                       import  commands  have  been  installed  using the
                       <I>nstall;<A>cctCall command. Also be certain that
                       you previously Extracted the Account Balances from
                       the   Subsidiary  Ledger   Accounts  into  Extract
                       <B>alance Files (eg 1300b).
                  <ALT><A>:<C>ommands:<E>xtractBal
                       This command will allow you to Extract the CONTROL
                       ACCOUNT  BALANCE into a EXTRACT <B>ALANCE FILE for
                       posting  to the Financial Statement (BALSHEET.wk*)
                       worksheet.
                            NOTE: It will be necessary for you to Extract
                            the   CONTROL  Account   Balance  using  this
                            command.  Failure  to  do so  will  cause the
                            importation   of  Balances   into  the  Trial
                            Balance  to  cease before  completion  of the
                            importing   routine.  ALWAYS  BE  CERTAIN  TO
                            IMPORT  SUBSIDIARY  LEDGER  ACCOUNT  BALANCES
                            INTO  THE  CONTROL ACCOUNTS  AND  EXTRACT THE
                            CONTROL  ACCOUNT BALANCES  BEFORE YOU ATTEMPT
                            TO CREATE A FINANCIAL STATEMENT.
                       **************************************************
                        
             WK*: CHKRGSTR.....The Check Register
                  <ALT><A>:<I>nstall:
                       Install Company Name and Current Year.
                  <ALT><A>:<C>ommands:<M>arkClear
                       Assign  Trans#,  Date  Description,  &  Amount  of
                       Deposit.
                  <ALT><A>:<C>ommands:<E>xtract
                       This  command will access a SubMenu... The SubMenu
                       choices are:
                            1) OutStdItem
                                 This    command    will    extract   all
                                 outstanding items- be sure that you have
                                 marked  cleared (<M>arkClear) items from
                                 the bank statement.
                            2) Deposit
                                 will  provide a detailed  listing of all
                                 deposits.
             WK*:   REGISTER.....   The  Special   Register  Installation
                  worksheet
                  <ALT><A>:<I>nstall:
                       Install  Company Name, Current Year, Register Name
                       installed  (eg Cash, Cash Receipts, Sales etc) You
                       edit  the extract commands  in the General Journal
                       before you use the Special Registers.













             For  installation requirements on any worksheet please refer
             to the documentation for specific instructions ! 
              
                          MACRO X SERVICES SOFTWARE LICENSE 
              
                  1) GRANT OF LICENSE: In consideration of payment of the
                       LICENSE fee, which is a part of the price you paid
                       for  this product,  Macro X  Services, as licensor
                       grants you, the LICENSEE, a non-exclusive right to
                       use  this SOFTWARE and make copies for distribution
                   
                  2)  OWNERSHIP OF SOFTWARE: As the LICENSEE, you own the
                       magnetic  media or  other physical  media on which
                       the software is originally distributed but Macro X
                       Services   retains  title  and  ownership  of  the
                       SOFTWARE  recorded  on the  original disk  and any
                       subsequent copies of the SOFTWARE. 
                   
                  3) USE RESTRICTIONS: As the LICENSEE you are allowed to
                       transfer the SOFTWARE from one computer to another
                   
                  4)  TRANSFER  RESTRICTIONS: This  SOFTWARE  is licensed
                       only you, the LICENSEE, but may be trnsfered to 
                      others provided you do not charge any money.
                  5)  UPDATE POLICY: Macro  X Services may,  from time to
                       time, create updated versions of this software. At
                       it's  option, Macro X Services will make available
                       such  updates  as they  become available  to those
                       licensees  who have  paid the update  fee (if any)
                       and  have Registered  this license  by mailing the
                       enclosed form. 
                   
                   
                                DISCLAIMER OF WARRANTY  
             This  software; LEDGER  eXpress ;  and the  documentation is
             distributed  on an as-is  basis. and without  warranty as to
             performance.  Any statements by the author do not constitute
             warranties  and  shall  not  be relied  on  by  the  user as
             warranties. 
              
             LEDGER eXpress is distributed without any express or implied
             warranties   whatsoever  !  Because   of  the  diversity  of
             conditions  under  which this  application  may be  used; no
             warranty of fitness for a particular purpose is offered. The
             user  is advised to test  this application thoroughly before
             relying on it.  
              
              
              
              












                                   LIMITED WARRANTY 
             THE  AUTHOR  SHALL  NOT  BE  HELD  LIABLE  FOR  ANY  DIRECT,
             INDIRECT,  CONSEQUENTIAL  OR  INCIDENTAL  DAMAGES (INCLUDING
             DAMAGES FOR LOSS OF BUSINESS PROFITS, BUSINESS INTERRUPTION,
             LOSS OF BUSINESS INFORMATION, AND THE LIKE) ARISING FROM THE
             USE  OR INABILITY TO USE SUCH PRODUCT EVEN IF THE AUTHOR HAS
             BEEN  ADVISED OF  THE POSSIBILITY  OF SUCH  DAMAGES. Because
             some  states  do not  allow the  exclusion or  limitation of
             liability  for consequential damages  or incidental damages,
             The above limitation may not apply to you. 
              
                                User Registration Form 
                                            
             License Number:_____________ 
              
             LICENSEE NAME________________________________________ 
              
             COMPANY NAME_________________________________________ 
              
             ADDRESS______________________________________________ 
              
             CITY, STATE__________________________________________ 
              
             PHONE________________________________________________ 
              
              
             Other Products by Macro X Services 
              
             PASSWORD..A password program for Hard Drive users.   $ 15.00 
              
             PERSONNEL.wk*..1-2-3 Employe Database System.        $ 25.00 
                      Store Information on your employees 
              
             SETPRINT..Control Epson or Okidata from the Keyboard $ 15.00 
              
             MANUCOST..Compute Manufacturing Cost Variance        $ 50.00 
                        
             MENU DIRECTOR..Hard Drive Program Director           $ 20.00 
              
             BUDGET.wk*..Requires Modification to your Specs      $ 25.00           
                                      Charge for Modification     +   ??? 
              
             SPECIALIZED TEMPLATE DEVELOPMENT AVAILABLE FOR: 
              DBASE III, LOTUS 1-2-3, MICROSOFT WORKS, PFS FIRST CHOICE 
              
             Macro   X  Services  also   distributes  Public  Domain  and
             "Shareware"  programs that have  been tested for operational
             functionality for a nominal distribution charge. 
              
              
             IF  YOU WOULD  BE INTERESTEDS IN  BETA TESTING   A 1-2-3 WK1
             TEMPLATE  FOR  A  PAYROLL  SYSTEM  PLEASE  CONTACT  MACRO  X
             SERVICES. 








```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0857

     Volume in drive A has no label
     Directory of A:\

    FILES857 TXT      1337   1-01-80  12:17a
    GO       BAT        38   6-14-88  10:13a
    GO       TXT      1541   6-14-88  10:08a
    INSTALL  BAT       465   6-14-88  10:21a
    LEDGER_X ARC    187167   6-08-88  11:40a
    MANUAL   BAT        21   6-14-88  10:09a
    PKXARC   COM     11482  12-15-86
            7 file(s)     202051 bytes
                          115712 bytes free
