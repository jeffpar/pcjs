---
layout: page
title: "PC-SIG Diskette Library (Disk #2610)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2610/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2610"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## FILE2610.TXT

{% raw %}
```
Disk No: 2610                                                           
Disk Title: Winfract (Fractint for Windows)                             
PC-SIG Version: S1                                                      
                                                                        
Program Title: Winfract  (Fractint for Windows)                         
Author Version: 3.1                                                     
Author Registration: Copyrighted Freeware.                              
Special Requirements: Windows 3.0 and CGA or Better.                    
                                                                        
                                                                        
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
║                <<<<  PC-SIG Disk #2304  FRACTINT  >>>>                  ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To view the readme file, type: TYPE README.WIN   (press Enter)          ║
║                                                                         ║
║ To install the program, create a directory on your hard drive (C,D,...):║
║                       C:MD \FRACTINT  (press Enter)                     ║
║                       C:CD \FRACTINT  (press Enter)                     ║
║                       A:PKUNZIP WINFRA C:\FRACTINT  (press Enter)       ║
║                                                                         ║
║ To print documentation and instructions, type:                          ║
║                       COPY WINFRACT.DOC PRN                             ║
║                                                                         ║
║ To start the program FRACTINT, type:  WIN WINFRACT (press ENTER)        ║
║                                                                         ║
║                                       (c) COPYRIGHT 1991, PC-SIG INC.   ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## WINFRACT.DOC

{% raw %}
```
This is version 3.1 of Fractint for Windows.  Fractint for Windows 
requires Microsoft Windows version 3.0 running in either Standard or
386-Enhanced mode (the program is flat out too big to run in "Real Mode").

This file is only here to ease your mind a bit ("what, no DOC file?"). 
Other than this file, the only documentation is in the on-line Help screens.

By now, you have discovered that the ZIP file consists of WINFRACT.EXE,
WINFRACT.HLP, and a few FRM, MAP, IFS and L files.  WINFRACT.EXE and
WINFRACT.HLP are required to run the program and obtain online Help (and
you *will* need to look at the on-line help, as it's the only documentation
you are ever gonna see for this release), and should be copied to
the same directory.

The FRM, MAP, and IFS files are direct copies of files in version 15.1
of Fractint-for-DOS and are only required for specific fractal types
(if you already *have* version 15.1 of FFD, you can use its copies
of these files instead).

Just unZIP these files into some convenient directory, and either call
the program manually using the File Manager or the "File Run" option
of the program manager, or install it permanently using the "File New"
option of the Program Manager.

Enjoy.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2610

     Volume in drive A has no label
     Directory of A:\

    WINFRA   ZIP    183219  12-22-90   9:51a
    README   WIN       249   4-17-91   8:44a
    GO       BAT        38   4-17-91   8:59a
    GO       TXT      1310   4-17-91   9:27a
    PKUNZIP  EXE     19044   4-03-91   8:30a
    FILE2610 TXT      1111   4-17-91   9:06a
            6 file(s)     204971 bytes
                          113664 bytes free
