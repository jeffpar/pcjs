---
layout: page
title: "PC-SIG Diskette Library (Disk #58)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0058/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0058"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "TEXT TOOLS 2 OF 2  (#57 FIRST DISK)"

    Tools to manipulated test files.  See Disks #130-132 for more complete
    and better documented versions of the utilities on this disk and disk
    #58.
    
    File Descriptions:
    
    The First Disk Contains:
    TRANSLIT EXE  TRANSLITERATION UTILITY
    SORT     EXE  SORTS TEXT FILES
    FIND     EXE  FINDS TEXT STRINGS IN FILES
    CHANGE   EXE  CHANGES TEXT STRINGS IN FILE
    COMPARE  EXE  COMPARES TWO FILES
    
    The Second Disk Contains:
    FORMAT   EXE  TEXT FORMATTER
    DEFINE   EXE  STRING REPLACEMENT MACROPROCESSOR
    MACRO    EXE  EXPANDS MACROS WITH ARGUMENTS
    EDIT     EXE  TEXT EDITOR
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CRC.TXT

{% raw %}
```
PC-SIG Disk No. #58, version v1 

The following is a list of the file checksums which should be produced by
the CRCK4 program on disk #9 (and others).  If the CRC numbers do not match
you may have a bad file.  To use type:  CRCK4 <filespec>

CRCK4 output for this disk:


CRCK ver 4.2B (MS DOS VERSION )
CTL-S pauses, CTL-C aborts

--> FILE:  FORMAT  .EXE         CRC = 4C BF

--> FILE:  DEFINE  .EXE         CRC = F4 A1

--> FILE:  MACRO   .EXE         CRC = 92 23

--> FILE:  EDIT    .EXE         CRC = 1F 66

 ---------------------> SUM OF CRCS = F2 E9

DONE

These and other Public Domain and user-supported programs from:

PC Software Interest Group
1125 Stewart Ct  Suite G
Sunnyvale, CA 94086
(408) 730-9291
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0058

     Volume in drive A has no label
     Directory of A:\

    CRC      TXT       746  11-09-84  11:03a
    CRCK4    COM      1536  10-21-82   7:54p
    DEFINE   EXE     30976   5-31-83   2:05p
    EDIT     EXE     38528   5-31-83   3:12p
    FORMAT   EXE     33024   5-31-83   2:05p
    MACRO    EXE     32640   5-31-83   2:06p
            6 file(s)     137450 bytes
                           21504 bytes free
