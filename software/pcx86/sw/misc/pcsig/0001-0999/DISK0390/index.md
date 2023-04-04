---
layout: page
title: "PC-SIG Library Disk #390"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0390/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0390"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "GAME SERIES NO 18"

    This is one of the finest collections of color graphic games
    in the library.  They cover a wide range of interests.  ABC is a fun
    way to teach your children the alphabet.  ACQB is armchair fun for you
    football fans.  BRICK and BABY are fast-paced challengers, and the list
    goes on.  For a good time, try this disk.
    File Descriptions:
    
    ABC      BAS  Kids use the computer and learn the alphabet.
    BRICK    EXE  Knock down the brick wall game.
    BABY     EXE  Try to catch the bouncing babies in time.
    ACQB     EXE  Armchair quarterback strategy football game.
    ABC      DOC  Documentation for ABC.DOC.
    SOVIET   DOC  Documentation for SOVIET.
    SOVIET   BAS  Escape from Soviet Science And Detention Base.
    QUIMBEE  EXE  Dice game requires color monitor.
    FLIGHTM  EXE  Protect the Omegans from the Desert Warriors.
    README   BAT  Notes on EMPIRE.BAS.
    EMPIRE   BAS  BASIC game.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## ABC.BAS

```bas
10 REM ***********************************************************************
20 REM ***********************************************************************
30 REM ******* ERYN'S ABC'S
40 REM ***********************************************************************
50 REM ******* To Eryn Parker-Ross
60 REM ******* by Bart Parker-Ross for Parker-Ross Associates
70 REM ******* 1673 Scramento Street, San Francisco, CA 94109
80 REM *******         415 441-6483
90 REM ******* Version 1.20 (C) Copyright  PARKER-ROSS ASSOCIATES  1985
100 REM ****** Licensed Material - Program Property of PARKER-ROSS ASSOCIATES
110 REM **********************************************************************
120 REM **********************************************************************
130 REM **********************************************************************
140 REM ****************************************************
150 CLS :KEY OFF:OPTION BASE 1 :W=10:S=7:P=0:T=0:U=7:V=15:M=0
160 COLOR S,P
170 WIDTH 80
180 ON ERROR GOTO 12220
190 REM ****************************************************
200 CLS :GOSUB 12320  :REM ********** PLEASE, DO NOT REMOVE! ****
210 END          :REM **************************************
220 REM ****************************************************
230 KEY (1) OFF  :KEY 1,""
240 KEY (2) OFF  :KEY 2,""
250 KEY (3) OFF  :KEY 3,""
260 KEY (4) OFF  :KEY 4,""
270 KEY (5) OFF  :KEY 5,""
280 KEY (6) OFF  :KEY 6,""
290 KEY (7) OFF  :KEY 7,""
300 KEY (8) OFF  :KEY 8,""
310 KEY (9) OFF  :KEY 9,""
320 KEY (10) OFF :KEY 10,""
330 CLEAR,,2024
340 CLS :W=10:S=7:P=0:T=0:U=7:V=15:M=0
350 REM ****************************************************
360 DIM ABCNOTES$(165)
370 DIM ABCSONGLINES$(24)
380 DIM HAPPYFACELOCATES(45)
390 DIM INQUIRELINE$(63), PILLAR(63)
400 DIM ERYN$(25)
410 DIM PICTURELINES$(24)
420 REM ****************************************************
430 REM ****************************************************
440 ERYN$(1)="E": ERYN$(2)="R":  ERYN$(3)="Y":  ERYN$(4)="N":  ERYN$(5)="'"
450 ERYN$(6)="S": ERYN$(7)=" ": ERYN$(8)="A": ERYN$(9)="B": ERYN$(10)="C"
460 ERYN$(11)="'": ERYN$(12)="S"
470 FOR I = 1 TO 24
480    READ PICTURELINES$(I)
490 NEXT I
500 GOSUB 930    : REM starts music ***************
510 LOCATE 2,1 :J=2
520 FOR I = 1 TO 24
530     LOCATE J,1: PRINT PICTURELINES$(I);:J=J+1
540 NEXT I
550 C=34:J=1 :LOOP=300 : R14=14
560 FOR I=1 TO 6
570 LOCATE 10,38:PRINT CHR$(2);:FOR L1=1 TO LOOP :NEXT L1:LOCATE 10,38:PRINT "█";:LOCATE R14,C:PRINT ERYN$(J);:C=C+1:J=J+1
580 LOCATE 10,40:PRINT CHR$(2);:FOR L1=1 TO LOOP :NEXT L1:LOCATE 10,40:PRINT "█";:LOCATE R14,C:PRINT ERYN$(J);:C=C+1:J=J+1
590 NEXT I
600 LOCATE 16,38:PRINT "1.2";
610 FOR I=1 TO 228
620 LOCATE 10,38:PRINT CHR$(2);:FOR L1=1 TO LOOP :NEXT L1:LOCATE 10,38:PRINT "█";:'LOCATE R14,C:PRINT ERYN$(J);:C=C+1:J=J+1
630 LOCATE 10,40:PRINT CHR$(2);:FOR L1=1 TO LOOP :NEXT L1:LOCATE 10,40:PRINT "█";:'LOCATE R14,C:PRINT ERYN$(J);:C=C+1:J=J+1
640 NEXT I
650 LOCATE 10,39:PRINT CHR$(2);
660 :COLOR S,P:FOR L1=1 TO 1 :NEXT L1:GOTO 1090 :REM branches to userinput **
670 DATA " ██████████████████████████████████████████████████████████████████████████████"
680 DATA " ██████████████████████████                      ██████████████████████████████"
690 DATA " ██████████████████████████    SCHOOL  HOUSE     ██████████████████████████████"
700 DATA " ██████████████████████                              ██████████████████████████"
710 DATA " ███████████████████             ███████████             ██████████████████████"
720 DATA " ██████████████                  █████▓█████                 ██████████████████"
730 DATA " ███████████                     ████▓▓▓████                   ████████████████"
740 DATA " ███████████                     ███▓▓▓▓▓███                   ████████████████"
750 DATA " ███████████                     ████☻██████                   ████████████████"
760 DATA " ███████████                     ███████████                   ████████████████"
770 DATA " ███████████                                                   ████████████████"
780 DATA " ███████████                                                   ████████████████"
790 DATA " ███████████                                                   ████████████████"
800 DATA " ███████████                                                   ████████████████"
810 DATA " ███████████                                                   ████████████████"
820 DATA " ███████████     ████████                       ███████        ████████████████"
830 DATA " ███████████     ████████         ████████      ███████        ████████████████"
840 DATA " ███████████     ████████         ████████      ███████        ████████████████"
850 DATA " ███████████     ████████         ████████      ███████        ████████████████"
860 DATA " ███████████                      █■██████                     ████████████████"
870 DATA " ███████████                      ████████                     ████████████████"
880 DATA " ███████████                      ████████                     ████████████████"
890 DATA " ███████████                      ████████                     ████████████████"
900 DATA " ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀"
910 END
920 REM *****************************************************
930 REM ****************   ABC SONG    **********************
940 REM *****************************************************
950 F=0
960 PLAY "mb"
970 PLAY ON
980 ON PLAY(2) GOSUB 990
990 F=F+1
1000 ON F GOTO  1010,1020,1030,1040
1010 PLAY "T150; O3 C4 C4 G4 G4 A4 A4 G2 F4 F4 E4 E4":GOTO 1050
1020 PLAY "D8 D8 D8 D8 C2 G4 G4 F4 P4 E4 E4 D2 G8 G8":GOTO 1050
1030 PLAY "G4 F4 P4 E4 E4 D2 C4 C4 G4 G4 A4 A4 G2 F4":GOTO 1050
1040 PLAY "F4 E4 E4 D4 D4 C2" :GOTO 1090
1050 RETURN
1060 REM *****************************************************
1070 REM *****************************************************
1080 REM ****************************************************
1090 REM ****  program to accecpt input from keyboard ABC **
1100 COLOR V,M :LOCATE ,,1
1110 L2=1
1120 LOOP=10
1130 REM ************************************************
1140  INQUIRELINE$(1)=CHR$(32)   : PILLAR(1)=1 : REM --->SPACE
1150  INQUIRELINE$(2)=CHR$(32)   : PILLAR(2)=2 : REM --->SPACE
1160  INQUIRELINE$(3)=CHR$(32)   : PILLAR(3)=3 : REM --->SPACE
1170  INQUIRELINE$(4)=CHR$(32)   : PILLAR(4)=4 : REM --->SPACE
1180  INQUIRELINE$(5)=CHR$(32)   : PILLAR(5)=5 : REM --->SPACE
1190  INQUIRELINE$(6)=CHR$(32)   : PILLAR(6)=6 : REM --->SPACE
1200  INQUIRELINE$(7)=CHR$(32)   : PILLAR(7)=7 : REM --->SPACE
1210  INQUIRELINE$(8)=CHR$(32)   : PILLAR(8)=8 : REM --->SPACE
1220  INQUIRELINE$(9)=CHR$(65)   : PILLAR(9)=9 : REM --->A
1230  INQUIRELINE$(10)=CHR$(66)  : PILLAR(10)=10 : REM --->B
1240  INQUIRELINE$(11)=CHR$(67)  : PILLAR(11)=11 : REM --->C
1250  INQUIRELINE$(12)=CHR$(68)  : PILLAR(12)=12 : REM --->D
1260  INQUIRELINE$(13)=CHR$(69)  : PILLAR(13)=13 : REM --->E
1270  INQUIRELINE$(14)=CHR$(70)  : PILLAR(14)=14 : REM --->F
1280  INQUIRELINE$(15)=CHR$(71)  : PILLAR(15)=15 : REM --->G
1290  INQUIRELINE$(16)=CHR$(72)  : PILLAR(16)=16 : REM --->H
1300  INQUIRELINE$(17)=CHR$(73)  : PILLAR(17)=17 : REM --->I
1310 INQUIRELINE$(18)=CHR$(74)  : PILLAR(18)=18 : REM --->J
1320 INQUIRELINE$(19)=CHR$(75)  : PILLAR(19)=19 : REM --->K
1330 INQUIRELINE$(20)=CHR$(76)  : PILLAR(20)=20 : REM --->L
1340 INQUIRELINE$(21)=CHR$(77)  : PILLAR(21)=21 : REM --->M
1350 INQUIRELINE$(22)=CHR$(78)  : PILLAR(22)=22 : REM --->N
1360 INQUIRELINE$(23)=CHR$(79)  : PILLAR(23)=23 : REM --->O
1370 INQUIRELINE$(24)=CHR$(80)  : PILLAR(24)=24 : REM --->P
1380 INQUIRELINE$(25)=CHR$(81)  : PILLAR(25)=25 : REM --->Q
1390 INQUIRELINE$(26)=CHR$(82)  : PILLAR(26)=26 : REM --->R
1400 INQUIRELINE$(27)=CHR$(83)  : PILLAR(27)=27 : REM --->S
1410 INQUIRELINE$(28)=CHR$(84)  : PILLAR(28)=28 : REM --->T
1420 INQUIRELINE$(29)=CHR$(85)  : PILLAR(29)=29 : REM --->U
1430 INQUIRELINE$(30)=CHR$(86)  : PILLAR(30)=30 : REM --->V
1440 INQUIRELINE$(31)=CHR$(87)  : PILLAR(31)=31 : REM --->W
1450 INQUIRELINE$(32)=CHR$(88)  : PILLAR(32)=32 : REM --->X
1460 INQUIRELINE$(33)=CHR$(89)  : PILLAR(33)=33 : REM --->Y
1470 INQUIRELINE$(34)=CHR$(90)  : PILLAR(34)=34 : REM --->Z
1480 INQUIRELINE$(35)=CHR$(250) : PILLAR(35)=35 : REM --->·
1490 INQUIRELINE$(36)=CHR$(48)  : PILLAR(36)=36 : REM --->0
1500 INQUIRELINE$(37)=CHR$(49)  : PILLAR(37)=37 : REM --->1
1510 INQUIRELINE$(38)=CHR$(50)  : PILLAR(38)=38 : REM --->2
1520 INQUIRELINE$(39)=CHR$(51)  : PILLAR(39)=39 : REM --->3
1530 INQUIRELINE$(40)=CHR$(52)  : PILLAR(40)=40 : REM --->4
1540 INQUIRELINE$(41)=CHR$(53)  : PILLAR(41)=41 : REM --->5
1550 INQUIRELINE$(42)=CHR$(54)  : PILLAR(42)=42 : REM --->6
1560 INQUIRELINE$(43)=CHR$(55)  : PILLAR(43)=43 : REM --->7
1570 INQUIRELINE$(44)=CHR$(56)  : PILLAR(44)=44 : REM --->8
1580 INQUIRELINE$(45)=CHR$(57)  : PILLAR(45)=45 : REM --->9
1590 INQUIRELINE$(46)="10"      : PILLAR(46)=46 : REM --->10-TEN
1600 INQUIRELINE$(47)=CHR$(250) : PILLAR(47)=48 : REM --->·
1610 INQUIRELINE$(48)="LETTER"  : PILLAR(48)=49 : REM --->LETTER
1620 INQUIRELINE$(49)=CHR$(250) : PILLAR(49)=55 : REM --->·
1630 INQUIRELINE$(50)="NUMBER"  : PILLAR(50)=56 : REM --->NUMBER
1640 INQUIRELINE$(51)=CHR$(250) : PILLAR(51)=62 : REM --->·
1650 INQUIRELINE$(52)="SONG"    : PILLAR(52)=63 : REM --->SONG
1660 INQUIRELINE$(53)=CHR$(250) : PILLAR(53)=67 : REM --->·
1670 INQUIRELINE$(54)="SCH"     : PILLAR(54)=68 : REM --->SCH HOUSE
1680 INQUIRELINE$(55)=CHR$(250) : PILLAR(55)=71 : REM --->·
1690 INQUIRELINE$(56)="DRAW"     : PILLAR(56)=72 : REM --->DRAW
1700 INQUIRELINE$(57)=CHR$(250) : PILLAR(57)=76 : REM --->·
1710 INQUIRELINE$(58)="BYE"     : PILLAR(58)=77 : REM --->END
1720 REM ******* prints input line  on line 25  ********
1730 LOOP=1
1740 COLOR S,P : LOCATE 25,1 : PRINT "                                                                               ";
1750 FOR I=1 TO 58
1760 LOCATE 25,PILLAR(I) :COLOR S,P : PRINT INQUIRELINE$(I);
1770 NEXT I
1780 LOCATE ,,1
1790 REM ************************************************
1800 REM ****  input area    ****************************
1810 REM ************************************************
1820 SPOT=1 : X=7  :Y=0 :RAWUSER2$=""
1830 LOCATE 25,PILLAR(SPOT)
1840 NUUSER$=INPUT$(1)
1850 REM ************************************************
1860 IF NUUSER$=CHR$(13)  THEN GOSUB 2320 :REM ***---> CARRIAGE RETURN
1870 IF NUUSER$=" "       THEN GOSUB 2230 :REM ***---> SPACE BAR
1880 IF NUUSER$=CHR$(8)   THEN GOSUB 2140 :REM ***---> BACK SPACE
1890 IF NUUSER$=CHR$(9)  THEN GOTO  1830  :REM ***---> TAB
1900 IF NUUSER$=CHR$(27) THEN GOTO 1830  :REM ***--->  ESCAPE
1910 IF NUUSER$=CHR$(28) THEN GOSUB 2230 :REM ***--->  cursor right
1920 IF NUUSER$=CHR$(29) THEN GOSUB 2140 :REM ***--->  cursor left
1930 IF SPOT>9 OR SPOT=9 THEN LOCATE ,,0 : LOCATE 25,PILLAR(SPOT):COLOR T,U:PRINT INQUIRELINE$(SPOT);: GOTO 1840 :REM BACK TO USER INPUT *****
1940 FOR A=48 TO 57
1950  IF NUUSER$=CHR$(A) THEN GOTO 2050 :REM looking for the numbers ****
1960 NEXT A
1970 FOR A=65 TO 90
1980  IF NUUSER$=CHR$(A) THEN GOTO 2050 :'looking for the capital letters **
1990 NEXT A
2000 FOR A=97 TO 122
2010  IF NUUSER$=CHR$(A) THEN GOTO 2050 :'looking for the lowercase letters *
2020 NEXT A
2030 GOTO 1830
2040 REM ************************************************
2050 REM **** UPDATE SPOT COUNTER  AND PRINT MANUAL KEYBOARD INPUT (STRING$)
2060 REM ************************************************
2070 LOCATE 25,PILLAR(SPOT):COLOR X,Y :PRINT NUUSER$;
2080 SPOT=SPOT+1 :RAWUSER2$=RAWUSER2$+NUUSER$
2090 IF SPOT>9 OR SPOT=9 THEN LOCATE ,,0:LOCATE 25,PILLAR(SPOT):COLOR T,U:PRINT INQUIRELINE$(SPOT);: GOTO 1840 :REM BACK TO USER INPUT *****
2100 GOTO 1830
2110 REM ************************************************
2120 END
2130 REM ************************************************
2140 REM ****  ROUTINE TO MOVE THE INPUT LINE'S CURSOR TO THE LEFT
2150 REM ************************************************
2160 SPOT=SPOT-1 :IF SPOT=0 THEN SPOT=58  : GOTO 2190
2170 IF SPOT<9 THEN LOCATE ,,1  : LOCATE 25,PILLAR(SPOT) :COLOR S,P:PRINT INQUIRELINE$(SPOT);:  LOCATE 25,PILLAR(SPOT+1):COLOR S,P:PRINT INQUIRELINE$(SPOT+1); : GOTO 1830
2180 LOCATE 25,PILLAR(SPOT+1):COLOR S,P:PRINT INQUIRELINE$(SPOT+1);
2190 LOCATE 25,PILLAR(SPOT):COLOR T,U:PRINT INQUIRELINE$(SPOT);
2200 RETURN
2210 END
2220 REM ************************************************
2230 REM ****  ROUTINE TO MOVE THE INPUT LINE'S CURSOR TO THE RIGHT
2240 REM ************************************************
2250 IF SPOT<8 THEN SPOT=9 :LOCATE 25,PILLAR(SPOT) :COLOR T,U:PRINT INQUIRELINE$(SPOT);:COLOR S,P:RETURN
2260 SPOT=SPOT+1 :IF SPOT>58 THEN SPOT=1 : LOCATE 25,PILLAR(58):COLOR S,P:PRINT INQUIRELINE$(58);
2270 IF SPOT=1 THEN LOCATE ,,1 :GOTO 1830
2280 LOCATE 25,PILLAR(SPOT-1):COLOR S,P:PRINT INQUIRELINE$(SPOT-1);
2290 LOCATE 25,PILLAR(SPOT):COLOR T,U:PRINT INQUIRELINE$(SPOT);
2300 RETURN
2310 END
2320 REM ************************************************
2330 REM ***** Evaluate user input  *********************
2340 REM ************************************************
2350 LOCATE ,,0  : X=16: Y=7
2360 IF SPOT<9 THEN SWAP USER$,RAWUSER2$ : GOTO 2380
2370 USER$=INQUIRELINE$(SPOT)
2380 COLOR S,P :CLS :LOCATE 25,34  :PRINT "OK HERE I GO";
2390 FLAG=0
2400 IF USER$="A" OR USER$="a" THEN GOSUB 10750 :  GOSUB  2890
2410 IF USER$="B" OR USER$="b" THEN GOSUB 10750 :  GOSUB  3060
2420 IF USER$="C" OR USER$="c" THEN GOSUB 10750 :  GOSUB  3230
2430 IF USER$="D" OR USER$="d" THEN GOSUB 10750 :  GOSUB  3360
2440 IF USER$="E" OR USER$="e" THEN GOSUB 10750 :  GOSUB  3510
2450 IF USER$="F" OR USER$="f" THEN GOSUB 10750 :  GOSUB  3660
2460 IF USER$="G" OR USER$="g" THEN GOSUB 10750 :  GOSUB  3790
2470 IF USER$="H" OR USER$="h" THEN GOSUB 10750 :  GOSUB  3960
2480 IF USER$="I" OR USER$="i" THEN GOSUB 10750 :  GOSUB  4070
2490 IF USER$="J" OR USER$="j" THEN GOSUB 10750 :  GOSUB  4180
2500 IF USER$="K" OR USER$="k" THEN GOSUB 10750 :  GOSUB  4330
2510 IF USER$="L" OR USER$="l" THEN GOSUB 10750 :  GOSUB  4470
2520 IF USER$="M" OR USER$="m" THEN GOSUB 10750 :  GOSUB  4560
2530 IF USER$="N" OR USER$="n" THEN GOSUB 10750 :  GOSUB  4690
2540 IF USER$="O" OR USER$="o" THEN GOSUB 10750 :  GOSUB  4800
2550 IF USER$="P" OR USER$="p" THEN GOSUB 10750 :  GOSUB  4930
2560 IF USER$="Q" OR USER$="q" THEN GOSUB 10750 :  GOSUB  5060
2570 IF USER$="R" OR USER$="r" THEN GOSUB 10750 :  GOSUB  5210
2580 IF USER$="S" OR USER$="s" THEN GOSUB 10750 :  GOSUB  5360
2590 IF USER$="T" OR USER$="t" THEN GOSUB 10750 :  GOSUB  5510
2600 IF USER$="U" OR USER$="u" THEN GOSUB 10750 :  GOSUB  5600
2610 IF USER$="V" OR USER$="v" THEN GOSUB 10750 :  GOSUB  5710
2620 IF USER$="W" OR USER$="w" THEN GOSUB 10750 :  GOSUB  5800
2630 IF USER$="X" OR USER$="x" THEN GOSUB 10750 :  GOSUB  5930
2640 IF USER$="Y" OR USER$="y" THEN GOSUB 10750 :  GOSUB  6020
2650 IF USER$="Z" OR USER$="z" THEN GOSUB 10750 :  GOSUB  6130
2660 IF USER$="0" THEN GOSUB 10750 :  GOSUB  6240
2670 IF USER$="1" THEN GOSUB 10750 :  GOSUB 6400
2680 IF USER$="2" THEN GOSUB 10750 :  GOSUB  6500
2690 IF USER$="3" THEN GOSUB 10750 :  GOSUB  6620
2700 IF USER$="4" THEN GOSUB 10750 :  GOSUB  6770
2710 IF USER$="5" THEN GOSUB 10750 :  GOSUB  6880
2720 IF USER$="6" THEN GOSUB 10750 :  GOSUB  7030
2730 IF USER$="7" THEN GOSUB 10750 :  GOSUB  7190
2740 IF USER$="8" THEN GOSUB 10750 :  GOSUB  7280
2750 IF USER$="9" THEN GOSUB 10750 :  GOSUB  7470
2760 IF USER$="10" THEN GOSUB 10750 :  GOSUB  7620
2770 IF USER$="letter" OR USER$="LETTER" THEN GOSUB 10750 :  GOSUB  9050
2780 IF USER$="NUMBER" OR USER$="number" THEN GOSUB 10750 :  GOSUB  9410
2790 IF USER$="sch" OR USER$="SCH" THEN GOTO  220
2800 IF USER$="song" OR USER$="SONG" THEN GOSUB  9930
2810 IF USER$=CHR$(250) THEN GOSUB  9930
2820 IF USER$="DRAW" OR USER$="draw" THEN GOSUB 11070
2830 IF USER$="BYE" OR USER$="bye" THEN CLS:LOCATE 12,35:PRINT "BYE  BYE";:SYSTEM
2840 REM *****************************************************
2850 IF FLAG=0 THEN GOSUB 9930
2860 GOTO 1090
2870 REM *****************************************************
2880 REM *************************************************
2890 REM ****** SUBROUTINES TO MAKE -  " A "   ****************
2900 REM *****************************************************
2910   GOSUB 9850 : ABC$="A"
2920  START=4 : HALT=13 : COUNTER=1
2930  COLOR X,Y:LOCATE 3,21 :PRINT ABC$ : GOSUB 7730
2940  START=13 : HALT=22 : COUNTER=1
2950  GOSUB 7810
2960  START=22 : HALT=38 : COUNTER=1
2970  LOCATE 3,21 :PRINT ABC$ : GOSUB 8060  :LOCATE 3,39 :PRINT ABC$
2980  START=4 : HALT=13 : COUNTER=1
2990  LOCATE 3,39 :PRINT ABC$ : GOSUB 7890
3000  START=13 : HALT=22 : COUNTER=1
3010  GOSUB 7970
3020  START=20 : HALT=40 : COUNTER=1
3030  GOSUB 8140
3040  FLAG=1:COLOR V,M : RETURN
3050 REM *****************************************************
3060 REM ****** SUBROUTINES TO MAKE -  " B "   ****************
3070 REM *****************************************************
3080   GOSUB 9850 :ABC$="B"
3090  START=2 : HALT=22 : COUNTER=1
3100  GOSUB 8880
3110  START=24 : HALT=38 : COUNTER=1
3120  GOSUB 8060  :LOCATE 3,39 :PRINT ABC$
3130  START=4 : HALT=10 : COUNTER=1
3140  LOCATE 3,39 :PRINT ABC$ : GOSUB 7890  :LOCATE 11,39 :PRINT ABC$
3150  START=25 : HALT=38 : COUNTER=1
3160  GOSUB 8140  :LOCATE 13,39 :PRINT ABC$
3170  START=14 : HALT=20 : COUNTER=1
3180  GOSUB 7970  :LOCATE 21,39 :PRINT ABC$
3190  START=24 : HALT=38 : COUNTER=1
3200  GOSUB 8220
3210  FLAG=1:COLOR V,M:RETURN
3220 REM *****************************************************
3230 REM ****** SUBROUTINES TO MAKE -  " C "   ****************
3240 REM *****************************************************
3250   GOSUB 9850 :ABC$="C"
3260  START=38 : HALT=22 : COUNTER=-1 : COLOR X,Y
3270  LOCATE 3,39 :PRINT ABC$ : GOSUB 8060  :LOCATE 3,21 :PRINT ABC$
3280  START=4 : HALT=13 : COUNTER=1
3290  GOSUB 7730
3300  START=13 : HALT=20 : COUNTER=1
3310  GOSUB 7810
3320  START=22 : HALT=38 : COUNTER=1
3330  LOCATE 21,21 :PRINT ABC$ : GOSUB 8220  :LOCATE 21,39 :PRINT ABC$
3340  FLAG=1:COLOR V,M:RETURN
3350 REM *****************************************************
3360 REM ****** SUBROUTINES TO MAKE -  " D "   ****************
3370 REM *****************************************************
3380   GOSUB 9850 :ABC$="D"
3390  START=2 : HALT=22 : COUNTER=1
3400  GOSUB 8880
3410  START=23 : HALT=38 : COUNTER=1
3420  GOSUB 8060  :LOCATE 3,39 :PRINT ABC$
3430  START=4 : HALT=13 : COUNTER=1
3440  GOSUB 7890
3450  START=13 : HALT=20 : COUNTER=1
3460  GOSUB 7970  : LOCATE 21,39 :PRINT ABC$
3470  START=38 : HALT=23 : COUNTER=-1
3480  GOSUB 8220
3490  FLAG=1:COLOR V,M:RETURN
3500 REM *****************************************************
3510 REM ****** SUBROUTINES TO MAKE -  " E "   ****************
3520 REM *****************************************************
3530   GOSUB 9850 :ABC$="E"
3540  START=2 : HALT=12 : COUNTER=1
3550  GOSUB 7730
3560  START=12 : HALT=22 : COUNTER=1
3570  GOSUB 7810
3580  START=20 : HALT=40 : COUNTER=1
3590  GOSUB 8060
3600  START=20 : HALT=39 : COUNTER=1
3610  GOSUB 8140
3620  START=20 : HALT=40 : COUNTER=1
3630  GOSUB 8220
3640  FLAG=1:COLOR V,M:RETURN
3650 REM *****************************************************
3660 REM ****** SUBROUTINES TO MAKE -  " F "   ****************
3670 REM *****************************************************
3680   GOSUB 9850 :ABC$="F"
3690  START=2 : HALT=13 : COUNTER=1
3700  GOSUB 7730
3710  START=13 : HALT=22 : COUNTER=1
3720  GOSUB 7810
3730  START=20 : HALT=40 : COUNTER=1
3740  GOSUB 8060
3750  START=20 : HALT=39 : COUNTER=1
3760  GOSUB 8140
3770  FLAG=1:COLOR V,M:RETURN
3780 REM *****************************************************
3790 REM ****** SUBROUTINES TO MAKE -  " G "   ****************
3800 REM *****************************************************
3810   GOSUB 9850 :ABC$="G"
3820  START=38 : HALT=22 : COUNTER=-1  :COLOR X,Y
3830  LOCATE 3,39 :PRINT ABC$ : GOSUB 8060 :LOCATE 3,21 :PRINT ABC$
3840  START=4 : HALT=13 : COUNTER=1
3850  GOSUB 7730
3860  START=13 : HALT=20 : COUNTER=1
3870  GOSUB 7810 :LOCATE 21,21 :PRINT ABC$
3880  START=22 : HALT=38 : COUNTER=1
3890  GOSUB 8220 :LOCATE 21,39 :PRINT ABC$
3900  START=20 : HALT=12 : COUNTER=-1
3910  GOSUB 7970 :LOCATE 12,39 :PRINT ABC$
3920  LOCATE 12,38 :PRINT ABC$
3930  LOCATE 12,37 :PRINT ABC$
3940  FLAG=1:COLOR V,M:RETURN
3950 REM *****************************************************
3960 REM ****** SUBROUTINES TO MAKE -  " H "   ****************
3970 REM *****************************************************
3980   GOSUB 9850 :ABC$="H"
3990  START=2 : HALT=22 : COUNTER=1
4000  GOSUB 7730
4010  START=2 : HALT=22 : COUNTER=1
4020  GOSUB 7890
4030  START=20 : HALT=40 : COUNTER=1
4040  GOSUB 8140
4050  FLAG=1:COLOR V,M:RETURN
4060 REM *****************************************************
4070 REM ****** SUBROUTINES TO MAKE -  " I "   ****************
4080 REM *****************************************************
4090   GOSUB 9850 :ABC$="I"
4100  START=2 : HALT=22 : COUNTER=1
4110  GOSUB 8800
4120  START=21 : HALT=39 : COUNTER=1
4130  GOSUB 8060
4140  START=21 : HALT=39 : COUNTER=1
4150  GOSUB 8220
4160  FLAG=1:COLOR V,M:RETURN
4170 REM *****************************************************
4180 REM ****** SUBROUTINES TO MAKE -  " J "   ****************
4190 REM *****************************************************
4200   GOSUB 9850 :ABC$="J"
4210  START=13 : HALT=20 : COUNTER=1
4220  GOSUB 7810
4230  START=22 : HALT=38 : COUNTER=1
4240  LOCATE 21,21 :PRINT ABC$ : GOSUB 8220 :LOCATE 21,39 :PRINT ABC$
4250  START=20 : HALT=2 : COUNTER=-1
4260  GOSUB 7970 :LOCATE 21,39 :PRINT ABC$
4270  LOCATE 2,38 :PRINT ABC$
4280  LOCATE 2,39 :PRINT ABC$
4290  LOCATE 2,41 :PRINT ABC$
4300  LOCATE 2,42 :PRINT ABC$
4310  FLAG=1:COLOR V,M:RETURN
4320 REM *****************************************************
4330 REM ****** SUBROUTINES TO MAKE -  " K "   ****************
4340 REM *****************************************************
4350   GOSUB 9850 :ABC$="K"
4360  START=2 : HALT=22 : COUNTER=1
4370  GOSUB 8880
4380  LOCATE 15,28 :PRINT ABC$
4390  LOCATE 14,28 :PRINT ABC$
4400  LOCATE 13,29 :PRINT ABC$
4410  START=12 : HALT=2 : COUNTER=-1
4420  GOSUB 8480
4430  START=12 : HALT=22 : COUNTER=1
4440  GOSUB 8570
4450  FLAG=1:COLOR V,M:RETURN
4460 REM *****************************************************
4470 REM ****** SUBROUTINES TO MAKE -  " L "   ****************
4480 REM *****************************************************
4490   GOSUB 9850 :ABC$="L"
4500  START=2 : HALT=22 : COUNTER=1
4510  GOSUB 7730
4520  START=20 : HALT=42 : COUNTER=1
4530  GOSUB 8220
4540  FLAG=1:COLOR V,M:RETURN
4550 REM *****************************************************
4560 REM ****** SUBROUTINES TO MAKE -  " M "   ****************
4570 REM *****************************************************
4580   GOSUB 9850 :ABC$="M"
4590  START=2 : HALT=22 : COUNTER=1
4600  GOSUB 7730
4610  START=2 : HALT=12 : COUNTER=1
4620  GOSUB 8300
4630  START=12 : HALT=2 : COUNTER=-1
4640  GOSUB 8480
4650  START=2 : HALT=22 : COUNTER=1
4660  GOSUB 7890
4670  FLAG=1:COLOR V,M:RETURN
4680 REM *****************************************************
4690 REM ****** SUBROUTINES TO MAKE -  " N "   ****************
4700 REM *****************************************************
4710   GOSUB 9850 :ABC$="N"
4720  START=2 : HALT=22 : COUNTER=1
4730  GOSUB 7730
4740  START=2 : HALT=22 : COUNTER=1
4750  GOSUB 8300
4760  START=2 : HALT=22 : COUNTER=1
4770  GOSUB 7890
4780  FLAG=1:COLOR V,M:RETURN
4790 REM *****************************************************
4800 REM ****** SUBROUTINES TO MAKE -  " O "   ****************
4810 REM *****************************************************
4820   GOSUB 9850 :ABC$="O"
4830  START=22 : HALT=38 : COUNTER=1
4840  GOSUB 8060 :LOCATE 3,39 :PRINT ABC$
4850  START=4 : HALT=20 : COUNTER=1
4860  LOCATE 3,39 :PRINT ABC$ : GOSUB 7970 :LOCATE 21,39 :PRINT ABC$
4870  START=38 : HALT=22 : COUNTER=-1
4880  LOCATE 21,39 :PRINT ABC$ : GOSUB 8220 :LOCATE 21,21 :PRINT ABC$
4890  START=20 : HALT=4 : COUNTER=-1 :COLOR X,Y
4900  LOCATE 21,21 :PRINT ABC$ : GOSUB 7730 :LOCATE 3,21 :PRINT ABC$
4910  FLAG=1:COLOR V,M:RETURN
4920 REM *****************************************************
4930 REM ****** SUBROUTINES TO MAKE -  " P "   ****************
4940 REM *****************************************************
4950   GOSUB 9850 :ABC$="P"
4960  START=2 : HALT=22 : COUNTER=1
4970  GOSUB 7730
4980  START=20 : HALT=38 : COUNTER=1
4990  GOSUB 8060 :LOCATE 3,39 :PRINT ABC$
5000  START=4 : HALT=10 : COUNTER=1
5010  GOSUB 7890 : LOCATE 11,39 :PRINT ABC$
5020  START=38 : HALT=20 : COUNTER=-1
5030  GOSUB 8140
5040  FLAG=1:COLOR V,M:RETURN
5050 REM *****************************************************
5060 REM ****** SUBROUTINES TO MAKE -  " Q  "   ****************
5070 REM *****************************************************
5080   GOSUB 9850 :ABC$="Q"
5090  START=22 : HALT=38 : COUNTER=1
5100  GOSUB 8060 :LOCATE 3,39 :PRINT ABC$
5110  START=4 : HALT=20 : COUNTER=1
5120  LOCATE 3,39 :PRINT ABC$ : GOSUB 7970 :LOCATE 21,39 :PRINT ABC$
5130  START=38 : HALT=22 : COUNTER=-1
5140  LOCATE 21,39 :PRINT ABC$ : GOSUB 8220 :LOCATE 21,21 :PRINT ABC$
5150  START=20 : HALT=4 : COUNTER=-1 :COLOR X,Y
5160  LOCATE 21,21 :PRINT ABC$ : GOSUB 7730 :LOCATE 3,21 :PRINT ABC$
5170  START=12 : HALT=22 : COUNTER=1
5180  GOSUB 8570 :LOCATE 23,41 :PRINT ABC$
5190  FLAG=1:COLOR V,M:RETURN
5200 REM *****************************************************
5210 REM ****** SUBROUTINES TO MAKE -  " R "   ****************
5220 REM *****************************************************
5230   GOSUB 9850 :ABC$="R"
5240  START=2 : HALT=22 : COUNTER=1
5250  GOSUB 7730
5260  START=20 : HALT=38 : COUNTER=1
5270  GOSUB 8060 :LOCATE 3,39 : PRINT ABC$
5280  START=4 : HALT=10 : COUNTER=1
5290  GOSUB 7890 :LOCATE 11,39 : PRINT ABC$
5300  START=38 : HALT=20 : COUNTER=-1
5310  GOSUB 8140
5320  START=12 : HALT=22 : COUNTER=1
5330  GOSUB 8570
5340  FLAG=1:COLOR V,M:RETURN
5350 REM *****************************************************
5360 REM ****** SUBROUTINES TO MAKE -  " S "   ****************
5370 REM *****************************************************
5380   GOSUB 9850 :ABC$="S"
5390  START=38 : HALT=22 : COUNTER=-1 :COLOR X,Y
5400  LOCATE 3,39 :PRINT ABC$ : GOSUB 8060 :LOCATE 3,21 :PRINT ABC$
5410  START=4 : HALT=10 : COUNTER=1
5420  GOSUB 7730 :LOCATE 11,21 :PRINT ABC$
5430  START=22 : HALT=38 : COUNTER=1
5440  GOSUB 8140 :LOCATE 13,39 :PRINT ABC$
5450  START=14 : HALT=20 : COUNTER=1
5460  GOSUB 7970 :LOCATE 21,39 :PRINT ABC$
5470  START=38 : HALT=22 : COUNTER=-1
5480  GOSUB 8220 :LOCATE 21,21 :PRINT ABC$
5490  FLAG=1:COLOR V,M:RETURN
5500 REM *****************************************************
5510 REM ****** SUBROUTINES TO MAKE -  " T "   ****************
5520 REM *****************************************************
5530   GOSUB 9850 :ABC$="T"
5540  START=2 : HALT=22 : COUNTER=1
5550  GOSUB 8800
5560  START=20 : HALT=40 : COUNTER=1
5570  GOSUB 8060
5580  FLAG=1:COLOR V,M:RETURN
5590 REM *****************************************************
5600 REM ****** SUBROUTINES TO MAKE -  " U "   ****************
5610 REM *****************************************************
5620   GOSUB 9850 :ABC$="U"
5630  START=2 : HALT=20 : COUNTER=1
5640  GOSUB 7730
5650  START=22 : HALT=38 : COUNTER=1
5660  LOCATE 21,21 :PRINT ABC$ : GOSUB 8220 :LOCATE 21,39 :PRINT ABC$
5670  START=20 : HALT=2 : COUNTER=-1
5680  GOSUB 7890
5690  FLAG=1:COLOR V,M:RETURN
5700 REM *****************************************************
5710 REM ****** SUBROUTINES TO MAKE -  " V "   ****************
5720 REM *****************************************************
5730   GOSUB 9850 :ABC$="V"
5740  START=2 : HALT=22 : COUNTER=1
5750  GOSUB 8570
5760  START=22 : HALT=2 : COUNTER=-1
5770  GOSUB 8480
5780  FLAG=1:COLOR V,M:RETURN
5790 REM *****************************************************
5800 REM ****** SUBROUTINES TO MAKE -  " W "   ****************
5810 REM *****************************************************
5820   GOSUB 9850 :ABC$="W"
5830  START=2 : HALT=22 : COUNTER=1
5840  GOSUB 7730
5850  START=22 : HALT=12 : COUNTER=-1
5860  GOSUB 8670
5870  START=12 : HALT=22 : COUNTER=1
5880  GOSUB 8570
5890  START=22 : HALT=2 : COUNTER=-1
5900  GOSUB 7890
5910  FLAG=1:COLOR V,M:RETURN
5920 REM *****************************************************
5930 REM ****** SUBROUTINES TO MAKE -  " X "   ****************
5940 REM *****************************************************
5950   GOSUB 9850 :ABC$="X"
5960  START=2 : HALT=22 : COUNTER=1
5970  GOSUB 8300
5980  START=2 : HALT=22 : COUNTER=1
5990  GOSUB 8670
6000  FLAG=1:COLOR V,M:RETURN
6010 REM *****************************************************
6020 REM ****** SUBROUTINES TO MAKE -  " Y "   ****************
6030 REM *****************************************************
6040   GOSUB 9850 :ABC$="Y"
6050  START=2 : HALT=12 : COUNTER=1
6060  GOSUB 8300
6070  START=2 : HALT=12 : COUNTER=1
6080  GOSUB 8670
6090  START=12 : HALT=22 : COUNTER=1
6100  GOSUB 8980
6110  FLAG=1:COLOR V,M:RETURN
6120 REM *****************************************************
6130 REM ****** SUBROUTINES TO MAKE -  " Z "   ****************
6140 REM *****************************************************
6150   GOSUB 9850 :ABC$="Z"
6160  START=22 : HALT=40 : COUNTER=1 : COLOR X,Y
6170  GOSUB 8060
6180  START=2 : HALT=22 : COUNTER=1
6190  GOSUB 8670
6200  START=21 : HALT=38 : COUNTER=1
6210  GOSUB 8220
6220  FLAG=1:COLOR V,M:RETURN
6230 REM *****************************************************
6240 REM ****** SUBROUTINES TO MAKE -  " 0 "   ****************
6250 REM *****************************************************
6260   GOSUB 9850
6270   ABC$="0"
6280  START=22 : HALT=38 : COUNTER=1
6290  GOSUB 8060 :LOCATE 3,39 :PRINT ABC$
6300  START=4 : HALT=20 : COUNTER=1
6310  LOCATE 3,39 :PRINT ABC$ : GOSUB 7970 :LOCATE 21,39 :PRINT ABC$
6320  START=38 : HALT=22 : COUNTER=-1
6330  LOCATE 21,39 :PRINT ABC$ : GOSUB 8220 :LOCATE 21,21 :PRINT ABC$
6340  START=20 : HALT=4 : COUNTER=-1 :COLOR X,Y
6350  LOCATE 21,21 :PRINT ABC$ : GOSUB 7730 :LOCATE 3,21 :PRINT ABC$
6360  START=3 : HALT=21 : COUNTER=1
6370  GOSUB 8670
6380  FLAG=1:COLOR V,M:RETURN
6390 REM *****************************************************
6400 REM ****** SUBROUTINES TO MAKE -  " 1 "   ****************
6410 REM *****************************************************
6420   GOSUB 9850 :ABC$="1"
6430  START=2 : HALT=22 : COUNTER=1 :COLOR X,Y
6440  LOCATE 5,27:PRINT ABC$:LOCATE 4,28:PRINT ABC$: LOCATE 3,29:PRINT ABC$
6450  GOSUB 8800
6460  START=25 : HALT=35 : COUNTER=1
6470  GOSUB 8220
6480  FLAG=1:COLOR V,M:RETURN
6490 REM *****************************************************
6500 REM ****** SUBROUTINES TO MAKE -  " 2 "   ****************
6510 REM *****************************************************
6520   GOSUB 9850 :ABC$="2"
6530  START=22 : HALT=37 : COUNTER=1 :COLOR X,Y
6540  LOCATE 3,21 :PRINT ABC$ : GOSUB 8060 :LOCATE 3,38:PRINT ABC$
6550  LOCATE 4,39:PRINT ABC$
6560  START=5 : HALT=20 : COUNTER=1
6570  GOSUB 8670 :LOCATE 21,23 :PRINT ABC$
6580  START=22 : HALT=40 : COUNTER=1
6590  GOSUB 8220
6600  FLAG=1:COLOR V,M:RETURN
6610 REM *****************************************************
6620 REM ****** SUBROUTINES TO MAKE -  " 3 "   ****************
6630 REM *****************************************************
6640   GOSUB 9850 :ABC$="3" :COLOR  X,Y
6650  START=22 : HALT=38 : COUNTER=1
6660  LOCATE 3,21 :PRINT ABC$ : GOSUB 8060 :LOCATE 3,39 :PRINT ABC$
6670  START=4 : HALT=10 : COUNTER=1
6680  GOSUB 7890 :LOCATE 11,39 :PRINT ABC$
6690  START=38 : HALT=22 : COUNTER=-1
6700  GOSUB 8140
6710  START=14 : HALT=20 : COUNTER=1
6720  LOCATE 13,39 :PRINT ABC$ : GOSUB 7970 :LOCATE 21,39 :PRINT ABC$
6730  START=38 : HALT=22 : COUNTER=-1
6740  GOSUB 8220 :LOCATE 21,21 :PRINT ABC$
6750  FLAG=1:COLOR V,M:RETURN
6760 REM *****************************************************
6770 REM ****** SUBROUTINES TO MAKE -  " 4 "   ****************
6780 REM *****************************************************
6790   GOSUB 9850 :ABC$="4"
6800  START=2 : HALT=22 : COUNTER=1
6810  GOSUB 8800
6820  START=2 : HALT=12 : COUNTER=1
6830  GOSUB 7730
6840  START=20 : HALT=40 : COUNTER=1
6850  GOSUB 8140
6860  FLAG=1:COLOR V,M:RETURN
6870 REM *****************************************************
6880 REM ****** SUBROUTINES TO MAKE -  " 5 "   ****************
6890 REM *****************************************************
6900   GOSUB 9850 :ABC$="5"
6910  START=40 : HALT=20 : COUNTER=-1
6920  GOSUB 8060
6930  START=2 : HALT=12 : COUNTER=1
6940  GOSUB 7730
6950  START=20 : HALT=38 : COUNTER=1
6960  GOSUB 8140 :LOCATE 13,39 :PRINT ABC$
6970  START=14 : HALT=20 : COUNTER=1
6980  GOSUB 7970 :LOCATE 21,39 :PRINT ABC$
6990  START=38 : HALT=20 : COUNTER=-1
7000  GOSUB 8220
7010  FLAG=1:COLOR V,M:RETURN
7020 REM *****************************************************
7030 REM ****** SUBROUTINES TO MAKE -  " 6 "   ****************
7040 REM *****************************************************
7050   GOSUB 9850 :ABC$="6"
7060  START=2 : HALT=12 : COUNTER=1
7070  GOSUB 8390
7080  START=13 : HALT=20 : COUNTER=1
7090  GOSUB 7810 :LOCATE 21,21 :PRINT ABC$
7100  START=22 : HALT=38 : COUNTER=1
7110  GOSUB 8220 : LOCATE 21,39 :PRINT ABC$
7120  START=20 : HALT=14 : COUNTER=-1
7130  GOSUB 7970 :LOCATE 13,39 :PRINT ABC$
7140  START=38 : HALT=22 : COUNTER=-1
7150  GOSUB 8140
7160  LOCATE 13,21 :PRINT  ABC$ : GOSUB 8140
7170  FLAG=1:COLOR V,M:RETURN
7180 REM *****************************************************
7190 REM ****** SUBROUTINES TO MAKE -  " 7 "   ****************
7200 REM *****************************************************
7210   GOSUB 9850 :ABC$="7"
7220  START=20 : HALT=39 : COUNTER=1
7230  GOSUB 8060
7240  START=2 : HALT=22 : COUNTER=1
7250  GOSUB 8390
7260  FLAG=1:COLOR V,M:RETURN
7270 REM *****************************************************
7280 REM ****** SUBROUTINES TO MAKE -  " 8 "   ****************
7290 REM *****************************************************
7300   GOSUB 9850 :ABC$="8"
7310  START=4 : HALT=10 : COUNTER=1 : COLOR  X,Y
7320  LOCATE 3,21 :PRINT ABC$ : GOSUB 7730 :LOCATE 11,21 :PRINT ABC$
7330  START=22 : HALT=38 : COUNTER=1
7340  GOSUB 8140 :LOCATE 13,39 :PRINT ABC$
7350  START=14 : HALT=20 : COUNTER=1
7360  LOCATE 13,39 : PRINT ABC$ :GOSUB 7970 :LOCATE 21,39 :PRINT ABC$
7370  START=38 : HALT=22 : COUNTER=-1
7380  GOSUB 8220 : LOCATE 21,21 :PRINT ABC$
7390  START=20 : HALT=14 : COUNTER=-1
7400  GOSUB 7810 :LOCATE 13,21 :PRINT ABC$
7410  START=10 : HALT=4 : COUNTER=-1
7420  LOCATE 11,39 :PRINT ABC$ : GOSUB 7890 :LOCATE 3,39 :PRINT ABC$
7430  START=38 : HALT=22 : COUNTER=-1
7440  GOSUB 8060 : LOCATE 3,21 :PRINT ABC$
7450  FLAG=1:COLOR V,M:RETURN
7460 REM *****************************************************
7470 REM ****** SUBROUTINES TO MAKE -  " 9 "   ****************
7480 REM *****************************************************
7490   GOSUB 9850 :ABC$="9"
7500  START=40 : HALT=22 : COUNTER=-1
7510  GOSUB 8060 :LOCATE 3,21 :PRINT ABC$
7520  START=4 : HALT=10 : COUNTER=1
7530  GOSUB 7730 :LOCATE 11,21 :PRINT ABC$
7540  START=22 : HALT=38 : COUNTER=1
7550  GOSUB 8140 :LOCATE 11,39 :PRINT ABC$
7560  START=10 : HALT=4 : COUNTER=-1
7570  GOSUB 7890
7580  START=2 : HALT=22 : COUNTER=1
7590  GOSUB 7970
7600  FLAG=1:COLOR V,M:RETURN
7610 REM *****************************************************
7620 REM ****** SUBROUTINES TO MAKE -  "10 "   ****************
7630 REM *****************************************************
7640   GOSUB 9850 :ABC$="1"
7650  START=2 : HALT=22 : COUNTER=1 : COLOR X,Y
7660  LOCATE 5,7 :PRINT ABC$ :LOCATE 4,8 :PRINT ABC$  : LOCATE 3,9:PRINT ABC$
7670  GOSUB 8880
7680  START=5 : HALT=15 : COUNTER=1
7690  GOSUB 8220
7700  GOSUB 6240
7710  FLAG=1:COLOR V,M:RETURN
7720 END :REM *************************************************
7730 REM **** SUBROUTINE TO GO DOWN ON TOP-LEFT   **********
7740 REM *************************************************
7750 COLUMN=20
7760 FOR ROW=START TO HALT STEP COUNTER
7770 COLOR X,Y :LOCATE ROW,COLUMN:PRINT ABC$
7780 NEXT ROW
7790 RETURN
7800 REM *************************************************
7810 REM **** SUBROUTINE TO GO DOWN ON BOTTOM-LEFT  ********
7820 REM *************************************************
7830 COLUMN=20
7840 FOR ROW=START TO HALT STEP COUNTER
7850 COLOR X,Y :LOCATE ROW,COLUMN:PRINT ABC$
7860 NEXT ROW
7870 RETURN
7880 REM *************************************************
7890 REM **** SUBROUTINE TO GO DOWN ON TOP-RIGHT   *********
7900 REM *************************************************
7910 COLUMN=40
7920 FOR ROW=START TO HALT STEP COUNTER
7930 COLOR X,Y :LOCATE ROW,COLUMN:PRINT ABC$
7940 NEXT ROW
7950 RETURN
7960 REM *************************************************
7970 REM **** SUBROUTINE TO GO DOWN ON BOTTOM-RIGHT ********
7980 REM *************************************************
7990 COLUMN=40
8000 IF ABC$="V" THEN COLUMN=39
8010 FOR ROW=START TO HALT STEP COUNTER
8020 COLOR X,Y :LOCATE ROW,COLUMN:PRINT ABC$
8030 NEXT ROW
8040 RETURN
8050 REM *************************************************
8060 REM **** SUBROUTINE TO GO ACROSS TOP       **********
8070 REM *************************************************
8080 ROW=2
8090 FOR COLUMN=START TO HALT STEP COUNTER
8100 COLOR X,Y :LOCATE ROW,COLUMN:PRINT ABC$
8110 NEXT COLUMN
8120 RETURN
8130 REM *************************************************
8140 REM **** SUBROUTINE TO GO ACROSS MIDDLE      ********
8150 REM *************************************************
8160 ROW=12
8170 FOR COLUMN=START TO HALT STEP COUNTER
8180 COLOR X,Y :LOCATE ROW,COLUMN:PRINT ABC$
8190 NEXT COLUMN
8200 RETURN
8210 REM *************************************************
8220 REM **** SUBROUTINE TO GO ACROSS BOTTOM     *********
8230 REM *************************************************
8240 ROW=22
8250 FOR COLUMN=START TO HALT STEP COUNTER
8260 COLOR X,Y :LOCATE ROW,COLUMN:PRINT ABC$
8270 NEXT COLUMN
8280 RETURN
8290 REM *************************************************
8300 REM **** SUBROUTINE TO GO DIAGONAL TOP TO BOTTOM-TOP*
8310 REM *************************************************
8320 COLUMN=20
8330 FOR ROW=START TO HALT STEP COUNTER
8340 COLOR X,Y :LOCATE ROW,COLUMN:PRINT ABC$;
8350 COLUMN=COLUMN+1
8360 NEXT ROW
8370 RETURN
8380 REM *************************************************
8390 REM **** SUBROUTINE TO GO DIAGONAL TOP TO BOTTOM-TOP*
8400 REM *************************************************
8410 IF ABC$="7" THEN COLUMN=40 ELSE COLUMN=30
8420 FOR ROW=START TO HALT STEP COUNTER
8430 COLOR X,Y :LOCATE ROW,COLUMN:PRINT ABC$;
8440 COLUMN=COLUMN-1
8450 NEXT ROW
8460 RETURN
8470 REM *************************************************
8480 REM **** SUBROUTINE TO GO DIAGONAL BOTTOM TO TOP-TOP*
8490 REM *************************************************
8500 COLUMN=30
8510 FOR ROW=START TO HALT STEP COUNTER
8520 COLOR X,Y :LOCATE ROW,COLUMN:PRINT ABC$;
8530 COLUMN=COLUMN+1
8540 NEXT ROW
8550 RETURN
8560 REM *************************************************
8570 REM **** SUBROUTINE TO GO DIAGONAL TOP TO BOTTOM-BOTTOM**
8580 REM *************************************************
8590 COLUMN=30
8600 IF ABC$="V" THEN COLUMN=10
8610 FOR ROW=START TO HALT STEP COUNTER
8620 COLOR X,Y :LOCATE ROW,COLUMN:PRINT ABC$;
8630 COLUMN=COLUMN+1
8640 NEXT ROW
8650 RETURN
8660 REM *************************************************
8670 REM **** SUBROUTINE TO GO DIAGONAL BOTTOM TO TOP-BOTTOM**
8680 REM *************************************************
8690 COLUMN=20
8700 IF ABC$="X" OR ABC$="Y" OR ABC$="Z" THEN COLUMN=40
8710 IF ABC$="0" OR ABC$="2"  THEN COLUMN=39
8720 FOR ROW=START TO HALT STEP COUNTER
8730 COLOR X,Y :LOCATE ROW,COLUMN:PRINT ABC$;
8740 IF ABC$="X" OR ABC$="Y" OR ABC$="Z" THEN COLUMN=COLUMN-1 :GOTO 8770
8750 IF ABC$="0" OR ABC$="2"  THEN COLUMN=COLUMN-1 :GOTO 8770
8760 COLUMN=COLUMN+1
8770 NEXT ROW
8780 RETURN
8790 REM ************************************************
8800 REM **** SUBROUTINE TO  TOP TO BOTTOM  AT 30     **
8810 REM *************************************************
8820 COLUMN=30
8830 FOR ROW=START TO HALT STEP COUNTER
8840 COLOR X,Y :LOCATE ROW,COLUMN:PRINT ABC$;
8850 NEXT ROW
8860 RETURN
8870 REM *************************************************
8880 REM **** SUBROUTINE TO  TOP TO BOTTOM  AT 25 COL **
8890 REM *************************************************
8900 COLUMN=25
8910 IF ABC$="K" THEN COLUMN=28 : GOTO 8930
8920 IF USER$="10" THEN COLUMN=10 : GOTO 8930
8930 FOR ROW=START TO HALT STEP COUNTER
8940 COLOR X,Y :LOCATE ROW,COLUMN:PRINT ABC$;
8950 NEXT ROW
8960 RETURN
8970 REM ************************************************
8980 REM **** SUBROUTINE TO  VIRT MIDDLE TO BOTTOM  AT 30 **
8990 REM *************************************************
9000 COLUMN=30
9010 FOR ROW=START TO HALT STEP COUNTER
9020 COLOR X,Y :LOCATE ROW,COLUMN:PRINT ABC$;
9030 NEXT ROW
9040 RETURN
9050 REM  *****************************************************
9060 REM  *****************************************************
9070 REM  **** SUBROUTINE TO PRINT ALL OF THE LETTERS     *****
9080 REM  **** AND NUMBERS                                 ****
9090 REM  *****************************************************
9100 REM  *****************************************************
9110  GOSUB  2890:FOR L10=1 TO LOOP:NEXT L10:GOSUB 9580:REM ---> A
9120  GOSUB  3060:FOR L10=1 TO LOOP:NEXT L10:GOSUB 9580:REM ---> B
9130  GOSUB  3230:FOR L10=1 TO LOOP:NEXT L10:GOSUB 9580:REM ---> C
9140  GOSUB  3360:FOR L10=1 TO LOOP:NEXT L10:GOSUB 9580:REM ---> D
9150  GOSUB  3510:FOR L10=1 TO LOOP:NEXT L10:GOSUB 9580:REM ---> E
9160  GOSUB  3660:FOR L10=1 TO LOOP:NEXT L10:GOSUB 9580:REM ---> F
9170  GOSUB  3790:FOR L10=1 TO LOOP:NEXT L10:GOSUB 9580:REM ---> G
9180  GOSUB  3960:FOR L10=1 TO LOOP:NEXT L10:GOSUB 9580:REM ---> H
9190  GOSUB  4070:FOR L10=1 TO LOOP:NEXT L10:GOSUB 9580:REM ---> I
9200  GOSUB  4180:FOR L10=1 TO LOOP:NEXT L10:GOSUB 9580:REM ---> J
9210  GOSUB  4330:FOR L10=1 TO LOOP:NEXT L10:GOSUB 9580:REM ---> K
9220  GOSUB  4470:FOR L10=1 TO LOOP:NEXT L10:GOSUB 9580:REM ---> L
9230  GOSUB  4560:FOR L10=1 TO LOOP:NEXT L10:GOSUB 9580:REM ---> M
9240  GOSUB  4690:FOR L10=1 TO LOOP:NEXT L10:GOSUB 9580:REM ---> N
9250  GOSUB  4800:FOR L10=1 TO LOOP:NEXT L10:GOSUB 9580:REM ---> O
9260  GOSUB  4930:FOR L10=1 TO LOOP:NEXT L10:GOSUB 9580:REM ---> P
9270  GOSUB  5060:FOR L10=1 TO LOOP:NEXT L10:GOSUB 9580:REM ---> Q
9280  GOSUB  5210:FOR L10=1 TO LOOP:NEXT L10:GOSUB 9580:REM ---> R
9290  GOSUB  5360:FOR L10=1 TO LOOP:NEXT L10:GOSUB 9580:REM ---> S
9300  GOSUB  5510:FOR L10=1 TO LOOP:NEXT L10:GOSUB 9580:REM ---> T
9310  GOSUB  5600:FOR L10=1 TO LOOP:NEXT L10:GOSUB 9580:REM ---> U
9320  GOSUB  5710:FOR L10=1 TO LOOP:NEXT L10:GOSUB 9580:REM ---> V
9330  GOSUB  5800:FOR L10=1 TO LOOP:NEXT L10:GOSUB 9580:REM ---> W
9340  GOSUB  5930:FOR L10=1 TO LOOP:NEXT L10:GOSUB 9580:REM ---> X
9350  GOSUB  6020:FOR L10=1 TO LOOP:NEXT L10:GOSUB 9580:REM ---> Y
9360  GOSUB  6130:FOR L10=1 TO LOOP:NEXT L10           :REM ---> Z
9370 GOTO 1090 :REM RETURN TO USER INPUT **************************
9380  REM *************************************************************
9390  REM ************ NUMBERS    *************************************
9400  REM *************************************************************
9410  GOSUB  6240:FOR L10=1 TO LOOP:NEXT L10:GOSUB 9580  :REM --->  0
9420  GOSUB  6400:FOR L10=1 TO LOOP:NEXT L10:GOSUB 9580  :REM --->  1
9430  GOSUB  6500:FOR L10=1 TO LOOP:NEXT L10:GOSUB 9580  :REM --->  2
9440  GOSUB  6620:FOR L10=1 TO LOOP:NEXT L10:GOSUB 9580  :REM --->  3
9450  GOSUB  6770:FOR L10=1 TO LOOP:NEXT L10:GOSUB 9580  :REM --->  4
9460  GOSUB  6880:FOR L10=1 TO LOOP:NEXT L10:GOSUB 9580  :REM --->  5
9470  GOSUB  7030:FOR L10=1 TO LOOP:NEXT L10:GOSUB 9580  :REM --->  6
9480  GOSUB  7190:FOR L10=1 TO LOOP:NEXT L10:GOSUB 9580  :REM --->  7
9490  GOSUB  7280:FOR L10=1 TO LOOP:NEXT L10:GOSUB 9580  :REM --->  8
9500  GOSUB  7470:FOR L10=1 TO LOOP:NEXT L10:GOSUB 9580  :REM --->  9
9510  USER$="10" :GOSUB 7620:FOR L10=1 TO LOOP:NEXT L10  :REM ---> 10
9520 GOTO 1090 :REM RETURN TO USER INPUT *************************
9530 REM  ****************************************************
9540 REM  ****************************************************
9550 REM  ****************************************************
9560 REM  ****************************************************
9570 REM *************************************************
9580 REM **** SUBROUTINE TO  DELETE IMMAGE          **********
9590 REM *************************************************
9600 ROW=2:COLUMN=4 :LOCATE ,,0
9610 COLOR V,M:LOCATE ROW,COLUMN:PRINT "                                                      ";:ROW=ROW+1 : PLAY "O5 D45"
9620 COLOR V,M:LOCATE ROW,COLUMN:PRINT "                                                      ";:ROW=ROW+1 : PLAY "MB O5 C45"
9630 COLOR V,M:LOCATE ROW,COLUMN:PRINT "                                                      ";:ROW=ROW+1 : PLAY "O4 B45"
9640 COLOR V,M:LOCATE ROW,COLUMN:PRINT "                                                      ";:ROW=ROW+1 : PLAY "O4 A45"
9650 COLOR V,M:LOCATE ROW,COLUMN:PRINT "                                                      ";:ROW=ROW+1 : PLAY "O4 G45"
9660 COLOR V,M:LOCATE ROW,COLUMN:PRINT "                                                      ";:ROW=ROW+1 : PLAY "O4 F45"
9670 COLOR V,M:LOCATE ROW,COLUMN:PRINT "                                                      ";:ROW=ROW+1 : PLAY "O4 E45"
9680 COLOR V,M:LOCATE ROW,COLUMN:PRINT "                                                      ";:ROW=ROW+1 : PLAY "O4 D45"
9690 COLOR V,M:LOCATE ROW,COLUMN:PRINT "                                                      ";:ROW=ROW+1 : PLAY "O4 C45"
9700 COLOR V,M:LOCATE ROW,COLUMN:PRINT "                                                      ";:ROW=ROW+1 : PLAY "O3 B45"
9710 COLOR V,M:LOCATE ROW,COLUMN:PRINT "                                                      ";:ROW=ROW+1 : PLAY "O3 A45"
9720 COLOR V,M:LOCATE ROW,COLUMN:PRINT "                                                      ";:ROW=ROW+1 : PLAY "O3 G45"
9730 COLOR V,M:LOCATE ROW,COLUMN:PRINT "                                                      ";:ROW=ROW+1 : PLAY "O3 F45"
9740 COLOR V,M:LOCATE ROW,COLUMN:PRINT "                                                      ";:ROW=ROW+1 : PLAY "O3 E45"
9750 COLOR V,M:LOCATE ROW,COLUMN:PRINT "                                                      ";:ROW=ROW+1 : PLAY "O3 D45"
9760 COLOR V,M:LOCATE ROW,COLUMN:PRINT "                                                      ";:ROW=ROW+1 : PLAY "O3 C45"
9770 COLOR V,M:LOCATE ROW,COLUMN:PRINT "                                                      ";:ROW=ROW+1 : PLAY "O2 B45"
9780 COLOR V,M:LOCATE ROW,COLUMN:PRINT "                                                      ";:ROW=ROW+1 : PLAY "O2 A45"
9790 COLOR V,M:LOCATE ROW,COLUMN:PRINT "                                                      ";:ROW=ROW+1 : PLAY "O2 G45"
9800 COLOR V,M:LOCATE ROW,COLUMN:PRINT "                                                      ";:ROW=ROW+1 : PLAY "O2 F45"
9810 COLOR V,M:LOCATE ROW,COLUMN:PRINT "                                                      ";:ROW=ROW+1 : PLAY "O2 E45"
9820 COLOR V,M:LOCATE ROW,COLUMN:PRINT "                                                      ";:ROW=ROW+1 : PLAY "O2 D45"
9830 RETURN
9840 REM *************************************************
9850 REM ********SUBROUTINE TO PALY MUSIC  *************
9860 REM *************************************************
9870  PLAY "MB"
9880  PLAY "O=P ; C8 D8 E8 F8 G8 A8 B8"
9890 P=P+1:IF P>5 THEN P=0:RETURN
9900 RETURN
9910 REM *************************************************
9920 REM *****************************************************
9930 REM ****************   ABC SONG    **********************
9940 REM *****************************************************
9950 LOCATE ,,0 : COLOR T,U
9960 IF SECONDPASS=1 THEN GOTO 10100
9970 PLAY "MF"
9980 HAPPYFACE$=CHR$(2)
9990 FOR I = 1 TO 45
10000    READ ABCNOTES$(I)
10010 NEXT I
10020 RESTORE 10370
10030 FOR I = 1 TO 24
10040    READ ABCSONGLINES$(I)
10050 NEXT I
10060 RESTORE 10670
10070 FOR I = 1 TO 45
10080    READ HAPPYFACELOCATES(I)
10090 NEXT I
10100 CLS : LOCATE 1,1:PLAY "mf"
10110 FOR I = 1 TO 24
10120    PRINT ABCSONGLINES$(I);
10130 NEXT I
10140 ROW=6
10150 PLAY "T150;O3"
10160 FOR I = 1 TO 45
10170     COLUMN = HAPPYFACELOCATES(I)
10180     IF COLUMN > 0 THEN GOTO 10210
10190     COLUMN = -COLUMN
10200     ROW = ROW + 2
10210     LOCATE ROW,COLUMN
10220     PRINT HAPPYFACE$;
10230     PLAY ABCNOTES$(I) :' LOCATE 25,1:PRINT ABCNOTES$(I) ;
10240     LOCATE  ROW,COLUMN
10250     PRINT " ";
10260 NEXT I
10270 SECONDPASS=1 :FLAG=0
10280 RETURN 1090
10290 END
10300 REM ***********************************************************************
10310 REM ********** NOTE FOR THE ABC SONG "ABCNOTES$"                 *************
10320 REM ***********************************************************************
10330 DATA C4,C4,G4,G4,A4,A4,G2,F4,F4,E4,E4,D8,D8,D8,D8,C2,G4,G4,F4,P4,E4
10340 DATA E4,D2,G8,G8,G4,F4,P4
10350 DATA E4,E4,D2,C4,C4,G4,G4,A4,A4,G2,F4,F4,E4,E4,D4,D4,C2
10360 REM ***********************************************************************
10370 REM ********** SONG LINES FOR THE ABC SONG "ABCSONGLINES$"       *************
10380 REM ***********************************************************************
10390 DATA "┌──────────────────────────────────────────────────────────────────────────────┐"
10400 DATA "│ A  B  C  D  E  F  G  H  I  J  K  L  M  N  O  P  Q  R  S  T  U  V  W  X  Y  Z │"
10410 DATA "└──────────────────────────────────────────────────────────────────────────────┘"
10420 DATA "                                                                              "
10430 DATA "         ╔═══════════════════════════════════════════════════════════╗        "
10440 DATA "         ║                                                           ║        "
10450 DATA "         ║             A    B     C    D   E    F   G                ║        "
10460 DATA "         ║                                                           ║        "
10470 DATA "         ║           H   I   J    K    L   M   N   O   P             ║        "
10480 DATA "         ║                                                           ║        "
10490 DATA "         ║       Q   R   S   T    U    V   W   X   Y   AND   Z       ║        "
10500 DATA "         ║                                                           ║        "
10510 DATA "         ║  NOW I KNOW MY A-B-C'S NEXT TIME WON'T YOU SING WITH ME!  ║        "
10520 DATA "         ║                                                           ║        "
10530 DATA "         ║                                                           ║        "
10540 DATA "         ╟───────────────────────────────────────────────────────────╢        "
10550 DATA "         ║                                                           ║        "
10560 DATA "         ║                                                           ║        "
10570 DATA "         ║                                                           ║        "
10580 DATA "         ║                                                           ║        "
10590 DATA "         ║                                                           ║        "
10600 DATA "         ║                                                           ║        "
10610 DATA "         Θ                                                           Θ        "
10620 DATA "                                                                             "
10630 REM ***********************************************************************
10640 REM *********** HAPPY FACE LOCATIONS            ***************************
10650 REM ***********************************************************************
10660 REM *** A   B  C D  E  F  G  H   I  J  K  L  M  N  O  P   Q  R  S  PAUSE
10670 DATA     24,29,35,40,44,49,53,-22,26,30,35,40,44,48,52,56,-18,22,26,26
10680 REM *** T  U  V  W     X     Y   AND Z  NOW I KNOW MY  A  B  C'S NEXT TIME
10690 DATA   30,35,40,44,44,48,48,52,52,57,62,-14,17, 21, 24, 27,29,31, 37,  42
10700 REM *** WON'T  YOU   SING  WITH  ME!
10710 DATA    47,    52,    57,   61,  66
10720 REM ********************************************************************
10730 END
10740 REM ********************************************************************
10750 REM ***** subroutine to make the border around the letters & numbers **
10760 REM ********************************************************************
10770 COLOR S,P
10780 LOCATE 24,1 :PRINT CHR$(200);
10790 FOR B=23 TO 1 STEP -1
10800     LOCATE B,1 :PRINT CHR$(186);      :REM  goes up on left side
10810 NEXT B
10820 LOCATE 1,1 :PRINT CHR$(201)
10830 REM ********************************************************************
10840 REM ********************************************************************
10850 REM ********************************************************************
10860 FOR B=2 TO 78 STEP 1
10870     LOCATE 1,B :PRINT CHR$(205);   :REM goes across on top
10880 NEXT B
10890 LOCATE 1,79 :PRINT CHR$(187);
10900 REM ********************************************************************
10910 REM ********************************************************************
10920 REM ********************************************************************
10930 FOR B=2 TO 23 STEP 1
10940     LOCATE B,79 :PRINT CHR$(186);   :REM goes down on right side
10950 NEXT B
10960 LOCATE 24,79 :PRINT CHR$(188);
10970 REM ********************************************************************
10980 REM ********************************************************************
10990 REM ********************************************************************
11000 FOR B=78 TO 2 STEP -1
11010     LOCATE 24,B :PRINT CHR$(205);    :REM  goes across bottom
11020 NEXT B
11030 RETURN
11040 REM ********************************************************************
11050 REM *****************************************************
11060 REM *********************************************************
11070 REM ****** THE DRAW PROGRAM ********************************
11080 REM *********************************************************
11090 REM *********************************************************
11100 KEY OFF
11110 CLS :LOCATE 25,20 : COLOR S,P :PRINT "HIT AN ARROW KEY OR CURSOR KEY! "
11120 C2=1 : R1=1  :F2=100 :X=64 :PLAY "MB" :F=0 : B=7
11130 KEY(1) ON
11140 KEY(2) ON
11150 KEY(10) ON
11160 KEY(11) ON
11170 KEY(12) ON
11180 KEY(13) ON
11190 KEY(14) ON
11200 REM *********************************************************
11210 ON KEY(1) GOSUB 11310 :REM ***** BRANCH BACK TO MAIN PROGRAM **
11220 ON KEY(2) GOSUB 11550 :REM ***** to set value of time delay **
11230 ON KEY(10) GOSUB 11410 :REM ***** CLEAR SCREEN   **************
11240 ON KEY(11) GOSUB 11490 :REM ***** CURSOR UP *******************
11250 ON KEY(12) GOSUB 11460 :REM ***** CURSOR LEFT *****************
11260 ON KEY(13) GOSUB 11430 :REM ***** CURSOR RIGHT ****************
11270 ON KEY(14) GOSUB 11520 :REM ***** CURSOR DOWN *****************
11280 REM *********************************************************
11290 GOTO 11290  :REM  CLOSED LOOP *************************************
11300 REM *********************************************************
11310 FLAG=1  :REM RETURN TO MAIN PROGRAM   ******
11320 KEY(1) OFF
11330 KEY(2) OFF
11340 KEY(10) OFF
11350 KEY(11) OFF
11360 KEY(12) OFF
11370 KEY(13) OFF
11380 KEY(14) OFF
11390 RETURN 1090   :REM RETURN TO MAIN PROGRAM   ******
11400 REM *********************************************************
11410 COLOR S,P : CLS : RETURN  :REM   CLEAR SRCEEN           ******
11420 REM *********************************************************
11430 DIRECTION=1 : RETURN 11630 :REM   FOWARD  (TO THE RIGHT)  ******
11440 REM *********************************************************
11450 REM *********************************************************
11460 DIRECTION=2  :RETURN 11780 :REM BACKWARD  (TO THE LEFT)  *******
11470 REM *********************************************************
11480 REM *********************************************************
11490 DIRECTION=3  :RETURN  11930 :REM *** UP          ****************
11500 REM *********************************************************
11510 REM *********************************************************
11520 DIRECTION=4  :RETURN 12080  :REM *** DOWN           *************
11530 REM *********************************************************
11540 REM *********************************************************
11550 REM  ***  SUBROUTINE TO CHANGE SPEED OF ARROW DELAY TIMER ***
11560 REM *********************************************************
11570 COLOR S,P: CLS:LOCATE 12,20:PRINT "HOW SLOW OR FAST DO YOU WANT THE ARROWS TO MOVE?"
11580 LOCATE 14,20 : INPUT "(0=FAST - 1000=SLOW) ",F2 :COLOR S,P:CLS :RETURN
11590 REM *********************************************************
11600 REM  ***
11610 REM  ***
11620 REM *********************************************************
11630 REM **********   FOWARD  (TO THE RIGHT)  ********************
11640 REM *********************************************************
11650 LOCATE 25,1:COLOR F,B :PRINT "RIGHT "+CHR$(26);" ";
11660 LOCATE 25,12:COLOR F,B :PRINT " PRESS  F1 to exit  F2 to change arrow speed  F10 to clear screen ";
11670 IF DIRECTION=1 THEN C2=C2+1 :IF C2>79 THEN R1=R1+1
11680   IF R1>24 THEN COLOR S,P : CLS : R1=1
11690   IF C2>79 THEN :C2=1
11700     FOR L8=1 TO F2 : :NEXT L8
11710     PLAY"O4 A64"
11720    IF R1=0 THEN R1=1
11730    IF C2=0 THEN C2=1
11740   COLOR S,P :LOCATE R1,C2 :PRINT CHR$(26);
11750 GOTO 11670
11760 END
11770 REM *********************************************************
11780 REM **********   BACKWARDS (TO THE LEFT)  *******************
11790 REM *********************************************************
11800 LOCATE 25,1:COLOR F,B :PRINT "LEFT  "+CHR$(27);" ";
11810 LOCATE 25,12:COLOR F,B :PRINT " PRESS  F1 to exit  F2 to change arrow speed  F10 to clear screen ";
11820 IF DIRECTION=2 THEN C2=C2-1 :IF C2<1 THEN R1=R1+1
11830    IF R1>24 THEN COLOR S,P : CLS : R1=1
11840    IF C2<1 THEN C2=79
11850      FOR L8=1 TO F2 :NEXT L8
11860     PLAY"O4 B64"
11870    IF R1=0 THEN R1=1
11880    IF C2=0 THEN C2=1
11890    COLOR S,P :LOCATE R1,C2 :PRINT CHR$(27);
11900  GOTO 11820
11910 END
11920 REM *********************************************************
11930 REM ************   UP     ***********************************
11940 REM *********************************************************
11950 LOCATE 25,1:COLOR F,B :PRINT "  UP  "+CHR$(24);" ";
11960 LOCATE 25,12:COLOR F,B :PRINT " PRESS  F1 to exit  F2 to change arrow speed  F10 to clear screen ";
11970 IF DIRECTION=3 THEN R1=R1-1 :IF R1<1 THEN C2=C2+1
11980   IF C2>79 THEN COLOR S,P : CLS : C2=1
11990   IF R1<1 THEN R1=24
12000      FOR L8=1 TO F2 :NEXT L8
12010     PLAY"O4 C64"
12020    IF R1=0 THEN R1=1
12030    IF C2=0 THEN C2=1
12040   COLOR S,P :LOCATE R1,C2 :PRINT CHR$(24);
12050 GOTO 11970
12060 END
12070 REM *********************************************************
12080 REM ***********      DOWN     *******************************
12090 REM *********************************************************
12100 LOCATE 25,1:COLOR F,B :PRINT "DOWN  "+CHR$(25);" ";
12110 LOCATE 25,12:COLOR F,B :PRINT " PRESS  F1 to exit  F2 to change arrow speed  F10 to clear screen ";
12120 IF DIRECTION=4 THEN R1=R1+1 :IF R1>24 THEN C2=C2+1
12130   IF C2>79 THEN COLOR S,P : CLS : C2=1
12140   IF R1>24 THEN R1=1
12150      FOR L8=1 TO F2 :NEXT L8
12160     PLAY"O4 D64"
12170    IF R1=0 THEN R1=1
12180    IF C2=0 THEN C2=1
12190   COLOR S,P :LOCATE R1,C2 :PRINT CHR$(25);
12200 GOTO 12120
12210 END
12220 REM ********************************************************
12230 REM ********** ERROR TRAPING    **************************
12240 REM ********************************************************
12250 CLS
12260 LOCATE 12, 10 : PRINT "This program requires ADVANCED BASIC 2.x ; Please reload, using BASICA 2.x "
12270 PRINT
12280 PRINT "The Error code number is --->";ERR:PRINT :PRINT "Ask your parent to look in the Basic Manual in Appendix A ":RESUME 12290
12290 LOCATE 1,1 :END
12300 REM ****************************************************************
12310 REM ****************************************************************
12320 REM ****  User contribution request area   Please, DO NOT REMOVE! **
12330 REM ****  Become a Register User   SEND $10.00 TO  *****************
12340 REM ****                                           *****************
12350 REM ****  PARKER-ROSS ASSOCIATES    ********************************
12360 REM ****  1673 SACRAMENTO STREET    ********************************
12370 REM ****  SAN FRANCISCO, CA 94109   ********************************
12380 REM ****************************************************************
12390 REM ****************************************************************
12400 REM ***********************************************************
12410 PRINT
12420 PRINT TAB(W) " Dear Parents:"
12430 PRINT
12440 PRINT TAB(W) " If you and your children use  this  program, please become a"
12450 PRINT TAB(W) " *Registered User* by  sending $10.00."
12460 PRINT
12470 PRINT TAB(W) " *Registered Users* will receive program updates and other"
12480 PRINT TAB(W) " information to make the program more useful for you and your"
12490 PRINT TAB(W) " child. For the compiled version, become a *REGISTERED USER*"
12500 PRINT TAB(W) " and send a diskette with postage and mailer or check for $10"
12510 PRINT TAB(W) " to:"
12520 PRINT TAB(W) "               Parker-Ross Associates"
12530 PRINT TAB(W) "               1673 Sacramento Street"
12540 PRINT TAB(W) "               San Francisco, CA 94109"
12550 PRINT TAB(W) "               (415) 441-4683"
12560 PRINT
12570 PRINT TAB(W) " *Registered Users* are encouraged to call or write to us to:"
12580 PRINT TAB(W) " 1.  Give us your ideas on how to enhance the program."
12590 PRINT TAB(W) " 2.  Get ideas on how to get specific results such as teaching"
12600 PRINT TAB(W) "     the function of the return key <RETURN> or teaching the"
12610 PRINT TAB(W) "     alphabet. (We've used versions of this program with our son    "
12620 PRINT TAB(W) "     since age 2.)"
12630 PRINT TAB(W) " 3.  Get the update to change the name of the program to"
12640 PRINT TAB(W) "     include your child's name instead of Eryn's.";
12650 LOCATE 25,25:COLOR T,U:PRINT " STRIKE ANY KEY WHEN READY ";:W$=INPUT$(1)
12660 COLOR S,P :RETURN 220
12670 REM *********************************************************
12680 REM **********************************************************
12690 REM ************************************************************
12700 REM ********  LAST LINES OF CODE       ***************************
12710 REM ****************************************************************
12720 REM *****************************************************************
12730 REM ******************************************************************
12740 REM *******************************************************************
12750 REM ********************************************************************
```

## EMPIRE.BAS

```bas
1 ' EMPIRE
2 COLOR 15,1:ELAPS$=TIME$
3 REM PETER TREFONAS 12/30/79
4 KEY OFF
5 'CREDITS: "HAMMURABI" BY RICK MERRIL & DAVID AHL, "SANTA PARAVIA" BY GEORGE BLANK ; THE 1986 CONVERSION TO GWBASIC BY MICK LONARDO, YOUNGSTOWN, OH.
6 CLS:GOSUB 482:LOCATE 12,34
7 PRINT "E M P I R E":LOCATE 14,32:PRINT"VERSION 3.13.86":LOCATE 15,25:PRINT"(ALWAYS HIT <ENTER> TO CONTINUE)":GOSUB 59:CLS
9 DEFSTR Z:DEFINT O:RANDOMIZE TIMER:DIM A(6,19),Z(6,6)
11 FOR I=1 TO 6:FOR J=0 TO 6:READ Z(I,J):NEXT:NEXT I:BA=6000
13 FOR I=1 TO 6:A(I,1)=10000:A(I,2)=15000+(RND*10000):A(I,3)=2000:A(I,4)=1000:A(I,7)=25:A(I,8)=20:A(I,9)=5:A(I,10)=35:A(I,15)=20:A(I,17)=2:A(I,18)=1:A(I,19)=15:NEXT I
15 INPUT"HOW MANY PEOPLE ARE PLAYING";NP:IF NP>6 THEN 15
17 FOR I = 1 TO NP:PRINT"WHO IS THE RULER OF ";Z(I,1);:INPUT Z(I,0):NEXT I
19 NY=NY+1:CLS:PRINT"YEAR";NY:PRINT:NW=6*RND(1):ON NW GOTO 21,23,25,27,29,31
21 PRINT"POOR WEATHER.  NO RAIN. LOCUSTS MIGRATE.":GOTO 35
23 PRINT"EARLY FROST.  ARID CONDITIONS.": GOTO 35
25 PRINT"FLASH FLOODS.  TOO MUCH RAIN. ": GOTO 35
27 PRINT"AVERAGE WEATHER.  GOOD YEAR.": GOTO 35
29 PRINT"FINE WEATHER.  LONG SUMMER.": GOTO 35
31 PRINT"FANTASTIC WEATHER!  GREAT YEAR!": GOTO 35
33 '
35 GOSUB 59:CLS:FOR K=1 TO 6: QF=0
37 IF K>NP THEN GOSUB 411: GOTO 41
39 GOSUB 65
41 NEXT K:CLS:GOSUB 605
42 GOSUB 498
43 PRINT"Summary"
45 PRINT CHR$(186);"NOBLES      SOLDIERS       MERCHANTS       SERFS       LAND       PALACE":PRINT
47 FOR I=1 TO 6:IF A(I,0)<>0 THEN 53 ELSE PRINT CHR$(186);Z(I,2);" ";Z(I,0);" OF ";Z(I,1)
49 Z=" ###         ##,###          ##,###      ###,###     ###,###.#      ###%"
51 PRINT CHR$(186);USING Z;A(I,18),A(I,15),A(I,7),A(I,3),A(I,1),A(I,16)*5
53 IF KK=1 THEN END
55 NEXT I:LOCATE 18,2:INPUT "<ENTER>";Z:GOTO 19
57 LOCATE 19,2:FOR M = 1 TO 75:PRINT" ";:NEXT:M=0:LOCATE 19,1:PRINT CHR$(30):LOCATE 23,1:PRINT CHR$(30):LOCATE 19,1:PRINT"";:RETURN
59 FOR M=1 TO 7600:NEXT:RETURN
60 RETURN
61 LOCATE 4,1:PRINTCHR$(30):LOCATE 4,1:PRINTA(K,8);"%";,A(K,9);"%",A(K,10);"%":PRINTINT(FC+0.5),INT(FS+0.5),INT(FI+0.5):RETURN
63 CLS:GOSUB 605:PRINT"VERY SAD NEWS . . .":PRINT:RETURN
65 '
67 GOTO 395
69 DS=0:IQ=1:LA=A(K,1)-A(K,3)-A(K,18)*2-A(K,16)-A(K,7)-A(K,15)*2:PD=(A(K,3)+A(K,7)+A(K,18)*3)*5:AD=A(K,15)*8:A(K,19)=15
71 GOTO 359
73 IF A(K,2)*3<LA THEN LET LA=A(K,2)*3
75 IF A(K,3)*5<LA THEN LET LA=A(K,3)*5
77 A(K,2)=A(K,2)-LA/3:HA=LA*NW*0.72+(RND(NW)*500)-A(K,13)*500:RA=(RND(NW)*30):A(K,2)=A(K,2)-A(K,2)*RA/100:IF HA <0 THEN LET HA=0
79 A(K,2)=A(K,2)+HA
81 CLS:GOSUB 605: PRINT Z(K,A(K,17));" ";Z(K,0);" of ";Z(K,1)
82 GOSUB 498
83 PRINT"RATS ATE";RA;"% of the grain reserve."
85 LOCATE 4,2:PRINT"  GRAIN          GRAIN            PEOPLE               ARMY           ROYAL"
87 LOCATE 5,2:PRINT"  HARVEST        RESERVE          REQUIRE            REQUIRES        TREASURY"
89 LET Z="  ###,###        ###,###          ###,###            ###,###          ###,###":LOCATE 6,2:PRINT USING Z;HA,A(K,2),PD,AD,A(K,4)
91 LOCATE 7,2:PRINT"  BUSHELS        BUSHELS          BUSHELS            BUSHELS         ";Z(K,6)
93 LOCATE 10,2:PRINT"--------GRAIN FOR SALE:":LOCATE 11,2:PRINT,"COUNTRY","Bushels","Price":J=0
95 FOR I=1 TO 6:IF A(I,0)<>0 OR INT(A(I,5))=0 THEN 99
97 PRINT CHR$(186);I,Z(I,1),INT(A(I,5)),:PRINT USING "##.##";A(I,6):J=1
99 NEXT I:IF J=0 THEN LOCATE 16,2:PRINT "No Grain for Sale . . .":PRINT
101 H=0: GOSUB 57:LOCATE 18,2:INPUT"1) BUY GRAIN  2) SELL GRAIN  3) SELL LAND";H: IF H>3 OR H<0 GOTO 101
103 ON H+1 GOTO 141,105,121,133
105 '
107 GOSUB 57:LOCATE 20,2:INPUT"FROM WHICH COUNTRY  (GIVE #)";H1:IF H1<0 OR H1>6 THEN GOTO 107 ELSE IF A(H1,0)=1 OR A(H1,5)=0 THEN LOCATE 20,2:PRINT"THAT COUNTRY HAS NONE FOR SALE!";:GOSUB 59: GOTO 101
109 IF H1=0 THEN GOTO 101
111 IF H1=K THEN GOSUB 57:PRINT CHR$(187);"YOU CANNOT BUY GRAIN THAT YOU HAVE PUT ONTO THE MARKET!";:GOSUB 59:GOTO 107
113 GOSUB 57:LOCATE 20,2:INPUT"HOW MANY BUSHELS                          ";H2:IF H2>A(H1,5) THEN PRINT CHR$(187);"YOU CANNOT BUY MORE GRAIN THAN THEY ARE SELLING!;:GOSUB 59: GOTO 113
115 IF H2<0 THEN GOTO 107
117 H3=H2*A(H1,6)/0.9:IF H3>A(K,4) THEN GOSUB 57:PRINT Z(K,A(K,17));" ";Z(K,0);" PLEASE RECONSIDER -";:H=A(K,4)*0.9/A(H1,6):PRINT"YOU CAN ONLY AFFORD TO BUY";INT(H);"BUSHELS                     ";:GOSUB 59:GOTO 113
119 A(K,2)=A(K,2)+H2:A(K,4)=A(K,4)-H3:A(H1,4)=A(H1,4)+H3*0.9:A(H1,5)=A(H1,5)-H2:GOTO 81
121 '
123 GOSUB 57:LOCATE 20,2:INPUT"HOW MANY BUSHELS DO YOU WISH TO SELL          ";H1:IF H1>A(K,2) THEN GOSUB 57:LOCATE 20,2:PRINT Z(K,A(K,17));" ";Z(K,0);", PLEASE THINK AGAIN":LOCATE 21,2:PRINT"YOU ONLY HAVE ";A(K,2);"BUSHELS.                    ";:GOSUB 59
125 IF H1<0 THEN GOTO 123
127 GOSUB 57:LOCATE 20,2:INPUT"WHAT WILL BE THE PRICE PER BUSHEL                           ";H2:IF H2<=0 THEN GOTO 127
129 IF H2>15 THEN PRINT CHR$(186);"BE REASONABLE . . .EVEN GOLD COSTS LESS THAN THAT!";:GOSUB 59:GOTO 127
131 A(K,6)=(A(K,6)*A(K,5)+H1*H2)/(A(K,5)+H1):A(K,5)=INT(A(K,5)+H1):A(K,2)=A(K,2)-H1:GOTO 81
133 'SELL LAND
135 GOSUB 57:LOCATE 20,2:PRINT"THE BARBARIANS WILL GIVE YOU 2 ";Z(K,6);" PER ACRE":GOSUB 59:GOSUB 57:LOCATE 21,2:INPUT"HOW MANY ACRES WILL YOU SELL THEM";H1:IF H1>A(K,1)*0.95 THEN LOCATE 20,2:PRINT"YOU MUST KEEP SOME LAND FOR THE ROYAL PALACE!";:GOSUB 59:G
137 IF H1 < 0 THEN GOTO 135
139 A(K,4)=A(K,4)+H1*2:A(K,1)=A(K,1)-H1:BA=BA+H1:GOTO 81
141 A(K,15)=INT(A(K,15))
143 GOSUB 57:LOCATE 20,2:PRINT"HOW MANY BUSHELS WILL YOU GIVE TO YOUR ARMY OF";INT(A(K,15));"MEN ";:INPUT HM:IF HM>A(K,2) THEN GOSUB 57:LOCATE 19,2:PRINT"YOU CANNOT GIVE YOUR ARMY MORE GRAIN THAN YOU HAVE!";:GOSUB 59:GOTO 143
145 A(K,2)=A(K,2)-HM:PO=A(K,3)+A(K,7)+A(K,18)
147 GOSUB 57:LOCATE 20,2:PRINT"HOW MANY BUSHELS WILL YOU GIVE TO YOUR";INT(PO+0.5);"PEOPLE         ";:INPUT HS:IF HS>A(K,2) THEN GOSUB 57:PRINT CHR$(186);"BUT YOU ONLY HAVE";A(K,2);"BUSHELS OF GRAIN!":GOSUB 59:LOCATE 20,2:GOSUB 480:GOTO 147
149 IF HS<A(K,2)*0.1 THEN GOSUB 57:LOCATE 19,2:PRINT"YOU MUST RELEASE AT LEAST 10% OF THE STORED GRAIN":GOSUB 59:GOTO 147
151 A(K,2)=A(K,2)-HS:A(K,19)=HM/(AD+0.001)*10:IF A(K,19)<5 THEN LET A(K,19)=5
153 IF A(K,19)>15 THEN LET A(K,19)=15
155 CLS:GOSUB 605
157 PRINTZ(K,A(K,17));" ";Z(K,0);" of ";Z(K,1);":":PRINT"In year";STR$(NY);","
159 DB=INT((PO/9.5)*RND(NW)):DM=0:DD=INT((PO/22)*RND(NW)):DE=0:IF HS>PD*1.5 THEN LET D=SQR(HS-PD)-((A(K,8)*(NW))*1.5):IF D<0 THEN GOTO 161 ELSE DE=INT((2*D+1)*RND(NW))
161 DS=0:IF PD>HS*2 THEN LET DS=INT((PO/16+1)*RND(NW)):DM=INT((PO/12+1)*RND(NW)):GOTO 165
163 IF PD>HS THEN LET DM=INT((PO/15+1)*RND(NW))
165 PT=DB-DS-DM-DD+DE:I1=RND(NW)*(DE/5):I2=RND(NW)*(DE/25):A(K,7)=A(K,7)+I1:A(K,18)=A(K,18)+I2:A(K,3)=A(K,3)+PT-I1-I2
167 DA=0:IF AD>HM*2 THEN LET DA=INT((A(K,15)/2+1)*RND(NW)):A(K,15)=A(K,15)-DA
169 PA=0:IF HM*2<AD THEN LET PA=(A(K,15)/5)*RND(NW):A(K,15)=A(K,15)-PA
171 PRINTDB;"BABIES WERE BORN":PRINT DD;"PEOPLE DIED OF DISEASE":IF DE>0 THEN PRINT DE;"PEOPLE IMMIGRATED INTO YOUR COUNTRY."
173 IF DM>0 THEN PRINT DM;"PEOPLE DIED OF MALNUTRITION."
175 IF DS>0 THEN PRINT DS;"PEOPLE STARVED TO DEATH."
177 IF DA>0 THEN PRINT DA;"SOLDIERS STARVED TO DEATH."
179 PRINT"YOUR ARMY WILL FIGHT AT";INT(A(K,19)*10+0.5);"% EFFICIENCY."
181 Z="GAINED":IF PT<0 THEN LET Z="LOST"
183 PRINT"YOUR POPULATION ";Z;INT(ABS(PT));"CITIZENS."
185 PRINT:PRINT:INPUT"<ENTER>";Z
187 GOTO 373
189 '
191 F1=(A(K,11)*((A(K,7)+(35*RND(NW)))/(A(K,9)+1)*12+5))^0.9:F2=(A(K,12)*(5.8*(HA+250*RND(NW))/(A(K,10)*20+A(K,9)*40+10)+150))^0.9:F3=(A(K,13)*(A(K,15)+150*RND(NW)+400))^0.9
193 F4=(A(K,14)*(A(K,7)*4+A(K,11)*9+A(K,13)*15)*NW)^0.9:F5=A(K,15)*(-8):FC=DE*(40*RND(NW))+(40*RND(NW))/100*A(K,8):FS=A(K,9)/100*((A(K,7)*1.8+F1*33+F2*17+F3*50+F4*70)^0.85+A(K,18)*5+A(K,3))
195 FI=(A(K,10)/100*(A(K,3)*1.3+A(K,18)*145+A(K,7)*39+A(K,11)*99+A(K,12)*99+A(K,13)*425+A(K,14)*965))^0.97
197 A(K,4)=A(K,4)+F1+F2+F3+F4+F5+FC+FS+FI
199 A(K,18)=INT(A(K,18)):CLS:PRINT USING "            STATE REVENUES:  TREASURY=###,###.##";A(K,4);:PRINT"   ";Z(K,6)
201 PRINT"CUSTOMS TAX","SALES TAX","INCOME TAX":GOSUB 61
202 PRINT:PRINT,,"NUMBER","ANNUAL","UNIT"
203 PRINT"  INVESTMENTS",,"OWNED","PROFITS","COST"
204 PRINT"  -----------",,"-----","-------","----"
205 PRINT" 1) MARKET PLACES",A(K,11),INT(F1+0.5),"1000"
207 PRINT" 2) GRAIN MILLS  ",A(K,12),INT(F2+0.5),"2000"
209 PRINT" 3) FOUNDRIES    ",A(K,13),INT(F3+0.5),"7000"
211 PRINT" 4) SHIPYARDS    ",A(K,14),INT(F4+0.5),"8000"
213 PRINT" 5) SOLDIERS     ",CINT(A(K,15)),INT(F5+0.5),"8"
215 PRINT" 6) PALACE       ",STR$(A(K,16)*5);"% DONE",,"5000":IF KL=1 THEN KL=0:RETURN
216 LOCATE 17,4:PRINT"SELECT ONE TO CHANGE TAXES OR HIT <ENTER> TO CONTINUE:"
217 E=0:GOSUB 57:INPUT" 1) CUSTOMS DUTY   2) SALES TAX   3) INCOME TAX      ";E
219 IF E>3 OR E<0 GOTO 217
220 LOCATE 17,4:PRINT"                                                             ":PRINT
221 ON E +1 GOTO 229,223,225,227
223 GOSUB 57:INPUT "GIVE NEW CUSTOMS TAX (MAX=50%)                    ";E:IF E<0 OR E>50 THEN GOTO 223 ELSE A(K,8)=E:GOSUB 61:GOTO 216
225 GOSUB 57:INPUT"GIVE NEW SALES TAX (MAX=20%)                      ";E:IF E<0 OR E>20 THEN GOTO 225 ELSE A(K,9)=E:GOSUB 61:GOTO 216
227 GOSUB 57:INPUT"GIVE NEW INCOME TAX (MAX=35%)                     ";E:IF E<0 OR E>35 THEN GOTO 227 ELSE A(K,10)=E:GOSUB 61:GOTO 216
229 E=0:GOSUB 57:INPUT"ANY NEW INVESTMENTS? (GIVE #) ";E:IF E<0 OR E>6 THEN GOTO 229
231 J=0:H=0:ON E+1 GOTO 257,233,235,237,239,241,243
233 E1=1000:J=7*RND(NW):GOTO 245
235 E1=2000:GOTO 245
237 E1=7000:GOTO 245
239 E1=8000:GOTO 245
241 E1=8:GOTO 245
243 E1=5000:H=4*RND(NW)
245 E2=0:GOSUB 57:INPUT"HOW MANY";E2:IF E2<>INT(E2) OR E2 <0 THEN GOTO 245 ELSE IF E2=0 THEN 255 ELSE IF A(K,4)<E1*E2 THEN GOSUB 57:PRINT"THINK AGAIN...YOU ONLY HAVE";A(K,4);Z(K,6);:GOSUB 59:GOTO 245
247 IF E2+(E2-1)*(J+H)>A(K,3) THEN GOSUB 57:PRINT"YOU DON'T HAVE ENOUGH SERFS TO TRAIN":GOSUB 59:GOTO 245
249 IF E1=8 AND (E2+A(K,15))/PO>0.05+A(K,13)*0.015 THEN GOSUB 57:PRINT"YOU CANNOT EQUIP AND MAINTAIN SO MANY TROOPS, ";Z(K,A(K,17))".";:GOSUB 59:GOTO 245
250 IF INT(A(K,18)+0.5)>1 THEN LET NOBLE$="NOBLES" ELSE LET NOBLE$="NOBLE"
251 A(K,15)=INT(A(K,15)):IF E1=8 AND E2+A(K,15)>A(K,18)*20 THEN GOSUB 57:PRINT"PLEASE THINK AGAIN...  YOU ONLY HAVE";INT(A(K,18)+0.5);NOBLE$;" TO LEAD YOUR TROOPS.":GOSUB 59:GOTO 245
252 '
253 IF E1=8 THEN LET A(K,3)=A(K,3)-E2 ELSE A(K,7)=A(K,7)+J*E2:A(K,18)=A(K,18)+H*E2:A(K,3)=A(K,3)-(J+H)*E2
255 TEST = E+10:A(K,4)=A(K,4)-(E2*E1):A(K,TEST)=A(K,TEST)+E2:KL=1:LOCATE 8,1:GOSUB 203:LOCATE 1,39:PRINT USING "###,###.##  ";A(K,4);:GOTO 229
257 '
259 CLS:GOSUB 605:PRINT"LAND HOLDINGS:":PRINT:LOCATE 4,10:PRINT USING"\                 \        ###,###.#";" 1)   BARBARIANS",BA:IF BA<0 THEN BA=0
261 FOR I=1 TO 6:IF A(I,0)<>0 THEN GOTO 262:ELSE LOCATE I+4,10:PRINT USING "\\!   \                 \  ###,###.#";STR$(I+1);")  ";Z(I,1),A(I,1):IF A(I,1)<0 THEN A(I,1)=0
262 NEXT
263 I=0:GOSUB 57:INPUT"WHO DO YOU WISH TO ATTACK (GIVE #)";I:IF I<0 OR I>7 THEN GOTO 263
265 IF I=K+1 THEN PRINT Z(K,A(K,17));", PLEASE THINK AGAIN... YOU ARE #";STR$(I);"!":GOSUB 59:GOTO 263
267 IF I>1 AND NY<3 THEN GOSUB 57:PRINT"DUE TO INTERNATIONAL TREATY, YOU CANNOT ATTACK OTHER":PRINT"NATIONS UNTIL THE THIRD YEAR.";:GOSUB 59:GOTO 263
269 IF I=1 AND BA<1 THEN GOSUB 57:PRINT"ALL BARBARIAN LANDS HAVE BEEN SEIZED":BA=0:GOSUB 59:GOTO 263
271 IF I<>0 THEN IF A(I-1,0)<>0 THEN GOSUB 57 :PRINT "THAT PLAYER IS NO LONGER IN THE GAME":GOSUB 59:GOTO 263
273 IF I=0 THEN RETURN ELSE I=I-1
275 H=A(K,18)/4+1:IF IQ>H THEN GOSUB 57:PRINT"DUE TO A SHORTAGE OF NOBLES, YOU ARE LIMITED TO ONLY";INT(H);" ATTACKS PER YEAR";:GOSUB 59:GOTO 263
277 GOSUB 57:INPUT "HOW MANY SOLDIERS DO YOU WISH TO SEND";I1:IF I1<1 THEN 259 ELSE IF I1>A(K,15) THEN GOSUB 57:PRINT"THINK AGAIN... YOU ONLY HAVE";A(K,15);"SOLDIERS":GOSUB 59:GOTO 277
279 IQ=IQ+1:CLS:LOCATE 6,20:PRINT Z(K,A(K,17));" ";Z(K,0);" OF ";Z(K,1);:LOCATE 9,27:PRINT "SOLDIERS REMAINING:";:I4=A(K,19):I5=0:I2=A(I,15):I0=A(I,1):O1=75-I1-I2:A(K,15)=A(K,15)-I1
281 IF I=0 THEN I2=(3*(I1*RND(NW))*RND(NW))+(I1*(1.5)*RND(NW))*RND(NW):PRINT TAB(20),"PAGAN BARBARIANS:";:I3=9:I0=BA:O1=75-I1-I2:GOTO 287
283 LOCATE 10,45-LEN(Z(I,A(I,17))+" "+Z(I,0)+" OF "+Z(I,1)):PRINT Z(I,A(I,17));" ";Z(I,0);" OF ";Z(I,1);":":I3=A(I,19)
285 IH=0:IF A(I,15)<1 THEN :PRINT:LOCATE 5,8:PRINT Z(I,1);"'S SERFS ARE FORCED TO DEFEND THEIR COUNTRY!";:I2=A(I,3):I3=5:IH=1:O1=-1:LOCATE 10,2:PRINT"                                ":LOCATE 10,45-LEN(Z(I,1)+"'S SERFS"):PRINT Z(I,1);"'S SERFS:"
287 LOCATE 9,60:PRINT CHR$(30);:LOCATE 9,60:PRINT INT(I1);:LOCATE 10,60:PRINT CHR$(30);:LOCATE 10,60:PRINT INT(I2);:GOSUB 600:FOR O=0 TO O1:NEXT
289 I7=INT(I1/15)+1:IF I4*RND(NW)<I3*RND(NW) THEN 295
291 I5=I5+((I7*26)*RND(NW))-((I7+5)*RND(NW)):I2=I2-I7:IF I5<0 THEN LET I5=0
293 GOTO 299
295 I1=I1-I7
297 IF I0-I5<0 THEN GOTO 341
299 IF I1>0 AND I2>0 THEN GOTO 287
301 IF I1<0 THEN LET I1=0
303 IF I2<0 THEN LET I2=0
305 IF IH=1 AND I1>0 THEN GOTO 341
307 CLS:GOSUB 605:LOCATE 5,25:PRINT"b a t t l e    o v e r   ! ! !":PRINT
309 IF I1>0 THEN PRINT"THE FORCES OF ";Z(K,A(K,17));" ";Z(K,0);" WERE VICTORIOUS.":GOSUB 601:GOSUB 601:GOTO 315
311 PRINT Z(K,A(K,17));" ";Z(K,0);" WAS DEFEATED.":IF I5<2 THEN LET I5=0:GOTO 315
313 I5=I5/(3*RND(NW)):PRINT USING "IN YOUR DEFEAT YOU NEVERTHELESS MANAGED TO CAPTURE ###,###.# ACRES.";I5:IF I=0 THEN GOTO 319 ELSE GOTO 317
315 PRINT USING "###,###.# \                  \";I5;"ACRES WERE SEIZED.":IF I=0 THEN GOTO 319
317 IF I5>A(I,1)/3 THEN GOTO 325
319 A(K,15)=I1+A(K,15):A(K,1)=A(K,1)+I5:IF I=0 THEN BA=BA-I5:IF QF=1 THEN GOSUB 59:RETURN:ELSE INPUT"<ENTER>";Z:GOTO 259
321 IF IH=1 THEN LET IH=0:A(I,15)=0:A(I,3)=I2:A(I,1)=A(I,1)-I5:IF QF=1 THEN GOSUB 59: RETURN:ELSE INPUT"<ENTER>";Z:GOTO 259
323 A(I,15)=I2:A(I,1)=A(I,1)-I5:IF QF=1 THEN GOSUB 59:RETURN:ELSE INPUT "<ENTER>";Z:GOTO 259
325 IF A(I,3)>0 THEN I6=INT((A(I,3)*RND(NW))):PRINT I6;"ENEMY SERFS WERE BEATEN AND MURDERED BY YOUR TROOPS!":A(I,3)=A(I,3)-I6
327 IF A(I,11)>0 THEN I6=INT((A(I,11)*RND(NW))):PRINT I6;"ENEMY MARKETPLACES WERE DESTROYED":A(I,11)=A(I,11)-I6
329 IF A(I,2)>0 THEN I6=INT((A(I,2)*RND(NW))):PRINT I6;"BUSHELS OF ENEMY GRAIN WERE BURNED":A(I,2)=A(I,2)-I6
331 IF A(I,12)>0 THEN LET I6=INT((A(I,12))*RND(NW)):PRINT I6;"ENEMY GRAIN MILLS WERE SABOTAGED":A(I,12)=A(I,12)-I6
333 IF A(I,13)>0 THEN I6 = INT((A(I,13)*RND(NW))):PRINT I6;"ENEMY FOUNDRIES WERE LEVELED":A(I,13)=A(I,13)-I6
335 IF A(I,14)>0 THEN I6=INT((A(I,14)*RND(NW))):PRINT I6;"ENEMY SHIPYARDS WERE OVERRUN":A(I,14)=A(I,14)-I6
337 IF A(I,18)>2 THEN I6=INT(((A(I,18/2)*RND(NW)))):PRINT I6;"ENEMY NOBLES WERE SUMMARILY EXECUTED":A(I,18)=A(I,18)-I6
339 A(K,1)=A(K,1)+I5:A(I,1)=A(I,1)-I5:IF QF=1 THEN GOSUB 59:RETURN:ELSE INPUT"<ENTER> TO CONTINUE:";Z:GOTO 259
341 CLS:GOSUB 605:LOCATE 5,40:PRINT"b a t t l e    o v e r ! ! !":PRINT
343 IF I=0 THEN PRINT"ALL BARBARIAN LANDS HAVE BEEN SEIZED":PRINT"THE REMAINING BARBARIANS FLED.":A(K,1)=A(K,1)+I5:A(K,15)=A(K,15)+I1:BA=0:IF QF=1 THEN GOSUB 59:RETURN:ELSE INPUT"<ENTER>";Z:GOTO 259
345 PRINT"THE COUNTRY OF ";Z(I,1);" WAS OVERRUN!":PRINT"ALL ENEMY NOBLES WERE SUMMARILY EXECUTED!":PRINT:PRINT
347 PRINT"THE REMAINING ENEMY SOLDIERS WERE IMPRISONED. ALL ENEMY SERFS
349 PRINT"HAVE PLEDGED OATHS OF FEALTY TO YOU, AND SHOULD NOW BE CONSIDERED
351 PRINT"TO BE YOUR PEOPLE TOO.  ALL ENEMY MERCHANTS FLED THE COUNTRY":PRINT"UNFORTUNATELY, ALL ENEMY ASSETS WERE SACKED AND"
352 PRINT"DESTROYED BY YOUR REVENGEFUL ARMY!!!!"
353 PRINT"IN A DRUNKEN RIOT FOLLOWING THE VICTORY CELEBRATION.  <ENTER>"
354 W$=INKEY$:IF W$="" THEN 354
355 IF IH=1 THEN LET IH=0:A(I,3)=I2
357 A(K,15)=I1+A(K,15):A(K,1)=A(K,1)+A(I,1):A(I,1)=0:A(I,0)=1:A(K,3)=A(K,3)+A(I,3):IF QF=1 THEN GOSUB 59:RETURN:ELSE INPUT"<ENTER>";N$:GOTO 259
359 IF A(K,0)<>0 THEN RETURN
361 IF A(K,11)>7 AND A(K,12)>3 AND A(K,1)/A(K,3)>4.8 AND A(K,3)>2300 AND A(K,18)>10 THEN LET A(K,17)=3
363 IF A(K,11)>13 AND A(K,12)>5 AND A(K,13)>0 AND A(K,16)>5 AND A(K,1)/A(K,3)>5 AND A(K,3)>2600 AND A(K,18)>25 THEN LET A(K,17)=4
365 IF A(K,17)>3 AND A(K,16)>9 AND A(K,4)>3100 AND A(K,18)>40 THEN CLS:A(K,17)=5:PRINT "GAME OVER. . .":PRINT Z(K,5);" ":Z(K,0);" OF ";Z(K,1);" WINS!!":PRINT:PRINT:KK=1:GOSUB 43:END
367 IF QF=1 THEN GOSUB 59:RETURN
369 GOTO 73
371 '
373 IF DS*RND(NW)>110*RND(NW) THEN GOSUB 63:PRINT Z(K,A(K,17));" ";Z(K,0);" OF ";Z(K,1);" HAS BEEN ASSASSINATED":PRINT"BY A CRAZED MOTHER WHOSE CHILD HAD STARVED TO DEATH...":GOTO 387
375 IF RND(NW)>0.01 THEN GOTO 189
377 ON 4*RND(NW) GOTO 379,381,383,385
379 GOSUB 63:PRINTZ(K,A(K,17));" ";Z(K,0);" HAS BEEN ASSASSINATED BY AMBITIOUS":PRINT"NOBLE":GOTO 387
381 GOSUB 63:PRINT Z(K,A(K,17));" ";Z(K,0);" HAS BEEN KILLED FROM A FALL DURING":PRINT "THE ANNUAL FOX-HUNT.":GOTO 387
383 GOSUB 63:PRINT Z(K,A(K,17));" ";Z(K,0);" DIED OF ACUTE FOOD POISONING.":PRINT "THE ROYAL COOK WAS SUMMARILY EXECUTED.":GOTO 387
385 GOSUB 63:PRINT Z(K,A(K,17));" ";Z(K,0);" PASSED AWAY THIS WINTER FROM A WEAK HEART."
387 A(K,0)=1:PRINT:PRINT "THE OTHER NATION-STATES HAVE SENT REPRESENTATIVES TO THE":PRINT "FUNERAL":INPUT "<ENTER> TO CONTINUE";NU$:RETURN
389 DATA MONTAIGNE,AUVEYRON,CHEVALIER,PRINCE,ROI,EMPEREUR,FRANCS,ARTHUR,BRITTANY,SIR,PRINCE,KING,EMPEROR,FRANCS
391 DATA MUNSTER,BAVARIA,RITTER,PRINZ,KONIG,KAISER,MARKS,KHOTAN,QUATARA,HASID,CALIPH,SHEIK,SHAH,DINARS
393 DATA FERDINAND,BARCELONA,CABALLERO,PRINCIPE,REY,EMPERADORE,PESETA,HJODOLF,SVEALAND,RIDDARE,PRINS,KUNG,KEJSARE,KRONA
395 '
397 IF RND(NW)>0.02 THEN GOTO 69
399 CLS:GOSUB 605:PRINT TAB(22);"P L A G U E   ! ! !":PRINT
401 PRINT "BLACK DEATH HAS STRUCK YOUR NATION.":PRINT
403 I=INT((A(K,3)/2)*RND(NW)):A(K,3)=A(K,3)-I:PRINT I;"SERFS DIED."
405 I=INT((A(K,7)/3)*RND(NW)):A(K,7)=A(K,7)-I:PRINT I;"MERCHANTS DIED."
407 I=INT((A(K,15)/3)*RND(NW)):A(K,15)=A(K,15)-I:PRINT I;"SOLDIERS DIED."
409 I=INT((A(K,18)/3)*RND(NW)):A(K,18)=A(K,18)-I:PRINT I;"NOBLES DIED.":GOSUB 59:GOSUB 59:GOTO 69
411 '
413 FOR Q=1 TO NP:IF A(Q,0)<>0 THEN NEXT Q:PRINT:END
415 IF A(K,0)<>0 THEN RETURN
417 DS=0:CLS:LOCATE 10,20:PRINT "ONE MOMENT -- ";Z(K,A(K,17));" ";Z(K,0);"'S TURN . . .":FOR Q=1 TO 2000:NEXT
419 IF RND(NW)<0.01 THEN GOSUB 377:RETURN
421 Q2=0:Q3=0:Q4=0:Q5=0:Q6=0:Q7=0:Q8=0:Q9=0:Q0=0:QB=0:QC=0:QD=0
423 QP=0:FOR Q=1 TO NP: IF A(Q,0)<>0 THEN GOTO 429 ELSE QP=QP+1
425 Q2=A(Q,3)+Q2:Q3=A(Q,5)+Q3:Q4=A(Q,6)+Q4:Q5=A(Q,4)+Q5:Q6=A(Q,7)+Q6:Q7=A(Q,11)+Q7:Q8=A(Q,12)+Q8:Q9=A(Q,13)+9
427 Q0=A(Q,14)+Q0:QB=A(Q,16)+QB:QC=A(Q,18)+QC:QD=A(Q,19)+QD
429 NEXT
431 Q2=Q2/QP:Q3=Q3/QP:Q4=Q4/QP:Q5=Q5/QP:Q6=Q6/QP:Q7=Q7/QP:Q8=Q8/QP:Q9=Q9/QP:Q0=Q0/QP:QB=QB/QP:QC=QC/QP:QD=QD/QP
433 Q2=INT(Q2+(200*RND(NW))-(200*RND(NW))):Q3=INT(Q3+(1000*RND(NW))-(1000*RND(NW))):Q4=Q4+RND(NW)-RND(NW):Q5=INT(Q5+(1500*RND(NW))-(1500*RND(NW))):Q6=INT(Q6+(25*RND(NW))-(25*RND(NW))):IF Q4<0 THEN LET Q4=0:GOTO 433
435 Q7=INT(Q7+(4*RND(NW))-(4*RND(NW))):Q8=INT(Q8+(2*RND(NW))-(2*RND(NW))):IF RND(NW)>0.3 THEN GOTO 437 ELSE Q9=INT(Q9+(2*RND(NW))-(2*RND(NW))):Q0=INT(Q0+(2*RND(NW))-(2*RND(NW)))
436 IF RND(NW)>0.5 THEN GOTO 437 ELSE QB=INT(QB+(2*RND(NW))-(2*RND(NW))):QC=INT(QC+(2*RND(NW))-(2*RND(NW)))
437 '
439 A(K,3)=Q2:IF Q3>A(K,5) AND (9*RND(NW))>6 THEN LET A(K,5)=Q3:A(K,6)=Q4:IF NW<3 THEN LET A(K,6)=A(K,6)+RND(NW)/1.5
441 A(K,4)=Q5:IF Q6>A(K,7) THEN LET A(K,7)=Q6
443 IF Q7>A(K,11) THEN LET A(K,11)=Q7
445 IF Q8>A(K,12) THEN LET A(K,12)=Q8
447 IF Q9>A(K,13) THEN LET A(K,13)=Q9
449 IF Q0>A(K,14) THEN LET A(K,14)=Q0
451 IF QB>A(K,16) THEN LET A(K,16)=QB
453 IF QC>A(K,18) THEN LET A(K,18)=QC
455 A(K,15)=10*A(K,18)+((10*A(K,18))*RND(NW)):IQ=0
457 IF A(K,15)/Q2>A(K,13)*0.01+0.05 THEN A(K,15)=A(K,15)/2:GOTO 457
459 A(K,19)=QD:QF=1:GOSUB 359:QF=0
461 Q=NP*RND(NW):IF A(Q,0)<> 0 OR Q=K THEN GOTO 461
463 IF A(Q,5)<1 THEN GOTO 471
465 QR=RND(NW)*A(Q,5):IF QR*A(Q,6)<A(K,4) THEN GOTO 469
467 IF 9*RND(NW)>3 THEN GOTO 465 ELSE GOTO 471
469 A(Q,4)=A(Q,4)+INT(QR*A(Q,6)*90)/100:A(Q,5)=A(Q,5)-QR
471 IF 9*RND(NW)<2 THEN RETURN
473 IF NY<3 THEN I=0:IF BA<0 THEN RETURN ELSE GOTO 477
475 I=INT(6*RND(NW)):IF I=K OR A(I,0)<>0 THEN GOTO 475
477 QF=1:I1=(A(K,15)*RND(-NW)):GOSUB 279:QF=0:IQ=IQ+1:IF A(K,15)>30 AND IQ<A(K,18)/4 THEN GOTO 471
479 RETURN
480 PRINT"                                          ":RETURN
482 LI=3:WIDTH 80
484 PRINTCHR$(201);STRING$(77,205);CHR$(187)
486 FOR R=1 TO 20:PRINT CHR$(186);TAB(79);CHR$(186):NEXT R
488 PRINTCHR$(200);STRING$(77,205);CHR$(188)
492 LOCATE 1,3
494 PRINT STRING$(32,205);"E M P I R E";STRING$(31,205)
496 RETURN
498 LI=3:WIDTH 80
500 PRINT CHR$(201);STRING$(77,205);CHR$(187)
502 FOR R=1 TO 20:PRINT CHR$(186);TAB(79);CHR$(186):NEXT R
504 PRINT CHR$(200);STRING$(77,205);CHR$(188)
506 LOCATE 3,5
508 RETURN
600 '
601 FOR ML=1 TO 800:NEXT:RETURN
605 LOCATE 25,2:PRINT NA$:LOCATE 25,72:PRINT"YEAR ";NY:LOCATE 1,1:RETURN
```

## SOVIET.BAS

```bas
10 '╔══════════════════════════════════════════════════════════════════════════╗
20 '║   ESCAPE FROM SSADB, BY MENCO INC. (C) COPYRIGHT 1986 BY DAVID MENY      ║
30 '║   2923 CARMEL WAY, FAIRFIELD, CA 94533   ALL RIGHTS RESERVED.            ║
40 '║   NOTICE: THERE ARE NO ROYALTIES CONNECTED WITH THIS PROGRAM.  UNLIMITED ║
50 '║   COPIES MAY BE MADE FOR PUBLIC DISTRIBUTION AS LONG AS THIS NOTICE IS   ║
60 '║   INCLUDED IN FULL.  OF COURSE, DONATIONS APPRECIATED.                   ║
70 '╚══════════════════════════════════════════════════════════════════════════╝
80 '
90 SCREEN 0,0:WIDTH 80:COLOR 7,0:CLS:KEY OFF
100 DIM A(17,10),P(5),O1$(11),O2$(11),M$(27),T(5),ROOM$(17),IN$(11),TR(11)
110 '
120 CLS:LOCATE 10,40-34/2:COLOR 10,0:PRINT "Escape From S.S.A.D.B, Version 1.0"
130 LOCATE 21,1:PRINT "Menco, Inc.":PRINT "2923 Carmel Way, Fairfield, CA 94533"
140 PRINT "(c) Copyright 1986 by David Meny":COLOR 7,0
150 PLAY "MBT180MSL8O2CCCCMLFFFMSCCCMLFFF"
160 FOR I=1 TO 5:SECS=VAL(RIGHT$(TIME$,2))
170 WHILE SECS=VAL(RIGHT$(TIME$,2)):WEND:NEXT I
180 GOSUB 4590:CLS 'INITIALIZE
190 '
200 GOSUB 3450 'ROOM DESCRIPTION
210 GOSUB 1970 'OBJECTS IN ROOM?
220 '
230 'INPUT PROCESSING
240 KW=0
250 IF SIREN=1 AND SET=0 THEN MV=1:SET=1
260 IF SET=1 THEN MV=MV+1:IF MV=3 AND RO=6 AND BOX=0 THEN PRINT:PRINT "A worker comes running in and glances around. He sees you and calls the guards":PRINT "who take you away and torture you.":GOTO 3330
270 IF MV=3 AND RO=6 AND BOX=1 THEN PRINT:PRINT "A worker comes in and glances around. He glances around and not noticing":PRINT "anything, he heads to the balcony.":TR(11)=7
280 IF MV=3 THEN TR(11)=7
290 '
300 PRINT:INPUT ">",A$:IF A$="" THEN PRINT:PRINT "What?":GOTO 250
310 AS=ASC(A$)
320 IF AS<65 OR AS>90 THEN PRINT:PRINT "Capital letters please.":GOTO 250
330 M=LEN(A$):IF M<7 THEN A$=A$+" ":GOTO 330
340 '
350 B$=LEFT$(A$,3)
360 IF B$="INV" OR B$="I  " THEN GOSUB 740:GOTO 250
370 IF B$="SCO" THEN GOSUB 840:GOTO 250
380 IF B$="QUI" OR B$="Q  " THEN GOSUB 870:GOTO 250
390 IF B$="HEL" OR B$="CLU" THEN PRINT:PRINT "Sorry, there is no help for lost agents in this game.":GOTO 250
400 IF B$="HID" THEN GOSUB 2470:GOTO 250
410 IF B$="STA" THEN GOSUB 2520:GOTO 250
420 IF B$="LOO" OR B$="L  " THEN GOTO 200
430 IF B$="N  " THEN C$="N  ":GOSUB 940:GOTO 250
440 IF B$="S  " THEN C$="S  ":GOSUB 940:GOTO 250
450 IF B$="E  " THEN C$="E  ":GOSUB 940:GOTO 250
460 IF B$="W  " THEN C$="W  ":GOSUB 940:GOTO 250
470 IF B$="U  " THEN C$="U  ":GOSUB 940:GOTO 250
480 IF B$="D  " THEN C$="D  ":GOSUB 940:GOTO 250
490 '
500 N=1
510 IF MID$(A$,N,1)=" " THEN C$=MID$(A$,N+1,3):IF LEFT$(C$,1)<>" " THEN 540 ELSE 530
520 IF N<M THEN N=N+1:GOTO 510
530 PRINT:PRINT "In that form, I don't know the word ";A$:GOTO 250
540 IF B$="GO " OR B$="MOV" OR B$="WAL" THEN KW=1:GOSUB 940:GOTO 250
550 IF B$="EXA" OR B$="SEA" THEN GOSUB 2730:GOTO 250
560 IF B$="TAK" OR B$="GET" THEN KW=1:GOSUB 1660:GOTO 250
570 IF B$="DRO" OR B$="PUT" THEN KW=1:GOSUB 1170:GOTO 250
580 IF B$="UNL" THEN KW=1:GOSUB 2190:GOTO 250
590 IF B$="LOC" THEN KW=1:GOSUB 2560:GOTO 250
600 IF B$="OPE" THEN KW=1:GOSUB 1320:GOTO 250
610 IF B$="CLO" THEN KW=1:GOSUB 2640:GOTO 250
620 IF B$="REA" THEN KW=1:GOSUB 1490:GOTO 250
630 IF B$="PUS" OR B$="PRE" THEN KW=1:GOSUB 2360:GOTO 250
640 IF B$="PUL" OR B$="UNP" THEN KW=1:GOSUB 3150:GOTO 250
650 IF B$="TYP" THEN KW=1:GOSUB 3200:GOTO 250
660 IF B$="POU" OR B$="SPR" THEN KW=1:GOSUB 3070:GOTO 250
670 IF B$="INS" THEN KW=1:GOSUB 1890:GOTO 250
680 IF B$="KIC" OR B$="HIT" THEN KW=1:GOSUB 2040:GOTO 250
690 IF B$="MIX" OR B$="COM" THEN KW=1:GOSUB 2950:GOTO 250
700 IF B$="THR" THEN KW=1:GOSUB 2280:GOTO 250
710 PRINT:PRINT "I don't know that word.":GOTO 250
720 '
730 '------------------------SUPPORT SUBROUTINES------------------------------
740 'INVENTORY
750 PRINT:PRINT "  You are carrying:"
760 PRINT
770 FOR I=1 TO 8
780 IF TR(I)=200 THEN PRINT "    ";IN$(I):AADS=1
790 NEXT I
800 IF AADS<>1 THEN PRINT "    nothing"
810 AADS=0
820 RETURN
830 '
840 'SCORE
850 PRINT:PRINT "Out of 200 points, you got ";SCORE" points.":RETURN
860 '
870 'QUIT
880 PRINT:PRINT "Out of 200 points, you got "SCORE" points."
890 PRINT
900 INPUT "Are you sure you want to quit";F$:IF F$="" THEN 890
910 IF F$="Y" OR F$="f" OR F$="YES" THEN END
920 PRINT:PRINT "Ok.":GOTO 250
930 '
940 'MOVE
950 C$=LEFT$(C$,1)
960 IF RO=10 AND GUARD=1 THEN PRINT:PRINT "As you try to leave the guard spies you and captures you. He alerts others":PRINT "and soon you are tortured and killed.":GOTO 3330
970 IF RO=9 AND C$="S" AND PLUG=0 THEN PRINT:PRINT "As you step into the record room, the camera spies you and alerts the guards.":PRINT "They take you away and torture you which eventually kills you.":GOTO 3330
980 IF RO=13 AND C$="S" AND TR(11)=16 THEN PRINT:PRINT "As you step into the missle site, a worker working on the MX-13 missle":PRINT "sees you and calls for guards. They take you away and torture you. You":PRINT "die in their hands.":GOTO 3330
990 IF RO=6 AND BOX=1 THEN PRINT:PRINT "You can't go that way while you are crouching in the box.":RETURN
1000 IF RO=7 AND TR(11)=7 AND C$="W" THEN PRINT:PRINT "As you try to leave, the worker grabs you and calls for the guards. When the":PRINT "guards come, they take you away to be tortured. THE END!":GOTO 3330
1010 IF C$="N" AND A(RO,1)=0 THEN PRINT:PRINT "You can't go that way.":RETURN
1020 IF C$="S" AND A(RO,2)=0 THEN PRINT:PRINT "You can't go that way.":RETURN
1030 IF C$="E" AND A(RO,3)=0 THEN PRINT:PRINT "You can't go that way.":RETURN
1040 IF C$="W" AND A(RO,4)=0 THEN PRINT:PRINT "You can't go that way.":RETURN
1050 IF C$="U" AND A(RO,5)=0 THEN PRINT:PRINT "You can't go that way.":RETURN
1060 IF C$="D" AND A(RO,6)=0 THEN PRINT:PRINT "You can't go that way.":RETURN
1070 IF C$="N" THEN RO=A(RO,1)
1080 IF C$="S" THEN RO=A(RO,2)
1090 IF C$="E" THEN RO=A(RO,3)
1100 IF C$="W" THEN RO=A(RO,4)
1110 IF C$="U" THEN RO=A(RO,5)
1120 IF C$="D" THEN RO=A(RO,6)
1130 IF RO=3 AND SOP1=0 THEN SCORE=SCORE+10:SOP1=1:GOSUB 3280
1140 IF RO=10 AND DSF=0 THEN SCORE=SCORE+30:DSF=1:GOSUB 3280
1150 RETURN 200
1160 '
1170 'DROP
1180 FLAG=0:OBJECT=0
1190 PRINT
1200 FOR I=1 TO 8
1210 IF TR(I)=200 THEN FLAG=1
1220 NEXT I
1230 IF FLAG=0 THEN PRINT "You aren't carrying anything.":RETURN
1240 FOR I=1 TO 8
1250 IF C$=O1$(I) AND TR(I)=200 THEN OBJECT=I
1260 NEXT I
1270 IF OBJECT=0 THEN PRINT "You're not holding that item.":RETURN
1280 TR(OBJECT)=RO
1290 PRINT "Ok."
1300 RETURN
1310 '
1320 'OPEN
1330 IF C$<>"DOO" AND C$<>"CAB" AND C$<>"VAU" THEN PRINT:PRINT "You can't open that.":RETURN
1340 IF C$<>"DOO" THEN 1400
1350 IF C$="DOO" AND DOOR=0 AND RO=15 THEN PRINT:PRINT "The door is locked.":RETURN
1360 IF C$="DOO" AND DOOR=1 AND RO=15 THEN PRINT:PRINT "The door swings open, revealing a passageway to the north.":DOOR=2:A(10,2)=15:A(15,1)=10:RETURN
1370 IF C$="DOO" AND DOOR=1 AND RO=10 THEN PRINT:PRINT "The door swings open, revealing a passageway to the south.":DOOR=2:A(10,2)=15:A(15,1)=10:RETURN
1380 IF C$="DOO" AND DOOR=2 AND RO=15 OR RO=10 THEN PRINT:PRINT "The door is already open.":RETURN
1390 PRINT:PRINT "You can't see a door here.":RETURN
1400 IF C$<>"VAU" THEN 1440
1410 IF C$="VAUL" AND VAULT=0 AND RO=1 THEN PRINT "You have to type in the correct code for the vault to open.":RETURN
1420 IF C$="VAUL" AND VAULT=1 AND RO=1 THEN PRINT "It's already open.":RETURN
1430 PRINT:PRINT "You can't see the vault here.":RETURN
1440 IF C$="CAB" AND CAB=0 AND RO=14 THEN PRINT "The cabinet is now open.":CAB=1:TR(7)=14:RETURN
1450 IF C$="CAB" AND CAB=1 AND RO=14 THEN PRINT "The cabinet is already open.":RETURN
1460 PRINT:PRINT "You can't see a cabinet here.":RETURN
1470 RETURN
1480 '
1490 'READ
1500 FLAG=0
1510 PRINT
1520 IF C$<>"PLA" THEN 1550
1530 IF RO<>6 THEN PRINT "You don't see the plaque here.":RETURN
1540 PRINT "The plaque reads: 'Press in case of emergency.'":RETURN
1550 FOR I=1 TO 8
1560 IF C$=O1$(I) AND TR(I)=200 THEN FLAG=1
1570 NEXT
1580 IF FLAG=0 THEN PRINT "You don't have that item.":RETURN
1590 HH$=LEFT$(C$,3)
1600 IF HH$<>"NOT" AND HH$<>"NEW" AND HH$<>"SLI" AND HH$<>"FIL" THEN PRINT "You can't read that!":RETURN
1610 IF HH$="NEW" AND TR(2)=200 THEN PRINT "The newspaper reads: 'Signs of MX-13 missles being shipped to Russia...' It":PRINT "goes on but you can't make anymore out.":RETURN
1620 IF HH$="SLI" AND TR(6)=200 THEN PRINT "The slip reads: 'Porch needs fixing and new code is '971'.'":RETURN
1630 IF HH$="FIL" AND TR(7)=200 THEN PRINT "The file reads: 'TOP-SECRET Information on MX-13 and deployment.'":RETURN
1640 IF HH$="NOT" AND TR(3)=200 THEN PRINT "The note reads: 'New scientific breakthrough: analgesic and liquid in beaker":PRINT "makes great acid!'":RETURN
1650 '
1660 'GET
1670 PRINT
1680 IF C$="GUA" OR C$="WOR" THEN PRINT "You can't get that.":RETURN
1690 FLAG=0:HHG=0:OBJECT=0
1700 FOR I=1 TO 8
1710 IF TR(I)=200 THEN HHG=HHG+1
1720 NEXT
1730 IF HHG>=6 THEN PRINT "You can't carry anymore.":RETURN
1740 FOR I=1 TO 8
1750 IF TR(I)=RO OR TR(2)=220 THEN FLAG=1
1760 NEXT I
1770 IF FLAG=0 THEN PRINT "There is nothing here to pick up.":RETURN
1780 IF TR(2)=220 AND C$="NEW" AND TR(4)=220 THEN OBJECT=2:INSERT=0:TR(4)=15:GOTO 1840
1790 IF TR(2)=220 AND C$="NEW" THEN OBJECT=2:INSERT=0:GOTO 1840
1800 FOR I=1 TO 8
1810 IF C$=O1$(I) AND TR(I)=RO THEN OBJECT=I
1820 NEXT
1830 IF OBJECT=0 THEN PRINT "I don't see that object here.":RETURN
1840 TR(OBJECT)=200
1850 PRINT "Ok.":IF TR(7)=200 AND SOP=0 THEN SCORE=SCORE+50:SOP=1:GOSUB 3280
1860 IF OBJECT=4 AND DGF=0 THEN SCORE=SCORE+20:DGF=1:GOSUB 3280
1870 RETURN
1880 '
1890 'INSERT
1900 IF C$<>"NEW" THEN PRINT:PRINT "You can't insert that.":RETURN
1910 INPUT "  Under what";F$:F$=LEFT$(F$,3)
1920 IF F$<>"DOO" THEN PRINT:PRINT "You can't insert the newspaper under that.":RETURN
1930 IF RO<>15 THEN PRINT:PRINT "You can't see a door here.":RETURN
1940 PRINT:PRINT "Ok.":INSERT=1:TR(2)=220
1950 RETURN
1960 '
1970 'ANY OBJECTS IN ROOM?
1980 PRINT
1990 FOR I=1 TO 11
2000 IF TR(I)=RO THEN PRINT O2$(I)
2010 NEXT I
2020 RETURN
2030 '
2040 'HIT
2050 PRINT
2060 IF RO<>15 AND RO<>7 THEN PRINT "I can't use that word here.":RETURN
2070 IF C$<>"DOO" AND C$<>"WOR" THEN PRINT "You can't hit that.":RETURN
2080 IF C$="WOR" THEN GOTO 2150
2090 IF RO=15 AND C$="DOO" AND KEE=0 THEN PRINT "You hear a sound from the other sound of the door.":KEE=1:GOTO 2110
2100 IF RO=15 AND C$="DOO" AND KEE=1 THEN PRINT "It doesn't work this time.":RETURN
2110 IF INSERT=0 THEN PRINT:PRINT "Sorry, because of that last action, there is no way for you to proceed.":GOTO 3330
2120 IF INSERT=1 THEN PRINT:PRINT "There is now something on the newspaper."
2130 TR(4)=220
2140 RETURN
2150 IF RO=7 AND C$="WOR" AND WORKER=0 THEN PRINT "The worker falls over the porch, yelling. As he falls, something falls out":PRINT "of the worker's pocket":TR(8)=7:TR(11)=255:WORKER=1:RETURN
2160 IF RO=7 AND C$="WOR" AND WORKER=1 THEN PRINT "The worker is dead, because of you!":RETURN
2170 RETURN
2180 '
2190 'UNLOCK
2200 PRINT
2210 IF RO<>15 AND RO<>10 THEN PRINT "I can't use that word here.":RETURN
2220 IF C$<>"DOO" THEN PRINT "I can't unlock that.":RETURN
2230 IF TR(4)<>200 THEN PRINT "You have nothing to unlock the door with.":RETURN
2240 IF DOOR=0 THEN PRINT "The door is now unlocked.":DOOR=1:GOTO 2260
2250 IF DOOR=1 OR DOOR=2 THEN PRINT "The door is already unlocked."
2260 RETURN
2270 '
2280 'THROW
2290 IF RO<>10 THEN PRINT:PRINT "I can't use that word here.":RETURN
2300 IF C$<>"BRI" THEN PRINT:PRINT "You can't throw that.":RETURN
2310 INPUT "  At what";F$:F$=LEFT$(F$,3)
2320 IF F$="GUA" AND GUARD=1 THEN PRINT:PRINT "You hit the guard in the back of the head with the brick and he becomes":PRINT "unconsicous.":TR(9)=255:TR(10)=10:GUARD=0:TR(1)=10:SCORE=SCORE+20:GOSUB 3280:RETURN
2330 IF F$="GUA" AND GUARD=0 THEN PRINT:PRINT "The guard is already unconsicous.":RETURN
2340 PRINT "You can't throw the brick at that.":RETURN
2350 '
2360 'PUSH
2370 IF RO<>6 AND RO<>11 AND RO<>12 AND RO<>13 THEN PRINT:PRINT "I can't use that word here.":RETURN
2380 PRINT
2390 IF C$="ONE" THEN PRINT "The elevator doors close...":FOR I=1 TO 100:NEXT:PRINT "Then they open....":RO=11:RETURN
2400 IF C$="TWO" THEN PRINT "The elevator doors close...":FOR I=1 TO 100:NEXT:PRINT "Then they open....":RO=12:RETURN
2410 IF C$="THR" THEN PRINT "The elevator doors close...":FOR I=1 TO 100:NEXT:PRINT "Then they open....":RO=13:RETURN
2420 IF C$="BUT" AND RO=6 AND GHT=0 THEN PRINT "A siren sounds and a worker will be in here any minute. The button goes in so":PRINT "you can't press it again.":SIREN=1::GHT=1:RETURN
2430 IF C$="BUT" AND RO=6 AND GHT=1 THEN PRINT "You can't push the button again.":RETURN
2440 PRINT "You can't push that.":RETURN
2450 RETURN
2460 '
2470 'HIDE
2480 IF RO<>6 THEN PRINT:PRINT "I can't use that word here.":RETURN
2490 INPUT "  In what";F$:F$=LEFT$(F$,3)
2500 IF F$="BOX" THEN PRINT:PRINT "Ok, you are now crouching in the box.":BOX=1:RETURN
2510 PRINT:PRINT "You can't hide in there.":RETURN
2520 REM ** STAND ROUTINE **
2530 IF BOX=0 THEN PRINT:PRINT "You are already standing.":RETURN
2540 IF BOX=1 THEN PRINT:PRINT "Ok, you are now standing outside the box.":BOX=0:RETURN
2550 '
2560 'LOCK
2570 IF RO<>10 AND RO<>15 THEN PRINT:PRINT "I can't use that word here.":RETURN
2580 IF C$<>"DOO" THEN PRINT:PRINT "You can't lock that.":RETURN
2590 IF TR(4)<>200 THEN PRINT:PRINT "You have nothing to lock the door with.":RETURN
2600 IF DOOR=0 THEN PRINT:PRINT "The door is already locked.":RETURN
2610 IF DOOR=1 OR DOOR=2 THEN PRINT:PRINT "Ok, the door is now closed and locked.":DOOR=0:A(15,1)=0:A(10,2)=0:RETURN
2620 RETURN
2630 '
2640 'CLOSE
2650 IF C$<>"DOO" AND C$<>"CAB" THEN PRINT:PRINT "You can't close that.":RETURN
2660 IF C$="DOO" AND DOOR=2 AND RO=15 THEN PRINT:PRINT "The door is now closed.":DOOR=1:A(10,2)=0:A(15,1)=0:RETURN
2670 IF C$="DOO" AND DOOR=2 AND RO=10 THEN PRINT:PRINT "The door is now closed.":DOOR=1:A(15,1)=0:A(10,2)=0:RETURN
2680 IF C$="DOO" AND DOOR=0 OR DOOR=1 AND RO=10 OR RO=15 THEN PRINT:PRINT "The door is already closed.":RETURN
2690 IF C$="CAB" AND CAB=1 AND RO=14 THEN PRINT:PRINT "The cabinet is now closed.":RETURN
2700 IF C$="CAB" AND CAB=0 AND RO=14 THEN PRINT:PRINT "The cabinet is already closed.":RETURN
2710 PRINT "You can't close that here.":RETURN
2720 '
2730 'EXAMINE
2740 PRINT
2750 IF C$="DOO" AND RO=15 OR RO=10 THEN PRINT "The large, wooden door has a keyhole and a small space below it. Through":PRINT "the keyhole you can see a key, unreachable from this side.":RETURN
2760 IF C$="BRI" AND TR(1)=200 THEN PRINT "The brick is just a normal, heavy brick.":RETURN
2770 IF C$="NEW" AND TR(2)=200 THEN PRINT "The newspaper just has some readable writing on it.":RETURN
2780 IF C$="NOT" AND TR(3)=200 THEN PRINT "The note just has some writing on it.":RETURN
2790 IF C$="KEY" AND TR(4)=200 THEN PRINT "I see nothing special about that.":RETURN
2800 IF C$="BEA" AND TR(5)=200 THEN PRINT "I see nothing special about that.":RETURN
2810 IF C$="SLI" AND TR(6)=200 THEN PRINT "The slip of paper just has some writing on it.":RETURN
2820 IF C$="FIL" AND TR(7)=200 THEN PRINT "The file contains top-secret information.":RETURN
2830 IF C$="ASP" AND TR(8)=200 THEN PRINT "The aspirin has 'BUFFERIN' on it.":RETURN
2840 IF C$="GUA" AND TR(9)=RO THEN PRINT "The guard is a hard working employee of the Russians.":RETURN
2850 IF C$="GUA" AND TR(10)=RO THEN PRINT "The guard is unconsicous.":RETURN
2860 IF C$="WOR" AND TR(11)=RO THEN PRINT "The worker has something in his back pocket.":RETURN
2870 IF C$="PLA" AND RO=6 THEN PRINT "The plaque has writing on it.":RETURN
2880 IF C$="BOX" AND RO=6 THEN PRINT "The box is big enough for you to HIDE in it.":RETURN
2890 IF C$="CAB" AND RO=14 AND CAB=1 THEN PRINT "The cabinet is open.":RETURN
2900 IF C$="CAB" AND RO=14 AND CAB=0 THEN PRINT "The cabinet is closed.":RETURN
2910 IF C$="PLU" AND RO=2 AND PLUG=0 THEN PRINT "The plug is connected to an outlet.":RETURN
2920 IF C$="PLU" AND RO=2 AND PLUG=1 THEN PRINT "The plug is not connected to an outlet.":RETURN
2930 PRINT "I can't examine that now.":RETURN
2940 '
2950 'MIX
2960 IF C$<>"ASP" AND C$<>"BEA" THEN PRINT:PRINT "I can't mix that.":RETURN
2970 IF C$="BEA" THEN GOTO 3020
2980 IF C$="ASP" AND TR(8)=200 THEN INPUT "  In what";F$:F$=LEFT$(F$,3)
2990 IF F$="BEA" AND TR(5)=200 THEN PRINT:PRINT "The beaker begins to bubble and inside there is an acidy solution.":TR(8)=255:BEAKER=1:RETURN
3000 IF F$="BEA" THEN PRINT:PRINT "You don't have the beaker.":RETURN
3010 PRINT:PRINT "You can't mix the aspirin with that.":RETURN
3020 INPUT "  With what";F$:F$=LEFT$(F$,3)
3030 IF F$="ASP" AND TR(8)=200 THEN PRINT:PRINT "The beaker begins to bubble and inside there is an acidy solution.":BEAKER=1:TR(8)=255:RETURN
3040 IF F$="ASP" THEN PRINT:PRINT "You don't have the aspirin.":RETURN
3050 PRINT:PRINT "You can't mix that with the beaker.":RETURN
3060 '
3070 'POUR
3080 PRINT
3090 IF RO<>8 THEN PRINT:PRINT "I can't use that word here.":RETURN
3100 IF C$="BEA" OR C$="LIQ" AND BEAKER=0 THEN PRINT:PRINT "The liquid is stuck inside (for now).":RETURN
3110 IF C$="BEA" OR C$="LIQ" AND BEAKER=1 THEN INPUT "  On what";F$:F$=LEFT$(F$,3)
3120 IF F$="WAL" OR F$="NOR" THEN PRINT:PRINT "The wall to the north, becomes a giant hole, allowing you to go that way.":A(8,1)=3:TR(5)=255:RETURN
3130 PRINT:PRINT "You can't pour the liquid on that.":RETURN
3140 '
3150 'PULL
3160 IF RO<>2 THEN PRINT:PRINT "I can't use that word here.":RETURN
3170 IF C$<>"PLU" THEN PRINT:PRINT "You can't pull that.":RETURN
3180 IF PLUG=1 THEN PRINT:PRINT "The plug is already unplugged.":RETURN
3190 PRINT "Ok, the plug is now unplugged.":PLUG=1:RETURN
3200 REM ** TYPE ROUTINE **
3210 IF RO<>1 THEN PRINT:PRINT "I can't use that word here.":RETURN
3220 IF C$<>"971" THEN PRINT:PRINT "You type in the wrong code and a loud siren  sounds. Guards rush in and take":PRINT "you away. You DON'T return.":GOTO 3280
3230 PRINT:PRINT "Congratulations! You got the right code. You rush outside to find that you are":PRINT "inside a large sewer system. But, above you see a man hole, so you climb out.":PRINT "You rush to tell the police your story."
3240 IF TR(7)=200 THEN PRINT "You show the police the file and you are rewarded with a hero's reward!":SCORE=SCORE+70:GOSUB 3280:GOTO 3330
3250 PRINT "You have no proof to show the police, so they lock you up. In exactly five":PRINT "days, the Soviets launch their supply of MX-13 missles on the U.S. All":PRINT "life as you know it, ceases to exist. The human race is never heard of again."
3260 GOTO 3330
3270 '
3280 'SCORE
3290 COLOR 0,7
3300 LOCATE 25,40:PRINT "Score:";SCORE
3310 COLOR 7,0:RETURN
3320 '
3330 'SCORING
3340 PRINT:PRINT "Out of 200 points, you got ";SCORE;" points."
3350 PRINT:INPUT "Would you like to play again";F$:F$=LEFT$(F$,1)
3360 IF F$="y" OR F$="Y" THEN 3410
3370 IF F$="n" OR F$="N" THEN PRINT:PRINT "Ok.":PRINT:PRINT:END
3380 PRINT "Please answer the question."
3390 GOTO 3350
3400 '
3410 RO=17:SOP=0:SOP1=0:DOOR=0:KEE=0:SCORE=0:GUARD=0:BOX=0:BEAKER=0:DSF=0:DGF=0
3420 TR(1)=17:TR(2)=17:TR(3)=8:TR(4)=255:TR(5)=8:TR(6)=5:TR(7)=255:TR(8)=16
3430 CLS:GOTO 120
3440 '
3450 'ROOM DESCRIPTIONS
3460 COLOR 0,7
3470 LOCATE 25,1:PRINT SPACE$(80);
3480 LOCATE 25,1:PRINT ROOM$(RO)
3490 LOCATE 25,40:PRINT "Score:";SCORE
3500 COLOR 7,0
3510 ON RO GOSUB 3540,3600,3680,3740,3800,3850,3920,3970,4030,4080,4140,4200,4260,4320,4380,4450,4520
3520 RETURN
3530 '
3540 'ROOM 1
3550 PRINT "Vault Room"
3560 PRINT "You are inside a very large room which is the exit to the outside world. But"
3570 PRINT "before every person gets outside, they must pass through a giant, metal vault"
3580 PRINT "which has a large keyboard attached to it."
3590 RETURN
3600 REM ROOM TWO
3610 PRINT "Maintence Room"
3620 PRINT "This is a room where maintence equipment is stored. There are many  brooms,"
3630 PRINT "dustpans and mops around here. A dark passage way leads to the south, while"
3640 PRINT "a lighted way leads to the east. There is a plug on the east wall connect"
3650 PRINT "to an outlet."
3660 RETURN
3670 '
3680 'ROOM 3
3690 PRINT "Secret Room"
3700 PRINT "You are in a secret room behind the base labrotory. The hole in the south"
3710 PRINT "wall is smaller on this side, preventing you from going south."
3720 RETURN
3730 '
3740 'ROOM 4
3750 PRINT "Hallway"
3760 PRINT "This is a non descript hallway running north and south."
3770 RETURN
3780 RETURN
3790 '
3800 'ROOM 5
3810 PRINT "Repair Closet"
3820 PRINT "This is a repair closet where hammers, nails and screwdrivers are kept. The"
3830 PRINT "only exits is the way you came."
3840 RETURN
3850 REM ROOM SIX
3860 PRINT "Storage Room";:IF BOX=1 THEN PRINT " (crouching in the box)"
3870 PRINT "You are in a storage room where miscellanous equipment is stored. There is a"
3880 PRINT "large, heavy box in the south corner. To the east is a balcony. Also on the"
3890 PRINT "north wall, there is a button with a small plaque beneath it."
3900 RETURN
3910 '
3920 'ROOM 7
3930 PRINT "Balcony"
3940 PRINT "This is an old, crumbling balcony."
3950 RETURN
3960 '
3970 'ROOM 8
3980 PRINT "Laboratory"
3990 PRINT "You are in a scientific laboratory where great experiments are done. The usual"
4000 PRINT "array of supplies and equipment is here. The north wall is a bit less solid":PRINT "then the others."
4010 RETURN
4020 '
4030 'ROOM 9
4040 PRINT "Hallway"
4050 PRINT "This is a very non-descript hallway running east to west."
4060 RETURN
4070 '
4080 'ROOM 10
4090 PRINT "Guard Room"
4100 PRINT "You are in a guard room, where a guard is supposed to guard the cell to the"
4110 PRINT "south. Passageways run off in three directions."
4120 RETURN
4130 '
4140 'ROOM 11
4150 PRINT "Elevator"
4160 PRINT "This is an elevator connecting all three levels of the base. There is a panel"
4170 PRINT "here with three buttons labeled 1,2 and 3."
4180 RETURN
4190 '
4200 'ROOM 12
4210 PRINT "Elevator"
4220 PRINT "This is an elevator connecting all three levels of the base. There is a panel"
4230 PRINT "here with three buttons labeled 1,2 and 3."
4240 RETURN
4250 '
4260 'ROOM 13
4270 PRINT "Elevator"
4280 PRINT "This is an elevator connecting all three levels of the base. There is a panel"
4290 PRINT "here with three buttons labeled 1,2 and 3."
4300 RETURN
4310 '
4320 'ROOM 14
4330 PRINT "Record Room"
4340 PRINT "This is a record room where top secret information is kept. There is a file"
4350 PRINT "cabinet on the west wall and a camera on the west wall near the ceiling."
4360 RETURN
4370 '
4380 'ROOM 15
4390 PRINT "North Cell"
4400 PRINT "This is a north cell where top security prisoners are kept. There is a"
4410 PRINT "large, wooden door on the north wall. To the south a light can be seen."
4420 IF INSERT=1 THEN PRINT "Under the door, you can see a newspaper."
4430 RETURN
4440 '
4450 'ROOM 16
4460 PRINT "Missle site"
4470 PRINT "This is a large room in the shape of a missle silo, where a very important"
4480 PRINT "missle is kept. The rounded ceiling is partly open, awaiting the preparation"
4490 PRINT "of the MX-13, being kept in the center of the room."
4500 RETURN
4510 '
4520 'ROOM 17
4530 PRINT "South Cell"
4540 PRINT "You are in a cell where prisoners are kept. The second part of this two room"
4550 PRINT "cell is to the north while a crack in the ceiling is letting in a large amount"
4560 PRINT "of light."
4570 RETURN
4580 '
4590 'INITIALIZE
4600 SCORE=0:RO=17:GUARD=1:FLAG=0:KEE=0:DOOR=0
4610 A(15,7)=99 'PROBLEM DOOR 1
4620 A(8,7)=100 'PROBLEM DOOR 2
4630 FOR X=1 TO 17:FOR Y=1 TO 6:READ A(X,Y):NEXT Y,X 'THE ROOMS
4640 FOR X=1 TO 11:READ O1$(X),O2$(X),TR(X),IN$(X):NEXT X
4650 FOR I=1 TO 17:READ ROOM$(I):NEXT I 'ROOM NAMES
4660 RETURN
4670 '
4680 'ROOM DATA
4690 DATA 0,4,0,0,0,0:REM ROOM 1
4700 DATA 0,8,3,0,0,0:REM ROOM 2
4710 DATA 0,0,0,2,0,0:REM ROOM 3
4720 DATA 1,10,5,0,0,0:REM ROOM 4
4730 DATA 0,0,0,4,0,0:REM ROOM 5
4740 DATA 0,12,7,0,0,0:REM ROOM 6
4750 DATA 0,0,0,6,0,0:REM ROOM 7
4760 DATA 0,0,9,0,0,0:REM ROOM 8
4770 DATA 0,14,10,8,0,0:REM ROOM 9
4780 DATA 4,0,11,9,0,0:REM ROOM 10
4790 DATA 0,0,0,10,0,0:REM ROOM 11
4800 DATA 6,0,0,0,0,0:REM ROOM 12
4810 DATA 0,16,0,0,0,0:REM ROOM 13
4820 DATA 9,0,0,0,0,0:REM ROOM 14
4830 DATA 0,17,0,0,0,0:REM ROOM 15
4840 DATA 13,0,0,0,0,0:REM ROOM 16
4850 DATA 15,0,0,0,0,0:REM ROOM 17
4860 '
4870 DATA "BRI","There is a brick on the floor near you.",17,"a brick"
4880 DATA "NEW","On the floor, there is an old newspaper.",17,"a newspaper"
4890 DATA "NOT","There is a note laying nearby.",8,"a note"
4900 DATA "KEY","There is a shining key here.",255,"a key"
4910 DATA "BEA","There is a scientific beaker full of liquid near you.",8,"a beaker full of liquid"
4920 DATA "SLI","There is a slip of paper lying here.",5,"a slip"
4930 DATA "FIL","A file containing important information is here.",255,"a file"
4940 DATA "ASP","There is a aspirin here.",255,"an aspirin"
4950 DATA "GUA","There is an alert guard here.",10,""
4960 DATA "GUA","There is an unconsicous guard here.",255,""
4970 DATA "WOR","There is a missle worker here.",16,""
4980 '
4990 DATA Vault Room,Maintence Room,Secret Room,Hallway,Repair Closet
5000 DATA Storage Room,Balcony,Laboratory,Hallway,Guard Room,Elevator
5010 DATA Elevator,Elevator,Record Room,North Cell,Missle Site
5020 DATA South Cell
5030 '
5040 END 'ESCAPE FROM SSADB BY MENCO, INC.
```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0390

     Volume in drive A has no label
     Directory of A:\

    ABC      BAS     54403   6-24-87  10:39a
    ABC      DOC      8127   6-24-87  10:39a
    ACQB     EXE     50176   6-24-87  10:38a
    BABY     EXE     37760   6-24-87  10:38a
    BRICK    EXE     18688   6-24-87  10:38a
    EMPIRE   BAS     17643   6-24-87  10:39a
    FILES390 TXT      1764   6-24-87  11:56a
    FLIGHTM  EXE     42752   6-24-87  10:38a
    QUIMBEE  EXE     60352   5-24-87   9:33p
    QUIMBEE  MAN     30286   5-25-87   4:08p
    README   BAT      8313   6-24-87  10:39a
    SOVIET   BAS     21243   6-24-87  10:38a
    SOVIET   DOC      2688   6-24-87  10:39a
           13 file(s)     354195 bytes
                            3072 bytes free
