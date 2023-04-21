---
layout: page
title: "PC-SIG Diskette Library (Disk #122)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0122/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0122"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "LETUS A-B-C VOL 2"

    Letus A-B-C is a database in PC-FILE III format containing references
    to articles in six major PC oriented magazines, beginning with 1982.
    This disk of Letus A-B-C covers the following three magazines devoted
    to the IBM PC: Softalk (SOFT), Personal Computer Age (PCAGE), and PC
    Magazine (PCMAG)  This is the second disk of a three (#121-123); see
    Disk #121 for a complete description.
    
    Suggested Registration:  $10.00 per disk.
    
    File Descriptions:
    
    PCMAG83A ???  PC Mag. first 6 months 1983 magazine ref. files (4 files)
    SOFT83   ???  Softalk 1983 magazine reference files (4 files)
    LOGO83A  COM  Generates Letus logo
    LETUS    BAT  Batch file for starting Letus
    PCAGE83  ???  PC Age 1983 magazine reference files (4 files)
    PLOGO83  COM  Prints out LETUS A-B-C documentation
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CRC.TXT

{% raw %}
```
PC-SIG Disk No. #122, version v1 

The following is a list of the file checksums which should be produced by
the CRCK4 program on disk #9 (and others).  If the CRC numbers do not match
you may have a bad file.  To use type:  CRCK4 <filespec>

CRCK4 output for this disk:


CRCK ver 4.2B (MS DOS VERSION )
CTL-S pauses, CTL-C aborts

--> FILE:  SOFT83  .DTA         CRC = 55 08

--> FILE:  SOFT83  .INX         CRC = 0C 38

--> FILE:  SOFT83  .HDR         CRC = 24 85

--> FILE:  SOFT83  .KEY         CRC = FF 89

--> FILE:  PCMAG83A.DTA         CRC = 70 E9

--> FILE:  PCMAG83A.INX         CRC = 70 37

--> FILE:  PCMAG83A.HDR         CRC = 24 85

--> FILE:  PCMAG83A.KEY         CRC = A0 F7

--> FILE:  PCAGE83 .DTA         CRC = 0B 4D

--> FILE:  PCAGE83 .INX         CRC = 7E 60

--> FILE:  PCAGE83 .HDR         CRC = 24 85

--> FILE:  PCAGE83 .KEY         CRC = B1 D2

--> FILE:  LETUS   .BAT         CRC = 00 00

--> FILE:  LOGO83A .COM         CRC = B5 78

--> FILE:  PLOGO83 .COM         CRC = 06 E2

 ---------------------> SUM OF CRCS = 48 48

DONE

These and other Public Domain and user-supported programs from:

PC Software Interest Group
1125 Stewart Ct  Suite G
Sunnyvale, CA 94086
(408) 730-9291
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0122

     Volume in drive A has no label
     Directory of A:\

    CRC      TXT      1264  11-09-84   2:57p
    CRCK4    COM      1536  10-21-82   7:54p
    LETUS    BAT        45   1-28-84   6:01p
    LOGO83A  COM      2132   1-28-84   6:48p
    PCAGE83  DTA     80896   1-27-84  10:40p
    PCAGE83  HDR       128   1-27-84  10:40p
    PCAGE83  INX      4352   1-27-84  10:40p
    PCAGE83  KEY      5789   1-27-84  10:41p
    PCMAG83A DTA     80384   1-27-84  10:37p
    PCMAG83A HDR       128   1-27-84  10:34p
    PCMAG83A INX      4352   1-27-84  10:37p
    PCMAG83A KEY      6713   1-27-84  10:39p
    PLOGO83  COM      2132   1-28-84   5:46p
    SOFT83   DTA     94208   1-27-84  10:31p
    SOFT83   HDR       128   1-27-84  10:29p
    SOFT83   INX      5120   1-27-84  10:31p
    SOFT83   KEY      5738   1-27-84  10:32p
           17 file(s)     295045 bytes
                           17408 bytes free
