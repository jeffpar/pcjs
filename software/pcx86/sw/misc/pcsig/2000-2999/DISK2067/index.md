---
layout: page
title: "PC-SIG Diskette Library (Disk #2067)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2067/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2067"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "CURVE DIGITIZER (CGA/EGA) 2 OF 2 (2066)"

    CURVE DIGITIZER is a completely professional, two-dimensional CAD/CAM
    drawing tool for the personal computer. The interactive help screen,
    detailed documentation, and six menu screens make it easy to operate.
    
    ~ Direct hi-resolution printer output with controllable width, length,
    resolution and an option for reverse field-printing.
    
    ~ A wide-printer output option for printers with carriages up to 16"
    wide.
    
    ~ A versatile line thickness controller has been added to the Select
    command. This allows for double lines, poly lines or filled lines with
    a selectable density.
    
    ~ Distance and angle or delta x & y readouts are available.
    
    ~ Advanced features; e.g., scaling & rotation, hatching and area
    calculations of irregular polygons.
    
    ~ A user-defined plotter driver routine is included.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE2067.TXT

{% raw %}
```
Disk No: 2067                                                           
Disk Title: Curve Digitizer (CGA/EGA) 2 of 2 (2066)                     
PC-SIG Version: S1                                                      
                                                                        
Program Title: Curve Digitizer EGA/CGA                                  
Author Version: 3.5                                                     
Author Registration: $149.00                                            
Special Requirements: EGA or CGA, and graphics printer.                 
                                                                        
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## README.DOC

{% raw %}
```


           C U R V E    D I G I T I Z E R    V E R S I O N   4.0

                UPGRADES TO CURVE DIGITIZER SINCE VERSION 3.0

                         PROGRAM IMPROVEMENTS


    *  THE DIGITIZER CALIBRATION PHASE HAS BEEN SIMPLIFIED.

    *  A FASTER COMPILER AND PROGRAM MODIFICATIONS NOW YIELD A 55%
       INCREASE IN REFRESH SPEED.

    *  SEVERAL COSMETIC ERRORS HAVE BEEN CORRECTED.

    *  ADVANCED FEATURES, E.G., SCALING & ROTATION ADDED TO THE SYMBOL
       COMMAND.

    *  A USER-DEFINED PLOTTER DRIVER ROUTINE IS AVAILABLE.

    *  HERCULES VIDEO (DMA) RESPONSE TIME IMPROVED. PREVENTS CERTAIN
       SCREEN ANOMALIES EVIDENT WITH CERTAIN HERCULES CLONE CARDS.

    *  EXTENDED THE [ESC] KEY USAGE TO INTERRUPT SCREEN REFRESHING AND
       PRINTER OR PLOTTER OUTPUT EVEN DURING `LAYERS' MODE.

    *  ARC COMMAND FEATURES READOUT OF START & END ANGLES AND RADIUS.

    *  LAYER COMMAND FEATURES SINGLE-KEY SELECTION OF UP TO 10 PATH
       DIRECTORIES.

    *  A BYPASS OPTION WHICH PRECLUDES RESAVING THE INITIAL LAYER FILE.

    *  FORMATTED DISKETTES NO LONGER NEED A FILE ON DISK TO BE USED AS A
       DATA DISK.

    *  FOR COMPUTER SYSTEMS WITHOUT HARD DRIVES AND HAVING, AT LEAST, 2
       FLOPPY DRIVES, A DRIVESPEC CAN BE ENTERED FOR THE AUTODIMENSIONING
       DISK. THIS SAVES CONSIDERABLE DISKETTE SWAPPING.

    *  THE LAYERS MODE SAVES FILE(S) ONLY IF CHANGES ARE MADE.

    *  DIRECT HI-RESOLUTION PRINTER OUTPUT WITH CONTROLLABLE WIDTH,
       LENGTH, RESOLUTION AND AN OPTION FOR REVERSE FIELD-PRINTING.

    *  A WIDE-PRINTER OUTPUT OPTION FOR PRINTERS WITH CARRIAGES UP TO 16".

    *  AUDIO EFFECTS NOW HAVE 3 LEVEL SETTINGS: OFF/MIN/MAX WHICH ARE
       TOGGLED WITH A NEW [!] KEY.

    *  THE [ESC] KEY ALLOWS INSTANT EXITING FROM HELP MENUS. THE HELP
       PACKAGE NOW INCLUDES BI-DIRECTIONAL PAGING THROUGH ALL SCREENS.




    *  A VERSATILE LINE THICKNESS CONTROLLER HAS BEEN ADDED TO THE SELECT
       COMMAND. THIS ALLOWS FOR DOUBLE LINES, POLY LINES OR FILLED LINES
       WITH A SELECTABLE DENSITY.

    *  READOUTS FOR DISTANCE AND ANGLE OR DELTA X & Y READOUTS AVAILABLE
       USING THE [^] KEY.


                 INCREASED HARDWARE PERIPHERAL SUPPORT


                            PLOTTERS ADDED:

         SWEET P-100
         APPLE COLOR PLOTTER

                           DIGITIZERS ADDED:

         SUMMAGRAPHICS
         BIT PAD
         SUMMASKETCH
         NUMONICS
         GTCO
         CALCOMP
         HITACHI
         CALCOMP

                         GRAPHICS MODES ADDED:

         EGA MONOCHROME  640 X 350



                       NEW UTILITIES AVAILABLE:


                 A). [PDRIVER]  - HI-RES PRINTER DRIVER.

                 B). [APPEND]   - COMBINE SEVERAL "PLOTFILES" TOGETHER.
 
                 C). [DXFCON]   - COMMUNICATE WITH OTHER CAD/CAM PROGRAMS
                                  WHICH SUPPORT DXF FILE FORMATS.

                 D). [LASERPLT] - LASER PRINTER OUTPUT UTILITY.

    NOTE: UTILITIES (C) AND (D) ARE AVAILABLE ONLY WITH THE COMMERCIAL 
    VERSION ($149). EACH UTILITY MAY BE PURCHASED SEPARATELY, IF DESIRED,
    AT THE PRICES SHOWN BELOW:


                 DXFCON ----- $25.00

                 LASERPLT --- $35.00
























































LT --- $35
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2067

     Volume in drive A has no label
     Directory of A:\

    AMDEK100 DEV       309   2-02-88   6:36p
    ARO      DXE       768  10-17-82   8:41a
    CONFIGUR EXE     19968   2-19-88  11:30p
    CX4800   DEV       325   6-04-88   1:24a
    DATAED   MAX      4008   1-01-80   5:05a
    DIGITS   DXE     16230   5-07-87   7:52p
    DIMENSN  EXE     54434   9-21-87  10:59p
    DMP7     DEV       354   5-29-88   7:09a
    EDITDATA EXE     20224  10-09-87   3:44p
    FILE2067 TXT      1111   1-25-90   4:23p
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       540   1-29-90  12:05p
    INTRODOC         92058   1-01-80   2:43a
    MODE1    DEV       360   2-19-88  11:32p
    PANASONI DEV       257   9-17-87   6:02p
    PDRIVER  EXE     40352   1-01-80  12:44a
    PLOTFILE EXE     11856  10-01-87  11:03p
    PRINTDOC BAT        22   5-15-87   9:25a
    README   DOC      3456   1-01-80   6:22a
    SHADER   EXE     53458  10-01-87  11:26p
    SLIDESHO EXE      9632  10-13-88  10:41p
    WX4671   DEV       322   6-03-88  11:04p
           22 file(s)     330082 bytes
                           19456 bytes free
