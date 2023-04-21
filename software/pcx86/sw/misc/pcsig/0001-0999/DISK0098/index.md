---
layout: page
title: "PC-SIG Diskette Library (Disk #98)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0098/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0098"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "SOURCE AND COMPUSERVE"

    For use by current or potential SOURCE and Compuserve subscribers for
    log- on instructions and to verify if there is a nearby access number.
    This can be a real time and money-saver if you are unsure of the
    availability of a local access number for a service.
    
    How to Start: To read the information, from DOS enter TYPE S-PHONE.NOS
    (for SOURCE) or enter TYPE CS-PHONE.NOS (for CompuServe)
    
    File Descriptions:
    
    CS-PHONE NOS  Telenet, Tymnet & CompuServeNet CompuServe access numbers
    S-PHONE  NOS  Telenet, Uninet, Tymnet & SOURCEnet SOURCE access numbers
    README        Listing of included files
    CS-USERS IBM  Information from IBM-PC SIG
    CS-IBM   SIG  Information from IBM-PC SIG
    T-BBS-NO      Listing of BBSs
    S-BBS         Information about BBSs
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CRC.TXT

{% raw %}
```
PC-SIG Disk No. #98, version v1 

The following is a list of the file checksums which should be produced by
the CRCK4 program on disk #9 (and others).  If the CRC numbers do not match
you may have a bad file.  To use type:  CRCK4 <filespec>

CRCK4 output for this disk:


CRCK ver 4.2B (MS DOS VERSION )
CTL-S pauses, CTL-C aborts

--> FILE:  S-PHONE .NOS         CRC = 12 D7

--> FILE:  CS-PHONE.NOS         CRC = EF 50

--> FILE:  README  .BAK         CRC = 57 62

--> FILE:  README  .            CRC = 62 87

 ---------------------> SUM OF CRCS = BC 10

DONE

These and other Public Domain and user-supported programs from:

PC Software Interest Group
1125 Stewart Ct  Suite G
Sunnyvale, CA 94086
(408) 730-9291
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0098

     Volume in drive A has no label
     Directory of A:\

    S-PHONE  NOS     65408  11-27-83   3:39a
    CS-PHONE NOS     87936  11-26-83   9:29p
    README   BAK       220  11-26-83  10:48a
    README             384  11-26-83  10:52a
    CRC      TXT       746  11-09-84   1:48p
    CRCK4    COM      1536  10-21-82   7:54p
            6 file(s)     156230 bytes
                            3072 bytes free
