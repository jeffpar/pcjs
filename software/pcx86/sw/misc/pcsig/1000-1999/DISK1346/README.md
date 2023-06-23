---
layout: page
title: "PC-SIG Diskette Library (Disk #1346)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1346/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1346"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "CRISP"

    CRISP is a bookkeeping system that can support 250 individual databases,
    making it perfect for property management of multiple commercial or
    investment properties, or for individual accounting for several
    separate projects or companies.
    
    CRISP is completely menu-driven.  You select the property, or account,
    you want to operate with from a menu and then select the operation you
    want from another menu.  Each database has its own journal of receipts
    and disbursements of up to 9,999 entries, chart of accounts of up to
    250 accounts, and payor/payee list of up to 250 names (plus unlimited
    special payor/payees).
    
    For each database, you can display up to three bank account balances,
    create income and expense reports, print checks (with or without payee's
    address for window envelope), reconcile bank statements for each
    property or project, and display delinquency reports.  You can also
    backup all account data to another file for safe keeping.  In addition,
    CRISP can export files of up to a year of monthly account totals to
    Lotus 1-2-3.  CRISP makes written reports including all transactions,
    selected transactions, and annual and monthly totals of accounts.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## DESCRIPT.DOC

{% raw %}
```

                DESCRIPTION OF CRISP VERSION 3.0

     CRISP is a bookkeeping system that can support 250 individual
databases, making it perfect for property management of multiple
commercial or investment properties, or for individual accounting
for several separate projects or professional activities.  CRISP
is completely menu-driven.  You select the property or project you
want to operate with from a menu and then select the operation you
want from another menu.  Each database has its own journal of
receipts and disbursements of up to 9,999 entries, distinct chart
of accounts of up to 250 accounts, and payor/payee list of up to
250 names (plus unlimited special payor/payees).
     For each data base, you can display up to three bank account
balances, create income and expense reports, print checks (with or
without payee's address for window envelope), reconcile bank
statements for each property or project, and display delinquency
report to see which of previously designated payor/payees have paid
rent or disbursed or received from a designated account.  You can
also backup all account data to another file for safekeeping.  In
addition, CRISP can export files of up to a year of monthly account
totals to Lotus 1-2-3.  CRISP makes written reports including
reports of all transactions, selected transactions, and annual and
monthly totals of accounts.
     A durable 80 page instruction manual is available from the
author. 
```
{% endraw %}

## FILE1346.TXT

{% raw %}
```
Disk No: 1346                                                           
Disk Title: Crisp                                                       
PC-SIG Version: S3.0                                                    
                                                                        
Program Title: Crisp                                                    
Author Version: 3.0                                                     
Author Registration: $55.00                                             
Special Requirements: A printer.                                        
                                                                        
CRISP is a bookkeeping system that can support 250 individual databases,
making it perfect for property management of multiple commercial or     
investment properties, or for individual accounting for several         
separate projects or companies.                                         
                                                                        
CRISP is completely menu-driven.  You select the property, or account,  
you want to operate with from a menu and then select the operation you  
want from another menu.  Each database has its own journal of receipts  
and disbursements of up to 9,999 entries, chart of accounts of up to    
250 accounts, and payor/payee list of up to 250 names (plus unlimited   
special payor/payees).                                                  
                                                                        
For each database, you can display up to three bank account balances,   
create income and expense reports, print checks (with or without payee's
address for window envelope), reconcile bank statements for each        
property or project, and display delinquency reports.  You can also     
backup all account data to another file for safe keeping.  In addition, 
CRISP can export files of up to a year of monthly account totals to     
Lotus 1-2-3.  CRISP makes written reports including all transactions,   
selected transactions, and annual and monthly totals of accounts.       
                                                                        
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
║                    <<<<  Disk #1346  CRISP  >>>>                        ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To start program, type:  CRSP (press enter)                             ║
║                                                                         ║
║ To print the documentation, type:  COPY README.DOC PRN                  ║
╚═════════════════════════════════════════════════════════════════════════╝
(c) Copyright 1990, PC-SIG Inc.
```
{% endraw %}

## README.DOC

{% raw %}
```
             README.DOC FILE FOR CRISP VERSION 3.0

     The diskette upon which this program is furnished contains 
the program file which is "CRSP.EXE", this "README.DOC" file, a
"DESCRIPT.DOC" file which briefly describes the program, and five
sample data files.  The sample data files are a property index file
which is "CRSPD" and five files in the form "CRSP?030".  
     These sample data files show accounting for a year for a  
property named "3000 Montgomery Street".  To see the program  
operate with sample data the user may boot his computer, designate
the "A" drive as the current drive, place the diskette in the "A"
drive, and type "CRSP" and then press "enter".  
     To set up the system for his own data, the user needs only the
file named "CRSP.EXE" and may transfer that file to another  
diskette or to the hard drive.  The other necessary files will be
created by the program.  The property index file "CRSPD" is created
on the current drive and is subsequently sought on that drive.  
When entering properties in the property index the user designates
the location for all other files.  
     The first screen of the program tells how the user may  
register to obtain the durable 60 page manual, updates and support.

   

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1346

     Volume in drive A has no label
     Directory of A:\

    CRSP     EXE    206859   7-19-90   5:49p
    CRSPD              788   1-21-80   5:38a
    CRSPP030          3248   1-23-80   9:15p
    CRSPA030          2674   6-01-90   6:29p
    CRSPJ030         16722   1-21-80   5:35a
    CRSPS030          4800   1-18-80  10:47a
    CRSPC030         22190   1-18-80  10:47a
    README   DOC      1273   7-23-90  12:57p
    CRSPE030           240   1-18-80  10:20a
    DESCRIPT DOC      1472   7-23-90   1:11p
    GO       BAT        38  10-19-87   3:56p
    GO       TXT       573   8-20-90   4:23p
    FILE1346 TXT      2591   8-28-90   4:13p
           13 file(s)     263468 bytes
                           51200 bytes free
