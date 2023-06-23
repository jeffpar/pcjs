---
layout: page
title: "PC-SIG Diskette Library (Disk #1948)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1948/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1948"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "ASC2COM"

    ASC2COM will take an ASCII format file of under 64K and turn it into one
    of five self-listing COM format files, each offering the user different
    features such as single line or page scrolling, printing, find, repeat
    find, help, an internal write to file, and even a "wide lister"
    allowing a width of up to 255 characters.
    
    With ASC2COM, you can guarantee that vital information is communicated
    to your users.  Your message (or copyright declaration) is much more
    difficult to alter and much, much more accessible to the user.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1948.TXT

{% raw %}
```
Disk No: 1948                                                           
Disk Title: Asc2com                                                     
PC-SIG Version: S1.1                                                    
                                                                        
Program Title: Asc2com                                                  
Author Version: 1.66                                                    
Author Registration: $20.00                                             
Special Requirements: None.                                             
                                                                        
ASC2COM will take an ASCII format file of under 64K and turn it into one
of five self-listing COM format files, each offering the user different 
features such as single line or page scrolling, printing, find, repeat  
find, help, an internal write to file, and even a ``Wide Lister''       
allowing a width of up to 255 characters.                               
                                                                        
With ASC2COM, you can guarantee that vital information is communicated  
to your users.  Your message (or copyright declaration) is much more    
difficult to alter and much, much more accessible to the user.          
                                                                        
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
║                    <<<<  Disk #1948  ASC2COM  >>>>                      ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To unpack program, type: UNPACK [destination path] (press enter)        ║
║                                                                         ║
║ To start program, type: ASC2COM      (press enter)                      ║
║                                                                         ║
║ To print documentation, type: ASC2DOC (press enter)                     ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1948

     Volume in drive A has no label
     Directory of A:\

    ASC2C166 LZH    128355  10-26-89   4:42p
    FILE1948 TXT      1777   2-13-90   9:29a
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       694   1-01-80  12:42a
    LH113C   EXE     36992   6-24-89   7:20p
    LHARC    EXE     31256   5-31-89  11:38a
    README   COM      3504  12-02-89   9:12a
    UNPACK   BAT        22  11-26-89   9:59a
    USERGRP  COM      3506  11-26-89   3:47p
            9 file(s)     206144 bytes
                          110592 bytes free
