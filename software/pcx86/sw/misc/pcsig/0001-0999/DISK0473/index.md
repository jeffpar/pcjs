---
layout: page
title: "PC-SIG Diskette Library (Disk #473)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0473/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0473"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "TRIVIAL TOWERS 1 OF 2 (ALSO 474)"

    Trivia freaks -- here's a new twist on an old favorite!
    
    TRIVIAL TOWERS, for two to four players, tests your knowledge of trivia
    on a variety of different subjects.  By answering correctly, you build
    ``towers.''  When all four towers have been completed, you win the
    game. There are special spaces on the gameboard, that when landed on,
    let you choose any topic of your choice.
    
    When you tire of the canned questions, enter your own questions and
    answers, and build a custom game.  How about a section on your own
    family?  How many times did Great-Aunt Tillie marry?  What is the one
    thing that Dad will NOT eat?  You get the idea.  Have fun!
    File Descriptions:
    
    The First Disk Contains:
    TTSHARE  DOC  A welcome letter from the authors giving definitions.
    TTNOTE   BAS  A letter from the authors of the program.
    TTRULES  BAS  Rules for TTOWERS.BAS and directions on how to customize.
    TTOWERS  BAS  Main program.
    TTENTER  BAS  Program to enable the user to write customized questions.
    
    The Second Disk Contains:
    CAPITALS      Question and answer file.
    INCOMMON      Question and answer file.
    COMPUTER S    Question and answer file.
    VANITY        Question and answer file.
    WRITERS       Question and answer file.
    TVFILM        Question and answer file.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## TTENTER.BAS

```bas
1 COLOR 0,0,0
1000 REM *********************************************************************
1010 REM *                                                                   *
1020 REM *        TRIVIAL TOWERS QUESTION ENTRY PROGRAM                      *
1030 REM *        COPYRIGHT 1984, VINYARD SOFTWARE, INC.                     *
1040 REM *        UNPUBLISHED WORK - ALL RIGHTS RESERVED                     *
1050 REM *                                                                   *
1060 REM *********************************************************************
1200 COLOR 7,4
1210 KEY OFF
1220 CLS
1230 PRINT TAB(18);"********************************************************"
1240 PRINT TAB(18);"**       TRIVIAL TOWERS QUESTION ENTRY PROGRAM        **"
1250 PRINT TAB(18);"**       COPYRIGHT 1984, VINYARD SOFTWARE, INC.       **"
1255 PRINT TAB(18);"**       UNPUBLISHED WORK - ALL RIGHTS RESERVED       **"
1260 PRINT TAB(18);"********************************************************"
1270 PRINT:PRINT
1320 PRINT "AFTER YOU HAVE REMOVED THE PROGRAM DISK AND INSERTED THE"
1330 PRINT "QUESTIONS DISK, PUSH THE RETURN KEY";
1340 INPUT Y$
1350 COLOR 7,4,0 : CLS
1360 PRINT "YOU MAY UPDATE ONE OF THE FOLLOWING FILES (OR CREATE A NEW ONE):"
1370 PRINT:PRINT
1390 FILES
1400 PRINT:PRINT
2000 REM            OPEN FILE
2020 PRINT "WHAT IS THE NAME OF THE QUESTIONS FILE (INCLUDE DISK DRIVE:)"
2030 PRINT "(TYPE  R  TO RETURN TO TRIVAL TOWERS, OR"
2035 PRINT " TYPE  X  TO EXIT FROM PROGRAM)       ";
2040 INPUT Y$
2050 IF Y$ = "R" GOTO 9900
2051 IF Y$ = "r" GOTO 9900
2052 IF Y$ = "X" GOTO 9900
2053 IF Y$ = "x" GOTO 9900
2055 IF Y$ = "" GOTO 9900
2060 LET F$ = Y$
2070 CLOSE#1
2080 OPEN F$ AS #1
2090 FIELD#1,72 AS Q$, 56 AS A$
3000 REM        DISPLAY, UPDATE, OR EXIT
3010 CLS
3020 PRINT "LIST, DISPLAY, UPDATE, OR EXIT ";F$;"? (L/D/U/X)";
3030 INPUT Y$
3035 IF Y$ = "L" GOTO 4000
3036 IF Y$ = "l" GOTO 4000
3040 IF Y$ = "D" GOTO 5000
3041 IF Y$ = "d" GOTO 5000
3050 IF Y$ = "U" GOTO 6000
3051 IF Y$ = "u" GOTO 6000
3060 IF Y$ = "X" GOTO 1000
3061 IF Y$ = "x" GOTO 1000
3070 GOTO 3020
4000 REM          LIST TO PRINTER
4020 CLS
4030 GOSUB 8400
4040 PRINT : PRINT "ENTER QUESTION SET # TO START LISTING"
4050 PRINT "(NOTE THAT A ZERO WILL EXIT ROUTINE.)";
4060 INPUT L1 : IF L1 < 1 GOTO 3000
4070 PRINT : PRINT "ENTER QUESTION SET # TO END LISTING"
4080 PRINT "(NOTE THAT A ZERO WILL EXIT ROUTINE.)";
4090 INPUT L2 : IF L2 < 1 GOTO 3000
4100 IF L2 > N THEN LET L2 = N
4110 IF L2 < L1 THEN LET L2 = L1
4120 PRINT : PRINT "PLEASE PUSH RETURN KEY WHEN PRINTER IS ON";
4130 INPUT Y$
4140 CLS
4150 PRINT "LISTING FROM";L1;" TO";L2;" OUT OF FILE -> ";F$
4155 LPRINT "QUESTIONS AND ANSWERS FROM FILE -> ";F$;" <-" : LPRINT
4160 FOR I = L1 TO L2
4170     GET #1,I
4180     LPRINT "Q";I;":";Q$
4190     LPRINT "A";I;":";A$
4200     LPRINT
4210 NEXT I
4220 GOTO 3000
5000 REM DISPLAY QUESTION AND ANSWER SETS
5010 CLS
5020 GOSUB 8400
5030 PRINT
5040 PRINT "WHICH ONE DO YOU WANT TO DISPLAY?"
5050 PRINT "(NOTE:  A NUMBER LESS THAN ONE WILL EXIT THIS ROUTINE.)";
5060 INPUT N1
5070 IF N1<1 GOTO 3000
5080 IF N1>N GOTO 5040
5090 GET #1,N1
5100 CLS
5105 COLOR 0,2
5110 PRINT "QUESTION #";N1;" IS:"
5120 COLOR 0,5
5130 PRINT Q$
5140 COLOR 7,0
5150 LOCATE 5
5155 COLOR 0,2
5160 PRINT "ANSWER #";N1;" IS:"
5170 COLOR 0,5
5180 PRINT A$
5190 LOCATE 24
5195 COLOR 0,6
5200 PRINT "PUSH <RETURN> TO CONTINUE";
5210 INPUT Y$
5215 COLOR 0,4
5220 GOTO 5000
6000 REM      MODIFY THE QUESTIONS AND ANSWERS
6005 CLS
6010 COLOR 0,4
6020 PRINT "MODIFY, ADD, OR EXIT?  (M/A/X)";
6030 INPUT Y$
6040 IF Y$ = "M" GOTO 6100
6041 IF Y$ = "m" GOTO 6100
6050 IF Y$ = "A" GOTO 6500
6051 IF Y$ = "a" GOTO 6500
6060 IF Y$ = "X" GOTO 3000
6061 IF Y$ = "x" GOTO 3000
6070 GOTO 6020
6100 REM        MODIFY THE ACTUAL QUESTIONS AND ANSWERS
6110 CLS
6120 GOSUB 8400
6130 PRINT "WHICH SET DO YOU WANT TO MODIFY?"
6140 PRINT "(NOTE:  A NUMBER LESS THAN ONE WILL EXIT THIS ROUTINE.)";
6150 INPUT N1
6160 IF N1<1 GOTO 6000
6170 IF N1>N GOTO 6120
6180 GET#1,N1
6190 CLS
6195 COLOR 0,6
6200 PRINT "QUESTION SET";N1
6210 PRINT
6215 COLOR 0,5
6225 PRINT "OLD Q: ";Q$
6235 PRINT "OLD A: ";A$
6240 PRINT
6245 COLOR 0,6
6250 PRINT "ENTER NEW QUESTION (TYPE THE LETTER X TO EXIT)."
6260 COLOR 0,3
6262 PRINT
6265 PRINT "NEW QUESTION:"
6270 PRINT "1   5   10   15   20   25   30   35   40   45   50   55   60   65     72"
6280 LINE INPUT Q1$
6290 IF Q1$ = "X" GOTO 6000
6291 IF Q1$ = "x" GOTO 6000
6300 IF LEN(Q1$) < 73 GOTO 6330
6310 PRINT "QUESTION TOO LONG.  72 CHARACTER MAXIMUM.  PLEASE TRY AGAIN."
6320 GOTO 6270
6330 PRINT
6340 PRINT "NEW ANSWER:"
6350 PRINT "1   5   10   15   20   25   30   35   40   45   50    56"
6370 LINE INPUT A1$
6380 IF A1$ = "X" GOTO 6000
6381 IF A1$ = "x" GOTO 6000
6390 IF LEN(A1$) < 57 GOTO 6420
6400 PRINT "ANSWER TOO LONG.  56 CHARACTER MAXIMUM.  PLEASE TRY AGAIN."
6410 GOTO 6350
6420 LSET Q$ = Q1$
6440 LSET A$ = A1$
6450 PUT #1,N1
6460 COLOR 0,4
6470 IF Y$ = "M" GOTO 6100
6471 IF Y$ = "m" GOTO 6100
6500 REM         ADD QUESTION AND ANSWER SETS
6510 CLS
6520 GOSUB 8400
6530 N1=N+1
6540 PRINT
6550 GOTO 6250
7998 GOTO 9900
7999 STOP
8400 REM     DETERMINE NUMBER OF QUESTION AND ANSWER SETS IN THE FILE
8410 N = LOF(1)/128
8420 PRINT "THERE ARE";N;" QUESTION AND ANSWER SETS IN ";F$
8430 RETURN
9900 REM        END OF PROGRAM
9980 CLOSE#1
9990 COLOR 0,4
9991 CLS
9993 PRINT "REMOVE THE QUESTIONS DISK AND INSERT THE PROGRAM DISK, THEN PUSH THE RETURN KEY";
9994 INPUT X : COLOR 7,0,0
9995 IF (Y$="X") OR (Y$="x") THEN CLS : KEY ON : END
9998 CHAIN "A:TTOWERS.BAS"
9999 END
```

## TTNOTE.BAS

```bas
10 LPRINT"                              Ed Mickolus and Calvin Andrus"
20 LPRINT"                              2243 Beacon Lane"
30 LPRINT"                              Falls Church, Va. 22043-1709":LPRINT
40 LPRINT"Dear Trivia Lover,"
50 LPRINT"     Surprised by the simplicity of Trivial Towers' packaging?"
60 LPRINT"You'll find the instructions you need on the program disk.  And, as"
70 LPRINT"a new firm, we thought it would be mutually agreeable to eliminate"
80 LPRINT"the frills and give you a valuable product at a very affordable price."
90 LPRINT"     Unlike the big firms, we also value the goodwill of our"
100 LPRINT"customers, and believe in trusting each other.  We believe that you"
110 LPRINT"have a right to back up copies of software, including Trivial"
120 LPRINT"Towers, that you buy, and have not electronically protected the"
130 LPRINT"enclosed disks.  So make as many backup copies as you need, but"
140 LPRINT"respect our copyright and let your friends buy their own copy."
290 LPRINT"     You'll find 3 levels of difficulty in Trivial Towers"
300 LPRINT"Questions categories.  Be forewarned--COMPUTERS is fairly"
310 LPRINT"demanding, while VANITY (personalized license plates we have"
320 LPRINT"actually seen) is fairly easy.  INCOMMON list can be challenging--"
330 LPRINT"the lists ask you to either determine what several individuals or"
340 LPRINT"things have in common, or want you to determine what single word"
350 LPRINT"can be added to the front or back of the listed words to make new"
360 LPRINT"terms or words.  TVFILM, CAPITALS, and WRITERS are of mid-range"
370 LPRINT"difficulty."
371 LPRINT"     To boot up, load your DOS and BASIC as you normally do, then"
372 LPRINT"put the Program disk in the A Drive.  For a copy of the rules, "
373 LPRINT"turn on your printer and enter RUN ''TTRULES.  If you don't have"
374 LPRINT"a printer, LOAD TTRULES and then LIST the program.  If you'd "
375 LPRINT"prefer to jump into the game, enter RUN ''TTOWERS.  The program"
376 LPRINT"will guide you from there.   By the way, in case you lose this "
377 LPRINT"note, it is on your program disk as TTNOTE, along with TTRULES,"
378 LPRINT"TTOWERS, and TTENTER.  Just turn on your printer and RUN TTNOTE"
379 LPRINT"for a copy."
380 LPRINT"     If you're having trouble running the program, write us."
381 LPRINT"If you'd like to see enhancements, write us.  And if your disk is"
382 LPRINT"damaged, send us a formatted blank DSDD diskette in a stamped,"
383 LPRINT"self-addressed diskette mailer along with $1 for handling and "
384 LPRINT"we'll provide a new copy of the program."
389 LPRINT"     We're working on new questions disks and will keep your "
390 LPRINT"address on file so that we can let you know when the disks become"
400 LPRINT"available.  Let us know if you would like to write categories for"
410 LPRINT"us, or if you have specific categories you'd like to see us include."
420 LPRINT"We're designing new games, too.  Our business software and"
450 LPRINT"general utilities are also in the works."
460 LPRINT"     We thank you for being one of our first customers and look to"
470 LPRINT"your feedback in designing Version 2.0 and other games.  Now go have"
480 LPRINT"fun with TRIVIAL TOWERS!"
490 LPRINT"                                      Sincerely,":LPRINT:LPRINT:LPRINT
500 LPRINT"                                      Ed and Calvin"
510 END
```

## TTOWERS.BAS

```bas
2 WIDTH 80 : COLOR 7,0,0
10000 REM ****************************************************************
10001 REM **                                                            **
10002 REM **                     TRIVIAL TOWERS                         **
10003 REM **                                                            **
10004 REM **           COPYRIGHT 1984, VINYARD SOFTWARE, INC.           **
10005 REM **           UNPUBLISHED WORK - ALL RIGHTS RESERVED           **
10006 REM **                                                            **
10007 REM **                       VERSION 1.0                          **
10008 REM **                                                            **
10009 REM ****************************************************************
10100 KEY OFF : RANDOMIZE 1 :CLS
10110 DEFINT A - Z
10200 REM ****************************************************************
10201 REM **                                                            **
10202 REM **         PUT UP THE LOGO AND COPYRIGHT STATEMENT            **
10203 REM **                                                            **
10204 REM ****************************************************************
10205 DIM IA(4),IB(4),IC(4),ID(4),IE(4),IG(4)
10210 FOR I = 1 TO 4
10220     READ IA(I),IB(I),IC(I),ID(I),IE(I),IG(I)
10230 NEXT I
10240 DATA   0,81, 0, 1, 1, 1
10250 DATA   1,24,81, 1,-1,-1
10260 DATA  80, 0,24,-1,-1, 1
10270 DATA  24, 1, 0,-1, 1,-1
10300 FOR I = 1 TO 3
10310     FOR J = 1 TO 4
10320         IA(J)=IA(J)+ID(J)
10330         IB(J)=IB(J)-ID(J)
10340         IC(J)=IC(J)+IE(J)
10350     NEXT J
10360     FOR J = 1 TO 4
10370         FOR K =  IA(J) TO IB(J) STEP ID(J)
10380             COLOR 0,(INT(RND*7)+1)
10385             SOUND (INT(RND*7500))+500,0.5
10390             IF IG(J) = 1 THEN LOCATE IC(J),K,0
10400             IF IG(J) =-1 THEN LOCATE K,IC(J),0
10410             PRINT "?";
10420         NEXT K
10430     NEXT J
10440 NEXT I
10500 LOCATE 6,27:COLOR 0,6:PRINT" T R I V I A L    T O W E R S "
10505 LOCATE 8,22:COLOR 0,5:PRINT" COPYRIGHT 1984, VINYARD SOFTWARE, INC. "
10510 LOCATE 9,22:COLOR 0,5:PRINT" UNPUBLISHED WORK - ALL RIGHTS RESERVED "
10515 LOCATE 11,36:COLOR 0,4:PRINT" VERSION 1.0 "
10520 DIM JJ(7)
10530 FOR I = 1 TO 7 :READ JJ(I) : NEXT I
10540 DATA 2,3,4,5,6,4,2
10550 FOR I = 1 TO 7
10560      FOR J = 19 TO JJ(I)+12 STEP -1
10570           COLOR 0,(INT(RND*7)+1)
10575           PLAY "mf"
10580           SOUND ((20-J)*1000),2
10585           II = (I*3)+29
10590           LOCATE J,II :PRINT " "
10600           LOCATE J,II+1 : PRINT " "
10610      NEXT J
10620 NEXT I
10650 FOR I = 1 TO 3000:NEXT I :REM WAIT A COUPLE OF SECONDS BEFORE CONTINUING
10700 REM ***************************************************************
10701 REM **                                                           **
10702 REM **    QUERY ABOUT THE QUESTION ENTER AND UPDATE ROUTINE      **
10703 REM **                                                           **
10704 REM ***************************************************************
10710 COLOR 6,0 : CLS
10720 PRINT "WOULD YOU LIKE TO CREATE OR UPDATE YOUR QUESTION FILES (Y OR N)";
10730 INPUT Y$
10740 IF Y$="Y" OR Y$="y" THEN CHAIN "A:TTENTER.BAS"
11000 REM ***************************************************************
11002 REM **       INITIALIZE VARIABLES AND OTHER HOUSEKEEPING         **
11004 REM ***************************************************************
11010 GOSUB 55000: REM INITIALIZE VARIABLES, VECTORS, AND ARRAYS
11020 IR = 1: REM IR IS THE ACTIVE DISPLAY ROW POINTER
11030 IC = 1: REM IC IS THE ACTIVE DISPLAY COLUMN POINTER
11040 NC = 6: REM NC IS THE ACTIVE DISPLAY COLOR
11045 ER = 24: REM ER IS THE ERASE ROW POINTER FOR GOSUB 59500
11050 COLOR NC,0:CLS
11060 PRINT "PLEASE REMOVE THE PROGRAM DISK AND INSERT THE QUESTION DISK."
11070 PRINT
11080 PRINT "PUSH THE RETURN KEY WHEN FINISHED.";:INPUT Y$
11500 REM *****************************************************************
11502 REM **        SOLICIT STARTING PARAMETERS FROM THE PLAYERS         **
11504 REM *****************************************************************
11510 NC = 3:COLOR NC,0:CLS
11520 LOCATE IR,IC:PRINT "NUMBER OF PLAYERS (2 - 4)";
11525 COLOR 0,NC: INPUT NP:COLOR NC,0:GOSUB 59500
11530 IF NP => 2 GOTO 11540 ELSE NERR=1:GOSUB 59000:GOTO 11520
11540 IF NP <= 4 GOTO 11550 ELSE NERR=2:GOSUB 59000:GOTO 11520
11550 DIM NM$(4):REM NAMES OF THE PLAYERS
11560 FOR I = 1 TO NP
11570     LOCATE 3*I+3,2:PRINT "TYPE IN NAME OF PLAYER";I;
11575     COLOR 0,NC:INPUT NM$(I):COLOR NC,0: GOSUB 59500
11580     LOCATE 3*I+3,51:PRINT "YOUR GAME PIECE IS --> ";
11585     COLOR 0,NC : PRINT GP$(I); : COLOR NC,0
11590 NEXT I
11595 FOR I = 1 TO 2500: NEXT I: CLS
11600 NC = 6: IR = 2
11610 COLOR 0,NC: LOCATE IR,IC
11620 PRINT "ALL OF YOU WILL USE THE SAME FOUR CATEGORIES.  YOU MAY PICK FROM THESE."
11630 IR = 5:LOCATE IR,IC: COLOR NC,0: FILES:COLOR 0,NC
11640 IR = 10:LOCATE IR,IC: PRINT "TYPE IN THE NAME AND PICK A STARTING QUESTION."
11660 IC = 2: COLOR NC,0
11670 IR = 12: LOCATE IR,IC:PRINT"1ST CATEGORY";TAB(IC+53);"STARTING QUESTION."
11680 IR = 14: LOCATE IR,IC:PRINT"2ND CATEGORY";TAB(IC+53);"STARTING QUESTION."
11690 IR = 16: LOCATE IR,IC:PRINT"3RD CATEGORY";TAB(IC+53);"STARTING QUESTION."
11700 IR = 18: LOCATE IR,IC:PRINT"4TH CATEGORY";TAB(IC+53);"STARTING QUESTION."
11710 DIM FIL$(4), Q$(4), A$(4), NR(4), NS(4): REM FILE, QSTN, ANSW, #Q, STRTQ
11715 CLOSE :IC=IC+12
11720 FOR I = 1 TO 4
11730     LOCATE (I*2+10),IC:COLOR NC,0:PRINT " ";TAB(IC+10);" "
11735     LOCATE (I*2+10),IC :COLOR 0,NC:INPUT FIL$(I):COLOR NC,0:GOSUB 59500
11737     ON ERROR GOTO 59600
11740     OPEN FIL$(I) AS #1 : FIELD#1,72 AS Q$(I),56 AS A$(I)
11750     NR(I)=LOF(1)/128  : CLOSE #1
11760     IF NR(I) > 10 GOTO 11790
11770     IF NR(I) > 0 THEN NERR =3:GOSUB 59000:GOTO 11730
11780     NERR=4:GOSUB 59000:KILL FIL$(I):GOTO 11730
11790     REM
11800     LOCATE (I*2+10),IC+11:PRINT "> WHICH HAS";NR(I);"QUESTIONS <";
11810     LOCATE (I*2+10),IC+58:COLOR NC,0:PRINT "    ";
11820     LOCATE (I*2+10),IC+58:COLOR 0,NC:INPUT NS(I):COLOR NC,0:GOSUB 59500
11830     IF NS(I) > 0 GOTO 11840 ELSE NERR=5:GOSUB 59000:GOTO 11810
11840     IF NS(I) <=NR(I) GOTO 11900 ELSE NERR=6:GOSUB 59000:GOTO 11810
11900 NEXT I
11910 ON ERROR GOTO 0
12000 REM ******************************************************************
12002 REM **                PUT UP THE GAME BOARD                         **
12004 REM ******************************************************************
12010 CLS
12020 FOR I = 1 TO 40
12030     COLOR 0,GBC(I)
12035     SOUND (EXP(I/10+4)),4
12040     FOR J = 0 TO 5
12050         FOR K = 0 TO 1
12060               LOCATE GSR(I)+K,GSC(I)+J:PRINT " "
12070         NEXT K
12080     NEXT J
12090 NEXT I
12100 FOR I = 1 TO 4
12110     LOCATE 13,BRC(1,I)-1:  COLOR 0,CCL(I)
12120     PRINT " ";TAB(BRC(1,I)+1)   ;FIL$(I);TAB(BRC(1,I)+11);" "
12130 NEXT I
12140 LOCATE 15,23:COLOR 0,GBC(1):PRINT "WILD CARD SQUARE - YOU PICK CATEGORY";
12200 FOR PLR = 1 TO NP
12210      FOR CAT = 1 TO 4
12220           LOCATE BRR(PLR,CAT),BRC(PLR,CAT)
12230           COLOR 0,CCL(CAT):PRINT GP$(PLR)
12240           BRR(PLR,CAT)=BRR(PLR,CAT)-2
12250           LOCATE BRR(PLR,CAT)-5,BRC(PLR,CAT)
12260           COLOR CCL(CAT),0:PRINT CHR$(22);CHR$(22)
12270      NEXT CAT
12280      GOSUB 50100:REM PRINT GAME PIECES
12290 NEXT PLR
13000 REM *************************************************************
13002 REM **             THE MEAT OF THE PROGRAM BEGINS HERE         **
13004 REM *************************************************************
13010 NC = 7:COLOR 0,NC,0   :ER=23:LOCATE ER,1
13020 PRINT "       PUSH RETURN TO START GAME       ";
13030 INPUT Y$: GOSUB 59500
13100 REM *************************************************************
13102 REM **        LOOP THROUGH THE QUESTIONS AND MOVES             **
13104 REM *************************************************************
13110 FOR PLR = 1 TO NP
13120    ER=20:NC = 4:GOSUB 59500
13130    COLOR NC,0:LOCATE ER,1:PRINT "PLAYER";PLR;" (";
13140    COLOR 0,NC:PRINT GP$(PLR);:COLOR NC,0
13150    PRINT ") --> ";NM$(PLR);TAB(35);:NC=5:COLOR NC,0
13160    ROLL = INT(RND*6+1)
13170    PRINT "ROLLED A ";:COLOR 0,NC:PRINT ROLL
13175    GOSUB 50300 : REM PUT UP BLINKING ALTERNATIVES
13180    ER=22:NC=6:GOSUB 59500
13190    LOCATE ER,1:COLOR NC,0
13200    PRINT "CLOCKWISE, KOUNTERCLOCKWISE, OR QUIT (C, K, OR Q)";
13210    COLOR 0,NC:INPUT CLK$:ER = 24:GOSUB 59500
13220    IF (CLK$="C") OR (CLK$="K") OR (CLK$="Q") GOTO 13300
13221    IF (CLK$="c") OR (CLK$="k") OR (CLK$="q") GOTO 13300
13230    NERR=7:GOSUB 59000:GOTO 13180
13300    IF (CLK$="Q") OR (CLK$="q") GOTO 49000
13310    GOSUB 50500: REM ERASE CURRENT GAME PIECE
13320    IF (CLK$="C") OR (CLK$="c") THEN PLS(PLR)=PTMP(1)
13330    IF (CLK$="K") OR (CLK$="k") THEN PLS(PLR)=PTMP(2)
13350    GOSUB 50100: REM PRINT CURRENT GAME PIECE
13400    IF GBC(PLS(PLR))=4 THEN CAT=1:GOTO 13500
13410    IF GBC(PLS(PLR))=7 THEN CAT=2:GOTO 13500
13420    IF GBC(PLS(PLR))=5 THEN CAT=3:GOTO 13500
13430    IF GBC(PLS(PLR))=6 THEN CAT=4:GOTO 13500
13440    NC=3:ER=20:IR=20:IC=1:GOSUB 59500  
13450    COLOR 0,NC:LOCATE IR,IC
13460    PRINT"WILD CARD! PICK YOUR CATEGORY (1=RED;2=WHITE;3=PURPLE;4=YELLOW;)";
13465    INPUT Y$
13470    IF ( (Y$ = "1") OR (Y$ = "2") OR (Y$ = "3") OR (Y$ = "4") ) GOTO 13490
13480    NERR = 8 : GOSUB 59000:GOTO 13450
13490    CAT = VAL(Y$)
13500    ER=24:GOSUB 59500:ER = 20 :GOSUB 59500
13600    REM ***********************************************************
13602    REM **        PRINT QUESTION AND SOLICIT RESPONSE            **
13604    REM ***********************************************************
13610    IF NS(CAT)>NR(CAT) THEN NS(CAT) = 1 : REM GOTO BEGIN OF QUES STACK
13615    OPEN FIL$(CAT) AS #1 : FIELD #1,72 AS Q$(CAT),56 AS A$(CAT)
13620    GET #1,NS(CAT):CLOSE #1:NS(CAT)=NS(CAT)+1
13630    NC=CCL(CAT):ER=20:IR=20:IC=1 : GOSUB 59500
13640    COLOR 0,NC:LOCATE IR,IC: PRINT"Q:";Q$(CAT)
13650    ER=22:IR=22:GOSUB 59500
13660    COLOR NC,0: LOCATE IR,IC
13670    PRINT "AFTER PLAYER ANSWERS, PUSH RETURN";:INPUT Y$
13680    GOSUB 59500:COLOR 0,NC:LOCATE IR,IC
13690    PRINT "A:";A$(CAT);" CORRECT (Y/N)";:INPUT Y$
13700    ER=24:GOSUB 59500
13710    IF Y$="Y" OR Y$="y" GOTO 13800
13720    IF Y$="N" OR Y$="n" GOTO 15000
13730    NERR=9:GOSUB 59000:GOTO 13680
13800    REM **************************************************************
13802    REM **                     UPDATE TOWER                         **
13804    REM **************************************************************
13810    NCRT(PLR,CAT) = NCRT(PLR,CAT)+1
13820    IF NCRT(PLR,CAT) > 6 THEN NCRT(PLR,CAT) =6
13830    COLOR 0,NC
13840    FOR I = 1 TO NCRT(PLR,CAT)
13850          SOUND EXP(I/3+4),4
13855          LOCATE 11-I,BRC(PLR,CAT):PRINT "  ";
13860    NEXT I
13870    COLOR NC,0
13880    IF (NCRT(PLR,1)+NCRT(PLR,2)+NCRT(PLR,3)+NCRT(PLR,4))=24 THEN 16000
13890    GOTO 13120:REM THIS PLAYER GETS ANOTHER TURN
15000 NEXT PLR:GOTO 13100: REM NEXT PERSON'S TURN
16000 REM *******************************************************************
16002 REM **                 DECLARE THE WINNER                            **
16004 REM *******************************************************************
16010 ER=20:IR=20:GOSUB 59500:LOCATE IR,IC
16020 COLOR 0,NC: FOR I = 1 TO 80 : PRINT "*";:NEXT I
16040 COLOR 0,NC:PRINT "******";TAB(28);:COLOR NC,0,0
16050 PRINT " ";NM$(PLR);" IS THE WINNER! ";:COLOR 0,NC,0
16060 PRINT TAB(75);"******";
16070 COLOR 0,NC: FOR I = 1 TO 80: PRINT "*";:NEXT I
16080 ER=23:GOSUB 59500
16100 FOR I = 1 TO 15
16110    FOR J = 400 TO 1600 STEP 25
16120         SOUND J,0.2
16130    NEXT J
16140 NEXT I
49000 REM ******************************************************************
49002 REM **       END OF MAIN PROGRAM - RETURN TO MONITOR                **
49004 REM ******************************************************************
49020 LOCATE 24,1
49030 PRINT "AFTER YOU PUT PROGRAM DISK INTO DRIVE A:, PUSH THE RETURN KEY";
49040 INPUT Y$
49050 COLOR 7,0,0  :CLS
49060 KEY ON
49999 GOTO 65529
50000 REM *******************************************************************
50002 REM **              START OF SUBROUTINES                             **
50004 REM *******************************************************************
50100 REM *************************************************************
50102 REM **               PRINT GAME PIECE                          **
50104 REM *************************************************************
50110 COLOR 0,GBC(PLS(PLR))
50120 LOCATE GSR(PLS(PLR))+GPR(PLR),GSC(PLS(PLR))+GPC(PLR)
50130 PRINT GP$(PLR):RETURN
50230 PRINT "  ":RETURN
50300 REM *************************************************************
50302 REM **               PUT UP BLINKING ALTERNATIVES              **
50304 REM *************************************************************
50310 PTMP(1) = PLS(PLR)+ROLL :CK$(1)="C"
50320 PTMP(2) = PLS(PLR)-ROLL :CK$(2)="K"
50330 FOR J = 1 TO 2
50340     IF PTMP(J) > 40 THEN PTMP(J) = PTMP(J)-40
50350     IF PTMP(J) <  1 THEN PTMP(J) = PTMP(J)+40
50360     COLOR 0+16,GBC(PTMP(J))
50370     LOCATE GSR(PTMP(J))+GPR(PLR),GSC(PTMP(J))+GPC(PLR)
50380     PRINT CK$(J)
50390 NEXT J
50400 RETURN
50500 REM *************************************************************
50502 REM **               ERASE GAME PIECE AND C & K                **
50504 REM *************************************************************
50510 COLOR 0,GBC(PLS(PLR))
50520 LOCATE GSR(PLS(PLR))+GPR(PLR),GSC(PLS(PLR))+GPC(PLR) : PRINT "  "
50530 COLOR 0,GBC(PTMP(1))
50540 LOCATE GSR(PTMP(1))+GPR(PLR),GSC(PTMP(1))+GPC(PLR)   : PRINT "  "
50550 COLOR 0,GBC(PTMP(2))
50560 LOCATE GSR(PTMP(2))+GPR(PLR),GSC(PTMP(2))+GPC(PLR)   : PRINT "  "
50570 RETURN
55000 REM *************************************************************
55002 REM **              CREATE GAME PIECES                         **
55004 REM *************************************************************
55020 DIM GP$(4)
55030 GP$(1)=CHR$(1)+CHR$(1):GP$(2)=CHR$(157)+CHR$(157)
55040 GP$(3)=CHR$(15)+CHR$(15):GP$(4)=CHR$(5)+CHR$(5)
55050 REM *************************************************************
55052 REM **        ROW AND COLUMN GAME PIECE OFFSETS                **
55054 REM *************************************************************
55060 DIM GPR(4): GPR(1)=0:GPR(2)=0:GPR(3)=1:GPR(4)=1
55070 DIM GPC(4): GPC(1)=1:GPC(2)=3:GPC(3)=3:GPC(4)=1
55100 REM *************************************************************
55102 REM **     GAME BOARD COLORS FOR THE 40 SQUARES                **
55104 REM *************************************************************
55110 DIM GBC(40): FOR I = 1 TO 40:READ GBC(I):NEXT I
55120 DATA 3,4,7,5,  6,4,7,5,   6,4,7,5,  3,    6,4,7,    5,6,4,7
55130 DATA 3,5,6,4,  7,5,6,4,   7,5,6,4,  3,    7,5,6,    4,7,5,6
55200 REM *************************************************************
55202 REM **         GAME BOARD SQUARES: ROW AND COLUMNS             **
55204 REM *************************************************************
55210 DIM GSR(40): FOR I = 1 TO 40: READ GSR(I):NEXT I
55220 DATA 1,1,1,1,    1,1,1,1,    1,1,1,1,    1,   3,5,7,   9,11,13,15
55230 DATA 17,17,17,17, 17,17,17,17, 17,17,17,17, 17, 15,13,11, 9,7,5,3
55250 DIM GSC(40): FOR I = 1 TO 40: READ GSC(I): NEXT I
55260 DATA 2, 8,14,20,26,32,38,44,50,56,62,68,74
55270 DATA 74,74,74,74,74,74,74
55280 DATA 74,68,62,56,50,44,38,32,26,20,14,8,2
55290 DATA 2,2,2,2,2,2,2
55300 REM *************************************************************
55302 REM **  CATEGORY BARS: ROWS AND COLUMNS (4 BARS BY 4 PLAYERS)  **
55304 REM *************************************************************
55310 DIM BRR(4,4): FOR I=1 TO 4: FOR J=1 TO 4: BRR(I,J)=11:NEXT J:NEXT I
55320 DIM BRC(4,4): FOR I=1 TO 4: FOR J=1 TO 4: READ BRC(I,J):NEXT J:NEXT I
55330 DATA 11,27,44,60,  14,30,47,63,  17,33,50,66,  20,36,53,69
55400 REM *************************************************************
55402 REM **                  CATEGORY COLORS                        **
55404 REM *************************************************************
55410 DIM CCL(4): FOR I = 1 TO 4: CCL(I)=GBC(I+1):NEXT I
55420 REM *************************************************************
55422 REM **               PLAYER SQUARE NUMBER                      **
55424 REM *************************************************************
55430 DIM PLS(4): PLS(1)=1:PLS(2)=13:PLS(3)=21:PLS(4)=33
55450 REM ***************************************************************
55452 REM **  HEIGHT OF TOWERS (# CORRECT ANSWERS) 4 PLAYERS, 4 TOWERS **
55454 REM ***************************************************************
55460 DIM NCRT(4,4): FOR I=1 TO 4:FOR J=1 TO 4:NCRT(I,J)=0:NEXT J: NEXT I
55999 RETURN
59000 REM **********************************************************
59002 REM **               ERROR MESSAGES                         **
59004 REM **********************************************************
59005 COLOR 0+16,NC,0   :ER=24:LOCATE ER,1:SOUND 85,15
59010 IF NERR=1 THEN PRINT "** ERROR 01 **  AT LEAST TWO PLAYERS REQUIRED.";TAB(79);" ";
59020 IF NERR=2 THEN PRINT "** ERROR 02 **  MAXIMUM OF FOUR PLAYERS ALLOWED.";TAB(79);" ";
59030 IF NERR=3 THEN PRINT "** ERROR 03 **  LESS THAN 10 QUESTIONS.  PICK AGAIN.";TAB(79);" ";
59040 IF NERR=4 THEN PRINT "** ERROR 04 **  FILE NAME NOT FOUND.  PLEASE RETYPE.";TAB(79);" ";
59050 IF NERR=5 THEN PRINT "** ERROR 05 **  STARTING QUESTION MUST BE AT LEAST 1";TAB(79);" ";
59060 IF NERR=6 THEN PRINT "** ERROR 06 **  STARTING QUESTION MUST BE LESS THAN ";NR(I)+1; TAB(79);" ";
59070 IF NERR=7 THEN PRINT "** ERROR 07 **  ONLY THE LETTERS  C, K, AND Q  ARE  VALID ";TAB(79);" ";
59080 IF NERR=8 THEN PRINT "** ERROR 08 **  ONLY THE NUMBERS 1, 2, 3, AND 4  ARE VALID ";TAB(79);" ";
59090 IF NERR=9 THEN PRINT "** ERROR 09 **  ONLY THE LETTERS Y AND N ARE VALID";TAB(79);" ";
59100 IF NERR=10 THEN PRINT "** ERROR 10 **  ";TAB(79);" ";
59490 COLOR NC,0,0  : LOCATE IR,IC
59499 RETURN
59500 REM **********************************************************
59502 REM **                 CLEAR A LINE                         **
59504 REM **********************************************************
59510 COLOR NC,0,0  :LOCATE ER,1
59520 PRINT " ";TAB(79);" ";
59530 LOCATE IR,IC
59599 RETURN
59600     IF ERR > 0 THEN RESUME 11730
60000 REM **********************************************************
60002 REM **             END OF SUBROUTINES                       **
60004 REM **********************************************************
65529 END
```

## TTRULES.BAS

```bas
10 LPRINT "                     TRIVIAL TOWERS":LPRINT
15 LPRINT "                       VERSION 1.0":LPRINT
20 LPRINT "     Trivial Towers is an exciting way to match your wits with"
25 LPRINT "your friends and family in the computer age.  First there was"
30 LPRINT "'Go To The Head of the Class'.  Then there was 'College Bowl'."
35 LPRINT "Now there is Trivial Towers!":LPRINT
40 LPRINT "OBJECT OF THE GAME:  Players must correctly answer 6 questions in"
45 LPRINT "each of the 4 categories they have selected.  A correct answer earns"
50 LPRINT "that player one floor of the 6-story tower for that category.  The"
55 LPRINT "first player to build 4 towers by correctly answering 6 questions in"
60 LPRINT "each category wins.":LPRINT
65 LPRINT "                       DIRECTIONS":LPRINT
70 LPRINT "GETTING STARTED:  Trivial Towers consists of 2 disks--the general"
80 LPRINT "Program disk and the Question and Answer disk.  (Additional Question"
90 LPRINT "and Answer disks on new topics can be purchased separately.)"
100 LPRINT"     To begin, boot up your MS-DOS disk by inserting it into     "
110 LPRINT"drive A, turning on your computer, and answering the date and    "
120 LPRINT"time prompts.  Pull out the DOS disk and set it aside.  Insert   "
130 LPRINT"your BASIC disk into Drive A, type in BASIC and press the Return "
140 LPRINT"key.  After the disk drive starts spinning and the red light goes"
150 LPRINT"off, pull out the BASIC disk.  Insert the Trivial Towers Program "
160 LPRINT"disk, type RUN ''TTOWERS (Note: those are open quotation marks, "
161 LPRINT"not two apostrophes) and press the Return key.  The Program"
170 LPRINT"disk will begin spinning, and fill the screen with the Trivial   "
180 LPRINT"Towers logo while playing a tune.  After a few seconds, the screen"
190 LPRINT"will clear, and the program will ask you to insert the Questions "
200 LPRINT"disk.  Remove the Program disk from Drive A, insert the Questions"
210 LPRINT"disk, and press the Return key.":LPRINT
220 LPRINT"NUMBER OF PLAYERS:  The screen will clear, then the computer will"
230 LPRINT"ask you for the number of players.  Type in a 2,3, or 4 then press"
240 LPRINT"the Return key.  The computer will give you an error message if any"
250 LPRINT"other key is pressed and ask you to try again, so don't worry about"
260 LPRINT"hitting the wrong key.":LPRINT
270 LPRINT"NAMES OF PLAYERS:  The computer will then prompt you for the names"
280 LPRINT"of the contestants.  Type in the first name of the first player and"
290 LPRINT"press the Return key.  The computer will respond by showing you"
300 LPRINT"what your game piece looks like, and ask for the name of the next"
310 LPRINT"player.  Repeat this procedure until all players' names have been"
320 LPRINT"entered and all players have been assigned game pieces.":LPRINT
330 LPRINT"QUESTION CATEGORIES:  The screen will clear, then show you the"
340 LPRINT"categories available on this Questions disk.  Trivial Towers"
350 LPRINT"Questions disks come with 6 complete categories. (This number may"
360 LPRINT"differ if you insert a disk of questions you have written.  See  "
370 LPRINT"section entitled WRITING YOUR OWN QUESTIONS below.)  Type in the"
380 LPRINT"name of the category about which all players agree to be quizzed."
390 LPRINT"If you make an error and misspell the category name, the computer"
400 LPRINT"will ask you to try again."
430 LPRINT"     After you have picked each category, the computer will tell"
431 LPRINT"you how many questions are in that category.  The computer then asks"
440 LPRINT"you to chose which question you wish to begin with for that"
450 LPRINT"category.  This permits you to play Trivial Towers over and over"
460 LPRINT"without repeating the same questions.  Simply type in a number"
470 LPRINT"higher than the number of the last question you've seen for that"
480 LPRINT"category.  Don't worry about typing in a number too high or too"
490 LPRINT"low--the computer will note the error and ask you to try again."
500 LPRINT"(When the computer comes to the end of the question deck for that"
510 LPRINT"category, it cycles to the front of the deck and continues with"
520 LPRINT"question 1.)  Repeat this procedure until you have chosen the 4"
521 LPRINT"categories for this running of the game.  By varying the starting"
522 LPRINT"numbers, you can use the same category for all 4 of the question"
523 LPRINT"category decks, thereby 'specializing' the game.":LPRINT
530 LPRINT"PLAYING THE GAME:  After you have made all of these preliminary"
540 LPRINT"choices, the screen will clear and then show the game board.  Note"
550 LPRINT"that players begin the game in their own individual corners of the"
560 LPRINT"game board.  After everyone has found his token on the board, press"
570 LPRINT"the Return key to begin play.":LPRINT
580 LPRINT"     After the Return key is hit, the computer will roll its "
590 LPRINT"internal dice, and tell the player how many squares to move (1-6)."
600 LPRINT"The computer reminds you that it is your turn to move by listing"
610 LPRINT"your name and game token beneath the game board.":LPRINT
620 LPRINT"     The player may move Clockwise by hitting a C, counterclockwise"
630 LPRINT"(Yes, we know it's misspelled!) by hitting a K, or exit the program"
640 LPRINT"by hitting a Q.  After making your selection, press the Return key."
650 LPRINT
660 LPRINT"     If you have decided to Quit the program, the computer will ask "
670 LPRINT"you to insert the Program disk.  Pull the Questions disk from Drive"
680 LPRINT"A, insert the Program disk, and press the Return key.  The screen"
690 LPRINT"will clear, and the BASIC Ok will appear in the upper left corner."
700 LPRINT"You may now play a new game of Trivial Towers with new players and"
710 LPRINT"categories, or write your own questions (see section on WRITING "
720 LPRINT"YOUR OWN QUESTIONS below).":LPRINT
730 LPRINT"     If you have chosen a C or K, the computer will move your token"
740 LPRINT"to the correct square and ask you a question for that category."
750 LPRINT"After you have answered it orally (you may, but do not need to,"
751 LPRINT"type your answer), press the Return key."
760 LPRINT"The computer will show the correct answer, and ask if"
770 LPRINT"your answer was correct.  (Due to memory limitations of your"
780 LPRINT"computer, the Trivial Towers programmers decided not to have the"
790 LPRINT"computer remember all possible spellings and variations of the"
800 LPRINT"correct answer.  You probably would not have purchased such an"
810 LPRINT"expensive program, anyway.)":LPRINT
820 LPRINT"     If the players agree that your answer matches that of the"
830 LPRINT"computer, enter Y and press the Return key.  The computer will"
840 LPRINT"credit you with one story for your tower of that category, and"
850 LPRINT"display it inside the game board.  (The first player to build all "
860 LPRINT"four 6-story towers by correctly answering Trivial Towers questions"
870 LPRINT"wins the game.)  The computer will then re-roll its internal dice,"
880 LPRINT"and tell you how far you can move next.":LPRINT
890 LPRINT"     The computer repeats this procedure until you tell it that you"
900 LPRINT"have incorrectly answered a question.  To do so, type N and press"
910 LPRINT"the Return key.  The computer will call upon the next player to move"
920 LPRINT"his/her token, and the sequence begins anew.":LPRINT
930 LPRINT"     If you land on a purple wild card square (found only in the "
940 LPRINT"corners of the game board), the computer will ask you to pick the"
950 LPRINT"category in which you wish to be quizzed.  (Hint: It is good"
960 LPRINT"strategy to pick a category for which you have not built many"
970 LPRINT"stories.)  Enter the number (1-4) of the color of the category"
980 LPRINT"in which you wish to be quizzed, and press the Return key.  The"
990 LPRINT"computer will let you know if you pressed a key other than 1-4,"
1000 LPRINT"and ask you to try again.  If you correctly pressed a 1, 2, 3, or 4"
1010 LPRINT"the computer will ask a question from that category and play will"
1020 LPRINT"proceed as before.":LPRINT
1030 LPRINT"WANT A COPY OF THESE DIRECTIONS?  If so, turn on your printer,"
1040 LPRINT"boot up DOS and BASIC, insert the Program disk into drive A,"
1050 LPRINT"type RUN ''TTRULES (again, that's a single quotation mark) and"
1060 LPRINT"press the Return key.":LPRINT
1070 LPRINT"                    WRITING YOUR OWN QUESTIONS":LPRINT
1080 LPRINT"     Although Trivial Towers question disks bulge with over "
1090 LPRINT"2500 questions and more disks are being developed each"
1100 LPRINT"day, you may wish to 'customize' your own questions and "
1110 LPRINT"categories.":LPRINT
1120 LPRINT"    To write your own questions, boot up DOS and BASIC, insert"
1130 LPRINT"the Program disk into Drive A, type RUN ''TTENTER and press the"
1140 LPRINT"Return key.":LPRINT
1150 LPRINT"CATEGORY NAME:  The computer will ask you for the name of the new"
1160 LPRINT"category.  If you have 2 disk drives, put a blank, formatted"
1170 LPRINT"disk into drive B, type B: followed by the name of your"
1180 LPRINT"new category (e.g. B:MOVIES) and hit the Return key.  If you have"
1190 LPRINT"only one disk drive, remove the Program disk from Drive A, insert"
1200 LPRINT"the blank disk into drive A, type A: followed by the name of"
1210 LPRINT"of your new category (e.g. A:MOVIES) and press the Return key."
1211 LPRINT"If you forget to name a disk drive, the computer will assume"
1212 LPRINT"that your blank, formatted disk is in the A drive."
1220 LPRINT"If you do not enter any disk drive number or category name, "
1230 LPRINT"pressing the Return key returns you to BASIC.":LPRINT
1240 LPRINT"ADDING QUESTIONS:  The screen will clear, and the computer will"
1250 LPRINT"ask you if you wish to list, display, update, or exit from this"
1260 LPRINT"category.  Press U and the Return key.":LPRINT
1270 LPRINT"     The screen will clear, and the computer asks if you wish to"
1280 LPRINT"modify, add to, or exit the updating routine.  Press A and press"
1290 LPRINT"the Return key.":LPRINT
1300 LPRINT"     The screen clears, and the computer tells you how many "
1310 LPRINT"questions are already in that category.  If you are creating"
1320 LPRINT"a new category, this number will be 0.  If you are adding"
1330 LPRINT"questions to an existing file, this number will be greater than 1."
1340 LPRINT"We suggest that you limit the total number of questions in all of"
1350 LPRINT"your categories to 2500 because of space limitations on your disk."
1351 LPRINT
1360 LPRINT"     The computer will print"
1370 LPRINT"1  5  10  15  20  25  30  35  40  45  50  55  60  65    72"
1380 LPRINT"to let you know how many characters your"
1385 LPRINT"your question contains.  Type your question"
1390 LPRINT"beneath these letters and press the Return key.  Do not exceed"
1400 LPRINT"72 characters, including punctuation and spaces, for your question"
1410 LPRINT"(again, space limitations).  Questions need not end in a question"
1420 LPRINT"mark if you're stuck for space.  You can also be creative with"
1421 LPRINT"punctuation and blank spaces to further help.":LPRINT
1430 LPRINT"     The computer will prompt you for the answer, and print"
1440 LPRINT"1  5  10  15  20  25  30  35  40  45  50  56"
1450 LPRINT"to let you see how many characters your answer contains."
1455 LPRINT"Type your answer beneath these numbers and press the Return key."
1460 LPRINT"Please do not exceed 56 characters for your answer.  The computer"
1470 LPRINT"will let you know if you exceed these limits."
1480 LPRINT
1490 LPRINT"     After you have pressed the Return key, the computer will tell"
1500 LPRINT"you how many questions are now in the category, and ask you to"
1510 LPRINT"enter another question.  This cycle continues until you type X"
1520 LPRINT"and press the Return key.":LPRINT
1530 LPRINT"     If you press X, the computer asks you if you wish to Modify,"
1540 LPRINT"Add, or Exit the question-entry routine.  To Exit, press X and the"
1550 LPRINT"Return key.  The computer will tell you if you pressed the wrong"
1560 LPRINT"key and ask you to try again.  After you press X, the computer"
1570 LPRINT"asks you if you wish to List, Display, Update, or Exit this"
1580 LPRINT"category.  To Exit, type X and press the Return key.  As its last"
1590 LPRINT"step, the computer will ask if you wish to edit another file."
1600 LPRINT"If you do, go back to the instructions for CATEGORY NAME and follow"
1610 LPRINT"those procedures.  To exit the program entirely, press the Return"
1620 LPRINT"key.  The computer will tell you that it has saved your category"
1630 LPRINT"onto the Questions disk and that you are back in BASIC.  From here,"
1640 LPRINT"you can program in BASIC, play Trivial Towers using your new"
1650 LPRINT"questions, go back into the editing program TTENTER, or remove your"
1660 LPRINT"disks and turn off the computer.":LPRINT
1670 LPRINT"CORRECTING A QUESTION OR AN ANSWER:  If you make a mistake typing"
1680 LPRINT"or further research indicates that you have misstated a question"
1690 LPRINT"or an answer, corrections are a simple matter.  After starting"
1700 LPRINT"TTENTER (see first paragraph of these directions), tell the "
1710 LPRINT"computer the disk drive and name of the category to be corrected"
1720 LPRINT"(e.g.  B:MOVIES). Type U to Update when asked if you want to List,"
1730 LPRINT"Display, Update, or Exit that category.  Answer M when asked if"
1740 LPRINT"if you want to Modify, Add, or Exit the Update routine.":LPRINT
1750 LPRINT"     At this point, the computer will tell you how many questions"
1760 LPRINT"have been written for this category, and ask for the number of the"
1770 LPRINT"question-answer pair to be changed.  (If you don't know the"
1780 LPRINT"specific number, enter a number less than 1, and refer to the "
1790 LPRINT"Listing and Displaying sections below.)  Enter that number and"
1800 LPRINT"press the Return key.":LPRINT
1810 LPRINT"     The screen clears and the computer lists the question as it"
1820 LPRINT"presently resides in memory, and prompts you for a new phrasing"
1830 LPRINT"of the question.  Type the new question below the 1-72 number"
1840 LPRINT"scale.  Even if you do not wish to change the question's wording,"
1850 LPRINT"type the question as is (a blank will otherwise be placed onto"
1860 LPRINT"the disk in place of the original question).  Press the Return key."
1870 LPRINT
1880 LPRINT"     The computer then shows the current answer and asks for its"
1890 LPRINT"update.  Type the new answer beneath the 1-56 number scale (or"
1900 LPRINT"type the old answer if no changes are to be made) and press the"
1910 LPRINT"Return key.":LPRINT
1920 LPRINT"     The computer stores the new question and answer on the disk,"
1930 LPRINT"and asks you if you wish to change another question.  If you do"
1940 LPRINT"not, enter a number less than 1, and backtrack to BASIC as"
1950 LPRINT"previously described in the Adding Questions section.":LPRINT
1960 LPRINT"     If you discover that you do not want to modify a specific"
1970 LPRINT"question and answer pair, type an X and press the Return key"
1980 LPRINT"when prompted for the new question.":LPRINT
1990 LPRINT"     You cannot delete a question and answer pair per se.  The"
2000 LPRINT"computer will put a blank question and answer onto the Questions"
2010 LPRINT"disk, and use it during the game when Trivial Towers calls up that"
2020 LPRINT"number.  Of course, if you want to, you can use these blanks as"
2030 LPRINT"free towers for the players lucky enough to land on them by typing"
2040 LPRINT"Y when asked if the question was correctly answered.":LPRINT
2050 LPRINT"DISPLAYING QUESTIONS AND ANSWERS ON THE SCREEN:  After you have"
2060 LPRINT"written several questions and answers, you may wish to check your"
2070 LPRINT"work.  To do so, you can display question-answer pairs on the"
2080 LPRINT"screen or print out some or all of the questions and answers"
2090 LPRINT"(see Printing Questions and Answers section below).":LPRINT
2100 LPRINT"    To display question-answer pairs on the screen, choose the"
2110 LPRINT"disk drive and category to be displayed (see the Category Name"
2120 LPRINT"section above). Press D and the Return key when asked if you"
2130 LPRINT"wish to List, Display, Update, or Exit that category.  The"
2140 LPRINT"computer will clear the screen, tell you how many questions are"
2150 LPRINT"in that category, and ask you for the number of the question-answer"
2160 LPRINT"pair you wish to display.  Enter that number (the computer will"
2170 LPRINT"ask you to try again if you enter too high a number) and hit the"
2180 LPRINT"Return key.  The computer will clear the screen and display that"
2190 LPRINT"question-answer pair.  Press the Return key and the cycle will"
2200 LPRINT"repeat.":LPRINT
2210 LPRINT"     To quit displaying pairs, enter a number less than 1 when the"
2220 LPRINT"computer asks for a number.  You can backtrack to BASIC from"
2230 LPRINT"there.":LPRINT
2240 LPRINT"PRINTING OUT YOUR QUESTIONS:  To further check your work, you can"
2250 LPRINT"print out any or all of the question-answer pairs for a given"
2260 LPRINT"category.  Turn on your printer and pick the disk drive and"
2270 LPRINT"category to be printed after loading TTENTER.  Enter L and press"
2280 LPRINT"the Return key when asked if you want to List, Display, Update,"
2290 LPRINT"or Exit from that category.":LPRINT
2300 LPRINT"     The computer will prompt you for the number of the first"
2310 LPRINT"question-answer pair to be printed.  Enter that number and press"
2320 LPRINT"Return.  The computer will ask you for the number of the last"
2330 LPRINT"question-answer pair to be printed.  Enter that number and press"
2340 LPRINT"the Return key.  Pressing Return without entering a number exits"
2350 LPRINT"the Listing procedure, as does hitting a zero.":LPRINT
2360 LPRINT"     Press the return key after making sure that the printer is on."
2370 LPRINT
2380 LPRINT"     After printing the requested question-answer pairs, the"
2390 LPRINT"computer returns you to the List, Display, Update, Exit prompt."
2400 LPRINT"You can backtrack to BASIC from there.":LPRINT:LPRINT:LPRINT
2410 LPRINT"     Vinyard Software will continue to make improvements on "
2420 LPRINT"Trivial Towers, including expanding the game rules, modifying the"
2430 LPRINT"graphics, animation, and sound, writing new Question disks,"
2435 LPRINT"and configuring the game to run on other computers."
2440 LPRINT"Please write us with your comments about how Trivial Towers can"
2450 LPRINT"further serve your entertainment needs."
```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0473

     Volume in drive A has no label
     Directory of A:\

    FILES473 TXT       980   7-10-86   4:20p
    NOTES473 TXT      1851   2-10-86   1:34p
    TTENTER  BAS      4638  12-21-84   1:31p
    TTNOTE   BAS      3200  10-21-85  12:02a
    TTOWERS  BAS     15865  12-21-84   1:24p
    TTRULES  BAS     17152   7-29-84   4:50p
    TTSHARE  DOC      3968  10-21-85  12:10a
            7 file(s)      47654 bytes
                          111104 bytes free
