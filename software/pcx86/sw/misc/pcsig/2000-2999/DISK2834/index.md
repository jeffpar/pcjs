---
layout: page
title: "PC-SIG Diskette Library (Disk #2834)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2834/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2834"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}
{% comment %}samples_begin{% endcomment %}

## FILE2834.TXT

{% raw %}
```
Disk No: 2834                                                           
Disk Title: Dream 3 of 3 (also 599 & 600)                               
PC-SIG Version: S2.5                                                    
                                                                        
Program Title: DREAM (Data Retrieval/Entry and Management)              
Author Version: 2.5                                                     
Author Registration: $79.00                                             
Special Requirements: Hard drive.                                       
                                                                        
DREAM is a relational database program that comes in three diskettes,   
all three needed to complete the package.  The archiving procedure was  
used to combine the contents of original five DREAM disks into three.   
                                                                        
DREAM, produced by PC-Systems, is a relational database system with     
extreme power and flexiblity.  Much like dBASE, it can custom design    
database applications, which include reports, sorting abilities, query  
abilities, and data entry and retrieval abilities without writing       
code.  DREAM comes complete with over 200K worth of on-line and manual  
documentation which lead the user step by step through the program.     
DREAM can handle over 32,000 records per data file with over 1,500      
characters per fixed record length.                                     
                                                                        
Features:                                                               
                                                                        
~ Two modes of operation: technical and end user.                       
~ Three levels of data protection.                                      
~ Multiple views of data.                                               
~ Multiple record updates (batch processing).                           
~ Edit, format, and range tests on input.                               
~ Computations on input/output, including computations with dates.      
~ Auto-generation and duplication of data fields and records.           
~ Single data file reports - post or concurrent with data entry.        
~ Relational operations for multiple files.                             
~ Data restructuring.                                                   
~ Copying/moving data from one file to another.                         
~ Screen painting for data entry and reports.                           
~ Windowing technique for multiple data files.                          
~ Unique report layout features.                                        
~ Four character sizes for reports and labels.                          
~ Multiple look-up and data transfer from outside files.                
~ On-line help and tutorial.                                            
~ Interrupt routines using function keys.                               
~ Color selection.                                                      
~ ASCII file format and portability of data.                            
~ Five levels of user expertise.                                        
~ Electronic note pad.                                                  
                                                                        
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1991 PC-SIG, Inc.                                         
```
{% endraw %}

## GO.TXT

{% raw %}
```

                               Dream Installation



1. We assume that your hard disk is formatted and that the necessary
     DOS files have been copied onto the hard disk.

2. Create directory called DREAM. The hard disk is assigned to drive C.

                         MKDIR C:\DREAM

3. Change directory to the one created in the previous step using command

                          CHDIR C:\DREAM

4. Insert DREAM system diskette #1 in drive A. If your hard drive id is C,
     then type
                           A:INSTALL

5. Follow the procedure for DREAM system diskette #2 and #3 required by
     the installation program.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2834

     Volume in drive A has no label
     Directory of A:\

    3                    1  11-22-87   9:39a
    Z-DREAM3 ARC    293472   7-11-91   8:21p
    GO       BAT        28   9-09-91  11:13a
    GO       TXT       661   9-09-91  11:07a
    FILE2834 TXT      3923   9-09-91  11:46a
            5 file(s)     298085 bytes
                           21504 bytes free
