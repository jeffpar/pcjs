---
layout: page
title: "Microsoft Windows 1.0: Premiere Edition"
permalink: /software/pcx86/sys/windows/1.00/
redirect_from: /disks/pcx86/windows/1.00/
preview: images/screenshot.png
machines:
  - id: ibm5160-ega-win100
    type: pcx86
    state: /software/pcx86/sys/windows/1.00/state.json
    config: /machines/pcx86/ibm/5160/ega/640kb/machine.xml
    drives: '[{name:"10Mb Hard Disk",type:3,path:"/harddisks/pcx86/10mb/PCDOS310-WIN100-EGA.json"}]'
    autoMount:
      A:
        name: PC DOS 3.10 (Disk 1)
      B:
        name: PC DOS 3.10 (Disk 2)
---

Windows 1.0 was not a public release.  Microsoft released these disks (dubbed the "Premiere Edition") to selected
vendors, analysts, and members of the press in Summer 1985 to obtain feedback on the product.  [Windows 1.01](../1.01/)
was the first public release.

[Directory Listings](#directory-of-windows-100-setup) of the four 360Kb distribution diskettes are provided below.

{% include machine.html id="ibm5160-ega-win100" %}

### Directory of Windows 1.00 (SETUP)

     Volume in drive A is SETUP
     Directory of A:\

    SETUP    EXE     24394   7-17-85   4:08p
    SETUP    SCR     33444   7-12-85  12:22p
    KERNEL   EXE     33328   7-30-85   4:41p
    SYSTEM   EXE      2399   7-22-85   2:09p
    KEYBUS   EXE      3325   7-29-85  12:04p
    NOMOUSE  EXE      1592   6-11-85   9:35a
    MOUSE    EXE      3232   6-20-85   5:27p
    MSMOUSE1 EXE      2319   6-20-85   5:24p
    MSMOUSE2 EXE      2319   6-20-85   5:24p
    CGA      EXE     13024   7-19-85   1:37p
    HERCULES EXE     15792   7-12-85  12:09p
    EGAMONO  EXE     13968   7-12-85  12:08p
    EGAHIBW  EXE     13968   7-12-85  12:07p
    EGALORES EXE     15664   7-12-85  12:12p
    EGAHIRES EXE     17552   7-12-85  12:12p
    SOUND    EXE      5853   6-10-85   2:09p
    COMM     EXE      4242   7-18-85  12:43p
    HIFONTS  EXE      7456   7-24-85  11:27a
    LOFONTS  EXE      5536   7-24-85  11:27a
           19 file(s)     219407 bytes
                          132096 bytes free

### Directory of Windows 1.00 (BUILD)

     Volume in drive A is BUILD
     Directory of A:\

    GDI      EXE     95540   7-22-85  10:50a
    USER     EXE    118464   7-29-85   5:15p
    MSDOSD   EXE     10416   6-10-85   1:52p
    MSDOS    EXE     37568   7-23-85  12:38p
    CGA      GRB      1241   7-23-85   3:14p
    EGALORES GRB      1138   7-23-85   3:32p
    EGAHIRES GRB      1138   7-23-85   3:32p
    EGAHIBW  GRB      1138   7-23-85   3:32p
    EGAMONO  GRB      1004   7-23-85   3:32p
    HERCULES GRB      1170   7-23-85   3:32p
    WIN      CNF      1856   7-23-85   9:50a
    EGALORES LGO         9   6-27-85  12:29p
    EGAHIRES LGO         9   6-27-85  12:29p
    EGAHIBW  LGO         9   6-27-85  12:29p
    EGAMONO  LGO      2934   6-25-85   2:34p
    HERCULES LGO      3058   6-25-85   2:33p
    CGA      LGO      2935   6-25-85   2:32p
    WIN      INI       656   7-25-85   2:55p
    WINOLDAP MOD     18464   7-26-85   4:05p
           19 file(s)     298747 bytes
                           52224 bytes free

### Directory of Windows 1.00 (UTILITY)

     Volume in drive A is UTILITY
     Directory of A:\

    PIF          <DIR>       7-02-85   9:52a
    EPSON    EXE      5760   7-24-85   5:31p
    NEC3550  EXE     13056   7-24-85   1:36p
    IBMGRX   EXE      5680   7-24-85   5:38p
    OKI92    EXE      5680   7-24-85   5:44p
    CITOH    EXE      5680   7-24-85   5:57p
    COUR     EXE     42896   7-24-85  11:29a
    HELV     EXE     37376   7-24-85  11:28a
    RAMDRIVE SYS      6459   7-12-85   4:42p
            9 file(s)     122587 bytes

     Directory of A:\PIF

    .            <DIR>       7-02-85   9:52a
    ..           <DIR>       7-02-85   9:52a
    123      PIF       369   1-03-80   3:08p
    ACCESS   PIF       369   7-23-85  11:23a
    BASCOM   PIF       369   1-03-80   3:33p
    BASIC    PIF       369   6-05-85   1:04p
    BASICA   PIF       369   6-05-85   1:04p
    BASRUN   PIF       369   1-03-80   3:32p
    CHART    PIF       369   1-03-80   3:30p
    CONVERT  PIF       369   2-19-85   2:17p
    CONVERTD PIF       369   2-19-85   2:18p
    DBASE    PIF       369   1-04-80   4:15p
    DW3PG    PIF       369   1-03-80  10:43a
    FILE     PIF       369   1-03-80   3:27p
    FW       PIF       369   1-03-80   3:28p
    FWC      PIF       369   1-03-80   3:29p
    FWT      PIF       369   2-19-85   2:19p
    GRAPH    PIF       369   1-03-80   3:22p
    INSTALL  PIF       369   1-03-80   3:11p
    LOTUS    PIF       369   6-07-85  12:01p
    MP       PIF       369   1-03-80   3:30p
    MP40     PIF       369   1-03-80   3:20p
    MP80     PIF       369   1-03-80   3:20p
    PE       PIF       369   1-03-80   3:36p
    PROEDIT  PIF       369   1-03-80   3:34p
    REPORT   PIF       369   1-03-80   3:12p
    RG       PIF       369   2-19-85   2:12p
    SC       PIF       369   1-04-80  11:26a
    SCOM     PIF       369   3-06-85   3:16p
    TK       PIF       369   1-03-80   3:36p
    WORD     PIF       369   1-03-80  11:45a
    WP       PIF       369   6-12-85  12:16p
    WRITE    PIF       369   1-03-80   3:23p
    WS       PIF       369   6-18-85   6:08p
    DBASE2   PIF       369   1-04-80   4:15p
    TURBO    PIF       369   4-11-85   3:34p
    TURBO_87 PIF       369   4-11-85   3:34p
    TURBOBCD PIF       369   4-11-85   3:35p
    PLAN     PIF       369   4-15-85   5:10p
    SPELL    PIF       369   6-18-85   3:45p
    RB5000   PIF       369   1-03-80  12:13p
    SYMPHONY PIF       369   1-03-80   2:19p
    DBASE3   PIF       369   1-04-80   4:16p
    PFSACCES PIF       369   1-03-80   3:36p
    PFSGRAPH PIF       369   1-03-80   3:22p
    PFSFILE  PIF       369   1-01-80   1:22a
    PFSREPRT PIF       369   1-01-80  12:10a
    WRDPERF  PIF       369   6-05-85   3:06p
    SC3      PIF       369   7-09-85  12:29p
    PROJM    PIF       369   1-03-80   3:42p
    PROJ     PIF       369   1-03-80   3:42p
    DW2PG    PIF       369   1-03-80   1:28p
    XTALK    PIF       369   1-03-80   4:29p
    WS2000   PIF       369   6-18-85   6:31p
    SCOMII   PIF       369   7-25-85   2:14p
           55 file(s)      19557 bytes

    Total files listed:
           64 file(s)     142144 bytes
                          180224 bytes free

### Directory of Windows 1.00 (APPS)

     Volume in drive A is APPS
     Directory of A:\

    CALC     EXE     24352   7-11-85   3:43p
    CALENDAR EXE     33824   7-29-85   9:53p
    CARDFILE EXE     32160   7-22-85   3:30p
    CLIPBRD  EXE      9488   7-18-85   6:07a
    CLOCK    EXE      7808   7-15-85   5:12p
    CONTROL  EXE     42848   7-24-85   2:58p
    NOTEPAD  EXE     15328   7-19-85  10:59a
    PAINT    EXE    100304   7-23-85   4:23p
    PIFEDIT  EXE     10752   7-22-85  12:53p
    REVERSI  EXE     14848   6-25-85  12:38a
    SPOOLER  EXE     12000   7-19-85   7:40p
    TERMINAL EXE     39712   7-30-85   1:58p
    ABC      TXT        42   6-04-85   9:07a
    DOTHIS   TXT       394   6-07-85   8:18a
           14 file(s)     343860 bytes
                           12288 bytes free
