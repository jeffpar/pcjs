---
layout: page
title: "PC-SIG Library Disk #276"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0276/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0276"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "COLLIST"

    File Descriptions:
    
    RELSE-2    0     Displays title in directory
    COLLST     PRE   Displays title in directory
    INSTALL    ED    Displays title in directory
    DISK             Displays title in directory
    START      TXT   Part of COLLIST
    START      EXE   This is the program to start the decoding, type "start"
    ??????     ???   Part of COLLIST (17 more files)
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## LISTER.BAS

```bas
10 DEFINT A-Z: TRUE=-1: FALSE=0:SPAC$="      "
20 CLS: INPUT "What is the name of the file to be listed?", A$: OPEN A$ FOR INPUT AS #1
30 CLS : LOCATE 3,30: PRINT "Select printer for output."
40 LOCATE 5,10: PRINT"1. LPT1: parallel printer port 1.":LOCATE 7,10: PRINT"2. LPT2: parallel printer port 2."
50 LOCATE 9,10: PRINT"3. COM:  serial printer port.":LOCATE 24,1: PRINT"If you are not sure, try 1 first(Jr users, try 3).";
60 LOCATE 11,30: INPUT "Enter 1, 2 or 3 ", A#: IF A#<1 OR A#>3 GOTO 30
70 ON A# GOSUB 170,180, 190: OPEN A$ FOR OUTPUT AS #2
80 CLS: INPUT "Do you wish a pause between pages (Y or N)?",A$: I=INSTR("YyNn", A$): IF I=0 THEN GOTO 80
90 IF I<3 THEN PPAUSE=TRUE ELSE PPAUSE=FALSE
100 LIN=0: WHILE NOT EOF(1): B$="": A$=""
110 IF LIN=0 AND PPAUSE THEN INPUT "Type <Return> for next page.", X$
120 WHILE A$ <> CHR$(13): B$=B$+A$: A$=INPUT$(1,1): WEND: PRINT #2, SPAC$ B$
130 A$=INPUT$(1,1): IF A$<>CHR$(10) THEN B$=B$+A$: GOTO 120
140 LIN=LIN+1 : IF LIN =55 THEN PRINT #2, CHR$(12);: LIN=0
150 WEND: IF LIN <> 0 THEN PRINT #2, CHR$(12)
160 CLOSE: SYSTEM
170 A$="lpt1:":RETURN
180 A$="lpt2:":RETURN
190 A$="com1:":RETURN
```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0276

     Volume in drive A has no label
     Directory of A:\

    RELSE-2  0          40   9-02-84  10:05a
    COLLST   PRE         0   9-19-84   1:48a
    INSTALL  ED          0   9-19-84   1:48a
    DISK                 0   9-19-84   1:48a
    ~~~~~~~~ ~~~         0   9-19-84   1:48a
    START    TXT      1548   9-13-84  10:35p
    START    EXE     32896   9-19-84   1:47a
    LISTER   BAS       951   9-14-84   5:55p
    BUG               1885   9-19-84   1:45a
    COVER             4760   9-25-84  11:46a
    DOC              77426   9-19-84  10:34p
    DSKLABEL           166   9-02-84   1:45p
    LICENSE           3176   9-14-84  12:46a
    ORDER             4139  10-29-84  11:34a
    PRACTICE           445   9-06-84  10:25a
    ________ ___         0   9-19-84   1:49a
    RESET    BAT       408   9-19-84   1:02p
    $$COLLST TXT     14464   9-19-84  12:44p
    $$COLLST PTR       384   9-19-84  12:44p
    BATCK    SCR     39680  11-26-84   1:34p
    BATCK    LIB     20608  11-26-84   1:34p
    COLLST   SCR     42624   9-19-84   1:21a
    COLLSTD  SCR     34816   9-19-84   1:15a
    COLLST   LIB     17792   9-19-84   1:21a
    COLLSTD  LIB     12416   9-19-84   1:16a
           25 file(s)     310624 bytes
                               0 bytes free
