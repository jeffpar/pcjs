---
layout: page
title: "PC-SIG Diskette Library (Disk #735)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0735/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0735"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "CHECKBOOKS AND BUDGETS"

    CHECKBOOKS AND BUDGETS is the ideal household finance program for you,
    whether you live alone or with a family of 10 or more.
    
    It is versatile, multi-featured, and is a universally useful program. It
    not only lets you keep close and careful track of your personal checking
    accounts, but also automatically sets aside portions of your income into
    different categories in your budget.
    
    The budgeting portion of the program is completely flexible, and
    lets you move budgeted funds from account to account at will.
    
    FEATURES:
    
    ~ Easy to use, windowed, menu-driven checkbook and budgeting system
    ~ Optional printing of industry-standard checks
    
    ~ Built-in help menu system
    
    ~ Data input editing and error-checking
    
    ~ Up to 180 accounts -- 120 for expenses and 60 for income
    
    ~ Up to 65,535 check register entries (limited by disk space)
    
    ~ Keyed index files used for quick data storage and retrieval
    
    ~ Multiple formatted listings to screen or printer
    
    ~ Financial reports made, including bar graphs
    
    ~ Automatic balancing
    
    ~ Quick and easy bank statement reconciliation system
    
    ~ Financial and loan calculations
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CHCKBDGT.DOC

{% raw %}
```












                                     

                            CHECKBOOKS and BUDGETS


                                 CHCKBDGT.COM

               Copyright (c) 1985, 1986, 1987   DIGITAL PROCESSES

   This is a user supported product.  It is not public domain, and it is
   not free software.  You are granted a limited license to use this product
   on a trial basis.  If you wish to continue using the product after the
   trial period you must register by sending $15.00 to the address below.
   You will receive a registered disk with all the enhanced features.  
   Additional copies of this unregistered disk are available for $6.00 each.
   California residents, please add 6.5 percent sales tax.

                         Thank you for your support !

       Digital Processes,  P.O. Box 361658,  Milpitas, CA  95035-1658


                               REGISTRATION FORM


               NAME:______________________________________________

            ADDRESS:______________________________________________

     CITY/STATE/ZIP:______________________________________________

            COUNTRY:______________________________________________



     _____  REGISTERED COPY(s) of CHECKBOOKS & BUDGETS at $15.00    ______

     _____  UNREGISTERED COPY(s) of CHECKBOOKS & BUDGETS at $10.00  ______

                                                       SUB TOTAL    ______

                  CALIFORNIA RESIDENTS ADD 6.5 PERCENT SALES TAX    ______
                          
                                  $3.00  OVERSEAS MAILING CHARGE    ______

                                     $10.00  NON US CURRENCY FEE    ______

                                                  TOTAL ENCLOSED    ______


                    SEND TO:  DIGITAL PROCESSES
                              P.O. BOX 361658
                              MILPITAS, CA  95035-1658



         1. Before proceeding, make a copy of this disk, then store the 
         original in a safe place.

         2. Use the program INSTALL.COM to install working copies of CHCKBDGT 
         to a floppy or hard disk.  Ignore the next paragraph if you use 
         INSTALL.  Type INSTALL <return> (the program is menu driven).

         3. The CHCKBDGT program will not work unless you include a 
         files=20 line in your CONFIG.SYS file when you boot your system with
         DOS.  If your DOS disk does not have a CONFIG.SYS file then copy the 
         one on this disk to your DOS disk.  If your DOS disk already has a 
         CONFIG.SYS file then put your copy of this disk in the B: drive 
         and your DOS disk in the A: drive and type: 
                COPY A:CONFIG.SYS + B:CONFIG.SYS B:CONFIG.TMP <return>
                COPY B:CONFIG.TMP  A:CONFIG.SYS <return>

         !!! The error message - "Turbo-access I/O error 243" means you have 
            not booted with a files=20 CONFIG.SYS file !!!

         4. Type CHCKBDGT to start a new checking and budgeting data base.  To 
         insure that you have the maximum amount of room on your work disk for 
         future data expansion leave only the CHCKBDGT.COM, CHCKBDGT.000 and 
         the CHCKBDGT.HLP files on the disk.  Floppies made with INSTALL will 
         also have the files COMMAND.COM, CONFIG.SYS, and AUTOEXEC.BAT.

         5. Copy the files from the \DEMO directory to the \ (root) directory 
         for a demonstration of an existing data base.  When you are done using 
         the demo database then delete the *.DAT, *.IDX and *.MSC files from 
         the \ (root) directory.  From the \ (root) directory 
         type: COPY \DEMO\*.* <enter>

         6. The following information is taken directly from the built in 
         helpscreens. 


      INDEX                                                         Help Screen  1

      HS  0 - LOGO                          HS 17 - LIST WITHHOLDING BALANCES
      HS  1 - INDEX                         HS 18 - ENTER A DEPOSIT
      HS  2 - LICENSING TERMS               HS 18 - ENTER A BANK CHARGE
      HS  3 - LICENSING TERMS/WARRANTY      HS 19 - ENTER/PRINT A CHECK
      HS  4 - REGISTRATION/ORDERING         HS 20 - ALIGNING CHECKS IN PRINTER
      HS  5 - FEATURES                      HS 21 - ALIGNING CHECKS IN PRINTER
      HS  6 - PROGRAM OVERVIEW              HS 22 - UPDATE CHECK/DEPOSIT/CHARGES
      HS  7 - PROGRAM OVERVIEW              HS 23 - BALANCE CHECKBOOK REGISTER
      HS  8 - PROGRAM OVERVIEW              HS 23 - RECONCILE W/BANK STATEMENT
      HS  9 - PROMPTS/KEY FUNCTIONS         HS 24 - LIST REGISTER/LIST BY ACCOUNT
      HS  9 - STOPPING LONG LISTINGS        HS 24 - GENERATE FINANCIAL REPORT
      HS  9 - PRINTING HELP SCREENS         HS 25 - RECONSTRUCT/OPTIMIZE FILES
      HS 10 - DEMO/INSTALL/BACKUP FILES     HS 25 - START A NEW YEAR
      HS 11 - USER PRECAUTIONS              HS 26 - SET UP SCREENS/DRIVES/PRINTER
      HS 12 - STARTING YEAR/CHECK NO.       HS 27 - BUSINESS CALCULATIONS
      HS 13 - ACCOUNT SET UP                HS 28 - CHECK SUPPLIER
      HS 14 - ACCOUNT SET UP                HS 29 - REGISTRATION / ORDER FORM
      HS 15 - REGULAR PAYMENTS              HS 30 - INSTALLATION INFORMATION
      HS 16 - WITHHOLDING PERCENTAGES       HS 31 - INSTALLATION INFORMATION
      HS 17 - MOVE WITHHOLDING FUNDS        HS 32 - ADDITIONAL PRODUCTS


     LICENSING TERMS                                     Help Screen 2

     All versions of CHECKBOOKS and BUDGETS (CHCKBDGT) are not public 
     domain software, nor are they free software. 

     Non-registered users are granted a limited license to use the 
     unregistered version of CHCKBDGT on a trial basis to determine whether 
     CHCKBDGT is suitable for their needs. Use of CHCKBDGT, except for the 
     trial basis, requires registration. Regular use of unregistered copies of 
     CHCKBDGT by any person, business, corporation, governmental agency, or 
     other entity institution is strictly forbidden. 

     Registration permits the user a license to use CHCKBDGT on a single 
     computer. A registered user may use CHCKBDGT on different computers, but 
     may not use it on more than one computer at the same time. 

     All users are granted a limited license to copy unregistered versions of 
     CHCKBDGT only for the trial use of others. This is subject to the 
     limitations outlined above and the following: Unregistered versions of 
     CHCKBDGT must be copied in unmodified form complete with the files 
     containing the licensing information. The full CHCKBDGT documentation 
     must be included with the copy. No fee, charge, or other compensation may 
     be accepted or requested by any licensee. CHCKBDGT may not be distributed 
     with any other product. <Continued> 




     LICENSING TERMS <Continued>                         Help Screen 3

     Operators of electronic bulletin board services may post the unregistered 
     version of CHCKBDGT for downloading by their users as long as the above 
     conditions <Help Screen 2> are met. Distributors of public domain or 
     user-supported software may distribute unregistered versions of CHCKBDGT 
     subject to the above conditions and only after obtaining written
     permission from Digital Processes. Such permission is usually granted; 
     please write for details. 

     WARRANTY

     Digital Processes makes no warranty of any kind (express or implied, 
     including without limitation), any warranties of merchantability and/or 
     fitness for a particular purpose. Digital Processes shall not be held 
     liable for any damages (whether direct, indirect, special, or 
     consequential) arising from the failure of this program to operate in the 
     manner desired by its users. Digital Processes shall not be liable for 
     any damage to data or property which may be caused directly or indirectly 
     by use of this program. 

     IN NO EVENT WILL Digital Processes BE LIABLE TO YOU FOR ANY DAMAGES, 
     INCLUDING LOST PROFITS, LOST SAVINGS OR OTHER INCIDENTAL OR CONSEQUENTIAL 
     DAMAGES ARISING OUT OF YOUR USE AND/OR INABILITY TO USE THE PROGRAM, OR 
     FOR ANY CLAIM BY ANY OTHER PARTY. 


     REGISTRATION/ORDERING                               Screen Help 4

     Registering with Digital Processes licenses you to use the registered
     version of CHCKBDGT and its related files regularly. Benefits of 
     registration are: a registered-user version of CHCKBDGT containing 
     enhanced features, expanded documentation, notification by mail of 
     program updates, and limited personal support via mail and/or telephone. 
     Registration also includes licensed use of all upgraded versions of 
     CHCKBDGT for an additional small fee to cover the cost of a disk and 
     shipping and handling. 

     Individual registration for CHCKBDGT is $15.00. (California residents,
     please add 6.5 percent sales tax to your order.)

     If you are ordering from a foreign country, please add $3.00 to cover 
     shipping and handling of the registered disk. Checks or drafts must be 
     drawn on a bank in the United States and payable in U.S. dollars. Money 
     orders also must be payable in U.S. dollars. Add $10.00 to cover 
     conversion costs if you send payment in non-U.S. currency. 

     PLEASE USE ENCLOSED ORDER FORM (type: PRINT CHCKBDGT.DOC <return>).




     FEATURES                                            Help Screen 5

         o Easy-to-use, windowed, menu-driven, checkbook and budgeting system
         o Optional printing of industry-standard checks
         o Built-in help menu system
         o Data-input editing and error checking
         o Up to 180 accounts (120 for expenses; 60 for income)
         o Up to 65,535 check-register entries (limited by disk space avail.)
         o Uses keyed index files for rapid data storage and retrieval
         o Multiple format listings to screen or printer
         o Generates financial reports
         o Automatically balances check register
         o Quickly reconciles check register with monthly bank statement
         o Makes financial and loan calculations

     MINIMUM REQUIREMENTS

         o IBM PC/AT or compatible
         o One 360K disk drive
         o 256K memory
         o Monochrome or color monitor
         o DOS 2.0 or higher


     AN OVERVIEW                                         Help Screen 6

     CHECKBOOKS and BUDGETS  (CHCKBDGT) is the registered version of a 
     fully menu-driven program designed to help you track transactions 
     affecting your home budget over the period of one year. CHCKBDGT may be 
     used to keep computerized records of handwritten checks. You also may 
     record and print checks using Dual-Purpose Check No. C05438091013
     available from DEXLUXE Computer Forms, P.O. Box 64046, St. Paul, MN
     55164-0046. Telephone: 1-800-328-0304.

     This software features built-in documentation in the form of "Help 
     Screens." You may access these help screens for assistance while you are 
     using CHCKBDGT or print out the help screens to create a paper reference 
     manual. <See Help Screen 9> 

     CHCKBDGT has three menu sections. Nearly all transactions occur in the 
     MAIN MENU. The SET-UP MENU and BUSINESS CALCULATIONS MENU are both 
     available from the MAIN MENU. 

     When you boot or start CHCKBDGT for the first time, it will ask you to 
     set the YEAR and the STARTING CHECK number (SET-UP MENU). Then the 
     program automatically shifts to its CHCKBDGT ACCOUNTS routine (also in 
     the SET-UP MENU) and prompts you to create CHECKING and BANK CHARGE
     accounts (EXPENSES) and DEPOSIT accounts (INCOME). <Continued> 




     AN OVERVIEW <Continued>                             Help Screen 7

     The next step is to initiate the WITHHOLDING PERCENTAGES (also in the SET-
     UP MENU) to allocate all or part of your DEPOSITS to different 
     withholding accounts automatically. As you later set and manipulate your 
     budget, you may move funds between accounts or to and from surplus cash 
     by using the MOVE WITHHOLDING FUNDS routine (MAIN MENU). 

     After initiating WITHHOLDING PERCENTAGES (SET-UP MENU), return to the 
     MAIN MENU to enter your BEGINNING BALANCE as a DEPOSIT. If you are 
     overdrawn, your negative BEGINNING BALANCE should be recorded as a BANK 
     CHARGE (also in the MAIN MENU). 

     Then return to the SET-UP MENU and select the REGULAR PAYMENT routine to 
     establish PREDEFINED and VARIABLE PAYMENTS for checks that are written on 
     a monthly basis, such as rent, car and mortgage payments, and utilities. 

     As you enter and save CHECKS, BANK CHARGES and DEPOSITS, the UPDATE A
     CHECK/DEPOSIT/BANK CHARGE routine (SET-UP MENU) allows you to correct
     mistakes or void a check.

     Run the BALANCE CHECKBOOK REGISTER routine (MAIN MENU) after entering 
     each CHECK, BANK CHARGE, or DEPOSIT, or to obtain the current balance. 
     <Continued> 


     AN OVERVIEW <Continued>                             Help Screen 8

     Cross-check your balance with the bank's monthly statement by using the 
     RECONCILE WITH BANK STATEMENT routine (MAIN MENU). 

     Other routines in the MAIN MENU allow you to list the checkbook register 
     by date and type of transaction, list each account, list withholding 
     balances, move withholding funds, and generate a financial report. Lists 
     and the financial report may be sent to the printer or to the monitor 
     screen for review. 

     The SET-UP, UPDATE and RECONSTRUCT MENU also offers routines to 
     reconstruct/optimize index files, start a new year, and setup the 
     screen/drives/printer. 

     Included in the BUSINESS CALCULATIONS MENU are financial/loan 
     calculations for present and future value, annuities, internal rate of 
     return, net present value, and amortized loan analysis. 

     Address correspondence regarding CHECKBOOKS and BUDGETS to:

     Digital Processes, P.O. Box 361658, Milpitas, Calif., 95035-1658.




     PROMPTS/KEY FUNCTIONS                               Help Screen 9

     Prompts will help you turn the "pages" of the help screens, make menu 
     selections and operate each routine. To use a prompt, type its number or 
     boldface letter. 

     When entering data, you often can use DEL, BACK SPACE, UP ARROW, DOWN 
     ARROW, RIGHT ARROW and LEFT ARROW to edit a default value or a mistake. 
     DEFAULT VALUES will reappear if you use the BACK SPACE key to delete back 
     to the first character of an entry. The UP ARROW often will let you move 
     up a line. Use the ENTER (RETURN) key to move down a line. The ESC key 
     will let you escape from the routine in which you are working to the
     nearest sub-menu. 

     STOPPING LONG LISTINGS

     To stop a long listing to the monitor screen or printer, hold down the 
     SPACE BAR until the ABORT\CONTINUE prompt appears. 

     PRINTING HELP SCREENS

     Hold down the SHIFT key while pressing the PRT SC key (or similar key) to 
     print the HELP SCREEN displayed on the monitor screen. 


     DEMONSTRATION FILES                                Help Screen 10

     You may run the demonstration files to review sample data entries. Be 
     sure to first back up and save the original disk. Then copy all of the 
     files in the DEMO directory to the \ (root) directory.  From the \ (root) 
     directory type: COPY \DEMO\*.* <enter> 

     Now type CHCKBDGT and try out the different routines. When finished, 
     delete all of the .DAT, .IDX AND .MSC files from the \ directory to start 
     the program over fresh. (Example: DEL *.DAT <enter>, DEL *.IDX <enter>,
     DEL *.MSC <enter>) 


     INSTALLATION PROGRAM

     The installation program will install the CHCKBDGT program and its 
     related files to a floppy or hard disk.  Make sure INSTALL.COM is on your 
     copy of the original disk.  Type: INSTALL <enter> then follow the prompts 
     on the screen. 


     BACKUP BATCH FILE

     To back up the data on your working disk type: BACKUP <enter> and answer 
     the prompt for which disk drive to copy the data files to. 




     USER PRECAUTIONS                                   Help Screen 11

     Once the first transaction is entered through the DEPOSIT, BANK CHARGE or 
     CHECKING routines, you will not be able to change the YEAR or the
     STARTING CHECK NUMBER. 

     Also, you will not be able to DELETE any CHECKING, DEPOSIT or BANK CHARGE 
     account from the checkbook register once it has been used in a 
     transaction. 

     If you IMPROPERLY EXIT from the program (by turning off the machine 
     instead of returning to the MAIN MENU and typing the letter X to exit the 
     program), some or all of the data you have entered, since you last 
     started the program, will be lost because it has not been permanently 
     stored on the disk. 

     ALWAYS BACK UP the .MSC, .DAT, and .IDX files REGULARLY.  Use the 
     BACKUP.BAT batch file for easy automated backups ( type: BACKUP <enter>).  
     The BACKUP.BAT utility will prompt you for the source disk and the 
     destination disk. 


     STARTING YEAR/STARTING CHECK                       Help Screen 12

     Use the STARTING YEAR/STARTING CHECK routine to set the year and the 
     beginning check number. 

     The range for YEAR is 0 through 99.

     The range for the STARTING CHECK is 0 through 20,000. Choose a starting 
     number between 1 and 10,000 to allow room for expansion before you reach 
     the STARTING CHECK limit of 20,000. You will be able to enter checks past 
     the 20,000 limit, but you will not be able to start a new year beyond 
     this limit. 

     After entering the STARTING YEAR and STARTING CHECK number, the program 
     will prompt you either to SAVE this data, or repeat (AGAIN) the process 
     if you have made a mistake in data entry. 

     REMINDER: the YEAR and STARTING CHECK number cannot be changed once you 
     enter your first transaction through either the DEPOSIT, BANKCHARGE or 
     CHECKING routines. 




     ACCOUNT SET UP                                     Help Screen 13

     Before you can use CHCKBDGT to enter your banking transactions, you must 
     first create accounts for each type of transaction category: DEPOSITS,
     CHECKS and BANK CHARGES. The program automatically adds two accounts the 
     first time you start it. These two accounts are: 

     BEGinning balance +  (a DEPOSITS account for a positive starting balance)
     BEGinning balance -  (a BANK CHARGES account for a negative starting 
                           balance) 

     Delete the account you do not use (usually the BEG "-" account).

     CHECKING and BANK CHARGE accounts are expense accounts. Use CHECKING 
     accounts to enter all expenses that are paid by check. BANK CHARGE 
     accounts are for all expenses paid through direct withdrawals from your 
     account such as cash from an automatic teller, monthly service charges, 
     check-writing fees, home banking by telephone, and charges for 
     insufficient funds. 

     DEPOSIT accounts record all income such as wages, interest paid on the 
     account, and funds transferred to your account from a line of credit. 
     <Continued> 


     ACCOUNT SET UP                                     Help Screen 14

     The CHCKBDGT software uses the first three characters of the account name 
     as the account code for each account. No two accounts within the same 
     account category (CHECKING, BANK CHARGES, or DEPOSITS) can share the same
     first three characters. For easier standout identification, you may wish 
     to begin each account name with three capital letters (e.g., "IRS Taxes 
     Paid" and "CASh Withdrawals") or numbers (e.g., "101 Medical" and "500 
     Rent"). 

     Because each number is unique, basing account names on a numbering system 
     allows you to group similar accounts into individual number categories 
     (e.g., All accounts falling within the "200" category would be credit-
     card accounts such as "201 Bank Card," "210 Gas Card," and "212 Dept 
     Store Card.") 

     Account names may be up to 20 characters long (including spaces and 
     special characters). As you enter acccount names into each transaction 
     category, the program will sort and list them in numerical and/or 
     alphabetical order. 

     Press ESC to quit ADDING or DELETING accounts and return to the MAIN 
     MENU. 

     REMINDER: you will not be able to delete an account once it has been used
     in a transaction. 




     REGULAR PAYMENTS                              Help Screen 15

     This routine allows you to set up predefined checks that are written every 
     month. Then, when paying bills each month, use the ENTER A CHECK routine 
     to print all your predefined checks automatically. Both checks with 
     PREDEFINED amounts (rent, car loan, etc.) and checks with VARIABLE 
     amounts (credit cards, utilities, etc.) can be entered as regular 
     payments. The only criterion is that the check be written once a month. 

     These checks are defined as either PREDEFINED REG PAYMENTS or VARIABLE 
     REG PAYMENTS on the opening prompt line of the ENTER CHECK routine <see 
     Help Screen 19>. When prompted for a dollar amount enter 0 (zero) for 
     VARIABLE REG PAYMENTS and the actual known amount for PREDEFINED REG 
     PAYMENT checks. 

     After each check is printed, its date of payment is automatically 
     incremented so it will be correct the following month. The date will 
     still be incremented even if you choose not to print-and-save or if you
     just save a handwritten check to the checkbook register. If you 
     mistakenly run the PREDEFINED REG PAYMENTS or the VARIABLE REG PAYMENTS 
     feature more than once during a month, change the dates back to the
     correct date for the next month by using the UPDATE feature of the 
     REGULAR PAYMENTS routine. 


     WITHHOLDING PERCENTAGES                            Help Screen 16

     Use the WITHHOLDING PERCENTAGES routine to predefine how much of any 
     DEPOSIT made is set aside for making payments on any given CHECKING or 
     BANK CHARGE account. WITHHOLDING PERCENTAGES is a powerful tool and a 
     major feature of the CHCKBDGT program. 

     The first prompt line will direct you to set up percentages in either the 
     CHECKING or BANK CHARGES account categories. The total percent which can 
     be diverted to all the accounts is always less than or equal to 100 
     percent. If it is less than 100 percent, the excess will go to surplus. 

     Next you will be prompted for the AMOUNT OF INCOME TO BE DIVIDED BETWEEN 
     ACCOUNTS. The default is 100, allowing you to work in percentages. 
     Otherwise, you can enter your total monthly income. 

     The third prompt asks you for ACCOUNT to which you want to add or change 
     the percent withholding. Finally, you are prompted for the PORTION OF 
     <amount> TO BE CREDITED TO <account>. Here, you should enter the percent
     if you initially chose 100 or the dollar amount if you used your monthly 
     income. The percentage will be automatically calculated for you if you 
     use dollar amounts. Press ESC to quit when you finish adding or updating. 




     MOVE WITHHOLDING FUNDS                             Help Screen 17

     Although the WITHHOLDING PERCENTAGES routine automatically distributes 
     DEPOSITS to different withholding accounts at your direction, you may 
     from time to time find the need to move these funds around. 

     The MOVE WITHHOLDING FUNDS routine (MAIN MENU) allows you to set and 
     manipulate your budget by moving funds between accounts and to-and-from 
     your surplus cash. 

     To move funds between CHECKING accounts and BANK CHARGE accounts, first 
     move funds from the source account to surplus cash. Then, change menus 
     and move surplus cash to the target account.


     LIST WITHHOLDING BALANCES

     Use the LIST WITHHOLDING BALANCES routine to display your withholding 
     account balances on the monitor screen or send them to the printer. 


     ENTER A DEPOSIT                                     Help Screen 18

     Use this routine to either enter data for a deposit you have made to the 
     bank or one the bank has credited to your account such as interest paid 
     on the account or an automatic transfer of funds from a credit line. 

     After entering and saving a DEPOSIT transaction, the routine will prompt 
     you to distribute the funds to either ALL WITHHOLDING ACCOUNTS (according 
     to their user-defined withholding percentages), a SINGLE account, or to 
     SURPLUS CASH. <See Help Screen 16 for directions on how to set up 
     WITHHOLDING PERCENTAGES.> 


     ENTER A BANK CHARGE

     This routine allows you to either enter data for a BANK CHARGE levied 
     against your account by the bank (a monthly service charge or an 
     insufficient funds charge) or for direct withdrawal of funds (home
     banking by telephone and automatic teller cash). 




     ENTER/PRINT A CHECK                                Help Screen 19

     This routine allows you to either enter data for a check you have already 
     handwritten or for a check you wish to have printed by the CHCKBDGT 
     program. Let the software choose the next sequential check number, or 
     enter any unused number yourself. 

     The opening prompt line gives you the choice of entering a SINGLE check, 
     a PREDEFINED REG PAYMENT, or a VARIABLE REG PAYMENT. Regardless of which 
     check type you select, the routine gives you the final option of either 
     SAVING or PRINTING AND SAVING the check data to the checkbook register. 
     The SAVE only option is for checks that have already been handwritten and 
     the PRINT AND SAVE option is for checks to be printed on checks formatted 
     for printing on your computer printer. The SETUP PRINTER routine can be 
     used to lock out the use of the PRINT AND SAVE function <Help Screen 26>.

     The PREDEFINED REG PAYMENT option is for SAVING or PRINTING AND SAVING 
     check data from the checks you predefined with set dollar amounts in the
     REGULAR PAYMENTS routine <Help Screen 15>. The VARIABLE REG PAYMENT 
     option is for predefined checks which you entered 0 (zero) for the dollar 
     amount. The program will prompt you for the actual dollar amount on each 
     VARIABLE REG PAYMENT check. 


     ALIGNING CHECKS IN THE PRINTER                      Help Screen 20

     When placing your initial order for checks, start your first check number 
     at 20 to 50 less than the first number with which you actually plan to 
     start. This will provide you with extra checks for the purpose of 
     determining how you should align checks each time you feed them into your 
     printer. 

     Before printing out test checks, make a copy of your working disk (use the 
     DOS DISKCOPY command) for the purpose of aligning the checks. When you 
     are through, erase the files on the copy or save for future use as a 
     check alignment tool for different printers or to help you remember where 
     to align the checks on your current printer. 

     Feed the blank checks into your printer and align the first one so the 
     perforated line between the two halves of the check and check stub is 
     positioned about 1 inch below the center of the print head.

     Enter a SINGLE check through the ENTER/PRINT A CHECK routine. (Check that 
     the PRINT function is enabled in the SETUP routine.) Make sure the 
     printer is ON and ONLINE. Then Press the P key for PRINT and save. 
     <Continued> 




     ALIGNING CHECKS IN THE PRINTER                     Help Screen 21

     Examine the check just printed and realign the next check up or down, 
     depending on how the print aligned with the DATE and AMOUNT headings on 
     the check. The printed date and amount should appear just under these 
     headings. Repeat this test process until the checks are properly aligned. 

     Finally, note the final position of the check relative to the print head 
     or some other reference point/mark on the printer for future alignment. 
     The perforation between checks or the alignment holes make good reference 
     marks on the checks themselves. Place tape or a pen mark on the printer
     if needed.

     Use Dual-Purpose Check No. C05438/091013 from:

       DELUXE Computer Forms 
       1275 Red Fox Road
       P.O. Box 64046
       St. Paul, Minn. 55164-0046 
       Telephone: 1-800-328-0304  


     UPDATE A CHECK/DEPOSIT/BANK CHARGE                 Help Screen 22

     The CHCKBDGT program gives you complete flexibility to change any and all 
     inputs to a CHECKING, DEPOSIT, or BANK CHARGE transaction. However, you 
     cannot change the number of the CHECK, DEPOSIT or BANK CHARGE because 
     checks must be kept in numerical sequence for the printing routine. 

     The UPDATE routine first prompts you for the type of account -- CHECKING, 
     DEPOSIT or BANK CHARGE. It then prompts you for the transaction number 
     (check number, deposit number or bank charge number). If that number 
     exists, the program then shows you the transaction record and asks if you 
     wish to UPDATE it or QUIT.

     To update, you may change data in any field EXCEPT the transaction 
     NUMBER. 

     This routine is useful for VOIDING a check or swapping data between two 
     or more checks that were handwritten and entered out of sequence. To VOID 
     any check, deposit, or bank charge, enter 0 (zero) on the AMOUNT: line 
     and the word VOID on the PAYTO: line. 




     BALANCE CHECK REGISTER                              Help Screen 23

     Select the BALANCE CHECK REGISTER routine to obtain a quick indication of 
     your checking account balance. CHCKBDGT will automatically balance the 
     checkbook register prior to exiting the program and before it runs the 
     MOVE WITHHOLDING FUNDS routine. 

     Anytime you enter a new CHECK, BANK CHARGE or DEPOSIT, run the BALANCE 
     CHECK REGISTER routine if you want to know the new balance. Also run this 
     routine before running the LIST CHECK REGISTER routine. 


     RECONCILE WITH BANK STATEMENT

     Determine whether your checkbook register balance agrees with that of the 
     bank statement with the RECONCILE WITH BANK STATEMENT routine. This 
     routine indicates exactly what the bank statement ending balance should 
     be (if all of your entries are correct and if the bank did not make any 
     errors). 

     The checkbook register and bank statement will always agree if you 
     reconcile every transaction with the monthly bank statement. When you use 
     the routine to reconcile a register entry, it will place a "^" character 
     in the first column for that entry in the LIST CHECK REGISTER output. 


     LIST CHECK REGISTER                                Help Screen 24

     Use the LIST CHECK REGISTER routine to list the entire check register by 
     date. Select the beginning and ending dates for a listing, send the 
     output to the monitor screen or printer, chose the short or long formats, 
     and limit the listing to CHECKS, DEPOSITS or BANK CHARGES, or combination 
     of these three categories. A "^" character in the first column means that 
     entry is reconciled. (See Help Screen 23)

     LIST BY ACCOUNT

     The LIST BY ACCOUNT routine is similar to the LIST CHECK REGISTER routine 
     except it lists by account instead of the entire register. Select 
     beginning and ending dates for a listing, choose between listing a single 
     account or all of the accounts, send the output to the monitor screen or 
     printer, and list matching check and bankcharge accounts on the same 
     page. 

     GENERATE A FINANCIAL REPORT

     This routine will GENERATE A FINANCIAL REPORT with optional bar charts 
     that that indicates the percentage each transaction account contributed 
     to the whole checking account over a given time period. The first column 
     of the output shows income; the second, expenses; the third, the 
     percentage of each item to the total income or expense, and the fourth, 
     the average per month. 




     RECONSTRUCT/OPTIMIZE INDEX FILES                   Help Screen 25

     The RECONSTRUCT/OPTIMIZE INDEX FILES routine repairs any damaged index 
     files or index files which you suspect are corrupted. This routine will 
     work only if your data files are not corrupted -- which usually will be 
     the case. It also will optimize your files for the quickest possible 
     access time. 

     Index files become corrupted if you exit the program improperly (by 
     shutting off the computer without exiting the program) and you have 
     recently entered new data to the database. Corruption occurs because the 
     index files are held in memory for fast random access to the disk-based 
     data file. When the program is improperly exited, the indexes in memory 
     are lost. The program automatically reconstructs the files when it is 
     restarted after an improper exit. ALWAYS BACK UP THE .MSC, .DAT., AND 
     .IDX FILES REGULARLY! 

     START A NEW YEAR

     The START A NEW YEAR routine balances your account, deletes all of the 
     checkbook register transactions, increments the year, and adds the new 
     beginning balance to the appropriate BEG balance (+/-) account. When 
     running this routine, YOU WILL LOSE ALL OF YOUR PREVIOUS CHECKBOOK 
     REGISTER DATA. The program will prompt you TWICE to make sure you really 
     want to run this routine. 


     SETUP SCREEN/DRIVES/PRINTER                        Help Screen 26

     The SETUP SCREEN/DRIVES/PRINTER routine allows you to set various system 
     parameters. 

     SCREEN: to set the screen attributes (color/intensity) for popup windows 
     and for these help files windows. 

     DRIVES: to set the default drives for the .DAT/.IDX  and .HLP files.  Use 
     this feature to set up data files on a separate disk when you are running 
     out of disk space. Exit the program and rerun it again for the change to 
     become effective. Copy your .DAT/.IDX and/or .HLP files to the newly 
     selected disk drive. This is useful when you run out of room on one disk 
     -- copy only the .DAT and .IDX to a new disk and change the default DATA 
     drive. The CHCKMISC.DAT file is a duplicate of the CHCKBDGT.MSC file. If 
     problems occur, copy the CHCKMISC.DAT file to the disk with CHCKBDGT.MSC. 
     Delete CHCKBDGT.MSC and rename the CHCKMISC.DAT file to CHCKBDGT.MSC. The 
     CHCKBDGT.MSC file must be on the same disk and in the same directory as 
     CHCKBDGT.COM/000. 

     PRINTER: to set the default dark/light print initialization string for 
     printing checks. The program is initially set for EPSON(tm)/IBM(tm) 
     printers. Codes are in decimal and each code must be surrounded by a "#" 
     character. The EPSON(tm)/IBM(tm) defaults are: dark - #27#71#27#69# and 
     light - #27#70#27#72# 




     BUSINESS CALCULATIONS                              Help Screen 27

     This menu includes financial/loan calculations for present and future 
     value, annuities, internal rate of return, net present value, and 
     amortized loan analysis. 

     Most of the business calculations work by simply having you fill in all 
     but one of the variables. The unknown variable (which you are trying to 
     calculate) should be set to 0 (zero). 

     If you chose to CONTINUE, the previous variables will be reinserted as 
     defaults. Otherwise, if you ZERO AND CONTINUE, the defaults will be 
     returned to their starting values. 

     The INTERNAL RATE OF RETURN (IRR) calculation will ask you for the costs 
     and benefits for each period. If you set the number of compoundings/year 
     to a number other than one, then the period will be for that fraction of 
     a year. 

     Use the APR conversion feature to change between ANNUAL PERCENTAGE RATE 
     and non-annual rates. 


     CHECK SUPPLIER                                     Help Screen 28

     DELUXE Computer Forms                   Telephone: 1-800-328-0304
     1275 Red Fox Road                       Order: Dual-purpose Check No.
     P.O. Box 64046                                 C05438/091013
     St. Paul, MN  55164-0046
                               // SAMPLE - NOT TO SCALE //
     -------------------------------------------------------------------------
     |o|    YOUR NAME                                          CHECK NO    |o|
     | |                         < STUB PORTION >                          | |
     |o|                                                                   |o|
     | |                                                                   | |
     |o|                                                                   |o|
     | |                                                                   | |
     |o|                                                                   |o|
     -------------------------------------------------------------------------
     |o|    YOUR NAME                    BANKS NAME            CHECK NO    |o|
     | |                                                                   | |
     |o|  PAY:                                      DATE       AMOUNT      |o|
     | |                                                                   | |
     |o|  TO THE                                                           |o|
     | |  ORDER OF:                                                        | |
     |o|                                  <SIGNED>_______________________  |o|
     -------------------------------------------------------------------------




   REGISTRATION FORM                                             Help Screen 29

                  NAME:______________________________________________

               ADDRESS:______________________________________________

        CITY/STATE/ZIP:______________________________________________

               COUNTRY:______________________________________________


         _____  REGISTERED   COPY(s) of CHECKBOOKS & BUDGETS at $15.00  ______

         _____  UNREGISTERED COPY(s) of CHECKBOOKS & BUDGETS at $6.00   ______

                                                           SUB TOTAL    ______

                      CALIFORNIA RESIDENTS ADD 6.5 PERCENT SALES TAX    ______

                                      $3.00  OVERSEAS MAILING CHARGE    ______
    Send to:
             DIGITAL PROCESSES           $10.00  NON US CURRENCY FEE    ______
             P.O. BOX 361658
             MILPITAS, CA  95035-1658                 TOTAL ENCLOSED    ______


 SOFTWARE INSTALLATION                                         Help Screen 30

  1. Before proceeding, make a copy of this disk, then store the original in a
     safe place.

  2. Use the program INSTALL.COM to install working copies of CHCKBDGT to a
     floppy or hard disk.  Ignore the next paragraph (#3) if you use INSTALL.
     Type: INSTALL <return> (the program is menu driven).

  3. The CHCKBDGT program will not work unless you include a FILES=20 line in
     your CONFIG.SYS file when you boot your system with DOS.  If your DOS disk
     does not have a CONFIG.SYS file then copy the one on this disk to your DOS
     disk.  If your DOS disk already has a CONFIG.SYS file then put your copy of
     this disk in the B: drive and your DOS disk in the A: drive and type:

         COPY A:CONFIG.SYS + B:CONFIG.SYS B:CONFIG.TMP <return>
         COPY B:CONFIG.TMP   A:CONFIG.SYS <return>




 SOFTWARE INSTALLATION (Cont)                                  Help Screen 31

 4. To run CHCKBDGT with the demo data place your newly INSTALLed disk in the
    A drive and the original disk in the B drive and type:
    COPY B:\DEMO\*.* A: <enter> then from the A drive type: CHCKBDGT <enter>

 5. You can print out any of these help screens to your printer by pressing the
    SHIFT key and the PRT SC (PRINT SCREEN) key together when the help screen
    you wish to print is on your screen.  On the DOS command line type:
    PRINT CHCKBDGT.DOC <enter> to print out all the help screens to your
    printer.

 6. If you feel you need to call DIGITAL PROCESSES for assistance you may do so
    BUT PLEASE READ AND FOLLOW ALL THE INSTRUCTIONS in the help screens BEFORE
    doing so.  If you do call and a technical assistant is not in please call
    back again as the low selling price of this software prohibits this company
    from returning long distance phone calls although service contracts are
    available.  Have your serial number ready when calling.

    UNREGISTERED SOFTWARE WILL NOT BE SUPPORTED BY TELEPHONE


 ADDITIONAL SOFTWARE PRODUCTS FROM DIGITAL PROCECESS           Help Screen 32

                                                   UnReg     Reg  PC-SIG disk

 CHECKBOOKS & BUDGETS PLUS [>=384K] (CB.EXE)        $6.00   $25.00    #1126
 CHECKBOOKS & BUDGETS      [>=256K] (CHCKBDGT.COM)  $6.00   $15.00     #735

 CHURCH ROSTER/TITHE ORGANIZER      (ROSTER.EXE)            $15.00     call

 CUSTOMER TRACKING                  (CL.EXE)                $15.00     call

 MATERIAL REQUIREMENTS PLANNING and JOB ESTIMATING (Multi-user versions also)
   Base Modules
      Inventory Module     [rqrd]   (INV.EXE)      $16.00   $45.00     call
      Listings Module      [rqrd]   (LST.EXE)      -- included  --
      Customer Module       [opt]   (CL. EXE)      -- included  --
      MRP Shell             [opt]   (MRP.EXE)      -- included  --
   Additional Modules
      Work Order Module     [opt]   (WO. EXE)       $6.00   $15.00     call
      Purchase Order Module [opt]   (PO. EXE)       $6.00   $15.00     call
      Invoice/Shipper Module[opt]   (SHP.EXE)       $6.00   $15.00     call

         DIGITAL PROCESSES - P.O. Box 361658 - Milpitas, CA  95035-1658
                               (408) 942-1037

```
{% endraw %}

## CHCKBDGT.TXT

{% raw %}
```
SHORT DESCRIPTION OF FILES ON THE DISK
============================================================
CHCKBDGT.COM - checking and budgeting software
CHCKBDGT.000 - overlay file for CHCKBDGT.COM
CHCKBDGT.HLP - windowed help file for CHCKBDGT.COM
CHCKBDGT.DOC - documentation file for printing
CHCKBDGT.TXT - this file
CONFIG  .SYS - files=20 config requirement !!!!!!!!!
INSTALL .COM - installation program for floppy or hard disk
BACKUP  .BAT - batch file for backing up data files
DEMO    .BAT - batch file for using the demo data files
============================================================
DATA FILES CREATED BY CHCKBDGT.COM (In \DEMO for trial)
============================================================
CHCKBDGT.MSC - misc. setup data file for current dir
CHCKMISC.DAT - misc. setup data file for data dir
CHKRGSTR.DAT - check register data file
CHKRGSTR.IDX - index file to data file by date
CHKACCNT.IDX - index file to data file by account
CHKNUMBR.IDX - index file to data file by number
ACCOUNT .DAT - account data file
ACCOUNT .IDX - index file to data file
REGPAY  .DAT - regular payment data file
REGPAY  .IDX - index file to data file
```
{% endraw %}

## FILE0735.TXT

{% raw %}
```
Disk No:  735
Program Title:  CHECKBOOKS & BUDGETS version 2.2
PC-SIG version:  2.5

CHECKBOOKS AND BUDGETS lets you not only keep track of your personal
checking accounts, but also automatically sets aside portions of your
income into different categories in your budget.

This disk contains a full featured checkbook database, check printing
and budgeting program which will allow you to painlessly keep track of
your personal checking and savings accounts.  Checkbooks & Budgets lets
you automatically set aside a portion of your income into each different
category in your budget.  The budgeting portion of the program is
completely flexible as it allows you to move budgeted funds from account
to account at will.  See the full list of features below.

FEATURES:

    o Easy to use, windowed, menu driven, checkbook and budgeting system
    o Optional printing of industry standard checks
    o Built in help menu system
    o Data input editing and error checking
    o Up to 180 accounts - 120 for expenses / 60 for income
    o Up to 65535 check register entries (limited by disk space avail.)
    o Uses keyed index files for quick data storage and retrieval
    o Multiple formatted listings to screen or printer
    o Financial report generation including bar graphs
    o Automatic balancing
    o Quick and easy bank statement reconciliation system
    o Financial and loan calculations

Usage:  Financial and Business

Special Requirements:  None.

How to Start:  Type GO (press enter).

Suggested Registration:  $15.00

File Descriptions:

CHCKBDGT COM  Main program.
CHCKBDGT 000  Overlay file for main program.
CHCKBDGT HLP  Built-in help files.
CHCKBDGT TXT  Small documentation file listing all necessary files.
CHCKBDGT DOC  Documentation file for printing.
\DEMO         Directory with demo data/index files (copy to root dir).
INSTALL  COM  Installation program for floppies and hard disks.
CONFIG   SYS  Configuration file with FILES=20 - must be on boot disk !!!
BACKUP   BAT  Batch file for backing up data files.
DEMO     BAT  Batch file for running demo data files.
AUTOEXEC BAT  Batch file for automatic execution of CHCKBDGT.
GO       BAT  Batch file for getting started.

PC-SIG
1030D E. Duane Ave.
Sunnyvale, CA  94086
(408) 730-9291
(c) Copyright 1987,88,89 PC-SIG, Inc.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0735

     Volume in drive A has no label
     Directory of A:\

    AUTOEXEC BAT        47   8-14-89   1:00p
    BACKUP   BAT       595   8-14-89   1:00p
    CHCKBDGT 000     93440   8-14-89   1:00p
    CHCKBDGT COM     53753   8-14-89   1:00p
    CHCKBDGT DOC     43265   8-14-89   1:00p
    CHCKBDGT HLP     66198   8-14-89   1:00p
    CHCKBDGT TXT      1178   8-14-89   1:00p
    CONFIG   SYS        13   8-14-89   1:00p
    DEMO     BAT        70   8-14-89   1:00p
    FILE0735 TXT      2366   9-08-89   9:25a
    GO       BAT       527   8-14-89   1:00p
    INSTALL  COM     24130   8-14-89   1:00p
    ACCOUNT  DAT       792   8-14-89   1:00p
    ACCOUNT  IDX       546   8-14-89   1:00p
    CHCKBDGT MSC       257   8-14-89   1:00p
    CHCKMISC DAT       257   8-14-89   1:00p
    CHKACCNT IDX      1086   8-14-89   1:00p
    CHKNUMBR IDX       666   8-14-89   1:00p
    CHKRGSTR DAT      1920   8-14-89   1:00p
    CHKRGSTR IDX      1086   8-14-89   1:00p
    REGPAY   DAT      1183   8-14-89   1:00p
    REGPAY   IDX      2106   8-14-89   1:00p
           22 file(s)     295481 bytes
                           12288 bytes free
