---
layout: page
title: "PC-SIG Diskette Library (Disk #1842)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1842/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1842"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "REFORMAT/RSTPRINT"

    REFORMAT will reformat a TurboBASIC source file by removing extra line
    feeds so that there is only one blank line between statements.  Blanks
    in sets of 8 will be replaced with tabs to save space, and some other
    spaces will be removed.  Also, all characters not in quotes will be
    changed to upper case.  Try this program on a few work files first to be
    sure you like the way it formats a program's source code.
    
    The on/off switch is often the first thing to fail with computer
    products; so quit shortening the life of your printer when RSTPRINT will
    reset your printer without ever reaching for the switch.  This easy to
    use program quickly resets any printer on a parallel port on your
    system.  It does not check for any other operation, just issues a reset.
    
    RSTPRINT is unique in that it does not require the printer to be ready,
    or on-line.  If the printer is powered on and not ready, off-line, it
    will be set to a ready condition, on-line, after RSTPRINT is run.
    RSTPRINT causes the printer to do a power-on reset, which is the same as
    turning the printer power off and back on.  RSTPRINT is an excellent
    program to use after you have done some fancy printing because it sets
    the printer back to its default settings.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1842.TXT

{% raw %}
```
Disk No: 1842                                                           
Disk Title: Reformat/RstPrint                                           
PC-SIG Version: S1.2                                                    
                                                                        
Program Title: Reformat                                                 
Author Version: 05/90                                                   
Author Registration: $15.00                                             
Special Requirements: CGA.                                              
                                                                        
REFORMAT will reformat a TurboBASIC source file by removing extra line  
feeds so that there is only one blank line between statements.  Blanks  
in sets of 8 will be replaced with tabs to save space, and some other   
spaces will be removed.  Also, all characters not in quotes will be     
changed to upper case.  Try this program on a few work files first to be
sure you like the way it formats a program's source code.               
Program Title: Rstprint                                                 
Author Version: 2.0                                                     
Author Registration: $15.00                                             
Special Requirements: CGA.                                              
                                                                        
The on/off switch is often the first thing to fail with computer        
products; so quit shortening the life of your printer when RSTPRINT will
reset your printer without ever reaching for the switch.  This easy to  
use program quickly resets any printer on a parallel port on your       
system.  It does not check for any other operation, just issues a reset.
                                                                        
RSTPRINT is unique in that it does not require the printer to be ready, 
or on-line.  If the printer is powered on and not ready, off-line, it   
will be set to a ready condition, on-line, after RSTPRINT is run.       
RSTPRINT causes the printer to do a power-on reset, which is the same as
turning the printer power off and back on.  RSTPRINT is an excellent    
program to use after you have done some fancy printing because it sets  
the printer back to its default settings.                               
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1842

     Volume in drive A has no label
     Directory of A:\

    GO       BAT        38   1-01-80   1:37a
    GO       TXT       885   1-01-80   1:55a
    FILE1842 TXT      2887   7-13-90  11:28a
    COPYRITE IFO       834   5-07-90   8:49p
    RSTPRINT DOC     13754   5-30-90   7:19p
    RSTPRINT EXE     37982   5-30-90   7:15p
    COPYRI~1 IFO       834   5-07-90   8:49p
    REFORMAT DOC     12820   5-30-90   9:24p
    REFORMAT EXE     64679   5-30-90   9:05p
            9 file(s)     134713 bytes
                           23040 bytes free
