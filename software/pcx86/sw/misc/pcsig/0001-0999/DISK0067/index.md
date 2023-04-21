---
layout: page
title: "PC-SIG Diskette Library (Disk #67)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0067/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0067"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "NONLIN"

    This disk contains a variety of useful BASIC programs that will
    unprotect a BASIC program saved with the \P switch, print labels, and
    control your printer.  NONLIN also includes some interesting math
    functions.  In addition, there is a simple communication program and
    several PC-TALK modification files.
    
    System Requirements:  Some programs require BASIC.
    
    How to Start:  For instructions on running BASIC programs, please refer
    to the GETTING STARTED section in this catalog. To read DOC files simply
    enter TYPE filename.ext and press <ENTER>.
    
    File Descriptions:
    
    GROWTH   BAS  Growth rate projections
    UN       P    File used to unprotect a BASIC program
    PRINTER  BAS  Epson printer routine
    UNPROT   DOC  Description of how to unprotect a BASIC program
    REGRESS  BAS  IPCO game - linear regression
    DATA          Part of NONLIN - set of test data
    FUNC1    BAS  Part of NONLIN - Lorentzian function
    FUNC2    BAS  Part of NONLIN - Gausian function
    NONLIN   BAS  Performs non-linear least squares fit
    TM-TIME1 BAS  PC-TALK 2.0 add on to correct system on program exit
    TM-LDIR1 BAS  PC-TALK 2.0 modifications to expand directory to 4 pages
    TM-DIAL2 BAS  PC-TALK 2.0 modifications to add automatic redial function
    TM-BREAK BAS  PC-TALK 2.0 modifications to add true break with ALT-B
    CLKMOD   BAS  Prints day of week
    APPLECOM BAS  Simple communication program
    LABELS   BAS  Quick label printer
    BIGCHAR  BAS  Displays big characters on screen
    LABELEPS BAS  Label maker
    SCISUBV1 BAS  Simple plotting program
    MATHFUNC BAS  IPCO 20 complex math functions
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## APPLECOM.BAS

{% raw %}
```bas
10 DEFINT A-Z
15 FALSE=0:TRUE= NOT FALSE
20 KEY OFF:CLS:CLOSE
30 OPEN "COM1:300,E,7" AS 1
40 B$=INKEY$: IF B$<> "" AND B$ <>"\"      THEN PRINT#1,B$;
50 IF B$="\" THEN PRINT #1,CHR$(19);:       GOTO 500
60 IF EOF(1) THEN 40
70 IF LOC(1)>128 THEN PRINT #1,CHR$(19) ;:   PAUSE=TRUE
80 A$=INPUT$(LOC(1),#1)
90 PRINT A$;
100 IF FLG THEN PRINT #2,A$;
110 IF LOC(1)>0 THEN GOTO 70
120 IF PAUSE THEN PAUSE=FALSE:PRINT #1,     CHR$(17);
130 GOTO 40
500 PRINT "1 OPEN FILE"
510 PRINT "2 CLOSE FILE"
520 PRINT "3 END SESSION"
530 INPUT "OPTION ",OPT
540 ON OPT GOTO 600,700,800
590 REM OPEN FILE
600 INPUT "FILE NAME.EXT ",F$
610 OPEN F$ FOR OUTPUT AS #2
620 PRINT #1,CHR$(17);
625 FLG=TRUE
630 GOTO 40
690 REM CLOSE FILE
700 CLOSE #2
710 PRINT #1,CHR$(17);
715 FLG=FALSE
720 GOTO 40
790 REM END
800 CLOSE
810 END
```
{% endraw %}

## BIGCHAR.BAS

{% raw %}
```bas
10 'DISPLAY DOT MATRIX CHARACTERS           FROM ROM PATTERNS
20 'SAMPLE INPUT ... 40,DON\JUAN
30 'PROGRAM CHANGES SCREEN WIDTH TO THE SPECIFIED 40 OR 80 CHARACTERS
40 'MESSAGE IS DISPLAYED IN LARGE CHARACTERS
50 'MAXIMUMS - 2 LINE DISPLAY
60 '         - WIDTH=40 4 CHARACTERS PER LINE
70 '         - WIDTH=80 8 CHARACTERS PER LINE
80 'THE BACKSLASH CHARACTER "\" STARTS THE SECOND LINE PRINT
90 DEFINT A-Z
100 SCREEN 0,0
110 DEF SEG=&HF000
120 BASEADR=&HFA6E
130 BYTESPERCHAR=8
140 KEY OFF
150 CLS
160 LOCATE 24,2
170 INPUT "ENTER WIDTH,MESSAGE";WID,MSG$
180 CLS
190 IF (WID=40 OR WID=80) GOTO 200 ELSE PRINT "INVALID SCREENWIDTH...REENTER":CLS:GOTO 160
200 WIDTH WID
210 LOCATE 24,2
220 PRINT "WIDTH = ";WID;" MESSAGE = ";MSG$
230 'X,Y = START LOCATION FOR CURRENT CHARACTER
240 X=2: Y=2
250 NUM=LEN(MSG$)
260 FOR I=1 TO NUM
270   CHAR$=MID$(MSG$,I,1)
280   IF CHAR$="\" THEN X=X+11:Y=3:GOTO 360
290   IF WID=40 AND Y>32 GOTO 360
300   IF WID=80 AND Y>73 GOTO 360
310   IF X>13            GOTO 360
320   CODE=ASC(CHAR$)
330   ADRESS=BASEADR+(CODE*BYTESPERCHAR)
340   GOSUB 380
350   Y=Y+9
360 NEXT I
370 GOTO 160
380 FOR ROW=1 TO 8
390   ROWVAL=PEEK(ADRESS+(ROW-1))
400   FOR COL=1 TO 8
410     COLMASK=2^(7-(COL-1))
420     IF (ROWVAL AND COLMASK) <> 0              THEN GOSUB 460
430   NEXT COL
440 NEXT ROW
450 RETURN
460 'LOCATE TO BIT POSITION AND DISPLAY GIANT PIXEL
470 X1=X+(ROW-1)
480 Y1=Y+(COL-1)
490 LOCATE X1,Y1
500 PRINT CHR$(CODE)
510 RETURN
```
{% endraw %}

## CLKMOD.BAS

{% raw %}
```bas
21 '
22 ' Day of week / Date rollover for Mike Sullivan's digital clock
23 ' DELETE lines 60-230 from the original program...
24 ' Then MERGE this code into it.  Day of week will be displayed;
25 ' day and date will change following 23:59:59.
26 ' You can also use the perpetual calendar routine in other programs.
27 ' Clayton Gaskill, Charlotte, NC
28 '
60 GOSUB 4060
1095 XDA$=MID$(DATE$,4,2)
1115 IF DA$<>XDA$ THEN GOSUB 4060
4060 MO$=MID$(DATE$,1,2)
4070 DA$=MID$(DATE$,4,2)
4080 YR$=MID$(DATE$,9,2)
4081 YR4$=MID$(DATE$,7,4)
4090 MO=VAL(MO$)
4091 YR=VAL(YR$)
4092 YR4=VAL(YR4$)
4100 ON MO GOTO 4110,4120,4130,4140,4150,4160,4170,4180,4190,4200,4210,4220
4110 MO$="JANUARY":GOTO 4230
4120 MO$="FEBRUARY":GOTO 4230
4130 MO$="MARCH":GOTO 4230
4140 MO$="APRIL":GOTO 4230
4150 MO$="MAY":GOTO 4230
4160 MO$="JUNE":GOTO 4230
4170 MO$="JULY":GOTO 4230
4180 MO$="AUGUST":GOTO 4230
4190 MO$="SEPTEMBER":GOTO 4230
4200 MO$="OCTOBER":GOTO 4230
4210 MO$="NOVEMBER":GOTO 4230
4220 MO$="DECEMBER":GOTO 4230
4230 YEAR%=YR4
4233 MONTH%=MO
4235 DAY%=VAL(DA$)
4240 IF MONTH%=1 OR MONTH%=2 THEN 4250 ELSE 4270
4250 YEAR%=YEAR%-1
4260 MONTH%=MONTH%+12
4270 DOW.K%=DAY%+YEAR%+MONTH%*2+YEAR%\4+YEAR%\400+(MONTH%+1)*3\5+2-YEAR%\100
4330 DOW%=DOW.K% MOD 7
4360 IF DOW%=0 OR DOW%=1 THEN DOW%=DOW%+7
4370 DOW%=DOW%-1
4500 ON DOW% GOTO 4510,4520,4530,4540,4550,4560,4570
4510 DOW$="MONDAY":GOTO 4580
4520 DOW$="TUESDAY":GOTO 4580
4530 DOW$="WEDNESDAY":GOTO 4580
4540 DOW$="THURSDAY":GOTO 4580
4550 DOW$="FRIDAY":GOTO 4580
4560 DOW$="SATURDAY":GOTO 4580
4570 DOW$="SUNDAY":GOTO 4580
4580 LOCATE 22,29:PRINT DOW$;", ";MO$;" ";DA$;", ";YR4$;"     "
4590 RETURN
```
{% endraw %}

## CRC.TXT

{% raw %}
```
PC-SIG Disk No. #67, version v1 

The following is a list of the file checksums which should be produced by
the CRCK4 program on disk #9 (and others).  If the CRC numbers do not match
you may have a bad file.  To use type:  CRCK4 <filespec>

CRCK4 output for this disk:


CRCK ver 4.2B (MS DOS VERSION )
CTL-S pauses, CTL-C aborts

--> FILE:  GROWTH  .BAS         CRC = CB 74

--> FILE:  PRINTER .BAS         CRC = 4D 9D

--> FILE:  UN      .P           CRC = 73 16

--> FILE:  UNPROT  .DOC         CRC = C2 27

--> FILE:  REGRESS .BAS         CRC = AC 1A

--> FILE:  NONLIN  .BAS         CRC = 22 9A

--> FILE:  FUNC2   .BAS         CRC = 47 34

--> FILE:  FUNC1   .BAS         CRC = C8 E0

--> FILE:  DATA    .            CRC = 66 F8

--> FILE:  BIGCHAR .BAS         CRC = 9F 3F

--> FILE:  LABELS  .BAS         CRC = 16 A0

--> FILE:  APPLECOM.BAS         CRC = FA AD

--> FILE:  CLKMOD  .BAS         CRC = A1 56

--> FILE:  TM-BREAK.BAS         CRC = 9C 14

--> FILE:  TM-DIAL2.BAS         CRC = E0 F5

--> FILE:  TM-LDIR1.BAS         CRC = EF ED

--> FILE:  TM-TIME1.BAS         CRC = D8 2B

--> FILE:  LABELEPS.BAS         CRC = BF 6F

--> FILE:  SCISUBV1.BAS         CRC = 4D 24

--> FILE:  MATHFUNC.BAS         CRC = 40 C3

 ---------------------> SUM OF CRCS = 78 67

DONE

These and other Public Domain and user-supported programs from:

PC Software Interest Group
1125 Stewart Ct  Suite G
Sunnyvale, CA 94086
(408) 730-9291
```
{% endraw %}

## FUNC1.BAS

{% raw %}
```bas
10050 NVAR = 1 : NP = 3
11000 '********************************************************************
11010 '* SUBROUTINE GAUSSIAN                                              *
11020 '*                                                                  *
11030 '* Fills the array fcalc(nobs) with values along a gaussian         *
11040 '* of the form:                                                     *
11050 '*                                                                  *
11060 '* gauss(pos) = H * exp[-1 * (pos - P)^2 / w^2]                     *
11070 '*                                                                  *
11080 '* where H, W, and P are parameters to be fit.                      *
11090 '* Assignments:  H = p(1)  W = p(2)  P = p(3)  pos = vobs(i,1)      *
11100 '********************************************************************
11110 LOCATE 1,1:  'PUT SPURIOUS UNDERFLOW MESSAGES IN INNOCENT LOCATION
11120 FOR I = 1 TO NOBS
11130    FCALC(I)  =  P(1) * EXP( -1 * ( (VOBS(I,1) - P(3))^2 / P(2)^2 ) )
11140    NEXT I
11150 RETURN
```
{% endraw %}

## FUNC2.BAS

{% raw %}
```bas
11000 '********************************************************************
11010 '* SUBROUTINE LORENTZIAN                                            *
11020 '*                                                                  *
11030 '* Fills the array fcalc(nobs) with values along a lorentzian of    *
11040 '* the form:                                                        *
11050 '*                                                                  *
11060 '* lor(pos) = H / [(1/W)^2 * (pos - P)^2 + 1]                       *
11070 '*                                                                  *
11080 '* where H, W, and P are parameters to be fit.                      *
11090 '* Assignments: H = p(1)  W = p(2) P = p(3)    pos = vobs(i,1)      *
11100 '********************************************************************
11110 '
11130 WSQ2 = 1# / (P(2) * P(2))
11160 FOR I = 1 TO NOBS
11170    FCALC(I) =  P(1) / (WSQ2 * (VOBS(I,1) - P(3))^2 + 1#)
11230    NEXT I
11240 RETURN
```
{% endraw %}

## GROWTH.BAS

{% raw %}
```bas
10 KEY OFF
30 WIDTH 80:SCREEN 0:COLOR 7,0:CLS
40 DIM F(53)
49 COLOR 0,7:PRINT SPC(79):LOCATE 1,1
50 PRINT TAB(5);"Growth Rate        and       Projections  via  Exponential Regression":COLOR 7,0
60 PRINT
70 PRINT
81 PRINT "    This program analyzes the trend (of some value) for past periods,"
82 PRINT "    computes an average growth rate, and projects future figures."
83 PRINT :PRINT "    If entering new data ---":PRINT "    You will be asked to specify the number of past periods, and then the number    of future periods to project.  ";
84 PRINT "For each of the past periods, you must then":PRINT "    enter the number of items. (the number must be non-zero)"
85 PRINT :PRINT "    The total number of periods (past + future) cannot exceed 52."
90 PRINT
100 PRINT
150 LINE INPUT;"Do you want to enter new <new> or review old <old> data ? ";TODO$:TODO$=LEFT$(TODO$,1)
160 IF TODO$="n" OR TODO$="N" THEN PRINT :GOTO 200
165 IF TODO$<>"o" AND TODO$<>"O" THEN PRINT:GOTO 150
170 PRINT :LINE INPUT"What is the file name of the old data you want to review ?";OLD$:OLD$=LEFT$(OLD$,12):LOCATE 25,10:PRINT "Please stand by while the file is read in";:IF OLD$="" THEN RUN
175 OPEN OLD$ FOR INPUT AS #1 : J=0
176 INPUT#1, TITLE$:INPUT #1, M,P
177 WHILE NOT EOF(1) : J=J+1:IF J>52 THEN 188 ELSE INPUT#1,F(J):WEND
188 GOTO 300
199 REM .. data entry
200 PRINT :LINE INPUT "How many past periods: ? ";M$:M=VAL(M$)
210 LINE INPUT "How many periods to project (future): ? ";P$:P=VAL(P$):IF P<0 THEN P=0
220 IF M+P>52 THEN PRINT :PRINT "ONLY 52 PERIODS PLEASE  !":GOTO 100
225 IF M=<0 THEN PRINT :PRINT "Number of past periods can't = ";M;"!":GOTO 100
230 PRINT
240 PRINT "Now enter amounts for past periods :"
250 PRINT
260 FOR J=1 TO M
270 PRINT "Period ";J;": ? ";
280 LINE INPUT;F$:F(J)=VAL(F$):IF F(J) > 0.  THEN 290
282 Y=CSRLIN:SOUND 40,20:LOCATE 25,1:PRINT "Sorry, you must enter a numeric value > 0";:LOCATE Y,1:PRINT SPC(30);:LOCATE Y,1:GOTO 270
290 PRINT :NEXT J
299 REM .. perform exponential regression
300 T=LOG(F(1)):TOTAL=0
310 V=0
320 FOR J=2 TO M
325 IF J>52 THEN J=52 GOTO 360
330 L=LOG(F(J))
340 T=T+L
350 V=V+(J-1)*L
360 NEXT J
370 A=6*(2*V/(M-1)-T)/M/(M+1)
380 A=EXP(A)-1
390 AGF=EXP(T/M-A*(M-1)/2)
399 REM .. project values for future periods
400 FOR J=M+1 TO M+P
410 F(J)=INT(AGF*(1+A)^(J-1)+0.5)
420 NEXT J
430 MIN=F(1)
440 MAX=F(1)
450 FOR J=1 TO M+P
455 IF J<=M THEN TOTAL=TOTAL+F(J)
460 IF F(J)>MAX THEN MAX=F(J)
470 IF F(J)<MIN THEN MIN=F(J)
480 NEXT J
490 S=168/(MAX+MIN) : AVG=TOTAL/M  'find graph scale factor (s), 168 is number                                      of vertical dots space left
999 REM .. results in tabular form
1000 CLS:Y=1:X=1:ROW14=0:Y1=1
1010 FOR J=1 TO M
1030 LOCATE Y,X
1040 PRINT "Period #";J;F(J);
1042 Y=Y+1
1043 IF Y=14 THEN Y=1:X=X+20:ROW14=-1
1050 NEXT J
1051 IF ROW14 THEN Y=14:X=1 ELSE X=1
1052 LOCATE Y,X:FOR J1=1 TO 79 : PRINT CHR$(240);:NEXT:LOCATE Y,33:PRINT " PROJECTED ":Y=Y+1:Y1=Y
1053 FOR J=M+1 TO M+P : IF X>79 THEN X=1
1054 LOCATE Y,X
1055 PRINT "Period #";J;" ";F(J);:Y=Y+1
1056 IF Y=23 THEN Y=Y1:X=X+20
1058 NEXT J
1060 LOCATE 23,1:PRINT "** (Growth Rate =";INT(A*10000+0.5)/100;"%";
1065 PRINT "   Average value for the past ";M;" periods = ";AVG;")";
1066 LOCATE 24,5:PRINT TITLE$;
1070 LOCATE 25,1:LINE INPUT;"Press  Return  to continue ... ";GOON$
1099 REM .. plot individual data points < scatter graph >
1100 GOSUB 2010
1110 FOR J=1 TO M+P
1120 IF J>M THEN C=1
1130 PSET (J*11+45,200-INT(S*F(J))),C
1140 NEXT J
1199 REM .. plot line graph
1200 GOSUB 2000
1202 FLAG!=0  'false
1205 IF ASC(A$)=27 THEN SCREEN 0 : GOTO 1000
1207 IF FLAG! THEN GOSUB 2010
1210 PSET (56,200-INT(S*F(1))),C
1220 FOR J=2 TO M+P
1230 IF J>M THEN C=1
1240 LINE -(J*11+45,200-INT(S*F(J))),C
1250 NEXT J
1260 REM .. plot individual data points, connect them with a line <line graph>
1262 GOSUB 2000
1264 FLAG!=0  'false
1266 IF ASC(A$)=27 THEN 1100
1268 IF FLAG! THEN GOSUB 2010
1269 IF M+P<24 THEN R1=2 ELSE R1=3   'used to set radius of circle on linegraph
1270 PSET (56,200-INT(S*F(1))),C  : CIRCLE (56,200-INT(S*F(1))),R1,1,,6.2831
1272 FOR J=2 TO M+P
1274 IF J>M THEN C=1
1276 P1=J*11+45 : P2=200-INT(S*F(J))
1278 LINE -(P1,P2),C : CIRCLE (P1,P2),R1,1,,6.2831  : PAINT (P1,P2),2,1
1280 NEXT J
1299 REM .. plot a bar graph
1300 GOSUB 2000
1303 IF ASC(A$)=27 THEN FLAG!=-1 : GOTO 1207
1310 FOR J=1 TO M+P
1320 IF J>M THEN C=1
1330 LINE (J*11+45,200)-(J*11+54,200-INT(S*F(J))),C,BF
1340 NEXT J
1399 REM .. store this data if requested
1400 A$=INPUT$(1) : IF ASC(A$)=27 THEN FLAG!=-1 : GOTO 1268
1402 SCREEN 0:WIDTH 80:CLS:LOCATE 3,1
1404 LINE INPUT;"Do you wish to review this data again ? ";YORN$:YORN1$=LEFT$(YORN$,1):IF YORN1$="y" OR YORN1$="Y" THEN 1000
1408 LOCATE 6,1:LINE INPUT;"Do you want to save this data  ? ";YORN$:YORN1$=LEFT$(YORN$,1):IF YORN1$<>"y" AND YORN1$<>"Y" AND YORN1$<>"n" AND YORN1$<>"N" THEN 1402
1409 IF YORN1$="n" OR YORN1$="N" THEN 1510
1410 LOCATE 8,1:LINE INPUT;"Please enter the file name (8 characters max) : ? ";FILENAME$:FILENAME$=LEFT$(FILENAME$,8):FILENAME$=FILENAME$+".gro"
1412 LOCATE 10,1:LINE INPUT;"Please specify a title for this data ? ";TITLE$
1420 OPEN FILENAME$ FOR OUTPUT AS #1:PRINT #1,LEFT$(TITLE$,70):PRINT #1, M;P
1430 FOR J=1 TO M+P : PRINT#1, F(J) : NEXT
1440 CLOSE#1
1510 SCREEN 0,0,0
1520 RUN
1999 REM .. select graphic screen resolution, choose colors (c), display titles             & scaled values.  Then return to perform the graph
2000 A$=INPUT$(1) : IF A$="" THEN A$="."  'dummy
2002 IF ASC(A$)=27 THEN RETURN
2010 CLS
2020 SCREEN 2,0 : IF M+P < 24 THEN SCREEN 1,0
2030 IF M+P < 24 THEN COLOR 0,7
2040 IF M+P < 24 THEN C=2 ELSE C=1
2050 PRINT "Average Growth Rate = ";INT(A*10000+0.5)/100;"%";
2070 IF M+P<24 THEN PRINT :PRINT "Amount";:PRINT " ||    <----------- Periods ---------->": PRINT " \/    1  3   6   9   12  15  18  21  24";:GOTO 2088
2080 PRINT "   Average value for past";M;"periods =";AVG:PRINT "Amount  ";TITLE$:PRINT " ||    <------------------------------- Periods ------------------------------>"
2085 PRINT " \/    1  3   6   9   12  15  18  21 23  26  29  32 34 36 38  41  44  47  50  53";
2088 IF M+P<24 THEN 2200
2100 FOR J=5 TO 25 STEP 2:LOCATE J,1:PRINT INT((168-(J/5-1)*40)/S+0.5);:NEXT:RETURN
2200 FOR J=5 TO 25 STEP 3:LOCATE J,1:PRINT INT((168-(J/5-1)*40)/S+0.5);:NEXT:RETURN
```
{% endraw %}

## LABELEPS.BAS

{% raw %}
```bas
1 '  (PC)^3 Software Submission LABELEPS authored on November 8, 1982 by
2 '
3 '  Michael Csontos, 3228 Livonia Center Road, Lima, New York 14485.
4 '
10 WIDTH 80:SCREEN 0,0,0:COLOR 7,0,0:CLS
20 PRINT:PRINT " This is an extension of a program from (PC)^3 software
30 PRINT:PRINT "library disk VOL 2.16.  The original program was designed
40 PRINT:PRINT "to printing of lables from the screen to a IDS-225 printer.
50 PRINT:PRINT " I have modified it for the EPSON printer, and extended it
60 PRINT:PRINT "so the address can be edited either before or after some
70 PRINT:PRINT "labels have been printed.  This may be useful if you want
80 PRINT:PRINT "a large number of labels from only a few addresses or other
90 PRINT:PRINT "information.
100 PRINT:PRINT " By playing with this program you will also learn some of the
110 PRINT:PRINT "strange ways the INPUT command works with the screen RAM!
120 PRINT:PRINT:PRINT "Press any key to continue."
130 X$=INKEY$:IF X$="" THEN 130
140 REM LABEL ROUTINE FOR IDS-225 PRINTER   V 7.82 BY NORMAN A. ADAMS
150 CLS:KEY OFF
160 REM Label print routine
170 FOR J = 0 TO 4:READ IN$(J):NEXT J
180 DATA Name,Address,City,State,Zip
190 FOR K = 0 TO 4:PRINT IN$(K)"? ";:LINE INPUT A$(K)
200 NEXT K
210 PRINT:PRINT "The label will appear as follows:"
220 PRINT
230 PRINT STRING$(79," ");:LOCATE ,1:PRINT TAB(2) A$(0)
240 PRINT STRING$(79," ");:LOCATE ,1:PRINT TAB(2) A$(1)
250 PRINT STRING$(79," ");:LOCATE ,1:PRINT TAB(2) A$(2);CHR$(44);SPC(1) A$(3) SPC(2) A$(4)
260 PRINT:PRINT STRING$(79," ");:LOCATE ,1:INPUT "Send label to printer? (enter y or n) ";Z$
270 IF Z$="y" OR Z$="Y" THEN 280 ELSE LOCATE 25,1:PRINT "You may reenter above inputs by pressing <End> then <enter>.";:LOCATE 1,1:RESTORE:GOTO 170
280 LIN=CSRLIN:LOCATE 25,1:PRINT STRING$(79," ");:LOCATE LIN,1
290 PRINT:PRINT STRING$(79," ");:LOCATE ,1:INPUT "Enter number of labels to be printed: ";N
300 FOR T = 1 TO N
310 LPRINT CHR$(27)"F";          'emphacized mode off
320 LPRINT CHR$(15);             'compressed on
330 LPRINT CHR$(27)"G";          'double strike
340 LPRINT CHR$(27)"W"CHR$(1);   'double width
350 LPRINT CHR$(27)"A"CHR$(18);  '18/72" lines
360 LPRINT
370 LPRINT A$(0)
380 LPRINT A$(1)
390 LPRINT A$(2)", "A$(3)"  "A$(4)
400 LPRINT
410 LPRINT
420 NEXT T
430 PRINT:PRINT STRING$(79," ");:LOCATE ,1:INPUT "More labels";Z$
440 IF Z$="y" OR Z$="Y" THEN LOCATE CSRLIN-4:GOTO 280
450 PRINT:PRINT STRING$(79," ");:LOCATE ,1:INPUT "Another label";Z$
460 IF Z$="y" OR Z$="Y" THEN LOCATE 25,1:PRINT "You may reenter above inputs by pressing <End> then <enter>.";:LOCATE 1,1:RESTORE:GOTO 170
470 KEY ON:CLS:END
480 ' SAVE"LABELeps.BAS",A
```
{% endraw %}

## LABELS.BAS

{% raw %}
```bas
10 ' labels.bas
20 '
30 ' Program to print labels until "x" number have been printed
40 '
50 ' ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
60 ' Copyright(C) - 1982 - PERSONNA Computer Association, Inc.
70 ' ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
80 '
90 ' turn off function keys
100 KEY OFF
110 '
120 ' set color to B&W, width to 40 colums
130 SCREEN 0,0,0:WIDTH 40
140 '
150 ' set printer width to 132 positions
160 WIDTH "lpt1:",132
170 '
180 DIM A$(6)
190 '
200 '
210 CLS:LOCATE 7,2:PRINT "enter up to 5 lines, 27 characters each"
220 LOCATE  9,5:PRINT "<                           >"
230 LOCATE 10,5:PRINT "<                           >"
240 LOCATE 11,5:PRINT "<                           >"
250 LOCATE 12,5:PRINT "<                           >"
260 LOCATE 13,5:PRINT "<                           >"
270 LOCATE  9,6:LINE INPUT A$(1)
280 LOCATE 10,6:LINE INPUT A$(2)
290 LOCATE 11,6:LINE INPUT A$(3)
300 LOCATE 12,6:LINE INPUT A$(4)
310 LOCATE 13,6:LINE INPUT A$(5)
320 '
330 LOCATE 16,1:INPUT "# of labels ACROSS,0 = end session";A1
340 IF A1 = 0 THEN END ELSE 350
350 LOCATE 18,1:INPUT "# of labels to PRINT, 0 = end session";A0
360 IF A0 = 0 THEN END ELSE 380
370 '
380 FORMAT$ ="\                          \"
390 FOR X6 = 1 TO A0/A1
400 FOR X5 = 1 TO 6
410 FOR X4 = 1 TO A1
420 LPRINT USING FORMAT$;A$(X5);
430 NEXT X4
440 LPRINT
450 NEXT X5
460 NEXT X6
470 STOP
```
{% endraw %}

## MATHFUNC.BAS

{% raw %}
```bas
100 CLS
110 A$=STRING$(80,205)
120 PRINT A$
130 PRINT TAB(18)"20 COMPLEX MATHEMATICAL FUNCTIONS  3010-A.BAS "
140 COLOR 23,0,0
150 PRINT :PRINT :PRINT TAB(38)"IPCO"
160 COLOR 7,0,0
170 PRINT :PRINT :PRINT TAB(29)"INTERNATIONAL PC OWNERS"
180 PRINT :PRINT :PRINT TAB(17)"p.o. box 10426, pittsburgh, pennsylvania 15234"
190 PRINT A$
200 PRINT :PRINT :PRINT :PRINT :PRINT
210 PRINT TAB(28)"PRESS ANY KEY TO CONTINUE"
220 A$=INKEY$:IF A$="" THEN 220
230 CLS
240 PRINT CHR$(12):KEY OFF
250 LOCATE 6,30:PRINT"THIS PROGRAM COMPUTES"
260 LOCATE 9,23:COLOR 15:PRINT"20 COMPLEX MATHEMATICAL FUNCTIONS"
270 LOCATE 12,27:COLOR 7
280 LOCATE 14,40:PRINT"By"
290 LOCATE 16,35:PRINT"Tony Bagshaw"
300 FOR I=1 TO 1500:NEXT I:PRINT CHR$(12):COLOR 7,0
310 LOCATE  2,3:PRINT" 1. Arithmetic mean."
320 LOCATE  3,3:PRINT" 2. Arithmetic progression."
330 LOCATE  4,3:PRINT" 3. Harmonic mean."
340 LOCATE  5,3:PRINT" 4. Harmonic numbers."
350 LOCATE  6,3:PRINT" 5. Harmonic progression."
360 LOCATE  7,3:PRINT" 6. Geometric mean."
370 LOCATE  8,3:PRINT" 7. Geometric progression."
380 LOCATE  9,3:PRINT" 8. Permutations and combinations."
390 LOCATE 10,3:PRINT" 9. Generalized mean."
400 LOCATE 11,3:PRINT"10. Mean, Standard Deviation, etc."
410 LOCATE 12,3:PRINT"11. Interactive growth pattern."
420 LOCATE 13,3:PRINT"12. Straight line depreciation."
430 LOCATE 14,3:PRINT"13. Logarithms of any base."
440 LOCATE 15,3:PRINT"14. Linear interpolation."
450 LOCATE 16,3:PRINT"15. Prime tester."
460 LOCATE 17,3:PRINT"16. Annular sections."
470 LOCATE 18,3:PRINT"17. Chi-Square evaluation."
480 LOCATE 19,3:PRINT"18. Factorials."
490 LOCATE 20,3:PRINT"19. Fibonacci numbers."
500 LOCATE 21,3:PRINT"20. Gamma functions with factorial."
510 GOSUB 4240
520 PRINT CHR$(7):LOCATE 24,26:COLOR 31:INPUT" KINDLY ENTER YOUR CHOICE ";A$
530 A=VAL(A$):COLOR 7:GOTO 4060
540 GOSUB 4070
550 X=0:N=0
560 LOCATE 2,32:PRINT" THE ARITHMETIC MEAN"
570 LOCATE 6,30:COLOR 1:INPUT"ENTER SAMPLING NUMBER";W
580 N=N+1:X=X+W:A=X/N
590 LOCATE 9,27:COLOR 0,7:PRINT"N...........................";N
600 LOCATE 13,27:COLOR 0,7:PRINT"SAMPLE......................";W
610 LOCATE 17,27:COLOR 0,7:PRINT"CURRENT MEAN................";A
620 COLOR 7
630 GOSUB 4090
640 GOTO 560
650 GOSUB 4070
660 LOCATE 2,10:PRINT" THE HARMONIC MEAN"
670 Z=0:N=0:B=6
680 LOCATE 23,28:COLOR 16,7:PRINT" ENTER YOUR SAMPLE NUMBER "
690 LOCATE 23,55:COLOR 7:INPUT"* Zero to quit";X
700 S$=STRING$(79,CHR$(32)):LOCATE 23,1:PRINT S$
710 IF X=0 THEN GOTO 810
720 N=N+1:Z=Z+(1/X):H=N/Z
730 IF N > 1 THEN B=B+1:GOTO 770
740 LOCATE 5,5:PRINT"N"
750 LOCATE 5,10:PRINT"SAMPLE"
760 LOCATE 5,22:PRINT"CURRENT MEAN"
770 IF B=23 THEN LOCATE 24:PRINT
780 IF B >= 23 THEN B=22
790 LOCATE B:COLOR 15:PRINT TAB(4);N;TAB(10);X;TAB(23);H:COLOR 7
800 GOTO 680
810 GOSUB 4090
820 GOTO 660
830 GOSUB 4070
840 LOCATE 5,9:COLOR 1:PRINT"ARITHMETIC PROGRESSION":COLOR 7
850 LOCATE 5,34:PRINT"   FORMULA - A,A+D,A+2D,...A+((N-1)D)"
860 LOCATE 7,5:PRINT"First term =";:INPUT A
870 LOCATE 9,5:PRINT"Common difference =";:INPUT D
880 LOCATE 11,5:PRINT"Number of terms = ";:INPUT N
890 LOCATE 13,5:PRINT"Type in your selection":H=9
900 LOCATE 15,9:PRINT"-1- TABULATION"
910 LOCATE 17,9:PRINT"-2- TOTAL  SUM"
920 LOCATE 19,9:INPUT"Which would you like";C$
930 IF C$="2" THEN LOCATE 17,24:COLOR 15:PRINT CHR$(174):GOTO 970
940 LOCATE 15,24:COLOR 15:PRINT CHR$(174):COLOR 7
950 LOCATE 7,47:PRINT"ARITHMETIC PROGRESSION"
960 LOCATE 9,45:COLOR 9:PRINT "TERM NUMBER":LOCATE 9,60:PRINT"TERM VALUE"
970 COLOR 7:J=0:Z=0:FOR I=0 TO N-1:K=I+1:L=A+(I*D):J=J+L:Z=Z+1:X=9+Z:H=H+1
980 IF C$="1" THEN 1010
990 GOTO 1030
1000 IF X=>25 THEN X=25
1010 IF H>23 THEN H=23:PRINT
1020 LOCATE H,49:PRINT K:LOCATE H,63:PRINT L
1030 NEXT I:PRINT
1040 LOCATE 21,9:PRINT"SUM = ";J
1050 REM LOCATE 21,5:PRINT"WOULD YOU LIKE ANOTHER TRY";:INPUT B$:IF B$="Y" THEN 3218
1060 REM IF B$="N" THEN GOSUB 61000
1070 PRINT:GOSUB 4090:PRINT CHR$(12):GOTO 860
1080 GOSUB 4070:COLOR 9
1090 LOCATE 1,8:PRINT"HARMONIC NUMBERS":COLOR 7
1100 LOCATE 1,35:PRINT"FORMULA - 1,1+1/2,1+1/2+1/3,1+1/2+1/3+1/4,...."
1110 LOCATE 3,31:INPUT"MAXIMUM TERM NUMBER";N
1120 K=0:D=0:J=0:T=1:L=5
1130 FOR I=1 TO N:K=I:C=1/K:D=D+C:J=J+1
1140 IF J >= 2 THEN GOTO 1160
1150 LOCATE L,T:PRINT"TERM NUMBER:-";K:LOCATE L+1,1:T=13:GOTO 1190
1160 IF L=>23 THEN L=23
1170 T=T+11:LOCATE L,T:PRINT K:LOCATE L,T         'move 14 spaces to the right.
1180 IF J >= 2 THEN GOTO 1200
1190 COLOR 15:PRINT"TERM  VALUE:-";D:COLOR 7:GOTO 1210
1200 L=L+1:LOCATE L,T:COLOR 15:PRINT D:COLOR 7:L=L-1   '14 spaces to the right.
1210 IF J = 6 THEN L=L+3:J=0:T=1:GOTO 1220        '# was 4 & move down 2 lines.
1220 IF L>21 THEN L=20:PRINT:PRINT:PRINT:PRINT:PRINT
1230 NEXT I
1240 PRINT:PRINT
1250 GOSUB 4090
1260 GOTO 1080
1270 GOSUB 4070
1280 PRINT TAB(28)"A SERIES OF HARMONIC PROGRESSIONS":PRINT:PRINT
1290 INPUT"VALUE OF A =";A:PRINT
1300 INPUT"VALUE OF B =";B:PRINT
1310 INPUT"DIFFERENCE =";D:PRINT
1320 INPUT"NUMBER OF TERMS =";N:PRINT
1330 INPUT"FOR TABLE TYPE 1, IF NOT TYPE 0";C
1340 IF C=1 THEN 1360
1350 GOTO 1380
1360 PRINT"HARMONIC PROGRESSION"
1370 PRINT"TERM NUMBER","TERM VALUE":PRINT
1380 J=0:FOR I=0 TO N-1:K=I+1:L=A/(B+(I*D)):J=J+L
1390 IF C=1 THEN 1410
1400 GOTO 1420
1410 PRINT K,L
1420 NEXT I
1430 PRINT TAB(40)"SUM =";J:PRINT
1440 GOSUB 4090:PRINT:GOTO 1290
1450 GOSUB 4070
1460 PRINT TAB(33)" THE GEOMETRIC MEAN"
1470 PRINT:PRINT
1480 Y=1:N=0
1490 INPUT"SAMPLE NUMBER (Zero to Quit) =";W
1500 IF W=0 THEN 1540
1510 N=N+1:Y=Y*W:G=Y^(1/N)
1520 PRINT"NUMBER OF SAMPLES =";N,"CURRENT SAMPLE =";W,"CURRENT MEAN =";G
1530 GOTO 1490:PRINT
1540 GOSUB 4090:PRINT:GOTO 1480
1550 GOSUB 4070
1560 PRINT TAB(15)"THE VALUES AND THEIR SUMS OF A GEOMETRIC PROGRESSION":PRINT
1570 PRINT TAB(30)"FORMULA - A,AR,AR^....,AR^n-1"
1580 PRINT:PRINT
1590 INPUT"FIRST TERM =";A
1600 INPUT"RATIO OF TERMS =";R
1610 INPUT"NUMBER OF TERMS =";N:PRINT
1620 INPUT"                   FOR TABLE TYPE 1, IF NOT TYPE 0";C:PRINT
1630 IF C=1 THEN 1650
1640 GOTO 1670
1650 PRINT"GEOMETRIC PROGRESSION"
1660 PRINT"TERM NUMBER","TERM VALUE"
1670 J=0:FOR I=0 TO N-1
1680 K=I+1:L=A*(R^I):J=J+L
1690 IF C=0 THEN 1710
1700 PRINT K,L
1710 NEXT I
1720 PRINT TAB(40)"SUM =";J:PRINT
1730 GOSUB 4090:PRINT:GOTO 1590
1740 GOSUB 4070
1750 PRINT TAB(27)"PERMUTATIONS AND COMBINATIONS":PRINT
1760 PRINT TAB(10)"WHERE N = NUMBER OF ITEMS & R = SIZE OF GROUP SELECTED"
1770 PRINT:PRINT
1780 INPUT"ENTER N,R";N,R
1790 IF N<R THEN 1860
1800 IF R<0 THEN 1870
1810 T=N:GOSUB 1880:A=T:T=N-R:GOSUB 1880
1820 B=T:P=A/B:T=R:GOSUB 1880:C=A/(T*B)
1830 PRINT"PERMUTATIONS =";P
1840 PRINT"COMBINATIONS =";C:PRINT
1850 GOSUB 4090:PRINT:GOTO 1780
1860 PRINT"N < R, INVALID INPUT":GOTO 1780
1870 PRINT"R < 0, INVALID INPUT":GOTO 1780
1880 IF T=0 THEN 1910
1890 IF T=1 THEN 1910
1900 J=1:FOR I=2 TO T:J=J*I:NEXT I:T=J:GOTO 1920
1910 T=1
1920 RETURN
1930 GOSUB 4070
1940 PRINT TAB(32)"THE GENERALIZED MEAN":PRINT
1950 J=0:N=0
1960 INPUT"INPUT for  T  =";T
1970 INPUT"INPUT your SAMPLE";L
1980 IF L=0 THEN 2000
1990 J=J+(L^T):N=N+1
2000 G=(J/N)^(1/T)
2010 PRINT"GENERALIZED MEAN"
2020 PRINT"M(T) = ";G,"WHERE T =";T:PRINT
2030 PRINT:PRINT"Type 1 to continue, 0 to stop"
2040 INPUT L
2050 IF L=1 THEN 1950
2060 GOSUB 4090:PRINT:GOTO 1950
2070 GOSUB 4070
2080 PRINT TAB(15)"MEAN,STANDARD DEVIATION & STANDARD ERROR FOR GROUPED DATA."
2090 A=0:B=0:C=0:D=0:PRINT
2100 INPUT"ENTER SAMPLE VALUE AND FREQUENCY L,F";L,F:PRINT
2110 IF F=<0 THEN 2140
2120 A=A+1:B=B+F:G=L*F:C=C+G:E=(L^2)*F:D=D+E
2130 GOTO 2100
2140 H=C/B:I=SQR(D-(B*(H^2))):J=I/SQR(B):PRINT
2150 PRINT"NUMBER OF SAMPLES ENTERED =";A
2160 PRINT"MEAN =";H
2170 PRINT"STANDARD DEVIATION =";I
2180 PRINT "STANDARD ERROR =";J:PRINT
2190 GOSUB 4090:PRINT:GOTO 2090
2200 GOSUB 4070
2210 PRINT" INTERACTIVE GROWTH PATTERN":PRINT
2220 PRINT:PRINT
2230 PRINT TAB(10)"  This program computes a growth pattern"
2240 PRINT TAB(10)" between two quantities called X and Y, where the"
2250 PRINT TAB(10)" existence of Y depends on the destruction  of an X"
2260 PRINT TAB(10)" but to be just, X can propagate.":PRINT:PRINT
2270 CLEAR
2280 INPUT"NUMBER OF DESTROYERS (Y)";Y:PRINT
2290 INPUT"NUMBER OF CREATORS (X)";X:PRINT
2300 INPUT"PROPAGATION RATE OF X";Z:PRINT
2310 INPUT"CHANCE MEETING BETWEEN X AND Y";A:PRINT
2320 INPUT"TIME BETWEEN SAMPLES";H:PRINT
2330 INPUT"MAXIMUM GENERATIONS";K:PRINT:PRINT
2340 J=0:PRINT"INTERACTIVE GROWTH PATTERN":PRINT
2350 PRINT"CREATOR","DESTROYER"
2360 IF J=K THEN 2530
2370 J=J+1:B=A*(X*Y)
2380 C=((B-Y)*H)+Y
2390 IF C < 0 THEN 2480
2400 LET Y=C
2410 D=(((X*Z)-B)*H)+X
2420 IF D < 0 THEN 2490
2430 LET X=D
2440 M=INT(X):N=INT(Y):PRINT M,N:IF M=0 THEN 2460
2450 GOTO 2360
2460 IF N=0 THEN 2500
2470 GOTO 2360
2480 Y=0:GOTO 2410
2490 X=0:GOTO 2440
2500 PRINT"ALL GROWTH ENDED"
2510 PRINT"NUMBER OF GENERATIONS =";J:PRINT
2520 GOTO 2590
2530 PRINT"MAXIMUM NUMBER OF GENERATIONS REACHED":PRINT
2540 INPUT"FOR FURTHER GENERATIONS TYPE 1,IF NOT 0";W
2550 IF W=1 THEN 2570
2560 PRINT:GOTO 2590
2570 INPUT"INPUT MAXIMUM GENERATIONS";K
2580 GOTO 2360
2590 GOSUB 4090:PRINT:GOTO 2230
2600 GOSUB 4070
2610 PRINT TAB(19)"VALUE DEPRECIATION BY THE STRAIGHT LINE METHOD"
2620 PRINT
2630 INPUT"ORIGINAL VALUE = ";A
2640 INPUT"LIFETIME IN YEARS = ";B
2650 C=A/B:PRINT
2660 PRINT"YEARLY DEPRECIATION = ";C:PRINT
2670 PRINT"YEAR ","VALUE"
2680 PRINT"                              ","                                  "
2690 X=0
2700 X=X+1:A=A-C
2710 IF A<=0 THEN 2730
2720 GOTO 2740
2730 A=0
2740 PRINT X,A
2750 IF X<B THEN 2700
2760 PRINT
2770 GOSUB 4090:PRINT:GOTO 2630
2780 GOSUB 4070
2790 PRINT TAB(12)"THE LOG OF ANY POSITIVE NUMBER ^N^ TO ANY POSITIVE BASE ^Y^"
2800 PRINT:INPUT"LOG NUMBER 'N'";N
2810 PRINT
2820 INPUT"A POSITIVE BASE 'Y'";Y
2830 J=LOG(N)/LOG(Y)
2840 PRINT:PRINT"LOG ";N;" = ";J
2850 PRINT:PRINT
2860 GOSUB 4090:PRINT:GOTO 2790
2870 GOSUB 4070
2880 PRINT TAB(33)"LINEAR INTERPOLATION":PRINT:PRINT:PRINT
2890 INPUT"KNOWN VALUES OF X(X1,X2) =";X1,X2
2900 PRINT
2910 INPUT"KNOWN VALUES OF Y(F(X1),F(X2)) =";Y1,Y2
2920 PRINT
2930 INPUT"INTERPOLATE F(X) AT X =";X3
2940 G=((X2-X3)*Y1)+((X3-X1)*Y2):F=G/(X2-X1)
2950 PRINT:PRINT"INTERPOLATED F(X) = ";F:PRINT
2960 GOSUB 4090:PRINT:GOTO 2890
2970 GOSUB 4070
2980 PRINT TAB(15)"THIS IS A PROGRAM THAT TESTS IF A NUMBER IS PRIME."
2990 PRINT:INPUT"ENTER THE TEST NUMBER";N:PRINT
3000 IF N<4 THEN 3080
3010 I=0:T=2
3020 J=INT(N/T):K=J*T
3030 IF N=K THEN 3100
3040 I=I+1:L=T*T
3050 IF L>N THEN 3080
3060 T=(I*2)+1
3070 GOTO 3020
3080 PRINT N;"  IS A PRIME NUMBER"
3090 PRINT:PRINT:GOTO 2990
3100 PRINT N;"  IS NOT A PRIME NUMBER ";T;"  IS THE SMALLEST FACTOR"
3110 PRINT:GOTO 2990
3120 GOSUB 4090:PRINT:GOTO 2990
3130 GOSUB 4070
3140 PRINT TAB(16)"THE VARIOUS PARAMETERS CONNECTED WITH AN ANNULAR SECTION"
3150 PRINT:INPUT"INSIDE DIAMETER (D1)  =";D1:PRINT
3160 INPUT"OUTSIDE DIAMETER (D2)  =";D2:PRINT
3170 P=3.14159
3180 I=(P*((D2^4)-(D1^4)))/64:J=I*2
3190 A=(P*((D2^2)-(D1^2)))/4
3200 PRINT"MOMENT OF INERTIA = ";I:PRINT
3210 PRINT"POLAR MOMENT OF INERTIA = ";J:PRINT
3220 PRINT"AREA OF SECTION = ";A:PRINT
3230 GOSUB 4090:PRINT:GOTO 3150
3240 GOSUB 4070
3250 PRINT"CHI-SQUARE EVALUATION ON THE 'OBSERVED' TO 'EXPECTED' FREQUENCIES"
3260 PRINT"(To terminate the evaluation enter a 0 for last expected frequency.)"
3270 PRINT
3280 CLEAR
3290 J=0
3300 INPUT"OBSERVED FREQUENCIES ";D:PRINT
3310 INPUT"EXPECTED FREQUENCIES ";E:PRINT
3320 IF E=0 THEN 3350
3330 K=((D-E)^2)/E:J=J+K
3340 GOTO 3300
3350 PRINT:PRINT"CHI-SQUARE = ";J:PRINT:PRINT
3360 GOSUB 4090:PRINT:GOTO 3280
3370 GOSUB 4070
3380 PRINT"              THE FACTORIALS OF (X) BY ITERATIVE MULTIPLICATIONS"
3390 PRINT
3400 INPUT"INPUT VALUE(X)";Y:PRINT
3410 Z=1:FOR I=1 TO Y:Z=Z*I:NEXT I
3420 PRINT TAB(34)"X = ";Y,"X! = ";Z
3430 GOSUB 4090:PRINT:GOTO 3400
3440 GOSUB 4070
3450 PRINT"A TABLE OF  FIBONACCI NUMBERS"
3460 PRINT:PRINT
3470 INPUT"ENTER FIRST TERM";A:PRINT
3480 INPUT"ENTER SECOND TERM";B:PRINT
3490 INPUT"MAXIMUM NUMBER OF TERMS";N:PRINT
3500 PRINT"TABLE OF FIBONACCI NUMBERS"
3510 PRINT"TERM #","FIBONACCI NUMBER":PRINT
3520 K=1:PRINT K,A:K=2:PRINT K,B
3530 K=K+1:Q=A+B:PRINT K,Q:A=B:B=Q
3540 IF K=>N THEN 3560
3550 GOTO 3530
3560 PRINT:PRINT"MAXIMUM NUMBER OF TERMS REACHED":PRINT
3570 GOSUB 4090:PRINT:GOTO 3470
3580 GOSUB 4070
3590 LOCATE 5,18:PRINT"THIS PROGRAM COMPUTES BOTH THE GAMMA FUNCTION AND THE"
3600 LOCATE 7,19:PRINT"GENERALIZED FACTORIAL VIA POLYNOMIAL APPROXIMATION."
3610 A=.57717:B=.9882099:C=.89706:D=.91821:E=.7567:F=.4822
3620 G=.19353:H=.03587
3630 LOCATE 9,24:PRINT"TYPE -G- FOR THE GAMMA FUNCTION"
3640 LOCATE 10,24:PRINT"TYPE -F- FOR THE GENERALIZED FACTORIAL":A$=INPUT$(1)
3650 IF A$="G" THEN LOCATE 9,22:PRINT"»":GOTO 3710
3660 IF A$="F" THEN LOCATE 10,22:PRINT"»":GOTO 3800
3670 'IF A$="G" THEN 5426
3680 'IF A$="F" THEN 5446
3690 PRINT "INVALID RESPONSE TRY AGAIN !!!!!$%&#??"
3700 GOTO 3630
3710 LOCATE 12,32:INPUT"ENTER VALUE OF (X)";X1
3720 K=X1:K=K-1
3730 IF K>=0 THEN 3760
3740 PRINT"(X) MUST BE EQUAL TO OR GREATER THAN '1'":PRINT
3750 GOTO 3710
3760 GOSUB 3920
3770 IF (X1-1)=INT(X1-1) THEN 3900
3780 GOSUB 4000
3790 GOTO 3900
3800 LOCATE 12,32:INPUT"ENTER THE VALUE OF (X)";X1:PRINT
3810 K=X1
3820 IF K>=0 THEN 3850
3830 PRINT"(X) MUST BE GREATER THAN OR EQUAL TO '0'":PRINT
3840 GOTO 3800
3850 GOSUB 3920
3860 IF X1=INT(X1) THEN 3880
3870 GOSUB 4000
3880 PRINT                                             X1;" = ";K
3890 GOTO 3910
3900 PRINT:PRINT"                                GAMMA (";X1;") = ";K
3910 GOTO 4050
3920 J=1
3930 J=J*K
3940 K=K-1
3950 IF K<1 THEN 3970
3960 GOTO 3930
3970 L=K
3980 K=J
3990 RETURN
4000 A1=1+(A*L)+(B*(L^2))+(C*(L^3))
4010 A1=A1+(D*(L^4))+(E*(L^5))+(F*(L^6))
4020 A1=A1+(G*(L^7))+(H*(L^8))
4030 K=A1*K
4040 RETURN
4050 GOSUB 4090:PRINT:GOTO 3630
4060  ON  A  GOTO  540,830,650,1080,1270,1450,1550,1740,1930,2070,2200,2600,2780,2870,2970,3130,3240,3370,3440,3580,5500,5600,5700,5800,6000,6100,6200,6300,6400,6500,6600,6700,7000,7100,7200,7600,7700,7800,7900,7950
4070 PRINT CHR$(12):LOCATE 4,1:Z$=STRING$(80,CHR$(205)):PRINT Z$
4080 PRINT:RETURN
4090 FOR I=79 TO 2 STEP-1:LOCATE 23,I:PRINT"▒":NEXT I
4100 B$=INKEY$:IF B$="Y"THEN PRINT CHR$(12):RETURN
4110 IF B$="N" THEN GOTO 4230
4120 FOR I=79 TO 2 STEP-1:LOCATE 23,I:PRINT"▓":NEXT I
4130 B$=INKEY$:IF B$="Y" THEN PRINT CHR$(12):RETURN
4140 IF B$="N" THEN GOTO 4230
4150 FOR I=79 TO 2 STEP-1:LOCATE 23,I:PRINT"█":NEXT I
4160 B$=INKEY$:IF B$="Y" THEN PRINT CHR$(12):RETURN
4170 IF B$="N" THEN GOTO 4230
4180 LOCATE 23,2:COLOR 0,7:PRINT" WOULD YOU LIKE ANOTHER TRY ? ":COLOR 7
4190 FOR J=1 TO 800:NEXT J:COLOR 7
4200 IF B$="Y" THEN PRINT CHR$(12):RETURN
4210 IF B$="N" THEN GOTO 4230
4220 IF B$= "" THEN 4090
4230 PRINT CHR$(12):GOTO 310
4240 COLOR 15:LOCATE 1,2:PRINT"╔":LOCATE 1,3:FOR I=1 TO 35:PRINT"═";:NEXT I:LOCATE 1,38:PRINT"╗":FOR I=2 TO 21:LOCATE I,38:PRINT"║":NEXT I:LOCATE 22,38:PRINT"╝":FOR I=37 TO 3 STEP-1:LOCATE 22,I:PRINT"═":NEXT I:LOCATE 22,2:PRINT"╚"
4250 FOR I=21 TO 2 STEP-1:LOCATE I,2:PRINT"║":NEXT I
4260 REM LOCATE 1,42:PRINT"╔":LOCATE 1,43:FOR I=1 TO 36:PRINT"═";:NEXT I:LOCATE 1,79:PRINT"╗":FOR I=2 TO 21:LOCATE I,79:PRINT"║":NEXT I:LOCATE 22,79:PRINT"╝":FOR I=78 TO 43 STEP-1:LOCATE 22,I:PRINT"═":NEXT I:LOCATE 22,42:PRINT"╚"
4270 REM I=21 TO 2 STEP-1:LOCATE I,42:PRINT"║":NEXT I
4280 RETURN
4290 LOCATE 24,22:PRINT"When ready » PRESS SPACE BAR or PROGRAM NUMBER"
4300 LOCATE 24,70
4310 COLOR 0,2
4320 A$=INPUT$(1):IF A$=" " THEN 61400
4330 A=VAL(A$):PRINT CHR$(12):RETURN
4340 C=VAL(C$):PRINT CHR$(12)
4350 ON C GOTO 1740,1840,1940,2040,2140
```
{% endraw %}

## NONLIN.BAS

{% raw %}
```bas
1000 '*************************************************************************
1010 '* PROGRAM NONLIN  version 3.0  5/1/82                                   *
1020 '*                                                                       *
1030 '* By:       Dave Whitman                                                *
1040 '*                                                                       *
1050 '*           Box 383 Baker Lab                                           *
1060 '*           Cornell U.                                                  *
1070 '*           Ithaca, NY  14853                                           *
1080 '*           (607) 256-6479                                              *
1090 '*                                                                       *
1100 '* Performs non-linear least squares analysis to determine parameters    *
1110 '* to fit any function to observed data.                                 *
1120 '*                                                                       *
1130 '* Inspired by a FORTRAN program by C.F. Wilcox, which was in turn       *
1140 '* based on "Rigorous Least Squares Adjustment"; Wentworth, W. E.        *
1150 '* J . Chem Ed. 42, 96 (1965).                                           *
1160 '*                                                                       *
1170 '*************************************************************************
1180 '* The program requires two input files to work:                         *
1190 '*                                                                       *
1200 '*    The first file contains BASIC code which is specific to the        *
1210 '*    paticular function being fit.  This code will be automatically     *
1220 '*    merged into the program at run time.  For the merge to work        *
1230 '*    properly, this file MUST BE SAVED IN ASCII FORMAT.  Otherwise, a   *
1240 '*    "Bad File Mode" error occurs.                                      *
1250 '*    To save in ascii mode, use the "a" option in your save command:    *
1260 '*    Example:  SAVE"function",a                                         *
1270 '*                                                                       *
1280 '*    When nonlin prompts: FUNCTION?, input the name of this file.       *
1290 '*                                                                       *
1300 '*    Code required:                                                     *
1310 '*       A line 10050 which sets the variables nvar [# of independant    *
1320 '*       variables] and np [# of parameters]. Example:                   *
1330 '*                                                                       *
1340 '*   10050 nvar = 1: np = 3                                              *
1350 '*                                                                       *
1360 '*       A subroutine which fills the array fcalc(nobs) with values of   *
1370 '*       the function, given observed values of the variables in array   *
1380 '*       vobs(nobs,nvar) and current guesses at the parameters in p(np). *
1390 '*       The subroutine should start at line 11000 and end at or before  *
1400 '*       line 11999. Example: (fitting data to a parabola)               *
1410 '*                                                                       *
1420 '*   11000 FOR I = 1 to NOBS                                             *
1430 '*   11010    fcalc(i) = p(1) * vobs(i,1)^2 + p(2) * vobs(i,1) + p(3)    *
1440 '*   11020    NEXT I                                                     *
1450 '*   11030 RETURN                                                        *
1460 '*                                                                       *
1470 '*                                                                       *
1480 '*    Optional code:                                                     *
1490 '*       Before stopping, nonlin makes a subroutine call to line 20000.  *
1500 '*       Normally, this subroutine consists of a stub, containing only   *
1510 '*       a return statement. If any final processing using the least     *
1520 '*       squares parameter set in p(np) or the variance/covariance       *
1530 '*       matrix in b(np,np) is desired, supply an appropriate            *
1540 '*       subroutine starting at line 20000. The only restriction on the  *
1550 '*       length of this subroutine is the available memory.              *
1560 '*                                                                       *
1570 '* The second file contains the observed data to be fit.                 *
1580 '* When nonlin prompts: INPUT FILE?, enter the name of this file.        *
1590 '*                                                                       *
1600 '*    Required data:                                                     *
1610 '*       nobs: the number of observations being fit                      *
1620 '*       numit: the # of iterations of the fitting process to be         *
1630 '*              performed. [ 5-10 is generally sufficient ]              *
1640 '*       iuserwt: a flag. If iuserwt = 1, nonlin expects all observed    *
1650 '*                function and variable values to be followed by a       *
1660 '*                weighting factor. If iuserwt = 0, nonlin automatically *
1670 '*                sets all initial weights to 1.                         *
1680 '*      internalwt: a flag. If internalwt = 1, nonlin estimates          *
1690 '*                weighting factors for each function value based on     *
1700 '*                the slope of the function.  If internalwt = 0, no      *
1710 '*                estimate.  Use with care, internal weighting often     *
1720 '*                causes divergance. Start with internalwt = 0.          *
1730 '*                                                                       *
1740 '*      fract: The fraction of the calculated change to apply to each    *
1750 '*             of the parameters.  Use to restrict changes when function *
1760 '*             trys to diverge. Normally equal to 1.                     *
1770 '*                                                                       *
1780 '*      Repeat the following lines for each observation:                 *
1790 '*           fobs(i): observed function value                            *
1800 '*           if iuserwt = 1 include obswt(i): function weight, point i   *
1810 '*           vobs(i,1): observed value, variable 1.                      *
1820 '*           if iuserwt = 1 include varwt(i,1): variable weight          *
1830 '*           vobs(i,2): observed value, variable 2.                      *
1840 '*           if iuserwt = 1 include varwt(i,2): variable weight          *
1850 '*           ...vobs(i,nvar): observed value, variable nvar              *
1860 '*              if iuserwt = 1 include varwt(i,nvar): variable weight    *
1870 '*                                                                       *
1880 '*      Repeat the following lines for each parameter:                   *
1890 '*           pname$(i): the name of the parameter (length <= 8)          *
1900 '*           p(i): initial guess at the parameter's value                *
1910 '*                                                                       *
1911 '*************************************************************************
1912 '* Note to IPCO users:                                                   *
1913 '* Included on this disk are the following files for testing and         *
1914 '* demonstration purposes:                                               *
1915 '*     DATA       set of test data to be fit to the following functions: *
1916 '*     FUNC1.BAS  gaussian function                                      *
1917 '*     FUNC2.BAS  lorentzian function                                    *
1920 '*************************************************************************
1921 '*                                                                       *
1922 '* Note: ocasionally the program diverges, i.e. the fit of the calculated*
1923 '* function gets worse each iteration, rather than better. If this       *
1924 '* occurs, it indicates one of two things:                               *
1925 '*    1. Your initial guesses for the parameters were too far off.       *
1926 '*       Make a better guess, and try again.                             *
1927 '*    2. The function you are using really can't adequately describe     *
1928 '*       your data.                                                      *
1929 '*************************************************************************
1930 '* DECLARATIONS:                                                         *
1940 '* NOBS: INT                                      NUMBER OF OBSERVATIONS *
1950 '* NVAR: INT                                NUMBER OF VARIABLES OBSERVED *
1960 '* FOBS: ARRAY(1..NOBS) OF DOUBLE               OBSERVED FUNCTION VALUES *
1970 '* FCALC:ARRAY(1..NOBS) OF DBL                CALCULATED FUNCTION VALUES *
1980 '* FTEMP:ARRAY(1..NOBS) OF DBL            HOLDS A SET OF FUNCTION VALUES *
1990 '*                                         DURING DERIVATIVE CALCULATION *
2000 '* VOBS: ARRAY(1..NOBS,1..NVAR) OF DBL          OBSERVED VARIABLE VALUES *
2010 '* NP:   INT                                        NUMBER OF PARAMETERS *
2020 '* P:    ARRAY(1..NP) OF DBL                            PARAMETER VALUES *
2030 '* PNAME$: ARRAY(1..NP) OF STRING                        PARAMETER NAMES *
2040 '* DFDP:ARRAY(1..NOBS,1..NP) OF DBL   PARTIALS OF FUNC W.R.T. PARAMETERS *
2050 '* DFDV:ARRAY(1..NOBS,1..NVAR) OF DBL     "     "   "     "   VARIABLES  *
2060 '* OBSWT:ARRAY(1..NOBS) OF DBL             OBSERVATION WEIGHTING FACTORS *
2070 '* VARWT:ARRAY(1..NOBS,1..NVAR) OF DBL        VARIABLE WEIGHTING FACTORS *
2080 '* DLAMBDA:ARRAY(1..NOBS) OF DBL                  LAGRANGIAN MULTIPLIERS *
2090 '* B:   ARRAY(1..NP,1..NP) OF DBL        COEFFICIENTS IN MATRIX EQUATION *
2100 '* RHS: ARRAY(1..NP) OF DBL           RIGHT HAND SIDE OF MATRIX EQUATION *
2110 '*                     NOTE: AFTER SOLUTION OF EQN, RHS HOLDS CHANGES TO *
2120 '*                               PARAMETERS, AND B HOLDS ITS OWN INVERSE *
2130 '* FRACT: DBL       FRACTION OF CALCULATED CHANGE TO APPLY TO PARAMETERS *
2140 '* DEVSQ: DBL       SUM OF WEIGHTED SQUARED DEVIATIONS OF CALC. FUNCTION *
2150 '* DEVSQ1:DBL                                DEVSQ VALUE, LAST ITERATION *
2160 '* DEVSQ2:DBL                           DEVSQ VALUE, TWO ITERATIONS BACK *
2170 '* IUSERWT: INT            IF IUSERWT=1, USER SUPPLIES WEIGHTING FACTORS *
2180 '*                         IF IUSERWT=0, NONLIN ASSUMES ALL WEIGHTS = 1  *
2190 '* INTERNALWT: INT             IF INTERNALWT=1 NONLIN CALCULATES WEIGHTS *
2200 '*                                 IF INTERNALWT=0 NO WEIGHT CALCULATION *
2210 '*************************************************************************
10000 OPTION BASE 1
10010 DEFINT I-N
10020 DEFDBL A-H,O-Z
10025 ON ERROR GOTO 65000
10030 CLS: LOCATE 10,30: INPUT "FUNCTION?  ",FUNCTION$: COMMON FUNCTION$
10040 CHAIN MERGE FUNCTION$,10050   'bring in function specific lines
10045 ON ERROR GOTO 0
10050 NVAR = 1: NP = 3
10060 GOSUB 18000   'initialization routine
10070 '
10080 FOR IT = 1 TO NUMIT
10090    'print progress report on screen
10100        GOSUB 12000   'subroutine iteration report
10110    'Test for non-convergance, exit if so
10120        GOSUB 13000      'subroutine converge
10130        IF NONCONVERGENCE = 1                                                              THEN PRINT"nonconvergence termination" : GOTO 10300
10140    'Calculate lagrangian multipliers
10150        GOSUB 13500    'subroutine lambda
10160    'If internal weighting desired, calculate new obswts
10170        IF INTERNALWT = 1                                                                  THEN GOSUB 14500
10180    'Set up matrix equation to get parameter changes
10190        GOSUB 15000  'SUBROUTINE SETUP
10200    'Solve equation for parameter changes
10210        GOSUB 16000  'subroutine solve
10220    'Apply changes
10230        GOSUB 17000  'subroutine deltap
10240    NEXT IT
10250 '
10260 'print final report
10270    GOSUB 19000      'subroutine report
10280 'Do any final processing (user supplied)
10290    GOSUB 20000
10300 END
11000 '********************************************************************
11010 '* SUBROUTINE LORENTZIAN                                            *
11020 '*                                                                  *
11030 '* Fills the array fcalc(nobs) with values along a lorentzian of    *
11040 '* the form:                                                        *
11050 '*                                                                  *
11060 '* lor(pos) = H / [(1/W)^2 * (pos - P)^2 + 1]                       *
11070 '*                                                                  *
11080 '* where H, W, and P are parameters to be fit.                      *
11090 '* Assignments: H = p(1)  W = p(2) P = p(3)    pos = vobs(i,1)      *
11100 '********************************************************************
11110 '
11130 WSQ2 = 1.# / (P(2) * P(2))
11160 FOR I = 1 TO NOBS
11170    FCALC(I) =  P(1) / (WSQ2 * (VOBS(I,1) - P(3))^2 + 1.#)
11230    NEXT I
11240 RETURN
12000 '***********************************************************************
12010 '* SUBROUTINE ITERTATION REPORT                                        *
12020 '*                                                                     *
12030 '* Prints out current parameters, function values, and deviation       *
12040 '***********************************************************************
12050 GOSUB 12200                   'print parameters
12060 GOSUB 11000                   'get function values in fcalc
12070 GOSUB 12500                   'print function values and deviation
12080 RETURN
12200 '*********************************************************************
12210 '* SUBROUTINE PARAMREPORT( IT, NP, P)                                *
12220 '* 2/7/82 by Dave Whitman                                            *
12230 '* Prints out current parameter values                               *
12240 '*********************************************************************
12250 CLS : LOCATE 4,4 : BEEP  'Wake up,Dave!
12260 PRINT "Parameters, Iteration";IT : PRINT
12270 LOCATE 7,2
12280 COLOR 1 : PRINT "  Name  │  Value   │ Change "; : COLOR 7 : PRINT
12290 FOR I = 1 TO NP
12300    LOCATE I+7,2
12310    PRINT USING  "\      \\\####.##\ \+##.##"; PNAME$(I);"│ "; P(I);                             "  │ ";-1 * RHS(I)
12320    NEXT I
12330 PRINT
12340 RETURN
12500 '***********************************************************************
12510 '* SUBROUTINE FUNCTIONREPORT                                           *
12520 '* Prints obs. and calc. function values, and deviation between them   *
12530 '***********************************************************************
12540 IROW = 1 : ICOL = 40 : IOFFSET = 20 : IROOM = 40 : NUMROWS = 20
12550 LOCATE IROW,ICOL : COLOR 1
12560 PRINT "  obs. │ calc. "; : COLOR 7 : PRINT
12570 IF NOBS >= NUMROWS                                                                 THEN LOCATE IROW,ICOL+IOFFSET : COLOR 1:                                             PRINT "  obs. │ calc. "; : COLOR 7 : PRINT
12580  DEVSQ = 0
12590  FOR I = 1 TO NOBS
12600     IF I > IROOM THEN 12630
12610     IF I <= NUMROWS THEN LOCATE (IROW + I),ICOL                                                     ELSE LOCATE (IROW + I MOD NUMROWS),(ICOL + IOFFSET)
12620     PRINT USING "###.##\ \###.##"; FOBS(I);" │ ";FCALC(I);
12630     DEV = FOBS(I) - FCALC(I)
12640     DEVSQ = DEVSQ + DEV * DEV * OBSWT(I)
12650     NEXT I
12660 LOCATE 20,5 : PRINT USING "\         \#####.##";"Σ error² = ";DEVSQ
12670 IF IT = 1 THEN 12690  'no change in first iteration
12680 LOCATE 21,5: PRINT USING "\         \#####.##";"Change =   ";DEVSQ-DEVSQ1;
12690  RETURN
13000 '*********************************************************************
13010 '* SUBROUTINE CONVERGE ( ERRSQ, DEVSQ, DEVSQ1, DEVSQ2, NONCONVERGE ) *
13020 '*                                                                   *
13030 '* Compares squared deviation of calculated function from observed   *
13040 '* function with that obtained in the last 2 iterations. If the      *
13050 '* deviation got worse two iterations in a row, set nonconverge flag.*
13060 '*********************************************************************
13070  IF (DEVSQ > DEVSQ1 AND DEVSQ1 > DEVSQ2)                                            THEN NONCONVERGE = 1
13080  DEVSQ2 = DEVSQ1
13090  DEVSQ1 = DEVSQ
13100  RETURN
13500 '********************************************************************
13510 '* SUBROUTINE LAMBDA ( DLAMBDA, FCALC, FOBS, OBSWT)                 *
13520 '*                                                                  *
13530 '* Calculates lagrangian multipliers for setting up matrix equation *
13540 '********************************************************************
13550 FOR I = 1 TO NOBS
13560    DLAMBDA(I) = (FCALC(I) - FOBS(I)) * OBSWT(I)
13570    NEXT I
13580 RETURN
14000 '*************************************************************
14010 '* SUBROUTINE VSLOPE( V,DFDV,NVAR )                          *
14020 '*                                                           *
14030 '* Calculates the partials of the function w/ r.t. each      *
14040 '* of the variables at each of the observed points, and      *
14050 '* stores them in dfdv.                                      *
14060 '*************************************************************
14070 GOSUB 11000   'call function( p, v, nobs, nvar, np, fcalc)
14080 FOR IW = 1 TO NOBS
14090    FTEMP(IW) = FCALC(IW)
14100    NEXT IW
14110 FOR IW = 1 TO NVAR
14120    FOR JW = 1 TO NOBS
14130       IFLAG(JW) = 0
14140       IF ABS(VOBS(JW,IW)) < 1.00000000000000e-2#                                                           THEN VOBS(JW,IW) = 0.0005# : IFLAG(JW) = 1                                       ELSE VOBS(JW,IW) = VOBS(JW,IW) * 1.0005#
14150 PRINT "modified var:" ;VOBS(JW,IW)
14160       NEXT JW
14170    GOSUB 11000    'call function(fcalc)
14180    FOR JW = 1 TO NOBS
14190       IF IFLAG(JW) = 1                                                                   THEN DFDV(JW,IW) = (FCALC(JW) - FTEMP(JW)) / 0.0005# :                                VOBS(JW,IW) = VOBS(JW,IW) - 0.0005#
14200       IF IFLAG(JW) <> 1                                                                  THEN DFDV(JW,IW) = (FCALC(JW)-FTEMP(JW)) / (0.0005# * VOBS(JW,IW))                    : VOBS(JW,IW) = VOBS(JW,IW) / 1.0005#
14210       PRINT"dfdv(";JW;IW;")="; DFDV(JW,IW)
14220       NEXT JW
14230    NEXT IW
14240 RETURN
14500 '********************************************************************
14510 '* subroutine weigh[ p, nobs, nvar, v, dfdv, varwt, obswt ]         *
14520 '*                                                                  *
14530 '* calculates new weights for function values,                      *
14540 '* using the follwing formula:                                      *
14550 '* obswt(i) = 1/ Σ [(dfdv)^2 * (1/varwt(v))]                        *
14560 '* note: obswt(i) = 1/L(i) in Wentworth article                     *
14570 '********************************************************************
14580 IF IT = 1 THEN RETURN  'skip weighting on first iteration
14590 GOSUB 14000 'subroutine vslope
14600 FOR IW = 1 TO NOBS
14610    SUM = 0.#
14620    FOR JW = 1 TO NVAR
14630       SUM = SUM + DFDV(IW,JW)*DFDV(IW,JW)/VARWT(IW,JW)
14640       NEXT JW
14650    OBSWT(IW) = 1.# / SUM
14660    NEXT IW
14670 PRINT "new function weights:"
14680 FOR IW = 1 TO NOBS
14690    PRINT OBSWT(IW)
14700    NEXT IW
14710 RETURN
15000 '********************************************************
15010 '* SUBROUTINE SETUP( B,RHS,dfdp)                        *
15020 '* Sets up matrix equation to get changes to parameters *
15030 '********************************************************
15040 '
15050 'Get partials of function w.r.t. parameters
15060     GOSUB 17500     'subroutine pslope
15070 'Now set up matrices
15080     FOR I = 1 TO NP
15090        'Set up right hand side element
15100        RHS(I) = 0.#
15110        FOR J = 1 TO NOBS
15120           RHS(I) = RHS(I) + DFDP(J,I) * DLAMBDA(J)
15130           NEXT J
15140        'Set up left hand side elements
15150        FOR J = 1 TO NP
15160           B(I,J) = 0.#
15170           FOR K = 1 TO NOBS
15180              B(I,J) = B(I,J) + DFDP(K,I) * DFDP(K,J) * OBSWT(K)
15190              NEXT K
15200           NEXT J
15210        NEXT I
15220 RETURN
16000 '*****************************************************
16010 '* subroutine solve[b#(np,np), rhs(np), np]          *
16020 '* 1/31/82 by Dave Whitman                           *
16030 '* solves matrix equations of the form b# x = rhs#   *
16040 '* inverts b# in place,multiplies rhs# by inverse    *
16050 '* uses Gauss-Jordan matrix inversion                *
16060 '* for good results b# and rhs# must be dbl precision*
16070 '* ref: J.M. McCormick "Numerical Methods in FORTRAN"*
16080 '*****************************************************
16090 DETERM = 1.#
16100 FOR I = 1 TO NP
16110    INDEX(I,3) = 0
16120    NEXT I
16130 FOR I = 1 TO NP  'MAIN LOOP
16140    'search for pivot element
16150    MAX# = 0.#
16160    FOR J = 1 TO NP
16170       IF INDEX(J,3) = 1 THEN 16260
16180       FOR K = 1 TO NP
16190          IF INDEX(K,3) > 1 THEN 16700
16200          IF INDEX(K,3) = 1 THEN 16250
16210          IF MAX# > ABS(B(J,K)) THEN 16250
16220          IROW = J
16230          ICOL = K
16240          MAX# = ABS(B(J,K))
16250          NEXT K
16260       NEXT J
16270   INDEX(ICOL,3) = INDEX(ICOL,3) + 1
16280   INDEX(I,1) = IROW
16290   INDEX(I,2) = ICOL
16300   'interchange rows to put pivot on diagonal
16310   IF IROW = ICOL THEN 16380  'ALREADY THERE
16320   DETERM = -1.# * DETERM
16330   FOR J = 1 TO NP
16340      SWAP B(IROW,J),B(ICOL,J)
16350      NEXT J
16360   SWAP RHS(IROW),RHS(ICOL)
16370   'divide pivot row by pivot element
16380   PIVOT = B(ICOL,ICOL)
16390   DETERM = DETERM * PIVOT
16400   B(ICOL,ICOL) = 1.#
16410   FOR J = 1 TO NP
16420      B(ICOL,J) = B(ICOL,J)/PIVOT
16430      NEXT J
16440   RHS(ICOL) = RHS(ICOL)/PIVOT
16450   ' reduce non-pivot rows
16460   FOR J = 1 TO NP
16470      IF J = ICOL THEN 16540
16480      T = B(J,ICOL)
16490      B(J,ICOL) = 0.#
16500      FOR K = 1 TO NP
16510         B(J,K) = B(J,K) - B(ICOL,K)*T
16520         NEXT K
16530      RHS(J) = RHS(J) - RHS(ICOL)*T
16540      NEXT J
16550   NEXT I
16560 'interchange columns
16570 FOR I = NP TO 1 STEP -1
16580    IF INDEX(I,1) = INDEX(I,2) THEN 16640
16590    IROW = INDEX(I,1)
16600    ICOL = INDEX(I,2)
16610    FOR J = 1 TO NP
16620       SWAP B(J,IROW), B(J,ICOL)
16630       NEXT J
16640    NEXT I
16650 'test for singularity
16660 FOR I = 1 TO NP
16670    IF INDEX(I,3) <> 1 THEN 16700
16680    NEXT I
16690 RETURN
16700 PRINT"singular matrix error ":RETURN
17000 '**********************************************************
17010 '* SUBROUTINE DELTAP ( P, RHS, NP )                       *
17020 '*                                                        *
17030 '* Modifies parameters according to changes in rhs        *
17040 '**********************************************************
17050 FOR I = 1 TO NP
17060    P(I) = P(I) - RHS(I) * FRACT
17070    NEXT I
17080 RETURN
17500 '************************************************************************
17510 '* subroutine pslope[ p, vobs, nobs, np, nvar, dfdp(nobs,np) ]          *
17520 '* 2/1/82   by Dave Whitman                                             *
17530 '* calculates partial of the function with                              *
17540 '* respect to the each of the parameters at                             *
17550 '* each of the observations, and stores them in dfdp.                   *
17560 '************************************************************************
17570 GOSUB 11000                   'call function( fcalc, p, v, nobs, nvar, np)
17580 FOR IS = 1 TO NOBS
17590    FTEMP(IS) = FCALC(IS)
17600    NEXT IS
17610 FOR IS = 1 TO NP
17620    TP = P(IS)
17630    IF TP < 1.00000000000000e-2#                                                                      THEN P(IS) = TP + 0.0005#                                                        ELSE P(IS) = TP * 1.0005#
17640    GOSUB 11000          'call function( fcalc )
17650    FOR JS = 1 TO NOBS
17660       IF TP < 1.00000000000000e-2#                                                                      THEN DFDP(JS,IS) = (FCALC(JS) - FTEMP(JS)) / 0.0005#                             ELSE DFDP(JS,IS) = (FCALC(JS) - FTEMP(JS)) / (0.0005# * TP)
17670       NEXT JS
17680    P(IS) = TP
17690    NEXT IS
17700 RETURN
18000 '**********************************************************************
18010 '* SUBROUTINE initialize                                              *
18020 '*                                                                    *
18030 '* Prompts for name of input file, then reads problem in              *
18040 '* from input file.                                                   *
18050 '**********************************************************************
18060 '
18070 KEY OFF : CLS
18080 LOCATE 13,20 : INPUT "Name of input file?  ",IFILE$
18090 OPEN IFILE$ FOR INPUT AS #1
18100 INPUT#1,NOBS
18110 DIM FOBS(NOBS),FCALC(NOBS),FTEMP(NOBS),OBSWT(NOBS)
18120 DIM VOBS(NOBS,NVAR),V(NOBS,NVAR),VARWT(NOBS,NVAR),DFDV(NOBS,NVAR)
18130 DIM P(NP),PNAME$(NP), DFDP(NOBS,NP)
18140 DIM IFLAG(NOBS),DLAMBDA(NOBS)
18150 INPUT#1,NUMIT
18160 INPUT#1,IUSERWT,INTERNALWT
18170 INPUT#1, FRACT    'fraction of calculated param. change to apply
18180 FOR I = 1 TO NOBS
18190    INPUT#1,FOBS(I)
18200    IF IUSERWT = 1                                                                     THEN INPUT#1,OBSWT(I)                                                           ELSE OBSWT(I) = 1.#
18210    FOR J = 1 TO NVAR
18220       INPUT#1,VOBS(I,J)
18230       IF IUSERWT = 1                                                                     THEN INPUT#1,VARWT(I,J)                                                         ELSE VARWT(I,J) = 1.#
18240       NEXT J
18250    NEXT I
18260 FOR I = 1 TO NP
18270    INPUT#1,PNAME$(I), P(I)
18280    NEXT I
18290 DEVSQ1 = 1.00000000000000e+2# : DEVSQ2 = 1.00000000000000e+2# 'dummy devsqs for non-converge test
18300 TIME$ = "00:00:00"
18310 RETURN
19000 '**********************************************************************
19010 '* SUBROUTINE REPORT                                                  *
19020 '*                                                                    *
19030 '* Prints final report giving observed and calculated values of       *
19040 '* function, and standard deviation                                   *
19050 '* Note: assumes NEC 8023 printer. Modify to suit other printers.     *
19060 '* On NEC, esc X turns on underlining, esc Y turns it off.            *
19070 '* The following is a partial list of IBM screen charactors, followed *
19080 '* by the charactor the NEC will print: û = │ ; ┐ = Σ; ╠ = ².         *
19090 '* Thus "┐ error╠ =" prints as "Σ error² =".                          *
19100 '**********************************************************************
19110 GOSUB 11000  'subroutine function
19130 LPRINT "FINAL REPORT"
19140 LPRINT "FUNCTION: "; FUNCTION$
19150 LPRINT "DATA FILE:";IFILE$
19160 LPRINT : LPRINT"   Function Values"
19170 LPRINT CHR$(27);"X" "Observed û Calculated"; : LPRINT CHR$(27);"Y"
19180 DEVSQ = 0.#
19190 FOR I = 1 TO NOBS
19200     LPRINT USING"####.##\   \####.##";FOBS(I);"  û  ";FCALC(I)
19210     DEVSQ = DEVSQ + (FOBS(I) - FCALC(I))^2 * OBSWT(I)
19220     NEXT I
19230 LPRINT
19240 LPRINT USING "\        \####.##\                          \+#.##";                  "┐ error╠ = "; DEVSQ; "   Change, last iteration = "; DEVSQ - DEVSQ1
19250 GOSUB 19500 'subroutine covariance
19260 LPRINT: LPRINT"FINAL PARAMETERS"
19270 LPRINT CHR$(27);"X" " Name    û  Value  û Std.Dev."; : LPRINT CHR$(27);"Y"
19280 FOR I = 1 TO NP
19290   LPRINT USING  "\       \\\####.##\ \##.###"; PNAME$(I);"û "; P(I);" û ";           SQR(B(I,I))
19300   NEXT I
19310 LPRINT
19320 KEY ON: RETURN
19500 '**********************************************************************
19510 '* SUBROUTINE COVARIANCE                                              *
19520 '*                                                                    *
19530 '* Calculates estimate of unit variance, then calculates              *
19540 '* variance/covariance matrix based on inverted B matrix and the      *
19550 '* variance estimate.                                                 *
19560 '**********************************************************************
19570 'estimate unit variance
19580  IF NOBS <= NP                                                                       THEN VAR = 0.#  'should never trust parameters if nobs < np anyways!             ELSE VAR = DEVSQ / (NOBS - NP)
19590 'convert B to covariance matrix
19600 FOR I = 1 TO NP
19610   FOR J = 1 TO NP
19620      B(I,J) = B(I,J) * VAR
19630      NEXT J
19640   NEXT I
19650 RETURN
20000 '**********************************************************************
20010 '* subroutine finalproc                                               *
20020 '*                                                                    *
20030 '* Before nonlin stops, it makes a call to a subroutine at line 20000 *
20040 '* The user may supply a subroutine (in the file with the function    *
20050 '* subroutine) to do any final calculations using either the final    *
20060 '* parameter set and/or the variance-covariance matrix.               *
20070 '**********************************************************************
20080 RETURN
65000 ' Trap error of function file not in ascii mode
65010 IF ERR <> 54 THEN 65090
65020    CLS: BEEP : LOCATE 5,28
65030    PRINT "Bad File Mode Error:"
65040    LOCATE 7,21: PRINT "Function file must be saved in ASCII mode"
65050    LOCATE 8,15
65060    PRINT "Read lines 1200-1260 of this program for clarification."
65070    LOCATE 15,1: LIST 1200-1260
65080    LOCATE 23,1: STOP
65090 RESUME
```
{% endraw %}

## PRINTER.BAS

{% raw %}
```bas
10 'printer
20 'Program to deal with the IBM 80 cps printer (Epson MX80)
30 'Functions:  Setup printer modes
40 '            Print paginated listings of text files
50 '            Issue controls to printer
60 'Author:     Will Fastie
70 'Created:    12 Dec 1981
80 'Modified:   Bill Linhart    4-3-82, 7-13-82
90 'Source:     printer.bas
100 'NOTE:      Operates on current display device, current mode
110 '************* Constants ***************************
120 PROG$ = "PRINTER v1.03 7-13-82"
130 ESC$ = CHR$(27)
135 QUO$ = CHR$(34)
140 CLRLPT$ = CHR$(18) + CHR$(20) + ESC$ + "F" + ESC$ + "H"
150 PWIDTH = 80
160 '************* Initial Menu ************************
170 KEY OFF: CLS: SCREEN 0,0,0
180 PRINT PROG$: PRINT
190 PRINT "The printer must be ONLINE to "
200 PRINT "perform these functions."
210 PRINT
220 PRINT "Functions:";
230 PRINT TAB(13) ;"P - Print a text file"
240 PRINT TAB(13) ;"S - Setup printer"
250 PRINT TAB(13) ;"R - Reset printer"
260 PRINT TAB(13) ;"T - Advance paper to top"
270 PRINT TAB(13) ;"Q - Quit (return to DOS)"
280 PRINT TAB(13) ;"X - Exit to Basic"
290 MENSEL = CSRLIN + 1
300 PLOC = MENSEL: GOSUB 1270
310 INPUT "   Enter function:  ",X$: IF X$ = "" THEN BEEP: GOTO 300
320 GOSUB 1210
330 X = INSTR("PSRTQX",X$): IF X = 0 THEN BEEP: GOTO 300
340 ON X GOSUB 360, 770, 1080, 1120,1150, 1180
350 GOTO 160
360 '**************** Print paginated listing ********************
370 CLS
380 PRINT PROG$: PRINT
390 PRINT "Adjust the paper in the printer so that"
400 PRINT "the perforation is at the paper bail."
410 PRINT "Put the printer ONLINE.
420 PRINT
430 PRINT "Files MUST be ASCII text files."
434 PRINT "Create ASCII files by using..."      '7-13-82
435 PRINT "   SAVE" QUO$ "filename.ext" QUO$ ",A"  '7-13-82
440 PRINT
450 PRINT "No filename extension is assumed,"
460 PRINT "so enter the filename exactly."
470 PRINT "Depress ENTER key to return to menu."
480 PRINT "Press ESC key to abort printing."
490 PRINT
500 INPUT "File to print:  ", X$
510 IF LEN(X$) = 0 THEN RETURN
520 GOSUB 1210
530 WIDTH "lpt1:", PWIDTH
540 OPEN X$ FOR INPUT AS 1
550 PAGENR = 0
560 LINENR = 1
570 IF EOF (1) THEN 650
580 LINE INPUT #1, L$
590 IF LINENR = 1 THEN GOSUB 700
600 LPRINT L$
610 IF INKEY$ = ESC$ THEN 650
620 LINENR = LINENR + INT((LEN(L$)+79)/80)
630 IF LINENR > 54 THEN LINENR = 1
640 GOTO 570
650 '******************** Close file and return **********************
660 CLOSE
670 GOSUB 1120
680 GOTO 500
690 '******************** Subroutine to print page heading ***********
700 IF PAGENR <> 0 THEN LPRINT  CHR$(12);
710 PAGENR = PAGENR + 1
720 LPRINT: LPRINT
730 LPRINT CHR$(14); X$; " "; CHR$(20);
740 LPRINT "-- printed on ";DATE$;" at "; TIME$; " -- Page";PAGENR
750 LPRINT : LPRINT
760 RETURN
770 '******************** Setup Printer ******************************
780 CLS: PRINT PROG$
790 PRINT : PRINT  "Printer enhancements are:"
800 PRINT
810 PRINT "    DW - Double Width"
820 PRINT "    C  - Compressed Print"
830 PRINT "    E  - Emphasized Print"
840 PRINT "    DS - Double Strike"
850 PRINT
860 PRINT "Enter enhancements separated by spaces."
870 PRINT
880 PRINT "Examples:"
890 PRINT
900 PRINT "  C E    - Illegal"
910 PRINT "         - 10 cpi, normal"
920 PRINT "  E      - 10 cpi, bold"
930 PRINT "  DS C   - 16.5 cpi, double"
940 PRINT
950 INPUT "      Enter enhancements:  ",O$
960 X$=O$: GOSUB 1210: O$=X$
970 LPRINT CLRLPT$;
980 IF INSTR(O$,"DW") THEN LPRINT CHR$(14);
990 IF INSTR(O$,"C") THEN LPRINT CHR$(15);
1000 IF INSTR(O$,"E") THEN LPRINT ESC$;"E";
1010 IF INSTR(O$,"DS") THEN LPRINT EXC$;"G";
1020 PRINT
1030 PLOC = CSRLIN
1040 GOSUB 1270
1050 INPUT "Enter desired line width:  "; PWIDTH
1060 IF 1 > PWIDTH  OR PWIDTH > 132 THEN 1040
1070 RETURN
1080 '************************ Reset printer to defaults ****************
1090 LPRINT CLRLPT$;
1100 PWIDTH = 80
1110 RETURN
1120 '******************* Form feed to printer **************************
1130 LPRINT CHR$(12);
1140 RETURN
1150 '******************* Return to DOS *********************************
1160 CLS
1170 SYSTEM
1180 '******************* Exit to Basic *********************************
1190 CLS
1200 END
1210 '******************* Subroutine to UPPERFY a string (in X$) ********
1220 FOR X = 1 TO LEN(X$)
1230   XC$ = MID$(X$,X,1)
1240   IF "a" <= XC$ AND XC$ <= "z" THEN MID$(X$,X,1) = CHR$(ASC(XC$) - 32)
1250 NEXT X
1260 RETURN
1270 '*********** Subroutine to position at specified line and clear it
1280 LOCATE PLOC,1
1290 PRINT STRING$(40," ")'
1300 LOCATE PLOC,1
1310 RETURN
1320 '******************* Subroutine to wait for any keystroke **********
1330 PRINT "Depress any key to continue... ";
1340 GOSUB 1360
1350 RETURN
1360 '******************* Subroutine to get a keystroke into x$ *********
1370 X$ = INKEY$
1380 IF X$ = "" THEN 1370
1390 RETURN
```
{% endraw %}

## REGRESS.BAS

{% raw %}
```bas
100 CLS
110 A$=STRING$(80,205)
120 PRINT A$
130 PRINT TAB(27)"REGRESSION ANALYSIS #3001"
140 COLOR 23
150 PRINT :PRINT :PRINT TAB(39)"IPCO"
160 COLOR 7
170 PRINT :PRINT :PRINT TAB(25)"THE PERSONAL COMPUTER OWNERS GROUP"
180 PRINT :PRINT :PRINT TAB(19)"p.o. box 10426, pittsburgh,pennsylvania 15234"
190 PRINT A$
200 PRINT :PRINT :PRINT :PRINT :PRINT
210 PRINT TAB(28)"PRESS ANY KEY TO CONTINUE"
220 A$=INKEY$:IF A$="" THEN 220
230 CLS
240 CLS
250 PRINT TAB(30)"LINEAR REGRESSION":PRINT :PRINT
260 INPUT "NUMBER OF KNOWN POINTS";N
270 J=0
280 K=0
290 L=0
300 M=0
310 R2=0
320 REM LOOP TO ENTER COORDINATES OF POINTS
330 FOR I=1 TO N
340 PRINT "X,Y OF POINT ";I;
350 INPUT X,Y
360 REM ACCUMULAT INTERMEDIATE SUMS
370 J=J+X
380 K=K+Y
390 L=L+X^2
400 M=M+Y^2
410 R2=R2+X*Y
420 NEXT I
430 B=(N*R2-K*J)/(N*L-J^2)
440 A=(K-B*J)/N
450 PRINT
460 PRINT "F(X)=";A;"+(";B;"*X)"
470 REM COMPUTE REGRESSION ANALYSIS
480 J=B*(R2-J*K/N)
490 M=M-K^2/N
500 K=M-J
510 PRINT
520 R2=J/M
530 PRINT "COEFFICIENT OF DETERMINATION (R^2)=";R2
540 PRINT "COEFFICIENT OF CORRELATION= ";SQR(R2)
550 PRINT "STANDARD ERROR OF ESTIMATE=";SQR(K/(N-2))
560 PRINT
570 REM ESTIMATE Y-COORDINATES OF POINTS WITH ENTERED X-COORDINATES
580 PRINT "INTERPOLATION:(ENTER X=0 TO END PROGRAM)"
590 PRINT "X=";
600 INPUT X
610 REM RESTART OR END PROGRAM
620 IF X=0 THEN 660
630 PRINT "Y=";A+B*X
640 PRINT
650 GOTO 590
660 END
```
{% endraw %}

## SCISUBV1.BAS

{% raw %}
```bas
100 PRINT"PROGRAM FOR PLOTTING EQUALLY"
101 PRINT"SPACED DATA VALUES"
102 PRINT
103 PRINT"THE USER INPUTS THE STARTING "
104 PRINT"AND ENDING COORDINATES, ALONG "
105 PRINT"WITH THE NUMBER OF EVALUATION POINT."
106 PRINT"THE PROGRAM WILL THEN PLOT "
107 PRINT"THE DATA"
108 PRINT
109 PRINT
110 '   INITIALIZATION
111 PRINT "INPUT TERMINAL WIDTH: ";
112 INPUT L
113 PRINT "BEGINNING CORDINATE: ";
114 INPUT X1
115 PRINT "ENDING COORDINATE: ";
116 INPUT X2
117 PRINT "NUMBER OF DATA POINTS: ";
118 INPUT N
119 DIM D(N+1)
120 '   DATA INPUT
121 PRINT"INPUT DATA"
122 FOR I=1 TO N
123 PRINT I;
124 INPUT D(I)
125 NEXT I
126 '   GO TO PLOTTING SUBROUTINE PROPER
127 GOSUB 40000
128 END
129 PRINT"PROGRAM FOR PLOTTING EQUALLY"
130 PRINT"SPACED FUNCTION VALUES"
131 PRINT
132 PRINT"THE USER INPUTS THE STARTING "
133 PRINT"AND ENDING COORDINATES, ALONG "
134 PRINT"WITH THE NUMBER OF EVALUATION POINTS."
135 PRINT"THE PROGRAM WILL THEN PLOT "
136 PRINT"THE FUNCTION OVER THAT RANGE."
137 PRINT
138 PRINT
139 '   INITIALIZATION
140 PRINT "INPUT TERMINAL WIDTH: ";
141 INPUT L
142 PRINT "BEGINNING CORDINATE: ";
143 INPUT X1
144 PRINT "ENDING COORDINATE: ";
145 INPUT X2
146 PRINT "NUMBER OF DATA POINTS: ";
147 INPUT N
148 DIM D(N+1)
149 '   FUNCTION EVALUATION
150 FOR I=1 TO N
151 '   *****INPUT FUNCTION BELOW*****
152 X=X1+(I-1)*(X2-X1)/(N-1)
153 D(I)=0.1*X*X*X-3*X*X+2*X-3
154 NEXT I
155 '   GO TO PLOTTING SUBROUTINE PROPER
156 GOSUB 40000
157 END
158 PRINT"PROGRAM FOR PLOTTING COORDINATE"
159 PRINT"SETS OF DATA"
160 PRINT
161 PRINT"THE PROGRAM ASSUMES THAT THE DATA IS"
162 PRINT"SEQUENTIALLY ORDERED, FIRST BY ABSCISSA"
163 PRINT"VALUE, SECOND BY ORDINATE"
164 PRINT"THE PROGRAM WILL THEN PLOT "
165 PRINT"THE DATA."
166 PRINT
167 PRINT
168 '   INITIALIZATION
169 PRINT "INPUT TERMINAL WIDTH: ";
170 INPUT L
171 PRINT "NUMBER OF DATA POINTS: ";
172 INPUT N
173 DIM D(N+1),C(N+1),E(N+1)
174 '   DATA INPUT
175 PRINT "INPUT DATA IN ABSCISSA, ORDINATE PAIRS: "
176 FOR I=1 TO N
177 PRINT I;
178 INPUT C(I),D(I)
179 '   C(I)=ABSCISSA, D(I)=ORDINATE
180 NEXT I
181 '   GO TO PLOTTING SUBROUTINE PROPER
182 GOSUB 40100
183 END
184 '   PROGRAM TO DEMONSTRATE COMPLEX NUMBER
185 '   ADDITION, SUBRACTION, MULTIPLICATION
186 '   AND DIVISION
187 PRINT"ENTER COMPLEX NUMBERS IN (X,Y) PAIRS:"
188 PRINT
189 PRINT"Z1= ";
190 INPUT X(1),Y(1)
191 PRINT
192 PRINT"Z2= ";
193 INPUT X(2),Y(2)
194 '   COMPLEX NUMBER ADDITION
195 GOSUB 40300
196 PRINT
197 PRINT
198 PRINT "Z1+Z2= ";X(3);
199 IF Y(3)>=0 THEN PRINT"+";
200 PRINT Y(3);" I"
201 PRINT
202 PRINT
203 '   COMPLEX NUMBER SUBTRACTION
204 GOSUB 40350
205 PRINT "Z1-Z2= ";X(3);
206 IF Y(3)>=0 THEN PRINT"+";
207 PRINT Y(3);" I"
208 PRINT
209 '   COMPLEX NUMBER MULTIPLICATION
210 GOSUB 40600
211 PRINT"Z1*Z2= ";X;
212 IF Y>=0 THEN PRINT" +";
213 PRINT Y;" I"
214 PRINT
215 '   COMPLEX NUMBER DIVISION
216 GOSUB 40800
217 PRINT"Z1/Z2= ";X;
218 IF Y>=0 THEN PRINT" +";
219 PRINT Y;" I"
220 END
221 '   PROGRAM TO DEMONSTRATE
222 '   RECTANGULAR TO POLAR CONVERSION
223 PRINT"INPUT RECTANGULAR COORDINATES TO BE CONVERTED";
224 INPUT X,Y
225 '   CONVERSIONS
226 GOSUB 40400
227 PRINT
228 PRINT"POLAR COORDINATES ARE : RADIUS= ";U
229 PRINT"                        ANGLE=  "V;" RADIANS"
230 END
231 '   PROGRAM TO DEMONSTRATE
232 '   POLAR TO RECTANGULAR CONVERSION
233 PRINT"INPUT POLAR COORDINATES TO BE CONVERTED";
234 INPUT U,V
235 '   CONVERSION
236 GOSUB 40450
237 PRINT
238 PRINT"RECTANGULAR COORDINATES ARE (X,Y)= ";X;" .";Y
239 END
240 '   PROGRAM TO DEMONSTRATE
241 '   COMPLEX NUMBER TO A POWER
242 PRINT
243 PRINT"INPUT THE POWER DESIRED, FOLLOWED BY THE"
244 PRINT"COMPLEX NUMBER"
245 PRINT"N ";
246 INPUT N
247 PRINT"X ";
248 INPUT X
249 PRINT"Y ";
250 INPUT Y
251 '   POWER CALCULATION
252 GOSUB 41200
253 PRINT
254 PRINT"RESULT= ";X;
255 IF Y1>=0 THEN PRINT" +";
256 PRINT Y;" I"
257 END
258 '   PROGRAM TO DEMONSTRATE
259 '   FINDING THE ROOTS OF A COMPLEX NUMBER
260 PRINT
261 PRINT"INPUT THE INTEGER ROOT DESIRED FOLLOWED"
262 PRINT"BY THE COMPLEX NUMBER"
263 PRINT"N ";
264 INPUT N
265 PRINT"X ";
266 X9 AND Y9 ARE STORED VALUES
267 INPUT X9
268 PRINT"Y ";
269 INPUT Y9
270 '   FIND N ROOTS
271 PRINT
272 PRINT
273 PRINT"ORDER    X+ YI"
274 PRINT"-----  ----------------"
275 PRINT
276 FOR M=1 TO N
277 '   CONVERT TO X,Y
278 X=X9
279 Y=Y9
280 GOSUB 41300
281 PRINT"  ";M;
282 PRINT"  ";INT(1000*X+0.5)/1000;"  ";
283 IF Y>0 THEN PRINT "+";
284 PRINT INT(1000*Y+5)/1000;" I"
285 NEXT M
286 END
287 '   PROGRAM TO DEMONSTRATE SPHERICAL TO
288 '   CARTESIAN COORDINATE CONVERSION
289 PRINT"INPUT RADIUS, U: ";
290 INPUT U
291 PRINT"INPUT ANGLE IN (X,Y) PLANE, V: ";
292 INPUT V
293 PRINT"INPUT ANGLE OFF Z AXIS, W: ";
294 INPUT W
295 GOSUB 41400
296 PRINT
297 PRINT"(X,Y,Z)= (";X;" , ";Y;" , ";Z;")"
298 END
299 '   PROGRAM TO DEMONSTRATE CARTESIAN TO
300 '   SPHERICAL COORDINATE CONVERSION
301 PRINT"INPUT X, Y AND Z: ";
302 INPUT X,Y,Z
303 GOSUB 41450
304 PRINT
305 PRINT"RADIUS= ";U
306 PRINT"ANGLE IN (X,Y) PLANE= ";V;" RADIANS"
307 PRINT"ANGLE OFF Z AXIS= ";W;" RADIANS"
308 END
309 '   PROGRAM TO DEMONSTRATE VECTOR SUDROUTINES
310 N=3
311 DIM A(N),B(N),C(N)
312 PRINT "INPUT VECTOR A (X,Y,Z): ";
313 INPUT A(1),A(2),A(3)
314 PRINT "INPUT VECTOR B (X,Y,Z): ";
315 INPUT B(1),B(2),B(3)
316 '   SUM
317 GOSUB 41500
318 PRINT
319 PRINT "A+B= (";C(1);", ";C(2);", ";C(3);")"
320 '   DIFFERENCE
321 GOSUB 41550
322 PRINT
323 PRINT"A-B= (";C(1);", ";C(2);", ";C(3);")"
324 '   CROSS PRODUCT
325 GOSUB 41650
326 PRINT
327 PRINT"AXB= (";C(1);", ";C(2);", ";C(3);")"
328 '   DOT PRODUCT
329 GOSUB 41600
330 PRINT
331 PRINT "A,B= ";C
332 '   VECTOR ANGLE
333 GOSUB 41750
334 PRINT
335 PRINT "ANGLE BETWEEN VECTORS A AND B= ";A;" RADIANS"
336 '   VECTOR LENGTH
337 GOSUB 41700
338 PRINT
339 PRINT "LENGTH OF VECTOR B= ";L
340 PRINT
341 PRINT
342 '   PROGRAM TO DEMONSTRATE MATRIX OPERATIONS
343 PRINT"INPUT THE ROW AND COLUMN DIMENSIONS OF A(I,J) AND B(I,J):"
344 PRINT"ROW SIZE= ";
345 INPUT M
346 PRINT"COLUMN SIZE= "
347 INPUT N
348 '   FIND MAXIMUM MATRIX DIMENSION NEEDED
349 IF M>N THEN K=M+1
350 IF N>M THEN K=N+1
351 DIM A(K,K), B(K,K), C(K,K)
352 '   INPUT MATRIX A
353 PRINT
354 PRINT"INPUT MATRIX A ROW BY ROW"
355 PRINT
356 FOR I=1 TO M
357 PRINT"INPUT THE ";N;" ELEMENTS OF ROW ";I;" :"
358 FOR J=1 TO N
359 INPUT A(I,J)
360 NEXT J
361 PRINT
362 NEXT I
363 PRINT
364 '   PRINT MATRIX A
365 '   MOVE A TO C
366 N1=M
367 N2=N
368 N3=0
369 GOSUB 42150
370 PRINT"MATRIX A="
371 PRINT
372 '   PRINTING SUBROUTINE
373 GOSUB 1020
374 PRINT
375 '   INPUT MATRIX B
376 PRINT
377 PRINT"INPUT MATRIX B ROW BY ROW"
378 PRINT
379 FOR I=1 TO M
380 PRINT"INPUT THE ";N;" ELEMENTS OF ROW ";I;" :"
381 FOR J=1 TO N
382 INPUT B(I,J)
383 NEXT J
384 PRINT
385 NEXT I
386 PRINT
387 '   MOVE B TO C
388 GOSUB 42125
389 PRINT
390 PRINT"MATRIX B="
391 PRINT
392 '   PRINTING SUBROUTINE
393 GOSUB 1020
394 PRINT
395 '   MATRIX ADDITION
396 GOSUB 41800
397 PRINT"A+B="
398 '   PRINTING SUBROUTINE
399 GOSUB 1020
400 '   MATRIX SUBTRACTION
401 GOSUB 41850
402 PRINT"A-B="
403 '   PRINTING SUBROUTINE
404 GOSUB 1020
405 '   MATRIX TRANSPOSE (A)
406 '   FIRST, SAVE B IN C
407 GOSUB 42125
408 '   PUT TRANSPOSE OF A IN B
409 GOSUB 41950
410 '   MOVE TRANSPOSE OF A TO A
411 N1=N
412 N2=M
413 GOSUB 42075
414 '   RETURN C TO B
415 N1=M
416 N2=N
417 GOSUB 42100
418 PRINT
419 PRINT"A(TRANSPOSE)="
420 '   SWITCH ROW AND COLUMN SIZES FOR THE TRANSPOSE PRINT
421 N2=M
422 N1=N
423 M=N1
424 N=N2
425 '   MOVE A TO C FOR PRINTING
426 GOSUB 42150
427 PRINT
428 '   PRINTING SUBROUTINE
429 GOSUB 1020
430 '   DETERMINE PRODUCT OF A(TRANSPOSE) AND B
431 M1=M
432 N1=N
433 M2=N
434 N2=M
435 '   MATRIX MULTIPLICATION SUBROUTINE
436 GOSUB 41900
437 PRINT"A(TRANSPOSE) X B="
438 PRINT
439 '   PRINTING SUBROUTINE
440 N=M
441 GOSUB 1020
442 PRINT
443 END
444 '   PROGRAM TO DEMONSTRATE SPECIAL MATRIX OPERATIONS
445 '   FIRST CREATE A DIAGONAL MATRIX
446 PRINT"WHAT SIZE MATRIX IS DESIRED";
447 INPUT N
448 PRINT
449 PRINT"THIS MATRIX WILL HAVE ONLY DIAGONAL ELEMENTS.":
450 PRINT" WHAT VALUE SHOULD THEY BE";
451 INPUT B
452 DIM A(N+1,N+1),B(N+1,N+1),C(N+1,N+1)
453 '   GO TO DIAGONAL MATRIX CREATION SUBROUTINE
454 GOSUB 42000
455 '   SAVE MATRIX IN BOTH A AND C
456 N1=N
457 N2=N
458 N3=0
459 GOSUB 42075
460 GOSUB 42125
461 '   PRINT RESULT
462 M=N
463 GOSUB 1020
464 '   SWITCH TWO ROWS
465 PRINT
466 PRINT"INPUT THE NUMBERS OF THE ROWS TO BE SWITCHED":
467 INPUT N1,N2
468 '   GO TO SWITCHING SUBROUTINE
469 GOSUB 42250
470 '   MOVE RESULT TO C AND PRINT
471 N1=N
472 N2=N
473 GOSUB 42150
474 PRINT
475 GOSUB 1020
476 PRINT"INPUT SCALE FACTOR TO BE MULTIPLIED BY: ";
477 INPUT B
478 GOSUB 42200
479 '   PRINT RESULT
480 GOSUB 42150
481 GOSUB 1020
482 PRINT
483 PRINT"INPUT WHAT FRACTION OF ROW N1 IS TO BE ADDED TO ROW N2"
484 PRINT"FRACTION: ";
485 INPUT B
486 PRINT"N1: ";
487 INPUT N1
488 PRINT"N2: ";
489 INPUT N2
490 '   GO TO OPERATION
491 GOSUB 42275
492 '   PRINT RESULT
493 PRINT
494 N2=N
495 N1=N
496 GOSUB 42150
497 GOSUB 1020
498 PRINT"CLEAR MATRIX"
499 N1=N
500 N2=N
501 GOSUB 42225
502 '   PRINT RESULT
503 PRINT
504 GOSUB 42150
505 GOSUB 1020
506 END
507 '   PROGRAM TO DEMONSTRATE DETERMINANT
508 PRINT"INPUT MATRIX SIZE: ";
509 INPUT N
510 DIM A(N+1,N+1),B(N+1,N+1),C(N+1,N+1)
511 PRINT
512 '   INPUT MATRIX
513 FOR I=1 TO N
514 PRINT"INPUT ROW ";I
515 FOR J=1 TO N
516 INPUT A(I,J)
517 NEXT J
518 PRINT
519 NEXT I
520 PRINT
521 PRINT "MATRIX A="
522 '   MOVE A TO C FOR PRINTING
523 N1=N
524 N2=N
525 N3=0
526 GOSUB 42150
527 '   PRINT
528 M=N
529 GOSUB
530 PRINT
531 '   EVALUATE DETERMINANT
532 GOSUB 42350
533 PRINT"DETERMINANT= ";D
534 END
535 '   PROGRAM TO DEMONSTRATE MATRIX INVERSION
536 PRINT"INPUT DIMENSION OF MATRIX TO BE INVERTED: ";
537 INPUT N
538 DIM A(N+1,N+1),B(N+1,2*N+2),C(N+1,N+1)
539 PRINT
540 FOR I=1 TO N
541 PRINT"INPUT ROW ";I; :"
542 FOR J=1 TO N
543 INPUT A(I,J)
544 NEXT J
545 PRINT
546 NEXT I
547 PRINT
548 PRINT"MATRIX A="
549 N1=N
550 N2=N
551 N3=0
552 '   MOVE A TO C
553 GOSUB 42150
554 M=N
555 GOSUB 1020
556 '   GOTO INVERSION SUBROUTINE
557 GOSUB 42400
558 '   MOVE B TO C TO PRINT
559 PRINT"INVERSE OF A="
560 PRINT
561 GOSUB 42125
562 M=N
563 GOSUB 1020
564 '   CHECK RESULTS
565 '   MULTIPLY A TIMES B
566 M1=N
567 M2=N
568 GOSUB 41900
569 M=N
570 '   PRINT RESULTS
571 PRINT
572 PRINT"MATRIX A TIMES INVERSE MATRIX A="
573 GOSUB 1020
574 END
575 '   PROGRAM TO DEMONSTRATE USE OF INVERSE TO SOLVE
576 '   SIMULTANEOUS EQUATIONS
577 PRINT"INPUT SIZE OF EQUATION (NUMBER OF UNKNOWNS): ";
578 INPUT N
579 DIM A(N+1,N+1),B(N+1,2*N+2),C(N+1,N+1)
580 PRINT
581 FOR I=1 TO N
582 PRINT"INPUT ROW ":I;" OF COEFFICIENT MATRIX"
583 FOR J=1 TO N
584 INPUT A(I,J)
585 NEXT J
586 PRINT
588 PRINT"INPUT CONSTANT WHICH ROW EQUATION EQUALS: ";
589 INPUT B(I,1)
590 PRINT
591 NEXT I
592 PRINT
593 PRINT"MATRIX A="
594 N1=N
595 N2=N
596 N3=0
597 '   MOVE A TO C
598 GOSUB 42150
599 '   PRINT A
600 M=N
601 GOSUB 1020
603 '   MOVE CONSTANT VECTOR TO C
604 GOSUB 42125
605 '   PRINT CONSTANT VECTOR
606 PRINT
607 PRINT"CONSTANT VECTOR ="
608 N=1
609 GOSUB 1020
610 N=M
611 '   OBTAIN INVERSE
612 GOSUB 42400
613 '   MOVE RESULT IN B TO A
614 GOSUB 42075
615 '   MOVE CONSTANT VECTOR IN C TO B
616 GOSUB 42100
617 '   MULTIPLY INVERSE TIMES CONSTANT VECTOR
618 M1=N
619 N1=N
620 M2=N
621 N2=1
622 GOSUB 41900
623 '   RESULT IS IN C, PRINT C
624 M=N
625 N=1
626 PRINT"SOLUTION VECTOR="
627 GOSUB 1020
628 END
629 '   PROGRAM TO DEMONSTRATE OBTAINING THE LARGEST EIGENVALUE OF A MATRIX
630 PRINT"WHAT IS THE SIZE OF THE MATRIX: ";
631 INPUT N
632 PRINT
633 DIM A(N+1,N+1),B(N+1,N+1),C(N+1,N+1)
634 FOR I=1 TO N
635 PRINT"INPUT ROW ";I
636 FOR J=1 TO N
637 INPUT A(I,J)
638 NEXT J
639 PRINT
640 NEXT I
641 PRINT
642 PRINT"INPUT LEVEL OF ACCURACY: ";
643 INPUT E
644 PRINT"INPUT NUMBER OF ITERATIONS AT WHICH TO STOP: ";
645 INPUT D1
646 '   FIND EIGENVALUE
647 GOSUB 42700
648 PRINT
649 PRINT"EIGENVALUE= ";A
650 PRINT
651 PRINT"EIGENVECTOR="
652 FOR I=1 TO N
653 PRINT B(I,1)
654 NEXT I
655 PRINT
656 PRINT "NUMBER OF ITERATIONS= ";D
657 END
658 '   PROGRAM TO DEMONSTRATE THE MATRIX EXPONENT SUBROUTINE
659 PRINT"INPUT THE SIZE OF THE MATRIX TO BE EXPONENTIATED";
660 INPUT N
661 DIM A(N+1,N+1), B(N+1,N+1), C(N+1,N+1), D(N+1,N+1
662 FOR I=1 TO N
663 PRINT"INPUT ROW ";I
664 FOR J=1 TO N
665 INPUT A(I,J)
666 NEXT J
667 PRINT
668 NEXT I
669 PRINT
670 '   PRINT MATRIX A
671 N1=N
672 N2=N
673 N3=0
674 M=N
675 PRINT"MATRIX A="
676 PRINT
677 '   MOVE A TO C
678 GOSUB 42150
679 '   PRINT
680 GOSUB 1020
681 PRINT"INPUT THE VARIABLE X";
682 INPUT X
683 PRINT
684 PRINT"INPUT THE NUMBER OF TERMS TO BE CALCULATED";
685 INPUT K2
686 '   OBTAIN EXPONENT
687 GOSUB 42800
688 PRINT
689 PRINT"EXP(AX)= "
690 PRINT
691 GOSUB 1020
692 PRINT
693 END
694 '   PROGRAM TO DEMONSTRATE THE USE OF THE UNIFORM
695 '   RANDOM NUMBER GENERATOR
696 L=80
697 '   SET PLOT WIDTH
698 N=21
699 DIM C(22),D(22),E(22)
700 I=1 TO 21
701 D(I)=0
702 C(I)=(I-1)/10
703 NEXT I
704 '   SET SEED
705 Z2=RND(-0.5)
706 FOR I2=1 TO 1000
707 Z2=10*RND(0.9990001)+1
708 Z2=INT(Z2)
709 D(Z2)=D(Z2)+1
710 NEXT I2
711 PRINT"DISTRIBUTION OF THE 1000 RANDOM NUMBERS"
712 PRINT"IN TERMS OF THE NUMBER PER INTERVAL OF LENGTH 1/10"
713 PRINT
714 PRINT
715 GOSUB 40100
716 PRINT
717 PRINT
718 END
719 '   SINE AND COSINE APPROXIMATION DEMONSTRATION
720 PRINT"  X       SIN(X)             DELTA             COS(X)           DELTA"
721 PRINT" ---     --------           -------          -------          --------"
722 PRINT
723 FOR X=-5 TO 5 STEP 0.2
724 GOSUB 43210
725 PRINT INT(10*X)/10;TAB(8);Y;TAB(26);(SIN(X)-Y);
726 GOSUB 43225
727 PRINT TAB(46);Y;TAB(65);(COS(X)-Y)
728 NEXT X
729 END
730 '   ARCTANGENT APPROXIMATION DEMONSTRATION
731 PRINT" X";TAB(8);"ARCTANGENT";TAB(24);"DELTA"
732 PRINT"---"TAB(8);"-----------";TAB(24);"-----"
733 PRINT
734 FOR X=-5 TO STEP 0.2
735 GOSUB 43245
736 PRINT X;TAB(8);Y;TAB(21);(ATN(X)-Y)
737 NEXT X
738 END
739 '   NATURAL LOGARITHM AND EXPONENT APPROXIMATION DEMONSTRATION
740 PRINT" X";TAB(8);"  LN(X)  ";TAB(24);" DELTA ";TAB(40);"EXP(LN(X))";TAB(56);" DELTA "
741 PRINT"---";TAB(8);"---------";TAB(24);-------";TAB(40);----------";TAB(56);"-------"
742 FOR X=0.1 TO 5 STEP 0.1
743 GOSUB 43280
744 PRINT X;TAB(8);Y;TAB(24);(LOG(X)-Y);
745 F=X
746 X=Y
747 GOSUB 43470
748 PRINT TAB(40);Y;TAB(56);(F-Y)
749 X=F
750 NEXT X
751 END
752 '   BASE 10 LOGARITHM AND EXPONENT APPROXIMATION DEMONSTRATION
753 PRINT" X";TAB(8);" LOG(X) ";TAB(24);" DELTA ";TAB(40);"10**(LOG(X))";TAB(56);" DELTA "
754 PRINT"---";TAB(8);"--------";TAB(24);"-------";TAB(40);"-----------";TAB(56);"-------"
755 FOR X=0.1 TO 5 STEP 0.1
756 GOSUB 43260
757 PRINT X;TAB(8);Y;TAB(24);(0.4342944#*LOG(X)-Y);
758 F=X
759 X=Y
760 GOSUB 43450
761 PRINT TAB(40);Y;TAB(56);(F-Y)
762 X=F
763 NEXT X
764 END
1000 '   ********************
1010 '   PRINTING SUBROUTINE
1020 PRINT
1030 FOR I=1 TO M
1040 FOR J=1 TO N
1050 PRINT TAB(6*J);INT(C(I,J)*100+0.5)/100;
1060 NEXT J
1070 PRINT
1080 NEXT I
1090 PRINT
1100 RETURN
39998 '    PLOTTING SUBROUTINE (EQAPLOT)
39999 '    SHIFT DATA TO NON-NEGATIVE
40000 B=10000000.#
40001 '    FIND MINIMUM DATA VALUE
40002 FOR I=1 TO N
40003 IF B>D(I) THEN B=D(I)
40004 NEXT I
40005 '    SUBTRACT MINIMUM VALUE FROM ALL DATA
40006 FOR I=1 TO N
40007 D(I)=D(I)-B
40008 NEXT I
40009 '    FIND MAX. SHIFTED DATA VALUE
40010 C=0
40011 FOR I=1 TO N
40012 IF C<D(I) THEN C=D(I)
40013 NEXT I
40014 '    DETERMINE PRINTING SCALE VALUE
40015 A=L/C
40016 '    FIND TAB POSITION OF ZERO
40017 E=A*ABS(B)
40018 PRINT
40019 PRINT
40020 PRINT"***** DATA PLOT (SCALED) *****"
40021 PRINT
40022 PRINT
40023 PRINT"MIN. ORDINATE=  ";B;"    MAX. ORDINATE= ";C+B
40024 PRINT"INITIAL ABSCISSA VALUE= ";X1
40025 PRINT
40026 PRINT
40027 '    IF B IS POSITIVE, SKIP ZERO LABEL
40028 IF B>0 THEN GOTO 40034
40029 '    IF DATA ARE ALL BELOW ZERO, SKIP LABEL
40030 IF ABS(B)>C THEN GOTO 40034
40031 '    LABEL ZERO
40032 PRINT TAB(E);"0"
40033 '    GO TO AXIS PRINT SUBROUTINE
40034 GOSUB 40200
40035 FOR I=1 TO N
40036 '    INSERT LINE FEED FOR AUTO SPACING
40037 IF INT(0.6*L/N)<1 THEN GOTO 40041
40038 FOR K=1 TO INT(0.6*L/N):PRINT ":";TAB(L);":"
40039 NEXT K
40040 '    LOCATE DATUM POSITION
40041 E2=A*D(I)
40042 '    FORMATTED PRINT
40043 IF E2>=1 THEN GOTO 40046
40044 PRINT"*";
40045 GOTO 40049
40046 PRINT":";
40047 PRINT TAB(E2);"*";
40048 IF INT(E2)=L THEN GOTO 40050
40049 PRINT TAB(L);":";
40050 PRINT
40051 NEXT I
40052 '    GO TO AXIS PRINT SUBROUTINE
40053 GOSUB 40200
40054 PRINT
40055 PRINT
40056 PRINT"END ABSCISSA VALUE= ";X2
40057 PRINT
40058 PRINT
40059 '    RETURN TO DATA SOURCE PROGRAM
40060 RETURN
40098 '    TWO DIMENSIONAL DATA PLOTTING SUBROUTINE (DATAPLOT)
40099 '    SHIFT DATA TO NON-NEGATIVE
40100 B=10000000.#
40101 '    FIND MINIMUM DATA VALUE
40102 FOR I=1 TO N
40103 IF B>D(I) THEN B=D(I)
40104 NEXT I
40105 '    SUBTRACT MINIMUM VALUE FROM ALL DATA
40106 FOR I=1 TO N
40107 D(I)=D(I)-B
40108 NEXT I
40109 '    FIND MAX. SHIFTED DATA VALUE
40110 C=0
40111 FOR I=1 TO N
40112 IF C<D(I) THEN C=D(I)
40113 NEXT I
40114 '    DETERMINE E(I), THE ABSCISSA SPACINGS
40115 E(0)=0
40116 E(N)=1
40117 FOR I=2 TO N
40118 E(I-1)=INT(0.5*(C(I))*L/(C(N)-C(1))+0.5)
40119 '    SPACING SCALED ACCORDING TO LINE WIDTH
40120 NEXT I
40121 '    DETERMINE PRINTING SCALE VALUE
40122 A=L/C
40123 '    FIND TAB POSITION OF ZERO
40124 E=A*ABS(B)
40125 PRINT
40126 PRINT
40127 PRINT"***** DATA PLOT (SCALED) *****"
40128 PRINT
40129 PRINT
40130 PRINT"MIN. ORDINATE  ";B;"    MAX. ORDINATE= ";C+B
40131 PRINT"INITIAL ABSCISSA VALUE= ";C(1)
40132 PRINT
40133 PRINT
40134 '    IF B IS POSITIVE, SKIP ZERO LABEL
40135 IF B>0 THEN GOTO 40141
40136 '    IF DATA ARE ALL BELOW ZERO, SKIP LABEL
40137 IF ABS(B)>C THEN GOTO 40141
40138 '    LABEL ZERO
40139 PRINT TAB(E);"0"
40140 '    GO TO AXIS PRINT SUBROUTINE
40141 GOSUB 40200
40142 FOR I=1 TO N
40143 '    INSERT FEED FOR ABSCISSA SPACING
40144 IF E(I-1)<1 THEN GOTO 40148
40145 FOR K=1 TO E(I-1):PRINT":";TAB(L);":"
40146 NEXT K
40147 '    LOCATE DATUM POSITION
40148 E2=A*D(I)
40149 '    TEST FOR MULTIPLE ORDINATE ABSCISSSA
40150 IF E(I)=0 THEN GOTO 40161
40151 '    FORMATTED PRINT
40152 IF E2>=1 THEN GOTO 40155
40153 PRINT"*";
40154 GOTO 40158
40155 PRINT":";
40156 PRINT TAB(E2);"*";
40157 IF INT(E2)=L THEN GOTO 40159
40158 PRINT TAB(L);":";
40159 PRINT
40160 GOTO 40175
40161 '    TEST FOT OVERLAY OF POINTS
40162 '    IF DUPLICATE POINT, SKIP TO END
40163 IF D(I)=D(I+1) THEN GOTO 40175
40164 IF E2>=1 THEN GOTO 40168
40165 '    PRINT DOUBLE VALUES ON ONE LINE
40166 PRINT"*";TAB(A*D(I+1));"*";
40167 GOTO 40171
40168 PRINT":";
40169 PRINT TAB(E2);"*";TAB(A*D(I+1));"*";
40170 '    TEST IF LINE LIMIT REACHED
40171 IF INT(A*D(I+1))=L THEN GOTO 40173
40172 PRINT TAB(L);":";
40173 PRINT
40174 I=I+1
40175 NEXT I
40176 '    GO TO AXIS PRINT SUBROUTINE
40177 GOSUB 40200
40178 PRINT
40179 PRINT
40180 PRINT"END ABSCISSA VALUE= ";C(N)
40181 PRINT
40182 PRINT
40183 '    RETURN TO DATA SOURCE PROGRAM
40184 RETURN
40199 '    AXIS PLOT (AXISPLOT)
40200 E3=E-5*INT(E/5)
40201 '    IF B IS POSITIVE, THEN SKIP ZERO LABEL
40202 IF B>0 THEN E3=0
40203 '    IF B IS GREATER THAN THE LARGEST VALUE, SKIP
40204 IF ABS(B)>C THEN E3=0
40205 IF E3<1 THEN GOTO 40208
40206 FOR J=1 TO E3:PRINT"-";
40207 NEXT J
40208 IF (L-E3)/5<1 THEN GOTO 40211
40209 FOR J=1 TO (L-E3)/5:PRINT"I----";
40210 NEXT J
40211 PRINT"I";
40212 E4=(J-1)*5+1+E3
40213 IF E4=L+1 THEN PRINT
40214 IF E4=L+1 THEN GOTO 40221
40215 E4=E4+1
40216 IF E4>L+1 THEN GOTO 40219
40217 PRINT"-";
40218 GOTO 40215
40219 PRINT":"
40220 '    RETURN TO MAIN PLOTTING PROGRAM
40221  RETURN
40229 '    COMPLEX NUMBER ADDITION SUBROUTINE (ZADD)
40300 X(3)=X(1)+X(2)
40301 Y(3)=Y(1)+Y(2)
40302 RETURN
40349 '    COMPLEX NUMBER SUBTRACTION SUBROUTINE (ZSUB)
40350 X(3)=X(1)-X(2)
40351 Y(3)=Y(1)-Y(2)
40352 RETURN
40399 '    RECTANGULAR TO POLAR CONVERSION SUBROUTINE (RECT/POL)
40400 U=SQR(X*X+Y*Y)
40401 '    GUARD AGAINST AMBIGUOUS VECTOR
40402 IF Y=0 THEN Y=(0.1)^30
40403 '    GUARD AGAINST DIVIDE BY ZERO
40404 IF X=0 THEN X=(0.1)^30
40405 '    SOME BASICS REQUIRE A SIMPLE ARGUMENT
40406 W=Y/X
40407 V=ATN(W)
40408 '    CHECK QUADRANT AND ADJUST
40409 IF X<0 THEN V=V+3.1415926535#
40410 IF V<0 THEN V=V+6.2831853072#
40411 RETURN
40449 '    POLAR TO RECTANGULAR CONVERSION SUBROUTINE (POL/RECT)
40450 X=U*COS(V)
40451 Y=U*SIN(V)
40452 RETURN
40499 '    POLAR MULTIPLICATION SUBROUTINE (ZPOLMLT)
40500 U=U(1)*U(2)
40501 V=V(1)+V(2)
40502 IF V>=6.2831853072# THEN V=V-6.2831853072#
40503 RETURN
40549 '    POLAR DIVISION SUBROUTINE (ZPOLDIV)
40550 U=U(1)/U(2)
40551 V=V(1)-V(2)
40552 IF V<0 THEN V=V+6.2831853072#
40553 RETURN
40599 '    RECTANGULAR COMPLEX NUMBER MULTIPLICATION SUBROUTINE (ZRECTMLT)
40600 X=X(1)
40601 Y=Y(1)
40602 '    RECTANGULAR TO POLAR CONVERSION
40603 GOSUB 40400
40604 U(1)=U
40605 V(1)=V
40606 X=X(2)
40607 Y=Y(2)
40608 '    RECTANGULAR TO POLAR TO POLAR CONVERSION
40609 GOSUB 40400
40610 U(2)=U
40611 V(2)=V
40612 '    POLAR MULTIPLICATION
40613 GOSUB 40500
40614 '    POLAR TO RECTANGULAR CONVERSION
40615 GOSUB 40450
40616 RETURN
40799 '    RECTANGULAR COMPLEX NUMBER DIVISION SUBROUTINE (ZRECTDIV)
40800 X=X(1)
40801 Y=Y(1)
40802 '    RECTANGULAR TO POLAR CONVERSION
40803 GOSUB 40400
40804 U(1)=U
40805 V(1)=V
40806 X=X(2)
40807 Y=Y(2)
40808 '    RECTANGULAR TO POLAR CONVERSION
40809 GOSUB 40400
40810 U(2)=U
40811 V(2)=V
40812 '    POLAR COMPLEX NUMBER DIVISION
40813 GOSUB 40550
40814 '    POLAR TO RECTANGULAR CONVERSION
40815 GOSUB 40450
40816 RETURN
41099 '    POLAR POWER SUBROUTINE (ZPOLPOW)
41100 U1=U^N
41101 V1=N*V
41102 V1=V1-6.2831853072#*INT(V1/6.2831853072#)
41103 RETURN
41149 '    POLAR (FIRST) ROOT SUBROUTINE (ZPOLRT)
41150 U1=U^(1/N)
41151 V1=V/N
41152 RETURN
41198 '    RECTANGULAR COMPLEX NUMBER POWER SUBROUTINE (ZRECTPOW)
41199 '    RECTANGULAR TO POLAR CONVERSION
41200 GOSUB 40400
41201 '    POLAR POWER
41202 GOSUB 41100
41203 '    CHANGE VARIABLEFOR CONVERSION
41204 U=U1
41205 V=V1
41206 '    POLAR TO RECTANGULAR CONVERSION
41207 GOSUB 40450
41208 RETURN
41298 '    RECTANGULAR COMPLEX NUMBER ROOT SUBROUTINE (ZRECTRT)
41299 '    RECTANGULAR TO POLAR CONVERSION
41300 GOSUB 40400
41301 '    POLAR (FIRST) ROOT
41302 GOSUB 41150
41303 U=U1
41304 '    FIND M ORDER ROOT
41305 '    M=1 CORRESPONDSTO THE FIRST ROOT
41306 V=V1+6.2831853072#*(M-1)/N
41307 '    POLAR TO RECTANGULAR CONVERSION
41308 GOSUB 40450
41309 RETURN
41399 '    SPHERICAL TO RECTANGULAR (CARTESIAN) CONVERSION SUBROUTINE (SPR/RECT)
41400 X=U*(SIN(W))*COS(V)
41401 Y=U*(SIN(W))*SIN(V)
41402 Z=U*COS(W)
41403 RETURN
41448 '    RECTANGULAR (CARTESIAN) TO SPHERICAL CONVERSION SUBROUTINE (RECT/SPR)
41449 '    RECTANGULAR TO POLAR CONVERSION
41450 GOSUB 40400
41451 '    SAVE AND CHANGE VARIABLES
41452 V1=V
41453 X=U
41454 Y=Z
41455 '    RECTANGULAR TO POLAR CONVERSION
41456 GOSUB 40400
41457 IF V>1.5707963268# THEN V=V-6.28318553072#
41458 W=1.5707963268#-V
41459 V=V1
41460 RETURN
41498 '    VECTOR ADDITION SUBROUTINE (VECTADD)
41499 '    C=A+B
41500 FOR I=1 TO N
41501 C(I)=A(I)+B(I)
41502 NEXT I
41503 RETURN
41548 '    VECTOR SUBTRACTION SUBROUTINE (VECTSUB)
41549 '    C=A-B
41550 FOR I=1 TO N
41551 C(I)=A(I)-B(I)
41552 NEXT I
41553 RETURN
41598 '    VECTOR DOT PRODUCT SUBROUTINE (VECTDOT)
41599 '    C=A.B
41600 C=0
41601 FOR I=1 TO N
41602 C=C+A(I)*B(I)
41603 NEXT I
41604 RETURN
41648 '    VECTOR CROSS PRODUCT SUBROUTINE (VECTCURL)
41649 '    C=A X B
41650 C(1)=A(2)*B(3)-A(3)*B(2)
41651 C(2)=A(3)*B(1)-A(1)*B(3)
41652 C(3)=A(1)*B(2)-A(2)*B(1)
41653 RETURN
41699 '    VECTOR LENGTH SUBROUTINE (VECTLEN)
41700 L=0
41701 FOR I=1 TO N
41702 L=L+A(I)*A(I)
41703 NEXT I
41704 L=SQR(L)
41705 RETURN
41747 '    VECTOR ANGLE SUBROUTINE (VECTANGL)
41748 '    ANGLE BETWEEN A AND B
41749 '    FIND DOT PRODUCT
41750 GOSUB 41600
41751 '    FIND LENGTH OF A
41752 GOSUB 41700
41753 '    SAVE VALUE
41754 L1=L
41755 '    FIND LENGTH OF B
41756 FOR I=1 TO N
41757 A(I)=B(I)
41758 NEXT I
41759 GOSUB 41700
41760 E=C/(L*L1)+(0.1)^30
41761 E=SQR(1-E*E)/E
41762 A=ATN(E)
41763 IF C<0 THEN A=3.1415926536#-A
41764 RETURN
41798 '    MATRIX ADDITION SUBROUTINE (MATADD)
41799 '    C=A+B
41800 FOR I=1 TO M
41801 FOR J=1 TO N
41802 C(I,J)=A(I,J)+B(I,J)
41803 NEXT J
41804 NEXT I
41805 RETURN
41848 '    MATRIX SUBTRACTION SUBROUTINE (MATSUB)
41849 '    C=A-B
41850 FOR I=1 TO M
41851 FOR J=1 TO N
41852 C(I,J)=A(I,J)-B(I,J)
41853 NEXT J
41854 NEXT I
41855 RETURN
41898 '    MATRIX MULTIPLICATION SUBROUTINE (MATMULT)
41899 '    C=A X B   A IS M1 BY N1   B IS M2 BY N2   C IS 1 BY N2
41900 FOR I=1 TO M1
41901 FOR J=1 TO N2
41902 C(I,J)=0
41903 FOR K=1 TO N1
41904 C(I,J)=C(I,J)+A(I+K)*B(K,J)
41905 NEXT K
41906 NEXT J
41907 NEXT I
41908 RETURN
41948 '    MATRIX TRANSPOSE SUBROUTINE (MATTRANS)
41949 '    B=TRANSPOSE(A)
41950 FOR I=1 TO N
41951 FOR J=1 TO M
41952 B(I,J)=A(J,I)
41953 NEXT J
41954 NEXT I
41955 RETURN
41998 '    DIAGONAL MATRIX CREATION SUBROUTINE (MATDIAG)
41999 '    MATRIX B(I,J) IS THE IDENTITY MATRIX TIMES 
42000 FOR I=1 TO N
42001 FOR J=1 TO N
42002 B(I,J)=0
42003 IF I=J THEN B(I,J)=B
42004 NEXT J
42005 NEXT I
42006 RETURN
42048 '    MATRIX SAVE (A IN B) SUBROUTINE (MATSAVAB)
42049 '    N1,N2 AND N3 ARE INPUT INDICES
42050 IF N1*N2*N3=0 THEN GOTO 42060
42051 '    CHECK DIMENSION
42052 FOR I1=1 TO N1
42053 FOR I2=1 TO N2
42054 FOR I3=1 TO N3
42055 B(I1,I2,I3)=A(I1,I2,I3)
42056 NEXT I3
42057 NEXT I2
42058 NEXT I1
42059 RETURN
42060 IF N1*N2=0 THEN GOTO 42067
42061 FOR I1=1 TO N1
42062 FOR I2=1 TO N2
42063 B(I1,I2)=A(I1,I2)
42064 NEXT I2
42065 NEXT I1
42066 RETURN
42067 IF N1=0 THEN RETURN
42068 FOR I1=1 TO N1
42069 B(I1)=A(I1)
42070 NEXT I1
42071 RETURN
42073 '    MATRIX SAVE (B IN A) SUBROUTINE (MATSAVBA)
42074 '    NI,N2 AND N3 ARE INPUT INDICES
42075 IF N1*N2*N3=0 THEN GOTO 42085
42076 '    CHECK DIMENSIONS
42077 FOR I1=1 TO N1
42078 FOR I2=1 TO N2
42079 FOR I3=1 TO N3
42080 A(I1,I2,I3)=B(I1,I2,I3)
42081 NEXT I3
42082 NEXT I2
42083 NEXT I1
42084 RETURN
42085 IF N1*N2=0 THEN GOTO 42092
42086 FOR I1=1 TO N1
42087 FOR I2=1 TO N2
42088 A(I1,I2)=B(I1,I2)
42089 NEXT I2
42091 RETURN
42092 IF N1=0 THEN RETURN
42093 FOR I1=1 TO N1
42094 A(I1)=B(I1)
42095 NEXT I1
42096 RETURN
42098 '    MATRIX SAVE (C IN B) SUBROUTINE (MATSAVCB)
42099 '    N1,N2 AND N3 ARE INPUT INDICES
42100 IF N1*N2*N3=0 THEN GOTO 42110
42101 '    CHECK DIMENSION
42102 FOR I1=1 TO N1
42103 FOR I2=1 TO N2
42104 FOR I3=1 TO N3
42105 B(I1,I2,I3)=C(I1,I2,I3)
42106 NEXT I3
42107 NEXT I2
42108 NEXT I1
42109 RETURN
42110 IF N1*N2=0 THEN GOTO 42117
42111 FOR I1=1 TO N1
42112 FOR I2=1 TO N2
42113 B(I1,I2)=C(I1,I2)
42114 NEXT I2
42115 NEXT I1
42116 RETURN
42117 IF N1=0 THEN RETURN
42118 FOR I1=1 TO N1
42119 B(I1)=C(I1)
42120 NEXT I1
42121 RETURN
42123 '    MATRIX SAVE (B IN C) SUBROUTINE (MATSAVBC)
42124 '    N1,N2 AND N3 ARE INPUT INDICES
42125 IF N1*N2*N3=0 THEN GOTO 42135
42126 '    CHECK DIMENSION
42127 FOR I1=1 TO N1
42128 FOR I2=1 TO N2
42129 FOR I3=I TO N3
42130 C(I1,I2,I3)=B(I1,I2,I3)
42131 NEXT I3
42132 NEXT I2
42133 NEXT I1
42134 RETURN
42135 IF N1*N2=0 THEN GOTO 42142
42136 FOR I1=1 TO N1
42137 FOR I2=1 TO N2
42138 C(I1,I2)=B(I1,I2)
42139 NEXT I2
42140 NEXT I1
42141 RETURN
42142 IF N1=0 THEN RETURN
42143 FOR I1=1 TO N1
42144 C(I1)=B(I1)
42145 NEXT I1
42146 RETURN
42148 '    MATRIX SAVE (A IN C) SUBROUTINE (MATSAVAC)
42149 '    N1,N2 AND N3 ARE INPUT INDICES
42150 IF N1*N2*N3=0 THEN GOTO 42160
42151 '    CHECK DIVISION
42152 FOR I1=1 TO N1
42153 FOR I2=1 TO N2
42154 FOR I3=1 TO N3
42155 C(I1,I2,I3)=A(I1,I2,I3)
42156 NEXT I3
42157 NEXT I2
42158 NEXT I1
42159 RETURN
42160 IF N1*N2=0 THEN GOTO 42167
42161 FOR I1=1 TO N1
42162 FOR I2=1 TO N2
42163 C(I1,I2)=A(I1,I2)
42164 NEXT I2
42165 NEXT I1
42166 RETURN
42167 IF N1=0 THEN RETURN
42168 FOR I1=1 TO N1
42169 C(I1)=A(I1)
42170 NEXT I1
42171 RETURN
42173 '    MATRIX SAVE (C IN A) SUBROUTINE (MATSAVCA)
42174 '    N1,N2 AND N3 ARE INPUT INDICES
42175 IF N1*N2*N3=0 THEN GOTO 42185
42176 '    CHECK DIMENSION
42177 IF N1*N2=0 THEN GOTO 42192
42178 FOR I2=1 TO N2
42179 FOR I3=1 TO N3
42180 A(I1,I2,I3)=C(I1,I2,I3)
42181 NEXT I3
42182 NEXT I2
42183 NEXT I1
42184 RETURN
42186 FOR I1=1 TO N1
42187 FOR I2=1 TO N2
42188 A(I1,I2)=C(I1,I2)
42189 NEXT I2
42190 NEXT I1
42191 RETURN
42192 IF N1=0 THEN RETURN
42193 FOR I1=1 TO N1
42194 A(I1)=C(I1)
42195 NEXT I1
42196 RETURN
42198 '    SCALAR B X MATRIX A SUBROUTINE (MATSCALE)
42199 '    N1,N2 AND N3 ARE INPUT INDICES
42200 IF N1*N2*N3=0 THEN GOTO 42210
42201 '    CHECK DIMENSION
42202 FOR I1=1 TO N1
42203 FOR I2=1 TO N2
42204 FOR I3=1 TO N3
42205 A(I1,I2,I3)=B*A(I1,I2,I3)
42206 NEXT I3
42207 NEXT I2
42208 NEXT I1
42209 RETURN
42210 IF N1*N2=0 THEN GOTO 42217
42211 FOR I1=1 TO N1
42212 FOR I2=1 TO N2
42213 A(I1,I2)=B*A(I1,I2)
42214 NEXT I2
42215 NEXT I1
42216 RETURN
42217 IF N1=0 THEN RETURN
42218 FOR I1=1 TO N1
42219 A(I1)=B*A(I1)
42220 NEXT I1
42221 RETURN
42223 '    MATRIX A CLEAR SUBROUTINE (MATCLRA)
42224 '    N1,N2, AND N3 ARE INPUT INDICES
42225 IF N1*N2*N3=0 THEN GOTO 42235
42226 '    CHECK DIMENSION
42227 FOR I1=1 TO N1
42228 FOR I2=1 TO N2
42229 FOR I3=1 TO N3
42230 A(I1,I2,I3)=0
42231 NEXT I3
42232 NEXT I2
42233 NEXT I1
42234 RETURN
42235 IF N1*N2=0 THEN GOTO 42242
42236 FOR I1=1 TO N1
42237 FOR I2=1 TO N2
42238 A(I1,I2)=0
42239 NEXT I2
42240 NEXT I1
42241 RETURN
42242 IF N1=0 THEN RETURN
42243 FOR I1=1 TO N1
42244 A(I1)=0
42245 NEXT I1
42246 RETURN
42248 '    ROW SWITCHING SUBROUTINE (MATSWCH)
42249 '    ROWS N1 AND N2 ARE INTERCHANGED
42250 FOR J=1 TO N
42251 B=A(N1,J)
42252 A(N1,J)=A(N2,J)
42253 A(N2,J)=B
42254 NEXT J
42255 RETURN
42273 '    ROW MULTIPLICATION/ADD SUBROUTINE (MATRMAD)
42274 '    B TIMES ROW N1 ADDED TO N2
42275 ROW J=1 TO N
42276 A(N2,J)=A(N2,J)+B*A(N1,J)
42277 NEXT J
42278 RETURN
42296 '    COFACTOR K SUBROUTINE (MATCOFAT)
42297 '    INPUT MATRIX SIZE IS N X N
42298 '    MATRIX A(I,J) IN, MATRIX B(I,J) OUT
42299 '    FIRST SHIFT UP ONE ROW
42300 FOR I=2 TO N
42301 FOR J=1 TO N
42302 B(I-1,J)=A(I,J)
42303 NEXT J
42304 NEXT I
42305 FOR I=1 TO N-1
42306 FOR J=K TO N
42307 IF K=N THEN GOTO 42309
42308 B(I,J)=B(I,J=1)
42309 NEXT J
42310 NEXT I
42311 RETURN
42348 '    MATRIX DETERMINANT SUBROUTINE (MATDET)
42349 '    FINDS DETERMINANT FOR UP TO A 4 X 4 MATRIX
42350 IF N>=2 THEN GOTO 42355
42351 '    ********************
42352 '    FIRST ORDER DETERMINANT
42353 D=A(1,1)
42354 RETURN
42355 IF N>=3 THEN GOTO 42360
42356 '    ********************
42357 '    SECOND ORDER DETERMINANT
42358 D=A(1,1)*A(2,2)-A(1,2)*A(2,1)
42359 RATURN
42360 IF N>=4 THEN GOTO 42370
42361 '    ********************
42362 '    THIRD ORDER DETERMINANT
42363 D=A(1,1)*(A(2,2)*A(3,3)-A(2,3)*A(3,2))
42364 D=D-A(1,2)*(A(2,1)*A(3,3)-A(2,3)*A(3,1))
42365 D=D+A(1,3)*(A(2,1)*A(3,2)-A(2,2)*A(3,1))
42366 RETURN
42367 '    ********************
42368 '    FOURTH ORDER DETERMINANT
42369 '    SAVE A IN C
42370 N1=N
42371 N2=N
42372 N3=0
42373 GOSUB 42150
42374 IF N>=5 THEN RETURN
42375 '    D1 WILL BE THE DETERMINANT
42376 D1=0
42377 '    FIND DETERMINANT OF EACH COFACTOR
42378 FOR K=1 TO 4
42379 '    GET COFACTOR K
42380 GOSUB 42300
42381 '    COFACTOR RETURNED IN B
42382 '    MOVE B TO A
42383 GOSUB 42075
42384 '    GET DET(A)
42385 GOSUB 42363
42386 D1=D1+C(1,K)*D
42387 '    REVERSE SIGN FOR NEXT COFACTOR
42388 D1=-D1
42389 '    SAVE C IN A
42390 GOSUB 42175
42391 NEXT K
42392 D=D1
42393 RETURN
42395 '    MATRIX INVERSION SUBROUTINE (MATINV)
42396 '    GAUSS-JORDAN ELIMINATION
42397 '    MATRIX A IS INPUT, MATRIX B IS OUTPUT
42398 '    DIM A=N X N    TEMPORARY DIM B=N X 2N
42399 '    FIRST CREATE MATRIX WITH A ON THE LEFT AND I ON THE RIGHT
42400 FOR I=1 TO N
42401 FOR J=1 TO N
42402 B(I,J+N)=0
42403 B(I,J)=A(I,J)
42404 NEXT J
42405 B(I,I+N)=1
42406 NEXT I
42407 '    PERFORM ROW ORIENTD OPERATIONS TO CONVERT THE LEFT HAND
42408 '    SIDE OF B TO THE IDENTITY MATRIX. THE INVERSE OF A WILL
42409 '    THEN BE ON THE RIGHT
42410 FOR K=1 TO N
42411 IF K=N THEN GOTO 42424
42412 M=K
42413 '    FIND MAXIMUM ELEMENT
42414 FOR I=K+1 TO N
42415 IF ABS(B(I,K))>ABS(B(M,K)) THEN M=I
42416 NEXT I
42417 IF M=K THEN GOTO 42424
42418 J=K TO 2*N
42419 B=B(K,J)
42420 B(K,J)=B(M,J)
42421 B(M,J)=B
42422 NEXT J
42423 '    DIVIDE ROW K
42424 FOR J=K+1 TO 2*N
42425 B(K,J)=B(K,J)/B(K,K)
42426 NEXT J
42427 IF K=1 THEN GOTO 42434
42428 FOR I=1 TO K-1
42429 FOR J=K+1 TO 2*N
42430 B(I,J)=B(I,J)-B(I,K)*B(K,J)
42431 NEXT J
42432 NEXT I
42433 IF K=N THEN GOTO 42441
42434 FOR I=K+1 TO N
42435 FOR J=K+1 TO 2*N
42436 B(I,J)=B(I,J)-B(I,K)*B(K,J)
42437 NEXT J
42438 NEXT I
42439 NEXT J
42440 '    RETRIEVE INVERSE FROM THE RIGHT SIDE OF B
42441 FOR I=1 TO N
42442 FOR J=1 TO N
42443 B(I,J)=B(I,J+N)
42444 NEXT J
42445 NEXT I
42446 RETURN
42693 '    EIGENVALUE (POWER METHOD) SUBROUTINE (EIGENPOW)
42694 '    AX=LX
42695 '    A IS THE N X N MATRIX
42696 '    B IS AN ARBITRARY VECTOR
42697 '    E IS THE RELATIVE ERROR CHOSEN
42698 '    D = COUNT OF THE NUMBER OF ITERATIONS
42699 '    SET PARAMETERS NEEDED FOR MULTIPLY SUBROUTINE
42700 M1=N
42701 N1=N
42702 M2=N
42703 N2=1
42704 '    GENERATE ARBITRARY NORMALIZED VECTOR B(I,1)
42705 FOR I=1 TO N
42706 B(I,1)=1/SQR(N)
42707 NEXT I
42708 '    B = LAST EIGENVALUE ESTIMATE
42709 '    A = CURRENT EIGENVALUE ESTIMATE
42710 '    PICK AN INITIAL VALUE FOR THE EIGENVALUE GUESS
42711 B=1
42712 D=0
42713 '    START ITERATION
42714 A=0
42715 GOSUB 41900
42716 '    CONVERT C OUTPUT TO B
42717 FOR I=1 TO N
42718 B(I,1)=C(I,1)
42719 A=A+B(I,1)*B(I,1)
42720 NEXT I
42721 D=D+1
42722 A=SQR(A)
42723 '   NORMALIZE VECTOR
42724 FOR I=1 TO N
42725 B(I,1)=B(I,1)/A
42726 NEXT I
42727 IF ABS((A-B)/A<E THEN RETURN
42728 B=A
42729 IF D>D1 THEN RETURN
42730 GOTO 42714
42796 '   MATRIX EXPONENT SUBROUTINE (MATEXP)
42797 '   INPUTS TO THE SUBROUTINE ARE THE MATRIX A, MATRIX
42798 '   SIZE N, NUMBER OF TERMS K2, AND VARIABLE X
42799 '   SET UP INDICES TO BE USED LATER
42800 N1=N
42801 N2=N
42802 N3=0
42803 M1=N
42804 M2=N
42805 '   GUARD AGAINST DIVIDE BY ZERO
42806 IF X=0 THEN X=1.000000e-13
42807 '   INITIALIZE STORAGE MATRIX D(I,J)
42808 FOR I=1 TO N
42809 FOR J=1 TO N
42810 D(I,J)=O
42811 NEXT J
42812 NEXT I
42813 '   K2 IS THE NUMBER OF TERMS TO BE CALCULATED
42814 K1=0
42815 '   CREATE IDENTITY MATRIX IN B
42816 B=1
42817 GOSUB 42000
42818 '   MOVE B TO C
42819 GOSUB 42125
42820 '   ADD TO D
42821 GOSUB 42847
42822 K1=K1+1
42823 IF K1>=K2 THEN GOTO 42838
42824 '   SCALE MATRIX A BY X/K1
42825 B=X/K1
42826 GOSUB 42200
42827 '   MULTIPLY A TIMES B
42828 GOSUB 41900
42829 '   ADD RESULT TO MATRIX D
42830 GOSUB 42847
42831 '   MOVE C TO B
42832 GOSUB 42100
42833 '   RETURN MATRIX A TO ORIGINAL CONDITION
42834 B=K1/X
42835 GOSUB 42200
42836 '   CONTINUE SUMMATION
42837 GOTO 42822
42838 '   MOVE RESULT IN D TO C
42839 FOR I=1 TO N
42840 FOR J=1 TO N
42841 C(I,J)=D(I,J)
42842 NEXT J
42843 NEXT I
42844 '   RETURN TO CALLING PROGRAM
42845 RETURN
42846 '   D(I,J) IS USED FOR TEMPORARY STORAGE
42847 FOR I=1 TO N
42848 FOR J=1 TO N
42849 D(I,J)=D(I,J)+C(I,J)
42850 NEXT J
42851 NEXT I
42852 RETURN
42899 '   LINEAR RANDOM NUMBER GENERATOR (LINEAR)
42900 '   U=MEAN, V=SPREAD, D=SEED
42901 I9=I9+1
42902 A=3.14149265358979#
42903 B=2.71828182845904#
42904 C=1.14142135623731#
42905 D=1+ABS(D)
42906 E=E+(1+D/B)*C
42907 E=E*I9
42908 E=E-A*INT(E/A)
42909 E=E-INT(E)+0.018
42910 IF E>0.1 THEN E=E+0.009000001
42911 IF E>0.2 THEN E=E-0.002
42912 IF E>0.3 THEN E=E-0.005
42913 IF E>0.4 THEN E=E-0.005
42914 IF E>0.5 THEN E=E-0.015
42915 E=V*(E-0.5)+U
42916 RETURN
42923 '   NORMAL DISTRIBUTION BY CENTRAL LIMIT THEOREM (NORMAL)
42924 '   U=MEAN, V=STANDARD DEVIATION, E=RANDOM NO. GENERATED
42925 E=0
42926 FOR I9=1 TO 48
42927 E=E+RND(0.9990001)-0.5
42928 NEXT I9
42929 E=V*E/2+U
42930 RETURN
42948 '   POISSON RANDOM NUMBER GENERATOR (POISSON)
42949 '   INPUT PARAMETER U
42950 X=RND(0.9990001)*EXP(U)
42951 X1=1
42952 Y1=1
42953 Y=0
42954 IF X1>X THEN GOTO 42959
42955 Y=Y+1
42956 Y1=Y1*U/Y
42957 X1=X1+Y1
42958 GOTO 42954
42959 IF Y>0 THEN Y=Y-(X1-X)/Y1
42960 E=Y
42961 RETURN
42972 '   BINOMIAL RANDOM NUMBER GENERATOR (BINOMIAL
42973 '   B=PROBABILITY PER TRIAL
42974 '   N=NUMBER OF TRIALS
42975 E=0
42976 FOR K=1 TO N
42977 Y1=RND(0.9990001)
42978 IF Y<B THEN E=E+1
42979 NEXT K
42980 RETURN
42998 '   EXPONENTIAL RANDOM NUMBER GENERATOR (EXPONENT)
42999 '   U=MEAN
43000 X=RND(0.9990001)
43001 E=U*LOG(1-X)
43002 RETURN
43023 '   FERMI RANDOM NUMBER GENERATOR (FERMI)
43024 '   U=INFLECTION POINT, V=SPREAD OF TRANSITION REGION
43025 X=RND(0.9990001)
43026 Y=1
43027 A=EXP(4*U/V)
43028 B=(X-1)*LOG(1+A)
43029 Y1=B+LOG(A+EXP(Y))
43030 IF ABS((Y-Y1)/Y)<0.001 THEN GOTO 43033
43031 Y=Y1
43032 GOTO 43029
43033 E=V*Y1/4
43034 RETURN
43048 '   CAUCHY RANDOM NUMBER GENERATOR (CAUCHY)
43049 '   U=MEAN
43050 X=RND(0.9990001)
43051 E=U*SIN(1.5707963267#)/COS(1.5707963267#*X)
43052 RETURN
43073 '   GAMMA (N=2) RANDOM NUMBER GENERATOR (GAMMA
43074 '   B=INPUT PARAMETER
43075 Y=1
43076 X=RND(0.9990001)
43077 Y1=-LOG((1-X)/(1+Y)
43078 IF ABS((Y1-Y)/Y)<0.001 THEN GOTO 43081
43079 Y=Y1
43080 GOTO 43077
43081 E=B*Y1
43082 RETURN
43096 '   BETA RANDOM NUMBER GENERATOR (BETA)
43097 '   INPUT PARAMETERS ARE A AND B
43098 '   A IS RESTRICTED TO A=1 AND A=2
43099 '   GUARD AGAINST DIVIDE BY ZERO
43100 IF B>0 THEN GOTO 43103
43101 E=1
43102 RETURN
43103 '   B>0
43104 IF A>2 THEN RETURN
43105 X=RND(0.9990001)
43106 IF A=2 THEN GOTO 43109
43107 E=1-(1-X)**(1/B)
43108 RETURN
43109 Y=1
43110 Y1=1-((1-X)/(1+B*Y))**(1/B)
43111 IF ABS((Y-Y1)/Y)<0.001 THEN GOTO 43114
43112 Y=Y1
43113 GOTO 43110
43114 E-Y1
43115 RETURN
43148 '   WEIBULL RANDOM NUMBER GENERATOR (WEIBULL)
43149 '   INPUT PARAMETERS ARE U AND V
43150 X=RND(0.9990001)
43151 E=U*((LOG(1/(1-X)))**(1/V))
43152 RETURN
43199 '   SERIES SUMMATION SUBROUTINE (SERSUM)
43200 Y=0
43201 FOR I=N TO 0 STEP -1
43202 Y=Z*Y+A(I)
43203 NEXT I
43204 RETURN
43209 '   SINE SERIES SUBROUTINE (SINE)
43210 X1=1
43211 IF X<0 THEN X1=-1
43212 X3=ABS(X)
43213 X2=3.14159265358979#
43214 '   REDUCE RANGE
43215 X3=X3-2*X2*INT(0.5*X3/X2)
43216 IF X3>X2 THEN X1=-X1
43217 IF X3>X2 THEN X3=X3-X2
43218 IF X3>X2/2 THEN X3=X2-X3
43219 Z=X3*X3
43220 GOSUB 43300
43221 GOSUB 43200
43222 Y=X1*X3*Y
43223 RETURN
43224 '   COSINE SERIES SUBROUTINE (COSINE)
43225 X2=3.14159265358979#
43226 X1=1
43227 '   REDUCE RANGE
43228 X3=ABS(X)
43229 X3=X3-2*X2*INT(0.5*X3/X2)
43230 IF X3>X2 THEN X1=-1
43231 IF X3>X2 THEN X3=X3-X2
43232 IF X3>X2/2 THEN X1=-X1
43233 IF X3>X2/2 THEN X3=X2-X3
43234 Z=X3*X3
43235 GOSUB 43310
43236 GOSUB 43200
43237 Y=X1*Y
43238 RETURN
43244 '   ARCTANGENT SERIES SUBROUTINE (ARCTAN)
43245 X1=1
43246 IF X<0 THEN X1=-1
43247 X3=ABS(X)
43248 Z1=(X3-1)/(X3+1)
43249 IF X3<0.5 THEN Z1=X3
43250 Z=Z1*Z1
43251 '   GET SERIES COEFFICIENTS
43252 GOSUB 43320
43253 '   SUM SERIES
43254 GOSUB 43200
43255 Y=Z1*Y
43256 IF X3>=0.5 THEN Y=Y+0.78539816339745#
43257 Y=X1*Y
43258 RETURN
43259 '   LOG BASE TEN SERIES SUBROUTINE (LOG(X))
43260 X1=1
43261 C=-1
43262 X2=10
43263 X3=X
43264 IF X>=1 THEN GOTO 43268
43265 X=1/X
43266 X1=-1
43267 '   REDUCE RANGE
43268 X=X2*X
43269 C=C+1
43270 X=X/X2
43271 IF X>X2 THEN GOTO 43269
43272 Z1=(X-3.16227766#)/(X+3.16227766#)
43273 Z=Z1*Z1
43274 GOSUB 43340
43275 GOSUB 43200
43276 Y=X1*(C+Z1*Y+0.5)
43277 X=X3
43278 RETURN
43279 '   NATURAL LOGARITHM SERIES SUBROUTINE (LN(X))
43280 X1=1
43281 C=-1
43282 X2=2.71828182845904#
43283 X3=X
43284 IF X>=1 THEN GOTO 43288
43285 X=1/X
43286 X1=-1
43287 '   REDUCE RANGE
43288 X=X2*X
43289 C=C+1
43290 X=X/X2
43291 IF X>X2 THEN GOTO 43289
43292 Z1=(X-1.6487212707#)/(X+1.6487212707#)
43293 Z=Z1*Z1
43294 GOSUB 43360
43295 GOSUB 43200
43296 Y=X1*(C+Z1*Y+0.5)
43297 X=X3
43298 RETURN
43299 '   SINE SERIES COEFFICIENTS (SINDATA)
43300 N=6
43301 A(0)=1
43302 A(1)=-0.166666666667133#
43303 A(2)=0.00833333333809067#
43304 A(3)=-0.000198412715551283#
43305 A(4)=0.0000027557589750762#
43306 A(5)=-2.50705987620700e-8#
43307 A(6)=1.64105986683000e-1#
43308 RETURN
43309 '   COSINE SERIES COEFFICIENTS (COSDATA)
43310 N=6
43311 A(0)=1
43312 A(1)=-0.4999999999982#
43313 A(2)=0.04166666664651#
43314 A(3)=-0.001388888805755#
43315 A(4)=0.000024801428034#
43316 A(5)=-2.75421332400000e-7#
43317 A(6)=2.01894050000000e-9#
43318 RETURN
43319 '   ARCTANGENT SERIES COEFFICIENTS (ARCDATA)
43320 N=10
43321 A(0)=1
43322 A(1)=-0.333333311286#
43323 A(2)=0.199998774421#
43324 A(3)=-0.142831560376#
43325 A(4)=0.110840091104#
43326 A(5)=-0.089229124381#
43327 A(6)=0.070315200033#
43328 A(7)=-0.04927890803#
43329 A(8)=0.026879941561#
43330 A(9)=-0.00956838452#
43331 A(10)=0.001605444922#
43332 RETURN
43339 '   LOG BASE TEN SERIES COEFFICIENTS (LOGDATA)
43340 N=9
43341 A(0)=0.8685889644#
43342 A(1)=0.2895297117#
43343 A(2)=0.1737120608#
43344 A(3)=0.1242584742#
43345 A(4)=0.093908046#
43346 A(5)=0.1009301264#
43347 A(6)=-0.0439630355#
43348 A(7)=-0.3920576195#
43349 A(8)=-0.5170494708#
43350 A(9)=0.4915571108#
43351 RETURN
43359 '   NATURAL LOGARITHM SERIES COEFFICIENTS (LNDATA)
43360 N=9
43361 A(0)=2
43362 A(1)=0.66666672443#
43363 A(2)=0.3999895288#
43364 A(3)=0.286436047#
43365 A(4)=0.197959107#
43366 A(5)=0.628353
43367 A(6)=-4.54692
43368 A(7)=28.117
43369 A(8)=-86.42
43370 A(9)=106.1
43371 RETURN
43379 '   POWER OF E SERIES COEFFICIENTS (EXPDATA)
43380 N=8
43381 A(0)=1
43382 A(1)=0.99999999668#
43383 A(2)=0.49999995173#
43384 A(3)=0.16666704243#
43385 A(4)=0.04166685027#
43386 A(5)=0.00832672635#
43387 A(6)=0.00140836136#
43388 A(7)=0.00017358267#
43389 A(8)=0.0000393168
43390 RETURN
43399 '   POWER OF TEN SERIES COEFFICIENTS (TENDATA)
43400 N=9
43401 A(0)=1
43402 A(1)=1.1512925485#
43403 A(2)=0.662737305#
43404 A(3)=0.2543345675#
43405 A(4)=0.0732032741#
43406 A(5)=0.0168603036#
43407 A(6)=0.0032196227#
43408 A(7)=0.000554766
43409 A(8)=0.0000573305
43410 A(9)=0.0000179419
43411 RETURN
43449 '   POWER OF TEN SERIES SUBROUTINE (TENPOW)
43450 X1=1
43451 X3=X
43452 IF X<0 THEN X1=-1
43453 X=ABS(X)
43454 '   REDUCE RANGE
43455 X2=INT(X)
43456 X=X-X2
43457 '   GET COEFFICIENTS
43458 GOSUB 43400
43459 Z=X
43460 '   SUM SERIES
43461 GOSUB 43200
43462 Y=Y*Y
43463 IF X2<1 THEN GOTO 43466
43464 FOR I=1 TO X2:Y=Y*10
43465 NEXT I
43466 IF X1<0 THEN Y=1/Y
43467 X=X3
43468 RETURN
43469 '   EXPONENT SERIES SUBROUTINE (EXP(X))
43470 X1=1
43471 X3=X
43472 IF X<0 THEN X1=-1
43473 X=ABS(X)
43474 '   REDUCE RANGE
43475 X2=INT(X)
43476 X=X-X2
43477 '   GET COEFFICIENTS
43478 GOSUB 43380
43479 Z=X
43480 '   SUM SERIES
43481 GOSUB 43200
43482 IF X2<1 THEN GOTO 43485
43483 FOR I=1 TO X2:Y=Y*2.71828182845904#
43484 NEXT I
43485 IF X1<0 THEN Y=1/Y
43486 X=X3
43487 RETURN
```
{% endraw %}

## TM-BREAK.BAS

{% raw %}
```bas
1 '****** MODIFICATION FOR PC-TALK, VERSION 2.0*****************
2 '
3 'FILENAME: TM-BREAK
4 '
5 'PURPOSE; PROVIDES TRUE BREAK UPON ALT-B
6 '
7 'DIRECTIONS: DELETE THE FIRST 10 LINES OF THIS FILE.  THEN SAVE AS
8 '            AN ASCII FILE (USE ",A OPTION OF BASIC SAVE COMMAND)
9 '            AND MERGE WITH VERSION 2.0 OF PC-TALK.
10 '*************************************************************
1235 '
1240 '
1245 '
1250 '     - Send Break Signal -
1255 '
1260 '
1265 IF CODE<>48 THEN 1300 ' specify break signal with Alt-B
1270 PRINT" <<< BREAK >>> ";:OLDVAL%=INP(&H3FB):BRKVAL%=OLDVAL% OR 64:OUT &H3FB,BRKVAL%:SOUND 32760,3:SOUND 32760,1:OUT &H3FB,OLDVAL%:GOTO 400
1275 '
1280 '
1285 '
1290 '
1295 '
1296 '
1297 '
1298 '  
```
{% endraw %}

## TM-DIAL2.BAS

{% raw %}
```bas
1 '****** MODIFICATION FOR PC-TALK, VERSION 2.0*****************
2 '
3 'FILENAME: TM-DIAL2
4 '
5 'PURPOSE;  PROVIDE AUTOMATIC READIAL FUNCTION.
6 '
7 'DIRECTIONS: DELETE THE FIRST 10 LINES OF THIS FILE.  THEN SAVE AS
8 '            AN ASCII FILE (USE ",A OPTION OF BASIC SAVE COMMAND)
9 '            AND MERGE WITH VERSION 2.0 OF PC-TALK.
10 '*************************************************************
152 REDIALDELAY=30  'delay aprox. in seconds. Should be = or > S7 modem param.
1075 '         - redial last # -
1080 IF CODE=16 AND DIAL$="" THEN BEEP:GOTO 400
1085 IF CODE=16 THEN GOTO 10100
1090 REDIALDELAY=3000:'
10100 '   -  Alt-Q Redial -
10110 '
10120 REDIAL=NOT REDIAL
10130 IF NOT REDIAL THEN PRINT"Redial Terminated.....":PRINT #1,CHR$(13):GOTO 400
10135 CLS:LOCATE 25,50:PRINT "Redial started at ";TIME$
10140 SOUND 750,1:SOUND 600,1
10150 PRINT: PRINT "Re-dialing ";N$;:PRINT R$:PRINT "Time = ";TIME$
10152 LOCATE 25,1:PRINT "REDIALING     ";:COLOR 23,0:PRINT"** HIT ANY KEY TO TERMINATE **":COLOR 7,0
10154 ZZ$="AT V1Q0E1 S0=0 "+MID$(MODEM$,3)
10155 PRINT #1, ZZ$+R$+CHR$(13)
10170  FOR I=1 TO 1000
10180  NEXT I
10190 WHILE NOT EOF(1)
10200 W$=INPUT$(LOC(1),#1)
10210 WEND
10250 IF EOF(1) THEN 10250
10255  FOR YZ!= 1 TO REDIALDELAY
10260 Q$=INPUT$(LOC(1),#1)
10270  FOR N=1 TO LEN(Q$)
10310 IF MID$(Q$,N,2)="CO" THEN PRINT Q$: GOTO 10350
10311 IF MID$(Q$,N,2)="NO" THEN LOCATE 24,1,0: PRINT MID$(Q$,N,10);
10315  NEXT N
10320 IF INKEY$<>"" THEN 10360
10330  FOR XZXZ= 1 TO 1000: NEXT XZXZ   ' Pause needed here for buffer fill
10340  NEXT YZ!
10345 GOTO 10140
10350 IF INKEY$="" THEN SOUND 600,4:SOUND 900,4:GOTO 10350
10360 CLS:LOCATE 12,20,1:PRINT"You are back in terminal operation . . . . ."
10370 REDIAL=FALSE:GOTO 400
```
{% endraw %}

## TM-LDIR1.BAS

{% raw %}
```bas
1 '****** MODIFICATION FOR PC-TALK, VERSION 2.0*****************
2 '
3 'FILENAME: TM-LDIR1
4 '
5 'PURPOSE:  EXPANDS DIRECTORY TO 4 PAGES. (DELETE PC-TALK.DIR BEFORE 1ST USE)
6 '
7 'DIRECTIONS: DELETE THE FIRST 10 LINES OF THIS FILE.  THEN SAVE AS
8 '            AN ASCII FILE (USE ",A OPTION OF BASIC SAVE COMMAND)
9 '            AND MERGE WITH VERSION 2.0 OF PC-TALK.
10 '*************************************************************
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
{% endraw %}

## TM-TIME1.BAS

{% raw %}
```bas
1 '****** MODIFICATION FOR PC-TALK, VERSION 2.0*****************
2 '
3 'FILENAME: TM-TIME1
4 '
5 'PURPOSE:  LEAVES CORRECT SYSTEM TIME AFTER USING PC-TALK.
6 '
7 'DIRECTIONS: DELETE THE FIRST 10 LINES OF THIS FILE.  THEN SAVE AS
8 '            AN ASCII FILE (USE ",A OPTION OF BASIC SAVE COMMAND)
9 '            AND MERGE WITH VERSION 2.0 OF PC-TALK.
10 '*************************************************************
140 RECV$="":TRAN$="":DIAL$=""
961 '
965 IF COMPU$<>"" THEN PRINT #1, MODEM$+COMPU$:TIMESTRT$=TIME$:GOTO 400
1011 '
1015 IF SOURCE$<>"" THEN PRINT #1, MODEM$+SOURCE$:TIMESTRT$=TIME$:GOTO 400
1068 PRINT #1, DIAL$:TIMESTRT$=TIME$:LOCATE,,1:GOTO 400
1180 IF CODE<>44 THEN 1200
1181 MINSTRT=VAL(MID$(TIMESTRT$,1,2))*60+VAL(MID$(TIMESTRT$,4,2))
1182 MINSTOP=VAL(MID$(TIME$,1,2))*60+VAL(MID$(TIME$,4,2))
1183 ELAPSEDMIN=INT(MINSTOP-MINSTRT)
1184 IF MINSTRT>MINSTOP THEN ELAPSEDMIN=ELAPSEDMIN+1440
1185 LOCATE  1,39:PRINT"UMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM8
1190 LOCATE  2,39:PRINT"3  Elapsed time this call = ";:COLOR HI,BG:PRINT ELAPSEDMIN;:PRINT" min   ";:COLOR FG,BG:LOCATE 2,75:PRINT"   3
6312 PRINT #1, DIAL$:TIMESTRT$=TIME$
```
{% endraw %}

## UNPROT.DOC

{% raw %}
```
THIS PROGRAM CALLED UN.P IS A BLOAD FROM BASIC
DESIGNED FOR UNPROTECTING A BASIC PROGRAM WHICH
WAS SAVED WITH THE ,P  EXTENSION.
 TO UTILIZE
LOAD BASIC
LOAD PROTECTED PROGRAM
TYPE  BLOAD"UN.P",1124
THEN YOU CAN LIST AND SAVE THE PROGRAM JUST LIKE
IT HAD NEVER BEEN PROTECTED.......
GOOD LUCK.... WE HAVE NO IDEA WHERE THIS CAME FROM
BUT I AM SURE EVERYONE WILL, SOME DAY THANK THEM...
p.s be sure that the un.p program is on the disk
in drive A:

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0067

     Volume in drive A has no label
     Directory of A:\

    GROWTH   BAS      5376   7-13-82
    CRC      TXT      1498  11-09-84  11:24a
    CRCK4    COM      1536  10-21-82   7:54p
    PRINTER  BAS      4992   7-17-82
    UN       P         128   7-13-82
    UNPROT   DOC       460   8-05-82
    REGRESS  BAS      1536   5-12-82
    NONLIN   BAS     29184   5-21-82
    FUNC2    BAS      1024
    FUNC1    BAS      1152   5-18-82
    DATA               128   8-27-83   1:30a
    BIGCHAR  BAS      1408
    LABELS   BAS      1280   6-28-82
    APPLECOM BAS       768   1-03-82
    CLKMOD   BAS      1536  11-07-82
    TM-BREAK BAS       768  10-23-82
    TM-DIAL2 BAS      1536  10-23-82
    TM-LDIR1 BAS      1408  10-23-82
    TM-TIME1 BAS      1152  10-23-82
    LABELEPS BAS      2816  11-11-82
    SCISUBV1 BAS     35840  11-19-82
    MATHFUNC BAS     15872   8-29-82
           22 file(s)     111398 bytes
                           45568 bytes free
