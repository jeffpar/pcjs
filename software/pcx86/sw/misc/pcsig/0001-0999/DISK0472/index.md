---
layout: page
title: "PC-SIG Library Disk #472"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0472/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsig0/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0472"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

## Information about "SIMPLIFIED BUSINESS"

    All of the programs on this disk are menu driven and written in BASIC.
    However, simplified doesn't mean simple; its powers and features are
    quite substantial and we urge a careful reading of the documentation.
    The Simplified Bookkeeping System offers you the following programs:
    Expenses, Income, Bank Account, Payroll, Accounts Receivable,and
    Summary of Operations.  A quite powerful collection for financial
    management.
    
    System Requirements: 128K, two disk drives, monochrome display and
    a printer
    
    How to Start: Consult the BKG.DOC file for documentation.  To run the
    BASIC programs, consult the directions in GETTING STARTED for your
    configuration.
    
    Suggested Registration: $35.00
    
    File Descriptions:
    
    ACCTREC  BAS  Processes Accounts Receivables
    A        EXE  Information on how to use to backup your data
    AUTOEXEC BAT  Request the DATE then loads BASICA BKPG /F:5
    C        BAT  COPY PAYEE.FIL, CATEGORY.FIL, INCOME.FIL to B:
    BKPG     BAK  Backup file of bookkeeping
    BKPG     DOC  Author supplied documentation file
    BKPG     BAS  This is the bookkeeping program
    EXPENSE  BAS  Keeps track of expenses
    CHECKING BAS  Maintains the checking account
    L        BAT  Copies checking.acc to new backup bookkeeping disk.
    INCOME   BAS  Keeps track of income
    G        BAT  Copies totals to new backup bookkeeping disk.
    F        BAT  Creates and formats two new disks.
    X        BAT  Makes new backup copy of PAYROLL FILE DISK on drive B:
    STARTUP  BAT  Author supplied User startup procedure batch file
    SHELLSRT BAS  This is a shell sort program for sorting files
    S        BAT  Format 6 disks by responding  "Y" first 5 times.
    N        BAT  Creates two disks then loads BASICA & runs Payroll program
    R        BAT  Creates two disks then loads BASICA & runs A/R program
    PAYROLL  BAS  Processes the payroll

### Directory of PC-SIG Library Disk 0472

     Volume in drive A has no label
     Directory of A:\

    A        EXE      1920  11-27-84   9:38p
    ACCTREC  BAS     23936   7-09-85   9:07p
    AUTOEXEC BAT        25   3-04-85   3:10p
    BKPG     BAK     24960   8-16-85   7:28p
    BKPG     BAS      6144  12-25-84  11:20a
    BKPG     DOC     25249   8-16-85   7:40p
    C        BAT       121   9-14-84   2:55p
    CHECKING BAS     10624   3-04-85   8:51p
    EXPENSE  BAS     18560   6-06-85   7:45p
    F        BAT       466   9-20-84  12:53p
    FILES472 TXT      1725   1-29-87  11:41a
    G        BAT       275   9-20-84   1:03p
    INCOME   BAS     15360  11-28-84   9:36p
    L        BAT       248   9-20-84  12:57p
    N        BAT       398  10-26-84   4:18p
    NOTES472 TXT      1360   2-10-86  12:25p
    PAYROLL  BAS     46592   4-25-85   8:58p
    R        BAT       304  10-26-84   4:19p
    S        BAT       855   3-04-85   9:04p
    SHELLSRT BAS       384   8-25-84   9:50a
    STARTUP  BAT       437   3-04-85   9:00p
    X        BAT       227   9-20-84   2:09p
           22 file(s)     180170 bytes
                          130048 bytes free
