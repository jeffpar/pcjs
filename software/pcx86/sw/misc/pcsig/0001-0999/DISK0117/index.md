---
layout: page
title: "PC-SIG Library Disk #117"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0117/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0117"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "MICROGOURMET 2 OF 2  (#116 FIRST DISK)"

    MicroGourmet is a two-disk software package, which functions through
    dBASE II, but will also run through dBASE III after it is converted. It
    was designed to help those of you who spend great gobs of time looking
    through cookbooks and rummaging through scraps of paper to find those
    elusive recipes you put right here or maybe here...or!!!
    
    MicroGourmet will help reduce the time spent choosing recipes to
    prepare for both family and guest meals.  It is also an aid to menu
    planning.  You can select recipes for whatever time period you wish (a
    week, for instance), print the recipes (as a reference), and prepare
    and print a shopping list to take to the store.  You can also add and
    change recipes. A great way to increase your culinary skills.
    
    System Requirements: Two disk drives, dBASEII
    
    How to Start:  Access microGOURMET through DBASEII.  At the dot prompt,
    type DO MENU.  Consult MANUAL.DOC for program documentation.
    
    File Descriptions:
    
    The First Disk Contains:
    GOURMET  LOW  Version of M-G for single-sided drives (rename .PRG)
    GOURMET  HI   Version of M-G for 360K or HDU drives  (rename .PRG)
    READ     ME   Notes about MicroGOURMET programs and listing documentatio
    MANUAL   DOC  MicroGOURMET manual in listable DOS file format
    ITEM     NDX  MicroGOURMET dBASE II index file
    NUMBER   NDX  MicroGOURMET dBASE II index file
    TYPE     NDX  MicroGOURMET dBASE II index file
    SHOP     DBF  MicroGOURMET dBASE II database file
    ITEM     DBF  MicroGOURMET dBASE II database file
    
    The Second Disk Contains:
    MANUAL   TXT  MicroGOURMET manual  (WORDSTAR format)
    GOURMET  DBF  MicroGOURMET dBASE II database file
    UNWS     BAS  Program for converting WORDSTAR files to DOS files
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## UNWS.BAS

```bas
10 'This program converts a Wordstar file to a standard text file
20 'that can be transmitted using 7 data bits. Wordstar uses 8-bit
30 'characters to produce soft spaces and soft hyphens.
40 'Modified from Personal Computer Age program by Larry Jordan
50 '
100 DEFINT A:CLS:KEY OFF
110 LOCATE 13,25:INPUT "Wordstar file to convert - ";IFN$
120 LOCATE 15,25:INPUT "Converted file name - ";OFN$
130 OPEN IFN$ FOR INPUT AS #1
140 OPEN OFN$ FOR OUTPUT AS #2
150 CLS:LOCATE 13,25:PRINT "Working on character - ";
160 WHILE NOT EOF(1)
170 A1=ASC(INPUT$(1,1))
180 IF A1<127 THEN 210
190   LOCATE 13,48:PRINT CHR$(A1)
200   A1=A1-128
210 A$=CHR$(A1):PRINT #2,A$;
220 IF A1=26 THEN 999
230 WEND
999 CLOSE:CLS:KEY ON:LOCATE 13,30:PRINT "Done....":BEEP
```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk 0117

     Volume in drive A has no label
     Directory of A:\

    CRC      TXT       700  11-09-84   2:41p
    CRCK4    COM      1536  10-21-82   7:54p
    GOURMET  DBF     90880   1-05-85   7:20p
    MANUAL   TXT     50304   1-05-85   8:39p
    UNWS     BAS       768   8-22-83   7:40p
            5 file(s)     144188 bytes
                           14848 bytes free
