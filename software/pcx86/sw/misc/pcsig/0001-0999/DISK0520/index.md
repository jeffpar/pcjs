---
layout: page
title: "PC-SIG Diskette Library (Disk #520)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0520/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0520"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "BUDGETRAK 2 OF 2 (ALSO 519)"

    BUDGETRAK is an accounting package for anyone who needs to track their
    budget and expenses more closely than is possible with an ordinary
    accounting system.  Encumbrance accounting (the method used here) tracks
    obligations and planned expenses rather than actual expenses.
    
    The system will handle up to budget records.  For simplicity, each
    month's transactions are stored on an individual file that can contain
    1200 transactions.  During the month you can look up account balances at
    any time instantly. You may print a report of the transactions entered
    to that point for the month or for any previous month.  The report is
    sorted and summarized by company, department and grand total.
    
    When the actual expense is known, it is entered and the encumbrance
    amount and budget are updated.  This gives a more accurate picture, for
    budgeting purposes, than waiting to record an actual expense.
    BUDGETRAK handles single and double-entry bookkeeping and has a built-in
    password system.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES519.TXT

{% raw %}
```
---------------------------------------------------------------------------
Disk No  519  BUDGETRAK  Version 1.21   (DISK 1 of 2)                v3
---------------------------------------------------------------------------
BUDGETRAK is an excellent Encumbrance accounting package that would be of
interest to people working in the department of a large company who have a
desire to track their own budget and expenses more closely than possible
using the general information generally contained in a central accounting
system.  Encumbrance accounting tracks obligations and planned expenses
rather than actual expenses.  This is the first of a two disk set.
 
This package differs from a more standard accounting system in that when an
expense is anticipated, the estimated amount or encumbrance is entered.  The
entry is reflected in the remaining budget.  When the actual expense is known,
it is entered and the encumbrance amount and budget are updated.  This gives a
more accurate picture, for budgeting purposes, than waiting to record an
actual expense.
 
The system will handle both single and double entry systems and also produce
a 12 month spreadsheet.  Five balances are maintained: Budget, Variance,
Encumbrance, YTD Variance and Actual.  The coding reflects the program's intelligent design: 2 digit company code, 7 digit sub department and a 6
digit account code.  It can handle up to 999 master records and up to 12000
transactions per month.  The package has a password system and comes with a
set of utility programs and good documentation.  A high capacity floppy drive
or a hard disk is recommended for this package.
 
BUDGDOC       Documentation for BUDG.EXE
BUDPASWD EXE  Password Program
BINT     EXE  Initialization program
BUDG     EXE  Budget set up program
BMST     EXE  Master file set up program
BTRN     EXE  Transaction creation program
READ     ME   Introduction to BUDG.EXE
BRIEFDOC      Short documentation to get you up and running quickly
CONVERT  DOC  Conversion documentation
BUDPASS       Program used by BUDPASWD.EXE
GCTL86DD      Program used by BUDG.EXE
GIND86DD      Program used by BUDG.EXE
GNAM86DD      Program used by BUDG.EXE
JUL86DD1      Program used by BUDG.EXE
JUN86DD1      Program used by BUDG.EXE
SOFFSET       Program used by BUDG.EXE
READ     ME   Readme file for Quick Start up
 
PC-SIG
1030D East Duane Avenue
Sunnyvale, CA  94086
(408) 730-9291
(c) Copyright 1986,87 PC-SIG
```
{% endraw %}

## FILES520.TXT

{% raw %}
```
---------------------------------------------------------------------------
Disk No  520  BUDGETRAK  Version 1.21   (DISK 2 of 2)                v3
---------------------------------------------------------------------------
 
BUDGETRAK is an excellent Encumbrance accounting package that would be of
interest to people working in the department of a large company who have a
desire to track their own budget and expenses more closely than possible
using the general information generally contained in a central accounting
system. Encumbrance accounting tracks obligations and planned expenses
rather than actual expenses. This is the second of a two disk set.
 
This package differs from a more standard accounting system in that when an
expense is anticipated, the estimated amount or encumbrance is entered. The
entry is reflected in the remaining budget. When the actual expense is
known, it is entered and the encumbrance amount and budget are updated.
This gives a more accurate picture, for budgeting purposes, than waiting to
record an actual expense.
 
The system will handle both single and double entry systems and also
produce a 12 month spreadsheet. Five balances are maintained: Budget,
Variance, Encumbrance, YTD Variance and Actual. The coding reflects the
program's intelligent design: 2 digit company code, 7 digit sub department
and a 6 digit account code. It can handle up to 999 master records and up
to 12000 transactions per month. The package has a password system and
comes with a set of utility programs and good documentation. A high
capacity floppy drive or a hard disk is recommended for this package.
 
README        Brief notes on using BUDGETRAK
BPRN     EXE  Print transaction file with summaries
BSPR     EXE  12 month spreadsheet program
B3MO     EXE  3 month spreadsheet program
BSRT     EXE  Sorts transaction file and master file
BBAL     EXE  Audit transaction file balances
BCON     EXE  Conversion program
AUG86DD1      Data files
GLMS86DD      Data files
 
PC-SIG
1030D East Duane Avenue
Sunnyvale, CA  94086
(408) 730-9291
(c) Copyright 1986,87 PC-SIG
```
{% endraw %}

## NOTES519.TXT

{% raw %}
```
Program name:         BUDGETRAK         Version 1.2
 
Author name:          Software Associates Laboratories
Address:              1747 N.Valencia, San Bernardino, CA 92404
 
Suggested Donation:   $ 49.00
 
Program Description:
 
BUDGETRAK is an excellent Encumberance Accounting package of interest to
those people working in departments of larger organizations and interested
in tracking their own budgets and expenses more closely than possible with
the central accounting system.
 
Briefly how this differs from a regular accounting system is that when an
expense is anticipated, the estimated amount or encumberance is entered.
This is reflected in the budget remaining. When the actual expense is known
later then that is entered and the encumberance amount and budget are
updated. This gives a much more accurate picture than waiting for the
actual expense before recording it.
 
The system will handle both single and double entry systems and also
produce a 12 month spreadsheet.Five balances are maintained: Budget,
Variance, Encumberance, YTD Variance, Actual
 
The coding reflects the good design: 2 digit company code, 7 digit sub
department and a 6 digit account code. It can handle upto 999 master
records and upto 12000 transactions per month !
 
The package has a password system and comes with a set of utility programs
and good documentation.
 
You would most probably need a high capacity floppy drive or a hard disk to
effectively use this package.
```
{% endraw %}

## NOTES520.TXT

{% raw %}
```
Program name:         BUDGETRAK         Version 1.2
 
Author name:          Software Associates Laboratories
Address:              1747 N.Valencia, San Bernardino, CA 92404
 
Suggested Donation:   $ 49.00
 
Program Description:
 
BUDGETRAK is an excellent Encumberance Accounting package of interest to
those people working in departments of larger organizations and interested
in tracking their own budgets and expenses more closely than possible with
the central accounting system.
 
Briefly how this differs from a regular accounting system is that when an
expense is anticipated, the estimated amount or encumberance is entered.
This is reflected in the budget remaining. When the actual expense is known
later then that is entered and the encumberance amount and budget are
updated. This gives a much more accurate picture than waiting for the
actual expense before recording it.
 
The system will handle both single and double entry systems and also
produce a 12 month spreadsheet.Five balances are maintained: Budget,
Variance, Encumberance, YTD Variance, Actual.
 
The coding reflects the good design: 2 digit company code, 7 digit sub
department and a 6 digit account code. It can handle upto 999 master
records and upto 12000 transactions per month !
 
The package has a password system and comes with a set of utility programs
and good documentation.
 
You would most probably need a high capacity floppy drive or a hard disk to
effectively use this package.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0520

     Volume in drive A has no label
     Directory of A:\

    AUG86DD1          3200   1-01-80   9:20a
    B3MO     EXE     48128   1-01-80   8:37a
    BBAL     EXE     30208   1-01-80   4:31a
    BCON     EXE     23552   1-01-80   6:28a
    BPRN     EXE     46592   1-01-80   8:01a
    BSPR     EXE     56832   5-20-86  11:28a
    BSRT     EXE     41984   1-01-80   1:56a
    FILES519 TXT      2483   5-09-07   1:53p
    FILES520 TXT      2137   5-09-07   2:01p
    GLMS86DD         23680  10-21-86   4:24p
    GO       BAT        38   5-09-07   2:11p
    GO       TXT       848   5-09-07   2:12p
    NOTES519 TXT      1504   5-09-07   2:05p
    NOTES520 TXT      1505   5-09-07   2:04p
    READ     ME       1920   1-01-80   9:16a
           15 file(s)     284611 bytes
                           30720 bytes free
