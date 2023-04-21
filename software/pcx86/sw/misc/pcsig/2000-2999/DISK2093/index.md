---
layout: page
title: "PC-SIG Diskette Library (Disk #2093)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2093/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2093"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "FLASHPAC PASCAL LIB 2 OF 2 (1982)"

    These low level Turbo Pascal routines access the video display,
    keyboard, printer, disk, mouse devices, and a couple of DOS functions.
    These routines are not intended to replace the standard features of
    Turbo Pascal, but add to and extend the Turbo Pascal programming
    environment for the MS-DOS operating system.
    
    To simplify the use of these routines, the number of global variables
    needed for this library has been kept to a minimum.  All functions in
    the library were written in Assembly language using the Pascal
    parameter passing conventions.
    
    FPDISK supports several DOS function calls that use byte streams when
    accessing disk files.  FPKBD supports BIOS and DOS keyboard function
    calls.  FPMOUSE supports basic mouse functions, including a mouse event
    handler.  FPPRT supports BIOS printer functions.  FPVIDEO consists of
    several video routines that provide direct access to the video display.
    Routines include saving and restoring the screen, framing windows,
    setting the absolute position of the cursor, and more.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE2093.TXT

{% raw %}
```
Disk No: 2093                                                           
Disk Title: FlashPac Pascal Library 2 of 2 (1982)                       
PC-SIG Version: S1.2                                                    
                                                                        
Program Title: FlashPac Pascal Library                                  
Author Version: 3.21                                                    
Author Registration: $50.00                                             
Special Requirements: A version of Turbo Pascal.                        
                                                                        
These low level Turbo Pascal routines access the video display,         
keyboard, printer, disk, mouse devices, and a couple of DOS functions.  
These routines are not intended to replace the standard features of     
Turbo Pascal, but add to and extend the Turbo Pascal programming        
environment for the MS-DOS operating system.                            
                                                                        
To simplify the use of these routines, the number of global variables   
needed for this library has been kept to a minimum.  All functions in   
the library were written in Assembly language using the Pascal          
parameter passing conventions.                                          
                                                                        
FPDISK supports several DOS function calls that use byte streams when   
accessing disk files.  FPKBD supports BIOS and DOS keyboard function    
calls.  FPMOUSE supports basic mouse functions, including a mouse event 
handler.  FPPRT supports BIOS printer functions.  FPVIDEO consists of   
several video routines that provide direct access to the video display. 
Routines include saving and restoring the screen, framing windows,      
setting the absolute position of the cursor, and more.                  
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2093

     Volume in drive A has no label
     Directory of A:\

    GO       TXT       652   1-01-80  11:52a
    FILE2093 TXT      2443   7-13-90  11:45p
    DEMO     EXE     28171   3-15-90   3:21a
    DISKDEMO EXE     12886   3-15-90   3:21a
    KBDDEMO  EXE     14798   3-15-90   3:21a
    PRTDEMO  EXE     12733   3-15-90   3:21a
    VIODEMO  EXE     53646   3-15-90   3:21a
    DEMO     PAS     17036   3-15-90   3:21a
    DISKDEMO PAS      2623   3-15-90   3:21a
    KBDDEMO  PAS      4521   3-15-90   3:21a
    PRTDEMO  PAS      3222   3-15-90   3:21a
    VIODEMO  PAS     32163   3-15-90   3:21a
    FPDISK   TPU      3120   3-15-90   3:21a
    FPDOS    TPU      1392   3-15-90   3:21a
    FPKBD    TPU      1152   3-15-90   3:21a
    FPMOUSE  TPU      2816   3-15-90   3:21a
    FPPRT    TPU       640   3-15-90   3:21a
    FPVIDEO  TPU     12208   3-15-90   3:21a
    FPGETKEY TPU      1232   3-15-90   3:21a
    FPDISK~1 TPU      3712   3-15-90   3:21a
    FPDOS~1  TPU      2448   3-15-90   3:21a
    FPKBD~1  TPU      1600   3-15-90   3:21a
    FPMOUS~1 TPU      3696   3-15-90   3:21a
    FPPRT~1  TPU      1040   3-15-90   3:21a
    FPVIDE~1 TPU     13744   3-15-90   3:21a
    FPGETK~1 TPU      1488   3-15-90   3:21a
    FPDISK~2 TPU      3664   3-15-90   3:21a
    FPDOS~2  TPU      2416   3-15-90   3:21a
    FPGETK~2 TPU      1600   3-15-90   3:21a
    FPKBD~2  TPU      1664   3-15-90   3:21a
    FPMOUS~2 TPU      3600   3-15-90   3:21a
    FPPRT~2  TPU      1056   3-15-90   3:21a
    FPVIDE~2 TPU     13472   3-15-90   3:21a
           33 file(s)     262654 bytes
                           40960 bytes free
