---
layout: page
title: Microsoft Mouse 5.00
permalink: /software/pcx86/dev/mouse/microsoft/5.00/
redirect_from: /disks/pcx86/tools/microsoft/mouse/5.00/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/ega/640kb/rev1/enhanced/machine.xml
    autoMount:
      A:
        name: PC DOS 3.30 (Disk 1)
      B:
        name: MS Mouse 5.00 (SYSTEM)
    autoType: \r\rB:\rMOUSE\r$40PIANO\r
---

The following PCjs diskette images come from our private disk collection, and they include additional files
that were probably not on the original Microsoft distribution disks.

In particular, the [MS Mouse 5.00 (PROGRAM)](#directory-of-ms-mouse-500-program) diskette contains a `MOUSE6`
subdirectory with a mouse driver that displays:

	--- Installing Microsoft MOUSE    Device Driver v6.b4 test ---

{% include machine.html id="ibm5170" %}

### Directory of MS Mouse 5.00 (SYSTEM)

     Volume in drive A has no label
     Directory of A:\

    README   DOC     15726   9-15-85   8:42p
    SETUP    COM     32990   9-15-85   7:20p
    123      DEF      3356   5-01-85  12:00p
    123      MNU      1024   5-01-85  12:00p
    AUTOEXEC BAT        17   5-01-85  12:00p
    LIFE     EXE      2095   5-01-85  12:00p
    MAKEMENU EXE     25180   5-01-85  12:00p
    MENU     COM      2434   5-01-85  12:00p
    MOUSE    COM      7067   8-27-85  12:03p
    MOUSE    LIB      2560   5-01-85  12:00p
    MOUSE    SYS      7294   8-27-85  12:01p
    MPIBM    DEF      7712   5-01-85  12:00p
    MPIBM    MNU      1664   5-01-85  12:00p
    MPMS     DEF      7705   5-01-85  12:00p
    MPMS     MNU      1664   5-01-85  12:00p
    NOTEPAD  COM     12270   5-01-85  12:00p
    NP       COD     25960   5-01-85  12:00p
    NP       DAT      8522   5-01-85  12:00p
    NP       HLP     17641   6-14-85  12:00p
    PIANO    BAS      9031   1-04-80   2:27a
    PIANO    EXE     33044   5-01-85  12:00p
    VC       DEF      7977   5-01-85  12:00p
    VC       MNU      2560   5-01-85  12:00p
    WS       DEF     13560   5-01-85  12:00p
    WS       MNU      4608   5-01-85  12:00p
    DIVISION            62   9-15-85   8:55p
    EVX      DEV       557   9-09-85   6:36p
    TE1      DEV       875   9-09-85   6:33p
    TE2      DEV       898   9-14-85   9:46p
    ATT      DEV       954   9-12-85   3:54p
    PLN      DEV       898   9-09-85   6:38p
    HER      DEV       572   9-09-85   6:36p
    TWO      DEV       946   9-14-85  10:19p
    IBM      DEV       570   9-12-85   4:24a
    EGA      DEV       977   9-14-85  11:30p
    LN2      DEV       407   9-14-85  11:59p
    SETCOLOR EXE     16518   9-01-85   4:41a
    DRIVE1           26087   9-14-85  11:30p
    DRIVE2           27072   9-14-85  10:19p
    BIT9X14  FNT      7426   4-12-85   2:56p
    BIT5X7   FNT      1154   4-12-85   2:56p
    BIT5X8   FNT      1282   4-12-85   2:56p
           42 file(s)     340916 bytes
                               0 bytes free

### Directory of MS Mouse 5.00 (PROGRAM)

     Volume in drive A has no label
     Directory of A:\

    MOUSE    COM      7067   8-27-85  12:03p
    FRIEZE   COM     43762   8-23-86   9:58a
    FRIEZE   TPL     16387   5-05-86   3:35p
    PCINSTAL EXE     29446   9-14-85  11:47p
    PBRUSH   EXE    123096   2-11-86   5:06p
    PBRUSH   OVL      1225   1-15-86   5:00p
    DEF16    PAL      1156   4-12-85   2:56p
    DEF4     PAL      1156   4-15-85   6:22p
    DEF2     PAL      1156   8-19-85   3:47a
    ROMAN    FNT      8001   4-12-85   2:56p
    BIT8X8   FNT      2314   8-30-85   1:42p
    BIT8X14  FNT      3856   8-30-85   1:42p
    BIT8X16  FNT      4370   8-30-85   1:42p
    BIT16X14 FNT      7426   8-30-85   1:43p
    BIT16X16 FNT      8450   8-30-85   1:43p
    PSETUP   DAT       151   8-05-86   8:08p
    CARDS    DAT      2107   9-15-85   8:47p
    PRINTERS DAT       983   9-15-85   8:54p
    DDEVICE  DAT       191   9-15-85   8:51p
    AUTOEXEC BAT         5   4-12-85   2:57p
    PAINT    BAT        37   8-05-86   8:08p
    EURO     FNT      3038   4-12-85   2:56p
    SLIDES   BAS      3650   9-15-85   6:56p
    FRZSUB   BAS        58   9-13-85   6:00p
    OENGLISH FNT      9108   4-12-85   2:56p
    COMPUTER FNT      3058   4-12-85   2:56p
    README2  DOC       231   9-15-85   9:28p
    MOUSE6       <DIR>       9-14-86  12:12a
           28 file(s)     281485 bytes

     Directory of A:\MOUSE6

    .            <DIR>       9-14-86  12:12a
    ..           <DIR>       9-14-86  12:12a
    MOUSE    COM     11541   8-14-86  12:25p
    MOUSE    HLP      2231   8-14-86  10:04a
    CPANEL   COM      7308   8-12-86   9:07a
    CPANEL   HLP      2720   8-14-86   8:36a
    FUNCTION HLP      1303   8-15-86   7:49a
    MOUSE    LIB      2560  12-02-85  11:50a
            8 file(s)      27663 bytes

    Total files listed:
           36 file(s)     309148 bytes
                           31744 bytes free
