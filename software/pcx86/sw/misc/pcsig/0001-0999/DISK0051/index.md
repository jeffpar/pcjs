---
layout: page
title: "PC-SIG Library Disk #51"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0051/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0051"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "HYPERDRIVE"

    There are two different configurations of the HYPERDRIVE RAM-disk
    program on this disk, as well as the source code to let users generate
    their own configurations.  Note, however, that the documentation states
    that you must reset DIP switches on your system board to use this
    program.  Also included is an interesting BASIC program to figure
    future.  And for all you heretics who still believe that computers can
    be fun, too, a version of the game GOMOKU is included.  Translated into
    Pascal from HP Basic, this is guaranteed to keep you up late for a few
    nights.
    
    System Requirements:  Some programs require BASIC.
    
    How to Start: To run an EXE program simply type its name and press
    <ENTER>.  For instructions on running BASIC programs, please refer to
    the GETTING STARTED section in this catalog.  For instructions on ASM
    listings, refer to your Assembler manual.  To read DOC files simply
    enter TYPE filename.ext and press <ENTER>.
    
    File Descriptions:
    
    FOUR     EXE  Game - get four in a row
    FUTRDATE BAS  Determines date - x days, months, years from now
    GOMOKU   DOC  Documentation for GOMOKU.EXE
    FUTRDATE DOC  Documentation for FUTRDATE.BAS
    GOMOKU   EXE  Game - simular to tic-tac-toe but played on 20x20 board
    HDD512   EXE  RAM disk program for 512K of memory
    GOMOKU   PAS  Source code for game of GOMOKU
    PCGLOBE  BAS  Draws globe
    INTERUPT MAC  Macro assembly language interrupt routine
    HYPERDRV DOC  Documentation for RAM disk program
    HDS320   EXE  RAM disk program for 320K of memory
    RAMDISK  ASM  Source code for RAM disk program
    TMDAY    BAS  Digital clock
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FUTRDATE.BAS

```bas
1 ' (PC)^3 Software Submission FUTRDATE authored on February 14, 1983 by
2 '
3 ' Michael Csontos, 3228 Livonia Center Road, Lima, New York 14485
4 '
5 ' Copyright 1983 Michael Csontos
6 '
7 '  This program is made freely available non-exclusively to the Picture
8 '  City Personal Computer Programmers' Club for distribution to its members
9 '  and through software exchange to other users groups as long as credit is
10 ' given to the author and (PC)^3.
11 '
12 '
13 ' NOTE: The file FUTRDATE.DOC is associated with this program.
15 '
16 '
10000 DEFINT A-Z:DIM MN$(12),DN$(7):CLS:KEY OFF
10100 DN$(1)="SAT.":DN$(2)="SUN.":DN$(3)="MON.":DN$(4)="TUE.":DN$(5)="WED.":DN$(6)="THU.":DN$(7)="FRI."
10200 MN$(1)="JAN.":MN$(2)="FEB.":MN$(3)="MAR.":MN$(4)="APR.":MN$(5)="MAY.":MN$(6)="JUN.":MN$(7)="JUL.":MN$(8)="AUG.":MN$(9)="SEP.":MN$(10)="OCT.":MN$(11)="NOV.":MN$(12)="DEC."
10300 PRINT "This program will give you the date in the future corresponding to the number":PRINT
10400 PRINT "of days, months, weeks and/or years in the future that you enter.":PRINT
10500 PRINT "The program is limited to the range of dates allowed by the BASIC [DATE$]":PRINT
10600 PRINT "function; i.e. 1980 to 2099.":PRINT
10700 PRINT "You may enter a reference date using the same formats as the [DATE$] command":PRINT
10800 PRINT "or just press <enter> (<"CHR$(17)CHR$(196)CHR$(217)">) to use the current date.":PRINT
10900 SDAT$=DATE$
11000 INPUT;"Date";DAT$
11100 IF DAT$="" THEN DAT$=DATE$:PRINT DAT$:GOTO 11300 ELSE ON ERROR GOTO 11200:DATE$=DAT$:ON ERROR GOTO 0:DAT$=DATE$:PRINT:GOTO 11300
11200 PRINT " Improper date format.":RESUME 11000
11300 PRINT:PRINT "Now enter the time to be added to this date, in any combination of years, ":PRINT
11400 PRINT "months, weeks, and days (integers only).":PRINT
11500 INPUT;"YEARS";IYR!:INPUT;", MONTHS";IMO!:INPUT;", WEEKS";IWK!:INPUT", DAYS";IDY!:PRINT
11600 IF IYR!<>INT(IYR!) OR IMO!<>INT(IMO!) OR IWK!<>INT(IWK!) OR IDY!<>INT(IDY!) THEN PRINT "Inputs must be whole numbers.":PRINT:GOTO 11500
11700 DYS=IDY!+IWK!*7
11800 Y=VAL(RIGHT$(DAT$,4)):D=VAL(MID$(DAT$,4,2)):M=VAL(LEFT$(DAT$, 2))
11900 M=M+IMO!:IF M>12 THEN Y=Y+INT(M/12):M=M MOD 12
12000 Y=Y+IYR!:IF Y>2099 THEN 13300
12100 IF D=29 AND M=2 THEN IF Y MOD 4 <>0 THEN D=D-1
12200 M$=STR$(M+100):D$=STR$(D+100):Y$=STR$(Y+10000):M$=RIGHT$(M$,2):D$=RIGHT$(D$,2):Y$=RIGHT$(Y$,4)
12300 ATE$=M$+"-"+D$+"-"+Y$:ON ERROR GOTO 12400:DATE$=ATE$
12400 ON ERROR GOTO 0:GOTO 12500
12500 FOR N=1 TO DYS
12600 D=D+1
12700 M$=STR$(M+100):D$=STR$(D+100):Y$=STR$(Y+10000):M$=RIGHT$(M$,2):D$=RIGHT$(D$,2):Y$=RIGHT$(Y$,4)
12800 ATE$=M$+"-"+D$+"-"+Y$:ON ERROR GOTO 13000:DATE$=ATE$
12900 ON ERROR GOTO 0:GOTO 13400
13000 IF ERR=5 THEN RESUME 13100 ELSE PRINT "DATGEN TROUBLE":ON ERROR GOTO 0
13100 D=1:M=M+1:IF M=13 THEN 13200 ELSE 13400
13200 M=1:Y=Y+1:IF Y>=2099 THEN 13300 ELSE 13400
13300 PRINT "Cannot go beyond year 2099":PRINT:DATE$=SDAT$:GOTO 13900
13400 NEXT N
13500 M4=M:Y4=Y:IF M4>2 THEN 13600 ELSE M4=M4+12:Y4=Y4-1
13600 N=2+D+M4*2+Y4+INT(Y4/4)-INT(Y4/100)+INT(Y4/400)+INT(.6*(M4+1))
13700 DN=1+INT(1/2+(N/7-INT(N/7))*7)
13800 PRINT "The new date is: ";:COLOR 15,0:PRINT DN$(DN)", "MN$(M);:PRINT USING " ##";D;:PRINT ","Y;:PRINT "  or   "DATE$:PRINT:DATE$=SDAT$:COLOR 7,0
13900 PRINT "Press any key to run the program again except <Esc> which will return to BASIC."
14000 X$=INKEY$:IF X$="" THEN 14000 ELSE IF X$=CHR$(27) THEN KEY ON:END ELSE RUN
65000 '         SAVE"futrdate",a
```

## PCGLOBE.BAS

```bas
10 SCREEN 1                           'PC WORLD
20 CLS:KEY  OFF                       'Karl Koessel
30 PRINT "                            Perspective Image of Rotated Globe"
40 DEFINT L,R,X-Z
50 CX=CY:CZ=SX:SY=SZ:I=J:R=A:B=C:A1=B2:C1=C2     'Order variables to optimize
60 A3=B3:X=Y:XC=YC:LX=LY:B$=C$:RC=PI:LZ=ZS:Q=DR  'speed,about 3% faster
70 DIM RC(11)
80 FOR X=1 TO 11                             'Prepare an array holding the
90     RC(X)=(X-1) MOD 3 +1                  'colors of parallels; pattern
100    IF X>6 THEN RC(X)=(5-RC(X))MOD 3 +1   'reverses after equator which
110 NEXT                                     'is brown or white(palette 0 or 1)
120 PI=3.14159265#
130 CF=PI/180#
140 PRINT
150 INPUT "Want to see a sample run (y/n)";S$
160 S$=LEFT$(S$,1)
170 IF S$="y" OR S$="Y" THEN GOSUB 880:GOTO 380
180 PRINT
190 PRINT "enter screen location of center of globe";
200 INPUT "(e.g. 160,100)              ";XC,YC
210 PRINT
220 PRINT "Enter relative coordinates of observer:";
230 PRINT "points left(-)/right(+) of x, below(-)/";
240 PRINT "above(+)y, and distance from the screen ";
250 INPUT "(e.g.-9,0,456)        ";XOBS,YOBS,ZOBS
260 PRINT
270 PRINT "Enter parallel, meridian,& images's tilt";
280 INPUT "(e.g. 37,-123,23) ";XROT,YROT,ZROT
290 PRINT
300 PRINT "Enter sphere's radius"
310 INPUT "(e.g.100)                    ";R
320 PRINT
330 PRINT "Enter background color and palette"
340 INPUT "(e.g.1,1)                    ";BCK,PAL
350 PRINT
360 PRINT "Enter this screen's aspect ratio"
370 INPUT "(e.g.1.21875)                ";ASP
380 CX=COS(CF*XROT+ATN(YOBS/ZOBS)):SX=SIN(CF*XROT+ATN(YOBS/ZOBS))
390 CY=COS(CF*YROT+ATN(XOBS/ZOBS)):SY=SIN(CF*YROT+ATN(XOBS/ZOBS))
400 CZ=COS(CF*ZROT):SZ=SIN(CF*ZROT)
410 ZOBS=SQR(XOBS^2+ZOBS^2)        'Observer's distance from the globe's center
420 ZS=R^2/ZOBS                    'Can't see if point's Z coordinate < ZS
430 CLS:COLOR BCK,PAL
440 FOR I=0 TO 3 STEP PI/12         '24 lines of longitude around the poles
450      RC=(I*12/PI+2) MOD 3+1     'Prime meridian color=equator color
460      C$=STR$(RC)
470      FOR  J=0 TO 2.0001*PI STEP PI/24   'Step along the meridian circle
480             A=R*SIN(I)*SIN(J)
490             B=R*COS(J)
500             C=R*COS(I)*SIN(J)
510             GOSUB 710
520             GOSUB 810
530      NEXT
540 NEXT
550 FOR  I=PI/12 TO 11*PI/12 STEP PI/12     '11 lines of latitude between poles
560      RC=RC(I*12/PI)
570      C$=STR$(RC)
580      FOR  J=0 TO 2.0001*PI STEP PI/24    'Step along the parallel circle
590             A=R*SIN(I)*SIN(J)
600             B=R*COS(I)
610             C=R*SIN(I)*COS(J)
620             GOSUB 710
630             GOSUB 810
640      NEXT
650 NEXT
660 LOCATE 1,1:PRINT "PC WORLD"
670 LINE (32,1)-(38,1),0:LINE(32,2)-(38,2),3
680 LINE (32,3)-(38,3),0:LINE (32,4)-(38,4),3
690 LINE (32,5)-(38,5),0
700 GOSUB 1160:GOTO 1190
710 A1=A*CY-C*SY                'Turn requested meridian to observer at 0,0,0
720 C1=A*SY+C*CY                '(B1=B, so B is used below for B1)
730 B2=B*CX-C1*SX               'Turn requested parllel to observer at 0,0,0
740 C2=B*SX+C1*CX               '(A2=A1, so A1 is used below for A2
750 A3=A1*CZ-B2*SZ              'Turn image on axis perpendicular to screen
760 B3=A1*SZ+B2*CZ              '(C3=C2, so C2 is used below for C3)
770 DR=C2/(ZOBS-C2)+1           'Distance ratio for computing perspective
780 X=INT(A3*DR*ASP+XC)         'Screeen's x (with perspective & aspect ratios)
790 Y=INT(B3*-DR+YC)            'Screen's y (with perpspective, direction ratio)
800 RETURN                      '(z=c3=c2, so c2 is used below for z)
810 IF C2<ZS OR LZ<ZS THEN  B$="bc":GOTO  840  'insert ' before IF to draw back
820 Q=(X<0)+(X>319)+(Y<0)+(Y>199)+(LX<0)+(LX>319)                                     +(LY<0)+(LY>199)                      'Off screen?
830 IF Q+(J=0) THEN B$="bc" ELSE B$="c"     'Draw clear if Q or J=0 (new circle
840 'LX=X:LY=Y                               'lx,ly,lz are x,y,z of last reference point
850 LZ=C2
860 DRAW B$ + C$ + "M" + STR$(X) + "," + STR$(Y)
870 RETURN
880 XC=160:YC=100                          'Data for sample run
890 XOBS=-9:YOBS=0:ZOBS=456
900 XROT=37:YROT=-123:ZROT=23
910 R=100
920 BCK=0:PAL=1
930 ASP=1.21875
940 LOCATE 5,1                                      'Screen for sample run
950 PRINT"Enter screen location of center of globe";
960 PRINT "(e.g. 160,100)                  ?";XC","YC
970 PRINT
980 PRINT "Enter relative coordinates of observer:";
990 PRINT "points left(-)/right(+)of x, below(-)/"
1000 PRINT "above(+)y, and distance from the screen";
1010 PRINT "(e.g. -9,0,456)          ?";XOBS","YOBS","ZOBS
1020 PRINT
1030 PRINT "ENter parallel, meridian,& image's tilt";
1040 PRINT "(e.g.37,-123,23)         ?";XROT","YROT","ZROT
1050 PRINT
1060 PRINT "Enter sphere's radius"
1070 PRINT "(e.g. 100)               ?";R
1080 PRINT
1090 PRINT "Enter background color and palette"
1100 PRINT "(e.g.1,1)                ?";BCK","PAL
1110 PRINT
1120 PRINT "Enter this screen's aspect ratio"
1130 PRINT "(e.g.1.21875)            ?";ASP
1140 LOCATE 25,1
1150 PRINT "hit any key to continue";
1160 IF INKEY$>""THEN 1160
1170 IF INKEY$=""THEN 1170
1180 RETURN
1190 SCREEN 0,0,0,0:KEY  ON
1200 END
```

## TMDAY.BAS

```bas
10 '   c l o c k routine
15 DEFINT A-Z
20 DIM N$(11,4), DOW(6,8), MODY(11), AL$(26,4)
22 X$ = DATE$
23 IF RIGHT$(X$,2) < "83" THEN GOSUB 4000
40 N$(0,0) = "01110": N$(1,0) = "00100": N$(2,0) = "01110": N$(3,0) = "11110"
50 N$(0,1) = "10001": N$(1,1) = "01100": N$(2,1) = "10001": N$(3,1) = "00001"
60 N$(0,2) = "10001": N$(1,2) = "00100": N$(2,2) = "00010": N$(3,2) = "00110"
70 N$(0,3) = "10001": N$(1,3) = "00100": N$(2,3) = "01000": N$(3,3) = "00001"
80 N$(0,4) = "01110": N$(1,4) = "01110": N$(2,4) = "11111": N$(3,4) = "11110"
90 N$(4,0) = "00010": N$(5,0) = "11111": N$(6,0) = "01110": N$(7,0) = "11111"
100 N$(4,1) = "00110": N$(5,1) = "10000": N$(6,1) = "10000": N$(7,1) = "00001"
110 N$(4,2) = "01010": N$(5,2) = "11110": N$(6,2) = "11110": N$(7,2) = "00010"
120 N$(4,3) = "11111": N$(5,3) = "00001": N$(6,3) = "10001": N$(7,3) = "00100"
130 N$(4,4) = "00010": N$(5,4) = "11110": N$(6,4) = "01110": N$(7,4) = "00100"
140 N$(8,0) = "01110": N$(9,0) = "01110": N$(10,0) = "00000":N$(11,0) = "00000"
150 N$(8,1) = "10001": N$(9,1) = "10001": N$(10,1) = "00100":N$(11,1) = "00000"
160 N$(8,2) = "01110": N$(9,2) = "01111": N$(10,2) = "00000":N$(11,2) = "01110"
170 N$(8,3) = "10001": N$(9,3) = "00001": N$(10,3) = "00100":N$(11,3) = "00000"
180 N$(8,4) = "01110": N$(9,4) = "01110": N$(10,4) = "00000":N$(11,4) = "00000"
190 AL$(0,0) = "  A  ": AL$(1,0) = "BBBB ": AL$(2,0) = " CCCC"
200 AL$(0,1) = " A A ": AL$(1,1) = "B   B": AL$(2,1) = "C    "
210 AL$(0,2) = "A   A": AL$(1,2) = "BBBB ": AL$(2,2) = "C    "
220 AL$(0,3) = "AAAAA": AL$(1,3) = "B   B": AL$(2,3) = "C    "
230 AL$(0,4) = "A   A": AL$(1,4) = "BBBB ": AL$(2,4) = " CCCC"
240 AL$(3,0) = "DDDD ": AL$(4,0) = "EEEEE": AL$(5,0) = "FFFFF"
250 AL$(3,1) = "D   D": AL$(4,1) = "E    ": AL$(5,1) = "F    "
260 AL$(3,2) = "D   D": AL$(4,2) = "EEE  ": AL$(5,2) = "FFF  "
270 AL$(3,3) = "D   D": AL$(4,3) = "E    ": AL$(5,3) = "F    "
280 AL$(3,4) = "DDDD ": AL$(4,4) = "EEEEE": AL$(5,4) = "F    "
290 AL$(6,0) = " GGGG": AL$(7,0) = "H   H": AL$(8,0) = " III "
300 AL$(6,1) = "G    ": AL$(7,1) = "H   H": AL$(8,1) = "  I  "
310 AL$(6,2) = "G  GG": AL$(7,2) = "HHHHH": AL$(8,2) = "  I  "
320 AL$(6,3) = "G   G": AL$(7,3) = "H   H": AL$(8,3) = "  I  "
330 AL$(6,4) = " GGG ": AL$(7,4) = "H   H": AL$(8,4) = " III "
340 AL$(9,0) = " JJJ ": AL$(10,0) = "K   K": AL$(11,0) = "L    "
350 AL$(9,1) = "  J  ": AL$(10,1) = "K  K ": AL$(11,1) = "L    "
360 AL$(9,2) = "  J  ": AL$(10,2) = "KK   ": AL$(11,2) = "L    "
370 AL$(9,3) = "J J  ": AL$(10,3) = "K K  ": AL$(11,3) = "L    "
380 AL$(9,4) = " J   ": AL$(10,4) = "K  K ": AL$(11,4) = "LLLLL"
390 AL$(12,0) = "M   M": AL$(13,0) = "N   N": AL$(14,0) = " OOO "
400 AL$(12,1) = "MM MM": AL$(13,1) = "NN  N": AL$(14,1) = "O   O"
410 AL$(12,2) = "M M M": AL$(13,2) = "N N N": AL$(14,2) = "O   O"
420 AL$(12,3) = "M   M": AL$(13,3) = "N  NN": AL$(14,3) = "O   O"
430 AL$(12,4) = "M   M": AL$(13,4) = "N   N": AL$(14,4) = " OOO "
440 AL$(15,0) = "PPPP ": AL$(16,0) = " QQQ ": AL$(17,0) = "RRRR "
450 AL$(15,1) = "P   P": AL$(16,1) = "Q   Q": AL$(17,1) = "R   R"
460 AL$(15,2) = "PPPP ": AL$(16,2) = "Q   Q": AL$(17,2) = "RRRR "
470 AL$(15,3) = "P    ": AL$(16,3) = "Q Q Q": AL$(17,3) = "R R  "
480 AL$(15,4) = "P    ": AL$(16,4) = " QQQQ": AL$(17,4) = "R  R "
490 AL$(18,0) = " SSSS": AL$(19,0) = "TTTTT": AL$(20,0) = "U  U "
500 AL$(18,1) = "S    ": AL$(19,1) = "  T  ": AL$(20,1) = "U  U "
510 AL$(18,2) = " SSS ": AL$(19,2) = "  T  ": AL$(20,2) = "U  U "
520 AL$(18,3) = "    S": AL$(19,3) = "  T  ": AL$(20,3) = "U  U "
530 AL$(18,4) = "SSSS ": AL$(19,4) = "  T  ": AL$(20,4) = " UU U"
540 AL$(21,0) = "V   V": AL$(22,0) = "W   W": AL$(23,0) = "X   X"
550 AL$(21,1) = "V   V": AL$(22,1) = "W   W": AL$(23,1) = " X X "
560 AL$(21,2) = "V   V": AL$(22,2) = "W W W": AL$(23,2) = "  X  "
570 AL$(21,3) = " V V ": AL$(22,3) = "WW WW": AL$(23,3) = " X X "
580 AL$(21,4) = "  V  ": AL$(22,4) = "W   W": AL$(23,4) = "X   X"
590 AL$(24,0) = "Y   Y": AL$(25,0) = "ZZZZZ": AL$(26,0) = "     "
600 AL$(24,1) = " Y Y ": AL$(25,1) = "   Z ": AL$(26,1) = "     "
610 AL$(24,2) = "  Y  ": AL$(25,2) = "  Z  ": AL$(26,2) = "     "
620 AL$(24,3) = "  Y  ": AL$(25,3) = " Z   ": AL$(26,3) = "     "
630 AL$(24,4) = "  Y  ": AL$(25,4) = "ZZZZZ": AL$(26,4) = "     "
640 FOR I = 0 TO 11
650  READ MODY(I)
660 NEXT
670 DATA 0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304,334
675 DATA 5,17,8,3,0,24,26,26,26
680 DATA 18,0,19,20,17,3,0,24,26
690 DATA 18,20,13,3,0,24,26,26,26
700 DATA 12,14,13,3,0,24,26,26,26
710 DATA 19,20,4,18,3,0,24,26,26
720 DATA 22,4,3,13,4,18,3,0,24
730 DATA 19,7,20,17,18,3,0,24,26
750 FOR I = 0 TO 6
760 FOR J = 0 TO 8
770    READ DOW(I,J)
780 NEXT J,I
790 FOR I = 0 TO 26
800  FOR J = 0 TO 4
810   FOR K = 1 TO 5
820    IF MID$(AL$(I,J),K,1) <> " " THEN MID$(AL$(I,J),K,1) = CHR$(178)
830 NEXT K,J,I
2000 KEY OFF
2010 FOR I = 0 TO 11
2020 FOR J = 0 TO 4
2030 FOR K = 1 TO 5
2040 IF MID$(N$(I,J),K,1) = "0" THEN MID$(N$(I,J),K,1) = " " ELSE MID$(N$(I,J),K,1) = CHR$(178)
2050 NEXT K,J,I
2060 CLS
2070 K$= TIME$
2080 D1 = VAL(MID$(K$,1,1))
2090 D2 = VAL(MID$(K$,2,1))
2100 D3 = VAL(MID$(K$,4,1))
2110 D4 = VAL(MID$(K$,5,1))
2120 D5 = VAL(MID$(K$,7,1))
2130 D6 = VAL(MID$(K$,8,1))
2140 LOCATE 1,1,0
2150 FOR I = 0 TO 4
2160 PRINT N$(D1,I);" ";N$(D2,I);N$(10,I);N$(D3,I);" ";N$(D4,I);N$(10,I);N$(D5,I);" ";N$(D6,I)
2170 NEXT
2180 K$= DATE$
2190 IF K$ = OLDDT$ GOTO 3000 ELSE OLDDT$ = K$
2200 D1 = VAL(MID$(K$,1,1))
2210 D2 = VAL(MID$(K$,2,1))
2220 D3 = VAL(MID$(K$,4,1))
2230 D4 = VAL(MID$(K$,5,1))
2240 D5 = VAL(MID$(K$,7,1))
2250 D6 = VAL(MID$(K$,8,1))
2260 D7 = VAL(MID$(K$,9,1))
2270 D8 = VAL(MID$(K$,10,1))
2280 LOCATE 19,1,0
2290 FOR I = 0 TO 4
2300 PRINT N$(D1,I);" ";N$(D2,I);N$(11,I);N$(D3,I);" ";N$(D4,I);N$(11,I);N$(D5,I);" ";N$(D6,I);" ";N$(D7,I);" ";N$(D8,I)
2310 NEXT
2320 MON = VAL(LEFT$(K$,2))
2330 DAY = VAL(MID$(K$,4,2))
2340 YEAR = VAL(RIGHT$(K$,4))
2350 NDYS = MODY(MON-1) + DAY
2360 IF YEAR MOD 4 = 0 AND YEAR MOD 200 <> 0 AND MON > 2 THEN NDYS = NDYS + 1
2370 DW = NDYS MOD 7
2380 LOCATE 8,1
2390 FOR I = 0 TO 4
2400 FOR J = 0 TO 8
2410  PRINT AL$(DOW(DW,J),I);" ";
2420 NEXT J
2430 PRINT
2440 NEXT I
3000 A$ = INKEY$: IF A$="" THEN 2070
3005 CLS
3010 SYSTEM
3020 END
4000 CLS: LOCATE 1,1,1: PRINT "DATE AND TIME NEED TO BE INITIALIZED PLEASE ENTER:"
4010 INPUT "DATE (IN MM-DD-YY FORM):";X$
4020 DATE$ = X$
4030 PRINT: INPUT "TIME (IN HH-MM[-SS] FORM (SECONDS OPTIONAL)):",X$
4040 A = INSTR(X$,"-")
4050 H$ = LEFT$(X$,A-1)
4060 IF LEN(X$) > 5 THEN B = INSTR(A+1,X$,"-"): M$ = MID$(X$,A+1,(B - (A+1))):  S$ = RIGHT$(X$,(LEN(X$)-B)) ELSE M$ = RIGHT$(X$,(LEN(X$)- A)): S$ = "00"
4070 X$ = H$ + ":" + M$ + ":" + S$
4080 PRINT X$
4090 TIME$ = X$
4100 RETURN
```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk 0051

     Volume in drive A has no label
     Directory of A:\

    CRC      TXT      1169  11-09-84  10:48a
    CRCK4    COM      1536  10-21-82   7:54p
    FOUR     EXE     24704   1-01-80
    FUTRDATE BAS      3584   2-25-83   7:57p
    FUTRDATE DOC      3571   2-25-83   8:15p
    GOMOKU   DOC      1979  12-02-82
    GOMOKU   EXE     32128  10-08-82
    GOMOKU   PAS     10731  10-08-82
    HDD512   EXE      1152   2-02-83   7:24p
    HDS320   EXE      1152   2-02-83  10:22p
    HYPERDRV DOC     12032   2-04-83  11:23p
    INTERUPT MAC      3865  11-13-82   8:06p
    PCGLOBE  BAS      5376   3-02-83   6:51p
    RAMDISK  ASM     10368   2-02-83   7:20p
    TMDAY    BAS      6400   2-03-83  10:59p
           15 file(s)     119747 bytes
                           37376 bytes free
