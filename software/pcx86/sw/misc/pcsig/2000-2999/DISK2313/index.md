---
layout: page
title: "PC-SIG Diskette Library (Disk #2313)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2313/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2313"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "PSEARCH"

    PSEARCH will quickly locate any file by a name or text the file
    contains!  You can have many search criteria, patterns like *TOM*.* to
    find files with TOM in the name, or ^REVIEW to find filenames sounding
    like REVIEW.  Search for files containing 1-5 strings or words.  Look
    for filenames in .ARC, .ZIP, .LZH. Search algorithm is fast!  Search a
    directory, path, or all disks on your system automatically.  Menu or
    command line driven.
    
    Some of the many possible uses for PSEARCH:
    
    ~ Wildcard searches.
    
    ~ List files and text lines containing specified text strings.
    
    ~ Compile all C programs referring to a specific include file.
    
    ~ Locate document containing specific text strings.
    
    ~ Delete any files containing specific text strings.
    
    ~ Locate all Readonly files on a disk.
    
    ~ List all files by date criteria.
    
    ~ Search multiple drives for text or a file name
    
    ~ Search for a file name archived into .ZIP, .ARC or .LZH formats.
    
    ~ The ability to exclude files from the search process greatly
    improves search performance.  Limit text search to words, prefixes, or
    suffixes. This greatly enhances the search by returning only the data
    you want.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE2313.TXT

{% raw %}
```
Disk No: 2313                                                           
Disk Title: PSEARCH                                                     
PC-SIG Version: S4.4A                                                   
                                                                        
Program Title: PSEARCH                                                  
Author Version: 4.4A                                                    
Author Registration: $20.00                                             
Special Requirements: None.                                             
                                                                        
PSEARCH will quickly locate any file by name or text the file contains! 
You can have many search criteria, patterns like *TOM*.* to find files  
with TOM in the name, or ^REVIEW to find filenames sounding like        
REVIEW.  Search for files containing 1-5 strings or words.  Look for    
filenames in .ARC, .ZIP, .LZH. Search algorithm is fast! Can search a   
directory, path, or all disks on your system automatically. Menu or     
command line driven.                                                    
                                                                        
Here are a list of some of the many possible uses for PSEARCH;          
                                                                        
~ List all files on a hard disk that match a wildcard specification.    
                                                                        
~ Show the names of any files containing specified text                 
                                                                        
~ Show text lines of any file containing a specified string.            
                                                                        
~ Look for word "Mrs" in any file and preserve case in search.          
                                                                        
~ Find 123 files containing the word "BUDGET" and print their name.     
                                                                        
~ Compile all C programs that refer to the "RECDESC.H" include file.    
                                                                        
~ Find a word processing document containing the name "Wiffle".         
                                                                        
~ Delete any *.DOC files containing "To: Mr. Johnson".                  
                                                                        
~ Locate all readonly files existing on a disk.                         
                                                                        
~ List all files updated today.                                         
                                                                        
~ Build a DOS command to archive manually selected files from one or    
more directories.                                                       
                                                                        
~ Search multiple drives attached to the system for text or a file name 
                                                                        
~ Search for a file name even if it has been archived into .ZIP, .ARC or
.LZH formats.                                                           
                                                                        
~ Limit text search to WORDS, PREFIXES, or SUFFIXES. This greatly       
enhances the search by returning only the data you want.                
                                                                        
~ Ability to exclude files from the search process to greatly improve   
search performance.                                                     
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989, 1990 PC-SIG, Inc.                                         
```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                    <<<<  DISK # 2313 PSEARCH  >>>>                      ║
╠═════════════════════════════════════════════════════════════════════════╣
║    To start the program, type: PS (press enter)                         ║
║                                                                         ║
║    To print documentation,type:                                         ║
║                               COPY PSEARCH.DOC PRN (press enter)        ║
║                                                                         ║
╚═════════════════════════════════════════════════════════════════════════╝
(c) Copyright 1990, PC-SIG Inc.


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2313

     Volume in drive A has no label
     Directory of A:\

    PSEARCH  DOC     69786   7-12-90   8:06a
    PSEARCHF EXC       128   7-12-90   8:06a
    PS       EXE    109607   7-12-90   8:06a
    PSEARCH  NEW      1397   7-12-90   8:06a
    PSEARCHT EXC       309   7-12-90   8:06a
    GO       BAT        29  10-04-90   5:52a
    GO       TXT       731  10-09-90   2:46p
    FILE2313 TXT      4299  10-09-90   2:49p
            8 file(s)     186286 bytes
                          130048 bytes free
