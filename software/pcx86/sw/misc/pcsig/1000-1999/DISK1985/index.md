---
layout: page
title: "PC-SIG Diskette Library (Disk #1985)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1985/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1985"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "FCP ACCOUNTING"

    FCP ACCOUNTING is an easy to use accounting program designed to work
    similarly to the double entry method of accounting. All you have to do
    is enter your journal entries (which entails debiting one or more
    accounts and crediting one or more accounts), and everything else is
    done automatically.
    
    All journal entries are checked to make sure that they balance. After
    your journal entries are entered and posted, many reports are
    provided including: trial balance, income statement, balance
    sheet, capital statement, sales bar graphs, monthly balances line
    graphs with average line, YTD totals, to date monthly totals, and cash
    flow analysis.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## ACCT.DOC

{% raw %}
```





     FCP Accounting   version 3.0                       
     _________________________________________________________________
       







































     FLOWSOFT custom programming
     William A. Anderson
     Owner & Author
     875 Franklin Rd. #1635
     Marietta, Ga. 30067
     404-428-4028


     Copyright (C) 1988, FLOWSOFT custom programming, All Rights Reserved.





     C O N T E N T S
     __________________________________________________________________



     1    Introduction                                      Page


          1.1  Program Description.......................   1  



     2    Getting Started 


          2.1  Installing the program....................   2     

          2.2  Starting the program......................   3

          2.3  Setting up accounts and company name......   4-6

          2.4  File descriptions.........................   7



     3    Using The System


          3.1  Journal entries...........................   8-9

          3.2  Updating journal entry descriptions.......   10

          3.3  Listing journal entry descriptions........   10

          3.4  Posting journal entries...................   10

          3.5  Reports...................................   11

          3.6  Backing up your system....................   12

          3.7  Month end closing.........................   13

          3.8  Starting a new year.......................   13



     4  More Information 


          4.1  FCP Accounting License Agreement..........   14

          4.2  Registration Form and Support Info........   15






     1.1  Program Description


     FCP  Accounting is an easy to use accounting program designed  to 
     work  similar to the double entry method of accounting.  All  you 
     have to do is enter your journal entries (which entails  debiting 
     one or more accounts and crediting another or more accounts), and 
     everything  else is done automatically. All journal  entries  are 
     checked  to  make  sure that they  balance.  After  your  journal 
     entries  are  entered and posted, the data may be  analyzed  many 
     different  ways  including:  trial  balance,  income   statement, 
     balance  sheet,  capital  statement, sales  bar  graphs,  monthly 
     balances  line  graphs  with average line, YTD  totals,  to  date 
     monthly totals, and cash flow analysis.

     Shareware:  You  are free to copy and distribute  this  shareware 
     product to your friends, but if you find it useful and expect  to 
     receive  support if something should go wrong, please register by 
     sending $10 to FLOWSOFT custom programming
                    875 Franklin Rd. #1635
                    Marietta, Ga. 30067
                    404-428-4028




     FCP AR-Invoicing:

     FLOWSOFT  also has an accounts receivable and  invoicing  program 
     available  which  interfaces  with FCP  Accounting.  This  system 
     allows  you  to keep track of all your customers,  their  current 
     balance, YTD purchased, and YTD # of purchases. It also  provides 
     complete invoicing and AR functions. You can print invoices  with 
     multiple  line  items, enter a markup or  discount  %,  calculate 
     sales  tax, and record amounts due and payments. Reports  include 
     aged AR report, labels, sales tax paid report, and more.

     Please contact FLOWSOFT for details on FCP AR-Invoicing.

















                                                        Page 1





     2.1  Installing the program


     To install the program, do the following:

     Floppy disk system:

     Simply  put  the  ACCT.EXE  file on  a  blank,  formatted  floppy 
     diskette. There should be enough room on the diskette to hold all 
     your journal entries for a year.


     Hard Disk System:

     It  is  recommended  that you install FCP Accounting  on  a  hard 
     drive. To do so, do the following:

     (from the C> prompt type the following:)
     C> cd\
     C> md acct
     C> cd\acct
     (insert the floppy diskette into drive A)
     C> copy A:*.*

     The  above  assumes  that you received the program  on  a  floppy 
     diskette.  If you downloaded the program from a  bulletin  board, 
     just  create  a subdirectory called ACCT and  copy  the  ACCT.EXE 
     program to the subdirectory.



























                                                        Page 2





     2.2  Starting the system           


     To  start  FCP Accounting simply go to the subdirectory  on  your 
     hard  drive  where  the system is installed and  type  ACCT.  The 
     following main menu should appear:

                -----------------------------------------------
                |     FCP Accounting v3.0 Main Menu           |
                |                                             |
                |     J) Journal Entries.                     |
                |     P) Post to Ledger.                      |
                |     R) Reports.                             |
                |     C) Create an Account.                   |
                |     A) List Accounts.                       |
                |     U) Update Journal Entry Desc.           |
                |     L) List Journal Entry Desc to Screen.   |
                |     E) Perform Month End Close.             |
                |     B) Backup to Floppy.                    |
                |     I) Install Company Name.                |
                |     M) Monochrome Mode.                     |
                |     X) Exit to DOS.                         |
                |                                             |
                |     Enter Option...                         |
         -------------------------------------------------------------
         |     Please register for support and updates by            |
         |     sending $10 to the address below. Thank You!          |
         |     FLOWSOFT custom programming. 875 Franklin Rd. #1635   |
         |     Marietta, Ga. 30067          404-428-4028             |
         -------------------------------------------------------------



     Note:  Option M on the main menu is important if you are using  a 
     composite  monochrome monitor with a color video card.  When  the 
     menu  first appears you may not be able to see anything. If  that 
     is  the  case,  just  press  M and  the  screen  will  change  to 
     monochrome mode. You will then be able to see the menu.

     F1 function key:    This is used to clear a field.
     Up Arrow:           Go to previous field.
     Down arrow/enter:   Next field (if there is one).
     Ins:                Inserts a blank at the cursor
     Del:                deletes the character at the cursor.
     Backspace:          deletes the character to left of cursor.
     Left Arrow:         moves left one character.
     Right Arrow:        moves right one character.








                                                        Page 3




     2.3  Setting up accounts and company name


     Company name:

     Your  company name will be printed on all reports. To enter  your 
     company  name into the system, choose option I on the main  menu, 
     enter your company name, and press 'enter'.


     Creating accounts:

     Option C on the main menu will allow you to set up your accounts. 
     The screen where you create accounts looks like this:


              Enter account name... Cash

              Enter account type... ass     Valid Account Types:
                                                 ASS  - Asset.
              Enter account number... 100        PLA  - Plant Asset.
                                                 CAS  - Contra Asset.
                                                 CAP  - Capital.
                                                 EXP  - Expense.
                                                 INC  - Income.
                                                 DRA  - Drawing.
                                                 ACR  - Accounts Receivable.
                                                 ACP  - Accounts Payable.
                                                 CNP  - Controlling Payable.
                                                 INS  - Income Summary.
                                                 RET  - Sales Returns.


     It is important for calculating cash flow, that your cash account 
     be account type ASS and account number 100. The program looks for 
     this setup when it calculates cash flow.

     You should have a capital account.
     You should have a income summary account.
     You should have at least one income account.

     Note  that there is a maximum of 38 accounts. It is advised  that 
     you  keep  your  setup simple. Do not  create  too  many  expense 
     accounts or some of the onscreen display reports/graphs will  not 
     have enough room for all the expense accounts on one screen.











                                                        Page 4




     2.3  (continued)


     Account type descriptions:


     ASS  - Asset.
     Accounts such as cash and supplies.
     Normal balance is negative.

     PLA  - Plant Asset.
     Accounts such as equipment.
     Normal balance is negative.

     CAS  - Contra Asset.
     This  type of account offsets an asset account. An example  would 
     be accumulated depreciation.
     Normal balance is positive.

     CAP  - Capital.
     This account simply contains your capital.
     Normal balance is positive.

     EXP  - Expense.
     Accounts such as phone expense, advertising expense, etc.
     Normal balance is negative.

     INC  - Income.
     Revenue  accounts. You may set up more than one to track  revenue 
     from different sources.
     Normal balance is positive.

     DRA  - Drawing.
     Drawing account for a sole proprietor.
     Normal balance is negative.

     ACR  - Accounts Receivable.
     This  contains  the  total  amount  of  your  AR.  There  are  no 
     controlling accounts in FCP Accounting. The controlling  accounts 
     are kept in FCP AR-Invoicing.
     Normal balance is negative.

     ACP  - Accounts Payable.
     This  contains the total amount of AP. If you have a  controlling 
     account(s) set up then you must have only one ACP account set up.
     Normal balance is positive.

     CNP  - Controlling Payable.
     These are your individual controlling accounts. The entries  made 
     to  these  accounts will automatically update the  ACP  (accounts 
     payable)  account balance. Normally, no journal entries are  made 
     directly to the ACP account but should be made to a CNP account.
     Normal balance is positive.



                                                        Page 5





     2.3  (continued)


     INS  - Income Summary.
     This is used for month end closing. You must have an INS  account 
     set up.
     Normal balance is zero.

     RET  - Sales Returns.
     Sales returns and allowances.
     Normal balance is negative.


     An example of an account listing follows: (option A on main menu)


     ACCOUNT NAME:                   ACCOUNT TYPE:          ACCOUNT NUMBER:
     CASH                                  ASS                   100 *
     SUPPLIES                              ASS                   125
     EQUIPMENT                             PLA                   150
     ACCUMULATED DEPRECIATION              CAS                   175
     FLOWSOFT, capital                     CAP                   200 *
     SALES                                 INC                   300 *
     SALES RETURNS AND ALLOWANCES          RET                   350
     BAD DEBTS                             EXP                   360
     MISC. EXPENSE                         EXP                   400
     PHONE EXPENSE                         EXP                   410
     INTEREST EXPENSE                      EXP                   420
     SUPPLIES EXPENSE                      EXP                   430
     DEPRECIATION EXPENSE                  EXP                   440
     ADVERTISING EXPENSE                   EXP                   450
     LEASING EXPENSE                       EXP                   460
     RENT EXPENSE                          EXP                   470
     SHIPPING EXPENSE                      EXP                   480
     INSURANCE EXPENSE                     EXP                   490
     TAX EXPENSE                           EXP                   491
     MEALS & ENTERTAINMENT EXPENSE         EXP                   492
     ACCOUNTS PAYABLE                      ACP                   500
     AP - CITILINE                         CNP                   510
     AP - VISA                             CNP                   520
     AP - GEORGIA FEDERAL                  CNP                   530
     AP - MASTER CARD                      CNP                   540
     AP - LOANS PAYABLE                    CNP                   550
     AP - SALES TAX                        CNP                   560
     ACCOUNTS RECEIVABLE                   ACR                   600
     BILLY, DRAWING                        DRA                   700
     INCOME SUMMARY                        INS                   900 *

     * necessary accounts.






                                                        Page 6





     2.4  File descriptions


     file           description
     ------------------------------------------------------------
     acct.exe       this is the FCP Accounting program file

     entrynum.acc   this file contains the next entry number to be
                    used by the system.

     journal.acc    this file contains journal entry amounts.

     jourdes.acc    this file contains the journal entry descriptions.

     acct100.led    this is the general ledger file for account 100.

     company.dat    this file contains your company name.






































                                                        Page 7



     3.1  Journal entries

     Option  J on the main menu is used to enter journal entries.  You 
     will get the following screen:


              Entry Number  614

              Enter Acct #, 999 to cancel, or 'enter' to finish entry... 100

              Enter Amount... $-100

      100  - CASH                            492  - MEALS & ENTERTAINMENT EXPENSE
      125  - SUPPLIES                        500  - ACCOUNTS PAYABLE
      150  - EQUIPMENT                       510  - AP - CITILINE
      175  - ACCUMULATED DEPRECIATION        520  - AP - VISA
      200  - FLOWSOFT, capital               530  - AP - GEORGIA FEDERAL
      300  - SALES                           540  - AP - MASTER CARD
      350  - SALES RETURNS AND ALLOWANCES    550  - AP - LOANS PAYABLE
      360  - BAD DEBTS                       560  - AP - SALES TAX
      400  - MISC. EXPENSE                   600  - ACCOUNTS RECEIVABLE
      410  - PHONE EXPENSE                   700  - BILLY, DRAWING
      420  - INTEREST EXPENSE                900  - INCOME SUMMARY
      430  - SUPPLIES EXPENSE
      440  - DEPRECIATION EXPENSE
      450  - ADVERTISING EXPENSE
      460  - LEASING EXPENSE
      470  - RENT EXPENSE
      480  - SHIPPING EXPENSE
      490  - INSURANCE EXPENSE
      491  - TAX EXPENSE 


     The entry number on the first line is automatically calculated. 

     The  second line is where you enter the account to  debit/credit. 
     It is suggested that you enter the debits before the credits. 

     The third line is where you enter the amount of the debit/credit. 
     You may debit/credit as many accounts as you wish so long as  all 
     the  debits equal all the credits. the credit that goes with  the 
     debit above would look like this:

              Entry Number  614

              Enter Acct #, 999 to cancel, or 'enter' to finish entry... 300

              Enter Amount... $100


     Note:  It is assumed that the user is knowledgeable of the  rules 
     of  accounting and making journal entries. Therefore  you  should 
     know which accounts are debited and which are credited. Refer  to 
     section 2.3 for normal balance information.



                                                        Page 8




     3.1  (continued)


     When  you are finished entering your debits/credits,  just  press 
     enter  (or  press 999 to cancel the entry). The  next  screen  is 
     where you enter the journal entry description:


              Enter entry description... FCP Accounting sale

              Enter entry date (MM/DD/YY)... 07/05/88

              Enter entry type (R/A)... R


     You may give the journal entry any description you want. The date 
     defaults to the current date, but may be changed. The date should 
     be in the current month and year. If it is not, a warning message 
     will  be  displayed.  Do not enter dates  for  months  that  have 
     already been closed. These types of journal entries will get lost 
     in  the  system and it will be like you never made the  entry  at 
     all. Sometimes at the end of the month (or beginning of the  next 
     month) you will be making entries for the previous month, this is 
     OK. Just be sure the previous month has not been closed  already. 
     At  the end of the year, you may want to reset your  system  date 
     back  to 12/31/8x so you can make journal entries for that  year. 
     Journal entries may only be made for the current system year.  So 
     if  the system date is 01/01/89 you may not make journal  entries 
     for 12/31/88. So be sure to set your system date back before  you 
     start the journal entry routine. If you do get into the situation 
     where  you have to enter 01/01/89 as the entry date, you  can  go 
     back later and change the date using the update function.


     Entry type: Entry type can be either R for regular entry or A for 
     adjusting  entry.  




















                                                        Page 9





     3.2  Updating journal entry descriptions


     This option (U on the main menu) simply allows you to go back and 
     update journal entry descriptions, dates, and/or entry types. You 
     may  not delete journal entries. If you want to remove a  journal 
     entry  then  you  must make a correcting  entry  to  correct  the 
     mistake you made in the original entry.






     3.3  Listing journal entry descriptions


     This  option (L on the main menu) allows you to list all  of  the 
     journal entry descriptions to the screen for the month specified. 
     This option does not list the amounts of the journal entries.  If 
     you  want  amounts,  then print out the journal  entries  on  the 
     printer.






     3.4  Posting journal entries


     This  option (P on the main menu) simply updates  the  individual 
     accounts  with  the  journal entry  information.  Make  sure  all 
     journal entries are posted before printing month end reports  and 
     performing the month end closing.




















                                                        Page 10





     3.5  Reports


     Option R on the main menu will display the reports menu:


                -----------------------------------------------
                |                                             |
                |     FCP Accounting v3.0 Reports             |
                |                                             |
                |     J) List Journal Entries.                |
                |     A) List Account Activity.               |
                |     T) Trial Balance.                       |
                |     I) Income Statement.                    |
                |     B) Balance Sheet.                       |
                |     C) Capital Statement.                   |
                |     S) Sales Graph.                         |
                |     G) Cash/AR/AP Graph.                    |
                |     M) Monthly Balances Graph.              |
                |     Y) YTD Balances.                        |
                |     O) Monthly Balances Onscreen.           |
                |     F) Cash Flow Analysis.                  |
                |     R) Return To Main Menu.                 |
                |                                             |
                |     Enter Option...                         |
                |                                             |
                -----------------------------------------------


     The  first  six  reports are printed on the printer.  Make  sure  your 
     printer is turned on and ready to print before starting any print job.

     The  other  reports  are screen reports. They may be  printed  on  the 
     printer  by  pressing the PrtSc key. (With graphs, you  will  need  to 
     install graphics before pressing PrtSc).

     Trial  Balance  should be printed before and after  month  end  close. 
     Journal  entries, account activity, income statement,  balance  sheet, 
     and capital statement should be printed before month end close.
















                                                        Page 11





     3.6  Backing up your system


     Just  choose  option  B on the main menu, and you  will  get  the 
     following message:



     Insert floppy diskette into drive.

     Press floppy drive letter to backup or 'M' to return to main menu...




     Simply  press the letter corresponding to the floppy  drive  that 
     you want to copy the files to. All files in the current directory 
     will then be copied onto the floppy in the specified drive.  

     It  is suggested that you backup your system before  every  month 
     end closing onto a separate diskette for each month.

     It  is  also suggested that you do a daily backup  onto  a  daily 
     backup diskette. The same diskette may be used every day.































                                                        Page 12





     3.7  Month end close


     This  option (E on the main menu) will close out all your  income 
     accounts and expense accounts. Make sure you have printed all the 
     reports that you want before performing the month end close. Also 
     make sure that you have backed up your system before you  perform 
     the month end close.





     3.8  Starting a new year


     FCP Accounting will only handle one year at a time. When you want 
     to start a new year, just create a new subdirectory and copy  the 
     ACCT.EXE file into that subdirectory. If you are going to use the 
     same  account setup, then you should also copy  the  ACCOUNTS.ACC 
     file   into  the  new  subdirectory.  Also,  you  can  copy   the 
     COMPANY.DAT  file into the new subdirectory. Do not copy  any  of 
     the other data files. The first journal entry should be one entry 
     containing your starting balances for the year.































                                                        Page 13



     4.1  FCP Accounting Software License Agreement

     1)  License:  You  have the non-exclusive right to  use  the  enclosed 
     program. If you find this program to be useful, then you must register 
     for support by sending $10 to FLOWSOFT custom programming.

     2)   Copyright:  This  program  and  its  related  documentation   are 
     copyrighted.  You may copy the program and the  related  documentation 
     for distribution to friends via diskette or electronic bulletin  board 
     service. 

     3) Term: This license is in effect until terminated. You may terminate 
     it by destroying the program and documentation and all copies thereof. 
     This  license will also terminate if you fail to comply with any  term 
     or condition of this agreement. 

     4) Warranty: If within thirty (30) calendar days of purchase you  find 
     that  this  product does not perform in accordance  to  our  (Flowsoft 
     custom  programming) claims, return it to the place of  purchase,  and 
     request  a  refund  of the purchase price less  a  $15  handling  fee. 
     Flowsoft  custom programming will honor this warranty if the  purchase 
     is  made directly from Flowsoft custom programming. Retail stores  and 
     other distributors are not obligated to be bound by the terms of  this 
     warranty.

     5)  Limitation of Liability: Neither Flowsoft custom  programming  nor 
     anyone  else  who has been involved in the  creation,  production,  or 
     delivery  of  this program shall be liable for any  direct,  indirect, 
     consequential,  or  incidental  damages arising out of  the  use,  the 
     results  of, or inability to use this product even if Flowsoft  custom 
     programming  has  been advised of the possibility of such  damages  or 
     claim.  Some  states  do  not allow the  exclusion  or  limitation  of 
     liability  for  consequential  or incidental  damages,  so  the  above 
     limitation may not apply to you.

     6)  Update  Policy:  In order to be able to  obtain  updates  to  this 
     program,  the licensee must complete and return the registration  form 
     in  section  4.2. If the registration form has not  been  received  by 
     Flowsoft  custom programming, Flowsoft custom programming is under  no 
     obligation  to make available to you any updates even though you  have 
     made payment of the applicable update fee.

     7)  Misc: This license agreement shall be governed by the laws of  the 
     State  of  Georgia and shall inure to the benefit of  Flowsoft  custom 
     programming,  its  successors,  administrators,  owners,  heirs,   and 
     assigns.

     8) Acknowledgment: You acknowledge that you have read this  agreement, 
     understand it, and agree to be bound by its terms and conditions.  You 
     also agree that this agreement is the complete and exclusive statement 
     between the parties and supersedes all proposals or prior  agreements, 
     verbal  or written, and any other communications between  the  parties 
     relating to the subject matter of this agreement.




                                                        Page 14





     4.2  Registration Form and Support Info

     This   form  must  be  completed  and  returned  to  Flowsoft   custom 
     programming  before  you will be eligible to receive support  for  the 
     product.  This  form will also entitle you to  receive  future  update 
     notices  on  the product. Photocopies or other reproductions  of  this 
     form will not be accepted.



          FCP Accounting  version 3.0


          Name:  _________________________________________________________

          Company Name:  _________________________________________________

          Address:  ______________________________________________________

          City, State, Zip Code:  ________________________________________

          Phone Number:  _________________________________________________

          Type of Computer:  _____________________________________________

          Number of Floppy Drives:  ______   Number of Hard Disks:  ______



          Return To:     Flowsoft custom programming
                         875 Franklin Rd. #1635
                         Marietta, Ga. 30067 






     Support Prices: For telephone support, you will be billed at the  rate 
     of  $5.00  per 15 minutes of support (15 minute minimum).  For  onsite 
     support,  you  will be billed at the rate of $50.00 per  hour.  Please 
     call Flowsoft custom programming for quotes on customizing a  software 
     package. 












                                                        Page 15

```
{% endraw %}

## FILE1985.TXT

{% raw %}
```
Disk No: 1985                                                           
Disk Title: FCP Accounting                                              
PC-SIG Version: S1                                                      
                                                                        
Program Title: FCP Accounting                                           
Author Version: 3.0                                                     
Author Registration: $10.00                                             
Special Requirements: None.                                             
                                                                        
FCP ACCOUNTING is an easy to use accounting program designed to work    
similar to the double entry method of accounting.  All you have to do is
enter your journal entries (which entails debiting one or more accounts 
and crediting another or more accounts), and everything else is done    
automatically.                                                          
                                                                        
All journal entries are checked to make sure that they balance.  After  
your journal entries are entered and posted, the data may be analyzed   
many different ways including: trial balance, income statement, balance 
sheet, capital statement, sales bar graphs, monthly balances line graphs
with average line, YTD totals, to date monthly totals, and cash flow    
analysis.                                                               
                                                                        
Menus make the program easy to understand and use.  You'll be able to   
take full advantage of FCP ACCOUNTING's features because they are easily
accessed from the menu.  For example, these are some of your choices    
from the main menu: J) Journal Entries, R) Reports, C) Create an        
Account, A) List Accounts, U) Update Journal Entry Desc, E) Perform     
Month End Close, B) Backup to Floppy, and I) Install Company Name.      
                                                                        
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
║               <<<<  Disk #1985  FCP ACCOUNTING  >>>>                    ║
╠═════════════════════════════════════════════════════════════════════════╣
║ Use PKXARC to extract files from FPCACCT.ARC                            ║
║                                                                         ║
║ To start program, type: ACCT         (press enter)                      ║
║                                                                         ║
║ To print documentation, type: TYPE ACCT.DOC PRN                         ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1985

     Volume in drive A has no label
     Directory of A:\

    FCPACCT  ARC    112616   2-17-89  12:54p
    FILE1985 TXT      2517   1-02-90   6:24p
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       694   1-01-80  12:17a
            4 file(s)     115865 bytes
                           43520 bytes free
