---
layout: page
title: "PC-SIG Diskette Library (Disk #1152)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1152/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1152"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "MULTI-MERGE & QUIKSORT"

    MULTI-MERGE facilitates adding, editing, deleting, sorting, and printing
    information for later merging into your wordprocessing merge documents.
    Data can be sorted by name, company, zip, or two key fields you
    tailor to your own specifications.  It is not a program meant to replace
    a wordprocessor, but rather to enhance it.
    
    With MULTI-MERGE, you can manipulate your list, create your merge list,
    and then use your wordprocessor to merge the list with the
    wordprocessor's merge document.  The program is easy to use and
    completely menu driven, but you do need to know your wordprocessor's
    merge functions and DOS to operate the program with facility.
    File Descriptions:
    
    -------- ---  MULTI-MERGE.
    MERGE    EXE  The program file.
    MERGE    DBF  Data file.
    READ     ME   Information and instructions.
    README   BAT  Batch file to run the program.
    
    QUIKSORT is a high performance sort/merge utility for processing large
    data files.
    
    Sort an unlimited number of files and merge up to 16 files. QUIKSORT
    supports file sizes of up to 32 megabytes. An unlimited number of key
    fields and many different key field types are allowed. Records can be
    fixed or variable-length, and record lengths can be up to 32
    kilobytes. Extensive input record selection and output record
    formatting are supported.
    
    QUIKSORT outputs records, key fields, pointers, or key fields and
    pointers. Even wild card characters are allowed in file names. It
    sorts Btrieve and dBase III files and also provides high-language
    interfaces for a called subroutine. An outstanding sort/merge
    utility, QUIKSORT comes with extensive documentation.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1152.TXT

{% raw %}
```
Disk No: 1152                                                           
Disk Title: Multi-Merge & Quiksort                                      
PC-SIG Version: S1.2                                                    
                                                                        
Program Title: Multi-Merge                                              
Author Version: 3.06                                                    
Author Registration: $10.00                                             
Special Requirements: 512K RAM, two floppy drives, and an Epson-compatib
                                                                        
MULTI-MERGE facilitates adding, editing, deleting, sorting, and printing
information for later merging into your wordprocessing merge documents. 
Data can be sorted by name, company, zip, or two key fields you         
tailor to your own specifications.  It is not a program meant to replace
a wordprocessor, but rather to enhance it.                              
                                                                        
With MULTI-MERGE, you can manipulate your list, create your merge list, 
and then use your wordprocessor to merge the list with the              
wordprocessor's merge document.  The program is easy to use and         
completely menu driven, but you do need to know your wordprocessor's    
merge functions and DOS to operate the program with facility.           
Program Title: Quiksort                                                 
Author Version: 3.32                                                    
Author Registration: $40.00                                             
Special Requirements: None.                                             
                                                                        
QUIKSORT is a high performance sort/merge utility for processing large  
data files.                                                             
                                                                        
Sort an unlimited number of files and merge up to 16 files.  Supports   
file sizes of up to 32 megabytes.  An unlimited number of key fields and
many different key field types are allowed.  Records can be fixed or    
variable-length, and record lengths can be up to 32 kilobytes.          
Extensive input record selection and output record formatting are       
supported.                                                              
                                                                        
QUIKSORT outputs records, key fields, pointers, or key fields and       
pointers.  Even wild card characters are allowed in file names.  It     
sorts Btrieve and dBase III files and also provides high-language       
interfaces for a called subroutine.  An outstanding sort/merge utility, 
QUIKSORT comes with extensive documentation.                            
                                                                        
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
║          <<<<  PC-SIG Disk #1152  MULTI-MERGE & QUIKSORT  >>>>          ║
╠═════════════════════════════════════════════════════════════════════════╣
║ ***NOTE***Both programs on this diskette (MULTI-MERGE and QUIKSORT)     ║
║           have a file named READ.ME.  To differentiate between the      ║
║           two and to allow both program files to be on the same disk,   ║
║           QUICKSORT's READ.ME file was renamed to README.TXT by         ║
║           PC-SIG for distribution purposes.                             ║
║                                                                         ║
║              *          *          *          *          *              ║
║                                                                         ║
║ To start MULTI MERGE, type MERGE (press Enter)                          ║  
║                                                                         ║
║ For information about MULTI MERGE, type:  README (press Enter)          ║
║                                                                         ║
║ To start QUIKSORT, type:  QUIKSORT (press Enter)                        ║
║                                                                         ║
║ For documentation on QUIKSORT, type:  TYPE README.TXT (press Enter)     ║
╚═════════════════════════════════════════════════════════════════════════╝
(c) Copyright 1990, PC-SIG Inc.
```
{% endraw %}

## README.TXT

{% raw %}
```

                        █▄▄▄ ▄ ▄   Omniware
                           ▄▀██▀   P.O. Box 23493
                         ▀▄▀ ▀▄▀   Columbia, SC 29224


                Quiksort (tm) Sort/Merge Utility   Version 3.32

         COPYRIGHT (c) Omniware Corp. 1985-1990.  ALL RIGHTS RESERVED.


QUIKSORT documentation may be viewed on the screen or printed.  To view the
documentation on the screen, execute "QUIKHELP".  Instructions will appear at
the bottom of the screen.  To print the documentation on LPT1, execute
"QUIKHELP /P".  To route printed output to a different device or to a disk
file, execute "QUIKHELP /P=device or filename".

QUIKHELP writes screen output directly to the video buffer.  If your system
has a non-standard video port or buffer segment address, execute "QUIKHELP /B"
to use BIOS instead.  If your monitor displays color attributes as shades of
gray, execute "QUIKHELP /M" to force monochrome output.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1152

     Volume in drive A has no label
     Directory of A:\

    README   TXT       948   5-26-90   9:03a
    QUIKHELP COM     62330   5-26-90   9:08a
    QUIKSORT COM     19984   5-26-90   9:07a
    GO       BAT        38   1-18-88   1:38p
    FILE1152 TXT      3405   9-20-90  10:35a
    MERGE    EXE    191567   3-16-88  11:52a
    README   BAT        21   1-04-80   3:14a
    MERGE    DBF       512   4-05-88   1:05p
    READ     ME      21803   4-05-88  12:52p
    GO       TXT      1497   1-01-80   3:27a
           10 file(s)     302105 bytes
                           14336 bytes free
