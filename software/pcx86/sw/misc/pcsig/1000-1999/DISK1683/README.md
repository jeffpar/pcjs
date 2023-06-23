---
layout: page
title: "PC-SIG Diskette Library (Disk #1683)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1683/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1683"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "EASY LABELS"

    There has never been a simpler, quicker label program.  Whether it's one
    or 99 labels you need, EASY LABEL is up to the job. It pops onto the
    screen in seconds, so straightforward help is not needed.
    
    A screen asks you to type in the contents of the label, line by line.
    It asks you the size and if you need a label printed for alignment
    purposes.  Flick a key and the label is on the way.  What you see is
    exactly what you get an instant later.
    
    The price for the simplicity is that nothing is saved to disk and you
    don't get sorting or all the other things complicated label programs
    offer.  But if your job requires a few labels now and then and you hate
    reading user manuals, this is the program for you.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1683.TXT

{% raw %}
```
Disk No: 1683                                                           
Disk Title: Easy Labels                                                 
PC-SIG Version: S1                                                      
                                                                        
Program Title: Easy Labels                                              
Author Version: 94086                                                   
Author Registration: $10.00                                             
Special Requirements: None.                                             
                                                                        
For this reviewer, there has never been a simpler, quicker label        
program. Whether it's one or 99 labels you need, EASY LABEL is up to    
the job. It pops onto the screen in seconds, so straightforward help    
is not needed.                                                          
                                                                        
A screen asks you to type in the contents of the label, line by line.   
It asks you the size and if you need one printed for allignment         
purposes.  Flick a key and the label is on the way.  What you see is    
exactly what you get an instant later.                                  
                                                                        
The price for the simplicity is that nothing is saved to disk and you   
don't get sorting or all the other things complicated label programs    
offer.  But if your job requires a few labels now an then and you hate  
reading user manuals, this is the program for you.                      
                                                                        
                                                                        
                                                                        
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
║                 <<<<  Disk #1683  EASY LABELS  >>>>                     ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To start program, type:  EL (press enter)                               ║
║                                                                         ║
║ To print documentation, type:  COPY README.DOC PRN                      ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## PCSIG.TXT

{% raw %}
```
                                  PC-SIG.TXT

            FILE                             FUNCTION

        SPEEDSCR.COM            RESIDENT SCREEN LIBRARY MANAGER
        EASY.EXE                PROGRAM OPERATOR
        COLOR.EXE               SOFTWARE SWITCH FOR DUAL GRAPHIC SYSTEMS
        EL.PAK                  SCREEN LIBRARY
        ELM.PAK                 ALTERNATE SCREEN LIBRARY FOR SYSTEMS 
                                USING COMPOSITE DRIVEN MONO MONITORS
        EL.BAT                  PROGRAM START UP - LOADS SCREEN PROGRAM
        ELD.BAT                 START UP FOR DUAL GRAPHIC SYSTEMS
        INSTALL.BAT             MAKES WORKING SIMPLE LABEL DISK
        README.DOC              IMPORTANT INFORMATION ON PROGRAM 
                                OPERATION AND INSTALLATION.

        
```
{% endraw %}

## README.DOC

{% raw %}
```

                                EASY LABELS

         THE ON SCREEN LABEL MAKER - WHAT YOU SEE IS WHAT YOU PRINT.

        EASY LABELS has been developed for those small address and 
        inventory label requirements. It is fast and easy. EASY
        LABELS is written for the IBM PC/XT/AT and true compatible
        machines. EASY LABEL has the following features.
                
                EL IS 100% menu driven
                Permits laying out the label format on the screen.
                PrintS up to 999 labels at a printing.
                Accommodates 3 1/2" X 15/16" and 4" X 15/16" labels
                cannot be saved ta a disk file.
         
        EASY LABELS  requires the following.

                IBM PC/XT/AT OR TRUE COMPATIBLE MACHINES
                RAM - 128 K
                IBM CGA OR MGA GRAPHICS OR EQUIVALENT.
                COLOR OR MONO MONITOR*
                ONE DISK DRIVE(OPERATIONS)-TWO DRIVES(INSTALLATION)
                IBM COMPATIBLE PRINTER 
                IBM or MS DOS SYSTEM - 2.0 OR LATER
                READABILITY OF QUICK BASIC 2.0 COMMANDS

        To prepare your working master format one disk with the \S 
        option. See your DOS SYSTEM manual for instructions.
        
        To install EASY LABELS place your original(write 
        protected) in drive A: and your newly formatted disk in drive 
        B: and enter the following command. 
        
                For color and mono systems - A>INSTALL B:*

        *EASY LABELS may be installed on any drive (A: through M:)
         by substituting the valid drive in place of "B".
         ie. INSTALL C:

        
        When the process is completed place your master SIMPLE LABEL
        disk in a safe place. Place the working disk in DRIVE A: and 
        initiate EASY LABELS by entering A>EL. If you have a 
        monographic monitor and find that you cannot read the 
        screens then you probable have a monitor drive by composite
        input from a colorgraphic adapter. If this is the case read
        the instructions under "COMPOSITE MONITORS" at the end of 
        read me. 

       
        All EASY LABELS screens are in the library EL.PAK and are 
        managed by the resident program SPEEDSCR.COM. In order for 
        the screen program to operate properly SPEEDSCR.COM and its 
        variables must be loaded into memory before running EASY
        LABELS. The batch file EL.BAT will do this. EASY LABELS
        should always be initiated by entering A:EL.

        SPEEDSCR.COM(C)(TM) is a product of THE SOFTWARE BOTTLING 
        COMPANY OF NEW YORK who has licensed the distribution of 
        the SPEEDSCR module to support libraries developed with 
        screens developed with SOFT CODE. The SPEEDSCR module may
        not be copied except for use in supporting the screen
        libraries on this disk.
        
        COMPOSITE MONITORS: Composite driven monographic monitors 
        are usually unable to differentiate between colors and
        require a different screen library. This library ELM.PAK
        is provided on the master EASY LABELS disk. The following 
        steps should be taken to prepare your working master for 
        this equipment configuration. 
                1. Place your working master disk in drive A:, and 
                   original EASY LABELS in drive B:
                2. Enter the following commands at the A>.

                .      COPY B:ELM.PAK EL.PAK

                3. This will replace the original EL.PAK library 
                   with the library of ELM.PAK.
                4. To run your modified EASY LABELS working disk
                   enter A>EL as before the modification.


        DUAL SYSTEMS: If your equipment configuration includes both 
        a monographic and colorgraphics adapter with both  
        monographic and color monitors you will need to switch your 
        system to the color adapter. The master EASY LABELS disk 
        contains COLOR.EXE and ELD.BAT. If you need to initiate your 
        system on the mono monitor and switch the program to color 
        system perform the following. 

                1. Place your working master disk in drive A:, and 
                   original EASY LABELS in drive B:
                2. Enter the following commands at the A>

                        A>COPY B:COLOR.EXE 
                        A>COPY ELD.BAT

                 3.To initiate EASY LABELS from the monographic 
                     system and transfer control to the colorgraphic 
                     system enter A>ELD.

        FOTO 64, INC  PO BOX 2130  SARATOGA CA 95070-2130
        CARL F. MIESCKE - PRESIDENT

        
         
         

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1683

     Volume in drive A has no label
     Directory of A:\

    COLOR    EXE       640   1-01-80  12:31a
    EASY     EXE     54006   2-23-89   8:57p
    EL       BAT        68   2-23-89   8:50p
    EL       PAK      7713   2-23-89   7:55p
    ELD      BAT        75   2-23-89   8:51p
    ELM      PAK      7193   2-23-89   9:32p
    FILE1683 TXT      2295  12-11-89   5:38p
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       540  12-12-89   2:17p
    INSTALL  BAT      1499   2-23-89   8:39p
    PCSIG    TXT       828   2-26-89  12:53a
    README   DOC      4858   2-23-89   8:42p
    SPEEDSCR COM      5333  10-01-86  12:00p
           13 file(s)      85086 bytes
                           70656 bytes free
