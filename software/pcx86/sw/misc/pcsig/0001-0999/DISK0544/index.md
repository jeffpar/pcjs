---
layout: page
title: "PC-SIG Diskette Library (Disk #544)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0544/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0544"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "LETUS A-B-C #7"

    Letus A-B-C is a database in PC-FILE III format containing references
    to articles in six major PC oriented magazines, beginning with 1982.
    This release of Letus A-B-C covers the following four magazines devoted
    to the IBM PC: PC Magazine (PCMAG), PC World (PCW), PC Tech Journal
    (PCTEC), and Byte Magazine (BYTE).  This database provides the PC user
    with a tool for easily performing literature searches at a very nominal
    cost in one's office or home. The search is done by keyword fields as
    well as identification fields (i.e., author, title, magazine issue, and
    page); also, the authors have included three lines that give a
    general description of the article.
    
    System Requirements:   128k, 2 disk drives, PC-FILE III (Disk No 5)
    
    How to Start:  It is very important to read the Documentation file
    (Letus.doc) located on disk #350 either by screening it (entering TYPE
    LETUS.DOC at the A> and using CTRL-S to pause it) or accessing it with
    your word processor.  To run it, "boot-up" the DOS system and put
    PC-FILE system disk in drive A; enter PC-FILE <CR>.  PC-FILE will ask
    where the database is; you will have put Letus A-B-C Disk #7 in drive
    "B", so you will enter B:LETUS <CR>.  The various files on this
    diskette, corresponding to magazine and year, will be displayed on the
    screen for your selection.
    
    Suggested Registration:  $10.00 per disk.
    
    File Descriptions:
    
    PCMAG84C ???  PC Magazine Third Quarter 1984 reference files (4 files)
    BYTE84C  ???  Byte Magazine Third Quarter 1984 reference files (4 files)
    LOGO84N7 COM  Executable program that generates Letus logo
    LETUS    BAT  Batch file to generate Letus logo
    PCW84C   ???  PC World Third Quarter 1984 reference files (4 files)
    PCTEC84C ???  PC Tech Journal Third Qtr 1984 reference files (4 files)
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES544.TXT

{% raw %}
```
---------------------------------------------------------------------------
Disk No  544  LETUS A-B-C #7                                       v1  DS2
---------------------------------------------------------------------------
Literature Evaluation Table User Service - A database of articles and
letters from third quarter 1984 magazines about IBM PCs.  It requires
PC-FILE III and can be searched using keywords, author names, article
titles, issue numbers, page numbers and descriptive text.
 
BYTE84C  DTA  Byte Magazine Third Quarter 1984 reference files
BYTE84C  HDR  Byte Magazine Third Quarter 1984 reference files
BYTE84C  INX  Byte Magazine Third Quarter 1984 reference files
BYTE84C  KWD  Byte Magazine Third Quarter 1984 reference files
PCMAG84C DTA  PC Magazine Third Quarter 1984 reference files
PCMAG84C HDR  PC Magazine Third Quarter 1984 reference files
PCMAG84C INX  PC Magazine Third Quarter 1984 reference files
PCMAG84C KWD  PC Magazine Third Quarter 1984 reference files
PCTEC84C DTA  PC Tech Journal Third Quarter 1984 reference files
PCTEC84C HDR  PC Tech Journal Third Quarter 1984 reference files
PCTEC84C INX  PC Tech Journal Third Quarter 1984 reference files
PCTEC84C KWD  PC Tech Journal Third Quarter 1984 reference files
PCW84C   DTA  PC World Third Quarter 1984 reference files
PCW84C   HDR  PC World Third Quarter 1984 reference files
PCW84C   INX  PC World Third Quarter 1984 reference files
PCW84C   KWD  PC World Third Quarter 1984 reference files
LETUS    BAT  Batch file to generate Letus logo
LOGO84N7 COM  Executable program that generates Letus logo
 
 
PC-SIG (Software Interest Group)
1030 East Duane Avenue, Suite D
Sunnyvale, CA  94086
(408) 730-9291
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0544

     Volume in drive A has no label
     Directory of A:\

    BYTE84C  DTA     23680   1-15-85  11:55p
    BYTE84C  HDR       128  11-14-84  10:04a
    BYTE84C  INX      1280   1-15-85  11:57p
    BYTE84C  KWD      1890   1-15-85  11:59p
    FILES544 TXT      1730   7-10-86   2:51p
    GO       BAT       102   7-10-86   2:49p
    LETUS    BAT        13   1-19-85   2:18a
    LOGO84N7 COM      2052   1-19-85   1:59a
    PCMAG84C DTA    135552   1-19-85  12:56a
    PCMAG84C HDR       128  12-14-84  12:52a
    PCMAG84C INX      7296   1-19-85  12:56a
    PCMAG84C KWD     13178   1-15-85  11:39p
    PCTEC84C DTA     21632   1-15-85  11:47p
    PCTEC84C HDR       128  12-20-84  11:06p
    PCTEC84C INX      1152   1-15-85  11:48p
    PCTEC84C KWD      1699   1-15-85  11:51p
    PCW84C   DTA     38784   1-15-85  11:41p
    PCW84C   HDR       128  12-29-84   6:47p
    PCW84C   INX      2048   1-15-85  11:42p
    PCW84C   KWD      3769   1-15-85  11:45p
           20 file(s)     256369 bytes
                           53248 bytes free
