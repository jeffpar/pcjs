---
layout: page
title: "PC-SIG Diskette Library (Disk #275)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0275/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0275"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "PC-CHECK"

    A menu-driven financial system for a small business or professional
    office, as well as for personal use. Why hire a bookkeeper when you can
    do it yourself?
    
    PC-CHECK provides maintenance, with check-writing capabilities. It can
    handle multiple checkbooks and assign up to 78 payees and 100 ledger
    accounts. Sort data files, find payees, print checks, track income tax
    deductions, list data by month, quarter, payee or ledger account.
    Automatically assign the ledger account number when an assigned payee is
    selected.
    
    Let PC-CHECK take the mystery and drudgery out of financial control and
    put you back in charge -- where you belong!
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES275.TXT

{% raw %}
```
Disk No  275
Program Title: PC-CHECK MANAGER version 3.0
PC-SIG version 3
 
    Here is an excellent user-supported personal finance program. PC-Check
Manager is an easy to use, menu-driven checkbook and personal general
ledger with printout and check writing capabilities. It can be used by a
small business or professional office as well as for personal use. This
enhanced version will sort data files, find Payees, print checks, track
income tax deductions, list data by month, quarter, payee, or ledger
account. It can handle multiple checkbooks by assigning different names to
each file. The drive on which the data is located can be selected from the
Maintenance Menu. The last active data file is save and automatically
called up the next time the program is used. The user can assign up to 78
Payees to which checks are regularly written and 100 Ledger Accounts, so as
to speed data entry. The program will automatically assign the Ledger
Account Number when a assigned Payee is selected. Version 3.0 is new and
expanded. It is not compatible with previous versions.
 
Usage: Personal Checkbook and Tax Management
 
System Requirements: 192k memory, two disk drives (a printer is
strongly recommended.
 
How to Start: Type: PCC (press enter).
 
Suggested Registration: $35.00
 
File Descriptions:
 
PCC      EXE  Compiled version PC-CHECK MANAGER.
PCC           User data file (sample).
PCC      DOC  Documentation for PC-CHECK MANAGER.
PCCL     DAT  List of ledger catagories used by PCC.EXE.
PCCP     DAT  Data file for PCC.EXE.
PCCC     DAT  Data file for PCC.EXE.
 
PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987,88 PC-SIG, Inc.

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                  <<<<  Disk #275 PC-CHECK MANAGER  >>>>                 ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To copy the documentation to your printer, type: MANUAL (press enter)   ║
║                                                                         ║
║ To start the program, type: PCC (press enter).                          ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## PCC.DOC

{% raw %}
```



















                      PC-Check Manager 3.0
     For the IBM-PC,XT,AT and Compatible Personal Computers

     (c) copyright Peninsula Computer Services -- 1986, 1987

                   Peninsula Computer Services
                   P.O. Box 2010
                   Newport News, VA  23602-0010












































Chapter 1

                           Introduction

PC-Check Manager is designed to assist in managing the personal
finances of individuals and small businesses.  It can be used to
maintain and balance multiple checkbook, print checks, track up
to 100 user defined accounts for budget and tax purposes, or
assist the user in making financial decisions based on income and
expenses.

PC-Check Manager is menu driven and simple to use.  It can handle
multiple checkbooks, budgets, or income/expense accounts by
assigning different names to each file.  The drive and data file
names can be selected from the Maintenance Menu.  In order to
speed data entry, the user can assign up to 78 Payees/Payors to
which checks are regularly written and 100 Ledger Accounts.  The
program will automatically assign the Ledger Account Number when
a pre-assigned Payee/Payor is selected.

This manual was not designed to teach the user how to balance a
checkbook, manage a budget or to use a computer.  The user must
be familiar with the DOS commands COPY and FORMAT and creating
batch files.  This manual gives the user an overview of PC-Check
Manager.

PC-Check Manager requires 192k memory, DOS 2.0 or greater, and a
printer.  The program is configured so that any printer may be
used.  Graphics or special printer drivers are not required.  PC-
Check Manager does use a form feed character to advance reports
to the bottom of the page.  Discussion of the form feed code is
in the section on the Maintenance Menu.

The following terms will be used in this manual.

Function Keys - identified as F1, F2 etc.

{ENTER} - the user is expected to press the ENTER (Return) Key.

{Esc} - used to exit to DOS from the Main Menu, to return to the
Main Menu from other menus, and to terminate execution of various
reports.













                               1-1










Check - Use of this term in this manual refers both to checks
written from a checking account or a debit or withdrawal from any
other account.

Deposit - Use of this term refers both to deposits to checking
account or a credit or addition to any other account.

Field - any one data element, such as a name or address.

Record - a collection of related fields stored together, such as
your name and address.

File - a collection of records.

Prompt - any request on the screen that is waiting for a user
response.  The user must take an action to continue.  Usually, in
PC-Check Manager, a prompt will end with a "?? or a ":" and may
have a blinking cursor.  "Press a Key:" is also a commonly used
prompt.




































                               1-2










Chapter 2

                          Getting Started

Installing PC-Check Manager - Floppy Disks

The PC-Check Manager disk does not have the Disk Operating System
(DOS) installed.  Put a copy of DOS 2.0 or later in your disk
drive and FORMAT a new disk with the SYSTEM installed using the
/S option of the DOS FORMAT command.  Generally, the command will
be:
                           FORMAT B:/S

Remove the DOS diskette and insert the PC-Check Manager diskette
in drive A.  Copy the program files  PCC.EXE, PCCL.DAT, PCCP.DAT
and PCC.DAT to your new disk using the DOS COPY command.
Generally, the format will be:

                           COPY *.* B:

Installing PC-Check Manager - Hard disks

Insert the PC-Check Manager diskette in drive A and copy the
program files to your hard disk using the DOS COPY command.  For
drive C the format will be:

                           COPY *.* C:


Installing PC-Check Manager - Floppy disks and Hard Disks

Put the original PC-Check Manager disk in a safe place and do not
use it again.  It will be used for backup purposes.  Label the
copy "PCC Working Disk". Should your original and copy be
destroyed, a replacement is available for a small fee.

Always after completing a session entering data, make a backup
copy of your data file to insure against loss of valuable data.
Floppy disks can be purchased for under $2.00. Proper backup
habit can not be over emphasized since time spent entering data a
second time can exceed $2.00 in less than an hour.

In order for your PC-Check Manager program to automatically run
when you boot your computer, you must create an AUTOEXEC.BAT
file. Follow these instructions.  For more information, see your
DOS manual.









                               2-1










Place the PC-Check Manager working disk in drive A.
With the prompt A>, type the following:

            COPY CON:AUTOEXEC.BAT            {ENTER}
            DATE                             {ENTER}
            TIME                             {ENTER}
            PCC                              {ENTER}
            F6  (press the F6 Key)           {ENTER}*

     *When you press the F6 key, the symbol ^Z will appear.
Press {ENTER}. The message "1 File Copied" will appear.

Now boot the computer using {Ctrl} {Alt} {Del}.  You are now
ready to use PC-Check Manager.

Alternatively, type PCC and press {ENTER} to begin the program
without an AUTOEXEC.BAT file.

PC-Check Manager continuously reads the current date and time and
displays it on the menu screens.  Therefore, the date and time
should be set prior to using PC-Check Manager.


































                               2-2










Chapter 3

                       PROGRAM INSTRUCTIONS

Main Menu

PC-Check Manager boots to the Main Menu.  The Main Menu is
divided into three basic sections.  The PC-Check Manager
copyright notice at the top, the menu selections are in the
middle which provide access to all other menus, and the bottom
containing the continuous display of the date, time, and window
with the active data file and check writing status.  To exit, the
prompt at the bottom left instructs you to press {Esc}.  Figure
3-1 is the Main Menu choices.



                   F1 Maintenance Menu
                   F2 Update Data Menu
                   F3 Account Data Update Menu
                   F4 Reports Menu

                                                         Fig. 3-1


Before proceeding with data entry or obtaining a report, verify
the correct disk drive and data file are displayed in the bottom
right window.  If not, select F1 for the Maintenance Menu.


Maintenance Menu (F1 - Main Menu)

Press F1 from the Main Menu for the Maintenance Menu.  The
Maintenance Menu is used to change disk drive designations,
select data file names, list files on the disk, select check
writing feature, select page feed codes, and sort the data file.
The Function Keys for selecting the disk drive and check writing
options are toggles.  Press the Function Key and the designation
will change.  Selecting the Function Key for the sort will
automatically sort the file.  There will be no option to stop a
sort once the sort begins.  The data file will be permanently
sorted with no backup of the unsorted file.

Selecting an existing file name or creating a new file name
requires user input.  Select "Change active data file" and you
will be prompted for a file name.  Type in any exiting file name,
or create a new file by entering a valid DOS file name following
the conventions in the DOS manual.  DO NOT use a name with an
extension, such as PCC.DAT. However, PCC is a valid PC-Check
Manager data file name.  Once a drive designation or file name is
changed, the status window will be updated to show the current
status.  Be sure you have entered a valid drive and have a disk
in that drive.


                               3-1










When creating a new file name, use a name which will be
descriptive for the use, ie., PERSONAL, BUSINESS, WIFE, etc.  One
data file is pre-named PCC for your convenience.   The number of
files PC-Check Manager will handle is limited only by disk
capacity.  If no file is on the diskette, the program will
automatically create the file PCC.

Listing the files on the data disk has the added benefit of
displaying the remaining disk capacity.  You should analyze your
disk file usage if less than 10k remains on the data diskette and
reorganize your data files as necessary.

The Page (Form) Feed Code is normally set to 12 or 140 (12 + 128)
for most printers.  PC-Check Manager is preset for 140.  Please
check your printer manual for the Form Feed Code and enter the
correct code if the printer does not form feed correctly at the
end of each report.


Update Data Menu (F2 - Main Menu)

Press F2 from the Main Menu for the Update Data Menu.  Use this
menu to enter or modify your data.  Within the Add Data and
Modify Data sections, a series of prompts will appear requesting
information.  Each is described in detail below.  The Delete Data
prompt will only ask for the Record Number prior to deleting the
record.

Add New Data (F1)

When adding data, PC-Check Manager tracks the current account
balance.  Therefore, the account balance will be computed first.
A working message will appear after selecting F1 (Add Data).
After computing the account balance, PC-Check Manager will prompt
you for the date for the income or expense.  This date will
remain active until changed.

Date:  When ask for the date, enter the date as MM/DD/YY. DO NOT
enter the preceding zeros in the date.  Correct: 7/4/86.  Wrong:
07/06/86.  If the date is entered in any other format, you will
be ask to enter the date again.  If you want to return to the
Update Menu, press {ENTER} without entering a date.  The prompt
will not appear for each record and  the date will remain the
same until changed. Note: To change the date for a new record,
press {ENTER} when the "Pay To/From:" prompt appears.










                               3-2










Pay To/From:   This prompt will appear at the bottom of the
screen with a list of Payee's above.  You can either select a
number corresponding to a Payee or enter another Payee name
directly. Pressing {ENTER} will return you to the Date prompt to
change the date. Note: Pressing {ENTER} TWICE will return you to
the Menu. All Payee's can be modified as explained later.  Using
preselected Payee's will allow the program to assign Ledger
Account Numbers and you will not have to make a Ledger entry.

Purpose:  The purpose for which the check is written is entered
here.  There is a maximum of 25 characters. No entry is required.
This field is used for check writing and will not appear on
reports.

Check or Deposit Number:  Enter your check or deposit number.  If
you make no entry, the default is the record number.

Ledger Code:  This prompt is displayed at the bottom of the
screen with a list of Ledger Accounts above.  The initial Ledger
Categories were obtained from IRS Form Schedule C.  This list can
be customized as explained later.  Make your selection by
entering a number that corresponds to the Ledger Category.
Automatic entry of this field is accomplished by using a
preselected Payee.  Figure 3-2 is the list and corresponding
numbers of Ledger Codes included in the program.

If you are using the automatic entry, you will not be prompted
for a ledger code.  The code will be assigned based on your
predefined Payee/Payor codes.

General Ledger Codes (Examples)

Expenses                               Expenses/Income

 1) Advertising                        20) Taxes
 2) Bad Debts from Sales               21) Travel
 3) Bank Service Charges               22) Entertainment
 4) Car Expenses                       23) Telephone
 5) Commissions                        24) Wages
 6) Dues                               25)
 7) Publications                       26)
 8) Employee Benefit Programs          27)
 9) Freight                            28)
10) Insurance                          29)
11) Interest                           30)
12) Laundry                            31)
13) Legal Fees                         32)
14) Professional Services              33)
15) Office Expense                     34)
16) Pension and Profit Sharing         35)
17) Rent                               36)
18) Repairs                            37)
19) Supplies                           38)

                                                        Fig. 3-2
                               3-3










Amount of Check:  Make a positive numeric entry if a check  or
press {ENTER} if a deposit. Checks or deposits up to $99,999.00
may be entered.  DO NOT enter the $ or any commas.

Amount of Deposit:  This prompt will not appear if an entry is
made to the Amount of Check. See the prompt Amount of Check for
limitations.

Out Code:  This prompt refers to checks and deposits which have
cleared the bank or other account.  If the check you are entering
has cleared the bank, then enter the number 1, then press
{ENTER}.  This field is used to list outstanding checks and to
balance your checkbook as explained later.


Modify Data (F2)

You may modify data at any time, but  before doing so, you must
know the current record number.  (Record numbers may be changed
by doing a sort.) If you do not know the record number, find the
record number from any of the following reports listed below.
Note: The record number is found in the left column of the
report.

From Update Menu:   Find by Check Number     (F4)
                    Find by Payee/Payor      (F5)

From Reports Menu:  List All Records         (F1)
                    List Outstanding Checks  (F2)
                    List All Accounts        (F3)
                    List Records by Date     (F5)
                    List Records by Month    (F6)


To Modify, press F2 from the Update Menu, enter the record number
and press {ENTER}.  The record will be displayed.  To change any
entry, press the key associated with the field.  See Add Data for
a description of each prompt.



Delete Data  (F3)

Use delete data, F3, to delete an entire record.  You will
receive a warning and be instructed to press F9 to delete a
record.  After pressing F9, enter a record number at the prompt.
If the correct record is displayed, press F9 again to delete the
record.








                               3-4









Find By Check Number (F4)

To find the record number when you know the check number, select
F4 and enter the check number.  A report with all matching check
numbers will be displayed.


Find Payee/Payor (inexact) (F5)

Enter a letter or name and PC-Check Manager will return all names
with the string of characters you entered.  You do not have to
enter a complete name.  Entering THOM will return THOMAS and
THOMPSON.

Update Outstanding Checks/Deposits  (F6)

This routine inserts a "1" in the Out Code for all checks entered
to indicate the check has been received on your statement.  First
compare your statement with the reports "List Outstanding Checks"
and "List All Checks".  If there are entries on the statement
that cannot be found in the data file, investigate. Either you
have not entered the data or the bank statement is in error.  Add
any new data before using this routine.

You will be prompted first for the Check Number then the Check
Amount.  From your bank statement, enter the check number and the
amount.  The prompts will continue to appear until you Press the
"*" and {ENTER} in lieu of an entry in the Check Number prompt.
The computer will then add a "1" to all records which match your
entries from the bank statement. You will then be prompted for
your Deposits. Make similar entries.  Deposit numbers may be
obtained from the report "List Outstanding Checks".  Exception
reports show "NO MATCHES".

You must now return to the report "List Outstanding Checks".
Compare the report with your bank statement. Checks listed on the
computer report and on the statement indicate an erroneous entry
was made. Investigate.  Modify your data if necessary using F2 on
the Update Data Menu.


Reports Menu (F4 - Main Menu)

List All Records (F1)

All checks and deposits with positive amount will be listed in
order of entry. For a print out, Press F10 when prompted.  Ranges
can be selected. You will be prompted for a beginning and ending
record number.   Pressing {ENTER} for the beginning will start
the search at record number 1.  Pressing {ENTER} for the ending
record will end the search at the last record.  Enter record
numbers to limit the search.



                               3-5










List Outstanding Records (F2)

All checks and deposits which have not cleared the bank will be
displayed. For a print out, Press F10 when prompted. You should
use this report to compare with your bank statement prior to
using the Update Outstanding Checks/Deposits explained above.


List All Accounts (F3)

F3 will run all Ledger Accounts in order, one at a time, stopping
and displaying each account with records.  Accounts without
records will be bypassed.  Press {Esc} to return to the Menu.
Totals for each account are at the bottom of the report.

List Records by Individual Account (F4)

Selecting F4 will display the Ledger Accounts with the prompt
"Ledger Account" at the bottom of the screen.  For a listing and
totals of the Ledger, select the corresponding number and press
{ENTER}. All records for that account will be displayed with a
total at the bottom and a percentage of total.

List Records by Date (F5)

Press F5 and you will be prompted for a date.  Enter the date,
and all records containing that date will be displayed with
totals.

List Records by Month (F6)

Press F6 and you will be prompted for the month.  Enter the month
as a number, 1 for January, 7 for July, etc.  All records for
that month will be displayed with a total for the month at the
bottom.

List by Payee/Payor (exact) (F7)

Enter the name to list.  All matches will be displayed with a
total paid or received.

Compute Checkbook Balance (F8)

This menu selection will compute your existing checkbook balance.
Press F8 to compute the balance.

Reconcile Statement Balance (F9)

Press {ENTER} and you will be prompted for your statement
balance.  If you have just updated your outstanding checks, enter
the statement balance and you will be informed if your checkbook
balances.



                               3-6










Account Data Update (F3 - Main Menu)

This is a house keeping function.  It allows you to customize the
Payee and Ledger account numbers for automatic entry.

In the Account Data Menu, select the Ledger or Payee update. It
is recommended you add or modify the Ledger Data and then print
the General Ledger screen using {Ctrl} {PrtSc} prior to updating
the Payees.  This allows you to assign the correct GLA Account
Number to the Payee.  Select the appropriate F10 key to gain
entry to these functions.  Enter the Payee, address, and Ledger
Account Number as prompted. The preset Ledger Accounts are
included in this documentation.


                        Check Writing Feature

PC-Check Manager has a check writing feature.  Toggle check
writing on/off on the Maintenance Menu.  The check writing
feature allows the user to print continuous form checks for each
data record entered.  When the check writing feature is toggled
on, you will be prompted if you want to print a check in the Add
New Data section after you enter all the data for that record.
If you select "Y", output will be directed to the printer.  Make
sure your printer is on and continuous form checks are loaded in
you printer.  An alternative method for printing checks is in the
Modify Data section.  With the check writing feature toggled on,
press the Function Key on the Modify Data Screen associated with
"Print a Check".

Some minor check customizing is available for a small service
charge, currently, $30.00.  Check writing is toggled on/off from
the Maintenance Menu.  PC-Check Manager uses the check format for
Nebs Form 9025-1 and Deluxe Checks #1004.





















                               3-7

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0275

     Volume in drive A has no label
     Directory of A:\

    FILES275 TXT      1722   3-30-88  11:06a
    GO       BAT        38   1-18-88   1:38p
    GO       TXT       540   3-30-88  11:08a
    MANUAL   BAT       175   3-30-88  11:18a
    PCC                128   1-10-87   7:13a
    PCC      DOC     20992   1-10-87   6:53a
    PCC      EXE     94428   1-09-87   5:53a
    PCCC     DAT        64   1-10-87   7:00a
    PCCL     DAT      1664   1-01-80   7:05a
    PCCP     DAT       128   1-10-87   7:06a
           10 file(s)     119879 bytes
                           36864 bytes free
