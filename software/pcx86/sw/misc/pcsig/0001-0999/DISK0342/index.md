---
layout: page
title: "PC-SIG Diskette Library (Disk #342)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0342/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0342"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "GOLF SCORECARD"

    A menu-driven system that keeps track of golf scores.  Keeps track of
    a number of golfers, courses, and golf rounds.  Good way to track the
    improvement of your golf game.  It is written in BASIC, and includes a
    compiled, as well as the source files.  For the computer-oriented
    golfer, or the golf oriented computist, a handy analysis tool.
    
    System Requirements:  Two disk drives;
    
    How to Start:  Load DOS and type GOLFCARD to enter the main program.
    Consult README.DOC for additional program information.
    
    File Descriptions:
    
    COURSPTR DAT  Pointer for number of courses in COURSE.DAT
    COURSE   DAT  Golf course data
    GOLFPTR  DAT  Pointer for the number of golfers in GOLFERS.DAT
    GOLFERS  DAT  Contains data on golfers
    GOLFCARD EXE  Main program [type in to run GOLFCARD program]
    GOLFCARD BAS  Basic source for GOLFCARD program
    ROUNDPTR DAT  Pointer for the number of rounds in ROUND.DAT
    ROUND    DAT  Golfers round data
    README   DOC  Introduction
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## GOLFCARD.BAS

```bas
10 KEY OFF:CLS
20 DEFINT A - Z:CC$="*"
30 DIM P(50),P$(50),TN$(50),S$(20),S(50,20),GAMTOT(50),AVG!(50),MONTOT(50),PLYR$(50),PLYR(50),ST(20),R(50),MONEY(50),GAMDIG(50),MONDIG(50),T(20),SCORTOT(50),GMTOT(50),P3HTOT(50),P3STOT(50),P4HTOT(50),P4STOT(50),P5HTOT(50),P5STOT(50),P3AVG!(50)
35 DIM P4AVG!(50),P5AVG!(50)
40 ON ERROR GOTO 33000
1000 CLOSE:REM****************************************MAIN MENU
1010 GOSUB 26000:LOCATE 7,20:PRINT"HERE'S WHAT WE CAN DO FOR YOU:":LOCATE 9,25:PRINT"1.  Input Information":LOCATE 10,25:PRINT"2.  Modify Information":LOCATE 11,25
1080 PRINT"3.  Display Information":LOCATE 12,25:PRINT"4.  Print Information":LOCATE 13,25:PRINT"5.  Initialize Diskette":LOCATE 14,25:PRINT"6.  End Program"
1110 LOCATE 20,20:INPUT"Please type the number of your choice. ",A
1140 ON A GOTO 2000,3000,4000,28000,1400,32000
1150 BEEP:GOTO 1110
1400 REM****************************************INITIALIZE DISKETTE
1410 CLS:PRINT"This routine prepares the diskette in the default drive to use the"
1420 PRINT"GOLFCARD program.  It must be run before GOLFCARD is used for the":PRINT"first time."
1430 PRINT:PRINT"If the diskette in the default drive has already been used with"
1440 PRINT"the GOLFCARD program, this routine will wipe out any data entered."
1450 PRINT:PRINT"Do you want to proceed with the initialization routine?"
1460 PRINT"(Type `Y' or `N') ";
1465 INPUT"",A$
1470 IF A$ = "Y" OR A$ = "y" THEN 1500
1480 IF A$ = "N" OR A$ = "n" THEN 1000
1490 BEEP:PRINT"Please type `Y' or `N'. ";:GOTO 1465
1500 PRINT:PRINT:PRINT SPC(24);:COLOR 0,7:PRINT" WARNING: DATA WILL BE DESTROYED ":COLOR 7,0:BEEP:BEEP:BEEP
1510 PRINT:PRINT:PRINT"Press `I' to run initialization routine.  Press any other"
1520 PRINT"key to return to Main Menu. "
1530 A$ = INKEY$
1540 IF A$ = "" THEN 1530
1550 IF A$ <> "I" AND A$ <> "i" THEN 1000
1555 CLS:LOCATE 10,30:PRINT"One moment please....."
1560 OPEN "course.dat" FOR OUTPUT AS #1:CLOSE #1:KILL "course.dat":OPEN "COURSE.DAT" FOR OUTPUT AS #1: CLOSE #1
1570 OPEN "round.dat" FOR OUTPUT AS #1:CLOSE #1:KILL "round.dat":OPEN "ROUND.DAT" FOR OUTPUT AS #1: CLOSE #1
1580 OPEN "golfers.dat" FOR OUTPUT AS #1:CLOSE #1:KILL "golfers.dat":OPEN "GOLFERS.DAT" FOR OUTPUT AS #1: CLOSE #1
1590 OPEN "golfptr.dat" FOR OUTPUT AS #1:PRINT #1,0:CLOSE #1:OPEN "coursptr.dat" FOR OUTPUT AS #1:PRINT #1,0:CLOSE #1:OPEN "roundptr.dat" FOR OUTPUT AS #1:PRINT #1,0:CLOSE #1: GOTO 1000
2000 CLOSE:REM****************************************INPUT MENU
2010 GOSUB 26000:LOCATE 7,20:PRINT"HERE'S WHAT YOU CAN INPUT:":LOCATE 9,25:PRINT"1.  New Golfer(s)":LOCATE 11,25:PRINT"2.  New Course":LOCATE 13,25:PRINT"3.  Game Results":LOCATE 15,25:PRINT"4.  Return to Main Menu"
2120 LOCATE 20,20:INPUT"Please type the number of your choice. ",A
2140 ON A GOTO 5000,6000,7000,1000
2150 BEEP:GOTO 2120
3000 REM****************************************MODIFICATION MENU
3010 GOSUB 26000
3020 LOCATE 7,20:PRINT"HERE'S WHAT YOU CAN MODIFY:":LOCATE 9,25:PRINT"1.  Player Name":LOCATE 11,25:PRINT"2.  Course Name":LOCATE 13,25:PRINT"3.  Course Pars":LOCATE 15,25:PRINT"4.  Game Results":LOCATE 17,25:PRINT"5.  Return to Main Menu"
3140 LOCATE 20,20:INPUT"Please type the number of your choice. ",A
3160 ON A GOTO 10000,11000,12000,13000,1000
3170 BEEP:GOTO 3140
4000 CLOSE:REM****************************************DISPLAY MENU
4025 GOSUB 26000:LOCATE 7,20:PRINT"HERE'S THE INFORMATION YOU CAN HAVE DISPLAYED":GOSUB 4030:GOTO 4200
4030 LOCATE 9,25:PRINT"1.  List of registered golfers
4040 LOCATE 10,25:PRINT"2.  All players' averages":LOCATE 11,25:PRINT"3.  All players' winnings/losses":LOCATE 12,25:PRINT"4.  All players' hole averages by par":LOCATE 13,25:PRINT"5.  Individual player's average for any course":LOCATE 14,25
4041 PRINT"6.  Individual player's hole averages by par":LOCATE 15,25:PRINT"7.  Individual player's rounds to date":LOCATE 16,25:PRINT"8.  Course data":LOCATE 17,25:PRINT"9.  Individual game":LOCATE 18,24:PRINT"10.  Return to Main Menu":RETURN
4200 LOCATE 20,20:INPUT"Please type the number of your choice. ",A
4220 ON A GOTO 14000,15000,16000,30100,17000,18000,19000,20000,30000,1000
4230 BEEP:GOTO 4200
5000 REM***************************************INPUT NEW GOLFERS
5001 OPEN "GOLFPTR.DAT" FOR INPUT AS #1:INPUT #1,N:CLOSE #1:IF N<48 THEN 5005
5003 CLS:PRINT"Sorry, there are already 48 golfers registered.":PRINT:PRINT"If you would like to substitute a new player for any existing player who":PRINT"has not already played, you may do so by using the MODIFICATION option."
5004 PRINT:PRINT:GOTO 27000
5005 CLS:LOCATE 5,1:GOSUB 5010:GOTO 1000
5010 PRINT"All new golfers must register.":PRINT:PRINT"Please provide golfers' names as you would like them listed in our":PRINT"official records.  Our membership can go up to 48, but please":PRINT"do not register more than 10 golfers at one time."
5020 PRINT:PRINT
5070                REM***********************************OBTAIN GOLFERS' NAMES
5086 IF N<39 THEN L=10:GOTO 5090
5087 L=48-N
5090 K=1
5110 LOCATE 25,1:PRINT"Type `END' when finished.";:LOCATE 14,15:PRINT" _______________":LOCATE 14,1
5120 INPUT "Golfer's name: ",N$(K)
5130 IF LEN (N$(K))>15 THEN CLS:LOCATE 5,1:PRINT"Sorry, that name is too long.  Please shorten":PRINT"the name to fit on the dashed line (15 characters).":GOTO 5110
5140 IF N$(K) <> "end" AND N$(K) <>"End" AND N$(K) <> "END" AND K<L THEN K = K+1:CLS:LOCATE 12,1:GOTO 5110
5150 IF N$(K) <> "end" AND N$(K) <>"End" AND N$(K) <> "END"  THEN K = K+1
5160 IF K = 1 THEN 1000
5170                REM****************************************CHECK NAMES
5200 CLS:FOR I=1 TO K-1:IF I>9 THEN PRINT I;CHR$(29);".  " N$(I):GOTO 5230
5210 PRINT " ";I;CHR$(29);".  " N$(I):NEXT I
5230 PRINT:PRINT:PRINT "Are these names correct?  (Type `Y' or `N') ";
5240 INPUT"",A$
5250 IF A$ = "y" OR A$ ="Y" THEN 5350
5260 IF A$="n" OR A$ = "N" THEN 5280
5270 BEEP:PRINT"Please type `Y' or `N'. ";:GOTO 5240
5280                REM****************************************CORRECT NAMES
5290 PRINT:INPUT "Which line would you like to change";LN
5300 IF LN<1 OR LN>(K-1) THEN PRINT"Wrong number.....please try again.":GOTO 5290
5320 CLS:LOCATE 3,1:PRINT"It currently reads: ";N$(LN)
5330 PRINT "It should read: ";:LOCATE 4,17:FOR I = 1 TO 15:PRINT"_";:NEXT I:LOCATE 4,1:INPUT "It should read: ",NN$
5340 IF LEN (NN$)>15 THEN LOCATE 6,1:PRINT"Sorry, that name is too long.  Please shorten":PRINT"the name to fit on the dashed line (15 characters).":FOR P=1 TO 30:FOR I = 1 TO 3000:NEXT I:NEXT P:GOTO 5320
5348 N$(LN)=NN$:GOTO 5200
5350 OPEN "golfptr.dat" FOR INPUT AS #1:INPUT #1,GOLFERS:CLOSE #1:GOLFERS=GOLFERS+K-1:OPEN "golfptr.dat" FOR OUTPUT AS #1:PRINT #1,GOLFERS:CLOSE #1:OPEN "golfers.dat" FOR APPEND AS #4:FOR I = 1 TO K-1:PRINT #4,N$(I):NEXT I:RETURN
6000 REM****************************************INPUT NEW COURSE
6010 GOSUB 6030:GOTO 1000
6030 CLS:PRINT"Do you want to enter information about a new golf course?"
6040 PRINT"(Type `Y' or `N') ";
6050 INPUT"",A$
6060 IF A$ = "y" OR A$ ="Y" THEN 6090
6070 IF A$="n" OR A$ = "N" THEN 1000
6080 BEEP:PRINT"Please type `Y' or `N'. ";:GOTO 6050
6090 CLS:LOCATE 1,33:FOR I = 1 TO 26:PRINT"_";:NEXT I:LOCATE 1,1:PRINT"What is the name of the course?":PRINT:PRINT"PLEASE NOTE: If you would like the scores from this course to be"
6091 PRINT"automatically excluded from calculations of player averages, type":PRINT"an asterisk (*) as the first or last character in the course name."
6158 LOCATE 1,33:INPUT"",CORS$:IF CORS$="" THEN 6158
6160 IF LEN (CORS$)>26 THEN LOCATE 8,1:PRINT"Sorry, that name is too long.  Please shorten":PRINT"the name to fit on the dashed line (26 characters).":FOR P=1 TO 30:FOR I = 1 TO 3000:NEXT I:NEXT P:GOTO 6090
6170 LOCATE 10,1:PRINT"Please enter PAR for each hole."
6180 FOR I = 1 TO 9
6190 LOCATE 12+I:PRINT"Hole";I;CHR$(29);": ";:INPUT "",P(I):NEXT I
6200 FOR I = 10 TO 18:LOCATE 3+I,40:PRINT"Hole";I;CHR$(29);": ";:INPUT"",P(I):NEXT I
6210 CLS:GOSUB 24000:LOCATE 17,1
6230 PRINT "Is this information correct?  (Type `Y' or `N') ";
6240 INPUT"",A$:A$=MID$(A$,1,1)
6250 IF A$ = "y" OR A$ ="Y" THEN 6470
6260 IF A$="n" OR A$ = "N" THEN 6280
6270 BEEP:LOCATE 17,49:FOR I=1 TO 32:PRINT" ";:NEXT I:LOCATE 17,56:PRINT"`Y' or `N', please: ";:GOTO 6240
6280 PRINT"Is the name correct?  (Type `Y' or `N') ";
6290 INPUT"",A$:A$=MID$(A$,1,1)
6300 IF A$ = "y" OR A$ ="Y" THEN 6420
6310 IF A$="n" OR A$ = "N" THEN 6330
6320 BEEP:LOCATE 18,41:FOR I=1 TO 40:PRINT" ";:NEXT I:LOCATE 18,56:PRINT"`Y' or `N', please: ";:GOTO 6290
6330 LOCATE 20,1:PRINT"Old name = ";CORS$
6340 LOCATE 21,12:FOR I = 1 TO 26: PRINT"_";:NEXT I:LOCATE 21,1
6350 INPUT "New name = ",NC$
6360 IF LEN(NC$)>26 THEN LOCATE 22,1:PRINT"Sorry, that name is too long.  Please shorten":PRINT"the name to fit on the dashed line (26 characters).":FOR P=1 TO 30:FOR I = 1 TO 3000:NEXT I:NEXT P:GOTO 6380
6370 CORS$=NC$:GOTO 6210
6380 FOR I=20 TO 24:LOCATE I,1:FOR P=1 TO 79:PRINT" ";:NEXT P:NEXT I:GOTO 6330
6420 INPUT "Which hole is incorrect";H
6430 IF H<1 OR H>18 THEN PRINT"Please type a number from 1 to 18":GOTO 6420
6440 PRINT"Old par =";P(H):INPUT "New par = ",P(H)
6460 GOTO 6210
6470 OPEN "coursptr.dat" FOR INPUT AS #1:INPUT #1,L:L= L+1:CLOSE #1
6480 OPEN "COURSPTR.DAT" FOR OUTPUT AS #1:PRINT #1,L:CLOSE #1
6500 OPEN "COURSE.DAT" AS #2 LEN=62
6510 FIELD #2,26 AS COURSE$,2 AS P$(1),2 AS P$(2),2 AS P$(3),2 AS P$(4),2 AS P$(5),2 AS P$(6),2 AS P$(7),2 AS P$(8),2 AS P$(9),2 AS P$(10),2 AS P$(11),2 AS P$(12),2 AS P$(13),2 AS P$(14),2 AS P$(15),2 AS P$(16),2 AS P$(17),2 AS P$(18)
6520 LSET COURSE$ = CORS$:FOR I = 1 TO 18:LSET P$(I)=MKI$(P(I)):NEXT I:PUT #2,L
6560 RETURN
7000 REM****************************************INPUT GAME RESULTS
7010 CLS:PRINT"Do you want to enter game results?"
7020 PRINT"(Type `Y' or `N') ";
7030 INPUT"",A$
7040 IF A$ = "y" OR A$ ="Y" THEN PRINT:GOSUB 25000:GOTO 7070
7050 IF A$="n" OR A$ = "N" THEN 1000
7060 BEEP:PRINT"Please type `Y' or `N'. ";:GOTO 7030
7070 CLS:OPEN "COURSPTR.DAT" FOR INPUT AS #1
7080 INPUT #1,L:IF L = 0 THEN PRINT"Sorry, there are no courses listed in our files.  Before proceeding,":PRINT"you must go to the Course Entry section and enter a course.":LOCATE 25,1:GOTO 27000
7100 CLOSE #1:OPEN "COURSE.DAT" AS #2 LEN = 62
7110 FIELD #2,26 AS COURSE$,2 AS P$(1),2 AS P$(2),2 AS P$(3),2 AS P$(4),2 AS P$(5),2 AS P$(6),2 AS P$(7),2 AS P$(8),2 AS P$(9),2 AS P$(10),2 AS P$(11),2 AS P$(12),2 AS P$(13),2 AS P$(14),2 AS P$(15),2 AS P$(16),2 AS P$(17),2 AS P$(18)
7120 Y = L/2:FOR I = 1 TO Y:GET #2,I:IF I>9 THEN PRINT I;CHR$(29);".  ";COURSE$:GOTO 7170
7160 PRINT " ";I;CHR$(29);".  ";COURSE$
7170 NEXT I:FOR I = (Y+1) TO L:GET #2,I:LOCATE (I-Y),40:IF I>9 THEN PRINT I;CHR$(29);".  ";COURSE$:GOTO 7230
7220 PRINT " ";I;CHR$(29);".  ";COURSE$
7230 NEXT I:IF (L+1)/2 = Y THEN PRINT
7240 PRINT:PRINT:PRINT"What course number, please?  (If course doesn't appear on this list, enter `99'.This will allow you to enter the course into our files.)  ";
7245 INPUT"",CORS
7250 IF CORS = 99 THEN CLOSE:GOSUB 6030:CLOSE:GOTO 7000
7260 IF CORS<1 OR CORS>L THEN PRINT:PRINT"Wrong number.....try again.  ";:PRINT"What course number, please? ";:GOTO 7245
7270 GET #2,CORS
7280 FRONTP = 0:BACKP = 0:FOR I = 1 TO 9:FRONTP = FRONTP + CVI(P$(I)):NEXT I:FOR I = 10 TO 18:BACKP = BACKP +CVI(P$(I)):NEXT I:TOTP = FRONTP + BACKP
7320 CLS:INPUT"How many players? ",PLYRS
7330 IF PLYRS<1 THEN BEEP:GOTO 7320
7340 CLS:GOSUB 22000:IF K<>0 THEN 7350
7345 PRINT"Do you want to enter players' names?  (Type `Y' or `N'.) ";
7346 INPUT"",A$
7347 IF A$="Y" OR A$="y" THEN GOSUB 5010:CLOSE:GOTO 7000
7348 IF A$="N" OR A$="n" THEN 1000
7349 BEEP:PRINT"Please type `Y' or `N'. ";:GOTO 7346
7350 PRINT:PRINT:FOR M = 1 TO PLYRS
7360 PRINT:PRINT"Select Player ";CHR$(29);M;:INPUT"please: ",PLYR(M)
7370 IF PLYR(M)<1 OR PLYR(M) >K THEN PRINT"Wrong number.....try again.   ";:GOTO 7360
7390 NEXT M:CLS:PRINT"Course: ";COURSE$:PRINT:FOR M = 1 TO PLYRS:PRINT"Player";M;CHR$(29);": ";TN$(PLYR(M)):NEXT M:PRINT
7450 PRINT"Please enter the amount of money (in even dollars) that each player"
7460 PRINT"won or lost.  Indicate a loss by a negative number.  If no money":PRINT"was won or lost, enter `0'.":PRINT:FOR M = 1 TO PLYRS
7490 PRINT"How much did ";TN$(PLYR(M)) ;:INPUT" win or lose";MONEY(M):NEXT M:FOR M =1 TO PLYRS:PRINT:PRINT TN$(PLYR(M));":":FOR I = 1 TO 18
7540 IF I<10 THEN PRINT "     Hole";I;:INPUT" score: ",S(M,I):GOTO 7560
7550 PRINT "     Hole";I;:INPUT"score: ",S(M,I)
7560 NEXT I:NEXT M:GOSUB 7600:GOTO 8910
7600 GOSUB 7605:GOTO 7900
7605 CLS:PRINT COURSE$;"   (";FRONTP;"/";BACKP;"/";TOTP;")":LOCATE 1,73:PRINT DT$
7620 PRINT"               Hole  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18  TOTAL";
7630 PRINT:PRINT"                Par ";:PARTOT = 0
7640 FOR I = 1 TO 18:PRINT CVI(P$(I));:PARTOT = PARTOT + CVI(P$(I)):NEXT I:PRINT "  ";PARTOT:PRINT:FOR M = 1 TO PLYRS:IF PLYRS>4 THEN D=PLYRS+1 ELSE D=5
7680 LOCATE M+5,1:PRINT M;CHR$(29);". ";TN$(PLYR(M));:LOCATE M+5,21
7690 TOT=0:FOR I = 1 TO 18:TOT = TOT + S(M,I):IF S(M,I)<10 THEN PRINT S(M,I);:GOTO 7760
7700 PRINT CHR$(29);S(M,I);
7760 NEXT I:IF TOT < 100 THEN PRINT " ";
7770 PRINT" ";TOT:NEXT M:LOCATE 6+D,1:FOR M=1 TO PLYRS:PRINT TN$(PLYR(M));
7820 IF MONEY(M) = 0 THEN PRINT" neither won nor lost any money.":GOTO 7890
7830 IF MONEY(M)<0 THEN 7860 ELSE PRINT" won";MONEY(M);
7840 IF MONEY(M)<2 THEN PRINT"dollar.":GOTO 7890
7850 PRINT"dollars.":GOTO 7890
7860 PRINT" lost";0-MONEY(M);
7870 IF MONEY(M)>-2 THEN PRINT"dollar.":GOTO 7890
7880 PRINT"dollars."
7890 NEXT M
7895 RETURN
7900                REM*************************************CHECK INFORMATION
7910 IF PLYRS <5 THEN LOCATE 16,1 ELSE PRINT
7920 PRINT"Is all of the above information accurate?     ";
7930 PRINT"(Type `Y' or `N') ";
7940 INPUT"",A$
7950 IF A$="Y" OR A$ ="y" THEN GOTO 7980
7960 IF A$= "N" OR A$ = "n" THEN 8060
7970 BEEP:PRINT"Please type `Y' or `N'. ";:GOTO 7940
7980 PRINT"Are you sure?     ";
7990 PRINT"(Type `Y' or `N') ";
8000 INPUT"",A$
8010 IF A$="Y" OR A$ ="y" THEN GOTO 8900
8020 IF A$= "N" OR A$ = "n" THEN 8040
8030 BEEP:PRINT"Please type `Y' or `N'. ";:GOTO 8000
8040 IF PLYRS<5 THEN LOCATE 17,1:FOR I = 1 TO 80:PRINT" ";:NEXT I:GOTO 7900
8050 GOTO 7600
8060 IF PLYRS>4 THEN 8100
8070 LOCATE 16,1:FOR I = 1 TO 160:PRINT" ";:NEXT I:LOCATE 16,1
8100 PRINT"You have the following options:":IF ZZZ = 999 THEN 8270
8120 PRINT:PRINT"     1.  Start all over again                 4.  Change a player's name
8130 PRINT"     2.  Change the course name               5.  Change a score
8140 PRINT"     3.  Change the date                      6.  Change a money entry
8150 PRINT"             7.  Make no changes -- it's all accurate after all
8160 PRINT SPC(79):PRINT"Please type the number of your choice. ";
8170 INPUT"",A
8180 ON A GOTO 8210,8420,8220,8660,8750,8840,8400
8190 BEEP:PRINT"Wrong number, please try again. ";:GOTO 8170
8210 CLOSE:GOTO 7000
8220 CLS:GOSUB 25000:GOTO 7600
8260 GOTO 7980
8270 PRINT
8280 PRINT"     1.  Change the course name               4.  Change a score
8290 PRINT"     2.  Change the date                      5.  Change a money entry
8300 PRINT"     3.  Change a player's name               6.  Make no changes after all
8310 PRINT:PRINT"Please type the number of your choice. ";
8320 INPUT"",A
8330 ON A GOTO 8420,8360,8660,8750,8840,8400
8340 BEEP:PRINT"Wrong number, please try again. ";:GOTO 8320
8360 GOSUB 25000:GOTO 7600
8400 IF PLYRS < 5 THEN GOSUB 21000:GOTO 7900
8410 GOTO 7980
8420                     REM***********************************CHANGE COURSE
8430 CLS:Y = L/2:FOR I = 1 TO Y:GET #2,I
8470 IF I>9 THEN PRINT I;CHR$(29);".  ";COURSE$:GOTO 8490
8480 PRINT " ";I;CHR$(29);".  ";COURSE$
8490 NEXT I
8500 FOR I = (Y+1) TO L:GET #2,I:LOCATE (I-Y),40
8530 IF I>9 THEN PRINT I;CHR$(29);".  ";COURSE$:GOTO 8550
8540 PRINT " ";I;CHR$(29);".  ";COURSE$
8550 NEXT I
8560 PRINT:PRINT:PRINT"Please enter the course number from the above list."
8570 PRINT"If the course does not appear on the list, enter `99'.  This"
8580 PRINT"will allow you to enter the course into our files, but you will"
8590 IF ZZZ<>999 THEN PRINT"have to start the score input procedure over from the beginning. ";:GOTO 8600
8595 PRINT"have to start the score modification procedure over from the beginning. ";
8600 INPUT "",CORS
8610 IF CORS = 99 THEN CLOSE #2:GOSUB 6030:CORS = L
8620 IF CORS <1 OR CORS >L THEN PRINT:PRINT"Wrong number.....please try again. ";:GOTO 8600
8630 GET #2,CORS
8640 FRONTP = 0:BACKP = 0:FOR I = 1 TO 9:FRONTP = FRONTP + CVI(P$(I)):NEXT I:FOR I = 10 TO 18:BACKP = BACKP +CVI(P$(I)):NEXT I:TOTP = FRONTP + BACKP
8650 GOTO 7600
8660                     REM***********************************CHANGE PLAYER
8670 CLS:FOR I = 1 TO PLYRS:PRINT"Player";I;CHR$(29);": ";TN$(PLYR(I)):NEXT I
8680 PRINT:INPUT"Please enter the number of the player to be changed. ",M
8690 IF M<1 OR M>PLYRS THEN PRINT"Wrong number.....please try again.":GOTO 8680
8700 CLS:CLOSE #4:GOSUB 22000
8710 PRINT:PRINT
8720 PRINT"Select the number of the player above to be substituted for Player";M;CHR$(29);:INPUT": ",PLYR(M)
8730 IF PLYR(M)<1 OR PLYR(M)>K THEN PRINT"Wrong number.....please try again.":PRINT:GOTO 8720
8740 GOTO 7600
8750                 REM****************************************CHANGE SCORE
8760 GOSUB 21000:LOCATE 16,1
8770 INPUT"Whose score would you like to change?  Please type the player's number: ",M
8780 IF M<1 OR M>PLYRS THEN LOCATE 18,1:PRINT "Wrong number.....please try again.":FOR P=1 TO 30:FOR T= 1 TO 3000:NEXT T:NEXT P:LOCATE 16,1:FOR N = 1 TO 80:PRINT" ";:NEXT N:LOCATE 18,1:FOR N=1 TO 80:PRINT" ";:NEXT N:GOTO 8760
8790 LOCATE 18,1
8800 INPUT"What hole would you like to change";I
8810 IF I<1 OR I>18 THEN LOCATE 20,1:PRINT"Wrong number.....please try again.":FOR P=1 TO 30:FOR T = 1 TO 3000:NEXT T:NEXT P:LOCATE 18,1:FOR N = 1 TO 80:PRINT" ";:NEXT N:LOCATE 20,1:FOR N = 1 TO 80:PRINT" ";:NEXT N:GOTO 8790
8820 LOCATE 20,1:INPUT"What should the score be";S(M,I)
8830 GOTO 7600
8840                REM********************************CHANGE MONEY ENTRY
8850 CLS:FOR M = 1 TO PLYRS:PRINT"Player";M;"(";TN$(PLYR(M));")";": ";MONEY(M):NEXT M
8860 PRINT:INPUT"What is the number of the player whose earnings are to be changed";NUM
8870 IF NUM<1 OR NUM>PLYRS THEN PRINT"Wrong number.....please try again.":GOTO 8860
8880 INPUT "Please enter the proper amount: ",MONEY(NUM):GOTO 7600
8900 RETURN
8910 CLOSE:OPEN "roundptr.dat" FOR INPUT AS #1:INPUT #1,ROUNDS:CLOSE #1
8940 OPEN "round.dat" AS #3 LEN = 59
8950 FIELD #3,8 AS D$,5 AS N$,5 AS C$,5 AS M$,2 AS S$(0),2 AS S$(1),2 AS S$(2),2 AS S$(3),2 AS S$(4),2 AS S$(5),2 AS S$(6),2 AS S$(7),2 AS S$(8),2 AS S$(9),2 AS S$(10),2 AS S$(11),2 AS S$(12),2 AS S$(13),2 AS S$(14),2 AS S$(15),2 AS S$(16),2 AS S$(17)
8960 FOR I = 1 TO PLYRS:ROUNDS = ROUNDS + 1:LSET N$=MKI$(PLYR(I)):LSET C$=MKI$(CORS):LSET M$=MKI$(MONEY(I)):LSET D$=DT$:FOR H=1 TO 18:LSET S$(H-1)=MKI$(S(I,H)):NEXT H:PUT #3,ROUNDS:NEXT I:OPEN "roundptr.dat" FOR OUTPUT AS #1:PRINT #1,ROUNDS
9110 GOTO 1000
9120 CLOSE:RETURN
10000 REM****************************************MODIFY PLAYER NAME
10010 CLS:GOSUB 22000:IF K= 0 THEN LOCATE 25,1:GOTO 27000
10020 IF (K+1)/2 = Y THEN PRINT
10025 PRINT
10030 PRINT:INPUT"Please type the number of the player whose name you wish to change: ",X
10040 IF X <1 OR X>K THEN PRINT"Wrong number.....please try again.":GOTO 10030
10050 CLS:PRINT"The name currently reads: ";TN$(X)
10060 LOCATE 3,23:PRINT"_______________":LOCATE 3,1
10070 INPUT "The name should read: ",NN$
10080 IF LEN (NN$)>15 THEN LOCATE 15,1:PRINT"Sorry, that name is too long.  Please shorten the":PRINT"name to fit on the dashed line (15 characters).":FOR P=1 TO 30:FOR T=1 TO 3000:NEXT T:NEXT P:GOTO 10050
10090 TN$(X)=NN$:CLOSE:KILL"golfers.dat":OPEN"golfers.dat" FOR OUTPUT AS #4:FOR I=1 TO K:PRINT #4,TN$(I):NEXT I:GOTO 1000
11000 REM****************************************MODIFY COURSE NAME
11010 CLS:GOSUB 23000:IF L = 0 THEN PRINT"Sorry, there are no courses listed in our files.":LOCATE 25,1:GOTO 27000
11020 PRINT:PRINT:INPUT"Please type the number of the course whose name you would like to change: ",C
11030 IF C<1 OR C>L THEN PRINT"Wrong number .....please try again.":GOTO 11020
11040 CLS:GET #2,C
11050 PRINT"The course name currently reads: ";COURSE$
11060 LOCATE 2,30:FOR I=1 TO 26:PRINT"_";:NEXT I:LOCATE 2,1
11070 INPUT "The course name should read: ",NC$
11080 IF LEN(NC$)>26 THEN 11120
11090 LSET COURSE$=NC$:PUT #2,C:GOTO 11170
11120 PRINT:PRINT"Sorry, that name is too long.  Please shorten":PRINT"the name to fit on the dashed line (26 characters).":FOR P=1 TO 30:FOR T= 1 TO 3000:NEXT T:NEXT P
11130 LOCATE 2,30:FOR I = 1 TO LEN(NC$):PRINT" ";:NEXT I
11140 FOR I=1 TO 2:LOCATE 3+I,1:PRINT"                                                                           ":NEXT I
11160 GOTO 11060
11170 GOTO 1000
12000 REM****************************************MODIFY COURSE PARS
12010 CLS:GOSUB 23000:IF L = 0 THEN PRINT"Sorry, there are no courses listed in our files":LOCATE 25,1:GOTO 27000
12020 PRINT:PRINT:PRINT"Please type the number of the course you would like to correct. ";
12025 INPUT"",C
12030 IF C<1 OR C>L THEN PRINT"Wrong number.....try again.":GOTO 12025
12040 GET #2,C:CORS$ = COURSE$:CLS:FOR I = 1 TO 18:P(I)=CVI(P$(I)):NEXT I:GOSUB 24000
12080 LOCATE 16,1
12090 PRINT:INPUT "Which hole is incorrect";H
12100 IF H<1 OR H>18 THEN PRINT"Please type a number from 1 to 18":GOTO 12080
12110 PRINT"Old par =";P(H)
12120 INPUT "New par = ",P(H)
12130 FOR I = 1 TO 18:LSET P$(I)=MKI$(P(I)):NEXT I:PUT #2,C:GOTO 1000
13000 REM****************************************MODIFY GAME
13005 ZZZ = 999:GOSUB 13010:IF L=O THEN LOCATE 25,1:GOTO 27000
13007 GOTO 13330
13010 CLS:PRINT"Please enter the date of the game which needs to be modified":INPUT"using the form mm/dd/yy. ",DT$
13020 GOSUB 25030
13030 OPEN "golfptr.dat" FOR INPUT AS #1:INPUT #1,K:CLOSE #1:OPEN "golfers.dat" FOR INPUT AS #4:FOR I = 1 TO K:LINE INPUT #4,TN$(I):NEXT I
13100 CLS:GOSUB 23000:IF L = 0 THEN PRINT"Sorry, there are no games (or even any courses) listed in our files.":RETURN
13110 PRINT:PRINT:INPUT"Please type the number of the course at which the game was played: ",C
13120 IF C<1 OR C>L THEN PRINT"Wrong number.....please try again.":GOTO 13110
13125 CLS:LOCATE 10,30:PRINT"One moment please....."
13130 FRONTP=O:BACKP=0:TOTP=0:GET #2,C
13140 FOR H = 1 TO 9:FRONTP = FRONTP + CVI(P$(H)):NEXT H
13150 FOR H = 10 TO 18:BACKP = BACKP + CVI(P$(H)):NEXT H:TOTP=FRONTP+BACKP:OPEN "ROUNDPTR.DAT" FOR INPUT AS #1:INPUT #1,ROUNDS:CLOSE #1:OPEN "ROUND.DAT" AS #3 LEN = 59
13210 FIELD #3,8 AS D$,5 AS N$,5 AS C$,5 AS M$,2 AS S$(0),2 AS S$(1),2 AS S$(2),2 AS S$(3),2 AS S$(4),2 AS S$(5),2 AS S$(6),2 AS S$(7),2 AS S$(8),2 AS S$(9),2 AS S$(10),2 AS S$(11),2 AS S$(12),2 AS S$(13),2 AS S$(14),2 AS S$(15),2 AS S$(16),2 AS S$(17)
13220 G=0:FOR I = 1 TO ROUNDS:GET #3,I:IF D$<>DT$ OR CVI(C$)<>C THEN 13310
13270 G=G+1:R(G) = I:PLYR(G) = CVI(N$):MONEY(G)=CVI(M$):CORS=CVI(C$):FOR H=0 TO 17:S(G,H+1)=CVI(S$(H)):NEXT H:MONEY(G)=CVI(M$)
13310 NEXT I
13320 IF G = 0 THEN CLS:PRINT"Sorry, there are no entries for ";DT$;" at ";COURSE$:LOCATE 25,1:GOTO 27000
13325 RETURN
13330 PLYRS = G:GOSUB 7600
13340 FOR I = 1 TO G:LSET D$=DT$:LSET M$=MKI$(MONEY(I)):LSET N$=MKI$(PLYR(I)):LSET C$=MKI$(CORS):FOR H= 0 TO 17:LSET S$(H)=MKI$(S(I,H+1)):NEXT H:PUT #3,R(I):NEXT I
13440 GOTO 1000
14000 REM****************************************DISPLAY LIST OF PLAYERS
14010 CLS:GOSUB 22000
14015 IF (K+1)/2 = Y THEN PRINT
14020 LOCATE 25,1:GOTO 27000
15000 REM****************************************DISPLAY PLAYER AVERAGES
15005 CLS:LOCATE 10,30:PRINT"One moment please.....":GOSUB 15010:GOTO 15286
15010 OPEN "roundptr.dat" FOR INPUT AS #1:INPUT #1,ROUNDS:CLOSE #1:OPEN "ROUND.DAT" AS #3 LEN=59
15050 FIELD #3,8 AS D$,5 AS N$,5 AS C$,5 AS M$,2 AS S$(0),2 AS S$(1),2 AS S$(2),2 AS S$(3),2 AS S$(4),2 AS S$(5),2 AS S$(6),2 AS S$(7),2 AS S$(8),2 AS S$(9),2 AS S$(10),2 AS S$(11),2 AS S$(12),2 AS S$(13),2 AS S$(14),2 AS S$(15),2 AS S$(16),2 AS S$(17)
15060 OPEN "golfptr.dat" FOR INPUT AS #1:INPUT #1,K
15080 CLOSE #1:IF K=0 THEN CLS:PRINT"Sorry, there are no registered golfers.":LOCATE 25,1:GOTO 27000
15090 OPEN "golfers.dat" FOR INPUT AS #4:FOR I=1 TO K:LINE INPUT #4,TN$(I)
15120 NEXT I:FOR PL=1 TO K:GAMTOT(PL)=0:SCORTOT(PL)=0:NEXT PL
15165 GOSUB 27500
15170 FOR GAM=1 TO ROUNDS:GET #3,GAM
15185 GET #2,CVI(C$):IF INSTR(COURSE$,CC$)<>0 THEN 15280
15190 PL=CVI(N$)
15220 GAMTOT(PL)=GAMTOT(PL)+1
15230 FOR X=0 TO 17
15240 SCORTOT(PL)=SCORTOT(PL)+CVI(S$(X))
15270 NEXT X
15280 NEXT GAM
15285 RETURN
15286 C=0:P=0
15287 IF K-C<22 THEN I=K-C ELSE I=21
15290 CLS:LOCATE 1,1:PRINT"PLAYER":LOCATE 1,40:PRINT"GAMES PLAYED":LOCATE 1,67:PRINT"AVERAGE"
15320 FOR PL=P+1 TO P+I:IF GAMTOT(PL)=0 THEN AVG!(PL) = 0:GOTO 15350
15340 AVG!(PL)=SCORTOT(PL)/GAMTOT(PL)
15350 LOCATE 2+PL-P,1:PRINT TN$(PL)
15360 LOCATE 2+PL-P,45
15362 IF GAMTOT(PL)<10 THEN 15368
15364 PRINT CHR$(29);:IF GAMTOT(PL)<100 THEN 15368
15366 PRINT CHR$(29);:IF GAMTOT(PL)<1000 THEN 15368
15367 PRINT CHR$(29);
15368 PRINT GAMTOT(PL)
15370 LOCATE 2+PL-P,67:PRINT USING "###.##";AVG!(PL)
15380 C=C+1:NEXT PL
15390 LOCATE 25,1:IF C=K THEN 27000
15400 PRINT"Press any key to continue...";
15410 A$=INKEY$
15420 IF A$="" THEN 15410
15430 P=P+21:GOTO 15287
16000 REM****************************************DISPLAY WINNINGS/LOSSES
16005 CLS:LOCATE 10,30:PRINT"One moment please.....":GOSUB 16010:GOTO 16240
16010 OPEN "roundptr.dat" FOR INPUT AS #1:INPUT #1,ROUNDS:CLOSE #1:OPEN"ROUND.DAT" AS #3 LEN=59
16050 FIELD #3,8 AS D$,5 AS N$,5 AS C$,5 AS M$,2 AS S$(0),2 AS S$(1),2 AS S$(2),2 AS S$(3),2 AS S$(4),2 AS S$(5),2 AS S$(6),2 AS S$(7),2 AS S$(8),2 AS S$(9),2 AS S$(10),2 AS S$(11),2 AS S$(12),2 AS S$(13),2 AS S$(14),2 AS S$(15),2 AS S$(16),2 AS S$(17)
16060 OPEN "golfptr.dat" FOR INPUT AS #1:INPUT #1,K
16080 CLOSE #1:IF K = 0 THEN CLS:PRINT"Sorry, there are no registered golfers.":LOCATE 25,1:GOTO 27000
16090 OPEN "GOLFERS.DAT" FOR INPUT AS #4:FOR I=1 TO K:LINE INPUT #4,TN$(I):NEXT I:FOR PL=1 TO K:MONTOT(PL)=0:GAMTOT(PL)=0:NEXT PL:FOR GAM=1 TO ROUNDS:GET #3,GAM:PL=CVI(N$)
16210 MONTOT(PL) = MONTOT(PL)+CVI(M$):GAMTOT(PL)=GAMTOT(PL)+1:NEXT GAM
16230 RETURN
16240 C=0:P=0
16241 IF K-C<22 THEN I=K-C ELSE I=21
16242 CLS:LOCATE 1,1:PRINT"PLAYER":LOCATE 1,40:PRINT"GAMES PLAYED":LOCATE 1,60:PRINT"WINNINGS/LOSSES":FOR PL=P+1 TO P+I:LOCATE 2+PL-P,1:PRINT TN$(PL):LOCATE 2+PL-P,45
16292 IF GAMTOT(PL)<10 THEN 16298
16294 PRINT CHR$(29);:IF GAMTOT(PL)<100 THEN 16298
16296 PRINT CHR$(29);:IF GAMTOT(PL)<1000 THEN 16298
16297 PRINT CHR$(29);
16298 PRINT GAMTOT(PL)
16300 IF MONTOT(PL)>999 OR MONTOT(PL)<-999 THEN LOCATE 2+PL-P,65:PRINT MONTOT(PL):GOTO 16340
16310 IF MONTOT(PL)>99 OR MONTOT(PL)<-99 THEN LOCATE 2+PL-P,66:PRINT MONTOT(PL):GOTO 16340
16320 IF MONTOT(PL)>9 OR MONTOT(PL)<-9 THEN LOCATE 2+PL-P,67:PRINT MONTOT(PL):GOTO 16340
16330 LOCATE 2+PL-P,68:PRINT MONTOT(PL)
16340 C=C+1:NEXT PL
16350 LOCATE 25,1:IF C=K THEN 27000
16360 PRINT"Press any key to continue...";
16370 A$=INKEY$
16380 IF A$="" THEN 16370
16390 P=P+21:GOTO 16241
17000 REM***************DISPLAY INDIVIDUAL PLAYER'S AVERAGE FOR SPECIFIC COURSE
17005 GOSUB 17010:GOTO 17390
17010 CLS:GOSUB 22000:PRINT:PRINT:IF K = 0 THEN LOCATE 25,1:GOTO 27000
17020 PRINT:PRINT:INPUT"Please enter the number of the player you would like to know about?  ",X
17030 IF X<1 OR X>K THEN PRINT"Wrong number.....please try again.":GOTO 17020
17040 CLS:GOSUB 23000:IF L=0 THEN PRINT"Sorry, there are no courses listed in our files.":LOCATE 25,1:GOTO 27000
17050 PRINT
17060 PRINT:INPUT"Please enter the number of the course you would like to know about?  ",Y
17070 IF Y<1 OR Y>L THEN PRINT"Wrong number.....please try again.":GOTO 17060
17075 CLS:LOCATE 10,30:PRINT"One moment please....."
17080 GET #2,Y
17081 FRONT = 0:BACK = 0:FOR H = 1 TO 9:FRONT = FRONT +CVI(P$(H)):BACK = BACK + CVI(P$(H+9)):NEXT H
17090 OPEN "roundptr.dat" FOR INPUT AS #1:INPUT #1,ROUNDS:CLOSE #1:OPEN "ROUND.DAT" AS #3 LEN=59
17130 FIELD #3,8 AS D$,5 AS N$,5 AS C$,5 AS M$,2 AS S$(0),2 AS S$(1),2 AS S$(2),2 AS S$(3),2 AS S$(4),2 AS S$(5),2 AS S$(6),2 AS S$(7),2 AS S$(8),2 AS S$(9),2 AS S$(10),2 AS S$(11),2 AS S$(12),2 AS S$(13),2 AS S$(14),2 AS S$(15),2 AS S$(16),2 AS S$(17)
17140 GAMTOT=0:FRONTT=0:BACKT=0:FOR H=1 TO 18:T(H)=0:NEXT H:FOR GAM=1 TO ROUNDS:GET #3,GAM
17200 IF X <> CVI(N$) OR Y <> CVI(C$) THEN 17260
17210 GAMTOT = GAMTOT+1:FOR H=1 TO 18:T(H)=T(H)+CVI(S$(H-1)):NEXT H
17260 NEXT GAM
17270 FOR H=1 TO 9:FRONTT = FRONTT +T(H):BACKT = BACKT+T(H+9):NEXT H
17340 IF GAMTOT=0 THEN CLS:PRINT"Sorry, ";TN$(X);" has no recorded rounds at ";COURSE$;:LOCATE 25,1:GOTO 27000
17350 FAVG!=FRONTT/GAMTOT:BAVG!=BACKT/GAMTOT:TOTAVG!=(FRONTT+BACKT)/GAMTOT:FOR H=1 TO 18:AVG!(H)=T(H)/GAMTOT:NEXT H
17385 RETURN
17390 CLS
17400 LOCATE 1,40:PRINT"Player:  ";TN$(X):LOCATE 2,40:PRINT"Course:  ";COURSE$:LOCATE 3,40:PRINT"Games Played: ";GAMTOT:LOCATE 4,1:PRINT:FOR H=1 TO 18:IF H<10 THEN PRINT " ";
17440 PRINT H;"     ";:PRINT USING"###.##";AVG!(H);:PRINT"      ";CVI(P$(H)):NEXT H
17450 LOCATE 3,1:PRINT"Hole":LOCATE 3,11:PRINT"Average":LOCATE 3,21:PRINT"Par"
17460 LOCATE 10,50:PRINT"Average       Par"
17470 LOCATE 12,40:PRINT"Front      ";:PRINT USING"###.##";FAVG!;:PRINT"       ";FRONT
17480 LOCATE 13,40:PRINT"Back       ";:PRINT USING"###.##";BAVG!;:PRINT"       ";BACK
17490 LOCATE 14,40:PRINT"Total      ";:PRINT USING "###.##";TOTAVG!;:PRINT"       ";FRONT +BACK
17500 LOCATE 22,32
17510 GOTO 27000
18000 REM**********************DISPLAY INDIVIDUAL PLAYER'S HOLE AVERAGES BY PAR
18005 GOSUB 18010:IF K=0 THEN LOCATE 25,1:GOTO 27000
18007 GOTO 18330
18010 CLS:GOSUB 22000:IF K=O THEN RETURN
18020 PRINT:PRINT
18030 PRINT:INPUT"Please enter the number of the player you would like to know about?  ",X
18040 IF X<1 OR X>K THEN PRINT"Wrong number.....please try again.":GOTO 18030
18045 CLS:LOCATE 10,30:PRINT"One moment please....."
18050 OPEN "COURSE.DAT" AS #2 LEN = 62
18060 FIELD #2,26 AS COURSE$,2 AS P$(1),2 AS P$(2),2 AS P$(3),2 AS P$(4),2 AS P$(5),2 AS P$(6),2 AS P$(7),2 AS P$(8),2 AS P$(9),2 AS P$(10),2 AS P$(11),2 AS P$(12),2 AS P$(13),2 AS P$(14),2 AS P$(15),2 AS P$(16),2 AS P$(17),2 AS P$(18)
18070 OPEN "roundptr.dat" FOR INPUT AS #1:INPUT #1,ROUNDS:CLOSE #1:OPEN "round.dat" AS #3 LEN=59
18110 FIELD #3,8 AS D$,5 AS N$,5 AS C$,5 AS M$,2 AS S$(0),2 AS S$(1),2 AS S$(2),2 AS S$(3),2 AS S$(4),2 AS S$(5),2 AS S$(6),2 AS S$(7),2 AS S$(8),2 AS S$(9),2 AS S$(10),2 AS S$(11),2 AS S$(12),2 AS S$(13),2 AS S$(14),2 AS S$(15),2 AS S$(16),2 AS S$(17)
18120 GMTOT=0:P3STOT=0:P3HTOT=0:P4STOT=0:P4HTOT=0:P5STOT=0:P5HTOT=0:FOR I=1 TO ROUNDS:GET #3,I
18180 GET #2,CVI(C$):IF INSTR(COURSE$,CC$)<>0 OR X<>CVI(N$) THEN 18260
18200 GMTOT = GMTOT +1
18210 FOR H = 1 TO 18
18220 IF CVI(P$(H)) = 3 THEN P3STOT = P3STOT+CVI(S$(H-1)):P3HTOT = P3HTOT+1:GOTO 18250
18230 IF CVI(P$(H)) = 4 THEN P4STOT = P4STOT+CVI(S$(H-1)):P4HTOT = P4HTOT+1:GOTO 18250
18240 P5STOT = P5STOT+CVI(S$(H-1)):P5HTOT = P5HTOT+1
18250 NEXT H
18260 NEXT I
18270 IF P3HTOT <> 0 THEN P3AVG! = P3STOT/P3HTOT:GOTO 18290
18280 P3AVG! = 0
18290 IF P4HTOT <> 0 THEN P4AVG! = P4STOT/P4HTOT:GOTO 18310
18300 P4AVG! = 0
18310 IF P5HTOT <> 0 THEN P5AVG! = P5STOT/P5HTOT:GOTO 18325
18320 P5AVG! = 0
18325 RETURN
18330 IF GMTOT=0 THEN CLS:PRINT"Sorry, ";TN$(X);" has no recorded rounds.":LOCATE 25,1:GOTO 27000
18335 CLS:PRINT"Player:  ";TN$(X)
18340 PRINT"Games played:  "GMTOT
18350 PRINT:PRINT"Par 3 holes played: ";P3HTOT;:LOCATE 4,40:PRINT USING "PAR 3 AVERAGE:###.##";P3AVG!
18360 PRINT:PRINT"Par 4 holes played: ";P4HTOT;:LOCATE 6,40:PRINT USING "PAR 4 AVERAGE:###.##";P4AVG!
18370 PRINT:PRINT"Par 5 holes played: ";P5HTOT;:LOCATE 8,40:PRINT USING "PAR 5 AVERAGE:###.##";P5AVG!
18380 PRINT:PRINT:GOTO 27000
19000 REM************************************DISPLAY INDIVIDUAL PLAYER'S ROUNDS
19005 GOSUB 19010:IF K=0 THEN LOCATE 25,1:GOTO 27000
19006 GOTO 19137
19010 CLS:GOSUB 22000
19012 IF K=O THEN RETURN
19015 PRINT:IF Y = (K+1)/2 THEN PRINT
19020 PRINT:INPUT"Please type the number of the player you would like to know about: ",PR
19030 IF PR<1 OR PR>K THEN PRINT"Wrong number.....please try again.":GOTO 19020
19035 CLS:LOCATE 10,30:PRINT"One moment please....."
19050 OPEN "roundptr.dat" FOR INPUT AS #1:INPUT #1,ROUNDS:CLOSE #1:OPEN "round.dat" AS #3 LEN=59
19090 FIELD #3,8 AS D$,5 AS N$,5 AS C$,5 AS M$,2 AS S$(0),2 AS S$(1),2 AS S$(2),2 AS S$(3),2 AS S$(4),2 AS S$(5),2 AS S$(6),2 AS S$(7),2 AS S$(8),2 AS S$(9),2 AS S$(10),2 AS S$(11),2 AS S$(12),2 AS S$(13),2 AS S$(14),2 AS S$(15),2 AS S$(16),2 AS S$(17)
19100 OPEN "COURSPTR.DAT" FOR INPUT AS #1:INPUT #1,L:OPEN "course.dat" AS #2 LEN=62
19130 FIELD #2,26 AS COURSE$,2 AS P$(1),2 AS P$(2),2 AS P$(3),2 AS P$(4),2 AS P$(5),2 AS P$(6),2 AS P$(7),2 AS P$(8),2 AS P$(9),2 AS P$(10),2 AS P$(11),2 AS P$(12),2 AS P$(13),2 AS P$(14),2 AS P$(15),2 AS P$(16),2 AS P$(17),2 AS P$(18)
19135 RETURN
19137 C=0:P=0
19140 R=0:FOR I=1 TO ROUNDS:GET #3,I
19145 IF PR<>CVI(N$) THEN 19205
19150 IF R=0 THEN CLS:PRINT TN$(PR):PRINT:PRINT"DATE         COURSE                        MONEY          FRONT    BACK   TOTAL":PRINT
19155 GET #2,CVI(C$):PRINT D$;SPC(5);COURSE$;SPC(2);
19160 IF CVI(M$)<-999 OR CVI(M$)>999 THEN PRINT SPC(2);CVI(M$);:GOTO 19180
19165 IF CVI(M$)<-99 OR CVI(M$)>99 THEN PRINT SPC(3);CVI(M$);:GOTO 19180
19170 IF CVI(M$)<-9 OR CVI(M$)>9 THEN PRINT SPC(4);CVI(M$);:GOTO 19180
19175 PRINT SPC(5);CVI(M$);
19180 FRONT = 0:BACK = 0:FOR H = 0 TO 8:FRONT = FRONT + CVI(S$(H)):NEXT H:FOR H = 9 TO 17:BACK = BACK + CVI(S$(H)):NEXT H
19185 PRINT SPC(10)FRONT;SPC(4);BACK;
19190 IF FRONT + BACK >99 THEN PRINT SPC(3);FRONT+BACK:GOTO 19200
19195 PRINT SPC(4)FRONT+BACK
19200 R=1
19202 C=C+1:IF C-P=19 THEN LOCATE 25,1 ELSE 19205
19203 P=C:R=0:PRINT"Press any key to continue...";
19204 A$=INKEY$:IF A$="" THEN 19204
19205 NEXT I
19210 IF R = O THEN CLS:PRINT"Sorry, ";TN$(PR);" has no recorded rounds."
19215 LOCATE 25,1:GOTO 27000
20000 REM****************************************DISPLAY COURSE DATA
20010 CLS:GOSUB 23000:IF L=0 THEN PRINT"Sorry, there are no courses listed in our files.":LOCATE 25,1:GOTO 27000
20020 PRINT:PRINT:PRINT "Would you like detailed information about a course?":PRINT"Please type `Y' or `N': ";
20030 INPUT"",A$
20040 IF A$ = "Y" OR A$ = "y" THEN 20070
20050 IF A$ = "n" OR A$ = "N" THEN 1000
20060 BEEP:PRINT"Please type `Y' or `N'. ";:GOTO 20030
20070 PRINT:INPUT"Please enter the number of the course you would like to know about. ",COURSE
20080 IF COURSE <1 OR COURSE >L THEN PRINT"Wrong number.....please try again.":GOTO 20070
20090 GET #2,COURSE:CORS$=COURSE$:FOR I=1 TO 18:P(I)=CVI(P$(I)):NEXT I
20140 CLOSE:CLS:GOSUB 24000
20150 LOCATE 19,1
20160 GOTO 27000
21000 REM****************************************ERASE PROCEDURE
21010 FOR X=1 TO 8:LOCATE X+14,1:FOR Y = 1 TO 80:PRINT" ";:NEXT Y:NEXT X
21020 LOCATE 21,1:FOR I = 1 TO 60:PRINT" ";:NEXT I
21030 LOCATE 23,1:FOR I = 1 TO 40:PRINT" ";:NEXT I
21040 RETURN
22000 REM****************************************LIST OF GOLFERS
22005 GOSUB 22010:GOTO 22080
22010 OPEN "golfptr.dat" FOR INPUT AS #1:INPUT #1,K
22030 CLOSE #1:IF K=0 THEN CLS:PRINT"Sorry, there are no registered golfers.":RETURN
22040 OPEN "golfers.dat" FOR INPUT AS #4:FOR I=1 TO K:LINE INPUT #4,TN$(I):NEXT I:RETURN
22080 IF K=0 THEN RETURN
22085 Y=K/2:CLS:LOCATE 1,1
22090 FOR I=1 TO Y:LOCATE I,1
22110 IF I>9 THEN PRINT I;CHR$(29);".  ";TN$(I);:GOTO 22130
22120 PRINT " ";I;CHR$(29);".  ";TN$(I);
22130 NEXT I
22140 FOR I=(Y+1) TO K
22150 LOCATE (I-Y),40
22160 IF I>9 THEN PRINT I;CHR$(29);".  ";TN$(I);:GOTO 22180
22170 PRINT " ";I;CHR$(29);".  ";TN$(I);
22180 NEXT I
22190 RETURN
23000 REM****************************************LIST OF COURSES
23010 OPEN "COURSPTR.DAT" FOR INPUT AS #1:INPUT #1,L
23030 CLOSE #1:IF L=0 THEN RETURN
23040 OPEN "COURSE.DAT" AS #2 LEN=62
23050 FIELD #2,26 AS COURSE$,2 AS P$(1),2 AS P$(2),2 AS P$(3),2 AS P$(4),2 AS P$(5),2 AS P$(6),2 AS P$(7),2 AS P$(8),2 AS P$(9),2 AS P$(10),2 AS P$(11),2 AS P$(12),2 AS P$(13),2 AS P$(14),2 AS P$(15),2 AS P$(16),2 AS P$(17),2 AS P$(18)
23056 P=0
23058 IF L-P>19 THEN D=19 ELSE D=L-P
23060 LOCATE 1,1:PRINT"COURSE":LOCATE 1,38:PRINT"FRONT PAR":LOCATE 1,52:PRINT "BACK PAR":LOCATE 1,70:PRINT "TOTAL PAR":FOR I=1 TO D:GET #2,I+P:LOCATE 2+I,1
23130 IF I+P>9 THEN PRINT I+P;CHR$(29);".  ";:GOTO 23140
23132 PRINT" ";I+P;CHR$(29);".  ";
23140 PRINT COURSE$:FRONT=0:BACK=0:FOR J=1 TO 9:FRONT=FRONT+CVI(P$(J)):BACK=BACK+CVI(P$(J+9)):NEXT J:LOCATE 2+I,44:PRINT FRONT:LOCATE 2+I,57:PRINT BACK:LOCATE 2+I,76:PRINT FRONT+BACK;:NEXT I
23270 IF I+P>L THEN 23280
23272 P=P+19:LOCATE 25,1:PRINT"Press any key to continue...";
23274 A$=INKEY$:IF A$="" THEN 23274
23276 CLS:GOTO 23058
23280 RETURN
24000 REM****************************************INDIVIDUAL COURSE DATA
24010 FP=0:BP=0:LOCATE 1,15:PRINT"Course Name:":LOCATE 1,28:PRINT CORS$:LOCATE 3,15:PRINT"HOLE":LOCATE 3,25:PRINT"PAR":LOCATE 3,55:PRINT"HOLE":LOCATE 3,65:PRINT"PAR":FOR I=1 TO 9:LOCATE I+4,16:PRINT I:LOCATE I+4,25:PRINT P(I)
24170 FP=FP+P(I):NEXT I:LOCATE 15,16:PRINT"FRONT":LOCATE 15,24:PRINT FP:FOR I=10 TO 18:LOCATE I-5,56:PRINT I:LOCATE I-5,65:PRINT P(I):BP=BP+P(I):NEXT I:LOCATE 15,56:PRINT"BACK":LOCATE 15,64:PRINT BP:LOCATE 1,64:PRINT"COURSE PAR:";FP+BP:RETURN
25000 REM****************************************DATE INPUT
25020 INPUT"Please type the date in the form mm/dd/yy: ",DT$
25025 IF LEN(DT$)<>8 THEN 25190
25030 FOR I = 0 TO 2:FOR N = 1 TO 2
25040 IF MID$(DT$,N+3*I,1)="0" THEN 25150
25050 IF MID$(DT$,N+3*I,1)="1" THEN 25150
25060 IF MID$(DT$,N+3*I,1)="2" THEN 25150
25070 IF MID$(DT$,N+3*I,1)="3" THEN 25150
25080 IF MID$(DT$,N+3*I,1)="4" THEN 25150
25090 IF MID$(DT$,N+3*I,1)="5" THEN 25150
25100 IF MID$(DT$,N+3*I,1)="6" THEN 25150
25110 IF MID$(DT$,N+3*I,1)="7" THEN 25150
25120 IF MID$(DT$,N+3*I,1)="8" THEN 25150
25130 IF MID$(DT$,N+3*I,1)="9" THEN 25150
25140 GOTO 25190
25150 NEXT N
25160 NEXT I
25170 IF MID$(DT$,3,1)<>"/" THEN 25190
25180 IF MID$(DT$,6,1)="/" THEN 25200
25190 PRINT"That entry is invalid.  Please check the form and try again.":PRINT:GOTO 25020
25200 RETURN
26000 REM****************************************LOGO
26010 CLS:LOCATE 1,31:PRINT CHR$(201);:FOR I=1 TO 18:PRINT CHR$(205);:NEXT I:PRINT CHR$(187):LOCATE 2,31:PRINT CHR$(186):LOCATE 3,31:PRINT CHR$(186):LOCATE 4,31:PRINT CHR$(200);:FOR I=1 TO 18:PRINT CHR$(205);:NEXT I
26160 PRINT CHR$(188):LOCATE 2,50:PRINT CHR$(186):LOCATE 3,50:PRINT CHR$(186):LOCATE 2,35:PRINT"THE PERSONAL":LOCATE 3,37:PRINT"GOLFCARD":RETURN
27000 REM****************************************RETURN TO MAIN MENU
27010 PRINT"Press any key to return to Main Menu. ";
27020 A$=INKEY$
27030 IF A$="" THEN 27020 ELSE GOTO 1000
27500 REM****************************************OPEN COURSE FILE
27510 OPEN "COURSPTR.DAT" FOR INPUT AS #1:INPUT #1,L:CLOSE #1:OPEN "COURSE.DAT" AS #2 LEN=62
27540 FIELD #2,26 AS COURSE$,2 AS P$(1),2 AS P$(2),2 AS P$(3),2 AS P$(4),2 AS P$(5),2 AS P$(6),2 AS P$(7),2 AS P$(8),2 AS P$(9),2 AS P$(10),2 AS P$(11),2 AS P$(12),2 AS P$(13),2 AS P$(14),2 AS P$(15),2 AS P$(16),2 AS P$(17),2 AS P$(18)
27545 RETURN
28000 CLOSE:REM****************************************PRINT MENU
28010 GOSUB 26000:LOCATE 7,20:PRINT"HERE'S THE INFORMATION YOU CAN HAVE PRINTED":GOSUB 4030:GOTO 28200
28200 LOCATE 20,20
28210 INPUT"Please type the number of your choice. ",A
28220 ON A GOTO 28300,28400,28500,29400,28600,28700,28800,28900,29200,1000
28230 BEEP:GOTO 28200
28300 REM****************************************PRINT LIST OF GOLFERS
28310 CLS:LOCATE 10,30:PRINT"One moment please.....":GOSUB 22010:IF K=0 THEN LOCATE 25,1:GOTO 27000
28315 LPRINT"REGISTERED GOLFERS":LPRINT:FOR I=1 TO K:IF I<10 THEN LPRINT" ";
28320 LPRINT I;"  ";TN$(I):NEXT I:GOTO 1000
28400 REM*****************************************PRINT PLAYER AVERAGES
28405 CLS:LOCATE 10,30:PRINT"One moment please.....":GOSUB 15010
28410 LPRINT"PLAYER                                GAMES PLAYED               AVERAGE":LPRINT
28415 FOR PL = 1 TO K
28420 IF GAMTOT(PL)= 0 THEN AVG!(PL) = 0:GOTO 28445
28425 AVG!(PL)=SCORTOT(PL)/GAMTOT(PL)
28430 IF GAMTOT(PL)>999 THEN GAMDIG(PL)=4:GOTO 28450
28435 IF GAMTOT(PL)>99 THEN GAMDIG(PL) =3:GOTO 28450
28440 IF GAMTOT(PL)>9 THEN GAMDIG(PL) =2:GOTO 28450
28445 GAMDIG(PL) = 1
28450 XX = LEN(TN$(PL))+GAMDIG(PL)
28455 LPRINT TN$(PL);SPC(45-XX)GAMTOT(PL);SPC(19)
28460 LPRINT USING "###.##";AVG!(PL):NEXT PL
28465 GOTO 1000
28500 REM****************************************PRINT WINNINGS/LOSSES
28510 CLS:LOCATE 10,30:PRINT"One moment please.....":GOSUB 16010
28520 LPRINT"PLAYER                                GAMES PLAYED        WINNINGS/LOSSES":LPRINT
28530 FOR PL = 1 TO K
28531 IF GAMTOT(PL)>999 THEN GAMDIG(PL)=4:GOTO 28540
28532 IF GAMTOT(PL)>99 THEN GAMDIG(PL) =3:GOTO 28540
28533 IF GAMTOT(PL)>9 THEN GAMDIG(PL) =2:GOTO 28540
28534 GAMDIG(PL) = 1
28540 IF MONTOT(PL)<-9999 OR MONTOT(PL)>9999 THEN MONDIG(PL) = 5:GOTO 28580
28541 IF MONTOT(PL)<-999 OR MONTOT(PL)>999 THEN MONDIG(PL) = 4:GOTO 28580
28542 IF MONTOT(PL)<-99 OR MONTOT(PL)>99 THEN MONDIG(PL) = 3:GOTO 28580
28543 IF MONTOT(PL)<-9 OR MONTOT(PL)>9 THEN MONDIG(PL) = 2:GOTO 28580
28544 MONDIG(PL) = 1
28580 XX=LEN(TN$(PL))+GAMDIG(PL):LPRINT TN$(PL);SPC(45-XX)GAMTOT(PL);SPC(20-MONDIG(PL))MONTOT(PL):NEXT PL
28590 GOTO 1000
28600 REM*****************PRINT INDIVIDUAL PLAYER'S AVERAGE FOR SPECIFIC COURSE
28610 GOSUB 17010
28620 LPRINT"Player:  ";TN$(X):LPRINT"Course:  ";COURSE$:LPRINT"Games Played: ";GAMTOT
28645 LPRINT:LPRINT"Hole          Average          Par"
28650 LPRINT:FOR H = 1 TO 18:IF H<10 THEN LPRINT" ";
28660 LPRINT H;"          ";:LPRINT USING"###.##";AVG!(H);:LPRINT"           ";CVI(P$(H)):NEXT H
28670 LPRINT:LPRINT "Front";SPC(9);:LPRINT USING"###.##";FAVG!;:LPRINT SPC(10)FRONT
28675 LPRINT "Back ";SPC(9);:LPRINT USING"###.##";BAVG!;:LPRINT SPC(10)BACK
28680 LPRINT "Total";SPC(9);:LPRINT USING"###.##";TOTAVG!;:LPRINT SPC(10)BACK+FRONT
28690 GOTO 1000
28700 REM************************PRINT INDIVIDUAL PLAYER'S HOLE AVERAGES BY PAR
28710 GOSUB 18010:IF K=0 THEN LOCATE 25,1:GOTO 27000
28711 IF P3HTOT>999 THEN P3HTD = 4:GOTO 28715
28712 IF P3HTOT>99 THEN P3HTD = 3:GOTO 28715
28713 IF P3HTOT>9 THEN P3HTD = 2:GOTO 28715
28714 P3HTD = 1
28715 IF P4HTOT>999 THEN P4HTD = 4:GOTO 28719
28716 IF P4HTOT>99 THEN P4HTD = 3:GOTO 28719
28717 IF P4HTOT>9 THEN P4HTD = 2:GOTO 28719
28718 P4HTD = 1
28719 IF P5HTOT>999 THEN P5HTD = 4:GOTO 28725
28720 IF P5HTOT>99 THEN P5HTD = 3:GOTO 28725
28721 IF P5HTOT>9 THEN P5HTD = 2:GOTO 28725
28722 P5HTD = 1
28725 IF GMTOT=0 THEN CLS:PRINT"Sorry, ";TN$(X);" has no recorded rounds.":PRINT:PRINT:PRINT:GOTO 27000
28726 LPRINT"Player:  ";TN$(X)
28730 LPRINT"Games played:  "GMTOT
28740 LPRINT:LPRINT "Par 3 holes played: ";SPC(4-P3HTD)P3HTOT;SPC(15);:LPRINT USING "PAR 3 AVERAGE:###.##";P3AVG!
28750 LPRINT:LPRINT "Par 4 holes played: ";SPC(4-P4HTD)P4HTOT;SPC(15);:LPRINT USING "PAR 4 AVERAGE:###.##";P4AVG!
28760 LPRINT:LPRINT "Par 5 holes played: ";SPC(4-P5HTD)P5HTOT;SPC(15);:LPRINT USING "PAR 5 AVERAGE:###.##";P5AVG!
28770 GOTO 1000
28800 REM**************************************PRINT INDIVIDUAL PLAYER'S ROUNDS
28805 GOSUB 19010:IF K=0 THEN LOCATE 25,1:GOTO 27000
28806 R=0:FOR I=1 TO ROUNDS:GET #3,I
28809 IF PR<>CVI(N$) THEN 28875
28810 IF R = 0 THEN LPRINT TN$(PR):LPRINT:LPRINT"DATE         COURSE                        MONEY          FRONT    BACK   TOTAL":LPRINT
28815 RTOT=RTOT+1:GET #2,CVI(C$):LPRINT D$;SPC(5);COURSE$;SPC(2);
28830 IF CVI(M$)<-999 OR CVI(M$)>999 THEN LPRINT SPC(2);CVI(M$);:GOTO 28850
28835 IF CVI(M$)<-99 OR CVI(M$)>99 THEN LPRINT SPC(3);CVI(M$);:GOTO 28850
28840 IF CVI(M$)<-9 OR CVI(M$)>9 THEN LPRINT SPC(4);CVI(M$);:GOTO 28850
28845 LPRINT SPC(5);CVI(M$);
28850 FRONT = 0:BACK = 0:FOR H = 0 TO 8:FRONT = FRONT + CVI(S$(H)):NEXT H:FOR H = 9 TO 17:BACK = BACK + CVI(S$(H)):NEXT H
28855 LPRINT SPC(10)FRONT;SPC(4);BACK;
28860 IF FRONT + BACK >99 THEN LPRINT SPC(3);FRONT+BACK:GOTO 28870
28865 LPRINT SPC(4)FRONT+BACK
28870 R=1
28875 NEXT I
28880 IF R = O THEN CLS:PRINT"Sorry, ";TN$(PR);" has no recorded rounds.":PRINT:PRINT:PRINT:GOTO 27000
28885 GOTO 1000
28900 REM****************************************PRINT COURSE DATA
28905 OPEN "COURSPTR.DAT" FOR INPUT AS #1:INPUT #1,L
28915 CLOSE #1:IF L = 0 THEN CLS:PRINT"Sorry, there are no courses listed in our files.":LOCATE 25,1:GOTO 27000
28920 OPEN "COURSE.DAT" AS #2 LEN = 62
28925 FIELD #2,26 AS COURSE$,2 AS P$(1),2 AS P$(2),2 AS P$(3),2 AS P$(4),2 AS P$(5),2 AS P$(6),2 AS P$(7),2 AS P$(8),2 AS P$(9),2 AS P$(10),2 AS P$(11),2 AS P$(12),2 AS P$(13),2 AS P$(14),2 AS P$(15),2 AS P$(16),2 AS P$(17),2 AS P$(18)
28930 CLS:PRINT"Would you like to print a list of all courses?":PRINT"Please type `Y' or `N'. ";
28935 INPUT"",A$
28940 IF A$="Y" OR A$="y" THEN 28955
28945 IF A$ = "N" OR A$ = "n" THEN 29005
28950 BEEP:PRINT"Please type `Y' or `N'. ";:GOTO 28935
28955 CLS:LOCATE 10,30:PRINT"One moment please.....":LPRINT"COURSE";SPC(31);"FRONT PAR";SPC(5);"BACK PAR";SPC(10);"TOTAL PAR":LPRINT
28960 FOR I = 1 TO L:GET #2,I:FRONT=0:BACK=0:FOR H=1 TO 9:FRONT=FRONT+CVI(P$(H)):BACK=BACK+CVI(P$(H+9)):NEXT H:LPRINT COURSE$;SPC(15)FRONT;SPC(9)BACK;SPC(15)FRONT+BACK:NEXT I
29005 PRINT:PRINT:PRINT "Would you like to print detailed information about a course?":PRINT"Please type `Y' or `N': ";
29010 INPUT"",A$
29015 IF A$ = "Y" OR A$ = "y" THEN 29030
29020 IF A$ = "n" OR A$ = "N" THEN 1000
29025 BEEP:PRINT"Please type `Y' or `N'. ";:GOTO 29010
29030 CLS:CLOSE:GOSUB 23000:PRINT:PRINT:INPUT"Please enter the number of the course you would like to know about. ",COURSE
29040 IF COURSE <1 OR COURSE >L THEN PRINT"Wrong number.....please try again.":GOTO 20070
29045 CLS:LOCATE 10,30:PRINT"One moment please.....":GET #2,COURSE
29050 CORS$=COURSE$:FOR I=1 TO 18:P(I)=CVI(P$(I)):NEXT I:FP=0:BP=0:LPRINT CORS$:LPRINT
29090 LPRINT SPC(14);"HOLE";SPC(6);"PAR";SPC(27);"HOLE";SPC(6);"PAR"
29095 FOR I = 1 TO 9:FP = FP +P(I):BP=BP+P(I+9)
29100 LPRINT SPC(15)I;SPC(6)P(I);SPC(27)I+9;SPC(6)P(I+9)
29105 NEXT I
29110 LPRINT:LPRINT SPC(28);"Front Par:   ";FP
29115 LPRINT SPC(28);"Back Par:    ";BP
29120 LPRINT SPC(28);"Total Par:   ";FP+BP
29125 GOTO 1000
29200 REM****************************************PRINT GAME RESULTS
29205 CLS:PRINT"Please enter the date of the game to be printed":INPUT"using the form mm/dd/yy. ",DT$:GOSUB 13020
29208 IF G=0 OR L=0 THEN LOCATE 25,1:GOTO 27000
29210 PLYRS = G
29215 LPRINT COURSE$;"   (";FRONTP;"/";BACKP;"/";TOTP;")";SPC(27);DT$
29220 LPRINT:LPRINT"               Hole  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18  TOTAL";
29225 LPRINT:LPRINT"                Par ";:PARTOT = 0
29230 FOR I = 1 TO 18:LPRINT CVI(P$(I));:PARTOT = PARTOT + CVI(P$(I)):NEXT I:LPRINT "  ";PARTOT
29235 LPRINT:FOR M =1 TO PLYRS
29240 LPRINT TN$(PLYR(M));SPC(20-LEN(TN$(PLYR(M)))):TOT = 0:FOR I = 1 TO 18
29245 TOT = TOT + S(M,I)
29255 LPRINT S(M,I);
29256 NEXT I:IF TOT<100 THEN LPRINT" ";
29258 LPRINT " ";TOT:NEXT M:LPRINT
29260 FOR M = 1 TO PLYRS
29265 LPRINT TN$(PLYR(M));
29270 IF MONEY(M) = 0 THEN LPRINT" neither won nor lost any money.":GOTO 29305
29275 IF MONEY(M)<0 THEN 29290 ELSE LPRINT" won";MONEY(M);
29280 IF MONEY(M)<2 THEN LPRINT"dollar.":GOTO 29305
29285 LPRINT"dollars.":GOTO 29305
29290 LPRINT" lost";0-MONEY(M);
29295 IF MONEY(M)>-2 THEN LPRINT"dollar.":GOTO 29305
29300 LPRINT"dollars."
29305 NEXT M
29310 GOTO 1000
29400 REM*******************************PRINT ALL PLAYERS' HOLE AVERAGES BY PAR
29405 GOSUB 30105
29410 LPRINT"PLAYER'S";SPC(7);"GAMES";SPC(4);"PAR 3'S";SPC(2);"PAR 3";SPC(6);"PAR 4'S";SPC(2);"PAR 4";SPC(6);"PAR 5'S";SPC(2);"PAR 5";
29415 LPRINT"NAME";SPC(11);"PLAYED";SPC(3);"PLAYED";SPC(3);"AVERAGE";SPC(4);"PLAYED";SPC(3);"AVERAGE";SPC(4);"PLAYED";SPC(3);"AVERAGE"
29420 FOR PL = 1 TO K:LPRINT TN$(PL);SPC(16-LEN(TN$(PL)));
29425 IF GMTOT(PL)<10 THEN LPRINT"  ";:GOTO 29435
29430 IF GMTOT(PL) <100 THEN LPRINT " ";
29435 LPRINT GMTOT(PL);SPC(4);
29440 IF P3HTOT(PL)<10 THEN LPRINT"   ";:GOTO 29455
29445 IF P3HTOT(PL)<100 THEN LPRINT"  ";:GOTO 29455
29450 IF P3HTOT(PL)<1000 THEN LPRINT" ";
29455 LPRINT P3HTOT(PL);SPC(3);:LPRINT USING"##.##";P3AVG!(PL);:LPRINT SPC(6);
29460 IF P4HTOT(PL)<10 THEN LPRINT"   ";:GOTO 29475
29465 IF P4HTOT(PL)<100 THEN LPRINT"  ";:GOTO 29475
29470 IF P4HTOT(PL)<1000 THEN LPRINT" ";
29475 LPRINT P4HTOT(PL);SPC(3);:LPRINT USING"##.##";P4AVG!(PL);:LPRINT SPC(6);
29480 IF P5HTOT(PL)<10 THEN LPRINT"   ";:GOTO 29495
29485 IF P5HTOT(PL)<100 THEN LPRINT"  ";:GOTO 29495
29490 IF P5HTOT(PL)<1000 THEN LPRINT" ";
29495 LPRINT P5HTOT(PL);SPC(3);:LPRINT USING"##.##";P5AVG!(PL):NEXT PL:GOTO 1000
30000 REM****************************************DISPLAY GAME RESULTS
30010 CLS:PRINT"Please enter the date of the game to be displayed":INPUT"using the form mm/dd/yy. ",DT$:GOSUB 13020
30020 IF L=0 THEN LOCATE 25,1:GOTO 27000
30025 PLYRS=G:GOSUB 7605
30030 LOCATE 25,1:GOTO 27000
30100 REM*****************************DISPLAY ALL PLAYERS' HOLE AVERAGES BY PAR
30102 GOSUB 30105:GOTO 30225
30105 CLS:LOCATE 10,30:PRINT"One moment please.....":GOSUB 22010:IF K=0 THEN LOCATE 25,1:GOTO 27000
30120 OPEN "COURSE.DAT" AS #2 LEN = 62
30125 FIELD #2,26 AS COURSE$,2 AS P$(1),2 AS P$(2),2 AS P$(3),2 AS P$(4),2 AS P$(5),2 AS P$(6),2 AS P$(7),2 AS P$(8),2 AS P$(9),2 AS P$(10),2 AS P$(11),2 AS P$(12),2 AS P$(13),2 AS P$(14),2 AS P$(15),2 AS P$(16),2 AS P$(17),2 AS P$(18)
30126 OPEN "roundptr.dat" FOR INPUT AS #1:INPUT #1,ROUNDS:CLOSE #1:OPEN "round.dat" AS #3 LEN=59
30129 FIELD #3,8 AS D$,5 AS N$,5 AS C$,5 AS M$,2 AS S$(0),2 AS S$(1),2 AS S$(2),2 AS S$(3),2 AS S$(4),2 AS S$(5),2 AS S$(6),2 AS S$(7),2 AS S$(8),2 AS S$(9),2 AS S$(10),2 AS S$(11),2 AS S$(12),2 AS S$(13),2 AS S$(14),2 AS S$(15),2 AS S$(16),2 AS S$(17)
30130 FOR PL = 1 TO K:GMTOT(PL)=0:P3HTOT(PL)=0:P3STOT(PL)=0:P4HTOT(PL)=0:P4STOT(PL)=0:P5HTOT(PL)=0:P5STOT(PL)=0:NEXT PL:FOR I=1 TO ROUNDS
30150 GET #3,I:PL=CVI(N$)
30155 GET #2,CVI(C$):IF INSTR(COURSE$,CC$)<>0 THEN 30186
30160 GMTOT(PL)=GMTOT(PL)+1:FOR H=1 TO 18
30170 IF CVI(P$(H)) = 3 THEN P3STOT(PL)=P3STOT(PL)+CVI(S$(H-1)):P3HTOT(PL)= P3HTOT(PL)+1:GOTO 30182
30175 IF CVI(P$(H)) = 4 THEN P4STOT(PL)=P4STOT(PL)+CVI(S$(H-1)):P4HTOT(PL)= P4HTOT(PL)+1:GOTO 30182
30180 P5STOT(PL) = P5STOT(PL)+CVI(S$(H-1)):P5HTOT(PL) = P5HTOT(PL)+1
30182 NEXT H
30186 NEXT I:FOR PL = 1 TO K
30190 IF P3HTOT(PL)<>0 THEN P3AVG!(PL) = P3STOT(PL)/P3HTOT(PL):GOTO 30200
30195 P3AVG!(PL) = 0
30200 IF P4HTOT(PL)<>0 THEN P4AVG!(PL) = P4STOT(PL)/P4HTOT(PL):GOTO 30210
30205 P4AVG!(PL) = 0
30210 IF P5HTOT(PL)<>0 THEN P5AVG!(PL) = P5STOT(PL)/P5HTOT(PL):GOTO 30217
30215 P5AVG!(PL) = 0
30217 NEXT PL
30220 RETURN
30225 S=0:IF K>20 THEN L=20 ELSE L=K
30229 CLS:PRINT"PLAYER'S";SPC(7);"GAMES";SPC(4);"PAR 3'S";SPC(2);"PAR 3";SPC(6);"PAR 4'S";SPC(2);"PAR 4";SPC(6);"PAR 5'S";SPC(2);"PAR 5";
30230 PRINT"NAME";SPC(11);"PLAYED";SPC(3);"PLAYED";SPC(3);"AVERAGE";SPC(4);"PLAYED";SPC(3);"AVERAGE";SPC(4);"PLAYED";SPC(3);"AVERAGE"
30231 LOCATE 4,1
30235 FOR PL=S+1 TO L:PRINT TN$(PL);SPC(18-LEN(TN$(PL)));
30240 IF GMTOT(PL)<10 THEN 30250
30245 PRINT CHR$(29);:IF GMTOT(PL) >99 THEN PRINT CHR$(29);
30250 PRINT GMTOT(PL);SPC(7);
30262 IF P3HTOT(PL)<10 THEN 30268
30264 PRINT CHR$(29);:IF P3HTOT(PL)<100 THEN 30268
30266 PRINT CHR$(29);:IF P3HTOT(PL)>999 THEN PRINT CHR$(29);
30268 PRINT P3HTOT(PL);SPC(3);:PRINT USING"##.##";P3AVG!(PL);:PRINT SPC(9);
30272 IF P4HTOT(PL)<10 THEN 30278
30274 PRINT CHR$(29);:IF P4HTOT(PL)<100 THEN 30278
30276 PRINT CHR$(29);:IF P4HTOT(PL)>999 THEN PRINT CHR$(29);
30278 PRINT P4HTOT(PL);SPC(3);:PRINT USING"##.##";P4AVG!(PL);:PRINT SPC(9);
30282 IF P5HTOT(PL)<10 THEN 30290
30284 PRINT CHR$(29);:IF P5HTOT(PL)<100 THEN 30290
30286 PRINT CHR$(29);:IF P5HTOT(PL)>999 THEN PRINT CHR$(29);
30290 PRINT P5HTOT(PL);SPC(3);:PRINT USING"##.##";P5AVG!(PL):NEXT PL
30292 LOCATE 25,1:IF L=K THEN 27000
30294 PRINT"Press any key to continue...";
30296 A$=INKEY$
30298 IF A$="" THEN 30296
30300 L=K:S=20:GOTO 30229
32000 END
33000 CLS:LOCATE 10,1:IF ERR=53 THEN PRINT"Diskette contains no data.  Please initialize.":GOTO 33100
33010 IF ERR=24 OR ERR=25 OR ERR=27 THEN PRINT"Check printer before continuing.":GOTO 33100
33020 PRINT"Someting is wrong.":PRINT"I don't know what it is.":PRINT"Try again.":PRINT"Pray."
33100 LOCATE 25,1:PRINT"Press any key to continue...";
33110 A$=INKEY$:IF A$="" THEN 33110
33120 RESUME 1000
```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0342

     Volume in drive A has no label
     Directory of A:\

    COURSE   DAT      1280   8-19-84  11:00p
    COURSPTR DAT         7   8-16-84   9:34p
    FILES342 TXT      1024   5-23-85   2:07p
    GOLFCARD BAS     41888   8-17-84  11:14p
    GOLFCARD EXE     80640   8-17-84  11:27p
    GOLFERS  DAT       128   8-19-84  10:56p
    GOLFPTR  DAT       128   8-19-84  10:56p
    README   DOC      1264   8-19-84  10:51p
    ROUND    DAT      8704   8-26-84  10:09a
    ROUNDPTR DAT       128   8-26-84  10:09a
           10 file(s)     135191 bytes
                           22528 bytes free
