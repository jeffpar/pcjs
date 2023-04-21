---
layout: page
title: "PC-SIG Diskette Library (Disk #507)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0507/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0507"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "PC-SPRINT"

    PC-SPRINT contains step-by-step directions on how to accomplish a low
    cost ($25 - $50) speed up for the IBM PC/AT/XT.  It can achieve
    processor performance increases of up to 2 times normal, does not use
    an expansion slot, doesn't make any permanent changes to the computer
    and maintains software compatibility without restrictions.  Also, it
    adds a true hardware reset - no more ``keyboard lockup.'' NOTE: This
    package makes extensive use of printer graphics.  It is intended to be
    printed on EPSON compatible printers only since most files contain
    embedded EPSON control codes.  The DOS ``PRINT'' command cannot be used
    because of this - all printable files must use COPY <filenmae> PRN
    instead.  The batch file PCSPRINT.BAT will copy all relevant files for
    you.
    
    System Requirements:  128K, one disk drive and monochome/graphics
    display, Epson-compatible printer recommended.
    
    How to Start:  Enter TYPE 1STREAD.ME or TYPE PCSPRINT.DOC and press
    <ENTER> for program documentation and printing instructions.
    
    File Descriptions:
    
    1STREAD  ME   List of files on diskette (this list)
    ARTWRK1X TOP  Top layer printed circuit artwork 1x size
    ARTWRK1X BOT  Bottom layer printed circuit artwork 1x size
    NOPRTYCK COM  Program to disable parity checks
    FEEDTHRU      Top - bottom "feed through" connection diagram
    ARTWRK2X TOP  Top layer printed circuit artwork 2x size
    ARTWRK2X BOT  Bottom layer printed circuit artwork 2x size
    PCSPRINT BAT  Batch file to print PC-SPRINT info & drawings
    PARTLIST      Parts list & placement drawing
    WARMBOOT COM  Program to set "warm boot" flag
    SCHEMATC      Electronic circuit diagram
    PCSPRINT DOC  Description & construction info
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES507.TXT

{% raw %}
```
---------------------------------------------------------------------------
Disk No  507  PC-SPRINT                                             v1 DS2
---------------------------------------------------------------------------
PC-SPRINT contains step-by-step directions on how to accomplish a low cost 
($25 - $50) speed up for the IBM PC/AT/XT.  It can achieve processor perfor
mance increases of up to 2 times normal, does not use an expansion slot, 
doesn't make any permanent changes to the computer and maintains software com-
patibility without restrictions.  Also, it adds a true hardware reset - no 
more "keyboard lockup".
 
1STREAD  ME      List of files on diskette (this list)
ARTWRK1X BOT     Bottom layer printed circuit artwork 1x size
ARTWRK1X TOP     Top layer printed circuit artwork 1x size
ARTWRK2X BOT     Bottom layer printed circuit artwork 2x size
ARTWRK2X TOP     Top layer printed circuit artwork 2x size
FEEDTHRU         Top - bottom "feed through" connection diagram
NOPRTYCK COM     Program to disable parity checks
PARTLIST         Parts list & placement drawing
PCSPRINT BAT     Batch file to print PC-SPRINT info & drawings
PCSPRINT DOC     Description & construction info
SCHEMATC         Electronic circuit diagram
WARMBOOT COM     Program to set "warm boot" flag
 
PC-SIG (Software Interest Group)
1030 East Duane Ave, Suite D
Sunnyvale, CA  94086
(408) 730-9291
```
{% endraw %}

## NOTES507.TXT

{% raw %}
```
Program name:	PCSPRINT

Author name:	Doug Severson

Address:	7431 W. Southview Dr.
		Franklin, Wi. 53132

Telephone Number: Not given

Suggested Donation:  None

Program Description:  PCSPRINT is directions for a low cost ($25 - $50) speed
up for the IBM PC/AT/XT that you can build yourself.  It can achieve processor
performance increases of up to 2 times normal, does not use an expansion slot,
doesn't make any permanent changes to the computer and maintains software
compatibility without restrictions.  Also, it adds a true hardware reset - no
more "keyboard lockup".  Includes instructions, schematics, part placement
diagrams, and precision artwork from which a printed circuit board can be made.
It runs the processor at a higher clock rate to speed up the processing.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0507

     Volume in drive A has no label
     Directory of A:\

    1STREAD  ME       1066  11-09-85  11:10a
    ARTWRK1X BOT      2742  11-09-85  10:08a
    ARTWRK1X TOP      2742  11-09-85  10:05a
    ARTWRK2X BOT     56306  11-03-85   8:40a
    ARTWRK2X TOP     56306  11-03-85   8:31a
    FEEDTHRU         39936  11-03-85   7:56a
    FILES507 TXT      1426   1-01-80   6:14a
    GO       BAT       397   5-07-86  11:36a
    NOPRTYCK COM       512  11-09-85   9:23a
    NOTES507 TXT       800   1-01-80   5:48a
    PARTLIST         60928  11-03-85  11:27a
    PCSPRINT BAT       180  11-09-85  10:13a
    PCSPRINT DOC     41494  11-09-85  10:41a
    SCHEMATC         76800  11-03-85   7:45a
    WARMBOOT COM        13  11-09-85   9:20a
           15 file(s)     341648 bytes
                           14336 bytes free
