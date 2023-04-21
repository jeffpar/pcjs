---
layout: page
title: "PC-SIG Diskette Library (Disk #860)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0860/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0860"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "REIPS, THE SIMPLE BOOKKEEPER, TYPERITE"

    Real estate professionals -- evaluate prospective real estate
    investments and keep track of them for your clients.
    
    Evaluations are based on measurements produced by REIPS, such as the
    financial management rate of return, internal rate of return, net
    present-value profitability index, debt coverage ratio, and gross income
    multiplier.  Compare these measurements with competing investments to
    help in making investment decisions personally or for clients.  NOTE:
    The comparison between competing potential investments is the important
    concept, not an exact prediction of future results for an individual
    investment.
    
    REIPS is designed around current Federal income tax law, although
    certain simplifying assumptions, such as those regarding the alternative
    minimum tax and passive losses, are made.  The manual provides
    information in terms that are easy to understand.
    
    The SIMPLE BOOKKEEPER is the easiest single entry bookkeeping system
    available for home or small businesses. No accounting experience is
    required. Keep track of business expenses (40 categories) and income
    for the year. Three report formats include yearly profit/loss summary
    and ytd expenses. Information is entered on a monthly basis.
    Registered users receive additional features including sorting, six
    income accounts, and six report formats.
    
    Turn your PC and its printer into an electric typewriter.  TYPERITE is
    simple, straight-forward and faster than using a wordprocessor for some
    day-to-day jobs.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## BKKP.DOC

{% raw %}
```

                 An Easy Accounting System for Small Businesses

                Copyright 1985    A P Software       All Rights Reserved

                                   Vers: 5/85

                           ***************************

    This program allows the user to

         1) keep track of business expenses,in 40 categories ( 33 deductible and
              7 non deductible ) for each month of the year
         2) keep track of sales receipts on a daily basis 
         3) examine and produce a profit/loss analysis  for the year  and 
         4) examine and produce  a current and ytd expense summary for each
              month of the year.


 A NOTE TO USERS: A.P. SOFTWARE MAINTAINS A COPYRIGHT ON THIS PROGRAM. ANY
                  PERSON MAY USE THIS PROGRAM AS LONG AS NOTHING IS CHANGED.

                  EACH PERSON WHO FINDS THIS PROGRAM USEFUL IS ASKED TO SEND $15
                  TO :        A. STRICKMAN
                              A.P. SOFTWARE
                              PO BOX 205
                              WESTFORD, MASS 01886

                  ALL SUGGESTIONS OR COMMENTS SHOULD BE ADDRESSED TO THE ABOVE.

                  A.P. SOFTWARE WILL NOT BE HELD RESPONSIBLE FOR ANY DAMAGES
                  INCURRED BY USE OF THIS PROGRAM.


  This system contains  4 menus:

 Main menu        - Allows you to set up the system, enter the purchase,sales or
                    print menus,examine expense and profit summaries
 Purchase menu    - Allows you to enter and edit up to 200 expenditures each
                    month
 Sales menu       - Allows you to enter and edit up to 99 sales every day for
                    each month
 Print menu       - Allows you to get hard copy of all purchases, sales, expense
                    and profit summaries


 This program is designed for companies meeting the following criteria:

 The yearly total of any one expense account must be less then $100,000.
 The total of any one days sales must be less then $100,000.
 The total yearly gross sales must be less then $1,000,000.
 The total yearly gross expenses must be less then $1,000,000.


 Hardware: This program is intended for use on an IBM PC with a double sided
           disk drive. Memory requirements are 128 K of RAM.











                            1. Getting Started:

 1.0 GETTING STARTED :The system is very easy to operate and start. Just place
 your disk in the A drive and power on or "boot up" your system. The program
 introductory screen will present itself and the Main menu will appear. There
 are 9 options.

                            *******************

                            2. Main Menu

 2.0 MAIN MENU : This is the starting point for all operations. Use of the ESC
 key will always cancel the current operation and return to the Main Menu.


 2.1 OPTION 1 - Create Monthly Files for a New Year : This option allows you
 to enter the company name , year of record and clear all the data files for
 every month of the year. It should be exercised once a year because it will
 destroy any and all existing data. You may enter the company name and current
 year of record without destroying existing data. The program will prompt you
 how to quit without destroying any data. NOTE: A change of company name and
 year will only be accepted if an active monthly file is accessed. 


 2.2 OPTION 2 - Select a New Active Month : This option allows you to select the
 month you wish to work with. Only three letters are needed and they need not be
 capitals. E.G. JAN  or   dec  


 2.3 OPTION 3 - Enter/Edit All Purchases Of Active Month : This option allows
 you to enter , edit and display all your purchases for any month. It has its
 own menu which will be described in Section 3.


 2.4 OPTION 4 - Enter/Edit All Sales of Active Month : This option allows you to
 enter and edit your daily sales receipts for any month. It has its own menu
 which will be described in Section 4.


 2.5 OPTION 5 - Examine Expenses of Active Month : This option allows you to
 view the totals accumulated in each of the 40 expense accounts for the active
 month. It is provided as a summary assistance. There are subtotals at the
 bottom of the screen indicating   DEDUCT 1-33  and NON DED 34-40. These are the
 totals of the deductible accounts 1-33 only  and the non-deductible accounts
 33-40 only.


 2.6 OPTION 6 - Examine Current and YTD Expenses : This option allows you to
 examine expense totals as in 2.5 OPTION 5 and also gives you a YEAR TO DATE
 column and TOTAL column. It also allows you to move through the months of the
 year and obtain the same information for each month. Changing months for
 examination does not change the Active Month.










                    -2-                The Simple Bookkeeper



 2.7 OPTION 7 - Examine Yearly Profit Summary : This option allows you to get a
 full years profit analysis. There are 3 lines printed for each month. The first
 line is total receipts or sales . The second line is total deductible expenses
 ( THESE ARE ACCOUNT # 1-33 ONLY ). The third line is the difference between the
 first two. Located between each month's statistics is a YEAR TO DATE column. At
 the far right of the screen is a breakdown by quarters only. The first quarter
 is Jan-Mar, the second is Apr-Jun, etc. Also located at the bottom of the
 screen is YEAR END TOTALS.


 2.8 OPTION 8 - Print Options : This option allows you  to get hard copy
 printouts of individual purchases, sales data, profit analysis and  expenditure
 summaries. It will be explained in Section 5.


 2.9 OPTION 9 - End : This option allows you to end your session with The Simple
 Bookkeeper. You should always end a session with 2.9 Option 9. Failure to do so
 will result in loss of data for the last active month selected.

                             *****************

                             3. Purchase Menu

 3.0 PURCHASE MENU - The Purchase Menu is entered by selecting 2.3 Option 3 from
 the Main Menu. There are 5 Purchase Menu options to choose from.


 3.1 OPTION 1 - Enter a Purchase/Expense : This option allows you to enter up to
 200 expenditures for any month of the year. They are numbered automatically and
 the program will prompt you for necessary information. DATE must be from 1-31 .
 PAID TO is a maximum of 18 characters in length. CASH/CHECK should be used to
 enter a 5 digit CHECK # or the word CASH ( actually any 5 letters will be
 accepted ). ACCOUNT #  is to be 1-40. These correspond to the accounts listed
 in the upper portion of the screen. AMOUNT must be less than 100,000 . The
 program keeps track of totals and no account may total 100,000.
            Hitting the ESC key before the above process is completed will
 cancel the entry and return you to the Main menu. You may return to the
 purchase menu by hitting the return key in response the  DATE.


 3.2 OPTION 2 - Delete a Purchase/Expense : This option allows you to delete any
 previous entry made. Deletions are made by the corresponding purchase or item
 number associated with the entry. A check of these numbers can be made by
 exercising 3.4 Option 4 of the Purchase Menu. It is suggested that you check
 these numbers before any deletions are made. These numbers can be made to
 change by selecting different display orders in 3.4 Option 4 of this menu.
 Therefore it is extremely important that you have the correct numbers. A hard
 copy printout of all individual purchases can be obtained from the Print Menu (
 Section 5 ) and may prove useful before any deletions are attempted. There is a
 verification question before the deletion is performed.
            All deleted purchases are displayed as RECORD DELETED in the listing
 of 3.4 Option 4. They are sorted and listed in the order of their actual data
 but are not displayed. These records are physically deleted when a new Active
 Month is selected  or the program is ended and will not appear in any future
 display or list.
            You may return to the Purchase Menu by hitting the return key in
 response to PURCHASE # FOR DELETION. Hitting the ESC key will return you to the
 Main Menu.




                    -3-                The Simple Bookkeeper



 3.3 OPTION 3 - Edit a Purchase/Expense : This option allows the user to edit
 any of the previous entries. Again editting is done using the purchase or item
 number associated with the entry.( See explanation 3.2 Option 2- Purchase Menu
 ). The user is asked for the item number and then the particular line of data
 that is to be changed. Select the appropriate number of the item to be changed.
 Enter the change as asked. When the editing of an item is completed the user
 may enter a 6 for Changes Complete or hit Return with no entry.
          You may return to the Purchase Menu  by hitting the return key in
 response to  PURCHASE # FOR CHANGE . Hitting the ESC key will return you to the
 Main Menu 


 3.4 OPTION 4 - Display All Purchases/Expenses : This option allows the user to
 display and list all 200 expenditures entered for any active month. This list
 is displayed 20 items at a time. When Option 4 is selected the user is prompted
 to select an Order of List. This order may be by DATE, alphabetically by PAID
 TO, grouped and ordered by CHECK #, by ACCOUNT #, or by AMOUNT. Each time the
 list is displayed, it is reordered, and remains in that order until 3.4 Option
 4 is excercised again. It is then reordered according to the new selection.
           The sorting for this option is done using only 1 of the 5
 orders listed above. If there are multiple items of equal value with respect to
 the sort selected , they are not sorted by any secondary key. Their order is
 only determined  by their present relative positions. For example, if a sort by
 ACCOUNT # is requested and many items have the same account number, their order
 in the sorted list within that one ACCOUNT # is dependent upon their current
 placement in the list. It is therefore extremely important to know the position
 of a purchase before it is edited or deleted. It is suggested that  the user
 decide upon an order to work with, display that order and then obtain a hard
 copy of that order as a work guide.
           All items are displayed as entered. Any entry that has been deleted
 will appear as RECORD DELETED. It will be positioned in the appropriate order
 for its original data. The deleted entries will be physically deleted when a
 new Active Month is selected or the program is properly ended.
           Hitting the ESC key will return you to the Main Menu.


 3.5 OPTION 5 - Return to Main Menu : This option returns control to the Main
 Menu. Hitting Return  performs the same task.

                              ******************

                              4. Sales Menu


 4.0  SALES MENU : This menu is entered using 2.4 Option 4 of the Main
 Menu. There are 4 options to choose from.


 4.1 OPTION 1 - Enter Sales : This option allows the user to enter individual
 receipts on a day by day basis. Entry is done by date. After the date is
 selected, you are prompted for an amount. All entries are recorded in the upper
 portion of the screen. You may enter up to 99 receipts for any one day. The
 total receipts for any one day must be less than 100,000. The number of
 receipts for each day kept along with the daily amount total.
             Hitting the return key in response to Date will return you to the
 Sales Menu. Hitting the Esc key will return the Main Menu.






                    -4-                The Simple Bookkeeper




 4.2 OPTION 2 - Delete Sales : This option allows the user to delete sales
 receipts from any day of the month. Deletions are done by date. After the date
 is selected, you  are prompted for an amount. This amount is then deducted from
 the day's records. The number of receipts is also reduced by one. You may not
 delete an entire days sales while leaving the number of receipts greater than
 0. In addition if there is only 1 recorded receipt for any day, the program
 will only allow you to delete the entire amount.
             Hitting the return key in reponse to Date will return you to the
 Sales Menu. Hitting the ESC key will return the Main Menu.


 4.3 OPTION 3 - Enter A Comment : This option allows you to enter or change a
 comment for any day of the month. These comments can be used to denote days of
 the week, or any other salient point for that day. They are displayed in the
 upper half of the screen. Comments are entered by Date. After a date is
 selected the program will prompt the user for the comment. It may be up to 10
 characters in length.
             Hitting the return key in response to Date will return you to the
 Sales Menu. Hitting the ESC key will return the Main Menu.


 4.4 OPTION 4 - Return to Main Menu : This option returns control to the Main
 Menu. Hitting Return performs the same task.


                               *******************

                               5. Print Options Menu

 5.0 PRINT OPTIONS MENU : This menu is entered by using 2.8 Option 8 of the Main
 Menu. It has 6 options.


 5.1 OPTION 1 - Select A New Active Month : This option is identical to 2.2
 Option 2 of the Main Menu.


 5.2 OPTION 2 - Print All Purchases of Active Month : This option will produce a
 hard copy on the printer of all the current purchase entries for the active
 month. The order of the list is determined by the last order displayed using
 3.4 Option 4 of the Purchase Menu. If 3.4 Option 4 of the Purchase Menu has
 never been exercised than the order is the one of actual entry.


 5.3 OPTION 3 - Print All Sales of Active Month : This option will produce a
 hard copy on the printer of all the sales receipts and comments for the active
 month.


 5.4 OPTION 4 - Print Current and Year To Date Expenses of Active Month : This
 option will produce a hard copy on the printer of the expense summary for the
 active month. It will contain  CURRENT, PRIOR and YTD  columns. It will also
 contain deductible and non-deductible sub totals.








                    -5-                The Simple Bookkeeper



 5.5 OPTION 5 - Print Full Year Profit Analysis : This option will produce a
 hard copy on the printer of the YEARLY PROFIT SUMMARY identical to the one seen
 using 2.7 Option 7 of the Main Menu.


 5.6 OPTION 6 - Return to Main Menu : This option will return the Main Menu.
 Hitting Return performs the same task.


 ADDITIONAL COMMENTS:

           USING THE ESCAPE KEY WILL ALWAYS RETURN THE MAIN MENU      

           BEFORE PRINTING PLEASE PUT PAPER IN THE PRINTER AND TURN
           THE PRINTER ON. IF NO PRINTER IS CONNECTED, USE OF THE ESCAPE
           KEY WILL RETURN THE MAIN MENU 

           IF ALL 200 PURCHASES ARE TO BE USED  FOR ALL 12 MONTHS OF THE YEAR,
           IT IS SUGGESTED THAT NO OTHER PROGRAMS BE PLACED ON THIS DISK. THIS
           SHOULD BE DONE TO INSURE ENOUGH DISK STORAGE SPACE.










































                    -6-                The Simple Bookkeeper





















                    -6-                The Simple Bookkeeper



```
{% endraw %}

## FILE0860.TXT

{% raw %}
```
Disk No:  860
Disk Title: Reips, The Simple Bookkeeper, Typerite
PC-SIG Version: 2

Program Title: REIPS
Author Version: 1.35
Author Registration: $35.00
Special Requirements: None.

Real estate professionals -- Evaluate prospective real estate
investments and keep track of them for your clients.

Evaluations are based on measurements produced by REIPS, such as the
financial management rate of return, internal rate of return, net
present-value profitability index, debt coverage ratio, and gross income
multiplier.  Compare these measurements with competing investments to
help in making investment decisions personally or for clients.  NOTE:
The comparison between competing potential investments is the important
concept, not an exact prediction of future results for an individual
investment.

REIPS is designed around current Federal income tax law, although
certain simplifying assumptions, such as those regarding the alternative
minimum tax and passive losses, are made.  The manual provides
information in terms that are easy to understand.

File Descriptions:

GO       BAT  Start the condensed instruction file, INTRO.
INTRO         The condensed initial instructions.
MANUAL        The abbreviated instruction manual.
REGISTER      The software registration form.
RS       EXE  The data input and investment analysis model.
SAMPLE        A presaved data file for a REIPS trial.
------------------------------------------------------------------------
Program Title: Simple Bookkeeper
Author Version: 1.33
Author Registration: $15.00
Special Requirements: None.

The SIMPLE BOOKKEEPER is an easy accounting program for small
businesses.  Keep track of business expenses in 40 categories for
each month of the year.  Deductible and non-deductible categories are
available.  You can also keep track of sales receipts on a daily basis.

Examine and produce an annual profit/loss analysis and a current and YTD
expense summary for each month of the year.  Get a hard copy of all
purchases, sales, expense and profit summaries.  Enter and edit up to
200 expenditures each month and 99 sales every day for each
month.

File Descriptions:

BKKP     EXE  Main program.
BKKP     DOC  Program documentation.
------------------------------------------------------------------------
Program Title: Typerite
Author Version: 1.33
Author Registration: None.
Special Requirements: Printer.

Turn your PC and its printer into an electric typewriter.  TYPERITE is
simple, straight-forward and faster than using a wordprocessor for some
day-to-day jobs.

File Descriptions:

TYPERITE EXE  Turns your computer into a typewriter.
READ     ME   Instructions for TYPERITE.

PC-SIG
1030D East Duane Avenue
Sunnyvale  Ca. 94086
(408) 730-9291
(c) Copyright 1988,89 PC-SIG, Inc.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0860

     Volume in drive A has no label
     Directory of A:\

    APR      DAT       512   1-01-80   1:57a
    AUG      DAT       512   1-01-80   1:57a
    AUTOEXEC BAT         6   9-12-85   3:55a
    BKKP     DOC     15488   1-01-80   1:37a
    BKKP     EXE     91904   1-01-80   1:15a
    DATAFORM          3997   3-10-89   3:11p
    DEC      DAT       512   1-01-80   1:57a
    FEB      DAT       512   1-01-80   1:57a
    FILE0860 TXT      2846   3-27-90   4:31p
    GO       BAT        38  11-05-87   3:00p
    GO       TXT      1312   4-24-89  10:50a
    INTRO             1547   4-25-89   3:26p
    JAN      DAT       512   1-01-80   1:57a
    JUL      DAT       512   1-01-80   1:57a
    JUN      DAT       512   1-01-80   1:57a
    MANUAL           17942   3-05-90  10:44a
    MAR      DAT       512   1-01-80   1:57a
    MAY      DAT       512   1-01-80   1:57a
    NOV      DAT       512   1-01-80   1:57a
    OCT      DAT       512   1-01-80   1:57a
    READ     ME       1076   4-04-85  11:57a
    REGISTER          2555   3-04-90   3:23a
    RS       EXE    124968   9-03-89   1:39p
    SAMPLE             162   3-12-89   6:41p
    SEP      DAT       512   1-01-80   1:57a
    START    BAT        30   5-18-87   4:02p
    SUMMARY  DAT      1664   1-01-80   1:57a
    TYPERITE EXE      8192   3-30-85   1:54p
           28 file(s)     279871 bytes
                           26624 bytes free
