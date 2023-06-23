---
layout: page
title: "PC-SIG Diskette Library (Disk #234)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0234/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0234"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "TPNCALC"

    This is a user-supported program, intended for use by Pharmacists to
    calculate intravenous electrolyte additives needed to compound a
    Hyperalimentation order according to the medical doctors
    specifications.  A rather specialized field, it's true, but for those
    with a need, it's a real timesaver.
    
    How to Start:   Load DOS and type TPNCALC to invoke the program.
    Consult TPNDOC for program documentation.
    
    File Descriptions:
    TPNDOC        Documentaion  (14K)
    TPNCALC  EXE  Main program
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CRC.TXT

{% raw %}
```
PC-SIG Disk No. #234, version v1 

The following is a list of the file checksums which should be produced by
the CRCK4 program on disk #9 (and others).  If the CRC numbers do not match
you may have a bad file.  To use type:  CRCK4 <filespec>

CRCK4 output for this disk:


CRCK ver 4.2B (MS DOS VERSION )
CTL-S pauses, CTL-C aborts

--> FILE:  TPNCALC .EXE         CRC = 5A 96

--> FILE:  TPNDOC  .            CRC = 89 41

 ---------------------> SUM OF CRCS = E3 D7

DONE

These and other Public Domain and user-supported programs from:

PC Software Interest Group
1125 Stewart Ct  Suite G
Sunnyvale, CA 94086
(408) 730-9291
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0234

     Volume in drive A has no label
     Directory of A:\

    CRC      TXT       653  11-16-84   7:30a
    CRCK4    COM      1536  10-21-82   7:54p
    TPNCALC  EXE     84608   9-03-84   5:36p
    TPNDOC           14181   9-04-84  12:31a
            4 file(s)     100978 bytes
                           58368 bytes free
