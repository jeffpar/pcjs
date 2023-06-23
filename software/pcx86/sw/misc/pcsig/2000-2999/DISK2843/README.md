---
layout: page
title: "PC-SIG Diskette Library (Disk #2843)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2843/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2843"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}
{% comment %}samples_begin{% endcomment %}

## FILE2843.TXT

{% raw %}
```
Disk No: 2843                                                           
Disk Title: TELE-CODE The Area Code Database                            
PC-SIG Version: S1.11                                                   
                                                                        
Program Title: Tele-Code The Area Code Database                         
Author Version: 1.11                                                    
Author Registration: $34.95                                             
Special Requirements: 640K RAM, and a hard drive.                       
                                                                        
If you tend to make long distance telephone calls during periods of     
computer use, CODE-BLUE (CB) might be able to save you some of those    
annoying telephone company directory assistance fees!                   
                                                                        
CODE-BLUE is an on-line telephone area code reference system.  No       
documentation is provided, or needed, with this system.  It lets you    
cursor-select a state and get its telephone area code.  For larger      
states, CB breaks down the area code listings to the city level.  These 
city listings tend to include all the major population centers, but for 
area codes of smaller cities you will still have to call long distance  
information.                                                            
                                                                        
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
╔════════════════════════════════════════════════════════════════════════╗
║   <<<<  PC-SIG Disk #2843  TELE-CODE  (Disk 2 of 2, also #1083)  >>>>  ║
╠════════════════════════════════════════════════════════════════════════╣
║                                                                        ║
║          * Make a subdirectory, TELECODE, on your hard drive:          ║
║                                                                        ║
║                C:                                    (press Enter)     ║
║                C:MD \TELECODE                        (press Enter)     ║
║                C:CD \TELECODE                        (press Enter)     ║
║      Disk #1   C:COPY [floppy drive]:*.*             (press Enter)     ║
║      Disk #2   C:COPY [floppy drive]:*.*             (press Enter)     ║
║                C:PKZ TELCO1  (to extract the files)  (press Enter)     ║
║                                                                        ║
║                                                                        ║
║  Please note that all TELECODE files and TCRUN files need to be in     ║
║  the same directory.                                                   ║
║                                                                        ║
║  To print the documentation, type: COPY TELECODE.DOC PRN (Enter)       ║
║                                                                        ║
║  After reading the documentation, start TELECODE by typing:  TC (Enter)║
║                                                                        ║
║                                                                        ║
║                                        (c) COPYRIGHT 1991, PC-SIG INC. ║
╚════════════════════════════════════════════════════════════════════════╝

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2843

     Volume in drive A has no label
     Directory of A:\

    GO       BAT        29   9-23-91  11:22a
    GO       TXT      1826   9-25-91   1:53a
    TELCO1   ZIP    335390   7-18-91   3:08p
    FILE2843 TXT      1925   9-23-91  11:55a
            4 file(s)     339170 bytes
                           21504 bytes free
