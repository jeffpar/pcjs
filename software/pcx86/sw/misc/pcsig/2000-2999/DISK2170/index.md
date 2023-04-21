---
layout: page
title: "PC-SIG Diskette Library (Disk #2170)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2170/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2170"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "PC_UTIL #1 OF 2 (2171 ALSO)"

    A collection of C utilities that allow implementation of interrupt
    calls to DOS or to the BIOS of a PC, XT or AT.  PC-UTIL gives you the
    ability to control cursor movement, paint the screen, draw boxes and
    windows, control the keyboard buffer and much more.  The documentation
    correlates with, and references by page number, Peter Norton's "The New
    Peter Norton Programmer's Guide to the IBM PC and PS/2".
    
    Source and object files are supplied for several C compilers, for
    example QuickC, MicroSoft C and Let's C.  Programmers will find PC-UTIL
    routines to be a convenient addition to their programming tool
    libraries.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE2170.TXT

{% raw %}
```
Disk No: 2170                                                           
Disk Title: PC_Util #1 of 2 (2171 also)                                 
PC-SIG Version: S1                                                      
                                                                        
Program Title: PC_Util                                                  
Author Version: 1.02                                                    
Author Registration: $10.00                                             
Special Requirements: None.                                             
                                                                        
PC-UTIL is a collection of utilities which allow implementation of      
interrupt calls to DOS or to the ROM of a PC, XT or AT.  PC-UTIL        
gives you the ability to control cursor movement, paint the screen,     
draw boxes, control the keyboard buffer and much more.  The             
documentation correlates with and references by page number Peter       
Norton's "The New Peter Norton Programmer's Guide to the IBM PC and     
PS/2".  Object files are supplied for several C compilers, for          
example QuickC, MicroSoft C and Lattice C.  Programmers will find       
PC-UTIL routines to be a convenient addition to their programming       
tool libraries.                                                         
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2170

     Volume in drive A has no label
     Directory of A:\

    CC_EXER  BAT       128  11-12-89  11:15a
    PC_EXER  C        2048  11-11-89   5:14p
    PC_EXER  EXE     19472  11-12-89  11:15a
    PC_HEDR  H         768  11-13-89  12:55p
    GO       BAT        38  10-19-87   3:56p
    PC_UTIL1 OBJ      5172  11-12-89  10:14a
    PC_UTIL2 OBJ      4926  11-12-89  10:38a
    PC_UTIL3 OBJ      5130  11-12-89  10:58a
    PC_UTIL4 OBJ      4884  11-12-89  10:58a
    PC_UTIL5 OBJ      5172  11-12-89  10:58a
    PC_UTIL6 OBJ      4926  11-12-89  10:58a
    READ     ME       1664  11-13-89   1:19p
    PC_SUMRY         10368  11-13-89  12:55p
    GO       TXT       386   4-26-90   5:34a
    PC_UTIL  C       21120  11-11-89   2:31p
    FILE2170 TXT      1851   4-26-90   6:57p
           16 file(s)      88053 bytes
                           67072 bytes free
