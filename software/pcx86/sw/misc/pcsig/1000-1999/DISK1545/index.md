---
layout: page
title: "PC-SIG Diskette Library (Disk #1545)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1545/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1545"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "ACCOUNTS PAYABLE LITE (ALSO 1546)"

    The ACCOUNTS PAYABLE LITE module provides a simple way to keep track of
    all your payables. This module is an essential element in managing your
    cash flow as it allows you to pay invoices using seven payment selection
    methods. Checks are generated automatically by the computer or you may
    make payments by writing checks manually. Full integration into your
    General Ledger will save you hours of time and effort, and avoids
    duplicate data entry. Proper use of this module requires the GENERAL
    LEDGER LITE PC-SIG Disk #151.
    
    Features include: up to 2000 vendors, 32000 transactions; continuous
    form checks; enter miscellaneous debits or credits, pre- or post-dated
    transactions; easy to use or learn, easy to modify or delete
    transactions and vendors, prior period adjustments. Complete range of
    financial reports; select reports by month, quarter, year and
    year-to-date or trended. Pop-up windows, sound, mouse compatible; 8-
    digit invoice and reference number, departments; allows multiple
    distribution; post the G/L in summary or detail format; and much more.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1545.TXT

{% raw %}
```
Disk No: 1545                                                           
Disk Title: Accounts Payable Lite (also 1546)                           
PC-SIG Version: S1                                                      
                                                                        
Program Title: Accounts Payable Lite                                    
Author Version: 1.3G                                                    
Author Registration: $36.95 includes printed & bound manual & newsletter.
Special Requirements: 384K RAM, two floppy drives or a hard drive, and 
                      disk #151.
                                                                        
The ACCOUNTS PAYABLE LITE MODULE provides a simple way to keep track of 
all your payables.  This module is an essential element in managing your
cash flow as it allows you to pay invoices using seven payment selection
methods.  Checks are generated automatically by the computer or you may 
make payments by writing checks manually.  Full integration into your   
General ledger will save you hours of time, effort and avoids duplicate 
data entry.  Proper use of this module requires the GENERAL LEDGER LITE 
PC-SIG Disk #151.                                                       
                                                                        
Up to 2000 vendors, 32000 transactions, continues form checks, enter    
misc. debits or credits, pre-or post dated transactions, easy to use or 
learn, easy to modify or delete transactions and vendors, proior period 
adjustments.  Complete range of financial reports, select reports by    
month, quarter, year and year-to-date or trended.  Pop-up windows,      
sound, mouse compatible, 8-digit invoice and reference number,          
Departments, allows multiple distribution, Post the G/L in summary or   
detail format and much more.                                            
                                                                        
File Descriptions:                                                      
                                                                        
The first disk contains:                                                
FMAP     COM  Main Accounts Payable executable.                         
FMAP?    ???  Accounts Payable overlay files.                           
FMAP2    CHN  Accounts Payable module part 2.                           
INSTALL  COM  Installation program.                                     
ORDER    DOC  Blank order form which can be printed.                    
README   BAT  Displays this file on screen.                             
                                                                        
The second disk contains:                                               
FMAP-DOC ARC  Archived documentation manual (See PRINT-AP below).       
ORDER    DOC  Blank order form which can be printed.                    
PRINT-AP BAT  Prints manual to printer (PRN).                           
WORK     APC  Work Demo - AP Configuration data file.                   
WORK     APK  Work Demo - AP Check transaction data file.               
WORK     APT  Work Demo - AP Transaction data file.                     
WORK     APV  Work Demo - AP Vendors data file.                         
WORK     CHR  Work Demo - GL Chart of accounts data file.               
WORK     CNF  Work Demo - System configuration data file.               
WORK     GLT  Work Demo - GL Transaction data file.                     
README   BAT  Displays this file on screen.                             
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1988 PC-SIG, Inc.                                         
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

### Directory of PC-SIG Library Disk #1545

     Volume in drive A has no label
     Directory of A:\

    CONFIG   SYS        22  12-31-88
    FILE1545 TXT      4105  10-16-89  10:21p
    FMAP     000      4096  12-31-88
    FMAP     001     14336  12-31-88
    FMAP     002     44032  12-31-88
    FMAP     COM     25418  12-31-88
    FMAP2    000     33536  12-31-88
    FMAP2    001     44288  12-31-88
    FMAP2    002     16384  12-31-88
    FMAP2    003      4608  12-31-88
    FMAP2    004      1024  12-31-88
    FMAP2    005      8448  12-31-88
    FMAP2    006     28416  12-31-88
    FMAP2    CHN     33073  12-31-88
    GO       BAT        38   1-01-80   1:56a
    GO       TXT       694  10-17-89   9:59a
    INSTALL  COM     28614  12-31-88
    ORDER    DOC      4844  12-31-88
    README   BAT      1917  12-31-88
    RUN      BAT        21  12-31-88
           20 file(s)     297914 bytes
                           16384 bytes free
