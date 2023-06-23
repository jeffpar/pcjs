---
layout: page
title: "PC-SIG Diskette Library (Disk #2583)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2583/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2583"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## FILE2583.TXT

{% raw %}
```
Disk No: 2583                                                           
Disk Title: TesSeRact CXL User Interf. Dev. Sys. 1/2                    
PC-SIG Version: S1.0                                                    
                                                                        
Program Title: TesSeract CXL User Interface Development System          
Author Version: 5.5                                                     
Author Registration: $50.00                                             
Special Requirements: A hard disk and C compiler.                       
                                                                        
The TCXL library is a supplement to your C compiler's standard run-time 
library.  It contains over 375 multipurpose functions which provide a   
variety of capabilities.  It is available for several popular C         
compilers including Microsoft C, QuickC, Turbo C/C++, and Zortech C/C++.
These routines were written in highly-optimized C and assembler code,   
ensuring maximum program speed, minimum program size, easy modification,
and increased portability.                                              
                                                                        
Features include:                                                       
                                                                        
 ~ Customized Bar Menus.  Create pop-up, pull-down, and Lotus-style     
   menus, as well as any other custom menu that you can define. Features
   full mouse support, nonselectable items, global hot keys, and more.  
                                                                        
 ~ Multi-Field Formatted Data Entry.  Create data entry forms with one  
   or more input fields.  You have full control over user input and can 
   tie validation functions into each input field.                      
                                                                        
 ~ Context-Sensitive Help.  Help files, indexed for speed and category, 
   can be cross-referenced.  Help can be applied at the global, window, 
   menu item, and input field levels.                                   
                                                                        
 ~ Powerful Selection Capabilities.  TCXL has scrollable pick menus to  
   select from a list of items.  Full mouse support and scroll bars.    
   There is also a dedicated file picker that uses this feature to let  
   you pick from a list of files.                                       
                                                                        
 ~ Full-Featured Window Control allows as many open windows as memory   
   permits.  Windows can be stacked, tiled, shadowed, moved, resized,   
   and changed in many ways.  There are more than 75 functions designed 
   to handle windowed output.                                           
                                                                        
 ~ User-defined Input Features TCXL's Input System provides a consistent
   interface between the hardware-dependent input devices and TCXL's    
   output systems.  This system features both formatted and unformatted 
   user input, with varying levels of output control.                   
                                                                        
 ~ Nonstandard Video Sizes EGA 43 and VGA 50-line modes are fully       
   supported.                                                           
                                                                        
 ~ Expanded/Extended Memory TCXL has a full set of routines for access  
   to Expanded Memory through the EMS specification, and for access to  
   Extended Memory through the XMS specification.  TCXL also recognizes 
   the presence of advanced memory management schemes such as VCPI and  
   DPMI.                                                                
                                                                        
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
║<< PC-SIG Disk #2583  TESSERACT CXL USER INTERFACE DEVELOPMENT SYSTEM >> ║
║                     Disk #1 of 2  (also #2584)                          ║
╠═════════════════════════════════════════════════════════════════════════╣
║                                                                         ║
║  Select the hard disk drive onto which you wish to place the TCXL       ║
║  System and change to that drive [C:].                                  ║
║                                                                         ║
║  To begin installing the program, and with this disk in your floppy     ║
║  drive [A:], type from your hard drive:                                 ║
║                       A:COPYTCXL A  (press Enter)                       ║
║                                                                         ║
║  Copy the files from the two floppies onto the new hard drive           ║
║  subdirectory and then from that directory, type:  START  (press Enter) ║
║                                                                         ║
║                                                                         ║
║                                           Copyright 1991, PC-SIG, Inc.  ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2583

     Volume in drive A has no label
     Directory of A:\

    COPYTCXL BAT      2910  10-01-90
    TCXL_LIB EXE    254428  10-01-90
    GO       BAT        38   1-31-91  12:58a
    GO       TXT      1387   3-01-91  12:40a
    FILE2583 TXT      4441   3-18-91  11:28a
            5 file(s)     263204 bytes
                           56320 bytes free
