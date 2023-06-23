---
layout: page
title: "PC-SIG Diskette Library (Disk #165)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0165/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0165"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "GENERAL LEDGER"

    Personal General Ledger is a template software package designed to
    work with the Lotus 1-2-3 spreadsheet program.  This program handles
    cash receipts, disbursements, salary, and general journals.  It also
    offers a full general ledger and chart of accounts.
    
    System Requirements: Lotus 1-2-3 version 1 or 1a.
    
    How to Start:  Check out the LEDGER.DOC and CHART.DOC files for
    directions. To run, enter Lotus 1-2-3 and type: AUTO123 <ENTER>.
    
    Suggested Registration: $50.00
    
    File Descriptions:
    
    RECTJRNL WKS  Cash receipt journal
    SLRYJRNL WKS  Salary journal
    DISBJRNL WKS  Cash disbursements journal
    LEDGER   DOC  Documentation for Person General Ledger
    GENLEDGR WKS  Full general ledger
    AUTO123  WKS  Sets up automatic menu when first accessing 1-2-3
    GENLJRNL WKS  General journal - everything else
    CHART    DOC  Full chart of accounts
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CHART.DOC

{% raw %}
```
                          Personal General Ledger
                             Chart of Accounts
                 (C) Copyright 1984 L. Mitchell Wein, CPA
 
Asset & Liability:      Net Income:              Personal Expense:
                                                                          
 110.  Cash on Hand     500.  Surplus/Deficit    711.1 Real Estate Taxes 
 121.1 Checking - Joint                          711.2 Depr on House 
 121.2 Money Mkt - Husb 550.  Professional Fees  711.3 Natural Gas 
 121.3                  570.  Author's Fees      711.4 Electricity 
 121.4                  580.  Comp Pgm Royalties 711.5 Household Maint. 
 121.5                  611.  Gross Salary Rev   711.6 Interest on Mrtgage
*130.  T-Bills-Husband  612.  Unemplymnt Benfts  711.7 Household Insurance
*131.1 Marktble Stocks  613.  Jury Service Fees  711.8 Water & Sanitation
 131.2 Val Allow-Stocks 614.  Job Hunting Expnse 711.9 Misc House Expense
*132.1 Marktble Bonds   615.  Employment Fees    712.  Food
 132.2 Val Allow-Bonds  616.  Transp as Employee 713.1 Auto Mainteneance
*140.  Accounts Rcvble  617.  Union Dues         713.2 Auto Insurance
*141.  Dep/Prepaid Exp  621.1 Stock Sales        713.3 Gasoline & Oil
*151.  Stock Broker     621.2 Cost of Stock Sls  713.4 Deprec. on Auto
*152.  FRB/BPD-Personal 621.3 Unrlzd Loss [Gain] 713.5 Parking
*153.                   621.4 Dividend Income    713.6 Reg & Lic Fees
*154.                   621.5 Adj to Pr Yr Div   713.7 Tolls
*161.  Fed Inc Tax Rec  621.6 Investmnt Adv Fees 713.8 Misc Auto Expense
*162.  State Inc Tx Rc  622.1 Bond Sales         713.9 Tax-ded Auto Exp
*163.  City 1-Inc Tx Rc 622.2 Cost of Bond Sales 714.1 Medcal & Dental Exp
*164.  City 2-Inc Tx Rc 622.3 Unrlzd Loss [Gain] 714.2 Drugs
*170.  Accounts Payable 622.4 Bond Interest Inc. 715.  Clothing
                        623.  Vault Expense      716.1 Social Security
 211.1 House            625.1 T-Bill Int-Husband 716.2 Disability Inc Ins
 211.2 Accum Depr-House 625.2 T-Bill Int-Wife    716.3 Life Insurance
 212.1 Improvmnts-House 631.  Bank Int-Husband   717.  Household Supplies
 212.2 Accum Depr-House 632.  Bank Int-Wife      718.  Depr on Appl/Furn
 213.  Mortgage         641.  Ins Pol Inc-Taxble 719.  Telephone
 221.                   642.  Ins Pol Inc-Non-Tx 720.  Education
*311.  Ins Cash Val #1  651.  Depr-Business FxAs 721.  Newspapers
*312.  Ins Cash VAl #2  652.1 Interest Expense   722.  Busses, Sbwys, Cabs
 321.  Appliances/Furn  652.2 Bank Service Chrgs 723.  Legal Fees
 322.  Acc Dep-Appl/Frn 653.  Business Supplies  724.  TV & Organ Service
 341.  Automobile       654.  Misc Business Exp  725.  Laundry & Dry Clng
 342.  Acc Dep-Auto     655.  Computer Exp-Busn  726.  Hair Care
 351.  Busnss Fxd Assts 661.  Federal Income Tax 727.  Computer Exp-Pers
 352.  Acc Dep - BFA    662.  State Income Tax   751.  Entertainment/Misc
 361.  Jewelry          663.  City #1 Income Tax 752.  Dog Expense
 362.  Val Allow-Jewlry 664.  City #2 Income Tax 753.  Contributions
 370.  Deferred Charges 665.  Canadian Income Tx 754.  Gifts (not childrn)
 380.  Retirement Plan  671.  Other Interest Inc 761.  Gifts to Children
 392.1 Money Mkt - Wife 672.  Miscellaneous Inc  762.  Vacations
 392.2                  681.  Gift Income-Srce 1 763.  Misc Surp Luxuries
 392.3                                          
 392.4                                          
*393.  T-Bills-Wife
*395.  FRB/BPD-Wife
                                                
 400.  Combind Net Wrth 
                      
*Post to GL on a current basis.
 (Clear journal columns by adjustment into the general column.)
```
{% endraw %}

## CRC.TXT

{% raw %}
```
PC-SIG Disk No. #165, version v1 

The following is a list of the file checksums which should be produced by
the CRCK4 program on disk #9 (and others).  If the CRC numbers do not match
you may have a bad file.  To use type:  CRCK4 <filespec>

CRCK4 output for this disk:


CRCK ver 4.2B (MS DOS VERSION )
CTL-S pauses, CTL-C aborts

--> FILE:  RECTJRNL.WKS         CRC = 27 2A

--> FILE:  DISBJRNL.WKS         CRC = 41 DD

--> FILE:  SLRYJRNL.WKS         CRC = 34 D2

--> FILE:  GENLJRNL.WKS         CRC = 77 A5

--> FILE:  AUTO123 .WKS         CRC = 4F 7A

--> FILE:  GENLEDGR.WKS         CRC = C2 42

--> FILE:  LEDGER  .DOC         CRC = 5B 9D

--> FILE:  CHART   .DOC         CRC = D8 8D

 ---------------------> SUM OF CRCS = 5B 64

DONE

These and other Public Domain and user-supported programs from:

PC Software Interest Group
1125 Stewart Ct  Suite G
Sunnyvale, CA 94086
(408) 730-9291
```
{% endraw %}

## LEDGER.DOC

{% raw %}
```
                          Personal General Ledger
                            (C) Copyright 1984
                           L. Mitchell Wein, CPA
                        
                                                            
          The  Personal  General  Ledger  is a complete set of Journals and
General Ledger to be used as a template with Lotus 1-2-3 (TM) and  the  IBM
PC  (TM).  This  set  of  books  can  be used by any individual to keep his
personal records plus some minor  business  records.  The  ledger  balances
have a full audit trail back through the journals. 
                                                                          
          Alternate keys can be used in all the books as follows:
     1. D - enter date.                 
     2. S - sort database by date first and then check number.
     3. F - save file.                  
     4. N - see menu of files available.
 
          The files are as follows:
     1. AUTO123.WKS - sets up an automatic menu when  first  accessing
        1-2-3.
     2. GENLEDGR.WKS  -  the  full  general  ledger with all accounts
        shown.  The journals are entered here after the conclusion  of
        each three month period.
     3. DISBJRNL.WKS - cash disbursements journal for checks and cash
        on hand.
     4. RECTJRNL.WKS  -  cash  receipts  journal  to  be  entered   as
        required.
     5. SLRYJRNL.WKS  -  salary  journal  to  be  used  to record the
        individual's paychecks as received.
     6. GENLJRNL.WKS - general  journal  to  be  used  to  record  any
        transactions which do not fit in any of the other journal.
     7. CHART.DOC - a complete chart of accounts to be used with  this
        set of books.
     8. LEDGER.DOC - this description.
     
          Entries  should  be  made in the journals above any prior entries
(from the bottom to the top) and the sorted by using Alternate "S".  The F9
key can then be used to foot and cross foot the journal.    Always  inspect
comumn 1 after using the F9 key to be sure that the journals cross foot.
 
          If you find this full set of personal books useful, please send a
contribution of $ 50.00 to:
                                  L. Mitchell Wein, CPA
                                  470 Midland Ave.
                                  Yonkers, NY 10704
 
 Contributors will be kept informed of possible new  developments  such  as
a   Personal   Financial  Statement  template  and/or  a  Federal/State tax
calculation template.  Also,  questions  will   also   be   answered   from
contributors, only. I can be reached at the following network addresses: 
          
                                  Source ID CL2087
                                  Compuserve ID 70675,227
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0165

     Volume in drive A has no label
     Directory of A:\

    AUTO123  WKS      1408   1-22-84   3:35p
    CHART    DOC      3704   5-28-84  12:15p
    CRC      TXT       935  11-14-84   3:03p
    CRCK4    COM      1536  10-21-82   7:54p
    DISBJRNL WKS     53632   5-28-84   1:04p
    GENLEDGR WKS     40576   5-28-84  12:46p
    GENLJRNL WKS     38528   5-28-84   1:22p
    LEDGER   DOC      2822   5-28-84   3:34p
    RECTJRNL WKS     21248   5-28-84   1:11p
    SLRYJRNL WKS     12032   5-28-84   1:15p
           10 file(s)     176421 bytes
                          142336 bytes free
