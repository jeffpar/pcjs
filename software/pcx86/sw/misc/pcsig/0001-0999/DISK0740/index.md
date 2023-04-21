---
layout: page
title: "PC-SIG Diskette Library (Disk #740)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0740/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0740"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "EASYMENU GAMES 3 OF 3 (ALSO 738, 739)"

    EASYMENU is a simple menu system with a few extra features that make
    your PC easier to use.  You record the commands you use to
    start an application, then let EASYMENU remember for you.  You can run
    any program at a keystroke or by clicking a mouse button.  It saves you
    time and keystrokes when you run your other computer programs, and lets
    you view useful notes and comments prior to running a program.  If you
    are new to computers, EASYMENU tells you about your computer hardware,
    amount of memory, number of access ports for printers and modems, the
    version of DOS you are using, and other useful information.  If you are
    more experienced, you might like to know that EASYMENU can run up to
    nine programs per menu, and that you can use batch files from within
    EASYMENU.
    File Descriptions:
    
    ASK      COM  Part of installation.
    AUTOEXEC NEW  Part of set-up program.
    AUTOEXEC ADD  Part of set-up program.
    COMM     MH   Help file.
    COMM     M    Menu file.
    CAPSON   COM  Turns caps lock on.
    CAPSOFF  COM  Turns caps lock off.
    DISK     M    Menu file.
    DEFAULT  MHH  Default help file.
    DATABASE MH   Help file.
    DATABASE M    Menu file.
    COPYFILE BAT  Batch file to copy files.
    CONTROL  MHH  Customizing help.
    CONTROL  EXE  Utility file.
    CONFIG   NEW  Part of set-up program.
    EASYMENU BAT  EASYMENU program start.
    EDIT     MHH  Menu editing help.
    EASYMENU TXT  EASYMENU documentation.
    NOBOOT   COM  Utility program.
    MAIN     M    Main menu file.
    INVOICE  TXT  Order form text file.
    INSTALL  BAT  Installation start.
    INFO     MHH  System information help.
    EDITHELP COM  Utility program.
    EDITHELP 000  Data file.
    EDITERR  MSG  Error message data file.
    YESBOOT  COM  Utility file.
    SWAPDIR  EXE  Utility file.
    SETUP    BAT  Part of installation.
    SAMPLE   M    Sample menu.
    READ     ME   Latest information.
    PRTSCON  COM  Turns printscreen on.
    NUMON    COM  Turns numlock on.
    NUMOFF   COM  Turns numlock off.
    PRTSCOFF COM  Turns printscreen off.
    PRINTER  MHH  Printer control help.
    PASSWORD EXE  Password program.
    OPTIONS  EXE  Control program.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## BACKGAM.BAS

{% raw %}
```bas
2430 KEY OFF:CLS:COLOR 0,7:LOCATE 1,30:KEY(10) ON:ON KEY(10) GOSUB 5000:PRINT" B A C K G A M M O N ":COLOR 7,0
2440 FOR X=1 TO 2:LOCATE 12,1:PRINT SPC(79):LOCATE 12,1:PRINT"Enter the name of player #" X;:PLAY "mbc":INPUT " - " ,A$(X):NEXT X
2450 DEFINT A,D-J,L-M,S-U,X-Z:GOSUB 59980:DIM A(25)
2460 LOCATE 12,1:PRINTSPC(79):LOCATE 5,10:PRINT"Your pips look like this:"
2462 LOCATE 7,30:PRINT A$(1) TAB(45) " - ▀▀▀":LOCATE 9,30:PRINT A$(2) TAB(45) " - ▀ ▀"
2470 LOCATE 25,1:PRINT "Press any key to continue";:PLAY "c":GOSUB 59990
2480 FOR X=0 TO 25:A(X)=0:NEXT X
2482 A(24)=2:A(19)=-5:A(17)=-3:A(13)=5:A(12)=-5:A(8)=3:A(6)=5:A(1)=-2
2500 GOSUB 2590:W=0:IF INT(RND*2+1)=2 THEN W=1
2510 LOCATE 25,1:PRINT SPC(79):LOCATE 25,1:PRINT A$(W+1);
2520 COLOR 15:PRINT"   1";:COLOR 7:PRINT"=ROLL DICE, ";:COLOR 15:PRINT"2";:COLOR 7:PRINT"=REDRAW BOARD, ";:COLOR 15:PRINT"3";:COLOR 7:PRINT"=NEW GAME";
2530 PLAY "c":GOSUB 59990:IF INSTR("123",IKEY$)=0 THEN 2530 ELSE X=VAL(IKEY$)
2540 ON X GOTO 2560, 2550, 2480:GOTO 2510
2550 GOSUB 2590:GOTO 2510
2560 L=INT(RND*6+1):M=INT(RND*6+1):D=2:IF L=M THEN D=4 ELSE IF L<M THEN SWAP L,M
2570 ON W+1 GOTO 2770, 3080
2580 PLAY "ae":LOCATE 25,1:PRINT SPC(79):LOCATE 25,1:PRINT"INVALID MOVE";:TIMEOUT=6:GOSUB 59950:RETURN
2590 CLS:FOR X=20 TO 70 STEP 4:FOR Y=3 TO 19:LOCATE Y,X:PRINT"║";:NEXT Y,X
2600 LOCATE 2,20:PRINT"╔═══╦═══╦═══╦═══╦═══╦═══╦═══╦═══╦═══╦═══╦═══╦═══╗";
2610 LOCATE 20,20:PRINT"╚═══╩═══╩═══╩═══╩═══╩═══╩═══╩═══╩═══╩═══╩═══╩═══╝";
2620 LOCATE 11,20:PRINT"╠═══╬═══╬═══╬═══╬═══╬═══╬═══╬═══╬═══╬═══╬═══╬═══╣";
2630 Y=24:FOR X=21 TO 65 STEP 4:LOCATE 1,X:PRINT Y;:Y1=25-Y:LOCATE 21,X:PRINT Y1;:Y=Y-1:NEXT X
2640 LOCATE 11,5:PRINT"ON BAR";:LOCATE 10,6:PRINT"▀ ▀";:LOCATE 12,6:PRINT"▀▀▀";
2650 LOCATE 9,6:PRINT A(0);:LOCATE 13,6:PRINT A(25);
2660 FOR X=24 TO 13 STEP -1
2670 IF A(X)=0 THEN 2710 ELSE  U=1:IF A(X)<0 THEN U=2
2680 FOR Z=1 TO ABS(A(X)):S=3+Z-1
2690 Y=(24-X)*4+21:LOCATE S,Y:IF U=1 THEN PRINT"▀▀▀"; ELSE PRINT"▀ ▀";
2700 NEXT Z
2710 NEXT X
2720 FOR X=1 TO 12:IF A(X)=0 THEN 2765
2730 U=1:IF A(X)<0 THEN U=2
2740 FOR Z=1 TO ABS(A(X)):S=20-Z
2750 Y=(X-1)*4+21:LOCATE S,Y:IF U=1 THEN PRINT"▀▀▀"; ELSE PRINT"▀ ▀";
2760 NEXT Z
2765 NEXT X:RETURN
2770 LOCATE 25,1:PRINT SPC(79);:LOCATE 25,1:PRINT A$(1) ", your roll is  ";:COLOR 15:PRINTL;:COLOR 7
2780 J=25:IF D>1 THEN COLOR 15:PRINT M;:COLOR 7
2790 IF A(25)>0 AND A(25-L)<-1 AND A(25-M)<-1 THEN 3070
2800 IF A(J)<1 THEN J=J-1:GOTO 2800
2810 E=0:FOR X=L+1 TO 25:IF A(X)>0 AND A(X-L)>-2 THEN E=1
2820 NEXT X:FOR X=M+1 TO 25:IF A(X)>0 AND A(X-M)>-2 THEN E=1
2830 NEXT X:IF E=1 THEN 2850 ELSE IF J>6 THEN 3070
2840 IF A(M)<1 AND A(L)<1 AND J>L THEN 3070
2850 IF A(25)>0 THEN F=25:LOCATE 25,40:COLOR 15:PRINT"FROM BAR ";:COLOR 7:GOTO 2880
2860 PLAY "d":LOCATE 25,40:COLOR 15:INPUT;"FROM-- ",IN$:COLOR 7:F=VAL(IN$):IF F<1 OR F>24 THEN 2940
2870 IF A(F)<1 THEN 2940
2880 PLAY "d":LOCATE 25,60:COLOR 15:INPUT;"TO-- ",IN$:COLOR 7:T=VAL(IN$)
2890 IF T=99 THEN 3020
2900 IF T<1 OR T>24 THEN 2940
2910 IF A(T)<-1 THEN 2940
2920 IF F-T=L THEN L=M:GOTO 2950
2930 IF F-T=M THEN M=L:GOTO 2950
2940 GOSUB 2580:GOTO 2770
2950 A(F)=A(F)-1:IF A(T)=-1 THEN A(0)=A(0)+1:A(T)=0
2960 A(T)=A(T)+1
2970 GOSUB 3430:D=D-1:E=0:FOR X=1 TO 25
2980 IF A(X)<1 THEN E=E+1
2990 NEXT X:IF E=25 THEN 3580
3000 IF D=0 THEN W=1:GOTO 2510
3010 GOTO 2770
3020 IF J>6 THEN 2940
3030 IF F=M OR M>J AND F=J THEN M=L:GOTO 3060
3040 IF F=L OR L>J AND F=J THEN L=M:GOTO 3060
3050 GOTO 2940
3060 A(F)=A(F)-1:GOTO 2970
3070 PLAY "ae":TIMEOUT=3:GOSUB 59950:LOCATE 25,1:PRINT SPC(79);:LOCATE 25,1:PRINT"You can't move!";:W=ABS(W-1):TIMEOUT=6:GOSUB 59950:LOCATE 25,1:PRINT SPC(79);:GOTO 2510
3080 LOCATE 25,1:PRINT SPC(79);:LOCATE 25,1:PRINT A$(2) ", your roll is  ";:COLOR 15:PRINT L;:COLOR 7
3090 IF D>1 THEN COLOR 15:PRINT M;:COLOR 7
3100 J=0
3110 IF A(0)>0 AND A(L)>1 AND A(M)>1 THEN 3070
3120 IF A(0)<1 AND A(J)>=0 THEN J=J+1:GOTO 3120
3130 E=0:IF A(0)>0 AND A(L)<2 THEN E=1
3140 IF A(0)>0 AND A(M)<2 THEN E=1
3150 FOR X=1 TO 24-L:IF A(X)<0 AND A(X+L)<2 THEN E=1
3160 NEXT X:FOR X=1 TO 24-M:IF A(X)<0 AND A(X+M)<2 THEN E=1
3170 NEXT X:IF E=1 THEN 3200
3180 IF J<19 THEN 3070
3190 IF A(25-M)>-1 AND A(25-L)>-1 AND J<25-L THEN 3070
3200 IF A(0)>0 THEN F=0:LOCATE 25,40:COLOR 15:PRINT"FROM BAR ";:COLOR 7:GOTO 3240
3210 PLAY "f":LOCATE 25,40:COLOR 15:INPUT;"FROM-- ",IN$:COLOR 7:F=VAL(IN$)
3220 IF F<1 OR F>24 THEN 3290
3230 IF A(F)>-1 THEN 3290
3240 PLAY "f":LOCATE 25,60:COLOR 15:INPUT;"TO-- ",IN$:COLOR 7:T=VAL(IN$):IF T=99 THEN 3380
3250 IF T<1 OR T>24 THEN 3290
3260 IF A(T)>1 THEN 3290
3270 IF T-F=L THEN L=M:GOTO 3300
3280 IF T-F=M THEN M=L:GOTO 3300
3290 GOSUB 2580:GOTO 3080
3300 IF F=0 THEN A(0)=A(0)-2
3310 A(F)=A(F)+1:IF A(T)=1 THEN A(25)=A(25)+1:A(T)=0
3320 A(T)=A(T)-1
3330 GOSUB 3430:D=D-1:E=0:FOR X=1 TO 25
3340 IF A(X)>-1 THEN E=E+1
3350 NEXT X:IF E=25 THEN 3590
3360 IF D=0 THEN W=0:GOTO 2510
3370 GOTO 3080
3380 IF J<19 THEN 3290
3390 IF F=25-M OR J>25-M AND F=J THEN M=L:GOTO 3420
3400 IF F=25-L OR J>25-L AND F=J THEN L=M:GOTO 3420
3410 GOTO 3290
3420 A(F)=A(F)+1:GOTO 3330
3430 LOCATE 9,6:PRINT A(0);:LOCATE 13,6:PRINT A(25);:IF F=0 OR F=25 THEN 3450
3440 H=F:GOSUB 3460:IF T=99 THEN RETURN
3450 H=T:GOSUB 3460:RETURN
3460 U=1:IF A(H)<0 THEN U=2
3470 P=A(H):IF P>8 THEN P=8
3480 IF H<=12 THEN 3510
3490 X=(24-H)*4+21:G=0:IF H=F THEN G=1
3500 Y=2+ABS(P)+G:GOTO 3540
3510 X=(H-1)*4+21:G=0:IF H=F THEN G=1
3520 Y=20-ABS(P)-G
3540 LOCATE Y,X:PRINT"   ";
3550 IF H<>T THEN RETURN
3560 LOCATE Y,X:IF U=1 THEN PRINT"▀▀▀"; ELSE PRINT"▀ ▀";
3570 RETURN
3580 PLAY "c16c16c16ge8g":LOCATE 25,1:PRINT SPC(79);:COLOR 25:LOCATE 25,1:PRINT A$(1) " WINS";:TIMEOUT=6:GOSUB 59950:COLOR 7:RUN "b:???0??"
3590 PLAY "c16c16c16ge8g":LOCATE 25,1:PRINT SPC(79);:COLOR 25:LOCATE 25,1:PRINT A$(2) " WINS";:TIMEOUT=6:GOSUB 59950:COLOR 7:RUN "b:???0??"
5000 RUN "menu"
59950 TIMEOUT$=TIME$:TIME2=VAL(LEFT$(TIMEOUT$,2))*120+VAL(MID$(TIMEOUT$,4,2))*60+VAL(RIGHT$(TIMEOUT$,2))
59960 TIMEOUT$=TIME$:TIME3=VAL(LEFT$(TIMEOUT$,2))*120+VAL(MID$(TIMEOUT$,4,2))*60+VAL(RIGHT$(TIMEOUT$,2))
59970 IF TIMEOUT > TIME3 - TIME2 THEN 59960 ELSE RETURN
59980 RNDTIME$=TIME$:RNDVAL=VAL(LEFT$(RNDTIME$,2))*120+VAL(MID$(RNDTIME$,4,2))*60+VAL(RIGHT$(RNDTIME$,2)):RANDOMIZE RNDVAL:RETURN
59990 ON KEY(1) GOSUB 5000:IKEY$=INKEY$:IF IKEY$="" THEN 59990 ELSE RETURN
```
{% endraw %}

## BLACK.BAS

{% raw %}
```bas
10 REM=======================================================================
20 REM============================ BLACKJACK ================================
30 REM This program plays Blackjack with either one or two players.  The   ==
40 REM computer always plays the role of dealer and the players betting    ==
50 REM on the results of each play.                                        ==
70 REM=======================================================================
80 REM $s2
100 REM======================================================================
110 REM=========================== MAIN ROUTINE =============================
120 REM This routine contains the main logic for the program.  It makes    ==
130 REM extensive use of subroutines which are described later.            ==
140 REM======================================================================
150 REM $s2
160 GOSUB 500 'INITIALIZATION
170 GOSUB 1000 'PLAY BLACKJACK
180 GOTO 170
490 REM $s2
500 REM======================================================================
510 REM========================== INITIALIZATION ============================
520 REM This routine turns off the function keys, sets the display to      ==
530 REM 80-character mode, and displays the opening screens.               ==
550 REM======================================================================
560 REM $s2
570 KEY OFF:KEY(10) ON:ON KEY(10) GOSUB 10000:DEFINT A-Z
580 WIDTH 80:B=0:O=0
590 CLS:HEART=3:DIAMOND=4:CLUB=5:SPADE=6
591 FOR I=1 TO 12
600 Y=5:X=30:CARD=I:SUIT=HEART:GOSUB 20000
601 Y=5:X=41:CARD=I+1:SUIT=SPADE:GOSUB 20000
602 NEXT I
603 Y=5:X=30:CARD=11:SUIT=HEART:GOSUB 20000
604 Y=5:X=41:CARD=1:SUIT=SPADE:GOSUB 20000
610 LOCATE 14,35:PRINT "BLACKJACK"
620 LOCATE 16,39:PRINT "by"
621 LOCATE 17,30:PRINT "Hughes J. Glantzberg"
622 LOCATE 18,30:PRINT "1602 Elizabeth Drive"
623 LOCATE 19,30:PRINT "Carrollton, TX 75007"
630 ON ERROR GOTO 3000
635 TIMEOUT=5:GOSUB 59950
640 RETURN
990 REM $pa
1000 REM=====================================================================
1010 REM======================== PLAY BLACKJACK =============================
1080 REM=====================================================================
1085 REM $s2
1100 CLS
1110 LOCATE 12,10:PRINT"Will there be 1 or 2 players?  ";
1120 GOSUB 59990:PLAYERS=VAL(IKEY$):IF PLAYERS<>1 AND PLAYERS<>2 THEN 1120
1130 PRINT PLAYERS
1140 FOR I=1 TO PLAYERS
1150 PRINT TAB(10) "Enter the name of player " I "  ";:INPUT "",NAM$(I)
1160 NEXT I
1170 GOSUB 59980:Z=50:DIM A(64)
1180 FOR X=1 TO 52:A(X)=X:NEXT X
1190 CLS:GOSUB 1200:CLS:GOTO 2000
1195 REM $s2
1200 REM=====================================================================
1210 REM========================== SHUFFLING ================================
1220 REM=====================================================================
1230 REM $s2
1240 LOCATE 12,35:PRINT"Shuffling"
1250 FOR L=1 TO 156:X=INT(RND*52)+1:Y=INT(RND*52)+1
1260 SWAP A(X),A(Y):NEXT L:J=1
1270 LOCATE 12,35:PRINT SPC(9):RETURN
1295 REM $s2
1300 REM=====================================================================
1310 REM======================== SELECT THE CARD ============================
1320 REM=====================================================================
1330 REM $s2
1340 SUIT=INT((A(J)-1)/13)
1350 CARD=A(J)-SUIT*13
1352 IF SUIT=3 THEN SUIT=CLUB
1354 IF SUIT=2 THEN SUIT=SPADE
1356 IF SUIT=1 THEN SUIT=DIAMOND
1358 IF SUIT=0 THEN SUIT=HEART
1360 RETURN
1395 REM $s2
1400 REM=====================================================================
1410 REM======================== SET UP THE CARD ============================
1420 REM=====================================================================
1430 REM $s2
1440 X=(N-1)*11+1
1450 Y=(M-1)*8+1
1460 GOSUB 20000
1470 RETURN
1990 REM $s2
2000 REM=====================================================================
2010 REM========================= BEGIN THE GAME ============================
2050 REM=====================================================================
2060 REM $s2
2070 LOCATE 25,10
2080 PRINT"Press `E' to quit playing";
2100 FOR X=1 TO PLAYERS
2105 LOCATE 11+X,10
2110 PRINT NAM$(X) ", what is your bet?  $";:INPUT "",IN$
2120 IF IN$="E" OR IN$="e" THEN SYSTEM ELSE BET(X)=VAL(IN$)
2130 NEXT X
2140 GOSUB 4000
2150 X1=0:X2=0:IF R=1001 THEN 2170
2160 IF A(59)=1011 THEN 2300 ELSE 2500
2170 FOR X=1 TO PLAYERS:LOCATE 25,1:PRINT SPC(79);:LOCATE 25,1:PRINT NAM$(X) ", insurance (y or n)? ";
2180 GOSUB 59990:IF INSTR("YNyn",IKEY$)=0 THEN 2180
2190 IF X=1 AND (IKEY$="y" OR IKEY$="Y") THEN X1=1
2200 IF X=2 AND (IKEY$="y" OR IKEY$="Y") THEN X2=1
2210 NEXT X
2220 IF A(59)<>1011 THEN 2900
2300 H=J:J=0:N=1:M=3:GOSUB 1300:GOSUB 1400:LOCATE 18,65:PRINT"BLACKJACK";
2310 J=H
2320 GOTO 5050
2500 FOR M=1 TO 2 STEP 3-PLAYERS
2510 N=3
2520 LOCATE 5,65:PRINT NAM$(1);
2530 LOCATE 18,65:PRINT"Dealer";
2540 LOCATE 25,1:PRINT SPC(70):IF M=1 THEN LOCATE 25,1:PRINT NAM$(1);:L=2 ELSE LOCATE 11,65:PRINT NAM$(2);:LOCATE 25,1:PRINT NAM$(2);:L=3
2550 PRINT"'s turn - 1=HIT, 2=STAND, 3=DOUBLE, 4=REVIEW CARDS";
2560 GOSUB 59990:IF INSTR("1234",IKEY$)=0 THEN 2560 ELSE X=VAL(IKEY$)
2570 Q=56+M:ON X GOTO 2600,2660,2800,6000:GOTO 2540
2580 NEXT M:GOTO 5000
2600 GOSUB 1300:GOSUB 1400:J=J+1:IF CARD>9 THEN R=10 ELSE R=CARD
2601 IF CARD=1 THEN R=1001
2602 A(Q)=A(Q)+R
2610 IF A(Q)<1000 AND A(Q)>21 THEN 2650
2620 IF A(Q)-(INT(A(Q)/1000)*1000)>21 THEN 2650
2630 N=N+1:IF O=99 THEN O=0:GOTO 2660 ELSE 2540
2650 LOCATE 25,1:PRINT SPC(79):LOCATE 25,1:PRINT"BUST!";:B=B+1
2660 IF N=3 AND A(Q)=1011 THEN A(Q)=9000
2670 T=J:GOTO 2580
2800 IF N<>3 THEN 2540 ELSE O=99:T(L)=T(L)*2:GOTO 2600
2900 LOCATE 25,1:PRINTSPC(79);:LOCATE 25,1:PRINT"No Blackjack!";
2910 TIMEOUT=5:GOSUB 59950
2920 IF X1=1 THEN BET(1)=BET(1)*0.5
2930 IF X2=1 THEN BET(2)=BET(2)*0.5
2940 GOTO 2500
2990 REM $s2
3000 REM=====================================================================
3010 REM======================== ERROR ROUTINE ==============================
3060 REM=====================================================================
3070 REM $s2
3080 IF ERR=4 THEN RESTORE:RESUME
3085 IF ERR=71 AND ERL=2090 THEN RUN
3090 PRINT"error " ERR " occurred in line " ERL
3100 STOP
3990 REM $s2
4000 REM=====================================================================
4010 REM======================= DISPLAY THE CARDS ===========================
4020 REM=====================================================================
4030 REM $s2
4040 CLS
4050 FOR N=1 TO 2
4060 FOR M=1 TO 3 STEP 3-PLAYERS
4070 IF M=3 AND N=1 THEN GOSUB 4500 ELSE GOSUB 4200
4071 NEXT M,N:RETURN
4200 GOSUB 1300:GOSUB 1400:J=J+1
4205 IF CARD>9 THEN R=10 ELSE R=CARD
4207 IF CARD=1 THEN R=1001
4210 A(56+M)=A(56+M)+R
4220 RETURN
4500 K=J:GOSUB 1300:A(0)=A(J):J=J+1:IF CARD>9 THEN R=10 ELSE R=CARD
4505 CARD=0:IF R=1 THEN R=1001
4510 GOSUB 1400
4520 A(59)=R
4530 RETURN
4990 REM $s2
5000 REM=====================================================================
5010 REM======================= PLAY THE DEALER =============================
5020 REM=====================================================================
5030 REM $s2
5035 LOCATE 25,1:PRINTSPC(79);
5040 N=1:M=3:W=J:J=0:GOSUB 1300:GOSUB 1400:J=W
5050 V=A(59):N=3:IF B=PLAYERS THEN 5500
5060 W=V/1000:V=V-W*1000:X=0:IF W>0 THEN X=1
5070 IF V>16 THEN 5500
5080 IF X>0 AND V+10>16 AND V+10<22 THEN V=V+10:GOTO 5500
5090 GOSUB 1300:GOSUB 1400:J=J+1:IF CARD>9 THEN R=10 ELSE R=CARD
5100 V=V+R+W*1000:N=N+1:GOTO 5060
5500 FOR X=1 TO PLAYERS:U=A(56+X):Y=U/1000:U=U-Y*1000
5510 IF Y>0 AND U+10<22 THEN U=U+10 ELSE IF U>21 THEN U=0
5520 IF V>21 THEN V=1
5530 Y=(X-1)*6+5
5535 IF A(56+X)=9000 THEN LOCATE Y,65:PRINT"BLACKJACK";:WINNING(X)=WINNING(X)+BET(X)*2:GOTO 5550
5540 IF V=U THEN LOCATE Y,65:PRINT"PUSH      "; ELSE IF V>U THEN LOCATE Y,65:PRINT"LOSE      ";:WINNING(X)=WINNING(X)-BET(X) ELSE LOCATE Y,65:PRINT"WIN       ";:WINNING(X)=WINNING(X)+BET(X)
5550 NEXT X
5560 FOR X=55 TO 59:A(X)=0:NEXT X:B=0
5570 TIMEOUT=5:GOSUB 59950
5580 CLS:LOCATE 3,37:PRINT"SO FAR":X=0
5590 LOCATE 5,30:PRINT NAM$(1) USING " has $#,###,###.##"; WINNING(1)
5600 IF PLAYERS=1 THEN 5620
5610 LOCATE 6,30:PRINT NAM$(2) USING " has $#,###,###.##"; WINNING(2)
5620 TIMEOUT=5:GOSUB 59950
5630 IF J>42 THEN GOSUB 1200
5640 GOTO 2000
5990 REM $s2
6000 REM=====================================================================
6010 REM======================= DISPLAY CARDS USED =========================
6020 REM=====================================================================
6030 REM $s2
6040 FOR X=57 TO 59:A(X)=0:NEXT X
6050 CLS:W=J:J=0:LOCATE 1,10:PRINT"HEARTS" TAB(30) "DIAMONDS" TAB(50) "CLUBS" TAB(70) "SPADES"
6060 LOCATE 3,1:PRINT"ACE"
6070 FOR Y=4 TO 12:LOCATE Y,1:PRINT Y-2:NEXT Y
6080 LOCATE 13,1:PRINT"JACK":LOCATE 14,1:PRINT"QUEEN":LOCATE 15,1:PRINT"KING"
6090 FOR J=1 TO K-PLAYERS:GOSUB 1300:E=(SUIT-3)*20+15:F=CARD+2
6100 LOCATE F,E:PRINT "▄";:NEXT J
6110 TIMEOUT=5:GOSUB 59950
6120 CLS:J=K-PLAYERS:GOSUB 4000:M=1:N=3
6130 IF J=T THEN M=2:N=3
6140 IF J=W THEN 2520
6150 GOSUB 1300:GOSUB 1400:IF CARD>9 THEN R=10 ELSE R=CARD
6160 A(56+M)=A(56+M)+R:N=N+1:GOTO 6130
9990 REM $pa
10000 RUN "menu"
19990 REM $s2
20000 REM====================================================================
20010 REM======================== DISPLAY A CARD ============================
20020 REM This routine displays a card at coordinates (y,x) on the         ==
20030 REM screen.  CARD must be set to the card number (1-13) and SUIT     ==
20040 REM must be set to the value of the suit of the card.                ==
20050 REM====================================================================
20060 REM $s2
20070 LOCATE Y,X:PRINT CHR$(201) + STRING$(7,205) + CHR$(187);
20080 ON CARD+1 GOSUB 20500,30000,30120,30203,30263,30323,30383,30443,30493,30553,30613,30673,30733,30793
20090 LOCATE Y+7,X:PRINT CHR$(200) + STRING$(7,205) + CHR$(188);
20100 RETURN
20495 REM $s2
20500 REM====================================================================
20510 REM========================= DISPLAY A    =============================
20520 REM====================================================================
20530 REM $s2
20550 LOCATE Y+1,X:PRINT CHR$(186) "       " CHR$(186);
20560 LOCATE Y+2,X:PRINT CHR$(186) "       " CHR$(186);
20570 LOCATE Y+3,X:PRINT CHR$(186) "       " CHR$(186);
20580 LOCATE Y+4,X:PRINT CHR$(186) "       " CHR$(186);
20590 LOCATE Y+5,X:PRINT CHR$(186) "       " CHR$(186);
20600 LOCATE Y+6,X:PRINT CHR$(186) "       " CHR$(186);
20610 RETURN
29990 REM $s2
30000 REM====================================================================
30010 REM========================= DISPLAY AN A =============================
30020 REM====================================================================
30030 REM $s2
30050 LOCATE Y+1,X:PRINT CHR$(186) "A      " CHR$(186);
30060 LOCATE Y+2,X:PRINT CHR$(186) "       " CHR$(186);
30070 LOCATE Y+3,X:PRINT CHR$(186) "   " CHR$(SUIT) "   " CHR$(186);
30080 LOCATE Y+4,X:PRINT CHR$(186) "       " CHR$(186);
30090 LOCATE Y+5,X:PRINT CHR$(186) "       " CHR$(186);
30100 LOCATE Y+6,X:PRINT CHR$(186) "      A" CHR$(186);
30110 RETURN
30119 REM $pa
30120 REM====================================================================
30130 REM========================= DISPLAY A  2 =============================
30140 REM====================================================================
30145 REM $s2
30150 LOCATE Y+1,X:PRINT CHR$(186) "2      " CHR$(186);
30160 LOCATE Y+2,X:PRINT CHR$(186) "   " CHR$(SUIT) "   " CHR$(186);
30170 LOCATE Y+3,X:PRINT CHR$(186) "       " CHR$(186);
30180 LOCATE Y+4,X:PRINT CHR$(186) "       " CHR$(186);
30190 LOCATE Y+5,X:PRINT CHR$(186) "   " CHR$(SUIT) "   " CHR$(186);
30200 LOCATE Y+6,X:PRINT CHR$(186) "      2" CHR$(186);
30201 RETURN
30202 REM $s2
30203 REM====================================================================
30204 REM========================= DISPLAY A  3 =============================
30205 REM====================================================================
30206 REM $s2
30210 LOCATE Y+1,X:PRINT CHR$(186) "3      " CHR$(186);
30220 LOCATE Y+2,X:PRINT CHR$(186) "   " CHR$(SUIT) "   " CHR$(186);
30230 LOCATE Y+3,X:PRINT CHR$(186) "   " CHR$(SUIT) "   " CHR$(186);
30240 LOCATE Y+4,X:PRINT CHR$(186) "       " CHR$(186);
30250 LOCATE Y+5,X:PRINT CHR$(186) "   " CHR$(SUIT) "   " CHR$(186);
30260 LOCATE Y+6,X:PRINT CHR$(186) "      3" CHR$(186);
30261 RETURN
30262 REM $s2
30263 REM====================================================================
30264 REM========================= DISPLAY A  4 =============================
30265 REM====================================================================
30266 REM $s2
30270 LOCATE Y+1,X:PRINT CHR$(186) "4      " CHR$(186);
30280 LOCATE Y+2,X:PRINT CHR$(186) "  " CHR$(SUIT) " " CHR$(SUIT) "  " CHR$(186);
30290 LOCATE Y+3,X:PRINT CHR$(186) "       " CHR$(186);
30300 LOCATE Y+4,X:PRINT CHR$(186) "       " CHR$(186);
30310 LOCATE Y+5,X:PRINT CHR$(186) "  " CHR$(SUIT) " " CHR$(SUIT) "  " CHR$(186);
30320 LOCATE Y+6,X:PRINT CHR$(186) "      4" CHR$(186);
30321 RETURN
30322 REM $pa
30323 REM====================================================================
30324 REM========================= DISPLAY A  5 =============================
30325 REM====================================================================
30326 REM $s2
30330 LOCATE Y+1,X:PRINT CHR$(186) "5      " CHR$(186);
30340 LOCATE Y+2,X:PRINT CHR$(186) "  " CHR$(SUIT) " " CHR$(SUIT) "  " CHR$(186);
30350 LOCATE Y+3,X:PRINT CHR$(186) "   " CHR$(SUIT) "   " CHR$(186);
30360 LOCATE Y+4,X:PRINT CHR$(186) "       " CHR$(186);
30370 LOCATE Y+5,X:PRINT CHR$(186) "  " CHR$(SUIT) " " CHR$(SUIT) "  " CHR$(186);
30380 LOCATE Y+6,X:PRINT CHR$(186) "      5" CHR$(186);
30381 RETURN
30382 REM $pa
30383 REM====================================================================
30384 REM========================= DISPLAY A  6 =============================
30385 REM====================================================================
30386 REM $s2
30390 LOCATE Y+1,X:PRINT CHR$(186) "6      " CHR$(186);
30400 LOCATE Y+2,X:PRINT CHR$(186) "  " CHR$(SUIT) " " CHR$(SUIT) "  " CHR$(186);
30410 LOCATE Y+3,X:PRINT CHR$(186) "  " CHR$(SUIT) " " CHR$(SUIT) "  " CHR$(186);
30420 LOCATE Y+4,X:PRINT CHR$(186) "       " CHR$(186);
30430 LOCATE Y+5,X:PRINT CHR$(186) "  " CHR$(SUIT) " " CHR$(SUIT) "  " CHR$(186);
30440 LOCATE Y+6,X:PRINT CHR$(186) "      6" CHR$(186);
30441 RETURN
30442 REM $s2
30443 REM====================================================================
30444 REM========================= DISPLAY A  7 =============================
30445 REM====================================================================
30446 REM $s2
30450 LOCATE Y+1,X:PRINT CHR$(186) "7      " CHR$(186);
30460 LOCATE Y+2,X:PRINT CHR$(186) "  " CHR$(SUIT) " " CHR$(SUIT) "  " CHR$(186);
30470 LOCATE Y+3,X:PRINT CHR$(186) "   " CHR$(SUIT) "   " CHR$(186);
30475 LOCATE Y+4,X:PRINT CHR$(186) "  " CHR$(SUIT) " " CHR$(SUIT) "  " CHR$(186);
30480 LOCATE Y+5,X:PRINT CHR$(186) "  " CHR$(SUIT) " " CHR$(SUIT) "  " CHR$(186);
30490 LOCATE Y+6,X:PRINT CHR$(186) "      7" CHR$(186);
30491 RETURN
30492 REM $pa
30493 REM====================================================================
30494 REM========================= DISPLAY A  8 =============================
30495 REM====================================================================
30496 REM $s2
30500 LOCATE Y+1,X:PRINT CHR$(186) "8      " CHR$(186);
30510 LOCATE Y+2,X:PRINT CHR$(186) "  " STRING$(3,SUIT) "  " CHR$(186);
30520 LOCATE Y+3,X:PRINT CHR$(186) "  " CHR$(SUIT) " " CHR$(SUIT) "  " CHR$(186);
30530 LOCATE Y+4,X:PRINT CHR$(186) "       " CHR$(186);
30540 LOCATE Y+5,X:PRINT CHR$(186) "  " STRING$(3,SUIT) "  " CHR$(186);
30550 LOCATE Y+6,X:PRINT CHR$(186) "      8" CHR$(186);
30551 RETURN
30552 REM $pa
30553 REM====================================================================
30554 REM========================= DISPLAY A  9 =============================
30555 REM====================================================================
30556 REM $s2
30560 LOCATE Y+1,X:PRINT CHR$(186) "9      " CHR$(186);
30570 LOCATE Y+2,X:PRINT CHR$(186) "  " CHR$(SUIT) " " CHR$(SUIT) "  " CHR$(186);
30580 LOCATE Y+3,X:PRINT CHR$(186) "  " STRING$(3,SUIT) "  " CHR$(186);
30590 LOCATE Y+4,X:PRINT CHR$(186) "  " CHR$(SUIT) " " CHR$(SUIT) "  " CHR$(186);
30600 LOCATE Y+5,X:PRINT CHR$(186) "  " CHR$(SUIT) " " CHR$(SUIT) "  " CHR$(186);
30610 LOCATE Y+6,X:PRINT CHR$(186) "      9" CHR$(186)
30611 RETURN
30612 REM $s2
30613 REM====================================================================
30614 REM========================= DISPLAY A 10 =============================
30615 REM====================================================================
30616 REM $s2
30620 LOCATE Y+1,X:PRINT CHR$(186) "10     " CHR$(186);
30630 LOCATE Y+2,X:PRINT CHR$(186) "  " STRING$(3,SUIT) "  " CHR$(186);
30640 LOCATE Y+3,X:PRINT CHR$(186) "  " CHR$(SUIT) " " CHR$(SUIT) "  " CHR$(186);
30650 LOCATE Y+4,X:PRINT CHR$(186) "  " CHR$(SUIT) " " CHR$(SUIT) "  " CHR$(186);
30660 LOCATE Y+5,X:PRINT CHR$(186) "  " STRING$(3,SUIT) "  " CHR$(186);
30670 LOCATE Y+6,X:PRINT CHR$(186) "     10" CHR$(186);
30671 RETURN
30672 REM $pa
30673 REM====================================================================
30674 REM========================= DISPLAY A  J =============================
30675 REM====================================================================
30676 REM $s2
30680 LOCATE Y+1,X:PRINT CHR$(186) "J      " CHR$(186);
30690 LOCATE Y+2,X:PRINT CHR$(186) "    " CHR$(SUIT) "  " CHR$(186);
30700 LOCATE Y+3,X:PRINT CHR$(186) "       " CHR$(186);
30710 LOCATE Y+4,X:PRINT CHR$(186) "       " CHR$(186);
30720 LOCATE Y+5,X:PRINT CHR$(186) "  " CHR$(SUIT) "    " CHR$(186);
30730 LOCATE Y+6,X:PRINT CHR$(186) "      J" CHR$(186);
30731 RETURN
30732 REM $pa
30733 REM====================================================================
30734 REM========================= DISPLAY A  Q =============================
30735 REM====================================================================
30736 REM $s2
30740 LOCATE Y+1,X:PRINT CHR$(186) "Q      " CHR$(186);
30750 LOCATE Y+2,X:PRINT CHR$(186) "    " CHR$(SUIT) "  " CHR$(186);
30760 LOCATE Y+3,X:PRINT CHR$(186) "       " CHR$(186);
30770 LOCATE Y+4,X:PRINT CHR$(186) "       " CHR$(186);
30780 LOCATE Y+5,X:PRINT CHR$(186) "  " CHR$(SUIT) "    " CHR$(186);
30790 LOCATE Y+6,X:PRINT CHR$(186) "      Q" CHR$(186);
30791 RETURN
30792 REM $s2
30793 REM====================================================================
30794 REM========================= DISPLAY A  K =============================
30795 REM====================================================================
30796 REM $s2
30800 LOCATE Y+1,X:PRINT CHR$(186) "K      " CHR$(186);
30810 LOCATE Y+2,X:PRINT CHR$(186) "  " CHR$(SUIT) "    " CHR$(186);
30820 LOCATE Y+3,X:PRINT CHR$(186) "       " CHR$(186);
30830 LOCATE Y+4,X:PRINT CHR$(186) "       " CHR$(186);
30840 LOCATE Y+5,X:PRINT CHR$(186) "    " CHR$(SUIT) "  " CHR$(186);
30850 LOCATE Y+6,X:PRINT CHR$(186) "      K" CHR$(186);
30860 RETURN
59950 TIMEOUT$=TIME$:TIME2=VAL(LEFT$(TIMEOUT$,2))*120+VAL(MID$(TIMEOUT$,4,2))*60+VAL(RIGHT$(TIMEOUT$,2))
59960 TIMEOUT$=TIME$:TIME3=VAL(LEFT$(TIMEOUT$,2))*120+VAL(MID$(TIMEOUT$,4,2))*60+VAL(RIGHT$(TIMEOUT$,2))
59970 IF TIMEOUT > TIME3 - TIME2 THEN 59960 ELSE RETURN
59980 RNDTIME$=TIME$:RNDVAL=VAL(LEFT$(RNDTIME$,2))*120+VAL(MID$(RNDTIME$,4,2))*60+VAL(RIGHT$(RNDTIME$,2)):RANDOMIZE RNDVAL:RETURN
59990 IKEY$=INKEY$:IF IKEY$="" THEN 59990 ELSE RETURN
```
{% endraw %}

## FILES740.TXT

{% raw %}
```
--------------------------------------------------------------------------
Disk No 740   EasyMenu Version 1.01    (disk 3 of 3)                 v1
--------------------------------------------------------------------------
EasyMenu is a nice, simple menu system, with a few extra features. It makes
your PC more convenient to use. You record the start- start-up command
sequence for all programs - such as CD\directory, PROGRAM-NAME/Option
Switch, or BATCH file, then let EasyMenu remember for you. You can run any
program at a keystroke or by clicking a mouse button. It saves you time and
keystrokes when you run your other computer programs and lets you view
useful notes and comments prior to running a program. If you are new to
computers, Easymenu tells you about your computer hardware, the amount of
memory, number of access ports for printers and modems, the version of DOS
you are using and other useful information. If you are a more experienced
computer user, you might like to know that EasyMenu can run up to 9
programs per menu and that you can use batch files.
 
This disk hold a sample menu to be used by EasyMenu and a number of games.
 
3DTICTAC EXE  #-demensional Tic-Tac-Toe
ASK      COM  Part of installation batch setup
BACKGAM  BAS  Backgammon game
BLACK    BAS  The game of "Black Box"
BRICKS   EXE  Break your way through the wall with a paddle and ball
CHESS    COM  The world's most famous game of skill and thought.
FRANK    BAS  Simple hangman-like game
GAMES    M    Menu data file
GAMES    MH   menu data help file
GO-MOKU  COM  Ancient oriental game of 5-in-a-row
GO-MOKU  HLP  Documentation file for GO-MUKO.COM
INSTALL  BAT  Installation batch file
OPENING  LIB  Data file for CHESS.COM
READ     ME1  Documentation file
READ     ME   Documentation file
RVERSI   COM  Board game of skill and luck.
SETUP    BAT  Part of installation batch file
STARTREK BAS  Be in charge of the U.S.S. Enterprise and save the universe
WORDS    BAS  Word list for FRANK.BAS
 
PC-SIG
1030D E. Duane Ave.
Sunnyvale, CA  94086
(408) 730-9291
(c) Copyright 1987 PC-SIG
```
{% endraw %}

## FRANK.BAS

{% raw %}
```bas
10 KEY OFF:WIDTH 80:CLS:DEFINT A-Z:CU$="     "
70 Z=0:GOSUB 3000:FOR X=13 TO 15:LOCATE X,1:PRINT STRING$(80,"█");:NEXT X
74 CHAIN MERGE "words", 75, ALL
75 GOSUB 1000:DIM H$(NW), H(NW), A$(90), A(90), W$(90), W(90), U$(50), U(50):T$=TIME$:XX=VAL(LEFT$(T$,2))*120+VAL(MID$(T$,4,2))*60+VAL(RIGHT$(T$,2)):RANDOMIZE XX
77 RESTORE:FOR I=1 TO NW:READ H$(I):NEXT I
80 FOR X=1 TO NW:IF H(X)=0 THEN 100 ELSE NEXT X
90 FOR X=1 TO NW:H(X)=0:NEXT X:H=INT(RND*NW):GOTO 110
100 FOR T=1 TO 5:H=INT(RND*NW):IF H(H)=0 THEN 110 ELSE NEXT T:H=X
110 H$=H$(H):H(H)=1
120 L=LEN(H$):FOR X=1 TO L:W$(X)=MID$(H$,X,1):W(X)=0:NEXT X
140 LOCATE 14,39-L/2:PRINT STRING$(L+2," ");:LOCATE 14,40-L/2:COLOR 15:PRINT STRING$(L,"-");:COLOR 7
150 FOR X=65 TO 90:A$(X)=CHR$(X):NEXT X
160 LOCATE 16,1:PRINTSPACE$(70):LOCATE 16,1:PRINT"What's your letter?";
170 LOCATE 18,5:PRINTSTRING$(70,"▄");
180 LOCATE 20,14:FOR X=65 TO 90:PRINTA$(X)" ";:NEXT X
190 CU=22:LOCATE 21,30:PRINT"('/' to guess word)";
200 IKEY$="":LOCATE 16,CU:PRINTCU$;
210 GOSUB 59990:BEEP
220 IF IKEY$="*" THEN CLS:LOCATE 12,10:PRINT"The word was "H$(H)"!";:TIMEOUT=5:GOSUB 59950:RUN "b:ekg001"
230 IF IKEY$="/" THEN 2000
240 A=ASC(IKEY$):IF A>90 THEN A=A-32
250 IF INSTR("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",IKEY$)=0 THEN 200
260 LOCATE 16,CU:PRINTIKEY$;
270 IF A$(A)=" " THEN LOCATE 17,1:PRINT"You've already used "IKEY$"!";:TIMEOUT=2:GOSUB 59950:LOCATE 17,1:PRINTSPACE$(50);:GOTO 200
280 S=0:NC=0:FOR X=1 TO L
290 IF W$(X)=IKEY$ THEN W(X)=1:S=S+1
300 IF W(X)=1 THEN NC=NC+1
310 NEXT X
320 IF NC=L THEN 340
330 IF S<>0 THEN 340 ELSE IF Z>=7 THEN 3800 ELSE LOCATE 17,1:PRINT"The monster gets ";:GOSUB 3000:TIMEOUT=2:GOSUB 59950:LOCATE 17,1:PRINTSPACE$(50);:A$(A)=" ":GOTO 180
340 LOCATE 14,40-L/2:COLOR 15
350 FOR X=1 TO L:IF W(X)=1 THEN PRINTW$(X); ELSE PRINT"-";
360 NEXT X:COLOR 7:A$(A)=" ":IF NC=L THEN 4000
370 TIMEOUT=2:GOSUB 59950:GOTO 180
1000 ON ERROR GOTO 1050
1010 RESTORE:NW=0
1020 READ X$:NW=NW+1:GOTO 1020
1050 RETURN
2000 LOCATE 16,1:PRINT"What is your guess for the word? ";:INPUT W$:IF W$="*" THEN CLS:LOCATE 12,10:PRINT"The word was "H$(H)"!";:TIMEOUT=5:GOSUB 59950:RUN "b:???0??"
2010 IF W$=H$ THEN 4000
2020 LOCATE 16,1:PRINT SPACE$(70);:LOCATE 16,1:PRINT"Wrong!  There goes ";:GOSUB 3000:TIMEOUT=2:GOSUB 59950:GOTO 160
3000 Z=Z+1:ON Z GOTO 3100, 3200,3300,3400,3500,3600,3700,3800
3010 STOP
3100 LOCATE 1,1:PRINT STRING$(80,"▀");:LOCATE 12,1:PRINT STRING$(80,"▄");:FOR X=1 TO 12:LOCATE X,1:PRINT"█";:LOCATE X,80:PRINT"█";:NEXT X:LOCATE 2,28:COLOR 15:PRINT"F R A N K E N S T E I N";:COLOR 7
3110 FOR X=6 TO 12:LOCATE X,10:PRINTSTRING$(8,"█");:LOCATE X,62:PRINTSTRING$(8,"█");:NEXT X:LOCATE 5,13:PRINT"██";:LOCATE 5,65:PRINT"██";
3120 RETURN
3200 PRINT"his body!";
3210 COLOR 15:LOCATE 6,37:PRINT STRING$(7,"█") CHR$(31) STRING$(6,29) STRING$(5,"█") CHR$(31) STRING$(4,29) STRING$(3,"█") CHR$(31) STRING$(2,29) "█";:COLOR 7
3220 RETURN
3300 PRINT"his arm!";
3310 COLOR 15:LOCATE 6,35:PRINT"▄▄" CHR$(31) STRING$(2,29) "█" CHR$(31) CHR$(29) "█";:COLOR 7
3320 RETURN
3400 PRINT"his other arm!";
3410 COLOR 15:LOCATE 6,44:PRINT"▄▄" CHR$(31) CHR$(29) "█" CHR$(31) CHR$(29) "█";:COLOR 7
3420 RETURN
3500 PRINT"his leg!";
3510 COLOR 15:LOCATE 9,39:PRINT"▄" CHR$(31) CHR$(29) "█" CHR$(31) STRING$(2,29) "▄█";:COLOR 7
3520 RETURN
3600 PRINT"his other leg!";
3610 COLOR 15:LOCATE 9,41:PRINT"▄" CHR$(31) CHR$(29) "█" CHR$(31) CHR$(29) "█▄";:COLOR 7
3620 RETURN
3700 PRINT"his head!";
3710 COLOR 15:LOCATE 3,39:PRINT"███" CHR$(31) STRING$(3,29) "▌█▐" CHR$(31) STRING$(3,29) "█▀█";:COLOR 7
3720 RETURN
3800 LOCATE 16,1:PRINT"     The word was   " H$ ".";:TIMEOUT=2:GOSUB 59950:PRINT"   The MONSTER lives!!!";:TIMEOUT=2:GOSUB 59950
3810 FOR X=1 TO 10
3820 LOCATE 6,35:PRINT"  " CHR$(31) STRING$(2,29) " " CHR$(31) CHR$(29) " ";
3830 LOCATE 6,44:PRINT"  " CHR$(31) CHR$(29) " " CHR$(31) CHR$(29) " ";
3840 COLOR 15:LOCATE 6,35:PRINT"▀▀" CHR$(30) STRING$(2,29) "█" CHR$(30) CHR$(29) "█";
3850 LOCATE 6,44:PRINT"▀▀" CHR$(30) CHR$(29) "█" CHR$(30) CHR$(29) "█";
3860 FOR X1=1 TO 50:NEXT X1
3870 LOCATE 6,35:PRINT"  " CHR$(30) STRING$(2,29) " " CHR$(30) CHR$(29) " ";
3880 LOCATE 6,44:PRINT"  " CHR$(30) CHR$(29) " " CHR$(30) CHR$(29) " ";
3890 COLOR 15:LOCATE 6,35:PRINT"▄▄" CHR$(31) STRING$(2,29) "█" CHR$(31) CHR$(29) "█";:COLOR 7
3900 COLOR 15:LOCATE 6,44:PRINT"▄▄" CHR$(31) CHR$(29) "█" CHR$(31) CHR$(29) "█";:COLOR 7
3905 NEXT X
3910 LOCATE 16,1:PRINTSPACE$(70):LOCATE 16,1:PRINT"              Would you like to play again (";:COLOR 15:PRINT"Y";:COLOR 7:PRINT" or ";:COLOR 15:PRINT"N";:COLOR 7:PRINT")?";
3920 GOTO 4010
4000 LOCATE 16,1:PRINT"Correct!!     Would you like to play again (";:COLOR 15:PRINT"Y";:COLOR 7:PRINT" or ";:COLOR 15:PRINT"N";:COLOR 7:PRINT")?";
4010 GOSUB 59990:IF INSTR("ynYN",IKEY$)=0 THEN 4010
4020 BEEP:IF IKEY$="y" OR IKEY$="Y" THEN CLS:Z=0:GOSUB 3000:FOR X=13 TO 15:LOCATE X,1:PRINT STRING$(80,"█");:NEXT X:GOTO 80
4030 SYSTEM
5000 RUN "b:???0??"
10000 DATA fat,cat,act,can,fast,hat,hand,last,man,ran,have
10010 DATA red,hen,let,get,help,next,pet,men,went,bed,said
10020 DATA big,pig,fir,did,swim,six,dig,win,sit,hit,been
10030 DATA rug,bug,jump,hunt,fun,must,cup,bus,cut,run,of,from
10040 DATA hot,pond,got,hop,not,dog,log,lost,soft,on,was,want
10050 DATA glass,grass,bell,dress,will,still,off,cross,fuss,stuff,roll
10060 DATA milk,truck,ask,back,mask,neck,desk,sick,silk,rock
10070 DATA fish,dish,brush,splash,wish,ship,shop,shed,shut,shelf,wash
10080 DATA rich,witch,lunch,catch,ranch,pitch,such,match,much,stretch,watch
10090 DATA that,this,them,than,then,thin,bath,thick,with,cloth,both
10100 DATA pink,thank,bank,think,trunk,string,sang,long,bring,hung,young
10110 DATA play,day,may,say,stay,train,rain,wait,paint,mail,they
10120 DATA bake,safe,chase,came,cake,gave,late,game,name,made,break
10130 DATA see,need,keep,sleep,me,she,clean,read,teach,piece
10140 DATA try,dry,by,cry,fly,pie,tie,lie,cried,tried,eye
10150 DATA side,line,five,time,like,fine,ride,hide,kite,mine,give
10160 DATA find,kind,mind,hind,blind,right,night,light,fight,might,wind
10170 DATA go,no,slow,show,own,low,boat,road,goat,coat,to,do
10180 DATA cold,nose,old,those,hold,close,told,hope,gold,home,one
10190 DATA new,chew,few,blue,threw,true,grew,suit,flew,fruit,build
10200 DATA use,mule,cute,goose,loose,choose,food,soon,zoo,room,you,school
10210 DATA some,friend,done,does,come,shoe,move,guess,live,head
10220 DATA put,pull,push,full,bush,foot,look,good,book,took,could,should,would
10230 DATA why,wheel,when,whip,which,who,white,whose,while,what
10240 DATA all,draw,ball,crawl,call,fault,fall,caught,saw,taught,shall,gone
10250 DATA brown,house,cow,found,down,sound,how,our,now,out,your,four
10260 DATA toy,noise,joy,point,boy,soil,join,boil,oil,spoil
10270 DATA hear,year,ear,rear,dear,cheer,clear,deer,near,steer,here
10280 DATA hair,care,air,scare,pair,bare,chair,square,fair,share,bear,where
10290 DATA fork,or,for,short,horse,floor,store,tore,shore,more,wore,door
10300 DATA barn,yard,car,arm,farm,are,hard,dark,far,march,part
10310 DATA her,jerk,serve,girl,bird,first,third,curl,turn,hurt,word,work,were
10320 DATA better,never,after,under,coller,color,other,mother,water father
10330 DATA funny,happy,story,hurry,party,any,many,very,ready,pretty
10340 DATA write,knew,know,wrote,lamb,talk,walk,laugh,climb,eight
10350 DATA one,two,three,four,five,six,seven,eight,nine,ten
59950 TIMEOUT$=TIME$:TIME2=VAL(LEFT$(TIMEOUT$,2))*120+VAL(MID$(TIMEOUT$,4,2))*60+VAL(RIGHT$(TIMEOUT$,2))
59960 TIMEOUT$=TIME$:TIME3=VAL(LEFT$(TIMEOUT$,2))*120+VAL(MID$(TIMEOUT$,4,2))*60+VAL(RIGHT$(TIMEOUT$,2))
59970 IF TIMEOUT > TIME3 - TIME2 THEN 59960 ELSE RETURN
59990 IKEY$=INKEY$:IF IKEY$="" THEN 59990 ELSE RETURN
```
{% endraw %}

## STARTREK.BAS

{% raw %}
```bas
1 KEY 1,"NAV"+CHR$(13)
2 KEY 2,"SRS"+CHR$(13):KEY 3,"LRS"+CHR$(13):KEY 4,"PHA"+CHR$(13)
3 KEY 5,"TOR"+CHR$(13):KEY 6,"SHE"+CHR$(13):KEY 7,"DAM"+CHR$(13)
4 KEY 8,"COM"+CHR$(13)
5 KEY 9,"":KEY 10,""
9 KEY ON
10 REM ****INSTRUCTIONS  FOR SUPER STAR TREK FROM CREATIVE COMPUTING
20 REM ****PUT ON IBM PC BY STEVENS ON 2-10-82
30 CLS:LOCATE 9,1
40 PRINT TAB(10);"*************************************"
50 PRINT TAB(10);"*                                   *"
60 PRINT TAB(10);"*      ** SUPER STAR TREK **        *"
70 PRINT TAB(10);"*                                   *"
80 PRINT TAB(10);"*************************************"
90 FOR I=1 TO 8: PRINT:NEXT I
100 INPUT "DO YOU NEED INSTRUCTIONS (Y/N)"; K$: IF K$<>"Y" AND K$ <>"y" THEN 1450
110 PRINT
120 PRINT :PRINT
130 IF INP(1)=13 THEN 130
140 POKE 1229,2
150 POKE 1237,3
160 CLS:PRINT"     INSTRUCTIONS FOR `SUPER STAR TREK'"
170 PRINT
180 PRINT"1. WHEN YOU SEE \COMMAND ?\ PRINTED, ENTER ONE OF THE LEGAL"
190 PRINT"     COMMANDS (NAV,SRS,LRS,PHA,TOR,SHE,DAM,COM, OR XXX)."
200 PRINT "2. IF YOU SHOULD TYPE IN AN ILLEGAL COMMAND, YOU'LL GET A SHORT"
210 PRINT "    LIST OF THE LEGAL COMMANDS PRINTED OUT."
220 PRINT"3. SOME COMMANDS REQUIRE YOU TO ENTER DATA (FOR EXAMPLE, THE"
230 PRINT"     `NAV' COMMAND COMES BACK WITH `COURSE (1-9) ?'.)  IF YOU"
240 PRINT"     TYPE IN ILLEGAL DATA (LIKE NEGATIVE NUMBERS, THAT COMMAND"
250 PRINT"     WILL BE ABORTED"
260 PRINT
270 PRINT"     THE GALAXY IS DIVIDED INTO AN 8 X 8 QUADRANT GRID,"
280 PRINT"AND EACH QUADRANT IS FURTHER DIVIDED INTO AN 8 X 8 SECTOR GRID."
290 PRINT
300 PRINT"     YOU WILL BE ASSIGNED A STARTING POINT SOMEWHERE IN THE"
310 PRINT"GALAXY TO BEGIN A TOUR OF DUTY AS COMMANDER OF THE STARSHIP"
320 PRINT"\ENTERPRISE\; YOUR MISSION:  TO SEEK AND DESTROY THE FLEET OF"
330 PRINT"KLINGON WARSHIPS WHICH ARE MENACING THE UNITED FEDERATION OF"
340 PRINT"PLANETS."
350 PRINT : PRINT "***TO CONTINUE WITH THE INSTRUCTIONS HIT <ENTER>."
360 GOSUB 10500:PRINT
370 PRINT"     YOU HAVE THE FOLLOWING COMMANDS AVAILABLE TO YOU AS CAPTAIN"
380 PRINT"OF THE STARSHIP ENTERPRISE:"
390 PRINT
400 PRINT"\NAV\ COMMAND = WARP ENGINE CONTROL --"
410 PRINT"     COURSE IS IN A CIRCULAR NUMERICAL      4  3  2"
420 PRINT"     VECTOR ARRANGEMENT AS SHOWN             . . ."
430 PRINT"     INTEGER AND REAL VALUES MAY BE           ..."
440 PRINT"     USED.  (THUS COURSE 1.5 IS HALF-     5 ---*--- 1"
450 PRINT"     WAY BETWEEN 1 AND 2                      ..."
460 PRINT"                                             . . ."
470 PRINT"     VALUES MAY APPROACH 9.0, WHICH         6  7  8"
480 PRINT"     ITSELF IS EQUIVALENT TO 1.0
490 PRINT"                                            COURSE"
500 PRINT"     ONE WARP FACTOR IS THE SIZE OF "
510 PRINT"     ONE QUADRANT.  THEREFORE, TO GET"
520 PRINT"     FROM QUADRANT 6,5 TO 5,5, YOU WOULD"
530 PRINT"     USE COURSE 3, WARP FACTOR 1.
540 PRINT
550 PRINT: PRINT : PRINT "***TO CONTINUE WITH THE INSTRUCTIONS, HIT <ENTER>."
560 GOSUB 10500:PRINT :PRINT:PRINT :PRINT
570 PRINT :PRINT :PRINT
580 PRINT"\SRS\ COMMAND = SHORT RANGE SENSOR SCAN"
590 PRINT
600 PRINT"     SYMBOLOGY ON YOR SENSOR SCREEN IS AS FOLLOWS:"
610 PRINT"        <*> = YOUR STARSHIP'S POSITION"
620 PRINT"        +K+ = KLINGON BATTLE CRUISER"
630 PRINT"        >!< = FEDERATION STARBASE ( REFUEL/REPAIR/RE-ARM HERE!)"
640 PRINT"         *  = STAR"
650 PRINT
660 PRINT"     A CONDENSED `STATUS REPORT' WILL ALSO BE PRESENTED."
670 PRINT
680 PRINT "\LRS\ COMMAND = LONG RANGE SENSOR SCAN"
690 PRINT"     SHOWS CONDITIONS IN SPACE FOR ONE QUADRANT ON EACH SIDE"
700 PRINT"     OF THE ENTERPRISE (WHICH IS IN THE MIDDLE OF THE SCAN)"
710 PRINT
720 PRINT"     THE SCAN IS CODED IN THE FORM \###\, WHERE THE UNITS DIGIT"
730 PRINT"     IS THE NUMBER OF STARS, THE TENS DIGIT IS THE NUMBER OF"
740 PRINT"     STARBASES, AND THE HUNDREDS DIGIT IS THE NUMBER OF"
750 PRINT"     KLINGONS."
760 PRINT
770 PRINT"     EXAMPLE - 207 = 2 KLINGONS, NO STARBASES,  7 STARS."
780 PRINT "***TO CONTINUE WITH THE INSTRUCTIONS, HIT <ENTER>."
790 GOSUB 10500:PRINT :PRINT
800 PRINT"\PHA\ COMMAND = PHASER CONTROL."
810 PRINT"     ALLOWS YOU TO DESTROY THE KLINGON BATTLE CRUISERS BY "
820 PRINT"     ZAPPING THEM WITH SUITABLY LARGE UNITS OF ENERGY TO"
830 PRINT"     DEPLETE THEIR SHIELD POWER.  REMEMBER, KLINGONS HAVE"
840 PRINT"     PHASERS, TOO!)"
850 PRINT
860 PRINT"\TOR\ COMMAND = PHOTON TORPEDO CONTROL"
870 PRINT"     TORPEDO COURSE IS THE SAME AS USED IN WARP ENGINE CONTROL"
880 PRINT"     IF YOU HIT THE KLINGON VESSEL, HE IS DESTROYED AND"
890 PRINT"     CANNOT FIRE BACK AT YOU.  IF YOU MISS, YOU ARE SUBJECT TO"
900 PRINT"     HIS PHASER FIRE.  IN EITHER CASE, YOU ARE ALSO SUBJECT TO "
910 PRINT"     THE PHASER FIRE OF ALL OTHER KLINONS IN THE QUADRANT."
920 PRINT
930 PRINT"     THE LIBRARY-COMPUTER (\COM\ COMMAND) HAS AN OPTION TO"
940 PRINT"     COMPUTE TORPEDO TRAJECTORY FOR YOU (OPTION 2)"
950 PRINT
960 PRINT :PRINT:PRINT: PRINT "TO CONTINUE WITH THE PROGRAM, HIT <ENTER>."
970 GOSUB 10500
980 PRINT :PRINT :PRINT
990 PRINT :PRINT :PRINT :PRINT
1000 PRINT"\SHE\ COMMAND = SHIELD CONTROL"
1010 PRINT"     DEFINES THE NUMBER OF ENERGY UNITS TO BE ASSIGNED TO THE"
1020 PRINT"     SHIELDS.  ENERGY IS TAKEN FROM TOTAL SHIP'S ENERGY.  NOTE"
1030 PRINT"     THAT THE STATUS DISPLAY TOTAL ENERGY INCLUDES SHIELD ENERGY"
1040 PRINT
1050 PRINT"\DAM\ COMMAND = DAMAGE CONTROL REPORT"
1060 PRINT"     GIVES THE STATE OF REPAIR OF ALL DEVICES.  WHERE A NEGATIVE"
1070 PRINT"     `STATE OF REPAIR' SHOWS THAT THE DEVICE IS TEMPORARILY"
1080 PRINT"     DAMAGED."
1090 PRINT :PRINT :PRINT
1100 PRINT: PRINT "TO CONTINUE WITH THE INSTRUCTIONS, HIT <ENTER>."
1110 GOSUB 10500
1120 PRINT
1130 PRINT"\COM\ COMMAND = LIBRARY-COMPUTER"
1140 PRINT"     THE LIBRARY-COMPUTER CONTAINS SIX OPTIONS:"
1150 PRINT"     OPTION 0 = CUMULATIVE GALACTIC RECORD"
1160 PRINT"        THIS OPTION SHOWS COMPUTER MEMORY OF THE RESULTS OF A LL"
1170 PRINT"        PREVIOUS SHORT AND LONG RANGE SENSOR SCANS"
1180 PRINT"     OPTION 1 = STATUS REPORT"
1190 PRINT"        THIS OPTION SHOWS THE NUMBER OF KLINGONS, STARDATES,"
1200 PRINT"        AND STARBASES REMAINING IN THE GAME."
1210 PRINT"     OPTION 2 = PHOTON TORPEDO DATA"
1220 PRINT"        WHICH GIVES DIRECTION AND DISTANCE FROM THE ENTERPRISE"
1230 PRINT"        TO ALL KLINGONS IN YOUR QUADRANT"
1240 PRINT"     OPTION 3 = STARBASE NAV DATA"
1250 PRINT"        THIS OPTION GIVES DIRECTION AND DISTANCE TO ANY"
1260 PRINT"        STARBASE WITHIN YOU QUADRANT"
1270 PRINT :PRINT :PRINT :PRINT
1280 PRINT "TO CONTINUE WITH THE INSTRUCTIONS, HIT <ENTER>."
1290 PRINT
1300 GOSUB 10500 : PRINT :PRINT
1310 PRINT "CONTINUATION OF AVAILABLE COMPUTER OPTIONS---" : PRINT : PRINT
1320 PRINT"     OPTION 4 = DIRECTION/DISTANCE CALCULATOR"
1330 PRINT"        THIS OPTION ALLOWS YOU TO ENTER COORDINATES FOR"
1340 PRINT"        DIRECTION/DISTANCE CALCULATIONS"
1350 PRINT"     OPTION 5 = GALACTIC /REGION NAME/ MAP"
1360 PRINT"        THIS OPTION PRINTS THE NAMES OF THE SIXTEEN MAJOR"
1370 PRINT"        GALACTIC REGIONS REFERRED TO IN THE GAME."
1380 POKE 1229,0:POKE 1237,1
1390 IF INP(1)=13 THEN 1390
1400 PRINT :PRINT "CONGRATULATIONS, YOU HAVE SUCCESSFULLY GRADUATED FROM STARFLEET ACADEMY."
1410 PRINT "YOU ARE NOW READY TO ASSUME THE HELM OF THE ENTERPRISE." :PRINT
1420 PRINT "TO OPEN COMMUNICATIONS WITH STARFLEET, INDICATING THAT YOU"
1430 PRINT "ARE NOW READY TO BEGIN YOUR JOURNEY, SIMPLY HIT <ENTER>."
1440 GOSUB 10500:PRINT
1450 REM **** SUPER STAR TREK - MAY 16, 1978 - REQUIRES 24K MEMORY ****
1460 REM
1470 REM ****        **** STAR TREK ****        ****
1480 REM **** SIMULATION OF A MISSION OF THE STARSHIP ENTERPRISE,
1490 REM **** AS SEEN ON THE STAR TREK TV SHOW.
1600 CLS:CLEAR
1610 PRINT:PRINT:PRINT:PRINT:PRINT:PRINT:PRINT:PRINT:PRINT:PRINT:PRINT
1620 PRINT"                                    ,------*------,"
1630 PRINT "                    ,-------------   `---  ------'"
1640 PRINT "                     `-------- --'      / /"
1650 PRINT"                         ,---' `-------/ /--,"
1660 PRINT "                          `----------------'":PRINT
1670 PRINT"                    THE USS ENTERPRISE --- NCC-1701"
1680 PRINT:PRINT:PRINT:PRINT:PRINT
1690 PRINT :PRINT
1710 Z$="                         "
1720 DIM G(8,8),C(9,2),K(3,3),N(3),Z(8,8),D(8)
1730 RANDOMIZE VAL(RIGHT$(TIME$,2))
1770 PRINT :PRINT :PRINT
1780 T=INT(RND(1)*20+20)*100:T0=T:T9=25+INT(RND(1)*10):D0=0:E=3000:E0=E
1790 P=10:P0=P:S9=200:S=0:B9=0:K9=0:X$="":X0$=" IS "
1800 DEF FND(D)=SQR((K(I,1)-S1)^2+(K(I,2)-S2)^2)
1810 DEF FNR(R)=INT(RND(R)*7.98+1.01)
1820 REM **************** INITIALIZE ENTERPRISE'S POSITION ****************
1830 Q1=FNR(1):Q2=FNR(1):S1=FNR(1):S2=FNR(1)
1840 FOR I=1 TO 9:C(I,1)=0:C(I,2)=0:NEXT I
1850 C(3,1)=-1:C(2,1)=-1:C(4,1)=-1:C(4,2)=-1:C(5,2)=-1:C(6,2)=-1
1860 C(1,2)=1:C(2,2)=1:C(6,1)=1:C(7,1)=1:C(8,1)=1:C(8,2)=1:C(9,2)=1
1870 FOR I=1 TO 8:D(I)=0: NEXT I
1880 A1$="NAVSRSLRSPHATORSHEDAMCOMXXX"
1890 REM ************** SETUP WHAT EXISTS IN GALAXY . . . ******************
1900 REM ************  K3= # KLINGONS  B3= # STARBASES  S3= # STARS ********
1910 FOR I=1 TO 8: FOR J=1 TO 8:K3=0:Z(I,J)=0:R1=RND(1)
1920 IF R1>0.9799999 THEN K3=3:K9=K9+3:GOTO 1950
1930 IF R1>0.95 THEN K3=2:K9=K9+2:GOTO 1950
1940 IF R1>0.8 THEN K3=1:K9=K9+1
1950 B3=0:IF RND(1)>0.96 THEN B3=1:B9=B9+1
1960 G(I,J)=K3*100+B3*10+FNR(1): NEXT J: NEXT I: IF K9>T9 THEN T9=K9+1
1970 IF B9<>0 THEN 2000
1980 IF G(Q1,Q2)<200 THEN G(Q1,Q2)=G(Q1,Q2)+100:K9=K9+1
1990 B9=0:G(Q1,Q2)=G(Q1,Q2)+10:Q1=FNR(1):Q2=FNR(1)
2000 K7=K9:IF B9<>1 THEN X$="S":X0$=" ARE "
2010 CLS:PRINT"YOUR ORDERS, SHOULD YOU ACCEPT THIS MISSION, ARE  AS FOLLOWS:"
2020 PRINT"     DESTROY THE";K9;"KLINGON WARSHIPS WHICH HAVE INVADED"
2030 PRINT"   THE GALAXY BEFORE THEY CAN ATTACK FEDERATION HEADQUARTERS"
2040 PRINT"   ON STARDATE";T0+T9;"  THIS GIVES YOU";T9;"DAYS.  THERE";X0$
2050 PRINT"  ";B9;"STARBASE";X$;" IN THE GALAXY FOR RESUPPLYING YOUR SHIP"
2060 PRINT:PRINT"HIT RETURN KEY WHEN READY TO ACCEPT COMMAND"
2070 I=RND(1)
2080 REM *********** HERE ANY TIME NEW QUADRANT ENTERED ******************
2090 Z4=Q1:Z5=Q2:K3=0:B3=0:S3=0:G5=0:D4=0.5*RND(1):Z(Q1,Q2)=G(Q1,Q2)
2100 IF Q1<1 OR Q1>8 OR Q2<1 OR Q2>8 THEN 2200
2110 GOSUB 5690 : PRINT : IF  T0<>T THEN 2140
2120 PRINT "YOUR MISSION BEGINS WITH YOUR STARSHIP LOCATED"
2130 PRINT "IN THE GALACTIC QUADRANT, `";G2$;"'.":GOTO 2150
2140 PRINT "NOW ENTERING ";G2$;" QUADRANT . . ."
2150 PRINT : K3=INT(G(Q1,Q2)*0.01):B3=INT(G(Q1,Q2)*0.1)-10*K3
2160 S3=G(Q1,Q2)-100*K3-10*B3:IF K3=0 THEN 2190
2170 PRINT"COMBAT AREA      CONDITION RED": BEEP :IF S>200 THEN 2190
2180 PRINT "   SHIELDS DANGEROUSLY LOW" : BEEP
2190 FOR I=1 TO 3:K(I,1)=0:K(I,2)=0:NEXT I
2200 FOR I=1 TO 3:K(I,3)=0: NEXT I:Q$=Z$+Z$+Z$+Z$+Z$+Z$+Z$+LEFT$(Z$,17)
2210 REM *** POSITON ENTERPRISE IN QUADRANT, THEN PLACE "K3" KLINGONS, & ***
2220 REM ***** "B3" STARBASES, & "S3" STARS ELSEWHERE. **************
2230 A$="<*>":Z1=S1:Z2=S2:GOSUB 5460:IF K3<1 THEN 2260
2240 FOR I=1 TO K3: GOSUB 5430:A$="+K+":Z1=R1:Z2=R2
2250 GOSUB 5460:K(I,1)=R1:K(I,2)=R2:K(I,3)=S9*(0.5+RND(1)): NEXT I
2260 IF B3<1 THEN 2280
2270 GOSUB 5430:A$=">!<":Z1=R1:B4=R1:Z2=R2:B5=R2:GOSUB 5460
2280 FOR I=1 TO S3: GOSUB 5430:A$=" * ":Z1=R1:Z2=R2: GOSUB 5460: NEXT I
2290 GOSUB 4470
2300 IF S+E>10 THEN IF E>10 OR D(7)=0 THEN 2370
2310 PRINT:PRINT "** FATAL ERROR ** YOU'VE JUST STRANDED YOUR SHIP IN "
2320 PRINT "SPACE":PRINT "YOU HAVE INSUFFICIENT MANEUVERING ENERGY,";
2330 PRINT " AND SHIELD CONTROL":PRINT"IS PRESENTLY INCAPABLE OF CROSS";
2340 PRINT"-CIRCUITING TO ENGINE ROOM!!"  :SOUND 75,4 : SOUND 44,6
2350 PRINT :PRINT "LT.UHURA REPORTS ALL RADIO FREQUENCIES ARE INOPERABLE!!"
2360 GOTO 4330
2370 INPUT "COMMAND";A$
2380 FOR I=1 TO 9:IF LEFT$(A$,3)<>MID$(A1$,3*I-2,3) THEN 2400
2390 ON I GOTO 2510,2290,3290,3380,3600,3960,4050,4730,4360
2400 NEXT I:PRINT "ENTER ONE OF THE FOLLOWING:"
2410 PRINT"   NAV  (TO SET COURSE)"
2420 PRINT"   SRS  (FOR SHORT RANGE SENSOR SCAN)"
2430 PRINT"   LRS  (FOR LONG RANGE SENSOR SCAN)"
2440 PRINT"   PHA  (TO FIRE PHASERS)"
2450 PRINT "   TOR  (TO FIRE PHOTON TORPEDOES)"
2460 PRINT"   SHE  (TO RAISE OR LOWER SHIELDS)"
2470 PRINT"   DAM  (FOR DAMAGE CONTROL REPORTS)"
2480 PRINT"   COM  (TO CALL ON LIBRARY-COMPUTER)"
2490 PRINT"   XXX  (TO RESIGN YOUR COMMAND)":PRINT:GOTO 2300
2500 REM ************ COURSE CONTROL BEGINS HERE **********************
2510 INPUT "COURSE (0-9)";C1: IF C1=9 THEN C1=1
2520 IF C1>=1 AND C1<9 THEN 2550
2530 PRINT "   LT. SULU REPORTS, 'INCORRECT COURSE DATA, SIR!'"
2540 PRINT "WOULD YOU LIKE TO TRY ANOTHER COMMAND, SIR?": GOTO 2300
2550 X$="8": IF D(1)<0 THEN X$="0.2"
2560 PRINT "WARP FACTOR  (0-";X$;")";: INPUT W1: IF D(1)<0 AND W1>0.2 THEN 2630
2570 IF W1>0 AND W1<8 THEN 2640
2580 IF W1=0 THEN 2300
2590 PRINT "    CHIEF ENGINEER SCOTT REPORTS `THE ENGINES WON'T TAKE";
2600 PRINT " WARP "; W1; "!'": PRINT
2610 PRINT "LET'S EASE IT DOWN SOME, CAPTAIN, OR THE ANTI-MATTER"
2620 PRINT "PODS WILL SURELY BLOW US ALL UP!!": GOTO 2300
2630 PRINT "WARP ENGINES ARE DAMAGED.  MAXIUM SPEED = WARP 0.2": BEEP : GOTO 2300
2640 N=INT(W1*8+0.5):IF E-N>=0 THEN 2720
2650 PRINT"ENGINEERING REPORTS   "INSUFFICIENT ENERGY AVAILABLE"
2660 PRINT "                       FOR MANEUVERING AT WARP";W1;"!'" : BEEP
2670 IF S<N-E OR D(7)<0 THEN 2300
2680 PRINT"DEFLECTOR CONTROL ROOM ACKNOWLEDGES";S;"UNITS OF ENERGY"
2690 PRINT"                         PRESENTLY DEPLOYED TO SHIELDS."
2700 GOTO 2300
2710 REM ******* KLINGONS MOVE/FIRE ON MOVING STARSHIP . . .***************
2720 FOR I=1 TO K3:IF K(I,3)=0 THEN 2750
2730 A$="   ":Z1=K(I,1):Z2=K(I,2):GOSUB 5460:GOSUB 5430
2740 K(I,1)=Z1:K(I,2)=Z2:A$="+K+": GOSUB 5460
2750 NEXT I:GOSUB 4210:D1=0:D6=W1:IF W1>=1 THEN D6=1
2760 FOR I=1 TO 8:IF D(I)>=0 THEN 2810
2770 D(I)=D(I)+D6: IF D(I)>-0.1 AND D(I)<0 THEN D(I)=-0.1: GOTO 2810
2780 IF D(I)<0 THEN 2810
2790 IF D1<>1 THEN D1=1 :PRINT "DAMAGE CONTROL REPORT:  ";
2800 PRINT  TAB(8);:R1=I:GOSUB 5520:PRINT  G2$;" REPAIR COMPLETED." : BEEP
2810 NEXT I:IF RND(1)>0.2 THEN 2880
2820 R1=FNR(1):IF RND(1)>=0.6 THEN 2850
2830 D(R1)=D(R1)-(RND(1)*5+1) :PRINT"DAMAGE CONTROL REPORT:  ";
2840 GOSUB 5520:PRINT G2$;" DAMAGED":PRINT: : BEEP :GOTO 2880
2850 D(R1)=D(R1)+RND(1)*3+1 :PRINT "DAMAGE CONTROL REPORT:  ";
2860 GOSUB 5520:PRINT G2$" STATE OF REPAIR IMPROVED":PRINT : BEEP
2870 REM ********* BEGIN MOVING STARSHIP **************************
2880 A$="   ":Z1=INT(S1):Z2=INT(S2):GOSUB 5460
2890 X1=C(C1,1)+(C(C1+1,1)-C(C1,1))*(C1-INT(C1)):X=S1:Y=S2
2900 X2=C(C1,2)+(C(C1+1,2)-C(C1,2))*(C1-INT(C1)):Q4=Q1:Q5=Q2
2910 FOR I=1 TO N:S1=S1+X1:S2=S2+X2:IF S1<1 OR S1>=9 OR S2<1 OR S2>=9 THEN 3040
2920 S8=INT(S1)*24+INT(S2)*3-26: IF MID$(Q$,S8,2)="  " THEN 2970
2930 S1=INT(S1-X1):S2=INT(S2-X2):PRINT "WARP ENGINES SHUT DOWN AT ";
2940 PRINT "SECTOR";S1;",";S2;"DUE TO BAD NAVIGATION":BEEP :
2950 PRINT "CHIEF ENGINEER SCOTT REPORTS `THE HULL CAN'T TAKE"
2960 PRINT "MUCH MORE OF THIS BEATING, SIR'": GOTO 2980
2970 NEXT I:S1=INT(S1):S2=INT(S2)
2980 A$="<*>":Z1=INT(S1):Z2=INT(S2): GOSUB 5460:GOSUB 3210:T8=1
2990 IF W1<1 THEN T8=0.1*INT(10*W1)
3000 T=T+T8:IF T>T0+T9 THEN 4330
3010 REM *********** SEE IF DOCKED, THEN GET COMMAND ******************
3020 GOTO 2290
3030 REM *********** EXCEEDED QUADRANT LIMITS *************************
3040 X=8*Q1+X+N*X1:Y=8*Q2+Y+N*X2:Q1=INT(X/8):Q2=INT(Y/8):S1=INT(X-Q1*8)
3050 S2=INT(Y-Q2*8):IF S1=0 THEN Q1=Q1-1:S1=8
3060 IF S2=0 THEN Q2=Q2-1:S2=8
3070 X5=0: IF Q1<1 THEN X5=1:Q1=1:S1=1
3080 IF Q1>8 THEN X5=1 : Q1=8 : S1=8
3090 IF Q2<1 THEN X5=1 : Q2=1 : S2=1
3100 IF Q2>8 THEN X5=1 : Q2=8 : S2=8
3110 IF X5=0 THEN 3180
3120 PRINT "LT. UHURA REPORTS A MESSAGE FROM STARFLEET COMMAND:" :BEEP
3130 PRINT "   `PERMISSION TO ATTEMPT CROSSING OF GALACTIC PERIMETER"
3140 PRINT " IS HEREBY *DENIED*.  SHUT DOWN YOUR ENGINES.'"
3150 PRINT "CHIEF ENGINEER SCOTT REPORTS `WARP ENGINES SHUT DOWN"
3160 PRINT " AT SECTOR";S1;",";S2; " OF QUADRANT";Q1;",";Q2;"."
3170 IF T>T0 + T9 THEN 4330
3180 IF 8*Q1+Q2=8*Q4+Q5 THEN 2980
3190 T=T+1 : GOSUB 3210 : GOTO 2090
3200 REM ********* MANUEVER ENERGY S/R ******************************
3210 E=E-N-10 : IF E>0 THEN RETURN
3220 PRINT "SHIELD CONTROL SUPPIES ENERGY TO COMPLETE THE MANEUVER."
3230 PRINT
3240 PRINT "SCOTTY REPORTS,`AYE, CAPTAIN, WE WERE VERY LUCKY THIS TIME"
3250 PRINT "WE HAD BETTER BE CAREFUL OR  NEXT TIME COULD BE OUR LAST'."
3260 S=S+E : E=0 : IF S<=0 THEN S=0
3270 RETURN
3280 REM *********LONG RANGE SENSOR SCAN CODE*************************
3290 IF D(3)<0 THEN PRINT "LONG RANGE SENSORS ARE INOPERABLE. ":BEEP : GOTO 2300
3300 PRINT "LONG RANGE SCAN FOR QUADRANT"; Q1; ","; Q2
3310 O1$="---------------------" : PRINT O1$
3320 FOR I=Q1-1 TO Q1+1 : N(1)=-1 : N(2)=-2 : N(3)=-3 : FOR J=Q2-1 TO Q2+1
3330 IF I>0 AND I<9 AND J>0 AND J<9 THEN N(J-Q2+2)=G(I,J) : Z(I,J)=G(I,J)
3340 NEXT J: FOR L=1 TO 3: PRINT ":  ";: IF N(L)<0 THEN PRINT "*** ";: GOTO 3360
3350 PRINT  RIGHT$(STR$(N(L)+1000),3);" ";
3360 NEXT L: PRINT ":": PRINT O1$: NEXT I: GOTO 2300
3370 REM ************PHASER CONTROL CODE BEGINS HERE*********************
3380 IF D(4)<0 THEN PRINT "PHASERS INOPERATIVE": BEEP :GOTO 2300
3390 IF K3>0 THEN 3420
3400 PRINT "SCIENCE OFFICER SPOCK REPORTS  `SENSORS SHOW NO ENEMY SHIPS"
3410 PRINT "                                IN THIS QUADRANT'": GOTO 2300
3420 IF D(8)<0 THEN PRINT "COMPUTER FAILURE HAMPERS ACCURACY" : BEEP
3430 PRINT "PHASERS LOCKED ON TARGET;  ";
3440 PRINT "ENERGY AVAILABLE = ";E;"UNITS"
3450 INPUT "NUMBER OF UNITS TO FIRE";X:IF X<=0 THEN 2300
3460 IF E-X<0 THEN 3440
3470 E=E-X : IF D(7)<0 THEN X=X*RND(1)
3480 H1=INT(X/K3) : FOR I=1 TO 3 : IF K(I,3)<=0 THEN 3580
3490 H=INT((H1/RND(0))*(RND(1)+2)) : IF H>0.15*K(I,3) THEN 3510
3500 PRINT "SENSORS SHOW NO DAMAGE TO ENEMY AT ";K(I,1);","; K(I,2): GOTO 3580
3510 K(I,3)=K(I,3)-H: PRINT H; "UNIT HIT ON KLINGON AT SECTOR"; K(I,1);",";
3520 PRINT K(I,2):IF K(I,3)<=0 THEN PRINT "*** KLINGON DESTROYED ***"
3530 SOUND 45,5
3540 GOTO 3560
3550 PRINT "   (SENSORS SHOW"; K(I,3); "UNITS REMAINING)": GOTO 3580
3560 K3=K3-1:K9=K9-1: Z1=K(I,1): Z2=K(I,2):A$ ="   ": GOSUB 5460
3570 K(I,3)=0:G(Q1,Q2)=G(Q1,Q2)-100:Z(Q1,Q2)=G(Q1,Q2):IF K9<=0 THEN 4430
3580 NEXT I: GOSUB 4210: GOTO 2300
3590 REM ************** PHOTON TORPEDO CODE BEGINS HERE *******************
3600 IF P<=0 THEN PRINT "ALL PHOTON TORPEDOES EXPENDED":BEEP : GOTO 2300
3610 IF D(5)<0 THEN PRINT "PHOTON TUBES ARE NOT OPERATIONAL": BEEP : GOTO 2300
3620 INPUT "PHOTON TORPEDO COURSE (1-9)"; C1: IF C1=9 THEN C1=1
3630 IF C1>=1 AND C1<9 THEN 3660
3640 PRINT "ENSIGN CHEKOV REPORTS,   `INCORRECT COURSE DATA, SIR!'"
3650 GOTO 2300
3660 X1=C(C1,1)+(C(C1+1,1)-C(C1,1))*(C1-INT(C1)):E=E-2: P=P-1
3670 X2=C(C1,2)+(C(C1+1,2)-C(C1,2))*(C1-INT(C1)):X=S1:Y=S2
3680 PRINT "TORPEDO TRACK:"
3690 X=X+X1:Y=Y+X2:X3=INT(X+0.5):Y3=INT(Y+0.5)
3700 IF X3<1 OR X3>8 OR Y3<1 OR Y3>8 THEN 3940
3710 PRINT "            ";X3;",";Y3:A$="    ":Z1=X:X2=Y: GOSUB 5620
3720 IF Z3<>0 THEN 3690
3730 A$="+K+": Z1=X:Z2=Y: GOSUB 5620 : IF Z3=0 THEN 3790
3740 PRINT "*** KLINGON DESTROYED ***":K3=K3-1:K9=K9-1:SOUND 45,5
3750 IF K9<=0 THEN 4430
3760 FOR I=1 TO 3 : IF X3=K(I,1) AND Y3=K(I,2) THEN 3780
3770 NEXT I:I=3
3780 K(I,3)=0: GOTO 3920
3790 A$=" * ":Z1=X : Z2=Y : GOSUB 5620 :IF Z3=0 THEN 3810
3800 PRINT "STAR AT";X3;",";Y3;"ABSORBED TORPEDO ENERGY.":GOSUB 4210:GOTO 2300
3810 A$=">!<":Z1=X:Z2=Y:GOSUB 5620:IF Z3=0 THEN 3620
3820 PRINT "*** STARBASE DESTROYED ***": SOUND 45,5 :PRINT :B3=B3-1:B9=B9-1
3830 IF B9>0 OR K9>T-T0-T9 THEN 3870
3840 PRINT"THAT DOES IT, CAPTAIN!!  YOU ARE HEREBY RELIEVED OF COMMAND"
3850 PRINT"AND SENTENCED TO 99 STARDATES AT HARD LABOR ON CYGNUS 12!!":PRINT
3860 GOTO 4360
3870 PRINT"STARFLEET COMMAND REVIEWING YOUR RECORD TO CONSIDER" : SOUND 45,5
3880 PRINT "CONVENING A GENERAL COURT MARTIAL."
3890 PRINT "YOU ARE  ADVISED TO BE MORE CAREFUL IN THE FUTURE,"
3900 PRINT "GOOD LAWYERS ARE HARD TO FIND, ESPECIALLY IN THIS QUADRANT--"
3910 PRINT "THEY ARE ALMOST AS BAD AS DENUBIAN BLOODSUCKERS.":PRINT :D0=0
3920 Z1=X:Z2=Y:A$="   ":GOSUB 5460
3930 G(Q1,Q2)=K3*100+B3*10+S3:Z(Q1,Q2)=G(Q1,Q2):GOSUB 4210:GOTO 2300
3940 PRINT"TORPEDO MISSED":GOSUB 4210:GOTO 2300
3950 REM ********** SHIELD CONTROL ************************
3960 IF D(7)<0 THEN PRINT "SHIELD CONTROL INOPERABLE": BEEP : GOTO 2300
3970 PRINT "ENERGY AVAILABLE =";E+S;:INPUT"NUMBER OF UNITS TO SHIELDS";X
3980 IF X<0 OR S=X THEN PRINT"<SHIELDS UNCHANGED>":GOTO 2300
3990 IF X<=E+S THEN 4020
4000 PRINT "SHIELD CONTROL REPORTS  `THIS IS NOT THE FEDERATION TREASURY.'"
4010 PRINT "<SHIELDS UNCHANGED>": BEEP : GOTO 2300
4020 E=E+S-X:S=X:PRINT"DEFLECTOR CONTROL ROOM REPORT:"
4030 PRINT "  `SHIELDS NOW AT";INT(S);"UNITS PER YOUR COMMAND.'":GOTO 2300
4040 REM *************** DAMAGE CONTROL ***********************
4050 IF D(6)>=0 THEN 4160
4060 PRINT "DAMAGE CONTROL REPORT NOT AVAILABLE":BEEP :IF D0=0 THEN 2300
4070 D3=0:FOR I=1 TO 8:IF D(I)<0 THEN D3=D3+1
4080 NEXT I:IF D3=0 THEN 2300
4090 PRINT:D3=D3+D4:IF D3>=1 THEN D3=0.9000001
4100 PRINT "TECHNICIANS STANDING BY TO EFFECT REPAIRS TO YOUR SHIP;"
4110 PRINT "ESTIMATED TIME TO REPAIR:";0.01*INT(100*D3);"STARDATES"
4120 INPUT "WILL YOU AUTHORIZE THE REPAIR ORDER (Y/N)";A$
4130 IF A$<>"Y" THEN 2300
4140 FOR I=1 TO 8:IF D(I)<0 THEN D(I)=0
4150 NEXT I:T=T+D3+0.1
4160 PRINT:PRINT "DEVICE             STATE OF REPAIR":FOR R1=1 TO 8
4170 GOSUB 5520:PRINT G2$; LEFT$(Z$,25-LEN(G2$));INT(D(R1)*100)*0.01
4180 NEXT R1:PRINT:IF D0<>0 THEN 4070
4190 GOTO 2300
4200 REM ************ KLINGONS SHOOTING *************************
4210 IF K3<=0 THEN RETURN
4220 IF D0<>0 THEN PRINT "STARBASE SHIELDS PROTECT THE ENTERPRISE":SOUND 45,52835. RETURN
4230 FOR I=1 TO 3:IF K(I,3)<=0 THEN 4310
4240 H=INT((K(I,3)/RND(1))*(2+RND(1))):S=S-H:K(I,3)=K(I,3)/(3+RND(0))
4250 PRINT"UNIT HIT ON ENTERPRISE FROM SECTOR";K(I,1);",";K(I,2) :SOUND 55,4
4260 IF S<=0 THEN 4340
4270 PRINT"      SHIELDS DOWN TO";S;"UNITS>": BEEP :IF H<20 THEN 4310
4280 IF RND(1)>0.6 OR H/S<=0.02 THEN 4310
4290 R1=FNR(1):D(R1)=D(R1)-H/S-0.5*RND(1):GOSUB 5520
4300 PRINT"DAMAGE CONTROL REPORTS `";G2$;" DAMAGED BY THE HIT'"  : BEEP
4310 NEXT I:RETURN
4320 REM************ END OF GAME *********************************
4330 PRINT "IT IS STARDATE";T:GOTO 4360
4340 PRINT:PRINT"THE ENTERPRISE HAS BEEN DESTROYED.  THE FEDERATION ";
4350 GOTO 4330
4360 PRINT "THERE WERE";K9;"KLINGON BATTLE CRUISERS LEFT AT"
4370 PRINT "THE END OF YOUR MISSION."
4380 PRINT:PRINT:IF B9=0 THEN 4420
4390 PRINT "THE FEDERATION IS IN NEED OF A NEW STARSHIP COMMANDER"
4400 PRINT "FOR A SIMILAR MISSION -- IF THERE IS A VOLUNTEER,"
4410 INPUT "LET HIM STEP FORWARD AND ENTER `AYE'";A$:IF A$="AYE" THEN 1450
4420 SYSTEM
4430 PRINT "CONGRATULATIONS, CAPTAIN!  THE LAST KLINGON BATTLE CRUISER"
4440 PRINT "MENACING THE FEDERATION HAS BEEN DESTROYED.":PRINT
4450 PRINT "YOUR EFFICIENCY RATING IS";1000*(K7/(T-T0))^2:GOTO 4380
4460 REM*********** SHORT RANGE SENSOR SCAN & STARTUP SUBROUTINE ***********
4470 FOR I=S1-1  TO S1+1:FOR J=S2-1 TO S2+1
4480 IF INT(I+0.5)<1 OR INT(I+0.5)>8 OR INT(J+0.5)<1 OR INT(J+0.5)>8 THEN 4500
4490 A$=">!<":Z1=I:Z2=J:GOSUB 5620:IF Z3=1 THEN 4510
4500 NEXT J:NEXT I:D0=0:GOTO 4560
4510 D0=1:C$="DOCKED":E=E0:P=P0
4520 PRINT "SHIELDS DROPPED FOR DOCKING PURPOSES": BEEP :PRINT
4530 PRINT "IF YOU NEED OR WANT TO EFFECT REPAIRS TO DAMAGED EQUIPMENT,"
4540 PRINT "WHILE YOU ARE DOCKED, USE THE DAMAGE COMMAND (DAM)." :PRINT
4550 S=0:GOTO 4580
4560 IF K3>0 THEN C$="*RED*":GOTO 4580
4570 C$="GREEN":IF E<E0*0.1 THEN C$="YELLOW"
4580 IF D(2)>=0 THEN 4600
4590 PRINT:PRINT"*** SHORT RANGE SENSORS ARE OUT ***":BEEP:PRINT:RETURN
4600 O1$="---------------------------------":PRINT O1$ : FOR I=1 TO 8
4610 FOR J=(I-1)*24+1 TO (I-1)*24+22 STEP 3:PRINT" ";MID$(Q$,J,3);:NEXT J
4620 ON I GOTO 4630,4640,4650,4660,4670,4680,4690,4700
4630 PRINT"        STARDATE          ";INT(T*10)*0.1:GOTO 4710
4640 PRINT"        CONDITION          ";C$:GOTO 4710
4650 PRINT"        QUADRANT          ";Q1;",";Q2:GOTO 4710
4660 PRINT"        SECTOR            ";S1;",";S2:GOTO 4710
4670 PRINT"        PHOTON TORPEDOES  ";INT(P):GOTO 4710
4680 PRINT"        TOTAL ENERGY      ";INT(E+S):GOTO 4710
4690 PRINT"        SHIELDS           ";INT(S):GOTO 4710
4700 PRINT"        KLINGONS REMAINING";INT(K9)
4710 NEXT I:PRINT O1$:RETURN
4720 REM**************LIBRARY COMPUTER CODE****************
4730 IF D(8)<0 THEN PRINT"COMPUTER DISABLED":BEEP : GOTO 2300
4740 PRINT:PRINT
4750 PRINT "HIT `6' FOR A LISTING OF FUNCTIONS"
4760 PRINT "AVAILABLE FROM LIBRARY-COMPUTER...":PRINT:PRINT : GOTO 4770
4770 INPUT"COMPUTER ACTIVE AND AWAITING COMMAND";A:IF A<0 THEN 2300
4780 PRINT:H8=1:ON A+1 GOTO 4890,5020,5130,5390,5190,4870
4790 PRINT"FUNCTIONS AVAILABLE FROM LIBRARY-COMPUTER:"
4800 PRINT"   0 = CUMULATIVE GALACTIC RECORD"
4810 PRINT"   1 = STATUS REPORT"
4820 PRINT"   2 = PHOTON TORPEDE DATA"
4830 PRINT"   3 = STARBASE NAV DATA"
4840 PRINT"   4 = DIRECTION/DISTANCE CALCULATOR"
4850 PRINT"   5 = GALAXY `REGION NAME' MAP":PRINT:GOTO 4770
4860 REM*************** SETUP TO CHANGE CUM GAL RECORD TO GALAXY MAT **********
4870 H8=0:G5=1:PRINT"                        THE GALAXY":GOTO 4920
4880 REM*************** CUM GALACTIC RECORD ****************
4890 PRINT:PRINT"         ";
4900 PRINT"COMPUTER RECORD OF GALAXY FOR QUADRANT";Q1;",";Q2
4910 PRINT
4920 PRINT"         1      2      3      4      5      6      7     8"
4930 O1$="       -----  -----  -----  -----  -----  -----  -----  -----"
4940 PRINT O1$:FOR I=1 TO 8:PRINT I;:IF H8=0 THEN 4980
4950 FOR J=1 TO 8:PRINT"    ";:IF Z(I,J)=0 THEN PRINT"***";:GOTO 4970
4960 PRINT RIGHT$(STR$(Z(I,J)+1000),3);
4970 NEXT J:GOTO 5000
4980 Z4=I:Z5=1:GOSUB 5690:J0=INT(15-0.5*LEN(G2$)):PRINT TAB(J0);G2$;
4990 Z5=5:GOSUB 5690:J0=INT(39-0.5*LEN(G2$)):PRINT TAB(J0);G2$;
5000 PRINT:PRINT O1$:NEXT I:PRINT :POKE 1229,0:POKE 1237,1 :NULL=0:GOTO 2300
5010 REM*************** STATUS REPORT *****************
5020 PRINT "   STATUS REPORT:":X$="":IF K9>1 THEN X$="S"
5030 PRINT"KLINGON";X$;" LEFT: ";K9
5040 PRINT"MISSION MUST BE COMPLETED IN";0.1*INT((T0+T9-T)*10);"STARDATES"
5050 X$="S":IF B9<2 THEN X$="":IF B9<1 THEN 5080
5060 PRINT"THE FEDERATION IS MAINTAINING";B9;"STARBASE";X$;" IN THE GALAXY"
5070 GOTO 4050
5080 PRINT"YOUR POSITION IN THE GALAXY INDICATES "
5090 PRINT"THAT YOU HAVE NO STARBASES AVAILABLE TO YOU."
5100 PRINT:PRINT"CAPTAIN, YOU ARE ON YOUR OWN--BE CAREFUL!!!!"
5110 GOTO 4050
5120 REM************* TORPEDO, BASE NAV, D/D CALCULATOR ****************
5130 IF K3<=0 THEN 3400
5140 X$="":IF K3>1 THEN X$="S"
5150 PRINT "FROM ENTERPRISE TO KLINGON BATTLE CRUISER";X$
5160 H8=0: FOR I=1 TO 3: IF K(I,3)<=0 THEN 5380
5170 W1=K(I,1):X=K(I,2)
5180 C1=S1:A=S2: GOTO 5230
5190 PRINT "DIRECTION/DISTANCE CALCULATOR:"
5200 PRINT "YOU ARE AT QUADRANT  ";Q1;",";Q2;"  SECTOR  ";S1;",";S2
5210 PRINT "PLESE ENTER": INPUT "   INITIAL COORDINATES (X,Y)";C1,A
5220 INPUT "   FINAL COORDINATES (X,Y)";W1,X
5230 X=X-A:A=C1-W1: IF X<0 THEN 5310
5240 IF A<0 THEN 5330
5250 IF X>0 THEN 5270
5260 IF A=0 THEN C1=5: GOTO 5280
5270 C1=1
5280 IF ABS(A)<=ABS(X) THEN 5300
5290 PRINT"DIRECTION ="; C1+(((ABS(A)-ABS(X))+ABS(A))/ABS(A)): GOTO 5370
5300 PRINT"DIRECTION =";C1+(ABS(A)/ABS(X)): GOTO 5370
5310 IF A>0 THEN C1=3 : GOTO 5340
5320 IF X<>0 THEN C1=5 : GOTO 5280
5330 C1=7
5340 IF ABS(A)>=ABS(X) THEN 5360
5350 PRINT "DIRECTION ="; C1+(((ABS(X)-ABS(A))+ABS(X))/ABS(X)) :GOTO 5370
5360 PRINT "DIRECTION =";C1+(ABS(X)/ABS(A))
5370 PRINT "DISTANCE ="; SQR(X^2+A^2): IF H8=1 THEN 2300
5380 NEXT I : GOTO 2300
5390 IF B3<>0 THEN PRINT"FROM ENTERPRISE TO STARBASE:":W1=B4:X=B5: GOTO 5180
5400 PRINT "MR. SPOCK REPORTS,  `SENSORS SHOW NO STARBASES IN THIS";
5410 PRINT " QUADRANT.'" : GOTO 2300
5420 REM ********** FIND EMPTY PLACE IN QUADRANT (FOR THINGS) **********
5430 R1=FNR(1):R2=FNR(1):A$="   ":Z1=R1:Z2=R2: GOSUB 5620: IF Z3=0 THEN 5430
5440 RETURN
5450 REM *********** INSERT IN STRING ARRAY FOR QUADRANT ****************
5460 S8=INT(Z2-0.5)*3+INT(Z1-0.5)*24+1
5470 IF LEN(A$)<>3 THEN PRINT"ERROR": STOP
5480 IF S8=1 THEN Q$=A$+RIGHT$(Q$,189) : RETURN
5490 IF S8=190 THEN Q$=LEFT$(Q$,189)+A$ : RETURN
5500 Q$=LEFT$(Q$,S8-1)+A$+RIGHT$(Q$,190-S8) : RETURN
5510 REM **************** PRINTS DEVICE NAME **************************
5520 ON R1 GOTO 5530,5540,5550,5560,5570,5580,5590,5600
5530 G2$="WARP ENGINES": RETURN
5540 G2$="SHORT RANGE SENSORS": RETURN
5550 G2$="LONG RANGE SENSORS": RETURN
5560 G2$="PHASER CONTROL": RETURN
5570 G2$="PHOTON TUBES": RETURN
5580 G2$="DAMAGE CONTROL": RETURN
5590 G2$="SHIELD CONTROL": RETURN
5600 G2$="LIBRARY-COMPUTER": RETURN
5610 REM ************** STRING COMPARISON IN QUADRANT ARRAY ****************
5620 Z1=INT(Z1+0.5):Z2=INT(Z2+0.5):S8=(Z2-1)*3+(Z1-1)*24+1:Z3=0
5630 IF MID$(Q$,S8,3)<>A$ THEN RETURN
5640 Z3=1: RETURN
5650 REM *********** QUADRANT NAME IN G2$ FROM Z4, Z5 (=Q1,Q2) **************
5660 REM **** CALL WITH G5=1 TO GET REGION NAME ONLY ****
5670 REM ************ QUADRANT NAME IN G2$ FROM Z4, Z5 (=Q1,Q2) ****
5680 REM ************ CALL WITH G5=1 TO GET REGION NAME ONLY ****
5690 IF Z5<=4 THEN ON Z4 GOTO 5710,5720,5730,5740,5750,5760,5770,5780
5700 GOTO 5790
5710 G2$="ANTARES":GOTO 5880
5720 G2$="RIGEL":GOTO 5880
5730 G2$="PROCYON":GOTO 5880
5740 G2$="VEGA":GOTO 5880
5750 G2$="CANOPUS":GOTO 5880
5760 G2$="ALTAIR":GOTO 5880
5770 G2$="SAGITTARIUS":GOTO 5880
5780 G2$="POLLUX":GOTO 5880
5790 ON Z4 GOTO 5800,5810,5820,5830,5840,5850,5860,5870
5800 G2$="SIRIUS":GOTO 5880
5810 G2$="DENEB":GOTO 5880
5820 G2$="CAPELLA":GOTO 5880
5830 G2$="BETELGEUSE":GOTO 5880
5840 G2$="ALDEBARAN":GOTO 5880
5850 G2$="REGULUS":GOTO 5880
5860 G2$="ARCTURUS":GOTO 5880
5870 G2$="SPICA"
5880 IF G5<>1 THEN ON Z5 GOTO 5900,5910,5920,5930,5900,5910,5920,5930
5890 RETURN
5900 G2$=G2$+" I":RETURN
5910 G2$=G2$+" II":RETURN
5920 G2$=G2$+" III":RETURN
5930 G2$=G2$+" IV":RETURN
10500 IN$=INKEY$:IF IN$="" THEN 10500 ELSE CLS:RETURN
```
{% endraw %}

## WORDS.BAS

{% raw %}
```bas
10000 DATA fat,cat,act,can,fast,hat,hand,last,man,ran,have
10010 DATA red,hen,let,get,help,next,pet,men,went,bed,said
10020 DATA big,pig,fir,did,swim,six,dig,win,sit,hit,been
10030 DATA rug,bug,jump,hunt,fun,must,cup,bus,cut,run,of,from
10040 DATA hot,pond,got,hop,not,dog,log,lost,soft,on,was,want
10050 DATA glass,grass,bell,dress,will,still,off,cross,fuss,stuff,roll
10060 DATA milk,truck,ask,back,mask,neck,desk,sick,silk,rock
10070 DATA fish,dish,brush,splash,wish,ship,shop,shed,shut,shelf,wash
10080 DATA rich,witch,lunch,catch,ranch,pitch,such,match,much,stretch,watch
10090 DATA that,this,them,than,then,thin,bath,thick,with,cloth,both
10100 DATA pink,thank,bank,think,trunk,string,sang,long,bring,hung,young
10110 DATA play,day,may,say,stay,train,rain,wait,paint,mail,they
10120 DATA bake,safe,chase,came,cake,gave,late,game,name,made,break
10130 DATA see,need,keep,sleep,me,she,clean,read,teach,piece
10140 DATA try,dry,by,cry,fly,pie,tie,lie,cried,tried,eye
10150 DATA side,line,five,time,like,fine,ride,hide,kite,mine,give
10160 DATA find,kind,mind,hind,blind,right,night,light,fight,might,wind
10170 DATA go,no,slow,show,own,low,boat,road,goat,coat,to,do
10180 DATA cold,nose,old,those,hold,close,told,hope,gold,home,one
10190 DATA new,chew,few,blue,threw,true,grew,suit,flew,fruit,build
10200 DATA use,mule,cute,goose,loose,choose,food,soon,zoo,room,you,school
10210 DATA some,friend,done,does,come,shoe,move,guess,live,head
10220 DATA put,pull,push,full,bush,foot,look,good,book,took,could,should,would
10230 DATA why,wheel,when,whip,which,who,white,whose,while,what
10240 DATA all,draw,ball,crawl,call,fault,fall,caught,saw,taught,shall,gone
10250 DATA brown,house,cow,found,down,sound,how,our,now,out,your,four
10260 DATA toy,noise,joy,point,boy,soil,join,boil,oil,spoil
10270 DATA hear,year,ear,rear,dear,cheer,clear,deer,near,steer,here
10280 DATA hair,care,air,scare,pair,bare,chair,square,fair,share,bear,where
10290 DATA fork,or,for,short,horse,floor,store,tore,shore,more,wore,door
10300 DATA barn,yard,car,arm,farm,are,hard,dark,far,march,part
10310 DATA her,jerk,serve,girl,bird,first,third,curl,turn,hurt,word,work,were
10320 DATA better,never,after,under,coller,color,other,mother,water father
10330 DATA funny,happy,story,hurry,party,any,many,very,ready,pretty
10340 DATA write,knew,know,wrote,lamb,talk,walk,laugh,climb,eight
10350 DATA one,two,three,four,five,six,seven,eight,nine,ten
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0740

     Volume in drive A has no label
     Directory of A:\

    BACKGAM  BAS      4736   7-26-84   8:28a
    BLACK    BAS     15956   3-20-86   6:38p
    FRANK    BAS      6045   3-20-86   6:39p
    STARTREK BAS     25683  12-05-86  10:22p
    WORDS    BAS      2560   7-26-84   8:28a
    INSTALL  BAT      5927  12-01-86  11:00p
    SETUP    BAT      5638  12-01-86  11:00p
    ASK      COM       986   7-24-85   1:00p
    CHESS    COM     64894  10-29-85   5:12p
    GO-MOKU  COM     20932  10-24-85   4:59p
    RVERSI   COM     21413   8-23-86   7:52p
    3DTICTAC EXE     37760  10-08-85  11:13p
    BRICKS   EXE     18432   5-26-85   1:57a
    GO-MOKU  HLP       644   9-19-85   3:17p
    OPENING  LIB     32000  10-29-85   5:18p
    GAMES    M        4590  12-01-86  11:00p
    READ     ME        496  12-01-86  11:00p
    READ     ME1      1063  12-01-86  11:00p
    GAMES    MH       2089  12-01-86  11:00p
    CHESS             4480   3-05-87   1:35p
    FILES740 TXT      2124   4-16-87   2:38p
           21 file(s)     278448 bytes
                           33792 bytes free
