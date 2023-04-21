---
layout: page
title: "PC-SIG Diskette Library (Disk #2835)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2835/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2835"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## MANUAL.DOC

{% raw %}
```
--------------------- Welcome to Financier Plus ----------------------

Thank you for selecting Financier Plus by Virtual Srket Technology.
Financier is an easy to use financial advisor, loan amortization, 
text editor, budget organizer, stock portfolio, checkbook ledger and 
calendar.  


++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+                                                                    +
+                               F I L E                              +
+                                                                    +
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


-------------------------------- New --------------------------------

Prepare to load a new document by erasing the current document.

-------------------------------- Open -------------------------------

Shows a dialog box that allows you to select and load a new document.

---------------------------- Insert File ---------------------------- 

Shows a dialog box that allows you to select and load a new document at
the current cursor position.

-------------------------------- Save ------------------------------- 

Save current document to selected filename. A BUTTON called 
Save is included as a shortcut.

------------------------------ Save As ------------------------------ 

Save current document to selected filename.

------------------------------- Close ------------------------------- 

Use this option to save the working values and exit the program.


++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+                                                                    +
+                               E D I T                              +
+                                                                    +
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


-------------------------------- CUT -------------------------------- 

Cut the selected text to the clipboard. Same as delete.

-------------------------------- Copy ------------------------------- 

Copy the selected text to the clipboard.
 
------------------------------- Paste ------------------------------- 

Paste the text from the clipboard to the current cursor position.
 
------------------------------- Clear ------------------------------- 

Clear the selected text.

---------------------------- Select ALL -----------------------------

Select the entire document.


++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+                                                                    +
+                             S E A R C H                            +
+                                                                    +
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


------------------------------- Find --------------------------------

Enter the string to search for.

----------------------------- Find Next -----------------------------

Enter the string to search for or find the next occurance of a previous
string search key.

----------------------------- Replace -------------------------------

Enter a string to search for and a string to replace it with. You can
alternatively choose to replace all occurances of the string.


++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+                                                                    +
+                           A M O R T I Z E                          +
+                                                                    +
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


-------------------------- MONTHLY PAYMENT --------------------------

This option shows the  monthly payment of a loan given  the
amount of loan, interest rate, and term or number of payments.
The term is usually the number of months in the loan period. All
of the input parameters and the monthly payment are displayed in
the editor. The future value of the loan is also shown. A BUTTON
called Payment is included as a shortcut.

------------------------- Iterate Interest --------------------------

Select this option to vary the interest rate over a user defined range. 
Just enter the present value, start interest rate, stop interest rate ,
interest rate increment, and loan term. The monthly payment and the 
incremental interest rates will be calculated. 

----------------------- Amortization Schedule -----------------------

Enter the present value or amount of loan, interest rate, term or 
number of payments, add-in, and if there is a balloon on the loan.
The add-in represents any insurance or other costs included in a
monthly payment but not applied to the loan amount. If the balloon 
is either 0 or a number greater than the loan term then it has no
effect. If the balloon is between 0 and the loan term then the schedule
will stop printing when the value is reached. The schedule is shown
in the editor and can be saved in ASCII format for use in other programs.
A BUTTON called Schedule is included as a shortcut. 

------------------------ Find Present Value ------------------------

This will determine the amount or the present value of the loan
given interest rate, term or number of payments, and the monthly
payment.  

-------------------------- Find Loan Term --------------------------

Use this option to determine the term or number of payments in a
loan given the interest rate, present value or amount of loan,
and the monthly payment. 

--------------------------- Rule of 78's ---------------------------

Determines the interest amount of a loan with add-on interest
with an early payoff. Simply supply the present value, future
value, and how early the loan is paid off ( in other words supply
a value between 1 and 12 representing the period within a calendar 
year that the loan was paid. The present and future values bracket
the calendar year).


++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+                                                                    +
+                           F I N A N C E                            +
+                                                                    +
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


------------------------- Accrued Interest ---------------------------

When this option is selected the user can determine a simple
interest in savings account situations. Just enter the amount of
money, the interest rate and the number of days the money is
drawing interest. The amount of money earned will be shown in
the entry window.   

------------------------ Compound Interest --------------------------

Given the amount of debit or credit in an account, the annual
interest rate, and the number of periods this option will
calculate the interest earned/charged to the account.  A BUTTON
called Compound is included as a shortcut.

------------------------ Ordinary Annuity ---------------------------

Supply the interest rate, present value or amount, and the
number of periods and the monthly payment will be calculated. 

------------------------ Bond Present Value -------------------------

Select this option to calculate the present value of a bond
given the  maturity value, number of years, coupon value, and
the desired yield. The present value and the input parameters
are shown in the output window.

--------------------------- Sinking Fund ----------------------------

Select this option to calculate the monthly payment given the
future value, annual interest rate, and term of payments.


------------------------- Discount Yield ---------------------------

Select this option to determine the annual percentage yield of a discounted
security. The 360 day/year & 365 day/year percentage yields are shown in 
text editor given the purchase price, maturity value, and number of
days til maturity.

-------------------------- Future Value ----------------------------

Given the DISCOUNT RATE the future value of a given amount of money can be
determined. 

------------------------- Trend Analysis ---------------------------

This is a linear least-squares fit to X/Y data. Use this to make
predictions based on sales history , for example. Data can be
entered in the text editor or in any other ASCII editor. The X
value is in column 1 and the corresponding Y value is in column
2. The X and Y values are separated by a space.  This section
reads a data file with the appropriate format and prompts for a
new value to calculate it's corresponding value.  There is a
limit of 100 data pairs. The file format should appear as below:


    1.0    1200.0

    2.0    1400.0

    3.0    1300.0

    4.0    1700.0

    5.0    1600.0

    6.0    1800.0

Find X:

To find a new X value given some Y value choose the FIND X menu item.

Find Y:

To find a new Y value given some X value choose the FIND Y menu item.

------------------------------ Budget --------------------------------

Edit:

Use this feature to subtract the last transaction from the budget file. 
You can also use this feature to mark the checks that have been paid by
the bank. Simply use the BACK and NEXT buttons to find the transaction 
and push the PAID button.

Add:

Use this feature to add a transaction to the budget file. The last 
transaction is shown in the dialog box. The current balance is also 
shown. When ADD is selected the transaction will be added to the file 
and the balance updated. A BUTTON called Budget is included as a 
shortcut. A maximum of 600 transactions can be saved. 

Show:

Popup a window and display the entire budget file or print to the text 
editor.  

Search Desc:

Enter a search key (Wildcard characters * ? @ # may be used) to find all 
amounts paid corresponding to the search key. The search key is compared 
to the description of each transaction. You can enter part or whole words 
to search by. The case of the search key does not matter. The transactions 
and total will be shown in the budget window if a match is found.

Search Date:

Enter a search key (Wildcard characters * ? @ # may be used)to find all 
amounts paid corresponding to the search key. The search key is compared 
to the date of each transaction. You can enter all or part of a date. The 
transactions and total will be shown in the budget window if a match is 
found.

Search Deposit:

Enter a search key (Wildcard characters * ? @ # may be used) to find all 
deposits made corresponding to the search key. The search key is compared 
to the date of each transaction. You can enter all or part of a date. The 
transactions and total will be shown in the budget window if a match is 
found.

Search Percent:

Enter a search key (Wildcard characters * ? @ # may be used) to find all 
amounts paid corresponding to the search key. The search key is compared to 
the description of each transaction. You can enter all or part of a 
description. The transactions and total percent of budget will be shown in 
the budget window if a match is found.

Search Unpaids:

Enter a search key (Wildcard characters * ? @ # may be used) to find all 
checks not cleared corresponding to the search key. The search key is 
compared to the date of each transaction. You can enter all or part of a 
date. The transactions will be shown in the budget window if a match is 
found.

Change Budget File:

Changes the default filename. Use this to work with more than one account.


------------------------------ Stock ---------------------------------

Edit:

Use this feature to subtract the last transaction from the stock file.

Add:

Use this feature to add a stock purchase or sale to the stock file. The 
last transaction is shown in the dialog box. The current balance is also 
shown. When BUY is selected the transaction will be added to the file 
and the amount subtracted from the balance. When SELL is selected the amount 
will be added to the balance and the transaction will be added to the file.
You can choose to enter a purchase as a negative number and sell as a 
positive number under the Price/Share category or vice-versa. A maximum of 
100 transactions can be saved. 

Show:

Popup a window and display the entire stock file or print to the text editor.  

Search Desc:

Enter a search key (Wildcard characters * ? @ # may be used) to find all 
stocks bought or sold corresponding to the search key. The search key is 
compared to the description of each transaction. You can enter part or 
whole words to search by. The case of the search key does not matter. The 
transactions and total will be shown in the stock window if a match is found.

Search Date:

Enter a search key (Wildcard characters * ? @ # may be used) to find all 
purchases or sells corresponding to the search key. The search key is 
compared to the date of each transaction. You can enter all or part of a 
date. The transactions and total will be shown in the stock window if a 
match is found.

Search Percent:

Enter a search key (Wildcard characters * ? @ # may be used) to find all 
purchases or sells corresponding to the search key. The search key is 
compared to the stock name of each transaction. You can enter all or part 
of a description. The transactions and total percent of stock budget will 
be shown in the stock window if a match is found.

Change Stock File:

Changes the default filename. Use this to work with more than one account.

----------------------------- Assets/Debts --------------------------------

Edit:

Use this feature to subtract the current transaction from the asset file.

Add:

Use this feature to add a debt or asset to the asset file. The last 
transaction is shown in the dialog box. Keep track of credit card debts,
bank notes, savings accounts, etc. A maximum of 100 transactions can be 
saved. 

Show:

Popup a window and display the entire stock file or print to the text editor.  

Search Date:

Enter a search key (Wildcard characters * ? @ # may be used) to find all 
payment due dates corresponding to the search key. The search key is 
compared to the date of each transaction. You can enter all or part of a 
date. The transactions and total will be shown in the Asset/Debt window 
if a match is found.

Search Payment %:

Enter a search key (Wildcard characters * ? @ # may be used) to find all 
payments corresponding to the search key. The search key is compared to 
the account name of each transaction. You can enter all or part of a 
description. The transactions and total percent of debt will be shown 
in the Asset/Debt window if a match is found.

Search Balance %:

Enter a search key (Wildcard characters * ? @ # may be used) to find all 
balances owed corresponding to the search key. The search key is compared 
to the account name of each transaction. You can enter all or part of a 
description. The transactions and total percent of debt will be shown in 
the Asset/Debt window if a match is found.

Change Asset File:

Changes the default filename. Use this to work with more than one account.


++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+                                                                    +
+                            O P T I O N S                           +
+                                                                    +
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


--------------------------- Clear Window -----------------------------

Select this to clear the editor and perform a general cleanup of unused
variables. You may want to save the document before selecting this option
if you want to retain the calculations.

------------------------ Days Between Dates --------------------------

Enter the first date and the second date to determine the number
of days between the two dates. The day of week is also shown for
the two dates. A BUTTON called Days/Dates is included as a shortcut.


----------------------------- Calendar -------------------------------


Current Month:

Prints a calendar for the current month according to the system date. 
A BUTTON called Calendar is included as a shortcut.

Current Year:

Prints a calendar for the current year according to the system date. 

Any Month:

Enter the month and year to print a calendar to the text editor. The 
current system date is shown as the title. The calendar defaults are 
the system month and year. 

---------------------------- Calculator ------------------------------

A 6 function calculator is provided for those quick calculations
from within the program. 

------------------------------- Title --------------------------------

Place a title in the text editor at current cursor position.

--------------------------- Set Password -----------------------------

Choose a 4 character password. You must use the CLOSE menu item to
save the change. REMEMBER this password!!! The files are encrypted and
difficult to interpret. Always keep a backup copy of FINANCIER Plus in 
case the password is forgotten. The only file that is needed to load 
in case of a forgotten password would be the original INITIAL.DAT since 
the password is somewhere in the file. As FINANCIER Plus is shipped a 
password is not required. This is because it is initially set to 0000. 
If you are using a password and decide to stop using one simply set it 
to 0000.


++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+                                                                    +
+                               H E L P                              +
+                                                                    +
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


This feature displays a complete instruction manual. The manual is shown
in a window that can be maximized, moved around, or closed with the 
system menu. Use the cursor keys or the Page Up and Page Down keys to 
navigate the document.


++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+                                                                    +
+              F I N A N C I E R      O P E R A T I O N              +
+                                                                    +
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


FINANCIER Plus uses a text editor to display all calculations. This 
makes it easy to manipulate, save, and load. The mouse can be used 
to highlight text by positioning the cursor over the area to select, 
holding down the mouse button, and dragging the cursor over the text.
The selected text will invert. The Edit operations such as Cut & Paste 
can be used with the selected text.

Standard editing keys such as Page Up, Page Down, Delete, and Insert
can be used for navigating the current document.

Eight BUTTONS are included at the top as shortcuts to the most commonly
used features. Equivalent selections can be made from the pull-down
menus. Appropriate shortcut key combinations can be used where applicable.

When FINANCIER is first run a file named "INITIAL.DAT" is loaded
with the last calculation values. This file is updated when you 
exit the program with the "Close" menuitem under File.

The budget section uses a file named "BUDGET.DAT".

The trend analysis sections use a file named "TREND.DAT".

NOTE: These files must be in the same directory as FINANCIER Plus for 
proper execution. As the files fill with data the user may want to copy 
or rename the file and start over with a fresh file. This can be 
accomplished using the Copy or Rename options under the File menuitem 
of the File Manager. 

The most recent calculation is always shown at the top line of the editor. 
Other features  follow the WINDOWS 3.0 (tm) operating standards. 

When using one of the search functions wildcards can be used.
       
       *   will match 0 or more instances of a character 
       ?   will substitute for one instance of a character
       @   will match exactly 1 alphabetic character
       #   will match exactly 1 numeric character

When FINANCIER Plus is FIRST executed, the program starts in a normal
fashion. If the password is set and saved then whenever the program
is executed, the user will be prompted for the password. 
       
To iconize FINANCIER Plus simply click the minimize button in the upper 
right corner of the window.  The scroll bars can be used to scroll up, 
down, left, or right in the window. The BUTTONS at the top of the window 
are shortcuts for menuitems also contained in the pull-down menus. These 
can save several steps when invoking a function. 

Since calculations are written to the text editor, the user can manipulate 
the data as required. A series of calculations may be performed and saved 
for a later date.  Files  are saved in ASCII which can be used in many 
other programs.

When tax time rolls around use the checkbook ledger and stock portfolio 
to organize your yearly expenses.  The sophisticated search functions 
will make this easy and quick.   


++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+                                                                    +
+                         D E F I N I T I O N S                      +
+                                                                    +
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


AMORTIZATION
------------
Described as a systematic reduction of an asset or debt over a
period of time. An example might be the reduction of a loan
principle on a monthly basis. 

ORDINARY ANNUITY
----------------
An annuity entails installments either in receipt or payment,
where all are of equal amounts. When these receipts or payments
are made at the end of the period it is called an ordinary
annuity. Some examples might be rent, annuities from insurance
companies, and pension plans.

SINKING FUND
------------
Examples of this would be interest income and dividend income.
Sinking funds are cash amounts or assets which are periodically
put into a fund. This fund would be gathered for a specific
reason, such as to retire stock or to pay off a debt when it
reaches maturity.

TREND ANALYSIS
--------------
Trend analysis is a tool used to make predictions based on a two
variable input. An example of this might be future sales based
on the average monthly sales over the past year. The technique
employed is a linear least-squares method.

RULE OF 78'S
------------
The Rule of 78's is used by banks to develop an amortization
schedule. Under this technique a borrower pays more interest
during the beginning of the loan. As the borrower has less debt
the amount paid in interest also becomes less. Interest can be
saved by prepaying. The Rule of 78's is also referred to as the
Sum of the Digits. The interest is equal to 12/78ths of the
annual interest for the first month, 11/78ths of the annual
interest for the second month, etc...

ACCRUED INTEREST
----------------
This is simple interest like that earned on a savings account.
The calculation of interest is based on the principle amount
only. 

COMPOUND INTEREST
-----------------
Compound interest is usually interest charged on an account
where the annual interest rate is compounded at regular
intervals (e.g. monthly). The new interest payment will include
the principle plus interest earned on the principle during the
last interval. An example of this type of interest might be
credit card accounts. 

BOND
----
Bonds, issued by the government or corporations, are
certificates of debt. They guarantee payment of the original
investment including interest by some predetermined date. Bonds
are rated based on investors perception of risk.

A secured bond is backed by collateral which can be sold if the
issuer fails to comply with interest or principle payments.

A convertible bond allows the exchange for other securities by
the same issuer at some date in the future.


++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+                                                                    +
+                           E X A M P L E S                          +
+                                                                    +
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


DETERMINE MONTHLY PAYMENT
-------------------------

Select AMORTIZE 

Select Monthly Payment

For a $10,000.00 loan

At 10.00% interest

For 48.00 months

The monthly payment would be $253.63

The future value of the loan would be $12174.24



ITERATE INTEREST
----------------

Select  AMORTIZE

Select  Iterate Interest

Enter 100000.00 for Present Value

At Start Interest Rate Enter 10.00

At Stop Interest Rate Enter 12.00

At Interest Rate Inc Enter 0.5

Enter 180 at Loan Term

The monthly payment for a $10000.00 loan will be           
determined at interest rates between 10.00% and 12.00%



TREND ANALYSIS
--------------

Select FINANCE

Select Trend Analysis

Select Find Y

Press ENTER to accept TREND.DAT as XY file

Enter 21.00 at VALUE: prompt

A plot will appear. Press any key to see numerical data.

The predicted value is 3731.428...



NOTE: This example is valid for the sample file                    
      included with FINANCIER.




































```
{% endraw %}

## FILE2835.TXT

{% raw %}
```
Disk No: 2835                                                           
Disk Title: Financier Plus for Windows                                  
PC-SIG Version: S1                                                      
                                                                        
Program Title: Financier Plus for Windows                               
Author Version: 2.1                                                     
Author Registration: $24.95                                             
Special Requirements: Windows 3.0 standard mode.                        
                                                                        
Use FINANCIER PLUS to calculate amortization schedules or many other    
financial situations. Schedules and other calculations are shown in a   
text editor that can be manipulated to suit the user's needs. Balloon   
payments and Add-in can be included with schedules. The user can ask    
"What-if" questions such as term determination, present value           
determination, and interest iteration. Rule of 78's can also be used for
calculations. Need to know accrued or compound interest on a sum of     
money? FINANCIER PLUS can determine these along with bond present value,
annuities, sinking fund, discount yield, and future value. The trend    
analysis section makes predictions based on W/Y data.                   
                                                                        
Need to organize? FINANCIER PLUS includes a budget section, calculator, 
calendar, titler, and text editor. The text editor includes             
cut/paste/copy/search and many other editing commands. Need to know the 
number of days between two dates or what day of the week corresponds to 
a calendar date? FINANCIER can find the answer.                         
                                                                        
FINANCIER PLUS is Windows 3.0 compatible and features an on-line        
instruction manual, pull-down menus, and pop-up windows for an          
easy-to-use interface with a short learning curve.                      
                                                                        
                                                                        
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2835

     Volume in drive A has no label
     Directory of A:\

    F-PLUS   ZIP    247546  11-05-91  10:19p
    PKUNZIP  EXE     23536   1-16-91  12:38p
    GO       TXT      1463  11-06-91   1:43a
    FILE2835 TXT      2739  11-06-91  12:20p
    GO       BAT        38   1-31-91  12:58a
            5 file(s)     275322 bytes
                           45056 bytes free
