---
layout: page
title: "PC-SIG Library Disk #11"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0011/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0011"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "DEALER DEMO 1 OF 2 (ALSO 12)"

    Are you there, Nostalgia buffs? Many of the programs listed below were
    used as part of the original IBM PC dealer demonstrations.
    
    Among them you'll find a wide selection of utility programs for testing
    yur monitor display, and to test and/or control your printer. And for
    the playful, of course, there are some vintage games. A trip through
    this fascinating collection of programs is a hike through the early
    days of computing.
    
    System Requirements:  Some programs require color graphics.
    
    How to Start:  To run a COM program simply type its name and press
    <ENTER>. For instructions on running BASIC programs, please refer to the
    GETTING STARTED section in this catalog.
    
    File Descriptions:
    
    The First Disk Contains:
    LOGOC    BAS  IBM logo
    TWOSIDE  BAS  Source for TWOSIDE.COM; contains setup instructions
    HEAPSORT BAS  HEAPSORT demo
    GRAPH1   BAS  Draw on screen with 8 cursor keys or light pen
    PLOTTER  BAS  Test pattern for plotters
    TRANDUMP BAS  Hex file display program
    PRINT    BAS  Prints or displays any ASCII text file
    QSORT    BAS  Quick internal sort for array - string or numeric
    SCREENS       Data file for GRAPH1.BAS
    HAPPYB   BAS  Plays the Happy birthday song LOGOC    BAS  IBM logo
    WAITIN   BAS  Keyboard wait sub-routine
    CHRSET   BAS  Prints all 244 printable chars - 244 out of 255
    PRDEMO   BAS  Prints all 12 MX80 printer fonts
    BASICPRT BAS  Prints BASIC programs: highlighting rems & print control
    MENU     BAS  Program from dealer demo a-disk
    IBMDIY   BAS  Program from dealer demo a-disk
    MX80     BAS  Selects fonts
    LUNAR    BAS  Game - Apollo lunar landing
    PEOPLE   BAS  Game of 20 questions  (May need empty PEOPLEF file)
    SNOW?    BAS  Random patterns (3 files)
    PATTERNS BAS  More random patterns
    C        BAS  Switches display to color
    IBMMC    BAS  Program from dealer demo a-disk
    B        BAS  Switches display to monochrome
    IBMCS    BAS  Program from dealer demo a-disk
    SATURN   BAS  Picture of Saturn
    SPEEDUP  BAS  Source to create SPEEDUP.COM on system disk in Drive A
    TWOSIDE  COM  Allows 2 double-sided disk drives addressed a,b,c,d
    AUTOEXEC BAT  Sample autoexec file to load speedup and request date
    TESTSCRN BAS  Test pattern to adjust your screen
    SPEEDUP  COM  Speeds up disk operations - do not use with VISICALC
    DEFEND   BAS  Animated war game - uses joy stick controllers
    PSTYLES  BAS  Display different print styles on an IBM or EPSON printer
    DISPLAY  BAS  Selects which monitor you are using (Monochrome or Color)
    GTEST    BAS  Graphics test display
    START    BAS  Color display demo with 17 programs and one data file
    CANNON   BAS  Cannon firing game - elev control and sound effects
    NIM      BAS  Game of NIM
    
    The Second Disk Contains:
    LIFE     BAS  Input pattern is char string(s) - last one is "Done"
    ARKTRAV  BAS  Music - a short melody
    SIREN    BAS  Wailing siren that doesn't stop until CTRL-BREAK
    BULLSEYE BAS  Program using circle statements
    PAINT    BAS  Program with circle and paint statements
    MEDBULL  BAS  Program using circle statements
    GRAPHICS BAS  IBM logo on 40 char screen
    *        PIC  Pictures used by DEMO3 (7 files)
    LOGO40   BAS  IBM logo on 40 char screen
    FENCE    BAS  Hit shifty prey with ball using / paddles
    DEMO3    BAS  Use with menu on Disk No 11
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## B.BAS

```bas
5 'SAVE "B"
100 KEY OFF: CLS
200 WIDTH 40: DEF SEG=0: A=PEEK(&H410): POKE &H410,A OR &H30
210 WIDTH  80: LOCATE ,,1,12,13
215 KEY ON
220 CHAIN "MENU"
```

## BASICPRT.BAS

```bas
10 REM==================================================================
20 REM==============  Print a BASIC source program   ===================
30 REM===   This program prints a source listing of a BASIC program ====
40 REM===   and prints all remarks statements (REM) in emphasized  =====
50 REM===   font.  ALSO, certain printer control statements are    =====
60 REM===   recognized when they are the only comment on a REM stmt=====
70 REM===      For example:                                        =====
80 REM===         REM $s4     will space 4 lines on the printer    =====
90 REM===         REM $pa     will eject to top of next page       =====
100 REM==================================================================
110 REM $s1                                 '
120 ON ERROR GOTO 900                       '
130 TIMEOUT.COUNT=0                         '
140 PTIME$ = TIME$
150 CLS : KEY OFF                           ' Clear screen
160 LOCATE 12,10 : PRINT "Note:  Drive B and filetype of BAS is assumed"
170 LOCATE 13,10 : PRINT "Also:  Pgm must have been saved using ASCII option"
180 LOCATE 10,10 : COLOR 0,7                ' Center query for file name
190 LINE INPUT " Enter the name of the BASIC source program: ";AAA$
200 COLOR 7,0
210 GOSUB 380
220 OPEN "b:"+AAA$+".bas" FOR INPUT AS 1
230 LC = -1
240 IF EOF(1) THEN 290
250   LINE INPUT#1,REC$
260   GOSUB 770     ' check for enough vertical space
270   GOSUB 500     ' check for print control and print line if required
280 GOTO 240
290 CLOSE 1
300 CLS : KEY ON : LPRINT CHR$(12)     ' Final page skip
310 END
320 REM $S3
330 REM==================================================================
340 REM======================  SUBROUTINE  ==============================
350 REM=========  Convert lower case letters to upper case  =============
360 REM==================================================================
370 REM $s1                                 '
380 FOR I = 1 TO LEN(AAA$)
390   AA$ = MID$(AAA$,I,1)
400     IF ASC(AA$)=>97 AND ASC(AA$)<= 122 THEN AA$ = CHR$(ASC(AA$)-32)
410     MID$(AAA$,I,1) = AA$
420 NEXT I
430 FOR I = 1 TO 8-LEN(AAA$)
440   AAA$ = AAA$+" "
450 NEXT I
460 RETURN
470 REM $pa
480 REM==================================================================
490 REM=========================  SUBROUTINE  ===========================
500 REM============= Check for special printer control rem's  ===========
510 REM==================================================================
520 REM $s1                                 '
530   FOR I = 1 TO 8
540      AA$ = MID$(REC$,I,3)
550      IF AA$="REM" THEN GOTO 580
560   NEXT I
570   GOTO 730
580   AA$ = MID$(REC$,I+4,1)
590   PC$= CHR$(27)+CHR$(69)           '  Turn ON emphasized for rem stmt
600   IF AA$ <> "$" THEN 730           '  Check for REM $ format
602   AA$=MID$(REC$,I+5,1)             '  If so, pick up next character
610   IF AA$ <> "S" AND AA$ <> "s" THEN 700 'Check for Line Space cmd
620   AA = VAL(MID$(REC$,I+6,1))
630   IF AA<1 OR AA>9 THEN RETURN           '
640   FOR I = 1 TO AA
650      LPRINT " "
660      LC = LC-1
670   NEXT I
680   PC$= CHR$(27)+CHR$(70)           '  Turn OFF emphasized font
690   RETURN
700     IF AA$<>"p" AND AA$<>"P" THEN 730   ' Check for page eject
710     GOSUB 840                           ' Issue page eject
720     RETURN                              '
730   LPRINT PC$;REC$
740   PC$=CHR$(27)+CHR$(70)
750   RETURN
760 REM $S3
770 REM==================================================================
780 REM=========================  SUBROUTINE  ===========================
790 REM================  Check for vertical spacing   ===================
800 REM==================================================================
810 REM $s1                                 '
820 IF LC > 0 THEN 880
830 IF LC < 0 THEN 850
840   LPRINT CHR$(12)          ' skip to top of page
850  LC = 55
860 LPRINT CHR$(14)+CHR$(27)+CHR$(71)+DATE$+STRING$(4,32)+"PGM: "+AAA$+STRING$(4,32)+PTIME$
870 LPRINT CHR$(27)+CHR$(72)+CHR$(27)+CHR$(20)+" ":LPRINT" " : LPRINT " "
880 LC = LC-1
890 RETURN
900 REM $pa                                     '
910 REM ===============================================================
920 REM ==  Error trapping routine, intended primarily to handle  =====
930 REM ==  device timeout on the printer when too much page      =====
940 REM ==  ejecting is done.                                     =====
950 REM ===============================================================
960 REM $s1                                 '
970    IF ERR <> 24 THEN 1030                   '
980    TIMEOUT.COUNT=TIMEOUT.COUNT+1           ' Incr number of timeouts
990    IF TIMEOUT.COUNT<10 THEN RESUME NEXT    ' give it 10
1000      CLS : BEEP : BEEP                  '
1010      PRINT "Program aborted due to too many device timeouts"
1020      END                                '
1030    CLS : BEEP :BEEP                     '
1040    PRINT "Program aborted due to error code = ";ERR
1050    END                                  '
```

## C.BAS

```bas
5 'SAVE "C"
100 KEY OFF: CLS
200 WIDTH 80: DEF SEG=0: A=PEEK(&H410): POKE &H410,(A AND &HCF) OR &H20
210 WIDTH  40 :SCREEN 1: SCREEN 0: LOCATE ,,1,6,7
215 KEY ON
220 CHAIN "MENU"
```

## CANNON.BAS

```bas
10 PRINT TAB(30);"CANNONEER"
20 PRINT:PRINT:PRINT
30 PRINT"You are the commander of a gun crew for a long-range"
40 PRINT"cannon. You must give your crew the proper angle "
50 PRINT"of elevation in degrees to put your rounds on the "
60 PRINT"target. A hit by one of your high explosive rounds "
70 PRINT"within a hundered meters of the target will destroy it. "
80 PRINT
90  SEC = 18.2 'clock ticks to make 1 second used for sound stmt
100 R=INT(4000*RND(6)+10000)
110 PRINT"The maximum range of your gun is ";R;" meters."
120 Z=0
130 PRINT
140 S1=0
150 T=INT(R*(0.1+0.8*RND(6)))
160 S=0
170 GOTO 380
180 PRINT"Barrel cannot be depressed below one degree."
190 GOTO 410
200 PRINT"Barrel elevation cannot exceed 89 degrees."
210 GOTO 410
220 PRINT"Forward observer reports round was long by ";ABS(E);" meters."
230 GOTO 410
240 PRINT"Forward observer reports round was short by ";ABS(E);" meters."
250 GOTO 410
260 PRINT"### TARGET DESTROYED###     ";S;" rounds fired."
270 S1=S1+S
280 IF Z=4 THEN 590
290 Z=Z+1
300 PRINT
310 FOR J = 1 TO 5
320 FOR FREQ = 500 TO 3500 STEP 100
330 SOUND FREQ,0.35
340 NEXT FREQ
350 NEXT J
360 PRINT"Forward observer has sighted new activity!!!"
370 GOTO 150
380 PRINT"      Range to target is ";T;" meters."
390 PRINT"      Fire for effect!"
400 PRINT:PRINT
410 INPUT "Elevation? ",B
420 IF B>89 THEN 200
430 IF B<1 THEN 180
440 SOUND 400,0.5*SEC
450 FOR FREQ = 3000 TO 4000 STEP 10
460  SOUND FREQ, 0.02*SEC
470 NEXT FREQ
480 SOUND 150,0.5*SEC
490 S=S+1
500 IF S<6 THEN 550
510 PRINT
520 SOUND 100,10
530 PRINT"BOOM!!!  You have just been destroyed by enemy fire."
540 PRINT:PRINT:PRINT: GOTO 630
550 B2=2*B/57.3 : I = R*SIN(B2) : X=T-I : E=INT(X)
560 IF ABS(E)<100 THEN 260 'target destroyed
570 IF E>100 THEN 240 'round short
580 GOTO 220 'over target
590 PRINT:PRINT:PRINT"Total rounds expended: ";S1
600 IF S1>18 THEN 630
610 PRINT "Nice shooting! There could be a promotion in ths for you."
620 GOTO 650
630 PRINT "The cook can do better! Did you sleep through artillery"
640 PRINT "school? You need a refresher at Fort Sill."
650 PRINT: INPUT "Another target? (Y or N)";Z$
660 IF Z$="Y" OR Z$= "y" THEN 100
670 PRINT "You deserve some R&R. See you later."
680 END
```

## CHRSET.BAS

```bas
5 CLS
10 FOR N=1 TO 255
20 IF (N>6 AND N<14) OR (N>27 AND N<32) GOTO 50
40 PRINT CHR$(N)+"   ";
50 NEXT N
60 PRINT
70 PRINT "THAT'S A PRINTOUT OF ALL PRINTABLE CHARACTERS...."
80 PRINT "            244 OUT OF 255!"
```

## DEFEND.BAS

```bas
1 REM WRITTEN JAN 1982 BY ED DAVIS
2 GOSUB 65019
5 DIM T%(1,5):DIM M(6,15): DIM CH%(66)
7 GOSUB 6000
10 GOTO 5000
50 ' BEGIN MAIN ROUTINE
100 SX=STICK (0):SY=STICK (1)
105 IF ABM% THEN GOTO 300
110 X=3*(SX):IF X>298 THEN X=298
120 PUT(LX,LY),CH%:PUT(X,SY),CH%:LX=X:LY=SY
200 IF ABM% THEN GOTO 300
210 STRIG ON
220 B%=STRIG(1):STRIG OFF :IF B%=0 GOTO 400
230 DX=LX+10:DY=LY+10:LINE (168,160)-(DX,DY),3:ABM%=1:RR=1
240 PUT(LX,LY),CH%:LX=158:LY=150:PUT (LX,LY),CH%
300 RR=1+RR:CIRCLE (DX,DY),RR,2
310 IF RR<11 THEN GOTO 400
320 ABM%=0:LINE (168,160)-(DX,DY),0:CIRCLE (DX,DY),10,0:LINE (DX-11,DY-10)-(DX+11,DY+10),0,BF
325 I=-1
330 I=I+1:IF I>15 THEN GOTO 400
335 IF M(0,I)=0 THEN GOTO 330
340 IF ABS(M(2,I)-DX)<WH%+1 AND  ABS (M(3,I)-DY)<WH% THEN PLAY "MBL16O0DCAB":GOTO 380
360 GOTO 330
380 LINE (M(5,I),M(6,I))-(M(2,I),M(3,I)),O:M(0,I)=0:SC=SC+(10-WH%)
400 N=0:FOR I=0 TO 15
410 IF M(0,I)<>1 THEN N=N+1:GOTO 430
412 M(2,I)=M(2,I)+M(4,I):M(3,I)=M(3,I)+1:PSET (M(2,I),M(3,I)),3
415 IF M(3,I)>159 THEN GOSUB 2500
420 IF (M(3,I)>70) AND (FLAG%=0) THEN FLAG%=123:MIRV%=I:SOUND 50,2
430 NEXT I:IF MR=0 AND N>15 THEN GOTO 7000
600 IF FLAG%=123 THEN GOTO 650
610 IF RND(1)<0.96 THEN GOTO 50
615 I=0
620 I=I+1:IF M(0,I)=2 THEN M(0,I)=1:GOTO 50
630 IF I=11 THEN LOCATE 1,3:PRINT "ENEMY HAS LAUNCHED ALL MISSLES":MR=0:GOTO 50
640 GOTO 620
650 FLAG=-1:N=0:PT%=M(1,MIRV%):TT%=PT%+1
660 N=N+1:TT%=TT%+1:IF TT%>5 THEN TT%=TT%-6
670 I=N+11: M(0,I)=1:M(1,I)=TT%:M(2,I)=M(2,MIRV%):M(3,I)=M(3,MIRV%):M(5,I)=M(2,I):M(6,I)=M(3,I)
680 M(4,I)=(T%(1,TT%)-M(5,I))/90
690 IF N<4  THEN FLAG%=-1:GOTO 660
699 GOTO 50
2500 '  MISSLE EXPLODE
2510 FOR R=6 TO 36:IF R<30 THEN CIRCLE (M(2,I),160),R,2
2520 CIRCLE (M(2,I),160),R-5,0:SOUND 36+3*R,1
2525 NEXT R
2530 T%(0,M(1,I))=0:LINE(M(5,I),M(6,I))-(M(2,I),M(3,I)),0
2540 M(0,I)=0
2550  FOR I=0 TO 5:IF T%(0,I)=1 THEN RETURN
2560 NEXT I:RETURN 3000
3000 REM ALL CITIES HAVE BEEN DESTROYED
3010 CLS:COLOR 4,7:LOCATE 6,9:PRINT"YOU SHOULD BE DEMOTED!"
3020 LOCATE 10,5:PRINT"ALL CITIES HAVE BEEN DESTROYED"
3030 LOCATE 15,6 :PRINT"YOUR SCORE IS ";SC;" POINTS."
3040 LOCATE 17,2:PRINT"THE HIGHEST SCORE TODAY IS ";HSC;" POINTS."
3050 LOCATE 24,5:PRINT"DO YOU WISH TO PLAY AGAIN (Y/N)?"
3055 IF SC>HSC THEN HSC=SC
3060 K$=INKEY$:IF K$="" THEN 3060
3070 IF K$="Y" OR K$="y" THEN GOTO 10
3080 IF K$="N" OR K$="n" THEN CLS:END
3090 GOTO 3060
3110 END
4000 FOR I=0 TO 11
4010 M(0,I)=2:M(5,I)=INT(RND(1)*280)+20:M(2,I)=M(5,I):M(6,I)=0:M(3,I)=0
4020 NEXT I
4030 FOR I=0 TO 11
4040 II=I:IF I>5 THEN II=I-6
4050 M(4,I)=(T%(1,II)-M(5,I))/160:M(1,I)=II
4060 NEXT I
4065 M(0,0)=1:REM THIS ENABLES ONLY ONE MISSLE ******
4070 MR=16:' SET NUMBER OF MISSLES
4080 RETURN
4999 STOP
5000 '  >>>>>>> INITIATION <<<<<<<<
5001 '    ED DAVIS  9-1-82   LEVEL 1
5050 NM%=11:FLAG%=0:MIRV%=33:SC=0
5060 RANDOMIZE VAL(RIGHT$(TIME$,2))
5100 SCREEN 1,0:COLOR 0,1:WIDTH 40:KEY OFF:CLS
5110 CIRCLE (110,110),5,3
5120 LINE (100,110)-(105,110):LINE (115,110)-(120,110)
5130 LINE (110,100)-(110,105):LINE (110,115)-(110,120)
5140 GET (100,100)-(120,120),CH%:CLS
5200 FOR I= 0 TO 5
5210 T%(0,I)=1:T%(1,I)=48*(I+1)
5220 NEXT I
5230 GOSUB 4000:REM TARGETING ROUTINE 12 MISSLES (6 TARGETS)
5300 '>> DRAW AND LABEL CITIES <<
5310 SCREEN 1,0:COLOR 1,1
5320 CT$="U2R4U18R7D8R3D3R3U9R3D7R5D4R3D5R5D2"
5325 CT2$="U5R1U3R1D3R2U3R1D3R2U3R1D3R2U3R1D3R2D3R1U1R1U10R1U1R3D1R1D6R3U10R4D14R5D3"
5327 CT3$="U20R6D18R1U5R2U8E2F2D5R1D9R2U9R1U9R4D13R3U9R6D5R2D10"
5330 PSET(0,180):DRAW "R32;XCT2$;R16;XCT$;R16;XCT3$;R5U10R6D10R5;XCT$;R16;XCT2$;R16;XCT$;R16;"
5340 PAINT (120,190),3
5380 LOCATE 25,5:PRINT"BTV";:LOCATE 25,11:PRINT "FSH";:LOCATE 25,17:PRINT"HPN";:LOCATE 25,24:PRINT"MAN";:LOCATE 25,30:PRINT "RAL";:LOCATE 25,36:PRINT"BOC";:LOCATE 1,1:PRINT"";
5700 STRIG OFF:LX=120:LY=100:PUT (120,100),CH%:BOOM%=0
5800 GOTO 50
6000 ' INSTRUCTIONS
6010 SCREEN 1,0:COLOR 1,1:WIDTH 40:KEY OFF:CLS
6020 LOCATE 2,9:PRINT "ANTI-BALLISTIC-MISSLE
6030 LOCATE 4,7:PRINT "You are the commander of a"
6040 LOCATE 5,4:PRINT"anti-ballistic missle defense system."
6050 LOCATE 6,4:PRINT "Your mission is to defend the IBM"
6070 LOCATE 7,4:PRINT "east coast sites from the enemy."
6080 LOCATE 9,7:PRINT "The enemy has 12 missles to fire"
6090 LOCATE 10,4:PRINT "at your 6 locations.  Your missles"
6100 LOCATE 11,4:PRINT "will destroy his if within range"
6110 LOCATE 12,4:PRINT "You may choose the megatonnage of"
6120 LOCATE 13,4:PRINT "your missiles, but will get a higher"
6130 LOCATE 14,4:PRINT"score with smaller boom-power.
6140 LOCATE 15,4:PRINT "The ememy does have MIRV capability."
6150 LOCATE 18,3:PRINT "WHAT SIZE (3-9) WARHEAD DO YOU WANT?:"
6160 LOCATE 20,4:PRINT "       3=SMALL (EXPERT)"
6170 LOCATE 21,4:PRINT "       5=NORMAL(GOOD)
6180 LOCATE 22,4:PRINT "       7=BIG   (BEGINNER)
6190 LOCATE 23,4:PRINT "       9=WOW!  (CHICKEN)
6200 DEF SEG=0:POKE 1050,PEEK(1052)
6210 K$=INKEY$:IF K$="" THEN 6210
6220 IF VAL(K$)>2 THEN WH%=VAL(K$) ELSE GOTO 6210
6500 RETURN
7000 ' CITIES NOT ALL DESTROYED
7003 NT%=0:FOR I=0 TO 5:NT%=NT%+T%(0,I):NEXT I
7010 CLS:COLOR 9,7
7020 PLAY"MBCDEFAB"
7030 LOCATE 4,11:PRINT " CONGRATULATIONS! "
7050 LOCATE 8,5:PRINT" YOU HAVE WON THE BATTLE.."
7060 LOCATE 10,5:PRINT NT%;" IBM LOCATIONS REMAIN"
7070 SC=SC+50:IF SC>HSC THEN HSC=SC
7080 LOCATE 12,5:PRINT "YOUR SCORE IS :";SC
7090 LOCATE 13,5:PRINT"THE HIGHEST SCORE IS:";HSC;" POINTS"
7100 LOCATE 20,5:PRINT"DO YOU WISH TO PLAY AGAIN (Y/N)"
7110 K$=INKEY$:IF K$="" THEN 7110
7120 IF K$="N" OR K$="n" THEN CLS:END
7130 IF K$="y" OR K$="Y" THEN 7200
7140 GOTO 7110
7200 LOCATE 20,5:PRINT" CHANGE YOU WARHEAD SIZE? (Y/N)     "
7210 K$=INKEY$:IF K$="n" OR K$="N" THEN GOTO 10
7220 IF K$="y" OR K$="Y" THEN GOSUB 6000:GOTO 10
7230 GOTO 7210
7500 END
10000 ' DEBUG ROUTINES
10010 CLS:FOR N=0 TO 15
10020 PRINT
10030 FOR I=0 TO 6
10040 PRINT "  ";M(I,N);
10050 NEXT I
10060 NEXT N
10070 END
65000 ' COLOR MONITOR-MONOCHROME MONITOR SWITCH    EMD 11-81
65001 CLS
65002 PRINT:PRINT"IF YOU WANT TO TOGGLE MONOCHROME/COLOR  THEN;"
65003 PRINT"   FOR COLOR PRESS - C"
65004 PRINT"   FOR MONO  PRESS - M"
65005 PRINT"   FOR NO CHANGE PRESS ANY OTHER KEY."
65006 K$=INKEY$:IF K$="" GOTO 65006
65007 IF K$="C" OR K$="c" THEN GOSUB 65019:END
65008 IF K$="M" OR K$="m" THEN GOSUB 65011:END
65009 CLS
65010 PRINT"@@@@@@@@@@@@    NO CHANGE   @@@@@@@@@@@@@@":END
65011 REM switch to monochrome adapter
65012 DEF SEG=0
65013 POKE &H410,(PEEK(&H410) OR &H30)
65014 DEF SEG
65015 LOCATE ,,1,12,13
65016 SCREEN 0
65017 WIDTH 80
65018 RETURN
65019 REM switch to color/graphics adapter
65020 DEF SEG=0
65021 POKE &H410,(PEEK(&H410) AND &HCF) OR &H20
65022 DEF SEG
65023 LOCATE ,,1,6,7
65024 SCREEN 0
65025 WIDTH 40
65026 RETURN
```

## DISPLAY.BAS

```bas
9000 INPUT;"COLOR OR MONOCHROME";A$
9010 IF "C" = LEFT$(A$,1) OR "c" = LEFT$(A$,1) THEN GOSUB 9500:END
9020 IF "M" = LEFT$(A$,1) OR "m" = LEFT$(A$,1) THEN GOSUB 9600:END
9030 PRINT " ":GOTO 9000
9500 REM switch to color/graphics adapter
9510 DEF SEG=0
9520 POKE &H410,(PEEK(&H410) AND &HCF) OR &H20
9530 DEF SEG
9540 LOCATE ,,1,6,7
9550 SCREEN 0
9560 WIDTH 40
9570 RETURN
9600 REM switch to monochrome adapter
9610 DEF SEG=0
9620 POKE &H410,(PEEK(&H410) OR &H30)
9630 DEF SEG
9640 LOCATE ,,1,12,13
9650 SCREEN 0
9660 WIDTH 80
9670 RETURN
```

## GRAPH1.BAS

```bas
2 REM    ****************************************************************
3 REM    **                                                            **
4 REM    **    THE PURPOSE OF THIS PROGRAM IS TO ALLOW THE CREATION    **
5 REM    **    OF GRAPHICS DRAWINGS BY MOVING A DOT CURSOR ON THE      **
6 REM    **    MEDIUM RESOLUTION GRAPHICS SCREEN AND USING THE         **
7 REM    **    DEFINED FUNCTION KEYS TO DRAW LINES, CIRCLES AND TO     **
8 REM    **    PAINT WITHIN DEFINED BOUNDARIES.  THE OPTION TO STORE   **
9 REM    **    THE CREATED SCREENS IS PROVIDED WITH RETRIEVAL FOR      **
10 REM   **    FURTHER EDITING AND STORAGE AVAILABLE.                  **
11 REM   **                                                            **
12 REM   **    AUTHOR: DOUGLAS E. OLUFSEN                              **
13 REM   **    LAST REVISION: DECEMBER 3, 1981                         **
14 REM   **                                                            **
15 REM   ****************************************************************
40 CLS
47 REM ------------------------------------------------------------------------
48 REM  *** DEACTIVATE ALL FUNCTION KEYS  ***
49 KEY OFF
50 KEY 1,"":KEY 2,"":KEY 3,"":KEY 4,"":KEY 5,""
51 KEY 6,"":KEY 7,"":KEY 8,"":KEY 9,"":KEY 10,""
55 DIM POS1(2),POS2(2),POS3(2),POS4(2),POSD(2),BKGND%(93)
56 DIM DTASAVE%(8002)
58 REM ------------------------------------------------------------------------
59 REM  *** CHECK IF PREVIOUSLY STORED SCREEN IS DESIRED ***
60 A$="TESTSCRN"
61 IF "N"=LEFT$(A$,1) OR "n"=LEFT$(A$,1) THEN GOTO 100
62 'PRINT "":INPUT;"ENTER FILE NAME (OR `NONE'): ",A$
63 'IF A$="NONE" OR A$="none" THEN 100
64 ON ERROR GOTO 85:OPEN "R",#1,"SCREENS",128
65 FIELD 1,12 AS NA$,4 AS BKC$,4 AS PAL$,108 AS B$
66 FOR I%=1 TO 9:GET #1,I%
67 IF NA$=LEFT$(A$+SPACE$(12),12) THEN GOTO 70 ELSE NEXT I%
68 PRINT " ":PRINT "FILE SELECTED NOT ON DATA DISK":CLOSE 1:GOTO 62
70 BKC=CVS(BKC$):PAL=CVS(PAL$)
71 CLOSE 1
78 ON ERROR GOTO 0
79 'GOSUB 9100
80 GOSUB 9500
81 SCREEN 1
82 COLOR BKC,PAL
83 DEF SEG =&HB800:BLOAD A$,0:DEF SEG
84 GOTO 200
85 IF ERR=53 AND ERL=66 THEN PRINT "INDEX FILE NOT FOUND - TRY AGAIN.":RESUME 6
86 IF ERR=5 AND ERL=2205 THEN RESUME 2210 ELSE GOTO 9900
98 REM ------------------------------------------------------------------------
99 REM  *** INPUT OF THE BACKGROUND AND PALETTE COLORS FOR NEW SCREEN ***
100 PRINT "":INPUT;"BACKGROUND COLOR NUMBER (0-15;16 FOR LIST): ",BKC
110 IF BKC>=0 AND BKC<=15 THEN 130 ELSE IF BKC=16 THEN 120 ELSE PRINT "  >>> INPUT ERROR <<<":GOTO 100
120 PRINT " "
121 PRINT "COLOR KEY:"
122 PRINT "     0  BLACK           8  GRAY"
123 PRINT "     1  BLUE            9  LIGHT BLUE"
124 PRINT "     2  GREEN          10  LIGHT GREEN"
125 PRINT "     3  CYAN           11  LIGHT CYAN"
126 PRINT "     4  RED            12  LIGHT RED"
127 PRINT "     5  MAGENTA        13  LIGHT MAGENTA"
128 PRINT "     6  BROWN          14  YELLOW"
129 PRINT "     7  WHITE          15  HIGH INTENSITY WHITE":PRINT " ":GOTO 100
130 PRINT " "
131 INPUT "PALETTE GROUP NUMBER (0 OR 1): ",PAL
132 IF PAL=0 OR PAL=1 THEN 154 ELSE PRINT "  >>>INPUT ERROR<<<":GOTO 131
154 GOSUB 9100
155 GOSUB 9500
163 SCREEN 1
164 COLOR BKC,PAL
199 REM ----------------------------------------------------------------------
200 REM ***DEFINE SUBROUTINE LOCATIONS FOR FUNCTION AND CURSOR KEYS***
210 ON KEY (1) GOSUB 1100:ON KEY (2) GOSUB 1200:ON KEY (3) GOSUB 1300
220 ON KEY (4) GOSUB 1400:ON KEY (5) GOSUB 1500:ON KEY (6) GOSUB 1600
230 ON KEY (7) GOSUB 1700:ON KEY (8) GOSUB 1800:ON KEY (9) GOSUB 1900
240 ON KEY(10) GOSUB 2000:ON KEY(11) GOSUB 2100:ON KEY(12) GOSUB 2200
250 ON KEY(13) GOSUB 2300:ON KEY(14) GOSUB 2400:ON PEN GOSUB 2500
259 REM ----------------------------------------------------------------------
260 REM ***ACTIVATE FUNCTION AND CURSOR KEYS AS REQUIRED***
270 KEY (1) ON: KEY (2) OFF: KEY (3) ON: KEY (4) ON: KEY (5) ON
280 KEY (6) ON: KEY (7) OFF: KEY (8) OFF: KEY (9) OFF: KEY(10) OFF
290 KEY(11) ON: KEY(12) ON: KEY(13) ON: KEY(14) ON:PEN ON
299 REM ----------------------------------------------------------------------
300 REM ***INITIALIZE NECESSARY VARIABLES***
310 LASTC=0
320 OPT=0
321 OUT1=0
322 ON ERROR GOTO 86
399 REM ----------------------------------------------------------------------
400 REM ***PLACE CURSOR DOT ON SCREEN AND LOOP UNTIL INTERRUPTED***
410 PSET (POSD(1),POSD(2)),3
420 FOR IX=1 TO 40
421 AA=1+1
422 NEXT
430 PRESET (POSD(1),POSD(2))
440 FOR IX=1 TO 40
441 AA=1+1
442 NEXT
449 IF OUT1=1 THEN PSET(POSD(1),POSD(2)),LASTC:GOSUB 9900
450 GOTO 400
1099 REM ----------------------------------------------------------------------
1100 REM *** KEY F1 ACTIVATED *** START LINE/CIRCLE POINT (POS1) ***
1101 POS1(1)=POSD(1):POS1(2)=POSD(2)
1105 IF OPT=0 THEN OPT=1:GOTO 1110 ELSE IF OPT=2 THEN GOTO 1130 ELSE GOTO 1198
1110 KEY (1) OFF:KEY (3) OFF:KEY (5) OFF:KEY (6) OFF
1120 KEY (2) ON
1130 KEY (1) OFF:KEY (3) OFF:KEY (5) OFF:KEY (6) OFF
1135 KEY (7) ON:KEY (8) ON:KEY (9) ON:KEY (10) ON
1198 RETURN
1199 REM ----------------------------------------------------------------------
1200 REM *** KEY F2 ACTIVATED *** END LINE/CIRCLE POINT (POS2) ***
1205 POS2(1)=POSD(1):POS2(2)=POSD(2)
1210 KEY (2) OFF
1220 KEY (7) ON:KEY (8) ON:KEY (9) ON:KEY (10) ON
1240 RETURN
1299 REM ----------------------------------------------------------------------
1300 REM *** KEY F3 ACTIVATED *** CIRCLE INITIATED - CENTER POINT (POS3) ***
1301 POS3(1)=POSD(1):POS3(2)=POSD(2)
1305 IF OPT=0 THEN OPT=2
1306 IF OPT=3 THEN 1350
1310 KEY (3) OFF:KEY (5) OFF:KEY (6) OFF
1315 GOTO 1398
1350 KEY (3) OFF
1355 KEY (7) ON:KEY (8) ON:KEY (9) ON: KEY (10) ON
1398 RETURN
1399 REM ----------------------------------------------------------------------
1400 REM *** KEY F4 ACTIVATED *** ABORT CURRENT DRAWING ***
1401 REM ***REINITIALIZE FUNCTION AND CURSOR KEYS ACTIVATION***
1410 KEY (1) ON: KEY (2) OFF: KEY (3) ON: KEY (4) ON: KEY (5) ON
1420 KEY (6) ON: KEY (7) OFF: KEY (8) OFF: KEY (9) OFF: KEY(10) OFF
1430 KEY(11) ON: KEY(12) ON: KEY(13) ON: KEY(14) ON
1440 OPT=0
1450 POS1(1)=0:POS1(2)=0:POS2(1)=0:POS2(2)=0:POS3(1)=0:POS3(2)=0
1498 RETURN
1499 REM ----------------------------------------------------------------------
1500 REM *** KEY F5 ACTIVATED *** INITIATE PAINT FUNCTION ***
1505 KEY (1) OFF:KEY (3) OFF:KEY (6) OFF
1510 KEY (7) ON:KEY (8) ON:KEY (9) ON: KEY (10) ON
1511 IF OPT=3 THEN GET(0,0)-(103,6),BKGND%:GOTO 1512 ELSE GOTO 1530
1512 KEY (5) OFF:KEY (7) OFF:KEY (8) OFF:KEY (9) OFF:KEY (10) OFF
1513 LOCATE 1,1:INPUT;"BACKGROUND:",BKC
1514 PUT (0,0),BKGND%,PSET
1515 IF BKC>=0 AND BKC<=15 THEN GOTO 1516 ELSE GOTO 1513
1516 LOCATE 1,1:INPUT;"PALETTE:",PAL
1517 PUT (0,0),BKGND%,PSET
1518 IF PAL>=0 AND PAL<=1 THEN GOTO 1519 ELSE GOTO 1516
1519 IF COLR1>=0 AND COLR1<=15 THEN COLOR BKC,PAL ELSE GOTO 1598
1524 GOSUB 1400
1525 GOTO 1598
1530 OPT=3
1531 POS1(1)=POSD(1):POS1(2)=POSD(2)
1598 RETURN
1599 REM ----------------------------------------------------------------------
1600 REM *** KEY F6 ACTIVATED *** END DRAWING AND STORE SCREEN ***
1601 PSET (POSD(1),POSD(2)),LASTC
1605 GOTO 9900
1698 OUT1=1:RETURN 449
1699 REM ----------------------------------------------------------------------
1700 REM *** KEY F7 ACTIVATED *** SELECT COLOR 0 (BACKGROUND) ***
1705 IF OPT=4 THEN COLR2=0:GOSUB 3000 ELSE COLR1=0:GOSUB 3000
1798 RETURN
1799 REM ----------------------------------------------------------------------
1800 REM *** KEY F8 ACTIVATED *** SELECT COLOR 1 (PALETTE) ***
1805 IF OPT=4 THEN COLR2=1:GOSUB 3000 ELSE COLR1=1:GOSUB 3000
1898 RETURN
1899 REM ----------------------------------------------------------------------
1900 REM *** KEY F9 ACTIVATED *** SELECT COLOR 2 (PALETTE) ***
1905 IF OPT=4 THEN COLR2=2:GOSUB 3000 ELSE COLR1=2:GOSUB 3000
1998 RETURN
1999 REM ----------------------------------------------------------------------
2000 REM *** KEY F10 ACTIVATED *** SELECT COLOR 3 (PALETTE) ***
2005 IF OPT=4 THEN COLR2=3:GOSUB 3000 ELSE COLR1=3:GOSUB 3000
2098 RETURN
2099 REM ----------------------------------------------------------------------
2100 REM *** CURSOR MOVEMENT UP DETECTED ***
2105 PSET (POSD(1),POSD(2)),3
2110 IF POSD(2)=0 THEN BEEP:GOTO 2198
2115 PRESET (POSD(1),POSD(2)),LASTC
2120 POSD(2)=POSD(2)-1
2125 LASTC=POINT(POSD(1),POSD(2))
2198 RETURN
2199 REM ----------------------------------------------------------------------
2200 REM *** CURSOR MOVEMENT LEFT DETECTED ***
2205 PSET (POSD(1),POSD(2)),3
2210 IF POSD(1)=0 THEN BEEP:GOTO 2298
2215 PRESET (POSD(1),POSD(2)),LASTC
2220 POSD(1)=POSD(1)-1
2225 LASTC=POINT(POSD(1),POSD(2))
2298 RETURN
2299 REM ----------------------------------------------------------------------
2300 REM *** CURSOR MOVEMENT RIGHT DETECTED ***
2305 PSET (POSD(1),POSD(2)),3
2310 IF POSD(1)=319 THEN BEEP:GOTO 2398
2315 PRESET (POSD(1),POSD(2)),LASTC
2320 POSD(1)=POSD(1)+1
2325 LASTC=POINT(POSD(1),POSD(2))
2398 RETURN
2399 REM ----------------------------------------------------------------------
2400 REM *** CURSOR MOVEMENT DOWN DETECTED ***
2405 PSET (POSD(1),POSD(2)),3
2410 IF POSD(2)=199 THEN BEEP:GOTO 2498
2415 PRESET (POSD(1),POSD(2)),LASTC
2420 POSD(2)=POSD(2)+1
2425 LASTC=POINT(POSD(1),POSD(2))
2498 RETURN
2499 REM ----------------------------------------------------------------------
2500 REM *** CURSOR MOVEMENT FROM LIGHT PEN DETECTED ***
2505 PSET (POSD(1),POSD(2)),3
2510 IF PEN(1)<0 OR PEN(1)>319 THEN BEEP:GOTO 2598
2512 IF PEN(2)<0 OR PEN(2)>199 THEN BEEP:GOTO 2598
2515 PRESET (POSD(1),POSD(2)),LASTC
2520 POSD(1)=PEN(1):POSD(2)=PEN(2)
2525 LASTC=POINT(POSD(1),POSD(2))
2598 RETURN
2599 REM ----------------------------------------------------------------------
3000 REM *** DRAW DESIRED FEATURE ***
3005 IF OPT=1 THEN 3010 ELSE IF OPT=2 THEN 3020
3006 IF OPT=3 THEN 3030 ELSE IF OPT=4 THEN 3040 ELSE 3090
3010 LINE (POS1(1),POS1(2))-(POS2(1),POS2(2)),COLR1:GOTO 3090
3020 RAD=(((POS3(1)-POS1(1))^2)+((POS3(2)-POS1(2))^2))^0.5
3021 STRRAD=0:ENDRAD=2*3.141593
3025 CIRCLE(POS3(1),POS3(2)),RAD,COLR1,STRRAD,ENDRAD
3026 LASTC=POINT(POSD(1),POSD(2)):GOTO 3090
3030 OPT=4:GOTO 3099
3040 PSET(POS1(1),POS1(2)),LASTC
3041 PAINT (POS1(1),POS1(2)),COLR1,COLR2:LASTC=COLR1:GOTO 3090
3090 GOSUB 1400
3099 RETURN
9099 REM ----------------------------------------------------------------------
9100 REM *** SUBROUTINE TO LIST ON SCREEN FUNCTION KEY DEFINITIONS ***
9110 CLS
9111 PRINT"FUNCTION KEY DEFINITIONS:
9112 PRINT"  KEY  1: Start LINE Function/CIRCLE Radius Point Defined
9113 PRINT"  KEY  2: End LINE Point Defined
9114 PRINT"  KEY  3: Start CIRCLE Function - Center Point Defined
9115 PRINT"  KEY  4: ABORT Function - RESET To Start New Function
9116 PRINT"  KEY  5: Start PAINT Function
9117 PRINT"  KEY  6: END SCREEN SESSION - Option To Store
9118 PRINT"  KEY  7: COLOR 0 Selection (Background) - Complete Function
9119 PRINT"  KEY  8: COLOR 1 Selection (Palette 1)  - Complete Function
9120 PRINT"  KEY  9: COLOR 2 Selection (Palette 2)  - Complete Function
9121 PRINT"  KEY 10: COLOR 3 Selection (Palette 3)  - Complete Function
9122 PRINT" "
9123 PRINT"TYPICAL FUNCTIONS AND FUNCTION KEY ORDER OF EXECUTION
9124 PRINT"   DRAW A LINE:   K1, K2, K7 or K8 or K9 or K10
9125 PRINT" "
9126 PRINT"   DRAW A CIRCLE:  K3, K1, K7 or K8 or K9 or K10
9127 PRINT" "
9128 PRINT"   PAINT WITHIN A BOUNDARY:  K5, K7-K10 (COLOR), K7-K10 (BOUNDARY)
9129 PRINT" "
9130 PRINT"   BACKGROUND/PALETTE SELECTION:  K5, K5, VALUE (0-15), VALUE (0-1)
9131 PRINT" "
9132 PRINT"   DOT CURSOR MOVEMENT WITH CURSOR KEYS ( "+CHR$(27)+" "+CHR$(24)+" "+CHR$(26)+" "+CHR$(25)+" )
9133 RETURN
9299 REM ----------------------------------------------------------------------
9300 REM  *** SUBROUTINE TO STORE SCREEN DATA ON DISKETTE  ***
9301 REM  *** DATA VARIABLES FOR STORAGE:                  ***
9302 REM  ***     `BKC' = BACKGROUND COLOR                 ***
9303 REM  ***     `PAL' = PALETTE CHOSEN                   ***
9309 NA$="NONE"
9310 IF NA$="NONE" OR NA$="none" THEN GOTO 9900
9311 ON ERROR GOTO 0
9320 OPEN "R",#1,"SCREENS",128:IR%=0
9321 FIELD 1,12 AS A$,4 AS BKC$,4 AS PAL$,108 AS B$
9322 FOR I%=1 TO 9:GET #1,I%
9323 IF A$=LEFT$(NA$+SPACE$(12),12) THEN IR%=I%:GOTO 9330 ELSE IF A$=STRING$(12,CHR$(0)) AND IR%=0 THEN IR%=I%
9324 NEXT I%
9325 IF IR%=0 THEN PRINT "DISK IS FULL - REPLACE WITH ANOTHER DISK OR FILENAME":CLOSE 1:GOTO 9300
9326 LSET A$=LEFT$(NA$+SPACE$(12),12):LSET BKC$=MKS$(BKC):LSET PAL$=MKS$(PAL)
9327 PUT #1,IR%:CLOSE 1:GOTO 9340
9330 PRINT " ":INPUT;"FILE ALREADY EXISTS - OVERLAY (Y/N)";B$
9331 IF B$="Y" OR B$="y" THEN GOTO 9326 ELSE CLOSE 1:GOTO 9300
9340 GOSUB 9500:SCREEN 1:COLOR BKC,PAL:PUT (0,0),DTASAVE%
9350 DEF SEG=&HB800:BSAVE NA$,0,&H4000:DEF SEG
9355 GOSUB 9600
9360 PRINT " ":PRINT "FILE ("+NA$+") HAS BEEN STORED."
9370 RETURN
9499 REM ----------------------------------------------------------------------
9500 REM  *** SWITCH TO COLOR/GRAPHICS ADAPTER ***
9501 DEF SEG=0
9502 POKE &H410,(PEEK(&H410) AND &HCF) OR &H20
9503 DEF SEG
9504 LOCATE ,,1,6,7
9505 SCREEN 0
9506 WIDTH 40
9507 KEY OFF
9508 RETURN
9599 REM ----------------------------------------------------------------------
9600 REM  *** SWITCH TO MONOCHROME ADAPTER ***
9601 DEF SEG=0
9602 POKE &H410,(PEEK(&H410) OR &H30)
9603 DEF SEG
9604 LOCATE ,,1,12,13
9605 SCREEN 0
9606 WIDTH 80
9607 RETURN
9799 REM ----------------------------------------------------------------------
9800 REM *** SUBROUTINE TO RE-ESTABLISH ORIGINAL FUNCTIONAL KEY DEFINITIONS ***
9810 'KEY ON
9811 KEY 1,"LIST "
9812 KEY 2,"RUN"+CHR$(13)
9813 KEY 3,"LOAD"+CHR$(34)
9814 KEY 4,"SAVE"+CHR$(34)
9815 KEY 5,"CONT"+CHR$(13)
9816 KEY 6,","+CHR$(34)+"LPT1:"+CHR$(34)+CHR$(13)
9817 KEY 7,"TRON"+CHR$(13)
9818 KEY 8,"TROFF"+CHR$(13)
9819 KEY 9,"KEY "
9820 KEY 10,"SCREEN 0,0,0"+CHR$(13)
9821 RETURN
9899 REM ----------------------------------------------------------------------
9900 GOSUB 9800:CHAIN "A:HAPPYB"
9901 PRINT  "    USE FUNCTION `GRAPHICS' TO RETRIEVE AND EDIT AND SAVE SCREEN."
9903 KEY ON
9904 GOSUB 9800
9905 END
```

## GTEST.BAS

```bas
10 KEY OFF
20 KEY 1,"":KEY 2,"":KEY 3,"":KEY 4,""
30 ON KEY (1) GOSUB 1000:ON KEY (2) GOSUB 2000
40 ON KEY (3) GOSUB 3000:ON KEY (4) GOSUB 4000
50 KEY (1) ON:KEY (2) ON:KEY (3) ON:KEY (4) ON
52 SCREEN 1:GOSUB 900:J=0:CLS
53 FOR X%=1 TO 15:Y$=INKEY$:NEXT X%
54 IF INKEY$="" THEN 54
60 SCREEN 1:GOSUB 900:J=0:CLS
70 FOR I=1 TO 40
80          J=J+1:IF J>23 THEN J=1
90          LOCATE J,I:PRINT CHR$(2)
100          FOR K=1 TO 10:A=1*1:NEXT K
110 NEXT I
120 IF I=41 AND J=23 THEN GOTO 60 ELSE GOTO 70
900 COLOR 0,1:RETURN
1000 COLOR 1,1:RETURN
2000 COLOR 2,1:RETURN
3000 COLOR 4,1:RETURN
4000 COLOR 0,1:RETURN 5000
5000 CLS:CHAIN "A:SATURN"
```

## HAPPYB.BAS

```bas
5 FOR X%=1 TO 15:Y$=INKEY$:NEXT X%
6 IF INKEY$="" THEN 6
10 PLAY "t120 l4 mfmn"
20 PLAY "o4 c8 c8 d c f e2"
30 PLAY "   c8 c8 d c g f2"
40 PLAY "   c8 c8 o5 c o4 a f e d2"
50 PLAY "t90 b-8 b-8 a f g f2"
58 FOR X%=1 TO 15:Y$=INKEY$:NEXT X%
59 IF INKEY$="" THEN 59
60 CHAIN "A:PLOTTER
```

## HEAPSORT.BAS

```bas
100 CLEAR 5000
110 CLS               ' Sort Program     Heap Sort
120 DIM N(150),C$(150)
130 PRINT"type  C  for character string sort"
140 PRINT"Type  N  for numer sort"
150 INPUT W$
160 N=0:PRINT:PRINT
170 IF W$="n" THEN 480                  ' Goto to Number sort
180 IF W$<>"c" THEN 130
190 REM====================  Begin Character Sort
200 GOSUB 720 : INPUT S$
210 N=N+1
220 INPUT C$(N)
230 IF C$(N)<>S$ THEN 210
240 N=N-1:PRINT
250 L=INT(N/2)+1
260 N1=N
270 IF L=1 THEN 310
280 L=L-1
290 A$=C$(L)
300 GOTO 350
310 A$=C$(N1)
320 C$(N1)=C$(1)
330 N1=N1-1
340 IF N1=1 THEN 440
350 J=L
360 I=J
370 J=2*J
380 IF J=N1 THEN 400
390 IF J>N1 THEN 420
392 IF C$(J)=>C$(J+1) THEN 400
396 J=J+1
400 IF A$=>C$(J) THEN 420
410 C$(I)=C$(J)
415 GOTO 360
420 C$(I)=A$
425 GOTO 270
440 C$(1)=A$
450 FOR I=1 TO N
453    PRINT C$(I)
456 NEXT I
460 GOTO 130
470 REM ================  Start of numeric sort
480 GOSUB 720
483 INPUT S
486 PRINT
490 N=N+1
493 INPUT N(N)
496 IF N(N)<>S THEN 490
500 N=N-1
505 PRINT
520 L=INT(N/2)+1
525 N1=N
530 IF L=1 THEN 550
540 L=L-1
543 A=N(L)
546 GOTO 590
550 A=N(N1)
555 N(N1)=N(1)
560 N1=N1-1
570 IF N1=1 THEN 680
590 J= L
600 I=J
605 J=2*J
610 IF J=N1 THEN 640
620 IF J>N1 THEN 660
630 IF N(J)<N(J+1) THEN J=J+1
640 IF A>N(J) THEN 660
650 N(I) = N(J)
655 GOTO 600
660 N(I)=A
665 GOTO 530
680 N(1)=A
690 FOR I=1 TO N
693   PRINT N(I)
696 NEXT I
700 GOTO 130
720 PRINT"Enter a stop code to indicate the end of list"
740 RETURN
```

## IBMCS.BAS

```bas
5 'SAVE "IBMCS"
10 '
12 ' ISDDRIVR - ISD DEMO DRIVER
18 ' AUTHOR - Hal W. Jennings
20 '
22 'DEMO DRIVER
24 '
35 GOSUB 2800  'INIT
40 GOSUB 1000  'DISPLAY NEXT SCREEN
45 IF INKEY$<>"" THEN 45  'CLEAR KEYBOARD BUFFER
50 IF DELAY THEN GOSUB 200 ELSE GOSUB 800  'DELAY/INPUT
55 IF TERM THEN CHAIN "MENU"
60 IF RESTART THEN NXT$=FIRSTPROG$: NMP=0: GOTO 330
65 GOTO 40
200 '
205 'DELAY LOGIC
210 '
215 T!=FNTM!(TIME$)+DSEC: IF T!>86400. THEN T!=DSEC
220 K$=INKEY$: IF K$="" AND T!>FNTM!(TIME$) THEN 220
225 IF K$=BS$ THEN 560    'F9 - BACKUP SCREEN
230 IF K$=BM$ THEN 510    'F10- BACKUP MENU
235 IF K$=TERM$ THEN  460 'CTRL END - TERMINATE
240 IF K$=ID$ THEN GOSUB 940: GOTO 220    'F8 - DISPLAY ID
245 IF K$=HELP$ THEN  GOSUB 970: GOTO 215 'F1 - HELP
250 IF K$=" " THEN 410    'SPACE BAR - PAUSE
255 IF K$<>"" THEN 220    'INVALID KEY - TIME NOT EXPIRED
300 NMP=NMP+1: NM$(NMP)=CSCR$
305 IF NMP>148 THEN I=1:FOR J=30 TO NMP:NM$(I)=NM$(J):I=I+1:NEXT J:NMP=I-1
310 IF LEFT$(NEXTSCR$,1)<>"&" THEN RETURN
315 NXT$=MID$(NEXTSCR$,2): IF NXT$="END" THEN TERM=TRUE: RETURN
320 IF NXT$="RETURN" THEN NEXTSCR$=NM$(NMP-1): NMP=NMP-2: IF LEFT$(NEXTSCR$,1)="," THEN NEXTSCR$=MID$(NEXTSCR$,2): RETURN ELSE RETURN
325 NMP=NMP+1: NM$(NMP)="&"+THISPROG$
330 LOCATE 25,1: COLOR 15,0: PRINT SPC(38);: LOCATE 25,6: PRINT "** PROGRAM ";NXT$;" LOADING **";
335 ON ERROR GOTO 340: CHAIN "A:"+NXT$
340 RESUME 345
345 ON ERROR GOTO 350: CHAIN "B:"+NXT$
350 CLS: LOCATE 10,5: PRINT "PROGRAM ";NXT$;" NOT FOUND": LOCATE 23,5: PRINT "Press any key to end demo"
355 IF INKEY$="" THEN 355 ELSE TERM=-1: GOTO 55
400 '
405 'SPACE BAR (PAUSE)
410 IF INKEY$="" THEN 410 ELSE 300
450 '
455 'CTRL END KEY (EXIT)
460 TERM=TRUE: RETURN
500 '
505 'BACKUP MENU
510 BKUPM=TRUE
515 IF INSTR(",&",LEFT$(NM$(NMP),1))=0 AND NMP>1 THEN NMP=NMP-1: GOTO 515
550 '
555 'BACKUP SCREEN
560 IF NMP<=0 THEN NEXTSCR$=CSCR$ ELSE NEXTSCR$=NM$(NMP):NMP=NMP-1: BKUP=TRUE
565 IF LEFT$(NEXTSCR$,1)="," THEN NEXTSCR$=MID$(NEXTSCR$,2): RETURN
570 IF LEFT$(NEXTSCR$,1)="&" THEN NXT$=MID$(NEXTSCR$,2): GOTO 330
575 RETURN
800 '
805 'INPUT LOGIC
810 '
815 T!=FNTM!(TIME$)+120: IF T!>86499. THEN T!=120
820 K$=INKEY$: IF K$="" AND T!>FNTM!(TIME$) THEN 820
825 IF K$=BS$ THEN 560    'F9 - BACKUP SCREEN
830 IF K$=BM$ THEN 510    'F10- BACKUP MENU
835 IF K$=TERM$ THEN  460 'CTRL END - TERMINATE
840 IF K$=ID$ THEN GOSUB 940: GOTO 820    'F8 - DISPLAY ID
845 IF K$=HELP$ THEN  GOSUB 970: GOTO 800 'F1 - HELP
850 IF (K$=ESC$) AND TIM THEN RESTART=TRUE: RETURN  'ESC KEY WITH TIME LIMIT
855 IF K$="" THEN GOSUB 910: GOTO 820  'TIME EXPIRED
860 S=ASC(K$): IF S>96 AND S<123 THEN K$=CHR$(S-32)
865 ANS=INSTR(BRANCH$,B$+K$): IF ANS=0 THEN ANS=INSTR(BRANCH$,BA$)
870 IF ANS=0 THEN BEEP: GOTO 820
875 I=INSTR(ANS,BRANCH$,D$): J=INSTR(I,BRANCH$,B$): NEXTSCR$=MID$(BRANCH$,I+1,J-I-1): IF INSTR(2,BRANCH$,B$)<LEN(BRANCH$) THEN CSCR$=","+CSCR$
880 GOTO 300
900 '
905 'TIME EXPIRED ON INPUT SCREEN
910 LOCATE 25,1: COLOR 15,0: PRINT" OR PRESS THE 'Esc' KEY TO START OVER ";:T!=86500.: TIM=TRUE: RETURN
930 '
935 'DISPLAY PROGRAM AND SCREEN NAME
940 LOCATE 25,1: COLOR 15,0: PRINT"  PROG=";THISPROG$;"   SCREEN=";CSCR$;"  ";: RETURN
960 '
965 'HELP
970 LOCATE 25,1: COLOR 15,0: PRINT" F9=BACKUP  F10=BACKUP TO PREV. MENU ";: RETURN
1000 '
1002 'PLACE TESTS FOR SCREEN NAMES HERE
1004 '
1006 CSCR$=NEXTSCR$: BKUP=FALSE: BKUPM=FALSE: TIM=FALSE
1010 IF CSCR$="DYINT022" THEN 3000
1020 IF CSCR$="DYINT023" THEN 3072
1030 IF CSCR$="DYINT024" THEN 3138
1040 IF CSCR$="DYINT025" THEN 3207
1050 IF CSCR$="DYINT026" THEN 3276
1060 IF CSCR$="DYINT027" THEN 3345
1070 IF CSCR$="DYINT028" THEN 3411
2700 '
2705 'SCREEN NOT FOUND
2710 '
2715 CLS: LOCATE 10,5: PRINT "SCREEN ";NEXTSCR$;" NOT FOUND": LOCATE 23,5: PRINT "Press any key to end demo"
2720 DELAY=FALSE: BRANCH$="■*$&END■": RETURN
2800 '
2805 'INIT (INITIALIZATION SUBROUTINE)
2810 '
2815 DEFINT A-Z: KEY OFF: SCREEN 0,1,0,0
2820 K$="": B$="■": FALSE=0: TRUE=NOT FALSE: Q$=CHR$(34): ESC$=CHR$(27): TERM=FALSE: RESTART=FALSE: BA$="■*": D$="$"
2825 BS$=CHR$(0)+CHR$(67): BM$=CHR$(0)+CHR$(68): HELP$=CHR$(0)+CHR$(59): TERM$=CHR$(0)+CHR$(117): ID$=CHR$(0)+CHR$(66)
2830 DEF FNTM!(T$)=VAL(LEFT$(T$,2))*3600.+VAL(MID$(T$,4,2))*60.+VAL(RIGHT$(T$,2))
2835 'DISABLE FUNCTION KEYS
2840 FOR I=1 TO 10: KEY I,N$: NEXT
2845 READ FIRSTPROG$,THISPROG$
2850 'SCREEN STACK
2855 COMMON NM$(),NMP,BKUP,BKUPM,IBMBW,NEXTSCR$,NXT$
2860 IF NEXTSCR$="" THEN DIM NM$(150)
2865 IF BKUPM THEN 510 ELSE IF BKUP THEN 560
2870 READ NEXTSCR$  'NAME OF FIRST SCREEN
2875 'TEST FOR IBM B&W DISPLAY
2880 DEF SEG=0:IF (PEEK(&H410) AND &H30)=&H30 THEN IBMBW=TRUE:LOCATE ,,,12,13 ELSE IBMBW=FALSE:LOCATE ,,,6,7
2885 RETURN
2890 'FIRSTPROG$,THISPROG$,NEXTSCR$
2999 DATA IBMDIY,IBMCS,DYINT022
3000 'SAVE "B:DYINT022.ISD",A 'TITLE=PERSONAL SOLUTION
3003 WIDTH 80:COLOR 7,0,0:CLS
3006 COLOR 0,7:LOCATE 1,26:PRINT USING "&";" ┌─────────────────────────┐ ";
3009 LOCATE 2,26:PRINT USING "&";" │ IBM  PERSONAL  SOLUTION │ ";
3012 LOCATE 3,26:PRINT USING "&";" └─────────────────────────┘ ";
3015 COLOR 7,0:LOCATE 5,14:PRINT USING "&";"How do you choose the best computer system for you ?";
3018 COLOR 0,7:LOCATE 7,4:PRINT USING "&";SPACE$(73);
3021 LOCATE 8,4:PRINT USING "&";" Easy to use ?";SPACE$(35);"System Reliability      ";
3024 LOCATE 9,4:PRINT USING "&";SPACE$(22);"Does it fit my needs ?";SPACE$(29);
3027 LOCATE 10,4:PRINT USING "&";SPACE$(73);
3030 LOCATE 11,4:PRINT USING "&";" What applications ?";SPACE$(21);"COMPLETE SOLUTION";SPACE$(15);
3033 LOCATE 12,4:PRINT USING "&";SPACE$(73);
3036 LOCATE 13,4:PRINT USING "&";SPACE$(23);"G";SPACE$(46);"t  ";
3039 LOCATE 14,4:PRINT USING "&";SPACE$(24);"R";SPACE$(45);"r  ";
3042 LOCATE 15,4:PRINT USING "&";" Maintenance";SPACE$(13);"O";SPACE$(44);"a  ";
3045 LOCATE 16,4:PRINT USING "&";SPACE$(26);"W";SPACE$(13);"Documentation";SPACE$(17);"i  ";
3048 LOCATE 17,4:PRINT USING "&";SPACE$(27);"T";SPACE$(42);"n  ";
3051 LOCATE 18,4:PRINT USING "&";SPACE$(28);"H";SPACE$(41);"i  ";
3054 LOCATE 19,4:PRINT USING "&";" Flexibility";SPACE$(58);"n  ";
3057 LOCATE 20,4:PRINT USING "&";SPACE$(39);"Who do I call for help ?       g  ";
3060 LOCATE 21,4:PRINT USING "&";SPACE$(19);"price";SPACE$(49);
3063 LOCATE 22,4:PRINT USING "&";SPACE$(73);
3066 COLOR 15,0:LOCATE 24,1:PRINT USING "&";"Press the Space bar";
3069 LOCATE 2,42,0:DELAY=0:BRANCH$="■*$DYINT023■":RETURN
3072 'SAVE "B:DYINT023.ISD",A 'TITLE=PERSONAL SOLUTION 2
3075 WIDTH 80:COLOR 7,0,0:CLS
3078 COLOR 0,7:LOCATE 1,26:PRINT USING "&";" ┌─────────────────────────┐ ";
3081 LOCATE 2,26:PRINT USING "&";" │ IBM  PERSONAL  SOLUTION │ ";
3084 LOCATE 3,26:PRINT USING "&";" └─────────────────────────┘ ";
3087 COLOR 7,0:LOCATE 5,15:PRINT USING "&";"Let's arrange these ideas in logical groupings.....";
3090 COLOR 0,7:LOCATE 7,4:PRINT USING "&";SPACE$(74);
3093 LOCATE 8,4:PRINT USING "&";"     ──────────────────  IBM  Personal  Computer  ────────────────────    ";
3096 LOCATE 9,4:PRINT USING "&";"   - System reliability";SPACE$(18);"- Memory growth";SPACE$(18);
3099 LOCATE 10,4:PRINT USING "&";"   - System software capabilities        - Storage growth";SPACE$(17);
3102 LOCATE 11,4:PRINT USING "&";"   - Flexible configurations";SPACE$(13);"- Warranty";SPACE$(23);
3105 LOCATE 12,4:PRINT USING "&";"   - Communication facilities            - Portable applications          ";
3108 LOCATE 13,4:PRINT USING "&";"   - Transportable";SPACE$(56);
3111 LOCATE 14,4:PRINT USING "&";"  SUPPORT";SPACE$(31);"APPLICATIONS";SPACE$(22);
3114 LOCATE 15,4:PRINT USING "&";"   - Easy to use publications            - Easy to use and understand     ";
3117 LOCATE 16,4:PRINT USING "&";"   - Local support";SPACE$(23);"- Wide variety to choose from    ";
3120 LOCATE 17,4:PRINT USING "&";"   - Local maintenance";SPACE$(19);"- Demonstratable";SPACE$(17);
3123 LOCATE 18,4:PRINT USING "&";"   - Trained dealers";SPACE$(21);"- Functionally complete          ";
3126 LOCATE 19,4:PRINT USING "&";"   - Supplies";SPACE$(61);
3129 LOCATE 20,4:PRINT USING "&";SPACE$(74);
3132 COLOR 15,0:LOCATE 24,1:PRINT USING "&";"Press the Space bar";
3135 LOCATE 2,42,0:DELAY=0:BRANCH$="■*$DYINT024■":RETURN
3138 'SAVE "B:DYINT024.ISD",A 'TITLE=PERSONAL COMPUTER
3141 WIDTH 80:COLOR 7,0,0:CLS
3144 COLOR 0,7:LOCATE 1,27:PRINT USING "&";" ┌─────────────────────────┐ ";
3147 LOCATE 2,27:PRINT USING "&";" │ IBM  PERSONAL  SOLUTION │ ";
3150 LOCATE 3,27:PRINT USING "&";" └─────────────────────────┘ ";
3153 COLOR 7,0:LOCATE 5,29:PRINT USING "&";"* IBM Personal Computer *";
3156 COLOR 0,7:LOCATE 7,3:PRINT USING "&";SPACE$(76);
3159 LOCATE 8,3:PRINT USING "&";" SYSTEM RELIABILITY:           Tested and proven components mean minimum    ";
3162 LOCATE 9,3:PRINT USING "&";SPACE$(33);"";Q$;"down time";Q$;" and service calls.";SPACE$(13);
3165 LOCATE 10,3:PRINT USING "&";SPACE$(76);
3168 LOCATE 11,3:PRINT USING "&";" SYSTEM SOFTWARE CAPABILITIES: High function languages to help you satisfy  ";
3171 LOCATE 12,3:PRINT USING "&";SPACE$(33);"your business and personal requirements.   ";
3174 LOCATE 13,3:PRINT USING "&";SPACE$(76);
3177 LOCATE 14,3:PRINT USING "&";" FLEXIBLE CONFIGURATIONS:      Allow you to ";Q$;"grow";Q$;" your system as your      ";
3180 LOCATE 15,3:PRINT USING "&";SPACE$(33);"requirements grow.";SPACE$(25);
3183 LOCATE 16,3:PRINT USING "&";SPACE$(76);
3186 LOCATE 17,3:PRINT USING "&";" COMMUNICATION FACILITIES:     Large computer system capability is          ";
3189 LOCATE 18,3:PRINT USING "&";SPACE$(33);"available through telecommunications.      ";
3192 LOCATE 19,3:PRINT USING "&";SPACE$(76);
3195 LOCATE 20,3:PRINT USING "&";" TRANSPORTABLE:";SPACE$(16);"For use in your home and office.";SPACE$(13);
3198 LOCATE 21,3:PRINT USING "&";SPACE$(76);
3201 COLOR 15,0:LOCATE 24,1:PRINT USING "&";"Press the Space bar";
3204 LOCATE 2,43,0:DELAY=0:BRANCH$="■*$DYINT025■":RETURN
3207 'SAVE "B:DYINT025.ISD",A 'TITLE=IBM Personal 2
3210 WIDTH 80:COLOR 7,0,0:CLS
3213 COLOR 0,7:LOCATE 1,27:PRINT USING "&";" ┌─────────────────────────┐ ";
3216 LOCATE 2,27:PRINT USING "&";" │ IBM  PERSONAL  SOLUTION │ ";
3219 LOCATE 3,27:PRINT USING "&";" └─────────────────────────┘ ";
3222 COLOR 7,0:LOCATE 5,29:PRINT USING "&";"* IBM Personal Computer *";
3225 COLOR 0,7:LOCATE 7,3:PRINT USING "&";SPACE$(76);
3228 LOCATE 8,3:PRINT USING "&";" MEMORY GROWTH:        From 16,000 to 256,000 positions of memory allow you ";
3231 LOCATE 9,3:PRINT USING "&";SPACE$(25);"to increase the performance and complexity of your ";
3234 LOCATE 10,3:PRINT USING "&";SPACE$(25);"system.";SPACE$(44);
3237 LOCATE 11,3:PRINT USING "&";SPACE$(76);
3240 LOCATE 12,3:PRINT USING "&";" STORAGE GROWTH:       From a tape cassette up to 2 diskette drives allows  ";
3243 LOCATE 13,3:PRINT USING "&";SPACE$(25);"you to increase your data storage capacity as your ";
3246 LOCATE 14,3:PRINT USING "&";SPACE$(25);"needs grow.";SPACE$(40);
3249 LOCATE 15,3:PRINT USING "&";SPACE$(76);
3252 LOCATE 16,3:PRINT USING "&";" WARRANTY:";SPACE$(13);"90 days on parts and labor.";SPACE$(26);
3255 LOCATE 17,3:PRINT USING "&";SPACE$(76);
3258 LOCATE 18,3:PRINT USING "&";" PORTABLE APPLICATIONS:Enhanced industry standard languages and high        ";
3261 LOCATE 19,3:PRINT USING "&";SPACE$(25);"function applications protect your software        ";
3264 LOCATE 20,3:PRINT USING "&";SPACE$(25);"investment.";SPACE$(40);
3267 LOCATE 21,3:PRINT USING "&";SPACE$(76);
3270 COLOR 15,0:LOCATE 24,1:PRINT USING "&";"Press the Space bar";
3273 LOCATE 2,43,0:DELAY=0:BRANCH$="■*$DYINT026■":RETURN
3276 'SAVE "B:DYINT026.ISD",A 'TITLE=SUPPORT
3279 WIDTH 80:COLOR 7,0,0:CLS
3282 COLOR 0,7:LOCATE 1,28:PRINT USING "&";" ┌───────────────────────┐ ";
3285 LOCATE 2,28:PRINT USING "&";" │ IBM PERSONAL SOLUTION │ ";
3288 LOCATE 3,28:PRINT USING "&";" └───────────────────────┘ ";
3291 COLOR 7,0:LOCATE 5,36:PRINT USING "&";"* SUPPORT *";
3294 COLOR 0,7:LOCATE 7,4:PRINT USING "&";SPACE$(74);
3297 LOCATE 8,4:PRINT USING "&";"  EASY TO USE PUBLICATIONS:        Allow you to get started on your       ";
3300 LOCATE 9,4:PRINT USING "&";SPACE$(38);"applications quickly.";SPACE$(15);
3303 LOCATE 10,4:PRINT USING "&";SPACE$(74);
3306 LOCATE 11,4:PRINT USING "&";"  LOCAL SUPPORT:";SPACE$(19);"Guidance and assistance is readily     ";
3309 LOCATE 12,4:PRINT USING "&";SPACE$(38);"available from your dealer.         ";
3312 LOCATE 13,4:PRINT USING "&";SPACE$(74);
3315 LOCATE 14,4:PRINT USING "&";"  LOCAL MAINTENANCE:";SPACE$(15);"At your dealer or on-site from IBM.    ";
3318 LOCATE 15,4:PRINT USING "&";SPACE$(74);
3321 LOCATE 16,4:PRINT USING "&";SPACE$(74);
3324 LOCATE 17,4:PRINT USING "&";"  TRAINED DEALERS:";SPACE$(17);"To help you assess your needs and      ";
3327 LOCATE 18,4:PRINT USING "&";SPACE$(38);"answer your questions.";SPACE$(14);
3330 LOCATE 19,4:PRINT USING "&";SPACE$(74);
3333 LOCATE 20,4:PRINT USING "&";"  SUPPLIES:";SPACE$(24);"Available locally at your dealer.      ";
3336 LOCATE 21,4:PRINT USING "&";SPACE$(74);
3339 COLOR 15,0:LOCATE 24,1:PRINT USING "&";"Press the Space bar";
3342 LOCATE 12,69,0:DELAY=0:BRANCH$="■*$DYINT027■":RETURN
3345 'SAVE "B:DYINT027.ISD",A 'TITLE=APPLICATIONS
3348 WIDTH 80:COLOR 7,0,0:CLS
3351 COLOR 0,7:LOCATE 1,26:PRINT USING "&";" ┌─────────────────────────┐ ";
3354 LOCATE 2,26:PRINT USING "&";" │ IBM  PERSONAL  SOLUTION │ ";
3357 LOCATE 3,26:PRINT USING "&";" └─────────────────────────┘ ";
3360 COLOR 7,0:LOCATE 5,32:PRINT USING "&";"* APPLICATIONS *";
3363 COLOR 0,7:LOCATE 7,3:PRINT USING "&";SPACE$(76);
3366 LOCATE 8,3:PRINT USING "&";"  EASY TO USE AND UNDERSTAND:   Minimizes the time and expense to get       ";
3369 LOCATE 9,3:PRINT USING "&";SPACE$(35);"started. Realize benefits sooner.        ";
3372 LOCATE 10,3:PRINT USING "&";SPACE$(76);
3375 LOCATE 11,3:PRINT USING "&";"  WIDE VARIETY TO CHOOSE FROM:  Helps you fulfill your special requirements ";
3378 LOCATE 12,3:PRINT USING "&";SPACE$(35);"for applications.";SPACE$(24);
3381 LOCATE 13,3:PRINT USING "&";SPACE$(76);
3384 LOCATE 14,3:PRINT USING "&";"  DEMONSTRATABLE:";SPACE$(15);"Ask your dealer for a demonstration of the  ";
3387 LOCATE 15,3:PRINT USING "&";SPACE$(35);"applications.";SPACE$(28);
3390 LOCATE 16,3:PRINT USING "&";SPACE$(76);
3393 LOCATE 17,3:PRINT USING "&";"  FUNCTIONALLY COMPLETE:        Satisfy the standard requirements for       ";
3396 LOCATE 18,3:PRINT USING "&";SPACE$(35);"applications, plus additional            ";
3399 LOCATE 19,3:PRINT USING "&";SPACE$(35);"enhancements.";SPACE$(28);
3402 LOCATE 20,3:PRINT USING "&";SPACE$(76);
3405 COLOR 15,0:LOCATE 24,1:PRINT USING "&";"Press the Space bar";
3408 LOCATE 2,42,0:DELAY=0:BRANCH$="■*$DYINT028■":RETURN
3411 'SAVE "B:DYINT028.ISD",A 'TITLE=IBM COMP SOL:GRAPHIC
3414 WIDTH 80:COLOR 7,0,0:CLS
3417 COLOR 0,7:LOCATE 1,25:PRINT USING "&";" ┌─────────────────────────┐ ";
3420 LOCATE 2,25:PRINT USING "&";" │ IBM  PERSONAL  SOLUTION │ ";
3423 LOCATE 3,25:PRINT USING "&";" └─────────────────────────┘ ";
3426 COLOR 7,0:LOCATE 5,25:PRINT USING "&";"┌────────┐          ┌───────┐";:LOCATE 6,23:PRINT USING "&";"┌─┤███████ ├─┐        │       │";:LOCATE 7,23:PRINT USING "&";"│ │███████:│ │      ┌┬┤       ├┬┐";:LOCATE 8,23:PRINT USING "&";"│";
3429 PRINT USING "&";" └────────┘ │      │ ";
3432 COLOR 0,7:PRINT USING "&";"╞_______╡";
3435 COLOR 7,0:PRINT USING "&";" ╞▌";:LOCATE 9,23:PRINT USING "&";"├────────────┤      │ █████████░│";:LOCATE 10,23:PRINT USING "&";"│IBM ████████│      ├───────────┤";:LOCATE 11,23:PRINT USING "&";"└";
3438 PRINT USING "&";"┬──────────┬┘      └───────────┘";:LOCATE 12,24:PRINT USING "&";"╡░░░░░░░░░░╞";:LOCATE 13,24:PRINT USING "&";"└──═════───┘";
3441 COLOR 15,0:LOCATE 14,30:PRINT USING "&";"IBM Personal Computer";
3444 COLOR 7,0:LOCATE 15,13:PRINT USING "&";"@@@@@@@@@";:LOCATE 15,62:PRINT USING "&";"╒═══════════╗";:LOCATE 16,11:PRINT USING "&";"@@@@@@@@@@@";:LOCATE 16,48:PRINT USING "&";"┌─────────┐   │ Reference ║";:LOCATE 17,11:PRINT USING "&";"`";
3447 PRINT USING "&";" o   o  @@";:LOCATE 17,48:PRINT USING "&";"├─────────┤   │ Manual    ║";:LOCATE 18,11:PRINT USING "&";"`   u    @@@";:LOCATE 18,48:PRINT USING "&";"│    o    │   │";
3450 PRINT USING "&";"           ║";:LOCATE 19,11:PRINT USING "&";"`  ---'   @@@";:LOCATE 19,48:PRINT USING "&";"│    0    │   │           ║";:LOCATE 20,12:PRINT USING "&";"` - - -'";:LOCATE 20,48:PRINT USING "&";"└";
3453 PRINT USING "&";"─────────┘   └───────────╜";
3456 COLOR 15,0:LOCATE 22,13:PRINT USING "&";"Support";
3459 LOCATE 22,54:PRINT USING "&";"Applications";
3462 LOCATE 24,1:PRINT USING "&";"Press the Space bar";
3465 LOCATE 14,44,0:DELAY=0:BRANCH$="■*$&IBMDIY■":RETURN
```

## IBMDIY.BAS

```bas
5 'SAVE "IBMDIY"
10 '
12 ' ISDDRIVR - ISD DEMO DRIVER
18 ' AUTHOR - Hal W. Jennings
20 '
22 'DEMO DRIVER
24 '
35 GOSUB 2800  'INIT
40 GOSUB 1000  'DISPLAY NEXT SCREEN
45 IF INKEY$<>"" THEN 45  'CLEAR KEYBOARD BUFFER
50 IF DELAY THEN GOSUB 200 ELSE GOSUB 800  'DELAY/INPUT
55 IF TERM THEN CHAIN "MENU"
60 IF RESTART THEN NXT$=FIRSTPROG$: NMP=0: GOTO 330
65 GOTO 40
200 '
205 'DELAY LOGIC
210 '
215 T!=FNTM!(TIME$)+DSEC: IF T!>86400. THEN T!=DSEC
220 K$=INKEY$: IF K$="" AND T!>FNTM!(TIME$) THEN 220
225 IF K$=BS$ THEN 560    'F9 - BACKUP SCREEN
230 IF K$=BM$ THEN 510    'F10- BACKUP MENU
235 IF K$=TERM$ THEN  460 'CTRL END - TERMINATE
240 IF K$=ID$ THEN GOSUB 940: GOTO 220    'F8 - DISPLAY ID
245 IF K$=HELP$ THEN  GOSUB 970: GOTO 215 'F1 - HELP
250 IF K$=" " THEN 410    'SPACE BAR - PAUSE
255 IF K$<>"" THEN 220    'INVALID KEY - TIME NOT EXPIRED
300 NMP=NMP+1: NM$(NMP)=CSCR$
305 IF NMP>148 THEN I=1:FOR J=30 TO NMP:NM$(I)=NM$(J):I=I+1:NEXT J:NMP=I-1
310 IF LEFT$(NEXTSCR$,1)<>"&" THEN RETURN
315 NXT$=MID$(NEXTSCR$,2): IF NXT$="END" THEN TERM=TRUE: RETURN
320 IF NXT$="RETURN" THEN NEXTSCR$=NM$(NMP-1): NMP=NMP-2: IF LEFT$(NEXTSCR$,1)="," THEN NEXTSCR$=MID$(NEXTSCR$,2): RETURN ELSE RETURN
325 NMP=NMP+1: NM$(NMP)="&"+THISPROG$
330 LOCATE 25,1: COLOR 15,0: PRINT SPC(38);: LOCATE 25,6: PRINT "** PROGRAM ";NXT$;" LOADING **";
335 ON ERROR GOTO 340: CHAIN "A:"+NXT$
340 RESUME 345
345 ON ERROR GOTO 350: CHAIN "B:"+NXT$
350 CLS: LOCATE 10,5: PRINT "PROGRAM ";NXT$;" NOT FOUND": LOCATE 23,5: PRINT "Press any key to end demo"
355 IF INKEY$="" THEN 355 ELSE TERM=-1: GOTO 55
400 '
405 'SPACE BAR (PAUSE)
410 IF INKEY$="" THEN 410 ELSE 300
450 '
455 'CTRL END KEY (EXIT)
460 TERM=TRUE: RETURN
500 '
505 'BACKUP MENU
510 BKUPM=TRUE
515 IF INSTR(",&",LEFT$(NM$(NMP),1))=0 AND NMP>1 THEN NMP=NMP-1: GOTO 515
550 '
555 'BACKUP SCREEN
560 IF NMP<=0 THEN NEXTSCR$=CSCR$ ELSE NEXTSCR$=NM$(NMP):NMP=NMP-1: BKUP=TRUE
565 IF LEFT$(NEXTSCR$,1)="," THEN NEXTSCR$=MID$(NEXTSCR$,2): RETURN
570 IF LEFT$(NEXTSCR$,1)="&" THEN NXT$=MID$(NEXTSCR$,2): GOTO 330
575 RETURN
800 '
805 'INPUT LOGIC
810 '
815 T!=FNTM!(TIME$)+120: IF T!>86499. THEN T!=120
820 K$=INKEY$: IF K$="" AND T!>FNTM!(TIME$) THEN 820
825 IF K$=BS$ THEN 560    'F9 - BACKUP SCREEN
830 IF K$=BM$ THEN 510    'F10- BACKUP MENU
835 IF K$=TERM$ THEN  460 'CTRL END - TERMINATE
840 IF K$=ID$ THEN GOSUB 940: GOTO 820    'F8 - DISPLAY ID
845 IF K$=HELP$ THEN  GOSUB 970: GOTO 800 'F1 - HELP
850 IF (K$=ESC$) AND TIM THEN RESTART=TRUE: RETURN  'ESC KEY WITH TIME LIMIT
855 IF K$="" THEN GOSUB 910: GOTO 820  'TIME EXPIRED
860 S=ASC(K$): IF S>96 AND S<123 THEN K$=CHR$(S-32)
865 ANS=INSTR(BRANCH$,B$+K$): IF ANS=0 THEN ANS=INSTR(BRANCH$,BA$)
870 IF ANS=0 THEN BEEP: GOTO 820
875 I=INSTR(ANS,BRANCH$,D$): J=INSTR(I,BRANCH$,B$): NEXTSCR$=MID$(BRANCH$,I+1,J-I-1): IF INSTR(2,BRANCH$,B$)<LEN(BRANCH$) THEN CSCR$=","+CSCR$
880 GOTO 300
900 '
905 'TIME EXPIRED ON INPUT SCREEN
910 LOCATE 25,1: COLOR 15,0: PRINT" OR PRESS THE 'Esc' KEY TO START OVER ";:T!=86500.: TIM=TRUE: RETURN
930 '
935 'DISPLAY PROGRAM AND SCREEN NAME
940 LOCATE 25,1: COLOR 15,0: PRINT"  PROG=";THISPROG$;"   SCREEN=";CSCR$;"  ";: RETURN
960 '
965 'HELP
970 LOCATE 25,1: COLOR 15,0: PRINT" F9=BACKUP  F10=BACKUP TO PREV. MENU ";: RETURN
1000 '
1002 'PLACE TESTS FOR SCREEN NAMES HERE
1004 '
1006 CSCR$=NEXTSCR$: BKUP=FALSE: BKUPM=FALSE: TIM=FALSE
1010 IF CSCR$="DYINT001" THEN 3000
1020 IF CSCR$="DYINT999" THEN 3051
1030 IF CSCR$="DYINT002" THEN 3066
1040 IF CSCR$="DYINT003" THEN 3120
1050 IF CSCR$="DYINT004" THEN 3156
1060 IF CSCR$="DYINT005" THEN 3210
1070 IF CSCR$="DYINT007" THEN 3303
1080 IF CSCR$="DYINT006" THEN 3378
1090 IF CSCR$="DYINT008" THEN 3480
1100 IF CSCR$="DYINT009" THEN 3606
1110 IF CSCR$="DYINT010" THEN 3651
1120 IF CSCR$="DYINT011" THEN 3753
1130 IF CSCR$="DYINT012" THEN 3885
2700 '
2705 'SCREEN NOT FOUND
2710 '
2715 CLS: LOCATE 10,5: PRINT "SCREEN ";NEXTSCR$;" NOT FOUND": LOCATE 23,5: PRINT "Press any key to end demo"
2720 DELAY=FALSE: BRANCH$="■*$&END■": RETURN
2800 '
2805 'INIT (INITIALIZATION SUBROUTINE)
2810 '
2815 DEFINT A-Z: KEY OFF: SCREEN 0,1,0,0
2820 K$="": B$="■": FALSE=0: TRUE=NOT FALSE: Q$=CHR$(34): ESC$=CHR$(27): TERM=FALSE: RESTART=FALSE: BA$="■*": D$="$"
2825 BS$=CHR$(0)+CHR$(67): BM$=CHR$(0)+CHR$(68): HELP$=CHR$(0)+CHR$(59): TERM$=CHR$(0)+CHR$(117): ID$=CHR$(0)+CHR$(66)
2830 DEF FNTM!(T$)=VAL(LEFT$(T$,2))*3600.+VAL(MID$(T$,4,2))*60.+VAL(RIGHT$(T$,2))
2835 'DISABLE FUNCTION KEYS
2840 FOR I=1 TO 10: KEY I,N$: NEXT
2845 READ FIRSTPROG$,THISPROG$
2850 'SCREEN STACK
2855 COMMON NM$(),NMP,BKUP,BKUPM,IBMBW,NEXTSCR$,NXT$
2860 IF NEXTSCR$="" THEN DIM NM$(150)
2865 IF BKUPM THEN 510 ELSE IF BKUP THEN 560
2870 READ NEXTSCR$  'NAME OF FIRST SCREEN
2875 'TEST FOR IBM B&W DISPLAY
2880 DEF SEG=0:IF (PEEK(&H410) AND &H30)=&H30 THEN IBMBW=TRUE:LOCATE ,,,12,13 ELSE IBMBW=FALSE:LOCATE ,,,6,7
2885 RETURN
2890 'FIRSTPROG$,THISPROG$,NEXTSCR$
2999 DATA IBMDIY,IBMDIY,DYINT001
3000 'SAVE "B:DYINT001.ISD",A 'TITLE=MENU
3003 WIDTH 40:COLOR 7,0,0:CLS
3006 IF IBMBW THEN OUT 948,2:OUT 949,62
3009 COLOR 0,7:LOCATE 1,5:PRINT USING "&";"┌──────────────────────────────┐";
3012 LOCATE 2,5:PRINT USING "&";"│    IBM Personal Computer     │";
3015 LOCATE 3,5:PRINT USING "&";"│ Do-It-Yourself Demonstration │";
3018 LOCATE 4,5:PRINT USING "&";"└──────────────────────────────┘";
3021 COLOR 7,0:LOCATE 8,2:PRINT USING "&";"Learn about the ";
3024 COLOR 9,0:PRINT USING "&";"IBM Personal Computer";
3027 COLOR 7,0:PRINT USING "&";"          and it's ";
3030 COLOR 9,0:PRINT USING "&";"ease of use.";
3033 COLOR 15,0:LOCATE 13,7:PRINT USING "&";"1.";
3036 COLOR 7,0:PRINT USING "&";" Introduction to computers";
3039 COLOR 15,0:LOCATE 15,7:PRINT USING "&";"2.";
3042 COLOR 7,0:PRINT USING "&";" IBM Personal Solution";
3045 COLOR 15,0:LOCATE 22,5:PRINT USING "&";"Press the number of your choice";
3048 LOCATE 15,7,0:DELAY=0:BRANCH$="■1$DYINT002■2$&IBMCS■3$DYINT999■":RETURN
3051 'SAVE "B:DYINT999.ISD",A 'TITLE=OPTION 3 - NOT YET
3054 WIDTH 40:COLOR 7,0,0:CLS
3057 IF IBMBW THEN OUT 948,2:OUT 949,62
3060 LOCATE 4,10:PRINT USING "&";"Option 3 has not been";:LOCATE 6,13:PRINT USING "&";"implemented yet.";:LOCATE 24,1:PRINT USING "&";"Press the Space bar";
3063 LOCATE 24,18,0:DELAY=0:BRANCH$="■*$&RETURN■":RETURN
3066 'SAVE "B:DYINT002.ISD",A 'TITLE=INTRODUCTION
3069 WIDTH 80:COLOR 7,0,0:CLS
3072 COLOR 0,7:LOCATE 1,21:PRINT USING "&";" ┌─────────────────────────────┐ ";
3075 LOCATE 2,21:PRINT USING "&";" │ INTRODUCTION  TO  COMPUTERS │ ";
3078 LOCATE 3,21:PRINT USING "&";" └─────────────────────────────┘ ";
3081 COLOR 7,0:LOCATE 5,29:PRINT USING "&";"This section will:";:LOCATE 6,4:PRINT USING "&";"┌───────────╖";:LOCATE 7,4:PRINT USING "&";"│           ║          <--- ";
3084 COLOR 15,0:PRINT USING "&";"Define terms";
3087 COLOR 7,0:PRINT USING "&";" commonly used in understanding         │Dictionary ║";:LOCATE 8,34:PRINT USING "&";"a computer system.";:LOCATE 9,4:PRINT USING "&";"│  for      ║";:LOCATE 10,4:PRINT USING "&";"│";
3090 PRINT USING "&";"Computers  ║";:LOCATE 11,4:PRINT USING "&";"│           ║";:LOCATE 12,4:PRINT USING "&";"╘═══════════╝";:LOCATE 13,2:PRINT USING "&";"manual and computer      <";
3093 PRINT USING "&";"--- ";
3096 COLOR 15,0:PRINT USING "&";"Compare";
3099 COLOR 7,0:PRINT USING "&";" a typical manual system to a";:LOCATE 14,3:PRINT USING "&";"│";:LOCATE 14,19:PRINT USING "&";"│";:LOCATE 14,34:PRINT USING "&";"computer system.";:LOCATE 15,3:PRINT USING "&";"│";
3102 PRINT USING "&";"";:LOCATE 15,19:PRINT USING "&";"│";:LOCATE 16,3:PRINT USING "&";"│";:LOCATE 16,19:PRINT USING "&";"│";:LOCATE 17,3:PRINT USING "&";"│";:LOCATE 17,19:PRINT USING "&";"│";
3105 PRINT USING "&";"";:LOCATE 18,3:PRINT USING "&";"│     IBM       │";:LOCATE 19,3:PRINT USING "&";"└───Personal────┘       <--- ";
3108 COLOR 15,0:PRINT USING "&";"Tie it together";
3111 COLOR 7,0:PRINT USING "&";" so you can see how it can fit          Computer";:LOCATE 20,34:PRINT USING "&";"your business or personal needs.";
3114 COLOR 15,0:LOCATE 24,1:PRINT USING "&";"Press the Space bar";
3117 LOCATE 2,29,0:DELAY=0:BRANCH$="■*$DYINT003■":RETURN
3120 'SAVE "B:DYINT003.ISD",A 'TITLE=DEFINITIONS
3123 WIDTH 40:COLOR 7,0,0:CLS
3126 IF IBMBW THEN OUT 948,2:OUT 949,62
3129 COLOR 0,7:LOCATE 1,12:PRINT USING "&";" ┌─────────────┐ ";
3132 LOCATE 2,12:PRINT USING "&";" │ DEFINITIONS │ ";
3135 LOCATE 3,12:PRINT USING "&";" └─────────────┘ ";
3138 COLOR 7,0:LOCATE 5,4:PRINT USING "&";"There are three words commonly used";:LOCATE 7,2:PRINT USING "&";"in describing information to a computer";
3141 COLOR 0,7:LOCATE 11,16:PRINT USING "&";" - Field  ";
3144 LOCATE 14,16:PRINT USING "&";" - Record ";
3147 LOCATE 17,16:PRINT USING "&";" - File   ";
3150 COLOR 15,0:LOCATE 24,1:PRINT USING "&";"Press the Space bar";
3153 LOCATE 3,29,0:DELAY=0:BRANCH$="■*$DYINT004■":RETURN
3156 'SAVE "B:DYINT004.ISD",A 'TITLE=CHECK
3159 WIDTH 80:COLOR 7,0,0:CLS
3162 LOCATE 2,16:PRINT USING "&";"Take a look at a typical check in your checkbook.";
3165 COLOR 0,7:LOCATE 5,8:PRINT USING "&";"┌───────────────────────────────────────────────────────────────┐";
3168 LOCATE 6,8:PRINT USING "&";"│ John A. Smith";SPACE$(45);"1001│";
3171 LOCATE 7,8:PRINT USING "&";"│ 123 Main Street";SPACE$(47);"│";
3174 LOCATE 8,8:PRINT USING "&";"│ City, State, Zip";SPACE$(32);"Date  Dec.1,82│";
3177 LOCATE 9,8:PRINT USING "&";"│";SPACE$(54);"~~~~~~~~~│";
3180 LOCATE 10,8:PRINT USING "&";"│ Pay to:  ABC Corp.";SPACE$(32);"$  10.00    │";
3183 LOCATE 11,8:PRINT USING "&";"│         ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  ~~~~~~~~~~~│";
3186 LOCATE 12,8:PRINT USING "&";"│ Amount:  Ten and no/100---------------------------Dollars     │";
3189 LOCATE 13,8:PRINT USING "&";"│         ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~";SPACE$(13);"│";
3192 LOCATE 14,8:PRINT USING "&";"│";SPACE$(63);"│";
3195 LOCATE 15,8:PRINT USING "&";"│ Memo";SPACE$(32);"Signature";SPACE$(17);"│";
3198 LOCATE 16,8:PRINT USING "&";"│     ~~~~~~~~~~~";SPACE$(30);"~~~~~~~~~~~~~~~~~│";
3201 LOCATE 17,8:PRINT USING "&";"└───────────────────────────────────────────────────────────────┘";
3204 COLOR 15,0:LOCATE 24,1:PRINT USING "&";"Press the Space bar";
3207 LOCATE 11,72,0:DELAY=0:BRANCH$="■*$DYINT005■":RETURN
3210 'SAVE "B:DYINT005.ISD",A 'TITLE=RELATED INFO
3213 WIDTH 80:COLOR 7,0,0:CLS
3216 LOCATE 2,14:PRINT USING "&";"A check contains a collection of related information.";
3219 COLOR 0,7:LOCATE 4,3:PRINT USING "&";"┌───────────────────";
3222 LOCATE 4,66:PRINT USING "&";"────────┐";
3225 LOCATE 5,3:PRINT USING "&";"│ John A. Smith     ";
3228 LOCATE 5,39:PRINT USING "&";"────────────";
3231 LOCATE 5,66:PRINT USING "&";"    1001│";
3234 LOCATE 6,3:PRINT USING "&";"│ 123 Main Street   ";
3237 LOCATE 6,39:PRINT USING "&";"            ";
3240 LOCATE 7,3:PRINT USING "&";"│ City, State, Zip  ";
3243 LOCATE 7,39:PRINT USING "&";SPACE$(20);"│";
3246 LOCATE 8,3:PRINT USING "&";"│";SPACE$(19);
3249 LOCATE 8,39:PRINT USING "&";"      Date  Dec.1,82│";
3252 LOCATE 9,39:PRINT USING "&";"           ~~~~~~~~~│";
3255 LOCATE 11,7:PRINT USING "&";"│ Pay to:  ABC Corp.";SPACE$(14);
3258 LOCATE 11,61:PRINT USING "&";" $  10.00    │";
3261 LOCATE 12,7:PRINT USING "&";"│         ~~~~~~~~~~~~~~~~~~~~~~~~";
3264 LOCATE 12,61:PRINT USING "&";"  ~~~~~~~~~~~│";
3267 LOCATE 14,13:PRINT USING "&";"│ Amount:  Ten and no/100--------------------Dollars   ";
3270 LOCATE 15,13:PRINT USING "&";"│         ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~           ";
3273 LOCATE 19,5:PRINT USING "&";"│";SPACE$(27);
3276 LOCATE 20,5:PRINT USING "&";"│ Memo";SPACE$(22);
3279 LOCATE 20,45:PRINT USING "&";SPACE$(29);"│";
3282 LOCATE 21,5:PRINT USING "&";"│     ~~~~~~~~~~~           ";
3285 LOCATE 21,45:PRINT USING "&";" Signature";SPACE$(19);"│";
3288 LOCATE 22,5:PRINT USING "&";"└───────────────────────────";
3291 LOCATE 22,45:PRINT USING "&";"          ~~~~~~~~~~~~~~~~~~~│";
3294 LOCATE 23,45:PRINT USING "&";"─────────────────────────────┘";
3297 COLOR 15,0:LOCATE 24,1:PRINT USING "&";"Press the Space bar";
3300 LOCATE 7,23,0:DELAY=0:BRANCH$="■*$DYINT007■":RETURN
3303 'SAVE "B:DYINT007.ISD",A 'TITLE=CHECK: FIELD
3306 WIDTH 80:COLOR 7,0,0:CLS
3309 LOCATE 2,12:PRINT USING "&";"A ";
3312 COLOR 15,0:PRINT USING "&";"FIELD";
3315 COLOR 7,0:PRINT USING "&";" is one of the related information items on a check.";
3318 COLOR 0,7:LOCATE 5,9:PRINT USING "&";"┌───────────────────────────────────────────────────────────────┐";
3321 LOCATE 6,9:PRINT USING "&";"│ John A. Smith";SPACE$(45);"1001│";
3324 LOCATE 7,9:PRINT USING "&";"│ 123 Main Street";SPACE$(47);"│";
3327 LOCATE 8,9:PRINT USING "&";"│ City, State, Zip";SPACE$(32);"Date  Dec.1,82│";
3330 LOCATE 9,9:PRINT USING "&";"│";SPACE$(54);"~~~~~~~~~│";
3333 COLOR 15,0:LOCATE 10,1:PRINT USING "&";"FIELD";
3336 COLOR 31,0:PRINT USING "&";"───";
3339 COLOR 0,7:PRINT USING "&";"│ Pay to:  ABC Corp.";SPACE$(32);"$  10.00    │";
3342 LOCATE 11,9:PRINT USING "&";"│         ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  ~~~~~~~~~~~│";
3345 LOCATE 12,9:PRINT USING "&";"│ Amount:  Ten and no/100---------------------------Dollars     │";
3348 LOCATE 13,9:PRINT USING "&";"│         ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~";SPACE$(13);"│";
3351 LOCATE 14,9:PRINT USING "&";"│";SPACE$(63);"│";
3354 LOCATE 15,9:PRINT USING "&";"│ Memo";SPACE$(32);"Signature";SPACE$(17);"│";
3357 LOCATE 16,9:PRINT USING "&";"│     ~~~~~~~~~~~";SPACE$(30);"~~~~~~~~~~~~~~~~~│";
3360 LOCATE 17,9:PRINT USING "&";"└───────────────────────────────────────────────────────────────┘";
3363 COLOR 7,0:LOCATE 19,7:PRINT USING "&";"";Q$;"Pay to";Q$;" is the name of the ";
3366 COLOR 15,0:PRINT USING "&";"FIELD";
3369 COLOR 7,0:PRINT USING "&";" which contains the information item";:LOCATE 21,33:PRINT USING "&";"ABC Corp.";
3372 COLOR 15,0:LOCATE 24,1:PRINT USING "&";"Press the Space bar";
3375 LOCATE 10,9,0:DELAY=0:BRANCH$="■*$DYINT006■":RETURN
3378 'SAVE "B:DYINT006.ISD",A 'TITLE=CHECK: RECORD
3381 WIDTH 80:COLOR 7,0,0:CLS
3384 LOCATE 2,10:PRINT USING "&";"Treated as a unit, the entire check is an example of a ";
3387 COLOR 15,0:PRINT USING "&";"RECORD.";
3390 COLOR 23,0:LOCATE 5,5:PRINT USING "&";"┌───";
3393 COLOR 0,7:PRINT USING "&";"┌───────────────────────────────────────────────────────────────┐";
3396 COLOR 23,0:LOCATE 6,5:PRINT USING "&";"│";
3399 COLOR 0,7:LOCATE 6,9:PRINT USING "&";"│ John A. Smith";SPACE$(45);"1001│";
3402 COLOR 23,0:LOCATE 7,5:PRINT USING "&";"│";
3405 COLOR 0,7:LOCATE 7,9:PRINT USING "&";"│ 123 Main Street";SPACE$(47);"│";
3408 COLOR 15,0:LOCATE 8,5:PRINT USING "&";"R";
3411 COLOR 0,7:LOCATE 8,9:PRINT USING "&";"│ City, State, Zip";SPACE$(32);"Date  Dec.1,82│";
3414 COLOR 15,0:LOCATE 9,5:PRINT USING "&";"E";
3417 COLOR 0,7:LOCATE 9,9:PRINT USING "&";"│";SPACE$(54);"~~~~~~~~~│";
3420 COLOR 15,0:LOCATE 10,5:PRINT USING "&";"C";
3423 COLOR 0,7:LOCATE 10,9:PRINT USING "&";"│ Pay to:  ABC Corp.";SPACE$(32);"$  10.00    │";
3426 COLOR 15,0:LOCATE 11,5:PRINT USING "&";"O";
3429 COLOR 0,7:LOCATE 11,9:PRINT USING "&";"│         ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  ~~~~~~~~~~~│";
3432 COLOR 15,0:LOCATE 12,5:PRINT USING "&";"R";
3435 COLOR 0,7:LOCATE 12,9:PRINT USING "&";"│ Amount:  Ten and no/100---------------------------Dollars     │";
3438 COLOR 15,0:LOCATE 13,5:PRINT USING "&";"D";
3441 COLOR 0,7:LOCATE 13,9:PRINT USING "&";"│         ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~";SPACE$(13);"│";
3444 COLOR 23,0:LOCATE 14,5:PRINT USING "&";"│";
3447 COLOR 0,7:LOCATE 14,9:PRINT USING "&";"│";SPACE$(63);"│";
3450 COLOR 23,0:LOCATE 15,5:PRINT USING "&";"│";
3453 COLOR 0,7:LOCATE 15,9:PRINT USING "&";"│ Memo";SPACE$(32);"Signature";SPACE$(17);"│";
3456 COLOR 23,0:LOCATE 16,5:PRINT USING "&";"│";
3459 COLOR 0,7:LOCATE 16,9:PRINT USING "&";"│     ~~~~~~~~~~~";SPACE$(30);"~~~~~~~~~~~~~~~~~│";
3462 COLOR 23,0:LOCATE 17,5:PRINT USING "&";"└───";
3465 COLOR 0,7:PRINT USING "&";"└───────────────────────────────────────────────────────────────┘";
3468 COLOR 7,0:LOCATE 20,17:PRINT USING "&";"Check number 1001 is the ";Q$;"name";Q$;" of this ";
3471 COLOR 15,0:PRINT USING "&";"RECORD.";
3474 LOCATE 24,1:PRINT USING "&";"Press the Space bar";
3477 LOCATE 17,9,0:DELAY=0:BRANCH$="■*$DYINT008■":RETURN
3480 'SAVE "B:DYINT008.ISD",A 'TITLE=CHECK: FILE
3483 WIDTH 80:COLOR 7,0,0:CLS
3486 LOCATE 2,21:PRINT USING "&";"A ";
3489 COLOR 15,0:PRINT USING "&";"FILE";
3492 COLOR 7,0:PRINT USING "&";" is a collection of related RECORDS.";:LOCATE 4,17:PRINT USING "&";"The collection of checks is an example of a ";
3495 COLOR 15,0:PRINT USING "&";"FILE.";
3498 COLOR 23,0:LOCATE 6,4:PRINT USING "&";"┌──────";
3501 COLOR 0,7:PRINT USING "&";"┌──────────────────────────────────────────────────────────────┐";
3504 COLOR 23,0:LOCATE 7,4:PRINT USING "&";"│";
3507 COLOR 0,7:LOCATE 7,11:PRINT USING "&";"│ John A. Smith";SPACE$(43);"1003 │";
3510 COLOR 23,0:LOCATE 8,4:PRINT USING "&";"│";
3513 COLOR 0,7:LOCATE 8,10:PRINT USING "&";"┌──────────────────────────────────────────────────────────────┐│";
3516 COLOR 23,0:LOCATE 9,4:PRINT USING "&";"│";
3519 COLOR 0,7:LOCATE 9,10:PRINT USING "&";"│ John A. Smith";SPACE$(43);"1002 ││";
3522 COLOR 23,0:LOCATE 10,4:PRINT USING "&";"│";
3525 COLOR 0,7:LOCATE 10,9:PRINT USING "&";"┌──────────────────────────────────────────────────────────────┐││";
3528 COLOR 15,0:LOCATE 11,4:PRINT USING "&";"F";
3531 COLOR 0,7:LOCATE 11,9:PRINT USING "&";"│ John A. Smith";SPACE$(43);"1001 │││";
3534 COLOR 15,0:LOCATE 12,4:PRINT USING "&";"I";
3537 COLOR 0,7:LOCATE 12,9:PRINT USING "&";"│ 123 Main Street";SPACE$(46);"│││";
3540 COLOR 15,0:LOCATE 13,4:PRINT USING "&";"L";
3543 COLOR 0,7:LOCATE 13,9:PRINT USING "&";"│ City, State, Zip";SPACE$(31);"Date  Dec.1,82│││";
3546 COLOR 15,0:LOCATE 14,4:PRINT USING "&";"E";
3549 COLOR 0,7:LOCATE 14,9:PRINT USING "&";"│";SPACE$(53);"~~~~~~~~~│││";
3552 COLOR 23,0:LOCATE 15,4:PRINT USING "&";"│";
3555 COLOR 0,7:LOCATE 15,9:PRINT USING "&";"│ Pay to:  ABC Corp.";SPACE$(31);"$  10.00    │││";
3558 COLOR 23,0:LOCATE 16,4:PRINT USING "&";"│";
3561 COLOR 0,7:LOCATE 16,9:PRINT USING "&";"│         ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  ~~~~~~~~~~~│││";
3564 COLOR 23,0:LOCATE 17,4:PRINT USING "&";"│";
3567 COLOR 0,7:LOCATE 17,9:PRINT USING "&";"│ Amount:  Ten and no/100--------------------------Dollars     │││";
3570 COLOR 23,0:LOCATE 18,4:PRINT USING "&";"│";
3573 COLOR 0,7:LOCATE 18,9:PRINT USING "&";"│         ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~";SPACE$(13);"││┘";
3576 COLOR 23,0:LOCATE 19,4:PRINT USING "&";"│";
3579 COLOR 0,7:LOCATE 19,9:PRINT USING "&";"│";SPACE$(62);"││";
3582 COLOR 23,0:LOCATE 20,4:PRINT USING "&";"│";
3585 COLOR 0,7:LOCATE 20,9:PRINT USING "&";"│ Memo";SPACE$(31);"Signature";SPACE$(17);"│┘";
3588 COLOR 23,0:LOCATE 21,4:PRINT USING "&";"│";
3591 COLOR 0,7:LOCATE 21,9:PRINT USING "&";"│     ~~~~~~~~~~~";SPACE$(29);"~~~~~~~~~~~~~~~~~│";
3594 COLOR 23,0:LOCATE 22,4:PRINT USING "&";"└────";
3597 COLOR 0,7:PRINT USING "&";"└──────────────────────────────────────────────────────────────┘";
3600 COLOR 15,0:LOCATE 24,1:PRINT USING "&";"Press the Space bar";
3603 LOCATE 22,9,0:DELAY=0:BRANCH$="■*$DYINT009■":RETURN
3606 'SAVE "B:DYINT009.ISD",A 'TITLE=FINDING DATA
3609 WIDTH 80:COLOR 7,0,0:CLS
3612 COLOR 0,7:LOCATE 1,26:PRINT USING "&";" ┌─────────────────────────┐ ";
3615 LOCATE 2,26:PRINT USING "&";" │ METHODS OF FINDING DATA │ ";
3618 LOCATE 3,26:PRINT USING "&";" └─────────────────────────┘ ";
3621 COLOR 7,0:LOCATE 5,18:PRINT USING "&";"There are three ways normally used for finding";:LOCATE 7,21:PRINT USING "&";"a specific check (record) in your file.";:LOCATE 12,16:PRINT USING "&";"1. Look th";
3624 PRINT USING "&";"rough the checks themselves.  ";
3627 COLOR 15,0:PRINT USING "&";"(SEQUENTIAL)";
3630 COLOR 7,0:LOCATE 14,16:PRINT USING "&";"2. Look through the checkbook entries.  ";
3633 COLOR 15,0:PRINT USING "&";"(INDEXED)";
3636 COLOR 7,0:LOCATE 16,16:PRINT USING "&";"3. Knowing the check number and going   ";
3639 COLOR 15,0:PRINT USING "&";"(DIRECT)";
3642 COLOR 7,0:LOCATE 17,28:PRINT USING "&";"directly to that check.";
3645 COLOR 15,0:LOCATE 24,1:PRINT USING "&";"Press the Space bar";
3648 LOCATE 12,18,0:DELAY=0:BRANCH$="■*$DYINT010■":RETURN
3651 'SAVE "B:DYINT010.ISD",A 'TITLE=FIND DATA: SEQUENTL
3654 WIDTH 80:COLOR 7,0,0:CLS
3657 LOCATE 1,29:PRINT USING "&";"LOOK THROUGH THE CHECKS";
3660 COLOR 0,7:LOCATE 3,11:PRINT USING "&";"┌─────────────────┐";
3663 LOCATE 4,11:PRINT USING "&";"│ XYZ Co.     1002│";
3666 COLOR 7,0:LOCATE 4,52:PRINT USING "&";"SEQUENTIAL METHOD";
3669 COLOR 0,7:LOCATE 5,9:PRINT USING "&";"┌─────────────────┐ │";
3672 LOCATE 6,9:PRINT USING "&";"│ ";
3675 COLOR 16,7:PRINT USING "&";"ABC Corp.   1001";
3678 COLOR 0,7:PRINT USING "&";"│ │";
3681 LOCATE 7,7:PRINT USING "&";"┌─────────────────┐ │─┘";
3684 COLOR 15,0:LOCATE 7,43:PRINT USING "&";"Problem:";
3687 COLOR 7,0:PRINT USING "&";" Find the check to ABC Corp.        ";
3690 COLOR 0,7:PRINT USING "&";"│ Elec Co.    1000│ │";
3693 COLOR 7,0:LOCATE 8,56:PRINT USING "&";"We do ";
3696 COLOR 15,0:PRINT USING "&";"not";
3699 COLOR 7,0:PRINT USING "&";" know";
3702 COLOR 0,7:LOCATE 9,5:PRINT USING "&";"┌─────────────────┐ │─┘";
3705 COLOR 7,0:LOCATE 9,57:PRINT USING "&";"- check number";
3708 COLOR 0,7:LOCATE 10,5:PRINT USING "&";"│ Phone Co.    999│ │";
3711 COLOR 7,0:LOCATE 10,57:PRINT USING "&";"- amount";
3714 COLOR 0,7:LOCATE 11,3:PRINT USING "&";"┌─────────────────┐ │─┘";
3717 COLOR 7,0:LOCATE 11,57:PRINT USING "&";"- date";
3720 COLOR 0,7:LOCATE 12,3:PRINT USING "&";"│ Water Co.    998│ │";
3723 LOCATE 13,1:PRINT USING "&";"┌─────────────────┐ │─┘";
3726 LOCATE 14,1:PRINT USING "&";"│ Gas Co.      997│ │";
3729 LOCATE 15,1:PRINT USING "&";"│";SPACE$(17);"│─┘";
3732 LOCATE 16,1:PRINT USING "&";"│";SPACE$(17);"│";
3735 LOCATE 17,1:PRINT USING "&";"└─────────────────┘";
3738 COLOR 15,0:LOCATE 19,27:PRINT USING "&";"Solution:";
3741 COLOR 7,0:PRINT USING "&";" To find this check (record)";:LOCATE 20,37:PRINT USING "&";"you must look through all the";:LOCATE 21,37:PRINT USING "&";"checks one at a time until you";:LOCATE 22,37:PRINT USING "&";"l";
3744 PRINT USING "&";"ocate the check to ABC Corp.";
3747 COLOR 15,0:LOCATE 24,1:PRINT USING "&";"Press the Space bar";
3750 LOCATE 20,52,0:DELAY=0:BRANCH$="■*$DYINT011■":RETURN
3753 'SAVE "B:DYINT011.ISD",A 'TITLE=FIND DATA: INDEXED
3756 WIDTH 80:COLOR 7,0,0:CLS
3759 LOCATE 1,28:PRINT USING "&";"LOOK THROUGH THE CHECKBOOK";
3762 COLOR 0,7:LOCATE 3,11:PRINT USING "&";"┌─────────────────┐";
3765 LOCATE 4,11:PRINT USING "&";"│ XYZ Co.     1002│";
3768 COLOR 7,0:LOCATE 4,54:PRINT USING "&";"INDEXED METHOD";
3771 COLOR 0,7:LOCATE 5,9:PRINT USING "&";"┌─────────────────┐ │";
3774 LOCATE 6,9:PRINT USING "&";"│ ";
3777 COLOR 16,7:PRINT USING "&";"ABC Corp.   1001";
3780 COLOR 0,7:PRINT USING "&";"│ │";
3783 LOCATE 7,7:PRINT USING "&";"┌─────────────────┐ │─┘";
3786 COLOR 15,0:LOCATE 7,44:PRINT USING "&";"Problem:";
3789 COLOR 7,0:PRINT USING "&";" Find the check to ABC Corp.       ";
3792 COLOR 0,7:PRINT USING "&";"│ Elec Co.    1000│ │";
3795 COLOR 7,0:LOCATE 8,57:PRINT USING "&";"We do ";
3798 COLOR 15,0:PRINT USING "&";"not";
3801 COLOR 7,0:PRINT USING "&";" know";
3804 COLOR 0,7:LOCATE 9,5:PRINT USING "&";"┌─────────────────┐ │─┘";
3807 COLOR 7,0:LOCATE 9,58:PRINT USING "&";"- check number";
3810 COLOR 0,7:LOCATE 10,5:PRINT USING "&";"│ Phone Co.    999│ │";
3813 COLOR 7,0:LOCATE 10,58:PRINT USING "&";"- amount";
3816 COLOR 0,7:LOCATE 11,3:PRINT USING "&";"┌─────────────────┐ │─┘";
3819 COLOR 7,0:LOCATE 11,58:PRINT USING "&";"- date";
3822 COLOR 0,7:LOCATE 12,3:PRINT USING "&";"│ Water Co.    998│ │";
3825 LOCATE 13,1:PRINT USING "&";"┌─────────────────┐ │─┘";
3828 LOCATE 14,1:PRINT USING "&";"│ Gas Co.      997│ │";
3831 COLOR 7,0:LOCATE 14,58:PRINT USING "&";"┌────────────────────┐ ";
3834 COLOR 0,7:PRINT USING "&";"│";SPACE$(17);"│─┘";
3837 COLOR 7,0:LOCATE 15,58:PRINT USING "&";"│";
3840 COLOR 0,7:PRINT USING "&";"    CHECKBOOK       ";
3843 COLOR 7,0:PRINT USING "&";"│ ";
3846 COLOR 0,7:PRINT USING "&";"│";SPACE$(17);"│";
3849 COLOR 7,0:LOCATE 16,58:PRINT USING "&";"╞═════╤══════════════╡ ";
3852 COLOR 0,7:PRINT USING "&";"└─────────────────┘";
3855 COLOR 7,0:LOCATE 17,58:PRINT USING "&";"│  997│ Gas Co.      │";:LOCATE 18,58:PRINT USING "&";"│  998│ Water Co.    │         ";
3858 COLOR 15,0:PRINT USING "&";"Solution:";
3861 COLOR 7,0:PRINT USING "&";" This is similar to the sequential      │  999│ Phone Co.    │";:LOCATE 20,19:PRINT USING "&";"method of finding information except   │ 1000│ Elec. Co.    │";:LOCATE 21,19:PRINT USING "&";"n";
3864 PRINT USING "&";"ow you use the checkbook (index)      │";
3867 COLOR 23,0:PRINT USING "&";" 1001";
3870 COLOR 7,0:PRINT USING "&";"│";
3873 COLOR 23,0:PRINT USING "&";" ABC Corp.";
3876 COLOR 7,0:PRINT USING "&";"    │";:LOCATE 22,19:PRINT USING "&";"to help speed up the search.           │ 1002│ XYZ Co.      │";:LOCATE 23,58:PRINT USING "&";"└─────┴──────────────┘ ";
3879 COLOR 15,0:PRINT USING "&";"Press the Space bar";
3882 LOCATE 4,54,0:DELAY=0:BRANCH$="■*$DYINT012■":RETURN
3885 'SAVE "B:DYINT012.ISD",A 'TITLE=FIND DATA: DIRECT
3888 WIDTH 80:COLOR 7,0,0:CLS
3891 LOCATE 1,28:PRINT USING "&";"KNOWING THE CHECK NUMBER";
3894 COLOR 0,7:LOCATE 3,11:PRINT USING "&";"┌─────────────────┐";
3897 LOCATE 4,11:PRINT USING "&";"│ XYZ Co.     1002│";
3900 COLOR 7,0:LOCATE 4,52:PRINT USING "&";"DIRECT METHOD";
3903 COLOR 0,7:LOCATE 5,9:PRINT USING "&";"┌─────────────────┐ │";
3906 LOCATE 6,9:PRINT USING "&";"│ ";
3909 COLOR 16,7:PRINT USING "&";"ABC Corp.   1001";
3912 COLOR 0,7:PRINT USING "&";"│ │";
3915 LOCATE 7,7:PRINT USING "&";"┌─────────────────┐ │─┘";
3918 COLOR 15,0:LOCATE 7,44:PRINT USING "&";"Problem:";
3921 COLOR 7,0:PRINT USING "&";" Find the check to ABC Corp.       ";
3924 COLOR 0,7:PRINT USING "&";"│ Elec Co.    1000│ │";
3927 COLOR 7,0:LOCATE 8,57:PRINT USING "&";"We ";
3930 COLOR 15,0:PRINT USING "&";"do";
3933 COLOR 7,0:PRINT USING "&";" know";
3936 COLOR 0,7:LOCATE 9,5:PRINT USING "&";"┌─────────────────┐ │─┘";
3939 LOCATE 10,5:PRINT USING "&";"│ Phone Co.    999│ │";
3942 COLOR 7,0:LOCATE 10,53:PRINT USING "&";"- the check number            ";
3945 COLOR 0,7:PRINT USING "&";"┌─────────────────┐ │─┘";
3948 COLOR 7,0:LOCATE 11,61:PRINT USING "&";"(1001)";
3951 COLOR 0,7:LOCATE 12,3:PRINT USING "&";"│ Water Co.    998│ │";
3954 LOCATE 13,1:PRINT USING "&";"┌─────────────────┐ │─┘";
3957 LOCATE 14,1:PRINT USING "&";"│ Gas Co.      997│ │";
3960 LOCATE 15,1:PRINT USING "&";"│";SPACE$(17);"│─┘";
3963 LOCATE 16,1:PRINT USING "&";"│";SPACE$(17);"│";
3966 LOCATE 17,1:PRINT USING "&";"└─────────────────┘";
3969 COLOR 15,0:LOCATE 19,25:PRINT USING "&";"Solution:";
3972 COLOR 7,0:PRINT USING "&";" Knowing the check number allows";:LOCATE 20,35:PRINT USING "&";"you to go directly to it's";:LOCATE 21,35:PRINT USING "&";"location in the check file.";
3975 COLOR 15,0:LOCATE 24,1:PRINT USING "&";"Press the Space bar";
3978 LOCATE 4,52,0:DELAY=0:BRANCH$="■*$&IBMMC■":RETURN
```

## IBMMC.BAS

```bas
5 'SAVE "IBMMC"
10 '
12 ' ISDDRIVR - ISD DEMO DRIVER
18 ' AUTHOR - Hal W. Jennings
20 '
22 'DEMO DRIVER
24 '
35 GOSUB 2800  'INIT
40 GOSUB 1000  'DISPLAY NEXT SCREEN
45 IF INKEY$<>"" THEN 45  'CLEAR KEYBOARD BUFFER
50 IF DELAY THEN GOSUB 200 ELSE GOSUB 800  'DELAY/INPUT
55 IF TERM THEN CHAIN "MENU"
60 IF RESTART THEN NXT$=FIRSTPROG$: NMP=0: GOTO 330
65 GOTO 40
200 '
205 'DELAY LOGIC
210 '
215 T!=FNTM!(TIME$)+DSEC: IF T!>86400. THEN T!=DSEC
220 K$=INKEY$: IF K$="" AND T!>FNTM!(TIME$) THEN 220
225 IF K$=BS$ THEN 560    'F9 - BACKUP SCREEN
230 IF K$=BM$ THEN 510    'F10- BACKUP MENU
235 IF K$=TERM$ THEN  460 'CTRL END - TERMINATE
240 IF K$=ID$ THEN GOSUB 940: GOTO 220    'F8 - DISPLAY ID
245 IF K$=HELP$ THEN  GOSUB 970: GOTO 215 'F1 - HELP
250 IF K$=" " THEN 410    'SPACE BAR - PAUSE
255 IF K$<>"" THEN 220    'INVALID KEY - TIME NOT EXPIRED
300 NMP=NMP+1: NM$(NMP)=CSCR$
305 IF NMP>148 THEN I=1:FOR J=30 TO NMP:NM$(I)=NM$(J):I=I+1:NEXT J:NMP=I-1
310 IF LEFT$(NEXTSCR$,1)<>"&" THEN RETURN
315 NXT$=MID$(NEXTSCR$,2): IF NXT$="END" THEN TERM=TRUE: RETURN
320 IF NXT$="RETURN" THEN NEXTSCR$=NM$(NMP-1): NMP=NMP-2: IF LEFT$(NEXTSCR$,1)="," THEN NEXTSCR$=MID$(NEXTSCR$,2): RETURN ELSE RETURN
325 NMP=NMP+1: NM$(NMP)="&"+THISPROG$
330 LOCATE 25,1: COLOR 15,0: PRINT SPC(38);: LOCATE 25,6: PRINT "** PROGRAM ";NXT$;" LOADING **";
335 ON ERROR GOTO 340: CHAIN "A:"+NXT$
340 RESUME 345
345 ON ERROR GOTO 350: CHAIN "B:"+NXT$
350 CLS: LOCATE 10,5: PRINT "PROGRAM ";NXT$;" NOT FOUND": LOCATE 23,5: PRINT "Press any key to end demo"
355 IF INKEY$="" THEN 355 ELSE TERM=-1: GOTO 55
400 '
405 'SPACE BAR (PAUSE)
410 IF INKEY$="" THEN 410 ELSE 300
450 '
455 'CTRL END KEY (EXIT)
460 TERM=TRUE: RETURN
500 '
505 'BACKUP MENU
510 BKUPM=TRUE
515 IF INSTR(",&",LEFT$(NM$(NMP),1))=0 AND NMP>1 THEN NMP=NMP-1: GOTO 515
550 '
555 'BACKUP SCREEN
560 IF NMP<=0 THEN NEXTSCR$=CSCR$ ELSE NEXTSCR$=NM$(NMP):NMP=NMP-1: BKUP=TRUE
565 IF LEFT$(NEXTSCR$,1)="," THEN NEXTSCR$=MID$(NEXTSCR$,2): RETURN
570 IF LEFT$(NEXTSCR$,1)="&" THEN NXT$=MID$(NEXTSCR$,2): GOTO 330
575 RETURN
800 '
805 'INPUT LOGIC
810 '
815 T!=FNTM!(TIME$)+120: IF T!>86499. THEN T!=120
820 K$=INKEY$: IF K$="" AND T!>FNTM!(TIME$) THEN 820
825 IF K$=BS$ THEN 560    'F9 - BACKUP SCREEN
830 IF K$=BM$ THEN 510    'F10- BACKUP MENU
835 IF K$=TERM$ THEN  460 'CTRL END - TERMINATE
840 IF K$=ID$ THEN GOSUB 940: GOTO 820    'F8 - DISPLAY ID
845 IF K$=HELP$ THEN  GOSUB 970: GOTO 800 'F1 - HELP
850 IF (K$=ESC$) AND TIM THEN RESTART=TRUE: RETURN  'ESC KEY WITH TIME LIMIT
855 IF K$="" THEN GOSUB 910: GOTO 820  'TIME EXPIRED
860 S=ASC(K$): IF S>96 AND S<123 THEN K$=CHR$(S-32)
865 ANS=INSTR(BRANCH$,B$+K$): IF ANS=0 THEN ANS=INSTR(BRANCH$,BA$)
870 IF ANS=0 THEN BEEP: GOTO 820
875 I=INSTR(ANS,BRANCH$,D$): J=INSTR(I,BRANCH$,B$): NEXTSCR$=MID$(BRANCH$,I+1,J-I-1): IF INSTR(2,BRANCH$,B$)<LEN(BRANCH$) THEN CSCR$=","+CSCR$
880 GOTO 300
900 '
905 'TIME EXPIRED ON INPUT SCREEN
910 LOCATE 25,1: COLOR 15,0: PRINT" OR PRESS THE 'Esc' KEY TO START OVER ";:T!=86500.: TIM=TRUE: RETURN
930 '
935 'DISPLAY PROGRAM AND SCREEN NAME
940 LOCATE 25,1: COLOR 15,0: PRINT"  PROG=";THISPROG$;"   SCREEN=";CSCR$;"  ";: RETURN
960 '
965 'HELP
970 LOCATE 25,1: COLOR 15,0: PRINT" F9=BACKUP  F10=BACKUP TO PREV. MENU ";: RETURN
1000 '
1002 'PLACE TESTS FOR SCREEN NAMES HERE
1004 '
1006 CSCR$=NEXTSCR$: BKUP=FALSE: BKUPM=FALSE: TIM=FALSE
1010 IF CSCR$="DYINT013" THEN 3000
1020 IF CSCR$="DYINT014" THEN 3156
1030 IF CSCR$="DYINT015" THEN 3261
1040 IF CSCR$="DYINT016" THEN 3354
1050 IF CSCR$="DYINT017" THEN 3432
1060 IF CSCR$="DYINT018" THEN 3522
1070 IF CSCR$="DYINT019" THEN 3621
1080 IF CSCR$="DYINT020" THEN 3729
1090 IF CSCR$="DYINT021" THEN 3840
2700 '
2705 'SCREEN NOT FOUND
2710 '
2715 CLS: LOCATE 10,5: PRINT "SCREEN ";NEXTSCR$;" NOT FOUND": LOCATE 23,5: PRINT "Press any key to end demo"
2720 DELAY=FALSE: BRANCH$="■*$&END■": RETURN
2800 '
2805 'INIT (INITIALIZATION SUBROUTINE)
2810 '
2815 DEFINT A-Z: KEY OFF: SCREEN 0,1,0,0
2820 K$="": B$="■": FALSE=0: TRUE=NOT FALSE: Q$=CHR$(34): ESC$=CHR$(27): TERM=FALSE: RESTART=FALSE: BA$="■*": D$="$"
2825 BS$=CHR$(0)+CHR$(67): BM$=CHR$(0)+CHR$(68): HELP$=CHR$(0)+CHR$(59): TERM$=CHR$(0)+CHR$(117): ID$=CHR$(0)+CHR$(66)
2830 DEF FNTM!(T$)=VAL(LEFT$(T$,2))*3600.+VAL(MID$(T$,4,2))*60.+VAL(RIGHT$(T$,2))
2835 'DISABLE FUNCTION KEYS
2840 FOR I=1 TO 10: KEY I,N$: NEXT
2845 READ FIRSTPROG$,THISPROG$
2850 'SCREEN STACK
2855 COMMON NM$(),NMP,BKUP,BKUPM,IBMBW,NEXTSCR$,NXT$
2860 IF NEXTSCR$="" THEN DIM NM$(150)
2865 IF BKUPM THEN 510 ELSE IF BKUP THEN 560
2870 READ NEXTSCR$  'NAME OF FIRST SCREEN
2875 'TEST FOR IBM B&W DISPLAY
2880 DEF SEG=0:IF (PEEK(&H410) AND &H30)=&H30 THEN IBMBW=TRUE:LOCATE ,,,12,13 ELSE IBMBW=FALSE:LOCATE ,,,6,7
2885 RETURN
2890 'FIRSTPROG$,THISPROG$,NEXTSCR$
2999 DATA IBMDIY,IBMMC,DYINT013
3000 'SAVE "B:DYINT013.ISD",A 'TITLE=MAN&COMP: MANUAL
3003 WIDTH 80:COLOR 7,0,0:CLS
3006 COLOR 0,7:LOCATE 1,5:PRINT USING "&";" ┌───────────────────────────────────────┐ ";
3009 COLOR 7,0:PRINT USING "&";"     │      ";
3012 COLOR 0,7:PRINT USING "&";"  CHECKBOOK  ";
3015 COLOR 7,0:PRINT USING "&";"       │    ";
3018 COLOR 0,7:PRINT USING "&";" │ MANUAL AND COMPUTER SYSTEM COMPARISON │ ";
3021 COLOR 7,0:PRINT USING "&";"     ╞══════════════════════════╡    ";
3024 COLOR 0,7:PRINT USING "&";" └───────────────────────────────────────┘ ";
3027 COLOR 7,0:PRINT USING "&";"     │";:LOCATE 3,73:PRINT USING "&";"BALANCE│  Assume you have just received some bills that     │ 998 Water Co 20.00 136.00│     you wish to pay by check.";:LOCATE 5,53:PRINT USING "&";"│";
3030 PRINT USING "&";" 999 Phone Co 23.00 113.00│";:LOCATE 6,53:PRINT USING "&";"│1000 Elec Co  38.00  75.00│  There is a set of steps that you follow even      ";
3033 COLOR 0,7:PRINT USING "&";"┌──────────────────────────┐";
3036 COLOR 7,0:PRINT USING "&";"     though you do not realize it because the       ";
3039 COLOR 0,7:PRINT USING "&";"│John A. Smith         1001│";
3042 COLOR 7,0:PRINT USING "&";"     process is so familiar to you.";
3045 COLOR 0,7:LOCATE 9,53:PRINT USING "&";"│Pay to:          DATE     │";
3048 LOCATE 10,53:PRINT USING "&";"│Amount:~~~~~~~     $ ~~~~~│";
3051 COLOR 7,0:PRINT USING "&";"  1. ";
3054 COLOR 15,0:PRINT USING "&";"Go";
3057 COLOR 7,0:PRINT USING "&";" get checkbook and bills.";
3060 COLOR 0,7:LOCATE 11,53:PRINT USING "&";"│Memo   ~~~~~~~      ~~~~~~│";
3063 COLOR 7,0:PRINT USING "&";"  2. ";
3066 COLOR 15,0:PRINT USING "&";"Look";
3069 COLOR 7,0:PRINT USING "&";" at first (next) bill.";
3072 COLOR 0,7:LOCATE 12,53:PRINT USING "&";"└─────";
3075 COLOR 7,0:PRINT USING "&";"┌──────────────────┐";
3078 COLOR 0,7:PRINT USING "&";"─┘";
3081 COLOR 7,0:PRINT USING "&";"  3. ";
3084 COLOR 15,0:PRINT USING "&";"Look";
3087 COLOR 7,0:PRINT USING "&";" at balance in checkbook.";:LOCATE 13,59:PRINT USING "&";"│      INVOICE     │    4. ";
3090 COLOR 15,0:PRINT USING "&";"If";
3093 COLOR 7,0:PRINT USING "&";" you have enough money, ";
3096 COLOR 15,0:PRINT USING "&";"then";
3099 COLOR 7,0:PRINT USING "&";" write check        ┌──┴────────────────┐ │          or ";
3102 COLOR 15,0:PRINT USING "&";"else";
3105 COLOR 7,0:PRINT USING "&";" put away checkbook.";:LOCATE 15,56:PRINT USING "&";"│ ABC Corp.   BILL  │ │    5. ";
3108 COLOR 15,0:PRINT USING "&";"Fill out";
3111 COLOR 7,0:PRINT USING "&";" all fields on check and in checkbook.    │~~~~~~~~~~~~~~~~~~~│ │    6. ";
3114 COLOR 15,0:PRINT USING "&";"Subtract";
3117 COLOR 7,0:PRINT USING "&";" amount from balance to get new balance.  │To: John A. Smith  │ │    7. ";
3120 COLOR 15,0:PRINT USING "&";"Mark";
3123 COLOR 7,0:PRINT USING "&";" bill PAID.";:LOCATE 18,56:PRINT USING "&";"│    123 Main St.   │ │    8. ";
3126 COLOR 15,0:PRINT USING "&";"If";
3129 COLOR 7,0:PRINT USING "&";" you have more bills, ";
3132 COLOR 15,0:PRINT USING "&";"then";
3135 COLOR 7,0:PRINT USING "&";" go back to step 2    │    City,State,Zip │ │          or ";
3138 COLOR 15,0:PRINT USING "&";"else";
3141 COLOR 7,0:PRINT USING "&";" put away checkbook.";:LOCATE 20,56:PRINT USING "&";"│";:LOCATE 20,76:PRINT USING "&";"│ │";:LOCATE 21,56:PRINT USING "&";"│  Supplies $10.00  │ │";:LOCATE 22,56:PRINT USING "&";"│";
3144 PRINT USING "&";"          ~~~~~~~~ ├─┘";:LOCATE 23,56:PRINT USING "&";"│  Total    $10.00  │    ";
3147 COLOR 15,0:PRINT USING "&";"Press the Space bar";
3150 COLOR 7,0:LOCATE 24,56:PRINT USING "&";"└───────────────────┘   ";
3153 LOCATE 10,80,0:DELAY=0:BRANCH$="■*$DYINT014■":RETURN
3156 'SAVE "B:DYINT014.ISD",A 'TITLE=MAN&COMP: COMPUTER
3159 WIDTH 80:COLOR 7,0,0:CLS
3162 COLOR 0,7:LOCATE 1,19:PRINT USING "&";" ┌───────────────────────────────────────┐ ";
3165 LOCATE 2,19:PRINT USING "&";" │ MANUAL AND COMPUTER SYSTEM COMPARISON │ ";
3168 LOCATE 3,19:PRINT USING "&";" └───────────────────────────────────────┘ ";
3171 COLOR 7,0:LOCATE 5,19:PRINT USING "&";"The computer does the same thing as you do.";:LOCATE 7,19:PRINT USING "&";"It's set of steps is what is called a program.";:LOCATE 10,28:PRINT USING "&";"Steps i";
3174 PRINT USING "&";"n a computer program";:LOCATE 11,28:PRINT USING "&";"~~~~~~~~~~~~~~~~~~~~~~~~~~~";:LOCATE 12,18:PRINT USING "&";"1. ";
3177 COLOR 15,0:PRINT USING "&";"OPEN FILES";
3180 COLOR 7,0:PRINT USING "&";" ";Q$;"checkbook";Q$;" and ";Q$;"bills";Q$;"";:LOCATE 13,18:PRINT USING "&";"2. ";
3183 COLOR 15,0:PRINT USING "&";"READ";
3186 COLOR 7,0:PRINT USING "&";" first (next) bill";:LOCATE 14,18:PRINT USING "&";"3. ";
3189 COLOR 15,0:PRINT USING "&";"READ";
3192 COLOR 7,0:PRINT USING "&";" ";Q$;"old balance";Q$;"";:LOCATE 15,18:PRINT USING "&";"4. ";
3195 COLOR 15,0:PRINT USING "&";"IF";
3198 COLOR 7,0:PRINT USING "&";" ";Q$;"old balance";Q$;" ";
3201 COLOR 15,0:PRINT USING "&";"LESS THAN";
3204 COLOR 7,0:PRINT USING "&";" ";Q$;"check amount";Q$;"";
3207 COLOR 15,0:LOCATE 16,21:PRINT USING "&";"THEN";
3210 COLOR 7,0:PRINT USING "&";" go to step #9";:LOCATE 17,18:PRINT USING "&";"5. ";
3213 COLOR 15,0:PRINT USING "&";"PRINT";
3216 COLOR 7,0:PRINT USING "&";" all fields on check and check register";:LOCATE 18,18:PRINT USING "&";"6. ";Q$;"new balance";Q$;" ";
3219 COLOR 15,0:PRINT USING "&";"=";
3222 COLOR 7,0:PRINT USING "&";" ";Q$;"old balance";Q$;" ";
3225 COLOR 15,0:PRINT USING "&";"-";
3228 COLOR 7,0:PRINT USING "&";" ";Q$;"check amount";Q$;"";:LOCATE 19,18:PRINT USING "&";"7. ";
3231 COLOR 15,0:PRINT USING "&";"WRITE";
3234 COLOR 7,0:PRINT USING "&";" bill paid";:LOCATE 20,18:PRINT USING "&";"8. ";
3237 COLOR 15,0:PRINT USING "&";"IF";
3240 COLOR 7,0:PRINT USING "&";" ";Q$;"more bills";Q$;" ";
3243 COLOR 15,0:PRINT USING "&";"THEN";
3246 COLOR 7,0:PRINT USING "&";" go to step #2";:LOCATE 21,18:PRINT USING "&";"9. ";
3249 COLOR 15,0:PRINT USING "&";"CLOSE FILES";
3252 COLOR 7,0:PRINT USING "&";" ";Q$;"checkbook";Q$;" and ";Q$;"bills";Q$;"";
3255 COLOR 15,0:LOCATE 24,1:PRINT USING "&";"Press the Space bar";
3258 LOCATE 3,1,0:DELAY=0:BRANCH$="■*$DYINT015■":RETURN
3261 'SAVE "B:DYINT015.ISD",A 'TITLE=MAN&COMP: COMPARISON
3264 WIDTH 80:COLOR 7,0,0:CLS
3267 COLOR 0,7:LOCATE 1,19:PRINT USING "&";" ┌───────────────────────────────────────┐ ";
3270 LOCATE 2,19:PRINT USING "&";" │ MANUAL AND COMPUTER SYSTEM COMPARISON │ ";
3273 LOCATE 3,19:PRINT USING "&";" └───────────────────────────────────────┘ ";
3276 LOCATE 6,12:PRINT USING "&";" ┌────────┐ ";
3279 LOCATE 6,55:PRINT USING "&";" ┌──────────┐ ";
3282 LOCATE 7,12:PRINT USING "&";" │ PERSON │ ";
3285 LOCATE 7,55:PRINT USING "&";" │ COMPUTER │ ";
3288 LOCATE 8,12:PRINT USING "&";" └────────┘ ";
3291 LOCATE 8,55:PRINT USING "&";" └──────────┘ ";
3294 COLOR 15,0:LOCATE 10,3:PRINT USING "&";"Reads";
3297 COLOR 7,0:PRINT USING "&";" bills consisting of printed          ";
3300 COLOR 15,0:PRINT USING "&";"READS";
3303 COLOR 7,0:PRINT USING "&";" bills consisting of magnetic   characters on paper.";:LOCATE 11,46:PRINT USING "&";"characters stored on ";Q$;"diskette";Q$;".";
3306 COLOR 15,0:LOCATE 13,3:PRINT USING "&";"Remembers";
3309 COLOR 7,0:PRINT USING "&";" who to pay and how much.         ";
3312 COLOR 15,0:PRINT USING "&";"STORES";
3315 COLOR 7,0:PRINT USING "&";" in memory who to pay and";:LOCATE 14,46:PRINT USING "&";"how much.";
3318 COLOR 15,0:LOCATE 16,3:PRINT USING "&";"Decides";
3321 COLOR 7,0:PRINT USING "&";" whether to pay the bill.           ";
3324 COLOR 15,0:PRINT USING "&";"CALCULATES";
3327 COLOR 7,0:PRINT USING "&";" whether bill can be paid";
3330 COLOR 15,0:LOCATE 18,3:PRINT USING "&";"Writes";
3333 COLOR 7,0:PRINT USING "&";" the check and marks bill paid.      ";
3336 COLOR 15,0:PRINT USING "&";"PRINTS";
3339 COLOR 7,0:PRINT USING "&";" the check and ";
3342 COLOR 15,0:PRINT USING "&";"WRITES";
3345 COLOR 7,0:LOCATE 19,46:PRINT USING "&";"on diskette that bill is ";Q$;"paid";Q$;".";
3348 COLOR 15,0:LOCATE 24,1:PRINT USING "&";"Press the Space bar";
3351 LOCATE 5,62,0:DELAY=0:BRANCH$="■*$DYINT016■":RETURN
3354 'SAVE "B:DYINT016.ISD",A 'TITLE=MAN&COMP: GRAPHIC
3357 WIDTH 80:COLOR 7,0,0:CLS
3360 PRINT USING "&";"   ╒══════════╕";
3363 COLOR 15,0:LOCATE 1,33:PRINT USING "&";"MANUAL SYSTEM";
3366 COLOR 7,0:LOCATE 2,4:PRINT USING "&";"│          │";:LOCATE 3,4:PRINT USING "&";"│ ┌──────┐ │";:LOCATE 4,4:PRINT USING "&";"│ └──────┘ │     │--------------│";:LOCATE 4,68:PRINT USING "&";"┌───────┐";
3369 PRINT USING "&";"       │          │     │ STEP 1       │            @@@@@@@@@          │       │       │──────────│     │ STEP 2       │          @@@@@@@@@@@       ┌──┤_______├";
3372 PRINT USING "&";"──┐    │          │     │ STEP 3       │          ` o   o  @@       │ ........... │    │ ┌──────┐ │     │   ";Q$;"          │          `   u    @@@      │ :::::";
3375 PRINT USING "&";":::::::│    │ └──────┘ │     │--------------│          `  ---'   @@@     └──╧╧╧╧╧╧╧╧╧──┘    │          │";:LOCATE 10,48:PRINT USING "&";"` - - -'";:LOCATE 11,4:PRINT USING "&";"╘";
3378 PRINT USING "&";"══════════╛";:LOCATE 12,4:PRINT USING "&";"FILE CABINET       SET OF STEPS";:LOCATE 12,49:PRINT USING "&";"PERSON            TYPEWRITER    ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀";
3381 PRINT USING "&";"▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀";
3384 COLOR 15,0:LOCATE 14,33:PRINT USING "&";"COMPUTER SYSTEM";
3387 COLOR 7,0:PRINT USING "&";"┌────────┐          ┌───────┐       ┌─────────┐";:LOCATE 15,46:PRINT USING "&";"┌─┤███████ ├─┐        │       │       ├─────────┤    │ 1. ";
3390 COLOR 15,0:PRINT USING "&";"OPEN";
3393 COLOR 7,0:PRINT USING "&";" file       │     │ │███████:│ │      ┌┬┤       ├┬┐     │    o    │    │ 2. ";
3396 COLOR 15,0:PRINT USING "&";"READ";
3399 COLOR 7,0:PRINT USING "&";" bill       │     │ └────────┘ │      │ ";
3402 COLOR 0,7:PRINT USING "&";"╞_______╡";
3405 COLOR 7,0:PRINT USING "&";" ╞▌    │    0    │    │ 3. ";
3408 COLOR 15,0:PRINT USING "&";"READ";
3411 COLOR 7,0:PRINT USING "&";" old balance│     ├────────────┤      │ █████████░│     └─────────┘    │ 4. ";
3414 COLOR 15,0:PRINT USING "&";"etc.";
3417 COLOR 7,0:PRINT USING "&";"            │     │IBM ████████│      ├───────────┤";:LOCATE 20,19:PRINT USING "&";"│";:LOCATE 20,40:PRINT USING "&";"│     └┬──────────┬┘      └───────────┘";:LOCATE 21,19:PRINT USING "&";"│";
3420 PRINT USING "&";"";:LOCATE 21,40:PRINT USING "&";"│      ╡░░░░░░░░░░╞";:LOCATE 22,5:PRINT USING "&";"DISKETTE           PROGRAM";:LOCATE 22,47:PRINT USING "&";"└──═════───┘          P";
3423 PRINT USING "&";"RINTER";:LOCATE 23,49:PRINT USING "&";"COMPUTER";
3426 COLOR 15,0:LOCATE 24,1:PRINT USING "&";"Press the Space bar";
3429 LOCATE 12,15,0:DELAY=0:BRANCH$="■*$DYINT017■":RETURN
3432 'SAVE "B:DYINT017.ISD",A 'TITLE=COMPUTER SOLUTION 1
3435 WIDTH 80:COLOR 7,0,0:CLS
3438 COLOR 0,7:LOCATE 1,27:PRINT USING "&";" ┌───────────────────────┐ ";
3441 LOCATE 2,27:PRINT USING "&";" │ COMPUTERIZED SOLUTION │ ";
3444 LOCATE 3,27:PRINT USING "&";" └───────────────────────┘ ";
3447 COLOR 7,0:LOCATE 5,7:PRINT USING "&";"program";:LOCATE 5,47:PRINT USING "&";"Since the computer's memory is        ┌─────────┐";:LOCATE 6,47:PRINT USING "&";"empty when first turned on, it        ├─";
3450 PRINT USING "&";"────────┤   ";
3453 COLOR 15,0:PRINT USING "&";"CHECK WRITING STEPS";
3456 COLOR 7,0:PRINT USING "&";"         must first read it's set of steps.    │    o    │";
3459 COLOR 23,0:PRINT USING "&";"────────────────────────┐";
3462 COLOR 7,0:LOCATE 9,5:PRINT USING "&";"│    0    │";
3465 COLOR 23,0:LOCATE 9,40:PRINT USING "&";"↓";
3468 COLOR 7,0:LOCATE 9,65:PRINT USING "&";"┌──────────┐        └─────────┘         ┌─────────────────────────────┐         │          │";:LOCATE 11,25:PRINT USING "&";"│  IBM     ";
3471 COLOR 0,7:PRINT USING "&";"        │        ";
3474 COLOR 7,0:PRINT USING "&";"  │         │          │        ┌─────────┐         │          ";
3477 COLOR 0,7:PRINT USING "&";" ──";
3480 COLOR 8,0:PRINT USING "&";"▄▄";
3483 COLOR 0,7:PRINT USING "&";"── │ ──";
3486 COLOR 8,0:PRINT USING "&";"▄▄";
3489 COLOR 0,7:PRINT USING "&";"── ";
3492 COLOR 7,0:PRINT USING "&";"  │       ┌┬┤          ├┬┐      ├─────────┤         │ ││││││││ ";
3495 COLOR 0,7:PRINT USING "&";"        │        ";
3498 COLOR 7,0:PRINT USING "&";"  │       │ ";
3501 COLOR 0,7:PRINT USING "&";"╞__________╡";
3504 COLOR 7,0:PRINT USING "&";" ╞▌     │    o    │         └┌═══════════════════════════┐┘       │ ████████████░│      │    0    │          ╡IBM";:LOCATE 15,54:PRINT USING "&";"╞        ├────";
3507 PRINT USING "&";"──────────┤      └─────────┘          │ :: :::::::::::::::::::::: │        └──────────────┘         bills";:LOCATE 17,26:PRINT USING "&";"│ :: :::::::::::::::::";
3510 PRINT USING "&";"::::: │";:LOCATE 18,26:PRINT USING "&";"└───────────────────────────┘";:LOCATE 20,6:PRINT USING "&";"DISKETTES";:LOCATE 20,35:PRINT USING "&";"COMPUTER";:LOCATE 20,68:PRINT USING "&";"P";
3513 PRINT USING "&";"RINTER";
3516 COLOR 15,0:LOCATE 24,1:PRINT USING "&";"Press the Space bar";
3519 LOCATE 5,56,0:DELAY=0:BRANCH$="■*$DYINT018■":RETURN
3522 'SAVE "B:DYINT018.ISD",A 'TITLE=COMPUTER SOLUTION 2
3525 WIDTH 80:COLOR 7,0,0:CLS
3528 COLOR 0,7:LOCATE 1,27:PRINT USING "&";" ┌───────────────────────┐ ";
3531 LOCATE 2,27:PRINT USING "&";" │ COMPUTERIZED SOLUTION │ ";
3534 LOCATE 3,27:PRINT USING "&";" └───────────────────────┘ ";
3537 COLOR 15,0:LOCATE 5,34:PRINT USING "&";"* * INPUT * *";
3540 LOCATE 7,19:PRINT USING "&";"READ A BILL";
3543 COLOR 23,0:LOCATE 8,10:PRINT USING "&";"┌─────────────────────────────┐";
3546 LOCATE 9,10:PRINT USING "&";"│";
3549 COLOR 7,0:PRINT USING "&";"      ABC Corp. $10.00       ";
3552 COLOR 23,0:PRINT USING "&";"↓";
3555 COLOR 7,0:LOCATE 9,65:PRINT USING "&";"┌──────────┐";
3558 COLOR 23,0:LOCATE 10,10:PRINT USING "&";"│";
3561 COLOR 7,0:LOCATE 10,25:PRINT USING "&";"┌─────────────────────────────┐         │          │";
3564 COLOR 23,0:LOCATE 11,10:PRINT USING "&";"│";
3567 COLOR 7,0:LOCATE 11,25:PRINT USING "&";"│  IBM     ";
3570 COLOR 0,7:PRINT USING "&";"        │        ";
3573 COLOR 7,0:PRINT USING "&";"  │         │          │        ┌─────────┐         │          ";
3576 COLOR 0,7:PRINT USING "&";" ──";
3579 COLOR 8,0:PRINT USING "&";"▄▄";
3582 COLOR 0,7:PRINT USING "&";"── │ ──";
3585 COLOR 8,0:PRINT USING "&";"▄▄";
3588 COLOR 0,7:PRINT USING "&";"── ";
3591 COLOR 7,0:PRINT USING "&";"  │       ┌┬┤          ├┬┐      ├─────────┤         │ ││││││││ ";
3594 COLOR 0,7:PRINT USING "&";"        │        ";
3597 COLOR 7,0:PRINT USING "&";"  │       │ ";
3600 COLOR 0,7:PRINT USING "&";"╞__________╡";
3603 COLOR 7,0:PRINT USING "&";" ╞▌     │    o    │         └┌═══════════════════════════┐┘       │ ████████████░│      │    0    │          ╡IBM";:LOCATE 15,54:PRINT USING "&";"╞        ├────";
3606 PRINT USING "&";"──────────┤      └─────────┘          │ :: :::::::::::::::::::::: │        └──────────────┘         bills";:LOCATE 17,26:PRINT USING "&";"│ :: :::::::::::::::::";
3609 PRINT USING "&";"::::: │";:LOCATE 18,26:PRINT USING "&";"└───────────────────────────┘";:LOCATE 20,6:PRINT USING "&";"DISKETTES";:LOCATE 20,35:PRINT USING "&";"COMPUTER";:LOCATE 20,68:PRINT USING "&";"P";
3612 PRINT USING "&";"RINTER";
3615 COLOR 15,0:LOCATE 24,1:PRINT USING "&";"Press the Space bar";
3618 LOCATE 13,80,0:DELAY=0:BRANCH$="■*$DYINT019■":RETURN
3621 'SAVE "B:DYINT019.ISD",A 'TITLE=COMPUTER SOLUTION 3
3624 WIDTH 80:COLOR 7,0,0:CLS
3627 COLOR 0,7:LOCATE 1,27:PRINT USING "&";" ┌───────────────────────┐ ";
3630 LOCATE 2,27:PRINT USING "&";" │ COMPUTERIZED SOLUTION │ ";
3633 LOCATE 3,27:PRINT USING "&";" └───────────────────────┘ ";
3636 COLOR 15,0:LOCATE 5,31:PRINT USING "&";"* * PROCESSING * *";
3639 LOCATE 7,30:PRINT USING "&";"CALCULATE NEW BALANCE";
3642 COLOR 7,0:LOCATE 7,65:PRINT USING "&";"┌──────────┐";:LOCATE 8,25:PRINT USING "&";"┌─────────────────────────────┐         │          │";:LOCATE 9,25:PRINT USING "&";"│  IBM     ";
3645 COLOR 0,7:PRINT USING "&";"        │        ";
3648 COLOR 7,0:PRINT USING "&";"  │         │          │        ┌─────────┐         │          ";
3651 COLOR 0,7:PRINT USING "&";" ──";
3654 COLOR 8,0:PRINT USING "&";"▄▄";
3657 COLOR 0,7:PRINT USING "&";"── │ ──";
3660 COLOR 8,0:PRINT USING "&";"▄▄";
3663 COLOR 0,7:PRINT USING "&";"── ";
3666 COLOR 7,0:PRINT USING "&";"  │       ┌┬┤          ├┬┐      ├─────────┤         │ ││││││││ ";
3669 COLOR 0,7:PRINT USING "&";"        │        ";
3672 COLOR 7,0:PRINT USING "&";"  │       │ ";
3675 COLOR 0,7:PRINT USING "&";"╞__________╡";
3678 COLOR 7,0:PRINT USING "&";" ╞▌     │    o    │         └┌═══════════════════════════┐┘       │ ████████████░│      │    0    │          ╡IBM";:LOCATE 13,54:PRINT USING "&";"╞        ├────";
3681 PRINT USING "&";"──────────┤      └─────────┘          │ :: :::::::::::::::::::::: │        └──────────────┘         bills";:LOCATE 15,26:PRINT USING "&";"│ :: :::::::::::::::::";
3684 PRINT USING "&";"::::: │";:LOCATE 16,26:PRINT USING "&";"└───────────────────────────┘";:LOCATE 18,6:PRINT USING "&";"DISKETTES";:LOCATE 18,35:PRINT USING "&";"COMPUTER";:LOCATE 18,68:PRINT USING "&";"P";
3687 PRINT USING "&";"RINTER";
3690 COLOR 23,0:LOCATE 19,29:PRINT USING "&";"┌──────────────────────┐";
3693 LOCATE 20,29:PRINT USING "&";"│";
3696 COLOR 7,0:PRINT USING "&";" Balance        75.00 ";
3699 COLOR 23,0:PRINT USING "&";"│";
3702 LOCATE 21,29:PRINT USING "&";"│";
3705 COLOR 7,0:PRINT USING "&";" ABC Corp.     -10.00 ";
3708 COLOR 23,0:PRINT USING "&";"│";
3711 LOCATE 22,29:PRINT USING "&";"│";
3714 COLOR 7,0:PRINT USING "&";" New Balance   =65.00 ";
3717 COLOR 23,0:PRINT USING "&";"│";
3720 LOCATE 23,29:PRINT USING "&";"└──────────────────────┘";
3723 COLOR 15,0:LOCATE 24,1:PRINT USING "&";"Press the Space bar";
3726 LOCATE 4,59,0:DELAY=0:BRANCH$="■*$DYINT020■":RETURN
3729 'SAVE "B:DYINT020.ISD",A 'TITLE=COMPUTER SOLUTION 4
3732 WIDTH 80:COLOR 7,0,0:CLS
3735 COLOR 0,7:LOCATE 1,27:PRINT USING "&";" ┌───────────────────────┐ ";
3738 LOCATE 2,27:PRINT USING "&";" │ COMPUTERIZED SOLUTION │ ";
3741 LOCATE 3,27:PRINT USING "&";" └───────────────────────┘ ";
3744 COLOR 15,0:LOCATE 5,33:PRINT USING "&";"* * OUTPUT * *";
3747 LOCATE 7,17:PRINT USING "&";"MARK BILL PAID";
3750 LOCATE 7,52:PRINT USING "&";" PRINT CHECK";
3753 COLOR 23,0:LOCATE 8,10:PRINT USING "&";"┌────────────────────────┐";
3756 LOCATE 8,44:PRINT USING "&";"┌──────────────────────────┐";
3759 LOCATE 9,10:PRINT USING "&";"│";
3762 LOCATE 9,35:PRINT USING "&";"│";
3765 LOCATE 9,44:PRINT USING "&";"│";
3768 COLOR 7,0:LOCATE 9,65:PRINT USING "&";"┌─────";
3771 COLOR 23,0:PRINT USING "&";"↓";
3774 COLOR 7,0:PRINT USING "&";"────┐";
3777 COLOR 23,0:LOCATE 10,10:PRINT USING "&";"│";
3780 COLOR 7,0:LOCATE 10,25:PRINT USING "&";"┌─────────────────────────────┐         │ABC Corp. │";
3783 COLOR 23,0:LOCATE 11,10:PRINT USING "&";"↓";
3786 COLOR 7,0:LOCATE 11,25:PRINT USING "&";"│  IBM     ";
3789 COLOR 0,7:PRINT USING "&";"        │        ";
3792 COLOR 7,0:PRINT USING "&";"  │         │    $10.00│        ┌─────────┐         │          ";
3795 COLOR 0,7:PRINT USING "&";" ──";
3798 COLOR 8,0:PRINT USING "&";"▄▄";
3801 COLOR 0,7:PRINT USING "&";"── │ ──";
3804 COLOR 8,0:PRINT USING "&";"▄▄";
3807 COLOR 0,7:PRINT USING "&";"── ";
3810 COLOR 7,0:PRINT USING "&";"  │       ┌┬┤          ├┬┐      ├─────────┤         │ ││││││││ ";
3813 COLOR 0,7:PRINT USING "&";"        │        ";
3816 COLOR 7,0:PRINT USING "&";"  │       │ ";
3819 COLOR 0,7:PRINT USING "&";"╞__________╡";
3822 COLOR 7,0:PRINT USING "&";" ╞▌     │    o    │         └┌═══════════════════════════┐┘       │ ████████████░│      │    0    │          ╡IBM";:LOCATE 15,54:PRINT USING "&";"╞        ├────";
3825 PRINT USING "&";"──────────┤      └─────────┘          │ :: :::::::::::::::::::::: │        └──────────────┘         bills";:LOCATE 17,26:PRINT USING "&";"│ :: :::::::::::::::::";
3828 PRINT USING "&";"::::: │";:LOCATE 18,26:PRINT USING "&";"└───────────────────────────┘";:LOCATE 20,6:PRINT USING "&";"DISKETTES";:LOCATE 20,35:PRINT USING "&";"COMPUTER";:LOCATE 20,68:PRINT USING "&";"P";
3831 PRINT USING "&";"RINTER";
3834 COLOR 15,0:LOCATE 24,1:PRINT USING "&";"Press the Space bar";
3837 LOCATE 5,35,0:DELAY=0:BRANCH$="■*$DYINT021■":RETURN
3840 'SAVE "B:DYINT021.ISD",A 'TITLE=COMPUTER SOLUTION 5
3843 WIDTH 80:COLOR 7,0,0:CLS
3846 COLOR 0,7:LOCATE 1,27:PRINT USING "&";" ┌───────────────────────┐ ";
3849 LOCATE 2,27:PRINT USING "&";" │ COMPUTERIZED SOLUTION │ ";
3852 LOCATE 3,27:PRINT USING "&";" └───────────────────────┘ ";
3855 COLOR 15,0:LOCATE 5,23:PRINT USING "&";"* * INPUT - PROCESSING - OUTPUT * *";
3858 COLOR 23,0:LOCATE 8,10:PRINT USING "&";"┌─────────────────────────┐";
3861 LOCATE 8,44:PRINT USING "&";"┌──────────────────────────┐";
3864 LOCATE 9,10:PRINT USING "&";"│";
3867 LOCATE 9,36:PRINT USING "&";"↓";
3870 LOCATE 9,44:PRINT USING "&";"│";
3873 COLOR 7,0:LOCATE 9,65:PRINT USING "&";"┌─────";
3876 COLOR 23,0:PRINT USING "&";"↓";
3879 COLOR 7,0:PRINT USING "&";"────┐";
3882 COLOR 23,0:LOCATE 10,10:PRINT USING "&";"│";
3885 COLOR 7,0:LOCATE 10,25:PRINT USING "&";"┌─────────────────────────────┐         │ABC Corp. │";
3888 COLOR 23,0:LOCATE 11,10:PRINT USING "&";"↓";
3891 COLOR 7,0:LOCATE 11,25:PRINT USING "&";"│  IBM     ";
3894 COLOR 0,7:PRINT USING "&";"        │        ";
3897 COLOR 7,0:PRINT USING "&";"  │         │    $10.00│        ┌─────────┐         │          ";
3900 COLOR 0,7:PRINT USING "&";" ──";
3903 COLOR 8,0:PRINT USING "&";"▄▄";
3906 COLOR 0,7:PRINT USING "&";"── │ ──";
3909 COLOR 8,0:PRINT USING "&";"▄▄";
3912 COLOR 0,7:PRINT USING "&";"── ";
3915 COLOR 7,0:PRINT USING "&";"  │       ┌┬┤          ├┬┐      ├─────────┤         │ ││││││││ ";
3918 COLOR 0,7:PRINT USING "&";"        │        ";
3921 COLOR 7,0:PRINT USING "&";"  │       │ ";
3924 COLOR 0,7:PRINT USING "&";"╞__________╡";
3927 COLOR 7,0:PRINT USING "&";" ╞▌     │    o    │         └┌═══════════════════════════┐┘       │ ████████████░│      │    0    │          ╡IBM";:LOCATE 15,54:PRINT USING "&";"╞        ├────";
3930 PRINT USING "&";"──────────┤      └─────────┘          │ :: :::::::::::::::::::::: │        └──────────────┘         bills";:LOCATE 17,26:PRINT USING "&";"│ :: :::::::::::::::::";
3933 PRINT USING "&";"::::: │";:LOCATE 18,26:PRINT USING "&";"└───────────────────────────┘";:LOCATE 20,6:PRINT USING "&";"DISKETTES";:LOCATE 20,35:PRINT USING "&";"COMPUTER";:LOCATE 20,68:PRINT USING "&";"P";
3936 PRINT USING "&";"RINTER";:LOCATE 22,18:PRINT USING "&";"This completes the introduction to computers.";
3939 COLOR 15,0:LOCATE 24,1:PRINT USING "&";"Press the Space bar";
3942 LOCATE 24,13,0:DELAY=0:BRANCH$="■*$&IBMDIY■":RETURN
```

## LOGOC.BAS

```bas
1155 REM switch to color/graphics adapter
1156 DEF SEG=0
1157 POKE &H410,(PEEK(&H410) AND &HCF) OR &H20
1158 DEF SEG
1159 LOCATE ,,1,6,7
1160 SCREEN 0
1161 WIDTH 40
3000 ' START.BAS    SYSTEM STARTUP ROUTINE     6/9/81 PBK
3005 KEY OFF
3006 DIM A$(15),P$(15)
3010 SCREEN 0,1:COLOR 15,1,1:LOCATE ,,0
3011 II=2
3013 SP$=""
3015 GREEN=2: BLUE=1: CYAN=3: YELLOW=6 ELSE GREEN=7: BLUE=0: CYAN=7: YELLOW=7
3020 A$(13)=SP$+"       Personal Computer     "
3025 A$(1)=SPACE$(39):A$(2)=A$(1):A$(11)=A$(1):A$(12)=A$(1):A$(14)=A$(1):A$(15)=A$(1)
3030  A$(1)=SP$+"          The             "
3035  A$(3)=SP$+"▄▄▄▄  ▄▄▄▄▄▄   ▄▄       ▄▄"
3040  A$(4)=SP$+"▄▄▄▄  ▄▄▄▄▄▄▄  ▄▄▄     ▄▄▄"
3045  A$(5)=SP$+" ▄▄    ▄▄  ▄▄   ▄▄▄   ▄▄▄ "
3050  A$(6)=SP$+" ▄▄    ▄▄▄▄▄    ▄▄▄▄ ▄▄▄▄ "
3055  A$(7)=SP$+" ▄▄    ▄▄▄▄▄    ▄▄▄▄▄▄▄▄▄ "
3060  A$(8)=SP$+" ▄▄    ▄▄  ▄▄   ▄▄ ▄▄▄ ▄▄ "
3065  A$(9)=SP$+"▄▄▄▄  ▄▄▄▄▄▄▄  ▄▄▄  ▄  ▄▄▄"
3070 A$(10)=SP$+"▄▄▄▄  ▄▄▄▄▄▄   ▄▄▄  ▄  ▄▄▄"
3075 CLS
3080 FOR I = 2 TO 40
3085 FOR J = 3 TO 10
3090 LOCATE J+5,I:PRINT "▄";
3095 NEXT J:SOUND 100+RND*3000,1:NEXT I
3100 FOR I = 1 TO 7
3105 FOR J = 3 TO 10
3110 LOCATE J+5,I:PRINT " ";
3115 NEXT J:SOUND 100+RND*3000,1:NEXT I
3120 FOR I=8 TO 33:FOR J=3 TO 10:IF MID$(A$(J),I-7,1)=" "THEN LOCATE J+5,I:PRINT " ";
3125 NEXT J:SOUND 100+RND*3000,1:NEXT I
3130 FOR I = 34 TO 40
3135 FOR J = 3 TO 10
3140 LOCATE J+5,I:PRINT " ";
3145 NEXT J:SOUND 100+RND*3000,1:NEXT I
3150 GOTO 3165
3155 FOR I=2 TO 12
3160 COLOR 15,BLUE:LOCATE I+5,5: PRINT SPACE$(3)+A$(I)+SPACE$(3): NEXT
3165 COLOR 15,BLUE:LOCATE 1+5,6: PRINT SPACE$(3)+A$(1)+SPACE$(3)
3170 SOUND 100+RND*3000,1
3175 COLOR 15,BLUE:LOCATE 13+5,2: PRINT SPACE$(3)+A$(13)
3180 SOUND 100+RND*3000,4
3400 FOR X%=1 TO 15:Y$=INKEY$:NEXT X%
3401 IF INKEY$="" THEN 3401
```

## LUNAR.BAS

```bas
10 PRINT TAB(33);"LUNAR"
20 PRINT:PRINT:PRINT
30 PRINT "this is a computer simulation of an apollo lunar"
40 PRINT "landing capsule.":PRINT:PRINT
50 PRINT "the on-board computer has failed (it was made by IBM)"
60 PRINT "so you will have to land the capsule manually."
70 PRINT:PRINT "set burn rate of retro rockets to any value between"
80 PRINT "0 (free fall) and 200 (maximum burn) pounds per second."
90 PRINT "set new burn rate every 10 seconds.":PRINT
100 PRINT "capsule weight 32,500 lbs: fuel weight 16,500 lbs."
110 PRINT:PRINT:PRINT:PRINT "good luck"
120 L=0
130 PRINT:PRINT "sec","mi + ft","mph","lb fuel","burn rate":PRINT
140 A=120:V=1:M=33000.:N=16500:G=0.001:Z=1.8
150 PRINT L,INT(A);INT(5280*(A-INT(A))),3600*V,M-N,:INPUT K:T=10
160 IF M-N<0.001 THEN 240
170 IF T<0.001 THEN 150
180 S=T: IF M>N+S*K THEN 200
190 S=(M-N)/K
200 GOSUB 420: IF I<=0 THEN 340
210 IF V<=0 THEN 230
220 IF J<0 THEN 370
230 GOSUB 330: GOTO 160
240 PRINT "fuel out at";L;"seconds":S=(-V+SQR(V*V+2*A*G))/G
250 V=V+G*S:L=L+S
260 W=3600*V:PRINT "on moon at";L;"seconds - impact velocity";W;"mph"
270 IF W<=1.2 THEN PRINT "perfect landing!": GOTO 440
280 IF W<=10 THEN PRINT "good landing (could be better)":GOTO 440
282 IF W>60 THEN 300
284 PRINT "craft damage... you're stranded here until a rescue"
286 PRINT "party arrives.  hope you have enough oxygen!"
288 GOTO 440
290 IF W>60 THEN 300
300 PRINT "sorry ther were no survivors. you blew it!"
310 PRINT "in fact you blasted a new lunar crater";W*0.277;"feet deep!"
320 GOTO 440
330 L=L+S: T=T-S: M=M-S*K: A=I: V=J: RETURN
340 IF S<0.005000001 THEN 260
350 D=V+SQR(V*V+2*A*(G-Z*K/M)):S=2*A/D
360 GOSUB 420: GOSUB 330:GOSUB 340
370 W=(1-M*G/(Z*K))/2: S=M*V/(Z*K*(W+SQR(W+SQR(W*W+V/Z))))+0.05:GOSUB 420
380 IF I<=0 THEN 340
390 GOSUB 330: IF J>0 THEN 160
400 IF V>0 THEN 370
410 GOTO 160
420 Q=S*K/M: J=V+G*S+Z*(-Q-Q*Q/2-Q^3/3-Q^4/4-Q^5/5)
430 I=A-G*S*S/2-V*S+Z*S*(Q/2+Q^2/6+Q^3/12+Q^4/20+Q^5/30):RETURN
440 PRINT:PRINT:PRINT:PRINT "try again??":GOTO 70
```

## MENU.BAS

```bas
5 'SAVE "MENU"
10 '
12 ' ISDDRIVR - ISD DEMO DRIVER
18 ' AUTHOR - Hal W. Jennings
20 '
22 'DEMO DRIVER
24 '
35 GOSUB 2800  'INIT
40 GOSUB 1000  'DISPLAY NEXT SCREEN
45 IF INKEY$<>"" THEN 45  'CLEAR KEYBOARD BUFFER
50 IF DELAY THEN GOSUB 200 ELSE GOSUB 800  'DELAY/INPUT
55 IF TERM THEN CHAIN "MENU"
60 IF RESTART THEN NXT$=FIRSTPROG$: NMP=0: GOTO 330
65 GOTO 40
200 '
205 'DELAY LOGIC
210 '
215 T!=FNTM!(TIME$)+DSEC: IF T!>86400. THEN T!=DSEC
220 K$=INKEY$: IF K$="" AND T!>FNTM!(TIME$) THEN 220
225 IF K$=BS$ THEN 560    'F9 - BACKUP SCREEN
230 IF K$=BM$ THEN 510    'F10- BACKUP MENU
235 IF K$=TERM$ THEN  460 'CTRL END - TERMINATE
240 IF K$=ID$ THEN GOSUB 940: GOTO 220    'F8 - DISPLAY ID
245 IF K$=HELP$ THEN  GOSUB 970: GOTO 215 'F1 - HELP
250 IF K$=" " THEN 410    'SPACE BAR - PAUSE
255 IF K$<>"" THEN 220    'INVALID KEY - TIME NOT EXPIRED
300 NMP=NMP+1: NM$(NMP)=CSCR$
305 IF NMP>148 THEN I=1:FOR J=30 TO NMP:NM$(I)=NM$(J):I=I+1:NEXT J:NMP=I-1
310 IF LEFT$(NEXTSCR$,1)<>"&" THEN RETURN
315 NXT$=MID$(NEXTSCR$,2): IF NXT$="END" THEN TERM=TRUE: RETURN
320 IF NXT$="RETURN" THEN NEXTSCR$=NM$(NMP-1): NMP=NMP-2: IF LEFT$(NEXTSCR$,1)="," THEN NEXTSCR$=MID$(NEXTSCR$,2): RETURN ELSE RETURN
325 NMP=NMP+1: NM$(NMP)="&"+THISPROG$
330 LOCATE 25,1: COLOR 15,0: PRINT SPC(38);: LOCATE 25,6: PRINT "** PROGRAM ";NXT$;" LOADING **";
335 ON ERROR GOTO 340: CHAIN "A:"+NXT$
340 RESUME 345
345 ON ERROR GOTO 350: CHAIN "B:"+NXT$
350 CLS: LOCATE 10,5: PRINT "PROGRAM ";NXT$;" NOT FOUND": LOCATE 23,5: PRINT "Press any key to end demo"
355 IF INKEY$="" THEN 355 ELSE TERM=-1: GOTO 55
400 '
405 'SPACE BAR (PAUSE)
410 IF INKEY$="" THEN 410 ELSE 300
450 '
455 'CTRL END KEY (EXIT)
460 TERM=TRUE: RETURN
500 '
505 'BACKUP MENU
510 BKUPM=TRUE
515 IF INSTR(",&",LEFT$(NM$(NMP),1))=0 AND NMP>1 THEN NMP=NMP-1: GOTO 515
550 '
555 'BACKUP SCREEN
560 IF NMP<=0 THEN NEXTSCR$=CSCR$ ELSE NEXTSCR$=NM$(NMP):NMP=NMP-1: BKUP=TRUE
565 IF LEFT$(NEXTSCR$,1)="," THEN NEXTSCR$=MID$(NEXTSCR$,2): RETURN
570 IF LEFT$(NEXTSCR$,1)="&" THEN NXT$=MID$(NEXTSCR$,2): GOTO 330
575 RETURN
800 '
805 'INPUT LOGIC
810 '
815 T!=FNTM!(TIME$)+120: IF T!>86499. THEN T!=120
820 K$=INKEY$: IF K$="" AND T!>FNTM!(TIME$) THEN 820
825 IF K$=BS$ THEN 560    'F9 - BACKUP SCREEN
830 IF K$=BM$ THEN 510    'F10- BACKUP MENU
835 IF K$=TERM$ THEN  460 'CTRL END - TERMINATE
840 IF K$=ID$ THEN GOSUB 940: GOTO 820    'F8 - DISPLAY ID
845 IF K$=HELP$ THEN  GOSUB 970: GOTO 800 'F1 - HELP
850 IF (K$=ESC$) AND TIM THEN RESTART=TRUE: RETURN  'ESC KEY WITH TIME LIMIT
855 IF K$="" THEN GOSUB 910: GOTO 820  'TIME EXPIRED
860 S=ASC(K$): IF S>96 AND S<123 THEN K$=CHR$(S-32)
865 ANS=INSTR(BRANCH$,B$+K$): IF ANS=0 THEN ANS=INSTR(BRANCH$,BA$)
870 IF ANS=0 THEN BEEP: GOTO 820
875 I=INSTR(ANS,BRANCH$,D$): J=INSTR(I,BRANCH$,B$): NEXTSCR$=MID$(BRANCH$,I+1,J-I-1): IF INSTR(2,BRANCH$,B$)<LEN(BRANCH$) THEN CSCR$=","+CSCR$
880 GOTO 300
900 '
905 'TIME EXPIRED ON INPUT SCREEN
910 LOCATE 25,1: COLOR 15,0: PRINT" OR PRESS THE 'Esc' KEY TO START OVER ";:T!=86500.: TIM=TRUE: RETURN
930 '
935 'DISPLAY PROGRAM AND SCREEN NAME
940 LOCATE 25,1: COLOR 15,0: PRINT"  PROG=";THISPROG$;"   SCREEN=";CSCR$;"  ";: RETURN
960 '
965 'HELP
970 LOCATE 25,1: COLOR 15,0: PRINT" F9=BACKUP  F10=BACKUP TO PREV. MENU ";: RETURN
1000 '
1002 'PLACE TESTS FOR SCREEN NAMES HERE
1004 '
1006 CSCR$=NEXTSCR$: BKUP=FALSE: BKUPM=FALSE: TIM=FALSE
1010 IF CSCR$="MENU1" THEN 3000
1020 IF CSCR$="MENU2" THEN 3027
2700 '
2705 'SCREEN NOT FOUND
2710 '
2715 CLS: LOCATE 10,5: PRINT "SCREEN ";NEXTSCR$;" NOT FOUND": LOCATE 23,5: PRINT "Press any key to end demo"
2720 DELAY=FALSE: BRANCH$="■*$&END■": RETURN
2800 '
2805 'INIT (INITIALIZATION SUBROUTINE)
2810 '
2815 DEFINT A-Z: KEY OFF: SCREEN 0,1,0,0
2820 K$="": B$="■": FALSE=0: TRUE=NOT FALSE: Q$=CHR$(34): ESC$=CHR$(27): TERM=FALSE: RESTART=FALSE: BA$="■*": D$="$"
2825 BS$=CHR$(0)+CHR$(67): BM$=CHR$(0)+CHR$(68): HELP$=CHR$(0)+CHR$(59): TERM$=CHR$(0)+CHR$(117): ID$=CHR$(0)+CHR$(66)
2830 DEF FNTM!(T$)=VAL(LEFT$(T$,2))*3600.+VAL(MID$(T$,4,2))*60.+VAL(RIGHT$(T$,2))
2835 'DISABLE FUNCTION KEYS
2840 FOR I=1 TO 10: KEY I,N$: NEXT
2845 READ FIRSTPROG$,THISPROG$
2850 'SCREEN STACK
2855 COMMON NM$(),NMP,BKUP,BKUPM,IBMBW,NEXTSCR$,NXT$
2860 IF NEXTSCR$="" THEN DIM NM$(150)
2865 IF BKUPM THEN 510 ELSE IF BKUP THEN 560
2870 READ NEXTSCR$  'NAME OF FIRST SCREEN
2875 'TEST FOR IBM B&W DISPLAY
2880 DEF SEG=0:IF (PEEK(&H410) AND &H30)=&H30 THEN IBMBW=TRUE:LOCATE ,,,12,13 ELSE IBMBW=FALSE:LOCATE ,,,6,7
2885 RETURN
2890 'FIRSTPROG$,THISPROG$,NEXTSCR$
2999 DATA MENU,MENU,MENU1
3000 'SAVE "B:DYINT000.ISD",A 'TITLE=IBM logo in blocks
3003 WIDTH 80:COLOR 7,0,0:CLS
3006 LOCATE 2,34:PRINT USING "&";"INTRODUCING...";:LOCATE 5,39:PRINT USING "&";"The";:LOCATE 8,17:PRINT USING "&";"▀▀▀▀▀▀▀▀   ▀▀▀▀▀▀▀▀▀▀▀▀     ▀▀▀▀▀▀▀       ▀▀▀▀▀▀▀";:LOCATE 9,17:PRINT USING "&";"▀";
3009 PRINT USING "&";"▀▀▀▀▀▀▀   ▀▀▀▀▀▀▀▀▀▀▀▀▀▀   ▀▀▀▀▀▀▀▀     ▀▀▀▀▀▀▀▀";:LOCATE 10,19:PRINT USING "&";"▀▀▀▀       ▀▀▀▀    ▀▀▀▀     ▀▀▀▀▀▀▀   ▀▀▀▀▀▀▀";:LOCATE 11,19:PRINT USING "&";"▀";
3012 PRINT USING "&";"▀▀▀       ▀▀▀▀▀▀▀▀▀▀       ▀▀▀▀▀▀▀▀ ▀▀▀▀▀▀▀▀";:LOCATE 12,19:PRINT USING "&";"▀▀▀▀       ▀▀▀▀▀▀▀▀▀▀       ▀▀▀▀ ▀▀▀▀▀▀▀ ▀▀▀▀";:LOCATE 13,19:PRINT USING "&";"▀▀▀▀       ▀";
3015 PRINT USING "&";"▀▀▀    ▀▀▀▀     ▀▀▀▀  ▀▀▀▀▀  ▀▀▀▀";:LOCATE 14,17:PRINT USING "&";"▀▀▀▀▀▀▀▀   ▀▀▀▀▀▀▀▀▀▀▀▀▀▀   ▀▀▀▀▀▀   ▀▀▀   ▀▀▀▀▀▀";:LOCATE 15,17:PRINT USING "&";"▀▀▀▀▀▀▀▀   ▀";
3018 PRINT USING "&";"▀▀▀▀▀▀▀▀▀▀▀     ▀▀▀▀▀▀    ▀    ▀▀▀▀▀▀";:LOCATE 18,32:PRINT USING "&";"Personal  Computer";
3021 COLOR 15,0:LOCATE 24,1:PRINT USING "&";"Press the Space bar";
3024 LOCATE 24,19,0:DELAY=0:BRANCH$="■*$MENU2■":RETURN
3027 'SAVE "B:MENU2.ISD",A 'TITLE=Dealer Demo Menu
3030 WIDTH 40:COLOR 7,0,0:CLS
3033 IF IBMBW THEN OUT 948,2:OUT 949,62
3036 COLOR 0,7:LOCATE 1,7:PRINT USING "&";" ┌───────────────────────┐ ";
3039 LOCATE 2,7:PRINT USING "&";" │ IBM Personal Computer │ ";
3042 LOCATE 3,7:PRINT USING "&";" │ Demonstration Series  │ ";
3045 LOCATE 4,7:PRINT USING "&";" └───────────────────────┘ ";
3048 COLOR 7,0:LOCATE 6,7:PRINT USING "&";"Select one of the following:";:LOCATE 9,10:PRINT USING "&";"1. Unattended Demo";:LOCATE 11,10:PRINT USING "&";"2. Do-It-Yourself Demo";:LOCATE 13,10:PRINT USING "&";"3";
3051 PRINT USING "&";". Samples";:LOCATE 15,10:PRINT USING "&";"4. Communications";:LOCATE 17,10:PRINT USING "&";"5. Functional Demo";:LOCATE 19,10:PRINT USING "&";"6. Switch to colo";
3054 PRINT USING "&";"r monitor";:LOCATE 21,10:PRINT USING "&";"7. Switch to IBM Monochrome";
3057 COLOR 0,7:LOCATE 23,10:PRINT USING "&";" ";
3060 COLOR 7,0:PRINT USING "&";"  Option";
3063 LOCATE 23,10,1:DELAY=0:BRANCH$="■1$&TEXT■2$&IBMDIY■3$&SAMPLES■4$&COMM■5$&DEMO3■6$&C■7$&B■":RETURN
```

## MX80.BAS

```bas
1 'MX-80 Printer Control Program
2 'R.D.Presson        11/30/81
3 'Last modified      12/03/81
4 '
5 '
10 CLS:KEY OFF:LOCATE 5,10:PRINT"Printer Control Program
15 ON ERROR GOTO 30000
20 GOSUB 40000
30 GOSUB 50000
40 GOSUB 60000
55 LOCATE 18,10:PRINT"Quit":LOCATE 18,30:PRINT"5"
57 LOCATE 16,10:PRINT"Test":LOCATE 16,30:PRINT"4"
60 GOSUB 5000:IF ANS <> 5 THEN 60
1000 KEY ON:CLS:END
5000 AN$=INKEY$: IF AN$="" THEN 5000
5010 ANS=ASC(AN$):ANS=ANS-48:IF (ANS>255) OR (ANS<0) THEN 5000
5015 ON ANS GOSUB 11000,12000,13000,14000:RETURN
5050 '
5060 '
11000 IF OPT1% THEN OPT1%=0:LPRINT CHR$(15):LOCATE 10,10:COLOR 9:PRINT"132 cpl";:COLOR 7:PRINT"    80 cpl" ELSE 40000
11005 IF OPT2% THEN 50000
11010 RETURN
11020 '
11030 '
12000 IF NOT OPT2% THEN OPT2%=-1:LPRINT CHR$(27)+CHR$(69):LOCATE 12,10:COLOR 9:PRINT"Emphasized mode" :COLOR 7 :IF NOT OPT1% THEN 40000 ELSE :ELSE 50000
12010 RETURN
12020 '
12030 '
13000 IF NOT OPT3% THEN OPT3%=-1:LPRINT CHR$(27)+CHR$(71):LOCATE 14,10:COLOR 9:PRINT"Double Strike mode" :COLOR 7 ELSE 60000
13010 RETURN
13050 '
13060 '
13070 '
14000 LOCATE 16,10:COLOR 31:PRINT"Test":COLOR 7:LOCATE 23,1:INPUT"Enter test phrase: ",TEST$:
14010 LOCATE 23,1:PRINT SPACE$(79):IF TEST$<>"" THEN LPRINT TEST$:GOTO 14000
14015 GOTO 57
30000 IF(ERR=24) OR (ERR=27) OR (ERR=68) THEN CLS:LOCATE 12,1:INPUT "The printer is off or out of paper.  Press return when ready.",JUNK:GOTO 10 ELSE :PRINT"Error ";ERR;" occurred at line ";ERL:END
40000 LPRINT CHR$(146):LOCATE 10,10:PRINT"132 cpl    ";:COLOR 9:PRINT"80 cpl":LOCATE 10,30:COLOR 7:PRINT"1":OPT1%=-1:RETURN
40100 '
50000 COLOR 7:LOCATE 12,10:LPRINT CHR$(27)+CHR$(70):PRINT"Emphasized mode":LOCATE 12,30:PRINT"2":OPT2%=0:RETURN
50100 '
60000 COLOR 7:LOCATE 14,10:LPRINT CHR$(27)+CHR$(72):PRINT"Double Strike mode":LOCATE 14,30:PRINT"3":OPT3%=0:RETURN
```

## NIM.BAS

```bas
10 REM Game of NIM. Author: J. E. Steitz 2-14-82
20 OPTION BASE 1
30 DEFINT P,I-N
40 DIM PILE(13)
50 CLS:LOCATE 5,1
60 PRINT"*******************************************************************************"
70 PRINT"*******************************************************************************"
80 PRINT"**                                                                           **"
90 PRINT"**                                                                           **"
100 PRINT"**                                                                           **"
110 PRINT"**                                                                           **"
120 PRINT"**            If you ";:COLOR 0,7:PRINT"DO";:COLOR 7,0
130 PRINT" want instructions, just hit RETURN (";CHR$(17);CHR$(196);CHR$(217);") key.        **"
140 PRINT"*******************************************************************************"
150 PRINT"*******************************************************************************"
160 LOCATE 8,27
170 PRINT"Welcome to the game of NIM."
180 LOCATE 10,15
190 INPUT"If you do NOT want instructions, type N or NO: ",A$
200 IF A$ = "N" OR A$ = "n" OR A$="NO" OR A$="no" THEN 350
210 CLS:PRINT"                 The Game of NIM -- By J. E. Steitz 2-16-82"
220 PRINT:PRINT"The game of NIM is an ancient game of skill and strategy.  The game is played"
230 PRINT"with any number of piles of objects.  The two players take turns removing any"
240 PRINT"number of objects from one of the piles.  You can take one object or the whole"
250 PRINT"pile, but you can't take objects from two piles."
260 PRINT:PRINT"As agreed upon before the start of the game, the winner is the one who"
270 PRINT"takes (or doesn't take) the last object from the last pile.":PRINT
280 PRINT"In this version of the game, you can elect to have up to 12 piles of objects,"
290 PRINT"with up to 15 objects in each pile.":PRINT
300 PRINT"From here on out, just respond to the questions as they come up.":PRINT
310 PRINT"Oh, by the way, if you want to concede a game, just enter 0,0 when it's your"
320 PRINT"move.  Your IBM Personal Computer gladly accepts forfeits."
330 PRINT:PRINT:PRINT"                           GOOD LUCK!":BEEP:BEEP:PRINT
340 INPUT"When you have finished reading this, just press the return key. ",A$
350 CLS:PRINT:INPUT"How many piles (1-12)";NPILES
360 IF NPILES => 1 AND NPILES =< 12 THEN 380
370 BEEP:PRINT"Come, now - enter a number between 1 and 12":GOTO 350
380 PRINT:PRINT"you may have from 1 to 15 items in each pile."
390 FOR PCT = 1 TO NPILES
400 PRINT USING"How many in pile ##";PCT;
410 INPUT PILE(PCT)
420 IF PILE(PCT) >= 1 AND PILE(PCT)<= 15 THEN 440
430 BEEP:PRINT"You must enter a number between 1 and 15":GOTO 400
440 NEXT PCT
450 PRINT:INPUT"Does taking the last item Win (W) or Lose (L) the game";A$
460 IF A$ = "L" OR A$ = "l" OR A$ = "w" OR A$ = "W" THEN 480
470 BEEP:PRINT"PLEASE answer with W or L.  Now try again":GOTO 450
480 WOPT$="take"
490 IF A$ = "L" OR A$ = "l" THEN WOPT$ = "notake"
500 PRINT:INPUT"Do you want to move first (Y,N)";A$
510 IF A$ = "y" OR A$ = "Y" OR A$ = "n" OR A$ = "N" THEN 530
520 BEEP:PRINT"You MUST answer Y for yes, or N for no.  Try again.":GOTO 500
530 FIRST$="IBMPC"
540 IF A$ = "Y" OR A$ = "y" THEN FIRST$ = "player"
550 WIN$ = "no"
560 GOSUB 1240
570 IF FIRST$ = "IBMPC" THEN 610
580 GOSUB 1100
590 IF WIN$="no" THEN GOSUB 710
600 GOTO 630
610 GOSUB 710
620 IF WIN$="no" THEN GOSUB 1100
630 IF WIN$="no" THEN 570
640 IF WIN$="player" THEN GOSUB 2090
650 IF WIN$="IBMPC" THEN PRINT:GOSUB 1520:PRINT"Ho, hum --- I win again...":PRINT
660 INPUT"Want to play another";A$
670 IF A$ = "y" OR A$ = "Y" OR A$ = "n" OR A$="N" THEN 690
680 GOSUB 1420:PRINT"Please, just a simple Y or N.  Try again.":GOTO 660
690 IF A$ = "Y" OR A$ = "y" THEN 350
700 END
710 REM IBMPC MOVE
720 PCTW=0
730 FOR PCT=1 TO NPILES
740 IF PILE(PCT)>0 THEN 790
750 NEXT PCT
760 WIN$="IBMPC"
770 IF WOPT$ = "take" THEN WIN$="player"
780 GOTO 1040
790 GOSUB 1690
800 PILEW=PILE(PFIRST)
810 PCTW=PFIRST
820 IF PNZ<>1 THEN 910
830 IF PILE(PFIRST)<> 1 THEN 880
840 PILE(PFIRST)=0
850 WIN$="player"
860 IF WOPT$="take" THEN WIN$="IBMPC"
870 GOTO 1040
880 IF WOPT$="take" THEN PILE(PFIRST)=0:WIN$="IBMPC":GOTO 1040
890 PILE(PFIRST)=1
900 GOTO 1040
910 IF PALLONE THEN PILE(PFIRST)=0:GOTO 1040
920 GOSUB 1830
930 IF PCTW<>0 THEN 1010
940 PCTW=RND*NPILES
950 IF PCTW=0 THEN 940
960 IF PILE(PCTW)=0 THEN 940
970 PILEW=PILE(PCTW)
980 TPILE!=RND*PILEW
990 PILE(PCTW)=FIX(TPILE!)
1000 GOTO 1040
1010 GOSUB 1560
1020 GOSUB 1690
1030 IF PALLONE THEN IF WOPT$<>"take" THEN PILE(PCTW)=0
1040 FOR I=1 TO 1000:NEXT I
1050 GOSUB 1240
1060 IF PCTW=0 THEN RETURN
1070 PRINT USING"I took ## from pile ";PILEW-PILE(PCTW);
1080 PRINT PCTW
1090 RETURN
1100 REM Player's move
1110 PRINT"Enter pile number and the number you want to remove, separated by a comma."
1120 PRINT"Enter 0,0 if you want to concede the game."
1130 INPUT"For example: 2,7 ==> ",PPN,PREM
1140 IF PPN+PREM=0 THEN 1220
1150 IF PPN>0 AND PPN<=NPILES THEN 1170
1160 BEEP:PRINT"That pile number doesn't exist. Try one we are playing with.":GOTO 1110
1170 IF PREM>0 AND PREM<=PILE(PPN) THEN 1190
1180 GOSUB 1420:BEEP:PRINT"You can't take zero items and you can't take more than the pile contains.":GOTO 1110
1190 PILE(PPN)=PILE(PPN)-PREM
1200 GOSUB 1240
1210 RETURN
1220 WIN$="IBMPC"
1230 GOSUB 1420:RETURN
1240 REM DISPLAY PILES ROUTINE
1250 CLS
1260 FOR PHT = 15 TO 1 STEP -1
1270 FOR PCT = 1 TO NPILES
1280 IF PILE(PCT)< PHT THEN PRINT "      ";
1290 IF PILE(PCT) >= PHT THEN PRINT "O-O   ";
1300 NEXT PCT
1310 PRINT
1320 NEXT PHT
1330 FOR PCT = 1 TO NPILES
1340 PRINT USING "##    ";PCT;
1350 NEXT PCT
1360 PRINT:PRINT
1370 FOR PCT = 1 TO NPILES
1380 PRINT USING "(##)  ";PILE(PCT);
1390 NEXT PCT
1400 PRINT
1410 RETURN
1420 REM RAZZBERRY ROUTINE
1430 SOUND 400,7
1440 FOR I = 1 TO 15
1450 SOUND 90,20
1460 FOR J=1 TO 15: NEXT J
1470 SOUND 40,0
1480 FOR J=1 TO 15: NEXT J
1490 NEXT I
1500 SOUND 40,0
1510 RETURN
1520 REM                          FANFARE ROUTINE
1530 PLAY"t140mbo2c8f8a8o3c8c16c16c8o2a8a16a16a8f8a8f8c"
1540 PLAY"mbo2c8f8a8o3c4o2a8o3c.."
1550 RETURN
1560 REM                    MAKE ALL BIT COLUMNS EVEN ROUTINE
1570 REM REQUIRES PCTW - THE 'WORKING' PILE NUMBER AND NPILES - PILE COUNT
1580 PILE(PCTW)=0
1590 MASK=8
1600 FOR I=1 TO 4
1610 PBC=0
1620 FOR PCT=1 TO NPILES
1630 IF PILE(PCT) AND MASK THEN PBC=PBC+1
1640 NEXT PCT
1650 IF PBC AND 1 THEN PILE(PCTW)=PILE(PCTW) OR MASK
1660 MASK=MASK/2
1670 NEXT I
1680 RETURN
1690 REM                          CHECK PILE STATUS ROUTINE
1700 REM If all piles contain one, sets pallone = 1
1710 REM If all piles are empty, pnz is set to zero, else it counts non-empties
1720 REM PFIRST is set to the pile number of the first non-empty pile.
1730 PNSAVE=0
1740 PNZ=0
1750 PALLONE=1
1760 FOR PCT=1 TO NPILES
1770 IF PILE(PCT)>1 THEN PALLONE=0
1780 IF PILE(PCT)<>0 AND PNSAVE=0 THEN PNSAVE=PCT
1790 IF PILE(PCT)<>0 THEN PNZ=PNZ+1
1800 NEXT PCT
1810 PFIRST=PNSAVE
1820 RETURN
1830 REM                             ANALYZE BIT COLUMNS ROUTINE
1840 REM IF any bit column is odd, sets PCTW to the pile number of the biggest
1850 REM pile having a bit in the odd column and sets PILEW to
1860 REM the number of items in that pile.
1870 REM IF ALL BIT COLUMNS ARE EVEN, SETS BOTH THE ABOVE VALUES TO ZERO.
1880 MASK = 8
1890 FOR I= 1 TO 4
1900 PBC=0
1910 PNSAVE=0
1920 PILESAVE=0
1930 FOR PCT=1 TO NPILES
1940 M= PILE(PCT) AND MASK
1950 IF M=0 THEN 1980
1960 PBC=PBC+1
1970 IF PILE(PCT) > PILESAVE THEN PILESAVE=PILE(PCT):PNSAVE=PCT
1980 NEXT PCT
1990 M=PBC AND 1
2000 IF M THEN 2060
2010 MASK=MASK/2
2020 NEXT I
2030 PILEW=0
2040 PCTW=0
2050 RETURN
2060 PILEW=PILESAVE
2070 PCTW=PNSAVE
2080 RETURN
2090 REM                       PLAYER WINS DISPLAY ROUTINE
2100 PLAY"mbt162o2c4e4e4g4g4o3c4c4e4e4c4c4o2g4g4e4e4"
2110 FOR I=1 TO 4
2120 COLOR 7,0
2130 CLS
2140 IF I AND 1 THEN COLOR 0,7
2150 IF I = 3 THEN PLAY"mbt162o3e8e-8d4o2b4b4g4g4f4f4o3d8e8c4c4c4c4c4."
2160 PRINT"*******************************************************************************"
2170 PRINT"*******************************************************************************"
2180 PRINT"********   *********   *******        *********   ********   ******************"
2190 PRINT"**********   *****   *******   ******   *******   ********   ******************"
2200 PRINT"************   *   *******   **********   *****   ********   ******************"
2210 PRINT"**************   *********   **********   *****   ********   ******************"
2220 PRINT"**************   *********   **********   *****   ********   ******************"
2230 PRINT"**************   ***********   ******   ********   ******   *******************"
2240 PRINT"**************   *************        ************        *********************"
2250 PRINT"*******************************************************************************"
2260 IF I=4 THEN COLOR 31,0
2270 PRINT"**********************************************************************   ******"
2280 PRINT"*********   ***************   ***     *****   *********   ***********   *******"
2290 PRINT"**********   *************   *****   ******     *******   **********   ********"
2300 PRINT"***********   ***********   ******   ******   *   *****   *********   *********"
2310 PRINT"************   ***   ***   *******   ******   ***   ***   ********   **********"
2320 PRINT"*************   *     *   ********   ******   *****   *   *******   ***********"
2330 PRINT"**************     *     *********   ******   *******     *********************"
2340 PRINT"***************   ***   *********     *****   *********   *****   *************"
2350 PRINT"*******************************************************************************"
2360 PRINT"*******************************************************************************"
2370 NEXT I
2380 COLOR 7,0
2390 PRINT
2400 RETURN
```

## PATTERNS.BAS

```bas
20 ' PATTERNS    ED DAVIS 1-2-82
30 ' Comments welcome
40 ' but BE  KIND!
50 ' Burlington (8-446)-2091
60 ' HI RES COLOR DEMO
70 ' ###################################
100 KEY OFF:SCREEN 0,1:COLOR 15,0,0:WIDTH 40:CLS:M%=0
110 LOCATE 10,1:PRINT "<<-  IF THIS PRINTING IS NOT IN THE  ->>"
120 LOCATE 11,1:PRINT "   CENTER OF THE SCREEN PRESS  'M' TO
130 LOCATE 12,1:PRINT "   MOVE THE PICTURE TO THE RIGHT, ANY
140 LOCATE 13,1:PRINT "    OTHER KEY TO GO TO THE PROGRAM.
150 K$=INKEY$:IF K$="" GOTO 150
160 IF K$="M" OR K$="m" THEN OUT 980,2: OUT 981,43:M%=1:GOTO 200
170 M%=0
200 CLS
210 COLOR 23 :LOCATE 2,13:PRINT"PATTERNS"
215 LOCATE 3,13:PRINT"E.DAVIS
220 COLOR  7,0,0:LOCATE 6,2:PRINT"Please select one of the following:
240 LOCATE 8,9: PRINT"1- WALLPAPER (NICE!)
250 LOCATE 9,9:PRINT"2- WAVES
260 LOCATE 10,9:PRINT "3- ALPHA PARTICLE
270 LOCATE 11,9:PRINT "4- FACE
300 LOCATE 21,9:PRINT "0- TO SWITCH TO/FROM DISPLAYS
310 LOCATE 22,9:PRINT "Q- TO QUIT PROGRAM
320 LOCATE 23,9:PRINT "M- TO MOVE SCREEN"
390 LOCATE 4,16
400 K$=INKEY$:IF K$="" GOTO 400
410 IF K$="0" THEN GOSUB 65000
420 IF K$="1" THEN GOSUB 500
430 IF K$="2" THEN GOSUB 600
440 IF K$="3" THEN GOSUB 700
450 IF K$="4" THEN GOTO 800
490 IF K$="Q" OR K$="q" THEN CLS:END
495 IF K$="M" OR K$="m" THEN GOTO 100
499 GOTO 200
500 CLS :REM BEGINNING OF PATTERN PGMS E.DAVIS 1-2-82
510 SCREEN 1,0:COLOR 0,1:IF M%=1 THEN OUT 980,2:OUT 981,43
520 FOR I=0 TO 300:C=C+1:C=C-(3*INT(C/3)):IF C>3 THEN C=0
530 LINE (I,0)-(300-I,191),C:NEXT
540 FOR I=0 TO 191:C=C+1:C=C-(3*INT(C/3)):IF C>3 THEN C=0
550 LINE (0,191-I)-(300,I),C:NEXT I:GOSUB 2000:GOTO 500
600 CLS ' WAVES
610 SCREEN 1,0:COLOR 0,1:IF M%=1 THEN OUT 980,2:OUT 981,43
620  C=3:LC=0:T#=18.8495559#
630 FOR X=0 TO T# STEP T#/279:LINE (140,96)-(X*14.8,60*SIN(X)+96),C
640 NEXT :GOSUB 2000:GOTO 600
700 CLS' ALPHA PARTICLES
710 SCREEN 1,0:COLOR 1,0:IF M%=1 THEN OUT 980,2:OUT 981,43
715 CLS
720 FOR J=1 TO 150:SOUND RND*2000+1037,2:X=INT(RND(1)*277):Y=INT(RND(1)*151)
730 LINE (140,96)-(X,Y),C:C=INT (RND(1)*3):NEXT J:GOSUB 2000:GOTO 700
800 CLS:IF PIC=1 THEN GOTO 804
801 PIC=1
802 S=3.142*235/180:F=3.142*305/180:DIM FF%(600):DIM FS%(600)
804 SCREEN 1,0:COLOR 7,0
806 CIRCLE (160,30),100,2,S,F,1
808 CIRCLE (160,100),50,2
810 PAINT (160,140),3,2
812 CIRCLE (160,170),100,2,S-3.142,F-3.142,1
814 PAINT (160,65),3,2
816 GET(115,115)-(205,145),FS%
818 GET (115,55)-(205,88),FF%
820 CLS
822 CIRCLE (160,100),90,2
824 PAINT (100,100),2,2
826 CIRCLE (120,75),11,1,,,1.1
828 PAINT (120,65),1,1
830 CIRCLE(200,75),11,1,,,1.1
832 PAINT (200,65),1,1
834 PRESET (120,40):DRAW "C1S4F11D1H11G11D1E11F11"
836 PRESET (200,40):DRAW "C1S4F11D1H11G11D1E11F11"
838 PUT (115,115),FS%
840 KEY OFF:LOCATE 25,10:PRINT "PRESS ANY KEY FOR MENU";
842 FOR I=1 TO 1000:NEXT I:PUT (115,115),FS%:PUT (115,115),FF%:GOSUB 846
844 FOR I=1 TO 600:NEXT I:PUT (115,115),FF%:PUT (115,115),FS%:GOSUB 846:GOTO 842
846 K$=INKEY$: IF K$="" THEN RETURN
848 GOTO 200
2000 ' ROUTINE TO REPEAT OR RETURN
2010 KEY OFF:LOCATE 25,2:PRINT " 'R' TO REPEAT, OTHER KEY TO RETURN";
2015 LOCATE 1,1
2020 K$=INKEY$:IF K$="" GOTO 2020
2030 IF K$="R" OR K$="r" THEN RETURN
2040 RETURN 200
65000 ' COLOR MONITOR-MONOCHROME MONITOR SWITCH    EMD 11-81
65001 CLS
65002 PRINT:PRINT"IF YOU WANT TO TOGGLE MONOCHROME/COLOR  THEN;"
65003 PRINT"   FOR COLOR PRESS - C"
65004 PRINT"   FOR MONO  PRESS - M"
65005 PRINT"   FOR NO CHANGE PRESS ANY OTHER KEY."
65006 K$=INKEY$:IF K$="" GOTO 65006
65007 IF K$="C" OR K$="c" THEN GOSUB 65019:RETURN
65008 IF K$="M" OR K$="m" THEN GOSUB 65011:RETURN
65009 CLS
65010 PRINT"@@@@@@@@@@@@    NO CHANGE   @@@@@@@@@@@@@@":RETURN
65011 REM switch to monochrome adapter
65012 DEF SEG=0
65013 POKE &H410,(PEEK(&H410) OR &H30)
65014 DEF SEG
65015 LOCATE ,,1,12,13
65016 SCREEN 0
65017 WIDTH 80
65018 RETURN
65019 REM switch to color/graphics adapter
65020 DEF SEG=0
65021 POKE &H410,(PEEK(&H410) AND &HCF) OR &H20
65022 DEF SEG
65023 LOCATE ,,1,6,7
65024 SCREEN 0
65025 WIDTH 40
65026 RETURN
```

## PEOPLE.BAS

```bas
10 'PEOPLE LEARNING PROGRAM
20 'BY R.D.PRESSON  11/15/81
30 'LAST MODIFIED   12/02/81
40 '
50 '
60 GOTO 640
70 CUR=2:CLS:LOCATE 5,1
80 GET #1,CUR
90 GOSUB 920
100 ENDOFQ=INSTR(QUE$,"    ")
110 QUES$=LEFT$(QUE$,ENDOFQ-1)
120 IF RTPTR=0 THEN 210
130 PRINT QUES$;:COLOR 31:PRINT"?   ";:COLOR 7
140 GOSUB 930:LOCATE CSRLIN-2,1+LEN(QUES$):PRINT"?";:LOCATE 2+CSRLIN,1
150 IF YN=2 THEN INPUT"Enter new question: ",QUES$:LSET QUE$=QUES$:PUT 1,CUR:GOTO 130
160 PREV=CUR
170 IF YN=1 THEN CUR=RTPTR ELSE CUR=WRNGPTR
180 SAVEANS=YN
190 GOTO 80
200 END
210 'Have reached an entry. Is it correct?
220 PRINT"Are you ";QUES$;:COLOR 31:PRINT"?   ";:COLOR 7
230 GOSUB 930:LOCATE CSRLIN-2,9+LEN(QUES$):PRINT"?";:LOCATE 2+CSRLIN,1
240 IF YN=2 THEN INPUT"Enter new name: ",QUES$:LSET QUE$=QUES$:PUT 1,CUR:GOTO 220
250 IF YN=1 THEN 520
260 PRINT
270 PRINT"I give up.  Who are you";:COLOR 31:PRINT"?   ";:COLOR 7
280 INPUT " ",ANIM$:LOCATE CSRLIN-1,24:PRINT"?";:LOCATE 2+CSRLIN,1
290 PRINT:PRINT"Please type a yes or no question that will distinguish between ";QUES$
300 PRINT " and ";ANIM$;"."
310 PRINT
320 INPUT Q$:PRINT
330 PRINT "What is the correct answer for ";ANIM$;"?"
340 GOSUB 930
350 GET #1,1
360 CNT=CVI(L$):LAST=CVI(R$)
370 CNT=CNT+1:LAST=LAST+2
380 LSET L$=MKI$(CNT):LSET R$=MKI$(LAST)
390 PUT #1,1
400 GET #1,PREV
410 IF SAVEANS=0 THEN LSET L$=MKI$(LAST-1):ELSE LSET R$=MKI$(LAST-1)
420 PUT #1,PREV
430 GET #1,LAST-1
440 LSET QUE$=Q$:IF YN=1 THEN RTPTR=LAST:WRNGPTR=CUR
450 ELSE RTPTR=CUR:WRNGPTR=LAST
460 LSET L$=MKI$(WRNGPTR):LSET R$=MKI$(RTPTR)
470 PUT #1,LAST-1:GET #1,LAST
480 GOSUB 910
490 LSET QUE$=ANIM$:PUT #1,LAST
500 PRINT "I now know ";CNT;" people."
510 GOTO 570
520 'correct
530 FOR L=1 TO 10:PRINT:NEXT L
540 BEEP
550 PRINT"You are uniquely identified by your fingerprints."
560 PRINT
570 PRINT "Does anyone else want to test my powers";:COLOR 31:PRINT "?   ";:COLOR 7
580 GOSUB 930
590 IF YN=1 THEN 70
600 CLS:LOCATE 12,37:PRINT"Be yourself.":LOCATE 23,1
610 CLOSE #1
620 KEY ON
630 END
640 DIM NW$(70),ANIM$(70),Q$(70),A$(70),RF$(20),WF$(20),AN$(10),CL$(20),OP$(40)
650 RF$="READ PEOPLEFILE,R":WF$="WRITE PEOPLEFILE,R":CL$="CLOSE"
660 OPEN "PEOPLEF" AS #1 LEN=80
670 FIELD #1,76 AS QUE$,2 AS L$,2 AS R$
680 KEY OFF:CLS:LOCATE 5,1
690 PRINT " ***** PEOPLE LEARNING PROGRAM *****": PRINT:PRINT"Do you need instructions? (Y/N): ";: GOSUB 930:IF YN=0 THEN 70
700 PRINT:PRINT "Instructions:":PRINT
710 PRINT"     I will try to determine your identity by asking questions.
720 PRINT "Please respond by pressing the Y or N key."
730 PRINT "If I don't know you, I will ask you for information so that
740 PRINT "I will know you in the future.":PRINT
750 PRINT "     Shall we begin? (Y/N): ":GOSUB 930:IF YN=1 THEN 70
760 INPUT "NEWFILE?",A$:IF A$<>"NEWFILE" THEN END
770 PRINT "CHOSE TO MAKE NEW FILE":END
780 IF A$<>"NEWFILE" THEN 70
790 LSET L$=MKI$(2):LSET R$=MKI$(4)
800 PUT 1,1
810 LSET QUE$="Do you work for IBM"
820 LSET L$=MKI$(3):LSET R$=MKI$(4)
830 PUT 1,2
840 GOSUB 910
850 LSET QUE$="Tim from Computerland"
860 PUT 1,3
870 LSET QUE$="Rick Presson"
880 GOSUB 910
890 PUT 1,4
900 GOTO 70
910 LSET L$=MKI$(0):LSET R$=MKI$(0):RETURN
920 RTPTR=CVI(R$):WRNGPTR=CVI(L$):RETURN
930 YN$=INKEY$: IF YN$="" THEN 930
940 YN=3
950 IF (YN$="Y") OR (YN$="y") THEN YN=1:PRINT"Yes"
960 IF (YN$="N") OR (YN$="n") THEN YN=0:PRINT"No"
970 IF (YN$="E") OR (YN$="e") THEN YN=2:PRINT"Edit"
980 IF YN=3 THEN 930
990 PRINT
1000 RETURN
```

## PLOTTER.BAS

```bas
10 KEY OFF
20 W%=40
30 SCREEN 1:COLOR 1
50 WID%=W%-8:HGHT%=25-4
90 DIM A$(51)
91 DIM X(121),Y1(121),Y2(121),Y3(121),Y4(121),Y5(121)
99 K%=0
100 GOSUB 7000
5000 REM *** INITIALIZE PRINTER ARRAY ***
5100 FOR I%=1 TO HGHT%
5110   A$(I%)="      |"+SPACE$(120):NEXT I%
5120   A$(0)= "      +"+STRING$(120,"-")
5200 REM *** FIND MIN AND MAX VALUES FOR BOTH AXIES ***
5210 XMIN=X(0):XMAX=X(0):YMIN=Y1(0):YMAX=Y1(0)
5220 FOR I%=0 TO WID%
5230    IF X(I%)=-32768. THEN GOTO 5290
5232    IF X(I%)<XMIN AND X(I%)<>-32768. THEN XMIN=X(I%):GOTO 5250
5234    IF X(I%)>XMAX THEN XMAX=X(I%)
5250    IF Y1(I%)=-32768. THEN PRINT "MISSING `Y' VALUE ERROR - PROGRAM TERMINATED":GOTO 9999 ELSE YCHK%=0
5252    IF Y1(I%)<YMIN AND Y1(I%)<>-32768. THEN YMIN=Y1(I%):YCHK%=1
5254    IF Y2(I%)<YMIN AND Y2(I%)<>-32768. THEN YMIN=Y2(I%):YCHK%=1
5256    IF Y3(I%)<YMIN AND Y3(I%)<>-32768. THEN YMIN=Y3(I%):YCHK%=1
5258    IF Y4(I%)<YMIN AND Y4(I%)<>-32768. THEN YMIN=Y4(I%):YCHK%=1
5260    IF Y5(I%)<YMIN AND Y5(I%)<>-32768. THEN YMIN=Y5(I%):YCHK%=1
5270    IF YCHK%=1 THEN GOTO 5281
5272    IF Y1(I%)>YMAX AND Y1(I%)<>-32768. THEN YMAX=Y1(I%)
5274    IF Y2(I%)>YMAX AND Y2(I%)<>-32768. THEN YMAX=Y2(I%)
5276    IF Y3(I%)>YMAX AND Y3(I%)<>-32768. THEN YMAX=Y3(I%)
5278    IF Y4(I%)>YMAX AND Y4(I%)<>-32768. THEN YMAX=Y4(I%)
5280    IF Y5(I%)>YMAX AND Y5(I%)<>-32768. THEN YMAX=Y5(I%)
5281    NEXT I%
5290    IF XMIN=XMAX AND YMIN=YMAX THEN PRINT "MAXIMUM AND MINIMUM VALUES FOR BOTH AXIES ARE THE SAME - PROGRAM TERMINATED":GOTO 9999
5300 REM *** FIND THE INCREMENT VALUE FOR EACH AXIS AND SCALE THE AXIES ***
5305 MAX=XMAX:MIN=XMIN:SIZ%=WID%:GOSUB 5310:XINCR=INCR:XB=BASE
5306 MAX=YMAX:MIN=YMIN:SIZ%=HGHT%:GOSUB 5310:YINCR=INCR:YB=BASE
5309 GOTO 5330
5310 REM *** SUBROUTINE TO FIND BEST INCREMENT AND BASE VALUES ***
5311 INCR=1/(SIZ%/(MAX-MIN))
5312 F=1.
5313 IF (F*INCR)<1 AND 1=CINT(-1*(32767.>(F*INCR))*(F*INCR)) THEN INCR=1/F:GOTO 5320
5314 IF (F*INCR)<0.5 AND (F*INCR)>0.1 THEN INCR=1/(2*F):GOTO 5320
5315 IF INCR<1 THEN F=F*10 ELSE F=F/10
5316 GOTO 5313
5320 BASE=INCR*INT(MIN/INCR):RETURN
5330 FOR I%=0 TO HGHT% STEP 10
5340 MID$(A$(I%),2,6)=RIGHT$(SPACE$(5)+STR$(CINT(I%*YINCR+YB%))+"+",6)
5350 NEXT I%
5400 XLABEL$=SPACE$(7+WID%)
5410 FOR I%=0 TO WID% STEP 10
5420 MID$(A$(0),(7+I%),1)="+"
5430 MID$(XLABEL$,(3+I%),5)=RIGHT$(SPACE$(5)+STR$(CINT(I%*XINCR+XB)),5)
5440 NEXT I%
5500 REM *** PLACE POINTS INTO PLOT ARRAY IN APPROPRIATE LOCATIONS ***
5510 FOR I%=0 TO WID%
5520 IF X(I%)=-32768. THEN GOTO 5600 ELSE XP%=7+CINT((X(I%)-XB)/XINCR)
5530 IF Y1(I%)=-32768. THEN GOTO 5600 ELSE MID$(A$(CINT((Y1(I%)-YB)/YINCR)),XP%,1)="*"
5540 IF Y2(I%)=-32768. THEN GOTO 5600 ELSE MID$(A$(CINT((Y2(I%)-YB)/YINCR)),XP%,1)="+"
5550 IF Y3(I%)=-32768. THEN GOTO 5600 ELSE MID$(A$(CINT((Y3(I%)-YB)/YINCR)),XP%,1)="O"
5560 IF Y4(I%)=-32768. THEN GOTO 5600 ELSE MID$(A$(CINT((Y4(I%)-YB)/YINCR)),XP%,1)="#"
5570 IF Y5(I%)=-32768. THEN GOTO 5600 ELSE MID$(A$(CINT((Y5(I%)-YB)/YINCR)),XP%,1)="."
5600 NEXT I%
6000 REM *** OUTPUT THE FINISHED PLOT ***
6001 IF K%<=1 THEN GOTO 6005
6002 FOR X%=1 TO 15:Y$=INKEY$:NEXT X%
6003 IF INKEY$="" THEN 6003
6005 CLS
6010 FOR I%=0 TO HGHT%
6020 PRINT LEFT$(A$(HGHT%-I%),WID%+7)
6030 NEXT I%
6040 PRINT LEFT$(XLABEL$,WID%+7)
6050 PRINT SPACE$(WID%\2)+LABL$
6999 GOTO 100
7000 REM *** LOOP THROUGH POSSIBLE CURVES FOR PLOTTING ***
7005 FOR I%=0 TO 120:X(I%)=-32768.:Y1(I%)=-32768.:Y2(I%)=-32768.:Y3(I%)=-32768.:Y4(I%)=-32768.:Y5(I%)=-32768.:NEXT I%
7010 IF K%=0 THEN 7050 ELSE IF K%=1 THEN 7060 ELSE IF K%=2 THEN 7070 ELSE IF K%=3 THEN 7100
7040 FOR X%=1 TO 15:Y$=INKEY$:NEXT X%
7041 IF INKEY$="" THEN 7041
7042 GOTO 9999
7050 FOR I%=0 TO 30:X(I%)=I%:Y1(I%)=3*I%:NEXT I%
7051 LABL$="LINEAR PLOT":K%=1:GOTO 5000
7060 FOR I%=0 TO 30:X(I%)=I%:Y1(I%)=((I%-15)/1.5)^2:NEXT I%
7061 LABL$="PARABOLIC PLOT":K%=2:GOTO 5000
7070 FOR I%=0 TO 30:X(I%)=I%:Y1(I%)=50+50*SIN(I%/2):NEXT I%
7071 LABL$="TRIGONOMETRIC PLOT":K%=3:GOTO 5000
7100 FOR I%=0 TO 30:X(I%)=I%:Y1(I%)=3*I%:Y2(I%)=((I%-15)/1.5)^2:Y3(I%)=50+50*SIN(I%/2):NEXT I%
7101 LABL$="COMBINATION PLOT":K%=999:GOTO 5000
9999 SCREEN 1,0:COLOR 1:CHAIN "A:LOGOC
```

## PRDEMO.BAS

```bas
10 REM IBM 80-CPS Printer Character Set Demonstration
20 REM Displays all twelve character fonts
30 REM Dick Dievendorff, 11/21/81
40 ESC$=CHR$(27): SO$=CHR$(14)
50 ON ERROR GOTO 690:'Trap printer error
60 LPRINT CHR$(12):'Form feed
70 FOR I%=0 TO 31
80 A$=A$+CHR$(I%+&H20)
90 B$=B$+CHR$(I%+&H40)
100 D$=D$+CHR$(I%+&HA0)
110 E$=E$+CHR$(I%+&HC0)
120 NEXT I%
130 FOR I%=96 TO 126
140 C$=C$+CHR$(I%)
150 NEXT I%
160 GOSUB 610: GOSUB 630: GOSUB 660
170 LPRINT SO$;"IBM 80-CPS PRINTER";CHR$(20)
180 LPRINT
190 GOSUB 620: GOSUB 640:'Normal print mode
200 LPRINT "Normal mode                     "; : GOSUB 520
210 GOSUB 610
220 LPRINT "Emphasized mode                 "; : GOSUB 520
230 GOSUB 620
240 GOSUB 630
250 LPRINT "Double strike mode              "; : GOSUB 520
260 GOSUB 610
270 LPRINT "Emphasized double strike mode   "; : GOSUB 520
280 GOSUB 620: GOSUB 640
290 GOSUB 650
300 LPRINT "Compressed mode                 "; : GOSUB 520
310 GOSUB 630
320 LPRINT "Compressed double strike mode   "; : GOSUB 520
330 GOSUB 660: GOSUB 640
340 X$=SO$: 'Everything to double width mode now
350 LPRINT SO$;"Double width mode": GOSUB 520
360 GOSUB 610
370 LPRINT SO$;"Double width emphasized mode" : GOSUB 520
380 GOSUB 620
390 GOSUB 630
400 LPRINT SO$;"Double width double strike mode" : GOSUB 520
410 GOSUB 640
420 GOSUB 610: GOSUB 630
430 LPRINT SO$;"Double width emphasized double strike" : GOSUB 520
440 GOSUB 620: GOSUB 640
450 GOSUB 650
460 LPRINT SO$;"Double width compressed mode" : GOSUB 520
470 GOSUB 630
480 LPRINT SO$;"Double width compressed double strike" : GOSUB 520
490 GOSUB 620: GOSUB 640: GOSUB 660
500 LPRINT : LPRINT
510 END
520 IF X$ = SO$ THEN 560
530 LPRINT A$
540 LPRINT B$;C$
550 GOTO 590
560 LPRINT SO$;A$;CHR$(20)
570 LPRINT SO$;B$;CHR$(20)
580 LPRINT SO$;C$;CHR$(20)
590 LPRINT
600 RETURN
610 LPRINT ESC$+"E"; : RETURN : 'Turns ON  EMPHASIZED mode
620 LPRINT ESC$+"F"; : RETURN : 'Turns OFF EMPHASIZED mode
630 LPRINT ESC$+"G"; : RETURN : 'Turns ON  DOUBLE STRIKE mode
640 LPRINT ESC$+"H"; : RETURN : 'Turns OFF DOUBLE STRIKE mode
650 LPRINT CHR$(15); : RETURN : 'Turns ON  COMPRESSED mode
660 LPRINT CHR$(18); : RETURN : 'Turns OFF COMPRESSED mode
670 REM
680 REM Error trap routine for printer failure
690 PRINT "Ready Line Printer"
700 FOR I%=1 TO 1000: NEXT I%: 'Delay for a couple of seconds
710 RESUME
```

## PRINT.BAS

```bas
10 REM
20 REM-----------------------------------------
30 REM PRINT ANY TEXT FILE
40 REM
42 DEFINT A-Z
44 FALSE = 0: TRUE = NOT FALSE
50 PRTLEN = 80  ' LENGTH OF PRINT LINE
60 PRTMAX = 55  ' NO LINES / PAGE
70 PRTCTRL$ = ""    ' PRINTER FORMAT CTRL CHAR
80 ENDCTRL$ = ""   'END OF PRT LINE CTRL CHAR
90 CLS
94 KEY OFF
96 DRIVEB = FALSE: INFILE$ = ""
98 PRTPAUSE = FALSE: DSKPRINTER = FALSE: SKIP = FALSE
100 LOCATE 5,1,0
120 PRINT "DISPLAY/PRINT ANY TEXT FILE": PRINT: PRINT
140 PRINT
150 PRINT "ENTER THE NAME OF THE FILE, OR"
160 PRINT "ENTER `FILES' (ENTER) FOR DIRECTORIES"
170 PRINT:PRINT "PRESS (ESC) ANYTIME TO END OUTPUT"
180 PRINT
190  INPUT INFILE$
200 IF INFILE$ = "" THEN GOTO 90
220 IF (INFILE$ = "FILES") OR (INFILE$ = "files") THEN FILES : IF DRIVEB = TRUE THEN PRINT: FILES "B:*.*": PRINT: GOTO 140 ELSE GOTO 140
230 PRINT: PRINT "PRINT THE FILE ALSO? (Y OR N) "
240 A$ = INPUT$(1)
250 IF (A$ = "Y") OR (A$ = "y") THEN DSKPRINTER = TRUE ELSE DSKPRINTER = FALSE
260 PRINT:PRINT "PRINTER PAGE OVERFLOW CTRL? (Y OR N)  "
270 A$ = INPUT$(1)
280 IF A$ = "Y" OR A$ = "y" THEN SKIP = TRUE ELSE SKIP = FALSE
290 PRINT: PRINT "PAUSE WHEN SCREEN FULL? (Y OR N) "
300 A$ = INPUT$(1)
310 IF (A$ = "Y") OR (A$ = "y") THEN PRTPAUSE = TRUE ELSE PRTPAUSE = FALSE
320 REM
330 ON ERROR GOTO 630
340 NODISPLINES = 0: NOPRTLINES = 0
350 OPEN INFILE$ FOR INPUT AS #2
360 CLS
370 WHILE NOT EOF(2)
380 A$ = INKEY$: IF A$ = CHR$(27) GOTO 500
390 NODISPLINES = NODISPLINES + 1
400 NOPRTLINES = NOPRTLINES + 1
410 IF NODISPLINES = 24 THEN GOSUB 720  'DISP FULL
420 IF NOPRTLINES = PRTMAX THEN GOSUB 670  'PAGE FULL
430 LINE INPUT#2, L$
440 FOR I = 1 TO LEN(L$)
450 IF MID$(L$,I,1) = CHR$(10) THEN MID$(L$,I,1) = CHR$(0)
460 NEXT I
470 PRINT L$
480 IF DSKPRINTER = TRUE THEN LPRINT PRTCTRL$ + L$ + ENDCTRL$:
490 WEND
500 ' END OF INPUT FILE
590 PRINT: PRINT:PRINT "END OF FILE": PRINT"PRESS (ESC) IF DONE, OR": PRINT "ANY OTHER KEY FOR NEXT FILE  "
592 A$ = INPUT$(1): CLOSE #2
594 IF A$ = CHR$(27) THEN END ELSE GOTO 10
630 'CHECK FOR PRINTER TIMEOUT
640 IF ERR = 24 AND ERL = 570 THEN RESUME 580 ELSE IF ERR = 24 THEN RESUME
650 IF ERR = 27 THEN PRINT: PRINT "TURN PRINTER ON" : PRINT "PRESS ANY KEY WHEN READY": A$ = INPUT$(1): RESUME
660 ON ERROR GOTO 0: RESUME
670 REM FULL PAGE
680 IF (DSKPRINTER = TRUE) AND (SKIP = TRUE) THEN LPRINT CHR$(12)
690 NOPRTLINES = 0
700 RETURN 370
710 REM DISP FULL
720 WHILE PRTPAUSE = TRUE
730 LOCATE 25,1,0
740 PRINT "PRESS (ESC) TO QUIT, OR (SPACE BAR)";
750 A$ = INPUT$(1)
760 CLS
770 NODISPLINES = 0
780 IF A$ = CHR$(27) THEN CLOSE #2: RETURN 560
790 RETURN 370
800 WEND
810 RETURN 370
820 REM
```

## PSTYLES.BAS

```bas
10 A$="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890"
11 A$=A$+A$+A$+A$
45 REM *** RESET THE PRINTER CONTROL REGISTERS FOR NORMAL TYPE
50 LPRINT CHR$(27);"F";CHR$(27);"H";CHR$(24)
51 INPUT;"SET PRINTER PAPER FOR NEW PAGE AND RETURN",B$
94 REM *** PRINT HEADER IN NORMAL TYPE AT DOUBLE WIDTH IN EMPHASIZED MODE
95 LPRINT CHR$(14);CHR$(27);"E";"   IBM PRINTER TYPE STYLES AVAILABLE"
99 REM *** RETURN TO NORMAL WIDTH AND NORMAL TYPE WEIGHT
100 LPRINT CHR$(27);"F"
105 LPRINT " "
110 LPRINT "80 CHARACTERS/LINE - NORMAL TYPE (PRINTER DEFAULT)"
111 LPRINT "     ";LEFT$(A$,75)
120 REM *** INITIATE DOUBLE STRIKE MODE
122 LPRINT CHR$(27);"G"
124 LPRINT "80 CHARACTERS/LINE - DOUBLE STRIKE MODE (NORMAL TYPE)"
126 LPRINT "     ";LEFT$(A$,75)
127 REM *** END DOUBLE STRIKE MODE AND INITIATE EMPHASIZED MODE
128 LPRINT CHR$(27);"E";CHR$(27);"H"
130 LPRINT "80 CHARACTERS/LINE - EMPHASIZED MODE (NORMAL TYPE)"
140 LPRINT "     ";LEFT$(A$,75)
164 REM *** INITIATE DOUBLE STRIKE MODE WITH EMPHASIZED MODE
165 LPRINT CHR$(27);"G"
170 LPRINT "80 CHARACTERS/LINE - DOUBLE STRIKE/EMPHASIZED MODE (NORMAL TYPE)"
180 LPRINT "     ";LEFT$(A$,75)
190 BAR$=STRING$(79,"=")
194 REM *** RETURN TO NORMAL TYPE WITHOUT DOUBLE STRIKE OR EMPHASIZE
195 LPRINT CHR$(27);"F";LEFT$(BAR$,80)
200 LPRINT " "
205 REM *** INITIATE DOUBLE WIDTH MODE (NOTE: REQUIRED FOR EACH LINE!!!)
210 LPRINT CHR$(14);"40 CHAR/LINE - DOUBLE WIDTH(NORMAL TYPE)"
220 LPRINT CHR$(14);"     ";LEFT$(A$,35)
225 REM *** INITIATE DOUBLE STRIKE WITH DOUBLE WIDTH MODE (NORMAL TYPE)
230 LPRINT CHR$(27);"G"
240 LPRINT CHR$(14);"40 CHAR/LINE - DOUBLE STRIKE (2X WIDTH)"
250 LPRINT CHR$(14);"     ";LEFT$(A$,35)
255 REM *** INITIATE EMPHASIZE MODE AND ELIMINATE DOUBLE STRIKE
260 LPRINT CHR$(27);"E";CHR$(27);"H"
270 LPRINT CHR$(14);"40 CHAR/LINE - EMPHASIZED (2X WIDTH)"
280 LPRINT CHR$(14);"     ";LEFT$(A$,35)
285 REM *** INITIATE DOUBLE STRIKE MODE WITH CONTINUED EMPHASIZED MODE
290 LPRINT CHR$(27);"G"
300 LPRINT CHR$(14);"40 CHAR/LINE -2X STRIKE/WID.(EMPHASIZED)"
310 LPRINT CHR$(14);"     ";LEFT$(A$,35)
315 REM *** RETURN TO NORMAL MODES
320 LPRINT CHR$(27);"F";LEFT$(BAR$,80)
395 REM *** INITIATE CONDENSED TYPE MODE (REMAINS UNTIL CHANGED TO NORMAL)
400 LPRINT CHR$(15)
410 LPRINT "132 CHARACTERS/LINE - CONDENSED TYPE"
411 LPRINT "     "+LEFT$(A$,75)
420 REM *** INITIATE DOUBLE STRIKE MODE (CONDENSED TYPE)
421 LPRINT CHR$(27);"G"
430 LPRINT "132 CHARACTERS/LINE - DOUBLE STRIKE MODE (CONDENSED TYPE)"
440 LPRINT "     "+LEFT$(A$,75)
445 REM *** RETURN TO NORMAL MODE AND STOP DOUBLE STRIKE
450 LPRINT CHR$(18);LEFT$(BAR$,80)
455 REM *** INITIATE CONDENSED TYPE MODE
500 LPRINT CHR$(15)
505 REM *** INITIATE DOUBLE WIDTH MODE FOR CONDENSED TYPE MODE
510 LPRINT CHR$(14);"66 CHARACTERS/LINE - DOUBLE WIDTH (CONDENSED TYPE)"
511 LPRINT CHR$(14);"     "+LEFT$(A$,59)
520 REM *** INITIATE DOUBLE STRIKE MODE FOR DOUBLE WIDTH CONDENSED TYPE
521 LPRINT CHR$(27);"G"
522 LPRINT CHR$(14);"66 CHARACTERS/LINE - DOUBLE STRIKE/DOUBLE WIDTH (CONDENSED TYPE)"
523 LPRINT CHR$(14);"     "+LEFT$(A$,59)
524 REM *** RETURN TO NORMAL MODE
525 LPRINT CHR$(18);LEFT$(BAR$,80)
530 LPRINT CHR$(24);CHR$(27);"H"
```

## QSORT.BAS

```bas
50000 REM QUICKER SORT 03/11/82 VER: 1
50020 REM by W. Pickett
50040 REM Internal sort for array - string or numeric
50060 REM This example sorts "ARRAY$" in ascending order
50080 REM Variables used and maybe needing renaming are:
50100 REM  S.AL%  S.I1%  S.I2%  S.IS%  S.LL%  S.LS%  S.SL%  S.SP%  S.UL%  S.US%
50120 REM Uses stack - "S.SP%" - which requires space and is dim in subroutine
50140 CLS: T1$ = TIME$: F! = FRE(0)
50160 TEST% = 50 ' Set length of test array$ for example of QSORT ****
50180 GOSUB 50700 ' Initialize test array - "ARRAY$"
50200 T3$ = TIME$:F2! = FRE(0)
50220 IF S.AL% < 100 THEN FOR I = 1 TO S.AL%:PRINT ARRAY$(I) "  ";:NEXT I:PRINT
50240 GOSUB 50380 ' Call to sort subroutine
50260 IF S.AL% < 100 THEN FOR I = 1 TO S.AL%:PRINT ARRAY$(I) "  ";:NEXT I:PRINT
50280 PRINT "SORT COMPLETE" : PRINT T1$ " " T3$ " " TIME$ " " F! " " F2! " " FRE(0) " " FRE("") TIME$:
50300 END
50320 REM *******************************************
50340 REM ********* QUICKER SORT SUBROUTINE *********
50360 REM *********                         *********
50380 S.AL% = TEST% ' Limit of array to be sorted **** REQUIRED FOR SORT ****
50400 DIM S.SP%(CINT(LOG(S.AL%)/0.346574),2) ' If sort is to be called more than once, `DIM' the stack `S.SP%' for the largest size of the array outside the sort
50420 S.IS% = 0: S.LL% = 1: S.UL% = S.AL%: GOTO 50540
50440 SWAP ARRAY$(S.SL%),ARRAY$(S.LL%):IF S.SL% > S.UL%-2 THEN S.UL% = S.SL%-1 ELSE IF S.SL% < S.LL%+2 THEN S.LL% = S.LL%+1 ELSE S.IS% = S.IS%+1: S.SP%(S.IS%,1)=S.LL%: S.SP%(S.IS%,2) = S.SL%-1: S.LL%=S.SL%+1
50460 GOTO 50540
50480 FOR S.I1% = S.LL% + 1 TO S.UL%: FOR S.I2% = S.LL% TO S.I1%: IF ARRAY$(S.I1%) < ARRAY$(S.I2%) THEN SWAP ARRAY$(S.I1%),ARRAY$(S.I2%)
50500 NEXT S.I2%: NEXT S.I1%
50520 IF S.IS% = 0 THEN RETURN ELSE S.LL% = S.SP%(S.IS%,1): S.UL%=S.SP%(S.IS%,2): S.IS% = S.IS%-1
50540 IF S.UL% - S.LL% <= 9 THEN 50480 ELSE S.LS% = S.LL%: S.US% = S.UL% + 1: SWAP ARRAY$(S.LL%),ARRAY$(INT((S.US%-S.LS%)/2)+S.LL%)
50560 IF S.US% = S.LS%+1 THEN S.SL% = S.LS%: GOTO 50440 ELSE S.LS% = S.LS% + 1: IF ARRAY$(S.LS%) <= ARRAY$(S.LL%) THEN 50600
50580 IF S.US% = S.LS% + 1 THEN S.SL% = S.LS%-1: GOTO 50440 ELSE S.US% = S.US% - 1: IF ARRAY$(S.US%) >= ARRAY$(S.LL%) THEN 50580 ELSE SWAP ARRAY$(S.LS%),ARRAY$(S.US%): GOTO 50560
50600 IF S.US% = S.LS% + 1 THEN S.SL% = S.LS%: GOTO 50440 ELSE S.US% = S.US% - 1: IF ARRAY$(S.US%) >= ARRAY$(S.LL%) THEN 50560
50620 IF S.US% = S.LS% + 1 THEN S.SL% = S.US%: GOTO 50440 ELSE S.LS% = S.LS% + 1: IF ARRAY$(S.LS%) <= ARRAY$(S.LL%) THEN 50620 ELSE SWAP ARRAY$(S.LS%),ARRAY$(S.US%): GOTO 50600
50640 END '******** End of quicker sort subroutine **
50660 REM *******************************************
50680 REM Initialize array for test of sort
50700 DIM ARRAY$(TEST%):FOR I = 1 TO TEST%:ARRAY$(I)="A"+STR$(TEST%-I): NEXT I: RETURN
```

## SATURN.BAS

```bas
1980 FOR X%=1 TO 15:Y$=INKEY$:NEXT X%
1981 IF INKEY$="" THEN 1981
1985 KEY OFF:DEFSNG S,A:SCREEN 1,0:COLOR 0,0:CLS:X=160:Y=100
1990 FOR T=1 TO 200:CIRCLE(RND*320,RND*200),RND*1,3:NEXT T
1995 CIRCLE (X,Y),50,1
2000 PAINT (X,Y),3,1
2005 FIRST =0:LAST=10:CLR=1:SET = 2.2:ANG =1:GOSUB 2025
2010 FIRST=14:LAST=22:CLR=2:SET=2.05:ANG=1.1:GOSUB 2025
2015 FIRST=31:LAST=48:CLR=1:SET=1.95:ANG=1.2:GOSUB 2025
2020 GOTO 2045
2025 FOR RING=FIRST TO LAST
2030 CIRCLE(X,Y),85+RING,CLR,SET,ANG,0.2
2035 NEXT RING
2040 RETURN
2045 FOR X%=1 TO 15:Y$=INKEY$:NEXT X%
2046 IF INKEY$="" THEN 2046
2050 CHAIN "A:GRAPH1"
```

## SNOW1.BAS

```bas
10 CLS
20 FOR I = 1 TO 9000
30 LOCATE RND*22+1,RND*39+1
40 PRINT "*"
50 NEXT I
```

## SNOW2.BAS

```bas
10 CLS
20 FOR I = 1 TO 9000
30 LOCATE RND*22+1,RND*39+1
40 PRINT CHR$(RND*255)
50 NEXT I
```

## SNOW3.BAS

```bas
10 CLS
20 FOR I = 1 TO 9000
30 LOCATE RND*22+1,RND*39+1
35 COLOR RND*15,0
40 PRINT CHR$(RND*255)
50 NEXT I
```

## SPEEDUP.BAS

```bas
10 FOR I = 1 TO 37
11   READ N
12   C = C + N
15   NEXT
16 READ N
17 IF N <> C THEN 40
20 RESTORE
21 OPEN "R",1,"SPEEDUP.COM",1
25 FIELD 1 , 1 AS N$
26   FOR I = 1 TO 37
30   READ N
31   LSET N$ = CHR$(N)
32   PUT 1
35   NEXT
36 CLOSE
37 PRINT "created"
38 END
40 PRINT "** error. Verify DATA"
41 END
45 DATA 186,18,0,184,30,37,205,33,139
50 DATA 250,190,26,1,185,11,0,243,164
55 DATA 51,192,205,19,139,215,205,39
60 DATA 223,2,37,2,8,42,255,80,246,0,4
65 DATA 3866
```

## START.BAS

```bas
1 SCREEN 0,1:COLOR 7,1
2 KEY OFF
5 CLS
10 LOCATE 10,10
20 PRINT "ENTER YOUR NAME BELOW:"
25 REM ------------------------------
30 LOCATE 15,10
40 INPUT NAM$
50 LOCATE 20,10
60 PRINT "THANK YOU "+NAM$+"!"+CHR$(13)
65 COLOR 15,1
70 PRINT "         A SONG JUST FOR YOU!
80 PLAY "t140 ms o3 a3 b3 g3 o2 g3 o3 d1"
90 FOR X%=1 TO 15:Y$=INKEY$:NEXT X%
91 IF INKEY$="" THEN 91
100 SCREEN 0,0
110 CHAIN "A:GTEST"
```

## TRANDUMP.BAS

```bas
100 DEFINT A-Z
110 CLS : CLOSE
120 PRINT "Hex File Display Program"
130 INPUT "Enter file name: ", FILENAME$
140 OPEN "R",#1,FILENAME$,128
150 FIELD #1,128 AS RECORD$
160 PRINT "Dumping "+FILENAME$+" . . ."
170 OPEN "lpt1:" FOR OUTPUT AS #2
180 PRINT #2, "Dumping "+FILENAME$+" . . ."
190 PRINT #2,""
200 OFFSET = 0
210 RECORDOUT$ = ""
220 RECORDOUT1$ = ""
230 '
240   GET #1
250   PRINT #2, ""
260   IF EOF(1) THEN 410
270   FOR I=1 TO LEN(RECORD$)
280     CHAR = ASC(MID$(RECORD$,I,1))
290     CHAR$ = HEX$(CHAR)
300     IF LEN(CHAR$)=1 THEN CHAR$="0"+CHAR$
310     RECORDOUT$=RECORDOUT$+CHAR$
320     CHARPRT$ = "."
330     IF CHAR < 32 THEN 360
340     IF CHAR >= 127 THEN 360
350     CHARPRT$ = CHR$(CHAR)
360     RECORDOUT1$ = RECORDOUT1$ + CHARPRT$
370     IF LEN(RECORDOUT$) >= 32 THEN GOSUB 460
380   NEXT I
390   GOTO 240
400 '
410 GOSUB 460
420 CLOSE
430 PRINT "File Display Program Ended"
440 STOP
450 '
460 RECLEN = LEN(RECORDOUT$)
470 IF RECLEN = 0 THEN 600
480 OFFSET$="    "+HEX$(OFFSET)
490 OFFSET$=MID$(OFFSET$,LEN(OFFSET$)-4,5)
500 PRINT #2,OFFSET$+":  ";
510 J=1
520   IF RECLEN-J < 8 THEN 560
530   PRINT #2,MID$(RECORDOUT$,J,8)+" ";
540   J = J + 8
550   GOTO 520
560 PRINT #2,MID$(RECORDOUT$,J) + "  *" + RECORDOUT1$ + "*"
570 OFFSET = OFFSET + RECLEN/2
580 RECORDOUT$ = ""
590 RECORDOUT1$ = ""
600 RETURN
610 '
620 END
```

## TWOSIDE.BAS

```bas
10 '           Basic program       TWOSIDE.BAS         3-6-82
20 '
30 '  This program creates the file TWOSIDE.COM which, when executed,
40 '  makes changes to DOS that allows formatting (and addressing) the
50 '  other side of disks "A" and "B" as "C" and "D" respectively.
60 '  Of course, you must have two-sided drives installed such as Tandon 100-2.
70 '
80 '  The author has placed no restrictions upon use of this program.
90 '
100 '  Installation and use:
110 '   1. Initialize BASIC
120 '   2. Load (or create) the program file (this program) TWOSIDE.BAS
130 '   3. Enter --> RUN           (this creates the file TWOSIDE.COM)
140 '   4. Set system board switch #1 diskette selection positions to
150 '      the number of physical and logical drives that you have installed.
160 '      For example, if you have two physical drives installed and the
170 '      TWOSIDE option will add two logical drives, set the switch selection
180 '      positions for 4 drives (position 1, 7, & 8 off).
190 '   5. Before addressing disks "C" or "D" -- After system initialization
200 '      ENTER --> TWOSIDE
210 '   6. If you wish, the AUTOEXEC.BAT file may be used to cause the TWOSIDE
220 '      command to execute automatically when the system is brought up.
230 '
240 FOR I = 1 TO 151:READ N:C = C + N
250 NEXT:READ N:IF N <> C THEN GOTO 300
260 RESTORE 310:OPEN "r",1,"twoside.com",1
270 FIELD 1, 1 AS N$:FOR I = 1 TO 151
280 READ N:LSET N$ = CHR$(N):PUT 1
290 NEXT: CLOSE: PRINT "TWOSIDE.COM FILE CREATED SUCCESSFULLY":END
300 PRINT "** ERROR -- verify your data **":END
310 DATA 30,51,192,142,216,187,76,0,130
320 DATA 127,3,0,117,29,139,7,46,163,18
330 DATA 0,199,7,56,0,140,79,2,31,190,45
340 DATA 1,191,20,0,185,106,0,243,164
350 DATA 139,215,205,39,31,195,0,0,161
360 DATA 78,0,1,1,2,0,1,2,2,0,1,3,2,0,1
370 DATA 4,2,0,1,5,2,0,1,6,2,0,1,7,2,0,1
380 DATA 8,2,246,194,2,117,5,46,255,46
390 DATA 18,0,82,128,226,253,182,1,130
400 DATA 252,5,116,8,156,46,255,30,18,0
410 DATA 235,37,83,6,30,80,38,138,7,140
420 DATA 203,142,219,142,195,187,24,0,83
430 DATA 136,7,131,195,4,131,251,56,117
440 DATA 246,91,88,156,255,30,18,0,31,7
450 DATA 91,90,202,2,0,11596
```

## WAITIN.BAS

```bas
10000 FOR X%=1 TO 32:Y$=INKEY$:NEXT X%
10001 IF INKEY$="" THEN 10001
```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0011

     Volume in drive A has no label
     Directory of A:\

    AUTOEXEC BAT        16   3-04-82
    B        BAS       128   8-20-81
    BASICPRT BAS      5248   3-26-82
    C        BAS       256   8-20-81
    CANNON   BAS      2048   1-20-82
    CHRSET   BAS       256   1-12-82
    DEFEND   BAS      5504   1-26-82
    DISPLAY  BAS       512  12-06-81
    FILES011 TXT      2294   5-29-87   9:41a
    GRAPH1   BAS     12160   1-05-82
    GTEST    BAS       512  12-06-81
    HAPPYB   BAS       256  12-06-81
    HEAPSORT BAS      1536   4-07-82
    IBMCS    BAS     13184   1-01-80
    IBMDIY   BAS     20992   1-01-80
    IBMMC    BAS     21760   1-01-80
    LOGOC    BAS      1536  12-06-81
    LUNAR    BAS      1792   4-22-82
    MENU     BAS      5760   1-01-80
    MX80     BAS      1408   1-09-82
    NIM      BAS      8832   5-13-82
    PATTERNS BAS      3200   1-26-82
    PEOPLE   BAS      2944   1-09-82
    PLOTTER  BAS      3584  12-06-81
    PRDEMO   BAS      2048  11-21-81
    PRINT    BAS      2304  12-07-81
    PSTYLES  BAS      2816  12-06-81
    QSORT    BAS      2560   3-11-82
    SATURN   BAS       512  12-06-81
    SCREENS            512  12-04-81
    SNOW1    BAS       128   1-09-82
    SNOW2    BAS       128   1-09-82
    SNOW3    BAS       128   1-09-82
    SPEEDUP  BAS       512   3-04-82
    SPEEDUP  COM       128   3-04-82
    START    BAS       384  12-08-81
    TESTSCRN BAS     16512  12-04-81
    TRANDUMP BAS      1280  11-19-81
    TWOSIDE  BAS      2176   3-07-82
    TWOSIDE  COM       256   3-06-82
    WAITIN   BAS       128  12-06-81
           41 file(s)     148230 bytes
                            3584 bytes free
