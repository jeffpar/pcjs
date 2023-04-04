---
layout: page
title: "PC-SIG Library Disk #38"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0038/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0038"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "DOS & GRAPHICS UTILITIES"

    With DRAW, you can draw, and then some!  Easy to understand and use
    graphics program, plus DOS utilities you've been wishing for.  Set
    your display to color/monochrome from DOS, examine and modify disk
    directory, list files to screen, a page at a time, or even remove
    control characters from down-loaded files!
    
    System Requirements: Some programs require color graphics.
    
    How to Start: Load DOS and type any .EXE file.  To run BASIC programs
    consult the directions in GETTING STARTED for your configuration.
    Consult the .DOC files for additional program information.
    
    Suggested Registration:  Contact author.
    
    File Descriptions:
    
    COLOR    EXE  Sets display to color from DOS
    MONO     EXE  Sets display to monochrome from DOS
    SCROLLK  COM  Compiled version of SCROLLK.BAS
    SPOOLER2 COM  Printer spooler for color display card
    SPOOLER1 COM  Printer spooler for monochrome display card
    SPOOLBAS BAS  Allows scrolling to continue from BASIC to DOS
    WS-DOS   BAS  Converts WordStar files to DOS files
    LQ       BAS  Sets up Letter Quality printer for use under WORDSTAR
    DMLQ     DOC  Documentation for DM and LQ
    DM       BAS  Sets up Dot Matrix printer under WORDSTAR
    FILTER   DOC  Documentation for FILTER program
    FILTER   BAS  Removes control characters from downloaded files
    DISKRTN  DOC  Documentation for DISKRTN
    DISKRTN  EXE  Examine and modify disk directory
    SPOOLER  DOC  Documentation file for spooler programs
    LIST     EXE  Lists files to screen, one page at a time
    -------- ---  DRAW Programs
    DRAW     DOC  Documentation file for MDRAW and HDRAW
    DRAW     CMT  Comment lines for HDRAW and MDRAW programs
    MDRAW    BAS  Medium resolution DRAW program
    MODROW   TXT  Additional information on graphics programs
    HELP?    PIK  Help picture for DRAW programs
    HDRAW    BAS  High resolution DRAW program
    HELP?    PIC  Help picture for DRAW programs
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## DM.BAS

```bas
1 CLS:PRINT "THIS basic PROGRAM WAS AUTOMATICALLY CREATED BY CONVERT.BAS"
2 PRINT"Copyright 1982 ,Rich Schinnell Rockville,MD. Not for Sale."
3 PRINT "This program will automatically generate you a .COM program named DM.COM":PRINT 
4 ON ERROR GOTO 5000
6 INPUT "PLACE the disk to write the file in Drive A: and then Strike any key "; SCHINNELL$
9 PRINT:PRINT " Now reading the data statements, wait!"
10 RESTORE:READ T:FOR I = 1 TO T:READ N:X#=X#+N:NEXT I
20 READ TOT# :IF TOT#<>X# THEN 5000
22 CLS:LOCATE 12,5:PRINT "Now writing file NAMED DM.COM standby please "
30 RESTORE
40 OPEN "R", #1,"DM.COM",1 
50 FIELD #1, 1 AS N$
60 READ N
70 FOR I = 1 TO N
80 READ N:LSET N$=CHR$(N):
92 PUT #1 :NEXT I:CLOSE
94 PRINT "DM.COM CREATED * *":GOTO 5010
99 DATA  64
1000 DATA 30,43,192,80,142,216,191,8,4,184,188,3
1011 DATA 80,143,5,131,199,2,184,120,3,80,143,5,203
1012 DATA 0,0,0,0,0,0,0,83,84,65,67,75,32
1013 DATA 32,32,83,84,65,67,75,32,32,32,83,84,65
1014 DATA 67,75,32,32,32,83,84,65,67,75,32,32,32
1015 DATA  4459
5000 PRINT "* * ERROR VERIFY DATA * * * "
5010 CLOSE:END
```

## FILTER.BAS

```bas
10 '    FILTERS  NON-ASCII CHARACTERS FROM A FILE
20 '    USEFUL FOR CLEANING UP NULLS AND CONTROL CHARACTERS FROM A
30 '    TRANSMITTED FILE.
40 '                                       RICHARD STECK  820511
50 '
60 '
70 CLOSE
80 DEFINT A-Z
90 ON ERR GOTO 470
100 KEY OFF
110 CLS:WIDTH 80: LOCATE 12,,1
120 INPUT "   ENTER NAME OF FILE TO BE FILTERED  "; F1$
130 PRINT
140 INPUT "   ENTER DESTINATION FILE NAME        "; F2$
150 IF F1$ = F2$ THEN GOTO 110
160 PRINT: PRINT
170 PRINT TAB(10), "Source file name is: "; TAB(33); F1$
180 PRINT
190 PRINT TAB(10), "Destination file name is: ";TAB(33); F2$
200 PRINT
210 INPUT " Is that correct(Y/N/Q)?  "; ANS$
220 IF (LEFT$(ANS$,1) = "Q") OR (LEFT$(ANS$,1) = "q" )  THEN STOP
230 IF NOT ((LEFT$(ANS$,1) = "Y") OR (LEFT$(ANS$,1) = "y") ) THEN GOTO 160
240 OPEN F1$ FOR INPUT AS #1
250 OPEN F2$ FOR OUTPUT AS #2
260 '
270 WHILE NOT EOF(1)
280    LINE INPUT #1,A$
290 '
300 PRINT  A$ :  '  DISPLAY STRING
310    GOSUB 370
320    PRINT #2,A$
330 WEND
340 CLOSE 1,2
350 STOP
360 '
370 '  FILTER OUT NULLS FROM A$
380 AA$= STRING$(255," ")
390 J = 1
400 FOR I = 1 TO LEN(A$)
410 TEST = ASC(MID$(A$,I,1))
420 IF TEST < 32 AND (TEST < 7 OR TEST > 13) THEN GOTO 430 ELSE MID$(AA$,J,1) =  MID$(A$,I,1) : J = J + 1
430 NEXT I
440 A$ = LEFT$(AA$,J-1)
450 RETURN
460 '
470 PRINT : PRINT "ERROR CONDITION  "; ERR; "  IN LINE NO. "; ERL: PRINT : STOP
```

## HDRAW.BAS

```bas
1000 GOTO 5000  '  -- HDRAW --
1010 C$=INKEY$: IF C$="" GOTO 1010
1020 IF LEN(C$)=1 THEN C=ASC(C$) ELSE C=ASC(MID$(C$,2))
1030 RETURN
1040 GET (CX-20,CY-8)-(CX+20,CY+8),UCUR: PUT (CX-20,CY-8),CUR,>=: RETURN
1050 PUT (CX-20,CY-8),UCUR,PSET: ECOL=POINT(CX,CY): RETURN
1060 GOSUB 1050: T=C-71
1070 CX=CX+RX*DX(T)
1080 IF CX<20 THEN CX=20: BEEP ELSE IF CX>619 THEN CX=619: BEEP
1090 CY=CY+RY*DY(T)
1100 IF CY<8 THEN CY=8: BEEP ELSE IF CY>191 THEN CY=191: BEEP
1110 ON SKETCH GOTO 1345,1390,1355,1365,1415,1375,1040,1040,1480,1040
1120 T=C-48: IF T=0 THEN RX=PIC(0): RY=PIC(1): RETURN
1129 IF T=1 THEN RX=1: RY=1: RETURN
1130 RX=12*T/5: RY=T: RETURN  '  --STEP 1-9, 12/5
1140 '
1150 '
1160 '
1170 '
1180 '
1190 '
1200 '
1210 '
1220 GET (284,90)-(355,107),HOLD
1230 LINE (284,90)-(355,107),COL,BF
1240 GOSUB 1010: IF C<>32 THEN PUT (284,90),HOLD,PSET: RETURN 5020
1250 IF COL THEN COL=0 ELSE COL=1
1260 GOTO 1230
1270 GET (284,90)-(355,107),PIC
1280 LINE (284,90)-(355,107),BND,BF
1290 GOSUB 1010: IF C<>32 THEN PUT (284,90),PIC,PSET: RETURN 5020
1300 IF BND THEN BND=0 ELSE BND=1
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
1390 TX=ABS(CX-LX): TY=12*ABS(CY-LY)/5: CIRCLE (LX,LY),SQR(TX*TX+TY*TY),BND: GOTO 1040
1410 GOSUB 1050
1415 PAINT (CX,CY),COL,BND: GOSUB 1040: RETURN
1430 ON C-103 GOTO 1670,1630,1440,1820,3900,4000,1440,1440,1570,1850
1440 BEEP: RETURN
1470 GOSUB 1050
1480 IF CX+PIC(0)>640 THEN BEEP: GOTO 1040
1490 TY=PIC(1): IF CY+PIC(1)>200 THEN PIC(1)=200-CY
1500 ON PMODE GOSUB 1520,1530,1540,1550
1510 PIC(1)=TY: GOTO 1040
1520 PUT (CX,CY),PIC,PSET: RETURN
1530 PUT (CX,CY),PIC,>=: RETURN
1540 PUT (CX,CY),PIC,OR: RETURN
1550 PUT (CX,CY),PIC,AND: RETURN
1560 GOSUB 1050: GET (LX,LY)-(CX,CY),PIC: GOSUB 1040: RETURN
1570 GET (284,90)-(355,107),HOLD
1580 T$="PSETXOR  OR AND "
1590 LOCATE 13,39: PRINT " ";MID$(T$,4*PMODE-3,4);" ";
1600 GOSUB 1010: IF C<>32 THEN PUT (284,90),HOLD,PSET: RETURN 5020
1610 PMODE=PMODE+1: IF PMODE>4 THEN PMODE=1
1615 GOTO 1590
1621 SKETCH=C-83: RETURN
1630 TYPE$="loaded": GOSUB 1710
1640 ON ERROR GOTO 1835
1645 IF NAMEF$="" THEN RETURN
1650 DEF SEG=&HB800
1653 BLOAD DRIVE$+":"+NAMEF$+".pik",0
1660 GOTO 1040
1670 TYPE$="saved": GOSUB 1710
1680 ON ERROR GOTO 1700
1681 IF NAMEF$="" THEN RETURN
1690 GOSUB 1050
1694 DEF SEG=&HB800: BSAVE DRIVE$+":"+NAMEF$+".pik",0,&H4000:GOTO 1040
1700 LOCATE 1,1: PRINT "Unable to save picture ";: GOSUB 1010: PUT (0,0),HOLD,PSET: GOSUB 1040: RESUME 5020
1710 GET (0,0)-(639,7),HOLD
1720 LOCATE 1,1: PRINT SPACE$(80);: LOCATE 1,1
1730 PRINT"Name of picture to be ";TYPE$;
1740 LINE INPUT ": ";NAMEF$
1750 IF NAMEF$="" GOTO 1810
1760 NAMEF$=LEFT$(NAMEF$,8)
1770 LOCATE 1,1: PRINT SPACE$(80);: LOCATE 1,1
1780 LINE INPUT;" Drive picture is on (default=A): ";DRIVE$
1785 DRIVE$=LEFT$(DRIVE$,1)
1790 IF DRIVE$="" OR DRIVE$=" " THEN DRIVE$="A"
1800 IF DRIVE$="a" OR DRIVE$="A" OR DRIVE$="b" OR DRIVE$="B" GOTO 1810 ELSE GOTO 1770
1810 PUT (0,0),HOLD,PSET: RETURN
1820 GET (0,0)-(639,31),HOLD: GOSUB 1770
1825 ON ERROR GOTO 1835
1830 LOCATE 1,1: FILES DRIVE$+":*.PIK": GOTO 1840
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
3900 ON ERROR GOTO 4500
3910 LPRINT CHR$(27) + "0" + CHR$(15)
3920 LPRINT CHR$(14) "  HIGH RES DRAW PROGRAM FUNCTION KEYS"
3930 GOTO 4020
4000 ON ERROR GOTO 4500 : LPRINT CHR$(27) + "2" + CHR$(18)
4010 LPRINT CHR$(14) "  HIGH RES DRAW PROGRAM FUNCTION KEYS"
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
4180 LPRINT "      F5             PAINT          SKETCH           HELP          HELP COND"
4190 LPRINT "                                    PAINT           (SCREEN)       (PRINTER)"
4200 LPRINT "--------------------------------------------------------------------------------"
4210 LPRINT "      F6             DRAW           SKETCH           ERASE         HELP NORM"
4220 LPRINT "                     BOX             BOX              BOX          (PRINTER)"
4230 LPRINT "--------------------------------------------------------------------------------"
4240 LPRINT "      F7          SET COLOR:        SKETCH            N/A           N/A"
4250 LPRINT "                   PAINT             OFF"
4260 LPRINT "--------------------------------------------------------------------------------"
4270 LPRINT "      F8          SET COLOR:        SKETCH           CLEAR          N/A"
4280 LPRINT "                    DRAW             OFF              BOX"
4290 LPRINT "--------------------------------------------------------------------------------"
4300 LPRINT "      F9             PUT            SKETCH            N/A          SET MODE:"
4310 LPRINT "                    OBJECT        PUT OBJECT                       PUT OBJECT"
4320 LPRINT "--------------------------------------------------------------------------------"
4330 LPRINT "      F10            GET            SKETCH           CLEAR            TYPE"
4340 LPRINT "                    OBJECT           OFF             SCREEN           TEXT"
4350 LPRINT "--------------------------------------------------------------------------------"
4360 LPRINT "               <ESC> = System (End Program)"
4370 LPRINT CHR$(27) + "2" + CHR$(12) + CHR$(18);
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
5055 IF C=27 THEN SCREEN 0,1: WIDTH 80: SYSTEM
5060 GOTO 5010
5070 DEFINT A-Z
5080 DIM PIC(8001),CUR(52),UCUR(52),DX(10),DY(10),HOLD(1281)
5100 COL=1: BND=1: PMODE=2: SKETCH=10
5110 KEY OFF: SCREEN 2,0
5130 CLS: GET (0,0)-(0,0),PIC
5140 LINE (0,8)-(12,8): LINE (28,8)-(40,8)
5150 LINE (20,0)-(20,4): LINE (20,12)-(20,16)
5160 GET (0,0)-(40,16),CUR
5180 CLS: CX=319: CY=99: GOSUB 1040: GOSUB 1340: C=57: GOSUB 1120
5190 DATA -1,-1,0,-1,1,-1,0,0,-1,0,0,0,1,0,0,0,-1,1,0,1,1,1
5200 FOR I=0 TO 10: READ DX(I),DY(I): NEXT
5210 FOR I=1 TO 10: KEY I,"": NEXT
5220 RETURN
```

## LQ.BAS

```bas
1 CLS:PRINT "THIS basic PROGRAM WAS AUTOMATICALLY CREATED BY CONVERT.BAS"
2 PRINT"Copyright 1982 ,Rich Schinnell Rockville,MD. Not for Sale."
3 PRINT "This program will automatically generate you a .COM program named LQ.COM":PRINT 
4 ON ERROR GOTO 5000
6 INPUT "PLACE the disk to write the file in Drive A: and then Strike any key "; SCHINNELL$
9 PRINT:PRINT " Now reading the data statements, wait!"
10 RESTORE:READ T:FOR I = 1 TO T:READ N:X#=X#+N:NEXT I
20 READ TOT# :IF TOT#<>X# THEN 5000
22 CLS:LOCATE 12,5:PRINT "Now writing file NAMED LQ.COM standby please "
30 RESTORE
40 OPEN "R", #1,"LQ.COM",1 
50 FIELD #1, 1 AS N$
60 READ N
70 FOR I = 1 TO N
80 READ N:LSET N$=CHR$(N):
92 PUT #1 :NEXT I:CLOSE
94 PRINT "LQ.COM CREATED * *":GOTO 5010
99 DATA  64
1000 DATA 30,43,192,80,142,216,191,8,4,184,120,3
1011 DATA 80,143,5,131,199,2,184,188,3,80,143,5,203
1012 DATA 0,0,0,0,0,0,0,83,84,65,67,75,32
1013 DATA 32,32,83,84,65,67,75,32,32,32,83,84,65
1014 DATA 67,75,32,32,32,83,84,65,67,75,32,32,32
1015 DATA  4459
5000 PRINT "* * ERROR VERIFY DATA * * * "
5010 CLOSE:END
```

## MDRAW.BAS

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
1130 RX=6*T/5: RY=T: RETURN
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
1430 ON C-103 GOTO 1670,1630,1440,1820,3900,4000,1140,1170,1570,1850
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
1615 GOTO 1590
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
3900 ON ERROR GOTO 4500
3910 LPRINT CHR$(27)+"0"+CHR$(15)
3920 LPRINT CHR$(14) " MEDIUM RES DRAW PROGRAM FUNCTION KEYS"
3930 GOTO 4020
4000 ON ERROR GOTO 4500 : LPRINT CHR$(27)+"2"+CHR$(18)
4010 LPRINT CHR$(14) " MEDIUM RES DRAW PROGRAM FUNCTION KEYS"
4020 LPRINT "________________________________________________________________________________"
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
4180 LPRINT "      F5             PAINT          SKETCH           HELP        HELP COND"
4190 LPRINT "                                    PAINT           (SCREEN)       (PRINTER)"
4200 LPRINT "--------------------------------------------------------------------------------"
4210 LPRINT "      F6             DRAW           SKETCH           ERASE       HELP NORM"
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
4360 LPRINT "                <ESC> = System  (End Program)"
4370 LPRINT CHR$(27)+"2"+CHR$(12)+CHR$(18);
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
5055 IF C=27 THEN SCREEN 0,1: WIDTH 80: SYSTEM
5060 GOTO 5010
5070 DEFINT A-Z
5080 DIM PIC(8001),CUR(52),UCUR(52),DX(10),DY(10),HOLD(1281)
5100 BACK=0: PAL=1: COL=3: BND=3: PMODE=2: SKETCH=10
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

## SCROLLK.BAS

```bas
1 'Pgm = SCROLLK.BAS
2 'Softalk (IBM) May, 1983, pg 41. (no copyright notice in listing)
3 'Running SCROLLK.BAS creates SCROLLK.COM
4 'Run SCROLLK.COM once to install
5 'ScrollLock key in toggled on state will freeze display output
6 'Tapping RightShift key releases single lines
7 "Tapping LeftShift key releases 23 line pages. (see line 1010, 6th value)
8 'Following will modify page size from Basic program.
9 'def seg=0:def seg=256*peek(&h43)+peek(&h42):poke &h10d,no.of.lines
10 CHECK = 0
20 FOR I = 1 TO 251
30 READ BYTE
40 CHECK = CHECK >= BYTE
50 NEXT
60 IF CHECK = 54 THEN 100
70 PRINT "One of the data statements may be wrong"
80 PRINT "Check lines 1000-1310, then run again"
90 STOP
100 OPEN "SCROLLK.COM" AS #1 LEN=1
110 FIELD #1,1 AS BYTE$
120 RESTORE
130 FOR I = 1 TO 251
140 READ BYTE: LSET BYTE$ = CHR$(BYTE): PUT #1
150 NEXT
160 CLOSE
170 PRINT "SCROLLK.COM created"
180 END
1000 DATA 233,  180,    0,      0,      0,      0,      0,      0
1010 DATA 0,    0,      0,      0,      0,      23,     0,      251
1020 DATA 30,   83,     80,     187,    64,     0,      142,    219
1030 DATA 160,  23,     0,      36,     16,     140,    203,    142
1040 DATA 219,  58,     6,      12,     1,      116,    30,     138
1050 DATA 30,   13,     1,      136,    30,     11,     1,      162
1060 DATA 12,   1,      81,     82,     80,     180,    3,      183
1070 DATA 0,    156,    255,    30,     3,      1,      136,    54
1080 DATA 14,   1,      88,     90,     89,     147,    88,     10
1090 DATA 219,  116,    75,     128,    252,    2,      117,    12
1100 DATA 58,   54,     14,     1,      136,    54,     14,     1
1110 DATA 126,  60,     235,    5,      128,    252,    6,      117
1120 DATA 53,   254,    6,      11,     1,      138,    62,     13
1130 DATA 1,    56,     62,     11,     1,      124,    39,     138
1140 DATA 223,  254,    203,    136,    30,     11,     1,      187
1150 DATA 64,   0,      142,    219,    138,    30,     23,     0
1160 DATA 246,  195,    16,     116,    17,     128,    227,    3
1170 DATA 116,  242,    128,    251,    1,      116,    7,      51
1180 DATA 219,  46,     136,    30,     11,     1,      91,     156
1190 DATA 46,   255,    30,     3,      1,      31,     207,    251
1200 DATA 30,   83,     140,    203,    142,    219,    10,     228
1210 DATA 117,  6,      51,     219,    136,    30,     11,     1
1220 DATA 91,   31,     46,     255,    46,     7,      1,      180
1230 DATA 3,    50,     255,    205,    16,     136,    54,     14
1240 DATA 1,    184,    0,      0,      142,    216,    161,    64
1250 DATA 0,    46,     163,    3,      1,      161,    66,     0
1260 DATA 46,   163,    5,      1,      184,    15,     1,      163
1270 DATA 64,   0,      140,    14,     66,     0,      161,    88
1280 DATA 0,    46,     163,    7,      1,      161,    90,     0
1290 DATA  46,  163,    9,      1,      184,    159,    1,      163
1300 DATA 88,   0,      140,    14,     90,     0,      186,    183
1310 DATA 1,    205,    39
```

## SPOOLBAS.BAS

```bas
10 ' ABSTRACT: Some of you may have tried the SPOOLER Programs on this disk,
20 '		and found that the spooler no longer operated when you moved
30 ' 		from DOS to BASIC.  This BASIC program allows you to continue
40 '		printing to the spooler created by one of the SPOOLER programs
50 '		after you have started you BASIC Language.
60 ' CONTRIBUTED: To the BCS IBM Exchange by:
70 '            Daniel Berman
75 '		Customized Data Services
80 '		7 Marble St.
90 '		PO Box 460
100 '		Whitman, MA 02382
110 'Copyright (c) 1982 by Daniel Berman
120 'This program is contributed to the Boston Computer Society's IBM User's
130 'Group for the personal and educational use of its members.  The program
140 'is not to be used for commercial gain.
150 ' INSTRUCTIONS: AFTER starting the spooler program by typing SPOOLER1 or
160 ' SPOOLER2 from DOS, and moving into BASIC Language, simply type:
170 '				RUN "spoolbas <cr>
180 ' The spooler's operation will then be extended into your BASIC operations.
190 '
200 ' The program restores the timer interrupt vector to what was set by spooler.
210 ' Because BASIC changes this vector to service light pen and joystick
220 ' interfaces, this program will disable those features.  Programs that
230 ' do not use joysticks or light pens will not be affected.
240 ' Repeat!!, only run this program from BASIC AFTER one of the spoolers 
250 ' have been executed.
260 DEF SEG = 0
270 POKE 112,128
280 POKE 113,1
290 POKE 114,PEEK(94)
300 POKE 115,PEEK(95)
310 END
```

## WS-DOS.BAS

```bas
2 'WS-DOS.BAS
4 'by Andrew Flugelman
6 'Copyright 1983, The Headlands Press, Inc.
8 '
10 DEFINT A-Z:ON ERROR GOTO 9000
15 A=0:A$="":L$="":P=0 'optimize key variables
20 CRLF$=CHR$(13)+CHR$(10):HBLF$=CHR$(141)+CHR$(10)'hard & soft CR/LF
25 SP$=CHR$(32):TB$=CHR$(9)'space & tab
30 SH$=CHR$(31):PB$=CHR$(20)'soft hyphen & placebo
35 DT=19:DIM D$(19):FOR P=1 TO DT:READ D$(P):NEXT'read dot commands
40 EN=4:DIM EN(4),ENO$(4),ENC$(4),MRK(4)'dim & read enhancement symbols
45 FOR P=1 TO EN:READ EN(P),ENO$(P),ENC$(P):MRK(P)=0:NEXT
100 KEY OFF:CLS
105 PRINT"        ==== CONVERT ===="
110 PRINT
115 PRINT"         1 - DOS to WS"
120 PRINT"         2 - WS to DOS"
900 PRINT"         x - exit"
905 PRINT
910 LOCATE ,10:PRINT"Choose:";
915 Q$=INPUT$(1):IF Q$="X" OR Q$="x" THEN END
920 ON VAL(Q$) GOTO 1000,2000
925 BEEP:GOTO 100
930 '
1000 CLS
1005 PRINT"          === DOS-to-WORDSTAR CONVERTER ==="
1010 PRINT
1015 PRINT"This routine will convert a standard DOS file into the format"
1020 PRINT"  required by WordStar for paragraph reforming by converting"
1025 PRINT"  'hard' carriage returns (ASCII 13) into 'soft' CRs (ASCII 141).
1030 PRINT"If the file contains blank lines between paragraphs or indented"
1035 PRINT"  paragraphs, hard returns are preserved at each paragraph end.
1040 PRINT
1045 GOSUB 8000:IF FL$="" THEN 100
1050 PRINT:PRINT"Conversion in progress...";
1055 IF EOF(1) THEN 8045 ELSE LINE INPUT #1,L$
1060 IF EOF(1) THEN PRINT#2,L$+CRLF$;:GOTO 8045
1065 LINE INPUT #1,A$
1070 IF A$="" THEN 1090 'test for blank line
1075 IF LEFT$(A$,2)=SP$+SP$ THEN 1090 'test for indent
1080 IF LEFT$(A$,1)=TB$ THEN 1090 'also test for tab
1085 PRINT#2,L$+HBLF$;:L$=A$:GOTO 1060 'write line with soft CR
1090 PRINT#2,L$+CRLF$;:L$=A$:PRINT PB$;:GOTO 1060 'write line and hard CR
1095 '
2000 CLS
2005 PRINT"              === WORDSTAR-to-DOS CONVERTER ==="
2010 PRINT
2015 PRINT"This routine converts a WordStar 'document' file"
2020 PRINT"  into standard DOS format.  All 'high-bit' characters"
2025 PRINT"  are converted to their 'low-bit' equivalents."
2030 PRINT"All 'soft' hyphens are stripped, except that any hyphens"
2035 PRINT"  at the ends of lines are retained."
2040 PRINT
2045 PRINT"You can either strip or retain lines that contain dot commands."
2050 PRINT"As another option, you can either strip all print enhancements"
2055 PRINT"  or replace certain enhancement codes as follows:"
2060 PRINT
2065 PRINT"    underline (^S) becomes  << ... >>"
2070 PRINT"     boldface (^B) becomes <<< ... >>>"
2075 PRINT"  superscript (^T) becomes  <^ ... ^>"
2080 PRINT"    subscript (^V) becomes  <_ ... _>"
2085 PRINT
2090 PRINT:PRINT"Strip or Retain dot commands (s/r):":Q$=INPUT$(1)
2095 IF Q$="S" OR Q$="s" THEN STRIPDOT=-1 ELSE STRIPDOT=0
2100 PRINT "Strip or Replace enhancements (s/r):":Q$=INPUT$(1)
2105 IF Q$="R" OR Q$="r" THEN ENHANCE=-1 ELSE ENHANCE=0
2110 GOSUB 8000:IF FL$="" THEN 100
2115 PRINT:PRINT"Conversion in progress...";
2120 L$=""
2125 IF EOF(1) THEN PRINT #2,L$:GOTO 8045 ELSE A$=INPUT$(1,#1):A=ASC(A$):IF A>30 AND A<128 THEN L$=L$+A$:GOTO 2125 'soft hyphen or normal ASCII, proceed
2130 IF A>127 THEN A=A-128:A$=CHR$(A) 'convert to low bit character
2135 IF A>31 THEN L$=L$+A$:GOTO 2125 'now if normal ASCII, proceed
2140 IF A=13 THEN GOSUB 2170:A$=INPUT$(1,#1):GOTO 2120 'eol, process & remove LF
2145 IF NOT ENHANCE THEN 2125
2150 'deal with enhancements
2155 FOR P=1 TO EN:IF A<>EN(P) THEN 2165 'find special characters
2160 IF MRK(P) THEN L$=L$+ENC$(P):MRK(P)=0 ELSE L$=L$+ENO$(P):MRK(P)=-1'convert
2165 NEXT: GOTO 2125
2170 ' subroutine to strip soft hyphens and dot commands
2175 P=INSTR(L$,SH$):IF P=0 OR P>=LEN(L$)-1 THEN 2180 ELSE L$=LEFT$(L$,P-1)+         RIGHT$(L$,LEN(L$)-P):GOTO 2175 'strip soft hyphens...
2180 IF RIGHT$(L$,1)=SH$ THEN MID$(L$,LEN(L$),1)="-" 'except at eol
2185 '
2190 IF STRIPDOT AND (LEFT$(L$,1)=".") THEN 2200 'possible dot command?
2195 PRINT #2,L$:PRINT PB$;:RETURN 'write line to disk
2200 B$=MID$(L$,2,1):A=ASC(B$):IF A>64 AND A<91 THEN A=A+32:B$=CHR$(A)
2205 C$=MID$(L$,3,1):A=ASC(C$):IF A>64 AND A<91 THEN A=A+32:C$=CHR$(A)
2210 DUMP=0:FOR P=1 TO DT:IF B$+C$=D$(P) THEN DUMP=-1 'search for dot cmds.
2215 NEXT:IF DUMP THEN RETURN ELSE GOTO 2195 'dump line if dot command
2220 '
8000 'File specs
8005 INPUT"File to convert:",FL$:IF FL$="" THEN RETURN
8010 IF LEFT$(FL$,1)="?" THEN GOSUB 8035:GOTO 8005
8015 OPEN FL$ FOR INPUT AS #1
8020 INPUT"Convert to file:",FL$:IF FL$="" THEN 8005
8025 IF LEFT$(FL$,1)="?" THEN GOSUB 8035:GOTO 8020
8030 OPEN FL$ FOR OUTPUT AS #2:RETURN
8035 IF LEN(FL$)>1 THEN FL$=RIGHT$(FL$,LEN(FL$)-1) ELSE FL$="*.*"
8040 PRINT:FILES FL$:PRINT:RETURN
8045 CLOSE:BEEP:PRINT:PRINT"Done!":GOTO 105
8050 '
9000 ' Error trapping
9005 IF ERL=8015 THEN CLOSE:BEEP:PRINT"===Filespec Error===":RESUME 8005
9010 IF ERL=8030 THEN CLOSE 2:BEEP:PRINT"===Filespec Error===":RESUME 8020
9015 IF ERL=8040 THEN CLOSE:BEEP:PRINT"===File(s) Not Found===":RESUME 8005
9020 ON ERROR GOTO 0
9025 '
10000 DATA bp,uj,po,cw,ig,cp,fo,fm,he,hm,lh,mb,mt,pa,op,pn,pc,sr,pl
10005 DATA 19,"<<",">>"
10010 DATA 2,"<<<",">>>"
10015 DATA 22,"<_","_>"
10020 DATA 20,"<^","^>"
```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk 0038

     Volume in drive A has no label
     Directory of A:\

    SCROLLK  COM       251   5-20-83  10:23p
    SCROLLK  BAS      2860   5-09-83  12:47a
    WS-DOS   BAS      4354   5-20-83  11:13a
    MODROW   TXT      2564   3-07-83  12:19a
    DRAW     DOC     17152   1-10-83   1:15a
    DRAW     CMT      2944   1-10-83  12:06a
    MDRAW    BAS      7424   1-09-83  10:57p
    HDRAW    BAS      7168   1-09-83  10:44p
    HELP1    PIK     16512   1-09-83  10:17p
    HELP1    PIC     16512   1-09-83   9:00p
    COLOR    EXE       640   5-29-82
    MONO     EXE       640   5-29-82
    HELP2    PIK     16512   5-28-83   1:18p
    HELP2    PIC     16512   5-28-83   1:24p
    SPOOLBAS BAS      1536  12-16-82   2:46p
    SPOOLER1 COM       768   9-03-82   8:44p
    SPOOLER2 COM       896  10-09-82  10:50a
    SPOOLER  DOC       958   1-01-80  12:34a
    DISKRTN  EXE      9728   6-06-82
    DISKRTN  DOC       503   1-01-80   1:59a
    FILTER   DOC       528   1-01-80   1:10a
    FILTER   BAS      1280  12-16-82   2:44p
    DM       BAS      1024   2-15-83   2:28p
    DMLQ     DOC       918   1-05-83   7:27p
    LQ       BAS      1024   2-15-83   2:28p
    LIST     EXE       640  12-09-82  12:08a
    CRC      TXT      1780  11-09-84   9:12a
    CRCK4    COM      1536  10-21-82   7:54p
           28 file(s)     135164 bytes
                           18944 bytes free
