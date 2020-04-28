---
layout: page
title: Microsoft Windows/386 2.0x
permalink: /software/pcx86/sys/windows/2.0x/
redirect_from: /disks/pcx86/windows/2.0x/
preview: images/screenshot.png
machines:
  - id: deskpro386
    type: pcx86
    state: state.json
    config: /configs/pcx86/machine/compaq/deskpro386/vga/2048kb/machine.xml
    drives: '[{name:"20Mb Hard Disk",type:2,path:"/harddisks/pcx86/20mb/COMPAQ310-WIN386201-VGA.json"}]'
    autoMount:
      A:
        name: None
      B:
        name: None
---

Microsoft Windows/386 2.0 existed as the following "point releases":

  - [Windows/386 2.01](#microsoft-windows386-201)
  - [Windows/386 2.03](#microsoft-windows386-203)

Microsoft Windows/386 2.01
--------------------------

This Windows/386 release was finalized in September 1987, predating [Windows 2.03](/software/pcx86/sys/windows/2.03/)
by several months.

Directory listings of the three 1.2Mb Microsoft Windows/386 2.01 distribution diskettes are provided below.

In the COMPAQ DeskPro 386 machine below, you can run `WIN86` to start Windows in real-mode, or `WIN386` to start Windows in V86-mode.

{% include machine.html id="deskpro386" %}

### Directory of Windows/386 2.01 (Disk 1)

     Volume in drive A has no label
     Directory of A:\

    SETUP    EXE     39919   9-04-87   8:18p
    SETUP    INF     16436   9-07-87   5:16p
    WIN      CNF      3472   9-02-87   5:32p
    WIN      INI      2821   9-06-87   7:41p
    KERNEL   EXE     54000   9-07-87  10:16p
    GDI      EXE     99110   9-07-87   1:35p
    USER     EXE    152272   9-07-87   4:18p
    EGA      386    137810   9-06-87   6:29p
    EGA      3EX     30716   9-07-87   6:24p
    CGA      386    121921   9-08-87   6:44a
    CGA      3EX     30524   9-07-87   6:26p
    WINOLDAP MOD     31312   9-06-87   6:34p
    EGA      GRB      7727   9-06-87   6:35p
    VGA      GRB      8337   9-06-87   6:35p
    IDC      GRB      5420   9-06-87   6:52p
    CGA      GRB      5335   9-06-87   6:52p
    CGA40    FON      6544   9-03-87   3:36p
    CGA80    FON      4512   9-03-87   3:36p
    EGA40    FON      8576   9-03-87   3:36p
    EGA80    FON      5520   9-03-87   3:36p
    COMMANDE PIF       369   9-04-87   3:10p
    COMMANDF PIF       369   9-04-87   3:10p
    COMMANDW PIF       369   9-04-87   3:11p
    COMM     DRV      5372   8-21-87  11:27a
    MSDOS    EXE     45696   9-06-87   7:03p
    MSDOSD   EXE      6404   8-28-87   4:38a
    SOUND    DRV      5854   8-06-87   4:41p
    SPOOLER  EXE     14512   9-04-87   3:26p
    SYSTEM   DRV      2829   8-06-87   4:42p
    EGAHIRES DRV     34256   9-03-87  12:09p
    IBMPS250 DRV     33776   9-03-87  11:47a
    COMPAQ   DRV     29360   9-03-87  11:58a
    VGA450   DRV     33776   9-03-87   2:07p
    CGA      DRV     26496   9-03-87  11:56a
    CGA      LGO       468   8-06-87   4:48p
    386LOGO  LGD      2574   9-06-87   4:54p
    DENMARK  DRV      4728   8-26-87  10:58a
    FRANCE   DRV      4836   8-26-87  10:59a
    GERMANY  DRV      4825   8-26-87  10:59a
    ITALY    DRV      4102   8-26-87  10:59a
    NORWAY   DRV      4728   8-26-87  10:59a
    SPAIN    DRV      4705   8-26-87  10:59a
    SWEDEN   DRV      4728   8-26-87  10:59a
    UK       DRV      4084   8-06-87   4:42p
    USA      DRV      4080   8-26-87  11:00a
    MOUSE    DRV      3603   8-30-87  12:30a
    NOMOUSE  DRV      1581   8-30-87  12:29a
    FONTHI   FON      4608   8-24-87  12:34p
    FONTSQ   FON      5728   8-24-87  12:34p
    FONT40   FON      5280   8-24-87  12:34p
    FONTLO   FON      4160   8-24-87  12:34p
    FONTHIUS FON      4528   8-24-87  12:34p
    FONTSQUS FON      5536   8-24-87  12:34p
    FONT40US FON      5792   8-24-87  12:34p
    FONTLOUS FON      4528   8-24-87  12:34p
           55 file(s)    1100924 bytes
                           99328 bytes free

### Directory of Windows/386 2.01 (Disk 2)

     Volume in drive A has no label
     Directory of A:\

    EPSON    DRV     15136   8-25-87   7:39p
    EPSONMX  DRV     12752   8-25-87   7:39p
    HP7470A  DRV     16336   7-29-86   2:20p
    HPPCL    DRV     99968   9-05-87  12:10p
    IBMCOLOR DRV     13024   1-26-87  12:48p
    IBMGRX   DRV     12560   8-25-87   7:39p
    LQ1500   DRV     15328   8-25-87   7:39p
    NECP2    DRV     12304   4-02-87  11:30a
    NEC24PIN DRV     25648   8-06-87   4:41p
    PSCRIPT  DRV    127520   9-05-87  12:19p
    THINKJET DRV     12768   7-31-87   6:59a
    TI850    DRV     12128   8-25-87   7:39p
    TOSH     DRV     12992   8-25-87   7:39p
    TTY      DRV      5600   9-04-87  11:37p
    COURA    FON     14144   8-24-87  12:34p
    COURB    FON     19088   8-24-87  12:34p
    COURC    FON     13040   8-24-87  12:34p
    COURD    FON     21328   8-24-87  12:34p
    COURE    FON     23808   8-24-87  12:34p
    HELVA    FON     36768   8-24-87  12:34p
    HELVB    FON     50880   8-30-87  10:57a
    HELVC    FON     38960   8-24-87  12:34p
    HELVD    FON     58144   8-24-87  12:34p
    HELVE    FON     64672   8-30-87  10:57a
    MODERN   FON      7584   8-24-87  12:35p
    ROMAN    FON     11120   8-24-87  12:35p
    SCRIPT   FON     10304   8-24-87  12:35p
    TMSRA    FON     35392   8-24-87  12:35p
    TMSRB    FON     45936   8-30-87  10:58a
    TMSRC    FON     37824   8-24-87  12:35p
    TMSRD    FON     57184   8-24-87  12:35p
    TMSRE    FON     58304   8-30-87  10:59a
    HARDWARE TXT       565   8-25-87   3:48p
    HPREADME TXT      5852   8-12-87   5:49p
    NEWFON   EXE     22349   8-30-87  12:28a
    PCLPFM   EXE     24966   8-06-87   4:34p
    PCLPFM   PIF       369   8-10-87  12:00p
    PSPREP   TXT     18841   8-25-87   3:50p
    PSREADME TXT      7047   8-12-87   5:49p
    RAMDRIVE SYS      8225   9-03-87  10:11a
    SMARTDRV SYS     17696   9-01-87   8:43a
    SOFTFONT INI      1341   8-12-87   5:50p
    SOFTWARE TXT       409   8-25-87   3:47p
           43 file(s)    1106204 bytes
                           97792 bytes free

### Directory of Windows/386 2.01 (Disk 3)

     Volume in drive A has no label
     Directory of A:\

    PIF          <DIR>       9-07-87  10:26p
    README   TXT     19508   9-06-87   5:20p
    CALC     EXE     27856   9-04-87   3:42p
    CALENDAR EXE     38400   9-04-87  11:08a
    CARDFILE EXE     38672   9-04-87  11:09a
    CLIPBRD  EXE     10608   9-04-87  11:10a
    CLOCK    EXE      8960   9-04-87  11:11a
    CONTROL  EXE     56960   9-04-87  11:12a
    NOTEPAD  EXE     19072   9-04-87  11:13a
    PAINT    EXE     92800   9-06-87   7:29p
    PIFEDIT  EXE     26464   8-25-87   7:26p
    REVERSI  EXE     15760   9-01-87   1:55a
    TERMINAL EXE     48240   9-04-87  11:17a
    WRITE    EXE    212432   9-04-87   7:12p
    ABC      TXT        42   8-14-87  10:56a
    DOTHIS   TXT       493   8-14-87  10:56a
    PRACTICE WRI      2944   8-14-87  10:56a
           17 file(s)     619211 bytes

     Directory of A:\PIF

    .            <DIR>       9-07-87  10:26p
    ..           <DIR>       9-07-87  10:26p
    123      PIF       369   9-04-87   1:47p
    123-1A   PIF       369   9-04-87   1:47p
    BASIC    PIF       369   9-04-87   1:47p
    BASICA   PIF       369   9-04-87   1:47p
    CHART    PIF       369   9-04-87   1:47p
    CLOUT    PIF       369   9-04-87   1:47p
    DBASE    PIF       369   9-04-87   1:47p
    DBASE2   PIF       369   9-04-87   1:47p
    DBASE3   PIF       369   9-04-87   1:47p
    DW2PG    PIF       369   9-04-87   1:47p
    DW3PG    PIF       369   9-04-87   1:47p
    FILE     PIF       369   9-04-87   1:47p
    FW       PIF       369   9-04-87   1:47p
    FWC      PIF       369   9-04-87   1:47p
    FWT      PIF       369   9-04-87   1:47p
    GRAPH    PIF       369   9-04-87   1:47p
    HTPM     PIF       369   9-04-87   1:47p
    IBMFILE  PIF       369   9-04-87   1:47p
    IBMGRAPH PIF       369   9-04-87   1:47p
    IBMREPRT PIF       369   9-04-87   1:47p
    IBMWRITE PIF       369   9-04-87   1:47p
    LOTUS    PIF       369   9-04-87   1:47p
    LOTUS2   PIF       369   9-04-87   1:47p
    MP       PIF       369   9-04-87   1:47p
    MSACCESS PIF       369   9-04-87   1:47p
    PC-DRAW  PIF       369   9-04-87   1:47p
    PFSACCES PIF       369   9-04-87   1:47p
    PLAN     PIF       369   9-04-87   1:47p
    PROJ     PIF       369   9-04-87   1:47p
    PROJM    PIF       369   9-04-87   1:47p
    QB       PIF       369   9-04-87   1:47p
    RB5000   PIF       369   9-04-87   1:47p
    RBASE    PIF       369   9-04-87   1:47p
    REPORT   PIF       369   9-04-87   1:47p
    SC3      PIF       369   9-04-87   1:47p
    SCOM     PIF       369   9-04-87   1:47p
    SCOMII   PIF       369   9-04-87   1:47p
    SPELL    PIF       369   9-04-87   1:47p
    SYMPHACC PIF       369   9-04-87   1:47p
    SYMPHONY PIF       369   9-04-87   1:47p
    TURBO    PIF       369   9-04-87   1:47p
    VX       PIF       369   9-04-87   1:47p
    WORD     PIF       369   9-04-87   1:47p
    WP       PIF       369   9-04-87   1:47p
    WRDPERF  PIF       369   9-04-87   1:47p
    WRITE    PIF       369   9-04-87   1:47p
    WS       PIF       369   9-04-87   1:47p
    WS2      PIF       369   9-04-87   1:48p
    XTALK    PIF       369   9-04-87   1:48p
    XYWRITE  PIF       369   9-04-87   1:48p
           52 file(s)      18450 bytes

    Total files listed:
           69 file(s)     637661 bytes
                          563200 bytes free

Microsoft Windows/386 2.03
---

Windows/386 2.03 appears to have been finalized in December 1987.

Note that only about two months separated this release from [Windows/386 2.01](/software/pcx86/sys/windows/2.0x/#microsoft-windows386-201).

Directory listings of the five 720Kb distribution diskettes are provided below.

### Directory of Windows/386 2.03 (SETUP)

     Volume in drive A has no label
     Directory of A:\

    SETUP    EXE     44039  11-13-87   9:45p
    SETUP    INF     23300  12-01-87   3:21p
    WIN      CNF      3952  11-15-87  10:55p
    WIN      INI      3196  11-15-87   5:31p
    KERNEL   EXE     56960  11-15-87  11:07p
    GDI      EXE    101706  11-15-87  10:03a
    USER     EXE    154688  11-15-87   8:25p
    COMM     DRV      4396  11-12-87   1:19p
    MSDOS    EXE     46224  11-12-87   1:29p
    MSDOSD   EXE      6490  11-12-87   1:27p
    SOUND    DRV      5309  11-12-87   1:25p
    SPOOLER  EXE     14640  11-12-87   1:29p
    SYSTEM   DRV      2725  11-12-87   1:25p
    EGAHIRES DRV     33040  11-12-87   1:11p
    IBMPS250 DRV     32720  11-12-87   1:24p
    COMPAQ   DRV     28144  11-12-87   1:11p
    ATTDC    DRV     28736  11-12-87   1:12p
    VGA450   DRV     33776  11-12-87   1:11p
    CGA      DRV     24784  11-12-87   1:11p
    CGA      LGO       468  11-12-87   1:12p
    386LOGO  LGD      2574  11-14-87   4:06p
    USA      DRV      3836  11-12-87   1:28p
    MOUSE    DRV      3667  11-12-87   1:24p
    NOMOUSE  DRV      1245  11-12-87   1:24p
    HPMOUSE  DRV      4410  10-19-87   6:27p
    LMOUSE   DRV      3298  11-12-87   1:27p
    MSMOUSE1 DRV      2014  11-12-87   1:09p
    MSMOUSE2 DRV      2014  11-12-87   1:10p
    FONTHI   FON      4608  11-12-87   1:25p
    FONTSQ   FON      5728  11-12-87   1:25p
    FONTLO   FON      4160  11-12-87   1:21p
    FONTHIUS FON      4528  11-12-87   1:25p
    FONTSQUS FON      5536  11-12-87   1:25p
    FONTLOUS FON      4528  11-12-87   1:21p
           34 file(s)     701439 bytes
                            9216 bytes free

### Directory of Windows/386 2.03 (UTILITY)

     Volume in drive A has no label
     Directory of A:\

    EGA      3EX     34460   1-14-88   2:14p
    CGA      3EX     34236   1-14-88   2:17p
    CGA      386    121775   1-13-88   9:50p
    EGA      386    139568   1-13-88   9:33p
    WINOLDAP MOD     31120  11-15-87   8:40p
    EGA      GRB      7979  11-15-87   8:40p
    VGA      GRB      8589  11-15-87   8:41p
    IDC      GRB      5603  11-14-87   3:27p
    CGA      GRB      5518  11-14-87   3:27p
    CGA40    FON      6544  11-15-87   9:01p
    CGA80    FON      4512  11-15-87   9:01p
    EGA40    FON      8576  11-15-87   9:01p
    EGA80    FON      5520  11-15-87   9:01p
    COMMANDE PIF       369   9-10-87  11:12a
    COMMANDF PIF       369   9-10-87  11:12a
    COMMANDW PIF       369   9-10-87  11:13a
    KBDBE    DRV      7385  11-13-87   3:36p
    KBDUK    DRV      6885  11-13-87   3:35p
    KBDCA    DRV      7661  11-13-87   3:36p
    KBDDA    DRV      7161  11-13-87   3:36p
    KBDNE    DRV      7129  11-13-87   3:35p
    KBDFR    DRV      7289  11-13-87   3:36p
    KBDGR    DRV      7209  11-13-87   3:36p
    KBDIT    DRV      6991  11-13-87   3:36p
    KBDNO    DRV      7161  11-13-87   3:36p
    KBDPO    DRV      6747  11-13-87   3:36p
    KBDSP    DRV      7519  11-13-87   3:36p
    KBDES    DRV      8079  11-13-87   3:36p
    KBDFS    DRV      7177  11-13-87   3:36p
    KBDSG    DRV      7409  11-13-87   3:36p
    KBDSF    DRV      7433  11-13-87   3:36p
    KBDUS    DRV      6677  11-13-87   3:35p
    FONTSQNO FON      5552  11-05-87   1:57p
    FONTSQPO FON      5552  11-05-87   1:57p
    FONTSQCA FON      5552  11-05-87   1:45p
    FONTSQES FON      5552  11-05-87   1:57p
    NEWFON   EXE     33231  11-12-87   1:27p
    RAMDRIVE SYS      8225  11-12-87   1:29p
    RAMDRIVE TXT      7776  11-16-87   4:19a
    SMARTDRV SYS     10082  11-12-87   1:19p
           40 file(s)     612541 bytes
                           96256 bytes free

### Directory of Windows/386 2.03 (FONTS)

     Volume in drive A has no label
     Directory of A:\

    COURA    FON     14144  11-12-87   1:22p
    COURB    FON     19088  11-12-87   1:23p
    COURC    FON     13040  11-12-87   1:24p
    COURD    FON     21328  11-12-87   1:24p
    COURE    FON     23808  11-12-87   1:24p
    HELVA    FON     36768  11-12-87   1:25p
    HELVB    FON     50880  11-12-87   1:25p
    HELVC    FON     38960  11-12-87   1:25p
    HELVD    FON     58144  11-12-87   1:26p
    HELVE    FON     64784  11-12-87   1:26p
    MODERN   FON      7584  11-12-87   1:26p
    ROMAN    FON     11120  11-12-87   1:27p
    SCRIPT   FON     10304  11-12-87   1:27p
    TMSRA    FON     35392  11-12-87   1:27p
    TMSRB    FON     45936  11-12-87   1:27p
    TMSRC    FON     37824  11-12-87   1:27p
    TMSRD    FON     57184  11-12-87   1:28p
    TMSRE    FON     58304  11-12-87   1:28p
           18 file(s)     604592 bytes
                          118784 bytes free

### Directory of Windows/386 2.03 (PROGRAM)

     Volume in drive A has no label
     Directory of A:\

    PIF          <DIR>      11-16-87   3:03a
    README   TXT     29091  11-15-87   3:00a
    ATTOLI   TXT      4866  11-13-87   9:29p
    CALC     EXE     28000  11-12-87   1:21p
    CALENDAR EXE     38896  11-12-87   1:22p
    CARDFILE EXE     39264  11-12-87   1:23p
    CLIPBRD  EXE     10800  11-12-87   1:26p
    CLOCK    EXE      8960  11-12-87   1:27p
    CVTPAINT EXE      5712  11-12-87   1:10p
    CONTROL  EXE     57216  11-12-87   1:23p
    NOTEPAD  EXE     19072  11-12-87   1:28p
    PAINT    EXE     93280  11-12-87   1:23p
    PIFEDIT  EXE     26464   9-10-87   5:39p
    REVERSI  EXE     15552  11-12-87   1:28p
    TERMINAL EXE     48640  11-12-87   1:28p
    WRITE    EXE    212528  11-12-87   1:21p
    ABC      TXT        42   8-14-87  10:56a
    DOTHIS   TXT       493   8-14-87  10:56a
    PRACTICE WRI      2944   8-14-87  10:56a
           19 file(s)     641820 bytes

     Directory of A:\PIF

    .            <DIR>      11-16-87   3:03a
    ..           <DIR>      11-16-87   3:03a
    123      PIF       369  11-14-87  10:20a
    ACCESS   PIF       369  11-14-87  10:20a
    BASIC    PIF       369  11-14-87  10:20a
    BASICA   PIF       369  11-14-87  10:20a
    BOOKS    PIF       369  11-14-87  10:20a
    CHART    PIF       369  11-14-87  10:20a
    CLOUT    PIF       369  11-14-87  10:20a
    DBASE    PIF       369  11-14-87  10:20a
    DW3PG    PIF       369  11-16-87   1:40a
    EDITOR   PIF       369  11-14-87  10:20a
    FILE     PIF       369  11-14-87  10:20a
    FL       PIF       369  11-14-87  10:20a
    FW       PIF       369  11-14-87  10:20a
    GRAPH    PIF       369  11-14-87  10:20a
    HTPM     PIF       369  11-14-87  10:20a
    LOTUS    PIF       369  11-14-87  10:20a
    MP       PIF       369  11-14-87  10:20a
    PCLPFM   PIF       369  11-14-87  10:20a
    PE2      PIF       369  11-14-87  10:20a
    PFSACCES PIF       369  11-14-87  10:20a
    PLAN     PIF       369  11-14-87  10:20a
    PROEDIT  PIF       369  11-14-87  10:20a
    PROJ     PIF       369  11-14-87  10:20a
    QB       PIF       369  11-16-87   1:41a
    RB5000   PIF       369  11-14-87  10:20a
    RBASE    PIF       369  11-14-87  10:20a
    READY    PIF       369  11-14-87  10:20a
    REPORT   PIF       369  11-14-87  10:20a
    SC4      PIF       369  11-14-87  10:20a
    SCOM     PIF       369  11-16-87   1:41a
    SK       PIF       369  11-14-87  10:20a
    SPELL    PIF       369  11-14-87  10:20a
    SYMPHONY PIF       369  11-14-87  10:20a
    TURBO    PIF       369  11-15-87  10:39p
    VW3      PIF       369  11-14-87  10:20a
    WORD     PIF       369  11-14-87  10:20a
    WORKS    PIF       369  11-14-87  10:20a
    WRDPERF  PIF       369  11-14-87  10:20a
    WRITE    PIF       369  11-14-87  10:20a
    WS2      PIF       369  11-14-87  10:20a
    XTALK    PIF       369  11-14-87  10:20a
           43 file(s)      15129 bytes

    Total files listed:
           62 file(s)     656949 bytes
                           35840 bytes free

### Directory of Windows/386 2.03 (UTILITY 2)

     Volume in drive A has no label
     Directory of A:\

    HARDWARE TXT       565   8-20-87   1:14a
    PCLPFM   EXE     24966  11-12-87   1:27p
    PSPREP   TXT     18841   8-24-87  11:02p
    READMEEP TXT      1060  11-16-87   3:40a
    READMEHP TXT      9550  11-16-87   3:40a
    READMEPL TXT      1087  11-16-87   3:40a
    READMEPR TXT       975  11-16-87   3:40a
    READMEPS TXT      9196  11-16-87   3:40a
    SOFTFONT INI      1341   1-12-87  12:31p
    SOFTWARE TXT       409   8-19-87   6:43p
    CITOH    DRV     14208  11-12-87   1:09p
    DM600    DRV     28752  11-10-87  10:47a
    EPSON    DRV     17168  11-12-87   1:25p
    EPSONLQ2 DRV     47616  11-12-87   1:12p
    EPSONMX  DRV     14240  11-12-87   1:27p
    HPPCL    DRV    100592  11-12-87   1:22p
    HPPLOT   DRV     62560  11-12-87   1:10p
    IBMCOLOR DRV     14144  11-12-87   1:28p
    IBMGRX   DRV     14512  11-12-87   1:28p
    NECP2    DRV     14352  11-12-87   1:28p
    OLIPRINT DRV     34048  11-10-87  10:49a
    PROPRINT DRV     32944  11-12-87   1:10p
    PSCRIPT  DRV    121184  11-12-87   1:23p
    THINKJET DRV     13296  11-12-87   6:49p
    TI850    DRV     12816  11-12-87   1:28p
    TOSH     DRV     14480  11-12-87   1:28p
    TTY      DRV      6224  11-12-87   1:24p
    XER4020  DRV     22032  11-12-87   1:21p
           28 file(s)     653158 bytes
                           60416 bytes free

