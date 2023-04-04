---
layout: page
title: "PC-SIG Library Disk #16"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0016/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0016"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "GAME SERIES NO 2"

    This early-days telecommunications program (the first shareware program
    ever) is as straightforward and unfancy (by today's standards) as they
    come. Nevertheless, it can keep phone number records, dial them for
    you, and generally perform the connection functions you need to tie
    your computer to another through a modem over phone lines. If your
    interests lean toward programming, all of the programs on this disk
    provide great examples of BASIC applications.  Something for beginning
    programmers to dig into!
    
    This disk covers a wide spectrum of entertainment. For the cerebral, we
    have a version of Chess. For the adventurous, we have a Star Trek
    simulation. And for the arcade player, we have Breakout. For the
    gamblers, we have included a version of the game Craps.
    
    How to Start:  For instructions on running BASIC programs, please refer
    to the GETTING STARTED section in this catalog.
    
    File Descriptions:
    BREAKOUT BAS  Uses cursor keys to move paddle.
    CHESS1   BAS  Multi-level skills  (Slow).
    CRAPS    BAS  Casino type game for a single player.
    MASTMIND BAS  Guess numbers instead of colored pegs.
    STARTREK BAS  Minor updated version of earlier STARTREK.
    SUPRTREK BAS  Another version for the "Trekies".
    STARTREK DUM  Data used by STARTREK.BAS.
    STARTREK HOW  Documentation used by STARTREK.BAS.
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
246 IF (Q$="Y") OR (Q$="y") THEN CLEAR: GOTO 10 ELSE END
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

## CHESS1.BAS

```bas
0 ' exit on error
1 CLEAR ,,2048:KEY OFF
2 CLS:COLOR 0,7:LOCATE 1,6:PRINT SPACE$(68)
3 LOCATE 2,6:PRINT" ********* Chess *********   By: M. C. Rakaska, Ides of March, 1980 "
4 LOCATE 3,6:PRINT SPACE$(68):LOCATE 4,6:PRINT"      Adapted for the IBM PC by  S. W. Huggins, December, 1981      "
5 LOCATE 5,6:PRINT SPACE$(68)
6 LOCATE 6,6:PRINT"                   <D-o-w-n-l-o-a-d-e-d  F-r-o-m>                   "
12 LOCATE 7,6:PRINT SPACE$(68):LOCATE 8,6:PRINT"  PC-NET #1 of Denver, Co.   303-773-2699 or Voice at 303-694-9038  "
13 LOCATE 9,6:PRINT SPACE$(68)
20 DEFINT A-Z:A=0:B=0:X=0:Y=0:S=0:A0=0:T=0:A8=0:A1=0:A2=0:A3=0:A4=0:B1=0:B6!=0:           H=0:M=0:N=0:P=0:W=0:A5=0:I=1
22 DIM C(64), A(10,10), B(10,10), T(10,10), S(8,8)
25 COLOR 7,0:LOCATE 18,1:PRINT"Important:  Use Caps Lock key to shift to UPPER CASE before continuing...."
30 LOCATE 21,1:INPUT "DO YOU WANT INSTRUCTIONS ";IN$:IN$=LEFT$(IN$,1):             IF IN$="Y" THEN GOSUB 2220
40 CL$="N"
50 CLS:INPUT "YOUR NAME IS ";B$:IF B$="" THEN B$=" HUMAN " ELSE B$=LEFT$(B$,9)
60 CLS:PRINT "LEVEL OF PLAY";:INPUT B8!:IF B8!=0 THEN B8!=1:B7!=1+RND(0)/2:ELSE    B7!=(B8!+1)/2+RND(0)/2
70 CLS:PRINT "DO YOU WANT WHITE ";B$;" ";:INPUT C$:GOSUB 790:IF LEFT$(C$,1)<>"N"   THEN GOSUB 900:GOTO 190
80 GOSUB 890:IF CL$="Y" THEN LOCATE 25,6,0:                                        PRINT "START ";TIME$;
100 F!=-99:A0=0:FOR J=1 TO 8:FOR K=1 TO 8:IF A(J,K)=99 THEN A6=J:A7=K
110 NEXT:NEXT
120 FOR X=1 TO 8:FOR Y=1 TO 8:IF A(X,Y)<0 THEN GOSUB 270:                           IF F!>=B7! THEN GOTO 150
130 NEXT:NEXT:IF F!>=-9 THEN GOTO 150 ELSE GOSUB 900
140 LOCATE 25,62,0: PRINT "I CONCEED    ";:GOTO 2190
150 A(R,U)=A(E,Q):A(E,Q)=1:IF A(R,U)=-2 AND U=1 THEN A(R,U)=-9
160 X=R:Y=U:A0=4:GOSUB 270:LOCATE 25,62,0:PRINT "IS MY MOVE    ";:                  LOCATE 25,51,0:PRINT CHR$(E+64);Q;"- "CHR$(R+64);U;
170 IF CL$="Y" THEN LOCATE 25,31,0:PRINT "STOP ";TIME$;
180 X=E:Y=Q:GOSUB 910:X=R:Y=U:GOSUB 910:IF C=1 THEN LOCATE 24,1,1:                  PRINT "CHECK ";:C=0 ELSE LOCATE 24,1,1:PRINT "      ";
190 IF X$="S" THEN GOSUB 1830:B7!=3*RND(0):LOCATE 25,1,1:PRINT "SELF-PLAYING";: GOSUB 2480:GOTO 100
195 LOCATE 25,1,1:PRINT "MOVE "+CHR$(7);B$;:GOSUB 1590:D=0:B4=A:B9=B:B5=0:IF A(X,Y)=2 AND Y=5 AND B=6 AND A(A,B)=1 AND ABS(A-X)=1 THEN B5=1:GOTO 220
200 IF X$="K" OR X$="Q" THEN GOSUB 900:LOCATE 25,1,0:PRINT STRING$(14," ");:        GOTO 100
210 IF X$="S" THEN CL$="N":GOTO 190:ELSE A0=3:GOSUB 250:                            IF D=0 THEN LOCATE 25,31,0:PRINT "ILLEGAL       ";:GOTO 190
220 LOCATE 25,31,1:PRINT "OK            ";:A=B4:B=B9:A(A,B)=A(X,Y):A(X,Y)=1:        GOSUB 910:X=A:Y=B:GOSUB 910:IF N$="N" THEN GOSUB 900:N$=" "
230 IF A(A,B)=2 AND B=8 THEN LOCATE 25,31,1:PRINT "WHAT PIECE";:GOSUB 2100:         X=A:Y=B:GOSUB 910:LOCATE 25,31,1:PRINT "              ";
240 IF B5=1 THEN A(A,B-1)=1:X=A:Y=B-1:GOSUB 910:GOTO 100:ELSE GOTO 100
250 LOCATE 1,78,0:PRINT "$ ";:                                                      ON A(X,Y) GOTO 0, 480, 0, 380, 330, 0, 280, 0, 330:GOTO 460
270 ON -A(X,Y) GOTO 0, 530, 0, 380, 330, 0, 280, 0, 330:GOTO 460
280 B=Y:FOR A=X+1 TO 8:GOSUB 640:IF S=0 THEN NEXT ELSE GOTO 290
290 FOR A=X-1 TO 1 STEP -1:GOSUB 640:IF S=0 THEN NEXT ELSE GOTO 300
300 A=X:FOR B=Y+1 TO 8:GOSUB 640:IF S=0 THEN NEXT ELSE GOTO 310
310 FOR B=Y-1 TO 1 STEP -1:GOSUB 640:IF S=0 THEN NEXT:RETURN ELSE RETURN
330 B=Y:FOR A=X+1 TO 8:B=B+1:GOSUB 640:IF S=0 THEN NEXT ELSE GOTO 340
340 B=Y:FOR A=X-1 TO 1 STEP -1:B=B-1:GOSUB 640:IF S=0 THEN NEXT ELSE GOTO 350
350 B=Y:FOR A=X-1 TO 1 STEP -1:B=B+1:GOSUB 640:IF S=0 THEN NEXT ELSE GOTO 360
360 B=Y:FOR A=X+1 TO 8:B=B-1:GOSUB 640: IF S=0 THEN NEXT ELSE GOTO 370
370 IF ABS(A(X,Y))=9 THEN GOTO 280:ELSE RETURN
380 A=X+2:B=Y+1:IF A<9 AND B<9 THEN GOSUB 650 ELSE GOTO 390
390 B=B-2:IF B>0 AND A<9 THEN GOSUB 650 ELSE GOTO 400
400 A=A-4:IF A>0 AND B>0 THEN GOSUB 650 ELSE GOTO 410
410 B=B+2:IF B<9 AND A>0 THEN GOSUB 650 ELSE GOTO 420
420 A=A+1:B=B+1:IF A>0 AND A<9 AND B<9 THEN GOSUB 650 ELSE GOTO 430
430 B=B-4:IF B>0 AND A>0 AND A<9 THEN GOSUB 650 ELSE GOTO 440
440 A=A+2:IF A>0 AND A<9 AND B>0 THEN GOSUB 650 ELSE GOTO 450
450 B=B+4:IF B<9 AND A>0 AND A<9 THEN GOSUB 650:RETURN ELSE RETURN
460 FOR A=X-1 TO X+1:FOR B=Y-1 TO Y+1:IF A(A,B)<>0 THEN GOSUB 650
470 NEXT:NEXT:RETURN
480 A=X:IF Y>2 THEN GOTO 500 ELSE GOTO 490
490 B=Y+1:IF A(A,B)=1 THEN GOSUB 660:B=B+1:IF A(A,B)=1 THEN GOSUB 660:GOTO 510:     ELSE GOTO 510:ELSE GOTO 510
500 B=Y+1:IF A(A,B)=1 THEN GOSUB 660 ELSE GOTO 510
510 A=X+1:B=Y+1:IF A(A,B)<0 THEN GOSUB 660 ELSE GOTO 520
520 A=A-2:IF A(A,B)<0 THEN GOSUB 660:RETURN:ELSE RETURN
530 A=X:IF Y<7 THEN GOTO 550 ELSE GOTO 540
540 B=Y-1:IF A(A,B)=1 THEN GOSUB 660:B=B-1:IF A(A,B)=1 THEN GOSUB 660:GOTO 560:     ELSE GOTO 560:ELSE GOTO 560
550 B=Y-1:IF A(A,B)=1 THEN GOSUB 660 ELSE GOTO 560
560 A=X-1:B=Y-1:IF A(A,B)>1 THEN GOSUB 660 ELSE GOTO 570
570 A=A+2:IF A(A,B)>1 THEN GOSUB 660:RETURN:ELSE GOTO 590
580 T=A(A,B):IF T=-99 THEN B1=T:RETURN:ELSE GOTO 590
590 A5=S:IF ABS(T)<=A(X,Y) THEN A(A,B)=A(X,Y):A(X,Y)=1:GOTO 610:ELSE GOTO 600
600 IF T<B1 THEN B1=T:S=A5:RETURN:ELSE S=A5:RETURN
610 A1=X:A2=Y:A3=A:A4=B:A8=T:A0=2:FOR X=1 TO 8:FOR Y=1 TO 8:                        IF A(X,Y)<0 THEN GOSUB 270:IF T=0 THEN GOTO 630
620 NEXT:NEXT
630 X=A1:Y=A2:A=A3:B=A4:A0=5:A(X,Y)=A(A,B):A(A,B)=A8:GOTO 600
640 S=0:IF A(A,B)=1 THEN GOTO 660 ELSE IF A(A,B)=0 THEN S=1:RETURN:                 ELSE IF SGN(A(A,B))=SGN(A(X,Y)) THEN S=1:RETURN:ELSE S=1:GOTO 660
650 IF A(A,B)=1 THEN GOTO 660 ELSE IF SGN(A(A,B))=SGN(A(X,Y)) THEN RETURN:          ELSE GOTO 660
660 LOCATE 1,78,0:PRINT "  ";:ON A0 GOTO 670, 680, 690, 700, 710:GOTO 720
670 IF A6=A AND A7=B THEN B1=B1+1:RETURN:ELSE RETURN
680 IF A3=A AND A4=B THEN T=0:RETURN:ELSE RETURN
690 IF B4=A AND B9=B THEN D=1:RETURN:ELSE RETURN
700 IF A6=A AND A7=B THEN C=1:RETURN:ELSE RETURN
710 IF A(A,B)<0 THEN GOTO 580 ELSE RETURN
720 B3=S:W=X:M=Y:N=A:H=B:P=A(A,B):A(A,B)=A(X,Y):A(X,Y)=1:B1=0
730 A0=5:FOR X=1 TO 8:FOR Y=1 TO 8:IF A(X,Y)>1 THEN GOSUB 250
740 NEXT:NEXT:X=N:Y=H:A0=1:GOSUB 270:A0=0:S=B3:X=W:Y=M:A=N:B=H:A(X,Y)=A(A,B):       A(A,B)=P
750 B6!=1/(ABS(4.5-A)+ABS(4.5-B)+1):IF A(X,Y)<-2 AND A(X,Y)>-9 THEN                 B6!=B6!+1/(ABS(A6-A)+ABS(A7-B)+5)+RND(0)/15
760 G!=P+B1+B6!:IF P=99 THEN GOSUB 900:                                             LOCATE 25,1,1:PRINT "MATE ";B$;:GOTO 2190
770 IF G!<=F! THEN RETURN
780 F!=G!:E=X:Q=Y:R=A:U=B:RETURN
790 CLS
800 Y=0:FOR J=896 TO 0 STEP -128:Y=Y+1:X=0:FOR K=J TO 42+J STEP 6:X=X+1:            T(X,Y)=K:NEXT:NEXT
810 Y=0:FOR J=960 TO 64 STEP -128:Y=Y+1:X=0:FOR K=J TO 42+J STEP 6:X=X+1:            B(X,Y)=K:NEXT:NEXT
820 DATA -7, -4, -5, -9, -99, -5, -4, -7
830 DATA -2, -2, -2, -2, -2, -2, -2, -2
840 DATA 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
850 DATA 2, 2, 2, 2, 2, 2, 2, 2
860 DATA 7, 4, 5, 9, 99, 5, 4, 7
870 FOR Y=8 TO 1 STEP -1:FOR X=1 TO 7 STEP 2:S(X,Y)=I:S(X+1,Y)=-I:NEXT:I=-I:NEXT
880 FOR Y=8 TO 1 STEP -1:FOR X=1 TO 8:READ A(X,Y):NEXT:NEXT:RETURN
890 I=-I:A(4,1)=99:A(5,1)=9:A(4,8)=-99:A(5,8)=-9
900 FOR Y=1 TO 8:FOR X=1 TO 8:GOSUB 910:NEXT:NEXT:RETURN
910 IF S(X,Y)>0 THEN GOTO 940
920 ON ABS(A(X,Y)) GOSUB 980, 1040, 0, 1340, 1440, 0, 1540, 0, 1140                   :IF ABS(A(X,Y))=99 THEN GOSUB 1240:RETURN ELSE RETURN
940 ON ABS(A(X,Y)) GOSUB 960, 990, 0, 1290, 1390, 0, 1490, 0, 1090                    :IF ABS(A(X,Y))=99 THEN GOSUB 1190:RETURN ELSE RETURN
960 IF S(X,Y)<0 THEN GOTO 980
970 LOCATE 25-Y*3,X*8+1,0
971 PRINT STRING$(8,CHR$(219));
972 LOCATE 26-Y*3,X*8+1,0
973 PRINT STRING$(8,CHR$(219));
974 LOCATE 27-Y*3,X*8+1,0
975 PRINT STRING$(8,CHR$(219));:RETURN
980 LOCATE 25-Y*3,X*8+1,0
981 PRINT STRING$(8," ");
982 LOCATE 26-Y*3,X*8+1,0
983 PRINT STRING$(8," ");
984 LOCATE 27-Y*3,X*8+1,0
985 PRINT STRING$(8," ");:RETURN
990 IF I*A(X,Y)<0 THEN GOTO 1020
1000 LOCATE 25-Y*3,X*8+1,0
1001 PRINT STRING$(8,CHR$(219));
1010 LOCATE 26-Y*3,X*8+1,0
1011 PRINT STRING$(3,CHR$(219));CHR$(2);STRING$(4,CHR$(219));
1012 LOCATE 27-Y*3,X*8+1,0
1013 PRINT STRING$(8,CHR$(219)):RETURN
1020 LOCATE 25-Y*3,X*8+1,0
1021 PRINT STRING$(8,CHR$(219));
1030 LOCATE 26-Y*3,X*8+1,0
1031 PRINT STRING$(3,CHR$(219));CHR$(1);STRING$(4,CHR$(219));
1032 LOCATE 27-Y*3,X*8+1,0
1033 PRINT STRING$(8,CHR$(219));:RETURN
1040 IF I*A(X,Y)<0 THEN GOTO 1070
1050 LOCATE 25-Y*3,X*8+1,0
1051 PRINT STRING$(8,CHR$(32));
1060 LOCATE 26-Y*3,X*8+1,0
1061 PRINT STRING$(3,CHR$(32));CHR$(2);STRING$(4,CHR$(32));
1062 LOCATE 27-Y*3,X*8+1,0
1063 PRINT STRING$(8,CHR$(32)):RETURN
1070 LOCATE 25-Y*3,X*8+1,0
1071 PRINT STRING$(8,CHR$(32));
1080 LOCATE 26-Y*3,X*8+1,0
1081 PRINT STRING$(3,CHR$(32));CHR$(1);STRING$(4,CHR$(32));
1082 LOCATE 27-Y*3,X*8+1,0
1083 PRINT STRING$(8,CHR$(32));:RETURN
1090 IF I*A(X,Y)<0 THEN GOTO 1120
1100 LOCATE 25-Y*3,X*8+1,0
1101 PRINT STRING$(2,CHR$(219));STRING$(3,CHR$(178));STRING$(3,CHR$(219));
1110 LOCATE 26-Y*3,X*8+1,0
1111 PRINT CHR$(219)+"QUEEN"+CHR$(219);CHR$(219);
1112 LOCATE 27-Y*3,X*8+1,0
1113 PRINT STRING$(2,CHR$(219));STRING$(3,CHR$(178));STRING$(3,CHR$(219));          :RETURN
1120 LOCATE 25-Y*3,X*8+1,0
1121 PRINT STRING$(2,CHR$(219));STRING$(3,CHR$(176));STRING$(3,CHR$(219));
1130 LOCATE 26-Y*3,X*8+1,0
1131 PRINT CHR$(219)+"QUEEN"+CHR$(219);CHR$(219);
1132 LOCATE 27-Y*3,X*8+1,0
1133 PRINT STRING$(2,CHR$(219));STRING$(3,CHR$(176));STRING$(3,CHR$(219));          :RETURN
1140 IF I*A(X,Y)<0 THEN GOTO 1170
1150 LOCATE 25-Y*3,X*8+1,0
1151 PRINT STRING$(2,CHR$(32));STRING$(3,CHR$(178));STRING$(3,CHR$(32));
1160 LOCATE 26-Y*3,X*8+1,0
1161 PRINT CHR$(32)+"QUEEN"+CHR$(32);CHR$(32);
1162 LOCATE 27-Y*3,X*8+1,0
1163 PRINT STRING$(2,CHR$(32));STRING$(3,CHR$(178));STRING$(3,CHR$(32));            :RETURN
1170 LOCATE 25-Y*3,X*8+1,0
1171 PRINT STRING$(2,CHR$(32));STRING$(3,CHR$(176));STRING$(3,CHR$(32));
1180 LOCATE 26-Y*3,X*8+1,0
1181 PRINT CHR$(32)+"QUEEN"+CHR$(32);CHR$(32);
1182 LOCATE 27-Y*3,X*8+1,0
1183 PRINT STRING$(2,CHR$(32));STRING$(3,CHR$(176));STRING$(3,CHR$(32));            :RETURN
1190 IF I*A(X,Y)<0 THEN GOTO 1220
1200 LOCATE 25-Y*3,X*8+1,0
1201 PRINT STRING$(2,CHR$(219));STRING$(4,CHR$(178));STRING$(2,CHR$(219));
1210 LOCATE 26-Y*3,X*8+1,0
1211 PRINT CHR$(219);CHR$(178)+"KING"+CHR$(178);CHR$(219);
1212 LOCATE 27-Y*3,X*8+1,0
1213 PRINT STRING$(2,CHR$(219));STRING$(4,CHR$(178));STRING$(2,CHR$(219));          :RETURN
1220 LOCATE 25-Y*3,X*8+1,0
1221 PRINT STRING$(2,CHR$(219));STRING$(4,CHR$(176));STRING$(2,CHR$(219));
1230 LOCATE 26-Y*3,X*8+1,0
1231 PRINT CHR$(219);CHR$(176)+"KING"+CHR$(176);CHR$(219);
1232 LOCATE 27-Y*3,X*8+1,0
1233 PRINT STRING$(2,CHR$(219));STRING$(4,CHR$(176));STRING$(2,CHR$(219));          :RETURN
1240 IF I*A(X,Y)<0 THEN GOTO 1270
1250 LOCATE 25-Y*3,X*8+1,0
1251 PRINT STRING$(2,CHR$(32));STRING$(4,CHR$(178));STRING$(2,CHR$(32));
1260 LOCATE 26-Y*3,X*8+1,0
1261 PRINT CHR$(32);CHR$(178)+"KING"+CHR$(178);CHR$(32);
1262 LOCATE 27-Y*3,X*8+1,0
1263 PRINT STRING$(2,CHR$(32));STRING$(4,CHR$(178));STRING$(2,CHR$(32));            :RETURN
1270 LOCATE 25-Y*3,X*8+1,0
1271 PRINT STRING$(2,CHR$(32));STRING$(4,CHR$(176));STRING$(2,CHR$(32));
1280 LOCATE 26-Y*3,X*8+1,0
1281 PRINT CHR$(32);CHR$(176)+"KING"+CHR$(176);CHR$(32);
1282 LOCATE 27-Y*3,X*8+1,0
1283 PRINT STRING$(2,CHR$(32));STRING$(4,CHR$(176));STRING$(2,CHR$(32));            :RETURN
1290 IF I*A(X,Y)<0 THEN GOTO 1320
1300 LOCATE 25-Y*3,X*8+1,0
1301 PRINT STRING$(3,CHR$(219));STRING$(2,CHR$(178));STRING$(3,CHR$(219));
1310 LOCATE 26-Y*3,X*8+1,0
1311 PRINT CHR$(219)+"KNIGHT"+CHR$(219);
1312 LOCATE 27-Y*3,X*8+1,0
1313 PRINT STRING$(3,CHR$(219));STRING$(2,CHR$(178));STRING$(3,CHR$(219));          :RETURN
1320 LOCATE 25-Y*3,X*8+1,0
1321 PRINT STRING$(3,CHR$(219));STRING$(2,CHR$(176));STRING$(3,CHR$(219));
1330 LOCATE 26-Y*3,X*8+1,0
1331 PRINT CHR$(219)+"KNIGHT"+CHR$(219);
1332 LOCATE 27-Y*3,X*8+1,0
1333 PRINT STRING$(3,CHR$(219));STRING$(2,CHR$(176));STRING$(3,CHR$(219));          :RETURN
1340 IF I*A(X,Y)<0 THEN GOTO 1370
1350 LOCATE 25-Y*3,X*8+1,0
1351 PRINT STRING$(3,CHR$(32));STRING$(2,CHR$(178));STRING$(3,CHR$(32));
1360 LOCATE 26-Y*3,X*8+1,0
1361 PRINT CHR$(32)+"KNIGHT"+CHR$(32);
1362 LOCATE 27-Y*3,X*8+1,0
1363 PRINT STRING$(3,CHR$(32));STRING$(2,CHR$(178));STRING$(3,CHR$(32));            :RETURN
1370 LOCATE 25-Y*3,X*8+1,0
1371 PRINT STRING$(3,CHR$(32));STRING$(2,CHR$(176));STRING$(3,CHR$(32));
1380 LOCATE 26-Y*3,X*8+1,0
1381 PRINT CHR$(32)+"KNIGHT"+CHR$(32);
1382 LOCATE 27-Y*3,X*8+1,0
1383 PRINT STRING$(3,CHR$(32));STRING$(2,CHR$(176));STRING$(3,CHR$(32));            :RETURN
1390 IF I*A(X,Y)<0 THEN GOTO 1420
1400 LOCATE 25-Y*3,X*8+1,0
1401 PRINT STRING$(3,CHR$(219));STRING$(2,CHR$(178));STRING$(3,CHR$(219));
1410 LOCATE 26-Y*3,X*8+1,0
1411 PRINT CHR$(219)+"BISHOP"+CHR$(219);
1412 LOCATE 27-Y*3,X*8+1,0
1413 PRINT STRING$(3,CHR$(219));STRING$(2,CHR$(178));STRING$(3,CHR$(219));          :RETURN
1420 LOCATE 25-Y*3,X*8+1,0
1421 PRINT STRING$(3,CHR$(219));STRING$(2,CHR$(176));STRING$(3,CHR$(219));
1430 LOCATE 26-Y*3,X*8+1,0
1431 PRINT CHR$(219)+"BISHOP"+CHR$(219);
1432 LOCATE 27-Y*3,X*8+1,0
1433 PRINT STRING$(3,CHR$(219));STRING$(2,CHR$(176));STRING$(3,CHR$(219));          :RETURN
1440 IF I*A(X,Y)<0 THEN GOTO 1470
1450 LOCATE 25-Y*3,X*8+1,0
1451 PRINT STRING$(3,CHR$(32));STRING$(2,CHR$(178));STRING$(3,CHR$(32));
1460 LOCATE 26-Y*3,X*8+1,0
1461 PRINT CHR$(32)+"BISHOP"+CHR$(32);
1462 LOCATE 27-Y*3,X*8+1,0
1463 PRINT STRING$(3,CHR$(32));STRING$(2,CHR$(178));STRING$(3,CHR$(32));            :RETURN
1470 LOCATE 25-Y*3,X*8+1,0
1471 PRINT STRING$(3,CHR$(32));STRING$(2,CHR$(176));STRING$(3,CHR$(32));
1480 LOCATE 26-Y*3,X*8+1,0
1481 PRINT CHR$(32)+"BISHOP"+CHR$(32);
1482 LOCATE 27-Y*3,X*8+1,0
1483 PRINT STRING$(3,CHR$(32));STRING$(2,CHR$(176));STRING$(3,CHR$(32));            :RETURN
1490 IF I*A(X,Y)<0 THEN GOTO 1520
1500 LOCATE 25-Y*3,X*8+1,0
1501 PRINT CHR$(219);CHR$(219);CHR$(178);CHR$(219);CHR$(219);CHR$(178);              CHR$(219);CHR$(219);
1510 LOCATE 26-Y*3,X*8+1,0
1511 PRINT CHR$(219);CHR$(219)+"ROOK"+CHR$(219);CHR$(219);
1512 LOCATE 27-Y*3,X*8+1,0
1513 PRINT STRING$(2,CHR$(219));STRING$(4,CHR$(178));STRING$(2,CHR$(219));          :RETURN
1520 LOCATE 25-Y*3,X*8+1,0
1521 PRINT CHR$(219);CHR$(219);CHR$(176);CHR$(219);CHR$(219);CHR$(176);              CHR$(219);CHR$(219);
1530 LOCATE 26-Y*3,X*8+1,0
1531 PRINT CHR$(219);CHR$(219)+"ROOK"+CHR$(219);CHR$(219);
1532 LOCATE 27-Y*3,X*8+1,0
1533 PRINT STRING$(2,CHR$(219));STRING$(4,CHR$(176));STRING$(2,CHR$(219));          :RETURN
1540 IF I*A(X,Y)<0 THEN GOTO 1570
1550 LOCATE 25-Y*3,X*8+1,0
1551 PRINT CHR$(32);CHR$(32);CHR$(178);CHR$(32);CHR$(32);CHR$(178);                  CHR$(32);CHR$(32);
1560 LOCATE 26-Y*3,X*8+1,0
1561 PRINT CHR$(32);CHR$(32)+"ROOK"+CHR$(32);CHR$(32);
1562 LOCATE 27-Y*3,X*8+1,0
1563 PRINT STRING$(2,CHR$(32));STRING$(4,CHR$(178));STRING$(2,CHR$(32));            :RETURN
1570 LOCATE 25-Y*3,X*8+1,0
1571 PRINT CHR$(32);CHR$(32);CHR$(176);CHR$(32);CHR$(32);CHR$(176);                  CHR$(32);CHR$(32);
1580 LOCATE 26-Y*3,X*8+1,0
1581 PRINT CHR$(32);CHR$(32)+"ROOK"+CHR$(32);CHR$(32);
1582 LOCATE 27-Y*3,X*8+1,0
1583 PRINT STRING$(2,CHR$(32));STRING$(4,CHR$(176));STRING$(2,CHR$(32));            :RETURN
1590 LOCATE 25,31,1:PRINT STRING$(10," ");
1600 X$=INKEY$:IF X$="N" THEN N$=X$
1610 IF X$>="A" AND X$<="H" THEN X=VAL(CHR$(ASC(X$)-16)):GOTO 1730
1620 IF X$="N" THEN GOSUB 2030
1630 IF X$="K" AND A(5,1)=99 AND A(8,1)=7 THEN A(5,1)=1:A(8,1)=1:A(7,1)=99          :A(6,1)=7:GOTO 1800
1640 IF X$="Q" AND A(5,1)=99 AND A(1,1)=7 THEN A(5,1)=1:A(1,1)=1:A(3,1)=99          :A(4,1)=7:GOTO 1800
1650 IF X$="K" AND A(4,1)=99 AND A(1,1)=7 THEN A(4,1)=1:A(1,1)=1:A(2,1)=99          :A(3,1)=7:GOTO 1800
1660 IF X$="Q" AND A(4,1)=99 AND A(8,1)=7 THEN A(4,1)=1:A(8,1)=1:A(6,1)=99          :A(5,1)=7:GOTO 1800
1670 IF X$="X" THEN GOSUB 1830:LOCATE 25,1,0:PRINT "EXCHANGING         ";           :GOSUB 2480:IF CL$="Y" THEN LOCATE 25,50,0:PRINT "START ";TIME$;:GOTO 100       :ELSE:GOTO 100
1680 IF X$="S" THEN GOTO 1820
1690 IF X$="M" THEN GOSUB 1840
1700 IF X$="I" THEN GOSUB 2220:CLS:GOSUB 900:LOCATE 25,1,1                          :PRINT "MOVE "+CHR$(7);B$;
1710 IF X$="L" THEN GOSUB 2040
1720 GOTO 1600
1730 LOCATE 25,21,1:PRINT X$;:LOCATE 25,31,1:PRINT "            ";
1740 Y=VAL(INKEY$):IF Y=0 THEN GOTO 1740
1750 LOCATE 25,22,1:PRINT Y;:LOCATE 25,25,1:PRINT "-";
1760 IF A(X,Y)<2 OR A(X,Y)>99 THEN LOCATE 25,31,1:PRINT "ENTRY ERROR ";             :GOTO 1590
1770 A$=INKEY$:IF A$<"A" OR A$>"H" THEN GOTO 1770 ELSE A=VAL(CHR$(ASC(A$)-16))
1780 LOCATE 25,27,1:PRINT A$;
1790 B=VAL(INKEY$):IF B=0 THEN GOTO 1790 ELSE LOCATE 25,28,1:PRINT B;
1800 IF X$="K" OR X$="Q" THEN LOCATE 25,20,1:PRINT "CSTL. ";X$;"-SIDE";             :GOSUB 1830 ELSE GOSUB 1830
1810 IF CL$="Y" THEN LOCATE 25,50,0:PRINT "START ";TIME$;
1820 RETURN
1830 LOCATE 25,1,1:PRINT STRING$(79," ");:RETURN
1840 GOSUB 1830:LOCATE 25,1,1:PRINT "MODIFYING          ";
1850 GOSUB 2010:IF M$<"A" OR M$>"H" THEN GOTO 1850
1860 X=VAL(CHR$(ASC(M$)-16)):LOCATE 25,21,1:PRINT M$;
1870 M$=INKEY$:IF M$<"1" OR M$>"8" THEN GOTO 1870
1880 Y=VAL(M$):LOCATE 25,23,1:PRINT M$;" = ";
1890 M$=INKEY$:IF M$="C" OR M$="P" OR M$="E" THEN S1$=M$:LOCATE 25,27,1             :PRINT M$;:ELSE GOTO 1890
1900 M$=INKEY$:IF M$="S" OR M$="P" OR M$="N" OR M$="B" OR M$="R" OR M$="Q" OR        M$="K" THEN V$=M$:LOCATE 25,29,1:PRINT M$; ELSE GOTO 1900
1910 IF V$="P" THEN V1=2
1920 IF V$="N" THEN V1=4
1930 IF V$="B" THEN V1=5
1940 IF V$="R" THEN V1=7
1950 IF V$="Q" THEN V1=9
1960 IF V$="K" THEN V1=99
1970 IF V$="S" THEN V1=1
1980 IF S1$="C" AND V1<>1 THEN V1=-V1
1990 A(X,Y)=V1:IF S1$="E" THEN A(X,Y)=1
2000 GOSUB 910:GOTO 1840
2010 M$=INKEY$:IF M$="N" THEN GOSUB 2030:GOTO 2010:ELSE IF M$="Z" THEN               GOSUB 1830:LOCATE 25,20,1:PRINT "         ";:GOSUB 900:ELSE RETURN
2020 IF CL$="Y" THEN LOCATE 25,51,0:PRINT "START ";TIME$;:GOTO 100 ELSE GOTO 100
2030 FOR J=1 TO 8:FOR K=1 TO 8:K$=STR$(K)
2031 LOCATE 27-K*3,J*8+1,0
2032 PRINT CHR$(J+64);RIGHT$(K$,1);:NEXT:NEXT:RETURN
2040 GOSUB 1830:LOCATE 25,20,1:PRINT "LEVEL=";B8!;:PRINT "CHANGE LEVELS?";
2050 C$=INKEY$:IF C$="N" THEN GOTO 2090 ELSE IF C$="Y" THEN LOCATE 25,27,1          :PRINT "       ";:GOSUB 1830:ELSE GOTO 2050
2060 L1$=INKEY$:IF L1$="" THEN GOTO 2060 ELSE IF L1$>="0" AND L1$<="9" THEN          LOCATE 25,27,1:PRINT L1$;:ELSE GOTO 2060
2070 L2$=INKEY$:IF L2$="" THEN GOTO 2070 ELSE IF L2$<"0" OR L2$>"9" THEN L2$=L1$    :L1$="0"
2080 B8!=VAL(L1$)*10+VAL(L2$):B7!=B8!/2:LOCATE 25,27,0:PRINT L1$;L2$;
2090 GOSUB 1830:LOCATE 25,20,0:PRINT "              ";:LOCATE 25,1,1                :PRINT "MOVE ";B$;:RETURN
2100 REM *** PROMOTION ROUTINE ***
2110 LOCATE 2,1,1:PRINT "P, N, B, R, Q ";
2120 Z$=INKEY$:IF Z$="P" THEN A(A,B)=2:GOTO 2180
2130 IF Z$="N" THEN A(A,B)=4:GOTO 2180
2140 IF Z$="B" THEN A(A,B)=5:GOTO 2180
2150 IF Z$="R" THEN A(A,B)=7:GOTO 2180
2160 IF Z$="Q" THEN A(A,B)=9:GOTO 2180
2170 GOTO 2120
2180 RETURN
2190 IF CL$="Y" THEN LOCATE 25,61,1:PRINT "STOP ";TIME$;
2200 LOCATE 25,1,1:PRINT "HIT (P) TO PLAY OR HIT (B) FOR BASIC";
2210 A$=INKEY$:IF A$="" THEN GOTO 2210 ELSE IF A$="B" THEN CLS:END                   ELSE IF A$="P" THEN RUN ELSE GOTO 2210
2220 CLS
2221 PRINT "1. USE LIST TO INSURE LOADED RIGHT, THE LAST LINE IS 65529 "
2230 PRINT "2. ALSE NOTE MEMORY SIZE AS A DOUBLE CHECK "
2240 PRINT "3. SPECIAL COMMANDS DURING PLAYER'S MOVE ARE:"
2250 PRINT "   TYPE 'N' - TO NUMBER THE BOARD "
2260 PRINT "        'K' - TO CASTLE KING SIDE "
2270 PRINT "        'Q' - TO CASTLE QUEEN SIDE "
2280 PRINT "        'X' - TO EXCHANGE PIECES AND LET COMPUTER MOVE"
2290 PRINT "        'S' - TO LET THE COMPUTER PLAY BY ITSELF "
2300 PRINT "        'M' - TO MODIFY THE BOARD, ENTER THE SQUARE FOLLOWED BY"
2310 PRINT "                 C, P, OR E  FOR COMPUTER, PLAYER, OR EMPTY"
2320 PRINT "                 AND S,P,N,B,R,Q,K  FOR SQUARE,PAWN, ETC..."
2330 PRINT "        'Z' - TO ESCAPE MODIFY AND LET COMPUTER MOVE"
2340 PRINT "        'I' - TO GET INSTRUCTIONS AGAIN"
2350 PRINT "        'L' - TO LOOK AT OR CHANGE LEVEL OF PLAY"
2360 REM ********************************************************************
2370 INPUT "HIT ENTER TO CONTINUE";EN$:PRINT
2380 PRINT "4. TO PROMOTE TO P,N,B,R,Q ENTER THE LETTER WHEN PROMOTED"
2390 PRINT "5. TO CAPTURE 'EN PASSANT' SPECIFY THE 'FROM' - 'TO' SQUARES"
2400 PRINT "6. LEVELS OF PLAY ARE FROM 01 TO 24"
2410 PRINT "7. COMPUTER ASSUMES MATE IF KING IS LEFT IN CHECK SO BE SURE TO "
2411 PRINT "    WATCH FOR CHECK MESSAGE"
2420 PRINT "8. IF A MOVE IS ILLEGAL OR AN ENTRY ERROR IS MADE SIMPLY TYPE IN"
2421 PRINT "    A NEW MOVE.  A MOVE MAY BE STARTED OVER BY FORCING AN ERROR. (E.G. '9')."
2430 PRINT "9. IF <BREAK> IS HIT DURING THE GAME, TYPE 'GOSUB 900:CONT' TO"
2435 PRINT "    DRAW BOARD AND CONTINUE"
2440 PRINT "10. YOU HAVE A CHOICE OF BLACK OR WHITE, THE COMPUTER WILL ALWAYS"
2441 PRINT "     BE AT THE TOP OF THE SCREEN"
2450 PRINT:PRINT:INPUT "HIT ENTER TO CONTINUE GAME";EN$
2460 RETURN
2480 I=-I:GOSUB 2490:GOSUB 900:RETURN
2490 L=0:FOR J=1 TO 8:FOR K=1 TO 8:L=L+1:IF A(J,K)<>1 THEN C(L)=-A(J,K)             :ELSE C(L)=A(J,K)
2500 NEXT:NEXT
2510 L=65:FOR J=1 TO 8: FOR K=1 TO 8:L=L-1:A(J,K)=C(L):NEXT:NEXT
2520 RETURN
65529 END
```

## CRAPS.BAS

```bas
10 REM public domain software, programmed by Roger Miller
20 CLS
30 DEFSTR F
40 RANDOMIZE (VAL(MID$(TIME$,7,2)))
50 FACE(1,1)="       "
60 FACE(1,2)="   "+CHR$(2)+"   "
70 FACE(1,3)="       "
80 FACE(2,1)=" "+CHR$(2)+"     "
90 FACE(2,2)="       "
100 FACE(2,3)="     "+CHR$(2)+" "
110 FACE(3,1)="     "+CHR$(2)+" "
120 FACE(3,2)="   "+CHR$(2)+"   "
130 FACE(3,3)=" "+CHR$(2)+"     "
140 FACE(4,1)=" "+CHR$(2)+"   "+CHR$(2)+" "
150 FACE(4,2)="       "
160 FACE(4,3)=" "+CHR$(2)+"   "+CHR$(2)+" "
170 FACE(5,1)=" "+CHR$(2)+"   "+CHR$(2)+" "
180 FACE(5,2)="   "+CHR$(2)+"   "
190 FACE(5,3)=" "+CHR$(2)+"   "+CHR$(2)+" "
200 FACE(6,1)=" "+CHR$(2)+"   "+CHR$(2)+" "
210 FACE(6,2)=" "+CHR$(2)+"   "+CHR$(2)+" "
220 FACE(6,3)=" "+CHR$(2)+"   "+CHR$(2)+" "
230 PRINT "Welcome to the CRAPS game table.  Do you know the rules?";
240 K$ = INPUT$(1)
250 PRINT " "
300 IF K$ = "y" OR K$ = "Y" THEN 2000
400 PRINT "This, my friends, is a little game of chance known to some"
500 PRINT "of you as CRAPS.  Just so we don't have any arguments, "
600 PRINT "here are the house rules."
700 PRINT "This is a dice game, so just to keep everything honest, "
800 PRINT "I'll roll for you.  "
900 PRINT "If you get a 2 or 12 on the first roll, you lose."
1000 PRINT "If you get a 7 or 11 on the first roll, you win."
1100 PRINT "If you get any other number on the first roll, "
1200 PRINT "that number is called your point."
1300 PRINT "Then you roll again.  This time you are trying to roll "
1400 PRINT "the same number as on your first roll.  That's called  "
1500 PRINT "making your point.  If you roll your point, you win.   "
1550 PRINT "If you roll a seven, you lose."
1600 PRINT "If you roll any other number, you keep on rolling."
1700 PRINT "GOOD LUCK.   ..... You'll need it! "
2000 PRINT "How much is your bank (2-500000)";
2100 INPUT BANK
2150 IF BANK < 2 THEN 2000
2170 IF BANK > 500000. THEN 2000
2200 PRINT "How much do you want to bet on this roll ";
2300 INPUT BET
2400 IF BET <= BANK THEN 3000
2500 PRINT "No credit at this casino, Bud "
2600 GOTO 2200
3000 IF BET >= 1. THEN 3500
3100 PRINT "Get serious, no bets less than a buck."
3200 GOTO 2200
3500 I = INT(6 * RND + 1)
3600 J = INT(6 * RND + 1)
3700 K = I + J
3750 GOSUB 11000
3800 PRINT "First throw - ";I;" and ";J;" makes ";K;
3900 IF K <> 7 THEN 4200
4000 PRINT " Big seven."
4100 GOTO 8000
4200 IF K <> 2 THEN 4500
4300 PRINT " Snake eyes."
4400 GOTO 9000
4500 IF K <> 12 THEN 4800
4600 PRINT " Boxcars."
4700 GOTO 9000
4800 IF K <> 11 THEN 5100
4900 PRINT " Big eleven."
5000 GOTO 8000
5100 PRINT " your point."
5200 PT = K
5300 PRINT "Roll again."
5350 I = INT(6 * RND + 1)
5400 J = INT(6 * RND + 1)
5500 K = I + J
5550 GOSUB 11000
5600 PRINT "Next throw - ";I;" and ";J;" makes ";K;
5700 IF K <> 7 THEN 6000
5800 PRINT " Big seven. You crapped out."
5900 GOTO 9000
6000 IF K <> PT THEN 5300
6400 PRINT " your point."
8000 PRINT "You win."
8100 WIN = WIN + 1
8200 IF  WIN >= 3 THEN PRINT "When you're hot, you're hot."
8300 IF LOSE < 3 THEN 8600
8400 PRINT "Those drinks cost you two dollars each."
8500 BANK = BANK - 2 * ( LOSE - 2 )
8600 LOSE = 0
8700 BANK = BANK + BET
8800 GOTO 10000
9000 PRINT "You lose."
9100 LOSE = LOSE + 1
9200 IF  LOSE >= 3 THEN PRINT LOSE;" times in a row ... Have a drink on us."
9300 IF WIN >= 3 THEN PRINT "And when you're not, you're not."
9500 WIN = 0
9600 BANK = BANK - BET
10000 PRINT "You now have $";BANK
10100 IF BANK < 1 THEN 10400
10200 PRINT "You broke the bank.  The men behind you will escort you out."
10300 STOP
10400 IF BANK >= 1 THEN 2200
10500 PRINT "You're broke.   Goodby."
10600 STOP
11000 PRINT " " 'print the dice faces
11500 FOR L = 1 TO 3
11550 COLOR 0,7
11600 PRINT FACE(I,L);
11620 COLOR 7,0
11630 PRINT "     ";
11640 COLOR 0,7
11650 PRINT FACE(J,L);
11700 COLOR 7,0
11750 PRINT "     "
11800 NEXT L
12000 RETURN
```

## LPCTALK.BAS

```bas
6022 IF PAGE=0 THEN PAGE=1
6040 I1=15*(PAGE-1)+1
6045 I2=15*PAGE
6060 PRINT"=== DIALING DIRECTORY ";PAGE;"==="
6080 FOR I=I1 TO I2
6088 IF I<10 THEN DM$=" "ELSE DM$=""
6090 PRINT DM$;LOC(2)-3;"-";N$;" ";RIGHT$(R$,13);"            ";B$;"-";P$;"-";D$;"-";S$;"     ";E$;"     ";M$
6100 '
6105 '
6110 '
6115 '
6223 LOCATE 23,39:PRINT"   -- 'f/b' to page through directory."
6241 IF Q$="F" OR Q$="f" THEN PAGE=PAGE+1:GOTO 6252
6242 IF Q$="B" OR Q$="b" THEN PAGE=PAGE-1:GOTO 6252
6250 IF VAL(Q$)<I1 OR VAL(Q$)>I2 THEN BEEP:LOCATE 21,14:PRINT SPACE$(LEN(Q$))         :GOTO 6230
6251 GOTO 6260
6252 IF PAGE<1 THEN PAGE=1:BEEP:GOSUB 6940:GOTO 6205
6253 IF PAGE>4 THEN PAGE=4:BEEP:GOSUB 6940:GOTO 6205
6254 GOTO 6040
6440 LOCATE 21,20:INPUT "",QQ$
6445 IF QQ$="=" THEN 6775
6450 IF QQ$="+" THEN 6810
6455 IF QQ$="Z" OR QQ$="z" THEN 6845
6460 IF QQ$="X" OR QQ$="x" THEN 6055
6465 IF VAL(QQ$)<I1 OR VAL(QQ$)>I2 THEN BEEP:LOCATE 21,21:PRINT SPACE$(LEN(QQ$))     :GOTO 6440
6470 GET #2,VAL(QQ$)+3
6472 Q$=STR$(VAL(QQ$)-I1+1)
6750 PRINT "Is entry #";QQ$;" ok (y/n)? ";
6765 PUT #2,VAL(QQ$)+3
6920 FOR I=1 TO 60
```

## MASTMIND.BAS

```bas
5 REM public domain software, programmed by Roger MIller
10 DEFINT A-Z
20 DIM SOLUTION(10), G$(10), GS(10), COMP(10)
50 CLS ' clear the screen
60 RANDOMIZE (VAL(MID$(TIME$,7,2)))
65 REM set initial values for parameters
70 DIGITS = 5 ' number of digits in the numbers
80 DIGMAX = 9 ' maximum value for each digit
90 TRIES  = 12 ' number of tries allowed
100 PRINT "This is a guessing game called MASTERMIND."
150 PRINT "You won't need the ENTER key (RETURN) in this game."
200 PRINT "Do you know how to play? (y/n/s/?)"
300 A$ = INPUT$(1)
400 IF A$ = "y" OR A$ = "Y" THEN 3000
500 IF A$ = "s" OR A$ = "S" THEN 700
520 IF A$ = "n" OR A$ = "N" THEN 2100
540 PRINT "y for Yes, you know how to play."
550 PRINT "n for No, you don't know the game."
560 PRINT "s for Set the parameters."
570 PRINT "? to explain y/n/s/? (this list)"
600 GOTO 200
700 PRINT "How many digits in the number (1-9)"
800 A$ = INPUT$(1)
900 IF A$ < "1" OR A$ > "9" THEN 700
1000 DIGITS = ASC(A$) - ASC("0")
1100 PRINT "What is the range for each digit? (2-9)"
1200 A$ = INPUT$(1)
1300 IF A$ < "2" OR A$ > "9" THEN 1100
1400 DIGMAX = ASC(A$) - ASC("0")
1500 PRINT "How many tries do you want? (01-99)"
1600 A$ = INPUT$(1)
1700 B$ = INPUT$(1)
1800 IF A$ < "0" OR A$ > "9" THEN 1500
1900 IF B$ < "0" OR B$ > "9" THEN 1500
2000 TRIES = (ASC(A$)-ASC("0"))*10+ASC(B$)-ASC("0")
2100 PRINT "I will think of a number with ";DIGITS;" digits."
2200 PRINT "Each digit will be from 1 to ";DIGMAX"."
2300 PRINT "Then you get to try to guess my number."
2400 PRINT "After each guess, I will tell you how many"
2500 PRINT "digits are correct and how many are correct"
2600 PRINT "and in the correct position."
2700 PRINT "You get ";TRIES;" tries to guess the number."
2800 COLOR 0,7
2820 PRINT  "Press any key to continue."
2840 COLOR 7,0
2900 A$ = INPUT$(1)
3000 REM   now set up the number
3200 FOR I = 1 TO DIGITS
3300 SOLUTION(I) = INT(RND * DIGMAX  + 1 )
3400 NEXT I
3500 GUESS = 0 ' set for the first guess
3600 CLS
3800 PRINT "Enter your guess.(";DIGITS;" digits from 1-";DIGMAX;")"
3900 PRINT "COUNT         GUESS       CORRECT   CORRECT, IN PLACE"
4000 REM get a guess
4050 GUESS = GUESS + 1 ' add one valid guess
4080 PRINT GUESS,
4090 LOCATE ,15,1
4100 I = 1
4150 IF I > DIGITS THEN 6000
4200   G$(I) = INPUT$(1)
4210   IF ASC(G$(I)) <> 8 AND ASC(G$(I)) <> 0 THEN 4250
4220     PRINT CHR$(29);" ";CHR$(29);
4225     I = I - 1
4230     IF I < 1 THEN I = 1
4240     GOTO 4200
4250   PRINT G$(I);
4300   IF G$(I) < "1" OR G$(I) > CHR$(DIGMAX+ASC("0")) THEN 5000
4400   GS(I) = ASC(G$(I)) - ASC("0")
4500   I = I + 1
4700   GOTO 4150
5000 PRINT " "
5020 PRINT "Your guess was not a proper digit."
5050 PRINT "Do you want to quit? (y/n)"
5100 A$ = INPUT$(1)
5200 IF A$ = "y" OR A$ = "Y" THEN STOP
5300 IF A$ = "n" OR A$ = "N" THEN 4080
5400 GOTO 5050
6000 REM see how the guess compares to the solution
6100 INPLACE = 0 ' counter for correct guesses
6200 NUMOK   = 0 ' counter for correct, not in place
6300 FOR I = 1 TO DIGITS
6310 IF DEBUG = 1 THEN PRINT "d6310" SOLUTION(I);GS(I);INPLACE;
6350   COMP(I) = SOLUTION(I)
6400   IF COMP(I) <> GS(I) THEN 6800
6500   INPLACE = INPLACE + 1
6600   COMP(I) = 0  ' avoid double counting
6700  GS(I) = -1 ' avoid double counting
6800 NEXT I
6900 IF INPLACE < DIGITS THEN 7500
6950 PRINT " "
7000 PRINT "Congratulations.  You won in ";GUESS;" tries."
7100 PRINT "Do you want to try again? (y/n)"
7200 A$ = INPUT$(1)
7300 IF A$ = "y" OR A$ = "Y" THEN 3000
7400 IF A$ = "n" OR A$ = "N" THEN STOP ELSE 7100
7500 FOR I = 1 TO DIGITS
7550   IF COMP(I) = 0 THEN 8100
7600   FOR J = 1 TO DIGITS
7610 IF DEBUG = 1 THEN PRINT" d7610 ";COMP(I); GS(J);NUMOK;
7700     IF COMP(I) <> GS(J) THEN 8000
7800     NUMOK = NUMOK + 1
7900     COMP(I) = 0  ' avoid double counting
7920     GS(J) = -1 ' avoid double counting
7950     GOTO 8100
8000   NEXT J
8100 NEXT I
8350 PRINT "  ",NUMOK+INPLACE;"     ";INPLACE
8400 IF GUESS < TRIES THEN 4000
8500 PRINT "Sorry, but your number of tries is up."
8600 PRINT "The answer is ";
8700 FOR I = 1 TO DIGITS
8800   PRINT SOLUTION(I);
8900 NEXT I
9000 PRINT " "
9100 GOTO 7100
```

## PC-TALK.BAS

```bas
2  '
4  '
6  'PC-TALK  (ver. 2.00)
8  '
10 'by Andrew Fluegelman
12 'The Headlands Press, Inc.
14 'P.O. Box 862
16 'Tiburon, CA 94920
18 '
20 'CompuServe 71435,1235
22 'Source TCP204
24 '
26 '
28 '
30 '***************************  NOTICE  ***************************
31 '*  A limited license is granted to all users of this program,  *
32 '*  to make copies of this program and distribute them to other *
33 '*  users, on the following conditions:                         *
34 '*     1. The notices contained in lines 2 through 100 of the   *
35 '*        program are not to be altered or removed.             *
36 '*     2. The program is not to be distributed to others in     *
37 '*        modified form.                                        *
38 '*     3. No fee is to be charged for copying or distributing   *
39 '*        the program without an express written agreement with *
40 '*        The Headlands Press, Inc., Box 862, Tiburon, CA 94920 *
41 '*                                                              *
42 '*                 Copyright (c) 1982 The Headlands Press, Inc. *
43 '****************************************************************
44 '
45 '
46 '
47 '
48 '
49 '
50 SCREEN 0,0,0:WIDTH 80:CLS:KEY OFF
52 PRINT"                                                           tm
54 PRINT"               MMMMMMMMMMMMMMM F R E E W A R E MMMMMMMMMMMMMM
56 PRINT
58 PRINT"                           User-Supported Software
60 PRINT
62 PRINT"      VDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD7
64 PRINT"      :     If you have used this program and found it of value,     :
66 PRINT"      :    your contribution ($25 suggested) will be appreciated.    :
68 PRINT"      :                                                              :
70 PRINT"      :                        MM Freeware MM                        :
72 PRINT"      :                   The Headlands Press, Inc.                  :
74 PRINT"      :                      Post Office Box 862                     :
76 PRINT"      :                       Tiburon, CA 94920                      :
78 PRINT"      :                                                              :
80 PRINT"      :       Regardless of whether you make a contribution,         :
82 PRINT"      :     you are encouraged to copy and share this program.       :
84 PRINT"      :                                                              :
86 PRINT"      SDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD=
88 PRINT"                          Copyright (c) 1982 The Headlands Press, Inc.
90 LOCATE 25,1
92 PRINT "Write for the latest FREEWARE Catalog.     Hit any key to continue ...";
94 Q$=INKEY$:IF Q$="" THEN 94
96 '
98 '
100 'Initialization of Variables
101 '
102 '
103 ' ****NOTE**** For better performance, load BASIC with the
104 ' '/C:1024' option   (See IBM BASIC manual, p.2-4)
105 '
110 LOCATE ,,1
115 CLOSE
120 DEFINT A-Z
125 FALSE=0: TRUE=NOT FALSE
130 FOR I=1 TO 10:KEY I, "":NEXT I
135 FOR I=1 TO 10:F$(I)=SPACE$(15):NEXT I
140 RECV$="":TRAN$="":DIAL$="":TIME$="00:00:00"
145 PAUSE=FALSE:PRNT=FALSE:FUNC=FALSE:RECV=FALSE:TRAN=FALSE:SERVICE=FALSE
150 '*******************user-definable defaults******************************
155 XOFF$=CHR$(19): XON$=CHR$(17)
160 BAU$="300":PAR$="E":DTA$="7":STP$="1"
165 ECHO=FALSE:MESG=FALSE:MENU=TRUE
166 S1$=CHR$(10):S2$=CHR$(127):S3$=CHR$(0)'*** characters to strip from display
170 DRIVE$="b:":BREAK$=CHR$(3) '***overriden by Alt-L and Alt-B commands
175 MODEM$="AT D":SERVICE$=""  '***(overridden by Dialing Directory values
180 '        see lines 335-340 below)***
185 SCREEN 0,1                 '***permits screen display in color***
190 FG=7:BG=0:HI=15            '***defines color values for foreground,
192 '     background, & high intensity ***
195 '************************************************************************
200 '
205 ' Start-up Screen Display
210 '
215 COLOR FG,BG:CLS
220 LOCATE 1,44:COLOR HI,BG:PRINT"MAKE SURE THAT YOUR MODEM IS ON";:COLOR FG,BG
225 '
230 LOCATE 3,1
235 PRINT TAB(39) "UMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM8
240 PRINT TAB(39) "3      =====     PC-TALK     =====     3
245 PRINT TAB(39) "3                                      3
246 PRINT TAB(39) "3     a communications program for     3
247 PRINT TAB(39) "3       The IBM Personal Computer      3
250 PRINT TAB(39) "3                          (ver. 2.00) 3
255 PRINT TAB(39) "@MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMY
260 PRINT TAB(39) "   Press <Home> for command summary.
265 PRINT TAB(39) "   Press <Ctrl> + <Home> to print
270 PRINT TAB(39) "         complete program documentation.
275 LOCATE 22,39: PRINT "  (Press <Alt> + 'E' if you can't see
280 LOCATE 23,39: PRINT "                 your keyboard input.)
285 ROW=1:COL=1:GOSUB 4521
300 '
305 ' Open Communications Files
310 '
315 ON ERROR GOTO 9000
320 OPEN"PC-TALK.DIR"AS #2 '***load MODEM$ & SERVICE$ from dialing directory***
325 FIELD #2, 24 AS N$,36 AS R$,4 AS B$,1 AS P$,1 AS D$,1 AS S$,1 AS E$,1 AS M$
330 GET #2,1:IF LEFT$(N$,11)<>"INITIALIZED" THEN 345
335 GET #2,2:MODEM$=LEFT$(N$,10)
340 GET #2,3:SERVICE$=N$
345 CLOSE #2
350 OPEN"PC-TALK.KEY"AS #2 '***load Alt-key codes and strings***
351 FIELD #2, 126 AS K$,2 AS L$
352 GET #2,1:IF LEFT$(K$,11)<> "INITIALIZED" THEN 360
353 FOR I=1 TO 10
354 GET #2,I+1
355 LNGTH = CVI(L$):IF LNGTH=0 THEN 357
356 K$(I)=LEFT$(K$,LNGTH)
357 NEXT I
358 GET #2,12:LNGTH=CVI(L$):COMPU$=LEFT$(K$,LNGTH)
359 GET #2,13:LNGTH=CVI(L$):SOURCE$=LEFT$(K$,LNGTH)
360 CLOSE #2
362 COMM$="COM1:"+BAU$+","+PAR$+","+DTA$+","+STP$
363 OPEN COMM$ AS #1 '***open #1 as communications file***
364 LOCATE 1,1:PRINT "=== Proceed ..."
365 '
370 '
395 '
396 '
397 ' Main Input/Output Routine
398 '
399 ' (keyboard input)
400 IF TRAN THEN 485
402 B$=INKEY$:IF B$="" THEN 500
405 IF LEN(B$)>1 THEN 810
410 IF B$<>CHR$(8) THEN 420
415 IF ECHO THEN IF POS(0)>1 THEN LOCATE ,POS(0)-1:PRINT " ";:LOCATE ,POS(0)-1:GOTO 425
420 IF ECHO THEN PRINT B$;
425 PRINT #1, B$;
430 IF EOF(1) THEN 400 ELSE 500
445 ' (transmit)
450     IF FILNGTH=1 THEN 4200 ELSE T=FILNGTH-1:T1=0
451 U$=INPUT$(128,#3):IF FAST THEN PRINT #1,U$;:PRINT U$;:GOTO 476
452   FOR I=1 TO LEN(U$)
455 V$=MID$(U$,I,1)
456 IF EOF(1) THEN 458 ELSE A$=INPUT$(1,#1)
457 IF A$<>XON$ AND A$<>XOFF$ THEN 456 ELSE IF A$=XON$ THEN HALT=FALSE:GOTO 456 ELSE HALT=TRUE:GOTO 456
458 IF HALT THEN COLOR HI,BG:PRINT"<<XOFF>>";:COLOR FG,BG:Q$=INKEY$:IF Q$<>"" AND ASC(MID$(Q$,2,1))=24 THEN HALT=FALSE:GOTO 456 ELSE GOTO 456
460 PRINT #1,V$;
465 IF V$=CHR$(10) THEN 475
470 PRINT V$;
475   NEXT I
476 IF FAST THEN W$=INPUT$(LOC(1),#1)'dumps comm buffer
480 B$=INKEY$:IF B$="" THEN 485
482 IF LEN(B$)>1 THEN 800
485     T1=T1+1:IF T1<T THEN 451
490 GOTO 4200
495 ' (comm port input and display/print/receive)
500 IF LOF(1)<128 THEN PAUSE=TRUE:PRINT #1,XOFF$;
505 IF EOF(1) THEN 565
510 A$=INPUT$(LOC(1),#1)
515 IF RECV THEN PRINT #2,A$;
516 IF FAST THEN PRINT A$;:GOTO 560
520   FOR I=1 TO LEN(A$)
525 D$=MID$(A$,I,1)
530 IF D$=S1$ OR D$=S2$ OR D$=S3$ THEN 550
535 IF PRNT THEN LPRINT D$;
540 IF D$<>CHR$(8) THEN PRINT D$;:GOTO 550
545 IF POS(0)>1 THEN LOCATE ,POS(0)-1:PRINT " ";:LOCATE ,POS(0)-1
550   NEXT I
555 ' (check status)
560 IF FUNC THEN 570
565 B$=INKEY$:IF B$<>"" THEN 405
570 IF LOC(1)>0 THEN 500
575 IF PAUSE THEN PAUSE=FALSE:PRINT #1,XON$;
580 IF FUNC THEN ROW=CSRLIN:COL=POS(0):GOTO 610
585 GOTO 400
590 '
595 '
600 ' Input for Keys F 1-10
605 '
610 LOCATE 25,LEN(F$)+11:C$=INKEY$:IF C$="" THEN IF EOF(1) THEN 610 ELSE LOCATE ROW,COL:GOTO 500
615 IF LEN(F$)>=15 THEN LOCATE 25,28:PRINT "(max 15 chrs.)";:GOTO 635
620 LOCATE 25,LEN(F$)+11
625 IF C$=CHR$(8) THEN IF F$="" GOTO 610 ELSE LOCATE ,POS(0)-1:PRINT " ";:          LOCATE ,POS(0)-1:F$=LEFT$(F$,LEN(F$)-1):GOTO 610
630 IF C$<>CHR$(13) THEN PRINT C$;
635 IF C$=CHR$(13) THEN 710
640 PRINT "  ";CHR$(181);
645 F$=F$+C$:LOCATE 25,LEN(F$)+11
650 IF EOF(1) THEN 610 ELSE LOCATE ROW,COL:GOTO 500
655 '
660 '
700 ' Screen Display for Keys F 1-10
705 '
710 KEY FX, LEFT$(F$,15)
715 F$(FX)=F$
720 LOCATE 25,1
725 FOR I=1 TO 9
730 PRINT USING "#";I;:COLOR BG,FG:PRINT LEFT$(F$(I),7);
735 IF LEN(F$(I))<7 THEN PRINT SPACE$(7-LEN(F$(I)));
740 COLOR FG,BG
745 NEXT I
750 PRINT "0";:COLOR BG,FG:PRINT LEFT$(F$(10),6);
755 IF LEN(F$(10))<6 THEN PRINT SPACE$(6-LEN(F$(I)));
760 COLOR FG,BG
765 FUNC=FALSE:F$=""
770 FOR I=1 TO 10
775 IF F$(I)<>SPACE$(15) THEN EXIT=TRUE
780 NEXT I
782 IF EXIT THEN EXIT=FALSE:LOCATE ROW,COL:GOTO 500
785 GOSUB 4521:GOTO 400
790 '
795 '
800 ' Inkey$ Extended Codes
805 '
810 CODE=ASC(MID$(B$,2,1)):ROW=CSRLIN:COL=POS(0)
815 IF CODE=71 THEN 2000 ' print command summary
820 IF CODE=19 THEN 3000 ' file receiving routine
822 IF CODE=47 THEN 3500 ' file viewing routine
825 IF CODE=20 THEN 4000 ' file transmitting routine
830 IF CODE=25 THEN 5000 ' change communications parameters
835 IF CODE=32 THEN 6000 ' dialing directory
836 IF CODE=37 THEN 7000 ' Alt-key directory
837 IF CODE=119 THEN 8000 ' Print documentation
840 '- program END key for Compu and Source -
842  IF COMPU AND CODE=79 THEN PRINT #1, CHR$(3);:GOTO 400 'END key = ^C
844  IF SOURCE AND CODE=79 THEN PRINT #1, CHR$(16);:GOTO 400 ' END key = ^P
846 ' - program INS and DEL keys for Compu and Source -
848 IF COMPU AND CODE=82 THEN PRINT #1, CHR$(22);:GOTO 400 'INS key = ^V
850 'IF SOURCE AND CODE=82 THEN ***(remove apostrophe and insert command?)****
855 IF COMPU AND CODE=83 THEN PRINT #1, CHR$(21);:GOTO 400 ' DEL key = ^U
860 'IF SOURCE AND CODE=83 THEN ***(remove apostrophe and insert command?)****
865 ' - clear special function keys -
870 IF CODE>103 AND CODE<114 THEN FX=CODE-103:KEY FX, "":F$(FX)=SPACE$(15):BEEP     :GOTO 720
875 ' - set special function keys -
880 IF CODE<59 OR CODE>68 THEN 900
885 FUNC=TRUE:FX=CODE-58:BEEP:LOCATE 25,1:PRINT STRING$(3,CHR$(16));"F";FX          ;CHR$(198);"    ";CHR$(181);
890 GOTO 610
895 ' - echo function -
900 IF CODE<>18 THEN 920
905 IF ECHO=FALSE THEN ECHO=TRUE:BEEP:PRINT"=== ECHO ON ===":GOTO 400
910 ECHO=FALSE:BEEP:PRINT"=== ECHO OFF ===":GOTO 400
915 ' - simultaneous printout function -
920 IF CODE<>114 THEN 940
925 IF PRNT=FALSE THEN PRNT=TRUE:BEEP:PRINT"=== PRINTOUT ON ===":GOTO 400
930 PRNT=FALSE:BEEP:PRINT"=== PRINTOUT OFF ===":GOTO 400
935 ' - Compuserve access -
940 IF CODE<>46 THEN 990
945 IF COMPU=TRUE THEN COMPU=FALSE:BEEP:PRINT"=== COMPUSERVE COMMANDS OFF ==="        :GOTO 400
950 SOURCE=FALSE:COMPU=TRUE:PRINT "=== COMPUSERVE ACCESS ==="
951 PRINT" <End> = Interrupt (^C)
952 PRINT" <Ins> = Repeat input (^V)
953 PRINT" <Del> = Delete input (^U)
954 PRINT"========================="
955 CLOSE #1:BAU$="300":PAR$="E":DTA$="7":STP$="1":ECHO=FALSE:MESG=FALSE
960 COMM$="COM1:"+BAU$+","+PAR$+","+DTA$+","+STP$:OPEN COMM$ AS #1
961 TIME$="00:00:00"
965 IF COMPU$<>"" THEN PRINT #1, MODEM$+COMPU$:GOTO 400
985 ' - Source access -
990 IF CODE<>31 THEN 1040
995 IF SOURCE=TRUE THEN SOURCE=FALSE:BEEP:PRINT"=== SOURCE COMMANDS OFF ==="          :GOTO 400
1000 COMPU=FALSE:SOURCE=TRUE:PRINT "=== SOURCE ACCESS ==="
1001 PRINT" <End> = Break (^P)
1002 PRINT"====================="
1005 CLOSE #1:BAU$="300":PAR$="M":DTA$="7":STP$="1":ECHO=FALSE:MESG=FALSE
1010 COMM$="COM1:"+BAU$+","+PAR$+","+DTA$+","+STP$:OPEN COMM$ AS #1
1011 TIME$="00:00:00"
1015 IF SOURCE$<>"" THEN PRINT #1, MODEM$+SOURCE$:GOTO 400
1035 ' - message function -
1040 IF CODE<>50 THEN 1060
1045 IF MESG=TRUE THEN MESG=FALSE:BEEP:PRINT"=== CANCEL TRANSMIT/RECEIVE MESSAGES ===":GOTO 400
1050 MESG=TRUE:BEEP:PRINT"=== SEND TRANSMIT/RECEIVE MESSAGES ===":GOTO 400
1055 ' - modem dialing command -
1060 IF CODE <> 131 THEN 1080
1062 LINE INPUT"=== Dial phone #: ";R$
1064 IF R$="" THEN PRINT "(cancelled)":PRINT"=== Proceed ...":LOCATE,,1:GOTO 400
1066 IF LEFT$(R$,1)="+" THEN DIAL$=MODEM$+SERVICE$+RIGHT$(R$,LEN(R$)-1)              :GOTO 1068
1067 DIAL$=MODEM$+R$
1068 PRINT #1, DIAL$:TIME$="00:00:00":LOCATE,,1:GOTO 400
1070 '
1075 ' - redial last # -
1080 IF CODE=16 AND DIAL$="" THEN BEEP:GOTO 400
1085 IF CODE=16 THEN PRINT "=== Redialing ...":PRINT #1, DIAL$:TIME$="00:00:00":GOTO 400
1090 '
1095 ' - exit to DOS -
1100 IF CODE<>45 THEN 1130
1105 BEEP:PRINT"=== EXIT FROM PROGRAM ===
1110 BEEP:PRINT:PRINT"WARNING!  If you proceed you will terminate the program and return to DOS.
1115 BEEP:PRINT"          Do you want to do this (y/n)? ";
1120 Q$=INKEY$:IF Q$=""THEN 1120
1125 IF Q$<>"Y" AND Q$<>"y" THEN PRINT:GOTO 370 ELSE PRINT:SYSTEM
1130 '
1135 '- Alt-key specification -
1140 IF CODE >=120 AND CODE <=129 THEN PRINT #1, K$(CODE - 119);:IF ECHO THEN PRINT K$(CODE-119);:GOTO 400 ELSE GOTO 400
1145 '
1150 '- Fast Transmit/Receive specification -
1155 IF CODE<>33 THEN 1170
1160 IF FAST THEN FAST=FALSE:BEEP:PRINT:PRINT"=== FAST TRANS/RECV OFF ===" ELSE FAST=TRUE:BEEP:PRINT:PRINT"=== FAST TRANS/RECV ON ==="
1165 IF TRAN THEN 485 ELSE 400
1170 '
1175 '- Elapsed Time Display -
1180 IF CODE<>44 THEN 1200
1185 LOCATE  1,39:PRINT"UMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM8
1190 LOCATE  2,39:PRINT"3   Elapsed time this call: ";:COLOR HI,BG:PRINT TIME$;:COLOR FG,BG:PRINT"   3
1195 LOCATE  3,39:PRINT"@MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMY";
1196 LOCATE ROW,COL:GOTO 400
1197 '
1200 '- Change Default Drive for File Specs -
1205 IF CODE=38 THEN 4150
1210 '
1215 '- Menu on/off -
1220 IF CODE<>22 THEN 1235
1225 IF MENU THEN MENU=FALSE:GOSUB 4500:GOTO 400
1230 MENU=TRUE:GOSUB 4500:GOTO 400
1235 '
1240 '
1245 '
1250 ' - Send Break Signal -
1255 IF CODE<>117 THEN 1265 ' specify break signal with Ctrl-End
1260 PRINT" <<< BREAK >>> ";:OLDVAL=INP(&H3FB):BRKVAL=OLDVAL OR 64:OUT &H3FB,BRKVAL:SOUND 32760,3:SOUND 32760,1:OUT &H3FB,OLDVAL:GOTO 400
1265 '
1300 '
1400 '
1500 '*************************************************************************
1505 ' more Extended Code combinations can go here (see p.G-6 IBM Basic manual)
1510 '
1515 ' use either: IF CODE=[n] THEN PRINT #1, [string]:GOTO 400
1520 ' or: IF CODE=[n] THEN PRINT #1, [string];:GOTO 400
1525 '
1530 ' The first example will send the string directly to the comm port,
1535 ' followed by an automatic carriage return.
1540 '
1545 ' The second example (with semicolon following string) will not include
1550 ' an automatic carriage return.
1555 '
1560 '
1565 '
1570 '
1575 '
1580 '
1585 '
1590 GOTO 400  ' DON'T remove this line! (failsafe to return to command mode)
1595 '*************************************************************************
1600 '
1700 '
1800 '
2000 ' Print Command Summary
2005 '
2010 LOCATE  1,39:PRINT"UMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM8
2025 LOCATE  2,39:PRINT"3 ";CHR$(24);"PrtSc =  print screen contents      3
2030 LOCATE  3,39:PRINT"3 ^PrtSc =  contin. printout on/off    3
2035 LOCATE  4,39:PRINT"3  Alt-T =  Transmit a file            3
2040 LOCATE  5,39:PRINT"3  Alt-R =  Receive a file             3
2045 LOCATE  6,39:PRINT"3  Alt-V =  View a file                3
2050 LOCATE  7,39:PRINT"3  Alt-D =  Dialing directory          3
2055 LOCATE  8,39:PRINT"3 Alt-'='=  dial from main program     3
2060 LOCATE  9,39:PRINT"3  Alt-Q =  redail last number         3
2065 LOCATE 10,39:PRINT"3  Alt-E =  (Echo to screen on/off)    3
2067 LOCATE 11,39:PRINT"3  Alt-M =  (tran/recv Messages on/off)3
2070 LOCATE 12,39:PRINT"3  Alt-P =  (specify comm. Paramtrs)   3
2075 LOCATE 13,39:PRINT"3  Alt-F =  (Fast trans/recv on/off)   3
2080 LOCATE 14,39:PRINT"3  Alt-K =  specify more alt-Keys      3
2085 LOCATE 15,39:PRINT"3    F1~10 =  set programmable keys    3
2090 LOCATE 16,39:PRINT"3Alt-F1~10 =  clear programbl' keys    3
2095 LOCATE 17,39:PRINT"3  Alt-C =  CompuServe access          3
2100 LOCATE 18,39:PRINT"3  Alt-S =  Source access              3
2110 LOCATE 19,39:PRINT"3  Alt-Z =  elapsed time/current call  3
2111 LOCATE 20,39:PRINT"3  Alt-X =  eXit to DOS                3
2112 LOCATE 21,39:PRINT"3Ctrl-<End> send sustained Break signal3
2115 LOCATE 22,39:PRINT"3DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD3
2120 LOCATE 23,39:PRINT"3Ctrl-<Home> prints full documentation 3
2125 LOCATE 24,39:PRINT"@MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMY";
2130 LOCATE ROW,COL:GOTO 400
2135 '
2140 '
3000 'File Receiving Specifications
3005 '
3010 IF RECV THEN RECV=FALSE:FAST=FALSE:BEEP:PRINT:PRINT"=== RECEIPT OF FILE '";RECV$;"' TERMINATED ===":PRINT:CLOSE #2:GOSUB 4500:GOTO 400
3015 BEEP:PRINT:PRINT"=== FILE RECEIVING ROUTINE ==="
3017 IF RECV$="" THEN 3040
3020 PRINT"Hit <space> to RESUME RECEIPT of file '";RECV$;"'"
3025 PRINT"     -- or SPECIFY ANOTHER file: ";
3030 Q$=INKEY$:IF Q$="" THEN 3030
3035 IF Q$=CHR$(32) THEN PRINT:GOTO 3060
3036 IF Q$=CHR$(13) THEN BEEP:PRINT:PRINT"=== CANCEL RECEIVING ROUTINE ===":GOTO     400
3037 PRINT Q$;
3038 INPUT "",FILE$:FILE$=Q$+FILE$:LOCATE,,1:GOTO 4120 'process file request
3040 PRINT"Receive file as"
3045 GOTO 4100 ' get file spec (can't use gosub and preserve error traps)
3050 RECV$=FILE$
3055 IF RECV$="" THEN BEEP:PRINT"=== CANCEL RECEIVING ROUTINE ===":GOTO 400
3060 CLOSE #2:OPEN RECV$ FOR APPEND AS #2: RECV=TRUE '*** see error trap
3062 PRINT"=============================="
3063 ROW=CSRLIN:COL=POS(0)
3065 LOCATE 25,1:COLOR BG,FG:PRINT " RECEIPT OF FILE ";RECV$;" NOW PROCEEDING   (type ALT-R to terminate.)";SPACE$(18-LEN(RECV$));:COLOR FG,BG:LOCATE ROW,COL
3070 IF MESG THEN PRINT #1, CHR$(7);CHR$(13);"===REMOTE COMPUTER READY TO RECEIVE FILE===";CHR$(13)
3072 IF VAL(BAU$)>300 THEN FAST=TRUE '***sets flag for highspeed receive mode
3075 GOTO 500
3080 '
3085 '
3500 'File Viewing Specifications and Routine
3505 '
3510 BEEP:PRINT:PRINT"=== FILE VIEWING ROUTINE ==="
3515 PRINT"File to view"
3520 GOTO 4100
3525 VIEW$=FILE$
3527 IF VIEW$="" THEN BEEP:PRINT"=== CANCEL VIEWING ROUTINE ===":GOTO 400
3530 CLOSE #2: OPEN VIEW$ FOR INPUT AS #2
3532 PRINT"=============================="
3533 ROW=CSRLIN:COL=POS(0)
3535 COLOR BG,FG:LOCATE 25,1:PRINT" Viewing file '";VIEW$;"'.  Hit <space> to continue; 'Alt-V' to terminate."+SPACE$(14-LEN(VIEW$));:COLOR FG,BG:LOCATE ROW,COL
3540 PRINT:PRINT:PRINT
3545 FOR I=1 TO 20
3550 LINE INPUT #2, V$
3555 PRINT V$:IF LEN(V$)>80 THEN I=I+FIX(LEN(V$)/80)
3560 NEXT I
3565 Q$=INKEY$:IF Q$="" THEN 3565
3570 IF Q$=" " THEN 3545
3575 IF Q$=CHR$(0)+CHR$(47) THEN 3590
3580 BEEP:GOTO 3565
3585 BEEP:PRINT:PRINT"=== END OF FILE ";VIEW$;" ===":GOTO 3592
3590 BEEP:PRINT:PRINT"=== VIEWING OF FILE ";VIEW$;" TERMINATED ===
3592 CLOSE #2:IF RECV THEN OPEN RECV$ FOR APPEND AS #2
3595 GOSUB 4500:GOTO 400
3600 '
4000 'File Transmitting Specifications
4005 '
4010 IF TRAN AND MESG THEN PRINT #1,CHR$(7);CHR$(13);"=== TRANSMISSION OF FILE TERMINATED ===";CHR$(13)
4015 IF TRAN THEN TRAN=FALSE:FAST=FALSE:BEEP:CLOSE #3:PRINT:PRINT "=== TRANSMISSION OF FILE ";TRAN$;" TERMINATED ===":GOSUB 4500:GOTO 400
4020 IF TRAN AND MESG THEN PRINT #1,CHR$(7);CHR$(13);"=== END OF FILE ===";CHR$(13)
4025 IF TRAN THEN TRAN=FALSE:FAST=FALSE:BEEP:CLOSE #3:PRINT:PRINT "=== END OF FILE ";TRAN$;" ===":GOSUB 4500:GOTO 400
4030 BEEP:PRINT:PRINT"=== FILE TRANSMITTING ROUTINE ==="
4035 PRINT"File to transmit"
4040 GOTO 4100 ' get file spec (can't use gosub and preserve error traps)
4045 TRAN$=FILE$
4050 IF TRAN$="" THEN BEEP:PRINT"=== CANCEL TRANSMITTING ROUTINE ===":GOTO 400
4055 CLOSE #3:OPEN TRAN$ FOR INPUT AS #3: TRAN=TRUE '*** see error trap
4057 PRINT"================================="
4058 ROW=CSRLIN:COL=POS(0)
4060 LOCATE 25,1:COLOR BG,FG:PRINT " TRANSMISSION OF FILE ";TRAN$;" PROCEEDING  (type ALT-T to Terminate.)";SPACE$(18-LEN(TRAN$));:COLOR FG,BG:LOCATE ROW,COL
4065 IF MESG THEN PRINT #1,CHR$(7);CHR$(13);"=== TRANSMISSION OF FILE NOW PROCEEDING ===";CHR$(13)
4066 IF VAL(BAU$)>300 THEN FAST=TRUE '***sets flag for hispeed transmit  mode
4067 FILNGTH=LOF(3)/128
4070 GOTO 450
4075 '
4080 '
4100 'Subroutine for Receive/Transmit/View File Specifications
4105 '
4110 INPUT "  (specification): ",FILE$:LOCATE,,1
4120 IF FILE$="" THEN 4140
4125 IF FILE$="?" THEN PRINT:PRINT"FILES ON ";DRIVE$;" DRIVE ARE --":FILES DRIVE$+"*.*":PRINT:PRINT:GOTO 4110
4130 IF LEFT$(FILE$,1)="?" THEN PRINT:PRINT"FILES ON ";MID$(FILE$,2,1);": DRIVE ARE --":FILES MID$(FILE$,2,1)+":*.*":PRINT:PRINT:GOTO 4110 '***see error trap
4135 IF MID$(FILE$,2,1)<>":" THEN FILE$=DRIVE$+FILE$
4140 IF CODE=19 THEN 3050
4142 IF CODE=20 THEN 4045
4144 IF CODE=47 THEN 3525
4145 '
4150 '- specify default drive for file specs -
4155 BEEP:PRINT"   === SPECIFY LOGGED DRIVE ===
4160 PRINT"Drive ";DRIVE$;" is now the default drive for
4162 PRINT"Receiving, Transmitting, and Viewing
4164 PRINT"  files (if no drive is specified).
4166 PRINT"Do you wish to change this (y/n)? ";
4170 Q$=INKEY$:IF Q$="" THEN 4170
4172 IF Q$<>"Y" AND Q$<>"y" THEN PRINT:PRINT "=== Proceed ...":GOTO 400
4174 PRINT:PRINT"Which drive: ";
4176 Q$=INKEY$:IF Q$="" THEN 4176
4178 DRIVE$=Q$+":":PRINT DRIVE$
4180 OPEN DRIVE$+"x" FOR OUTPUT AS #2 ' dummy file trap for invalid drive
4185 CLOSE #2:PRINT "Drive ";DRIVE$;" is now the logged drive."
4190 PRINT"=================================":GOTO 400
4200 'transmit last block of file
4205 '
4210 V$=INPUT$(1,#3)
4211 IF EOF(1) THEN 4213 ELSE A$=INPUT$(1,#1)
4212 IF A$<>XON$ AND A$<>XOFF$ THEN 4211 ELSE IF A$=XON$ THEN HALT=FALSE:GOTO 4211 ELSE HALT=TRUE:GOTO 4211
4213 IF HALT THEN COLOR HI,BG:PRINT"<<XOFF>>";:COLOR FG,BG:Q$=INKEY$:IF Q$<>"" AND ASC(MID$(Q$,2,1))=24 THEN HALT=FALSE:GOTO 4211 ELSE GOTO 4211
4215 PRINT #1,V$;
4220 W$=INPUT$(LOC(1),#1)' dumps comm. buffer at end of transmission
4225 IF V$=CHR$(10) THEN 4235
4230 PRINT V$;
4235 GOTO 4210
4240 '*** this routine exits via the error trap at line 9007
4500 'Clear Status/Menu Line
4505 '
4506 ROW=CSRLIN:COL=POS(0)
4510 FOR I=1 TO 10
4515 IF F$(I)<>SPACE$(15) THEN EXIT=TRUE
4516 NEXT I
4520 IF EXIT THEN EXIT=FALSE:LOCATE ,,1:GOTO 720
4521 IF MENU=FALSE THEN 4525
4522 LOCATE 25,1:COLOR BG,FG
4523 PRINT"^PrtSc=prnt  Alt+ T=tran R=recv V=view D=dial E=echo M=mesg Z=time <Home>=Help ";:COLOR FG,BG:LOCATE ROW,COL:RETURN
4525 LOCATE 25,1:PRINT SPACE$(79);:LOCATE ROW,COL:RETURN
4530 '
4535 '
5000 'Communications Parameters
5005 '
5010 BEEP:PRINT:PRINT"=== COMMUNICATIONS PARAMETERS ===
5015 PRINT
5020 PRINT"Current parameters are:
5025 PRINT"Baud rate: ";BAU$
5030 PRINT"   Parity:  ";PAR$
5035 PRINT"Data bits:  ";DTA$
5040 PRINT"Stop bits:  ";STP$
5045 PRINT:PRINT"Options:
5050 PRINT"   1 - 300,E,7,1  (text)
5055 PRINT"   2 - 300,N,8,1  (binary)
5060 PRINT"   3 - specify other parameters
5065 PRINT"   x - exit to command state
5070 PRINT
5075 PRINT"WARNING!  Choosing new parameters will break contact
5080 PRINT"                    if communications are in progress.
5085 PRINT"Choose: ";
5090 Q$=INKEY$:IF Q$="" THEN 5090
5095 IF Q$="X" OR Q$="x" THEN PRINT Q$:PRINT"(Present parameters still in effect)":PRINT"=== Proceed ...":GOTO 400
5100 IF VAL(Q$)<1 OR VAL(Q$)>3 THEN BEEP:GOTO 5090
5105 PRINT VAL(Q$)
5110 ' - choose options 1 or 2 -
5115 IF VAL(Q$)=1 THEN BAU$="300":PAR$="E":DTA$="7":STP$="1":GOTO 5170
5120 IF VAL(Q$)=2 THEN BAU$="300":PAR$="N":DTA$="8":STP$="1":GOTO 5170
5125 ' - specify new parameters -
5130 PRINT:PRINT"Specify:
5135 INPUT"Baud rate: ",BAU$
5140 INPUT"   Parity: ",PAR$
5145 IF PAR$="" THEN 5155
5150 IF ASC(PAR$)>100 AND ASC(PAR$)<116 THEN PAR$=CHR$(ASC(PAR$)-32)
5155 INPUT"Data bits: ",DTA$
5160 INPUT"Stop bits: ",STP$
5161 INPUT"Are these parameters ok (y/n)? ",Q$
5162 IF Q$<>"Y" AND Q$ <> "y" THEN BEEP:PRINT:PRINT"Re-specify:":GOTO 5135
5165 ' - open new communications file -
5170 LOCATE ,,1
5175 COMM$="COM1:"+BAU$+","+PAR$+","+DTA$+","+STP$
5176 IF ACCESS THEN 8900
5180 CLOSE #1:OPEN COMM$ AS #1
5182 IF VAL(BAU$)>300 THEN FAST=TRUE ELSE FAST=FALSE
5185 PRINT"(New parameters now in effect)":PRINT"=== PROCEED ...":GOTO 400
5190 '
5195 '
6000 'Dialing Directory
6005 '
6010 '(check if file 'PC-TALK.DIR' exists & if not, initialize)
6015 CLOSE #2:OPEN "pc-talk.dir" AS #2
6020 FIELD #2, 24 AS N$,36 AS R$,4 AS B$,1 AS P$,1 AS D$,1 AS S$,1 AS E$,1 AS M$     'N$=name R$=number B$=baud P$=parity D$=data S$=stop E$=echo M$=message
6025 GET #2,1
6030 IF LEFT$(N$,11)<>"INITIALIZED" THEN 6875
6050 '(print directory from file 'PC-TALK.DIR')
6055 CLS:LOCATE 1,1
6060 PRINT"=== DIALING DIRECTORY ==="
6062 GET #2,2:MODEM$=LEFT$(N$,10):LOCATE 1,30:PRINT" modem dialing command = ";MODEM$;
6064 GET #2,3:SERVICE$=N$:LOCATE 2,28:PRINT" long distance service # = ";SERVICE$;
6065 LOCATE 4,1:COLOR BG,FG
6070 PRINT"     Name                           Phone #           Comm. Param. Echo  Messg."
6075 COLOR FG,BG
6080 FOR I=1 TO 9
6085 GET #2,I+3
6090 PRINT " ";LOC(2)-3;"-";N$;" ";RIGHT$(R$,13);"           ";B$;"-";P$;"-";D$;"-";S$;"     ";E$;"     ";M$
6095 NEXT I
6100 FOR I=10 TO 15
6105 GET #2,I+3
6110 PRINT LOC(2)-3;"-";N$;" ";RIGHT$(R$,13);"           ";B$;"-";P$;"-";D$;"-";S$;"     ";E$;"     ";M$
6115 NEXT I
6200 '(ask for dialing instructions)
6205 LOCATE 21,1
6210 PRINT"Dial entry #:             | or...";
6215 LOCATE 21,39:PRINT"Input 'r' to add to or revise directory."
6220 LOCATE 22,39:PRINT"   -- 'x' to exit from directory."
6225 LOCATE 24,27:PRINT"| For long distance service, precede entry # with '+'";
6230 LOCATE 21,14:INPUT "",Q$
6235 IF LEFT$(Q$,1)="+" THEN SERVICE=TRUE:Q$=RIGHT$(Q$,LEN(Q$)-1)
6240 IF Q$="R" OR Q$="r" THEN 6400
6245 IF Q$="X" OR Q$="x" THEN CLOSE #2:GOSUB 6980:GOSUB 4500:LOCATE ,,1:PRINT"=== Proceed ..."         :GOTO 400
6250 IF VAL(Q$)<1 OR VAL(Q$)>15 THEN BEEP:LOCATE 21,14:PRINT SPACE$(LEN(Q$))         :GOTO 6230
6255 '(dial requested entry #)
6260 GET #2,VAL(Q$)+3
6265 BAU$=B$:PAR$=P$:DTA$=D$:STP$=S$
6270 COMM$="COM1:"+BAU$+","+PAR$+","+DTA$+","+STP$
6275 CLOSE #1:OPEN COMM$ AS #1
6280 IF E$="Y" THEN ECHO=TRUE ELSE ECHO=FALSE
6285 IF M$="Y" THEN MESG=TRUE ELSE MESG=FALSE
6290 GOSUB 6940
6295 LOCATE 21,1:PRINT"Dialing ";N$;
6300 LOCATE 22,1
6305 IF SERVICE THEN DIAL$=MODEM$+SERVICE$+R$:GOTO 6312
6310 DIAL$=MODEM$+R$
6312 PRINT #1, DIAL$:TIME$="00:00:00"
6315 CLOSE #2:GOSUB 6980:SERVICE=FALSE:LOCATE ,,1:GOSUB 4500:GOTO 400
6400 '(revise directory)
6405 GOSUB 6940
6410 LOCATE 21,1
6415 PRINT"Add/revise entry #:       | or...";
6420 LOCATE 21,39:PRINT"Input '=' to change modem command.
6425 LOCATE 22,39:PRINT"   -- '+' to change long distance #.
6430 LOCATE 23,39:PRINT"   -- 'z' to clear entire directory.
6435 LOCATE 24,39:PRINT"   -- 'x' to exit to dialing directory.";
6440 LOCATE 21,20:INPUT "",Q$
6445 IF Q$="=" THEN 6775
6450 IF Q$="+" THEN 6810
6455 IF Q$="Z" OR Q$="z" THEN 6845
6460 IF Q$="X" OR Q$="x" THEN 6055
6465 IF VAL(Q$)<1 OR VAL(Q$)>15 THEN BEEP:LOCATE 21,14:PRINT SPACE$(LEN(Q$))         :GOTO 6440
6470 GET #2,VAL(Q$)+3
6475 '- revise name and number -
6480 GOSUB 6940
6485 LOCATE 22,1
6490 PRINT"Name: ";:LINE INPUT; NI$
6495 IF NI$="" THEN NI$=N$
6500 IF LEN(NI$)>24 THEN NI$=LEFT$(NI$,24)
6505 LOCATE VAL(Q$)+4,6:PRINT NI$;SPACE$(25-LEN(NI$));
6510 LOCATE 22,1:PRINT SPACE$(79);:LOCATE 22,1
6515 PRINT"Phone number: ";:LINE INPUT; RI$
6520 IF RI$="" THEN RI$=R$
6525 IF LEN(RI$)>36 THEN RI$=LEFT$(RI$,36)
6530 LOCATE VAL(Q$)+4,31:IF LEN(RI$)>12 THEN PRINT RIGHT$(RI$,13) ELSE PRINT SPACE$(13-LEN(RI$))+RI$
6535 LOCATE 22,1:PRINT SPACE$(79);:LOCATE 22,1
6540 '- revise comm.parameters -
6545 PRINT"Are the communications parameters ok (y/n)? ";
6550 INPUT"",Q1$
6555 IF Q1$="Y" OR Q1$="y" OR Q1$="" THEN BI$=B$:PI$=P$:DI$=D$:SI$=S$:GOTO 6655
6560 LOCATE 22,1:PRINT SPACE$(79);:LOCATE 22,1
6565 PRINT"baud rate: ";:INPUT"",BI$
6570 IF BI$="" THEN BI$=B$
6575 LOCATE VAL(Q$)+4,55:PRINT SPACE$(4-LEN(BI$));BI$;
6580 LOCATE 22,1:PRINT SPACE$(79);:LOCATE 22,1
6585 PRINT"parity: ";:INPUT"",PI$
6590 IF PI$="" THEN PI$=P$
6595 IF ASC(PI$)>100 AND ASC(PI$)<116 THEN PI$=CHR$(ASC(PI$)-32)
6600 LOCATE VAL(Q$)+4,61-LEN(PI$):PRINT PI$;
6605 LOCATE 22,1:PRINT SPACE$(79);:LOCATE 22,1
6610 PRINT"# data bits: ";:INPUT"",DI$
6615 IF DI$="" THEN DI$=D$
6620 LOCATE VAL(Q$)+4,63-LEN(DI$):PRINT DI$;
6625 LOCATE 22,1:PRINT SPACE$(79);:LOCATE 22,1
6630 PRINT"# stop bits: ";:INPUT"",SI$
6635 IF SI$="" THEN SI$=S$
6640 LOCATE VAL(Q$)+4,65-LEN(SI$):PRINT SI$;
6645 COMM$="COM1:"+BI$+","+PI$+","+DI$+","+SI$
6650 'test for invalid parameters when dialing
6655 LOCATE 22,1:PRINT SPACE$(79);
6660 LOCATE 23,1:PRINT SPACE$(79);
6665 LOCATE 22,1
6670 '- revise echo & messages -
6675 PRINT"echo on (y/n)? ";
6680 INPUT"",Q1$
6685 IF Q1$="" THEN EI$=E$:GOTO 6695
6690 IF Q1$="Y" OR Q1$="y" THEN EI$="Y" ELSE EI$="N"
6695 LOCATE VAL(Q$)+4,71-LEN(EI$):PRINT EI$;
6700 LOCATE 22,1:PRINT SPACE$(79);:LOCATE 22,1
6705 PRINT"messages on (y/n)? ";
6710 INPUT"",Q1$
6715 IF Q1$="" THEN MI$=M$:GOTO 6725
6720 IF Q1$="Y" OR Q1$="y" THEN MI$="Y" ELSE MI$="N"
6725 LOCATE VAL(Q$)+4,77-LEN(MI$):PRINT MI$;
6730 LOCATE 22,1:PRINT SPACE$(79);:LOCATE 22,1
6735 '- write new info' to directory -
6740 LSET N$=NI$:RSET R$=RI$
6745 RSET B$=BI$:LSET P$=PI$:LSET D$=DI$:LSET S$=SI$:LSET E$=EI$:LSET M$=MI$
6750 PRINT "Is entry #";Q$;" ok (y/n)? ";
6755 INPUT"",Q1$
6760 IF Q1$<>"Y" AND Q1$<>"y" AND Q1$<>"" THEN LOCATE 22,1:PRINT SPACE$(35);         :GOTO 6475
6765 PUT #2,VAL(Q$)+3
6770 GOTO 6055
6775 '- revise modem dialing command -
6780 GOSUB 6940
6785 LOCATE 21,1:PRINT"Modem dialing command:";SPACE$(57)
6790 LOCATE 21,23:LINE INPUT;NI$
6795 LSET N$=NI$
6800 PUT #2,2
6805 GOTO 6055
6810 '- revise long distance # -
6815 GOSUB 6940
6820 LOCATE 21,1:PRINT"Long distance #:";SPACE$(63)
6825 LOCATE 21,17:LINE INPUT;NI$
6830 LSET N$=NI$
6835 PUT #2,3
6840 GOTO 6055
6845 '- clear entire directory -
6850 GOSUB 6940
6855 LOCATE 21,1
6860 BEEP:PRINT"*** If you proceed you will erase the entire contents of the directory. ***    "
6865 LOCATE ,,1:PRINT "Do you wish to do this (y/n)? ";
6866 Q$=INKEY$:IF Q$="" THEN 6866
6870 IF Q$<>"Y" AND Q$<>"y" THEN 6055
6875 LSET N$="INITIALIZED"
6880 PUT #2,1
6885 LSET N$="AT D":LSET R$=""
6890 LSET B$="":LSET P$="":LSET D$="":LSET S$="":LSET E$="":LSET M$=""
6895 PUT #2,2
6900 LSET N$=""
6905 PUT #2,3
6910 LSET N$="------------------------":RSET R$=" --- --- ----"
6915 RSET B$="300":LSET P$="E":LSET D$="7":LSET S$="1":LSET E$="N":LSET M$="N"
6920 FOR I=1 TO 15
6925 PUT #2,I+3
6930 NEXT I
6935 GOTO 6055
6940 '- clear message area -
6945 LOCATE 21,27:PRINT SPACE$(52);
6950 LOCATE 22,1:PRINT SPACE$(79);
6955 LOCATE 23,1:PRINT SPACE$(79);
6960 LOCATE 24,1:PRINT SPACE$(79);
6965 RETURN
6970 '
6975 '
6980 ' - reopen receive file if necessary -
6982 IF RECV THEN OPEN RECV$ FOR APPEND AS #2
6984 RETURN
6985 '
6990 '
6995 '
7000 'Alt-key Specification
7005 '
7010 '(check if file 'PC-TALK.key' exists & if not, initialize)
7015 CLOSE #2:OPEN "pc-talk.key" AS #2
7020 FIELD #2, 126 AS K$,2 AS L$
7025 GET #2,1
7030 IF LEFT$(N$,11)<>"INITIALIZED" THEN 7495
7035 '(print directory from file 'PC-TALK.KEY')
7036 PRINT
7040 LOCATE 1,39:PRINT"UMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM8
7045 LOCATE 2,39:PRINT"3      === ALT-KEY DIRECTORY ===       3
7050 LOCATE 3,39:PRINT"3                                      3
7055 LOCATE 4,39:PRINT"3";:COLOR UL,BG:PRINT"key     Input string                  ";:COLOR FG,BG:PRINT"3"
7060 FOR I=1 TO 10
7065 GET #2,I+1:LNGTH=CVI(L$):KP$=LEFT$(K$,30):IF LNGTH>30 THEN LNGTH=30
7066 FOR J=1 TO LNGTH
7067 IF MID$(KP$,J,1)=CHR$(13) THEN KP$ = LEFT$(KP$,J-1) + "\" + RIGHT$(KP$,30-J)     '***substitutes '\' for carriage return in string***
7068 NEXT J
7069 IF I=10 THEN LOCATE 14,39:PRINT"3Alt-0 = ";LEFT$(KP$,LNGTH);SPACE$(30-LNGTH);"3":GOTO 7075
7070 LOCATE I+4,39:PRINT"3Alt-";:PRINT USING "#";I;:PRINT" = ";LEFT$(KP$,LNGTH);SPACE$(30-LNGTH);"3
7075 NEXT I
7080 LOCATE 15,39:PRINT"3                                      3
7095 GET #2,12
7100 LNGTH=CVI(L$):COMPU$=LEFT$(K$,LNGTH)
7105 LOCATE 16,39:PRINT"3Alt-C = CompuServe access #: ";COMPU$;SPACE$(9-LNGTH);"3
7110 GET #2,13
7115 LNGTH=CVI(L$):SOURCE$=LEFT$(K$,LNGTH)
7120 LOCATE 17,39:PRINT"3Alt-S =     Source access #: ";SOURCE$;SPACE$(9-LNGTH);"3
7125 LOCATE 18,39:PRINT"TMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM>
7130 GOSUB 7530
7135 '          (revise key assignments?)
7140 LOCATE 20,39,1
7145 PRINT"Press <space> to proceed or ...
7150 LOCATE 21,39
7155 PRINT"       'r' to revise key assignments:";
7160 LOCATE 21,76
7165 Q$=INKEY$:IF Q$="" THEN 7165
7170 IF Q$="R" OR Q$="r" THEN 7185
7175 IF Q$=CHR$(32) THEN CLOSE #2:GOSUB 6980:GOSUB 7530:LOCATE 21,39:PRINT"=== Proceed ...";:LOCATE ROW,COL:GOTO 400
7180 BEEP:LOCATE 21,76:PRINT SPACE$(LEN(Q$)):GOTO 7160
7185 '          (revise key assignments)
7190 GOSUB 7530
7195 LOCATE 20,39
7200 PRINT"Revise Alt + #:            | or...";
7205 LOCATE 21,39:PRINT"Press 'c' to change CompuServe access #.
7210 LOCATE 22,39:PRINT"   -- 's' to change Source access #.
7215 LOCATE 23,39:PRINT"   -- 'z' to clear entire directory.
7220 LOCATE 24,39:PRINT"   -- 'x' to exit to main program.";
7225 LOCATE 20,54:Q$=INKEY$:IF Q$="" THEN 7225
7230 IF Q$="C" OR Q$= "c" THEN 7350
7235 IF Q$="S" OR Q$= "s" THEN 7400
7240 IF Q$="Z" OR Q$= "z" THEN 7450
7245 IF Q$="X" OR Q$= "x" THEN CLOSE #2:GOSUB 6980:GOSUB 7530:LOCATE 21,39:PRINT"=== Proceed ...";:LOCATE ROW,COL:GOTO 400
7250 IF Q$="0" THEN GET #2,11: GOTO 7265
7255 IF VAL(Q$)<1 OR VAL(Q$)>9 THEN BEEP:LOCATE 20,54:PRINT SPACE$(LEN(Q$))          :GOTO 7225
7260 GET #2,VAL(Q$)+1
7265 '          - revise input string -
7270 GOSUB 7530
7275 LOCATE 20,39:PRINT"New input string for Alt-";Q$;"  (+ <ENTER>)
7277 LOCATE 22,39:PRINT"(Type '\' to specify carriage returns.)";
7280 LOCATE 23,39:PRINT"(Input <space> + <ENTER> to clear key.)";
7285 LOCATE 21,39
7290 PRINT CHR$(16);:KI$="" ' key input string
7291 CI$=INKEY$:IF CI$="" THEN 7291 ' character input string
7292 IF CI$=CHR$(13) THEN 7297
7293 IF CI$=CHR$(8) THEN LOCATE ,POS(O)-1:PRINT CHR$(32);:LOCATE ,POS(0)-1           :KI$=LEFT$(KI$,LEN(KI$)-1):GOTO 7291
7294 PRINT CI$;:KI$=KI$+CI$
7295 GOTO 7291
7297 IF KI$=CHR$(32) THEN KI$="":GOTO 7300
7298 IF KI$="" THEN KI$=K$
7300 IF LEN(KI$)>126 THEN KI$=LEFT$(KI$,126)
7301 FOR I=1 TO LEN(KI$)
7302 IF MID$(KI$,I,1)="\" THEN KI$ = LEFT$(KI$,I-1) + CHR$(13) + RIGHT$(KI$,LEN(KI$)-I)' ***permits input of '\' to represent a carriage return in string***
7303 NEXT I
7305 LI=LEN(KI$)
7310 '          - write new info' to directory -
7315 LSET K$=KI$:LSET L$=MKI$(LI)
7320 IF Q$="0" THEN PUT #2,11:GOTO 7330
7325 PUT #2,VAL(Q$)+1
7330 IF Q$="0" THEN K$(10)=KI$:GOTO 7345
7335 K$(VAL(Q$))=KI$
7340 GOSUB 7530
7345 GOTO 7040
7350 '          - revise CompuServe access # -
7355 GOSUB 7530
7360 LOCATE 21,39:PRINT"CompuServe access #:";
7365 LOCATE 21,59:LINE INPUT;KI$
7370 LI=LEN(KI$)
7375 IF LEN(KI$)>30 THEN KI$=LEFT$(KI$,30)
7380 LSET K$=KI$:LSET L$=MKI$(LI)
7385 PUT #2,12
7390 GOSUB 7530
7395 GOTO 7040
7400 '          - revise Source access # -
7405 GOSUB 7530
7410 LOCATE 21,39:PRINT"Source access #:";
7415 LOCATE 21,55:LINE INPUT;KI$
7420 IF LEN(KI$)>30 THEN KI$=LEFT$(KI$,30)
7425 LI=LEN(KI$)
7430 LSET K$=KI$:LSET L$=MKI$(LI)
7435 PUT #2,13
7440 GOSUB 7530
7445 GOTO 7040
7450 '          - clear entire directory -
7455 GOSUB 7530
7460 LOCATE 21,39
7465 BEEP:PRINT"*** If you proceed you will erase
7470 LOCATE 22,39
7475 PRINT"  the entire contents of the directory."
7480 LOCATE 23,39
7485 PRINT "Do you wish to do this (y/n)? ";
7486 Q$=INKEY$:IF Q$="" THEN 7486
7490 IF Q$<>"Y" AND Q$<>"y" THEN 7040
7495 LSET K$="INITIALIZED":LSET L$=""
7500 PUT #2,1
7505 LSET K$="":LSET L$=MKI$(0)
7510 FOR I=2 TO 13
7515 PUT #2,I
7520 NEXT I
7525 GOTO 7040
7530 '          - clear message area -
7535 FOR I=19 TO 24
7540 LOCATE I,35:PRINT SPACE$(44);
7545 NEXT I
7550 RETURN
7555 '
7560 '
8000 '     Print Documentation
8005 '
8010 BEEP: PRINT:PRINT"=== PRINT DOCUMENTATION ===
8015 FOR I=1 TO 8:PRINT SPACE$(38):NEXT I
8020 CLOSE #2: OPEN "PC-TALK.DOC" FOR INPUT AS #2
8025 PRINT:PRINT"Make sure that your printer is on and loaded with continuous form paper.
8030 PRINT"Align the print head with the top of the form and
8035 PRINT"             set the printer to print 66 lines per page.
8040 PRINT"The printing routine will take about ten minutes at 80 cps.
8045 PRINT"Do you wish to proceed with printing now (y/n)? ";
8050 Q$=INKEY$:IF Q$="" THEN 8050
8055 IF Q$<>"Y" AND Q$<>"y" THEN PRINT:PRINT:PRINT"(print routine cancelled)":PRINT"=== Proceed ...":GOTO 400
8060 LPRINT " "; '*** tests for whether printer is on
8065 LOCATE 25,1:COLOR BG,FG:PRINT"=== PRINTING DOCUMENTATION === (Hit CTRL+<Home> to terminate.)";SPACE$(16);:COLOR FG,BG:LOCATE 24,1
8070 '    - printing routine -
8075 INDENT=8:HEADER$="[Freeware, P.O. Box 862, Tiburon, CA 94920]           PC-TALK page"
8080 '
8084 P=0 'page counter
8085 P=P+1
8086 LPRINT:LPRINT:LPRINT:LPRINT:LPRINT:LPRINT
8090 LPRINT SPACE$(INDENT);HEADER$;P:LPRINT:LPRINT
8095   L=1 ' line counter
8100 LINE INPUT #2,P$
8102 PRINT P$
8105 IF LEFT$(P$,1)="\" THEN IF L=1 THEN 8095 ELSE 8140
8110 LPRINT SPACE$(INDENT);:LPRINT P$
8115 Q$=INKEY$:IF Q$<>"" THEN IF ASC(RIGHT$(Q$,1))=119 THEN 8155
8120 IF EOF(2) THEN CLOSE #2:GOTO 8160
8125   IF L<52 THEN L=L+1:GOTO 8100
8130 LPRINT:LPRINT:LPRINT:LPRINT:LPRINT
8135     GOTO 8085
8140 FOR K=L TO 52:LPRINT:NEXT K
8145 GOTO 8130
8150 '     - terminate printing -
8155 BEEP:PRINT:PRINT"=== PRINTING TERMINATED ===":GOTO 8165
8160 BEEP:PRINT"=== END OF DOCUMENTATION ==="
8165 GOSUB 4500
8170 IF DUMMYDOC THEN PRINT"(returning to DOS)":FOR I=1 TO 3000:NEXT I:SYSTEM
8175 PRINT"You are now back in the main program.
8180 PRINT"=== Proceed ..."
8185 CLOSE #2:GOTO 400
8190 '     - message if documentation file not found -
8195 PRINT:PRINT:PRINT:PRINT:PRINT"Sorry, but the documentation file 'PC-TALK.DOC' is not on your program disk.
8200 PRINT:PRINT "Alternatives:
8205 PRINT"   1. See the person from whom you got a copy of the program.
8220 PRINT"   2. Send a postage-paid return-addressed manila envelope to FREEWARE
8225 PRINT"        along with a BLANK DISK and request a new copy of the entire program.
8230 PRINT SPACE$(79):PRINT SPACE$(25);" ===F R E E W A R E=== ";SPACE$(31)
8235 PRINT SPACE$(25);"User-Supported Software";SPACE$(31)
8240 PRINT SPACE$(25);"  Post Office Box 862  ";SPACE$(31)
8245 PRINT SPACE$(25);"   Tiburon, CA 94920   ";SPACE$(31)
8250 PRINT:PRINT:PRINT:PRINT
8255 PRINT"Meanwhile, please try using the on-screen command summary.
8260 PRINT"(Hit any key to proceed)
8265 Q$=INKEY$:IF Q$="" THEN 8265
8270 CLS:GOTO 2000
8275 '
8280 '
8300 '         - print documentation even if no asynch card -
8305 '
8310 PRINT:PRINT"This program requires the Asynchronous Communications card to operate."
8315 PRINT"Do you want to print the program documentation (y/n)? ";
8320 Q$=INKEY$:IF Q$="" THEN 8320
8325 IF Q$="Y" OR Q$="y" THEN DUMMYDOC=TRUE:GOTO 8000
8330 PRINT:PRINT:PRINT"(returning to DOS)":FOR I=1 TO 3000:NEXT I:SYSTEM
8900 '     pause to access communications port
8905 '
8910 BEEP:PRINT"=== ESTABLISH MODEM CONNECTION ===
8915 PRINT"Then hit <space> to continue.
8920 PRINT"(You may use Alt- commands without
8925 PRINT"   establishing connection.)
8926 ACCESS=TRUE
8930 B$=INKEY$:IF B$="" THEN 8930
8935 IF B$=" " THEN ACCESS=FALSE:CLS:GOTO 363
8940 IF LEN(B$)>1 THEN 800
8945 BEEP:GOTO 8930
9000 '          Error Trapping
9005 '
9006 IF ERL=451 AND ERR=62 THEN RESUME 4200' transmit last block
9007 IF ERL=4210 AND ERR=62 THEN RESUME 4020 'terminates transmit at end
9008 IF ERL=3550 AND ERR=62 THEN RESUME 3585 'terminates viewing at end
9009 IF ERL=8100 AND ERR=62 THEN RESUME 8160 'end of file for documentation
9010 IF ERR=27 AND ERL=535 THEN BEEP:PRINT"===== CHECK PRINTER =====":PRNT=FALSE     :RESUME ' continues program if printer off during input
9015 IF ERR=27 AND ERL=8060 THEN BEEP:PRINT:PRINT:PRINT"=== CHECK PRINTER ==="       :RESUME 8025 ' printer check for documentation
9020 IF ERR=27 THEN RESUME 8155 ' another printer check
9022 IF ERL=5180 THEN BEEP:PRINT:PRINT"*** Invalid specifications. Try again."       :RESUME 5135 ' tests for valid communications parameters
9025 IF ERL=6275 AND ERR=64 THEN BEEP:LOCATE 20,1:PRINT"*** Invalid parameters for entry #";Q$:RESUME 6400
9028 IF ACCESS AND (ERR=24 OR ERR=52 OR ERR=57) THEN RESUME 8900
9029 IF ERL=363 THEN RESUME 8900
9030 IF ERR=24 OR ERR=57 THEN ROW=CSRLIN:COL=POS(0):LOCATE 1,39:COLOR HI,BG:PRINT "  === CHECK YOUR MODEM OR PRINTER ===   ":COLOR FG,BG:LOCATE ROW,COL:RESUME 'device timeout/unavailable
9035 IF ERR=69 THEN ROW=CSRLIN:COL=POS(0):LOCATE 1, 39:COLOR HI,BG:PRINT"      === BUFFER OVERFLOW ===           ";:COLOR FG,BG:LOCATE ROW,COL:RESUME ' communications buffer overflow
9045 IF ERL=8020 THEN RESUME 8195 'checks whether documentation file is on disk
9050 IF ERR=53 AND ERL=3530 OR ERL=4055 THEN BEEP:PRINT"*** File not found. Try again.":RESUME 4110
9052 IF ERR=53 AND ERL=4125 OR ERL=4130 THEN BEEP:PRINT"*** No files on drive. Try again.":RESUME 4110
9055 IF ERR=61 THEN BEEP:PRINT:PRINT"=== DISK IS FULL ===":RESUME 3010
9060 IF ERL=4180 AND ERR=67 THEN BEEP:PRINT"*** Invalid drive. Try again.";          :RESUME 4174 ' a brute force way of testing for valid default drive
9062 IF ERL=4180 THEN RESUME NEXT ' if no disk in specified default drive
9065 IF ERR=67 THEN PRINT"*** Either too many files, or"
9070 IF CODE=19 OR CODE=20 OR CODE=47 THEN IF ERR=52 OR ERR=64 OR ERR=67 THEN BEEP:PRINT"*** Not a valid file name. Try again. ":RESUME 4110
9075 IF ERR=70 THEN BEEP:PRINT"*** Disk is write protected. Try again. ":RESUME 4110
9080 IF ERR=71 THEN BEEP:PRINT"*** Check disk drive.":RESUME 4110
9082 IF ERR=72 THEN BEEP:PRINT"*** Disk media error. Try again. ":RESUME 4110
9084 IF ERR=5 THEN RESUME NEXT 'attempts to recover from illegal function call
9085 IF ERR=10 THEN RESUME NEXT 'attempts to recover from duplicate definit.
9090 IF ERR=68 THEN BEEP:PRINT"=== DEVICE UNAVAILABLE ===":GOTO 8300 'no async
9900 '          (display error if not trapped)
9905 CLOSE
9910 BEEP:LOCATE 25,1:COLOR BG,FG:PRINT" === Sorry, NON-RECOVERABLE ERROR. Type 'run' + <ENTER> ===";SPACE$(20);:COLOR FG,BG:LOCATE 24,1
9915 ON ERROR GOTO 0
9999 ' End of program/726
```

## REMOVE.BAS

```bas
10 '    FILTERS  NON-ASCII CHARACTERS FROM A FILE
20 '    USEFUL FOR CLEANING UP NULLS AND CONTROL CHARACTERS FROM A
30 '    TRANSMITTED FILE.
40 '                                       RICHARD STECK  820511
50 '
60 '
70 CLOSE
80 DEFINT A-Z
90 ON ERR GOTO 470
100 KEY OFF
110 CLS:WIDTH 80: LOCATE 12,,1
120 INPUT "   ENTER NAME OF FILE TO BE FILTERED  "; F1$
130 PRINT
140 INPUT "   ENTER DESTINATION FILE NAME        "; F2$
150 IF F1$ = F2$ THEN GOTO 110
160 PRINT: PRINT
170 PRINT TAB(10), "Source file name is: "; TAB(33); F1$
180 PRINT
190 PRINT TAB(10), "Destination file name is: ";TAB(33); F2$
200 PRINT
210 INPUT " Is that correct(Y/N/Q)?  "; ANS$
220 IF (LEFT$(ANS$,1) = "Q") OR (LEFT$(ANS$,1) = "q" )  THEN STOP
230 IF NOT ((LEFT$(ANS$,1) = "Y") OR (LEFT$(ANS$,1) = "y") ) THEN GOTO 160
240 OPEN F1$ FOR INPUT AS #1
250 OPEN F2$ FOR OUTPUT AS #2
260 '
270 WHILE NOT EOF(1)
280    LINE INPUT #1,A$
290 '
300 PRINT  A$ :  '  DISPLAY STRING
310    GOSUB 370
320    PRINT #2,A$
330 WEND
340 CLOSE 1,2
350 STOP
360 '
370 '  FILTER OUT NULLS FROM A$
380 AA$= STRING$(255," ")
390 J = 1
400 FOR I = 1 TO LEN(A$)
410 TEST = ASC(MID$(A$,I,1))
420 IF TEST < 32 AND (TEST < 7 OR TEST > 13) THEN GOTO 430 ELSE MID$(AA$,J,1) =  MID$(A$,I,1) : J = J + 1
430 NEXT I
440 A$ = LEFT$(AA$,J-1)
450 RETURN
460 '
470 PRINT : PRINT "ERROR CONDITION  "; ERR; "  IN LINE NO. "; ERL: PRINT : STOP
```

## STARTREK.BAS

```bas
10  REM ==================>> STARTREK    IBM/PC  Version 1.1    14 Aug 82
100 CLS
105 RANDOMIZE (VAL(MID$(TIME$,7,2)))
110 KEY OFF
115 LOCATE 10,20 : COLOR 0,7
120 PRINT "  Do you want sound effects  [y/n] ?  " : COLOR 7,0
125 A$=INPUT$(1)
130 IF (A$="y") OR (A$="Y") THEN NOISE=1 ELSE NOISE=0
140 INPUT ;"  How big a galaxy do you want (1 to 8)" ; SZ
160 IF SZ < 1 THEN 140
165 IF SZ > 8 THEN 140
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
300 T9 = 5 * SZ
310 E0 = 3000                     ' Initial energy level
320 E=3000
330 P0 = 10
340 P = 10
350 S9 = 200
360 DEF FND(D)=SQR((K(I,1)-S1)^2+(K(I,2)-S2)^2)
370 Q1 = INT(RND*SZ+1)
380 Q2 = INT(RND*SZ+1)
390 REM ==  mat d(0)
400 S1 = INT(RND*8+1)
405 S2 = INT(RND*8+1)
410 FOR I = 1 TO 9
412   K(I,3) = 0
415 NEXT I
420 FOR I = 1 TO 5
422   D(I) = 0
425 NEXT I
428 REM =========================   Set up Galaxy  ============================
430 LOCATE 10,20: COLOR 16,7
440 PRINT"  Enterprise being prepared for battle  "
450 COLOR 7,0
460 B9 = 0
470 K9 = 0
480 FOR I = 1 TO SZ
490    FOR J = 1 TO SZ
500      R = RND*64
510      K3 = 0
520   IF R < 13.28 THEN K3 = 1
530   IF R <  7.28 THEN K3 = 2
540   IF R <  4.28 THEN K3 = 3
550   IF R <  3.2  THEN K3 = 4
560   IF R <  2.   THEN K3 = 5
565   IF R <  1.   THEN K3 = 6
570   IF R <  0.4   THEN K3 = 7
575   IF R <  0.2   THEN K3 = 8
580   IF R < 0.001  THEN K3 = 9
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
905 IF B9>0 GOTO 930
910    I = RND*SZ+0.5
915    J = I
920    G(I,J) = G(I,J)+10
925    B9=1
930 IF K9>5 GOTO 960
935    I = RND*SZ+0.5
940    J = RND*SZ+0.5
945    G(I,J) = G(I,J)+400
950    K9=K9+4
960 K0=K9
970 REM ==============================================================
975 GOTO 5450
980 REM ==============================================================
985 REM ======================>>  Set up Quadrant
990 CLS
1000 K3=0
1010 B3=0 
1020 S3=0 
1030 IF Q1<1 THEN 1120
1040   IF Q1>SZ THEN 1120
1050 IF Q2<1 THEN 1120
1060 IF Q2>SZ THEN 1120
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
1390 IF S4<1 THEN S4 = 1
1420 IF S5>8 THEN S5 = 8 
1450 IF S6<1 THEN S6 = 1
1480 IF S7>8 THEN S7 = 8
1510 FOR I = S4 TO S5
1520    FOR J = S6 TO S7
1530      IF Q(I,J)<>3 THEN 1580
1540      C$="DOCKED"
1550      E=3000
1560      P = 10
1570      GOTO 1670
1580    NEXT J
1590 NEXT I
1595 C$ = "GREEN"
1597 IF E<E0*0.1 THEN C$ = "YELLOW"
1600 IF K3>0 THEN C$ = "RED"
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
1770 GOTO 2400
1780 PRINT "*****  Short  Range  Sensor  Scan  *****           "
1790 PRINT "-------------------------------------------"
1800 FOR I = 1 TO 8
1810    FOR J = 1 TO 8
1820      IF "K"=Q$(Q(I,J)+1) THEN COLOR 23,0
1830       PRINT Q$(Q(I,J)+1);" ";
1840      COLOR 7,0
1850    NEXT J
1860    PRINT "   ";
1870    IF I = 1 THEN PRINT "Stardate          ";T
1880    IF I = 2 THEN 2230
1890    IF I = 3 THEN PRINT "Quadrant          ";Q1;Q2
1900    IF I = 4 THEN PRINT "Sector            ";S1;S2
1910    IF I = 5 THEN PRINT "Energy            ";E
1920    IF I = 6 THEN PRINT "Photon Torpedoes  ";P;STRING$(5,32)
1930    IF I = 7 THEN PRINT "Klingons left     ";K9;STRING$(5,32)
1940    IF I = 8 THEN PRINT STRING$(25,32)
1950 REM ===========================>>  status
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
2130 LOCATE 9,50 : PRINT "               3      "
2140 LOCATE 10,50: PRINT "           4   |   2  "
2150 LOCATE 11,50: PRINT "             \ | /    "
2160 LOCATE 12,50: PRINT "          5--- * ---1 "
2170 LOCATE 13,50: PRINT "             / | \    "
2180 LOCATE 14,50: PRINT "           6   |   8  "
2190 LOCATE 15,50: PRINT "               7      "
2200 IF SSW=1 THEN RETURN ELSE GOTO 2400
2230 PRINT "Condition         ";
2240 IF "RED"=C$ THEN COLOR 23,0
2250 PRINT " "+C$
2260 COLOR 7,0
2270 GOTO 1970
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
3330 IF Q1 > SZ THEN Q1 = SZ
3360 IF Q1 < 1 THEN Q1 = 1      
3390 Q2 = INT(Q2+W1*X2+(Y-0.5)/8)
3400 IF Q2 > SZ THEN Q2 = SZ
3430 IF Q1 < 1 THEN Q2 = 1
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
3710       IF I > SZ THEN 3750
3720       IF J < 1 THEN 3750
3730       IF J > SZ THEN 3750
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
5260 GOTO 5360
5270 REM ==========================>>  Win game
5280 GOSUB 6680
5290 PRINT "It is Stardate ";T
5300 PRINT "  The last Klingon battle cruiser in the galaxy has been destroyed."
5310 PRINT "  The federation has been saved."
5320 PRINT " "
5330 PRINT "  You have been promoted to admiral."
5340 PRINT K0;" Klingons in ";T-T0+1;" years"
5350 PRINT " Your rating = ";INT(K0/(T-T0+1)*1000)
5360 PRINT
5370 PRINT "Do you want to play again?  (Y/N)" : COLOR 7,0
5380 A$=INPUT$(1)
5385 IF (A$="y") OR (A$="Y") THEN 250
5390 STOP
5400 REM =======================>> Random Number generator
5410 R1=INT(RND*8+1)
5420 R2=INT(RND*8+1)
5430 IF Q(R1,R2)<>0 THEN 5410
5440 RETURN
5450 REM =================>> Opening instructions
5460 CLS : LOCATE 5,1
5470 PRINT "Orders:                                  Stardate: ";T
5480 GOSUB 6720
5484 PRINT "These are the voyages of the starship Enterprise - "
5486 PRINT "It's mission: to explore strange new worlds, to    "
5488 PRINT "boldly go where no one has ever gone before.       "
5490 PRINT
5498 PRINT
5500 PRINT "As commander of the Starship ENTERPRISE,"
5510 PRINT "your mission is to rid the galaxy of the deadly Klingon menace"
5520 PRINT "To do this, you must destroy the Klingon invasion force of ";K9;
5530 PRINT " battle"
5540 PRINT "cruisers.  You have ";T9;" solar years to complete your mission"
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
5690 CHAIN MERGE "b:startrek.how",5700,ALL
5700 GOSUB 50000
5710 CHAIN MERGE "b:startrek.dum",5720,ALL,DELETE 50000-61600
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

## SUPRTREK.BAS

```bas
10 REM INSTRUCTIONS FOR "STARTREK"
15 CLS:KEY OFF
20 FOR I=1 TO 8:PRINT:NEXT I
30 PRINT TAB(20);"*************************************
40 PRINT TAB(20);"*                                   *
50 PRINT TAB(20);"*                                   *
60 PRINT TAB(20);"*      * * SUPER STAR TREK * *      *
70 PRINT TAB(20);"*                                   *
80 PRINT TAB(20);"*                                   *
90 PRINT TAB(20);"*************************************
95 PRINT "                    PLEASE SHIFT KEYBOARD TO UPPER CASE.":PRINT
100 INPUT "                     DO YOU NEED INSTRUCTIONS (Y/N)";K$
101 IF K$="N" THEN 1170
105 CLS
110 PRINT"     INSTRUCTIONS FOR SUPER STAR TREK"
120 PRINT
130 PRINT"1. WHEN YOU SEE \COMMAND ?\ PRINTED, ENTER ONE OF THE LEGAL"
140 PRINT"   COMMANDS (NAV,SRS,LRS,PHA,TOR,SHE,DAM,COM, OR XXX)."
150 PRINT
160 PRINT"2. IF YOU SHOULD TYPE IN AN ILLEGAL COMMAND, YOU'LL GET A SHORT"
170 PRINT"   LIST OF THE LEGAL COMMANDS PRINTED OUT."
175 PRINT
180 PRINT"3. SOME COMMANDS REQUIRE YOU TO ENTER DATA (FOR EXAMPLE, THE `NAV'"
190 PRINT"   COMMAND COMES BACK WITH `COURSE (1-9) ?').  IF YOU TYPE IN"
200 PRINT"   ILLEGAL DATA (LIKE NEGATIVE NUMBERS), THAT COMMAND WILL BE"
210 PRINT"   ABORTED."
220 PRINT
230 PRINT"4. THE GALAXY IS DIVIDED INTO AN 8 X 8 QUADRANT GRID, AND EACH"
240 PRINT"   QUADRANT IS FURTHER DIVIDED INTO AN 8 X 8 SECTOR GRID."
250 PRINT
260 PRINT"5. YOU WILL BE ASSIGNED A STARTING POINT SOMEWHERE IN THE GALAXY"
270 PRINT"   TO BEGIN A TOUR OF DUTY AS COMMANDER OF THE STARSHIP"
280 PRINT"   \ENTERPRISE\; YOUR MISSION: TO SEEK AND DESTROY THE FLEET OF"
290 PRINT"   KLINGON WARSHIPS WHICH ARE MENACING THE UNITED FEDERATION OF"
300 PRINT"   PLANETS."
310 PRINT:PRINT
320 INPUT"PRESS ENTER TO CONTINUE",O
330 CLS
340 PRINT"6. YOU HAVE THE FOLLOWING COMMANDS AVAILABLE TO YOU AS CAPTAIN"
350 PRINT"   OF THE STARSHIP ENTERPRISE:"
360 PRINT
370 PRINT"   \NAV\ = WARP ENGINE CONTROL --"
380 PRINT"         COURSE IS IN A CIRCULAR NUMERICAL       4  3  2"
390 PRINT"         VECTOR ARRANGEMENT AS SHOWN.             . . ."
400 PRINT"         INTEGER AND REAL VALUES MAY BE            ..."
410 PRINT"         USED.  THUS COURSE 1.5 IS HALFWAY     5 -- * -- 1"
420 PRINT"         BETWEEN 1 AND 2.                          ..."
430 PRINT"                                                  . . ."
440 PRINT"         VALUES MAY APPROACH 9.0, WHICH          6  7  8"
450 PRINT"         ITSELF IS EQUIVALENT TO 1.0."
460 PRINT"                                                 COURSE"
470 PRINT"         ONE WARP FACTOR IS THE SIZE OF"
480 PRINT"         ONE QUADRANT.  THEREFORE, TO GET"
490 PRINT"         FROM QUADRANT 6,5 TO 5,5 YOU WOULD"
500 PRINT"         USE COURSE 3, WARP FACTOR 1."
510 PRINT:PRINT:PRINT
520 INPUT"PRESS ENTER TO CONTINUE",O
530 CLS
540 PRINT"   \SRS\ = SHORT RANGE SENSOR SCAN.  IT SHOWS YOU A SCAN OF YOUR"
550 PRINT"         PRESENT QUADRANT.  SENSOR SCREEN SYMBOLOGY IS AS FOLLOWS:"
560 PRINT"         <E> = YOUR STARSHIP'S POSITION"
570 PRINT"         +K+ = KLINGON BATTLE CRUISER"
580 PRINT"         >B< = FEDERATION STARBASE (REFUEL/REPAIR/RE-ARM HERE!)"
590 PRINT"          *  = STAR"
600 PRINT
610 PRINT"         A CONDENSED `STATUS REPORT' WILL ALSO BE PRESENTED."
620 PRINT
630 PRINT"   \LRS\ = LONG RANGE SENSOR SCAN.  THIS SHOWS CONDITIONS IN SPACE"
640 PRINT"         FOR ONE QUADRANT ON EACH SIDE OF THE ENTERPRISE (WHICH IS"
650 PRINT"         IN THE MIDDLE OF THE SCAN).  THE SCAN IS CODED IN THE FORM"
660 PRINT"         `###', WHERE THE UNITS DIGIT IS THE NUMBER OF STARS, THE"
670 PRINT"         TENS DIGIT IS THE NUMBER OF STARBASES, AND THE HUNDREDS"
680 PRINT"         DIGIT IS THE NUMBER OF KLINGONS."
690 PRINT
700 PRINT"         EXAMPLE:  207 = 2 KLINGONS, NO STARBASES, AND 7 STARS."
710 PRINT
720 PRINT"   \PHA\ = PHASER CONTROL.  IT ALLOWS YOU TO DESTROY THE KLINGON"
730 PRINT"         BATTLE CRUISERS BY ZAPPING THEM WITH SUITABLY LARGE UNITS"
740 PRINT"         OF ENERGY TO DEPLETE THEIR SHIELD POWER.  (REMBER, KLINGONS"
750 PRINT"         HAVE PHASERS TOO!"
760 PRINT
770 INPUT"PRESS ENTER TO CONTINUE",O
780 CLS
790 PRINT"   \TOR\ = PHOTON TORPEDO CONTROL.  TORPEDO COURSE IS THE SAME AS"
800 PRINT"         USED IN WARP ENFINE CONTROL.  IF YOU HIT THE KLINGON VESSEL"
810 PRINT"         HE IS DESTROYED AND CANNOT FIRE BACK.  IF YOU MISS, YOU ARE"
820 PRINT"         SUBJECT TO HIS PHASER FIRE.  IN EITHER CASE, YOU ARE ALSO"
830 PRINT"         SUBJECT TO THE PHASER FIRE OF ALL OTHER KLINGONS IN THE"
840 PRINT"         QUADRANT.  THE LIBRARY-COMPUTER (\COM\ COMMAND) HAS AN"
850 PRINT"         OPTION TO COMPUTE TORPEDO TRAJECTORY FOR YOU (OPTION 2)."
860 PRINT
870 PRINT"   \SHE\ = SHIELD CONTROL.  THIS DEFINES THE NUMBER OF ENERGY UNITS"
880 PRINT"         TO BE ASSIGNED TO THE SHIELDS.  ENERGY IS TAKEN FROM TOTAL"
890 PRINT"         SHIP'S ENERGY.  NOTE THAT THE STATUS DISPLAY `TOTAL ENERGY'"
900 PRINT"         INCLUDES SHIELD ENERGY."
910 PRINT
920 PRINT"   \DAM\ = DAMAGE CONTROL REPORT.  IT GIVES THE STATE OF REPAIR OF"
930 PRINT"         ALL DEVICES.  WHERE A NEGATIVE `STATE OF REPAIR' SHOWS THAT"
940 PRINT"         THE DEVICE IS TEMPORARILY DAMAGED.
950 PRINT:PRINT:PRINT:PRINT:PRINT
960 INPUT"PRESS ENTER TO CONTINUE",O
970 CLS
980 PRINT"   \COM\ = LIBRARY-COMPUTER.  IT CONTAINS SIX OPTIONS:"
990 PRINT"         OPTION 0 = CUMULATIVE GALACTIC RECORD, WHICH SHOWS COMPUTER"
1000 PRINT"                  MEMORY OF THE RESULTS OF ALL PREVIOUS SHORT AND"
1010 PRINT"                  LONG RANGE SENSOR SCANS."
1020 PRINT"         OPTION 1 = STATUS REPORT.  IT SHOWS THE NUMBER OF KLINGONS,"
1030 PRINT"                  STARDATES, AND STARBASES REMAINING IN THE GAME."
1040 PRINT"         OPTION 2 = PHOTON TORPEDO DATA, WHICH GIVES DIRECTIONS AND"
1050 PRINT"                  DISTANCE FROM THE ENTERPRISE TO ALL KLINGONS IN"
1060 PRINT"                  YOUR QUADRANT."
1070 PRINT"         OPTION 3 = STARBASE NAV DATA.  THIS TELLS DIRECTION AND"
1080 PRINT"                  DISTANCE TO ANY STARBASE WITHIN YOUR QUADRANT."
1090 PRINT"         OPTION 4 = DIRECTION/DISTANCE CALCULATOR.  IT ALLOWS YOU"
1100 PRINT"                  TO ENTER COORDINATES FOR DIRECTION/DISTANCE"
1110 PRINT"                  CALCULATIONS."
1120 PRINT"         OPTION 5 = GALACTIC `REGION NAME' MAP, WHICH PRINTS THE"
1130 PRINT"                  NAMES OF THE SIXTEEN MAJOR GALACTIC REGIONS"
1140 PRINT"                  REFERRED TO IN THE GAME."
1150 PRINT:PRINT:PRINT"END OF INSTRUCTIONS
1160 INPUT"DO YOU WISH TO SEE THEM AGAIN (Y/N)";K$
1165 IF K$="Y" OR K$="YES" THEN 105
1170 CLS
1180 REM *  *  *  *    RANDOMIZE RND FUNCTION    *  *  *  *
1190 CLEAR ,,2000
1200 CLOCK$=TIME$
1202 SEED$=MID$(CLOCK$,4,2)+MID$(CLOCK$,7,2)
1204 RANDOMIZE VAL(SEED$)
1230 CLS
1232 A$="MBL2N30N40.L8N39L4N37L8N35N34L2N33."
1234 PLAY A$
1236 B$="MBL4N31L2N30N42.L8N40L4N39L8N37N35L2N34."
1238 PLAY B$
1239 KEY OFF:COLOR 0,7
1250 PRINT "                                      .------^------,                          "
1260 PRINT "                    .---------------,  '---, ,-----'                           "
1270 PRINT "                    '----------, ,-'     / /                                   "
1280 PRINT "                          ,---' `-----------,                                  "
1290 PRINT "                           `-------------------'                               "
1295 COLOR 16,7
1300 PRINT "                THE STARSHIP   USS ENTERPRISE --- NCC-1701                     "
1310 COLOR 7,0
1320 Z$="                         "
1330 DIM G(8,8),C(9,2),K(3,3),N(3),Z(8,8),D(8)
1340 T=INT(RND(1)*20+20)*100:T0=T:T9=25+INT(RND(1)*10):D0=0:E=3000:E0=E
1350 P=10:P0=P:S9=200:S=0:B9=0:K9=0:X$="":X0$=" IS "
1351 DEF FND(D)=SQR((K(I,1)-S1)^2+(K(I,2)-S2)^2)
1352 DEF FNR(R)=INT(RND(R)*7.98+1.01)
1355 REM **********  SET FUNCTION KEYS  **********
1356 KEY 1,  "NAV"+CHR$(13)
1357 KEY 2,  "SRS"+CHR$(13)
1358 KEY 3,  "LRS"+CHR$(13)
1359 KEY 4,  "PHA"+CHR$(13)
1360 KEY 5,  "TOR"+CHR$(13)
1361 KEY 6,  "SHE"+CHR$(13)
1362 KEY 7,  "DAM"+CHR$(13)
1363 KEY 8,  "COM"+CHR$(13)
1364 KEY 9,  "HLP"+CHR$(13)
1365 KEY 10, "XXX"+CHR$(13)
1370 KEY ON
1380 REM **********  INITIALIZE ENTERPRISE'S POSITION  **********
1390 Q1=FNR(1):Q2=FNR(1):S1=FNR(1):S2=FNR(1):WIND=RND(1)
1395 IF WIND>0.2 THEN WIND=0
1400 FOR I=1 TO 9:C(I,1)=0:C(I,2)=0:NEXT I
1410 C(3,1)=-1:C(2,1)=-0.72:C(4,1)=-0.72:C(4,2)=-0.72:C(5,2)=-1:C(6,2)=-0.72
1420 C(1,2)=1:C(2,2)=0.72:C(6,1)=0.72:C(7,1)=1:C(8,1)=0.72:C(8,2)=0.72:C(9,2)=1
1430 FOR I=1 TO 8:D(I)=0:NEXT I
1440 A1$="NAVSRSLRSPHATORSHEDAMCOMXXX"
1450 REM * * * * * *  SET UP WHAT EXISTS IN GALAXY  * * * * * *
1460 REM * * *  K3=# KLINGONS, B3=# STARBASES, S3=# STARS   * *
1470 FOR I=1 TO 8:FOR J=1 TO 8:K3=0:Z(I,J)=0:R1=RND(1)
1480 IF R1>0.98 THEN K3=3:K9=K9+3:GOTO 1510
1490 IF R1>0.95 THEN K3=2:K9=K9+2:GOTO 1510
1500 IF R1>0.8 THEN K3=1:K9=K9+1
1510 B3=0:IF RND(1)>0.96 THEN B3=1:B9=B9+1
1520 G(I,J)=K3*100+B3*10+FNR(1):NEXT J:NEXT I:IF K9>T9 THEN T9=K9+1
1530 IF B9<>0 THEN 1560
1540 IF G(Q1,Q2)<200 THEN G(Q1,Q2)=G(Q1,Q2)+100:K9=K9+1
1550 B9=1:G(Q1,Q2)=G(Q1,Q2)+10:Q1=FNR(1):Q2=FNR(1)
1560 K7=K9:IF B9<>1 THEN X$="S":X0$=" ARE "
1570 PRINT"   YOUR ORDERS ARE AS FOLLOWS:":PRINT
1580 PRINT"   DESTROY THE";K9;"KLINGON WARSHIPS WHICH HAVE INVADED THE"
1590 PRINT"   GALAXY BEFORE THEY CAN ATTACK FEDERATION HEADQUARTERS"
1600 PRINT"   ON STARDATE";T0+T9;".  THIS GIVES YOU";T9;"DAYS.  THERE";X0$
1610 PRINT"  "B9;"STARBASE"X$" IN THE GALAXY FOR RESUPPLYING YOUR SHIP."
1620 PRINT:PRINT
1630 INPUT "Hit RETURN KEY when ready to accept command.",K12
1631 FOR U=1 TO 300: NEXT U
1632 CLS
1633 I=RND(1):IF INP(1)=13 THEN 1633
1640 REM  * * * * *   HERE ANY TIME NEW QUADRANT ENTERED   * * * * *
1650 Z4=Q1:Z5=Q2:K3=0:B3=0:S3=0:G5=0:D4=0.5*RND(1):Z(Q1,Q2)=G(Q1,Q2)
1660 IF Q1<1 OR Q1>8 OR Q2<1 OR Q2>8 THEN 1760
1670 GOSUB 11000:PRINT:PRINT:IF T0<>T THEN 1700
1680 PRINT"YOUR MISSION BEGINS WITH YOUR STARSHIP LOCATED IN THE GALACTIC"
1690 PRINT"QUADRANT, `";G2$;"'.":M$=INPUT$(1):GOTO 1710
1700 PRINT"NOW ENTERING ";G2$;" QUADRANT . . ."
1710 PRINT:K3=INT(G(Q1,Q2)*0.01):B3=INT(G(Q1,Q2)*0.1)-10*K3
1720 S3=G(Q1,Q2)-100*K3-10*B3:IF K3=0 THEN 1750
1725 FOR I=1 TO 20:PLAY "MBL16N10N30":NEXT I
1730 PRINT"COMBAT AREA      CONDITION RED"
1732 DEF SEG=&HB000:FOR RT=1 TO 61 STEP 2
1734 POKE 3520+RT,&H8F:NEXT RT:DEF SEG
1736 IF S>200 THEN 1750
1740 PRINT"   SHIELDS DANGEROUSLY LOW"
1750 FOR I=1 TO 3:K(I,1)=0:K(I,2)=0:NEXT I
1760 FOR I=1 TO 3:K(I,3)=0:NEXT I:Q$=Z$+Z$+Z$+Z$+Z$+Z$+Z$+LEFT$(Z$,17)
1770 REM  * *  POSITION ENTERPRISE IN QUADRANT, THEN PLACE "K3" KLINGONS,  * *
1780 REM  * *  "B3" STARBASES, AND "S3" STARS ELSEWHERE.                   * *
1790 A$="<E>":Z1=S1:Z2=S2:GOSUB 10780:IF K3<1 THEN 1820
1800 FOR I=1 TO K3:GOSUB 10750:A$="+K+":Z1=R1:Z2=R2
1810 GOSUB 10780:K(I,1)=R1:K(I,2)=R2:K(I,3)=S9*(0.5*RND(1)):NEXT I
1820 IF B3<1 THEN 1840
1830 GOSUB 10750:A$=">B<":Z1=R1:B4=R1:Z2=R2:B5=R2:GOSUB 10780
1840 FOR I=1 TO S3:GOSUB 10750:A$=" * ":Z1=R1:Z2=R2:GOSUB 10780:NEXT I
1850 GOSUB 6000
1860 IF S+E>10 THEN IF E>10 OR D(7)>=0 THEN 1910
1870 PRINT:PRINT"** FATAL ERROR **   YOU'VE JUST STRANDED YOUR SHIP IN SPACE"
1880 PRINT"YOU HAVE INSUFFICIENT MANEUVERING ENERGY,";
1890 PRINT" AND SHIELD CONTROL":PRINT"IS PRESENTLY INCAPABLE OF CROSS";
1900 PRINT"-CIRCUITING TO ENGINE ROOM!!":GOTO 5860
1910 INPUT"  COMMAND?";A$
1920 FOR I=1 TO 9:IF LEFT$(A$,3)<>MID$(A1$,3*I-2,3) THEN 1940
1930 ON I GOTO 2500,1850,4000,4090,4700,5500,5600,6500,5890
1940 NEXT I:PRINT"   ENTER ONE OF THE FOLLOWING:"
1950 PRINT"     NAV  (TO SET COURSE)"
1960 PRINT"     SRS  (FOR SHORT RANGE SENSOR SCAN)"
1970 PRINT"     LRS  (FOR LONG RANGE SENSOR SCAN)"
1980 PRINT"     PHA  (TO FIRE PHASERS)"
1990 PRINT"     TOR  (TO FIRE PHOTON TORPEDOES)"
2000 PRINT"     SHE  (TO RAISE OR LOWER SHIELDS)"
2010 PRINT"     DAM  (FOR DAMAGE CONTROL REPORTS)"
2020 PRINT"     COM  (TO CALL ON LIBRARY-COMPUTER)"
2030 PRINT"     XXX  (TO RESIGN YOUR COMMAND)":PRINT:GOTO 1860
2040 REM *  *  *  *  COURSE CONTROL BEGINS HERE  *  *  *  *
2500 INPUT"COURSE (1-9)";C1:IF C1=9 THEN C1=1
2510 IF C1>=1 AND C1<9 THEN 2530
2520 PRINT"   LT. SULU REPORTS, `INCORRECT COURSE DATA, SIR!'":GOTO 1860
2530 X$="8":IF D(1)<0 THEN X$="0.2"
2540 PRINT"WARP FACTOR (0-";X$;")";:INPUT W1:IF D(1)<0 AND W1>0.2 THEN 2590
2545 FOR U=1 TO 100:NEXT U:CLS:GOSUB 12500
2550 IF W1>0 AND W1<=8 THEN 2600
2560 IF W1=0 THEN 1860
2570 PRINT"   CHIEF ENGINEER SCOTT REPORTS, `THE ENGINES WON'T TAKE";
2580 PRINT" WARP ";W1;"!'":GOTO 1860
2590 PRINT"WARP ENGINES ARE DAMAGED.  MAXIUM SPEED = WARP 0.2":GOTO 1860
2600 N=INT(W1*8+0.5):IF E-N>=0 THEN 2810
2610 PRINT"ENGINEERING REPORTS   `INSUFFICIENT ENERGY AVAILABLE"
2620 PRINT"                       FOR MANEUVERING AT WARP";W1;"!'"
2630 IF S<N-E OR D(7)<0 THEN 1860
2640 PRINT"DEFLECTOR CONTROL ROOM ACKNOWLEGES";S;"UNITS OF ENERGY"
2650 PRINT"                         PRESENTLY DEPLOYED TO SHIELDS."
2790 GOTO 1860
2800 REM *  *  *  *  KLINGONS MOVE/FIRE ON MOVING STARSHIP  *  *  *  *
2810 FOR I=1 TO K3:IF K(I,3)=0 THEN 2840
2820 A$="   ":Z1=K(I,1):Z2=K(I,2):GOSUB 10780:GOSUB 10750
2830 K(I,1)=Z1:K(I,2)=Z2:A$="+K+":GOSUB 10780
2840 NEXT I:GOSUB 5760:D1=0:D6=W1:IF W1>=1 THEN D6=1
2850 FOR I=1 TO 8:IF D(I)>=0 THEN 2910
2860 D(I)=D(I)+D6:IF D(I)>-0.1 AND D(I)<0 THEN D(I)=-0.1:GOTO 2910
2880 IF D(I)<0 THEN 2910
2890 IF D1<>1 THEN D1=1:PRINT"DAMAGE CONTROL REPORT:  ";
2900 PRINT TAB(8);:R1=I:GOSUB 10840:PRINT G2$;" REPAIR COMPLETED."
2910 NEXT I:IF RND(1)>0.2 THEN 2980
2920 R1=FNR(1):IF RND(1)>=0.6 THEN 2950
2930 D(R1)=D(R1)-(RND(1)*5+1):PRINT"DAMAGE CONTROL REPORT:  ";
2940 GOSUB 10840:PRINT G2$;" DAMAGED":PRINT:GOTO 2980
2950 D(R1)=D(R1)+RND(1)*3+1:PRINT"DAMAGE CONTROL REPORT:  ";
2960 GOSUB 10840:PRINT G2$;" STATE OF REPAIR IMPROVED":PRINT
2970 REM *  *  *  *  *  BEGIN MOVING STARSHIP  *  *  *  *  *
2980 S1=S1+0.5:S2=S2+0.5
2982 A$="   ":Z1=INT(S1):Z2=INT(S2):GOSUB 10780
2985 WIND=RND(1):IF WIND>0.3 THEN WIND=0
2990 X1=-SIN((C1-1)*0.7853982):X=S1:Y=S2
3000 X2=COS((C1-1)*0.7853981):Q4=Q1:Q5=Q2
3010 FOR I=1 TO N:S1=S1+X1:S2=S2+X2
3011 IF S1<1 OR S1>=9 OR S2<1 OR S2>=9 THEN 3100
3013 S8=INT(S1)*24+INT(S2)*3-26:IF MID$(Q$,S8,2)="  " THEN 3030
3016 S1=INT(S1-X1):S2=INT(S2-X2):PRINT"WARP ENGINES SHUT DOWN AT ";
3020 PRINT"SECTOR";S1;",";S2;"DUE TO BAD NAVAGATION":GOTO 3040
3030 NEXT I:S1=INT(S1):S2=INT(S2)
3040 A$="<E>":Z1=INT(S1):Z2=INT(S2):GOSUB 10780:GOSUB 3270:T8=1:GOSUB 12000
3050 IF W1<1 THEN T8=0.1*INT(10*W1)
3060 T=T+T8:IF T>T0+T9 THEN 5860
3070 REM *  *  *  *  SEE IF DOCKED, THEN GET COMMAND  *  *  *  *
3080 GOTO 1850
3090 REM *  *  *  *  *  EXCEEDED QUADRANT LIMITS  *  *  *  *  *
3100 X=8*Q1+X+N*X1:Y=8*Q2+Y+N*X2:Q1=INT(X/8):Q2=INT(Y/8):S1=INT(X-Q1*8)
3110 S2=INT(Y-Q2*8):IF S1=0 THEN Q1=Q1-1:S1=8
3120 IF S2=0 THEN Q2=Q2-1:S2=8
3130 X5=0:IF Q1<1 THEN X5=1:Q1=1:S1=1
3140 IF Q1>8 THEN X5=1:Q1=8:S1=8
3150 IF Q2<1 THEN X5=1:Q2=1:S2=1
3160 IF Q2>8 THEN X5=1:Q2=8:S2=8
3170 IF X5=0 THEN 3240
3180 PRINT"LT. UHURA REPORTS MESSAGE FROM STARFLEET COMMAND:"
3190 PRINT"  `PERMISSION TO ATTEMPT CROSSING OF GALACTIC PERIMETER"
3200 PRINT"  IS HEREBY *DENIED*.  SHUT DOWN YOUR ENGINES.'":GOSUB 12000
3210 PRINT"CHIEF ENGINEER SCOTT REPORTS  `WARP ENGINES SHUT DOWN"
3220 PRINT"  AT SECTOR";S1;",";S2;"OF QUADRANT";Q1;",";Q2;".'":GOSUB 12000
3230 IF T>T0+T9 THEN 5860
3240 IF 8*Q1+Q2=8*Q4+Q5 THEN 3060
3250 T=T+1:GOSUB 3270:GOSUB 1650
3260 REM *  *  *  *  *  *  MANEUVER ENERGY S/R  *  *  *  *  *  *
3270 E=E-N-10:IF E>=0 THEN RETURN
3280 PRINT"SHIELD CONTROL SUPPLIES ENERGY TO COMPLETE THE MANEUVER."
3290 S=S+E:E=0:IF S<=0 THEN S=0
3300 RETURN
3990 REM *  *  *  *  *  LONG RANGE SENSOR SCAN CODE  *  *  *  *  *
4000 IF D(3)<0 THEN PRINT"LONG RANGE SENSORS ARE INOPERABLE":GOTO 1860
4010 PRINT"LONG RANGE SCAN FOR QUADRANT";Q1;",";Q2
4020 O1$="-------------------":PRINT O1$
4030 FOR I=Q1-1 TO Q1+1:N(1)=-1:N(2)=-2:N(3)=-3:FOR J=Q2-1 TO Q2+1
4040 IF I>0 AND I<9 AND J>0 AND J<9 THEN N(J-Q2+2)=G(I,J):Z(I,J)=G(I,J)
4050 NEXT J:FOR L=1 TO 3:PRINT": ";:IF N(L)<0 THEN PRINT"*** ";:GOTO 4070
4060 PRINT RIGHT$(STR$(N(L)+1000),3);" ";
4070 NEXT L:PRINT":":PRINT O1$:NEXT I:GOTO 1860
4080 REM *  *  *  *  *  PHASER CONTROL CODE BEGINS HERE  *  *  *  *  *
4090 IF D(4)<0 THEN PRINT"PHASERS INOPERATIVE":GOTO 1860
4100 IF K3>0 THEN GOTO 4130
4110 PRINT"SCIENCE OFFICER SPOCK REPORTS  `SENSORS SHOW NO ENEMY SHIPS"
4120 PRINT"                                IN THIS QUADRANT'":GOTO 1860
4130 IF D(8)<0 THEN PRINT"COMPUTER FAILURE HAMPERS ACCURACY"
4140 PRINT"PHASERS LOCKED ON TARGET;  ";
4150 PRINT"ENERGY AVAILABLE =";E;"UNITS"
4160 INPUT"NUMBER OF UNITS TO FIRE";X:IF X<=0 THEN 1860
4170 IF E-X<0 THEN 4150
4172 PLAY "MBN1......"
4180 E=E-X:IF D(7)<0 THEN X=X*RND(1)
4190 H1=INT(X/K3):FOR I=1 TO 3:IF K(I,3)<=0 THEN 4270
4191 REM **********  SOUND EFFECTS FOR PHASERS FIRING  **********
4192 FOR QQQ = 3000 TO 2500 STEP -10:SOUND QQQ,0.5:NEXT QQQ:SOUND 75,5
4200 H=INT((H1/(FND(0)+1))*(1+RND(1))):IF H>(0.15*K(I,3)) THEN 4220
4210 PRINT"SENSORS SHOW NO DAMAGE TO ENEMY AT ";K(I,1);",";K(I,2):GOTO 4270
4220 K(I,3)=INT(K(I,3)-H):PRINT H;"UNIT HIT ON KLINGON AT SECTOR";K(I,1);",";
4230 PRINT K(I,2):IF K(I,3)<=0 THEN PRINT"*** KLINGON DESTROYED ***" ELSE 4240
4235 GOTO 4250
4240 PRINT"   (SENSORS SHOW";K(I,3);"UNITS REMAINING)":GOTO 4270
4250 K3=K3-1:K9=K9-1:Z1=K(I,1):Z2=K(I,2):A$="   ":GOSUB 10780
4260 K(I,3)=0:G(Q1,Q2)=G(Q1,Q2)-100:Z(Q1,Q1)=G(Q1,Q2):IF K9<=0 THEN 5960
4270 NEXT I:GOSUB 5760:GOTO 1860
4690 REM *  *  *  *  *  PHOTON TORPEDO CODE BEGINS HERE  *  *  *  *  *
4700 IF P<=0 THEN PRINT"ALL PHOTON TORPEDOES EXPENDED":GOTO 1860
4710 IF D(5)<0 THEN PRINT"PHOTON TUBES ARE NOT OPERATIONAL":GOTO 1860
4712 IF WIND=0 THEN 4720
4714 PRINT:PRINT"  SENSORS DETECT STELLAR WINDS OF FORCE"; INT(WIND*100)
4716 INPUT"  DO YOU WISH TO CANCEL THE COMMAND TO FIRE A TORPEDO (Y/N)";F$
4718 IF F$="Y" OR F$="YES" THEN 1860
4720 PRINT:INPUT"PHOTON TORPEDO COURSE (1-9)";C1:IF C1=9 THEN C1=1
4730 IF C1>=1 AND C1<9 THEN 4760
4740 PRINT"ENSIGN CHEKOV REPORTS,  `INCORRECT COURSE DATA, SIR!'"
4760 X1=-SIN((C1-1)*0.7853982)+WIND:E=E-2:P=P-1
4770 X2=COS((C1-1)*0.7853981)+WIND:X=S1:Y=S2
4780 REM **********  PHOTON SOUND EFFECTS  **********
4785 SOUND (X*Y*100),20
4790 PRINT"TORPEDO TRACK:"
4800 X=X+X1:Y=Y+X2:X3=INT(X+0.5):Y3=INT(Y+0.5)
4810 IF X3<1 OR X3>8 OR Y3<1 OR Y3>8 THEN 5010
4820 PRINT"               ";X3;",";Y3:A$="   ":Z1=X:Z2=Y:GOSUB 10940
4830 IF Z3<>0 THEN 4800
4840 A$="+K+":Z1=X:Z2=Y:GOSUB 10940:IF Z3=0 THEN 4890
4850 PRINT"*** KLINGON DESTROYED ***":K3=K3-1:K9=K9-1:IF K9<=0 THEN 5960
4860 FOR I=1 TO 3:IF X3=K(I,1) AND Y3=K(I,2) THEN 4880
4870 NEXT I:I=3
4880 K(I,3)=0:GOTO 4990
4890 A$=" * ":Z1=X:Z2=Y:GOSUB 10940:IF Z3=0 THEN 4910
4900 PRINT"STAR AT";X3;",";Y3;"ABSORBED TORPEDO ENERGY.":GOSUB 5760:GOTO 1860
4910 A$=">B<":Z1=X:Z2=Y:GOSUB 10940:IF Z3=0 THEN 4720
4920 PRINT"*** STARBASE DESTROYED ***":B3=B3-1:B9=B9-1
4930 IF B9>0OR K9>T-T0-T9 THEN 4970
4940 PRINT"THAT DOES IT, CAPTAIN!!  YOU ARE HEREBY RELIEVED OF COMMAND"
4950 PRINT"AND SENTENCED TO 00 STARDATES AT HARD LABOR ON CYGNUS 12!!"
4960 GOTO 5890
4970 PRINT"STARFLEET COMMAND REVIEWING YOUR RECORD TO CONSIDER"
4980 PRINT"COURT MARTIAL!":D0=0
4990 Z1=X:Z2=Y:A$="   ":GOSUB 10780
5000 G(Q1,Q2)=K3*100+B3*10+S3:Z(Q1,Q2)=G(Q1,Q2):GOSUB 5760:GOTO 1860
5010 PRINT"TORPEDO MISSED":GOSUB 5760:GOTO 1860
5490 REM *  *  *  *  *  *  SHIELD CONTROL  *  *  *  *  *  *
5500 IF D(7)<0 THEN PRINT"SHIELD CONTROL INOPERABLE":GOTO 1860
5510 PRINT"ENERGY AVAILABLE =";E+S;:INPUT"      NUMBER OF UNITS TO SHIELDS";X
5520 IF X<0 OR S=X THEN PRINT"<SHIELDS UNCHANGED>":GOTO 1860
5530 IF X<=E+S THEN 5560
5540 PRINT"SHIELD CONTROL REPORTS  `THIS IS NOT THE FEDERATION TREASURY.'"
5550 PRINT"<SHIELDS UNCHANGED>":GOTO 1860
5560 E=E+S-X:S=X:PRINT"DEFLECTOR CONTROL ROOM REPORT:"
5570 PRINT"  `SHIELDS NOW AT";INT(S);"UNITS PER YOUR COMMAND.'":GOTO 1860
5590 REM *  *  *  *  *  *  DAMAGE CONTROL  *  *  *  *  *  *
5600 IF D(6)>=0 THEN 5720
5610 PRINT"DAMAGE CONTROL REPORT NOT AVAILABLE":IF D0=0 THEN 1860
5620 D3=0:FOR I=1 TO 8:IF D(I)<0 THEN D3=D3+0.1
5630 NEXT I:IF D3=0 THEN 1860
5640 PRINT:D3=D3+D4:IF D3>=1 THEN D3=0.9
5650 PRINT"TECHNICIANS STANDING BY TO EFFECT REPAIRS TO YOUR SHIP;"
5670 PRINT"ESTIMATED TIME TO REPAIR:";0.01*INT(100*D3);"STARDATES"
5680 INPUT"WILL YOU AUTHORIZE THE REPAIR ORDER (Y/N)";A$
5690 IF A$<>"Y" THEN 1860
5700 FOR I=1 TO 8:IF D(I)<0 THEN D(I)=0
5710 NEXT I:T=T+D3+0.1
5720 PRINT:PRINT"DEVICE             STATE OF REPAIR":FOR R1=1 TO 8
5730 GOSUB 10840:PRINT G2$;LEFT$(Z$,25-LEN(G2$));INT(D(R1)*100)*0.01
5740 NEXT R1:PRINT:IF D0<>0 THEN 5620
5750 GOTO 1860
5755 REM *  *  *  *  *  *  KLINGONS SHOOTING  *  *  *  *  *  *
5760 IF K3<=0 THEN RETURN
5770 IF D0<>0 THEN PRINT"STARBASE SHIELDS PROTECT THE ENTERPRISE":RETURN
5775 IF 0.2>RND(1) THEN RETURN
5780 FOR I=1 TO 3:IF K(I,3)<=0 THEN 5840
5785 H=INT((K(I,3)/FND(1))*(2+RND(1))):S=S-H:K(I,3)=K(I,3)/(3+RND(0))
5787 IF H<=0 THEN 5795
5788 REM ********** SOUND OF KLINGON ATTACK ON ENTERPRISE
5789 FOR QQQ = 300 TO 250 STEP -10:SOUND QQQ,1:SOUND QQQ+5,1:SOUND QQQ-5,1
5790 NEXT QQQ:SOUND 50,20
5791 PRINT H;"UNIT HIT ON ENTERPRISE FROM SECTOR";K(I,1);",";K(I,2)
5795 IF S<=0 THEN 5870
5800 PRINT"      <SHIELDS DOWN TO";S;"UNITS>":IF H<20 THEN 5840
5810 IF RND(1)>0.6 OR H/S<=0.02 THEN 5840
5820 R1=FNR(1):D(R1)=D(R1)-H/S-0.5*RND(1):GOSUB 10840
5830 PRINT"DAMAGE CONTROL REPORTS `";G2$;" DAMAGED BY THE HIT'"
5840 NEXT I:RETURN
5850 REM * * * * * *  END OF GAME  * * * * * *
5860 PRINT"IT IS STARDATE";T:GOTO 5890
5870 PRINT:PRINT"THE ENTERPRISE HAS BEEN DESTROYED.  THE FEDERATION ";
5880 PRINT"WILL BE CONQUERED":GOTO 5860
5890 PRINT"THERE WERE";K9;"KLINGON BATTLE CRUISERS LEFT AT"
5900 PRINT"THE END OF YOUR MISSION."
5910 PRINT:PRINT:IF B9=0 THEN 5950
5920 PRINT"THE FEDERATION IS IN NEED OF A NEW STARSHIP COMMANDER"
5930 PRINT"FOR A SIMILAR MISSION -- IF THERE IS A VOLUNTEER,"
5940 INPUT"LET HIM STEP FORWARD AND ENTER `AYE'",A$:IF A$="AYE" THEN 10
5950 END
5960 PRINT"CONGRATULATIONS CAPTAIN!  THE LAST KLINGON BATTLE CRUISER"
5970 PRINT"MENACING THE FEDERATION HAS BEEN DESTROYED.":PRINT
5980 PRINT"YOUR EFFICIENCY RATING IS";INT(100*(K7/(T-T0))^2):GOTO 5910
5990 REM *  *  *  SHORT RANGE SENSOR SCAN AND STARTUP SUBROUTINE  *  *  *
6000 FOR I=S1-1 TO S1+1:FOR J=S2-1 TO S2+1
6005 FOR U=1 TO 100:NEXT U:CLS
6010 IF INT(I+0.5)<1 OR INT(I+0.5)>8 OR INT(J+0.5)<1 OR INT(J+0.5)>8 THEN 6030
6020 A$=">B<":Z1=I:Z2=J:GOSUB 10940:IF Z3=1 THEN 6040
6030 NEXT J:NEXT I:D0=0:GOTO 6060
6040 D0=1:C$="DOCKED":E=E0:P=P0
6050 PRINT"SHIELDS DROPPED FOR DOCKING PURPOSES":S=0:GOTO 6080
6060 IF K3>0 THEN C$="*RED*":GOTO 6080
6070 C$="GREEN":IF E<E0*0.1 THEN C$="YELLOW"
6080 IF D(2)>=0 THEN 6100
6090 PRINT:PRINT"*** SHORT RANGE SENSORS ARE OUT ***":PRINT:RETURN
6100 O1$="---------------------------------":PRINT O1$:FOR I=1 TO 8
6110 FOR J=(I-1)*24+1 TO (I-1)*24+22 STEP 3:PRINT" ";MID$(Q$,J,3);:NEXT J
6120 ON I GOTO 6130,6140,6150,6160,6170,6180,6190,6200
6130 PRINT"        STARDATE          ";INT(T*10)*0.1:GOTO 6210
6140 PRINT"        CONDITION          ";C$:GOTO 6210
6150 PRINT"        QUADRANT          ";Q1;",";Q2:GOTO 6210
6160 PRINT"        SECTOR            ";S1;",";S2:GOTO 6210
6170 PRINT"        PHOTON TORPEDOES  ";INT(P):GOTO 6210
6180 PRINT"        TOTAL ENERGY      ";INT(E+S):GOTO 6210
6190 PRINT"        SHIELDS           ";INT(S):GOTO 6210
6200 PRINT"        KLINGONS REMAINING";INT(K9)
6210 NEXT I:PRINT O1$:RETURN
6490 REM *  *  *  *  *  *  LIBRARY COMPUTER CODE  *  *  *  *  *  *
6500 IF D(8)<0 THEN PRINT"COMPUTER DISABLED":GOTO 1860
6510 INPUT"COMPUTER ACTIVE AND AWAITING COMMAND";A:IF A<0 THEN 1860
6520 PRINT:H8=1:ON A+1 GOTO 6630,6780,6870,7130,6930,6610
6530 PRINT"FUNCTIONS AVAILABLE FROM LIBRARY-COMPUTER:"
6540 PRINT"   0 = CUMULATIVE GALACTIC RECORD"
6550 PRINT"   1 = STATUS REPORT"
6560 PRINT"   2 = PHOTON TORPEDO DATA"
6570 PRINT"   3 = STARBASE NAV DATA"
6580 PRINT"   4 = DIRECTION/DISTANCE CALCULATOR"
6590 PRINT"   5 = GALAXY `REGION NAME' MAP":PRINT:GOTO 6510
6600 REM *  *  *  *  SETUP TO CHANGE CUM GAL RECORD TO GALAXY MAP  *  *  *  *
6610 CLS:PRINT:PRINT
6615 H8=0:G5=1:PRINT"                        THE GALAXY":GOTO 6680
6620 REM *  *  *  *  *  *  CUM GALACTIC RECORD  *  *  *  *  *  *
6630 CLS:INPUT "DO YOU WANT A HARDCOPY?  IS PRINTER ON (Y/N)";A$
6640 IF A$="Y" THEN 13000
6650 PRINT:PRINT"        ";
6660 PRINT"COMPUTER RECORD OF GALAXY FOR QUADRANT";Q1;",";Q2
6670 PRINT
6680 O1$="        1     2     3     4     5     6     7     8"
6690 PRINT "   ----- ----- ----- ----- ----- ----- ----- -----"
6700 PRINT O1$:FOR I=1 TO 8:PRINT I;:IF H8=0 THEN 6740
6710 FOR J=1 TO 8:PRINT"   ";:IF Z(I,J)=0 THEN PRINT"***";:GOTO 6730
6720 PRINT RIGHT$(STR$(Z(I,J)+1000),3);
6730 NEXT J:GOTO 6760
6740 Z4=I:Z5=1:GOSUB 11000:J0=INT(15-0.5*LEN(G2$)):PRINT TAB(J0);G2$;
6750 Z5=5:GOSUB 11000:J0=INT(39-0.5*LEN(G2$)):PRINT TAB(J0);G2$;
6760 PRINT:PRINT O1$:NEXT I
6761 DEF SEG=&HB000:LET SPOT=(479+Q1*320+Q2*12)
6763 FOR RT=2 TO 6 STEP 2:POKE SPOT+RT,&H8F:NEXT RT:DEF SEG
6765 GOTO 1860
6770 REM *  *  *  *  *  *  STATUS REPORT  *  *  *  *  *  *
6780 CLS:PRINT:PRINT:PRINT
6785 PRINT "   STATUS REPORT:":X$="":IF K9>1 THEN X$="S"
6790 PRINT"KLINGON";X$;" LEFT: ";K9
6800 PRINT"MISSION MUST BE COMPLETED IN";0.1*INT((T0+T9-T)*10);"STARDATES"
6810 X$="S":IF B9<2 THEN X$="":IF B9<1 THEN 6840
6820 PRINT"THE FEDERATION IS MAINTAINING";B9;"STARBASE";X$;" IN THE GALAXY"
6830 GOTO 5600
6840 PRINT"YOUR STUPIDITY HAS LEFT YOU ON YOUR ON IN"
6850 PRINT"  THE GALAXY -- YOU HAVE NO STARBASES LEFT!":GOTO 5600
6860 REM *  *  *  *  TORPEDO, BASE NAV, D/D CALCULATOR  *  *  *  *
6870 IF K3<=0 THEN 4110
6880 X$="":IF K3>1 THEN X$="S"
6890 PRINT"FROM ENTERPRISE TO KLINGON BATTLE CRUISER";X$
6900 H8=0:FOR I=1 TO 3:IF K(I,3)<=0 THEN 7120
6910 W1=K(I,1):X=K(I,2)
6920 C1=S1:A=S2:GOTO 6970
6930 PRINT"DIRECTION/DISTANCE CALCULATOR:"
6940 PRINT"YOU ARE AT QUADRANT ";Q1;",";Q2;" SECTOR ";S1;",";S2
6950 PRINT"PLEASE ENTER":INPUT"  INITIAL COORDINATES (X,Y)";C1,A
6960 INPUT"  FINAL COORDINATES (X,Y)";W1,X
6970 X=X-A:A=C1-W1:IF X<0 THEN 7040
6980 IF A<0 THEN 7060
6990 IF A>0 THEN 7010
7000 IF A=0 THEN C1=5:GOTO 7020
7010 C1=1
7020 IF ABS(A)<=ABS(X) THEN 7035
7030 PRINT "DIRECTION =";C1+(((ABS(A)-ABS(X))+ABS(A))/ABS(A)):GOTO 7110
7035 PRINT "DIRECTION =";C1+(ABS(A)/ABS(X)):GOTO 7110
7040 IF A>0 THEN C1=3:GOTO 7070
7050 IF X<>0 THEN C1=5:GOTO 7020
7060 C1=7
7070 IF ABS(A)>=ABS(X) THEN 7090
7080 PRINT "DIRECTION =";C1+(((ABS(X)-ABS(A))+ABS(X))/ABS(X)):GOTO 7110
7090 PRINT "DIRECTION =";C1+(ABS(X)/ABS(A))
7110 PRINT"DISTANCE =";SQR(X^2+A^2):IF H8=1 THEN 1860
7120 NEXT I:GOTO 1860
7130 IF B3<>0 THEN PRINT"FROM ENTERPRISE TO STARBASE:":W1=B4:X=B5:GOTO 6920
7140 PRINT"MR. SPOCK REPORTS,  `SENSORS SHOW NO STARBASES IN THIS";
7150 PRINT" QUADRANT.'":GOTO 1860
10740 REM * * * *  FIND EMPTY PLACE IN QUADRANT (FOR THINGS)  * * * *
10750 R1=FNR(1):R2=FNR(1):A$="   ":Z1=R1:Z2=R2:GOSUB 10940:IF Z3=0 THEN 10750
10760 RETURN
10770 REM * * * * * *  INSERT IN STRING ARRAY FOR QUADRANT  * * * * * *
10780 S8=INT(Z2-0.5)*3+INT(Z1-0.5)*24+1
10790 IF LEN(A$)<>3 THEN PRINT"ERROR . . . 10790":STOP
10800 IF S8=1 THEN Q$=A$+RIGHT$(Q$,189):RETURN
10810 IF S8=190 THEN Q$=LEFT$(Q$,189)+A$:RETURN
10820 Q$=LEFT$(Q$,S8-1)+A$+RIGHT$(Q$,190-S8):RETURN
10830 REM * * * * * *  PRINT DEVICE NAME  * * * * * *
10840 ON R1 GOTO 10850,10860,10870,10880,10890,10900,10910,10920
10850 G2$="WARP ENGINES":RETURN
10860 G2$="SHORT RANGE SENSORS":RETURN
10870 G2$="LONG RANGE SENSORS":RETURN
10880 G2$="PHASER CONTROL":RETURN
10890 G2$="PHOTON TUBES":RETURN
10900 G2$="DAMAGE CONTROL":RETURN
10910 G2$="SHIELD CONTROL":RETURN
10920 G2$="LIBRARY-COMPUTER":RETURN
10930 REM * * * * * *  STRING COMPARISON IN QUADRANT ARRAY  * * * * * *
10940 Z1=INT(Z1+0.5):Z2=INT(Z2+0.5):S8=(Z2-1)*3+(Z1-1)*24+1:Z3=0
10950 IF MID$(Q$,S8,3)<>A$ THEN RETURN
10960 Z3=1:RETURN
10970 REM * * * * *  QUADRANT NAME IN G2$ FROM Z4,Z5 (=Q1,Q2)  * * * * *
10980 REM * * * * *  CALL WITH G5=1 TO GET REGION NAME ONLY
11000 IF Z5<=4 THEN ON Z4 GOTO 11010,11020,11030,11040,11050,11060,11070,11080
11010 GOTO 11100
11020 G2$="ANTARES":GOTO 11190
11030 G2$="RIGEL":GOTO 11190
11040 G2$="PROCYON":GOTO 11190
11050 G2$="VEGA":GOTO 11190
11060 G2$="CANOPUS":GOTO 11190
11070 G2$="ALTAIR":GOTO 11190
11080 G2$="SAGITARIUS":GOTO 11190
11090 G2$="POLLUX":GOTO 11190
11100 ON Z4 GOTO 11110,11120,11130,11140
11110 G2$="SIRIUS":GOTO 11190
11120 G2$="DENEB":GOTO 11190
11130 G2$="CAPELLA":GOTO 11190
11140 G2$="BETELGEUSE":GOTO 11190
11150 G2$="ALDEBARAN":GOTO 11190
11160 G2$="REGULUS":GOTO 11190
11170 G2$="ARCTURUS":GOTO 11190
11180 G2$="SPICA"
11190 IF G5<>1 THEN ON Z5 GOTO 11210,11220,11230,11240,11210,11220,11230,11240
11200 RETURN
11210 G2$=G2$+" I":RETURN
11220 G2$=G2$+" II":RETURN
11230 G2$=G2$+" III":RETURN
11240 G2$=G2$+" IV":RETURN
12000 FOR U=1 TO 400:NEXT U:RETURN
12500 REM  **********  SOUND OF WARP ENGINE ENGAGING  **********
12510 PLAY "MB"
12520 FOR I = 37 TO 90:SOUND I,0.8:NEXT I:PLAY "MB"
12530 FOR I = 5000 TO 4000 STEP -40:SOUND I,0.2:NEXT I
12540 RETURN
13000 REM **********  PRINT REPORT TO LINE PRINTER  **********
13010 LPRINT:LPRINT "       ";
13020 LPRINT "COMPUTER RECORD OF GALAXY FOR QUADRANT";Q1;",";Q2:LPRINT
13030 O1$="       1     2     3     4     5     6     7     8"
13040 LPRINT "    ----- ----- ----- ----- ----- ----- ----- -----"
13050 LPRINT O1$:FOR I=1 TO 8:LPRINT I;:IF H8=0 THEN 13090
13060 FOR J=1 TO 8:LPRINT "   ";:IF Z(I,J)=0 THEN LPRINT "***";:GOTO 13080
13070 LPRINT RIGHT$(STR$(Z(I,J)+1000),3);
13080 NEXT J:GOTO 13110
13090 Z4=I:Z5=1:GOSUB 11000:J0=INT(15-0.5*LEN(G2$)):LPRINT TAB(J0);G2$;
13100 Z4=I:Z5=1:GOSUB 11000:J0=INT(15-0.5*LEN(G2$)):LPRINT TAB(J0);G2$;
13110 LPRINT:LPRINT O1$:NEXT I:LPRINT:GOTO 1860
```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0016

     Volume in drive A has no label
     Directory of A:\

    PC-TALK  BAS     35200   8-27-82   8:44a
    REMOVE   BAS      1280   8-25-82   2:17p
    LPCTALK  BAS       896   8-25-82   2:16p
    STARTREK DUM       128   3-22-82
    PC-TALK  DOC     41472   8-19-82  10:46a
    CHESS1   BAS     21473   8-30-82  12:50a
    SUPRTREK BAS     25600   9-01-82  12:30a
    MASTMIND BAS      3712   9-07-82
    STARTREK BAS     14208   8-22-82  10:31p
    STARTREK HOW      6144   3-22-82
    CRAPS    BAS      3328   9-06-82
    BREAKOUT BAS      2176   9-30-82   6:13p
    PC-TALK  DIR         0   7-16-83  12:00a
    PC-TALK  KEY         0   7-16-83  12:00a
    FILES016 TXT       979   5-29-87  10:20a
           15 file(s)     156596 bytes
                            1536 bytes free
