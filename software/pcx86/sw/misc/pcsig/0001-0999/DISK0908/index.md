---
layout: page
title: "PC-SIG Diskette Library (Disk #908)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0908/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0908"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "DIREDIT, TEST DRIVE, AND D&T"

    For those of you who do not have a clock card in your computer, here's a
    utility that quickly lets you enter the date and time during a
    computing session. The BASIC source code is provided.
    
    TEST DRIVE is a floppy disk drive diagnostic utility for 5-1/4" 360K
    disk drives with many tests to ensure that your disk drive is in
    working order.  This can help to alleviate data loss or damage to your
    diskettes.
    
    As the drive is tested, important operating parameters are displayed on
    the screen.  A spindle speed test and read/write test of the disk drive
    can be done with just this disk.  The alignment, hysteresis, head
    azimuth and hub centering of your disk drive can be tested but these
    tests require a precision alignment disk that is available upon
    registration.
    
    TEST DRIVE can indicate when your disk drives need cleaning and has a
    utility for use with a standard cleaning disk.  It can perform
    continuous tests for certain adjustments on your drives and can test the
    general performance of the drive before and after any changes are made.
    
    Edit your DOS directories. DIREDIT helps you to sort your directories
    in various ways -- by filename, extension, size, etc. Specify arbitrary
    order and move individual directory entries. Display each directory in
    a very compact manner with up to eighty filenames visible on the screen
    at once. Need more information? You can see the full file description
    for any entry simply by moving the cursor to the name.
    
    Use DIREDIT to arrange your directories on disk for more efficient
    access. Resort them temporarily on the screen while searching for a
    file, all without disturbing the directory structures on disk.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CLOCK.BAS

{% raw %}
```bas
0 '************************************************************
1 '*                                                          *
2 '*   Author:     Mike J. Sullivan  , Houston, Tx.           *
3 '*               12402 Campos Dr. ,Houston, Tx. 77065       *
4 '*   Date:       09/05/82                                   *
5 '*   Purpose:    Display your Basic Programs                *
6 '*   Title:      Digital Clock                              *
7 '*   Comment(s): enjoy                                      *
8 '*                                                          *
9 '************************************************************
10 KEY OFF
11 ODD = 0
12 Q15$ = "MbMLP14O4EO4CDO3G"
13 Q30$ = "MbMLP14O3GO4DEC"
15 CHIME = 0
20 CLS :LOCATE ,,0
40 LOCATE 1,19:PRINT "               --- I B M ---"
50 LOCATE 3,19:PRINT "          DIGITAL  CLOCK   1 . 1 0  "
51 LOCATE 4,19:PRINT "TICK: (Y) Tick On  (N) Tick Off  (ESC) Exit"
60 GOSUB 4060
240 DIM ONE$(7),TWO$(7),THR$(7),FOU$(7),FIV$(7)
250 DIM SIX$(7),SEV$(7),EIG$(7),NIN$(7),ZER$(7),TEMP$(7)
260 XH1=0.1:XH2=0.1:XM1=0.1:XM2=0.2:XS1=0.1:XS2=0.1
270 COL$(1)="  "
280 COL$(2)="  "
290 COL$(3)=STRING$(2,CHR$(219))
300 COL$(4)="  "
310 COL$(5)=STRING$(2,CHR$(219))
320 COL$(6)="  "
330 COL$(7)="  "
340 ONE$(1)="  "+STRING$(3,CHR$(219))+"   "
350 ONE$(2)="   "+CHR$(219)+CHR$(219)+"   "
360 ONE$(3)="   "+CHR$(219)+CHR$(219)+"   "
370 ONE$(4)="   "+CHR$(219)+CHR$(219)+"   "
380 ONE$(5)="   "+CHR$(219)+CHR$(219)+"   "
390 ONE$(6)="   "+CHR$(219)+CHR$(219)+"   "
400 ONE$(7)=" "+STRING$(6,CHR$(219))+" "
410 TWO$(1)=STRING$(8,CHR$(219))
420 TWO$(2)=CHR$(219)+CHR$(219)+"    "+CHR$(219)+CHR$(219)
430 TWO$(3)="      "+CHR$(219)+CHR$(219)
440 TWO$(4)=STRING$(8,CHR$(219))
450 TWO$(6)=CHR$(219)+CHR$(219)+"    "+CHR$(219)+CHR$(219)
460 TWO$(5)=CHR$(219)+CHR$(219)+"      "
470 TWO$(7)=STRING$(8,CHR$(219))
480 THR$(1)=STRING$(8,CHR$(219))
490 THR$(2)=CHR$(219)+CHR$(219)+"    "+CHR$(219)+CHR$(219)
500 THR$(3)="      "+CHR$(219)+CHR$(219)
510 THR$(4)=STRING$(8,CHR$(219))
520 THR$(5)="      "+CHR$(219)+CHR$(219)
530 THR$(6)=CHR$(219)+CHR$(219)+"    "+CHR$(219)+CHR$(219)
540 THR$(7)=STRING$(8,CHR$(219))
550 FOU$(1)=CHR$(219)+CHR$(219)+"    "+CHR$(219)+CHR$(219)
560 FOU$(2)=CHR$(219)+CHR$(219)+"    "+CHR$(219)+CHR$(219)
570 FOU$(3)=CHR$(219)+CHR$(219)+"    "+CHR$(219)+CHR$(219)
580 FOU$(4)=STRING$(8,CHR$(219))
590 FOU$(6)="      "+CHR$(219)+CHR$(219)
600 FOU$(5)="      "+CHR$(219)+CHR$(219)
610 FOU$(7)="      "+CHR$(219)+CHR$(219)
620 FIV$(1)=STRING$(8,CHR$(219))
630 FIV$(2)=CHR$(219)+CHR$(219)+"      "
640 FIV$(3)=CHR$(219)+CHR$(219)+"      "
650 FIV$(4)=STRING$(8,CHR$(219))
660 FIV$(6)=CHR$(219)+CHR$(219)+"    "+CHR$(219)+CHR$(219)
670 FIV$(5)="      "+CHR$(219)+CHR$(219)
680 FIV$(7)=STRING$(8,CHR$(219))
690 SIX$(1)=STRING$(8,CHR$(219))
700 SIX$(2)=CHR$(219)+CHR$(219)+"    "+CHR$(219)+CHR$(219)
710 SIX$(3)=CHR$(219)+CHR$(219)+"      "
720 SIX$(4)=STRING$(8,CHR$(219))
730 SIX$(6)=CHR$(219)+CHR$(219)+"    "+CHR$(219)+CHR$(219)
740 SIX$(5)=CHR$(219)+CHR$(219)+"    "+CHR$(219)+CHR$(219)
750 SIX$(7)=STRING$(8,CHR$(219))
760 SEV$(1)=STRING$(8,CHR$(219))
770 SEV$(2)=CHR$(219)+CHR$(219)+"    "+CHR$(219)+CHR$(219)
780 SEV$(3)="      "+CHR$(219)+CHR$(219)
790 SEV$(4)="      "+CHR$(219)+CHR$(219)
800 SEV$(5)="      "+CHR$(219)+CHR$(219)
810 SEV$(6)="      "+CHR$(219)+CHR$(219)
820 SEV$(7)="      "+CHR$(219)+CHR$(219)
830 EIG$(1)=STRING$(8,CHR$(219))
840 EIG$(2)=CHR$(219)+CHR$(219)+"    "+CHR$(219)+CHR$(219)
850 EIG$(3)=CHR$(219)+CHR$(219)+"    "+CHR$(219)+CHR$(219)
860 EIG$(4)=STRING$(8,CHR$(219))
870 EIG$(5)=CHR$(219)+CHR$(219)+"    "+CHR$(219)+CHR$(219)
880 EIG$(6)=CHR$(219)+CHR$(219)+"    "+CHR$(219)+CHR$(219)
890 EIG$(7)=STRING$(8,CHR$(219))
900 NIN$(1)=STRING$(8,CHR$(219))
910 NIN$(2)=CHR$(219)+CHR$(219)+"    "+CHR$(219)+CHR$(219)
920 NIN$(3)=CHR$(219)+CHR$(219)+"    "+CHR$(219)+CHR$(219)
930 NIN$(4)=CHR$(219)+STRING$(7,CHR$(219))
940 NIN$(6)=CHR$(219)+CHR$(219)+"    "+CHR$(219)+CHR$(219)
950 NIN$(5)="      "+CHR$(219)+CHR$(219)
960 NIN$(7)=STRING$(8,CHR$(219))
970 ZER$(1)=STRING$(8,CHR$(219))
980 ZER$(2)=CHR$(219)+CHR$(219)+"    "+CHR$(219)+CHR$(219)
990 ZER$(3)=CHR$(219)+CHR$(219)+"    "+CHR$(219)+CHR$(219)
1000 ZER$(4)=CHR$(219)+CHR$(219)+"    "+CHR$(219)+CHR$(219)
1010 ZER$(5)=CHR$(219)+CHR$(219)+"    "+CHR$(219)+CHR$(219)
1020 ZER$(6)=CHR$(219)+CHR$(219)+"    "+CHR$(219)+CHR$(219)
1030 ZER$(7)=CHR$(219)+STRING$(7,CHR$(219))
1040 H1=VAL(MID$(TIME$,1,1))
1050 H2=VAL(MID$(TIME$,2,1))
1060 M1=VAL(MID$(TIME$,4,1))
1070 M2=VAL(MID$(TIME$,5,1))
1080 S1=VAL(MID$(TIME$,7,1))
1090 S2=VAL(MID$(TIME$,8,1))
1095 XDA$=MID$(DATE$,4,2)
1096 Z$=INKEY$:IF Z$=CHR$(27) THEN END
1097 IF Z$="y" OR Z$="Y" THEN NOCHIME=0
1098 IF Z$="n" OR Z$="N" THEN NOCHIME=-1
1101 MIN = VAL(MID$(TIME$,4,2))
1102 HOUR = VAL(MID$(TIME$,1,2))
1103 IF HOUR = 0 THEN HOUR = 12
1104 IF CHIME = 1 AND MIN = 0 THEN GOSUB 10090
1105 IF CHIME = 1 AND MIN = 15 THEN GOSUB 10090
1106 IF CHIME = 1 AND MIN = 30 THEN GOSUB 10090
1107 IF CHIME = 1 AND MIN = 45 THEN GOSUB 10090
1108 IF (MIN = 14) OR (MIN = 29) OR (MIN = 44) OR (MIN = 59) OR (MIN = 16) OR (MIN = 31) OR (MIN = 46) OR (MIN = 1) THEN CHIME = 1
1110 IF S2=XS2 THEN 1040
1111 GOSUB 10000
1115 IF DA$<>XDA$ THEN GOSUB 4060
1120 IF H1=0 THEN 1130 ELSE 1170
1130 IF H1=XH1 THEN 1450 ELSE XH1=H1
1140 FOR I=1 TO 7
1150 TEMP$(I)=ZER$(I):NEXT I
1160 GOSUB 3100:GOTO 1450
1170 IF H1=XH1 THEN 1450 ELSE XH1=H1
1180 ON H1 GOTO 1190,1220,1250,1280,1310,1340,1370,1400,1430
1190 FOR I=1 TO 7
1200 TEMP$(I)=ONE$(I):NEXT I:GOSUB 3100
1210 GOTO 1450
1220 FOR I=1 TO 7
1230 TEMP$(I)=TWO$(I):NEXT I:GOSUB 3100
1240 GOTO 1450
1250 FOR I=1 TO 7
1260 TEMP$(I)=THR$(I):NEXT I:GOSUB 3100
1270 GOTO 1450
1280 FOR I=1 TO 7
1290 TEMP$(I)=FOU$(I):NEXT I:GOSUB 3100
1300 GOTO 1450
1310 FOR I=1 TO 7
1320 TEMP$(I)=FIV$(I):NEXT I:GOSUB 3100
1330 GOTO 1450
1340 FOR I=1 TO 7
1350 TEMP$(I)=SIX$(I):NEXT I:GOSUB 3100
1360 GOTO 1450
1370 FOR I=1 TO 7
1380 TEMP$(I)=SEV$(I):NEXT I:GOSUB 3100
1390 GOTO 1450
1400 FOR I=1 TO 7
1410 TEMP$(I)=EIG$(I):NEXT I:GOSUB 3100
1420 GOTO 1450
1430 FOR I=1 TO 7
1440 TEMP$(I)=NIN$(I):NEXT I:GOSUB 3100
1450 IF H2=0 THEN 1460 ELSE 1500
1460 IF H2=XH2 THEN 1790 ELSE XH2=H2
1470 FOR I=1 TO 7
1480 TEMP$(I)=ZER$(I):NEXT I
1490 GOSUB 3140:GOTO 1790
1500 IF H2=XH2 THEN 1790 ELSE XH2=H2
1510 ON H2 GOTO 1520,1550,1580,1610,1640,1670,1700,1730,1760
1520 FOR I=1 TO 7
1530 TEMP$(I)=ONE$(I):NEXT I:GOSUB 3140
1540 GOTO 1790
1550 FOR I=1 TO 7
1560 TEMP$(I)=TWO$(I):NEXT I:GOSUB 3140
1570 GOTO 1790
1580 FOR I=1 TO 7
1590 TEMP$(I)=THR$(I):NEXT I:GOSUB 3140
1600 GOTO 1790
1610 FOR I=1 TO 7
1620 TEMP$(I)=FOU$(I):NEXT I:GOSUB 3140
1630 GOTO 1790
1640 FOR I=1 TO 7
1650 TEMP$(I)=FIV$(I):NEXT I:GOSUB 3140
1660 GOTO 1790
1670 FOR I=1 TO 7
1680 TEMP$(I)=SIX$(I):NEXT I:GOSUB 3140
1690 GOTO 1790
1700 FOR I=1 TO 7
1710 TEMP$(I)=SEV$(I):NEXT I:GOSUB 3140
1720 GOTO 1790
1730 FOR I=1 TO 7
1740 TEMP$(I)=EIG$(I):NEXT I:GOSUB 3140
1750 GOTO 1790
1760 FOR I=1 TO 7
1770 TEMP$(I)=NIN$(I):NEXT I:GOSUB 3140
1780 GOTO 3090
1790 IF M1=0 THEN 1800 ELSE 1840
1800 IF M1=XM1 THEN 2120 ELSE XM1=M1
1810 FOR I=1 TO 7
1820 TEMP$(I)=ZER$(I):NEXT I
1830 GOSUB 3210:GOTO 2120
1840 IF M1=XM1 THEN 2120 ELSE XM1=M1
1850 ON M1 GOTO 1860,1890,1920,1950,1980,2010,2040,2070,2100
1860 FOR I=1 TO 7
1870 TEMP$(I)=ONE$(I):NEXT I:GOSUB 3210
1880 GOTO 2120
1890 FOR I=1 TO 7
1900 TEMP$(I)=TWO$(I):NEXT I:GOSUB 3210
1910 GOTO 2120
1920 FOR I=1 TO 7
1930 TEMP$(I)=THR$(I):NEXT I:GOSUB 3210
1940 GOTO 2120
1950 FOR I=1 TO 7
1960 TEMP$(I)=FOU$(I):NEXT I:GOSUB 3210
1970 GOTO 2120
1980 FOR I=1 TO 7
1990 TEMP$(I)=FIV$(I):NEXT I:GOSUB 3210
2000 GOTO 2120
2010 FOR I=1 TO 7
2020 TEMP$(I)=SIX$(I):NEXT I:GOSUB 3210
2030 GOTO 2120
2040 FOR I=1 TO 7
2050 TEMP$(I)=SEV$(I):NEXT I:GOSUB 3210
2060 GOTO 2120
2070 FOR I=1 TO 7
2080 TEMP$(I)=EIG$(I):NEXT I:GOSUB 3210
2090 GOTO 2120
2100 FOR I=1 TO 7
2110 TEMP$(I)=NIN$(I):NEXT I:GOSUB 3210
2120 IF M2=0 THEN 2130 ELSE 2170
2130 IF M2=XM2 THEN 2450 ELSE XM2=M2
2140 FOR I=1 TO 7
2150 TEMP$(I)=ZER$(I):NEXT I
2160 GOSUB 3250:GOTO 2450
2170 IF M2=XM2 THEN 2450 ELSE XM2=M2
2180 ON M2 GOTO 2190,2220,2250,2280,2310,2340,2370,2400,2430
2190 FOR I=1 TO 7
2200 TEMP$(I)=ONE$(I):NEXT I:GOSUB 3250
2210 GOTO 2450
2220 FOR I=1 TO 7
2230 TEMP$(I)=TWO$(I):NEXT I:GOSUB 3250
2240 GOTO 2450
2250 FOR I=1 TO 7
2260 TEMP$(I)=THR$(I):NEXT I:GOSUB 3250
2270 GOTO 2450
2280 FOR I=1 TO 7
2290 TEMP$(I)=FOU$(I):NEXT I:GOSUB 3250
2300 GOTO 2450
2310 FOR I=1 TO 7
2320 TEMP$(I)=FIV$(I):NEXT I:GOSUB 3250
2330 GOTO 2450
2340 FOR I=1 TO 7
2350 TEMP$(I)=SIX$(I):NEXT I:GOSUB 3250
2360 GOTO 2450
2370 FOR I=1 TO 7
2380 TEMP$(I)=SEV$(I):NEXT I:GOSUB 3250
2390 GOTO 2450
2400 FOR I=1 TO 7
2410 TEMP$(I)=EIG$(I):NEXT I:GOSUB 3250
2420 GOTO 2450
2430 FOR I=1 TO 7
2440 TEMP$(I)=NIN$(I):NEXT I:GOSUB 3250
2450 IF S1=0 THEN 2460 ELSE 2500
2460 IF S1=XS1 THEN 2780 ELSE XS1=S1
2470 FOR I=1 TO 7
2480 TEMP$(I)=ZER$(I):NEXT I
2490 GOSUB 3320:GOTO 2780
2500 IF S1=XS1 THEN 2780 ELSE XS1=S1
2510 ON S1 GOTO 2520,2550,2580,2610,2640,2670,2700,2730,2760
2520 FOR I=1 TO 7
2530 TEMP$(I)=ONE$(I):NEXT I:GOSUB 3320
2540 GOTO 2780
2550 FOR I=1 TO 7
2560 TEMP$(I)=TWO$(I):NEXT I:GOSUB 3320
2570 GOTO 2780
2580 FOR I=1 TO 7
2590 TEMP$(I)=THR$(I):NEXT I:GOSUB 3320
2600 GOTO 2780
2610 FOR I=1 TO 7
2620 TEMP$(I)=FOU$(I):NEXT I:GOSUB 3320
2630 GOTO 2780
2640 FOR I=1 TO 7
2650 TEMP$(I)=FIV$(I):NEXT I:GOSUB 3320
2660 GOTO 2780
2670 FOR I=1 TO 7
2680 TEMP$(I)=SIX$(I):NEXT I:GOSUB 3320
2690 GOTO 2780
2700 FOR I=1 TO 7
2710 TEMP$(I)=SEV$(I):NEXT I:GOSUB 3320
2720 GOTO 2780
2730 FOR I=1 TO 7
2740 TEMP$(I)=EIG$(I):NEXT I:GOSUB 3320
2750 GOTO 2780
2760 FOR I=1 TO 7
2770 TEMP$(I)=NIN$(I):NEXT I:GOSUB 3320
2780 IF S2=0 THEN 2790 ELSE 2820
2790 FOR I=1 TO 7
2800 TEMP$(I)=ZER$(I):NEXT I
2810 GOSUB 3360:GOTO 3090
2820 XS2=S2:ON S2 GOTO 2830,2860,2890,2920,2950,2980,3010,3040,3070
2830 FOR I=1 TO 7
2840 TEMP$(I)=ONE$(I):NEXT I:GOSUB 3360
2850 GOTO 3090
2860 FOR I=1 TO 7
2870 TEMP$(I)=TWO$(I):NEXT I:GOSUB 3360
2880 GOTO 3090
2890 FOR I=1 TO 7
2900 TEMP$(I)=THR$(I):NEXT I:GOSUB 3360
2910 GOTO 3090
2920 FOR I=1 TO 7
2930 TEMP$(I)=FOU$(I):NEXT I:GOSUB 3360
2940 GOTO 3090
2950 FOR I=1 TO 7
2960 TEMP$(I)=FIV$(I):NEXT I:GOSUB 3360
2970 GOTO 3090
2980 FOR I=1 TO 7
2990 TEMP$(I)=SIX$(I):NEXT I:GOSUB 3360
3000 GOTO 3090
3010 FOR I=1 TO 7
3020 TEMP$(I)=SEV$(I):NEXT I:GOSUB 3360
3030 GOTO 3090
3040 FOR I=1 TO 7
3050 TEMP$(I)=EIG$(I):NEXT I:GOSUB 3360
3060 GOTO 3090
3070 FOR I=1 TO 7
3080 TEMP$(I)=NIN$(I):NEXT I:GOSUB 3360
3090 XS2=S2:GOTO 1040
3100 FOR I=1 TO 7
3110 LOCATE 9+I,5:PRINT TEMP$(I)
3120 NEXT I
3130 RETURN
3140 FOR I=1 TO 7
3150 LOCATE 9+I,14:PRINT TEMP$(I)
3160 NEXT I
3170 FOR I=1 TO 7
3180 LOCATE 9+I,26:PRINT COL$(I)
3190 NEXT I
3200 RETURN
3210 FOR I=1 TO 7
3220 LOCATE 9+I,32:PRINT TEMP$(I)
3230 NEXT I
3240 RETURN
3250 FOR I=1 TO 7
3260 LOCATE 9+I,42:PRINT TEMP$(I)
3270 NEXT I
3280 FOR I=1 TO 7
3290 LOCATE 9+I,54:PRINT COL$(I)
3300 NEXT I
3310 RETURN
3320 FOR I=1 TO 7
3330 LOCATE 9+I,60:PRINT TEMP$(I)
3340 NEXT I
3350 RETURN
3360 FOR I=1 TO 7
3370 LOCATE 9+I,70:PRINT TEMP$(I)
3380 NEXT I
3390 RETURN
4060 MO$=MID$(DATE$,1,2)
4070 DA$=MID$(DATE$,4,2)
4080 YR$=MID$(DATE$,9,2)
4081 YR4$=MID$(DATE$,7,4)
4090 MO=VAL(MO$)
4091 YR=VAL(YR$)
4092 YR4=VAL(YR4$)
4100 ON MO GOTO 4110,4120,4130,4140,4150,4160,4170,4180,4190,4200,4210,4220
4110 MO$="JANUARY":GOTO 4230
4120 MO$="FEBRUARY":GOTO 4230
4130 MO$="MARCH":GOTO 4230
4140 MO$="APRIL":GOTO 4230
4150 MO$="MAY":GOTO 4230
4160 MO$="JUNE":GOTO 4230
4170 MO$="JULY":GOTO 4230
4180 MO$="AUGUST":GOTO 4230
4190 MO$="SEPTEMBER":GOTO 4230
4200 MO$="OCTOBER":GOTO 4230
4210 MO$="NOVEMBER":GOTO 4230
4220 MO$="DECEMBER":GOTO 4230
4230 YEAR%=YR4
4233 MONTH%=MO
4235 DAY%=VAL(DA$)
4240 IF MONTH%=1 OR MONTH%=2 THEN 4250 ELSE 4270
4250 YEAR%=YEAR%-1
4260 MONTH%=MONTH%+12
4270 DOW.K%=DAY%+YEAR%+MONTH%*2+YEAR%\4+YEAR%\400+(MONTH%+1)*3\5+2-YEAR%\100
4330 DOW%=DOW.K% MOD 7
4360 IF DOW%=0 OR DOW%=1 THEN DOW%=DOW%+7
4370 DOW%=DOW%-1
4500 ON DOW% GOTO 4510,4520,4530,4540,4550,4560,4570
4510 DOW$="MONDAY":GOTO 4580
4520 DOW$="TUESDAY":GOTO 4580
4530 DOW$="WEDNESDAY":GOTO 4580
4540 DOW$="THURSDAY":GOTO 4580
4550 DOW$="FRIDAY":GOTO 4580
4560 DOW$="SATURDAY":GOTO 4580
4570 DOW$="SUNDAY":GOTO 4580
4580 LOCATE 22,28:PRINT DOW$;", ";MO$;" ";DA$;", ";YR4$;"     "
4590 RETURN
10000 IF NOCHIME THEN RETURN ELSE IF TICKOFF < 0 THEN TICKOFF = TICKOFF + 1:RETURN
10003 IF ODD = 1 THEN SOUND 1000,1:SOUND 37,0:SOUND 32767,1:ODD = 0:RETURN
10010 SOUND 5000,1:SOUND 37,0:SOUND 32767,1:ODD = 1:RETURN
10090 CHIME = 0
10095 ODD = 0
10100 IF MIN = 15 THEN PLAY Q15$:TICKOFF = -2:RETURN
10110 IF MIN = 30 THEN PLAY Q15$+Q30$:TICKOFF = -5:RETURN
10120 IF MIN = 45 THEN PLAY Q15$+Q30$+Q15$:TICKOFF = -7:RETURN
10130 IF MIN = 0 THEN PLAY Q15$+Q30$+Q15$+Q30$:TICKOFF = -9 + -1*HOUR
10135 PLAY "mbP2"
10140 FOR II = 1 TO HOUR
10150 PLAY"MBO3CN0"
10160 NEXT II
10170 RETURN
```
{% endraw %}

## DIREDIT.DOC

{% raw %}
```
          
          Documentation for DIREDIT V3.04         Copyright 1990, P. R. Fletcher          ________________________________       _______________________________
          









                                DIREDIT - Directory Editor                                __________________________

                           Copyright (1985-1990), P. R. Fletcher                           _____________________________________
                                    All Rights Reserved                                    ___________________



                        Distributed by:

                               P. R. Fletcher (Software)
                               1515 West Montgomery Avenue
                               Rosemont
                               PA 19010



                                  _______
                             ____|__     |               (tm)
                          --|       |    |-------------------
                            |   ____|__  |  Association of
                            |  |       |_|  Shareware
                            |__|   o   |    Professionals
                          -----|   |   |---------------------
                               |___|___|    MEMBER

           
          Documentation for DIREDIT V3.04         Copyright 1990, P. R. Fletcher          ________________________________       _______________________________
          
                                     TABLE OF CONTENTS                                     _________________


          User-Supported Software                                    1
          Introduction                                               2
          Hardware and Software Requirements                         4
          Running DIREDIT                                            5
          The Screen Display                                         7
          Editing the Directory                                      7
          Sorting the Directory                                      9
          Limitations and Restrictions                              10
          Bugs and Other Unpleasant Subjects                        10
          Changes from Previous Versions                            12
          APPENDICES                                                14
            A - Summary of Single-Key Commands                      14
            B - Known Hardware Incompatibilities                    15
            C - Using DIREDIT with RAMdisks                         16
          Registration Form                                         17
           
          Documentation for DIREDIT V3.04         Copyright 1990, P. R. Fletcher          ________________________________       _______________________________
          
                                  USER-SUPPORTED SOFTWARE                                  _______________________

          Much of the software which is available for your computer has, in the
          past, been produced and sold on the assumption that you are a crook
          and that you will take any available opportunity to cheat software
          writers and vendors out of their rightful reward. Such software was
          copy-protected within an inch of its (and your computer's) life and
          was priced at a level which still guaranteed its producers a profit
          even if four or five illegal copies were made for each one sold.
          Thankfully, prices of commercial software have (for the most part)
          come down somewhat, and copy-protection is becoming much less
          prevalent, but buying such software remains something of a lottery -
          you often cannot be sure that the software does what you want in the
          way you want it done until you have paid for it. User-supported
          software is different. You may have got a copy of this program free
          from a friend or a bulletin board or (for a nominal fee) from a users'
          group or software library. In any case, you have a perfectly legal
          working copy of DIREDIT. You are encouraged to make as many copies of
          the package as you like and to distribute them to all your friends.
          If, after trying the program out, you find that it is useful and want
          to continue to keep and use it, you must register your copy by sending
          the registration fee ($20.00, unless you are already a registered user
          of HDTEST, in which case it is $10.00) together with the completed
          registration form, to the address on the form. Only your conscience
          can make you do this (although you are probably breaking the law if              ____                                                           
          you don't), but bear in mind that the distributors of "user-supported"
          software are making the assumption that you are honest and willing to
          pay a reasonable price for a useful program, many commercial software
          vendors, on the other hand, would still apparently rather believe you
          are a crook. You can decide who you would rather prove right.
          Registered users will be entitled to support, upgrades, and help with
          DIREDIT-related problems (including telephone support) for a year from
          the date of registration.

          The author of this program is a member of the Association of Shareware
          Professionals (ASP).  ASP wants to make sure that the shareware
          principle works for you. If you are unable to resolve a shareware-
          related problem with an ASP member by contacting the member directly,
          ASP may be able to help. The ASP Ombudsman can help you resolve a
          dispute or problem with an ASP member, but does not provide technical
          support for members' products. Please write to the ASP Ombudsman at
          P.O. Box 5786, Bellevue, WA 98006 or send a Compuserve message via
          easyplex to ASP Ombudsman 70007,3536"















          
          
                                          Page 1 
           
          Documentation for DIREDIT V3.04         Copyright 1990, P. R. Fletcher          ________________________________       _______________________________
          
                                       INTRODUCTION                                       ____________

          DIREDIT is a program which allows you to "edit" DOS directories. There
          are a large number of programs, some in the public domain, others
          available as components of commercial utility packages (e.g. the
          Norton Utilities (TM)), which allow directories to be sorted in                                                                ______   
          various ways (by filename, by file type ("extension"), by modification
          date, by size), but DIREDIT was initially one of the very few which
          also allowed the user to specify an arbitrary order and/or to move
          individual directory entries around at will. Although this capability
          has now become more common, I believe (and users have told me) that
          DIREDIT's "pick it up and move it" implementation is more convenient
          than the approaches used by others. DIREDIT also displays the
          directory in a very compact manner, with up to 80 file-names visible
          on the screen at once, but allows you to see the full file description
          for any entry simply by moving a cursor to the name.

          You may reasonably ask why you should care how your directories are
          arranged - one answer to this question depends on the fact that the
          order in which subdirectories and files are listed in the order in
          which DOS searches through them (when asked to find a data file or
          executable program). It follows from this that programs and data files
          will be accessed fastest if they appear at the top of the directory
          listing of the subdirectory in which they are found, and also that
          subdirectories (especially those which are specified in your PATH
          command) should, for fast access, be at the top of the root directory
          listing. On the other hand, many people find it easier to find a file
          that they are searching for if the directory is sorted in some other
          way. The advantages (in this context) of alphabetical sorts by name
          and/or type are obvious, but sorting by size or date/time (most
          recently modified files at the bottom or top) can also sometimes be
          useful.

          You can use DIREDIT for both purposes - arranging your directories on
          disk for efficient access and then resorting them temporarily on the
          screen when searching for a file without (necessarily) saving the
          resorted directory to disk.

          Although a small number of people have Registered earlier versions of
          DIREDIT, and most of these have been very enthusiastic about the
          program, it has been much less popular than HDTEST, my other Shareware
          offering. Part of the reason for this may have been that the Shareware
          version of the program, while fully functional, would only work on a
          restricted range of (IBM BIOS compatible) devices. To investigate this
          possibility, I have decided to change the way I distribute DIREDIT.
          This version of DIREDIT is (at the time of its release) the most
          recent version - the previous absolute distinction between Shareware
          and Registered versions has been abandoned, and any substantial future                                                              ___________       
          upgrades will result in new Shareware releases. The DIREDIT
          distribution "package" is "User-supported Software", and may be copied
          and distributed freely for evaluation under the normal "Shareware"
          conditions. Registration as a user of DIREDIT entitles you to receive
          the next major upgrade on disk, to be notified of the availability of
          future upgrades, bug fixes, newly discovered incompatibilities, etc.,
          and to ask for (and get) necessary help in adapting the program to
          work on your hardware. I cannot guarantee to make DIREDIT work with
          every possible combination of hardware and operating system software,
          but I will promise to try to solve problems as they come up, and I
          
          
                                          Page 2 
           
          Documentation for DIREDIT V3.04         Copyright 1990, P. R. Fletcher          ________________________________       _______________________________
          
          will return your registration fee if I cannot support the program on
          your system.  Support is available to registered users only by mail to                                             ________________________           
          me at 1515 West Montgomery Avenue, Rosemont, PA 19010, by BIXmail (to
          pfletcher), and by Compuserve EMail (to 72255,305).  Please bear in
          mind that my willingness and ability to continue to support and
          enhance these programs will be (to some extent) inversely dependent on
          the number of questions I get that could be answered by reading the
          documentation(!). Telephone support is also available to Registered
          Users.

          DIREDIT was written principally in C, compiled by the Microsoft C
          compiler (Version 5.10) using its "small" memory model, and linked
          with code from the distributed Microsoft C object libraries using the
          Microsoft LINK program (Version 4.06).  Additional assembly language
          routines were assembled by the Microsoft MASM Macro Assembler (Version
          5.10). Portions of the distributed program are consequently Copyright
          (C) by Microsoft Corp., 1985 - 1988. All rights reserved. These
          portions are used under the terms of a license from Microsoft Corp.

          DIREDIT was written with care and has been tested on a number of
          different systems.  I cannot, however, give any guarantee as to their
          performance on a specific system, nor can I accept liability for any
          actual or consequential loss resulting from their use.  The program
          may only be used and/or copied in its original form. Unauthorised
          modifications and/or the use of all or part of the program in other
          software, commercial or otherwise, are strictly prohibited.
































          
          
                                          Page 3 
           
          Documentation for DIREDIT V3.04         Copyright 1990, P. R. Fletcher          ________________________________       _______________________________
          
                             HARDWARE & SOFTWARE REQUIREMENTS                             ________________________________

          DIREDIT makes a number of assumptions about the environment in which
          it is operating. The program will, generally speaking, abort with an
          informative error message if it finds one of these assumptions to be
          untrue! It requires MS/PC-DOS 2.0 or above and at least 96 Kb of free
          memory (the exact amount required depends on the size of the target
          device and directory) to run. The device on which the target directory
          is found must be recognizable by DOS as a standard "block" device,
          addressed by one of the normal device names ("A:" through  "Z:").
          Versions of DIREDIT before V2.00 used BIOS calls to read and write the
          directory information, restricting its use to floppy disks and those
          hard disks (the majority, in fact) whose BIOSes were capable of
          handling (at least) normal disk reads and writes in a way that was
          compatible with that documented for the XT and AT disk adapters in
          IBM's technical documentation. This version of DIREDIT uses only DOS
          calls, and should, therefore, also be usable on those hard disks and
          other storage devices which are not BIOS compatible with XT/AT disks
          and/or require special drivers to be installed. RAMdisks present
          special problems, because their device drivers may not obey all the
          rules laid down by Microsoft for block-replaceable devices
          (particularly with regard to the structure and/or presence of a "boot
          sector" at the lowest numbered sector on the device). If you have
          problems running DIREDIT on a RAMdisk, you should read Appendix C for
          a more detailed discussion of likely problems and their solution.

          Users of non IBM-compatible MS-DOS systems should scan Appendix B
          before proceeding, to check that no special considerations apply to
          the running of the program on their systems. Owners of 99.99%
          IBM-compatible "clones" should not have any problems.  DIREDIT will
          not run in the DOS compatibility box under OS/2 (OS/2 does not support          ___                                                                   
          the DOS INT 25/26 disk read/write interrupts), and should be used only
          with great caution under other DOS-compatible multi-user and/or multi-
          tasking OSes.
























          
          
                                          Page 4 
           
          Documentation for DIREDIT V3.04         Copyright 1990, P. R. Fletcher          ________________________________       _______________________________
          
                                   RUNNING DIREDIT                                   _______________

          Although DIREDIT will, in practice, coexist happily with most resident                                                                   ____         
          software ("Pop-ups", desk utilities, resident spelling checkers,
          etc.), the total impossibility of my checking every one of the
          hundreds of commercial, shareware, and PD resident utilities for
          compatibility forces me to suggest that you remove such software from
          memory before running DIREDIT. You should never use any resident                                                    _____                 
          software that may read or write to the device you are "editing" from                                                                          ____
          within DIREDIT. Similarly, you should not run DIREDIT under a DOS-          ______________                                                    
          compatible multi-user or multi-tasking operating system unless you are
          absolutely sure that no other tasks and/or users are accessing the
          device that it is working on.

          The program is invoked with the command:

                                  DIREDIT [pathname]

          If a pathname is not specified on the command line, the program will
          default to the current directory. Otherwise, any valid DOS path
          specification may be used (some examples are:  A:\; A:\SUB1\SUB2;
          \SUB1\SUB2 {referred to the root directory of the current device};
          SUB3\SUB4 {starting from the current directory}). Note that there is
          one difference between the way DIREDIT interprets path specifications
          and the way DOS normally does. DIREDIT will interpret a specification
          which contains a drive but no path (e.g. A:) as referring to the root                                                                           ____
          directory on the specified drive, rather than the default directory on                                                            _______             
          that drive (if one has been named in a "CD" command).

          DIREDIT will display its copyright screen and pause until you press a
          key - it will then read in the directory to be edited and check to see
          whether the first file or files in the directory have the "System"
          attribute. If they do (typically true for the files that contain the
          normally resident component of the operating system, which are to be
          found in the root directory of a bootable disk), DIREDIT asks whether
          you wish to exclude these files from directory sort operations. You
          should not override the default ("Y") answer to this question unless
          you are sure you know what you are doing (!) - if the operating system
          boot files are not first in the directory, the disk will cease to be                         ___                                                  
          bootable. After you have responded to this question (assuming that it
          was necessary for DIREDIT to ask it) the program will switch to its
          normal display mode.

          On the upper 20 lines of the terminal screen are displayed up to 80
          "identifier blocks", each comprising an ID number (which initially
          corresponds to the position of the directory entry in the directory)
          and a file name. An inverse video box cursor, initially positioned
          over the first (top lefthand) block, indicates the current entry. This
          box can be moved to highlight any visible block by using the arrow
          keys. The "Cursor->" display line at the bottom of the screen shows
          the full description of the file or directory whose name is in the
          current block. In addition to "normal" directory information (name,
          creation date and time, size) this line shows whether any of the DOS





          
          
                                          Page 5 
           
          Documentation for DIREDIT V3.04         Copyright 1990, P. R. Fletcher          ________________________________       _______________________________
          
          file attribute bits are set. Set bits are indicated by the appearance
          of one or more upper-case letters at the end of the line. The
          possibilities are:

          [A]rchive - this indicates that the file has been modified since it
          was last backed up by the DOS BACKUP utility. Under DOS 3.2, this bit
          can also be set or reset by using the ATTRIB command.

          [H]idden - this indicates that the file has been made invisible to
          normal directory searches. The system files on a bootable disk will
          always be labelled as "hidden" (as well as "system"), as will some
          files created by software copy-protection systems.

          [R]eadonly - this indicates that the file can be "seen" and read but
          not written to or deleted. Under DOS 3.x, this bit can be set or reset
          using the ATTRIB command.

          [S]ystem - this indicates that the file is a "system" file. DOS does
          not currently make any special use of this bit, which was inherited
          from CP/M, but this may change in future revisions. "System" files are
          always also labelled "hidden" to make them invisible to normal
          directory searches.

          If there are less than 81 active directory entries (the normal case!),
          all will be displayed at once, otherwise only the first 80 will
          (initially) be visible.
































          
          
                                          Page 6 
           
          Documentation for DIREDIT V3.04         Copyright 1990, P. R. Fletcher          ________________________________       _______________________________
          
                                    THE SCREEN DISPLAY                                    __________________

          The names and ID numbers of up to 80 files and/or subdirectories are
          displayed on the top 20 lines of the screen. If the directory being
          edited contains more than this number of entries, DIREDIT allows you
          to "page" up and down within it so that you can inspect or operate on
          any entry. In this case (more than 80 files in the directory), the
          screen is divisible into two windows through an imaginary line drawn
          vertically down its center. The left-hand window will always contain
          40 blocks; the right-hand one will contain up to 40 more. Each window
          may be positioned (using the <PgUp>, <PgDn>, <Home>, and <End> keys)
          anywhere within the directory, except that the two windows may never
          overlap and that the left hand window must always remain "below" the
          right hand one in the directory. When the program starts up, the two
          windows are "locked", so that they move together. Pressing the "L" key
          toggles the lock so that they can move independently.

          <PgUp> (or <F3>) moves the current window (i.e. the one which contains
          the block cursor) up by twenty entries.

          <PgDn> (or <F4>) moves the current window down by twenty entries.

          <Home> moves the current window as far towards the beginning of the
          directory as possible (so that the first 40 (or 80) entries are
          shown).

          <End> moves the current window as far towards the bottom of the
          directory as possible (so that the screen shows the last 21 to 40 (or
          61 to 80) entries).

          If the windows are not "locked" together and an attempted window move
          would otherwise cause them to overlap (i.e. the inactive window is
          immediately adjacent to the current one in the direction of the
          attempted move) OR the windows are "locked" together (which is the
          default case), both windows are moved. If an attempted window move
          would cause either window to go off the top or bottom of the file, it
          does not take place and the command is simply ignored (no error
          message is generated). Note that window moves do not normally affect
          the position of the cursor within the window.                                     _________________ 

          The lower part of the screen display shows additional details of the
          directory entry on which the cursor is positioned, similar details of
          the entry that is being "moved" (if any), and other information. The
          bottom line shows the full pathname of the directory being edited. The
          last character on this line, which is normally blank, is changed to an
          asterisk (*) if any changes have been made to the directory being
          edited.

                                   EDITING THE DIRECTORY                                   _____________________

          The simplest way of making small changes to the order of files in the
          directory is by moving individual entries. An individual entry is
          moved by positioning the cursor on the identifier block, "picking it
          up" by pressing the <Del> key, positioning the cursor at the point to
          which the entry is to be moved, and "inserting" it there by pressing
          the <Ins> key. The full description of the entry that is in the
          process of being moved is shown on the "Moving->" display at the
          bottom of the screen. You may not exit (which causes the disk
          
          
                                          Page 7 
           
          Documentation for DIREDIT V3.04         Copyright 1990, P. R. Fletcher          ________________________________       _______________________________
          
          directory to be updated, and would, in this case, cause the "moving"
          entry to be lost) while an entry is being moved - you must replace it
          somewhere first. An entry which is being moved is also automatically
          put back (at the current cursor position) before a sort operation is
          carried out. Note that you can move "System" entries from the                                     ___                               
          beginning of the root directory manually, but you will be prompted for                                          ________                              
          confirmation before you are allowed to "pick them up".

          A number of other single-key commands are implemented, as described
          below. Many of them trigger short dialogues, and the commands with
          potentially far-reaching effects usually require confirmation before
          you are allowed to do something you might regret. Note that, although
          the editor commands do not require that the <Return> key be pressed
          also, responses to prompts always do.

          "D" - change the date stamp on the current file. The program prompts
          with the current date stamp - the new date should be entered in the
          same format. Invalid dates will be rejected but any valid date between
          January 1, 1980 and December 31, 2099 may be entered. <CR> retains the
          current date stamp.

          "L" - toggle the "lock" which (by default) forces both windows to move
          together. This has no perceptible effect unless there are more than 80
          entries in the directory.

          "M" - display the next of a series of single-line "aides-memoire" to
          available commands which appear on the 23rd line of the screen.
          Repeatedly pressing this key will cycle through lines describing all
          valid commands.

          "N" - edit a new directory (you are automatically given the option of
          writing the one currently being edited to disk first, if changes have
          been made to it).

          "Q" - quit the program without updating the current directory. If you                                 _______                                       
          have made any changes during the current session, the program will
          prompt for confirmation before actually quitting.

          "R" - rename the current file. The program will prompt you to enter
          the new name. Invalid names (too long, containing illegal characters,
          etc.) will be rejected, as will a name that is the same as one of
          another file entry in the current directory. <CR> retains the current
          name.

          "S" - sort the directory (see below).

          "X" - exit and (if any changes have been made) update the current
          directory.

          "?" or <F1> - display help text.








          
          
                                          Page 8 
           
          Documentation for DIREDIT V3.04         Copyright 1990, P. R. Fletcher          ________________________________       _______________________________
          
                                    SORTING THE DIRECTORY                                    _____________________

          The directory display (and, ultimately, the directory on disk) may be
          sorted by date, filename, extension, or file size, in ascending or
          descending order. It may also be rearranged in any other arbitrary
          order you care to specify.

          When you press "S", the program will pause for two seconds to give you
          time to press another key, indicating the type of sort required. If
          you do not type anything within the time allowed, or if the key you
          press does not indicate a valid choice, the program will determine
          your choice by asking you a series of questions. The choices (in the
          order in which they are presented) are:

          "[O]ptimal" order - This sorts the directory for greatest efficiency
          (under normal circumstances). Subdirectories are put first, in
          alphabetical order by name, then come executable files (those with
          .BAT, .COM, and .EXE extensions) sorted in alphabetical order by
          extension and name. Finally come the rest of the files in the
          directory, sorted alphabetically by name.

          [U]ser-Specified Order - this option allows you to rearrange the file
          entries in an arbitrary order. You will be prompted to enter two lists
          of file numbers (the numbers displayed next to the filenames on the
          screen). The first list should contain the numbers of files which you
          would like to move to the top of the directory (in the order in which
          you want them to appear there) - the second should contain the numbers
          of files which you want to move to the bottom, also in the order in
          which they are to appear. Either list may be empty (just press
          <Return>). The lists should contain only the file numbers, as decimal
          integers, separated by one or more spaces and/or tabs.

          Sort by [F]ilename - sorts alphabetically by name and extension.

          Sort by [E]xtension - sorts by extension first, then by filename (for
          files with the same extension).

          Sort by [D]ate/Time - sorts by file modification date, then by
          modification time.

          Sort by file [S]ize - does what it says (!)

          For all of these options except "user-specified order", the program                                   ______                                    
          also prompts you to specify whether you want the directory sorted in
          [A]scending or [D]escending order before it completes the sort.
          Ascending order is from A to Z for alpha sorts, from past to future
          for the date/time sort, and from small to big for the size sort.
          Descending order is, of course, the reverse in each case.

          "System" files at the beginning of a directory will be excluded from
          all sorts unless specifically included (by a "N" response when the                                        __                                  
          program asks you whether you want them excluded). In fact, if you have
          moved such a file manually to some other position, any sort will
          result in its being put back where it came from.




          
          
                                          Page 9 
           
          Documentation for DIREDIT V3.04         Copyright 1990, P. R. Fletcher          ________________________________       _______________________________
          
                                      IMPORTANT NOTE                                      ______________

          You should review the directory you have been editing (e.g. by using
          the DOS DIR command) after exiting from DIREDIT, in order to check
          that it looks the way it should. If it doesn't look right, before                                                                     ______
          doing anything else, run CHKDSK or reboot the system and then check it          ___________________                                                   
          again - if it still doesn't look right, you will have to DIREDIT it
          again. These precautions are advised because DOS keeps a number of
          sectors worth of data (including directory data) from your disks in
          memory (the actual number of sectors held in this way is set by the
          "BUFFERS=..." line in CONFIG.SYS. If you use DIREDIT (which reads and
          writes the directory sectors using low-level DOS functions) to change
          a directory that DOS is holding in memory, the BUFFERed image of the
          directory is not automatically updated. This deficiency in DOS                       ___                                              
          presents a potential problem because, if you were then to do something
          that changed the directory (write a new file, change an old file,
          etc.) from within DOS, DOS would make the appropriate changes to its
          copy of the (old) directory and write it back over the new directory.                       ___                              ____                   
          Because there appears to be no way of telling DOS that the contents of
          its sector buffers may be invalid, DIREDIT attempts to flush them
          (before exiting) by performing a number of manoeuvres which result in
          multiple DOS disk read operations. It is possible (though not very                            ____                                            
          likely) that there are circumstances under which DIREDIT will fail to
          flush the DOS sector buffers when it terminates - running CHKDSK
          always seems to flush them successfully, and rebooting is guaranteed
          to do so. Because other disk cache programs intercept all DOS level                                                                ___          
          disk read and write calls, they should present no problems to DIREDIT.                                                         __                     


                               LIMITATIONS AND RESTRICTIONS                               ____________________________

          The current version of DIREDIT has a few theoretical limitations,
          which result from the way data is stored internally by the program.
          None of them is likely to be encountered in normal use of the program
          on any but the most bizarre hardware. The program's memory usage
          depends more on the size of the target device than on that of the                                                 ______                    
          target directory, but it should operate happily with any conceivable                 _________                                                    
          device and directory size on any system with at least 256 Kb of free
          memory (over and above that occupied by DOS), and will usually require
          much less free memory than this.

                            BUGS AND OTHER UNPLEASANT SUBJECTS                            __________________________________

          Although, like all programmers, I would like to think that my program
          was perfect, it is possible that there are a few bugs lurking in its
          depths, and quite likely that there exists some combination of
          software and hardware which DIREDIT cannot figure out and/or cope
          with. If you think you have found a bug and/or if you cannot get the
          program to work on your system, proceed as follows:

          1) Reread this documentation! Make sure that you are doing exactly
          what the documentation and/or program prompts tell you to do. Make
          sure (if you are trying to edit a directory on a drive with removable
          media) that the media is not write-protected.

          2) Boot your system from a "virgin" DOS disk - preferably a copy of
          your DOS distribution disk - and try to run DIREDIT again. If the
          program runs in this limited environment, but not in your normal DOS
          
          
                                         Page 10 
           
          Documentation for DIREDIT V3.04         Copyright 1990, P. R. Fletcher          ________________________________       _______________________________
          
          environment, try reconstructing the system under which it failed (by
          adding things one by one until the problem recurs) and let me know
          about the incompatibility.

          3) If the above approaches do not help, or if they appear to confirm
          an undocumented incompatibility, send me as detailed a description of
          the problem as possible and I will do my best to diagnose and fix it.
          A bug/incompatibility report should always include a full description                                              ______           ____            
          of the system (software and hardware) on which the program is being
          run. Send reports/questions by mail to the address given on the first
          page of this documentation, by BIXmail (to pfletcher), by Compuserve
          EMail (to 72255,305) or, for Registered Users with urgent problems,                                       ________________      ______          
          call me on the telephone (the number is to be found on the card or
          letter which you should have received acknowledging your
          Registration).  Please bear in mind that my willingness and ability to
          continue to support and enhance these programs will be dependent on
          the number of Registrations I receive, and (to some extent) inversely
          dependent on the number of questions I get that could be answered by
          reading the documentation(!).







































          
          
                                         Page 11 
           
          Documentation for DIREDIT V3.04         Copyright 1990, P. R. Fletcher          ________________________________       _______________________________
          
                              CHANGES FROM PREVIOUS VERSIONS                              ______________________________

          The first version of DIREDIT that was generally released was V1.20.
          The following only shows changes incorporated at each of the
          subsequent significant "watersheds" in the program's development prior
          to V3.00. Intermediate versions will have contained some but not all
          of the changes shown as included in the releases listed here. The
          V2.xx releases were only sent to Registered Users.

          V3.04 (this version)          _____               

          1) Fix for bug causing problem with program finding .HLP file in PATH
          (last directory path in PATH was not being parsed correctly).

          V3.02          _____

          1) Minor changes to termination code (to ensure that user-selected
          DOS screen colors are restored after exit).

          2) Minor changes to startup code and copyright screen, with no
          functional consequences.

          V3.00          _____

          1) ANSI driver requirement removed. Major rewrite of low-level screen-
          handling code to use Microsoft C V5.1 screen support functions.

          2) Full DOS 4.0 (and Compaq DOS 3.31) support added.


          V2.24          _____

          1) Minor deficiencies (stray characters) in lower part of screen
          display corrected.

          2) Minor (and possibly inconsequential) logic error in assembly
          language code fixed. This error could have been responsible for the
          rare reports I have received of system crashes and/or "Stack Overflow"
          errors as the program terminates on some clones, but I have been
          unable to duplicate the described problems on any of the systems to
          which I have access.

          3) Deficiency preventing a move to the last space in the directory                                          __                                
          corrected.


          V2.20          _____

          1) Changes to cursor key routines to implement "wrapping" from
          beginning to end and from side to side of the screen.

          2) Bugs and deficiencies in new disk I/O routines fixed.






          
          
                                         Page 12 
           
          Documentation for DIREDIT V3.04         Copyright 1990, P. R. Fletcher          ________________________________       _______________________________
          
          V2.00          _____

          1) Added "Optimal" order option to [S]ort command.

          2) Added ability to specify type of sort by single additional
          character appended to [S]ort command.

          3) Changes to disk I/O routines to support a greater variety of
          devices.


          V1.51          _____

          1) Bugs causing improper operation of the [R]ename option fixed.

          2) Copyright screen modified (to show author's new address!).


          V1.40          _____

          1) Bug causing the program to abort with a "Non-existent or Invalid
          Directory" error if the program were given a path specification
          containing only a drive name (e.g. A:) fixed.

          2) Memory allocation/deallocation problem causing the program to abort
          with a "Invalid Device" error after the "N" option was used to edit a
          (variable) number of directories one after another fixed.

          3) ANSI driver reset to normal mode (insert line feed after 80th
          successive printable character output to screen) when program exits.

          4) Changes to program logic to reduce unnecessary screen updating.


          V1.30          _____

          1) Bug causing sorts by file size to result in incorrect ordering
          under some circumstances fixed.

          2) Ability to use the faster screen output mode provided by certain
          ANSI enhancers added.

















          
          
                                         Page 13 
           
          Documentation for DIREDIT V3.04         Copyright 1990, P. R. Fletcher          ________________________________       _______________________________
          
                        APPENDIX A - SUMMARY OF SINGLE-KEY COMMANDS                        ___________________________________________


          <PgUp> (or <F3>) - move the current window up by twenty entries.

          <PgDn> (or <F4>) - move the current window down by twenty entries.

          <Home> - move the current window as far towards the beginning of the
          directory as possible.

          <End> - move the current window as far towards the bottom of the
          directory as possible.

          <Del> - "pick up" directory entry for move.

          <Ins> - "put down" directory entry.

          "D" - change the date stamp on the current file.

          "L" - toggle the "lock" which (by default) forces both windows to move
          together.

          "M" - display the next of a series of single-line "aides-memoire" to
          available commands which appear on the 23rd line of the screen.

          "N" - edit a new directory.

          "Q" - quit the program without updating the current directory.                                 _______                                

          "R" - rename the current file.

          "S" - sort the directory - subcommands:
              "D" - by date/time.
              "E" - by extension.
              "F" - by filename.
              "O" - "optimal" order.
              "S" - by file size.
              "U" - user-specified (arbitrary) order.

          "X" - exit and (if any changes have been made) update the current
          directory.

          "?" or <F1> - display help text.















          
          
                                         Page 14 
           
          Documentation for DIREDIT V3.04         Copyright 1990, P. R. Fletcher          ________________________________       _______________________________
          
                       APPENDIX B - KNOWN HARDWARE INCOMPATIBILITIES                       _____________________________________________


          Tandy 2000 - Earlier versions of DIREDIT would run on this machine but
          the screen output was badly scrambled, effectively making it useless.
          The current version of the program uses totally different screen
          output routines, so the problem may be solved, but this has not yet                                                                      ___    
          been confirmed.

          TI Professional - DIREDIT must be run under the (TI-supplied)
          EMULATE.COM program. <F3> and <F4> are used instead of PgUp and PgDn
          (which do not exist on the TI keyboard).














































          
          
                                         Page 15 
           
          Documentation for DIREDIT V3.04         Copyright 1990, P. R. Fletcher          ________________________________       _______________________________
          
                         APPENDIX C - USING DIREDIT WITH RAMDISKS                         ________________________________________


          In general, you can most conveniently arrange files on a RAMDisk
          simply by copying them onto it in the order in which you want them to
          appear in the directory listing. The following discussion is for those
          who like to do things the hard way and have some understanding of the                                             ___                               
          hardware (!). RAMDisk drivers go to different lengths to emulate
          "real" devices, from those (the minority) which create a complete
          memory image of a floppy or hard disk, including a valid boot sector,
          to those which rely on the device driver code to interpret sector read
          and write commands on the basis of its own "understanding" of what may
          be a very non-standard "disk" format. DIREDIT can and does use more
          than one approach to deduce the format of a disk (hard, floppy, or
          RAM!), but the program needs information which is not normally
          available to programs running under DOS, and usually gets it from the
          BIOS Parameter Block (BPB) area in the device's boot sector. If there
          is no boot sector, the only remaining way of getting the needed
          information requires DOS 3.2 or above and that the device driver
          supports the generic IOCTL functions which were introduced with
          DOS 3.2 (few, if any, RAMDisk driverss do support these functions at
          present). If there is a boot sector and it is valid, DIREDIT should                             __               _______________                
          not have any problems. If there is a boot sector but the information
          in it is incomplete or invalid, you may be able to make it usable by
          using the VALIDATE program supplied with this package.

          The command syntax for VALIDATE is "VALIDATE d", where d is replaced
          by the device name of your RAMDisk (with or without a ":"). The
          program will also allow modification of the boot sectors on floppy and
          hard disks, but should be used with care, if at all, on these devices
          unless you are absolutely sure you know what you are doing. VALIDATE                         _______________                                      
          reads the first logical sector on the device and, if it seems possible
          that this is a boot sector, displays the contents of what should be
          its BPB area. You can then (with some help from the program) adjust
          the contents of the BPB, presumably to reflect reality, and write it
          back to the RAMDisk. VALIDATE will not allow you to write an obviously
          incorrect or inconsistent BPB back to the disk, but there are limits
          to its ability to identify invalid data - you should know what you are
          doing before you make any changes. For some reason, RAMDisk drivers
          frequently create boot sectors which do not end with the standard
          (55AA Hex) boot segment "signature", but are otherwise valid. The
          "signature" is added automatically by VALIDATE when the sector is
          rewritten, even if no other changes are made. After you have rewritten
          the boot sector, DIREDIT should work properly on the disk.

          I am aware that these instructions are somewhat cursory - if you have
          a real need to use DIREDIT on a RAMDisk and want more help, contact me
          directly.










          
          
                                         Page 16 
 
                           REGISTRATION FORM - DIREDIT                           ___________________________

     Please complete this form and return it with a check or money order (no
     cash, please) for $20.00 ($30.00 Canadian, L15.00 Sterling) to:

                     Peter R. Fletcher
                     1515 West Montgomery Avenue
                     Rosemont
                     PA 19010
                     U.S.A.

     None of the information on this form will be passed on to any other
     individual or commercial organization. Use the back of the form for
     comments or additional space.

     --------------------------------------------------------------------------

     This information is required to process your Registration:

     Last Name:____________________________  Other Names:______________________

     Address:______________________________  Town/City:________________________

     State:_____________  Post Code:____________  Telephone:_________________
                                                           (evenings/weekends)

     DIREDIT Version #:_______________  Serial #:_______________
                                (see copyright screen)

     I understand that this software is supplied without warranty, express or
     implied, and agree not to hold its author liable for any direct or
     consequential loss arising out of my use of it.

     Signature:______________________________

     -------------------------------------------------------------------------

     You are requested, but not required, also to answer the following
     questions:

     On What type(s) of computer are you using DIREDIT? ______________________

     CPU (8088, 8086, etc.)? __________   Amount of RAM (kB)? ____________

     Type & Size of Hard Disk(s)? ____________________________________

     Make and Type of Hard Disk Controller(s)? ______________________________

     Do you own a Modem?                                             Y  N

     Are you a member of BIX?   Y  N        Compuserve?              Y  N

     How did you obtain/hear about this program?

     Did you think that the $20.00 registration fee for this program was:

     Very Good Value?              About Right?             Excessively High?


     Are there any other utility programs that you would like to see made
     available as "User Supported Software"? What sort of programs?


```
{% endraw %}

## DT.BAS

{% raw %}
```bas
1 'Revision - Improved instruction line 5-6-87.
2 'Revision - Changed cursor and added color 7-21-87.
3 'Revision - Lowered price from $5.00 to $3.50 on 9-1-87.
10 'Copyright 1987 Robert L. Brown, 322 Davis Drive, Kingston, TN 37763
20 COLOR 0,6:CLS:COLOR 15,6:LOCATE 2,30,0:PRINT"SET DATE AND TIME"
30 COLOR 14,1:LOCATE 14,19:PRINT SPC(43)
40 LOCATE 15,19:PRINT spc(12)"BROWN ENTERPRISES"SPC(14)
50 LOCATE 16,19:PRINT SPC(13)"322 Davis Drive"SPC(15)
60 LOCATE 17,19:PRINT SPC(12)"Kingston, TN 37763"SPC(13)
70 locate 18,19:print spc(43)
72 LOCATE 19,19:PRINT SPC(4)"(C) Copyright 1987 Robert L. Brown"SPC(5)
74 LOCATE 20,19:PRINT SPC(15)"Price $3.50"spc(17)
76 LOCATE 21,19:PRINT SPC(43):COLOR 7,6
80 LOCATE 6,14:PRINT"(To change default date enter six digits as MMDDYY)"
90 LOCATE 7,20:PRINT"(Example:  Enter June 4, 1987 as 060487)"
100 color 7,6:LOCATE 4,26:PRINT"Default date:  "
110 LOCATE 23,25:PRINT"Continue with <R> or cursors.  Exit with <Esc>."
120 H=2:D=1:LK=4:XK=41:ZK=6:ZZK=10
125 color 15,6:locate 23,9:print" Set new Date."
130 GOSUB 370:COLOR 15,6
140 IF D$="" THEN D$=DATE$
150 IF VAL(RIGHT$(D$,2))<80 THEN D$=LEFT$(D$,6)+"20"+RIGHT$(D$,2)
152 ON ERROR GOTO 970
160 D=0:DATE$=D$:LOCATE 4,41:PRINT D$
170 color 7,6:LOCATE 11,15:PRINT"(To change default time enter four digits as HHMM)"
180 LOCATE 12,25:PRINT"(Example:  Enter 8:07 as 0807)"
190 LOCATE 9,27:PRINT"Default time:"
200 H=10:T=1:TM$="on":F=1:LK=9:XK=42:ZK=4:ZZK=10
205 color 15,6:locate 23,9:print" Set new Time."
210 LOCATE ,,1,5,7:GOSUB 370:COLOR 15,6
220 IF TI<12 THEN LOCATE 9,43:PRINT LEFT$(TIME$,5)" am":GOTO 250
222 LOCATE ,,0:TI=VAL(LEFT$(TIME$,2))
250 LOCATE 9,43:PRINT USING "##";TI:LOCATE 9,45:PRINT MID$(TIME$,3,3)
260 T=0:T$=TIME$
270 H=11:XK=48:ZK=1:ZZK=1
275 locate 23,9:print"Set <a>m/<p>m."
280 GOSUB 370:COLOR 15,6
290 IF LTR$=CHR$(13) THEN color 7,0:CLS:COLOR 14,1:LOCATE 1,1:PRINT DATE$:LOCATE 1,70:PRINT TIME$:COLOR 7,0:locate ,,1,5,7:SYSTEM
300 IF LTR$="A" OR LTR$="a" THEN 330
310 IF LTR$="P" OR LTR$="p" THEN 350
320 BEEP:GOTO 280
330 TI=VAL(LEFT$(TIME$,2)):IF TI>11 THEN TI=TI-12:COLOR 15,6:LOCATE 9,48:PRINT"am":GOTO 360
340 color 7,0:CLS:COLOR 14,1:LOCATE 1,1:PRINT DATE$:LOCATE 1,70:PRINT TIME$:COLOR 7,0:locate ,,1,5,7:SYSTEM
350 TI=VAL(LEFT$(TIME$,2)):IF TI<12 THEN TI=TI+12:COLOR 15,6:LOCATE 9,48:PRINT"pm"
360 TI$=MID$(STR$(TI),2,2):TIME$=TI$+":"+MID$(T$,4,2):COLOR 7,0:CLS:COLOR 14,1:LOCATE 1,1:PRINT DATE$:LOCATE 1,72:PRINT TIME$:COLOR 7,0:locate ,,1,5,7:SYSTEM
370 XP$="":COLOR 14,1:LOCATE 1,1,0:PRINT SPC(1) DATE$ SPC(1)
372 COLOR 15,6:LOCATE 4,41:PRINT DATE$
384 IF TIME$<T$ THEN T$=TIME$:GOTO 370
386 IF TIME$>T$ THEN T$=TIME$ ELSE 490
400 LOCATE ,,0:TI=VAL(TIME$):IF TI>11 THEN M$="pm" ELSE M$="am"
402 IF TI>12 THEN TI=TI-12
410 IF TI=0 THEN TI=12
420 COLOR 14,1:LOCATE 1,69,0:PRINT USING "##";TI:LOCATE 1,71,0:PRINT RIGHT$(TIME$,6)
430 IF M$="am" THEN LOCATE 1,77,0:PRINT" am ":GOTO 442
440 IF M$="pm" THEN LOCATE 1,77,0:PRINT" pm "
442 IF XP$>"" AND T=1 THEN 480
450 IF TM$="on" THEN COLOR 15,6:LOCATE 9,42,0:PRINT USING "##";TI:LOCATE 9,44:PRINT MID$(TIME$,3,3)
460 IF TM$="on" THEN LOCATE 9,47,0:PRINT" "M$" "
480 LOCATE LK,XK+LEN(XP$),1,5,7
490 LTR$=INKEY$:IF LTR$="" GOTO 384
500 COLOR 0,6:LOCATE 5,31:PRINT SPC(15):IF LTR$=CHR$(13) THEN RETURN
510 IF LEN(LTR$)>1 THEN LOCATE ,,0:GOTO 870
520 IF LTR$=CHR$(27) THEN COLOR 7,0:CLS:COLOR 14,1:LOCATE 1,1:PRINT DATE$:LOCATE 1,70:PRINT TIME$:COLOR 7,0:locate ,,1,5,7:SYSTEM
530 IF H=11 THEN 290
540 IF LEN(XP$)=0 AND LTR$=CHR$(8) GOTO 490
550 IF LTR$=CHR$(8) GOTO 860
560 IF D=1 GOTO 610
570 IF T=1 THEN 750
580 XP$=XP$+LTR$
590 IF LEN(XP$)>ZK THEN BEEP:XP$=LEFT$(XP$,LEN(XP$)-1)
600 COLOR 14,1:LOCATE LK,XK+LEN(XP$)-1:PRINT LTR$:LOCATE LK,XK+LEN(XP$),1,5,7:GOTO 490
610 IF LTR$=CHR$(13) AND LEN(XP$)<6 THEN D$="":RETURN
620 IF LTR$<CHR$(48) OR LTR$>CHR$(57) THEN BEEP:LOCATE LK,XK+LEN(XP$),1,5,7:GOTO 490
630 XP$=XP$+LTR$:COLOR 14,1:LOCATE LK,XK+LEN(XP$):PRINT SPC(6-LEN(XP$)):COLOR 0,6:PRINT SPC(4)
640 IF LEN(XP$)=1 AND VAL(LEFT$(XP$,1))<0 OR VAL(LEFT$(XP$,1))>1 GOTO 850
650 IF LEN(XP$)=2 AND VAL(LEFT$(XP$,2))<1 OR VAL(LEFT$(XP$,2))>12 GOTO 850
660 IF LEN(XP$)=3 AND VAL(MID$(XP$,3,1))<0 OR VAL(MID$(XP$,3,1))>3 GOTO 850
670 IF LEN(XP$)=4 AND VAL(MID$(XP$,3,2))<1 OR VAL(MID$(XP$,3,2))>31 GOTO 850
680 IF LEN(XP$)=5 AND VAL(RIGHT$(XP$,1))<0 OR VAL(RIGHT$(XP$,1))>9 GOTO 850
690 IF LEN(XP$)=6 AND VAL(RIGHT$(XP$,1))<0 OR VAL(RIGHT$(XP$,1))>9 GOTO 850
700 IF LEN(XP$)=6 GOTO 720
710 GOTO 600
720 IF VAL(RIGHT$(XP$,2))>50 AND VAL(RIGHT$(XP$,2))<100 THEN DYR$="19"
730 IF VAL(RIGHT$(XP$,2))>=0 AND VAL(RIGHT$(XP$,2))<51 THEN DYR$="20"
740 D$=LEFT$(XP$,2)+"-"+MID$(XP$,3,2)+"-"+DYR$+RIGHT$(XP$,2):RETURN
750 IF LTR$=CHR$(13) AND LEN(XP$)<4 THEN T$="":RETURN
760 IF LTR$<CHR$(48) OR LTR$>CHR$(57) THEN BEEP:LOCATE LK,XK+LEN(XP$),1,5,7:GOTO 490
770 XP$=XP$+LTR$:COLOR 14,1:LOCATE LK,XK+LEN(XP$):PRINT SPC(4-LEN(XP$)):COLOR 0,6:PRINT SPC(1)
780 IF LEN(XP$)=1 AND VAL(LEFT$(XP$,1))<0 OR VAL(LEFT$(XP$,1))>2 GOTO 850
790 IF LEN(XP$)=2 AND VAL(LEFT$(XP$,2))<0 OR VAL(LEFT$(XP$,2))>23 GOTO 850
800 IF LEN(XP$)=3 AND VAL(MID$(XP$,3,1))<0 OR VAL(MID$(XP$,3,1))>5 GOTO 850
810 IF LEN(XP$)=4 AND VAL(MID$(XP$,3,2))<0 OR VAL(MID$(XP$,3,2))>59 GOTO 850
820 IF LEN(XP$)=4 GOTO 840
830 GOTO 600
840 TIME$=LEFT$(XP$,2)+":"+RIGHT$(XP$,2):XP$="":RETURN
850 BEEP
860 XP$=LEFT$(XP$,LEN(XP$)-1):COLOR 14,1:LOCATE LK,XK:PRINT XP$ SPC(ZK-LEN(XP$)):LOCATE LK,XK+LEN(XP$),1,5,7:GOTO 490
870 IF H=10 AND LTR$=CHR$(0)+CHR$(77) THEN 960
880 IF H=10 AND LTR$=CHR$(0)+CHR$(75) THEN 960
890 IF H=10 AND LTR$=CHR$(0)+CHR$(72) THEN COLOR 15,6:LOCATE 9,42,0:PRINT USING "##";TI:LOCATE 9,44:PRINT MID$(TIME$,3,3):GOTO 100
900 IF H=10 AND LTR$=CHR$(0)+CHR$(80) THEN COLOR 15,6:LOCATE 9,42,0:PRINT USING "##";TI:LOCATE 9,44:PRINT MID$(TIME$,3,3):GOTO 100
910 IF H=11 AND LTR$=CHR$(0)+CHR$(75) THEN 200
920 IF H=11 AND LTR$=CHR$(0)+CHR$(77) THEN 200
930 IF H=11 AND LTR$=CHR$(0)+CHR$(72) THEN 100
940 IF H=11 AND LTR$=CHR$(0)+CHR$(80) THEN 100
950 RETURN
960 COLOR 15,6:LOCATE 9,42,0:PRINT USING "##";TI:LOCATE 9,44:PRINT MID$(TIME$,3,3):GOTO 260
970 BEEP:D$=DATE$:T$=TIME$:COLOR 14,1:LOCATE 5,31,0:PRINT" INVALID DATE ":COLOR 15,6:RESUME 120

```
{% endraw %}

## DT.DOC

{% raw %}
```
                        SET DATE AND TIME

                 Copyright 1987 - Robert L. Brown

          If you use this program, please send $3.50 to:

                        BROWN ENTERPRISES
                         322 Davis Drive
                        Kingston, TN 37763

                           DESCRIPTION

For computers that do not have a built in clock and calendar, 
the date and time is usually set manually when the computer is 
first turned on.  This program can replace that operation.  It 
offers a measure of convenience by eliminating awkward 
keystrokes (like<-> and <:>).  The time is also set using the 
conventional am and pm thus avoiding the nuisance of trying to 
figure the pm hours.  This program will be especially attractive 
for the beginning computer person who very often is not good at 
typing.  


The source code, written in BASIC (DT.BAS), is included and may 
be easily merged into your favorite BASIC programs.  It is then 
easy to alter to suit specific needs.  It also has been compiled 
using QuickBASIC to make a stand alone file (DT.EXE) that does 
not require loading BASIC in order to run.  

                          INSTALLATION

The following instructions assume that your computer has two 
disk drives (A and B).

First, format a bootable disk.  This is done by placing your 
DOS disk in drive A and a new blank disk in drive B.  Then type:

         FORMAT B:/S <RETURN>

Remove the DOS disk from drive A and place SET TIME AND DATE disk 
in drive A (Files may be in the directory "DT").  Leave the
newly formatted disk in drive B and type:

         COPY *.* B: <RETURN>

All the files in drive A have now been duplicated in drive 
B.  Remove the original SET TIME AND DATE disk and store it in a 
safeplace.  The disk in drive B will be your working SET DATE 
AND TIME disk.  Your working disk should contain the following 
files:

         AUTOEXEC.BAT
         DT.EXE
         DT.BAS
         DT.DOC

To check your program, place your working disk in drive A and 
reboot by pressing Ctrl-Alt-Del.  The first thing that will be 
displayed will be SET DATE AND TIME.  The program will return 
you to DOS when finished.  The RAM memory space it uses will 
also be returned to DOS for the use of other programs.  SET DATE 
AND TIME can be run at any time, without rebooting, by typing:

         DT <RETURN>

To run SET DATE AND TIME using BASIC place a disk with your 
BASIC file (BASIC, BASICA,etc.) in drive A and your working disk 
in drive B and type:

         COPY A:(your BASIC) B:DT <RETURN>

                  CREATING AN AUTOEXEC.BAT FILE

When you turn on the power to your computer it will search for 
an AUTOEXEC.BAT file.  If this file exist on the disk in the A 
drive the computer will skip the DOS parts that ask for you to 
set the time and date.  CAUTION!  Before proceeding make sure 
that an AUTOEXEC.BAT file does not already exist.  You may list 
the files on a disk by typing:

         DIR/W <RETURN>

If AUTOEXEC.BAT does not exist and you want SET DATE AND TIME to 
come up automatically when you turn the power on, create an 
AUTOEXEC.BAT file by typing:

         COPY CON B:AUTOEXEC.BAT <RETURN>

COPY CON directs the computer to copy the keystrokes that 
you type to the console.  After pressing <RETURN> your cursor 
will appear on the next line with the prompt A> missing.  You are 
now ready to type the contents of your AUTOEXEC.BAT file.  Type:

         DT <RETURN>

Finish this file and save it by pressing the special function key 
<F6> and <RETURN>.  Check by rebooting and see if SET DATE 
AND TIME appears on your screen.

If an AUTOEXEC.BAT file already exist, SET DATE AND TIME can be 
added to it in the same way as above.  First find out what is in 
the existing AUTOEXEC.BAT file by typing:

         TYPE AUTOEXEC.BAT <RETURN>

If the contents are short and you have a printer, then 
press <PRT><SC> to record it for retyping.  If you do not have a 
printer write it down exactly as it is written with spaces and 
punctuation.  Now type:

         COPY CON AUTOEXEC.BAT <RETURN>

On the first line type in SET DATE AND TIME instructions 
as described above (DT).  Then retype the rest of the 
instructions exactly as they were originally.  If the 
existing instructions are long you can save a lot of typing by 
consulting your DOS books on how to edit AUTOEXEC.BAT files and 
other batch files.  Some (but not all) word processors may also 
be used to edit existing files.

Note that the extension BAT (xxxxxxxx.BAT) stands for BATch. 
Only AUTOEXEC.BAT is used when booting up.  Any other name with 
a BAT extension may be used for setting up and running an 
application program.  SET DATE AND TIME may be added to any 
BATch program in the same way as described above.

```
{% endraw %}

## FILE0908.TXT

{% raw %}
```
Disk No:  908                                                           
Disk Title: Diredit, Test Drive and D&T                                 
PC-SIG Version: S3.5                                                    
                                                                        
Program Title: Date and Time                                            
Author Version: 10/89                                                   
Author Registration: $3.50                                              
Special Requirements: None.                                             
                                                                        
For those of you who do not have a clock card in your computer, here's a
utility that quickly lets you enter the date and time during a          
computing session. The BASIC source code is provided.                   
Program Title: Test Drive                                               
Author Version: 1.2                                                     
Author Registration: $50.00                                             
Special Requirements: None.                                             
                                                                        
TEST DRIVE is a floppy disk drive diagnostic utility for 5-1/4" 360K    
disk drives with many tests to ensure that your disk drive is in        
working order.  This can help to alleviate data loss or damage to your  
diskettes.                                                              
                                                                        
As the drive is tested, important operating parameters are displayed on 
the screen.  A spindle speed test and read/write test of the disk drive 
can be done with just this disk.  The alignment, hysteresis, head       
azimuth and hub centering of your disk drive can be tested but these    
tests require a precision alignment disk that is available upon         
registration.                                                           
                                                                        
TEST DRIVE can indicate when your disk drives need cleaning and has a   
utility for use with a standard cleaning disk.  It can perform          
continuous tests for certain adjustments on your drives and can test the
general performance of the drive before and after any changes are made. 
Program Title: Diredit                                                  
Author Version: 3.04                                                    
Author Registration: $20.00                                             
Special Requirements: None.                                             
                                                                        
Edit your DOS directories.  DIREDIT helps you to sort your directories  
in various ways - by filename, extension, size, etc.  Specify arbitrary 
order and move individual directory entries.  Display each directory in 
a very compact manner with up to eighty filenames visible on the screen 
at once.  Need more information?  You can see the full file description 
for any entry simply by moving the cursor to the name.                  
                                                                        
Use DIREDIT to arrange your directories on disk for more efficient      
access.  Resort them temporarily on the screen while searching for a    
file, all without disturbing the directory structures on disk.          
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## TESTDRIV.DOC

{% raw %}
```












                            T E S T   D R I V E  (tm)


                   A Comprehensive Disk Drive Diagnostic Tool




                                OPERATOR'S MANUAL       


                                   Version 1.2













                            Microsystems Development
                            4100 Moorpark Ave.  #104
                            San Jose, CA  95117  USA
                                 (408) 296-4000
                            











                Copyright (C) Microsystems Development 1987,1988.
                              All Rights Reserved











        TEST DRIVE (tm)                                     Version 1.2



                                TABLE OF CONTENTS 


        I.   INTRODUCTION............................................1

        II.  WARRANTY................................................3

        III. COPYRIGHT AND TRADEMARK INFORMATION.....................3

        IV.  ORDERING INFORMATION....................................4

        V.   BASIC DISK INFORMATION..................................5

        VI.  OPERATION...............................................7

             F1   Program Information................................7

             F2   General Test.......................................8
                  A) Sample display for a good drive.................9
                  B) Sample display for a bad drive.................10

             F3   Alignment Test....................................11
                  A) Sample display for a good drive................13
                  B) Sample display for a bad drive.................14

             F4   Spindle Speed.....................................15
                  A) Sample display for a good drive................16
                  B) Sample display for a bad drive.................16

             F5   Write / Read Test.................................17
                  A) Sample display for a good drive................18
                  B) Sample display for a bad drive.................19

             F6   Hysteresis Test...................................20
                  A) Sample display for a good drive................21
                  B) Sample display for a bad drive.................22

             F7   Head Azimuth Test.................................23
                  A) Sample display for a good drive................24
                  B) Sample display for a bad drive.................25
             
             F8   Hub Centering.....................................26
                  A) Sample display for a good drive................27
                  B) Sample display for a bad drive.................28

             F9   Continuous Alignment..............................29
                  A) Sample display for a good drive................30
                  B) Sample display for a bad drive.................31

             F10  Cleaning Utility..................................32 

        GLOSSARY OF TERMS...........................................34

        CUSTOMER FEEDBACK FORM......................................37


        Copyright (C) Microsystems Development 1987, 1988.            i





        TEST DRIVE (tm)                                     Version 1.2



        I.   INTRODUCTION

             Floppy disk drives are your computer's lifeline.  They 
        provide the easiest and in many cases the only method of 
        transferring data from one computer to another.  It is extremely 
        important that your computer's disk drives be operating at peak 
        performance at all times.

             TEST DRIVE is a comprehensive floppy disk drive diagnostic 
        tool.  It accurately measures and displays important operating 
        parameters, so that the exact operating condition of a drive can 
        be determined.  In addition, this manual will help in 
        understanding the basics of disk operation, will help to analyze 
        the test results, and recommend corrective procedures.

             Have you ever gotten the dreaded "Abort, Retry, Ignore?" 
        message when using a disk you thought was good?  TEST DRIVE will 
        let you know if your drive is functioning properly.

              Have you ever had problems in transferring files on disk 
        between different computers?  Perhaps one computer can reliably 
        read and write to a diskette, but that same diskette will not 
        work in another computer?  TEST DRIVE will pinpoint the problem.

             Have you ever experienced unexplainable data loss on 
        diskettes?  Perhaps a backup disk that your computer generated 
        months ago will no longer work in your computer?  Periodic 
        testing with TEST DRIVE will help avoid this problem.  

             Do you need to be absolutely sure that the diskettes your 
        disk drive writes to can be read by another computer?  TEST DRIVE 
        will confirm proper operation of your drive.     

             Have you ever had repairs made only to have the same or new 
        problems occur?  TEST DRIVE will keep the technician honest by 
        reporting and quantifying the drive's performance, before and 
        after repair.  

             Want to dig in and make adjustments yourself?  TEST DRIVE 
        provides continuous tests which can be run on your computer while 
        adjustments are made.   

             Ever wonder if you should be cleaning your drives, and if 
        so, how often?  TEST DRIVE will indicate when cleaning may be 
        necessary.  In addition, TEST DRIVE provides a helpful utility to 
        be used with a standard cleaning disk.

             Does cleaning really help?  TEST DRIVE can measure your 
        drive's performance before and after cleaning to determine if the 
        cleaning has been helpful.

             How important is the diskette media?  Bulk purchased generic 
        disks are generally tested to a lesser extent that the more 
        expensive name brands.  In general, the generics are tested for 


        Copyright (C) Microsystems Development 1987, 1988.            1





        TEST DRIVE (tm)                                     Version 1.2


        media defects only where a perfectly aligned drive would read and 
        write.  If your drive's alignment is off, the probability of a 
        data loss using an inferior disk is greatly increased. 

             In addition, as drive densities continue to increase, data 
        is packed closer and closer together on the magnetic media.  This 
        makes precise operation of your drive even more crucial.

             The TEST DRIVE disk drive diagnostic package consists of the 
        TEST DRIVE program disk and an Dysan Digital Diagnostic Disk 
        (DDD).  The program diskette contains the following files:         

                  testdriv.com   -    Executable program
                  testdriv.doc   -    This documentation 

             To use the full capabilities of TEST DRIVE you will need the 
        Dysan precision alignment disk manufactured by Xidex Corporation, 
        available for sale from Microsystems Development (see ordering 
        information).  The Dysan Digital Diagnostic Disk (DDD) is a test 
        disk with data written at precise distances and angles along the 
        tracks.  TEST DRIVE will analyze the disk drive's ability to read 
        the specialized data patterns contained on the DDD.  Some of TEST 
        DRIVE's tests require the use of the DDD, some do not.

             Together, these two disks allow you, the user, to perform 
        comprehensive diagnostic tests, and perform certain adjustments 
        on floppy disk drives.  The use of expensive and special test 
        equipment, oscilloscopes, etc., is unnecessary.  The following 
        tests are performed by TEST DRIVE:

               *  General Test     
               *  Alignment Test
                  Spindle Speed
                  Write/Read Test
               *  Hysteresis Test
               *  Head Azimuth Test
               *  Hub Centering                 
               *  Continuous Alignment          * These tests require the
                  Cleaning Utility                Dysan diagnostic disk  
            
             This version of TEST DRIVE will test 5 1/4" (360KB  or less) 
        disk drives.  Updates for high density 5 1/4" and 3 1/2" drives 
        are under development.  Please inquire for availability.

        System Requirements:

                IBM PC/XT/AT or Compatible
                64K RAM
                DOS 2.0 or greater
                An 80 column monitor (Color or Monochrome)
                One working 5 1/4" disk drive that can load the program.  

             Once loaded, TEST DRIVE can later be run from a hard disk.  
        In fact, this is recommended for periodic testing to insure your 
        drives are in proper operating condition.


        Copyright (C) Microsystems Development 1987, 1988.            2





        TEST DRIVE (tm)                                     Version 1.2


        II.  WARRANTY

             Microsystems Development makes no warranty of any kind, 
        express or implied, including without limitation, any warranties 
        of merchantability and/or fitness for any specific application or 
        use.  Microsystems Development shall not be liable for ANY loss 
        or damage arising from a failure of this program to operate in 
        the manner described, or in a manner desired by the user. 
        Microsystems Development shall not be liable for any damage to 
        data or property which may be caused directly or indirectly by 
        use of the program.

             IN NO EVENT SHALL MICROSYSTEMS DEVELOPMENT OR IT'S SUPPLIERS 
        BE LIABLE FOR ANY CONSEQUENTIAL, INCIDENTAL OR EXEMPLARY DAMAGES 
        INCLUDING, BUT NOT LIMITED TO LOSS OF PROFITS OR REVENUES, LOSS 
        OF USE OF ANY PRODUCT, SERVICE OR REPLACEMENT COSTS, OR CLAIMS BY 
        ANY THIRD PARTY.


        III. COPYRIGHT AND TRADEMARK INFORMATION

             This version of TEST DRIVE may be copied and distributed 
        freely, with the following restrictions:

              1)  The program and documentation may not be modified, 
              2)  The entire documentation file must be included with the 
                  program, 
              3)  No fee for the program may be charged outside of a 
                  reasonable and customary charge for diskette media, 
                  copying and/or shipping, and
              4)  It may not be packaged or sold in conjuction with any 
                  other product.

             The software code and screen displays used in TEST DRIVE are 
        the sole property of Microsystems Development, and may not be 
        copied, in any form, in whole or in part, or included in any 
        other program or document without the express written permission 
        of Microsystems Development.

             If you'd like to make use of the full capabilities of TEST 
        DRIVE, you are encouraged to purchase the Dysan Diagnostic Disk 
        directly from us (see ordering information).  This will help 
        support our effort, make you a registered user, and ensure that 
        you are kept up to date on new versions and enhancements.

        Digital Diagnostic Diskette (DDD) is a trademark of Dysan.  

        Dysan is a registered trademark of Xidex Corporation.

        IBM, IBM PC, IBM XT and IBM AT are registered trademarks of 
             International Business Machines Corporation.

        MS-DOS is a trademark of Microsoft Corporation.

        TEST DRIVE is a trademark of Microsystems Development.


        Copyright (C) Microsystems Development 1987, 1988.            3





        TEST DRIVE (tm)                                     Version 1.2


        IV.  ORDERING INFORMATION

                              TEST DRIVE ORDER FORM

        ____ Dysan Digital Diagnostic Disk,
               includes TEST DRIVE registration.......US$50.00 ea _______

        ____ Dysan disk, Latest version of TEST DRIVE,
              Printed manual, and Registration........US$75.00 ea _______


                                           Subtotal..............._______

             Calif. residents add 6%, 6.5% or 7% sales tax........_______

             Shipping charges.  $2.50 within the continental             

             USA, $5.00 outside the continental USA..............._______


                                           TOTAL...............$_________


        ______ Enclosed is a check for the above amount.

        ______ Please charge the above amount to my:  Visa( )  MC( )

               Account number:__________________________________Exp._____

               Cardholder signature:_____________________________________

            
        Purchase orders are accepted from qualified corporations.
        Please call first for approval.


             Name:    _____________________________________________

             Company: _____________________________________________

             Address: _____________________________________________

                      _____________________________________________

             Phone:   (________) __________________________________


                    Remit to:  Microsystems Development
                               4100 Moorpark Ave.  #104
                               San Jose, CA  95117  USA

              Phone:  (408) 296-4000  10 AM to 4 PM  Pacific Time.

             Please inquire for availability of high density
             5 1/4" and 3 1/2" versions of TEST DRIVE. 


        Copyright (C) Microsystems Development 1987, 1988.            4





        TEST DRIVE (tm)                                     Version 1.2


        V.   BASIC DISK INFORMATION

             It is not necessary to have a degree in computer engineering 
        to use or benefit from TEST DRIVE.  However, a basic 
        understanding of disk operation is helpful in identifying 
        problems.  This section is meant to introduce you to basic disk 
        operation and terminology.

             Diskette density specifies the amount of data the disk is 
        capable of holding.  Densities are measured in kilobytes (KB) or 
        megabytes (MB).  A kilobyte is 1024 bytes and a megabyte is 1000 
        kilobytes.  

             Information is written on a floppy disk magnetically, in 
        much the same way as audio information is stored on cassettes or 
        reel to reel tapes.  The disk is rotating so data is written in 
        circles around the disk.  These circles are called tracks.  Each 
        track is divided into a number of sectors.  

             Each sector contains addressing marks, a fixed amount of 
        data, and a Cyclic Redundancy Check (CRC) for the data.  The CRC 
        is an integrity check on the data.  To retrieve data, the disk 
        drive controller must position the head over the desired track 
        and wait for the correct sector address to come around.  Once the 
        sector is found, the disk controller reads the information from 
        the sector and stores it in a buffer.  Then the CRC is computed 
        and compared to the CRC read from the disk.  If this does not 
        compare an error is reported.  A write operation occurs in much 
        the same manner except that the CRC is computed and stored with 
        the data and no verification is performed.  

             One indicator of disk density is the TPI specification.  
        This stands for Tracks Per Inch.  In a 48TPI disk the tracks are 
        spaced 1/48 of an inch apart.  Since a 360K diskette has 40 
        tracks, the width of the media containing data is somewhat less 
        than an inch.  A 96 TPI diskette usually contains 80 tracks or 
        double the 40 tracks of a 360K.   This would tend to make us 
        think that the density would be 720K, and this is true for the 3 
        1/2 inch technology.  But the high density 5 1/4 inch standard 
        has 15 sectors per track instead of the 9 on a 360 KB disk.  This 
        makes 1.2 MB (see table below).  It seems that as the technology 
        becomes available to store more information on a disk, someone 
        will.  However, the basics for data storage and retrieval is 
        relative constant no matter what the density is.  













        Copyright (C) Microsystems Development 1987, 1988.            5





        TEST DRIVE (tm)                                     Version 1.2


             A 360KB diskette is formatted with 40 tracks, 9 sectors per 
        track, on both sides.  512 bytes are written in each sector.

             Total    40 tracks   9 sectors   2 sides    512 bytes
             bytes  =    ------ X   ------- X          X     ------
                          side       track                   sector
                       
                    OR

             Total bytes = 368,640 

             This is usually abbreviated to 360 KB, which is 360 x 1024 
        bytes.

             The computer's operating system normally uses a few sectors 
        for overhead such as label and directory information.  This is 
        why there are slightly less than 368,640 usable bytes on a 
        formatted disk.  

             The address marks and CRC are stored between the data and 
        are not included in the formatted capacity of a disk.

             The following table illustrates the storage specifications 
        for the most commonly used disk densities:


        Storage   Physical  Sectors     Bytes       Tracks     Number 
        Size      Size      per Track   per Sector  per Side   of Sides
        ----------------------------------------------------------------
         160 KB    5 1/4"       8          512         40         1
         180 KB    5 1/4"       9          512         40         1
         320 KB    5 1/4"       8          512         40         2
         360 KB    5 1/4"       9          512         40         2
         1.2 MB    5 1/4"      15          512         80         2
         720 KB    3 1/2"       9          512         80         2
        1.44 MB    3 1/2"      18          512         80         2


             This version of TEST DRIVE is designed to test 360 KB 
        drives.  It will also test the first 3 types, however.  Since the 
        first 2 types (160 and 180 KB) have only 1 head in the disk 
        drive, TEST DRIVE will report errors for Head 1, but the Head 0 
        results are correct.














        Copyright (C) Microsystems Development 1987, 1988.            6





        TEST DRIVE (tm)                                     Version 1.2


        VI.  OPERATION

             To operate, first load the operating system, then type 
        'testdriv', followed by the enter key.  After the opening screen 
        appears, press any key to proceed to the main menu.  You will see 
        a list of available selections.  The number of drive selections 
        you see is dependent on the number of drives available in your 
        system.  To make a selection, press the key indicated to the left 
        of the selection, or highlight your choice by using the up and 
        down arrows, then press enter.  

             Some tests require the use of the Dysan DDD.  The speed test 
        will work with any standard formatted diskette OR the DDD.  The 
        Write/Read test will only work a normal diskette, not the DDD.  
        TEST DRIVE always checks for the type of diskette inserted.

             Data is never written to the DDD.



        F1   Program Information

             This screen gives a very brief "on-line" description of TEST 
        DRIVE.  This document is provided for more detailed information.

             After the information screen, the user is given the option 
        of displaying an 'Instant Order Form'.  If a printer is attached, 
        simply use the PrtSc (print screen) function of your computer to 
        print a copy of the order form.




























        Copyright (C) Microsystems Development 1987, 1988.            7





        TEST DRIVE (tm)                                     Version 1.2


        F2  General Test

            In this test, six areas of drive performance are displayed 
        and measured, with Pass / Fail results given for each.  
        The measured results are also displayed, along with the 
        criteria used for Pass / Fail determination.  For more detailed 
        information on each of the tests, see the appropriate section
        describing that particular test in detail.

             The TEST DRIVE general test is a good overall test which 
        should usually be run first to determine if there are any  
        problem areas.  You encouraged to read the rest of this document 
        for a detailed description of each test.

        Display Information:

             Alignment and Sensitivity are combined in the first part of 
        the test.  Three tracks for each head are measured.  The drive 
        will pass the test if it can read data written at least +/- 8 
        milli-inches from the track centerline.  Some manufacturers 
        specify +/- 9 milli-inches as passing criteria.

             The next part of the test measures the drive's ability to 
        precisely seek to a specified track from either direction.  This 
        is called hysteresis.  Only one track is used for this test.  If 
        the hysteresis is less than or equal to 1.5, it passes.

             Next, the spindle speed is measured.  For a 360KB disk 
        drive, the speed must be between 295 and 305 RPM.  Some 
        manufacturers specify a smaller range.

             Hub centering is the next test.  The alternate offset track 
        which has data written at +/- 8 milli-inches offset around the 
        track is used for this part of the test.  No errors allowed for 
        the drive to pass.
             
             The last test in the general test is Head Azimuth.  If the 
        drive can read data placed on the disk at an angle of +/- 39 
        minutes of a degree from centerline, it is considered good.

             The Pass / Fail criteria used in the General Test is in 
        accordance with generally accepted standards.  However, different 
        manufacturers, equipment, testing labs, etc., may use different 
        criteria.  The criteria used in TEST DRIVE are not meant to imply 
        absolute minimums or maximums, but were simply chosen to help 
        interpret the data.  In all cases, the measured data is also 
        displayed for the user's own interpretation.

             In addition, the measured data displayed for the General 
        Test, as well as the other tests may vary slightly each time they 
        are run.  This is because the tests push the drive past its 
        normal operating points, and operation outside the normal ranges 
        may not be consistent.




        Copyright (C) Microsystems Development 1987, 1988.            8





        TEST DRIVE (tm)                                     Version 1.2


        A) Sample display for a good drive



                                   TEST DRIVE
                                  General Test

                                            Criteria   Test     Result
                                            -------- --------- --------
           Alignment /    Track  0 Head 0     +/- 8   +10 -10    Pass
           Sensitivity    Track  0 Head 1     +/- 8   +11 -10    Pass
                          Track 19 Head 0     +/- 8   +10 -10    Pass
                          Track 19 Head 1     +/- 8   +10 - 9    Pass
                          Track 39 Head 0     +/- 8   +12 -10    Pass
                          Track 39 Head 1     +/- 8   + 8 - 9    Pass

           Hysteresis     Track 19 Head 0      1.5       0.5     Pass

           Spindle Speed  . . . . . . . .   295 - 305    301     Pass

           Hub Centering  . . . .  Head 0   0 Errors  0 Errors   Pass

           Head Azimuth   . . . .  Head 0    +/- 39'  +42 -42    Pass
                                   Head 1    +/- 39'  +42 -42    Pass



        Analysis:

             The above drive has passed all the tests, and the drive 
        appears to be in good condition.     

        Alignment     - the drive was able to read data 8 milli-inches 
                        or greater from the track centerline.
             
        Hysteresis    - is less than 1.5.

        Spindle Speed - is in the acceptable range at 301 RPM.
           
        Hub Centering - no errors were detected.

        Head Azimuth  - both heads were able to read data angled at 
                        39 minutes of a degree or greater.














        Copyright (C) Microsystems Development 1987, 1988.            9





        TEST DRIVE (tm)                                     Version 1.2


        B) Sample display for a bad drive



                                   TEST DRIVE
                                  General Test

                                            Criteria   Test     Result
                                            -------- --------- --------
           Alignment /    Track  0 Head 0     +/- 8   + 6 -12    Fail
           Sensitivity    Track  0 Head 1     +/- 8   +11 -10    Pass
                          Track 19 Head 0     +/- 8   + 7 -11    Fail
                          Track 19 Head 1     +/- 8   +11 - 9    Pass
                          Track 39 Head 0     +/- 8   + 6 -11    Fail
                          Track 39 Head 1     +/- 8   + 8 - 9    Pass

           Hysteresis     Track 19 Head 0      1.5       2.0     Fail

           Spindle Speed  . . . . . . . .   295 - 305    309     Fail

           Hub Centering  . . . .  Head 0   0 Errors  2 Errors   Fail

           Head Azimuth   . . . .  Head 0    +/- 39'  +42 -42    Pass
                                   Head 1    +/- 39'  +42 -21    Fail


        Analysis:
             
             In the above example, Head 0 is poorly aligned.  It is 
        shifted slightly away from the spindle as indicated by the high 
        negative values and low positive values.  

             The above drive has also failed the hysteresis test 
        indicating a possible problem with the positioning mechanism.  

             The TEST DRIVE General Test indicates that the spindle 
        speed is too high.  Hub centering has also failed indicating a 
        possible clamping problem.  It was not able to read some of the 
        data written at 8 milli-inches from track center. 

             Head 1 is also rotated slightly in one direction.  It cannot 
        read data written in a position greater than 21 minutes of a 
        degree from track centerline.

             For all the above problem areas, each individual test should 
        be run in full to determine the extent of each problem.











        Copyright (C) Microsystems Development 1987, 1988.            10





        TEST DRIVE (tm)                                     Version 1.2


        F3  Alignment Test


             Alignment is a measure of how centered the read/write head 
        is over the track center.  This is sometimes called Radial 
        Alignment.  For a 48TPI disk, each track is 1/48 inch wide which 
        is 20.833 milli-inches.  Data on the progressive offset tracks of 
        the DDD are progressively displaced from 6 to 13 milli-inches  
        toward and away from the spindle.  Therefore, data  will span 26 
        milli-inches which is slightly wider than a 48 TPI track.  The 
        tracks adjacent to the progressive offset track of the DDD are 
        not used.  

             Sensitivity is a measure of how much data on a given track 
        is readable, or the width to which the head is sensitive to.  If 
        a head is able to read data from +10 to -10 milli-inches on a 20 
        milli-inch track, you have a drive performing very well.  If the 
        same drive read +13 to -7, we still have perfect sensitivity but 
        the alignment is now shifted.

             The successful reading of data greater than +/- 10 milli-
        inches will cover the entire track.  If a disk drive is able to 
        read data that is progressively offset to +8 and only to -7, the 
        drive is slightly mis-aligned and suffers from poor alignment 
        sensitivity.  A drive that will read -11 to +8 milli-inches, 
        shows good sensitivity but is poorly aligned.  In the latter 
        case, the drive will likely function reliably until the head 
        becomes dirty and the sensitivity decreases.

             The alignment test will push the drive's operation beyond 
        normal limits and report back the results,  You will certainly 
        see errors in this test simply because the drive is not supposed 
        to read data placed beyond the normal track width.

        Display Information:

             The alignment test uses all of the progressive offset tracks 
        available on the Dysan Digital Diagnostic test.  These are tracks 
        0, 5, 16, 19, 30, and 39.  It attempts to read all the data on 
        the tracks, from 6 to 13 milli-inches off center in either 
        direction.  If the read was successful, it will display four 
        solid characters, represented in this document as '~~~~'.  If the 
        read was not successful, it will display 'erxx', where xx is the 
        hex error code returned by the BIOS read routine.  













        Copyright (C) Microsystems Development 1987, 1988.            11





        TEST DRIVE (tm)                                     Version 1.2


             The following is a list of errors than can be reported:

             ERROR ERROR
             CODE  TYPE                REASON
             ----  ------------------  --------------------------------- 
             er80  time_out            Drive did not respond

             er40  bad_seek            Drive failed to seek to track

             er20  bad_nec             Drive controller chip failed

        *    er10  bad_crc             Cyclic redundancy check failed
                                 
             er09  dma_boundary        Attempt to direct memory
                                       across 640K boundary

             er08  bad_dma             DMA overrun on operation

             er06  media_change        media not identified
                                       on multiple media drive

        *    er04  record_not_found    sector not found

        *    er02  bad_addr_mark       address mark not found
             

        * Commonly induced errors in alignment test.

        Adjustments for poor Alignment Sensitivity: 

             Poor alignment sensitivity indicates that the heads are not 
        picking up as much data as they should.  This could be due in 
        part to a build up of dirt on the heads.  The correction for this 
        to simply clean the heads.  If the problem is a dirty head, 
        cleaning will eventually correct the problem.  Cleaning, however, 
        generally will not have a drastic effect.  If the problem 
        persists, it may be necessary to replace the drive since 
        replacing the head assembly usually is not done economically.
             
        Adjustments for poor Alignment: 

             Most drives come equipped with an adjustment screw which 
        will translate a turning motion into a linear head adjustment.  
        Since drives are becoming so inexpensive however, manufacturers 
        are saving costs by eliminating expendable mechanisms such as 
        alignment hardware.  It is more cost effective for the 
        manufacturer to set the alignment once, than it is to provide 
        adjustment screws.  

             If your drive has such an adjustment, we suggest you use the 
        Continuous Alignment Test if you wish to make adjustments.  
        Please see the explanation of that test for more information.

             If the alignment is just slightly off, we recommend that you 
        leave it alone, and monitor its condition with TEST DRIVE.  


        Copyright (C) Microsystems Development 1987, 1988.            12





        TEST DRIVE (tm)                                     Version 1.2



        A)  Sample display for a good drive

                            TEST DRIVE Alignment Test

              <------------------------  Track  ------------------------->
              39   30   19   16   5    0       0    5    16   19   30   39

        - 13 er02 er02 er02 er02 er02 er02    er02 er02 er02 er04 er10 er04
        - 12 er02 er02 er02 er02 er02 er02    er02 er02 er02 er02 er02 er02
        - 11 er02 er02 er02 er02 er02 er02    er02 er02 er02 er02 er02 er02
        - 10 ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~    ~~~~ ~~~~ ~~~~ ~~~~ er02 er02
        -  9 ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~    ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ er02
        -  8 ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~    ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~
        -  7 ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~    ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~
        -  6 ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~    ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~
                         Head  0                          Head  1
        +  6 ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~    ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~
        +  7 ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~    ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~
        +  8 ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~    ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~
        +  9 ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~    ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~
        + 10 er02 er02 er02 ~~~~ ~~~~ ~~~~    ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ er02
        + 11 er02 er02 er02 er02 er02 er02    er02 er02 er02 er02 er02 er02
        + 12 er02 er02 er02 er02 er02 er02    er02 er02 er02 er02 er02 er02
        + 13 er02 er04 er04 er04 er04 er04    er04 er04 er02 er02 er04 er02

             
        Analysis:

             This drive is in good shape, the '~~~~' pattern is 
        symmetrical between the + and - readings.  This indicates very 
        good alignment.  This test also indicates the sensitivity of the 
        head.  For the most part, the heads are sensitive to data from -
        10 to +10 milli-inches or a total of 20 milli-inches.  On track 
        39 of head 1, the head is sensitive only from -8 to +9 milli-
        inches or 17 milli-inches.  Since these tracks on the diskette 
        are 20 milli-inches wide, this drive is performing well.




















        Copyright (C) Microsystems Development 1987, 1988.            13





        TEST DRIVE (tm)                                     Version 1.2


        C)  Sample display for a bad drive

                            TEST DRIVE Alignment Test

              <------------------------  Track  ------------------------->
              39   30   19   16   5    0       0    5    16   19   30   39

        - 13 er02 er02 er02 er02 er02 er02    er02 er10 er04 er10 er10 er04
        - 12 er02 er02 er02 er02 er02 er02    er02 er04 er04 er02 er02 er02
        - 11 er02 er02 er02 er02 er02 er02    er02 er04 er02 er02 er02 er02
        - 10 er02 er02 er02 er02 er02 er02    er02 er02 er02 er02 er02 er02
        -  9 er02 er02 er02 er02 er02 er02    er02 er02 er02 er02 er02 er02
        -  8 er02 ~~~~ ~~~~ ~~~~ ~~~~ ~~~~    ~~~~ er02 er02 er02 er02 er02
        -  7 er02 ~~~~ ~~~~ ~~~~ ~~~~ ~~~~    ~~~~ ~~~~ er02 er02 er02 er02 
        -  6 ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~    ~~~~ ~~~~ ~~~~ er02 er02 er02
                         Head  0                          Head  1
        +  6 ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~    ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~
        +  7 ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~    ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~
        +  8 ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~    ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~
        +  9 ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~    ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~
        + 10 er02 er02 er02 ~~~~ ~~~~ ~~~~    ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~
        + 11 er02 er02 er02 er02 er02 er02    er02 er02 er02 ~~~~ ~~~~ ~~~~
        + 12 er02 er02 er02 er02 er02 er02    er02 er02 er02 er02 er02 er02
        + 13 er02 er04 er04 er04 er04 er04    er04 er04 er02 er02 er04 er02

        Analysis:

             This drive shows problems in both alignment and possibly in 
        sensitivity as well.  The alignment pattern shows a shift of the 
        successful read operations toward the positive side.  This 
        indicates that the physical positioning of the head is shifted 
        off the center of the track.  This problem could be remedied by 
        adjusting the head positioning to make the pattern symmetrical.  

             For most of the disk the total sensitivity reads about +10 
        to -7 or 17 milli-inches of read sensitivity.  However, head 1 
        cannot even read data at -6 milli-inches on tracks 19, 30 and 39.  
        In this case, the sensitivity cannot be determined until the 
        alignment is corrected.


















        Copyright (C) Microsystems Development 1987, 1988.            14





        TEST DRIVE (tm)                                     Version 1.2


        F4   Spindle Speed

             This test measures the speed at which the diskette rotates 
        in the drive.  It can use either the Dysan DDD or a standard 
        formatted diskette.  If an error occurs when the test starts, the 
        user is given the opportunity to override by pressing 'O'.  If 
        errors still occur, speed will be displayed as '---'.

             Speed is measured by the time it takes for the diskette to 
        rotate from a given sector back around to the same sector.  This 
        time is then converted to revolutions per minute, or RPM.  The 
        acceptable range is 295 to 305 RPM.  A drive can operate outside 
        this range and cause no apparent problems, but it should be 
        adjusted to be within range.  Otherwise, it may be difficult to 
        interchange data written by it with another drive.

             Other types of drives operate at different speeds as        
        follows:

                  high density 5 1/4"    355 to 365 RPM
                               3 1/2"    295 to 305 RPM

        Display Information:

             The test will run for several trials, continually updating 
        the speed and the pointer on the display.  It then stops in order 
        to save wear on the disk.  If you wish to run it continuously, 
        press "C".  Any other key will return you to the main menu.  If 
        you select "C" for continuous testing, the test will not stop 
        until you press another key.


        Adjustment:

             On most drives,there is a small screw adjustment for spindle 
        speed.  This adjustment can be made while this test is running, 
        and TEST DRIVE will continually update the display accordingly.  
        If the speed is adjusted too far out of range so that the program 
        can no longer read any data, TEST DRIVE will report '---'.    

             If the speed varies erratically, say 4 RPM or more, the 
        problem could be a loose or bad drive belt.  In many cases, 
        replacement of the belt will help or cure the problem.

             Some drives have direct drive from the motor so do not have 
        belts.  Some do not even have a speed adjustment.  In these 
        cases, the drive should either be repaired professionally or 
        replaced.









        Copyright (C) Microsystems Development 1987, 1988.            15





        TEST DRIVE (tm)                                     Version 1.2


        A)  Sample display for a good drive


                      TEST DRIVE Spindle Speed Measurement




                              |---- Acceptable ---|
                              |       Range       |

         285       290       295       300       305       310       315
          |---------|---------|---------|---------|---------|---------|

                                        ^

                                Speed =   300 RPM

                          Using Dysan DDD Model 508-400


        Analysis:

             Here, the speed is directly in the middle of the acceptable 
        range, at 300 revolutions per minute. 



           
        B)  Sample display for a bad drive


                      TEST DRIVE Spindle Speed Measurement




                              |---- Acceptable ---|
                              |       Range       |

         285       290       295       300       305       310       315
          |---------|---------|---------|---------|---------|---------|

                      ^

                                Speed =   291 RPM

                          Using Dysan DDD Model 508-400


        Analysis:

             The above drive is running slightly slow, at 291 revolutions 
        per minute.



        Copyright (C) Microsystems Development 1987, 1988.            16





        TEST DRIVE (tm)                                     Version 1.2


        F5   Write / Read Test

             This test measures the drive's ability to correctly write, 
        then read back, each sector of the disk.  It can also be used to 
        verify the operation of a particular diskette, that is, its 
        ability to store data on all parts of it.

             The computer's operating system normally checks both the 
        write and the read processes for errors.  TEST DRIVE checks for 
        those errors and reports them.  In addition, each byte that was 
        written is compared with what was read back to determine if it's 
        exactly the same.  Any discrepancy is reported as a compare 
        error.

        Display Information:

             This test requires the use of a formatted scratch diskette.  
        It writes 512 random bytes of data to each sector on the disk, 
        reads them back and compares them.  Errors can occur while 
        Writing, Reading or Comparing the data, and are reported sector 
        by sector.  There are several types of write and read errors 
        returned by the system's BIOS, such as bad seek or bad CRC.  
        These errors are not reported individually in this test.  Only 
        'W' or 'R' are displayed, depending on whether the error was the 
        result of a write or a read operation.

             Since TEST DRIVE writes random data to all sectors including 
        those used by the operating system for file and directory 
        information, any diskette used for this test will have to be re-
        formatted before it can be used for normal purposes.
            
             Insure that the media used is of high quality and does not 
        introduce errors into the test.

             No errors should be tolerated for this test. 


        Adjustment:

             There is no adjustment.  In some cases, the drive heads may 
        simply need to be cleaned.  Use a good quality cleaner and try 
        the test again.















        Copyright (C) Microsystems Development 1987, 1988.            17





        TEST DRIVE (tm)                                     Version 1.2



        A)  Sample display for a good drive



                          TEST DRIVE Write / Read Test

                   Sector-+   Track -->
                          |   0 - - -  9  - - - 19 - - -  29 - - -  39
                          1 - ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-
                          2 - ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|
        ~ = Sector OK     3 - ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|
                          4 - ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|
                          5 - ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~| Head
        W = Write error   6 - ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|   0
                          7 - ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|
        R = Read error    8 - ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|
                          9 - ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|
        C = Compare error 1 - ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-
                          2 - ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|
                          3 - ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|
        Total errors = 0  4 - ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|
                          5 - ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~| Head
                          6 - ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|   1
                          7 - ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|
                          8 - ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|
                          9 - ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-


        Analysis:

             The above display indicates that the program was able to 
        successfully write, then read back the same data, to every sector 
        on the diskette.























        Copyright (C) Microsystems Development 1987, 1988.            18





        TEST DRIVE (tm)                                     Version 1.2


        B) Sample display for a bad drive



                          TEST DRIVE Write / Read Test

                   Sector-+   Track -->
                          |   0 - - -  9  - - - 19 - - -  29 - - -  39
                          1 - ~~C~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-
                          2 - ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|
        ~ = Sector OK     3 - W~~~~~~~~~~~~~~~W~~~~~~~~~~~~~~~~~~~~~~~|
                          4 - WR~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|
                          5 - WR~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~| Head
        W = Write error   6 - WW~~~~~~~~~~~~~~~W~~~~~~~~~~~~~~~~~~~~~~|   0
                          7 - WR~~~~~~~~~~~~~~~R~~~~~~~~~~~~~~~~~~~~~~|
        R = Read error    8 - R~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|
                          9 - ~~~~~~~~~~~~~~~~~~~~~~~~R~~~~~~~~~~~~~~~|
        C = Compare error 1 - ~~~~~C~~~~~~~~~~~~~~~~~~WR~~~~~~~~~~~~~~-
                          2 - ~~~WRW~~~~~~~~~~~~~~~~~~WWR~~~~~~~~~~~~~|
                          3 - ~~~WWWW~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|
        Total errors = 54 4 - ~~~WWWW~~~~~~~~~~~WWW~~~~~~~~~~~~~~~~~~~|
                          5 - ~~~WWRW~~~~~~~~~~~WWW~~~~~~~~~~~~~~~~~~~| Head
                          6 - ~~~~RWW~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|   1
                          7 - ~~~~WRR~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|
                          8 - ~~~~~RR~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|
                          9 - ~~~~~RRWC~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-


        Analysis:

             The above display shows many errors of different types.  The 
        problem could simply be a bad diskette.  If the problem occurs 
        with more than 1 formatted diskette of good quality, there is a 
        problem with the read/write mechanism of the drive.

             





















        Copyright (C) Microsystems Development 1987, 1988.            19





        TEST DRIVE (tm)                                     Version 1.2


        F6  Hysteresis Test


             Hysteresis is a measure of the drive mechanism's ability to 
        seek a specified track from either direction and position the 
        head in precisely the same position.  

             The head is moved to an inner track (toward the hub) and 
        then sent to the middle of the disk.  Measurements of alignment 
        are recorded and displayed.  The head is then sent to an outer 
        track and subsequently sent to the center again.  Measurements 
        are taken and compared to the previous center measurements to 
        determine the hysteresis.

             The hysteresis error is determined by the difference in the 
        center of the alignment pattern.  For example:  The first 
        alignment readings are +10 and -9 milli-inches.  This is to say 
        that the head is in such a position that data offset +10 and -9 
        milli-inches can be read.  The head is then sent to the outer 
        track and back to the center to again take readings of +10 and -9 
        milli-inches.  This is simply 0 milli-inches of hysteresis.  The 
        head had positioned itself at precisely the same position when 
        seeking a track from either direction.  If the second set of 
        readings were +9 and -10 the hysteresis would be 1.0 milli-inch.  
        In general, the center of each reading is compared to determine 
        the hysteresis.  The center of +10 and -9 is +0.5 and the center 
        of +9 and -10 is -0.5.  The difference is 1 milli-inch.

             Although these numbers are confusing the graphical 
        representation will make more sense.

             In this test, the alignment sensitivity is ignored and only 
        the center of the data pattern is used in determining hysteresis.  
        The actual alignment of the drive is unimportant in this test but 
        the repeatability of the positioning is crucial.  Disk drives 
        with excessive hysteresis are unreliable.  

        Display Information:

             TEST DRIVE uses two of the middle progressive offset tracks 
        on the DDD for this test:  tracks 16 and 19.  The horizontal bars 
        on the display span the distance from track centerline that the 
        drive was able to read successfully.  Each set of bars is for a 
        particular head and track, with the head having been positioned 
        there from opposite directions.  Ideally, each set of bars should 
        be equal in length.

        Adjustment:

             There is no adjustment and the drive should be discarded or 
        sent to the manufacturer for reconditioning.






        Copyright (C) Microsystems Development 1987, 1988.            20





        TEST DRIVE (tm)                                     Version 1.2


        A)  Sample display of a good drive


                           TEST DRIVE Hysteresis Test


                        <----------- m i l l i - i n c h e s ---------->
        H Tr Dir Error  -13-12-11-10 -9 -8 -7 -6 +6 +7 +8 +9+10+11+12+13
        - -- --- -----  |--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|
        0 16 -->                 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
             <--  0.0            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

        1 16 -->                    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
             <--  0.5            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

        0 19 -->              ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
             <--  0.5         ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~   

        1 19 -->                ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
             <--  0.0           ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


        Analysis:

             The above drive has no significant hysteresis.  Some error 
        is normal since data written too far off track center may be 
        read unreliably.  If the error is consistently greater, the drive 
        has a problem. 

             The drive also exhibits good sensitivity since it can read to 
        a minimum of +10 and -9 milli-inches. 


























        Copyright (C) Microsystems Development 1987, 1988.            21





        TEST DRIVE (tm)                                     Version 1.2


        B)  Sample display of a bad drive


                           TEST DRIVE Hysteresis Test


                        <----------- m i l l i - i n c h e s ---------->
        H Tr Dir Error  -13-12-11-10 -9 -8 -7 -6 +6 +7 +8 +9+10+11+12+13
        - -- --- -----  |--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|

        0 16 -->                 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
             <--  2.0      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

        1 16 -->                    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
             <--  2.0         ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

        0 19 -->                 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
             <--  1.5      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~   
                                      
        1 19 -->                       ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
             <--  2.5      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~   


        Analysis:

             This drive has more hysteresis than normal and indicates a 
        possible problem with its positioning mechanism.

             For example, when head 1 is moved toward the spindle to 
        track 19 it can read data at 8 milli-inches away from the spindle 
        and 12 milli-inches toward the spindle.  When head 1 is moved 
        away from the spindle and is stopped at track 19, it can read 
        data at 12 milli-inches away from the spindle and 9 inches toward 
        the spindle.  This indicates that the head was not in the same 
        physical location.

             This drive would probably pass the alignment test however, 
        since in all the above cases it can read data to +/-8 milli-inches.  



















        Copyright (C) Microsystems Development 1987, 1988.            22





        TEST DRIVE (tm)                                     Version 1.2


        F7  Head Azimuth Test 


             Head rotation or azimuth is an indication of the angular 
        position of the head with respect to a line tangent to the track 
        centerline. If the head is "twisted", or "rotated", with respect 
        to the track centerline the data written to the diskette will be 
        "slanted" and will eventually cause problems when interchanging 
        diskettes with other drives.  

             For these measurements, TEST DRIVE uses the azimuth rotation 
        track (track 34) of the DDD.  This track has data written on 
        track centerline, but at increasingly greater angles, both toward 
        and away from the spindle.  The angle range from 21 to 42 minutes 
        of a degree.  If the drive's head is angled slightly out of 
        position, it will be able to read data on the tracks at one 
        angle, but will have problems with data written at the opposite 
        angles.


        Display information:
             
             For each successful read operation, the display shows four 
        slashes '/' or four reverse slashes '\'.  It will show four 
        capital x's if it was unable to read data written at a particular 
        angle.


        Adjustment:

             There is no adjustment for head azimuth in most drives, and 
        the head assembly or the entire drive should be replaced.

























        Copyright (C) Microsystems Development 1987, 1988.            23





        TEST DRIVE (tm)                                     Version 1.2


        A)  Sample display of a good drive


                        TEST DRIVE Head Azimuth Test
                                                                          /
            \                                                         /  /
             \  \                                                 /  /  /
              \  \  \                                         /  /  /  /
               \  \  \  \                                 /  /  /  /
                   \  \  \  \                         /  /  /  /          /
            X          \  \  \  \                 /  /  /  /          /  /
             X  \          \  \  \  \         /  /  /  /          /  /  /
              X  \  \          \  \  \  Head /  /  /          /  /  /  /
               X  \  \  \          \  \  1  /  /          /  /  /  /
                   \  \  \  \          \   /          /  /  /  /
                       \  \  \  \                 /  /  /  /
        \ = OK             \  \  \  \         /  /  /  /
                               \  \  \  Head /  /  /
        X = Error                  \  \  0  /  /
                                       \   /

        -42 -39 -36 -33 -30 -27 -24 -21    +21 +24 +27 +30 +33 +36 +39 +42
         <---------------------  Angular Rotation  ---------------------->
                  Angular position of head in minutes of a degree.



        Analysis:

             The above drive shows no problems with head azimuth.  Both 
        heads were able to acceptably read the data on the test tracks.


























        Copyright (C) Microsystems Development 1987, 1988.            24





        TEST DRIVE (tm)                                     Version 1.2


        B)  Sample display of a bad drive



                        TEST DRIVE Head Azimuth Test
        \                                                                 /
         \  \                                                         /  /
          \  \  \                                                 /  /  /
           \  \  \  \                                         /  /  /  /
               \  \  \  \                                 /  /  /  /
        \          \  \  \  \                         /  /  /  /          X
         \  \          \  \  \  \                 /  /  /  /          X  X
          \  \  \          \  \  \  \         /  /  /  /          X  X  X
           \  \  \  \          \  \  \  Head /  /  /          X  X  X  X
               \  \  \  \          \  \  1  /  /          X  X  X  X
                   \  \  \  \          \   /          X  X  X  X
                       \  \  \  \                 /  X  X  X
        \ = OK             \  \  \  \         /  /  X  X
                               \  \  \  Head /  /  X
        X = Error                  \  \  0  /  /
                                       \   /

        -42 -39 -36 -33 -30 -27 -24 -21    +21 +24 +27 +30 +33 +36 +39 +42
         <---------------------  Angular Rotation  ---------------------->
                  Angular position of head in minutes of a degree.




        Analysis:

             The above display indicates that Head 1 does not have an 
        azimuth problem, but that Head 0 may be rotated slightly in one 
        direction,  Head 0 was able to read all the data angled in one 
        direction, but could not read data angled at 27' or greater in 
        the opposite direction.





















        Copyright (C) Microsystems Development 1987, 1988.            25





        TEST DRIVE (tm)                                     Version 1.2


        F8  Hub Centering


             Hub Centering is a measure of how well the disk clamping 
        mechanism holds the disk media centered and rotates it in a 
        perfect circle.  

             The DDD has three test tracks for three levels of clamping 
        sensitivity, 7, 8 and 9 milli-inches.  These tracks are called 
        the alternate offset tracks.  Data is alternately offset +/- 7, 
        +/- 8 or +/- 9 milli-inches all around the disk.  All disks 
        should pass the 7 milli-inch test and some with perfect clamping 
        and good sensitivity will pass the 9 milli-inch test.  A drive 
        should be considered to be in good shape if the 8 milli-inch test 
        is passed.


        Display information:

             The display for hub centering shows 3 sinusoidal waveforms 
        each indicating results from different tracks.  A solid block 
        (indicated by a '~' in this document) is displayed for a 
        successful read, and an 'X' is displayed for an unsuccessful 
        read.

             The results for head 0 are displayed first, and the user is 
        given the option to test head 1 also.


        Adjustment:

             There generally is no adjustment for disk clamping or hub 
        centering.  Poor centering us usually an indication of a worn 
        out drive.


        Note:  The DDD does not have a reinforcing hub.  This is to        
               avoid any centering error that could be introduced by 
               the hub reinforcer ring.


















        Copyright (C) Microsystems Development 1987, 1988.            26





        TEST DRIVE (tm)                                     Version 1.2


        A)  Sample of a good drive     


                       TEST DRIVE Hub Centering Head 0 

                           ~   ~
                       ~           ~
                                       ~
                   ~       ~   ~
                       ~           ~       X
                                       ~                                   ~
        9 -->  ~   ~       ~   ~
                       ~           ~       ~   ~
                                       ~                               ~   ~
        8 -->  ~   ~                               ~
                                           ~   ~       ~           ~ 
                                                           ~   ~       ~   ~
        7 -->  ~                                   ~
                                               ~       ~           ~
                                                           ~   ~       ~
                                                   ~
        ~ = OK  X = Error                              ~           ~
                                                           ~   ~
               <-----------------  One Disk Revolution  ------------------->



        Analysis:

             This drive is functioning properly.  The 9 milli-inch test 
        shows an occasional error but this is acceptable.


























        Copyright (C) Microsystems Development 1987, 1988.            27





        TEST DRIVE (tm)                                     Version 1.2


        B)  Sample of a bad drive     


                       TEST DRIVE Hub Centering Head 0 

                           ~   X
                       X           ~
                                       X
                   ~       ~   X
                       X           ~       ~
                                       X                                   ~
        9 -->  X   ~       ~   ~
                       X           ~       ~   X
                                       ~                               X   ~
        8 -->  X   ~                               ~
                                           ~   X       X           ~
                                                           ~   X       X   ~
        7 -->  ~                                   ~
                                               ~       X           ~
                                                           ~   ~       ~
                                                   ~
        ~ = OK  X = Error                              ~           ~
                                                           ~   ~
               <-----------------  One Disk Revolution  ------------------->



        Analysis:

             The drive is not rotating the disk in a perfect circular 
        fashion.  Errors may be tolerated at 9 milli-inches but never at 
        7 milli-inches.  This indicates that as the disk is rotating, 
        with the head in a fixed position, the data track is not 
        consistently under the head.























        Copyright (C) Microsystems Development 1987, 1988.            28





        TEST DRIVE (tm)                                     Version 1.2


        F9  Continuous Alignment


             The continuous alignment test is provided as a way to `zero 
        in' on a particular head and track and take continuous 
        measurements.

             The test defaults to head 0, track 19, but by using the 
        left, right, up and down arrows, the user can select any of the 
        progressive offset tracks on the DDD.

             When the continuous alignment test begins to run, it will 
        first test for the presence of the Dysan DDD.  If it is present, 
        the test will proceed.  If it is not, the operator is given the 
        opportunity to override and continue anyway.  If the drive is so 
        poorly adjusted that TEST DRIVE cannot sense the Dysan disk, the 
        override feature allows the operator to at least start the test, 
        presumably so that a technician can attempt adjustment.  If the 
        user selects the override feature, and a non-Dysan DDD is 
        inserted, TEST DRIVE will report "Unable to read any data on 
        disk" for each measurement trial.     

        Display information:

             The horizontal bars on the display span the distance from 
        track centerline that the drive was able to read.  When new 
        measurements are taken, the previous bars are scrolled down, and 
        the current measurements are displayed on the top line.  If the 
        head or track is switched, all previous measurements are cleared 
        before new data is displayed.


        Adjustments:

             If you attempt to make alignment adjustments, you can do so 
        while the continuous alignment test is running.  The test will 
        continually report any change.  Keep in mind that a disk drive is 
        a precision instrument.  If the data pattern shows a 2 milli-inch 
        shift, this is indicating the physical positioning needs to be 
        shifted 1/1000 of an inch to gain symmetry.  This is a very small 
        distance.  Once you start to move the head assembly, the 
        alignment may worsen.  

             In any case, when adjusting the heads be careful not to 
        cause damage to the DDD.
             











        Copyright (C) Microsystems Development 1987, 1988.            29





        TEST DRIVE (tm)                                     Version 1.2


        A)  Sample display of a good drive


                      TEST DRIVE Continuous Alignment Test


                       <----------- m i l l i - i n c h e s ---------->
                       -13-12-11-10 -9 -8 -7 -6 +6 +7 +8 +9+10+11+12+13
                       |--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|

              Current >         ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
             Previous           ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                                ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                                ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                                ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                                ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                                ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                                ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                                ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                                ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                                ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

        Use the up & down arrows >  Head 0  Track 19 < Use the left & right
        to switch heads                             arrows to switch tracks



        Analysis:

             The above drive appears to be perfectly aligned, as 
        evidenced by the fact that it can read data at equal distances on 
        either side of track center.  If other tracks and the other head 
        also display good results, alignment can be considered excellent.

             Sensitivity is 20 (10 + 10) which is also very good.

             Keep in mind, that some variations in the above display are 
        normal, particularly at the sides.  Data written greater than 8 
        milli-inches from track center may be read unreliably.  If this 
        test display were to show some slight variation in alignment or 
        sensitivity, it does not necessarily mean that the drive is in 
        need of adjustment.  

             Some variation is normal since data written too far off 
        track center may be read unreliably.












        Copyright (C) Microsystems Development 1987, 1988.            30





        TEST DRIVE (tm)                                     Version 1.2


        B)  Sample display of a bad drive


                      TEST DRIVE Continuous Alignment Test


                       <----------- m i l l i - i n c h e s ---------->
                       -13-12-11-10 -9 -8 -7 -6 +6 +7 +8 +9+10+11+12+13
                       |--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|

              Current >   ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
             Previous  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                       ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                          ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                       ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                       ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                       ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                          ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                       ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                       ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                       ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

        Use the up & down arrows >  Head 0  Track 19 < Use the left & right
        to switch heads                             arrows to switch tracks


        Analysis:

             The above drive shows poor alignment since the horizontal 
        bars are all skewed to one side.  It is definitely in need of 
        adjustment.  

             The head is shifted slightly away from the spindle as 
        indicated by the higher negative values.  Sensitivity is 19 (6 + 
        13 or 7 + 12), which is good.  Therefore, this drive can probably 
        be adjusted to within acceptable tolerances.





















        Copyright (C) Microsystems Development 1987, 1988.            31





        TEST DRIVE (tm)                                     Version 1.2


        F10  Cleaning Utility


             The disk read/write heads may in time build up a deposit of 
        oxide, smoke or dust particles that will adversely effect the 
        sensitivity of the heads.  Depending on the amount of buildup, 
        cleaning may improve the performance of the disk drive. 

             The TEST DRIVE cleaning utility is designed to be used with 
        a standard cleaning disk and cleaning solution.  It will rotate 
        the disk for a set length of time, and move the heads across the 
        surface of the cleaning disk.  

             Most manufacturers of cleaning disks recommend that you 
        invoke a DIR command and continue the drive motion for about 30 
        seconds.  This will cause the head to seek to track zero looking 
        for the directory information.  In doing this, the only portion 
        of the cleaning disk that is used is the portion physically 
        located where track zero is supposed to be (the outer edge).  The 
        TEST DRIVE cleaning utility will move the head across the disk 
        from track 0 to track 39.  Each cycle from track 0 to 39 takes 
        approximately 10 seconds.  By using the cleaning utility in 
        conjunction with a standard cleaning disk you will get more 
        efficient usage of the cleaning disk and more efficient cleaning 
        of the heads.

             Most drive cleaners recommend that you use the cleaning disk 
        only 10 to 20 times before discarding.  Since the head itself is 
        physically less that 1/8 inch wide, and it can be moved almost 1 
        inch across the disk, it stands to reason that if the head 
        positioning is varied and you follow manufacturers advice, you 
        can expect to obtain 80 or more cleanings from a single cleaning 
        disk.  


        Drive cleaning tips:

             Does cleaning really help?  We recommend that you monitor 
        head sensitivity with TEST DRIVE before and after you clean the 
        heads to illustrate what effect the cleaning has on the 
        performance of the heads.  Sensitivity is a measure of how well 
        the heads read.  The General Test and the Alignment Test indicate 
        sensitivity in the +x to -x readings.  The larger the span 
        between the + and - numbers the greater the sensitivity.  Take 
        note of the sensitivity before cleaning and after.  If the 
        sensitivity did not increase the heads didn't need cleaning. 

             Are cleaning disks harmful to the drives?  The cleaning 
        media in the revolving  disk cleaners must be stiff to allow for 
        the hub to clamp and spin it.  This stiff characteristic 
        generally means that the cleaner is somewhat abrasive also.  
        Excessive usage of abrasive cleaning disks may cause excessive 
        wear on the heads, but occassional cleaning is not harmful.

             


        Copyright (C) Microsystems Development 1987, 1988.            32





        TEST DRIVE (tm)                                     Version 1.2


             How often should floppy disk drives be cleaned?  One 
        cleaning disk manufacturer recommends daily cleaning, most all 
        recommend cleaning at least once a week.  However, we recommend 
        that you clean your drive only when needed based on usage and 
        environment.  If the environment is smoky or dusty the heads will 
        build up a deposit quickly.  In an extremely clean location the 
        heads will require less cleaning.  The amount of usage the drive 
        receives will only slightly effect the cleaning requirements.  
        Since the time the head is in contact with the media is generally 
        so short, this does not have as much effect as the environment.  
        In a generally clean environment with moderate usage a disk drive 
        may require cleaning every 3 to 4 months, but there are no hard 
        and fast rules.  The best indicator of when to clean your drives 
        can be obtained by using TEST DRIVE to periodically check their 
        performance. 

             What is the best way to clean disk drives?  Any standard 
        cleaning disk is acceptable.  It appears as though there are only 
        a few manufacturers that provide several name brand distributors.  
        We recommend that a lint free cloth saturated in a good cleaning 
        solvent be used if access to the head assembly if possible.  If 
        the access is limited be careful not to disturb the alignment by 
        moving the head assembly.  The commercially available cleaning 
        solution provided with cleaning disks is generally a form of 
        isopropyl alcohol and freon.  This is fine to use but isopropyl 
        alcohol by itself is sufficient to do the job.  The purer it is, 
        the better.  Ninety-one percent isopropyl alcohol is available in 
        many drug stores, and 99% is rarer but still available.  





























        Copyright (C) Microsystems Development 1987, 1988.            33





        TEST DRIVE (tm)                                     Version 1.2


                                GLOSSARY OF TERMS



        1.2MB          1200 x 1024 or 1,228,800 bytes.  The amount of 
                       data stored on a high density diskette,  High 
                       density drives are normally found in AT type 
                       computers.

        360KB          360 * 1024 or 368,640 bytes.  The amount of data 
                       stored on standard 5 1/4 inch diskette.

        720KB          720 * 1024 or 737,280 bytes.  The amount of data 
                       stored on a 3 1/2 inch diskette.

        Alignment      The measure of how centered the Read/Write head is 
                       over the track centerline.  Sometimes referred to
                       as Radial Alignment.

        Alignment      The measure of how much of the track the head will 
        Sensitivity    respond to.  In a 48 TPI drive, if the head reads 
                       -11 to +10 milli-inches the head is sensitive to 
                       21 milli-inches of data and is very good.  If the 
                       head reads -8 to +7 milli-inches of data the 
                       sensitivity is 15 milli-inches and is poor.
          
        Alternate      Alternate offset refers to the data pattern on the 
        Offset         centering test tracks.  There are 3 tracks used 
                       for this test.  Data is written at +/- 7 milli-
                       inches on the first, +/- 8 on the second, and 
                       +/- 9 on the third.
         
        Azimuth        The angular displacement of the Read/Write Head
                       relative to a line tangent to the track center 
                       line.

        BIOS           Basic Input/Output System.  The built functions of 
                       a computer to facilitate many functions including 
                       disk reads and writes.

        Centering      The ability of the disk clamping mechanisms to 
                       clamp on the diskette precisely in the center of 
                       the disk and spin the disk in a perfect circle.  
                       See Alternate Offset.  Sometimes referred to as 
                       eccentricity.

        Clamping       See Centering. 

        CRC            Cyclic Redundancy Check.  A type of error checking 
                       used by the computer's BIOS to help insure 
                       integrity of data on a diskette.

        Cylinder       A set of concentric equal size tracks, stacked on 
                       top of one another.  Usually used when discussing 
                       hard disks, but sometimes with diskettes also.


        Copyright (C) Microsystems Development 1987, 1988.            34





        TEST DRIVE (tm)                                     Version 1.2



        Diskette       The magnetic media inserted into a floppy disk 
                       drive, used to store information.     

        DDD            Digital Diagnostic Disk, manufactured by Dysan 
                       Corporation.  Contains data patterns written at 
                       precise angles and distances from track center. 

        Eccentricity   See Centering.

        Head           The portion of the drive that reads and writes the 
                       stored magnetic information from the diskette.

        Hub            The center of the diskette sometimes reinforced 
                       with ring.

        Hysteresis     A measure of the drive mechanism's ability to seek 
                       to a specified track from either direction and 
                       position the head at precisely the same distance 
                       from the center.

        Milli-inch     One 1/1000th of an inch.

        Minute         One 1/60th of a degree.  Used to measure the 
                       rotational position or azimuth of a head relative 
                       to track centerline.

        Progressive    Progressive offset refers to the data pattern on
        Offset         the alignment test tracks.  The pattern starts at 
                       -/+6 milli-inches and progresses to -/+13 milli-
                       inches.  The data progressively gets farther away 
                       from track center.

        Radial         See Alignment
        Alignment                          

        RPM            Revolutions per minute, the number of times the 
                       disk spins around in 1 minute. 

        Sector         A slice of a track containing data, like a piece 
                       of a pie.  Each track contains a number of 
                       sectors.  For 360KB drives, there are 9 sectors 
                       per track.  High density 1.2MB drives use 15 
                       sectors per track.

        Seek           The process of moving the drive's head to a
                       particular track.

        Sensitivity    See Alignment Sensitivity

        Spindle        The mechanism in the disk drive used to spin the
                       diskette. 





        Copyright (C) Microsystems Development 1987, 1988.            35





        TEST DRIVE (tm)                                     Version 1.2


        Spindle Speed  The angular rotational speed of the diskette 
                       media, or how fast the disk spins around.  This is 
                       measured in revolutions per minute (rpm).

        TPI            Tracks per inch.  The density of tracks on a disk.  
                       For example:  A 48 TPI disk will have 48 tracks 
                       per inch, each track spaced 1/48 of an inch apart.  
                       A disk with 40 tracks will utilize 40/48ths of an 
                       inch on the disk.
                  
        Track          A circle around a disk made up of a number of 
                       sectors.  Sometimes called a cylinder.


               










































        Copyright (C) Microsystems Development 1987, 1988.            36





        TEST DRIVE (tm)                                     Version 1.2


                             CUSTOMER FEEDBACK FORM

        Your comments, suggestions, criticisms, etc. are most welcome.  
        They help us bring you a quality product at a reasonable price.  
        Just fill out this form and send it to us. 


        Brand and model of computer:_____________________________________

        Comment( ) Suggestion( ) Criticism( ) Problem( ) Other___________


        _________________________________________________________________

        _________________________________________________________________

        _________________________________________________________________

        _________________________________________________________________

        _________________________________________________________________

        _________________________________________________________________

        _________________________________________________________________

        _________________________________________________________________

        _________________________________________________________________

        _________________________________________________________________


             Name:    ________________________________________________

             Company: ________________________________________________

             Address: ________________________________________________

             City, State, Zip: _______________________________________

             Phone:  (__________) ____________________________________


        Do you need a reply?_________ Are you a registered user?_________  

        We guarantee a reply to all registered users who request one. 

        Microsystems Development may use the information you supply 
        without incurring any obligation whatsoever.

             Mail this form to:  Microsystems Development
                                 4100 Moorpark Ave.  #104
                                 San Jose, CA  95117  USA



        Copyright (C) Microsystems Development 1987, 1988.            37






```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0908

     Volume in drive A has no label
     Directory of A:\

    DIREDIT  DOC     54041   3-15-90   5:11p
    DIREDIT  EXE     62552   3-18-90   7:29p
    DIREDIT  HLP      6697   3-15-90   5:14p
    MAKETXT  EXE      8227   4-17-88  12:26p
    README   1ST      1618   3-09-90   6:36p
    VALIDATE EXE     13360   1-03-87   2:33p
    DIREDIT  OVV      4261   3-08-90   8:24p
    AUTOEXEC BAT         5   4-16-90   5:26a
    CLOCK    BAS     10368
    DT       BAS      6286   8-26-87  11:59a
    DT       DOC      4902   2-23-90  11:43a
    DT       EXE     46260  10-12-89  12:54p
    GO       BAT        38   1-18-88   1:38p
    GO       TXT      1464   4-16-90   5:24a
    R        COM       958  10-12-89  12:54p
    TESTDOC  BAT       154  11-03-88   9:48a
    TESTDRIV COM     20106   1-19-88   3:07p
    TESTDRIV DOC     86144   1-19-88   3:26p
    FILE0908 TXT      3997   4-23-90   7:46p
           19 file(s)     331438 bytes
                           18432 bytes free
