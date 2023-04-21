---
layout: page
title: "PC-SIG Diskette Library (Disk #1741)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1741/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1741"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "PULLED FROM LIBRARY"

    A2Z is a multi-link fixed-structure database. Dynamically link to any
    number of files under macro control. It is best suited to handle
    complex database operations where text-based or home data-filers dare
    not tread.
    
    A2Z is an unusual database manager with simple relational capabilities
    linking files with a common record number. Its structure also enables
    very quick database operations. The power of this database can be used
    best by someone with a knowledge of Boolean logic or programming
    experience. Autocode, A2Z's macro compiler, uses editor-created
    external macro files to create very powerful and complex Boolean
    structures, including nested IFs, substring handling, and conditional
    access to link file data.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1741.TXT

{% raw %}
```
Disk No: 1741                                                           
Disk Title: A2Z Disk 2 of 2 (also 1740)                                 
PC-SIG Version: S1                                                      
                                                                        
Program Title: A2Z                                                      
Author Version: 4.0                                                     
Author Registration: $25.00 individual  registration, $195.00 corporate 
Special Requirements: None.                                             
                                                                        
A2Z is an unusual database manager with rudimentary relational          
capabilities in that it is able to link files of related data in which  
the data to be linked have a common record number.  It supports three   
types of fields: 1) character fields, or combinations of texts and      
numbers which are not to be acted on mathematically (added, subtracted, 
multiplied, divided); 2) numeric fields, which are acted on             
mathematically and may be carried out to four decimal places; and 3)    
money fields, which are also acted on mathematically, but are carried   
out to two decimal places.                                              
                                                                        
A2Z consists of a series of relatively small .COM files, which act upon 
macro file modules to perform operations like creating, sorting,        
viewing, etc.  Databases consist of a series of related files, each     
containing the information required for the macro files to perform their
respective tasks.  This enables A2Z to carry out database operations    
very quickly.                                                           
                                                                        
                                                                        
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## TIPS.DOC

{% raw %}
```
A2Z is one of the most flexible Data Base Management Systems.  With the
VIEW task one can change the data dictionary view of the database.  With
the NEXT task one can reset the next available record pointer at any time.
With the ZOOM task on can expand your data base as necessary.

However, one can AVOID considerable time re-engineering the data base if
the following design TIPS are followed:

1)  BEFORE entering real data, build a test data base of 25 records and
    use this to test your application.  AFTER your application is TESTED,
    then use ZOOM to expand the data base to the desired size

2)  PROFILE NAMES need NOT be used unless the application requires
    multiple reports

3)  PLAN your data base with FUTURE needs in mind.  For example, make
    ZIPCODE 9 characters to allow for expansion

4)  SEPARATE data into the SMALLEST useable form.  For example, separate
    name into LAST, FIRST, and MI

5)  POSITION the MOST ACCESSED data fields at the FRONT of the RECORD
    to avoid paging down to get to the field

6)  FIELD NAMES also function as COLUMN NAMES.  Avoid OBSCURE names and
    names which are LONGER than the FIELD

7)  ANY field can be SORTED, but take care that the CONTENT of the field
    is UNIFORM so that the sorted order is what is EXPECTED

8)  NUMERIC or MONEY fields are for calculations or subtotals.  EVERYTHING
    else should be CHARACTER

9)  Avoid OVERFLOWs by making NUMERIC and MONEY fields as large as necessary

9)  RELATE the DATA to the RECORD NUMBER.  FOR EXAMPLE, assign CUSTOMER or
    PART numbers the REC number.  ALL records can then be DIRECTLY ACCESSED
    by REC number!  In fact, A2Z uses the REC number to access MULTIPLE files
    dynamically.  RELATED files must match the ROOT file REC for REC, for
    example, REC 44 of the ROOT file and the LINKED file should contain
    related data

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1741

     Volume in drive A has no label
     Directory of A:\

    ACCT     FIL     10989   1-01-89  12:00a
    MEMO     FIL     20979   1-01-89  12:00a
    PART     FIL     10989   1-01-89  12:00a
    LA       FIL     10989   1-01-89  12:00a
    KC       FIL     10989   1-01-89  12:00a
    NY       FIL     10989   1-01-89  12:00a
    SALE     FIL     10989   1-01-89  12:00a
    A2ZFNAM  FIL       240   1-01-89  12:00a
    SPRD     FIL      5994   1-01-89  12:00a
    RECP     FIL     25974   1-01-89  12:00a
    A2ZPNAM  FIL       348   1-01-89  12:00a
    ACCTQTR1 COD       146   1-01-89  12:00a
    MEMOFILE COD        50   1-01-89  12:00a
    PARTA    COD       994   1-01-89  12:00a
    PARTB    COD       994   1-01-89  12:00a
    SALEUPDT COD      1342   1-01-89  12:00a
    SALERING COD       361   1-01-89  12:00a
    SPRDSHET COD       686   1-01-89  12:00a
    ACCT     DIC      2072   1-01-89  12:00a
    MEMOFILE DIC       888   1-01-89  12:00a
    RECPFILE DIC      2590   1-01-89  12:00a
    PART     DIC      1184   1-01-89  12:00a
    PARTB    DIC      1184   1-01-89  12:00a
    PARTA    DIC      1184   1-01-89  12:00a
    LA       DIC       592   1-01-89  12:00a
    KC       DIC       592   1-01-89  12:00a
    NY       DIC       592   1-01-89  12:00a
    SALERING DIC      3774   1-01-89  12:00a
    SALESLIP DIC      3774   1-01-89  12:00a
    RECP     DIC      2590   1-01-89  12:00a
    SALEUPDT DIC      3774   1-01-89  12:00a
    SALEUNIT DIC      3774   1-01-89  12:00a
    SALESALE DIC      3774   1-01-89  12:00a
    SALE     DIC      3774   1-01-89  12:00a
    SPRD     DIC      3700   1-01-89  12:00a
    SPRDSHET DIC      3700   1-01-89  12:00a
    MEMO     DIC       888   1-01-89  12:00a
    ACCTQTR1 DIC      2072   1-01-89  12:00a
    ACCTFILE DIC      2072   1-01-89  12:00a
    ACCTQTR1 CXT      1564   1-01-89  12:00a
    MEMOFILE CXT       544   1-01-89  12:00a
    SALERING CXT      3060   1-01-89  12:00a
    LA       CXT       272   1-01-89  12:00a
    KC       CXT       272   1-01-89  12:00a
    NY       CXT       272   1-01-89  12:00a
    ACCTQTR1 CAL      1288   1-01-89  12:00a
    MEMOFILE CAL       448   1-01-89  12:00a
    LA       CAL       224   1-01-89  12:00a
    KC       CAL       224   1-01-89  12:00a
    NY       CAL       224   1-01-89  12:00a
    SALERING CAL      2520   1-01-89  12:00a
    ACCTQTR1 INX        66   1-01-89  12:00a
    SALESLIP INX        66   1-01-89  12:00a
    SALE     INX        66   1-01-89  12:00a
    AUTOEXEC A2Z        18   1-01-89  12:00a
    A2ZBASE  COM     14258   1-01-89  12:00a
    A2ZGATE  COM     19446   1-01-89  12:00a
    A2ZBASE  DOC     33219   1-01-89  12:00a
    DEMO     DOC     46115   1-01-89  12:00a
    GO       BAT       382   1-01-89  12:00a
    TIPS     DOC      1904   1-01-89  12:00a
    FILE1741 TXT      2443  12-18-89   2:07p
    GO1      BAT        38   1-01-80   1:37a
    GO       TXT       771   1-01-80   5:44a
           64 file(s)     302290 bytes
                           25600 bytes free
