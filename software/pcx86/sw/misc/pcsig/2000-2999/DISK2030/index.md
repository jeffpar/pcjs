---
layout: page
title: "PC-SIG Diskette Library (Disk #2030)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2030/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2030"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "MICRO ACCOUNTING SYSTEM"

    Those looking for a single entry general ledger accounting program need
    look no further. Micro Accounting System (MAS) provides a service
    needed by many small businesses. In addition to the general ledger
    functions, MAS has banking and budgeting functions. These additional
    sections are not included by many other programs.
    
    Those who do not need invoicing, accounts receivable or payable
    functions, and who need a simple-to-use general ledger with ample
    report options, will like this program.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE2030.TXT

{% raw %}
```
Disk No: 2030                                                           
Disk Title: Micro Accounting System                                     
PC-SIG Version: S1                                                      
                                                                        
Program Title: Micro Accounting System                                  
Author Version: 2.0                                                     
Author Registration: $95.00                                             
Special Requirements: 512K RAM, and a hard drive recommended.           
                                                                        
Those looking for a single entry general ledger accounting program need 
look no further.  MAS [Micro Accounting System] provides a service      
needed by many small businesses.  In addition to the general ledger     
functions, MAS has banking and budgeting functions.  These additional   
sections are not included by most other programs.                       
                                                                        
Those who do not need invoicing, accounts receivable or payable         
functions, and who need a simple to use general ledger with ample report
options, will like this program.                                        
                                                                        
The program menus pop up quickly but do not contain instructions on how 
to return to a previous menu [YOU MUST PRESS ESC].  The program is easy 
to set up and use.  It uses non-standard account numbers [Ex: A09100]   
and the program is not easy to correct if an entry is incorrect or      
results in the statement being out of balance.                          
                                                                        
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         

```
{% endraw %}

## INSTALL.DOC

{% raw %}
```
=============================================================================
             Micro Accounting System - Installation Procedures
=============================================================================

If the INSTALL.EXE program fails then you can install the program by
following the instructions below:

HARD DISK INSTALLATION:

   1.  Create a sub directory on your hard disk to place the program.
   2.  Change to that subdirectory
   3.  Change to drive A:
   4.  Type:  PKUNZIP MAS <drive>

   -   Installation is Complete

   Example:

   1.  C> MD ACCOUNT
   2.  C> CD\ACCOUNT
   3.  C> A:
   4.  A> PKUNZIP MAS C:

   To run the program change to drive 'C' and type:  MAS


FLOPPY DISKETTE INSTALLATION:

   Note:  You will need three formatted diskettes to use this system.
          They will be PROGRAM, OVERLAY, & DATA Diskettes.

   1.  Insert Original Diskette into drive A:
   2.  Insert PROGRAM (1st blank diskette) into drive B:
   3.  Change to drive A:
   4.  Type:  PKUNZIP MAS B: MAS.EXE
   5.  Remove PROGRAM Diskette from drive B:
   6.  Insert OVERLAY (2nd blank diskette) into drive B:
   7.  Type:  PKUNZIP MAS B: @floppy

   -   Installation is complete

   Example:

   3.  A:
   4.  PKUNZIP MAS B: MAS.EXE
   7.  PKUNZIP MAS B: @floppy

   To run the program do the following:

   1.  Insert PROGRAM Diskette into drive A:
   2.  Insert DATA Diskette into drive B:
   3.  Change to drive B:
   4.  Type A:MAS

   This will create all data files on drive B:


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2030

     Volume in drive A is DISK2030
     Directory of A:\

    CONFIG   SYS        22   2-04-89   6:28p
    FILE2030 TXT      2295   1-15-90   6:21p
    FLOPPY              37   5-05-89   3:15p
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       694   1-16-90  11:52a
    INSTALL  DOC      1563   5-14-89  11:39a
    INSTALL  EXE     18096   5-14-89  10:44a
    MAS      ZIP    180728   6-08-89   6:47p
    PKUNZIP  EXE     18208   3-06-89
            9 file(s)     221681 bytes
                           95232 bytes free
