---
layout: page
title: "PC-SIG Diskette Library (Disk #13)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0013/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0013"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "PDRAW"

    This disk contains two sections.  STARTREK is a fine implementation of
    the game that has been around since time sharing has been popular on
    college campuses.  The game runs under BASIC and has sound effects.
    PDRAW is a simple line, circle, square, etc. drawing program.  It
    doesn't require a mouse, and has color fill for the enclosed areas of
    your drawing, not real powerful but a good starting program.  Last and
    least IBMSONG is something that everyone should see at least once.
    
    System Requirements: Some programs require color graphics; printer
    recommended.
    
    How to Start:  To run BASIC programs consult the directions in GETTING
    STARTED for your configuration.  Consult PDRAW.DOC for program
    documentation.
    
    File Descriptions:
    
    PDRAW    DOC  Comprehensive documentation of PDRAW package  (15K)
    COLOR    BAS  Color sub-program
    PDRAW    BAS  Drawing program
    MONO     BAS  Monochrome sub-program
    ???      BAT  Batch files used by PDRAW (4 files)
    ???      PIC  Pictures used by PDRAW (6 files)
    STARTREK BAS  Starship Enterprise - space war with sound effects
    STARTREK HOW  Screens of instructions - invoked by BASIC program
    STARTREK DUM  Data file used by program
    IBMSONG  BAS  IBM rally song - lyrics & bouncing ball - 80 screen
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## COLOR.BAS

```bas
5 'SAVE "CB"
100 KEY OFF: CLS
200 WIDTH 80: DEF SEG=0: A=PEEK(&H410): POKE &H410,(A AND &HCF) OR &H20
210 WIDTH  40: LOCATE ,,1,6,7
220 SYSTEM
```

## IBMSONG.BAS

```bas
4 WIDTH 80
5 ON ERROR GOTO 9500
6 PLAY ("P64")
10 GOSUB 9000
30 B$=CHR$(2)
40 DIM N$(165)
50 DIM L$(15)
60 DIM B%(253)
70 X% = 165
80 FOR I% = 1 TO X%
90 READ N$(I%)
100 NEXT I%
110 RESTORE 790
120 FOR I% = 1 TO 15
130 READ L$(I%)
140 NEXT I%
150 RESTORE 960
160 FOR I% = 1 TO 253
170 READ B%(I%)
180 NEXT I%
181 PRINT "(Press any key to begin.)";
183 IF INKEY$ = "" THEN 183
190 CLS
200 FOR I% = 1 TO 9
210 PRINT : PRINT L$(I%)
220 NEXT I%
230 R% = 1
240 S% = 1
250 B1% = 0
260 FOR I% = S% TO 165
270 C% = B%(I%+B1%)
280 IF C% > 0 THEN GOTO 310
290 C% = -C%
300 R% = R% + 2
310 LOCATE R%,C%
320 PRINT B$
330 PLAY N$(I%)
340 LOCATE  R%,C%
350 PRINT " "
360 NEXT I%
370 IF B1% = 0 THEN 380
371 LOCATE 21,1
372 PRINT "Transcription of music and lyrics from a copy of a copy... of 'Ever Onward,'"
373 PRINT "and program written by Alden B. Johnson."
374 END
380 B1% = 88
390 S% = 78
400 CLS
410 COLOR 0,7
420 LOCATE 1,30
430 PRINT "Second Chorus"
440 COLOR 7,0
450 LOCATE 3,1
460 FOR I% = 10 TO 15
470 PRINT L$(I%)
480 PRINT
490 NEXT I%
500 R% = 2
510 GOTO 260
520 END
530 DATA MF T170 L8 MN O3 B4,B8,O4 D4,D8,O3 G4,G8,B4,B8,E4,E8,E4,E8
540 DATA ML E4.E4 MN P64,E8,F#4,E8,D4,E8,F#4,G8,A4,A#8,ML B4.B4.B4. MN P64
550 DATA D4.,B4,B8,O4 D4,D8,O3 G4,G8,B4,B8,E4,E8,E4,E8,ML E4.E4 MN P64
570 DATA F8,F#4,E8,D4,E8,F#4,G8,A4,B8,ML G4.P64,G4.P64,G4.G4 P64 MN,G8
590 DATA F#4,F#8,A4,A8,O4 D4,D8,O3 A4,A8,F#4,F#8,A4,A8,ML O4 D4.D4 P64 MN,D8
610 DATA D4,D8,D4,D8,D4,D8,D4,D8,D4,C8,O3 A4,F#8,D4.
630 DATA O3 D4.,E4.,F#4.,G4.,F#4.,G4.,G#4.,A4.,G4,A8,B4,G8
650 DATA A4,B8,A4,G8,E4.,ML E4.E4 P64 MN,E8,D#4,E8,G4,F#8,F#4,F8
670 DATA F#4.,F4,F#8,A4,G8,G4,F#8,G4.,F#4,G8,B4,A8,A4,G#8
690 DATA A4,E8,F#4,G8,A4.,ML A4.A4 P64 MN,D8,C#4,D8,G4.,G4.
710 DATA ML G4.G4 P64 MN,D8,E4.,F4.,ML G4.G4 P64 MN,G#8,A4,A8,A4,B8
730 DATA O4 C#4,C#8,O3 B4,A8,O4 ML D4.D4.D4 P64 MN,C8,O3 A4,F#8,D4.,E4.,F#4.,G4.
750 DATA F#4,F#8,G4,G8,G#4,G#8,A8,G#8,A8,B4,O4 C8,D4,E8,O3 B4.,A4.
770 DATA ML G4.G4.G4 MN
790 DATA"There's a feel-ing ev'ry where of big-ger things in store. Of new hor-i-zons"
800 DATA"com-ing in-to view. Our aim is clear: To make each year ex-ceed the one be-fore"
810 DATA"Stay-ing in the lead in ev'ry-thing we do. The will to win is built right in."
820 DATA"It will not be de-nied. And we will go a-head we know by work-ing side by side."
830 DATA"Ev-er On-ward, Ev-er On-ward That's the spir-it that has brought us fame."
840 DATA"We're big but big-ger we will be. We can't fail for all can see that to serve"
850 DATA"hu-man-i-ty has been our aim; Our pro-ducts now are known in ev'ry zone."
860 DATA"Our rep-u-ta-tion spark-les like a gem, We've fought our way thru and new"
870 DATA"Fields we're sure to con-quer too for the Ev-er On-ward  I B M"
880 DATA"Ev-er On-ward, Ev-er On-ward We're bound for the top to nev-er fall."
890 DATA"Right here and now we thank-ful-ly pledge sin-cer-est loy-al-ty to the"
900 DATA"cor-por-a-tion that's the best of all. Our lead-ers we re-vere,"
910 DATA"and while we're here, Let's show the world just what we think of them!"
920 DATA"So let us sing men, sing men, once or twice then sing a-gain for the"
930 DATA"                              Ev-er On-ward  I B M"
960 DATA 3,9,12,17,21,23,28,32,36,39,45,50,55,60,64,68,71,74
980 DATA -2,6,9,12,17,22,26,29,34,39,43,48,53,57,61,66,70,73,78
1000 DATA -2,3,7,10,14,18,22,26,28,32,37,40,45,49,53,57,60,65,71,75
1020 DATA -1,6,10,13,16,20,26,29,33,37,40,43,47,51,55,59,64,68,72,77
1040 DATA -1,4,7,11,16,19,22,26,32,38,43,46,50,55,61,66,70,70
1060 DATA -3,8,12,16,20,23,27,31,35,40,45,50,54,58,62,66,70,75
1080 DATA -1,5,8,10,14,18,23,27,27,32,36,40,46,50,55,59,63,65,70
1100 DATA -2,6,9,11,15,21,26,30,34,37,43,49,55,59,63,68,72
1120 DATA -3,10,15,19,23,27,32,36,40,44,46,49,53,58,60,62
1140 DATA 1,4,7,11,16,19,22,26,32,38,43,47,51,54,58,61,66,66
1160 DATA -3,8,13,17,20,25,30,33,38,44,48,52,56,59,62,65,69
1180 DATA -2,6,9,12,18,24,28,32,36,36,41,46,50,53,56,60
1200 DATA -2,7,13,18,24,30,35,40,45,50,54,59,63,68
1220 DATA -1,5,8,12,17,22,27,32,36,41,46,51,55,58,63,67
1240 DATA -31,34,37,41,46,48,50
1250 END
9000 COLOR 7,0
9010 KEY OFF
9020 CLS
9030 DIM H$(9)
9040 H$(1)="In the legend of IBM, there are tales of a ritual frequently performed"
9050 H$(2)="long, long ago in sales meetings, far, far away.  This ritual involved"
9060 H$(3)="young salesmen and centered around a small book of chants, or songs.  It is"
9070 H$(4)="said that these songs were a source of great inspiration to the salesforce"
9080 H$(5)="as it prepared to go out into the world. Although this ritual is no longer"
9090 H$(6)="practiced, one of the songs has nevertheless survived, being copied and"
9100 H$(7)="passed down through generation after generation of IBMers."
9110 H$(8)="The IBM Philharmonic Computer presents:"
9120 FOR I% = 1 TO 8
9130 PRINT H$(I%)
9140 NEXT I%
9150 COLOR 0,7
9160 LOCATE 9,25
9170 PRINT CHR$(201);:FOR I% = 1 TO 30:PRINT CHR$(205);:NEXT I%:PRINT CHR$(187)
9180 L$ = CHR$(186)
9190 L1$ = L$ + SPACE$(30) + L$
9200 LOCATE 10,25:PRINT L$+"       IBM Rally Song         "+L$
9210 LOCATE 11,25:PRINT L1$
9220 LOCATE 12,25:PRINT L$+"         ";
9230 COLOR 15,0:PRINT"EVER ONWARD";:COLOR 0,7
9240 PRINT "          "+L$
9250 FOR I% = 13 TO 20: LOCATE I%,25: PRINT L1$: NEXT I%
9260 LOCATE 21,25:PRINT L$+"    Written especially for    "+L$
9270 LOCATE 22,25:PRINT L$+"       IBM Corporation        "+L$
9280 LOCATE 23,25
9290 PRINT CHR$(200);:FOR I% = 1 TO 30:PRINT CHR$(205);:NEXT I%:PRINT CHR$(188)
9300 COLOR 7,0
9340 RETURN
9500 CLS
9510 PRINT "This program requires ADVANCED BASIC; Please reload, using BASICA"
9520 END
```

## MONO.BAS

```bas
5 'SAVE "BB"
100 KEY OFF: CLS
200 WIDTH 40: DEF SEG=0: A=PEEK(&H410): POKE &H410,A OR &H30
210 WIDTH  80: LOCATE ,,1,12,13
220 SYSTEM
```

## PDRAW.BAS

```bas
1000 GOTO 5000
1010 C$=INKEY$: IF C$="" GOTO 1010
1020 IF LEN(C$)=1 THEN C=ASC(C$) ELSE C=ASC(MID$(C$,2))
1030 RETURN
1040 GET (CX-10,CY-8)-(CX+10,CY+8),UCUR: PUT (CX-10,CY-8),CUR,>=: RETURN
1050 PUT (CX-10,CY-8),UCUR,PSET: ECOL=POINT(CX,CY): RETURN
1060 GOSUB 1050: T=C-71
1070 CX=CX+RX*DX(T)
1080 IF CX<10 THEN CX=10: BEEP ELSE IF CX>299 THEN CX=299: BEEP
1090 CY=CY+RY*DY(T)
1100 IF CY<8 THEN CY=8: BEEP ELSE IF CY>183 THEN CY=183: BEEP
1110 ON SKETCH GOTO 1345,1390,1355,1365,1415,1375,1040,1040,1480,1040
1120 T=C-48: IF T=0 THEN RX=PIC(0)/2: RY=PIC(1): RETURN
1130 RX=(8*(T)-4)/3: RY=2*(T)-1: RETURN
1140 COLOR BACK: GOSUB 1010: IF C<>32 THEN RETURN 5020
1150 BACK=BACK+1: IF BACK>15 THEN BACK=0
1160 GOTO 1140
1170 GET (124,90)-(195,107),HOLD
1180 COLOR ,PAL
1190 LINE (124,90)-(147,107),1,BF:LINE(148,90)-(171,107),2,BF: LINE (172,90)-(195,107),3,BF
1200 GOSUB 1010: IF C<>32 THEN PUT (124,90),HOLD,PSET: RETURN 5020
1210 PAL=1-PAL: GOTO 1180
1220 GET (124,90)-(195,107),HOLD
1230 LINE (124,90)-(195,107),COL,BF
1240 GOSUB 1010: IF C<>32 THEN PUT (124,90),HOLD,PSET: RETURN 5020
1250 COL=COL+1: IF COL>3 THEN COL=0
1260 GOTO 1230
1270 GET (124,90)-(195,107),PIC
1280 LINE (124,90)-(195,107),BND,BF
1290 GOSUB 1010: IF C<>32 THEN PUT (124,90),PIC,PSET: RETURN 5020
1300 BND=BND+1: IF BND>3 THEN BND=0
1310 GOTO 1280
1320 COL=BND: RETURN
1330 ON C-58 GOTO 1340,1380,1350,1362,1410,1370,1220,1270,1470,1560
1340 GOSUB 1050
1345 LX=CX: LY=CY: PSET (CX,CY),BND: GOSUB 1040: RETURN
1350 GOSUB 1050
1355 LINE (LX,LY)-(CX,CY),BND: GOSUB 1040
1360 OX=LX: OY=LY: LX=CX: LY=CY: RETURN
1362 GOSUB 1050
1365 LINE(LX,LY)-(CX,CY),BND: GOTO 1040
1370 GOSUB 1050
1375 LINE (LX,LY)-(CX,CY),BND,B: GOSUB 1040: RETURN
1380 GOSUB 1050
1390 TX=ABS(CX-LX): TY=6*ABS(CY-LY)/5: CIRCLE (LX,LY),SQR(TX*TX+TY*TY),BND: GOTO 1040
1410 GOSUB 1050
1415 PAINT (CX,CY),COL,BND: GOSUB 1040: RETURN
1430 ON C-103 GOTO 1670,1630,1440,1820,1440,4000,1140,1170,1570,1850
1440 BEEP: RETURN
1470 GOSUB 1050
1480 IF CX+PIC(0)/2>320 THEN BEEP: GOTO 1040
1490 TY=PIC(1): IF CY+PIC(1)>200 THEN PIC(1)=200-CY
1500 ON PMODE GOSUB 1520,1530,1540,1550
1510 PIC(1)=TY: GOTO 1040
1520 PUT (CX,CY),PIC,PSET: RETURN
1530 PUT (CX,CY),PIC,>=: RETURN
1540 PUT (CX,CY),PIC,OR: RETURN
1550 PUT (CX,CY),PIC,AND: RETURN
1560 GOSUB 1050: GET (LX,LY)-(CX,CY),PIC: GOSUB 1040: RETURN
1570 GET (124,90)-(195,107),HOLD
1580 T$="PSETXOR  OR AND "
1590 LOCATE 13,19: PRINT " ";MID$(T$,4*PMODE-3,4);" ";
1600 GOSUB 1010: IF C<>32 THEN PUT (124,90),HOLD,PSET: RETURN 5020
1610 PMODE=PMODE+1: IF PMODE>4 THEN PMODE=1
1620 GOTO 1590
1621 SKETCH=C-83: RETURN
1630 TYPE$="loaded": GOSUB 1710
1640 ON ERROR GOTO 1835
1645 IF NAMEF$="" THEN RETURN
1650 DEF SEG=&HB800
1653 BLOAD DRIVE$+":"+NAMEF$+".pic",0
1660 GOTO 1040
1670 TYPE$="saved": GOSUB 1710
1680 ON ERROR GOTO 1700
1681 IF NAMEF$="" THEN RETURN
1690 GOSUB 1050
1691 GOSUB 1050: DEF SEG=&HB800: BSAVE DRIVE$+":"+NAMEF$+".pic",0,&H4000: GOTO 1040
1694 DEF SEG=&HB800: BSAVE DRIVE$+":"+NAMEF$+".pic",0,&H4000:GOTO 1040
1700 LOCATE 1,1: PRINT "Unable to save picture ";: GOSUB 1010: PUT (0,0),HOLD,PSET: GOSUB 1040: RESUME 5020
1710 GET (0,0)-(319,7),HOLD
1720 LOCATE 1,1: PRINTSPACE$(39);: LOCATE 1,1
1730 PRINT"Name of picture to be ";TYPE$;
1740 LINE INPUT ": ";NAMEF$
1750 IF NAMEF$="" GOTO 1810
1760 NAMEF$=LEFT$(NAMEF$,8)
1770 LOCATE 1,1: PRINTSPACE$(39);: LOCATE 1,1
1780 LINE INPUT;" Drive picture is on (default=A): ";DRIVE$
1790 IF DRIVE$="" THEN DRIVE$="A"
1800 IF DRIVE$="a" OR DRIVE$="A" OR DRIVE$="b" OR DRIVE$="B" GOTO 1810 ELSE GOTO 1770
1810 PUT (0,0),HOLD,PSET: RETURN
1820 GET (0,0)-(319,31),HOLD: GOSUB 1770
1825 ON ERROR GOTO 1835
1830 LOCATE 1,1: FILES DRIVE$+":*.PIC": GOTO 1840
1835 LOCATE 1,1: PRINT "Picture not found ";
1840 GOSUB 1010: PUT (0,0),HOLD,PSET: RESUME 5020
1850 GOSUB 1050: LOCATE (CY+4)/8,(CX+4)/8: LINE INPUT "";T$: GOTO 1040
2000  ON C-93 GOTO 2100,2200,2300,2400,3000,2500,1440,2600,1440,2700
2100 T=BND: BND=ECOL: GOSUB 1340: BND=T: RETURN
2200 T=BND: BND=ECOL: GOSUB 1380: BND=T: RETURN
2300 T=BND: BND=ECOL: LX=OX: LY=OY: GOSUB 1362: BND=T: RETURN
2400 T=BND: BND=ECOL: GOSUB 1362: BND=T: RETURN
2500 T=BND: BND=ECOL: GOSUB 1370: BND=T: RETURN
2600 GOSUB 1050: LINE (LX,LY)-(CX,CY),COL,BF: GOSUB 1040: RETURN
2700 CLS: GOSUB 1040: RETURN
3000 DRIVE$="B":NAMEF$="HELP2":GOSUB 1690
3100 NAMEF$="help1":GOSUB 1650:GOSUB 1050:GOSUB 1010
3200 NAMEF$="help2":GOSUB 1650:GOTO 5010
3500 IF TYPE$="loaded" GOTO 1835
3600 GOTO 1700
4000 ON ERROR GOTO 4500
4010 LPRINT CHR$(14) "    DRAW PROGRAM FUNCTION KEYS"
4020 LPRINT CHR$(27) "________________________________________________________________________________"
4030 LPRINT "    FUNCTION         ALONE           WITH            WITH            WITH"
4040 LPRINT "      KEY                           SHIFT            CTL             ALT"
4050 LPRINT "________________________________________________________________________________"
4060 LPRINT "      F1             DRAW           SKETCH           ERASE            SAVE"
4070 LPRINT "                     POINT          POINT            POINT          PICTURE"
4080 LPRINT "--------------------------------------------------------------------------------"
4090 LPRINT "      F2             DRAW           SKETCH           ERASE            LOAD"
4100 LPRINT "                    CIRCLE          CIRCLE           CIRCLE         PICTURE"
4110 LPRINT "--------------------------------------------------------------------------------"
4120 LPRINT "      F3          DRAW CONTIN     SKETCH CONT     ERASE CONTIN      N/A"
4130 LPRINT "                     LINE            LINE            LINE"
4140 LPRINT "--------------------------------------------------------------------------------"
4150 LPRINT "      F4             DRAW           SKETCH           ERASE          LIST"
4160 LPRINT "                     LINE            LINE            LINE         PICTURES"
4170 LPRINT "--------------------------------------------------------------------------------"
4180 LPRINT "      F5             PAINT          SKETCH           HELP           N/A"
4190 LPRINT "                                    PAINT           (SCREEN)"
4200 LPRINT "--------------------------------------------------------------------------------"
4210 LPRINT "      F6             DRAW           SKETCH           ERASE          HELP"
4220 LPRINT "                     BOX             BOX              BOX          (PRINTER)"
4230 LPRINT "--------------------------------------------------------------------------------"
4240 LPRINT "      F7          SET COLOR:        SKETCH            N/A          SET COLOR:"
4250 LPRINT "                   PAINT             OFF                           BACKGROUND"
4260 LPRINT "--------------------------------------------------------------------------------"
4270 LPRINT "      F8          SET COLOR:        SKETCH           CLEAR         SET COLOR:"
4280 LPRINT "                    DRAW             OFF              BOX           PALETTE"
4290 LPRINT "--------------------------------------------------------------------------------"
4300 LPRINT "      F9             PUT            SKETCH            N/A          SET MODE:"
4310 LPRINT "                    OBJECT        PUT OBJECT                       PUT OBJECT"
4320 LPRINT "--------------------------------------------------------------------------------"
4330 LPRINT "      F10            GET            SKETCH           CLEAR            TYPE"
4340 LPRINT "                    OBJECT           OFF             SCREEN           TEXT"
4350 LPRINT "--------------------------------------------------------------------------------"
4450 GOSUB 1010
4460 RETURN 5020
4500 GET (0,0)-(319,0),HOLD
4510 LOCATE 1,1
4515 X=ERR:Y=ERL
4520 PRINT "Printer not ready";
4525 PRINT X "ERROR NO   " Y "LINE"
4530 GOSUB 1010
4540 RESUME 5020
5000 GOSUB 5070
5010 ON ERROR GOTO 3500
5015 GOSUB 1010
5020 IF C>=48 AND C<=57 THEN GOSUB 1120
5030 IF C>=59 AND C<=68 THEN GOSUB 1330
5040 IF C>=71 AND C<=81 THEN GOSUB 1060
5045 IF C>=84 AND C<=93 THEN GOSUB 1621
5047 IF C>=94 AND C<=103 THEN GOSUB 2000
5050 IF C>=104 AND C<=113 THEN GOSUB 1430
5060 GOTO 5010
5070 DEFINT A-Z
5080 DIM PIC(8001),CUR(52),UCUR(52),DX(10),DY(10),HOLD(1281)
5100 BACK=9: PAL=0: COL=2: BND=1: PMODE=2: SKETCH=10
5110 KEY OFF: SCREEN 1,0: COLOR BACK,PAL
5130 CLS: GET (0,0)-(0,0),PIC
5140 LINE (0,8)-(6,8): LINE (14,8)-(20,8)
5150 LINE (10,0)-(10,4): LINE (10,12)-(10,16)
5160 GET (0,0)-(20,16),CUR
5180 CLS: CX=159: CY=99: GOSUB 1040: GOSUB 1340: C=57: GOSUB 1120
5190 DATA -1,-1,0,-1,1,-1,0,0,-1,0,0,0,1,0,0,0,-1,1,0,1,1,1
5200 FOR I=0 TO 10: READ DX(I),DY(I): NEXT
5210 FOR I=1 TO 10: KEY I,"": NEXT
5220 RETURN
```

## STARTREK.BAS

```bas
100 CLS
105 RANDOMIZE (VAL(MID$(TIME$,7,2)))
110 KEY OFF
120 LOCATE 10,20 : COLOR 0,7
130 PRINT "  Do you want sound effects  [y/n] ?  " : COLOR 7,0
140 A$=INPUT$(1)
150 IF (A$="y") OR (A$="Y") THEN NOISE=1 ELSE NOISE=0
160 REM ==================>> STARTREK    IBM/PC  Version 1.0         2/12/82
170 SSW=0                  ' subroutine call switch
180 DIM Q$(5),D$(6)
190 READ Q$(1),Q$(2),Q$(3),Q$(4),Q$(5),D$(1),D$(2),D$(3),D$(4),D$(5),D$(6)
200 REM ===============
210 GOSUB 6670
220 REM === gosub 5660
230 DIM G(8,8),Q(8,8),D(6),K(9,3),N(3),C$(20)
240 REM ========================================
250 DATA ".","E","K","B","*","Warp Engines","S.R. Sensors","L.R. Sensors"
260 DATA "Phaser Control","Photon Tubes","Damage Control"
270 REM =======================================================================
280 T0 = INT(RND*20+20)*100
290 T = T0
300 T9 = 40
310 E0 = 3000                     ' Initial energy level
320 E=3000
330 P0 = 10
340 P = 10
350 S9 = 200
360 DEF FND(D)=SQR((K(I,1)-S1)^2+(K(I,2)-S2)^2)
370 Q1 = INT(RND*8+1)
380 Q2 = INT(RND*8+1)
390 REM ==  mat d(0)
400 S1 = INT(RND*8+1)
410 S2 = INT(RND*8+1)
420 REM =========================   Set up Galaxy  ============================
430 LOCATE 10,20: COLOR 16,7
440 PRINT"  Enterprise being prepared for battle  "
450 COLOR 7,0
460 B9 = 0
470 K9 = 0
480 FOR I = 1 TO 8
490    FOR J = 1 TO 8
500      R = RND*64
510      K3 = 0
520      IF R < 0.001 THEN 540
530      GOTO 550
540      K3 = K3 +1
550      IF R<0.2 THEN 570
560      GOTO 580
570      K3=K3+1
580      IF R<0.4 THEN 600
590      GOTO 610
600      K3=K3+1
610      IF R<1. THEN 630
620      GOTO 640
630      K3=K3+1
640      IF R<3.2 THEN 660
650      GOTO 670
660      K3=K3+1
670      IF R<4.28 THEN 690
680      GOTO 700
690      K3=K3+1
700      IF R<4.28 THEN 720
710      GOTO 730
720      K3=K3+1
730      IF R < 7.28 THEN 750
740      GOTO 760
750      K3 = K3 + 1
760      IF R < 13.28 THEN 780
770      GOTO 790
780      K3 = K3 +1
790      K9 = K9 + K3
800      B3 = 0
810      IF RND > 0.96 GOTO 830
820      GOTO 840
830      B3=1
840      B9 = B9 + B3
850      S3=INT(RND*8+1)
860      G(I,J) = K3*100+B3*10+S3
870    NEXT J
880 NEXT I
890 REM ==============================================================
900 K0=K9
910 IF B9>0 GOTO 960
920    I = RND*8+0.5
930    J = I
940    G(I,J) = G(I,J)+10
950    B9=1
960 GOTO 5450
970 REM ==============================================================
980 REM ======================>>  Set up Quadrant
990 CLS
1000 K3=0
1010 B3=K3
1020 S3=B3
1030 IF Q1<1 THEN 1120
1040   IF Q1>8 THEN 1120
1050 IF Q2<1 THEN 1120
1060 IF Q2>8 THEN 1120
1070 X=G(Q1,Q2)/100
1080 K3=INT(X)
1090 B3=INT((X-K3)*10)
1100 S3=G(Q1,Q2)-INT(G(Q1,Q2)*0.1)*10
1110 REM  mat k(0)
1120 FOR I = 1 TO 8
1130   FOR J = 1 TO 8
1140     Q(I,J)=0
1150   NEXT J
1160 NEXT I
1170 Q(S1,S2)=1
1180 FOR I = 1 TO K3
1190    GOSUB 5400                   ' Subroutine call to random number gen
1200    Q(R1,R2)=2
1210    K(I,1)=R1
1220   K(I,2)=R2
1230   K(I,3)=S9
1240 NEXT I
1250 FOR I = 1 TO B3
1260    GOSUB 5400                  ' Subroutine call to random number gen
1270    Q(R1,R2)=3
1280 NEXT I
1290 FOR I = 1 TO S3
1300    GOSUB 5400                  ' Subroutine call to random number gen
1310    Q(R1,R2)=4
1320 NEXT I
1330 A=-1
1340 REM ==========================>> Short range sensor scan
1350 S4=S1-1
1360 S5=S1+1
1370 S6=S2-1
1380 S7=S2+1
1390 IF S4<1 THEN 1410
1400   GOTO 1420
1410 S4=1
1420 IF S5>8 THEN 1440
1430   GOTO 1450
1440 S5=8
1450 IF S6<1 THEN 1470
1460   GOTO 1480
1470 S6=1
1480 IF S7>8 THEN 1500
1490 GOTO 1510
1500 S7=8
1510 FOR I = S4 TO S5
1520    FOR J = S6 TO S7
1530      IF Q(I,J)<>3 THEN 1580
1540      C$="DOCKED"
1550      E=3000
1560      P = 10
1570      GOTO 1670
1580    NEXT J
1590 NEXT I
1600 IF K3>0 THEN 1640
1610   IF E<E0*0.1 THEN 1660
1620     C$="GREEN"
1630     GOTO 1670
1640 C$="RED"
1650 GOTO 1670
1660 C$="YELLOW"
1670 IF A<0 THEN 1690
1680 GOTO 1700
1685 LOCATE 16,1
1690 GOSUB 4950
1700 REM
1710 LOCATE 1,1
1720 IF E<=0 THEN 5140
1730 IF D(2)=>0 THEN 1780
1740 PRINT
1750 PRINT "*** Short Range Sensors are out ***"
1760 PRINT
1770 GOTO 2390
1780 PRINT "*****  Short  Range  Sensor  Scan  *****           "
1790 PRINT "-------------------------------------------"
1800 FOR I = 1 TO 8
1810    FOR J = 1 TO 8
1820      IF "K"=Q$(Q(I,J)+1) THEN COLOR 23,0
1830       PRINT Q$(Q(I,J)+1);" ";
1840      COLOR 7,0
1850    NEXT J
1860    PRINT "   ";
1870    IF I = 1 THEN 2210
1880    IF I = 2 THEN 2230
1890    IF I = 3 THEN 2280
1900    IF I = 4 THEN 2300
1910    IF I = 5 THEN 2320
1920    IF I = 6 THEN 2340
1930    IF I = 7 THEN 2360
1940    IF I = 8 THEN 2380
1950 REM ===========================>>  status
1960 PRINT
1970 NEXT I
1980 PRINT "-------------------------------------------"
1990 PRINT STRING$(45,32)
2000 PRINT STRING$(45,32)
2010 PRINT STRING$(45,32)
2020 PRINT STRING$(45,32)
2030 GOSUB 6930
2040 IF SSW=1 THEN RETURN
2050 LOCATE 1,50 : PRINT "*******  Commands  **********"
2060 LOCATE 2,50 : PRINT "  0 = Set Course"
2070 LOCATE 3,50 : PRINT "  1 = Short Range Sensor Scan"
2080 LOCATE 4,50 : PRINT "  2 = Long Range Sensor Scan"
2090 LOCATE 5,50 : PRINT "  3 = Fire Phasers"
2100 LOCATE 6,50 : PRINT "  4 = fire Photon Torpedoes"
2110 LOCATE 7,50 : PRINT "  5 = Damage Control"
2120 LOCATE 8,50 : PRINT "***** Course Settings *******"
2130 LOCATE 9,50 : PRINT "               3"
2140 LOCATE 10,50: PRINT "           4   |   2"
2150 LOCATE 11,50: PRINT "             \ | /"
2160 LOCATE 12,50: PRINT "          5--- * ---1"
2170 LOCATE 13,50: PRINT "             / | \"
2180 LOCATE 14,50: PRINT "           6   |   8"
2190 LOCATE 15,50: PRINT "               7"
2200 IF SSW=1 THEN RETURN ELSE GOTO 2400
2210 PRINT "Stardate          ";T
2220 GOTO 1970
2230 PRINT "Condition         ";
2240 IF "RED"=C$ THEN COLOR 23,0
2250 PRINT " "+C$
2260 COLOR 7,0
2270 GOTO 1970
2280 PRINT "Quadrant          ";Q1;Q2
2290 GOTO 1970
2300 PRINT "Sector            ";S1;S2
2310 GOTO 1970
2320 PRINT "Energy            ";E
2330 GOTO 1970
2340 PRINT "Photon Torpedoes  ";P;STRING$(5,32)
2350 GOTO 1970
2360 PRINT "Klingons left     ";K9;STRING$(5,32)
2370 GOTO 1970
2380 PRINT STRING$(25,32)
2385 GOTO 1970
2390 SSW=1 : GOSUB 1340 : SSW=0
2400 LOCATE 15,1:PRINT "Command: ";
2410 INPUT A
2420 IF A+1 = 1 THEN GOTO 2570
2430 IF A+1 = 2 THEN GOTO 1340
2440 IF A+1 = 3 THEN GOTO 3490
2450 IF A+1 = 4 THEN GOTO 3830
2460 IF A+1 = 5 THEN GOTO 4160
2470 IF A+1 = 6 THEN GOTO 4760
2480 PRINT
2490 PRINT "    0 = Set Course"
2500 PRINT "    1 = Short Range Sensor Scan"
2510 PRINT "    2 = Long Range Sensor Scan"
2520 PRINT "    3 = Fire Phasers"
2530 PRINT "    4 = Fire Photon Torpedoes"
2540 PRINT "    5 = Damage Control Report"
2550 PRINT
2560 GOTO 2390
2570 REM ===============>>  Activate Warp Drive
2580 GOSUB 6930
2590 PRINT "Course ?  (1 - 8.9999): ";
2600 INPUT C1
2610 IF C1 = 0 THEN 2390
2620 IF C1 < 1 THEN 2590
2630 IF C1 => 9 THEN 2590
2640 PRINT "Warp Factor ?  (0-12): ";
2650 INPUT W1
2660 GOSUB 6820
2670 IF W1<0 THEN 2590
2680 IF W1>12 THEN 2590
2690 IF W1=<0.2 THEN 2730
2700 IF D(1)=>0 THEN 2730
2710 PRINT "Warp engines are damaged, maximum speed allowed is warp .2"
2720 GOTO 2590
2730 IF K3<=0 THEN 2760
2740 GOSUB 4950
2750 IF E<=0 THEN 5170
2760 FOR I = 1 TO 6
2770   D(I) = D(I)+1
2780   IF D(I)>0 THEN 2800
2790   GOTO 2810
2800   D(I)=0
2810 NEXT I
2820 IF RND>0.25 THEN 3050
2830 R1=INT(RND*6+1)
2840 IF RND>0.5 THEN 2920
2850 D(R1) = D(R1)-(RND*5+1)
2860 PRINT "*** SPACE STORM ***";
2870 S=(R1-1)*12+1
2880 PRINT D$((S+11)/12)" damaged ***"
2890 PRINT E$,"damaged ***"
2900 S=0
2910 GOTO 3050
2920 FOR I = R1 TO 6
2930    IF D(I) < 0 THEN 2990
2940 NEXT I
2950 FOR I = 1 TO R1-1
2960    IF D(I) < 0 THEN 2990
2970 NEXT I
2980 GOTO 3040
2990 R1 = I
3000 D(I) = D(I)+RND*5+1
3010 GOTO 3030
3020 D(I) = 0
3030 S = (R1-1)*12+1
3040 S = 0
3050 N = INT(W1*8)
3060 E = E-N-N+5
3070 T = T + 1
3080 Q(S1,S2) = 0
3090 X = S1
3100 Y = S2
3110 IF T > T0+T9 THEN 5140
3120 GOSUB 4730
3130 FOR I = 1 TO N
3140    S1 = S1 + X1
3150    S2 = S2 + X2
3160    IF S1 < 0.5 THEN 3320
3170    IF S2 < 0.5 THEN 3320
3180    IF S1 => 8.5 THEN 3320
3190    IF S2 => 8.5 THEN 3320
3200    S1 = INT(S1+0.5)
3210    S2 = INT(S2+0.5)
3220    IF Q(S1,S2) = 0 THEN 3270
3230    PRINT "ENTERPRISE blocked by object at sector",S1,"-",S2
3240    S1=S1-X1
3250    S2=S2-X2
3260    GOTO 3280
3270 NEXT I
3280 Q(S1,S2) = 1
3290 S1 = INT(S1+0.5)
3300 S2 = INT(S2+0.5)
3310 GOTO 1340
3320 Q1 = INT(Q1+W1*X1+(X-0.5)/8)
3330 IF Q1 > 8 THEN 3350
3340 GOTO 3360
3350 Q1 = 8
3360 IF Q1 < 1 THEN 3380
3370 GOTO 3390
3380 Q1 = 1
3390 Q2 = INT(Q2+W1*X2+(Y-0.5)/8)
3400 IF Q2 > 8 THEN 3420
3410 GOTO 3430
3420 Q2 = 8
3430 IF Q1 < 1 THEN 3450
3440 GOTO 3460
3450 Q2 = 1
3460 S1 = INT(RND*8+1)
3470 S2 = INT(RND*8+1)
3480 GOTO 980
3490 REM ======================>>  Long range sensor scan
3500 LOCATE 1,1
3510 IF D(3)=>0 THEN 3540
3520 PRINT "Long range sensors are inoperable"
3530 GOTO 2390
3540 PRINT "** Long Range Sensor Scan of 8 adjacent quadrants  "
3550 A$=CHR$(186)+STRING$(13,32)+CHR$(186)+STRING$(13,32)+CHR$(186)+STRING$(13,32)+CHR$(186)+STRING$(8,32)
3560 B$=CHR$(204)+STRING$(13,205)+CHR$(206)+STRING$(13,205)+CHR$(206)+STRING$(13,205)+CHR$(185)+STRING$(8,32)
3570 LOCATE 2,1:PRINT CHR$(201)+STRING$(13,205)+CHR$(203)+STRING$(13,205)+CHR$(203)+STRING$(13,205)+CHR$(187)
3580 LOCATE 3,1:PRINT A$:LOCATE 4,1 : PRINT A$ : LOCATE 5,1 : PRINT A$
3590 LOCATE 6,1:PRINT B$
3600 LOCATE 7,1:PRINT A$:LOCATE 8,1 : PRINT A$ : LOCATE 9,1 : PRINT A$
3610 LOCATE 10,1:PRINT B$
3620 LOCATE 11,1:PRINT A$:LOCATE 12,1:PRINT A$ : LOCATE 13,1: PRINT A$
3630 LOCATE 14,1:PRINT CHR$(200)+STRING$(13,205)+CHR$(202)+STRING$(13,205)+CHR$(202)+STRING$(13,205)+CHR$(188)
3640 KK=4
3650 FOR I = Q1-1 TO Q1 + 1
3660    N(1) = 0
3670    N(2) = N(1)
3680    N(3) = N(2)
3690    FOR J = Q2-1 TO Q2+1
3700       IF I<1 THEN 3750
3710       IF I > 8 THEN 3750
3720       IF J < 1 THEN 3750
3730       IF J > 8 THEN 3750
3740       N(J-Q2+2) = G(I,J)
3750    NEXT J
3760    LOCATE KK,8 : PRINT N(1)
3770    LOCATE KK,21 : PRINT N(2)
3780    LOCATE KK,33 : PRINT N(3)
3790    IF KK=8 THEN LOCATE 9,16:COLOR 0,7:PRINT " ENTERPRISE  ":COLOR 7,0
3800    KK=KK+4
3810 NEXT I
3820 GOTO 2400
3830 REM =============================>>  Phaser Control
3840 GOSUB 6930
3850 IF D(4) =>0 GOTO 3880
3860 PRINT "Phaser Control is disabled"
3870 GOTO 2390
3880 PRINT "Phasers locked on target.  Energy available = ";E
3890 PRINT "Number of units to fire";
3900 INPUT X
3910 IF X <= 0 THEN 2390
3920 IF E-X<0 THEN 3880
3930 E=E-X
3940 IF K3 = 0 THEN 4130
3950 GOSUB 6930
3960 FOR I = 1 TO 9
3970    IF K(I,3)<=0 THEN 4120
3980    H = X/FND(0)*(2+RND(0))
3990    K(I,3) = K(I,3)-H
4000    IF NOISE=0 THEN 4050
4010    FOR QQQ = 3000 TO 2500 STEP -10
4020      SOUND QQQ,0.5
4030    NEXT QQQ
4040    SOUND 75,5
4050    COLOR 0,7
4060    PRINT " Phaser hit Klingon at ";K(I,1);"-";K(I,2);
4070    PRINT "(";K(I,3);" left)"
4080    COLOR 7,0
4090    IF K(I,3) > 0 THEN 4120
4100    GOSUB 4890
4110    IF K9 <= 0 THEN 5270
4120 NEXT I
4130 GOSUB 4950
4140 IF E <= 0 THEN 5170
4150 GOTO 2390
4160 REM ===========================>>  Photon Torpedoes
4170 GOSUB 6930
4180 IF D(5) => 0 THEN 4210
4190 PRINT "Photon Tubes are NOT OPERATIONAL"
4200 GOTO 2390
4210 IF P > 0 THEN 4240
4220 PRINT "All Photon Torpedoes expended"
4230 GOTO 2390
4240 PRINT "Torpedo course (1-8.9999)";
4250 INPUT C1
4260 IF C1 = 0 THEN 2390
4270 IF C1 < 1 THEN 4240
4280 IF C1 => 9 THEN 4240
4290 GOSUB 4730
4300 X = S1
4310 Y = S2
4320 P = P-1
4330 PRINT "Torpedo Track:";
4340 X = X+X1
4350 Y = Y + X2
4360 IF X <0.5 THEN 4690
4370 IF Y < 0.5 THEN 4690
4380 IF X => 8.5 THEN 4690
4390 IF Y => 8.5 THEN 4690
4400 X = INT(X+0.5)
4410 IF NOISE=0 THEN 4430
4420 SOUND (X*Y*100),5
4430 Y = INT(Y+0.5)
4440 PRINT X;"-";Y;",";
4450 IF Q(X,Y)<>0 THEN 4470
4460 GOTO 4340
4470 IF Q(X,Y)<> 2 THEN 4590
4480 PRINT " *** Klingon destroyed ***"
4490 K3 = K3 - 1
4500 K9 = K9 - 1
4510 IF K9 <= 0 GOTO 5270
4520 FOR I = 1 TO 9
4530    IF INT(X+0.5) = K(I,1) THEN 4550
4540    GOTO 4560
4550    IF INT(Y+0.5)=K(I,2) THEN 4570
4560  NEXT I
4570 K(I,3) = 0
4580 GOTO 4660
4590 IF Q(X,Y)<>4 THEN 4630
4600 PRINT "Star destroyed"
4610 S3 = S3-1
4620 GOTO 4660
4630 PRINT
4640 PRINT "*** Star Base destroyed... Congratulations dingbat !!!"
4650 B3=B3-1
4660 Q(X,Y)=0
4670 G(Q1,Q2)=K3*100+B3*10+S3
4680 GOTO 4700
4690 PRINT "Torpedo missed"
4700 GOSUB 4950
4710 IF E<=0 THEN 5170
4720 GOTO 2390
4730 X2=COS((C1-1)*0.785398)
4740 X1=-SIN((C1-1)*0.785398)
4750 RETURN
4760 REM ==========================>>  Damage Control report
4770 GOSUB 6930
4780 IF D(6) => 0 THEN 4810
4790 PRINT "Damage report is not available"
4800 GOTO 2390
4810 PRINT
4820 PRINT "DEVICE            STATE OF REPAIR"
4830 FOR I = 1 TO 6
4840    PRINT D$(I),D(I)
4850 NEXT I
4860 PRINT
4870 GOTO 2390
4880 REM ===========================>>
4890 PRINT "Klingon at sector ";K(I,2);"-";K(I,2);" *** DESTROYED ***"
4900 K3=K3-1
4910 K9=K9-1
4920 Q(K(I,1),K(I,2))=0
4930 G(Q1,Q2)=K3*100+B3*10+S3
4940 RETURN
4950 REM ==========================>>  Klingon attack
4955 LOCATE 16,1
4960 IF C$<>"DOCKED" THEN 4990
4970 PRINT "Star Base shields protect the Enterprise"
4980 RETURN
4990 FOR I = 1 TO 9
5000    IF K(I,3)<=0 THEN 5110
5010    H = (K(I,3)/FND(0))*(2+RND(1))
5020    E=E-H
5030 IF NOISE=0 THEN 5080
5040    FOR QQQ = 300 TO 250 STEP -10
5050       SOUND QQQ,1:SOUND QQQ+5,1:SOUND QQQ-5,1
5060    NEXT QQQ
5070    SOUND 50,20
5080    PRINT H;" unit hit Enterprise ";
5090 REM PRINT K(I,1);"-";K(I,2);
5100    PRINT "(";E;" left)"
5110 NEXT I
5120 GOSUB 6720                      ' Sound effect
5130 RETURN
5140 REM ==========================>>  Lose game
5150 GOSUB 6680
5160 PRINT "It is Stardate ";T
5170 REM goto 4250
5180 REM gosub 5630
5190 PRINT "The ENTERPRISE has been destroyed"
5200 PRINT "The Federation will be conquered."
5210 PRINT "  There are still ";K9;" Klingon battle cruisers."
5220 PRINT "     Y O U    A R E    D E A D   !!!"
5230 PRINT
5240 PRINT " Hit return key to play again
5250 GOSUB 6600
5260 GOTO 250
5270 REM ==========================>>  Win game
5280 GOSUB 6680
5290 PRINT "It is Stardate ";T
5300 PRINT "  The last Klingon battle cruiser in the galaxy has been destroyed."
5310 PRINT "  The federation has been saved."
5320 PRINT " "
5330 PRINT "  You have been promoted to admiral."
5340 PRINT K0;" Klingons in ";T-T0;" years"
5350 PRINT " Your rating = ";INT(K0/(T-T0)*1000)
5360 PRINT
5370 PRINT "Hit return key to play again "
5380 REM pause
5390 GOTO 250
5400 REM =======================>> Random Number generator
5410 R1=INT(RND*8+1)
5420 R2=INT(RND*8+1)
5430 IF Q(R1,R2)<>0 THEN 5410
5440 RETURN
5450 REM =================>> Opening instructions
5460 CLS : LOCATE 5,1
5470 PRINT "Orders:                                  Stardate: ";T
5480 GOSUB 6720
5490 PRINT
5500 PRINT "As commander of the United States Spaceship ENTERPRISE,"
5510 PRINT "your mission is to rid the galaxy of the deadly Klingon menace"
5520 PRINT "To do this, you must destroy the Klingon invasion force of ";K9;
5530 PRINT " battle"
5540 PRINT "crusers.  You have ";T9;" solar years to complete your mission"
5550 PRINT "(i.e., until stardate ";T0+T9;")."
5560 GOSUB 6600
5570 REM =================>> Continuing instructions
5580 PRINT "   You have at least one (1) supporting STARBASE."
5590 PRINT "When the Enterprise docks at one (is positioned next to one) it"
5600 PRINT "is resupplied with energy and photon torpedoes."
5610 PRINT "The Enterprise is currently in quadrant ";Q1;"-";Q2
5620 PRINT "                               sector   ";S1;"-";S2
5630 PRINT " "
5640 PRINT "Do you need further instructions ?   [y or n]
5650 A$=INPUT$(1)
5660 IF (A$="n") OR (A$="N") THEN 980
5670 GOSUB 6670                  ' clear screen
5680 REM ----------->>>  Chain in the instructions
5690 CHAIN MERGE "b:startrek.how",5700,ALL
5700 GOSUB 50000
5710 CHAIN MERGE "b:startrek.dum",5720,ALL,DELETE 50000-61600
5720 GOTO 980
6590 GOTO 980
6600 REM =================>> Subroutine to wait for player to hit any key
6610 LOCATE 1,15
6620 COLOR 0,7
6630 PRINT "        Hit any key to continue       "
6640 COLOR 7,0
6650 A$=INKEY$: IF A$="" THEN 6650
6660 X6 = INT(RND*100)+1
6670 REM =================>> Subroutine to clear screen
6680 CLS
6690 LOCATE 5,10
6700 GOSUB 6720
6710 RETURN
6720 REM =================>>  Routine to simulate sound of t.v. computer
6730 IF NOISE=0 THEN 6800
6740 FOR I = 1 TO 50
6750    J=RND(I)*10000
6760    IF J<37 THEN 6790
6770    PLAY "MB"
6780    SOUND J,0.5
6790 NEXT I
6800 RETURN
6810 END
6820 REM =================>>  Sound of warp drive engaging
6830 IF NOISE=0 THEN 6920
6840 PLAY "mb"
6850 FOR I = 37 TO 100
6860      SOUND I,1
6870 NEXT I
6880 PLAY "mb"
6890 FOR I = 5000 TO 4000 STEP -20
6900      SOUND I,0.2
6910 NEXT I
6920 RETURN
6930 REM ---------->>>  Subroutine to clear the message area
6940 FOR I=16 TO 23
6950  LOCATE I,1 : PRINT STRING$(79,32)
6960 NEXT I
6970 LOCATE 16,1
6980 RETURN
50000 RETURN
```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0013

     Volume in drive A has no label
     Directory of A:\

    COLOR    BAS       128   1-01-80
    COLOR    BAT        15   1-24-82
    DEMO     PIC     16512   8-08-88
    FILES013 TXT      1019   5-29-87   9:55a
    HELP1    PIC     16512   8-08-88
    HELP2    PIC     16512   1-01-80
    IBMSONG  BAS      5120   5-05-82
    MONO     BAS       128   1-01-80
    MONO     BAT        14   1-20-82
    PDRAW    BAS      7168   1-01-80
    PDRAW    DOC     15170  12-08-81
    RUNCOLOR BAT        53   1-20-82
    SETCOLOR BAT        49   1-24-82
    STARTREK BAS     14208   3-23-82
    STARTREK DUM       128   3-22-82
    STARTREK HOW      6144   3-22-82
    USA      PIC     16512   1-01-80
    USASTATE PIC     16512   1-01-80
    USATEMP  PIC     16512   1-01-80
           19 file(s)     148416 bytes
                            6144 bytes free
