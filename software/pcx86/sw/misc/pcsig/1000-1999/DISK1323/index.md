---
layout: page
title: "PC-SIG Diskette Library (Disk #1323)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1323/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1323"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "VARAMORT & REFUND"

    VARAMORT is an amortization program that calculates the monthly
    payments
    for variable or fixed loans.
    
    You specify the amount of the mortgage, the length in years, and the
    interest rate.  For variable loans, you can specify the interest rate
    for each year or specify a certain range within which the interest rate
    may fluctuate.  In all cases, VARAMORT will calculate the monthly
    payment, principal, interest amount, balance, cumulative principal and
    the cumulative interest amount.  Each year may be separately displayed
    on the screen, or the entire loan information may be printed to the
    printer.
    
    REFUND is a database which keeps two types of information -- refunds
    that have been sent out and refunds that have been collected.  Each of
    these data categories will hold up to 998 refund records.  All records
    can easily be coded per type of merchandise, and after being coded, the
    records may be sorted according to date or code.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1323.TXT

{% raw %}
```
Disk No: 1323
Program Title:  VARAMORT and REFUND
PC-SIG version: 2

VARAMORT is an amortization program that calculates the monthly payments
for variable or fixed loans.  You may specify the amount of the
mortgage, the length in years, and the interest rate.  For variable
loans, you can specify the interest rate for each year or specify a
certain range within which the interest rate may fluctuate.  In all
cases, VARAMORT will calculate the monthly payment, the principal, the
interest amount, the balance, the cumulative principal, and the
cumulative interest amount.  Each year may be separately displayed on
the screen, or the entire loan information may be printed to the
printer.

REFUND is a database which keeps two types of information, refunds that
have been sent out and refunds that have been collected.  Each of these
info savers will hold up to 998 refund records.  All records can easily
be coded per type of merchandise, and after being coded, the records may
be sorted according to date or code.

Usage:  Database/Accounting.

Special Requirements:  CGA card.

How to Start:  Type GO (press enter).

Suggested Registration: $20.00 for VARAMONT and $12.00 for REFUND.

File Descriptions:

REFUND   EXE  Main program.
RREAD    ME   Documentation for main program.
VARA     SCR  Program file.
VARAMORT EXE  Main program.
VREAD    ME   Documentation.

PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1989 PC-SIG, Inc.

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║               <<<< Disk No 1323 VARAMORT and REFUND  >>>>               ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To start the VARAMORT program, type: VARAMORT (press enter)             ║
║                                                                         ║
║ To start the REFUND program, type: REFUND (press enter)                 ║
║                                                                         ║
║ Please Note:                                                            ║
║                                                                         ║
║ The Personal Ledger program has been updated and will no-longer fit on  ║
║ this disk.  It can know be found on disk #1482                          ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1323

     Volume in drive A has no label
     Directory of A:\

    FILE1323 TXT      1509   6-20-89  12:18p
    GO       BAT        38  10-19-87   3:56p
    GO       TXT       925   6-20-89  10:05a
    REFUND   EXE     61610  10-01-88  11:00a
    RREAD    ME       1339  10-01-88  11:00a
    VARA     SCR     16392  10-01-88   8:00a
    VARAMORT EXE     87457  10-01-88   8:00a
    VREAD    ME       3501  10-01-88   8:00a
            8 file(s)     172771 bytes
                          144384 bytes free
