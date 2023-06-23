---
layout: page
title: "PC-SIG Diskette Library (Disk #447)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0447/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0447"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "THE SKY"

    Two astral programs: AIRNAV helps prepare a flight log for flight over
    a predetermined route of up to twenty points (for most light aircraft
    this provides waypoints close enough together, and enough waypoints for
    one leg without refueling).  The log gives the geographic coordinates
    of the point, the distance between points, the true course and the
    estimated time between points. It prints space on the log for entering
    actual time between points.  All flight planning is done on the basis
    of one estimated speed for the entire series of legs. The second
    program, STARFINDER, allows you to locate the various stars and
    constellations.
    
    System Requirements:  64k, two disk drives, color-graphics.
    
    How to Start:  Load DOS and type STARFIND to enter the STARFIND
    program.  To run the BASIC programs consult the directions for GETTING
    STARTED for your configuration.  Consult AIRNAV.DOC for program
    information on AIRNAV.BAS.
    
    Suggested Registration:  $35.00 for STARFINDER
    
    File Descriptions:
    
    -------- ---  Air Navigation
    REVIEW   BAS
    READ     ME   Text file
    CENTRAL  DAT  Data file for AIRNAV.BAS covering the central area of USA
    NORCOAST DAT  Data file for AIRNAV.BAS covering the north coast of USA
    WESTCST  DAT  Data file for AIRNAV.BAS covering the west coast of USA
    AIRNAV   DOC  Documentation file
    STARFIND EXE  Star and constellation finder program (executed)
    STARFIND BAS  Star and constellation finder program (in basic)
    USERMANU BAS  User's Manual
    DIRECTOR BAS  Prints out a directory for the program
    PRINTERS BAS
    EASTCST  DAT  Data file for AIRNAV.BAS covering the east coast of USA
    RUNFIRST BAS  Introduction
    -------- ---  Starfinder
    AIRNAV   BAS  Program to prepare a flight log
    USA      DAT  Data file for AIRNAV.BAS
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## AIRNAV.BAS

{% raw %}
```bas
100 REM ********** AIRNAV-B.BAS *************************
110 REM
120 REM *** For Access-Matrix ******
130 REM       Revised 4/27/85
140 REM
150 REM   For use with sequential data files
152 REM
154 REM
160 REM   By Pat Roe, P. O. box 138, Lopez, Washington 98261
165 REM   Phone 206/468-2220 (Evenings)  206/468-3366 (days)
170 REM
175 DIM P$(20)
190 CLS
200 CLOSE
220 PRINT "Do you want to:"
230 PRINT
240 PRINT "      1.  Calculate a Flight?            3. Edit waypoint list"
250 PRINT "      2.  Calculate intermediate points  4. Enter new file"
260 PRINT TAB(36); "      5. End program"
270 L = VAL(INPUT$(1))
280 ON L GOTO 290,290, 700, 560, 5620
290 CLS:GOSUB 410
300 IF L = 1 GOTO 1500 ELSE GOTO 600
400 REM ***************** LOAD FILE ******************************
410 REM
420 PRINT SPC(10): PRINT "What waypoint file"
425 INPUT "         (Enter 'SAME' to use existing file";FIL$
430 IF FIL$ = "SAME" THEN RETURN
440 CLOSE
450  OPEN "I",#1, FIL$
460 DIM W$(800)
470 NF = 1
480 INPUT #1,N$
485 GOTO 500
490 IF LEFT$(N$,3)<"AAA" THEN GOTO 540
500 W$(NF) = N$
510 IF EOF(1) THEN GOTO 540
520 NF = NF+1
530 GOTO 480
540 CLOSE #1
550 RETURN
560 CLS
570 CLOSE
580 GOSUB 410
590 GOTO 200
600 K = 1
610 GOTO 1500
700 REM ************** EDIT LIST **************************
710 REM
720 CLOSE
730 CLS
740 GOSUB 410
750 CLS
760 PRINT"        Do you want to:"
770 PRINT"        1. Read list              2. Enter new points"
780 PRINT"        3. Get Waypoint No.---    4. Get Waypoint XXXXXX "
790 PRINT"        5. Return to start        6. Return to flight calc"
800 R=VAL(INPUT$(1))
810 CLS
820 ON R GOTO 970, 830, 840,1380,200, 845
830 GOSUB 850:GOTO  750
840 GOSUB 1100: GOTO 750
845 IF RL = 1 THEN GOTO 2476
846 IF RL = 2 THEN GOTO 1680
847 GOTO 5150
850 REM *********** Waypoint Entry ***************
860 CLS
870 PRINT SPC(5);"ENTER IN THIS FORM:"
880 GOSUB 1160
890 PRINT
900 PRINT SPC(4): INPUT W$(NF)
910 PRINT "      1.  OKAY?     2. RE-ENTER"
920 IF VAL(INPUT$(1)) = 2 THEN GOTO 870
930 NF = NF+1
940 PRINT "      1.  ENTER ADDITIONAL POINTS   2.  RETURN TO START"
950 IF VAL(INPUT$(1)) = 1 THEN GOTO 870
960 RETURN
970 REM *****  Read Waypoint List ******
980 CLS
990 NL = 1
1000 IF NL<1 THEN NL = 1
1005 FOR PT% = NL TO NL+19
1010 IF PT%>NF THEN GOTO 1080
1020 PRINT PT%; TAB(8); W$(PT%)
1030 NEXT PT%
1040 PRINT:PRINT "  1. NEXT GROUP?  2. PREVIOUS GROUP    3. EXIT?"
1050 R = VAL(INPUT$(1))
1060 ON R GOTO 1070, 1075, 750
1070 CLS:NL=NL+20:GOTO 1000
1075 CLS:NL=NL-20:GOTO 1000
1080 PRINT " 1.  Read Again        2. Exit"
1090 IF VAL(INPUT$(1)) = 1 GOTO 980 ELSE GOTO 750
1100 REM ************** Get Waypoint No. ? ****************************
1110 CLS 190
1120 PRINT SPC(10); "What waypoint number do you want "
1130 PRINT SPC(10); "( FOR 1 TO 9 ENTER AS '01', '05', ETC.)"
1140 W% = VAL(INPUT$(2))
1150 GOSUB 1160:GOTO 1200
1160 PRINT TAB(7);"SAMPLE FORMAT FOR WAYPOINT ENTRY"
1170 PRINT TAB(7);"LOPEZISL S31- 048-29.2 0122-56.3 -21 WA"
1180 PRINT TAB(7);"________ ____ ________ _________ ___ __"
1190 PRINT: RETURN
1200 PRINT W%;TAB(7);W$(W%)
1210 PRINT "  1.  EDIT  2. NEXT NUMBER  3. NEW NUMBER   4. DONE"
1220 R = VAL(INPUT$(1))
1230 ON R GOTO 1270, 1240, 1110, 750
1240 W% = W% + 1
1250 CLS
1260 GOTO 1150
1270 CLS
1280 PRINT SPC(4); "RE-ENTER IN THIS FORMAT"
1290 GOSUB 1170
1300 PRINT W%, TAB(7);W$(W%)
1310 PRINT
1320 PRINT SPC(4):INPUT W$(W%)
1330 PRINT "    1. OKAY NOW?   2. TRY AGAIN"
1340 L = VAL(INPUT$(1))
1350 IF L = 1 THEN GOTO 1360 ELSE GOTO 1280
1360 CLS
1370 RETURN
1380 REM ***** GET WAYPOINT XXX *********
1390 CLS
1400 PRINT "     TYPE WAYPOINT XXXXXXXX (up to eight letters)"
1410 P$(T) = INPUT$(8)
1420 PRINT P$(T)
1430 GOSUB 5020
1440 W% = P
1450 W$(W%) = W$(P)
1460 GOSUB 1160
1470 GOSUB 1200
1480 GOTO 750
1500 REM ************ FLIGHT CALC. ***************************
1510 REM
1520 DT = 0: M = 0
1530 IF FIL$ = "SAME" THEN N = 0: LL = 0: GOTO 1570
1540 LPRINT CHR$(27);"C";CHR$(66);
1545 GOTO 1560
1550 LPRINT CHR$(27);"N";CHR$(9)
1560 DIM DM(100)
1570 CLS
1655 IF K = 1 THEN GOTO 1750
1660 REM ***** WAYPOINT INPUT **************
1661 N = 1
1665 PRINT TAB(10); "Enter starting point!"
1670 PRINT SPC(10): INPUT P$(N)
1675 IF LEN(P$(N))>8 THEN P$(N) = LEFT$(P$(N),8)
1680 CLS
1685 FOR D = 1 TO N
1690 PRINT TAB(10);D;TAB(15);P$(D)
1695 NEXT D
1700 N = N + 1
1705 PRINT
1710 PRINT TAB(10); "Enter next waypoint"
1715 PRINT TAB(5);"( Enter 'LIST' to look at waypoint list )"
1716 PRINT TAB(5);"( Enter 'DONE' if finished with entries)"
1717 PRINT TAB(5);"( Enter 'START' to return to start)"
1720 PRINT SPC(10): INPUT P$(N)
1725 IF LEN(P$(N))>8 THEN P$(N) = LEFT$(P$(N),8)
1730 IF P$(N) = "DONE" THEN N = N-1:GOTO 1840
1735 IF P$(N) = "LIST" THEN N = N-1: RL = 2: GOTO 750
1736 IF P$(N) = "START" THEN GOSUB 190:GOTO 1660
1740 GOTO 1680
1750 REM ****** GREAT CIRCLE INPUT ***********
1755 PRINT TAB(10); "Enter starting point!"
1760 PRINT SPC(10): INPUT P$(1)
1765 IF LEN(P$(1))>8 THEN P$(1) = LEFT$(P$(1),8)
1770 PRINT
1775 PRINT TAB(10); "Enter Destination"
1780 PRINT SPC(10): INPUT P$(2)
1785 IF LEN(P$(2))>8 THEN P$(2) = LEFT$(P$(2),8)
1790 PRINT
1795 PRINT SPC(10): INPUT "Leg Distance";X
1800 LD = X/(57.2958*60)
1805 L = 1
1810 GOTO 1860
1840 PRINT:INPUT "          Enter estimated ground speed:   ";GS
1850 FOR L=1 TO N-1
1860 T=L
1870 GOSUB 5020
1880 W1$ = W$(P)
1890 L1$ = MID$(W1$,15,8)
1900 T1$ = MID$(W1$,24,9)
1910 V1$ = MID$(W1$,34,3)
1920 T = L+1
1930 GOSUB 5020
1940 W2$ = W$(P)
1950 L2$ = MID$(W2$,15,8)
1960 T2$ = MID$(W2$,24,9)
1970 V2$ = MID$(W2$,34,3)
1980 Z$ = L1$
1990 GOSUB 5170
2000 L1 = W
2010 Z$ = L2$
2020 GOSUB 5170
2030 L2 = W
2040 Z$ = T1$
2050 GOSUB 5200
2060 T1 = W
2070 Z$ = T2$
2080 GOSUB 5200
2090 T2 = W
2100 X = (SIN(L1)*SIN(L2)) +(COS(L1)*COS(L2)*COS(T2-T1))
2110 GOSUB 5390
2120 D=Y
2130 DM(L)=D*3437.75
2140 X = ((SIN(L2))-((SIN(L1))*COS(D)))/(SIN(D)*COS(L1))
2150 GOSUB 5390
2160 C=Y
2170 T=C
2180 GOSUB 5460
2190 C=T
2200 CT = CINT(C*57.2958)
2210 IF N<2 THEN DT = 0
2220 DT=DM(L) + DT
2230 IF K=1 THEN GOTO 3000
2250 A$ = STR$(FIX(DT/GS))
2260 B$ = STR$(CINT(60*((DT/GS)-FIX(DT/GS))))
2262 B$ = RIGHT$(B$,2)
2265 IF VAL(B$)<10 THEN B$ = "0" + RIGHT$(B$,1)
2270 TM=CINT(60*DM(L)/GS)
2275 REM ***************** PRINT OUTPUT ***************************
2280 IF L=1 THEN GOSUB 5550
2290 IF L>1 THEN GOTO 2360
2300 M = M+1
2310 LPRINT "     ";P$(M)
2320 M = M+1
2330 LPRINT CHR$(15);"        ";L1$
2340 LPRINT "        ";T1$;TAB(21);V1$
2350 LPRINT CHR$(18);"     ";Q$
2360 LPRINT "     ";P$(M)
2370 M = M+1
2380 LPRINT CHR$(15);"         ";L2$;TAB(21);CT;TAB(33);CINT(DM(L));TAB(46);TM
2390 LPRINT "        ";T2$;TAB(21);V2$;TAB(32);CINT(DT);TAB(45);A$+":"+B$
2400 LPRINT CHR$(18);"     ";Q$
2410 B$ = STR$(CINT(60*((DT/GS)-FIX(DT/GS))))
2415 IF N<=8 THEN GOTO 2430
2420 IF ((CINT(L/7))-(L/7)) = 0 THEN LPRINT CHR$(12)
2430 IF G=1 THEN GOTO 2460
2440 IF LA = 1 THEN GOTO 2460
2450 NEXT L
2460 PRINT:PRINT "      1. Add another leg    2. Look at list     3.  Done!"
2470 R = VAL(INPUT$(1))
2473 ON R GOTO 2480,2475, 2540
2475 RL = 1: GOTO 750
2476 CLS:GOTO 2460
2480 N=N+1: LA = 1
2490 L=N-1
2500 PRINT:INPUT "      Enter additional waypoint";P$(N)
2510 IF LEN(P$(N))>8 THEN P$(N) = LEFT$(P$(N),8)
2520 GOTO 1860
2530 CLOSE #1
2540 LPRINT TAB(5);"Estimated Ground Speed =";GS
2542 CLS
2545 LPRINT CHR$(12)
2547 CLS
2550 GOTO 220
3000 REM ***************  Intermediate Points **********************
3010 LTO = L1
3020 LOO = T1
3030 LTD = L2
3040 LOD = T2
3050 REM ************** VERTEX   ***************************
3060 X = SIN(C)*COS(LTO)
3070 GOSUB 5390
3080 LTV = Y
3090 X= TAN(C)*SIN(LTO)
3100 Y = ATN(1/X)
3110 LVO = Y
3120 LOV = LVO-LOO
3130 REM ************ COURSE SEGMENT *****************
3140 FOR N = 1 TO FIX(D/LD)
3150 CLS
3160 X =  (COS(C))*(SIN(LD*N))*(COS(LTO))+(SIN(LTO))*(COS(LD*N))
3170 GOSUB 5430
3180 LTX = Y
3190 REM K********* COMPUTE LEG COURSE  ************************
3200 IF N = 1 THEN LA = L2
3210 X = ((SIN(LTX))-(SIN(LA))*(COS(LD)))/(SIN(LD)*COS(LA))
3220 GOSUB 5390
3230 CL = Y
3240 X = ((SIN(L2))-(SIN(LTX))*(COS(D-N*LD)))/SIN(D-N*LD)*COS(LTX)
3250 GOSUB 5390
3260 CX = Y
3270 LA = LTX
3280 REM *************** COMPUTE LONGITUDE ************************
3290 X = TAN(LTX)/TAN(LTV)
3300 GOSUB 5390
3310 LVX = Y
3320 IF CX>3.14159 THEN GOTO 3350
3330 IF CX<1.57079 THEN LOX = LVX-LOV ELSE LOX = -LVX-LOV
3340 GOTO 3380
3350 IF CX<4.71238 THEN LOX=3.14159-(LVX+LOV) ELSE LOX =(LVX-LOV)-3.14159
3360 IF LOX<-3.14159 THEN LOX = 6.28318 + LOX
3370 IF LOX> 3.14159 THEN LOX = LOX - 6.28318
3380 REM *********** CONVERT VALUES ************************
3390 T = CL
3400 GOSUB 5460
3410 CL = T
3420 Z = LTX
3430 GOSUB 5230
3440 L5$ = M$
3450 Z = LOX
3460 GOSUB 5230
3470 L6$ = M$
3480 REM *************** OUTPUT FORMAT  *****************************
3490 IF N>1 GOTO 3570
3500 LPRINT CHR$(27);"N";CHR$(1);CHR$(27);"Q";CHR$(50)
3510 LPRINT CHR$(14)
3520 X$ = STRING$(50,42):LPRINT X$
3530 LPRINT "FROM:";LEFT$(W1$,8);TAB(17);"Lat:";L1$;TAB(36);"Long:";T1$
3540 LPRINT "TO:  ";LEFT$(W2$,8);TAB(17);"Lat:";L2$;TAB(36);"Long:";T2$
3550 LPRINT "Total Distance: ";FIX(D*3437.75);"miles"; TAB(30);"Each Leg:";FIX(LD*3437.75);" miles"
3560 LPRINT X$
3570 IF LL = 1 GOTO 3610
3580 IF N = 1 THEN CX = CT ELSE CX = CINT(CL*57.2958)
3590 LPRINT "Point #";N;TAB(17);"Lat:";L5$;TAB(36);"Long:";L6$
3600 GOTO 3630
3610 LPRINT "Point #";N;TAB(17);"Lat:";L2$;TAB(36);"Long:";T2$
3620 REM
3630 IF IC <> 1 THEN GOTO  3660
3640 LPRINT "True Course:";CT;TAB(22);"Dist to Intercept:";FIX(D*3437.75);"miles "
3650 GOTO 3670
3660 LPRINT "True Course: ";CX;TAB(30);"Leg Dist: ";FIX(LD*3437.75);"miles "
3670 REM
3680 LPRINT X$
3690 IF LL = 1 GOTO 3750
3700 IF IC = 1 THEN GOTO 3750
3710 NEXT N
3720 LL = 1
3730 LD = D -((N-1)*LD)
3740 GOTO 3360
3750 GOSUB 190
3760 PRINT TAB(10); " Compute intercept 1.Lattitude  2.Longitude  3. End"
3770 L = VAL(INPUT$(1))
3780 ON L GOTO 3790, 4060, 4220
3790 REM *************** COMPUTE INTERCEPT - LONGITUDE *******************
3800 CLS
3810 IC = 1
3820 PRINT TAB(10); " Intercept at what Lattitude "
3830 PRINT SPC(10): INPUT "( Type in format 000-00.0 )";LTX$
3840 Z$ = LTX$ : GOSUB 5170
3850 LTX = W
3860 X = TAN(LTX)/TAN(LTV)
3870 GOSUB 5390
3880 LVX = Y
3890 IF C>3.14159 THEN GOTO 3920
3900 IF C<1.57079 THEN LOX = LVX-LOV ELSE LOX = -LVX-LOV
3910 GOTO 3950
3920 IF C<4.71238 THEN LOX=3.14159-(LVX+LOV) ELSE LOX =(LVX-LOV)-3.14159
3930 IF LOX<-3.14159 THEN LOX = 6.28318 + LOX
3940 IF LOX> 3.14159 THEN LOX = LOX - 6.28318
3950 X = SIN(L1)*SIN(LTX) + COS(L1)*COS(LTX)*(COS(LOX - T1))
3960 GOSUB 5390
3970 D = Y
3980 Z = LTX
3990 GOSUB 5230
4000 L5$ = M$
4010 Z = LOX
4020 GOSUB 5230
4030 L6$ = M$
4040 N = N+1: LL = 0
4050 GOTO 3480
4060 REM ************ COMPUTE INTERCEPT - LAT. **********************
4070 IC = 1
4080 CLS
4090 PRINT TAB(10); "Intercept at what  longitude?"
4100 PRINT SPC(10): INPUT "(Type in format 0000-00.0 )";LOX$
4110 Z$ = LOX$
4120 GOSUB 5200
4130 LOX = W
4140 IF C>3.14159 THEN GOTO 4170
4150 IF C<1.57079 THEN LVX = LOX + LOV ELSE  = LOX-LOV
4160 GOTO 4180
4170 IF C<4.71238 THEN LVX = 3.14159-(LOX + LOV) ELSE LVX = LOX-LOV-3.14159
4180 X = COS(LVX)*TAN(LTV)
4190 Y = ATN(X)
4200 LTX = Y
4210 GOTO 3950
4220 LPRINT CHR$(12)
4230 K = 0: IC = O: LL = 0: GOTO 220
5000 REM **************SUBROUTINES************************
5010 REM
5020 REM ****    Find Waypoint  *********
5030 P = 1
5040 REM
5050 G = LEN(P$(T))
5060 IF FR = 1 THEN X$ = MID$(W$(P),10,G):GOTO 5080
5070 X$ = LEFT$(W$(P),G)
5080 IF X$ = P$(T) THEN RETURN
5090 IF P>NF THEN GOTO 5120
5100 P = P+1
5110 GOTO 5040
5120 PRINT:PRINT "      No such waypoint as  ";P$(T)
5121 PRINT:PRINT "      1. Look at waypoint list   2. Re-enter waypoint "
5122 IF VAL(INPUT$(1)) = 1 THEN GOTO 750
5130 PRINT:INPUT "      Type in correct waypoint  ";P$(T)
5140 IF LEN(P$(T))>8 THEN P$(T) = LEFT$(P$(T),8)
5150 GOTO 5030
5160 RETURN
5170 REM ******* Convert Deg-Rad (lat.) ****************
5180 W=(VAL(LEFT$(Z$,3))+0.01667*(VAL(RIGHT$(Z$,4))))/57.2958
5190 RETURN
5200 REM ******* Convert Deg-Rad (long) ****************
5210 W=(VAL(LEFT$(Z$,4))+0.01667*(VAL(RIGHT$(Z$,4))))/57.2958
5220 RETURN
5230 REM ******** Convert Radians to Degrees  **************
5240 M1 = FIX(57.2958*Z)
5250 M2 = (FIX((57.2996*Z - M1)*600))*0.1
5260 M2$ = STR$(M2)
5270 IF LEFT$(M2$,1) = " " THEN M2$ = RIGHT$(M2$,(LEN(M2$)-1))
5280 IF M2<1 THEN M2$ = "00" + M2$
5290 IF M2>1 THEN IF M2<10 THEN M2$ = "0" + M2$
5300 IF LEN(M2$)<4 THEN M2$ = M2$ + "0": GOTO 5300
5310 IF MID$(M2$,3,1) = "0" THEN M2$ = LEFT$(M2$,2) + "." + MID$(M2$,3,1)
5320 M1$ = STR$(M1)
5330 IF Z = LTX GOTO 5360
5340 IF LEN(M1$)<4 THEN M1$ = "0" + M1$: GOTO 5340
5350 GOTO 5370
5360 IF LEN(M1$)<3 THEN M1$ = "0" + M1$: GOTO 5360
5370 M$ = M1$ + "-" + M2$
5380 RETURN
5390 REM ********         Arc cos             *******
5400 IF ABS(X)>1 THEN X = 1
5410 Y = -ATN(X/SQR(-X*X+1))+1.5708
5420 RETURN
5430 REM *******          Arc Sin            **********
5440 Y = ATN(X/SQR(-X*X+1))
5450 RETURN
5460 REM ********     Course Correction       *******
5470 LOO = T1
5480 LOD = T2
5490 IF LOD>LOO THEN T=6.28318-T ELSE T=T
5500 IF LOD>0 THEN IF LOO>0 THEN GOTO 5530
5510 IF LOD<0 THEN IF LOO<0 THEN GOTO 5530
5520 T=6.28318-T
5530 RETURN
5540 REM
5550 REM*******  PLAN FORMAT   *************
5560 Q$ = STRING$(41,45):LPRINT "     ";Q$
5570 LPRINT CHR$(27);"E";"     POINT";TAB(15);"COURSE";TAB(22);"DIST.";TAB(28);"EST.TIME";TAB(37);"ACTUAL TIME";CHR$(27);"F";CHR$(15)
5580 LPRINT "        Lattitude";TAB(22);"True";TAB(34);"Leg Dist.";TAB(44);"Leg";TAB(60);"Leg"
5590 LPRINT "        Longitude";TAB(22);"Variation";TAB(34);"Total";TAB(44);"Total";TAB(60);"Total";CHR$(18)
5600 LPRINT "     "; Q$
5610 RETURN
5620 REM ********************  END PROGRAM ***********************
5630 PRINT TAB(10);"SAVE CHANGES IN THE FILE? (yes/no)
5640 IF INPUT$(1) = "Y" THEN GOTO 5670
5650 PRINT "END OF PROGRAM"
5660 END
5670 REM ************** SAVE CHANGES **************
5680 CLOSE #1
5690 OPEN "O", #1, FIL$
5700 P = 1
5710 IF LEFT$(W$(P),3)<"AAA" THEN GOTO 5750
5720 WRITE #1, W$(P)
5730 P = P+1
5740 GOTO 5710
5750 CLOSE #1
5760 GOTO 5650
```
{% endraw %}

## AIRNAV.DOC

{% raw %}
```
FILE: AIRNAV.DOC

AIR NAVIAGTION - FLIGHT PLANNING PROGRAM

1. INTRODUCTION

    The AIRNAV program is written to prepare a flight log for
flight over a predetermined route of up to twenty points (for
most light aircraft this provides waypoints close enough
together, and enough waypoints for one leg without refueling. 
The log gives the geographic coordinates of the point, the
distance between points, the true course, and the estimated time
between points.  It prints space on the log for entering actual
time between points.  All flight planning is done on the basis of
one estimated speed for the entire series of legs. The effects of
wind and changes of speed with changes of altitute are not taken
into consideration in this program.  

The effect of wind and altitude need to be considered in the
intial selection of an estimated groundspeed but since they
change substantially over any single 300 to 400 mile trip segment
the pilot will have to make these revisions manually. An
additional program module could be added to compute effect over
the planned flight segement.

Waypoint data is contained in a separate sequential file which is
loaded into memory at the start of the program.  For flight
planning in various regions, such as the Pacfic Northwest and
Alaska, the complete file of data for the United States can be
broken down into regions, enabling the program to run faster.

2.  PROGRAM STRUCTURE

The program is arranged in four modules.  These are:

	Calculate flight
	Calculate intermediate points
	Edit waypoint lists
	Load new file

   a. The flight cacluation prompts for load of a waypoint data
file and for input of the starting waypoint and up to 19
additional waypoints.  Each waypoint is in the file in a string
39 characters long which inlcude eight letters for the name
(additional letters are chopped off on input), four letters as
the aviation "identifier", the lattitude and longitude (which can
be plus or minus for north and south lattitude, and east and west
longitude to make the program work world wide.  The program
calcualtes the course and distance between each set of waypoints
by spherical trigonometry and computes the estimated time between
points based on the estimated groundspeed.  Output is in the form
of a flight log.  Courses are given as true but the deviation for
each waypoint is printed out so the pilot can make the mental
calculation.

    b.  Calculate Points - This module will calculate the great
circle course and distance between any two given points.  It will
calculates the geographic coordinate of points at equal distances
along a great circle route, and will also calculate the longitude
and distance from the start at which the great circle course
intercepts any given lattitude, or the lattitude and distance
from the start at which it intercepts any given longitude.

    c.  The edit module will add to, change, or list the points
in the waypoint file

    d.  The new file module will load a new waypoint file into memory.


3.  DATA FILES

     Data files consist of 39 characters.  The program was
originally wiritten for the Actrix computer which would hold only
500 waypoints in string space, so files of waypoints were set up
on a regional geographic basis.

    Data files can be written modified and rearranged using any
text editor, or can be compiled and sorted from a data base. 
Alternatively there is a uility program "SORTED.BAS" for use in
building and sorting waypoint files.  It uses the Shell-Metz sort
procedure but still runs slowly.  This is the format for the
waypoint string.  

	"SAMPLE FORMAT FOR WAYPOINT ENTRY"
	"LOPEZISL S31- 048-29.2 0122-56.3 -21 WA"
	"________ ____ ________ _________ ___ __"

The first item is eight characters containing the name of the
waypoint.  For simplicity spaces and periods in the waypoints are
eliminated and names run together.  Also, prefaces such as "Fort"
and "Saint" are abbreviated FT and ST without the period.  When
entering the names of waypoints you can enter the full name (more
than eight characters.  The input routine will chop off all but
the first eight.

The second item is the aviation "identifier" - four characters. 
As a convention of this program intersections are writen with the
first three letters of the intersection name followed by an "I"
as the fourth letter. 

The magnetic variation is given so it can be printed out on the
flight plan and the two letter abbreviation for the state,
province, our country is the last item.

4. CALCULATE FLIGHT

    a.  Load basic, load "AIRNAV-B.BAS" and run

    b.  You can select the "Load file" option first, then read
through the list of waypoints with the "Edit" option for
familiarization, or go directly to the "Calculate Flight" module.

    c.  Enter up to twenty waypoints in succession.  As the
waypoints are entered they are listed in sequence so you you
where you are.  You can start over by typing "START".  If you
don't remember what waypoints are on the list you can type
"LIST".  The program will switch to the "Edit List" module so you
can see if your selected waypoint is on the list, or enter it if
it isn't.  When you have entered all the waypoints enter "Done". 
You will then be prompted for the estimated groundspeed.  When
this is entered  the program will commence retrieving the
waypoints from memory and calculating the program.

    d.  If the waypoint you have entered does not exist you will
be promted to re-enter another waypoint, or a different spelling. 
At this point you can again go back and look  at the list to
check to spelling, or to add another waypoint.

    e.  When calculations are complete for each leg the computer
will print out the flight log.  At the conclusion of the printing
it will as if you want to add another leg.  You can input
additional legs, one at a time.

5.  CALCULATE INTERMEDIATE POINTS

    In this portion of the program you select the starting and
ending points, and a leg distance.  The program will calculate
the geographic coordinates of the points at the end of each leg
segement.  You can also compute the lattitude at which the course
intercepts any given longitude, or the longitude at which it
intercepts any given degree of latittude.


 estimated groundspeed.  When
this i
```
{% endraw %}

## DIRECTOR.BAS

{% raw %}
```bas
100 REM Program to produce the Program Directory for Starfinder ON DISPLAY
110 REM All text is in the form of DATA statements.
120 REM Set Printer Characteristics
130 WIDE.ON$     = CHR$(14)          'Set Expanded Print ON
140 WIDE.OFF$    = CHR$(18)          'Set Expanded Print OFF
150 BOLD.ON$     = CHR$(27)+"E"      'Set Emphasized Print ON
160 BOLD.OFF$    = CHR$(27)+"F"      'Set Emphasized Print OFF
170 SQUEEZE.ON$  = CHR$(15)          'Set Compressed Print ON
180 SQUEEZE.OFF$ = CHR$(18)          'Set Compressed Print OFF
190 PAGE.EJECT$  = CHR$(12)          'Skip to Top of Next Page
200 REM Set the Trimming Form
210 DASHES$ = "+"+STRING$(54,45)+"+"
220 TRIM.LINE$ = "(Trim-line)"
230 REM Data for the Title Page and Parameters
240 DATA Starfinder, "Version 2.0, Program Directory", -1, 1
250 READ TITLE$, DOC.NAME$, PAGE.NO, LINE.NO
260 IF PAGE.NO MOD 2 = 0 THEN TAB.POS = 8 ELSE TAB.POS = 13
270 GOSUB 850  'For trim line and heading space
280 FOR I = 1 TO 6 : LPRINT : NEXT I
290 LPRINT WIDE.ON$;  'Set Expanded Print
300 LPRINT TAB(TAB.POS-3);TITLE$
310 LPRINT WIDE.OFF$;  'Return to normal
320 FOR I = 1 TO 3 : LPRINT : NEXT I
330 LPRINT BOLD.ON$;      'Set Emphasized mode
340 LPRINT TAB(TAB.POS+12);"ON DISPLAY"
350 LPRINT BOLD.OFF$;     'Return to normal
360 FOR I = 1 TO 15 : LPRINT : NEXT I
370 LPRINT TAB(TAB.POS+4); DOC.NAME$
380 LINE.NO = LINE.NO + 27
390 '
400 READ REPLY$
410 REM Change any Tilde's to Quotes
420 FOR TILDE = 1 TO LEN(REPLY$)
430  IF MID$(REPLY$,TILDE,1) = "~" THEN MID$(REPLY$,TILDE,1) = CHR$(34)
440 NEXT TILDE
450 IF LEFT$(REPLY$,1) = "." THEN GOSUB 1200: GOTO 400
460 IF LINE.NO > 44 THEN GOSUB 960
470 REM Print the line if not a command
480 LPRINT TAB(TAB.POS);REPLY$
490 LINE.NO = LINE.NO + 1
500 IF PAGE.NO MOD 2 = 0 THEN TAB.POS = 8 ELSE TAB.POS = 13
510 GOTO 400
520 REM Data for the Copyright Page
530 DATA ".pa"
540 DATA "Anyone may request a copy of the Star-"
550 DATA "finder ON DISPLAY program by sending a"
560 DATA "blank, 5-1/4 inch, double-density disk-"
570 DATA "ette to the author."
580 DATA ".sp"
590 DATA "A self-addressed, postage-paid return"
600 DATA "mailer must accompany the diskette"
610 DATA "(no exceptions, please)."
620 DATA ".sp"
630 DATA "The programs and documentation will be"
640 DATA "copied onto the user's diskette and"
650 DATA "returned."
660 DATA ".vt 2"
670 DATA "Users are encouraged to copy and share"
680 DATA "Starfinder ON DISPLAY with others,"
690 DATA "provided that no changes have been made."
700 DATA ".vt 4"
710 DATA "If you are using these programs, and"
720 DATA "finding them of value, your contribu-"
730 DATA "tion ($35 suggested) will be antici-"
740 DATA "pated."
750 DATA ".sp"
760 DATA "Melvin O. Duke."
770 DATA "P.O. Box 20836"
780 DATA "San Jose, CA  95160"
785 DATA "(408) 268-6637"
790 DATA ".vt 3"
800 DATA "Copyright (c) 1985, by:"
810 DATA "Melvin O. Duke"
820 DATA ".sp"
830 DATA "All rights reserved."
840 '
850 REM Top of each page routine
860 IF PAGE.NO MOD 2 = 0 THEN TAB.POS = 8 ELSE TAB.POS = 13
870 LPRINT
880 LPRINT TAB(30); TRIM.LINE$
890 LPRINT DASHES$ 'Dashes
900 FOR I = 1 TO 6
910  LPRINT
920 NEXT I
930 LINE.NO = LINE.NO + 6
940 RETURN
950 '
960 REM Bottom of each page Routine
970 IF PAGE.NO < 1 THEN LPRINT : LPRINT : LPRINT : GOTO 1090
980 LPRINT TAB(TAB.POS); STRING$(40,45)  'on line 46
990 LPRINT TAB(TAB.POS+3); TITLE$+" ON DISPLAY, Version 2.0" 'on line 47
1000 IF PAGE.NO MOD 2 = 1 THEN 1040
1010 LPRINT TAB(TAB.POS);"Page";PAGE.NO;
1020 LPRINT TAB(TAB.POS+23);"Program Directory"
1030 GOTO 1090
1040 LPRINT TAB(TAB.POS); "Program Directory";
1050 IF PAGE.NO < 10 THEN DELTA = 34
1060 IF PAGE.NO >  9 THEN DELTA = 33
1070 IF PAGE.NO > 99 THEN DELTA = 32
1080 LPRINT TAB(TAB.POS+DELTA); "Page"; PAGE.NO  'on line 48
1090 LPRINT : LPRINT : LPRINT
1100 LPRINT DASHES$ 'dashes after 51
1110 LPRINT TAB(30); TRIM.LINE$
1120 LPRINT PAGE.EJECT$;
1130 PAGE.NO = PAGE.NO + 1
1140 LINE.NO = 1
1150 IF REPLY$ = ".eof" THEN 1170  'Bypass after last page
1160 GOSUB 850  'For top of next page
1170 IF PAGE.NO MOD 2 = 0 THEN TAB.POS = 8 ELSE TAB.POS = 13
1180 RETURN
1190 '
1200 REM Command Processor
1210 IF LEFT$(REPLY$,3) = ".h1" THEN 1310
1220 IF LEFT$(REPLY$,3) = ".h2" THEN 1450
1230 IF LEFT$(REPLY$,3) = ".h3" THEN 1560
1240 IF LEFT$(REPLY$,3) = ".sp" THEN 1670
1250 IF LEFT$(REPLY$,4) = ".eof" THEN 1720
1260 IF LEFT$(REPLY$,3) = ".pa" THEN 1760
1270 IF LEFT$(REPLY$,3) = ".vt" THEN 1830
1280 IF LEFT$(REPLY$,3) = ".pk" THEN 1940
1290 IF LEFT$(REPLY$,3) = ".in" THEN 2070
1300 STOP
1310 REM Head 1 Processor
1320 FOR I = LINE.NO TO 44
1330  LPRINT
1340 NEXT I
1350 GOSUB 960  'Bottom of page Routine
1360 IF PAGE.NO MOD 2 = 0 THEN GOSUB 1760  'For h1 on Odd pages
1370 LPRINT WIDE.ON$;  'Set expanded print
1380 IF PAGE.NO MOD 2 = 0 THEN ADJUST = -4 ELSE ADJUST = -7
1390 LPRINT TAB(TAB.POS+ADJUST); RIGHT$(REPLY$,LEN(REPLY$)-4)
1400 LPRINT WIDE.OFF$;  'Return to normal
1410 LINE.NO = LINE.NO+1
1420 IF PAGE.NO MOD 2 = 0 THEN TAB.POS = 8 ELSE TAB.POS = 13
1430 RETURN
1440 '
1450 REM Head 2 Processor
1460 IF LINE.NO = 7 THEN 1480 'skip spacing if at top of page
1470 IF LINE.NO > 43 THEN GOSUB 1760 ELSE LPRINT:LPRINT:LINE.NO = LINE.NO+2
1480 LPRINT BOLD.ON$;  'Set emphasized print
1490 LPRINT TAB(TAB.POS); RIGHT$(REPLY$,LEN(REPLY$)-4)
1500 LPRINT BOLD.OFF$;  'Return to normal
1510 LPRINT
1520 LINE.NO = LINE.NO + 2
1530 IF PAGE.NO MOD 2 = 0 THEN TAB.POS = 8 ELSE TAB.POS = 13
1540 RETURN
1550 '
1560 REM Head 3 Processor
1570 IF LINE.NO = 7 THEN 1590 'skip spacing if at top of page
1580 IF LINE.NO > 43 THEN GOSUB 1760 ELSE LPRINT:LPRINT:LINE.NO = LINE.NO+2
1590 LPRINT BOLD.ON$;  'Set emphasized print
1600 LPRINT TAB(TAB.POS); RIGHT$(REPLY$,LEN(REPLY$)-4)
1610 LPRINT BOLD.OFF$;  'Return to normal
1620 LPRINT
1630 LINE.NO = LINE.NO + 2
1640 IF PAGE.NO MOD 2 = 0 THEN TAB.POS = 8 ELSE TAB.POS = 13
1650 RETURN
1660 '
1670 REM Single Space Processor
1680 IF LINE.NO = 7 THEN 1700
1690 IF LINE.NO > 44 THEN GOSUB 1760 ELSE LPRINT : LINE.NO = LINE.NO + 1
1700 IF PAGE.NO MOD 2 = 0 THEN TAB.POS = 8 ELSE TAB.POS = 13
1710 RETURN
1720 REM End of File Processor
1730 GOSUB 1760 'Bottom of Page
1740 LPRINT PAGE.EJECT$;
1750 GOTO 11810
1760 REM Page Eject Processor
1770 FOR I = LINE.NO TO 44
1780  LPRINT
1790  LINE.NO = LINE.NO + 1
1800 NEXT I
1810 GOSUB 960  'Bottom of Page Processing
1820 RETURN
1830 REM Vertical Tab Processor
1840 IF LINE.NO = 7 THEN 1930
1850 IF LINE.NO > 44 THEN GOSUB 960  'End of page
1860 QTY = VAL(RIGHT$(REPLY$,LEN(REPLY$)-3))
1870 FOR I = 1 TO QTY
1880  LPRINT
1890  LINE.NO = LINE.NO + 1
1900  IF LINE.NO > 44 THEN I = QTY
1910 NEXT I
1920 IF PAGE.NO MOD 2 = 0 THEN TAB.POS = 8 ELSE TAB.POS = 13
1930 RETURN
1940 REM Pack Processor
1950 IF LINE.NO > 44 THEN GOSUB 960
1960 IF TAB.POS = 8 THEN ADJUST = 4
1970 IF TAB.POS = 13 THEN ADJUST = 7
1980 TAB.POS = TAB.POS + ADJUST + INDENT
1990 LPRINT SQUEEZE.ON$;  'Packed printing
2000 WIDTH "lpt1:", 132 'set condensed width
2010 LPRINT TAB(TAB.POS); RIGHT$(REPLY$,LEN(REPLY$)-3)
2020 LPRINT SQUEEZE.OFF$;  'Return to normal
2030 WIDTH "lpt1:", 80  'return to normal
2040 LINE.NO = LINE.NO + 1
2050 IF PAGE.NO MOD 2 = 0 THEN TAB.POS = 8 ELSE TAB.POS = 13
2060 RETURN
2070 REM Indent Processor
2080 INDENT = VAL(RIGHT$(REPLY$,LEN(REPLY$)-3))
2090 RETURN
2100 DATA ".h1 INTRODUCTION"
2110 DATA ".h2 OVERVIEW"
2120 DATA "This Program Directory contains the"
2130 DATA "information about the contents of the"
2140 DATA "Distribution Diskette for the Star-"
2150 DATA "finder ON DISPLAY Program."
2160 DATA ".h2 CONTENT"
2170 DATA "Following is a list of the files which"
2180 DATA "are on the Distribution Diskette:"
2190 DATA ".sp"
2200 DATA "  Program     Program     Program  "
2210 DATA "  Name        Language    Size     "
2220 DATA "  ---------   ---------   ---------"
2230 DATA "  runfirst    basic        1,280   "
2240 DATA "  printers    basic        1,792   "
2250 DATA "  director    basic       10,752   "
2260 DATA "  usermanu    basic       41,216   "
2270 DATA "  starfind    basic       28,928   "
2280 DATA ".pa"
2290 DATA ".h2 REQUIREMENTS"
2300 DATA ".h3 Hardware Requirements"
2310 DATA "IBM PC (from the PCjr Upward), or"
2320 DATA "Compatible Personal Computer, with:"
2330 DATA ".sp"
2340 DATA "   At least one diskette drive.
2350 DATA ".sp"
2360 DATA "   IBM Graphics Printer (or equiva-"
2370 DATA "   lent, for printing documentation."
2380 DATA ".sp"
2390 DATA "   At least 96 K of Storage."
2400 DATA ".sp"
2410 DATA "   80 Character Display (either Color"
2420 DATA "   or Monochrome)."
2430 DATA ".h3 Software Requirements"
2440 DATA "   IBM PC-DOS (or equivalent)."
2450 DATA ".sp"
2460 DATA "   PC-BASIC (on Diskette or Cartridge),"
2470 DATA "   (or equivalent)."
2480 DATA ".h1 GENERAL INFORMATION"
2490 DATA ".h2 DOCUMENTATION"
2500 DATA "Four documentation programs are included"
2510 DATA "on the Distribution Diskette.  These are"
2520 DATA "BASIC programs, which can be 'loaded'"
2530 DATA "and the 'run'."
2540 DATA ".sp"
2550 DATA "The documentation programs contain their"
2560 DATA "own formatting capability, as well as"
2570 DATA "the content of the documents which they"
2580 DATA "will produce."
2590 DATA ".sp"
2600 DATA "By 'loading' and then 'running' these"
2610 DATA "documentation programs, the user is able"
2620 DATA "to obtain as many copies of the actual"
2630 DATA "documents as he desires."
2640 DATA ".vt 2"
2650 DATA "The documentation programs are:
2660 DATA ".sp"
2670 DATA "  1.  runfirst"
2680 DATA "      A copy of the cover letter."
2690 DATA ".vt 2"
2700 DATA "  2.  printers"
2710 DATA "      Shows how to modify the documen-"
2720 DATA "      tation programs to run them on"
2730 DATA "      other printers."
2740 DATA ".pa"
2750 DATA "  3.  director"
2760 DATA "      Documentation of the content of"
2770 DATA "      the Distribution Diskette."
2780 DATA ".sp"
2790 DATA "      Produces this document."
2800 DATA ".vt 2"
2810 DATA "  4.  usermanu"
2820 DATA "      Documentation for the Starfinder"
2830 DATA "      ON DISPLAY Program."
2840 DATA ".sp"
2850 DATA "      Produces a User's Manual."
2860 DATA ".h2 PROGRAM"
2870 DATA "One program is included on the Distribu-"
2880 DATA "tion diskette.  It is:"
2890 DATA ".sp"
2900 DATA "  1.  starfind"
2910 DATA "      Starfinder ON DISPLAY"
2920 DATA ".h1 USING THE PROGRAMS"
2930 DATA ".h2 FIRST TIME USAGE"
2940 DATA "There is nothing unique about using the"
2950 DATA "BASIC Programs which are on the Distri-"
2960 DATA "bution Diskette for the first time."
2970 DATA ".sp"
2980 DATA "The user should take the normal precau-"
2990 DATA "tionary steps to copy the diskette to a"
3000 DATA "backup diskette."
3010 DATA ".h2 GETTING STARTED"
3020 DATA "The user should perform the following"
3030 DATA "steps in starting the Starfinder ON"
3040 DATA "DISPLAY program."
3050 DATA ".sp"
3060 DATA "1.  Insert the PC DOS diskette into"
3070 DATA "    Drive a:"
3080 DATA ".sp"
3090 DATA "2.  Turn the Printer ON (if you want"
3100 DATA "    to print the documentation)."
3110 DATA ".sp"
3120 DATA "3.  Turn the Computer ON."
3130 DATA ".sp"
3140 DATA "4.  Enter today's date and the time,"
3150 DATA "    if requested to do so."
3160 DATA ".sp"
3170 DATA "5.  Type:  basic"
3180 DATA "           and press the 'enter' key."
3190 DATA ".sp"
3200 DATA "6.  Replace the DOS Diskette with the"
3210 DATA "    Distribution Diskette into drive"
3220 DATA "    a:"
3230 DATA ".pa"
3240 DATA "7.  Type:  load ~starfind~"
3250 DATA "           and press the 'enter' key."
3260 DATA ".sp"
3270 DATA "8.  Type:  run"
3280 DATA "           and press the 'enter' key."
3290 DATA ".sp"
3300 DATA "9.  Follow instructions which will be"
3310 DATA "    shown at the bottom of each screen."
3320 DATA ".h2 HOW TO STOP"
3330 DATA "The user may stop at any time, by"
3340 DATA "pressing (and holding down) the control"
3350 DATA "(Ctrl) key, and then pressing the Break"
3360 DATA "key (or the FN key and B key for the"
3370 DATA "PCjr)."
3380 DATA ".sp"
3390 DATA "The normal method of stopping, however,"
3400 DATA "is when the user is finished.  He gives"
3410 DATA "the 'quit' command, and his session is"
3420 DATA "finished."
11800 DATA ".eof"
11810 END
```
{% endraw %}

## FILES447.TXT

{% raw %}
```
---------------------------------------------------------------------------
Disk No 447   Starfinder ON DISPLAY  Version 2.0                 v1.2
---------------------------------------------------------------------------
 
RUNFIRST BAS  Copy of the Cover Letter.  Like a README File.
PRINTERS BAS  Modifications to use Different Printers.
 
    Documentation
    --------------------------------------------------------------
DIRECTOR BAS  The Program Directory.  What's What and How to Start.
USERMANU BAS  User's Manual.
 
    Main Program.
    --------------------------------------------------------------
STARFIND BAS  Main Program.
 
PC-SIG
1030D East Duane Ave.
Sunnyvale Ca. 94086
(c) Copyright 1987 PC-SIG
```
{% endraw %}

## PRINTERS.BAS

{% raw %}
```bas
100 LPRINT TAB(10);"Changes to Documentation Programs to support Other Printers."
110 LPRINT
120 LPRINT TAB(10);"Both of the documentation programs ('director.bas' and"
130 LPRINT TAB(10);"'usermanu.bas') contain their own text processors.  There"
140 LPRINT TAB(10);"is a determination of whether each line is a command"
150 LPRINT TAB(10);"(begins with a period) or is normal text.  If it is a"
160 LPRINT TAB(10);"command, then additional processing is done, including"
170 LPRINT TAB(10);"the use of some of the characteristics of the printer."
180 LPRINT
190 LPRINT TAB(10);"Both of the documentation programs are identical in their
200 LPRINT TAB(10);"use of their built-in text processors, in that the same"
210 LPRINT TAB(10);"BASIC line-numbers are used for the same functions."
220 LPRINT
230 LPRINT TAB(10);"Following are the locations of the line numbers which"
240 LPRINT TAB(10);"must be considered for changes to other printers."
250 LPRINT
260 LPRINT TAB(10);"Line    Printer        Function"
270 LPRINT TAB(10);"Number  Control        Performed"
280 LPRINT TAB(10);"------  -------------  ---------------------------------"
290 LPRINT TAB(10);" 130    chr$(14)       Set Expanded Printing ON"
300 LPRINT TAB(10);" 140    chr$(18)       Set Expanded Printing OFF"
310 LPRINT TAB(10);" 150    chr$(27)+";CHR$(34);"E";CHR$(34);"   Set Emphasized Printing ON"
320 LPRINT TAB(10);" 160    chr$(27)+";CHR$(34);"F";CHR$(34);"   Set Emphasized Printing OFF"
330 LPRINT TAB(10);" 170    chr$(15)       Set Compressed Printing ON"
340 LPRINT TAB(10);" 180    chr$(18)       Set Compressed Printing OFF"
350 LPRINT TAB(10);" 190    chr$(12)       Skip to Top of Next Page"
360 LPRINT
370 LPRINT TAB(10);"For a printer whose control characters differ from the"
380 LPRINT TAB(10);"above, change the controls to the characters required by"
385 LPRINT TAB(10);"that printer."
390 FOR I = 1 TO 36 : LPRINT : NEXT I
400 END
```
{% endraw %}

## REVIEW.BAS

{% raw %}
```bas
100 REM ************* UNFORMAT.BAS **********************
110 :REM█
120 :REM█  To put waypoints back into format to be read by
130 :REM█  the airnav program
140 :REM█
150 GOTO 170
160 PRINT CHR$(27);CHR$(42):RETURN
170 GOSUB 160
190 INPUT "NAME OF INPUT FILE";INF$
200 INPUT "NAME OF OUTPUT FILE"; OPF$
210 COLOR "I", #1, INF$
220 COLOR "O", #2, OPF$
250 INPUT #1, WP$
260 IF  DEFDBL(1) STEP GOTO 390
270 X$ >= WP$
280 PRINT #2, WP$
290 PRINT WP$
295 INPUT #1,W$
300 GOTO 250
390 BLOAD
400 PRINT "DONE"
410 END
```
{% endraw %}

## RUNFIRST.BAS

{% raw %}
```bas
100 REM Program to show new users how to start
110 PRINT
120 PRINT "The Starfinder ON DISPLAY Program and its Documentation are all on this"
130 PRINT "Distribution Diskette."
140 PRINT
150 PRINT "To begin, bring up IBM PC DOS and BASIC."
160 PRINT
170 PRINT "(Note:  If you are using a printer other than the IBM Matrix or IBM Graphics"
180 PRINT "Printer, you may need to modify the documentation to fit your printer.  Run"
190 PRINT "the BASIC program 'printers.bas' for more information.)"
200 PRINT
210 PRINT "Make sure that the printer is on, and then LOAD and RUN the BASIC program"
220 PRINT "'director.bas' from this Distribution Diskette.  This will print a Program"
230 PRINT "Directory, which contains information about the rest of the documentation,"
240 PRINT "and about the Starfinder ON DISPLAY program."
250 PRINT
260 PRINT "Following the instructions in the Program Directory, LOAD and RUN the other"
270 PRINT "documentation program, 'usermanu', which will print the User's Manual."
280 PRINT "(Have plenty of paper ready, since the User's Manual is many, many pages"
290 PRINT "long.)  If you want, you can trim the pages of the User's Manual to 5-1/2 x"
300 PRINT "8-1/2 inches."
310 PRINT
320 PRINT "The User's Manual explains the functions of the Starfinder ON DISPLAY"
330 PRINT "program, and how to use it."
340 END
```
{% endraw %}

## STARFIND.BAS

{% raw %}
```bas
1 OPTION BASE 1
90 WIDTH "scrn:",80
95 SCREEN 0,1,0,0
100 REM Starfinder ON DISPLAY, Version 2.0
105 REM By:  Melvin O. Duke.  Last Updated 18 July 1985.
110 REM Dimension statements go here
120 DIM SN$(301),CN$(301),MA(301),OP(300,4),RP(1,4),TF(4,4),T1(4,4),T2(4,4)
130 DIM CON$(301), RA(2), DE(2)
170 TITLE$ = "Starfinder ON DISPLAY"
180 TITLE.POS = 40 - INT(LEN(TITLE$)/2)
181 KEY OFF
182 CLS
190 REM draw the title display
200 REM draw the outer double box
210 R1 = 1 : C1 = 1 : R2 = 24 : C2 = 79 : GOSUB 400
220 REM draw the title single box
230 R1=3 : C1=TITLE.POS-2 : R2=6 : C2=TITLE.POS+LEN(TITLE$)+1 : GOSUB 600
240 REM print the title
250 LOCATE 4, TITLE.POS : PRINT TITLE$
255 LOCATE 5,35 : PRINT "Version 2.0";
260 REM Draw the Contribution box
270 R1 = 8 : C1 = 19 : R2 = 17 : C2 = 62 : GOSUB 400
280 REM Request the Contribution
290 LOCATE 9,23 : PRINT "If you are using these programs, and"
300 LOCATE 10,21 : PRINT "finding them of value, your contribution"
305 LOCATE 11,23 : PRINT "($35 suggested) will be anticipated."
310 REM Draw the Mailing Label
320 R1 = 12 : C1 = 28 : R2 = 16 : C2 = 52 : GOSUB 600
325 LOCATE 13,33 : PRINT "Melvin O. Duke"
330 LOCATE 14,33 : PRINT "P.O. Box 20836"
335 LOCATE 15,30 : PRINT "San Jose, CA  95160"
340 REM draw the single lower box
350 R1 = 19 : C1 = 26 : R2 = 22 : C2 = 54 : GOSUB 600
360 REM print the copyright information
370 LOCATE 20,29 : PRINT "Copyright (c) 1985, by:";
380 LOCATE 21,33 : PRINT "Melvin O. Duke";
390 GOTO 800
400 REM subroutine to print a double box
405 COLOR 5
410 FOR I = R1 + 1 TO R2 - 1
420  LOCATE I, C1 : PRINT CHR$(186);
430  LOCATE I, C2 : PRINT CHR$(186);
440 NEXT I
450 FOR J = C1 + 1 TO C2 - 1
460  LOCATE R1, J : PRINT CHR$(205);
470  LOCATE R2, J : PRINT CHR$(205);
480 NEXT J
490  LOCATE R1, C1 : PRINT CHR$(201);
500  LOCATE R1, C2 : PRINT CHR$(187);
510  LOCATE R2, C1 : PRINT CHR$(200);
520  LOCATE R2, C2 : PRINT CHR$(188);
525 COLOR 7
530 RETURN
600 REM subroutine to print a single box
605 COLOR 5
610 FOR I = R1 + 1 TO R2 - 1
620  LOCATE I, C1 : PRINT CHR$(179);
630  LOCATE I, C2 : PRINT CHR$(179);
640 NEXT I
650 FOR J = C1 + 1 TO C2 - 1
660  LOCATE R1, J : PRINT CHR$(196);
670  LOCATE R2, J : PRINT CHR$(196);
680 NEXT J
690  LOCATE R1, C1 : PRINT CHR$(218);
700  LOCATE R1, C2 : PRINT CHR$(191);
710  LOCATE R2, C1 : PRINT CHR$(192);
720  LOCATE R2, C2 : PRINT CHR$(217);
725 COLOR 7
730 RETURN
800 REM ask user to press a key to continue
810 LOCATE 25,1
820 PRINT "Press any key to continue";
830 K$ = INKEY$ : IF K$ = "" THEN 830
840 CLS
1000 REM General Description
1010 CLS : LOCATE 10,1
1020 PRINT "This program permits you to view the stars in any portion of"
1030 PRINT "the sky, and to change that view according to your commands."
1040 PRINT
1050 PRINT "The program contains all of the stars whose visual magnitude"
1060 PRINT "is 3.50 or brighter.  They are plotted according to the"
1070 PRINT "following:"
1080 PRINT
1090 COLOR 7 : PRINT "          "+CHR$(64);
1100 COLOR 2 : PRINT "  Visual Magnitude of 0.99 or brighter."
1110 COLOR 7 : PRINT "          "+CHR$(42);
1120 COLOR 2 : PRINT "  Visual Magnitude of 1.99 or brighter."
1130 COLOR 7 : PRINT "          "; : PRINT CHR$(43);
1140 COLOR 2 : PRINT "  Visual Magnitude of 2.99 or brighter."
1150 COLOR 7 : PRINT "          "; : COLOR 23 : PRINT CHR$(46);
1160 COLOR 2 : PRINT "  All other stars."
1170 COLOR 7 : PRINT
1180 LOCATE 24,1 : PRINT "Press any key to continue";
1190 A$ = INKEY$ : IF A$ = "" THEN 1190
1200 UM = 10
1210 REM Read the data, convert it, and plot it.
1220 CLS : R = 0
1230 PI = 3.14159265358979#
1240 R = R + 1 : I = R
1250 READ MA(I),CON$(I),SN$(I),CN$(I),RA(1),RA(2),DE(1),DE(2)
1260 IF MA(I) > UM THEN 1450
1270 IF SN$(I) = "eof" THEN 1450
1280 REM Compute the x, y, and z coordinates on a unit sphere
1290 OP(I,1) = 1
1300 D = DE(2)/60
1310 IF DE(1) < 0 THEN D1 = DE(1) -D ELSE D1 = DE(1) + D
1320 D2 = (D1 * 2 * PI) / 360
1330 OP(I,4) = SIN(D2)  'z coordinate
1340 XY = COS(D2)
1350 R1 = RA(1) + (RA(2)/60)
1360 R2 = (R1 * 2 * PI) / 24  'convert to radians
1370 OP(I,2) = XY * COS(R2)  'x coordinate
1380 OP(I,3) = XY * SIN(R2)  'y coordinate
1390 XTOPLOT = OP(I,2)
1400 YTOPLOT = OP(I,3)
1410 ZTOPLOT = OP(I,4)
1420 GOSUB 3940  'plotting subprogram
1430 REM Now obtain the next data item
1440 GOTO 1240
1450 REM End of data
1460 R = R - 1
1470 LOCATE 24,1
1480 PRINT "Press any key to continue";
1490 A$ = INKEY$ : IF A$ = "" THEN 1490
1500 REM Determine the next user action
1510 CLS
1520 PRINT "The following actions are available:"
1530 PRINT
1540 COLOR 2 : PRINT "   1.  Find a Star by its Common Name."
1550 PRINT "   2.  Find a Star by its Scientific Name."
1560 PRINT "   3.  Find a Constellation by its Name."
1570 COLOR 6 : PRINT "   4.  Print the Common Names of the Stars."
1580 PRINT "   5.  Print the Scientific Names of the Stars."
1590 COLOR 2 : PRINT "   6.  Move the stars farther apart."
1600 PRINT "   7.  Move the stars closer together."
1610 COLOR 6 : PRINT "   8.  Move the stars to the left."
1620 PRINT "   9.  Move the stars to the right."
1630 PRINT "  10.  Move the stars up."
1640 PRINT "  11.  Move the stars down."
1650 PRINT "  12.  Rotate the stars clockwise."
1660 PRINT "  13.  Rotate the stars counter-clockwise."
1670 COLOR 7 : PRINT "  14.  Quit."
1680 PRINT
1690 PRINT "What action would you like to take?"
1700 INPUT "Enter a number between 1 and 14.";AC
1710 AC = INT(AC)
1720 IF AC = 8 THEN 1880 'Shift the stars to the left
1730 IF AC = 9 THEN 2020 'Shift the stars to the right
1740 IF AC = 10 THEN 2160 'Move the stars up
1750 IF AC = 11 THEN 2300 'Move the stars down
1760 IF AC = 12 THEN 2440 'Move the stars clockwise
1770 IF AC = 13 THEN 2580 'Move the stars counter-clockwise
1780 IF AC = 6 THEN 2720 'Expand the stars
1790 IF AC = 7 THEN 2830 'Shrink the stars
1800 IF AC = 4 THEN REPLY = 1 : GOTO 2940
1810 IF AC = 5 THEN REPLY = 2 : GOTO 2940
1820 IF AC = 1 THEN 3650  'To locate a star by its common name
1830 IF AC = 3 THEN 3060  'To locate a constellation
1840 IF AC = 2 THEN 3830  'To locate a star by its scientific name
1850 IF AC = 14 THEN 3020  'To quit
1860 PRINT "The number must be between 1 and 14."
1870 GOTO 1690
1880 REM Routine to shift the stars to the left
1890 CLS
1900 LOCATE 23,1
1910 INPUT "How many degrees to the left"; REPLY
1920 IF REPLY < 0 OR REPLY > 360 THEN PRINT "Number must be 0 to 360":GOTO 1910
1930 REM Convert the input-reply to radian measure
1940 THETA = (REPLY * 2 * PI)/360
1950 GOSUB 4100  ' for the identity array
1960 REM Construct the transform array
1970 TF(2,2) = COS(THETA)
1980 TF(3,3) = TF(2,2)
1990 TF(2,3) = SIN(THETA)
2000 TF(3,2) = -TF(2,3)
2010 GOTO 4170  'for matrix multiply
2020 REM Routine to shift the stars to the right
2030 CLS
2040 LOCATE 23,1
2050 INPUT "How many degrees to the right"; REPLY
2060 IF REPLY < 0 OR REPLY > 360 THEN PRINT "Number must be 0 to 360":GOTO 2050
2070 REM Convert the input-reply to radian measure
2080 THETA = (REPLY * 2 * PI)/360
2090 GOSUB 4100  ' for the identity array
2100 REM Construct the transform array
2110 TF(2,2) = COS(THETA)
2120 TF(3,3) = TF(2,2)
2130 TF(2,3) = -SIN(THETA)
2140 TF(3,2) = -TF(2,3)
2150 GOTO 4170  'for matrix multiply
2160 REM Routine to move the stars up
2170 CLS
2180 LOCATE 23,1
2190 INPUT "How many degrees up"; REPLY
2200 IF REPLY < 0 OR REPLY > 360 THEN PRINT "Number must be 0 to 360":GOTO 2190
2210 REM Convert the input-reply to radian measure
2220 THETA = (REPLY * 2 * PI)/360
2230 GOSUB 4100  ' for the identity array
2240 REM Construct the transform array
2250 TF(3,3) = COS(THETA)
2260 TF(4,4) = TF(3,3)
2270 TF(3,4) = SIN(THETA)
2280 TF(4,3) = -TF(3,4)
2290 GOTO 4170  'for matrix multiply
2300 REM Routine to move the stars down
2310 CLS
2320 LOCATE 23,1
2330 INPUT "How many degrees down"; REPLY
2340 IF REPLY < 0 OR REPLY > 360 THEN PRINT "Number must be 0 to 360":GOTO 2330
2350 REM Convert the input-reply to radian measure
2360 THETA = (REPLY * 2 * PI)/360
2370 GOSUB 4100  ' for the identity array
2380 REM Construct the transform array
2390 TF(3,3) = COS(THETA)
2400 TF(4,4) = TF(3,3)
2410 TF(3,4) = -SIN(THETA)
2420 TF(4,3) = -TF(3,4)
2430 GOTO 4170  'for matrix multiply
2440 REM Routine to move the stars clockwise
2450 CLS
2460 LOCATE 23,1
2470 INPUT "How many degrees clockwise"; REPLY
2480 IF REPLY < 0 OR REPLY > 360 THEN PRINT "Number must be 0 to 360":GOTO 2470
2490 REM Convert the input-reply to radian measure
2500 THETA = (REPLY * 2 * PI)/360
2510 GOSUB 4100  ' for the identity array
2520 REM Construct the transform array
2530 TF(2,2) = COS(THETA)
2540 TF(4,4) = TF(2,2)
2550 TF(2,4) = -SIN(THETA)
2560 TF(4,2) = -TF(2,4)
2570 GOTO 4170  'for matrix multiply
2580 REM Routine to move the stars counter-clockwise
2590 CLS
2600 LOCATE 23,1
2610 INPUT "How many degrees counter-clockwise"; REPLY
2620 IF REPLY < 0 OR REPLY > 360 THEN PRINT "Number must be 0 to 360":GOTO 2610
2630 REM Convert the input-reply to radian measure
2640 THETA = (REPLY * 2 * PI)/360
2650 GOSUB 4100  ' for the identity array
2660 REM Construct the transform array
2670 TF(2,2) = COS(THETA)
2680 TF(4,4) = TF(2,2)
2690 TF(2,4) = SIN(THETA)
2700 TF(4,2) = -TF(2,4)
2710 GOTO 4170  'for matrix multiply
2720 REM Routine to move the stars farther apart.
2730 CLS
2740 LOCATE 23,1
2750 INPUT "Enter a factor between 1 and 10"; REPLY
2760 IF REPLY < 1 OR REPLY > 10 THEN PRINT "Number must be 1 to 10":GOTO 2750
2770 GOSUB 4100  ' for the identity array
2780 REM Construct the transform array
2790 TF(2,2) = REPLY
2800 TF(3,3) = REPLY
2810 TF(4,4) = REPLY
2820 GOTO 4170  'for matrix multiply
2830 REM Routine to move the stars closer together.
2840 CLS
2850 LOCATE 23,1
2860 INPUT "Enter a factor between .1 and 1"; REPLY
2870 IF REPLY <0.1 OR REPLY > 1! THEN PRINT "Number must be .1 to 1":GOTO 2860
2880 GOSUB 4100  ' for the identity array
2890 REM Construct the transform array
2900 TF(2,2) = REPLY
2910 TF(3,3) = REPLY
2920 TF(4,4) = REPLY
2930 GOTO 4170  'for matrix multiply
2940 REM Routine to name the stars.
2950 CLS
2960 GOSUB 4100  ' for the identity array
2970 REM Construct the transform array
2980 TF(2,2) = 1
2990 TF(3,3) = 1
3000 TF(4,4) = 1
3010 GOTO 4170  'for matrix multiply
3020 REM Routine to quit
3030 CLS : LOCATE 18,1
3040 PRINT "Program finished."
3050 GOTO 7870
3060 REM Routine to locate a Constellation
3070 CLS : RC = 1
3080 LOCATE 23,1 : PRINT SPACE$(79);
3090 LOCATE 23,1 : INPUT "Enter the name of a Constellation"; FIND.CONS$
3100 GOSUB 3760  'To make sure that the first letter is capitalized
3110 REM search for the constellation
3120 FOR K = 1 TO R
3130  IF LEFT$(SN$(K),5) = "Alpha" AND LEFT$(CON$(K),LEN(FIND.CONS$)) = FIND.CONS$ THEN GOSUB 3170
3140 NEXT K
3150 IF RC = 1 THEN LOCATE 22,1 : PRINT "Unable to locate the constellation as named." : GOTO 3080
3160 GOTO 4170  'For matrix multiply
3170  REM found the star or constellation
3180  REM construct the first transform
3190  GOSUB 4100  'For the identity matrix
3200  IF OP(K,2) > 0 AND OP(K,3) = 0 THEN ALPHA = PI/2 : GOTO 3260
3210  IF OP(K,2) < 0 AND OP(K,3) = 0 THEN ALPHA = (3*PI)/2 : GOTO 3260
3220  ALPHA = ATN(ABS(OP(K,2)/OP(K,3)))
3230  IF OP(K,2) < 0 AND OP(K,3) < 0 THEN ALPHA = ALPHA + PI
3240  IF OP(K,2) < 0 AND OP(K,3) > 0 THEN ALPHA = 2 * PI - ALPHA
3250  IF OP(K,2) > 0 AND OP(K,3) < 0 THEN ALPHA =  PI - ALPHA
3260  TF(2,2) = COS(ALPHA)
3270  TF(3,3) = TF(2,2)
3280  TF(2,3) = SIN(ALPHA)
3290  TF(3,2) = -TF(2,3)
3300  REM move to first transform
3310  FOR I = 1 TO 4
3320   FOR J = 1 TO 4
3330    T1(I,J) = TF(I,J)
3340   NEXT J
3350  NEXT I
3360  REM now construct the second transform
3370  GOSUB 4100  'for the identity matrix
3380  IF OP(K,4) > 0 AND OP(K,3) = 0 THEN BETA = PI/2 : GOTO 3420
3390  IF OP(K,4) < 0 AND OP(K,3) = 0 THEN BETA = (3*PI)/2 : GOTO 3420
3400  BETA = ATN(ABS(OP(K,4)/(SQR((OP(K,2)^2)+OP(K,3)^2))))
3410  IF OP(K,4) < 0 THEN BETA = 2 * PI - BETA
3420  TF(3,3) = COS(BETA)
3430  TF(4,4) = TF(3,3)
3440  TF(3,4) = -SIN(BETA)
3450  TF(4,3) = -TF(3,4)
3460  REM move to second transform
3470  FOR I = 1 TO 4
3480   FOR J = 1 TO 4
3490    T2(I,J) = TF(I,J)
3500   NEXT J
3510  NEXT I
3520  REM now construct the real transform
3530  FOR I = 1 TO 4
3540   FOR J = 1 TO 4
3550    T = 0
3560    FOR L = 1 TO 4
3570     T = T + T1(I,L) * T2(L,J)
3580    NEXT L
3590    TF(I,J) = T
3600   NEXT J
3610  NEXT I
3620 REM now ready to plot the located star or constellation.
3630 RC = 0 : K = R
3640 RETURN
3650 REM Routine to locate a Star by its common name
3660 CLS : RC = 1
3670 LOCATE 23,1 : PRINT SPACE$(79);
3680 LOCATE 23,1 : INPUT "Enter the name of a Star"; FIND.STAR$
3690 GOSUB 3760  'To make sure that the first letter is capitalized
3700 REM search for the star
3710 FOR K = 1 TO R
3720  IF LEFT$(CN$(K),LEN(FIND.STAR$)) = FIND.STAR$ THEN GOSUB 3170
3730 NEXT K
3740 IF RC = 1 THEN LOCATE 22,1 : PRINT "Unable to locate the star as named." : GOTO 3670
3750 GOTO 4170  'For matrix multiply
3760 REM Routine to capitalize the first letter of the star or constellation
3770 IF AC = 3 THEN 3810  'For a Constellation
3780 IF MID$(FIND.STAR$,2,1) = " " THEN 3800
3790 IF ASC(MID$(FIND.STAR$,1,1)) > 96 AND ASC(MID$(FIND.STAR$,1,1)) < 123 THEN MID$(FIND.STAR$,1,1) = RIGHT$(CHR$(ASC(MID$(FIND.STAR$,1,1))-32),1)
3800 GOTO 3820
3810 IF ASC(MID$(FIND.CONS$,1,1)) > 96 AND ASC(MID$(FIND.CONS$,1,1)) < 123 THEN MID$(FIND.CONS$,1,1) = RIGHT$(CHR$(ASC(MID$(FIND.CONS$,1,1))-32),1)
3820 RETURN
3830 REM Routine to locate a Star by its Scientific name
3840 CLS : RC = 1
3850 LOCATE 23,1 : PRINT SPACE$(79);
3860 LOCATE 23,1 : INPUT "Enter the name of a Star"; FIND.STAR$
3870 GOSUB 3760  'To make sure that the first letter is capitalized
3880 REM search for the star
3890 FOR K = 1 TO R
3900  IF LEFT$(SN$(K),LEN(FIND.STAR$)) = FIND.STAR$ THEN GOSUB 3170
3910 NEXT K
3920 IF RC = 1 THEN LOCATE 22,1 : PRINT "Unable to locate the star as named." : GOTO 3850
3930 GOTO 4170  'For matrix multiply
3940 REM Plotting subprogram
3950 IF XTOPLOT > 0.32 OR XTOPLOT < -0.32 THEN 4090
3960 IF YTOPLOT < 0 THEN 4090
3970 IF ZTOPLOT > 0.2 OR ZTOPLOT < -0.2 THEN 4090
3980 REM Calculate the position
3990 XP = 40 + INT(39*(XTOPLOT/0.32))
4000 ZP = 24 - (12 + INT(11 * (ZTOPLOT/0.2)))
4010 LOCATE ZP,XP
4020 REM Determine the character to plot
4030 STAR$ = CHR$(64)                           ' @
4040 IF MA(I) > 0.9899999 THEN STAR$ = CHR$(42)  ' *
4050 IF MA(I) > 1.99 THEN STAR$ = CHR$(43)      ' +
4060 IF MA(I) > 2.99 THEN STAR$ = CHR$(46) : COLOR 23  ' . (blinking)
4070 IF SCREEN(ZP,XP) <> 32 THEN COLOR 7 : GOTO 4090
4080 PRINT STAR$; : COLOR 7  'Return to normal
4090 RETURN
4100 REM Routine to produce an identity matrix
4110 FOR I = 1 TO 4
4120  FOR J = 1 TO 4
4130   IF I = J THEN TF(I,J) = 1 ELSE TF(I,J) = 0
4140  NEXT J
4150 NEXT I
4160 RETURN
4170 REM Routine to transform the array
4180 CLS
4190 FOR I = 1 TO R
4200  FOR J = 2 TO 4
4210   T = 0
4220   FOR K = 1 TO 4
4230    T = T + OP(I,K) * TF(K,J)
4240   NEXT K
4250   RP(1,J) = T
4260  NEXT J
4270  REM Now plot the new point
4280  XTOPLOT = RP(1,2)
4290  YTOPLOT = RP(1,3)
4300  ZTOPLOT = RP(1,4)
4310  GOSUB 3940  'plotting subprogram
4320  REM See if the name is wanted
4330  IF AC < 4 OR AC > 5 THEN 4520
4340  IF XTOPLOT > 0.32 OR XTOPLOT < -0.32 THEN 4520
4350  IF YTOPLOT < 0 THEN 4520
4360  IF ZTOPLOT > 0.2 OR ZTOPLOT < -0.2 THEN 4520
4370  IF MA(I) > UM THEN 4520
4380  IF REPLY = 1 THEN PART.NAME$ = CN$(I)
4390  IF REPLY = 2 THEN PART.NAME$ = SN$(I)
4400  XP = XP + 1  'star just plotted
4410  IF XP > 79 THEN 4520
4420  REM print a character at a time
4430  FOR PPP = 1 TO LEN(PART.NAME$)
4440   REM test for something there
4450   IF SCREEN(ZP,XP) <> 32 THEN 4490 'skip if present
4460   COLOR 2
4470    LOCATE ZP,XP : PRINT MID$(PART.NAME$,PPP,1);
4480   COLOR 7
4490   XP = XP + 1
4500   IF XP > 79 THEN PPP = LEN(PART.NAME$)
4510  NEXT PPP
4520  REM Copy the transformed point back to the original point
4530  FOR J = 2 TO 4
4540   OP(I,J) = RP(1,J)
4550  NEXT J
4560 NEXT I
4570 REM Back to next user action
4580 GOTO 1470
4590 '
5000 REM Data Area
5010 DATA -1.46,Canis Major,Alpha Canis Majoris,Sirius,6,45.1,-16,43
5020 DATA -0.72,Carina,Alpha Carinae,Canopus,6,24.0,-52,42
5030 DATA -0.04,Bootes,Alpha Bootis,Arcturus,14,15.6,19,11
5040 DATA 0.00,Centaurus,Alpha Centauri,Rigil Kentaurus,14,39.6,-60,50
5050 DATA 0.03,Lyra,Alpha Lyrae,Vega,18,37.0,38,47
5060 DATA 0.08,Auriga,Alpha Aurigae,Capella,5,16.7,46,00
5070 DATA 0.12,Orion,Beta Orionis,Rigel,5,14.5,-8,12
5080 DATA 0.38,Canis Minor,Alpha Canis Minoris,Procyon,7,39.3,5,13
5090 DATA 0.50,Orion,Alpha Orionis,Betelgeuse,5,55.2,7,24
5100 DATA 0.46,Eridanus,Alpha Eridani,Achernar,1,37.7,-57,14
5110 DATA 0.61,Centaurus,Beta Centauri,Hadar,14,3.7,-60,22
5120 DATA 0.77,Aquila,Alpha Aquilae,Altair,19,50.7,8,52
5130 DATA 0.86,Taurus,Alpha Tauri,Aldebaran,4,36.0,16,31
5140 DATA 0.98,Virgo,Alpha Virginis,Spica,13,25.2,-11,10
5150 DATA 0.96,Scorpius,Alpha Scorpii,Antares,16,29.4,-26,26
5160 DATA 1.16,Piscis Austrinus,Alpha Piscis Austrini,Formalhaut,22,57.6,-29,3
5170 DATA 1.14,Gemini,Beta Geminorum,Pollux,7,45.3,28,02
5180 DATA 1.25,Cygnus,Alpha Cygni,Deneb,20,41.4,45,17
5190 DATA 1.28,Crux,Beta Crucis,Mimosa,12,47.7,-59,41
5200 DATA 1.35,Leo,Alpha Leonis,Regulus,10,8.4,11,58
5210 DATA 1.41,Crux,Alpha Crucis1,Acrux,12,26.6,-63,06
5220 DATA 1.88,Crux,Alpha Crucis2,Acrux,12,26.6,-62,06
5230 DATA 1.50,Canis Major,Epsilon Canis Majoris,Adhara,6,58.6,-28,58
5240 DATA 1.63,Scorpius,Lambda Scorpii,Shaula,17,33.6,-37,6
5250 DATA 1.64,Orion,Gamma Orionis,Bellatrix,5,25.1,6,21
5260 DATA 1.65,Taurus,Beta Tauri,Elnath,5,26.3,28,36
5270 DATA 1.68,Carina,Beta Carinae,Miaplacidus,9,13.2,-69,43
5280 DATA 1.63,Crux,Gamma Crucis,Gacrux,12,31.2,-57,07
5290 DATA 1.70,Orion,Epsilon Orionis,Alnilam,5,36.2,-1,12
5300 DATA 1.74,Grus,Alpha Gruis,"Al Na'ir",22,8.2,-46,58
5310 DATA 1.77,Orion,Zeta Orionis,Alnitak,5,40.8,-1,57
5320 DATA 1.77,Ursa Major,Epsilon Ursae Majoris,Alioth,12,54.0,55,58
5330 DATA 1.80,Perseus,Alpha Persei,Mirfak,3,24.3,49,52
5340 DATA 1.85,Sagittarius,Epsilon Sagittarii,Kaus Australis,18,24.2,-34,25
5350 DATA 1.79,Ursa Major,Alpha Ursae Majoris,Dubhe,11,3.7,61,45
5360 DATA 1.78,Vela,Gamma Velorum,"",8,9.5,-47,20
5370 DATA 1.86,Canis Major,Delta Canis Majoris,"",7,8.4,-26,24
5380 DATA 1.90,Auriga,Beta Aurigae,Menkalinan,5,59.5,44,57
5390 REM Double Star
5400 DATA 1.87,Scorpius,Theta Scorpii,"",17,37.3,-43,00
5410 DATA 1.86,Ursa Major,Eta Ursae Majoris,Alkaid,13,47.5,49,19
5420 DATA 1.86,Carina,Epsilon Carinae,Avior,8,22.5,-59,31
5430 DATA 1.93,Gemini,Gamma Geminorum,Alhena,6,37.7,16,24
5440 DATA 1.92,Triangulum Australe,Alpha Trianguli Australis,Atria,16,48.7,-69,02
5450 DATA 1.96,Vela,Delta Velorum,"",8,44.7,-54,43
5460 DATA 1.94,Pavo,Alpha Pavonis,Peacock,20,25.6,-56,44
5470 DATA 1.98,Canis Major,Beta Canis Majoris,Mirzam,6,22.7,-17,57
5480 DATA 1.58,Gemini,Alpha Geminorum,Castor,7,34.6,31,53
5490 DATA 1.98,Hydra,Alpha Hydrae,Alphard,9,27.6,-8,40
5500 DATA 2.02,Ursa Minor,Alpha Ursae Minoris,Polaris,2,31.8,89,52
5510 DATA 2.28,Leo,Gamma Leonis,Algeiba,10,20.0,19,51
5520 DATA 2.00,Aries,Alpha Arietis,Hamal,2,7.2,23,28
5530 DATA 3.04,Cetus,Omicron Ceti,Mira,2,19.3,-2,59
5540 DATA 2.02,Cetus,Beta Ceti,Deneb Kaitos,0,43.6,-17,59
5550 DATA 2.06,Andromeda,Beta Andromedae,Mirach,1,9.8,35,37
5560 DATA 2.06,Centaurus,Theta Centauri,Menkent,14,6.7,-36,22
5570 DATA 2.12,Perseus,Beta Persei,Algol,3,8.2,40,57
5580 DATA 2.06,Andromeda,Alpha Andromedae,Alpheratz,0,8.4,29,05
5590 DATA 2.06,Orion,Kappa Orionis,Saiph,5,47.8,-9,40
5600 DATA 2.08,Ursa Minor,Beta Ursae Minoris,Kochab,14,50.7,74,09
5610 DATA 2.08,Ophiuchus,Alpha Ophiuchi,Rasalhague,17,35.0,12,34
5620 DATA 2.02,Sagittarius,Sigma Sagittarii,Nunki,18,55.2,-26,18
5630 DATA 2.18,Andromeda,Gamma Andromedae,Almach,2,3.9,42,20
5640 DATA 2.14,Leo,Beta Leonis,Denebola,11,49.0,14,34
5650 DATA 2.17,Centaurus,Gamma Centauri,"",12,41.5,-48,58
5660 DATA 2.11,Grus,Beta Gruis,"",22,42.7,-46,53
5670 DATA 2.23,Orion,Delta Orionis,Mintaka,5,32.0,0,-17
5680 DATA 2.23,Draco,Gamma Draconis,Eltanin,17,56.6,51,29
5690 DATA 2.23,Cassiopeia,Alpha Cassiopeiae,Schedar,0,40.5,56,32
5700 DATA 2.20,Cygnus,Gamma Cygni,Sadr,20,22.2,40,15
5710 DATA 2.25,Puppis,Zeta Puppis,"",8,3.6,-40,00
5720 DATA 2.23,Corona Borealis,Alpha Coronae Borealis,Alphecca,15,34.7,26,43
5730 DATA 2.21,Vela,Lambda Velorum,"",9,8.0,-43,26
5740 DATA 2.25,Carina,Iota Carinae,Aspidiske,9,17.1,-59,17
5750 DATA 2.27,Cassiopeia,Beta Cassiopeiae,Caph,0,9.2,59,09
5760 DATA 2.27,Ursa Major,Zeta Ursae Majoris,Mizar,13,23.9,54,55
5770 DATA 2.29,Scorpius,Epsilon Scorpii,"",16,50.3,-34,18
5780 DATA 2.30,Lupus,Alpha Lupi,"",14,41.9,-47,23
5790 DATA 2.30,Centaurus,Epsilon Centauri,"",13,39.9,-53,28
5800 DATA 2.32,Scorpius,Delta Scorpii,"",16,00.3,-22,37
5810 DATA 2.37,Ursa Major,Beta Ursae Majoris,Merak,11,1.8,56,23
5820 DATA 2.37,Bootes,Epsilon Bootis,Izar,14,45.0,27,04
5830 DATA 2.38,Pegasus,Epsilon Pegasi,Enif,21,44.2,9,53
5840 DATA 2.41,Scorpius,Kappa Scorpii,"",17,42.5,-39,02
5850 DATA 2.31,Centaurus,Eta Centauri,"",14,35.5,-42,09
5860 DATA 2.39,Phoenix,Alpha Phoenicis,Ankaa,0,26.3,-42,18
5870 DATA 2.43,Ophiuchus,Eta Ophiuchi,Sabik,17,10.4,-15,44
5880 DATA 2.44,Ursa Major,Gamma Ursae Majoris,Phecda,11,53.8,53,42
5890 DATA 2.44,Cepheus,Alpha Cephei,Alderamin,21,18.6,62,35
5900 DATA 2.44,Canis Major,Eta Canis Majoris,Aludra,7,24.1,-29,18
5910 DATA 2.46,Cygnus,Epsilon Cygni,"",20,46.2,33,58
5920 DATA 2.50,Vela,Kappa Velorum,"",9,22.1,-55,01
5930 DATA 2.47,Cassiopeia,Gamma Cassiopeiae,"",0,56.7,60,43
5940 DATA 2.42,Pegasus,Beta Pegasi,Scheat,23,3.8,28,05
5950 DATA 2.49,Pegasus,Alpha Pegasi,Markab,23,2.8,15,12
5960 DATA 2.53,Cetus,Alpha Ceti,Menkar,3,2.3,4,05
5970 DATA 2.55,Centaurus,Zeta Centauri,"",13,55.5,-47,17
5980 DATA 2.56,Leo,Delta Leonis,Zosma,11,14.1,20,31
5990 DATA 2.56,Ophiuchus,Zeta Ophiuchi,"",16,37.2,-10,34
6000 DATA 2.58,Lepus,Alpha Leporis,Arneb,5,32.7,-17,49
6010 DATA 2.60,Centaurus,Delta Centauri,"",12,8.4,-50,43
6020 DATA 2.59,Corvus,Gamma Corvi,Gienah,12,15.8,-17,33
6030 DATA 2.59,Sagittarius,Zeta Sagittarii,Ascella,19,2.6,-29,53
6040 DATA 2.61,Libra,Beta Librae,Zubeneschamali,15,17.0,-9,23
6050 DATA 2.64,Columba,Alpha Columbae,Phact,5,39.6,-34,4
6060 DATA 2.64,Aries,Beta Arietis,Sheratan,1,54.6,20,48
6070 DATA 2.62,Auriga,Theta Aurigae,"",5,59.7,37,13
6080 DATA 2.65,Serpens,Alpha Serpentis,Unukalhai,15,44.3,6,26
6090 DATA 2.64,Scorpius,Beta Scorpii,Graffias,16,5.4,-19,48
6100 DATA 2.68,Corvus,Beta Corvi,"",12,34.4,-23,24
6110 DATA 2.68,Cassiopeia,Delta Cassiopeiae,Ruchbah,1,25.8,60,14
6120 DATA 2.69,Vela,Mu Velorum,"",10,46.8,-49,25
6130 DATA 2.69,Auriga,Iota Aurigae,"",4,57.0,33,10
6140 DATA 2.68,Bootes,Eta Bootis,Muphrid,13,54.7,18,24
6150 DATA 2.68,Lupus,Beta Lupi,"",14,58.5,-43,8
6160 DATA 2.69,Musca,Alpha Muscae,"",12,37.2,-69,8
6170 DATA 2.70,Puppis,Pi Puppis,"",7,17.1,-37,6
6180 DATA 2.74,Draco,Eta Draconis,"",16,24.0,61,31
6190 DATA 2.69,Scorpius,Upsilon Scorpii,Lesath,17,30.8,-37,18
6200 DATA 2.70,Sagittarius,Delta Sagittarii,Kaus Media,18,21.0,-29,50
6210 DATA 2.74,Ophiuchus,Delta Ophiuchi,Yed Prior,16,14.3,-3,42
6220 DATA 2.72,Aquila,Gamma Aquilae,Tarazed,19,46.3,10,37
6230 DATA 2.76,Carina,Theta Carinae,"",10,43.0,-64,24
6240 DATA 2.76,Orion,Iota Orionis,"",5,35.4,-5,55
6250 DATA 2.75,Virgo,Gamma Virginis,Porrima,12,41.7,-01,27
6260 DATA 2.75,Centaurus,Iota Centauri,"",13,20.6,-36,43
6270 DATA 2.75,Libra,Alpha Librae,Zubenelgenubi,14,50.9,-16,03
6280 DATA 2.79,Draco,Beta Draconis,Rastaban,17,30.4,52,18
6290 DATA 2.77,Ophiuchus,Beta Ophiuchi,Cebalrai,17,43.5,4,34
6300 DATA 2.80,Hydrus,Beta Hydri,"",0,25.8,-77,15
6310 DATA 2.77,Hercules,Beta Herculis,Kornephoros,16,30.2,21,29
6320 DATA 2.79,Eridanus,Beta Eridani,Cursa,5,7.7,-5,05
6330 DATA 2.78,Lupus,Gamma Lupi,"",15,35.1,-41,10
6340 DATA 2.81,Sagittarius,Lambda Sagittarii,Kaus Borealis,18,28.0,-25,25
6350 DATA 2.81,Puppis,Rho Puppis,"",8,7.5,-24,18
6360 DATA 2.84,Lepus,Beta Leporis,Nihal,5,28.2,-20,46
6370 DATA 2.80,Crux,Delta Crucis,"",12,15.1,-58,44
6380 DATA 2.81,Hercules,Zeta Herculis,"",16,41.3,31,36
6390 DATA 2.85,Perseus,Zeta Persei,Atik,3,54.1,31,53
6400 DATA 2.83,Virgo,Epsilon Virginis,Vindimeatrix,13,2.2,10,58
6410 DATA 2.83,Pegasus,Gamma Pegasi,Algenib,0,13.2,15,11
6420 DATA 2.86,Hydrus,Alpha Hydri,"",1,58.8,-61,34
6430 DATA 2.85,Triangulum Australe,Beta Trianguli Australis,"",15,55.1,-63,26
6440 DATA 2.82,Scorpius,Tau Scorpii,"",16,35.9,-28,13
6450 DATA 2.87,Taurus,Eta Tauri,Alcyone,3,47.5,24,6
6460 DATA 2.89,Scorpius,Sigma Scorpii,"",16,21.2,-25,36
6470 DATA 2.91,Aquarius,Beta Aquarii,Saladsuud,21,31.6,-05,34
6480 DATA 2.87,Cygnus,Delta Cygni,"",19,45.0,45,08
6490 DATA 2.86,Tucana,Alpha Tucanae,"",22,18.5,-60,16
6500 DATA 2.89,Perseus,Epsilon Persei,"",3,57.9,40,01
6510 DATA 2.89,Triangulum Australe,Gamma Trianguli Australis,"",15,18.9,-68,41
6520 DATA 2.89,Sagittarius,Pi Sagittarii,"",19,9.8,-21,2
6530 DATA 2.90,Canes Venatici,Alpha Canum Venaticorum,Cor Caroli,12,56.2,38,19
6540 DATA 2.85,Ara,Beta Arae,"",17,25.3,-55,32
6550 DATA 2.93,Perseus,Gamma Persei,"",3,4.8,53,30
6560 DATA 2.90,Canis Minor,Beta Canis Minoris,Gomeisa,7,27.2,8,17
6570 DATA 2.88,Gemini,Mu Geminorum,"",6,23.0,22,31
6580 DATA 2.93,Puppis,Tau Puppis,"",6,49.9,-50,37
6590 DATA 2.89,Scorpius,Pi Scorpii,"",15,58.9,-26,07
6600 DATA 3.24,Eridanus,Theta Eridani,Acamar,2,58.3,-40,18
6610 DATA 2.87,Capricornus,Delta Capricorni,Deneb Algedi,21,47.0,-16,08
6620 DATA 2.96,Aquarius,Alpha Aquarii,Sadalmelik,22,5.8,00,-19
6630 REM Double Star
6640 DATA 2.97,Carina,Upsilon Carinae,"",9,47.1,-64,04
6650 DATA 2.95,Ara,Alpha Arae,"",17,31.8,-49,53
6660 DATA 2.94,Pegasus,Eta Pegasi,Matar,22,43.0,30,13
6670 DATA 2.95,Eridanus,Gamma Eridani,Zaurak,3,58.0,-13,31
6680 DATA 2.95,Corvus,Delta Corvi,Algorab,12,29.9,-16,31
6690 DATA 2.99,Sagittarius,Gamma Sagittarii,Alnasl,18,5.8,-30,25
6700 DATA 3.00,Hydra,Gamma Hydrae,"",13,18.9,-23,10
6710 DATA 2.98,Leo,Epsilon Leonis,"",9,45.9,23,46
6720 DATA 3.04,Scorpius,Mu Scorpii,"",16,51.9,-38,3
6730 DATA 2.99,Aquila,Zeta Aquilae,"",19,5.4,13,52
6740 DATA 3.00,Triangulum,Beta Trianguli,"",2,9.5,34,59
6750 DATA 2.99,Auriga,Epsilon Aurigae,"",5,2.0,43,49
6760 DATA 2.98,Gemini,Epsilon Geminorum,Mebsuta,6,43.9,25,8
6770 DATA 3.01,Ursa Major,Psi Ursae Majoris,"",11,9.7,44,30
6780 DATA 3.00,Corvus,Epsilon Corvi,"",12,10.1,-22,37
6790 DATA 3.01,Grus,Gamma Gruis,"",21,53.9,-37,22
6800 DATA 3.03,Canis Major,Omicron Canis Majoris,"",7,3.0,-23,50
6810 DATA 3.03,Scorpius,Iota Scorpii,"",17,47.6,-40,8
6820 DATA 3.01,Perseus,Delta Persei,"",3,42.9,47,47
6830 DATA 3.02,Canis Major,Zeta Canis Majoris,"",6,20.3,-30,4
6840 DATA 3.05,Ursa Minor,Gamma Ursae Minoris,Pherkad,15,20.7,71,50
6850 DATA 3.05,Ursa Major,Mu Ursae Majoris,Tania Australis,10,22.3,41,30
6860 DATA 3.03,Bootes,Gamma Bootis,Seginus,14,32.1,38,19
6870 DATA 3.05,Musca,Beta Muscae,"",12,46.3,-68,6
6880 DATA 3.07,Draco,Delta Draconis,Altais,19,12.6,67,40
6890 DATA 3.08,Capricornus,Beta Capricorni,Dabih,20,21.0,-14,47
6900 DATA 3.00,Taurus,Zeta Tauri,"",5,37.6,21,9
6910 DATA 3.08,Cygnus,Beta Cygni,Albireo,19,30.7,27,58
6920 DATA 3.19,Hercules,Alpha Herculis,Rasalgethi,17,14.6,14,23
6930 DATA 3.11,Indis,Alpha Indi,"",20,37.6,-47,17
6940 DATA 3.11,Hydra,Zeta Hydrae,"",8,55.4,5,57
6950 DATA 3.12,Columba,Beta Columbae,"",5,50.9,-35,46
6960 DATA 3.17,Ursa Major,Theta Ursae Majoris,"",9,32.9,51,41
6970 DATA 3.11,Hydra,Nu Hydrae,"",10,49.6,-16,12
6980 DATA 3.04,Centaurus,Mu Centauri,"",13,49.7,-42,28
6990 DATA 3.13,Ara,Zeta Arae,"",16,58.6,-55,59
7000 DATA 3.11,Sagittarius,Eta Sagittarii,"",18,17.6,-36,46
7010 DATA 3.14,Ursa Major,Iota Ursae Majoris,"",8,59.2,48,2
7020 DATA 3.16,Hercules,Pi Herculis,"",17,15.0,36,49
7030 DATA 3.14,Hercules,Delta Herculis,"",17,15.0,24,50
7040 DATA 3.13,Centaurus,Lambda Centauri,"",11,35.8,-63,1
7050 DATA 3.13,Centaurus,Kappa Centauri,"",14,59.2,-42,6
7060 DATA 3.23,Cepheus,Beta Cephei,"",21,28.7,70,34
7070 DATA 3.19,Orion,Pi Orionis,"",4,49.8,6,58
7080 DATA 3.17,Auriga,Eta Aurigae,"",5,6.5,41,14
7090 DATA 3.13,Lynx,Alpha Lyncis,"",9,21.1,34,24
7100 DATA 3.19,Circinus,Alpha Circini,"",14,42.5,-64,58
7110 DATA 3.20,Ophiuchus,Kappa Ophiuchi,"",16,57.7,9,23
7120 DATA 3.17,Puppis,Nu Puppis,"",6,37.8,-43,12
7130 DATA 3.60,Vela,N Velorum,"",9,30.6,-40,28
7140 DATA 3.20,Cygnus,Zeta Cygni,"",21,12.9,30,14
7150 DATA 3.17,Draco,Zeta Draconis,"",17,8.8,65,43
7160 DATA 3.17,Sagittarius,Phi Sagittarii,"",18,45.7,-26,59
7170 DATA 3.21,Cepheus,Gamma Cephei,"",23,39.3,77,38
7180 DATA 3.19,Lepus,Epsilon Leporis,"",5,5.5,-22,22
7190 DATA 3.22,Lupus,Delta Lupi,"",15,21.4,-40,39
7200 DATA 3.21,Scorpius,G Scorpii,"",17,49.9,-37,3
7210 DATA 3.24,Ophiuchus,Epsilon Ophiuchi,"",16,18.3,-4,42
7220 DATA 3.26,Serpens,Eta Serpentis,"",18,21.3,-2,54
7230 DATA 3.25,Puppis,Sigma Puppis,"",7,29.2,-43,18
7240 DATA 3.23,Aquila,Theta Aquilae,"",20,11.3,0,-49
7250 DATA 3.27,Andromeda,Delta Andromedae,"",0,39.3,30,52
7260 DATA 3.27,Hydra,Pi Hydrae,"",14,6.4,-26,41
7270 DATA 3.24,Lyra,Gamma Lyrae,Sulifat,18,58.9,32,41
7280 DATA 3.27,Pictor,Alpha Pictoris,"",6,48.2,-61,56
7290 DATA 3.27,Dorado,Alpha Doradus,"",4,34.0,-55,3
7300 DATA 3.29,Draco,Iota Draconis,Edasich,15,24.9,58,58
7310 DATA 3.27,Aquarius,Delta Aquarii,Skat,22,54.6,-15,49
7320 DATA 3.31,Lepus,Mu Leporis,"",5,12.9,-16,12
7330 DATA 3.27,Ophiuchus,Theta Ophiuchi,"",17,22.0,-25,00
7340 DATA 3.31,Phoenix,Beta Phoenicis,"",1,6.1,-46,43
7350 DATA 3.24,Hydrus,Gamma Hydri,"",3,47.2,-74,14
7360 DATA 3.32,Carina,p Carinae,"",10,32.0,-61,41
7370 DATA 3.31,Ursa Major,Delta Ursae Majoris,Megrez,12,15.4,57,1
7380 DATA 3.32,Sagittarius,Tau Sagittarii,"",19,6.9,-27,40
7390 DATA 3.29,Libra,Sigma Librae,"",15,4.1,-25,17
7400 DATA 3.36,Orion,Eta Orionis,"",5,24.5,-2,24
7410 DATA 3.34,Ara,Gamma Arae,"",17,25.4,-56,23
7420 DATA 3.34,Ophiuchus,Nu Ophiuchi,"",17,59.0,-9,46
7430 DATA 3.35,Reticulum,Alpha Reticuli,"",4,14.4,-62,28
7440 DATA 3.28,Gemini,Eta Geminorum,Propus,6,14.9,22,30
7450 DATA 3.32,Carina,Omega Carinae,"",10,12.2,-70,02
7460 DATA 3.33,Scorpius,Eta Scorpii,"",17,12.2,-43,14
7470 DATA 3.34,Puppis,Xi Puppis,"",7,49.3,-24,52
7480 DATA 3.34,Leo,Theta Leonis,Chertan,11,14.2,15,26
7490 DATA 3.35,Cepheus,Zeta Cephei,"",22,10.9,58,12
7500 DATA 3.38,Cassiopeia,Epsilon Cassiopeiae,"",1,54.4,63,40
7510 DATA 3.37,Virgo,Zeta Virginis,"",13,34.7,0,-35
7520 DATA 3.36,Ursa Major,Omicron Ursae Majoris,Muscida,8,30.3,60,43
7530 DATA 3.36,Gemini,Xi Geminorum,"",6,45.3,12,54
7540 DATA 3.45,Lyra,Beta Lyrae,Sheliak,18,50.1,33,22
7550 DATA 3.36,Aquila,Delta Aquilae,"",19,25.5,3,7
7560 DATA 3.38,Hydra,Epsilon Hydrae,"",8,46.8,6,25
7570 DATA 3.41,Phoenix,Gamma Phoenicis,"",1,28.4,-43,19
7580 DATA 3.39,Orion,Lambda Orionis,"",5,35.1,9,56
7590 DATA 3.41,Lupus,Eta Lupi,"",16,0.1,-38,23
7600 DATA 3.40,Pegasus,Zeta Pegasi,Homam,22,41.5,10,50
7610 DATA 3.40,Carina,q Carinae,q Car,10,17.1,-61,20
7620 DATA 3.43,Cepheus,Eta Cephei,"",20,45.3,61,50
7630 DATA 3.41,Triangulum,Alpha Trianguli,"",1,53.1,29,35
7640 DATA 3.42,Taurus,Theta Tauri,"",4,28.7,15,52
7650 DATA 3.41,Centaurus,Nu Centauri,"",13,49.5,-41,41
7660 DATA 3.41,Lupus,Zeta Lupi,"",15,12.3,-52,6
7670 DATA 3.42,Hercules,Mu Herculis,"",17,46.5,27,43
7680 DATA 3.44,Carina,a Carinae,"",9,11.0,-58,58
7690 DATA 3.45,Cetus,Eta Ceti,"",1,8.6,-10,11
7700 DATA 3.44,Aquila,Lambda Aquilae,"",19,6.2,-4,53
7710 DATA 3.45,Ursa Major,Lambda Ursae Majoris,Tania Borealis,10,17.1,42,55
7720 DATA 3.42,Pavo,Beta Pavonis,"",20,45.0,-66,12
7730 DATA 3.53,Hercules,Eta Herculis,"",16,42.9,38,55
7740 DATA 3.44,Leo,Zeta Leonis,Adhafera,10,16.7,23,25
7750 DATA 3.44,Cassiopeia,Eta Cassiopeiae,"",0,49.1,57,49
7760 DATA 3.47,Bootes,Delta Bootis,"",15,15.5,33,19
7770 DATA 3.47,Cetus,Gamma Ceti,"",2,43.3,3,14
7780 DATA 3.47,Carina,Chi Carinae,"",7,56.8,-52,59
7790 DATA 3.50,Bootes,Beta Bootis,Nekkar,15,1.9,40,23
7800 DATA 3.50,Cetus,Tau Ceti,"",1,44.1,-15,56
7810 DATA 3.39,Perseus,Rho Persei,"",3,5.2,38,50
7820 DATA 3.51,Sagittarius,Xi Sagittarii,"",18,57.7,-21,6
7830 DATA 3.54,Taurus,Epsilon Tauri,"",4,28.6,19,11
7840 DATA 3.75,Cepheus,Delta Cephei,"",22,29.2,58,25
7850 DATA 4.10,Carina,l Carinae,"",9,45.2,-62,30
7860 DATA 999,eof,eof,eof,0,0,0,0
7870 END
```
{% endraw %}

## USERMANU.BAS

{% raw %}
```bas
100 REM Program to produce the User's Manual for Starfinder ON DISPLAY
110 REM All text is in the form of DATA statements.
120 REM Set Printer Characteristics
130 WIDE.ON$     = CHR$(14)          'Set Expanded Print ON
140 WIDE.OFF$    = CHR$(18)          'Set Expanded Print OFF
150 BOLD.ON$     = CHR$(27)+"E"      'Set Emphasized Print ON
160 BOLD.OFF$    = CHR$(27)+"F"      'Set Emphasized Print OFF
170 SQUEEZE.ON$  = CHR$(15)          'Set Compressed Print ON
180 SQUEEZE.OFF$ = CHR$(18)          'Set Compressed Print OFF
190 PAGE.EJECT$  = CHR$(12)          'Skip to Top of Next Page
200 REM Set the Trimming Form
210 DASHES$ = "+"+STRING$(54,45)+"+"
220 TRIM.LINE$ = "(Trim-line)"
230 REM Data for the Title Page and Parameters
240 DATA Starfinder, "Version 2.0, User's Manual", -3, 1
250 READ TITLE$, DOC.NAME$, PAGE.NO, LINE.NO
260 IF PAGE.NO MOD 2 = 0 THEN TAB.POS = 8 ELSE TAB.POS = 13
270 GOSUB 850  'For trim line and heading space
280 FOR I = 1 TO 6 : LPRINT : NEXT I
290 LPRINT WIDE.ON$;  'Set Expanded Print
300 LPRINT TAB(TAB.POS-3);TITLE$
310 LPRINT WIDE.OFF$;  'Return to normal
320 FOR I = 1 TO 3 : LPRINT : NEXT I
330 LPRINT BOLD.ON$;      'Set Emphasized mode
340 LPRINT TAB(TAB.POS+12);"ON DISPLAY"
350 LPRINT BOLD.OFF$;     'Return to normal
360 FOR I = 1 TO 15 : LPRINT : NEXT I
370 LPRINT TAB(TAB.POS+4); DOC.NAME$
380 LINE.NO = LINE.NO + 27
390 '
400 READ REPLY$
410 REM Change any Tilde's to Quotes
420 FOR TILDE = 1 TO LEN(REPLY$)
430  IF MID$(REPLY$,TILDE,1) = "~" THEN MID$(REPLY$,TILDE,1) = CHR$(34)
440 NEXT TILDE
450 IF LEFT$(REPLY$,1) = "." THEN GOSUB 1200: GOTO 400
460 IF LINE.NO > 44 THEN GOSUB 960
470 REM Print the line if not a command
480 LPRINT TAB(TAB.POS);REPLY$
490 LINE.NO = LINE.NO + 1
500 IF PAGE.NO MOD 2 = 0 THEN TAB.POS = 8 ELSE TAB.POS = 13
510 GOTO 400
520 REM Data for the Copyright Page
530 DATA ".pa"
540 DATA "Anyone may request a copy of the Star-"
550 DATA "finder ON DISPLAY program by sending a"
560 DATA "blank, 5-1/4 inch, double-density disk-"
570 DATA "ette to the author."
580 DATA ".sp"
590 DATA "A self-addressed, postage-paid return"
600 DATA "mailer must accompany the diskette"
610 DATA "(no exceptions, please)."
620 DATA ".sp"
630 DATA "The programs and documentation will be"
640 DATA "copied onto the user's diskette and"
650 DATA "returned."
660 DATA ".vt 2"
670 DATA "Users are encouraged to copy and share"
680 DATA "Starfinder ON DISPLAY with others,"
690 DATA "provided that no changes have been made."
700 DATA ".vt 4"
710 DATA "If you are using these programs, and"
720 DATA "finding them of value, your contribu-"
730 DATA "tion ($35 suggested) will be antici-"
740 DATA "pated."
750 DATA ".sp"
760 DATA "Melvin O. Duke."
770 DATA "P.O. Box 20836"
780 DATA "San Jose, CA  95160"
785 DATA "(408) 268-6637"
790 DATA ".vt 2"
800 DATA "Copyright (c) 1985, by:"
810 DATA "Melvin O. Duke"
820 DATA ".sp"
830 DATA "All rights reserved."
840 '
850 REM Top of each page routine
860 IF PAGE.NO MOD 2 = 0 THEN TAB.POS = 8 ELSE TAB.POS = 13
870 LPRINT
880 LPRINT TAB(30); TRIM.LINE$
890 LPRINT DASHES$ 'Dashes
900 FOR I = 1 TO 6
910  LPRINT
920 NEXT I
930 LINE.NO = LINE.NO + 6
940 RETURN
950 '
960 REM Bottom of each page Routine
970 IF PAGE.NO < 1 THEN LPRINT : LPRINT : LPRINT : GOTO 1090
980 LPRINT TAB(TAB.POS); STRING$(40,45)  'on line 46
990 LPRINT TAB(TAB.POS+3); TITLE$+" ON DISPLAY, Version 2.0" 'on line 47
1000 IF PAGE.NO MOD 2 = 1 THEN 1040
1010 LPRINT TAB(TAB.POS);"Page";PAGE.NO;
1020 LPRINT TAB(TAB.POS+27);"User's Manual"
1030 GOTO 1090
1040 LPRINT TAB(TAB.POS); "User's Manual";
1050 IF PAGE.NO < 10 THEN DELTA = 34
1060 IF PAGE.NO >  9 THEN DELTA = 33
1070 IF PAGE.NO > 99 THEN DELTA = 32
1080 LPRINT TAB(TAB.POS+DELTA); "Page"; PAGE.NO  'on line 48
1090 LPRINT : LPRINT : LPRINT
1100 LPRINT DASHES$ 'dashes after 51
1110 LPRINT TAB(30); TRIM.LINE$
1120 LPRINT PAGE.EJECT$;
1130 PAGE.NO = PAGE.NO + 1
1140 LINE.NO = 1
1150 IF REPLY$ = ".eof" THEN 1170  'Bypass after last page
1160 GOSUB 850  'For top of next page
1170 IF PAGE.NO MOD 2 = 0 THEN TAB.POS = 8 ELSE TAB.POS = 13
1180 RETURN
1190 '
1200 REM Command Processor
1210 IF LEFT$(REPLY$,3) = ".h1" THEN 1310
1220 IF LEFT$(REPLY$,3) = ".h2" THEN 1450
1230 IF LEFT$(REPLY$,3) = ".h3" THEN 1560
1240 IF LEFT$(REPLY$,3) = ".sp" THEN 1670
1250 IF LEFT$(REPLY$,4) = ".eof" THEN 1720
1260 IF LEFT$(REPLY$,3) = ".pa" THEN 1760
1270 IF LEFT$(REPLY$,3) = ".vt" THEN 1830
1280 IF LEFT$(REPLY$,3) = ".pk" THEN 1940
1290 IF LEFT$(REPLY$,3) = ".in" THEN 2070
1300 STOP
1310 REM Head 1 Processor
1320 FOR I = LINE.NO TO 44
1330  LPRINT
1340 NEXT I
1350 GOSUB 960  'Bottom of page Routine
1360 IF PAGE.NO MOD 2 = 0 THEN GOSUB 1760  'For h1 on Odd pages
1370 LPRINT WIDE.ON$;  'Set expanded print
1380 IF PAGE.NO MOD 2 = 0 THEN ADJUST = -4 ELSE ADJUST = -7
1390 LPRINT TAB(TAB.POS+ADJUST); RIGHT$(REPLY$,LEN(REPLY$)-4)
1400 LPRINT WIDE.OFF$;  'Return to normal
1410 LINE.NO = LINE.NO+1
1420 IF PAGE.NO MOD 2 = 0 THEN TAB.POS = 8 ELSE TAB.POS = 13
1430 RETURN
1440 '
1450 REM Head 2 Processor
1460 IF LINE.NO = 7 THEN 1480 'skip spacing if at top of page
1470 IF LINE.NO > 43 THEN GOSUB 1760 ELSE LPRINT:LPRINT:LINE.NO = LINE.NO+2
1480 LPRINT BOLD.ON$;  'Set emphasized print
1490 LPRINT TAB(TAB.POS); RIGHT$(REPLY$,LEN(REPLY$)-4)
1500 LPRINT BOLD.OFF$;  'Return to normal
1510 LPRINT
1520 LINE.NO = LINE.NO + 2
1530 IF PAGE.NO MOD 2 = 0 THEN TAB.POS = 8 ELSE TAB.POS = 13
1540 RETURN
1550 '
1560 REM Head 3 Processor
1570 IF LINE.NO = 7 THEN 1590 'skip spacing if at top of page
1580 IF LINE.NO > 43 THEN GOSUB 1760 ELSE LPRINT:LPRINT:LINE.NO = LINE.NO+2
1590 LPRINT BOLD.ON$;  'Set emphasized print
1600 LPRINT TAB(TAB.POS); RIGHT$(REPLY$,LEN(REPLY$)-4)
1610 LPRINT BOLD.OFF$;  'Return to normal
1620 LPRINT
1630 LINE.NO = LINE.NO + 2
1640 IF PAGE.NO MOD 2 = 0 THEN TAB.POS = 8 ELSE TAB.POS = 13
1650 RETURN
1660 '
1670 REM Single Space Processor
1680 IF LINE.NO = 7 THEN 1700
1690 IF LINE.NO > 44 THEN GOSUB 1760 ELSE LPRINT : LINE.NO = LINE.NO + 1
1700 IF PAGE.NO MOD 2 = 0 THEN TAB.POS = 8 ELSE TAB.POS = 13
1710 RETURN
1720 REM End of File Processor
1730 GOSUB 1760 'Bottom of Page
1740 LPRINT PAGE.EJECT$;
1750 GOTO 11860
1760 REM Page Eject Processor
1770 FOR I = LINE.NO TO 44
1780  LPRINT
1790  LINE.NO = LINE.NO + 1
1800 NEXT I
1810 GOSUB 960  'Bottom of Page Processing
1820 RETURN
1830 REM Vertical Tab Processor
1840 IF LINE.NO = 7 THEN 1930
1850 IF LINE.NO > 44 THEN GOSUB 960  'End of page
1860 QTY = VAL(RIGHT$(REPLY$,LEN(REPLY$)-3))
1870 FOR I = 1 TO QTY
1880  LPRINT
1890  LINE.NO = LINE.NO + 1
1900  IF LINE.NO > 44 THEN I = QTY
1910 NEXT I
1920 IF PAGE.NO MOD 2 = 0 THEN TAB.POS = 8 ELSE TAB.POS = 13
1930 RETURN
1940 REM Pack Processor
1950 IF LINE.NO > 44 THEN GOSUB 960
1960 IF TAB.POS = 8 THEN ADJUST = 4
1970 IF TAB.POS = 13 THEN ADJUST = 7
1980 TAB.POS = TAB.POS + ADJUST + INDENT
1990 LPRINT SQUEEZE.ON$;  'Packed printing
2000 WIDTH "lpt1:", 132 'set condensed width
2010 LPRINT TAB(TAB.POS); RIGHT$(REPLY$,LEN(REPLY$)-3)
2020 LPRINT SQUEEZE.OFF$;  'Return to normal
2030 WIDTH "lpt1:", 80  'return to normal
2040 LINE.NO = LINE.NO + 1
2050 IF PAGE.NO MOD 2 = 0 THEN TAB.POS = 8 ELSE TAB.POS = 13
2060 RETURN
2070 REM Indent Processor
2080 INDENT = VAL(RIGHT$(REPLY$,LEN(REPLY$)-3))
2090 RETURN
2100 DATA ".h1 TABLE OF CONTENTS"
2110 DATA ".sp"
2120 DATA "INTRODUCTION - - - - - - - - - - - -   1"
2130 DATA "  OVERVIEW - - - - - - - - - - - - -   1"
2140 DATA "  CAPABILITIES - - - - - - - - - - -   2"
2150 DATA "  BENEFITS/ADVANTAGES  - - - - - - -   3"
2160 DATA "  RESULTS  - - - - - - - - - - - - -   3"
2170 DATA "  REQUIREMENTS - - - - - - - - - - -   4"
2180 DATA "    Hardware Requirements  - - - - -   4"
2190 DATA "    Software Requirements  - - - - -   4"
2200 DATA ".sp"
2210 DATA "GENERAL INFORMATION  - - - - - - - -   5"
2220 DATA "  DESCRIPTION OF FUNCTIONS - - - - -   5"
2230 DATA "    Find a Star by its Common Name -   6"
2240 DATA "    Find a Star by its Scientific"
2250 DATA "      Name - - - - - - - - - - - - -  10"
2260 DATA "    Find a Constellation by its"
2270 DATA "      Name - - - - - - - - - - - - -  18"
2280 DATA "    Print the Common Names of the"
2290 DATA "      Stars  - - - - - - - - - - - -  20"
2300 DATA "    Print the Scientific Names of"
2310 DATA "      the Stars  - - - - - - - - - -  21"
2320 DATA "    Move the Stars Farther Apart - -  22"
2330 DATA "    Move the Stars Closer Together -  22"
2340 DATA "    Move the Stars to the Left - - -  23"
2350 DATA "    Move the Stars to the Right  - -  23"
2360 DATA "    Move the Stars Up  - - - - - - -  24"
2370 DATA "    Move the Stars Down  - - - - - -  24"
2380 DATA "    Rotate the Stars Clockwise - - -  25"
2390 DATA "    Rotate the Stars"
2400 DATA "      Counter-clockwise  - - - - - -  25"
2410 DATA "    Quit - - - - - - - - - - - - - -  25"
2420 DATA "  DEFINITION OF TERMS  - - - - - - -  26"
2430 DATA "  EXPLANATION OF GENERAL CONCEPTS  -  27"
2440 DATA ".pa"
2450 DATA "USING THE PROGRAM  - - - - - - - - -  29"
2460 DATA "  FIRST TIME USAGE - - - - - - - - -  29"
2470 DATA "  GETTING STARTED  - - - - - - - - -  29"
2480 DATA "  HOW TO OPERATE - - - - - - - - - -  31"
2490 DATA "  HOW TO STOP  - - - - - - - - - - -  31"
2500 DATA "  WHAT TO DO WHEN YOU GET AN"
2510 DATA "       ERROR MESSAGE - - - - - - - -  32"
2520 DATA ".sp"
2530 DATA "REFERENCE MATERIAL - - - - - - - - -  33"
2540 DATA "  SAMPLE SCREENS AND PROMPTING"
2550 DATA "       MESSAGES  - - - - - - - - - -  33"
2560 DATA "  COMMANDS USED  - - - - - - - - - -  40"
2570 DATA ".sp"
2580 DATA "APPENDIX A.  MESSAGES  - - - - - - -  41"
2590 DATA "  START-UP MESSAGES  - - - - - - - -  41"
2600 DATA "  MESSAGES WHILE RUNNING"
2610 DATA "      THE PROGRAM  - - - - - - - - -  42"
2620 DATA ".sp"
2630 DATA "TERMS AND CONDITIONS - - - - - - - -  45"
2640 DATA "  Terms  - - - - - - - - - - - - - -  45"
2650 DATA "  Conditions - - - - - - - - - - - -  46"
2660 DATA "  Disclaimer - - - - - - - - - - - -  46"
2670 REM Introduction
2680 DATA ".h1 INTRODUCTION"
2690 DATA ".h2 OVERVIEW"
2700 DATA "The Starfinder ON DISPLAY program"
2710 DATA "permits a user to view the stars in any"
2720 DATA "portion of the sky, to change the view"
2730 DATA "whenever he desires, to see the names"
2740 DATA "of the stars, as well as the stars"
2750 DATA "themselves, and to locate any star or"
2760 DATA "constellation in the sky upon command."
2770 DATA ".sp"
2780 DATA "In the privacy of his room, and using"
2790 DATA "his Personal Computer, the user can"
2800 DATA "look at a 'window in the sky', view the"
2810 DATA "stars within that window, and change"
2820 DATA "the view whenever he so desires,"
2830 DATA "perhaps by zooming in on a particular"
2840 DATA "part of the sky, or by rotating the"
2850 DATA "stars to another orientation."
2860 DATA ".sp"
2870 DATA "He is able to see stars which he might"
2880 DATA "never have seen before (such as those"
2890 DATA "only seen in the southern hemisphere)."
2900 DATA ".sp"
2910 DATA "His view is unrestricted, as if the"
2920 DATA "horizon did not exist."
2930 DATA ".pa"
2940 DATA ".h2 CAPABILITIES"
2950 DATA "When Starfinder ON DISPLAY begins, an"
2960 DATA "initial view of a portion of the sky is"
2970 DATA "shown (including the Constellation"
2980 DATA "Orion)."
2990 DATA ".sp"
3000 DATA "For this view, and for all subsequent"
3010 DATA "views, the stars appear as they would"
3020 DATA "in the early evening, with the bright-"
3030 DATA "est stars showing first, followed by"
3040 DATA "the less-bright stars."
3050 DATA ".sp"
3060 DATA "After the completion of each view, the"
3070 DATA "user has the following options for the"
3080 DATA "next view of the stars:"
3090 DATA ".sp"
3100 DATA " 1.  Find a Star by its Common Name."
3110 DATA " 2.  Find a Star by its Scientific Name."
3120 DATA " 3.  Find a Constellation by its Name."
3130 DATA " 4.  Print the Common Names of the Stars."
3140 DATA " 5.  Print the Scientific Names of the"
3150 DATA "     stars."
3160 DATA " 6.  Move the stars farther apart."
3170 DATA " 7.  Move the stars closer together."
3180 DATA " 8.  Move the stars to the left."
3190 DATA " 9.  Move the stars to the right."
3200 DATA "10.  Move the stars up."
3210 DATA "11.  Move the stars down."
3220 DATA "12.  Rotate the stars clockwise."
3230 DATA "13.  Rotate the stars counter-clockwise."
3240 DATA "14.  Quit."
3250 DATA ".pa"
3260 DATA ".h2 BENEFITS/ADVANTAGES"
3270 DATA "Highly educational in nature."
3280 DATA ".sp"
3290 DATA "Permits daytime viewing as well as"
3300 DATA "nighttime viewing."
3310 DATA ".sp"
3320 DATA "The user's view is not diminished by"
3330 DATA "weather (clouds), by the presence of a"
3340 DATA "bright moon, or by nearby lights."
3350 DATA ".sp"
3360 DATA "Star-names are available upon demand."
3370 DATA ".sp"
3380 DATA "The user has the ability to move a"
3390 DATA "particular star to the center of the"
3400 DATA "viewing area."
3410 DATA ".h2 RESULTS"
3420 DATA "The results are the views of the stars"
3430 DATA "upon the screen of the user of the"
3440 DATA "Starfinder ON DISPLAY program.  These"
3450 DATA "views, with star-names (if desired)"
3460 DATA "can provide the user with a facility"
3470 DATA "that he can achieve in no other way."
3480 DATA ".pa"
3490 DATA ".h2 REQUIREMENTS"
3500 DATA ".h3 Hardware Requirements."
3510 DATA ".sp"
3520 DATA "IBM PC (from the PCjr Upward), or"
3530 DATA "Compatible Personal Computer, with:"
3540 DATA ".sp"
3550 DATA "   At least one diskette drive."
3560 DATA ".sp"
3570 DATA "   IBM Graphics Printer (or equiva-"
3580 DATA "   lent, for printing documentation)."
3590 DATA ".sp"
3600 DATA "   At least 96 K of Storage."
3610 DATA ".sp"
3620 DATA "   80 Character Display (either Color"
3630 DATA "   or Monochrome)."
3640 DATA ".vt 2"
3650 DATA ".h3 Software Requirements."
3660 DATA ".sp"
3670 DATA "IBM PC-DOS (or equivalent)."
3680 DATA ".sp"
3690 DATA "PC-BASIC (on Diskette or Cartridge),"
3700 DATA "(or equivalent)."
3710 DATA ".h1 GENERAL INFORMATION"
3720 DATA ".h2 DESCRIPTION OF FUNCTIONS"
3730 DATA "Functions are provided to permit the"
3740 DATA "user to change his view of the stars, by"
3750 DATA "locating a particular star or constella-"
3760 DATA "tion, and moving that the the center of"
3770 DATA "the screen.  He is able to change the"
3780 DATA "view of the stars by moving them or by"
3790 DATA "rotating them.  He is able to obtain"
3800 DATA "their names (either their Common Names"
3810 DATA "or their Scientific Names).  He is able"
3820 DATA "to zoom in on a portion of the sky or to"
3830 DATA "back-away and take a broader view."
3840 DATA ".sp"
3850 DATA "Following are descriptions of the"
3860 DATA "individual functions of the Starfinder"
3870 DATA "ON DISPLAY program:"
3880 DATA ".pa"
3890 DATA ".h3 Find a Star by its Common Name."
3900 DATA "The user may ask for a star, by typing"
3910 DATA "in the common name for that star."
3920 DATA ".sp"
3930 DATA "The user may abbreviate the name of the"
3940 DATA "star to any characters which are unique."
3950 DATA ".sp"
3960 DATA "Following is a list of the common names"
3970 DATA "of the stars contained in the program:"
3980 DATA ".sp"
3990 DATA Acamar, Achernar, Acrux, Adhafera, Adhara
4000 DATA Albiero, Alcyone, Aldebaran
4010 DATA Alderamin, Algeiba, Algenib, Algol, Alborab, Alhena
4020 DATA Alioth, Alkaid, Almach, Alnair, Alnasl, Alnilam
4030 DATA Alnitak, Alphard, Alphecca, Alpheratz
4040 DATA Altais, Altair, Aludra, Ankaa, Antares, Arcturus, Arneb
4050 DATA Ascella, Aspidiske, Atik, Atria, Avior, Bellatrix, Beta Crucis
4060 DATA Betelgeuse, Canopus, Capella, Caph, Castor, Cebalrai, Chertan
4070 DATA Cor Caroli, Cursa, Dabih, Deneb, Deneb Algedi, Deneb Kaitos
4080 DATA Denebola, Diphda, Dschubba, Dubhe, Edasich, Elnath, Eltanin, Enif
4090 DATA Formalhaut, Gacrux, Gienah, Gomeisa, Graffias, Hadar, Hamal
4100 DATA Homam, Izar, Kaus Australis, Kaus Borealis, Kaus Media, Kochab
4110 DATA Korneophors, Lesath, Markab, Matar, Mebsuta, Megrez, Menkalinan
4120 DATA Menkar, Menkent, Merak, Miaplacidus, Mimosa, Mintaka, Mira, Mirach
4130 DATA Mirfak, Mirzam, Mizar, Muphrid, Muscida, Nekkar, Nihal, Nunki
4140 DATA Peacock, Phact, Phecda, Pherkad, Polaris, Pollux, Porrima
4150 DATA Procyon, Propus, Rasalgethi, Rasalhague, Rastaban, Regulus
4160 DATA Rigel, Rigil Kentaurus, Ruchbah, Sabik, Sadalmelik, Sadr, Saiph
4170 DATA Saladsuud, Scheat, Schedar, Seginus, Shaula, Sheliak, Sheratan
4180 DATA Sirius, Skat, Spica, Suhail, Sulifat, Tania Australis
4190 DATA Tania Borealis, Tarazad, Unukalhai, Vega, Vindimeatrix
4200 DATA Yed Prior, Zaurak, Zosma, Zubenelgenubi, Zubeneschamali
4210 DATA ".pa"
4220 DATA ".h3 Find a Star by its Scientific Name."
4230 DATA "The user may ask for a star, by typing"
4240 DATA "in the scientific name of that star."
4250 DATA ".sp"
4260 DATA "The user may abbreviate the name of the"
4270 DATA "star to any characters which are unique."
4280 DATA ".sp"
4290 DATA "Following is a list of the scientific"
4300 DATA "names of the stars contained in the"
4310 DATA "program."
4320 DATA ".sp"
4330 DATA Alpha Andromedae, Alpha Aquarii
4340 DATA Alpha Aquilae, Alpha Arae
4350 DATA Alpha Arietis, Alpha Aurigae
4360 DATA Alpha Bootis, Alpha Canum Venaticorum
4370 DATA Alpha Canis Majoris, Alpha Canis Minoris
4380 DATA Alpha Carinae, Alpha Cassiopeiae
4390 DATA Alpha Centauri, Alpha Cephei
4400 DATA Alpha Ceti, Alpha Circini
4410 DATA Alpha Columbae, Alpha Coronae Borealis
4420 DATA Alpha Crucis, Alpha Cygni
4430 DATA Alpha Doradus, Alpha Eridani
4440 DATA Alpha Geminorum, Alpha Gruis
4450 DATA Alpha Herculis, Alpha Hydrae
4460 DATA Alpha Hydri, Alpha Indi
4470 DATA Alpha Leonis, Alpha Leporis
4480 DATA Alpha Librae, Alpha Lupi
4490 DATA Alpha Lyncis, Alpha Muscae
4500 DATA Alpha Ophiuchi, Alpha Orionis
4510 DATA Alpha Pavonis, Alpha Pegasi
4520 DATA Alpha Persei, Alpha Phoenicis
4530 DATA Alpha Pictoris, Alpha Piscis Austrini
4540 DATA Alpha Reticuli, Alpha Scorpii
4550 DATA Alpha Serpentis, Alpha Tauri
4560 DATA Alpha Trianguli, Alpha Trianguli Australis
4570 DATA Alpha Tucanae, Alpha Ursae Majoris
4580 DATA Alpha Ursae Minoris, Alpha Virginis
4590 DATA Beta Andromedae, Beta Aquarii
4600 DATA Beta Arae, Beta Arietis
4610 DATA Beta Aurigae, Beta Bootis
4620 DATA Beta Canis Majoris, Beta Canis Minoris
4630 DATA Beta Capricorni, Beta Carinae
4640 DATA Beta Cassiopeiae, Beta Centauri
4650 DATA Beta Cephei, Beta Ceti
4660 DATA Beta Columbae, Beta Corvi
4670 DATA Beta Crucis, Beta Cygni
4680 DATA Beta Draconis, Beta Eridani
4690 DATA Beta Geminorium, Beta Gruis
4700 DATA Beta Herculis, Beta Hydri
4710 DATA Beta Leonis, Beta Leporis
4720 DATA Beta Librae, Beta Lupi
4730 DATA Beta Lyrae, Beta Muscae
4740 DATA Beta Ophiuchi, Beta Orionis
4750 DATA Beta Pavonis, Beta Pegasi
4760 DATA Beta Persei, Beta Phoenicis
4770 DATA Beta Scorpii, Beta Tauri
4780 DATA Beta Trianguli, Beta Trianguli Australis
4790 DATA Beta Ursae Majoris, Beta Ursae Minoris
4800 DATA Gamma Andromedae
4810 DATA Gamma Aquilae, Gamma Arae
4820 DATA Gamma Bootis, Gamma Cassiopeiae
4830 DATA Gamma Centauri, Gamma Cephei
4840 DATA Gamma Ceti, Gamma Corvi
4850 DATA Gamma Crucis, Gamma Cygni
4860 DATA Gamma Draconis, Gamma Eridani
4870 DATA Gamma Geminorum, Gamma Gruis
4880 DATA Gamma Hydrae, Gamma Hydri
4890 DATA Gamma Leonis, Gamma Lupi
4900 DATA Gamma Lyrae, Gamma Orionis
4910 DATA Gamma Pegasi, Gamma Persei
4920 DATA Gamma Phoenicis, Gamma Sagittarii
4930 DATA Gamma Trianguli Australis, Gamma Ursae Majoris
4940 DATA Gamma Ursae Minoris, Gamma Velorum
4950 DATA Gamma Virginis
4960 DATA Delta Andromedae
4970 DATA Delta Aquarii, Delta Aquilae
4980 DATA Delta Bootis, Delta Canis Majoris
4990 DATA Delta Capricorni, Delta Cassiopeiae
5000 DATA Delta Centauri, Delta Cephei
5010 DATA Delta Corvi, Delta Crucis
5020 DATA Delta Cygni, Delta Draconis
5030 DATA Delta Herculis, Delta Leonis
5040 DATA Delta Lupi, Delta Ophiuchi
5050 DATA Delta Orionis, Delta Persei
5060 DATA Delta Sagittarii, Delta Scorpii
5070 DATA Delta Ursae Majoris, Delta Velorum
5080 DATA Epsilon Aurigae, Epsilon Bootis
5090 DATA Epsilon Canis Majoris, Epsilon Carinae
5100 DATA Epsilon Cassiopeiae, Epsilon Centauri
5110 DATA Epsilon Corvi, Epsilon Cygni
5120 DATA Epsilon Geminorum, Epsilon Hydrae
5130 DATA Epsilon Leonis, Epsilon Leporis
5140 DATA Epsilon Ophiuchi, Epsilon Orionis
5150 DATA Epsilon Pegasi, Epsilon Persei
5160 DATA Epsilon Sagittarii, Epsilon Scorpii
5170 DATA Epsilon Tauri, Epsilon Ursae Majoris
5180 DATA Epsilon Virginis
5190 DATA Zeta Aquila
5200 DATA Zeta Arae, Zeta Canis Majoris
5210 DATA Zeta Centauri, Zeta Cephei
5220 DATA Zeta Cygni, Zeta Draconis
5230 DATA Zeta Herculis, Zeta Hydrae
5240 DATA Zeta Leonis, Zeta Lupi
5250 DATA Zeta Ophiuchi, Zeta Orionis
5260 DATA Zeta Pegasi, Zeta Persei
5270 DATA Zeta Puppis, Zeta Sagittarii
5280 DATA Zeta Virginis
5290 DATA Eta Aurigae
5300 DATA Eta Bootis, Eta Canis Majoris
5310 DATA Eta Cassiopeiae, Eta Centauri
5320 DATA Eta Cephei, Eta Ceti
5330 DATA Eta Draconis, Eta Geminorum
5340 DATA Eta Herculis, Eta Lupi
5350 DATA Eta Ophiuchi, Eta Orionis
5360 DATA Eta Pegasi, Eta Sagittarii
5370 DATA Eta Scorpii, Eta Serpentis
5380 DATA Eta Tauri, Eta Ursae Majoris
5390 DATA Theta Aquilae, Theta Aurigae
5400 DATA Theta Carinae, Theta Centauri
5410 DATA Theta Eridani, Theta Leonis
5420 DATA Theta Ophiuchi, Theta Scorpii
5430 DATA Theta Tauri, Theta Ursae Majoris
5440 DATA Iota Aurigae
5450 DATA Iota Carinae, Iota Centauri
5460 DATA Iota Draconis, Iota Orionis
5470 DATA Iota Scorpii, Iota Ursae Majoris
5480 DATA Kappa Centauri, Kappa Ophiuchi
5490 DATA Kappa Orionis, Kappa Scorpii
5500 DATA Kappa Velorum
5510 DATA Lambda Aquilae
5520 DATA Lambda Centauri, Lambda Orionis
5530 DATA Lambda Sagittarii, Lambda Scorpii
5540 DATA Lambda Ursae Majoris, Lambda Velorum
5550 DATA Mu Centauri, Mu Geminorum
5560 DATA Mu Herculis, Mu Leporis
5570 DATA Mu Scorpii, Mu Ursae Majoris
5580 DATA Mu Velorum
5590 DATA Nu Centauri, Nu Hydrae
5600 DATA Nu Ophiuchi, Nu Puppis
5610 DATA Xi Geminorum, Xi Puppis
5620 DATA Xi Sagittarii
5630 DATA Omicron Canis Majoris
5640 DATA Omicron Ceti, Omicron Ursae Majoris
5650 DATA Pi Herculis
5660 DATA Pi Hydrae, Pi Orionis
5670 DATA Pi Puppis, Pi Sagittarii
5680 DATA Pi Scorpii
5690 DATA Rho Persei, Rho Puppis
5700 DATA Sigma Librae, Sigma Puppis
5710 DATA Sigma Sagittarii, Sigma Scorpii
5720 DATA Tau Ceti, Tau Puppis
5730 DATA Tau Sagittarii, Tau Scorpii
5740 DATA Upsilon Carinae, Upsilon Scorpii
5750 DATA Phi Sagittarii
5760 DATA Chi Carinae
5770 DATA Psi Ursae Majoris
5780 DATA Omega Carinae
5790 DATA a Carinae
5800 DATA l Carinae, p Carinae
5810 DATA q Carinae
5820 DATA G Scorpii
5830 DATA N Velorum
5840 DATA ".pa"
5850 DATA ".h3 Find a Constellation by its Name."
5860 DATA "The user may ask for a constellation by"
5870 DATA "typing in the name of that constellation."
5880 DATA "The user may abbreviate the name of the"
5890 DATA "constellation to any characters which"
5900 DATA "are unique."
5910 DATA ".sp"
5920 DATA "Following is a list of the constella-"
5930 DATA "tions whose Alpha star is found in the"
5940 DATA "program:"
5950 DATA ".sp"
5960 DATA Andromeda, Aquarius
5970 DATA Aquila, Ara
5980 DATA Aries, Auriga
5990 DATA Bootes, Canes Venatici
6000 DATA Canis Major, Canis Minor
6010 DATA Carina, Cassiopeia
6020 DATA Centaurus, Cepheus
6030 DATA Cetus, Circinus
6040 DATA Columba, Corona Borealis
6050 DATA Crux, Cygnus
6060 DATA Dorado, Eridanus
6070 DATA Gemini, Grus
6080 DATA Hercules, Hydra
6090 DATA Hydrus, Indus
6100 DATA Leo, Lepus
6110 DATA Libra, Lupus
6120 DATA Lynx, Musca
6130 DATA Ophiuchus, Orion
6140 DATA Pavo, Pegasus
6150 DATA Perseus, Phoenix
6160 DATA Pictor, Piscis Austrinus
6170 DATA Reticulum, Scorpius
6180 DATA Serpens, Taurus
6190 DATA Triangulum, Triangulum Australe
6200 DATA Tucana, Ursa Major
6210 DATA Ursa Minor, Virgo
6220 DATA ".pa"
6230 DATA ".h3 Print the Common Names of the Stars"
6240 DATA "The view of the sky is plotted again,"
6250 DATA "but with the common name of each star"
6260 DATA "to the immediate right of the star"
6270 DATA "itself."
6280 DATA ".sp"
6290 DATA "If the star-name will not fit on the"
6300 DATA "same line as the star itself, the"
6310 DATA "star-name is truncated."
6320 DATA ".sp"
6330 DATA "Note: a star-name may overlay one which"
6340 DATA "was previously plotted.  Another star may"
6350 DATA "be plotted within a star-name previously"
6360 DATA "plotted.  This is normal, and to be"
6370 DATA "expected.  The user may change his view"
6380 DATA "in order to re-orient the stars, or to"
6390 DATA "expand them to the point that all star-"
6400 DATA "names are shown."
6410 DATA ".pa"
6420 DATA ".h3 Print the Scientific Names of the Stars"
6430 DATA "The view of the sky is plotted again, but"
6440 DATA "with the scientific name of each star to"
6450 DATA "the immediate right of the star itself."
6460 DATA ".sp"
6470 DATA "If the star-name will not fit on the"
6480 DATA "same line as the star itself, the"
6490 DATA "star-name is truncated."
6500 DATA ".sp"
6510 DATA "Note: a star-name may overlay one which"
6520 DATA "was previously plotted.  Another star may"
6530 DATA "be plotted within a star-name previously"
6540 DATA "plotted.  This is normal, and to be"
6550 DATA "expected.  The user may change his view"
6560 DATA "in order to re-orient the stars, or to"
6570 DATA "expand them to the point that all star-"
6580 DATA "names are shown."
6590 DATA ".pa"
6600 DATA ".h3 Move the Stars Farther Apart"
6610 DATA "The user has the ability to move the"
6620 DATA "stars father apart, in order to"
6630 DATA "'zoom-in' on a portion of the sky."
6640 DATA ".vt 3"
6650 DATA ".h3 Move the Stars Closer Together"
6660 DATA "The user has the ability to move the"
6670 DATA "stars closer together, in order to"
6680 DATA "'back-away', and view a larger portion"
6690 DATA "of the sky."
6700 DATA ".pa"
6710 DATA ".h3 Move the Stars to the Left"
6720 DATA "The user has the ability to shift all of"
6730 DATA "stars to the left."
6740 DATA ".sp"
6750 DATA "The amount of movement (in degrees) may"
6760 DATA "be from 0 to 360 degrees."
6770 DATA ".vt 3"
6780 DATA ".h3 Move the Stars to the Right"
6790 DATA "The user has the ability to shift all of"
6800 DATA "stars to the right."
6810 DATA ".sp"
6820 DATA "The amount of movement (in degrees) may"
6830 DATA "be from 0 to 360 degrees."
6840 DATA ".pa
6850 DATA ".h3 Move the Stars Up"
6860 DATA "The user has the ability to shift all of"
6870 DATA "stars upward in his field of vision."
6880 DATA ".sp"
6890 DATA "The amount of movement (in degrees) may"
6900 DATA "be from 0 to 360 degrees."
6910 DATA ".vt 3"
6920 DATA ".h3 Move the Stars Down"
6930 DATA "The user has the ability to shift all of"
6940 DATA "stars downward in his field of vision."
6950 DATA ".sp"
6960 DATA "The amount of movement (in degrees) may"
6970 DATA "be from 0 to 360 degrees."
6980 DATA ".pa"
6990 DATA ".h3 Rotate the Stars Clockwise"
7000 DATA "The user has the ability to shift all of"
7010 DATA "stars clockwise in his field of vision."
7020 DATA ".sp"
7030 DATA "The amount of movement (in degrees) may"
7040 DATA "be from 0 to 360 degrees."
7050 DATA ".vt 3"
7060 DATA ".h3 Rotate the Stars Counter-clockwise"
7070 DATA "The user has the ability to shift all of"
7080 DATA "stars counter-clockwise in his field of"
7090 DATA "vision."
7100 DATA ".sp"
7110 DATA "The amount of movement (in degrees) may"
7120 DATA "be from 0 to 360 degrees."
7130 DATA ".vt 3"
7140 DATA ".h3 Quit"
7150 DATA "The user may 'quit' at any time."
7160 DATA ".pa"
7170 DATA ".h2 DEFINITION OF TERMS"
7180 DATA ".h3 Move the Stars Farther Apart."
7190 DATA "This is equivalent to 'zooming-in on"
7200 DATA "a part of the sky."
7210 DATA ".vt 3"
7220 DATA ".h3 Move the Stars Closer Together"
7230 DATA "This is equivalent to 'backing-away'"
7240 DATA "from the current view, and seeing a"
7250 DATA "wider portion of the sky."
7260 DATA ".pa"
7270 DATA ".h2 EXPLANATION OF GENERAL CONCEPTS"
7280 DATA "The positions of stars are well known to"
7290 DATA "astronomers.  These positions are"
7300 DATA "published in tables.  They are described"
7310 DATA "in terms of Right-Ascension and Decli-"
7320 DATA "nation, so that persons may locate the"
7330 DATA "stars in the sky."
7340 DATA ".sp"
7350 DATA "The Starfinder ON DISPLAY program"
7360 DATA "assumes that all stars are at a constant"
7370 DATA "distance from the earth (which they are"
7380 DATA "not).  With this simplifying assumption,"
7390 DATA "it is then possible to use the Right-"
7400 DATA "Ascension and Declination to compute a"
7410 DATA "set of (x, y, z) coordinates for each"
7420 DATA "star, which are between 0 and 1."
7430 DATA ".sp"
7440 DATA "Those coordinates can then be used for"
7450 DATA "transformations (rotation and scaling),"
7460 DATA "and for plotting the stars on the"
7470 DATA "screen."
7480 DATA ".sp"
7490 DATA "Plotting of the stars on the screen of"
7500 DATA "the any Personal Computer depends upon"
7510 DATA "the x,y,z coordinates of the stars, and"
7520 DATA "on the shape of the screen.  The shape"
7530 DATA "of the screen was used in order to plot"
7540 DATA "the stars in such a fashion that they"
7550 DATA "appear as close to an actual star view"
7560 DATA "as possible."
7570 REM How to use the program
7580 DATA ".h1 USING THE PROGRAM"
7590 DATA ".h2 FIRST TIME USAGE"
7600 DATA "There is nothing unique about using the"
7610 DATA "Starfinder ON DISPLAY program for the"
7620 DATA "first time.  The user should take the"
7630 DATA "normal precautionary steps to copy the"
7640 DATA "programs and their documentation to a"
7650 DATA "backup file."
7660 DATA ".h2 GETTING STARTED"
7670 DATA "The user should perform the following"
7680 DATA "steps in starting the Starfinder ON"
7690 DATA "DISPLAY program."
7700 DATA ".sp
7710 DATA "1.  Insert the PC DOS diskette into"
7720 DATA "    Drive a:"
7730 DATA ".sp
7740 DATA "2.  Turn the Printer On (if you want"
7750 DATA "    to print the documentation)."
7760 DATA ".sp"
7770 DATA "3.  Turn the Computer On."
7780 DATA ".sp"
7790 DATA "4.  Enter today's date and the time,"
7800 DATA "    if requested to do so."
7810 DATA ".sp"
7820 DATA "5.  Type: basic"
7830 DATA "          and press the 'enter' key"
7840 DATA ".sp"
7850 DATA "6.  Replace the DOS Diskette with the"
7860 DATA "    Distribution diskette into drive"
7870 DATA "    a:"
7880 DATA ".pa"
7890 DATA "7.  Type: load ~starfind~"
7900 DATA "           and press the 'enter' key."
7910 DATA ".sp"
7920 DATA "8.  Type: run"
7930 DATA "          and press the 'enter' key."
7940 DATA ".sp"
7950 DATA "9.  Follow instructions which will be"
7960 DATA "    shown at the bottom of each screen."
7970 DATA ".pa"
7980 DATA ".h2 HOW TO OPERATE."
7990 DATA "Once the user has started (see the"
8000 DATA "previous section on Getting Started),"
8010 DATA "he responds to instructions given by"
8020 DATA "the program.  These are generally"
8030 DATA "selecting a number or pressing a key."
8040 DATA ".sp"
8050 DATA "Some questions pertain to the number"
8060 DATA "of degrees to move the stars, or the"
8070 DATA "expansion or shrinking factor, when"
8080 DATA "the user wants a different view of"
8090 DATA "the stars."
8100 DATA ".sp"
8110 DATA "Please refer to the General Informa-"
8120 DATA "tion section of this manual for the"
8130 DATA "details on each function."
8140 DATA ".sp"
8150 DATA ".h2 HOW TO STOP."
8160 DATA "The user may stop at any time, by"
8170 DATA "pressing (and holding down) the control"
8180 DATA "(Ctrl) key, and then pressing the Break"
8190 DATA "key (or the FN key and B key for the"
8200 DATA "PCjr)."
8210 DATA ".sp"
8220 DATA "The normal method of stopping, however,"
8230 DATA "is when the user is finished.  He gives"
8240 DATA "the 'quit' command, and his session is"
8250 DATA "finished."
8260 DATA ".pa"
8270 DATA ".h2 WHAT TO DO IF YOU GET AN ERROR MESSAGE."
8280 DATA "Few error messages exist.  Where they do,"
8290 DATA "the user is given the ability to re-"
8300 DATA "supply his previous response."
8310 DATA ".sp"
8320 DATA "Messages which he might receive are:"
8330 DATA ".sp"
8340 DATA ".pk Number is out of range."
8350 DATA ".pk Number must be 0 to 360"
8360 DATA ".pk Number must be 1 to 10"
8370 DATA ".pk Number must be .1 to 1"
8380 DATA ".pk The number must be between 1 and 14."
8390 DATA ".sp"
8400 DATA "In each of the above cases, the user is"
8410 DATA "expected to respond with a number which"
8420 DATA "is within the appropriate range."
8430 DATA ".vt 2"
8440 DATA ".pk Unable to locate star as named."
8450 DATA ".pk Unable to locate constellation as named."
8460 DATA ".sp"
8470 DATA "In each of the above cases, the user has"
8480 DATA "asked to locate something that is either"
8490 DATA "misspelled, or is not within the program."
8500 DATA ".sp"
8510 DATA "He is expected to re-enter a valid name."
8520 DATA ".h1 REFERENCE MATERIAL"
8530 DATA ".h2 SAMPLE SCREENS AND PROMPTING MESSAGES"
8540 DATA "The following is a sample session."
8550 DATA ".vt 2"
8560 DATA "After turning the sytems on, and asking"
8570 DATA "for basic, the user types:"
8580 DATA ".sp"
8590 DATA ".pk load ~starfind~"
8600 DATA ".vt 2"
8610 DATA "and then:"
8620 DATA ".sp"
8630 DATA ".pk run"
8640 DATA ".pa"
8650 DATA "The display screen then appears as:"
8660 DATA ".sp"
8670 DATA ".vt 3"
8680 DATA ".pk                      Starfinder ON DISPLAY"
8690 DATA ".pk                           Version 2.0"
8700 DATA ".vt 2"
8710 DATA ".pk                If you are using these programs, and"
8720 DATA ".pk              finding them of value, your contribution"
8730 DATA ".pk                ($35 suggested) will be anticipated."
8740 DATA ".sp"
8750 DATA ".pk                          Melvin O. Duke"
8760 DATA ".pk                          P.O. Box 20836"
8770 DATA ".pk                       San Jose, CA  95160"
8780 DATA ".vt 3"
8790 DATA ".pk                      Copyright (c) 1985 by:"
8800 DATA ".pk                          Melvin O. Duke"
8810 DATA ".vt 2"
8820 DATA ".pk Press any key to continue"
8830 DATA ".pa"
8840 DATA "After the depression of any key, the"
8850 DATA "screen is cleared, and a new screen"
8860 DATA "appears, showing:"
8870 DATA ".vt 2"
8880 DATA ".pk This program permits you to view the stars in any portion of"
8890 DATA ".pk the sky, and to change that view according to your commands."
8900 DATA ".sp"
8910 DATA ".pk The program contains all of the stars whose visual magnitude"
8920 DATA ".pk is 3.50 or brighter.  they are plotted according to the"
8930 DATA ".pk following:"
8940 DATA ".sp"
8950 DATA ".pk        @ Visual Magnitude of 0.99 or brighter."
8960 DATA ".pk        * Visual Magnitude of 1.99 or brighter."
8970 DATA ".pk        + Visual Magnitude of 2.99 or brighter."
8980 DATA ".pk        . All other stars."
8990 DATA ".vt 4"
9000 DATA ".pk Press any key to continue."
9010 DATA ".pa"
9020 DATA "The screen is cleared, and the stars plot as:"
9030 DATA ".vt 2"
9040 DATA ".sp"
9050 DATA ".pk                                                     ."
9060 DATA ".sp"
9070 DATA ".pk                                 @"
9080 DATA ".pk                                                          *                  ."
9090 DATA ".sp"
9100 DATA ".sp"
9110 DATA ".sp"
9120 DATA ".sp"
9130 DATA ".sp"
9140 DATA ".pk                                                       +"
9150 DATA ".pk                                                  *  *"
9160 DATA ".pk                                                           ."
9170 DATA ".pk                                                                   +"
9180 DATA ".pk                                                     +"
9190 DATA ".sp"
9200 DATA ".sp"
9210 DATA ".sp"
9220 DATA ".pk                                                                @"
9230 DATA ".pk                                              +"
9240 DATA ".sp"
9250 DATA ".sp"
9260 DATA ".pk Press any key to continue"
9270 DATA ".pa"
9280 DATA "When the user presses a key, the screen"
9290 DATA "is cleared, and now shows:"
9300 DATA ".vt 2"
9310 DATA ".pk The following actions are available:"
9320 DATA ".sp"
9330 DATA ".pk    1.  Find a Star by its Common Name."
9340 DATA ".pk    2.  Find a Star by its Scientific Name."
9350 DATA ".pk    3.  Find a Constellation by its Name."
9360 DATA ".pk    4.  Print the Common Names of the Stars."
9370 DATA ".pk    5.  Print the Scientific Names of the Stars."
9380 DATA ".pk    6.  Move the stars farther apart."
9390 DATA ".pk    7.  Move the stars closer together."
9400 DATA ".pk    8.  Move the stars to the left."
9410 DATA ".pk    9.  Move the stars to the right."
9420 DATA ".pk   10.  Move the stars up."
9430 DATA ".pk   11.  Move the stars down."
9440 DATA ".pk   12.  Rotate the stars clockwise."
9450 DATA ".pk   13.  Rotate the stars counter-clockwise."
9460 DATA ".pk   14.  Quit."
9470 DATA ".sp"
9480 DATA ".pk What action would you like to take?"
9490 DATA ".pk Enter a number between 1 and 14?"
9500 DATA ".vt 2"
9510 DATA "The user decides to move the stars"
9520 DATA "closer together, so he types a 7 and"
9530 DATA "presses the 'enter' key."
9540 DATA ".sp"
9550 DATA ".pk Enter a number between 1 and 14? 7"
9560 DATA ".vt 2"
9570 DATA "He is then asked to:"
9580 DATA ".sp"
9590 DATA ".pk Enter a factor between .1 and 1?"
9600 DATA ".pa"
9610 DATA "He responds with .5 (and presses the"
9620 DATA "'enter' key)."
9630 DATA ".sp"
9640 DATA ".pk Enter a factor between .1 and 1? .5"
9650 DATA ".vt 2"
9660 DATA "The screen is cleared, and he watches"
9670 DATA "as the plot develops, to see:"
9680 DATA ".vt 2"
9690 DATA ".pk                                  + ."
9700 DATA ".pk                                             .                ."
9710 DATA ".sp"
9720 DATA ".pk                              *                              @ ."
9730 DATA ".pk                            ."
9740 DATA ".sp"
9750 DATA ".pk                                              ."
9760 DATA ".pk                 +                       @       *       ."
9770 DATA ".pk              @"
9780 DATA ".sp"
9790 DATA ".sp"
9800 DATA ".pk                                             **+"
9810 DATA ".pk                                                ."
9820 DATA ".pk                                              +       +"
9830 DATA ".pk                                                    @"
9840 DATA ".pk                                           +"
9850 DATA ".pk                                                                      +"
9860 DATA ".pk                            @                       ."
9870 DATA ".pk                                  *            +"
9880 DATA ".pk                                                +"
9890 DATA ".pk                                                     ."
9900 DATA ".pk Press any key to continue"
9910 DATA ".pa
9920 DATA "When the user has finished looking at"
9930 DATA "the current screen, he presses any"
9940 DATA "key, and once again sees the screen"
9950 DATA "which defines the actions which he"
9960 DATA "may take.  He takes whatever action"
9970 DATA "that he desires, and finally selects"
9980 DATA "action 14, to quit."
9990 DATA ".pa"
10000 DATA ".h2 COMMANDS USED."
10010 DATA ".h3 basic"
10020 DATA ".sp"
10030 DATA "The basic command is used in order to"
10040 DATA "load the basic processor from the PC"
10050 DATA "DOS diskette, into storage."
10060 DATA ".h3 load"
10070 DATA ".sp"
10080 DATA "The load command is used in order to"
10090 DATA "load the Starfinder ON DISPLAY program"
10100 DATA "from the Distribution diskette."
10110 DATA ".h3 run"
10120 DATA ".sp"
10130 DATA "The run command is used to cause the"
10140 DATA "Starfinder ON DISPLAY program to"
10150 DATA "begin."
10160 REM Appendices
10170 DATA ".h1 APPENDIX A.  MESSAGES"
10180 DATA ".h2 START-UP MESSAGES"
10190 DATA "The initial message, when the system"
10200 DATA "is turned on, is something like:"
10210 DATA ".sp"
10220 DATA ".pk Current date is Tues  1-01-1980"
10230 DATA ".pk Enter new date:"
10240 DATA ".sp"
10250 DATA "The user is expected to respond with an"
10260 DATA "appropriate date."
10270 DATA ".vt 2"
10280 DATA "The user then sees something like:"
10290 DATA ".sp"
10300 DATA ".pk Current time is 0:01:05.0"
10310 DATA ".pk Enter new time:"
10320 DATA ".sp"
10330 DATA "The user is expected to respond with an"
10340 DATA "appropriate time."
10350 DATA ".vt 2"
10360 DATA "The message in response to the"
10370 DATA "basic"
10380 DATA "command is something like:"
10390 DATA ".sp"
10400 DATA ".pk IBM Personal Computer Basic"
10410 DATA ".pk Version D2.1 Copyright IBM Corp. 1981, 1982, 1983"
10420 DATA ".pk 58853 Bytes Free"
10430 DATA ".vt 2"
10440 DATA "The message in response to the"
10450 DATA "load"
10460 DATA "command is:"
10470 DATA ".sp"
10480 DATA ".pk Ok"
10490 DATA ".pa"
10500 DATA ".h2 MESSAGES WHILE RUNNING THE PROGRAM"
10510 DATA ".pk Enter a factor between 1 and 10?"
10520 DATA ".sp"
10530 DATA "The user has asked to Move the Stars"
10540 DATA "farther apart.  He is now being asked"
10550 DATA "to state a factor to use in that expan-"
10560 DATA "sion.  He should enter a number between"
10570 DATA "1 and 10."
10580 DATA ".vt 2"
10590 DATA ".pk Enter a factor between .1 and 1?"
10600 DATA ".sp"
10610 DATA "The user has asked to Move the Stars"
10620 DATA "closer together.  He is now being asked"
10630 DATA "to state a factor to use in that con-"
10640 DATA "tration.  He should enter a number"
10650 DATA "between .1 and 1."
10660 DATA ".vt 2"
10670 DATA ".pk How many degrees clockwise?"
10680 DATA ".sp"
10690 DATA "The user has asked to rotate the stars"
10700 DATA "clockwise.  He is now being asked to"
10710 DATA "state the number of degrees by which"
10720 DATA "to rotate the stars.  He should enter"
10730 DATA "a number between 0 and 360."
10740 DATA ".vt 2"
10750 DATA ".pk How many degrees counter-clockwise?"
10760 DATA ".sp"
10770 DATA "The user has asked to rotate the stars"
10780 DATA "counter-clockwise.  He is now being"
10790 DATA "askedto state the number of degrees by"
10800 DATA "which to rotate the stars.  He should"
10810 DATA "enter a number between 0 and 360."
10820 DATA ".pa"
10830 DATA ".pk How many degrees down?"
10840 DATA ".sp"
10850 DATA "The user has asked to move the stars"
10860 DATA "down.  He is now being asked to state"
10870 DATA "the number of degrees by which to move"
10880 DATA "the stars down.  He should enter a"
10890 DATA "number between 0 and 360."
10900 DATA ".vt 2"
10910 DATA ".pk How many degrees to the left?"
10920 DATA ".sp"
10930 DATA "The user has asked to move the stars to"
10940 DATA "the left.  He is now being asked toe"
10950 DATA "state the number of degrees by which to"
10960 DATA "move the stars to the left.  He should"
10970 DATA "enter a number between 0 and 360."
10980 DATA ".vt 2"
10990 DATA ".pk How many degrees to the right?"
11000 DATA ".sp"
11010 DATA "The user has asked to move the stars to"
11020 DATA "the right.  He is now being asked to"
11030 DATA "state the number of degrees by which to"
11040 DATA "move the stars to the right.  He should"
11050 DATA "enter a number between 0 and 360."
11060 DATA ".vt 2"
11070 DATA ".pk How many degrees up?"
11080 DATA ".sp"
11090 DATA "The user has asked to move the stars up."
11100 DATA "He is now being asked to state the"
11110 DATA "number of degrees by which to move the"
11120 DATA "stars to the up.  He should enter a"
11130 DATA "number between 0 and 360."
11140 DATA ".pa"
11150 DATA ".pk Press any key to continue"
11160 DATA ".sp"
11170 DATA "When the user has finished viewing the"
11180 DATA "screen, he should press any key in order"
11190 DATA "continue."
11200 DATA ".vt 2"
11210 DATA ".pk What action would you like to take?"
11220 DATA ".pk Enter a number between 1 and 14?"
11230 DATA ".sp"
11240 DATA "The user is expected to select the action"
11250 DATA "that he would like to take, by entering"
11260 DATA "a number between 1 and 14, and then"
11270 DATA "pressing the 'enter' key."
11280 DATA ".h1 TERMS AND CONDITIONS"
11290 DATA ".h2 Terms"
11300 DATA "If you are using this program, and"
11310 DATA "finding it of value, your contribution"
11320 DATA "($35 suggested) will be anticipated."
11330 DATA ".vt 2"
11340 DATA "     Melvin O. Duke"
11350 DATA "     P.O. Box 20836"
11360 DATA "     San Jose, CA  95160"
11370 DATA "     (408) 268-6637"
11380 DATA ".vt 2"
11390 DATA "Regardless of whether you make a contri-"
11400 DATA "bution, you are encouraged to copy and"
11410 DATA "share this program."
11420 DATA ".sp"
11430 DATA "Anyone may request a copy of this"
11440 DATA "program by sending one blank, 5-1/4"
11450 DATA "inch, double-density diskette to the"
11460 DATA "author, at the address given above."
11470 DATA ".sp"
11480 DATA "An addressed, postage-paid return-"
11490 DATA "mailer must accompany the diskettes"
11500 DATA "(no exceptions, please)."
11510 DATA ".sp"
11520 DATA "The program and documentation will be"
11530 DATA "copied to the user's diskette, and"
11540 DATA "returned in the supplied mailer."
11550 DATA ".pa"
11560 DATA ".h2 Conditions"
11570 DATA "A limited license is granted to all users"
11580 DATA "of this program, to make copies, and to"
11590 DATA "distribute them to others, on the follow-"
11600 DATA "ing conditions:"
11610 DATA ".sp"
11620 DATA "1.  The Starfinder ON DISPLAY program is"
11630 DATA "    not to be distributed to others in a"
11640 DATA "    modified form."
11650 DATA ".sp"
11660 DATA "2.  No fee is to be charged for the Star-"
11670 DATA "    finder ON DISPLAY program.  Those who"
11680 DATA "    perform the copying may charge a"
11690 DATA "    reasonable amount for the actual"
11700 DATA "    copying and mailing."
11710 DATA ".sp"
11720 DATA "3.  The notices displayed at program"
11730 DATA "    start-up are not to be bypassed,"
11740 DATA "    altered, or removed."
11750 DATA ".h2  Disclaimer"
11760 DATA "In no event will the Author be liable to"
11770 DATA "you for any damages, including any lost"
11780 DATA "profits, lost savings or other inciden-"
11790 DATA "tal or consequential damages arising out"
11800 DATA "of the use of or inability to use these"
11810 DATA "programs, even if the Author has been"
11820 DATA "advised of the possibility of such"
11830 DATA "damages, or for any claim by any other"
11840 DATA "party."
11850 DATA ".eof"
11860 END
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0447

     Volume in drive A has no label
     Directory of A:\

    AIRNAV   BAS     11568   6-06-85  10:10a
    AIRNAV   DOC      6400   1-01-80  12:03a
    CENTRAL  DAT     10752   1-01-80  12:05a
    DIRECTOR BAS     10752   7-18-85
    EASTCST  DAT      6272   1-01-80  12:05a
    FILES447 TXT       737   1-27-87   3:41p
    NORCOAST DAT     12032   1-01-80  12:04a
    PRINTERS BAS      1792   7-18-85
    READ     ME        498   6-05-85   5:23p
    REVIEW   BAS       512   1-01-80  12:02a
    RUNFIRST BAS      1280   7-18-85
    STARFIND BAS     28928   7-18-85
    STARFIND EXE     48942   7-20-85   6:31p
    USA      DAT     16128   5-30-84  12:00p
    USERMANU BAS     41216   7-18-85
    WESTCST  DAT     15104   1-01-80  12:04a
           16 file(s)     212913 bytes
                          101376 bytes free
