---
layout: page
title: "PC-SIG Diskette Library (Disk #2258)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2258/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2258"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "PC/BILL"

    Here's a time and billing system for those who bill by hourly rates or
    dollar amounts for specific services.
    
    With PC/BILL, all options are selected with a single key; it's
    completely menu-driven. Calculate fees based on either hours billed or
    a flat fee for services. Five different billing formats are
    available, allowing for varying amounts of detail in the bill for
    individual clients. Summary bills for clients with multiple accounts
    are generated automatically. Ageing of accounts receivable and
    calculation of late-charge interest is optional for individual
    clients. Messages can be printed at the end of the bill with
    different messages available for accounts which are delinquent for 30,
    60, 90, or over 90 days.
    
    By using separate files, customized bills can be easily produced.
    Client information can be listed by account number or by client name.
    Each client's account can be checked for accuracy prior to generating
    any bills. If an error is found in a client's account, a bill cannot be
    produced until the error is corrected, an invaluable safeguard. Data
    security is assured by a file backup procedure carried out each month as
    part of the end-of-month procedures.
    
    The package comes with a set of demonstration files that you can use to
    run the system and get acquainted with the billing operation.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE2258.TXT

{% raw %}
```
Disk No: 2258                                                           
Disk Title: PC/BILL                                                     
PC-SIG Version: S1                                                      
                                                                        
Program Title: PC/BILL                                                  
Author Version: 01/90                                                   
Author Registration: $100.00                                            
Special Requirements: Hard drive or high density drive in a two-floppy s
                                                                        
Here's a time and billing system for those who bill by hourly rates or  
dollar amounts for specific services.                                   
                                                                        
With PC/BILL, all options are selected with a single key; it's          
completely menu-driven.  It calculates fees based on either hours billed
or a flat fee for services.  Five different billing formats are         
available, allowing for varying amounts of detail in the bill for       
individual clients.  Summary bills for clients with multiple accounts   
are generated automatically.  Aging of accounts receivable and          
calculation of late-charge interest is optional for individual clients. 
Messages can be printed at the end of the bill with different messages  
available for accounts which are delinquent for 30, 60, 90, or over 90  
days.                                                                   
                                                                        
By using separate files, customized bills can be easily produced.       
Client information can be listed by account number or by client name.   
Each clients account can be checked for accuracy prior to generating    
any bills.  If an error is found in a clients account, a bill cannot be 
produced until the error is corrected, an invaluable safeguard.  Data   
security is assured by a file backup procedure carried out each month as
part of the end-of-month procedures.                                    
                                                                        
The package comes with a set of demonstration files that you can use to 
run the system and get acquainted with the billing operation.           
                                                                        
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## PCBILL.TXT

{% raw %}
```
PC/BILL is a Time and Billing system for professionals who bill
by hourly rates or dollar amounts for specific services.  PC/BILL
is designed for use by a small firm with a maximum of 20 timekeepers.
Data entry and bill preparation can be done by secretarial or clerical
staff.  No special computer expertise is required.

PC/BILL will be useful to a wide variety of professionals including: 
attorneys, accountants, business consultants, engineering consultants,  
and others.  The system is identical, except for terminology, to the
LAWOFFICE legal time and billing system. 

PC/BILL is a mature system which has been in use for ten years.  It has
proved to be a FAST and SIMPLE system to use with no special requirements
for color displays or data base software.  The system is self-contained
and does not require a link to an office accounting or book-keeping 
system.  The bills for a busy one-professional office can be prepared,
ready for mailing, in less than eight person-hours per month. 

Minimum hardware required is an AT class IBM compatible computer with
either two floppy drives or a hard drive.  A hard drive is highly
recommended for speed.  If a two-floppy system is used one of the drives
must be a high-density drive.  Either a 1.2 mb or a 720 kb DS/HD drive will
be large enough to store the .EXE files for the system.  A 360 kb DS/DD drive
is adequate for data files only.

The system has been used successfully with dot-matrix printers, Diablo
1620 and 1640 daisy wheel printers and a HP Laserjet II laser printer.
It should print to any system printer with output directed to LPT1:.
When using a dot-matrix or daisy wheel printer continuous fan-fold paper
or a sheet feeder must be used.
 
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2258

     Volume in drive A has no label
     Directory of A:\

    XPCBILL  EXE    337718   1-08-90   5:14p
    INSTALL  BAT       785   9-19-90  11:41a
    README   BAT        48   1-02-90  12:03p
    PCBILL   HLP       732   1-05-90   1:39p
    PCBILL   TXT      1746   1-05-90   1:07p
    EXTRACT  BAT        86   9-19-90  11:37a
    DISTRIB  BAT        62   1-08-90   5:57p
    FILE2258 TXT      2961   7-16-90   9:16a
    GO       BAT        40   1-01-80   6:00a
    GO       TXT       496   1-01-80   1:05a
           10 file(s)     344674 bytes
                           12288 bytes free
