---
layout: page
title: "PC-SIG Diskette Library (Disk #264)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0264/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0264"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "FORTH 2 OF 2 (ALSO 263)"

    A Forth Language system from Henry Laxon and Mike Perry.  A compiler,
    L&P FORTH is portable and convenient, and especially good for novice
    programmers.  This is a well-structured introduction to the Forth
    language and includes an introductory text file for beginners.
    Documentation is brief and recommended reading is ``Starting FORTH'', by
    Leo Brodie.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CRC.TXT

{% raw %}
```
PC-SIG Disk No. #264, version v1 
 
The following is a list of the file checksums which should be produced by
the CRCK4 program on this disk.  If the CRC numbers do not match the following
list you may have a bad file.  To use type:  CRCK4 <filespec>
 
CRCK4 output for this disk:
 

CRCK ver 4.2B (MS DOS VERSION )
CTL-S pauses, CTL-C aborts

--> FILE:  META86  .BLK         CRC = 2D A1

--> FILE:  KERNEL86.BLK         CRC = A9 51

--> FILE:  CRCK4   .COM         CRC = BD 22

 ---------------------> SUM OF CRCS = 94 14

DONE 
 
These and other Public Domain and user-supported programs from:
 
PC Software Interest Group (PC-SIG)
1125 Stewart Ct  Suite G
Sunnyvale, CA 94086
(408) 730-9291
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0264

     Volume in drive A has no label
     Directory of A:\

    CRC      TXT       723  12-31-84  12:33p
    CRCK4    COM      1536  10-21-82   5:50p
    KERNEL86 BLK    190592   9-12-80   1:59a
    META86   BLK     49280   9-12-80  12:24a
            4 file(s)     242131 bytes
                           77824 bytes free
