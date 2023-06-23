---
layout: page
title: "PC-SIG Diskette Library (Disk #348)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0348/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0348"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "LETUS A-B-C VOL 4"

    Letus A-B-C is a database in PC-FILE III format containing references
    to articles in six major PC oriented magazines, beginning with 1982.
    This disk of Letus A-B-C covers the following eight magazines devoted
    to the IBM PC: Softalk (SOFT), Personal Computer Age (PCAGE), PC
    Magazine (PCMAG), PC World (PCW), PC Tech Journal (PCTEC), Byte
    Magazine (BYTE), PCjr Magazine (PCJR), PCjr WORLD Magazine (PCJRW).
    
    See Disk #121 for further description.
    
    How to Start: It is very important to read the Documentation file
    (Letus.doc) located on disk #121 either by screening it (entering TYPE
    LETUS.DOC at the A> and using CTRL-S to pause it) or accessing it with
    your word processor.  To run it, "boot-up" the DOS system and put
    PC-FILE system disk in drive A; enter PC-FILE <CR>.  PC-FILE will ask
    where the database is; you will have put Letus A-B-C Disk #4 in drive
    "B", so you will enter B:LETUS <CR>.  The various files on this
    diskette, corresponding to magazine and year, will be displayed on the
    screen for your selection.
    
    Suggested Registration:  $10.00 per disk.
    
    File Descriptions:
    
    LETUS    BAT  Batch file for starting LETUS A-B-C
    PCW84A   ???  PC WORLD Magazine Jan-Mar 1984 reference files (4 files)
    PCMAG84A ???  PC Magazine Jan-Mar 1984 reference files (4 files)
    PCJRW84A ???  PCjr WORLD Magazine Jan-Mar 1984 reference files (4 files)
    PCJR84A  ???  PCjr Magazine Jan-Mar 1984 reference files (4 files)
    PCAGE84A ???  PC AGE Magazine Jan-Mar 1984 reference files (4 files)
    BYTE84A  ???  BYTE Magazine Jan-Mar 1984 reference files (4 files)
    PLOGO84  COM  generates LETUS logo part 2
    LOGO84A  COM  generates LETUS logo part 1
    SOFT84A  ???  SOFTALK Magazine Jan-Mar 1984 reference files (4 files)
    BYTE84A  ???  Database files for Byte Magazine
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES.TXT

{% raw %}
```
San Francisco PC Users Group:     S O F T W A R E   L I B R A R Y
=================================================================
Volume 121:  LETUS A-B-C (Disk #4/6) referencing (1984) magazines

+---------------------------------------------------------------+
|  This public domain media material is made available to club  |
|  membership, for its use and distribution, by the following:  |
|                          LETUS A-B-C                          |
|  Database of articles & letters from magazines on the IBM PC  |
|                           R. Nelson                           |
|    (3790 El Camino Real, Suite 2006, Palo Alto, CA  94306)    |
|  If, after trial, one finds the software application useful,  |
|  SFpcUG encourages your becoming a registered user (donation  |
|  of $10 per disk is sought by the author of this database...  |
|  the user-supported concept is extended to include donations  |
|  by subscription to monthly releases [$15/month | $150/year]  |
|  or to quarterly releases [$20/quarter] of new Letus A-B-C).  |
+---------------------------------------------------------------+

This is a DOUBLE-SIDED diskette (requiring PC-FILE III: Disk #32)

Index#  Name           Description
                                                     +----------+
121.01  README  .121   YOU ARE READING IT            |   also   |
121.02  LETUS   .BAT   ^Start with this batch file <-+  prints  |
121.03  LOGO84A .COM   ^Introductory screen #1       |  manual  |
121.04  PLOGO84 .COM   ^Introductory screen #2       |    on    |
121.05  BYTE84A .DTA   ^    X                        |   Disk   |
121.06  BYTE84A .HDR   ^   /|\                       |   #122   |
121.07  BYTE84A .INX   ^    |                        |    or    |
121.08  BYTE84A .KWD   ^    |                        |   #123   |
121.09  PCAGE84A.DTA   ^    |                        +----------+
121.10  PCAGE84A.HDR   ^    |
121.11  PCAGE84A.INX   ^    |
121.12  PCAGE84A.KWD   ^    |
121.13  PCJR84A .DTA   ^    |
121.14  PCJR84A .HDR   ^    |
121.15  PCJR84A .INX   ^ L E T U S   A - B - C   ( # 4   of   6 )
121.16  PCJR84A .KWD   ^ Literature Evaluation Table User Service
121.17  PCJRW84A.DTA   ^    |
121.18  PCJRW84A.HDR   ^ ...an extensive cataloguing of articles,
121.19  PCJRW84A.INX   ^ reviews and commentary focusing on IBM's
121.20  PCJRW84A.KWD   ^ Personal Computer using database PC-File
121.21  PCMAG84A.DTA   ^    |
121.22  PCMAG84A.HDR   ^ +--+------------1-9-8-4----------------+
121.23  PCMAG84A.INX   ^ | Byte / PC Age / PCjr / PCjr World /  |
121.24  PCMAG84A.KWD   ^ | PC Magazine / PC Technical Journal / |
121.25  PCTEC84A.DTA   ^ | PC World / Softalk                   |
121.26  PCTEC84A.HDR   ^ | (... see Disks #74-#76, #122, #123)  |
121.27  PCTEC84A.INX   ^ +--+-----------------------------------+
121.28  PCTEC84A.KWD   ^    |
121.29  PCW84A  .DTA   ^    |
121.30  PCW84A  .HDR   ^    |
121.31  PCW84A  .INX   ^    |
121.32  PCW84A  .KWD   ^    |
121.33  SOFT84A .DTA   ^    |
121.34  SOFT84A .HDR   ^    |
121.35  SOFT84A .INX   ^   \|/
121.36  SOFT84A .KWD   ^    X



```
{% endraw %}

## FILES348.TXT

{% raw %}
```
------------------------------------------------------------------------
Disk No 348   Letus A-B-C (tm) #4 (volume 121)                  v1   DS
------------------------------------------------------------------------
 
Literature Evaluation Table  User Service -  a database of  articles and
letters from 1st  quarter 1984 magazines  about IBM personal  computers.
It requires PC-FILE III  (may need to be  converted to new format  using
PC-FIX)  and  can  be  searched  using  keywords,  author names, article
titles, issue numbers, page numbers and descriptive text.
 
LETUS    BAT Batch file for starting LETUS A-B-C
LOGO84A  COM generates LETUS logo part 1
PLOGO84  COM generates LETUS logo part 2
README   121 description of LETUS A-B-C
BYTE84A  DTA BYTE Magazine Jan-Mar 1984 reference files
BYTE84A  HDR  "
BYTE84A  INX  "
BYTE84A  KWD  "
PCAGE84A DTA PC AGE Magazine Jan-Mar 1984 reference files
PCAGE84A HDR  "
PCAGE84A INX  "
PCAGE84A KWD  "
PCJR84A  DTA PCjr Magazine Jan-Mar 1984 reference files
PCJR84A  HDR  "
PCJR84A  INX  "
PCJR84A  KWD  "
PCJRW84A DTA PCjr WORLD Magazine Jan-Mar 1984 reference files
PCJRW84A HDR  "
PCJRW84A INX  "
PCJRW84A KWD  "
PCMAG84A DTA PC Magazine Jan-Mar 1984 reference files
PCMAG84A HDR  "
PCMAG84A INX  "
PCMAG84A KWD  "
PCTEC84A DAT PC TECH JOURNAL Jan-Mar 1984 reference files
PCTEC84A HDR  "
PCTEC84A INX  "
PCTEC84A KWD  "
PCW84A   DTA PC WORLD Magazine Jan-Mar 1984 reference files
PCW84A   HDR  "
PCW84A   INX  "
PCW84A   KWD  "
SOFT84A  DTA SOFTALK Magazine Jan-Mar 1984 reference files
SOFT84A  HDR  "
SOFT84A  INX  "
SOFT84A  KWD  "
 
 
PC Software Interest Group (PC-SIG)
1030 E Duane, Suite J
Sunnyvale, CA 94086
(408) 730-9291
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0348

     Volume in drive A has no label
     Directory of A:\

    BYTE84A  DTA      4096   5-22-84  11:40a
    BYTE84A  HDR       128   3-30-84   4:31p
    BYTE84A  INX       256   5-22-84  11:41a
    BYTE84A  KWD       500   5-22-84  12:31p
    FILES    TXT      3159   1-09-85   3:23p
    FILES348 TXT      1792   5-23-85   2:09p
    LETUS    BAT        45   5-22-84   7:59p
    LOGO84A  COM      2132   5-22-84   7:47p
    PCAGE84A DTA     22912   5-22-84   3:47p
    PCAGE84A HDR       128   4-01-84  11:29a
    PCAGE84A INX      1280   5-22-84   3:47p
    PCAGE84A KWD      2224   5-22-84   3:49p
    PCJR84A  DTA     20864   5-22-84   4:17p
    PCJR84A  HDR       128   5-20-84   9:02p
    PCJR84A  INX      1152   5-22-84   4:20p
    PCJR84A  KWD      1865   5-22-84   4:50p
    PCJRW84A DTA      2560   5-22-84   4:08p
    PCJRW84A HDR       128   5-20-84   3:02p
    PCJRW84A INX       128   5-22-84   4:18p
    PCJRW84A KWD       304   5-22-84   4:35p
    PCMAG84A DTA    121216   6-11-84   9:07p
    PCMAG84A HDR       128   5-20-84   4:12p
    PCMAG84A INX      6528   6-11-84   9:07p
    PCMAG84A KWD     10707   5-23-84   4:00a
    PCTEC84A DTA     18048   5-22-84   1:35a
    PCTEC84A HDR       128   3-10-84   2:54p
    PCTEC84A INX      1024   5-22-84   1:35a
    PCTEC84A KWD      1783   5-22-84   1:40p
    PCW84A   DTA     29824   5-22-84   2:51p
    PCW84A   HDR       128   2-20-84   9:29p
    PCW84A   INX      1664   5-22-84   2:51p
    PCW84A   KWD      3287   5-22-84   2:46p
    PLOGO84  COM      2132   1-28-84   5:46p
    SOFT84A  DTA     30720   5-22-84  12:50a
    SOFT84A  HDR       128   2-12-84   9:56a
    SOFT84A  INX      1664   5-22-84  12:51a
    SOFT84A  KWD      3299   5-22-84   1:12p
           37 file(s)     298189 bytes
                               0 bytes free
