---
layout: page
title: "PC-SIG Diskette Library (Disk #673)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0673/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0673"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "FREEWAY 3 OF 3 (ALSO 671, 672)"

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

## FILES673.TXT

{% raw %}
```
Disk No  673
Program Title: FREEWAY PAYROLL SOFTWARE (disk 3 of 3)
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
 
ACCOUNTS BAT  Batch file to start the program running
BASRUN   EXE  Compiler library
FREEWAY  SYS  System file
HDINIT   BAT  Hard disk system intializing batch file (part 1)
HDINIT2  BAT  Hard disk system intializing batch file (part 2)
HSTART   BAT  Batch file to start program on hard disk
INIT?    BAT  Batch files to install DOS and make a working system (3 files)
INVOICE  LU   Data file
NOM?     EXE  Sub-program accessed by PAYROLL.EXE (3 files)
PDBSUMM  TAB  Data file
PRINTERS DRV  Text file listing printer driver codes
READ     ME   Introductory text file
SAL???   EXE  Sub-program accessed by PAYROLL.EXE (16 files)
SDBSUMM  EXE  Sub-program accessed by START.EXE
SDBSUMM  TAB  Data file
SETUP    EXE  Sub-program accessed by START.EXE
SMENU    EXE  Sub-program accessed by START.EXE
START    EXE  Main program
STATMNT  LU   Data file
STATUS        Data file
VAT1     EXE  Sub-program accessed by PAYROLL.EXE
 
PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987 PC-SIG Inc.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0673

     Volume in drive A has no label
     Directory of A:\

    ACCOUNTS BAT        35   9-01-86   3:03p
    BASRUN   EXE     20608   1-01-80   3:46a
    FILES673 TXT      2861   7-30-87  11:44a
    FREEWAY  SYS        17   8-13-86   4:22p
    GO       BAT        38   7-28-87   3:47p
    GO       TXT       386   7-28-87   3:47p
    HDINIT1  BAT       508   9-02-86  10:35a
    HDINIT2  BAT       288   9-02-86  10:48a
    HSTART   BAT        26   9-02-86  10:47a
    INIT1    BAT       512   9-02-86   1:38p
    INIT2    BAT       640   9-02-86   1:37p
    INIT3    BAT       384   9-02-86   1:39p
    INVOICE  LU        256   8-22-85  12:32p
    NOM1     EXE      5888  10-23-86  12:24p
    NOM2     EXE      9984  10-23-86  12:25p
    NOM3     EXE      6912  10-23-86  12:25p
    PDBSUMM  TAB      2688   8-06-86   9:52a
    PRINTERS DRV      1792   6-18-86  12:03p
    READ     ME        256   1-01-80   4:32a
    SAL10    EXE      7296  10-23-86   4:37p
    SAL100   EXE     12160  10-27-86  12:29p
    SAL11    EXE     11264  10-23-86  12:12p
    SAL12    EXE     12288  10-23-86  12:13p
    SAL13    EXE      9856  10-23-86  12:13p
    SAL14    EXE     12672  10-23-86  12:14p
    SAL15    EXE     10368  10-23-86  12:14p
    SAL20    EXE     20992  10-23-86   8:06p
    SAL30    EXE      3840  10-23-86  12:16p
    SAL31    EXE     28928  11-03-86   6:45p
    SAL45    EXE     28160  10-23-86  12:19p
    SAL55    EXE     16768  10-23-86   8:10p
    SAL60    EXE     10496  10-23-86  12:22p
    SAL70    EXE     10880  10-23-86  12:22p
    SAL85    EXE      8832  10-23-86  12:23p
    SAL91    EXE      6784  10-23-86  12:23p
    SDBSUMM  EXE      8576  10-23-86  12:34p
    SDBSUMM  TAB      2176   8-06-86   9:51a
    SETUP    EXE     17664  10-28-86   4:50p
    SMENU    EXE     10624  10-23-86   8:10p
    START    EXE     17280  10-28-86  11:13a
    STATMNT  LU        384   8-22-85  12:32p
    STATUS             128   9-12-86   3:09p
    VAT1     EXE     11008  10-23-86  12:33p
           43 file(s)     333503 bytes
                            5120 bytes free
