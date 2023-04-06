---
layout: page
title: "PC-SIG Diskette Library (Disk #669)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0669/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0669"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "GRAPHTIME II 1 OF 2 (ALSO 670)"

    GRAPHTIME-II is a business and technical graphics system with text and
    font editors.  Designed for use with dBASE II/III, Multiplan, Lotus 1-
    2-3 and ASCII files, it can also be used on its own with data entered
    from the keyboard into the built-in spreadsheet.  Epson compatible, HP
    Deskjet and Laserjet printers are supported.
    
    The package consists of six main modules:
    
    ~  GRAPH -- 19 types available with up to 10 graphs per screen
    
    ~  DRAW -- Full-screen color graphics editor
    
    ~  FONT -- Text generator and font editor
    
    ~  FILE -- External file input/output
    
    ~  TEXTED -- Text and macro editor
    
    ~  PRINT -- Printer driver
    
    The graphics editor can create free-form diagrams or enhance a
    previously made graph.  You can select arrow keys, joystick or mouse to
    control the graphics cursor.
    
    GRAPHTIME-II can be either menu or command-driven, with an emphasis on
    ease of use.  All scales and labels are made automatically with manual
    override.  A macro facility is included for commonly-used
    command sequences and to control slide shows.  Macros can also be
    created by recording a sequence of commands as they are used.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## GTFLP.BAS

```bas
10 'SAVE"GTFLP" 'Rene Rojas for Computer Performance 13-10-87
20 REM
30 A$=STRING$(78,205):COLOR 14,1:CLS
40 LOCATE 3,1:PRINT STRING$(1,201):LOCATE 3,2:PRINT A$:LOCATE 3,80:PRINT STRING$(1,187):LOCATE 22,1:PRINT STRING$(1,200):LOCATE 22,2:PRINT A$:LOCATE 22,80:PRINT STRING$(1,188)
50 FOR I=4 TO 21:LOCATE I,1:PRINT STRING$(1,186):LOCATE I,80:PRINT STRING$(1,186):NEXT I
60 LOCATE 2,10:COLOR 14,1:PRINT "G R A P H T I M E - I I   F U N C T I O N    G E N E R A T I O N ";:LOCATE 11,36:COLOR 16,7:PRINT "LOADING";:COLOR 14,1
70 RUN "GTFG"
```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0669

     Volume in drive A has no label
     Directory of A:\

    GT       BAT       274   4-01-90   6:46p
    GTDEMO   GTT       734  11-09-89   6:08a
    GTC1     BAT       283   4-01-90   6:48p
    GTC2     BAT       199  12-16-89  10:39a
    GTSTART  EXE      9601   3-31-90   9:47a
    PORT     COM      2454   2-13-88   4:10p
    FUNGEN   DOC      3171   4-01-90   7:02p
    GTPRINT  DOC      1278   4-01-90   6:57p
    LINE     DOC       793   4-01-90   7:05p
    BRUN30   EXE     70680   4-07-87  10:48a
    OTHERS   MSG       509   3-31-90   9:48a
    GTLINE   EXE     30769  12-16-89   2:20p
    GTPRS    EXE      8320  10-13-87   7:37p
    DEMO     BAT       273   4-01-90   7:39p
    ADMIN    GTD       301  11-17-89   2:45p
    BUBBLE   GTD       387  11-26-89   9:09a
    DPBUDGET GTD       421  11-27-89  11:12p
    PARTS    GTD       322  11-17-89   2:45p
    RAND     GTD       333  11-17-89   4:31p
    SALES    GTD       641  11-25-89   6:14a
    SEA0     GTD       271  11-17-89   4:31p
    SHARES   GTD       770  11-17-89   4:32p
    TEST     GTD      3259  11-17-89   2:41p
    WAGES    GTD       519  11-17-89   2:45p
    FONT1    GTF      3200  10-17-85   6:14p
    FONT2    GTF      3072  10-15-85   8:19p
    FONT3    GTF      3006  11-15-89   1:48p
    GO       BAT       272   4-01-90   7:41p
    PRINTHLP BAT       314   4-01-90   7:33p
    NORM     GTT       668   6-18-88  10:35a
    GTFG     BAK      7902   5-15-89   8:09p
    A        GTH      1414   3-27-90   9:25p
    DRB      GTH      1136   3-27-90  11:21p
    DRC      GTH      1017   3-27-90  11:24p
    DRD      GTH      1061   3-27-90  11:25p
    DRE      GTH       778   3-27-90  11:27p
    DRF      GTH      1060   3-27-90  11:28p
    DRG      GTH       849   3-27-90  11:29p
    DRI      GTH      1338   3-27-90   9:23p
    DRL      GTH      1885   3-27-90  11:33p
    DRP      GTH      1077   3-27-90  11:31p
    DRR      GTH      1013   3-27-90  11:32p
    DRT      GTH      4854   3-27-90  11:36p
    F        GTH      1807   3-27-90   9:45p
    G        GTH      2440   3-27-90  10:14p
    GP       GTH      7144  12-02-89   8:42p
    I        GTH      4044   3-28-90  12:04a
    K        GTH      1046   3-27-90  11:59p
    M        GTH      3531   3-27-90  10:49p
    P        GTH      4099   3-27-90  11:16p
    S        GTH      3192   3-27-90  11:04p
    MCGA     GTM       631  12-21-89   8:11p
    MEGA     GTM      1151   3-31-90  11:08a
    T1       GTT        48  10-04-87  10:27a
    GTDRAW   MSG      1165   2-18-90   7:58p
    GTGRAPH  MSG      1878   3-10-90   7:57p
    GTPIEBL  MSG       799  10-21-89   1:22p
    GTTEXTED MSG      1619   1-25-90   6:09p
    GTFC     EXE     13809   8-04-87  10:25p
    MOUSE    COM      7099   8-17-87  12:00p
    TFR      BAK       111   6-13-88   2:00p
    TEXT     GTT       886  11-12-89  10:31a
    FONT6    GTF      6199   9-18-88  10:45p
    T1       GTB       656   7-19-88  12:56p
    CCGA     GTM       684  12-21-89   8:11p
    FONT4    GTF      1919   9-18-88   1:27a
    GTFILE   MSG      1593   1-07-90   6:00p
    GANTDEMO GTD       793  11-28-89  11:29a
    GTF      BAT       363   6-18-88   9:43a
    GTFB     BAT       293  10-06-87   8:57a
    README            2983   4-01-90   7:34p
    FONT5    GTF      4034   9-18-88   1:07a
    FONT7    GTF      9612   9-18-88  10:53p
    GTFLP    BAS       385  10-13-87   9:14p
    TFR      GTZ       129   4-01-90   7:43p
    FILE0669 TXT      1925   4-24-90  10:16a
           76 file(s)     260545 bytes
                           20480 bytes free
