---
layout: page
title: "PC-SIG Diskette Library (Disk #168)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0168/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0168"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "MUSIC AND EDUCATION"

    MUSIC/ED is a far-ranging collection of items.  The miscellaneous
    music includes the chance to write your own!  The educational pieces
    range widely, from ALGEBRA (a graphic function demo), to both SPELL
    and SPELLING BEE (to teach spelling skills), to BABYMATH (a visual
    display of a selected number of objects.  Other fun and educational
    programs are here too.  Have fun, and teach your children well.
    
    System Requirements:  Color graphics, two disk drives, BASIC
    
    How to Start:  To run BASIC program consult the directions in GETTING
    STARTED for your configuration.  Consult CLASROOM.DOC for program
    documentation.
    
    File Descriptions:
    
    MINUET2  BAS  Bach Minuet
    BABYMATH EXE  Select a number, displays a dot matrix  (Color req)
    ALGEBRA  BAS  Displays several algebra functions in 3-d  (Color req)
    PIANO1   BAS  Play the piano from your keyboard  (Color required)
    SPELL    BAS  Spelling bee
    PIANO2   BAS  Same as above, except it guides you through sample songs
    SPELL?   DAT  Data files for SPELLBEE.BAS (4 files)
    SPELLBEE BAS  Another spelling bee program
    SPELLDAT BAS  Part of SPELLBEE.BAS
    BACH2    BAS  Compose your own music  (Bach to BASIC Version 1.2)
    BACH     BAS  J. S. Bach Prelude 1 in C Major
    CHEMQUES BAS  Chemistry test aid
    BIBLE    BAS  The Bible Song
    CLASROLL BAS  Update, print class roll, attendance, labels
    CHEMTEST BAS  Chemistry test aid
    JESUSLOV BAS  Jesus Loves Me
    GODFATHR BAS  Theme from "The Godfather"
    COFFEE   BAS  Percolating coffee  (Color required)
    CLASROLL DOC  Documentation
    MINUET   BAS  Bach Minuet in D Minor
    STORY    BAS  Supply the words to complete the story
    TELLTIME BAS  Good way to teach youngster to tell time (Color req)
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## ALGEBRA.BAS

```bas

1 '****  ALGEBRA AND GEOMETRY PROGRAM
2 '** for the IBM PC...requires 32K and Color/Graphics
3 ON ERROR GOTO 800
5 CLEAR : KEY OFF : FALSE = 0 : TRUE = NOT FALSE
6 SCREEN 0 : WIDTH 80
7 '****  MONOCHROME SENSING ROUTINE
8 DEF SEG=&H40 : DISPLAY=PEEK(&H10)
9 IF (DISPLAY AND &H30) = &H30 THEN MONOCHROME = TRUE ELSE MONOCHROME = FALSE
10 SCREEN 0 : WIDTH 80
12 CLS : PRINT "ALGEBRA Graphics Program"
14 PRINT "    Steve VanArsdale"
16 PRINT "Mt.Prospect, Illinois  312-259-7224"
18 PRINT
20 PRINT "SELECT algebra function:"
30 PRINT "A ... for the SINE of X"
40 PRINT "B ... for the COSINE of X"
50 PRINT "C ... for the TANGENT of X"
51 PRINT "D ... for the SECANT of X"
52 PRINT "E ... for the COTANGENT of X"
53 PRINT "F ... for the COSECANT of X"
54 PRINT "G ... for the INVERSE HYPERBOLIC SINE of X"
55 PRINT "H ... for the SQUARE ROOT of X"
60 PRINT " > ";:CHOICE$=INPUT$(1)
70 IF CHOICE$ ="A" OR CHOICE$ = "a" THEN DEF FNFUNCTION(X)=SIN(X):FUNCTION$="SIN(X)":GOTO 110
80 IF CHOICE$ ="B" OR CHOICE$ = "b"  THEN DEF FNFUNCTION(X)=COS(X):FUNCTION$="COSINE(X)":GOTO 110
90 IF CHOICE$ ="C" OR CHOICE$ = "c" THEN DEF FNFUNCTION(X)=TAN(X):FUNCTION$="TANGENT(X)":GOTO 110
91 IF CHOICE$ ="D" OR CHOICE$ = "d" THEN DEF FNFUNCTION(X)=1/COS(X):FUNCTION$="SECANT(X)":GOTO 110
92 IF CHOICE$ ="E" OR CHOICE$ = "e" THEN DEF FNFUNCTION(X)=1/TAN(X):FUNCTION$="COTANGENT(X)":GOTO 110
93 IF CHOICE$ ="F" OR CHOICE$ = "f" THEN DEF FNFUNCTION(X)=1/SIN(X):FUNCTION$="COSECANT(X)":GOTO 110
94 IF CHOICE$ ="G" OR CHOICE$ = "g" THEN DEF FNFUNCTION(X)=LOG(X+SQR(X*X+1)):FUNCTION$="INVERSE HYPERBOLIC SINE(X)":GOTO 110
95 IF CHOICE$ ="H" OR CHOICE$ = "h" THEN DEF FNFUNCTION(X)=SQR(ABS(X)):FUNCTION$="SQ.RT(X)":GOTO 110
100 GOTO 10
110 PRINT "DEPTH OF ";FUNCTION$;" GRAPH (0 TO 50): ";:INPUT "",DEPTH
115 IF DEPTH < 0 OR DEPTH > 50 THEN GOTO 110
120 CLS:SCREEN 0 :WIDTH 80
155 '**** ACTIVATION OF COLOR/GRAPHICS MONITOR IF AVAILABLE ****
160 IF MONOCHROME = TRUE THEN WIDTH 80: DEF SEG=0: A=PEEK(&H410): POKE &H410,(A AND &HCF) OR &H20 : SCREEN 0 : WIDTH 80
170 SCREEN 0 :WIDTH 80
190 KEY(10) ON : ON KEY(10) GOSUB 800 : KEY(10) STOP
200 '****   GRAPHICS ROUTINE FOR ALGEBRAIC FUNCTIONS ****
205 CLS
210 SCREEN 1,0:COLOR 0,1
220 C=100:R=100
230 '** AXIS DRAWING ROUTINE
240 GOSUB 900
245 '** PLOTTING PARAMETERS DISPLAY
250 LOCATE 17,1:PRINT "GRAPH of:"
260 LOCATE 18,1:PRINT FUNCTION$
270 LOCATE 20,1:PRINT "  X     Y"
275 '** PLOTTING ROUTINE
277 X=0:Y=0:XX=-1:YY=FNFUNCTION(XX):PSET(100,100)
280 FOR X = -1 TO 7 STEP .1
290 LOCATE 21,1:PRINT USING "##.##";X
295 KEY(10) ON : KEY(10) STOP
300 Y = FNFUNCTION(X)
302 YLIMIT=98-30*Y : DEPTHLIMIT=100-30*Y-DEPTH : IF YLIMIT < 0 OR YLIMIT > 200 OR DEPTHLIMIT < 0 THEN GOTO 390
305 ON ERROR GOTO 1000
310 LOCATE 21,7:PRINT USING "##.##";Y
320 PSET(20*X+100,100-30*Y),2
330 IF DEPTH <> 0 THEN LINE (20*X+101,99-30*Y)-(20*X+100+DEPTH,100-30*Y-DEPTH),1
350 LINE (20*XX+100,100-30*YY)-(20*X+100,100-30*Y),2
360 IF DEPTH <> 0 THEN LINE (20*XX+100+DEPTH,100-30*YY-DEPTH)-(20*X+100+DEPTH,100-30*Y-DEPTH),2
390 XX=X:YY=Y
400 NEXT X
405 GOSUB 900
410 LOCATE 25,1: PRINT "ENTER  X  TO EXIT";:VALUE$=INPUT$(1)
415 IF VALUE$ <> "X" AND VALUE$ <> "x" THEN GOTO 10 ELSE CLS : KEY(10) ON
420 '****  SPECIAL EXIT DISPLAY ****
425 '** AXIS DRAWING SUBROUTINE
427 GOSUB 900
430 '** PLANE GRID DRAWING ROUTINE
431 FOR X = 10 TO R-10 STEP 10
432 LINE (C+X,R-X)-(105+C+X,R-X),1
433 LINE (C+X,R-X)-(C+X,0),1
434 LINE (C,R-X)-(195-X,5),1
435 LINE (C+X,R)-(195+X,5),1
436 NEXT X
438 LOCATE 1,22:PRINT " Z axis"
440 '** HOOP ROUTINE
450 CIRCLE (160,90),50,2,,,1
460 FOR I = 1 TO 20
470 CIRCLE STEP (1,-1),50,2,,,1
480 NEXT I
490 CIRCLE (160,90),50,0,,,1
500 '** ELLIPTICAL TUBE ROUTINE
505 CIRCLE (155,90),25,1,,,.5
510 FOR I = 1 TO 35
520 CIRCLE STEP (1,1),25,1,,,.5
530 NEXT I
540 CIRCLE STEP (1,1),25,0,,,.5
550 CIRCLE (155,90),25,0,0,3.14,.5
560 FOR I = 1 TO 20
570 CIRCLE STEP (1,-1),24,1,,,.5
580 NEXT I
590 CIRCLE (155,90),25,2,0,3.14,.5
600 '***  CONE ROUTINE
605 CIRCLE (45,55),38,3,,,1
610 FOR I = 1 TO 38
620 CIRCLE STEP (+1,-1),38-I,(I MOD 2)+2,,,1
630 NEXT I
640 CIRCLE (45,55),38,0,,,1
650 '**  GLOBE ROUTINE
655 CIRCLE (245,170),1,2,,,3
660 FOR I = 1 TO 10 STEP 1
670 CIRCLE STEP (+I/4,-I/4),I*4,1,,,1
680 NEXT I
690 FOR I = 10 TO 0 STEP -1
700 CIRCLE STEP (+I/4,-I/4),I*4,2,,,1
710 NEXT I
715 LINE -(245,170),3
720 '** PYRAMID ROUTINE
740 DRAW "BM10,150;C1;E30;F30;L60"
745 DRAW "BM+30,-28;D13"
750 LINE (40,135)-(11,149),1
760 LINE (40,135)-(69,149),1
770 '** CUBE ROUTINE
775 DRAW "BM265,85;C3;U30;R30;D30;L30"
780 DRAW "BM+20,-20;C3;U30;R30;D30;L30"
790 DRAW "C3;G20;BM+30,0;E20;BM+0,-30;G20;BM-30,0;E20"
799 LOCATE 25,1: PRINT "BYE.";
800 '**** TERMINATION LOGIC
805 IF MONOCHROME = TRUE THEN WIDTH 40: DEF SEG=0: A=PEEK(&H410): POKE &H410,A OR &H30 : SCREEN 0 : WIDTH 80 ELSE FOR I = 1 TO 2000 : NEXT I
840 CLS: PRINT "ALGEBRA Program Terminated."
845 END
900 '****  AXIS DRAWING SUBROUTINE ****
920 '****  AXIS DRAWING SUBROUTINE ****
921 LINE (C,0)-(C,199)
922 LINE (90,110)-(200,0)
924 LINE (0,R)-(319,R)
925 LOCATE 13,1:PRINT "X axis"
926 LOCATE 2,10:PRINT "Y axis"
927 LOCATE 1,22:PRINT " Z axis"
930 RETURN
1000 '****  CALCULATION ERROR HANDLER
1010 RESUME 390
1210 CLS : PRINT "ALGEBRA Graphics Program"
65399 '** DONE - PRESS ENTER TO RETURN TO MENU **
```

## BACH.BAS

```bas
10 KEY OFF:CLS
20 SCREEN 0
30 WIDTH 40
40 PRINT"░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░"
50 PRINT"░┌───────────────────────────────────┐░"
60 PRINT"░│                                   │░"
70 PRINT"░│            4028-A.BAS             │░"
80 PRINT"░│       PRELUDE 1 IN C MAJOR        │░"
90 PRINT"░│            J.S. BACH              │░"
100 PRINT"░│                                   │░"
110 PRINT"░│ BROUGHT TO YOU BY THE MEMBERS OF  │░"
120 PRINT"░│      ▄▄▄▄▄ ▄▄▄▄▄ ▄▄▄▄▄ ▄▄▄▄▄      │░"
130 PRINT"░│        █   █   █ █     █   █      │░"
140 PRINT"░│        █   █▄▄▄█ █     █   █      │░"
150 PRINT"░│        █   █     █     █   █      │░"
160 PRINT"░│      ▄▄█▄▄ █     █▄▄▄▄ █▄▄▄█      │░"
170 PRINT"░│                                   │░"
180 PRINT"░│      International PC Owners      │░"
190 PRINT"░│                                   │░"
200 PRINT"░│P.O. Box 10426, Pittsburgh PA 15234│░"
210 PRINT"░│                                   │░"
220 PRINT"░└───────────────────────────────────┘░"
230 PRINT"░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░"
240 PRINT
250 PRINT "       PRESS ANY KEY TO CONTINUE
260 A$=INKEY$: IF A$="" THEN 260
270 WIDTH 80
280 CLS
1000 '*************************************************************************       *             BACH'S WELL-TEMPERED CLAVIER, BOOK 1, PRELUDE 1           *       *                                                                       *
1010 '*                        programmed for the IBM-PC                      *       *                             by Jason Vollmer                          *       *************************************************************************
1020 '
1030 'This prelude is well-suited for the single voice of the PC. Every note of    the original piece is played. The tempo gradually slows in the last 2 meas-     ures, as a keyboardist might play it, and ends with the PC's approximation      of a chord.
1040 '
1050 'The user is given the option to change the tempo from the standard tempo       for this piece of 112 beats per minute.
1060 '
1070 ON ERROR GOTO 1990                        'Checks for advanced BASIC
1080 '
1090 '*************************************************************************       *                              LOAD THE NOTES                           *       *************************************************************************
1100 '
1110 ' The elements of the M$ array each contain the first 8 notes of the             prelude's  corresponding measure. For these 32 measures, line 1800 plays        each series of 8 notes twice, producing 16 sixteenth notes per measure.
1120 '
1130 ' Note: The PC does not require notes to be organized into measures.
1140 '
1150 DIM M$(32)
1160  M$(1) = "O3 CEG O4 CE O3 G O4 CE"
1170  M$(2) = "O3 CDA O4 DF O3 A O4 DF"
1180  M$(3) = "O2 B O3 DG O4 DF O3 G O4 DF"
1190  M$(4) =  M$(1)
1200  M$(5) = "O3 CEA O4 EA O3 A O4 EA"
1210  M$(6) = "O3 CDF#A O4 D O3 F#A O4 D"
1220  M$(7) = "O2 B O3 DG O4 DG O3 G O4 DG"
1230  M$(8) = "O2 B O3 CEG O4 C O3 EG O4 C"
1240  M$(9) = "O2 A O3 CEG O4 C O3 EG O4 C"
1250 M$(10) = "O2 DA O3 DF# O4 C O3 DF# O4 C"
1260 M$(11) = "O2 GB O3 DGBDGB"
1270 M$(12) = "O2 GB- O3 EG O4 C# O3 EG O4 C#"
1280 M$(13) = "O2 FA O3 DA O4 D O3 DA O4 D"
1290 M$(14) = "O2 FA- O3 DFBDFB"
1300 M$(15) = "O2 EG O3 CG O4 C O3 CG O4 C"
1310 M$(16) = "O2 EFA O3 CF O2 A O3 CF"
1320 M$(17) = "O2 DFA O3 CF O2 A O3 CF"
1330 M$(18) = "O1 G O2 DGB O3 F O2 GB O3 F"
1340 M$(19) = "O2 CEG O3 CE O2 G O3 CE"
1350 M$(20) = "O2 CGB- O3 CE O2 B- O3 CE"
1360 M$(21) = "O1 F O2 FA O3 CE O2 A O3 CE"
1370 M$(22) = "O1 F# O2 CA O3 CE- O2 A O3 CE-"
1380 M$(23) = "O1 A- O2 FB O3 CD O2 B O3 CD"
1390 M$(24) = "O1 G O2 FGB O3 D O2 GB O3 D"
1400 M$(25) = "O1 G O2 EG O3 CE O2 G O3 CE"
1410 M$(26) = "O1 G O2 DG O3 CF O2 G O3 CF"
1420 M$(27) =  M$(18)
1430 M$(28) = "O1 G O2 E-A O3 CF# O2 A O3 CF#"
1440 M$(29) = "O1 G O2 EG O3 CG O2 G O3 CG"
1450 M$(30) =  M$(26)
1460 M$(31) =  M$(18)
1470 M$(32) = "O1 C O2 CGB- O3 E O2 GB- O3 E"
1480 M33$   = "O1 C O2 CFA O3 CFC O2 A O3 C O2 AFAFDFD"
1490 M34A$  = "O1 CB O3 GB O4 DFD O3 B O4 D O3 BGB"
1500 M34B$  = "O3 DFED P32"
1510 ENDING.CHORD$ = "T255 L64 O1 C O2 C O3 EG O4 C1"
1520 '
1530 '*************************************************************************       *                     ALLOW THE USER TO CHANGE TEMPO                    *       *************************************************************************
1540 '
1550 SCREEN 0:WIDTH 80:CLS:PRINT "PRELUDE 1 - J.S. BACH":PRINT
1560 PRINT "Is standard tempo for this piece of 112 ok?"
1570 INPUT "  (Enter Y or N):  ",T$
1580 IF T$="Y" OR T$="y" THEN 1630
1590     INPUT "  Tempo desired (54-255): ";TEMPO
1600     IF TEMPO >=54 AND TEMPO<=255 THEN 1670
1610         PRINT "Invalid response"
1620         INPUT "Please enter a tempo between 54 and 255: ",TEMPO:GOTO 1600
1630 TEMPO=112
1640 '
1650 ' ************************************************************************        *                        SET THE SCREEN DISPLAY                        *        ************************************************************************
1660 '
1670 CLS:KEY OFF:PRINT "Now playing..."
1680 LOCATE 2,31:PRINT "P R E L U D E    1"
1690 LOCATE 4,30:PRINT "i n    C    M a j o r"
1700 LOCATE 8,37:PRINT "f r o m"
1710 LOCATE 12,15:PRINT "T H E    W E L L - T E M P E R E D    C L A V I E R"
1720 LOCATE 14,35:PRINT "B o o k    1"
1730 LOCATE 17,39:PRINT "b y"
1740 LOCATE 20,33:PRINT "J. S.   B A C H"
1750 '
1760 '*************************************************************************       *                             PLAY THE NOTES                            *       *************************************************************************
1770 '
1780 PLAY "ML T=TEMPO; L16"
1790 FOR I=1 TO 32
1800     PLAY "XM$(I); XM$(I);"
1810 NEXT
1820 TEMPO2=TEMPO*.9
1830 PLAY "T=TEMPO2; XM33$;"
1840 TEMPO3=TEMPO*.75
1850 PLAY "T=TEMPO3; XM34A$;"
1860 TEMPO4=TEMPO*.6
1870 PLAY "T=TEMPO4; XM34B$;"
1880 PLAY "T=TEMPO; XENDING.CHORD$;"
1890 '
1900 '*************************************************************************       *                         ALLOW REPLAY AND FINISH                       *       *************************************************************************
1910 '
1920 LOCATE 1,1:PRINT SPC(14)
1930 FOR I=1 TO 1500:NEXT           'Delay loop
1940 LOCATE 21,1:INPUT "Play again (Enter Y or N): ";A$
1950 IF A$="Y" OR A$="y" THEN 1550
1960 PRINT "End of music program"
1970 END
1980 '
1990 IF ERR=73 THEN CLS:                                                          PRINT "THIS PROGRAM USES THE 'PLAY' STATEMENT WHICH REQUIRES ADVANCED BASIC.":  PRINT "LOAD 'BASICA' AND RE-RUN.":END
2000 ON ERROR GOTO 0
```

## BACH2.BAS

```bas
10 REM *******************************************
15 REM *  BASIC COMPOSER (BACH TO BASIC)  1.2    *
20 REM *                 by                      *
25 REM *            PERRY LEOPOLD                *
30 REM *                                         *
35 REM *      copyright 1983 PERRY LEOPOLD       *
40 REM *          all rights reserved            *
45 REM *******************************************
50 CLEAR:KEY OFF:CLS:WIDTH 80:COLOR 15,5,14
55 QY=1:CL=1
60 QZ=0
65 LOCATE 10,15:INPUT "DO YOU WANT TO WORK ON A SONG YOU HAVE SAVED";X$
70 IF X$="Y" OR X$="y" THEN CLS:COLOR 15,2,14:LOCATE 10,20:INPUT "WHAT IS THE NAME OF THE SONG";C$ ELSE GOTO 85
75 OPEN "I",1,C$:INPUT #1,B$,EEEE$,EEE$,EE$,E$,AX$,T$:CLOSE:CX=1
80 GOSUB 570:GOTO 95
85 CLS:LOCATE 12,20:PRINT "WHAT DO YOU WANT TO CALL YOUR SONG"
90 LOCATE 16,28:COLOR 14,1,15:INPUT;B$
95 CLS
100 IF X$="N" OR X$="n" THEN E$="" ELSE E$=E$+AX$:GOSUB 310
105 CT=1
110 LOCATE 25,20:COLOR 15,4:PRINT "ENTER A  ?  FOR A LIST OF MORE OPTIONS"
115 LOCATE 1,26:COLOR 31,5,15:PRINT B$
120 FOR L=2 TO 10
125 LOCATE L,1:COLOR 14,4:PRINT TAB(80)
130 NEXT L
135 LOCATE 2,1:COLOR 14,1:GOSUB 585
140 FOR S=1 TO 5
145 LOCATE S+12,1:COLOR 15,3:PRINT "|_____________________________________________________________________________|"
150 NEXT
155 IF CT>1 THEN X$="Y":GOTO 240
160 IF X$="y" THEN X$="Y"
165 IF CX=1 OR AX$="X" THEN LOCATE 1,1:COLOR 15,0:PRINT "PARAMETERS="T$
166 IF CX=1 OR AX$="X" THEN LOCATE 22,15:COLOR 15,2:INPUT "DO YOU WANT TO CHANGE THE SONG'S PARAMETERS";XP$
170 IF XP$="Y" OR XP$="y" THEN GOTO 180
175 IF CX=1 THEN LOCATE 1,1:COLOR 15,0:PRINT "PARAMETERS="T$:CX=2:GOTO 240
180 LOCATE 22,1:COLOR 15,1:PRINT TAB(80)
181 LOCATE 22,17:INPUT "SET YOUR TEMPO <32=slowest / 255=fastest>";R$:S$="T":RS$=S$+R$
185 IF R$="?" THEN AX$="?":GOTO 490
190 LOCATE 22,1:COLOR 15,1:PRINT TAB(80)
191 LOCATE 22,7:INPUT "PICK WHAT OCTAVE THE SONG SHOULD START AT <1=lowest / 7=highest>";O$:P$="O":OP$=P$+O$
195 IF O$="?" THEN AX$="?":GOTO 490
200 TS=VAL(R$):TP=VAL(O$)
205 IF CX=2 THEN T$=T$ ELSE T$=RS$+OP$
210 ON ERROR GOTO 670
215 IF TS<32 OR TS>255 THEN ERROR 210
220 IF TP<1 OR TP>7 THEN ERROR 210
225 LOCATE 1,1:COLOR 15,1:PRINT TAB(18):LOCATE 1,1:COLOR 15,0:PRINT "OCTAVE="OP$:LOCATE 1,71:PRINT "TEMPO="RS$
230 REM       'ENTER NEW NOTES
235 REM '
240 GOSUB 395
245 LOCATE 12,2:PRINT EEEE$ EEE$ EE$ E$:LOCATE 19,1,1,7,0:COLOR 15,1:INPUT "ENTER NOTES";AX$
250 CT=CT+1:CL=CL+1
255 IF AX$="X" OR AX$="x" THEN GOTO 180
260 IF AX$="R" OR AX$="r" THEN F$="Y":GOSUB 570
265 IF AX$="@" THEN GOTO 450
270 IF AX$="?" THEN GOTO 490
275 IF AX$="*" THEN GOTO 545
280 IF AX$="0" THEN GOSUB 685:END
285 ON ERROR GOTO 650
290 LOCATE 15,3:PRINT AX$:PLAY T$+AX$:GOSUB 640 'CHANGE SUBROUTINE
295 IF CL=2 THEN CL=1:GOSUB 310
300 IF CT=2 THEN GOSUB 565
305 GOTO 140
310 W=1
315 IF LEN(EEEE$)+LEN(EEE$)<256 THEN EEEE$=EEEE$+EEE$:EEE$=""
320 IF LEN(EEE$)+LEN(EE$)<256 THEN EEE$=EEE$+EE$:EE$=""
325 IF LEN(EE$)+LEN(E$)<256 THEN EE$=EE$+E$:E$=""
330 AL=255-(LEN(E$))
335 BL=255-(LEN(EE$))
340 CL=255-(LEN(EEE$))
345 DL=255-(LEN(EEEE$))
350 LET B=(LEN(E$))-BL
355 LET C=(LEN(EE$))-BL
360 LET D=(LEN(EEE$))-BL
365 IF LEN(EEEE$)<255 AND (LEN(EEEE$)+LEN(EEE$))>255 THEN EEEE$=EEEE$+LEFT$(EEE$,DL):EEE$=RIGHT$(EEE$,D)
370 IF LEN(EEE$)<255 AND (LEN(EEE$)+LEN(EE$))>255 THEN EEE$=EEE$+LEFT$(EE$,CL):EE$=RIGHT$(EE$,C)
375 IF LEN(EE$)<255 AND (LEN(EE$)+LEN(E$))>255 THEN EE$=EE$+LEFT$(E$,BL):E$=RIGHT$(E$,B)
380 W=W+1:IF W<4 THEN GOTO 315
385 RETURN
390 RETURN
395 COLOR 15,1:LOCATE 18,1:PRINT TAB(80)
400 QZ=QZ+.66
405 QY=QY+2.66
410 IF QY>8 THEN QY=QY-QZ
415 IF QY<0 THEN QY=QY+2(QZ)
420 FOR Q=19 TO 24
425 QQ=(Q-18)+QY
430 LOCATE Q,1:COLOR 15,QQ:PRINT TAB(80)
435 NEXT Q
440 IF QZ>8 THEN QZ=1
445 RETURN
450 IF AX$="@" THEN LOCATE 19,1:PRINT TAB(80):ELSE RETURN
451 LOCATE 19,16:INPUT "HOW MANY TIMES DO YOU WANT THE SONG TO REPEAT";YZ
455 IF YZ>300 THEN GOTO 480
460 XYZ=1
465 LOCATE 21,1:PRINT TAB(80)
470 LOCATE 21,35:PRINT XYZ:PLAY T$+EEEE$:PLAY EEE$:PLAY EE$:PLAY E$:XYZ=XYZ+1
475 IF XYZ<YZ+1 THEN GOTO 470 ELSE GOTO 240
480 FOR J=18 TO 24
485 LOCATE J,1:PRINT TAB(80):NEXT J
486 LOCATE 21,4:PRINT "ARE YOU NUTS??? I'M NOT GOING TO REPEAT THIS THING"YZ"TIMES...TRY AGAIN!":GOTO 450
490 IF AX$="?" THEN LOCATE 19,1:PRINT TAB(80) ELSE RETURN
495 FOR J=18 TO 24
500 LOCATE J,1:PRINT TAB(80):NEXT J
505 LOCATE 18,13:PRINT "--- ENTER ANY OF THE FOLLOWING OPTIONS AT THE PROMPT ---"
510 LOCATE 20,11:PRINT "0 = SAVE SONG                X = CHANGE OCTAVE/TEMPO SETTINGS "
515 LOCATE 21,11:PRINT "R = REPEAT SONG              @ = REPEAT SONG X NUMBER OF TIMES"
520 LOCATE 22,11:PRINT "* = DISPLAY SONG & CLEAR MEMORY FOR RE-WRITING FROM BEGINNING"
521 LOCATE 23,1:INPUT "ENTER YOUR CHOICE";AX$
525 IF AX$="?" THEN LOCATE 19,11:COLOR 15,0:PRINT "       THAT'S ALL SHE WROTE...PLEASE ENTER YOUR CHOICE        "
526 IF AX$="?" THEN GOTO 510
530 FOR J=18 TO 24
535 LOCATE J,1:PRINT TAB(80):NEXT J
540 IF R$="?" OR O$="?" THEN GOTO 180 ELSE GOTO 250
545 IF AX$="*" THEN LOCATE 13,1:PRINT EEEE$ EEE$ EE$ E$:EEEE$="":EEE$="":EE$="":E$="":GOTO 240
550 REM '
555 REM       'REPEAT SONG REQUEST
560 REM '
565 IF AX$="R" THEN RETURN
570 IF F$="Y" OR X$="Y" THEN COLOR 15,1:LOCATE 20,25:PRINT "OK...HEAR GOES "B$"... "
571 IF F$="Y" OR X$="Y" THEN LOCATE 12,2:PRINT EEEE$" ":PRINT EEE$" ":PRINT EE$" ":PRINT E$
572 IF F$="Y" OR X$="Y" THEN PLAY T$+EEEE$:PLAY EEE$:PLAY EE$:PLAY E$:LOCATE 20,1:COLOR 15,4:PRINT TAB(80)
575 IF AX$="R" OR AX$="r" THEN AX$=""
580 RETURN
585 PRINT "--Possible Notes and Values--Rests--Octaves--------Tempo---------Misc. Syntax
590 PRINT "|  A   A-   A+  |  1 = Whole = P1 | O7  high |  T255 (fastest) |  MS = staccato
595 PRINT "|  B   B-   --  |  2 =  1/2  = P2 | O6   ^   |    ^            |  ML = legato
600 PRINT "|  C   --   C+  |  4 =  1/4  = P4 | O5   ^   |    ^            | L # = length
605 PRINT "|  D   D-   D+  |  8 =  1/8  = P8 | O4 mid C |  T120 (medium)  |  .  = dot note
610 PRINT "|  E   E-   --  | 16 =  1/16 = P16| O3   ^   |    ^            | N # plays any
615 PRINT "|  F   --   F+  | 32 =  1/32 = P32| O2   ^   |    ^            |of the 84 notes
620 PRINT "|  G   G-   G+  | 64 =  1/64 = P64| O1  low  |   T32 (slowest) | N 0 = rest
625 PRINT " "
630 PRINT "  Ex: 3 Blind Mice = E D C /fast= T190 EDC or E16 D16 C16 /slow=T40 E1 D1 C1":RETURN
635 PRINT " "
640 IF AX$="R" THEN AX$="":GOTO 245
641 LOCATE 19,1:COLOR 15,1:PRINT TAB(80)
642 LOCATE 19,15:COLOR 15,2:INPUT "DO YOU WANT TO CHANGE WHAT YOU JUST HEARD (Y/N)";L$
643 LOCATE 19,1:COLOR 15,4:PRINT TAB(80)
645 IF L$="Y" OR L$="y" THEN GOTO 245 ELSE E$=E$+AX$:RETURN
650 IF ERR=5 THEN FOR J=19 TO 24:LOCATE J,1:COLOR 15,4:PRINT TAB(80):NEXT J ELSE GOTO 660
651 LOCATE 22,2:PRINT "Uh oh...You goofed!  All numbers must come AFTER the notes...and 0 is not O."
655 LOCATE 23,3:PRINT "By the way...B+, C-, E+, and F- can't be used.  They don't musically exist.":RESUME 245
660 IF ERR=15 THEN FOR J=19 TO 24:LOCATE J,1:PRINT TAB(80):NEXT J ELSE GOTO 665
661 LOCATE 22,8:COLOR 15,4:PRINT "Oops...You can only enter so many notes at a time...Try it again...":RESUME 245
665 IF ERL=280 THEN GOSUB 685:END
670 IF ERR=210 THEN LOCATE 19,5:PRINT "You goofed...Be careful not to exceed the Octave and Tempo parameters."
675 IF ERL=215 THEN RESUME 180
680 IF ERL=220 THEN RESUME 190
685 LOCATE 22,23:COLOR 15,2:INPUT "DO YOU WANT TO SAVE THIS SONG";XX$
690 IF XX$="Y" THEN LOCATE 22,20:INPUT "DO YOU WANT TO CHANGE THE SONG'S NAME";XZ$
695 IF XZ$="Y" OR XZ$="y" THEN LOCATE 22,1:PRINT TAB(80):LOCATE 22,20:INPUT "WHAT WILL IT BE CALLED";B$
700 IF AX$="0" THEN AX$=" "
705 IF XX$="Y" THEN OPEN "O",1,B$:PRINT #1,B$;",";EEEE$;",";EEE$;",";EE$;",";E$;",";AX$;",";T$:CLOSE ELSE RETURN
706 LOCATE 24,20:COLOR 15,4:PRINT "REMEMBER --- YOUR SONG IS CALLED <"B$">"
710 END
715 REM ' This program was designed to run on advanced basic (BASICA) and was
720 REM ' meant to be run on 80 column color moniters.  Modifications for 40
725 REM ' column moniters are simple enough.  If your version of BASIC does not
730 REM ' support PLAY statements, those program lines may be modified to SOUND
735 REM ' statements. A data subroutine can then be included which will serve
740 REM ' as a table of frequency.  Durations may be entered individually or
745 REM ' assigned variables.
750 REM '
755 REM ' Feedback is welcomed.  Write to us c/o PAN, P.O. Box 454, Skippack,
760 REM ' PA 19474.  Source: STX453 / Compuserve: 70176,620 / Delphi: PAN
765 REM '
770 REM ' MAY THE SCORES BE WITH YOU...
```

## BIBLE.BAS

```bas
10 SCREEN 0,1
20 COLOR 15,1,1
30 CLS
40 PRINT " "
50 PRINT "         The  B-I-B-L-E"
60 PRINT " "
70 PRINT " "
80 PRINT " The"
90 PRINT " "
100 PLAY "mno2e"
110 LOCATE 5,8
120 PRINT "B"
130 PLAY "mno2g"
140 LOCATE 5,10
150 PRINT "I"
160 PLAY "mno2g"
170 LOCATE 5,12
180 PRINT "B"
190 PLAY "mno2g"
200 LOCATE 5,14
210 PRINT "L"
220 PLAY "mno2e"
230 LOCATE 5,16
240 PRINT "E"
250 PLAY "mno2l2gp16l4"
260 PLAY "mf"
270 PRINT " "
280 PRINT " Yes that's the book for me"
290 PRINT " "
300 PLAY "mno2gaaael2al4"
310 PRINT " I stand upon   the Word of God"
320 PRINT " "
330 PLAY "mno2abbl2bl8gl4bbl2bl4"
340 PRINT " The
350 PLAY "o2a"
360 LOCATE 11,8
370 PRINT "B"
380 PLAY "o2g"
390 LOCATE 11,10
400 PRINT "I"
410 PLAY "o2g"
420 LOCATE 11,12
430 PRINT "B"
440 PLAY "o2a"
450 LOCATE 11,14
460 PRINT "L"
470 PLAY "o2b"
480 LOCATE 11,16
490 PRINT "E"
500 PLAY "o3c"
510 PRINT " "
520 PRINT " "
530 PRINT " "
540 PRINT " "
```

## CHEMQUES.BAS

```bas
10 KEY OFF:CLS
20 SCREEN 0
30 WIDTH 40
40 PRINT"░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░"
50 PRINT"░┌───────────────────────────────────┐░"
60 PRINT"░│                                   │░"
70 PRINT"░│            5024-A.BAS             │░"
80 PRINT"░│        CHEMISTRY QUESTIONS        │░"
90 PRINT"░│                                   │░"
100 PRINT"░│                                   │░"
110 PRINT"░│ BROUGHT TO YOU BY THE MEMBERS OF  │░"
120 PRINT"░│      ▄▄▄▄▄ ▄▄▄▄▄ ▄▄▄▄▄ ▄▄▄▄▄      │░"
130 PRINT"░│        █   █   █ █     █   █      │░"
140 PRINT"░│        █   █▄▄▄█ █     █   █      │░"
150 PRINT"░│        █   █     █     █   █      │░"
160 PRINT"░│      ▄▄█▄▄ █     █▄▄▄▄ █▄▄▄█      │░"
170 PRINT"░│                                   │░"
180 PRINT"░│      International PC Owners      │░"
190 PRINT"░│                                   │░"
200 PRINT"░│P.O. Box 10426, Pittsburgh PA 15234│░"
210 PRINT"░│                                   │░"
220 PRINT"░└───────────────────────────────────┘░"
230 PRINT"░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░"
240 PRINT
250 PRINT "       PRESS ANY KEY TO CONTINUE
260 A$=INKEY$: IF A$="" THEN 260
270 WIDTH 80
280 CLS
1000 ' This program creates a question sheet for a teacher in the area of
1010 ' Concentration and dilution of solutions. The answer for the teacher
1020 ' are calculated from the randomly generated numbers.
1030 ' By seeding the random number with specific numbers control can be had
1040 ' over the content of the test.
1050 ' Written by Bill Cumming, Strathcona-Tweedsmuir School,
1060 ' Okotoks, Alberta, Canada, T0L 1T0
1070 ' February, 1982
1080 '
1090 RANDOMIZE
1100 DIM A(30,2)
1110 DIM C$(30)
1120 DIM K(20,20)
1130 FOR I=1 TO 30:FOR J=1 TO 2:READ A(I,J):NEXT J:NEXT I
1140 FOR I=1 TO 30:READ C$(I):NEXT I
1150 D=1
1160 GOSUB 1670
1170 INPUT "ANOTHER QUIZ Y/N ";X$
1180 IF X$="Y" THEN 1150
1190 GOTO 2320
1200 REM OUTPUT ANSWER KEY
1210 LPRINT :LPRINT :LPRINT
1220 LPRINT "KEY TO DRILL ";D:LPRINT
1230 FOR Y=1 TO N1
1240 LPRINT Y*100
1250 FOR X=1 TO 10:LPRINT X;K(Y,X),:NEXT X
1260 LPRINT
1270 NEXT Y
1280 RETURN
1290 LPRINT :FOR X=1 TO 80 :LPRINT "-";:NEXT X:LPRINT :RETURN
1300 LPRINT :LPRINT :REM STUDENT ANSWERS DELETED
1310 FOR X=1 TO 80 :LPRINT "-";:NEXT X
1320 LPRINT "                  STRATHCONA-TWEEDSMUIR SCHOOL"
1330 LPRINT Y*100;"       CHEM 20     CONCENTRATION CALCULATIONS       Name:_______________________"
1340 FOR X=1 TO 80 :LPRINT "-";:NEXT X:LPRINT :LPRINT
1350 RETURN
1360 N=10
1370 N1=1
1380 RETURN
1390 REM FORMULA WT CALCULATION
1400 IF A(I,2)=A(J,2) THEN 1420
1410 P=A(I,1)*A(J,2):C=A(J,1)*A(I,2):GOTO 1430
1420 P=A(I,1):C=A(J,1)
1430 F=P+C:P1=P/F*100:P1=INT(P1*100+.5)/100
1440 M=G/F:C=M/V
1450 RETURN
1460 I=INT(RND(1)*15+1):J=INT(RND(3)*15+16):G=RND(12)*70
1470 V=RND(1)*3
1480 V1=RND(1)*6
1490 V2=RND(1)*10
1500 V3=RND(1)*20:IF V3<1 THEN 1500
1510 V4=RND(1)*100
1520 C1=RND(1)
1530 C2=RND(1)*3
1540 C3=RND(4)*6
1550 C4=RND(1)*2
1560 M1=RND(2)*3
1570 RETURN
1580 DATA 26.98,3,18.05,1,137.33,2,52,3,63.55,2,55.85,2,55.85,3,40.08,2,207.19,2
1590 DATA 24.31,2,200.59,2,39.1,1,107.87,1,22.99,1,65.38,2,59.05,1,79.9,1
1600 DATA 60.01,2,35.45,1,116,2,61.02,1,17.01,1,62.01,1,46.01,1,126.9,1
1610 DATA 94.97,3,96.06,2,32.06,2,80.06,2,83.45,1
1620 DATA Aluminum,Ammonium,Barium,Chromiun,Copper(II),Iron(II),Iron(III)
1630 DATA Calcium,Lead(II),Magnesium,Mercury(II),Potassium,Silver,Sodium,Zinc
1640 DATA Acetate,Bromide,Carbonate,Chloride,Chromate,Hydrogen Carbonate
1650 DATA Hydroxide,Nitrate,Nitrite,Iodide,Phosphate,Sulfate,Sulfide
1660 DATA Sulfite,Chlorate
1670 PRINT "CONCENTRATION CALCULATIONS":PRINT
1680 INPUT "HOW MANY SETS";N1
1690 GOSUB 1460
1700 PRINT :PRINT
1710 FOR Y=1 TO N1
1720 LPRINT :LPRINT :GOSUB 1300
1730 LPRINT USING "(1)  WHAT IS THE MOLARITY OF ##.## LITRES OF A SOLUTION WITH ##.##";V;G
1740 LPRINT "     GRAMS OF ";C$(I);" "C$(J)
1750 GOSUB 1390
1760 K(Y,1)=C
1770 LPRINT :LPRINT :LPRINT :LPRINT
1780 GOSUB 1460
1790 LPRINT USING "(2)  HOW MANY MOLES ARE IN ###.# LITRES OF A #.### ";V4;C1
1800 LPRINT "     MOLAR SOLUTION OF ";C$(I);" ";C$(J)
1810 GOSUB 1390
1820 K(Y,2)=V4*C1
1830 LPRINT :LPRINT :LPRINT :LPRINT
1840 GOSUB 1460
1850 LPRINT USING "(3)  HOW MANY GRAMS IN ###.## MILILITRES OF A #.### MOLAR";V4;C2
1860 LPRINT "     SOLUTION OF ";C$(I);" "C$(J)
1870 GOSUB 1390
1880 K(Y,3)=(V4/1000)*C2*F
1890 LPRINT :LPRINT :LPRINT :LPRINT
1900 GOSUB 1460
1910 LPRINT USING "(4)  WHAT IS THE VOLUME OF A #.## MOLAR SOLUTION";C4
1920 LPRINT USING "     WHICH CONTAINS #.### MOLES OF SOLUTE";M1
1930 K(Y,4)=M1/C4
1940 LPRINT :LPRINT :LPRINT :LPRINT
1950 GOSUB 1460
1960 LPRINT USING "(5)   WHAT IS THE VOLUME OF A #.## MOLAR SOLUTION";C2
1970 LPRINT USING "      WHICH CONTAINS ###.## GRAMS OF THE COMPOUND";G
1980 LPRINT "      ";C$(I);" ";C$(J)
1990 GOSUB 1390
2000 K(Y,5)=M/C2
2010 LPRINT :LPRINT :LPRINT :LPRINT
2020 GOSUB 1460
2030 LPRINT USING "(6)   WHAT IS THE FINAL MOLARITY IF ##.## LITRES OF";V
2040 LPRINT USING "      A #.### MOLAR SOLUTION IS DILUTED TO  ##.## LITRES";C2;V3
2050 K(Y,6)=C2*V/V3
2060 LPRINT :LPRINT :LPRINT :LPRINT
2070 GOSUB 1460
2080 LPRINT USING "(7)   IF #.### LITRES OF SOLUTION IS DILUTED TO ##.# LITRES";V3;V4
2090 LPRINT USING "      MAKING A #.## MOLAR SOLUTION, WHAT WAS THE ORIGINAL CONCENTRATION";C1
2100 K(Y,7)=C1*V4/V3
2110 LPRINT :LPRINT :LPRINT :LPRINT
2120 GOSUB 1460
2130 LPRINT USING "(8)   IF #.## LITRES OF A #.## MOLAR SOLUTION ARE DILUTED TO";V1;C4
2140 LPRINT USING "      GIVE A #.## MOLAR SOLUTION, WHAT IS THE FINAL VOLUME?";C1
2150 K(Y,8)=V1*C4/C1
2160 LPRINT :LPRINT :LPRINT :LPRINT
2170 LPRINT USING "(9)   WHAT VOLUME OF A #.## MOLAR SOLUTION IS NEEDED TO MAKE";C3
2180 LPRINT USING "      ##.### LITRES OF A #.## MOLAR SOLUTION?";V4;C1
2190 K(Y,9)=C1*V4/C3
2200 LPRINT :LPRINT :LPRINT :LPRINT
2210 GOSUB 1460
2220 LPRINT USING "(10)  WHAT IS THE FINAL MOLARITY OF A SOLUTION MADE BY DISSOLVING ###.## GRAMS";G
2230 LPRINT "      OF ";C$(I);" ";C$(J);" TO PREPARE A SOLUTION OF"
2240 LPRINT USING "      #.## LITRES AND DILUTING TO ##.## LITRES ?";V2;V3
2250 LPRINT :LPRINT :LPRINT :LPRINT
2260 GOSUB 1290
2270 K(Y,10)=M/V3
2280 NEXT Y
2290 GOSUB 1200
2300 GOTO 1170
2310 NEXT Y
2320 END
```

## CHEMTEST.BAS

```bas
10 KEY OFF:CLS
20 SCREEN 0
30 WIDTH 40
40 PRINT"░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░"
50 PRINT"░┌───────────────────────────────────┐░"
60 PRINT"░│                                   │░"
70 PRINT"░│            5023-A.BAS             │░"
80 PRINT"░│          CHEMISTRY TEST           │░"
90 PRINT"░│                                   │░"
100 PRINT"░│                                   │░"
110 PRINT"░│ BROUGHT TO YOU BY THE MEMBERS OF  │░"
120 PRINT"░│      ▄▄▄▄▄ ▄▄▄▄▄ ▄▄▄▄▄ ▄▄▄▄▄      │░"
130 PRINT"░│        █   █   █ █     █   █      │░"
140 PRINT"░│        █   █▄▄▄█ █     █   █      │░"
150 PRINT"░│        █   █     █     █   █      │░"
160 PRINT"░│      ▄▄█▄▄ █     █▄▄▄▄ █▄▄▄█      │░"
170 PRINT"░│                                   │░"
180 PRINT"░│      International PC Owners      │░"
190 PRINT"░│                                   │░"
200 PRINT"░│P.O. Box 10426, Pittsburgh PA 15234│░"
210 PRINT"░│                                   │░"
220 PRINT"░└───────────────────────────────────┘░"
230 PRINT"░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░"
240 PRINT
250 PRINT "       PRESS ANY KEY TO CONTINUE
260 A$=INKEY$: IF A$="" THEN 260
270 WIDTH 80
280 CLS
1000 ' Written June 20, 1982 by Bill Cumming
1010 ' Strathcona-Tweedsmuir School, Okotoks, Alberta, Canada, T0L 1T0
1020 ' It will create random tests in four areas of Chemistry with ramdom numbers
1030 ' and calculates the answers for the teacher.
1040 ' Removing line 1190 and entering a specific random number seed allows the
1050 ' teacher to duplicate the numbers and quistions used.
1060 ' Paul Cauchon's book Chemistry with a Computer was used in the creation of
1070 ' this program.
1080 '
1090 CLS
1100 LOCATE 12,17:PRINT "CHEMICAL FORMULA PROBLEM GENERATOR"
1110 LOCATE 13,26:PRINT "W.G. CUMMING 1982"
1120 LOCATE 24,1 :PRINT "TO BEGIN HIT RETURN";:INPUT X
1130 CLS :LOCATE 10,1:PRINT "THE PROGRAM GENERATES QUESTIONS IN FOUR AREAS:"
1140 LOCATE 12,1:PRINT "THEY ARE:    1. CHEMICAL FORMULAS"
1150 LOCATE 13,14:PRINT "2. MOLAR MASS CALCULATIONS"
1160 LOCATE 14,14:PRINT "3. MASS TO MOLE PROBLEMS"
1170 LOCATE 15,14:PRINT "4. GRAM MOLE RELATIONS"
1180 LOCATE 18,1:PRINT "CHOOSE EACH AREA BY NUMBER":PRINT
1190 RANDOMIZE VAL(MID$(TIME$,1,7))
1200 DIM A(30,2)
1210 DIM C$(30)
1220 DIM K(10,20)
1230 FOR I=1 TO 30:FOR J=1 TO 2:READ A(I,J):NEXT J:NEXT I
1240 FOR I=1 TO 30:READ C$(I):NEXT I
1250 INPUT "WHICH QUIZ ";D
1260 ON D GOSUB 1700,1900,2100,2350
1270 INPUT "ANOTHER QUIZ Y/N ";X$
1280 IF X$="Y" THEN 1250
1290 GOTO 2600
1300 REM OUTPUT ANSWER KEY
1310 LPRINT CHR$(12)+CHR$(27);
1320 LPRINT "KEY TO DRILL";D;:LPRINT
1330 FOR Y=1 TO N1
1340 LPRINT Y*100
1350 FOR X=1 TO N:LPRINT X;K(Y,X),:NEXT X
1360 LPRINT
1370 NEXT Y
1380 RETURN
1390 FOR X=1 TO 80:LPRINT "-";:NEXT X
1400 ' line across
1410 LPRINT Y*100
1420 FOR X=1 TO 80 :LPRINT "-";:NEXT X:LPRINT
1430 RETURN
1440 I=INT(RND(1)*15+1):J=INT(RND(3)*15+16):RETURN
1450 INPUT "HOW MANY QUESTIONS PER SET";N
1460 INPUT "HOW MANY SETS(MAX 20) ";N1
1470 PRINT :PRINT
1480 RETURN
1490 D$=MID$(C$(I),1,3):IF D$="IRO" THEN LPRINT " IRON?":GOTO 1530
1500 IF D$="COP" THEN LPRINT " COPPER?":GOTO 1530
1510 IF D$="MER" THEN LPRINT " MERCURY?":GOTO 1530
1520 LPRINT C$(I);"?"
1530 RETURN
1540 REM FORMULA WT CALCULATION
1550 IF A(I,2)=A(J,2) THEN 1570
1560 P=A(I,1)*A(J,2):C=A(J,1)*A(I,2):GOTO 1580
1570 P=A(I,1):C=A(J,1)
1580 F=P+C:P1=P/F*100:P1=INT(P1*100+.5)/100
1590 M=T/F:M=INT(M*100+.5)/100:G=T1*F:G=INT(G*100+.5)/100
1600 RETURN
1610 DATA 26.98,3,18.05,1,137.33,2,52,3,63.55,2,55.85,2,55.85,3,40.08,2,207.19,2
1620 DATA 24.31,2,200.59,2,39.1,1,107.87,1,22.99,1,65.38,2,59.05,1,79.9,1
1630 DATA 60.01,2,35.45,1,116,2,61.02,1,17.01,1,62.01,1,46.01,1,126.9,1
1640 DATA 94.97,3,96.06,2,32.06,2,80.06,2,83.45,1
1650 DATA Aluminum,Ammonium,Barium,Chromium(III),Copper(II),Iron(II),Iron(III)
1660 DATA Calcium,Lead(II),Magnesium,Mercury(II),Potassium,Silver,Sodium,Zinc
1670 DATA Acetate,Bromide,Carbonate,Chloride,Chromate,Hydrogen Carbonate
1680 DATA Hydroxide,Nitrate,Nitrite,Iodide,Phosphate,Sulfate,Sulfide
1690 DATA Sulfite,Chlorate
1700 REM FORMULA QUIZ
1710 PRINT "THIS IS THE FORMULA QUIZ"
1720 PRINT :PRINT:INPUT "HOW MANY SETS ";N1
1730 INPUT "HOW MANY QUESTIONS PER SET ";N
1740 FOR Y=1 TO N1
1750 GOSUB 2610
1760 S=0
1770 LPRINT :LPRINT "GIVE THE FORMULA FOR EACH COMPOUND"
1780 LPRINT :LPRINT
1790 FOR X=1 TO N
1800 LPRINT "(";X;")   ";
1810 GOSUB 1440
1820 LPRINT C$(I);" ";C$(J)
1830 LPRINT :LPRINT
1840 NEXT X
1850 LPRINT :LPRINT
1860 FOR X=1 TO 80:LPRINT "-";:NEXT X
1870 LPRINT
1880 NEXT Y
1890 RETURN
1900 REM MOLAR MASS CALCULATIONS
1910 PRINT "MOLAR MASS QUESTIONS":PRINT
1920 GOSUB 1450
1930 FOR Y=1 TO N1
1940 GOSUB 2610
1950 LPRINT "MOLAR MASS QUESTIONS":LPRINT
1960 LPRINT "CALCULATE THE MOLAR MASS OF ONE MOLE OF EACH COMPOUND"
1970 LPRINT :LPRINT
1980 FOR X=1 TO N
1990 GOSUB 1440
2000 GOSUB 1540
2010 K(Y,X)=F
2020 LPRINT "(";X;")   ";
2030 LPRINT C$(I);" ";C$(J)
2040 LPRINT :LPRINT :LPRINT
2050 NEXT X
2060 GOSUB 1390
2070 NEXT Y
2080 GOSUB 1300
2090 RETURN
2100 REM MASS-MOLE PROBLEMS
2110 PRINT "MASS-MOLE PROBLEMS"
2120 GOSUB 1450
2130 S=0
2140 FOR Y=1 TO N1
2150 GOSUB 2610
2160 LPRINT "MASS-MOLE PROBLEMS":LPRINT
2170 FOR X=1 TO N
2180 GOSUB 1440
2190 T=INT(RND(1)*500+10):T1=INT(RND(1)*50+5)/10
2200 IF RND(1)>.5 THEN 2250
2210 LPRINT "(";X;")   HOW MANY MOLES OF ";C$(I);" ";C$(J);" IN A"
2220 LPRINT "        SAMPLE WEIGHING ";T;" GRAMS?"
2230 GOSUB 1540
2240 K(Y,X)=M:GOTO 2290
2250 LPRINT "(";X;")   HOW MUCH DO ";T1;" MOLES OF " ;
2260 LPRINT C$(I);" ";C$(J);" WEIGH?"
2270 GOSUB 1540
2280 K(Y,X)=G
2290 LPRINT :LPRINT :LPRINT
2300 NEXT X
2310 GOSUB 1390
2320 NEXT Y
2330 GOSUB 1300
2340 RETURN
2350 REM GRAMS TO MOLES
2360 PRINT "GRAM MOLE RELATIONSHIPS"
2370 GOSUB 1450
2380 FOR Y=1 TO N1
2390 GOSUB 2610
2400 LPRINT "GRAM MOLE RELATIONSHIPS"
2410 FOR X=1 TO N
2420 GOSUB 1440
2430 IF A(I,2)<>A(J,2) THEN 2460
2440 IF A(I,2)=1 THEN 2460
2450 GOTO 2420
2460 T=INT(RND(1)*1000+10):T1=INT(RND(1)*100+1)/10
2470 LPRINT "(";X;")   HOW MANY GRAMS OF ";C$(I);" ";C$(J)
2480 IF RND(1)>.5 THEN 2520
2490 LPRINT "        CAN BE MADE WITH ";T;" GRAMS OF ";:GOSUB 1490
2500 GOSUB 1540
2510 K(Y,X)=T/P*F:GOTO 2550
2520 LPRINT "        CAN BE MADE WITH ";T1;" MOLES OF ";:GOSUB 1490
2530 GOSUB 1540
2540 K(Y,X)=T1/A(J,2)*F
2550 LPRINT :LPRINT :LPRINT :NEXT X
2560 GOSUB 1390
2570 NEXT Y
2580 GOSUB 1300
2590 RETURN
2600 END
2610 LPRINT CHR$(27);
2620 LPRINT TAB(23)"STRATHCONA-TWEEDSMUIR SCHOOL"
2630 LPRINT Y*100;"CHEM 10                   PROBLEMS ABOUT MOLES         NAME___________________"
2640 FOR X=1 TO 80:LPRINT "-";:NEXT X:LPRINT :LPRINT
2650 RETURN
```

## CLASROLL.BAS

```bas
10 KEY OFF:CLS
20 PRINT"░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░"
30 PRINT"░┌───────────────────────────────────┐░"
40 PRINT"░│                                   │░"
50 PRINT"░│            7027-A.BAS             │░"
60 PRINT"░│            CLASS ROLL             │░"
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
1000 WIDTH 40
1010 OPEN "r",1,"class.rol",128
1020 FIELD 1,128 AS B$
1030 FIELD 1,24 AS CHILD$, 27 AS ADDRESS$, 13 AS CITY$, 2 AS ZIP$, 6 AS BIRTHDAY$, 8 AS PHONE$, 24 AS PARENT$, 23 AS TEXT$, 1 AS DEL$
1040 CLS
1050 PRINT "         *** Sunday School ***"
1060 PRINT
1070 PRINT "            ** Class Roll **"
1080 PRINT
1090 PRINT
1100 PRINT "1. Add a student"
1110 PRINT "2. Locate a student's record"
1120 PRINT "3. Print class roll"
1130 PRINT "4. Print address labels"
1140 PRINT "5. Stop run"
1150 PRINT
1160 PRINT " Enter your selection:"
1170 NP$= INKEY$: IF NP$="" GOTO 1170
1180 NP = VAL(NP$)
1190 ON NP GOTO 1220,1780,3010,2690,3560
1200 PRINT: PRINT "Did we make a mistake? Let's try again."
1210 GOTO 1170
1220 CLS
1230 PRINT "           **Add a Student**"
1240 PRINT
1250 PRINT "Enter `quit' if you wish"
1260 INPUT "Child's name  ";INCHILD$
1270 IF INCHILD$ = "quit" THEN GOTO 1040
1280 CLS
1290 PRINT INCHILD$
1300 PRINT
1310 INPUT "Address   ";INADDR$
1320 INPUT "City          ";INCITY$
1330 INPUT "Zip   (Enter 3 digit value)     ";INZIP
1340 INPUT "Birthday  (Enter date MMDDYY)   ";INBIRTHDAY$
1350 INPUT "Phone number (Enter xxx-xxxx) ";INPHONE$
1360 INPUT "Parents' name ";INPARENT$
1370 INPUT"Text          ";INTEXT$
1380 PRINT
1390 PRINT
1400 PRINT "1. Save this record"
1410 PRINT "2. Enter data again"
1420 PRINT "3. Return to inventory menu"
1430 PRINT
1440 PRINT " Enter your selection:"
1450 Q$ = INKEY$: IF Q$="" GOTO 1450
1460 Q = VAL(Q$)
1470 ON Q GOTO 1490,1280,1040
1480 PRINT: PRINT "Did we make a mistake? Let's try again.":GOTO 1450
1490 SS=1
1500 FOR V=1 TO 24
1510 IF MID$(INCHILD$,V,2)="" GOTO 1530
1520 NEXT V
1530 V=V-1
1540 GET 1,SS
1550 IF CHILD$="~~~~~~~~~~~~~~~~~~~~~~~~" THEN TT=SS+1:PUT 1,TT:GOTO 1680
1560 IF LEFT$(CHILD$,V) < LEFT$(INCHILD$,V) THEN SS=SS+1: GOTO 1540
1570 FIRST$ = B$
1580 TT=SS+1
1590 GET 1,TT
1600 SECOND$=B$
1610 LSET TEXT$=INTEXT$
1620 LSET B$ = FIRST$
1630 PUT 1,TT
1640 IF CHILD$="~~~~~~~~~~~~~~~~~~~~~~~~" THEN GOTO 1680
1650 FIRST$=SECOND$
1660 TT=TT+1
1670 GOTO 1590
1680 LSET CHILD$=INCHILD$
1690 LSET ADDRESS$=INADDR$
1700 IF INCITY$="" THEN LSET CITY$ = "Wichita" ELSE LSET CITY$=INCITY$
1710 LSET ZIP$=MKI$(INZIP)
1720 LSET BIRTHDAY$=INBIRTHDAY$
1730 LSET PHONE$=INPHONE$
1740 LSET PARENT$=INPARENT$
1750 LSET TEXT$=INTEXT$
1760 PUT 1,SS
1770 GOTO 1220
1780 SS=1
1790 CLS: INPUT "What is child's name";INCHILD$
1800 FOR V=1 TO 24
1810 IF MID$(INCHILD$,V,2)="" GOTO 1830
1820 NEXT V
1830 V=V-1
1840 GET 1,SS
1850 IF LEFT$(CHILD$,V) < LEFT$(INCHILD$,V) THEN SS=SS+1: GOTO 1840
1860 IF LEFT$(CHILD$,V) > LEFT$(INCHILD$,V) THEN CLS:PRINT: PRINT "Student not found": PRINT: PRINT: GOTO 1050
1870 CLS
1880 PRINT "     ** Record #";SS;"on file **
1890 IF DEL$="x" THEN PRINT: PRINT "This child is inactive."
1900 PRINT
1910 PRINT CHILD$
1920 PRINT ADDRESS$
1930 PRINT CITY$
1940 ZIP=CVI(ZIP$)
1950 ZIPPY$=STR$(ZIP)
1960 IF ZIP<10 THEN ZIPI$="6700" +MID$(ZIPPY$,2,3): GOTO 1990
1970 IF ZIP<100 THEN ZIPI$="670" +MID$(ZIPPY$,2,3): GOTO 1990
1980 ZIPI$="67"+MID$(ZIPPY$,2,3)
1990 PRINT ZIPI$
2000 PRINT
2010 PRINT "Birthday:        ";BIRTHDAY$
2020 PRINT "Phone number:    ";PHONE$
2030 PRINT "Parents:  ";PARENT$
2040 PRINT
2050 PRINT TEXT$
2060 PRINT
2070 PRINT "1. Change student record"
2080 PRINT "2. Erase student record"
2090 PRINT "3. Activate / Deactivate student"
2100 PRINT "4. Return to first menu"
2110 PRINT
2120 PRINT " Enter your selection:"
2130 N$= INKEY$: IF N$="" GOTO 2130
2140 N = VAL(N$)
2150 ON N GOTO 2190,2590,3530,1040
2160 PRINT: PRINT "Did we make a mistake? Let's try again."
2170 GOTO 2130
2180 RETURN
2190 CLS
2200 PRINT "Which field do you wish to change?"
2210 PRINT
2220 PRINT"  1. Address"
2230 PRINT"  2. City"
2240 PRINT"  3. Zip"
2250 PRINT"  4. Birthday"
2260 PRINT"  5. Phone number"
2270 PRINT"  6. Parents name"
2280 PRINT"  7. Text"
2290 NQ$ = INKEY$: IF NQ$="" GOTO 2290
2300 CLS
2310 PRINT "         **Change a Record**""
2320 PRINT
2330 NQ=VAL(NQ$)
2340 ON NQ GOTO 2370,2390,2410,2430,2440,2460,2480
2350 PRINT: PRINT "Did we make a mistake? Let's try again."
2360 GOTO 2200
2370 INPUT "Address   ";INADDR$
2380 LSET ADDRESS$=INADDR$: GOTO 2500
2390 INPUT "City             ";INCITY$
2400 LSET CITY$=INCITY$: GOTO 2500
2410 INPUT "Zip   (Enter 3 digit value)     ";INZIP
2420 LSET ZIP$=MKI$(INZIP): GOTO 2500
2430 INPUT "Birthday (MMDDYY)";INBIRTHDAY$: LSET BIRTHDAY$=INBIRTHDAY$:GOTO 2500
2440 INPUT "Phone number  ";INPHONE$
2450 LSET PHONE$=INPHONE$: GOTO 2500
2460 INPUT "Parents name  ";INPARENT$
2470 LSET PARENT$=INPARENT$: GOTO 2500
2480 PRINT TEXT$
2490 INPUT "Text      ";INTEXT$: LSET TEXT$=INTEXT$
2500 PRINT
2510 PRINT "Another change?(y/n)"
2520 NQ$ = INKEY$: IF NQ$="" GOTO 2520
2530 IF NQ$="y" GOTO 2190
2540 IF NQ$="n" THEN GOTO 2570
2550 PRINT: PRINT "Did we make a mistake? Let's try again."
2560 GOTO 2520
2570 PUT 1,SS
2580 GOTO 1870
2590 PRINT:PRINT "You selected the erase option."
2600 PRINT "Do you wish to continue (y or n)?"
2610 E$=INKEY$:IF E$="" GOTO 2610
2620 IF E$="y" THEN GOTO 2630 ELSE GOTO 1040
2630 TT=SS+1
2640 GET 1,TT
2650 PUT 1,SS
2660 IF CHILD$="~~~~~~~~~~~~~~~~~~~~~~~~" THEN GOTO 1040
2670 SS=SS+1
2680 GOTO 2630
2690 ON ERROR GOTO 2760
2700 CLS
2710 PRINT "You chose the option to print labels."
2720 PRINT "Please align labels in printer."
2730 PRINT "Press the enter key whe you are ready."
2740 INPUT "To cancel, enter `quit'";N$
2750 IF N$ = "quit" GOTO 1040
2760 IF ERR = 24 THEN RESUME
2770 T=3
2780 L=6
2790 LPRINT CHR$(27)"E"
2800 LPRINT CHR$(27)"C";CHR$(L)
2810 FOR SS=1 TO 100
2820 GET 1,SS
2830 IF CHILD$="~~~~~~~~~~~~~~~~~~~~~~~~" GOTO 1040
2840 IF DEL$="x" THEN GOTO 3000
2850 LPRINT TAB(T);CHILD$
2860 LPRINT TAB(T);ADDRESS$
2870 FOR V=1 TO 13
2880 IF MID$(CITY$,V,2) = "  " GOTO 2900
2890 NEXT V
2900 V=V-1
2910 CITYCOND$=LEFT$(CITY$,V)
2920 LPRINT TAB(T);CITYCOND$;", Kansas"
2930 ZIP=CVI(ZIP$)
2940 ZIPPY$=STR$(ZIP)
2950 IF ZIP<10 THEN ZIPI$="6700" +MID$(ZIPPY$,2,3): GOTO 2980
2960 IF ZIP<100 THEN ZIPI$="670" +MID$(ZIPPY$,2,3): GOTO 2980
2970 ZIPI$="67"+MID$(ZIPPY$,2,3)
2980 LPRINT TAB(T);ZIPI$
2990 LPRINT CHR$(12)
3000 NEXT SS
3010 CLS
3020 PRINT "You chose option to print class roll."
3030 PRINT "Please align paper in printer."
3040 PRINT "Enter month desired when you are ready."
3050 INPUT "To cancel, enter `quit'";MONTH$
3060 IF MONTH$ = "quit" GOTO 1040
3070 CLS:PRINT "What is the the first Sunday in ";MONTH$;
3080 INPUT SUNDAY
3090 PRINT:PRINT "How many Sundays are in ";MONTH$;
3100 INPUT WEEKS$
3110 I=0
3120 SS=1
3130 LPRINT CHR$(27)"G"
3140 LPRINT CHR$(15);CHR$(14);TAB(22);"Class Enrollment Form":LPRINT CHR$(18)
3150 LPRINT:LPRINT "Department: 2 YEAR OLDS";TAB(50);"Month: ";MONTH$
3160 LPRINT
3170 LPRINT TAB(40);SUNDAY;
3180 LPRINT TAB(48);SUNDAY+7;
3190 LPRINT TAB(56);SUNDAY+14;
3200 LPRINT TAB(64);SUNDAY+21;
3210 IF WEEKS$="5" THEN LPRINT TAB(72);SUNDAY+28
3220 LPRINT
3230 I=I+1
3240 J=1
3250 GET 1,SS
3260 IF CHILD$="~~~~~~~~~~~~~~~~~~~~~~~~" GOTO 1040
3270 LPRINT CHR$(15);CHR$(14);SS;". ";CHILD$;
3280 IF DEL$= "x" THEN LPRINT "Inactive" ELSE LPRINT
3290 LPRINT CHR$(18);
3300 MO$=MID$(BIRTHDAY$,1,2)
3310 DY$=MID$(BIRTHDAY$,3,2)
3320 YR$=MID$(BIRTHDAY$,5,2)
3330 LPRINT ADDRESS$;MO$;"-";DY$;"-";YR$;TAB(40);"SS___";TAB(48);"SS___";TAB(56);"SS___";TAB(64);"SS___";
3340 IF WEEKS$ = "5" THEN LPRINT TAB(72);"SS___" ELSE LPRINT
3350 ZIP=CVI(ZIP$)
3360 ZIPPY$=STR$(ZIP)
3370 ZIPI$="67"+MID$(ZIPPY$,2,3)
3380 IF ZIP<10 THEN ZIPI$="6700" +MID$(ZIPPY$,2,3): GOTO 3400
3390 IF ZIP<100 THEN ZIPI$="670" +MID$(ZIPPY$,2,3): GOTO 3400
3400 LPRINT CITY$;"  ";ZIPI$;"       ";PHONE$;TAB(40);"C___";TAB(48);"C___";TAB(56);"C___";TAB(64);"C___";
3410 IF WEEKS$ = "5" THEN LPRINT TAB(72);"C___" ELSE LPRINT
3420 FOR V=1 TO 24
3430 IF MID$(PARENT$,V,2)="  " GOTO 3450
3440 NEXT V
3450 V=V-1
3460 CONDPARENT$=LEFT$(PARENT$,V)
3470 LPRINT CONDPARENT$;" / ";TEXT$
3480 SS=SS+1: J=J+1
3490 IF J<11 THEN LPRINT:GOTO 3250
3500 LPRINT:LPRINT:LPRINT TAB(33);"--";I;"--"
3510 LPRINT CHR$(12)
3520 GOTO 3140
3530 IF DEL$="x" THEN LSET DEL$=" " ELSE LSET DEL$ = "x"
3540 PUT 1,SS
3550 GOTO 1870
3560 CLOSE:STOP
```

## COFFEE.BAS

```bas
10 '     save"coffee.bas
20 '
30 '*********** written by Mike Alling *******************
40 ' *******the Lone Ranger was written by Tom Sorber **********
50 KEY OFF
60 CLS
70 WIDTH 40
80 SCREEN 1,0
90 COLOR 0,0
100 'GOSUB 2000 'PLAY INITIAL SONG
110 DIM X(100),Y(100)
120 FOR I=1 TO 100
130 LET Y(I)=-I
140 NEXT I
150 FOR J=0 TO 90 STEP 10
160 FOR I=1 TO 10
170 LET X(I+J)=I
180 NEXT I
190 NEXT J
200 FOR J=10 TO 90 STEP 20
210 FOR I=1 TO 10
220 LET X(I+J)=10-I
230 NEXT I
240 NEXT J
250 DIM PFACESL(250),CFACESL(150),CFACESL1(150),PERKA(100),PERKA2(100)
260 DIM PFACEST(250)
270 DIM PFACEAW(350),CFACEAW(200),CFACEAW1(250)
280 DIM CFACECR(150)
290 DIM PFACEOP(350),CFACEOP(200)
300 GOSUB 1630 ' draw the empty pot/cups
310 '*******SLEEPING FACE ON POT******
320 DRAW "s4" 'reset scale back to normal
330 DRAW "BM200,70"
340 DRAW "R12 BM+16,+0 R12" 'EYEBROWS
350 DRAW "BM195,75" 'NOW THE EYES
360 DRAW "R16 M-2,+32 L12 R2 M-4,-32"
370 DRAW "BM+28,+0 M+2,+32 R12 L2 M+4,-32 L16"
380 DRAW "BM-2,+28 M+6,+20 M-6,+6 M-6,-6 M+2,-2" 'HERE'S THE NOSE
390 DRAW "BM-15,+4 M-4,+8 M+2,-4 M+4,+8 R25 M+12,-8 M-4,-4 M+8,+8" 'MOUTH
400 '***SLEEPING FACE ON CUPS****
410 DRAW "S2"
420 DRAW "BM100,114"
430 DRAW "R12 BM+16,+0 R12" 'EYEBROWS
440 DRAW "BM-46,+8" 'NOW THE EYES
450 DRAW "R16 M-2,+32 L12 R2 M-4,-32"
460 DRAW "BM+28,+0 M+2,+32 R12 L2 M+4,-32 L16"
470 DRAW "BM-2,+28 M+6,+20 M-6,+6 M-6,-6 M+2,-2" 'HERE'S THE NOSE
480 DRAW "BM-15,+4 M-4,+8 M+2,-4 M+4,+8 R25 M+12,-8 M-4,-4 M+8,+8" 'MOUTH
490 '***SLEEPING FACE ON CUPS****
500 DRAW "BM20,114"
510 DRAW "R12 BM+16,+0 R12" 'EYEBROWS
520 DRAW "BM-46,+8" 'NOW THE EYES
530 DRAW "R16 M-2,+32 L12 R2 M-4,-32"
540 DRAW "BM+28,+0 M+2,+32 R12 L2 M+4,-32 L16"
550 DRAW "BM-2,+28 M+6,+20 M-6,+6 M-6,-6 M+2,-2" 'HERE'S THE NOSE
560 DRAW "BM-15,+4 M-4,+8 M+2,-4 M+4,+8 R25 M+12,-8 M-4,-4 M+8,+8" 'MOUTH
570 '********************************
580 '*****SAVE THE POT SLEEPY FACES ****
590 GET (195,70)-STEP(50,70),PFACESL
600 'PUT (195,70),PFACESL
610 '******SAVE CUPS SLEEPY FACE ****
620 GET (15,110)-STEP(32,40),CFACESL1
630 'PUT (15,110),CFACESL1
640 GET (96,110)-STEP(32,40),CFACESL
650 'PUT (96,110),CFACESL
660 PLAY "MBO2L16AP1AP16FP16AP1" '4
670 GOSUB 2720
680 FOR I=1 TO 1750:NEXT
690 GOSUB 2810
700 PLAY "MBO2L16FP16AO3P16CP1" '3 NOTES
710 GOSUB 2810:FOR I=1 TO 1500:NEXT
720 GOSUB 2810:FOR I=1 TO 100:NEXT
730 GOSUB 2810:FOR I=1 TO 2000:NEXT
740 PLAY "MBO2L16AP2FP16AO3P16CP1" '*4*
750 GOSUB 2810:FOR I=1 TO 100:NEXT
760 GOSUB 2810:FOR I=1 TO 100:NEXT
770 GOSUB 2810:FOR I=1 TO 100:NEXT
780 '*******POT NUMBER 2 START WAKE UP
790 DRAW "S4" 'NORMAL SCALE.
800 PUT (195,70),PFACESL 'ERASE CURRENT
810 DRAW "BM200,70"
820 DRAW "R12 NM+2,+2 BM+16,+0 R12 NM+2,+2" 'EYEBROWS
830 DRAW "BM195,75" 'NOW THE EYES
840 DRAW "R16 M-2,+32 L10 M-4,-32"
850 DRAW "BM+28,+0 M+2,+32 R10 M+4,-32 L16"
860 DRAW "BM-30,20 R17 L9 D12"
870 PAINT STEP(+1,-1)
880 DRAW "BM+22,-11 R17 L9 D12"
890 PAINT STEP(-1,-1)
900 DRAW "BM-11,-03 M+6,+20 M-6,+6 M-6,-6 M+2,-2" 'HERE'S THE NOSE
910 DRAW "BM-15,+4 M-6,+4 M+2,-2 M+16,+8 R12 M+14,-12 NM-3,-3 M+3,+3" 'MOUTH
920 GET (193,70)-STEP(50,70),PFACEST
930 'PUT (193,70),PFACEST
940 PLAY "MBL8O2AFAFO3DP8CP4O2L8FAO3CDP8L8DP8"
950 FOR I=1 TO 5:GOSUB 2810:FOR K=1 TO 500 :NEXT:NEXT
960 PLAY "MBL8O3AFAFO4DP8CP4O3L8FAO4CDP8L8DP8"
970 FOR I=1 TO 5:GOSUB 2810:FOR K=1 TO 300 :NEXT:NEXT
980 PLAY "MBL16O3AFAFO4DP16CP8O3L16FAO4CDP16L16DP16"
990 FOR I=1 TO 5:GOSUB 2810:NEXT
1000 '**** SCREEN...POT NUMBER 3..WAKE UP
1010 'FIRST WAKE UP THE POT....
1020 DRAW "S4" 'NORMAL SCALE.
1030 PUT (193,70),PFACEST
1040 DRAW "BM195,70"
1050 DRAW "R10 NM+3,-3 BM+23,+0 NM-3,-3 R10 " 'EYEBROWS
1060 DRAW "BM195,75" 'NOW THE EYES
1070 DRAW "R16 M-2,+32 L10 M-4,-32 NM-4,-4" 'DRAW THE EYELASH AND EYE
1080 DRAW "BM+28,+0 M+2,+32 R10 M+4,-32 NM+4,-4 L16"
1090 DRAW "BM+8,+0 D17 L7 "
1100 PAINT STEP(+1,-1)
1110 DRAW "BM-15,+1 L7 U17"
1120 PAINT STEP(+1,+1)
1130 DRAW "BM+14,+28 M+6,+20 M-6,+6 M-6,-6 M+2,-2" 'HERE'S THE NOSE
1140 DRAW "BM-15,+4 M-2,+8 M+1,-4 M+32,+15  M+10,-16 NM-3,-3 M+3,+3" 'MOUTH
1150 GET (185,65)-STEP(60,80),PFACEAW
1160 PLAY "O4L2CO3P4L4BL2O4CO3P4L4AL4BO4CO3BGL2EP4"
1170 FOR I=1 TO 5:GOSUB 2810:FOR K=1 TO 500 :NEXT:NEXT
1180 PLAY "P4O3L2AP4L4G#L2AG-L2G#"
1190 'PUT (193,70),PFACEAW
1200 '*****NOW WAKE UP THE CUPS *****
1210 PLAY "MBL8O3AFAFO4DP8CP4O3L8FAO4CDP8L8DP8" 'SLOW LOW
1220 FOR I=1 TO 5:GOSUB 2810:FOR K=1 TO 500 :NEXT:NEXT
1230 DRAW "S2" 'SET SMALL SCALE
1240 PUT (96,110),CFACESL
1250 DRAW "BM100,114"
1260 DRAW "R12 BM+16,+0 R12" 'EYEBROWS
1270 DRAW "BM-46,+8" 'NOW THE EYES
1280 DRAW "R16 M-2,+32 L12 R2 M-4,-32"
1290 DRAW "BM+28,+0 M+2,+32 R12 L2 M+4,-32 L16"
1300 DRAW "BM-2,+28 M+6,+20 M-6,+6 M-6,-6 M+2,-2" 'HERE'S THE NOSE
1310 DRAW "BM-15,+6 M-4,+8 M+2,-4 R40  M-4,-4 M+8,+8" 'MOUTH
1320 DRAW "BM96,118 R8 ND16 R8 NM+4,-4 M-1,+16 NL8" 'DRAW LEFT EYE
1330 PAINT STEP(-1,-1) 'PAINT LEFT EYE
1340 DRAW "BM+16,-14 R16 NM+4,-4 L12 D16 R8"'DRAW RIGHT EYE
1350 PAINT STEP(-1,-1)'PAINT IT
1360 GET (96,110)-STEP(32,40),CFACEAW
1370 '**********WAKE UP THE LEFT CUP**
1380 PLAY "MBL16O3AFAFO4DP16CP8O3L16FAO4CDP16L16DP16" 'FAST HIGH
1390 FOR I=1 TO 5:GOSUB 2810:NEXT
1400 PUT (15,110),CFACESL1
1410 DRAW "BM20,114"
1420 DRAW "R12 BM+16,+0 R12" 'EYEBROWS
1430 DRAW "BM-46,+8" 'NOW THE EYES
1440 DRAW "R16 M-2,+32 L12 R2 M-4,-32"
1450 DRAW "BM+28,+0 M+2,+32 R12 L2 M+4,-32 L16"
1460 DRAW "BM-2,+28 M+6,+20 M-6,+6 M-6,-6 M+2,-2" 'HERE'S THE NOSE
1470 DRAW "BM-15,+6 M-4,+8 M+2,-4 R40  M-4,-4 M+8,+8" 'MOUTH
1480 DRAW "BM17,118 R8 ND16 R8 NM+4,-4 M-1,+16 NL8" 'DRAW LEFT EYE
1490 PAINT STEP(-1,-1) 'PAINT LEFT EYE
1500 DRAW "BM+17,-15 R16 NM+4,-4 L12 D16 R8"'DRAW RIGHT EYE
1510 PAINT STEP(-1,-1)'PAINT IT
1520 GET (15,110)-STEP(32,40),CFACEAW1
1530 PLAY "MBL16O3AFAFO4DP16CP8O3L16FAO4CDP16L16DP16" 'FAST HIGH
1540 FOR I=1 TO 5:GOSUB 2810:NEXT
1550 PLAY "O4L2CO3P4L4BL2O4CO3P4L4AL4BO4CO3BGL2EP4"
1560 FOR I=1 TO 5:GOSUB 2810:NEXT
1570 PLAY "P4O3L2AP4L4G#L2AG-L2G#"
1580 GOSUB 1870 'LAST SCREEN......
1590 GOSUB 2440
1600 PLAY "MBO4L2CO3P4L4BL2O4CO3P4L4AL4BO4CO3BGL2EP4"
1610 PLAY "MBP4O3L2AP4L4G#L2AG-L2G#"
1620 GOTO 2980
1630 '******POT NUMBER 1 ***********
1640 DRAW "BM177,168"
1650 DRAW "R82 M+4,-4 M-10,-112 M-70,+0 M-10,+112 M+4,+4"
1660 '****SPOUT *****
1670 DRAW "BM-3,-48 M+5,-56 M-25,+0 M+20,+56"
1680 '*****HANDLE ***************
1690 DRAW"BM+88,+8 M+16,-32 M+0,-24 M-20,+0 M+0,-8 M+30,+0 M+0,+36 M-24,+46 M-1,-16"
1700 '******LID OF POT ********
1710 DRAW "BM185,50"
1720 DRAW "R66 U10 M-2,-2 L62 M-2,+2 D10"
1730 DRAW "BM+25,-14 R16 M+2,-2 U14 L20 D14 M+2,+2"
1740 '******CUP 2 *****CLOSE TO POT**
1750 DRAW "BM90,160"
1760 DRAW "S2"
1770 DRAW "R82 M+4,-4 M-10,-112 M-70,+0 M-10,+112 M+4,+4"
1780 '*****HANDLE ***************
1790 DRAW"BM+88,-30 M+16,-32 M+0,-24 M-20,+0 M+0,-8 M+30,+0 M+0,+36 M-24,+46 M-1,-16"
1800 '******CUP1****
1810 DRAW "BM10,160"
1820 DRAW "S2"
1830 DRAW "R82 M+4,-4 M-10,-112 M-70,+0 M-10,+112 M+4,+4"
1840 '*****HANDLE -CUP1**********
1850 DRAW"BM+88,-30 M+16,-32 M+0,-24 M-20,+0 M+0,-8 M+30,+0 M+0,+36 M-24,+46 M-1,-16"
1860 RETURN
1870 '********THIS IS THE LAST SCREEN.
1880 '********POT NUMBER 4 ********
1890 'FIRST WAKE UP THE POT....
1900 DRAW "S4" 'NORMAL SCALE.
1910 PUT (185,65),PFACEAW
1920 DRAW "BM195,70"
1930 DRAW "R10 NM+3,+3 BM+23,+0 R10 NM+3,+3" 'EYEBROWS
1940 DRAW "BM195,75" 'NOW THE EYES
1950 DRAW "R16 M-2,+32 L10 M-4,-32 " 'DRAW THE EYELASH AND EYE
1960 DRAW "BM+28,+0 M+2,+32 R10 M+4,-32  L16"
1970 DRAW "BM-2,+28 M+6,+20 M-6,+6 M-6,-6 M+2,-2" 'HERE'S THE NOSE
1980 DRAW "BM-15,+6 M-2,+8 M+1,-4 M+32,+15  M+10,-16 NM-3,-3 NM+3,+3" 'MOUTH
1990 DRAW "L40"
2000 DRAW "BM197,84 L6 R20 BM+12,+0 R20"
2010 DRAW "BM-16,+07 D16 R6 U16 L6 " 'LEFT EYEBALL
2020 PAINT STEP(+1,+1)
2030 DRAW "BM-27,-1 D16 R6 U16 L6 " 'RIGHT EYEBALL
2040 PAINT STEP(+1,+1)
2050 GET (185,65)-STEP(60,80),PFACEOP
2060 '**********PUT OUT THE WIDE AWAKE CUPS.....**************************
2070 DRAW "S2" 'SCALE DOWN FOR CUPS
2080 PUT (96,110),CFACEAW
2090 PUT (15,110),CFACEAW1
2100 '*********DRAW RIGHT HAND CUP....WIDE AWAKE *********
2110 DRAW "BM100,114"
2120 DRAW "R10 NM+3,+3 BM+23,+0 R10 NM+3,+3" 'EYEBROWS
2130 DRAW "BM98,118" 'NOW THE EYES
2140 DRAW "R16 M-2,+32 L10 M-4,-32 " 'DRAW THE EYELASH AND EYE
2150 DRAW "BM+28,+0 M+2,+32 R10 M+4,-32  L16"
2160 DRAW "BM-2,+28 M+6,+20 M-6,+6 M-6,-6 M+2,-2" 'HERE'S THE NOSE
2170 DRAW "BM-15,+6 M-2,+8 M+1,-4 M+32,+15  M+10,-16 NM-3,-3 NM+3,+3" 'MOUTH
2180 DRAW "L40"
2190 DRAW "BM100,122 L6 R20 BM+12,+0 R20"
2200 DRAW "BM-16,+07 D16 R6 U16 L6 " 'LEFT EYEBALL
2210 PAINT STEP(+1,+1)
2220 DRAW "BM-27,-1 D16 R6 U16 L6 " 'RIGHT EYEBALL
2230 PAINT STEP(+1,+1)
2240 '*******LEFT CUP....WIDE AWAKE *****
2250 DRAW "BM20,114"
2260 DRAW "R10 NM+3,+3 BM+23,+0 R10 NM+3,+3" 'EYEBROWS
2270 DRAW "BM18,118" 'NOW THE EYES
2280 DRAW "R16 M-2,+32 L10 M-4,-32 " 'DRAW THE EYELASH AND EYE
2290 DRAW "BM+28,+0 M+2,+32 R10 M+4,-32  L16"
2300 DRAW "BM-2,+28 M+6,+20 M-6,+6 M-6,-6 M+2,-2" 'HERE'S THE NOSE
2310 DRAW "BM-15,+6 M-2,+8 M+1,-4 M+32,+15  M+10,-16 NM-3,-3 NM+3,+3" 'MOUTH
2320 DRAW "L40"
2330 DRAW "BM20,122 L6 R20 BM+12,+0 R20"
2340 DRAW "BM-16,+07 D16 R6 U16 L6 " 'LEFT EYEBALL
2350 PAINT STEP(+1,+1)
2360 DRAW "BM-27,-1 D16 R6 U16 L6 " 'RIGHT EYEBALL
2370 PAINT STEP(+1,+1)
2380 RETURN
2390 J=0
2400 'play "L8O4EE-EE-EO3BO4DCO3A"
2410 PLAY "O2L16AP1AP16FP16AP1"
2420 PLAY "O2L16P2FP16AO3P16CP1"
2430 PLAY "O2L16AP2FP16AO3P16CP1"
2440 PLAY "L8O2AFAFO3DP8CP4O2L8FAO3CDP8L8DP8"
2450 LEN1=70:ROW1=168:COL1=60:GOSUB 2880
2460 LEN1=60:ROW1=25:COL1=95:GOSUB 2880
2470 LEN1=70:ROW1=105:COL1=95:GOSUB 2880
2480 LEN1=100:ROW1=28:COL1=95:GOSUB 2880
2490 PLAY "L8O3AFAFO4DP8CP4O3L8FAO4CDP8L8DP8"
2500 LEN1=50:ROW1=168:COL1=60:GOSUB 2880
2510 LEN1=60:ROW1=25:COL1=95:GOSUB 2880
2520 LEN1=70:ROW1=105:COL1=95:GOSUB 2880
2530 PLAY "L16O3AFAFO4DP16CP8O3L16FAO4CDP16L16DP16"
2540 'LEN1=90:ROW1=168:COL1=60 :GOSUB 3000
2550 'LEN1=60:ROW1=25:COL1=95:GOSUB 3000
2560 'LEN1=70:ROW1=105:COL1=95:GOSUB 3000
2570 'LEN1=40:ROW1=168:COL1=60 :GOSUB 3000
2580 PLAY "MBL8O3AFAFO4DP8CP4O3L8FAO4CDP8L8DP8"
2590 LEN1=60:ROW1=25:COL1=95:GOSUB 2880
2600 LEN1=70:ROW1=105:COL1=95:GOSUB 2880
2610 LEN1=40:ROW1=105:COL1=95:GOSUB 2880
2620 PLAY "MBO4L2CO3P4L4BL2O4CO3P4L4AL4BO4CO3BGL2EP4"
2630 LEN1=60:ROW1=25:COL1=95:GOSUB 2880
2640 LEN1=70:ROW1=105:COL1=95:GOSUB 2880
2650 LEN1=40:ROW1=105:COL1=95:GOSUB 2880
2660 PLAY "MBP4O3L2AP4L4G#L2AG-L2G#"
2670 LEN1=90:ROW1=168:COL1=60 :GOSUB 2880
2680 LEN1=60:ROW1=25:COL1=95:GOSUB 2880
2690 LEN1=70:ROW1=105:COL1=95:GOSUB 2880
2700 LEN1=40:ROW1=168:COL1=60 :GOSUB 2880
2710 RETURN
2720 '********PERK-A-PERK-**********
2730 GET (200,19)-(230,37),PERKA
2740 PAINT (212,22)
2750 GET (200,19)-(230,37),PERKA2
2760 FOR I=1 TO 200:NEXT
2770 PUT (200,19),PERKA2
2780 PUT (200,19),PERKA
2790 RETURN
2800 '*****SECOND TIME THRU..PERKAPERKA
2810 PUT (200,19),PERKA
2820 PUT (200,19),PERKA2
2830 FOR J=1 TO 500:NEXT
2840 PUT (200,19),PERKA2
2850 PUT (200,19),PERKA
2860 FOR J=1 TO 100:NEXT
2870 RETURN
2880 '********STEAM FOR COFFEE CUP *****
2890 'THREE VARIABLES SENT..ROW,COL,LEN
2900 '***STARTING ROW,COL PASSED TO THIS ROUTINE IN COL,ROW
2910 FOR I=1 TO LEN1
2920 PSET(ROW1+X(I),COL1+Y(I))
2930 NEXT I
2940 FOR I=1 TO LEN1
2950 PRESET(ROW1+X(I),COL1+Y(I))
2960 NEXT I
2970 RETURN
2980 DEFINT A-Z
2990 DOTSIZE=1:WIDTH 80
3000 DOT$=STRING$(DOTSIZE,219)
3010 DEF SEG=&HF000
3020 BASEADR=&HFA6E
3030 CLS
3040 FOR I=1 TO 6
3050 CHAR$=MID$("COFFEE",I,1)
3060  CODE=ASC(CHAR$)
3070 IF CODE >= 128 THEN BEEP: GOTO 3030
3080 ADR=BASEADR+(CODE*8)
3090 IF X=0 THEN X=2
3100 Y=Y+10
3110 GOSUB 3270
3120 NEXT I
3130 X=10:Y=5
3140 FOR I=1 TO 5
3150 CHAR$=MID$("BREAK",I,1)
3160  CODE=ASC(CHAR$)
3170 ADR=BASEADR+(CODE*8)
3180 Y=Y+10
3190 GOSUB 3270
3200 NEXT I
3210 X=18:Y=35
3220 CHAR$=CHR$(2)
3230  CODE=ASC(CHAR$)
3240 ADR=BASEADR+(CODE*8)
3250 GOSUB 3270
3260 GOTO 3400
3270 FOR ROW=1 TO 8
3280 ROWVAL=PEEK(ADR+(ROW-1))
3290 FOR COL=1 TO 8
3300 COLMASK=2^(7-(COL-1))
3310 IF (ROWVAL AND COLMASK) <> 0 THEN GOSUB 3360
3320 NEXT COL
3330 NEXT ROW
3340 LOCATE 1,1
3350 RETURN
3360 'display character
3370 LOCATE X+(ROW-1),Y+(COL-1)*DOTSIZE
3380 PRINT LEFT$(DOT$,DOTSIZE);
3390 RETURN
3400 REM =====  THE LONE RANGER  +++++++
3410 REM ===== ARRANGED BY TOM SORBER  ++++++
3420 'CLS:LOCATE 10,10:PRINT"THE LONE RANGER"
3430 '   LOCATE 12,10:PRINT"Arranged by Tom Sorber"
3440 'LOCATE 14,10:PRINT"Played by the I B M PERSONAL COMPUTER ORCHESTRA
3450 'LOCATE 16,10:PRINT"         Conducted by Tom Sorber
3460 A$ = "t255msO2L8DDL4DL8DDL4DL8DDL4GAB"
3470 B$ = "O2 L8DDL4DL8DDL4GL8GBL4AF+D"
3480 C$ = "o2l8gbo3d2p8l8co2bal4gbg"
3490  PLAY "xa$;xb$;xa$;xc$;
3500  PLAY "xa$;xb$;xa$;xc$;
3510 D$ = "o2l16dd+ef+l2gl4bp8l8agf+ged
3520 E$ = "o2l8ef+gco1bo2l16def+go1l8bal16bo2cc+d
3530 F$ = "O1L4AGA
3540 G$ = "O2L16 DD-DEF+DEF+L8GL16GGL8G
3550 H$ = "O2L4BF+GABF+GA
3560  PLAY "xd$;xe$;xf$;xd$;xe$;xg$;
3570  REM PLAY "P8xa$;xb$;xa$;xc$;
3580  REM PLAY "p8xa$;xb$;xa$;xc$;
3590  REM PLAY "xd$;xe$;xf$;xd$;xe$;xg$;
3600 I$ = "l8o2bo1bo2f+o1f+o2go1go2ao1a
3610 J$ = "o2l2b-p8l16b-ge-o1b-o2e-g
3620 K$ = "o2l2bp8l16bcdo1bo2dg
3630 L$ = "o2l2bp8l16bg+eo1bo2eg+
3640 M$ = "o3l2c+p8l16c+o2a+f+c+f+a+
3650 N$ = "o3l8dd-co2bagf+e
3660 O$ = "o2l16dd-dedd-dedd-def+def+
3670 P$ = "o2l4gp8l16ggl32ggggggggl16gggg
3680 Q$ = "l8gdgbgdgb
3690 R$ = "l4gp8l16ggl32gggggggggggggggg
3700 S$ ="l1go1MLl1gL1G
3710  PLAY "P8xi$;xi$;xj$;xk$;xl$;xm$;xn$;xo$;xp$;xq$;xr$;xs$;
3720 CHAIN"games.bas
```

## GODFATHR.BAS

```bas
10 REM  AUTHOR ? GUESS.
20 KEY OFF
30 CLS
40 SCREEN 1
50 LOCATE 5,10,0
60 PRINT"THIS SONG IS DEDICATED TO Jo Hamm    ..."
70 PLAY"L4MLO4GO5CO5E-O5DO5CO5E-O5CO5DO5CO4A-O4B-L1O4GP4"
80 PLAY"L4MLO4GO5CO5E-O5DO5CO5E-O5CO5DO5CO4GO4F+L1O4FP4"
90 PLAY"L4MLO4FO4A-O4BL1O5DP8"
100 PLAY"L4MLO4FO4A-O4BL1O5CP8"
110 PLAY"L4MLO4CO4E-O4B-O4A-O4GO4B-O4A-P64O4A-O4GP64O4GO3BL1O4CP4"
120 PLAY"L4MLO5CP64CO4BL2B-..P28L4B-O5D.L8O4A-L1GP4"
130 PLAY"L4MLO4GB-GL1FP4L4FA-G-L1GP4"
140 PLAY"L4MLO4GO5CO5E-O5DO5CO5E-O5CO5DO5CO4A-O4B-L1O4GP4"
150 PLAY"L4MLO4GO5CO5E-O5DO5CO5E-O5CO5DO5CO4GO4F+L1O4FP4"
160 PLAY"L4MLO4FO4A-O4BL1O5DP8"
170 PLAY"L4MLO4FO4A-O4BL1O5CP8"
180 PLAY"L4MLO4CO4E-O4B-O4A-O4GO4B-O4A-P64O4A-O4GP64O4GO3BL1O4CP4"
190 PLAY"L4MLO4CO4E-O4B-O4A-O4GO4B-O4A-P64O4A-O4GP64O4GO4BL1O5C"
200 CLS
```

## JESUSLOV.BAS

```bas
10 SCREEN 0,1
20 COLOR 15,1,1
30 CLS
40 PRINT "           JESUS  LOVES  ME"
50 PRINT "  "
60 PRINT " "
70 PRINT " Jesus loves me, this I know!"
80 PRINT " For the Bible tells me so."
90 PRINT " Little ones to Him belong,"
100 PRINT " They are weak, but He is strong."
110 PLAY "o3geedegl2gl4aao4co3aagl2gl4p16l4geedegl2gl4aagcedl2cl4"
120 PRINT "  "
130 PRINT " Yes, Jesus loves me"
140 PRINT " Yes, Jesus loves me"
150 PRINT " Yes, Jesus loves me"
160 PRINT " The Bible tells me so."
170 PLAY "p16l2gl4egao4l2co3l2p16gl4eceo3l2dp16l2gl4egao4l2co3l4agcedl2c"
180 PRINT " "
190 PRINT " "
200 PRINT " "
210 PRINT " "
220 PRINT " "
230 PRINT " "
240 PRINT " "
250 PRINT " "
260 PRINT " "
```

## MINUET.BAS

```bas
10 DIM TUNE$(4)
20 CLS:KEY OFF
30 LOCATE 11,32:PRINT "Minuet in D Minor"
40 LOCATE 12,35:PRINT "J.S. Bach"
50 FOR MEASURE=1 TO 32
60 READ NOTES$
70 TUNE$(MEASURE\8)=TUNE$(MEASURE\8)+NOTES$
80 NEXT MEASURE
90 PLAY "xTUNE$(0);xTUNE$(1);xTUNE$(2);xTUNE$(3);xTUNE$(4);"
100 DATA t90 ml l8 o3 a4 o4 f e d c#
110 DATA d4 o3 a4 b-4
120 DATA o3 c# e g b- a g
130 DATA f4 e f d4
140 DATA f4 b- a o4 d c
150 DATA f4 e d c o3 b-
160 DATA a b-16 o4 c16 o3 f4 e4
170 DATA f2
180 DATA a4 o4 f e d c#
190 DATA d4 o3 a4 b-4
200 DATA c# e g b- a g
210 DATA f4 e f d4
220 DATA f4 b- a o4 d c
230 DATA f4 e d c o3 b-
240 DATA a b-16 o4 c16 o3 f4 e4
250 DATA f2
260 DATA ms o4 a4 o3 f ml o4 a g f
270 DATA e16 f16 g c2
280 DATA ms f4 o3 d ml o4 f e d
290 DATA c#16 d16 e o3 a2
300 DATA a b o4 c# d e f
310 DATA g e c# b- a g
320 DATA f16 e16 d e4 c#4
330 DATA d2.
340 DATA ms a4 o3 f ml o4 a g f
350 DATA e16 f16 g c2
360 DATA ms f4 o3 d ml o4 f e d
370 DATA c#16 d16 e o3 a2
380 DATA a b o4 c# d e f
390 DATA g e c# b- a g
400 DATA f16 e16 d e4 c#4
410 DATA d2.
```

## MINUET2.BAS

```bas
10 DIM TUNE$(4)
20 CLS:KEY OFF
30 LOCATE 11,37:PRINT "Minuet"
40 LOCATE 12,35:PRINT "J.S. Bach"
50 FOR MEASURE=1 TO 32
60 READ NOTES$
70 TUNE$(MEASURE\8)=TUNE$(MEASURE\8)+NOTES$
80 NEXT MEASURE
90 PLAY "xTUNE$(0);xTUNE$(1);xTUNE$(2);xTUNE$(3);xTUNE$(4);"
100 DATA t110 l8 ms d4 mn o3 g a b o4 c
110 DATA d4 o3 ms g4 mn g4
120 DATA o4 ms e4 mn c d e f#
130 DATA g4 o3 ms g4 mn g4
140 DATA ms o4 c4 mn d c o3 b a
150 DATA ms b4 mn o4 c o3 b a g
160 DATA MS F#4 MN G A B G
170 DATA B4 A2
180 DATA O4 MS D4 MN O3 G A B O4 C
190 DATA D4 O3 MS G4 G4
200 DATA O4 E4 MN C D E F#
210 DATA G4 O3 MS G4 G4
220 DATA O4 C4 MN D C O3 B A
230 DATA B4 O4 C O3 B A G
240 DATA A4 B A G F#
250 DATA G2
260 DATA O4 B4 G A B G
270 DATA A4 D E F# D
280 DATA G4 E F# G D
290 DATA C#4 O3 B O4 C# O3 A4
300 DATA A B O4 C# D E F#
310 DATA MS G4 MN F#4 E4
320 DATA MS F#4 O3 A4 O4 C#4
330 DATA MN D2
340 DATA D4 O3 G F# G4
350 DATA O4 E4 O3 G F# G4
360 DATA O4 D4 C4 O3 B4
370 DATA A G F# G A4
380 DATA D E F# G A B
390 DATA O4 C4 O3 B4 A4
400 DATA B O4 D O3 G4 F#4
410 DATA G2
```

## PIANO1.BAS

```bas
10 DEF SEG: POKE 106,0
20 KEY OFF:SCREEN 0,1:COLOR 15,0,0:WIDTH 40:CLS:LOCATE 5,19,0:PRINT "The"
30 LOCATE 7,12:PRINT "Robert K. Khedouri"
40 COLOR 10,0:LOCATE 10,9:PRINT CHR$(213)+STRING$(21,205)+CHR$(184)
50 LOCATE 11,9:PRINT CHR$(179)+"    SUPER PIANO      "+CHR$(179)
60 LOCATE 12,9:PRINT CHR$(179)+STRING$(21,32)+CHR$(179)
70 LOCATE 13,9:PRINT CHR$(179)+"    Made 1/7/`84     "+CHR$(179)
80 LOCATE 14,9:PRINT CHR$(212)+STRING$(21,205)+CHR$(190)
90 COLOR 15,0:LOCATE 17,6:PRINT "(C) Copyright Robbie Khedouri"
100 COLOR 14,0:LOCATE 23,7:PRINT "Press space bar to continue"
110 IF INKEY$ <> "" THEN  110
120 CMD$ = INKEY$:IF CMD$="" THEN 120
130 IF CMD$ = CHR$(27) THEN GOTO 1130
140 IF CMD$ <> " " THEN 120
150 ON ERROR GOTO 180
160 PLAY "mf"
170 GOTO 190
180 RESUME 190
190 ON ERROR GOTO 0
200 SCREEN 0,1:WIDTH 40:COLOR 15,1,1:CLS:DEFINT A-Z:GOTO 260
210 LOCATE 15,7:PRINT " ------- selections -------"
220 LOCATE 16,7:PRINT " A-MARCH  E-HUMOR  I-SAKURA"
230 LOCATE 17,7:PRINT " B-STARS  F-BUG    J-BLUE  "
240 LOCATE 18,7:PRINT " C-FORTY  G-POP    K-SCALES"
250 LOCATE 19,7:PRINT " D-HAT    H-DANDY  ESC KEY-EXIT"
260 COLOR 15,0
270 FOR I=0 TO 15:FOR J=0 TO 8
280 LOCATE 5+J,5+I*2:PRINT CHR$(219);CHR$(221);
290 NEXT:NEXT
300 FOR I=0 TO 12:FOR J=0 TO 4
310 IF I=2 OR I=6 OR I=9 OR I=13 THEN 330
320 LOCATE 5+J,8+I*2:PRINT CHR$(32);CHR$(222);
330 NEXT:NEXT
340 FOR J=0 TO 9
350 LOCATE 4+J,4:COLOR 4,0:PRINT CHR$(221);:LOCATE 4+J,36:COLOR 15,0
360 PRINT CHR$(221);:COLOR 4,1:PRINT CHR$(221);
370 NEXT
380 COLOR 4,1:LOCATE 4,4
390 FOR I=0 TO 32:PRINT CHR$(219);:NEXT
400 PRINT CHR$(221);:LOCATE 13,4
410 FOR I=0 TO 32:PRINT CHR$(219);:NEXT
420 PRINT CHR$(221);:COLOR 0,7:DIM M(88),O(70)
430 LOCATE 4,8:PRINT"2 3   5 6 7   9 0   ="
440 RESTORE 2230:FOR T=7 TO 30 STEP 2:READ QWE$:LOCATE 13,T:PRINT QWE$:NEXT:RESTORE
450 FOR I=7 TO 88:M(I) =  36.8*(2^(1/12))^(I-6):NEXT
460 FOR I=0 TO 6:M(I) = 32767:NEXT
470 O(0) = 0
480 O(39)=5:O(40)=7:O(41)=8:O(42)=9
490 O(43)=10:O(44)=11:O(45)=13:O(46)=14
500 O(47)=15:O(48)=16:O(49)=17:O(50)=18
510 O(51)=19:O(52)=21:O(53)=22:O(54)=23
520 O(55)=24:O(56)=25:O(57)=27:O(58)=28
530 O(59)=29:O(60)=30:O(61)=31:O(62)=32
540 O(63)=33:O(64)=35:O(65)=36:O(66)=37
550 O(67)=38:O(68)=39:O(69)=40:O(70)=42
560 GOTO 900
570 CMD$ = INKEY$:IF CMD$="" THEN 570
580 IF CMD$="Q" THEN J=40
590 IF CMD$="2" THEN J=41
600 IF CMD$="W" THEN J=42
610 IF CMD$="3" THEN J=43
620 IF CMD$="E" THEN J=44
630 IF CMD$="R" THEN J=45
640 IF CMD$="5" THEN J=46
650 IF CMD$="T" THEN J=47
660 IF CMD$="6" THEN J=48
670 IF CMD$="Y" THEN J=49
680 IF CMD$="7" THEN J=50
690 IF CMD$="U" THEN J=51
700 IF CMD$="I" THEN J=52
710 IF CMD$="9" THEN J=53
720 IF CMD$="O" THEN J=54
730 IF CMD$="0" THEN J=55
740 IF CMD$="P" THEN J=56
750 IF CMD$="[" THEN J=57
760 IF CMD$="=" THEN J=58
770 IF CMD$="]" THEN J=59
780 POKE 106,0
790 REM
800 IF J = -1  THEN RETURN
810 Q = O(J)
820 IF J>64 OR J<39 THEN 850
830 IF SCREEN(5,Q)<>32 THEN COLOR 0,7:LOCATE 11,Q:PRINT CHR$(14);:COLOR 15,0:GOTO 850
840 COLOR 15,0:LOCATE 7,Q:PRINT CHR$(14);:COLOR 0,7
850 SOUND M(J),2.5:IF J=0 AND K=1 THEN 870:'SKIP NEXT FOR STACCATTO
860 'SOUND 32767,1
870 IF J>64 OR J<39 THEN 570
880 IF SCREEN(5,Q) = 32 THEN COLOR 15,0:LOCATE 7,Q:PRINT CHR$(32);:GOTO 570
890 COLOR 15,0:LOCATE 11,Q:PRINT CHR$(219);:GOTO 570
900 LOCATE 21,5:PRINT "                               ";
910 LOCATE 21,5:PRINT "THE PIANO IS READY, OH MASTER!!";
920 IF INKEY$ <> "" THEN 920
930 IF CMD$=CHR$(27)  THEN 1130
940 IF CMD$="A" OR CMD$="a" THEN S$= "MARCH ":RESTORE 1810:GOTO 1060
950 IF CMD$="B" OR CMD$="b" THEN S$= "STARS ":RESTORE 1900:GOTO 1060
960 IF CMD$="C" OR CMD$="c" THEN S$= "FORTY ":RESTORE 1590:GOTO 1060
970 IF CMD$="D" OR CMD$="d" THEN S$= "HAT   ":RESTORE 2010:GOTO 1060
980 IF CMD$="E" OR CMD$="e" THEN S$= "HUMOR ":RESTORE 1430:GOTO 1060
990 IF CMD$="F" OR CMD$="f" THEN S$= "BUG   ":RESTORE 1180:GOTO 1060
1000 IF CMD$="G" OR CMD$="g" THEN S$= "POP   ":RESTORE 1510:GOTO 1060
1010 IF CMD$="H" OR CMD$="h" THEN S$= "DANDY ":RESTORE 1710:GOTO 1060
1020 IF CMD$="I" OR CMD$="i" THEN S$= "SAKURA":RESTORE 2170:GOTO 1060
1030 IF CMD$="J" OR CMD$="j" THEN S$= "BLUE  ":RESTORE 1260:GOTO 1060
1040 IF CMD$="K" OR CMD$="k" THEN S$= "SCALES":RESTORE 2090:GOTO 1060
1050 'GOTO 1640
1060 'PRINT " ";CMD$;"-";S$
1070 LOCATE 23,1+(40.5-LEN(S$))/2
1080 'COLOR 15,4:PRINT S$;:COLOR 0,7
1090 GOSUB 570
1100 S$=STRING$(39," "):LOCATE 23,1:COLOR 4,1:PRINT S$:COLOR 0,7
1110 GOTO 900
1120 END
1130 IF SAMPLES$="YES" THEN CHAIN "SAMPLES",1000
1140 SCREEN 0,1:COLOR 7,0,0:CLS:END
1150 REM The IBM Personal Computer Music Scroll
1160 REM Version 1.00 (C)Copyright IBM Corp 1981
1170 REM Licensed Material - Program Property of IBM
1180 DATA -2,"La Cucaracha - Mexican Folk Song"
1190 DATA 42,1,0,1,42,1,0,1,42,1,0,1,47,1,0,5,51,1,0,3,42,1,0,1,42,1,0,1
1200 DATA 42,1,0,1,47,1,0,5,51,1,0,5,30,1,0,1,30,1,0,1,35,1,0,3,47,1,0,1
1210 DATA 47,1,0,1,46,1,0,1,46,1,0,1,44,1,0,1,44,1,0,1,42,8,0,2,42,1,0,1
1220 DATA 42,1,0,1,42,1,0,1,46,1,0,5,49,1,0,3,42,1,0,1,42,1,0,1,42,1,0,1
1230 DATA 46,1,0,5,49,1,0,5,37,1,0,1,37,1,0,1,30,1,0,3,54,2,56,2,54,2,52,2
1240 DATA 51,2,49,2,47,8
1250 DATA -1,-1
1260 DATA -2,"Blue Danube Waltz by J.S.Strauss"
1270 DATA 42,4,46,4,49,4,49,4,0,4,61,2,0,2,61,2,0,6,58,2,0,2,58,2,0,6,42,4,42,4
1280 DATA 46,4,49,4
1290 DATA 49,4,0,4,61,2,0,2,61,2,0,6,59,2,0,2,59,2,0,6,41,4,41,4,44,4,51,4,51,4
1300 DATA 0,4,63,2,0,2,63,2,0,6,59,2,0,2
1310 DATA 59,2,0,6,41,4,41,4,44,4,51,4,51,4,0,4,63,2,0,2,63,2,0,6,58,2,0,2,58,2
1320 DATA 0,6,42,4
1330 DATA 42,4,46,4,49,4,54,4,0,4,66,2,0,2,66,2,0,6,61,2,0,2,61,2,0,6,42,4
1340 DATA 42,4,46,4,49,4,54,4,0,4,66,2,0,2
1350 DATA 66,2,0,6,63,2,0,2,63,2,0,6,44,4,44,4,47,4,51,2,0,2,51,14,0,2,48,4
1360 DATA 49,4,58,16
1370 DATA 54,4,46,4,46,8,44,4,51,8,49,4,42,4,0,2,42,2,42,4,0,8,49,2,0,2,47,2
1380 DATA 0,6,49,2,0,2
1390 DATA 47,2,0,6,49,4,58,16,56,4,49,2,0,2,46,2,0,6,49,2,0,2,46,2,0,6,49,4
1400 DATA 56,16,54,4,49,2,0,2,47,2,0,6,49,2,0,2,47,2,0,6,49,4,58,16
1410 DATA 56,4,49,4,54,4,56,4,58,4,61,8,59,4,58,2,58,2,58,4,56,2,0,2,54,4,0,8
1420 DATA -1,-1
1430 DATA -2,"Humoresque by Dvorak"
1440 DATA 47,3,0,2,49,1,47,3,0,2,49,1,51,3,0,2,54,1,56,3,0,2,54,1
1450 DATA 59,3,0,2,58,1,61,3,0,2,59,1,58,3,0,2,61,1,59,3,0,2,56,1
1460 DATA 54,3,0,2,54,1,56,3,0,2,54,1,59,3,0,2,56,1,54,3,0,2,51,1
1470 DATA 49,24,47,3,0,2,49,1,47,3,0,2,49,1,51,3,0,2,54,1,56,3,0,2,54,1
1480 DATA 56,3,0,2,58,1,61,3,0,2,59,1,58,3,0,2,61,1,59,3,0,2,56,1
1490 DATA 54,3,0,2,54,1,59,3,0,2,47,1,49,6,54,6,47,18
1500 DATA -1,-1
1510 DATA -2,"Pop! Goes the Weasle - Anonymous"
1520 DATA 47,2,0,2,47,2,49,2,0,2,49,2,51,2,54,2,51,2,47,2,0,2,42,2
1530 DATA 47,2,0,2,47,2,49,2,0,2,49,2,51,6,47,2,0,2,42,2,47,2,0,2,47,2,49,2
1540 DATA 0,2,49,2,51,2,54,2,51,2,47,2,0,4,56,2,0,4,49,2,0,2,52,2,51,6,47,2
1550 DATA 0,4,59,2,0,2,59,2,56,2,0,2,59,2,58,2,61,2,58,2,54,2,0,4,59,2,0,2
1560 DATA 59,2,56,2,0,2,59,2,58,6,54,2,0,2,51,2,52,2,0,2,51,2,52,2,0,2,54,2
1570 DATA 56,2,0,2,58,2,59,2,0,4,56,2,0,4,49,2,0,2,52,2,51,6,47,2
1580 DATA -1,-1
1590    DATA -2,"Symphony #40 by Mozart"
1600 DATA 55,2,54,2,54,4,55,2,54,2,54,4,55,2,54,2,54,4,62,4,0,4
1610 DATA 62,2,61,2,59,4,59,2,57,2,55,4,55,2,54,2
1620 DATA 52,4,52,4,0,4,54,2,52,2,52,4,54,2,52,2,52,4,54,2,52,2
1630 DATA 52,4,61,4,0,4,61,2,59,2,58,4,58,2,55,2,54,4,54,2,52,2
1640 DATA 50,4,50,4,0,4,62,2,61,2,61,4,64,4,58,4,61,4
1650 DATA 59,4,54,4,0,4,62,2,61,2,61,4,64,4,58,4,61,4
1660 DATA 59,4,62,4,61,2,59,2,57,2,55,2,54,4,46,4,47,4,49,4
1670 DATA 50,4,52,2,50,2,49,4,47,4,54,4,0,4,64,8
1680 DATA 65,2,0,6,64,8,65,2,0,6,64,8
1690 DATA 65,4,64,4,65,4,64,4,65,4
1700 DATA -1,-1
1710 DATA -2,"Yankee Doodle - Anonymous "
1720 DATA 50,3,50,3,52,3,54,3,50,3,54,3,52,3,45,3,50,3,50,3,52,3,54,3,50,6
1730 DATA 49,3,0,3
1740 DATA 50,3,50,3,52,3,54,3,55,3,54,3,52,3,50,3,49,3,45,3,47,3,49,3,50,6
1750 DATA 50,3,0,3
1760 DATA 47,5,49,1,47,3,45,3,47,3,49,3,50,3,0,3,45,5,47,1,45,3,43,3,42,6
1770 DATA 45,3,0,3
1780 DATA 47,5,49,1,47,3,45,3,47,3,49,3,50,3,47,3,45,3,50,3,49,3,52,3,50,6
1790 DATA 50,6
1800 DATA -1,-1
1810 DATA -2,"FUNERAL MARCH OF A MARIONETTE - GOUNOD"
1820 DATA 37,1,0,2,30,1,0,5,42,3,42,3,41,3,39,3,41,3,0,3,42,3,44,3,0,3,37,1,0,2
1830 DATA 30,1,0,5,42,3,42,3,41,3,39,3,41,3,0,3,42,3,44,3,0,3,37,3,42,3,0,3,45,3
1840 DATA 49,6,47,3,45,3,0,3,49,3,52,6,50,3,49,3,0,3,53,3,56,6,54,3,53,3,50,3
1850 DATA 49,3,47,3,45,3,44,3,30,1,0,5,42,3,42,3,41,3,39,3,41,3,0,3,42,3,44,3
1860 DATA 0,3,37,1,0,2,30,1,0,5,42,3,42,3,41,3,39,3,41,3,0,3,42,3,44,3,0,3
1870 DATA 37,3,45,3,0,3,49,3,52,6,50,3,49,3,47,3,45,3,43,3,47,3,50,3,42,3
1880 DATA 41,3,42,3,44,3,0,3,45,1,0,2,44,9,42,1
1890 DATA -1,-1
1900 DATA -2,"STARS AND STRIPES FOREVER - SOUSA "
1910 DATA 54,6,54,6,52,3,51,3,51,6,50,3,51,3,51,16,0,2,50,3
1920 DATA 51,3,51,6,50,3,51,3
1930 DATA 54,6,51,3,54,3,52,12,49,6,0,3,49,3,49,6,48,3,49,3
1940 DATA 49,6,48,3,49,3
1950 DATA 52,16,0,2,51,3,49,3,51,3,54,9,56,9,56,3,49,16,0,2,54,6
1960 DATA 54,6,52,3,51,3,51,6,50,3,51,3,51,16,0,2,50,3,51,3,51,6,50,3 ,51,3
1970 DATA 52,3,51,3,49,5,46,1,49,12,47,6,0,3,47,3,47,6,46,3,47,3,50,6,49,3,47,3
1980 DATA 59,15,0,3,47,3,49,3,51,3,54,1,0,2,47,3,49,3,51,3,54,1,0,2,42,3,44,5
1990 DATA 51,1,49,12,47,1
2000 DATA -1,-1
2010 DATA -2,"Mexican Hat Dance - Traditional "
2020 DATA 52,2,57,2,0,2,52,2,57,2,0,2,52,2,57,6,0,4,52,2,57,2,59,2,57,2,56,4
2030 DATA 57,2,59,2,0,8,52,2,56,2,0,2,52,2,56,2,0,2,52,2,56,6,0,4,52,2
2040 DATA 56,2,57,2,56,2,54,4,56,2,57,2,0,6,64,2,63,2,64,2,61,2,60,2,61,2
2050 DATA 57,2,56,2,57,2,52,2,0,4,49,2,50,2,52,2,54,2,56,2,57,2,59,2,61,2
2060 DATA 62,2,59,2,0,4,62,2,61,2,62,2,59,2,58,2,59,2,56,2,55,2,56,2,52,2
2070 DATA 0,4,64,2,63,2,64,2,66,2,64,2,62,2,61,2,59,2,57,2
2080 DATA -1,-1
2090 DATA -2,"SCALES                          "
2100 DATA 38,1,39,1,40,1,41,1,42,1,43,1,44,1,45,1,46,1,47,1
2110 DATA 48,1,49,1,50,1,51,1,52,1,53,1,54,1,55,1,56,1
2120 DATA 57,1,58,1,59,1,60,1,61,1,62,1,63,1,64,1,65,8,0,4
2130 DATA 65,8,64,1,63,1,62,1,61,1,60,1,59,1,58,1,57,1
2140 DATA 56,1,55,1,54,1,53,1,52,1,51,1,50,1,49,1,48,1
2150 DATA 47,1,46,1,45,1,44,1,43,1,42,1,41,1,40,1,39,1,38,8
2160 DATA -1,-1
2170 DATA -2,"Sakura - Japanese Folk Melody "
2180 DATA 49,8,49,8,51,12,0,4,49,8,49,8,51,12,0,4,49,8,51,8,52,8,51,8
2190 DATA 49,8,51,4,49,4,45,16,44,8,40,8,44,8,45,8
2200 DATA 44,8,44,4,40,4,39,16,49,8,49,8,51,12,0,4,49,8,49,8,51,12,0,4
2210 DATA 40,8,44,8,45,8,49,8,51,4,49,4,45,8,44,16
2220 DATA -1,-1
2230 DATA "Q","W","E","R","T","Y","U","I","O","P","[","]"
2240 DATA "2","3","5","6","7","9","0","="
```

## PIANO2.BAS

```bas
10 DEF SEG: POKE 106,0
20 KEY OFF:SCREEN 0,1:COLOR 15,0,0:WIDTH 40:CLS:LOCATE 5,19,0:PRINT "The"
30 LOCATE 7,12:PRINT "Robert K. Khedouri"
40 COLOR 10,0:LOCATE 10,9:PRINT CHR$(213)+STRING$(21,205)+CHR$(184)
50 LOCATE 11,9:PRINT CHR$(179)+"    SUPER PIANO      "+CHR$(179)
60 LOCATE 12,9:PRINT CHR$(179)+STRING$(21,32)+CHR$(179)
70 LOCATE 13,9:PRINT CHR$(179)+"    Made 1/7/`84     "+CHR$(179)
80 LOCATE 14,9:PRINT CHR$(212)+STRING$(21,205)+CHR$(190)
90 COLOR 15,0:LOCATE 17,6:PRINT "(C) Copyright Robbie Khedouri"
100 COLOR 14,0:LOCATE 23,7:PRINT "Press space bar to continue"
110 IF INKEY$ <> "" THEN  110
120 CMD$ = INKEY$:IF CMD$="" THEN 120
130 IF CMD$ = CHR$(27) THEN GOTO 1220
140 IF CMD$ <> " " THEN 120
150 ON ERROR GOTO 180
160 PLAY "mf"
170 GOTO 190
180 RESUME 190
190 ON ERROR GOTO 0
200 SCREEN 0,1:WIDTH 40:COLOR 15,1,1:CLS:DEFINT A-Z
210 LOCATE 15,7:PRINT " ------- selections -------"
220 LOCATE 16,7:PRINT " A-MARCH  E-HUMOR  I-SAKURA"
230 LOCATE 17,7:PRINT " B-STARS  F-BUG    J-BLUE  "
240 LOCATE 18,7:PRINT " C-FORTY  G-POP    K-SCALES"
250 LOCATE 19,7:PRINT " D-HAT    H-DANDY  ESC KEY-EXIT"
260 COLOR 15,0
270 FOR I=0 TO 15:FOR J=0 TO 8
280 LOCATE 5+J,5+I*2:PRINT CHR$(219);CHR$(221);
290 NEXT:NEXT
300 FOR I=0 TO 12:FOR J=0 TO 4
310 IF I=2 OR I=6 OR I=9 OR I=13 THEN 330
320 LOCATE 5+J,8+I*2:PRINT CHR$(32);CHR$(222);
330 NEXT:NEXT
340 FOR J=0 TO 9
350 LOCATE 4+J,4:COLOR 4,0:PRINT CHR$(221);:LOCATE 4+J,36:COLOR 15,0
360 PRINT CHR$(221);:COLOR 4,1:PRINT CHR$(221);
370 NEXT
380 COLOR 4,1:LOCATE 4,4
390 FOR I=0 TO 32:PRINT CHR$(219);:NEXT
400 PRINT CHR$(221);:LOCATE 13,4
410 FOR I=0 TO 32:PRINT CHR$(219);:NEXT
420 PRINT CHR$(221);:COLOR 0,7:DIM M(88),O(70)
430 LOCATE 4,8:PRINT"2 3   5 6 7   9 0   ="
440 RESTORE 2320:FOR T=7 TO 30 STEP 2:READ QWE$:LOCATE 13,T:PRINT QWE$:NEXT:RESTORE
450 FOR I=7 TO 88:M(I) =  36.8*(2^(1/12))^(I-6):NEXT
460 FOR I=0 TO 6:M(I) = 32767:NEXT
470 O(0) = 0
480 O(39)=5:O(40)=7:O(41)=8:O(42)=9
490 O(43)=10:O(44)=11:O(45)=13:O(46)=14
500 O(47)=15:O(48)=16:O(49)=17:O(50)=18
510 O(51)=19:O(52)=21:O(53)=22:O(54)=23
520 O(55)=24:O(56)=25:O(57)=27:O(58)=28
530 O(59)=29:O(60)=30:O(61)=31:O(62)=32
540 O(63)=33:O(64)=35:O(65)=36:O(66)=37
550 O(67)=38:O(68)=39:O(69)=40:O(70)=42
560 GOTO 970
570 READ M,K:K=K/2
580 IF INKEY$<>"" THEN 580
590 J=0:IF SONG =0 THEN CMD$ = INKEY$:IF CMD$="Q" THEN J=40
600 IF CMD$="2" THEN J=41
610 IF CMD$="W" THEN J=42
620 IF CMD$="3" THEN J=43
630 IF CMD$="E" THEN J=44
640 IF CMD$="R" THEN J=45
650 IF CMD$="5" THEN J=46
660 IF CMD$="T" THEN J=47
670 IF CMD$="6" THEN J=48
680 IF CMD$="Y" THEN J=49
690 IF CMD$="7" THEN J=50
700 IF CMD$="U" THEN J=51
710 IF CMD$="I" THEN J=52
720 IF CMD$="9" THEN J=53
730 IF CMD$="O" THEN J=54
740 IF CMD$="0" THEN J=55
750 IF CMD$="P" THEN J=56
760 IF CMD$="[" THEN J=57
770 IF CMD$="=" THEN J=58
780 IF CMD$="]" THEN J=59
790 IF CMD$=" " THEN J=M
795 IF CMD$="+" THEN SONG =1:J=M
800 IF M = -1  THEN RETURN
810 Q = O(M):IF M>64 OR M<39 THEN 920
820 IF SCREEN(5,Q)<>32 THEN COLOR 0,7:LOCATE 11,Q:PRINT CHR$(14);:COLOR 15,0:GOTO 840
830 COLOR 15,0:LOCATE 7,Q:PRINT CHR$(14);:COLOR 0,7
840 POKE 106,0:IF J<>M AND M>39 AND M<60 THEN 590
850 IF M<40 OR M>59 THEN J=M
860 REM
870 IF J = -1  THEN RETURN
880 Q = O(J)
890 IF J>64 OR J<39 THEN 920
900 IF SCREEN(5,Q)<>32 THEN COLOR 0,7:LOCATE 11,Q:PRINT CHR$(14);:COLOR 15,0:GOTO 920
910 COLOR 15,0:LOCATE 7,Q:PRINT CHR$(14);:COLOR 0,7
920 SOUND M(J),K:IF J=0 AND K=1 THEN 940:'SKIP NEXT FOR STACCATTO
930 IF SONG <>0 THEN SOUND 32767,0.0001
940 IF J>64 OR J<39 THEN 570
950 IF SCREEN(5,Q) = 32 THEN COLOR 15,0:LOCATE 7,Q:PRINT CHR$(32);:GOTO 570
960 Q = O(J):COLOR 15,0:LOCATE 11,Q:PRINT CHR$(219);:GOTO 570
970 SONG=0:LOCATE 21,5:PRINT "                                 "
980 LOCATE 21,5:PRINT "ENTER SELECTION ==>";
990 IF INKEY$ <> "" THEN 990
1000 CMD$=INKEY$:IF CMD$="" THEN 1000
1010 IF CMD$=CHR$(27)  THEN 1220
1020 IF CMD$="A" OR CMD$="a" THEN S$= "MARCH ":RESTORE 1900:GOTO 1140
1030 IF CMD$="B" OR CMD$="b" THEN S$= "STARS ":RESTORE 1990:GOTO 1140
1040 IF CMD$="C" OR CMD$="c" THEN S$= "FORTY ":RESTORE 1680:GOTO 1140
1050 IF CMD$="D" OR CMD$="d" THEN S$= "HAT   ":RESTORE 2100:GOTO 1140
1060 IF CMD$="E" OR CMD$="e" THEN S$= "HUMOR ":RESTORE 1520:GOTO 1140
1070 IF CMD$="F" OR CMD$="f" THEN S$= "BUG   ":RESTORE 1270:GOTO 1140
1080 IF CMD$="G" OR CMD$="g" THEN S$= "POP   ":RESTORE 1600:GOTO 1140
1090 IF CMD$="H" OR CMD$="h" THEN S$= "DANDY ":RESTORE 1800:GOTO 1140
1100 IF CMD$="I" OR CMD$="i" THEN S$= "SAKURA":RESTORE 2260:GOTO 1140
1110 IF CMD$="J" OR CMD$="j" THEN S$= "BLUE  ":RESTORE 1350:GOTO 1140
1120 IF CMD$="K" OR CMD$="k" THEN S$= "SCALES":RESTORE 2180:GOTO 1140
1130 GOTO 980
1140 PRINT " ";CMD$;"-";S$
1150 READ D
1160 READ S$:LOCATE 23,1+(40.5-LEN(S$))/2
1170 COLOR 15,4:PRINT S$;:COLOR 0,7
1180 GOSUB 570
1190 S$=STRING$(39," "):LOCATE 23,1:COLOR 4,1:PRINT S$:COLOR 0,7
1200 GOTO 970
1210 END
1220 IF SAMPLES$="YES" THEN CHAIN "SAMPLES",1000
1230 SCREEN 0,1:COLOR 7,0,0:CLS:END
1240 REM The IBM Personal Computer Music Scroll
1250 REM Version 1.00 (C)Copyright IBM Corp 1981
1260 REM Licensed Material - Program Property of IBM
1270 DATA -2,"La Cucaracha - Mexican Folk Song"
1280 DATA 42,1,0,1,42,1,0,1,42,1,0,1,47,1,0,5,51,1,0,3,42,1,0,1,42,1,0,1
1290 DATA 42,1,0,1,47,1,0,5,51,1,0,5,30,1,0,1,30,1,0,1,35,1,0,3,47,1,0,1
1300 DATA 47,1,0,1,46,1,0,1,46,1,0,1,44,1,0,1,44,1,0,1,42,8,0,2,42,1,0,1
1310 DATA 42,1,0,1,42,1,0,1,46,1,0,5,49,1,0,3,42,1,0,1,42,1,0,1,42,1,0,1
1320 DATA 46,1,0,5,49,1,0,5,37,1,0,1,37,1,0,1,30,1,0,3,54,2,56,2,54,2,52,2
1330 DATA 51,2,49,2,47,8
1340 DATA -1,-1
1350 DATA -2,"Blue Danube Waltz by J.S.Strauss"
1360 DATA 42,4,42,4,46,4,49,4,49,4,0,4,61,2,0,2,61,2,0,6,58,2,0,2,58,2,0,6,42,4,42,4
1370 DATA 46,4,49,4
1380 DATA 49,4,0,4,61,2,0,2,61,2,0,6,59,2,0,2,59,2,0,6,41,4,41,4,44,4,51,4,51,4
1390 DATA 0,4,63,2,0,2,63,2,0,6,59,2,0,2
1400 DATA 59,2,0,6,41,4,41,4,44,4,51,4,51,4,0,4,63,2,0,2,63,2,0,6,58,2,0,2,58,2
1410 DATA 0,6,42,4
1420 DATA 42,4,46,4,49,4,54,4,0,4,66,2,0,2,66,2,0,6,61,2,0,2,61,2,0,6,42,4
1430 DATA 42,4,46,4,49,4,54,4,0,4,66,2,0,2
1440 DATA 66,2,0,6,63,2,0,2,63,2,0,6,44,4,44,4,47,4,51,2,0,2,51,14,0,2,48,4
1450 DATA 49,4,58,16
1460 DATA 54,4,46,4,46,8,44,4,51,8,49,4,42,4,0,2,42,2,42,4,0,8,49,2,0,2,47,2
1470 DATA 0,6,49,2,0,2
1480 DATA 47,2,0,6,49,4,58,16,56,4,49,2,0,2,46,2,0,6,49,2,0,2,46,2,0,6,49,4
1490 DATA 56,16,54,4,49,2,0,2,47,2,0,6,49,2,0,2,47,2,0,6,49,4,58,16
1500 DATA 56,4,49,4,54,4,56,4,58,4,61,8,59,4,58,2,58,2,58,4,56,2,0,2,54,4,0,8
1510 DATA -1,-1
1520 DATA -2,"Humoresque by Dvorak"
1530 DATA 47,3,0,2,49,1,47,3,0,2,49,1,51,3,0,2,54,1,56,3,0,2,54,1
1540 DATA 59,3,0,2,58,1,61,3,0,2,59,1,58,3,0,2,61,1,59,3,0,2,56,1
1550 DATA 54,3,0,2,54,1,56,3,0,2,54,1,59,3,0,2,56,1,54,3,0,2,51,1
1560 DATA 49,24,47,3,0,2,49,1,47,3,0,2,49,1,51,3,0,2,54,1,56,3,0,2,54,1
1570 DATA 56,3,0,2,58,1,61,3,0,2,59,1,58,3,0,2,61,1,59,3,0,2,56,1
1580 DATA 54,3,0,2,54,1,59,3,0,2,47,1,49,6,54,6,47,18
1590 DATA -1,-1
1600 DATA -2,"Pop! Goes the Weasle - Anonymous"
1610 DATA 47,2,0,2,47,2,49,2,0,2,49,2,51,2,54,2,51,2,47,2,0,2,42,2
1620 DATA 47,2,0,2,47,2,49,2,0,2,49,2,51,6,47,2,0,2,42,2,47,2,0,2,47,2,49,2
1630 DATA 0,2,49,2,51,2,54,2,51,2,47,2,0,4,56,2,0,4,49,2,0,2,52,2,51,6,47,2
1640 DATA 0,4,59,2,0,2,59,2,56,2,0,2,59,2,58,2,61,2,58,2,54,2,0,4,59,2,0,2
1650 DATA 59,2,56,2,0,2,59,2,58,6,54,2,0,2,51,2,52,2,0,2,51,2,52,2,0,2,54,2
1660 DATA 56,2,0,2,58,2,59,2,0,4,56,2,0,4,49,2,0,2,52,2,51,6,47,2
1670 DATA -1,-1
1680    DATA -2,"Symphony #40 by Mozart"
1690 DATA 55,2,54,2,54,4,55,2,54,2,54,4,55,2,54,2,54,4,62,4,0,4
1700 DATA 62,2,61,2,59,4,59,2,57,2,55,4,55,2,54,2
1710 DATA 52,4,52,4,0,4,54,2,52,2,52,4,54,2,52,2,52,4,54,2,52,2
1720 DATA 52,4,61,4,0,4,61,2,59,2,58,4,58,2,55,2,54,4,54,2,52,2
1730 DATA 50,4,50,4,0,4,62,2,61,2,61,4,64,4,58,4,61,4
1740 DATA 59,4,54,4,0,4,62,2,61,2,61,4,64,4,58,4,61,4
1750 DATA 59,4,62,4,61,2,59,2,57,2,55,2,54,4,46,4,47,4,49,4
1760 DATA 50,4,52,2,50,2,49,4,47,4,54,4,0,4,64,8
1770 DATA 65,2,0,6,64,8,65,2,0,6,64,8
1780 DATA 65,4,64,4,65,4,64,4,65,4
1790 DATA -1,-1
1800 DATA -2,"Yankee Doodle - Anonymous "
1810 DATA 50,3,50,3,52,3,54,3,50,3,54,3,52,3,45,3,50,3,50,3,52,3,54,3,50,6
1820 DATA 49,3,0,3
1830 DATA 50,3,50,3,52,3,54,3,55,3,54,3,52,3,50,3,49,3,45,3,47,3,49,3,50,6
1840 DATA 50,3,0,3
1850 DATA 47,5,49,1,47,3,45,3,47,3,49,3,50,3,0,3,45,5,47,1,45,3,43,3,42,6
1860 DATA 45,3,0,3
1870 DATA 47,5,49,1,47,3,45,3,47,3,49,3,50,3,47,3,45,3,50,3,49,3,52,3,50,6
1880 DATA 50,6
1890 DATA -1,-1
1900 DATA -2,"FUNERAL MARCH OF A MARIONETTE - GOUNOD"
1910 DATA 37,1,0,2,30,1,0,5,42,3,42,3,41,3,39,3,41,3,0,3,42,3,44,3,0,3,37,1,0,2
1920 DATA 30,1,0,5,42,3,42,3,41,3,39,3,41,3,0,3,42,3,44,3,0,3,37,3,42,3,0,3,45,3
1930 DATA 49,6,47,3,45,3,0,3,49,3,52,6,50,3,49,3,0,3,53,3,56,6,54,3,53,3,50,3
1940 DATA 49,3,47,3,45,3,44,3,30,1,0,5,42,3,42,3,41,3,39,3,41,3,0,3,42,3,44,3
1950 DATA 0,3,37,1,0,2,30,1,0,5,42,3,42,3,41,3,39,3,41,3,0,3,42,3,44,3,0,3
1960 DATA 37,3,45,3,0,3,49,3,52,6,50,3,49,3,47,3,45,3,43,3,47,3,50,3,42,3
1970 DATA 41,3,42,3,44,3,0,3,45,1,0,2,44,9,42,1
1980 DATA -1,-1
1990 DATA -2,"STARS AND STRIPES FOREVER - SOUSA "
2000 DATA 54,6,54,6,52,3,51,3,51,6,50,3,51,3,51,16,0,2,50,3
2010 DATA 51,3,51,6,50,3,51,3
2020 DATA 54,6,51,3,54,3,52,12,49,6,0,3,49,3,49,6,48,3,49,3
2030 DATA 49,6,48,3,49,3
2040 DATA 52,16,0,2,51,3,49,3,51,3,54,9,56,9,56,3,49,16,0,2,54,6
2050 DATA 54,6,52,3,51,3,51,6,50,3,51,3,51,16,0,2,50,3,51,3,51,6,50,3 ,51,3
2060 DATA 52,3,51,3,49,5,46,1,49,12,47,6,0,3,47,3,47,6,46,3,47,3,50,6,49,3,47,3
2070 DATA 59,15,0,3,47,3,49,3,51,3,54,1,0,2,47,3,49,3,51,3,54,1,0,2,42,3,44,5
2080 DATA 51,1,49,12,47,1
2090 DATA -1,-1
2100 DATA -2,"Mexican Hat Dance - Traditional "
2110 DATA 52,2,57,2,0,2,52,2,57,2,0,2,52,2,57,6,0,4,52,2,57,2,59,2,57,2,56,4
2120 DATA 57,2,59,2,0,8,52,2,56,2,0,2,52,2,56,2,0,2,52,2,56,6,0,4,52,2
2130 DATA 56,2,57,2,56,2,54,4,56,2,57,2,0,6,64,2,63,2,64,2,61,2,60,2,61,2
2140 DATA 57,2,56,2,57,2,52,2,0,4,49,2,50,2,52,2,54,2,56,2,57,2,59,2,61,2
2150 DATA 62,2,59,2,0,4,62,2,61,2,62,2,59,2,58,2,59,2,56,2,55,2,56,2,52,2
2160 DATA 0,4,64,2,63,2,64,2,66,2,64,2,62,2,61,2,59,2,57,2
2170 DATA -1,-1
2180 DATA -2,"SCALES                          "
2190 DATA 38,1,39,1,40,1,41,1,42,1,43,1,44,1,45,1,46,1,47,1
2200 DATA 48,1,49,1,50,1,51,1,52,1,53,1,54,1,55,1,56,1
2210 DATA 57,1,58,1,59,1,60,1,61,1,62,1,63,1,64,1,65,8,0,4
2220 DATA 65,8,64,1,63,1,62,1,61,1,60,1,59,1,58,1,57,1
2230 DATA 56,1,55,1,54,1,53,1,52,1,51,1,50,1,49,1,48,1
2240 DATA 47,1,46,1,45,1,44,1,43,1,42,1,41,1,40,1,39,1,38,8
2250 DATA -1,-1
2260 DATA -2,"Sakura - Japanese Folk Melody "
2270 DATA 49,8,49,8,51,12,0,4,49,8,49,8,51,12,0,4,49,8,51,8,52,8,51,8
2280 DATA 49,8,51,4,49,4,45,16,44,8,40,8,44,8,45,8
2290 DATA 44,8,44,4,40,4,39,16,49,8,49,8,51,12,0,4,49,8,49,8,51,12,0,4
2300 DATA 40,8,44,8,45,8,49,8,51,4,49,4,45,8,44,16
2310 DATA -1,-1
2320 DATA "Q","W","E","R","T","Y","U","I","O","P","[","]"
2330 DATA "2","3","5","6","7","9","0","="
```

## SPELL.BAS

```bas
10 KEY OFF:CLS
20 SCREEN 0
30 WIDTH 40
40 PRINT"░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░"
50 PRINT"░┌───────────────────────────────────┐░"
60 PRINT"░│                                   │░"
70 PRINT"              5019-A.BAS               "
80 PRINT"                 SPELL                 "
90 PRINT"                                       "
100 PRINT"                                       "
110 PRINT"░│ BROUGHT TO YOU BY THE MEMBERS OF  │░"
120 PRINT"░│      ▄▄▄▄▄ ▄▄▄▄▄ ▄▄▄▄▄ ▄▄▄▄▄      │░"
130 PRINT"░│        █   █   █ █     █   █      │░"
140 PRINT"░│        █   █▄▄▄█ █     █   █      │░"
150 PRINT"░│        █   █     █     █   █      │░"
160 PRINT"░│      ▄▄█▄▄ █     █▄▄▄▄ █▄▄▄█      │░"
170 PRINT"░│                                   │░"
180 PRINT"░│      International PC Owners      │░"
190 PRINT"░│                                   │░"
200 PRINT"░│P.O. Box 10426, Pittsburgh PA 15234│░"
210 PRINT"░│                                   │░"
220 PRINT"░└───────────────────────────────────┘░"
230 PRINT"░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░"
240 PRINT
250 PRINT "       PRESS ANY KEY TO CONTINUE
260 A$=INKEY$: IF A$="" THEN 260
270 WIDTH 80
280 CLS
1000 'This program is a program that I
1010 '
1020 'found in a very good book called
1030 '
1040 '100 Ready-To-Run Programs &
1050 '
1060 'Subroutines For The I.B.M. P.C.
1070 '
1080 'by Jeff Bretz & John Clark Craig
1090 '
1100 'I then took the Dolch Word List
1110 '
1120 'and added to the program.
1130 '
1140 'The Dolch list has been the
1150 '
1160 'standard list of the basic words
1170 '
1180 'a child should be able to sight
1190 '
1200 'read for many years.
1210 '
1220 'I also added several other
1230 '
1240 'things to make the program
1250 '
1260 'more interasting.
1270 '
1280 '
1290 'I hope you find this program as
1300 '
1310 'useful as I have.
1320 '
1330 'If you have any ideas on how to
1340 '
1350 'inprove this program, or you
1360 '
1370 'have an educational program of
1380 '
1390 'your own, please send it to me
1400 '
1410 'Robert West, 655 S. Chubb Dr.
1420 '
1430 'Doylestown, Pa. 18901
1440 '
1450 'Thanks
2000  REM         SPELL
2010 CLEAR
2020 SCREEN 1
2030 COLOR 0,0
2040 KEY OFF
2050 CLS
2060 LOCATE 10,19
2070 PRINT "SPELL
2080 FOR DELTA = 3 TO 77 STEP 5
2090 LINE (120-DELTA,70-DELTA)-(205+DELTA,80+DELTA),,B
2100 NEXT DELTA
2110 BEEP:LOCATE 23,7:INPUT "WHAT IS YOUR NAME ";NAM$
2120 GOSUB 3240
2130 LOCATE 23,7:BEEP:INPUT "WHAT LIST WOULD YOU LIKE 1-37";L
2140 LOCATE 23,7:PRINT "                                 "
2150 LOCATE 23,7:BEEP:INPUT "HOW MANY WORDS 1-10";C
2160 DIM A$(C),SCORE(C),TH$(400)
2170 FOR X =1 TO (L-1)*10
2180 READ TH$
2190 NEXT X
2200 FOR I = 1 TO C
2210 SCORE(I) = 2
2220 NEXT I
2230 CLS
2240 COLOR 0,1
2250 FOR I = 1 TO C
2260 READ CAP$
2270 A$(I) = CAP$
2280 NEXT I
2290 CLS
2300 COLOR 0,0
2310 S=LEN(NAM$)
2320 R=(S/2)
2330 PRINT TAB(8-R)"THESE ARE YOUR WORDS ";NAM$
2340 PRINT :PRINT
2350 FOR I=1 TO C
2360 PRINT A$(I),
2370 NEXT I
2380 FOR I=1 TO 5000:NEXT I
2390 CLS
2400 LET Z$ =TIME$
2410 LET F$=MID$(Z$,7,2)
2420 LET Z=VAL (F$)
2430 RANDOMIZE (Z)
2440 PTR = INT(RND*C+1)
2450 J = 0
2460 IF SCORE(PTR) THEN 2520
2470 PTR = PTR MOD C + 1
2480 J = J+1
2490 IF J > C THEN 3110
2500 GOTO 2460
2510 '
2520 CLS
2530 COLOR 0,1
2540 LOCATE 13,20 - LEN(A$(PTR)) / 2
2550 PRINT A$(PTR);
2560 FOR I = 9 TO 99 STEP 3
2570 LINE (0,99-I)-(319,99-I),2
2580 LINE (0,99+I)-(319,99+I),2
2590 NEXT I
2600 IF SCORE(PTR) = 2 THEN GOSUB 3360
2610 CLS
2620 COLOR 0,1
2630 LOCATE 9,7
2640 PRINT "NOW TRY TO SPELL IT ...
2650 LOCATE 14,17 - LEN(A$(PTR)) /2:SOUND 2000,1
2660 IF LEN(INKEY$) THEN 2660
2670 INPUT CAP$
2680 IF CAP$ = A$(PTR) THEN 2860
2690 '
2700 ' WHOOPS, BETTER LUCK NEXT TIME
2710 CLS
2720 LOCATE 14,9
2730 SOUND 50,5
2740 PRINT "SORRY ......    ";A$(PTR);
2750 LOCATE 16,17
2760 INPUT CAP$
2770 IF CAP$ <> A$(PTR) THEN GOTO 2710
2780 CLS:LOCATE 14,9:PRINT "NOW SPELL IT...."
2790 LOCATE 16,17
2800 INPUT CAP$
2810 IF CAP$ <> A$(PTR) THEN GOTO 2710
2820 SCORE(PTR) =2
2830 GOTO 2390
2840 '
2850 'WOW, SIT BACK AND ENJOY SUCESS FOR A SPELL
2860 CLS
2870 COLOR 0,0
2880 LOCATE 12,14:SOUND 300,3
2890 H=INT(RND*5+1)
2900 ON H GOTO 2910,2920,2930,2940,2950
2910 PRINT "  VERY GOOD ":GOTO 2960
2920 PRINT "THAT'S RIGHT":GOTO 2960
2930 PRINT "   SMARTY ":GOTO 2960
2940 PRINT "    GREAT":GOTO 2960
2950 PRINT "   GENIUS":GOTO 2960
2960 '
2970 LOCATE 14,20-R:PRINT NAM$;"!
2980 FOR I = 33 TO 123 STEP 5
2990 X1 = 160 - 3 * I
3000 X2 = 160 + 3 * I
3010 Y1 = 99 - I
3020 Y2 = 99 + I
3030 LINE (X1,99)-(160,Y1)
3040 LINE - (X2,99)
3050 LINE - (160,Y2)
3060 LINE -(X1,99)
3070 NEXT I
3080 SCORE(PTR) = SCORE(PTR) - 1
3090 GOTO 2390
3100 '
3110 CLS
3120 LOCATE 1,1
3130 PRINT "YOU DID IT! NOW YOU KNOW HOW TO SPELL
3140 PRINT "ALL THESE WORDS...",,,,,
3150 FOR I = 1 TO C
3160 PRINT A$(I),
3170 NEXT I
3180 PRINT
3190 PRINT
3200 PRINT TAB(11)"CONGRATULATIONS !!
3210 PRINT TAB(11)STRING$(17,"_");
3220 LOCATE 22
3230 END
3240 ' CHANGE LITTLE LETTERS TO CAPITALS
3250 FOR CH = 1 TO LEN(NAM$)
3260 CH$=MID$(NAM$,CH,1)
3270 FT = ASC(CH$)
3280 IF FT<96 THEN GOTO 3340
3290 IF FT>123 THEN GOTO 3340
3300 FT=FT-32
3310 CH$=CHR$(FT)
3320 MID$(NAM$,CH,1)=CHR$(ASC(CH$))
3330 NEXT CH
3340 RETURN
3350 'SUBROUTINE, DELAY FOR AWHILE'''''
3360 FOR DELAY = 1 TO 777
3370 NEXT DELAY
3380 RETURN
3390 DATA little,down,go,here,it
3400 DATA big,a,come,funny,help
3410 DATA jump,in,and,is,I
3420 DATA blue,for,away,can,find
3430 DATA you,red,the,to,where
3440 DATA my,look,play,see,three
3450 DATA two,we,yellow,up,make
3460 DATA not,said,me,one,run
3470 DATA went,no,they,good,came,she,ate,be,but,all,saw
3480 DATA now,please,ran,with,what,so,get,into,news,am,saw
3490 DATA,at,black,did,on,white,do,like,under,too,who
3500 DATA that,say,there,out,pretty,will,this,was,eat,he
3510 DATA ride,yes,are,brown,four,must,well,have,soon,our
3520 DATA flower,night,top,car,game,paper,toy,cat,garden,party
3530 REM nouns
3540 DATA now,please,ran,with,what,so,get,into,news,am
3550 DATA,at,black,did,on,white,do,like,under,too,who
3560 DATA table,bread,fish,name,thing,brother,floor,nest,time,cake
3570 REM nouns
3580 DATA,saw,want,apple,day,home,school,baby,dog,horse,seed
3590 DATA back,doll,house,sheep,ball,door,kitty,shoe,bear,duck
3600 REM grade 1
3610 DATA know,after,every,an,going,him,live,could,of,again
3620 DATA thank,just,them,had,put,once,fly,has,how,any
3630 DATA give,walk,let,open,old,take,think,ask,may,over
3640 DATA round,her,were,then,some,by,from,stop,when,his
3650 '   nouns
3660 DATA as,kitty,shoe,bear,duck,leg,sister,bed,egg,letter
3670 DATA snow,bell,eye,man,song,bird,farm,men,squirrel,birthday
3680 '   grade 2
3690 DATA sleep,don't,first,read,been,write,around,does,goes,its
3700 DATA your,many,wish,because,buy,cold,call,made,very,found
3710 DATA tell,their,why,best,use,these,right,off,always,sit
3720 DATA wash,green,would,five,work,gave,or,sing,us,fast
3730 DATA which,both,upon,befor,those,pull,farmer,milk,stick,boat
3740 '   more nouns also 4 in top line
3750 DATA tree,chair,girl,picture,watch,chicken,good-by,pig,water,children
3760 DATA father,money,street,box,feet,morning,sun,boy,fire,mother
3770 '   grade 3
3780 DATA carry,draw,clean,fall,if,together,laugh,much,cut,about
3790 DATA hold,got,bring,hot,kind,long,done,eight,hurt,keep
3800 DATA snow,light,myself,seven,grow,today,better,full,never,only
3810 DATA own,six,shall,ten,start,warm,pick,drink,far,try
3820 '  more nouns
3830 DATA flower,night,top,car,game,paper,toy,cat,garden,party
3840 DATA tree,chair,girl,picture,watch,chicken,good-by,pig,water,children
3850 DATA grass,rabbit,way,christmas,ground,rain,wind,coat,hand,ring
3860 DATA window,corn,head,robin,wood,cow,hill,Santa Claus,squirrel,school
3870 DATA little,down,go,here,it
```

## SPELLBEE.BAS

```bas
10 REM        SPELLING BEE
20 REM
25 REM    By  Keith Barber  KCMO
30 REM
40 REM  Variables
50 REM     a$(I)  Spelling List
60 REM     N     No. of words to spell
70 REM     S     Selection; Speed
80 REM     B$    User Spelling
90 REM     T     Error Counter
100 REM     W     No. Wrong
110 REM     C     No. Correct
120 REM     TD    Time Delay
130 REM    X,Y,R  Location & Radius
140 REM           of face
150 REM
160 REM
170 REM
180 KEY OFF :CLS
190 SCREEN 1
200 KDB=VAL(RIGHT$(TIME$,2))*VAL(MID$(TIME$,4,2))
210 RANDOMIZE KDB
220 DIM A$(700),A(2,2)
230 SB$="SPELLING BEE"
240 PRINT :PRINT TAB(14);SB$
250 PRINT :PRINT :PRINT
260 PRINT "   Skill Levels:"
270 PRINT "      1) Beginning"
280 PRINT "      2) Intermediate"
290 PRINT "      3) Average"
300 PRINT "      4) Advanced"
310 PRINT "      5) Speed Reader"
320 PRINT
330 INPUT "What is your selection";S
340 PRINT
350 FOR CK=1 TO 5
360 IF CK = S THEN 400
370 NEXT CK
380 CLS : PRINT
390 CLS: PRINT "The number you selected was not offered,":PRINT "please reenter your selection.":PRINT :GOTO 230
400 INPUT "How many words would you like to spell";N
410 IF N>10 THEN PRINT "That's too many words to work with at":PRINT "one time. I'll let you spell 10 words":PRINT "during this exercise.": N=10 ELSE 430
420 FOR TD=1 TO 2000 : NEXT TD
430 ON S GOTO 440,470,500,530,560
440 T = -1
450 OPEN "I",1,"spell1.dat"
460 GOTO 580
470 T = 0
480 OPEN "I",1,"spell2.dat"
490 GOTO 580
500 T = 1
510 OPEN "I",1,"spell3.dat"
520 GOTO 580
530 T = 2
540 OPEN "I",1,"spell4.dat"
550 GOTO 580
560 T = 2
570 OPEN "I",1,"spell4.dat"
580 IF EOF(1) THEN 630
590 INPUT #1,A$
600 WORDS = WORDS + 1
610 A$(WORDS)=A$
620 GOTO 580
630 CLOSE 1
640 N1=N
650 SKIP = INT(4*RND(1))+1
660 KB = INT(WORDS*RND(1))
670 IF KB > (WORDS - N1*SKIP) THEN 250
680 CLS
690 LOCATE 10,15 :PRINT "Get Ready!"
700 FOR TD=1 TO 800 : NEXT TD
710 FOR I=KB TO KB + N1*SKIP -SKIP STEP SKIP
712 IF S=1 THEN T=-1 :GOTO 720
714 IF S=2 THEN T=0 : GOTO 720
716 IF S=3 THEN T=1 ELSE T=2
720 CLS
730 FOR TD=1 TO 500 : NEXT TD
740 PLAY"MBL20gggc"
750 LOCATE 10,15 :PRINT A$(I)
760 FOR TD=1 TO 1500/S^1.25 :NEXT TD
770 CLS
780 LOCATE 11,6 : LINE INPUT "Spell it: ";B$
790 IF B$=A$(I) THEN 910
800 BEEP : BEEP
810 IF T=2 THEN W=W+1 :GOTO 860
820 LOCATE 13,1 : PRINT "I'm sorry that was not correct. Please  try again."
830 FOR TD=1 TO 2000 :NEXT TD
840 T=T+1
850 GOTO 720
860 CLS
870 LOCATE 20,1 :PRINT "The correct spelling is... ";A$(I)
880 GOSUB 1360
890 FOR TD=1 TO 3000 : NEXT TD
900 GOTO 960
910 LOCATE 13,16: PRINT "CORRECT"
920 PLAY "MBl4abcdc"
930 GOSUB 1230
940 C=C+1
950 FOR TD=1 TO 2000 :NEXT TD
960 NEXT I
970 CLS
980 PRINT
990 PRINT "***************************************"
1000 PRINT TAB(15)"SCOREBOARD"
1010 PRINT "***************************************"
1020 PRINT
1030 PRINT "Number of words spelled"TAB(36);N
1040 PRINT
1050 PRINT "Number of words spelled correctly"TAB(36);C
1060 PRINT
1070 PRINT "Number of words misspelled"TAB(36);W
1080 PRINT
1090 PRINT "Percent spelled correctly"TAB(35);CINT(C/N*100)"%"
1100 PRINT
1110 PRINT "***************************************"
1120 PRINT
1130 R=12 :Y=130
1140 FOR HP=1 TO CINT(C/N*100/10)
1150 X=28*HP
1160 GOSUB 1260
1170 NEXT HP
1180 PRINT
1190 LOCATE 21,1 :INPUT "WOULD YOU LIKE TO SPELL SOME MORE WORDS";A$
1200 IF LEFT$(A$,1)="y" OR LEFT$(A$,1)="Y" THEN N=N+N1:GOTO 650
1210 PRINT "Okay, have a nice day."
1220 END
1230 X=160  '  Happy Face
1240 Y=150
1250 R=40
1260 CIRCLE(X,Y),R
1270 CIRCLE(X,Y+R/6),0.4*R,,3.8,5.7
1280 CIRCLE(X-0.4*R,Y-0.2*R),0.1*R
1290 CIRCLE(X+0.4*R,Y-0.2*R),0.1*R
1300 LINE(X,Y-0.1*R)-(X,Y+0.18*R)
1310 PSET(X-0.4*R,Y-0.2*R)
1320 PSET(X+0.4*R,Y-0.2*R)
1330 CIRCLE(X-0.4*R,Y-0.2*R),0.2*R,,0.785,2.356
1340 CIRCLE(X+0.4*R,Y-0.2*R),0.2*R,,0.785,2.356
1350 RETURN
1360 X=162  '  Dunce Face
1370 Y=100
1380 R=40
1390 CIRCLE(X,Y),R
1400 CIRCLE(X,Y+0.8*R),0.4*R,,0.785,2.36
1410 CIRCLE(X-0.4*R,Y-0.2*R),0.1*R
1420 CIRCLE(X+0.4*R,Y-0.2*R),0.1*R
1430 LINE(X,Y-0.1*R)-(X,Y+0.18*R)
1440 PSET(X-0.4*R,Y-0.2*R)
1450 PSET(X+0.4*R,Y-0.2*R)
1460 CIRCLE(X-0.4*R,Y-0.2*R),0.2*R,,0.5,2
1470 CIRCLE(X+0.4*R,Y-0.2*R),0.2*R,,1.14,2.64
1480 LINE(X-R-2,Y)-(X,Y-2.2*R)
1490 LINE(X+R+2,Y)-(X,Y-2.2*R)
1500 LOCATE 8,21 :PRINT "D"
1510 CIRCLE(X-0.39*R,Y-0.2*R),1,,,,2
1520 GET(X-0.39*R-1,Y-0.2*R-1)-(X-0.39*R+1,Y-0.2*R+1),A
1530 PUT(X-0.39*R-1,Y-0.2*R-1),A,>=
1540 PSET(X-0.4*R,Y-0.2*R)
1550 FOR TD=1 TO 2
1560 FOR Y1 =Y-0.2*R TO Y-0.2*R+50 STEP 0.2
1570 PUT(X-0.39*R,Y1),A,>=
1580 PUT(X-0.39*R,Y1),A,>=
1590 NEXT Y1
1600 NEXT TD
1610 RETURN
```

## SPELLDAT.BAS

```bas
10 CLS:KEY OFF
12 ' replace data files for spellbee.bas
15 OPEN "O",1, "spell1.dat"
17 'Use 1,2,3,or 4  /|\
30 READ A$
35 IF A$ = "zodiac" THEN 60
40 PRINT #1, A$
50 GOTO 30
60 CLOSE 1
70 END
100 DATA apple,any,more,ETC
110 '
120 '
130 '  Place data statements here
140 '
150 '
1000 DATA zodiac
```

## STORY.BAS

```bas
10       REM---------------------------------------------------
20       REM             s  t  o  r  y
30       REM---------------------------------------------------
40       REM                     june 16, 1977
50 KEY OFF: CLS: PRINT
60       PRINT TAB(15);"S   t   o   r   y"
70       PRINT:PRINT:PRINT
80    PRINT
90    DIM A$(11),B$(5),C$(10)
100    PRINT "First, we will need to know your name ";
110    INPUT NAM$
120     PRINT "thanx, ";NAM$
130      RANDOMIZE
140    PRINT CHR$(7);TAB(12);"O.K.  --  We're going to print some stories"
150    PRINT TAB(12);"together.  You supply the words, I supply the plot."
160 PRINT TAB(12);"Type the number of the one you would like ";
170 INPUT N
180   REM
190 PRINT TAB(12);"First I need eleven adjectives.  Adjectives modify":PRINT TAB(12);"a noun, like: Red, Dirty, Large, etc."
200 FOR X=1 TO 11:PRINT TAB(15);"Adjective #";X;" ";:INPUT A$(X):NEXT X:PRINT:PRINT:PRINT TAB(12);"Thanks"
210 PRINT TAB(12);"Now I need five adverbs.  They modify verbs and end":PRINT TAB(12);"in 'ly', like: Slowly, Greedily."
220 FOR X=1 TO 5:PRINT TAB(15);"Adverb #";X;" ";:INPUT B$(X):NEXT X:PRINT:PRINT TAB(12);"Thank you, ";NAM$
230 PRINT:PRINT TAB(12);"Next I'll need 10 nouns!  These are names of things, such":PRINT TAB(12);"as: Insect, Box, Tree, Banana"
240 FOR X=1 TO 10:PRINT TAB(15);"Noun #";X;" ";:INPUT C$(X):NEXT X
250 PRINT:PRINT TAB(12);"You're doing great, ";NAM$;", there's not much more."
260 PRINT:PRINT TAB(12);"How about two first names of men.":PRINT TAB(15);"The first man's name ";:INPUT D$:PRINT TAB(15);"And now the second's ";:INPUT E$
270 PRINT:PRINT TAB(12);"The first name of a woman ";:INPUT F$:PRINT:PRINT TAB(12);"And someone's last name ";:INPUT G$
280 PRINT:PRINT TAB(12);"A geographical location ";:INPUT H$:PRINT:PRINT TAB(12);"A kind of liquid ";:INPUT I$
290 PRINT:PRINT TAB(12);"And finally, an exclamatory word or two ";:INPUT J$
300 PRINT:PRINT TAB(12);"Well done, ";NAM$;", now. . ."
310    REM
320    PRINT
330    PRINT TAB(12);"Would you like a newspaper ad (1),"
340    PRINT TAB(12);"               a western (2),"
350    PRINT TAB(12);"               a story about the army (3),"
360    PRINT TAB(12);"            or a waterbed (4)."
365 INPUT N
370 REM
380 ON N GOSUB 460,650,910,1180
390 PRINT TAB(15);"Want another story ";NAM$;" ";
400 INPUT QQ$
410 IF LEFT$(QQ$,1)<>"Y" AND LEFT$(QQ$,1)<>"y" THEN PRINT:PRINT:PRINT:PRINT TAB(15);"goodbye "; NAM$:END
420 PRINT TAB(15);"Want to use the same words ";
430 INPUT QQ$
440 IF LEFT$(QQ$,1)<>"Y" AND LEFT$(QQ$,1)<>"y" THEN GOTO 180
450 GOTO 310
460 REM
470 PRINT
480 PRINT
490 PRINT
500 PRINT
510 PRINT TAB(15);"DAILY GRUNT CLASSIFIEDS"
520 PRINT "FOR SALE: 1957 Sedan.  This ";A$(1);" car is in a ";A$(2)
530 PRINT "condition.  It was formerly owned by a ";A$(3);" school teacher"
540 PRINT "who always drove it ";B$(1);".  There is a ";A$(4);" ";C$(1);" in"
550 PRINT "the back seat.  It has a chrome ";C$(2);" on the hood, a ";A$(5)
560 PRINT "paint job, ";A$(6);" tires and the back opens into a ";A$(7)
570 PRINT C$(3);".  Will consider taking a slightly used ";C$(4);" in trade."
580 PRINT:PRINT
590 PRINT "LOST:  In the vicinity of ";H$;", a ";A$(8);" french poodle with"
600 PRINT A$(9);" hair and a ";A$(10);" tail.  It answers to the name of"
610 PRINT F$;".  When last seen it was carrying a ";C$(5);" in its mouth."
620 PRINT "A ";A$(11);" reward is offered."
630 PRINT :PRINT :PRINT
640      RETURN
650 REM
660 PRINT:PRINT:PRINT:PRINT
670 PRINT TAB(12);"AN ADULT WESTERN"
680 PRINT
690 PRINT "Tex ";G$;", the Marshall of ";D$;" City rode into town.  He sat"
700 PRINT B$(2);" in the saddle, ready for trouble.  He knew that his ";A$(1)
710 PRINT "enemy, ";E$;" the Kid was in town.  The Kid was in love with Tex's"
720 PRINT "horse, ";F$;".  Suddenly, the Kid came out of the ";A$(7);" Nugget"
730 PRINT "Saloon.  "
740 PRINT
750 PRINT "'DRAW TEX', he yelled ";B$(3)
760 PRINT
770 PRINT "Tex reached for his ";C$(4);", but before he could get it out of"
780 PRINT "his ";C$(5);" the Kid fired, hitting Tex in the ";C$(6);" and"
790 PRINT "the ";C$(7);"."
800 PRINT
810 PRINT "As Tex fell he pulled out his own ";C$(8);" and shot the Kid ";
820 PRINT INT(50*RND+3)
830 PRINT "times in the ";C$(9);".  The Kid dropped in a pool of ";I$
840 PRINT
850 PRINT "'";J$;"', Tex said.  'I hated to do it, but he was on the wrong"
860 PRINT "side of the ";C$(10);"."
870  PRINT
880  PRINT
890 PRINT
900     RETURN
910 REM
920 PRINT :PRINT:PRINT:PRINT
930 PRINT "If you plan on joining the army, here are some ";A$(11);" hints"
940 PRINT "that will help you become a ";A$(10);" soldier."
950 PRINT
960 PRINT "The army is made up of Officers, Non-coms, and ";C$(1);"s."
970 PRINT "You can recognize an Officer by the ";C$(2);"s on his shoulders"
980 PRINT "and the funny-looking ";C$(3);"s on his cap.  When you address"
990 PRINT "an Officer, always say ";C$(4);" and say it ";B$(5);".  If you get"
1000 PRINT "a ";A$(9);" haircut, keep your ";C$(5);"s shined, and see that"
1010 PRINT "your ";C$(6);" is clean at all times, you will be a credit to the "
1020 PRINT "slogan:"
1030 PRINT
1040 PRINT "       The Army Builds Better ";C$(7);"s!"
1050 PRINT
1060 PRINT "At roll call, when the ";A$(8);" sergeant calls your name, shout"
1070 PRINT "'";J$;"' loud and clear."
1080 PRINT
1090 PRINT "You will become familiar with weapons like the .30 calibre ";C$(8)
1100 PRINT "and the automatic ";C$(9);"."
1110 PRINT
1120 PRINT "Follow this advice and you may win the. . ."
1130 PRINT
1140 PRINT "******** ";A$(7);" Conduct ";C$(10);" ********"
1150 PRINT
1160 PRINT
1170     RETURN
1180 REM
1190 PRINT
1200 PRINT "Bust-a-Button and Duck Dept. Store"
1210 PRINT "Dix Hills, New York"
1220 PRINT
1230 PRINT
1240 PRINT "Dear Sirs,"
1250 PRINT
1260 PRINT "    Last week I purchased a ";A$(2);" contour water bed in your"
1270 PRINT "store.  I got it especially for my ";A$(4);" husband who sleeps"
1280 PRINT "very ";B$(1);" and says that ";A$(6);" water beds that have"
1290 PRINT C$(1);"s in them make his ";C$(3);" ache.  When the bed arrived "
1300 PRINT "my husband tested it ";B$(2);" and said the ";A$(8);" ";C$(5)
1310 PRINT "was bent and kept pressing into his ";C$(6);".  He says this"
1320 PRINT "could lead to a ";A$(10);" condition of the ";C$(8);"."
1330 PRINT
1340 PRINT "    I would like to exchange this ";A$(9);" bed for one that"
1350 PRINT "will allow my husband to sleep ";B$(4);" and won't make his"
1360 PRINT C$(10);" sore."
1370 PRINT
1380 PRINT
1390 PRINT TAB(25);"Yours ";B$(5);","
1400 PRINT TAB(25);F$;" ";G$
1410 PRINT
1420 PRINT
1430     RETURN
```

## TELLTIME.BAS

```bas
100 ' TELLTIME written by Lloyd Onyett
110 ' of Chehalis, Washington
220 DEFINT A-Z:DEFSNG P
230 KEY OFF:SCREEN 1,0,0,0:COLOR 0,1
240 PI=3.141593
250 RANDOMIZE VAL(MID$(TIME$,7))
290 HR=RND*12 MOD 12+1
300 MIN=(HR+RND*11 MOD 11)MOD 12+1
340 CLS
350 CIRCLE (230,100),2,3
360 CIRCLE (230,100),80,1
370 H=(15-HR)MOD 12
380 HANGLE!=H*-2*PI/12+(MIN+12*(MIN>6))*PI/72
390 IF HANGLE!>0 THEN HANGLE!=HANGLE!-2*PI
400 CIRCLE (230,100),50,1,HANGLE!+0.02,HANGLE!-0.02
410 M=(15-MIN)MOD 12
420 MANGLE!=M*-2*PI/12
430 CIRCLE (230,100),70,2,MANGLE!+0.02+2*PI*(M=0),MANGLE!-0.02
470 LOCATE 2,17:PRINT "TELLTIME"
480 LOCATE 4,29:PRINT "12"
490 LOCATE 5,24:PRINT "11":LOCATE 5,35:PRINT "1"
500 LOCATE 9,19:PRINT "10":LOCATE 9,39:PRINT "2"
510 LOCATE 13,19:PRINT "9":LOCATE 13,40:PRINT "3"
520 LOCATE 17,20:PRINT "8":LOCATE 17,39:PRINT "4"
530 LOCATE 21,24:PRINT "7":LOCATE 21,35:PRINT "5"
540 LOCATE 22,30:PRINT "6"
580 C=RND*3 MOD 3+1
590 CH(C)=HR
600 CM(C)=MIN
610 D=(C+RND*2 MOD 2)MOD 3+1
620 CH(D)=MIN
630 CM(D)=HR
640 E=6-C-D
650 CH(E)=HR
660 CM(E)=12-MIN
670 IF CM(E) MOD 6=0 THEN CM(E)=CM(E)+6
710 LOCATE 6,1:PRINT "What time is it?"
720 FOR J=1 TO 3
730 LOCATE J*4+6,1
740 PRINT "("CHR$(64+J)")";
750 GOSUB 1270
760 NEXT
770 LOCATE 24,4:PRINT "hit key A, B, or C. (X to stop)";
780 RESP$=INKEY$:IF RESP$="" THEN 790 ELSE 800
790 FOR A=1 TO 300:NEXT:SOUND 18000,0.03:GOTO 780
800 LOCATE 24,1:PRINT SPC(39);
810 ANS=(ASC(RESP$) OR 32)-96
820 IF ANS=24 THEN 1390
830 IF ANS>0 AND ANS<4 THEN 950
870 LOCATE 24,1:PRINT "   A, B, or C, PLEASE!";
880 FOR J=1 TO 6
890 SOUND 50*(J MOD 2+1),5
900 NEXT
910 GOTO 770
950 CIRCLE (200,85),20,1-(ANS<>C),3*PI/8,5*PI/8
960 CIRCLE (260,85),20,1-(ANS<>C),3*PI/8,5*PI/8
970 IF ANS=C THEN 1120
1010 SOUND 40,40
1020 CIRCLE (230,200),80,1,(3*PI/8),(5*PI/8)
1030 LOCATE 23,1:PRINT SPC(6) CHR$(ANS+64);" is wrong"
1040 PRINT "the correct answer is "; CHR$(64+C);
1050 FOR J=1 TO 4000:NEXT
1070 NUMWRONG=NUMWRONG+1
1080 GOTO 290
1120 LOCATE 24,1
1130 J=0
1140 FLG=0
1150 PRINT "Correct!!!!";
1160 CIRCLE (230,100),50,2,(10*PI/8),(14*PI/8)
1170 FOR J=1000 TO 4000 STEP 80
1180 SOUND J,0.04
1190 NEXT
1200 FOR J=1 TO 2000
1210 NEXT
1220 NUMRIGHT=NUMRIGHT+1
1230 GOTO 290
1270 IF CM(J)=12 THEN 1340
1280 IF CM(J)<7 THEN CM5(J)=CM(J):CONNECT$="after" ELSE CM5(J)=12-CM(J):CONNECT$="to"
1290 CM5$=STR$(CM5(J)*5)
1300 PRINT RIGHT$(CM5$,LEN(CM5$)+FLG); " minutes ";
1310 IF NOT FLG THEN PRINT :PRINT SPC(5);
1320 PRINT CONNECT$;CH(J);
1330 GOTO 1350
1340 PRINT CH(J);"o'clock ";
1350 RETURN
1390 IF NUMRIGHT<NUMWRONG THEN 1410
1400 LOCATE 23,1:PRINT "Very good, you answered":GOTO 1420
1410 LOCATE 23,1:PRINT "Too bad, you answered"
1420 PRINT NUMRIGHT;" right and";NUMWRONG;"wrong.";
1430 LOCATE 1,1
1440 END
```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0168

     Volume in drive A has no label
     Directory of A:\

    ALGEBRA  BAS      5504   2-17-83
    BABYMATH EXE     20352   8-15-83   1:39a
    BACH     BAS      6912   6-18-83   5:17p
    BACH2    BAS      8704   1-08-84  11:23p
    BIBLE    BAS       768   7-15-82  10:23p
    CHEMQUES BAS      6400  11-26-83   5:10p
    CHEMTEST BAS      6912  11-26-83   5:02p
    CLASROLL BAS      9600   3-15-83  10:38p
    CLASROLL DOC       768   3-09-83   1:31a
    COFFEE   BAS     12312  10-04-25   1:31p
    CRC      TXT      1781  11-15-84   6:31a
    CRCK4    COM      1536  10-21-82   7:54p
    GODFATHR BAS       768   7-15-82  10:31p
    JESUSLOV BAS       640   7-15-82  10:23p
    MINUET   BAS      1085   6-18-83   1:47p
    MINUET2  BAS      1093   6-18-83   1:48p
    PIANO1   BAS      9027   1-01-80  12:37a
    PIANO2   BAS      9316   1-01-80   1:25a
    SPELL    BAS      7978  10-16-83  12:07p
    SPELL1   DAT      4253   4-03-83   4:20a
    SPELL2   DAT      2299   4-03-83   4:30a
    SPELL3   DAT      6168   4-03-83   4:35a
    SPELL4   DAT      7811   4-03-83   4:54a
    SPELLBEE BAS      3968   1-01-80  12:11a
    SPELLDAT BAS       384   1-01-80  12:30a
    STORY    BAS      5666   1-01-80   6:02a
    TELLTIME BAS      2304   4-08-83  10:28a
    XXX               1408   5-22-84   9:08p
           28 file(s)     145717 bytes
                            7168 bytes free
