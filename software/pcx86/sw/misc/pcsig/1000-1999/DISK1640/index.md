---
layout: page
title: "PC-SIG Diskette Library (Disk #1640)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1640/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1640"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "QPACS"

    QPACS is a personal accounting program that can handle up to nine
    different bank accounts, keep track of user defined budgets, record
    investments, assets and liabilities, and estimate your federal income
    taxes.
    
    For each bank account you may record check amounts, deposits, interest
    and service charges. QPACS can balance the bank statements, and it can
    print out a complete check register or a summary register by user-
    defined categories. The program can also print out a net worth
    calculation report, which is based upon the information from the
    checking accounts, the investments, and the assets and liabilities.
    QPACS also has a built-in address and phone number index card system
    which is very helpful for keeping track of the people and businesses
    that are important to your finances, and a household inventory file. The
    latest release also prints checks and includes a recurring check file.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1640.TXT

{% raw %}
```
Disk No: 1640                                                           
Disk Title: QPACS                                                       
PC-SIG Version: S1                                                      
                                                                        
Program Title: QPacs                                                    
Author Version: 2.21                                                    
Author Registration: $22.00                                             
Special Requirements: None.                                             
                                                                        
QPACS is a personal accounting program that can handle up to five       
different bank accounts, keep track of user defined budgets, record     
investments, assets and liabilities, and estimate your federal income   
taxes.                                                                  
                                                                        
For each bank account you may record check amounts, deposits, interest  
and service charges.  QPACS can balance the bank statements, and it can 
print out a complete check register or a summary register by user-      
defined categories.  The program can also print out a Net Worth         
Calculation report, which is based upon the information from the        
checking accounts, the investments, and the assets and liabilities.     
                                                                        
QPACS also has a built-in address and phone number index card system    
which is very helpful for keeping track of the people and businesses    
that are important to your finances.                                    
                                                                        
Program Limitations:  This version can only estimate Federal Income     
Taxes for 1988.                                                         
                                                                        
File Descriptions:                                                      
                                                                        
HELP     IDX  Help file.                                                
HELP     TXT  Help file.                                                
QPACS    DOC  Documentation.                                            
QPACS    EXE  Main program.                                             
README        File descriptions.                                        
TAX87    FIL  Tax rate file for 1987.                                   
TAX88    FIL  Tax rate file for 1988.                                   
TCODE    FIL  Data file.                                                
BANK     BAK  Back-up file for BANK.FIL.                                
TRANS    FIL  Transaction data file.                                    
BANK     FIL  Data file.                                                
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1988 PC-SIG, Inc.                                         
```
{% endraw %}

## HELP.TXT

{% raw %}
```
***  1   Help Message 001
This is a help message line 1
this is line 2
this is line 3.
***002 +                     QPACS MAIN MENU
 
 Select an option by keying in the letter code for the desired function,
 moving the highlight with the cursor key, or using indicated function
 keys.
 
       C.  Maintain Checkbook.  Enter Checks, Deposits, Interest, and
           and Service Charges.  Balance Bank Statement. Change Entries.
 
       P.  Print/Display Reports.  Print/Display Check Register, summary
           by category.
  
       B.  Bank Account Processing.  Add new bank account, change bank
           name, change current processing bank.
 
       T.  Maintain, display, sort Transaction/Category Codes.
 
       U.  Maintain, display, print budgets. Print expense to budget 
           comparison.
 
           more ...
***003-+
       A.  To maintain, display, and print assets other than cash and
           liabilities.  Used in Net Worth Calculation.
 
       I.  To maintain, display, and print Investments such as stocks
           and Mutual Funds, etc.  
 
       W.  Net Worth Calculation.  Calculates net worth based on Bank
           accounts, Investments, and Assets/Liabilities.  Prints report.
 
       F.  Income Tax Estimator.  Calculates your Federal Income Tax.
       
       X.  Index Card File.  To maintain, display, and print a list of
           names, addresses, and phone numbers.  
 
       S.  Backup Transaction File.  
 
 
           more ...
***004-
       Y.  Year-End Processing.  To Archive prior years transactions and
           to set up the files for the current year.
       
       H.  Help Screen. (or ESCape key)  
   
       E.  End Session - return to DOS.  (or F10)
***010                      PRINT REPORT MENU
 
       R - Print Check Register on Printer.
 
       D - Display Check Register on Screen.
 
       S - Print Summary of entries by category code on printer.
***020                       REPORT SELECTION
 
       A - Print or Display ALL entries (for the current bank).
 
       D - Print or Display all entries (for the current bank)
           that fall on or after the entered date. (Enter date
           when requested - MMDDYY)
       
       S - Print or Display all entries (for the current bank) for
           a particular category code. (Enter two-position category
           code when requested).
 
       U - Print or Display only UNCLEARED entries (for the current
           bank).
***030                    BANK ACCOUNT MENU
 
       C - Change current bank.  When you first enter the program it
           automatically assigns all entries to Bank number 1.  To
           process entries or reports for other banks you must change
           the current bank to the desired number.
       
       A - Used to add an additional bank to the file.  A maximum
           of five banks is allowed.  A "bank" can also be Cash or
           a Credit Card account.
       
       N - Used to change the name of a bank.
***040               TRANSACTION/CATEGORY CODE MENU
 
       A - Adds category to the category/budget file.  Category codes
           should be two-positions, alpha-numeric.
       
       C - To change the description of a category/budget code.
       
       L - To delete a category.
 
       D - To display all category codes.
 
       S - To sort category/budget records into alpha-numeric sequence.
           When new categories are added, they are added to the end of
           the file.  They must be sorted in order for them to come out
           in sequence on the category/budget displays and reports.
***050                        BUDGET MENU 
 
       D - Displays 12 month budget for an individual category.
       
       C - To change or add budget to a category.  To add a new category
           you must use Category Maintenance. (Main Menu Selection T.)
       
       P - Print Budgets for all categories by month on the printer.
 
       X - Print Expense to Budget Comparison.  Program will ask for 
           Month to be entered. The program will compare the year-to-date
           budgets for all categories to the year-to-date entries for
           those categories.  Only those entries that have a valid
           category code will be included.
       
       T - Displays all Catetory Codes.
***060 +                 INDEX CARD MENU  
 
       F1 or A.  Adds new Index Card to File.  Enter Last Name, First Name,
                 Address Line 1, Address Line 2 if required, City, two 
                 character State, Zip Code, Telephone Number, and up to two
                 memo lines.  Press enter to bypass any field.  When all
                 fields have been entered, you have the choice of bypassing
                 the record (ESCape) or accepting (Enter).
 
       F2 or D or Enter.  To display all fields of the current highlighted
                 card.  Press enter to return.
 
       F3 or C.  To change the current highlighted card.  Enter changed data
                 or press enter.  When all fields have been entered, you have
                 the choice of bypassing the record (ESCape) or accepting
                 (Enter).
 
       F4 or L.  To delete the current highlighted card.  The space for the
                 card will continue to appear until the file is sorted.
***061-                  INDEX CARD MENU  
 
       F5 or P.  Print Options.  See Print Help Screen.
   
       F6 or S.  Sorts the Cards in the following sequence.  Last Name, First
                 Name.  Drops all deleted records.  Also backs up the file.
 
       F10 or E. Return to Prior Menu.
 
       ESCape or H.  Help Screen.
***062 +              ASSETS/LIABILITIES
       F1 or A.  Adds new asset or liability to file.  Do not include Bank
                 Accounts included in the Checkbook Menu or Investments
                 in the Investment File.  Key in Account Number, Description,
                 and Value.  Accounts should be assigned as follows:
 
                    1xxxx   Current Assets.  (Cash, Accounts Reveivable)
                    2xxxx   Investments      (CD's, IRA's, etc.)
                    3xxxx   Long Term Assets. (House, Car, Furniture, etc)
                    4xxxx   Current Liabilities (Charge Accounts, Car Loans)
                    5xxxx   Long Term Liabilities. (Mortgages, etc.)
       
       F2 or D or Enter.  To display all fields of the current highlighted
                 record.  Press enter to return.
 
       F3 or C.  To change the current highlighted record.  Enter changed data
                 or press enter.  When all fields have been entered, you have
                 the choice of bypassing the record (ESCape) or accepting
                 (Enter).  
***063-               ASSETS/LIABILITIES
 
       F4 or L.  To delete the current highlighted record.  The space for the
                 record will continue to appear until the file is sorted.
 
       F5 or P.  Print Options.  See Print Help Screen.
   
       F6 or S.  Sorts the file into Account Number sequence.  Drops all
                 deleted records and backs up the file.
 
       F10 or E. Return to Prior Menu.
 
       ESCape or H.  Help Screen.
***064 +              INVESTMENTS
 
       F1 or A.  Adds new Investment to file.  Key in Account Number (should
                 start with 2xxxx), Description, Quantity (4 decimals), and
                 current price (4 decimals).  When all fields have been 
                 entered, you have the choice of bypassing the record 
                 (ESCape) or accepting (Enter).
       
       F2 or D or Enter.  To display all fields of the current highlighted
                 record.  Press enter to return.
 
       F3 or C.  To change the current highlighted record.  Enter changed data
                 or press enter.  When all fields have been entered, you have
                 the choice of bypassing the record (ESCape) or accepting
                 (Enter).  
***065-                  INVESTMENTS
 
       F4 or L.  To delete the current highlighted record.  The space for the
                 record will continue to appear until the file is sorted.
 
       F5 or P.  Print Options.  See Print Help Screen.
   
       F6 or S.  Sorts the file into Account Number sequence.  Drops all
                 deleted records and backs up the file.
 
       F10 or E. Return to Prior Menu.
 
       ESCape or H.  Help Screen.
***067              INVESTMENT PRINT MENU
 
       F1 or 1.  To print Investments on 11 inch paper.
                 Prints total value of Investments.
 
       F10 or E. Return to Prior Menu.
   
       ESCape or H. Help Screen
***068            ASSET/LIABILITY PRINT MENU
 
       F1 or 1.  To print Assets/Liabilities on 11 inch paper.
 
       F10 or E. Return to Prior Menu.
   
       ESCape or H. Help Screen
***069              INDEX CARD PRINT MENU
 
       F1 or 1.  To print entire Index File on 11 inch paper.
 
       F2 or 2.  To print entire Index File on 1-up 15/16 inch labels.
   
       F3 or 3.  To print entire Index File on 2 1/6 X 4 inch Rotary labels.
 
       F4 or 4.  To print Return Address labels (or any 4 line message) on
                 1-up 15/16 inch labels.
 
       F10 or E. Return to Prior Menu.
   
       ESCape or H. Help Screen
***090                 ORDERING INFORMATION
 
           To order an updated version of QPACS, send a check or money
           order for $22.00 to:
 
                   Richard A. Williams
                   P.O. Box 9311
                   Crystal Lake, Illinois 600l4
 
  
          Any Questions call:   815-455-6333
***103 +                     CHECKBOOK MAIN MENU    
 
       To enter Checks, Deposits, Interest (received), or Service Charges
       (paid):
 
            Date:          Enter 5 (MDDYY) or 6 (MMDDYY) position date.
 
            Check Number:  If desired, enter 1-5 position number.
 
            Description:   Any desired description.
 
            Amount:        Enter dollars and cents "calculator" style.
                           (10 for $10.00,  1.5 for $1.50, etc.)
 
            Category Code: If desired, enter two position category code
                           to track entries by category and for expense to
                           budget comparisons.   To cancel the entry of
                           this item, key in 00.  To display a list of category
                           codes, key in ??.        more ...
***104-                       CHECKBOOK MAIN MENU
 
       To balance your checkbook, enter the amount shown on the bank statement
       as the ending balance, answer "y" or "n" as to whether each entry has
       cleared (shown on the statement).  When complete, if both totals
       agree, checkbook is balanced.  Don't forget to add an entry for
       service charges, if any.
 
       To change previously entered entries, key in the type of entry:
       C - Check, D - Deposit, I - Interest, or S - Service Charge.
       Then key in the amount of the entry.  When a matching entry is
       found, any of the fields in the record can be changed.
***210               Income Tax Estimator - Form 1040
 
                             Year
 
       Enter the last two digits of the year for which taxes are to
       be estimated.  Example:  1987 - enter "87".  If tax rates are not
       available for that year, an error message will appear.
***215               Income Tax Estimator - Form 1040
 
                              Filing Status
 
 Enter your filing status as per IRS instructions.
  
       1 - Single
       2 - Married filing joint return (even if only one had income)
       3 - Married filing separate return.
       4 - Head of household
       5 - Qualifying widow(er) with dependent child.
 
***220               Income Tax Estimator - Form 1040
 
                           Exemptions
 
 Enter total number of exemptions claimed.  
 
***225               Income Tax Estimator - Form 1040
 
                       Wages, Salaries, Tips, Etc.
 
    Show the total of all wages, salaries, fees, commissions, tips, bonuses,
    supplemental unemployment benefits, and other amounts you were paid
    before taxes, insurance, etc.
***230               Income Tax Estimator - Form 1040
 
                         Taxable Interest Income.
 
    Enter the total of your taxable interest income.  If the total is more
    than $400, press F3 to fill out schedule B.  If you fill out Schedule B,
    the total will automatically be transfered.  
***235               Income Tax Estimator - Form 1040
 
                            Dividend Income
 
    Enter all dividends here.  Dividends are distributions of money, stock,
    or other property that corporations pay to stockholders.  They also
    include dividends you receive through a partnership, an S corporation,
    or an estate or trust.  If over $400, press F3 to fill out schedule B.
    If you fill our Schedule B, the total will automatically be transfered.
***240               Income Tax Estimator - Form 1040
 
                            Schedule C
 
    Business income or (loss) from Schedule C. Enter amount calculated
    on Schedule C.
***245               Income Tax Estimator - Form 1040
 
                            Schedule D
 
    Capital Gain or loss.  Enter amount calculated from Schedule D.
***250               Income Tax Estimator - Form 1040
 
                            Schedule E.
 
    Enter Rents, royalties, partnerships, estates, trusts, etc.  Enter 
    amount calculated from Schedule E.
***255               Income Tax Estimator - Form 1040
 
                             Schedule F.
 
    Farm income or (loss).  Enter amount calculated from Schedule F.
***260               Income Tax Estimator - Form 1040
 
                              Other Income
 
    List any other income not included in other categories.  
***265               Income Tax Estimator - Form 1040
 
                              Adjustments to Income
 
    Include reimbursed employee business expenses from form 2106, you or
    your spouse's IRA deduction, self-employed health insurance deduction,
    Keough retirement plan and self-employed SEP deduction, penalty for
    early withdrawal of savings, alimony paid, etc.
***270               Income Tax Estimator - Form 1040
 
                           Itemized Deductions
 
    Enter deductible portion of itemized deductions or press F2
    to go to Schedule A screen to enter itemized deductions.
***275               Income Tax Estimator - Form 1040
 
                             Tax Credits
 
     Enter total of deductible credits.  Including Credit for child
     and dependent care expenses (Form 2441), Credit for the elderly
     or the permanently and totally disabled (Schedule R), Foreign
     Tax credit (Form 1116), General Business Credit (Form 3800, 3468,
     5884, 6478, 6765, or 8586).
***280               Income Tax Estimator - Form 1040
 
                          Other Taxes
 
    Enter total of other taxes.  Including Self-employment tax (Schedule SE),
    Alternative minimum tax (Form 6251), Tax from recapture of investment
    credit (Form 4255), Social Security tax on tip income not reported
    to employer (Form 4137), Tax on an IRA or a qualified retirement plan
    (Form 5329).
***285               Income Tax Estimator - Form 1040
 
                        Federal Income Tax Withheld
 
    Enter to total amount withhend as shown on forms W-2, W-2G, W-2P,
    and 1099-R.
***290               Income Tax Estimator - Form 1040
 
                         Excess FICA Withheld
 
    Enter the excess Social Security Tax and RRTA Tax withheld - for two
    or more employers.
***295               Income Tax Estimator - Form 1040
 
                             Other Payments
 
    Enter other Payments.  Include Estimated tax payments and amounts
    applied from prior year returns, Earned Income Credit, Amount paid
    with Form 4868 (extension request), Credit for Federal tax on gasoline
    and special fuels (Form 4136), and Regulated investment company credit 
    (Form 2439).
***315          Income Tax Estimator - Form 1040 - Schedule A
 
                       Medical and Dental Expenses
 
    Line 1a.  Prescription medicines and drugs, insulin, doctors, dentists,
    nurses, hospitals, insurance premiums you paid for medical and dental
    care, etc.
***320          Income Tax Estimator - Form 1040 - Schedule A
 
                       Medical and Dental Expenses
 
     Line 1b.  Transporation and lodging pertaining to medical and dental
     expenses.
***325          Income Tax Estimator - Form 1040 - Schedule A
 
                       Medical and Dental Expenses
 
     Line 1c.  Other medical and dental expenses.  Hearing Aids, dentures,
     eyeglasses, etc.
***330          Income Tax Estimator - Form 1040 - Schedule A
 
                    Enter State and Local Income Taxes.
***335          Income Tax Estimator - Form 1040 - Schedule A
 
                         Real Estate Taxes
***340          Income Tax Estimator - Form 1040 - Schedule A
 
       Enter other taxes including personal property taxes, if any.
***345          Income Tax Estimator - Form 1040 - Schedule A
 
     Enter deductible home mortgage interest you paid to financial
     institutions.
***350          Income Tax Estimator - Form 1040 - Schedule A
 
    Enter deductible home mortgage interest you paid to individuals.
***355          Income Tax Estimator - Form 1040 - Schedule A
 
    Enter deductible Points paid.
***360          Income Tax Estimator - Form 1040 - Schedule A
 
    Enter deductible investment interest.
***365          Income Tax Estimator - Form 1040 - Schedule A
 
    Enter personal interest you paid (charge accounts, etc.).
    Enter 100% of interest.  Deductible portion will be calculated.
***370          Income Tax Estimator - Form 1040 - Schedule A
 
    Enter cash contributions where the total amount to any one organization
    was less than $3000.
***375          Income Tax Estimator - Form 1040 - Schedule A
 
    Enter cash contributions that totaled to more than $3000 per
    organization.
***380          Income Tax Estimator - Form 1040 - Schedule A
 
    Enter dollar value of contributions other than cash.
***385          Income Tax Estimator - Form 1040 - Schedule A
 
    Enter Carryovers from prior years.
***390          Income Tax Estimator - Form 1040 - Schedule A
 
    Casualty or theft losses (Form 4684)
***395          Income Tax Estimator - Form 1040 - Schedule A
 
       Moving Expenses (Form 3903 or 3903F).
***400          Income Tax Estimator - Form 1040 - Schedule A
  
     Enter Unreimbursed employee business expenses (Form 2106)
***405          Income Tax Estimator - Form 1040 - Schedule A
 
      Enter other Miscellaneous Deductions that are subject to the 2%
      Adjusted Gross Income limit.
***410          Income Tax Estimator - Form 1040 - Schedule A
 
   Enter other Miscellaneous deductionss that were not subject to the
   2% Adjusted Gross Income Limit.
***450          Income Tax Estimator - Form 1040 - Schedule A
 
                Interest income from seller-financed mortgages.
 
    Enter the interest portion of any payments you received from an 
    individual based on a take-back mortgage or other form of seller
    financing that resulted form the sale of your home or other property.
***455          Income Tax Estimator - Form 1040 - Schedule B
 
                          Other Interest Income
 
    Enter all taxable interest (other than seller-financed interest) that
    you received or that was credited to your account so that you could
    withdraw it.
***460          Income Tax Estimator - Form 1040 - Schedule B
 
                            Dividend Income
 
    Include all divident income including capital gain and nontaxable
    distributions (they will be deducted on lines 6 and 7.)  Include
    cash and the value of stock, property, or merchandise you received as
    a dividend.
***465          Income Tax Estimator - Form 1040 - Schedule B
 
                       Gapital Gain Distributions
 
    Enter Capital gain distributions included on line 4.
***470          Income Tax Estimator - Form 1040 - Schedule B
 
                      Nontaxable Distributions
 
    Enter nontaxable distributions that were included on line 4.
***998  
  
   
    
***999End of File












```
{% endraw %}

## QPACS.DOC

{% raw %}
```
         QPACS Version 2.2 Copyright 1988 by Richard A. Williams


A. General Description.

     QPACS (Quick Personal ACcounting System) is a full-featured
     program designed to provide financial management functions for
     individuals or families.  QPACS is written entirely in
     Assembler Language using direct-to-screen video memory to
     provide the quickest possible response time.  QPACS provides
     the following functions:

     1. Record entries (Checks, Deposits, Interest, Service
     Charges) for up to 5 different Bank Accounts.  Bank Accounts
     could be assigned for Cash or Credit Card Accounts.  Entries
     can be assigned to various categories for budgeting or tax    
     purposes.

     2. Print reports, either complete or selective, showing Bank
     Account balances and transactions.

     3. Balance bank statements.  

     4. Budgets for user-defined categories can be entered,
     printed, and compared to actual expenses.

     5. Investments can be recorded and tracked.

     6. Assets and Liabilities can be recorded for purpose of the
     Net Worth Calculation.
 
     7. An Index Card File for recording Names, Addresses, and
     Phone Numbers or other similar information.  The file can be
     printed on paper, mailing labels, or rotary index cards.

     8. A Net Worth calculation and report using information from
     the Checking Account files, the Investment file, and the
     Asset/Liability file.

     9. Transaction File Backup. 

     10. Year-End Processing.  To Clear the files for the new year
     and archive last year's data.

	11.  Estimating your Federal Income Taxes.

B.	Getting Started.

	Copy the following files to your production disk:

		QPACS.EXE		Object Program
		HELP.TXT		Help File
		HELP.IDX		Help File Index
		TAXxx.FIL		Tax Rate Files (Copy all files starting with
					TAX.  Example:  TAX87.FIL is for 1987, etc.)

	All transaction files will be created as needed in the current
     path.

	To use QPACS, set your current path to the directory containing the
     QPACS programs and files, key in QPACS.  Follow instructions on the
     screen.


C.  Main Menu.  

     On most screens, position highlight to desired function and   
     press ENTER.  Or key in letter code.  On most screens, F10
     will return to the previous menu, and ESCape will call a help
     screen.

     1. C-Maintain Checkbook

     2. P-Print/Display Reports.

     3. B-Bank Accounts.

     4. T-Transaction/Category Codes.

     5. U-Budgets.
 
     6. A-Assets/Liabilities.

     7. I-Investments.

     8. W-Net Worth.

	9. F-Federal Income Tax Estimator.

     10. X-Index Card File.

     11. S-Backup Transaction File.

     12. Y-Year-End Processing.

     13. H-Help.  (or ESCape)

     14. E-End    (or F10)


D. Maintain Checkbook.

     1. C-Enter Checks.

          a) Date:  Field should be keyed as five positions
          (MDDYY) or six (MMDDYY).  To return to prior menu,
          press Enter with no entry.

          b) Check Nr: Key in 1 to 5 digits.  Just press Enter
          to bypass entry of this field.

          c) Description:  Key in any desired description up
          to 30 characters.  Press Enter to bypass.

          d) Amount:  Key in amount "calculator" style:  10
          for $10.00 1.5 for $1.50, etc.  

          e) Category:  Key in the two position Category Code,
          if desired.  Keying in ?? with cause a display of
          all the available category codes.  Keying in 00 will
          bypass the entry of this check and return to the
          beginning for a restart.

     2. D-Enter Deposits.

          a) Date:  Field should be keyed as five positions
          (MDDYY) or six (MMDDYY).  To return to prior menu,
          press Enter with no entry.

          b) Memo:  Key in any desired description up to 30
          characters.  Press Enter to bypass.

          c) Amount:  Key in amount "calculator" style:  10
          for $10.00, 1.5 for $1.50, etc. 

          d) Category:  Key in the two position Category Code,
          if desired.  Keying in ?? will cause a display of
          all the available category codes.  Keying in 00 will
          bypass the entry of this deposit and return to the
          beginning for a restart.

     3. I-Enter Interest.

          a) Date:  Field should be keyed as five positions
          (MDDYY) or six (MMDDYY).  To return to prior menu,
          press Enter with no entry.

          b) Memo:  Key in any desired description up to 30
          characters.  Press Enter to bypass.

          c) Amount:  Key in amount "calculator" style:  10
          for $10.00, 1.5 for $1.50, etc. 

          d) Category:  Key in the two position Category Code,
          if desired.  Keying in ?? with cause a display of
          all the available category codes.  Keying in 00 will
          bypass the entry of this interest and return to the
          beginning for a restart.

     4. S-Enter Service Charges.

          a) Date:  Field should be keyed as five positions
          (MDDYY) or six (MMDDYY).  To return to prior menu,
          press Enter with no entry.

          b) Memo:  Key in any desired description up to 30
          characters.  Press Enter to bypass.

          c) Amount:  Key in amount "calculator" style:  10
          for $10.00, 1.5 for $1.50, etc. 

          d) Category:  Key in the two position Category Code,
          if desired.  Keying in ?? with cause a display of
          all the available category codes.  Keying in 00 will
          bypass the entry of this service charge and return
          to the beginning for a restart.

     5. B-Balance Checkbook

          a) Before starting, be sure any service charges
          shown on the statement have been entered.

          b) Enter the balance shown on the Bank Statement,
          press Enter.

          c) Each uncleared item will appear on the screen. 
          Enter "y" if the item appears on the statement, or
          "n" if it has not yet cleared.

          d) When all uncleared items have been processed, the
          totals from the bank statement and from your
          transaction file will appear.  If they both are the
          same you are in balance.

     6. G-Change Entries.

          a) Key in the type of entry to be changed.  C -
          Check, D - Deposit, I - Interest, or S - Service
          Charge.  Key in E to return to prior menu.

          b) Key in the amount of the entry to be changed.

          c) When an entry is found that matches the amount
          entered, the record will display with each field on
          a separate line.

          d) To return with no updates key in E.

          e) If this is not the entry you wish to update, key
          in B to bypass and search for another match.

          f) If this is the entry you wish to update, key in
          the Field Number corresponding to the field to be
          changed.

               1) Date.  Enter 5 (MDDYY) or 6 (MMDDYY)
               position date.

               2) Check Number.  Enter 1 - 5 position
               check number.

               3) Descr.  Enter new description.  To
               blank out description just press Enter.

               4) Amount.  Key in amount as in
               transaction entry.

               5) Type.  Should be "C" for Check, "D" for
               Deposits, "I" for Interest, and "S" for
               Service Charges.  If necessary to        
               change, the new entry must be a CAPITAL
               letter.

               6) Print Flag.  Not used.  Can be any
               character.

               7) Clear Flag.  Indicates whether entry
               has cleared the bank.  CAPITAL "Y" means
               yes.  Any other character means no.

               8) Bank.  Indicates Bank number of entry. 
               Should be 1 through 5 depending on
               assigned banks. (See Bank menu)

               9) Tran Code.  Category code.  Can be any
               two alphanumeric characters.

          g) If any other fields are to be changed enter the
          field number and repeat the previous step.

          h) Enter "A" to accept updates and return to menu.

     7. H-Help.  Key in "H" at any menu to bring up the on-line
     help screens.

     8. E-Done.  Key in "E" at any menu to return to the prior
     menu.  From the Main Menu "E" will end the session and return
     to DOS.

E. Print/Display Reports.

     1. Enter the desired function.

          a) R-Print Check Register on printer.

          b) D-Display Check Register on screen.

          c) S-Print summary by category code on printer.

          d) H-HELP.  On-line HELP screen.

          e) E-Done.  Return to prior menu.


     2. Select entries to print or display.

          a) A-Print/Display ALL entries.

          b) D-Print/Display all entries after a selected
          date.  Following screen will ask for a date -
          MMDDYY.

          c) S-Print/Display selected category codes. 
          Following screen will ask for a category code.

          d) U-Print/Display only Uncleared items.

          e) H-HELP.  On-line HELP screen.

F. Bank Accounts.

     1. Change Current Bank.  When you first enter the program, it
     automatically assigns all entries to Bank Number 1.  To
     process entries or reports for other banks you must change the
     current bank to the desired number.  Key in the number shown
     in the box in the lower right corner of the screen pertaining
     to the bank you wish to process.

     2. Add Bank Account.  Used to add a bank to the file.  A
     maximum of five banks are allowed.  The program will
     automatically assign the next available number.  Key in the
     bank name after the arrow.

     3. Change Bank Name.  To change a bank name, key in the bank
     number.  Key in the new name after the arrow.

     4. Help.  Key in "H" at any menu to bring up the on-line help
     screens.

     5. Done - Return to prior menu.

G. Transaction/Category Codes.

     1. Add Category.  Adds a category to the Category/Budget File.
     Enter a two digit, alphanumeric code for each type of expense
     you expect to track or budget.  For example you might put "05"
     for Rent, "06" for Telephone, "11" for Car Payment, etc.  Key
     in the Category Description when requested.

     2. Change Category.  To change a category description, key in
     the category code.  When the category record is found, key in
     the new description.

     3. Delete Category.  To delete a category, INCLUDING THE
     BUDGETS FOR THAT CATEGORY, key in the category code.

     4. Display Categories.  Displays all category codes on the
     screen.

     5. Sort Category File.  When new categories are added, they
     are added to the end of the file.  In order to have
     category/budget displays and reports come out in sequence,
     they should be sorted.

     6. Help.  Key in "H" at any menu to bring up the on-line help
     screens.

     7. Done - Return to prior menu.

H. Budgets.

     1. D - Displays the current 12 month budget for an individual
     category.

     2. C - To change a budget or to add a budget to an existing
     category.  To add a new category you must use Category
     Maintenance. (See Main Menu selection T.)

     3. P - Prints budgets for all categories by month on the
     printer.

     4. X - Prints Expense to Budget comparison.  Program will ask
     for month to be entered. Key in two position month (01-12).
     The program will compare the year-to-date budgets for all
     categories to the year-to-date entries for those categories.
     Only those entries that have a valid category code will be
     included.  Entries from all bank accounts are included.

     5. T - Displays all category codes on the screen.

I. Assets/Liabilities.

     1. A or F1. Adds new record to file.  Do not include Bank
     Accounts included in the Checkbook Menu or Investments that
     are included in the Investment File. Key in Account Number,
     Description, and Value.  Accounts should be assigned as
     follows:
 
             1xxxx   Current Assets.  (Cash, Accounts Receivable)
             2xxxx   Investments      (CD's, IRA's, etc.)
             3xxxx   Long Term Assets. (House, Car, Furniture, etc)
             4xxxx   Current Liabilities (Charge Accounts, Car Loans)
             5xxxx   Long Term Liabilities. (Mortgages, etc.)
       
     2. F2 or D or Enter.  To display all fields of the current
     highlighted record.  Press enter to return.
 
     3. F3 or C.  To change the current highlighted record.  Enter
     changed data or press enter.  When all fields have been
     entered, you have the choice of bypassing the record (ESCape)
     or accepting (Enter).  
 
     4. F4 or L.  To delete the current highlighted record.  The
     space for the record will continue to appear until the file is
     sorted.
 
     5. F5 or P.  Print Options.  Print menu will appear.
 
          a) F1 or 1.  To print Assets/Liabilities on 11 inch
          paper.
 
          b) F10 or E. Return to Prior Menu.
   
          c) ESCape or H. Help Screen
   
     6. F6 or S.  Sorts the file into Account Number sequence. 
     Drops all deleted records and backs up the file.
 
     7. F10 or E. Return to Prior Menu.
 
     8. ESCape or H.  Help Screen.


J. Investments.
 
     1. F1 or A.  Adds new Investment to file.  Key in Account
     Number (should start with 2xxxx), Description, Quantity (4
     decimals), and current price (4 decimals).  When all fields
     have been entered, you have the choice of bypassing the record
     (ESCape) or accepting (Enter).
       
     2. F2 or D or Enter.  To display all fields of the current
     highlighted record.  Press enter to return.
 
     3. F3 or C.  To change the current highlighted record.  Enter
     changed data or press enter.  When all fields have been
     entered, you have the choice of bypassing the record (ESCape)
     or accepting (Enter).  
 
     4. F4 or L.  To delete the current highlighted record.  The
     space for the record will continue to appear until the file is
     sorted.
 
     5. F5 or P.  Print Options.  Print menu appears.
       
          a) F1 or 1.  To print Investments on 11 inch paper.
          Prints total value of Investments.
 
          b) F10 or E. Return to Prior Menu.
   
          c) ESCape or H. Help Screen
   
     6. F6 or S.  Sorts the file into Account Number sequence. 
     Drops all deleted records and backs up the file.
 
     7. F10 or E. Return to Prior Menu.
 
     8. ESCape or H.  Help Screen.

 
K. Net Worth Calculation.  Your Net Worth is calculated and printed
based on information in your Checkbook Files, Investment File, and
asset/Liability File.  To be most accurate, make sure all files have
been updated before proceeding.

L.  Federal Income Tax Estimator.

	The Income Tax Estimator is designed to help you estimate your
     federal income taxes and to compare one year to the next.  For
     example, you could estimate 1988 taxes and print and save them. 
     Then you could later re-read 1988, made some "what-if" changes and
     compare the results to the original estimate.  The new estimate
     could be stored, replacing the old estimate or could be stored with
     a separate name.  To print the results for comparisons, use the
     print-screen key.

	To calculate taxes for a year, the tax rate file for that year must
     be in the current path. The tax rate files are named TAXnn.FIL,
     where nn = the tax year.  For example, the tax rate file for 1987
     is named TAX87.FIL.  New tax rate files will be available when the
     IRS finalizes the years' rates and rules.  

	Note:  QPACS calculates taxes using the Tax Schedules.  IRS
     instructions say to use the Tax Tables if your taxable income is
     below $50,000.00.  Therefore there may be a few dollars difference
     between the QPACS calculation and your actual taxes.

	To use the Tax Estimator, key in "F" from the main menu.  

	Key in the fields as indicated by the help box in the lower right
     hand corner of the screen.  For more help press the ESCape key.

	To save a file, press F9.  Then key in the file name for the file
     to save.  Files will be saved in the current path.  Just enter the
     file name (and extension if desired).  Example:  MY1987.TAX

	To read in a previously saved file, press F1.  Then key in the file
     name of the saved file.  Reading in a saved file will overlay any
     existing file already on the screen.  

	Schedules A and B.  These schedules can be calculated separately or
     you can just enter the estimated amount on the Schedule A and B
     lines.  If you do use the separate Schedules, the amount will
     automatically be forwarded to the 1040 screen.  Be sure you perform
     the calculate function (F8) before returning to the 1040 screen.

	To calculate the tax at any point just press the F8 key.

	Note:  The calculate function (F8) only calculates the data on the
     current screen.  If you were to read in, for example, your 1987 tax
     estimate, change the tax year to 1988 and press F8, you would not
     recalculate Schedules A and B.  In order to do this properly you
     must read in 1987, go to Schedule A (F2), calculate (F8), return
     (F10), change the tax year to 88, and calculate (F8).  Follow the
     same procedure for Schedule B.

	To clear all the fields on the screen (including those on the
     Schedule A and B screens) press F7.  

	Press F10 to end the Tax session and return to the main menu.  You
     may later come back to the Income Tax Estimator and continue.  Once
     you end your QPACS session and return to DOS, however, you will
     lose all of your keyed data.  Be sure to save your file before
     exiting from QPACS.

M. Index Card File.
 
     1. F1 or A.  Adds new Index Card to File.  Enter Last Name,
     First Name, Address Line 1, Address Line 2 if required, City,
     two character State, Zip Code, Telephone Number, and up to two
     memo lines.  Press enter to bypass any field.  When all fields
     have been entered, you have the choice of bypassing the record
     (ESCape) or accepting (Enter).
 
     2. F2 or D or Enter.  To display all fields of the current
     highlighted card.  Press enter to return.
 
     3. F3 or C.  To change the current highlighted card.  Enter
     changed data or press enter.  When all fields have been
     entered, you have the choice of bypassing the record (ESCape)
     or accepting (Enter).
 
     4. F4 or L.  To delete the current highlighted card.  The
     space for the card will continue to appear until the file is
     sorted.

     5. F5 or P.  Print Options.  Print menu appears.

          a) F1 or 1.  To print entire Index File on 11 inch
          paper.
 
          b) F2 or 2.  To print entire Index File on 1-up
          15/16 inch labels.
   
          c) F3 or 3.  To print entire Index File on 2 1/6 X 4
          inch Rotary labels.
 
          d) F4 or 4.  To print Return Address labels (or any
          4 line message) on 1-up 15/16 inch labels.
 
          e) F10 or E. Return to Prior Menu.
   
          f) ESCape or H. Help Screen

     6. F6 or S.  Sorts the Cards in the following sequence.  Last
     Name, First Name.  Drops all deleted records.  Also backs up
     the file.
 
     7. F10 or E. Return to Prior Menu.
 
     8. ESCape or H.  Help Screen.

 
N. Year End Processing.  Year End Processing clears your checkbook
transaction file of last year's transactions and sets up balance forward
totals for the new year.  Any new year transactions or uncleared prior
year's transactions are kept on the new file.  Before starting make sure
all bank statements have been balanced and all "cleared" transactions
are properly coded.


O. Help.  On-line Help screens are available at every menu. Just key in
"H".


P. Problems, Bugs.

     If you have any problems or wish to report any bugs, please   
     contact the author.  

            Richard A. Williams
            P.O. Box 9311      
            Crystal Lake, Il 60014
            (815) 455-6333


Q. Other.

     The author assumes no liability to you or any other person for
     any damage or loss caused by this software either directly or
     indirectly.  

R.  Registration Information and Shareware Concept.

	QPACS is a copyrighted program.  It is distributed as User-
     Supported Software.  Meaning that you are free to use the program
     as-is for your own personal use.  You are encouraged to register
     and to pay the license fee so that you can obtain the most current
     release with the latest features and the most current tax rates. 
     By registering you will be supporting this "try now, pay later"
     concept of software distribution.

	Individuals are granted permission and encouraged to copy and pass
     along copies of this diskette provided that no price or other
     consideration is charged, except for the cost of distribution
     materials, and provided that copies are not modified in any way and
     include all documentation.

	Registration includes a copy of the most current program and
     documentation plus one free upgrade to the next release.


	The current price for registration is $22.00.

		Send a Check or Money Order to:

		Richard A. Williams
		P.O. 9311
		Crystal Lake, Illinois 60014

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
                            QPACS ORDER FORM
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


Name                                                       

Address                                                            

City                            State         Zip          

Phone                         

Computer                            DOS Release            

Printer                                                    

Where you obtained your copy of QPACS                      

                                                           
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1640

     Volume in drive A has no label
     Directory of A:\

    FILE1640 TXT      3479  11-28-89   9:53a
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       540  11-28-89  11:03a
    HELP     IDX       462  10-09-88   7:22p
    HELP     TXT     21011  10-09-88   7:22p
    QPACS    DOC     22853  10-10-88   9:23p
    QPACS    EXE    110192  11-04-88   7:02p
    README            1212   2-10-89   6:55p
    TAX87    FIL       821   6-21-88   9:18p
    TAX88    FIL       821   9-21-88   8:36p
    TCODE    FIL       140   2-10-89   6:48p
           11 file(s)     161569 bytes
                          154624 bytes free
