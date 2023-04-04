---
layout: page
title: "PC-SIG Library Disk #73"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0073/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0073"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "3D"

    3D is a collection of freeware or public domain programs which perform
    useful or interesting functions...catalog your books or records, figure
    growth rates and projects or calculate miles per gallon, percentages,
    or windchill factors.  Also included are graphic figures which can be
    rotated and displayed, plus a program to create your own 3Dimensional
    figures.
    
    System Requirements: BASIC; Color graphics for 3D programs.
    
    How to Start:  To run BASIC programs consult the directions in GETTING
    STARTED for your configuration.
    
    File Descriptions:
    
    TEMPCONV BAS  IPCO Temperature conversion
    MPG-CAL  BAS  IPCO Miles per gallon calculator
    MOLY-PAY BAS  IPCO Catalog books in your library
    %-DIFF   BAS  IPCO Calculates percentages - educational value
    SHIP          Data file for 3-D-ROT.BAS
    WINDCHIL BAS  IPCO Calculates windchill factors
    GROWTH   BAS  IPCO Growth rates and projections
    SERIALNO BAS  IPCO serial number generator
    JET           Data file for 3-D-ROT.BAS
    CUBE          Data file for 3-D-ROT.BAS
    PYRAMID       Data file for 3-D-ROT.BAS
    3-D-ROT  BAS  IPCO Rotate and display objects
    3D       DOC  Documentation for 3D
    3D       GRF  BASIC source for 3D.EXE
    3D       EXE  Creates 3D images on graphics board
    3DTEST1  PLT  Part of 3D - image file
    3DTEST2  PLT  Part of 3D - image file
    PCFILECH BAS  Recreates PC-FILE data base in different format
    SHIFTS   BAS  Subroutines to set/test shift keys
    CLERK    BAS  IPCO Record keeping program
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## %-DIFF.BAS

```bas
10 CLS
20 A$=STRING$(80,205)
30 PRINT A$
40 PRINT TAB(17)"5005-A.BAS      PERCENT DIFFERENCE CALCULATOR"
50 COLOR 23,0,0
60 PRINT :PRINT :PRINT TAB(38)"IPCO"
70 COLOR 7,0,0
80 PRINT :PRINT :PRINT TAB(29)"INTERNATIONAL PC OWNERS"
90 PRINT :PRINT :PRINT TAB(17)"p.o. box 10426, pittsburgh, pennsylvania 15234"
100 PRINT A$
110 PRINT :PRINT :PRINT :PRINT :PRINT
120 PRINT TAB(28)"PRESS ANY KEY TO CONTINUE"
130 A$=INKEY$:IF A$="" THEN 130
140 CLS
1000 ' IPCO  Software Exchange Submission PERCENT2 authored on November 15, 1982
1010 '
1020 '  by Michael Csontos, 3228 Livonia Center Road, Lima, New York 14485
1030 '
1040 PRINT "Do you have a  1.) high resolution":PRINT
1050 PRINT "                   80 character width":PRINT
1060 PRINT "         or a  2.) low resolution":PRINT
1070 PRINT "                   40 character width":PRINT
1080 PRINT "display?":PRINT
1090 INPUT "(1 or 2)";DISP
1100 IF DISP<1 OR DISP>2 OR INT(DISP)<>DISP THEN 1090
1110 ON DISP GOTO 1120,1340
1120 SCREEN 0,0,0:WIDTH 80: COLOR 7,0,0:A=0:B=0:CLS:KEY OFF
1130 PRINT " It is a simple thing to calculate percentages, however it is also":PRINT
1140 PRINT "easy to get confused.  The trouble is that 100 is 100% > 50, but 50":PRINT
1150 PRINT "is 50% of 100!":PRINT
1160 PRINT " This program calculates percent every possible way.  You choose the":PRINT
1170 PRINT "one that you intend.":PRINT
1180 PRINTOUT$="NO":PRINT :PRINT "Do you want a running printout of your results (Y or N)?":GOSUB 1330:CLS:ON A GOTO 1200,1190,1180
1190 PRINTOUT$="YES"
1200 INPUT "What is the first number, which we will call A";A:PRINT
1210 IF A=0 THEN PRINT "Anything is infinitely different from 0. Won't work. Try again.":PRINT:GOTO 1200
1220 INPUT "The second number will be B. What is it";B:PRINT
1230 IF B=0 THEN PRINT "Anything is infinitely different from 0. Won't work. Try again.":PRINT:GOTO 1220
1240 PRINT "The number A is "(A-B)/B*100" percent GREATER than the number B.":PRINT
1250 PRINT "The number B is "(A-B)/A*100" percent LESS than the number A.":PRINT
1260 PRINT "The number B is "(B-A)/A*100" percent GREATER than the number A.":PRINT
1270 PRINT "The number A is "(B-A)/B*100" percent LESS than the number B.":PRINT
1280 IF PRINTOUT$="YES" THEN LPRINT A" is "(A-B)/B*100"% > "B:LPRINT B" is "(A-B)/A*100"% < "A:LPRINT B" is "(B-A)/A*100"% > "A:LPRINT A" is "(B-A)/B*100"% < "B:LPRINT
1290 GOSUB 1300:GOTO 1200
1300 LOCATE 25,1:PRINT SPC(10)"PRESS ANY KEY TO CONTINUE EXCEPT <Esc> TO QUIT"STRING$(23," ");
1310 X$=INKEY$:IF X$="" THEN GOTO 1310 ELSE IF X$=CHR$(27) THEN GOTO 1320 ELSE FOR N=0 TO 15:DUMP$=INKEY$:NEXT:CLS:RETURN
1320 KEY ON:COLOR 7,0,0:CLS:END
1330 X$=INKEY$:IF X$="" THEN GOTO 1330 ELSE IF X$="N" OR X$="n" THEN A=1:RETURN:ELSE IF X$="Y" OR X$="y" THEN A=2:RETURN:ELSE A=3:LOCATE 25,40:PRINT "Please answer Y,y,N,or n";:FOR N=0 TO 500:NEXT :FOR N=0 TO 15:DUMP$=INKEY$:NEXT:RETURN
1340 SCREEN 0,0,0:WIDTH 40: COLOR 7,0,0:A=0:B=0:CLS:KEY OFF
1350 PRINT " It is a simple thing to calculate      percentages, however it is also"
1360 PRINT "easy to get confused.  The trouble is   that 100 is 100% > 50, but 50"
1370 PRINT "is 50% of 100!":PRINT
1380 PRINT " This program calculates percent every  possible way.  You choose the"
1390 PRINT "one that you intend.":PRINT
1400 PRINTOUT$="NO":PRINT :PRINT "Do you want a running printout of your  results (Y or N)?":GOSUB 1550:CLS:ON A GOTO 1420,1410,1400
1410 PRINTOUT$="YES"
1420 INPUT "What is the first number, which we will call A";A:PRINT
1430 IF A=0 THEN PRINT "Anything is infinitely different from 0.Won't work. Try again.":PRINT:GOTO 1420
1440 INPUT "The second number will be B. What is it       ";B:PRINT
1450 IF B=0 THEN PRINT "Anything is infinitely different from 0.Won't work. Try again.":PRINT:GOTO 1440
1460 PRINT "The number A is "(A-B)/B*100" percent":PRINT " GREATER than the number B.":PRINT
1470 PRINT "The number B is "(A-B)/A*100" percent":PRINT " LESS than the number A.":PRINT
1480 PRINT "The number B is "(B-A)/A*100" percent":PRINT " GREATER than the number A.":PRINT
1490 PRINT "The number A is "(B-A)/B*100" percent":PRINT " LESS than the number B.":PRINT
1500 IF PRINTOUT$="YES" THEN LPRINT A" is "(A-B)/B*100"% > "B:LPRINT B" is "(A-B)/A*100"% < "A:LPRINT B" is "(B-A)/A*100"% > "A:LPRINT A" is "(B-A)/B*100"% < "B:LPRINT
1510 GOSUB 1520:GOTO 1420
1520 LOCATE 25,1:PRINT "PRESS A KEY or PRESS <Esc> TO QUIT";
1530 X$=INKEY$:IF X$="" THEN GOTO 1530 ELSE IF X$=CHR$(27) THEN GOTO 1540 ELSE FOR N=0 TO 15:DUMP$=INKEY$:NEXT:CLS:RETURN
1540 KEY ON:COLOR 7,0,0:CLS:END
1550 X$=INKEY$:IF X$="" THEN GOTO 1550 ELSE IF X$="N" OR X$="n" THEN A=1:RETURN:ELSE IF X$="Y" OR X$="y" THEN A=2:RETURN:ELSE A=3:LOCATE 25,1:PRINT "Please answer Y,y,N,or n";:FOR N=0 TO 500:NEXT :FOR N=0 TO 15:DUMP$=INKEY$:NEXT:RETURN
1560 '    SAVE"percent2",a
```

## 3-D-ROT.BAS

```bas
10 KEY OFF:CLS
20 PRINT"░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░"
30 PRINT"░┌───────────────────────────────────┐░"
40 PRINT"░│                                   │░"
50 PRINT"░│            4019-A.BAS             │░"
60 PRINT"░│      3-DIMMENTIONAL ROTATION      │░"
70 PRINT"░│                                   │░"
80 PRINT"░│                                   │░"
90 PRINT"░│ BROUGHT TO YOU BY THE MEMBERS OF  │░"
100 PRINT"░│      ▄▄▄▄▄ ▄▄▄▄▄ ▄▄▄▄▄ ▄▄▄▄▄      │░"
110 PRINT"░│        █   █   █ █     █   █      │░"
120 PRINT"░│        █   █▄▄▄█ █     █   █      │░"
130 PRINT"░│        █   █     █     █   █      │░"
140 PRINT"░│      ▄▄█▄▄ █     █▄▄▄▄ █▄▄▄█      │░"
150 PRINT"░│                                   │░"
160 PRINT"░│      International PC Owners      │░"
170 PRINT"░│                                   │░"
180 PRINT"░│P.O. Box 10426, Pittsburgh PA 15234│░"
190 PRINT"░│                                   │░"
200 PRINT"░└───────────────────────────────────┘░"
210 PRINT"░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░"
220 PRINT
230 PRINT "       PRESS ANY KEY TO CONTINUE
240 A$=INKEY$: IF A$="" THEN 240
250 CLS
1000 ' * * *              3-Dimensional Rotation               * * *
1005 '
1010 ' This program allows you to rotate three dimensional figures on X,Y or Z
1015 ' axes.  Call or edit figures from disk or create new figures by entering
1020 ' point coordinates and connections.  Save figure data or screen on disk.
1025 '                           9811k
1030 '             ( GRAPHICS REQUIRED medium resolution)
1035 '
1040 '            80 column screen used for listing points
1045 '
1050 ' NOTE: This is an uncompiled source program, rotation of complex figures
1055 '       could take a few seconds.
1060 '
1065 ' Hints: First time users should expirement with the sample files.
1066 '        It is suggested that if you create a figure, you save it
1067 '        immediately with the (6) on the main menu.  The figure could
1068 '        be edited and rotated later.  This is to prevent losing data
1069 '        if your figure contains illegal variables.  You could also
1070 '        add a error traping routine.  Pressing (S) while the figure
1071 '        is displayed only takes a snapshot of the screen.  This
1072 '        would not allow future rotation like the (6).
1073 '
1074 ' Tutorial: Once the program is running in basicA it will display a
1075 '           menu.  Strike the (5) to load a sample figure.  Type "CUBE"
1076 '           or another file name.  Press any key.  When returned to the
1077 '           menu, press (1) to rotate.  Familiarize yourself with the
1078 '           rotation keys then enter the increament of rotation you
1079 '           want (ex. 45).  The figure you have chosen should be
1080 '           displayed.  Press (x), there will be a pause.  Pressing
1081 '           (Shift X) will rotate in the other direction.  You may also
1082 '           press (z),(y) or there shifts to rotate.  Press (L) the
1083 '           coordinates are list on an 80 chr. screen.  Press any key.
1084 '           Pressing (I) will allow you to change the Increament of
1085 '           rotation.  Press "ESC" to return to main menu.
1086 '
1087 '
1095 KEY OFF:CLEAR
1100 DIM X(NP),Y(NP),Z(NP),XT(NP),YT(NP),ZT(NP),NX(NP),NY(NP),C(NC*2),X1(0),Y1(0),Z1(0),C1(0)
1105 SCREEN 1,0:COLOR 0,1
1110 DEF SEG= &HB800
1115 ' * * * Main Menu
1120 CLS:WIDTH 40:LOCATE 3,15:PRINT "COMMAND MENU":PRINT:PRINT
1125 PRINT "     1)  Rotate Picture"
1130 PRINT "     2)  Load Picture From Disc (bload)"
1135 PRINT "     3)  Create Point Data"
1140 PRINT "     4)  Edit Point Data"
1145 PRINT "     5)  Load Point Data From Disc"
1150 PRINT "     6)  Save Point Data On Disc"
1155 PRINT "     7)  End Operations"
1160 LOCATE 15,1:INPUT "ENTER COMMAND";COMD$:IF ASC(COMD$)<49 OR ASC(COMD$)>55 THEN 1160
1165 COMD=VAL(COMD$):ON COMD GOTO 1175,1360,1700,1170,1610,1655,1320
1170 GOSUB 1910:GOSUB 1805:GOSUB 1910:GOSUB 1925:GOSUB 1830:GOTO 1115
1175 ' * * * Rotation Menu
1180 CLS:LOCATE 1,15:PRINT "ROTATION MENU":PRINT:PRINT
1185 XS=280:YS=192:ZS=300:XL=0:YL=0:ZL=0
1190 PRINT "[X]   Positive Rotation on X Axis"
1195 PRINT "[x]   Negative Rotation on X Asis"
1200 PRINT "[Y]   Positive Rotation on Y Axis"
1205 PRINT "[y]   Negative Rotation on Y Asis"
1210 PRINT "[Z]   Positive Rotation on Z Axis"
1215 PRINT "[z]   Negative Rotation on Z Asis"
1220 PRINT "[S]   Save Picture (bsave)"
1225 PRINT "[L]   List Pionts"
1230 PRINT "[I]   Change Increament"
1235 PRINT "[Esc] Return To Command Menu":LOCATE 20,1
1240 PRINT "The increament rotation is in degrres.":PRINT
1245 INPUT "Enter the increament of rotation";INCR
1250 IF NP<1 THEN CLS:LOCATE 10,1:PRINT "You need to enter point data.":GOSUB 1345:GOTO 1115 ELSE GOSUB 1390:GOTO 1540
1255 A$=""
1260 A$=INKEY$:IF A$="" THEN 1260
1265 IF A$="X" THEN A3=INCR:GOSUB 1390:GOTO 1510
1270 IF A$="x" THEN A3=-1*INCR:GOSUB 1390:GOTO 1510
1275 IF A$="Y" THEN A2=INCR:GOSUB 1390:GOTO 1475
1280 IF A$="y" THEN A2=-1*INCR:GOSUB 1390:GOTO 1475
1285 IF A$="Z" THEN A1=INCR:GOSUB 1390:GOTO 1440
1290 IF A$="z" THEN A1=-1*INCR:GOSUB 1390:GOTO 1440
1295 IF ASC(A$)=27 THEN GOTO 1115
1300 IF A$="S" OR A$="s" THEN GOTO 1325
1305 IF A$="L" OR A$="l" THEN CLS:GOSUB 1910:GOSUB 1925:GOSUB 1345:GOSUB 1390:WIDTH 40:GOTO 1540
1310 IF A$="I" OR A$="i" THEN GOTO 1380
1315 GOTO 1255
1320 END
1325 ' * * * Save the Screen Disk
1330 LOCATE 1,1:INPUT "Name of picture?";P$:IF LEN(P$)>8 THEN LOCATE 1,1:PRINT "The name may not excede eight characters.":GOSUB 1345:GOTO 1255
1335 LOCATE 1,1:PRINT SPACE$(39);
1340 BSAVE P$,0,&H4000:GOTO 1255
1345 ' * * * Prompt
1350 LOCATE 24,8:PRINT "PRESS ANY KEY TO CONTINUE";
1355 Q$=INKEY$:IF Q$="" THEN 1355 ELSE LOCATE 24,8:PRINT SPACE$(25);:RETURN
1360 ' * * * Load Screen from Disk
1365 CLS:DEF SEG= &HB800
1370 INPUT "Enter the name of the picture";A$:CLS
1375 BLOAD A$,0:GOSUB 1345:GOTO 1115
1380 ' * * * Change Rotation Increament
1385 LOCATE 1,1:INPUT; "ENTER THE NEW INCREAMENT";INCR:LOCATE 1,1:PRINT Z$:GOTO 1255
1390 ' * * * Center point of Object
1395 FOR J=1 TO NP
1400 IF X(J)<XS THEN XS=X(J)
1405 IF X(J)>XL THEN XL=X(J)
1410 IF Y(J)<YS THEN YS=Y(J)
1415 IF Y(J)>YL THEN YL=Y(J)
1420 IF Z(J)<ZS THEN ZS=Z(J)
1425 IF Z(J)>ZL THEN ZL=Z(J)
1430 NEXT J
1435 XC=(XS+XL) / 2:YC=(YS+YL)/2:ZC=(ZS+ZL)/2:RETURN
1440 ' * * * Z Axis Rotation
1445 R=A1/57.2958
1450 FOR I=1 TO NP:TEM=X(I)
1455 X(I)=(X(I)-XC)* COS(R)-(Y(I)-YC)*SIN (R)+XC
1460 Y(I)=(TEM-XC)* SIN (R)+(Y(I)-YC)*COS (R)+YC
1465 NEXT I
1470 GOTO 1540
1475 ' * * * Y Axis Rotation
1480 R=A2/57.2958
1485 FOR I=1 TO NP:TEM=X(I)
1490 X(I)=(Z(I)-ZC)* SIN(R)+(TEM-XC)*COS(R)+XC
1495 Z(I)=(Z(I)-ZC)*COS(R)-(TEM-XC)*SIN(R)+ZC
1500 NEXT I
1505 GOTO 1540
1510 ' * * * X Axis Rotation
1515 R=A3/57.2958
1520 FOR I=1 TO NP:TEM=Z(I)
1525 Z(I)=(Z(I)-ZC) * COS(R)+(Y(I)-YC)* SIN(R)+ZC
1530 Y(I)=(Y(I)-YC) * COS(R)-(TEM-ZC)* SIN(R)+YC
1535 NEXT I
1540 ' * * * Projection 3-Dim to 2-Dim Plane Intersection Points Based on Similar Triangles
1545 FOR I= 1 TO NP
1550 XT(I)=(X(I)*SZ)/(Z(I)+SZ)
1555 YT(I)=(Y(I)*SZ)/(Z(I)+SZ)
1560 NEXT I
1565 FOR I= 1 TO NP
1570 NX(I)=((SZ-Z(I))*XT(I))/SZ
1575 NY(I)=((SZ-Z(I))*YT(I))/SZ
1580 NEXT I:CLS
1585 ' * * * Connect Points with Lines
1590 FOR I=1 TO NC *2 STEP 2
1595 LINE (NX(C(I)),NY(C(I)))-(NX(C(I+1)),NY(C(I+1))),3
1600 NEXT I
1605 GOTO 1255
1610 CLEAR:CLS:FILES:PRINT:PRINT "Place disk with data on it in drive A."
1615 PRINT:INPUT "Enter the name of file";NAM$:IF LEN(NAM$)>8 THEN PRINT "A maximum of 8 charecters are allowed.":GOTO 1615
1620 CLS:LOCATE 8,14:PRINT "LOADING DATA":OPEN NAM$ FOR INPUT AS #1
1625 INPUT#1,NP,NC
1630 DIM X(NP),Y(NP),Z(NP),XT(NP),YT(NP),NX(NP),NY(NP),C(NC*2),X1(0),Y1(0),Z1(0),C1(0)
1635 FOR I=1 TO NP:INPUT#1,X(I),Y(I),Z(I):NEXT I
1640 FOR I=1 TO NC*2:INPUT#1,C(I):NEXT I
1645 SX=-150:SY=-100:SZ=-7000
1650 GOSUB 1345:CLOSE:GOTO 1115
1655 ' * * * Save Point Data on Disk
1660 CLS:PRINT "Place disk in drive A to save data."
1665 PRINT:INPUT "Enter the name of file";NAM$:IF LEN(NAM$)>8 THEN PRINT:PRINT "A maximum of 8 charecters are allowed.":GOTO 1665
1670 IF NP<1 THEN PRINT:PRINT "There is no data to save.":GOSUB 1345:GOTO 1115
1675 CLS:LOCATE 8,14:PRINT "SAVEING DATA":OPEN NAM$ FOR OUTPUT AS #1
1680 PRINT#1,NP;NC
1685 FOR I=1 TO NP:PRINT#1,X(I);Y(I);Z(I):NEXT I
1690 FOR I=1 TO NC*2:PRINT#1,C(I):NEXT I
1695 CLOSE:GOSUB 1345:GOTO 1115
1700 ' * * * Create Point Data
1705 CLS:PRINT "     INSTRUCTIONS TO CREATE PICTURE":PRINT
1710 PRINT "   The picture is created in two  steps.First you must identify each point usingits three coordinates (X,Y,Z). Then  youstate which pair of points are connectedby lines.":PRINT
1715 PRINT "   All entries should consist  of  posi-tive interges within the  screen  dimen-sions (320,200,320). Editing may be madefollowing entries or in a later step.":PRINT
1720 PRINT "   Screen coordinates consist of X, leftto right; Y, top to bottom; Z, front  toback."
1725 GOSUB 1345
1730 WIDTH 80
1735 LOCATE 22,1:INPUT;"Enter the total number of points in your three dimensial picture";NP
1740 ERASE X,Y,Z,XT,YT,NX,NY
1745 DIM X(NP),Y(NP),Z(NP),XT(NP),YT(NP),NX(NP),NY(NP)
1750 FOR I=1 TO NP
1755 GOSUB 1855:NEXT I
1760 LOCATE 22,1:PRINT SPACE$(79):LOCATE 22,1:INPUT;"Do you need to edit any of these points Y/N.";F$
1765 IF LEFT$(F$,1)="Y" OR LEFT$(F$,1)="y" THEN GOSUB 1805
1770 GOSUB 1910:LOCATE 22,1:PRINT SPACE$(79):LOCATE 22,1:INPUT;"Enter the total number of connections";NC
1775 ERASE C:DIM C(NC*2)
1780 FOR I=1 TO NC*2 STEP 2
1785 GOSUB 1865:NEXT I
1790 LOCATE 22,1:PRINT SPACE$(79):LOCATE 22,1:INPUT;"Do you need to edit any of these connections Y/N.";F$
1795 IF LEFT$(F$,1)="Y" OR LEFT$(F$,1)="y" THEN GOSUB 1830
1800 WIDTH 40:SCREEN 1,0:GOTO 1115
1805 ' * * * Edit Point Data
1810 LOCATE 22,1:PRINT SPACE$(79);:LOCATE 22,1:INPUT ;"Enter the existing point you wish to change (0-to continue";I:IF I=0 THEN 1820
1815 GOSUB 1855:GOTO 1805
1820 LOCATE 22,1:INPUT;"Do you want to add any additional points to your picture(Y,N)";F$:IF LEFT$(F$,1)="n" OR LEFT$(F$,1)="N" THEN RETURN
1825 GOSUB 1880:I=NP:GOSUB 1855:GOTO 1820
1830 ' * * * Edit Point Connections
1835 LOCATE 22,1:PRINT SPACE$(79);:LOCATE 22,1:INPUT;"Enter the existing connection point you wish to edit (0-to continue)";I:IF I=0 THEN 1845
1840 I=I*2-1:GOSUB 1865:I=(NC-1)*2:GOTO 1830
1845 LOCATE 22,1:PRINT SPACE$(79);:LOCATE 22,1:INPUT;"Do you want to add any additional connections to your picture(Y,N)";F$:IF LEFT$(F$,1)="n" OR LEFT$(F$,1)="N" THEN RETURN
1850 GOSUB 1895:I=NC*2-1:GOSUB 1865:GOTO 1845
1855 LOCATE 22,1:PRINT SPACE$(79):LOCATE 22,1:PRINT "Enter the three coordinates X,Y,Z for point #";I;:INPUT;X(I),Y(I),Z(I)
1860 L=FIX(((I-1)*20+1)/80)+1:LOCATE L,((I-1)*20+80-80*L)+1:PRINT SPACE$(19);:LOCATE L,((I-1)*20+80-80*L)+1:PRINT I;:PRINT CHR$(29)+")";INT(X(I));:PRINT CHR$(29);INT(Y(I));:PRINT CHR$(29);INT(Z(I));:RETURN
1865 LOCATE 22,1:PRINT SPACE$(79):LOCATE 22,1:PRINT "Enter the two points to be connected (#point1,#point2) connection #";(I+1)/2;:INPUT;C(I),C(I+1)
1870 IF C(I)<1 OR C(I+1)<1 OR C(I)>NP OR C(I+1)>NP THEN LOCATE 22,1:PRINT "There are no such points to connect, use the number of existing points.":GOTO 1865
1875 L=FIX((((I+1)/2-1)*16+1)/80)+PP+1:LOCATE L,(((I+1)/2-1)*16+80-80*(L-PP))+1:PRINT SPACE$(15);:LOCATE L,(((I+1)/2-1)*16+80-80*(L-PP))+1:PRINT (I+1)/2;:PRINT CHR$(29)+")";C(I);:PRINT CHR$(29);C(I+1);:RETURN
1880 ' * * * Set Up Point Data For Additional Point
1885 ERASE X1,Y1,Z1:DIM X1(NP),Y1(NP),Z1(NP):FOR I=1 TO NP:X1(I)=X(I):Y1(I)=Y(I):Z1(I)=Z(I):NEXT I:ERASE X,Y,Z,XT,YT,NX,NY:NP=NP+1
1890 DIM X(NP),Y(NP),Z(NP),XT(NP),YT(NP),NX(NP),NY(NP):FOR I=1 TO NP-1:X(I)=X1(I):Y(I)=Y1(I):Z(I)=Z1(I):NEXT I:RETURN
1895 ' * * * Set Up Point Connection Data For Additional Connection
1900 ERASE C1:DIM C1(NC*2+2):FOR I=1 TO NC*2:C1(I)=C(I):NEXT I:ERASE C:NC=NC+1
1905 DIM C(NC*2):FOR I=1 TO (NC-1)*2:C(I)=C1(I):NEXT I:RETURN
1910 ' * * * List point Data on CRT
1915 CLS:WIDTH 80:FOR I=1 TO NP:L=FIX(((I-1)*20+1)/80)+1:LOCATE L,((I-1)*20+80-80*L)+1:PRINT I;:PRINT CHR$(29)+")";INT(X(I));:PRINT CHR$(29);INT(Y(I));:PRINT CHR$(29);INT(Z(I));:NEXT I
1920 PP=CSRLIN:RETURN
1925 ' * * * List Point Connections on CRT
1930 FOR I=1 TO NC*2 STEP 2:L=FIX((((I+1)/2-1)*16+1)/80)+PP+1:LOCATE L,(((I+1)/2-1)*16+80-80*(L-PP))+1:PRINT (I+1)/2;:PRINT CHR$(29)+")";C(I);:PRINT CHR$(29);C(I+1);:NEXT I:RETURN
```

## CLERK.BAS

```bas
10 KEY OFF:CLS
20 PRINT"░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░"
30 PRINT"░┌───────────────────────────────────┐░"
40 PRINT"░│                                   │░"
50 PRINT"░│            1016-A.BAS             │░"
60 PRINT"░│               CLERK               │░"
70 PRINT"░│                                   │░"
80 PRINT"░│                                   │░"
90 PRINT"░│ BROUGHT TO YOU BY THE MEMBERS OF  │░"
100 PRINT"░│      ▄▄▄▄▄ ▄▄▄▄▄ ▄▄▄▄▄ ▄▄▄▄▄      │░"
110 PRINT"░│        █   █   █ █     █   █      │░"
120 PRINT"░│        █   █▄▄▄█ █     █   █      │░"
130 PRINT"░│        █   █     █     █   █      │░"
140 PRINT"░│      ▄▄█▄▄ █     █▄▄▄▄ █▄▄▄█      │░"
150 PRINT"░│                                   │░"
160 PRINT"░│      International PC Owners      │░"
170 PRINT"░│                                   │░"
180 PRINT"░│P.O. Box 10426, Pittsburgh PA 15234│░"
190 PRINT"░│                                   │░"
200 PRINT"░└───────────────────────────────────┘░"
210 PRINT"░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░"
220 PRINT
230 PRINT "       PRESS ANY KEY TO CONTINUE
240 A$=INKEY$: IF A$="" THEN 240
250 CLS
1000 REM(***************************************************************)
1010 REM(*                                                             *)
1020 REM(*     PROGRAM:     CLERK                                      *)
1030 REM(*                                                             *)
1040 REM(*     AUTHOR:          CARLOS A. LUJAN S.                     *)
1050 REM(*                                                             *)
1060 REM(*     DATE:              FEBRUARY, 1983                       *
1070 REM(*                                                             *)
1080 REM(*     ABSTRACT:                                               *)
1090 REM(*       This program is designed to function as a card        *)
1100 REM(*     catalog system. It provides an ordered list of items    *)
1110 REM(*     according to their author, title and subject.           *)
1130 REM(*                                                             *)
1140 REM(*     ACKNOWLEDGMENT:                                         *)
1150 REM(*       This is an improved version of the LIBRARIAN program  *)
1160 REM(*     writen by Alfred Fant, and published in Microcomputing, *)
1170 REM(*     december 1982.                                          *)
1180 REM(*       While the original program only permited one file     *)
1190 REM(*     -a library file- this one allows you to create as many  *)
1200 REM(*     files as you want, e.g., books, programs, papers, etc.. *)
1210 REM(*       Each file can contain a maximum of 998 items instead  *)
1220 REM(*     of the 98 maximum that was allowed before.              *)
1230 REM(*       Other changes have been made to improve speed and     *)
1240 REM(*     user friendliness.                                      *)
1250 REM(*                                                             *)
1260 REM(*       This program is menu driven and is written for the    *)
1270 REM(*     IBM-PC in ADVANCED BASIC.                               *)
1280 REM(*                                                             *)
1290 REM(***************************************************************)
1300 '
1310 '
1320 '                  Program Clerk
1330 '                #################
1340 '
1350  CLS: KEY OFF: PRINT: PRINT
1360  PRINT "DO YOU WANT INSTRUCTIONS (Y/N) ?"
1370    Z$=INKEY$: IF Z$="" GOTO 1370
1380    IF Z$="Y" OR Z$="y" THEN GOSUB 3650
1390  CLS: PRINT: PRINT
1400  PRINT "IN WHICH DRIVE DO YOU HAVE THE FILES' DISKETTE ?"
1410    Z$=INKEY$: IF Z$=""  GOTO 1410
1420    DRIVE$= Z$ + ":"
1430  OPEN DRIVE$+"FILEDAT" FOR APPEND AS #2:CLOSE #2      'Create FILEDAT the                                               first time you use that diskette.
1440 '
1450  CLS: PRINT:  PRINT
1460  PRINT "LIST OF EXISTING FILES:
1470  PRINT "***********************": PRINT
1480    OPEN "I",#2, DRIVE$+"FILEDAT"
1490    WHILE NOT EOF(2)
1500      INPUT#2,DAT$: PRINT TAB(10) DAT$
1510    WEND
1520  CLOSE #2
1530 '
1540  PRINT: PRINT "DO YOU WANT TO OPEN A NEW FILE (Y/N) ? "
1550    Z$= INKEY$: IF Z$= ""  GOTO 1550
1560    IF Z$="Y" OR Z$="y" THEN GOSUB 3490                                                                 ELSE INPUT "NAME OF EXISTING FILE:  ",FILE$
1570 '
1580 '
1590    CLS
1600    OPEN DRIVE$+FILE$ AS 1 LEN=63
1610    FIELD 1, 3 AS F$, 20 AS A$, 20 AS T$, 20 AS S$
1620 '
1630  PRINT "YOU ARE EDITING THE FILE : ";
1640  COLOR 9:  PRINT FILE$:  COLOR 7:  PRINT
1650  PRINT "MENU.          1 ) LIST ALL ITEMS"
1660  PRINT "               2 ) NEW ITEM"
1670  PRINT "               3 ) SEARCHES (any combination)
1680  PRINT "               4 ) DELETE ITEM (give author and title)
1690  PRINT "               5 ) ANOTHER FILE"
1700  PRINT "               6 ) STOP"
1710  PRINT
1720  PRINT "CHOICE: "
1730  Z$=INKEY$: IF Z$="" GOTO 1730
1740  CHOICE= VAL(Z$)
1750  ON CHOICE GOSUB 2020,1790,1960,3180,1770,4110
1760  GOTO 1590
1770  RESET : GOTO 1440               'another file
1780  '
1790  '            CHOICE=1 NEW ITEM SUBROUTINE
1800  '            ****************************
1810  I=0 : LOOP=1
1820  GET 1,1
1830  S=CVI(F$)
1840  WHILE LOOP=1
1850    I=I+1
1860    GET 1,I
1870    IF A$=SPACE$(20) OR S=I THEN LOOP=0
1880  WEND
1890  IF S=I THEN PRINT "LIBRARY IS FULL" : RESET : RETURN
1900  INPUT "AUTHOR "; AU$ : LSET A$=AU$
1910  INPUT "TITLE  "; TI$ : LSET T$=TI$
1920  INPUT "SUBJECT"; SU$ : LSET S$=SU$
1930  PUT 1,I
1940  RESET : RETURN
1950  '
1960  '              CHOICE=2 SEARCHES SUBROUTINE
1970  '              ****************************
1980     CLS
1990     INPUT "    AUTHOR"; AU$
2000     INPUT "    TITLE "; TI$
2010     INPUT "    SUBJECT"; SU$
2020     PRINT
2030     PRINT "HARD COPY (Y/N) ?"
2040     Z$=INKEY$: IF Z$="" GOTO 2040
2050     CLS
2060     IF Z$="Y" OR Z$="y"   THEN P=1: LPRINT TAB(7) "Author" TAB(32) "Title"           TAB(55) "subject"    ELSE P=0:  PRINT TAB(7) "Author" TAB(32) "Title"           TAB(55) "subject"
2070     IF AU$=""  AND TI$=""  AND SU$=""  THEN MENU=1
2080     IF AU$<>"" AND TI$=""  AND SU$=""  THEN MENU=2
2090     IF AU$<>"" AND TI$<>"" AND SU$=""  THEN MENU=3
2100     IF AU$=""  AND TI$<>"" AND SU$<>"" THEN MENU=4
2110     IF AU$=""  AND TI$=""  AND SU$<>"" THEN MENU=5
2120     IF AU$=""  AND TI$<>"" AND  SU$="" THEN MENU=6
2130     Z$=SPACE$(20) : LSET Z$=AU$
2140     Y$=SPACE$(20) : LSET Y$=TI$
2150     X$=SPACE$(20) : LSET X$=SU$
2152     AU$="":  TI$="": SU$=""
2160     ON MENU GOSUB 2220,2380,2540,2700,2870,3030
2170     PRINT "" : PRINT "     Press any key to continue"
2180     B$=INKEY$ : IF B$="" THEN 2180
2190     GOTO 1590
2200  REM
2210  REM
2220  REM MENU=1 SUBROUTINE
2230     I=0
2240     GET 1,1
2250     B$=SPACE$(20)
2260     S=CVI(F$)
2270     WHILE S<> I
2280       I=I+1
2290       GET 1,I
2300       IF A$<>B$ THEN B=1 ELSE B=0
2310       IF P=1 AND B=1 THEN LPRINT A$;"     ";T$;"     ";S$
2320       IF P=0 AND B=1 THEN  PRINT A$;"     ";T$;"     ";S$
2330     WEND
2340     RESET
2350     RETURN
2360  REM
2370  REM
2380  REM MENU=2 SUBROUTINE
2390     I=0
2400     GET 1,1
2410     B$=SPACE$(20)
2420     S=CVI(F$)
2430     WHILE S <> I
2440       I=I+1
2450       GET 1,I
2460       IF A$<>B$ THEN B=1 ELSE B=0
2470       IF P=1 AND B=1 AND A$=Z$ THEN LPRINT A$;"     ";T$;"     ";S$
2480       IF P=0 AND B=1 AND A$=Z$ THEN  PRINT A$;"     ";T$;"     ";S$
2490    WEND
2500    RESET
2510    RETURN
2520  REM
2530  REM
2540  REM MENU=3 SUBROUTINE
2550     I=0
2560     GET 1,1
2570     B$=SPACE$(20)
2580     S=CVI(F$)
2590     WHILE S <> I
2600       I=I+1
2610       GET 1,I
2620       IF A$<>S$ THEN B=1
2630       IF P=1 AND B=1 AND A$=Z$ AND T$=Y$ THEN LPRINT A$;"     ";T$;                   "     ";S$
2640       IF P=0 AND B=1 AND A$=Z$ AND T$=Y$ THEN  PRINT A$;"     ";T$;                   "     ";S$
2650     WEND
2660     RESET
2670     RETURN
2680 REM
2690 REM
2700 REM MENU=4 SUBROUTINE
2710    I=0
2720    GET 1,1
2730    B$=SPACE$(20)
2740    S=CVI(F$)
2750    WHILE S <> I
2760      I=I+1
2770      GET 1,I
2780      IF A$<>B$ THEN B=1 ELSE B=0
2790      IF P=1 AND B=1 AND T$=Y$ AND S$=X$ THEN LPRINT A$;"     ";T$;                   "     ";S$
2800      IF P=0 AND B=1 AND T$=Y$ AND S$=X$ THEN  PRINT A$;"     ";T$;                   "     ";S$
2810    WEND
2820    RESET
2830    RETURN
2840  REM
2850  REM
2860  REM
2870  REM MENU=5 SUBROUTINE
2880     I=0
2890     GET 1,1
2900     B$=SPACE$(20)
2910     S=CVI(F$)
2920     WHILE S <> I
2930       I=I+1
2940       GET 1,I
2950       IF A$<>B$ THEN B=1 ELSE B=0
2960       IF P=1 AND B=1 AND S$=X$ THEN LPRINT A$;"     ";T$;"     ";S$
2970       IF P=0 AND B=1 AND S$=X$ THEN  PRINT A$;"     ";T$;"     ";S$
2980     WEND
2990     RESET
3000     RETURN
3010  REM
3020  REM
3030  REM MENU=6 SUBROUTINE
3040     I=0
3050     GET 1,1
3060     B$=SPACE$(20)
3070     S=CVI(F$)
3080     WHILE S<> I
3090       I=I+1
3100       GET 1,I
3110       IF A$<>B$ THEN B=1 ELSE B=0
3120       IF P=1 AND B=1 AND T$=Y$ THEN LPRINT A$;"     ";T$;"     ";S$
3130       IF P=0 AND B=1 AND T$=Y$ THEN  PRINT A$;"     ";T$;"     ";S$
3140     WEND
3150     RESET
3160     RETURN
3170 '
3180 '              CHOICE=3 : DELETE BOOK SUBROUTINE
3190 '              *********************************
3200    PRINT "ARE YOU SURE (Y/N) ? "
3210    B$=INKEY$: IF B$=""  GOTO 3210
3220    WHILE B$="Y" OR B$="y"
3230      INPUT "AUTHOR  "; AU$ : LSET A$=AU$
3240      INPUT "TITLE   "; TI$ : LSET T$=TI$
3250      I=0 : II=0 : SP$=SPACE$(20)
3260      Y$=SPACE$(20) : LSET Y$=TI$
3270      Z$=SPACE$(20) : LSET Z$=AU$
3280      I=0 : II=0
3290      GET 1,1
3300      S=CVI(F$)
3310      WHILE S <> I
3320        I=I+1
3330        GET 1,I
3340        IF A$=Z$ AND T$=Y$ THEN PRINT "DELETE: ";A$;"     ";T$;"     ";S$
3350        IF A$=Z$ AND T$=Y$ THEN II=I : I=S
3360        IF II<>0 THEN LSET A$=SP$ : LSET T$=SP$ : LSET S$=SP$
3370      WEND
3380      PUT 1,II
3390      B$="N"
3400    WEND
3410    RESET
3420    PRINT "" : PRINT "     Press any key to continue"
3430    B$=INKEY$ : IF B$="" THEN 3430
3440    RETURN
3450 '
3460 '
3470 '                  NEW FILE SUBROUTINE
3480 '                  *******************
3490    INPUT "NAME OF THE NEW FILE:  ",FILE$
3500    CLS:  OPEN DRIVE$+FILE$ AS 1 LEN=63
3510    FIELD 1,3 AS F$, 20 AS A$,20 AS T$, 20 AS S$
3520    INPUT "FILE SIZE IN NUMBER OF ITEMS: ",SIZE
3530    LSET F$=MKI$(SIZE)
3540    PUT 1,1
3550    LSET A$=SPACE$(20)
3560    FOR  I=2 TO SIZE
3570      PUT 1,I
3580    NEXT I
3590    OPEN DRIVE$+"FILEDAT" FOR APPEND AS #2
3600    PRINT#2,FILE$
3610    RESET
3620    RETURN
3630 '
3640 '
3650 REM        INSTRUCTIONS SUBROUTINE
3660 REM        ***********************
3670 CLS: PRINT TAB(30) "INSTRUCTIONS":PRINT TAB(30) "************"
3680 PRINT: PRINT
3690 PRINT"FILES:
3700 PRINT"   You may create as many files as you want. Each file will contain
3710 PRINT"a series of items, e.g., a file LIBRARY with a list of your books,
3720 PRINT"a file PROGRAMS with a list of your programs, etc..
3730 PRINT"Every time that you start a session, you are asked which drive you
3740 PRINT"want to work with. That's the drive where your files' diskette is.
3750 PRINT"
3760 PRINT"NEW FILE:
3770 PRINT"   If you choose to open a new file, you will be asked to define
3780 PRINT"the size of the file in terms of items. Once you have defined the
3790 PRINT"maximum number of items for that file, you will not be able to
3800 PRINT"change it, so don't choose a number to small. On the other hand,
3810 PRINT"the bigger the file, the slower the operation of the program.
3820 PRINT"Therefore, be wise in choosing the maximum number of items.
3828 PRINT: PRINT TAB(25)"" ;
3830    COLOR 9: PRINT "Press any key to continue": COLOR 7
3840    B$=INKEY$ : IF B$="" THEN 3840
3850    CLS
3860 PRINT"NEW ITEM:
3870 PRINT"   You use that choice to add items to the file being edited."
3880 PRINT"
3890 PRINT"SEARCH:
3900 PRINT"   You may search an item, or series of items, by the author, title,
3910 PRINT"or subject, or by any combination of entries, e.g., by author, by
3920 PRINT"author and title, by title and subject, etc..
3930 PRINT"   If you want to search by author, give the author, but leave in
3932 PRINT"blank title and subject. You will get a list of all items that share
3934 PRINT"that same author.
3942 PRINT"   Only two combinations are not supported: search by author and
3944 PRINT"subject and by author,title and subject.
3950 PRINT"
3960 PRINT"DELETE ITEM:
3970 PRINT"   To delete an item, you have to specify the author and title.
3980 PRINT"
3990 PRINT"ANOTHER FILE:
4000 PRINT"   If you want to create or work with another file, just use the
4010 PRINT"ANOTHER FILE choice.
4020 PRINT"
4030 PRINT"STOP:
4040 PRINT"   Use this choice to end the session.
4068 PRINT: PRINT TAB(25) "";
4070    COLOR 9: PRINT TAB(25) "Press any key to continue": COLOR 7
4080    B$=INKEY$ : IF B$="" THEN 4080
4090    CLS
4100 RETURN
4110 REM CHOICE=5 : STOP SUBROUTINE
4120 CLOSE: KEY ON
4130 END
```

## GROWTH.BAS

```bas
10 KEY OFF:CLS
20 PRINT"░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░"
30 PRINT"░┌───────────────────────────────────┐░"
40 PRINT"░│                                   │░"
50 PRINT"░│            1017-A.BAS             │░"
60 PRINT"░│     GROWTH RATE & PROJECTION      │░"
70 PRINT"░│                                   │░"
80 PRINT"░│                                   │░"
90 PRINT"░│ BROUGHT TO YOU BY THE MEMBERS OF  │░"
100 PRINT"░│      ▄▄▄▄▄ ▄▄▄▄▄ ▄▄▄▄▄ ▄▄▄▄▄      │░"
110 PRINT"░│        █   █   █ █     █   █      │░"
120 PRINT"░│        █   █▄▄▄█ █     █   █      │░"
130 PRINT"░│        █   █     █     █   █      │░"
140 PRINT"░│      ▄▄█▄▄ █     █▄▄▄▄ █▄▄▄█      │░"
150 PRINT"░│                                   │░"
160 PRINT"░│      International PC Owners      │░"
170 PRINT"░│                                   │░"
180 PRINT"░│P.O. Box 10426, Pittsburgh PA 15234│░"
190 PRINT"░│                                   │░"
200 PRINT"░└───────────────────────────────────┘░"
210 PRINT"░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░"
220 PRINT
230 PRINT "       PRESS ANY KEY TO CONTINUE
240 A$=INKEY$: IF A$="" THEN 240
250 CLS
1000 REM PROGRAM IPCO HEADER
1010 CLS : SCREEN 0 : WIDTH 40 : KEY OFF
1020 A$=CHR$(201)+STRING$(30,205)+CHR$(187)
1030 B$=CHR$(186)+STRING$(30,32 )+CHR$(186)
1040 C$=CHR$(200)+STRING$(30,205)+CHR$(188)
1050 LOCATE 3,4,0 : PRINT A$
1060 FOR I=4 TO 18
1070 LOCATE I,4 : PRINT B$
1080 NEXT
1090 LOCATE 19,4 : PRINT C$
1100 LOCATE 8,13 : PRINT "PREPARED BY: "
1110 LOCATE 6,8: PRINT "IPCO PROGRAM SUBMISSION "
1120 LOCATE 10,9 : PRINT "THOMAS R. HOCKSWENDER "
1130 LOCATE 11,9 : PRINT "3173 MEADOWRIDGE COURT"
1140 LOCATE 12,9 : PRINT "GIBSONIA,PA  15044 "
1150 LOCATE 13,9 : PRINT "   412-443-0212"
1160 LOCATE 25,8 : PRINT "PRESS ANY KEY TO CONTINUE " : BEEP
1170 F$=INKEY$ : IF F$="" THEN 1170  ELSE 1180
1180 KEY OFF
1190 CLS
1200 WIDTH 80
1210 DIM F(24)
1220 PRINT "  GROWTH RATE AND PROJECTIONS"
1230 PRINT
1240 PRINT
1250 PRINT "  THIS PROGRAM ANALYZES SALES OR OTHER FIGURES FROM PAST MONTHS,"
1260 PRINT " COMPUTES AN AVERAGE GROWTH RATE AND PROJECTS FUTURE FIGURES."
1270 PRINT " YOU SPECIFY THE NUMBER OF PAST AND FUTURE MONTHS."
1280 PRINT "  ==> THE TOTAL NUMBER OF MONTHS CANNOT EXCEED 24."
1290 PRINT
1300 PRINT  " PRESS ANY KEY TO CONTINUE AT THE END OF EACH SCREEN "
1310 PRINT
1320 PRINT
1330 INPUT "HOW MANY PAST MONTHS";M
1340 IF M<=1 THEN PRINT "ENTER AT LEAST 2 MONTHS, PLEASE!":GOTO 1320
1350 INPUT "HOW MANY MONTHS TO PROJECT";P
1360 IF M+P>24 THEN PRINT :PRINT "ONLY 24 MONTHS TOTAL, PLEASE!":GOTO 1320
1370 PRINT
1380 PRINT "NOW ENTER AMOUNTS FOR PAST MONTHS:"
1390 PRINT
1400 FOR J=1 TO M
1410 PRINT "MONTH";J;
1420 INPUT F(J)
1430 NEXT J
1440 T=LOG(F(1))
1450 V=0
1460 FOR J=2 TO M
1470 L=LOG(F(J))
1480 T=T+L
1490 V=V+(J-1)*L
1500 NEXT J
1510 A=6*(2*V/(M-1)-T)/M/(M+1)
1520 A=EXP(A)-1
1530 AGF=EXP(T/M-A*(M-1)/2)
1540 FOR J=M+1 TO M+P
1550 F(J)=INT(AGF*(1+A)^(J-1)+.5)
1560 NEXT J
1570 MIN=F(1)
1580 MAX=F(1)
1590 FOR J=1 TO M+P
1600 IF F(J)>MAX THEN MAX=F(J)
1610 IF F(J)<MIN THEN MIN=F(J)
1620 NEXT J
1630 S=168/(MAX+MIN)
1640 CLS
1650 FOR J=1 TO M+P
1660 IF J>M+P THEN J=24:GOTO 1690
1670 PRINT
1680 PRINT "MONTH";J;TAB(10);F(J);
1690 NEXT J
1700 PRINT TAB(18);"(GROWTH RATE:";INT(A*10000+.5)/100;"%)";
1710 GOSUB 1900
1720 FOR J=1 TO M+P
1730 IF J>M THEN C=1
1740 PSET (J*11+45,200-INT(S*F(J))),C
1750 NEXT J
1760 GOSUB 1900
1770 PSET (56,200-INT(S*F(1))),C
1780 FOR J=2 TO M+P
1790 IF J>M THEN C=1
1800 LINE -(J*11+45,200-INT(S*F(J))),C
1810 NEXT J
1820 GOSUB 1900
1830 FOR J=1 TO M+P
1840 IF J>M THEN C=1
1850 LINE (J*11+45,200)-(J*11+54,200-INT(S*F(J))),C,BF
1860 NEXT J
1870 A$=INPUT$(1)
1880 SCREEN 0,0,0
1890 CLS:SCREEN 1,0:COLOR 0,0:LOCATE 5,10:PRINT "PROGRAM FINISHED!":KEY ON:END
1900 A$=INPUT$(1)
1910 CLS
1920 SCREEN 1,0
1930 COLOR 0,0
1940 C=2
1950 PRINT "     AVERAGE GROWTH RATE IS ";INT(A*10000+.5)/100;"%"
1960 PRINT "AMOUNT"
1970 PRINT "  ||  <------------ MONTH ------------>";
1980 PRINT "  \/  1  3   6   9   12  15  18  21  24";
1990 FOR J=5 TO 25 STEP 5
2000 LOCATE J,1
2010 PRINT INT((168-(J/5-1)*40)/S+.5);
2020 NEXT J
2030 RETURN
```

## MOLY-PAY.BAS

```bas
10 KEY OFF:CLS
20 PRINT"░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░"
30 PRINT"░┌───────────────────────────────────┐░"
40 PRINT"░│                                   │░"
50 PRINT"░│            6011-A.BAS             │░"
60 PRINT"░│              LIBCAT               │░"
70 PRINT"░│                                   │░"
80 PRINT"░│                                   │░"
90 PRINT"░│ BROUGHT TO YOU BY THE MEMBERS OF  │░"
100 PRINT"░│      ▄▄▄▄▄ ▄▄▄▄▄ ▄▄▄▄▄ ▄▄▄▄▄      │░"
110 PRINT"░│        █   █   █ █     █   █      │░"
120 PRINT"░│        █   █▄▄▄█ █     █   █      │░"
130 PRINT"░│        █   █     █     █   █      │░"
140 PRINT"░│      ▄▄█▄▄ █     █▄▄▄▄ █▄▄▄█      │░"
150 PRINT"░│                                   │░"
160 PRINT"░│      International PC Owners      │░"
170 PRINT"░│                                   │░"
180 PRINT"░│P.O. Box 10426, Pittsburgh PA 15234│░"
190 PRINT"░│                                   │░"
200 PRINT"░└───────────────────────────────────┘░"
210 PRINT"░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░"
220 PRINT
230 PRINT "       PRESS ANY KEY TO CONTINUE
240 A$=INKEY$: IF A$="" THEN 240
250 CLS
1000 REM  ********  LIBCAT   **********
1010 KEY OFF
1020 REM  A PROGRAM TO CATALOG BOOKS
1030 OPEN "B:CATALOG" AS 1 LEN=62
1040 FIELD 1,2 AS F$,20 AS A$,20 AS T$,20 AS S$
1050 CLS
1060 PRINT "               **********      LIBCAT    **************"
1070 PRINT
1080 PRINT "       THIS PROGRAM LETS YOU CREATE A CATALOG OF YOUR LIBRARY."
1090 PRINT "       YOU ADD BOOKS, OR DELETE BOOKS. EACH BOOK IS INPUT WITH"
1100 PRINT "       AUTHOR, TITLE AND SUBJECT. YOU CAN SEARCH FOR A BOOK OR"
1110 PRINT "       TYPES OF BOOKS AND GET LISTINGS IF DESIRED."
1120 PRINT
1130 PRINT
1140 PRINT "                 ACTIONS:    1 ADD A BOOK"
1150 PRINT "                             2 DELETE A BOOK"
1160 PRINT "                             3 SEARCH FOR A BOOK(S)/LISTINGS"
1170 PRINT "                             4 BEGIN A NEW LIBRARY"
1180 PRINT "                             5 EXIT PROGRAM(ACTIONS FINISHED)"
1190 PRINT
1210 INPUT "          ENTER YOUR CHOICE";CHOICE
1220 WHILE CHOICE<1 OR CHOICE>5
1230 INPUT "          ENTER YOUR CHOICE";CHOICE
1240 WEND
1250 ON CHOICE GOSUB 1270,2180,1520,2480,2730
1260 GOTO 1030
1270 REM   ******** NEW BOOK SUBROUTINE **********
1280 CLS
1290 PRINT "                     ********  ADD A BOOK  *********"
1300 PRINT
1310 PRINT
1320 PRINT
1330 PRINT
1340 I=0:LOOP=1
1350 GET 1,1
1360 S=CVI(F$)
1370 WHILE LOOP = 1
1380 I=I+1
1390 GET 1,I
1400 IF A$=SPACE$(20) OR S=I THEN LOOP=0
1410 WEND
1420 IF S=1 THEN PRINT "                 LIBRARY IS FULL":RESET:RETURN
1430 INPUT "                              AUTHOR";AU$:LSET A$=AU$
1440 INPUT "                               TITLE";TI$:LSET T$=TI$
1450 INPUT "                             SUBJECT";SU$:LSET S$=SU$
1460 PUT 1,I
1470 PRINT
1480 INPUT "                 ADD ANOTHER BOOK(Y/N)";ANS$
1490 IF ANS$ = "Y"        THEN GOTO 1270
1500 IF ANS$ = "y"        THEN GOTO 1270
1510 RESET:RETURN
1520 REM   ******** SEARCHES SUBROUTINE *********
1530 CLS
1540 PRINT "                   **********  SEARCH FOR A BOOK(S) ********"
1550 PRINT
1560 PRINT "               INPUT AUTHOR OR TITLE OR SUBJECT YOU ARE SEARCHING FOR."
1570 PRINT "               IF NO INPUT IS GIVEN(BLANK ENTERED) THEN ALL BOOKS"
1580 PRINT "               MATCHING OTHER REQUIREMENTS WILL BE FOUND. IF YOU INPUT"
1590 PRINT "               THREE BLANKS ALL BOOKS WILL BE LISTED."
1600 PRINT
1610 INPUT "                               AUTHOR";AU$
1620 INPUT "                                TITLE";TI$
1630 INPUT "                              SUBJECT";SU$
1640 PRINT ""
1650 INPUT "                   LISTING ON PAPER(Y/N)";P$:IF P$="Y" THEN P=1 ELSE P=0
1660 PRINT
1670 IF P=1 THEN INPUT "TURN ON PRINTER,SET TO TOP OF FORM. HIT ENTER TO CONTINUE";DDD$: LPRINT TAB(7) "AUTHOR" TAB(32) "TITLE" TAB(55) "SUBJECT"
1680 IF P=0 THEN  PRINT TAB(7) "AUTHOR" TAB(32) "TITLE" TAB(55) "SUBJECT"
1690 IF AU$="" AND TI$="" AND SU$= ""  THEN MENU =1
1700 IF AU$<>"" AND TI$="" AND SU$= ""  THEN MENU =2
1710 IF AU$<>"" AND TI$<>"" AND SU$= ""  THEN MENU =3
1720 IF AU$= "" AND TI$<>"" AND SU$<>""  THEN MENU =4
1730 IF AU$= "" AND TI$= "" AND SU$<>""  THEN MENU =5
1740 IF AU$= "" AND TI$<>"" AND SU$= ""  THEN MENU =6
1750 Z$=SPACE$(20):LSET Z$=AU$
1760 Y$=SPACE$(20):LSET Y$=TI$
1770 X$=SPACE$(20):LSET X$=SU$
1780 ON MENU GOSUB 1820,1880,1940 ,2000 ,2060 ,2120
1790 PRINT :PRINT "                PRESS ANY KEY TO CONTINUE"
1800 B$=INKEY$:IF B$="" THEN 1800
1810 GOTO 1030
1820 REM   MENU=1 SUBROUTINE
1830 I=0:GET 1,1:B$=SPACE$(20):S=CVI(F$):WHILE S <> I:I=I+1:GET 1,I
1840 IF A$<>B$ THEN B=1 ELSE B=0
1850 IF P=1 AND B=1  THEN LPRINT A$;"     ";T$;"     ";S$
1860    IF P=0 AND B=1 THEN  PRINT A$;"     ";T$;"     ";S$
1870 WEND:CLOSE:RETURN
1880     REM   MENU=2 SUBROUTINE
1890 I=0:GET 1,1:B$=SPACE$(20):S=CVI(F$):WHILE S <> I:I=I+1:GET 1,I
1900 IF A$<>B$ THEN B=1 ELSE B=0
1910 IF P=1 AND B=1 AND A$=Z$ THEN LPRINT A$;"     ";T$;"     ";S$
1920 IF P=0 AND B=1 AND A$=Z$ THEN  PRINT A$;"     ";T$;"     ";S$
1930 WEND:CLOSE:RETURN
1940 REM   MENU=3 SUBROUTINE
1950 I=0:GET 1,1:B$=SPACE$(20):S=CVI(F$):WHILE S <> I:I=I+1:GET 1,I
1960 IF A$<>S$ THEN B=1
1970 IF P=1 AND B=1 AND A$=Z$ AND T$=Y$  THEN LPRINT A$;"     ";T$;"     ";S$
1980 IF P=0 AND B=1 AND A$=Z$ AND T$=Y$ THEN  PRINT A$;"     ";T$;"     ";S$
1990 WEND:CLOSE:RETURN
2000 REM   MENU=4 SUBROUTINE
2010 I=0:GET 1,1:B$=SPACE$(20):S=CVI(F$):WHILE S <> I:I=I+1:GET 1,I
2020 IF A$<>B$ THEN B=1 ELSE B=0
2030 IF P=1 AND B=1 AND S$=X$ AND T$=Y$  THEN LPRINT A$;"     ";T$;"     ";S$
2040 IF P=0 AND B=1 AND S$=X$ AND T$=Y$ THEN  PRINT A$;"     ";T$;"     ";S$
2050 WEND:CLOSE:RETURN
2060 REM   MENU=5 SUBROUTINE
2070 I=0:GET 1,1:B$=SPACE$(20):S=CVI(F$):WHILE S <> I:I=I+1:GET 1,I
2080 IF A$<>B$ THEN B=1 ELSE B=0
2090 IF P=1 AND B=1 AND S$=X$   THEN LPRINT A$;"     ";T$;"     ";S$
2100 IF P=0 AND B=1 AND S$=X$  THEN  PRINT A$;"     ";T$;"     ";S$
2110 WEND:CLOSE:RETURN
2120 REM   MENU=6 SUBROUTINE
2130 I=0:GET 1,1:B$=SPACE$(20):S=CVI(F$):WHILE S <> I:I=I+1:GET 1,I
2140 IF A$<>B$ THEN B=1 ELSE B=0
2150 IF P=1 AND B=1 AND T$=Y$   THEN LPRINT A$;"     ";T$;"     ";S$
2160 IF P=0 AND B=1 AND T$=Y$  THEN  PRINT A$;"     ";T$;"     ";S$
2170 WEND:CLOSE:RETURN
2180 REM   ******** DELETE BOOK SUBROUTINE ***********
2190 CLS
2200 PRINT "               ******** DELETE A BOOK *********"
2210 PRINT
2220 PRINT
2230 INPUT "          ARE YOU SURE (Y/N)";B$
2240 WHILE B$="Y"
2250 PRINT
2260 INPUT "                      AUTHOR";AU$:LSET A$=AU$
2270 INPUT "                       TITLE";TI$:LSET T$=TI$
2280 I=0:II=0:SP$=SPACE$(20)
2290 Y$=SPACE$(20):LSET Y$=TI$
2300 Z$=SPACE$(20):LSET Z$=AU$
2310 I=0:II=0
2320 GET 1,1
2330 S=CVI(F$)
2340 WHILE S<>I
2350 I=I+1
2360 GET 1,I
2370 IF A$=Z$ AND T$=Y$ THEN PRINT "DELETE:  ";A$;"    ";T$;"     ";S$
2380 IF A$=Z$ AND T$=Y$ THEN II=I:I=S
2390 IF II<>0 THEN LSET A$=SP$:LSET T$=SP$:LSET S$=SP$
2400 WEND
2410 PUT 1,II
2420 B$="N"
2430 WEND
2440 RESET
2450 PRINT :PRINT "       PRESS ANY KEY TO CONTINUE"
2460 B$=INKEY$:IF B$="" THEN 2460
2470 RETURN
2480 REM   ******** NEW LIBRARY SUBROUTINE **********
2490 CLS
2500 PRINT "           *********  START A NEW LIBRARY *********"
2510 PRINT
2520 PRINT
2530 INPUT "       ARE YOU SURE YOU WANT TO START A NEW LIBRARY(Y/N)";B$
2540 WHILE B$="Y"
2550 PRINT "                **************  NOTICE !!!!  ************"
2560 PRINT:PRINT "WHEN A NEW LIBRARY IS STARTED, THE OLD LIBRARY(IF ANY) ON DISKETTE WILL"
2570 PRINT "BE DESTROYED (GONE FOREVER)  AS THE NEW LIBRARY FILE IS SET UP.":PRINT
2580 INPUT "DO YOU HAVE OLD LIBRARY(IF ANY) BACKED UP ON ANOTHER DISKETTE(Y/N)";Q$
2590 IF Q$="Y" THEN GOTO 2620
2600 IF Q$="N" THEN PRINT:PRINT "IF YOU WISH TO SAVE OLD LIBRARY THEN EXIT NOW AND SAVE FILE ON ANOTHER DISKETTE":PRINT :INPUT "DO YOU WISH TO EXIT(Y/N)";QQ$
2610 IF QQ$="N" GOTO 2620 ELSE STOP
2620 PRINT:INPUT "LIBRARY SIZE, NUMBER OF BOOKS (UP TO 2500 ON 160K DISKETTE;5000 ON 320K)"; SIZE
2630 LSET F$=MKI$(SIZE)
2640 PUT 1,1
2650 LSET A$=SPACE$(20)
2660 FOR I=2 TO SIZE
2670 PUT 1,I
2680 NEXT I
2690 B$="N"
2700 WEND
2710 CLOSE
2720 RETURN
2730 REM   ******** :STOP SUBROUTINE *********
2740 PRINT:PRINT "                     ******* EXIT PROGRAM ********"
2750 PRINT
2760 CLOSE
2770 PRINT "         FILES CLOSED. IF YOU HAVE ENTERED MANY NEW BOOKS INTO CATALOG THEN"
2780 PRINT "         YOU WILL PROBABLY WISH TO MAKE BACKUP COPY OF THE FILES."
2790 END
```

## MPG-CAL.BAS

```bas
10 CLS
20 A$=STRING$(80,205)
30 PRINT A$
40 PRINT TAB(25)"MPG CALCULATOR      6009-A.BAS"
50 COLOR 23,0,0
60 PRINT :PRINT :PRINT TAB(38)"IPCO"
70 COLOR 7,0,0
80 PRINT :PRINT :PRINT TAB(29)"INTERNATIONAL PC OWNERS"
90 PRINT :PRINT :PRINT TAB(17)"p.o. box 10426, pittsburgh, pennsylvania 15234"
100 PRINT A$
110 PRINT :PRINT :PRINT :PRINT :PRINT
120 PRINT TAB(28)"PRESS ANY KEY TO CONTINUE"
130 A$=INKEY$:IF A$="" THEN 130
140 CLS
1000 REM***** GAS******
1010 REM ***************DATA INITIALIZATION***************
1020 M= 1000
1030 PRINT " ENTER THE INITIAL MILEAGE, DATE OF RECORDING "
1040 INPUT MO,DO$
1050 PRINT "ENTER THE GASOLINE USED (O WHEN FINISHED)
1060 FOR I = 1 TO M
1070    G=O
1080   INPUT G
1090 IF G=O THEN 1120
1100   G1=G1+G
1110 NEXT I
1120 PRINT "ENTER ENDING MILEAGE,DATE"
1130 INPUT M9,D9$
1140 REM*****************PROCESSING AREA******************
1150 M=M9-MO
1160 C=M/G1
1170 PRINT
1180 PRINT
1190 PRINT "**********************************************"
1200 PRINT "FOR THE PERIOD ";DO$;"-";D9$
1210 PRINT "     MILES DRIVEN:";M
1220 PRINT "     GASOLINE USED:";G1
1230 PRINT "     AVG MILES/GALLON:";C
1240 PRINT"***********************************************"
1250 REM *******************PROGRAM TERMINATION POINT******************
1260 PRINT
1270 PRINT
1280 STOP
```

## PCFILECH.BAS

```bas
1 '*********************************************************************
2 '*   PC-MAP.  This program recreates a PC-File database into a new   *
3 '*            Format. Fields may be added or deleted, renamed,       *
4 '*            rearranged, and lengthened or shortened. Output is a   *
5 '*            Data file and Header file.  After using PC-File to     *
6 '*            sort the file (thus creating a new index), the new     *
7 '*            database is ready to go.                               *
8 '*            (1982) by F. Neil Lamka.                               *
9 '*********************************************************************
10 DEFINT A-Z:COMMON F$,DL,XL,NR
20 CLS:RC=80
25 ERCOUNT = 0
30 FALSE=0:TRUE=1
40 MC=RC\2:F9=RC\2+2
50 SCREEN 0,0:COLOR 7,0
60 WIDTH RC:KEY OFF
70 DIM OFM$(42),OFL(42) 'set up arrays for field names and lengths
80 DIM NFM$(42),NFL(42) 'set up arrays for new data base
90 CLS:LOCATE 10,MC-9:PRINT"PC-MAP Version 1.4";
95 LOCATE 12,MC-17:PRINT"A PC-FILE Data Base Conversion Aid";
100 LOCATE 14,MC-11:PRINT"(1982) F. Neil Lamka"
110 DR$="Which drive (ABCD) contains the origional data base? "
120 CL = 0
130 UC=1:GOSUB 20000
140 IF DR$<"A" OR DR$>"D" GOTO 110
150 OF$ = DR$+":"   'set file name for old data base
155 TF$=OF$
160 DR$="Which drive (ABCD) will contain the new data base? "
170 CL = -3 'set value for message color (15-3)
180 UC=1:GOSUB 20000
190 CL = 0 'reset line color value
200 IF DR$<"A" OR DR$>"D" GOTO 160
210 NF$ = DR$+ ":"  'set file name for new data base
220 ON ERROR GOTO 250
230 CLS:LOCATE 5,1:PRINT"Choose one of these files to convert:"
240 FILES OF$+"*.HDR":GOSUB 30000:ON ERROR GOTO 0:GOTO 260
250 RESUME 260
260 DR$="Which file:":UC=1:GOSUB 20000
270 IF DR$="" THEN 260 ELSE OF$ = TF$ + DR$ 'set file name to be used
280 ON ERROR GOTO 330
290 VL$=".HDR":FILES OF$+VL$ 'see if the hdr file exists
300 VL$=".DTA":FILES OF$+VL$ 'see if the data file exists
310 ON ERROR GOTO 0
320 CLS:GOTO 360  'go get new file name
330 RESUME 340
340 ON ERROR GOTO 0:DR$=OF$+VL$+" does not exist...please respecify: "
341 CL=-4:UC=1:SOUND 500,9:GOSUB 20000:CL=0
342 IF DR$="" THEN 260 ELSE OF$=TF$+DR$
350 GOTO 280
360 TF$=NF$
365 DR$="Enter name for new data base: ":CL= -3:UC=1:GOSUB 20000
370 IF DR$="" THEN 360 ELSE NF$=NF$+DR$ 'set new data base name
375 IF NF$=OF$ THEN DR$="INVALID NAME - SAME AS THE FIRST ONE - RESPECIFY ":NF$=TF$:UC=1:CL=-4:SOUND 500,4:GOSUB 20000:CL=0:GOTO 370
380 ON ERROR GOTO 440
400 VL$=".HDR":FILES NF$+VL$ 'see if a hdr file exists
410 CLS:DR$=NF$+VL$+" already exists...respecify or hit ENTER to reuse: "
415 ON ERROR GOTO 0
420 UC=1:CL=-4:SOUND 500,4:GOSUB 20000:CL=0
430 IF DR$="" THEN KILL NF$+VL$:GOTO 450 ELSE NF$=TF$+DR$:GOTO 380
440 RESUME 450 'if we get here then the files did not exist
450 ON ERROR GOTO 0
452 ON ERROR GOTO 462:VL$=".DTA":FILES NF$+VL$
454 CLS:DR$=NF$+VL$+" already exists...respecify or hit ENTER to reuse: "
456 ON ERROR GOTO 0
458 UC=1:CL=-3:SOUND 500,9:GOSUB 20000:CL=0
460 IF DR$="" THEN KILL NF$+VL$:GOTO 464 ELSE NF$=TF$+DR$:GOTO 380
462 RESUME 464 'files did not exist if we are here
464 ON ERROR GOTO 0
500 REM All files have been verified...now start the work
510 ODL=0:ODF=0 'set record length and number of entries in old db
520 NDL=0:NDF=0 'set record length and number of entries in new db
530 CLS
540 PRINT"Reading origional data base records ";MID$(OF$,3)
550 OPEN"i",#1,OF$+".HDR"  'open old header file
560 WHILE NOT EOF(1)       'read old data base header description
570 INPUT#1,TS$:ODF =ODF + 1:OFM$(ODF) = TS$ 'read label
580 INPUT#1,OFL(ODF):ODL = ODL + OFL(ODF)
590 WEND 'end of the loop
595 CLOSE#1 'done with the old header file
600 CLS:LOCATE 2,1:PRINT "Origional Data Base Fields";
602 LOCATE 3,1:PRINT OF$+".HDR";
605 LC=4:MAXLEN = 0
610 LOCATE LC,1
620 FOR I = 1 TO ODF
630 IF OFL(I) > MAXLEN THEN MAXLEN=OFL(I)
635 LOCATE LC+I,1:PRINT OFM$(I);:PRINT,USING" ###";OFL(I)
640 NEXT I
650 IF MAXLEN+3+2 <= 40 THEN NEXTFIELD=40 ELSE NEXTFIELD=0
700 LOCATE 1,1:COLOR 12,0:SOUND 800,4:PRINT"Enter values for the new headers";
703 LOCATE 2,NEXTFIELD:COLOR 15,0:PRINT"New Data Base fields";
705 LOCATE 3,NEXTFIELD:PRINT NF$+".HDR";
710 ATLINE = 1:NDF=0:NEWEND = FALSE
715 CURMAX = 12:COLOR 15,0
720 WHILE NEWEND = FALSE
725 IF ATLINE+LC >24 THEN GOSUB 10000:ATLINE = 1
730 LOCATE ATLINE+LC,NEXTFIELD
740 LINE INPUT;"";TS$:IF TS$="" THEN NEWEND=TRUE:GOTO 750 ELSE NDF=NDF+1:NFM$(NDF) = TS$
741 IF LEN(NFM$(NDF)) > 12 THEN NFM$(NDF)=LEFT$(NFM$(NDF),12):LOCATE ATLINE+LC,NEXTFIELD:PRINT NFM$(NDF)+SPACE$(LEN(TS$)-12);
745 ATLINE = ATLINE + 1
750 WEND:COLOR 7,0
752 DR$="Is this HDR information correct (Y or N)? ":UC=1:CL=0:GOSUB 20000
753 IF DR$="" THEN 752 ELSE IF DR$ = "N" THEN GOSUB 40000:GOTO 710 ELSE IF DR$ <> "Y" THEN 752
759 NDL=0:LOCATE 1,1:PRINT"                                 "
760 LOCATE 1,40:COLOR 12,0:PRINT"Enter the width of each field    ";:COLOR 4,0
765 SOUND 800,5
770 FOR I = 1 TO NDF
780 LOCATE LC+I,NEXTFIELD+CURMAX+1
790 LINE INPUT;"";TS$:NFL(I)=VAL(TS$):NDL=NDL+NFL(I)
792 IF NFL(I) = 0 THEN LOCATE 25,1:PRINT"Spceified field length is not valid..Please reenter";:SOUND 500,9:GOTO 780
795 LOCATE LC+I,NEXTFIELD+CURMAX+1:PRINT,USING"###";NFL(I)
796 LOCATE 25,1:PRINT"                                                    ";
800 NEXT I
802 DR$="Is this field width information correct (Y or N)? ":UC=1:CL=0:GOSUB 20000
803 IF DR$="" THEN 802 ELSE IF DR$ = "N" THEN GOSUB 50000:GOTO 759 ELSE IF DR$ <> "Y" THEN 802
810 COLOR 7,0
900 CLS 'now that the data fields have been defined...we need relationships
910 LOCATE 1,1:PRINT"Define field relationship values";
920 LOCATE 2,1:PRINT"For each field in the new data base indicate the";
930 LOCATE 3,1:PRINT"corresponding old data base field number or 0";
940 LOCATE 4,1
950 FOR I = 1 TO NDF 'output new data fields
960 LOCATE 4+I,1:PRINT NFM$(I);
980 NEXT I
990 FOR I = 1 TO ODF 'output old data base fields
1000 LOCATE 4+I,50:PRINT OFM$(I)
1005 LOCATE 4+I,30:PRINT,USING"###";I;
1010 NEXT I
1015 DIM FR(42) 'set the size of the relationship matrix to the # of data flds
1020 FOR I = 1 TO NDF 'get field relationship value
1030 LOCATE 4+I,25
1040 LINE INPUT;"";TS$:IF TS$ = "" THEN 1030
1050 IF (VAL(TS$) > ODF) OR (VAL(TS$) < 0) THEN LOCATE 25,1:PRINT"Invalid field relationship specified";:SOUND 500,9:GOTO 1030
1060 LOCATE 25,1:PRINT"                                    ";
1070 FR(I) = VAL(TS$) 'set the field relationship matrix value
1080 NEXT I
1082 DR$="Are these field relationships correct (Y or N)? ":CL=0:UC=1:GOSUB 20000
1084 IF DR$="" THEN 1082 ELSE IF DR$="N" THEN GOSUB 60000:GOTO 1020 ELSE IF DR$ <> "Y" THEN 1082
1100 CLS 'now we have all we need to remap the data base
1110 DIM OFILE$(42),NFILE$(42) 'set up to map the data base
1120 CLS:PRINT"Writing new HDR file ";:COLOR 12,0
1130 PRINT NF$+".HDR":COLOR 7,0
1140 OPEN"o",#1,NF$+".HDR"
1150 FOR I = 1 TO NDF 'loop until end of header info
1160 PRINT#1,NFM$(I) 'write out the header name
1170 PRINT#1,NFL(I)  'write out the field lenght
1180 NEXT I
1190 CLOSE#1         'close the new header file
1200 PRINT"New Header file created"
1210 REM open the DTA data sets for processing
1220 OPEN"r",#2,OF$+".DTA",ODL+1
1230 FIELD#2,ODL AS ODF$          'set up a field for direct read
1240 OPEN"r",#3,NF$+".DTA",NDL+1
1250 FIELD#3,NDL AS NDF$          'this will be the outputfield
1260 X = 1 'set initial record number
1265 FEND = FALSE
1270 WHILE FEND = FALSE  'read until \ record found in data base
1280 GET#2,X  'read record from the old data base
1290 IF LEFT$(ODF$,1) = "\" THEN FEND=TRUE:DR$="\":GOTO 1400
1295 'IF LEFT($(ODF$,2)="//" THEN GOTO 1408  check for deleted record
1300 CPOS = 1 'map old data record to array
1310 FOR I = 1 TO ODF
1320 OFILE$(I)=MID$(ODF$,CPOS,OFL(I)):CPOS=CPOS+OFL(I)
1330 NEXT I
1340 FOR J = 1 TO NDF
1350 IF FR(J)=0 THEN NFILE$(J)=SPACE$(NFL(J)):GOTO 1372
1362 IF NFL(J)<=OFL(FR(J)) THEN NFILE$(J)=LEFT$(OFILE$(FR(J)),NFL(J)):GOTO 1372
1364 IF NFL(J)>OFL(FR(J)) THEN NFILE$(J)=OFILE$(FR(J))+SPACE$(NFL(J)-OFL(FR(J)))
1372 NEXT J
1375 DR$=""
1376 FOR K=1 TO NDF:DR$=DR$+LEFT$(NFILE$(K),NFL(K)):NEXT K
1400 LSET NDF$=DR$:PUT#3,X       'write the new record
1401 CLS:LOCATE 1,1:PRINT"Processing record number(",X,")";
1402 LOCATE 2,1:PRINT"New File Record";
1403 LOCATE 2,40:PRINT"Old File Record";
1406 FOR K = 1 TO NDF:LOCATE 3+K,1:PRINT NFILE$(K);:NEXT K
1407 FOR K = 1 TO ODF:LOCATE 3+K,40:PRINT OFILE$(K);:NEXT K
1408 X=X+1
1410 WEND
1420 CLOSE#2:CLOSE#3
1500 CLS 'output final file stats
1510 LOCATE 8,28:PRINT"File conversion complete";
1520 LOCATE 9,28:PRINT"Data Base Statistics are";
1530 LOCATE 11,1 :PRINT"Origional Data Base = ";:LOCATE 11,30:PRINT OF$;
1550 LOCATE 12,1:PRINT"Origional number of fields = ";:LOCATE 12,30:PRINT ODF;
1552 LOCATE 13,1:PRINT"Record Length = ";:LOCATE 13,30:PRINT ODL;
1555 COLOR 15,0
1560 LOCATE 15,1:PRINT"New Data Base = ";:LOCATE 15,30:PRINT NF$;
1570 LOCATE 16,1:PRINT"New number of fields = ";:LOCATE 16,30:PRINT NDF;
1580 LOCATE 17,1:PRINT"New Total Record Length = ";:LOCATE 17,30:PRINT NDL;
1590 LOCATE 20,1:PRINT"Number of Data Records Read = ",X-1;
1600 COLOR 7,0
1610 GOSUB 60990 'go wait for input key to continue
1615 CLS:PRINT"Your new database is built."
1620 PRINT:PRINT"You must remember to sort the database"
1625 PRINT:PRINT"the first time you use it."
1640 END
10000 FOR LP = LC+1 TO 24
10010 LOCATE LP,NEXTFIELD:PRINT SPC(79-NEXTFIELD)
10020 NEXT LP
10030 RETURN
20000 GOSUB 20110
20010 SOUND 200,9
20020 LOCATE 25,1:COLOR 15+CL,0
20030 PRINT DR$;:COLOR 7,0
20040 LINE INPUT;"";DR$
20050 IF LEN(DR$)<1 GOTO 20110
20060 IF UC=0 GOTO 20110
20070 FOR NN = 1 TO LEN(DR$) 'fold to upper case
20080 X=ASC(MID$(DR$,NN,1))
20090 IF X>=97 AND X <= 122 THEN MID$(DR$,NN,1)=CHR$(X-32)
20100 NEXT:UC = 0
20110 LOCATE 25,1:PRINT SPACE$(RC-1);:LOCATE 25,1:RETURN
30000 FOR R = 6 TO 24
30010 FOR C = 9 TO RC-2 STEP 13
30020 LOCATE R,C:PRINT"     ";
30030 NEXT C:NEXT R
30040 RETURN
40000 FOR I = 1 TO NDF 'routine called if new field names incorrect
40010 NFM$(I) = ""
40020 LOCATE LC+I,NEXTFIELD:PRINT SPC(RC-NEXTFIELD);
40030 NEXT I
40040 RETURN
50000 FOR I = 1 TO NDF 'routine to be called if new field width incorrect
50020 NFL(I)=0
50025 LOCATE LC+I,NEXTFIELD+CURMAX+1:PRINT,USING"###";NFL(I);
50030 NEXT I
50040 RETURN
60000 FOR I = 1 TO NDF 'routine to be used if relationship vals incorrect
60010 LOCATE 4+I,25:PRINT SPC(5)
60020 FR(I) = 0
60030 NEXT I
60040 RETURN
60990 REM 'Wait for input key subroutine
60991 LOCATE 25,1:PRINT"Hit any key to continue";
60992 K$=INKEY$:IF K$="" THEN 60992 ELSE RETURN
```

## SERIALNO.BAS

```bas
10 CLS
20 A$=STRING$(80,205)
30 PRINT A$
40 PRINT TAB(19)"7012-A.BAS    SERIAL NUMBER CARD GENERATOR"
50 COLOR 23,0,0
60 PRINT :PRINT :PRINT TAB(38)"IPCO"
70 COLOR 7,0,0
80 PRINT :PRINT :PRINT TAB(29)"INTERNATIONAL PC OWNERS"
90 PRINT :PRINT :PRINT TAB(17)"p.o. box 10426, pittsburgh, pennsylvania 15234"
100 PRINT A$
110 PRINT :PRINT :PRINT :PRINT :PRINT
120 PRINT TAB(28)"PRESS ANY KEY TO CONTINUE"
130 A$=INKEY$:IF A$="" THEN 130
140 CLS
1000 '     IPCO Software Exchange submission S-NBINGO
1010 '
1020 '     written on September 13, 1982 by
1030 '
1040 '     Michael Csontos, 3228 Livonia Center Road, Lima, New York 14485
1050 '
1060 KEY OFF:SCREEN 0,0,0:COLOR 7,0,0:WIDTH 80:CLS:REVISE=0:RANDOMIZE(VAL(RIGHT$(TIME$,2)))
1070 PRINT " Sorry, this is not a game!":PRINT
1080 PRINT " This program will produce lists of numbers, like serial numbers, sequentially":PRINT
1090 PRINT "in columns and pages from whatever starting number to whatever ending number":PRINT
1100 PRINT "you select.   The number can be formatted to include letters or fixed numbers,":PRINT
1110 PRINT "e.g.: "CHR$(34)"S/N B-123-####-45  "CHR$(34)" where the #### block can be sequenced":PRINT
1120 PRINT "through any range of four digit numbers.":PRINT
1130 PRINT " This was written to provide a checklist of phonograph record numbers for use":PRINT
1140 PRINT "in avoiding duplication when buying used records.  It might be useful in other":PRINT
1150 PRINT "collections where the items can be identified by numbers. It can also generate":PRINT
1160 PRINT "a serial number checklist for a manufacturing operation, or the s/n labels.":PRINT
1170 PRINT "The larger typefaces available might make tickets or even bingo cards!":PRINT
1180  PRINT "Press any key to continue."
1190 X$=INKEY$:IF X$="" THEN 1190 ELSE CLS
1200 ON ERROR GOTO 1840
1210 IF REVISE=0 OR REVISE=1 THEN 1220 ELSE 1320
1220 PRINT "You have the choice of several print typefaces. They are:":PRINT
1230 PRINT "      1: double width emphasized  40 characters/line  40 lines/page
1240 PRINT "      2: double width compressed  66 characters/line  50 lines/page
1250 PRINT "      3: normal emphasized        80 characters/line  60 lines/page
1260 PRINT "      4: compressed              132 characters/line  80 lines/page
1270 PRINT "      5: tiny (script)           132 characters/line 120 lines/page
1280 PRINT:PRINT "Please select your choice (1-5) or press <Esc> to quit.";
1290 TYPEFACE$=INKEY$:IF TYPEFACE$=CHR$(27) THEN 1760 ELSE IF TYPEFACE$="" THEN 1290 ELSE TYPEFACE=VAL(TYPEFACE$):IF TYPEFACE<1 OR TYPEFACE>5 OR INT(TYPEFACE)<>TYPEFACE THEN PRINT "Please press a number from 1 to 5 or press <Esc> to quit.":GOTO 1280
1300 IF TYPEFACE=1 THEN CHRLN=40:LNPG=40 ELSE IF TYPEFACE=2 THEN CHRLN=66:LNPG=50 ELSE IF TYPEFACE=3 THEN CHRLN=80:LNPG=60 ELSE IF TYPEFACE=4 THEN CHRLN=132:LNPG=80 ELSE IF TYPEFACE=5 THEN CHRLN=132:LNPG=120
1310 PRINT TYPEFACE:PRINT
1320 IF REVISE=0 OR REVISE=2 THEN 1330 ELSE 1370
1330 PRINT " You must select a format for the numbers. Since most serial numbers contain    letters and fixed digits, enter these and show the positions for the numbers    you want sequenced by # symbols. For example "CHR$(34)"LM-####  "CHR$(34)".":PRINT
1340 PRINT " The quotation marks are necessary and the spaces you leave within them will    determine the spacing of the columns. (See the PRINT USING instruction in your  BASIC manual.)":PRINT
1350 INPUT "What is your s/n format";SNFORM$
1360 IF SNFORM$="" THEN PRINT "You must enter something here or this program will do nothing for you!":GOTO 1350
1370 IF REVISE=0 OR REVISE=3 THEN 1380 ELSE 1390
1380 PRINT:INPUT "What is the starting number for your s/n series";STARTNUM
1390 IF REVISE=0 OR REVISE=4 THEN 1400 ELSE 1410
1400 PRINT:INPUT "What is the ending number for your s/n series";ENDNUM
1410 NCOLS=INT(CHRLN/LEN(SNFORM$)):IF NCOLS=(CHRLN/LEN(SNFORM$)) THEN NCOLS=NCOLS-1
1420 NLINES=INT((ENDNUM-STARTNUM)/NCOLS)+1
1430 NPAGES=NLINES/LNPG:PRINT:PRINT "Your list will be "NPAGES" pages long. If you don't like that, you may revise:":PRINT
1440 PRINT "1: typeface; 2: format; 3: start number; 4: end number; 5: nothing; <Esc>: quit":PRINT
1450 PRINT "Please press the key of your choice (1-5 or <Esc>).":PRINT
1460 REVISE$=INKEY$:IF REVISE$=""THEN 1460 ELSE IF REVISE$=CHR$(27) THEN 1760 ELSE REVISE=VAL(REVISE$)
1470 IF REVISE<1 OR REVISE>5 THEN PRINT "Please press an integer from 1 to 5 or <Esc>.":GOTO 1460 ELSE IF REVISE=5 THEN 1500
1480 IF REVISE=1 THEN PRINT "typeface was "TYPEFACE:PRINT:ELSE IF REVISE=2 THEN PRINT "format was "CHR$(34)SNFORM$CHR$(34):PRINT:ELSE IF REVISE=3 THEN PRINT "start number was "STARTNUM:PRINT:ELSE IF REVISE=4 THEN PRINT "end number was"ENDNUM:PRINT
1490 GOTO 1210
1500 PRINT "You may have a heading of up to 50 characters on each page."
1510 IF LEN(HEADING$)>0 THEN PRINT "Present heading:":PRINT HEADING$ ELSE PRINT
1520 INPUT "Heading";HEADING$
1530 IF LEN(HEADING$)>50 THEN PRINT "Too long. Try again.":GOTO 1500
1540 PRINT:PRINT "Printer ready?";
1550 X$=INKEY$:IF X$="" THEN 1550 ELSE IF X$=CHR$(27) THEN 1760 ELSE PRINT " "X$:PRINT:IF X$="y" OR X$="Y" THEN GOTO 1580
1560 IF X$="N" OR X$="n" THEN PRINT "Please press Y when ready or press <Esc> to quit.":PRINT:GOTO 1550
1570 PRINT "Please press Y or N or press <Esc> to quit.":GOTO 1540
1580 LPRINT CHR$(27)"@"CHR$(27)"C"CHR$(0)CHR$(11);:WIDTH "LPT1:",255'clear and set 11in form
1590 PAGENUM=1:IF NPAGES>1 THEN NLINES=LNPG
1600 Z$=HEADING$:W$="PAGE":V$=SPACE$(50-LEN(HEADING$)):U=INT(NPAGES)+1:IF NPAGES=INT(NPAGES) THEN U=NPAGES
1610 LPRINT CHR$(27)CHR$(70)CHR$(27)CHR$(84)CHR$(14)CHR$(15)CHR$(27)CHR$(71)"  " CHR$(27)CHR$(45)CHR$(1) Z$ CHR$(27)CHR$(45)CHR$(0) V$ W$ PAGENUM "OF" U CHR$(18)CHR$(27)CHR$(72)
1620 GOSUB 1780'setup printer
1630 PRINT "Pressing <Esc> will stop the program at end of line being printed.":PRINT
1640 LPRINT
1650 FOR N=0 TO NLINES-1
1660 LPRINT SPC(CHRLN-LEN(SNFORM$)*NCOLS-1);
1670 FOR M=0 TO NCOLS-1
1680 LPRINT USING SNFORM$;STARTNUM+N+M*NLINES;
1690 X$=INKEY$:IF X$="" THEN 1700 ELSE IF X$=CHR$(27) THEN 1770 ELSE 1690
1700 NEXT M
1710 LPRINT
1720 NEXT N
1730 STARTNUM=STARTNUM+NCOLS*NLINES:PAGENUM=PAGENUM+1
1740 NPAGES=NPAGES-1:IF NPAGES<=0 THEN 1760 ELSE IF NPAGES<=1 THEN NLINES=INT((ENDNUM-STARTNUM)/NCOLS)+1
1750 LPRINT CHR$(12);:GOTO 1610
1760 ON ERROR GOTO 0:CLS:KEY ON:END
1770 PRINT "You may revise or quit. Your options are:":PRINT:GOTO 1440
1780 ON TYPEFACE GOTO 1790,1800,1810,1820,1830
1790 LPRINT CHR$(27)CHR$(69)CHR$(27)CHR$(87)CHR$(1)CHR$(27)CHR$(65)CHR$(18);:RETURN'double width
1800 LPRINT CHR$(15)CHR$(27)CHR$(87)CHR$(1)CHR$(27)CHR$(65)CHR$(14);:RETURN'double width compressed
1810 LPRINT CHR$(27)CHR$(69);:WIDTH "LPT1:",80:RETURN'normal emphasized
1820 LPRINT CHR$(15)CHR$(27)CHR$(65)CHR$(9);:RETURN' compressed
1830 LPRINT CHR$(15)CHR$(27)"S"CHR$(INT(VAL(RIGHT$(TIME$,1))/5))CHR$(27)"A"CHR$(6);:RETURN'TINYPRNT
1840 IF ERR=5 AND ERL=1680 THEN PRINT "Your format is not satisfactory. Please revise it. Present format: "CHR$(34)SNFORM$CHR$(34):REVISE=2:RESUME 1210
1850 IF ERR=27 AND ERL=1580 THEN PRINT "Your printer is off or empty. Program will continue when problem is fixed.":RESUME
1860 IF ERR=24 THEN PRINT "Waiting for printer.":RESUME
1870 IF ERR=25 THEN PRINT "Printer off line or something. Waiting!":RESUME
1880 ON ERROR GOTO 0
1890 '    SAVE"s-nbingo",a
```

## SHIFTS.BAS

```bas
60000  '*******************************************
60010  '* Test shift key status by Lewis Rigdon   *
60020  '*_________________________________________*
60030  '*  These subroutines can be the object of *
60040  '*  a gosub to set or reset the num lock or*
60050  '*  the caps lock keys or to test their    *
60060  '*  statu.                                 *
60070  '*******************************************
60080 REM ***** PEEKS AND POKES FOR SHIFT LOCK KEYS *****
60090 DEF SEG=&H40:POKE &H17,(PEEK(&H17) AND &HFFBF):RETURN ' CAPS LOCK OFF
60100 DEF SEG=&H40:POKE &H17,(PEEK(&H17) OR  &H40):RETURN ' CAPS LOCK ON
60110 DEF SEG=&H40:POKE &H17,(PEEK(&H17) AND &HFFDF):RETURN ' NUM  LOCK OFF
60120 DEF SEG=&H40:POKE &H17,(PEEK(&H17) OR  &H20):RETURN ' NUM  LOCK ON
60130 REM ***** TEST FOR STATUS OF SHIFTS *****
60140 IF (PEEK(&H17) AND &H40) THEN PRINT"CAPS   LOCK ON" ELSE                               PRINT "CAPS   LOCK OFF"
60150 IF (PEEK(&H17) AND &H20) THEN PRINT"NUM    LOCK ON" ELSE                               PRINT "NUM    LOCK OFF"
60160 IF (PEEK(&H17) AND &H10) THEN PRINT"SCROLL LOCK ON" ELSE                               PRINT "SCROLL LOCK OFF"
```

## TEMPCONV.BAS

```bas
100 CLS
110 A$=STRING$(80,205)
120 PRINT A$
130 PRINT TAB(29)"TEMPERATURE CONVERSION"
140 COLOR 23,0,0
150 PRINT :PRINT :PRINT TAB(39)"IPCO"
160 COLOR 7,0,0
170 PRINT :PRINT :PRINT TAB(25)"PERSONAL COMPUTER OWNERS GROUP"
180 PRINT :PRINT :PRINT TAB(19)"p.o. box 10426, pittsburgh, pennsylvania 15234"
190 PRINT A$
200 PRINT :PRINT :PRINT :PRINT :PRINT
210 PRINT TAB(28)"PRESS ANY KEY TO CONTINUE"
220 A$=INKEY$:IF A$="" THEN 220
230 CLS
240 REM JANUARY 2, 1982.
250 CLS:WIDTH 80
260 KEY OFF
270 PRINT "****************************"
280 PRINT "***TEMPERATURE CONVERSION***"
290 PRINT "****************************":PRINT
300 PRINT "WHAT IS THE TEMPERATURE ":BEEP
310 PRINT "YOU WISH TO CONVERT";
320 INPUT T
330 PRINT "IN WHAT SCALE WAS THAT RECORDED?":BEEP
340 PRINT "ENTER:"
350 PRINT "1 FOR FARENHEIT"
360 PRINT "2 FOR CELSIUS"
370 PRINT "3 FOR REAUMUR"
380 PRINT "4 FOR KELVIN"
390 PRINT "5 FOR RANKINE"
400 INPUT S
410 PRINT
420 S=INT(S)
430 IF S<1 THEN 330
440 IF S>5 THEN 330
450 ON S GOTO 460,500,540,580,620
460 IF T<-459.58 THEN 750
470 T1=T
480 PRINT T;" DEGREES FAHRENHEIT = ":PRINT
490 GOTO 670
500 IF T<-273.1 THEN 750
510 T1=32+T*1.8
520 PRINT T;" DEGREES CELSIUS = ":PRINT
530 GOTO 650
540 IF T<-218.48 THEN 750
550 T1=32+T*2.25
560 PRINT T;" DEGREES REAUMUR = ":PRINT
570 GOTO 650
580 IF T<0 THEN 750
590 T1=32+1.8*(T-273.1)
600 PRINT T," DEGREES KELVIN = ":PRINT
610 GOTO 650
620 IF T<0 THEN 750
630 T1=T-459.58
640 PRINT T;" DEGREES RANKINE = ":PRINT
650 PRINT T1," DEGREES FAHRENHEIT"
660 IF S=2 THEN 690
670 PRINT 5*(T1-32)/9," DEGREES CELSIUS"
680 IF S=3 THEN 710
690 PRINT 4*(T1-32)/9," DEGREES REAUMUR"
700 IF S=4 THEN 730
710 PRINT 5*(T1-32)/9+273.1," DEGREES KELVIN"
720 IF S=5 THEN 780
730 PRINT T1+459.58," DEGREES RANKINE"
740 GOTO 780
750 PRINT "TEMPERATURE YOU ENTERED DOES NOT":BEEP
760 PRINT "EXIST!  PLEASE ENTER A NEW ONE."
770 GOTO 300
780 PRINT :BEEP :PRINT "ANOTHER CONVERSION (Y/N)";:INPUT A$ :PRINT
790 IF A$="Y" THEN 300
800 IF A$="y" THEN 300
810 IF A$="N" THEN 840
820 IF A$="n" THEN 840
830 GOTO 780
840 CLS: END
```

## WINDCHIL.BAS

```bas
100 CLS
110 A$=STRING$(80,205)
120 PRINT A$
130 PRINT TAB(25)"WIND CHILL FACTOR  7006-A.BAS "
140 COLOR 23,0,0
150 PRINT :PRINT :PRINT TAB(38)"IPCO"
160 COLOR 7,0,0
170 PRINT :PRINT :PRINT TAB(29)"INTERNATIONAL PC OWNERS"
180 PRINT :PRINT :PRINT TAB(17)"p.o. box 10426, pittsburgh, pennsylvania 15234"
190 PRINT A$
200 PRINT :PRINT :PRINT :PRINT :PRINT
210 PRINT TAB(28)"PRESS ANY KEY TO CONTINUE"
220 A$=INKEY$:IF A$="" THEN 220
230 CLS
240 CLS
250 INPUT "WHAT IS THE TEMPERATURE";T:PRINT
260 INPUT "WHAT IS THE WIND VELOCITY";V:PRINT
270 IF V<4 THEN V=4:  REM WIND VELOCITY BELOW 4 MPH AND ABOVE 45 MPH HAVE                                 VERY LITTLE EFFECT ON THE CHILL FACTOR
280 C=((10.45 + (6.686112 * SQR(V)) - (.447041 * V))/22.034 * (T-91.4)) +91.4
290 PRINT
300 CLS
310 LOCATE 16,10:PRINT USING"AT A TEMPERATURE OF ### F AND A WIND VELOCITY                                     OF ## MPH THE WIND CHILL FACTOR IS  ###.####";T,V,C
320 LOCATE 20,30:INPUT "DO YOU WANT ANOTHER COMPUTATION (Y OR N)";D$
330 PRINT
340 IF D$="Y" THEN 250
350 PRINT "CORE TEMP";:PRINT TAB(13)"SYMTPMS";:PRINT TAB(49)"BRAIN & MUSCLE IMPAIRMENT"
360 PRINT STRING$(80,"*")
370 FOR X = 1 TO 13
380 READ A$,B$,C$
390 DATA 98 TO 96F,INTENSE UNCONTROLLABLE SHIVERING,ABILITY TO PERFORM COMPLEX TASKS,,,IS DECREASED,95 TO 91F,VIOLENT SHIVERING PERSISTS,DIFFICULTY IN SPEAKING-SLUGGISH,,,THINKING-AMNESIA,90 TO 86F,SHIVERING STOPS-REPLACED
400 DATA MUSCLE COORDINATION AFFECTED,,BY STRONG MUSCLE,PRODUCING ERRATIC OR JERRKY,,RIGIDITY- EXPOSED SKIN IS BLUE,MOVEMENTS-THINKING LESS CLEAR,,OR PUFFY,GENERAL COMPREHENSION DULLED BUT,,,VICTIM MAY APPEAR RATIONAL
410 DATA 85 TO 81F,MUSCLE RIGIDITY- LOWERED PULSE,IRRATIONAL-LOSS OF CONSCIOUSNESS,,AND RESPIRATON,STUPOR,80 TO 78F,UNCONSCIOUSNESS-ERRATIC HEARTBEAT,
420 DATA BELOW 78F,DEATH,
430 PRINT USING"\         \ \                                 \ \                              \";A$,B$,C$;
440 NEXT X
```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0073

     Volume in drive A has no label
     Directory of A:\

    TEMPCONV BAS      2176   5-28-82
    MPG-CAL  BAS      1408   1-01-80  12:39a
    %-DIFF   BAS      4864  11-20-82   3:19p
    MOLY-PAY BAS      8704   1-10-83  11:35p
    SERIALNO BAS      7552  11-20-82   2:19p
    GROWTH   BAS      4352   4-01-83  11:01p
    WINDCHIL BAS      2048   8-28-82   5:29p
    SHIP              1408  12-09-82  12:39p
    JET                512  12-09-82  12:42p
    CUBE               256  12-09-82  12:44p
    PYRAMID            256  12-09-82   1:39p
    3-D-ROT  BAS     12672   1-20-08  11:12p
    3D       GRF      3712   2-12-83  11:29a
    3D       DOC      1792   1-01-83   2:01p
    3D       EXE     25728   1-18-83  10:59p
    3DTEST1  PLT     16512   1-01-83   1:41p
    3DTEST2  PLT     16512   1-01-83   3:41p
    PCFILECH BAS     10880   4-23-83   2:34p
    CLERK    BAS     13568   6-26-83   7:24p
    SHIFTS   BAS      1280   9-22-82  12:47a
    CRC      TXT      1545  11-09-84  11:37a
    CRCK4    COM      1536  10-21-82   7:54p
           22 file(s)     139273 bytes
                           15872 bytes free
