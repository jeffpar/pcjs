---
layout: page
title: "PC-SIG Diskette Library (Disk #1650)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1650/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1650"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "HEXTODEC AND DECTOHEX"

    HEXTODEC & DECTOHEX are two programs for assembly language
    computer programmers interested in converting decimal numbers to
    hexadecimal numbers and vice versa.  Entries are displayed on-screen
    for user approval, then the entry reappears with its corresponding
    conversion number.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## DECTOHEX.BAS

{% raw %}
```bas
1000 DEFDBL A-Z: GOSUB 2280
1010 PRINT "                              DECTOHEX"
1020 PRINT "                             Version 2.1"
1030 PRINT "       A program to convert decimal numbers to hexadecimal numbers."
1040 PRINT
1050 PRINT "                         Written by M.O. Embry"
1060 PRINT "                         35099 Donegal Ct."
1070 PRINT "                         Newark, CA 94560"
1080 PRINT "                         March 12, 1989"
1090 PRINT
1100 PRINT "       If you like this program and find it useful, please send a"
1110 PRINT "       contribution to:"
1120 PRINT "                         Alternatives to Nationalism"
1130 PRINT "                         c/o M.O. Embry"
1140 PRINT "                         25099 Donegal Ct."
1150 PRINT "                         Newark, CA 94560"
1160 PRINT: PRINT "       or your favorite worthy cause."
1170 PRINT:PRINT:PRINT
1180 PRINT "         ********** Press Enter Key to begin program. **********"
1190 PRINT: INPUT " ", A$: GOTO 1260

1200 PRINT:PRINT:PRINT:PRINT:PRINT:PRINT
1210 PRINT "       DO YOU WANT TO CONVERT ANOTHER DECIMAL NUMBER? (Y/N)"
1220 PRINT:PRINT:PRINT:PRINT:PRINT:PRINT: INPUT " ", A$
1230 IF (LEFT$(A$,1)="Y" OR LEFT$(A$,1)="y") THEN 1260 
1240 IF (LEFT$(A$,1)="N" OR LEFT$(A$,1)="n") THEN 2330
1250 BEEP: GOTO 1580

1260 GOSUB 2280: GOSUB 2280: PRINT:PRINT
1270 PRINT "     ENTER A DECIMAL NUMBER YOU WANT CONVERTED TO A HEXADECIMAL NUMBER."
1280 H1=0: H2=0: H3=0: H4=0: H5=0: H6=0: H7=0: H8=0
1290 H1$="0":H2$="0":H3$="0":H4$="0":H5$="0":H6$="0":H7$="0":H8$="0"
1300 GOSUB 2280: INPUT " ", DEC$: DEC1=VAL(DEC$): PRINT: GOSUB 2170
1310 GOSUB 2280
1320 PRINT USING V$; "                    THE NUMBER YOU ENTERED IS "; DEC1
1330 IF DEC1>4294967295# THEN 1340 ELSE 1370
1340 BEEP: PRINT
1350 PRINT "             ***** YOU ENTERED TOO HIGH A NUMBER.  TRY AGAIN. *****"
1360 GOTO 1270
1370 PRINT: PRINT "                    IS THIS O.K.? (Y/N)"
1380 GOSUB 2280: INPUT " ",A$
1390 IF (LEFT$(A$,1)="Y" OR LEFT$(A$,1)="y") THEN 1420
1400 IF (LEFT$(A$,1)="N" OR LEFT$(A$,1)="n") THEN 1260
1410 BEEP: GOTO 1320

1420 DUMMY$=" ": GOSUB 2280
1430 PRINT "              ********** PLEASE WAIT.  PROCESSING **********"
1440 GOSUB 2280
1450 P=0
1460 DEC=VAL(DEC$)
1470 PRINT USING V$; "                      DECIMAL NUMBER = ", DEC
1480 IF DEC=0 THEN 1780

1490 P=P+1
1500 Q=DEC/16: X=Q: X$=STR$(X)
è1510 GOSUB 1810

1520 RMDR$="0": LSTX$=X10$+X11$+X12$+X13$+X14$
1530 IF X1$="." THEN RMDR$=X1$+X2$+X3$+X4$+X5$+X6$+X7$+X8$+X9$+LSTX$
1540 IF X2$="." THEN RMDR$=X2$+X3$+X4$+X5$+X6$+X7$+X8$+X9$+LSTX$
1550 IF X3$="." THEN RMDR$=X3$+X4$+X5$+X6$+X7$+X8$+X9$+LSTX$
1560 IF X4$="." THEN RMDR$=X4$+X5$+X6$+X7$+X8$+X9$+LSTX$
1570 IF X5$="." THEN RMDR$=X5$+X6$+X7$+X8$+X9$+LSTX$
1580 IF X6$="." THEN RMDR$=X6$+X7$+X8$+X9$+LSTX$
1590 IF X7$="." THEN RMDR$=X7$+X8$+X9$+LSTX$
1600 IF X8$="." THEN RMDR$=X8$+X9$+LSTX$
1610 IF X9$="." THEN RMDR$=X9$+LSTX$
1620 IF X10$="." THEN RMDR$=LSTX$
1630 IF X11$="." THEN RMDR$=X11$+X12$+X13$+X14$
1640 IF X12$="." THEN RMDR$=X12$+X13$+X14$
1650 RMDR=VAL(RMDR$): GOSUB 1900

1660 QTNT=Q-RMDR: GOTO 1760
1670 QTNT=Q-RMDR: GOTO 1760
1680 QTNT=Q-RMDR: GOTO 1760
1690 QTNT=Q-RMDR: GOTO 1760
1700 QTNT=Q-RMDR: GOTO 1760
1710 QTNT=Q-RMDR: GOTO 1760
1720 QTNT=Q-RMDR: GOTO 1760
1730 QTNT=Q-RMDR: GOTO 1760
1740 QTNT=Q=RMDR: GOTO 1760
1750 QTNR=Q-RMDR: GOTO 1760
1760 QTNT$=STR$(QTNT)
1770 DEC=QTNT: GOTO 1480

1780 HX$=H1$+H2$+H3$+H4$+DUMMY$+H5$+H6$+H7$+H8$
1790 PRINT USING "&&"; "                      HEX NUMBER = ", HX$
1800 PRINT: PRINT: PRINT: GOTO 1210

1810 X1$=MID$(X$,2,1): X2$=MID$(X$,3,1)
1820 X3$=MID$(X$,4,1): X4$=MID$(X$,5,1)
1830 X5$=MID$(X$,6,1): X6$=MID$(X$,7,1)
1840 X7$=MID$(X$,8,1): X8$=MID$(X$,9,1)
1850 X9$=MID$(X$,10,1): X10$=MID$(X$,11,1)
1860 X11$=MID$(X$,12,1): X12$=MID$(X$,13,1)
1870 X13$=MID$(X$,14,1): X14$=MID$(X$,15,1)
1880 X$=X1$+X2$+X3$+X4$+X5$+X6$+X7$+X8$+X9$+X10$+X11$+X12$+X13$+X14$
1890 RETURN

1900 IF P=1 THEN H8=RMDR*16
1910 HX=H8: GOSUB 2070: H8$=HX$
1920 IF P=2 THEN H7=RMDR*16
1930 HX=H7: GOSUB 2070: H7$=HX$
1940 IF P=3 THEN H6=RMDR*16
1950 HX=H6: GOSUB 2070: H6$=HX$
1960 IF P=4 THEN H5=RMDR*16
1970 HX=H5: GOSUB 2070: H5$=HX$
1980 IF P=5 THEN H4=RMDR*16
1990 HX=H4: GOSUB 2070: H4$=HX$
2000 IF P=6 THEN H3=RMDR*16
è2010 HX=H3: GOSUB 2070: H3$=HX$
2020 IF P=7 THEN H2=RMDR*16
2030 HX=H2: GOSUB 2070: H2$=HX$
2040 IF P=8 THEN H1=RMDR*16
2050 HX=H1: GOSUB 2070: H1$=HX$
2060 RETURN

2070 HX$=STR$(HX): HX$=RIGHT$(HX$,1)
2080 IF HX>9 THEN GOSUB 2100
2090 RETURN

2100 IF HX=10 THEN HX$="A"
2110 IF HX=11 THEN HX$="B"
2120 IF HX=12 THEN HX$="C"
2130 IF HX=13 THEN HX$="D"
2140 IF HX=14 THEN HX$="E"
2150 IF HX=15 THEN HX$="F"
2160 RETURN

2170 IF DEC1>999999999# THEN V$="& #,###,###,###": GOTO 2270
2180 IF DEC1<10^9 AND DEC1>99999999# THEN V$="& ###,###,###"
2190 IF DEC1<10^8 AND DEC1>9999999! THEN V$="& ##,###,###"
2200 IF DEC1<10^7 AND DEC1>999999! THEN V$="& #,###,###"
2210 IF DEC1<10^6 AND DEC1>99999! THEN V$="& ###,###"
2220 IF DEC1<10^5 AND DEC1>9999 THEN V$="& ##,###"
2230 IF DEC1<10^4 AND DEC1>999 THEN V$="& #,###"
2240 IF DEC1<10^3 AND DEC1>99 THEN V$="& ###"
2250 IF DEC1<10^2 AND DEC1>9 THEN V$="& ##"
2260 IF DEC1<10 THEN V$="& #"
2270 RETURN

2280 P=P+1: PRINT
2290 IF P=12 THEN 2310
2300 GOTO 2280
2310 P=0
2320 RETURN

2330 END
```
{% endraw %}

## FILE1650.TXT

{% raw %}
```
Disk No: 1650                                                           
Disk Title: Hextodec and Dectohex                                       
PC-SIG Version: S1                                                      
                                                                        
Program Title: Hextodex & Dextohex                                      
Author Version: 2.1                                                     
Author Registration: None.                                              
Special Requirements: None.                                             
                                                                        
HEXTODEC & DECTOHEX are two programs for assembly language              
computer programmers interested in converting decimal numbers to        
hexadecimal numbers and vice versa.  Entries are displayed on-screen    
for user approval, then the entry reappears with its corresponding      
conversion number.                                                      
                                                                        
File Descriptions:                                                      
                                                                        
DECTOHEX BAK  5504   1-01-80   0:17                                     
DECTOHEX BAS  5504   1-01-80   0:51                                     
DECTOHEX EXE  27392  1-01-80   0:25                                     
HEXTODEC BAS  6528   1-01-80   0:06                                     
HEXTODEC EXE  28416  1-01-80   0:17                                     
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1988 PC-SIG, Inc.                                         
```
{% endraw %}

## HEXTODEC.BAS

{% raw %}
```bas
1000 CLS
1010 PRINT:PRINT
1020 PRINT "                               HEXTODEC"
1030 PRINT "                              Version 2.0"
1040 PRINT "       A program to convert hexadecimal numbers to decimal numbers."
1050 PRINT
1060 PRINT "                         Written by M.O. Embry"
1070 PRINT "                         35099 Donegal Ct."
1080 PRINT "                         Newark, CA 94560"
1090 PRINT "                         March 3, 1989
1100 PRINT
1110 PRINT "       If you like this program and find it useful, please send a"
1120 PRINT "       contribution to:"
1130 PRINT "                         Alternatives to Nationalism"
1140 PRINT "                         c/o M.O. Embry"
1150 PRINT "                         25099 Donegal Ct."
1160 PRINT "                         Newark, CA 94560"
1170 PRINT: PRINT "       or your favorite worthy cause."
1180 PRINT: PRINT: PRINT
1190 PRINT "         ********** Press Enter Key to begin program. **********"
1200 PRINT: INPUT " ", A$
1210 GOSUB 1660: DEFDBL D
1220 PRINT "               ENTER THE HEXADECIMAL NUMBER YOU WANT TO CONVERT."
1230 PRINT "          ***** MAKE YOUR ENTRY WITHOUT SPACES BETWEEN DIGITS. *****"
1240 GOSUB 1660
1250 INPUT " ", H$
1260 GOSUB 1910                    REM' Hex Digit Identification
1270 GOSUB 1660                    REM' 12-Line Print
1280 GOSUB 1710                    REM' Hex Digit Check
1290 GOSUB 1960                    REM' H$=XX$ Conversion & Invalid Hex Check
1300 GOSUB 1800                    REM' DUMMY$ Check
1310                     REM' Error if Space Between Digits
1320 IF FLAG2=1 THEN 1330 ELSE 1360
1330 BEEP
1340 PRINT "             *** YOU ENTERED A SPACE BETWEEN DIGITS.  TRY AGAIN. ***"
1350 PRINT:PRINT:PRINT:PRINT: FLAG2=0: GOTO 1220
1360 GOSUB 1960                         REM' H$ Conversion & Invalid Hex Check
1370 GOSUB 1910
1380                     REM' Display Hex Number Entered
1390 V$="                     & &&&& &&&&"
1400 PRINT USING V$;"THE HEX NUMBER YOU ENTERED IS ",H1$,H2$,H3$,H4$,H5$,H6$,H7$,H8$
1410 PRINT: PRINT "                     IS THIS O.K.? (Y/N)"
1420 GOSUB 1660: INPUT " ", A$: GOSUB 1660
1430 IF (LEFT$(A$,1)="Y" OR LEFT$(A$,1)="y") THEN 1460
1440 IF (LEFT$(A$,2)="N" OR LEFT$(A$,1)="n") THEN 1220
1450 BEEP: GOTO 1400
1460 GOSUB 1660
1470 A=0:B=1:C=2:D=3:E=4:F=5:G=6:H=7
1480 GOSUB 1960
1490 DEC8=16^H*H1: DEC7=16^G*H2: DEC6=16^F*H3: DEC5=16^E*H4
1500 DEC4=16^D*H5: DEC3=16^C*H6: DEC2=16^B*H7: DEC1=16^A*H8
1510 DECIMAL=DEC8+DEC7+DEC6+DEC5+DEC4+DEC3+DEC2+DEC1
1520 GOSUB 1910                    REM' Display Hex Letters 
1530 PRINT:PRINT:PRINT:PRINT:PRINT:PRINT:PRINT:PRINT
1540 V$="                          & &&&& &&&&"
1550 PRINT USING V$; "HEX NUMBER = ",H1$,H2$,H3$,H4$,H5$,H6$,H7$,H8$
1560 DECIMAL$=STR$(DECIMAL): GOSUB 2190
1570 PRINT USING V$; "DECIMAL = ", DECIMAL
1580 PRINT:PRINT:PRINT:PRINT
1590 PRINT "              DO YOU WANT TO CONVERT ANOTHER HEX NUMBER? (Y/N)"
1600 PRINT:PRINT:PRINT:PRINT:PRINT:PRINT:PRINT:PRINT
1610 INPUT " ", A$
1620 IF (A$="Y" OR A$="y") THEN 1650
1630 IF (A$="N" OR A$="n") THEN 2430
1640 GOTO 1590
1650 GOSUB 1660: GOTO 1220
1660                               REM' 12-Line Prints
1670 P=P+1: PRINT
1680 IF P=12 THEN 1700
1690 GOTO 1660
1700 P=0: RETURN
1710 IF LEN(H$)=1 THEN H$="0"+"0"+"0"+"0"+"0"+"0"+"0"+H$
1720 IF LEN(H$)=2 THEN H$="0"+"0"+"0"+"0"+"0"+"0"+H$
1730 IF LEN(H$)=3 THEN H$="0"+"0"+"0"+"0"+"0"+H$
1740 IF LEN(H$)=4 THEN H$="0"+"0"+"0"+"0"+H$
1750 IF LEN(H$)=5 THEN H$="0"+"0"+"0"+H$
1760 IF LEN(H$)=6 THEN H$="0"+"0"+H$
1770 IF LEN(H$)=7 THEN H$="0"+H$
1780 IF LEN(H$)=8 THEN H$=H$
1790 RETURN
1800 DUMMY$=" "
1810 V$="& &&&& &&&&"
1820 IF (H1$=DUMMY$ OR H2$=DUMMY$ OR H3$=DUMMY$ OR H4$=DUMMY$) THEN FLAG2=1
1830 IF (H5$=DUMMY$ OR H6$=DUMMY$ OR H7$=DUMMY$ OR H8$=DUMMY$) THEN FLAG2=1
1840 RETURN
1850 IF (H1$="0" OR H2$="0") THEN 1890 ELSE 1860
1860 IF (H3$="0" OR H4$="0") THEN 1890 ELSE 1870
1870 IF (H5$="0" OR H6$="0") THEN 1890 ELSE 1880
1880 IF (H7$="0" OR H8$="0") THEN 1890 ELSE 1900
1890 BEEP: FLAG1=1
1900 RETURN
1910 H1$=MID$(H$,1,1): H2$=MID$(H$,2,1)
1920 H3$=MID$(H$,3,1): H4$=MID$(H$,4,1)
1930 H5$=MID$(H$,5,1): H6$=MID$(H$,6,1)
1940 H7$=MID$(H$,7,1): H8$=MID$(H$,8,1)
1950 RETURN
1960 XX$=H1$: GOSUB 2050: H1$=XX$: H1=VAL(H1$)
1970 XX$=H2$: GOSUB 2050: H2$=XX$: H2=VAL(H2$)
1980 XX$=H3$: GOSUB 2050: H3$=XX$: H3=VAL(H3$)
1990 XX$=H4$: GOSUB 2050: H4$=XX$: H4=VAL(H4$)
2000 XX$=H5$: GOSUB 2050: H5$=XX$: H5=VAL(H5$)
2010 XX$=H6$: GOSUB 2050: H6$=XX$: H6=VAL(H6$)
2020 XX$=H7$: GOSUB 2050: H7$=XX$: H7=VAL(H7$)
2030 XX$=H8$: GOSUB 2050: H8$=XX$: H8=VAL(H8$)
2040 RETURN
2050 IF XX$="A" THEN XX$="10"
2060 IF XX$="B" THEN XX$="11"
2070 IF XX$="C" THEN XX$="12"
2080 IF XX$="D" THEN XX$="13"
2090 IF XX$="E" THEN XX$="14"
2100 IF XX$="F" THEN XX$="15"
2110 IF (XX$="G" OR XX$="H" OR XX$="I" OR XX$="J" OR XX$="K") THEN FLAG1=1
2120 IF (XX$="L" OR XX$="M" OR XX$="N" OR XX$="O" OR XX$="P") THEN FLAG1=1
2130 IF (XX$="Q" OR XX$="R" OR XX$="S" OR XX$="T" OR XX$="U") THEN FLAG1=1
2140 IF (XX$="V" OR XX$="W" OR XX$="X" OR XX$="Y" OR XX$="Z") THEN FLAG1=1
2150 IF FLAG1=1 THEN 2160 ELSE 2180
2160 BEEP: PRINT "                  ***** INVALID HEX NUMBER.  TRY AGAIN. *****"
2170 PRINT:PRINT:PRINT:PRINT: FLAG1=0: GOTO 1220
2180 RETURN
2190 REM'
2200 IF LEN(DECIMAL$)=1 THEN 2310
2210 IF LEN(DECIMAL$)=2 THEN 2320
2220 IF LEN(DECIMAL$)=3 THEN 2330
2230 IF LEN(DECIMAL$)=4 THEN 2340
2240 IF LEN(DECIMAL$)=5 THEN 2350
2250 IF LEN(DECIMAL$)=6 THEN 2360
2260 IF LEN(DECIMAL$)=7 THEN 2370
2270 IF LEN(DECIMAL$)=8 THEN 2380
2280 IF LEN(DECIMAL$)=9 THEN 2390
2290 IF LEN(DECIMAL$)=10 THEN 2400
2300 IF LEN(DECIMAL$)=11 THEN 2410
2310 V$="                          &#":  GOTO 2420
2320 V$="                          &##":  GOTO 2420
2330 V$="                          &###":  GOTO 2420
2340 V$="                          &#,###":  GOTO 2420
2350 V$="                          &##,###":  GOTO 2420
2360 V$="                          &###,###":  GOTO 2420
2370 V$="                          &#,###,###":  GOTO 2420
2380 V$="                          &##,###,###":  GOTO 2420
2390 V$="                          &###,###,###":  GOTO 2420
2400 V$="                          &#,###,###,###":  GOTO 2420
2410 V$="                          &##,###,###,###":  GOTO 2420
2420 RETURN
2430 CLS: SYSTEM: END
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1650

     Volume in drive A has no label
     Directory of A:\

    DECTOHEX BAK      5504   1-01-80  12:17a
    DECTOHEX BAS      5504   1-01-80  12:51a
    DECTOHEX EXE     27392   1-01-80  12:25a
    FILE1650 TXT      2073  11-29-89   2:02p
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       617  11-30-89  10:45a
    HEXTODEC BAS      6528   1-01-80  12:06a
    HEXTODEC EXE     28416   1-01-80  12:17a
            8 file(s)      76072 bytes
                           81920 bytes free
