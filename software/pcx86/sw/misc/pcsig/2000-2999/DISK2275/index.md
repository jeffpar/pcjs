---
layout: page
title: "PC-SIG Diskette Library (Disk #2275)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2275/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2275"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "PPRINT"

    An extensive file printing system with many configurable options.
    PPRINT has an external definition file which can be tailored to
    support any printer. Many options are available to the user: Headers,
    footers, line/page numbering, lines per inch, maximum amount to print,
    start page xx, end with page xx, and many more.  Great support for HP
    LaserJet II and other similar printers with a special option for
    printing C source code.
    
    PPRINT is special and unique because it is customizable to any printer
    type.  It also allows you to access printer features not normally
    available for printing normal text files.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE2275.TXT

{% raw %}
```
Disk No: 2275                                                           
Disk Title: PPRINT                                                      
PC-SIG Version: 5.0                                                     
                                                                        
Program Title: PPRINT                                                   
Author Version: 5.0                                                     
Author Registration: $20.00                                             
Special Requirements: A hard drive, and a printer.                      
                                                                        
An extensive file printing system with many configurable options. PPRINT
has an external definition file which can be tailored to support any    
printer. Many options are available to the user: Headers, footers,      
line/page numbering, lines per inch, maximum amount to print, start page
xx, end with page xx, and many more. Has great support for HP Laserjet  
II and other similar printers. Has special option for printing C source 
code.                                                                   
                                                                        
PPRINT is special and unique because it is customisable to any printer  
type.  It also allows you to access printer features not normally       
available for printing normal text files.                               
                                                                        
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989, 1990 PC-SIG, Inc.                                         
```
{% endraw %}

## PRINTDEF.DOC

{% raw %}
```
PPRINT printer definition files
-------------------------------

Following is a list of ready-made printer definition files to be
used with PPRINT.  To install PPRINT, copy the appropriate
filename to the directory of the hard disk containing PPRINT.EXE
giving it the name PPRINT.DEF

For example, to use an EPSON FX80 printer, use the following command
to set up pprint.

     COPY EPSNFX80.DEF PPRINT.DEF

Now just start PPRINT and you are on your way.

EPDX2035.DEF  --  For Epson DX20/35 printer
EPSNFX80.DEF  --  For Epson FX80 Printer
HPLASER.DEF   --  For HP Laserjet 500+ printer
PROPRINT.DEF  --  For IBM's Proprinter
GENERIC.DEF   --  For any printer.  Limits features of PPRINT.
IBMGRAPH.DEF  --  IBM Graphics messages
NECP2200.DEF  --  NEC P2200 24 pin pinwriter printer
NECP5XL.DEF   --  Nec P5 XL
PAN1080I.DEF  --  Panasonic 1080 and 1090
OKI92.DEF     --  OKDATA 92
PPRINT.DEF    --  Defalut pprint printer definition
HPLASER2.DEF  --  HPLaser LaserJet series II
CITIZEN.DEF   --  CITIZEN MSP 20,40,50

Other files exist.  Check .DEF file names for a clue to what ones exist.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2275

     Volume in drive A has no label
     Directory of A:\

    CITIZEN  DEF      4546   7-05-89   4:18p
    EPDX2035 DEF      1646   7-05-89   4:18p
    EPSNFX80 DEF      1546   7-05-89   4:19p
    GENERIC  DEF       950   7-21-90   6:52a
    HPLASER  DEF      4169   7-05-89   4:23p
    PPREADME 1ST       388   7-25-90  11:22p
    IBMGRAPH DEF      4255   7-05-89   4:19p
    NECP2200 DEF      4634   7-05-89   4:20p
    NECP5XL  DEF      1045   7-05-89   4:20p
    OKI92    DEF      2199   7-05-89   4:22p
    PAN1080I DEF      2976   7-05-89   4:22p
    PPRINT   DEF      2976   7-05-89   4:22p
    PPRINT   DOC     58558   7-25-90  11:20p
    PPRINT   EXE     84592   7-25-90  11:24p
    PRINTDEF DOC      1121   7-05-89   5:58p
    PROPRINT DEF      1075   7-05-89   4:23p
    HPLASER2 DEF      4657   7-24-90   8:28p
    FILE2275 TXT      2005  10-09-90   8:05a
    GO       BAT        34  10-09-90   8:04a
           19 file(s)     183372 bytes
                          128000 bytes free
