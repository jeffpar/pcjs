---
layout: page
title: "PC-SIG Diskette Library (Disk #2235)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2235/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2235"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "GENERAL LEDGER II"

    In need of a basic, no-frills accounting system to handle your
    billable time? Then GENERAL LEDGER II is for you.
    
    GENERAL LEDGER II can handle up to 300 accounts, grouped into 32
    different categories. Define both the account names and category names.
    The number of vouchers (groups of account postings) that can be handled
    is determined by available disk storage. Transaction entry is
    simplified when you call for accounts by name (or partial name) as well
    as by account number.
    
    Standard report formats eliminate the need to design reports. A check
    register automatically captures data on all checking account activity.
    A cash journal can create a double-posted petty cash journal with just
    a single entry for each transaction. Journaling has a pre-posting list
    feature that previews the posting results and makes corrections before
    final posting. The Reports menu includes an option that can print all
    of the mandatory end-of-month reports with a single keystroke.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE2235.TXT

{% raw %}
```
Disk No: 2235                                                           
Disk Title: General Ledger II                                           
PC-SIG Version: S1                                                      
                                                                        
Program Title: General Ledger II                                        
Author Version: 3.6                                                     
Author Registration: $50.00                                             
Special Requirements: Two floppy drives, and a 132 column printer.      
                                                                        
If you are a professional in need of a basic, "no whistles and bells"   
accounting system to handle your billable time, then GENERAL LEDGER II  
is for you.                                                             
                                                                        
GENERAL LEDGER II can handle up to 300 accounts, which can be grouped   
into 32 different categories.  You define both the account names and    
category names.  The number of vouchers (groups of account postings)    
that can be handled is determined by available disk storage. .          
Transaction entry is simplified in that it lets you call for accounts by
name (or partial name) as well as by account number.  Standard,         
pre-established, report formats eliminate the need for you to design    
reports.  A check register feature automatically captures data on all   
checking account activity.  A cash journal feature lets you create a    
doubly-posted petty cash journal with just a single entry for each      
transaction. Journaling contains a pre-posting list feature that lets   
you see what the posting results will be, and to make corrections if you
want to, before final posting.  The Reports Menu includes a selection   
that lets you print all of the mandatory end-of-month reports with a    
single keystroke.                                                       
                                                                        
                                                                        
GENERAL LEDGER II has a locked-in audit trail.  You can't make direct   
changes to the balances in any of your accounts.  In order to change    
a value, you must make entries through the journal and print a posting  
report that shows what happened.  Serial voucher numbers are generated  
automatically and if something is missing, chances are you'll know it.  
In addition, GENERAL LEDGER II won't allow you to close an accounting   
period until you've printed at least a transaction report, an income    
statement, and a balance sheet.  Three levels of password protection    
is also provided.                                                       
                                                                        
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
║          <<<<  PC-SIG Disk #2235 GENERAL LEDGER II  >>>>                ║
╠═════════════════════════════════════════════════════════════════════════╣
║                                                                         ║
║     To print documentation, type: COPY MAN PRN                          ║
║                                                                         ║
║     To start program tipe: GL                                           ║
║                                                                         ║
║                                                                         ║
║                                                                         ║
║                                                                         ║
║                                                                         ║
║                                           Copyright 1990, PC-SIG, Inc.  ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2235

     Volume in drive A has no label
     Directory of A:\

    READ     ME       2372   1-12-89   8:40a
    LCONFIG  EXE     22989   8-19-88   2:39p
    LRECOVER EXE     39327  12-05-88   4:03p
    GL       EXE     73555   2-20-89   3:03p
    JOURNAL  DAT        80   7-16-86  11:45a
    LACCOUNT DAT     38400   7-16-86  11:45a
    LCONFIG  DAT      1554   7-16-86  11:45a
    LCONTROL DAT      2560   7-16-86  11:45a
    VOUCHERS DAT         8   7-16-86  11:45a
    MAN             151352   1-12-89   8:36a
    INVOICE           1557   1-12-89   8:36a
    SUM      EXE     11677  12-05-88  10:26a
    CHECKSUM LST       180   2-20-89   3:04p
    GO       TXT      1079   6-21-90  10:53a
    GO       BAT        37   6-21-90  10:39a
    FILE2235 TXT      3331   6-21-90  10:53a
           16 file(s)     350058 bytes
                            2048 bytes free
