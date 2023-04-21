---
layout: page
title: "PC-SIG Diskette Library (Disk #103)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0103/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0103"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "COMPUSERVE AND BBS UTILITIES"

    This disk has two sections.  The first is about Compuserve, the
    mainframe BBS, and the second is just BBS's in general.  The
    information about the CompuServe commands was downloaded in
    December, 1983.  It uses a menu approach to information selection
    and display.  Most features of the service are available through
    page-numbered menus.
    
    How to Start: As these are text files for information and help in
    using CompuServ, first scan and then print what you need.  To scan:
    enter from the prompt TYPE A:<filename>.  To Print, enter: PRINT
    A:<filename>.
    
    File Descriptions:
    
    CS-BUS        CompuServe - Business Services Sampler
    CS-POST       CompuServe - Public Bulletin Board Instructions
    CS-INSTR      CompuServe - General Instructions
    CS-TRAVL      CompuServe - Travel Services Sampler
    CS-PRO        CompuServe - Professional Services Sampler
    ALCATRAZ BBS  Sample from a St. Louis public BBS
    EMC80    BBS  Sample from a TRS80 St. Louis public BBS
    MIDWEST  BBS  Instructions for sex-oriented St. Louis public BBS
    README        Listing of included files
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CRC.TXT

{% raw %}
```
PC-SIG Disk No. #103, version v1 

The following is a list of the file checksums which should be produced by
the CRCK4 program on disk #9 (and others).  If the CRC numbers do not match
you may have a bad file.  To use type:  CRCK4 <filespec>

CRCK4 output for this disk:


CRCK ver 4.2B (MS DOS VERSION )
CTL-S pauses, CTL-C aborts

--> FILE:  ALCATRAZ.BBS         CRC = 80 3C

--> FILE:  CS-BUS  .            CRC = AE 96

--> FILE:  CS-INSTR.            CRC = 00 78

--> FILE:  CS-POST .            CRC = B0 C5

--> FILE:  CS-PRO  .            CRC = AD 90

--> FILE:  CS-TRAVL.            CRC = 3D 34

--> FILE:  EMC80   .BBS         CRC = EE 94

--> FILE:  MIDWEST .BBS         CRC = 90 38

--> FILE:  README  .            CRC = DA 22

 ---------------------> SUM OF CRCS = 23 C1

DONE

These and other Public Domain and user-supported programs from:

PC Software Interest Group
1125 Stewart Ct  Suite G
Sunnyvale, CA 94086
(408) 730-9291
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0103

     Volume in drive A has no label
     Directory of A:\

    ALCATRAZ BBS      9600  12-10-83   9:48p
    CS-BUS           54528  12-14-83   4:28p
    CS-INSTR          6656  12-10-83  10:10p
    CS-POST           6784  12-10-83  10:33p
    CS-PRO           20864  12-25-83   1:16p
    CS-TRAVL         29440  12-25-83   1:45p
    EMC80    BBS     13184  12-10-83  10:57p
    MIDWEST  BBS     13824  12-20-83   5:15p
    README             768  12-25-83   5:37p
    CRC      TXT       982  11-09-84   2:02p
    CRCK4    COM      1536  10-21-82   7:54p
           11 file(s)     158166 bytes
                             512 bytes free
