---
layout: page
title: COMPAQ DeskPro 386 Reference Manuals
permalink: /documents/manuals/compaq/deskpro386/
redirect_from: /pubs/pc/reference/compaq/deskpro386/
---

So far, I've found only the first volume of the **COMPAQ DeskPro 386/25 Technical Reference Guide**:

* [COMPAQ DeskPro 386/25 Technical Reference Guide (Volume I)](https://1drv.ms/b/s!ArcO_mFRe1Z9gq5BThwmEpfyp0EBdA)

The table of contents in Volume I gives us a taste of what's in Volume II:

- Chapter 5 KEYBOARD
- Chapter 6 POWER SUPPLY
- Chapter 7 MULTIPURPOSE FIXED DISK DRIVE CONTROLLER BOARDS
- Chapter 8 DISKETTE DRIVES
- Chapter 9 FIXED DISK DRIVE SYSTEMS
- Chapter 10 FIXED DISK DRIVE BACKUP SYSTEMS
- Chapter 11 VIDEO DISPLAY CONTROLLER BOARDS
- Chapter 12 MONITORS
- Chapter 13 ASYNCHRONOUS COMMUNICATIONS/PARALLEL PRINTER BOARD
- Chapter 14 COMPAQ 300-/600-MEGABYTE FIXED DISK DRIVE EXPANSION UNIT
- Appendix A INTERNATIONAL KEYBOARDS
- Appendix B ERROR MESSAGES 

[![COMPAQ DeskPro 386/25 Technical Reference Guide (Volume I)](COMPAQ_DeskPro_386-25_Technical_Reference_Guide-Vol1-1988-08.png)](https://1drv.ms/b/s!ArcO_mFRe1Z9gq5BThwmEpfyp0EBdA)

NOTE: As the page on [COMPAQ DeskPro 386 ROMs](/machines/pcx86/compaq/deskpro386/rom/#authors-of-the-compaq-deskpro-386-rom)
explains, 5 COMPAQ engineers had their initials "engraved" in the original DeskPro 386 ROM.  In June 2018, I was
fortunate enough to meet 4 of them, and they were all kind enough to sign my copy of the DeskPro 386 Technical Reference
Guide.  This "signature page", shown below, has since been added to the PDF above.

![COMPAQ DeskPro 386-25 Technical Reference Guide - Volume 1 - 1988-08 - Signatures](COMPAQ_DeskPro_386-25_Technical_Reference_Guide-Vol1-1988-08-Signatures.png)

COMPAQ DeskPro 386 Reference Highlights
---------------------------------------

### Fixed Disk Drive Parameter Table Values

The following table comes from pages 4-189 and 4-190 of the DeskPro 386/25 Technical Reference Guide (Volume I).

                                                 Landing
                                     Pre-comp.    Zone
    Drive                    Max.    Cylinder    Cylinder   Sectors/   Capacity     Same as
    Type         Cylinders   Heads   (note 1)    (note 2)    Track       (MB)       IBM PC AT
    -----------------------------------------------------------------------------------------
      1 (note 3)    306       4        128         305        17        10.65       yes
      2 (note 3)    615       4        128         638        17        21.41       yes
      3             615       6        128         615        17        32.12       yes
      4            1024       8        512        1023        17        71.30
      5             940       6        512         939        17        49.09       yes
      6 (note 3)    697       5        128         696        17        30.33
      7             462       8        256         511        17        32.17       yes
      8             925       5        128         924        17        40.26
      9             900      15         -1         899        17       117.50       yes
     10             980       5         -1         980        17        42.65
     11             925       7        128         924        17        56.36
     12 (note 3)    925       9        128         924        17        72.46
     13             612       8        256         611        17        42.61
     14             980       4        128         980        17        34.12
     15     Reserved - Not for use by end-users
     16             612       4          0         612        17        21.31
     17             980       5        128         980        17        42.65
     18             966       6        128         966        17        50.45
     19            1023       8         -1        1023        17        71.23
     20             733       5        256         732        17        31.90
     21             733       7        256         732        17        44.66
     22             524       4         -1         524        40        42.93
     23             924       8         -1         924        17        64.34
     24             966      14         -1         966        17       117.71
     25 (note 3)    966      16         -1         966        17       134.53
     26            1023      14         -1        1023        17       124.66
     27             832       6         -1         832        33        84.34
     28            1222      15         -1        1222        34       319.09
     29            1240       7         -1        1240        34       151.10
     30             615       4        128         615        25        31.49
     31             615       8        128         615        25        62.98
     32             905       9        128         905        25       104.26
     33 (note 3)    832       8         -1         832        33       112.46
     34             966       7         -1         966        34       117.71
     35 (note 3)    966       8         -1         966        34       134.53
     36             966       9         -1         966        34       151.35
     37             966       5         -1         966        34        84.08
     38 (note 3)    611      16         -1         611        63       315.33
     39            1023      11         -1        1023        33       190.13
     40            1023      15         -1        1023        34       267.13
     41            1630      15         -1        1630        52       650.96
     42            1023      16         -1        1023        63       527.97
     43             805       4         -1         805        26        42.86
     44             805       2         -1         805        26        21.43
     45 (note 3)    748       8         -1         748        33       101.11
     46             748       6         -1         748        33        75.83
     47 (note 3)    966       5        128         966        25        61.82
    -------------------------------------------------------------------------------
    NOTES: 1.  A value of -1 means that no write precompensation is used.
           2.  These values are not used by the COMPAQ DESKPRO 386/25 system, which
               automatically retracts and locks the heads in a non-data landing zone
               at power-down.
           3.  Drive types supported by Compaq.
    -------------------------------------------------------------------------------
