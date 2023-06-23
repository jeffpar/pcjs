---
layout: page
title: "PC-SIG Diskette Library (Disk #2306)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2306/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2306"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "FLASHPAC C LIBRARY 2 OF 2 (1872 ALSO)"

    Add blinding speed and style to your C programs with the FLASHPAC C
    LIBRARY.  Your programs will run faster and look better than anything
    you can buy.
    
    The FLASHPAC C LIBRARY provides C programmers with low level routines
    that access the video display, keyboard, printer, disk, and mouse
    devices.  These routines are not intended to replace the standard
    features of C.  They were created to add to and extend the C
    programming environment for MS-DOS and PC-DOS operating systems.  In
    keeping with good programming practice, global variables within the
    Library have been kept to a minimum.  All the functions in the Library
    are written in assembly language, for speed, using the Pascal
    parameter passing conventions.
    
    The FLASHPAC C LIBRARY contains routines for DISK -- many DOS
    functions that use byte STRAMS when accessing the disk files; VIDEO --
    direct access for saving and restoring the screen, framing windows,
    cursor control, etc.; MOUSE -- basic support plus an event handler;
    BIOS print functions; and both DOS and BIOS keyboard functions.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE2306.TXT

{% raw %}
```
Disk No: 2306                                                           
Disk Title: FlashPac C Library 2 of 2 (1872 also)                       
PC-SIG Version: S1.2                                                    
                                                                        
Program Title: FlashPac C Library                                       
Author Version: 3.25                                                    
Author Registration: $50.00                                             
Special Requirements: None.                                             
                                                                        
Add blinding speed and style to your C programs with the FLASHPAC C     
LIBRARY.  Your programs will run faster and look better than anything   
you can buy.                                                            
                                                                        
The FLASHPAC C LIBRARY provides C programmers with low level routines   
that access the video display, keyboard, printer, disk, and mouse       
devices.  These routines are not intended to replace the standard       
features of C.  They were created to add to and extend the C programming
environment for MS-DOS and PC-DOS operating systems.  In keeping with   
good programming practice, global variables within the Library have been
kept to a minimum.  All the functions in the Library are written in     
assembly language, for speed, using the Pascal parameter passing        
conventions.                                                            
                                                                        
The FLASHPAC C LIBRARY contains routines for DISK -- many DOS functions 
that use byte streams when accessing the disk files; VIDEO -- direct    
access for saving and restoring the screen, framing windows, cursor     
control, etc.; MOUSE -- basic support plus an event handler; BIOS print 
functions; and both DOS and BIOS keyboard functions.                    
                                                                        
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
║       <<<<  Disk #2306  FLASHPAC C LIRARY  2 of 2 (also 1872)  >>>>     ║
╠═════════════════════════════════════════════════════════════════════════╣
║                                                                         ║
║ To start using the program, insert disk #1872 and type:                 ║
║                      COPY README.DOC PRN (press enter)                  ║
║                                                                         ║
╚═════════════════════════════════════════════════════════════════════════╝
(c) Copyright 1990, PC-SIG Inc.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2306

     Volume in drive A has no label
     Directory of A:\

    ALPHA    H       13647   5-15-90   3:25a
    ALPHA    LIB     23349   5-15-90   3:25a
    CH7_1    DOC     18688   5-15-90   3:25a
    CH7_2    DOC     22272   5-15-90   3:25a
    GO       TXT       652   1-01-80  12:37a
    FILE2306 TXT      2517   7-13-90  11:24p
    GO       BAT        37   6-21-90  10:39a
            7 file(s)      81162 bytes
                           77312 bytes free
