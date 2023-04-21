---
layout: page
title: "PC-SIG Diskette Library (Disk #92)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0092/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0092"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "MUSIC"

    MUSIC provides some easy keyboard access to the built-in IBM PC's PLAY
    command.  MUSIC allows you to enter one note at a time and lets you
    select the note on a regular music-sheet type display.  The rest of
    the disk contains two excellent BASIC games, SQUARE (a version of
    Rubic's cube) and SW-PEG, a strategy board game, and miscellaneous
    files worth checking out.
    
    System Requirements:  Some programs require color; BASIC
    
    How to Start:  To read DOC or TXT files, enter TYPE filename.ext and
    press <ENTER>. For instructions on running BASIC programs, please refer
    the GETTING STARTED section in this catalog.
    
    File Descriptions:
    
    SW-PEG   BAS  Game - move the pegs to the other side of the board
    STLOUIS  BBS  Information on using St. Louis bulletin board and others
    VCCOM    DOC  How to make VISICALC load as a .COM file
    UPVC     DOC  Instructions on how to make backups of VISICALC disks
    RUBIC3   BAS  BASIC program
    SOUNDEMO BAS  Generates several sounds selected from menu
    PATTERNS BAS  Creates patterns on graphics display
    NAMCNV   TXT  Naming convention suggestions for public domain software
    MUSIC    DAT  Data file for MUSIC.BAS
    MUSIC    BAS  Music scoring system
    TWINKLE  BAS  Generates twinkling stars on screen  (Use BASICA)
    QDCOPY   DOC  Diskcopy modification - eliminates prompts
    SCHROE   DER  Image of Schroeder in characters - may be printed
    RACE     BAS  Game
    SQUARE   BAS  Rubic cube type game
    SQUARE   DOC  Documentation for SQUARE.BAS
    SQUARE   SUM  Part of SQUARE.BAS
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CRC.TXT

{% raw %}
```
PC-SIG Disk No. #92, version v1 

The following is a list of the file checksums which should be produced by
the CRCK4 program on disk #9 (and others).  If the CRC numbers do not match
you may have a bad file.  To use type:  CRCK4 <filespec>

CRCK4 output for this disk:


CRCK ver 4.2B (MS DOS VERSION )
CTL-S pauses, CTL-C aborts

--> FILE:  PATTERNS.BAS         CRC = E7 06

--> FILE:  SOUNDEMO.BAS         CRC = 9E 1A

--> FILE:  TWINKLE .BAS         CRC = 05 B8

--> FILE:  MUSIC   .BAS         CRC = 12 4E

--> FILE:  MUSIC   .DAT         CRC = 77 84

--> FILE:  NAMCNV  .TXT         CRC = ED AD

--> FILE:  QDCOPY  .DOC         CRC = EA 3D

--> FILE:  RACE    .BAS         CRC = D9 F9

--> FILE:  RUBIC3  .BAS         CRC = 94 0A

--> FILE:  SCHROE  .DER         CRC = 4F 02

--> FILE:  SQUARE  .BAS         CRC = DC F9

--> FILE:  SQUARE  .DOC         CRC = A5 87

--> FILE:  SQUARE  .SUM         CRC = E0 CE

--> FILE:  STLOUIS .BBS         CRC = 3F 84

--> FILE:  SW-PEG  .BAS         CRC = A1 4F

--> FILE:  UPVC    .DOC         CRC = 7D A4

--> FILE:  VCCOM   .DOC         CRC = CC 2B

--> FILE:  GLOBE   .REF         CRC = 00 00

 ---------------------> SUM OF CRCS = 37 89

DONE

These and other Public Domain and user-supported programs from:

PC Software Interest Group
1125 Stewart Ct  Suite G
Sunnyvale, CA 94086
(408) 730-9291
```
{% endraw %}

## MUSIC.BAS

{% raw %}
```bas
10 REM DSNAME = MUSIC.BAS
20 REM This version completed on 6/20/82.  For comments and suggestions,
30 REM please contact Bruce Guthrie by mail at
40 REM   P.O. Box 710
50 REM   Washington, D.C. 20044
60 REM Copyright 1982 by Bruce Guthrie
70 DEF FNCT(I)=BEAT+1/L*(1+0.5*ABS(DOTTED=1))
80 DIM WHOLE%(19),HALF%(19),QUARTER%(19),EIGHTH%(37),SIXTEENTH%(37)
90 DIM WREST%(4),QREST%(25),EREST%(19),SREST%(21)
100 DIM CURSOR%(19),DOT%(37),FORBID%(25),NULL%(19),TIED%(10)
110 DIM FLAT%(15),NATURAL%(16),SHARP%(15)
120 DIM TREBLE%(73),BASE%(39)
130 DIM ONE%(39),TWO%(39),THREE%(39),FOUR%(39),EIGHT%(39)
140 DIM P$(1000),P(1000),KEYS(7)
150 SCREEN 1:KEY OFF:FOR I=1 TO 10:KEY I,"":NEXT I
160 BEAT=0:CUREND=0:TIE=0:DOTTED=0:SHARP=0:FLAT=0:NATURAL=0:NOTE=2:REPEAT=-1:POINTER=0
170 CLS:PRINT TAB(10);"Music package":PRINT TAB(3);"(c) Bruce Guthrie June, 1982"
180 INPUT "Need instructions [Y/N]? ",A$:IF A$="n" OR A$="N" THEN 220:ELSE IF A$<>"y" AND A$<>"Y" THEN 180
190 OPEN "music.DAT" FOR INPUT AS #1:I=0
200 I=I+1:IF EOF(1) THEN 220
210 INPUT #1,A$:PRINT A$:IF I<22 THEN 200:ELSE I=0:INPUT "Press RETURN? ",A$:GOTO 200
220 GOSUB 1350  'read in PUT definitions for notes
230 PLAY "MB":CLS:INPUT "Is composition saved already [Y/N]? ",A$:IF A$<>"Y" AND A$<>"y" AND A$<>"N" AND A$<>"n" THEN 230:ELSE IF A$="Y" OR A$="y" THEN GOTO 1190:ELSE CLS:P$(0)="T120":P(0)=-1
240 GOSUB 2020:NOTE=12 'draw clefs
250 GOSUB 890        'set key
260 GOSUB 830        'set bar measure
270 GOSUB 300        'enter notes
280 NEWPAGE=0:GOSUB 2050:IF NEWPAGE=1 THEN GOTO 270:ELSE GOSUB 320:GOTO 280
290 'INPUT NOTE****************************************************************
300 GOSUB 1910:PRINT"Enter note: sharp(+),flat(-),nat(N),":PRINT "rest(P), 1,2,4,8,S(16th)":PRINT"change key(K),measure(M),tempo(T)"
310 LOCATE 20,1:PRINT "'1 play, '3 save, '2 tie notes":PRINT ". (dotted note)":' print "[ (begin) and ] (end) repeat"
320 LOCATE 4,1:PRINT "Use cursor controls to position note. ":GOSUB 1890:PAUSE=0
330 X$=INKEY$:IF X$="" THEN 330:ELSE IF LEN(X$)=1 THEN 390:ELSE X=ASC(MID$(X$,2))
340 IF X=59 THEN GOSUB 1890:BEAT=0:GOSUB 1920:GOSUB 1020:GOTO 300 'SF 1 (play song)
350 IF X=60 THEN GOSUB 1950:IF TIE=1 THEN TIE=0:GOSUB 1950:GOTO 330:ELSE TIE=1:GOSUB 1950:GOTO 330 'SF 2 (tie notes)
360 IF X=61 THEN GOSUB 1150:GOSUB 1940:NEWPAGE=1:GOTO 300 'SF 3 (save it)
370 IF X=72 THEN GOSUB 1890:GOSUB 1950:NOTE=NOTE-1:IF NOTE=0 THEN NOTE=25:GOSUB 1890:GOSUB 1950:GOTO 330:ELSE GOSUB 1890:GOSUB 1950:GOTO 330 'cursor up
380 IF X=80 THEN GOSUB 1890:GOSUB 1950:NOTE=NOTE+1:IF NOTE=26 THEN NOTE=1:GOSUB 1890:GOSUB 1950:GOTO 330:ELSE GOSUB 1890:GOSUB 1950:GOTO 330 'cursor down
390 A1$=X$:IF A1$="#" THEN A1$="+":ELSE IF A1$>="a" AND A1$<="z" THEN A1$=CHR$(ASC(A1$)-32)
400 ON INSTR("+-.1248KMNSPT[]",A1$)+1 GOTO 330,520,520,410,440,440,440,440,460,470,520,450,420,500,480,490
410 GOSUB 1950:IF DOTTED=1 THEN DOTTED=0:GOSUB 1950:GOTO 330:ELSE DOTTED=1:GOSUB 1950:GOTO 330  'dotted note
420 GOSUB 1920:PRINT "Enter length for this rest? ";:PAUSE=1
430 A1$=INKEY$:IF LEN(A1$)<>1 THEN 430:ELSE ON INSTR("1248Ss",A1$)+1 GOTO 430,440,440,440,440,450,450
440 L=VAL(A1$):A1$="0":GOTO 580
450 L=16:A1$="0":GOTO 580
460 C=0:GOSUB 1890:GOSUB 890:GOTO 300 'change key
470 C=0:GOSUB 1890:GOSUB 830:GOTO 300 'change bar measure
480 'BEGIN REPEAT
490 'END REPEAT
500 GOSUB 1920:INPUT "New tempo [32<=x<=255]? ",TEMPO:IF TEMPO<32 OR TEMPO>255 THEN 500
510 GOSUB 1890:GOSUB 1920:P1$="T"+MID$(STR$(TEMPO+1000),3):INPUT "Play all with this [Y/N]? ",A$:IF A$="Y" THEN P$(0)=P1$:GOTO 300:ELSE IF A$="N" THEN POINTER=CUREND:GOSUB 780:GOTO 300:ELSE GOTO 510
520 IF A1$="+" AND FORBID%(NOTE)=1 THEN BEEP:GOTO 330:ELSE IF A1$="-" AND FORBID%(NOTE)=2 THEN BEEP:GOTO 330    'checking on flats and sharps
530 GOSUB 1950:IF A1$="+" THEN IF SHARP=1 THEN SHARP=0:GOSUB 1950:GOTO 330:ELSE SHARP=1:FLAT=0:NATURAL=0:GOSUB 1950:GOTO 330  'sharp
540 IF A1$="-" THEN IF FLAT=1 THEN FLAT=0:GOSUB 1950:GOTO 330:ELSE FLAT=1:SHARP=0:NATURAL=0:GOSUB 1950:GOTO 330              'flat
550 IF FLAT=1 THEN NATURAL=0:GOSUB 1950:GOTO 330:ELSE NATURAL=1:FLAT=0:SHARP=0:GOSUB 1950:GOTO 330                           'natural
560 GOSUB 1920:INPUT "Enter length for this note/rest? ",L:IF L=0 THEN GOSUB 1890:GOTO 320
570 'DRAW NOTE*****************************************************************
580 GOSUB 1890:IF FNCT(I)>TOP/BOTTOM THEN GOSUB 1920:PRINT "Note of this length doesn't fit in bar":BEEP:GOSUB 1930:GOTO 320:ELSE GOSUB 590:GOTO 720
590 IF PAUSE=0 THEN ON L GOTO 660,670,590,680,590,590,590,690,590,590,590,590,590,590,590,700
600 ON L GOTO 610,620,600,630,600,600,600,640,600,600,600,600,600,600,600,650   'REST NOTES
610 PUT(WHERE-4,61),WREST%,OR:RETURN
620 PUT(WHERE-4,67),WREST%,OR:RETURN
630 PUT(WHERE-4,60),QREST%,OR:RETURN
640 PUT(WHERE-4,60),EREST%,OR:RETURN
650 PUT(WHERE-4,60),SREST%,OR:RETURN
660 PUT (WHERE-4,NOTE*5+38),NULL%,PSET:PUT (WHERE-4,NOTE*5+38),NULL%,>=:PUT(WHERE-4,NOTE*5+25),WHOLE%,OR:RETURN
670 PUT (WHERE-4,NOTE*5+38),NULL%,PSET:PUT (WHERE-4,NOTE*5+38),NULL%,>=:PUT(WHERE-4,NOTE*5+25),HALF%,OR:RETURN
680 PUT (WHERE-4,NOTE*5+25),QUARTER%,OR:RETURN
690 PUT (WHERE-4,NOTE*5+25),EIGHTH%,OR:RETURN
700 PUT (WHERE-4,NOTE*5+25),SIXTEENTH%,OR:RETURN
710 'FIGURE OUT WHAT TO PLAY***************************************************
720 IF PAUSE=1 THEN P1$="O3P ":GOTO 740:ELSE P2$=MID$("GFEDCBAGFEDCBAGFEDCBAGFEDCBA",NOTE,1):P1$=P2$:IF NOTE<6 THEN P1$="O4"+P1$:ELSE IF NOTE<13 THEN P1$="O3"+P1$:ELSE IF NOTE<20 THEN P1$="O2"+P1$:ELSE P1$="O1"+P1$
730 IF FLAT=1 THEN P1$=P1$+"-":ELSE IF SHARP=1 THEN P1$=P1$+"+":ELSE IF NATURAL=1 THEN P1$=P1$+" ":ELSE P1$=P1$+MID$("- +",KEYS(ASC(P2$)-64)+2,1)
740 IF TIE=1 THEN P1$="ML"+P1$:ELSE P1$="MN"+P1$
750 P1$=P1$+MID$(STR$(100+L),3):IF DOTTED=1 THEN P1$=P1$+".":ELSE P1$=P1$+" "
760 ON ERROR GOTO 820:PLAY P1$:ON ERROR GOTO 0
770 'INSERT NOTE AFTER POINTER*************************************************
780 N1=P(POINTER):CUREND=CUREND+1:P(POINTER)=CUREND:POINTER=P(POINTER):P$(POINTER)=P1$:P(POINTER)=N1:RETURN
790 'DELETE NOTE AFTER POINTER*************************************************
800 P$(P(POINTER))="":P(POINTER)=P(P(POINTER)):RETURN
810 'ERROR*********************************************************************
820 GOSUB 1920:PRINT "Sorry.  That note's incorrect.":RESUME 300
830 'SET TEMPO****************************************************************
840 GOSUB 1910:INPUT "Bar measure, e.g. 4/4? ",A$
850 X=INSTR(A$,"/"):IF X=0 THEN PRINT "No division symbol [/].  Re-enter.":GOTO 840:ELSE IF X=1 OR LEN(A$)=X THEN 840
860 TOP=VAL(MID$(A$,1,X-1)):BOTTOM=VAL(MID$(A$,X+1)):IF MID$("XXXX   X",BOTTOM,1)+MID$("XXXX   X",TOP,1)<>"XX" THEN PRINT "Illegal numbers.  Re-enter.":GOTO 830
870 P1$="B"+RIGHT$(STR$(TOP),2)+"/"+RIGHT$(STR$(BOTTOM),2):POINTER=CUREND:GOSUB 780:GOTO 2120
880 'SET KEY******************************************************************
890 GOSUB 1910:PRINT "Use cursor controls [up/down] and +/-":PRINT "keys to position/set flats and sharps.":PRINT "Use CR to stop.  Do top clef only."
900 FOR I=1 TO 7:KEYS(I)=0:NEXT I:NOTE=2
910 GOSUB 1900
920 X$=INKEY$:IF X$="" THEN 920
930 IF X$="+" OR X$="#" THEN IF FORBID%(NOTE)=1 THEN BEEP:GOTO 920:ELSE I=1:GOSUB 1000:PUT(WHERE+4,NOTE*5+32),SHARP%,>=:GOTO 920
940 IF X$="-" THEN IF FORBID%(NOTE)=2 THEN BEEP:GOTO 920:ELSE I=-1:GOSUB 1000:PUT(WHERE+4,NOTE*5+32),FLAT%,>=:GOTO 920
950 IF ASC(X$)=13 THEN P1$="K":FOR I=0 TO 7:P1$=P1$+STR$(KEYS(I)):NEXT I:POINTER=CUREND:GOSUB 780:GOSUB 1900:GOSUB 2080:WHERE=WHERE+4:NOTE=12:RETURN  'carriage return
960 IF LEN(X$)<2 THEN 920:ELSE X=ASC(MID$(X$,2))
970 IF X=72 THEN GOSUB 1900:NOTE=NOTE-1:IF NOTE=0 THEN NOTE=7:GOSUB 1900:ELSE GOSUB 1900
980 IF X=80 THEN GOSUB 1900:NOTE=NOTE+1:IF NOTE=8 THEN NOTE=1:GOSUB 1900:ELSE GOSUB 1900
990 GOTO 920
1000 IF KEYS(8-NOTE)=I THEN KEYS(0)=KEYS(0)-1:KEYS(8-NOTE)=0:RETURN:ELSE IF KEYS(8-NOTE)=-I THEN KEYS(8-NOTE)=I:RETURN:ELSE KEYS(8-NOTE)=I:KEYS(0)=KEYS(0)+1:RETURN
1010 'PLAY IT WHILE DRAWING IT*************************************************
1020 GOSUB 2020:E=0:WHILE E>-1:A$=P$(E):A1$=MID$(A$,1,1)
1030 IF A1$="T" THEN PLAY A$:GOTO 1130
1040 IF A1$="B" THEN TOP=VAL(MID$(A$,2,2)):BOTTOM=VAL(MID$(A$,5,2)):GOSUB 2120:GOTO 1130
1050 IF A1$="K" THEN FOR I=0 TO 7:KEYS(I)=VAL(MID$(A$,I*2+2,2)):NEXT I:GOSUB 2080:GOTO 1130
1060 IF A1$="R" THEN  'repeats
1070 IF MID$(A$,1,2)="ML" THEN TIE=1:ELSE TIE=0
1080 L=VAL(MID$(A$,7,2)):A1$=MID$(A$,5,1):IF A1$="P" THEN PAUSE=1:GOTO 1110
1090 PAUSE=0:NOTE=(4-VAL(MID$(A$,4,1)))*7-2+INSTR("BAGFEDC",A1$):T1$=MID$(A$,6,1):IF T1$="+" THEN SHARP=1:ELSE IF T1$="-" THEN FLAT=1
1100 IF MID$(A$,9,1)="." THEN DOTTED=1
1110 WHERE=WHERE+(SHARP+FLAT+NATURAL)*4:GOSUB 1950:GOSUB 590
1120 PLAY A$:GOSUB 2050
1130 E=P(E):WEND:RETURN
1140 'SAVE IT******************************************************************
1150 CLS:I1=0:ON ERROR GOTO 1280:INPUT "Name of composition? ",N$:PRINT "Name of file to save as":GOSUB 1240:IF A$="Q" THEN 1940
1160 OPEN FI$ FOR OUTPUT AS #1:WRITE #1,DATE$,N$,CUREND
1170 FOR I=0 TO CUREND:WRITE#1,P(I),P$(I):NEXT I:CLOSE #1:PRINT "Saved!!":BEEP:GOSUB 1930:ON ERROR GOTO 0:RETURN
1180 'LOAD IT******************************************************************
1190 CLS:I1=1:ON ERROR GOTO 1280:PRINT "Name of file to load composition from?":GOSUB 1240:IF A$="Q" THEN 230
1200 OPEN FI$ FOR INPUT AS #1:INPUT #1,A$,N$,CUREND
1210 FOR I=0 TO CUREND:INPUT#1,P(I),P$(I):NEXT I:CLOSE #1
1220 PRINT "The name of this composition is:":PRINT N$:PRINT "File was last saved on ";A$:GOSUB 1930
1230 PRINT "Loaded!":BEEP:GOSUB 1930:ON ERROR GOTO 0:GOSUB 1020:GOTO 270
1240 INPUT "(DEF ext=MUS)? ",FI$:IF INSTR(FI$,".") = 0 THEN FI$=FI$+".MUS"
1241 IF FI$=".MUS" THEN PRINT "Expecting file name.":PRINT "File name ";:GOTO 1240
1250 IF INSTR(FI$,":")=0 THEN INPUT "Device A or B? ",A$:IF LEN(A$)<>1 THEN 1250:ELSE FI$=A$+":"+FI$
1260 INPUT "Insert disk.  Press RETURN (Q=quit)? ",A$:IF A$="Q" THEN ON ERROR GOTO 0:RETURN:ELSE RETURN
1270 'ERROR-TRAPPING ROUTINE***************************************************
1280 IF ERR=53 THEN PRINT "File of this name is not on disk.":PRINT "Try another disk or give up.":GOTO 1330
1290 IF ERR=61 THEN PRINT "Ran out of room on the disk for this":PRINT "file.  Try another disk or give up.":GOTO 1330
1300 IF ERR=62 THEN PRINT "Hmm.  It says we're out of data.":PRINT "Perhaps your file was created by an":PRINT "earlier version of this routine.":PRINT "Skip loading it here.":GOTO 1330
1310 IF ERR=64 THEN PRINT "What the hell was that name you input?":PRINT "It didn't go over at all!":PRINT "Try again or give up.":GOTO 1330
1320 ON ERROR GOTO 0:RESUME
1330 GOSUB 1930:IF I1=1 THEN RESUME 1190:ELSE RESUME 1150
1340 'READ NOTE VALUES*********************************************************
1350 PRINT:PRINT "Reading note character definitions..."
1360 DATA 16,05,-241,-193,-193,-193,-1009
1370 FOR I=0 TO 6:READ NULL%(I):NEXT I 'USED AS PUT(X,Y),NULL%,PRESET TO CLEAR OUT FOR WHOLE% AND HALF%
1380 DATA 3,2,1,3,2,1,3,3,2,1,3,2,1,3,3,2,1,3,2,1,3,3,2,1,3
1390 FOR I=1 TO 25:READ FORBID%(I):NEXT I
1400 DATA 16,18,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-193,-193,-193,0
1410 FOR I=0 TO 19:READ CURSOR%(I):NEXT I
1420 DATA 16,18,0,0,0,0,0,0,0,0,0,0,0,0,0,-241,816,816,816,-1009
1430 FOR I=0 TO 19:READ WHOLE%(I):NEXT I
1440 DATA 16,18,768,768,768,768,768,768,768,768,768,768,768,768,768,-241,816,816,816,-1009
1450 FOR I=0 TO 19:READ HALF%(I):NEXT I
1460 DATA 16,18,768,768,768,768,768,768,768,768,768,768,768,768,768,-241,-193,-193,-193,-1009
1470 FOR I=0 TO 19:READ QUARTER%(I):NEXT I
1480 DATA 32,18,768,192,768,48,768,12,768,3,768,-16384,768,-16384,768,-16384,768,-16384,768,-16384,768,0,768,0,768,0,768,0,-241,0,-193,0,-193,0,-193,0,-1009,0
1490 FOR I=0 TO 37:READ EIGHTH%(I):NEXT I
1500 DATA 32,18,768,192,768,48,768,12,768,3,768,-16192,768,-16336,768,-16372,768,-16381,768,-16384,768,-16384,768,-16384,768,-16384,768,-16384,-241,0,-193,0,-193,0,-193,0,-1009,0
1510 FOR I=0 TO 37:READ SIXTEENTH%(I):NEXT I
1520 DATA 32,18,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,60,0,60,0,0,0,0
1530 FOR I=0 TO 37:READ DOT%(I):NEXT I
1540 DATA 16,3,-961,-961,-961
1550 FOR I=0 TO 4:READ WREST%(I):NEXT I
1560 DATA 18,16,0,0,192,-4096,0,60,-4096,768,192,15,3840,0,-16381,0,240,-1021,3840,0,60,15360,0,12,0,0
1570 FOR I=0 TO 25:READ QREST%(I):NEXT I
1580 DATA 18,12,0,0,0,3072,15360,48,12348,3840,192,-16384,768,0,3,3072,0,12,0,0
1590 FOR I=0 TO 19:READ EREST%(I):NEXT I
1600 DATA 22,13,0,0,-16384,-15613,768,195,-1024,15360,12,12348,3840,240,-16384,0,192,3,768,0,0,0
1610 FOR I=0 TO 21:READ SREST%(I):NEXT I
1620 DATA 12,14,0,-16384,-4084,-4081,-16321,-16324,-16372,-16372,-4084,-4081,-16321,-16324,12,0
1630 FOR I=0 TO 15:READ SHARP%(I):NEXT I
1640 DATA 14,14,0,48,48,48,48,48,-16333,12348,12336,-16336,51,60,48,0
1650 FOR I=0 TO 15:READ FLAT%(I):NEXT I
1660 DATA 12,15,0,0,48,48,63,63,51,51,51,63,63,3,3,0,0
1670 FOR I=0 TO 16:READ NATURAL%(I):NEXT I
1680 DATA 30,36,0,0,0,0,768,192,3840,240,15360,60,15360,60,15360,60,15360,240,3840,192
1690 DATA 3840,0,16128,0,-256,0,-3325,0,-15613,0,-15601,0,831,0,828,0,828,192,60,192
1700 DATA 60,192,3900,255,15420,-16177,12303,-16189,15,-16189,15,-16189,-16381,207,-4093,252,-256,240,0,48
1710 DATA 0,48,0,48,-1024,48,-1024,48,-256,192,0,0,0,0
1720 FOR I=0 TO 73:READ TREBLE%(I):NEXT I
1730 DATA 30,19,0,0,0,0,-253,192,783,-3856,12,-3844,-16369,60,-16369,60,-16369,-4036,0,-4036
1740 DATA 0,240,0,240,768,192,3840,0,15360,0,-4096,0,-16381,0,15,0,12,0,0,0
1750 FOR I=0 TO 39:READ BASE%(I):NEXT I
1760 DATA 48,3,240,0,-4096,63,0,-16369,-253,-1,252
1770 FOR I=0 TO 10:READ TIED%(I):NEXT I
1780 DATA 26,19,-4093,0,-1009,0,-1024,0,-1024,0,-1024,0,-1024,0,-1024,0,-1024,0,-1024,0,-1024,0,-1024,0,-1024,0,-1024,0,-1024,0,-1024,0,-1024,0,-1024,0,-241,192,-241,192
1790 FOR I=0 TO 39:READ ONE%(I):NEXT I
1800 DATA 26,19,-241,0,-193,192,828,192,828,192,768,192,768,192,3840,0,15360,0,-4096,0,-16381,0,15,0,60,0,60,0,60,0,60,0,60,0,828,192,-193,192,-193,192
1810 FOR I=0 TO 39:READ TWO%(I):NEXT I
1820 DATA 26,19,-1009,0,-193,0,3900,0,3840,0,3840,0,3840,0,3840,0,3840,0,-1009,0,-1009,0,3840,0,3840,0,3840,0,3840,0,3840,0,3840,0,3900,0,-193,0,-1009,0
1830 FOR I=0 TO 39:READ THREE%(I):NEXT I
1840 DATA 26,19,16128,0,-256,0,-256,0,-12541,0,-12541,0,3855,0,3855,0,3900,0,3900,0,-1,192,-1,192,3840,0,3840,0,3840,0,3840,0,3840,0,3840,0,3840,0,3840,0
1850 FOR I=0 TO 39:READ FOUR%(I):NEXT I
1860 DATA 26,19,-253,0,-253,0,783,192,783,192,783,192,783,192,783,192,783,192,-253,0,-253,0,783,192,783,192,783,192,783,192,783,192,783,192,783,192,-241,192,-253,0
1870 FOR I=0 TO 39:READ EIGHT%(I):NEXT I
1880 RETURN
1890 PUT(WHERE-4,NOTE*5+25),CURSOR%,>=:RETURN   'draw cursor for notes
1900 PUT(WHERE+1,NOTE*5+25),CURSOR%,>=:RETURN   'draw cursor for keys
1910 LOCATE 1,1:PRINT SPACE$(160):LOCATE 1,1:RETURN    'clear top 4 lines
1920 LOCATE 4,1:PRINT SPACE$(39):LOCATE 4,1:RETURN     'clear line 4
1930 FOR I=1 TO 1000:NEXT I:RETURN                     'time waster
1940 GOSUB 2020:GOSUB 2080:GOSUB 2120:RETURN           'draws in screen
1950 IF TIE=1 THEN PUT(WHERE-5,NOTE*5+47),TIED%        'draws ties if needed
1960 IF DOTTED=1 THEN PUT(WHERE-4,NOTE*5+25),DOT%  'draws dotted notes if needed
1970 IF SHARP=1 THEN PUT(WHERE-8,NOTE*5+32),SHARP%     'draws sharps
1980 IF FLAT=1 THEN PUT(WHERE-8,NOTE*5+32),FLAT%       'draws flats
1990 IF NATURAL=1 THEN PUT(WHERE-8,NOTE*5+32),NATURAL% 'draws naturals
2000 RETURN
2010 'DRAW CLEFS***************************************************************
2020 CLS:FOR I=50 TO 150 STEP 10:IF I<>100 THEN LINE(0,I)-STEP(319,0),2
2030 NEXT I:LINE (0,50)-(0,150):PUT(0,50),TREBLE%,OR:PUT(0,115),BASE%,OR:WHERE=10:RETURN
2040 'ADDS BARS, REDRAWS AS NECESSARY******************************************
2050 BEAT=FNCT(L):IF BEAT>=TOP/BOTTOM THEN LINE(WHERE+10,50)-STEP(0,100):BEAT=0
2060 WHERE=WHERE+14+DOTTED*4:TIE=0:DOTTED=0:SHARP=0:NATURAL=0:FLAT=0:IF WHERE>305 THEN GOSUB 1940:NEWPAGE=1:RETURN:ELSE RETURN
2070 'DRAW EXISTING KEY STRUCTURE**********************************************
2080 IF KEYS(0)=0 THEN RETURN
2090 FOR I=1 TO 7:IF KEYS(8-I)=1 THEN FOR N1=I TO 25 STEP 7:PUT(WHERE+4,N1*5+32),SHARP%,OR:NEXT N1:ELSE IF KEYS(8-I)=-1 THEN FOR N1=I TO 25 STEP 7:PUT(WHERE+4,N1*5+32),FLAT%,OR:NEXT N1
2100 NEXT I:WHERE=WHERE+10:RETURN
2110 'DRAW MEASURES************************************************************
2120 I1=0:ON TOP GOSUB 2130,2140,2150,2160,2160,2160,2160,2170:I1=20:ON BOTTOM GOSUB 2130,2140,2150,2160,2160,2160,2160,2170:WHERE=WHERE+20:RETURN
2130 FOR I=50+I1 TO 110+I1 STEP 60:PUT(WHERE+4,I),ONE%,OR:NEXT I:RETURN
2140 FOR I=50+I1 TO 110+I1 STEP 60:PUT(WHERE+4,I),TWO%,OR:NEXT I:RETURN
2150 FOR I=50+I1 TO 110+I1 STEP 60:PUT(WHERE+4,I),THREE%,OR:NEXT I:RETURN
2160 FOR I=50+I1 TO 110+I1 STEP 60:PUT(WHERE+4,I),FOUR%,OR:NEXT I:RETURN
2170 FOR I=50+I1 TO 110+I1 STEP 60:PUT(WHERE+4,I),EIGHT%,OR:NEXT I:RETURN
```
{% endraw %}

## NAMCNV.TXT

{% raw %}
```

Naming Conventions for Software Exchanges
Anyone submitting software to user group software exchanges should follow a few
standard conventions. Some of these conventions involve user documentation,
program documentation, file names, and keyboard usage.  The following
paragraphs describe these conventions:

1. User Documentation:  Every program should have built-in documentation
that tells the user the purpose of the program and the procedures to follow to
use  the program. This documentation could be in the form of Help screens or
detailed comments imbedded into the display formats. Help screens should
be optional so the experienced user is not  hindered by the documentation
display.  If user documentation cannot be imbedded into the program, then a
documentation file should be included with the program.  This file should be a
standard DOS file, which can  be viewed with the DOS TYPE command,  and  have
the  same filename as the program and a filename extension of DOC.

2. Program Documentation: One of the purposes of the software library is
to provide programs that the novice programmer can use as an educational tool.
This use of the library  can be enhanced if source code for those
programs submitted is well documented.   A remarks section should be included
at the begining of the program,  which contains the name of the program,  the
author's name,  and a general description  of the program.   Documentation
should also be included throughout the program so that the logic of the program
may be more  easily followed.  Source code for BASIC programs should not be
protected and  source code for compiled programs should be included with
a filename extension indicating the language used.

3. File Names: The use of file naming conventions can make manipulation
of files on disks much simpler and  can  help inform the  user of the purpose
or content of  the  file. The filename should reflect the purpose of the file
and  be easily identified with related files.   For example, let's  assume
that we have developed a database  system containing a BASIC  program for
updating,  a  BASIC  program  for printing, a data file, a documentation file,
and a batch file for invoking BASIC with the proper parameters.   These files
could be named  DBASUPDT.BAS, DBASPRNT.BAS, DBASE.DAT, DBASE.DOC  and
DBASE.BAT.   Using these names, we can easily identify all of  the files used
by the database system, and the purpose of the  file.   Since the first
4 characters of each of these  file names are the same, they can all be copied
to another disk  by using  filename wildcard characters  (DBAS*.*)  in the copy
statement.

The recommended file name extensions are as follows:
        - .DOC = Documentation or Instructions
        - .TXT = General ASCII text file
        - .BIN = Binary memory image such as created by BSAVE
        - .DAT = Data file
        - .ASM = Assembly language source
        - .BAS = BASIC program
        - .PAS = PASCAL source
        - .FOR = FORTRAN source
        - .COB = COBOL source
        - .BAT = Batch file
        - .HEX = Files in Hexadecimal
        - .COM = Command files executable in DOS
        - .EXE = Compiled programs executable in DOS
     Some of the above filename extensions such as .BAT  are forced upon  us
and are included here for informational purposes.  I am sure some extensions
have been left out,  but this is at least a common starting point.

4. Keyboard Usage: The user friendliness of all programs can be improved
by using certain keys on the  keyboard consistently.  For example, the Escape
key (Esc) should always be  used  to back out of or escape from  the function
currently being  performed.  Since  there  are  far too many  keys  on  the
keyboard  to discuss here,  I will refer you to section 3 of  the IBM
Personal Computer Guide to Operations and Appendix C in  the Technical
Reference manual.  These manuals provide keyboard usage conventions generally
used by commercial software developers as  well.

Following these 4 sets of conventions  whenever possible keeps practices
uniform from one software developer to another and improves the quality and
legibility of the software library.   Following conventions like these may take
a little  extra time, but the long range benefits to the user and programmer
are worth it.
     In addition, you should avoid using  KILL or SAVE statements in your file
unless they are required for execution of the programs. Many people get quite
nervous with KILL statements in a file.
```
{% endraw %}

## PATTERNS.BAS

{% raw %}
```bas
10 ' Program: PATTERNS.BAS (Keyboard Kaleidoscope)
20 ' Contributed to PC-SIG on 5 November, 1983
30 ' Written by John Walkenbach
40 '            1425 NW Highland
50 '            Corvallis, OR 97330
60 '
70 KEY OFF
80 CLS:LOCATE 4,20:PRINT"K E Y B O A R D   K A L E I D O S C O P E"
90 LOCATE 24,1:PRINT "Instructions? (y/n) ";
100 A$=INKEY$:IF LEN(A$)=0 THEN 90
110 IF A$="y" OR A$="Y" THEN GOSUB 540
120 LOCATE ,,1,10,13
130 R=1:C=1:CCC=219
140 KEY OFF 'Activate function keys
150 FOR I=10 TO 14:KEY(I) ON:NEXT:KEY (1) ON:KEY (2) ON
160 ON KEY(10) GOSUB 490
170 ON KEY(11) GOSUB 250
180 ON KEY(12) GOSUB 280
190 ON KEY(13) GOSUB 310
200 ON KEY (14) GOSUB 340
210 ON KEY(1) GOSUB 670
220 ON KEY(2) GOSUB 480
230 CLS:GOSUB 680
240 GOTO 240 'Wait for interrupt
250 IF R-1=0 THEN BEEP:RETURN
260 R=R-1:LOCATE R,C:PRINT CHR$(CCC);
270 GOSUB 370:RETURN
280 IF C-1=0 THEN BEEP:RETURN
290 C=C-1:LOCATE R,C:PRINT CHR$(CCC);
300 GOSUB 370:RETURN
310 IF C+1=21 THEN BEEP:RETURN
320 C=C+1:LOCATE R,C:PRINT CHR$(CCC);
330 GOSUB 370:RETURN
340 IF R+1=13 THEN BEEP:RETURN
350 R=R+1:LOCATE R,C:PRINT CHR$(CCC);
360 GOSUB 370:RETURN
370 LOCATE R,C
380 LOCATE R,41-C:PRINT CHR$(CCC);
390 LOCATE R,C+40:PRINT CHR$(CCC);
400 LOCATE R,81-C:PRINT CHR$(CCC);
410 LOCATE 25-R,C:PRINT CHR$(CCC);
420 LOCATE 25-R,41-C:PRINT CHR$(CCC);
430 LOCATE 25-R,C+40:PRINT CHR$(CCC);
440 IF R=1 AND C=1 THEN 460 'To eliminate scrolling from char at bottom right
450 LOCATE 25-R,81-C:PRINT CHR$(CCC);
460 LOCATE R,C
470 RETURN
480 CLS:RUN 130
490 IF CCC=219 THEN CCC=176:GOSUB 680:RETURN
500 IF CCC=176 THEN CCC=177:GOSUB 680:RETURN
510 IF CCC=177 THEN CCC=178:GOSUB 680:RETURN
520 IF CCC=178 THEN CCC=32:GOSUB 680:RETURN
530 IF CCC=32 THEN CCC=219:GOSUB 680:RETURN
540 'print instructions, if needed
550 LOCATE 6,30:PRINT"I N S T R U C T I O N S"
560 LOCATE 10,1:PRINT"This program allows you to draw interesting kaleidoscopic patterns on the
570 PRINT "screen using the four cursor control keys and Function Key 10.
580 PRINT:PRINT"The screen is divided into eight `views.'  Pay attention to the upper
590 PRINT"left corner of the screen (12 rows by 20 columns); that's what you control.
600 PRINT:PRINT"Function Key 10 changes the color of the tracing. The current color is shown in
610 PRINT"    the bottom left corner of the screen (b is blank).
620 PRINT"Function Key 1 stops the program and returns you to BASIC.
630 PRINT"Function Key 2 clears the screen and starts over.
640 PRINT:PRINT"When you hear a beep, it means you can't go further in that direction."
650 LOCATE 24,1:INPUT"Hit <ENTER> to begin. ",ENT$
660 RETURN
670 LOCATE ,,1,12,13:CLS:END
680 LOCATE 25,1
690 IF CCC=32 THEN PRINT"b";:LOCATE R,C:RETURN
700 PRINT CHR$(CCC);:LOCATE R,C:RETURN
```
{% endraw %}

## QDCOPY.DOC

{% raw %}
```
The following was obtained from the Assembly Language HostComm run by 
Bob Blackwell at (703) 425-7229, password = ibmpc. The system contains 
lots of Assembly Language programs, hints, tips, and fixes. 
. 
.                              DOS   2.0 
.                       DISKCOPY MODIFICATION 
. 
.     THIS DEBUG DESCRIPTION IS FOR THE EXPERIENCED PROGRAMMER. 
.THIS WILL ELIMINATE THE QUESTIONS AT THE START AND END OF DISKCOPY.COM 
.TO ALLOW THE PROGRAM TO RUN WITHOUT OPERATOR INTERVENTION. 
. 
.USING DOS DEBUG: 
. 
.A>DEBUG DISKCOPY.COM 
.-E 214 
.38E3:0214 E8.CD 1A.20 04.90<ENTER> 
.-E 5C0 
.38E3:05C0 E8.90 ED.90 FF.90 <ENTER> 
.-E 5C7 
.38E3:05C7 E8.90 
.38E3:05C8 E6.90 FF.90<ENTER> 
.-E 5CE 
.38E3:05CE E8.90 DF.90 
.38E3:05D0 FF.90 E8.90 E3.90 FF.90<ENTER> 
.-W 
.WRITING 098C BYTES
.-Q

```
{% endraw %}

## RACE.BAS

{% raw %}
```bas
0 ''LIST 0,65000
1 GOTO 60000
10 DATA "''PROGRAM DESCRIPTION (11-89)"
95 '' SUBROUTINE LIST
96 DATA "MAIN", ""
100 '' INITIALIZE STANDARD VARIABLES (101-149)
101 DEFINT I-N: DEFSTR S
102 LTRUE = -1: LFALSE = 0
103 WIDTH "scrn:", 80: WIDTH "lpt1:", 80: IWAIT = 1000
104 DOUB$ = CHR$(14): UNDOUB$ = CHR$(20): COMP$ = CHR$(15): UNCOMP$ = CHR$(18):     CR$ = CHR$(13): EJCT$ = CHR$(12)
150 '' INITIALIZE PROGRAM VARIABLES (151-199)
200 '' MAIN PROGRAM (201-999)
205 CLS
206 DEFSNG X-Z
207 GOSUB 399
210 DIM X(20),Z(20),F(20) : INPUT "frq iz spd"; FRQ, IZ,ISPD : ICT = 2000
215 CLS: FOR I = 1 TO IZ:  F(I) = INT((I/IZ)*FRQ) + 37 : SOUND F(I),13: PRINT I TAB(78) "!": NEXT I
218 SOUND 37,20
220 FOR I = 1 TO ICT
230  Y = RND
231  Y = INT(Y*IZ)+1
233 F = INT((Y/IZ)*FRQ)+37
250  X(Y) = X(Y) + 1
255 IF X(Y) < 70 THEN SOUND F(Y),ISPD: LOCATE Y, X(Y)+9: PRINT CHR$(26) Y   ; ELSE IF X(Y) = 70 THEN  CT = CT + 1: LOCATE Y,4: PRINT CT: IF CT = IZ THEN I = ICT
260 NEXT I
270 FOR I = 1 TO IZ
280  Z(I) = X(I) / ICT
290  IF XMAX < Z(I) THEN XMAX = Z(I)
300 NEXT I
305 XFACT = 50 / XMAX
306 FOR I = 1 TO 1000: NEXT I :LOCATE IZ+1,1
310 FOR I = 1 TO IZ
320  Y = INT(Z(I) * XFACT)
330  PRINT I X(I)  Z(I) TAB(30) STRING$(Y, 34)
340 NEXT I
350 END
399 X$ = TIME$
400 XT$ = MID$(X$,4,2) + MID$(X$,7,2)
401 XRD = VAL(XT$)
402 RANDOMIZE (XRD) : PRINT XRD
403 RETURN
10000 '' STANDARD SUBROUTINES  (10000-19999)
20000 '' STANDARD FILE DEFINITIONS AND I/O ROUTINES (20000-29999)
60000 '' PROGRAM INITIALIZATION (INIT PROGRAM)
60010 CLS
60020 PRINT "STANDARD PROGRAM INITIALIZATION"
60025 TMP$ = DATE$
60030 IF TMP$  = "00-00-1980" THEN INPUT "day"; X$: DATE$ = "4-" + X$ + "-82"
60040 PRINT DATE$
60050 PRINT: PRINT "Following files on disk:": PRINT
60060 FILES "R???????.*"
60070 PRINT
60080 ''   load subroutines
60090 RESTORE 96
60100 READ X$
60110 IF X$ = "SKELETON" THEN INPUT "Enter main program name: ", X$: IF X$ = "NEW" OR X$ = "new" THEN GOTO 60175 ELSE CHAIN MERGE  X$, 60090!, ALL
60120 IF X$ <> "MAIN" AND X$ <> "main"                                                      THEN PRINT "invalid subroutine list in 76": BEEP: STOP
60125 ITMP = 2
60130 PRINT X$ " loaded"
60140 RESTORE 96: FOR I = 1 TO ITMP: READ X$: NEXT I
60150 IF X$ = "" THEN GOTO 60180
60155 ITMP = ITMP + 1
60160 CHAIN MERGE X$, 60130!, ALL
60170 STOP
60175 PRINT "SKELETON program loaded; ready for entry of new program"
60176 TMPSW = 1
60180 ''  setup function keys
60190 KEY 10, CHR$(27) + "cls" + CHR$(13)
60200 KEY 9, "goto 60300" + CHR$(13)     '...LIST helper
60210 KEY 4, "goto 60360" + CHR$(13)     '...SAVE" helper
60220 KEY 2, "run 100" + CHR$(13)
60230 PRINT "function keys defined as:"
60240 PRINT "  F2    run 100"
60250 PRINT "  F4    SAVE helper"
60260 PRINT "  F9    LIST helper"
60270 PRINT "  F10   cls"
60275 IF TMPSW = 1 THEN PRINT "   change subroutine list in statement 96": PRINT "96 DATA " + CHR$(34) + "MAIN" + CHR$(34) + ", " + CHR$(34) + CHR$(34):              LOCATE CSRLIN-2, 1
60280 END
60290 ''   LIST helper
60300 CLS
60310 INPUT TEMPX
60320 IF TEMPX <> 0 THEN TMP$ = "list " + STR$(TEMPX-80) + "-" + STR$(TEMPX+80)
60330 PRINT TMP$
60340 LOCATE 1,1
60350 END
60360 ''   SAVE helper
60370 CLS
60380 PRINT "SAVE function"
60390 INPUT "save file name "; Y$
60400 INPUT "delete subroutines (Y/N)"; X$
60410 LOCATE 5,1
60420 IF X$ = "Y" OR X$ = "y" THEN PRINT "DELETE 10001-19999": PRINT
60430 PRINT "SAVE " + CHR$(34) + Y$ + CHR$(34) + ",a
60440 PRINT
60450 IF X$ = "Y" OR X$ = "y" THEN PRINT "press enter twice to execute"   ELSE PRINT "'press enter to execute"
60460 LOCATE 4,1
60470 END
```
{% endraw %}

## RUBIC3.BAS

{% raw %}
```bas
1 CLS
10 PRINT "INSTRUCTIONS"
20 PRINT "WHEN YOU ARE ASKED FOR THE NUMBER OF MIXES, ENTER THE NUMBER OF"
30 PRINT "RANDOM FACE ROTATIONS YOU DESIRE" : PRINT
40 PRINT " WHEN YOU ARE ASKED FOR YOUR MOVE, ENTER THE DESIGNATION OF THE "
50 PRINT " FACE:  F=FRONT, B=BACK, L=LEFT, R=RIGHT,T=TOP, B=BOTTOM
60 PRINT" AND THE AMOUNT OF ROTATION, += CLOCKWIZE 1, -=COUNTERCLOCKWIZE 1"
70 PRINT "              2= 180 DEGREES"
80 PRINT " SEE THE ARTICLE IN KILOBAUD JANUARY 1982 PAGE 28"
90 PRINT " THIS VERSION WAS EXTENSIVELY CONVERTED TO RUN ON THE ibm"
100 PRINT "I CAN'T FIGURE WHY THEY USED SUCH A LARGE ARRAY TO STORE THE CUBE"
101 PRINT " LINE 730 PRINTS THE RANDOM MIX MOVES SO THAT YOU CAN "
102 PRINT " CHEAT AND SOLVE THE CUBE.  COMMENT THIS LINE OUT TO BE HONEST"
110 PRINT "PRESS ANY KEY TO CONTINUE"
120 B$=INKEY$:IF B$="" THEN GOTO 120
130 CLS
140 SCREEN 2
150 DRAW "BL120M-120,-20D60M+120,20U60M+120,-20D60M-120,20U20M-120,-20U20"
160 DRAW "M+120,20M+120,-20D20M-120,20D20M-40,-7U60M+120,-20M+40,+7M-120,-20"
170 DRAW "M-120,20D60M+40,+7U60M+120,-20M-40,-7M-40,+7M+120,+20D60M-40,+7U60"
180 DRAW "M-120,-20"
190 DRAW "BR360BD45"
200 DRAW "A2M-120,-20D60M+120,20U60M+120,-20D60M-120,20U20M-120,-20U20"
210 DRAW "M+120,20M+120,-20D20M-120,20D20M-40,-7U60M+120,-20M+40,+7M-120,-20"
220 DRAW "M-120,20D60M+40,+7U60M+120,-20M-40,-7M-40,+7M+120,+20D60M-40,+7U60"
230 DRAW "M-120,-20A0"
240 OP$="D6R5U6L5":YP$="F3E3G3D3":RP$="D6U6R5D3L5R3F4":WP$="D6E3F3U6"
250 BP$="D6R5U3L5R5U3L5":GP$="R5D1U1L5D6R5U2L1"
260 DIM OA%(5),YA%(5),RA%(5),WA%(5),BA%(5),GA%(5)
270 DRAW "BM1,1;XOP$;":GET(1,1)-(7,8),OA% :PUT(1,1),OA%
280 DRAW "BM1,1;XYP$;":GET(1,1)-(7,8),YA% :PUT(1,1),YA%
290 DRAW "BM1,1;XRP$;":GET(1,1)-(7,8),RA% :PUT(1,1),RA%
300 DRAW "BM1,1;XWP$;":GET(1,1)-(7,8),WA% :PUT(1,1),WA%
310 DRAW "BM1,1;XBP$;":GET(1,1)-(7,8),BA% :PUT(1,1),BA%
320 DRAW "BM1,1;XGP$;":GET(1,1)-(7,8),GA% :PUT(1,1),GA%
330 DATA 478,149,518,143,557,136,437,142,478,136,518,129,396,136,437,129,478
340 DATA 123
350 DATA 177,144,177,124,177,104,137,137,137,117,137,97,97,131,97,111,97,91
360 DATA 217,144,217,124,217,104,257,137,257,117,257,97,297,131,297,111,297,91
370 DATA 197,90,157,84,117,77,237,84,197,77,157,71,277,77,237,71,197,64
380 DATA 376,123,376,103,376,83,416,117,416,97,416,77,456,110,456,90,456,70
390 DATA 577,123,577,103,577,83,537,117,537,97,537,77,496,110,496,90,496,70
400 DIM R$(5,5,5),R1$(5,5,5),A$(5,5),B$(5,5),C$(5,5),D$(5,5)
410 LLL=0
420 FOR I=1 TO 5: FOR J=1 TO 5: FOR K=1 TO 5
430 R$(I,J,K)=""
440 NEXT K: NEXT J: NEXT I
450 FOR I=2 TO 4:FOR J=2 TO 4
460 R$(1,I,J)="R":R$(I,1,J)="W":R$(I,J,1)="G"
470 R$(5,I,J)="O":R$(I,5,J)="B":R$(I,J,5)="Y"
480 NEXT J: NEXT I
490 REM
500 REM MIX RUBIK'S CUB
510 REM
520 INPUT "INPUT NUMBER OF MIXES";N
530 Z$=""
540 FOR I=1 TO N
550 X%= INT(6*RND(1)):Y%= INT(3*RND(1))
560 IF X%<>0 THEN 580
570 X$="R":GOTO 670
580 IF X%<>1 THEN 600
590 X$="F": GOTO 670
600 IF X%<>2 THEN 620
610 X$="L": GOTO 670
620 IF X%<>3 THEN 640
630 X$="U": GOTO 670
640 IF X%<>4 THEN 660
650 X$="B": GOTO 670
660 X$="D"
670 IF Y%<>0 THEN 690
680 Y$="+": GOTO 720
690 IF Y%<>1 THEN 710
700 Y$="-": GOTO 720
710 Y$="2"
720 Z$=Z$+X$+Y$
730 PRINT Z$
740 NEXT I
750 GOSUB 920
760 GOSUB 2470
770 REM
780 REM CHANGE RUBIK'S CUBE
790 REM
800 LOCATE 1,1
810 PRINT "                         "
820 PRINT "                         "
830 LLL=1
840 LOCATE 1,1
850 INPUT "INPUT MOVE";Z$
860 GOSUB 920
870 GOSUB 2470
880 GOTO 800
890 REM
900 REM PERFORM MOVES
910 REM
920 'FOR I=1 TO 5: FOR J=1 TO 5: FOR K=1 TO 5
930 'R1$(I,J,K)=R$(I,J,K)
940 'NEXT K: NEXT J: NEXT I
950 IF Z$="" THEN RETURN
960 X$=MID$(Z$,1,1)
970 IF X$="S" THEN 2780
980 IF X$="M" THEN 1670
990 REM
1000 REM MOVE FACES
1010 REM
1020 Y$=MID$(Z$,2,1)
1030 IF X$<>"R" THEN 1130
1040 FOR I=1 TO 5:FOR J=1 TO 5
1050 A$(I,J)=R$(I,1,J):B$(I,J)=R$(I,2,J)
1060 NEXT J: NEXT I
1070 GOSUB 2140
1080 IF E=1 THEN 2090
1090 FOR I=1 TO 5: FOR J=1 TO 5
1100 R$(I,1,J)=A$(I,J):R$(I,2,J)=B$(I,J)
1110 NEXT J: NEXT I
1120 GOTO 1620
1130 IF X$<>"F" THEN 1230
1140 FOR I=1 TO 5: FOR J=1 TO 5
1150 A$(I,J)=R$(1,I,J):B$(I,J)=R$(2,I,J)
1160 NEXT J: NEXT I
1170 GOSUB 2220
1180 IF E=1 THEN 2090
1190 FOR I=1 TO 5: FOR J=1 TO 5
1200 R$(1,I,J)=A$(I,J): R$(2,I,J)=B$(I,J)
1210 NEXT J: NEXT I
1220 GOTO 1620
1230 IF X$<>"L" THEN 1330
1240 FOR I=1 TO 5:FOR J=1 TO 5
1250 A$(I,J)=R$(I,5,J):B$(I,J)=R$(I,4,J)
1260 NEXT J: NEXT I
1270 GOSUB 2220
1280 IF E=1 THEN 2090
1290 FOR I=1 TO 5: FOR J=1 TO 5
1300 R$(I,5,J)=A$(I,J): R$(I,4,J)=B$(I,J)
1310 NEXT J: NEXT I
1320 GOTO 1620
1330 IF X$<>"B" THEN 1430
1340 FOR I=1 TO 5: FOR J=1 TO 5
1350 A$(I,J)=R$(5,I,J): B$(I,J)=R$(4,I,J)
1360 NEXT J: NEXT I
1370 GOSUB 2140
1380 IF E=1 THEN 2090
1390 FOR I=1 TO 5: FOR J=1 TO 5
1400 R$(5,I,J)=A$(I,J): R$(4,I,J)=B$(I,J)
1410 NEXT J: NEXT I
1420 GOTO 1620
1430 IF X$<>"U" THEN 1530
1440 FOR I=1 TO 5: FOR J=1 TO 5
1450 A$(I,J)=R$(I,J,5): B$(I,J)=R$(I,J,4)
1460 NEXT J: NEXT I
1470 GOSUB 2140
1480 IF E=1 THEN 2090
1490 FOR I=1 TO 5: FOR J=1 TO 5
1500 R$(I,J,5)=A$(I,J): R$(I,J,4)=B$(I,J)
1510 NEXT J: NEXT I
1520 GOTO 1620
1530 IF X$<>"D" THEN 2090
1540 FOR I=1 TO 5: FOR J=1 TO 5
1550 A$(I,J)=R$(I,J,1):B$(I,J)=R$(I,J,2)
1560 NEXT J: NEXT I
1570 GOSUB 2220
1580 IF E=1 THEN 2090
1590 FOR I=1 TO 5: FOR J=1 TO 5
1600 R$(I,J,1)=A$(I,J):R$(I,J,2)=B$(I,J)
1610 NEXT J: NEXT I
1620 Z$=MID$(Z$,3)
1630 GOTO 950
1640 REM
1650 REM CHANGE VIEWING CORNERS
1660 REM
1670 X$=MID$(Z$,2,1):Y$=MID$(Z$,3,1)
1680 S$=MID$(Z$,4,1)
1690 IF S$<>"1" AND S$<>"2" AND S$<>"3" THEN 2090
1700 N=VAL(S$)
1710 IF X$<>"F" THEN 1960
1720 IF Y$<>"R" THEN 1840
1730 Z$=MID$(Z$,5)
1740 FOR K=1 TO N
1750 Z$="U-D+"+"Z$
1760 FOR I=1 TO 5: FOR J=1 TO 5
1770 A$(I,J)=R$(I,J,3)
1780 NEXT J: NEXT I
1790 FOR I=1 TO 5: FOR J=1 TO 5
1800 R$(6-J,I,3)=A$(I,J)
1810 NEXT J: NEXT I
1820 NEXT K
1830 GOTO 950
1840 IF Y$<>"U" THEN 2090
1850 Z$=MID$(Z$,5)
1860 FOR K=1 TO N
1870 Z$="R+L-"+Z$
1880 FOR I=1 TO 5: FOR J=1 TO 5
1890 A$(I,J)=R$(I,3,J)
1900 NEXT J: NEXT I
1910 FOR I=1 TO 5: FOR J=1 TO 5
1920 R$(J,3,6-I)=A$(I,J)
1930 NEXT J: NEXT I
1940 NEXT K
1950 GOTO 950
1960 IF X$<>"U" THEN 2090
1970 IF Y$<>"R" THEN 2090
1980 Z$=MID$(Z$,5)
1990 FOR K=1 TO N
2000 Z$="F+B-"+Z$
2010 FOR I=1 TO 5: FOR J=1 TO 5
2020 A$(I,J)=R$(3,I,J)
2030 NEXT J: NEXT I
2040 FOR I=1 TO 5: FOR J=1 TO 5
2050 R$(3,6-J,I)=A$(I,J)
2060 NEXT J: NEXT I
2070 NEXT K
2080 GOTO 950
2090 PRINT "INVALID MOVE, TRY AGAIN. "
2100 'FOR I=1 TO 5: FOR J=1 TO 5: FOR K=1 TO 5
2110 'R$(I,J,K)=R1$(I,J,K)
2120 'NEXT K: NEXT J: NEXT I
2130 RETURN
2140 E=0
2150 IF Y$<>"+" THEN 2170
2160 GOSUB 2370: RETURN
2170 IF Y$<>"-" THEN 2190
2180 GOSUB 2300: RETURN
2190 IF Y$<>"2" THEN 2210
2200 GOSUB 2300: GOSUB 2300: RETURN
2210 E=1: RETURN
2220 E=0
2230 IF Y$<>"+" THEN 2250
2240 GOSUB 2300: RETURN
2250 IF Y$<>"-" THEN 2270
2260 GOSUB 2370: RETURN
2270 IF Y$<>"2" THEN 2290
2280 GOSUB 2300: GOSUB 2300: RETURN
2290 E=1: RETURN
2300 FOR I=1 TO 5: FOR J=1 TO 5
2310 C$(I,J)=A$(I,J): D$(I,J)=B$(I,J)
2320 NEXT J: NEXT I
2330 FOR I=1 TO 5: FOR J=1 TO 5
2340 A$(6-J,I)=C$(I,J):B$(6-J,I)=D$(I,J)
2350 NEXT J: NEXT I
2360 RETURN
2370 FOR I=1 TO 5: FOR J=1 TO 5
2380 C$(I,J)=A$(I,J): D$(I,J)=B$(I,J)
2390 NEXT J: NEXT I
2400 FOR I=1 TO 5: FOR J=1 TO 5
2410 A$(J,6-I)=C$(I,J): B$(J,6-I)=D$(I,J)
2420 NEXT J: NEXT I
2430 RETURN
2440 REM
2450 REM PRINT RUBIK'S CUBE
2460 REM
2470 RESTORE 330
2480 FOR K=1 TO 5 STEP 4
2490 FOR I=2 TO 4: FOR J=2 TO 4
2500 READ POSA%,POSB%
2510 IF R$(I,J,K)="R" THEN PUT (POSA%,POSB%),RA% ,PSET
2520 IF R$(I,J,K)="Y" THEN PUT (POSA%,POSB%),YA% ,PSET
2530 IF R$(I,J,K)="G" THEN PUT (POSA%,POSB%),GA% ,PSET
2540 IF R$(I,J,K)="B" THEN PUT (POSA%,POSB%),BA% ,PSET
2550 IF R$(I,J,K)="W" THEN PUT (POSA%,POSB%),WA% ,PSET
2560 IF R$(I,J,K)="O" THEN PUT (POSA%,POSB%),OA% ,PSET
2570 NEXT J: NEXT I
2580 FOR I=2 TO 4: FOR J=2 TO 4
2590 READ POSA%,POSB%
2600 IF R$(K,I,J)="R" THEN PUT (POSA%,POSB%),RA% ,PSET
2610 IF R$(K,I,J)="Y" THEN PUT (POSA%,POSB%),YA% ,PSET
2620 IF R$(K,I,J)="G" THEN PUT (POSA%,POSB%),GA% ,PSET
2630 IF R$(K,I,J)="B" THEN PUT (POSA%,POSB%),BA% ,PSET
2640 IF R$(K,I,J)="W" THEN PUT (POSA%,POSB%),WA% ,PSET
2650 IF R$(K,I,J)="O" THEN PUT (POSA%,POSB%),OA% ,PSET
2660 NEXT J: NEXT I
2670 FOR I=2 TO 4: FOR J=2 TO 4
2680 READ POSA%,POSB%
2690 IF R$(I,K,J)="R" THEN PUT (POSA%,POSB%),RA% ,PSET
2700 IF R$(I,K,J)="Y" THEN PUT (POSA%,POSB%),YA% ,PSET
2710 IF R$(I,K,J)="G" THEN PUT (POSA%,POSB%),GA% ,PSET
2720 IF R$(I,K,J)="B" THEN PUT (POSA%,POSB%),BA% ,PSET
2730 IF R$(I,K,J)="W" THEN PUT (POSA%,POSB%),WA% ,PSET
2740 IF R$(I,K,J)="O" THEN PUT (POSA%,POSB%),OA%  ,PSET
2750 NEXT J: NEXT I
2760 NEXT K
2770 RETURN
2780 PRINT "THANK YOU FOR PLAYING. "
2790 END
```
{% endraw %}

## SOUNDEMO.BAS

{% raw %}
```bas
10 ' Program: SOUNDEMO.BAS (Sound Demonstration Program)
20 ' Contributed to PC-SIG on 5 November, 1983
30 ' Written by John Walkenbach
40 '            1425 NW Highland
50 '            Corvallis, OR 97330
60 '
70 COLOR 7,0
80 KEY OFF
90 GOSUB 1280 'set up function keys
100 CLS
110 R1=6:C1=1:R2=23:C2=80:CLERE$="off":GOSUB 1380
120 R1=1:C1=1:R2=5:C2=80
130 GOSUB 1380
140 LOCATE 3,14:T$= "S O U N D   D E M O N S T R A T I O N   P R O G R A M"
150 FOR I=1 TO LEN(T$)
160 PRINT MID$(T$,I,1);
170 IF MID$(T$,I,1) <> " " THEN SOUND 300,0.002
180 SOUND 100,0
190 FOR J=1 TO 30:NEXT
200 NEXT I
210 R1=10:C1=23:R2=19:C2=55:CLERE$="off":GOSUB 1380
220 LOCATE 11,28:PRINT"f1  ---";CHR$(16);" Random noise.":SOUND 600,0.002
230 LOCATE 12,28:PRINT"f2  ---";CHR$(16);" Parakeet.":SOUND 700,0.002
240 LOCATE 13,28:PRINT"f3  ---";CHR$(16);" Siren.":SOUND 800,0.002
250 LOCATE 14,28:PRINT"f4  ---";CHR$(16);" Falling.":SOUND 900,0.002
260 LOCATE 15,28:PRINT"f5  ---";CHR$(16);" Telephone.":SOUND 1000,0.002
270 LOCATE 16,28:PRINT"f6  ---";CHR$(16);" Spaceship.":SOUND 1100,0.002
280 LOCATE 17,28:PRINT"f7  ---";CHR$(16);" Clock.":SOUND 1200,0.002
290 LOCATE 18,28:PRINT"f8  ---";CHR$(16);" Exit the program." :SOUND 1300,0.002
300 LOCATE 25,1:COLOR 0,7:PRINT"<Press a function key...>";:COLOR 7
310 SOUND 5000,0.5
320 GOTO 320
330 END
340 GOSUB 1690:LOCATE 11,37:COLOR 0,7:PRINT"Random noise.";:COLOR 7,0
350 GOSUB 1700
360 RANDOMIZE TIMER
370 FOR I=1 TO 90
380 IF INT(RND*2)=1 THEN 400
390 SOUND 100,0:SOUND RND*8000+440,100
400 SOUND 100,0:SOUND RND*3000+50,100
410 FOR K=1 TO INT(RND*100)+1:NEXT
420 NEXT I
430 SOUND 100,0
440 LOCATE 11,37:PRINT"Random noise.";
450 GOSUB 1710
460 GOSUB 1280:RETURN
470 GOSUB 1690:LOCATE 12,37:COLOR 0,7:PRINT"Parakeet.";:COLOR 7,0
480 GOSUB 1700
490 FOR J=1 TO 25
500 IF J=5 OR J=15 THEN FOR T=1 TO 200:NEXT
510 FOR I=9000 TO 3500 STEP -250
520 SOUND I,0.125625
530 NEXT I:NEXT J
540 LOCATE 12,37:PRINT "Parakeet.";
550 GOSUB 1710
560 GOSUB 1280:RETURN
570 GOSUB 1690:LOCATE 13,37:COLOR 0,7:PRINT"Siren.";:COLOR 7,0
580 GOSUB 1700
590 FOR T=1 TO 2
600 FOR L=650 TO -650 STEP -4
610 SOUND 780-ABS(L),0.3
620 L=L-2/650
630 NEXT L
640 NEXT T
650 LOCATE 13,37:PRINT"Siren.";
660 GOSUB 1710
670 GOSUB 1280:RETURN
680 GOSUB 1690:LOCATE 14,37:COLOR 0,7:PRINT"Falling.";:COLOR 7,0
690 GOSUB 1700
700 FOR K=4500 TO 400  STEP -20
710 SOUND K,K/4000
720 NEXT K
730 LOCATE 14,37:PRINT"Falling.";
740 GOSUB 1710
750 GOSUB 1280:RETURN
760 GOSUB 1690:LOCATE 15,37:COLOR 0,7:PRINT"Telephone.";:COLOR 7,0
770 GOSUB 1700
780 FOR R=1 TO 4
790 IF R=2 THEN LOCATE 25,50:PRINT"Answer the damn phone!";
800 FOR J=1 TO 80
810 IF J MOD 2 = 0 THEN SOUND 500,1
820 IF J MOD 2 <> 0 THEN SOUND 1500,1
830 FOR I=1 TO 10:NEXT
840 SOUND 100,0
850 IF R=4 AND J=40 THEN GOTO 890
860 NEXT J
870 FOR K=1 TO 2000:NEXT
880 NEXT R
890 LOCATE 25,50:PRINT"Hello...who is it??   ";
900 LOCATE 15,37:PRINT "Telephone.";
910 GOSUB 1710
920 GOSUB 1280
930 FOR T=1 TO 500:NEXT T:LOCATE 25,50:PRINT SPC(29);
940 RETURN
950 GOSUB 1690:LOCATE 16,37:COLOR 0,7:PRINT"Spaceship.";:COLOR 7,0
960 GOSUB 1700
970 FOR A=100 TO 3000 STEP 12
980 B=A+20
990 FOR L=A  TO B STEP 2
1000 SOUND L,0.002
1010 NEXT L
1020 NEXT A
1030 FOR I=1 TO 8
1040 FOR A=4000 TO 50  STEP -100
1050 SOUND A,0.002
1060 NEXT A
1070 NEXT I
1080 SOUND 100,0
1090 LOCATE 16,37:PRINT "Spaceship.";
1100 GOSUB 1710
1110 GOSUB 1280:RETURN
1120 GOSUB 1690:LOCATE 17,37:COLOR 0,7:PRINT"Clock.";:COLOR 7,0
1130 GOSUB 1700
1140 FOR TICK =1 TO 12
1150 FOR J=1 TO 400:NEXT J
1160 LOCATE 25,72:PRINT TIME$;
1170 SOUND 2000,0.5
1180 FOR J=1 TO 400:NEXT J
1190 SOUND 1500,0.5
1200 NEXT TICK
1210 SOUND 100,1000
1220 LOCATE 25,72:PRINT "WAKE UP!";
1230 FOR T=1 TO 4000:NEXT:SOUND 100,0:LOCATE 25,72:PRINT"        ";
1240 LOCATE 17,37:PRINT "Clock.";
1250 GOSUB 1710
1260 GOSUB 1280:RETURN
1270 COLOR 7,0:CLS:KEY ON:END
1280 FOR I=1 TO 8:KEY (I) ON:NEXT I
1290 ON KEY (1) GOSUB 340
1300 ON KEY (2) GOSUB 470
1310 ON KEY (3) GOSUB 570
1320 ON KEY (4) GOSUB 680
1330 ON KEY (5) GOSUB 760
1340 ON KEY (6) GOSUB 950
1350 ON KEY (7) GOSUB 1120
1360 ON KEY (8) GOSUB 1270
1370 RETURN
1380 'this subroutine draws a box on the screen.  Input is two sets of
1390 'coordinates: R1,C1 and R2,C2 (for row and column of upper-left
1400 'corner and lower-right corner, respectively).
1410 IF R1> 0 AND R1 < 25 AND C1 >0 AND C1<81 THEN 1420    ELSE 1430
1420 IF R1<R2 AND C1<C2 AND R2>0 AND R2 <25 AND C2>0 AND C2<81  THEN 1450
1430 PRINT"error in input parameters.":RETURN
1440 'upper left corner
1450 IF CLERE$<>"off" THEN CLS
1460 LOCATE R1,C1
1470 PRINT CHR$(201);
1480 ' top line
1490 FOR I=1 TO(C2-C1-1):PRINT CHR$(205);:NEXT
1500 'upper right corner
1510 LOCATE R1,C2:PRINT CHR$(187);
1520 'right side
1530 FOR K=1 TO (R2-R1-1)
1540 LOCATE R1+K,C2
1550 PRINT CHR$(186);
1560 NEXT K
1570 'lower right corner
1580 LOCATE R2,C2:PRINT CHR$(188);
1590 'left side
1600 FOR K=1 TO (R2-R1-1)
1610 LOCATE R1+K,C1
1620 PRINT CHR$(186);
1630 NEXT K
1640 'lower left corner
1650 LOCATE R2,C1:PRINT CHR$(200);
1660 'bottom line
1670 FOR I=1 TO (C2-C1-1):PRINT CHR$(205);:NEXT
1680 RETURN
1690 FOR J=1 TO 10: KEY(J) OFF:NEXT:RETURN
1700 LOCATE 25,1:PRINT"                           ";:RETURN
1710 LOCATE 25,1:COLOR 0,7:PRINT"<Press a function key...>";:COLOR 7,0:RETURN
```
{% endraw %}

## SQUARE.BAS

{% raw %}
```bas
1 '                        T h e   S q u a r e  (tm)
2 '                        -------------------
3 '
4 '    Copyright (c) 1983 by:   David N. Smith,
5 '                             44 Ole Musket Lane,
6 '                             Danbury, Ct. 06810
7 '                             CompuServe: 73145,153
8 '
9 '    The Square is distributed following the "freeware" concept:
10 '
11 '   1) you may copy it freely for personal use but not for profit, nor as
12 '      a part of a package which is sold.  Give it away and encourage
13 '      others to do so also.
14 '
15 '   2) contributions of $20 can be made if you find the program
16 '      entertaining.
17 '
18 '   If you send a postage paid, self addressed, diskette mailer to the
19 '   address above, the author will send a diskette with the program and
20 '   documentation.
21 '
22 '   If you send a postage paid, self addressed, diskette mailer with your
23 '   contribution of $20, the author will send a COMPILED version of The
24 '   Square.  The compiled version is significantly faster.
25 '
26 '   See accompanying file SQUARE.SUM for more information.
27 '
30 CLEAR ,,2048
31 DEFINT A-Z
32 '
33 ' constants
34 SCORE=0   '  moves since scrambled
35 LEVEL=0   ' level of difficulty (0,1)
36 BLOBS$=CHR$(219)+CHR$(219)+CHR$(219)
37 CUROFF=0: CURON=1
39 SCRAMBLED=0 ' was sqaure scrambled by program?
40 RUNNING=0   ' have initialized
41 DIR=1       ' direction of move (+1 or -1)
43 REDISPLAY=1' redisplay sqaure? (1=yes, 0=no)
44 '
45 X$=TIME$+"":  X=VAL(MID$(X$,7,2)): X=X*100+VAL(MID$(X$,4,2))
48 RANDOMIZE X
49 '
50 DARROW$=CHR$(25)
51 DARROW2$=DARROW$+DARROW$
52 DARROW3$=DARROW2$+DARROW$
53 RARROW$=CHR$(26): RARROW3$=RARROW$+RARROW$+RARROW$
54 '
56 KEY OFF: CLS
59 DEF SEG=0
60 IF (PEEK(&H410) AND &H30) <> &H30 THEN MONO=0 ELSE MONO=1
62 IF MONO=0 THEN SCREEN 0,1,0,0: COLOR  7,0,0: WIDTH 40: CLS
65 IF MONO=1 THEN COLOR  7,0
100 '
101 ' *******************
102 '
108 DIM SQ(36) ' sq(6,6)
120 DIM CH$(4)
122 CH$(1)=CHR$(176): CH$(2)=CHR$(206): CH$(3)=CHR$(221): CH$(4)=CHR$(219)
130 MAXNMOVES=100:  NMOVES=0:  DIM MOVES(100)
136 DIM ICOLOR(4): ICOLOR(1)=1: ICOLOR(2)=2: ICOLOR(3)=4: ICOLOR(4)=15
138 '
139 'saved status
140 DIM SAVESQ(36), STATUS(10)
142 STATUSSAVED=0
197 '
290 ' **********************************
295 '                 initialization
300 RUNNING=0
305 GOSUB 6000   ' initialize the square
310 GOSUB 5000   ' display logo
320 GOSUB 6500   ' ask level of difficulty
325 REDISPLAY=1
330 GOSUB 1000   ' display square
360 GOSUB 4100   ' scramble the square
370 RUNNING=1
380 REDISPLAY=0
490 '
495 ' **********************************
499 '                   main loop
500 WHILE  1=1
510    GOSUB 1000  ' display square
520    GOSUB 8000  ' see if it's in solution
530    GOSUB 3000  ' read a command
540    GOSUB 2000  ' perform operation
590 WEND           ' loop
660 STOP
990 ' **********************************
998 '
999 ' display square
1000 IF REDISPLAY=0 THEN RETURN
1005 IF MONO=0 THEN GOTO 1500
1010 REDISPLAY=0
1015 CLS
1017 LOCATE 1,70: IF LEVEL=0 THEN PRINT"Hard" ELSE PRINT "Harder"
1018 COLOR 7:  S$=SPACE$(36)
1050 FOR J=1 TO 6
1065    IF LEVEL=1 THEN LOCATE J*3-2,15: PRINT STR$(J)+" "+RARROW$
1070    FOR I=1 TO 6
1080       X$=CH$(SQ(J+I*6-6)): MARK=MARK+1
1100       MID$(S$, (I*6)-5,6)=X$+X$+X$+X$+X$+" "
1120    NEXT I
1135    LOCATE J*3-1, 21: IF LEVEL=0 THEN PRINT S$+STR$(J)+RARROW$ ELSE PRINT S$
1145    LOCATE J*3-0, 21: PRINT S$
1180 NEXT J
1190 IF LEVEL=1 THEN LOCATE 19,16: PRINT "1 "+RARROW$
1200 LOCATE 20, 18
1210 IF LEVEL=0  THEN PRINT DARROW3$ +"  A     B     C     D     E     F "+DARROW3$
1215 IF LEVEL<>0 THEN PRINT DARROW2$+"A     B     C     D     E     F     A "+DARROW2$
1220 RETURN
1499 ' COLOR DISPLAY    ----------------------
1500 CLS
1502 LOCATE 1,32: IF LEVEL=0 THEN PRINT"Hard" ELSE PRINT "Harder"
1505 COLOR 15,0: REDISPLAY=0
1550 FOR Y=1 TO 6
1570    FOR X=1 TO 6
1575       IC=SQ(Y+X*6-6): COLOR ICOLOR(IC),0,0
1590       LOCATE Y*3-1,10+X*4-4: PRINT BLOBS$
1610       LOCATE Y*3,  10+X*4-4: PRINT BLOBS$
1630    NEXT X
1640    COLOR  7,0,0
1650    IF LEVEL=0 THEN LOCATE Y*3,  5: PRINT STR$(Y) +" "+ RARROW$    ELSE LOCATE Y*3-2,4: PRINT STR$(Y) +" "+ RARROW$
1680 NEXT Y
1690 IF LEVEL=1 THEN LOCATE 19,5 : PRINT "1 "+RARROW$
1700 LOCATE 20, 18
1710 IF LEVEL=0  THEN PRINT "     "+DARROW3$ +"  A   B   C   D   E   F  "+DARROW3$
1720 IF LEVEL<>0 THEN PRINT"    "+ DARROW3$+" A   B   C   D   E   F   A "+DARROW3$
1730 RETURN
1990 ' ****************************
1996 ' perform operation: +A, -3, -c, d, 6, ...
1997 ' inputs: OP$
1998 '
2000 IF OP$>="A" AND OP$<="Z" THEN OP$=CHR$( ASC(OP$)+ASC("a")-ASC("A") )
2005 IF OP$="l" OR OP$="q" OR OP$="r" OR OP$="s" THEN GOSUB 2850 ' doit or not?
2010 IF OP$="" THEN RETURN
2015 IF OP$="l" THEN GOTO 320
2018 IF OP$="m" THEN GOSUB 10000: RETURN
2020 IF OP$="q" THEN GOTO 2900
2025 IF OP$="r" THEN REDISPLAY=1: GOSUB 6000: GOTO 2600
2030 IF OP$="s" THEN REDISPLAY=1: GOSUB 1000: GOSUB 4100: GOTO 2600
2040 IF OP$="u" THEN GOTO 2700
2100 IF OP$="?" THEN  GOSUB 5500: REDISPLAY=1: RETURN
2110 IF OP$="/" THEN  GOSUB 5500: REDISPLAY=1: RETURN
2120 IF OP$="+" THEN DIR=+1: GOTO 2600
2130 IF OP$="!" THEN REDISPLAY=1: IF LEVEL=1 THEN LEVEL=0: RETURN ELSE LEVEL=1: RETURN
2140 IF OP$="-" THEN DIR=-1: GOTO 2600
2150 IF OP$=" " THEN REDISPLAY=1: RETURN
2220 ' must be a row or column slide
2240 IF (OP$<"1" OR OP$>"6") AND (OP$<"a" OR  OP$>"f") THEN BEEP: GOTO 2600
2260 IF NMOVES=MAXNMOVES THEN FOR I=1 TO MAXNMOVES/2: MOVES(I)=MOVES(I+MAXNMOVES/2): NEXT I: NMOVES=MAXNMOVES/2
2270 NMOVES=NMOVES+1
2280 MOVES(NMOVES)=ASC(OP$)*DIR
2300 SCORE=SCORE+1
2310 REDISPLAY=1
2320 GOSUB 7000
2330 DIR=1
2599 ' see if another character has been typed
2600 FOR I=1 TO 10
2610    OP$=INKEY$: IF OP$ <> ""  GOTO 2000
2620 NEXT I
2630 RETURN
2699 '   undo a move (and unscore it too)
2700 IF NMOVES=0 THEN BEEP: GOTO 2600
2710 IF NMOVES > MAXNMOVES THEN BEEP: GOTO 2600
2720 I=MOVES(NMOVES): IF I<0 THEN DIR=1: I=-I ELSE DIR=-1
2740 OP$=CHR$(I): REDISPLAY=1: GOSUB 7000: NMOVES=NMOVES-1: SCORE=SCORE-1: DIR=1
2800 GOTO 2600
2849 ' ask before doing something drastic
2850 IF SCRAMBLED=0 THEN RETURN
2855 IF MONO=1 THEN LOCATE 22,1 ELSE LOCATE 23,1
2860 PRINT " "+OP$+" resets the game; type `y' or 'n'   "
2870 X$=INKEY$: IF X$="" THEN GOTO 2870
2880 IF X$<>"y" AND X$<>"Y" AND X$<>"n" AND X$<>"N" THEN GOTO 2850
2885 IF X$="n" OR X$="N" THEN OP$=""
2890 RETURN
2898 '
2899 ' stopping
2900 CLS: LOCATE 12,15: IF MONO=0 THEN COLOR  12+16  ELSE COLOR 15+16
2920 PRINT "G O O D B Y E"
2925 IF MONO=0 THEN COLOR  12     ELSE COLOR 15
2930 LOCATE 15,10: PRINT "Thank you for playing"
2945 IF MONO=0 THEN COLOR  15     ELSE COLOR 7
2950 LOCATE 22,1: KEY ON
2960 STOP
2990 ' *********************************
2997 '
2998 '  enter a command
2999 '
3000 IF MONO=1 THEN LOCATE 22,1: X$=SPACE$(20)   ELSE LOCATE 23,1: X$="  "
3010 PRINT "  Enter command (or ?)"+X$+"  ("+MID$(STR$(SCORE),2)+" moves)    "
3020 I=1: OP$=""
3030 WHILE OP$=""
3035    OP$=INKEY$: I=I+1: IF I>(300-NMOVES) THEN GOTO 3052
3050 WEND
3052 IF LEN(OP$)>=2 THEN STOP
3055 IF OP$<>"" THEN RETURN
3060 IF RANDOMLY=0 OR SCRAMBLED=0 THEN GOTO 3020
3065 I=INT(12*RND)+1: IF I<=6 THEN GOSUB 7800 ELSE J=I-6: GOSUB 7600
3070 FOR II=1 TO 2: PLAY "ml t255 l64 n10n12n10n12n10n12n10n12n10n12n10": NEXT
3075 GOTO 3020
3990 ' *********************************
3996 '
3998 '       scramble
3999 '
4000 LOCATE 22,1: PRINT "scramble the square now? ('y' or 'n')"
4020 X$=INKEY$: IF X$="" THEN GOTO 4020
4025 IF X$="?" THEN GOSUB 5500: CLS: GOTO 4000
4030 LOCATE 22,1: PRINT "                                     "
4050 IF X$<>"y" AND X$<>"n" AND X$<>"Y" AND X$<>"n" THEN GOTO 4000
4060 IF X$="n" OR X$<>"N" THEN RETURN
4099 ' entry point here (scramble without prompting)
4100 IF MONO=1 THEN LOCATE 22,1 ELSE LOCATE 23,1
4105 PRINT " Square being scrambled ...          "
4107 K=30
4110 FOR K=1 TO K
4120    I=INT(12*RND)+1: SOUND 100,.2: DIR=-1
4125    IF I<=6 THEN GOSUB 7800: IF LEVEL=1 THEN I=I+1: IF I>6 THEN I=1: GOSUB 7800 ELSE GOSUB 7800
4130    IF I>6  THEN J=I-6: GOSUB 7600: IF LEVEL=1 THEN J=J+1: IF J>6 THEN J=1: GOSUB 7600 ELSE GOSUB 7600
4150 NEXT K
4160 'REDISPLAY=1
4170 SCORE=0: SCRAMBLED=1: NMOVES=0: DIR=1
4195 PLAY "ml t255 l64 ccddeeffggaabb"
4200 RETURN
4992 ' *********************************
4993 ' *********************************
4996 '    logo
5000 IF MONO=0 THEN 5200
5002 CLS
5005 LOCATE 3,1
5016 PRINT " *****  *   *  *****"
5018 PRINT "   *    *   *  *              IBM Personal Computer"
5020 PRINT "   *    *****  ***                Recreational"
5022 PRINT "   *    *   *  *                    Program"
5024 PRINT "   *    *   *  *****              Version 1.0c"
5028 LOCATE 10,1
5030 PRINT "    *****    *****    *     *     ***    ******    ******* (tm)"
5031 PRINT "   *     *  *     *   *     *    *   *   *     *   *"
5032 PRINT "   *        *     *   *     *    *   *   *     *   *"
5033 PRINT "    *****   *     *   *     *   *     *  ******    ****"
5034 PRINT "         *  *     *   *     *   *******  *   *     *"
5035 PRINT "   *     *  *     *   *     *  *       * *    *    *"
5036 PRINT "    *****    ********  *****   *       * *     *   *******"
5038 LOCATE 18,1
5040 PRINT "            Copyright (c) 1983 by David N. Smith"
5050 LOCATE 21,1
5055 PRINT "  HIT SPACE BAR TO CONTINUE"
5057 PRINT "  (Press M to change display type)"
5060 PRINT "  Hit ? for instructions at ANY time."
5065 X$=INKEY$ :  IF X$="" THEN GOTO 5065
5068 IF X$="?" THEN GOSUB 5500
5070 IF X$="m" OR X$="M" THEN GOSUB 10000: GOTO 5000
5075 IF X$="r" OR X$="R" THEN RANDOMLY=1: GOTO 5065
5090 RETURN
5199 'color display (40 column)
5200 CLS: LOCATE 5,5: PRINT "T H E"
5225 LOCATE 9,5: PRINT "S Q U A R E  (tm)"
5238 LOCATE 14,5: PRINT "Copyright (c) 1983 by David N. Smith
5240 LOCATE 15,5: PRINT "Version 1.0c"
5250 LOCATE 18,1: PRINT "  HIT SPACE BAR TO CONTINUE"
5260 PRINT "  (Press M to change display device)
5262 PRINT "  Hit ? for instructions at ANY time."
5265 X$=INKEY$ :  IF X$="" THEN GOTO 5265
5267 COLOR  7,0,0
5268 IF X$="?" THEN GOSUB 5500
5270 IF X$="m" OR X$="M" THEN GOSUB 10000: GOTO 5200
5290 RETURN
5492 ' *********************************
5495 '
5496 '    help
5500 CLS:  OP$="": REDISPLAY=1
5510 IF MONO=0 THEN INDENT$=" " ELSE INDENT$=SPACE$(20)
5902 PRINT INDENT$+"     C O M M A N D   S U M M A R Y"
5903 PRINT " "
5904 PRINT INDENT$+"a to f  Slide corresponding column(s)"
5906 PRINT INDENT$+"1 to 6  Slide corresponding row(s)"
5907 PRINT " "
5908 PRINT INDENT$+"-       Reverse direction of next
5909 PRINT INDENT$+"         row or column slide command."
5910 PRINT INDENT$+"        Examples:  -b  -6  -f  -1"
5911 PRINT " "
5912 PRINT INDENT$+"l       Reset level of difficulty."
5913 PRINT INDENT$+"m       To/From Monochrome Display
5914 PRINT INDENT$+"q       Quit; Don't play any longer."
5915 PRINT INDENT$+"r       Reset; put into solution."
5916 PRINT INDENT$+"s       Scramble again (differently)"
5917 PRINT INDENT$+"u       Undo the last move."
5919 PRINT INDENT$+"/ or ?  Display command summary"
5920 PRINT " "
5924 PRINT INDENT$+"Any other key causes a beep and is"
5926 PRINT INDENT$+"otherwise ignored."
5928 PRINT INDENT$
5929 IF MONO=0 THEN COLOR 12 ELSE COLOR 15
5932 PRINT " Hit any key to continue."
5933 COLOR 7
5934 OP$=INKEY$: IF OP$="" THEN GOTO 5934
5940 CLS
5980 RETURN
5990 ' ********************
5995 '
5997 ' initialize the square
5998 '
6000 FOR I=1 TO 3: FOR J=1 TO 3: SQ(I+J*6-6)=1: NEXT J: NEXT I
6050 FOR I=4 TO 6: FOR J=1 TO 3: SQ(I+J*6-6)=2: NEXT J: NEXT I
6060 FOR I=1 TO 3: FOR J=4 TO 6: SQ(I+J*6-6)=3: NEXT J: NEXT I
6070 FOR I=4 TO 6: FOR J=4 TO 6: SQ(I+J*6-6)=4: NEXT J: NEXT I
6075 SCORE=0: SCRAMBLED=0: NMOVES=0
6100 RETURN
6490 ' ******************************
6495 ' ask level of difficulty
6500 CLS
6505 LOCATE  8,10: PRINT "  Type a space for a Hard puzzle"
6515 LOCATE 12,10: PRINT "  Type an 'r' for a race against time"
6518 LOCATE 16,10: PRINT "  Hit any other key for a Harder puzzle"
6523 LOCATE 20,10: PRINT "  Hit ? for instructions at ANY time."
6530 X$=INKEY$: IF X$="" THEN GOTO 6530
6535 GOSUB 6000
6540 CLS: LEVEL=1
6555 IF X$="m" OR X$="M" THEN GOSUB 10000: GOTO 6500
6557 IF X$="r" OR X$="R" THEN RANDOMLY=1: LEVEL=0: RETURN
6560 IF X$=" " THEN LEVEL=0
6565 IF X$="?" THEN GOSUB 5500: GOTO 6500
6570 RETURN
6990 '*****************************
6995 '
6996 ' process command to rotate a column or row
6997 '
7000 IF OP$ >= "1" AND OP$ <= "6"  THEN GOTO 7100  ' row move
7010 IF OP$ <  "a" OR  OP$ >  "f"  THEN RETURN     ' error
7050 ' rotate a row
7060 J=ASC(OP$)-ASC("a")+1: GOSUB 7600  ' rotate row 'j'
7075 J=J-1: IF J=0 THEN J=6
7080 IF LEVEL=1 THEN GOSUB 7600 ' rotate row 'j'
7090 RETURN
7100 ' rotate a column
7110 I=ASC(OP$)-ASC("1")+1: GOSUB 7800  ' rotate row 'j'
7130 I=I-1: IF I=0 THEN I=6
7140 IF LEVEL=1 THEN GOSUB 7800 ' rotate column j
7150 RETURN
7590 ' ******************************
7595 ' rotate a row (7600)    or column (7800)
7600 IF DIR=-1 THEN X=SQ(1+J*6-6): FOR I=2 TO 6: SQ(I-1+J*6-6)=SQ(I+J*6-6): NEXT I: SQ(6+J*6-6)=X
7610 IF DIR=1  THEN X=SQ(6+J*6-6): FOR I=1 TO 5: SQ(7-I+J*6-6)=SQ(6-I+J*6-6): NEXT I: SQ(1+J*6-6)=X
7620 ICOL=0: JROW=J: GOSUB 9000 ' redisplay it
7650 RETURN
7799 ' rotate a column
7800 IF DIR=-1 THEN X=SQ(I+1*6-6): FOR J=2 TO 6: SQ(I+(J-1)*6-6)=SQ(I+J*6-6): NEXT J: SQ(I+6*6-6)=X
7810 IF DIR=1  THEN X=SQ(I+6*6-6): FOR J=1 TO 5: SQ(I+(7-J)*6-6)=SQ(I+(6-J)*6-6): NEXT J: SQ(I+1*6-6)=X
7820 JROW=0: ICOL=I: GOSUB 9000 ' redisplay it
7890 RETURN
7997 '****
7999 ' see if square has been solved and make noise if so.
8000 IF SCRAMBLED=0 THEN RETURN
8010 II=SQ(1+1*6-6)
8020 FOR I=1 TO 3: FOR J=1 TO 3: IF II<>SQ(I+J*6-6) THEN RETURN: ELSE: NEXT J: NEXT I
8030 II=SQ(4+1*6-6)
8040 FOR I=4 TO 6: FOR J=1 TO 3: IF II<>SQ(I+J*6-6) THEN RETURN: ELSE: NEXT J: NEXT I
8050 II=SQ(1+4*6-6)
8060 FOR I=1 TO 3: FOR J=4 TO 6: IF II<>SQ(I+J*6-6) THEN RETURN: ELSE: NEXT J: NEXT I
8070 II=SQ(4+4*6-6)
8080 FOR I=4 TO 6: FOR J=4 TO 6: IF II<>SQ(I+J*6-6) THEN RETURN: ELSE: NEXT J: NEXT I
8088 IF MONO=0 THEN COLOR 4
8090 PRINT "            Y O U   W I N ! ! !      "
8100 FOR J=1 TO 10
8105    FOR I=600 TO 1100 STEP 100:  SOUND I,.15: SOUND I-150,.15: NEXT I
8125    FOR I=1200 TO 600 STEP -200: SOUND I,.15: SOUND I-150,.15: NEXT I
8145 NEXT J
8150 SOUND 50,0: CLS
8235 IF MONO=1 THEN COLOR 15+16  ELSE COLOR  3+16        ' blinking display
8238 IF MONO=0 THEN INDENT$="        " ELSE INDENT$=SPACE$(27)
8240 PRINT INDENT$+"Y   Y    OO    U  U"
8241 PRINT INDENT$+" Y Y    O  O   U  U"
8242 PRINT INDENT$+"  Y     O  O   U  U"
8243 PRINT INDENT$+"  Y     O  O   U  U"
8244 PRINT INDENT$+"  Y      OO     UU"
8245 PRINT ""
8246 PRINT ""
8247 PRINT INDENT$+"W   W  III  N   N   !!!"
8248 PRINT INDENT$+"W   W   I   NN  N   !!!"
8249 PRINT INDENT$+"W   W   I   N N N   !!!"
8250 PRINT INDENT$+"W W W   I   N  NN"
8251 PRINT INDENT$+" W W   III  N   N    !"
8252 PRINT ""
8253 PRINT ""
8255 COLOR 7
8260 LOCATE 16,1
8265 PRINT "Hit space bar to see square"
8270 PRINT "Hit:   ? for help"
8275 PRINT "       s to scramble square again"
8280 PRINT "       q to quit"
8290 SCRAMBLED=0
8300 RETURN
8995 '****************************
8997 ' update one column or rwo
9000 'IF RUNNING=0  THEN RETURN
9040 REDISPLAY=0: IF MONO=0 THEN GOTO 9200
9100 COLOR  7,0:  IF ICOL>0 THEN GOTO 9150
9103 ' update mono column
9105 FOR I=1 TO 6
9110    X$=CH$(SQ(I+JROW*6-6)): X$=X$+X$+X$+X$+X$
9120    LOCATE I*3-1, 21+JROW*6-6: PRINT X$
9130    LOCATE I*3-0, 21+JROW*6-6: PRINT X$
9140 NEXT I
9145 RETURN
9150 ' update mono row
9155 FOR J=1 TO 6
9160    X$=CH$(SQ(ICOL+J*6-6)): X$=X$+X$+X$+X$+X$
9170    LOCATE ICOL*3-1, 21+J*6-6: PRINT X$
9180    LOCATE ICOL*3-0, 21+J*6-6: PRINT X$
9190 NEXT J
9195 RETURN
9197 ' ----- mono display -----
9200 ' update color column
9202 IF ICOL>0 THEN GOTO 9255
9205 FOR I=1 TO 6
9210    IC=SQ(I+JROW*6-6): COLOR ICOLOR(IC),0,0
9220    LOCATE I*3-1, 10+JROW*4-4: PRINT BLOBS$
9230    LOCATE I*3-0, 10+JROW*4-4: PRINT BLOBS$
9240 NEXT I
9242 COLOR 15,0
9245 RETURN
9250 ' update color row
9255 FOR J=1 TO 6
9257    IC=SQ(ICOL+J*6-6): COLOR ICOLOR(IC),0,0
9270    LOCATE ICOL*3-1, 10+J*4-4: PRINT BLOBS$
9280    LOCATE ICOL*3-0, 10+J*4-4: PRINT BLOBS$
9290 NEXT J
9292 COLOR 15,0
9295 RETURN
9980 '******************************
9990 ' COLOR MONITOR-MONOCHROME MONITOR SWITCH    EMD 11-81
10000 CLS
10010 PRINT
10020 PRINT"   For Color display press-C"
10030 PRINT"   For Monochrome press   -M"
10040 PRINT"   For no change press any other key."
10050 K$=INKEY$:IF K$="" GOTO 10050
10060 IF K$="C" OR K$="c" THEN GOSUB 10190
10070 IF K$="M" OR K$="m" THEN GOSUB 10110
10080 CLS
10090 REDISPLAY=1
10100 RETURN
10110 '************** switch to monochrome ************
10120 DEF SEG=0: POKE &H410,(PEEK(&H410) OR &H30)
10140 DEF SEG:  LOCATE ,,1,12,13
10155 SCREEN 0: WIDTH 80: COLOR  7,0: MONO=1
10170 RETURN
10180 '**************************
10190 REM switch to color/graphics adapter
10200 DEF SEG=0: POKE &H410,(PEEK(&H410) AND &HCF) OR &H20
10220 DEF SEG: LOCATE ,,1,6,7
10240 SCREEN 0: WIDTH 40: MONO=0
10260 RETURN
```
{% endraw %}

## SQUARE.DOC

{% raw %}
```
           T H E
       S Q U A R E
               Copyright (c) 1983 by:   David N. Smith,
                              44 Ole Musket Lane,
                              Danbury, Ct. 06810
                              CompuServe: 73145,153
       The Square                                                      Page 1
       TABLE OF CONTENTS
       1. DISTRIBUTION OF THE SQUARE..................................  2
      2. THE CHALLENGE OF THE SQUARE.................................  3
      3. YOUR GOAL...................................................  4
      4. PRELIMINARIES...............................................  5
      5. GETTING STARTED.............................................  6
      6. PATTERNS....................................................  8
      7. HINTS.......................................................  9
      8. REFERENCES..................................................  10
        The Square                                                      Page 2
       1. DISTRIBUTION OF THE SQUARE
        The Square is distributed following the "freeware" concept:
      1) you may copy it freely for personal use but not for profit, nor as
     a part of a package which is sold.  Give it away and encourage
     others to do so also.
      2) contributions of $20 can be made if you find the program
     entertaining.
      If you send a postage paid, self addressed, diskette and mailer to the
     address above, the author will send a diskette with the program and
     documentation.
      If you send a postage paid, self addressed, diskette mailer with your
     contribution of $20, the author will send a COMPILED version of The
     Square.  The compiled version is significantly faster.
        1.1. FILES WITH THE SQUARE
       SQUARE.SUM        A summary of The Square.
      SQUARE.BAS        The Square program itself.  It requires BASICA.
      SQUARE.DOC        A longer document on The Square.  It contains
                       more information including some hints.
                       (This is what you are reading now.)
      SQUARE.EXE        A compiled version of The Square which is available
                       to those who contribute $20.  See above.
        The Square                                                      Page 3
       2. THE CHALLENGE OF THE SQUARE
       The Square is a computer based puzzle similar in style to the magic
     cube invented by Erno Rubic<1,3> and puzzles related to it<2>.  The
     cube is a three dimensional object which can be turned in various
     ways.  The Square is a two dimensional object which can be 'turned' in
     a similar manner; with The Square, rows or columns of smaller squares
     are 'slid' up, down, left, or right.  Small squares 'fall off' of one
     end of the row or column and 'reappear' at the other end.
      In 'solution' The Square has four sections of identical smaller
     squares; each has nine small squares in a 3x3 configuration.  When
     scrambled by the program The Square may have any color in any
     position.  The goal is to return The Square to a solution, where each
     set of nine identical colored blocks is together.
      The program is self documenting; you can read how to load it in this
     manual, load it, and start trying to solve it.  However, a review of
     the contents of this manual may give a better starting point for
     solving The Square and will increase the kinds of enjoyment you can
     experience.
        The Square                                                      Page 4
       3. YOUR GOAL
       The Square has 36 smaller squares, in four colors.  In solution, each
     group of four colored squares occupies one corner of the bigger
     square, taking a 3x3 portion of the 6x6 Square.  The Square is
     initially scrambled by the program and your goal is to unscramble, or
     solve, it; to return the little squares to corners of The Square.
      There are two levels of difficulty: Hard and Harder.  In the Hard
     level, each row or column of the square can be moved either direction
     individually.  That is, a command may be given which moves a row right
     or left one position with 'wrap around' of the square which gets
     'pushed off' of the row.
      In the Harder level, only pairs of adjacent rows or columns may be
     moved.
      The Hard level requires patience and time but should be solvable by
     most adults and older children within an hour (more or less) of
     starting, especially if they have some experience with a cube.
      The Harder level requires patience and time but also requires some
     techniques of manipulation similar to those needed to solve a cube.  A
     section later in this manual gives some hints about how to approach
     solving the Harder level.
        The Square                                                      Page 5
       4. PRELIMINARIES
       The Square requires an IBM Personal Computer with at least 48K of
     user's memory, a video monitor and a single diskette drive.  It uses
     the IBM Disk Operation System (DOS).
      Although it will operate satisfactorially on a Monochrome display, The
     Square is displayed in full color on a color monitor or color TV set.
        4.1. HOW TO LOAD THE SQUARE
      To load The Square into your computer, proceed as follows:
      1.  Load DOS according to instructions.
      2.  If you have one diskette drive, remove the DOS diskette from the
         drive and insert the diskette for The Square.  Type the command:
         SQUARE
          If you have two diskette drives, insert the diskette for The
         Square into the second drive (the right one) and type the command:
         B:SQUARE
      3.  In a moment the square program will start.  Have fun!
        The Square                                                      Page 6
       5. GETTING STARTED
       Once the program is loaded, the computer will display:
          HIT ANY KEY TO CONTINUE
         Hit '?' for instructions at ANY time
      The computer will then display:
          Type a space for a hard puzzle
         Type any other key for a harder puzzle
         Hit ? for instructions at ANY time
      For your first few times, it is best to press the space bar to get the
     simpler puzzle.
      The computer will then display:
          Square being scrambled ...
      and will pause a few seconds.  The scrambled square will then be
     displayed.  It will be scrambled differently EVERY time.  No two
     puzzles are ever the same.
      In addition to displaying the square, the computer labels the columns
     with the letters A through F and the rows with the numbers 1 through
     6.  The following instructions will also be displayed:
          Enter command (or ?)     (0 moves)
      The '(0 moves)' shows the number of move you have made so far.  At
     this point, you may enter numbers to slide rows and letters to slide
     columns.
        5.1. COMMANDS
      The Square program is controlled by single letter (or number) commands
     typed on the keyboard.  They may be typed at anytime; it is not
     necessary to wait for the program to ask for a command.  As you gain
     experience with The Square, you will find it natural to type several
     commands at a time before waiting for the screen to be rewritten with
     the new configuration of The Square.
      The commands are:
      a to f   Slide the column(s) marked with these letters
              down one square.
       The Square                                                      Page 7
       1 to 6   Slide the row(s) marked with these numbers
              right one square.
      -        (A dash or minus sign)
              Reverse the direction of the NEXT 'a' to 'f'
              or 1 to 6 command.  For example, typing a
              dash and then an 'e' causes the column(s)
              marked with 'e' to move UP.
      u        "undo" the previous command which moved a row
              or column.  Up to 100 previous commands
              may be undone at any one time.
      / or ?   Display a command summary.
      The following commands control which puzzle you
     solve or stop The Square.
      l        Change the level of the puzzle to Hard or
              Harder.  This is done by abandoning the
              current puzzle (if not solved) and
              starting from the first display described
              above.
      q        Quit. Stop. End.  When you are finished with
              trying to solve The Square, type this.
      r        Reset The Square to solution.  There are
              good reasons for doing this; however, it
              doesn't count as a real solution!  (At
              least WE won't believe you!)
      s        Scramble the square again (differently).
              After solving The Square you can try again
              by simply typing 's'.
      Each of the above will destroy the current puzzle.  Thus, you will be
     asked, by a question like this:
          Command 'x' resets the game; type 'y' or 'n'
      if you really want to do it.  If you do, simply type 'y'; else type 'n'.
        The Square                                                      Page 8
       6. PATTERNS
       Rows and columns of The Square may be moved about to make patterns;
     stripes or dots or x's or other things.  Some patterns are very
     difficult, and some easy.  It is particularily interesting to work in
     Harder mode where only pairs of rows can be moved at once.
      To try patterns, solve The Square (or use the 'r' command to get a
     solved square) and then issue number or letter commands to move rows
     and columns.
      For example, typing (in Harder mode):
          1 1 1  4 4 4
      makes stripes.   So does:
          2 2 2   3 3 3   5 5 5   6 6 6
      This may be written without so many spaces as:
          222 333 555 666
      Three plusses are produced by these commands:
          23 23 23 ef ef ef     23 23 23 ef ef ef
      which leave one quadrant unchanged.  All four quadrants will have
     plusses if you do this:
         23 23 23  ef ef ef  56 56 56  bc bc bc    ef ef ef  23 23 23  bc bc
     bc  56 56 56
      Many more are possible.  (The cube has dozens of interesting patterns.
     So does The Square.)
        The Square                                                      Page 9
       7. HINTS
       We have no hints for the Hard puzzle except that it IS possible to
     solve it.
      The Harder puzzle can be solved in part without any hints.  You should
     be able to get two quadrants in solution in a manner similar to
     solving the Hard square.  However, you will find that the last two are
     devilishly difficult.  If you move these squares, then those get
     messed up again.  Frustration!  Anger!  A cube you can simply smash
     (or peel off the stickers!)  But how do you peel the stickers off of a
     display screen?
      The answer is to find sequences of commands which do simple things.
     For example,
          2 3 2 3 2 3
      exchanges the left and right halves of the second row from the top.
     (Try it on a square in solution.)  This is called an 'operator' or a
     'sequence'.  Solving the Harder puzzle requires finding operators
     which do the moves you need.
      If you are interested in such puzzle as The Square, the cube, and
     other related puzzles, the book by Singmaster (reference <3>) is
     recommended.  It discusses the subject in some generality with the
     cube as a specific example.  The ideas apply to all similar puzzles.
        The Square                                                     Page 10
       8. REFERENCES
           <1>  James G. Nourse, The Simple Solution to Rubik's Cube,    *
             Bantam Books Inc., NY, 1981.
         <2>  James G. Nourse, The Simple Solutions to Cubic Puzzles,
             Bantam Books Inc., NY, 1981.
         <3>  David Singmaster, Notes on Rubic's Magic Cube,     *
             Enslow Publishers, Hillside, NJ, 1981.
           * Rubic's Cube is a registered Trademark of the
          Ideal Toy Company, Hollis, New York.

```
{% endraw %}

## SW-PEG.BAS

{% raw %}
```bas
1 '           *** SWITCH *** 
2 '     by Wes Meier (70215,1017) 
3 ' 
4 '     Written 3/12/82 
5 ' 
6 '     This Program Requires BASICA, the Color Adapter Card, 
7 '     and an 80 Column Monitor. Light Pen Operation is Supported. 
8 ' 
9 SCREEN 0,1 
10 KEY OFF 
11 WIDTH 80 
12 COLOR 6,1,1 
13 LOCATE ,,0,0,6 
14 CLS 
15 CLEAR ,,5000 
16 DEF SEG = 0 
17 POKE &H417,96  
18 ' Set Set Upper Case and All Numbers. 
19 DEF SEG 
20 DEFINT B-Z 
21 DEFSTR A 
22 DIM PEG(11) 
23 PEN ON 
24 ON PEN GOSUB 129 
25 GOSUB 33 
26 TOPPEG$ = "  " + CHR$(220) + "  " 
27 BOTPEG$ = CHR$(220) + STRING$(3,219) + CHR$(220) 
28 XANSTIMER = 25 
29 ' Use 250 for compiler. 
30 GOTO 141 
31 '-------------- Subroutines -------------- 
32 'Initialize Pegs Values Subroutine 
33 FOR X = 1 TO 5 
34   PEG(X) = - 1 ' Red 
35   PEG(X + 6) = 1 'Green 
36 NEXT 
37 PEG(6) = 0 ' Slot Empty 
38 RETURN 
39 '------------------------------------------- 
40 'Capitalize Character Subroutine. 
41 'Input and Output is AX($). 
42 IF AX > = "a" AND AX < = "z" THEN AX = CHR$( ASC(AX) - 32) 
43 RETURN 
44 '------------------------------------------ 
45 'Blinking Cursor Subroutine. 
46 'Output is ANS($). 
47 LL = CSRLIN 
48 TT = POS(0) 
49 LOCATE LL,TT 
50 PRINT CHR$(219); 
51 FOR SNA = 0 TO XANSTIMER 
52   ANS = INKEY$ 
53   IF ANS < > "" THEN SNA = XANSTIMER + 1 
54 NEXT 
55 IF ANS < > "" THEN 64 
56 LOCATE LL,TT 
57 PRINT "?"; 
58 FOR SNA = 0 TO XANSTIMER 
59   ANS = INKEY$ 
60   IF ANS < > "" THEN SNA = XANSTIMER + 1 
61 NEXT 
62 IF ANS < > "" THEN 64 
63 GOTO 49 
64 AX = ANS 
65 GOSUB 42 
66 ANS = AX 
67 LOCATE LL,TT 
68 PRINT ANS; 
69 RETURN 
70 '------------------------------------------ 
71 'Draw Box at Line L Subroutine 
72 LOCATE L,1 
73 PRINT CHR$(201); 
74 GOSUB 96 
75 PRINT CHR$(187); 
76 FOR X0 = 1 TO 4 
77   PRINT CHR$(186); 
78   LOCATE ,80 
79   PRINT CHR$(186); 
80 NEXT 
81 PRINT CHR$(200); 
82 GOSUB 96 
83 PRINT CHR$(188) 
84 T = 4 
85 FOR X = 65 TO 75 
86   LOCATE L + 3,T 
87   COLOR 7,1 
88   PRINT STRING$(5,95); 
89   COLOR 1,7 
90   LOCATE L + 4,T 
91   PRINT "  " CHR$(X)"  "; 
92   T = T + 7 
93 NEXT 
94 COLOR 6,1 
95 RETURN 
96 PRINT STRING$(78,205); 
97 RETURN 
98 '------------------------------------------- 
99 'Blank a Peg at Location L,T 
100 LOCATE L - 1,T 
101 PRINT "     "; 
102 LOCATE L,T 
103 PRINT "     "; 
104 RETURN 
105 '-------------------------------------------- 
106 'Draw a Peg at Location L,T with Color C 
107 COLOR C 
108 LOCATE L - 1,T 
109 PRINT TOPPEG$; 
110 LOCATE L,T 
111 PRINT BOTPEG$; 
112 RETURN 
113 '--------------------------------------------- 
114 'Subroutine to draw the Blocks at L,T 
115 'Blocks are drawn based on the values of array PEG(x) 
116 '-1=Red, 0=Empty, 1=Green. 
117 PEN OFF 
118 FOR X = 1 TO 11 
119   IF PEG(X) = 0 THEN GOSUB 100 : T = T + 7 : GOTO 123 
120   IF PEG(X) = - 1 THEN C = 4  ELSE C = 2 
121   GOSUB 107 
122   T = T + 7 
123 NEXT 
124 COLOR 6 
125 PEN ON 
126 RETURN 
127 '------------------------------------------ 
128 'Light Pen Subroutine 
129 IF PENFLAG = 1 THEN GOSUB 33 : MOVE = 0 : RETURN 195 
130 PENPOS = PEN(9) 
131 'Column Pen was touched in...don't care about row. 
132 ANS = "" 
133 FOR PX = 65 TO 75 
134   IF PENPOS>=(PX-65)*7+4 AND PENPOS<=(PX-65)*7+8 THEN ANS=CHR$(PX) 
135 NEXT 
136 IF ANS = "" THEN RETURN 
137 LOCATE LL,TT 
138 PRINT ANS$ 
139 IF PENFLAG = 2 THEN RETURN 212  ELSE RETURN 229 
140 '------------------------------------------ 
141 PRINT TAB( 31); 
142 COLOR 20,7 
143 PRINT " " STRING$(3,240)" SWITCH " STRING$(3,240)" "; 
144 COLOR 6,1 
145 PRINT 
146 PRINT 
147 PRINT TAB( 3)"      In this puzzle you are faced with the problem of "; 
148 PRINT "switching two" 
149 PRINT TAB( 3)"different sets of pegs. The RED pegs can only move to "; 
150 PRINT "the right" 
151 PRINT TAB( 3)"and the GREEN pegs can only move to the left." 
152 PRINT 
153 PRINT TAB( 3)"      Your selected peg may ONLY jump one other peg OR "; 
154 PRINT "move one Space." 
155 PRINT TAB( 3)"You WIN when you have completely switched both sets of "; 
156 PRINT"pegs. Good Luck!" 
157 PRINT 
158 PRINT TAB( 3)"Note: you will NOT have to press the ENTER key once the "; 
159 PRINT"puzzle has started." 
160 PRINT TAB( 3)"This Program also supports Light Pen Operation." 
161 L = 13 
162 GOSUB 72 
163 L = L + 2 
164 LOCATE 22,15,0 
165 COLOR 22 
166 PRINT "Press any key or Touch the Screen with the Pen to start" 
167 PENFLAG = 1 
168 T = 4 
169 GOSUB 114 
170 COLOR 4,7 
171 LOCATE 20,38 
172 PRINT " Start "; 
173 COLOR ,1 
174 A = INKEY$ 
175 IF A < > "" THEN 195 
176 GOSUB 178 
177 GOTO 185 
178 FOR X = 1 TO 5 
179   PEG(X) = - PEG(X) 
180   PEG(X + 6) = - PEG(X + 6) 
181 NEXT 
182 FOR X = 0 TO 1500 
183 NEXT 
184 RETURN 
185 T = 4 
186 GOSUB 114 
187 LOCATE 20,37 
188 COLOR 4,7 
189 PRINT " Finish "; 
190 COLOR ,1 
191 A = INKEY$ 
192 IF A < > "" THEN 195 
193 GOSUB 178 
194 GOTO 168 
195 COLOR 6,1,1 
196 GOSUB 33 ' Reinitialize Peg(X) 
197 CLS 
198 L = 4 
199 GOSUB 71 
200 L = L + 2 
201 T = 4 
202 GOSUB 114 
203 LOCATE 11,5 
204 PRINT SPACE$(50); 
205 LOCATE 11,5 
206 PRINT "Move from "; 
207 PENFLAG = 2 
208 GOSUB 45 
209 SWAP AX,ANS 
210 GOSUB 40 
211 SWAP AX,ANS 
212 IF ANS > = "A" AND ANS < = "K" THEN 215 
213 SOUND 37,25 
214 GOTO 240 
215 MOVE.FROM = ASC(ANS) - 64 
216 IF PEG(MOVE.FROM) = 0 THEN 213 
217 L = 6 
218 T = (MOVE.FROM - 1) * 7 + 4 
219 IF PEG(MOVE.FROM) = - 1 THEN C = 20  ELSE C = 18 
220 GOSUB 107 
221 COLOR 6 
222 LOCATE 11,25 
223 PRINT "Move to "; 
224 PENFLAG = 3 
225 GOSUB 45 
226 SWAP ANS,AX 
227 GOSUB 40 
228 SWAP ANS,AX 
229 IF ANS < "A" OR ANS > "K" THEN 213 
230 MOVE.TO = ASC(ANS) - 64 
231 IF PEG(MOVE.TO) < > 0 THEN 213 
232 DIFF = MOVE.TO - MOVE.FROM 
233 IF ABS(DIFF) > 2 THEN 213 
234 IF PEG(MOVE.FROM) = - 1 AND DIFF < 0 THEN 213 
235 IF PEG(MOVE.FROM) = 1 AND DIFF > 0 THEN 213 
236 SWAP PEG(MOVE.FROM),PEG(MOVE.TO) 
237 MOVE = MOVE + 1 
238 LOCATE 3,30 
239 PRINT "Number of Moves ="MOVE; 
240 L = 6 
241 T = 4 
242 GOSUB 114 
243 IF PEG(6) < > 0 THEN 203 
244 FLAG = 0 
245 FOR X = 1 TO 5 
246   IF PEG(X) < > 1 THEN FLAG = - 1 
247   IF PEG(X + 6) < > - 1 THEN FLAG = - 1 
248 NEXT 
249 IF FLAG THEN 203 
250 LOCATE 14,5 
251 COLOR 20,7 
252 PRINT " You WON!!! in"MOVE"Moves ! " 
253 FOR Y = 1 TO 3 
254   FOR X = 20 TO 60 
255     PLAY "MBL48T255N=X;" 
256   NEXT 
257 NEXT 
258 LOCATE 16,5 
259 COLOR 6,1 
260 PRINT "Play again "; 
261 PENFLAG = 1 
262 GOSUB 45
263 IF ANS="Y" OR ANS="y" OR ANS=CHR$(13) THEN GOSUB 33:MOVE=0:GOTO 197
264 CLS
265 END ' of program.
```
{% endraw %}

## TWINKLE.BAS

{% raw %}
```bas
10 ' Program: TWINKLE.BAS (an IBM program (Interesting, But Meaningless))
20 ' Contributed to PC-SIG on 5 November, 1983
30 ' Written by John Walkenbach
40 '            1425 NW Highland
50 '            Corvallis, OR 97330
60 '
70 DIM C(20)
80 FOR I=1 TO 20:READ C(I):NEXT
90 KEY (9) ON:ON KEY (9) GOSUB 470
100 KEY (10) ON:ON KEY (10) GOSUB 460
110 CLS
120 KEY OFF
130 LOCATE 1,30:PRINT"T W I N K L E":PRINT
140 PRINT"This program displays a selected character at random positions on the
150 PRINT"screen. If the selected position is already lit, it disappears.
160 PRINT"The display in the lower left corner gives the percent of the character
170 PRINT"positions lit. It should hit 50% eventually. The pitch of the sound is
180 PRINT"correlated with the screen position, and only occurs when a character
190 PRINT"appears (not disappears). Function Key 9 toggles the sound on & off.
200 PRINT"Function Key 10 stops the program.
210 PRINT:PRINT"(The display is best with the lights out.)
220 PRINT:PRINT"You can specify any ASCII character code, but these work well...":PRINT:PRINT
230 N=1
240 FOR I=1 TO 4
250 FOR J=1 TO 5
260 PRINT USING "###";C(N);
270 PRINT":  ";CHR$(C(N));"        ";
280 N=N+1
290 NEXT J
300 PRINT
310 NEXT I
320 LOCATE 24,1:INPUT;"Enter the number of your choice: ",CCC
330 IF CCC<1 OR CCC>255 THEN BEEP:LOCATE 24,33:PRINT SPC(7);: GOTO 320
340 I=0:LIT=0:DARK=0
350 CLS
360 LOCATE 25,1:PRINT"Percent on: ";
370 RANDOMIZE VAL(RIGHT$(TIME$,2))
380 DEF SEG=&HB000
390 X=INT(RND*1840)*2
400 LOCATE 25,67:I=I+1:PRINT "Loop: ";I;
410 Y=PEEK(X)
420 IF Y=32 THEN POKE X, CCC:SOUND X+100,0.52-SND:LIT=LIT+1:LOCATE 25,13:PRINT USING "###.#";LIT/19.2;:GOTO 390
430 IF Y<>32 THEN POKE X,32:SOUND X+100,0:LIT=LIT-1:LOCATE 25,13:PRINT USING "###.#";LIT/19.2;:GOTO 390
440 GOTO 390
450 DATA 1,2,3,4,5,6,14,15,18,22,42,43,46,176,179,206,219,248,249,254
460 CLS:END
470 IF SND= 0 THEN SND=0.52:RETURN
480 SND=0:RETURN
```
{% endraw %}

## UPVC.DOC

{% raw %}
```
     [[This patch was extracted from the PHOENIX IBM-PC Software  
Library newsletter. They received it from the HAL-PC users group of 
Houston, TX.   Many thanks to them.]] 
      ****      HOW TO BACK-UP YOUR PC VISICALC DISK   **** 
      The following technique will convet your VISICALC disk to a disk 
that may be copied by "diskcopy". Diskcopy must be used because there 
are four programs on the disk which do not appear in the directory. 
DO NOT TRY TO ADD OTHER FILES TO THE NEW DISK.  Use of this procedure 
does not relieve you of your responsibilities under copyright laws or 
licensing agreements.  
      Boot your DOS disk up on drive A: format drive b without copying 
the dos system. (FORMAT B: (ENTER)). Then enter the following DEBUG 
Commands: 
 [FOR SYSTEMS 96K OR OVER] 
 -L 100 0 0 80           (READS FIRST 16 TRACKS FROM A:) 
-W 100 1 0 80           (WRITES 16 TRACKS TO B:) 
-L 100 0 80 80          (READS NEXT 16 TRACKS FROM A:) 
-W 100 1 80 80          (WRITES SAME ON B:) 
-L 100 0 100 3E         (COPIES THE LAST 8 TRACKS EXCEPT 
-W 100 1 100 3E          FOR THE UNCOPYABLE SECTOR 13F) 
 [FOR SYSTEMS WITH LESS THAN 96K] 
 -L 100 0 0 40 
-W 100 1 0 40 
-L 100 0 40 40 
-W 100 1 40 40 
-L 100 0 80 40 
-W 100 1 80 40 
-L 100 0 C0 40 
-W 100 1 C0 40 
-L 100 0 100 3E 
-W 100 1 100 3E 
 NOW YOU HAVE COPIED THE DISK: NOW PATCH THE 80-COLUMN PROGRAM LOADER/ 
DECRYPTER SO THAT IT WILL RUN CORRECTLY WITH SECTOR 13F FORMATTED 
NORMALLY. 
 -L 100 1 138 3            (LOAD THE INVISIBLE LOADER-DECRYPTER) 
-E 150 90 90 
-E 156 B0 
-E 158 90 90 
-E 168 90 04 40 90 90 
-E 16E C6 06 
-E 173 90 90 
-E 179 90 04 20 90 90 
-E 17F C6 06 
-E 184 90 90 
-E 18A 90 04 00 90 90 
-E 190 C6 06 
-E 195 EB 
-E 1B0 90 05 00 00 90     (LAST PATCH DISABLES TIMER CHECK) 
-W 100 1 138 3            (SAVE IT BACK ON NEW DISK) 
 LASTLY, YOU MUST PATCH 'VCONFIG' IS YOU NEED THE 40 COLUMN DISPLAY. 
(WITH THE NEW VISICALC DISK IN DRIVE B:) 
 -L 100 1 13B 3             (LOAD 40-COL LOADER-DECRYPTER) 
-E 14D 90 90 B4 10 90 90 90 
-E 169 C6 06 
-E 16E 90 90 
-E 174 90 2C 20 90 90 
-E 17A C6 06 
-E 17F 90 90 
-E 185 90 2C 00 90 90 
-E 18B C6 06 
-E 190 EB 
-E 1AB 90 04 00 90 90       (DISABLE TIMER CHECK HERE TOO) 
-W 100 1 13B 3              (SAVE ON BACK ON NEW DISK) 
-Q                          (QUIT DEBUG) 
      All copies of the new disk should function exactly as the original 
"copy-protected" disk. The serial number is unchanged. You may not legally
sell; give or load either the original disks, copies or documentation


```
{% endraw %}

## VCCOM.DOC

{% raw %}
```
     [[This patch was extracted from the PHOENIX IBM-PC Software 
Library newsletter. They received it from the HAL-PC users group of 
Houston, TX.  Corrected by Jack Wright.  Many thanks to them.]] 
 ****   CONVERT VISICALC TO A .COM FILE   **** 
 USE THE FOLLOWING PROCEDURE TO TRANSFER THE 80-COLUMN VISICALC PROGRAM 
FROM THE VISICALC DISK AND WRITE A STANDARD .COM FILE WHICH MAY BE 
LOADED ON A NON-STANDARD DISK DRIVE (WINCHESTER, 8", ETC). 
 FORMAT A DISK AS FOLLOWS: (FORMAT B:/S(ENTER)). 
START THE DEBUG SYSTEM. 
INSERT THE VISICALC DISK IN DRIVE A: 
THEN TYPE: 
 -L 100 0 138 2         (LOAD THE VC80 LOAD/DECRYPTER) 
-M 0 3FF 7000          (DUPLICATE IT IN HIGHER MEMORY) 
-R CS                  (INSPECT COMMAND SEGMENT REGISTER) 
 DEBUG WILL RESPOND WITH THE CONTENTS OF THE CS REGISTER (eg. 04B5) AND 
PROMPT WITH A COLON (:). TYPE THE OLD CONTENTS + 700 (HEX). (eg. 04B5 
BECOMES 0BB5). DO THE SAME WITH THE 'DS' REGISTER. 
DEBUG response to R CS might be: 
 CS 04B5    <-Save the value you get, we'll need it later. 
:0BB5      <-Type in your CS value + 700hex here 
-R DS      <-Type 
DS 04B5 
:0BB5      <-Type in your DS value + 700hex here 
 NEXT: 
Take the low order byte of the CS you saved above and substitute it 
for LL in the next line.  Substitute the high order byte for HH: 
 -E 107 LL HH           (ENTER BYTE-FLIPPED CS) Ex: -E 107 B5 04 
-E 24D BB A8 00 90     (HARD-WIRE THE DECRYPTION KEY) 
 NOW, WE MUST RUN THE LOADER/DECRYPTER, TYPE: 
 -G =1B8 26B            (EXECUTE FROM 1B8 TO 26B) 
 THE ENTIRE PROGRAM WILL NOW BE LOADED AND DECRYPTED AND A REGISTER DUMP 
SHOULD APPEAR ON THE SCREEN. NOW RESTORE CS AND DS TO THEIR PREVIOUS 
VALUES AND SET THE FILE LENGTH IN CX. Set BX=0: 
 -R CS 
CS 0BB5     <-Yours might be different 
:04B5       <-Type in the value of CS you saved above 
-R DS 
DS 0BB5 
:04B5       <-Type in the value of DS you saved above 
-R BX 
BX F3FD 
:0 
-R CX 
CX 0000 
:6B64       (LENGTH = 6B64 FOR VERSION 1.1, 6802 FOR VERSION 1.0) 
 NOW WE MUST NAME THE FILE, WRITE IT AND EXIT. 
REMOVE THE VISICALC DISK FROM A: 
INSERT THE NEW, FORMATTED, EMPTY DISK IN A: 
TYPE: 
 -N VC.COM               (OR WHATEVER YOU WISH TO NAME IT) 
-W                      (WRITE THE .COM FILE)
-Q                      (EXIT FROM DEBUG)
***YOU ARE DONE*****
Back in DOS, type VC to try it.


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0092

     Volume in drive A has no label
     Directory of A:\

    PATTERNS BAS      2206  11-05-83   5:48p
    SOUNDEMO BAS      4028  11-05-83   6:21p
    TWINKLE  BAS      1663  11-05-83   6:16p
    MUSIC    BAS     14399  10-25-83  12:03a
    MUSIC    DAT      1664  11-02-83   5:23p
    NAMCNV   TXT      4596  11-26-83   2:21a
    QDCOPY   DOC       896  11-02-83   5:14p
    RACE     BAS      3712  10-25-83   8:45p
    RUBIC3   BAS      8960  10-25-83   8:32p
    SCHROE   DER      3328  10-31-83   3:13a
    SQUARE   BAS     17664  11-02-83   5:30p
    SQUARE   DOC     12672  11-02-83   5:26p
    SQUARE   SUM      4608  11-02-83   5:26p
    STLOUIS  BBS     23808  10-31-83   3:21a
    SW-PEG   BAS      6784  11-02-83   5:29p
    UPVC     DOC      2688  11-02-83   5:13p
    VCCOM    DOC      2432  11-02-83   5:12p
    CRC      TXT      1404  11-09-84   1:34p
    CRCK4    COM      1536  10-21-82   7:54p
           19 file(s)     119048 bytes
                           36864 bytes free
