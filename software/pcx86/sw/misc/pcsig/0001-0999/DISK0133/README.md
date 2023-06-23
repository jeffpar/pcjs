---
layout: page
title: "PC-SIG Diskette Library (Disk #133)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0133/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0133"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}
{% comment %}samples_begin{% endcomment %}

## CRC.TXT

{% raw %}
```
PC-SIG Disk No. #133, version v2 

The following is a list of the file checksums which should be produced by
the CRCK4 program on disk #9 (and others).  If the CRC numbers do not match
you may have a bad file.  To use type:  CRCK4 <filespec>

CRCK4 output for this disk:


CRCK ver 4.2B (MS DOS VERSION )
CTL-S pauses, CTL-C aborts

--> FILE:  U-ZAP   .EXE         CRC = DE D7

--> FILE:  U-FILE  .EXE         CRC = D7 D8

--> FILE:  SKELETON.BQS         CRC = 41 3C

--> FILE:  U-OPT   .DQC         CRC = 58 08

--> FILE:  TEST    .ATR         CRC = 15 7D

--> FILE:  TEST    .HDR         CRC = 0F 25

--> FILE:  READTHIS.NOW         CRC = BB BF

--> FILE:  U-MIND  .BQS         CRC = D2 87

--> FILE:  U-FORMAT.EXE         CRC = 32 08

--> FILE:  U-MIND  .DQC         CRC = 93 81

--> FILE:  USQ     .COM         CRC = 92 7B

--> FILE:  U-OPT   .EQE         CRC = FC EB

--> FILE:  DOC41   .TQT         CRC = 6D 4E

--> FILE:  DOC42   .TQT         CRC = 29 67

--> FILE:  README  .NOW         CRC = BB BF

 ---------------------> SUM OF CRCS = AA 3E

DONE

These and other Public Domain and user-supported programs from:

PC Software Interest Group
1125 Stewart Ct  Suite G
Sunnyvale, CA 94086
(408) 730-9291
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0133

     Volume in drive A has no label
     Directory of A:\

    U-ZAP    EXE     62720   8-21-84   4:01a
    U-FILE   EXE     62592   8-21-84   4:01a
    SKELETON BQS     13907   1-29-84   3:51p
    U-OPT    DQC      1434   1-29-84   3:56p
    TEST     ATR      1653  12-20-83   8:32p
    TEST     HDR       128  12-20-83   7:07p
    READTHIS NOW      2669   1-29-84   7:14p
    U-MIND   BQS     12259   1-29-84   3:49p
    U-FORMAT EXE     38656   8-21-84   4:01a
    U-MIND   DQC     26518   1-29-84   3:46p
    USQ      COM     22016   1-12-84   6:27p
    U-OPT    EQE     23034   1-29-84   3:54p
    DOC41    TQT     26167   1-29-84   4:28p
    DOC42    TQT     11649   1-29-84   4:29p
    README   NOW      2669   1-29-84   7:14p
    CRC      TXT      1264  11-13-84  11:42a
    CRCK4    COM      1536  10-21-82   7:54p
    GO       BAT       187   4-15-85   2:35p
           18 file(s)     311058 bytes
                            2048 bytes free
