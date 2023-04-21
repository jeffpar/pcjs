---
layout: page
title: "PC-SIG Diskette Library (Disk #242)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0242/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0242"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "SAGE TRADER"

    Sage Trader was written to provide the commodity trader with an analysis
    and graphics program that would run on the IBM monochrome display.
    This program features an autosave feature that saves your data to disk
    whenever you change files or end the program. 'Typewriter' graphics are
    used, so a graphics card is not required, and graphs can be printed
    with a dot-matrix or daisywheel printer.
    
    How to Start:  Load DOS and type ST to enter the main program.  Consult
    TRADER.PRN for program documentation (NOTE: this program prints
    documentation directly to your printer).
    
    Suggested Registration:  $50.00
    
    File Descriptions:
    
    ST       ARF  Same as above
    ST       SPC  Points to data files
    ST       HLP  On line help for ST.EXE
    ST       EXE  Main program
    TRADER   PRN  Documentation for Sage Trader
    INSTALL  BAT  Makes a working copy of original disk
    *        CCC  Example data files (4 files)
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CRC.TXT

{% raw %}
```
PC-SIG Disk No. #242, version V1 
 
The following is a list of the file checksums which should be produced by
the CRCK4 program on this disk.  If the CRC numbers do not match the following
list you may have a bad file.  To use type:  CRCK4 <filespec>
 
CRCK4 output for this disk:
 

CRCK ver 4.2B (MS DOS VERSION )
CTL-S pauses, CTL-C aborts

--> FILE:  ST      .EXE         CRC = DF FC

--> FILE:  ST      .HLP         CRC = A1 84

--> FILE:  ST      .SPC         CRC = 4D 66

--> FILE:  ST      .ARF         CRC = 00 00

--> FILE:  LCFEB84 .CCC         CRC = B3 52

--> FILE:  LCAPR84 .CCC         CRC = 86 C2

--> FILE:  CNMAR84 .CCC         CRC = 82 D9

--> FILE:  CNMAY84 .CCC         CRC = 2C 37

--> FILE:  INSTALL .BAT         CRC = 0F A1

--> FILE:  TRADER  .PRN         CRC = 93 B2

 ---------------------> SUM OF CRCS = 5B 5D

DONE 
 
These and other Public Domain and user-supported programs from:
 
PC Software Interest Group (PC-SIG)
1125 Stewart Ct  Suite G
Sunnyvale, CA 94086
(408) 730-9291
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0242

     Volume in drive A has no label
     Directory of A:\

    CNMAR84  CCC       682  12-18-83   2:36p
    CNMAY84  CCC       682  12-06-83   8:04p
    CRC      TXT      1052  12-17-84   4:17p
    CRCK4    COM      1536  10-21-82   5:50p
    INSTALL  BAT       896   6-04-84   6:03a
    LCAPR84  CCC       902  12-11-83   9:26a
    LCFEB84  CCC       902  12-11-83   9:23a
    ST       ARF        36  12-18-83  10:59a
    ST       EXE     98048   6-04-84   5:50a
    ST       HLP     18432  11-09-83   7:56a
    ST       SPC       151  12-11-83   9:36a
    TRADER   PRN    112174   6-07-84   5:07a
           12 file(s)     235493 bytes
                           81920 bytes free
