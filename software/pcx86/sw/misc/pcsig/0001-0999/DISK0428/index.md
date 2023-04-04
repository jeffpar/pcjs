---
layout: page
title: "PC-SIG Library Disk #428"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0428/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0428"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "TURBO PASCAL #10"

    The Turbo Pascal routines on this diskette perform a wide variety
    of helpful functions ranging from string manipulation to playing
    music.  GETDIR and PATHS will scan and change the MS-DOS
    directory and could even have options added to read system and
    hidden files.  Included are communications support, a graphics
    library, a translator from 8088 Assembler source code to Pascal
    INLINE code, a very fast string writer to output to mono or color
    screens, screen scrolling and more.
    
    System Requirements:  128K, two disk drives, Turbo Pascal
    
    How to Start:  To read DOC or TXT files simply enter TYPE filename.ext
    and press <ENTER>.  For instructions on PAS listings, refer to your
    Pascal language manual.
    
    File Descriptions:
    
    GRAPHICS LBR  Pascal graphics library
    GETDIR   PAS  Scan MS-DOS directory
    FASTWRIT PAS  Very fast strings to mono or color screen
    DIR      PAS  Outputs MS-DOS directory entries
    COMMCALL PAS  COM1 support; interrupt handling; one port
    ARGLIST  PAS  Reads argument list, like argc/argv in C
    GRAPHSRC LBR  Pascal graphics library + demo
    GRAPHICS TXT  Installation instructions for GRAPHICS
    SAMPDIR  PAS  Example of how to use GETDIR.PAS
    PATHS    PAS  Get, create, delete, modify disk directories
    INLINER  PAS  Translates 8088 Assembler source to Pascal INLINE
    PIBMUSIC PAS  Play music like in BASIC PLAY statement
    STRNGLIB INC  String functions not provided in TURBO Pascal
    STRNGLIB DOC  Description of STRNGLIB.INC
    SCROLL   PAS  Scroll portion or all of screen up or down
    SAMPPATH PAS  Example of how to use PATHS.PAS
{% comment %}info_end{% endcomment %}


### Directory of PC-SIG Library Disk #0428

     Volume in drive A has no label
     Directory of A:\

    ARGLIST  PAS      3712   5-15-85   2:39p
    COMMCALL PAS      6400   5-15-85   2:42p
    DIR      PAS      1024   5-15-85   2:40p
    FASTWRIT PAS      2944   5-15-85   2:41p
    FILES428 TXT      1642  11-05-85   2:50p
    GETDIR   PAS      5248   5-17-85   1:40a
    GRAPHICS LBR    180864   5-17-85   1:16a
    GRAPHICS TXT       544   5-17-85  11:26p
    GRAPHSRC LBR     28416   5-15-85   2:35p
    INLINER  PAS     52205   5-17-85   1:18a
    PATHS    PAS      9344   5-17-85   1:40a
    PIBMUSIC PAS     24704   6-04-85   8:00p
    SAMPDIR  PAS      1664   5-17-85   1:40a
    SAMPPATH PAS      3328   5-17-85   1:40a
    SCROLL   PAS       768   5-15-85   2:38p
    STRNGLIB DOC     13184   5-17-85   1:38a
    STRNGLIB INC      8448   5-17-85   1:38a
           17 file(s)     344439 bytes
                           10240 bytes free
