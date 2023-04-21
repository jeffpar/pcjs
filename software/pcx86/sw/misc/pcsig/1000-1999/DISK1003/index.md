---
layout: page
title: "PC-SIG Diskette Library (Disk #1003)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1003/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1003"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "PROFILE 2 OF 2 (ALSO 1002)"

    PROFILE is a database that stores important names, addresses and phone
    numbers. Print labels and reports with several sorts, including
    third-class bulk mail. Labels can be printed up to four across and can
    be processed according to 15 pre-defined set-ups and a custom
    configuration.
    
    The reports function can perform customized column calculations such as
    running balances, percentages, spreadsheet formulas, scientific
    calculations, etc. Summarize columns and have invisible columns for
    intermediate calculations. Each report can be up to 64 columns or 255
    characters wide.
    
    PROFILE has a mail merge function compatible with WordStar, DEC WPS,
    WordPerfect, Multimate, and PC-Write. ASCII data can be imported or
    exported in several formats. Use dBase II/III/III+. Your files can be
    converted to PROFILE format. PROFILE can manage large databases with
    its powerful search capabilities.
    
    All commands use pop-up and Lotus-style menus for ease of use.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1003.TXT

{% raw %}
```
Disk No: 1003                                                           
Disk Title: Profile 2 of 2 (1002 is 1st disk in set)  (Disk 2 of 2)     
PC-SIG Version: S1.4                                                    
                                                                        
Program Title: Profile                                                  
Author Version: 2.1                                                     
Author Registration: $39.95                                             
Special Requirements: None.                                             
                                                                        
PROFILE is a database that stores important names, addresses and phone  
numbers.  You can print labels and reports with several sorts, including
third-class bulk mail.  Labels can be printed up to four across and can 
be processed according to 15 pre-defined set-ups and a custom           
configuration.                                                          
                                                                        
The reports function can perform customized column calculations such as 
running balances, percentages, spreadsheet formulas, scientific         
calculations, etc.  They can summarize columns and have invisible       
columns for intermediate calculations.  Each report can be up to        
64 columns or 255 characters wide.                                      
                                                                        
PROFILE has a mailmerge function compatible with WordStar, WordPerfect, 
DEC WPS, Multimate, and PC-Write.  ASCII data can be imported or        
exported in several formats.  Use dBase II/III/III+?  Your files can be 
converted to PROFILE format.  PROFILE can manage large databases with   
its powerful search capabilities.                                       
                                                                        
All commands use pop-up and Lotus-style menus for ease of use.          
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## PF-INTRO.TXT

{% raw %}
```
                           TECHNICAL DETAILS
                           PROFILE VERSION 2
                           -----------------


POWER

o    Unlimited number of database files

o    Link up to four databases to one form; 1 primary database plus up
     to three refernced databases.

o    Create Calculated fields in a data entry form. Calculated fields
     may include other fields, constants, and functions. Nine functions
     are available to perform sine, consine, square, square root, log
     and others mathematical operations.

o    Manage large databases with up to:
     - 2+ billion records per database file
     - 10 Index files per database
     - 4 database files per form
     - 3,000 characters per record
     - 150 fields per database
     - 100 lines for the database entry form

o    Supports 4 field types; Text, Numeric, Lookup, and Calculation
     - Text field attributes include, any character, alpha only, digits
       only, auto date, date, phone number, social, and security number

     - Number fields attributes are any number, currency, and an
       incrementing field that automatically increments as new forms are
       added.

o    Entry rules for fields; must fill, required, unique, force upper
     case

o    Range checking, minimum or maximum, for numeric fields

o    Powerful search capabilities
     - Alphabetic/numeric/date range searches
     - "And", "or", partial, exact, and combination matches

o    Index on any field
     - View database in index order
     - Ten index fields per database
     - Find any record with index in less than 2 seconds

o    Create help line for any field

o    Powerful one-step global search and replace
     - Replace information
     - Add to beginning or end of field  data
     - Delete partial information
     - Substitute partial data in a field

o    Sorted reports or labels on up to ten fields

o    Sort reports, labels, or mail-merge file in 3rd class bulk
     mail order

o    Print labels up to four across
     - Print in 3rd class bulk mail order with dividers and summary
     - Easy-to-use label creation with 31 predefined labels and an
       "any-style" selection


o    Reports up to 64 columns or 255 characters
     - Customized column calculations (running balance, percentages,
       spreadsheet formulas, etc.)
     - Column summaries (total, average, count and subtotal,
       subaverage, subcount)
     - Invisible columns for intermediate calculations
     - Perform scientific calculations (sine, cosine, square root,etc.)

o    Preview reports on screen

o    Create and save unlimited number of report formats for repeated use


PERFORMANCE

o    Optimized search and sort speeds

o    Supports virtually all popular printer models

o    Program files fit on one disk


FAST TO LEARN AND EASY TO USE

o    Free-form database design

o    Change design easily without losing data

o    Quick entry "ditto" key to copy information from previous form

o    Pop-up and Lotus-style menus for easy use

o    Over 150 screens of context-sensitive help


OFFICE INTEGRATION

o    Dialer function lets you automatically dial any number in your database

o    Import/export ASCII data in comma-delimited, Standard Data Format,
     or One-field-per-line format

o    Convert dBase II/III/III+ files to ProFile format

o    Create mailmerge file for most popular word processing programs

o    Easily copy data between different ProFile databases


```
{% endraw %}

## PFBATCH.TXT

{% raw %}
```
CD\PROFILE
PF %1 %2 %3 %4 %5 %6 %7 %8
CD\
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1003

     Volume in drive A has no label
     Directory of A:\

    CONVERT  EXE     49812   3-04-90  12:32p
    DBF-PF   COM     27054   3-04-90  12:32p
    EXAMPLE  COM     15227   3-04-90  12:32p
    INSTALL  BAT      1903   3-04-90  12:32p
    KEYPRESS COM        96   3-04-90  12:32p
    MANUAL   DAT    181042   3-04-90  12:32p
    PF-INTRO TXT      3587   3-04-90  12:32p
    PF-READ  ME      35816   3-04-90  12:36p
    PFBATCH  TXT        46   3-04-90  12:32p
    PRINTDOC EXE      9344   3-04-90  12:32p
    UNPACK   BAT         3   3-04-90  12:32p
    GO       BAT        38   1-21-88   2:39p
    GO       TXT       694   1-01-80  12:40a
    FILE1003 TXT      2517   4-16-90  10:33a
           14 file(s)     327179 bytes
                           27648 bytes free
