---
layout: page
title: "PC-SIG Diskette Library (Disk #147)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0147/
preview: https://pcsigdisks.pcjs.org/pcx86/sw/misc/pcsig/0001-0999/DISK0147/DISK0147.jpg
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0147"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "SDB"

    SDB is a relational database system written in the C programming
    language.  SDB is a simple database manager developed to
    provide a relatively low overhead system for storing data on machines
    with limited disk and memory resources.
    
    While it performs very well as a somewhat limited database, the program
    has the source code in the C language included.  This represents
    opportunities for programmers to get a look at how the functions have
    been constructed.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CRC.TXT

{% raw %}
```
PC-SIG Disk No. #147, version v1 

The following is a list of the file checksums which should be produced by
the CRCK4 program on disk #9 (and others).  If the CRC numbers do not match
you may have a bad file.  To use type:  CRCK4 <filespec>

CRCK4 output for this disk:


CRCK ver 4.2B (MS DOS VERSION )
CTL-S pauses, CTL-C aborts

--> FILE:  README  .            CRC = EA 56

--> FILE:  SDBGEN  .ARF         CRC = 00 00

--> FILE:  SDBGEN  .BAT         CRC = 00 00

--> FILE:  SDBGREP .BAT         CRC = 00 00

--> FILE:  SDBLUMP .BAT         CRC = 6F 7A

--> FILE:  SDBXC   .BAT         CRC = 00 00

--> FILE:  SDB     .EXE         CRC = 2D BE

--> FILE:  SDB     .HLP         CRC = C4 41

--> FILE:  SDB     .MEM         CRC = 2D 4A

--> FILE:  SDB     .C           CRC = E8 74

--> FILE:  CMD     .C           CRC = DD 3E

--> FILE:  COM     .C           CRC = 2D 32

--> FILE:  ERR     .C           CRC = FA E1

--> FILE:  CRE     .C           CRC = 66 21

--> FILE:  IEX     .C           CRC = A0 87

--> FILE:  INT     .C           CRC = 22 6F

--> FILE:  IO      .C           CRC = 2A F7

--> FILE:  MTH     .C           CRC = DA C8

--> FILE:  SCN     .C           CRC = 1A B8

--> FILE:  SEL     .C           CRC = 79 BC

--> FILE:  TBL     .C           CRC = 6D 61

--> FILE:  PCJUNK  .C           CRC = 6D 92

--> FILE:  SRT     .C           CRC = B0 E3

--> FILE:  JUNK    .OBJ         CRC = 5F B7

--> FILE:  SDB     .OBJ         CRC = 87 06

--> FILE:  CRE     .OBJ         CRC = F2 6A

--> FILE:  ERR     .OBJ         CRC = 26 27

--> FILE:  IEX     .OBJ         CRC = 18 FA

--> FILE:  INT     .OBJ         CRC = 9B C5

--> FILE:  CMD     .OBJ         CRC = F1 C5

--> FILE:  COM     .OBJ         CRC = 30 CE

--> FILE:  MTH     .OBJ         CRC = 00 F8

--> FILE:  SCN     .OBJ         CRC = 97 C3

--> FILE:  SEL     .OBJ         CRC = 60 CA

--> FILE:  SRT     .OBJ         CRC = DE 50

--> FILE:  TBL     .OBJ         CRC = 64 95

--> FILE:  IO      .OBJ         CRC = 95 E7

--> FILE:  C       .OBJ         CRC = 8B 0F

--> FILE:  PCJUNK  .OBJ         CRC = 25 0F

--> FILE:  SDBIO   .H           CRC = B8 5C

 ---------------------> SUM OF CRCS = C7 69

DONE

These and other Public Domain and user-supported programs from:

PC Software Interest Group
1125 Stewart Ct  Suite G
Sunnyvale, CA 94086
(408) 730-9291
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0147

     Volume in drive A is #147 V1
     Directory of A:\

    README             388   4-15-84   1:54p
    SDBGEN   ARF        94  12-30-83   2:25p
    SDBGEN   BAT        34  12-28-83   3:45p
    SDBGREP  BAT       125  12-30-83   2:25p
    SDBLUMP  BAT       220   1-01-84   2:01p
    SDBXC    BAT       103   1-08-84   4:51p
    SDB      EXE     38528   1-13-84   8:20p
    SDB      HLP      1343  12-21-83   8:49p
    SDB      MEM     25395   1-06-84  10:49a
    SDB      C         390  12-21-83   9:29p
    CMD      C       21016   1-10-84   7:57p
    COM      C       10299  12-30-83   2:21p
    ERR      C        1708  12-21-83   9:23p
    CRE      C        4028  12-21-83   9:23p
    IEX      C        7006  12-21-83   9:31p
    INT      C        4612  12-21-83   9:25p
    IO       C       10853   1-10-84   7:53p
    MTH      C        8005  12-30-83   3:37p
    SCN      C       14991   1-10-84   8:37p
    SEL      C       21233  12-22-83   7:52p
    TBL      C        2670  12-22-83   8:03p
    PCJUNK   C        1438   1-12-84   8:30p
    SRT      C        8623   1-13-84   8:18p
    JUNK     OBJ       503  12-28-83   4:18p
    SDB      OBJ       468   1-13-84   5:43p
    CRE      OBJ      1493  12-30-83   2:31p
    ERR      OBJ      1153  12-30-83   2:32p
    IEX      OBJ      2721  12-30-83   2:33p
    INT      OBJ      2361  12-30-83   2:34p
    CMD      OBJ      8073   1-10-84   7:59p
    COM      OBJ      3642  12-30-83   2:30p
    MTH      OBJ      2120  12-30-83   3:38p
    SCN      OBJ      5993   1-10-84   8:42p
    SEL      OBJ      5438  12-30-83   2:40p
    SRT      OBJ      2654   1-13-84   8:19p
    TBL      OBJ      1283  12-30-83   2:42p
    IO       OBJ      2906  12-30-83   2:35p
    C        OBJ       512   1-01-80  12:12a
    PCJUNK   OBJ      1137   1-12-84   8:30p
    SDBIO    H        7988   1-10-84   8:40p
    CRC      TXT      2439  11-13-84   3:24p
    CRCK4    COM      1536  10-21-82   7:54p
           42 file(s)     237522 bytes
                          102400 bytes free

![PC-SIG Library Disk #0147]({{ site.software.pcsigdisks.server }}/pcx86/sw/misc/pcsig/0001-0999/DISK0147/DISK0147.jpg)
