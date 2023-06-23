---
layout: page
title: "PC-SIG Diskette Library (Disk #1425)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1425/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1425"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "FINDFILE"

    FINDFILE searches all your drives and subdirectories for a particular
    filename, then displays all its locations on-screen. You can interrupt
    the search at any time by pressing the ESC key. FINDFILE lets you use
    wild card characters when entering the filename.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1425.TXT

{% raw %}
```
Disk No: 1425                                                           
Disk Title: FindFile                                                    
PC-SIG Version: S1.1                                                    
                                                                        
Program Title: FindFile                                                 
Author Version: 2.0                                                     
Author Registration: $15.00                                             
Special Requirements: None.                                             
                                                                        
FINDFILE searches all your drives and subdirectories for a particular   
filename, then displays all its locations on-screen.  You can interrupt 
the search at any time by pressing the ESC key.  FINDFILE lets you use  
wild card characters when entering the filename.                        
                                                                        
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
║                    <<<<  Disk No 1425 FINDFILE  >>>>                    ║
╠═════════════════════════════════════════════════════════════════════════╣
║                                                                         ║
║   To start the program, type:  FINDFILE (press enter)                   ║
║                                                                         ║
║   To print the documentation, type:  COPY README.DOC PRN  (press enter) ║
║                                                                         ║
╚═════════════════════════════════════════════════════════════════════════╝
(c) Copyright 1990, PC-SIG Inc.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1425

     Volume in drive A has no label
     Directory of A:\

    FINDFILE EXE     75040   6-26-90   7:21p
    README   DOC       892   6-26-90   7:56p
    GO       BAT        38   4-24-89   4:39p
    GO       TXT       729   1-01-80   1:45p
    FILE1425 TXT      1407   7-13-90  11:10p
            5 file(s)      78106 bytes
                           80896 bytes free
