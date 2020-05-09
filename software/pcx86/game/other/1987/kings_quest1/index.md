---
layout: page
title: "King's Quest (1987)"
permalink: /software/pcx86/game/other/1987/kings_quest1/
machines:
  - id: ibm-5170-kq1
    type: pcx86
    resume: 1
    config: /configs/pcx86/machine/ibm/5170/ega/1024kb/rev3/machine.xml
    autoMount:
      A:
        name: "PC DOS 3.30 (Disk 1)"
      B:
        name: "King's Quest (1987-05-05 #1)"
    autoType: \r\rb:\rinstallh c:\r
---

According to [Nerdly Pleasures](http://nerdlypleasures.blogspot.com/2017/04/the-evolution-of-kings-quest.html), the 1987 releases of
King's Quest were incremental improvements on November 1986 release, which added EGA and hard disk support.

The PCjs disk images preserve the [Copy-Protection](#copy-protection) that the game used, and PCx86 successfully passes the game's
copy-protection test.  The IBM PC AT below has diskette `King's Quest (1987-05-05 #1)` loaded in drive B:, ready to be installed on drive C:.

{% include machine.html id="ibm-5170-kq1" %}

### Online References

![King's Quest Artwork]({{ site.software.gamedisks.server }}/pcx86/game/other/1987/kings_quest1/KINGS_QUEST1.jpg)

### Directory of King's Quest (1987-05-05 #2)

     Volume in drive A has no label
     Directory of A:\

    VOL      0       46735  11-13-86  11:10a
    VOL      2       90501  11-13-86  11:12a
    OBJECT             339  10-09-86   1:45p
            3 file(s)     137575 bytes
                          223232 bytes free

### Directory of King's Quest (1987-12-01 #1)

     Volume in drive A is KQ1 DISK 1
     Directory of A:\

    CPC      COM*     8048   9-19-85   4:47p
    INSTALLH BAT      1247  12-01-87  12:11p
    _INSTALL BAT       748  12-01-87  12:11p
    SIERRA   COM      3121  12-01-87  12:11p
    AGI              39424  12-01-87  12:12p
    AGIDATA  OVL      8192  12-01-87   8:49a
    CGA_GRAF OVL      1024  12-01-87   8:48a
    JR_GRAF  OVL       512  12-01-87   8:48a
    EGA_GRAF OVL      1024  12-01-87   8:48a
    HGC_GRAF OVL      1536  12-01-87   8:48a
    VG_GRAF  OVL       512  12-01-87   8:48a
    IBM_OBJS OVL       512  12-01-87   8:48a
    HGC_OBJS OVL      1024  12-01-87   8:48a
    MAKEPATH COM        74   4-22-87  12:05p
    HGC_FONT          3072   1-26-87   3:47p
    _KQ1     BAT        39   4-07-87   2:04p
    OBJECT             331   4-09-87  11:45p
    WORDS    TOK      3144   3-27-87  11:15a
    LOGDIR             315   5-05-87   9:02a
    PICDIR             255   5-05-87   9:02a
    SNDDIR             144   5-05-87   9:02a
    VIEWDIR            432   5-05-87   9:02a
    VOL      0       48472   5-05-87   9:01a
    VOL      1      200630   5-05-87   9:01a
    KQ101078 QA         12   1-01-80  12:50a
           25 file(s)     323844 bytes
                           20480 bytes free

### Directory of King's Quest (1987-12-01 #2)

     Volume in drive A has no label
     Directory of A:\

    VOL      0       48472   5-05-87   9:01a
    VOL      2       90891   5-05-87   9:02a
    OBJECT             331   4-09-87  11:45p
    KQ101078 QA         12   1-01-80  12:50a
            4 file(s)     139706 bytes
                          220160 bytes free
