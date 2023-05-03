---
layout: page
title: "PC-SIG Diskette Library (Disk #331)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0331/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0331"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "MEDLIN ACCOUNTING"

    MEDLIN ACCOUNTING is a group of four companion accounting packages
    which, when used together, provide fast easy-to-use accounting services
    for the small to medium sized business.
    
    The first and main program, PC-GL, is a double-entry General Ledger
    module which allows up to 800 items in the chart of accounts and 6,000
    transactions per period. It can be used by itself or with PC-AP -- the
    Accounts Payable package. PC-AP is an Accounts Payable program that
    allows a maximum of 2000 vendors and 2000 invoices per month. PC-AR is
    a menu-driven Accounts Receivable module and supports up to 2000
    customers and 4000 invoices per month. PC-PR, the payroll program,
    includes both current federal tax tables, support for most state taxes,
    and a W2 program. All programs use the same commands, and share the
    same operating features.
    
    NOTE: All programs are run in RAM which accounts for their speed but
    also controls how many files can be supported at a time. Numbers of
    supported accounts quoted above are based on at least 512K RAM. Less
    RAM will allow the modules to run but will support a smaller number of
    accounts.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## GENERAL.DOC

{% raw %}
```



      GENERAL INSTRUCTIONS FOR MEDLIN ACCOUNTING SHAREWARE


     This disk contains the four programs of the Medlin
Accounting Shareware System:

     PC-GL    Double Entry General Ledger
     PC-AR    Accounts Receivable
     PC-PR    Payroll Writing
     PC-AP    Accounts Payable

     The requested fee is $35 for each program, and entitles you
to telephone support and a configuration program to change
several parameters of the program.  Send a check to:

               Jerry Medlin
               1461 Sproul Ave.
               Napa, CA.  94559


     An order form is at the end of this manual.  To charge,
call (707) 255-4475 between the hours of 8AM to 6PM, Pacific
time.  We accept Master Card and Visa only.

     You may run the programs on the supplied disk to try them
out, but eventually you will want to install the programs
properly to give yourself more disk space for data.

     The programs are the files listed with the extension of
EXE.  The installation procedure consists of copying ONLY the
program files to another disk -- DATA FILES ARE NOT AFFECTED AND
WILL NOT BE ERASED.

INSTALLING THE PROGRAMS ON A HARD DISK

     To install the programs on a hard disk, just run the
VIEWDOC program and choose INSTALL PROGRAMS from the menu.  The
program will ask you which programs you wish to install and
designate the path.  If a subdirectory has not been created, the
install routine will create one.  The main programs and any
configuration programs included will be copied to the
subdirectory.  If you are using PC-GL for the first time, the
Standard Chart of Accounts will be copied to the subdirectory
when you install the PC-GL program.  If you already are using a
chart of accounts, the program will not change it.

     If you have been using previous versions of Medlin
Accounting Shareware, your previous data will remain intact.  NO
EXISTING DATA WILL BE ERASED BY THE INSTALL ROUTINE.

     If you wish to install the programs on a drive other than
C: drive and/or a subdirectory other than \ACCT, use CHANGE COPY
DESTINATION to specify the drive and subdirectory.  (The drive
and subdirectory together are called the path.)  You should
install all four programs on the same subdirectory for easy
accessiblity.

     Exit VIEWDOC by selecting QUIT from the menu.

     To run a program, first change to the subdirectory by
typing:  CD \ACCT  then type the program name.  IE. type PC-GL
to run PC-GL or PC-AR to run PC-AR.


INSTALLING THE PROGRAMS ON A FLOPPY DISK

     Installing the programs requires formatting a program disk
and a data disk, then using the VIEWDOC program to copy the
programs to the program disk.  If you already have a program
disk and data disk, skip formatting and just run the VIEWDOC
installation program to copy the new programs to your old
program disk.

FIRST TIME INSTALLATION-FORMATTING DISKS

To format the data disk, put your DOS disk in drive A: and a
blank disk in drive B: and type:

     FORMAT B:

     Leaving your DOS disk in drive A:, create a program disk by
putting another blank disk in drive B: and type:

     FORMAT B:/S

     Put away your DOS disk.

USING VIEWDOC TO COPY NEW VERSIONS ONTO FORMATTED PROGRAM DISK

Move the formatted program disk to drive A: and put this disk in
drive B: and type:

     B:VIEWDOC

     Choose INSTALL PROGRAMS from the menu and copy the programs
you plan to use to the disk in drive A:. The INSTALL PROGRAM
will copy the main program as well as the configuration program
(included if you have registered for the program).  Exit the
VIEWDOC program by choosing QUIT.

     To run any program, place the program disk in drive A: and
the data disk in drive B: and type the name of the program
followed by B:.  IE. type PC-GL B: to run the PC-GL program or
PC-AR B: to run PC-AR.  If you have the configuration programs,
you can use them to permanently set B: drive as the data drive.
A configuration program is provided to registered users of each
program.


INTEGRATING THE PROGRAMS

     With the exception of PC-AP, the programs are not
"integrated".  This means to get the sales totals from the
Accounts Receivable program to the General Ledger program you
must make a journal entry.  Likewise, the payroll totals need to
be entered each month into the general ledger program.  Once you
are familiar with the programs, this takes only a few minutes
per month, and is more convenient than having all of the sales
and payroll detail transferred to the general ledger program
automatically.  The PC-GL manual includes a section on posting
payroll and sales data to the General Ledger.


COMMAND LINE OPTIONS

     The configuration program available to registered users
allows you to specify a data path and colors for each program.
You may also specify the desired data path and colors by adding
them to the command line separated by blank spaces.  The
commands are in the following order:  DATA PATH, BORDER COLOR,
DATA COLOR, PROMPT COLOR AND BACKGROUND COLOR.  For example, if
you run PC-GL by typing:

PC-GL B: 3 14 10 1

the program looks for data on the B: drive and uses Cyan
borders, Yellow data, Light Green prompts with a Blue
background.

     The programs always default to the color mode if you have a
color board in your computer.  Adding /bw to the command line
will force the programs to run without colors if your computer
has a color or graphics board and a monochrome monitor.

THE KEYBOARD

     The programs make liberal use of the PC's ten key pad for
both numbers and commands.  At some places in the programs, the
10 key pad produces numbers and at other times the 10 key pad
produces directional commands.  The programs disreguard the Num
Lock status, so it is unnecessary to turn your Num Lock on and
off as you switch from arrow keys to numbers.  The 10 key pad
will produce numbers or commands depending on what is needed at
that point in the program.  One slight side effect of this
process is that for keyboards having separate arrow keys,
pressing the arrow keys will produce numbers at times when the
arrow keys are not needed.


     These programs have been developed and refined over a
period of six years.  I'm sure you'll find them better than
anything else available.  So, relax, take a deep breath and get
your books in order.

MEDLIN SHAREWARE ACCOUNTING          Remit to:  Jerry Medlin
ORDER FORM                                      1461 Sproul Ave.
                                                Napa, CA.  94559

PC-GL General Ledger Program         ($35)      ________

PC-AR Accounts Receivable Program    ($35)      ________

PC-PR Payroll Writing Program        ($35)      ________

PC-AP Accounts Payable Program       ($35)      ________

CA Residents add 6.25% Sales Tax                ________

     Total Enclosed                             ________


Name:   ________________________________________________________

Company:________________________________________________________

Address:________________________________________________________

City:   __________________________ State _______ Zip ___________

Check one:   5.25 inch OK? ____ or 3.5 inch disk required? ____

Payment by:   Check _____   MC _____  VISA _____

Card no.:  _____________________________________________________

Expiration:________________

Cardholder
Name      ______________________________________________________

Cardholder
Signature  _____________________________________________________


Where did you get our program?__________________________________

Sorry, no CODs or Purchase Orders.
Latest version of all four programs and configuration programs
for registered programs will be mailed by First Class Mail.

```
{% endraw %}

## PC-AP.DOC

{% raw %}
```



                             PC-AP
                          Version 1.4
                  Copyright 1989, Jerry Medlin


PROGRAM DESCRIPTION

     PC-AP is an accounts payable program for small and medium
size businesses.  The program runs on a IBM PC or compatible
computer with one disk drive and at least 256k memory.

     PC-AP is a Shareware program.  You are encouraged to give
copies to anyone who might use it.  If you like the program and
find it useful, please contribute $35 to:

                          Jerry Medlin
                        1461 Sproul Ave.
                        Napa, Ca.  94559

     Your contribution will entitle you to a copy of the latest
version of the program and a telephone number for telephone
assistance, should you require it.  You will also receive a
program which will allow you to customize some features of PC-
AP.  A complete description of the customizing program is
contained at the end of this manual.

     PC-AP is designed to work hand in hand with PC-GL, a
General Ledger Accounting Program.  Each invoice entry must be
assigned an expense code or account number and those account
numbers must correspond to the account numbers in the PC-GL
chart of accounts.  You must have the chart of accounts file
from PC-GL on the data disk at all times in order for PC-AP to
function.  The file name of the PC-GL chart of accounts file is
PC-GL.COA.

     To run the program, simply type "PC-AP".  If you want to
specify a drive and path for your data, just add the drive and
path description after the program name.  i.e. type "PC-AP B:"
to use the B drive for data files.

     A menu is then displayed for operator selection:

          Enter or Change Vendors
          Enter, Change or Select Invoices
          Print Checks For Invoices Selected
          Print Check Listing
          Print Invoice Listing
          Print Vendor Activity Report
          Print Mailing Labels
          Print Vendor Listing
          Start a New Accounting Period
          Export Vendor Data to ASCII File
          Save Data and End


     When inputting information, the plus <+> key has the same
effect as the return or enter key.  Numerical information is
entered "calculator style".  The decimal point is placed
automatically.  The minus <-> key enters a negative number.
This makes using the numeric key pad even easier.

     PC-AP is fast because it works with data in random access
memory, but the capacity is limited by available memory.
Available memory is shared by the data.  With more vendors on
file, fewer invoices can be entered and vice-versa.  PC-AP
allows a maximum of 2000 vendors and 2000 invoices per
accounting period, with 512k of memory.  With 256k, the capacity
is reduced to about 300 vendors and 300 invoices.

     Each time the menu is displayed, the number of invoices
that can be added is printed at the bottom of the screen.  This
number may be limited by either memory size, available disk
space, or limited to an absolute maximum of 2000.

     Since a power interruption will result in loosing all the
data currently entered into the program, occasionally save your
data back to the disk.  This is done by selecting End Processing
from the menu.  The current data will be saved to the disk, then
you will be asked "Do you want to end ?".  Just answer with an
"N" and you may resume processing.


THE PROCESSING CYCLE

     As you receive invoices or statements to pay during the
month, enter them into the program.  If you receive an invoice
from a vendor not on file, you must go to "Enter or Change
Vendors" and enter that vendor's information before entering the
invoice.

     When you are ready to pay bills, select the invoices to
pay, then print the checks.  The invoices selected for each
vendor will automatically be combined and a single check printed
for each vendor.  The check number and check date will be added
to the invoice, indicating that it has been paid.

     At the end of the processing period (usually a month),
print reports to retain a permanent record of the month's
activity.  Reports can be printed in any order and as often as
desired.  If you discover an error in any of the reports,
correct the problem and reprint the report.

     Once you are satisfied the monthly information is correct,
start a new accounting period and send the invoices to the PC-GL
General Ledger program by using the START A NEW ACCOUNTING
PERIOD selection from the menu.

     Paid invoices (checks) are added to a file on the data disk
named AP_TO_GL.TRN. This file is read into the PC-GL General
Ledger program from the command mode of the ENTER OR CHANGE
TRANSACTIONS selection by choosing the <R> Read PC-AP
Transactions command.  The choice "<R> Read PC-AP Transactions"
only appears if you have transactions to read.

     Only paid invoices (checks) are posted.  If you need
accrual accounting, the program can be modified to post on an
accrual basis.

     All of the paid invoices (checks) are saved in a file to be
reviewed by the PRINT VENDOR ACTIVITY REPORT.  The unpaid
invoices are carried over into the next accounting period.

     To complete the posting process, you must make an
offsetting entry in PC-GL for the total amount of checks or
invoices posted.  If you are on a cash basis, the entry would be
to Cash in Bank.  If you are on an accrual basis, the entry
would be to Accounts Payable.


     ENTER OR CHANGE VENDORS

     Vendor information is entered and changed using this
selection from the menu.  Enter the following information for
each vendor:

     Vendor name - Two lines of 31 characters each are
     available.   If you only want a single line for the name,
     leave line two  blank.  The blank second line is omitted
     from mailing labels and checks.  When checks or invoices
     are posted from  PC-AP to PC-GL, the first line of the
     vendor name is used for  the description.  Since
     descriptions for the PC-GL General  Ledger program are
     limited to a length of 21 characters, only  the first 21
     characters of the vendor name is posted to  PC-GL.  The
     small down arrow indicates the position of the 21st
     character, so you may choose to keep the first line of the
     vendor name short and use the second line for the remainder
     of the vendor name.

     Vendor Code - A ten character code is used to sort vendors
     and also to post invoices and checks to the vendor's
     account.  In most cases, you will want to enter the
     vendor's  last name, followed by as much of the first name
     as will fit  in the remaining characters.  For instance, if
     the vendor's name is Jerry Medlin, the vendor code would be
     MEDLINJERR.   Notice that all capital letters are used.  If
     you enter lower case letters, they are changed to upper
     case  automatically.  Also, notice no spaces are included
     in the vendor code.   The program prevents you from
     entering a previously used vendor code.

     Street Address - Up to 31 characters for the street
     address.

     City State & Zip - Up to 31 characters for the city, state
     and  zip code.

     Auto Invoice Amt - Here you can enter fixed monthly
     payments such as a loan payment.  Each month, the amount is
     entered as an invoice, when you select <A> Auto Bill from
     the Enter, Change or Select Invoices selection.  If the
     amount is different each month, just enter a zero.

     Default Acct No. - This is the PC-GL account number to
     which payments to this vendor are generally posted.  It is
     also the  account number used for automatic invoicing.  If
     you use a number of different account numbers for this
     vendor, leave the default account number blank.

     Auto Invoice Date - The day of the month the Auto Invoice
     Amount is due.  This can be a number between 1 and 31 and
     will be used as both the invoice date and due date for the
     invoice generated by the "auto invoice" feature.

     YTD Invoices & YTD Checks Written - These numbers are
     maintained by the program and are printed here for your
     information.  You change them using the <C> Change option,
     if you desire.  At the beginning of the year, set  these
     numbers to zero using the <Z> Zero YTD Balances.

     Pressing the Escape key during entry takes you back to the
previous field.  Pressing the Escape key at the first name entry
takes you to the command mode.  The command mode allows you to
scroll up and down through the vendor names, delete vendors,
change vendor information and do a quick check on the balances
for a vendor.  Pressing the Escape key from command mode takes
you back to the menu.  The available commands are listed at the
bottom of the screen.


ENTER, CHANGE OR SELECT INVOICES

     This selection allows you to enter invoices and select them
for payment.  Each invoice entry includes the check number and
date of the check used to pay the invoice.  When an invoice is
first entered, the check number and date are blank.  The check
number and date are filled in when the invoice is paid.  Since a
single check can be used to pay more than one invoice, the same
check number may appear with several invoices.  The check amount
is the total of all of the invoices with the same check number.

     Invoice amounts are entered as positive numbers using the
plus <+> or enter key.  Discounts and adjustments are entered as
negative numbers using the minus <-> key (enter the number then
press the minus key).


     Enter the following information for each invoice:

     Vendor Code - The 10 character code previously entered for
     each vendor is used to post an invoice.  You need enter
     only  as much of the vendor code as necessary to
     distinguish it from any other code.  In other words, if
     only one vendor has a vendor  code beginning with MEDL then
     you need only enter MEDL to post to this vendor.  The
     vendor's name will be  printed at the bottom of the screen,
     so you can be sure you are posting to the correct vendor
     account.  If all you know is the vendor code begins with
     ME, then just enter ME.  The program will print all of the
     vendor codes beginning with ME at the bottom of the screen.

     Invoice Date - Enter the date on the invoice as MODA form.
     The date of June fourth would be entered 0604 with no dash
     or slash.

     Due Date - Enter the date payment is due.  Invoices can be
     sorted by due date, if desired.

     Invoice number - Enter up to 14 characters for the invoice
     number.   Alphabetic characters are allowed, so you can use
     this field  for a short description, if you like.

     Account Number - Enter the account number this invoice
     will be charged to.  The account description is then
     printed  at the bottom of the screen.  Account numbers come
     from the  PC-GL program.  If you don't remember the account
     number,  enter the number 999.  The program then allows you
     to use the arrow keys to search through the possible
     account numbers.  When the desired account number appears,
     just press return to enter it.

     Amount - Enter the amount of the invoice.  The number is
     entered "calculator style" with the decimal point
     automatically placed at two decimal places.

     Pressing the return key on any entry except the amount,
defaults to the previous value.  This allows you to make
multiple entries for an invoice with the same vendor, date or
invoice number by just pressing return.

     To enter a discount, make an entry with the same invoice
number and date, with the discount amount entered as a negative
number.  Negative numbers are entered by first entering the
number and then pressing the minus <-> key.

     To partially pay an invoice, you must break the invoice
into two invoices.  Enter one invoice for the amount you want to
pay, and another invoice -  with the same invoice number and
date - for the remainder of the total invoice amount.  Then pay
the first invoice.

     Pressing the Escape key during entry takes you back to the
previous field.  Pressing the Escape key at the first entry
position takes you to the command mode.  The command mode allows
you to scroll up and down through the entries and delete and
change entries.

     From the command mode, press the <A> Auto Invoice key to
automatically post the amount entered for each vendor as an auto
invoice amount.

     The <S> Sort Invoices command quickly sorts all of the
invoices.  You may choose to sort by vendor code, invoice date,
due date, invoice number, account number, check number or check
date.  Or, of course, you can do no sorting at all.  The program
doesn't require any sorting and doesn't care which order the
invoices are in.  But, if you want to sort by due date, for
instance, it  would make it easier to choose which invoices to
pay.  You can start at the top of the invoice listing and pay
bills starting with the oldest, until you run out of money.
Once invoices are sorted, they stay in that order until you sort
them again.  So, if you want invoices to remain in the original
order, don't sort them.

     Pressing the Escape key from command mode takes you back to
the menu.  All the available commands are at the bottom of the
screen, and are chosen by a single keystroke.


SELECTING CHECKS FOR PAYMENT

     Before a check is written to pay an invoice, it must be
marked for payment.  This is done by using the up and down
arrows to find the invoice and then pressing the asterisk <*>
key.  The word "pay" will then appear in the check number field
for the invoice, indicating it has been marked for payment.

     The <T> Total command prints the total of all invoices
paid, unpaid and marked for payment.  Check this total before
printing checks, to make sure you haven't selected more invoices
for payment than you have money in the bank.  You can also print
the invoice listing to get a printed listing of invoices
selected for payment.  The <V> Vendor Total command totals
invoices for only one vendor.


PRINT CHECKS FOR INVOICES SELECTED

     This menu selection prints a check for each vendor with
unpaid invoices marked for payment.  Multiple entries with the
same invoice number are combined on the check stub.  If more
than 13 lines are required to print the check stub for a vendor,
multiple checks are written.

     Before printing begins, you are asked for a beginning check
number.  This number is used on the first check written.
Subsequent checks are numbered sequentially.  The check date is
the same as the system date entered when your computer starts
up.  If you want to postdate checks, you must exit the program
and change the system date.

Checks are printed on a common pre printed accounts payable
check from New England Business Services (NEBS).  Order the
checks pre printed and numbered.  You will need to send a voided
check with your account number, your company name and address,
and the beginning check number to:  NEBS, 500 Main Street,
Groton, MA  01470.  You can get pricing and order information by
calling NEBS at 1-800-388-3810.  The form number is 9020 and the
mail code number is 03897.

To print checks, set the printer to begin printing just under
"DATE" on the first page of the check form.

The APCONFIG program allows you to choose two other check
styles, including the same check form used by the PC-PR payroll
writing program. (NEBS form number 9022).  The APCONFIG program
is provided to all registered users.  Additional information
about the APCONFIG program is provided at the end of this
manual.


PRINTING REPORTS

     The first time you choose a printed report from the menu
you will be asked to enter a report date.  This date is used on
all reports.  If you want to change the report date you must end
processing and start over, otherwise the same report date will
be used on all reports printed during a posting session.

     On some reports, you will be asked to enter a vendor code.
This is the starting vendor for printing.  Press return to start
at the first vendor.  You will then be asked how many to print.
Enter the number of vendors you want, starting at the selected
vendor; or press return to print from the starting vendor to the
end of the list.  This feature allows you to print partial
reports or to print a report for only a single vendor.  If you
want to print reports for all vendors starting at the first
vendor, just press return twice.

     Next, you will be asked to choose whether you want to print
the report to the printer <P>, to the screen <S> or to a file
<F>.  If you choose to print to a file, you will be asked for a
file name.  The report is then saved as an ASCII file.  (These
files are not readable by PC-AP, but can be viewed and changed
with a text editor and used by other programs that can read
ASCII files.)  The report is printed to a file exactly as it
would be printed to a printer.  If you use LPT2 for a file name,
the report would be printed to your second line printer.


PRINT CHECK LISTING

     To provide an adequate audit trail, this report should be
printed and retained before closing out the month.  It lists all
the checks written by the program or entered manually for the
accounting period.  You will be given an opportunity to sort the
checks before printing.  Sorting in check number order makes the
listing useful for reconciling the bank statement.

PRINT INVOICE LISTING

     You may print all of the invoices or just unpaid invoices.
Print this report at the end of the processing period.  You can
also print the invoice listing before printing checks, to get a
summary of how many checks are to be printed.  This helps avoid
the embarrassment of printing more checks than you have money in
the bank.  Before printing, you can sort the invoices if you
wish.

PRINT VENDOR ACTIVITY REPORT

     This report is a summary of activity for a vendor for the
last 6 accounting periods.  If you choose to print the report
for all vendors, you can expect the report to take a
considerable amount of time to print.  A more practical way to
use this report is to print it for a single vendor to resolve
problems.  The number of accounting periods saved can be changed
using the APCONFIG program.  The maximum is 16 months.

PRINT MAILING LABELS

     As long as you have all of this vendor information on your
computer, you might as well use it to print mailing labels.  You
can print labels for all the vendors or only one vendor.  Labels
are printed on standard 15/16ths peel off labels with one inch
spacing between labels.  To align the printer, use the selection
process to print a single label.

PRINT VENDOR LISTING

     Occasionally, you will want to print a listing of all of
the vendors on file.  This report includes all of the vendor
information on the "Enter or Change Vendors" input screen.

START A NEW ACCOUNTING PERIOD

     When you have printed all the reports you need, and all is
in order, you can complete the accounting period.  All of the
paid invoices are then saved to a file for use with the Print
Vendor Activity Report.  Paid invoices for the last 6 accounting
periods are saved on the data disk in a series of files.  The
most current paid invoices are saved in the file named AP1.INV
and the next most current in AP2.INV  The oldest paid invoices
are eventually saved in the file named AP6.INV.

     All unpaid invoices are carried over to the new month.

     All paid invoices (checks written) are saved to a file
named AP_TO_GL.TRN.  To read this file into PC-GL, you must go
to the command mode of the ENTER OR CHANGE TRANSACTIONS
selection of PC-GL and press <R> for Read PC-AP Transactions.
This will transfer all of the transactions into the PC-GL
program as if they had been typed from the keyboard.  This can
be done at any time.

     So, to post PC-AP transactions to PC-GL you must:

     1) Start a new period with PC-AP.
     2) Run PC-GL and select ENTER OR CHANGE TRANSACTIONS.
     3) Press Escape to get to the Command Mode.
     4) Select <R> for Read PC-AP Transactions.

     Remember, only the checks are posted to PC-GL.  For double
entry accounting, you must complete the operation by entering a
credit <-> to the CASH IN BANK account for an amount equal to
the total of all checks posted from PC-AP to PC-GL.  If you
don't, the PC-GL ledger will be out of balance by that amount.

     The program assumes you are on a cash basis of accounting.
Only the invoices actually paid during the month are posted.  If
your accounting is on an accrual basis, you may modify the
program using the APCONFIG program, so all of the invoices
ENTERED for the month are posted to PC-GL.   The offsetting
credit must be made to the ACCOUNTS PAYABLE account for the
total of all invoices posted from PC-AP to PC-GL.  In addition,
you must make two more entries in PC-GL to reflect the payment
of invoices during the month:  A debit <+> to ACCOUNTS PAYABLE
and a credit <-> to CASH IN BANK.  The amount for that entry
should be obtained from the PC-AP Check Listing report.

     Just because your business is on an accrual basis, doesn't
mean you must choose the accrual method for posting PC-AP
transactions to PC-GL.  Most businesses on an accrual basis
still post transactions on a cash basis, and only make an
accrual adjustment at the end of the year.


EXPORT VENDOR DATA

     This selection creates a file on the logged disk drive and
subdirectory called PC-AP.PRN which can be read by programs like
Lotus 123 and Reflex.  Textual data in the vendor file is
surrounded by quotation marks.  You can then read the data into
Lotus 123 by using the /File/Import/Numbers command.  Be sure no
names or addresses in your vendor file contain quotation marks
before exporting vendor data.


SAVE DATA AND END

     When processing is completed, you must exit the program
using this selection.  Do not end processing by just turning off
the computer.  You will lose any data entered since the last
save operation.  If you just want to save the current data to
the disk without ending, answer "N" to the question "Do you want
to end processing?" and you will return to the menu.


USING THE CONFIGURATION PROGRAM

     The configuration program (APCONFIG.EXE) is provided to all
registered users.  It allows you to change certain features of
PC-AP.  The APCONFIG.EXE program and the main program (PC-
AP.EXE) should both be on the same disk drive when you configure
your copy of PC-AP.  Run the program by typing APCONFIG at the
Dos prompt.  Use the up and down arrows to move the pointer and
then press <C> to change an item.  You can then change the
following information:

     Display Colors - If you have a color adapter and monitor,
     you  can change the colors for borders, program prompts,
     data, and background.  Allowable colors are from 0 to 15
     (except for background color which can only be from 0 to
     7).   The display will be instantly updated as you enter
     the new  colors.

     Laser Printer? - You can change the way PC-AP  starts a new
     page.  Usually, PC-AP starts a new page by  counting lines
     until the page total equals 66 lines.  If you  enter a "Y"
     for the laser printer question, PC-AP will start  a new
     page by issuing a form feed command.  This works on most
     other printers too, but requires you to set the top of form
     before you start printing.

     Disk Drive and Path - Enter a drive and path designation
     for  PC-AP data.  If you want the program to read data from
     the B  drive, enter B:.

     Accounting Method - This determines how invoices are posted
     to  PC-GL.  The allowable answers are "C" for cash basis
     accounting and "A" for accrual basis accounting.  A "C"
     answer means any invoices paid during the month will be
     posted to PC-GL.  An "A" answer means all invoices
     actually entered during the month are posted to PC-GL.

     Months to Save - The PC-AP program saves paid invoices on
     your data disk for later review with the Vendor Activity
     Report.  Normally, the paid invoices for the previous six
     months are saved.  You may modify this number to be
     anywhere from zero to 16 months.  Remember, the more months
     of data you save, the more room you need on the data disk
     and the more time it will take to review a vendor's
     activity.

     Top or Bottom Stub Check - PC-AP normally prints on a check
     form with the stub on the top.  Enter a  "T" for top stub
     or a "B" for bottom stub.

     Check Number Printed on Check? - Enter "Y" for yes or "N"
     for no.  See below for the check forms supported.

     Long Laser Check? - If you have a laser printer you can
     choose the new 11 inch long laser checks.  You will not be
     asked this question unless you answer "Y" for laser
     printer.

     When you have finished making your changes, press the
escape key to exit the program.  You will then be asked if you
want to save the changes.  If you answer with a Y, both the
configuration program and PC-AP are changed until you run the
configuration program again.

CHECKS SUPPORTED

     Normally, PC-AP prints on NEBS check form 9020: a top stub
check with the check number printed on the check.  By combining
the Top/Bottom choice with the Yes/No choice for "Check Number
Printed on Check", you can choose from a variety of different
check styles.  Use this chart to configure the PC-AR program for
the proper check.

NEBS Form Number    Stub Location  Num on Check?  Long Check?
=============================================================
9020                Top            Yes               *
9022                Bottom         No                *
9024                Top            No                *
9027                Top            No                No
9215                Bottom         Yes               *
9039                Top            No                Yes

          * Not normally used on laser printers

DATA FILES

     Data files are created automatically by PC-AP.  If you wish
to back up data files only, copy these files to another disk
using the DOS copy or BACKUP command.

PC-AP.VND      Vendor data files with balances.
PC-AP.INV      Current period invoices and checks.
AP1.INV, AP2.INV, AP3.INV, etc. contain the previous period
invoices and checks with AP1.INV the most recent.
PC-AP requires that PC-GL.COA be on the same data disk or
subdirectory as the other data files.


HELPFUL HINTS

     Transactions from PC-AP are not immediately posted to PC-GL
each month.  You must transfer the transactions into PC-GL by
going to the ENTER OR CHANGE TRANSACTIONS section of PC-GL and
selecting the <R> Read PC-AP transactions selection appearing at
the bottom of the screen.

     To read the transactions created by PC-AP, you must use
version 3.2 or higher of PC-GL.  Earlier versions will not read
the transactions created by PC-AP.

     The escape key is always used to go back to the previous
operation.  From anywhere in the program, if you continue to
press the escape key, you will eventually return to the main
menu.

     When printing reports, you may pause the printing by
pressing any key.  To resume printing, press any key again.  To
quit printing, press the escape key after pausing.

     Each vendor must have a unique vendor code for posting.  If
you use numbers, the program won't object, but you should at
least try the method suggested earlier in the manual.  Use a
vendor code made up of the vendor's last name plus as much of
the first name as the 10 character limit will allow.  Jane Smith
would then have a code of SMITHJANE (Notice there are no
spaces).  This method allows rapid posting of invoices without
looking up vendor numbers.  The searching method allows you to
quickly examine the codes for all of the Smiths by just typing
SMITH, when asked for a code.

     The first 6 times you start a new accounting period, more
disk space is required for historical files.  If you have a
large business and you are using floppy disks for data storage,
you could run out of disk space.  Occasionally check available
disk space with Dos's DIR command.

     PC-AP is written in Turbo Pascal.  The source code is
available for $95.

```
{% endraw %}

## PC-AR.DOC

{% raw %}
```


                             PC-AR
                          Version 3.9
                 Copyright 1989 by Jerry Medlin


PROGRAM DESCRIPTION

     PC-AR is an accounts receivable and sales analysis program
for small and medium size businesses.  The program runs on a IBM
PC or compatible computer, with one disk drive and at least 256k
memory.

     PC-AR is a Shareware program.  You are encouraged to give
copies to anyone who might use it.  If you like the program and
find it useful, please contribute $35 to:

               Jerry Medlin
               1461 Sproul Ave.
               Napa, Ca.  94559

     Your contribution entitles you to a copy of the latest
version of the program and a telephone number for limited
telephone assistance, should you require it.  You also receive a
program which allows you to customize some features of PC-AR.  A
complete description of the customizing program is contained at
the end of this manual.

     When inputting information, the plus <+> key has the same
effect as the return or enter key.  Numerical information is
entered "calculator style".  The decimal point is placed
automatically.  The minus <-> key enters a negative number.
This makes using the numeric key pad even easier.

     To run the program, simply type "PC-AR".  If you want to
specify a drive and path for your data, add the drive and path
description after the program name.  i.e. type "PC-AR B:" to use
the B drive for data files.

     A menu is then displayed for operator selection:

          Enter or Change Sales Codes
          Enter or Change Customers
          Enter or Change Charges & Payments
          Print Mailing Labels
          Print Charges & Payments Listing
          Print Accounts Receivable Ledger
          Print Statements
          Print Sales Summary
          Print Customer Activity Report
          Start a New Month
          Print Customer Listing
          Save Data and End

     PC-AR is fast because it works with data in random access
memory, but the capacity is limited by available memory.
Available memory is shared by the data.  With more customers on
file, fewer charges and payments can be entered and vice-versa.
PC-AR allows a maximum of 2000 customers and 4000 charges and
payments per month with, 512k of memory.  With 256k, the
capacity is reduced to about 200 customers and 200 charges and
payments.

     Each time the menu is displayed, the number of charges and
payments that can be added is printed at the bottom of the
screen.  The number may be limited by either disk space or
memory available, and is subject to a maximum of 4000.  The
number of customers that can be added can be obtained by
dividing the number by 6.

     Since a power interruption results in loosing all the data
currently entered into the program, you should occasionally save
your data back to the disk.  This is done by selecting End
Processing from the menu.  The current data is saved to the
disk, then you are asked "Do you want to end ?".  Answer with an
"N" and you may resume processing.


THE PROCESSING CYCLE

     Accounting is done on a monthly cycle.  At the end of each
month, all charges are added to the customer's balance, and all
payments are deducted from the customer's balance.  The new
balances are used as the starting balances for the next month.

     Each time the program is run, all customer data is loaded
into memory.  Also, any charges or payments entered for the
period are loaded into memory.  You may also have the program
automatically enter a fixed billing amount and late charges for
each customer.  When all of the charges and payments for the
current month have been entered, begin printing reports.
Reports may be printed in any order, and as often as desired.
If you discover an error in any of the reports, you may correct
the problem and reprint the report.  At any time, you can stop
processing by choosing the End Processing selection from the
menu.

     The last step in processing is to apply the charges and
payments to customer balances.  This is done by choosing the
Start a New Month selection on the menu.   This selection does
three things:

1) Ages the customer balances.  All current due amounts become
   30 day due, all 30 day balances become 60 day, etc.

2) Deducts the payments from the customers balance due, starting
   with  90 day and proceeding to current due.

3) Adds the charges to the current balance.  You may then
   proceed with the next month.


ENTER OR CHANGE SALES CODES

     In addition to being an accounts receivable program, PC-AR
is also a sales analysis program.  Each charge or payment is
posted to a sales code.  The Enter or Change Sales Descriptions
selection allows you to enter up to 200 of these sales codes and
their corresponding descriptions.  The sales description is also
printed on the various reports, including the statement.

     Enter a three character sales code (alphabetic or numeric
characters are allowed), and up to 21 characters for a
description.  If you enter a dollar value for each sales code,
the value is entered automatically each time you enter the sales
code.  For most applications, the amount should be zero.

     You may add new sales descriptions, codes and amounts at
any time, but don't change or delete sales codes once charges or
payments have been entered.  Wait until the charges and payments
have been applied to customer accounts, and you are ready to
start a new month, before deleting or changing sales codes.

     At least one of the sales codes, and it's corresponding
description should be for payments on account.  Payments
received from customers should then be posted to this code, as a
negative amount, using the minus <-> key instead of the enter
key.

     If you plan to charge late charges or interest, you should
enter a sales code for this purpose.


ENTER OR CHANGE CUSTOMERS

     Customer information is entered and changed using this
     selection from the menu.  Enter the following information
     for each customer:

     Customer name - Two lines of 31 characters each are
     available.

     Customer Code - This is a ten character code used to sort
     customers, and also to post charges and payments to the
     customers account.  In most cases, you want to enter the
     customers last name, followed by as much of the first name
     as will fit in the remaining characters.  For instance, if
     the customer's name is Jerry Medlin, the customer code
     would be MEDLINJERR.  Notice all capital letters are used.
     If you enter lower case letters, they are changed to upper
     case automatically.  Also, notice no spaces are included.
     The program will prevent you from entering a previously
     used customer code.

     Street Address - Up to 31 characters for the street
     address.

     City State & Zip - Up to 31 characters for the city, state
     and zip code.

     Telephone - Up to 12 characters for the telephone number
     and assorted dashes.

     Late Charge % - Enter the desired late charge for this
     customer as a percentage.  If you are on a monthly cycle
     and you wish to charge an 18% annual rate for balances
     overdue, you would enter 1.5 (18 divided by 12 months.).
     If you don't want to charge late fees to this customer,
     press return to enter a zero.

     Auto Bill Amount - Dollar amounts entered here may be
     posted to a customers account automatically each month.

     Balances Due - You may enter the current balance, the 30
     day balance due, the 60 day balance due, and the 90 day
     balance due.  For new customers with no opening balances,
     press return to enter zero.

     Pressing the Escape key during entry takes you back to the
previous field.  Pressing the Escape key at the first name entry
takes you to the command mode.  The command mode allows you to
scroll up and down through the customer names, delete customers,
change customer information and do a quick check on the balances
due for all customers.  Pressing the Escape key from command
mode takes you back to the menu.

     The acceptable commands at any point are printed at the
bottom of the screen.


ENTER OR CHANGE CHARGES AND PAYMENTS

     This selection allows you to enter charges and payments for
the current month.  Charge amounts are entered as positive
numbers using the plus <+> or enter key and payments are entered
as negative numbers using the minus <-> key (enter the number,
then press the minus key).

     Before any charges and payments can be posted, you must
have at least one sales description entered, so you have a sales
code to post to.  The following information is entered for each
charge or payment:

     Customer Code - The 10 character code previously entered
     for each customer is used to post a charge or payment.  You
     need enter only as much of the customer code as necessary
     to distinguish it from any other code.  In other words, if
     only one customer has a customer  code beginning with MEDL,
     then you need only enter MEDL to post to this customer.
     The customers name is printed at the bottom of the screen
     so you can be sure you are posting to the correct customer
     account.  If all you know is the customers code begins with
     ME then just enter ME and the program prints all of the
     customer codes beginning with ME at the bottom of the
     screen.

     Date - Enter the date of the charge or payment as in MODA
     form.  The date of June fourth is entered 0604, with no
     dash or slash.

     Invoice number - Up to 12 characters for the invoice
     number.  Alphabetic characters are allowed.  Pressing the
     plus <+> key adds one to the previous invoice number, and
     clears the invoice total shown at the top of the screen.
     Pressing <return> gives you the same invoice number as the
     previous line, and does not change the invoice total.

     Sales Code - Enter one of the sales codes.  Sales codes and
     their corresponding descriptions should be setup using the
     Enter or Change Sales Descriptions selection of the menu.
     The description is printed at the bottom of the screen.  If
     you don't remember the sales code, enter the number 999.
     The program then allows you to use the arrow keys to search
     through the possible sales codes.  When the desired sales
     code appears, press return to enter it.

     Amount - Enter the amount of the charge or payment.
     Payments should be entered as a negative number.  A
     negative number is entered by using the minus (-) key
     instead of the Enter key after the number is typed in.

     Pressing the return key on any entry except the amount,
defaults to the previous value.  This allows you to make
multiple entries for an invoice with the same customer, date and
invoice number.  Pressing the plus <+> key for the invoice
number increments the previous number by one.

     Two numbers are printed at the top right of the screen.
The bottom number of the two numbers is the net total of all the
entries entered this month.  Use this number to check your input
data.  The top number is the total for the current invoice.
This total is reset to zero each time you enter a new invoice
number, and should be checked against the invoice total.

      Pressing the Escape key during entry takes you back to the
previous field.  Pressing the Escape key at the first entry
position takes you to the command mode.  The command mode allows
you to scroll up and down through the entries, delete entries
and change entries.

     From the command mode, you may press the <A> Auto Bill key
to automatically post the amount entered for each customer, as
an auto bill amount.  You are asked to enter a date and invoice
number for the automatic postings.  If you enter an amount other
than zero, an invoice is created for EVERY customer for that
amount.

     Pressing the <L> Late Charges key allows you to enter the
late charges for all customers.
     
     Pressing the Escape key from command mode takes you back to
the menu.  All the available commands are printed at the bottom
of the screen, and are chosen by a single keystroke.


ENTERING LATE CHARGES
     
     PC-AR will calculate and enter late charges for customers
who have not paid their previous month's balance due.  Before
printing reports, select the <L> Late Charges selection from
ENTER OR CHANGE CHARGES AND PAYMENTS.  The late charge
percentage entered for each customer is multiplied by the unpaid
balance carried over from last month, and entered as a
transaction to the sales code of your choice.  If you enter an
amount, that amount is used as a minimum late charge.


PRINTING REPORTS

     The first time you choose a printed report from the menu,
you are asked to enter a report date.  This date is used on all
reports.  If you want to change the report date, end processing
and start over; otherwise the same report date is used on all
reports printed during a posting session.

     On some reports, before you start printing, you are asked
to enter a customer code.  This is the starting customer for
printing.  Press the return key to start at the first customer.
You are then asked how many to print.  Enter the number of
customers you want, starting at the selected customer, or press
return to print from the starting customer to the end of the
list.  This feature allows you to print partial reports, and is
handy when your printer eats the 598th of 600 statements.

     When printing more than 20 statements or mailing labels,
you are asked if you want to sort the customers by zip code.  If
you answer Y (yes), the statements or mailing labels are printed
in zip code order.  This allows you to take advantage of the
cheaper bulk mailing rates.

     Next, you are asked to choose if you want to print the
report to the printer <P>, to the screen <S> or to a file <F>.
If you choose to print to a file, you are asked for a file name.
The report is then saved as an ASCII file.  These files are not
readable by PC-AR, but can be viewed and changed with a text
editor; and used by other programs that can read ASCII files.
The report is printed to a file exactly as it is printed to a
printer.  If you use LPT2 for a file name, the report is printed
to your second line printer.


PRINT MAILING LABELS

     As long as you have all this customer information on your
computer, you might as well use it to print mailing labels.  You
can print labels for all the customers, or only one customer,
and you can sort them by zip code, if you wish.  Labels are
printed on standard peel off labels, with one inch spacing
between labels.  To align the printer, use the selection process
to print a single label.


PRINT CHARGES & PAYMENTS LISTING

     To provide an adequate audit trail, this report must be
printed and retained, before closing out the month.  It lists
all the charges and payments entered for the month, and the
total of charges and payments.

     You are asked to enter a starting and ending invoice date.
Pressing the return key twice defaults to the first and last
date, and all invoices for the period is printed.  You can use
this date feature to print only the invoices entered for a
single day, or a group of days.


PRINT ACCOUNTS RECEIVABLE LEDGER

     This report prints each customer's opening balance, all
charges and payments for that customer, any late charges added
and the closing balance.  Customers with no activity and no
opening or closing balances are skipped.  The report should be
printed and retained at the end of each month.  Since PC-AR is a
"balance forward" accounts receivable program, the Accounts
Receivable Ledger is your best source of information, several
months from now, on how a customers balance got that way.


PRINT STATEMENTS

Customer statements are printed on a common statement form from
New England Business Services (NEBS).  The form can be ordered
pre printed, with your company name and address, by calling NEBS
at 800-338-3810.  The form number is 9060, and the mail code
number is 03897.

     If you don't want to use forms preprinted with your name
and return address, you may have the program print your name and
address on blank forms.  To do this requires the program
ARCONFIG which is available to all registered users of PC-AR.
The ARCONFIG program allows you to enter your company name and
address, which will print on plain statement forms or on plain 8
1/2 by 11 paper.

      To test statement alignment, use the start print feature
to print a single statement, then adjust the alignment
accordingly.


PRINT SALES SUMMARY

     This is a listing of all charges and payments by sales
category, followed by a one page listing of total sales by
category.  If you choose, you can omit the detailed listing, but
you should print it at the end of the month for audit trail
purposes.

     You are asked to enter a starting and ending invoice date.
Pressing the return key twice defaults to the first and last
dates used, and all invoices for the period are printed.  You
can use this date feature to print a daily summary of sales.  By
assigning separate sales codes for paid by check, paid by cash
and paid by credit card, you can even print a list of checks and
to go with your bank deposit for the day.


PRINT CUSTOMER ACTIVITY REPORT

      The Customer Activity Report summarizes all the
transactions posted to a customers account for the past 6
months.  It looks at current transactions and the transaction
files on your disk named AR1.INV, AR2.INV, AR3.INV, AR4.INV,
AR5.INV and AR6.INV.  It then prints all the transactions made
to the selected customer code.


START A NEW MONTH

      When you have printed all the reports you need and all is
in order, you can start the next month.  Important - Do not
start a new month until all reports, including monthly
statements, have been printed!

     All charges, payments and late charges are applied to
customer balances. The customers balances are updated to agree
with the balances shown on the statements, and the Accounts
Receivable Ledger.  The charges and payments are saved, so later
you may review all the transactions posted to an account for the
past six months using the Print Customer Activity Report
selection of the menu.


PRINT CUSTOMER LISTING

     This report is a printout of all customer information on
file including aging information.  The balances shown do not
reflect any charges or payments made since the last month ended.
Only the Start a New Month selection actually changes customer
balances.

     You may choose to omit customer addresses, and to omit
customers with no activity, when you print this report.


EXPORT CUSTOMER DATA

     This selection creates a file on the logged drive and
subdirectory called PC-PR.PRN, which can be read by programs
like Lotus 123 and Reflex.  Text data in the customer file is
surrounded by quotation marks.  You can then read the data into
Lotus 123 by using the /File/Import/Numbers command.  Be sure no
names or addresses in your customer file contain quotation
marks, before trying to export customer data.


SAVE DATA AND END

     When processing is completed, exit the program using this
selection.   Do not end processing by turning off the computer,
because you lose any data entered since the last save operation.
If you  want to save the current data to the disk without
ending, you may answer "N" to the question "Do you want to end
processing?", and you are returned to the menu.


USING THE CONFIGURATION PROGRAM

     The configuration program (ARCONFIG.EXE) is provided free
to all registered users.  It allows you to change certain
features of PC-AR.  The ARCONFIG.EXE program and the main
program (PC-AR.EXE) should both be on the same disk drive when
you configure your copy of PC-AR.  Run the program by typing
ARCONFIG at the Dos prompt.  Use the up and down arrows to move
the pointer, and then press <C> to change an item.  You are
allowed to change the following information:

     Display Colors - If you have a color adapter and monitor,
     you can change the colors for screen borders, program
     prompts, data, and background.  Allowable colors are from 0
     to 15 (except for background color which can only be from 0
     to 7).  The display is instantly updated as you enter the
     new colors.

     Laser Printer? - You may also change the way PC-AR starts a
     new page.  Usually, PC-AR starts a new page by counting
     lines, until the page total equals 66 lines.  If you enter
     a "Y" for the laser printer question, PC-AR starts a new
     page by issuing a form feed command.  This works on most
     other printers too, but requires you to set the top of
     form, before you start printing.

     Disk Drive and Path - Enter a drive and path designation
     for PC-AR data.  If you want the program to read data from
     the B drive, enter B:.

     Months to Save - The PC-AR program saves charges and
     payments on your data disk for later review with the
     Customer Activity Report.   Normally, the paid invoices for
     the previous six months are saved.  You may modify this
     number to be anywhere from zero to 16 months.  Remember,
     the more month's data you save, the more room you need on
     the data disk, and the more time it takes to review a
     vendor's activity.

     Plain Paper Statement - If you change this to a "Y",
     statements can be printed on plain 8 1/2 x 11 paper.  A "N"
     answer prints on pre printed 6 1/2 x 7 forms.  The default
     setting is "N".

     Statement Heading - If your company name and address is not
     pre printed on the statement forms, you may enter up to 5
     lines for a statement heading.

     Statement Footer Message - You can enter a message to be
     printed at the bottom of the statement form.  This is a
     good place to enter your payment terms, or a short
     advertising message.

     Print Ageing on Statements - Changing this from Y to N
     prevents the 30, 60, 90 day aging information from being
     printed on the statements.

     Invoice Details on Statements - Changing this from a Y to a
     N causes only the totals for each invoice to be printed on
     the statements.  This allows you to have a detailed
     breakdown of sales on the sales summary, but prints only
     invoice totals on the statements.  All adjacent entries
     with the same invoice number are totaled on the statement
     with "INVOICE #" for a description.  For this option to
     work properly, multiple entries with the same invoice
     number, must be together in the charges and payments
     listing.  It is a good idea to sort by Invoice number
     before printing the statements.

     When you have finished making your changes, press the
escape key to exit the program.  You will be asked if you want
to save the changes.  If you answer with a Y, both the
configuration program and PC-GL are changed until you run the
configuration program again.


DATA FILES

     Data files are created automatically by PC-AR.  If you wish
to back up data files only, copy these files to another disk
using the DOS copy or BACKUP command.

PC-AR.CUS      Customer data file with balances.
PC-AR.INV      Current period payments and charges.
PC-AR.DES      Sales codes and descriptions.
AR1.INV, AR2.INV, AR3.INV, etc. contain the previous period
payments and charges.  AR1.INV is the most recent.


HELPFUL HINTS

     The escape key is always used to go back to the previous
operation.  From anywhere in the program, if you continue to
press the escape key, you will eventually return to the main
menu.

     When printing reports, you may pause the printing by
pressing any key.  To resume printing, press any key again.  To
quit printing, press the escape key after pausing.

     Each customer must have a unique customer code for posting.
If you use numbers, the program won't object, if the numbers are
all the same length.  Customer number 1 should be entered as
00001, for instance.  But, you should at least try the method
suggested earlier in the manual.  Use a customer code made up of
the customers last name plus as much of the first name as the 10
character limit allows.  Jane Smith would then have a code of
SMITHJANE (Notice there are no spaces).  This method allows
rapid posting of invoices, without looking up customer numbers.
The searching method allows you to quickly examine the codes for
all of the Smiths, by typing SMITH when asked for a code.

     The first 6 times you start a new month, more disk space is
required for historical files.  If you have a large business and
you are using floppy disks for data storage, you could run out
of disk space.


CONVERTING DATA FROM EARLIER VERSIONS

     If you have been using version 3.7 or higher, no conversion
is necessary.

     If you are changing from a version of PC-AR beginning with
2 (a very old version) you need to convert your customer data.
A program called CONVERT.COM is available for this purpose and
is free to all registered users.  Run the program and follow the
directions on the screen.  If you have been using a version
prior to 3.7, you must rename your earlier charges and payments
files for use with this program.  Contact us to receive
CONVERT.COM or for instructions on how to rename your earlier
data files.

     Starting with Version 3.9, late charges are handled the
same as any other charge or payment.  You must enter a sales
code to receive the late charges and, each month, you must
choose the <L> Late Charges option to calculate and enter late
charges.  This method requires only a few seconds per month to
enter the late charges, and provides increased flexibility and
improved audit trail.

     PC-AR is written in Turbo Pascal.  The source code is
available for $95.

```
{% endraw %}

## PC-GL.DOC

{% raw %}
```


                              PC-GL
                          Version 3.4
                  Copyright 1989, Jerry Medlin


PROGRAM DESCRIPTION

     PC-GL is a double entry accounting program which allows a
small to medium size business to rapidly and accurately produce
financial reports.  The program runs on a IBM PC or compatible
computer with at least one disk drive, and requires at least
256k memory.

     PC-GL is a Shareware program.  You are encouraged to give
copies to anyone who might use it.  If you use the program,
please send $35 to:

              Jerry Medlin
              1461 Sproul Avenue
              Napa, Ca.  94559

     Your contribution entitles you to a copy of the latest
version of the program and a telephone number for limited
telephone assistance should you require it.  You also receive a
program which allows you to customize some features of PC-GL.  A
complete description of this customizing program is contained at
the end of the manual.

     The system consist of two files.

     PC-GL.EXE - The compiled program written in Turbo
     Pascal.

     PC-GL.COA - A standard chart of accounts to use or
     modify for your purposes.

     To run the program, simply type "PC-GL".  If you want to
specify a drive designation and path for your data, add the
drive and path description after the program name.  i.e. type
"PC-GL B:" to use the B drive for data files.  If you are going
to use the standard chart of accounts, be sure the file PC-
GL.COA is on the specified drive and subdirectory.

     Each time you run the program, a menu is displayed for
operator selection:

              Enter or Change Chart of Accounts
              Enter or Change Transactions
              Print Chart of Accounts Listing
              Print Transaction Listing
              Print General Ledger
              Print Income Statement
              Print Balance Sheet
              Print Account Summary Report
              Year End Update
              End of Processing

     Make a selection by using the up or down arrows to
highlight the desired function, then press <return>.

     PC-GL allows a maximum of 800 items in the chart of
accounts and 6000 transactions per accounting period.  With 256k
of memory, the number of transactions is reduced to about 500
per accounting period.  The number of additional transactions
you can enter is printed at the bottom of the menu screen.  This
number is limited by either disk space or memory available, and
is subject to an absolute maximum of 6000 transactions.

     When inputting information, the plus <+> key has the same
effect as the return or enter key.  The minus <-> key enters a
negative number.  This makes using the numeric key pad even
easier.


THE PROCESSING CYCLE

     Usually accounting is done on a monthly cycle, but the PC-
GL program allows you to use any length of accounting period.
Checks and journal entries for the accounting period are entered
using the second menu selection (Enter or Change Transactions).
Debits are entered as positive <+> numbers and credits are
entered as negative <-> numbers.

     When the transactions have been entered and checked you may
begin printing reports.  Reports may be printed in any order and
as often as desired.  Reports may be printed to the screen first
to check their accuracy.  Should you discover a posting error
after examining the reports, correct the error and rerun the
reports.

     The only report that must be printed to the printer each
period is the General Ledger Report.  If the General Ledger
Report has not been printed to the printer (not just the
screen), you are not allowed to end an accounting period and
start another.  The General Ledger Report shows the opening
balance for each account, all of the transactions posted to the
account for the accounting period, followed by the closing
balance for each account.  Once you start a new accounting
period, the printed General Ledger Report is your only audit
trail.  Starting a new accounting period without printing the
general ledger would leave no trace of how an account arrived at
its present balance.  Since organizations like the IRS want to
know how you arrived at those numbers on your tax return, the
General Ledger Report is required.  If it hasn't been printed
the program never asks "Do you want to start a new accounting
period?".

     To start a new accounting period, you must answer "Y" to
the question "Do you want to start a new accounting period?".
The question is asked immediately upon running PC-GL, if you
printed the General Ledger Report during your last processing
session.  If you answer with a "N", the latest transactions are
loaded and you may add additional entries - continuing on with
the old period.  If you answer "Y", the current period balances
will be set to zero and the transactions for the previous period
are saved for later review.  You may then begin entering
transactions for the new period.


DOUBLE ENTRY ACCOUNTING

     Double entry accounting requires the total of all debit <+>
entries to be the same as the total of all credit <-> entries.
It does not mean there must be a credit for every debit, only
that all of the entries must add up to zero.  Each accounting
period consist of a series of balanced entries with equal pluses
and minuses.

     All of the checks written during a month are posted to the
various expense accounts as debit <+> amounts.  Then the total
of all of those checks is then posted to the CASH IN BANK
account as a single credit <-> amount.  The net of all the
transactions posted is therefore zero, making a balanced series
of entries.  All income amounts are entered as credit <->
amounts and a corresponding debit <+> entry is made to the Cash
in Bank account or to Accounts Receivable.  The PC-GL program
helps you when posting transactions, by displaying the balance
of all transactions posted at the upper right of the screen.
When all of the transactions for the accounting period have been
posted, the balance displayed should be zero.

     If you are unfamiliar with double entry accounting, it is
beyond the scope of this manual to completely cover the subject.
However, all is not lost.  The PC-GL system can also be used as
a simple single entry system.  Just enter all your expenses and
income to the proper account, and run the system normally.
Expenses are entered as positive <+> amounts and (this is
important!) income amounts are entered as negative <-> amounts.
To enter a negative amount, first enter the number then press
the minus<-> sign.


SETTING UP THE CHART OF ACCOUNTS

     A standard chart of accounts is provided with the program.
Although any sequential numbering scheme will work with the
general ledger program, the one provided is in common usage by
accountants.  To use the standard chart of accounts, simply run
the program with the file PC-GL.COA on the data disk drive.

     The chart of accounts can be added to at any time during
the processing period.  All chart of accounts setup and
modification is done using the <Enter or Change Chart of
Accounts> selection on the menu.  This section allows you to add
new COA items, delete or change existing ones, or examine the
COA by scrolling up and down the screen.  All commands are
listed at the bottom of the screen and are selected by a single
keystroke.  Upon entering this section, you may immediately
begin adding items to the chart of accounts or, by pressing the
Escape key, you may go to the command mode and insert, delete or
change items in the chart of accounts.

     You will not be allowed to delete an account with a balance
or change balance amounts.  Changing amounts is done by posting
transactions to the account.  This way you have that all
important audit trail.  Upon exiting the chart of accounts
section, the chart of accounts is automatically sorted in
account number order.

     The following information is contained in each chart of
accounts:

     1)   ACCOUNT NUMBER - A three digit number between 000 and
     999 which will be used for posting transactions.

     2)   ACCOUNT CODE - A two digit number which determines
     how, and on which reports, the item will be printed.  (See
     the section on COA coding for details.)

     3)   PRIOR YEAR % - This number will be printed on the
     income statement and is for informational purposes only.
     If no prior year % is desired just press return for this
     entry and none will be printed on the income statement.
     The prior year % is updated automatically at the end of the
     year, by the Year End Update procedure.

     4)   ACCOUNT DESCRIPTION - Up to 27 characters are allowed
     for the account description.

     5)   CURRENT AMOUNT - This is the balance of all
     transactions entered to this account for the current
     accounting period.  If an asterisk <*> is entered during
     setup, this chart of accounts entry will be treated as a
     title account on reports.  Title accounts are used to
     provide headings and totals on reports.  Transactions
     cannot be posted to a title account.  Press any other key
     during setup to enter a zero beginning balance for current
     and year to date.

     6)   YTD AMOUNT - This is the balance of all transactions
     entered to this account for the current year.  Opening
     account balances cannot be entered when the chart of
     accounts is set up.  They must be posted as transactions.

     Remember to look at the bottom of the screen, when in
doubt.  Your options are printed there.


     The first item in the chart of accounts should contain the
name to be printed on all reports.  If you are using the
standard chart of accounts, change the description of the first
account from STANDARD CHART OF ACCOUNTS to the name you want
printed on your financial statements.

     Once the chart of accounts has been setup, you won't use
this section, except to occasionally add new items to the chart
of accounts or delete unwanted accounts with zero balances.


ENTERING TRANSACTIONS

     All checks and journal entries for the accounting period
are entered using the <Enter or Change Transactions> selection
of the menu.  This selection also allows you to examine entries
by scrolling up and down the screen and to insert, delete or
change entries.  You may also obtain a total for a particular
account and you can search all of the transactions for any
string of characters.  All commands are listed at the bottom of
the screen.

     Each transaction contains the following information:

     1)   DESCRIPTION - Allows up to 21 characters to describe
     the entry.  Pressing <return> or <+> causes the previous
     entry to be repeated.  To enter a blank description, press
     the space bar, then <return>.

     2)   CHECK NO. - A five digit check or reference number.
     Numbers or letters may be used. Pressing <return> causes
     the previous number to be repeated.  Pressing <+> enters a
     number equal to the previous number plus one.  (This is
     useful when entering a series of checks with sequential
     check numbers.)

     3)   DATE - The date must be entered in MODA form.  i.e.
     0108, for January  eighth.  Pressing <return> or <+>
     repeats the previous date.  Any day of the month higher
     than 80 causes the transactions to be posted to the year to
     date balance only.  (In other words, a transaction with a
     date of 0185 does not affect current balances when posted,
     only year to date balances.)

     4)   ACCOUNT NUMBER - You must enter a three digit account
     number.  Once the account number has been entered, the
     program checks to see if the number is a valid account
     number.  If it is not, you are asked to reenter the account
     number.  Once a valid account number has been entered, the
     corresponding account description from the chart of
     accounts is displayed at the bottom of the screen.  If you
     don't remember the account number, enter the number 999.
     You are then able to use the up and down arrow keys to
     search the chart of accounts for the correct account
     number.

     5)   AMOUNT - Enter the amount calculator style without
     using the  decimal point.  Debit entries are entered as
     positive numbers and credit entries are entered as negative
     numbers.  To enter a negative number, enter the number in
     the regular manner followed by the minus <-> sign, instead
     of the enter or plus <+> sign.

     If you press the <Return> key without entering an amount,
     an amount is entered equal to the net of all of the
     transactions for the period, but with the opposite sign.
     In other words, a balancing entry is created.  If the net
     of all of the transactions so far is +1234.56 and you press
     the <Return> key without entering an amount, 1234.56- is
     entered.  This feature is especially useful for those users
     who want to enter a debit for each credit.

     The net amount of the current check, and the net of all the
transactions posted for the period are constantly displayed at
the upper right of the screen.  The check balance is useful when
posting a single check to multiple accounts.  For double entry
accounting, the net amount of all transactions should be zero
when you finish with posting for the period.

     When using the <C> Change selection to change a chart of
account item or a transaction, you don't have to reenter each
field.  Press the return key, to skip to the next field.

     The <T> Total selection for transaction entries is useful
for checking balances.  It can, for instance, be used to add up
all the purchases, so you can make an ending inventory
calculation based on a desired cost of sales.

     If you are using the PC-AP Accounts Payable program and
have ended a PC-AP accounting period, you will have an
additional menu item available at the bottom of the screen.  <R>
Read PC-AP Transactions allows you to read all of the checks
written by PC-AP into the PC-GL program.  Transactions from PC-
AP are not posted to PC-GL until you select <R> Read PC-AP
Transactions.


PRINTING REPORTS

     To print any of the available reports, select the report
from the main menu.  First, you are asked to input a report date
to be printed on the report.  Alphabetic and numeric dates are
acceptable. i.e. January 31, 1987.  Pressing return enters the
system date for the report date.  After a date is entered, you
can choose printing to the printer, the screen or to a file.

     If you choose to print to a file, you are prompted for a
file name.  The program prints the report to this file exactly
as it would have been printed to the printer.  These files are
regular ASCII files, and are read by most word processors.
Specifying a file name of LPT2: allows you to print to a second
printer.  You may optionally leave off the report headings, when
you print to a file, so that the data can be easily imported
into a spread sheet or data base.


ACCOUNT SUMMARY REPORT

     Each time you start a new accounting period by answering
"Y" to the question "Do you want to start a new accounting
period?" at the beginning of the program, the transactions for
the prior period are saved.  Eventually, up to 12 accounting
periods (months) are saved.  The most recent transactions are in
a file named GL1.TRN, and the oldest transactions are in a file
named GL12.TRN.  The account summary report allows you to print
a summary of transactions for a single account.  You can also
sort the transactions, before they are printed by description,
date, check number or account number.  You will be asked for an
account number and the number of months to go back.  Inputting
zero for the number of months will look at only the current
period.  If you enter ALL for the account number, you may also
print a General Ledger Report going back up to 12 months.

     This is  a useful report to print at the end of the year so
that you can review the year's activity with one General Ledger
Report instead of having to look at 12 individual reports.


YEAR END CLOSEOUT

     At the beginning of a new accounting year, all profit and
loss account balances are set to zero, using this selection.  In
addition, the prior year percentages are updated to reflect the
year just ended.  The program asks for the account number of
your capital account, then the profit or loss for the year just
ended is posted to that account.  If you are using the Standard
Chart of Accounts, the capital account is account number 465.
This section should be used only once a year, and cannot be done
unless the General Ledger has been printed.


END OF PROCESSING

     When processing is completed, you must exit the program
using this selection.  You are asked if you want to end
processing.  A yes "Y" answer saves the chart of accounts, and
all of the current transactions.  Any answer other than "Y"
returns you to the main menu.


CHART OF ACCOUNTS CODING

     If you use the standard chart of accounts or a modified
version of the standard chart of accounts, it is not necessary
to be familiar with chart of account coding.  Just delete the
unwanted chart of account items. This information is provided
for those who want to use their own chart of accounts, or
produce special reports.

     The first number of the two digit code is a number from 1
to 9 which determines the account type.

              1.  ASSETS
              2.  LIABILITIES
              3.  INCOME (OR SALES)
              4.  COST OF SALES
              5.  GROSS PROFIT
              6.  OPERATING EXPENSES
              7.  OTHER INCOME
              8.  OTHER EXPENSES
              9.  NET PROFIT

     The GROSS PROFIT (#5) and PROFIT OR LOSS (#9) are generally
used only once in each chart of accounts, for totaling purposes.
The COST OF SALES (#4), GROSS PROFIT (#5), OTHER INCOME (#7) and
OTHER EXPENSES (#8) can be omitted, if your applications don't
require those categories.

     When printing the income statement, the sign for the
balances of accounts with odd numbered account codes is
reversed.  So, income amounts (#3) which normally have a credit
balance and are carried as minus numbers in the general ledger
are printed on the income statement as positive numbers.

     The second number of the two digit code determines the
totaling level for an account on the income statement and
balance sheet.  The total level is used to determine what totals
and subtotals appear on reports.  Each higher total level totals
all previous lower account numbers.  The best way to understand
how the totaling level works is to experiment.  Change the
number and reprint the report to see how it looks.  Chart of
account coding can be changed at any time without causing
problems.

Total Level:

0    The balance and description will print only on the general
     ledger report.  When printing the balance sheet or income
     statement, the balance (if any) is totaled and printed into
     the next higher number.  i.e. The total for a series of 0
     coded accounts prints into the next account numbered 1 or
     higher.

1    Used for most accounts.  On the balance sheet the account
     balance is printed in the first column.

2    Prints total of all previous 0 and 1 accounts.  Prints in
     the middle column of the balance sheet.

3    Prints total of all previous 0, 1, and 2 accounts.  Prints
     in the right hand column of the balance sheet.

4    Used for subtotal accounts such as TOTAL ASSETS, OPERATING
     PROFIT etc.

5    Used for the NET PROFIT account on both the balance sheet
     and income statement.  If the balance sheet does not
     contain a level 5 account, the balance sheet will not
     balance.

     For complex income statements, an additional total level
(6) is available.

     The second digit is also used to control paging, spacing
and underlining.  Any number higher than 1 will be preceded by a
blank line.  A 9 in the second digit causes the printer to start
a new page.  The use of a 9 to start a new page should be
restricted to title accounts.

     Accounts used only for totaling the balances of previous
accounts or for printing titles on a statement are title
accounts.  A title account is created by entering an asterisk in
the current balance column of an account.  You cannot post any
transactions to a title account.  Most accounts with a totaling
level higher than 1 are title accounts.

     You can print an extra blank line on the income statement
or balance sheet by entering a title account with a blank
description.

     Underlining on the income statement and balance sheet is
accomplished by entering an account, with a non-numerical
character in the second digit of the two digit code. (Non-
numerical means something other than 0 through 9.)  The
character will be used to print a line under the last number
printed on the income statement or balance sheet.  So, an
account code ending with a dash <-> prints a single underline
and an account code ending with the equal sign <=> prints a
double underline.  The account's only purpose is to print the
underline.  The account should be a title account, and it's
description will be ignored.


USING OTHER PROGRAMS FROM JERRY MEDLIN

     There are three other programs available from Jerry Medlin:
     PC-AR - a balance forward Accounts receivable program.
     PC-PR - a payroll writing program.
     PC-AP - an accounts payable and check writing program.

     The only program which integrates directly with PC-GL is
the accounts payable program: PC-AP.  You must have PC-GL in
order to use the accounts payable program.  All of the checks or
invoices entered in PC-AP are automatically posted to PC-GL.

     PC-AR and PC-PR are "stand alone" programs and do not
automatically post to PC-GL.  (To do so would require all of the
payroll checks and all of the sales entries to be added to the
transactions in PC-GL.)  You must post the totals from the
accounts receivable program and the payroll program with a short
series of journal entries each month, which usually takes no
more than a few minutes each month.  This provides greater
control and flexibility to the whole accounting process.

     The details of the journal entries from PC-PR and PC-AR to
PC-GL depend on your particular situation, but might look
something like this:

                         Check               Account     Check
Description              Number      Date    Number      Amount
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
Cash Received on Acct    GJN01       0131     103      22345.67
January Sales            GJN01       0131     511      22345.67-
January Gross Pay        GJN01       0131     708       2045.43
January Fed W/H          GJN01       0131     331        190.00-
January FICA             GJN01       0131     332        146.26-
January SDI W/H          GJN01       0131     333         24.53-
January State W/H        GJN01       0131     334         14.70-
January Net Pr           GJN01       0131     103       1669.94-


     The first two entries are from the accounts receivable
program and the last 6 entries are from the payroll program.
The entries would vary depending on cash or accrual basis and,
of course, the amounts and accounts involved.


PRIOR PERIOD CORRECTIONS

     You cannot change prior period transactions with PC-GL,
even though prior period transactions are saved on the disk in a
series of files.  Changing prior period transactions creates a
number of accounting problems related to the audit trail, and is
simply not possible.  If you find an error in the previous
period and you have not yet started a new accounting period, you
can answer "N" to the new accounting period question at the
beginning of the program and rerun the period.  If the error is
from an earlier period, you must make the correction to the
current period.

     You can enter the correction without affecting current
period balances, by using a day of the month higher than 80.  A
date such as 0187, for instance, would tell the program to enter
the transaction only in the year to date column, and not post as
a current transactions.


HANDLING BEGINNING AND ENDING INVENTORY

     If your application doesn't require the beginning and
ending inventory to show on the income statement, you can skip
this section.  It discusses a commonly used, but somewhat
confusing, technique to properly display beginning and ending
inventory on a computerized income statement.

     Any transaction with a date containing a day of the month
higher than 80 is posted as a year to date transaction only.  It
does not affect the current period balance.  This is moderately
useful for making adjustments to the year to date balances, but
it's principal value lies in making the beginning and ending
inventory work properly on the income statement.

     If we assume the inventory at the beginning April was
$25000.00, and the inventory at the end of April was $29000.00;
the following series of entries are required:

Description          Ref #       Date      Acct #       Amount
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

Inventory           GJN04        0430       151        29000.00
Inventory           GJN04        0430       151        25000.00-
Beginning Inv.      GJN04        0430       610        25000.00
Ending Inv.         GJN04        0430       696        29000.00-
Ending Inv.         GJN04        0484       696        25000.00
Beginning Inv.      GJN04        0484       610        25000.00-

     Notice the last two entries are year-to-date entries,
because the day of the month is higher than 80.  If the
beginning and ending inventory accounts start at zero (as would
be the case at the beginning of the year), the last two year-to-
date entries are omitted.


USING THE CONFIGURATION PROGRAM

     The configuration program (GLCONFIG.EXE) is provided to all
registered users.  It allows you to change certain features of
PC-GL.  The GLCONFIG.EXE program and the main program (PC-
GL.EXE) should both be on the same disk drive and sub directory,
when you configure your copy of PC-GL.  Run the program by
typing GLCONFIG at the Dos prompt.  The previous configuration
of PC-GL will be displayed.  Use the up and down arrows to move
the pointer and then press <C> to change an item.  The following
information may then be changed:

     Display Colors - If you have a color adapter and monitor,
     you can change the colors for screen borders, program
     prompts, data, and background.  Allowable colors are from 0
     to 15 (except for background color which can only be from 0
     to 7).

     Laser Printer? - You can also change the way PC-GL starts a
     new page.  Usually, PC-GL starts a new page by counting
     lines until the page total equals 66 lines.  If you enter a
     "Y" for the laser printer question, PC-GL starts a new page
     by issuing a form feed command.  This also works on most
     other printers, but requires you to set the top of form
     before you start printing.

     Zero Balances on Statements? - If you don't want accounts
     with zero balances to print on the income statement or
     balance sheet, change this to a "N".

     Months to Save - The program normally saves the past 12
     months of transactions so that they can be reviewed with
     the Account Summary selection.  You can change this time
     period to any number from 1 to 30.  A smaller number
     requires less disk space, and speeds the new period
     processing by a few seconds.

     Disk Drive and Path - Enter a drive and path designation
     for PC-GL data.  If you want the program to read data from
     the B drive, enter B:.

     Income Statement Heading - You can change the default
     heading printed on the income statement report.  You will
     probably need to start with some blank spaces to line up
     the heading correctly.  Sometimes trial and error is the
     best way.

     Balance Sheet Heading -  You can also change the balance
     sheet headings.

     Income Statement and Balance Sheet Footers - A "footer" is
     a short comment inserted at the end of a report.  An
     example of a footer would be a statement like "Prepared
     without benefit of audit", or any other meaningless comment
     your attorney tells you to put on your financial
     statements.

     When you have finished making your changes, press the
escape key to exit the program.  You will then be asked if you
want to save the changes.  If you answer with a Y, PC-GL is
changed, until you run the configuration program again.


DATA FILES

     Data files are created automatically by PC-GL.  If you wish
to back up data files only, copy these files to another disk
using the DOS copy or BACKUP command.

PC-GL.COA      Chart of account listing with balances.
PC-GL.TRN      Current period transactions.
GL1.TRN, GL2.TRN, GL3.TRN etc contain the previous period
transactions.  GL1.TRN is the most recent.



HELPFUL HINTS

     Opening balances are entered as transactions, using the
Enter or Change Transactions selection.  If you enter the
opening balances using a day of the month higher than 80 (for
example 0189), the opening balances do not affect the current
period totals.

     It is helpful to remember that PC-GL uses data loaded into
random access memory.  New data is not saved to the disk until
you end processing, or select the <S> Save option from the Enter
or Change Transactions section of the program.  This also means
if you make a mistake on the opening question (Do you want to
start a new accounting period?), you can boot the computer and
start over:  your previous data is still on the disk.

     If you do not get the question "Do you want to start a new
accounting period?" when starting PC-GL, it is because you
didn't print the General Ledger report to the printer.  Changing
even a single transaction convinces PC-GL you have not printed
the General Ledger report, and prevents the new period question
from appearing.

     The first 12 times you start a new accounting period, more
disk space is required for historical files.  If you have a
large business and you are using floppy disks for data storage,
you could run out of disk space.  Reduce the number of periods
saved using the GLCONFIG program.

     You can use the Account Summary Report each January to help
in summarizing payments for 1099 forms.  The 1099 is the form
the government wants every year which reports payments to
individuals of over $600.

     The "Zero Balances" selection in the chart of account
command mode sets ALL chart of account balances to zero and
deletes any transactions entered for the period.  There are only
two reasons to ever use this command:

1)  When you first start using PC-GL you might want to practice
a few times before you really get started.  Use "Zero Balances"
to get a fresh start.  If you have run a number of test months,
and wish to delete all of the Account Summary data: exit to the
disk operating system and type:  ERASE GL*.TRN.

2)  If you want to use an existing chart of accounts setup on a
new application, you could zero the existing balances after
copying the chart of accounts file PC-GL.COA to the disk for the
new business.

     This version of PC-GL is completely compatible with all
other versions of PC-GL except for the method of saving and
recalling old transaction files.  If you have been using a
version number lower than 3.0 (version 2.9 or lower), you need
to convert the historical data if you want to use it with this
program.  Contact us for instructions on how to convert the old
data.


     PC-GL is written in Turbo Pascal.  The source code is
available for $95.

```
{% endraw %}

## PC-PR.DOC

{% raw %}
```



                              PC-PR
                          Version 1.8
                  Copyright 1989, Jerry Medlin


PROGRAM DESCRIPTION

     PC-PR is a payroll writing program for small and medium
size businesses.  The program runs on a IBM PC or compatible
computer with one disk drive and 128k memory.

     PC-PR is Shareware.  You are free to try the program and
are encouraged to give copies to anyone who might use it.  Since
the federal tax tables are included in the program, you need an
updated version of the program each year.  The cost for the
updated program is $35.  The program as distributed, includes
the 1990 federal tax tables.  To receive a copy of the program
with 1991 tax tables send $35 to:

          Jerry Medlin
          1461 Sproul Avenue
          Napa, Ca.  94559

     Your payment will entitle you to a telephone number for
limited telephone assistance.

     To run the payroll program, simply type "PC-PR" at the DOS
prompt.  If you want to specify a drive and path for your data,
add the drive and path description after the program name.  i.e.
type "PC-PR C:PAYROLL\" to use the directory named PAYROLL on
the C drive for data files.  If you want the root directory on B
drive, type "PC-PR B:"

     You will be asked to enter a date.  This date is used to
date all of the payroll checks written.  You will also be asked
to enter a memo line to print on the payroll checks.  Press the
Enter key if you do not wish to print a comment or memo line on
the payroll checks.

     A menu is then displayed:

          Enter or Change Employee Data
          Enter or Change Payroll Checks
          Print Employee Listing
          Print Payroll Check Listing
          Print Payroll Ledger
          Print Quarterly Payroll List
          Federal Liability by Paydate
          Start a New Quarter or Year
          Enter or Change Employer Data
          Export Employee Data
          End Processing

     Use the arrow keys to highlight your selection, then press
return.

     PC-PR is fast because it works with data in memory.  The
capacity is limited by available memory.  Because memory is
shared by the data, with more employees on file, fewer payroll
checks can be entered.  PC-PR allows a maximum of 500 employees
and 1000 payroll checks per accounting period with 512k of
memory.  With 256k the capacity is reduced to about 300
employees and 300 checks.

     Each time the menu is displayed, the number of payroll
checks that can be added with the available memory is printed at
the bottom of the screen.  The number of employees that can be
added is obtained by dividing this number by 2, as each employee
takes up twice as much memory as a payroll check entry.

     Since a power interruption will result in loosing all the
data currently entered into the program, occasionally save your
data back to the disk.  This is done by selecting End Processing
from the menu.  The current data will be saved to the disk.  You
will be asked "Do you want to end ?".  Answer with an "N" and
you may resume processing.


THE PROCESSING CYCLE

     Payroll checks may be written on any cycle from daily to
annually.  After each batch of payroll checks, print the Payroll
Check Listing report and the Payroll Ledger report.  This will
provide a printed "audit trail", so you will know where you got
all those numbers on the employee's W-2s.

     Payroll Checks are printed as the payroll data is entered.
When all of the payroll checks for the current payroll have been
printed, you may begin printing reports.  Reports may be printed
in any order, and as often as desired.  If you discover an error
in any of the reports, correct the problem and reprint the
report.  At any time, you can stop processing by choosing the
End Processing selection from the menu.  Data will automatically
be saved.

     When you start the program, you are asked "Do you want to
start a new payroll period? (Y/N)".  If you answer the question
with a "N", the latest payroll checks are loaded and you may add
additional entries.  If you answer "Y", the current period
balances are set to zero and the payroll checks for the previous
period are saved for later review.  You may then begin entering
a new payroll.  Important:  If you don't print either the
Payroll Check Listing or the Payroll Ledger report, you won't be
able to start a new period, because you won't be asked "Do you
want to start a new payroll period?".


ENTER OR CHANGE EMPLOYER DATA

     Before you do anything with PC-PR you need to enter a
screen of employer information.  This employer information is
only entered once, but can be changed whenever any of the
relevant data changes.  Select ENTER OR CHANGE EMPLOYER DATA
from the main menu.  When the program is first run, most of the
data is blank.  By using the up and down arrows, you can select
each field to be changed and, by pressing "C", you may change
the information in that field.

     Space is provided for the employer name (2 lines), employer
address (2 lines) and employer federal and state identification
numbers.  The first line of the employer name is printed on all
reports.  The remaining name and address information is used
only for printing W-2's at the end of the year.

     The number of paydays per year is required to calculate
federal income tax to be withheld and must be a number between 1
and 52.  Weekly payroll is 52 paydays per year, semimonthly
payroll is 24 paydays per year, biweekly payroll is 26 paydays
per year and monthly payroll would be 12 paydays per year.  If
the federal withholding amounts are calculating incorrectly, it
is because you have not entered the correct number for the
number of paydays per year.

     Next you must fill in the information for payroll
deductions.  There are 6 deductions possible with PC-PR.  The
first deduction is always federal income tax withholding (FWH).
The next deduction is Social Security or FICA.  You may change
this if you are not required to withhold Social Security tax.
The remaining four deductions may be renamed for your
application.  You may also set a limit for each deduction and
the percentage to be withheld.  For instance social security tax
(FICA) for 1990 is limited to 7.65% of the first $51300 of
income.  Anyone who earned more than $51300 will not have social
security tax deducted after they reach $51300.

     If you have a percentage deduction with no limit, enter
999999 for the limit.

     A zero value for the limit and percentage means this
deduction must be input by the user.  Such is the case with most
state income taxes, and for any miscellaneous deductions.

     A negative value for deduction percent will tell the
program to calculate the tax as a percentage of federal
withholding.  So, if your state income tax is 10 percent of
federal income tax, you should enter 10.00- for the deduction
percent for that deduction.

     A negative value for the deduction limit will tell the
program to reduce the annual taxable income by that amount per
dependent before multiplying it by the percentage.  For
instance, Illinois state income tax is calculated by reducing
the taxable pay by $1000 per dependent on an annual basis and
multiplying it times 2.5 percent.  So, you would enter -1000 for
the deduction limit and 2.50 for the percentage.  Several other
states have similar withholding plans, including Michigan (1800
per dependent and 4.60 percent) and Indiana (1000 per dependent
and 3.40 percent).

     A value of 99.99 for the deduction percent tells the
program to use the state income tax withholding tables.  The
opening screen of PC-PR states which state tax table is
supported.  If no state is mentioned in the opening screen, the
California tax table is included.

     You may input information for calculating up to 6 payroll
tax amounts.  This information is used to print a summary of
payroll taxes due for the quarter at the bottom of the payroll
ledger report, but has no effect on the calculations for
employee's payroll checks.  It is especially useful for
calculating employer paid payroll taxes such as federal
unemployment insurance (FUI).  FUI is based on payroll paid up
to a certain amount for each employee.

     Since PC-PR requires a printer capable of printing at least
96 characters across a page, you must let the program know what
printer codes are required to set your printer to 10 and 12
characters per inch (cpi).  If your printer is already set up to
print at least 96 characters or you use switches to set the
printer pitch then you can leave this part blank.  Otherwise,
enter in hexadecimal the code or codes required to change your
printer pitch to 10 cpi and 12 cpi.  Appendix A at the end of
this manual contains the codes for several popular (and not so
popular) printers.  If your printer is not listed, the
information should be available in your printer manual.

     If you have a fairly new printer, chances are it is Epson
compatible.  So, before trying to read your printer manual, try
1B50 for 10 CPI and 1B4D for 12 CPI.  If the printer codes are
correct, the report headings should be printed without any
extraneous characters and without wrapping around at the end of
the line.  Make sure you enter the 0 character as a zero, not a
capital letter O.

     The following is an example of a completed employer data
screen for the state of California for the 1990 tax year and
using a Prowriter or C-Itoh 8510 printer.  Your data will vary
depending on state law and the type of printer you are using.


     Employer Data
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

Name 1      JOHN HENRY'S DRILLING       Printer Control Codes
Name 2      & EXCAVATING INC.
Address 1   333 OAT HILL ROAD
Address 2   CALISTOGA, CA.  94598       10 Cpi    1B4E
Federal ID  94-2678232                  12 Cpi    1B45
State ID    250-7432-4
Paydays per year    26

Deduction    Limit     Percent     P/R Tax      Limit    Percent

 FWH          None      Table
 FICA        51300       7.65       FICA        51300      7.65
 SDI         25149       0.90       SUI          7000      2.30
 SWH             0      99.99       ETT          7000      0.10
 Insur           0       0.00       FUI          7000      0.80
 Other           0       0.00       SDI         25149      0.90
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
 Use the up and down arrows to move the pointer
 then <C> to change or <Esc> to exit.



ENTER OR CHANGE EMPLOYEE DATA

     Employee information is entered and changed using this
selection from the menu.  Enter the following information for
each employee:

     Employee name - Up to 25 characters are available.

     Street Address - Up to 25 characters for the street
     address.

     City, State & Zip - Up to 25 characters for the city, state
     & zip code.

     Sort by - A ten character code used to sort employees in
     alphabetical order.  Employees are sorted each time you
     leave the ENTER OR CHANGE EMPLOYEE DATA section.  In most
     cases, you will want to enter the employee's last name,
     followed by as much of the first name as will fit in the
     remaining characters.  For instance, if the employee's name
     is Jerry Medlin, the employee code would be MEDLINJERR.
     When a new employee name is entered, the program will make
     a pretty good guess and enter a sort code for you.  If you
     want to change the sort code, press the escape key.

     Social Security - Enter the employee social security number
     without spaces or dashes.  Dashes are added later, when the
     social security number is printed on reports.

     Status - Marital status can be either M for married or S
     for single.
     
     Allow - The number of allowances claimed by the employee.
     Enter a number from 0 to 9 or the letter E, if the employee
     is exempt from federal tax.  Entering an S for allowance
     will tell the program to input federal tax from the
     keyboard, instead of calculating it.

     Rate - The employees hourly wage rate.  If you wish, you
     can enter the pay rate for a whole pay period, then enter
     the hours as 1 when entering payroll check data.

     Dept - Enter a department number between 0 and 9.  This
     number is used to summarize payroll by department at the
     end of the Payroll Check Listing.  When an employee no
     longer works for you, enter an "X" for department and the
     employee will be omitted from payroll and employee
     listings, but retained for W2 purposes.

     Pressing the Escape key during entry takes you back to the
previous field.  Pressing the Escape key at the first entry
takes you to the command mode.  The command mode allows you to
scroll up and down through the employee names, delete employees
and change employee information.  Pressing the Escape key from
command mode takes you back to the menu.

     If you don't know the employee's address or social security
number, you can leave that information blank for now, and fill
it in later using the <C> Change option.

     The <E> Enter New Balances command allows you to enter new
quarter and year to date balances for an employee.  Be careful!
The principal purpose of this selection is to allow you to enter
opening balances when you first begin using PC-PR.  It will also
allow you to enter incorrect balances and foul things up!

     At times, you may want to find an employee without
scrolling through the entire employee list.  To do this, use the
<G> Go to Employee selection from the command mode.  Enter the
employee's name, or even the beginning of the name, and the
program will take you immediately to that employee.

     All acceptable commands are printed at the bottom of the
screen.


ENTER OR CHANGE PAYROLL CHECKS

     Payroll checks are printed on a common check form from New
England Business Services (NEBS).  Order the checks pre printed
and numbered.  You will need to send a voided check with your
account number, your company name and address and the beginning
check number to:  NEBS, 500 Main Street, Groton, MA  01470.  You
can get pricing and order information by calling NEBS at 1-800-
388-3810.  The form number is 9022 and the mail code number is
03897.

     With the PRCONFIG program provided to registered users you
can print on a variety of check forms.  See the description of
PRCONFIG at the end of this manual for details.

     The ENTER OR CHANGE PAYROLL CHECKS selection allows you to
enter or change payroll checks.  Payroll checks are normally
printed as the payroll information is entered.  This normally
causes no delay with most printers, and results in a shorter
overall time for doing a payroll.  If you prefer, you can skip
printing the checks as they are entered, and print them one at a
time using the <P> Print command.

     Before any payroll checks are entered, you must have
entered your employer information into the program as explained
in the previous section.

     The following information must be entered to calculate a
payroll check:

     Date - The date entered at the beginning of the processing
     period is automatically entered for each payroll check.
     The only way to change the date is to go back to the date
     entry at the beginning of the program and enter a new date.

     Employee Name - You don't have to type in the employees
     name.  Just use the up and down arrows on the number pad to
     search for the employee you want to pay.  When you find the
     right employee, press the return or enter key.  There is no
     need to memorize employee numbers.  Payroll checks are
     entered by name only.

     Check Number - Up to 4 characters for the check number.
     Alphabetic characters are allowed.  Pressing the return or
     plus <+> key enters a number equal to the previous check
     number plus one.

     Total Hours - The total hours worked by the employee for
     the pay period.  This will be multiplied by the rate
     entered for the employee to determine regular pay.  The
     total hours should include any overtime hours.

     O.T. Hours - Overtime hours worked for the pay period.
     This number will be multiplied by one half the rate entered
     for the employee to determine the overtime excess pay.
     Only the overtime EXCESS is paid as overtime, the rest of
     the overtime is included with the regular pay.  So, if a
     weekly employee worked 42 hours, enter 42 hours for Total
     Hours and 2 hours for O.T. Hours.

     Other Income - Enter the dollar amount of any other income
     to be paid during this pay period.  Use this entry for
     entering total pay for salaried employees, or any extra pay
     for hourly employees.

     Non Taxable - If you want to add a non taxable payment to
     the check (such as an auto allowance or reimbursement for
     supplies paid for by the employee), you can enter it here.
     Be sure the amount you are entering is, in fact, non
     taxable, because the amount will be added to the net check
     with no deductions taken.

     The program will then instantly calculate the payroll
deductions that are supposed to be calculated and prompt you to
enter the deductions which are not calculated.  You will then be
presented with four choices:


<Return> or <+>  Print this check       <C> Change this check
<X> Skip Printing                       <Esc> Cancel this check

     Normally you will press the return or plus key and the
check will be printed.  If you made an error in one of the steps
above, or if you want to change one of the deduction amounts,
select <C> and you will be given an opportunity to change any of
the check information, and then returned to the above four
choices.  Should you not want to print the check at this time,
you can press the X key.  The <X> Skip Printing choice is
usually used when you want to enter a manually written check
into the payroll.  Pressing the Escape key will cancel the
check.

     Pressing the Escape key during entry takes you back to the
previous field.  Pressing the Escape key at first entry position
(Name) takes you to the command mode.

     The command mode allows you to scroll up and down through
the entries, delete entries, change entries, and print any
checks you left unprinted.  From the command mode, press the <T>
Total key to see the total of all the payroll checks written so
far.

     Pressing the Escape key from command mode takes you back to
the menu.  All the available commands are printed at the bottom
of the screen and may be chosen by a single keystroke.


PRINTING REPORTS

     When you first enter the PC-PR program, you are asked to
enter a report date.  This date is used on all reports.  If you
want to change the report date, press Escape at the Main Menu.


PRINT EMPLOYEE LISTING

     This is a listing of all current information for each
employee.  Use this sheet as a payroll input sheet for the next
pay period, and to check addresses and social security numbers
for accuracy.

     You may also choose to print the list in Mailing Label
format.  A mailing label for each employee can be printed on
standard 3.5" X 15/16" labels.


PRINT PAYROLL CHECK LISTING

     This report lists all of the payroll checks written for the
payroll period.  At the end of the payroll check listing, the
total of all checks is printed followed by a breakdown of
payroll by department.  Print and retain this report after each
payroll for a permanent record.


PRINT PAYROLL LEDGER

     The payroll ledger is an important "audit trail" for the
 PC-PR program.  It lists each employee with his or her payroll
balance at the beginning of the payroll period.  Each payroll
check for the employee is listed followed by the quarter to date
and year to date balances for the employee at the end of the
payroll period.

     At the end of the Payroll Ledger report, the quarterly
payroll tax liabilities are calculated and printed.  These
numbers have no effect on payroll, but are there to help you
fill out the various state and federal payroll tax forms. The
calculations are based on information you entered in the ENTER
OR CHANGE EMPLOYER INFORMATION section of the program.

     Important!  If you don't print either the Payroll Ledger
Report or the Payroll Check Listing, the program will not ask
you if you want to start a new payroll period at the beginning
of the program.  This is done to assure a payroll audit trail.


PRINT QUARTERLY PAYROLL LIST

     This report prints a list of employee names, social
security numbers and quarterly earnings.  Years ago, a similar
listing called the "941a" was required with the Employer's
Quarterly Federal Tax Return.  The 1982 Paper Reduction Act
eliminated the requirement for the 941a.  (The Paper Reduction
Act also required the addition of a "Paper Reduction Act Notice"
to every federal form.)   Most states still require the 941a
form information in a slightly different format, and many even
have additional requirements.

     It is impossible to support the whims of 50 individual
states, but this report does print on California's successor to
the 941a: the DE-3B form.  Also, for those enlightened states
that allow you to provide the list in a variety of formats, this
report will do nicely.  If you have a word processing program,
you may also print this report to a file, then load it into your
word processor for editing.

     Many states also want to know how many weeks each employee
worked during the quarter, but there is no accurate way to
determine weeks worked for any pay period other than weekly, so
you must provide your own best guess.

FEDERAL LIABILITY BY PAYDATE

     This report will give you the Federal Liability by Paydate
information required at the bottom of the Federal Form 941.  For
this report to be correct, you must have completed the quarter
using this program and you must have used the second deduction
(the one after federal withholding) for Social Security (FICA)
tax.  The totals on this report may vary from the total
liability by a few pennies, due to round off errors.

     This reports is calculated from the payroll checks saved
for each period.  Remember, the number of payroll periods saved
defaults to 9.  If you are paying weekly, you need to use the
PRCONFIG program to increase the number of payroll periods saved
to at least 13 or 14 periods.

START A NEW QUARTER OR YEAR

     At the end of each quarter, before you print the first
payroll check for the new quarter, use this selection to set all
employee quarter to date balances to zero.  At the end of the
year, all employee year to date balances should be set to zero.
You will be asked to enter a "Q" to zero quarter to date
balances or a "Y" to zero year to date balances.  Pressing any
other key will return you to the menu with no changes made.  The
program will attempt to remind you when it is time to start a
new quarter or year, by looking at the system date in your
computer.  Even if you forget to start a new quarter or year at
the proper time, this option will work as long as you haven't
started a second payroll period for the new quarter or year.


EMPLOYEE HISTORY REPORT

     The program retains payroll checks from the last 9 payroll
periods on your data disk.  The employee history report allows
you to review those checks for any or all employees.  This
report is sometimes helpful in filling out state or local
reports requesting the number of payroll periods worked.


EXPORT EMPLOYEE DATA

     This selections allows you to print at least some of the
employee data to a file called PR.PRN.  This file can then be
read into many spreadsheet and database programs, allowing you
to use the employee data for other purposes.

     The file PR.PRN is created as soon as you select this
option from the menu.  You can view the file after you exit PC-
PR by typing TYPE PR.PRN.  You can also load the resulting data
into LOTUS 123 using the import/numbers option.

     The Export Employee Data option is provided only as a
convenience for those advanced users who need the data for other
purposes.  Otherwise, you need not use this option.


SAVE DATA AND END

     When processing is completed you must exit the program
using this selection.   If you just want to save the current
data to the disk without ending, you may answer "N" to the
question "Do you want to end processing?" and return to the
menu.


PROGRAM LIMITATIONS

     I have tried to write a simple payroll writing program
which complies with the multitude of laws regarding payroll.  As
a result, the program works for most payroll situations, but not
for all.

     The program is not recommended for any payroll applications
requiring FICA wages to be different from taxable wages.  This
includes companies that deduct for pension and deferred
compensation plans, supplemental unemployment compensation plans
and students working for private schools.

     The program will handle tips declared by employees, but the
tax summaries at the end of the Payroll Journal will always
include the tips, which may not be correct in some situations.

     If you have different payroll periods for different
employees, you must remember to change the "Paydays per Year"
under "Enter or Change Employer Data" each time the payroll
period changes.

     In addition, the following situations will require amounts
to be manually entered or changed before the check is printed:

     State Income Tax Withholding - At present, the program
supports a limited number of states plus all states with an
income tax that is 1) a fixed percentage of gross pay, 2) a
percentage of federal taxes, 3) a fixed percentage of gross pay
after a flat deduction or 4) zero.  If your state is not
supported, it only takes a few seconds per check to enter the
state withholding manually.

     Family employees - If you are a sole proprietorship and you
pay family members, you must manually change the FICA deduction
to zero.  Remember, the tax due calculations at the end of the
Payroll Journal will include the family employee.  This amount
must be subtracted before calculation of the tax due.

       Earned Income Credit - I have never known an employee to
claim this credit.  If you have one, you must manually calculate
the amount and enter it in the federal withholding field, and
keep a separate manual record of the amount.

       Additional withholding amount - If an employee wants an
additional amount added to his or her federal withholding, you
must enter it manually.


USING THE CONFIGURATION AND W-2 PRINTING PROGRAM

     The configuration program (PRCONFIG.EXE) is provided to all
registered users.  It allows you to change certain features of
PC-PR and to print W-2's at the end of the year.  The
PRCONFIG.EXE program and the main program (PC-PR.EXE) should
both be on the same disk drive when you configure your copy of
PC-PR.  Run the program by typing PRCONFIG at the DOS prompt.
To configure PC-PR, select the first menu choice.  Then, use the
up and down arrows to move the pointer and then press <C> to
change an item.  You can change the following information:

     Display Colors - If you have a color adapter and monitor,
     you  can change the colors for screen borders, program
     prompts,  data, and background.  Allowable colors are from
     0 to 15  (except for background color which can only be
     from 0 to 7).   The display will be instantly updated as
     you enter the new  colors.

     Laser Printer? - You will also be able to change the way
     PC-PR  starts a new page.  Usually, PC-PR starts a new page
     by  counting lines until the page total equals 66 lines (or
     42 lines for checks).  If you enter a "Y" for the laser
     printer question, PC-PR will start  a new page by issuing a
     form feed command.  This works on most other printers too,
     but requires that you set the top of form before you start
     printing.

     Disk Drive and Path - Enter a drive and path designation
     for  PC-AP data.  If you want the program to read data from
     the B  drive, enter B:.

     Non Taxable Name - Normally, this is just called "Non
     Taxable", but if you want to get more specific by calling
     it "Auto Allowance" or "Expense Reimb" you can do so.

     Payroll Periods to Save - The PC-PR program saves previous
     checks on your  data disk for later review with the
     Employee History Report option.   Normally, the payroll
     checks for the previous 9 payroll periods are  saved.  You
     may modify this number to be anywhere from zero to 30
     payroll periods.  Remember, the more data you save, the
     more room you need on the data disk and the more time it
     will take to review an employee's history.

     Top or Bottom Stub Check - PC-PR normally prints on a check
     form with the stub on the bottom.  Enter a  "T" for top
     stub or a "B" for bottom stub.

     Check Number Printed on Check? - Print the check number on
     the body of the check as a control number.  Enter "Y" or
     "N".

     Long Laser Check? - If you have a laser printer you can
     choose the new 11 inch long laser checks.  You will not be
     asked this question unless you answer "Y" for laser
     printer.

     When you have finished making your changes, press the
escape key to return to the main menu.  When you exit the
program, you will then be asked if you want to save the changes.
If you answer with a Y, both the configuration program and PC-PR
are changed until you run the configuration program again.

CHECKS SUPPORTED

     Normally, PC-PR prints on NEBS check form 9022 which is a
bottom stub check.  By combining the Top/Bottom choice with the
Yes/No choice for "Check Number Printed on Check", you can
choose from a variety of different check styles.  Use this chart
to configure the PC-AR program for the proper check.

NEBS Form Number    Stub Location  Num on Check?  Long Check?
=============================================================
9020                Top            Yes               *
9022                Bottom         No                *
9024                Top            No                *
9027                Top            No                No
9215                Bottom         Yes               *
9039                Top            No                Yes

          * Not normally used on laser printer

     "Number on Check" means that the program prints the check
number on the body of the check as a control number.  You should
always order checks with the check number preprinted on the
check.


PRINTING W-2'S

     Before printing W-2's, check the standard setup for W-2's
by selecting the second menu choice in the PRCONFIG program.
You can select which deductions you want printed in the
different blocks of the W-2 form.  If any of the blocks along
the top of the W-2 form require checking, it will have to be
done manually.  So, if an employee has a deferred compensation
or pension plan or is deceased, be sure to go back and manually
X out the proper block after you print the W-2.

     W-2's will print on standard, one-wide W-2 forms, but since
most printers are not capable of printing 6 copies, you might
want to order W-2 forms in "twin sets".  New England Business
Service (NEBS) offers W-2 forms in 3 part employee and 3 part
employer forms which you print separately.  The form number is
9859 and the catalog code number is 03897.

     If you use a laser printer, the program will print on cut
sheet W-2 forms from NELCO.  NELCO's phone number is (414) 337-
1000 and the form numbers are BW2FED, BW2ER and BW2EE.  Also, be
sure you choose laser printer operation and the alternate W-2
format.

DATA FILES

     Data files are created automatically by PC-PR.  If you wish
to back up data files only, copy these files to another disk
using the DOS copy or BACKUP command.

PC-PR.EMP      Employee data files with balances.
PC-PR.PRC      Current period payroll checks.
PR1.PRC, PR2.PRC, PR3.PRC, etc. contain the previous period
payroll checks.  PR1.PRC is the most recent.


HELPFUL HINTS

     When inputting information, the plus <+> key has the same
effect as the return or enter key.  Numerical information is
entered "calculator style".  The decimal point is placed
automatically.  Using the minus <-> key after the number enters
the number as a negative.  This makes using the numeric key pad
even easier.

     The escape key is always used to go back to the previous
operation.  From anywhere in the program, if you continue to
press the escape key, you will eventually return to the opening
date question.

     The first 9 times you start a new payroll period, more disk
space is required for historical files.  If you have a large
business and you are using floppy disks for data storage, you
can run out of disk space.  Check available disk space with
Dos's DIR command occasionally.

     If you void a payroll check before starting a new payroll
period, you may simply delete the check from the payroll checks
by pressing the delete key, when the check is displayed on the
screen.

     If you void a check after a new payroll period has started,
you must enter the check as a negative payroll check, so the
amounts will be reversed from the employee's payroll totals.
Negative numbers are entered by first entering the amount, then
pressing the minus <-> sign.

     If the federal withholding is not calculating correctly,
check to see that the correct number of payroll periods has been
entered in the Enter or Change Employer Data section.

     Federal withholding amounts are calculated using the
percentage method detailed at the front of the Circular E
withholding booklet.  This method is actually more accurate than
using the tables; and will result in a small difference from the
amounts in the withholding tables, if the wages fall near the
top or bottom of a wage bracket.  So, if the calculated amount
differs from the tables by a few dollars, it's not a problem.

SPECIAL WARNING:  Garbage In - Garbage Out.

     Although I have made every effort to eliminate the most
common operator errors, it is still possible to enter complete
nonsense into this program, and get incorrect payroll from the
program.  Just because it is a computer doesn't make it
automatically correct.  Look at the checks and printouts, and
make sure the numbers are reasonable.  If you enter an incorrect
check, be sure and void it.  It is your responsibility to see
that your employees and the government get correct information.


APPENDIX A - PRINTER CODES

Be sure to enter the 0 character as a zero, not a capital O.
For most new printers use the EPSON commands 1B50 and 1B4D.
Printer             10CPI               12CPI
=====================================================
AXIOM               1B1F0C              1B53
BROTHER 1           1B50                1B45
BROTHER 15          1B1F0D              1B1F0B
CITOH 8510          1B4E                1B45
DMP 2100            1B12                1B1D
DMP 420 & 500       1B12                1B17
DWP OTHER           1B0F                1B0E
EPSON JX            14121B501B7201      14121B4DA2
EPSON LQ 1500       1B50                1B4D
EPSON MX            12                  0F
GEMINI              1B4201              1B4202
HP LASER JET        1B266B313248        1B266B313048
IBM COLOR           12                  1B3A
IBM GRAPHICS        12                  0F
NEC 3510            1B5D4C              1B5D4A
NEC 3515 & 7715     1B1F0D              1B1F0B
NEC 3550            1B53                1B49
NEC PINWRITER P3    1B3F30              1B3F33
NEC PN 237          1B48                1B45
OKIDATA 2410        1B36                1B41
OKIDATA OTHERS      1E                  1C
PANASONIC           1B50                1B4D
PRISM               1D02                1E02
PRO PRINTER         12                  1B3A
PRO WRITER          1B4E                1B45
QUME                1B453132            1B453130
TALLY               1B5B3477            1B5B3577
THINK JET           1B266B3353          1B266B3053
TI 855              1B79                1B99
TOSHIBA             1B1F0D              1B1F0B


```
{% endraw %}

## FILE0331.TXT

{% raw %}
```
Disk No:  331                                                           
Disk Title: Medlin Accounting                                           
PC-SIG Version: S4.9                                                    
                                                                        
Program Title: Medlin Accounting                                        
Author Version: 2/90                                                    
Author Registration: $35.00 for each of the four programs - PC-GL; PC-AP
Special Requirements: Two floppy drives.                                
                                                                        
MEDLIN ACCOUNTING is a group of four companion accounting packages      
which, when used together, provide full-charge accounting services very 
suitable for the small to mid-sized business.                           
                                                                        
The first and main program, PC-GL, is a double-entry General Ledger     
module.  It can be used by itself or with PC-AP -- the Accounts Payable 
package.  PC-AP is an Accounts Payable program that allows a maximum of 
2000 vendors and 2000 invoices per accounting period.  PC-AR is a       
menu-driven Accounts Receivable module and supports up to 2000 accounts,
with up to 3000 charges and payments per period.  PC-PR is the          
Payroll-Writing system.  This version includes the 1989 Federal tax     
tables.                                                                 
                                                                        
NOTE:  All programs are run in RAM which accounts for their speed but   
also controls how many files can be supported at a time.  Numbers of    
supported accounts quoted above are based on at least 512K RAM.  Less   
RAM will allow the modules to run but will support a smaller number of  
accounts.                                                               
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## GO1.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║              <<<<  Disk #331 Medlin Accounting >>>>                     ║
╠═════════════════════════════════════════════════════════════════════════╣
║  To view or print the documentation or to install the programs          ║
║          type: GO (press enter)                                         ║
║                                                                         ║
║  To start the PC-GL program type: PC-GL (press enter)                   ║
║                                                                         ║
║  To start the PC-AR program type: PC-AR (press enter)                   ║
║                                                                         ║
║  To start the PC-PR program type: PC-PR (press enter)                   ║
║                                                                         ║
║  To start the PC-AP program type: PC-AP (press enter)                   ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0331

     Volume in drive A has no label
     Directory of A:\

    VIEWDOC  COM     11643   2-19-90   9:28a
    DOCS     ARC     58731   2-13-90  11:20a
    PC-GL    EXE     53056   2-13-90  10:58a
    PC-GL    COA      6095   2-13-90  10:58a
    PC-AR    EXE     62960   2-13-90  10:59a
    PC-PR    EXE     66256   2-15-90   1:26p
    PC-AP    EXE     56160   2-21-90   9:32a
    INSTALL  BAT       224   2-16-90  11:17a
    GO       BAT       224   2-16-90  11:17a
    GO1      BAT        39   3-16-90   3:56p
    GO1      TXT      1079   3-19-90  12:10p
    FILE0331 TXT      2443   3-19-90   3:18p
           12 file(s)     318910 bytes
                           36864 bytes free
