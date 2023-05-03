---
layout: page
title: "PC-SIG Diskette Library (Disk #1882)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1882/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1882"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "AZ REAL ESTATE FINANCE"

    Are you a real estate professional, broker, attorney, or investor who
    would like to do his or her own closings more quickly?  This program
    will allow you to generate most of the financial information needed for
    a standard real estate or loan closing as well as allow you to check the
    work of others.
    
    If you are a consumer who would like to better understand and check the
    work on those "TRUTH IN LENDING" documents you sign when you borrow
    money, this program will allow you to check your lender's work to the
    penny.
    
    It calculates annuity payments or periodic amortization of loans,
    interest rates on a given monthly amortization for a flat payout, or for
    a balloon payment.  It also displays and prints amortization schedules
    for payments to be made.
    
    This program has been "ported" from commercial software written by the
    author for attorneys, real estate brokers, title insurance companies,
    and other professionals dealing in real estate and real estate finance.
    This experience in the "real world" means that special attention is
    always given to accuracy and presentation.  The results are generally
    acceptable to law, real estate, and finance professionals.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## AZ0HELP.TXT

{% raw %}
```
AZ0 - The Main Menu.

Select the program you desire and enter the number of your choice when
it is requested.  The selected program will then be loaded from the
default disc drive or directory, if it is not already loaded.

ENTER DATA USING THE TAB OR CURSOR KEYS AND STRIKE ENTER TO RUN THE PROGRAM.

For information about each program, select the HELP function.

If the selected program fails to load, check your selection or return
to the operating system (DOS) and check to make certain the AZ programs
are on the default disc or directory (i.e. execute a 'DIR' command).

The AZ programs must be on the default disc or in the default
directory.  Check your operating system manual for more information.

```
{% endraw %}

## AZ2HELP.TXT

{% raw %}
```
AZ2 - Calculate Monthly Mortgage Loan Payment

Calculate the monthly payment necessary to amortize a loan (ordinary
annuity) when the payments are made at the end of each month.  AZ2
accepts input in the forms normally associated with a real estate loan.

Input Values Are:

    Loan or Mortgage Amount - The loan amount in dollars and cents.
    Do not use commas or dollar signs.  Decimals are permitted.

    Desired Annual Interest Rate - The interest rate, in percent,
    for the loan.

    Total Number of Payments - The number of monthly payments to
    be made on the loan.  Fractions are not allowed.

    Number of Payments per Year - A monthly payment would be 12
    payments per year.  Semi-annual would be 2.  etc.

This program solves the ordinary annuity equation for the payment and
gives the answer in dollars and cents.  If you desire hard copy, use
the print screen function on your computer.

```
{% endraw %}

## AZ5HELP.TXT

{% raw %}
```
AZ5 - Calculate True Interest Rate for a Mortgage

Calculate the true interest rate when given the amortization of a loan
or regular annuity.  Useful for 'Truth in Lending' calculations.  AZ5
accepts input in the forms normally associated with a real estate loan.
This program allows a final or 'BALLOON' payment of a different amount
from the regular payment to be entered.  If there is no ballon payment,
enter the regular payment value for the balloon payment value.

Input values are:

    Loan Amount - The loan amount in dollars and cents.  Do not use
    commas or dollar signs.  Decimals are permitted.

    Lender Discount Points - The number of discount percentage points
    charged by the lender.

    Other Truth in Lending Costs - Any other amount in dollars and cents
    charged or deducted by the lender you want to include.

    Number of Payments Including Balloon - Enter the number of payments
    including the balloon payment; i.e. a 30 year loan with 12 payments
    a year is a 360 payment loan.

    Payments per Year - A loan with monthly payments has 12 payments per
    year.  ...quarterly has 4 payments per year.  etc.

    Regular Payment Amount - Payment amount in dollars and cents.

    Balloon Payment Amount - Balloon payment (one time payment at the
    end of a loan)  amount in dollars and cents.

This program solves the present value equation for the true interest
rate and gives the answer as a percentage.  If you desire hard copy,
use the print screen function on your computer.

```
{% endraw %}

## AZ7HELP.TXT

{% raw %}
```
AZ7 - Amortization Schedules

Calculate and display or print an amortization table for level payments
with or without a balloon.  Show totals, balances, etc.  Give special
attention to preventing round-off errors.

Input values are:

    Title of Schedule - Text Title of the Schedule to be printed at the
    top of each page.

    Loan Amount - The loan amount in dollars and cents.  Do not use
    commas or dollar signs.  Decimals are permitted.

    Annual Interest Rate - The interest rate, in percent, for the loan.

    Payment Amount - The payment in dollars and cents.

    Date of Loan - The month number, day number in the month, and year
    separated by "-"s.  For example:  September 13, 1987 = 09-13-1987
    and August 1, 1988 = 08-01-1988.  This is the standard MS-DOS format.
    The schedule will use this date to calculate the date of future payments.
    It allows for the number of days in a month and leap years and adjusts
    the payment date accordingly.  

    Is this a balloon? - answer Yes or No then provide the date of the
    ballon payment or the number of the last payment.

    At the prompt 'Choose *D*isplay, *L*isting, *M*odify, or *E*xit'

        Enter 'D' for a VDT display of the schedule.
        Enter 'L' to print the amortization schedule on your default
                  printer.
	Enter 'M' to modify an input parameter and rerun the program.
        Enter 'E' to exit this module and return to the main menu.

    At the prompt '*F*orward, *B*ack, *D*ate, *P*ayment, *A*nother,
                   *L*ist, *E*xit?'

        Enter 'F' to move forward one page in the display
        Enter 'B' to move back one page in the display
        Enter 'D' to move the display page to a particular date
        Enter 'P' to move the display page to a particular payment no.
        Enter 'A' to enter new data and calculate a new schedule
        Enter 'L' to print the schedule on your default printer
        Enter 'E' to exit the module and return to the main menu

    With these choices, you can calculate the amortization schedule and
    print it on the default printer.  Or, display the amortization
    schedule, one year at a time.  The display can be started with a
    date, payment number, or ballon and then moved forward or backward
    one year at a time.
```
{% endraw %}

## AZOPEN.TXT

{% raw %}
```
                            AZ Version 2.4

    Professional Software to support REAL ESTATE FINANCE decisions.

                                  by

                        Curtis E. Falany, P.E.
                             P.O. Box 1865
                      Plant City, FL  34289-1865
                           Tel: 813-752-9243

The software on this disc is intended to be what is commonly called
'shareware'.  The author of the programs makes them available for you
to use without charge.  A small registration fee is charged for users
who wish to receive updates, maintenance, etc.  All commercial users
are requested to register.  See the README.DOC file on this disc.

If you desire a copy of the software on this disc, write the author at
the above address or refer to the README.DOC file on this disc.

There is no warranty either expressed or implied for this software.

```
{% endraw %}

## AZRHELP.TXT

{% raw %}
```
AZR - Reset All Values

Since the program passes the appropriate values from subroutine to subroutine,
it has been found handy to have a way to set all the values involved to zero
without exiting and reloading the program.  Not much seems to happen, but
all the values are reset to zero.

```
{% endraw %}

## FILE1882.TXT

{% raw %}
```
Disk No: 1882                                                           
Disk Title: AZ Real Estate Finance                                      
PC-SIG Version: S1.2                                                    
                                                                        
Program Title: AZ Real Estate Finance                                   
Author Version: 2.4                                                     
Author Registration: $15.00                                             
Special Requirements: None.                                             
                                                                        
Need to calculate annuity payments or periodic amortization of          
loans?  How about calculating interest rates on a given monthly         
amortiztion for a flat payout?  Or for a balloon payment?  If so,       
this is the program for you.  It also displays and prints amortization  
schedules so you can tell folks how and when things should be paid.     
                                                                        
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
║              <<<<  Disk #1882  AZ REAL ESTATE FINANCE  >>>>             ║
╠═════════════════════════════════════════════════════════════════════════╣
║                                                                         ║
║ To start using the program, type:  COPY README.DOC PRN  (press Enter)   ║
║                                                                         ║
║ To print order form, type:  COPY ORDRFORM.DOC PRN  (press Enter)        ║
║                                                                         ║
╚═════════════════════════════════════════════════════════════════════════╝
(c) Copyright 1990, PC-SIG Inc.
```
{% endraw %}

## HELHELP.TXT

{% raw %}
```
HELHELP - The Help Menu.

Select the program you desire and enter the number associated with
your choice when it is requested.  The selected program's help 
screen(s) will then be loaded from the default disc drive or directory.

If the selected program fails to load, check your spelling or return to 
the operating system (DOS) and check to make certain the AZ programs 
are on the default disc or directory.

The AZ programs must be on the default disc or in the default 
directory.  Check your operating system manual for more information.

The help screens are clear ASCII text labeled with the program mnemonic 
concatenated with 'HELP.TXT'.  To print out any one or all of the all 
the help screens, use the 'PRINT' command in your DOS system.  For 
example:

     PRINT AZ0HELP.TXT

To 'hardcopy' individual screens, use the 'PRINT SCREEN' function.
```
{% endraw %}

## OFFHELP.TXT

{% raw %}
```
OFF - The routine which turns the 'HELP' screens on or off.

When the 'HELP' screens are on, the help screens for the appropriate 
program will be displayed each time the program is called and before 
the program is executed.

When the 'HELP' screens are off, the help screens are only accessible 
from the help program selected from the main menu (AZ0).
```
{% endraw %}

## ORDRFORM.DOC

{% raw %}
```

                     AZ PROGRAM SERIES ORDER FORM
                        (PC and PC compatibles)       

                          C. E. FALANY, P.E.
                           802 E. Baker St.
                             P.O. Box 1865
                       Plant City, Fl 33564-1865

-----------------------------------------------------------------------

Client Service Information:

Name:          ________________________________________________

Address 1:     ________________________________________________

Address 2:     ________________________________________________

City:          ___________________________, State:  _______

Zip:           _______________, Tel.:  (____) ______-_______

-----------------------------------------------------------------------

I request the following service(s):

____      Send me the programs on a 5 1/4" F.D.  Enclosed is $3.50 to
          cover postage and handling.

____      Send me the programs on a 3 1/2" F.D.  Enclosed is $5.00 to
          cover postage and handling.

____      Register me as a user of your programs.  $15.00 is enclosed.

____      I do not have the AZ series of programs.  Please register
          me and send me the programs on a 5 1/4" F.D.  $18.50 is
          enclosed.

____      I do not have the AZ series of programs.  Please register
          me and send me the programs on a 3 1/2" F.D.  $20.00 is
          enclosed.

____      I don't want to buy anything just now but please put me on your
          mailing list and send me information about your real estate and
          other finance programs.

          Florida residents please add 6% sales tax.


Enclosed is my check or money order for _________________ U.S. dollars.

PLEASE NOTE: we will not be responsible for cash, so please do not send
it!  Also, no credit cards, please!  We will accept your personal check
subject to collection.  Allow 10 - 14 days for delivery.

THANK YOU!

```
{% endraw %}

## README.DOC

{% raw %}
```
README.DOC for the AZ series of REAL ESTATE INVESTMENT AND FINANCE
PROGRAMS version 2.4, release date 6-28-1990.

By:                       C. E. FALANY, P.E.
                             P.O. Box 1865
                       Plant City, FL 34289-1865
                          Tel.:  813-752-9243

Are you a real estate professional, broker, attorney, or investor who
would you like to do his or her own closings more quickly?  The AZ
series of programs will allow you to generate most of the financial
information needed for a standard real estate or loan closing as well
as allow you to check the work of others.

Are you a consumer who would like to better understand and check the
work on those 'TRUTH IN LENDING' documents you sign when you borrow
money?  THe AZ series will allow you to check your lender's work to
the penny.

This program is not a calculator clone.  The values obtained with this
program are rounded to the penny and have been designed for the real
estate professional, broker, attorney, and investor to use.

Why are the AZ Programs Different?

Because the AZ programs have been 'ported' from commercial software
written by the author for Attorneys, Real Estate Brokers, Title
Insurance Companies, and other professionals dealing in real estate
and real estate finance.

Because the author would have purchased the software instead of
porting or writing it if he could have found the functions he needed
for his investment purposes at a reasonable price.  I.e. less than a
few thousand dollars.

Because the AZ programs are not 'financial calculator clones' and
generate useful reports and schedules calculated to the penny.

Because many of the programs, in one form or another, have been in
continuous commercial use for the last fifteen years.  This
experience in the 'real world' means that special attention is
always given to accuracy and presentation.  The results are
generally acceptable to Law, Real Estate, and Finance professionals.

HOW TO INSTALL AND USE:

To utilize these programs on a 1 or 2 floppy disc system:

     1.  FORMAT /S a floppy disc with your DOS on it.
     2.  COPY A:*.* B:*.* the programs provided on the distribution
     disc to the newly formatted disc.
     3.  Put the distribution disc away for safe keeping.
     4.  Place the copy in your `boot' drive and type AUTOEXEC or
     restart the system.

To utilize these programs on a hard disc system:

     1.  MD AZ to make a partition called AZ, or any other name you
         select, on your hard disc C:.
     2.  CD/AZ to select the new partition.
     3.  Insert the distribution disc in your floppy drive A.
     4.  Copy A:*.* C: /V to copy all programs to your hard disk.
     5.  Remove the distribution disc.
     6.  Type AZ or AUTOEXEC to start the AZ series programs.

REVISION HISTORY?

Version 0, the original release, was released as BASIC language
source code.

Version 1.0 was compiled and released as executable modules instead
of basic source modules.  QUICKBASIC 4.0 by MICROSOFT was used as
the compiler.  Previous versions released in source BASIC language
were slow and occasionally inaccurate due to the variation between
BASIC interpreters.  Both of these problems have been solved with
version 1.0.

Version 1.1 improved the help text files associated with the help
screens.

Version 2.0 responded to feedback from users of 1.0 and 1.1 with the
following changes:

     Speed     All modules are compiled into one executable module
               using MICROSOFT CORPORATION's Quickbasic 4 compiler.
               Chaining and BRUN40.EXE are no longer used.

     Help      Various corrections and additions to the help text
               files further improve clarity.

     AZ6->AZ7  The amortization schedule generated by AZ6 is now
               generated by AZ7.  AZ7 allows the user to view the
               schedule before it is printed.

     Misc.     Fewer keystrokes are now required to get from menu
               to function and from screen to screen.

Version 2.1 responded to a bug resulting from some minor differences
between the QuickBasic 4 interpreter and compiler, and to user
feedback requesting fewer keystrokes and better presentation.

     AZ7       A bug was found and fixed where a payment of less
               than ten cents ($.10) could cause a round off error.

     AZ7       A bug was found and fixed that prevented printing
               balloon amortization schedules.

     Speed     Still fewer keystrokes are required.

Version 2.2 corrects some spelling errors, improves the report format
and adds some additional 'HELP' screens.

Version 2.3 modifies the input screens to be more user friendly and
allows the results from one screen to be used in the next
automatically.  A 'clear all data' function resets the internal memory
and redundant functions are combined to produce fewer screens.  No
additional bugs were found or reported so none were fixed.

Real estate professionals, brokers, lawyers, and investors seem to
generate the most interest in the AZ programs.  This revision is
intended to meet the needs they express.

Version 2.4 makes four modifications in the presentation program requested
by 'beta' test sites.

WARRANTY:

The AZ series of programs is written in the BASIC language to solve
a number of common real estate investment and financial problems and
to provide financial closing information.  The executable modules
supplied on this disc were created using MICROSOFT QUICKBASIC 4.0
compiler and MS-DOS.

The programs have been thoroughly tested on International Business
Machines (IBM) and IBM compatible personal computers.  However, ONLY
YOU, THE USER, CAN DETERMINE IF THESE PROGRAMS FIT ANY PARTICULAR
NEED OR APPLICATION YOU MAY HAVE.  NO WARRANTY OR GUARANTEE OF
FITNESS OR APPLICATION, EITHER EXPRESSED OR IMPLIED, IS MADE.

If you are a registered user and have a disc provided by us, on
which there is a media failure, please return it to us within one
hundred eighty (180) days of shipment by us and we will rewrite it
or provide a new disc at no charge.

If you are not a registered user and have a disc provided by us, on
which there is a media failure, please return it to us within thirty
(30) days of shipment by us, and we will rewrite it or provide a new
disc at no charge.  There is no other warranty for media failure.

General Information:

The software on this disc is intended to be what is commonly called
`shareware'.  The author of the programs, C. E. Falany, makes them
available for you to use for evaluation purposes, without charge.  If
you use this software for any other purpose, you must register and pay
a fee.

Since the distribution disc for version 2.0 and later no longer
contains software that is the property of MICROSOFT, please do not
hesitate to copy it.  The author is no longer providing free copies.
If you would like a copy of the programs on this disc from the
author, there is a service charge.  Print ORDRFORM.DOC to create a
blank form for this purpose.

If you would like to be registered as a user of the AZ series of
programs, please use ORDRFORM.DOC, check the appropriate line, and
enclose your check.  Registration will put you on our mailing list
and you will be notified of updates, modifications, additions, etc.

SOFTWARE PROBLEMS

If you discover what you believe to be a problem with the software
on this disc, please let the author know.  Write the author at the
above address and provide as much information about the problem as
you can.  The author will make every effort to investigate and, if
the author finds it necessary, support each report.  If, in the
opinion of the author, you are the first to report a significant
problem with the AZ series of programs, you will be supplied with a
copy of the corrected program when it becomes available.  In return,
the author requests that you try the new software in your
environment and report any negative results.

Future Enhancements

The program function for which the most requests have been received
is a program to calculate the actual yield on loans and notes
receivable.  AZ4 and AZ5 both calculate only the theoretical yield.
The same program might also meet the requirements in some states for
a report to the maker (borrower) of a loan showing the exact
breakdown of the payments on the loan.  The program modules exist
for this function and are available to registered users as free
standing modules AZ8 and AZ9 for 'beta' test purposes only.

AZ8 calculates interest on loans from date paid to date paid in
accordance with the standard language found in most real estate notes.

AZ9 calculates the approximate yield on the purchase or sale of notes or
loans.

```
{% endraw %}

## SUBMIT.TXT

{% raw %}
```
Submittal for AZ Version 2.4

6-28-90

Program Title:  AZ REAL ESTATE FINANCE

Submission Version:  2.4

An UPDATE to PC-SIG disk # 1882

Author:

                Curtis E. Falany, P.E.
                802 E. Baker Street
                P.O. Box 1865
                Plant City, FL  33566
                office telephone  813-752-9243
                home telephone 813-754-3034

Detailed description:

The readme file, together with all of the help files, is a detailed
description of this program.

The program has pertinent screens that allow

        the calculation of an amount to amortize a loan at a given
        annual interest rate and given number of payments per year
        over a set number of payments;
     
        the calculation of an actual amortization schedule for a loan
        accurate to the penny which can be displayed and/or printed;
     
        the calculation of the 'TRUTH IN LENDING' or true interest rate
        for a loan.

The intended users are real estate investors, Attorneys, Realtors, Land
	Title companies.

This update is improved by

        screens are more friendly;

        input and results from one screen are passed to the next;

        redundant screens are combined;

        several presentation bugs are fixed.

Unique features

        only 'TRUTH IN LENDING' program I know of for under $1500;

        programs calculate to the penny;

        not a calculator clone, results are usable in the real world.

Programs limitations

        written to be as undemanding of system configuration and
        resources as possible;

	loans are limited in size to $10,000,000.00;

        amortization schedule generator limited to 600 payments (50 years).

Special requirements

        NONE

How to start

        put floppy disk in drive, select drive, and type AZ or AUTOEXEC.

Fee
        $15.00

Benefits of registration

        180 day media warranty (free rewrite for 180 days under most
        circumstances);

        current release;

        notification of new releases;
     
        bug fixes are free under certain circumstances;

        author will answer questions more cheerfully (just kidding,
        I always answer questions cheerfully).

Programs/disk files

        AZ.EXE - executable programs for AZ

        README.DOC - user directed documentation

        AUTOEXEC.BAT - autostart pointed to AZ.EXE

        ORDRFORM.DOC - order and/or registration form

        SUBMIT.TXT - this document

        *HELP.TXT - help text files
      
        *.TXT - text screens used by program

        *.CFG - configuration file

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1882

     Volume in drive A has no label
     Directory of A:\

    AZ       EXE    105985   6-28-90   3:37p
    AZOPEN   TXT       907   6-28-90   8:30a
    AZ0HELP  TXT       726   6-28-90   8:30a
    AZ2HELP  TXT       939   6-09-90   9:21a
    AZ5HELP  TXT      1561   6-07-90  10:40p
    OFFHELP  TXT       384   3-24-89  12:07p
    HELHELP  TXT       896   3-24-89  12:01p
    AZRHELP  TXT       296   5-31-90  10:49p
    SUBMIT   TXT      2816   6-28-90   5:42p
    README   DOC      8901   6-28-90   8:30a
    ORDRFORM DOC      2002   6-28-90   9:38a
    AUTOEXEC BAT       128   3-24-89  12:04p
    AZ       CFG         5   6-25-90  10:25p
    AZ7HELP  TXT      2432   6-28-90   4:54p
    GO       BAT        38   1-01-80   1:37a
    FILE1882 TXT      1481   8-09-90   3:01p
    GO       TXT       727   1-01-80   1:10a
           17 file(s)     130224 bytes
                           25600 bytes free
