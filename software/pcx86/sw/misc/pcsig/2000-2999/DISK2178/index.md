---
layout: page
title: "PC-SIG Diskette Library (Disk #2178)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2178/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2178"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "SBAS GENERAL LEDGER"

    Finally, an easy double entry bookkeeping system designed around a
    general ledger! SBAS (Small Business Accounting System) lets a small
    company track income and expenses and print reports on demand.
    
    SBAS doesn't have modules for receivables, payables, and payroll, but
    instead uses the general ledger system to perform these tasks.
    Consequently you can't print invoices, but it does keep everything
    simpler.
    
    Its on-line help screen is very helpful. And it automatically checks
    for valid account numbers during entry and allows new accounts to be
    added during entry.
    
    Installing the program isn't difficult. The manual and program
    provide the information to set up your books in a short period of time.
    Easy-to-read reports can be produced as needed. The system uses a five-
    digit account numbering system, and the manual suggests a certain way of
    setting up the accounts, but you can change it if you want.
    Overall, this is a good accounting package for businesses that
    don't need all the modules.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE2178.TXT

{% raw %}
```
Disk No: 2178                                                           
Disk Title: SBAS General Ledger                                         
PC-SIG Version: S1                                                      
                                                                        
Program Title: Sbas Gerneral Ledger                                     
Author Version: 1.5                                                     
Author Registration: $20.00                                             
Special Requirements: None.                                             
                                                                        
If you do not need a full blown accounting program then SBAS may be     
the program for you. SBAS [SMALL BUSINESS ACCOUNTING SYSTEM] is a       
double entry bookkeeping system which is designed around a general      
ledger.  SBAS enables a small company to track income and expenses      
and to print reports on demand, which is something that more expensive  
program do not always allow.                                            
                                                                        
SBAS does not contain the modules for receivables, payables, and        
payroll, but instead uses the general ledger system to perform these    
tasks.  Consequently you cannot print invoices.  On the other, SBAS     
will keep track of your income and expenses easily and it allows you    
to print numerous reports whenever you need them.  On line help screen  
is very helpful during those frustrating time.  SBAS also automaticly   
check for valid account numbers during entry and new accounds may be    
added during entry.                                                     
                                                                        
Installing the program is not difficult.  The manual and program        
provides the information to set up your books in a short period of      
time.  Once done, reports can be produced as needed and they are more   
than adequate and easy to read.  The system uses a five digit account   
numbering system, and the manual suggests a certain way of setting up   
the accounts, but you can change it if you want.                        
                                                                        
Overall, this is a good accounting package for those not needing all    
of the additional modules.                                              
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## GL.DOC

{% raw %}
```






                          MILLROSE CORPORATION

                     SMALL BUSINESS ACCOUNTING SYSTEM
                          SBAS GENERAL LEDGER
                       Copyright (c) 1986 - 1989

                      FOR NON-MANUFACTURING BUSINESS


                             Version 1.5

                          A SHAREWARE PROGRAM



                    THIS PROGRAM REQUIRES 384K RAM MEMORY



                    HELP SCREENS ARE AVAILABLE ON LINE








              DISCLAIMER

              Millrose Corporation has taken due care in the preparation of
              this program and the related documentation, including but not
              limited  to  development  and  testing.   Millrose  makes  no
              expressed  or  implied  warranty of any kind in regard to the
              programs or the documentation.  In no event shall Millrose be
              liable for incidental or consequential damages in  connection
              with or arising from furnishing, performance or use of any of
              these programs.  Further Millrose reserve the right to revise
              the  programs  and/or  the related documentation from time to
              time  without  any  obligation  ot  notify  any  persons   or
              organizations of such revisions or changes.




                                        Millrose Corporation
                                        7210 Jordan Ave., B-22
                                        Canoga Park, Calif., 91303
                                        (818) 348-3284














                                   MILLROSE CORPORATION

                                   SBAS GENERAL LEDGER


              The SBAS GENERAL  LEDGER  is  a  easy  to  use  program.  Our
              program  is  designed for the small company that need an easy
              to use basic accounting program.  We have attempted  to  make
              all  of  the  menus  self-explanatory.  A  basic  bookkeeping
              knowledge is helpful to use the program. On line help screens
              are available for the first time on Version 1.5.  Where  they
              are  available  you  will  see  'F2  = HELP' displayed on the
              screen.

              The program is a double  entry  system,  therefore  for  each
              credit  entry  or  entries there must be an offsetting debit.
              The program posts each entry  after  it  is  entered  so  the
              balances  are  always up to date.  This allows you to view or
              print an Income Statement of Balance Sheet at any time during
              the accounting period.  Please refer to Appendix A  for  some
              information  on basic bookkeeping.  In the event you have any
              accounting questions you should contact your  accountant  who
              prepares your Income Tax returns.

              Do not use the Master disk you purchased except to make a
              work copy of the program and files. (See Page 3). Also see
              page 11 for some ideas for setting up your SBAS GENERAL
              LEDGER books.

              The single most important  portion  of  the  program  is  the
              setting  up the Chart of Accounts.  You must exercise a great
              amount of care in establishing the  Chart  of  Accounts.  The
              Chart  of Accounts will determine what your financial reports
              will  look  like.   The  order  of  the  Chart  of   Accounts
              determines the order of the account printing on the financial
              reports.  Certain  accounts  in  your file will be for report
              titles, headings and totals, and skipping to a new page.

                   The  Chart  of Accounts is completely user defined.  The
              Account  number  may  be  up  to  five  digits.  If  you  are
              presently  using  a  three  or  four  digit account number we
              suggest that you simply add zeros at the end of  your  number
              to create a five digit number.  A sample Chart of Accounts is
              contained  in  APPENDIX B.

                   In our sample Chart of Accounts we are using the
              following:
                            ASSETS                 10000-29999
                            LIABILITIES            31000-39999
                            EQUITY                 49900-49999
                            INCOME                 50000-51990
                            EXPENSES               60000-69995

                   Refer to Appendix B for our sample Chart of Accounts.

                   However, you may use any numbers of your choice provided
              they  are in the sequence of:  Assets,  Liabilities,  Equity,
              Income, Expenses.

         PAGE -1-







                   The chart of  Accounts  requires  that  you  define  the
              account type,  report type,  normal balance for each account.
              In addition,  you must indicate  the  total  level  for  each
              'total'  account.  The  program allows you to have up to four
              total levels on your Balance Sheet.  This would be three  sub
              totals  and  an  overall  total  of  your  Assets and of your
              Liability/Equity.  The total level you choose also determines
              the column in which the totals  will  print.  On  the  Income
              Statement  the  print columns are predetermined.




                               ACCOUNT TYPE
                               ------------
                   This will requires each account be identified as:

                        0     Posting Account  (accepts detail data)
                        1     Title Account    ( Type 1,2,3,4 do not
                        2     Total Account    (   accept detail data
                        3     Heading Account  (
                        4     Retained Earnings (Current Year)

                                          Type 1
                 Title Accounts will identify the  main  sections  of  your
              financial reports,  ie.  ASSETS, LIABILITIES, EQUITY, INCOME,
              and EXPENSE.

                                          Type 2
                  Total Accounts will identify  when  and  where  you  will
              print  your  subtotals  and totals on your financial reports.
              The program allows for up to four levels  of  totals  on  the
              Balance Sheet. Refer to a later section  which  discusses  total
              levels in more detail.

                                          Type 3
                  Heading Accounts will identify the  subsections  of  your
              financial  reports,  ie.  Cash in Bank,  Accounts Receivable,
              Fixed Assets, Current Liabilities, etc.


                                          Type 4
                   Retained  Earnings  Account.  The programs requires that
              you identify one(and only one) account  as  account  type  4.
              The   program,   when   printing   the   Balance  Sheet  will
              automatically calculate the Current  Year  Retained  Earnings
              and  reflect  the amount in this account.  Your Balance Sheet
              will not be correct if you fail  to  include  the  Type  4  -
              Retained Earnings.

                                       REPORT TYPE
                                       -----------

                   Each record in your Chart of Accounts must be identified
              as  either  to  appear on the Income Statement or the Balance
              Sheet.  All Income Statement Accounts must be Report Type '1'
              and all Balance Sheet Accounts must be Report Type '2'.

         PAGE -2-






                                    NORMAL BALANCE
                                     --------------

                   The program requires that all Asset and Expense Accounts
              be identified as having a normal debit balance:  Code 1.  All
              Liability,  Equity, and Income accounts must be identified as
              having a normal  credit  balance:  Code  2.  All  Assets  and
              Expense  accounts must be identified as having a normal debit
              balance.


                                       TOTAL LEVEL
                                       -----------

                                      BALANCE SHEET

                   The  Balance  Sheet  will  have three columns of numeric
              information.  The first column will print the posting account
              amounts,  and the level 1 total  amount.  The  second  column
              will  print  the level 2 total amount.  The third column will
              print the level  3  total  amounts  and  the  level  4  total
              amounts.  The  use  of a level 4 total will cause the program
              to print a single line before the total amount, a double line
              after the total amount and eject to a new page.


                                     INCOME STATEMENT

                   This report is primarily pre-defined so far as where  on
              the  report  your  columns  will  appear.  Total accounts are
              required at the end of your income accounts and at the end of
              your expense accounts.  These should be identified  as  Total
              Level  3.  This  identification  is necessary should you at a
              later date decide to upgrade to Version 2.0+.
























         PAGE -3-







                               GETTING STARTED

                   The first and most important item is to make a work copy
              of the program disk,  then put the original disk  in  a  safe
              place.  The Original Disk should be used only for making work
              copies of the  program  disk.  To  make  a  work  copy  place
              original  disk in drive A and a blank formatted disk in drive
              b:

                       Copy gl.exe b:/v        (If hard disk copy to the
                       Copy  *.dbf b:/v         appropriate directory/sub
                       Copy  *.ntx b:/v
                       Copy  *.mem b:/v

              Be  sure  your config.sys contains the following:  files = 20
              buffers = 15.  Refer to your DOS manual for setting up and/or
              modifying your config.sys.




                   This program is designed to work on a  computer  with  a
              floppy drive, or on hard drive.  Refer to your DOS manual for
              setting up a Hard Disk sub directory.

              If you are using a floppy system place your new work disk  in
              drive A.  A> GL {return}.


                 FOR HARD-DISK SYSTEMS a set-up may be as follows:
               Root directory
                    |--ACTG (sub directory)(do not use root directory)
                    |     Gl.exe
                    |     zzz.mem
                    |     *.dbf files
                    |     * .ntx files

               On a hard disk go to your sub directory and type GL {return}

              The first screen to appear will be similar to the following:

                 ----------------------------------------------------------
                |                MILLROSE CORPORATION                     |
                |                                                         |
                |          SBAS GENERAL LEDGER Version 1.5                |
                |                                                         |
                |   Copyright (c) 1986-1989     Millrose Corporation      |
                |                                                         |
                |               All rights reserved                       |
                |                                                         |
                |               A Shareware Program                       |
                |                                                         |
                  -------------------------------------------------------

                     TRY THE PROGRAM - IF YOU LIKE IT - SEE DETAILS
                                AT END OF DOCUMENTATION

              Press any key to continue...

      PAGE -4-





              The next screen will be:



       Company Name                      Accounting period ending xx/xx/xx
        -------------------------------------------------------------------
        Copyright(c) 1986-1989  Millrose Corp., All rights reserved.

                           SBAS GENERAL LEDGER - MAIN MENU

                      1.  GENERAL INFORMATION FILE MAINTENANCE

                      2.  ENTER/PRINT TRANSACTION

                      3.  FINANCIAL REPORTS

                      4.  CHART OF ACCOUNT FILE MAINTENANCE

                      5.  EXIT or SELECT NEW COMPANY

                      6.  UTILITY PROGRAMS



                          Enter Choice   --

        -------------------------------------------------------------------

              NOTE:  The default selection will be to '5' EXIT.
                On  all other menu screens the default will be
                to return to the previous menu.

              Your first selection should be '1' GENERAL  INFORMATION  FILE
              MAINTENANCE.  This  screen  asks  you  for ten (10) pieces of
              information.  Some of the items are only for your information
              and not essential to the operation of the program.























         PAGE -5-








                   1.  Company Number
                        Not significant to this version of the program.

                   2.  First Sales Account:
                        This is very important as it starts the selection
                        for the calculation of gross income.  We suggest
                        the account number entered be the Title Account for
                        your income.

                   3.  Last Sales Account:
                        The is very important as  it  determines  the
                        ending  account  for the calculation of gross
                        income.  The account number entered  must  be
                        the last Total account in the income group.

                   4.  Fiscal Year Ends:
                        For information purposes, but not essential to the
                        operation of the program

                   5.  Company Name:
                        Your Company name.  After this has been entered it
                        will be reflected on the top of the screen of the
                        Main Menu and on all printed reports.

                   6. 7. 8.  Company Address, and Federal ID number.  For
                        information purposes, but not essential to the
                        operation of the program.

                   9.  Fiscal Month End:
                        This must be the ending date of the current
                        accounting period.  This date will appear on
                        the top of all of your printed reports.
                        NOTE:  This is NOT the fiscal year end, but the
                               end of the Current Accounting period.

                  10.  Footer
                         This allows for up to fifty (50) characters and
                         spaces of information.  The information will be
                         printed at the bottom of your Income Statement and
                         Balance Sheet.

                   The completion  of  the  above  information  may  be  as
              important   as  the  proper  preparation  of  your  Chart  of
              Accounts.  Items 2  &  3  are  absolutely  essential  in  the
              preparation  of  the  Income  Statement.  Items 5 & 9 will be
              printed on the top lines of all your reports.













         PAGE -6-






              SELECTION '2' MAIN MENU

                               ENTER/PRINT TRANSACTIONS

                   The  selection of '2' will bring you to a sub menu which
              will be similar to the  following:  This  is  used  for  both
              entering and viewing and/or printing your Cash Receipts, Cash
              Disbursement and Journal Entry Journals.

                                ENTER/PRINT TRANSACTIONS
                                ------------------------

                        1.  ENTER CASH RECEIPTS

                        2.  ENTER CASH DISBURSEMENTS

                        3.  ENTER JOURNAL ENTRIES

                        4.  PRINT TRANSACTIONS

                        5.  RETURN TO PREVIOUS MENU

                         Enter Choice   --


              From this menu you select the type of transaction you wish to
              record.  When you select one of the 'Enter' programs a screen
              format will appear.  At the top left of your screen  it  will
              identify  the type of transaction you are about to enter.  On
              the top right of the screen will appear the fiscal period  to
              be  used in recording these transaction.  (This fiscal period
              may be changed by  selecting  '1'  GENERAL  INFORMATION  FILE
              MAINTENANCE from the main menu.)

              Near  the  top  right  of  your  screen  will appear the open
              balance of the journals you are entering.  In the  event  you
              did not 'zero' out a prior journal,  the open balance will be
              displayed.  You should have  previously  prepared  an  adding
              machine total of your receipts and/or disbursements which will
              verify  the  total  after  all the activity has been entered.
              Near the bottom of the screen will appear seven (7) items  to
              be  completed in recording the transaction.  In the event you
              make an  error  in  entering  any  item  you  will  have  the
              opportunity   to  correct  the  information  after  you  have
              completed entering the seven items.  The  only  exception  to
              this  is  your cannot change an account number.  In the event
              there is an error in the account number, your must delete the
              entry (selection 99) and reenter the entire entry.  The  Cash
              Receipts  program  will allow you to enter only in the CREDIT
              field of the format.  The DEBIT entries must  be  entered  as
              negative   amounts.(INCLUDING  OFFSET  TO  CASH).   The  Cash
              Disbursements program will you to enter  only  in  the  DEBIT
              field of the format.  The CREDIT entries (INCLUDING OFFSET TO
              CASH) must be entered as a negative amount.




         PAGE  -7-







              This  program  allows  you  to  have  multiple bank accounts,
              therefore the  program  DOES  NOT  automatically  offset  the
              entries to a Cash Account

              Remember this is a double entry system  which  requires  that
              the  debits and credits total must agree for your books to be
              in balance.  You should not offset to Cash  each  entry,  but
              make  on  entry  for  the  total  after all activity has been
              entered.

              The Journal Entry program allows  you  enter  both  DEBITS  &
              CREDITS  on the screen format.  You must exercise care on the
              Journal Entry format to be sure you  are  correctly  entering
              the DEBIT & CREDIT amounts.  If 'REF',  'Date', 'Description'
              or Comment fields are left blank they  will  default  to  the
              previous entry.  DO NOT ENTER BOTH A CREDIT & DEBIT AMOUNT ON
              A  JOURNAL  ENTRY.  THE PROGRAM WILL NOT FUNCTION PROPERLY IF
              YOU ENTER BOTH A DEBIT AND CREDIT AMOUNT ON  THE  SAME  INPUT
              SCREEN. If you have properly entered your Journal Entries the
              total at the top right of the screen will be ZERO.

              SELECTION '3' MAIN MENU
                               FINANCIAL REPORTS
                  The selection of Financial Reports  will  display  a  sub
              menu  of the various financial reports.  The sub menu will be
              similar to the following:

                               FINANCIAL REPORTS MENU

                        1.  Trial Balance

                        2.  General Ledger - Current Month

                        3.  General Ledger - Year-to-Date

                        4.  Balance Sheet

                        5.  Income Statement

                        6.  End of Accounting Period

                        7.  Fiscal Year End

                        8.  Return to Main Menu

                        Enter Choice  --


                                      TRIAL BALANCE

                   The Trial Balance may be viewed on the screen or printed
              at any time during or at the end of an accounting period.






         PAGE -8-








                            GENERAL LEDGER - CURRENT MONTH

                   The General Ledger may only be a  printed  report.  This
              report  should be run after you have entered all of your Cash
              Receipts,  Cash Disbursements,  and Journal Entries  for  the
              current  accounting period.  Normally you would run the Trial
              Balance before this report to be sure all  of  your  accounts
              are  in  balance.  This  report  will  start with the closing
              balance  of  the  previous  month,  and  detail  all  of  the
              transactions  of the period.  Each detail transaction will be
              identified by date,  transaction number,  and source  of  the
              transaction.  The  source codes are:  Cash Receipts 11,  Cash
              Disbursements 12,  Journal Entries 13.  In the event you have
              a  question  on  any  detail  item the transaction number and
              source  will  enable  you  to  quickly  locate  the  original
              transaction.

                              GENERAL LEDGER - YEAR-TO-DATE

                   This General Ledger - Year-To-Date may only be a printed
              report.  This  report is similar to the Current Month General
              Ledger,  except each account starts with the beginning of the
              fiscal year balance,  and details all of the transactions for
              the year.  The same information is printed on the  report  as
              the Current Month General Ledger.

                   NOTE:  This  report  may  only  be  run  after  you have
              completed all of your monthly reports and  run  the  "END  OF
              ACCOUNTING PERIOD" program.

                                      BALANCE SHEET

                   This  report  is  user  defined.  Please  refer to prior
              sections for preparation of the Chart of Accounts and General
              File  Maintenance  Information   for   the   information   in
              formatting  the  Balance  Sheet  to your specifications.  The
              Balance Sheet may  be  either  previewed  on  the  screen  or
              printed.

                                 END OF ACCOUNTING PERIOD

                   This program is run after you have printed and carefully
              reviewed all of  your  monthly  reports.  This  program  will
              transfer  all  of the monthly detail information to the year-
              to-date History file and erase the same information from  the
              monthly  detail  file.  In  addition  the account master file
              will be updated to reflect the  start  of  a  new  accounting
              period.  If you fail to run this procedure at the end of each
              accounting    period    subsequent   Cash   Receipts,    Cash
              Disbursements and Journal Entry  Journals  will  contain  all
              information  to  date.  Further  the current month portion of
              your Income Statement will include all information to date.






         PAGE -9-





                                     FISCAL YEAR END

                   This program is run only at the end of your fiscal  year
              after all of the monthly reports and the Year-to-Date General
              Ledger  have  been  completed.  Each  of  the  aforementioned
              reports should be reviewed carefully for accuracy before this
              program is run.  This program will erase all  of  the  detail
              for  the  fiscal  year  and change information in the Account
              Master file for the new fiscal year.  We recommend  that  you
              DO  NOT  run  the  procedure  until after your Accountant has
              reviewed your financial reports and is satisfied that all  of
              the information is correct for Income Tax Purposes. See 
              comments at end of sample chart of account.

              SELECTION '4' MAIN MENU

                            CHART OF ACCOUNT FILE MAINTENANCE

                   This selection takes you to a sub menu which allows  you
              to:
                          1.  ADD  A  NEW  ACCOUNT
                          2.  CHANGE/DELETE  AN EXISTING ACCOUNT
                          3.  LIST ACCOUNTS.

                   The ADD and CHANGE selections is used  for  entering  or
              changing  all  posting  accounts,   title  accounts,  heading
              accounts and total accounts.  In the event you  discover  you
              have made an error in entering an account the information may
              be corrected or the account deleted by selection 2.

                   The  LIST  ACCOUNTS  will  take  you to a sub-menu which
              allows you  list  all  accounts,  including  posting,  title,
              heading,  & total accounts or only the posting accounts.  The
              listing of posting accounts usually would be  made  available
              to   the   bookkeeper   and   the  data  entry  operator  for
              verification of  the  posting  accounts.  The  complete  list
              usually  would  be  for  the  person  who  is responsible for
              formatting of the financial reports.
                       ---------------------------------

              SECTION '5' MAIN MENU

              This selection will exit the program.

              SELECTION '6' MAIN MENU
                                UTILITY PROGRAMS

                 This selection takes you to a sub menu which allows you to
              select your monitor color, or to reindex the data files.

                 It should not be necessary you reindex  your  data  files,
              unless  you  are unable to display a record you know to be in
              the data files.






         PAGE -10-






              We  have  now  added  an additional DBF to the program.  SAV.
              DBF This DBF contains a sample  chart  of  accounts.  In  the
              event  you  wish  to use it for testing or ?:  This should be
              done on a separate or new work disk.

              Use the following DOS commands.
                     1.  Rename Master.dbf Mstr.dbf
                     2.  Rename Sav.dbf Master.dbf
              After you have complete the above  DOS  commands  access  the
              SBAS  GENERAL  LEDGER Program by typing 'GL' (without quotes)
              and press return.  When  you  reach  the  Main  Menu  of  the
              program  the  first  thing you MUST DO is use option 6 - Then
              from the sub menu select 'Reindex Data Files'.

              MAKE FREQUENT BACK UP COPIES OF YOUR DATA FILES.
                  You should make frequent back  up  copies  of  your  data
              especially  when  you  spend  a large amount of time entering
              data.  We recommend that in addition, you make a back up copy
              at the end of each accounting period during the year.

              Sometimes in the course of computer events your  index  files
              become corrupted,  and you can not get the proper information
              displayed or printed.  Should this happen use Option 6,  then
              from the Sub Menu select 'reindex data files'.
                       -----------------------------------
          
          
              SETTING UP YOUR BOOKS WITH SBAS GENERAL LEDGER
          
                  To set up your books on SBAS GENERAL LEDGER  the  initial
              entries MUST be made by journal entry.  (Selection 2  of  the
              Main Menu then Selection 3 of the sub menu) DO NOT ATTEMPT TO
              ENTER  ANY  FINANCIAL DATA AS YOU ARE ESTABLISHING YOUR CHART
              OF ACCOUNTS.  When you use the journal entry method  you  are
              able  to prepare reports to be sure your books are in balance
              before  your  proceed  with  current  activity.  If  you  are
              starting  at the beginning of a fiscal year enter the closing
              trial balance of your old books.  Run a Journal entry  report
              and  trial balance to be sure you are in balance.  The debits
              and credits of your trial balance must equal each other. When
              you are in balance go to the Financial Reports menu  and  run
              (a.) End of Accounting Period (b.) End of Fiscal Year.

              If you are starting mid-year use the journal entry method and
              enter all the information as of your last  month  end  close.
              Be  sure you are in balance,  then from the Financial Reports
              menu run 'End of Accounting Period'.












         PAGE -11-








                                        APPENDIX A


                             SOME BASIC BOOKKEEPING THOUGHTS

              We  are  not  your  accountant  and  we  do not pretend to be
              experts in the field.  Whenever,  in doubt you should  always
              check  with  your  Public Accountant who does your Income Tax
              Returns.  Income Tax returns is one of the main  reasons  for
              keeping  complete and accurate books of record.  This program
              will provide detail listings of your activity, however in the
              event you are audited the IRS may  want  to  see  the  actual
              documents,  such as the cancelled check or a receipt.  If you
              are audited the detail  listings  provided  by  this  program
              should greatly assist the situation.

              In  the  simplest terms bookkeeping is made up of a series of
              debit and  credit  entries.  In  the  broadest  sense  Debits
              usually  are:  ASSETS and EXPENSES.  Credits usually are your
              LIABILITIES, EQUITY and INCOME.  The total Debits must always
              equal  the  total  Credits.  If  not,  your  books  will  not
              balance.   The   Balance   Sheet  consists  of  your  ASSETS,
              LIABILITIES and EQUITY.  The  Income  Statement  consists  of
              your Income and Expenses.


              INCOME:  Income  or  revenue  is  your sales.  In your record
              keeping it is essential you distinguish between money  coming
              in  which  constitutes  Income.  Money  coming  in  from your
              initial investment or loans to the business  are  not  Income
              for  Tax Purposes.  A sale of a Capital Asset must be treated
              differently the  Income  from  your  product  sales.  When  a
              Capital Asset is purchased (equipment,  furniture, etc) it is
              subject to depreciation.  The depreciation  expense  must  be
              periodically  entered  in  your  books.  A  separate detailed
              record  of  Capital  Assets  should   be   maintained.   Your
              Accountant can advise you on the best acceptable depreciation
              method for your Federal and your State Income Tax returns.

              EXPENSES:  All  expenses  recorded  on  your  books  must  be
              'ordinary and necessary' to the operation  of  the  business.
              Personal expenses paid by the business are not deductible for
              Income  Tax purposes.  See the above paragraph for additional
              information on depreciation.

              PROFIT:  Income less Expenses will  be  the  profit  of  your
              business.  Some  non-cash  deductions,  such as depreciation,
              are deductible for Income Tax purposes.  Most small  business
              maintain  their  books  on  a  Cash  Basis,  however  if your
              Accountant has determined it is best for you  to  be  on  the
              Accrual  Basis  be  sure  your Accountant explains all of the
              ramifications the both methods of accounting.





             APPENDIX A - PAGE 1








                                 APPENDIX B


                             SAMPLE COMPANY
                            CHART OF ACCOUNTS
     =========================================================================

        ACCOUNT    DESCRIPTION          REP  ACC  NRN  TOT    TYPE OF ACCOUNT
                                        TYP  TYP  BAL  LVL
    -------------------------------------------------------------------------
    10000      ASSETS                    2    1    1    0       TITLE
    10011      CASH IN BANK              2    3    1    0       HEADING
    10100      OPERATING ACCOUNT         2    0    1    0       POSTING
    10990      TOTAL CASH IN BANK        2    2    1    2       TOTAL
    12000      ACCOUNTS RECEIVABLE       2    3    1    0       HEADING
    20400      ADVANCES - STOCKHOLDER    2    0    1    0       POSTING
    20460      TRADE RECEIVABLES         2    0    1    0       POSTING
    20990      TOTAL RECEIVABLES         2    2    1    2       TOTAL
    20999      TOTAL CURRENT ASSETS      2    2    1    3       TOTAL
    21001      INVESTMENTS               2    3    1    0       HEADING
    21550      STOCKS                    2    0    1    0       POSTING
    22990      TOTAL INVESTMENTS         2    2    1    2       TOTAL
    26499      FIXED ASSETS              2    3    1    0       HEADING
    26500      COMPUTER EQUIPMENT        2    0    1    0       POSTING
    26550      ACCUM DEPR COMPUTER EQUIP 2    0    1    0       POSTING
    26999      TOTAL FIXED ASSETS        2    2    1    2       TOTAL
    29998      TOTAL OTHER ASSETS        2    2    1    3       TOTAL
    29999      TOTAL ASSETS              2    2    1    4       TOTAL
    31000      LIABILITIES & EQUITY      2    1    2    0       TITLE
    31001      CURRENT LIABILITIES       2    3    2    0       HEADING
    32001      LOANS PAYABLE             2    0    2    0       POSTING
    32100      ACCOUNTS PAYABLE          2    0    2    0       POSTING
    32450      ADV. PAY - STOCKHOLDER    2    0    2    0       POSTING
    33000      TOTAL CURRENT LIABILITIES 2    2    2    2       TOTAL
    39999      TOTAL LIABILITIES         2    2    2    3       TOTAL
    49909      EQUITY                    2    1    2    0       TITLE
    49910      CAPITAL STOCK             2    0    2    0       POSTING
    49950      RETAINED EARNINGS         2    0    2    0       POSTING
    49951      CURRENT YEAR EARNINGS     2    4    2    0       RETAINED EARN.
    49980      TOTAL EQUITY              2    2    2    3       TOTAL
    49999      TOTAL LIAB. & EQUITY      2    2    2    4       TOTAL
    50000      INCOME                    1    1    2    0       TITLE
    51200      CONSULTING FEES           1    0    2    0       POSTING
    51250      SOFTWARE SALES            1    0    2    0       POSTING
    51300      CATALOG SALES             1    0    2    0       POSTING
    51990      TOTAL INCOME              1    2    2    3       TOTAL
    60000      EXPENSES                  1    1    1    0       TITLE
    60300      ADMIN & ACCOUNTING        1    0    1    0       POSTING
    60500      AUTO EXPENSE              1    0    1    0       POSTING
    60600      BANK CHARGES              1    0    1    0       POSTING
    61500      CASUAL LABOR              1    0    1    0       POSTING
    61600      DUES & SUBSCRIPTIONS      1    0    1    0       POSTING
    61800      FEES & LICENSES           1    0    1    0       POSTING
    61900      INSURANCE                 1    0    1    0       POSTING
    62600      LEGAL EXPENSE             1    0    1    0       POSTING

    APPENDIX B - PAGE 1









    =========================================================================

        ACCOUNT    DESCRIPTION          REP  ACC  NRN  TOT    TYPE OF ACCOUNT
                                        TYP  TYP  BAL  LVL
    -------------------------------------------------------------------------

    63000      SUPPLIES & EQUIPMENT      1    0    1    0       POSTING
    63100      SUPPLIES COMPUTER         1    0    1    0       POSTING
    63250      MISCELLANEOUS EXPENSE     1    0    1    0       POSTING
    63800      POSTAGE                   1    0    1    0       POSTING
    64300      SOFTWARE PURCHASES        1    0    1    0       POSTING
    64400      TAXES - STATE FRANCHISE   1    0    1    0       POSTING
    64440      TELEPHONE                 1    0    1    0       POSTING
    65200      TRAVEL                    1    0    1    0       POSTING
    65500      TYPING SERVICE            1    0    1    0       POSTING
    66990      XEROX EXPENSE             1    0    1    0       POSTING
    69995      TOTAL EXPENSES            1    2    1    3       TOTAL


              Totals  of  Income and/or Expense must be total level 3.

         Please note:
            Account 49950  Retained Earnings is a posting
         account- Actype 0. This account is used to maintain the balance of
         retained earnings prior to the current fiscal year.  During the
         Fiscal Year End processing you will be asked for an account to
         post retained earnings. --- THIS IS THE ACCOUNT.
            Account 49951  Curent Year Earnings is a Actype 4 - Retained
         Earnings.  This account is used by the program to keep track of
         your current year earnings and correctly indicate the amount on
         you Balance Sheet.  IT IS ABSOLUTELY NECESSARY that you have one
         Actype 4 Account in your chart of accounts.






































                                RESTRICTIONS

          The programs and manual are copyrighted by MILLROSE CORPORATION

          Any and all references to  MILLROSE  CORPORATION  or  notices  of
          proprietary restrictions may not be removed from the product.

          SBAS  GENERAL  LEDGER  is  distributed  "as is".  All warranties,
          either expressed or implied,  are disclaimed as to  the  program,
          its quality,  performance, or fitness for any particular purpose.
          The User bears the  entire  risk  relating  to  the  quality  and
          performance of the programs.


          Version  1.5  and  any  version  numbered  lower  are   Shareware
          programs.   Shareware   authors  only  receive  income  when  you
          register you copy of the program.  If you find the program to  be
          helpful  to  you we request you send a $20.00 registration fee to
          Millrose Corporation.

          Another version of the program is available.  The version is
          Version  2.0-DH1,  released  March  1989  contains  all of the
          features of the Shareware program.  In addition you are  able  to
          take  sub totals within the Income section or the Expense section
          of your Income Statement.  Further you may  have  Cost  of  Goods
          Sold and Gross Profit on Sales.
               The Shareware version of the SBAS GENERAL LEDGER requires
          that both the progam and data files be on the same floppy disk or
          in  the  same  sub  directory of your hard disk.  Version 2.0-DH1
          allows you have your program on floppy drive A and your  data  on
          floppy  drive  B.  In  the  case of a hard disk set up,  the data
          files may be set up  in  separate  sub  sub  directories  thereby
          allowing you to keep the books of more than one company.

                Please refer to the order blank on the next page.
























                                REGISTRATION AND
                                   ORDER FORM


                                                Date: ______________



              To:  Millrose Corporation
                   7210 Jordan Avenue  B-22
                   Canoga Park, Ca., 91303


  |___|       Please register my copy of Version 1.5 of the SMALL
              BUSINESS ACCOUNTING SYSTEM - SBAS GENERAL LEDGER.

              I wish to receive the  complete dBASE III source code
  |___|       and the compiled program for version 2.0-DH2
              (Includes resigtration fee) (Source code not available with
              for Version 1.5 registration fee only.)

              Register to:

              Name: __________________________________________

              Company:________________________________________

              Address: _______________________________________

              City,State,Zip: ________________________________

              Telephone: _____________________________________


              1.) Registration fee only      $20.00     _________

              2.) Version 2.0-DH2 - Multiple sets of books
                                             $ 49.95    __________


              Shipping/Handling                          $  3.00

              Calif.residents (6 1/2 % sales tax)       ___________

              TOTAL
                                                        ===========


          Note: Registration includes copy of the lastest Shareware
          version.


          I received my copy of the shareware program from:

              Name.    ____________________________________

              Address  ____________________________________

              City,State,Zip ______________________________



```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2178

     Volume in drive A has no label
     Directory of A:\

    GL       EXE    212608   5-17-89  10:59a
    CMASTER  DBF       527   3-20-89  11:45a
    CTRL     DBF       405   3-20-89  11:45a
    DETAIL   DBF       451   3-20-89  11:45a
    HISTORY  DBF       451   3-20-89  11:45a
    MASTER   DBF       512   3-20-89  11:45a
    SAV      DBF      5632   3-20-89  11:45a
    ACCT     NTX      2048   3-20-89  11:45a
    ACCTNO   NTX      2048   3-20-89  11:45a
    HACCT    NTX      2048   3-20-89  11:45a
    TRNBR    NTX      2048   3-20-89  11:45a
    ZZZ      MEM        47   3-20-89  11:45a
    GL       DOC     43860   3-20-89  12:00a
    README             923   3-20-89  12:00a
    README2           1225   3-20-89  12:03a
    README   BAT        68   3-20-89  12:00a
    LIST     COM      6845   3-20-89  12:00a
    FILE2178 TXT      2961   4-28-90   2:36p
    GO       BAT        38  10-19-87   3:56p
    GO       TXT       540   4-28-90   1:26a
           20 file(s)     285285 bytes
                           28672 bytes free
