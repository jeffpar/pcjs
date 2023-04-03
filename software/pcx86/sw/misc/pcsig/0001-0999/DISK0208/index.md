---
layout: page
title: "PC-SIG Library Disk #208"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0208/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0208"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "PC-SIG SAMPLER #7"

    A fine graphically oriented collection of programs, whether through
    your monitor screen or your printer.  DESIGN is an intriguing graphics
    demo, and MASTER2 is a good version of the classic Mastermind board
    game.  Also included are two cute music pieces, and several nice
    examples of printer art.
    
    System Requirements: Some programs require BASIC, color graphics.
    
    How to Start: To read TXT files, enter TYPE filename.ext and press
    <ENTER>.  To run an EXE program, just type its name and press <ENTER>.
    For instructions on running BASIC programs, please refer to the
    GETTING STARTED section in this catalog.
    
    File Descriptions:
    
    DESIGN   EXE  Neat graphics demo
    FLASHDAN BAS  Flashdance  (Music - Judith Penner)
    JSB      BAS  J.S. Bach Violin Sonata No 6, in E Major, 1st Movement
    PRF      PRF  Part of MASTER2.BAS
    NUDE84   TXT  Text nude with 84 calendar
    NUDE     BAS  Graphics nude  (G. Wesley)
    MASTER2  BAS  Mastermind  (Les Penner)
    SMURF    BAS  Smurf printer art  (James Card, Phil Gill)
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FLASHDAN.BAS

```bas
10 COLOR 9,0,1
20 CLS:KEY OFF:SCREEN 0:WIDTH 80
30 LOCATE 8,10
40 PRINT "FLASHDANCE...WHAT A FEELING"
50 LOCATE 10,12:COLOR 11:PRINT "(C) "
60 LOCATE 10,16:COLOR 13:PRINT "Judith "
70 LOCATE 10,23:COLOR 14:PRINT "Penner":COLOR 10:LOCATE 12,30,0:PRINT CHR$(14)
80 PLAY "MB T105 O4 L2E.L8DCL2D.L8DEL2F.L8EEEDL2C"
90 LOCATE 12:PRINT"First when there's nothing but a slow glowing dream,
100 PLAY "MB T105 O4 L8DCL2A.L8GFL2G.L8FGFEL2DL4CL2D.
110 PRINT"That your fear seems to hide deep inside your mind.
120 PLAY "MB T105 O4 L8CDL2E.L8DCL2D.L8DEL2F.L8EEEDL4CP4
130 PRINT"All alone I have cried silent tears full of pride,
140 PLAY "MB T105 O4 L8DCL2A.L8GFL2G.L8FGFEL4D
150 PRINT"In a world made of steel, made of stone.....
160 PLAY "MB T115 O4 >l8dcl4cl8ddl2d.P4C4L8CCP4L8DDL4DP4<
170 '(music part #1)
180 PLAY "MB T115 L8CDL2E.L8DCL4DL2<G>L8DDL2F.L8EDEDL2C
190 PRINT"Well I hear the music, close my eyes feel the rhythm.
200 PLAY"MB T115 L8DCA2.>C<AG2.FEFED4>DCC4P4
210 PRINT"Wrap around take a hold of my heart...
220 PLAY "MB T115 L4CDP8
240 FOR I=1 TO 2
250 PLAY "MB T115 O4 L8GBL4>CCC8<L8BB4BAA4G4
260 NEXT I
265 PRINT"What a feeling...Being's believing.
270 PLAY "MB L8GB>CC4D4C<B4>CC4.D<G4G4.
280 PRINT"I can have it all, now I'm dancin for my life.
290 PLAY "MB P4L8GB>CC<A4>C<BB4BAAA>D4C4CC<A4>C<BB4BAA4
300 PRINT"Take your passion, and make it happen.
310 PLAY "MB L8 GB>CC4.DC<B4>CC4.D<GG4G4>C4<B4BBAAA4G4GB
320 PRINT"Pictures come alive you can dance right through your life.
340 FOR Z=1 TO 3
350 PLAY "MB T100 L8>C4C4C<BB4BAA4G4GB"
355 PRINT"What a feeling.....
360 NEXT Z
370 PLAY"O4 C1"
```

## JSB.BAS

```bas

10 REM
20 REM
30 REM The unaccompanied violin sonata No. 6 in E major, 1st movement,
40 REM                  by Johann Sebastian Bach,
50 REM  faithfully transcribed by Michael Baum for the IBM-PC
60 REM
70 REM Runs 4:06 minutes
80 REM
90 CLS:KEY OFF:SCREEN 0:WIDTH 80
100 COLOR 12:LOCATE 12,23:PRINT"SONATA VI in E Major, 1st Movement
110 COLOR 9: LOCATE 14,35,0:PRINT"J.S. BACH
120 A$="g#eg#e":B$="g#eg#d#":C$="g#eg#d":D$="o4aeac#":E$="o4aeao3b"
130 F$="o4g#eg#o3b":G$="o4g#eg#o3a":H$="o4f#ef#o3a":I$="o4f#ef#o3g#"
140 J$="o4eeeo3g#":K$="o4eeeo3f#":L$="o4d#ed#o3f#"
150 M$="o4c#o3ao4c#o3a":N$="o4c#o3ao4c#o3g#":O$="o4c#o3ao4c#o3g"
160 P$="o4do3ao4do3f#":Q$="o4do3ao4do3e":R$="O4C#O3AO4C#O3E"
170 S$="o4c#o3ao4c#o3d":T$="o3babd":U$="o3babc#":V$="o3aaac#"
180 W$="o3aaao2b":X$="o3g#ag#o2b"
190 PLAY "t100msp8o5l16ED#l8eo4bg#b l16ef#ed#l8eo3bg#b mll16ebf#bg#babg#bf#b eo4ed#c#o3bo4ed#c#o3bag#f#
200 PLAY "msl16ebf#bg#babg#bf#b eo4ed#c#o3bo4ed#c#o3bag#f#
210 PLAY"mlef#g#abo4c#d#ef#g#af# g#bef#g#abo5c#d#ec#d# eo4babg#babg#bf#b eo5ed#c#o4beo5c#o4ebeae
220 PLAY"ms g#bf#bg#babg#bf#b eo5ed#c#o4beo5c#o4ebeae
230 PLAY "mn g#eeed#eeef#ed#e eeg#ef#eg#eaef#e
240 PLAY "ms g#eeed#eeef#ed#e eeg#ef#eg#eaef#e
250 A$="g#eg#e
260 PLAY "xa$;xa$;xa$;xb$;xb$;xb$;xc$;xc$;xc$;xd$;xd$;xd$;xe$;xe$;xe$;
270 PLAY "xf$;xf$;xf$;xg$;xg$;xg$;xh$;xh$;xh$;xi$;xi$;xi$;xj$;xj$;xj$;
280 PLAY "xk$;xk$;xk$;xl$;xl$;xl$;
290 PLAY "mlef#ef#g#bef#g#bef# g#ag#abo4eo3g#abo4eo3g#a bo4c#o3bo4c#dg#o3bo4c#dg#o3bo4c#
300 PLAY "dbg#edo3bg#edc#do2b
310 PLAY "o3c#d#c#d#fg#c#d#fg#c#d# ff#ff#g#o4c#o3ff#g#o4c#o3ff#
320 PLAY "g#ag#abo4fo3g#abo4fo3g#a bo4g#fc#bg#af#fg#c#o3b
330 PLAY "ao4c#o3af#o4f#d#ec#cd#o3g#f# eg#ec#eg#o4c#o3g#o4ec#g#c#
340 PLAY"cd#co3g#o4g#gg#gg#d#ec# cd#co3g#o4f#ff#ff#d#ec#
350 PLAY "cd#co3g#ag#ag#ad#ec# cf#c#f#d#f#c#f#cf#d#f# o2g#o3f#o4d#o3f#o4co3f#o4d#o3f#o4co3f#o4d#o3f#
360 PLAY "o2g#o3eo4c#o3eo4eo3eo4c#o3eo4eo3eo4c#o3e
370 PLAY "o2g#o3f#o4d#o3f#o4co3f#o4d#o3f#o4co3f#o4d#o3f#
380 PLAY "o2g#o3eo4c#o3eo4eo3eo4c#o3eo4eo3eo4c#o3e
390 PLAY "o2g#o3go4c#o3go4eo3go4c#o3go4eo3go4c#o3g
400 PLAY "o2g#o3go4c#o3go4eo3go4c#o3go4eo3go4c#o3g
410 PLAY "o2g#o3g#o4c#o3g#o4d#o3g#o4c#o3g#o4d#o3g#o4c#o3g#
420 PLAY "o2g#o3f#o4co3f#o4d#o3f#o4co3f#o4d#o3f#o4co3f#
430 PLAY "c#o4c#o3bag#o4c#o3g#f#eg#ed# c#o4c#o3g#f#eg#ed#c#ec#o2b
440 PLAY "o2a#o3f#o4c#o3f#o4eo3f#o4c#o3f#o4eo3f#o4c#o3f#
450 PLAY "o2a#o3f#o4eo3f#o4c#o3f#o4eo3f#o4c#o3f#o4eo3f#
460 PLAY "o2bo4ba#g#f#bf#ed#f#d#c# o3bo4bf#ed#f#d#c#o3bo4d#o3ba
470 PLAY "o3g#o4dedg#dbdg#ded o3g#o4dedo3g#o4do3f#o4do3g#o4do3eo4d
480 PLAY "o4c#eag#aedec#eo3bo4e o3ao4ag#f#eo3ao4f#o3ao4eo3ao4do3a
490 PLAY "mso4c#eo3bo4ec#edec#eo3bo4e o3ao4ag#f#eo3ao4f#o3ao4eo3ao4do3a
500 PLAY "mno4c#o3aaag#aaabag#a aao4c#o3abao4c#o3ao4do3aba
510 PLAY "mso4c#o3aaag#aaabag#a aao4c#o3abao4c#o3ao4do3aba
520 '
530 PLAY "xm$;xm$;xm$;xn$;xn$;xn$;xo$;xo$;xo$;xp$;xp$;xp$;
540 PLAY "xq$;xq$;xq$;xr$;xr$;xr$;xs$;xs$;xs$;xt$;xt$;xt$;
550 PLAY "xu$;xu$;xu$;xv$;xv$;xv$;xw$;xw$;xw$;xx$;xx$;xx$;
560 PLAY "ml ababo3c#eo2abo3c#eo2ab o3c#dc#deac#deac#d ef#ef#go4c#o3ef#go4c#o3ef#
570 PLAY "go4ec#dec#o3a#bo4c#o3a#f#e dc#o2bo3c#df#o2bo3c#df#o2bo3c#
580 PLAY "dedef#bdef#bde f#g#f#g#ao4d#o3f#g#ao4d#o3f#g#
590 PLAY "ao4f#d#ef#d#cc#d#co3g#f# fo4bg#abg#ff#g#fc#o3b ao5c#o4abo5c#o4af#g#af#dc#
600 PLAY "o3bo5do4bo5c#do4bg#abg#fg# c#d#c#d#fg#c#d#fg#c#d# ff#ff#g#bff#g#bff#
610 PLAY "g#ag#abo5do4g#abo5do4g#a bo5do4bg#fbg#fc#bag# f#g#af#o3bo4ag#f#c#g#f#f
620 PLAY "def#do3g#o4f#edo3a#o4edc# o3bo4c#do3bfo4dc#o3bf#o4c#o3ba
630 PLAY "g#abag#babg#bf#b ff#g#abfo4do3fo4c#o3fbf f#af#c#o2ao3c#f#c#ac#f#c#
640 PLAY "fg#fc#fg#o4c#o3g#o4fc#g#o3b ao4c#o3af#ao4c#f#c#af#o5c#o4f#
650 PLAY "fg#fc#o5c#cc#cc#o4g#af# fg#fc#ba#ba#bg#af#
660 PLAY "fg#fc#dc#dc#do3g#af# fg#o4c#mnbbmlg#af#fg#c#o3b ao4c#f#o5mnc#c#mlo4abg#f#adc#
670 PLAY "o3bo4do3gf#fg#c#o2bao3c#f#g# af#bf#o4c#o3f#o4do3f#c#f#g#f
680 PLAY "f#ag#mnaaamlg#af#aea d#aeaf#ag#mnaaamlf#a g#ag#f#eo4ed#ec#eo3bo4e
690 PLAY "o3a#o4eo3bo4ec#ed#mneeemlc#e d#ed#c#o3bo4c#d#ef#g#af#
700 PLAY "bo3babg#bf#bebdb c#ef#g#abo4c#def#g#e o4ao3ag#af#aead#ac#a
710 PLAY "o2bo3d#ef#g#abo4c#d#ef#d# g#o3edec#eo2bo3eo2ao3eo2g#o3e
720 PLAY "o2ao3eo4c#o3bo4c#eag#af#c#e o2bo3f#o4d#c#d#f#ag#af#d#f#
730 PLAY "o2bo3g#babo4eg#f#g#eo3bo4e o2bo3a#o4c#o3bo4c#ea#g#a#ec#e
740 PLAY "d#ba#g#f#bf#ed#f#d#c# o3bo4bag#f#af#ed#f#d#c# o3bo4ag#f#eg#ed#c#ec#o3b
750 PLAY "ao4g#f#ed#f#d#c#o3bo4d#o3ba g#o4ec#o3bao4c#o3ag#f#af#e
760 PLAY "d#f#ao4c#o3bo4d#f#g#ag#af# g#eg#bo5eo4bg#eo3bo4eo5ed#
770 PLAY "eo4bg#edec#edeo3bo4e c#eaec#eo3bo4ec#eo3ao4e
780 PLAY "o3bo4eg#eo3bo4eo3ao4eo3bo4eo3g#o4e o3ao4ef#ed#mneeemlf#eg#e
790 PLAY "a4.b8g#4
800 PLAY "mno2l16ao4ag#l32af#f#g#f#g#f#g#f#g#f#g#f#g#l8e
810 PLAY "l16eo5ed#c#o4bo5eo4ao5eo4g#o5eo4f#o5e o4eed#c#o3bo4eo3ao4eo3g#o4eo3f#o4e
820 PLAY" mbmlt90o3eg#bo4d#t80eg#t70bo5d#t60l8e
830  PI=3.14159
840 SCREEN 1,0:COLOR 0,1
850 FOR I=50 TO 130 STEP 20
860 LINE(20,I)-(300,I)
870 NEXT
880 CIRCLE(32,70),4,2,,,1:PAINT(32,70),2
890 CIRCLE(48,70),20,2,0,PI,1
900 CIRCLE(48,70),19,2,0,PI,1
910 CIRCLE(25,70),53,2,3*PI/2,0,1.2
920 CIRCLE(25,70),52,2,3*PI/2,0,1.2
930 CIRCLE(74,60),2,2,,,1
940 CIRCLE(74,80),2,2,,,1
950 PAINT(74,80),2:PAINT(74,60),2
960 LINE(82,75)-(82,120),2
970 DRAW "bm82,107"
980 DRAW "e3rer3f3d6g4lglglgl
990 PAINT (84,115),2
1000 LINE(105,90)-(118,84),2,BF
1010 CIRCLE(140,40),11,1
1020 LINE(129,40)-(129,110),1
1030 LINE(160,50)-(160,130),3
1040 CIRCLE(183,50),11,1
1050 LINE(172,50)-(172,120),1
1060 CIRCLE(220,30),11,1:LINE(200,30)-(240,30),3
1070 LINE(209,30)-(209,100),1
1080 LINE(230,50)-(230,130)
1090 LINE(246,30)-(246,50),2
1100 LINE(246,40)-(256,36),2:LINE-(256,60),2
1110 LINE(246,50)-(256,46),2
1120 CIRCLE(275,40),11,1:LINE(264,40)-(264,110),1
1130 CIRCLE(294,40),2,1
1140 PAINT(275,40),1:PAINT(294,40),1
1150 LOCATE 18,10:PRINT"A Musical Riddle from "
1160 LOCATE 20,10:PRINT"The Art of the Fugue!"
1170 LOCATE 22,9:PRINT"(Sprechen zie Deutsch?)





ical Riddle from "
1160 LOCATE 20,10:PRINT"The Art of the Fugue!"
1170 LOCATE 22,9:PRINT"(Sprechen zie Deutsch?)

```

## MASTER2.BAS

```bas
10 SCREEN 0: WIDTH 40:COLOR 14,1,12
20 CLS
30 KEY OFF
40 RANDOMIZE TIMER
50 GOSUB 1310'SONG
60 C(1)=INT(RND*6)'Creates four diff random numbers
70 C(2)=INT(RND*6)'FROM 0 TO 5
80 IF C(2)=C(1)THEN 70
90 C(3)=INT(RND*6)
100 IF C(3)=C(1) OR C(3)=C(2) THEN 90
110 C(4)=INT(RND*6)
120 IF C(4)=C(1) OR C(4)=C(2) OR C(4)=C(3) THEN 110
130 FOR R=1 TO 4
140 IF C(R)=0 THEN C(R)=70
150 IF C(R)=1 THEN C(R)=77
160 IF C(R)=2 THEN C(R)=72
170 IF C(R)=3 THEN C(R)=68
180 IF C(R)=4 THEN C(R)=67
190 IF C(R)=5 THEN C(R)=83
200 NEXT R
210 LOCATE 2,13,0,7
220 PRINT "** MASTERMIND **"
230 PRINT "           ##################"
240 PRINT "              by Les Penner"
250 PRINT:PRINT:PRINT
260 PRINT"The computer has selected four"
270 PRINT "different symbols from a choice"
280 PRINT "of six and placed them in a sequence."
290 PRINT
300 PRINT "The choices are: ";CHR$(3);"=H"
310 PRINT
320 PRINT TAB(18);CHR$(4);"=D"
330 PRINT
340 PRINT TAB(18);CHR$(5);"=C"
350 PRINT
360 PRINT TAB(18);CHR$(6);"=S"
370 PRINT
380 PRINT TAB(18);CHR$(14);"=M"
390 PRINT
400 PRINT TAB(18);CHR$(2);"=F"
410 PRINT
420 INPUT "PRESS  <ENTER> TO CONTINUE ",S$
430 CLS
440 PRINT:PRINT:PRINT:PRINT:PRINT:PRINT:PRINT
450 PRINT"Positioning with the space bar, try"
460 PRINT"to guess the objects as the computer"
470 PRINT "has arranged them.  The computer "
480 PRINT "will tell you how many of the ob-"
490 PRINT"jects are correct and whether they "
500 PRINT"are in the right or wrong positions."
520 PRINT:PRINT:PRINT:PRINT:PRINT:PRINT:PRINT:PRINT:PRINT:PRINT
530 INPUT"PRESS <ENTER> TO CONTINUE ",E$:CLS
540 DIM PLY(20,15)
550 DIM A$(20,5):PT=0:PCOL=1
560 DIM TABLE(20,3)'**SCORE TABLE
570 FOR T=1 TO 15
580 FOR COL=1 TO 4
590 A$(T,COL)="-"     'initializes array
600 NEXT COL
610 NEXT T
630 PT=PT+1:PCOL=1' INCREMENT TURN
850 GOSUB 1080'prints current array
860 IF PT<16 THEN 2000 ELSE 870
870 LOCATE 3,10
880 FOR L=1 TO 4
890 IF C(L)=70 THEN PRINT CHR$(2);" ";
900 IF C(L)=77 THEN PRINT CHR$(14);" ";
910 IF C(L)=72 THEN PRINT CHR$(3);" ";
920 IF C(L)=68 THEN PRINT CHR$(4);" ";
930 IF C(L)=67 THEN PRINT CHR$(5);" ";
940 IF C(L)=83 THEN PRINT CHR$(6);" ";
950 NEXT L
960 IF FLAG=0 THEN 1020'--LOSE ENDING
970 LOCATE 10, 30
980 COLOR 20,3
990 PRINT" YOU   "
1000 LOCATE 11,30
1010 PRINT " WIN ! "
1020 COLOR 4,3
1030 LOCATE 13,30:PRINT"PRESS <F2>
1040 LOCATE 14,30:PRINT"TO RESTART
1050 COLOR 14,1
1060 LOCATE 21,1,0
1070 END
1080 CLS:PRINT
1090 LOCATE 2,18:PRINT"(RIGHT***CHOICE)  WRONG"
1100 LOCATE 3,18:PRINT" RT-POS  WR-POS  CHOICE
1110 LOCATE 3,1:PRINT "COMPUTER ? ? ? ?":PRINT
1120 FOR T=1 TO 15
1130 PRINT "TURN";T;
1140 IF T<10 THEN PRINT"  ";
1150 IF T=>10 THEN PRINT " ";
1160 FOR COL=1 TO 4
1170 PRINT A$(T,COL);" ";
1180 NEXT COL
1190 IF T< PT THEN PRINT"  ";TABLE(T,1);"     ";TABLE(T,2);"     ";TABLE(T,3);
1200 PRINT
1210 NEXT T
1220 PRINT STRING$(40,22);
1230 PRINT"   "; CHR$(3);"=H   ";CHR$(4);"=D   ";CHR$(5);"=C   ";CHR$(6);"=S   ";CHR$(14);"=M   ";CHR$(2);"=F"
1245 PRINT:PRINT"<SPACE BAR> to move,  <ENTER>=Try These
1260 T=1:POSITION=0:RIGHT=0
1270 IF FLAG =1 THEN 870'subroutine for showing correct answer
1280 IF PT=16 THEN 870'SHOW ANSWER AFTER 15 TRIES
1285 LOCATE PT+4,10:COLOR 30,3 :PRINT "-";:COLOR 14,1
1290 RETURN
1300 END
1310 PLAY"T145 MB O3EEECDGECFGECD<B>C"'INTRO SONG
1320 RETURN
1330 PLAY"MB O1L3CL8DL4E-L4CL3G"'lose song
1340 RETURN
1350 PLAY "MB T160 MS O4L6CFG A GFGL3A FF"'win song
1360 RETURN
2000 '******* start of keyboard scanning routine
2005 IN$=INKEY$: IF IN$="" GOTO 2005
2010 IF IN$=CHR$(32) THEN GOTO 3100'--<SPACE BAR> PRESSED
2025 IF IN$=CHR$(13) AND A$(PT,1)<>"-" AND A$(PT,2)<>"-" AND A$(PT,3)<>"-"AND A$(PT,4)<>"-" GOTO 2660'----<ENTER> HAS BEEN PRESSED
2030 IF IN$="F" OR IN$="f" THEN PLY(PT,PCOL)=70: A$(PT,PCOL)=CHR$(2):GOTO 2058
2035 IF IN$="M" OR IN$="m" THEN PLY(PT,PCOL)=77:A$(PT,PCOL)=CHR$(14):GOTO 2058
2040 IF IN$="H" OR IN$="h" THEN PLY(PT,PCOL)=72:A$(PT,PCOL)=CHR$(3):GOTO 2058
2042 IF IN$="D" OR IN$="d" THEN PLY(PT,PCOL)=68:A$(PT,PCOL)=CHR$(4):GOTO 2058
2045 IF IN$="C" OR IN$="c" THEN PLY(PT,PCOL)=67:A$(PT,PCOL)=CHR$(5):GOTO 2058
2050 IF IN$="S" OR IN$="s" THEN PLY(PT,PCOL)=83: A$(PT,PCOL)=CHR$(6):GOTO 2058
2055 BEEP:GOTO 2005
2058 LOCATE PT+4,PCOL*2+8:COLOR,3:PRINT A$(PT,PCOL):COLOR,1
2060 GOTO 2005
2660 FOR PCOL=1 TO 4
2740 FOR R=1 TO 4
2750 IF PLY(PT,PCOL)=C(R) AND  PCOL=R THEN POSITION=POSITION+1
2760 IF PLY(PT,PCOL)=C(R) AND  PCOL<>R THEN RIGHT =RIGHT+1
2770 NEXT R
2780 WRONG=4-RIGHT-POSITION
2790 NEXT PCOL
2800 TABLE(PT,3)=WRONG: TABLE(PT,1)=POSITION
2810 TABLE(PT,2)=RIGHT
2820 IF POSITION =4 THEN FLAG=1
2830 IF FLAG=1 THEN GOSUB 1350
2840 IF FLAG=0 THEN GOSUB 1330
2850 GOTO 630
3100 LOCATE PT+4,PCOL*2+8:COLOR ,1:PRINT A$(PT,PCOL)
3110 PCOL=(PCOL)MOD 4+1
3160 LOCATE PT+4,PCOL*2+8:COLOR 30,3 :PRINT A$(PT,PCOL):COLOR 14,1
3170 GOTO 2005
```

## NUDE.BAS

```bas

1  'Modified from the HP 9845 Basic by G. Wesley  12/29/82
10  CLS
11  DEFINT X,Y,C
20  KEY OFF
30  SCREEN 2
40  C=0:LINE -(0,0),C
50  FOR I=1 TO 360
60      READ X,Y,P
70      X=X*640/360
80      Y=Y*200/240
90      Y=200-Y 'do y transformation to get picture right side up.
100     IF P=13 THEN C=0 ELSE C=1
110     LINE -(X,Y),C
120 NEXT I
130  LOCATE 5,5:PRINT "EAT YOUR HEART OUT!!!"
140  GOTO 140
150  DATA  51,100,13,79,103,12,104,92,12
160  DATA  108,87,12,108,82,12,104,72,12
170  DATA  88,57,12,93,75,13,93,78,12
180  DATA  91,82,12,90,84,12,90,87,12
190  DATA  89,90,12,89,94,12,90,93,12
200  DATA  91,89,12,92,86,12,92,83,12
210  DATA  94,77,12,93,75,13,96,80,12
220  DATA  97,83,12,97,87,12,96,89,12
230  DATA  92,92,12,89,94,12,93,89,12
240  DATA  94,85,12,94,77,12,85,81,13
250  DATA  85,83,12,86,84,12,86,82,12
260  DATA  85,81,12,85,86,13,84,86,12
270  DATA  83,88,12,85,86,12,67,54,13
280  DATA  65,60,12,64,67,12,66,74,12
290  DATA  67,74,12,66,67,12,66,60,12
300  DATA  67,54,12,69,56,13,68,61,12
310  DATA  67,67,12,68,70,12,71,73,12
320  DATA  69,69,12,69,64,12,71,60,12
330  DATA  69,56,12,71,60,13,74,64,12
340  DATA  74,68,12,71,72,12,73,68,12
350  DATA  73,64,12,70,61,12,70,63,13
360  DATA  71,63,12,73,65,12,73,68,12
370  DATA  71,69,12,70,69,12,69,68,12
380  DATA  70,65,13,70,66,12,71,66,12
390  DATA  71,65,12,70,65,12,64,87,13
400  DATA  60,91,12,59,94,12,58,98,12
410  DATA  60,100,12,59,97,12,62,92,12
420  DATA  64,87,12,69,86,13,65,88,12
430  DATA  63,93,12,62,100,12,65,98,12
440  DATA  64,95,12,64,90,12,69,86,13
450  DATA  70,91,12,68,95,12,65,98,12
460  DATA  65,97,12,67,95,12,69,91,12
470  DATA  69,86,12,65,88,13,66,88,12
480  DATA  68,89,12,69,91,12,67,94,12
490  DATA  65,94,12,64,93,12,65,90,13
500  DATA  65,91,12,66,91,12,66,90,12
510  DATA  65,90,12,61,101,13,50,104,12
520  DATA  36,100,12,24,90,12,17,75,12
530  DATA  16,61,12,25,43,12,44,33,12
540  DATA  60,33,12,79,40,12,57,38,12
550  DATA  41,45,12,24,62,12,17,75,12
560  DATA  51,100,13,57,95,12,63,80,12
570  DATA  62,72,12,58,78,12,62,65,12
580  DATA  65,49,12,52,45,13,65,49,12
590  DATA  88,65,12,87,50,12,79,40,12
600  DATA  17,75,13,5,67,12,0,45,12
610  DATA  4,23,12,25,11,12,58,17,12
620  DATA  110,14,12,135,25,12,160,32,12
630  DATA  164,40,12,162,44,12,155,46,12
640  DATA  143,45,12,151,43,12,149,40,12
650  DATA  125,48,12,118,55,12,119,51,13
660  DATA  117,58,12,113,62,12,104,62,12
670  DATA  115,61,13,115,67,12,111,71,12
680  DATA  104,72,12,121,52,13,133,50,12
690  DATA  145,51,12,131,56,13,145,51,12
700  DATA  170,47,12,245,41,12,255,42,12
710  DATA  262,46,12,271,58,12,282,81,12
720  DATA  281,78,13,287,81,12,280,76,13
730  DATA  285,74,12,288,75,12,278,73,13
740  DATA  282,75,12,283,79,13,288,75,12
750  DATA  293,74,12,301,77,12,299,76,13
760  DATA  306,75,12,313,76,12,314,77,12
770  DATA  313,78,12,309,78,12,309,77,12
780  DATA  311,76,12,309,78,13,304,79,12
790  DATA  300,81,12,295,79,12,302,80,13
800  DATA  313,83,12,316,85,12,312,85,12
810  DATA  311,84,12,311,83,12,313,83,12
820  DATA  312,85,13,300,84,12,292,82,12
830  DATA  300,84,13,305,88,12,306,90,12
840  DATA  302,89,12,301,88,12,302,87,12
850  DATA  305,88,12,302,89,13,289,85,12
860  DATA  295,79,13,280,92,12,275,91,12
870  DATA  244,68,12,251,64,13,244,68,12
880  DATA  220,73,12,170,89,12,164,92,12
890  DATA  157,92,12,220,73,13,243,73,12
900  DATA  261,81,12,270,95,12,273,109,12
910  DATA  270,125,12,259,143,12,244,160,12
920  DATA  227,177,12,208,193,12,196,206,12
930  DATA  214,202,13,198,210,12,189,213,12
940  DATA  182,213,12,176,211,12,172,206,12
950  DATA  170,199,12,172,190,12,182,167,12
960  DATA  197,141,12,209,125,12,236,105,12
970  DATA  180,122,13,185,126,12,187,137,12
980  DATA  191,150,12,208,193,13,214,202,12
990  DATA  222,216,12,228,223,12,234,226,12
1000  DATA  240,226,12,247,222,12,276,192,12
1010 DATA  305,164,12,318,155,12,330,150,12
1020 DATA  349,137,12,347,139,13,360,149,12
1030 DATA  360,140,12,357,129,12,353,123,12
1040 DATA  350,121,12,335,120,12,349,137,13
1050 DATA  339,123,12,324,110,12,322,111,12
1060 DATA  322,113,12,324,116,12,330,121,12
1070 DATA  341,126,12,337,124,13,338,127,12
1080 DATA  335,120,13,335,116,12,349,107,12
1090 DATA  348,106,12,340,110,12,324,110,12
1100 DATA  341,126,13,334,128,12,330,128,12
1110 DATA  325,126,12,320,123,12,316,122,12
1120 DATA  312,124,12,310,127,12,308,134,12
1130 DATA  305,140,12,290,150,12,275,159,12
1140 DATA  257,168,12,249,174,12,244,179,12
1150 DATA  293,148,13,289,142,12,285,142,12
1160 DATA  282,143,12,274,150,12,266,155,12
1170 DATA  241,163,12,248,205,13,247,194,12
1180 DATA  241,163,12,90,99,13,95,103,12
1190 DATA  94,100,13,98,114,12,105,128,12
1200 DATA  108,132,12,108,134,12,110,135,12
1210 DATA  111,134,12,108,132,12,105,128,13
1220 DATA  117,134,12,111,134,13,117,134,12
1230 DATA  131,130,12,143,122,12,99,95,13
1240 DATA  114,100,12,130,108,12,124,97,13
1250 DATA  130,104,12,137,115,12,143,122,12
1260 DATA  160,130,12,167,132,12,169,134,12
1270 DATA  171,133,12,171,131,12,167,132,12
1280 DATA  160,130,13,175,126,12,171,131,13
1290 DATA  175,126,12,181,120,12,186,110,12
1300 DATA  188,100,12,186,89,12,181,121,13
1310 DATA  190,121,12,200,118,12,210,112,12
1320 DATA  222,103,12,195,120,13,200,122,12
1330 DATA  183,122,13,190,125,12,207,127,12
1340 DATA  233,107,13,232,103,12,365,0,13
1350 STOP
65399 '** DONE - PRESS ENTER TO RETURN TO MENU **






```

## SMURF.BAS

```bas
1000 REM    SMURF BY JAMES CARD
1010 REM    TYPED IN FROM AN A. B. DICK MIMEOGRAPH.
1020 REM    DECEMBER 10, 1982.
1022 REM    CONVERTED TO IBM-PC BY PHIL GILL 07/83
1025 WIDTH "LPT1:",100
1030 LPRINT CHR$(15):LPRINT CHR$(27) "3" CHR$(18):FOR I=1 TO 95:READ A$:LPRINT TAB(10);A$:NEXT:LPRINT CHR$(27) "@":STOP
1040 :
1050 :
1060 :
1070 :
1080 DATA"                             ******************************":DATA"                         **************************************":DATA"                      *********                **************   ***"
1090 DATA"                   *************               **************     ***":DATA"                *****************              *************        **":DATA"              ***  ***************             ************          ***"
1100 DATA"            **       **************            ***********             **":DATA"          **          *************           ***********               ***"
1110 DATA"         **            ************           **********                ****":DATA"       **               ************         **********              ********"
1120 DATA"      ***                ***********         *********            ************":DATA"      ***                 *********         ********           ****************"
1130 DATA"      ***                  ********        *******          *******************":DATA"       **                  *******        ******        ************************"
1140 DATA"        ***                ******         *****      *****************************":DATA"         ******           ******  ************************************************"
1150 DATA"           *************************************                        ***********":DATA"                              **          **********                            ***"
1160 DATA"                             **      ******                                      ***":DATA"                            ***************************                          ***"
1170 DATA"                        ******               *******************                  **":DATA"                     ****                          *******************            ***"
1180 DATA"                 ****             MMMM                 *******************        ***":DATA"               ***               MMMMMM*****               *****************      ***"
1190 DATA"              **          MM***MM...........MMM                *****************  ****":DATA"             **         MMMM..M...............MM**                ********************"
1200 DATA"             *          MM....................MM..**                ******************":DATA"             *       MMM....MMMMMM.MMM........MM....***               ****************"
1210 DATA"             **     MM....MMM    MM   MM......MM......***               ***************":DATA"       *******M   MM.....MM     M      M......MM........**                *************"
1220 DATA"     ***......MMMM......MM     M        M.....M..........***               ************":DATA"   ***..........M......M      M         M.....M............***              ***********"
1230 DATA"  ***.............M..MM     M           M....................*******.............*****":DATA"  ***...............MMM                 MM..........................................***"
1240 DATA"  **................MM MMM             M.............................................**":DATA"  **.................MMMMM  MMM       MM............................................***"
1250 DATA"   **.....�.�...........MM MMMMM     MM.............................................***":DATA"    **....................MMMMM     MM....................................MMMMMM....***"
1260 DATA"     ***...................MMMMMMMMM.............................MMMMMMMMMMMMMMMMM..***":DATA"       *MMM...................................................MMM...MMMMMMM.....MM..***"
1270 DATA"          MMMMMMMMMM.........................................M.......MMMMMM........***":DATA"             *.......................................................MMMM.........***"
1280 DATA"              **....................................................MM...........***":DATA"                ***............................................MMMMMM..........***"
1290 DATA"                  ****................MMMMM..............M...................***":DATA"                     ****...........MM....MMMMMMM.......MMMM..............****"
1300 DATA"                        *******.........................MMMMMMMM.....******":DATA"                             ******************MMMMMMMMMM....MMMMMMMM*":DATA"                                            **....................**"
1310 DATA"                                           **.....................**":DATA"                                          **...........MM...........**":DATA"                                         **............MM............*"
1320 DATA"                                        **.............MM............**":DATA"                                        *..............MM........MM..**":DATA"                                       **..............M.........MM...**"
1330 DATA"                                      **...............M.........MM....**":DATA"                                     **...............MM.........MM.....**"
1340 DATA"                                     **...............MM.........MM......**":DATA"                                    **................MM.........MM.......**"
1350 DATA"                                   **.................M..........M........**":DATA"                                   **................MM..........M.........**"
1360 DATA"                                   *.................MM.........MM......MMM******":DATA"                                  **.................M..........MM..MMMM   **   **"
1370 DATA"                                  **.................M..........MMMMM      **   **":DATA"                                  **.................M..........M           **  **"
1380 DATA"                                  **M...............MM..........M           *****":DATA"                                  *MMMMMMMMMMMMMMMMMMM..........M           ***"
1390 DATA"                                  **     MMMMMM     M...........M           *":DATA"                                  **               MM..........MM          **"
1400 DATA"                                   **              MM..........MMM         *":DATA"                                    **             M.............MM      **"
1410 DATA"                                     **            M..............MM MMMMMMMMM":DATA"                                      **           M...............MMM.......MM"
1420 DATA"                                       **MM        MM........................MMM":DATA"                                      **  MMMMM     M........................MMM"
1430 DATA"                                     **       MMMMMMMM......................MMM":DATA"                                    **            * MM.............MMMMMMMMMM"
1440 DATA"                           ***********           * M.MM..............MMMMM":DATA"                   *********         ***         *MM..M......M...........MMM"
1450 DATA"              ***********             ****     **MM..MM.....MMMM..........MM*****":DATA"             ***   *********      ****    ******** MMMMMM....MM MMM........MM     ***"
1460 DATA"           ***        *********************     ***     M......M  MMM......MM*       **":DATA"          **            ******       *********    ****  M.......M   MMMMMMMM****     **"
1470 DATA"         ***             ***          **********    ****MM......MM    ************    **":DATA"         ***            ***             *********     **MM.......M        *********   **"
1480 DATA"         ***            **               *********      MMM......M*         ******** ***":DATA"          ***          ***                **********      MM....MM....      ************"
1490 DATA"           ***         ***                 **********      MMMMMM******     ***********":DATA"            ****       ***                  *********       ************     *********"
1500 DATA"             *****    ****                 *********        ***********     *******":DATA"                ***********                *********        ************   *******"
1510 DATA"                         ***               *********        ******************":DATA"                           ******          ********         **************"
1520 DATA"                               *******************       ************":DATA"                                     **********************"

```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk 0208

     Volume in drive A has no label
     Directory of A:\

    CRC      TXT      1076  11-15-84   9:20a
    CRCK4    COM      1536  10-21-82   7:54p
    DESIGN   EXE     52096   4-11-84  11:07p
    FLASHDAN BAS      1636   1-04-84   4:45a
    JSB      BAS      6144   4-21-84   8:56p
    MASTER2  BAS      3910   9-29-83   8:31a
    NUDE     BAS      5632  12-09-83  11:31p
    NUDE84   TXT      7688   3-05-84  10:03p
    PRF      PRF       313   6-19-84  10:09p
    SMURF    BAS      8830  12-27-83  10:57p
    XXX                640   6-25-84  12:13a
           11 file(s)      89501 bytes
                           68096 bytes free
