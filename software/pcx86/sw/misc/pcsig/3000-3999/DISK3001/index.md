---
layout: page
title: "PC-SIG Diskette Library (Disk #3001)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3001/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3001"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}
{% comment %}samples_begin{% endcomment %}

## FILE3001.TXT

{% raw %}
```
Disk No: 3001                                                           
Disk Title: SFWare Font Utilities #1 of 4                               
PC-SIG Version: S1.1A                                                   
                                                                        
Program Title: Sfware Font Utilities                                    
Author Version: 1.0                                                     
Author Registration: $60.00                                             
Special Requirements: A hard drive & one HPLaserJet softfont file. HP la
                                                                        
SFWARE FONT UTILITIES gives you the tools to download, rotate, compress,
expand, view, and perform special effects on the PCL softfonts used with
your Hewlett-Packard laser printer.  SFWARE is not a collection of      
fonts, but a set of font manipulation utilities.  It can even be set up 
to access the utilities from an integrated menu system.                 
                                                                        
If you don't already know, softfonts are fonts stored in files on your  
computer and sent to the memory of your laser printer each time you turn
it on.  Downloading softfonts to a laser printer is something lots of   
programs do, but SFWARE does a lot more.  It lets you take any existing 
font and use SFWARE's special effects to create some new, eye-catching  
fonts.                                                                  
                                                                        
The special effects available through SFWARE include bold, fill, convert
to fixed spacing, halftone, hollow, invert, mirror, outline, convert to 
proportional spacing, resize, reverse, shade, shadow, slant, stripe,    
3-D, hollow-3-D, and filled-3-D effects.  The effects can be tailored   
and combined in countless ways.  For example, you could take an existing
18-point Times font and make it hollow, slant it, and put a 3-D shadow  
behind it.  Before you actually use these fonts you can view them       
on-screen, or print reference sheets.                                   
                                                                        
Another added feature is the ability to use fonts on older HP laser     
printers.  Older printers don't normally support compressed fonts, but  
SFWARE can expand them for easy use.  In addition, for older HP printers
that won't do this automatically, SFWARE can change a portrait font to  
landscape.  This is a quick, easy way to create a big font collection   
from a small set of fonts.                                              
                                                                        
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
║           <<<<  PC-SIG Disk #3001  SFWARE FONT UTILITIES  >>>>          ║
║                  Disk 1 of 4 (also #3016, #3017, #3018)                 ║
╠═════════════════════════════════════════════════════════════════════════╣
║  Insert disk 2 (#3016) into drive A.                                    ║
║  Create a subdirectory on your hard drive.  From the subdirectory on    ║
║  the hard drive type:                                                   ║
║          COPY A:PKUNZIP.EXE  (press Enter)                              ║
║          PKUNZIP A:SFW11AP2  (press Enter)                              ║
║  Then insert disk 1 (#3001) into drive A and type:                      ║
║          PKUNZIP A:SFW11AP1  (press Enter)                              ║
║  Then insert disk 3 (#3017) into drive A and type:                      ║
║          PKUNZIP A:SFW11AD1  (press Enter)                              ║
║  Then insert disk 4 (#3018) into drive A and type:                      ║
║          PKUNZIP A:SFW11AD2  (press Enter)                              ║
║          PKUNZIP A:SFW11AEX  (press Enter)                              ║
║  To print program instructions, type:  COPY READ.ME PRN  (press Enter)  ║
║  To print printing instructions, type:  COPY PRINTDOC PRN  (Enter)      ║
║  To print registration form, type:  COPY ORDER.FRM  (press Enter)       ║
║                                           Copyright 1992, PC-SIG Inc.   ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3001

     Volume in drive A has no label
     Directory of A:\

    SFW11AP1 ZIP    343040   4-30-92   3:05p
    FILE3001 TXT      3183   5-01-92   3:30p
    GO       BAT        38   1-31-91  12:58a
    GO       TXT      1617   1-01-80   2:17a
            4 file(s)     347878 bytes
                           12288 bytes free
