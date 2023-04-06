---
layout: page
title: "PC-SIG Diskette Library (Disk #269)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0269/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0269"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "BASIC DEVELOPMENT"

    A completely functional version of BetaTool's BASIC Development
    System for programs of less than 6500 bytes.  BetaTool's system works
    with the BASIC interpreter to add easy file editing, instant
    cross-reference lists, selective line renumbering, variable dump and
    program expand/compress.  If you program in BASIC you should try this
    package.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## SAMPLE.BAS

```bas
10 'This is a REMark
20 DEFINT H,I
30 DBL.PRECISION# = 4.#
40 HEX.VALUE = &HFFFF
50 B.STRING$ = "This is a string"
60 SNG.PRECISION = 5
70 IF DBL.PRECISION# > SNG.PRECISION THEN GOTO 150
80 DIM ARRAY(4)
90 FOR INDEX% = 1 TO 4
100 ARRAY(INDEX%) = INDEX%^2
110 NEXT INDEX%
120 GOTO 150
130 A.STRING$ = "This is a string" + ", too!"
140 YEAR = 1982
150 PRINT "End"
```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0269

     Volume in drive A has no label
     Directory of A:\

    BCONFIG  COM      3025  10-09-86  12:59a
    BDS      DOC      7305   8-30-88   1:17p
    COMPAQ   211     17280   8-30-88   2:23p
    COMPAQ   300     17280   8-30-88   2:23p
    COMPAQ   310     17280   8-30-88   2:23p
    COMPAQ   311     17280   8-30-88   2:23p
    COMPAQ   320     17280   8-30-88   2:23p
    COMPAQ   331     17280   8-30-88   2:23p
    COMPAQ_B 331     17280   8-30-88   2:23p
    EPSON    320     17280   8-30-88   2:23p
    FILES269 TXT      2387   9-07-88   3:37p
    GO       BAT        38  10-19-87   3:56p
    GO       TXT       694   9-07-88  11:00a
    GWBASIC  320     17280   8-30-88   2:23p
    GWBASIC  322     17280   8-30-88   2:23p
    HYUNDAI  320     17280   8-30-88   2:23p
    IBMPC    2XX     17280   8-30-88   2:22p
    IBMPC    3XX     17280   8-30-88   2:22p
    MANUAL   BAT       147   9-07-88  11:00a
    SAMPLE   BAS       384   1-02-83  12:04a
    TNDY1000 321     17280   8-30-88   2:23p
    TNDY1000 322     17280   8-30-88   2:23p
    TNDY1400 321     17280   8-30-88   2:23p
    TNDY3000 320     17280   8-30-88   2:23p
    TNDY4000 321     17280   8-30-88   2:23p
    ZENITH   322     17280   8-30-88   2:23p
           26 file(s)     342300 bytes
                           13312 bytes free
