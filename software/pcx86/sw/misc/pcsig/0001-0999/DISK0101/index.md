---
layout: page
title: "PC-SIG Library Disk #101"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0101/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0101"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "PORTWORTH PACKAGE"

    The PORTWORTH PACKAGE is an interesting set of programs that you can
    use to monitor and evaluate your stock portfolios.  All of the programs
    are written in BASIC and so, are not overly fast, but they do the job.
    Portfolios of up to 25 stocks can be processed.  It has graphing
    capabilities, and includes documentation and sample files to illustrate
    its usage.  Source code is included.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## DLTAPLOT.BAS

```bas
10 ' PROGRAM NAME: DLTAPLOT.BAS       WRITTEN 7-16-83       REV 31 MAR 1984
40 '
45 ' **********************************************************
50 ' * DRIVER MODULE                                          *
55 ' **********************************************************
65 '
70  KEY OFF
72  OPEN "A:DRIVE.DTA" FOR INPUT AS #1
74  INPUT #1, DRIVE$,PRNT$,CLOR$,FG,BG,BDR
76  CLOSE #1
78  IF CLOR$ ="Y" OR CLOR$ ="y" THEN COLOR FG,BG,BDR
80  CLS
82  PRINT "PROGRAM DLTAPLOT.BAS EXECUTING"
83  PRINT
85  INPUT "PRINTER CONNECTED TO SYSTEM (Y/N)"; YPRINT$
90  REC.CNT = 0
92  SAVE.R = 0
110 IF DRIVE$ = "A" OR DRIVE$ = "a" THEN GOSUB 300 ELSE GOSUB 400
115 IF YPRINT$ <> "Y" AND YPRINT$ <> "y" THEN GOTO 135
120 WIDTH "LPT1:",80
125 '  SET UP DEFAULT CONDITIONS FOR IBM OR EPSON PRINTER
130 IF PRNT$ = "E" OR PRNT$ = "e" THEN GOSUB 4100 ELSE GOSUB 4200
132 '
135 GOSUB 500                           'SELECT GSCALE
140 '
145 GOSUB 600                           'SELECT HSCALE
150 '
155 GOSUB 700                           'SET END.NUM AND SKIP.NUM LIMITS
160 '
165 GOSUB 800                           'READ FIRST (IDENTIFICATION) REC
170 '
175 IF SKIP.NUM <> 0 THEN GOSUB 900     'SKIP INITIAL RECORDS
180 '
185 CLS
190 GOSUB 1000                          'SET UP HEADERS AND AXES
195 '
200 IF REC.CNT < END.NUM THEN GOSUB 1500 ELSE GOTO 215    'PROCESS 1ST DATA REC
202 '
205 GOSUB 1700                          'PLOT BALANCE OF RECORDS
210 '
215 GOSUB 4000                          'EOJ HOUSEKEEPING
220 '
225 END
300 ' *******************************************************************
310 ' * GOSUB 300                                                       *
320 ' * GET DATA FROM DRIVE A                                           *
330 ' *******************************************************************
340 '
350 PRINT "INSERT DATA DISKETTE IN DRIVE A"
352 IF YPRINT$ <> "Y" AND YPRINT$ <> "y" THEN GOTO 365
355 PRINT "SET PRINTER TO TOP OF PAGE"
360 PRINT "VERIFY THAT PRINTER IS ON"
365 PRINT "STRIKE ANY KEY WHEN READY"
370 A$ = INKEY$: IF A$ = "" THEN 370
380 OPEN "A:DLTAFILE.DTA" FOR INPUT AS #2
390 RETURN
400 ' *******************************************************************
410 ' * GOSUB 400                                                       *
420 ' * GET DATA FROM DRIVE B                                           *
430 ' *******************************************************************
440 '
450 PRINT "INSERT DATA DISKETTE IN DRIVE B"
452 IF YPRINT$ <> "Y" AND YPRINT$ <> "y" THEN GOTO 465
455 PRINT "SET PRINTER TO TOP OF PAGE"
460 PRINT "VERIFY THAT PRINTER IS ON"
465 PRINT "STRIKE ANY KEY WHEN READY"
470 A$ = INKEY$: IF A$ = "" THEN 470
480 OPEN "B:DLTAFILE.DTA" FOR INPUT AS #2
490 RETURN
500 ' **********************************************************
505 ' * GOSUB 500                                              *
510 ' * SELECT GSCALE                                          *
515 ' **********************************************************
520 '
525 PRINT "SELECT VERTICAL SCALE FROM FOLLOWING:"
530 PRINT "     1 - $0 TO $800 RANGE"
535 PRINT "     2 - $0 TO $1600 RANGE"
540 PRINT "     3 - $0 TO $4000 RANGE"
545 PRINT "     4 - $0 TO $8000 RANGE"
550 PRINT "     5 - $0 TO $16000 RANGE"
555 PRINT "     6 - $0 TO $32000 RANGE"
560 PRINT "     7 - $0 TO $64000 RANGE"
565 PRINT "     8 - $0 TO $128000 RANGE"
570 INPUT "VERTICAL SCALE SELECTED IS  ", GSCALE
575 IF GSCALE <= 0 OR GSCALE > 8 THEN BEEP: GOTO 525
577 '
580 ON GSCALE GOSUB 1200, 1225, 1250, 1275, 1300, 1325, 1350, 1375
590 '
595 RETURN
600 ' **********************************************************
605 ' * GOSUB 600                                              *
610 ' * SELECT HSCALE                                          *
615 ' **********************************************************
620 '
625 PRINT "SET HORIZONTAL SCALE - "
630 PRINT "    SELECT FROM 3 TO 10"
635 INPUT "    SCALE SELECTED IS  ", HSCALE
640 IF HSCALE < 3 OR HSCALE > 10 THEN BEEP: GOTO 625
660 '
665 RETURN
700 ' **********************************************************
705 ' * GOSUB 700                                              *
710 ' * SET END.NUM, SKIP.NUM, AND VERTICAL OFFSET             *
715 ' **********************************************************
720 '
725 INPUT "INPUT LIMIT ON NUMBER OF RECS TO BE PROCESSED  ", END.NUM
730 PRINT
735 INPUT "SOME INITIAL RECORDS TO BE SKIPPED (Y/N)"; SKIP$
740 PRINT
745 IF SKIP$ <> "Y" AND SKIP$ <> "y" THEN GOTO 765
750 '
755 INPUT "INPUT COUNT OF INITIAL RECORDS TO BE SKIPPED  ", SKIP.NUM
758 PRINT
760 GOTO 770
765 SKIP.NUM = 0
770 INPUT "OFFSET FIRST RECORD (Y/N)"; OFFSET$
771 PRINT
772 IF OFFSET$ <> "Y" AND OFFSET$ <> "y" THEN GOTO 778
774 INPUT "INPUT VERTICAL OFFSET FOR FIRST RECORD  ", V.OFFSET
776 GOTO 780
778 V.OFFSET = 0
780 RETURN
800 ' ********************************************************
805 ' * GOSUB 800                                            *
810 ' * READ FIRST (IDENTIFICATION) RECORD                   *
815 ' ********************************************************
820 '
825 IF EOF(2) THEN GOTO 215
830     INPUT #2, I.FILE.TITLE$, I.FILE.OWNER$, I.FILE.UPDATE.DATE$
835 HDG1$ = I.FILE.OWNER$
870 RETURN
900 ' ********************************************************
905 ' * GOSUB 900                                            *
910 ' * SKIP NUMBER OF RECORDS SPECIFIED BY SKIP.NUM         *
915 ' ********************************************************
920 '
925 FOR I = 1 TO SKIP.NUM
930    IF EOF(2) THEN GOTO 215
935    INPUT #2, I.DATE, I.TDLR, I.DDLR
940    REC.CNT = REC.CNT + 1
945    NEXT
950 RETURN
1000 ' ********************************************************
1002 ' * GOSUB 1000                                           *
1004 ' * SET UP HEADERS AND AXES                              *
1006 ' ********************************************************
1008 '
1010 SCREEN 2,,0,0
1014 LOCATE 6,1
1016 PRINT "D"
1018 LOCATE 7,1
1020 PRINT "E"
1022 LOCATE 8,1
1024 PRINT "L"
1026 LOCATE 9,1
1028 PRINT "T"
1030 LOCATE 10,1
1032 PRINT "A"
1040 '
1042 LOCATE 25,70
1044 PRINT "PERIOD"
1050 '
1052 LOCATE 1,1
1054 PRINT HDG1$
1060 '
1062 LOCATE 1,30
1064 PRINT "PORTFOLIO VALUE CHANGES"
1070 '
1072 LOCATE 1,65
1074 PRINT DATE$
1080 '
1082 LOCATE 3,30
1084 PRINT "MAX DELTA "
1090 '
1092 LOCATE 3,40
1094 PRINT SF.HDR$
1100 '
1105 LINE (20,20)-(20,190)
1110 '   SET COL 20 TICK MARKS (EVERY 5TH ROW)
1115 FOR A = 20 TO 190 STEP 5
1120    LINE (18,A)-(22,A)
1125    NEXT A
1130 LINE (20,180)-(620,180)
1135 '   SET ROW 20 TICK MARKS (INTERVAL SPECIFIED BY HSCALE)
1140 FOR B = 20 TO 620 STEP HSCALE
1145    LINE (B,178)-(B,182)
1150    NEXT B
1155 '
1195 RETURN
1200 ' ********************************************************
1205 ' GOSUB 1200 - GSCALE = 1
1210 SF = 0.2
1215 SF.HDR$ = "$800"
1220 RETURN
1225 ' ********************************************************
1230 ' GOSUB 1225 - GSCALE = 2
1235 SF = 0.1
1240 SF.HDR$ = "$1,600"
1245 RETURN
1250 ' ********************************************************
1255 ' GOSUB 1250 - GSCALE = 3
1260 SF = 0.04
1265 SF.HDR$ = "$4,000"
1270 RETURN
1275 ' ********************************************************
1280 ' GOSUB 1275 - GSCALE = 4
1285 SF = 0.02
1290 SF.HDR$ = "$8,000"
1295 RETURN
1300 ' ********************************************************
1305 ' GOSUB 1300 - GSCALE = 5
1310 SF = 0.01
1315 SF.HDR$ = "$16,000"
1320 RETURN
1325 ' ********************************************************
1330 ' GOSUB 1325 - GSCALE = 6
1335 SF = 0.005000001          '.005 SCALE FACTOR
1340 SF.HDR$ = "$32,000"
1345 RETURN
1350 ' ********************************************************
1355 ' GOSUB 1350 - GSCALE = 7
1360 SF = 0.0025
1365 SF.HDR$ = "$64,000"
1370 RETURN
1375 ' ********************************************************
1380 ' GOSUB 1375 - GSCALE = 8
1385 SF = 0.00125
1390 SF.HDR$ = "$128,000"
1395 RETURN
1400 ' ********************************************************
1405 ' * GOSUB 1400                                           *
1410 ' * PRINT GRAPH POINTS AND INTERCONNECT W/LINES          *
1415 ' ********************************************************
1420 '
1425 LINE (OLD.C,OLD.R)-(NEW.C,NEW.R)
1430 OLD.C = NEW.C
1435 OLD.R = NEW.R
1440 NEW.C = NEW.C + HSCALE
1445 RETURN
1500 ' ********************************************************
1505 ' * GOSUB 1500                                           *
1510 ' * PROCESS FIRST DATA RECORD                            *
1515 ' ********************************************************
1520 '
1525 IF EOF(2) THEN GOTO 215
1530     INPUT #2, I.DATE, I.TDLR, I.DDLR
1535 REC.CNT = REC.CNT + 1
1540 OLD.C = 20
1545 IF V.OFFSET <> 0 THEN GOSUB 1800 ELSE OLD.R = 180
1550 NEW.C = OLD.C + HSCALE
1555 DDLR = I.DDLR * SF
1560 DDLR = CINT(DDLR)
1565 NEW.R = OLD.R - DDLR
1575 GOSUB 1400              'PRINT GRAPH POINTS AND INTERCONNECT W/LINES
1580 RETURN
1700 ' *********************************************************
1705 ' * GOSUB 1700                                            *
1710 ' * PLOT PORTFOLIO DOLLAR TOTALS AGAINST WEEKS            *
1715 ' *********************************************************
1720 '
1725 END.NUM = END.NUM - REC.CNT
1730 FOR I = 1 TO END.NUM
1735     IF EOF(2) THEN GOTO 1775
1740     INPUT #2, I.DATE, I.TDLR, I.DDLR
1750     DDLR = I.DDLR * SF
1755     DDLR = CINT(DDLR)
1760     NEW.R = OLD.R - DDLR
1765     GOSUB 1400              'PRINT GRAPH POINTS AND INTERCONNECT W/LINES
1768     NEXT
1769 '
1770 SAVE.R = OLD.R
1775 CLOSE #2
1780 SOUND 1760,9:SOUND 1046.5,9:SOUND 659.26,9:SOUND 440,9:SOUND 261.63,9:SOUND 164.81,9:SOUND 32767,9
1790 R$ = INKEY$: IF R$ = "" THEN 1790
1792 '
1795 RETURN
1800 ' *********************************************************
1805 ' * GOSUB 1800                                            *
1810 ' * SET VERTICAL OFFSET FOR FIRST RECORD                  *
1815 ' *********************************************************
1820 '
1830 V.OFFSET = CINT(V.OFFSET)
1840 OLD.R = V.OFFSET
1850 RETURN
4000 ' **********************************************************
4005 ' * GOSUB 4000                                             *
4010 ' * EOJ HOUSEKEEPING                                       *
4015 ' **********************************************************
4017 '
4020 SCREEN 0,0,0,0
4022 IF CLOR$ ="Y" OR CLOR$ ="y" THEN COLOR FG,BG,BDR
4024 CLS
4025 PRINT "VERTICAL OFFSET FOR NEXT PLOT IS ", SAVE.R
4027 PRINT
4030 PRINT "ALL DATA PROCESSED - PROGRAM ENDS"
4065 RETURN
4100 '***********************************************************
4105 '*   SET EPSON PRINTER TO DEFAULT CONDITION                *
4110 '***********************************************************
4115 '
4120 LPRINT CHR$(27); CHR$(64);         'TURN OFF ALL SPCL PRINTER CODES
4125 RETURN
4200 '***********************************************************
4205 '*   SET IBM PRINTER TO DEFAULT CONDITIONS                 *
4210 '***********************************************************
4215 '
4220 LPRINT CHR$(20);                   'DOUBLE WIDTH CHAR OFF
4222 LPRINT CHR$(24);                   'DOUBLE WIDTH CHAR OFF
4225 LPRINT CHR$(18);                   'COMPRESSED CHAR OFF
4227 LPRINT CHR$(27); CHR$(65); CHR$(12);  'ENABLE DEFAULT LINE SPACING
4230 LPRINT CHR$(27); CHR$(50);         'DEFAULT LINE SPACING (1/6")
4235 LPRINT CHR$(27); CHR$(55);         'CHAR SET #1 SELECTED
4240 LPRINT CHR$(27); CHR$(57);         'PAPER OUT SWITCH ENABLED
4245 LPRINT CHR$(27); CHR$(70);         'EMPHASIZED CHAR OFF
4250 LPRINT CHR$(27); CHR$(72);         'DOUBLE STRIKE OFF
4255 LPRINT CHR$(27); CHR$(79);         'IGNORE SKIPS OVER PERFS
4260 LPRINT CHR$(27); CHR$(85); CHR$(0);  'SELECT BIDIRECTIONAL PRINT
4265 LPRINT CHR$(27); CHR$(84);         'SUB/SUPERSCRIPT OFF
4270 LPRINT CHR$(27); CHR$(87); CHR$(0);  'DOUBLE WIDE CHAR OFF
4275 LPRINT CHR$(27); CHR$(45); CHR$(0);  'UNDERLINING OFF
4280 '
4285 RETURN
4290 '
4295 '***********************************************************
```

## DLTAPRNT.BAS

```bas
10  ' PGM NAME: DLTAPRNT.BAS      WRITTEN 9-4-1983     REV 1 JUNE 1984
15 ' ******************************************************************
20 ' * MATRIX IDENTIFICATION AND DIMENSIONS                           *
25 ' ******************************************************************
30 '
35 DIM G$(80)
40 ' *****************************************************************
45 ' * MODULE 0                                                      *
50 ' * DRIVER MODULE                                                 *
55 ' *****************************************************************
60 '
67 KEY OFF
90 OPEN "A:DRIVE.DTA" FOR INPUT AS #1
100 INPUT #1, DRIVE$,PRNT$,CLOR$,FG,BG,BDR
110 CLOSE #1
112 IF CLOR$ ="Y" OR CLOR$ = "y" THEN COLOR FG,BG,BDR
114 CLS
116 PRINT "PROGRAM DLTAPRNT.BAS EXECUTING"
120 IF DRIVE$ = "A" OR DRIVE$ = "a" THEN GOSUB 300 ELSE GOSUB 400
130 '
135 WIDTH "LPT1:",80            'SET LINE WIDTH TO 80
140 '  SET UP DEFAULT CONDITIONS FOR IBM OR EPSON PRINTER
150 IF PRNT$ = "E" OR PRNT$ = "e" THEN GOSUB 4200 ELSE GOSUB 4300
160 LPRINT CHR$(27); CHR$(48);          'SET FOR COMPRESSED LINES
165 '
170 GOSUB 1000                  'PRINT HDRS, PERFORM HOUSEKEEPING
175 '
180 END.NUM = END.NUM - REC.CNT
190 FOR I = 1 TO END.NUM
200         IF EOF(2) THEN GOTO 230
210         GOSUB 3000         'PROCESS INPUT RECORDS
220         NEXT
230 GOSUB 4000                 'PERFORM EOJ HOUSEKEEPING
240 END
300 ' *******************************************************************
310 ' * GOSUB 300                                                       *
320 ' * GET DATA FROM DRIVE A                                           *
330 ' *******************************************************************
340 '
350 PRINT "INSERT DATA DISKETTE IN DRIVE A"
355 PRINT "SET PRINTER TO TOP OF PAGE"
360 PRINT "VERIFY THAT PRINTER IS ON"
365 PRINT "STRIKE ANY KEY WHEN READY"
370 A$ = INKEY$: IF A$ = "" THEN 370
380 OPEN "A:DLTAFILE.DTA" FOR INPUT AS #2
390 RETURN
400 ' *******************************************************************
410 ' * GOSUB 400                                                       *
420 ' * GET DATA FROM DRIVE B                                           *
430 ' *******************************************************************
440 '
450 PRINT "INSERT DATA DISKETTE IN DRIVE B"
455 PRINT "SET PRINTER TO TOP OF PAGE"
460 PRINT "VERIFY THAT PRINTER IS ON"
465 PRINT "STRIKE ANY KEY WHEN READY"
470 A$ = INKEY$: IF A$ = "" THEN 470
480 OPEN "B:DLTAFILE.DTA" FOR INPUT AS #2
490 RETURN
1000 ' ****************************************************************
1002 ' * GOSUB 1000                                                   *
1004 ' * PRELIMINARY OPERATIONS                                       *
1008 ' ****************************************************************
1010 '
1015 INPUT #2, I.FILE.TITLE$,I.FILE.OWNER$,I.FILE.UPDATE.DATE$
1020 HDG1$ = I.FILE.OWNER$
1025 GOSUB 2000                         'SET UP HEADINGS
1030 GOSUB 2500                         'SET UP END.NUM AND SKIP.NUM
1035 IF SKIP.NUM <> 0 THEN GOSUB 2700   'SKIP INITIAL RECORDS
1038 '   END PROCESSING IF RECORD COUNT LIMIT REACHED
1040 IF REC.CNT > END.NUM THEN GOTO 230
1044 HDG2$ = "PORTFOLIO CHANGES"
1046 HDG3$ = "DOLLAR CHANGES"
1048 HDG4$ = "PERCENT CHANGES (UNITS)"
1050 LPRINT
1052 LPRINT TAB(3) HDG1$; TAB(35) HDG2$; TAB(70) DATE$
1054 LPRINT
1056 LPRINT TAB(16) HDG3$; TAB(57) HDG4$
1058 LPRINT
1060 LPRINT TAB(6) HDRA$; TAB(16) HDRB$; TAB(28) "0"; TAB(36) HDRC$; TAB(46) HDRD$; TAB(57) "-10"; TAB(62) "-5"; TAB(68) "0"; TAB(72) "+5"; TAB(77) "+10"
1062 LPRINT TAB(8) "v"; TAB(18) "v"; TAB(28) "v"; TAB(38) "v"; TAB(48) "v"; TAB(58) "v"; TAB(63) "v"; TAB(68) "v"; TAB(73) "v"; TAB(78) "v"
1064 GWEEK$ = "      "
1065 G$(0) = " "
1066 FOR I = 1 TO 80
1068         IF PRNT$ = "E" THEN G$(I) = CHR$(157) ELSE G$(I) = CHR$(196)
1070         NEXT
1072 GOSUB 3500                 'WRITE REC WITH G$ ELEMENTS
1074 GOSUB 3600                 'CLEAR G$ ELEMENTS TO SPACES
1076 RETURN
2000 ' ****************************************************************
2005 ' * GOSUB 2000                                                   *
2010 ' * SET UP GRAPH HEADINGS                                        *
2015 ' ****************************************************************
2020 '
2025 PRINT "SELECT GRAPH SCALE FROM FOLLOWING:"
2030 PRINT "     1 - $0 TO $1000 RANGE"
2035 PRINT "     2 - $0 TO $2000 RANGE"
2040 PRINT "     3 - $0 TO $4000 RANGE"
2045 PRINT "     4 - $0 TO $8000 RANGE"
2050 INPUT "GRAPH SCALE SELECTED IS  ", GSCALE
2060 IF GSCALE <= 0 OR GSCALE > 4 THEN BEEP: GOTO 2025
2065 ON GSCALE GOSUB 2100, 2200, 2300, 2400     'SET PER GRAPH SCALE
2070 RETURN
2100 ' ****************************************************************
2105 ' * GOSUB 2100                                                   *
2110 ' * SET FOR 0 TO 1000 GRAPH SCALE                                *
2115 ' ****************************************************************
2120 '
2125 HDRA$ = "-1000"
2130 HDRB$ = " -500"
2135 HDRC$ = " +500"
2140 HDRD$ = "+1000"
2145 SCALE.FACTOR = 0.02
2150 RETURN
2200 ' ****************************************************************
2205 ' * GOSUB 2200                                                   *
2210 ' * SET FOR 0 TO 2000 GRAPH SCALE                                *
2215 ' ****************************************************************
2220 '
2225 HDRA$ = "-2000"
2230 HDRB$ = "-1000"
2235 HDRC$ = "+1000"
2240 HDRD$ = "+2000"
2245 SCALE.FACTOR = 0.01
2250 RETURN
2300 ' ****************************************************************
2305 ' * GOSUB 2300                                                   *
2310 ' * SET FOR 0 TO 4000 GRAPH SCALE                                *
2315 ' ****************************************************************
2320 '
2325 HDRA$ = "-4000"
2330 HDRB$ = "-2000"
2335 HDRC$ = "+2000"
2340 HDRD$ = "+4000"
2345 SCALE.FACTOR = 0.005000001
2350 RETURN
2400 ' ****************************************************************
2405 ' * GOSUB 2400                                                   *
2410 ' * SET FOR 0 TO 8000 GRAPH SCALE                                *
2415 ' ****************************************************************
2420 '
2425 HDRA$ = "-8000"
2430 HDRB$ = "-4000"
2435 HDRC$ = "+4000"
2440 HDRD$ = "+8000"
2445 SCALE.FACTOR = 0.0025
2450 RETURN
2500 ' ****************************************************************
2505 ' * GOSUB 2500                                                   *
2510 ' * SET END.NUM AND SKIP.NUM LIMITS                              *
2515 ' ****************************************************************
2520 '
2525 INPUT "INPUT LIMIT ON NUMBER OF RECS TO BE PROCESSED  ", END.NUM
2530 PRINT
2535 INPUT "SOME INITIAL RECORDS TO BE SKIPPED (Y/N)"; SKIP$
2540 PRINT
2545 IF SKIP$ <> "Y" AND SKIP$ <> "y" THEN GOTO 2570
2550 '
2555 INPUT "INPUT COUNT OF INITIAL RECORDS TO BE SKIPPED  ", SKIP.NUM
2560 GOTO 2580
2565 '
2570 SKIP.NUM = 0
2575 '
2580 RETURN
2700 ' ********************************************************
2705 ' * GOSUB 2700                                           *
2710 ' * SKIP NUMBER OF RECORDS SPECIFIED BY SKIP.NUM         *
2715 ' ********************************************************
2720 '
2730 FOR I = 1 TO SKIP.NUM
2735    IF EOF(2) THEN GOTO 230
2740    INPUT #2,I.DATE$,I.NEW.DOLLAR,I.DOLLAR.DLTA
2745    REC.CNT = REC.CNT + 1
2750    NEXT
2755 RETURN
3000 ' ****************************************************************
3002 ' * GOSUB 3000                                                   *
3004 ' * READ FILE, COMPILE GRAPH REC, AND WRITE GRAPH REC            *
3006 ' ****************************************************************
3007 '
3008 INPUT #2, I.DATE$,I.NEW.DOLLAR,I.DOLLAR.DLTA
3009 GWEEK$ = I.DATE$
3010 OLD.DOLLAR = I.NEW.DOLLAR - I.DOLLAR.DLTA
3012 GOSUB 3200                 'SET GRAPH PARAMETERS TO SCALE
3014 GOSUB 3300                 'PREPARE NEW GRAPH LINE
3016 PERCENT.NUMERATOR = I.DOLLAR.DLTA * 100
3018 IF OLD.DOLLAR <> 0 THEN PERCENT.DLTA = PERCENT.NUMERATOR / OLD.DOLLAR ELSE PERCENT.DLTA = 0
3020 GOSUB 3400                 'ROUND OFF PARAMETERS TO INTEGERS
3022 IF I.DOLLAR.DLTA = 0 THEN G$(21) = "*" ELSE GOSUB 3028
3024 GOSUB 3050                 'PLACE PERCENT DELTA ON G$ LINE
3025 GOSUB 3500                 'WRITE REC WITH G$ ELEMENTS
3026 GOSUB 3600                 'CLEAR G$ ELEMENTS TO SPACES
3027 RETURN
3028 I.DOLLAR.DLTA = I.DOLLAR.DLTA + 21
3030 IF I.DOLLAR.DLTA > 21 THEN GOSUB 3034 ELSE GOSUB 3042
3032 RETURN
3034 FOR N = 22 TO I.DOLLAR.DLTA
3036         G$(N) = "$"
3038         NEXT
3040 RETURN
3042 FOR N = I.DOLLAR.DLTA TO 20
3044         G$(N) = "#"
3046         NEXT
3048 RETURN
3050 PERCENT.DLTA = PERCENT.DLTA + 61
3051 G$(PERCENT.DLTA) = "*"
3052 RETURN
3200 ' ****************************************************************
3205 ' * GOSUB 3200                                                   *
3210 ' * SET GRAPH PARAMETERS TO SCALE                                *
3220 ' ****************************************************************
3225 '
3230 I.DOLLAR.DLTA = I.DOLLAR.DLTA * SCALE.FACTOR
3235 OLD.DOLLAR = OLD.DOLLAR * SCALE.FACTOR
3250 RETURN
3300 ' ****************************************************************
3305 ' * GOSUB 3300                                                   *
3310 ' * PREPARE G$ ELEMENTS FOR NEW REC                              *
3320 ' ****************************************************************
3325 '
3330 G$(1) = ":"
3335 G$(11) = ":"
3340 IF PRNT$ = "E" THEN G$(21) = CHR$(156) ELSE G$(21) = CHR$(179)
3345 G$(31) = ":"
3350 G$(41) = ":"
3355 G$(51) = ":"
3360 G$(56) = ":"
3365 IF PRNT$ = "E" THEN G$(61) = CHR$(156) ELSE G$(61) = CHR$(179)
3370 G$(66) = ":"
3375 G$(71) = ":"
3380 RETURN
3400 ' ****************************************************************
3405 ' * GOSUB 3400                                                   *
3410 ' * ROUND OFF PARAMETERS TO INTEGERS                             *
3420 ' ****************************************************************
3425 '
3430 I.DOLLAR.DLTA = CINT(I.DOLLAR.DLTA)
3435 PERCENT.DLTA = CINT(PERCENT.DLTA)
3440 RETURN
3500 ' ****************************************************************
3505 ' * GOSUB 3500                                                   *
3510 ' * WRITE LINE CONSISTING OF G$ ELEMENTS                         *
3515 ' ****************************************************************
3520 '
3525 LPRINT GWEEK$;G$(0);G$(1);G$(2);G$(3);G$(4);G$(5);G$(6);G$(7);G$(8);G$(9);G$(10);
3530 LPRINT G$(11);G$(12);G$(13);G$(14);G$(15);G$(16);G$(17);G$(18);G$(19);G$(20);
3535 LPRINT G$(21);G$(22);G$(23);G$(24);G$(25);G$(26);G$(27);G$(28);G$(29);G$(30);
3540 LPRINT G$(31);G$(32);G$(33);G$(34);G$(35);G$(36);G$(37);G$(38);G$(39);G$(40);
3545 LPRINT G$(41);G$(42);G$(43);G$(44);G$(45);G$(46);G$(47);G$(48);G$(49);G$(50);
3550 LPRINT G$(51);G$(52);G$(53);G$(54);G$(55);G$(56);G$(57);G$(58);G$(59);G$(60);
3555 LPRINT G$(61);G$(62);G$(63);G$(64);G$(65);G$(66);G$(67);G$(68);G$(69);G$(70);
3560 LPRINT G$(71)
3565 RETURN
3600 ' ****************************************************************
3605 ' * GOSUB 3600                                                   *
3610 ' * CLEAR G ELEMENTS TO SPACES                                   *
3615 ' ****************************************************************
3616 '
3618 GWEEK$ = "      "
3620 FOR GS = 1 TO 71
3630     G$(GS) = " "
3635     NEXT
3640 RETURN
4000 ' ****************************************************************
4005 ' * GOSUB 4000                                                   *
4010 ' * EOJ HOUSEKEEPING                                             *
4015 ' ****************************************************************
4020 '
4025 CLOSE #2
4027 LPRINT CHR$(12);
4030 PRINT "ALL DATA PROCESSED - PROGRAM ENDS"
4035 WIDTH "LPT1:",80
4040 ' RESTORE PRINTER TO DEFAULT CONFIGURATION
4045 IF PRNT$ = "E" THEN GOSUB 4200 ELSE GOSUB 4300
4070 RETURN
4099 ' ****************************************************************
4200 '*****************************************************************
4205 '*   SET EPSON PRINTER TO DEFAULT CONDITION                      *
4210 '*****************************************************************
4215 '
4220 LPRINT CHR$(27); CHR$(64);         'TURN OFF ALL SPCL PRINTER CODES
4225 RETURN
4300 '*****************************************************************
4305 '*   SET IBM PRINTER TO DEFAULT CONDITIONS                       *
4310 '*****************************************************************
4315 '
4320 LPRINT CHR$(20);                   'DOUBLE WIDTH CHAR OFF
4322 LPRINT CHR$(24);                   'DOUBLE WIDTH CHAR OFF
4325 LPRINT CHR$(18);                   'COMPRESSED CHAR OFF
4327 LPRINT CHR$(27); CHR$(65); CHR$(12);  'ENABLE DEFAULT LINE SPACING
4330 LPRINT CHR$(27); CHR$(50);         'DEFAULT LINE SPACING (1/6")
4335 LPRINT CHR$(27); CHR$(55);         'CHAR SET #1 SELECTED
4340 LPRINT CHR$(27); CHR$(57);         'PAPER OUT SWITCH ENABLED
4345 LPRINT CHR$(27); CHR$(70);         'EMPHASIZED CHAR OFF
4350 LPRINT CHR$(27); CHR$(72);         'DOUBLE STRIKE OFF
4355 LPRINT CHR$(27); CHR$(79);         'IGNORE SKIPS OVER PERFS
4360 LPRINT CHR$(27); CHR$(85); CHR$(0);  'SELECT BIDIRECTIONAL PRINT
4365 LPRINT CHR$(27); CHR$(84);         'SUB/SUPERSCRIPT OFF
4370 LPRINT CHR$(27); CHR$(87); CHR$(0);  'DOUBLE WIDE CHAR OFF
4375 LPRINT CHR$(27); CHR$(45); CHR$(0);  'UNDERLINING OFF
4380 '
4385 RETURN
4390 '
4398 '*****************************************************************
```

## PORTCOST.BAS

```bas
10 ' PROGRAM NAME: PORTCOST.BAS   WRITTEN 17 AUG 1983   REV 1 JUNE 1984
20 '
30 '  *******************************************************************
40 '
50  DIM COMP.NAME$(25), QTY(25)
55  DIM COST(25), PERCENT(25), SHARE.COST(25)
60 '
70 '  *******************************************************************
80 '  * DRIVER MODULE                                                   *
90 '  *                                                                 *
100 ' *******************************************************************
110 '
140 OPEN "A:DRIVE.DTA" FOR INPUT AS #1
150 INPUT #1, DRIVE$,PRNT$,CLOR$,FG,BG,BDR
160 CLOSE #1
161 IF CLOR$ ="Y" OR CLOR$ = "y" THEN COLOR FG,BG,BDR
164 CLS
166 PRINT "PROGRAM PORTCOST.BAS EXECUTING"
170 IF DRIVE$ = "A" OR DRIVE$ = "a" THEN GOSUB 300 ELSE GOSUB 400
175 '
180 '  SET UP DEFAULT CONDITIONS FOR IBM OR EPSON PRINTER
185 IF PRNT$ = "E" OR PRNT$ = "e" THEN GOSUB 2000 ELSE GOSUB 2100
190 '
195 GOSUB 500                           'PRIME READ
200 '
210 GOSUB 600                           'DATA READS
220 '
230 GOSUB 800                           'CALCULATE PERCENTAGES
240 '
250 GOSUB 900                           'CALCULATE AVERAGES
260 '
270 GOSUB 1000                          'PRINT REPORT
280 '
290 GOSUB 1900                          'EOJ HSKEEPING
295 '
298 END
300 ' *******************************************************************
310 ' * GOSUB 300                                                       *
320 ' * GET DATA FROM DRIVE A                                           *
330 ' *******************************************************************
340 '
350 PRINT "INSERT DATA DISKETTE IN DRIVE A"
355 PRINT "SET PRINTER TO TOP OF PAGE"
360 PRINT "VERIFY THAT PRINTER IS ON"
365 PRINT "STRIKE ANY KEY WHEN READY"
370 A$ = INKEY$: IF A$ = "" THEN 370
380 OPEN "A:HOLDLIST.DTA" FOR INPUT AS #2
390 RETURN
400 ' *******************************************************************
410 ' * GOSUB 400                                                       *
420 ' * GET DATA FROM DRIVE B                                           *
430 ' *******************************************************************
440 '
450 PRINT "INSERT DATA DISKETTE IN DRIVE B"
455 PRINT "SET PRINTER TO TOP OF PAGE"
460 PRINT "VERIFY THAT PRINTER IS ON"
465 PRINT "STRIKE ANY KEY WHEN READY"
470 A$ = INKEY$: IF A$ = "" THEN 470
480 OPEN "B:HOLDLIST.DTA" FOR INPUT AS #2
490 RETURN
500 ' *******************************************************************
510 ' * GOSUB 500                                                       *
520 ' * PRIME READ MODULE                                               *
530 ' *******************************************************************
540 '
550 INPUT #2, FILE.TITLE$,FILE.OWNER$,RECORD.COUNT,DATE.OF.RECORD$,UPDATE.DATE$
560 RETURN
600 ' *******************************************************************
610 ' * GOSUB 600                                                       *
620 ' * READ IN ALL INPUT DATA                                          *
630 ' *******************************************************************
640 '
650 FOR N = 1 TO RECORD.COUNT
660     IF EOF(2) THEN GOTO 740
670     INPUT #2, INAME$, IQTY, ICOST, ITARGET
680     COMP.NAME$(N) = INAME$
690     QTY(N) = IQTY
700     COST(N) = ICOST
710     TOTAL.COST = TOTAL.COST + ICOST
720     TOTAL.SHARE.COUNT = TOTAL.SHARE.COUNT + IQTY
730     NEXT
740 CLOSE #2
745 N = N - 1
750 RETURN
800 ' *******************************************************************
810 ' * GOSUB 800                                                       *
820 ' * CALCULATE PERCENTS AND COST/SHARE                               *
830 ' *******************************************************************
840 '
850 FOR J = 1 TO N
860     PERCENT(J) = COST(J) / TOTAL.COST
870     PERCENT(J) = PERCENT(J) * 100
880     SHARE.COST(J) = COST(J) / QTY(J)
890     NEXT
895 RETURN
900 ' *******************************************************************
910 ' * GOSUB 900                                                       *
920 ' * CALCULATE AVERAGES                                              *
930 ' *******************************************************************
940 '
950 AVERAGE.PER.SHARE = TOTAL.COST / TOTAL.SHARE.COUNT
960 AVERAGE.PER.STOCK = TOTAL.COST / N
970 RETURN
1000 ' *******************************************************************
1010 ' * GOSUB 1000                                                      *
1020 ' * PRINT REPORT                                                    *
1030 ' *******************************************************************
1040 '
1050 GOSUB 1300                         'PRINT HEADERS
1060 FOR K = 1 TO N
1070    LPRINT TAB(10) USING "##,###"; QTY(K);
1080    LPRINT TAB(19) COMP.NAME$(K);
1090    LPRINT TAB(43) USING "###.##"; SHARE.COST(K);
1100    LPRINT TAB(50) USING "#,###,###.##"; COST(K);
1110    LPRINT TAB(68) USING "###.##"; PERCENT(K)
1130    NEXT
1140 '
1150 GOSUB 1700                         'PRINT TOTALS
1160 '
1170 RETURN
1300 ' *******************************************************************
1310 ' * GOSUB 1300                                                      *
1320 ' * PRINT HEADERS                                                   *
1330 ' *******************************************************************
1340 '
1350 LPRINT: LPRINT: LPRINT
1355 '                                   HEADER #1
1360 LPRINT TAB(24) FILE.TITLE$;
1370 LPRINT TAB(43) DATE.OF.RECORD$;
1380 LPRINT TAB(68) DATE$
1390 LPRINT
1395 '                                   HEADER #2
1400 LPRINT TAB(25) FILE.OWNER$
1410 LPRINT: LPRINT
1415 '                                   HEADER #3
1420 LPRINT TAB(12) "STOCK";
1430 LPRINT TAB(19) "STOCK";
1440 LPRINT TAB(44) "COST/";
1450 LPRINT TAB(58) "TOTAL";
1460 LPRINT TAB(66) "PERCENT"
1465 '                                   HEADER #4
1470 LPRINT TAB(13) "QTY";
1480 LPRINT TAB(19) "NAME";
1490 LPRINT TAB(44) "SHARE";
1500 LPRINT TAB(58) "COST";
1510 LPRINT TAB(66) "OF TTL"
1520 LPRINT: LPRINT
1530 '
1540 RETURN
1700 ' *******************************************************************
1710 ' * GOSUB 1700                                                      *
1720 ' * PRINT TOTALS                                                    *
1730 ' *******************************************************************
1740 '
1745 '                                  TOTAL LINE 1
1750 LPRINT TAB(10) "______";
1760 LPRINT TAB(52) "__________"
1765 '                                  TOTAL LINE 2
1770 LPRINT TAB(9) USING "###,###"; TOTAL.SHARE.COUNT;
1780 LPRINT TAB(19) "TOTALS";
1785 LPRINT TAB(49) USING "##,###,###.##"; TOTAL.COST
1790 LPRINT
1795 '                                  TOTAL LINE 3
1800 LPRINT TAB(19) "AVERAGE COST PER SHARE";
1810 LPRINT TAB(56) USING "###.##"; AVERAGE.PER.SHARE
1812 LPRINT
1815 '                                  TOTAL LINE 4
1820 LPRINT TAB(19) "AVERAGE COST PER SECURITY";
1830 LPRINT TAB(50) USING "#,###,###.##"; AVERAGE.PER.STOCK
1840 '
1850 RETURN
1900 ' *******************************************************************
1910 ' * GOSUB 1900                                                      *
1920 ' * EOJ HOUSEKEEPING                                                *
1930 ' *******************************************************************
1940 '
1950 PRINT "PROGRAM PROCESSING COMPLETED - PROGRAM ENDS"
1960 LPRINT CHR$(12);                   'SET PRINTER TO HEAD OF FORM
1995 RETURN
2000 '***********************************************************
2005 '*   SET EPSON PRINTER TO DEFAULT CONDITION                *
2010 '***********************************************************
2015 '
2020 LPRINT CHR$(27); CHR$(64);         'TURN OFF ALL SPCL PRINTER CODES
2025 RETURN
2100 '***********************************************************
2105 '*   SET IBM PRINTER TO DEFAULT CONDITIONS                 *
2110 '***********************************************************
2115 '
2120 LPRINT CHR$(20);                   'DOUBLE WIDTH CHAR OFF
2122 LPRINT CHR$(24);                   'DOUBLE WIDTH CHAR OFF
2125 LPRINT CHR$(18);                   'COMPRESSED CHAR OFF
2127 LPRINT CHR$(27); CHR$(65); CHR$(12);  'ENABLE DEFLT LINE SPACING
2130 LPRINT CHR$(27); CHR$(50);         'DEFAULT LINE SPACING (1/6")
2135 LPRINT CHR$(27); CHR$(55);         'CHAR SET #1 SELECTED
2140 LPRINT CHR$(27); CHR$(57);         'PAPER OUT SWITCH ENABLED
2145 LPRINT CHR$(27); CHR$(70);         'EMPHASIZED CHAR OFF
2150 LPRINT CHR$(27); CHR$(72);         'DOUBLE STRIKE OFF
2155 LPRINT CHR$(27); CHR$(79);         'IGNORE SKIPS OVER PERFS
2160 LPRINT CHR$(27); CHR$(85); CHR$(0);  'SELECT BIDIRECTIONAL PRINT
2165 LPRINT CHR$(27); CHR$(84);         'SUB/SUPERSCRIPT OFF
2170 LPRINT CHR$(27); CHR$(87); CHR$(0);  'DOUBLE WIDE CHAR OFF
2175 LPRINT CHR$(27); CHR$(45); CHR$(0);  'UNDERLINING OFF
2180 '
2185 RETURN
2190 '
2195 '***********************************************************
```

## PORTMRKT.BAS

```bas
10 ' PROGRAM NAME: PORTMRKT.BAS   WRITTEN 27 AUG 1983   REV 1 JUNE 1984
20 '
30 '  *******************************************************************
40 '
50  DIM COMP.NAME$(25), QTY(25), PRICE(25), DELTA(25)
55  DIM TARGET(25)
60 '
70 '  *******************************************************************
80 '  * DRIVER MODULE                                                   *
90 '  *                                                                 *
100 ' *******************************************************************
110 '
117 KEY OFF
140 OPEN "A:DRIVE.DTA" FOR INPUT AS #1
150 INPUT #1, DRIVE$,PRNT$,CLOR$,FG,BG,BDR
160 CLOSE #1
162 IF CLOR$ = "Y" OR CLOR$ = "y" THEN COLOR FG,BG,BDR
164 CLS
166 PRINT "PROGRAM PORTMRKT.BAS EXECUTING"
170 IF DRIVE$ = "A" OR DRIVE$ = "a" THEN GOSUB 300 ELSE GOSUB 400
180 '
190 GOSUB 500                           'PRIME READ
200 '
210 GOSUB 600                           'DATA READS
220 '
230 GOSUB 800                           'INPUT PRICE/DELTA PER SHARE
235 '
240 WIDTH "LPT1:",132
242 '  SET UP DEFAULT CONDITIONS FOR IBM OR EPSON PRINTER
245 IF PRNT$ = "E" OR PRNT$ = "e" THEN GOSUB 2800 ELSE GOSUB 2900
248 '
250 LPRINT CHR$(15);                    'SET COMPRESSED CHAR ON
255 '
260 GOSUB 1000                          'PRINT REPORT
265 '
270 GOSUB 2200                          'CHECK/CORRECT REPORT OUTPUT
280 '
290 GOSUB 2700                          'EOJ HSKEEPING
295 '
298 END
300 ' *******************************************************************
310 ' * GOSUB 300                                                       *
320 ' * GET DATA FROM DRIVE A                                           *
330 ' *******************************************************************
340 '
350 PRINT "INSERT DATA DISKETTE IN DRIVE A"
355 PRINT "SET PRINTER TO TOP OF PAGE"
360 PRINT "VERIFY THAT PRINTER IS ON"
365 PRINT "STRIKE ANY KEY WHEN READY"
370 A$ = INKEY$: IF A$ = "" THEN 370
380 OPEN "A:HOLDLIST.DTA" FOR INPUT AS #2
390 RETURN
400 ' *******************************************************************
410 ' * GOSUB 400                                                       *
420 ' * GET DATA FROM DRIVE B                                           *
430 ' *******************************************************************
440 '
450 PRINT "INSERT DATA DISKETTE IN DRIVE B"
455 PRINT "SET PRINTER TO TOP OF PAGE"
460 PRINT "VERIFY THAT PRINTER IS ON"
465 PRINT "STRIKE ANY KEY WHEN READY"
470 A$ = INKEY$: IF A$ = "" THEN 470
480 OPEN "B:HOLDLIST.DTA" FOR INPUT AS #2
490 RETURN
500 ' *******************************************************************
510 ' * GOSUB 500                                                       *
520 ' * PRIME READ MODULE                                               *
530 ' *******************************************************************
540 '
550 INPUT #2, FILE.TITLE$,FILE.OWNER$,RECORD.COUNT,DATE.OF.RECORD$,UPDATE.DATE$
560 RETURN
600 ' *******************************************************************
610 ' * GOSUB 600                                                       *
620 ' * READ IN ALL INPUT DATA                                          *
630 ' *******************************************************************
640 '
650 FOR N = 1 TO RECORD.COUNT
660     IF EOF(2) THEN GOTO 740
670     INPUT #2, INAME$, IQTY, ICOST, ITARGET
680     COMP.NAME$(N) = INAME$
690     QTY(N) = IQTY
700     TARGET(N) = ITARGET
720     TOTAL.SHARE.COUNT = TOTAL.SHARE.COUNT + IQTY
730     NEXT
740 CLOSE #2
745 N = N - 1
750 RETURN
800 ' *******************************************************************
810 ' * GOSUB 800                                                       *
820 ' * INPUT CURRENT PRICE/CHANGES PER SHARE                           *
830 ' *******************************************************************
840 '
845 INPUT "INPUT DATE FOR REPORT (DD MONTH YYYY) ", REPORT.DATE$
850 '
855 PRINT "INPUT CURRENT PRICE PER SHARE (A)"
860 PRINT "      AND"
870 PRINT "      PER SHARE PRICE CHANGE (B)"
880 PRINT "      FOR FOLLOWING:"
890 PRINT
900 '
910 FOR J = 1 TO N
920     PRINT COMP.NAME$(J)
930     INPUT "A = ", PRICE(J)
940     INPUT "B = ", DELTA(J)
950     NEXT
960 '
970 INPUT "DO YOU WISH TO CORRECT AN INPUT (Y/N)? ", C$
980 IF C$ = "Y" OR C$ = "y" THEN GOSUB 2500
990 RETURN
1000 ' *******************************************************************
1010 ' * GOSUB 1000                                                      *
1020 ' * PRINT REPORT                                                    *
1030 ' *******************************************************************
1040 '
1050 GOSUB 1300                         'PRINT HEADERS
1055 '
1060 FOR K = 1 TO N
1070    TTL.DELTA = DELTA(K) * QTY(K)
1080    TTL.PRICE = PRICE(K) * QTY(K)
1090    GRND.TTL.DELTA = GRND.TTL.DELTA + TTL.DELTA
1100    GRND.TTL.PRICE = GRND.TTL.PRICE + TTL.PRICE
1110    LPRINT TAB(12) USING "##,###"; QTY(K);
1120    LPRINT TAB(24) COMP.NAME$(K);
1130    LPRINT TAB(50) USING "###.###"; PRICE(K);
1140    LPRINT TAB(63) USING "##.###"; DELTA(K);
1150    LPRINT TAB(75) USING "###,###.##"; TTL.DELTA;
1160    LPRINT TAB(90) USING "#,###,###.##"; TTL.PRICE;
1170    LPRINT TAB(108) USING "###.###"; TARGET(K);
1180    IF PRICE(K) = TARGET(K) OR PRICE(K) > TARGET(K) THEN LPRINT TAB(122) "****" ELSE LPRINT TAB(122) "    "
1200    NEXT
1210 '
1220 GOSUB 1700                         'PRINT TOTALS
1230 '
1235 LPRINT CHR$(12);                   'PRINTER HOF COMMAND
1240 '
1250 RETURN
1300 ' *******************************************************************
1310 ' * GOSUB 1300                                                      *
1320 ' * PRINT HEADERS                                                   *
1330 ' *******************************************************************
1340 '
1345 LPRINT
1350 LPRINT: LPRINT
1355 '                                   HEADER #1
1360 LPRINT TAB(42) "PORTFOLIO EVALUATION - ";
1370 LPRINT TAB(65) REPORT.DATE$;
1380 LPRINT TAB(110) DATE$
1390 LPRINT
1395 '                                   HEADER #2
1400 LPRINT TAB(52) FILE.OWNER$
1410 LPRINT: LPRINT
1415 '                                   HEADER #3
1420 LPRINT TAB(12) "ACCOUNT";
1430 LPRINT TAB(24) "SECURITY";
1440 LPRINT TAB(50) "CURRENT";
1450 LPRINT TAB(62) "PER SHARE";
1460 LPRINT TAB(78) "TOTAL";
1465 LPRINT TAB(91) "CURRENT";
1470 LPRINT TAB(109) "SELL";
1472 LPRINT TAB(121) "TARGET"
1475 '                                   HEADER #4
1480 LPRINT TAB(12) "QUANTITY";
1485 LPRINT TAB(24) "NAME";
1490 LPRINT TAB(50) "PRICE";
1500 LPRINT TAB(63) "CHANGE";
1510 LPRINT TAB(78) "CHANGE";
1520 LPRINT TAB(91) "TOTAL VALUE";
1530 LPRINT TAB(109) "TARGET";
1540 LPRINT TAB(121) "REACHED"
1550 LPRINT: LPRINT
1560 '
1570 RETURN
1700 ' *******************************************************************
1710 ' * GOSUB 1700                                                      *
1720 ' * PRINT TOTALS                                                    *
1730 ' *******************************************************************
1740 '
1745 '                                  TOTAL LINE 1
1750 LPRINT:LPRINT
1770 LPRINT TAB(11) USING "###,###"; TOTAL.SHARE.COUNT;
1780 LPRINT TAB(24) "TOTALS";
1785 LPRINT TAB(72) USING "##,###,###.##"; GRND.TTL.DELTA;
1800 LPRINT TAB(89) USING "##,###,###.##"; GRND.TTL.PRICE
1805 PRINT
1810 PRINT "TOTAL VALUATION CHANGE";
1815 PRINT USING "##,###,###.##"; GRND.TTL.DELTA
1820 PRINT
1825 PRINT "TOTAL NEW VALUATION";
1830 PRINT USING "##,###,###.##"; GRND.TTL.PRICE
1835 PRINT
1840 '
1850 RETURN
2200 ' *******************************************************************
2210 ' * GOSUB 2200                                                      *
2220 ' * CHECK/CORRECT PRINTED REPORT                                    *
2230 ' *******************************************************************
2240 '
2250 PRINT "CHECK PRINTED REPORT "
2260 INPUT "DO YOU WISH TO CORRECT AND REPRINT (Y/N)? ", Q$
2270 IF Q$ <> "Y" AND Q$ <> "y" THEN GOTO 2350
2280 '
2290 GOSUB 2500                         'CORRECT INPUTS
2300 '
2310 GOSUB 1000                         'PRINT REPORT
2315 '
2320 GOTO 2250
2330 '
2350 RETURN
2500 ' *******************************************************************
2510 ' * GOSUB 2500                                                      *
2520 ' * CORRECT INPUT                                                   *
2530 ' *******************************************************************
2535 '
2540 GRND.TTL.DELTA = 0
2545 GRND.TTL.PRICE = 0
2550 '
2555 PRINT "INPUT NUMBER OF STOCK TO BE CORRECTED"
2560 PRINT "      OR"
2570 PRINT "      0 TO END CORRECTIONS"
2580 INPUT CORRECTION.NUM
2590 IF CORRECTION.NUM = 0 THEN GOTO 2685
2600 IF CORRECTION.NUM < 1 OR CORRECTION.NUM > N THEN BEEP: GOTO 2550
2610 PRINT COMP.NAME$(CORRECTION.NUM)
2620 PRINT "ORIGINAL PRICE ENTERED WAS ", PRICE(CORRECTION.NUM)
2630 INPUT "NEW PRICE TO BE ENTERED IS "; PRICE(CORRECTION.NUM)
2640 PRINT "ORIGINAL PRICE CHANGE ENTERED WAS ", DELTA(CORRECTION.NUM)
2650 INPUT "NEW PRICE CHANGE TO BE ENTERED IS "; DELTA(CORRECTION.NUM)
2660 GOTO 2540
2670 '
2680 '
2685 PRINT "VERIFY THAT PRINTER IS ON"
2690 RETURN
2700 ' *******************************************************************
2710 ' * GOSUB 2700                                                      *
2720 ' * EOJ HOUSEKEEPING                                                *
2730 ' *******************************************************************
2740 '
2750 PRINT "PROGRAM PROCESSING COMPLETED - PROGRAM ENDS"
2770 LPRINT CHR$(18);                   'SET COMPRESSED CHAR OFF
2780 WIDTH "LPT1:",80
2795 RETURN
2800 '***********************************************************
2805 '*   SET EPSON PRINTER TO DEFAULT CONDITION                *
2810 '***********************************************************
2815 '
2820 LPRINT CHR$(27); CHR$(64);         'TURN OFF ALL SPCL PRINTER CODES
2825 RETURN
2900 '***********************************************************
2905 '*   SET IBM PRINTER TO DEFAULT CONDITIONS                 *
2910 '***********************************************************
2915 '
2920 LPRINT CHR$(20);                   'DOUBLE WIDTH CHAR OFF
2922 LPRINT CHR$(24);                   'DOUBLE WIDTH CHAR OFF
2925 LPRINT CHR$(18);                   'COMPRESSED CHAR OFF
2927 LPRINT CHR$(27); CHR$(65); CHR$(12);  'ENABLE DEFAULT LINE SPACING
2930 LPRINT CHR$(27); CHR$(50);         'DEFAULT LINE SPACING (1/6")
2935 LPRINT CHR$(27); CHR$(55);         'CHAR SET #1 SELECTED
2940 LPRINT CHR$(27); CHR$(57);         'PAPER OUT SWITCH ENABLED
2945 LPRINT CHR$(27); CHR$(70);         'EMPHASIZED CHAR OFF
2950 LPRINT CHR$(27); CHR$(72);         'DOUBLE STRIKE OFF
2955 LPRINT CHR$(27); CHR$(79);         'IGNORE SKIPS OVER PERFS
2960 LPRINT CHR$(27); CHR$(85); CHR$(0);  'SELECT BIDIRECTIONAL PRINT
2965 LPRINT CHR$(27); CHR$(84);         'SUB/SUPERSCRIPT OFF
2970 LPRINT CHR$(27); CHR$(87); CHR$(0);  'DOUBLE WIDE CHAR OFF
2975 LPRINT CHR$(27); CHR$(45); CHR$(0);  'UNDERLINING OFF
2980 '
2985 RETURN
2990 '
2995 '***********************************************************
```

## SETDRIVE.BAS

```bas
10 ' ********************************************************************
20 ' *  PROGRAM SETDRIVE.BAS                                            *
30 ' *                                                                  *
40 ' ********************************************************************
50 '
60 ' PROGRAM NAME: SETDRIVE.BAS    WRITTEN 17 AUG 1983    REV 23 MAY 1984
70 '
75 CLS
80 OPEN "A:DRIVE.DTA" FOR OUTPUT AS #1
90 PRINT "IDENTIFY DRIVE FOR DATA INPUT"
100 INPUT "SELECT (A/B)  ",DRIVE$
110 IF DRIVE$ <> "A" AND DRIVE$ <> "a" AND DRIVE$ <> "B" AND DRIVE$ <> "b" THEN BEEP: GOTO 90
130 PRINT "DRIVE SELECTED IS ", DRIVE$
140 INPUT "SELECTION OK? (Y/N) ",OK$
150 IF OK$ = "Y" OR OK$ = "y" THEN GOTO 200
160 GOTO 90
170 '
200 ' *******************************************************************
210 PRINT "IDENTIFY PRINTER USED - E FOR EPSON, I FOR IBM"
220 INPUT "INPUT PRINTER CODE SELECTED (E/I) ", PRNT$
230 IF PRNT$ <> "E" AND PRNT$ <> "e" AND PRNT$ <> "I" AND PRNT$ <> "i" THEN BEEP: GOTO 210
240 PRINT "PRINTER SELECTION IS  ", PRNT$
250 INPUT "INPUT SELECTION OK? (Y/N) ", OK$
260 IF OK$ = "Y" OR OK$ = "y" THEN GOTO 272
265 GOTO 210
270 '
272 INPUT "SELECT COLOR? (Y/N) ",CLOR$
274 IF CLOR$ = "Y" OR CLOR$ = "y" THEN GOSUB 1000 ELSE GOSUB 1500
280 '
290 ' *******************************************************************
300 WRITE #1, DRIVE$,PRNT$,CLOR$,FG,BG,BDR
310 PRINT "SELECTIONS RECORDED - PROGRAM ENDS"
320 CLOSE #1
330 END
340 ' *******************************************************************
1000 CLOR$ = "Y"
1010 INPUT "SELECT FOREGROUND FROM 0 THRU 15 ", FG
1020 IF FG < 0 OR FG > 15 THEN BEEP: GOTO 1010
1110 INPUT "SELECT BACKGROUND FROM 0 THRU 7 ", BG
1120 IF BG < 0 OR BG > 7 THEN BEEP: GOTO 1110
1210 INPUT "SELECT BORDER FROM 0 THRU 15 ", BDR
1220 IF BDR < 0 OR BDR > 15 THEN BEEP: GOTO 1210
1300 ' ******************************************************************
1310 PRINT "FOREGROUND SELECTED IS ", FG
1320 PRINT "BACKGROUND SELECTED IS ", BG
1330 PRINT "BORDER SELECTED IS ", BDR
1340 INPUT "SELECTIONS OK? (Y/N) ", SLCTOK$
1350 IF SLCTOK$ <> "Y" AND SLCTOK$ <> "y" THEN GOTO 1010
1360 RETURN
1500 ' ******************************************************************
1510 CLOR$ = "N"
1520 RETURN
```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0101

     Volume in drive A has no label
     Directory of A:\

    DLTAFILE DTA      1120   9-08-83   9:03a
    DLTAPLOT BAS     11134   3-27-85   9:19p
    DLTAPRNT BAS     12752   7-31-84   3:15p
    DRIVE    DTA        20   5-23-84   4:08p
    FILES101 TXT      1271  12-16-88   1:48p
    GO       BAT       598   1-29-87   5:07p
    HOLDLIST DTA       472   9-08-83   9:35a
    PORTCHG2 DOC      4187   9-21-85  12:23p
    PORTCHNG DOC     11648   3-27-85   9:37p
    PORTCOST BAS      8376   7-31-84   2:59p
    PORTMRKT BAS     10221   7-31-84   3:06p
    PORTPACK BAT       252   9-21-85   1:10p
    PORTPACK DOC     66165  12-10-83   7:31p
    README   TXT       798   9-21-85  12:47p
    SETDRIVE BAS      2065   5-23-84   2:44p
           15 file(s)     131079 bytes
                           25088 bytes free
