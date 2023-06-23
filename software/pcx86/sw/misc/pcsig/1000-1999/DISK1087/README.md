---
layout: page
title: "PC-SIG Diskette Library (Disk #1087)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1087/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1087"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "DRIVECHK & ALIGN"

    This package should occupy a prominent place on the reference shelves
    of any computer repairman!  Just about everything you'd ever want or
    need to know about disk drive diagnosis and adjustment is included in
    DRIVECHK & ALIGN.  The diagnostics provided are quite easy to learn and
    operate.  However, be warned that both special tools and some level of
    hands-on technical experience in the repair field are necessary to use
    all the power built into this package!
    
    The two separate documentation packages included are very thorough and
    obviously written by an expert in the field of drive repair and
    adjustment.  Subjects are approached in an understandable step-by-step
    manner.  You can't go wrong at the price, even if you're a rookie who
    only uses the program for periodic tests of proper drive function.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1087.TXT

{% raw %}
```
Disk No: 1087                                                           
Disk Title: Drivechk & Align                                            
PC-SIG Version: S2.1                                                    
                                                                        
Program Title: Drivechk & Align                                         
Author Version: 4.4                                                     
Author Registration: None.                                              
Special Requirements: Xidex/Dysan diagnostic diskettes.                 
                                                                        
This package should occupy a prominent place on the reference shelves   
of any computer repairman!  Just about everything you'd ever want or    
need to know about disk drive diagnosis and adjustment is included in   
DRIVECHK & ALIGN.  The diagnostics provided are quite easy to learn     
and operate.  However, be warned that both special tools and some level 
of hands-on technical experience in the repair field are necessary to   
use all the power built into this package!                              
                                                                        
The two separate documentation packages included are very thorough and  
obviously written by an expert in the field of drive repair and         
adjustment.  Subjects are approached in an understandable step-by-step  
manner.  You can't go wrong at the price, even if you're a rookie who   
only uses the program for periodic tests of proper drive function.      
                                                                        
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
║                <<<<  Disk No 1087 DRIVECHK & ALIGN  >>>>                ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To print the documentation for DRIVECHK, type: PRINTDOC (press enter)   ║
║                                                                         ║
║ To run the program DRIVECHK, type:  DRIVECHK (press enter)              ║
║                                                                         ║
║ To print the documentation for ALIGN, type: MANUAL (press enter)        ║
║                                                                         ║
║ To run the program ALIGN, type: ALIGN (press enter)                     ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## OVERVIEW.DOC

{% raw %}
```

          DRIVECHK 4.4, 5/30/89  and  ALIGN 3.0, 6/2/89
        (c) Copyright John L. Dickinson 1983, 1987, 1989
        See complete documentation for copying provisions.

   DRIVECHK (Drive Check) tests and diagnoses diskette drives.
   ALIGN helps service personnel adjust and repair diskette drives.

   Each program works in conjunction with a separately purchased
   Xidex/Dysan diskette that is specially formatted and contains no
   programs.

DRIVECHK Overview

   DRIVECHK graphically displays alignment and other diskette drive
   characteristics without the need for an oscilloscope.  A drive can
   be checked in just a few minutes without removing the PC's cover.

   DRIVECHK can be used to periodically check a drive's operation,
   prove a suspected defective drive is bad, or as a final check
   after repairs or adjustments.  The program is easy to use, but the
   results are more suitable for technical hobbyists and service
   personnel than casual PC users.

   DRIVECHK requires a Xidex/Dysan Digital Diagnostic Disk (DDD).
   The Digital Diagnostic Disk is specially formatted and precisely
   recorded, but doesn't contain any programs.

   DRIVECHK runs under IBM PC-DOS version 2.0 or later on any IBM
   Personal Computer with at least 128K and an 80 character display.

   See DRIVECHK.DOC for complete documentation.

ALIGN Overview

   ALIGN allows you to move a diskette drive head to absolute track
   locations and operate the drive while checks and adjustments are
   made.

   ALIGN is one of several tools needed to adjust and service
   diskette drives.  ALIGN does not attempt to teach you how to do an
   alignment, but it isn't difficult if you have what you need.

   In addition to this program, you need service information, an
   oscilloscope and a Xidex/Dysan Analog Alignment Diskette (AAD) for
   the drive to be serviced.  Extension or external diskette drive
   signal and power cables are very helpful.  An Analog Alignment
   Diskette (AAD) contains NO data, just special waveforms and can't
   be copied.  You can try the program using any diskette.

   ALIGN runs under IBM PC-DOS version 2.0 or later on any IBM
   Personal Computer with 128K and an 80 character display except
   the PCjr.  The diskette drives to be adjusted are connected to the
   PC in the usual manner.

   See ALIGN.DOC for complete documentation.

File Descriptions:

   OVERVIEW.DOC    (This document) Short overview of DRIVECHK and ALIGN.
   DRIVECHK.DOC    Documentation for DRIVECHK.EXE
   DRIVECHK.EXE    Diskette drive diagnostic program.
   ALIGN.DOC       Documentation for ALIGN.EXE
   ALIGN.EXE       Diskette drive alignment program.


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1087

     Volume in drive A has no label
     Directory of A:\

    ALIGN    DOC     46042   1-28-90   9:07p
    ALIGN    EXE     62216   6-02-89   9:38p
    DRIVECHK DOC     54570   1-28-90  10:03p
    DRIVECHK EXE     73276   5-30-89   8:17p
    FILE1087 TXT      2073   3-14-90   2:41p
    GO       BAT        38  10-19-87   3:56p
    GO       TXT       848   6-06-88   1:23p
    MANUAL   BAT       161   6-06-88   1:24p
    OVERVIEW DOC      2743   6-16-89   8:25p
    PRINTDOC BAT       167   6-16-89   8:22p
           10 file(s)     242134 bytes
                           74752 bytes free
