---
layout: page
title: "PC-SIG Library Disk #17"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0017/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0017"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "GAME SERIES NO 3"

    A nice collection of different kinds of entertaining games.  The text
    adventure will keep you busy for quite a while.  And the arcade games
    will keep you entertained for hours.  To make things easy, all programs
    on this disk may be accessed from a single menu.
    
    How to start:  From BASIC, type LOAD MENU, and press <ENTER>.
    
    File Descriptions:
    
    MENU     BAS  Menu to execute programs on this diskette
    SURVIVAL BAS  Can you survive a trip to the moon?
    PCMAN    BAS  Pac-Man look alike for 80 column display
    MOON     BAS  Enhanced version of SURVIVAL
    STARTRK2 BAS  Documentation for STARTREK game
    STARTREK BAS  Another STARTREK version with minor changes
    JBREAK   BAS  Bounce the ball off of the wall  (BREAKOUT)
    STARTREK DUM  Overlay module for STARTREK
    BREAKOUT BAS  A more sophisticated version of BREAKOUT
    PCINIT   BAS  Initialize a high score file for PCMAN
    FENCE    BAS  Enhanced version of game on Disk No 12
    METEOR   BAS  Enhanced version of game on Disk No 14
    HISCORE  PC   File to keep high score
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## BREAKOUT.BAS

```bas
10 DELAY=160 'establish initial delay
20 KEY OFF
30 CLS: S = 0 'set up score
40 OPTION BASE 1:DIM L(80,2)
50 FOR J=1 TO 2:FOR I = 1 TO 80:L(I,J)=1:NEXT I:NEXT J
60 BAR$=STRING$(80,219):LOCATE 3,1,1:PRINT BAR$;:LOCATE 4,1,1:PRINT BAR$
70 ON KEY(11) GOSUB 380:KEY(11) ON 'make the ball faster
80 ON KEY(12) GOSUB 390:KEY(12) ON 'cursor left button pushed
90 ON KEY(13) GOSUB 400:KEY(13) ON 'cursor right button pushed
100 ON KEY(14) GOSUB 410:KEY(14) ON 'make the ball slower
110 XPAD = 39:YPAD = 25 '            establish default paddle positions
120 CURSOR$="^[[[]"
130 LOCATE YPAD,XPAD,0:PRINT CURSOR$;
140 BY=10:BX=1:DY=1:DX=1
150 KEY (12) STOP:KEY (13) STOP  'suspend key tracking for a while
160 LOCATE BY,BX:PRINT " ";:BX = BX + DX:BY=BY + DY:IF BY = 1 THEN DY = -DY:        SOUND 97,3:GOTO 250
170 IF BY<>24 THEN GOTO 250
180 SOUND 37,3:DY = -DY 'make the ball bounce up
190 IF BX=XPAD + 0 THEN DX=-3:GOTO 250 'accelerate the ball left by 3
200 IF BX=XPAD + 1 THEN DX=DX-1:GOTO 250 'accelerate the ball left by 1
210 IF BX=XPAD + 2 THEN GOTO 250 ' just bounce the ball
220 IF BX=XPAD + 3 THEN DX=DX+1:GOTO 250 ' accelerate right 1
230 IF BX=XPAD + 4 THEN DX=DX+3:GOTO 250 ' accelerate right 3
240 KEY(11) OFF:KEY(12) OFF:KEY(13) OFF:KEY(14) OFF:BEEP:LOCATE 5,1,1
245 CLS: INPUT "ANOTHER GAME ? (Y/N)";Q$
246 IF (Q$="Y") OR (Q$="y") THEN CLEAR: GOTO 10 ELSE RUN "menu"
250 IF BX>=80 THEN DX=-DX:BX=80:SOUND 37,3 'right wall - bounce back
260 IF BX<=1 THEN DX=-DX:BX=1:SOUND 37,3  '  we hit the left wall - bounce back
270 LOCATE BY,BX: PRINT CHR$(2);
280 IF BY <> 3 AND BY <> 4 THEN GOTO 350  ' process space in the bars
290 I=BX:J=BY-2:IF L(I,J) = 1 THEN S=S+1:L(I,J) = 0:SOUND 185,3 : IF J = 1 THEN IF DY < 0 GOTO 300 ELSE  GOTO 310 ELSE IF DY < 0 GOTO 320 ELSE GOTO 330 ELSE GOTO 350
300 DX = - DX : GOTO 340 'top line going up
310 GOTO 340 ' top line going down
320 GOTO 340 ' bottom line going up
330 DX = - DX ' bottom line going down
340 DY = - DY:LOCATE 1,70,0:PRINT "score=";S
350 KEY(12) ON:KEY(13) ON
360 FOR I=1 TO DELAY :NEXT I:GOTO 150
370 '             function key handlers
380 DELAY=ABS(DELAY-1):RETURN ' speed up the ball and the rate of speed
390 LOCATE YPAD,XPAD:PRINT "      ";:XPAD=(XPAD+71)MOD 73 + 1:LOCATE YPAD,XPAD:PRINT CURSOR$;:RETURN
400 LOCATE  YPAD,XPAD:PRINT "      ";:XPAD=(XPAD+1)MOD 74 + 1:LOCATE YPAD,XPAD:PRINT CURSOR$;:RETURN
410 DELAY=DELAY+1:RETURN 'slow down the ball
```

## FENCE.BAS

```bas
95 REM This program is FENCE
99  OPTION BASE 1
100 CLS
110 KEY OFF:KEY(10) ON:ON KEY(10) GOSUB 5000
120 LOCATE 6,10 : PRINT "Welcome to the game of FENCE.  Enter one of the "
130 LOCATE 8,10 : PRINT "numbers below to begin game."
140 LOCATE 10,10: PRINT "      1 = Instructions"
150 LOCATE 12,10: PRINT "      2 = Begin game with skill level of ADVANCED"
160 LOCATE 14,10: PRINT "      3 = Begin game with skill level of INTERMEDIATE"
170 LOCATE 16,10: PRINT "      4 = Begin game with skill level of BEGINNER"
180 LOCATE 18,10: PRINT "      0 = Quit
190 A$=INKEY$:IF A$="" THEN 190
200 IF A$="1" THEN GOSUB 1030 : GOTO 100
210 IF A$="2" THEN SKILL=3 : GOTO 260
220 IF A$="3" THEN SKILL=6 : GOTO 260
230 IF A$="4" THEN SKILL=10: GOTO 260
240 IF A$="0" THEN CLS : RUN "menu"
250 GOTO 110
260 CLS
280 RANDOMIZE(VAL(MID$(TIME$,7,2)))
290 KEY OFF
300 DIM FFFFF$(23)
305 FFFFF$(1)=STRING$(80,220) : PRINT FFFFF$(1)
310 FOR I=2 TO 22
320    FFFFF$(I)=CHR$(221)+STRING$(78," ")+CHR$(222)
322    LOCATE I,1 : PRINT CHR$(221)
325    LOCATE I,80: PRINT CHR$(222)
330 NEXT I
332 FFFFF$(23)=STRING$(80,223)
333 LOCATE 23,1
335 PRINT FFFFF$(23);
336 LOCATE 1,1 : PRINT CHR$(220)
350 TR=2 : TC=2
360 STIME=0
370 CA=1
380 RA=0
390 C=5
400 R=4
410 HUNTER$=CHR$(26)
420 REM -------------->>>  Begin  Hunt
430 GOSUB 820
440 GOSUB 570
450 IF CHR$(219)=A$ THEN 980
455 IF A$="0" THEN 3000
460 IF RA<>0 THEN 520
470 IF (C=79) AND (CA=1) THEN CA=-1 : HUNTER$=CHR$(27)
480 IF (C=2) AND (CA=-1) THEN CA=1 : HUNTER$=CHR$(26)
490 LOCATE R,C : PRINT A$ : LOCATE R,C+CA : PRINT HUNTER$
500 C=C+CA
510 GOTO 420
520 IF (R=2) AND (RA=-1) THEN RA=1 : HUNTER$=CHR$(25)
530 IF (R=22) AND (RA=1) THEN RA=-1: HUNTER$=CHR$(24)
540 LOCATE R+RA,C : PRINT HUNTER$ : LOCATE R,C : PRINT A$
550 R=R+RA
560 GOTO 420
570 REM ===================================================================
580 REM ========  Subroutine to read a char and continue   ================
590 REM ===================================================================
600 A$ = INKEY$
605 IF A$="0" THEN RETURN
610 IF A$="/" OR A$="\" THEN 630
620 A$=MID$(FFFFF$(R),C,1)
630 IF " "=MID$(FFFFF$(R),C,1) THEN MID$(FFFFF$(R),C,1) = A$
640 IF (A$<>"/") AND (A$<>"\") THEN RETURN
650 IF RA=0 THEN IF CA = -1 THEN IF A$="/" THEN 740
660 IF RA=0 THEN IF CA = -1 THEN IF A$="\" THEN 760
670 IF RA=0 THEN IF CA = 1 THEN IF A$="\" THEN 740
680 IF RA=0 THEN IF CA = 1 THEN IF A$="/" THEN 760
690 IF CA=0 THEN IF RA = -1 THEN IF A$="/" THEN 800
700 IF CA=0 THEN IF RA = -1 THEN IF A$="\" THEN 780
710 IF CA=0 THEN IF RA=1 THEN IF A$="/" THEN 780
720 IF CA=0 THEN IF RA=1 THEN IF A$="\" THEN  800
730 RETURN
740 REM   a$="/" , ra=0 , ca = -1  or ra=0,ca=1,a$=\
750 CA=0:RA=1:HUNTER$=CHR$(25):RETURN
760 REM  ra=0,ca=1,/  or ra=0,ca=-1,\
770 CA=0:RA=-1:HUNTER$=CHR$(24):RETURN
780 REM   ca=0,ra=1,/   or   ca=0,ra=-1,\
790 CA=-1:RA=0:HUNTER$=CHR$(27):RETURN
800 REM   ca=0,ra=1,\   or   ca=0,ra=-1,/
810 CA=1:RA=0:HUNTER$=CHR$(26):RETURN
820 REM -------->>>      check time and move target every 10 seconds
830 KK$=TIME$
840 LL=3600*VAL(MID$(KK$,1,2))
850 LL=LL+60*VAL(MID$(KK$,4,2))
860 LL=LL+VAL(MID$(KK$,7,2))
870 IF (LL-STIME)<SKILL  THEN RETURN
880 STIME=LL
890 MID$(FFFFF$(TR),TC,1)=" "
900 LOCATE TR,TC : PRINT " "
910 TR=INT(RND*100)
920 IF (TR<2) OR (TR>22) THEN 910
930 TC=INT(RND*100)
940 IF (TC<2) OR (TC>79) THEN 930
950 MID$(FFFFF$(TR),TC,1)=CHR$(219)
960 LOCATE TR,TC : PRINT CHR$(219)
970 RETURN
980 REM ---------->>>  Hunt is over
990 CLS
1000 LOCATE 10,35 : PRINT " B O O M"
1010 LOCATE 23,27 : COLOR 0,7 : PRINT " Press any key to continue ":COLOR 7,0
1015 ERASE FFFFF$
1020 GOSUB 1260 : GOTO 100
1030 REM -------->>> Instructions
1040 CLS
1050 PRINT
1060 PRINT"  The object of the game of FENCE is to 'KILL' the target.  The"
1070 PRINT"target (shown on the screen as "+CHR$(219)+") will change locations"
1080 PRINT"at regular time intervals depending upon the skill level you"
1090 PRINT"select:"
1100 PRINT"           ADVANCED:     Target will move every 3 seconds"
1110 PRINT"           INTERMEDIATE: Target will move every 6 seconds"
1120 PRINT"           BEGINNER:     Target will move every 10 seconds"
1130 PRINT
1140 PRINT"  The 'hunter' will stalk along at a steady pace.  You can change"
1150 PRINT"the direction of the hunter by putting up a fence (\ or /) which"
1160 PRINT"will change the hunters direction depending upon the direction"
1170 PRINT"he is currently travelling.  For example:"
1180 PRINT
1190 PRINT"    "+STRING$(5,26)+"\            /"+STRING$(5,27)
1200 PRINT"        "+CHR$(25)+"              "+CHR$(25)
1210 PRINT"        "+CHR$(25)+"              "+CHR$(25)
1220 PRINT"        "+CHR$(25)+"              "+CHR$(25)
1222 PRINT
1224 PRINT"     If you want to give up a hunt, just enter 0"
1230 LOCATE 23,20: COLOR 0,7 : PRINT " Press any key to continue " : COLOR 7,0
1240 GOSUB 1260 :RETURN
1250 RETURN
1260 REM -------->>>  wait
1270 A$=INKEY$: IF A$="" THEN 1270
1280 RETURN
3000 REM --------->>>  Give up a hunt
3010 CLS
3020 LOCATE 10,20:COLOR 0,7:PRINT" I knew you could'nt do it ":COLOR 7,0
3030 LOCATE 23,20:PRINT" Press any key to continue ": COLOR 7,0
3040 ERASE FFFFF$ : GOSUB 1260 : GOTO 100
5000 RUN "menu"
```

## JBREAK.BAS

```bas
10  DEFINT A-Z
20 RANDOMIZE(CVI(MID$(TIME$,7,2)))
30 DIM L(4),P(4),K(4),C(4),OP(4),F(4,2)
40 KEY OFF
50 CLS
60 DEF SEG=&HB000
70  FOR I = 194 TO 286  STEP 2  :POKE I,219:NEXT
80 FOR I = 194 TO 3954 STEP 160:POKE I,219:NEXT
90 FOR I = 286 TO 3968 STEP 160:POKE I,219:NEXT
100 FOR I = 288  TO 3970 STEP 160:POKE I,219:NEXT
110 FOR I = 192  TO 3884 STEP 160:POKE I,219:NEXT
120 FOR K=1 TO 2
130 F(K,1)=160-K*2:F(K,2)=160+K*2
140 NEXT K
150 L(1)=2:L(2)= 70:C(1)=254:P(1)=INT((RND*30+985))*2:K(1)=1
160 DIR=0:CPOS=3756:BALLS=10:SCORE=0
170 POKE P(1),C(1):I=1
180 GOSUB 750
190 LOCATE 1,L(2):COLOR 0,7:PRINT "BALLS=";BALLS;:COLOR 7,0
200 REM start of loop
210 OP(I)=P(I)
220 D=1
230 IF K(I)=1 THEN P(I)=P(I)-F(D,1):GOTO 270
240 IF K(I)=2 THEN P(I)=P(I)-F(D,2):GOTO 270
250 IF K(I)=3 THEN P(I)=P(I)+F(D,1):GOTO 270
260 IF K(I)=4 THEN P(I)=P(I)+F(D,2)
270 PL=PEEK(P(I))
280 IF PL<>32 THEN GOSUB 530:P(I)=OP(I):K(I)=K1:SOUND 800,1
290 DIR=0:GOSUB 900
370 DEF SEG:POKE 106,0:DEF SEG=&HB000
380 POKE OP(I),32:POKE P(I),C(I)
390 OPOS=CPOS
400 IF DIR=0 THEN 440
410 IF DIR=1 AND CPOS<>3716 THEN CPOS=CPOS-8:GOTO 430
420 IF DIR=2 AND CPOS<>3796 THEN CPOS=CPOS+8
430 FOR N=OPOS TO OPOS+8 STEP 2:POKE N,32 :NEXT N
440 FOR N=CPOS TO CPOS+8 STEP 2:POKE N,219:NEXT N
450 IF BALLS > 0 THEN 200
460 LOCATE 25,31:PRINT "  AGAIN (Y/N)   ";
470 GOSUB 59990:IF INSTR("YNyn",IKEY$)=0THEN 470 ELSE IF IKEY$="Y" OR IKEY$="y" THEN 50
480 COLOR 7,0
490 DEF SEG
500 KEY ON
510 CLS
520 RUN "menu"
530 'change direction
540 IF PL<>178 THEN 590
550 LOCATE 1,L(I):SCORE=SCORE+1:COLOR 0,7:PRINT "SCORE="SCORE;:COLOR 7,0
560 POKE P(I),32:K1=5-K(I)
570 IF SCORE/135 = INT(SCORE/135) THEN BALLS=BALLS+5:GOSUB 750
580 RETURN
590 IF (P(I)<CPOS OR P(I)>CPOS+8) THEN 640
600 IF P(I)=CPOS AND K(I)=4 THEN K1=2:GOTO 630
610 IF P(I)=CPOS+8 AND K(I)=3 THEN K1=1:GOTO 630
620 K1=5-K(I)
630 POKE OP(I),32:OP(I)=OP(I)-160:RETURN
640 IF P(I) <=320 THEN POKE OP(I),32:OP(I)=OP(I)+160:K1=5-K(I):RETURN
650 IF P(I)<3840 THEN 710
660 SOUND 37,10:K1=1:BALLS=BALLS-1
670 LOCATE 1,L(2):COLOR 0,7:PRINT "BALLS=";BALLS;:COLOR 7,0
680 POKE OP(I),32:OP(I)=INT((RND*30+985))*2
690 FOR TY=1 TO 700:NEXT TY
700 RETURN
710 IF K(I)=1 THEN K1=2:RETURN
720 IF K(I)=2 THEN K1=1:RETURN                                 
730 IF K(I)=3 THEN K1=4:RETURN
740 IF K(I)=4 THEN K1=3:RETURN
750 FOR J=6 TO 8
760 FOR N = 34 TO 126 STEP 2  :X=PEEK(J*160+N):IF X<>219 THEN POKE J*160+N,178
770 NEXT N
780 NEXT J
790 FOR N=CPOS TO CPOS+8 STEP 2:POKE N,219:NEXT N
800 IF OP(I)>=994 AND OP(I)<=1406 THEN SCORE=SCORE+1
810 RETURN
900 IKEY$=INKEY$:IF LEN(IKEY$)<>2 THEN RETURN
910 STN=ASC(RIGHT$(IKEY$,1)):IF STN=75 THEN DIR=1
920 IF STN=77 THEN DIR=2
930 RETURN
59990 IKEY$=INKEY$:IF IKEY$="" THEN 59990 ELSE RETURN
```

## MENU.BAS

```bas
10 REM ======================================================================
20 REM ============================= adx007 =================================
30 REM This program presents a menu of the programs available on this     ===
40 REM diskette and allows the user to select a program by moving the     ===
50 REM cursor to the desired program and pressing ENTER.                  ===
60 REM ======================================================================
70 REM $s2
80 REM  =====================================================================
90 REM  Turn off KEY display, set display width, clear the screen and set ===
100 REM KEY(10) to reload this menu program when pressed in command mode. ===
110 REM =====================================================================
120 REM $s2
130 KEY OFF:WIDTH 80:CLS:
140 REM $s2
150 REM =====================================================================
160 REM Display the menu of the programs available on this diskette.      ===
170 REM =====================================================================
180 REM $s2
190 LOCATE 1,37,0:COLOR 0,7:PRINT " adx007 ";
200 LOCATE 3,10:COLOR 7,0:PRINT "The following programs are available on this diskette:";
210 LOCATE 5,30:PRINT "Pac-Man type game"
220 LOCATE 6,30:PRINT "Lunar Lander Adventure"
225 LOCATE 7,30:PRINT "Lunar Lander Adventure (enhanced)"
240 LOCATE 8,30:PRINT "Startrek "
260 LOCATE 9,30:PRINT "Jailbreak"
270 LOCATE 10,30:PRINT "Meteor"
280 LOCATE 11,30:PRINT "Fence"
282 LOCATE 12,30:PRINT "Breakout"
284 LOCATE 13,30:PRINT "Initialize Pac-Man Hi-Score file"
286 LOCATE 14,30:PRINT "Exit to Basic"
290 LOCATE 15,1:PRINT"Use the ";:COLOR 15:PRINT"UP ("CHR$(24)")";:COLOR 7:PRINT" and ";:COLOR 15:PRINT"DOWN ("CHR$(25)")";:COLOR 7:PRINT" arrows to position the cursor to the function"
300 LOCATE 17,1:PRINT"desired and then press the ";:COLOR 15:PRINT"ENTER ("CHR$(17)CHR$(196)CHR$(217)")";:COLOR 7:PRINT" key."
310 REM $s2
320 REM =====================================================================
330 REM Set up the initial coordinates for the selection arrow.           ===
340 REM =====================================================================
350 REM $s2
360 X=25:Y=5
370 REM $pa
380 REM =====================================================================
390 REM Set up UP and DOWN arrows for moving selection arrow.             ===
400 REM =====================================================================
410 REM $s2
420 KEY(11) ON:KEY(14) ON:ON KEY(11) GOSUB 750:ON KEY(14) GOSUB 820
430 REM $s2
500 REM =====================================================================
510 REM Display highlighted selection arrow at Y,X.                       ===
520 REM =====================================================================
530 REM $s2
540 COLOR 15:LOCATE Y,X:PRINT "==>";
550 REM $s2
560 POKE 106,0'clear kybd buffer
570 REM $s2
580 REM =====================================================================
590 REM If ENTER is pressed, go to program run routine.                   ===
600 REM =====================================================================
610 REM $s2
620 IF INKEY$ = CHR$(13) THEN BEEP:COLOR 7:CLS:GOTO 890
630 REM $s2
640 REM =====================================================================
650 REM Display the date and time at the bottom of the display.           ===
660 REM =====================================================================
670 REM $s2
680 COLOR 7:LOCATE 25,25:PRINT DATE$,TIME$;
690 GOTO 540
700 REM $pa
710 REM =====================================================================
720 REM Move the selection arrow up if it isn't at the top of the menu.   ===
730 REM =====================================================================
740 REM $s2
750 BEEP:Y1=CSRLIN:X1=POS(0):LOCATE Y,X:PRINT "   ";:LOCATE Y1,X1:IF Y>5 THEN Y=Y-1
760 RETURN 540
770 REM $s2
780 REM =====================================================================
790 REM Move the selection arrow down if it isn't at the top of the menu. ===
800 REM =====================================================================
810 REM $s2
820 BEEP:Y1=CSRLIN:X1=POS(0):LOCATE Y,X:PRINT "   ";:LOCATE Y1,X1:IF Y<14 THEN Y=Y+1
830 RETURN 540
840 REM $s2
850 REM =====================================================================
860 REM Run the selected program. If selection is invalid, return to menu.===
870 REM =====================================================================
880 REM $s2
890 IF Y=5 THEN RUN "pcman"
900 IF Y=6 THEN RUN "survival"
910 IF Y=7 THEN RUN "moon"
920 IF Y=8 THEN RUN "startrek"
940 IF Y=9 THEN RUN "jbreak"
950 IF Y=10 THEN RUN "meteor"
960 IF Y=11 THEN RUN "fence"
962 IF Y=12 THEN RUN "breakout"
964 IF Y=13 THEN RUN "pcinit"
966 IF Y=14 THEN STOP
970 BEEP:LOCATE 2,1:PRINT "Please make another selection."
980 FOR I=1 TO 1000:NEXT I:RUN
990 REM $s2
```

## METEOR.BAS

```bas
100 REM METEOR, a character graphics arcade game
110 REM by Edward T. Ordman      November 1981
111 KEY(10) ON:ON KEY(10) GOSUB 5000
115 GOSUB 2000:DEFINT R
120 M$=CHR$(2):C$=CHR$(219):X$=CHR$(25):REM face, solid square, down arrow
130 C5$=C$+C$+C$+C$+C$:H$="":T=0:REM block, latch for face motion, score
140 Y=178:E2$=STRING$(2,Y):E5$=STRING$(5,Y):E8$=STRING$(8,Y):REM shading
150 CLS:KEY OFF:PRINT"Do you want directions (Y/N)?":R=523:REM random seed
160 R$=INKEY$:IF R$="y" OR R$="Y" THEN GOSUB 930:GOTO 180
170 IF R$="n" OR R$="N" OR R$=CHR$(13) THEN 180 ELSE R=(R+511)MOD 32003:GOTO 160
180 RANDOMIZE R:REM seed based on delay in answering question
190 PRINT"How hard (1-9)?";
200 R$=INKEY$:C=ASC(R$+" "):IF C>48 AND C<58 THEN C=C-48:GOTO 230
210 IF C=13 THEN C=5 ELSE 200
230 HX=20+INT(40*RND+1):HY=16+INT(8*RND+1):REM position for face
240 CLS:LOCATE 25,1:PRINT"METEOR! (CURSORS MOVE ";M$;")";
260 GOSUB 840:REM put targets, player marker
280 Y1=1:Y2=24:REM Describe meteor path
290 X1=INT(RND*80+1):X2=INT(RND*80+1):REM Each is integer 1-80
310 GOSUB 390:GOTO 290:REM Plot meteor path, repeat
330 REM Plot X$ at Y,X checking for scores, face motion
340 K$=INKEY$:IF K$<>"" THEN H$=K$:REM H$ is latch
350 IF LEN(H$)>0 THEN GOSUB 570:REM Key was struck
360 IF ABS(X-HX)<3 AND ABS(Y-HY)<2 THEN 450:REM Face hit
370 IF SCREEN(Y,X)=219 THEN C2=-1:SOUND 660,2:GOSUB 740:REM Target hit
375 IF Y=24 AND X=80 THEN X=79:REM Writing 24,80 causes scrolling
380 LOCATE Y,X:PRINT X$;:RETURN
390 REM Draw a line from X1,Y1 to X2,Y2
400 SO=(X2-X1)/(Y2-Y1):S=X1-SO
410 FOR Y=Y1 TO Y2:S=S+SO:X=INT(0.5+S)
420 IF Y>HY+1 THEN RETURN:REM Give up if below target
430 GOSUB 330:NEXT Y:RETURN
450 REM Target is hit, position message
460 HX=HX-4:IF HX>72 THEN HX=72
470 IF HX<1 THEN HX=1
480 IF HY=24 THEN HY=23
500 SOUND 400,8:LOCATE HY,HX:PRINTE2$+"BANG"+E2$;:LOCATE HY+1,HX:PRINTE8$;
520 LOCATE 25,35:PRINT"    DEL = FINISH,  INS = PLAY AGAIN          ";
530 H$=INKEY$:IF H$=CHR$(0)+CHR$(83) THEN CLS:KEY ON:RUN "menu"
540 IF H$=CHR$(0)+CHR$(82) THEN GOTO 120
560 GOTO 530
570 REM Process keyboard request
580 IF H$=CHR$(32) THEN 760:REM Pause on space bar
590 IF LEN(H$)=1 THEN H$="":RETURN               
600 HH=ASC(RIGHT$(H$,1)):K$=H$:H$="":LOCATE HY,HX:PRINT" ";
630 IF HH=77 THEN HX=HX+1:H$=K$:IF HX>80 THEN HX=1
650 IF HH=75 THEN HX=HX-1:H$=K$:IF HX<1 THEN HX=80     
670 IF HH=80 AND HY<24 THEN HY=HY+1:H$=K$
680 IF HH=72 AND HY>1 THEN HY=HY-1:H$=K$
690 IF HX=80 AND HY=24 THEN HY=23
700 IF SCREEN(HY,HX)=219 THEN SOUND 440,1:C2=10:GOSUB 740
710 IF SCREEN(HY,HX)=25 THEN SOUND 420,1:C2=2:GOSUB 740
720 HH=0:LOCATE HY,HX:PRINT M$;:RETURN
740 T=T+C2:LOCATE 25,27:PRINTT;:RETURN:REM Score points
760 LOCATE 25,35:PRINT"KEYS: INS=CONTINUE, DEL=STOP, ENTER=RESTORE  ";             
770 H$=INKEY$:IF H$=CHR$(0)+CHR$(82) THEN 910
790 IF H$=CHR$(13) THEN 840
800 IF H$=CHR$(0)+CHR$(83) THEN CLS:KEY ON:RUN "menu"
810 GOTO 770
840 REM put targets and face on screen
860 FOR I=12-C TO 24-C
870 LOCATE I,15:PRINTC5$;:LOCATE I,35:PRINTC5$;:LOCATE I,55:PRINTC5$;
900 NEXT I:LOCATE HY,HX:PRINTM$;
910 LOCATE 25,35:PRINT "     HIT SPACE BAR TO PAUSE                  ";
920 RETURN
930 REM Directions
940 CLS:PRINT:PRINT TAB(35) "METEOR":PRINT:PRINT
950 PRINT"A simple arcade game using character graphics."
960 PRINT:PRINT"The cursor control keys start the " M$ " symbol moving."
970 PRINT"The space bar stops all action temporily, and allows restoring targets."
980 PRINT"Any letter (and some other keys) will stop cursor motion."
990 PRINT:PRINT"See if you can erase the solid blocks before a falling meteor hits you."
1000 PRINT"Each " C$ " you erase scores 10 points, each " X$ " 2 points."
1010 PRINT"You lose 1 point for each " C$ " a meteor hits."
1020 PRINT:PRINT"To hit you a meteor needs to get within the shaded area:"
1030 PRINT:PRINTTAB(37) E5$:PRINTTAB(37) E2$+M$+E2$
1040 PRINTTAB(37) E5$:PRINT:PRINT
1050 PRINT"Some extra instructions will be on the bottom line.":PRINT:RETURN
2000 CLS:FOR I=1 TO 130:PRINT "Meteor";:NEXT I
2005 X2=0:WHILE X3<25
2010 Y1=1:Y2=23
2020 X1=INT(RND*80+1):X2=INT(RND*80+1)
2030 SO=(X2-X1)/(Y2-Y1):S=X1-SO
2040 FOR Y=Y1 TO Y2:S=S+SO:X=INT(0.5+S)
2055 LOCATE Y,X:PRINT CHR$(25);
2060 NEXT Y
2070 X3=X3+1:WEND
2080 RETURN
5000 RUN "menu"
```

## MOON.BAS

```bas
0 'MIKE STAFFORD
5 ' ENTERED, CHANGED, CORRECTED, ENHANCED, AND SCREWED UP BY MIKE STAFFORD
6 KEY OFF
9 DEFINT A-Z
10 DIM T$(47)
20 DIM M(42,8)
30 DIM O(14)
60 REM *********************************************************
70 REM ** INITIALIZE TEXT AND MOVE MATRICES
80 REM *********************************************************
85 CLS: PRINT "VERSION 01-29-82.6     ms";CHR$(2)
86 PRINT ""
88 PRINT ""
90 PRINT "                     WELCOME TO THE GAME OF SURVIVAL."
95 PRINT""
97 PRINT ""
100 INPUT "WOULD YOU LIKE INSTRUCTIONS";B$
110 B$=LEFT$(B$,1):GOSUB 5050
120 IF B$="Y" THEN GOSUB 5130
125 CLS
127 LOCATE 4,10: PRINT "YOU ARE SLOWLY REGAINING YOUR SENSES AFTER DISCOVERING"
128 LOCATE 5,10: PRINT "THAT YOU ARE LOST ON THE MOON."
130 FOR I=1 TO 47
140 READ T$(I)
150 NEXT I
160 FOR I=1 TO 42
170 FOR J=1 TO 8
180 READ M(I,J)
190 NEXT J
200 NEXT I
210 REM *************************************************************
220 REM **  INITIALIZE OTHER PROGRAM VARIABLES
225 REM **
230 REM **  P  = CURRENT POSITION      C  = NO. OF ITEMS CARRIED
240 REM **  TIME.ELAPSED = CURRENT ELAPSED TIME  F4 = ILLUMINATOR ON FLAG
250 REM **  OXYGEN.LEFT = OXYGEN REMAINING      F1 = METEOR SHOWER FLAG
260 REM **  F0 = OXYGEN IN USE FLAG    F2 = OPEN SHED FLAG
270 REM **  V  = VISITS TO COMP ROOM   F7 = BOMB DEACTIVATED FLAG
280 REM **  P1 = POWER IN POWER UNIT   F9 = OXYGEN REQ'D IN STATION
290 REM **  P2 = POWER IN POWER PACK
300 REM *************************************************************
310 F5=0
320 P=1
330 C=2
340 TIME.ELAPSED=0
350 OXYGEN.LEFT=185
360 P1=230
370 P2=50
380 V=0
390 F0=1
400 O(1)=21
410 O(2)=19
420 O(3)=99
430 O(4)=6
440 O(5)=32
450 O(6)=0
460 O(7)=38
470 O(8)=35
480 O(9)=0
490 O(10)=35
500 O(11)=99
510 O(12)=33
520 O(13)=34
530 O(14)=37
540 M(14,4)=0
550 M(14,8)=M(14,7)+1
560 M(2,8)=M(2,7)+1
570 F1=0
580 F2=0
590 F4=0
600 F7=0
610 F9=0
615 CLS
620 REM *************************************************************
630 REM **  DISPLAY CURRENT STATUS AND LOCATION INFORMATION
640 REM *************************************************************
650 PRINT "ELAPSED TIME; "; TIME.ELAPSED; "MINUTES"
660 IF O(11)=99 THEN PRINT "POWER UNIT: "; P1; "UNITS"
670 IF O(14)=99 THEN PRINT "POWER PACK: "; P2; "UNITS"
680 TIME.ELAPSED=TIME.ELAPSED+5
690 IF O(11)=99 AND P1>5 THEN P1=P1-5
700 IF O(14)=99 AND P2>5 THEN P2=P2-5
710 IF O(11)=99 AND P1=0 THEN 3680
720 IF O(14)=99 AND P2=0 THEN 3680
730 IF TIME.ELAPSED>400 THEN 2960
740 IF TIME.ELAPSED>350 THEN 3840
750 IF TIME.ELAPSED>200 THEN 3740
760 IF F0=1 THEN OXYGEN.LEFT=OXYGEN.LEFT-5
770 IF OXYGEN.LEFT<0 THEN OXYGEN.LEFT=0
780 IF F0=0 THEN 800
790 IF OXYGEN.LEFT>0 THEN 840
800 IF F9=0 THEN 820
810 IF P>21 THEN 2900
820 IF P<18 THEN 2900
830 IF P=38 THEN 1700
840 IF P=38 THEN 3590
850 IF F0=1 THEN PRINT "OXYGEN REMAINING: "; OXYGEN.LEFT; "MINUTES"
860 PRINT "PRESENT LOCATION STATUS: YOU ARE"
870 FOR I = M(P,7) TO M(P,8)
880 PRINT T$(I)
890 NEXT I
900 PRINT "##"
910 REM *************************************************************
920 REM **  DISPLAY ANY OBJECTS PRESENT
930 REM *************************************************************
940 IF P=2 THEN 1920
950 FOR I=1 TO 14
960 IF O(I)<>P THEN 990
970 GOSUB 4410
980 PRINT "THERE IS "; B$; " HERE."
990 NEXT I
1000 GOTO 2000
1010 REM*************************************************************
1020 REM ** READ AND PROCESS KEYBOARD RESPONSE
1030 REM ************************************************************
1040 INPUT B$:GOSUB 5050
1050 I=0
1060 IF LEN(B$)<>1 THEN 1320
1070 IF B$="N" THEN I=1
1080 IF B$="S" THEN I=2
1090 IF B$="E" THEN I=3
1100 IF B$="W" THEN I=4
1110 IF B$="U" THEN I=5
1120 IF B$="D" THEN I=6
1130 IF B$="Q" THEN GOTO 5960
1140 IF I=0 THEN 1570
1150 IF M(P,I)=0 THEN 1270
1160 IF M(P,I)=99 THEN 2940
1170 Q=M(P,I)
1180 IF P=12 THEN 3060
1190 IF P=13 THEN 3180
1200 IF P=22 THEN 3310
1210 IF P=23 THEN 3420
1220 IF P=29 THEN 3470
1230 R=P
1240 P=Q
1250 IF P=35 THEN V=V+1
1260 GOTO 650
1270 PRINT "YOU CANNOT GO IN THAT DIRECTION."
1280 GOTO 1040
1290 REM ************************************************************
1300 REM ** PROCESS 2 OR MORE CHARACTER COMMANDS
1310 REM ************************************************************
1320 C$=MID$(B$,1,3)
1330 IF C$="LOO" THEN 650
1340 IF C$="DES" THEN 650
1350 IF C$="GET" THEN 2190
1360 IF C$="TAK" THEN 2190
1370 IF C$="KEE" THEN 2190
1380 IF C$="DRO" THEN 2580
1390 IF C$="LEA" THEN 2580
1400 IF C$="PUT" THEN 2580
1410 IF C$="INV" THEN 2780
1420 IF C$="QUI" THEN 5960
1430 IF C$="END" THEN 5960
1440 IF C$="TRA" THEN 1750
1450 IF C$="DIG" THEN 1860
1460 IF C$="JMS" THEN 1610
1470 IF C$="FUE" THEN 4030
1480 IF C$="REA" THEN 4250
1490 IF C$="DEA" THEN 3890
1500 IF C$="BLA" THEN 4110
1510 IF C$="UP" THEN 1640
1520 IF C$="DOW" THEN 1640
1530 IF C$="NOR" THEN 1640
1540 IF C$="SOU" THEN 1640
1550 IF C$="EAS" THEN 1640
1560 IF C$="WES" THEN 1640
1570 PRINT "INVALID COMMAND!"
1580 GOTO 1040
1590 PRINT "I CANNOT PROCESS YOUR REQUEST!"
1600 GOTO 1040
1610 PRINT "ENTER LOCATION"
1620 INPUT P
1630 GOTO 650
1640 B$=MID$(C$,1,1)
1660 GOTO 1070
1670 REM ************************************************************
1680 REM **  PROCESS ENTRY TO HANGER FROM AIR LOCK
1690 REM ************************************************************
1700 IF R<>39 THEN 2900
1710 GOTO 840
1720 REM ************************************************************
1730 REM **  PROCESS TRANSPORT COMMAND
1740 REM ************************************************************
1750 IF P<>36 THEN 1800
1760 IF O(8)=99 THEN 1590
1770 P=O(8)
1780 PRINT "BEAMING IN PROCESS."
1790 GOTO 650
1800 IF P<>O(8) THEN 1590
1810 P=36
1820 GOTO 1780
1830 REM ************************************************************
1840 REM **  PROCESS DIG COMMAND
1850 REM ************************************************************
1860 IF P<>10 THEN 1590
1870 O(9)=10
1880 GOTO 940
1890 REM ************************************************************
1900 REM **  DROP ILLUMINATOR IF AT OVERLOOK
1910 REM ************************************************************
1920 IF O(4)<>99 THEN 950
1930 O(4)=100
1940 PRINT "YOU DROPPED YOUR ILLUMINATOR! YOU CANNOT RETRIEVE IT."
1945 C=C-1
1950 GOTO 950
1970 REM ***********************************************************
1980 REM **  PROCESS ROBOT
1990 REM ***********************************************************
2000 IF O(5)=28 THEN O(5)=35
2010 IF O(5)=42 THEN O(5)=28
2020 IF O(5)=41 THEN O(5)=42
2030 IF O(5)=27 THEN O(5)=41
2040 IF O(5)=25 THEN O(5)=27
2050 IF O(5)<>35 THEN 2090
2060 IF P<>28 THEN 1040
2070 M(28,1)=35
2080 GOTO 1040
2090 IF O(5)<>32 THEN 1040
2100 IF P<>32 THEN 1040
2110  O(5)=25
2120 IF O(13)=99 THEN 1040
2130 PRINT "ROBOT FAILS TO RECOGNIZE YOU. IT FIRES A PHASOR WEAPON AT YOU."
2135 GOSUB 5094
2140 GOTO 2980
2160 REM ************************************************************
2170 REM ** PROCESS GET OR TAKE COMMAND
2180 REM ************************************************************
2190 GOSUB 4590
2200 IF I>0 THEN 2260
2210 IF I<0 THEN 2240
2220 PRINT " I DON'T RECOGNIZE "; RIGHT$(B$,LEN(B$)-J); "."
2230 GOTO 1040
2240 PRINT "WHAT ITEM?"
2250 GOTO 1040
2260 IF O(I)<>P THEN 2370
2270 IF C>3 THEN 2390
2280 IF I=5 THEN 2410
2290 IF I=10 THEN 2430
2300 IF I=11 THEN 2460
2310 IF I=14 THEN 2490
2320 C=C+1
2330 O(I)=99
2340 IF I=3 THEN F0=1
2350 PRINT "O.K."
2360 GOTO 1040
2370 PRINT "THERE IS NO "; RIGHT$(B$,LEN(B$)-J); " HERE!"
2380 GOTO 1040
2390 PRINT "YOU CAN'T CARRY ANY MORE!"
2400 GOTO 1040
2410 PRINT "YOU CAN'T CARRY A ROBOT!"
2420 GOTO 1040
2430 PRINT "YOU CAN'T GET THE MESSAGE, IT'S ON THE TERMINAL SCREEN."
2450 GOTO 1040
2460 IF O(14)=99 THEN 2520
2470 O(11)=99
2480 GOTO 2320
2490 IF O(11)=99 THEN 2520
2500 O(14)=99
2510 GOTO 2320
2520 PRINT "YOU CAN'T HAVE MORE THAN ONE POWER SUPPLY."
2540 GOTO 1040
2550 REM ************************************************************
2560 REM **  PROCESS DROP OR LEAVE COMMAND
2570 REM ************************************************************
2580 GOSUB 4590
2590 IF I>0 THEN 2620
2600 IF I<0 THEN 2240
2610 GOTO 2220
2620 IF O(I)<>99 THEN 2690
2630 C=C-1
2635 SOUND 100,1
2640 O(I)=P
2650 IF I=3 THEN F0=0
2660 IF I=11 THEN 2710
2670 IF I=14 THEN 2710
2680 GOTO 2350
2690 PRINT "YOU DON'T HAVE "; RIGHT$(B$,LEN(B$)-J); "!"
2700 GOTO 1040
2710 IF P<22 THEN 2870
2720 IF P=38 THEN 2870
2730 IF F9=1 THEN 2870
2740 GOTO 2350
2750 REM ************************************************************
2760 REM **  PROCESS INVENTORY COMMAND
2770 REM ************************************************************
2780 FOR I=1 TO 14
2790 IF O(I)<>99 THEN 2820
2800 GOSUB 4410
2810 PRINT "YOU HAVE "; B$; "."
2820 NEXT I
2830 GOTO 1040
2840 REM ************************************************************
2850 REM **  PROGRAM TERMINATION PROCESSING
2860 REM ************************************************************
2870 PRINT "YOU HAVE NO POWER OR POWER PACK. YOU HAVE FROZEN TO DEATH."
2880 GOTO 2980
2900 PRINT "OXYGEN REQUIRED HERE. NONE AVAILABLE."
2910 GOTO 2980
2920 PRINT "A NUCLEAR DETONATION HAS JUST OCCURRED."
2930 GOTO 2980
2940 I=3000: WHILE I>950: SOUND I,1 :I=I/1.03: WEND: SOUND 250,2
2945 PRINT "YOU HAVE FALLEN TO YOU DEATH."
2950 GOTO 2980
2952 PRINT "YOU HAVE BEEN ZAPPED BY THE LASER."
2960 GOTO 2980
2970 PRINT "THE MOON BASE HAS JUST BEEN DESTROYED BY A LARGE ASTEROID."
2980 PRINT "YOU HAVE FAILED TO SURVIVE."
2990 PRINT "DO YOU WISH TO TRY AGAIN."
3000 INPUT B$:B$=LEFT$(B$,1):GOSUB 5050
3010 IF B$="Y" THEN RESTORE: GOTO 125
3020 GOTO 5960
3030 REM ************************************************************
3040 REM **  PROCESS METEOR SHOWER
3050 REM ************************************************************
3060 IF M(P,I)<>13 THEN 1230
3070 IF F2=1 THEN 1230
3080 PRINT "THERE IS A METEOR SHOWER, YOUR SPACE SUIT HAS DEVELOPED A LEAK!"
3090 GOSUB 4890
3100 IF I<>2 THEN 2980
3120 PRINT "YOUR SUIT IS NOW SEALED."
3130 F2=1
3140 GOTO 1230
3150 REM ************************************************************
3160 REM **  PROCESS LOCKED SHED
3170 REM ************************************************************
3180 IF M(P,I)<>22 THEN 1230
3190 IF F1=1 THEN 1230
3200 PRINT "THE SHED IS LOCKED!"
3210 GOSUB 4890
3220 IF I<>1 THEN 3260
3225 PLAY "L32N53N0N48N0N75N0N17N15N76N43N2N58"
3230 PRINT "YOU ARE IN THE SHED AIR LOCK."
3240 F1=1
3250 GOTO 1230
3260 PRINT "YOUR ATTEMPT FAILS."
3270 GOTO 1040
3280 REM ************************************************************
3290 REM **  PROCESS DARK VENTILATOR SHAFT
3300 REM ************************************************************
3310 IF M(P,I)<>23 THEN 1230
3320 IF F4=1 THEN 1230
3330 PRINT "IT IS DANGEROUS TO PROCEED IN THE DARK!"
3340 GOSUB 4890
3350 IF I<>4 THEN 2940
3360 PRINT "THE SHAFT IS NOW ILLUMINATED."
3370 F4=1
3380 GOTO 1230
3390 REM ************************************************************
3400 REM **  PROCESS SHAFT WITH NO ILLUMINATOR
3410 REM ************************************************************
3420 IF O(4)<>99 THEN 2940
3430 GOTO 1230
3440 REM ************************************************************
3450 REM ** PROCESS LASER BEAM
3460 REM ************************************************************
3470 IF M(P,I)<>37 THEN 1230
3480 IF F3=1 THEN 1230
3490 PRINT "THERE IS A LASER BEAM HERE. PASSAGE NOT POSSIBLE WITH BEAM PRESENT."
3510 GOSUB 4890
3520 IF I<>12 THEN 2952
3530 PRINT "THE BEAM IS NOW DEFLECTED."
3540 F3=1
3550 GOTO 1230
3560 REM ************************************************************
3570 REM ** PROCESS BLOWN SEAL IN SPACE STATION
3580 REM ************************************************************
3590 IF R<>29 THEN 850
3600 IF F9=1 THEN 850
3610 F9=1
3620 PRINT "YOU HAVE JUST BLOWN AIR SEAL IN SPACE STATION."
3630 GOTO 850
3650 REM ************************************************************
3660 REM ** POWER REQUIRED TESTING
3670 REM ************************************************************
3680 IF P<22 THEN 2870
3690 IF F9=1 THEN 2870
3700 GOTO 730
3710 REM ************************************************************
3720 REM **  EXPOSE DEACTIVATOR
3730 REM ************************************************************
3740 IF F5=1 THEN 760
3750 O(6)=14
3760 M(2,8)=M(2,7)
3770 M(14,8)=M(14,7)
3780 M(14,4)=2
3790 F5=1
3800 GOTO 760
3810 REM ************************************************************
3820 REM **  DETONATE BOMB
3830 REM ************************************************************
3840 IF F7=0 THEN 2920
3850 GOTO 760
3860 REM ************************************************************
3870 REM ** DEACTIVATE BOMB
3880 REM ************************************************************
3890 IF O(6)<>99 THEN 3940
3900 IF O(7)<>99 THEN 3980
3910 F7=1
3920 PRINT "BOMB IS NOW DEACTIVATED."
3930 GOTO 1040
3940 PRINT "YOU HAVE NOTHING TO DO IT WITH!"
3950 GOTO 1040
3960 PRINT "THERE IS NOTHING TO DO IT TO!"
3970 GOTO 1040
3980 PRINT "YOU CAN'T DO IT FROM HERE!"
3990 GOTO 1040
4000 REM ************************************************************
4010 REM **  FUEL ROCKET
4020 REM ************************************************************
4030 IF P<>19 THEN 3980
4040 IF O(9)<>99 THEN 3940
4050 O(9)=98
4060 PRINT "FUEL IS NOW LOADED."
4065 C=C-1
4070 GOTO 1040
4080 REM ************************************************************
4090 REM **  BLASTOFF PROCESSING
4100 REM ************************************************************
4110 IF P<>21 THEN 3980
4120 IF O(9)<>98 THEN 4200
4130 IF F7=1 THEN 4160
4140 PRINT "REPAIRS NOT YET COMPLETE."
4150 GOTO 1040
4160 PRINT "CONGRATULATIONS. YOU HAVE JUST BLASTED OFF AND ARE ON YOUR WAY TO EARTH."
4180 PRINT "YOUR ESCAPE TIME:"; TIME.ELAPSED; " MINUTES."
4190 GOTO 2990
4200 PRINT "YOUR SPACE CRAFT HAS NO FUEL!"
4210 GOTO 1040
4220 REM ************************************************************
4230 REM **  COMPUTER READOUT PROCESSING
4240 REM ************************************************************
4250 IF P<>35 THEN 3980
4260 GOSUB 4590
4270 IF I<>10 THEN 3960
4280 IF V<>0 THEN 4320
4290 PRINT "BOMB DE-ACTIVATOR LOCATED SOMEWHERE EAST OF SPACE STATION, ON MOON'S SURFACE."
4310 GOTO 4360
4320 IF V<>1 THEN 4350
4330 PRINT "LOCAL FUEL SOURCE: DILITHIUM CRYSTAL."
4340 GOTO 4360
4350 PRINT "DILITHIUM FOUND IN SOFT SURFACES."
4360 IF F7=1 THEN PRINT "SPACECRAFT REPAIRS COMPLETED."
4370 GOTO 1040
4380 REM ************************************************************
4390 REN **  SUBROUTINE TO DESCRIVE ITEMS AT LOCATION
4400 REM ************************************************************
4410 IF I=1 THEN B$="AN ELECTRONIC KEY"
4420 IF I=2 THEN B$="SEALANT"
4430 IF I=3 THEN B$="AN OXYGEN MODULE"
4440 IF I=4 THEN B$="AN ILLUMINATOR"
4450 IF I=5 THEN B$="A ROBOT"
4460 IF I=6 THEN B$="A DEACTIVATOR"
4470 IF I=7 THEN B$="A NUCLEAR BOMB"
4480 IF I=8 THEN B$="A TRANSPORTER UNIT"
4490 IF I=9 THEN B$="DILITHIUM CRYSTALS"
4500 IF I=10 THEN B$="A COMPUTER MESSAGE"
4510 IF I=11 THEN B$="A POWER UNIT"
4520 IF I=12 THEN B$="A MIRROR"
4530 IF I=13 THEN B$="A CODED BADGE"
4540 IF I=14 THEN B$="A POWER PACK"
4550 RETURN
4560 REM ************************************************************
4570 REM **  SUBROUTINE TO CONVERT AN ITEM TO A NUMERIC VALUE
4580 REM ************************************************************
4590 FOR J=1 TO LEN(B$)
4600 IF MID$(B$,J,1)=" " THEN 4640
4610 NEXT J
4620 I=-1
4630 RETURN
4640 C$=MID$(B$,J+1,3)
4650 I=0
4660 IF C$="ELE" THEN I=1
4670 IF C$="KEY" THEN I=1
4680 IF C$="SEA" THEN I=2
4690 IF C$="OXY" THEN I=3
4700 IF C$="MOD" THEN I=3
4710 IF C$="ILL" THEN I=4
4720 IF C$="ROB" THEN I=5
4730 IF C$="DEA" THEN I=6
4740 IF C$="NUC" THEN I=7
4750 IF C$="BOM" THEN I=7
4760 IF C$="TRA" THEN I=8
4770 IF C$="DIL" THEN I=9
4780 IF C$="CRY" THEN I=9
4790 IF C$="COM" THEN I=10
4800 IF C$="MES" THEN I=10
4810 IF C$="UNI" THEN I=11
4820 IF C$="MIR" THEN I=12
4830 IF C$="BAD" THEN I=13
4840 IF C$="PAC" THEN I=14
4850 RETURN
4860 REM ************************************************************
4870 REM **  SUBROUTINE TO PROCESS TRY COMMAND
4880 REM ************************************************************
4890 INPUT B$:GOSUB 5050
4900 C$=LEFT$(B$,3)
4910 IF C$="TRY" THEN 4950
4920 IF C$="USE" THEN 4950
4930 I=-1
4940 RETURN
4950 GOSUB 4590
4960 IF I<1 THEN PRINT "USE WHAT?":RETURN
4970 IF O(I)=99 THEN RETURN
4980 PRINT "YOU DON'T HAVE "; RIGHT$(B$,LEN(B$)-J); "!"
4990 GOTO 4930
5000 PRINT "YOUR ATTEMPT FAILS!"
5010 GOTO 4930
5020 '***************************************************************
5030 '*  SUBROUTINE TO CONVERT LOWERCASE TO UPPERCASE
5040 '***************************************************************
5050 FOR ICNTR=1 TO LEN(B$)
5060 DUM$=MID$(B$,ICNTR,1)
5070 IF DUM$>="a" AND DUM$<="z" THEN MID$(B$,ICNTR,1)=CHR$(ASC(DUM$) -32)
5080 NEXT ICNTR
5090 RETURN
5091 '****************************************************************
5092 '*  LASER SOUND
5093 '****************************************************************
5094 FOR JK=1 TO 60
5095   SOUND 800,0.18
5096   SOUND 2500,0.146
5097 NEXT JK
5098 RETURN
5100 REM ************************************************************
5110 REM **  PRINT INSTRUCTIONS
5120 REM ************************************************************
5130 CLS: PRINT "YOU HAVE CRASH LANDED ON THE EARTH'S MOON. YOU HAVE LIMITED"
5140 PRINT "SUPPLIES AND TIME IN WHICH TO SURVIVE. TO TRAVEL, YOU MAY"
5150 PRINT "ENTER DIRECTIVES SUCH AS NORTH OR N, AS WELL AS S, E, W AND"
5160 PRINT "U, AND D (UP AND DOWN). YOU WILL ENCOUNTER VARIOUS ITEMS"
5170 PRINT "AND SITUATIONS DURING YOUR TRAVELS. TO COMMUNICATE, ENTER"
5180 PRINT "COMMANDS (VERBS), FOLLOWED BY OBJECT NAMES, IF APPLICABLE."
5190 PRINT "FOR EXAMPLE, GET XXX, LEAVE, AND INVENTORY."
5200 PRINT ""
5210 PRINT "ONCE YOU HAVE SURVIVED, THE OBJECT THEN IS TO ACHIEVE THE"
5220 PRINT "OPTIMUM SURVIVAL TIME. GOOD LUCK!!!"
5230 PRINT ""
5250 PRINT ""
5260 INPUT "HIT ENTER TO CONTINUE";ANYT$
5270 RETURN
5280 DATA "AT MARE SERENITATIS."
5290 DATA "ON RIM OF POSIDONIUS."
5300 DATA "TOTAL DARKNESS TO EAST."
5310 DATA "TWIXT DAWES & PLINIUS."
5320 DATA "AT PASS IN HAEMUS MOUNTAINS."
5330 DATA "AT CRATER MANILUS."
5340 DATA "AT MARE VAPORUM."
5350 DATA "AT MT. EUDOXUS."
5360 DATA "INSIDE ARISTOTELES."
5370 DATA "IN CHANGING AREA."
5380 DATA "IN LACUS SOMNIORUM."
5390 DATA "AT LACUS MORTIS."
5400 DATA "THE SURFACE IS VERY SOFT HERE."
5410 DATA "AT EAST SIDE OF MARE IMBRIUM."
5420 DATA "AT THE BASE OF PLATO CRATER. A"
5430 DATA "SHINY OBJECT IS SEEN WEST."
5440 DATA "BEFORE A METAL SHED. A"
5450 DATA "SIGN READS VENT. SHAFT #2."
5460 DATA "EAST OF MARE SERENITATIS."
5470 DATA "THERE IS TOTAL DARKNESS."
5480 DATA "AT THE CRASH SITE OF A SPACE CRAFT."
5490 DATA "THE SHIP ENTRANCE IS BEFORE YOU."
5500 DATA "AT THE CENTER OF MARE IMBRIUM."
5510 DATA "IN THE AIR LOCK CHAMBER OF THE SHIP."
5520 DATA "IN THE AFT CARGO AND FUEL STORAGE ROOM."
5530 DATA "IN THE ENGINE ROOM OF THE SPACECRAFT."
5540 DATA "IN THE SHIP'S CONTROL ROOM."
5550 DATA "IN AN AIR LOCK CHAMBER."
5560 DATA "INSIDE A VENTILLATOR SHED. A LADDER"
5570 DATA "LEADS DOWN INTO A LARGE METAL SHAFT."
5580 DATA "IN A VENTILLATOR PASSAGE."
5590 DATA "AT A VENTILLATOR OPENING. THROUGH THE"
5600 DATA "OPENING A LIT PASSAGEWAY CAN BE SEEN."
5610 DATA "IN ALIGHTED SPACE STATION CORRIDOR."
5620 DATA "IN THE SPACE STATION INFIRMARY."
5630 DATA "IN THE RECREATION ROOM AND LIBRARY."
5640 DATA "IN THE MESS HALL. ABANDONED FOOD TRAYS"
5650 DATA "ARE STILL ON THE TABLES."
5660 DATA "IN THE STORAGE ROOM AND SUPPLY AREA."
5670 DATA "IN THE SLEEPING QUARTERS."
5680 DATA "IN AN ELEVATOR AT SUBSURFACE LEVEL."
5690 DATA "IN AN ELEVATOR AT SURFACE LEVEL."
5700 DATA "IN THE STATION CONTROL CENTER."
5710 DATA "IN THE TRANSPORTER ROOM."
5720 DATA "IN THE SPACE STATION LABORATORY."
5730 DATA "IN THE HANGAR AREA. THE LAUNCH AREA"
5740 DATA "IS JUST SOUTH OF HERE."
5750 DATA 07, 04, 02, 15, 00, 00, 01, 01, 09, 03, 14, 01, 00, 00, 02, 03
5760 DATA 02, 05, 14, 04, 00, 00, 04, 04, 01, 05, 03, 00, 00, 00, 05, 05
5770 DATA 04, 00, 03, 06, 00, 00, 06, 06, 00, 00, 05, 00, 00, 00, 07, 07
5780 DATA 08, 01, 09, 11, 00, 00, 08, 08, 00, 07, 10, 00, 00, 00, 09, 09
5790 DATA 10, 02, 14, 07, 00, 00, 11, 11, 00, 09, 14, 08, 00, 00, 12, 13
5800 DATA 12, 15, 07, 16, 00, 00, 14, 14, 00, 11, 00, 13, 00, 00, 15, 16
5810 DATA 00, 16, 12, 22, 00, 00, 17, 18, 99, 99, 99, 99, 00, 00, 19, 20
5820 DATA 11, 18, 01, 00, 00, 00, 21, 22, 17, 16, 07, 16, 00, 00, 23, 23
5830 DATA 16, 17, 11, 17, 00, 00, 23, 23, 15, 19, 00, 00, 00, 00, 24, 24
5840 DATA 18, 00, 20, 00, 00, 00, 25, 25, 00, 00, 00, 19, 21, 00, 26, 26
5850 DATA 00, 00, 00, 00, 00, 20, 27, 27, 00, 00, 13, 00, 00, 23, 29, 30
5860 DATA 24, 00, 00, 00, 22, 00, 31, 31, 25, 23, 00, 00, 00, 00, 32, 33
5870 DATA 27, 26, 33, 32, 24, 00, 34, 34, 25, 00, 30, 31, 00, 00, 34, 34
5880 DATA 34, 25, 41, 00, 00, 00, 34, 34, 00, 29, 42, 36, 00, 00, 34, 34
5890 DATA 28, 38, 40, 37, 00, 00, 34, 34, 00, 00, 00, 26, 00, 00, 35, 35
5900 DATA 00, 00, 26, 00, 00, 00, 36, 36, 00, 00, 25, 00, 00, 00, 37, 38
5910 DATA 00, 00, 00, 25, 00, 00, 40, 40, 00, 27, 00, 00, 00, 00, 39, 39
5920 DATA 00, 28, 00, 00, 24, 00, 43, 43, 00, 00, 28, 00, 00, 00, 44, 44
5930 DATA 00, 00, 29, 00, 00, 00, 45, 45, 29, 00, 39, 00, 00, 00, 46, 47
5940 DATA 40, 00, 00, 38, 00, 00, 28, 28, 00, 39, 00, 29, 00, 00, 10, 10
5950 DATA 00, 00, 00, 27, 42, 00, 41, 41, 00, 00, 00, 28, 00, 41, 42, 42
5960 RUN"menu"
```

## PCINIT.BAS

```bas
10 REM INITIALIZE PCMAN SCORE FILE      (PCINIT)
20 CLS:KEY OFF
30 REM SET SCORE MATRIX TO INITIAL VALUES
40 FOR I%=1 TO 10
50  SCORE!(I%)=0:NAM$(I%)="Nobody":SCREENS%(I%)=0:GHOST%(I%)=0
60 NEXT
70 OPEN "HISCORE.PC" AS #1 LEN = 32
80 FIELD #1, 2 AS REC$, 20 AS NAMF$, 4 AS SCORE$, 2 AS SCREENS$, 2 AS GHOSTS$
90 FOR I%=1 TO 10
100 RSET REC$=MKI$(I%)
110 LSET NAMF$=NAM$(I%)
120 RSET SCORE$=MKS$(SCORE!(I%))
130 RSET SCREENS$=MKI$(SCREENS(I%))
140 RSET GHOSTS$=MKI$(GHOST(I%))
150 PUT #1,I%
160 NEXT
170 CLOSE
180 RUN "menu"
```

## PCMAN.BAS

```bas
10 '*********************************************************************
20 '**                    P C  M A N  -  MAZE GAME                     **
30 '*********************************************************************
40 CLEAR ,,4000:DEFINT A-Z:OPTION BASE 1
50 DIM SP(5,2),N(5),PL(5),P(5),OP(5),D(5),M(6,6),SCORE!(11),NAM$(11),SCREENS(11),GHOST(11)
60 RANDOMIZE CVI(RIGHT$(TIME$,2))
70 I=0:L=0:L1=0:X1=0:Y1=0:X2=0:Y2=0:X3=0:Y3=0:S=0:SCR=1:                           D1=0:D2!=0:DS!=0:SC!=0:EX=1:MEN=4:P1=0:PN=0:PX=0
80 PLAY "mbt255l14"
90 GOSUB 1330
100 '*********************************************************************
110 '** READ IN THE VALUES TO ALL ARRAYS                                **
120 '*********************************************************************
130 FOR I = 1 TO 5
140  READ SP(I,1),SP(I,2),PL(I),P(I),D(I),N(I)
150 NEXT
160 FOR I=1 TO 6
170  FOR J=1 TO 6
180   READ M(I,J)
190  NEXT
200 NEXT
210 '*********************************************************************
220 '** INITIALIZE ANT SETUP FOR SCORE AND MEN                          **
230 '*********************************************************************
240 LOCATE 1,1:PRINT "Score ";SC!;
250 LOCATE 1,68:COLOR 15,0:FOR VB=1 TO MEN-1:PRINT CHR$(2);:NEXT:COLOR 7,0
260 DEF SEG = 0 : IF (PEEK(1040) AND 48) = 48 THEN DEF SEG = &HB000 ELSE DEF SEG = &HB800
270 '*********************************************************************
280 '** MAIN LOOP - MOVE MEN AND DETERMINE CAPTURE                      **
290 '*********************************************************************
300 FOR I=1 TO G
310  IF D(I)=0 THEN 450
320  OP(I)=P(I)
330  P(I)=P(I)+N(D(I))
340  IF P(I)=2116 THEN P(I)=2198:GOTO 360
350  IF P(I)=2200 THEN P(I)=2118
360  L=PEEK(P(I)):L1=PEEK(P(I)+1):IF L=32 THEN 440
370  IF (L>=180 AND L<=210) THEN P(I)=OP(I):P1=P(I):GOSUB 580:GOTO 360
380  IF I<>1 THEN 430
390  IF L=249 THEN GOSUB 1680:GOTO 440
400  IF L>=3 AND L<=6 THEN FL=1:GOSUB 860:GOTO 440
410  IF L=15 THEN CT=40:GOSUB 1680
420  GOTO 440
430  IF L=2 THEN FL=0:GOSUB 860:IF CT>0 THEN 450
440  X=I:GOSUB 1230
450 NEXT
460 M$=INKEY$
470 IF LEN(M$)<2 THEN 530
480 MV=ASC(RIGHT$(M$,1))
490 IF MV=72 THEN D(1)=2:GOTO 530
500 IF MV=75 THEN D(1)=3:GOTO 530
510 IF MV=77 THEN D(1)=1:GOTO 530
520 IF MV=80 THEN D(1)=4
530 IF CT>0 THEN CT=CT-1:ELSE EX=1
540 GOTO 300
550 '*********************************************************************
560 '** NEW DIRECTION CALCULATION -- SMART MOVES 1ST, THEN DUMB MOVES   **
570 '*********************************************************************
580 IF I=1 THEN D(1)=0:P(1)=OP(1):RETURN
590 R=RND*2+1:IF R>3-SCR THEN 600:ELSE 740
600 D2!=9999
610 Y1=P(1)\160: X1=(P(1) MOD 160)/2
620 PN=P1+M(1,1):PX=PEEK(PN)
630 IF PX<180 OR PX>210 THEN OK=3:GOSUB 1160
640 PN=P1-M(1,1):PX=PEEK(PN)
650 IF PX<180 OR PX>210 THEN OK=4:GOSUB 1160
660 PN=P1-M(1,2):PX=PEEK(PN)
670 IF PX<180 OR PX>210 THEN OK=5:GOSUB 1160
680 PN=P1+M(1,2):PX=PEEK(PN)
690 IF PX<180 OR PX>210 THEN OK=6:GOSUB 1160
700 P(I)=P2:D(I)=D1:RETURN
710 '*********************************************************************
720 '** DUMB MOVE CALCULATOR                                            **
730 '*********************************************************************
740 R=RND*5+1
750 PN=P1+M(R,1):PX=PEEK(PN)
760 IF PX<180 OR PX>210 THEN P(I)=PN:D(I)=M(R,3):RETURN
770 PN=P1-M(R,1):PX=PEEK(PN)
780 IF PX<180 OR PX>210 THEN P(I)=PN:D(I)=M(R,4):RETURN
790 PN=P1-M(R,2):PX=PEEK(PN)
800 IF PX<180 OR PX>210 THEN P(I)=PN:D(I)=M(R,5):RETURN
810 PN=P1+M(R,2):PX=PEEK(PN)
820 IF PX<180 OR PX>210 THEN P(I)=PN:D(I)=M(R,6):RETURN
830 '*********************************************************************
840 '** THE PCMAN HAS HIT A GHOST -- GETS POINTS OR DIE                 **
850 '*********************************************************************
860 IF CT > 0 THEN 1030
870 MEN = MEN - 1
880 LOCATE 1,68:COLOR 15,0:FOR VB=1 TO MEN-1:PRINT CHR$(2);:NEXT
890 PRINT SPC(1);:COLOR 7,0
900 IF I=1 THEN POKE OP(1),32:ELSE POKE P(1),32
910 OP(1)=2478:P(1)=OP(1):D(1)=1
920 FOR CX=800 TO 37 STEP -20:SOUND CX,0.01*18:NEXT
930 SOUND 37,18
940 IF MEN <> 0 THEN RETURN
950 CLS:GOSUB 1450
960 DEF SEG
970 LOCATE 24,1 :INPUT "Do you want another game ( Y or N )";A$
980 IF LEFT$(A$,1) = "n" OR LEFT$(A$,1) ="N" THEN RUN "menu"
990 RUN
1000 '*********************************************************************
1010 '** GET THE BIG POINTS HERE -- THE GHOST IS IN REVERSE STATE        **
1020 '*********************************************************************
1030 SC!=SC!+(2^EX)*100
1040 EX=EX+1:IF EX>4 THEN CT=1:EX=1
1050 LOCATE 1,1:PRINT "Score ";SC!;
1060 IF L>=3 THEN X=L-1:ELSE X=I
1070 IF FL AND (SP(X,1)=249 OR SP(X,1)=15) THEN GOSUB 1680
1080 IF NOT FL THEN POKE OP(X),32:ELSE POKE P(X),32
1090 P(X)=1838:GOSUB 1230
1100 FOR CX=37 TO 800 STEP 20:SOUND CX,0.01*18:NEXT
1110 SOUND 800,18
1120 RETURN
1130 '*********************************************************************
1140 '** FIND THE SMALLEST DISTANCE TO PCMAN AND SET THE DIRECTION       **
1150 '*********************************************************************
1160 Y2=PN\160:X2=(PN MOD 160)/2:X3=X2-X1:Y3=Y2-Y1
1170 DS!=X3*X3+Y3*Y3:IF CT>0 THEN DS!=-DS!
1180 IF DS!<D2! THEN D2!=DS!:P2=PN:D1=M(1,OK)
1190 RETURN
1200 '*********************************************************************
1210 '** MOVE A GHOST/PCMAN. LEAVE THE CORRECT CHAR BEHIND GHOST.        **
1220 '*********************************************************************
1230 POKE OP(X),SP(X,1):POKE OP(X)+1,SP(X,2)
1240 IF X=1 THEN SP(1,1)=32:SP(1,2)=7:GOTO 1260
1250 SP(X,1)=PEEK(P(X)):SP(X,2)=PEEK(P(X)+1)
1260 IF SP(X,1)>=2 AND SP(X,1)<=6 THEN SP(X,2)=SP(SP(X,1)-1,2):SP(X,1)=SP(SP(X,1)-1,1)
1270 POKE P(X),PL(X)
1280 IF CT>0 AND X<>1 THEN POKE P(X)+1,120:ELSE POKE P(X)+1,15
1290 RETURN
1300 '*********************************************************************
1310 '** GET THE BEST SCORE LIST AND INPUT NUMBER OF GHOSTS.             **
1320 '*********************************************************************
1330 CLS:KEY OFF:OPEN "b:hiscore.pc" AS #1 LEN = 32
1340 FIELD #1,2 AS REC$,20 AS NAMF$,4 AS SCORE$,2 AS SCREENS$,2 AS GHOSTS$
1350 FOR I=1 TO 10
1360 GET #1,I
1370 NAM$(I)=NAMF$:SCORE!(I)=CVS(SCORE$):GHOST(I)=CVI(GHOSTS$):SCREENS(I)=CVI(SCREENS$)
1380 NEXT
1390 GOSUB 1740
1400 LOCATE 23,1:INPUT "How many GHOSTS (1 to 4)";G:IF G<1 OR G>4 THEN BEEP:GOTO 1400
1410 G=G+1:CLS:GOSUB 1880:RETURN
1420 '*********************************************************************
1430 '** WRITE OUT THE NEW BEST OF ALL TIME SCORES.                      **
1440 '*********************************************************************
1450 FOR I = 1 TO 8: A$ = INKEY$: IF LEN(A$) >0 THEN GOTO 1460
1460 NEXT I
1470 CLS:POKE(106),0:LOCATE 2,1:IF SC! <= SCORE!(10) THEN GOTO 2360
1480 PRINT "Your score of";SC!;"is one of the ten best so far !!!!!!":PRINT
1490 LINE INPUT "Enter your name..";NAM$(11)
1500 NAM$(11)=LEFT$(NAM$(11)+SPACE$(20),20)
1510 SCORE!(11)=SC!:GHOST(11)=G-1:SCREENS(11)=SCR
1520 FOR I=1 TO 10
1530  FOR J=I+1 TO 11
1540   IF SCORE!(I)<SCORE!(J) THEN SWAP SCORE!(I),SCORE!(J):SWAP NAM$(I),NAM$(J):SWAP GHOST(I),GHOST(J):SWAP SCREENS(I),SCREENS(J)
1550  NEXT
1560 NEXT
1570 FOR I=1 TO 10
1580 RSET REC$=MKI$(I):LSET NAMF$=NAM$(I):RSET SCORE$=MKS$(SCORE!(I))
1590 RSET GHOSTS$=MKI$(GHOST(I)): RSET SCREENS$=MKI$(SCREENS(I))
1600 PUT #1,I
1610 NEXT
1620 CLOSE #1
1630 CLS:GOSUB 1740
1640 RETURN
1650 '*********************************************************************
1660 '** CALCULATE THE SCORE AND MAKE THE EATING SOUND                   **
1670 '*********************************************************************
1680 SC!=SC!+SCR:S=S+1:LOCATE 1,1:PRINT "Score ";SC!;:PLAY "n9n0n1n0"
1690 IF S>420 THEN X=I:GOSUB 1230:S=0:SCR=SCR+1:CT=0:GOSUB 1880:RESTORE:GOTO 130
1700 RETURN
1710 '*********************************************************************
1720 '** DRAW THE HI SCORE MATRIX                                        **
1730 '*********************************************************************
1740 TOP$="╔═══════ Name ═════════╦═ Score ═╦═ Screens ═╦═ Ghosts ═╗"
1750 INN$="║                      ║         ║           ║          ║"
1760 BOT$="╚══════════════════════╩═════════╩═══════════╩══════════╝"
1770 COLOR 0,7:LOCATE 1,13:PRINT TOP$
1780 FOR I=2 TO 20:LOCATE I,13:PRINT INN$:NEXT
1790 LOCATE 21,13:PRINT BOT$:COLOR 7,0
1800 FOR I=1 TO 10:LOCATE I*2,15:PRINT LEFT$(NAM$(I),20);:NEXT
1810 FOR I=10 TO 1 STEP -1:LOCATE I*2,37:PRINT SCORE!(I);:NEXT
1820 FOR I=1 TO 10:LOCATE I*2,51:PRINT SCREENS(I);:NEXT
1830 FOR I=10 TO 1 STEP -1:LOCATE I*2,62:PRINT GHOST(I);:NEXT
1840 RETURN
1850 '*********************************************************************
1860 '** DRAW THE MAZE AND PLACE POWER PILLS                             **
1870 '*********************************************************************
1880 LOCATE  1,20:PRINT "╔═══════════╦═══════════════╦═══════════╗";
1890 LOCATE  2,20:PRINT "║•••••••••••║•••••••••••••••║•••••••••••║";
1900 LOCATE  3,20:PRINT "║•╞═══════╗•║•╞═══════════╡•║•╔═══════╡•║";
1910 LOCATE  4,20:PRINT "║•••••••••║•║•••••••••••••••║•║•••••••••║";
1920 LOCATE  5,20:PRINT "╚═╗•╔═══╗•╨•╨•╞═══╡•╥•╞═══╡•╨•╨•╔═══╗•╔═╝";
1930 LOCATE  6,20:PRINT "  ║•║   ║•••••••••••║•••••••••••║   ║•║  ";
1940 LOCATE  7,20:PRINT "  ║•╚═══╝•╞╡•╔════╗•║•╔════╗•╞╡•╚═══╝•║  ";
1950 LOCATE  8,20:PRINT "  ║••••••••••║    ║•║•║    ║••••••••••║  ";
1960 LOCATE  9,20:PRINT "  ║•╥•╞════╡•╚════╝•║•╚════╝•╞════╡•╥•║  ";
1970 LOCATE 10,20:PRINT "  ║•║•••••••••••••••║•••••••••••••••║•║  ";
1980 LOCATE 11,20:PRINT "  ║•║•╥•╞══╡•╞══════╩══════╡•╞══╡•╥•║•║  ";
1990 LOCATE 12,20:PRINT "  ║•║•║•••••••••••••••••••••••••••║•║•║  ";
2000 LOCATE 13,20:PRINT "╞═╝•╨•╨•╞═╡•╔═══════════════╗•╞═╡•╨•╨•╚═╡";
2010 LOCATE 14,20:PRINT "••••••••••••║               ║••••••••••••";
2020 LOCATE 14,35:COLOR 0,7:PRINT "P C   M A N":COLOR 7,0
2030 LOCATE 15,20:PRINT "╞═╗•╔═════╗•╚═══════════════╝•╔═════╗•╔═╡";
2040 LOCATE 16,20:PRINT "  ║•║     ║•••••••••••••••••••║     ║•║  ";
2050 LOCATE 17,20:PRINT "╔═╝•╚═════╝•╞═════╡•╥•╞═════╡•╚═════╝•╚═╗";
2060 LOCATE 18,20:PRINT "║•••••••••••••••••••║•••••••••••••••••••║";
2070 LOCATE 19,20:PRINT "║•╔═══╗•╞═════════╡•║•╞═════════╡•╔═══╗•║";
2080 LOCATE 20,20:PRINT "║•║   ║•••••••••••••║•••••••••••••║   ║•║";
2090 LOCATE 21,20:PRINT "║•║   ║•╥•╞═══════╡•╨•╞═══════╡•╥•║   ║•║";
2100 LOCATE 22,20:PRINT "║•║   ║•║•••••••••••••••••••••••║•║   ║•║";
2110 LOCATE 23,20:PRINT "║•╚═══╝•╨•╞╡•╔═════════════╗•╞╡•╨•╚═══╝•║";
2120 LOCATE 24,20:PRINT "║••••••••••••║             ║••••••••••••║";
2130 LOCATE 24,36:COLOR 15,0:PRINT "Screen";SCR;:COLOR 7,0
2140 LOCATE 25,20:PRINT "╚════════════╝             ╚════════════╝";
2150 COLOR 15,1
2160 LOCATE 4,26:PRINT CHR$(15);
2170 LOCATE 4,54:PRINT CHR$(15);
2180 LOCATE 18,26:PRINT CHR$(15);
2190 LOCATE 18,54:PRINT CHR$(15);
2200 COLOR 7,0
2210 RETURN
2220 '*********************************************************************
2230 '** DATA TO FILL IN VARIOUS ARRAYS AT START OF EACH SCREEN          **
2240 '*********************************************************************
2250 DATA 32,7,2,2478,1,2
2260 DATA 249,7,3,3792,1,-160
2270 DATA 249,7,4,3728,3,-2
2280 DATA 249,7,5,268,3,160
2290 DATA 249,7,6,204,1,999
2300 DATA 2,160,1,3,2,4
2310 DATA 160,2,4,2,1,3
2320 DATA -2,160,3,1,2,4
2330 DATA 2,-160,1,3,4,2
2340 DATA 160,-2,4,2,1,3
2350 DATA -160,2,2,4,3,1
2360 LOCATE 23,1:PRINT "Your score is ";SC!; :RETURN
```

## STARTREK.BAS

```bas
100 CLS
105 RANDOMIZE (VAL(MID$(TIME$,7,2)))
110 KEY OFF
120 LOCATE 10,20 : COLOR 0,7
130 PRINT "  Do you want sound effects  [y/n] ?  " : COLOR 7,0
140 A$=INPUT$(1)
150 IF (A$="y") OR (A$="Y") THEN NOISE=1 ELSE NOISE=0
160 REM ==================>> STARTREK    IBM/PC  Version 1.0         2/12/82
170 SSW=0                  ' subroutine call switch
180 DIM Q$(5),D$(6)
190 READ Q$(1),Q$(2),Q$(3),Q$(4),Q$(5),D$(1),D$(2),D$(3),D$(4),D$(5),D$(6)
200 REM ===============
210 GOSUB 6670
220 REM === gosub 5660
230 DIM G(8,8),Q(8,8),D(6),K(9,3),N(3),C$(20)
240 REM ========================================
250 DATA ".","E","K","B","*","Warp Engines","S.R. Sensors","L.R. Sensors"
260 DATA "Phaser Control","Photon Tubes","Damage Control"
270 REM =======================================================================
280 T0 = INT(RND*20+20)*100
290 T = T0
300 T9 = 40
310 E0 = 3000                     ' Initial energy level
320 E=3000
330 P0 = 10
340 P = 10
350 S9 = 200
360 DEF FND(D)=SQR((K(I,1)-S1)^2+(K(I,2)-S2)^2)
370 Q1 = INT(RND*8+1)
380 Q2 = INT(RND*8+1)
390 REM ==  mat d(0)
400 S1 = INT(RND*8+1)
410 S2 = INT(RND*8+1)
420 REM =========================   Set up Galaxy  ============================
430 LOCATE 10,20: COLOR 16,7
440 PRINT"  Enterprise being prepared for battle  "
450 COLOR 7,0
460 B9 = 0
470 K9 = 0
480 FOR I = 1 TO 8
490    FOR J = 1 TO 8
500      R = RND*64
510      K3 = 0
520      IF R < 0.001 THEN 540
530      GOTO 550
540      K3 = K3 +1
550      IF R<0.2 THEN 570
560      GOTO 580
570      K3=K3+1
580      IF R<0.4 THEN 600
590      GOTO 610
600      K3=K3+1
610      IF R<1. THEN 630
620      GOTO 640
630      K3=K3+1
640      IF R<3.2 THEN 660
650      GOTO 670
660      K3=K3+1
670      IF R<4.28 THEN 690
680      GOTO 700
690      K3=K3+1
700      IF R<4.28 THEN 720
710      GOTO 730
720      K3=K3+1
730      IF R < 7.28 THEN 750
740      GOTO 760
750      K3 = K3 + 1
760      IF R < 13.28 THEN 780
770      GOTO 790
780      K3 = K3 +1
790      K9 = K9 + K3
800      B3 = 0
810      IF RND > 0.96 GOTO 830
820      GOTO 840
830      B3=1
840      B9 = B9 + B3
850      S3=INT(RND*8+1)
860      G(I,J) = K3*100+B3*10+S3
870    NEXT J
880 NEXT I
890 REM ==============================================================
900 K0=K9
910 IF B9>0 GOTO 960
920    I = RND*8+0.5
930    J = I
940    G(I,J) = G(I,J)+10
950    B9=1
960 GOTO 5450
970 REM ==============================================================
980 REM ======================>>  Set up Quadrant
990 CLS
1000 K3=0
1010 B3=K3
1020 S3=B3
1030 IF Q1<1 THEN 1120
1040   IF Q1>8 THEN 1120
1050 IF Q2<1 THEN 1120
1060 IF Q2>8 THEN 1120
1070 X=G(Q1,Q2)/100
1080 K3=INT(X)
1090 B3=INT((X-K3)*10)
1100 S3=G(Q1,Q2)-INT(G(Q1,Q2)*0.1)*10
1110 REM  mat k(0)
1120 FOR I = 1 TO 8
1130   FOR J = 1 TO 8
1140     Q(I,J)=0
1150   NEXT J
1160 NEXT I
1170 Q(S1,S2)=1
1180 FOR I = 1 TO K3
1190    GOSUB 5400                   ' Subroutine call to random number gen
1200    Q(R1,R2)=2
1210    K(I,1)=R1
1220   K(I,2)=R2
1230   K(I,3)=S9
1240 NEXT I
1250 FOR I = 1 TO B3
1260    GOSUB 5400                  ' Subroutine call to random number gen
1270    Q(R1,R2)=3
1280 NEXT I
1290 FOR I = 1 TO S3
1300    GOSUB 5400                  ' Subroutine call to random number gen
1310    Q(R1,R2)=4
1320 NEXT I
1330 A=-1
1340 REM ==========================>> Short range sensor scan
1350 S4=S1-1
1360 S5=S1+1
1370 S6=S2-1
1380 S7=S2+1
1390 IF S4<1 THEN 1410
1400   GOTO 1420
1410 S4=1
1420 IF S5>8 THEN 1440
1430   GOTO 1450
1440 S5=8
1450 IF S6<1 THEN 1470
1460   GOTO 1480
1470 S6=1
1480 IF S7>8 THEN 1500
1490 GOTO 1510
1500 S7=8
1510 FOR I = S4 TO S5
1520    FOR J = S6 TO S7
1530      IF Q(I,J)<>3 THEN 1580
1540      C$="DOCKED"
1550      E=3000
1560      P = 10
1570      GOTO 1670
1580    NEXT J
1590 NEXT I
1600 IF K3>0 THEN 1640
1610   IF E<E0*0.1 THEN 1660
1620     C$="GREEN"
1630     GOTO 1670
1640 C$="RED"
1650 GOTO 1670
1660 C$="YELLOW"
1670 IF A<0 THEN 1690
1680 GOTO 1700
1685 LOCATE 16,1
1690 GOSUB 4950
1700 REM
1710 LOCATE 1,1
1720 IF E<=0 THEN 5140
1730 IF D(2)=>0 THEN 1780
1740 PRINT
1750 PRINT "*** Short Range Sensors are out ***"
1760 PRINT
1770 GOTO 2390
1780 PRINT "*****  Short  Range  Sensor  Scan  *****           "
1790 PRINT "-------------------------------------------"
1800 FOR I = 1 TO 8
1810    FOR J = 1 TO 8
1820      IF "K"=Q$(Q(I,J)+1) THEN COLOR 23,0
1830       PRINT Q$(Q(I,J)+1);" ";
1840      COLOR 7,0
1850    NEXT J
1860    PRINT "   ";
1870    IF I = 1 THEN 2210
1880    IF I = 2 THEN 2230
1890    IF I = 3 THEN 2280
1900    IF I = 4 THEN 2300
1910    IF I = 5 THEN 2320
1920    IF I = 6 THEN 2340
1930    IF I = 7 THEN 2360
1940    IF I = 8 THEN 2380
1950 REM ===========================>>  status
1960 PRINT
1970 NEXT I
1980 PRINT "-------------------------------------------"
1990 PRINT STRING$(45,32)
2000 PRINT STRING$(45,32)
2010 PRINT STRING$(45,32)
2020 PRINT STRING$(45,32)
2030 GOSUB 6930
2040 IF SSW=1 THEN RETURN
2050 LOCATE 1,50 : PRINT "*******  Commands  **********"
2060 LOCATE 2,50 : PRINT "  0 = Set Course"
2070 LOCATE 3,50 : PRINT "  1 = Short Range Sensor Scan"
2080 LOCATE 4,50 : PRINT "  2 = Long Range Sensor Scan"
2090 LOCATE 5,50 : PRINT "  3 = Fire Phasers"
2100 LOCATE 6,50 : PRINT "  4 = fire Photon Torpedoes"
2110 LOCATE 7,50 : PRINT "  5 = Damage Control"
2120 LOCATE 8,50 : PRINT "***** Course Settings *******"
2130 LOCATE 9,50 : PRINT "               3"
2140 LOCATE 10,50: PRINT "           4   |   2"
2150 LOCATE 11,50: PRINT "             \ | /"
2160 LOCATE 12,50: PRINT "          5--- * ---1"
2170 LOCATE 13,50: PRINT "             / | \"
2180 LOCATE 14,50: PRINT "           6   |   8"
2190 LOCATE 15,50: PRINT "               7"
2200 IF SSW=1 THEN RETURN ELSE GOTO 2400
2210 PRINT "Stardate          ";T
2220 GOTO 1970
2230 PRINT "Condition         ";
2240 IF "RED"=C$ THEN COLOR 23,0
2250 PRINT " "+C$
2260 COLOR 7,0
2270 GOTO 1970
2280 PRINT "Quadrant          ";Q1;Q2
2290 GOTO 1970
2300 PRINT "Sector            ";S1;S2
2310 GOTO 1970
2320 PRINT "Energy            ";E
2330 GOTO 1970
2340 PRINT "Photon Torpedoes  ";P;STRING$(5,32)
2350 GOTO 1970
2360 PRINT "Klingons left     ";K9;STRING$(5,32)
2370 GOTO 1970
2380 PRINT STRING$(25,32)
2385 GOTO 1970
2390 SSW=1 : GOSUB 1340 : SSW=0
2400 LOCATE 15,1:PRINT "Command: ";
2410 INPUT A
2420 IF A+1 = 1 THEN GOTO 2570
2430 IF A+1 = 2 THEN GOTO 1340
2440 IF A+1 = 3 THEN GOTO 3490
2450 IF A+1 = 4 THEN GOTO 3830
2460 IF A+1 = 5 THEN GOTO 4160
2470 IF A+1 = 6 THEN GOTO 4760
2480 PRINT
2490 PRINT "    0 = Set Course"
2500 PRINT "    1 = Short Range Sensor Scan"
2510 PRINT "    2 = Long Range Sensor Scan"
2520 PRINT "    3 = Fire Phasers"
2530 PRINT "    4 = Fire Photon Torpedoes"
2540 PRINT "    5 = Damage Control Report"
2550 PRINT
2560 GOTO 2390
2570 REM ===============>>  Activate Warp Drive
2580 GOSUB 6930
2590 PRINT "Course ?  (1 - 8.9999): ";
2600 INPUT C1
2610 IF C1 = 0 THEN 2390
2620 IF C1 < 1 THEN 2590
2630 IF C1 => 9 THEN 2590
2640 PRINT "Warp Factor ?  (0-12): ";
2650 INPUT W1
2660 GOSUB 6820
2670 IF W1<0 THEN 2590
2680 IF W1>12 THEN 2590
2690 IF W1=<0.2 THEN 2730
2700 IF D(1)=>0 THEN 2730
2710 PRINT "Warp engines are damaged, maximum speed allowed is warp .2"
2720 GOTO 2590
2730 IF K3<=0 THEN 2760
2740 GOSUB 4950
2750 IF E<=0 THEN 5170
2760 FOR I = 1 TO 6
2770   D(I) = D(I)+1
2780   IF D(I)>0 THEN 2800
2790   GOTO 2810
2800   D(I)=0
2810 NEXT I
2820 IF RND>0.25 THEN 3050
2830 R1=INT(RND*6+1)
2840 IF RND>0.5 THEN 2920
2850 D(R1) = D(R1)-(RND*5+1)
2860 PRINT "*** SPACE STORM ***";
2870 S=(R1-1)*12+1
2880 PRINT D$((S+11)/12)" damaged ***"
2890 PRINT E$,"damaged ***"
2900 S=0
2910 GOTO 3050
2920 FOR I = R1 TO 6
2930    IF D(I) < 0 THEN 2990
2940 NEXT I
2950 FOR I = 1 TO R1-1
2960    IF D(I) < 0 THEN 2990
2970 NEXT I
2980 GOTO 3040
2990 R1 = I
3000 D(I) = D(I)+RND*5+1
3010 GOTO 3030
3020 D(I) = 0
3030 S = (R1-1)*12+1
3040 S = 0
3050 N = INT(W1*8)
3060 E = E-N-N+5
3070 T = T + 1
3080 Q(S1,S2) = 0
3090 X = S1
3100 Y = S2
3110 IF T > T0+T9 THEN 5140
3120 GOSUB 4730
3130 FOR I = 1 TO N
3140    S1 = S1 + X1
3150    S2 = S2 + X2
3160    IF S1 < 0.5 THEN 3320
3170    IF S2 < 0.5 THEN 3320
3180    IF S1 => 8.5 THEN 3320
3190    IF S2 => 8.5 THEN 3320
3200    S1 = INT(S1+0.5)
3210    S2 = INT(S2+0.5)
3220    IF Q(S1,S2) = 0 THEN 3270
3230    PRINT "ENTERPRISE blocked by object at sector",S1,"-",S2
3240    S1=S1-X1
3250    S2=S2-X2
3260    GOTO 3280
3270 NEXT I
3280 Q(S1,S2) = 1
3290 S1 = INT(S1+0.5)
3300 S2 = INT(S2+0.5)
3310 GOTO 1340
3320 Q1 = INT(Q1+W1*X1+(X-0.5)/8)
3330 IF Q1 > 8 THEN 3350
3340 GOTO 3360
3350 Q1 = 8
3360 IF Q1 < 1 THEN 3380
3370 GOTO 3390
3380 Q1 = 1
3390 Q2 = INT(Q2+W1*X2+(Y-0.5)/8)
3400 IF Q2 > 8 THEN 3420
3410 GOTO 3430
3420 Q2 = 8
3430 IF Q1 < 1 THEN 3450
3440 GOTO 3460
3450 Q2 = 1
3460 S1 = INT(RND*8+1)
3470 S2 = INT(RND*8+1)
3480 GOTO 980
3490 REM ======================>>  Long range sensor scan
3500 LOCATE 1,1
3510 IF D(3)=>0 THEN 3540
3520 PRINT "Long range sensors are inoperable"
3530 GOTO 2390
3540 PRINT "** Long Range Sensor Scan of 8 adjacent quadrants  "
3550 A$=CHR$(186)+STRING$(13,32)+CHR$(186)+STRING$(13,32)+CHR$(186)+STRING$(13,32)+CHR$(186)+STRING$(8,32)
3560 B$=CHR$(204)+STRING$(13,205)+CHR$(206)+STRING$(13,205)+CHR$(206)+STRING$(13,205)+CHR$(185)+STRING$(8,32)
3570 LOCATE 2,1:PRINT CHR$(201)+STRING$(13,205)+CHR$(203)+STRING$(13,205)+CHR$(203)+STRING$(13,205)+CHR$(187)
3580 LOCATE 3,1:PRINT A$:LOCATE 4,1 : PRINT A$ : LOCATE 5,1 : PRINT A$
3590 LOCATE 6,1:PRINT B$
3600 LOCATE 7,1:PRINT A$:LOCATE 8,1 : PRINT A$ : LOCATE 9,1 : PRINT A$
3610 LOCATE 10,1:PRINT B$
3620 LOCATE 11,1:PRINT A$:LOCATE 12,1:PRINT A$ : LOCATE 13,1: PRINT A$
3630 LOCATE 14,1:PRINT CHR$(200)+STRING$(13,205)+CHR$(202)+STRING$(13,205)+CHR$(202)+STRING$(13,205)+CHR$(188)
3640 KK=4
3650 FOR I = Q1-1 TO Q1 + 1
3660    N(1) = 0
3670    N(2) = N(1)
3680    N(3) = N(2)
3690    FOR J = Q2-1 TO Q2+1
3700       IF I<1 THEN 3750
3710       IF I > 8 THEN 3750
3720       IF J < 1 THEN 3750
3730       IF J > 8 THEN 3750
3740       N(J-Q2+2) = G(I,J)
3750    NEXT J
3760    LOCATE KK,8 : PRINT N(1)
3770    LOCATE KK,21 : PRINT N(2)
3780    LOCATE KK,33 : PRINT N(3)
3790    IF KK=8 THEN LOCATE 9,16:COLOR 0,7:PRINT " ENTERPRISE  ":COLOR 7,0
3800    KK=KK+4
3810 NEXT I
3820 GOTO 2400
3830 REM =============================>>  Phaser Control
3840 GOSUB 6930
3850 IF D(4) =>0 GOTO 3880
3860 PRINT "Phaser Control is disabled"
3870 GOTO 2390
3880 PRINT "Phasers locked on target.  Energy available = ";E
3890 PRINT "Number of units to fire";
3900 INPUT X
3910 IF X <= 0 THEN 2390
3920 IF E-X<0 THEN 3880
3930 E=E-X
3940 IF K3 = 0 THEN 4130
3950 GOSUB 6930
3960 FOR I = 1 TO 9
3970    IF K(I,3)<=0 THEN 4120
3980    H = X/FND(0)*(2+RND(0))
3990    K(I,3) = K(I,3)-H
4000    IF NOISE=0 THEN 4050
4010    FOR QQQ = 3000 TO 2500 STEP -10
4020      SOUND QQQ,0.5
4030    NEXT QQQ
4040    SOUND 75,5
4050    COLOR 0,7
4060    PRINT " Phaser hit Klingon at ";K(I,1);"-";K(I,2);
4070    PRINT "(";K(I,3);" left)"
4080    COLOR 7,0
4090    IF K(I,3) > 0 THEN 4120
4100    GOSUB 4890
4110    IF K9 <= 0 THEN 5270
4120 NEXT I
4130 GOSUB 4950
4140 IF E <= 0 THEN 5170
4150 GOTO 2390
4160 REM ===========================>>  Photon Torpedoes
4170 GOSUB 6930
4180 IF D(5) => 0 THEN 4210
4190 PRINT "Photon Tubes are NOT OPERATIONAL"
4200 GOTO 2390
4210 IF P > 0 THEN 4240
4220 PRINT "All Photon Torpedoes expended"
4230 GOTO 2390
4240 PRINT "Torpedo course (1-8.9999)";
4250 INPUT C1
4260 IF C1 = 0 THEN 2390
4270 IF C1 < 1 THEN 4240
4280 IF C1 => 9 THEN 4240
4290 GOSUB 4730
4300 X = S1
4310 Y = S2
4320 P = P-1
4330 PRINT "Torpedo Track:";
4340 X = X+X1
4350 Y = Y + X2
4360 IF X <0.5 THEN 4690
4370 IF Y < 0.5 THEN 4690
4380 IF X => 8.5 THEN 4690
4390 IF Y => 8.5 THEN 4690
4400 X = INT(X+0.5)
4410 IF NOISE=0 THEN 4430
4420 SOUND (X*Y*100),5
4430 Y = INT(Y+0.5)
4440 PRINT X;"-";Y;",";
4450 IF Q(X,Y)<>0 THEN 4470
4460 GOTO 4340
4470 IF Q(X,Y)<> 2 THEN 4590
4480 PRINT " *** Klingon destroyed ***"
4490 K3 = K3 - 1
4500 K9 = K9 - 1
4510 IF K9 <= 0 GOTO 5270
4520 FOR I = 1 TO 9
4530    IF INT(X+0.5) = K(I,1) THEN 4550
4540    GOTO 4560
4550    IF INT(Y+0.5)=K(I,2) THEN 4570
4560  NEXT I
4570 K(I,3) = 0
4580 GOTO 4660
4590 IF Q(X,Y)<>4 THEN 4630
4600 PRINT "Star destroyed"
4610 S3 = S3-1
4620 GOTO 4660
4630 PRINT
4640 PRINT "*** Star Base destroyed... Congratulations dingbat !!!"
4650 B3=B3-1
4660 Q(X,Y)=0
4670 G(Q1,Q2)=K3*100+B3*10+S3
4680 GOTO 4700
4690 PRINT "Torpedo missed"
4700 GOSUB 4950
4710 IF E<=0 THEN 5170
4720 GOTO 2390
4730 X2=COS((C1-1)*0.785398)
4740 X1=-SIN((C1-1)*0.785398)
4750 RETURN
4760 REM ==========================>>  Damage Control report
4770 GOSUB 6930
4780 IF D(6) => 0 THEN 4810
4790 PRINT "Damage report is not available"
4800 GOTO 2390
4810 PRINT
4820 PRINT "DEVICE            STATE OF REPAIR"
4830 FOR I = 1 TO 6
4840    PRINT D$(I),D(I)
4850 NEXT I
4860 PRINT
4870 GOTO 2390
4880 REM ===========================>>
4890 PRINT "Klingon at sector ";K(I,2);"-";K(I,2);" *** DESTROYED ***"
4900 K3=K3-1
4910 K9=K9-1
4920 Q(K(I,1),K(I,2))=0
4930 G(Q1,Q2)=K3*100+B3*10+S3
4940 RETURN
4950 REM ==========================>>  Klingon attack
4955 LOCATE 16,1
4960 IF C$<>"DOCKED" THEN 4990
4970 PRINT "Star Base shields protect the Enterprise"
4980 RETURN
4990 FOR I = 1 TO 9
5000    IF K(I,3)<=0 THEN 5110
5010    H = (K(I,3)/FND(0))*(2+RND(1))
5020    E=E-H
5030 IF NOISE=0 THEN 5080
5040    FOR QQQ = 300 TO 250 STEP -10
5050       SOUND QQQ,1:SOUND QQQ+5,1:SOUND QQQ-5,1
5060    NEXT QQQ
5070    SOUND 50,20
5080    PRINT H;" unit hit Enterprise ";
5090 REM PRINT K(I,1);"-";K(I,2);
5100    PRINT "(";E;" left)"
5110 NEXT I
5120 GOSUB 6720                      ' Sound effect
5130 RETURN
5140 REM ==========================>>  Lose game
5150 GOSUB 6680
5160 PRINT "It is Stardate ";T
5170 REM goto 4250
5180 REM gosub 5630
5190 PRINT "The ENTERPRISE has been destroyed"
5200 PRINT "The Federation will be conquered."
5210 PRINT "  There are still ";K9;" Klingon battle cruisers."
5220 PRINT "     Y O U    A R E    D E A D   !!!"
5230 PRINT
5240 PRINT " Hit return key to return to menu"
5250 GOSUB 6600
5260 RUN "menu"
5270 REM ==========================>>  Win game
5280 GOSUB 6680
5290 PRINT "It is Stardate ";T
5300 PRINT "  The last Klingon battle cruiser in the galaxy has been destroyed."
5310 PRINT "  The federation has been saved."
5320 PRINT " "
5330 PRINT "  You have been promoted to admiral."
5340 PRINT K0;" Klingons in ";T-T0;" years"
5350 PRINT " Your rating = ";INT(K0/(T-T0)*1000)
5360 PRINT
5370 PRINT "Hit return key to play again "
5380 REM pause
5390 GOTO 250
5400 REM =======================>> Random Number generator
5410 R1=INT(RND*8+1)
5420 R2=INT(RND*8+1)
5430 IF Q(R1,R2)<>0 THEN 5410
5440 RETURN
5450 REM =================>> Opening instructions
5460 CLS : LOCATE 5,1
5470 PRINT "Orders:                                  Stardate: ";T
5480 GOSUB 6720
5490 PRINT
5500 PRINT "As commander of the United States Spaceship ENTERPRISE,"
5510 PRINT "your mission is to rid the galaxy of the deadly Klingon menace"
5520 PRINT "To do this, you must destroy the Klingon invasion force of ";K9;
5530 PRINT " battle"
5540 PRINT "crusers.  You have ";T9;" solar years to complete your mission"
5550 PRINT "(i.e., until stardate ";T0+T9;")."
5560 GOSUB 6600
5570 REM =================>> Continuing instructions
5580 PRINT "   You have at least one (1) supporting STARBASE."
5590 PRINT "When the Enterprise docks at one (is positioned next to one) it"
5600 PRINT "is resupplied with energy and photon torpedoes."
5610 PRINT "The Enterprise is currently in quadrant ";Q1;"-";Q2
5620 PRINT "                               sector   ";S1;"-";S2
5630 PRINT " "
5640 PRINT "Do you need further instructions ?   [y or n]
5650 A$=INPUT$(1)
5660 IF (A$="n") OR (A$="N") THEN 980
5670 GOSUB 6670                  ' clear screen
5680 REM ----------->>>  Chain in the instructions
5690 CHAIN MERGE "startrk2",5700,ALL
5700 GOSUB 50000
5710 CHAIN MERGE "startrek.dum",5720,ALL,DELETE 50000-61600
5720 GOTO 980
6590 GOTO 980
6600 REM =================>> Subroutine to wait for player to hit any key
6610 LOCATE 1,15
6620 COLOR 0,7
6630 PRINT "        Hit any key to continue       "
6640 COLOR 7,0
6650 A$=INKEY$: IF A$="" THEN 6650
6660 X6 = INT(RND*100)+1
6670 REM =================>> Subroutine to clear screen
6680 CLS
6690 LOCATE 5,10
6700 GOSUB 6720
6710 RETURN
6720 REM =================>>  Routine to simulate sound of t.v. computer
6730 IF NOISE=0 THEN 6800
6740 FOR I = 1 TO 50
6750    J=RND(I)*10000
6760    IF J<37 THEN 6790
6770    PLAY "MB"
6780    SOUND J,0.5
6790 NEXT I
6800 RETURN
6810 END
6820 REM =================>>  Sound of warp drive engaging
6830 IF NOISE=0 THEN 6920
6840 PLAY "mb"
6850 FOR I = 37 TO 100
6860      SOUND I,1
6870 NEXT I
6880 PLAY "mb"
6890 FOR I = 5000 TO 4000 STEP -20
6900      SOUND I,0.2
6910 NEXT I
6920 RETURN
6930 REM ---------->>>  Subroutine to clear the message area
6940 FOR I=16 TO 23
6950  LOCATE I,1 : PRINT STRING$(79,32)
6960 NEXT I
6970 LOCATE 16,1
6980 RETURN
50000 RETURN
```

## STARTRK2.BAS

```bas
50000 REM ===============================================================
50100 REM =========   Instructions on how to play startrek  =============
50200 REM ===============================================================
50300 GOTO 51300
50400 REM ---------------->>> Simulate sound of t.v. computer
50500 IF NOISE=0 THEN 51200
50600 FOR I = 1 TO 50
50700    J=RND(I)*10000
50800    IF J<37 THEN 51100
50900    PLAY "mb"
51000    SOUND J,.5
51100 NEXT I
51200 RETURN
51300 PRINT "  The galaxy is divided into 64 quadrants with"
51400 PRINT "  the following coordinates:"
51500 PRINT "  #   1    2    3    4    5    6    7    8    #"
51600 FOR I = 1 TO 8
51700 PRINT "  # |    |    |    |    |    |    |    |    | #";I
51800 NEXT I
51900 PRINT : PRINT " Each quadrant is similarly divided into 64 sectors"
52000 GOSUB 60500
52100 PRINT "==================>>  DEVICES  <<====================="
52200 PRINT : PRINT "Warp Engines"
52300 PRINT "  Course = a real number from 1 to 8.99999.  The course number"
52400 PRINT "           indicates direction, starting at the right and going"
52500 PRINT "           counter-clockwise, as depicted below:"
52600 PRINT
52700 PRINT "                              3"
52800 PRINT "                           4  |  2"
52900 PRINT "                            \ | /"
53000 PRINT "                         5--- * ---1"
53100 PRINT "                            / | \"
53200 PRINT "                          6   |   8"
53300 PRINT "                              7"
53400 GOSUB 60500
53500 PRINT " Warp Factor " : PRINT
53600 PRINT " Warp Factor = a real number from 0 to 8.  The distance"
53700 PRINT "               traveled is equal to integer(warp factor)"
53800 PRINT "               quadrants:"
53900 PRINT "                 Warp  .2 =  travel 1 sector"
54000 PRINT "                 Warp  .5 =  travel 4 sectors"
54100 PRINT "                 Warp  1  =  travel 1 quadrant"
54200 PRINT "                 Warp  2  =  travel 2 quadrants"
54300 PRINT "               For example, if you travel from quadrant 1-1"
54400 PRINT "               sector 1-1, in direction 1 at Warp 2, you would"
54500 PRINT "               stop at quadrant 1-3,sector 1-1 in the next"
54600 PRINT "               stardate.
54700 PRINT "  REMEMBER:    Every use of the warp takes one stardate."
54800 PRINT "               If the Enterprise is blocked by something during"
54900 PRINT "               intra-quadrant travel, it will stop in front of "
55000 PRINT "               blocking object (and waste a stardate) ***"
55100 PRINT
55200 GOSUB 60500
55300 PRINT "===============>>  Short Range Sensors  <<======================"
55400 PRINT
55500 PRINT "  The Short Range Sensors of the Enterprise display a detailed "
55600 PRINT "  view of the quadrant it is currently in.  The Enterprise will "
55700 PRINT "  be depicted by an -E- at its sector location within the quadrant"
55800 PRINT "  Klingon battle cruisers are depicted by a -K-"
55900 PRINT "  Starbases are depicted by a -B-"
56000 PRINT "  Stars are depicted by a -*-"
56100 GOSUB 60500
56200 PRINT "================>>  Long Range Sensors   <<======================"
56300 PRINT " "
56400 PRINT "  The Long Range Sensors of the Enterprise are used to display the"
56500 PRINT "  maps of objects in the nine (9) closest quadrants.  This allows"
56600 PRINT "  you to see potential Klingon fighter groups and to locate your"
56700 PRINT "  starbases.   The numbers shown for each quadrant in the long"
56800 PRINT "  range scan have the following meaning:"
56900 PRINT " "
57000 PRINT "     The ones digit indicates the number of stars"
57100 PRINT "     The tens digit indicates the number of starbases"
57200 PRINT "     the hundreds digit indicates the number of klingons"
57300 PRINT
57400 PRINT "     For example:"
57500 PRINT
57600 PRINT "         319 means 3 Klingons, 1 Starbase, and 9 stars"
57700 PRINT "         206 means 2 Klingons, 0 Starbases, and 6 stars"
57800 PRINT "           7 means 0 Klingons, 0 Starbases, and 7 stars"
57900 GOSUB 60500
58000 PRINT "=====================>>   Phasers   <<==========================="
58100 PRINT
58200 PRINT "  Any portion of your available energy can be fired through the "
58300 PRINT "  phasers.  The battle computer divides the amount of energy you "
58400 PRINT "  specify amoung the Klingon cruisers in the quadrant and determines"
58500 PRINT "  the various directions of fire.  The effectiveness of a hit"
58600 PRINT "  depends mostly on the distance to the target.  A Klingon battle"
58700 PRINT "  cruiser starts with ";S9;" units of energy.  It can fire an "
58800 PRINT "  amount equal to whatever energy it has left"
58900 PRINT
59000 PRINT "===================>>   Photon  Torpedoes   <<===================="
59100 PRINT
59200 PRINT "  Initially the Enterprise has ";P0;" Photon Torpedoes.   One"
59300 PRINT "  torpedo destroys whatever it hits.  The range of photon torpedoes"
59400 PRINT "  (like phasers) is limited to the current quadrant.  The course"
59500 PRINT "  of a photon torpedo is set the same way as that of the Enterprise"
59600 GOSUB 60500
59700 PRINT "==================>>  Damage Control Report  <<===================="
59800 PRINT "  The Damage Control report lists the main devices of the Enterprise"
59900 PRINT "and their current state of repair.  A negative state of repair"
60000 PRINT "indicates a disabled device.  Devices can be damaged or repaired"
60100 PRINT "by a space storm or landing at a starbase.  Also damaged devices"
60200 PRINT "are repaired 1 unit every stardate."
60300 GOSUB 60500
60400 RETURN
60500 REM =================>> Subroutine to wait for player to hit any key
60600 LOCATE 1,15
60700 COLOR 0,7
60800 PRINT "        Hit any key to continue       "
60900 COLOR 7,0
61000 A$=INKEY$: IF A$="" THEN 61000
61100 X6 = INT(RND*100)+1
61200 REM =================>> Subroutine to clear screen
61300 CLS
61400 LOCATE 5,10
61500 GOSUB 50400
61600 RETURN
```

## SURVIVAL.BAS

```bas
10 '---------------------------------------------------------------
12 '
14 ' Survival: by Stewart F. Rush (Enhancements by G. M. Bright)
16 '
18 ' variable definitions: P  = current position
20 '                       T1 = current elapsed time
22 '                       T2 = oxygen remaining
24 '                       C  = no. of items carried
28 '                       F1 = flag: shed open
30 '                       F2 = flag: meteor shower occurred
32 '                       F3 = flag: laser beam deflected
34 '                       F4 = flag: ventillator shaft illuminated
36 '                       F5 = flag: deactivator exposed
38 '                       F7 = flag: spacecraft repair status
40 '                       F9 = flag: power in use
42 '                       P1 = power unit power remaining
44 '                       P2 = power pack power remaining
45 '                       V  = number of reads of computer message
46 '
60 '---------------------------------------------------------------
100 SCREEN 0: WIDTH 80
170 CLEAR: DIM T$(64): DIM M(43,8): DIM O(15)
176 '***************************************
178 '** initialize text and move matrices **
180 '***************************************
182 CLS: COLOR 16,7: PRINT "SURVIVAL";: COLOR 7,0
186 PRINT ": Would you like instructions (y/n)?"
220 D$=INKEY$:IF D$="" THEN 220 ELSE IF D$="y" THEN GOSUB 5040
221 PRINT: PRINT "initialization in process - please wait"
222 FOR I=1 TO 15
224   READ O(I)
226 NEXT I
230 FOR I= 1 TO 64
240   READ T$(I)
250 NEXT I
260 FOR I= 1 TO 43
270   FOR J = 1 TO 8
280     READ M(I,J)
290   NEXT J
300 NEXT I
305 RESTORE
320 P=1: C=2: T1=0: T2=185: P1=230: P2=50: V=0
390 F1=0: F2=0: F3=0: F4=0: F5=0: F7=0: F9=0
400 M(2,8)=6
410 M(14,8)=30
620 REM *****************************************************
630 REM ** display current status and location information **
640 REM *****************************************************
650 CLS
653 COLOR 0,7:PRINT "*****************************************":COLOR 7,0
654 COLOR 0,7:PRINT "* CURRENT STATUS & LOCATION INFORMATION *":COLOR 7,0
655 COLOR 0,7:PRINT "*****************************************":COLOR 7,0
690 IF O(11)=99 AND P1>0 THEN P1=P1-5
700 IF O(14)=99 AND P2>0 THEN P2=P2-5
710 IF O(3)=99 AND T2>0 THEN T2=T2-5
720 IF (P>21) AND (F9=0) THEN 760
730 IF (O(11)<>99) AND (O(14)<>99) THEN 2870
740 IF (O(11)=99) AND (P1=0) THEN 2870
750 IF (O(14)=99) AND (P2=0) THEN 2870
760 IF (P>17) AND (P<22) THEN 790
770 IF (P>21) AND (P<>38) AND (F9=0) THEN 790
780 IF (O(3)<>99) OR (T2=0) THEN 2900
790 PRINT: PRINT "ELAPSED TIME: ";T1;" MINUTES"
800 IF O(11)=99 THEN PRINT "POWER UNIT: ";P1;" UNITS"
810 IF O(14)=99 THEN PRINT "POWER PACK: ";P2;" UNITS"
820 IF O(3)=99 THEN PRINT "OXYGEN REMAINING: ";T2;" MINUTES"
830 IF T1>400 THEN 2960
840 IF T1>350 THEN 3840
850 IF T1>200 THEN 3740
855 T1=T1+5
860 PRINT: PRINT "LOCATION: You are ";
870 FOR I=M(P,7) TO M(P,8)
880 PRINT T$(I)
890 NEXT I
900 PRINT "##"
910 REM *********************************
920 REM ** display any objects present **
930 REM *********************************
940 IF P=14 THEN 1920
950 FOR I = 1 TO 15
960 IF O(I)<>P THEN 990
970 GOSUB 4410
980 PRINT "There is ";B$;" here."
990 NEXT I
1000 GOTO 2000
1010 REM ****************************************
1020 REM ** read and process keyboard response **
1030 REM ****************************************
1040 INPUT B$: IF LEN(B$)<>1 GOTO 1320
1050 I=INSTR(1,"nsewudq",B$)
1060 IF I=0 GOTO 1570 ELSE IF I=7 GOTO 9999
1150 IF M(P,I)=0 THEN PRINT "You cannot go in that direction!": GOTO 1040
1160 IF M(P,I)=99 THEN 2940
1170 Q=M(P,I)
1180 IF P=12 THEN 3060
1190 IF P=13 THEN 3180
1200 IF P=22 THEN 3310
1210 IF P=23 THEN 3420
1220 IF P=29 THEN 3470
1230 R=P
1240 P=Q
1260 GOTO 650
1290 REM ********************************************
1300 REM ** process two or more character commands **
1310 REM ********************************************
1320 C$=LEFT$(B$,3)
1330 IF C$="loo" THEN 650
1340 IF C$="des" THEN 650
1345 IF C$="sta" THEN 650
1350 IF C$="get" THEN 2190
1360 IF C$="tak" THEN 2190
1370 IF C$="kee" THEN 2190
1380 IF C$="dro" THEN 2580
1390 IF C$="lea" THEN 2580
1400 IF C$="put" THEN 2580
1410 IF C$="inv" THEN 2780
1420 IF C$="qui" THEN 9999
1430 IF C$="end" THEN 9999
1440 IF C$="tra" THEN 1750
1450 IF C$="dig" THEN 1860
1470 IF C$="fue" THEN 4030
1480 IF C$="rea" THEN 4250
1490 IF C$="dea" THEN 3890
1500 IF C$="bla" THEN 4110
1505 IF C$="fir" THEN 4110
1510 IF C$="up" THEN 1640
1520 IF C$="dow" THEN 1640
1530 IF C$="nor" THEN 1640
1540 IF C$="sou" THEN 1640
1550 IF C$="eas" THEN 1640
1560 IF C$="wes" THEN 1640
1562 IF C$="hel" THEN 1581
1564 IF C$="wha" THEN 1581
1566 IF C$="deb" THEN 1610
1567 IF C$="ent" THEN 1670
1570 PRINT "Invalid Command"
1575 IF IC<5 THEN PRINT "You may enter `help' for some suggestions."
1580 GOTO 1040
1581 PRINT "Valid direction commands are: north, south, east, west, up & down."
1582 PRINT "You can also just enter the first letter, i.e. n,s,w,e,u,d."
1583 PRINT "Other commands include: inventory, fuel, dig, transport, etc."
1584 PRINT "The latter can be abbreviated by using only 3 letters. The"
1585 PRINT "commands try or use are useful only when you confront a situation."
1586 PRINT "Commands other than directives may require an object. Good luck!"
1587 GOTO 1040
1590 PRINT "I cannot process your request!"
1600 GOTO 1040
1610 PRINT "enter location"
1620 INPUT P
1630 GOTO 650
1640 D$=LEFT$(B$,1)
1650 B$=D$
1660 GOTO 1070
1670 '
1672 ' PROCESS SHED AND SPACE CRAFT ENTRY
1674 '
1680 IF P<>13 AND P<>15 THEN 1590
1690 IF P=13 THEN I=4: GOTO 3180
1700 I=2: GOTO 1170
1720 REM *******************************
1730 REM ** process transport command **
1740 REM *******************************
1750 IF P<>36 THEN 1800
1760 IF O(8)=99 THEN 1590
1770 P=O(8)
1780 PRINT "Beaming in process "
1782 FOR I = 1 TO 60: PRINT "~";: SOUND 300,1: NEXT
1790 GOTO 650
1800 IF P<>O(8) THEN 1590 ELSE P=36: GOTO 1780
1830 REM *************************
1840 REM ** process dig command **
1850 REM *************************
1860 IF O(15)<>99 THEN GOTO 3940
1865 IF P<>10 THEN PRINT "The ground is too hard here.": GOTO 1040
1870 O(9)=10
1880 GOTO 940
1890 REM *************************************
1900 REM ** drop illuminator if at overlook **
1910 REM *************************************
1920 IF O(4)<>99 THEN 950
1930 O(4)=100
1940 PRINT "You dropped your illuminator!!!  You cannot retrieve it."
1950 GOTO 950
1970 REM *******************
1980 REM ** process robot **
1990 REM *******************
2000 IF O(5)=28 THEN O(5)=35
2010 IF O(5)=42 THEN O(5)=28
2020 IF O(5)=41 THEN O(5)=42
2030 IF O(5)=27 THEN O(5)=41
2040 IF O(5)=25 THEN O(5)=27
2050 IF O(5)<>35 THEN 2090
2060 IF P<>28 THEN 1010
2070 M(28,1)=35
2080 GOTO 1010
2090 IF O(5)<>32 THEN 1010
2100 IF P<>32 THEN 1010
2110 O(5)=25
2120 IF O(13)=99 THEN 1010
2130 PRINT "Robot fails to recognize you.  It fires a phasor weapon at you!!!"
2135 FOR I=1 TO 1800:  NEXT
2140 FOR I=1 TO 3: FOR IS=1 TO 12: IT=(25*IS): SOUND 2600-IT,1: NEXT: NEXT
2145 FOR I=1 TO 1800:  NEXT
2150 GOTO 2980
2160 REM *********************************
2170 REM ** process get or take command **
2180 REM *********************************
2190 GOSUB 4590
2200 IF I>0 THEN 2260
2210 IF I<0 THEN 2240
2220 PRINT "I don't recognize ";RIGHT$(B$,LEN(B$)-J);"."
2230 GOTO 1040
2240 PRINT "What item?"
2250 GOTO 1040
2260 IF O(I)<>P THEN 2370
2270 IF C>3 THEN PRINT "You can't carry anymore!": GOTO 1040
2280 IF I=5 THEN PRINT "You can't carry a Robot!": GOTO 1040
2285 IF I=7 THEN PRINT "The bomb is way too heavy!": GOTO 1040
2290 IF I=10 THEN 2430
2300 IF I=11 THEN 2460
2310 IF I=14 THEN 2490
2320 C=C+1
2330 O(I)=99
2340 IF I=3 THEN F0=1
2350 PRINT "Okay"
2360 GOTO 1040
2370 IF O(I)=99 THEN 2542
2375 PRINT "There is no ";RIGHT$(B$,LEN(B$)-J);" here!!!"
2380 GOTO 1040
2430 PRINT "You can't get the message.  It's on the terminal screen."
2450 GOTO 1040
2460 IF O(14)=99 THEN 2520
2470 O(11)=99
2480 GOTO 2320
2490 IF O(11)=99 THEN 2520
2500 O(14)=99
2510 GOTO 2320
2520 PRINT "You can't have more than one power device at a time!"
2540 GOTO 1040
2542 PRINT "You already have ";RIGHT$(B$,LEN(B$)-J);"!"
2544 GOTO 1040
2550 REM ***********************************
2560 REM ** process drop or leave command **
2570 REM ***********************************
2580 GOSUB 4590
2590 IF I>0 THEN 2620
2600 IF I<0 THEN 2240
2610 GOTO 2220
2620 IF O(I)<>99 THEN 2690
2630 C=C-1
2640 O(I)=P
2680 GOTO 2350
2690 PRINT "You don't have "RIGHT$(B$,LEN(B$)-J);"!"
2700 GOTO 1040
2750 REM *******************************
2760 REM ** process inventory command **
2770 REM *******************************
2780 FOR I=1 TO 15
2790 IF O(I)<>99 THEN 2820
2800 GOSUB 4410
2810 PRINT "You have ";B$;"."
2820 NEXT I
2830 GOTO 1040
2840 REM ************************************
2850 REM ** program termination processing **
2860 REM ************************************
2870 PRINT "You have no power left, or you have no power source."
2880 PRINT "You have frozen to death."
2890 GOTO 2980
2900 PRINT "Oxygen required here, none available."
2910 GOTO 2980
2920 PRINT "A nuclear detonation has just occurred."
2930 GOTO 2980
2940 PRINT "You have fallen to your death."
2950 GOTO 2980
2952 PRINT "You have been zapped by the laser."
2954 GOTO 2980
2960 PRINT "The moon base has just been destroyed by a large asteroid."
2980 PRINT "You have failed to survive."
2990 INPUT "Do you wish to try again";D$
3010 IF LEFT$(D$,1)="y" THEN 221
3020 GOTO 9999
3030 REM ***************************
3040 REM ** process meteor shower **
3050 REM ***************************
3060 IF M(P,I)<>13 THEN 1230
3070 IF F2=1 THEN 1230
3080 PRINT "There is a meteor shower.  Your space suit has developed a leak!!"
3100 GOSUB 4890
3110 IF I<>2 THEN 2980
3120 PRINT "Proceeding to seal suit.......":FOR CX=1 TO 1500: NEXT CX
3130 F2=1
3140 GOTO 1230
3150 REM *************************
3160 REM ** process locked shed **
3170 REM *************************
3180 IF M(P,I)<>22 THEN 1230
3190 IF F1=1 THEN 1230
3200 PRINT "The shed is locked"
3210 GOSUB 4890
3220 IF I<>1 THEN 3260
3230 PRINT "Proceeding to try key.......":FOR CX=1 TO 1500: NEXT CX
3240 F1=1
3250 GOTO 1230
3260 PRINT "Your attempt fails."
3270 GOTO 1040
3280 REM ***********************************
3290 REM ** process dark ventilator shaft **
3300 REM ***********************************
3310 IF M(P,I)<>23 THEN 1230
3320 IF F4=1 THEN 1230
3330 PRINT "It is dangerous to proceed in the dark!"
3340 GOSUB 4890
3350 IF I<>4 THEN 2940
3360 PRINT "The shaft is now illuminated.  You may proceed.......":FOR CX=1 TO 2500: NEXT CX
3370 F4=1
3380 GOTO 1230
3390 REM ************************************
3400 REM ** process shaft with no illuminator
3410 REM ***************************************
3420 IF O(4)<>99 THEN IF O(4)<>23 THEN 2940
3430 GOTO 1230
3440 REM ************************
3450 REM ** process laser beam **
3460 REM ************************
3470 IF M(P,I)<>37 THEN 1230
3480 IF F3=1 THEN 1230
3490 PRINT "There is a laser beam here. Passage not possible with beam present."
3510 GOSUB 4890
3520 IF I<>12 THEN 2952
3530 PRINT "Proceeding to deflect beam.......":FOR CX=1 TO 2500: NEXT CX
3540 F3=1
3550 GOTO 1230
3560 REM *****************************************
3570 REM ** process blown seal in space station **
3580 REM *****************************************
3590 IF R<>29 THEN 850
3600 IF F9=1 THEN 850
3610 F9=1
3620 PRINT "You have just blown the air seal in space station."
3640 GOTO 850
3710 REM ************************
3720 REM ** expose deactivator **
3730 REM ************************
3740 IF F5=1 THEN 855
3750 O(6)=14
3760 M(2,8)=5
3770 M(14,8)=29
3780 M(14,4)=2
3790 F5=1
3800 GOTO 855
3810 REM *******************
3820 REM ** detonate bomb **
3830 REM *******************
3840 IF F7=0 THEN 2920
3850 GOTO 850
3860 REM *********************
3870 REM ** deactivate bomb **
3880 REM *********************
3890 IF O(6)<>99 THEN 3940
3900 IF P<>38 THEN 3980
3910 F7=1
3915 T$(31)="at crash site of a space craft.  Repairs are now complete."
3920 PRINT "Bomb is now deactivated."
3930 GOTO 1040
3940 PRINT "You have nothing to do it with!"
3950 GOTO 1040
3960 PRINT "There is nothing to do it to!"
3970 GOTO 1040
3980 PRINT "You can't do it from here!"
3990 GOTO 1040
4000 REM *****************
4010 REM ** fuel rocket **
4020 REM *****************
4030 IF P<>19 THEN 3980
4040 IF O(9)<>99 THEN 3940
4050 O(9)=98
4060 PRINT "Fuel is now loaded."
4070 GOTO 1040
4080 REM *************************
4090 REM ** blastoff processing **
4100 REM *************************
4110 IF P<>21 THEN 3980
4120 IF O(9)<>98 THEN 4200
4130 IF F7=1 THEN 4160
4140 PRINT "Repairs not yet complete."
4150 GOTO 1040
4160 FOR IS=1 TO 150: IJ=IS*10: SOUND IJ+1000,1: NEXT IS
4165 PRINT "Congratulations, you have just blasted off and are on your way to               earth.  Your escape time was ";T1;" minutes."
4190 GOTO 2990
4200 PRINT "Your space craft has no fuel!!"
4210 GOTO 1040
4220 REM *********************************
4230 REM ** computer readout processing **
4240 REM *********************************
4250 IF P<>35 THEN 3980
4260 GOSUB 4590
4270 IF I<>10 THEN 3960
4280 IF V<>0 THEN 4320
4290 PRINT "Bomb de-activator located somewhere east of Mare Serenitatis on moon's surface."
4310 GOTO 4360
4320 IF V<>1 THEN 4350
4330 PRINT "Local fuel source: Dilithium Crystal."
4340 GOTO 4360
4350 PRINT "Dilithium found in soft surfaces."
4360 IF F7=1 THEN PRINT "Spacecraft repairs complete."
4365 V=V+1
4370 GOTO 1040
4380 REM **********************************************
4390 REM ** subroutine to describe items at location **
4400 REM **********************************************
4410 IF I=1 THEN B$="an ELECTRONIC KEY"
4420 IF I=2 THEN B$="SEALANT"
4430 IF I=3 THEN B$="an OXYGEN MODULE"
4440 IF I=4 THEN B$="an ILLUMINATOR"
4450 IF I=5 THEN B$="a ROBOT"
4460 IF I=6 THEN B$="a DEACTIVATOR"
4470 IF I=7 THEN B$="a NUCLEAR BOMB"
4480 IF I=8 THEN B$="a TRANSPORTER UNIT"
4490 IF I=9 THEN B$="DILITHIUM CRYSTALS"
4500 IF I=10 THEN B$="a COMPUTER MESSAGE"
4510 IF I=11 THEN B$="a POWER UNIT"
4520 IF I=12 THEN B$="a MIRROR"
4530 IF I=13 THEN B$="a CODED BADGE"
4540 IF I=14 THEN B$="a POWER PACK"
4545 IF I=15 THEN B$="a SHOVEL"
4550 RETURN
4560 REM ***********************************************
4570 REM ** subroutine to convert an item to a number **
4580 REM ***********************************************
4590 FOR J=1 TO LEN(B$)
4600 IF MID$(B$,J,1)=" " THEN 4640
4610 NEXT J
4620 I=-1
4630 RETURN
4640 C$=MID$(B$,J+1,3)
4650 I=0
4660 IF C$="ele" THEN I=1
4670 IF C$="key" THEN I=1
4680 IF C$="sea" THEN I=2
4690 IF C$="oxy" THEN I=3
4700 IF C$="mod" THEN I=3
4710 IF C$="ill" THEN I=4
4720 IF C$="rob" THEN I=5
4730 IF C$="dea" THEN I=6
4740 IF C$="nuc" THEN I=7
4750 IF C$="bom" THEN I=7
4760 IF C$="tra" THEN I=8
4770 IF C$="dil" THEN I=9
4780 IF C$="cry" THEN I=9
4790 IF C$="com" THEN I=10
4800 IF C$="mes" THEN I=10
4810 IF C$="uni" THEN I=11
4820 IF C$="mir" THEN I=12
4830 IF C$="bad" THEN I=13
4840 IF C$="pac" THEN I=14
4845 IF C$="sho" THEN I=15
4850 RETURN
4860 REM ***************************************
4870 REM ** subroutine to process try command **
4880 REM ***************************************
4890 INPUT B$
4900 C$=LEFT$(B$,3)
4910 IF C$="try" THEN 4950
4920 IF C$="use" THEN 4950
4930 I=-1
4940 RETURN
4950 GOSUB 4590
4960 IF I<1 THEN 5012
4970 IF O(I)=99 THEN RETURN
4980 PRINT"You don't have ";STR$(B$,J+1);"!"
4990 GOTO 4930
5000 PRINT "Your attempt fails!"
5010 GOTO 4930
5012 PRINT "With what?": GOTO 4930
5020 REM ************************
5030 REM ** print instructions **
5040 REM ************************
5045 CLS
5050 PRINT "You have crash landed on the earth's moon.  You have limited supplies and time  in which to survive.  You will encounter various items and situations during    your travels."
5055 PRINT
5060 PRINT "To travel, you may enter directions such as north or n, as well as s, e, w, and u or d (up or down)."
5065 PRINT
5090 PRINT "To communicate, enter commands (verbs), followed by object names, if applicable.For example: get xxx, leave xxx, use xxx, etc."
5110 PRINT "Unless instructed otherwise, be sure to press the ENTER key after each input.   The enter key is on the right of the keyboard and has this symbol on it: "+CHR$( 17)+CHR$(196)+CHR$(217)
5115 PRINT
5120 PRINT "Once you have survived, the object then is to achieve the optimum survival time.May the force be with you!!!"
5122 PRINT
5124 COLOR 16,7:PRINT"Press any key to continue":COLOR 7,0
5126 A$=INKEY$: IF A$="" THEN 5126
5130 RETURN
6000 '****************************************
6001 '** object locations                   **
6002 '****************************************
6010 DATA 21,19,99,06,32,00,38
6020 DATA 35,00,35,99,33,34,37,43
7500 '********************************
7501 '** text location descriptions **
7502 '********************************
8001 DATA "at Mare Serenitatis. Long eerie"
8002 DATA "shadows from distant mountains and craters cast"
8003 DATA "themselves across the barren landscape."
8004 DATA "on a promontary point on the rim of the"
8005 DATA "crater Posidonius, only half visible when seen from below."
8006 DATA "There is total darkness to the East."
8007 DATA "between the craters of Dawes and Plinius."
8008 DATA "at a narrow pass in the mountains of Haemus."
8009 DATA "at a steep base of the crater of Manilus."
8010 DATA "at Mare Vaporum. The Apennines Mountains"
8011 DATA "rise ominously to the North and West."
8012 DATA "at the base of the awesome Mt. Eudoxus."
8013 DATA "inside the crater of Aristoteles. The"
8014 DATA "crater floor is littered with rocks."
8015 DATA "in Lacus Somnorium, North of Posidonius"
8016 DATA "and North East of Mare Serenitatus."
8017 DATA "at the base of the Burg crater in Lacus"
8018 DATA "Mortis. The surface is very soft here."
8019 DATA "at the East side of the vast Mare of"
8020 DATA "Imbrium. To the North the low angle of"
8021 DATA "the sun casts eerie shadows on the soft lunar surface"
8022 DATA "and the distant mountains to the East. To the West, the"
8023 DATA "Mare stretches out of sight to the horizon. To the South"
8024 DATA "the Apennine Mountains seem to rise out of nowhere."
8025 DATA "at the base of the crater of Plato. A"
8026 DATA "shiney object is seen to the West."
8027 DATA "standing before a small metal shed. A"
8028 DATA "sign reads ventillator shaft number 2."
8029 DATA "somewhere East of Mare Serenitatus."
8030 DATA "There is total darkness."
8031 DATA "at the crash site of a space craft."
8032 DATA "The entrance to the space craft is before you."
8033 DATA "at the center of vast Mare of Imbrium."
8034 DATA "in the air lock chamber of the space craft."
8035 DATA "in the aft cargo and fuel storage compartment."
8036 DATA "in the engine room of the space craft."
8037 DATA "in the control room, the ships console"
8038 DATA "is before you."
8039 DATA "inside a dark shed. A ladder leads down"
8040 DATA "into a large metal shaft below."
8041 DATA "in a ventillator passage."
8042 DATA "at a ventillator opening. Through the"
8043 DATA "opening a lit passageway can be seen."
8044 DATA "in a lighted space station corridor."
8045 DATA "in the space station infirmary."
8046 DATA "in the recreation room and library."
8047 DATA "in the mess hall. Abandoned food trays"
8048 DATA "are still on the tables."
8049 DATA "in the storage room and supply area."
8050 DATA "in the sleeping quarters of the space station."
8051 DATA "in an elevator at the subsurface level."
8052 DATA "in an elevator at the surface level."
8053 DATA "in the space station's control center."
8054 DATA "in the transporter room."
8055 DATA "in the space station research laboratory."
8056 DATA "in the hangar area. The launch area"
8057 DATA "is located to the South of here."
8058 DATA "in an air lock chamber between the space suit"
8059 DATA "changing area and the hangar."
8060 DATA "in a space suit changing area."
8061 DATA "at the top of a rocky arete on Burg crater. To"
8062 DATA "the North the center of the crater is thousands of feet below you."
8063 DATA "To the West, the huge crater of Eudoxus can be seen between crags"
8064 DATA "on a ridge bordering Lacus Mortis."
8500 REM **************************************
8501 REM ** movement and text pointer matrix **
8502 REM **************************************
9001 DATA 07,04,02,15,00,00,01,03
9002 DATA 09,03,14,01,00,00,04,06
9003 DATA 02,05,14,04,00,00,07,07
9004 DATA 01,05,03,00,00,00,08,08
9005 DATA 04,00,03,06,00,00,09,09
9006 DATA 00,00,05,00,00,00,10,11
9007 DATA 08,01,09,11,00,00,12,12
9008 DATA 00,07,10,00,00,00,13,14
9009 DATA 10,02,14,07,00,00,15,16
9010 DATA 00,09,14,08,43,00,17,18
9011 DATA 12,15,07,16,00,00,19,24
9012 DATA 00,11,00,13,00,00,25,26
9013 DATA 00,16,12,22,00,00,27,28
9014 DATA 99,99,99,99,00,00,29,30
9015 DATA 11,18,01,00,00,00,31,32
9016 DATA 17,16,17,16,00,00,33,33
9017 DATA 16,17,11,17,00,00,33,33
9018 DATA 15,19,00,00,00,00,34,34
9019 DATA 18,00,20,00,00,00,35,35
9020 DATA 00,00,00,19,21,00,36,36
9021 DATA 00,00,00,00,00,20,37,38
9022 DATA 00,00,13,00,00,23,39,40
9023 DATA 24,00,00,00,22,00,41,41
9024 DATA 25,23,00,00,00,00,42,43
9025 DATA 27,26,33,32,24,00,44,44
9026 DATA 25,00,30,31,00,00,44,44
9027 DATA 34,25,41,00,00,00,44,44
9028 DATA 00,29,42,36,00,00,44,44
9029 DATA 28,38,40,37,00,00,44,44
9030 DATA 00,00,00,26,00,00,45,45
9031 DATA 00,00,26,00,00,00,46,46
9032 DATA 00,00,25,00,00,00,47,48
9033 DATA 00,00,00,25,00,00,50,50
9034 DATA 00,27,00,00,00,00,49,49
9035 DATA 00,28,00,00,24,00,53,53
9036 DATA 00,00,28,00,00,00,54,54
9037 DATA 00,00,29,00,00,00,55,55
9038 DATA 29,00,39,00,00,00,56,57
9039 DATA 40,00,00,38,00,00,58,58
9040 DATA 00,39,00,29,00,00,60,60
9041 DATA 00,00,00,27,42,00,51,51
9042 DATA 00,00,00,28,00,41,52,52
9043 DATA 00,00,00,00,00,10,61,64
9999 END
```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0017

     Volume in drive A has no label
     Directory of A:\

    BREAKOUT BAS      2176  11-02-82   4:33p
    FENCE    BAS      4352  11-04-82   4:27p
    FILES017 TXT      1075   5-29-87  10:31a
    HISCORE  PC        384  11-04-82   5:04p
    JBREAK   BAS      2176  11-02-82   4:37p
    MENU     BAS      4352  11-04-82   4:59p
    METEOR   BAS      3584  11-02-82   4:37p
    MOON     BAS     18816  11-02-82   5:15p
    PCINIT   BAS       512  11-04-82   4:40p
    PCMAN    BAS     10112  11-02-82   5:16p
    STARTREK BAS     14208  11-02-82   5:07p
    STARTREK DUM      6144   3-22-82
    STARTRK2 BAS      6144   7-22-82
    SURVIVAL BAS     19200   4-14-82
           14 file(s)      93235 bytes
                           64512 bytes free
