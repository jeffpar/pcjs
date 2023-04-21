---
layout: page
title: "PC-SIG Diskette Library (Disk #96)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0096/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0096"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}
{% comment %}samples_begin{% endcomment %}

## CRC.TXT

{% raw %}
```
PC-SIG Disk No. #96, version v1 

The following is a list of the file checksums which should be produced by
the CRCK4 program on disk #9 (and others).  If the CRC numbers do not match
you may have a bad file.  To use type:  CRCK4 <filespec>

CRCK4 output for this disk:


CRCK ver 4.2B (MS DOS VERSION )
CTL-S pauses, CTL-C aborts

--> FILE:  S-CHAT  .            CRC = 10 9C

--> FILE:  S-INFO  .SIG         CRC = 9E 46

--> FILE:  S-INTRO .ED          CRC = EB FA

--> FILE:  S-LBRARY.            CRC = DC 9A

--> FILE:  S-MAIL  .            CRC = 2E 20

--> FILE:  S-MGRAM .            CRC = 0E E6

--> FILE:  S-POST  .            CRC = 73 FC

--> FILE:  S-PUBLSH.            CRC = 78 71

--> FILE:  S-USERS .IBM         CRC = 50 90

--> FILE:  README  .            CRC = 3E 38

 ---------------------> SUM OF CRCS = 2F B1

DONE

These and other Public Domain and user-supported programs from:

PC Software Interest Group
1125 Stewart Ct  Suite G
Sunnyvale, CA 94086
(408) 730-9291
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0096

     Volume in drive A has no label
     Directory of A:\

    S-CHAT            2560  11-27-83   3:34p
    S-INFO   SIG     13696  11-27-83   5:37p
    S-INTRO  ED      27648  11-27-83   3:50p
    S-LBRARY          6656  11-25-83   6:37p
    S-MAIL           13312  11-27-83   5:03p
    S-MGRAM          11520  11-27-83   3:41p
    S-POST           10752  11-27-83   4:04p
    S-PUBLSH          8704  11-25-83   8:42p
    S-USERS  IBM     27392  11-27-83   5:30p
    README             768  11-26-83   2:20p
    CRC      TXT      1028  11-09-84   1:44p
    CRCK4    COM      1536  10-21-82   7:54p
           12 file(s)     125572 bytes
                           33280 bytes free
