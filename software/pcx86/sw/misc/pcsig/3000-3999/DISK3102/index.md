---
layout: page
title: "PC-SIG Library Disk #3102"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3102/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3102"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## CESMOUSE.BAS

```bas
REM This file is an $include Quick Basic file when using
REM the medium memory model of the CESMouse Tools Library
REM Copyright 1989, 1991, Computer Engineering Services

DECLARE FUNCTION showmouse CDECL
DECLARE FUNCTION hidemouse CDECL
DECLARE FUNCTION posmouse CDECL (X AS INTEGER, Y AS INTEGER)

DECLARE FUNCTION resetmouse% CDECL
DECLARE FUNCTION mousedrvr% CDECL
DECLARE FUNCTION buttons% CDECL
DECLARE FUNCTION lftbutton% CDECL
DECLARE FUNCTION ctrbutton% CDECL
DECLARE FUNCTION rgtbutton% CDECL
DECLARE FUNCTION mousecursX% CDECL
DECLARE FUNCTION mousecursY% CDECL

DECLARE lastMX AS INTEGER
DECLARE lastMY AS INTEGER
DECLARE mbtns AS INTEGER
```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3102

     Volume in drive A has no label
     Directory of A:\

    CESJOY   H         270   9-09-89   5:49p
    CESMOUSE BAS       672   6-02-91   1:27p
    CESMOUSE DOC     55723   9-23-91   8:18p
    CESMOUSE H        1699   6-01-91   3:43p
    PRINTDOC BAT       310   6-01-91  10:45p
    READ     ME       1694   6-08-91   7:33a
    README   EXE      8528   3-12-91   8:00p
    FILE3102 TXT       916   8-27-92   3:43a
    JOYTEST  C        1171   5-27-91   3:04p
    JOYTEST  EXE     11037   9-09-89   6:31p
    MUSTEST  EXE     10232   6-15-91   9:12a
    MUSTEST  C        1734   6-15-91   9:08a
    CGAHAND  EXE     13024   9-23-91  12:55p
    TCHAND   C         921   9-22-91   9:29p
    PCHAND   C         835   9-23-91  12:55p
    MOUSEMSM LIB     28469   9-23-91   8:59p
    JOYMSM   LIB      4153   5-28-91   8:23p
    MOUSEPCM LIB     23970   9-23-91   7:32p
    JOYPCM   LIB      1138   5-27-91   3:27p
    MOUSEQCM LIB     44341   9-23-91   7:44p
    JOYQCM   LIB      6201   5-28-91  10:38p
    MOUSETCM LIB     25600   9-22-91   9:53p
    JOYTCM   LIB      3072   5-31-91  12:51p
           23 file(s)     245710 bytes
                           66560 bytes free
