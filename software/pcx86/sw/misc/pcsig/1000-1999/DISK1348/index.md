---
layout: page
title: "PC-SIG Diskette Library (Disk #1348)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1348/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1348"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "THE INVOICER"

    Designed for companies that sell products or services to a number of
    accounts, INVOICER quickly cranks out custom invoices, statements and
    overdue notices. It also tracks billings and sales activities,
    maintains a journal of your customers and a list of your company's stock
    or service items, and produces a variety of reports, including aging.
    Invoices are automatically posted to accounts receivable (included with
    this program) using either the open-item or balance-forward system, and
    taxes and finance charges are calculated for you. An installation
    program makes it easy to put INVOICER on your hard drive.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1348.TXT

{% raw %}
```
Disk No: 1348
Program Title: THE INVOICER
PC-SIG version: 1

Designed for companies that sell products to a number of accounts, THE
INVOICER quickly cranks out custom invoices, statements and overdue
notices.  It also tracks billings and sales activities, maintains a
journal of your customers and a list of your company's stock items, and
produces a variety of reports, including aging.

Invoices are automatically posted to Accounts Receivable (included with
this program) using either the open-item or balance-forward system, and
taxes and finance charges are calculated for you.  An installation
program makes it easy to put on your hard drive.

Usage:  Invoicing/Accounts Receivable.

Special Requirements:  Hard disk recommended.

How to Start:  Type GO (press enter).

Suggested Registration:  $59.50

File Descriptions:

AUTOEXEC BAT  Starts program on two disk system.
BRUN10   EXE  Compiler.
HARDDISK BAT  Installs on hard disk.
HARDDISK DAT  Data file.
IN       BAT  Starts program on hard disk.
INST     DAT  Data file.
INVOICER EXE  Main program file.
MANUAL   DOC  User guide.
MENU     EXE  Program file.
MODIFY   EXE  Program file.
PRINTDOC BAT  Prints user manual.
PRINTREG BAT  Prints registration document.
REGISTER DOC  Registration form.
UTILITY  EXE  Program file.
VIEWDOC  BAT  Lets you view user manual.

PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1989 PC-SIG Inc.

```
{% endraw %}

## MANUAL.DOC

{% raw %}
```
The Invoicer with Accounts Receivable is a complete invoicing and statement
generating program for your MS/PC DOS compatible computer.  Most of the
program is self explanatory.  To start the program from your DOS prompt,
enter MENU and then press <RETURN>.

This will bring up the MiccaSoft logo and the options of running or installing
the program.  The first time you use the program, you will need to press I to
install your company name and create the initial data files.  After you have
installed the program and created your initial data files, you will return
to the initial MiccaSoft logo screen.  To run the program, press R.

                           INSTALLING YOUR PROGRAM

Installing your program will involve telling the program what type of disk
drive setup your computer has, selecting screen colors, entering your company
name, address, terms, sales tax rate, etc.  You will also need to select what
type of accounts receivable system you want.  The Invoicer gives you the 
option of either Open Item or Balance Forward system.  You can install your
disk or change this information as many times as you want.

You can install two smart keys with any information you want.  These can be
used to contain information you will need to type over and over.  For example,
if you are entering a number of accounts in Austin, Texas, you may want to set
one of the smart keys to 'Austin, Texas'.  Then when you want to enter that
information, simply press the appropriate smart key.  You can also enter two
stock numbers to keep separate subtotals for while invoicing.  These could be
'Labor', 'UPS', or anything you want.

After you have entered this information, you will be asked if you want to
create a data disk.  If this is the first time to use the program you MUST
initially create some blank data files.  If you are just changing the install
values, then DO NOT create another data disk since this process will erase
any old files on this disk (in this subdirectory for harddisks).  You will 
now be returned to the MiccaSoft logo screen.


                          HARDDISK INSTALLATION

If you have a harddisk and want to install the program on your harddisk, from
your DOS prompt, enter A:HARDDISK and the press <RETURN>.  This routine will
create a subdirectory called \INVOICER on your harddisk and copy all of the
programs into that subdirectory.  Then it will create a batch file called
IN.BAT in your main (root) directory which will be used to start the program.
To start the program, from your DOS prompt, enter IN and then press <RETURN>.



                            USING THE PROGRAM

When you first start using the program, you will want to use Main Menu option
3 to Add/Change your accounts.  This process involves assigning an account
number (letters, numbers or combination) to your accounts and entering their 
name, address, etc. into the data base.  Remember, an account DOES NOT have to
be active in order to generate an invoice for it, but it MUST be active in 
order to print a statement, past due notice, etc.

Next, you will want to use Main Menu option 5 to Add/Change your stock items. 
Stock items can be either physical items or services.  This process involves 
assigning a stock number (letters, numbers or combination) to your services/ 
items and entering their description and price/rate into the data base.  
Remember, a stock number DOES NOT have to be active in order to invoice it.  
Entering stock items is only necessary if you will be using the invoicing 
function of the program.  


                               INVOICING

You DO NOT have to generate an invoice in order to post a transaction to an 
account.  An account DOES NOT have to be active in order to generate an 
invoice for it (ie. cash or one time customers).  To generate an invoice,
select option 1 from the Main Menu.  The first part of the invoice you
prepare will be the invoice header.  This includes the bill to, ship to,
terms, etc.  Then, you will complete the body of the invoice. The body in-
cludes the items and services you are billing out.  After you finish the
invoice, you will be asked for the invoice description for posting the
invoice to the account.  The invoice description is a description of the
entire invoice and will be printed on the customers statement.  It can be
CHARGE, WORK ORDER #, etc.  It is NOT necessary to separately post this 
transaction to the account, as it is done automatically.


                           ACCOUNTS RECEIVABLE

The accounts receivable section of the program allows you to post entries
to your accounts (charges, payments, finance charges, etc.), print state-
ments, print past due notices, view the accounts, get aging reports, etc.
Remember, it is NOT necessary to use the invoicing part of the program in
order to post charges to your accounts.  You can use the posting option of
the Accounts Receivable Menu to post charges directly into the account.
When posting payments, it is NOT necessary to enter an amount for the sales
tax and be sure to enter a negative number for the total.  If you realize you
have made a mistake on posting a transaction after you have saved it to disk,
you can modify the transaction using the MODIFY program included on the disk.

The normal sequence of monthly events would include printing invoices, posting
payments (and charges if you are not using the invoicing feature), posting
finance charges (if applicable), printing statements, reports, etc., making 
a backup of your data disk and then running the End of Month routine.  Be
sure you have printed your statements, reports, etc. before you run the End
of Month routine.

If you run a Balance Forward accounts receivable system, you WILL NOT get
account aging or be able to run the Post Finance Charges routine.


                         MODIFYING TRANSACTIONS

If you realize you have made a mistake on one of your transactions after you
have saved it to disk, you can modify and/or delete the transaction using the
MODIFY program included on this disk.  To use the Modify program, you must
exit The Invoicer program first.  From your DOS prompt, enter MODIFY and then
press <RETURN>.  If you are using the program on a harddisk, be sure to change
into the INVOICER subdirectory first.  To change into that subdirectory, from
your DOS prompt, enter CD \INVOICER and then press <RETURN>.  The Modify 
program is self explanatory.


                            PREPRINTED FORMS

The Invoicer gives you the option of printing invoices/statements on either 
blank paper or preprinted forms.  If you want to use the forms option, you
need to get compatible forms.  We guarantee compatibility with forms produced
by Colwell Systems.  They can be reached at 800-248-7000  (800-233-7777 in 
Illinois).  To get compatible forms be sure to use QUICK REFERENCE CODE #991.
This code # will let the Colwell operator know which forms are supported by
The Invoicer with Accounts Receivable.  We recommend Colwell based on their
low cost and superior service.





                         SOFTWARE REGISTRATION

This software is shareware, user supported, software. If you find the program 
useful and plan to use it on a regular basis, as shareware software, we expect
you to register the program by sending $59.50 (plus $7.50 S&H) to the address
below.  By registering the program, you will get:

1.  The latest commercial version (a $125 value) of the program (see below
    for details on the latest new features).
2.  A professionally written and printed manual.
3.  FREE phone support.
4.  Semi-annual newsletter detailing new products, how to use sections, etc.
5.  Discounts on future updates (we update the program every 12 to 18 months)
    and new modules.




                            MiccaSoft, Inc.
                            406 Windsor Lane
                       New Braunfels, Texas 78132
                             (512) 629-4341




The latest commercial version (released 11/87) includes the following new
features and enhancements:


Account/stock help windows for looking up correct ID#, and you have the 
	option to sort by number or name/description.
Print reports for all or a range.
Escape key lets you cancel printing.
Move back/forward a field for easier editing.
Conversion utility to convert your data files.
Multiple page invoices.
Fill out the entire invoice before it prints (what you see is what you get).
Add accounts from invoicing screen.
Professional mode billing eliminates references to shipping.
Save invoice shipping labels to disk for later printing.
Remembers current invoice number from day to day.
Modify transactions from within the program (in Utility Menu).  Plus you
	can use PgUp/PgDn, Home/End, etc. to scroll through transactions 
	to find the one you want to modify.
Monthly account sales kept all year.
Detail aging report now available.
Substantially faster (1/4 the time) routines for statement printing, aging,
	end of month routines, etc.

PLUS many, many more . . . . . . .




    New module available: The Invocier with Sales Tracking/Inventory.



           Next commercial release scheduled for Spring 1988.








```
{% endraw %}

## REGISTER.DOC

{% raw %}
```
                      SHAREWARE REGISTRATION FORM


First Name  ________________  Last Name  _______________________

Company Name  __________________________________________________

Address (UPS) __________________________________________________

City  ________________________  State  _____   Zip  ____________

Phone (include area code)  _____________________________________

Computer used  ________________________   Memory  ______________

Where you hear about the program ? _____________________________

****************************************************************

  Check __    Visa __    MasterCard __    American Express __

Credit card # _____________________________ Expir. Date ________

Signature ______________________________________________________
                     (credit card orders only)

****************************************************************

                        
Please register my shareware version of The Invoicer
with Accounts Receivable and send me the latest 
commercial version of the program and its manual.         $59.50

                 Shipping & handling                        7.50
						      ----------
                 Total                                    $67.00 	



Mail to:  MiccaSoft, Inc.
          406 Windsor Lane
          New Braunfels, Texas 78132
	 

or Call : (512) 629-4341



         Thank you for supporting the shareware concept!

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1348

     Volume in drive A has no label
     Directory of A:\

    AUTOEXEC BAT       128   9-16-88   1:00p
    BRUN10   EXE     59117   1-24-86  12:22p
    FILE1348 TXT      1472   3-13-89  10:36a
    GO       BAT        38  10-19-87   3:56p
    GO       TXT      1002   2-17-89   3:34p
    HARDDISK BAT      1024   9-16-88   1:00p
    HARDDISK DAT       128   9-16-88   1:00p
    IN       BAT       128   9-16-88   1:00p
    INST     DAT        73   9-16-88   1:00p
    INVOICER EXE    141009   9-16-88   1:00p
    MANUAL   BAT       147   1-19-89   9:21a
    MANUAL   DOC      9472   9-16-88   1:00p
    MENU     EXE     25729   9-16-88   1:00p
    MODIFY   EXE     12721   9-16-88   1:00p
    PRINTDOC BAT       512   9-16-88   1:00p
    PRINTREG BAT       512   9-16-88   1:00p
    REGISTER DOC      1536   9-16-88   1:00p
    UTILITY  EXE     16193   9-16-88   1:00p
    VIEWDOC  BAT       512   9-16-88   1:00p
           19 file(s)     271453 bytes
                           39936 bytes free
