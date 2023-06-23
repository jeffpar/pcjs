---
layout: page
title: "PC-SIG Diskette Library (Disk #2510)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2510/
preview: https://pcsigdisks.pcjs.org/pcx86/sw/misc/pcsig/2000-2999/DISK2510/DISK2510.jpg
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2510"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## FILE2510.TXT

{% raw %}
```
Disk No: 2510                                                           
Disk Title: PCBreeze II                                                 
PC-SIG Version: S1                                                      
                                                                        
Program Title: PCBreeze II                                              
Author Version: 2.1                                                     
Author Registration: $95.00 Australian                                  
Special Requirements: 384K RAM and CGA, EGA, VGA or Hercules graphics.  
                                                                        
PCBREEZE II is a sophisticated yet easy-to-use tool for designing       
printed circuit boards (PCB).  It lets you create, view, modify, and    
output any one or two layer PCB of up to 300 square inches (using a 50  
mil grid system).  It has two text layers for each PCB layer and a      
common silkscreen layer.  Most operations can be performed directly     
through the keyboard or by pop-up menus.  Microsoft compatible mice are 
also supported.                                                         
                                                                        
Simply specify the component pads and use the cursor keys to draw the   
traces.  Pan and zoom to any part of the drawing.  Move, copy, or delete
any section of the art work.  Sections can be saved to disk to create   
libraries and be used repeatedly.  Design is simple with the use of its 
auto-routing facilities which allow an entire board to be routed by     
PCBREEZE alone, or interactively edited and autorouted to get precise   
control over the art work generated.                                    
                                                                        
Finally, the results can be output to a plotter or Postscript printer   
with the included plotting utility.  PCBREEZE II can also produce       
prototype quality plots on a Epson FX/LQ or compatible printer.         
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989-1991 PC-SIG, Inc.                                         
```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                 <<<<  DISK #2510 PCBBREEZE II  >>>>                     ║
╠═════════════════════════════════════════════════════════════════════════╣
║                                                                         ║
║  To start the program, type: PCBREEZE                                   ║
║                                                                         ║
║  To view instructions on printing the documentation, type: README       ║
║                                                                         ║
║  To read or print the registration form, type: READFRM                  ║
║                                                PRINTFRM                 ║
╚═════════════════════════════════════════════════════════════════════════╝
(c) Copyright 1990-1991, PC-SIG Inc.
```
{% endraw %}

## PCBREEZE.TXT

{% raw %}
```
                         PCBreeze II
                               
            (Printed Circuit Board Artwork Editor)
                               
                              by
                               
                        KEPIC Pty Ltd
                               
                               
                               
                               
                               
                               
                       Reference guide
                   (Shareware Version 2.1)
                               
                               
                               
                               
                               
                               
                               
                               
                               
                               
      KEPIC Pty. Ltd. reserves the right to make changes
   in the product PCBreeze at any time and without notice.
                               
                               
                               
                               
                               
            (C) Copywrite 1987-1990 KEPIC Pty Ltd
                               
  PCBreeze is Copywrited. All rights reserved Worldwide. No
     portion of this product may be copied, photocopied,
   reproduced, translated or reduced to any medium or form
     without prior consent in writing from KEPIC Pty Ltd
                               
--------------------------------------------------------------
                               
                           Contents


Introduction
Hardware Supported
Software License Agreement
Chapter 1:Before Use
          Backups
          Files on distribution disk
          Installation - working copies
          Printed Circuit Board Layout
Chapter 2:Starting PCBreeze
          Quitting PCBreeze
Chapter 3:Using PCBreeze
          Status line
          Basic editing
          Mouse Support
          Entering Commands
          PCBreeze II commands
Chapter 4:Text & Component Overlay
Chapter 5:List Autorouting
Chapter 6:Plotter Output
Chapter 7:Printer Output
Run-time Errors
Command Summary
Glossary

--------------------------------------------------------------

                         Introduction


About PCBreeze II

PCBreeze is a sophisticated tool for use in the design process
of Printed  Circuit Boards.  It allows  a board to be created,
viewed and  modified on  an IBM  personal computer.
```
{% endraw %}

## README.TXT

{% raw %}
```
                   Welcome to PCBreeze II
                              
                   Shareware Version 2.1
                              
             Copywrite 1987-1990 KEPIC Pty Ltd
               All Rights Reserved Worldwide
                              
PCBreeze II  is an  easy to  use but  powerful PCB  (Printed
Circuit Board)  CAD tool.  This version of PCBreeze is being
distributed as  "shareware" -  it is  not in  any  way  free
software. You  may use  PCBreeze  II  for  a  limited  trial
period. If  you wish  to continue  using PCBreeze II you may
register PCBreeze and receive the latest enhanced version, a
fully printed  and bound  manual and  user support. For more
details on  registering see  the PCBreeze  II opening screen
and user  documentation. By  using PCBreeze  II you agree to
the terms  and conditions  set out  in the  software license
detailed in the PCBreeze documentation (in the expanded file
PCBREEZE.TXT).

Full instructions on the installation and use of PCBreeze II
may be  found in the compressed file PCBREEZE.KEP. To expand
the file  into a  readable form  use the  expansion  program
EXPAND.EXE. for example:

> EXPAND

will take  the compressed document file in the current drive
and directory  and will  create PCBREEZE.TXT  in the current
drive and directory. ( Note: there may not be enough room to
do this  on a  360k   5 1/4"  disk. If this is the case then
just make  a copy  of the  disk and  delete all files except
PCBREEZE.KEP and EXPAND.EXE and then expand the manual).

                             or

If you  had PCBREEZE.KEP  in the  A: drive and wanted to put
PCBreeze and it's documentation in C:\PCB :

A:> EXPAND C:\PCB
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2510

     Volume in drive A is PCBREEZE
     Directory of A:\

    PCBREEZE EXE    168304   9-16-90  10:23p
    PCBREEZE KEP     46986   9-16-90   8:43p
    EXPAND   EXE     11678   9-14-90  10:10a
    HPPRINT  EXE      9856   9-12-89   8:40a
    EPSON    FNT     30480   6-07-89   7:49p
    EPSON    FNQ     16256   8-16-89   8:06p
    EGAVGA   BGI      5363   8-29-88   5:00a
    CGA      BGI      6253   8-29-88   5:00a
    HERC     BGI      6125   8-29-88   5:00a
    DEMO1    PCB      5224   6-08-89  10:13a
    DEMO2    PCB      5341   6-19-89   8:20a
    DEMO2    TCO      1584   6-19-89   8:20a
    DEMO3    PCB      5397   6-14-89   8:45p
    DEMO3    TCO      1488   6-14-89   8:45p
    NETDEMO  DEV       300   1-02-87   5:33p
    NETDEMO  NET      1110   7-19-87  10:28p
    ORDER    FRM      1684   9-16-90   4:08p
    READFRM  BAT        16   9-16-90  12:17p
    PRNTFRM  BAT        18   9-16-90  12:18p
    README   TXT      1734   9-14-90   3:25p
    README   BAT        19   9-14-90   3:30p
    PC-SIG             751   9-16-90  12:10p
    PCBREEZE TXT      2560  12-24-90   1:20p
    GO       BAT        28  10-04-90   5:21a
    GO       TXT       885  10-04-90  10:04a
    FILE2510 TXT      2521  10-04-90  10:03a
           26 file(s)     331961 bytes
                           15360 bytes free

![PC-SIG Library Disk #2510]({{ site.software.pcsigdisks.server }}/pcx86/sw/misc/pcsig/2000-2999/DISK2510/DISK2510.jpg)
