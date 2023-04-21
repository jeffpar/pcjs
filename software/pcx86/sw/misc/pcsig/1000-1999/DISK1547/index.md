---
layout: page
title: "PC-SIG Diskette Library (Disk #1547)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1547/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1547"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "PAYROLL LITE 1 OF 2 (ALSO 1548)"

    This easy-to-use module provides a very efficient way to record
    important information such as: hire date, earnings, deductions,
    vacation and sick time, overtime and holiday pay. It automatically
    calculates gross pay, net pay, deductions and liabilities, prints checks
    and W-2 forms, supports both hourly and salaried employees paid either
    weekly, bi-weekly, semi-monthly or monthly, and fully integrates into
    the General Ledger Module. Allows manual override of deductions and
    includes user-modifiable tax tables you can keep current. Allows
    payroll after the fact. Proper use requires the FINANCE MANAGER II (PC-
    SIG Disk #151).
    
    Up to 1000 employees, 32000 transactions, user-modifiable tax tables,
    user modifiable tax calculations, three additional earnings categories
    and two additional deduction categories with separate tax options; can
    delete paid and posted payroll transactions; supports 80 column printers
    and HP Laserjet checks; generates a complete range of reports, such as:
    quarterly tax summary reports, quarterly tax payments, paid payroll
    recap for your 941 form, and SDI option for employee or employer.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1547.TXT

{% raw %}
```
Disk No: 1547
Disk Title: Payroll Lite 1 of 2 (1548)
PC-SIG Version: S1

Program Title: Payroll Lite
Author Version: 1.3G
Author Registration: $41.95 includes printed manual and Newsletter.
Special Requirements: 356K RAM, 2 floppy drives or hard disk, & disk #151.

This easy-to-use module provides a very efficient way to record
important information such as: hire date, earnings, deductions, vacation
and sick time, overtime and holiday pay.  It automatically calculates
gross pay, net pay, deductions and liabilities, prints checks and W-2
forms, supports both hourly & salaried employees paid either weekly,
bi-weekly, semi-monthly or monthly and fully integrates into the GENERAL
LEDGER MODULE.  Allows manual override of deductions and includes
user-modifiable tax tables you can keep current.  Allows payroll ofter
the fact.  Proper use requires the GENERAL LEDGER LITE (PC-SIG Disk
#151).

Up to 1000 employees, 32000 transactions, user-modifiable tax tables,
user modifiable tax calculations, three additional earnings categories
and 2 additional deduction categories with separate tax options, can
delete paid and posted payroll transactions, supports 80 column printers
and HP Laserjet checks, generates a complete range of reports like:
Quarterly Tax Summary reports, quarterly tax payments, Paid Payroll
Recap for your 941 form, aslo SDI option for employee or emplorer.

File Descriptions:

First Disk

CONFIG   SYS  Sample config.sys file (required to run FM II).
FMPR     COM  Main PAYROLL executable.
FMPR     000  PAYROLL overlay file 0.
FMPR     001  PAYROLL overlay file 1.
FMPR     002  PAYROLL overlay file 2.
FMPR2    CHN  PAYROLL module part 2.
FMPR2    000  PAYROLL overlay file 0.
FMPR2    001  PAYROLL overlay file 1.
FMPR2    002  PAYROLL overlay file 2.
FMPR2    003  PAYROLL overlay file 3.
FMPR2    004  PAYROLL overlay file 4.
INSTALL  COM  Installation program.
ORDER    DOC  Blank order form which can be printed.
README   BAT  Displays this file on screen.
RUN      BAT  Batch file to run PAYROLL LITE.

Second Disk

FMPR-DOC ARC  Archived documentation manual (See PRINT-PR below).
FMPR     DOC  Documentation manual (See PRINT-PR below).
ORDER    DOC  Blank order form which can be printed.
PRINT-PR BAT  Prints manual to printer (PRN).
WORK     EMP  Work Demo - PR Employees data file.
WORK     PRT  Work Demo - PR Transaction data file.
WORK     PRF  Work Demo - PR Configuration data file.
WORK     TAX  Work Demo - PR Federal & Colorado tax file.
WORK     PRK  Work Demo - PR Checks Configuration data file.
WORK     CHR  Work Demo - GL Chart of accounts data file.
WORK     GLT  Work Demo - GL Transaction data file.
WORK     CNF  Work Demo - System configuration data file.
README   BAT  Displays this file on screen.

PC-SIG
1030D East Duane Avenue
Sunnyvale  Ca. 94086
(408) 730-9291
(c) Copyright 1989 PC-SIG, Inc.
```
{% endraw %}

## ORDER.DOC

{% raw %}
```



     -----------------------------------------------------------------------
     |       F I N A N C E   M A N A G E R  II     O R D E R   F O R M     |
     |                                                                     |
     | MAIL:Hooper International           24 Hr ORDER LINE:1-800-245-7789 |
     |  TO  P.O. Box 62219                   24 Hr FAX line:(719) 528-8997 |
     |      Colorado Springs, CO 80962                                     |
     |      U.S.A.                             Tech Support:(719) 528-8989 |
     |---------------------------------------------------------------------|
     | Mastercard:___   Visa:___   Amex:___   Check:___ (U.S. FUNDS ONLY)  |
     |                                                                     |
     | Card Number:________________________________  Expiration:__________ |
     |                                                                     |
     | Name:______________________________ Signature:_____________________ |
     |                                                                     |
     | Company Name:_______________________________ PC Brand:_____________ |
     |                                                                     |
     | Address:____________________________________ DISK SIZE:3"___  5"___ |
     |                                                                     |
     | City:____________________________  State:____  Zipcode:____________ |
     |                                                                     |
     | Country:______________________________    Phone:(____)_____________ |
     |                                                                     |
     | Registration number on disk you were evaluating:___________________ |
     |                                                                     |
     | How did you hear about FINANCE MANAGER? PC-SIG_____________________ |
     |---------------------------------------------------------------------|
     | ITEMS ORDERED - Version 1.3                |QTY|UNIT PRICE| AMOUNT  |
     |--------------------------------------------|---|----------|---------|
     | FINANCE MANAGER II - REGISTERED COPIES:    |   |          |         |
     |                                            |   |          |         |
     |           GENERAL LEDGER (Main module)     | _ |  $49.95  | $       |
     |                                            |   |          |         |
     |           Accounts Receivable              | _ |  $36.95  | $       |
     |                                            |   |          |         |
     |           Accounts Payable                 | _ |  $36.95  | $       |
     |                                            |   |          |         |
     |           Payroll                          | _ |  $41.95  | $       |
     |                                            |   |          |         |
     |           Account Reconciliation           | _ |  $14.95  | $       |
     |                                            |   |          |         |
     |           Financial Utilities              | _ |  $25.95  | $       |
     |                                            |   |          |         |
     |                                            |   |          |         |
     | EVALUATION COPY of General Ledger Lite     | _ |  $ 3.00  | $       |
     |-----------------------------------------------------------|---------|
     |                                                  SUBTOTAL | $       |
     |-----------------------------------------------------------|---------|
     | LESS QUANTITY DISCOUNT SCHEDULE PER ORDER                 |         |
     |    3 or 4 modules =  5% discount,  5+ modules 10% discount|$<      >|
     |-----------------------------------------------------------|---------|
     | ADD  Shipping/Handling charge  shipped 2nd day air in USA | $ 5.50  |
     |-----------------------------------------------------------|---------|
     | ADD  AIR MAIL POSTAGE for orders                  $3.00   |         |
     |      shipped out of North America              per module | $       |
     |-----------------------------------------------------------|---------|
     |                                                     TOTAL | $       |
     |-----------------------------------------------------------|---------|
     |                     Colorado residents add 6.5% sales tax | $       |
     |-----------------------------------------------------------|---------|
     | Prices subject to change.                                 |         |
     | All amounts in US currency.            GRAND TOTAL (US $) | $       |
     -----------------------------------------------------------------------

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1547

     Volume in drive A has no label
     Directory of A:\

    CONFIG   SYS        22  12-31-88
    FILE1547 TXT      2931  10-18-89  10:45a
    FMPR     000      4096  12-31-88
    FMPR     001     14336  12-31-88
    FMPR     002     44032  12-31-88
    FMPR     COM     25331  12-31-88
    FMPR2    000      4608  12-31-88
    FMPR2    001     94976  12-31-88
    FMPR2    002     26624  12-31-88
    FMPR2    003     40192  12-31-88
    FMPR2    004      1280  12-31-88
    FMPR2    CHN     24087  12-31-88
    GO       BAT        38  10-13-89   9:59a
    GO       TXT       619  10-18-89  11:19a
    INSTALL  COM     28598  12-31-88
    ORDER    DOC      4844  12-31-88
    README   BAT      1904  12-31-88
    RUN      BAT        21  12-31-88
           18 file(s)     318539 bytes
                           36864 bytes free
