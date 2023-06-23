---
layout: page
title: "PC-SIG Diskette Library (Disk #101)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0101/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0101"
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

{% raw %}
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
{% endraw %}

## DLTAPRNT.BAS

{% raw %}
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
{% endraw %}

## FILES101.TXT

{% raw %}
```
Disk No:  101
Program Title:  PORTWORT PACKAGE
PC-SIG version: 2.1

The Portworth Package is a user-supported set of applications programs
that you can use for monitoring and evaluating your stock portfolios.
Portfolios of up to 25 stocks can be processed.  It has graphing
capabilities, and includes documentation and sample files to illustrate
usage.

Usage:  Stock Portfolio Tracking and Evaluation.

Special Requirements:  A version of BASIC.

How to Start:  Type GO (press enter).

Suggested Registration:  $15.00

File Descriptions:

DLTAFILE DTA  Sample input file
DLTAPLOT BAS  Portfolio valuation change line graph program
DLTAPRNT BAS  Portfolio valuation change bar chart program
DRIVE    DTA  System configuration parameter file
HOLDLIST DTA  Sample input file
PORTCHG2 DOC  Documentation file.
PORTCHNG DOC  Documents changes to this version of package
PORTCOST BAS  Portfolio cost valuation program
PORTMRKT BAS  Portfolio current valuation program
PORTPACK BAT  Prints PORTPACK.DOC
PORTPACK DOC  32-page user guide
README   TXT  Description of files on disk
SETDRIVE BAS  System configuration program

PC-SIG
1030D East Duane Avenue
Sunnyvale  Ca. 94086
(408) 730-9291
(c) Copyright 1985,86,87,88,89 PC-SIG, Inc.

```
{% endraw %}

## PORTCHG2.DOC

{% raw %}
```


















                              THE PORTWORTH PACKAGE

                      A Simple Portfolio Monitoring Package

                          for the IBM Personal Computer






                                   VERSION 1.2

                                1 SEPTEMBER 1985

          PLEASE REPLACE ORIGINAL USER'S GUIDE PAGES WITH THESE PAGES.
                         DISCARD ORIGINAL PAGES REMOVED.













                                  George Wall

                              5833 Brookview Drive

                              Alexandria, VA 22310
















                             PORTWORTH USER'S GUIDE            Page iii




                                ADDITIONS/CHANGES

                                   VERSION 1.2

                                1 SEPTEMBER 1985

         1. DOS command statement corrected on page 1.













          PLEASE REPLACE ORIGINAL USER'S GUIDE PAGES WITH THESE PAGES.
          DISCARD ORIGINAL PAGES REMOVED.
































         1 SEPTEMBER 1985                                      Page iii






                             PORTWORTH USER'S GUIDE             Page 1



         1    INTRODUCTION

         1.1  OVERVIEW

              The PORTWORTH package is a set of applications programs
         that you can use for monitoring and evaluating your stock
         portfolios.  Portfolios of up to 25 stocks can be processed.

         The package consists of four main programs (PORTCOST, PORTMRKT,
         DLTAPRNT, and DLTAPLOT).  Each have an input file that is read
         from a diskette.  You use one input file for both the PORTCOST and
         the PORTMRKT programs, and another input file for the DLTAPRNT and
         DLTAPLOT programs.

              You may create the two input files (HOLDLIST.DTA and
         DLTAFILE.DTA) with the PC DOS EDLIN utility or with a suitable
         word processing program that produces comma-delimited files.
         Sample HOLDLIST and DLTAFILE files are included on this diskette.
         To print them for study, make sure that DOS is ready, that A> is
         displayed, and that the printer is at the start of a new page.
         Then type COPY A:HOLDLIST.DTA LPT1: <enter>. The HOLDLIST.DTA
         sample file will be printed.  After printing of that file is
         completed, repeat the procedure for DLTAFILE.DTA. 

              You may use the PORTCOST.BAS program to produce an item
         listing for a stock portfolio of up to 25 stocks. 

              Similarly, you may use the PORTMRKT.BAS program to produce a
         current value item listing for a portfolio of up to 25 stocks.
         During use, the program solicits data from you on current stock
         prices and on the price changes since the previous valuation. You
         are able to correct mistakes you make during input.  Online
         corrections of keyboard input are processed.

              You will be using the DLTAPRNT.BAS program to produce a bar
         chart of dollar changes for each cycle of portfolio valuation
         input data.  The program also produces a chart depicting the
         percent change in value for each cycle.  Since the program
         operates in text mode, data that cannot be effectively displayed
         in one screen can be produced as one continuous chart.

              The DLTAPLOT.BAS program is provided to enable you to produce
         a line chart for display on the monitor.  The chart shows the
         cumulative changes in value of the portfolio over the number of
         cycles processed.  This program operates in high resolution
         graphics mode. 









                                                                     1














              THIS IS THE END OF THE CHANGED PAGES FOR VERSION 1.2





















































..

```
{% endraw %}

## PORTCHNG.DOC

{% raw %}
```


















                              THE PORTWORTH PACKAGE

                      A Simple Portfolio Monitoring Package

                          for the IBM Personal Computer






                                   VERSION 1.1

                                   1 JUNE 1984

          PLEASE REPLACE ORIGINAL USER'S GUIDE PAGES WITH THESE PAGES.
                         DISCARD ORIGINAL PAGES REMOVED.













                                  George Wall

                              5833 Brookview Drive

                              Alexandria, VA 22310
















                             PORTWORTH USER'S GUIDE             Page ii




                                ADDITIONS/CHANGES

                                   VERSION 1.1

                                   1 JUNE 1984

         1. SETDRIVE.BAS modified to allow for selection of color for
         systems equipped with color monitors.

         2. DLTAPLOT.BAS modified to provide ending vertical offset for
         continuation plot with same input data.

         3. PORTMRKT.BAS modified to display TOTAL VALUATION CHANGE
         and TOTAL NEW VALUATION on screen to facilitate report
         checking





          PLEASE REPLACE ORIGINAL USER'S GUIDE PAGES WITH THESE PAGES.
          DISCARD ORIGINAL PAGES REMOVED.
































         1 JUNE 1984                                            Page ii






                             PORTWORTH USER'S GUIDE             Page 8





              8. After you have entered and confirmed the drive
         definition entry, you will be asked to specify the printer to
         be used.  Respond by entering I <enter> if your printer is an
         IBM dot matrix printer or E <enter> if your printer is an
         Epson MX-80 or MX-100 dot matrix printer.  For any other
         printer, you may try each selection and use the one that best
         suits your system.  This selection primarily affects the steps
         used by the programs to set up the default conditions for the
         printer.  (The special characters used by the DLTAPRNT program
         may be altered through use of a printer other than the three
         specified above.)

              9. After you have selected a printer configuration and
         confirmed your selection, all that remains is to select the
         display color if your system configuration allows color. (Your
         system must be equipped with a color/graphics board and a
         color monitor.)  If you will not be using color, simply
         respond N and <enter> to the prompt
                               SELECT COLOR (Y/N)
              Otherwise, respond Y and select the color parameters you
         prefer.  (Refer to the COLOR statement in Section 4 of the
         Basic manual for details on color.)  Do not select the same
         value for both the foreground and the background colors - this
         would result in invisible characters!

              10. Once you have finished with the color options, you
         are done.  The PORTWORTH package is configured to match your
         system.  The entries you made in this program will be recorded
         in the DRIVE.DTA file, which will be checked each time a
         program begins.  You can now cover the write protect notch on
         the program diskette to protect its contents.  Whenever you
         need to change the drive selection or use, the printer
         configuration, or the color selection, just remove the notch
         cover from the program diskette and repeat this procedure from
         step 1.


















         1 JUNE 1984                                               8






                             PORTWORTH USER'S GUIDE            Page 20



              10. After the report is printed, the program again pauses
         and allows you to check the report and to input corrections,
         if required.  It displays:

                        TOTAL VALUATION CHANGE X

                        TOTAL NEW VALUATION Y

                        CHECK PRINTED REPORT
                        DO YOU WISH TO CORRECT AND REPRINT (Y/N)?

              Where X represents the total change in value for the
         portfolio and Y represents the new total portfolio value.

              One quick method of testing the accuracy of your inputs
         for the stocks is to add the total portfolio change from the
         current report to the current total value from the previous
         report.  The algebraic sum should equal the current total
         value for the current report.  (If you have odd lots in your
         portfolio, the decimal amounts may differ due to rounding.)

              If you respond Y to the above query, then you will be
         allowed to correct per steps 9 and 10.  

              11. If you respond N, then you are done!  The program
         responds:

                        PROGRAM PROCESSING COMPLETED - PROGRAM ENDS

                   And it does.



         6.2  STOPPING PORTMRKT

              DURING EXECUTION - You can interrupt program processing
         at any time by pressing the BREAK key while simultaneously
         holding the CTRL key depressed.  However, you should not have
         to do this.

              WHEN FINISHED - The PORTMRKT program will stop on its own
         when processing is completed.  It signifies this with the
         screen message "PROGRAM PROCESSING COMPLETED - PROGRAM ENDS".

              When you are through with the PORTMRKT program, you can
         simply type SYSTEM <enter> to return the system to DOS.  You
         may also load in a different basic program over the PORTMRKT
         program that resides in memory.  If you want to clear the
         PORTMRKT program from memory, simply type NEW <enter>.






         1 JUNE 1984                                                20






                             PORTWORTH USER'S GUIDE            Page 27



              8. The program will display the following on the screen
         after the appropriate graph scale is chosen:

              INPUT LIMIT ON NUMBER OF RECORDS TO BE PROCESSED

              If you want to have all input lines of the DLTAFILE.DTA
         file processed, simply enter some numeric value greater than
         the total number of lines on the file.

              However, if you want the program to stop after processing
         a specified number of lines, type in a numeric value
         corresponding to the number of lines to be processed.

              Respond with a numeric value and <enter>.

              If you stop the plot before running out of input lines to
         be processed (by specifying a limit on the number of records
         to be processed), the program will display an offset value at
         the completion of its operation.  This offset value can be
         jotted down and input during a subsequent running with the
         same file. The offset enables you to continue the plot where
         you left off.

              If, however, the program runs out of input records to be
         plotted, then no offset value is furnished.

              9. The program then displays the following message on the
         screen:

              SOME INITIAL RECORDS TO BE SKIPPED (Y/N)?

              In some cases, you may not be interested in processing
         the first lines of the file.  (You may have a chart on these
         already.)  To skip the lines, respond with Y and <enter>.

              The program then displays the following on the screen:

              INPUT COUNT OF INITIAL RECORDS TO BE SKIPPED

              Respond by entering the number of records to be skipped
         and follow this with <enter>.

              Use care, however, not to enter a limit in this step that
         is higher than the count entered in step 7.  Otherwise the
         program will end without producing a chart at all!

              If you do not wish to skip some records, simply type N
         and <enter>.







         1 JUNE 1984                                                27






                             PORTWORTH USER'S GUIDE            Page 28


              10. The program then displays the following:

                         OFFSET FIRST FIRST RECORD (Y/N)

              If you have an offset value from a previous plot of the
         input file (see 8 above), then you may wish to start the plot
         some distance from the X-axis base line.  If so, simply
         respond Y and <enter>.  Then input the vertical offset you
         wish to use for the first record.

              If you want the plot to begin at the intersection of the
         X and Y axes, then respond N and <enter>.

              11. After the above selections have been made, the
         program plots the input points on the screen and creates a
         line chart of the points plotted.  The program sounds a series
         of notes to signal completion and then pauses.

              If you are running in DOS version 2.0, you can use the
         GRAPHICS screen print command to cause the line chart to be
         printed.  

              When you are finished with the display, simply press any
         key to cause the program to end.

              After you press a key to end the program, the program will
         issue the following message:

                       VERTICAL OFFSET FOR NEXT PLOT IS XXX

              Where XXX represents a number that can be used when
         continuing the plot in the next running of the program.

         8.2  STOPPING DLTAPLOT

              DURING EXECUTION - You can interrupt program processing
         at any time by pressing the BREAK key while simultaneously
         holding the CTRL key depressed.  However, you should not have
         to do this.

              WHEN FINISHED - The DLTAPLOT program will signal
         completion to the screen display by an audible series of
         tones.  After these tones have stopped, you may use the
         Graphics command to print the screen display (Version
         2.0 DOS only).  When you are done with the screen display,
         simply press any key to cause the program to end. 

              When you are through with the DLTAPLOT program, you can
         simply type SYSTEM <enter> to return the system to DOS.  You
         may also load in a different basic program over the DLTAPLOT
         program that resides in memory.  If you want to clear the
         DLTAPLOT program from memory, simply type NEW <enter>.




         1 JUNE 1984                                                28













              THIS IS THE END OF THE CHANGED PAGES FOR VERSION 1.1





















































                                                                   .
                                                                   .

```
{% endraw %}

## PORTCOST.BAS

{% raw %}
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
{% endraw %}

## PORTMRKT.BAS

{% raw %}
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
{% endraw %}

## PORTPACK.DOC

{% raw %}
```


















                              THE PORTWORTH PACKAGE

                      A Simple Portfolio Monitoring Package

                          for the IBM Personal Computer

























                                  George Wall

                              5833 Brookview Drive

                              Alexandria, VA 22310
















                             PORTWORTH USER'S GUIDE             Page i



              TABLE OF CONTENTS

         1    INTRODUCTION.................................... 1
         1.1       OVERVIEW................................... 1
         1.2       CAPABILITIES............................... 2
         1.3       BENEFITS................................... 3
         1.4       HARDWARE REQUIREMENTS...................... 4
         1.5       SOFTWARE REQUIREMENTS...................... 4

         2    PROGRAM OPERATION - GENERAL..................... 5
         2.1       USE OF DRIVES.............................. 5
         2.2       ERROR HANDLING............................. 5

         3    PACKAGE USE - FIRST TIME........................ 5
         3.1       PREPARING DISKETTES FOR USE................ 6
         3.2       ONE-TIME PACKAGE SETUP..................... 7

         4    ESTABLISHING PROGRAM INPUT FILES................ 9
         4.1       CREATING THE HOLDLIST.DTA FILE............. 9
         4.2       SPECIFICATIONS FOR HOLDLIST.DTA FILE....... 10
         4.3       CREATING THE DLTAFILE.DTA FILE............. 12
         4.4       SPECIFICATIONS FOR DLTAFILE.DTA FILE....... 13

         5    PORTCOST PROGRAM OPERATION...................... 15
         5.1       STARTING AND RUNNING PORTCOST.............. 15
         5.2       STOPPING PORTCOST.......................... 16

         6    PORTMRKT PROGRAM OPERATION...................... 17
         6.1       STARTING AND RUNNING PORTMRKT.............. 17
         6.2       STOPPING PORTMRKT.......................... 20

         7    DLTAPRNT PROGRAM OPERATION...................... 21
         7.1       STARTING AND RUNNING DLTAPRNT.............. 21
         7.2       STOPPING DLTAPRNT.......................... 24

         8    DLTAPLOT PROGRAM OPERATION...................... 25
         8.1       STARTING AND RUNNING DLTAPLOT.............. 25
         8.2       STOPPING DLTAPLOT.......................... 28

         9    NOTES ON THE PORTWORTH PACKAGE.................. 29

         10   DISCLAIMER...................................... 29

         11 PERMISSION TO COPY................................ 30

         12 SUPPORT BY USER................................... 30

         13 AUTHOR IDENTIFICATION............................. 30







                                                                     i






                             PORTWORTH USER'S GUIDE             Page 1



         1    INTRODUCTION

         1.1  OVERVIEW

              The PORTWORTH package is a set of applications programs
         that you can use for monitoring and evaluating your stock
         portfolios.  Portfolios of up to 25 stocks can be processed.

         The package consists of four main programs (PORTCOST, PORTMRKT,
         DLTAPRNT, and DLTAPLOT).  Each have an input file that is read
         from a diskette.  You use one input file for both the PORTCOST and
         the PORTMRKT programs, and another input file for the DLTAPRNT and
         DLTAPLOT programs.

              You may create the two input files (HOLDLIST.DTA and
         DLTAFILE.DTA) with the PC DOS EDLIN utility or with a suitable
         word processing program that produces comma-delimited files.
         Sample HOLDLIST and DLTAFILE files are included on this diskette.
         To print them for study, make sure that DOS is ready, that A> is
         displayed, and that the printer is at the start of a new page.
         Then type COPY A:HOLDLIST.DTA <enter>.  The HOLDLIST.DTA sample
         file will be printed.  After printing of that file is completed,
         repeat the procedure for DLTAFILE.DTA. 

              You may use the PORTCOST.BAS program to produce an item
         listing for a stock portfolio of up to 25 stocks. 

              Similarly, you may use the PORTMRKT.BAS program to produce a
         current value item listing for a portfolio of up to 25 stocks.
         During use, the program solicits data from you on current stock
         prices and on the price changes since the previous valuation. You
         are able to correct mistakes you make during input.  Online
         corrections of keyboard input are processed.

              You will be using the DLTAPRNT.BAS program to produce a bar
         chart of dollar changes for each cycle of portfolio valuation
         input data.  The program also produces a chart depicting the
         percent change in value for each cycle.  Since the program
         operates in text mode, data that cannot be effectively displayed
         in one screen can be produced as one continuous chart.

              The DLTAPLOT.BAS program is provided to enable you to produce
         a line chart for display on the monitor.  The chart shows the
         cumulative changes in value of the portfolio over the number of
         cycles processed.  This program operates in high resolution
         graphics mode. 









                                                                     1






                             PORTWORTH USER'S GUIDE             Page 2



         1.2  CAPABILITIES

              You can use the PORTCOST and PORTMRKT programs to process
         data for portfolios containing up to 25 different stock
         components. For portfolios consisting of more than 25 stocks, you
         can split the portfolio into two or more separate portfolio files,
         with each file on a separate diskette.  You must name each file
         HOLDLIST.DTA.  You can then use the PORTCOST and PORTMRKT programs
         on each of the separate files to produce individual listings for
         each file.

              You can use the DLTAPLOT program to create a line chart
         that is displayed on the monitor.  If you are operating your
         system under PC DOS Version 2.0, you can then utilize the
         GRAPHICS screen print command to cause the graphics display to
         be printed.  If you are operating under PC DOS Version 1.1,
         you must have a suitable screen dump utility that operates in
         the graphics mode to cause the screen output to be printed.
         In any case however, your system must be equipped for
         graphics.  To facilitate printing of the screen display, the
         DLTAPLOT program suspends processing after the screen display
         of the line chart is completed to allow printing of the screen
         contents.
































                                                                     2






                             PORTWORTH USER'S GUIDE             Page 3



         1.3  BENEFITS

              We have designed the programs within the PORTWORTH
         package to be simple, straightforward, and easy to use.  You
         are provided with prompts throughout the programs to assure
         accurate operation.  If you respond incorrectly, the program
         "beeps" at you and gives you the opportunity to input a
         corrected response. Any errors you make during data key-in can
         be corrected without re-running and without re-input of the
         entire response string.  The scope of these programs have been
         intentionally kept narrow to assure you of simple operation
         and uncomplicated execution. 

              Through the use of the PORTCOST program, you can list
         your current portfolio and generate the following for each
         stock that you have listed:

              Number of shares owned

              Cost per share

              Total cost for shares held

              Percent of total portfolio cost

              In addition, you can use the output to identify the
         average cost per share held and the average cost for each
         security held.

              You need run this program only when your portfolio
         changes (usually through purchase or sale of stock).

              Through the use of the PORTMRKT program, you can
         establish the net change in portfolio valuation (exclusive of
         brokerage costs and other costs of sale) since the last
         valuation.  In addition, you can determine a precise
         evaluation of your portfolio based on the current price of
         each of the securities held (again subject to the
         same exclusion).  As a check on your input into the program,
         you can prove the computed change in valuation by comparing
         the last portfolio valuation to the current one.  The
         difference in portfolio valuations should match the change in
         valuation.

              You can repeat this process as often as you want.  The
         interval between valuations can be daily, weekly, biweekly, or
         monthly.  Once you establish a suitable interval, you can
         accumulate the portfolio valuation results (current portfolio
         valuation and change in valuation) in a file that can be
         processed by the DLTAPRNT and the DLTAPLOT programs.

              Though the use of the DLTAPRNT and DLTAPLOT programs, you
         can evaluate the current results of your investment program
         against the near-term and long-term past results.  With the
         outputs of these programs, the performance of your portfolio
         can be put into perspective and judged fairly.
                                                                     3





                             PORTWORTH USER'S GUIDE             Page 4



         1.4  HARDWARE REQUIREMENTS

              To successfully operate the PORTWORTH programs, you need
         the following hardware configuration:

              Display - Any

              Disk drives required - Minimum of one drive
                                     Up to two drives supported

              Minimum memory size - 64 K

              Printer type required - Dot matrix printer with graphics
                                      (Graphics required to support
                                      DLTAPLOT screen prints only)

              Printer types supported - IBM dot matrix printer with
                                        Graftrax
                                        Epson MX-80 printer with
                                        Graftrax
                                        Epson MX-100 printer



         1.5  SOFTWARE REQUIREMENTS

              Operating system required - PC DOS Version 1.1 or 2.0

              Other programs required - None


























                                                                     4






                             PORTWORTH USER'S GUIDE             Page 5




         2    PROGRAM OPERATION - GENERAL

         2.1  USE OF DRIVES

              The programs in this package are designed to be loaded
         from drive A of your system unit.  Although they can be loaded
         from drive B, each program at execution will search the drive
         A diskette for DRIVE.DTA file to extract processing
         information.  If the program is not found, the system will
         terminate program operation.

              If you have a two-drive system, we recommend that drive A
         be reserved for the program diskette and drive B be used for
         the data diskette.  If you have a single drive system, then
         both the program diskette and the data diskette will be
         located, in turn, in drive A.


         2.2  ERROR HANDLING

         The PORTWORTH programs generate no program peculiar error
         messages or notices.  All error messages and notices are those
         generated by either the DOS Operating System or the BASIC
         Interpreter.  For specific information on DOS originated
         messages, refer to Appendix A of the DOS manual.  For specific
         information on BASIC originated messages, refer to Appendix A
         of the BASIC manual.

         3    PACKAGE USE - FIRST TIME

              Supplied with this publication is a diskette containing
         the PORTWORTH programs and 2 sample input files.  We urgently
         recommend that you copy the program information onto an empty
         formatted diskette and the sample input files onto another
         separate formatted diskette.  You can then use the newly
         created program diskettes and retain the one originally
         supplied for backup purposes.

















                                                                     5






                             PORTWORTH USER'S GUIDE             Page 6




         3.1  PREPARING DISKETTES FOR USE

              The new diskette to be used to hold the program files
         must be first formatted.  Obtain a diskette that has no
         information you want to retain.  Then follow the instructions
         given in Chapter 3 of your Disk Operating System (DOS) manual
         to format that disk and to copy DOS system files onto it. (You
         would use the command FORMAT d:/S to both format and copy
         system files.)

              You also need to format the diskette for the sample data
         files.  Again, you can follow the instructions given in
         Chapter 3 of your DOS manual.  However, for the data diskette,
         you would not need to copy the DOS system files onto that
         diskette.  (You may use the command FORMAT d: to perform that
         format.)

              After formatting, you should copy the program file onto
         the program diskette and the data files onto the data
         diskette.  Again, you can refer to Chapter 3 of the DOS manual
         for specific instructions.  The following files must be
         copied:

                   FOR PROGRAM DISKETTE

                          DRIVE.DTA
                          SETDRIVE.BAS
                          PORTCOST.BAS
                          PORTMRKT.BAS
                          DLTAPRNT.BAS
                          DLTAPLOT.BAS

                   FOR DATA DISKETTE

                          HOLDLIST.DTA
                          DLTAFILE.DTA

              Notice that although DRIVE.DTA is a data file, it must be
         copied onto the program diskette.  This is true because this
         file must be present when each of the four main programs begin
         to run.  This file specifies to the programs the drive on
         which to search for the data files.  It also identifies the
         type of printer specified for use.  More on that later.

              Note that since the sample data diskette contains one
         file named HOLDLIST.DTA and another named DLTAFILE.DTA, that
         diskette cannot any other input files for the PORTWORTH
         programs.  If a file with some other name were placed onto the
         diskette, it would not be processed.  (The programs specify
         files by names only.)  If a file with either the name
         HOLDLIST.DTA or DLTAFILE.DTA were copied onto the diskette,
         that file would overlay the existing file with the same name,
         thus destroying some of your data.

                                                                     6






                             PORTWORTH USER'S GUIDE             Page 7



              The preceding verbiage means that if you have more than
         one portfolio to process, you must maintain separate data
         diskettes for each and every portfolio.

              Of course, you will need to label each diskette as you
         format it and copy items onto it.  After the data diskette
         contains the desired data files, you may protect the files
         from being overwritten by covering the write protect notch.
         Leave the write protect notch on the program diskette open at
         this time, so that we can configure DRIVE.DTA as we wish.

         3.2  ONE-TIME RUNNING AND PACKAGE SETUP

              To set the PORTWORTH programs to suite your system, turn
         on your system and make sure that DOS is ready and A> is
         displayed.  Then perform the following steps:

              1. Type BASICA and <enter>.  Allow the system to enter
         advanced BASIC mode.

              2. Insure that the write protect notch on the program
         diskette is open, then insert the diskette into drive A.

              3. Type LOAD"SETDRIVE <enter>

              4. The system should respond with Ok after the program
         has been loaded.  Then type RUN <enter>.  The SETDRIVE program
         will begin running and the monitor will display

                   IDENTIFY DRIVE FOR DATA INPUT
                   SELECT A/B

              5. In response type the letter corresponding to the drive
         you will be using.  The system will accept only the letters A
         or a (for drive A) and B or b (for drive B).  We recommend
         that you specify drive B if you have a two-drive system.

              6. The system will respond

                   DRIVE SELECTED IS x (where x = drive to be used)
                   SELECTION OK (Y/N)

              7. Verify the selection by typing Y <enter>.  If the
         original selection was not correct, type N <enter> to allow
         entry of a corrected choice.










                                                                     7






                             PORTWORTH USER'S GUIDE             Page 8



              8. After you have entered and confirmed the drive
         definition entry, you will be asked to specify the printer to
         be used.  Respond by entering I <enter> if your printer is an
         IBM dot matrix printer or E <enter> if your printer is an
         Epson MX-80 or MX-100 dot matrix printer.  For any other
         printer, you may try each selection and use the one that best
         suits your system.  This selection primarily affects the steps
         used by the programs to set up the default conditions for the
         printer.  (The special characters used by the DLTAPRNT program
         may be altered through use of a printer other than the three
         specified above.)

              9. After you have selected a printer configuration and
         confirmed your selection, you are done.  The PORTWORTH package
         is configured to match your system.  The entries you made in
         this program will be recorded in the DRIVE.DTA file, which
         will be checked each time a program begins.  You can now cover
         the write protect notch on the program diskette to protect its
         contents.  Whenever you need to change the drive selection or
         use, or the printer configuration, just remove the notch cover
         from the program diskette and repeat this procedure from step
         1.

































                                                                     8






                             PORTWORTH USER'S GUIDE             Page 9



         4    ESTABLISHING PROGRAM INPUT FILES

              The PORTWORTH programs are ready to run without any setup
         or modification once the SETDRIVE program has been run.
         However, the HOLDLIST.DTA file must be generated and ready for
         use with the PORTCOST and the PORTMRKT programs.  Also, the
         DLTAPRNT.DTA file must be prepared in order to run the
         DLTAPRNT and DLTAPLOT PROGRAMS.  The two files may reside on
         the same data diskette. 

              To set up a data diskette for these files, format a
         diskette as specified in Chapter 3 of the DOS manual.  You
         will not need to copy the DOS system files onto the diskette,
         so the command FORMAT d: is sufficient.


         4.1  CREATING THE HOLDLIST.DTA FILE

              After the diskette has been formatted, a file of
         portfolio data must be created named HOLDLIST.DTA for input to
         the PORTCOST and PORTMRKT programs.  The file name of
         HOLDLIST.DTA must be used or the programs won't be able to
         read the file.  The PC DOS line editor EDLIN can be used to
         create the file.  Refer to the appropriate Chapter of the PC
         DOS manual (Chapter 4 if you are using Version 1.1 of DOS or
         Chapter 7 if you are using Version 2.0 of DOS).

         As an alternative, you may use any suitable word processing
         system that produces files containing lines of data with
         comma-delimited fields within the lines.

              Once the HOLDLIST.DTA file has been created, you need
         modify it only when your portfolio changes.  When a change is
         required, you can again use the PC DOS line editor EDLIN to
         change lines, to delete lines, and to add lines.

              Each time the HOLDLIST.DTA file is modified, you will
         want to run the PORTCOST program to produce a current
         portfolio report.
















                                                                     9






                             PORTWORTH USER'S GUIDE            Page 10



         4.2  SPECIFICATIONS FOR HOLDLIST.DTA FILE

              The specifications for the HOLDLIST.DTA file are provided
         below.  (Use the sample file provided on the diskette for
         reference.)


              THE FIRST LINE

                   The first line of this file must contain the
                   following items, each separated from the next by a
                   comma:

                   Title Field - Up to 20 characters in length
                                 Any printable characters except commas
                                 (Blanks may be included)
                                 This field is used in the PORTCOST
                                 output report as part of the
                                 report title

                   Owner Field - Up to 20 characters in length
                                 Any printable characters except commas
                                 (Blanks may be included)
                                 This field is used in the PORTCOST
                                 and PORTMRKT output reports as part
                                 of the owner line.

                   Portfolio Count - Up to 2 characters in length
                                 Characters must be numeric (0-9)
                                 This field id used to identify the
                                 total number of stocks in the
                                 portfolio.

                                 If this field contains a numeric
                                 count greater than 25, the count
                                 is ignored by the programs and
                                 the count 25 is used in its place.

                   Report Date - Up to 20 characters in length
                                 Any printable characters except commas
                                 (Blanks may be included)
                                 This field is used in the PORTCOST
                                 program to identify the initial
                                 date for the portfolio configuration.
                                 (This is the second part of the
                                 report title.)

                   File Revision Date - Up to 10 characters in length
                                 Any printable characters except commas
                                 This is a documentary item only -
                                 it identifies the most recent date
                                 that the HOLDLIST.DTA file was
                                 updated.


                                                                    10






                             PORTWORTH USER'S GUIDE            Page 11



              ALL OTHER LINES

                   All the remaining lines of the HOLDLIST.DTA file are
                   data lines that are identical in format.  Each will
                   contain the following items separated by commas:

                   Stock Name Field - Up to 20 characters in length
                                 Any printable characters except commas
                                 (Blanks may be included)
                                 This field supplies the stock name to
                                 be used in the PORTCOST and PORTMRKT
                                 output report.

                   Stock Quantity Field - Up to 5 characters in length
                                 Must be numeric (0-9) only
                                 This field supplies the stock count
                                 for the stock identified by the
                                 stock name field.

                   Total Cost Field - Up to 9 characters in length
                                 Must be numeric with an imbedded
                                 decimal point for decimals
                                 (0-9 and . allowed)

                                 This field supplies the total cost
                                 for the stock identified in the
                                 stock name field.

                   Stock Target Field - Up to 6 characters in length
                                 Must be numeric with an imbedded
                                 decimal point for decimals
                                 (0-9 and . allowed)

                                 This field supplies user selected
                                 stock target prices that are
                                 associated with the stock identified
                                 in the stock name field.

                                 This field is used by the PORTMRKT
                                 program only.















                                                                    11






                             PORTWORTH USER'S GUIDE            Page 12



         4.3  CREATING THE DLTAFILE.DTA FILE

              After you have used the PORTMRKT program a number of
         times, you will have accumulated a number of reports that
         specify the current total value for your portfolio and the
         change in total value since the last valuation.  

              These two items form the basis for establishing the
         DLTAFILE.DTA file, which can be input into the DLTAPRNT and
         DLTAPLOT programs.  

              Just as for the HOLDLIST.DTA file, the generation of the
         DLTAFILE.DTA file can be accomplished using the PC DOS line
         editor EDLIN.  Refer to the appropriate chapter of the PC DOS
         manual (Chapter 4 if you are using Version 1.1 of DOS or
         Chapter 7 if you are using Version 2.0 of DOS).  Again, as an
         alternative, you may use any suitable word processing system
         that produces files containing lines of data with
         comma-delimited fields

              As time progresses, you will be running the PORTMRKT
         program again and again.  Each running will produce an
         additional set of data to be added to the DLTAFILE.DTA file.
         In time you will have a meaningful historical file that can be
         processed by the DLTAPRNT and DLTAPLOT programs to aid you in
         making sound portfolio judgments.





























                                                                    12






                             PORTWORTH USER'S GUIDE            Page 13



         4.4  SPECIFICATIONS FOR DLTAFILE.DTA FILE

              The specifications for the DLTAFILE.DTA file are provided
         below.  (Use the sample DLTAFILE.DTA file for reference.)

              THE FIRST LINE

                   The first line of this file must contain the
                   following items, each separated from the next by a
                   comma:

                   Title Field - Up to 20 characters in length
                                 Any printable characters except commas
                                 (Blanks may be included)
                                 This field is used in the DLTAPRNT
                                 output report as part of the
                                 report title

                   Owner Field - Up to 20 characters in length
                                 Any printable characters except commas
                                 (Blanks may be included)
                                 This field is used in the DLTAPRNT
                                 and DLTAPLOT output reports as part
                                 of the owner line.

                   File Revision Date - Up to 10 characters in length
                                 Any printable characters except commas
                                 This is a documentary item only -
                                 it identifies the most recent date
                                 that the DLTAFILE.DTA file was
                                 updated.

              ALL OTHER LINES

                   All the remaining lines of the DLTAFILE.DTA file are
                   data lines that are identical in format.  Each will
                   contain the following items separated by commas:

                   Date Field -  Up to 6 characters in length
                                 Any printable characters except commas
                                 (Blanks may be included)

                                 This field establishes the date
                                 associated with the DLTAFILE line
                                 input

                                 This field is used by the DLTAPRNT
                                 program only







                                                                    13






                             PORTWORTH USER'S GUIDE            Page 14



                   Current Total Value Field -
                                 Up to 12 characters in length
                                 Must be numeric with an imbedded
                                 decimal point for decimals
                                 (0-9 and . allowed)

                                 This field contains the current total
                                 value for the entire portfolio as
                                 determined with the PORTMRKT program.

                                 It is used by the DLTAPRNT program to
                                 establish percentages.

                   Change in Portfolio Value Since Last Valuation -
                                 Up to 10 characters in length
                                 Must be numeric with an imbedded
                                 decimal point for decimals.
                                 Leading minus if value is negative
                                 (0-9 and . and - allowed)

                                 This field contains the change in
                                 portfolio value as determined with
                                 the PORTMRKT program.

                                 It is used by both the DLTAPRNT and
                                 DLTAPLOT programs.





























                                                                    14






                             PORTWORTH USER'S GUIDE            Page 15



         5    PORTCOST PROGRAM OPERATION

         5.1  STARTING AND RUNNING PORTCOST

              After the HOLDLIST.DTA input file is created, you may
         load and run the PORTCOST program at any time.

              To run the program, turn on your system and make sure
         that DOS is ready and A> is displayed.  Then perform the
         following steps:

              1. Type BASICA <enter>.  Allow the system to enter
         advanced BASIC mode.

              2. Insure that the write protect notch of the program
         diskette is covered and insert the diskette into drive A.

              3. Type LOAD"PORTCOST <enter>

              4. The system will respond Ok after the program has been
         loaded.  Then type RUN <enter>.

              5. When the program starts, it will display the following
         on the screen:

                        PROGRAM PORTCOST.BAS EXECUTING
                        INSERT DATA DISKETTE IN DRIVE B (or DRIVE A)
                        SET PRINTER TO TOP OF PAGE
                        VERIFY THAT PRINTER IS ON
                        STRIKE ANY KEY WHEN READY

              Then it will pause to allow you to complete any steps
         required to establish the starting conditions.

              The drive designation identified in the above output is
         established when the program reads a file on drive A.
         (Remember the DRIVE.DTA file you set up with the SETDRIVE
         program?)  To respond, insert the diskette containing the
         HOLDLIST.DTA file in the drive specified.  (You may use the
         sample HOLDLIST.DTA file as an input file.)  If drive A is
         specified, you will have to remove the program diskette from
         the drive.  Otherwise you can leave the program diskette in
         place.

              Set up the printer as specified.  After all the specified
         conditions have been met, simply press any key on the keyboard
         to cause the program to continue.

              5. The program will do the rest.






                                                                    15






                             PORTWORTH USER'S GUIDE            Page 16



         5.2  STOPPING PORTCOST

              DURING EXECUTION - You can interrupt program processing
         at any time by pressing the BREAK key while simultaneously
         holding the CTRL key depressed.  However, you should not have
         to do this.

              WHEN FINISHED - The PORTCOST program will stop on its own
         when processing is completed.  It signifies this with the
         screen message "PROGRAM PROCESSING COMPLETED - PROGRAM ENDS".

              When you are through with the PORTCOST program, you can
         simply type SYSTEM <enter> to return the system to DOS.  You
         may also load in a different basic program over the PORTCOST
         program that resides in memory.  If you want to clear the
         PORTCOST program from memory, simply type NEW <enter>.







































                                                                    16






                             PORTWORTH USER'S GUIDE            Page 17



         6    PORTMRKT PROGRAM OPERATION

         6.1  STARTING AND RUNNING PORTMRKT


              After the HOLDLIST.DTA input file is created, you may
         load and run the PORTMRKT program at any time.

              To run the program, turn on your system and make sure
        that DOS is ready and A> is displayed.  Then perform the
        following steps:

              1. Type BASICA <enter>.  Allow the system to enter
         advanced BASIC mode.

              2. Insure that the write protect notch of the program
         diskette is covered and insert the diskette into drive A.

              3. Type LOAD"PORTMRKT <enter>

              4. The system will respond Ok after the program has been
         loaded.  Then type RUN <enter>.

              5. When the program starts, it will display the following
         on the screen:

                        PROGRAM PORTMRKT.BAS EXECUTING
                        INSERT DATA DISKETTE IN DRIVE B (or DRIVE A)
                        SET PRINTER TO TOP OF PAGE
                        VERIFY THAT PRINTER IS ON
                        STRIKE ANY KEY WHEN READY

              Then it will pause to allow you to complete any steps
         required to establish the starting conditions.

              The drive designation identified in the above output is
        established when the program reads a file on drive A. (Remember
        the DRIVE.DTA file you set up with the SETDRIVE program?)  To
        respond, insert the diskette containing the HOLDLIST.DTA file
        in the drive specified.  (You may use the sample HOLDLIST.DTA
        file as an input file.)  If drive A is specified, you will have
        to remove the program diskette from the drive.  Otherwise you
        can leave the program diskette in place.

              Set up the printer as specified.  After all the specified
         conditions have been met, simply press any key on the keyboard
         to cause the program to continue.








                                                                    17






                             PORTWORTH USER'S GUIDE            Page 18



              6. The program then displays the following on the
         screen:

                        INPUT DATE FOR REPORT (DD MONTH YYYY)

              The entry in response will then be used as part of the
        first heading of the report.  The entry may actually consist of
        whatever you wish (including blanks).  To get blanks, simply
        respond <enter>.  However, if you attempt to imbed a comma in
        the response, the system will reject the response with the
        BASIC message "REDO FROM START".  (See INPUT statement in
        Chapter 4 of the BASIC manual.)

              7. After the program digests the date you furnished in
         step 6, it displays the following:

                        INPUT CURRENT PRICE PER SHARE (A)
                              AND
                              PER SHARE PRICE CHANGE (B)
                              FOR FOLLOWING:
                        ACF
                        A = 

              Notice that the stock name (ACF) is established from the
        HOLDLIST.DTA file.  In response, enter the price per share
        opposite A and then type <enter>.  If the price includes a
        fraction, such as 12 7/8, enter the decimal equivalent, as
        12.875.  For greater accuracy, do not round the prices off.
        Enter up to 3 decimal digits if required.  Do not use commas in
        the entry!  (See step 6.)

              Until you have typed <enter>, you can correct any of the
         characters you have type in.  However, once you type <enter>,
         do not attempt a correction until corrections are solicited by
         the program (steps 9 and 10).

              8. When the program accepts your price input for a stock,
         it will respond:

                        B =

              Simply enter the change in price (since the last
         valuation) for the stock specified.  To assure ready
         reconciliation of the output results, do not adjust the change
         in value for dividends received.  (Price changes that are "ex
         dividend" are normally reduced by an amount corresponding to
         the cash dividend.  This adjustment should be eliminated so
         the price change is not affected by the dividend.)  Again,
         enter up to 3 decimal digits for fractions, such as .625 for
         5/8.  As a short cut, if the change in value is 0, you may
         simply type <enter> in place of 0 and <enter>.  For negative
         values, enter a minus sign (or hyphen) ahead of the number, as
         -1.125.

              Repeat steps 7 and 8 for each of the stocks identified by
         the program.  
                                                                    18





                             PORTWORTH USER'S GUIDE            Page 19



              9. When all required information on the stocks has been
         input, the screen will display:

                        DO YOU WISH TO CORRECT AN INPUT (Y/N)?

              If you have a correction to any of the stock prices or
         price changes, respond Y and <enter>.  Otherwise, respond N
         and <enter>.  

              If you respond Y, the program responds with the following
         display:

                        INPUT NUMBER OF STOCK TO BE CORRECTED
                            OR
                           0 TO END CORRECTIONS

              Count off the number for the stock with incorrect data
         (first stock is 1, second stock is 2, etc.).  Enter that
         number.  You can then interact as follows to correct the
         data:

                   (You type) 6 <enter>
                   (Display) Disney
                   (Display) ORIGINAL PRICE ENTERED WAS 55.5
                   (Display) NEW PRICE TO BE ENTERED
                   (You type)                        55.5 <enter>
                   (Display) ORIGINAL PRICE CHANGE ENTERED WAS .375
                   (Display) NEW PRICE CHANGE TO BE ENTERED IS ?
                   (You type)                       .125 <enter>

              At this point the sequence repeats from 
                        INPUT NUMBER OF STOCK TO BE CORRECTED
                              OR
                              0 TO END CORRECTIONS

              If you have no correction or have completed all
         corrections, type 0 (the digit zero) and <enter>.

              The program will respond:

                        VERIFY THAT PRINTER IS ON

              The program will then print the report.

              If you responded N to the original correction query, the
         program will simply print the report.









                                                                    19






                             PORTWORTH USER'S GUIDE            Page 20



              10. After the report is printed, the program again pauses
         and allows you to check the report and to input corrections,
         if required.  It displays:

                        CHECK PRINTED REPORT
                        DO YOU WISH TO CORRECT AND REPRINT (Y/N)?

              One quick method of testing the accuracy of your inputs
         for the stocks is to add the total portfolio change from the
         current report to the current total value from the previous
         report.  The algebraic sum should equal the current total
         value for the current report.  (If you have odd lots in your
         portfolio, the decimal amounts may differ due to rounding.)

              If you respond Y to the above query, then you will be
         allowed to correct per steps 9 and 10.  

              11. If you respond N, then you are done!  The program
         responds:

                        PROGRAM PROCESSING COMPLETED - PROGRAM ENDS

                   And it does.



         6.2  STOPPING PORTMRKT

              DURING EXECUTION - You can interrupt program processing
         at any time by pressing the BREAK key while simultaneously
         holding the CTRL key depressed.  However, you should not have
         to do this.

              WHEN FINISHED - The PORTMRKT program will stop on its own
         when processing is completed.  It signifies this with the
         screen message "PROGRAM PROCESSING COMPLETED - PROGRAM ENDS".

              When you are through with the PORTMRKT program, you can
         simply type SYSTEM <enter> to return the system to DOS.  You
         may also load in a different basic program over the PORTMRKT
         program that resides in memory.  If you want to clear the
         PORTMRKT program from memory, simply type NEW <enter>.













                                                                    20






                             PORTWORTH USER'S GUIDE            Page 21



         7    DLTAPRNT PROGRAM OPERATION

         7.1  STARTING AND RUNNING DLTAPRNT

              After the DLTAFILE.DTA input file is created, you may
         load and run the DLTAPRNT program at any time.

              To run the program, turn on your system and make sure
        that DOS is ready and A> is displayed.  Then perform the
        following steps: 

              1. Type BASICA <enter>.  Allow the system to enter
         advanced BASIC mode.

              2. Insure that the write protect notch of the program
         diskette is covered and insert the diskette into drive A.

              3. Type LOAD"DLTAPRNT <enter>

              4. The system will respond Ok after the program has been
         loaded.  Then type RUN <enter>.

              5. When the program starts, it will display the following
         on the screen:

                        PROGRAM DLTAPRNT.BAS EXECUTING
                        INSERT DATA DISKETTE IN DRIVE B (or DRIVE A)
                        SET PRINTER TO TOP OF PAGE
                        VERIFY THAT PRINTER IS ON
                        STRIKE ANY KEY WHEN READY

              Then it will pause to allow you to complete any steps
         required to establish the starting conditions.

              The drive designation identified in the above output is
        established when the program reads the DRIVE.DTA file on drive
        A. To respond, insert the diskette containing the DLTAFILE.DTA
        file in the drive specified.  (You may use the sample
        DLTAFILE.DTA file as an input file.)  If drive A is specified,
        you will have to remove the program diskette from the drive.
        Otherwise you can leave the program diskette in place.

              Set up the printer as specified.  After all the specified
         conditions have been met, simply press any key on the keyboard
         to cause the program to continue.










                                                                    21






                             PORTWORTH USER'S GUIDE            Page 22



              6. After resuming, the program displays the following on
         the screen:

                   SELECT GRAPH SCALE FROM FOLLOWING:
                        1 - $0 TO $1000 RANGE
                        2 - $0 TO $2000 RANGE
                        3 - $0 TO $4000 RANGE
                        4 - $0 TO $5000 RANGE
                   GRAPH SCALE SELECTED IS 

              The graph scale is selected according to the maximum
         Portfolio Current Total Value change from the previous
         Portfolio Current Total Value. HOW TO STOP THE DLTAPRNT
         PROGRAM  For example, for the DLTAFILE.DTA file shown in
         figures 4-3A, the maximum value of the portfolio change field
         (the last of the three fields for each line following line 1)
         is 300.00 for the 071-83 line.  We can therefore select the
         lowest range offered, the $0 to $1000 range.  (See figure
         4-9A.)  However, for the data in figure 4-3B, we see that the
         maximum value of the portfolio change field is 2351.88 for the
         052483 line.  This would normally dictate that we select the
         $0 to $4000 range.  However for this case we can use the $0 to
         $2000 range.  (See figure 4-9B.)   If this value had been
         negative, the fellow producing this chart would have been
         forced to use the $0 to $4000 range or else overlay the date
         field.  (He would also have been biting his nails a bit.)

              Enter the numeric value (1, 2, 3, or 4) corresponding to
         the range desired and then type <enter>.

              If you select a range that is too narrow for the input,
         you will get the error message:

                   Subscript out of range in 3051

              and the program will stop.  To correct, run the program
         again and use a range that can accommodate the input.

              One other word of caution.  This program is designed to
         process data for portfolios that have changes in value up to
         10 percent for each measurement cycle.  If your portfolio
         should change by more than 10 percent, you can use this
         program only if you shorten the measurement cycle to bring the
         change to 10 percent or less.  If the program is run for some
         percentage change of greater than 10 percent, the following
         error message will be generated and the program will stop:

              Illegal function call in 3044







                                                                    22






                             PORTWORTH USER'S GUIDE            Page 23



              7. The program will display the following on the screen
         after the appropriate graph scale is chosen:

              INPUT LIMIT ON NUMBER OF RECORDS TO BE PROCESSED

              If you want to have all input lines of the DLTAFILE.DTA
         file processed, simply enter some numeric value greater than
         the total number of lines on the file.

              However, if you want the program to stop after processing
         a specified number of lines, type in a numeric value
         corresponding to the number of lines to be processed.

              Respond with a numeric value and <enter>.

              8. The program then displays the following message on the
         screen:

              SOME INITIAL RECORDS TO BE SKIPPED (Y/N)?

              In some cases, you may not be interested in processing
         the first lines of the file.  (You may have a chart on these
         already.)  To skip the lines, respond with Y and <enter>.

              The program then displays the following on the screen:

              INPUT COUNT OF INITIAL RECORDS TO BE SKIPPED

              Respond by entering the number of records to be skipped
         and follow this with <enter>.

              Use care, however, not to enter a limit in this step that
         is higher than the count entered in step 7.  Otherwise the
         program will end without producing a chart at all!

              If you do not wish to skip some records, simply type N
         and <enter>.


              9. After the above selections have been made, the program
         will produce the charts as directed without any further action
         by you.

              After all records have been processed and the charts are
         completed, the program displays the following advisory message
         and ends:

              ALL DATA PROCESSED - PROGRAM ENDS







                                                                    23






                             PORTWORTH USER'S GUIDE            Page 24



         7.2  STOPPING DLTAPRNT

              DURING EXECUTION - You can interrupt program processing
         at any time by pressing the BREAK key while simultaneously
         holding the CTRL key depressed.  However, you should not have
         to do this.

              WHEN FINISHED - The DLTAPRNT program will stop on its own
         when processing is completed.  It signifies this with the
         screen message "ALL DATA PROCESSED - PROGRAM ENDS".

              When you are through with the DLTAPRNT program, you can
         simply type SYSTEM <enter> to return the system to DOS.  You
         may also load in a different basic program over the DLTAPRNT
         program that resides in memory.  If you want to clear the
         DLTAPRNT program from memory, simply type NEW <enter>.







































                                                                    24






                             PORTWORTH USER'S GUIDE            Page 25



         8    DLTAPLOT PROGRAM OPERATION

         8.1  STARTING AND STOPPING DLTAPRNT

              After the DLTAFILE.DTA input file is created, you may
         load and run the DLTAPLOT program at any time.

              To run the program, turn on your system and make sure
        that DOS is ready and A> is displayed.  Then perform the
        following steps:

              1. Type BASICA <enter>.  Allow the system to enter
         advanced BASIC mode.

              2. Insure that the write protect notch of the program
         diskette is covered and insert the diskette into drive A.

              3. Type LOAD"DLTAPLOT <enter>

              4. The system will respond Ok after the program has been
         loaded.  Then type RUN <enter>.

              5. When the program starts, it will display the following
         on the screen:

                        PROGRAM DLTAPLOT.BAS EXECUTING
                        INSERT DATA DISKETTE IN DRIVE B (or DRIVE A)
                        SET PRINTER TO TOP OF PAGE
                        VERIFY THAT PRINTER IS ON
                        STRIKE ANY KEY WHEN READY

              Then it will pause to allow you to complete any steps
         required to establish the starting conditions.

              The drive designation identified in the above output is
        established when the program reads a file on drive A. (Remember
        the DRIVE.DTA file you set up with the SETDRIVE program?)  To
        respond, insert the diskette containing the DLTAFILE.DTA file
        in the drive specified.  (You may use the sample DLTAFILE.DTA
        file as an input file.) If drive A is specified, you will have
        to remove the program diskette from the drive.  Otherwise you
        can leave the program diskette in place.

              Set up the printer as specified.  After all the specified
         conditions have been met, simply press any key on the keyboard
         to cause the program to continue.









                                                                    25






                             PORTWORTH USER'S GUIDE            Page 26



              5. The program then displays the following:

                   SELECT VERTICAL SCALE FROM FOLLOWING:
                        1 - $0 TO $800 RANGE
                        2 - $0 TO $1600 RANGE
                        3 - $0 TO $4000 RANGE
                        4 - $0 TO $8000 RANGE
                        5 - $0 TO $16000 RANGE
                        6 - $0 TO $32000 RANGE
                        7 - $0 TO $64000 RANGE
                        8 - $0 TO 128000 RANGE
                   VERTICAL SCALE SELECTED IS 

              Select the appropriate scale and enter the number
        corresponding to the range of scale selected.  If the scale
        selected is too large, the chart line will have limited travel
        along the vertical axis and its utility will be curtailed.  If
        too small a range is selected, the chart line will hit the
        vertical boundaries of the screen, causing the graph to be
        truncated at top and bottom.  

              In any case, the program will not error terminate if an
        inappropriate scale is selected.  You may, however, wish to
        redo the graph using a different vertical scale.  (For the
        sample DLTAFILE.DTA file, we suggest you use scale 2.)

              7. The program then displays the following:

                   SET HORIZONTAL SCALE -
                       SELECT FROM 3 TO 10
                       SCALE SELECTED IS 

              Select the appropriate scale and enter the scale number
         (any number from 3 through 10).  The number corresponds to the
         number of graphics columns between plots.  The larger the
         number selected, the wider the spread between plots.  As
         constructed by the program, the graph spans approximately 600
         columns.  Thus the maximum number of points plotted is nearly
         200 if the horizontal scale is 3 and 60 if the horizontal
         scale is 10.  (For the sample DLTAFILE.DTA file, a scale of 10
         is recommended.)  

              If the scale selected is too low, the chart line may hit
         the rightmost boundary of the screen causing the graph to be
         truncated at the right.  If too high a scale is used, the
         chart line will be unnecessarily compressed, obscuring
         details.

              In any case, the program will not error terminate if an
         inappropriate scale is selected.  You may, however, wish to
         redo the graph using a different horizontal scale.




                                                                    26






                             PORTWORTH USER'S GUIDE            Page 27



              8. The program will display the following on the screen
         after the appropriate graph scale is chosen:

              INPUT LIMIT ON NUMBER OF RECORDS TO BE PROCESSED

              If you want to have all input lines of the DLTAFILE.DTA
         file processed, simply enter some numeric value greater than
         the total number of lines on the file.

              However, if you want the program to stop after processing
         a specified number of lines, type in a numeric value
         corresponding to the number of lines to be processed.

              Respond with a numeric value and <enter>.

              9. The program then displays the following message on the
         screen:

              SOME INITIAL RECORDS TO BE SKIPPED (Y/N)?

              In some cases, you may not be interested in processing
         the first lines of the file.  (You may have a chart on these
         already.)  To skip the lines, respond with Y and <enter>.

              The program then displays the following on the screen:

              INPUT COUNT OF INITIAL RECORDS TO BE SKIPPED

              Respond by entering the number of records to be skipped
         and follow this with <enter>.

              Use care, however, not to enter a limit in this step that
         is higher than the count entered in step 7.  Otherwise the
         program will end without producing a chart at all!

              If you do not wish to skip some records, simply type N
         and <enter>.

              10. After the above selections have been made, the
         program plots the input points on the screen and creates a
         line chart of the points plotted.  The program sounds a series
         of notes to signal completion and then pauses.

              If you are running in DOS version 2.0, you can use the
         GRAPHICS screen print command to cause the line chart to be
         printed.  

              When you are finished with the display, simply press any
         key to cause the program to end.






                                                                    27






                             PORTWORTH USER'S GUIDE            Page 28



         8.2  STOPPING DLTAPLOT

              DURING EXECUTION - You can interrupt program processing
         at any time by pressing the BREAK key while simultaneously
         holding the CTRL key depressed.  However, you should not have
         to do this.

              WHEN FINISHED - The DLTAPLOT program will signal
         completion to the screen display by an audible series of
         tones.  After these tones have stopped, you may use the
         Graphics command to print the screen display (Version
         2.0 DOS only).  When you are done with the screen display,
         simply press any key to cause the program to end. 

              When you are through with the DLTAPLOT program, you can
         simply type SYSTEM <enter> to return the system to DOS.  You
         may also load in a different basic program over the DLTAPLOT
         program that resides in memory.  If you want to clear the
         DLTAPLOT program from memory, simply type NEW <enter>.




































                                                                    28






                             PORTWORTH USER'S GUIDE            Page 29



         9    NOTES ON THE PORTWORTH PACKAGE

              The programs that make up the PORTWORTH PACKAGE are all
         written using Interpreter (Advanced) BASIC. 

              They are all heavily commented and structured.  No
         attempt was made to compress the programs, remove the
         comments, or otherwise streamline the code for faster
         execution.

              The programs are stored in ASCII format and may take
         appreciably longer than normal to load because of this.  

              You may want to modify the programs, compress them,
         remove remarks, and otherwise enhance the execution
         characteristics of the programs.  The author did not feel the
         results obtained would justify the expenditures made.  

              You may also develop program modifications/improvements
         that should be considered for distribution to all other users.
         The author would be grateful to receive such for the
         preparation of subsequent releases, if any.

         10   DISCLAIMER

              We have attempted to make the programs and documentation
         as accurate as possible.  However, we provide the package "AS
         IS" without warranty of any kind.  We will not be liable for
         any damages arising out of the use of this package or for any
         damages out of the inability to use this package.  We make no
         claims as to the suitability for use of this package and
         cannot warrant it for any purpose.























                                                                    29






                             PORTWORTH USER'S GUIDE            Page 30



         11   PERMISSION TO COPY

              Users are permitted to copy the programs and
         documentation in this package for distribution to others under
         the following conditions:

              a. Neither the programs nor the documentation is to be
         altered in any manner prior to copying for distribution.  

              b. No fee or other consideration is to be charged for
         distributed copies of this package except those incidental
         amounts necessary to defray expenses.

              Interested parties may order a copy of this package by
         sending a blank, formatted diskette to the author of the
         package.  An addressed, postage-paid mailer must accompany the
         diskette (no exceptions, please).  The author will copy the
         package onto the diskette and mail the diskette back as soon
         as possible.  

              This documentation carries a notice suggesting a
         contribution to the author.  Any such contribution is purely
         voluntary.  Whether such contribution is made or not, the user
         may freely copy this package for others under the terms
         specified above. 


         12   SUPPORT BY USER

              To make the user supported concept work, support of the
         software author is necessary.  

              If you find the PORTWORTH PACKAGE to be useful to you, a
         contribution ($15.00) from you to the author would be
         appreciated.  

              In any case we thank you for trying the software and
         encourage you to copy and share the package.  


         13   AUTHOR IDENTIFICATION

              George Wall
              5833 Brookview Drive
              Alexandria, VA 22310










                                                                    30

```
{% endraw %}

## README.TXT

{% raw %}
```
THE PORTWORTH PACKAGE CONSISTS OF THE FOLLOWNG FILES:
    README.TXT      (THIS FILE)
    PORTPACK.BAT    PRINTS PORTPACK.DOC: INSERT DISK IN DRIVE A,
                                         TYPE PORTPACK
    PORTPACK.DOC    32-PAGE USER GUIDE
    PORTCHNG.DOC    DOCUMENTATION CHANGES FOR VERSION 1.1
    PORTCHG2.DOC    DOCUMENTATION CHANGES FOR VERSION 1.2
    DRIVE.DTA       SYSTEM CONFIGURATION PARAMETER FILE
    HOLDLIST.DTA    SAMPLE INPUT FILE
    DLTAFILE.DTA    SAMPLE INPUT FILE
    SETDRIVE.BAS    SYSTEM CONFIGURATION PROGRAM
    PORTCOST.BAS    PORTFOLIO COST VALUATION PROGRAM
    PORTMRKT.BAS    PORTFOLIO CURRENT VALUATION PROGRAM
    DLTAPRNT.BAS    PORTFOLIO VALUATION CHANGE BAR CHART PROGRAM
    DLTAPLOT.BAS    PORTFOLIO VALUATION CHANGE LINE GRAPH PROGRAM
```
{% endraw %}

## SETDRIVE.BAS

{% raw %}
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
{% endraw %}

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
