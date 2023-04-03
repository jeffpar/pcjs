---
layout: page
title: "PC-SIG Library Disk #265"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0265/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0265"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "PRINTER AND GRAPHICS"

    Three well-done and very different graphics utilites: GRAF displays
    mathematical functions; SPIRO simulates a spirograph; and DEFINE allows
    BASIC programmers use of PUT statements in graphics.  The best of the
    printer utilites is OKIMENU.BAS which allows Okidata printer users a
    menu- driven approach to formatting their output.  NOTE: OKIMENU.BAS
    will function properly on a printer with the Okidata-IBM Plug'n'Play
    ROMs installed.
    
    System Requirements: BASIC and color graphics
    
    How to Start: Consult the .DOC and README files for directions and
    documentation.  To run the BASIC programs, consult the directions in
    GETTING STARTED for your configuration.  To run a program with the
    suffix .COM, or .EXE,, just type its name, i.e., for SPIRO.EXE, type
    SPIRO and press <ENTER>.
    
    Suggested Registration:  $10.00
    
    File Descriptions:
    
    -------- ---  Graphics Utilities
    SPIRO1   EXE  Demonstration of SPIRO
    SPIRO    BAS  Source for SPIRO.EXE
    SPIRO    DOC  Documentation for SPIRO.EXE  (9K)
    SPIRO    EXE  Simulates a Spirograph, you enter the parameters,it draws
    PRINT    DOC  Documentation for PRINT1.EXE and PRINT2.EXE
    PRINT2   EXE  Same as PRINT1.EXE except drives COMM2 port
    PRINT1   EXE  XON/XOFF Serial printer driver   Diable 630 and ?.
    OKITALIC BAS  Downloadable italics font for OKIDATA printer
    OKIMENU  DOC  Documentation for OKIDATA.BAS  (17K)
    OKIMENUC BAS  Compressed (by BetaTools BDS) version of OKIMENU.BAS
    OKIMENU  BAS  Menu based program for OKIDATA printer setup
    OKICHAR  TXT  Explanatory text
    OKICHAR  LBR  Library used for Okidata printers
    SIDEWAYS PAS  Source for SIDEWAYS.EXE
    SIDEWAYS EXE  Prints text file sideways on Epson printer
    -------- ---  Printer Utilities
    THING    PLT  Sample data file for DEFINE.BAS
    DEFINE   INS  Instruction file for DEFINE.BAS
    DEFINE   BAS  Defines graphics characters for use with PUT statements
    GRAF     BAS  Plots mathematical function on graphics screen
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## DEFINE.BAS

```bas
10 REM DSNAME=DEFINE.BAS
20 GOTO 40
30 GOSUB 50135:PUT(200,80),FI%:GOTO 250 'LINK IF LOADED DATA
40 REM ORIGINALLY WRITTEN 03/18/82 THIS PROGRAM ALLOWS YOU TO DEFINE SPECIAL CHARACTERS AND SUCH.
50 REM THIS VERSION COMPLETED ON 6/20/82.  FOR COMMENTS AND SUGGESTIONS,
60 REM PLEASE CONTACT BRUCE GUTHRIE BY MAIL AT
70 REM    P.O. BOX 710
80 REM    WASHINGTON, D.C. 20044
90 REM Copyright Bruce Guthrie 1982
100 'NOTE that program performs a GET function, moving figure into array FIGURE%
110 'PUT function is used to plot it somewhere
120 OPTION BASE 0:KEY OFF:SCREEN 1:COLOR 0,7:DEFINT A-Z
130 FOR I=1 TO 10:KEY I,"":NEXT I
140 DIM F(1350):WINDX1=240:WINDY1=120
150 CLS:PRINT TAB(15);"DEFINE"
160 PRINT TAB(8);"(c) Bruce Guthrie 1982"
170 INPUT "Need instructions [Y/N]? ",A$:IF A$="n" OR A$="N" THEN 210:ELSE IF A$<>"y" AND A$<>"Y" THEN 170
180 OPEN "DEFINE.INS" FOR INPUT AS #1:I=0:WIDTH 80
190 I=I+1:IF EOF(1) THEN INPUT "Press RETURN? ",A$:WIDTH 40:GOTO 210
200 INPUT #1,A$:PRINT A$:IF I<22 THEN 190:ELSE I=0:INPUT "Press RETURN? ",A$:GOTO 190
210 CLS:PRINT "Is file stored already [Y/N] caps only ? ";:STORED$="N"
220 A$=INKEY$:IF A$<>"Y" AND A$<>"N" THEN 220:ELSE PRINT A$:IF A$="N" THEN CLS:GOTO 250
230 STORED$="Y":INPUT "File name to load? ",A$:INPUT "Storage device [A/B]? ",B$:IF B$<>"A" AND B$<>"B" THEN 230
240 CLS:CHAIN MERGE B$+":"+A$+".PLT",30,ALL
250 FOR I=1 TO 21:LOCATE I,1:PRINT".....................";:NEXT I
260 FOR I=1 TO 21 STEP 5:LOCATE I,1:PRINT"---------------------";:NEXT I
270 FOR I=1 TO 21:FOR J=1 TO 21 STEP 5:LOCATE I,J:PRINT "|";:NEXT J,I
280 LINE(199,79)-(301,181),,B:FOR I=200 TO 300 STEP 20:LINE(I,75)-STEP(0,4):LINE(I,181)-STEP(0,4):NEXT I:FOR I=80 TO 180 STEP 20:LINE(195,I)-STEP(4,0):LINE(301,I)-STEP(4,0):NEXT I:C=3:GOSUB 550
290 GOSUB 640:PRINT "Checking grid."
300 A$="@":FOR X=WINDX1 TO WINDX2:FOR Y=WINDY1 TO WINDY2:IF POINT(X,Y)=3 THEN GOSUB 650
310 NEXT Y,X:GOSUB 640
320 X=WINDX1+10:Y=WINDY1+10:GOSUB 660:PREVX=X1:PREVY=X1:LET A$=CHR$(SCREEN(Y1,X1))
330 LOCATE 2,25:PRINT "USE DIREC-":LOCATE 3,25:PRINT "TION KEYS":LOCATE 4,25:PRINT "TO POSITION,":LOCATE 5,25:PRINT "PF'S TO USE.":LOCATE 6,25:PRINT "PF 1=CHOOSE/":LOCATE 7,25:PRINT " DE-CHOOSE":LOCATE 8,25:PRINT "PF 2=MEMORIZE IT"
340 REM START OF LOOP FOR MOVEMENT
350 LOCATE Y1,X1:PRINT " ";:LOCATE Y1,X1:PRINT A$;:X$=INKEY$:IF LEN(X$)<>2 THEN 350:ELSE IN=ASC(MID$(X$,2,1))
360 IF IN=59 GOTO 370 ELSE IF IN=60 GOTO 410 ELSE IF IN=72 GOTO 560 ELSE IF IN=75 GOTO 580 ELSE IF IN=77 GOTO 600 ELSE IF IN=80 GOTO 620:ELSE GOTO 350
370 IF POINT(X,Y)=3 THEN PRESET(X,Y):LOCATE Y1,X1:PRINT ".";:GOTO 390:ELSE PSET(X,Y)
380 LOCATE PREVY,PREVX:PRINT A$;
390 CHAR=SCREEN(Y1,X1):IF POINT(X,Y)=0 THEN LET A$=CHR$(CHAR) ELSE LET A$="@"
400 PREVX=X1:PREVY=Y1:GOSUB 660:GOTO 350
410 REM FIGURE DEFINED, ALLOWED NEW FOCUS OR NOT
420 GOSUB 640:PRINT "Define another":PRINT "window [Y/N]? ";
430 A$=INKEY$:IF A$="" THEN 430:ELSE PRINT A$:LET A$=MID$(A$,1,1):IF A$="y" THEN A$="Y" ELSE IF A$="n" THEN A$="N"
440 IF A$="N" THEN 670:ELSE IF A$<>"Y" THEN 420:ELSE GOSUB 640:PRINT "Cursor controls move.":PRINT "Use PF 2 to accept.";
450 X$=INKEY$:IF LEN(X$)<>2 THEN 450:ELSE IN=ASC(MID$(X$,2,1))
460 IF IN=60 THEN GOSUB 640:GOTO 250:ELSE C=0:GOSUB 550:IF IN=72 GOTO 470:ELSE IF IN=75 GOTO 490:ELSE IF IN=77 GOTO 510:ELSE IF IN=80 GOTO 530:ELSE GOTO 540
470 WINDY1=WINDY1-20:IF WINDY1<80 THEN WINDY1=80
480 GOTO 540
490 WINDX1=WINDX1-20:IF WINDX1<200 THEN WINDX1=200
500 GOTO 540
510 WINDX1=WINDX1+20:IF WINDX1>280 THEN WINDX1=280
520 GOTO 540
530 WINDY1=WINDY1+20:IF WINDY1>160 THEN WINDY1=160
540 C=3:GOSUB 550:GOTO 450
550 WINDX2=WINDX1+20:WINDY2=WINDY1+20:LINE(195,WINDY1)-(195,WINDY2),C:LINE(WINDX1,75)-(WINDX2,75),C:RETURN
560 Y1=Y1-1:IF Y1=0 THEN Y1=1
570 GOTO 630
580 X1=X1-1:IF X1=0 THEN X1=1
590 GOTO 630
600 X1=X1+1:IF X1=22 THEN X1=21
610 GOTO 630
620 Y1=Y1+1:IF Y1=22 THEN Y1=21
630 X=WINDX1+X1-1:Y=WINDY1+Y1-1:GOTO 380
640 FOR I=22 TO 24:LOCATE I,1:PRINT SPACE$(21);:NEXT I:LOCATE 22,1:RETURN
650 LOCATE Y-WINDY1+1,X-WINDX1+1:PRINT A$;:RETURN
660 X1=X-WINDX1+1:Y1=Y-WINDY1+1:RETURN
670 GOSUB 640:PRINT "Done";:LOCATE 1,1:PRINT SPACE$(160):LOCATE 1,1:PRINT "Use cursor keys to set area to be":PRINT "read.  Use 1, 3, 7, and 9 to show ":PRINT "which edge is being worked on.":PRINT "Use PF 2 to set."
680 XMIN=199:XMAX=301:YMIN=79:YMAX=181:CX=1:CY=1:GET(200,80)-(300,180),F
690 A$=INKEY$:IF A$="" THEN 690:ELSE IF LEN(A$)<2 THEN 690
700 A=ASC(MID$(A$,2,1)):IF A=60 THEN 760:ELSE IF A=71 THEN CX=1:CY=1:GOTO 690:ELSE IF A=73 THEN CX=2:CY=1:GOTO 690:ELSE IF A=79 THEN CX=1:CY=2:GOTO 690:ELSE IF A=81 THEN CX=2:CY=2:GOTO 690
710 IF A=72 THEN:IF CY=1 THEN YMIN=YMIN-1:GOTO 750:ELSE YMAX=YMAX-1:GOTO 750
720 IF A=75 THEN:IF CX=1 THEN XMIN=XMIN-1:GOTO 750:ELSE XMAX=XMAX-1:GOTO 750
730 IF A=77 THEN:IF CX=1 THEN XMIN=XMIN+1:GOTO 750:ELSE XMAX=XMAX+1:GOTO 750
740 IF A<>80 THEN 690:ELSE IF CY=1 THEN YMIN=YMIN+1:GOTO 750:ELSE YMAX=YMAX+1
750 PUT(200,80),F,PSET:LINE(XMIN,YMIN)-(XMAX,YMAX),1,B:LINE(XMIN-1,YMIN-1)-(XMAX+1,YMAX+1),1,B:GOTO 690
760 GET(XMIN+1,YMIN+1)-(XMAX-1,YMAX-1),F
770 CLS:PRINT "This figure is defined for you:":PUT (100,20),F:LOCATE 21,1:FOR I=1 TO 1000:NEXT I
780 CLS:PRINT "Store at DATA statements for ":INPUT "BASIC program [Y/N]? ",A$:A$=MID$(A$,1,1):IF A$="n" THEN A$="N":ELSE IF A$="y" THEN A$="Y"
790 IF A$="N" THEN 930
800 INPUT "File name to save under? ",A$
810 IF INSTR(A$,".") >0 THEN PRINT "File extension ignored.":PRINT "`PLT' assigned.":A$=MID$(A$,1,INSTR(A$,',')-1)
820 A$=A$+".PLT":IF INSTR(A$,":")=2 THEN A$=MID$(A$,3)
830 INPUT"Storage device [A/B]? ",B$:IF B$<>"A" AND B$<>"B" THEN 830
840 PRINT "Storing file..."
850 A$=B$+":"+A$:CLOSE:OPEN A$ FOR OUTPUT AS #1:LS=4+INT(((XMAX-XMIN-1)*2+7)/8)*(YMAX-YMIN-1):LS=INT((LS+1)/2):I=0
860 PRINT #1,50000.+I;" DATA ";F(I);",";F(I+1);",";F(I+2);",";F(I+3);",";F(I+4);",";F(I+5);",";F(I+6);",";F(I+7);",";F(I+8);",";F(I+9):I=I+10:IF I<LS THEN 860
870 PRINT #1,"50135 DIM FI%(";LS-1;"):RESTORE 50000:FOR I=0 TO ";LS-1;":READ FI%(I):NEXT I:RETURN"
880 CLOSE
890 PRINT "DATA statements are stored as lines":PRINT "50000-50135.":PRINT "You can add it to a program":PRINT "by CHAIN MERGE ";A$
900 PRINT "Print figure via PUT(),FI% graphics ":PRINT "statement."
910 FOR I=1 TO 1000:NEXT I
920 PRINT "File created for you.":FILES B$+":*.plt"
930 END
```

## GRAF.BAS

```bas
10 '**********************************
20 '*   THIS IS A REVISION OF THE    *
30 '*   GRAPH PROGRAM THAT IS ON THE *
40 '*   CAPITAL-PC DISC 5 TO TAKE    *
50 '*   ADVANTAGE OF THE COLOR GRAP- *
60 '*   HICS BOARD TO DRAW A CURVE   *
70 '*   AS A CURVE AND TO PLOT THE   *
80 '*   X AXIS OR A SECOND CURVE     *
90 '*   BY B.J.RECKMAN,ROCKVILLE,MD. *
95 '**********************************
100 SCREEN 1:WIDTH 40: CLS
1000 REM: GRAPH
1010 KEY OFF
1020 LOCATE 4:PRINT "Graphics Resolution ([High] or Low)? ";
1030 L%=ASC(INPUT$(1)) AND &HDF
1040 IF L%=76 THEN L%=1 ELSE L%=2
1050 SCREEN L%
1070 CLS:PRINT TAB(15) "G R A P H":PRINT
1080 GOSUB 2200
1090 GOSUB 1800:GOSUB 1400:GOSUB 11400:GOSUB 1200:GOSUB 1600
1100 GOSUB 2000:CLS:END
1200 REM ***********************
1210 REM ***   PRINT GRAPH   ***
1220 REM ***********************
1230 LINE (60,16)-(300*L%,176),,B
1240 LINE (60,56)-(300*L%,56)
1250 LINE (60,96)-(300*L%,96)
1260 LINE (60,136)-(300*L%,136)
1270 LL%=3 : DIV=80
1271 IF L%=2 THEN LL%=7
1272 IF L%=2 THEN DIV=67.5
1280 FOR N%=1 TO LL%: NDIV%=N%*DIV : LINE (60+NDIV%,16)-(60+NDIV%,176) : NEXT
1310 RETURN
1400 REM ***********************
1410 REM ***   PLOT Y=F(X)   ***
1420 REM ***********************
1421 CLS
1429 LDIV%=300*L%-60
1430 DX=(XU-XL)/LDIV%:DY=(YU-YL)/160
1440 FOR J%=0 TO LDIV%:X=XL+DX*J%:XP%=60+J%:GOSUB 1500
1469 IF J% THEN LINE -(XP%,YP%) ELSE PSET(XP%,YP%)
1490 NEXT
1494 RETURN
1500 GOSUB 5000:D%=(Y-YL)/DY
1510 IF Y<YL THEN YP%=176:RETURN
1520 IF Y>YU THEN YP%=16:RETURN
1530 YP%=176-D%:RETURN
1600 REM ***********************
1610 REM ***   LABLE GRAPH   ***
1620 REM ***********************
1630 LOCATE 1,8:PRINT "Y"
1640 LOCATE 22,39*L%:PRINT "X"
1650 FOR J%=2 TO 22 STEP 5
1660 Y=YU-DY*8*(J%-2)
1680 LOCATE J%,1:PRINT USING "###.##";Y
1690 NEXT                            
1694 NSTEP%=10
1695 IF L%=2 THEN NSTEP%=8
1696 NF%=38
1697 IF L%=2 THEN NF%=76
1698 NS=8
1699 IF L%=2 THEN NS%=12
1700 JJ%=NF%: FOR J%=8 TO JJ% STEP NSTEP%
1710 X=XL+DX*8*(J%-8)
1711 IF L%=2 THEN X=XL + (J%-8)*(XU-XL)/(NF%-12)
1720 LLL%=3
1721 IF J%=40*L%-2 THEN LLL%=LLL%+2
1722 IF L%=2 THEN LLL%=2
1730 LOCATE 23,J%-LLL%:PRINT USING "###.##"; X
1740 NEXT
1760 Q$=INKEY$:IF Q$="" THEN 1760
1770 RETURN
1800 REM ************************************
1810 REM ***   SELECT RANGE FOR X AND Y   ***
1820 REM ************************************
1825 LOCATE 14,1:PRINT "**************************************":PRINT"AFTER GRAPH IS ON SCREEN": PRINT "HIT ANY KEY TO CONTINUE. ":PRINT"**************************************"
1830 PRINT :INPUT"LOWEST VALUE OF X";XL
1840 INPUT "HIGHEST VALUE OF X";XU
1850 IF XU<=XL THEN PRINT :PRINT "   -- BAD X RANGE --":GOTO 1830
1855 PRINT:PRINT"* Please Wait *"
1860 DX=(XU-XL)/100:X=XL:XM=(XU+XL)/2:GOSUB 5000:GOSUB 6000:MN=Y:MX=Y
1870 FOR J%=1 TO 100
1880 X=XL+DX*J%:GOSUB 5000:IF Y>MX THEN MX=Y
1890 IF Y<MN THEN MN=Y
1891 GOSUB 6000:IF Y>MX THEN MX=Y
1892 IF Y<MN THEN MN=Y
1900 NEXT:YM=(MN+MX)/2
1910 PRINT:PRINT"OVER THIS RANGE OF X":                                              PRINT"  MINIMUM Y =";MN
1920 PRINT"  MAXIMUM Y=";MX:                                                         PRINT"NOW CHOOSE THE SCALE FOR Y"
1930 PRINT:INPUT"MINIMUM Y SCALE VALUE";YL
1940 INPUT"MAXIMUM Y SCALE VALUE";YU:                                                IF YU>YL THEN GOTO 1960
1950 PRINT:PRINT"  -- BAD Y SCALE VALUE --":GOTO  1910
1960 RETURN
2000 REM ************************************
2010 REM ***   PRINT VALUES FOR X AND Y   ***
2020 REM ************************************
2030 CLS:PRINT "X VALUES":                                                           PRINT"  MINIMUM - ";XL
2040 PRINT"  MID     - ";XM:PRINT"  MAXIMUM - ";XU:                                  PRINT
2050 PRINT"Y VALUES":PRINT"  MINIMUM - ";MN
2060 PRINT"  MID     - ";YM:PRINT"  MAXIMUM - ";MX:
2100 LOCATE 22,11:PRINT "HIT 'G' TO SEE THE GRAPH AGAIN OR ANY OTHER KEY TO QUIT . ?";
2110 Q$=INKEY$:IF Q$="" THEN 2110
2120 IF Q$="G" OR Q$="g" THEN GOSUB 1400 :GOSUB 11400:GOSUB 1200:GOSUB 1600
2130 RETURN
2200 REM *************************
2210 REM ***   PRINT WARNING   ***
2220 REM *************************
2240 LOCATE 2,12:PRINT "W A R N I N G !":
2250 LOCATE 4,4:PRINT "REVISE THE SUBROUTINE AT LINES "
2260 LOCATE 5,3:PRINT "5000-5999 TO DEFINE YOUR FUNCTION"
2270 LOCATE 6,6:PRINT "DEFINE Y AS A FUNCTION OF X"
2280 LOCATE 8,3:PRINT "IF YOU HAVE TWO EQUATIONS THEN"
2285 LOCATE 9,3:PRINT "REVISE THE SUBROUTINE AT LINES"
2290 LOCATE 10,4:PRINT "6000-6999 TO DEFINE THE 2nd"
2300 LOCATE 11,3:PRINT "FUNCTION Y AS A FUNCTION OF X"
2310 RETURN
4997 REM ************************************************
4998 REM ***   SUBROUTINE AT LINE 5000 MUST BE SET    ***
4999 REM ************************************************
5000 REM ***   Y=F(X) GOES HERE   ***
5001 Y= X MOD 3
5010 RETURN
6000 REM****************SECOND EQUATION GOES HERE********************
6001 Y=X-3*INT(X/3)
6010 RETURN
11400 REM ***********************
11410 REM ***   PLOT Y=F(X)   ***
11420 REM ***********************
11429 LDIV%=300*L%-60
11430 DX=(XU-XL)/LDIV%:DY=(YU-YL)/160
11440 FOR J%=0 TO LDIV%:X=XL+DX*(J%):XP%=60+J%:GOSUB 11500
11469 IF J% THEN LINE -(XP%,YP%) ELSE PSET(XP%,YP%)
11492 NEXT
11494 RETURN
11500 GOSUB 6000:D%=(Y-YL)/DY
11510 IF Y<YL THEN YP%=176:RETURN
11520 IF Y>YU THEN YP%=16:RETURN
11530 YP%=176-D%:RETURN
```

## OKIMENU.BAS

```bas
1010 ' *** OKIMENU.BAS   Print Control Menu for Okidata ML92
1020 '
1030 KEY OFF: SCREEN 0,1,0,0: WIDTH 80: CLS      'Use 25-line 80-column screen
1040 DEFINT A-Z: BV=1: CG=0: LI$="?"             'Use integer variables
1050 ON ERROR GOTO 1060: E=TIMER/3: BV=2: GOTO 1070 'Get BASIC version
1060 RESUME 1070
1070 ON ERROR GOTO 0
1080 DEF SEG=0: IF (PEEK(&H410) AND &H30)<&H30 THEN CG=1 'Color/Graphics
1090 DEF SEG: IF CG=1 THEN SCREEN 0,1,1,0: CLS   'Build page 1 for C/G
1100 OPTION BASE 1: DIM PC$(26),PN$(34)          'Print code & name arrays
1110 '
1120 LOCATE 2,10: PRINT "OKIDATA MicroLine 92  Print  Control  Menu"
1130 LOCATE 4,10: PRINT "     Version 2.94      March 20, 1984"
1140 LOCATE 6,10: PRINT "Copyright (C)1984 BWare SoftWare EveryWare"
1150 '
1160 BG=SCREEN(2,10,1): FG=BG MOD 16             'Save foreground color
1170 BG=(((BG-FG)/16) MOD 128)                   'Save background color
1180 '
1190 LOCATE 11
1200 PRINT "LIMITED WARRANTY:  This program is guaranteed against exterior body rust"
1210 PRINT "for five years or 50,000 miles, whichever comes first.  No other warranty"
1220 PRINT "is expressed or implied.  Our motto is CAVEAT EMPTOR!"
1230 LOCATE 15
1240 PRINT "SERVICE AGREEMENT:  You get what you pay for!"
1250 LOCATE 17
1260 PRINT "LICENSE AGREEMENT:  This program may be freely copied or modified,"
1270 PRINT "but SALE of this program is STRICTLY FORBIDDEN without the express"
1280 PRINT "written permission of BWare SoftWare EveryWare.  Remember,"
1290 PRINT "selling SoftWare from B.S.EveryWare will get you NoWhere!"
1300 LOCATE 23
1310 PRINT "This program is made available through the Software Library of the"
1320 PRINT "Silicon Valley Computer Society, P.O. Box 60506, Sunnyvale, CA 94088";
1330 IF CG=1 THEN SCREEN ,,0,1: CLS              'Display page 1 for C/G
1340 '
1350 E=VAL(MID$(TIME$,7))                        'Get current seconds
1360 '
1370 RESTORE 5150                                'Set to read print codes
1380 FOR I=1 TO 26                               'Load print code array
1390     READ PN$(I)                             'Read print code name
1400     READ R                                  'Read next control code
1410     IF R<255 THEN R$=R$+CHR$(R): GOTO 1400  'Get all codes for function
1420     PC$(I)=R$: R$="": NEXT I                'Store control codes
1430 '
1440 RESTORE 5710                                'Set to read function names
1450 FOR I=27 TO 34: READ PN$(I): NEXT I         'Load print function names
1460 '
1470 IF CG=1 THEN 1550                           'Proceed if Color/Graphics
1480 IF INKEY$>"" THEN 1540                      'Proceed if any key pressed
1490 I=VAL(MID$(TIME$,7)): IF I<E THEN I=I+60    'Get current seconds
1500 IF I-E<10 THEN 1480 ELSE 1540               'Delay 10 seconds
1510 '
1520 '*** Start of screen rewrite loop
1530 IF CG=1 THEN SCREEN ,,0,1                   'Build page 0 for C/G
1540 CLS
1550 PRINT "OKIDATA ML92 Print Control Menu";
1560 LOCATE ,50: PRINT DATE$"    "TIME$: PRINT
1570 FOR I=1 TO 13: PRINT CHR$(I+64)". "PN$(I);  'Print function name menu
1580 LOCATE ,41: PRINT CHR$(I+77)". "PN$(I+13): NEXT I
1590 PRINT: PRINT "** Not compatible with CQ print mode";
1600 LOCATE ,41: PRINT "* Compatible only with CQ print mode"
1610 PRINT
1620 FOR I=27 TO 30: PRINT CHR$(I+22)". "PN$(I); 'Print special function menu
1630 LOCATE ,41: PRINT CHR$(I+26)". "PN$(I+4): NEXT I
1640 '
1650 IF CG=1 THEN SCREEN ,,0,0                   'Display page 0 for C/G
1660 '
1670 '*** Start of menu-selection loop
1680 ON ERROR GOTO 0: GOSUB 2200: COLOR 0,7       'Message in reverse video
1690 PRINT " Enter selection: ";: COLOR FG,BG
1700 E=1: L=0: GOSUB 2320                         'Get single unedited char.
1710 IF R=27 THEN 1530                            'Esc means rewrite screen
1720 IF R$<"1" THEN 1820 ELSE IF R$>"8" THEN 1800 'Skip if not print function
1730 '
1740 PF=R-48: R=PF+26: GOSUB 2190: PRINT PN$(R);  'Display print function name
1750 ON PF GOSUB 3610,3770,3840,4260,4690,4870,5020,5070 'Do menu items 1-8
1760 GOSUB 2200: IF PF=4 OR PF=5 THEN 1530        'Rewrite screen for 4 & 5
1770 GOTO 1680                                    'Continue with next selection
1780 '
1790 '*** Process menu selections A-Z
1800 R=R-64                                       'Convert letter to subscript
1810 IF R>0 AND R<27 THEN 1850                    'Check for invalid selections
1820 GOSUB 2190: BEEP                             'Clear line 24
1830 PRINT "Invalid selection";: GOTO 1700        'Handle invalid selections
1840 '
1850 A$=PC$(R): IF A$="" THEN 1820                'Retrieve print code
1860 GOSUB 2190: PRINT PN$(R);                    'Display print function name
1870 LOCATE ,41: PRINT "Make sure printer is ready";
1880 IF R=12 THEN LI$="6": GOTO 1970              'L. Lines per inch
1890 IF R=13 THEN LI$="8": GOTO 1970              'M. Lines per inch
1900 IF R=16 THEN GOSUB 2550: GOTO 1960           'P. Sub/superscripts on
1910 IF R=18 THEN GOSUB 2670: GOTO 1970           'R. Set variable tabs
1920 IF R=19 THEN GOSUB 2860: GOTO 1970           'S. Set fixed tabs
1930 IF R=21 THEN GOSUB 3110: GOTO 1970           'U. Page length
1940 IF R=24 THEN GOSUB 3240: GOTO 1970           'X. Skip lines
1950 IF R=25 THEN GOSUB 3360: GOTO 1970           'Y. Left margin
1960 IF R=26 THEN GOSUB 3490                      'Z. Space between characters
1970 GOSUB 2030: GOTO 1680                        'Print codes & start over
1980 '
1990 '
2000 '
2010 '
2020 '*** Sub-routine to send print codes
2030 ON ERROR GOTO 2080                           'Set error catcher
2040 OPEN "R",#1,"LPT1:": WIDTH #1,255            'Open printer/no LF's
2050 PRINT #1,A$;                                 'Send print string
2060 CLOSE #1: ON ERROR GOTO 0: RETURN            'Close & return
2070 '
2080 IF ERR=55 THEN CLOSE: RESUME                 'Ignore "Open file" error
2090 IF ERL<>2050 THEN ON ERROR GOTO 0            'Must be print error
2100 GOSUB 2210: PRINT "Check printer - press <Enter> to continue";
2110 LOCATE 24,41: PRINT "Press <Esc> to cancel selection";
2120 BEEP: E=1: L=0: GOSUB 2320                   'Get response
2130 IF R=27 THEN RESUME 2060                     'Esc means cancel
2140 IF R=13 THEN RESUME ELSE 2120                'Ignore if not Enter key
2150 '
2160 '
2170 '
2180 '*** Sub-routines to clear lines 24 & 25
2190 LOCATE 24,1: PRINT SPACE$(79);: LOCATE 24,1: RETURN  'Clear line 24
2200 LOCATE 24,41: PRINT SPACE$(39);                      'Clear line 24 right
2210 LOCATE 25,1: PRINT SPACE$(79);: LOCATE 25,1: RETURN  'Clear line 25
2220 '
2230 '
2240 '
2250 '*** Sub-routine to get keyboard response (terminated by <Enter>)
2260 '*** E=1 is no edit / E=2 is alpha edit / E=3 is numeric edit
2270 '*** E=4 is numeric edit terminated by comma or <Enter>
2280 '*** L is the maximum length of response (0=one unprinted character)
2290 '*** R$ is the last character entered
2300 '*** R is the ASCII code of R$
2310 '*** S$ is the cumulative string entered
2320 S$="": X=CSRLIN: Y=POS(0): GOTO 2340      'Initialize string
2330 BEEP                                      'Complain if wrong key pressed
2340 R$=INKEY$: IF R$="" THEN LOCATE 1,64,0: PRINT TIME$;: GOTO 2340 'Get char.
2350 IF LEN(R$)>1 THEN 2330                    'Ignore extended codes
2360 R=ASC(R$): IF R=13 THEN RETURN            '<Enter> key ends response
2370 IF R=27 THEN S$="": RETURN                '<Esc> key cancels response
2380 IF R=8 THEN 2470                          'Special handling for BackSpace
2390 IF R>96 AND R<123 THEN R=R-32: R$=CHR$(R) 'Force uppercase letters
2400 ON E GOTO 2440,2430,2420,2410: GOTO 2330  'Check edit type
2410 IF R$="," THEN RETURN                     'Comma ends input for edit 4
2420 IF R$<"0" OR R$>"9" THEN 2330 ELSE 2440   'Edit numeric entry
2430 IF R$<"A" OR R$>"Z" THEN 2330             'Edit alphabetic entry
2440 IF L=0 THEN RETURN                        'Do not print character if L=0
2450 S$=S$+R$: Y=Y+1: LOCATE X,Y: PRINT R$;    'Add new character to string
2460 IF LEN(S$)<L THEN 2340 ELSE RETURN        'Keep going until max. response
2470 IF LEN(S$)<1 THEN 2330                    'Ignore BackSpace if no string
2480 S$=LEFT$(S$,LEN(S$)-1)                    'Delete last character
2490 LOCATE X,Y: Y=Y-1: PRINT CHR$(32);        'Erase character from screen
2500 GOTO 2340                                 'Get next character
2510 '
2520 '
2530 '
2540 '*** Sub-routine to turn on subscripts or superscripts
2550 LOCATE ,41: PRINT "Press <Esc> to cancel selection";
2560 GOSUB 2210: COLOR 0,7
2570 PRINT " Type <B> for subscripts, <P> for superscripts: ";
2580 COLOR FG,BG: E=2: L=1: GOSUB 2320         'Get suB/suPerscript choice
2590 IF R=27 THEN A$="": RETURN                'Esc means cancel
2600 IF R$="B" THEN RETURN                     'Subscripts chosen
2610 IF R$<>"P" THEN BEEP: GOTO 2560           'Try again if not suPerscripts
2620 A$=CHR$(27)+"K"+CHR$(27)+"M"+CHR$(27)+"J": RETURN 'Set control string
2630 '
2640 '
2650 '
2660 '*** Sub-routine to set variable horizontal tab stops
2670 TB$="": LOCATE ,41: PRINT "Press <Esc> to cancel selection";
2680 GOSUB 2210: COLOR 0,7: PRINT " Enter columns (1-255)";
2690 COLOR FG,BG: PRINT TB$+" ";               'Show tabs entered so far
2700 E=4: L=4: GOSUB 2320                      'Get column number
2710 IF R=27 THEN A$="": RETURN                'Esc means cancel
2720 IF LEN(S$)=0 THEN 2800                    'No entry means finished
2730 R=VAL(S$)                                 'Get column number
2740 IF R=0 OR R>255 THEN BEEP: GOTO 2680      'Column must be 1-255
2750 IF LEN(S$)<3 THEN S$="0"+S$: GOTO 2750    'Must be 3-digit tab column
2760 IF LEN(S$)>3 THEN BEEP: GOTO 2680         'Can't be more than 3 digits
2770 IF TB$>"" THEN TB$=TB$+","                'Need comma between tabs
2780 TB$=TB$+S$: IF R>233 THEN 2800            'Only one tab allowed 234-255
2790 IF LEN(TB$)<52 THEN 2680                  'Room for 14 tabs on line
2800 IF LEN(TB$)=0 THEN A$="": RETURN          'Done if no entry
2810 A$=A$+TB$+CHR$(13): RETURN                'Set tab string
2820 '
2830 '
2840 '
2850 '*** Sub-routine to set fixed horizontal tab stops
2860 TB$="": LOCATE ,41: PRINT "Press <Esc> to cancel selection";
2870 GOSUB 2210: COLOR 0,7                     'Clear line 25 & reverse video
2880 PRINT " Enter number of columns between tab stops ";
2890 COLOR FG,BG: E=3: L=4: GOSUB 2320         'Get tab interval
2900 IF R=27 THEN A$="": RETURN                'Esc means cancel
2910 IF LEN(S$)=0 THEN A$="": RETURN           'No entry means finished
2920 IF LEN(S$)>3 THEN BEEP: GOTO 2870         'Only 3 digits allowed
2930 R=VAL(S$): A=R+1                          'Get starting tab column
2940 IF R=0 OR R>254 THEN BEEP: GOTO 2870      'Tab interval must be 1-254
2950 FOR I=1 TO 16                             'Limit is 16 tab stops
2960    IF A>255 THEN 3030                     'Column cannot exceed 255
2970    S$=MID$(STR$(A),2)                     'Convert column number to string
2980    IF LEN(S$)<3 THEN S$="0"+S$: GOTO 2980 'Must be 3-digit column number
2990    IF TB$>"" THEN TB$=TB$+","             'Need comma between tabs
3000    TB$=TB$+S$                             'Store tab string
3010    IF A>233 THEN 3030 ELSE A=A+R          'Only one tab allowed 234-255
3020 NEXT I
3030 GOSUB 2190: PRINT "Tabs set at "TB$;      'Show tab stops
3040 A$=A$+TB$+CHR$(13)                        'Set tab string
3050 LOCATE 25,52: PRINT "Press any key to continue";
3060 IF INKEY$="" THEN 3060 ELSE GOSUB 2190: RETURN
3070 '
3080 '
3090 '
3100 '*** Sub-routine to get number of lines/page
3110 LOCATE ,41: PRINT "Press <Esc> to cancel selection";
3120 GOSUB 2210: COLOR 0,7
3130 PRINT " Enter number of lines per page (00-99) at "LI$" LPI: ";
3140 COLOR FG,BG: E=3: L=3: GOSUB 2320         'Get number of lines
3150 IF R=27 THEN A$="": RETURN                'Esc means cancel
3160 IF LEN(S$)=1 THEN S$="0"+S$: GOTO 3180
3170 IF LEN(S$)>2 THEN BEEP: GOTO 3120
3180 A$=A$+S$: GOSUB 2190
3190 PRINT "Form length set to "S$" lines at "LI$" LPI";: RETURN
3200 '
3210 '
3220 '
3230 '*** Sub-routine to get number of lines to skip
3240 LOCATE ,41: PRINT "Press <Esc> to cancel selection";
3250 GOSUB 2210: COLOR 0,7
3260 PRINT " Enter number of lines to skip (00-99): ";
3270 COLOR FG,BG: E=3: L=3: GOSUB 2320         'Get number of lines
3280 IF R=27 THEN A$="": RETURN                'Esc means cancel
3290 IF LEN(S$)=1 THEN S$="0"+S$: GOTO 3310
3300 IF LEN(S$)>2 THEN BEEP: GOTO 3250
3310 A$=A$+S$: RETURN
3320 '
3330 '
3340 '
3350 '*** Sub-routine to get left margin print position
3360 LOCATE ,41: PRINT "Press <Esc> to cancel selection";
3370 GOSUB 2210: COLOR 0,7
3380 PRINT " Enter left margin column number (1-90): ";
3390 COLOR FG,BG: E=3: L=4: GOSUB 2320         'Get column number
3400 IF R=27 THEN A$="": RETURN ELSE R=VAL(S$) 'Esc means cancel
3410 IF R<1 OR R>90 THEN BEEP: GOTO 3370       'Must be column 1-90
3420 S$=MID$(STR$(VAL(S$)*10-9),2)             'Multiply by 10 dots/inch
3430 IF LEN(S$)<3 THEN S$="0"+S$: GOTO 3430    'Make it 3 digits
3440 A$=A$+S$: RETURN
3450 '
3460 '
3470 '
3480 '*** Sub-routine to get spacing between characters (# of 1/120's)
3490 LOCATE ,41: PRINT "Press <Esc> to cancel selection";
3500 GOSUB 2210: COLOR 0,7
3510 PRINT " Enter number of 1/120-inch spaces between characters (0-9): ";
3520 COLOR FG,BG: E=3: L=2: GOSUB 2320         'Get number of 1/120's
3530 IF R=27 THEN A$="": RETURN                'Esc means cancel
3540 IF LEN(S$)>1 THEN BEEP: GOTO 3500
3550 A$=A$+CHR$(ASC(S$)-48): RETURN
3560 '
3570 '
3580 '
3590 '
3600 '*** Sub-routine to download Italics character set
3610 D$="": BAS$="OKITALIC.BAS"
3620 ON ERROR GOTO 3650
3630 OPEN "I",#1,D$+BAS$: CLOSE: ON ERROR GOTO 0
3640 CHAIN D$+BAS$,2020
3650 RESUME 3660
3660 ON ERROR GOTO 0: GOSUB 2210: COLOR 0,7
3670 PRINT " Enter letter of drive containing "BAS$": ";
3680 BEEP: COLOR FG,BG
3690 LOCATE 24,41: PRINT "Press <Esc> to cancel selection";
3700 LOCATE 25,50: E=2: L=1: GOSUB 2320        'Get drive letter
3710 IF R=27 THEN RETURN                       'Esc means cancel
3720 D$=R$+":": GOTO 3620
3730 '
3740 '
3750 '
3760 '*** Sub-routine to do a print test
3770 LOCATE ,41: PRINT "Make sure printer is ready";
3780 A$="": FOR I=32 TO 127: A$=A$+CHR$(I): NEXT I
3790 A$=A$+CHR$(13)+CHR$(10): GOSUB 2030: RETURN
3800 '
3810 '
3820 '
3830 '*** Sub-routine to print an ASCII text file
3840 LOCATE ,41: PRINT "Press <Esc> to cancel selection";
3850 GOSUB 2210: COLOR 0,7
3860 PRINT " Enter number of print lines per page: ";
3870 COLOR FG,BG: E=3: L=4: GOSUB 2320         'Get response
3880 IF R=27 THEN RETURN                       'Esc means cancel
3890 IF S$="" THEN PL=-1: LP=PL: GOTO 3920     'Set no-line-check
3900 PL=VAL(S$): LP=PL: GOTO 3920              'Set # lines per page
3910 LOCATE ,41: PRINT "Press <Esc> to cancel selection";
3920 GOSUB 2210: COLOR 0,7
3930 PRINT " Enter name of ASCII text file: ";
3940 COLOR FG,BG: E=1: L=15: GOSUB 2320        'Get file name
3950 IF S$="" THEN RETURN                      'Skip it if no file name
3960 ON ERROR GOTO 4140                        'Set error-catcher
3970 OPEN "I",#2,S$                            'Open the file
3980 IF EOF(2) THEN GOSUB 2190: PRINT S$" is an empty file";: GOTO 4120
3990 LINE INPUT #2,A$: IF A$="" THEN 4040      'Check for blank first line
4000 R=ASC(A$): IF R<128 THEN 4020             'Check for non-ASCII file
4010 GOSUB 2190: PRINT S$" is not an ASCII file";: CLOSE: GOTO 3910
4020 IF R<>12 THEN 4040                        'Check for form-feed to start
4030 IF LEN(A$)<2 THEN 3990 ELSE A$=MID$(A$,2) 'Delete starting form-feed
4040 LOCATE 24,1: PRINT SPACE$(40);: LOCATE ,1: PRINT "Printing "S$;
4050 OPEN "O",#1,"LPT1:": WIDTH #1,255: GOTO 4090 'Ready the printer
4060 '
4070 IF EOF(2) THEN PRINT #1,CHR$(12);: GOTO 4120 'Check for end of file
4080 LINE INPUT #2,A$                             'Read the next line
4090 IF LP=0 THEN LP=PL: PRINT #1,CHR$(12);       'Form-feed after PL lines
4100 PRINT #1,A$: IF LP>0 THEN LP=LP-1            'Print the line
4110 R$=INKEY$: IF R$="" THEN 4070 ELSE IF ASC(R$)<>27 THEN 4110 'Continue
4120 CLOSE: ON ERROR GOTO 0: RETURN               'Close files - all done
4130 '
4140 IF ERL=3970 THEN 4160 ELSE IF ERL=4100 THEN 4170
4150 IF ERL=3990 THEN RESUME 4010 ELSE ON ERROR GOTO 0
4160 GOSUB 2190: PRINT "Bad file name - try again";: RESUME 3910
4170 GOSUB 2210: PRINT "Check printer - press <Enter> when ready";
4180 BEEP: E=1: L=0: GOSUB 2320                   'Get response
4190 IF R=27 THEN RESUME 4120                     'Esc means cancel
4200 IF R=13 THEN RESUME 4100 ELSE 4180           'Ignore if not Enter key
4210 '
4220 '
4230 '
4240 '*** Sub-routine to print disk directory in standard DOS format
4250 '*** using DOS & BASIC 2.0 features.
4260 IF BV=2 THEN 4280 ELSE BEEP: PF=0           'Function requires BASIC 2.00
4270 GOSUB 2190: PRINT "Sorry - BASIC 2.00 function";: RETURN
4280 CLS: LOCATE 2: PRINT PN$(R)
4290 PRINT: PRINT "Press <Esc> to cancel selection"
4300 PRINT: COLOR 0,7
4310 PRINT " Enter letter of disk drive: ";: COLOR FG,BG
4320 E=2: L=O: GOSUB 2320                        'Get response
4330 IF R=27 THEN RETURN                         'Esc means exit
4340 IF R$<"E" THEN 4360                         'Only valid drive letters
4350 S$="": GOSUB 2330: GOTO 4330                'Try another letter
4360 LOCATE X,Y: PRINT R$: D$=R$                 'Show drive letter
4370 '
4380 PRINT: PRINT "Make sure printer is ready";
4390 ON ERROR GOTO 4570: OPEN "R",#1,"LPT1:": WIDTH #1,255
4400 PRINT #1,CHR$(17)CHR$(24)CHR$(27)"1"CHR$(30)CHR$(28)CHR$(27)"8"
4410 PRINT #1,CHR$(27)"%C001": CLOSE: ON ERROR GOTO 0
4420 '
4430 CMD$="dir "+D$+":>prn": GOSUB 4520          'Print the disk directory
4440 PRINT: PRINT: PRINT: PRINT
4450 '
4460 ON ERROR GOTO 4570: OPEN "R",#1,"LPT1:": WIDTH #1,255
4470 PRINT #1,CHR$(13)+CHR$(10)+CHR$(10): CLOSE: ON ERROR GOTO 0
4480 '
4490 CMD$="chkdsk "+D$+":>prn": GOSUB 4520       'Print the chkdsk report
4500 RETURN
4510 '
4520 DEF SEG: A=PEEK(&H30): B=PEEK(&H31)         'Save BASIC's current segment
4530 SHELL CMD$                                  'Execute the DOS command
4540 POKE &H30,A: POKE &H31,B                    'Restore BASIC's segment
4550 RETURN
4560 '
4570 IF ERR=55 THEN CLOSE: RESUME                'Ignore "File already open"
4580 CLS: IF ERR=24 OR ERR=25 THEN PRINT "Printer is not ready": RESUME 4610
4590 IF ERR=27 THEN PRINT "Printer is out of paper": RESUME 4610
4600 ON ERROR GOTO 0                             'For unexpected errors
4610 PRINT "Press <Enter> when ready to continue (Esc to exit)"
4620 BEEP: E=1: L=0: GOSUB 2320                  'Get response
4630 IF R=27 THEN ON ERROR GOTO 0: CLOSE: RETURN 'Esc means exit
4640 IF R<>13 THEN 4620                          'Enter means try again
4645 IF ERL < 4460 THEN 4400 ELSE 4470           'Choose retry line
4650 '
4660 '
4670 '
4680 '*** Sub-routine to display disk directory
4690 LOCATE 24,41: PRINT "Press <Esc> to cancel selection";
4700 GOSUB 2210: COLOR 0,7
4710 PRINT " Enter letter of disk drive: ";: COLOR FG,BG
4720 E=2: L=1: GOSUB 2320                         'Get response
4730 IF R=27 THEN RETURN                          'Esc means cancel
4740 IF S$>"D" THEN BEEP: LOCATE X,Y-1: GOTO 4720 'Check valid drive letter
4750 IF CG=1 THEN SCREEN ,,2,0                    'Build page 2 for C/G
4760 CLS: IF BV=1 THEN PRINT "Disk drive "R$":"
4770 ON ERROR GOTO 4810: FILES R$+":*.*"          'Display directory
4780 ON ERROR GOTO 0: LOCATE 25,41: PRINT "Press any key to continue";
4790 IF CG=1 THEN SCREEN ,,2,2                    'Display page 2 for C/G
4800 E=1: L=0: GOSUB 2320: RETURN                 'Get entry & return
4810 RESUME 4820
4820 ON ERROR GOTO 0: GOTO 4690                   'Try again
4830 '
4840 '
4850 '
4860 '*** Sub-routine to exit to MENU
4870 D$="": BAS$="MENU.BAS"
4880 ON ERROR GOTO 4900: OPEN "I",#1,D$+BAS$: CLOSE: ON ERROR GOTO 0
4890 CLS: CHAIN D$+BAS$
4900 RESUME 4910
4910 ON ERROR GOTO 0: GOSUB 2210: COLOR 0,7
4920 PRINT " Enter letter of drive containing "BAS$": ";
4930 BEEP: COLOR FG,BG
4940 LOCATE 24,41: PRINT "Press <Esc> to cancel selection";
4950 LOCATE 25,46: E=2: L=1: GOSUB 2320
4960 IF R=27 THEN RETURN                          'Esc means cancel
4970 D$=R$+":": GOTO 4880
4980 '
4990 '
5000 '
5010 '*** Sub-routine to exit to BASIC
5020 ON ERROR GOTO 0: SCREEN 0,1,0,0: CLS: END
5030 '
5040 '
5050 '
5060 '*** Sub-routine to exit to DOS
5070 CLS: SYSTEM
5080 '
5090 '
5100 '
5110 '*** Print control codes & names
5120 '*** Menu items A-Z
5130 '*** Control code names precede codes
5140 '*** End each code sequence with 255
5150 DATA "Clear print buffer & reset printer"
5160 DATA 17,24,255
5170 DATA "Data Processing print mode"
5180 DATA 27,48,255
5190 DATA "Correspondence Quality print mode"
5200 DATA 27,49,255
5210 DATA "Downloaded Character print mode"
5220 DATA 27,50,255
5230 DATA "Enhanced printing **"
5240 DATA 27,72,255
5250 DATA "Emphasized printing **"
5260 DATA 27,84,255
5270 DATA "Stop enhanced/emphasized printing"
5280 DATA 27,73,255
5290 DATA "10 characters per inch"
5300 DATA 30,255
5310 DATA "12 characters per inch"
5320 DATA 30,28,255
5330 DATA "17 characters per inch **"
5340 DATA 30,29,255
5350 DATA "Double-width characters"
5360 DATA 31,255
5370 DATA "6 lines per inch"
5380 DATA 27,54,255
5390 DATA "8 lines per inch"
5400 DATA 27,56,255
5410 DATA "Underlining on"
5420 DATA 27,67,255
5430 DATA "Underlining off"
5440 DATA 27,68,255
5450 DATA "Subscripts/superscripts on"
5460 DATA 27,77,27,75,27,76,255
5470 DATA "Subscripts/superscripts off"
5480 DATA 27,75,27,77,255
5490 DATA "Set variable horizontal tab stops"
5500 DATA 27,09,255
5510 DATA "Set fixed horizontal tab stops"
5520 DATA 27,09,255
5530 DATA "Clear all tab stops"
5540 DATA 27,09,13,255
5550 DATA "Set form length (for form-feeds)"
5560 DATA 27,70,255
5570 DATA "Set top-of-form"
5580 DATA 27,05,255
5590 DATA "Advance to top-of-form"
5600 DATA 12,255
5610 DATA "Skip 01-99 lines"
5620 DATA 27,11,255
5630 DATA "Set left margin"
5640 DATA 27,37,67,255
5650 DATA "Set space between characters *"
5660 DATA 27,78,255
5670 '
5680 '
5690 '*** Print-related functions
5700 '*** Menu items 1-8
5710 DATA "Download Italics character set"
5720 DATA "Print test--all ASCII characters"
5730 DATA "Print an ASCII text file"
5740 DATA "Print disk directory (BASIC 2.00)"
5750 DATA "Display disk directory"
5760 DATA "Exit to MENU"
5770 DATA "Exit to BASIC"
5780 DATA "Exit to DOS"
```

## OKIMENUC.BAS

```bas
1030 KEYOFF:SCREEN0,1,0,0:WIDTH80:CLS:DEFINTA-Z:BV=1:CG=0:LI$="?":ONERRORGOTO1060:E=TIMER/3:BV=2:GOTO1070
1060 RESUME1070
1070 ONERRORGOTO0
1080 DEFSEG=0:IF(PEEK(&H410)AND&H30)<&H30THENCG=1
1090 DEFSEG:IFCG=1THENSCREEN0,1,1,0:CLS
1100 OPTION BASE 1:DIMPC$(26),PN$(34):LOCATE2,10:PRINT"OKIDATA MicroLine 92  Print  Control  Menu":LOCATE4,10:PRINT"     Version 2.94      March 20, 1984":LOCATE6,10:PRINT"Copyright (C)1984 BWare SoftWare EveryWare":BG=SCREEN(2,10,1):FG=BGMOD16
1170 BG=(((BG-FG)/16)MOD128):LOCATE11:PRINT"LIMITED WARRANTY:  This program is guaranteed against exterior body rust":PRINT"for five years or 50,000 miles, whichever comes first.  No other warranty
1220 PRINT"is expressed or implied.  Our motto is CAVEAT EMPTOR!":LOCATE15:PRINT"SERVICE AGREEMENT:  You get what you pay for!":LOCATE17:PRINT"LICENSE AGREEMENT:  This program may be freely copied or modified,
1270 PRINT"but SALE of this program is STRICTLY FORBIDDEN without the express":PRINT"written permission of BWare SoftWare EveryWare.  Remember,":PRINT"selling SoftWare from B.S.EveryWare will get you NoWhere!":LOCATE23
1310 PRINT"This program is made available through the Software Library of the":PRINT"Silicon Valley Computer Society, P.O. Box 60506, Sunnyvale, CA 94088";:IFCG=1THENSCREEN,,0,1:CLS
1350 E=VAL(MID$(TIME$,7)):RESTORE5150:FORI=1TO26:READPN$(I)
1400 READR:IFR<255THENR$=R$+CHR$(R):GOTO1400
1420 PC$(I)=R$:R$="":NEXT:RESTORE5710:FORI=27TO34:READPN$(I):NEXT:IFCG=1THEN1550
1480 IFINKEY$>""THEN1540
1490 I=VAL(MID$(TIME$,7)):IFI<ETHENI=I+60
1500 IFI-E<10THEN1480 ELSE1540
1530 IFCG=1THENSCREEN,,0,1
1540 CLS
1550 PRINT"OKIDATA ML92 Print Control Menu";:LOCATE,50:PRINTDATE$"    "TIME$:PRINT:FORI=1TO13:PRINTCHR$(I+64)". "PN$(I);:LOCATE,41:PRINTCHR$(I+77)". "PN$(I+13):NEXT:PRINT:PRINT"** Not compatible with CQ print mode";
1600 LOCATE,41:PRINT"* Compatible only with CQ print mode":PRINT:FORI=27TO30:PRINTCHR$(I+22)". "PN$(I);:LOCATE,41:PRINTCHR$(I+26)". "PN$(I+4):NEXT:IFCG=1THENSCREEN,,0,0
1680 ONERRORGOTO0:GOSUB2200:COLOR0,7
1690 PRINT" Enter selection: ";:COLORFG,BG
1700 E=1:L=0:GOSUB2320:IFR=27THEN1530
1720 IFR$<"1"THEN1820 ELSEIFR$>"8"THEN1800
1740 PF=R-48:R=PF+26:GOSUB2190:PRINTPN$(R);:ONPFGOSUB3610,3770,3840,4260,4690,4870,5020,5070:GOSUB2200:IFPF=4ORPF=5THEN1530
1770 GOTO1680
1800 R=R-64:IFR>0ANDR<27THEN1850
1820 GOSUB2190:BEEP:PRINT"Invalid selection";:GOTO1700
1850 A$=PC$(R):IFA$=""THEN1820
1860 GOSUB2190:PRINTPN$(R);:LOCATE,41:PRINT"Make sure printer is ready";:IFR=12THENLI$="6":GOTO1970
1890 IFR=13THENLI$="8":GOTO1970
1900 IFR=16THENGOSUB2550:GOTO1960
1910 IFR=18THENGOSUB2670:GOTO1970
1920 IFR=19THENGOSUB2860:GOTO1970
1930 IFR=21THENGOSUB3110:GOTO1970
1940 IFR=24THENGOSUB3240:GOTO1970
1950 IFR=25THENGOSUB3360:GOTO1970
1960 IFR=26THENGOSUB3490
1970 GOSUB2030:GOTO1680
2030 ONERRORGOTO2080
2040 OPEN "R",#1,"LPT1:":WIDTH#1,255
2050 PRINT#1,A$;
2060 CLOSE#1:ONERRORGOTO0:RETURN
2080 IFERR=55THENCLOSE:RESUME
2090 IFERL<>2050THENONERRORGOTO0
2100 GOSUB2210:PRINT"Check printer - press <Enter> to continue";:LOCATE24,41:PRINT"Press <Esc> to cancel selection";
2120 BEEP:E=1:L=0:GOSUB2320:IFR=27THENRESUME2060
2140 IFR=13THENRESUME ELSE2120
2190 LOCATE24,1:PRINTSPACE$(79);:LOCATE24,1:RETURN
2200 LOCATE24,41:PRINTSPACE$(39);
2210 LOCATE25,1:PRINTSPACE$(79);:LOCATE25,1:RETURN
2320 S$="":X=CSRLIN:Y=POS(0):GOTO2340
2330 BEEP
2340 R$=INKEY$:IFR$=""THENLOCATE1,64,0:PRINTTIME$;:GOTO2340
2350 IFLEN(R$)>1THEN2330
2360 R=ASC(R$):IFR=13THENRETURN
2370 IFR=27THENS$="":RETURN
2380 IFR=8THEN2470
2390 IFR>96ANDR<123THENR=R-32:R$=CHR$(R)
2400 ONEGOTO2440,2430,2420,2410:GOTO2330
2410 IFR$=","THENRETURN
2420 IFR$<"0"ORR$>"9"THEN2330 ELSE2440
2430 IFR$<"A"ORR$>"Z"THEN2330
2440 IFL=0THENRETURN
2450 S$=S$+R$:Y=Y+1:LOCATEX,Y:PRINTR$;:IFLEN(S$)<LTHEN2340 ELSERETURN
2470 IFLEN(S$)<1THEN2330
2480 S$=LEFT$(S$,LEN(S$)-1):LOCATEX,Y:Y=Y-1:PRINTCHR$(32);:GOTO2340
2550 LOCATE,41:PRINT"Press <Esc> to cancel selection";
2560 GOSUB2210:COLOR0,7:PRINT" Type <B> for subscripts, <P> for superscripts: ";:COLORFG,BG:E=2:L=1:GOSUB2320:IFR=27THENA$="":RETURN
2600 IFR$="B"THENRETURN
2610 IFR$<>"P"THENBEEP:GOTO2560
2620 A$=CHR$(27)+"K"+CHR$(27)+"M"+CHR$(27)+"J":RETURN
2670 TB$="":LOCATE,41:PRINT"Press <Esc> to cancel selection";
2680 GOSUB2210:COLOR0,7:PRINT" Enter columns (1-255)";:COLORFG,BG:PRINTTB$+" ";:E=4:L=4:GOSUB2320:IFR=27THENA$="":RETURN
2720 IFLEN(S$)=0THEN2800
2730 R=VAL(S$):IFR=0ORR>255THENBEEP:GOTO2680
2750 IFLEN(S$)<3THENS$="0"+S$:GOTO2750
2760 IFLEN(S$)>3THENBEEP:GOTO2680
2770 IFTB$>""THENTB$=TB$+",
2780 TB$=TB$+S$:IFR>233THEN2800
2790 IFLEN(TB$)<52THEN2680
2800 IFLEN(TB$)=0THENA$="":RETURN
2810 A$=A$+TB$+CHR$(13):RETURN
2860 TB$="":LOCATE,41:PRINT"Press <Esc> to cancel selection";
2870 GOSUB2210:COLOR0,7:PRINT" Enter number of columns between tab stops ";:COLORFG,BG:E=3:L=4:GOSUB2320:IFR=27THENA$="":RETURN
2910 IFLEN(S$)=0THENA$="":RETURN
2920 IFLEN(S$)>3THENBEEP:GOTO2870
2930 R=VAL(S$):A=R+1:IFR=0ORR>254THENBEEP:GOTO2870
2950 FORI=1TO16:IFA>255THEN3030
2970 S$=MID$(STR$(A),2)
2980 IFLEN(S$)<3THENS$="0"+S$:GOTO2980
2990 IFTB$>""THENTB$=TB$+",
3000 TB$=TB$+S$:IFA>233THEN3030 ELSEA=A+R
3020 NEXT
3030 GOSUB2190:PRINT"Tabs set at "TB$;:A$=A$+TB$+CHR$(13):LOCATE25,52:PRINT"Press any key to continue";
3060 IFINKEY$=""THEN3060 ELSEGOSUB2190:RETURN
3110 LOCATE,41:PRINT"Press <Esc> to cancel selection";
3120 GOSUB2210:COLOR0,7:PRINT" Enter number of lines per page (00-99) at "LI$" LPI: ";:COLORFG,BG:E=3:L=3:GOSUB2320:IFR=27THENA$="":RETURN
3160 IFLEN(S$)=1THENS$="0"+S$:GOTO3180
3170 IFLEN(S$)>2THENBEEP:GOTO3120
3180 A$=A$+S$:GOSUB2190:PRINT"Form length set to "S$" lines at "LI$" LPI";:RETURN
3240 LOCATE,41:PRINT"Press <Esc> to cancel selection";
3250 GOSUB2210:COLOR0,7:PRINT" Enter number of lines to skip (00-99): ";:COLORFG,BG:E=3:L=3:GOSUB2320:IFR=27THENA$="":RETURN
3290 IFLEN(S$)=1THENS$="0"+S$:GOTO3310
3300 IFLEN(S$)>2THENBEEP:GOTO3250
3310 A$=A$+S$:RETURN
3360 LOCATE,41:PRINT"Press <Esc> to cancel selection";
3370 GOSUB2210:COLOR0,7:PRINT" Enter left margin column number (1-90): ";:COLORFG,BG:E=3:L=4:GOSUB2320:IFR=27THENA$="":RETURN ELSER=VAL(S$)
3410 IFR<1ORR>90THENBEEP:GOTO3370
3420 S$=MID$(STR$(VAL(S$)*10-9),2)
3430 IFLEN(S$)<3THENS$="0"+S$:GOTO3430
3440 A$=A$+S$:RETURN
3490 LOCATE,41:PRINT"Press <Esc> to cancel selection";
3500 GOSUB2210:COLOR0,7:PRINT" Enter number of 1/120-inch spaces between characters (0-9): ";:COLORFG,BG:E=3:L=2:GOSUB2320:IFR=27THENA$="":RETURN
3540 IFLEN(S$)>1THENBEEP:GOTO3500
3550 A$=A$+CHR$(ASC(S$)-48):RETURN
3610 D$="":BAS$="OKITALIC.BAS
3620 ONERRORGOTO3650
3630 OPEN "I",#1,D$+BAS$:CLOSE:ONERRORGOTO0
3640 CHAIND$+BAS$,2020
3650 RESUME3660
3660 ONERRORGOTO0:GOSUB2210:COLOR0,7
3670 PRINT" Enter letter of drive containing "BAS$": ";:BEEP:COLORFG,BG:LOCATE24,41:PRINT"Press <Esc> to cancel selection";:LOCATE25,50:E=2:L=1:GOSUB2320:IFR=27THENRETURN
3720 D$=R$+":":GOTO3620
3770 LOCATE,41:PRINT"Make sure printer is ready";:A$="":FORI=32TO127:A$=A$+CHR$(I):NEXT:A$=A$+CHR$(13)+CHR$(10):GOSUB2030:RETURN
3840 LOCATE,41:PRINT"Press <Esc> to cancel selection";:GOSUB2210:COLOR0,7:PRINT" Enter number of print lines per page: ";:COLORFG,BG:E=3:L=4:GOSUB2320:IFR=27THENRETURN
3890 IFS$=""THENPL=-1:LP=PL:GOTO3920
3900 PL=VAL(S$):LP=PL:GOTO3920
3910 LOCATE,41:PRINT"Press <Esc> to cancel selection";
3920 GOSUB2210:COLOR0,7:PRINT" Enter name of ASCII text file: ";:COLORFG,BG:E=1:L=15:GOSUB2320:IFS$=""THENRETURN
3960 ONERRORGOTO4140
3970 OPEN "I",#2,S$:IF EOF(2)THEN GOSUB 2190:PRINT S$" is an empty file";:GOTO 4120
3990 LINEINPUT#2,A$:IFA$=""THEN4040
4000 R=ASC(A$):IFR<128THEN4020
4010 GOSUB2190:PRINTS$" is not an ASCII file";:CLOSE:GOTO3910
4020 IFR<>12THEN4040
4030 IFLEN(A$)<2THEN3990 ELSEA$=MID$(A$,2)
4040 LOCATE24,1:PRINTSPACE$(40);:LOCATE,1:PRINT"Printing "S$;:OPEN "O",#1,"LPT1:":WIDTH#1,255:GOTO4090
4070 IFEOF(2)THENPRINT#1,CHR$(12);:GOTO4120
4080 LINEINPUT#2,A$
4090 IFLP=0THENLP=PL:PRINT#1,CHR$(12);
4100 PRINT#1,A$:IFLP>0THENLP=LP-1
4110 R$=INKEY$:IFR$=""THEN4070 ELSEIFASC(R$)<>27THEN4110
4120 CLOSE:ONERRORGOTO0:RETURN
4140 IFERL=3970THEN4160 ELSEIFERL=4100THEN4170
4150 IFERL=3990THENRESUME4010 ELSEONERRORGOTO0
4160 GOSUB2190:PRINT"Bad file name - try again";:RESUME3910
4170 GOSUB2210:PRINT"Check printer - press <Enter> when ready";
4180 BEEP:E=1:L=0:GOSUB2320:IFR=27THENRESUME4120
4200 IFR=13THENRESUME4100 ELSE4180
4260 IFBV=2THEN4280 ELSEBEEP:PF=0
4270 GOSUB2190:PRINT"Sorry - BASIC 2.00 function";:RETURN
4280 CLS:LOCATE2:PRINTPN$(R):PRINT:PRINT"Press <Esc> to cancel selection":PRINT:COLOR0,7:PRINT" Enter letter of disk drive: ";:COLORFG,BG:E=2:L=O:GOSUB2320
4330 IFR=27THENRETURN
4340 IFR$<"E"THEN4360
4350 S$="":GOSUB2330:GOTO4330
4360 LOCATEX,Y:PRINTR$:D$=R$:PRINT:PRINT"Make sure printer is ready";:ONERRORGOTO4570:OPEN "R",#1,"LPT1:":WIDTH#1,255
4400 PRINT#1,CHR$(17)CHR$(24)CHR$(27)"1"CHR$(30)CHR$(28)CHR$(27)"8":PRINT#1,CHR$(27)"%C001":CLOSE:ONERRORGOTO0
4430 CMD$="dir "+D$+":>prn":GOSUB4520:PRINT:PRINT:PRINT:PRINT
4460 ONERRORGOTO4570:OPEN "R",#1,"LPT1:":WIDTH#1,255
4470 PRINT#1,CHR$(13)+CHR$(10)+CHR$(10):CLOSE:ONERRORGOTO0
4490 CMD$="chkdsk "+D$+":>prn":GOSUB4520:RETURN
4520 DEFSEG:A=PEEK(&H30):B=PEEK(&H31):SHELLCMD$:POKE&H30,A:POKE&H31,B:RETURN
4570 IFERR=55THENCLOSE:RESUME
4580 CLS:IFERR=24ORERR=25THENPRINT"Printer is not ready":RESUME4610
4590 IFERR=27THENPRINT"Printer is out of paper":RESUME4610
4600 ONERRORGOTO0
4610 PRINT"Press <Enter> when ready to continue (Esc to exit)
4620 BEEP:E=1:L=0:GOSUB2320:IFR=27THENONERRORGOTO0:CLOSE:RETURN
4640 IFR<>13THEN4620
4645 IFERL<4460THEN4400 ELSE4470
4690 LOCATE24,41:PRINT"Press <Esc> to cancel selection";:GOSUB2210:COLOR0,7:PRINT" Enter letter of disk drive: ";:COLORFG,BG
4720 E=2:L=1:GOSUB2320:IFR=27THENRETURN
4740 IFS$>"D"THENBEEP:LOCATEX,Y-1:GOTO4720
4750 IFCG=1THENSCREEN,,2,0
4760 CLS:IFBV=1THENPRINT"Disk drive "R$":
4770 ONERRORGOTO4810:FILESR$+":*.*
4780 ONERRORGOTO0:LOCATE25,41:PRINT"Press any key to continue";
4790 IFCG=1THENSCREEN,,2,2
4800 E=1:L=0:GOSUB2320:RETURN
4810 RESUME4820
4820 ONERRORGOTO0:GOTO4690
4870 D$="":BAS$="MENU.BAS
4880 ONERRORGOTO4900:OPEN "I",#1,D$+BAS$:CLOSE:ONERRORGOTO0
4890 CLS:CHAIND$+BAS$
4900 RESUME4910
4910 ONERRORGOTO0:GOSUB2210:COLOR0,7
4920 PRINT" Enter letter of drive containing "BAS$": ";:BEEP:COLORFG,BG:LOCATE24,41:PRINT"Press <Esc> to cancel selection";:LOCATE25,46:E=2:L=1:GOSUB2320:IFR=27THENRETURN
4970 D$=R$+":":GOTO4880
5020 ONERRORGOTO0:SCREEN0,1,0,0:CLS:END
5070 CLS:SYSTEM
5150 DATA"Clear print buffer & reset printer":DATA17,24,255:DATA"Data Processing print mode":DATA27,48,255:DATA"Correspondence Quality print mode":DATA27,49,255:DATA"Downloaded Character print mode":DATA27,50,255:DATA"Enhanced printing **
5240 DATA27,72,255:DATA"Emphasized printing **":DATA27,84,255:DATA"Stop enhanced/emphasized printing":DATA27,73,255:DATA"10 characters per inch":DATA30,255:DATA"12 characters per inch":DATA30,28,255:DATA"17 characters per inch **":DATA30,29,255
5350 DATA"Double-width characters":DATA31,255:DATA"6 lines per inch":DATA27,54,255:DATA"8 lines per inch":DATA27,56,255:DATA"Underlining on":DATA27,67,255:DATA"Underlining off":DATA27,68,255:DATA"Subscripts/superscripts on
5460 DATA27,77,27,75,27,76,255:DATA"Subscripts/superscripts off":DATA27,75,27,77,255:DATA"Set variable horizontal tab stops":DATA27,09,255:DATA"Set fixed horizontal tab stops":DATA27,09,255:DATA"Clear all tab stops":DATA27,09,13,255
5550 DATA"Set form length (for form-feeds)":DATA27,70,255:DATA"Set top-of-form":DATA27,05,255:DATA"Advance to top-of-form":DATA12,255:DATA"Skip 01-99 lines":DATA27,11,255:DATA"Set left margin":DATA27,37,67,255:DATA"Set space between characters *
5660 DATA27,78,255
5710 DATA"Download Italics character set":DATA"Print test--all ASCII characters":DATA"Print an ASCII text file":DATA"Print disk directory (BASIC 2.00)":DATA"Display disk directory":DATA"Exit to MENU":DATA"Exit to BASIC":DATA"Exit to DOS
```

## OKITALIC.BAS

```bas
1010 '*** OKITALIC.BAS - Okidata ML92 italics down-load character generator
1020 KEY OFF: DEFINT A-K: ON ERROR GOTO 1260      'Set error-catcher
1030 OPEN "R",#1,"LPT1:": WIDTH #1,255            'Eliminate line-feed's
1040 GOSUB 1360: GOSUB 1350: PRINT " Downloading Italics character set";
1050 RESTORE 3032
1060 FOR I=32 TO 127  'Now download character set defined in data statements
1070   READ T$,C0,C1,C2,C3,C4,C5,C6,C7,C8,C9,C10,C11
1080   PRINT #1,CHR$(27)"%"T$CHR$(C0)CHR$(C1)CHR$(C2)CHR$(C3)CHR$(C4)CHR$(C5)                   CHR$(C6)CHR$(C7)CHR$(C8)CHR$(C9)CHR$(C10)CHR$(C11);
1090   IF I MOD 3 = 0 THEN PRINT ".";
1100 NEXT I
1110 ON ERROR GOTO 0
1120 PRINT "FINISHED";: CLOSE
1130 IF CALLER$="" THEN      END ELSE BAS$=CALLER$
1140 ON ERROR GOTO 1150: OPEN "I",#1,BAS$: CLOSE: ON ERROR GOTO 0: CHAIN BAS$
1150 RESUME 1160
1160 GOSUB 1350: LOCATE ,41: PRINT "Press <Esc> to exit to BASIC";
1170 GOSUB 1360: PRINT " Enter letter of drive containing "CALLER$" ";
1180 BEEP
1190 K$=INKEY$: IF K$="" THEN 1190 ELSE K=ASC(K$) 'Get response
1200 IF K=27 THEN CLS: ON ERROR GOTO 0: END       'Esc means exit
1210 K$=CHR$(K AND &H5F)                          'Force upper case
1220 IF K$<"A" OR K$>"D" THEN 1180                'Get valid drive letter
1230 PRINT K$;: BAS$=K$+":"+CALLER$: GOTO 1140    'Try new drive letter
1240 '
1250 '*** Printer error handler
1260 A=CSRLIN: B=POS(0)                           'Save cursor position
1270 GOSUB 1360: PRINT " Check printer - press <Enter> when ready";
1280 BEEP: PRINT " . . . . Press <Esc> to exit";
1290 K$=INKEY$: IF K$="" THEN 1290 ELSE K=ASC(K$)
1300 IF K=13 THEN 1320 ELSE IF K<>27 THEN 1270
1310 GOSUB 1350: GOSUB 1360: CLOSE: LOCATE A,B: RESUME 1130
1320 GOSUB 1360: IF ERL=1080 THEN LOCATE A,B: RESUME ELSE ON ERROR GOTO 0
1330 '
1340 '*** Routines to clear lines 24 & 25
1350 LOCATE 24,1: PRINT SPACE$(79);: LOCATE 24,1: RETURN
1360 LOCATE 25,1: PRINT SPACE$(79);: LOCATE 25,1: RETURN
1370 '
2000 '
2010 '*** Entry point for OKIMENU
2020 CALLER$="OKIMENU.BAS": GOTO 1020
2030 '
3000 '
3010 ' *** Following are italic character definitions
3032  DATA A,32,&H0,&H0,&H0,&H0,&H0,&H0,&H0,&H0,&H0,&H0,&H0           :'space
3033  DATA A,33,&H0,&H0,&H40,&H0,&H8,&H4,&H2,&H1,&H0,&H0,&H0          :'!
3034  DATA A,34,&H0,&H0,&H4,&H2,&H1,&H0,&H4,&H2,&H1,&H0,&H0           :'quote
3035  DATA A,35,&H0,&H54,&H20,&H1C,&H2,&H55,&H20,&H1C,&H2,&H15,&H0    :'#
3036  DATA A,36,&H0,&H0,&H24,&H48,&H32,&HC,&H22,&H9,&H12,&H0,&H0      :'$
3037  DATA A,37,&H0,&H0,&H42,&H21,&H12,&H49,&H24,&H42,&H21,&H0,&H0    :'%
3038  DATA A,38,&H0,&H30,&H0,&H4A,&H1,&H4C,&H11,&H22,&H50,&H8,&H0     :'&
3039  DATA A,39,&H0,&H0,&H0,&H4,&H1,&H2,&H1,&H0,&H0,&H0,&H0           :''
3040  DATA A,40,&H0,&H0,&H0,&H18,&H24,&H42,&H0,&H1,&H0,&H0,&H0        :'(
3041  DATA A,41,&H0,&H0,&H0,&H40,&H0,&H21,&H12,&HC,&H0,&H0,&H0        :')
3042  DATA A,42,&H0,&H8,&H20,&H18,&H2,&H1C,&H20,&HC,&H2,&H8,&H0       :'*
3043  DATA A,43,&H0,&H8,&H0,&H28,&H10,&H8,&H4,&HA,&H0,&H8,&H0         :'+
3044  DATA D,44,&H0,&H0,&H0,&H40,&H10,&H20,&H10,&H0,&H0,&H0,&H0       :',
3045  DATA A,45,&H0,&H8,&H0,&H8,&H0,&H8,&H0,&H8,&H0,&H0,&H0           :'-
3046  DATA A,46,&H0,&H0,&H0,&H40,&H20,&H40,&H20,&H0,&H0,&H0,&H0       :'.
3047  DATA A,47,&H0,&H0,&H40,&H20,&H10,&H8,&H4,&H2,&H1,&H0,&H0        :'/
3048  DATA A,48,&H0,&H58,&H24,&H52,&H0,&H49,&H0,&H25,&H12,&HD,&H0     :'0
3049  DATA A,49,&H0,&H0,&H40,&H0,&H60,&H12,&H48,&H6,&H1,&H0,&H0       :'1
3050  DATA A,50,&H0,&H40,&H4,&H62,&H0,&H51,&H0,&H49,&H4,&H2,&H0       :'2
3051  DATA A,51,&H0,&H20,&H40,&H1,&H48,&H1,&H4C,&H31,&H2,&H1,&H0      :'3
3052  DATA A,52,&H0,&H0,&H10,&H8,&H10,&H44,&H30,&HA,&H14,&H3,&H0      :'4
3053  DATA A,53,&H0,&H0,&H20,&H44,&H2,&H45,&H0,&H45,&H20,&H19,&H0     :'5
3054  DATA A,54,&H0,&H30,&H8,&H44,&H0,&H4A,&H0,&H49,&H20,&H10,&H0     :'6
3055  DATA A,55,&H0,&H41,&H20,&H11,&H8,&H1,&H4,&H1,&H2,&H1,&H0        :'7
3056  DATA A,56,&H0,&H20,&H14,&H42,&H8,&H41,&H8,&H21,&H14,&H2,&H0     :'8
3057  DATA A,57,&H0,&H0,&H4,&H4A,&H0,&H29,&H0,&H11,&H8,&H6,&H0        :'9
3058  DATA A,58,&H0,&H0,&H0,&H20,&H14,&H22,&H14,&H2,&H0,&H0,&H0       :':
3059  DATA D,59,&H0,&H0,&H40,&H14,&H22,&H14,&H2,&H0,&H0,&H0,&H0       :';
3060  DATA A,60,&H0,&H8,&H10,&H0,&H24,&H0,&H42,&H0,&H1,&H0,&H0        :'<
3061  DATA A,61,&H0,&H10,&H0,&H14,&H0,&H14,&H0,&H14,&H0,&H4,&H0       :'=
3062  DATA A,62,&H0,&H0,&H40,&H0,&H21,&H0,&H12,&H0,&H4,&H8,&H0        :'>
3063  DATA A,63,&H0,&H0,&H2,&H40,&H1,&H10,&H1,&H8,&H1,&H6,&H0         :'?
3064  DATA A,64,&H0,&H30,&H48,&H4,&H42,&H18,&H41,&H14,&H9,&H6,&H0     :'@
3065  DATA A,65,&H0,&H60,&H18,&H4,&H12,&H1,&H10,&H41,&H32,&HC,&H0     :'A
3066  DATA A,66,&H0,&H40,&H31,&HC,&H43,&H8,&H41,&H8,&H31,&H6,&H0      :'B
3067  DATA A,67,&H0,&H30,&H4C,&H2,&H41,&H0,&H41,&H20,&H3,&H0,&H0      :'C
3068  DATA A,68,&H0,&H40,&H31,&HC,&H43,&H0,&H41,&H20,&H19,&H6,&H0     :'D
3069  DATA A,69,&H0,&H60,&H18,&H46,&H9,&H40,&H9,&H40,&H1,&H0,&H0      :'E
3070  DATA A,70,&H0,&H60,&H18,&H6,&H9,&H0,&H9,&H0,&H1,&H0,&H0         :'F
3071  DATA A,71,&H0,&H30,&H4C,&H2,&H41,&H8,&H41,&H28,&H13,&H8,&H0     :'G
3072  DATA A,72,&H0,&H60,&H18,&H6,&H9,&H0,&H48,&H30,&HC,&H3,&H0       :'H
3073  DATA A,73,&H0,&H0,&H40,&H0,&H61,&H18,&H47,&H0,&H1,&H0,&H0       :'I
3074  DATA A,74,&H0,&H30,&H40,&H0,&H40,&H1,&H30,&HD,&H2,&H1,&H0       :'J
3075  DATA A,75,&H0,&H60,&H18,&H6,&H9,&H0,&H14,&H60,&H2,&H1,&H0       :'K
3076  DATA A,76,&H0,&H60,&H18,&H46,&H1,&H40,&H0,&H40,&H0,&H0,&H0      :'L
3077  DATA A,77,&H0,&H60,&H1C,&H3,&H4,&H18,&H4,&H62,&H1C,&H3,&H0      :'M
3078  DATA A,78,&H0,&H60,&H1C,&H3,&H4,&H8,&H10,&H60,&H1C,&H3,&H0      :'N
3079  DATA A,79,&H0,&H30,&HC,&H42,&H0,&H41,&H0,&H21,&H18,&H6,&H0      :'O
3080  DATA A,80,&H0,&H60,&H18,&H6,&H9,&H0,&H9,&H0,&H9,&H6,&H0         :'P
3081  DATA A,81,&H0,&H30,&HC,&H42,&H0,&H41,&H10,&H21,&H58,&H6,&H0     :'Q
3082  DATA A,82,&H0,&H60,&H18,&H6,&H9,&H10,&H9,&H20,&H49,&H6,&H0      :'R
3083  DATA A,83,&H0,&H20,&H46,&H0,&H49,&H0,&H49,&H0,&H31,&H2,&H0      :'S
3084  DATA A,84,&H0,&H0,&H0,&H1,&H60,&H19,&H6,&H1,&H0,&H1,&H0         :'T
3085  DATA A,85,&H0,&H70,&HC,&H43,&H0,&H40,&H0,&H30,&HC,&H3,&H0       :'U
3086  DATA A,86,&H0,&H8,&H16,&H21,&H40,&H0,&H20,&H10,&HC,&H3,&H0      :'V
3087  DATA A,87,&H0,&H60,&H1C,&H23,&H10,&HC,&H10,&H60,&H1C,&H3,&H0    :'W
3088  DATA A,88,&H0,&H40,&H20,&H11,&HA,&H4,&H8,&H72,&H1,&H0,&H0       :'X
3089  DATA A,89,&H0,&H0,&H0,&H43,&H24,&H10,&H8,&H4,&H2,&H1,&H0        :'Y
3090  DATA A,90,&H0,&H40,&H20,&H41,&H10,&H49,&H4,&H41,&H2,&H1,&H0     :'Z
3091  DATA A,91,&H0,&H60,&H18,&H46,&H1,&H40,&H1,&H0,&H1,&H0,&H0       :'[
3092  DATA A,92,&H0,&H0,&H0,&H1,&H2,&HC,&H30,&H40,&H0,&H0,&H0         :'/
3093  DATA A,93,&H0,&H0,&H40,&H0,&H40,&H1,&H40,&H31,&HC,&H3,&H0       :']
3094  DATA A,94,&H0,&H4,&H0,&H2,&H0,&H1,&H2,&H4,&H0,&H0,&H0           :'^
3095  DATA D,95,&H0,&H40,&H0,&H40,&H0,&H40,&H0,&H40,&H0,&H40,&H0      :'_
3096  DATA A,96,&H0,&H0,&H0,&H0,&H1,&H2,&H1,&H4,&H0,&H0,&H0           :'`
3097  DATA A,97,&H0,&H20,&H50,&H0,&H54,&H0,&H54,&H20,&H54,&H8,&H0     :'a
3098  DATA A,98,&H0,&H60,&H18,&H6,&H41,&H4,&H40,&H4,&H20,&H18,&H0     :'b
3099  DATA A,99,&H0,&H30,&H8,&H40,&H4,&H40,&H4,&H40,&H4,&H0,&H0       :'c
3100  DATA A,100,&H0,&H30,&H48,&H0,&H44,&H0,&H44,&H30,&HC,&H3,&H0     :'d
3101  DATA A,101,&H0,&H30,&H48,&H10,&H44,&H10,&H44,&H10,&H4,&H8,&H0   :'e
3102  DATA A,102,&H0,&H0,&H0,&H44,&H30,&HC,&H2,&H5,&H0,&H1,&H0        :'f
3103  DATA D,103,&H0,&H4C,&H2,&H50,&H1,&H50,&H21,&H18,&H7,&H0,&H0     :'g
3104  DATA A,104,&H0,&H60,&H18,&H6,&H9,&H0,&H4,&H40,&H24,&H18,&H0     :'h
3105  DATA A,105,&H0,&H0,&H40,&H0,&H64,&H10,&H4C,&H1,&H0,&H0,&H0      :'i
3106  DATA D,106,&H0,&H0,&H20,&H40,&H0,&H40,&H20,&H11,&H8,&H7,&H0     :'j
3107  DATA A,107,&H0,&H0,&H60,&H18,&H6,&H11,&H20,&H48,&H0,&H4,&H0     :'k
3108  DATA A,108,&H0,&H40,&H0,&H60,&H19,&H46,&H1,&H0,&H0,&H0,&H0      :'l
3109  DATA A,109,&H0,&H40,&H24,&H18,&H44,&H20,&H1C,&H40,&H24,&H18,&H0 :'m
3110  DATA A,110,&H0,&H64,&H18,&H4,&H0,&H4,&H40,&H24,&H18,&H0,&H0     :'n
3111  DATA A,111,&H0,&H30,&H48,&H4,&H40,&H4,&H40,&H24,&H18,&H0,&H0    :'o
3112  DATA D,112,&H0,&H40,&H30,&HC,&H13,&H0,&H11,&H0,&H9,&H6,&H0      :'p
3113  DATA D,113,&H0,&H0,&HC,&H12,&H1,&H50,&H21,&H58,&H7,&H0,&H0      :'q
3114  DATA A,114,&H0,&H40,&H20,&H1C,&H0,&H8,&H4,&H0,&H4,&H8,&H0       :'r
3115  DATA A,115,&H0,&H40,&H0,&H48,&H10,&H44,&H10,&H24,&H0,&H4,&H0    :'s
3116  DATA A,116,&H0,&H0,&H4,&H30,&H4C,&H2,&H45,&H0,&H24,&H0,&H0      :'t
3117  DATA A,117,&H0,&H0,&H30,&H48,&H4,&H40,&H0,&H60,&H18,&H44,&H0    :'u
3118  DATA A,118,&H0,&H0,&H18,&H64,&H0,&H20,&H0,&H10,&H8,&H4,&H0      :'v
3119  DATA A,119,&H0,&H60,&H1C,&H20,&H10,&H8,&H30,&H40,&H20,&H1C,&H0  :'w
3120  DATA A,120,&H0,&H40,&H0,&H24,&H8,&H10,&H20,&H48,&H0,&H4,&H0     :'x
3121  DATA D,121,&H0,&H40,&H0,&H46,&H29,&H10,&H8,&H4,&H2,&H1,&H0      :'y
3122  DATA A,122,&H0,&H40,&H0,&H64,&H0,&H54,&H0,&H4C,&H0,&H4,&H0      :'z
3123  DATA A,123,&H0,&H0,&H8,&H30,&H46,&H1,&H40,&H1,&H0,&H0,&H0       :'{
3124  DATA A,124,&H0,&H40,&H20,&H10,&H0,&H4,&H2,&H1,&H0,&H0,&H0       :'|
3125  DATA A,125,&H0,&H0,&H0,&H40,&H1,&H40,&H31,&H6,&H8,&H0,&H0       :'}
3126  DATA A,126,&H0,&H2,&H1,&H0,&H1,&H2,&H4,&H0,&H4,&H2,&H0          :'~
3127  DATA A,127,&H0,&H40,&H8,&H60,&H18,&H46,&H9,&H40,&H1,&H42,&H0
3128 '*** above character is British pound sign
```

## SPIRO.BAS

```bas
1 ' Program : SPIROGRAPH
2 ' Author  : Ned Mazerall & Dennis Bayomi
3 '           IBM PC User Group of Winnipeg
4 ' Pupose  : To draw spirographs using the
5 '           hypocycloid eqautions.
6 '
7 DEF FNX(T)= 320+7*J/C*(N*COS(T+F)+TR*COS(H*T+F))
8 DEF FNY(T)= 100+3*J/C*(N*SIN(T+F)-TR*SIN(H*T+F))
9 '
10 INPUT "Radius of FIXED circle     : ",R1
20 INPUT "Radius of ROLLING circle   : ",R2
30 INPUT "Radius of TRACING point    : ",TR
40 INPUT "Tracing Point INCREMENT    : ",TRI
50 INPUT "INITIAL Size Factor        : ",C
60 INPUT "FINAL Size Factor          : ",EX
70 INPUT "Phase INCREMENT (about .1) : ",PF
80 INPUT "Size Factor INCREMENT      : ",ST1
90 INPUT "Parameter (T) INCREMENT    : ",ST2
100 '
110 SCREEN 2       : CLS
120 PI= 3.141593   : GOSUB 290
130 G = (R1+R2)/R2 : M = R1+R2  : ' Epicycloid
140 H = (R1-R2)/R2 : N = R1-R2  : ' Hypocycloid
150 FOR J=1 TO EX STEP ST1
160   F = F + PF  : T = 0
170   X = FNX(T)  : Y = FNY(T)
180   FOR T=0 TO 2*D*PI+.1 STEP ST2
190     X1 = FNX(T)   : Y1 = FNY(T)
200     LINE (X,Y)-(X1,Y1)
210     X = X1 : Y = Y1
220     A$ = INKEY$ : IF A$ = CHR$(27) THEN 270
230   NEXT
240   TR = TR +TRI
250 NEXT : BEEP
260 A$= INKEY$ : IF A$ = "" THEN 260
270 SCREEN 0 : WIDTH 80
280 END
290 ' *** Least Common Multiple (LCM)
300 GOSUB 320 : LCM = R1*R2/GCD : D = LCM/R1
310 RETURN
320 ' *** Greatest Common Divisor (GCD)
330 X = R1 : Y = R2
340 R = X MOD Y : IF R <> 0 THEN X=Y : Y=R : GOTO 340
350 GCD = Y
360 RETURN
```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk 0265

     Volume in drive A has no label
     Directory of A:\

    DEFINE   BAS      5169   9-13-83  12:03a
    DEFINE   INS       896   5-27-82
    GRAF     BAS      4483  12-11-83  10:39p
    OKICHAR  LBR    103552   8-20-85  10:06p
    OKICHAR  TXT       391   6-03-85  10:12p
    OKIMENU  BAS     19807   4-05-84  10:25p
    OKIMENU  DOC     17656   3-20-84  11:08p
    OKIMENUC BAS      8801   4-05-84  10:28p
    OKITALIC BAS      8689   2-13-84   4:32p
    PRINT    DOC      1578   5-12-84  10:27a
    PRINT1   EXE     12288   5-12-84  10:15a
    PRINT2   EXE     12288   5-12-84   9:57a
    SIDEWAYS EXE     30720   3-07-84  11:04p
    SIDEWAYS PAS      3673   3-07-84   9:21p
    SPIRO    BAS      1505   7-16-84   8:58a
    SPIRO    DOC      9216   8-01-84   9:39a
    SPIRO    EXE     22548   9-23-84   6:54p
    SPIRO1   EXE     23680   1-01-80   2:56a
    THING    PLT      3624  12-17-83   8:58p
           19 file(s)     290564 bytes
                           22528 bytes free
