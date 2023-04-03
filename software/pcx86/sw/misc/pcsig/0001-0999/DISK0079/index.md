---
layout: page
title: "PC-SIG Library Disk #79"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0079/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0079"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "DOS UTILITIES NO 2"

    This disk contains an assortment of utilities, and a game or two, to
    interest almost anyone.  The selection includes the popular game of
    LIFE in several versions; programs to test your drives, change your
    keyboard, and control your printer.  Other games and utilities should
    give something for almost anyone.
    
    KEYLOK is one of those convenience utility keys that you'll either find
    functional because of the way you work on a computer or not. When the
    program is loaded, it automatically holds down the ALT, CTRL, and SHFT
    keys with your first stroke and releases them on your second stroke,
    creating a toggle effect. It causes those keys to function much as the
    CAPSLOCK key does.  This saves a lot of the hassles and the awkwardness
    of holding them down as you operate the main keyboard with one hand.
    
    System Requirements:  Some programs require BASIC.
    
    How to Start: To run a COM or EXE program simply type its name and
    press <ENTER>.  For instructions on ASM listings, refer to your
    Assembler manual.  To read DOC or TXT files, simply enter TYPE
    filename.ext and press <ENTER>.
    
    File Descriptions:
    
    AD       COM  Quadram's Alphabetic Directory (Name & Extent in 5 col.)
    BALL     BAS  Shoot pea into cup - simple text mode game
    ADD-LF   BAS  Adds linefeeds to files that contain only carriage returns
    KEYLOC   DOC  Documentation for KEYLOC.EXE
    KEYLOC   ASM  Source code for KEYLOC.EXE
    DSKTST   BAS  Disk Drive Test program
    DRIVETST BAS  Disk Drive Test program
    DISPLAY  TXT  IBM Bulletin UU-12. Faster screen writes
    DISPLAY  BAS  Program portion of IBM Bulletin UU-12
    DESIGN   BAS  Nice graphics demo program
    CONV     BAS  Converts COM/EXE to transmittable BASIC
    KEYLOC   EXE  Converts momentary keys (Alt,Ctrl,Shift) to toggle keys
    LIFE     EXE  Rabbit paced version of John Conway's famous Game of Life
    LIFE     ASM  Source code for LIFE.EXE - bugs
    LUNAR    BAS  Pick a flat spot and try to land, not too hard!
    MAIL1    BAS  Mail list program. Keeps sort indexes on four fields
    PEEKPOKE TXT  Information on memory locations and their contents
    MEMORY   DOC  Documentation for MEMORY.COM
    MEMORY   COM  Sets memory size independent of system board switches
    MAIL1    DOC  Documentation for MAIL1.BAS
    ROD      BAS  Draws every varying mosaic pattern
    QUADRAM  DOC  Documentation for QUADRAM programs
    QSWAP    COM  QUADRAM printer swap, LPT1:/LPT2:
    QSPOOL   COM  QUADRAM print spooler
    QMXT     EXE  QUADRAM 9 sector multidrive  0 to 360KB
    QM       EXE  QUADRAM 8 sector multidrive  0 to 320KB
    QDXT     EXE  QUADRAM 9 sector drive  0 to 360KB
    QD       EXE  QUADRAM 8 sector drive  0 to 320KB
    SETPRTR  C    Source for SETPRTR.EXE
    SETPRTR  EXE  Setup MX-80 printer from Menu Screen
    LIFE2    BAS  Another version of Life, runs on color monitors
    LIFE2    EXE  Compiled super fast version of LIFE2
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## ADD-LF.BAS

```bas
10 INPUT"INPUT THE FILENAME THAT WAS DOWNLOADED WITHOUT LF'S (D:FILENAME)",A$
20 INPUT"INPUT THE NEW NAME FOR THE DOWNLOADED FILE (d:filename) ",B$
30 ' CHANGE THE INPUT AND OUTPUT NAMES TO THE NAMES OF THE FILES YOU WANT AS
40 ' INPUT AND OUTPUT  PRIMARILY USED TO COPY FILES WITH NO CARRIAGE RETURNS
50 ' IN THEM SO THAT YOU CAN EDLIN THEM   CONTRIBUTED BY DON WITHROW
55 '
60 ' UPDATED BY D VERT
70 '   THE MAJOR PROBLEM SEEMS TO BE A LACK OF LINE-FEEDS RATHER THAN
80 '   CARRIAGE RETURNS..THIS RE-WRITE WILL READ A CHARACTER AT A TIME
90 '   AND BUILD A NEW LINE UNTIL IT READS A CHARIAGE RETURN.  IT WILL
100 '   THEN WRITE OUT THAT LINE ALLOWING BASIC TO ADD ITS CARRIAGE RETURN.
102 ' THIS TECHNIQUE ALSO FIXES A PROBLEM WITH THE LINE AT A TIME
104 ' APPROACH WHICH CREATED A NEW LINE EVERY TIME IT FOUND A COMMA.
106 '
108 '
110 ON ERROR GOTO 190
120 OPEN A$ FOR INPUT AS #1
130 OPEN B$ FOR OUTPUT AS #2
140 REM
150 IF EOF(1) THEN GOTO 190 ELSE GOSUB 280: REM RETURNS WITH L$
160 PRINT #2,L$
170 PRINT L$
180 GOTO 150
190 PRINT "done..........":CLOSE:END
200 PRINT "error type=";ERR,"error stmt #=";ERL
210 ON ERROR GOTO 0
220 CLOSE:END
230 'This program will add Line feeds to a downloaded file that does
240 'not appear to have them when you try to list it using the DOS TYPE
250 'command. The file has to be a basic program
260 'After adding LF's to the file you can then use EDLIN to remove direct
270 'statements from the file.
280 REM
290 L$=""
300 WHILE S$ <> CHR$(13)
310 IF EOF(1) THEN RETURN 140
320 S$=INPUT$(1,#1): REM READ SINGLE CHARACTER
330 L$=L$+S$
340 WEND
350 LL%=LEN(L$)
360 IF LL%<1, THEN S$="": GOTO 280
370 L$=LEFT$(L$,LEN(L$)-1)
380 S$=""
390 RETURN
30 L$=L$+S$
340 WEND
350 LL%=LEN(L$)
360 IF LL%<1, THEN S$=""
```

## BALL.BAS

```bas
0 WIDTH 80
10 REM BALL.BAS  2/16/82
20 REM PROGRAM BY TOM SPRINGALL
40 GOTO 110
110 T$=TIME$:X=0
120 FOR I = 2 TO 3:X=X*60+ VAL(MID$(T$,(3*I-2),2)):NEXT:RANDOMIZE X-32000
130 CLS
140 PRINT "The object of this game is to shoot a pea from the peashooter at the upper"
150 PRINT "left hand corner of the screen with the correct velocity so that it lands in"
160 PRINT "the tee at the bottom of the screen.  The bigger the velocity you enter, the"
170 PRINT "farther the pea will travel.  Correct velocities should range from 30-110.":PRINT
180 PRINT "The tee will be in a different position for each game.  A scoreboard in the"
190 PRINT "upper right of the screen will keep track of how many shots it takes in each"
200 PRINT "game to hit the tee.":PRINT
210 PRINT "Press any key to begin.
220 T$=INKEY$:IF T$="" GOTO 220 ELSE IF ASC(T$)=27 GOTO 680
230 DIM R(80),C(80):DEF SEG:POKE 108,0:KEY OFF:E=2:F=1:B=0.05:A=B*2:CLS
240 LOCATE 1,48,0:PRINT STRING$(32,220);
250 LOCATE 2,48,0:PRINT CHR$(221);SPACE$(30);CHR$(222);
260 LOCATE 3,48,0:PRINT CHR$(221);" TOTAL    GAMES WON IN";SPACE$(8);CHR$(222);
270 LOCATE 4,48,0:PRINT CHR$(221);" GAMES  1  2  3  4  5 >5  AVE ";CHR$(222);
280 LOCATE 5,48,0:PRINT CHR$(221);SPACE$(30);CHR$(222);
290 LOCATE 6,48,0:PRINT CHR$(221);SPACE$(30);CHR$(222);
300 LOCATE 7,48,0:PRINT STRING$(32,223);
310 DIM GMS(7)
320 P=19+CINT(58*RND):CNT=0:GOSUB 640
330 LOCATE 1,1,0:PRINT STRING$(2,220);:LOCATE 3,1,0:PRINT STRING$(2,223);
340 LOCATE 25,P-2,0: PRINT "--";CHR$(157);"--";
350 LOCATE 2,1,0:PRINT"o";:CNT=CNT+1:GMS(7)=GMS(7)+1
360 IF CNT>6 THEN H=6 ELSE H=CNT
370 LOCATE 6,51+H*3,0:PRINT"   ^";
380 T$=INKEY$:IF T$<>"" THEN IF ASC(T$)=27 GOTO 680 ELSE 380
390 LOCATE 24,1,1:PRINT SPACE$(30);:LOCATE 24,1,1:INPUT;"VELOCITY";V
400 IF V<1 THEN BEEP:GOTO 390
410 V=V*B:E=2:F=1
420 FOR I = 1 TO 80
430 R(I)=2+CINT(A*I*I):C(I)=2+CINT(V*I)
440 IF C(I)>79 OR R(I)>24 GOTO 460
450 NEXT I
460 I=I-1:IF C(I+1)>79 OR R(I)=24 GOTO 490
470 T=CINT(SQR(24*V*V/A))
480 IF T<80 THEN R(I)=24:C(I)=T
490 FOR J=1 TO I
500 LOCATE E,F,0:PRINT " ";:LOCATE R(J),C(J),0:PRINT "o";:E=R(J):F=C(J)
510 FOR K=1 TO 100:NEXT K
520 NEXT J
530 IF R(I)=24 AND C(I)=P GOTO 560
540 COLOR 7,0
550 LOCATE E,F,0:PRINT " ";:GOTO 330
560 BEEP:GMS(H)=GMS(H)+1:GMS(0)=GMS(0)+1:GOSUB 640
570 LOCATE 24,1,1:PRINT "NEW GAME? (Y/N)";
580 T$=INKEY$:IF T$="" GOTO 580
590 IF T$="N" OR T$="n" OR T$=CHR$(27) GOTO 680
600 LOCATE 24,1,0:PRINT SPACE$(79);
610 LOCATE 25,1,0:PRINT SPACE$(79);
620 LOCATE 6,52,0:PRINT SPACE$(27)
630 GOTO 320
640 LOCATE 5,50,0:PRINT USING " ### ";GMS(0);
650 PRINT USING "###";GMS(1),GMS(2),GMS(3),GMS(4),GMS(5),GMS(6);
660 IF GMS(0)=0 THEN RETURN
670 PRINT USING "###.#";GMS(7)/GMS(0);:RETURN
680 CLS:KEY ON:END
```

## CONV.BAS

```bas
10 ' COPYRIGHT 1982, RICHARD M. SCHINNELL
20 ' This Program is called CONV.BAS
30 ON ERROR GOTO 660
40 CLS:LOCATE 12,1
50 PRINT"COPYRIGHT 1982, Richard Schinnell Rockville,Maryland 301 949-8848 "
60 PRINT"This program will convert .COM files to a basic program which"
70 PRINT"you then can transmit to someone over the Telephone. They
80 PRINT"can then run the basic program and it will re-create the .COM pgm.
90 PRINT"just like you had it.       E N J O Y   RICH......":PRINT
100 INPUT "Name of the COM or EXE File to convert (<5001 Bytes )?: ";FIL1$
110 PRINT "To call the program with the same name with .BAS ext hit C/R"
120 INPUT "WHAT do you wish to call the basic program ?: ";FIL2$
130 IF LEN(FIL2$)<1 THEN FIL2$=MID$(FIL1$,1,(INSTR(FIL1$,".")-1))+".BAS"
140 RICH$="1000 DATA ":NUMLIN=1010:X=0:GRAND#=0:CNT=1
150 IF FIL1$=FIL2$ THEN CLS:LOCATE 12,15:PRINT "DUPLICATE FILE NAMES ":GOTO 10
160 OPEN FIL1$ FOR INPUT AS #1:CLOSE #1
170 OPEN  FIL1$  AS #1 LEN=1 ' opening the .COM file
180 V= VARPTR(#1) ' looking at the FCB
190 L0=PEEK(V) ' getting the type of file
200 IF L0<>4 THEN 660 ' if file not random then abort
210 L1=PEEK(V+17) + 256 * PEEK(V+18) ' this gets the filesize in bytes
220 LIMIT = L1:IF LIMIT>5000 THEN GOTO 660  ' if it's too big then abort
230 OPEN  FIL2$  FOR OUTPUT AS #2 ' opening up the .bas file this pgm creates
240 GOSUB 440
250 PRINT #2," 99 DATA ";STR$(LIMIT)
260 FIELD #1,1 AS GETS$
270 X =X +1:IF X =< LIMIT THEN GET #1,X ELSE 370
280 RICH1$=STR$(ASC(GETS$))
290 IF CNT <13 THEN RICH$=RICH$+MID$(RICH1$,2,LEN(RICH1$)-1)+",":CNT=CNT+1:GRAND#=GRAND#+ASC(GETS$):GOTO 270
300 GOTO 370
310 LOCATE 20,5:PRINT     "total ASCII count is ";GRAND#
320 PRINT #2,"5000 PRINT ";CHR$(34);"* * ERROR VERIFY DATA * * * ";CHR$(34)
330 PRINT #2,"5010 CLOSE:END"
340 LOCATE 18,1:PRINT SPC(78);:LOCATE 18,1:PRINT RICH$;
350 LOCATE 20,1:PRINT" You have sucessfully created file named ";FIL2$
360 CLOSE:END
370 RICH$=LEFT$(RICH$,(LEN(RICH$)-1))
380 CNT=1:PRINT #2,RICH$:NUMLIN=NUMLIN+1
390 LOCATE 18,1:PRINT SPC(78);:LOCATE 18,1:PRINT RICH$;
400 IF X = LIMIT+1 THEN PRINT #2, RIGHT$(STR$(NUMLIN),4);" DATA ";STR$(GRAND#):GOTO 320
410 LIN$=RIGHT$(STR$(NUMLIN),4)
420 RICH$=LIN$+" DATA "+MID$(RICH1$,2,LEN(RICH1$)-1)+",":GRAND#=GRAND#+ASC(GETS$)
430 GOTO 270
440 PRINT #2,"  1 CLS:PRINT ";CHR$(34);"THIS basic PROGRAM WAS AUTOMATICALLY CREATED BY CONVERT.BAS";CHR$(34)
450 IF INSTR(FIL1$,":")=2 THEN FIL3$=MID$(FIL1$,3,13) ELSE FIL3$=FIL1$
460 PRINT #2,"  2 PRINT";CHR$(34);"Copyright 1982 ,Rich Schinnell Rockville,MD. Not for Sale.";CHR$(34)
470 PRINT #2,"  3 PRINT ";CHR$(34);"This program will automatically generate you a .COM program named ";FIL3$;CHR$(34);":PRINT "
480 PRINT #2,"  4 ON ERROR GOTO 5000"
490 PRINT #2,"  6 INPUT ";CHR$(34);"PLACE the disk to write the file TO in Default Drive (A: Usually) HIT <ENTER> ";CHR$(34);"; SCHINNELL$"
500 PRINT #2,"  9 PRINT:PRINT ";CHR$(34);" Now reading the data statements, wait!";CHR$(34)
510 PRINT #2," 10 RESTORE:READ T:FOR I = 1 TO T:READ N:X#=X#+N:NEXT I"
520 PRINT #2," 20 READ TOT# :IF TOT#<>X# THEN 5000"
530 PRINT#2," 22 CLS:LOCATE 12,5:PRINT ";CHR$(34);"Now writing file NAMED ";FIL1$;" standby please  ASCII COUNT IS ";CHR$(34);";TOT#"
540 PRINT #2," 30 RESTORE"
550 PRINT #2," 40 OPEN ";CHR$(34);"R";CHR$(34);", #1,";CHR$(34);FIL3$;CHR$(34);",1 "
560 PRINT #2," 50 FIELD #1, 1 AS N$
570 PRINT #2," 60 READ N"
580 PRINT #2," 70 FOR I = 1 TO N
590 PRINT #2," 80 READ N:LSET N$=CHR$(N):
600 PRINT #2," 92 PUT #1 :NEXT I:CLOSE"
610 PRINT #2," 94 PRINT ";CHR$(34); FIL3$;" CREATED * *";CHR$(34);":GOTO 5010"
620 CLS:LOCATE 12,5:PRINT "I am now reading file named ";FIL1$
630 LOCATE 14,5:PRINT     "I am now writing file named ";FIL2$
640 LOCATE 16,5:PRINT     "the file size of the input file is ";LIMIT
650 RETURN
660 PRINT " you had an error ";ERR;" in line # ";ERL
670 PRINT "Probably you named a file which does not exist "
680 PRINT "try again Charlie........
690 END
```

## DESIGN.BAS

```bas
0 ' == D E S I G N . B A S == Version 2.0
1 ' Graphic formulas from Bob Boothe, from 80-Microcomputing, April-June 1981,      and TRSColor Computer routines from Jake Commander and Kavlos Gesamte, in       80-Micro, March 1982.
2 ' IBM PC conversions and modifications by Marty Smith. Houston, Texas.            (713) 661-1241  (Office)
3 ' SOURCE ST2259, COMPUSERVE 72155,1214.
4 ' This program requires BASICA, the Color Board, 64K and up, should work with     any  color display. My system has both boards and exiting through <M> or        <ALT X> makes <F7> a toggle between Color and B/W.
5 ' The <ALT X> exit leaves a design on the Color Screen and puts you in Command    Mode on Monochrome.
6 ' Originally the Function Keys called up elaborate designs that took too long     to generate on the screen. (One took the PC 2 1/2 hours). These were saved      in 16K BLOAD screens, which pretty much filled a whole disk.
7 ' That's what the BEEP's from function keys 1-8 are. This also keeps you from     inputting text strings to the program, while leaving them intact at command     mode.
25 GOSUB 8000
30 PI=3.141593
40 GOSUB 10000
45 IF ALT=1 THEN GOSUB 1601 ELSE GOSUB 1600
46 N=VAL(I$):IF I$="m" OR I$="M" THEN KEY 7,"gosub 65000"+CHR$(13):END
50 IF I$="0" THEN N=10 ELSE IF I$="c" OR I$="C" THEN GOSUB 20000
52 IF I$=CHR$(45) OR I$=CHR$(95) THEN N=11 ELSE IF I$="=" THEN N=12
53 IF I$="q" OR I$="Q" THEN M=1:GOTO 5810 ELSE IF I$="w" OR I$="W" THEN M=2:GOTO 5810 ELSE IF I$="e" OR I$="E" THEN M=3:GOTO 5810 ELSE IF I$="r" OR I$="R" THEN M=4:GOTO 5810 ELSE IF I$="t" OR I$="T" THEN M=5:GOTO 5810
54 IF I$="y" OR I$="Y" THEN M=6:GOTO 5810 ELSE IF I$="u" OR I$="U" THEN M=7:GOTO 5810 ELSE IF I$="i" OR I$="I" THEN M=8:GOTO 5810
55 ON N GOTO 110,210,320,400,500,700,850,1000,1200,1400,5000,5800
60 GOTO 40
100 REM design #5, Circle and circle
110 CLS:FOR T=0 TO 2*PI STEP PI/50
120 X1=COS(T)*160+159:Y1=SIN(T)*100+99
130 A=T+3*PI/4
140 X2=COS(A)*160+159:Y2=SIN(A)*100+99
150 GOSUB 1500
160 NEXT
170 GOSUB 1600
180 IF I$="x" THEN 40 ELSE IF I$=" " THEN 110 ELSE IF I$="0" THEN N=10:GOTO 50
200 N=VAL(I$):IF N>=0 AND N<16 THEN 50 ELSE 110
210 REM design #3, Moire Pattern
215 CLS:FOR T=0 TO PI/2 STEP PI/180
220 X1=FIX(COS(T)*100):Y1=SIN(T)*50
230 X2=FIX(COS(T)*320):Y2=SIN(T)*199
240 CO3=1:GOSUB 1500
250 X1=319-X1:Y1=199-Y1
260 X2=319-X2:Y2=199-Y2
270 CO3=2:GOSUB 1500
280 NEXT
300 GOSUB 1600
305 IF I$="x" THEN 40 ELSE IF I$=" " THEN 210 ELSE IF I$="0" THEN N=10:GOTO 50
310 N=VAL(I$):IF N>=0 AND N<13 THEN 50 ELSE 210
320 CLS:FOR T=0 TO 10*PI STEP PI/20:REM design 6, Spiral
330 X1=COS(T)*3.5*T+160:Y1=SIN(T)*3.5*T+100
340 A=T+2*PI/3
350 X2=COS(A)*3.5*A+160:Y2=SIN(A)*3.5*A+100
360 GOSUB 1500
370 NEXT
380 GOSUB 1600
390 IF I$="x" THEN 40 ELSE IF I$=" " THEN 320 ELSE IF I$="0" THEN N=10:GOTO 50
395 N=VAL(I$):IF N>=0 AND N<13 THEN 50 ELSE 320
400 CLS: FOR T=0 TO 2*PI STEP PI/60:REM design #8, Rotating Squares
410 R=COS(2*T)*100
420 X1=COS(T)*R+160:Y1=SIN(T)*R+100
430 A=T+PI/2
440 R2=COS(2*A)*100
450 X2=COS(A)*R2+160:Y2=SIN(A)*R2+100
460 GOSUB 1500
470 NEXT
480 GOSUB 1600
490 IF I$="x" THEN 40 ELSE IF I$=" " THEN 400 ELSE IF I$="0" THEN N=10:GOTO 50
495 N=VAL(I$):IF N>=0 AND N<13 THEN 50 ELSE 400
500 REM design #1, N-Sided Polygon
505 Z=0
510 PRINT"Number of points? (Maximum 48) "
515 FOR X=0 TO 10000:NEXT
516 I$=INKEY$:J$=INKEY$:I$=I$+J$:N=VAL(I$)
517 IF N=0 THEN N=CO1+10
518 IF N>48 THEN 510
519 CLS
520 FOR T=0 TO 2*PI-0.001 STEP 2*PI/N
530 Z=Z+1
540 A(Z)=COS(T)*159+159:B(Z)=SIN(T)*99+99
550 NEXT
560 FOR S=1 TO N-1:FOR D=S+1 TO N
570 X1=A(S):Y1=B(S)
580 X2=A(D):Y2=B(D)
590 GOSUB 1500
600 NEXT:NEXT
650 GOSUB 1600:IF I$="x" THEN 40 ELSE IF I$=" " THEN 500 ELSE IF I$="0" THEN N=10:GOTO 50
660 N=VAL(I$):IF N>=0 AND N<13 THEN 50 ELSE 500
700 CLS:REM design #4, Square Spiral
710 X1=200:Y1=120
720 FOR Q=1 TO 40
730 X2=X1+5*Q+2:Y2=Y1
740 CO3=1:GOSUB 1500
750 X1=X2:Y1=Y2+5*Q+3
760 CO3=2:GOSUB 1500
770 X2=X1-5*Q-5:Y2=Y1
780 CO3=3:GOSUB 1500
790 X1=X2:Y1=Y2-5*Q-6
800 CO3=2:GOSUB 1500
810 NEXT
820 GOSUB 1600
830 IF I$="x" THEN 40 ELSE IF I$=" " THEN 700 ELSE IF I$="0" THEN N=10:GOTO 50
840 N=VAL(I$):IF N>=0 AND N<13 THEN 50 ELSE 700
850 CLS:REM design# 7, Four Leaf Rose
860 FOR T=0 TO 2*PI STEP PI/75
870 R=COS(2*T)*100
880 X1=COS(T)*R+159:Y1=SIN(T)*R+99
890 A=T+PI/3
900 R2=COS(2*A)*100
910 X2=COS(A)*R2+159:Y2=SIN(A)*R2+99
920 GOSUB 1500
930 NEXT
940 GOSUB 1600
950 IF I$="x" THEN 40 ELSE IF I$=" " THEN 850 ELSE IF I$="0" THEN N=10:GOTO 50
960 N=VAL(I$):IF N>=0 AND N<13 THEN 50 ELSE 850
1000 CLS:REM design #10, Triangle Spiral
1010 FOR T=0 TO 2*PI STEP PI/30
1020 R=T*23
1030 X1=COS(T)*R+159:Y1=SIN(T)*R+99
1040 A=T+2*PI/3
1050 X2=COS(A)*R+159:Y2=SIN(A)*R+99
1060 GOSUB 1500
1070 B=T+4*PI/3
1080 X1=COS(B)*R+159:Y1=SIN(B)*R+99
1090 GOSUB 1500
1100 X2=COS(T)*R+159:Y2=SIN(T)*R+99
1110 GOSUB 1500
1120 NEXT
1130 GOSUB 1600
1140 IF I$="x" THEN 40 ELSE IF I$=" " THEN 1000 ELSE IF I$="0" THEN N=10:GOTO 50
1150 N=VAL(I$):IF N>=0 AND N<13 THEN 50 ELSE 1000
1200 REM design #11, Triangles in triangles
1210 R=1
1220 FOR T=0 TO 3.24 STEP PI/30
1230 R=R*1.16557
1240 X1=COS(T)*R+159:Y1=SIN(T)*R+99
1250 A=T+2*PI/3
1260 X2=COS(A)*R+159:Y2=SIN(A)*R+99
1270 CO3=1:GOSUB 1500
1280 B=T+4*PI/3
1290 X1=COS(B)*R+159:Y1=SIN(B)*R+99
1300 CO3=2:GOSUB 1500
1310 X2=COS(T)*R+159:Y2=SIN(T)*R+99
1320 CO3=3:GOSUB 1500
1330 NEXT
1340 CO3=2:GOSUB 1600
1350 IF I$="x" THEN 40 ELSE IF I$=" " THEN 1200 ELSE IF I$="0" THEN N=10:GOTO 50
1360 N=VAL(I$):IF N>=0 AND N<13 THEN 50 ELSE 1200
1400 Z=0:REM design # 2
1405 FOR Q=0 TO 319 STEP 9
1410 CO3=1:X1=0:Y1=Q*0.625:X2=Q:Y2=199
1415 GOSUB 1500
1420 CO3=2:X1=Q:Y1=0:X2=319:Y2=Q*0.625
1425 GOSUB 1500
1430 NEXT
1435 N=15
1440 FOR T=0 TO 2*PI -0.001 STEP 2*PI/N
1445 Z=Z+1
1450 A(Z)=COS(T)*100+159:B(Z)=SIN(T)*65+99
1455 NEXT
1460 FOR S=1 TO N-1:FOR D=S+1 TO N
1465 X1=A(S):Y1=B(S)
1470 X2=A(D):Y2=B(D)
1475 CO3=3:GOSUB 1500
1477 NEXT:NEXT
1480 GOSUB 1600
1490 IF I$="x" THEN 40 ELSE IF I$=" " THEN 1400 ELSE IF I$="0" THEN N=10: GOTO 50
1495 N=VAL(I$):IF N>=0 AND N < 13 THEN 50 ELSE 1400
1500 LINE(X1,Y1)-(X2,Y2),CO3
1510 RETURN
1600 I$="":DEF SEG:IF ALT=1 THEN 3600: ' DELAY/COLOR/SELECTION ROUTINE
1601 FOR Z=0 TO 3000
1602 I$=INKEY$:IF I$<>"" THEN Z=3000
1603 NEXT:Z=FRE(X$)
1604 IF I$="" THEN N1=CO1 MOD 16:I$ = STR$(N1)
1605 GOSUB 2000
1607 IF CO1 MOD 2 = 0 THEN CO2 = 1 ELSE IF CO1 MOD 2 = 1 THEN CO2 = 0
1608 IF LEN(I$)=2 THEN GOSUB 1640
1610 CLS:SCREEN 1,0:COLOR CO1,CO2:OUT 980,2:OUT 981,HSYNC%
1620 RETURN
1640 IF ASC(RIGHT$(I$,1))=45 THEN GOSUB 65000:END
1645 IF ASC(RIGHT$(I$,1))=30 THEN IF ALT=0 THEN ALT=1:GOSUB 4100 ELSE IF ALT=1 THEN ALT=0:GOSUB 4200
1650 RETURN
2000 CO1=RND(RNDGEN):CO2=RND(RNDGEN+1):CO3=RND(RNDGEN+3)
2005 CO2=CO2*100 MOD 2
2010 CO1=CO1*100 MOD 16
2040 CO3=CO3*100 MOD 3 + 1
2100 RETURN
3000 REM ///// F10 COLOR CHANGE ROUTINE \\\\\
3005 I$=""
3020 FOR XIT=0 TO 3000
3030 I$=INKEY$:IF I$ <> "" THEN XIT=3000
3040 NEXT XIT
3050 IF I$="b" OR I$="B" THEN CO1=0 ELSE IF I$="u" OR I$="U" THEN CO1=1 ELSE IF I$="g" OR I$="G" THEN CO1=2 ELSE IF I$="c" OR I$="C" THEN CO1=3 ELSE IF I$="r" OR I$="R" THEN CO1=4
3055 IF I$="m" OR I$="M" THEN CO1=5 ELSE IF I$="n" OR I$="N" THEN CO1=6 ELSE IF I$="w" OR I$="W" THEN CO1=7
3060 IF I$="s" OR I$="S" THEN CO1=9 ELSE IF I$="y" OR I$="Y" THEN CO1=14 ELSE IF I$="h" OR I$="H" THEN CO1=15
3065 IF I$="0" THEN CO2=0 ELSE IF I$="1" THEN CO3=1 ELSE IF I$="2" THEN CO3=2 ELSE IF I$="3" THEN CO3=3 ELSE IF I$="9" THEN CO2=1
3070 COLOR CO1,CO2
3100 RETURN
3600 REM alternate non-auto
3610 Z=0
3620 FOR Z1= 0 TO 100
3625 I$=INKEY$
3630 NEXT Z1
3632 ZAP=FRE(X$)
3635 IF Z=0 THEN 3620
3636 I$="x"
3640 GOTO 1604
3700 REM toggle non-auto
3710 BEEP
3720 Z=1
3730 SOUND 500,2
3740 RETURN
3800 I$="":DEF SEG:IF ALT=1 THEN 3600
3801 FOR ZINT=0 TO 3000
3802 I$=INKEY$:IF I$<>"" THEN ZINT=3000
3803 NEXT:ZAP=FRE(X$)
3810 GOTO 1604
3900 REM clear input buffer
3910 DEF SEG=&H40:BEGIN%=PEEK(&H1A):POKE &H1C,BEGIN%
3920 BEEP
3930 RETURN
4000 REM Dummy keys
4010 PLAY "MBXO$;"
4020 RETURN
4100 REM play my bonnie to indicate change of state
4110 PLAY "MBXM$;"
4120 RETURN
4200 REM more music
4210 PLAY "MBXN$;"
4220 RETURN
4300 REM
4310 PLAY "MBXP$;"
4320 RETURN
5000 A=31:FOR DO3%=1 TO 2
5010 Z=VAL(RIGHT$(TIME$,2))
5020 Z%=VAL(RIGHT$(TIME$,2))
5030 GOSUB 2000:COLOR CO1,CO2
5040 FOR N=10 TO 1 STEP -2
5050 FOR Q=316 TO 319
5060 LINE(Q,0)-(Q,199),3
5070 NEXT
5080 FOR Q=197 TO 199
5090 LINE(0,Q)-(319,Q),3
5100 NEXT
5110 FOR X=79 TO 0 STEP -N
5120 LINE(X,0)-(39,33),3
5130 NEXT
5140 FOR Y=0 TO 67 STEP N
5150 LINE(0,Y)-(39,33),3
5160 NEXT
5170 FOR X=0 TO 79 STEP N
5180 LINE(X,67)-(39,33),3
5190 NEXT
5200 FOR Y=67 TO 0 STEP -N
5210 LINE(79,Y)-(39,33),3
5220 NEXT
5230 GET(0,0)-(78,66),C
5240 PUT( 79,  0),C,PRESET
5250 PUT(157,  0),C,PSET
5260 PUT(235,  0),C,PRESET
5270 PUT(  0, 67),C,PRESET
5280 PUT( 79, 67),C,PSET
5290 PUT(157, 67),C,PRESET
5300 PUT(235, 67),C,PSET
5310 PUT(  0,133),C,PSET
5320 PUT( 79,133),C,PRESET
5330 PUT(157,133),C,PSET
5340 PUT(235,133),C,PRESET
5350 NEXT
5360 FOR A=0 TO 319 STEP 5
5370 LINE(  A,  0)-(159, 99),2
5380 NEXT
5390 FOR A=0 TO 199 STEP 5
5400 LINE(319,  A)-(159, 99),2
5410 NEXT
5420 FOR A=319 TO 0 STEP -5
5430 LINE(  A,199)-(159, 99),2
5440 NEXT
5450 FOR A=199 TO 0 STEP -5
5460 LINE(  0,  A)-(159, 99),2
5470 NEXT
5480 FOR A=1 TO 318 STEP 5
5490 LINE(  A,  0)-(159, 99),0
5500 NEXT
5510 FOR A=1 TO 198 STEP 5
5520 LINE(319,  A)-(159, 99),0
5530 NEXT
5540 FOR A=318 TO 1 STEP -5
5550 LINE(  A,199)-(159, 99),0
5560 NEXT
5570 FOR A=199 TO 1 STEP -5
5580 LINE(  0,  A)-(159, 99),0
5590 NEXT
5600 FOR A=1 TO 130 STEP 3
5610 CIRCLE(159,99),A,2
5620 NEXT
5630 FOR B=0 TO 99
5640 LINE(159,99-B)-(159+B,99),0
5650 LINE -(159, 99+B),0
5660 LINE -(159-B,99 ),0
5670 LINE -(159, 99-B),0
5680 CIRCLE(159,99),B/2,1
5690 NEXT
5695 NEXT
5700 GOSUB 1600
5710 IF I$="x" OR I$="X" THEN 40 ELSE IF I$=" " THEN 5000 ELSE IF I$="0" THEN N=10:GOTO 50
5720 N=VAL(I$):IF N>=0 AND N<14 THEN 50 ELSE 5000
5800 M=RND(1)*1000 MOD 8 + 1
5810 GOSUB 7000
5820 GOSUB 6000
5890 GOSUB 1600
5900 IF I$="x" OR I$="X" THEN 40 ELSE IF I$=" " THEN 5810 ELSE IF I$="0" THEN N=10:GOTO 50
5910 N=VAL(I$):IF N>=0 AND N<14 THEN 50 ELSE 5810
6000 D=D/57.29578
6005 CLS:XA=159:YA=99
6010 R=0
6020 X=R*COS(R)*A+159:Y=R*SIN(R)*B+99
6030 XP=X+OF:YP=Y:OF=OF+DO
6040 IF XP<0 OR XP>319 OR YP<0 OR YP> 199 THEN 6110
6050 IF S$="d" OR S$="D" THEN 6090 ELSE IF S$="b" OR S$="B" THEN 6070 ELSE IF S$="c" OR S$="C" THEN 6080
6060 LINE(XA,YA)-(XP,YP),CO3:GOTO 6100
6070 LINE(XA,YA)-(XP,YP),CO3,B:GOTO 6100
6080 CIRCLE(XP,YP),5,CO3:GOTO 6100
6090 PSET(XP,YP),CO3
6100 XA=X:YA=Y:R=R+D:GOTO 6020
6110 RETURN
7000 IF M=1 THEN D=73:S$="L":OF=0:DO=0:A=0.6:B=0.4:RETURN
7010 IF M=2 THEN D=183:S$="L":OF=0:DO=0.3:A=0.3:B=0.2:RETURN
7020 IF M=3 THEN D=357.8:S$="L":OF=0:DO=0.4:A=0.05:B=0.05:RETURN
7030 IF M=4 THEN D=45.1:S$="L":OF=0:DO=0.3:A=0.3:B=0.3:RETURN
7040 IF M=5 THEN D=44.9:S$="B":OF=0:DO=0:A=0.6:B=0.6:RETURN
7050 IF M=6 THEN D=33:S$="B":OF=0:DO=0:A=0.4:B=0.4:RETURN
7060 IF M=7 THEN D=180.5:S$="B":OF=0:DO=0:A=0.4:B=0.4:RETURN
7070 D=91:S$="L":OF=0:DO=0:A=0.5:B=0.5
7100 RETURN
8000 KEY (9) ON:KEY (10) ON:KEY(11) ON
8002 FOR X% = 1 TO 8: KEY (X%) ON: ON KEY (X%) GOSUB 9000:NEXT X%
8005 ON KEY (9) GOSUB 3700:ON KEY (10) GOSUB 3000:ON KEY(11) GOSUB 3900
8010 DIM A(50),B(50),C(350)
8014 KEY OFF:CLS
8015 TOG=2:GOSUB 65010:SCREEN 0,1
8020 SCREEN 0,1:HSYNC%=45
8025 RNDGEN=VAL(RIGHT$(TIME$,2))+VAL(MID$(TIME$,4,2))*12:ALT=0
8026 GOSUB 40000:GOSUB 30000
8030 RETURN
9000 REM Dummy Function keys
9010 BEEP
9020 RETURN
10000 REM menu
10010 SCREEN 0,1,0,0:COLOR 15,1,1:CLS:OUT 980,2:OUT 981,HSYNC%
10020 IF ALT=0 THEN COLOR 0,7 ELSE IF ALT=1 THEN COLOR 7,0
10025 LOCATE 3,8,0
10030 PRINT CHR$(16);" IBM PC LINE PATTERNS "; CHR$(17):PRINT
10040 COLOR  0,1
10050 PRINT "*** Press X to return to this Menu ***"
10060 PRINT "   Function Keys 1 to 10 are active."
10065 PRINT
10070 COLOR 15,1
10080 PRINT "        1 - Circle and Circle."
10090 PRINT "        2 - Moire Pattern."
10100 PRINT "        3 - Spiral."
10110 PRINT "        4 - Rotating Squares."
10120 PRINT "        5 - N-Sided Polygon."
10130 PRINT "        6 - Square Spiral."
10140 PRINT "        7 - Four Leaf Rose."
10150 PRINT "        8 - Outside Triangle Spiral."
10160 PRINT "        9 - Inside Triangle Spiral."
10165 PRINT "        0 - Big Eye."
10170 PRINT "        - - Multiple Pattern."
10175 PRINT "        = - Spirographs."
10180 PRINT "  Keys  Q thru I are more Spirographs."
10185 COLOR 23,1
10190 PRINT :PRINT "PRESS a key, C for Colors, or M to end?"
10200 RETURN
20000 SCREEN 1,0:COLOR 0,1
20010 PRINT "****  COLOR CONTROL COMMAND MENU  ****"
20020 PRINT
20030 PRINT "       PRESS F10 and a letter:"
20040 PRINT
20050 PRINT " B = Black   U = Blue    G = Green"
20060 PRINT " C = Cyan    R = Red     M = Magenta"
20070 PRINT " N = Brown   W = White   S = Light Blue"
20080 PRINT " Y = Yellow  H = High Intensity White"
20090 PRINT
20100 PRINT "     Or PRESS F10 and a number:
20110 PRINT
20120 PRINT "   0 = Palette 0    9 = Palette 1
20130 PRINT
20140 PRINT "       Depending on Palette:"
20150 PRINT
20160 PRINT "    Green   =   1   =     Cyan"
20170 PRINT "     Red    =   2   =    Magenta"
20180 PRINT "    Brown   =   3   =     White"
20190 PRINT
20200 PRINT " PRESS RETURN TO CONTINUE OR TRY F10!"
20202 PRINT "       ";STRING$(6,19)
20205 FOR Z=0 TO 20000
20210 I$=INKEY$:IF I$=CHR$(13) THEN Z=20000
20220 NEXT
20230 RETURN
29000 REM move screen left
29010 HSYNC%=HSYNC%+1:IF HSYNC% > 46 THEN BEEP:HSYNC%=46
29020 OUT 980,2:OUT 981,HSYNC%
29030 RETURN
29100 REM move screen right
29110 HSYNC%=HSYNC%-1:IF HSYNC% < 36 THEN BEEP:HSYNC%=36
29120 OUT 980,2:OUT 981,HSYNC%
29130 RETURN
30000 CLS
30020 SCREEN 0,1:COLOR 3,0:OUT 980,2:OUT 981,HSYNC%
30050 PRINT "This program will run unattended all "
30060 PRINT "by itself, or it can be shifted into "
30070 PRINT "manual operation by pressing ";:COLOR 12,0:PRINT "ALT A";:COLOR 3,0
30080 PRINT "at the menu screen. ";:COLOR 5,0:PRINT "In this mode, to"
30090 PRINT "procede with the next design press ";:COLOR 12,0:PRINT "F9.":COLOR 3,0
30110 PRINT "Pressing ";:COLOR 12,0:PRINT "ALT A";:COLOR 3,0:PRINT " again will return the"
30120 PRINT "program to auto operation.
30130 PRINT :COLOR 2,0
30140 PRINT "During any mode the top row of"
30150 PRINT "keys, from ";:COLOR 12,0:PRINT "1";:COLOR 2,0:PRINT " to ";:COLOR 12,0:PRINT "=";:COLOR 2,0:PRINT ", will call a design,"
30160 PRINT "as will ";:COLOR 12,0:PRINT "Q";:COLOR 2,0:PRINT " to ";:COLOR 12,0:PRINT "I";:COLOR 2,0:PRINT ". If nothing is done"
30170 PRINT "after about 10 seconds, the program"
30180 PRINT "will pick a design for you."
30190 COLOR 4,0:PRINT "RETURN";:COLOR 2,0:PRINT " is NOT needed for most input.";
30200 PRINT "Color backgrounds and palettes can be"
30210 PRINT "changed during operation. Press ";:COLOR 12,0:PRINT "C";:COLOR 2,0:PRINT
30220 PRINT "at the menu prompt for an explantion."
30230 PRINT :COLOR 6,0
30240 PRINT "Hitting the ";:COLOR 4,0:PRINT "SPACE";:COLOR 6,0:PRINT " bar repeats a design"
30250 PRINT "with a different color. Entering a"
30260 PRINT "series of keys results in a series of"
30270 PRINT "designs, but they come on top of each"
30280 PRINT "other. Press ";:COLOR 4,0:PRINT "UP ARROW";:COLOR 6,0:PRINT " to clear buffer."
30290 LOCATE 25,1:INPUT "   Press RETURN to continue";I$:RETURN
30295 FOR GEN%=1 TO 32766
30296 RNDGEN%=GEN%:I$=INKEY$
30297 IF I$ <> ""  THEN GEN%=32766:X%=1
30298 NEXT GEN%
30299 Y=FRE(X$):IF X% <> 1 THEN 30295
30300 RANDOMIZE RNDGEN%
30310 RETURN
30311 X=X+1
30312 X=X-1
30313 I$=INKEY$
30314 IF I$=CHR$(13) THEN 30320
30315 X=FRE(X$)
30316 GOTO 30311
30320 KEY(12) OFF:KEY(13) OFF:SCREEN 1,0:OUT 980,0:OUT 981,HSYNC%:RETURN
40000 LOCATE 11,9:PRINT "IBM LINE PATTERNS PROGRAM":COLOR 22,0:LOCATE 15,16:PRINT "Press RETURN":COLOR 0,7:GOSUB 30295
40005 KEY(12) ON:KEY(13) ON:ON KEY(12) GOSUB 29000:ON KEY(13) GOSUB 29100:REM    Center Screen
40010 SCREEN 0,1:COLOR 7,1,4:CLS
40055 COLOR 7,1
40060 LOCATE  7, 8:PRINT "If this is not centered";
40070 LOCATE 10, 8:PRINT "on your screen, use the";
40080 LOCATE 13,13:PRINT "left and right";
40085 LOCATE 16, 8:PRINT "arrow keys to center it.";
40088 COLOR 31,1:LOCATE 19,14:PRINT "PRESS RETURN";:COLOR 7,1
40090 GOSUB 40400:RETURN
40400 X=X+1
40410 X=X-1
40420 I$=INKEY$
40430 IF I$=CHR$(13) THEN 40460
40440 X=FRE(X$)
40450 GOTO 40400
40460 KEY(12) OFF:KEY(13) OFF:SCREEN 1,0:RETURN
65000 IF TOG=1 THEN TOG=2 ELSE TOG=1
65010 ON TOG GOSUB 65080, 65030
65020 RETURN
65030 REM toggle color graphics
65050 DEF SEG=0: A=PEEK(&H410): POKE &H410,(A AND &HCF) OR &H20
65060 WIDTH 40:SCREEN 1:SCREEN 0:LOCATE ,,1,6,7: SCREEN 1,0
65070 RETURN
65080 REM toggle monochrome display
65100 DEF SEG=0: A=PEEK(&H410): POKE &H410,A OR &H30
65110 WIDTH 80: LOCATE ,,1,12,13:SCREEN 0,0,0
65120 RETURN
```

## DISPLAY.BAS

```bas
100 REM DISPLAY ROUTINE TEST PROGRAM
110 REM ***** SAMPLE STRING ARRAY GENERATION *****
120 DIM L$(24), P%(24)
130 FOR X%=1 TO 24: P%(X%)=X%:L$(P%(X%))=STRING$(80,X%+64): NEXT
140 REM ***** TIME PRINT OF FULL SCREEN *****
150 KEY OFF: CLS: LOCATE ,,0: TIME$="00:00:00"
160 FOR X%=1 TO 24: PRINT L$(P%(X%));: NEXT
170 T$=TIME$: LOCATE 25,1: PRINT T$" PUSH A KEY:";:WHILE INKEY$="":WEND
180 REM ***** SETUP, TIME FULL SCREEN DISPLAY *****
190 REM NOTE: USE SCRN%=&HB000 FOR MONOCHROME, &HB800 FOR GRAPHICS.
200 GOSUB 270: CLS:TIME$="00:00:00": SCRN%=&HB000: AMT%=80: BGN%=1: DEF SEG
210 FOR X%=1 TO 24: LCT%=160*(X%-1)
220 CALL DSPLY!(L$(P%(X%)),BGN%,AMT%,SCRN%,LCT%): NEXT
230 T$=TIME$:AMT%=LEN(T$): LCT%=24*160:CALL DSPLY!(T$,BGN%,AMT%,SCRN%,LCT%)
240 WHILE INKEY$="":WEND: LOCATE 25,9,1: END
250 REM DISPLAY ROUTINE.  JERRY L. AMOS 11/82
260 REM GOSUB HERE TO LOAD CODE, THEN CALL DSPLY!(DAT$,BGN%,AMT%,SCRN%,LCT%)
270 HX$(1)="55,06,56,57,50,51,8B,EC,8B,76,18,8B,44,01,8B,76"
280 HX$(2)="16,03,04,48,8B,76,14,8B,0C,8B,76,12,8E,04,8B,76"
290 HX$(3)="10,8B,3C,8B,F0,FC,A4,47,E2,FC,59,58,5F,5E,07,5D"
300 HX$(4)="CA,0A,00"
310 DSPLY$=SPACE$(51): X$="&H": X%=0
320 FOR Y%=1 TO 4: FOR Z%=1 TO 48 STEP 3: X%=X%+1: IF X%=52 THEN 340
330 MID$(DSPLY$,X%,1)=CHR$(VAL(X$+MID$(HX$(Y%),Z%,2))):NEXT Z%,Y%
340 DEF SEG: A!=VARPTR(DSPLY$):DSPLY!=256*PEEK(A!+2)+PEEK(A!+1): RETURN
350 REM ***** END OF MACHINE LANGUAGE LOAD *****
360 REM GOSUB HERE TO MAKE A FILE FOR UNASSEMBLE WITH DOS DEBUG
370 GOSUB 270: OPEN "R",1,"DISPLAY.COM",1:FIELD 1,1 AS N$: X$="&H"
380 FOR X%=1 TO 51: LSET N$=MID$(DSPLY$,X%,1):PUT 1: NEXT: CLOSE: END
```

## DRIVETST.BAS

```bas
10 'Disk Drive Test
15 'Modified by Jim Serwer, PO Box 555, Cupertino, CA 95015
17 'Based on a program by Joe McDermott which was copied
20 'from the April, 1983 issue of SVCS Newsletter.
30 'Eliminated fname array & added auto disk/directory full:Herb Shear,6/11/83
40 'The program creates a series of sequential files.
50 'It writes data to these and  reads it back for verification.
55 'Verification means displaying the first 225 characters -- all asterisks
60 'Finally the test files are erased.
70 'The filenames are of the form "Ann.tst" where "nn" is a sequence number
100 ON ERROR GOTO 700           'Number of files that will be created           100
130 INPUT "Drive to be tested: "; DD$
140 IF RIGHT$(DD$,1) <> ":" THEN DD$=DD$ + ":"
160 INPUT "*** Insert disk and press enter ***"; Z$
180 ON ERROR GOTO 700
190 FOR I = 1 TO 1000           '-------- Create Files --------
200 GOSUB 600
210 PRINT "Creating: "; FS$; " #"; I
220 OPEN "O", 1, FS$            'Create directory entry
230 FOR J = 1 TO 12
240 PRINT #1, STRING$(250,"*")
250 NEXT
260 CLOSE 1
270 NEXT I
290 FOR K = 1 TO (NUMFILES/2+1) '-------- Read back files --------
300 I = K
310 GOSUB 500
320 I = NUMFILES - K + 1
330 GOSUB 500
350 NEXT K
370 PRINT "Erasing all test files"   '-------- Erase files --------
390 KILL DD$+"A*.TST"
400 PRINT "Test completed"
410 END
500 GOSUB 600:PRINT"Reading: ";FS$ '-------- Subroutine for read --------
510 OPEN "I", 1, FS$
520 INPUT #1, L$  :  PRINT LEFT$(L$, 75)
530 INPUT #1, L$  :  PRINT LEFT$(L$, 75)
535 INPUT #1, L$  :  PRINT LEFT$(L$, 75)
540 CLOSE 1
550 RETURN
600 FS$ = DD$+"A" + RIGHT$(STR$(I), LEN(STR$(I))-1) + ".TST" : RETURN
700 IF ERR = 61 OR ERR = 67 THEN NUMFILES = I - 1:RESUME 290 ELSE ON ERROR GOTO 0
900 STOP
1000 SAVE "c:drivetst
```

## DSKTST.BAS

```bas
10 ' DISK DRIVE TEST
20 ' BASED ON A PROGRAM BY JOE McDERMOTT WHICH WAS COPIED
30 ' FROM THE APRIL, 1983 ISSUE OF SVCS NEWSLETTER.
40 ' MODIFIED BY JIM SERWER, PO BOX 555, CUPERTINO, CA. 95015
50 ' MODIFIED AGAIN ON 5-20-83 BY JACK MITCHELL, SARATOGA, CA. 95070.
60 ' THIS PROGRAM CREATES A SERIES OF SEQUENTIAL FILES.
70 ' IT WRITES DATA TO THESE AND READS IT BACK FOR VERIFICATION.
80 ' VERIFICATION MEANS DISPLAYING THE FIRST 240 CHARACTERS - ALL ASTERISKS (*)
90 ' FINALLY THE TEST FILES ARE ERASED.
100 ' THE FILENAMES ARE OF THE FORM "JACKSTST.nnn" WHERE "nnn" IS A SEQUENTIAL NUMBER
110 CLS
120 NUMFILES = 105               ' MAX. NUMBER OF FILES THAT CAN BE CREATED.
130 DIM FS$(NUMFILES)            ' ARRAY FOR STORING FILESPECS
140 LOCATE 2,25
150 INPUT "DRIVE TO BE TESTED (A-D) "; DD$
160 IF RIGHT$(DD$,1) <> ":" THEN DD$=DD$ + ":"
170 LOCATE 4,1: PRINT "START TIME": LOCATE 4,71: PRINT "STOP TIME"
180 LOCATE 4,19: INPUT "*** INSERT DISKETTE AND PRESS ENTER ***"; Z$
190 LOCATE 6,1: PRINT TIME$
200 FOR I = 1 TO NUMFILES        ' -------- CREATE FILES --------
210 H=I: N$=STR$(H)
220 V$=MID$(N$,2,3)
230 DNAME$="JACKSTST"            ' FILE NAME, 8 CHARACTER MAX.
240 FTYPE$="."+V$                ' FILE EXTENSION USED IN THE TEST.
250 FS$(I) = DD$+DNAME$+FTYPE$
260 LOCATE 6,28: PRINT "CREATING: "; FS$(I)
270 OPEN "O", 1, FS$(I)          ' CREATE DIRECTORY ENTRY
280 FOR J = 1 TO 12
290 PRINT #1, STRING$(250,"*"): ON ERROR GOTO 600
300 NEXT J
310 NUM= NUMFILES     ' NUMBER OF FILES READ & ERASED WHEN THERE IS NO DISK FULL ERROR.
320 CLOSE 1
330 NEXT I
340 LOCATE 6,71: PRINT TIME$: LOCATE 8,1: PRINT TIME$
350 FOR K = 1 TO (NUM/2+1)  ' -------- READ BACK FILES --------
360 I = K
370 GOSUB 490
380 I = NUM - K + 1
390 GOSUB 490
400 CLOSE 1
410 NEXT K
420 LOCATE 8,71: PRINT TIME$: LOCATE 10,1: PRINT TIME$
430 FOR I = 1 TO NUM             ' -------- ERASE FILES --------
440 LOCATE 10,28: PRINT "ERASEING: "; FS$(I)
450 KILL FS$(I)
460 NEXT I
470 LOCATE 10,71: PRINT TIME$: BEEP: BEEP: BEEP: BEEP
480 LOCATE 12,22: PRINT "The Test is Over...Have a Nice Day!": END
490 LOCATE 8,49: PRINT STRING$(3,32)
500 LOCATE 8,29: PRINT "READING: "; FS$(I) '------- SUBROUTINE FOR READ -------
510 OPEN "I", 1, FS$(I)
515 IF EOF(1) GOTO 580
520 INPUT #1, L$: LOCATE 9,1: PRINT LEFT$(L$,80)   'PRINTING WHAT WAS WRITEN.
530 INPUT #1, L$: LOCATE 10,1: PRINT LEFT$(L$,80)  'PRINTING WHAT WAS WRITEN.
540 INPUT #1, L$: LOCATE 11,1: PRINT LEFT$(L$,80)  'PRINTING WHAT WAS WRITEN.
550 LOCATE 9,1:PRINT STRING$(80,32)   'BLANKING WHAT WAS PRINTED ON THE SCREEN.
560 LOCATE 10,1:PRINT STRING$(80,32)  'BLANKING WHAT WAS PRINTED ON THE SCREEN.
570 LOCATE 11,1:PRINT STRING$(80,32)  'BLANKING WHAT WAS PRINTED ON THE SCREEN.
580 CLOSE 1
590 RETURN
600 LOCATE 7,30: IF ERR = 61 THEN PRINT "* * *DISK FULL* * *" ELSE PRINT ERR: STOP
610 NUM= VAL(V$): GOTO 340 'ON ERROR (NUM=VAL(V$))=MAX NUMBER OF FILES READ & ERRASED.
```

## LIFE2.BAS

```bas
1 '   LIFE = The game of LIFE by John Conway - a simulation
2 '    This version by John Sigle        2/21/83
50  ' Initialization
51     DEFINT A-Z
52     C=0:R=0:CUR=0:NXT=1:NN=0:CR=0:RN=0       'Mention early for efficiency
53     NROWS=21:NCOLS=78
55     DIM G(22,79,1)
58     DIM CLIST(1,1500,1), LLEN(1)
60     DIM CH$(1):CH$(0)="X" : CH$(1)="O"
70     KEY OFF
100 ' Present instructions
101    GOSUB 1000
151 ' Clear screen and draw box
152    GOSUB 2500
200 ' Get and display new pattern from player
202    GOSUB 2000
250 ' Begin or continue evolution
255     LOCATE 24,1 : PRINT SPACE$(79);
256     LOCATE 24,1 : COLOR 0,7:PRINT " RUN mode ";:COLOR 7,0
260     LOCATE 25,1 : PRINT SPACE$(79);
261     LOCATE 25,1 : COLOR 15:PRINT " E";:COLOR 7:PRINT"=Edit, ";:COLOR 15:PRINT"space";:COLOR 7:PRINT"=Pause, ";:COLOR 15:PRINT"C";:COLOR 7:PRINT"=Continue, ";:COLOR 15:PRINT"Q";:COLOR 7:PRINT"=Quit";
300 ' Repeat until key is pressed
350 '   Calculate and display next generation
352      GOSUB 4000
375 '   Advance to new generation
376      SWAP CUR,NXT
378      SOUND 700,.1 : FOR K=1 TO 2000 : NEXT K
380 '   Check for key pressed
385      C$=INKEY$:IF C$="" THEN GOTO 300
500 ' What did player press?
501    IF C$="E" OR C$="e" THEN GOTO 200
502    IF C$="Q" OR C$="q" THEN CLS:    GOTO 65000
503    IF C$="C" OR C$="c" THEN GOTO 250
504    IF C$=" " THEN C$=INPUT$(1):GOTO 501
505    GOTO 385
1000 ' Routine to present instructions
1006 CLS :PRINT
1008 PRINT "                               L  I  F  E"
1009 PRINT
1010 PRINT "   The original game of life was invented by mathematician John Conway."
1011 PRINT " The idea is to initialize the screen with a pattern of bacteria "
1112 PRINT " in 'EDIT' mode.  The 'RUN' mode then brings life to the colony."
1114 PRINT " The population increases and decreases according to fixed rules "
1116 PRINT " which affect the birth and death of individual bacterium. "
1118 PRINT " A rectangular grid (2-dimensional matrix) will be shown on the screen."
1120 PRINT " Each cell in the grid can contain a bacterium or be empty.  Each cell"
1122 PRINT " has 8 neighbors except that cells on the boundry have less than 8 "
1124 PRINT " neighbors.  The existance of cells from one generation to the next"
1126 PRINT " is determined by the following rules:"
1128 PRINT:PRINT "  1.  A bacteria with 2 or 3 neighbors survives from one generation to "
1130 PRINT "      the next.  A bacterium with fewer neighbors dies of isolation."
1132 PRINT "      One with more neighbors dies of overcrowding."
1134 PRINT:PRINT "  2.  An empty cell spawns a bacteria if it has exactly three "
1136 PRINT "      neighboring cells which contain bacteria."
1150 PRINT:PRINT
1152 PRINT "   Press the spacebar to continue";:ANS$=INPUT$(1)
1154 CLS : PRINT:PRINT
1170 PRINT " In EDIT mode the following commands are available:"
1172 PRINT : PRINT
1174 PRINT "  ";CHR$(24);CHR$(25);CHR$(26);CHR$(27);"         to move the cursor"
1176 PRINT "  M            to Mark a cell as having a bacterium"
1178 PRINT "  space        to erase a mark from a cell"
1180 PRINT "  R            to enter the RUN mode (i.e. start the evolutionary process)"
1182 PRINT "  C            to Clear the grid in order to create a new pattern"
1184 PRINT "  Q            to Quit the game of LIFE"
1186 PRINT : PRINT
1188 PRINT" In RUN mode the following commands are available:"
1190 PRINT
1192 PRINT "  E            to enter the EDIT mode to create or change the pattern"
1194 PRINT "  space        to pause"
1196 PRINT "  C            to Continue the execution after a pause"
1198 PRINT "  Q            to Quit the game of LIFE"
1199 PRINT : PRINT "The EDIT, pause and Quit commands take effect only at the end of a cycle."
1204 PRINT : PRINT "Press spacebar to continue";:ANS$=INPUT$(1)  : RETURN
2000 ' Routine to get and display a pattern
2010 '  Print instructions on line 25
2011     LOCATE 24,1 : PRINT SPACE$(79);
2012     LOCATE 24,1 : COLOR 0,7 :PRINT " EDIT mode ";:COLOR 7,0
2013     LOCATE 25,1 : PRINT SPACE$(79);
2014     LOCATE 25,1 : PRINT "Use ";:COLOR 15:PRINT CHR$(24);CHR$(25);CHR$(26);    CHR$(27);:COLOR 7:PRINT" to move cursor, ";
2015 COLOR 15:PRINT"M";:COLOR 7:PRINT"=mark, ";:COLOR 15:PRINT"space";:COLOR 7:PRINT"=erase, ";:COLOR 15:PRINT"R";:COLOR 7:PRINT "=Run, ";:COLOR 15:PRINT"C";:  COLOR 7:PRINT"=Clear screen, ";:COLOR 15:PRINT"Q";:COLOR 7:PRINT "=quit";
2016     DEF SEG=0:POKE 1052,PEEK(1050):DEF SEG
2020 '  Initialize cursor
2022     RN=11:CN=39:LOCATE RN+1,CN+1,1
2030 '  Top of input loop
2031     C$=INKEY$:IF C$="" THEN 2031
2032     IF LEN(C$)=2 THEN GOTO 2040
2033      IF C$="M" OR C$="m" THEN GOSUB 2080:GOTO 2031
2034      IF C$=" " THEN GOSUB 2070:GOTO 2031
2035      IF C$="R" OR C$="r" THEN RETURN
2036      IF C$="C" OR C$="c" THEN GOSUB 2110:GOTO 2031
2038      IF C$="Q" OR C$="q" THEN GOTO 65000
2039      GOTO 2031
2040     CC=ASC(RIGHT$(C$,1))                   'Two char. code
2041      IF CC=72 THEN GOSUB 2050:GOTO 2031
2042      IF CC=75 THEN GOSUB 2055:GOTO 2031
2043      IF CC=77 THEN GOSUB 2060:GOTO 2031
2044      IF CC=80 THEN GOSUB 2065:GOTO 2031
2045      GOTO 2031
2050 '  Up arrow
2051     IF RN>1 THEN RN=RN-1:LOCATE RN+1,CN+1,1
2052     RETURN
2055 '  Left arrow
2056     IF CN>1 THEN CN=CN-1:LOCATE RN+1,CN+1,1
2057     RETURN
2060 '  Right arrow
2061     IF CN<NCOLS THEN CN=CN+1:LOCATE RN+1,CN+1,1
2062     RETURN
2065 '  Down arrow
2066     IF RN<NROWS THEN RN=RN+1:LOCATE RN+1,CN+1,1
2067     RETURN
2070 '  Spacebar = erase
2071     IF G(RN,CN,CUR)=0 THEN RETURN
2072     FOR K=LLEN(CUR) TO 1 STEP -1
2073       IF CLIST(0,K,CUR)=RN AND CLIST(1,K,CUR)=CN THEN GOTO 2075
2074     NEXT K  :  STOP
2075     FOR J=K TO LLEN(CUR)-1
2076      CLIST(0,J,CUR)=CLIST(0,J+1,CUR):CLIST(1,J,CUR)=CLIST(1,J+1,CUR)
2077     NEXT
2078     G(RN,CN,CUR)=0:PRINT " ";:LOCATE RN+1,CN+1,1  : RETURN
2080 '  Any letter
2081     IF G(RN,CN,CUR)=1 THEN RETURN
2082     G(RN,CN,CUR)=1
2084     LLEN(CUR)=LLEN(CUR)+1
2086     CLIST(0,LLEN(CUR),CUR)=RN:CLIST(1,LLEN(CUR),CUR)=CN
2087     LOCATE RN+1,CN+1,1:PRINT CH$(CUR);:LOCATE RN+1,CN+1,1
2089     RETURN
2110 '  Routine to clear screen
2112     FOR K=1 TO LLEN(CUR)
2114        RN=CLIST(0,K,CUR):CN=CLIST(1,K,CUR):G(RN,CN,CUR)=0
2115        LOCATE RN+1,CN+1:PRINT " ";
2116     NEXT K
2118     LLEN(CUR)=0
2119     RETURN
2500 ' Routine to clear screen and print box
2502    CLS
2504    PRINT CHR$(218);
2506    FOR K=1 TO NCOLS:PRINT CHR$(196);:NEXT:PRINT CHR$(191);
2508    FOR K=2 TO NROWS+1:LOCATE K,NCOLS+2:PRINT CHR$(179);:NEXT
2510    FOR K=2 TO NROWS+1:LOCATE K,1:PRINT CHR$(179);:NEXT
2512    LOCATE NROWS+2,1:PRINT CHR$(192);
2514    FOR K=1 TO NCOLS:PRINT CHR$(196);:NEXT:PRINT CHR$(217);
2599    RETURN
4000 '^ Routine to calculate and display next generation
4001     LOCATE ,,0
4002 '  Zero out last generation
4004     FOR K=1 TO LLEN(NXT)
4006        RN=CLIST(0,K,NXT):CN=CLIST(1,K,NXT):G(RN,CN,NXT)=0
4007     NEXT K
4008     LLEN(NXT)=0 :LL=0
4010 '  Repeat for each cell on the current CLIST
4012     FOR K=1 TO LLEN(CUR)
4020 '    Determine if it lives, put it on list and display it.
4022       RN=CLIST(0,K,CUR):CN=CLIST(1,K,CUR)
4023       R=RN:C=CN:GOSUB 4100    ' Count its neighbors
4025       IF NN=2 OR NN=3 THEN GOTO 4030
4026 '       Cell dies
4027         G(RN,CN,NXT)=0:LOCATE RN+1,CN+1:PRINT " ";
4029         GOTO 4040
4030 '       Cell lives
4031         LL=LL+1:CLIST(0,LL,NXT)=RN:CLIST(1,LL,NXT)=CN:G(RN,CN,NXT)=1
4032         LOCATE RN+1,CN+1 : PRINT CH$(NXT);
4040 '    Consider each of its neighbors
4041       R=RN-1:C=CN:GOSUB 4200
4042       R=RN-1:C=CN+1:GOSUB 4200
4043       R=RN:C=CN+1:GOSUB 4200
4044       R=RN+1:C=CN+1:GOSUB 4200
4045       R=RN+1:C=CN:GOSUB 4200
4046       R=RN+1:C=CN-1:GOSUB 4200
4047       R=RN:C=CN-1:GOSUB 4200
4048       R=RN-1:C=CN-1:GOSUB 4200
4060     NEXT K
4062     LLEN(NXT)=LL
4099    RETURN
4100 ' Routine to count current neighbors of cell at r,c
4102    NN=G(R-1,C,CUR)+G(R-1,C+1,CUR)+G(R,C+1,CUR)+G(R+1,C+1,CUR)+                        G(R+1,C,CUR)+G(R+1,C-1,CUR)+G(R,C-1,CUR)+G(R-1,C-1,CUR) :RETURN
4200 ' Routine to analyze and manipulate a neighbor of cell at rn,cn
4203    IF G(R,C,CUR)=1 THEN RETURN  'Cell is currently alive
4211    IF R=0 OR R>NROWS OR C=0 OR C>NCOLS THEN RETURN 'Cell on border
4213    IF G(R,C,NXT)=1 THEN RETURN  'Cell already added
4221    GOSUB 4100  'Count its neighbors
4230 '  if nn=3 then cell becomes alive
4231     IF NN=3 THEN                                                                       LL=LL+1:CLIST(0,LL,NXT)=R:CLIST(1,LL,NXT)=C:G(R,C,NXT)=1 :                      LOCATE R+1,C+1:PRINT CH$(NXT);
4299    RETURN
65000 ' Return to Magazette
65001 LOCATE 25,1:PRINT SPACE$(79);:LOCATE 25,1:PRINT "  Press ESC key to continue ";:ANS$=INPUT$(1):IF ASC(ANS$)<>27 THEN 65001
65002 IF ADDR.%<>0 THEN RUN DRIVE$+":"+"START"
65005 END
 ESC key to continue ";:ANS$=INPUT$(1):
```

## LUNAR.BAS

```bas
10 REM DSNAME=LUNAR.BAS
20 REM THIS VERSION COMPLETED 5/27/82.  FOR COMMENTS AND SUGGESTIONS,
30 REM PLEASE CONTACT BRUCE GUTHRIE BY MAIL AT
40 REM    P.O. BOX 710
50 REM    WASHINGTON, D.C. 20044
60 DEFINT I:SCREEN 1:WIDTH 40:KEY OFF
70 DIM I(319)
80 CLS:PRINT:PRINT TAB(15);"LUNAR LANDING":PRINT:PRINT "Press any key to begin. "
90 X$=INKEY$:I=RND(1):IF X$="" THEN 90
100 INPUT "Need instructions [Y/N] (DEF=N)? ",A$:IF A$="" THEN A$="N"
110 IF A$<>"N" AND A$<>"Y" THEN 100:ELSE IF A$="Y" THEN GOSUB 380
120 PRINT:PRINT "Setting up the screen here..."
130 TRY=0:MAKE=0
140 I(0)=INT(RND(1)*20)+140
150 FOR I=1 TO 319:I(I)=I(I-1)+INT(RND(1)*(3+MAKE))-INT((3+MAKE)/2):IF INT(RND(1)*8)>6 THEN I(I)=I(I)+INT(RND(1)*7)-4
160 IF I(I)<130 THEN I(I)=I(I)+6:ELSE IF I(I)>=170 THEN I(I)=I(I)-6
170 NEXT I
180 FOR I=0 TO 315 STEP RND(1)*10+20:FOR J=1 TO 4:I(I+J)=I(I):NEXT J:NEXT I
190 CLS
200 LINE(0,170)-(319,0),,B:FOR I=0 TO 318:LINE(I,I(I))-(I+1,I(I+1)):NEXT I
210 REM X,Y=POSITION OF CRAFT, CX=CHANGE IN X, CY=CHANGE IN Y
220 X=INT(RND(1)*320):Y=1+MAKE*2:CX=(INT(RND(1)*(5+MAKE/2))+2)*SGN(160-X):CY=INT(RND(1)*3)+MAKE+1
230 F=750
240 REM SCREEN HAS BEEN DRAWN
250 C=0:GOSUB 320:C=3:X=X+INT(CX):Y=Y+INT(CY):GOSUB 320:SOUND Y*15+100,1:F=F-(CX+(5-CY)):CY=CY+0.025
260 IF F<=0 THEN CX=0:CY=5
270 IF X<1 OR X>318 OR Y<0 OR Y>170 THEN GOTO 370
280 X$=INKEY$:IF LEN(X$)<2 THEN 290:ELSE I=ASC(MID$(X$,2)):IF I=72 THEN CY=CY-0.5:ELSE IF I=75 THEN CX=CX-0.5:ELSE IF I=77 THEN CX=CX+0.5:ELSE IF I=80 THEN CY=CY+0.5
290 IF I(X)<Y THEN IF I(X-1)=I(X) AND I(X+1)=I(X) AND CY<=1.5 THEN GOTO 340:ELSE GOTO 360
300 LOCATE 23,1:PRINT USING " FUEL ####.#        ### IN ### ATTEMPTS";F,MAKE,TRY
310 GOTO 250
320 REM DRAW THE CRAFT
330 LINE(X,Y)-(X,Y-1),C:RETURN
340 REM MADE THE LANDING
350 SOUND 500,10:SOUND 600,10:MAKE=MAKE+1:TRY=TRY+1:GOTO 140
360 REM BOMBED
370 TRY=TRY+1:GOTO 220
380 CLS:PRINT "This is a pretty simple game to learn.":PRINT "The cursor control keys provide boost":PRINT "to the rocket in the desired":PRINT "direction."
390 PRINT "Thrust is cumulative (increasing with":PRINT "each press of the button)."
400 PRINT "Object of the game is to land on a":PRINT "flat part of the landscape.":PRINT "The landscape is recreated each time":PRINT "you land successfully."
410 PRINT "Unfortunately, the landscape gets":PRINT "tougher each time and your initial":PRINT "position and velocity gets worse."
420 PRINT "":PRINT "Get your fingers ready mateys!"
430 INPUT "Press RETURN to continue? ",A$
440 RETURN
```

## MAIL1.BAS

```bas
5 '
10 '   ******************************************
20 '   ***     MAILING LIST PROGRAM   v.1.0   ***
30 '   ******************************************
40 '
50 '   by Joe Long                       for IBM PC
60 '   Rt. 1 Box 100                     up to 1,000 records
70 '   Madison, AL  35758
75 '
80 '               ***    Copyright 1983 by Joe Long   ***
85 '   ** Permission to copy for private use and FREE distribution granted   **
90 '
100 DEFINT A-Z : DIM SORT$(1000), SORT(1000), FILL$(50), FRERECNUM$(50)
110 ON ERROR GOTO 9900
120 FG=7 : BG=0 : BD=0 : HI = 15  '   Color variables
130 COLOR FG,BG,BD : KEY OFF : CLS
140 ON KEY(1) GOSUB 2000: ON KEY(2) GOSUB 3000: ON KEY(3) GOSUB 4000: ON KEY(4) GOSUB 5000: ON KEY(5) GOSUB 4200: ON KEY(6) GOSUB 4400: ON KEY(7) GOSUB 4600: ON KEY(8) GOSUB 4800: ON KEY(9) GOSUB 500: ON KEY(10) GOSUB 400
150 KEY(1) ON: KEY(2) ON: KEY(3) ON: KEY(4) ON: KEY(5) ON: KEY(6) ON: KEY(7) ON: KEY(8) ON: KEY(9) ON: KEY(10) ON
160 OPEN "R",1,"b:MAILLIST.TXT"
170 FIELD 1, 20 AS SCRDATA$(1), 1 AS SCRDATA$(2), 16 AS SCRDATA$(3), 34 AS SCRDATA$(4), 18 AS SCRDATA$(5), 2 AS SCRDATA$(6), 5 AS SCRDATA$(7), 16 AS SCRDATA$(8), 8 AS SCRDATA$(9), 8 AS SCRDATA$(10)
175 FIELD 1, 20 AS FILL$, 1 AS SORTFLAG$, 107 AS FILLER$
176 FOR I = 1 TO 50
177   FIELD 1, 19 + 2*I AS FILL$(I), 2 AS FRERECNUM$(I)
178 NEXT I
180 OPEN "R",2,"b:NAMEINDX.TXT",18
190 FIELD 2, 16 AS NAMEINDEX$, 2 AS NAMERECORD$
200 OPEN "R",3,"b:ZIPINDEX.TXT",7
210 FIELD 3, 5 AS ZIPINDEX$, 2 AS ZIPRECORD$
220 OPEN "R",4,"b:CITYINDX.TXT",20
230 FIELD 4, 18 AS CITYINDEX$, 2 AS CITYRECORD$
240 OPEN "R",5,"b:STATEIDX.TXT",4
250 FIELD 5, 2 AS STATEINDEX$, 2 AS STATERECORD$
260 GET 1,1
270 IF FILL$ = "                    " THEN 300
280 LSET FILL$ = "" : LSET SORTFLAG$ = "" : LSET FILLER$ = ""
290 PUT 1,1
300 IF ASC(SORTFLAG$) = 2 THEN 350
310 PRINT : PRINT "The file has been modified since last sorted."
320 PRINT : PRINT "Do you want to sort the index files? ";
330 GOSUB 9100
340 IF YES = 1 THEN GOSUB 3000
350 GOTO 1000
390 '
400 '   ***   Ending Routine   ***
410 '
420 LOCATE 22,10 : COLOR FG,BG : PRINT "Do you really want to end the program? ";
430 GOSUB 9100
440 IF YES = 0 THEN MENU = 0 : LOCATE 22,10 : PRINT STRING$(70," ") : RETURN
450 CLS : PRINT : PRINT TAB(36) "End of program." : PRINT
460 END
500 '   ***   Restart routine   ***
510 '
520 CLOSE : RUN
980 '
990 '    ******************************
1000 '   ***   MAIN MENU ROUTINES   ***
1010 '   ******************************
1015 '
1020 CLS : PRINT : PRINT TAB(30) "MAILLIST Main Menu"
1030 PRINT : PRINT TAB(10) "Key" : PRINT TAB(54) "Function"
1040 PRINT TAB(10)"---" : PRINT TAB(50) "----------------"
1050 PRINT : PRINT TAB(10)"F1"; : PRINT TAB(50) "Add name to list"
1070 PRINT : PRINT TAB(10)"F2"; : PRINT TAB(50) "Sort list"
1080 PRINT : PRINT TAB(10)"F3"; : PRINT TAB(50) "Search/edit record"
1090 PRINT : PRINT TAB(10)"F4"; : PRINT TAB(50) "Print labels"
1100 PRINT : PRINT TAB(10)"F10"; : PRINT TAB(50) "Exit program"
1110 MENU=1
1120 IF MENU=1 THEN GOTO 1120 ELSE GOTO 1000
1480 '
1490 '   **************************************************************
1500 '   ***   Maintain list of free (deleted) records for re-use   ***
1510 '   **************************************************************
1590 '
1600 '   ***   Find free record   ***
1610 '
1620 GET 1,1
1630 FOR I = 50 TO 1 STEP -1
1640   IF FRERECNUM$(I) <> "  " THEN 1690
1650 NEXT I
1660 RECORD = LOF(1)/128 + 1 : TRIAL = RECORD
1670 RETURN
1690 RECORD = CVI(FRERECNUM$(I))
1700 TRIAL = LOF(1)/128 : GET 2, TRIAL      '   Find free index record
1710 WHILE NAMEINDEX$ = "________________"
1720 TRIAL = TRIAL - 1
1730 GET 2, TRIAL
1740   WEND
1750 LSET FRERECNUM$(I) = "" : PUT 1,1   '  delete stored record #
1760 RETURN
1790 '
1800 '   ***   Store deleted record number   ***
1810 '
1820 GET 1,1
1830 FOR I = 1 TO 50
1840   IF FRERECNUM$(I) = "  " THEN 1870
1850 NEXT I
1860 RETURN   '   discard if 50 free records stored
1870 LSET FRERECNUM$(I) = MKI$(RECORD)
1880 PUT 1,1
1890 RETURN
1980 '
1990 '   *****************************
2000 '   ***   Add names to list   ***
2010 '   *****************************
2020 '
2030 MENU=0
2040 GOSUB 1500     '   get next record #
2050 GOSUB 8100     '   Print blank form on screen
2060 RESTORE : READ DUMMY, DUMMY, DUMMY   '   set data for cursor advance
2070 ROW=4 : COL=13      '   set initial cursor location
2080 GOSUB 8500
2090 RESTORE : GOSUB 8800
2110 GOSUB 6100                '   Save to disc
2120 RETURN
2980 '
2990 '   ************************
3000 '   ***   Sort Indexes   ***
3010 '   ************************
3015 '
3020 MENU = 0
3030 LASTRECORD = LOF(1)/128
3040 CLS : PRINT "Reading last name index file."
3090 '
3100 '   ***   Sort Name Index    ***
3110 '
3120 FOR I = 1 TO LASTRECORD
3130   GET 2,I : SORT$(I) = NAMEINDEX$ : SORT(I) = CVI(NAMERECORD$)
3140 NEXT I
3150 PRINT "Last name index read ... now sorting last name index."
3160 GOSUB 9400
3170 PRINT "Sorting complete ... now writing sorted last name index."
3180 FOR I = 1 TO LASTRECORD
3190   LSET NAMEINDEX$ = SORT$(I) : LSET NAMERECORD$ = MKI$(SORT(I))
3200   PUT 2,I
3210 NEXT I
3220 PRINT "Last name index file written ... now reading zip code index file."
3290 '
3300 '   ***   Sort zip code index   ***
3310 '
3320 FOR I = 1 TO LASTRECORD
3330   GET 3,I : SORT$(I) = ZIPINDEX$ : SORT(I) = CVI(ZIPRECORD$)
3340 NEXT I
3350 PRINT "Zip code index file read ... now sorting zip code index."
3360 GOSUB 9400
3370 PRINT "Sorting complete ... now writing sorted zip code index file."
3380 FOR I = 1 TO LASTRECORD
3390   LSET ZIPINDEX$ = SORT$(I) : LSET ZIPRECORD$ = MKI$(SORT(I))
3400   PUT 3,I
3410 NEXT I
3420 PRINT "Zip code index file written ... reading City index file."
3490 '
3500 '   ***   Sort City Index   ***
3510 '
3520 FOR I = 1 TO LASTRECORD
3530   GET 4,I : SORT$(I) = CITYINDEX$ : SORT(I) = CVI(CITYRECORD$)
3540 NEXT I
3550 PRINT "City index file read ... now sorting City index."
3560 GOSUB 9400
3570 PRINT "Sorting complete ... now writing sorted City index file."
3580 FOR I = 1 TO LASTRECORD
3590   LSET CITYINDEX$ = SORT$(I) : LSET CITYRECORD$ = MKI$(SORT(I))
3600   PUT 4,I
3610 NEXT I
3620 PRINT "City index file written ... reading State index file."
3690 '
3700 '   ***   Sort State index   ***
3710 '
3720 FOR I = 1 TO LASTRECORD
3730   GET 5,I : SORT$(I) = STATEINDEX$ : SORT(I) = CVI(STATERECORD$)
3740 NEXT I
3750 PRINT "State index file read ... now sorting State index file."
3760 GOSUB 9400
3770 PRINT "Sorting complete ... now writing sorted State index file."
3780 FOR I = 1 TO LASTRECORD
3790   LSET STATEINDEX$ = SORT$(I) : LSET STATERECORD$ = MKI$(SORT(I))
3800   PUT 5,I
3810 NEXT I
3820 BEEP : PRINT "State index file written ... all sorting completed."
3830 LSET FILL1$ = "" : LSET SORTFLAG$ = CHR$(2) : LSET FILL2$ = ""
3840 PUT 1,1
3850 FOR I = 1 TO 1000 : NEXT I
3860 RETURN
3980 '
3990 '   ***********************************
4000 '   ***   Search and Edit Records   ***
4010 '   ***********************************
4020 '
4030 LASTRECORD = LOF(1)/128
4090 '
4100 '   ***   Search Menu   ***
4110 '
4120 CLS : MENU = 1 : PRINT : PRINT TAB(10) "Key";: PRINT TAB(50) "Type of Search"
4130 PRINT TAB(10) "___";: PRINT TAB(50) "______________"
4140 PRINT : PRINT TAB(11) "F5";: PRINT TAB(50) "Last Name"
4150 PRINT : PRINT TAB(11) "F6";: PRINT TAB(50) "Zip Code"
4160 PRINT : PRINT TAB(11) "F7";: PRINT TAB(50) "City"
4170 PRINT : PRINT TAB(11) "F8";: PRINT TAB(50) "State"
4180 PRINT : PRINT TAB(11) "F9";: PRINT TAB(50) "Return to Main Menu"
4190 IF MENU = 1 THEN GOTO 4190 ELSE MENU = 1 : GOTO 4120
4195 '
4200 '   ***   Search by last name   ***
4210 '
4220 CLS : MENU = 0 : LASTRECORD = LOF(1)/128
4240 PRINT : INPUT "Last name for search"; LASTNAME$
4250 NAMELENGTH = LEN(LASTNAME$)
4260 LOWLIMIT = 0 : HIGHLIMIT = LASTRECORD
4270 TRIAL = INT((LOWLIMIT + HIGHLIMIT)/2+0.5)
4280 GET 2, TRIAL : RECORD = CVI(NAMERECORD$)
4290 IF LEFT$(NAMEINDEX$,NAMELENGTH) = LASTNAME$ THEN GOSUB 9700 : GOTO 4340
4300 IF NAMEINDEX$ < LASTNAME$ THEN LOWLIMIT = TRIAL
4310 IF NAMEINDEX$ > LASTNAME$ THEN HIGHLIMIT = TRIAL
4320 NEWTRIAL = INT((LOWLIMIT + HIGHLIMIT)/2+0.5)
4330 IF TRIAL = NEWTRIAL THEN BEEP : PRINT "None found." : FOR I = 1 TO 500 : NEXT I : RETURN ELSE TRIAL = NEWTRIAL : GOTO 4280
4340 MATCH = TRIAL
4350 TRIAL = TRIAL - 1 : GET 2, TRIAL : RECORD = CVI(NAMERECORD$) : IF LEFT$(NAMEINDEX$,NAMELENGTH) = LASTNAME$ THEN GOSUB 9700 : GOTO 4350
4360 TRIAL = MATCH
4370 TRIAL = TRIAL + 1 : GET 2, TRIAL : RECORD = CVI(NAMERECORD$) : IF LEFT$(NAMEINDEX$,NAMELENGTH) = LASTNAME$ THEN GOSUB 9700 : GOTO 4370
4380 BEEP : PRINT "No more entries by that name." : FOR I = 1 TO 500 : NEXT I : RETURN
4390 '
4400 '   ***   Search by zip code   ***
4410 '
4420 CLS : MENU = 0 : LASTRECORD = LOF(1)/128
4440 PRINT : INPUT "Zip code for search"; ZIPCODE$
4460 LOWLIMIT = 0 : HIGHLIMIT = LASTRECORD
4470 TRIAL = INT((LOWLIMIT + HIGHLIMIT)/2+0.5)
4480 GET 3, TRIAL : RECORD = CVI(ZIPRECORD$)
4490 IF ZIPINDEX$ = ZIPCODE$ THEN GOSUB 9700 : GOTO 4540
4500 IF ZIPINDEX$ < ZIPCODE$ THEN LOWLIMIT = TRIAL
4510 IF ZIPINDEX$ > ZIPCODE$ THEN HIGHLIMIT = TRIAL
4520 NEWTRIAL = INT((LOWLIMIT + HIGHLIMIT)/2+0.5)
4530 IF TRIAL = NEWTRIAL THEN BEEP : PRINT "None found." : FOR I = 1 TO 500 : NEXT I : RETURN ELSE TRIAL = NEWTRIAL : GOTO 4480
4540 MATCH = TRIAL
4550 TRIAL = TRIAL - 1 : GET 3, TRIAL : RECORD = CVI(ZIPRECORD$) : IF ZIPINDEX$ = ZIPCODE$ THEN GOSUB 9700 : GOTO 4550
4560 TRIAL = MATCH
4570 TRIAL = TRIAL + 1 : GET 3, TRIAL : RECORD = CVI(ZIPRECORD$) : IF ZIPINDEX$ = ZIPCODE$ THEN GOSUB 9700 : GOTO 4570
4580 BEEP : PRINT "No more entries with that number." : FOR I = 1 TO 500 : NEXT I : RETURN
4590 '
4600 '   ***   Search by City   ***
4610 '
4620 CLS : MENU = 0 : LASTRECORD = LOF(1)/128
4640 PRINT : INPUT "City for search"; CITY$
4650 CITYLENGTH = LEN(CITY$)
4660 LOWLIMIT = 0 : HIGHLIMIT = LASTRECORD
4670 TRIAL = INT((LOWLIMIT + HIGHLIMIT)/2+0.5)
4680 GET 4, TRIAL : RECORD = CVI(CITYRECORD$)
4690 IF LEFT$(CITYINDEX$,CITYLENGTH) = CITY$ THEN GOSUB 9700 : GOTO 4740
4700 IF CITYINDEX$ < CITY$ THEN LOWLIMIT = TRIAL
4710 IF CITYINDEX$ > CITY$ THEN HIGHLIMIT = TRIAL
4720 NEWTRIAL = INT((LOWLIMIT + HIGHLIMIT)/2+0.5)
4730 IF TRIAL = NEWTRIAL THEN BEEP : PRINT "None found." : FOR I = 1 TO 500 : NEXT I : RETURN ELSE TRIAL = NEWTRIAL : GOTO 4680
4740 MATCH = TRIAL
4750 TRIAL = TRIAL - 1 : GET 4, TRIAL : RECORD = CVI(CITYRECORD$) : IF LEFT$(CITYINDEX$,CITYLENGTH) = CITY$ THEN GOSUB 9700 : GOTO 4750
4760 TRIAL = MATCH
4770 TRIAL = TRIAL + 1 : GET 4, TRIAL : RECORD = CVI(CITYRECORD$) : IF LEFT$(CITYINDEX$,CITYLENGTH) = CITY$ THEN GOSUB 9700 : GOTO 4770
4780 BEEP : PRINT "No more entries with that city." : FOR I = 1 TO 500 : NEXT I : RETURN
4790 '
4800 '   ***   Search by State   ***
4810 '
4820 CLS : MENU = 0 : LASTRECORD = LOF(1)/128
4840 PRINT : INPUT "State for search"; STATE$
4860 LOWLIMIT = 0 : HIGHLIMIT = LASTRECORD
4870 TRIAL = INT((LOWLIMIT + HIGHLIMIT)/2+0.5)
4880 GET 5, TRIAL : RECORD = CVI(STATERECORD$)
4890 IF STATEINDEX$ = STATE$ THEN GOSUB 9700 : GOTO 4940
4900 IF STATEINDEX$ < STATE$ THEN LOWLIMIT = TRIAL
4910 IF STATEINDEX$ > STATE$ THEN HIGHLIMIT = TRIAL
4920 NEWTRIAL = INT((LOWLIMIT + HIGHLIMIT)/2+0.5)
4930 IF TRIAL = NEWTRIAL THEN BEEP : PRINT "None found." : FOR I = 1 TO 500 : NEXT I : RETURN ELSE TRIAL = NEWTRIAL : GOTO 4880
4940 MATCH = TRIAL
4950 TRIAL = TRIAL - 1 : GET 5, TRIAL : RECORD = CVI(STATERECORD$) : IF STATEINDEX$ = STATE$ THEN GOSUB 9700 : GOTO 4950
4960 TRIAL = MATCH
4970 TRIAL = TRIAL + 1 : GET 5, TRIAL : RECORD = CVI(STATERECORD$) : IF STATEINDEX$ = STATE$ THEN GOSUB 9700 : GOTO 4970
4980 BEEP : PRINT "No more entries with that state." : FOR I = 1 TO 500 : NEXT I : RETURN
4985 '
4990 '   ************************
5000 '   ***   Print Labels   ***
5010 '   ************************
5020 '
5030 MENU = 0 : CLS
5040 PRINT : INPUT "One or two across"; LABELNUMBER
5050 IF LABELNUMBER < 1 OR LABELNUMBER > 2 THEN PRINT : PRINT "This program only prints one or two 3 1/2"; CHR$(34); "labels per row, choose (1) or (2) please." : GOTO 5040
5060 GOSUB 9200     '   Select key field
5070 PRINT : PRINTKEY$ = "" : INPUT "Key to print (or <enter> to print all)"; PRINTKEY$ : IF PRINTKEY$ = "" THEN PRINTKEY$ = "*"
5075 PRINT : PRINT "Print phone numbers? "; : GOSUB 9100
5078 IF YES = 1 THEN PHONEFLAG = 1 ELSE PHONEFLAG = 0
5080 IF LABELNUMBER = 2 THEN GOTO 5400
5090 '
5100 '   ***   Print one across labels   ***
5110 '
5120 LASTRECORD = LOF(1)/128
5130 RECORD = 0
5140 IF RECORD = LASTRECORD THEN RETURN ELSE RECORD = RECORD + 1 : GOSUB 6300    '   get next record
5150 IF KEYFIELD < 9 THEN GOTO 5240
5160 FOR I = 1 TO 8
5170   FOR J = 1 TO LEN(PRINTKEY$)
5180     IF MID$(SCREENDATA$(KEYFIELD),I,1) = MID$(PRINTKEY$,J,1) THEN GOTO 5300
5190   NEXT J
5200 NEXT I
5220 GOTO 5140
5240 IF PRINTKEY$ = "*" THEN 5300
5250  FIELDDATA$(KEYFIELD) = LEFT$(SCREENDATA$(KEYFIELD),LEN(PRINTKEY$))
5260 IF FIELDDATA$(KEYFIELD) <> PRINTKEY$ THEN GOTO 5140
5300 LPRINT : LPRINT SCREENDATA$(1);" ";
5310 IF SCREENDATA$(2) <> "" THEN LPRINT SCREENDATA$(2);". ";
5320 LPRINT SCREENDATA$(3)
5330 LPRINT SCREENDATA$(4)
5340 LPRINT SCREENDATA$(5); ", "; SCREENDATA$(6); : LPRINT TAB(25); SCREENDATA$(7)
5350 IF PHONEFLAG = 1 THEN LPRINT SCREENDATA$(8) ELSE LPRINT
5360 LPRINT
5370 GOTO 5140
5390 '
5400 '   ***   Print two across labels   ***
5410 '
5420 LASTRECORD = LOF(1)/128 : RECORD = 0 : LEFTLABEL = 1
5430 IF RECORD >= LASTRECORD THEN 5800
5440 RECORD = RECORD + 1 : GOSUB 6300   '   get next record
5450 IF KEYFIELD < 9 THEN GOTO 5540
5460 FOR I = 1 TO 8
5470   FOR J = 1 TO LEN(PRINTKEY$)
5480     IF MID$(SCREENDATA$(KEYFIELD),I,1) = MID$(PRINTKEY$,J,1) THEN GOTO 5600
5490   NEXT J
5500 NEXT I
5520 GOTO 5430
5540 IF PRINTKEY$ = "*" THEN 5600
5550  FIELDDATA$(KEYFIELD) = LEFT$(SCREENDATA$(KEYFIELD),LEN(PRINTKEY$))
5560 IF FIELDDATA$(KEYFIELD) <> PRINTKEY$ THEN GOTO 5440
5600 IF LEFTLABEL = 0 THEN 5700
5610 FOR I = 1 TO 8
5620   LABELDATA$(I) = SCREENDATA$(I)
5630 NEXT I
5640 LEFTLABEL = 0
5650 GOTO 5430
5700 LPRINT : LPRINT LABELDATA$(1); " "; : IF LABELDATA$(2) <> "" THEN LPRINT LABELDATA$(2); ". ";
5710 LPRINT LABELDATA$(3);
5720 LPRINT TAB(37) SCREENDATA$(1); " "; : IF SCREENDATA$(2) <> "" THEN LPRINT SCREENDATA$(2); ". ";
5730 LPRINT SCREENDATA$(3)
5740 LPRINT LABELDATA$(4); : LPRINT TAB(37) SCREENDATA$(4)
5750 LPRINT LABELDATA$(5); ", "; LABELDATA$(6); : LPRINT TAB(25) LABELDATA$(7);
5760 LPRINT TAB(37) SCREENDATA$(5); ", "; SCREENDATA$(6); : LPRINT TAB(62) SCREENDATA$(7)
5770 IF PHONEFLAG = 1 THEN LPRINT LABELDATA$(8); : LPRINT TAB(37) SCREENDATA$(8) ELSE LPRINT
5780 LPRINT : LEFTLABEL = 1 : GOTO 5430
5790 '
5800 '   ***   Print odd remaining label   ***
5810 '
5820 IF LEFTLABEL = 1 THEN RETURN
5830 LPRINT : LPRINT LABELDATA$(1); " "; : IF LABELDATA$(2) <> "" THEN LPRINT LABELDATA$(2); ". ";
5840 LPRINT LABELDATA$(3)
5850 LPRINT LABELDATA$(4)
5860 LPRINT LABELDATA$(5); ", "; LABELDATA$(6); : LPRINT TAB(25) LABELDATA$(7)
5870 IF PHONEFLAG = 1 THEN LPRINT LABELDATA$(8) : LPRINT ELSE LPRINT : LPRINT
5890 RETURN
5980 '
5990 '   *****************************
6000 '   ***   MAIN I/O ROUTINES   ***
6010 '   *****************************
6090 '
6100 '   ***   Write Record to File   ***
6110 '
6140 FOR I=1 TO 10
6150   LSET SCRDATA$(I) = SCREENDATA$(I)
6160 NEXT I
6170 PUT 1, RECORD
6180 LSET NAMEINDEX$ = SCREENDATA$(3) : LSET NAMERECORD$ = MKI$(RECORD)
6190 PUT 2, TRIAL
6200 LSET ZIPINDEX$ = SCREENDATA$(7) : LSET ZIPRECORD$ = MKI$(RECORD)
6210 PUT 3, TRIAL
6220 LSET CITYINDEX$ = SCREENDATA$(5) : LSET CITYRECORD$ = MKI$(RECORD)
6230 PUT 4, TRIAL
6240 LSET STATEINDEX$ = SCREENDATA$(6) : LSET STATERECORD$ = MKI$(RECORD)
6250 PUT 5, TRIAL
6260 GET 1,1
6270 LSET FILL$ = "" : LSET SORTFLAG$ = ""
6280 PUT 1,1 : RETURN
6290 '
6300 '   ***   Read Record from File   ***
6310 '
6330 GET 1, RECORD
6340 FOR I = 1 TO 10
6350   SCREENDATA$(I) = SCRDATA$(I)
6360   FOR J = LEN(SCREENDATA$(I)) TO 1 STEP -1
6370     IF MID$(SCREENDATA$(I),J,1) <> "_" THEN 6400
6380   NEXT J
6390   SCREENDATA$(I) = ""   '   change blank string to null string
6400   SCREENDATA$(I) = LEFT$(SCREENDATA$(I),J)
6410 NEXT I
6420 RETURN
7980 '
7990 '   ***********************************
8000 '   ***   Display I/O Subroutines   ***
8010 '   ***********************************
8090 '
8100 '   ***   Print Form on Screen   ***
8110 '
8120 CLS : PRINT : PRINT TAB(20) "Record Number"; RECORD
8130 PRINT : PRINT "First Name: ";STRING$(20,"_"); "     M.I.: __     Last Name: ";STRING$(16,"_")
8140 PRINT : PRINT "Address: "; STRING$(34,"_")
8150 PRINT : PRINT "City: "; STRING$(18,"_"); "     State: __     Zip: "; STRING$(5,"_")
8160 PRINT : PRINT "Phone: ";STRING$(16,"_")
8170 PRINT : PRINT "Activity Key: "; STRING$(8,"_")
8180 PRINT : PRINT "Membership Key: ";STRING$(8,"_")
8190 PRINT : PRINT : PRINT TAB(22) "(Press <Esc> to delete record)"
8200 PRINT : PRINT TAB(12) "(Forward tab to next item, <Enter> to exit form)"
8210 RETURN
8390 '
8400 '   ***   Print Data on Screen   ***
8410 '
8420 COLOR HI, BG
8430 FOR I = 1 TO 10
8440   READ ROWDATA, COLDATA, LENDATA
8450   LOCATE ROWDATA,COLDATA : PRINT SCREENDATA$(I);
8460 NEXT I
8470 RETURN
8490 '
8500 '   ***   Process Keyboard Inputs to Screen  ***
8510 '
8520 COLORVAL = SCREEN(ROW,COL,1) : COLORFORE = (COLORVAL MOD 16) : CHARACTER = SCREEN(ROW,COL)
8530 LOCATE ROW,COL : COLOR BG,COLORFORE : PRINT CHR$(CHARACTER);
8540 FOR I = 1 TO 30
8550   DATUM$ = INKEY$ : IF DATUM$ <> "" THEN GOTO 8620
8560 NEXT I
8570 LOCATE ROW,COL : COLOR COLORFORE,BG : PRINT CHR$(SCREEN(ROW,COL));
8580 FOR I = 1 TO 30
8590   DATUM$ = INKEY$ : IF DATUM$ <> "" THEN GOTO 8620
8600 NEXT I
8610 GOTO 8530
8620 LOCATE ROW,COL : COLOR COLORFORE,BG : PRINT CHR$(SCREEN(ROW,COL));
8625 IF ASC(DATUM$) = 27 THEN 9600     '   delete entry
8630 IF LEN(DATUM$) = 1 THEN GOTO 8700
8640 CURMOVE = ASC(RIGHT$(DATUM$,1))
8650 IF CURMOVE = 77 THEN COL = COL + 1 : IF COL > 80 THEN COL = 1 : ROW = ROW + 1 : IF ROW = 24 THEN ROW = 23 : COL = 80
8660 IF CURMOVE = 75 THEN COL = COL - 1 : IF COL < 1 THEN COL = 80 : ROW = ROW - 1 : IF ROW = 0 THEN ROW = 1 : COL = 1
8670 IF CURMOVE = 80 THEN ROW = ROW + 1 : IF ROW = 24 THEN ROW = 23
8680 IF CURMOVE = 72 THEN ROW = ROW - 1 : IF ROW = 0 THEN ROW = 1
8685 IF CURMOVE = 83 THEN LOCATE ROW,COL : IF COLORFORE = 15 THEN COLOR FG,BG : PRINT "_";
8690 GOTO 8520
8700 VALDATUM = ASC(DATUM$)
8710 IF VALDATUM = 9 THEN COLOR COLORFORE,BG : LOCATE ROW,COL : PRINT CHR$(CHARACTER) : READ ROW,COL,LENDATA : IF ROW = 1 THEN RETURN ELSE GOTO 8500
8720 IF VALDATUM = 13 THEN RETURN
8730 IF VALDATUM < 31 OR VALDATUM > 127 THEN GOTO 8760
8740 LOCATE ROW,COL : COLOR HI,BG : PRINT DATUM$;
8750 COL = COL + 1 : IF COL > 80 THEN COL = 1 : ROW = ROW + 1 : IF ROW = 24 THEN ROW = 23 : COL = 80
8760 IF VALDATUM = 8 THEN LOCATE ROW,COL : COLOR FG,BG : PRINT "_"; : COL = COL - 1 : IF COL < 1 THEN COL = 80 : ROW = ROW - 1 : IF ROW = 0 THEN ROW = 1 : COL = 1
8770 GOTO 8520
8790 '
8800 '   ***   Read data from screen   ***
8810 '
8820 FOR I = 1 TO 10
8830   SCREENDATA$(I) = "" : READ ROWDATA, COLDATA, LENDATA
8840   FOR J = 0 TO LENDATA -1
8850     SCREENDATA$(I) = SCREENDATA$(I) + CHR$(SCREEN(ROWDATA,COLDATA+J))
8860   NEXT J
8870 NEXT I
8880 RETURN
8890 '
8900 '   ***   Data statements for form data locations   ***
8910 '
8920 DATA 4,13,20,4,44,1,4,62,16,6,10,34,8,7,18,8,37,2,8,49,5
8930 DATA 10,8,16,12,15,8,14,17,8,1,1,1
8980 '
8990 '   *************************************
9000 '   ***   Miscellaneous Subroutines   ***
9010 '   *************************************
9090 '
9100 '   ***   Process Yes/No Inputs   ***
9110 '
9115 ENTRY$ = INKEY$
9120 ENTRY$ = INKEY$ : IF ENTRY$ = "" THEN 9120
9130 IF ENTRY$ = "Y" OR ENTRY$ = "y" THEN YES = 1 ELSE YES = 0
9140 IF YES = 1 THEN PRINT "Yes" ELSE PRINT "No"
9150 RETURN
9190 '
9200 '   ***   Select keyfield for printing labels   ***
9210 '
9220 CLS : PRINT : PRINT "     You may print labels selectively, based on the ten data fields stored in"
9230 PRINT "each record.  Select your key field, then specify the key.  For example, if"
9240 PRINT "you select a keyfield of `City' and a key of `Detroit', then only people"
9250 PRINT "living in Detroit will have their labels printed."
9260 PRINT "     The last two fields, activity and membership, are intended so that you can"
9270 PRINT "mail to only people with a specific interest or members of a specific club."
9280 PRINT "A good system is to assign a single letter of the alphabet as the key for each"
9290 PRINT "interest or organization on your list, allowing up to eight keys per name."
9300 PRINT : PRINT TAB(20) "Key fields are: ";CHR$(13);"     1.  First name";CHR$(13);"     2.  Middle Initial";CHR$(13);"     3.  Last Name"
9310 PRINT "     4.  Address";CHR$(13);"     5.  City";CHR$(13);"     6.  State";CHR$(13);"     7.  Zip code"
9320 PRINT "     8.  Phone #";CHR$(13);"     9.  Activity Key";CHR$(13);"    10.  Membership key"
9330 PRINT : INPUT "Input number of keyfield"; KEYFIELD
9340 KEYFIELD = INT(KEYFIELD) : IF KEYFIELD < 1 OR KEYFIELD > 10 THEN PRINT "Only use keyfield between 1 and 10, please." : GOTO 9310
9350 RETURN
9390 '
9400 '   ***   Sort Subroutine   ***
9410 '
9420 FOR I = 2 TO LASTRECORD
9430   IF SORT$(I) > SORT$(I-1) THEN 9560       '   skip if already in order
9450     FOR J = I-1 TO 0 STEP -1               '   find place to insert
9460     IF SORT$(I) > SORT$(J) THEN 9500
9470     NEXT J
9480   GOTO 9560
9500   TEMP$ = SORT$(I) : TEMP = SORT(I)        '   hold item to insert
9510   FOR K = I TO J+2 STEP -1                 '   bump others up
9520     SORT$(K) = SORT$(K-1) : SORT(K) = SORT(K-1)
9530   NEXT K
9540   SORT$(J+1) = TEMP$ : SORT(J+1) = TEMP    '   Insert index item
9560 NEXT I
9570 RETURN
9590 '
9600 '   ***   Delete index & record of deleted item   ***
9610 '
9620 COLOR FG, BG : GOSUB 8100   '   write blank form
9630 LOCATE 15,1 : PRINT SPACE$(80) : LOCATE 17,1 : PRINT SPACE$(80) : PRINT TAB(20) "DELETE RECORD . . .  Are you sure (y/n)? ";
9640 GOSUB 9100
9650 IF YES = 0 THEN RETURN 9810
9660 RESTORE : GOSUB 8800 : GOSUB 6100   '   Write blanks to disc
9670 GOSUB 1800     '   Add record # to free record list
9680 RETURN 9810
9690 '
9700 '   ***   Edit record   ***
9710 '
9730 CLS : MENU = 0
9740 GOSUB 6300
9750 GOSUB 8100
9760 RESTORE : GOSUB 8400
9770 RESTORE : READ DUMMY, DUMMY, DUMMY : ROW = 4 : COL = 13
9780 GOSUB 8500
9790 LOCATE 22,20 : COLOR FG,BG : PRINT "Store updated data on disc (yes/no)? "; : GOSUB 9100
9800 IF YES = 1 THEN RESTORE : GOSUB 8800 : GOSUB 6100
9810 LOCATE 22,10 : COLOR FG,BG : PRINT "(Strike any key to find next record or return to menu)"
9820 DUMMY$ = INKEY$ : IF DUMMY$ = "" THEN GOTO 9820
9830 MENU = 0 : RETURN
9890 '
9900 '   ***   Error Traps   ***
9910 '
9920 IF ERR = 57 THEN 9960
9925 IF ERR = 61 THEN 9965
9930 IF ERR = 68 THEN 9970
9935 IF ERR = 70 THEN 9975
9940 IF ERR = 71 THEN 9980
9945 IF ERR = 72 THEN 9985
9950 ON ERROR GOTO 0
9960 PRINT : PRINT "Disc I/O error.  No I/O took place.  Try another disc." : GOTO 9990
9965 PRINT : PRINT "Disc full.  Your last entry was not saved." : GOTO 9990
9970 PRINT : PRINT "Device unavailable.  Check installation." : GOTO 9990
9975 PRINT : PRINT "The disc is write protected.  Your entry was not saved."
9980 PRINT : PRINT "The disc was not ready.  No I/O took place." : GOTO 9990
9985 PRINT : PRINT "Media error.  Check for bad disc.  No I/O took place." : GOTO 9990
9990 PRINT : PRINT "Press any key to restart program. "
9995 Z$ = INKEY$ : IF Z$ = "" THEN 9995 ELSE CLOSE : RUN
9999 END
```

## ROD.BAS

```bas
0 ' THIS PROGRAM IS CALLED ROD, AUTHOR UNKNOWN
2 KEY OFF
3 ON ERROR GOTO 1000
5 CLS
10 SCREEN 1,0
20 FOR W=3 TO 50
30 FOR I=1 TO 19
40 FOR J=0 TO 19
50 K=I+J
55 IX=I*8
60 IX8=IX+8
70 IY=I*5
80 KX=K*8
90 KY=K*5
100 IY5=IY+5
110 KX8=KX+8
120 KY5=KY+5
130 COL= (J*3/(I+3)+I*W/12) MOD 8
150 COL=COL MOD 4
160 LINE(IX,KY)-(IX8,KY5),COL,BF
170 LINE(KX,IY)-(KX8,IY5),COL,BF
180 LINE(319-IX,199-KY)-(319-IX8,199-KY5),COL,BF
190 LINE(319-KX,199-IY)-(319-KX8,199-IY5),COL,BF
195 LINE(KX,199-IY)-(KX8,199-IY5),COL,BF
196 LINE(319-IX,KY)-(319-IX8,KY5),COL,BF
197 LINE(IX,199-KY)-(IX8,199-KY5),COL,BF
198 LINE(319-KX,IY)-(319-KX8,IY5),COL,BF
240 NEXT J,I
250 NEXT W
260 GOTO 1030
1000 KEY ON:CLS:RESUME 1010
1010 PRINT " ERROR ";ERR;" HAS OCCURED IN LINE # ";ERL
1020 PRINT "THIS PROGRAM REQUIRES BASICA AND THE COLOR GRAPHICS ADAPTOR "
1030 END
```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk 0079

     Volume in drive A has no label
     Directory of A:\

    DISPLAY  TXT      3024   7-12-83  12:09a
    DISPLAY  BAS      1420   3-28-83  12:08a
    QD       EXE      2816   2-27-83  10:19p
    QM       EXE      2816   3-01-83  10:19p
    QDXT     EXE      2688   1-01-80  12:17a
    QMXT     EXE      2816   4-06-83   1:06a
    QUADRAM  DOC      1609  11-06-83   9:56a
    MEMORY   COM      1466   1-17-83   5:33p
    MEMORY   DOC      3122   7-07-83   1:24a
    PEEKPOKE TXT      3072   1-30-83  12:52p
    DSKTST   BAS      2586   6-22-83  12:49p
    DRIVETST BAS      1617   6-11-83  10:18p
    LIFE     EXE      1152   7-10-83  12:34a
    LIFE     ASM      9202   7-10-83  12:30a
    MAIL1    BAS     20480   2-15-83   2:27p
    MAIL1    DOC      2816   1-02-83  11:59p
    KEYLOC   EXE      1536   1-01-80   1:15a
    KEYLOC   ASM      7424   1-01-80   1:07a
    KEYLOC   DOC      1792   1-05-82  11:39p
    ADD-LF   BAS      1792   9-19-82   8:19a
    CONV     BAS      3584  11-07-82   4:21p
    QSPOOL   COM       846   1-01-80  12:16a
    QSWAP    COM       281   1-01-80   4:51p
    SETPRTR  EXE      7296   1-01-80   2:33a
    SETPRTR  C        5504   1-01-80   2:25a
    DESIGN   BAS     13568   8-05-82   8:41p
    ROD      BAS       768  11-08-82   9:17p
    BALL     BAS      2176   1-01-80  12:24a
    LUNAR    BAS      2176   5-27-82
    AD       COM       572   1-01-80   4:47p
    CRC      TXT      2087  12-20-84   4:58p
    CRCK4    COM      1536  10-21-82   5:50p
    LIFE2    BAS      9088   1-04-80  12:37a
    LIFE2    EXE     42906   1-04-80  12:52a
           34 file(s)     167634 bytes
                          139264 bytes free
