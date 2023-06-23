---
layout: page
title: "PC-SIG Diskette Library (Disk #42)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0042/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0042"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "KERMIT"

    KERMIT implements a file transfer protocol for the MS/PC-DOS operating
    system family.  The package has a complete program for IBM-specific
    machines, as well as generic MS-DOS selections.  The Assembly language
    source code comes with the package.
    
    KERMIT performs almost complete emulation of the DEC VT-102 terminal at
    speeds up to 19,200 baud.  Full-speed 9600 baud operation is possible on
    4.77Mhz systems.  KERMIT is a popular file transfer protocol on many
    mini and mainframe computers, used daily in schools, colleges and many
    businesses.
    
    Features:
    
    ~ Local operation
    
    ~ Remote operation
    
    ~ Binary file transfer
    
    ~ Filename collision avoidance
    
    ~ Wildcard sending
    
    ~ Eigth-bit and repeat-count prefixing
    
    ~ Time out
    
    ~ Alternate block checks
    
    ~ Terminal emulation
    
    ~ Session logging
    
    ~ Local file management
    
    ~ Advanced commands for servers
    
    ~ Command macros
    File Descriptions:
    
    First Disk Contains:
    *        ASM  Kermit assembly language source code (12 files).
    README        List of kermit files.
    Second Disk Contains:
    KERMIT   EXE  The Kermit program itself, for the IBM PC family.
    GERMIT   EXE  Generic MS-DOS version of Kermit.
    MSKERMIT INI  A sample initialization file for KERMIT.EXE.
    MSKERM   HLP  A summary of MS-DOS Kermit commands.
    MSKERM   BWR  ``Beware File'' -- known bugs and limitations, notes.
    MSR230   UPD  Version 2.30 Release notes.
    MSBPCT   BAS  BASIC program to decode .BOO files (for new releases).
    MSBPCT   C    A C-language version of the same program (faster).
    MSBPCT   EXE  Runnable version of MSBPCT.C.
    MSBMKB   C    C program for making .EXE files into .BOO files.
    MSBMKB   EXE  Runnable version of MSBMKB.C.
    KERMIT   PIF  File used by MSKERM.EXE.
    MSBPCT   ASM  Assembly version of MSBPCT.EXE.
    MSKERM   ABR  File used by MSKERM.EXE.
    SCANCHEK C    Source for SCANCHEK.EXE.
    SCANCHEK EXE  Keyboard testing program.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE0042.TXT

{% raw %}
```
Disk No:   42                                                           
Disk Title: Kermit 
PC-SIG Version: S3.3                                                    
                                                                        
Program Title: KERMIT                                                   
Author Version: 3.0                                                     
Author Registration: $29.95                                             
Special Requirements: Modem.                                            
                                                                        
KERMIT implements a file transfer protocol for the MS/PC-DOS operating  
system family.  The package has a complete program for IBM-specific     
machines, as well as generic MS-DOS selections.  The Assembly language  
source code comes with the package.                                     
                                                                        
KERMIT performs almost complete emulation of the DEC VT-102 terminal at 
speeds up to 19,200 baud.  Full-speed 9600 baud operation is possible on
4.77Mhz systems.  KERMIT is a popular file transfer protocol on many    
mini and mainframe computers, used daily in schools, colleges and many  
businesses.                                                             
                                                                        
Features:                                                               
                                                                        
~ Local operation                                                       
                                                                        
~ Remote operation                                                      
                                                                        
~ Binary file transfer                                                  
                                                                        
~ Filename collision avoidance                                          
                                                                        
~ Wildcard sending                                                      
                                                                        
~ Eigth-bit and repeat-count prefixing                                  
                                                                        
~ Time out                                                              
                                                                        
~ Alternate block checks                                                
                                                                        
~ Terminal emulation                                                    
                                                                        
~ Session logging                                                       
                                                                        
~ Local file management                                                 
                                                                        
~ Advanced commands for servers                                         
                                                                        
~ Command macros                                                        
                                                                        
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
║                 <<<<  PC-SIG Disk #42  KERMIT   >>>>                    ║
╠═════════════════════════════════════════════════════════════════════════╣
║  NOTE:  The manual for this version of KERMIT is provided in hard copy  ║
║         form from the author upon registration.                         ║
║                                                                         ║
║  To print the help file on this disk, type:                             ║
║                  COPY MSKERM.HLP PRN (press Enter)                      ║
║                                                                         ║
║                                                                         ║
║                                                                         ║
║                                           Copyright 1990, PC-SIG, Inc.  ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0042

     Volume in drive A has no label
     Directory of A:\

    MSVIBM   EXE    131392   2-19-90   7:30p
    MSR300   UPD     20338   2-19-90   7:35p
    MSKERM   HLP     35263   2-19-90   7:39p
    MSKERM   BWR     27985   2-19-90   7:42p
    MSKERMIT INI      4760   2-19-90   8:07p
    GO       BAT        40   1-01-80   6:00a
    FILE0042 TXT      3870  11-12-90   1:46a
    GO       TXT      1002  11-09-90   6:21a
            8 file(s)     224650 bytes
                           94208 bytes free
