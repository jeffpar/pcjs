---
layout: page
title: "PC-SIG Diskette Library (Disk #1702)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1702/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1702"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "MAILING LIST MANAGEMENT DISK 1OF2 (1703)"

    Does your business need to track customer contacts and print mailing
    labels for customer information?  The MAILING LIST MANAGEMENT DATABASE
    can do both jobs for you.
    
    The MAILING LIST MANAGEMENT DATABASE uses a single entry screen and a
    series of pop-up windows, selected by function keys.  These pop-up
    windows allow you to see the main entry screen as you select a
    particular function.  You'll never lose sight of your data.
    
    The database can maintain an unlimited number of files with up to 1,000
    records per datafile.  A fast search function will search through the
    selected data file for a particular record number, name, company,
    state,
    category, and/or ID number.  A file backup feature is included to
    safeguard against data corruption.  A file export function will allow
    the data to be sent to a file that can be imported to dBASE III+, LOTUS
    1-2-3, or any word processing system with an ASCII import feature.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1702.TXT

{% raw %}
```
Disk No: 1702                                                           
Disk Title: Mailing List Management disk 1of2 (1703)                    
PC-SIG Version: S1                                                      
                                                                        
Program Title: Mailing List Management DataBase                         
Author Version: 1.01                                                    
Author Registration: $25.00                                             
Special Requirements: Hard Disk, 640K                                   
                                                                        
Does your business need to track customer contacts and print mailing    
labels for customer information?  The MAILING LIST MANAGEMENT DATABASE  
can do both jobs for you.                                               
                                                                        
The MAILING LIST MANAGEMENT DATABASE  uses a single entry screen and a  
series of pop-up windows, selected by function keys.  These pop-up      
windows allow you to see the main entry screen as you select a          
particular function.  You'll never lose site of your data.              
                                                                        
The database can maintain an unlimited number of files with up to 1,000 
records per datafile.  A fast search function will search through the   
selected data file for a particular Record number, Name, Company, State,
Category, and/or ID Number.  A file backup feature is included to safe- 
guard against data corruption.  A file export function will allow the   
data to be sent to a file that can be imported to dBASE 3+, LOTUS 1-2-3 
or any word processing system with an ASCII import feature.  A utility  
program is included to assist you with importing files to dBASE 3+. Also
included is the source code of a small data entry/edit program for the  
dBASE 3+ database.                                                      
                                                                        
                                                                        
                                                                        
                                                                        
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
║       <<<<  Disk #1702  MAILING LIST MANAGEMENT DATABASE   >>>>         ║
║                   <<<<  disk 1 of 2 (1703 also)  >>>>                   ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To extact program files, insert disk 1 and type:  MAIL_LST (press enter)║
║                          insert disk 2 and type:  DBASE (press enter)   ║
║ To start program, type:  CUSTOMER (press enter)                         ║
║                                                                         ║
║ To print documentation, type:  VIEWCUST (press enter)                   ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## README.DOC

{% raw %}
```

                                HOW TO INSTALL

    The main file on  this  diskette  is  called  MAIL_LST.EXE  and  is  an
    archived  file.  An  archived  file is a composite of several files and
    each file must be extracted before the Mailing List Management
    Database can  be operated.

    In  order  to  extract  the  program files, simply follow the following
    instructions :

          1    -     COPY  MAIL_LST.EXE  TO  THE  DISK  THAT  YOU  WILL  BE
                     OPERATING FROM.  PREFERRABLY A HARD DRIVE.

          2    -     AT THE DOS PROMPT, TYPE THE WORD MAIL_LST

          3     -    YOU  WILL  SEE A SERIES OF TEXT LINES APPEAR ON YOUR
                     SCREEN, THESE ARE THE FILES BEING EXTRACTED FROM THE
                     ARCHIVED FILE.

          4    -     ONCE THE EXTRACTION PROCEDURE IS COMPLETE, YOU WILL BE
                     RETURNED TO THE DOS PROMPT.

          5    -     AT THIS POINT, TYPE THE WORD VIEWCUST TO  READ  AND/OR
                     PRINT THE DOCUMENTATION.

          6    -     TO RUN THE PROGRAM, TYPE THE WORD CUSTOMER AT THE DOS
                     PROMPT AND FOLLOW THE DIRECTIONS. ON-LINE HELP
                     IS ACCESSED BY PRESSING <F1>.


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1702

     Volume in drive A has no label
     Directory of A:\

    FILE1702 TXT      2739  12-11-89  10:26a
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       771  12-12-89   1:03p
    MAIL_LST EXE    222975   6-19-89   6:36p
    README   DOC      1262   5-06-89   8:40p
            5 file(s)     227785 bytes
                           92160 bytes free
