---
layout: page
title: "PC-SIG Diskette Library (Disk #441)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0441/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0441"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "TEKTRONIX 4010"

    The program on this disk emulates a Tektronix 4010 storage tube
    display terminal, both full text and graphics.  The PC's screen may
    still be faster graphics (320 x 200), but all the detail is still
    there.  Also included is a DEC VT100 mode simulation.
    
    System Requirements:  64K, one disk drive and monochome display
    
    How to Start:  To run TekTerm use the command TEKTERM2 to call
    TEKTERM2.EXE.  A welcome screen will come up and then the main menu
    with a notation that no setup has been automatically loaded.  Type
    "L" for load setup and use the TT.CFG.
    
    File Descriptions:
    
    TEK      ???  Tektronix 4010 Emulator and related programs
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES441.TXT

{% raw %}
```
------------------------------------------------------------------------
Disk No  441  TEKTRONIX 4010 Emulator                                v1.1
-----------------------------------------------------------------------
The program on this disk almost completely emulates a Tektronix 4010
storage tube display terminal, both full text abd graphics.  The PC's
screen may still be raster graphics (320 x 200), but all the detail is
still there.
 
TEK      CFG  Terminal configuration file
TEK      DOC  Documentation
TEK      EXE  Main program
 
PC-SIG
1030D E Duane Avenue
Sunnyvale, CA 94086
(408) 730-9291
(c) Copyright
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0441

     Volume in drive A has no label
     Directory of A:\

    FILES441 TXT       638   1-04-80   1:10a
    GO       BAT       357   1-04-80   1:12a
    TEK      CFG        13  12-01-86  12:00p
    TEK      DOC     64914   1-18-87   4:12p
    TEK      EXE      9490  12-01-86  12:00p
            5 file(s)      75412 bytes
                           83456 bytes free
