---
layout: page
title: "PC-SIG Diskette Library (Disk #2492)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2492/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2492"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## EDITOR.TXT

{% raw %}
```





          * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
          *                                                       *
          *                                                       *
          *         WELCOME TO THE FINANCIER TEXT EDITOR !        *
          *                                                       *
          *                                                       *
          * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
```
{% endraw %}

## FILE2492.TXT

{% raw %}
```
Disk No: 2492                                                           
Disk Title: Financier                                                   
PC-SIG Version: S1.3                                                    
                                                                        
Program Title: Financier                                                
Author Version: 1.2                                                     
Author Registration: $15                                                
Special Requirements: 512K RAM and CGA or EGA.                          
                                                                        
Use FINANCIER to calculate amortization schedules when considering that 
big purchase.                                                           
                                                                        
Schedules can be scrolled, printed, and stored in a file.  Load a       
previously stored schedule and include balloon payments, if necessary.  
Perform interest iteration, term determination and present value        
determination. Accrued and compound interest can be calculated along    
with bond present value, annuities, and sinking fund.                   
                                                                        
Directory listings are available if you forget a file name. Trend       
analysis and days between dates is also available. The output window    
keeps track of your calculations.  A calendar and calculator are        
available for quick date and calculation checks.                        
                                                                        
FINANCIER uses text-based windowing featuring pull-down menus and on-   
line help, providing an easy-to-use interface with a short learning     
curve.                                                                  
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## README.DOC

{% raw %}
```
                  F I N A N C I E R    1.2
                  ------------------------ 




TO INSTALL ON A HARD DISK SYSTEM MAKE DRIVE A: THE DEFAULT DRIVE.
INSERT THE FINANCIER DISK INTO DRIVE A: AND ENTER: 

                           SETUP 


THE SETUP PROGRAM CREATES A SUBDIRECTORY CALLED "FINANCE" 
AND COPIES THE NEEDED FILES TO THE NEWLY CREATED SUBDIRECTORY.
TO EXIT SETUP WITHOUT INSTALLING FINANCIER, PRESS Esc.

IF YOU ARE USING A FLOPPY SYSTEM MAKE A COPY OF THE DISKETTE 
AND USE THE COPY FOR EXECUTION. SINCE FINANCIER 1.2 WRITES 
TO DISK, THE DISKETTE MUST NOT BE COPY PROTECTED.

TO RUN, MAKE THE DIRECTORY THAT CONTAINS FINANCIER 1.2 THE 
DEFAULT DIRECTORY, TYPE "FINANCE" AND PRESS ENTER.


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2492

     Volume in drive A has no label
     Directory of A:\

    EDITOR   TXT       492   4-04-91   1:51p
    FINANCE  EXE    213648   4-04-91   1:38p
    INITIAL  DAT       504   4-09-91   4:07p
    MANUAL   DOC     13095   2-25-91   2:02p
    README   DOC       734   4-09-91   2:57p
    SETUP    EXE     60508   2-26-91   3:56p
    TREND    DAT       318   1-23-91  11:50a
    GO       BAT        63   4-26-91   9:12p
    FILE2492 TXT      2369   4-27-91  10:14a
    GO       TXT      1079   4-26-91   9:13p
           10 file(s)     292810 bytes
                           23552 bytes free
