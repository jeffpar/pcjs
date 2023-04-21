---
layout: page
title: "PC-SIG Diskette Library (Disk #825)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0825/
preview: https://pcsigdisks.pcjs.org/pcx86/sw/misc/pcsig/0001-0999/DISK0825/DISK0825.jpg
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0825"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "TIME TRAKER"

    Do you have to keep track of the amount of work you do for others?  Are
    you a contractor, lawyer, consultant or other hourly professional?
    Here's an easy way for your to track your working hours and simplify the
    billing process.
    
    TIME TRACKER keeps track of what you do for your clients and the time it
    takes to complete it. It keeps track of all of your accounts and bills
    them. It also records the receipt of money from your billings.
    
    Since your accounts receivable is taken care of, the only thing you have
    to worry about is keeping track of your expenses. Moreover, it will let
    you know where you stand in terms of accounts receivable, income, and
    unbilled hours, at any time.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE0825.TXT

{% raw %}
```
Disk No:  825
Disk Title: Time Traker
PC-SIG Version: S2.4

Program Title: Time Tracker
Author Version: 2.10
Author Registration: $25.00
Special Requirements: 512K and a hard disk is recommended.

Do you have to keep track of the amount of work you do for others?  Are
you a contractor, lawyer, consultant or other hourly professional?
Here's an easy way for your to track your working hours and simplify the
billing process.

TIME TRACKER keeps track of what you do for your clients and the time it
takes to complete it.  It keeps track of all of your accounts and bills
them.  It also records the receipt of money from your billings.

Since your accounts receivable is taken care of, the only thing you have
to worry about is keeping track of your expenses.  Moreover, it will let
you know where you stand in terms of accounts receivable, income, and
unbilled hours, at any time.


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
 The following instructions enable you to print the Time Traker documentation
 and install the system for immediate use:
   1. In order to print the documentation please turn your printer on.
   2. After booting your computer place the Time Traker diskette in drive A:
   3. At the DOS prompt (C>, A>, etc.) type: "TYPE A:TIMETRAK.TXT > LPT1:"
   4. This documentation is about 25 pages long.

 To install your Time Traker program on hard disk drive C:
   1. Turn on or Re-boot your computer.
   2. At the DOS prompt "C>", type: "A:INSTALL" (and press ENTER)
   3. The Time Traker program and data files will be placed in the TIMETRAK
      Sub-directory on your hard disk drive.
   4. To begin the program, type: "CD \TIMETRAK" (and press ENTER)
   5. Then type: "TTMAIN" (and press ENTER)

 To run Time Traker on a floppy disk drive:
   1. Place the disk in the floppy drive (either A: or B:)
   2. At the DOS "A>" or "B>" prompt type "TTMAIN" and press RETURN

 Note: If you are using a monochrome monitor with a graphics adapter card
       you may experience "snow" when displaying to the screen.  To eliminate
       this start the program with "TTMAIN -O".  The display may be slower.

 REMEMBER: Always use a copy of program disks and backup data often!
```
{% endraw %}

## TIMETRAK.TXT

{% raw %}
```











                          TIME TRACKER



               Time Management and Billing System


                         Version  2.10a














                    Superior Micro-Techniques
                 5510 Orchard St., W, Suite B1473
                        Tacoma, WA  98467
                          (206)564-0803


The TIME TRACKER software and documentation are the sole property
of Superior Micro-Techniques.  Reproduction of any kind, without
prior consent is strictly prohibited.  Copyright 1989.

TABLE OF CONTENTS





           INTRODUCTION............................1
           SYSTEM REQUIREMENTS.....................2
           SYSTEM FILE MAINTENANCE.................3
           CLIENT MAINTENANCE......................4
           TELEPHONE ACTIVITY......................5
           RECORD OF WORK ACTIVITY.................6
           RECORD REIMBURSABLE EXPENSES............7
           BILLING.................................8
           CASH RECEIPTS...........................9
           VOID AN UNPAID INVOICE.................10
           REPORTS.............................11-13
             PRINT INVOICES.......................11
             PRINT A/R AGING......................11
             PRINT INCOME STATEMENT...............11
             PRINT CLIENT LABELS..................12
             UNINVOICED ACITIVTY..................12
             PRINT CASH RECEIPTS..................12
             TIME ANALYSIS........................13
             CLIENT HISTORY.......................13
             STATEMENTS OF ACCOUNT................13
           APPENDIX A: DATABASE STRUCTURES.....14-16

INTRODUCTION

As a consultant I found that the task of proper time tracking and
periodic client billing was a major burden requiring several
hours each week.  The probability of losing billable hours due to
loss of scratch notes and poor memory was great.  Sporadic bill-
ing led to poor cash management and reflected badly on me.  After
experimenting with several systems, I have finally created what I
believe is simple and at the same time sophisticated.  Your ideas
may be very different and unique and I will be interested in
knowing what these may be.  I may be able to incorporate them
into this product in the future so feel free to submit them.

This product is designed to do several things to make your valu-
able time work for you.  It makes the job of noting what you do
and how long it takes to do it simple.  It keeps track of all of
your clients.  It bills your clients.  And it records the receipt
of money from your billings.  Since this system keeps track of
your Accounts Receivable, or income, you need only worry about
keeping track of your expenses.  Additionally, the reports in
this system let you know where you stand in terms of accounts
receivable, income, and unbilled hours at any time.  One report
will indicate where your time is being spent for any given period
of time.

The remainder of this documentation is organized hierarchically
in the same order as the options appear on the menus of the prog-
ram.  This system can be used without reading the documentation,
but reading it will give you insight into using this system with
maximum efficiency.

SYSTEM REQUIREMENTS

The minimum hardware requirements to operate this program are:

   o 320K Random Access Memory (RAM)
   o a hard disk drive is desirable, but floppy drives are fine
   o an 80 column printer
   o a monochrom or color monitor

I do not recommend running this program on a floppy drive
system.  It operates noticeably slower than on a hard disk drive.
Be sure to make and use a copy of the original diskette for your
actual data.  Make backups often.

You must always start the system running by using the TTMAIN.BAT
file.  If it has been installed on a hard disk drive, you must first
change to the \TIMETRAK sub-directory and then type "TTMAIN" followed
by ENTER.  There is about 60K of space left on the program disk if
you are using a normal 360K floppy disk.  This might be enough space
for many months of data if your business requires few invoices and
work records.  Otherwise, you may want to move all the files with
the .DBF and .NTX extension onto another floppy disk and place that
into the B: drive.  Then you will also need to set the default path
of the system to be "B:".  Another solution, if you have high density
disk drives is to copy all program and data files onto a high density
formatted diskette and run the program using it.

You will need to have a file in your root or top level directory,
or on your boot-up disk, called "CONFIG.SYS" and it must contain
the following two statements:

   FILES = 20
   BUFFERS = 22

If this does not currently exist see your DOS Manual for the in-
structions about creating it.

SYSTEM FILE MAINTENANCE

Option 1 on the Main Menu allows you to modify the important
information about your company.  This screen appears automat-
ically the first time you use this program, but thereafter you
must select this option to make changes.  Most of the infor-
mation on this screen is used only on the printing of invoices
and determination of system attributes.

The one important field to mention at this time is the one which
contains the accounting basis code.  In business there are two
ways of determining when the money you make is deemed taxable by
the I.R.S.  The simple way is called the Cash method and it says
that the income is taxable at the time that you receive the cash
or check for the services.  The alternate Accrual method calls
income taxable at the actual time the money is earned.  Since
this system provides you with an income or earnings statement it
is important to know which method you are using.  The income
statement is calculated differently for each method.  You may
change your accounting method at any time with no affect on this
program.

IMPORTANT: REINDEX DATABASES
A final prompt on this screen "Do you want to reindex databases"
is extremely valuable if properly used.  This option allows you
to re-organize your datafiles when you have a power outtage or
accidentally turn the computer off while it is in this program.
Normally when this happens the index files are corrupted. This is
quickly noticed when information is not organized properly or some
records are missing.  When this occurs you will want to indicate
"T" to this prompt.  Once you have accepted the screen changes,
the "reindexing..." message will appear.  The reindexing will take
a few minutes, the message will dissappear and you are returned to
the Main Menu.

You can also eliminate old unwanted information from the databases
on this screen.  The final prompt asks whether you want to do this.
If you indicate 'Y,' you will be prompted for the oldest date of
records to be kept.  The program then eliminates all paid invoices
prior to this date.  It deletes all related work records and notes.
It also deletes all cash receipt records prior to this date.

CLIENT FILE MAINTENANCE

The Client Maintenance screen is accessed via option 2 on the
Main Menu.  This screen will be used to add new clients, modify
the information on a client record and delete unneccessary
records from the database.  To perform any of these tasks the
appropriate letter must be pressed as they appear on the bottom
boundary of the window.

A note about assigning codes to your clients: I have seen systems
use some very strange number and character sequences to create
codes for customers and clients.  Since this system uses the
client code as the main key for sorting and locating records it
is recommended that this code, or at least the first couple of
characters, match the spelling of the client name.  Therefore,
when you need to identify an existing client code, you will have
a sense of where they may generally be located within the scheme
of the database design.

Since any work you do will require its association to a client
you will need to assign new clients codes as you add them.  The
fields to be completed are fairly straight forward.  Input the
client full name, any specific personal contact and the client
address.  Complete the first address line first and then use the
second line if needed.  The rate you indicate for the client will
be the default amount for your time tracking screens and can be
changed on those screens directly.  Finally, any general misc-
ellaneous notes can be noted.

If you need to modify a client record, you must know their unique
client code.  Once you have typed it on the screen, their infor-
mation will be displayed and available for editing.

The seek option on this screen is used to locate the needed
client code or to verify that indeed a certain client does not
exist in the database.  When you select Seek, a boxed window will
appear and you are prompted for the key field.  At this time you
can press RETURN and the information will display in the window
beginning with the first record in the database, but usually you
will want to find a record somewhere deep within the file.  This
field allows you to enter the first or several characters of the
code and this will cause the listing to begin at that point in
the database, provided at least one record exists with that char-
acter.

The category prompt has been added to enable you to be able to
print labels for your clients in logical groups, instead of one-
by-one or the entire database.  See Reports section under Client
Labels for further information.


RECORD TELEPHONE ACTIVITY

The recording of time spent doing work via the telephone begins
by selecting option 3 from the Main Menu.  In any consulting
business the telephone is an important instrument allowing you to
work without leaving your home or office.  Whether you bill for
this time or not it is important to know how much of your time is
being spent on the phone and with whom you are talking to.

The options available are listed on the bar at the bottom of the
screen.  Whether adding, editing or deleting a telephone activity
record, the first thing the computer will want to know is, what
the client code is.  You should have this in hand when beginning
on this screen.  When adding a new record, once the client code
has been accepted and the client name appears, you will be
prompted for the date of the activity, who you spoke to, the time
you spent, the hourly rate of charge and whether or not the time
is billable.  Indicating that the time is not billable lets the
system know that there is no expected income.  This time will
show up on time analysis charts and detail reports to let you
know how much time you are giving away.  It even shows up on the
clients invoice with the 'N/C' notation in the extended field to
let the client know that he is getting something for nothing.
Lastly, you can input 5 lines of text describing what occurred
during the time indicated.  These lines DO appear on the client
billing/invoice.

These records can be altered or deleted anytime up until you
actually do the billing for them.  Once billed you will be able
to view the records on the screen in their entirety but will be
beeped and a message will appear at the bottom indicating the
invoice number on which it exists and that it can't be changed.
When you decide to modify a telephone work record, you must know
the exact date that is to be changed.  After the client code is
accepted, you will be prompted for the work date.  If you enter a
date for which there is no record you will hear a beep and a mes-
sage will appear at the screen bottom.  Only when you enter the
valid date will the additional information appear to be changed.

Since you may not know the client or date of the work record to
be changed or deleted, a seek option exists on the initial
screen.  When you select this option, a window will appear on the
right of the screen with the prompt for the client code.
Pressing RETURN will display all telephone activity records in
the system, including the date of the work.  Entering the first
character(s) of the client code will place you at the general
vicinity of the client you are looking for.

A major drawback to this system is that you cannot enter more
than one work record per client per day.  You may find that you
are doing several things during the day for a single client.  All
you can do is to combine the time and remarks onto the single
record for the day.  For clients with which you have several pro-
jects going at one time you may find it necessary and even accom-
odating to input the same client with several codes, one for each
project, and apply the time as appropriately divided.  This way
you can also segregate the time spent on the separate projects.

RECORD HOURLY WORK ACTIVITY

Option 4 on the Main Menu allows you to record the time you spend
on work for a client, other than by use of the telephone.  Essen-
tially, the telephone record and work record are identical, and
are even records of the same database.  But the time record has
no field for who you communicated with.  The way it works is the
same as with the Telephone Activity option otherwise and you are
referred to that section for complete description of features and
limitations.

RECORD REIMBURSABLE EXPENSES

Option 5 allows you to bill your clients for expenses.  You may
find that you need to travel or purchase items for your clients.
You will need to invoice them for these items.  Since option 4 is
specifically for hourly income you must enter these kinds of invoice
items via this option.  Once you select this screen, you will get
the same options as on the other work activity screen.  The prompts
on the screen are slightly different.  To add an expense item, you
will first need to input a valid client code.  Next simply enter
the date that the expense was incurred, the amount and notes desc-
ribing the invoice item.  When using the Seek option, only those
expense records will be displayed.

BILLING

The application of time clocked to an invoice, also called
billing is accomplished through option 6 from the Main Menu.  It
is important to note immediately that the invoices are not
actually printed when this option is taken, but that you control
the application of open work records to new invoice numbers for
later printing.  You do receive a report with this option though,
called the Billing Detail Report, which lets you know which
records are applied to what invoice numbers.

Once you select this option you will see that you can bill the
work for a single client or for all clients with outstanding
work.  If you select the single client billing, you will be
prompted for a valid client code.  In either case, you are promp-
ted for the cutoff date of the billing.  This date assumes that
you will want to bill for all outstanding work and so it puts the
current date in the field, but you may want to purposely bill for
hours up to some specific period and this is possible.  Once
these are completed you are given one chance to quit this option
without doing any billing.  If you proceed, the computer will
prompt you to have you printer activated and it will begin
searching for uninvoiced records fitting the previously defined
requirements.  Each record applied to an invoice will be printed
to include the client code, the new invoice number, the date of
the work, the type of work (T = telephone, W = regular), if it is
billable or not, the amount of time, the rate of earnings and the
extended amount due for that activity.  All records will print
for each client and be totalled.  Finally, the total for the
billing period will be given.  This report should be saved in a
file for later querying.

CASH RECEIPTS

Now that you have outstanding invoices to your clients, the final
step is to be able to receive the money from them and eliminate
their indebtedness to you.  This can be accomplished by using
option 7 from the Main Menu, Cash Receipts.

You will apply payments to invoices by using existing invoice
numbers to bring the detail information on the screen and
recording the amount of money received and possibly a discount
amount taken by the client.  An invoice will continue to appear
on the AR aging report until the balance has been reduced to
zero.  You may apply partial payments to an invoice.  Again, the
Seek option is provided to help you locate an invoice that you
may want to pay.  When you go to seek an invoice you will be
prompted for the invoice number.  Pressing RETURN will start the
search at the beginning of the file.  Once an invoice balance has
been reduced to zero you will not be allowed to modify any of the
payment information.



VOID AN UNPAID INVOICE

This option allows you to void any invoice which has had not had
any payments applied to it.  When you select this option, you are
prompted for the invoice number.  Pressing return with the invoice
being '0' returns you to the Main Menu.  After entering a valid
invoice number some of the details of the invoice are displayed on
the screen for confirmation that it is the right one to void.  If
it has had some payments applied, a message will appear informing
you of this fact.  Finally, you are asked if you really want to
void this invoice.  If you respond 'T', all work records which were
used to creat this invoice are placed back into an open status and
the invoice and accounts receivable records are removed from the
database files.



REPORTS

The real power of any computer system lies not only in the avail-
ability of easy data manipulation, but in the informational
packaging of the data within.  This system comes with the essen-
tial reports indicating how much money you're earning, how much
unbilled work exists, how much is due from clients and when and
where is your time being spent.  Of course, hundreds of others
are possible but this core are the bulk of any business system.
And since the data you are gathering is contained within the
popular dBASE III + structures you may gain access at any time
with R&R report writer or dBASE itself.  The reports, briefly
described, follow.


PRINT INVOICES

Once you have applied billings through option 6 as described
above, you will want to print the actual invoices for distribut-
ion to your clients.  This option allows you to print first time,
all outstanding or specific individual invoices.  No special
invoice form is required, just blank paper.

At the time that you create invoices by using option 6, an
internal "flag"  on the invoice record is set indicating that the
invoice has not yet been printed.  When you select the print all
invoices option any invoices which have not previously been
printed will be printed and the "flag" will be changed to
indicate that the invoice has been printed.  From then on the
only way to print those invoices is by selecting the option to
print individual invoices.

With the second option, print an individual invoice, you will
indicate to the computer which invoice number to print.  If the
invoice is unpaid it will print as it originally did.  This may
be useful for destroyed invoices due to printer problems or for
sending late notices to your clients.

Finally, option 3 allows you to print a copy of all outstanding
invoices in the system.  It indicates at the bottom of the it
any amount previously applied to the invoice balance.

With all options you may create a 1 line note, or comment, which
will be printed on all invoices.


PRINT A/R AGING

This report will print a listing of all unpaid invoices grouped
by client.  It categorizes the invoices by number of days out-
standing so that you can easily identify past due invoices.  Any
previous amounts received or credits given are listed as well.
The report sub-totals by client and a grand total of receivables
is printed.



REPORTS (cont)

PRINT INCOME STATEMENT

When you select option 3 for the Income Statement, you will be
prompted for the desired period beginning and ending dates.
Depending upon your account method (See System File Maintenance
for methods descriptions) the amounts of your earnings, grouped
by client, will be listed.  If you are on the accrual basis, the
date of the invoice will be listed, but if you are on the cash
basis, the date paid will be listed.  Sub-totals are provided by
client and a report grand total is given.


PRINT CLIENT LABELS

Selecting this option on the Report Menu places you into another
sub-menu.  You are allowed to print labels for any of four groups
of clients.  Option 1 automatically prints a label for every client
in the database.  Option 2 allows you to print a single label for
any valid client.  This option continues to prompt you for clients
until you press return to quit.  Option 3 will print a label for
those clients who have recently had an invoice created for them.
And, option 4 will print a label for each client in a particular
category as you previously defined in the Client File Maintenance
Option on the Main Menu.  After selecting one of these four options,
you are prompted for the number of lines which your labels consist
of.  The default and minimum number of lines is 6.  Normal labels
consist of 5 lines of information followed by a blank line to sep-
arate the labels.  But if you have special labels, you can specify
exactly how many lines they consist of.  Note that the first line is
where the client name prints so you will need to line the labels up
before hand to print where you want them to.  You will then be asked
if you want to print an alignment label.  Indicating 'T' prints a
label with your own name and address information on it.  This is
handy since you can use these labels as the return address on your
envelopes.


UNINVOICED ACITIVITY

In order to determine which clients are needing to be invoiced
this report is necessary.  It prints out all work records which
have not yet been invoiced.  It orders them by client with a sub-
total.  Finally, it gives a total of all uninvoiced income.


PRINT CASH RECEIPTS

This report prompts the user for a specific cash date.  It then
prints information about any cash receipts for that date, incl-
uding client, invoice number, discount amount and cash amount.  A
total for the date is printed at end.

REPORTS (cont)

TIME ANALYSIS

This report will be handy in getting control of your time
management.  It is designed to tell you how your time is spent
during the days for which you have recorded activity.  It allows
you to specify the period to be analyzed by entering the begin-
ning and the ending dates.  Finally, it summarizes the time spent
in each activity and average hourly earnings.


CLIENT HISTORY

This report print a chronological listing of all work done to
date for any particular client.  You may want to periodically
give your clients a recap of the work performed.  It prints the
date of work performance, the number of hours involved and the
description as it originally appeared on the invoice.


STATEMENTS OF ACCOUNT

A new report as of version 2.10, this allows you to print
statements to all clients or to clients who have open invoices.
These statements print the basic invoice information in column
format without the textual description of the work performed.
They are great for reminding of past due accounts.

Appendix A: Database Structures & Indexes


Database:   TTSYS

This database file contains the relevant information about your
own company.  This information will be used as return address on
billing and other documents.  Each time a work record is created,
this file is accessed and the TRANSID is taken to link the work
record with the notes record(s).   The TRANSID is then increment-
ed.

Field Name  Type       Width    Dec  Field Description
COMPANY     Character     35         Your Company name
ADDR1       Character     35         Your address line 1
ADDR2       Character     35         Your address line 2
CITY        Character     20         Your city
STATE       Character      2         Your state code
ZIP         Character     10         Your zip code w/extension
PHONE       Character     13         Your phone number
BASIS       Character      1         Your accounting method
TRANSID     Character      6         Internal use



Database    TTCLNT
Index file: TTCLNT1      Key: CLIENT

This database contains pertinent information about your clients.
When a client is created you must assign a 1 to 6 character code
which will be used to identify this client.  I recommend that the
codes be created with the first few characters matching the first
few characters of your client full name.  This makes it easier to
relocate them quickly.

Field Name  Type       Width    Dec  Field Description
CLIENT      Character      6         6 character client code
NAME        Character     35         Full client name
CONTACT     Character     35         Contact name within firm
ADDR1       Character     35         Client address line 1
ADDR2       Character     35         Client address line 2
CITY        Character     20         Client city
STATE       Character      2         Client state code
ZIP         Character     10         Client zip code
PHONE       Character     13         Client phone number
RATE        Numeric        6      2  Rate charged to client
TERMS       Character     13         Normal payment terms
NOTES       Character     70         Client notes
CATEGORY    Character      3         User specified category code
PRINTIT     Logical        1         Is 'T' if recently invoiced



Database:   TTWORK
Index file: TTWORK1     Key: CLIENT

The work records are created in this database.  Each time you log
time performed on the telephone or in whatever your regular job
performance is, a record will be created here.  It identifies who
you did this work for, how much time you spent doing it and what
you will charge for the time.  You may indicate any time as non-
billable, in which case it will appear on the invoice, but will
have the N/C notation in the amount field.

Field Name  Type       Width    Dec  Field Description
CLIENT      Character      6         Client code
TRANS_ID    Character      6         Link to notes database
DATE        Date           8         Work performance date
TYPE        Character      1         T=tele, W=hourly, R=expense
TALK_TO     Character     35         Who spoke to if type = T
TIME        Numeric        6      2  Time expended
RATE        Numeric        6      2  Rate charged this work
BILLABLE    Logical        1         Is this work/time billable
INVOICE     Character      6         Invoice this appears on
DATE_PAID   Date           8         Date client paid this
PRINTED     Logical        1         Has invoice been printed
EXPENSE     Numeric        9      2  Reimbursable expenses



Database:    TTNOTES
Index file:  TTNOTES1     Key: trans_id

The notes database will contain 1 to 6 records for each work
record created.  Each record consists of 50 free form characters
to describe the work performed on the record.

Field Name  Type       Width    Dec  Field Description
TRANS_ID    Character      6         Link to work record
NOTE        Character     50         Notes about work performed



Database:    TTCASH
Index file:  TTCASH1      Key: CLIENT
             TTCASH2      Key: DATE

The Cash file holds a record for each transaction which takes
place through the cash receipts entry screen.  It simply records
the cash and or discount amount, date, invoice number and client.
This is later used for a cash receipts report and is used to
determine earnings for anyone using the cash basis.

Field Name  Type       Width    Dec  Field Description
CLIENT      Character      6         Client code
INVOICE     Character      6         Invoice number being paid
DATE        Date           8         Date of cash receipt
AMT_PAID    Numeric        9      2  Amount of cash received
AMT_DISC    Numeric        9      2  Amount of discount taken



Database:    TTAR
Index file:  TTAR1     Key: INVOICE
             TTAR2     Key: CLIENT + INVOICE

This database is the accounts receivable file.  As the billings
are performed, a record is created for each client with outstand-
ing work with the amount of the bill and the new invoice number.
Through the Cash Receipts module these invoices are paid.  They
are not considered paid in full until the INV_BAL (invoice
balance field) is zero.  Until then they remain on the AR report.

Field Name  Type       Width    Dec  Field Description
INVOICE     Character      6         The invoice number
CLIENT      Character      6         Client code
INV_DATE    Date           8         Invoice date
INV_AMT     Numeric        9      2  Total invoiced amount
INV_BAL     Numeric        9      2  Current invoice balance
DISC_AMT    Numeric        9      2  Amount discounted
DATE_PAID   Date           8         Last date of payment
COMMENT     Character     35         Miscellaneous comments
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0825

     Volume in drive A is #0825 S2.4
     Directory of A:\

    GO       BAT       192   8-11-87   9:55a
    INSTALL  BAT       276   8-12-89   6:49p
    TTMAIN   BAT       132   6-25-89   6:37p
    HELPFILE DBF      1378   4-08-90  12:33p
    TTAR     DBF       290   8-12-89   3:26p
    TTCASH   DBF       194   8-12-89   3:26p
    TIMETRAK EXE    242816   3-15-90   8:19a
    TTNOTES  DBF        98   8-12-89   3:26p
    TTSYS    DBF       386   9-21-89   8:32a
    HELPFILE DBT     25907   4-08-90  12:33p
    TTAR1    NTX      2048   8-12-89   3:26p
    TTAR2    NTX      2048   8-12-89   3:26p
    TTCASH1  NTX      2048   8-12-89   3:26p
    TTCASH2  NTX      2048   8-12-89   3:26p
    TTCLNT1  NTX      2048   8-12-89   3:26p
    TTNOTES1 NTX      2048   8-12-89   3:26p
    TTWORK1  NTX      2048   8-12-89   3:26p
    TTWORK2  NTX      2048   8-12-89   3:26p
    TTCLNT   TMP       482   8-12-89   3:26p
    TTWORK   TMP       418   8-12-89   3:26p
    GO       TXT      1287   8-12-89   6:33p
    TIMETRAK TXT     29534   4-08-90   1:23p
    FILE0825 TXT      1013   4-21-90   1:29a
           23 file(s)     320787 bytes
                           31744 bytes free

![PC-SIG Library Disk #0825]({{ site.software.pcsigdisks.server }}/pcx86/sw/misc/pcsig/0001-0999/DISK0825/DISK0825.jpg)
