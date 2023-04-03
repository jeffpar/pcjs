---
layout: page
title: "PC-SIG Library Disk #633"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0633/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0633"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "DRAWPLUS AND SECRET QUEST"

    SECRET QUEST 2010 is a graphic/text mystery that takes place aboard a
    starship in orbit around the Earth.  You and a friend have been on a
    trip through space and are, just now, returning home.  You wake up on
    the morning of your return and find that your friend is missing! You
    start searching the ship and begin to discover things in the process.
    Be careful!  There are many traps for the unwary.
    
    A Graphics/Drawing program written especially for the PC and PCjr.
    
    Pull-down menus and a joystick control the various functions which
    include: Line, Circle, Paint, View, Cut-and-Paste/Delete, Fatbrush and
    Airbrush with varying color-width-density.  Source code is included.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## DRAWPLUS.BAS

```bas
0 OPO=1:PO=1:X=154:Y=94:CO=3:PCO=15:BS=1:STRIG ON:GOSUB 60000
1 DIM TIL$(16)
2 TIL$(1)=CHR$(&H11):TIL$(2)=CHR$(&H22)
3 TIL$(3)=CHR$(&H33):TIL$(4)=CHR$(&H44)
4 TIL$(5)=CHR$(&H55):TIL$(6)=CHR$(&H66)
5 TIL$(7)=CHR$(&H77):TIL$(8)=CHR$(&H88)
6 TIL$(9)=CHR$(&H99):TIL$(10)=CHR$(&HAA)
7 TIL$(11)=CHR$(&HBB):TIL$(12)=CHR$(&HCC)
8 TIL$(13)=CHR$(&HDD):TIL$(14)=CHR$(&HEE)
9 TIL$(15)=CHR$(&HFF)
10 SCREEN 1:CLS
20 FOR I=1 TO 16:LINE((I*19-19)+8,24*8)-((I*19)+8,199),3,B:NEXT I
25 FOR I=1 TO 15:PAINT(I*19+9,24*8+1),TIL$(I):NEXT I
30 FOR I=1 TO 16:LINE((I*19-19)+8,24*8)-((I*19)+8,199),0,B:NEXT I
50 PRINT"  Tools    Screen   Special           ☺"
55 PRINT
60 PRINT"  DRAW     UNDO     LINE COLOR
70 PRINT"  FATBRUSH CLEAR    PAINT COLOR
80 PRINT"  AIRBRUSH LOAD     CUT+PASTE
90 PRINT"  CIRCLE   SAVE     CUT+OVERLAP
100 PRINT"  BOX      INVERSE  CUT+REMOVE"
110 PRINT"  LINE     VIEW     Cyn/Mag/Wht
119 PRINT"  PAINT    QUIT     Grn/Red/Brn     ":PRINT"  ASCII             BRUSH SIZE"
120 PRINT"                    Pattern RGB       ":PRINT"                    Pattern CC"
121 LINE(2*8-3,2*8-6)-(10*8+1,11*8-4),3,B
122 LINE(11*8-3,2*8-6)-(19*8+1,10*8-4),3,B
123 LINE(20*8-3,2*8-6)-(31*8+1,13*8-4),3,B
124 DIM BX1(500),BX2(400),BX3(600)
130 GET(2*8-4,2*8-7)-(10*8+2,11*8-3),BX1
131 GET(11*8-4,2*8-7)-(19*8+2,10*8-3),BX2
132 GET(20*8-4,2*8-7)-(31*8+2,13*8-3),BX3
133 PUT(12,9),BX1:PUT(84,9),BX2:PUT(156,9),BX3
150 LINE(7,8)-(7,200-8),3,,&HAAAA:LINE-(320-8,200-8),3,,&HAAAA:LINE-(320-8,8),3,,&HAAAA
160 DIM ROW1(200)
161 GET(7,0)-(312,7),ROW1:PUT(7,0),ROW1,PRESET
170 DIM SCRN(4048),UNDO(4048)
180 GET(8,8)-(311,191),SCRN:GET(8,8)-(311,191),UNDO
185 DIM CU(100)
190 LINE(1,1)-(7,7),3:LINE(7,7)-(6,3),3,B:LINE(6,6)-(3,6),3:LINE(7,7)-(2,1),3:LINE(7,7)-(6,7),0:LINE(3,6)-(6,3),3
191 GET(1,1)-(6,6),CU:PUT(1,1),CU
200 REM SELECT BOX ROUTINE
201 ACTIVATE=0:PUT(7,0),ROW1,PRESET
210 IF PO=1 THEN LOCATE 1,3:PRINT"Tools   "
211 IF PO=2 THEN LOCATE 1,12:PRINT"Screen  "
212 IF PO=3 THEN LOCATE 1,21:PRINT"Special    "
220 OPO=PO
230 JX=STICK(0):JY=STICK(1)
240 IF JX<CX-20 THEN PO=PO-1
241 IF JX>CX+20 THEN PO=PO+1
242 IF PO<1 THEN PO=3
243 IF PO>3 THEN PO=1
250 IF PO<>OPO THEN 200
255 IF STRIG(1)=-1 THEN ON PO GOTO 300,400,500
260 GOTO 220
300 PO=0:REM BOX TOOLS
301 PUT(7,0),ROW1,PRESET:PUT(12,9),BX1,PRESET
302 IF PO=0 THEN LOCATE 1,3:PRINT"Tools   "
310 IF PO=1 THEN LOCATE 3,3:PRINT"DRAW    "
311 IF PO=2 THEN LOCATE 4,3:PRINT"FATBRUSH"
312 IF PO=3 THEN LOCATE 5,3:PRINT"AIRBRUSH"
313 IF PO=4 THEN LOCATE 6,3:PRINT"CIRCLE  "
314 IF PO=5 THEN LOCATE 7,3:PRINT"BOX     "
315 IF PO=6 THEN LOCATE 8,3:PRINT"LINE    "
316 IF PO=7 THEN LOCATE 9,3:PRINT"PAINT   "
317 IF PO=8 THEN LOCATE 10,3:PRINT"ASCII   "
320 OPO=PO
330 JX=STICK(0):JY=STICK(1)
340 IF JY<CY-20 THEN PO=PO-1
341 IF JY>CY+20 THEN PO=PO+1
342 IF PO<0 THEN PO=8
343 IF PO>8 THEN PO=0
350 IF PO<>OPO THEN 301
355 IF STRIG(1)<>-1 THEN 1000
360 GOTO 320
400 PO=0:REM BOX SCREEN
401 PUT(7,0),ROW1,PRESET:PUT(84,9),BX2,PRESET
402 IF PO=0 THEN LOCATE 1,12:PRINT"Screen  "
410 IF PO=1 THEN LOCATE 3,12:PRINT"UNDO    "
411 IF PO=2 THEN LOCATE 4,12:PRINT"CLEAR   "
412 IF PO=3 THEN LOCATE 5,12:PRINT"LOAD    "
413 IF PO=4 THEN LOCATE 6,12:PRINT"SAVE    "
414 IF PO=5 THEN LOCATE 7,12:PRINT"INVERSE "
415 IF PO=6 THEN LOCATE 8,12:PRINT"VIEW    "
416 IF PO=7 THEN LOCATE 9,12:PRINT"QUIT    "
420 OPO=PO
430 JX=STICK(0):JY=STICK(1)
440 IF JY<CY-20 THEN PO=PO-1
441 IF JY>CY+20 THEN PO=PO+1
442 IF PO<0 THEN PO=7
443 IF PO>7 THEN PO=0
450 IF PO<>OPO THEN 401
455 IF STRIG(1)<>-1 THEN 1020
460 GOTO 420
500 PO=0:REM BOX SPECIAL
501 PUT(7,0),ROW1,PRESET:PUT(156,9),BX3,PRESET
502 IF PO=0 THEN LOCATE 1,21:PRINT"Special    "
510 IF PO=1 THEN LOCATE 3,21:PRINT"LINE COLOR "
511 IF PO=2 THEN LOCATE 4,21:PRINT"PAINT COLOR"
512 IF PO=3 THEN LOCATE 5,21:PRINT"CUT+PASTE  "
513 IF PO=4 THEN LOCATE 6,21:PRINT"CUT+OVERLAP"
514 IF PO=5 THEN LOCATE 7,21:PRINT"CUT+REMOVE "
515 IF PO=6 THEN LOCATE 8,21:PRINT"Cyn/Mag/Wht"
516 IF PO=7 THEN LOCATE 9,21:PRINT"Grn/Red/Brn"
517 IF PO=8 THEN LOCATE 10,21:PRINT"BRUSH SIZE "
518 IF PO=9 THEN LOCATE 11,21:PRINT"Pattern RGB "
519 IF PO=10 THEN LOCATE 12,21:PRINT"Pattern CC  "
520 OPO=PO
530 JX=STICK(0):JY=STICK(1)
540 IF JY<CY-20 THEN PO=PO-1
541 IF JY>CY+20 THEN PO=PO+1
542 IF PO<0 THEN PO=10
543 IF PO>10 THEN PO=0
550 IF PO<>OPO THEN 501
555 IF STRIG(1)<>-1 THEN 1050
560 GOTO 520
1000 REM WHAT TOOL WAS SELECTED
1005 IF PO=0 THEN PO=1:PUT(8,8),SCRN,PSET:GOTO 200
1010 IF PO=1 THEN TOOL=1
1011 IF PO=2 THEN TOOL=2
1012 IF PO=3 THEN TOOL=3
1013 IF PO=4 THEN TOOL=4
1014 IF PO=5 THEN TOOL=5
1015 IF PO=6 THEN TOOL=6
1016 IF PO=7 THEN TOOL=7
1017 IF PO=8 THEN GOTO 4000
1018 PUT(8,8),SCRN,PSET
1019 GOTO 10000
1020 REM WHAT TOOL WAS SELECTED
1025 IF PO=0 THEN PO=2:PUT(8,8),SCRN,PSET:GOTO 200
1030 IF PO=1 THEN PUT(8,8),UNDO,PSET:GOTO 10000
1031 IF PO=2 THEN LINE(8,8)-(311,191),0,BF:GOTO 10000
1032 IF PO=3 THEN PUT(8,8),SCRN,PSET:GET(0,0)-(319,199),UNDO:PUT(0,0),UNDO:PUT(8,8),SCRN,PSET:GOTO 3000
1033 IF PO=4 THEN PUT(8,8),SCRN,PSET:GET(0,0)-(319,199),UNDO:PUT(0,0),UNDO:PUT(8,8),SCRN,PSET:GOTO 3100
1034 IF PO=5 THEN PUT(8,8),SCRN,PRESET:GOTO 10000
1035 IF PO=6 THEN PUT(8,8),SCRN,PSET:GET(0,0)-(319,199),UNDO:PUT(0,0),UNDO:PUT(8,8),SCRN,PSET:GOTO 2000
1036 IF PO=7 THEN SCREEN 0,1:CLS:END
1037 PUT(8,8),SCRN,PSET
1038 GOTO 10000
1050 REM WHAT TOOL WAS SELECTED
1055 IF PO=0 THEN PO=3:PUT(8,8),SCRN,PSET:GOTO 200
1060 IF PO=1 THEN 2100
1061 IF PO=2 THEN 2200
1062 IF PO=3 THEN TOOL=8
1063 IF PO=4 THEN TOOL=9
1064 IF PO=5 THEN TOOL=10
1065 IF PO=6 THEN COLOR ,1
1066 IF PO=7 THEN COLOR ,2
1067 IF PO=8 THEN LOCATE 10,21:PRINT"           ":LOCATE 10,21:LINE INPUT A$:BS=VAL(A$)
1068 IF PO=9 THEN PUT(8,8),SCRN,PSET:GOTO 5100
1069 IF PO=10 THEN PUT(8,8),SCRN,PSET:GOTO 5000
1070 PUT(8,8),SCRN,PSET
1080 GOTO 10000
2000 IF STRIG(5)=-1 THEN PUT(0,0),UNDO,PSET:GOTO 10000
2010 GOTO 2000
2100 PO=0:P=0
2110 OPO=PO:JX=STICK(0):JY=STICK(1)
2111 LINE(7,200-8)-(320-8,200-8),3,,&HAAAA
2112 IF STRIG(1)=-1 THEN LINE((OPO*19)-19+8,24*8)-((OPO*19)+8,199),0,B:LINE(7,200-8)-(320-8,200-8),3,,&HAAAA:PUT(8,8),SCRN,PSET:GOTO 10000
2120 IF JX<CX-20 THEN P=P-1
2121 IF JX>CX+20 THEN P=P+1
2122 IF P<0 THEN P=3
2123 IF P>3 THEN P=0
2130 IF P=0 THEN PO=1:LINE((OPO*19)-19+8,24*8)-((OPO*19)+8,199),0,B:LINE((PO*19)-19+8,24*8)-((PO*19)+8,199),3,B:CO=0
2140 IF P=1 THEN PO=6:LINE((OPO*19)-19+8,24*8)-((OPO*19)+8,199),0,B:LINE((PO*19)-19+8,24*8)-((PO*19)+8,199),3,B:CO=1
2150 IF P=2 THEN PO=11:LINE((OPO*19)-19+8,24*8)-((OPO*19)+8,199),0,B:LINE((PO*19)-19+8,24*8)-((PO*19)+8,199),3,B:CO=2
2160 IF P=3 THEN PO=16:LINE((OPO*19)-19+8,24*8)-((OPO*19)+8,199),0,B:LINE((PO*19)-19+8,24*8)-((PO*19)+8,199),3,B:CO=3
2170 GOTO 2110
2200 PO=1
2210 OPO=PO:JX=STICK(0):JY=STICK(1)
2211 LINE(7,200-8)-(320-8,200-8),3,,&HAAAA
2212 IF STRIG(1)=-1 THEN LINE((OPO*19)-19+8,24*8)-((OPO*19)+8,199),0,B:LINE(7,200-8)-(320-8,200-8),3,,&HAAAA:PUT(8,8),SCRN,PSET:GOTO 10000
2220 IF JX<CX-20 THEN PO=PO-1
2221 IF JX>CX+20 THEN PO=PO+1
2222 IF PO<1 THEN PO=16
2223 IF PO>16 THEN PO=1
2230 LINE((OPO*19)-19+8,24*8)-((OPO*19)+8,199),0,B:LINE((PO*19)-19+8,24*8)-((PO*19)+8,199),3,B:PCO=PO-1
2270 GOTO 2210
3000 LOCATE 1,1:LINE INPUT "Filename (LOAD):";A$
3001 LOCATE 1,1:PRINT"                                       "
3010 BLOAD A$+".pic"
3030 GET(8,8)-(311,191),SCRN:PUT(0,0),UNDO,PSET:PUT(8,8),SCRN,PSET:GOTO 10000
3100 LOCATE 1,1:LINE INPUT "Filename (SAVE):";A$
3101 LOCATE 1,1:PRINT"                                       "
3110 LOCATE 1,1:SOUND 200,1:LINE INPUT "Are you sure?";B$
3111 IF B$="y" OR B$="Y" THEN LOCATE 1,1:PRINT"                                       "
3112 IF B$="n" OR B$="N" THEN 3130
3120 DEF SEG=&HB800:BSAVE A$+".pic",0,&H4000:DEF SEG
3130 PUT(0,0),UNDO,PSET:GOTO 10000
4000 PUT(8,8),SCRN,PSET
4010 LOCATE 2,2:LINE INPUT A$
4020 GET(8,8)-(311,191),SCRN
4030 GOTO 200
5000 REM paint palette 0
5002 TIL$(1)=CHR$(&H11):TIL$(2)=CHR$(&H22)
5003 TIL$(3)=CHR$(&H33):TIL$(4)=CHR$(&H44)
5004 TIL$(5)=CHR$(&H55):TIL$(6)=CHR$(&H66)
5005 TIL$(7)=CHR$(&H77):TIL$(8)=CHR$(&H88)
5006 TIL$(9)=CHR$(&H99):TIL$(10)=CHR$(&HAA)
5007 TIL$(11)=CHR$(&HBB):TIL$(12)=CHR$(&HCC)
5008 TIL$(13)=CHR$(&HDD):TIL$(14)=CHR$(&HEE)
5009 TIL$(15)=CHR$(&HFF)
5020 LINE(0,192)-(320,200),0,BF:FOR I=1 TO 16:LINE((I*19-19)+8,24*8)-((I*19)+8,199),3,B:NEXT I
5025 FOR I=1 TO 15:PAINT(I*19+9,24*8+1),TIL$(I):NEXT I
5030 FOR I=1 TO 16:LINE((I*19-19)+8,24*8)-((I*19)+8,199),0,B:NEXT I
5050 LINE(7,8)-(7,200-8),3,,&HAAAA:LINE-(320-8,200-8),3,,&HAAAA:LINE-(320-8,8),3,,&HAAAA
5060 GOTO 200
5100 REM paint palette 1
5102 TIL$(1)=CHR$(&H11)+CHR$(&H44):TIL$(2)=CHR$(&H22)+CHR$(&H88)
5103 TIL$(3)=CHR$(&H33)+CHR$(&HCC):TIL$(4)=CHR$(&H44)+CHR$(&H11)
5104 TIL$(5)=CHR$(&H55)+CHR$(&H55):TIL$(6)=CHR$(&H66)+CHR$(&H99)
5105 TIL$(7)=CHR$(&H77)+CHR$(&HDD):TIL$(8)=CHR$(&H88)+CHR$(&H22)
5106 TIL$(9)=CHR$(&H99)+CHR$(&H66):TIL$(10)=CHR$(&HAA)+CHR$(&HAA)
5107 TIL$(11)=CHR$(&HBB)+CHR$(&HEE):TIL$(12)=CHR$(&HCC)+CHR$(&H33)
5108 TIL$(13)=CHR$(&HDD)+CHR$(&H77):TIL$(14)=CHR$(&HEE)+CHR$(&HBB)
5109 TIL$(15)=CHR$(&HFF)
5120 LINE(0,192)-(320,200),0,BF:FOR I=1 TO 16:LINE((I*19-19)+8,24*8)-((I*19)+8,199),3,B:NEXT I
5125 FOR I=1 TO 15:PAINT(I*19+9,24*8+1),TIL$(I):NEXT I
5130 FOR I=1 TO 16:LINE((I*19-19)+8,24*8)-((I*19)+8,199),0,B:NEXT I
5150 LINE(7,8)-(7,200-8),3,,&HAAAA:LINE-(320-8,200-8),3,,&HAAAA:LINE-(320-8,8),3,,&HAAAA
5160 GOTO 200
10000 REM main draw program
10001 GET(8,8)-(311,191),UNDO:PUT(X,Y),CU:PO=1
10010 OX=X:OY=Y:JX=STICK(0):JY=STICK(1)
10011 IF STRIG(5)=-1 AND ACTIVATE<>1 THEN PUT(X,Y),CU:GET(8,8)-(311,191),SCRN:GOTO 200
10020 IF JX<CX-20 THEN X=X-1
10021 IF JX>CX+20 THEN X=X+1
10022 IF JY<CY-20 THEN Y=Y-1
10023 IF JY>CY+20 THEN Y=Y+1
10025 IF X<2 THEN X=2
10026 IF Y<2 THEN Y=2
10027 IF X>305 THEN X=305
10028 IF Y>185 THEN Y=185
10030 IF TOOL=2 OR TOOL=3 THEN IF X>305-BS THEN X=305-BS
10031 IF TOOL=2 OR TOOL=3 THEN IF Y>185-BS THEN Y=185-BS
10040 IF TOOL=8 OR TOOL=9 OR TOOL=10 THEN IF ACTIVATE=3 AND X>305-ACTX THEN X=305-ACTX
10041 IF TOOL=8 OR TOOL=9 OR TOOL=10 THEN IF ACTIVATE=3 AND Y>185-ACTY THEN Y=185-ACTY
10070 PUT(OX,OY),CU
10080 IF STRIG(1)=-1 THEN ON TOOL GOTO 10100,10200,10300,10400,10500,10600,10700,10800,10900,11000
10090 PUT(X,Y),CU
10099 GOTO 10010
10100 PSET(X+6,Y+6),CO
10110 GOTO 10090
10200 LINE(X+6,Y+6)-(X+6+BS,Y+6+BS),CO,BF
10210 GOTO 10090
10300 PSET(X+6+INT(RND(1)*(BS+1)),Y+6+INT(RND(1)*(BS+1))),CO
10310 GOTO 10090
10400 IF ACTIVATE=0 THEN ACTIVATE=1:GOTO 10450
10401 ACTIVATE=0
10410 SOUND 200,1:PUT(FIRSTX,FIRSTY),CU
10420 IF FIRSTX<>X THEN CIRCLE(FIRSTX+6,FIRSTY+6),ABS(FIRSTX-X),CO,,,1/1
10430 IF FIRSTY<>Y THEN CIRCLE(FIRSTX+6,FIRSTY+6),ABS(FIRSTY-Y),CO,,,1/1
10449 GOTO 10090
10450 SOUND 200,1:PUT(X,Y),CU
10451 FIRSTX=X:FIRSTY=Y
10460 GOTO 10090
10500 IF ACTIVATE=0 THEN ACTIVATE=1:GOTO 10550
10501 ACTIVATE=0
10510 SOUND 200,1:PUT(FIRSTX,FIRSTY),CU
10520 LINE(FIRSTX+6,FIRSTY+6)-(X+6,Y+6),CO,B
10549 GOTO 10090
10550 SOUND 200,1:PUT(X,Y),CU
10551 FIRSTX=X:FIRSTY=Y
10560 GOTO 10090
10600 IF ACTIVATE=0 THEN ACTIVATE=1:GOTO 10650
10601 ACTIVATE=0
10610 SOUND 200,1:PUT(FIRSTX,FIRSTY),CU
10620 LINE(FIRSTX+6,FIRSTY+6)-(X+6,Y+6),CO
10649 GOTO 10090
10650 SOUND 200,1:PUT(X,Y),CU
10651 FIRSTX=X:FIRSTY=Y
10660 GOTO 10090
10700 IF PCO=0 THEN PAINT(X+6,Y+6),0,CO
10710 IF PCO>0 THEN PAINT(X+6,Y+6),TIL$(PCO),CO
10720 GOTO 10090
10800 IF ACTIVATE=0 THEN ACTIVATE=1:GOTO 10820
10801 IF ACTIVATE=1 THEN ACTIVATE=2:GOTO 10860
10802 ACTIVATE=3
10810 PUT(X+6,Y+6),SCRN,PSET
10811 GOTO 10090
10820 SOUND 200,1:PUT(X,Y),CU
10821 FIRSTX=X:FIRSTY=Y
10830 GOTO 10090
10860 SOUND 200,1:PUT(FIRSTX,FIRSTY),CU
10861 GET(FIRSTX+6,FIRSTY+6)-(X+6,Y+6),SCRN
10862 ACTX=ABS(X-FIRSTX):ACTY=ABS(Y-FIRSTY)
10863 X=FIRSTX:Y=FIRSTY:GOTO 10090
10900 IF ACTIVATE=0 THEN ACTIVATE=1:GOTO 10920
10901 IF ACTIVATE=1 THEN ACTIVATE=2:GOTO 10960
10902 ACTIVATE=3
10910 PUT(X+6,Y+6),SCRN
10911 GOTO 10090
10920 SOUND 200,1:PUT(X,Y),CU
10921 FIRSTX=X:FIRSTY=Y
10930 GOTO 10090
10960 SOUND 200,1:PUT(FIRSTX,FIRSTY),CU
10961 GET(FIRSTX+6,FIRSTY+6)-(X+6,Y+6),SCRN
10962 ACTX=ABS(X-FIRSTX):ACTY=ABS(Y-FIRSTY)
10963 X=FIRSTX:Y=FIRSTY:GOTO 10090
11000 IF ACTIVATE=0 THEN ACTIVATE=1:GOTO 11020
11001 IF ACTIVATE=1 THEN ACTIVATE=2:GOTO 11060
11002 ACTIVATE=3
11010 SOUND 200,1:PUT(FIRSTX+6,FIRSTY+6),SCRN:ACTIVATE=0
11011 GOTO 10090
11020 SOUND 200,1:PUT(X,Y),CU
11021 FIRSTX=X:FIRSTY=Y
11030 GOTO 10090
11060 SOUND 200,1:PUT(FIRSTX,FIRSTY),CU
11061 GET(FIRSTX+6,FIRSTY+6)-(X+6,Y+6),SCRN
11062 ACTX=ABS(X-FIRSTX):ACTY=ABS(Y-FIRSTY)
11063 X=FIRSTX:Y=FIRSTY:GOTO 10090
60000 SCREEN 0,1:COLOR 0,0,8:WIDTH 40:KEY OFF:CLS
60010 COLOR 4:LOCATE 4,INT((40-14)/2):PRINT"Eric Iwasaki's"
60020 COLOR 12:LOCATE 7,INT((40-9)/2):PRINT"Draw Plus"
60030 COLOR 9:LOCATE 10,INT((40-26)/2):PRINT"For IBM Personal Computers"
60034 COLOR 20:LOCATE 20,INT((40-34)/2):PRINT"                         RED BUTTON"
60035 COLOR 17:LOCATE 20,INT((40-34)/2):PRINT"Center jostick and press"
60036 COLOR ,,RND(1)*9:CX=STICK(0):CY=STICK(1)
60040 IF STRIG(1)=-1 THEN RETURN
60050 FOR I=1 TO 20:NEXT I:GOTO 60036
```

## HELPPLUS.BAS

```bas
10 SCREEN 1
11 CLS:KEY OFF
20 PRINT"****************************************";
30 PRINT"Instructions: Draw Plus
40 PRINT"****************************************";
50 PRINT
60 PRINT"1. Draw Plus terms"
70 PRINT"2. Draw Plus instructions"
81 PRINT"3. Draw Plus program"
83 PRINT"4. Hard Copy of Draw Plus terms and        instructions"
90 LOCATE 22,1:LINE INPUT "Choose a number: #";A$
100 A=VAL(A$)
110 IF A=1 THEN 1000
120 IF A=2 THEN 2000
140 IF A=3 THEN RUN"drawplus"
151 IF A=4 THEN 11000
160 BEEP:GOTO 90
1000 CLS
1010 PRINT"Draw Plus terms: TOOLS box"
1020 PRINT
1030 PRINT"DRAW: pixel by pixel art"
1040 PRINT:PRINT"FATBRUSH: solid square of pixels.  Size"
1050 PRINT"set by BRUSH SIZE."
1060 PRINT:PRINT"AIRBRUSH: random pixel by pixel art "
1070 PRINT"spread in a square area which size is "
1080 PRINT"set by BRUSH SIZE."
1090 PRINT:PRINT"CIRCLE: draws a circle."
1100 PRINT:PRINT"LINE: draws a line between two points."
1110 PRINT:PRINT"BOX: draws a box."
1120 PRINT:PRINT"Note: all above items color is set by"
1130 PRINT"LINE COLOR."
1140 PRINT:PRINT"PAINT: fills in area with border color "
1150 PRINT"set by LINE COLOR and fill color set by"
1160 PRINT"PAINT COLOR."
1170 LOCATE 25,11:PRINT"Press <SPACE BAR>";:LOCATE 1,1
1180 A$=INKEY$:IF A$<>" " THEN 1180
1190 CLS
1200 PRINT"Draw Plus terms: SCREEN box"
1210 PRINT:PRINT"UNDO: restores the screen as it was"
1220 PRINT"before you made any changes."
1240 PRINT:PRINT"LOAD: loads an image from the disk. The"
1250 PRINT"image must have an extention of PIC."
1260 PRINT:PRINT"SAVE: stores an image to the disk.  The"
1270 PRINT"filename will have an extention of PIC."
1290 PRINT:PRINT"CLEAR: clears the screen.  Warning: "
1300 PRINT"once the image is erased, you can't UNDO";
1310 PRINT"it."
1320 PRINT:PRINT"INVERSE: reverses all the colors of the"
1330 PRINT"image.
1340 PRINT:PRINT"VIEW: removes all of the border to "
1350 PRINT"permit the image to fill the screen."
1360 PRINT:PRINT"QUIT: end the program.  Warning:"
1370 PRINT"This program doesn't ask `Are You Sure?'";
1380 LOCATE 25,11:PRINT"Press <SPACE BAR>";:LOCATE 1,1
1390 A$=INKEY$:IF A$<>" " THEN 1380
1395 CLS
1400 PRINT"Draw Plus terms: SPECIAL box"
1410 PRINT:PRINT"LINE COLOR: sets 1 of 4 different colors";
1420 PRINT"PAINT COLOR: sets 1 of 16 different fill";
1430 PRINT"colors."
1440 PRINT:PRINT"CUT+PASTE: grabs an image and puts it"
1450 PRINT"wherever you move it on the screen. PSET";
1460 PRINT"CUT+OVERLAP: grabs an image and overlaps";
1470 PRINT"it where you move it on the screen. XOR"
1480 PRINT"CUT+REMOVE: grabs and removes an image."
1490 PRINT:PRINT"Cyn/Mag/Wht: selects color palette 1"
1500 PRINT"Grn/Red/Brn: selects color palette 2"
1510 PRINT:PRINT"BRUSH SIZE: selects brush size for"
1520 PRINT"FATBRUSH and AIRBRUSH tools.
1530 PRINT:PRINT"Pattern RGB: selects set of paint colors";
1540 PRINT"that look better on RGB monitors."
1550 PRINT"Pattern CC: selects set of paint colors"
1560 PRINT"that look better on Color Composite"
1565 PRINT"monitors."
1570 LOCATE 25,11:PRINT"Press <SPACE BAR>";:LOCATE 1,1
1580 A$=INKEY$:IF A$<>" " THEN 1580
1590 CLS:GOTO 20
2000 CLS
2010 PRINT"Draw Plus instructions: pull-down menus"
2020 PRINT
2030 PRINT"    When the program starts the menu "
2040 PRINT"cursor is already active."
2050 PRINT"Move the joystick to the left or right "
2060 PRINT"to move the cursor.  To view a box with-";
2070 PRINT"out activating anything, hold down the "
2080 PRINT"RED button, don't move the joystick, and";
2090 PRINT"release the button when you want to move";
2100 PRINT"the menu cursor again.
2110 PRINT"    If you want to select anything from"
2120 PRINT"one of the boxes, move the cursor to "
2130 PRINT"that box, hold the RED button down, move";
2140 PRINT"the joystick up or down to move the"
2150 PRINT"cursor, and release the button when you"
2160 PRINT"have reached your choice.  All choices "
2170 PRINT"in the TOOLS and SPECIAL box take you to";
2180 PRINT"the draw screen (except ASCII).  If you"
2190 PRINT"decided not to use a feature in the box,";
2200 PRINT"move the cursor to the box title and "
2210 PRINT"release the button."
2215 LOCATE 25,11:PRINT"Press <SPACE BAR>";:LOCATE 1,1
2216 A$=INKEY$:IF A$<>" " THEN 2216
2217 CLS
2220 PRINT"    If you selected LINE COLOR or PAINT"
2230 PRINT"COLOR then you must move the joystick"
2240 PRINT"left or right to move the cursor and "
2250 PRINT"you must push the RED button to select"
2260 PRINT"the color the cursor is on."
2270 PRINT:PRINT"    Anytime when your on the draw screen";
2280 PRINT"you can return to the menu cursor by"
2290 PRINT"pushing the BLACK button.
2295 LOCATE 25,11:PRINT"Press <SPACE BAR>";:LOCATE 1,1
2300 A$=INKEY$:IF A$<>" " THEN 2300
2310 CLS
2320 PRINT"Draw Plus instructions: draw screen"
2330 PRINT
2340 PRINT"    To activate the selected feature, "
2350 PRINT"you must press the RED button.  The "
2360 PRINT"length and amount of times you must do "
2370 PRINT"so depends on the feature."
2380 PRINT"    For the DRAW, FATBRUSH, and AIRBRUSH";
2390 PRINT"features, you must hold down the RED"
2400 PRINT"button as long as you want the pen down.";
2410 PRINT"    For the LINE feature, you must tap "
2420 PRINT"the RED button once to set the first "
2430 PRINT"point and tap it again to draw the line"
2440 PRINT"to the point that the cursor has been "
2450 PRINT"moved to."
2460 PRINT"    For the BOX feature and CUT features";
2470 PRINT"you must tap the RED button once to plot";
2480 PRINT"one end of the diagnol and tap it again"
2490 PRINT"to plot the box or get the image."
2500 PRINT"In cutting images you must first mark "
2510 PRINT"the upper left corner.  In CUT+PASTE and";
2515 LOCATE 25,11:PRINT"Press <SPACE BAR>";:LOCATE 1,1
2516 A$=INKEY$:IF A$<>" " THEN 2516
2517 CLS
2520 PRINT"the upper left corner.  In CUT+PASTE and";
2521 PRINT"CUT+OVERLAP, the third time you tap the"
2530 PRINT"button activates the feature and you "
2540 PRINT"must hit the BLACK button to stop the"
2550 PRINT"feature.  In CUT+REMOVE, the third tap"
2560 PRINT"removes the image and resets the"
2570 PRINT"feature."
2580 PRINT"    For the CIRCLE feature, tap the RED"
2590 PRINT"button once to mark the center and move"
2600 PRINT"the joystick either horizontal or "
2610 PRINT"vertical until you have a desirable "
2620 PRINT"radius.  Tap the RED button again to "
2630 PRINT"draw the circle."
2670 LOCATE 25,11:PRINT"Press <SPACE BAR>";:LOCATE 1,1
2680 A$=INKEY$:IF A$<>" " THEN 2680
2690 CLS
2700 PRINT"Draw Plus instructions: printing screens";
2710 PRINT
2720 PRINT"Note: the menu cursor must be active for";
2730 PRINT"the following features and it must be"
2740 PRINT"placed on the SCREEN box."
2750 PRINT
2760 PRINT"To print a screen follow the following"
2770 PRINT"instructions:"
2780 PRINT
2785 PRINT"1. SAVE image, go to DOS, and turn on "
2786 PRINT"   the printer."
2790 PRINT"2. Load GRAPHICS.COM from DOS 2.1 disk"
2800 PRINT"3. Load BASICA DRAWPLUS from DOS"
2805 PRINT"   LOAD the image (SCREEN box)"
2810 PRINT"4. Select INVERSE feature (SCREEN box)"
2820 PRINT"5. Select VIEW feature (SCREEN box)"
2830 PRINT"6. Hit <Shift> and the <PrtSc> key"
2840 PRINT"7. When printer stops, hit BLACK button"
2850 PRINT"   to escape from VIEW mode."
2860 PRINT"8. Select INVERSE (SCREEN box) to return";
2870 PRINT"   the image to normal."
2875 LOCATE 25,11:PRINT"Press <SPACE BAR>";:LOCATE 1,1
2880 A$=INKEY$:IF A$<>" " THEN 2880
2890 CLS:GOTO 20
11000 CLS:PRINT"PRINTING...."
11010 LPRINT CHR$(27)CHR$(69)CHR$(27)CHR$(71)"Draw Plus terms: TOOLS box"
11020 LPRINT CHR$(27)CHR$(70)CHR$(27)CHR$(72)
11030 LPRINT"DRAW: pixel by pixel art"
11040 LPRINT:LPRINT"FATBRUSH: solid square of pixels.  Size"
11050 LPRINT"set by BRUSH SIZE."
11060 LPRINT:LPRINT"AIRBRUSH: random pixel by pixel art "
11070 LPRINT"spread in a square area which size is "
11080 LPRINT"set by BRUSH SIZE."
11090 LPRINT:LPRINT"CIRCLE: draws a circle."
11100 LPRINT:LPRINT"LINE: draws a line between two points."
11110 LPRINT:LPRINT"BOX: draws a box."
11120 LPRINT:LPRINT"Note: all above items color is set by"
11130 LPRINT"LINE COLOR."
11140 LPRINT:LPRINT"PAINT: fills in area with border color "
11150 LPRINT"set by LINE COLOR and fill color set by"
11160 LPRINT"PAINT COLOR."
11200 LPRINT:LPRINT CHR$(27)CHR$(69)CHR$(27)CHR$(71)"Draw Plus terms: SCREEN box"
11201 LPRINT CHR$(27)CHR$(70)CHR$(27)CHR$(72)
11210 LPRINT"UNDO: restores the screen as it was"
11220 LPRINT"before you made any changes."
11240 LPRINT:LPRINT"LOAD: loads an image from the disk. The"
11250 LPRINT"image must have an extention of PIC."
11260 LPRINT:LPRINT"SAVE: stores an image to the disk.  The"
11270 LPRINT"filename will have an extention of PIC."
11290 LPRINT:LPRINT"CLEAR: clears the screen.  Warning: "
11300 LPRINT"once the image is erased, you can't UNDO"
11310 LPRINT"it."
11320 LPRINT:LPRINT"INVERSE: reverses all the colors of the"
11330 LPRINT"image.
11340 LPRINT:LPRINT"VIEW: removes all of the border to "
11350 LPRINT"permit the image to fill the screen."
11360 LPRINT:LPRINT"QUIT: end the program.  Warning:"
11370 LPRINT"This program doesn't ask `Are You Sure?'"
11400 LPRINT:LPRINT CHR$(27)CHR$(69)CHR$(27)CHR$(71)"Draw Plus terms: SPECIAL box"
11401 LPRINT CHR$(27)CHR$(70)CHR$(27)CHR$(72)
11410 LPRINT"LINE COLOR: sets 1 of 4 different colors"
11420 LPRINT"PAINT COLOR: sets 1 of 16 different fill"
11430 LPRINT"colors."
11440 LPRINT:LPRINT"CUT+PASTE: grabs an image and puts it"
11450 LPRINT"wherever you move it on the screen. PSET"
11460 LPRINT"CUT+OVERLAP: grabs an image and overlaps"
11470 LPRINT"it where you move it on the screen. XOR"
11480 LPRINT"CUT+REMOVE: grabs and removes an image."
11490 FOR I=1 TO 7:LPRINT:NEXT I
11500 LPRINT:LPRINT"Cyn/Mag/Wht: selects color palette 1"
11501 LPRINT"Grn/Red/Brn: selects color palette 2"
11510 LPRINT:LPRINT"BRUSH SIZE: selects brush size for"
11520 LPRINT"FATBRUSH and AIRBRUSH tools.
11530 LPRINT:LPRINT"Pattern RGB: selects set of paint colors"
11540 LPRINT"that look better on RGB monitors."
11550 LPRINT"Pattern CC: selects set of paint colors"
11560 LPRINT"that look better on Color Composite"
11565 LPRINT"monitors."
11566 FOR I=1 TO 55:LPRINT:NEXT I:REM END PAGE 2
12010 LPRINT CHR$(27)CHR$(69)CHR$(27)CHR$(71)"Draw Plus instructions: pull-down menus"
12011 LPRINT CHR$(27)CHR$(70)CHR$(27)CHR$(72)
12030 LPRINT"    When the program starts the menu "
12040 LPRINT"cursor is already active."
12050 LPRINT"Move the joystick to the left or right "
12060 LPRINT"to move the cursor.  To view a box with-"
12070 LPRINT"out activating anything, hold down the "
12080 LPRINT"RED button, don't move the joystick, and"
12090 LPRINT"release the button when you want to move"
12100 LPRINT"the menu cursor again.
12110 LPRINT"    If you want to select anything from"
12120 LPRINT"one of the boxes, move the cursor to "
12130 LPRINT"that box, hold the RED button down, move"
12140 LPRINT"the joystick up or down to move the"
12150 LPRINT"cursor, and release the button when you"
12160 LPRINT"have reached your choice.  All choices "
12170 LPRINT"in the TOOLS and SPECIAL box take you to"
12180 LPRINT"the draw screen (except ASCII).  If you"
12190 LPRINT"decided not to use a feature in the box,"
12200 LPRINT"move the cursor to the box title and "
12210 LPRINT"release the button."
12220 LPRINT"    If you selected LINE COLOR or PAINT"
12230 LPRINT"COLOR then you must move the joystick"
12240 LPRINT"left or right to move the cursor and "
12250 LPRINT"you must push the RED button to select"
12260 LPRINT"the color the cursor is on."
12270 LPRINT"    Anytime when your on the draw screen"
12280 LPRINT"you can return to the menu cursor by"
12290 LPRINT"pushing the BLACK button.
12320 LPRINT:LPRINT CHR$(27)CHR$(69)CHR$(27)CHR$(71)"Draw Plus instructions: draw screen"
12330 LPRINT CHR$(27)CHR$(70)CHR$(27)CHR$(72)
12340 LPRINT"    To activate the selected feature, "
12350 LPRINT"you must press the RED button.  The "
12360 LPRINT"length and amount of times you must do "
12370 LPRINT"so depends on the feature."
12380 LPRINT"    For the DRAW, FATBRUSH, and AIRBRUSH"
12390 LPRINT"features, you must hold down the RED"
12400 LPRINT"button as long as you want the pen down."
12410 LPRINT"    For the LINE feature, you must tap "
12420 LPRINT"the RED button once to set the first "
12430 LPRINT"point and tap it again to draw the line"
12440 LPRINT"to the point that the cursor has been "
12450 LPRINT"moved to."
12460 LPRINT"    For the BOX feature and CUT features"
12470 LPRINT"you must tap the RED button once to plot"
12480 LPRINT"one end of the diagnol and tap it again"
12490 LPRINT"to plot the box or get the image."
12500 LPRINT"In cutting images you must first mark "
12520 LPRINT"the upper left corner.  In CUT+PASTE and"
12521 LPRINT"CUT+OVERLAP, the third time you tap the"
12530 LPRINT"button activates the feature and you "
12540 LPRINT"must hit the BLACK button to stop the"
12550 LPRINT"feature.  In CUT+REMOVE, the third tap"
12560 LPRINT"removes the image and resets the"
12570 LPRINT"feature."
12580 LPRINT"    For the CIRCLE feature, tap the RED"
12590 LPRINT"button once to mark the center and move"
12600 LPRINT"the joystick either horizontal or "
12610 FOR I=1 TO 7:LPRINT:NEXT I
12620 LPRINT"vertical until you have a desirable "
12621 LPRINT"radius.  Tap the RED button again to "
12630 LPRINT"draw the circle."
12640 LPRINT
12700 LPRINT:LPRINT CHR$(27)CHR$(69)CHR$(27)CHR$(71)"Draw Plus instructions: printing screens"
12710 LPRINT CHR$(27)CHR$(70)CHR$(27)CHR$(72)
12720 LPRINT"Note: the menu cursor must be active for"
12730 LPRINT"the following features and it must be"
12740 LPRINT"placed on the SCREEN box."
12750 LPRINT
12760 LPRINT"To print a screen follow the following"
12770 LPRINT"instructions:"
12780 LPRINT
12785 LPRINT"1. SAVE image, go to DOS, and turn on "
12786 LPRINT"   the printer."
12790 LPRINT"2. Load GRAPHICS.COM from DOS 2.1 disk"
12800 LPRINT"3. Load BASICA DRAWPLUS from DOS"
12805 LPRINT"   LOAD the image (SCREEN box)"
12810 LPRINT"4. Select INVERSE feature (SCREEN box)"
12820 LPRINT"5. Select VIEW feature (SCREEN box)"
12830 LPRINT"6. Hit <Shift> and the <PrtSc> key"
12840 LPRINT"7. When printer stops, hit BLACK button"
12850 LPRINT"   to escape from VIEW mode."
12860 LPRINT"8. Select INVERSE (SCREEN box) to return"
12870 LPRINT"   the image to normal."
12871 FOR I=1 TO 40:LPRINT:NEXT I
12890 CLS:GOTO 20
```

## QUEST.BAS

```bas
0 CLS:LINE INPUT"Make sure CapsLock is active:";A$
1 REM Secret Quest 2010
2 REM By Eric Iwasaki
3 REM 107 Via Pasqual
4 REM Redondo Beach, CA 90277
5 REM All graphics created on DrawPlus
6 REM and then were converted into
7 REM smaller images to conserve memory
9 DIM SCR(1240)
10 ROOM=1
11 DISK=0
12 LAMP=0
13 FOOD=0
14 CODE=0
15 ROOMMATE=0
16 GUN=0
17 BATTERY=0
18 BRIDGE=0
19 SABER=0
20 CARD=0
30 SCREEN 1:CLS
40 BLOAD"title.pic"
50 KEY OFF:LOCATE 25,1:PRINT"             Hit any key>";:LOCATE 1,1
51 A$=INKEY$:IF A$="" THEN 51
60 CLS
70 INPUT"Do you want instructions";A$
80 IF LEFT$(A$,1)="Y" OR LEFT$(A$,1)="y" THEN 90
85 GOTO 191
90 CLS
110 PRINT"     You and your roommate have been "
120 PRINT" traveling through space for several "
130 PRINT" years on a cruise to planet Espion and"
140 PRINT" back to planet Earth."
150 PRINT"     Your cruise is now almost over and"
160 PRINT" your ship, the Voyager, is now orbiting";
170 PRINT" the Earth.  Right now you and your room";
180 PRINT" mate are fast asleep..."
181 PRINT"     All commands are given in 1 or 2"
182 PRINT" word format.  To list all of the "
183 PRINT" commands, type HELP.  Also, type LOOK"
184 PRINT" in each room because sometimes it gives";
185 PRINT" important hints required for survival.":PRINT" HINT: Use it everytime you enter the":PRINT" Tractor Beam Power Core!"
186 PRINT"     At the UPPER-RIGHT corner of the"
187 PRINT" screen, the visible and usable objects"
188 PRINT" are listed.  You can USE usable objects";
189 PRINT" and you can GET visible objects.":PRINT" Be sure to look at them after you LOOK":PRINT" in a room or KILL a creature."
190 PRINT" To exit the ship, use the Transporter.":PRINT:LINE INPUT"              Hit <Return>";A$
191 CLS
192 BLOAD"quarters.pic",VARPTR(SCR(0))
193 PUT(8,8),SCR,PRESET:LOCATE 16,1:PRINT"     You suddenly wake up.  You hear"
194 PLAY"MBT250O5L64AAAAAAGGGFFEC":PRINT" a scream and then a door open.":PRINT
195 LINE INPUT" What's your roommate's name>";ROOMMATE$
196 PLAY"O0CC":PUT(8,8),SCR,PSET
197 PRINT:PRINT" You turn on the lights and realize that";
198 PRINT" ";ROOMMATE$;" is gone!":FOR I=1 TO 2000:NEXT I
199 LINE(0,15*8)-(319,200),0,BF:LOOK=1:ROOM=1:GOTO 203
200 LOOK=1:ROOM=1:BLOAD"QUARTERS.PIC",VARPTR(SCR(0))
201 PUT(8,8),SCR,PSET
203 LOCATE 16,1:PRINT"     You are in your quarters.  There is";
204 PRINT" an exit to the north."
210 IF DISK=0 AND LOOK=0 THEN LOCATE 5,26:PRINT"Coordinate Disk"
211 IF DISK=1 THEN LOCATE 5,26:PRINT"               "
220 GOSUB 10000
230 IF LEFT$(COMMAND$,2)="LO" AND DISK=1 THEN LOOK=0:LOCATE 21,2:PRINT" There is nothing here."
231 IF LEFT$(COMMAND$,2)="LO" AND DISK=0 THEN LOOK=0:LOCATE 21,2:PRINT" You spot a disk on the computer."
239 IF LEFT$(COMMAND$,3)="EAT" OR LEFT$(COMMAND$,3)="DRO" OR LEFT$(COMMAND$,3)="USE" THEN 299
240 IF LEFT$(COMMAND$,1)="N" THEN 300
241 IF LEFT$(COMMAND$,1)="W" OR LEFT$(COMMAND$,1)="E" OR LEFT$(COMMAND$,1)="S" OR LEFT$(COMMAND$,1)="U" OR LEFT$(COMMAND$,1)="D" THEN BEEP:LOCATE 21,2:PRINT"You can't go that way."
299 GOTO 210
300 LOOK=1:ROOM=2:BLOAD"ENDHALL.PIC",VARPTR(SCR(0)):CLS
301 PUT(8,8),SCR,PSET
303 LOCATE 16,1:PRINT"     You are at the end of a short hall-";
304 PRINT" way.  There are exits to the north end"
305 PRINT" and the south end of the hall."
310 REM
320 GOSUB 10000
330 IF LEFT$(COMMAND$,2)="LO" THEN LOOK=0:LOCATE 21,2:PRINT"There's a sign that reads`Ship Central'";
339 IF LEFT$(COMMAND$,3)="EAT" OR LEFT$(COMMAND$,3)="DRO" OR LEFT$(COMMAND$,3)="USE" THEN 399
340 IF LEFT$(COMMAND$,1)="N" THEN 400
341 IF LEFT$(COMMAND$,1)="W" OR LEFT$(COMMAND$,1)="E" OR LEFT$(COMMAND$,1)="U" OR LEFT$(COMMAND$,1)="D" THEN BEEP:LOCATE 21,2:PRINT"You can't go that way."
342 IF LEFT$(COMMAND$,1)="S" THEN CLS:GOTO 200
399 GOTO 310
400 LOOK=1:ROOM=3:BLOAD"CENTER1.PIC",VARPTR(SCR(0)):CLS
401 PUT(8,8),SCR,PSET
403 LOCATE 16,1:PRINT"     You are at the center of the cruise";
404 PRINT" ship.  In the center of the room lies"
405 PRINT" an elevator.  An exit is to the south.";
410 LOCATE 11,26:PRINT"Elevator"
420 GOSUB 10000
430 IF LEFT$(COMMAND$,2)="LO" THEN LOOK=0:LOCATE 21,2:PRINT"There's a sign that reads`Level 1'";
439 IF LEFT$(COMMAND$,3)="EAT" OR LEFT$(COMMAND$,3)="DRO" OR LEFT$(COMMAND$,3)="USE" THEN 499
440 IF LEFT$(COMMAND$,1)="N" OR LEFT$(COMMAND$,1)="W" OR LEFT$(COMMAND$,1)="E" OR LEFT$(COMMAND$,1)="U" OR LEFT$(COMMAND$,1)="D" THEN BEEP:LOCATE 21,2:PRINT"You can't go that way."
441 IF LEFT$(COMMAND$,1)="S" THEN GOTO 300
499 GOTO 410
500 LOOK=1:ROOM=4:BLOAD"CENTER2.PIC",VARPTR(SCR(0)):CLS
501 PUT(8,8),SCR,PSET
503 LOCATE 16,1:PRINT"     You are at the center of the cruise";
504 PRINT" ship.  In the center of the room lies"
505 PRINT" an elevator.  Exits to the N,W, and E.";
510 LOCATE 11,26:PRINT"Elevator"
520 GOSUB 10000
530 IF LEFT$(COMMAND$,2)="LO" THEN LOOK=0:LOCATE 21,2:PRINT"There's a sign that reads`Level 2'";
539 IF LEFT$(COMMAND$,3)="EAT" OR LEFT$(COMMAND$,3)="DRO" OR LEFT$(COMMAND$,3)="USE" THEN 599
540 IF LEFT$(COMMAND$,1)="U" OR LEFT$(COMMAND$,1)="D" OR LEFT$(COMMAND$,1)="S" THEN BEEP:LOCATE 21,2:PRINT"You can't go that way."
541 IF LEFT$(COMMAND$,1)="W" THEN GOTO 2300
542 IF LEFT$(COMMAND$,1)="E" THEN GOTO 600
543 IF LEFT$(COMMAND$,1)="N" THEN GOTO 700
599 GOTO 510
600 LOOK=1:ROOM=5:BLOAD"DININGRM.PIC",VARPTR(SCR(0)):CLS
601 PUT(8,8),SCR,PSET
603 LOCATE 16,1:PRINT"     You are in the dining room.  There"
604 PRINT" is food on a rack.  The only exit is to";
605 PRINT" the west."
610 IF FOOD=0 THEN LOCATE 5,26:PRINT"Food"
611 IF FOOD=1 THEN LOCATE 5,26:PRINT"               "
620 GOSUB 10000
630 IF LEFT$(COMMAND$,2)="LO" AND FOOD>0 THEN LOOK=0:LOCATE 21,2:PRINT" There is nothing here."
631 IF LEFT$(COMMAND$,2)="LO" AND FOOD=0 THEN LOOK=0:LOCATE 21,2:PRINT" There is some food here."
639 IF LEFT$(COMMAND$,3)="EAT" OR LEFT$(COMMAND$,3)="DRO" OR LEFT$(COMMAND$,3)="USE" THEN 699
640 IF LEFT$(COMMAND$,1)="W" THEN 500
641 IF LEFT$(COMMAND$,1)="N" OR LEFT$(COMMAND$,1)="E" OR LEFT$(COMMAND$,1)="S" OR LEFT$(COMMAND$,1)="U" OR LEFT$(COMMAND$,1)="D" THEN BEEP:LOCATE 21,2:PRINT"You can't go that way."
699 GOTO 610
700 LOOK=1:ROOM=6:BLOAD"BATHROOM.PIC",VARPTR(SCR(0)):CLS
701 PUT(8,8),SCR,PSET
703 LOCATE 16,1:PRINT"     You are in the ship's rest room."
704 PRINT" There is a toilet in this room.  There"
705 PRINT" is an exit to the south."
710 LOCATE 11,26:PRINT"Toilet"
720 GOSUB 10000
730 IF LEFT$(COMMAND$,2)="LO" THEN LOOK=0:LOCATE 21,2:PRINT" There is toilet here."
739 IF LEFT$(COMMAND$,3)="EAT" OR LEFT$(COMMAND$,3)="DRO" OR LEFT$(COMMAND$,3)="USE" THEN 799
740 IF LEFT$(COMMAND$,1)="S" THEN 500
741 IF LEFT$(COMMAND$,1)="N" OR LEFT$(COMMAND$,1)="E" OR LEFT$(COMMAND$,1)="W" OR LEFT$(COMMAND$,1)="U" OR LEFT$(COMMAND$,1)="D" THEN BEEP:LOCATE 21,2:PRINT"You can't go that way."
799 GOTO 710
800 LOOK=1:ROOM=7:BLOAD"CENTER3.PIC",VARPTR(SCR(0)):CLS
801 PUT(8,8),SCR,PSET
803 LOCATE 16,1:PRINT"     You are at the center of the cruise";
804 PRINT" ship.  In the center of the room lies"
805 PRINT" an elevator.  Exits in all directions.";
810 LOCATE 11,26:PRINT"Elevator"
820 GOSUB 10000
830 IF LEFT$(COMMAND$,2)="LO" THEN LOOK=0:LOCATE 21,2:PRINT"There's a sign that reads`Level 3'";
839 IF LEFT$(COMMAND$,3)="EAT" OR LEFT$(COMMAND$,3)="DRO" OR LEFT$(COMMAND$,3)="USE" THEN 899
840 IF LEFT$(COMMAND$,1)="U" OR LEFT$(COMMAND$,1)="D" THEN BEEP:LOCATE 21,2:PRINT"You can't go that way."
841 IF LEFT$(COMMAND$,1)="W" THEN GOTO 2000
842 IF LEFT$(COMMAND$,1)="E" THEN GOTO 900
843 IF LEFT$(COMMAND$,1)="S" THEN GOTO 1000
844 IF LEFT$(COMMAND$,1)="N" THEN GOTO 1200
899 GOTO 810
900 LOOK=1:ROOM=8:BLOAD"WEAPONRM.PIC",VARPTR(SCR(0)):CLS
901 PUT(8,8),SCR,PSET
903 LOCATE 16,1:PRINT"     You are in the weapon room.  There"
904 PRINT" are machine guns behind a force field."
905 PRINT" The exit is to the west."
910 IF GUN=0 AND LOOK=0 THEN LOCATE 5,26:PRINT"Laser Gun"
911 IF GUN=1 THEN LOCATE 5,26:PRINT"               "
920 GOSUB 10000
930 IF LEFT$(COMMAND$,2)="LO" AND GUN=1 THEN LOOK=0:LOCATE 21,2:PRINT" There is nothing here."
931 IF LEFT$(COMMAND$,2)="LO" AND GUN=0 THEN LOOK=0:LOCATE 21,2:PRINT" There is a gun attached to the table!"
939 IF LEFT$(COMMAND$,3)="EAT" OR LEFT$(COMMAND$,3)="DRO" OR LEFT$(COMMAND$,3)="USE" THEN 999
940 IF LEFT$(COMMAND$,1)="W" THEN 800
941 IF LEFT$(COMMAND$,1)="N" OR LEFT$(COMMAND$,1)="E" OR LEFT$(COMMAND$,1)="S" OR LEFT$(COMMAND$,1)="U" OR LEFT$(COMMAND$,1)="D" THEN BEEP:LOCATE 21,2:PRINT"You can't go that way."
999 GOTO 910
1000 LOOK=1:ROOM=9:BLOAD"ENGINERM.PIC",VARPTR(SCR(0)):CLS
1001 PUT(8,8),SCR,PSET
1003 LOCATE 16,1:PRINT"     You are in the engine room.  You"
1004 PRINT" can see the Reactor to the south and"
1005 PRINT" an exit to the north."
1010 IF BATTERY=0 THEN LOCATE 5,26:PRINT"Battery"
1011 IF BATTERY=1 THEN LOCATE 5,26:PRINT"               "
1020 GOSUB 10000
1031 IF LEFT$(COMMAND$,2)="LO" THEN LOOK=0:LOCATE 21,2:PRINT" The Reactor is to the south."
1039 IF LEFT$(COMMAND$,3)="EAT" OR LEFT$(COMMAND$,3)="DRO" OR LEFT$(COMMAND$,3)="USE" THEN 1099
1040 IF LEFT$(COMMAND$,1)="N" THEN 800
1041 IF LEFT$(COMMAND$,1)="W" OR LEFT$(COMMAND$,1)="E" OR LEFT$(COMMAND$,1)="U" OR LEFT$(COMMAND$,1)="D" THEN BEEP:LOCATE 21,2:PRINT"You can't go that way."
1042 IF LEFT$(COMMAND$,1)="S" THEN 1100
1099 GOTO 1010
1100 LOOK=1:ROOM=10:BLOAD"REACTOR.PIC",VARPTR(SCR(0)):CLS
1101 PUT(8,8),SCR,PSET
1110 LOCATE 16,1:PRINT"     You are so stupid!  Don't you know"
1120 PRINT" that the reactors are too hot for"
1130 PRINT" humans to survive in!!"
1131 PRINT" ***You have DIED!***"
1140 PRINT:INPUT" Play again (Y/N)";A$
1150 IF A$="N" THEN CLS:END
1151 IF A$="Y" THEN CLS:RUN
1160 GOTO 1140
1200 LOOK=1:ROOM=11:BLOAD"HALLWAY.PIC",VARPTR(SCR(0)):CLS
1201 PUT(8,8),SCR,PSET
1203 LOCATE 16,1:PRINT"     You are in a long hallway.  There"
1204 PRINT" is an exit to the south and the hall"
1205 PRINT" continues to the north."
1210 REM
1220 GOSUB 10000
1230 IF LEFT$(COMMAND$,2)="LO" THEN LOOK=0:LOCATE 21,2:PRINT" There is nothing here."
1239 IF LEFT$(COMMAND$,3)="EAT" OR LEFT$(COMMAND$,3)="DRO" OR LEFT$(COMMAND$,3)="USE" THEN 1299
1240 IF LEFT$(COMMAND$,1)="N" THEN 1300
1241 IF LEFT$(COMMAND$,1)="W" OR LEFT$(COMMAND$,1)="E" OR LEFT$(COMMAND$,1)="U" OR LEFT$(COMMAND$,1)="D" THEN BEEP:LOCATE 21,2:PRINT"You can't go that way."
1242 IF LEFT$(COMMAND$,1)="S" THEN 800
1299 GOTO 1210
1300 LOOK=1:ROOM=12:BLOAD"HALLWAY.PIC",VARPTR(SCR(0)):CLS
1301 PUT(8,8),SCR,PSET
1303 LOCATE 16,1:PRINT"     You are in a long hallway.  The"
1304 PRINT" hall continues to both the north and "
1305 PRINT" the south."
1310 REM
1320 GOSUB 10000
1330 IF LEFT$(COMMAND$,2)="LO" THEN LOOK=0:LOCATE 21,2:PRINT" There is nothing here."
1339 IF LEFT$(COMMAND$,3)="EAT" OR LEFT$(COMMAND$,3)="DRO" OR LEFT$(COMMAND$,3)="USE" THEN 1399
1340 IF LEFT$(COMMAND$,1)="N" THEN 1400
1341 IF LEFT$(COMMAND$,1)="W" OR LEFT$(COMMAND$,1)="E" OR LEFT$(COMMAND$,1)="U" OR LEFT$(COMMAND$,1)="D" THEN BEEP:LOCATE 21,2:PRINT"You can't go that way."
1342 IF LEFT$(COMMAND$,1)="S" THEN 1200
1399 GOTO 1310
1400 LOOK=1:ROOM=13:IF DEAD=0 THEN BLOAD"HALLWAY1.PIC",VARPTR(SCR(0)):CLS
1401 LOOK=1:ROOM=13:IF DEAD>0 THEN BLOAD"dead1.PIC",VARPTR(SCR(0)):CLS
1402 SMOVE=MOVE:PUT(8,8),SCR,PSET
1403 LOCATE 16,1:PRINT"     You are in a long hallway.  A"
1404 IF DEAD=0 THEN PRINT" guard stands here.  Stairs go down and"
1405 IF DEAD>0 THEN PRINT" guard lies here.  Stairs go down and"
1406 PRINT" the hall leads to the N and S."
1410 IF DEAD=>1 AND BRIDGE=0 THEN LOCATE 5,26:PRINT"Key"
1411 IF DEAD=>1 AND BRIDGE=1 THEN LOCATE 5,26:PRINT"               "
1420 GOSUB 10000
1430 IF LEFT$(COMMAND$,2)="LO" AND BRIDGE=0 THEN LOOK=0:LOCATE 21,2:PRINT" The guard has a key."
1431 IF LEFT$(COMMAND$,2)="LO" AND BRIDGE=1 THEN LOOK=0:LOCATE 21,2:PRINT" There is a dead guard here."
1439 IF LEFT$(COMMAND$,3)="EAT" OR LEFT$(COMMAND$,3)="DRO" OR LEFT$(COMMAND$,3)="USE" THEN 1499
1440 IF LEFT$(COMMAND$,1)="S" THEN 1300
1441 IF LEFT$(COMMAND$,1)="W" OR LEFT$(COMMAND$,1)="E" OR LEFT$(COMMAND$,1)="U" THEN BEEP:LOCATE 21,2:PRINT"You can't go that way."
1442 IF DEAD>0 AND LEFT$(COMMAND$,1)="N" THEN 1600
1443 IF DEAD>0 AND LEFT$(COMMAND$,1)="D" THEN 1500
1499 GOTO 1410
1500 LOOK=1:ROOM=14:BLOAD"SUPPLYRM.PIC",VARPTR(SCR(0)):CLS
1501 PUT(8,8),SCR,PSET
1503 LOCATE 16,1:PRINT"     You are in a supply room.  The"
1504 PRINT" stair case leads up.  There are no "
1505 PRINT" other exits."
1510 IF LAMP=0 THEN LOCATE 5,26:PRINT"Lamp"
1511 IF LAMP=1 THEN LOCATE 5,26:PRINT"               "
1520 GOSUB 10000
1530 IF LEFT$(COMMAND$,2)="LO" AND LAMP=0 THEN LOOK=0:LOCATE 21,2:PRINT" There is a lamp here."
1531 IF LEFT$(COMMAND$,2)="LO" AND LAMP=1 THEN LOOK=0:LOCATE 21,2:PRINT" There is nothing here."
1539 IF LEFT$(COMMAND$,3)="EAT" OR LEFT$(COMMAND$,3)="DRO" OR LEFT$(COMMAND$,3)="USE" THEN 1599
1540 IF LEFT$(COMMAND$,1)="U" THEN 1400
1541 IF LEFT$(COMMAND$,1)="N" OR LEFT$(COMMAND$,1)="E" OR LEFT$(COMMAND$,1)="S" OR LEFT$(COMMAND$,1)="W" OR LEFT$(COMMAND$,1)="D" THEN BEEP:LOCATE 21,2:PRINT"You can't go that way."
1599 GOTO 1510
1600 LOOK=1:ROOM=15:BLOAD"HALLWAY.PIC",VARPTR(SCR(0)):CLS
1601 PUT(8,8),SCR,PSET
1603 LOCATE 16,1:PRINT"     You are in a long hallway.  The"
1604 PRINT" hall continues to both the north and "
1605 PRINT" the south."
1610 REM
1620 GOSUB 10000
1630 IF LEFT$(COMMAND$,2)="LO" THEN LOOK=0:LOCATE 21,2:PRINT" There is nothing here."
1639 IF LEFT$(COMMAND$,3)="EAT" OR LEFT$(COMMAND$,3)="DRO" OR LEFT$(COMMAND$,3)="USE" THEN 1699
1640 IF LEFT$(COMMAND$,1)="N" THEN 1700
1641 IF LEFT$(COMMAND$,1)="W" OR LEFT$(COMMAND$,1)="E" OR LEFT$(COMMAND$,1)="U" OR LEFT$(COMMAND$,1)="D" THEN BEEP:LOCATE 21,2:PRINT"You can't go that way."
1642 IF LEFT$(COMMAND$,1)="S" THEN 1400
1699 GOTO 1610
1700 LOOK=1:ROOM=16:BLOAD"ENDHALL3.PIC",VARPTR(SCR(0)):CLS
1701 PUT(8,8),SCR,PSET
1703 LOCATE 16,1:PRINT"     You are in a long hallway.  The"
1704 PRINT" hall continues to the south and an exit";
1705 PRINT" is to the north."
1710 REM
1720 GOSUB 10000
1730 IF LEFT$(COMMAND$,2)="LO" THEN LOOK=0:LOCATE 21,2:PRINT" There is a diagram of the ship."
1739 IF LEFT$(COMMAND$,3)="EAT" OR LEFT$(COMMAND$,3)="DRO" OR LEFT$(COMMAND$,3)="USE" THEN 1799
1740 IF LEFT$(COMMAND$,1)="N" THEN 1800
1741 IF LEFT$(COMMAND$,1)="W" OR LEFT$(COMMAND$,1)="E" OR LEFT$(COMMAND$,1)="U" OR LEFT$(COMMAND$,1)="D" THEN BEEP:LOCATE 21,2:PRINT"You can't go that way."
1742 IF LEFT$(COMMAND$,1)="S" THEN 1600
1799 GOTO 1710
1800 LOOK=1:ROOM=17:IF DEAD=1 THEN BLOAD"FRONTEND.PIC",VARPTR(SCR(0)):CLS
1801 LOOK=1:ROOM=17:IF DEAD>=2 THEN BLOAD"DEAD2.PIC",VARPTR(SCR(0)):CLS
1802 SMOVE=MOVE:PUT(8,8),SCR,PSET
1803 LOCATE 16,1:PRINT"     You are at the front of the space"
1804 IF DEAD=1 THEN PRINT" cruiser.  A guard stands here.  Stairs"
1805 IF DEAD>1 THEN PRINT" cruiser.  A guard lies here.  Stairs"
1806 PRINT" go up.  An exit is to the south."
1810 IF DEAD=2 AND SABER=0 THEN LOCATE 5,26:PRINT"Light Saber"
1811 IF DEAD=2 AND SABER=1 THEN LOCATE 5,26:PRINT"               "
1820 GOSUB 10000
1830 IF LEFT$(COMMAND$,2)="LO" AND SABER=0 THEN LOOK=0:LOCATE 21,2:PRINT" The guard has a light saber."
1831 IF LEFT$(COMMAND$,2)="LO" AND SABER=1 THEN LOOK=0:LOCATE 21,2:PRINT" There is a dead guard here."
1839 IF LEFT$(COMMAND$,3)="EAT" OR LEFT$(COMMAND$,3)="DRO" OR LEFT$(COMMAND$,3)="USE" THEN 1899
1840 IF LEFT$(COMMAND$,1)="S" THEN 1700
1841 IF LEFT$(COMMAND$,1)="W" OR LEFT$(COMMAND$,1)="E" OR LEFT$(COMMAND$,1)="N" OR LEFT$(COMMAND$,1)="D" THEN BEEP:LOCATE 21,2:PRINT"You can't go that way."
1842 IF DEAD>=2 AND BRIDGE=1 AND LEFT$(COMMAND$,1)="U" THEN 1900
1843 IF DEAD>=2 AND BRIDGE=0 AND LEFT$(COMMAND$,1)="U" THEN LOCATE 21,2:PRINT"You need a key."
1899 GOTO 1810
1900 LOOK=1:ROOM=18:BLOAD"BRIDGE.PIC",VARPTR(SCR(0)):CLS
1901 PUT(8,8),SCR,PSET
1903 LOCATE 16,1:PRINT"     You are on the bridge of the space"
1904 PRINT" cruiser.  The captain sits in his chair";
1905 PRINT" and the stairs go down."
1910 IF CARD=0 THEN LOCATE 5,26:PRINT"Card"
1911 IF CARD=1 THEN LOCATE 5,26:PRINT"               "
1920 GOSUB 10000
1930 IF LEFT$(COMMAND$,2)="LO" THEN LOOK=0:LOCATE 21,2:PRINT" The captain is in his chair."
1939 IF LEFT$(COMMAND$,3)="EAT" OR LEFT$(COMMAND$,3)="DRO" OR LEFT$(COMMAND$,3)="USE" THEN 1999
1940 IF LEFT$(COMMAND$,1)="W" OR LEFT$(COMMAND$,1)="E" OR LEFT$(COMMAND$,1)="N" OR LEFT$(COMMAND$,1)="U" OR LEFT$(COMMAND$,1)="S" THEN BEEP:LOCATE 21,2:PRINT"You can't go that way."
1942 IF LEFT$(COMMAND$,1)="D" THEN 1800
1999 GOTO 1910
2000 LOOK=1:ROOM=19:BLOAD"TRACTOR.PIC",VARPTR(SCR(0)):CLS
2002 SMOVE=MOVE:PUT(8,8),SCR,PSET
2003 LOCATE 16,1:PRINT"     You are in the tractor beam power "
2004 PRINT" core.  There is an exit to the east"
2005 PRINT" and a ladder leads down."
2010 REM
2020 GOSUB 10000
2030 IF LEFT$(COMMAND$,2)="LO" AND BATTERY=1 AND GUN=1 THEN LOOK=0:LOCATE 21,2:PRINT"You notice your gun and battery move.":GOTO 2039
2031 IF LEFT$(COMMAND$,2)="LO" AND BATTERY=0 AND GUN=1 THEN LOOK=0:LOCATE 21,2:PRINT"You notice your gun move.":GOTO 2039
2032 IF LEFT$(COMMAND$,2)="LO" AND BATTERY=1 AND GUN=0 THEN LOOK=0:LOCATE 21,2:PRINT"You notice your battery move.":GOTO 2039
2039 IF LEFT$(COMMAND$,3)="EAT" OR LEFT$(COMMAND$,3)="DRO" OR LEFT$(COMMAND$,3)="USE" THEN 2099
2040 IF LEFT$(COMMAND$,1)="W" OR LEFT$(COMMAND$,1)="S" OR LEFT$(COMMAND$,1)="N" OR LEFT$(COMMAND$,1)="U" THEN BEEP:LOCATE 21,2:PRINT"You can't go that way."
2041 IF LEFT$(COMMAND$,1)="D" AND GUN=1 THEN 63000
2042 IF LEFT$(COMMAND$,1)="D" AND BATTERY=1 THEN 63000
2043 IF LEFT$(COMMAND$,1)="E" THEN 800
2044 IF LEFT$(COMMAND$,1)="D" AND GUN=0 AND BATTERY=0 THEN 2100
2099 GOTO 2010
2100 LOOK=1:ROOM=20:IF OPN=0 THEN BLOAD"CARDLOCK.PIC",VARPTR(SCR(0)):CLS
2101 LOOK=1:ROOM=20:IF OPN>0 THEN BLOAD"CARDOPEN.PIC",VARPTR(SCR(0)):CLS
2102 SMOVE=MOVE:PUT(8,8),SCR,PSET
2103 LOCATE 16,1:PRINT"     You are in a fairly big room.  A"
2104 IF OPN=0 THEN PRINT" locked door is to the east.  A ladder"
2105 IF OPN>0 THEN PRINT" door lies to the east.  A ladder"
2106 PRINT" leads to the tractor beam room."
2110 IF OPN=0 AND CARD=1 THEN LOCATE 11,26:PRINT"Card"
2111 IF OPN>0 THEN LOCATE 11,26:PRINT"    "
2120 GOSUB 10000
2130 IF LEFT$(COMMAND$,2)="LO" THEN LOOK=0:LOCATE 21,2:PRINT" You notice a slot by the door."
2139 IF LEFT$(COMMAND$,3)="EAT" OR LEFT$(COMMAND$,3)="DRO" OR LEFT$(COMMAND$,3)="USE" THEN 2199
2140 IF LEFT$(COMMAND$,1)="W" OR LEFT$(COMMAND$,1)="S" OR LEFT$(COMMAND$,1)="N" OR LEFT$(COMMAND$,1)="D" THEN BEEP:LOCATE 21,2:PRINT"You can't go that way."
2141 IF LEFT$(COMMAND$,1)="E" AND OPN=0 THEN BEEP:LOCATE 21,2:PRINT"The door is locked."
2142 IF LEFT$(COMMAND$,1)="E" AND OPN>0 AND LAMP=1 THEN 2200
2143 IF LEFT$(COMMAND$,1)="U" THEN 2000
2144 IF LEFT$(COMMAND$,1)="E" AND OPN>0 AND LAMP=1 THEN 58000
2199 GOTO 2110
2200 LOOK=1:ROOM=21:IF DEAD=2 THEN BLOAD"ALIENRM.PIC",VARPTR(SCR(0)):CLS
2201 LOOK=1:ROOM=21:IF DEAD=>3 AND OPN<2 THEN BLOAD"DEAD3.PIC",VARPTR(SCR(0)):CLS
2202 LOOK=1:ROOM=21:IF DEAD=>3 AND OPN>1 THEN BLOAD"FREEMATE.PIC",VARPTR(SCR(0)):CLS
2203 SMOVE=MOVE:PUT(8,8),SCR,PSET
2204 LOCATE 16,1:PRINT"     You are in a fairly big room.  A"
2205 IF OPN=1 THEN PRINT" locked cell is to the east.  An open"
2206 IF OPN>1 THEN PRINT" cell lies to the east.  An open"
2207 PRINT" door leads to the west."
2208 IF DEAD<3 THEN PRINT" THE ALIEN IS HERE!"
2209 IF DEAD=3 THEN PRINT" The alien is DEAD!"
2210 IF DEAD=3 AND OPN<2 THEN LOCATE 11,26:PRINT"Button"
2211 IF DEAD=3 AND OPN>1 THEN LOCATE 11,26:PRINT"      "
2212 IF DEAD=3 AND CODE=0 THEN LOCATE 5,26:PRINT"Access Code"
2213 IF DEAD=3 AND CODE=1 THEN LOCATE 5,26:PRINT"               "
2214 IF DEAD=3 AND ROOMMATE=0 AND OPN>1 THEN LOCATE 6,26:PRINT"Roommate"
2215 IF DEAD=3 AND ROOMMATE=1 AND OPN>1 THEN LOCATE 6,26:PRINT"               "
2220 GOSUB 10000
2230 IF LEFT$(COMMAND$,2)="LO" AND OPN<2 THEN LOOK=0:LOCATE 21,2:PRINT" You notice a button on the wall."
2239 IF LEFT$(COMMAND$,3)="EAT" OR LEFT$(COMMAND$,3)="DRO" OR LEFT$(COMMAND$,3)="USE" THEN 2299
2240 IF LEFT$(COMMAND$,1)="E" OR LEFT$(COMMAND$,1)="S" OR LEFT$(COMMAND$,1)="N" OR LEFT$(COMMAND$,1)="D" OR LEFT$(COMMAND$,1)="U" THEN BEEP:LOCATE 21,2:PRINT"You can't go that way."
2242 IF LEFT$(COMMAND$,1)="W" THEN 2100
2299 GOTO 2210
2300 LOOK=1:ROOM=22:BLOAD"SPACEWAY.PIC",VARPTR(SCR(0)):CLS
2301 PUT(8,8),SCR,PSET
2303 LOCATE 16,1:PRINT"     You are in a short hallway.  There"
2304 PRINT" is an exit to the east and the hall"
2305 PRINT" continues to the north."
2310 REM
2320 GOSUB 10000
2330 IF LEFT$(COMMAND$,2)="LO" THEN LOOK=0:LOCATE 21,2:PRINT" There is nothing here."
2339 IF LEFT$(COMMAND$,3)="EAT" OR LEFT$(COMMAND$,3)="DRO" OR LEFT$(COMMAND$,3)="USE" THEN 2399
2340 IF LEFT$(COMMAND$,1)="N" THEN 2400
2341 IF LEFT$(COMMAND$,1)="W" OR LEFT$(COMMAND$,1)="S" OR LEFT$(COMMAND$,1)="U" OR LEFT$(COMMAND$,1)="D" THEN BEEP:LOCATE 21,2:PRINT"You can't go that way."
2342 IF LEFT$(COMMAND$,1)="E" THEN 500
2399 GOTO 2310
2400 LOOK=1:ROOM=23:BLOAD"ENDHALL2.PIC",VARPTR(SCR(0)):CLS
2401 PUT(8,8),SCR,PSET
2403 LOCATE 16,1:PRINT"     You are in a short hallway.  There"
2404 PRINT" is an exit to the north and the hall"
2405 PRINT" continues to the south."
2410 REM
2420 GOSUB 10000
2430 IF LEFT$(COMMAND$,2)="LO" THEN LOOK=0:LOCATE 21,2:PRINT" There is nothing here."
2439 IF LEFT$(COMMAND$,3)="EAT" OR LEFT$(COMMAND$,3)="DRO" OR LEFT$(COMMAND$,3)="USE" THEN 2499
2440 IF LEFT$(COMMAND$,1)="N" THEN 2500
2441 IF LEFT$(COMMAND$,1)="W" OR LEFT$(COMMAND$,1)="E" OR LEFT$(COMMAND$,1)="U" OR LEFT$(COMMAND$,1)="D" THEN BEEP:LOCATE 21,2:PRINT"You can't go that way."
2442 IF LEFT$(COMMAND$,1)="S" THEN 2300
2499 GOTO 2410
2500 LOOK=1:ROOM=24:BLOAD"TRANSPOR.PIC",VARPTR(SCR(0)):CLS
2501 PUT(8,8),SCR,PSET
2503 LOCATE 16,1:PRINT"     You are in the ships molecular"
2504 PRINT" transportation room.  The only exit"
2505 PRINT" is to the south."
2510 LOCATE 11,26:PRINT"Transporter"
2520 GOSUB 10000
2530 IF LEFT$(COMMAND$,2)="LO" THEN LOOK=0:LOCATE 21,2:PRINT" The transporter is here."
2539 IF LEFT$(COMMAND$,3)="EAT" OR LEFT$(COMMAND$,3)="DRO" OR LEFT$(COMMAND$,3)="USE" THEN 2599
2540 IF LEFT$(COMMAND$,1)="N" OR LEFT$(COMMAND$,1)="W" OR LEFT$(COMMAND$,1)="E" OR LEFT$(COMMAND$,1)="U" OR LEFT$(COMMAND$,1)="D" THEN BEEP:LOCATE 21,2:PRINT"You can't go that way."
2541 IF LEFT$(COMMAND$,1)="S" THEN 2400
2599 GOTO 2510
9999 END
10000 MOVE=MOVE+1:LOCATE 20,2:PRINT">";COMMAND$
10001 LOCATE 3,26:PRINT"Visible Objects"
10002 LOCATE 9,26:PRINT"Usable Objects"
10007 IF DEAD>=2 AND DEAD<3 AND ROOM=21 AND SMOVE<MOVE+1 THEN 61100
10008 IF DEAD=0 AND ROOM=13 AND SMOVE<MOVE+1 THEN 61000
10009 IF DEAD>=1 AND DEAD<2 AND ROOM=17 AND SMOVE<MOVE+1 THEN 61000
10010 LOCATE 23,2:LINE INPUT">";COMMAND$:LOCATE 21,2
10011 LOCATE 20,3:PRINT"                                     ";
10012 LOCATE 20,2:PRINT">";COMMAND$
10013 LOCATE 21,2:PRINT"                                       ";
10014 LOCATE 23,3:PRINT"                                     ";
10020 IF LEFT$(COMMAND$,3)="GET" THEN 11000
10021 IF LEFT$(COMMAND$,3)="EAT" THEN 11500
10030 IF LEFT$(COMMAND$,3)="DRO" THEN 11100
10040 IF LEFT$(COMMAND$,3)="USE" THEN 11200
10050 IF LEFT$(COMMAND$,3)="KIL" THEN 11300
10060 IF LEFT$(COMMAND$,1)="I" THEN 11400
10061 IF LEFT$(COMMAND$,3)="QUI" THEN CLS:END
10070 IF LEFT$(COMMAND$,3)="ASS" THEN LOCATE 21,2:PRINT"Such horrible language!":RETURN
10075 IF COMMAND$="HELP" THEN 50000
10080 IF COMMAND$="FUCK "+ROOMMATE$ AND ROOMMATE=1 THEN LOCATE 21,2:PRINT"Uh! Uh! That feels so good!":RETURN
10090 IF COMMAND$="FUCK YOU" THEN LOCATE 21,2:PRINT"Same to you ASSHOLE!":RETURN
10100 IF COMMAND$="FUCK YOU ASSHOLE" THEN LOCATE 21,2:PRINT"You're not the Terminator!":RETURN
10110 IF COMMAND$="FART" THEN LOCATE 21,2:PRINT"Ahhhhh! That smells!":RETURN
10120 IF COMMAND$="BURP" THEN LOCATE 21,2:PRINT"Belch!":RETURN
10130 IF COMMAND$="HI" THEN LOCATE 21,2:PRINT"Buy Reflex Point! (Disk 487) By E.I.":RETURN
10131 IF COMMAND$="FUCK "+ROOMMATE$ AND ROOMMATE=0 THEN LOCATE 21,2:PRINT"You don't have "+ROOMMATE$+" yet.":RETURN
10132 IF COMMAND$="KISS "+ROOMMATE$ AND ROOMMATE=1 THEN LOCATE 21,2:PRINT"You give ";ROOMMATE$;" a kiss.":RETURN
10133 IF COMMAND$="KISS "+ROOMMATE$ AND ROOMMATE=0 THEN LOCATE 21,2:PRINT"You don't have "+ROOMMATE$+" yet.":RETURN
10134 IF LEFT$(COMMAND$,4)="FUCK" THEN LOCATE 21,2:PRINT"Wash your mouth out with soap!":RETURN
10140 IF LEFT$(COMMAND$,6)="PC-SIG" THEN LOCATE 21,2:PRINT"Great public domain software!":RETURN
10150 IF LEFT$(COMMAND$,1)="W" OR LEFT$(COMMAND$,1)="E" OR LEFT$(COMMAND$,1)="S" OR LEFT$(COMMAND$,1)="U" OR LEFT$(COMMAND$,1)="D" OR LEFT$(COMMAND$,1)="N" OR LEFT$(COMMAND$,2)="LO" THEN RETURN
10999 BEEP:LOCATE 21,2:PRINT"What?":RETURN
11000 IF RIGHT$(COMMAND$,2)="SK" AND DISK=0 AND ROOM=1 THEN DISK=1:LOCATE 21,2:PRINT"You got the disk.":RETURN
11010 IF RIGHT$(COMMAND$,2)="MP" AND LAMP=0 AND ROOM=14 THEN LAMP=1:LOCATE 21,2:PRINT"You got the lamp.":RETURN
11020 IF RIGHT$(COMMAND$,2)="OD" AND FOOD=0 AND ROOM=5 THEN FOOD=1:LOCATE 21,2:PRINT"You got the food.":RETURN
11030 IF RIGHT$(COMMAND$,2)="DE" AND CODE=0 AND ROOM=21 THEN CODE=1:LOCATE 21,2:PRINT"You got the access code.":RETURN
11040 IF RIGHT$(COMMAND$,2)="TE" AND ROOMMATE=0 AND ROOM=21 AND DEAD=3 AND OPN>1 THEN ROOMMATE=1:LOCATE 21,2:PRINT"You have rescued ";ROOMMATE$;".":RETURN
11050 IF RIGHT$(COMMAND$,2)="UN" AND GUN=0 AND ROOM=8 AND EATEN=1 THEN GUN=1:LOCATE 21,2:PRINT"With a hard pull, you remove the gun.":RETURN
11051 IF RIGHT$(COMMAND$,2)="UN" AND GUN=0 AND ROOM=8 AND EATEN=0 THEN LOCATE 21,2:PRINT"You're not strong enough to get it.":RETURN
11060 IF RIGHT$(COMMAND$,2)="RY" AND BATTERY=0 AND ROOM=9 THEN BATTERY=1:LOCATE 21,2:PRINT"You got the battery.":RETURN
11070 IF RIGHT$(COMMAND$,2)="EY" AND BRIDGE=0 AND ROOM=13 AND DEAD=>1 THEN BRIDGE=1:LOCATE 21,2:PRINT"You got the bridge key.":RETURN
11080 IF RIGHT$(COMMAND$,3)="BER" AND SABER=0 AND ROOM=17 AND DEAD=>2 THEN SABER=1:LOCATE 21,2:PRINT"You got the light saber.":RETURN
11090 IF RIGHT$(COMMAND$,3)="ARD" AND CARD=0 AND ROOM=18 THEN CARD=1:LOCATE 21,2:PRINT"You got the cardlock card.":RETURN
11099 LOCATE 21,2:BEEP:PRINT"I don't see that here.":RETURN
11100 IF RIGHT$(COMMAND$,2)="RY" AND BATTERY=1 THEN BATTERY=0:LOCATE 21,2:PRINT"You've dropped the battery.":RETURN
11110 IF RIGHT$(COMMAND$,2)="UN" AND GUN=1 THEN GUN=0:LOCATE 21,2:PRINT"You've dropped the laser gun.":RETURN
11199 LOCATE 21,2:BEEP:PRINT"You can't drop that.":RETURN
11200 IF RIGHT$(COMMAND$,2)="ER" AND ROOM=24 AND DISK=1 AND CODE=1 AND NEEDTOGO=0 THEN CLS:GOTO 59000
11201 IF RIGHT$(COMMAND$,2)="ER" AND ROOM=24 AND DISK=0 AND CODE=1 AND NEEDTOGO=0 THEN CLS:GOTO 57000
11202 IF RIGHT$(COMMAND$,2)="ER" AND ROOM=24 AND DISK=1 AND CODE=1 AND NEEDTOGO=1 THEN CLS:GOTO 56000
11210 IF RIGHT$(COMMAND$,2)="OR" AND ROOM=3 OR ROOM=4 OR ROOM=7 THEN CLS:GOTO 60000
11220 IF RIGHT$(COMMAND$,2)="ET" AND ROOM=6 AND NEEDTOGO=1 THEN LOCATE 21,2:PRINT"Ahhhhh!":NEEDTOGO=0:RETURN
11230 IF RIGHT$(COMMAND$,2)="RD" AND ROOM=20 AND CARD=1 THEN CARD=0:OPN=1:GOTO 2100
11240 IF RIGHT$(COMMAND$,2)="ON" AND ROOM=21 AND DEAD=3 AND OPN<2 THEN OPN=2:GOTO 2200
11299 BEEP:LOCATE 21,2:PRINT"You can't use that, at least not now!":RETURN
11300 IF GUN=1 AND BATTERY=1 THEN PLAY"T250O2L64BAAGGFFEEDDC"
11301 IF GUN=1 AND BATTERY=1 AND RIGHT$(COMMAND$,2)="RD" AND ROOM=13 AND DEAD=0 THEN DEAD=1:GOTO 1400
11302 IF GUN=1 AND BATTERY=0 AND RIGHT$(COMMAND$,2)="RD" AND ROOM=13 AND DEAD=0 THEN LOCATE 21,2:PLAY"O1CC":PRINT"Your gun doesn't work!":RETURN
11310 IF GUN=1 AND BATTERY=1 AND RIGHT$(COMMAND$,2)="RD" AND ROOM=17 AND DEAD=1 THEN DEAD=1.5:LOCATE 21,2:PRINT"You hit him!":FOR I=1 TO 1000:NEXT I:RETURN
11311 IF GUN=1 AND BATTERY=0 AND RIGHT$(COMMAND$,2)="RD" AND ROOM=17 AND DEAD=1 THEN LOCATE 21,2:PLAY"O1CC":PRINT"Your gun doesn't work!":RETURN
11312 IF GUN=1 AND BATTERY=1 AND RIGHT$(COMMAND$,2)="RD" AND ROOM=17 AND DEAD=1.5 THEN DEAD=2:GOTO 1800
11313 IF RIGHT$(COMMAND$,2)="IN" AND ROOM=18 THEN HIT=6:GOTO 61000
11320 IF SABER=1 AND RIGHT$(COMMAND$,2)="EN" AND ROOM=21 AND DEAD=2 THEN DEAD=2.5:LOCATE 21,2:PRINT"You hit him!":FOR I=1 TO 1000:NEXT I:RETURN
11321 IF SABER=1 AND RIGHT$(COMMAND$,2)="EN" AND ROOM=21 AND DEAD=2.5 THEN DEAD=2.75:LOCATE 21,2:PRINT"You hit him!":FOR I=1 TO 1000:NEXT I:RETURN
11322 IF SABER=1 AND RIGHT$(COMMAND$,2)="EN" AND ROOM=21 AND DEAD=2.75 THEN DEAD=3:GOTO 2200
11323 IF ROOMMATE=1 AND MID$(COMMAND$,6)=ROOMMATE$ THEN LOCATE 21,2:PRINT"Are you out of your GOURD?!?!":RETURN
11330 IF GUN=0 AND SABER=0 THEN LOCATE 21,2:PRINT"You have no weapon!":RETURN
11399 BEEP:LOCATE 21,2:PRINT"You can't kill that, at least not now!":RETURN
11400 CLS:PRINT"You are carrying:"
11410 PRINT
11420 IF DISK=1 THEN PRINT"Transporter Coordinate Disk"
11430 IF LAMP=1 THEN PRINT"Lamp"
11440 IF FOOD=1 THEN PRINT"Food"
11450 IF CODE=1 THEN PRINT"Transporter Access Code"
11460 IF ROOMMATE=1 THEN PRINTROOMMATE$
11470 IF GUN=1 THEN PRINT"Laser Gun"
11480 IF BATTERY=1 THEN PRINT"Laser Battery"
11490 IF BRIDGE=1 THEN PRINT"Bridge Key"
11491 IF SABER=1 THEN PRINT"Light Saber"
11492 IF CARD=1 THEN PRINT"Cardlock Card"
11493 IF DISK=0 AND LAMP=0 AND FOOD<>1 AND CODE=0 AND ROOMMATE=0 AND GUN=0 AND BATTERY=0 AND BRIDGE=0 AND SABER=0 AND CARD=0 THEN PRINT"Nothing"
11494 PRINT:PRINT"Hit any key>"
11495 A$=INKEY$:IF A$="" THEN 11495
11496 CLS:PUT(8,8),SCR,PSET:RETURN
11500 IF RIGHT$(COMMAND$,4)="FOOD" AND FOOD=1 THEN FOOD=2:NEEDTOGO=1:EATEN=1:LOCATE 21,2:PRINT"You feel stronger!":RETURN
11510 IF MID$(COMMAND$,5)=ROOMMATE$ THEN LOCATE 21,2:PRINT"That's gross!":RETURN
11599 BEEP:LOCATE 21,2:PRINT"You can't eat that, at least not now!":RETURN
50000 CLS
50010 PRINT"List of commands:"
50020 PRINT
50030 PRINT" LOOK"
50040 PRINT" GET"
50050 PRINT" DROP"
50060 PRINT" USE"
50070 PRINT" QUIT"
50080 PRINT" I or INVENTORY"
50090 PRINT" N or NORTH"
50100 PRINT" S or SOUTH"
50110 PRINT" W or WEST"
50120 PRINT" E or EAST"
50121 PRINT" U or UP"
50122 PRINT" D or DOWN"
50130 PRINT" EAT"
50140 PRINT" KILL"
50150 PRINT
50160 PRINT"NOTE: There are interesting responses"
50170 PRINT"to certain words or phrases that are"
50180 PRINT"not listed here.  Those words and "
50190 PRINT"phrases don't start with N,S,W,E,U,or D.";
50191 PRINT:PRINT"Hit any key>"
50192 A$=INKEY$:IF A$="" THEN 50192
50193 CLS:PUT(8,8),SCR,PSET:RETURN
50999 END
56000 CLS
56010 PRINT"As you enter the transporter, you slowly";
56020 PRINT"decompose your molecules.  Suddenly"
56030 PRINT"you have to go to the bathroom and "
56040 PRINT"solid wastes begin to leave you rear."
56050 PRINT"Since your molecules are changing their"
56060 PRINT"composition, when you recompose them,"
56070 PRINT"you BLOW UP!"
56080 PRINT"***You have DIED!***"
56090 GOTO 62000
57000 CLS
57010 PRINT"As you enter the transporter, you slowly";
57020 PRINT"decompose and then recompose your "
57030 PRINT"molecules.  Before you know it, you're"
57040 PRINT"floating in outer space."
57050 PRINT"***You have DIED!***"
57060 GOTO 62000
58000 CLS
58010 LOCATE 16,1:PRINT"     You enter an extremely dark room."
58020 PRINT" You hear a breathing noise and then "
58030 PRINT" you feel incredibly hot... "
58040 PRINT" ***You have DIED!***"
58050 GOTO 62000
59000 CLS
59010 PRINT"As you enter the transporter, you slowly";
59020 PRINT"decompose and then recompose your "
59030 PRINT"molecules.  Before you know it, you're"
59040 PRINT"on the door step to your house.
59041 IF ROOMMATE=0 THEN 59100
59050 PRINT"    ";ROOMMATE$;" thanks you dearly for"
59060 PRINT"rescuing him/her.  You have completed"
59070 PRINT"the Quest in";MOVE;" moves."
59080 PRINT"The least amount of moves is 59"
59090 GOTO 62000
59100 PRINT"    You have returned to Earth pre-"
59110 PRINT"maturly for you left your roommate"
59120 PRINT"on board the space cruiser."
59130 PRINT"In the following years to come you miss"
59140 PRINT ROOMMATE$;" dearly."
59150 GOTO 62000
60000 PRINT"There are three buttons on the wall."
60010 PRINT:INPUT"Push which button (1,2,3)";A
60015 PLAY"O2L4A"
60020 ON A GOTO 400,500,800
61000 REM FIRE ROUTINE
61010 IF RND(1)*100>75 THEN BEEP:LOCATE 21,2:PRINT"He fired and Hit!                     ":HIT=HIT+1
61011 IF ROOM=18 THEN BEEP:LOCATE 21,2:PRINT"He fired and Hit!                     ":HIT=HIT+1
61020 IF HIT>4 THEN LOCATE 21,2:PRINT"***You have DIED!***                  ":GOTO 62000
61030 GOTO 10010
61100 REM FIRE ROUTINE
61110 IF RND(1)*100>25 THEN BEEP:LOCATE 21,2:PRINT"He fired and Hit!                     ":HIT=HIT+1
61111 IF ROOM=18 THEN BEEP:LOCATE 21,2:PRINT"He fired and Hit!                     ":HIT=HIT+1
61120 IF HIT>4 THEN LOCATE 21,2:PRINT"***You have DIED!***                  ":GOTO 62000
61130 GOTO 10010
62000 LOCATE 23,2:LINE INPUT">Play Again?                       ";A$
62010 IF A$="Y" THEN RUN
62020 IF A$="N" THEN CLS:END
62030 CLS:END
63000 CLS
63010 PRINT"     You start to go down the ladder "
63020 PRINT" when you feel a tug from behind."
63030 PRINT" Before you know it, you're approaching"
63040 PRINT" the tractor beam housing and then..."
63050 PRINT:PRINT" ***You have DIED!***"
63060 GOTO 62000
```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk 0633

     Volume in drive A has no label
     Directory of A:\

    ALIENRM  PIC      4968   1-01-80   2:25a
    BATHROOM PIC      4968   1-01-80   1:23a
    BRIDGE   PIC      4968   1-01-80   1:17a
    CARDLOCK PIC      4968   1-01-80   1:40a
    CARDOPEN PIC      4968   1-01-80   1:40a
    CENTER1  PIC      4968   1-01-80  12:47a
    CENTER2  PIC      4968   1-01-80  12:48a
    CENTER3  PIC      4968   1-01-80  12:48a
    DEAD1    PIC      4968   1-01-80   1:05a
    DEAD2    PIC      4968   1-01-80  12:43a
    DEAD3    PIC      4968   1-01-80   2:26a
    DININGRM PIC      4968   1-01-80  12:33a
    DRAWPLUS BAS     10400   7-11-86  12:00p
    DRAWPLUS PIC     16392   7-11-86  12:00p
    ENDHALL  PIC      4968   1-01-80  12:24a
    ENDHALL2 PIC      4968   1-01-80   1:11a
    ENDHALL3 PIC      4968   1-01-80   1:31a
    ENGINERM PIC      4968   1-01-80  12:43a
    FILES    TXT      2558   1-01-80  12:53a
    FILES633 TXT      1135   1-29-87   8:17a
    FREEMATE PIC      4968   1-01-80   2:26a
    FRONTEND PIC      4968   1-01-80  12:44a
    GO       BAT       623   1-29-87   8:22a
    HALLWAY  PIC      4968   1-01-80   1:32a
    HALLWAY1 PIC      4968   1-01-80   1:05a
    HELPPLUS BAS     12086   1-01-80  12:09a
    NOTES633 TXT      2238   1-29-87   8:20a
    QUARTERS PIC      4968   1-01-80  12:49a
    QUEST    BAS     26362   8-04-86  12:00p
    REACTOR  PIC      4968   1-01-80  12:00a
    SPACEWAY PIC      4968   1-01-80  12:16a
    SUPPLYRM PIC      4968   1-01-80   1:54a
    TITLE    PIC     16392   1-01-80   1:03a
    TRACTOR  PIC      4968   1-01-80   1:21a
    TRANSPOR PIC      4968   1-01-80   1:11a
    WEAPONRM PIC      4968   1-01-80   1:50a
           36 file(s)     222322 bytes
                           90112 bytes free
