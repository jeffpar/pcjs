---
layout: page
title: Disk Optimizer 2.0.3
permalink: /software/pcx86/sys/ext/softlogic/optimizer/2.0.3/
redirect_from: /disks/pcx86/tools/softlogic/optimizer/2.0.3/
preview: https://diskettes.pcjs.org/pcx86/sys/ext/softlogic/optimizer/2.0.3/DISK-OPTIMIZER.jpg
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/machine/ibm/5170/cga/640kb/rev3/machine.xml
    autoGen: true
    autoMount:
      B: "Disk Optimizer 2.0.3"
    autoType: $date\r$time\rB:\rDIR\r
---

NOTE: Disk Optimizer was distributed on a copy-protected diskette.  We have created a Kryoflux copy
of the diskette in our possession (shown below), and it's clear that track 16 has some unusual characteristics,
but until we have time to analyze the diskette and software more closely, it will not operate in the PCx86
emulator as intended.

![DISK-OPTIMIZER-HxC](DISK-OPTIMIZER-HxC.png)

{% include machine.html id="ibm5170" %}

### Directory of Disk Optimizer 2.0.3

     Volume in drive A has no label
     Directory of A:\

    OPTIMIZE EXE*    18432   9-30-85  11:37a
    INSTALL  BAT      3916   3-06-86   3:50p
    ANALYZE  EXE      7209   2-18-86  10:56a
    OPTIMIZ2 PGM     16384   6-30-86   4:19p
    FILEPEEK EXE      6449   2-16-86   3:48p
    LOCK     EXE      3352   2-06-86  10:02a
    UNLOCK   EXE      3443   2-06-86  10:24a
    UNINSTAL BAT      3366   3-05-86   4:06p
    VDF0203  VDF*     2192  10-19-87  12:03a
    TRANSFER COM     50192   6-21-85   1:10p
    CML0203  FCL*    12864   6-21-85  11:05a
    MNL0203  FML*     2016   4-18-85  10:01a
    CML0203  HCL*     9344   6-19-85   4:06p
    MNL0203  HML*     1840   5-21-85   4:05p
    SGS0203  SUP*        0   9-30-85  11:49a
    OPTIMIZE COM      2016   4-18-85  10:01a
           16 file(s)     143015 bytes
                          211968 bytes free

![Disk Optimizer Diskette]({{ site.software.diskettes.server }}/pcx86/sys/ext/softlogic/optimizer/2.0.3/DISK-OPTIMIZER.jpg)
