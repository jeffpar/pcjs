---
layout: page
title: "PC-SIG Library Disk #149"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0149/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0149"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "C UTILITIES NO 1"

    The files on the disk contain many useful routines including LUMP which
    is used to join files together for BBS file transfer. Inversely the
    UNLUMP routine separates the files.  This disk also contains a UNIX-
    type GREP string search function.
    
    System Requirements:  Optional C compiler
    
    How to Start: To read the files with the DOC extension enter
    TYPE filename.DOC <ENTER>.  To run files with EXE extention,
    type: filename <ENTER>.  To run the programs with the C
    extension, refer to your C manual for compilation and linkage.
    
    File Descriptions:
    
    LUMP     DOC  Documentation for LUMP
    UNLUMP   EXE  Program to split files apart
    LUMP     EXE  Program to lump files together
    UNLUMP   C    Source code for UNLUMP
    LUMP     C    Source code for LUMP
    GREP     EXE  Unix like grep command to find strings in files
    GREP     DOC  Documentation for GREP
    CC       C    Source code for CC
    CC       OBJ  Object file for CC
    CC       EXE  c program checker
    CC       DOC  Documentation for CC
    XC       EXE  Xreference utility for c programs
    XC       C    Source code for LUMP
    XC       DOC  Documentation for XC
    GREP     C    Source code for LUMP
    README        Notes about the files on this disk
{% comment %}info_end{% endcomment %}


### Directory of PC-SIG Library Disk 0149

     Volume in drive A has no label
     Directory of A:\

    CC       C        3294   4-15-84   3:15p
    CC       DOC       466   4-15-84   3:19p
    CC       EXE     12160   4-15-84   3:17p
    CC       OBJ       990   4-15-84   3:16p
    CRC      TXT      1405  11-14-84   8:53a
    CRCK4    COM      1536  10-21-82   7:54p
    GREP     C       16726  11-29-83  11:14a
    GREP     DOC      3467   2-05-84  11:55a
    GREP     EXE     18432  12-05-83   6:08p
    LUMP     C        1099  12-30-83   1:33p
    LUMP     DOC       489   2-05-84  11:59a
    LUMP     EXE     11904  12-30-83   1:34p
    README            1274   4-15-84   3:41p
    UNLUMP   C        1437  12-30-83   1:25p
    UNLUMP   EXE     14336  12-30-83   1:41p
    XC       C       24797   2-04-84   2:47p
    XC       DOC      2237   2-05-84  11:48a
    XC       EXE     19072   1-01-84  12:13p
           18 file(s)     135121 bytes
                           22016 bytes free
