---
layout: page
title: Microsoft Multiplan 2.01
permalink: /software/pcx86/app/microsoft/multiplan/2.01/
redirect_from: /disks/pcx86/apps/microsoft/multiplan/2.01/
machines:
  - id: ibm5170
    type: pcx86
    config: /configs/pcx86/machine/ibm/5170/cga/640kb/rev3/machine.xml
    autoGen: true
    autoMount:
      B: "MS Multiplan 2.01 (INSTALL)"
    autoType: $date\r$time\rB:\rDIR\r
---

NOTE: The Microsoft Multiplan 2.01 disks below are *not* original distribution disks.  They were obtained from
[VETUSWARE](https://vetusware.com/download/Multiplan%20Version%202/?id=5148).  Unlike older versions of Multiplan
found online, this copy *does* include installation files, so we have attempted to recreate the `INSTALL` and
`PROGRAM` as they originally existed.  However, this means that before you can run `MP.COM` on the `PROGRAM` disk,
you must run the installation program to properly "install" `MP.COM` for the machine currently being used.

The `PROGRAM` disk also includes [Microsoft Mouse 5.00](/software/pcx86/dev/mouse/microsoft/5.00/) driver files.
They match the 5.00 distribution files, even though they have been time-stamped with the same date as the Multiplan
files.

{% include machine.html id="ibm5170" %}

### Directory of MS Multiplan 2.01 (INSTALL)

     Volume in drive A is MP201INST
     Directory of A:\

    CONVERTD EXE     34944   2-10-86  12:00p
    IBMSETUP COM     19808   1-05-87   4:24p
    INSTALL  COM      6934   2-10-86  12:00p
    INSTALL  DAT     48145   2-10-86  12:00p
    INSTALL  MSG     14876   2-10-86  12:00p
    INSTALL  OVL     37498   2-10-86  12:00p
    INSTALL  SPC       128   2-10-86  12:00p
    PATCH21  EXE     12040   2-10-86  12:00p
            8 file(s)     174373 bytes
                          143360 bytes free

### Directory of MS Multiplan 2.01 (PROGRAM)

     Volume in drive A is MP201PROG
     Directory of A:\

    AMOR     MOD      7184   2-10-86  12:00p
    DEPREC   MOD      7480   2-10-86  12:00p
    LINKMC   COM       928   2-10-86  12:00p
    MOUSE    COM      7067   2-10-86  12:00p
    MOUSE    SYS      7294   2-10-86  12:00p
    MP       COD     46464   2-10-86  12:00p
    MP       COM     25010   7-24-93  12:32a
    MP       HLP     60368   2-10-86  12:00p
    MP       INI       122   7-24-93  12:32a
    MP       PIF       369   2-10-86  12:00p
    MP       SYS     73344   2-10-86  12:00p
    MP40     DAT     12392   2-10-86  12:00p
    MP80     DAT     12400   2-10-86  12:00p
    MPWIN    PIF       369   2-10-86  12:00p
    PRICE    MOD      5754   2-10-86  12:00p
    READ     ME       2983   2-10-86  12:00p
    STARTUP  MOD      7345   2-10-86  12:00p
           17 file(s)     276873 bytes
                           35840 bytes free
