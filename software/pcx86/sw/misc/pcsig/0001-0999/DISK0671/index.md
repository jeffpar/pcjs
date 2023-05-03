---
layout: page
title: "PC-SIG Diskette Library (Disk #671)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0671/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0671"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "FREEWAY 1 OF 3 (ALSO 672, 673)"

    This is a payroll management system built expressly for the European
    businessplace. FREEWAY PAYROLL programs can accomodate weekly,
    fortnightly, four weekly and monthly pay frequencies. The programs
    provide:
    
    ~ Payslip stationery (obtainable from the author)
    
    ~ Bank Giro's and payment lists
    
    ~ Cheque printing
    
    ~ Internal pension schemes with fixed sum or percentage contributions
    ~ Additional voluntary contributions
    
    ~ Up to 99 departments each with a coin analysis and cost of payroll
    total
    
    You may create your own headings for taxable and non-taxable additions
    to pay and post-tax deductions. You may produce lists of deductions
    under these headings. (Year-end documentation includes P35 and P60
    forms, also obtainable from author.) The system accommodates
    statutory sick pay, and password protection. The user may change tax
    rates and bandwidths, as well as earnings brackets.
    
    Each employee may have attached to his record card, in addition to basic
    pay and hours, any regularly occuring payment or deduction. During
    entry of pay data, only these employees will have the variables entered.
    Calculation of pay and deductions is very flexible,
    permitting recalculation if necessary.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES671.TXT

{% raw %}
```
Disk No  671
Program Title: FREEWAY PAYROLL SOFTWARE (disk 1 of 3)
PC-SIG version 2
 
    FREEWAY is the complete financial package for any company or
individual. The program has everything that you need ranging from
checkbook balancing, purchasing, payroll, general ledger, check printing
and more.
 
    FREEWAY PAYROLL programs can accommodate weekly, fortnightly, four
weekly and monthly pay frequencies. The programs provide for: Payslip
stationery (obtainable from FREEWAY), Bank Giro's, payment Lists, Check
printing internal pension schemes with fixed sum or percentage
contributions and additional voluntary contributions. Up to 99 departments
each with a coin analysis and cost of payroll total. You may create your
own headings for taxable and non-taxable additions to pay - and post tax
deductions. You may produce lists of amounts deducted / paid under these
headings. Year-end documentation includes P35 and P60 forms. (Obtainable
from FREEWAY.) Accommodates statutory sick pay and password protection. The
user may change tax rates, bandwidths, earnings brackets, Etc and bulk paye
code change facility.
 
    Each employee may have attached to his record card, in addition to
basic pay and hours, any regularly occurring payment - or deduction. During
entry of pay data only those employees who have variables need be examined
and the variables entered. Calculation of pay and deductions are very
flexible permitting the pay cycle to be easily re-done should errors come
to light, until an End-Processing Update is carried out. This may be the
first operation of the following week.
 
Usage: Financial
 
System Requirements: 256K
 
How to Start: Type GO (press enter)
 
Suggested Registration: Refer to PRICES.DOC for complete costs.
 
File Descriptions:
 
PAY??    EXE  Sub-routine programs accsessed by PAYROLL.EXE (25 files)
PAY43    LU   Data file
PAYROLL  EXE  Main program file
PAYSTART BAT  Batch file to start program running
PRINTERS DRV  Text file listing printer driver codes
READ     ME   Introductory text file
STATUS   PAY  Data file
 
PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987 PC-SIG Inc.

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║               <<<<  Disk #671 FREEWAY Disk 1 of 3  >>>>                 ║
╠═════════════════════════════════════════════════════════════════════════╣
║      For complete instructions and documentation refer to disk 672      ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0671

     Volume in drive A has no label
     Directory of A:\

    FILES671 TXT      2217   7-30-87  11:41a
    GO       BAT        38   7-28-87   3:40p
    GO       TXT       386   7-28-87   3:40p
    PAY00    EXE      4989   4-14-87   9:39a
    PAY20    EXE     30464   4-16-87  10:07a
    PAY30    EXE     30653   4-14-87  11:17a
    PAY30A   EXE     10477   4-14-87   9:42a
    PAY31    EXE     17789   4-14-87   9:42a
    PAY35    EXE     13581   4-14-87   9:43a
    PAY39    EXE      3901   4-14-87   9:43a
    PAY40    EXE     18957   4-14-87   9:44a
    PAY40A   EXE      5325   4-14-87  10:03a
    PAY41    EXE     16413   4-14-87  10:04a
    PAY42    EXE     13597   4-14-87  10:04a
    PAY43    EXE     11245   4-14-87  10:05a
    PAY43    LU        128   2-04-87   2:51a
    PAY43LU  EXE      4573   4-14-87  10:05a
    PAY45    EXE     14189   4-14-87  10:06a
    PAY46    EXE     13645   4-14-87  10:06a
    PAY47    EXE     15245   4-14-87  10:07a
    PAY50    EXE     11933   4-14-87  10:07a
    PAY50A   EXE      3981   4-14-87  10:07a
    PAY51    EXE     12461   4-14-87  10:08a
    PAY52    EXE     11149   4-14-87  10:08a
    PAY90    EXE      8061   4-14-87  10:08a
    PAY90A   EXE      3933   4-14-87  10:09a
    PAY91    EXE      9805   4-14-87  10:09a
    PAY92    EXE     15949   4-14-87  10:10a
    PAY93    EXE      9373   4-14-87  10:10a
    PAYROLL  EXE     13885   4-14-87  10:11a
    PAYSTART BAT       512   4-14-87  12:21p
    PRINTERS DRV      1152   8-11-86   4:02p
    READ     ME        256   1-01-80   4:32a
    STATUS   PAY        77   1-01-80  12:02a
           34 file(s)     330339 bytes
                           14336 bytes free
