---
layout: page
title: "PC-SIG Library Disk #206"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0206/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0206"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "MATH NO 1"

    A collection of programs for working in and with BASIC programming
    tasks.  For instance, FACTOR, when run with BASIC, calculates
    factorials of integers, but does the math done so speedily there is no
    effective upper limit on number size.  SORT is a FAST sort module to be
    used in BASIC programs to speed up doing sorts in BASIC.
    
    For mathematical assistance, we have PUNYCALC which is a good "old math"
    representation of math functions.  MULTREG does multiple regression
    analysis specifically, for the beginner on up.
    
    Specialized and general helpers: CMP compares ALL types of files ASCII
    or binary.  PERTCHT is PERT version 1.1 written in BASIC to generate a
    critical path analysis of any project.  KEYPUNCH and VISICOM perform
    specialised functions.
    
    System Requirements: Some programs require BASIC
    
    How to Start:  From the DOS prompt (A:) enter PRINT *.DOC, ready
    your printer and print the document files for the files (there are 4 of
    them) they will then explain how to run the programs.
    
    File Descriptions:
    
    CMP      COM  File compare utility Version 1.0  (Jack Gersbach)
    CMP      DOC  Documentation
    FACTOR   BAS  Calculates factorials
    KEYPUNCH BAS  Programmable keypunching
    PERT     DAT  Part of PERTCHT.BAS
    MULTREG  EXE  Outstanding multiple regression analysis program
    VISICOM  DOC  Convert VISICALC to COM file  (Corrected by J Wright)
    SORTEST  BAS  Demo of SORT.BLD
    SORT     DOC  Documentation
    SORT     BLD  Machine language subroutine for BASIC programs
    PUNYCALC DOC  Documentation
    PUNYCALC BAS  Four function simple calculator  (S. Mones)
    PROFILE  MEM  Helps optimize BASIC programs
    PERTCHT  BAS  PERT schedule Version 1.1
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FACTOR.BAS

```bas
10 CLS
20 KEY OFF
30 PRINT "FACTORIALS"
40 DEFDBL F,N,X
50 PRINT
60 PRINT "ENTER THE NUMBER WHOSE FACTORIAL YOU WANT"
70 PRINT "(ENTER ZERO TO END)";
80 INPUT N
90 IF N<0 OR N<>INT(N) THEN 60
100 IF N=0 THEN END
110 F=1:J=0:I=0:K=0
120 IF N>69 THEN 220
130 REM CALCULATE USING RECURSIVE ALGORITHM
140 FOR I=2 TO N
150 F=F*I
160 IF F<1.000000e+1 THEN 190
170 F=F/1.000000e+1
180 J=J+10
190 NEXT I
200 GOTO 370
210 REM CALCULATE USING STIRLING'S APPROXIMATION
220 K=INT(N/5)
230 I=I+5
240 IF I>K*5 THEN 350
250 F=F*N*N*N*N*N/EXP(5)
260 IF F>1.000000e+3 THEN 290
270 IF F>1.000000e+2 THEN 320
280 GOTO 230
290 F=F/1.000000e+3
300 J=J+30
310 GOTO 260
320 F=F/1.000000e+2
330 J=J+20
340 GOTO 260
350 X=SQR(N*6.28318530718#)
360 F=(F*N^(N-K*5))/EXP(N-K*5)*X
370 PRINT "THE FACTORIAL OF";N;"IS";
380 PRINT CSNG(F);
390 IF J=0 THEN 410
400 PRINT "TIMES 10 TO THE POWER";J;", "
410 IF K>0 THEN 440
420 PRINT "COMPUTED RECURSIVELY"
430 GOTO 50
440 PRINT "COMPUTED BY STIRLING'S APPROXIMATION"
450 GOTO 50
460 END
```

## KEYPUNCH.BAS

```bas
10 DEFINT I-K:DIM CARD$(400):BS$=CHR$(29):FALSE=0:TRUE=NOT FALSE
20 KEY OFF:CLS:LOCATE 25,1:COLOR 0,7:SC$="----^----"
30 FOR I=1 TO 7:PRINT SC$;CHR$(I+48);:NEXT:PRINT SC$;
40 ON KEY(1) GOSUB 440:ON KEY(9) GOSUB 460:KEY(1) ON:KEY(9) ON
50 COLOR 7,0:LOCATE 5,1:PRINT TAB(25);"Programmable Keypunching Program"
60 PRINT:PRINT"Manual punching":PRINT TAB(7);"Numeric: N followed by -'s"
70 PRINT TAB(4);"Alphabetic: A followed by -'s":PRINT
80 PRINT"Auto dup punching: D followed by -'s"
90 PRINT:COLOR 15:PRINT "F1";:COLOR 7:PRINT ": Delete previous card"
100 COLOR 15:PRINT "F9";:COLOR 7:PRINT ": Save data and exit program"
110 COLOR 15:PRINT "ESC";:COLOR 7:PRINT ": Cancel current card":PRINT
120 PRINT"NEVER backspace outside the bounds of a program-defined field."
130 LOCATE 23,1:PRINT "Enter the program card (CAPS only please):"
140 LINE INPUT PROG$
150 LOCATE 25,1:PRINT SPACE$(79);:COLOR 0,7
160 IF LEN(PROG$)>79 THEN PROG$=LEFT$(PROG$,79)
170 LOCATE 25,1:PRINT PROG$;:COLOR 7,0:LOCATE 24,1:PROG$=PROG$+" "
180 I=0:IF INSTR(PROG$,"D")=0 THEN 210
190 PRINT "Enter the first card (to be used as a template)"
200 I=I+1:LINE INPUT CARD$(I)
210 I=I+1:J=1:LOCATE 1,60:COLOR 15:PRINT "PUNCHING CARD ";I:COLOR 7:LOCATE 24,1
220 IF MID$(PROG$,J,1)=" " THEN SOUND 900,5:PRINT:IF I<400 THEN 210 ELSE 460
230 ON INSTR("NAD-",MID$(PROG$,J,1)) GOTO 240,250,260,290
240 SOUND 2100,1:NUM=TRUE:GOTO 290
250 SOUND 2100,1:NUM=FALSE:GOTO 290
260 SOUND 2100,1
270 CARD$(I)=CARD$(I)+MID$(CARD$(1),J,1):PRINT MID$(CARD$(1),J,1);:J=J+1
280 IF MID$(PROG$,J,1)="-" THEN 270 ELSE 220
290 LOCATE ,,1:B$=INKEY$:IF B$="" THEN 290
300 IF LEN(B$)>1 THEN 290
310 IF B$<>CHR$(13) THEN 340
320 IF MID$(PROG$,J,1)<>"-" THEN 220
330 CARD$(I)=CARD$(I)+" ":PRINT " ";:J=J+1:GOTO 320
340 IF B$<>CHR$(27) THEN 360 ELSE CARD$(I)=""
350 PLAY"MBL64CDEF":LOCATE ,1:PRINT SPACE$(79);:LOCATE ,1:I=I-1:GOTO 210
360 IF B$<>CHR$(8) THEN 380 ELSE IF POS(0)=1 THEN 290
370 PRINT BS$;" ";BS$;:J=J-1:CARD$(I)=LEFT$(CARD$(I),J-1):GOTO 290
380 IF NOT NUM THEN 410
390 IF B$<>" " AND (B$<"0" OR B$>"9") THEN SOUND 100,3:GOTO 290
400 CARD$(I)=CARD$(I)+B$:PRINT B$;:J=J+1:GOTO 220
410 IF B$<" " THEN SOUND 100,5:GOTO 290
420 IF B$>="0" AND B$<="9" THEN SOUND 100,3:GOTO 290
430 CARD$(I)=CARD$(I)+B$:PRINT B$;:J=J+1:GOTO 220
440 CARD$(I)="":CARD$(I-1)="":I=I-2:PLAY "MBL64CDEFFEDC"
450 LOCATE ,1:PRINT SPACE$(79);:LOCATE CSRLIN-1,1:PRINT SPACE$(79);:RETURN 210
460 PRINT:PRINT "Please enter the name of the file to receive the data,"
470 PRINT "or enter A or B to get a listing of the files on that drive.
480 PRINT "If the file already exists, this data will be appended to it."
490 INPUT "",FILE$:IF FILE$="" THEN 460
500 ON ERROR GOTO 560
510 IF FILE$="a" OR FILE$="A" THEN FILES "A:*.*":GOTO 460
520 IF FILE$="b" OR FILE$="B" THEN FILES "B:*.*":GOTO 460
530 OPEN FILE$ FOR APPEND AS #1:I=I-1
540 FOR J=1 TO I:PRINT #1,CARD$(J):NEXT
550 CLOSE #1:CLS:PRINT"Data saved":KEY ON:END
560 BEEP:CLOSE #1
570 IF ERR=64 THEN PRINT"Bad file name. Try again.":RESUME 460
580 IF ERR=67 THEN PRINT"Disk directory is full. Try another disk.":RESUME 460
590 IF ERR=70 THEN PRINT"Disk is write protected-Try another disk.":RESUME 460
600 IF ERR=71 THEN PRINT"Check the disk drive.":RESUME 460
610 IF ERR=72 THEN PRINT"Bad disk. Try another.":RESUME 460
620 ON ERROR GOTO 0
```

## PERTCHT.BAS

```bas
10 '     PROGRAM: ENHANCED PERT          SOURCE: BYTE, MAY, 1982, PG. 469ff.
20 '     FUNCTION: PERT-CHARTING         DATE:   5/1/82
30 '     VERSION:  1.1                   AUTHOR: T. V. BONOMA
40 '
42 SCREEN 0,1,0,0:WIDTH 80
45 DEFDBL M,X,P
47 KEY OFF
50 CLEAR 5000: CLS
60 WIDTH 80: COLOR 5,0,5:LOCATE 1,23:PRINT "PERT/CRITICAL PATH SCHEDULING"
70 LOCATE 3,23: COLOR 7: PRINT "ORIGINAL BY S.M. ZIMMERMAN/L.M. CONRAD"
80 LOCATE 5,23: COLOR 9: PRINT "MODIFIED/ADAPTED FOR IBM PC BY"
90 LOCATE 7,23: COLOR 15: PRINT "THOMAS V. BONOMA   MAY, 1982"
100 COLOR 7,0,0:PRINT:PRINT"Note:  Beginning Events will be sorted numerically"
105 LOCATE 12,1
110 FOR I= 1 TO 16: FOR J=1 TO 15:Q=J:IF Q >15 THEN Q =0
115 COLOR Q:PRINT CHR$(1);:NEXT J:NEXT I
120 DIM A$(500,2),A(500,11),SV(11)
130 CLS: LOCATE 5,25: COLOR 15,0,0: PRINT "MENU FOR INPUT CHOICES"
135 FOR HOLDIT = 1 TO 700:NEXT HOLDIT
140 COLOR 7,0,8: LOCATE 7,20: PRINT "K - Keyboard"
150 COLOR 3:LOCATE 8,20: PRINT "D - Disk File"
160 COLOR 11:LOCATE 9,20: PRINT "R - Read Statements already in program"
170 LOCATE 14,40:COLOR 15,0,0: INPUT "What is your selection  ";IO$
175 IF IO$<>"D" AND IO$<>"R" AND IO$<>"K" AND IO$<>"d" AND IO$<>"r" AND IO$<>"k"        THEN 130
180 COLOR 7,0,0: IF IO$<>"K" AND IO$<>"k" THEN 360
190 CLS: LOCATE 5,5: INPUT "How many different tasks do you have  ";M%:EE=0
200 COLOR  4,0,9:  PRINT: PRINT "OK...let's enter them one at a time.  For each, we'll want"
210 PRINT "an activity code, a description,  a beginning and ending 'event"
220 PRINT "   number', and optimistic and pessimistic completion estimates."
230 COLOR 8:PRINT: PRINT "Hit any key to enter data":COLOR 7,0,0
240 TR$=INPUT$(1)
250 CLS: COLOR 3,0,0: LOCATE 1,35: PRINT "DATA ENTRY ROUTINE"
260 COLOR 15,0,0: LOCATE 3,5: PRINT "Code":LOCATE 3,10:PRINT"Descript.": LOCATE     3,25:PRINT "Begin?":LOCATE 3,35:PRINT "End?":LOCATE 3,42:PRINT"Optimistic":     LOCATE 3,55:PRINT "Likely";:LOCATE 3,64:PRINT "Pessimistic"
270 X=4:COLOR 7,0,0
280 FOR I=1 TO M%
290 LOCATE X,7:INPUT"",A$(I,1):LOCATE X,11:INPUT "",A$(I,2):LOCATE X,27:INPUT       "",A(I,1):LOCATE X,36:INPUT "",A(I,2):LOCATE X,47:INPUT "",A(I,3):LOCATE        X,57:INPUT "",A(I,4):LOCATE X,69:INPUT "",A(I,5)
300 X=X+1
340 NEXT I
350  GOTO 460
360 IF IO$<>"D" AND IO$<>"d" THEN 470
370 CLS:LOCATE 5,30:COLOR 14,0,8:PRINT "DISK INPUT ROUTINE"
375 ON ERROR GOTO 15000
380 COLOR 7,0,8: PRINT:LINE INPUT "Name of disk file, e.g., B:xxxxxxx.yyy  ";           B$:OPEN "I",1,B$
400 INPUT#1, M%,EE
410 FOR I= 1 TO M%
420 INPUT#1, A$(I,1),A$(I,2),A(I,1), A(I,2), A(I,3),A(I,4),A(I,5)
430 IF A$(I,1)="END" THEN 540
440 NEXT I
450 CLOSE #1
460 GOTO 530
470 IF IO$<>"R" AND IO$<>"r" THEN 130
475 CLS:PRINT "Reading Data from Program....Please Wait.....":COLOR 7,0,0
480 READ M%,EE
490 FOR I=1 TO M%
500 READ A$(I,1),A$(I,2),A(I,1),A(I,2),A(I,3),A(I,4),A(I,5)
510 IF A$(I,1)="END" THEN 530
520 NEXT I
530 ' Verify the data which was entered.
540 M=M%: TP=0:FOR I = 1 TO M: IF A(I,2)>TP THEN TP=A(I,2)
550 NEXT I: EE= TP
560 FOR I=1 TO M-1
570 FOR J=I+1 TO M
580 IF A(I,1)<=A(J,1) THEN 610
590 FOR K=1 TO 11: SV(K)=A(I,K):A(I,K)=A(J,K):A(J,K)=SV(K):NEXT K
600 FOR K=1 TO 2: SV$(K)=A$(I,K):A$(I,K)=A$(J,K):A$(J,K)=SV$(K):NEXT K
610 NEXT J,I
620 CLS
630 XX=5: COLOR 14,0,0:PRINT TAB(25);"VERIFICATION OF INPUT":PRINT:COLOR 7,0,0
640 Z1$="Code Description   Expected  Early   Early    Last    Last   Slack"
650 Z2$="                    Time     Start    Fin.    Start   Fin.   Time"
660 Z3$="Code      Description          Begin    End    Optimist  Likely  Pessimist"
670 Z4$="                               Event   Event     Time     Time      Time  "
680 PRINT "No. ";Z3$
690 PRINT "    ";Z4$
700 K=0
710 C4$="### "
720 FOR I=1 TO M%
730 PRINT USING C4$;I;
740 C1$="  ####  "
750 C2$="\            \":C3$=" ####.## "
760 PRINT USING C2$;A$(I,1),A$(I,2);
770 FOR J=1 TO 2
780 PRINT USING C1$;A(I,J);:NEXT J
790 FOR J=3 TO 5
800 PRINT USING C3$;A(I,J);:NEXT J
810 K=K+1: IF K>=20 THEN MSG$ ="Enter to Page":LGTH=1:ANSWER$="":GOSUB 10000
820 PRINT: NEXT I
830 COLOR 7:  MSG$= "Please input a -2 to add more,-1 to continue, or number (E.G., 03) to change ":LGTH=2:GOSUB 10000:ANSWER=VAL(ANSWER$):L=ANSWER:IF L=-1 THEN 905
840 IF L<>-2 THEN 860
850 L=M%+1: M%=L:N%=N%+1:XCHECK=1:GOTO 860
860 IF L>M% THEN GOTO 830: ELSE GOSUB 20000:IF ABORT GOTO 830
865 INPUT "New Code Name/Letter or END to ABORT  ";A$(L,1)
867 IF A$(L,1)="END" THEN GOSUB 22000:GOTO 830
870 INPUT "New Description  ";A$(L,2): INPUT  "New Beginning Event Number  ";              A(L,1)
880 INPUT "New Ending Event Number"; A(L,2):INPUT "New Optimistic End  ";A(L,3)
890 INPUT "New Likely End  ";A(L,4):INPUT "New Pess. End  ";A(L,5)
900 GOTO 620
905 MSG$ ="Want hard copy of your data  ":LGTH=1:GOSUB 10000:P$=ANSWER$:            IF P$<>"Y" AND P$<>"y" THEN 1040
910 MSG$="Title ":LGTH=40:GOSUB 10000:T$=ANSWER$: LPRINT CHR$(14);"TITLE:  ";T$
920 LPRINT CHR$(14);"DATE: ";DATE$
930 LPRINT "NO "; Z3$
940 LPRINT "   "; Z4$
950 FOR I=1 TO M%
960 LPRINT USING C4$;I;
970 LPRINT USING C2$;A$(I,1),A$(I,2);
980 FOR J=1 TO 2
990 LPRINT USING C1$;A(I,J);:NEXT J
1000 FOR J=3 TO 5
1010 LPRINT USING C3$;A(I,J);:NEXT J
1020 LPRINT " "
1030 NEXT I
1040 MSG$="HIT ANY KEY TO COMPUTE RESULTS":LGTH=1:GOSUB 10000
1045 LOCATE 25,2: PRINT "WAIT.....";
1050 FOR I=1 TO M%
1060 A(I,6)=(A(I,3)+4*A(I,4)+A(I,5))/6
1070 IF A(I,1)=1 THEN A(I,7)=0:A(I,8)=A(I,6):GOTO 1110
1080 MAX = 0!
1090 FOR J= 1 TO M%
1092 IF A(J,2)<> A(I,1) THEN 1098
1094 IF A(J,8)> MAX THEN MAX = A (J,8)
1096 A(I,7)=MAX
1098 NEXT J
1100 A(I,8)=A(I,7)+A(I,6)
1110 NEXT I
1120 ' Backward pass?
1130 XM = 0!
1140 FOR I= M% TO 1 STEP -1
1150 IF A(I,2)<>EE THEN 1170
1160 IF XM<A(I,8) THEN XM = A(I,8)
1170 NEXT I
1180 FOR I=M% TO 1 STEP -1
1190 IF A(I,2)= EE THEN A(I,10)= XM: GOTO 1260
1200 MIM =999999!
1210 FOR J= M% TO 1 STEP -1
1220 IF A(I,2)<>A(J,1) THEN 1250
1230 IF A(J,9)<MIM THEN MIM =A(J,9)
1240 A(I,10)=MIM
1250 NEXT J
1260 A(I,9)=A(I,10)-A(I,6)
1270 NEXT I
1280 ' Slack Variable Calculations
1290 FOR I=1 TO M%
1300 A(I,11)=A(I,10)-A(I,8)
1310 NEXT I
1320 CLS:K=0        'PRINT OUTPUT
1325 COLOR 14,0,0:PRINT TAB(35);"RESULTS":PRINT:COLOR 7,0,0
1330 PRINT "Code       Description        Expected  Early   Early   Last   Last  Slack"
1340 PRINT "                               Time     Start   Fin.    Start  Fin.   Time"
1350 C5$=" ###.## "
1360 FOR I=1 TO M%
1365 IF A(I,11)=0 THEN COLOR 4 ELSE COLOR 7
1370 PRINT USING C2$;A$(I,1),A$(I,2);
1380 FOR J=6 TO 11
1390 PRINT USING C5$;A(I,J);:NEXT J
1400 PRINT:K=K+1:IF K=20 THEN MSG$="Enter to Page  ":LGTH=1:GOSUB 10000:ANSWER$      =DU$:K=0
1410 NEXT I
1420 MSG$="Hard Copy of Results  (Y/N)  ":LGTH=1:GOSUB 10000:P$=ANSWER$:               IF P$<>"y" AND P$<>"Y" THEN 1490
1430 LPRINT " ":LPRINT Z1$:LPRINT Z2$
1440 FOR I= 1 TO M%
1450 LPRINT A$(I,1);"   ";:LPRINT USING C2$;A$(I,2);
1460 FOR J=6 TO 11
1470 LPRINT USING C5$;A(I,J);:NEXT J
1480 LPRINT "   ":NEXT I
1490 CLS: COLOR 15,0,0:LOCATE 5,30: PRINT "OUTPUT MENU" :COLOR 7,0,0
1500 COLOR 4:LOCATE 7,20:PRINT "C - Critical Path and Time":COLOR 6
1510 LOCATE 8,20: PRINT "D - Disk":COLOR 1
1520 LOCATE 9,20: PRINT "E - END ":COLOR 7
1530 LOCATE 10,20: PRINT "R - Recycle"
1540 LOCATE 20,35: COLOR 15,0,0: INPUT "Choice, please...  ";OP$:IF OP$="R"             OR OP$="r" THEN 530
1550 IF OP$<>"C" AND OP$<>"c" THEN 1720
1560 'Identification of critical path and costs
1570 CO=0:PATH$=" ":SI=0
1580 FOR I=1 TO M%: IF A(I,11)>.000001 THEN 1600
1590 CO=CO+A(I,6):PATH$=PATH$+" "+A$(I,1):SI=SI+((A(I,3)-A(I,5))/6)^2
1600 NEXT I:C6$="###,###,###.##":SI=SQR(SI)
1610 CLS:LOCATE 5,30:COLOR 4,0,0:PRINT "CRITICAL PATH":PRINT PATH$:PRINT:               COLOR 7,0,0
1620 PRINT "Time of Critical Path  ":PRINT USING C6$;CO:INPUT "Scheduled Project Time (use same time units as data)   ";ST:Z=(ST-CO)/SI:XX=0
1630 BB$="Probability of being completed on time ": IF Z<0 THEN 1670
1640 A=.4361836:B=-.1201676:C=.937298: D=(2.7182818#^(-Z^2/2))*(2*3.1415926#)^            (-.5):E=(1+.3326*Z)^(-1):P=1#-D*(A*E+B*E^2+C*E^3):IF XX>0 THEN 1660
1650 COLOR 12,0,4:PRINT USING "Z= ##.###    ";Z;:PRINT BB$;:PRINT USING "#.###";P:              COLOR 7,0,3:GOTO 1680
1660 PRINT USING "Z= ##.###    ";-Z;:PRINT BB$;:PRINT USING "#.###";1-P:COLOR 7:           GOTO 1680
1670 XX=99: Z=-Z:GOTO 1640
1680 MSG$="Hard Copy (Y/N) ":LGTH=1:GOSUB 10000:P$=ANSWER$:                                   IF P$<>"y" AND P$<>"Y" THEN 1490
1690 LPRINT " ":LPRINT "CRITICAL PATH":LPRINT PATH$:LPRINT " ":LPRINT "Scheduled project time is  ";ST
1700 LPRINT "Time of critical path ":LPRINT USING C6$;CO: IF XX=0 THEN LPRINT "Z= ";         Z;"   ";BB$;P:GOTO 1490
1710 IF OP$="E" AND OP$="e" THEN END
1720 IF OP$<>"D" AND OP$<>"d" THEN 1770
1730 LINE INPUT "Name of disk:file ";X$:OPEN "O",1,X$
1740 PRINT#1,M%,EE
1750 FOR I=1 TO M%:PRINT#1,CHR$(34);A$(I,1);CHR$(34);",";CHR$(34);A$(I,2);              CHR$(34);A(I,1);A(I,2);A(I,3);A(I,4);A(I,5):NEXT I
1760 CLOSE #1: GOTO 1490
1770 SCREEN 0,0,0:WIDTH 80:COLOR 9,0,0:PRINT "ENDING...";:COLOR 7,0,0:                FOR I=1 TO 1000:NEXT: KEY ON:END
1775 DATA 18,9
1780 DATA "A","ACCT. PAPERS",1,2,1,2,3
1790 DATA "Z","PERMITS", 2,7,4,5,8
1800 DATA "B", "SHOP BANKERS", 1,3,2,4,6
1810 DATA "C","SHOP REAL EST.", 1,4,2,13,17
1820 DATA "D","MARKET STUDY", 2,3,2,4,5
1830 DATA "G","CONTRACTOR", 2,5,1.4,2.2,6.7
1850 DATA "H","ART PLANS", 3,5,2,4,6
1860 DATA "E","COST STUDY", 3,4,3,4,5
1870 DATA "I","LAND", 4,5,8,11,13
1880 DATA "J","MATERIAL", 5,6,2,3,4
1890 DATA "K","PLANS", 5,7,2,5,12
1900 DATA "L","SURVEY", 5,8,1,2,4
1910 DATA "M","BUY MAT #1", 6,8,2,3,4
1920 DATA "O","BUY MAT #2", 6,9,1,2,5
1930 DATA "N","LAYOUT", 7,8,9,11,12
1940 DATA "P","FOUNDATION", 8,9,1,3,6
1950 DATA "Q","HIRE CREW 2", 7,9, 1,2,3
1960 DATA "F","INSURANCE", 2,6,.4,1.3,1.5
10000 REM This subroutine saves the cursor position as ONCE (Col. or Y)
10010 REM and WAS (Row or X), locates the cursor on the 25th status line
10020 REM gets an input value (string only), and returns the cursor to
10030 REM where it ONCE WAS.
10040 REM             Input Variables = MSG$;Output = ANSWER$
10050 REM                               LGTH of desired ANSWER
10060 ' Store cursor position
10070   ONCE = CSRLIN
10080   WAS  = POS(0)
10085 ANSWER$=""        'empty the answer string
10090 ' Make sure softkeys are off, locate cursor on 25th line
10100   KEY OFF
10110   LOCATE 25,3
10120 ' Print the message the user requests and get an input
10130   PRINT MSG$;:ANSWER$=INPUT$(LGTH)
10150 ' Clear off the line for future use
10160   LOCATE 25,1:PRINT SPC(79);
10170 ' Restore the cursor to where it was
10180   LOCATE ONCE, WAS
10190   RETURN
15000 REM This subroutine does some error-checking, for instance, for the
15010 REM open statement in line 390
15020 REM It requires a ON ERROR GOTO 15000 statement at front of program
15025 MISTEAK=0:WHEREAT=0
15030 MISTEAK = ERR: WHEREAT=ERL
15040 IF MISTEAK = 55 THEN CLOSE:RESUME
15050 IF MISTEAK = 53 THEN PRINT"CAN'T FIND THAT FILE - CATALOG: ":COLOR 3:PRINT      "A:":FILES "A:*.*":COLOR 9:PRINT "B:":FILES "B:*.*":PRINT:PRINT"WAIT...":       FOR I= 1 TO 7000:NEXT I:RESUME 130
15060 IF MISTEAK = 61 THEN PRINT"DISK IS FULL - PLEASE GET ANOTHER:FOR I=1 TO         3000:NEXT I:RESUME 1730
15070 IF MISTEAK = 64 THEN PRINT"THAT'S NOT A GOOD FILE NAME-USE B:XXXXXXX.YYY":            FOR I=1 TO 3000:NEXT I:RESUME 130
15075 IF MISTEAK = 68 THEN PRINT "THAT DISK DOESN'T EXIST...USE A: OR B:":              FOR I=1 TO 3000:NEXT I: RESUME 130
15080 IF MISTEAK = 70 THEN PRINT "THE DISK IS WRITE-PROTECTED - CAN'T USE IT":          FOR I=1 TO 3000:NEXT I:RESUME 130
15090 IF MISTEAK = 71 THEN PRINT "CLOSE THE DISK DOOR":FOR I=1 TO 3000:NEXT I:          RESUME 130
15100 IF MISTEAK =72 THEN PRINT "I THINK THE DISK IS BAD":TRIES=TRIES+1:                IF TRIES<3 THEN RESUME ERL: ELSE PRINT "ENDING...CHECK DISK":                   FOR I=1 TO 3000:NEXT I:GOTO 1770
15105 IF MISTEAK =67 THEN PRINT "YOU HAVE TOO MANY FILES OPEN AT ONE TIME":             FOR I=1 TO 3000:NEXT I: RESUME 130
15110 ON ERROR GOTO 0: RESUME
20000 REM This subroutine switches the active and visual pages in SCREEN 0
20010 REM mode to page 1, thus allowing the programmer to put "help"
20020 REM material, ancillary input, or other messages on a "clean slate."
20022 ONCE = CSRLIN: WAS =POS(0)
20025 ABORT = 0
20030 SCREEN 0,1,1,1    'color burst, apage=1,vpage=1
20032 CLS
20035 KEY (1) ON
20037 ON KEY(1) GOSUB 22000
20040 LOCATE 25,1:COLOR 4:  PRINT "Hit <F1> key BEFORE entering to abort - I'll WAIT before going on";
20042 LOCATE 5,35: COLOR 3:PRINT "CHANGE ROUTINE":COLOR 9
20045 COLOR 9,8,0
20050 FOR I=1 TO 5000:NEXT I
20070 RETURN
22000 CLS:SCREEN 0,1,0,0
22010 ABORT=1
22015 IF ABORT AND XCHECK THEN M%=M%-1:N%=N%-1:XCHECK=0
22020 LOCATE ONCE,WAS
22030 RETURN
30000 GOTO 20070
30010 RETURN
```

## PUNYCALC.BAS

```bas
10 ' PunyCalc (c) 1983 by Stephen Manes.  All rights reserved.
20 ' no responsibility taken for errors, bugs, or anything else--I write fiction, not programs
30 'anybody caught selling this is in big trouble
40 'trespassers will be shot
50 'remember: send money if you like this--complaints if you don't
60 CLS
70           'shift the num lock
80 DEF SEG = &H40: POKE &H17, PEEK (&H17) OR 32
82           'can the cursor
85 LOCATE ,,0
90   SOUND 600,2
100   SOUND 30000,1
110   SOUND 300,2
120   SOUND 30000,1
130   SOUND 300,2 
140 KEY OFF: LOCATE 25,1: PRINT "                                                                            "
150 LOCATE 2,35
160   COLOR 0,15 
170   PRINT " PunyCalc! " 
180   COLOR 7,0  
190   LOCATE 3,35
200   PRINT "Version 1.1"
210 LOCATE 4,23
220   PRINT "Copyright (c) 1983 by Stephen Manes"
230 LOCATE 5,30
240   PRINT "All rights reserved."
250 LOCATE 7,37
260   PRINT "NOTICE:"
270                   'go get first screen
280                 GOSUB 3900
290 LOCATE 22,16 
300   COLOR 0,7 
310   PRINT " Type I for instructions, any other key to start ";
320   COLOR 7,0
330           'send for instructions
340 INS$=INPUT$(1)
350 IF INS$="I" OR INS$="i" THEN GOSUB 2400
360           'open keyboard,  clear the screen
370 OPEN "KYBD:" AS #1
380 CLS
390           'define the precisions
400 DEFDBL F,M,N,T: DEFINT A,B,C,E,I,J,K,L,O,P,Q
410 N=0:M=0  ' a possibly unnecessary declaration, but let it stand
420           ' send for the decimal format and printer on module
430 GOSUB 2060  
440                 ' initialize and format
450 DIM N(1000), V$(20), S$(1000) 'dimension the arrays
460      CLS
470 C=0:T=0:OVER=0  'initialize values
480 COLOR 1,0
490   PRINT "Entries:";
500   COLOR 7,0 
510   PRINT TAB(33);
520   COLOR 1,0
530   PRINT "Running Total:";
540   COLOR 7,0
550   PRINT
560           'if the printer is on
570 IF PR=1 THEN ON ERROR GOTO 3770
580 	      'send a format to the printer
590 IF PR=1 THEN LPRINT "Entries:";TAB(33);"Running Total:"
600         'either go to completion module or print total to screen
610 IF S$(C)="=" THEN GOTO 1720 ELSE PRINT S$(C);
620 I=0
630 IF C>950 THEN BEEP: PRINT "Warning: space for only 50 entries left!"
640 IF C>980 THEN BEEP: PRINT "WARNING: space for only 20 entries left!"
650 IF C>990 THEN BEEP: PRINT "WARNING: TOTAL this (=) within 5 entries or risk losing data!"
660 N$="" 'resets value to null
670             'begin main input
680 I=I+1
690 L=I-2: IF L<0 THEN L=0  'numeric backspace resetter
700 V$(I)=INPUT$(1)  'main input
710 A=ASC(V$(I))
720                  'backspace if no sign present
730 IF A=8 AND N$="" AND C=0 THEN BEEP: GOTO 700
740                  'backspace if sign present, no digits
750 IF A=8 AND N$="" AND C>0 THEN PRINT CHR$(29)+" "+CHR$(29); ELSE GOTO 820
760   S$(C)=""
770   GOSUB 3600
780   I=0
790   PRINT S$(C);
800   IF S$(C)="=" THEN GOTO 1640 ELSE GOTO 680
810                  'backspace if sign and digits present
820 IF A=8 AND N$<>"" THEN PRINT CHR$(29)+" "+CHR$(29); ELSE GOTO 880
830   N$=LEFT$(N$,L)
840   I=I-1
850   IF EMCTR<>2 THEN GOTO 690 ELSE GOSUB 3500
860   GOTO 690
870       'if number too great or memory already inserted, force entry of sign
880 IF EMCTR=2 THEN EMTRAP=1
890 IF I>16 OR EMCTR=2 THEN GOTO 1200
900                 'check to see if there's already a decimal point
910 IF A=46 THEN GOTO 920 ELSE GOTO 960
920   FOR P=1 TO I
930   F$=MID$(N$,P,1)
940 IF F$<>"." THEN NEXT P ELSE GOTO 1200
950      'add character$s if # or decimal, trap all else but M and signs 
960 IF A<58 AND A>47 OR A = 46 THEN N$=N$+V$(I) ELSE IF V$(I)="M" OR V$(I)="m" THEN GOTO 990 ELSE GOTO 1200 'adds character$s
970 PRINT V$(I);:GOTO 680  'types out entry on screen if # or decimal point
980      'deal with memory function -- only admissible char. left is M
990 IF I>1 THEN FM=M ELSE GOTO 1130
1000   M=VAL(N$)
1010     PRINT "M";
1020   EMCTR=2
1030     X=CSRLIN
1040     Y=POS(0)
1050     LOCATE 25,3
1060       COLOR 0,7
1070  M$=" M= "+N$
1080       PRINT USING "\                    \";M$;
1090 	  COLOR 7,0
1100       LOCATE X,Y
1110                 GOTO 1260
1120             'input old memory  (EMCTR=1 once you've done it on this pass)
1130 IF I=1 THEN EMCTR=1 ELSE GOTO 1200
1140   N$=STR$(M)
1150   I=LEN(N$)-1
1160   N$=RIGHT$(N$,I)
1170      PRINT N$;
1180                 GOTO 1260
1190        ' if acceptable entry, turn the input string into a number
1200 IF V$(I)="+" OR V$(I)="-" OR V$(I)="*" OR V$(I)="/" OR V$(I)="=" THEN C=C+1 ELSE GOTO 1250
1210   S$(C)=V$(I)
1220   N(C)=VAL(N$)
1230   GOTO 1290  
1240    ' if inadmissible entry, then beep, null, and go back for a new one
1250 BEEP
1260 V$(I)=""
1270 IF EMTRAP=1 THEN GOTO 700
1280          IF EMCTR>0 THEN GOTO 680 ELSE GOTO 700
1290 EMCTR=0: EMTRAP=0
1300            ' send you to the right operation  
1310 IF S$(C-1)="+" THEN GOTO 1320 ELSE IF S$(C-1)="-" THEN GOTO 1350 ELSE IF S$(C-1)="*" THEN GOTO 1380 ELSE IF S$(C-1)="/" THEN GOTO 1420 ELSE IF S$(C-1)="" THEN GOTO 1320    'sends you to correct module for operation
1320                    'addition module
1330 T=T+N(C)
1340 GOTO 1460
1350                  'subtraction module
1360 T=T-N(C)
1370 GOTO 1460
1380                 'multiplication module
1390 IF N$="" THEN GOTO 1410
1400 T=T*(N(C))
1410 GOTO 1460
1420                   'division module
1430 IF N(C)=0 THEN BEEP: PRINT " CAN'T DIVIDE BY ZERO!";: GOTO 1460
1440 T=T/(N(C))
1450      'if the printer is on, print out the entry (but nothing if null)
1460                   'overflow?
1470 IF T>9.999999e+11 THEN OVER=1
1480 IF PR=1 AND OVER=1 THEN LPRINT TAB(37) "OVERFLOW!":LPRINT
1490 IF OVER=1 THEN COLOR 15,0: PRINT TAB(30) "OVERFLOW!": GOTO 1740
1500      'if the printer is on, print out the entry (but nothing if null)
1510 IF PR=1 AND N$<>"" THEN LPRINT S$(C-1);N(C);TAB(28);:GOTO 1530
1520 IF PR=1 THEN LPRINT S$(C-1);" "; TAB(28)
1530 PRINT TAB(28);
1540 IF S$(C)="=" THEN COLOR 9,0
1550              'go print total to printer
1560 IF PR=1 THEN GOSUB 3640
1570                  'go print total to screen
1580 GOSUB 3380
1590        'get rounded total from screen for next calculation
1600 A=CSRLIN: Q=41+K
1610   FOR B=27 TO Q
1620     J=SCREEN (A,B)
1630     J$=CHR$(J)
1640     RT$=RT$+J$
1650     NEXT B
1660 T=VAL(RT$): RT$=""
1680   PRINT
1690                  'go get another number
1700 GOTO 610
1710          'back from the beginning for a closing module
1720 COLOR 15,0: PRINT TAB(35) "Total                                         "
1730 IF PR=1 THEN LPRINT TAB(37) "TOTAL": LPRINT
1740 PRINT TAB(10);
1750    COLOR 31,0
1760    SOUND 300,2
1770    PRINT " Quit PunyCalc? ";
1780    COLOR 7,0
1790   PRINT TAB(28) "(Y for yes, any other key to continue)";
1800 ANS$=INPUT$(1)
1810        ' the end: give back the cursor and the cursor pad
1820 IF ANS$="Y" OR ANS$="y" THEN DEF SEG = &H40: POKE &H17, PEEK (&H17) AND 223: CLS: LOCATE ,,1: KEY ON: END
1825                  'not the end: ask about clearing screen
1830 X=CSRLIN
1840 LOCATE X,1
1850   PRINT TAB(10);
1860   COLOR 31,0
1870   SOUND 300,2
1880   PRINT " Clear screen?  ";
1890   COLOR 7,0
1900 ANS$=INPUT$(1)
1910 IF ANS$="Y" OR ANS$="y" THEN CLS ELSE GOTO 1990
1915 IF M=0 THEN GOTO 470
1920          'reprint memory line if there is one
1930 LOCATE 25,3
1935   M$=STR$(M)
1939   M$=" M="+M$
1940   COLOR 0,7
1950   PRINT USING "\                    \";M$;
1960   COLOR 7,0
1970   LOCATE 1,1
1980         GOTO 470
1985 M$=""
1990 		'clear prompt line: move cursor back to beginning
2000 X=CSRLIN
2010   LOCATE X,1
2020   PRINT TAB(77);
2030   LOCATE X,1
2040                         GOTO 470  'begin a new calculation
2050           'choose the number of decimal places
2060 LOCATE 10,23
2070   PRINT "Select the number of decimal places"
2080 LOCATE 11,29
2090   PRINT "to appear in the total:"
2100 LOCATE 13,37
2110   COLOR 1,0
2120   PRINT "0 to 8"
2130   COLOR 7,0
2140 K$=INPUT$(1)
2150 K=ASC(K$)
2160 IF K<48 OR K>56 THEN BEEP ELSE GOTO 2220
2170 LOCATE 15,15
2180   COLOR 0,7
2190   PRINT " A number from 0 to 8, please--check the NUM LOCK key "
2200   COLOR 7,0
2210 GOTO 2140
2220 K=VAL(K$)
2230   PRINT K
2240 CLS
2250 LOCATE 10,20
2260   PRINT "Type Y if you want to use your printer."
2270 LOCATE 12,28
2280   PRINT "--any other key if not."
2290 H$=INPUT$(1)
2300 IF H$="Y" OR H$="y" THEN PR=1: GOTO 2330
2310 PR=0
2320             RETURN
2330 LOCATE 12,7
2340   COLOR 9,0
2350   PRINT "Okay.  Make sure your printer is on.  Then press any key to continue.";
2360   COLOR 7,0
2370 O$=INPUT$(1)
2380 CLS
2390              RETURN
2400 COLOR 0,7
2410 CLS
2420 LOCATE 1,28
2430   PRINT "Welcome to ";
2440   COLOR 7,0
2450   PRINT "Punycalc!"
2460   COLOR 0,7
2470 PRINT "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"
2480 LOCATE 3,10
2490   PRINT "The program that turns your IBM PC into a cheesy calculator!"
2500 LOCATE 5,5
2510   PRINT "How cheesy?  Well, it will NOT let you enter negative numbers."
2520 LOCATE 6,5
2530   PRINT "And it won't let you play with numbers bigger than 100 billion.*"
2532 LOCATE 7,5
2534 PRINT "And it doesn't have any fancy functions."
2536 LOCATE 8,5
2538 PRINT "But for simple calculations, it works just fine."
2540 LOCATE 10,5
2550   PRINT "Use the numeric keypad: the NUM LOCK shift is taken care of by software!"
2560 LOCATE 11,5
2570   PRINT "Enter numbers and symbols in algebraic order (i.e., 10+25/37*44-3=)."
2580 PRINT "    The equals (=) key gives a final total and clears memory."
2590 PRINT "    There's no need to use the enter key. (In fact, PunyCalc won't let you!)
2600 PRINT "    Erase entry errors with the backspace ("+CHR$(27)+") key."
2610 PRINT
2620 PRINT "    Answers will be rounded to the decimal place you select."
2625 PRINT "    You may enter numbers with up to 16 digits, but totals with"
2630 PRINT "      more than 12 digits before the decimal point will result in:
2670 PRINT TAB(35)
2680   COLOR 31,0
2690   PRINT " OVERFLOW! "
2700   COLOR 0,7
2710 PRINT "           (What else do you expect from a program called PunyCalc?)"
2720 PRINT
2730 PRINT "     *If you really need to work with larger numbers, let us know."
2740 PRINT "     We've never run into a hundred billion of anything--especially dollars."
2750 PRINT TAB(26);
2760   COLOR 7,0
2770   PRINT " Press any key to continue. ";
2780   COLOR 7,0
2790 Y$=INKEY$: IF Y$="" THEN 2790
2800 COLOR 0,7
2810   CLS
2820 LOCATE 2,32 
2830   PRINT "MEMORY FUNCTION:"
2840 LOCATE 5,5 
2850   PRINT "One number may be stored in PunyCalc's memory."
2860 LOCATE 7,5 
2870   PRINT "To do this, simply type M AFTER entering a number, "
2880 LOCATE 8,7 
2890   PRINT "and just BEFORE entering an operator sign."
2900 LOCATE 10,5
2910   PRINT "To call it up, just type M immediately AFTER typing an operator sign."
2920 LOCATE 11,7
2930   PRINT "The memory number will appear in the proper place on the screen."
2940 LOCATE 13,5
2950   PRINT "The current value of M is displayed on the bottom line of the screen."
2960 LOCATE 14,5
2970   PRINT "It will remain in PunyCalc's memory until you change it"
2980 LOCATE 15,7
2990   PRINT "by typing M after another numeric entry or by exiting PunyCalc."
3000 LOCATE 17,5: PRINT "If you change your mind about entering a new value for M,"
3010 LOCATE 18,7: PRINT "just use the backspace key.  It will immediately restore the old value"
3020 LOCATE 19,7: PRINT "and display it in the memory line.  Try it!"
3022 LOCATE 21,5: PRINT "And note that the letter M appears only onscreen for your convenience."
3025 LOCATE 22,7: PRINT "It will never appear in any printout."
3030 LOCATE 24,25
3040   COLOR 7,0: PRINT " Press any key to continue. ";
3050 Y$=INKEY$: IF Y$="" THEN 3050
3060 COLOR 0,7
3070   CLS
3080 LOCATE 5,10
3090   COLOR 7,0
3100   PRINT " THIS PROGRAM IS DISTRIBUTED WITHOUT WARRANTY OF ANY KIND. ";
3110   COLOR 0,7
3120 LOCATE 8,4
3130   PRINT "But if you like and use PunyCalc, a contribution would be appreciated."
3140 LOCATE 9,8
3150   PRINT "Send to:"
3160 LOCATE 11,20
3170   PRINT "Stephen Manes"
3180 LOCATE 12,20
3190   PRINT "5420 Netherland Avenue, Apt. B31"
3200 LOCATE 13,20
3210   PRINT "Bronx, NY 10471"
3220 LOCATE 15,16
3230   PRINT "If you have any comments, send them along, too--"
3240 LOCATE 16,16
3250   PRINT "we would like to update and improve this program."
3260 LOCATE 18,10
3270   PRINT "And please let friends and acquaintances copy this program."
3280 LOCATE 19,36
3290   PRINT "Thanks!"
3300 LOCATE 21,25
3310   COLOR 7,0
3320   PRINT " Press any key to continue. ";
3330 Y$=INKEY$: IF Y$="" THEN 3330
3340 COLOR 7,0
3350   CLS
3360              RETURN
3370           'print total to screen
3380 IF K$="0" THEN GOTO 3400 ELSE IF K$="1" THEN GOTO 3410 ELSE IF K$="2" THEN GOTO 3420 ELSE IF K$="3" THEN GOTO 3430 ELSE IF K$="4" THEN GOTO 3440 ELSE IF K$="5" THEN GOTO 3450
3390 IF K$="6" THEN GOTO 3460 ELSE IF K$="7" THEN GOTO 3470 ELSE IF K$="8" THEN GOTO 3480
3400 PRINT USING "############.";T;: RETURN
3410 PRINT USING "############.#";T;: RETURN
3420 PRINT USING "############.##";T;: RETURN
3430 PRINT USING "############.###";T;: RETURN
3440 PRINT USING "############.####";T;: RETURN
3450 PRINT USING "############.#####";T;: RETURN
3460 PRINT USING "############.######";T;: RETURN
3470 PRINT USING "############.#######";T;: RETURN
3480 PRINT USING "############.########";T;: RETURN
3490              'correcting memory via backspace or change
3500 X=CSRLIN
3510 Y=POS(0)
3520 LOCATE 25,3
3530   COLOR 0,7
3540 M=FM: M$=STR$(M): M$=" M= "+M$
3550   PRINT USING "\                    \";M$;
3560   COLOR 7,0
3570 LOCATE X,Y
3580 EMCTR=0
3590 RETURN
3600                     'forcing entry of a sign
3610 I=1: V$(I)=INPUT$(I)
3620 IF V$(I)="+" OR V$(I)="-" OR V$(I)="*" OR V$(I)="/" OR V$(I)="=" THEN S$(C)=V$(I): RETURN: ELSE BEEP: GOTO 3600
3630                   'selecting the print format for printer
3640 IF K$="0" THEN GOTO 3670 ELSE IF K$="1" THEN GOTO 3680 ELSE IF K$="2" THEN GOTO 3690 ELSE IF K$="3" THEN GOTO 3700 ELSE IF K$="4" THEN GOTO 3710 ELSE IF K$="5" THEN GOTO 3720
3650 IF K$="6" THEN GOTO 3730 ELSE IF K$="7" THEN GOTO 3740 ELSE IF K$="8" THEN GOTO 3750
3660 	          'printing the running total to printer	
3670 LPRINT USING "############.";T: RETURN
3680 LPRINT USING "############.#";T: RETURN
3690 LPRINT USING "############.##";T: RETURN
3700 LPRINT USING "############.###";T: RETURN
3710 LPRINT USING "############.####";T: RETURN
3720 LPRINT USING "############.#####";T: RETURN
3730 LPRINT USING "############.######";T: RETURN
3740 LPRINT USING "############.#######";T: RETURN
3750 LPRINT USING "############.########";T: RETURN
3760                'if the printer's not on, then . . .
3765 IF ERR=24 OR ERR=25 OR ERR=27 THEN GOTO 3770 ELSE RESUME
3770 DEF SEG=0: POKE 1050, PEEK(1052)
3775 DEF SEG: POKE 106,0
3780 LOCATE 12,30
3790   COLOR 15,0
3800   PRINT "Check your printer!";
3805   BEEP: BEEP: BEEP
3810   COLOR 7,0
3820 LOCATE 14,18
3830   COLOR 23,0
3840   PRINT "Correct problem and touch any key to resume.";
3850   COLOR 7,0
3860 E$=INPUT$(1)
3865 CLS
3880    RESUME 460
3890                'opening module
3900 LOCATE 9,1 
3910   PRINT "A limited license is granted to all users of this program to make and"
3920 LOCATE 10,1
3930   PRINT "distribute copies of this program to other users, on condition that: "
3940 LOCATE 12,5
3950   PRINT "1. The notices in lines 140 through 360, 3060 through 3320, and 3910"
3960 LOCATE 13,8
3970   PRINT "through 4110 are not to be altered or removed."
3980 LOCATE 14,5
3990   PRINT "2. The program may not be distributed to others in altered or modified form."
4000 LOCATE 15,5
4010   PRINT "3. No fee is to be charged for copying or distributing this program without"
4020 LOCATE 16,8
4030   PRINT "the express written consent of:"
4040 LOCATE 18,10
4050   PRINT "Stephen Manes"
4060 LOCATE 19,10
4070   PRINT "5420 Netherland Avenue, Apt. B3l"
4080 LOCATE 20,10
4090   PRINT "Bronx, NY 10471
4100 LOCATE 20,10
4110                         RETURN
```

## SORTEST.BAS

```bas
10 'DRIVER PROGRAM FOR TESTING SORT ROUTINES
20 '
30 'PROGRAM BY: LEE M. BUCK, ARLINGTON, VA.
40 '
50 CLS: KEY OFF: SCREEN 0,0,0,0: WIDTH 80: COLOR 7,0,0
60 '
70 PRINT :PRINT "STRING SORTING DEMO - COPYRIGHT 1983 LEE M BUCK":PRINT
80 PRINT "THIS DEMO IS SET UP FOR A 64K MACHINE. IF YOU HAVE MORE MEMORY"
90 PRINT "  you may change line 280 to:  CLEAR ,65535!  from   CLEAR ,38900!"
100 PRINT "  and line 690 to:   MEM.SIZE=96   from   MEM.SIZE=64"
110 PRINT "THIS WILL ALLOW YOU TO USE ALL OF BASIC'S WORK SPACE."
120 PRINT :PRINT "THIS PROGRAM DEMONSTRATES THE ASSEMBLY LANGUAGE SORT MODULE"
130 PRINT "CONTAINED IN THE FILE 'SORT.BLD' - IT MUST BE ON THE DEFAULT DRIVE"
140 PRINT "BEFORE RUNNING THIS PROGRAM **NOTE** YOU DO NOT NEED THE ASSEMBLER!"
150 PRINT :PRINT "PLEASE READ THE FILE SORT.DOC FOR ADDITIONAL INFORMATION"
160 PRINT "ON THE ASSEMBLY LANGUAGE SUBROUTINE.  IF YOU HAVE QUESTIONS "
170 PRINT "YOU MAY CONTACT ME AT THE ADDRESS IN THE SORT.DOC FILE. STUDY THIS"
180 PRINT "DEMO PROGRAM LISTING FOR ADDITIONAL TIPS ON USING THE SUBROUTINE."
190 PRINT :PRINT "THIS PROGRAM OR ASSEMBLY LANGUAGE SORT MODULE IS NOT FOR SALE"
200 PRINT "WITHOUT WRITTEN CONSENT OF THE AUTHOR.  THEY ARE INTENDED FOR"
210 PRINT "FREE USE BY THE IBM PC USER COMMUNITY."
220 '
230 PRINT :PRINT "PRESS 'Esc' TO QUIT - SPACE BAR TO CONTINUE": BEEP
240 DEF SEG: POKE 106,0
250 Q$=INKEY$: IF Q$="" THEN 250 ELSE IF Q$=CHR$(27) THEN KEY ON: END
260 IF Q$<>CHR$(32) THEN 250
270 '
280 CLEAR ,38900.         'FOR 96K OR MORE CHANGE THIS TO  CLEAR ,65535!
290 DEFINT A-Z: NDIM=INT(FRE(0)/2400)*100       '**PICK YOUR OWN VALUE FOR NDIM
300 DIM PTR(NDIM),PTRD(NDIM)                    '**IF YOU WANT MORE STRINGS
310 CLS: KEY OFF: FALSE=0: TRUE=NOT FALSE
320 '
330 '      ------------ convert time$ to sec and back  ---------
340 DEF FNSEC!(TM$)=VAL(LEFT$(TM$,2))*3600+VAL(MID$(TM$,4,2))*60+VAL(RIGHT$(TM$ ,2))
350 DEF FNTIM$(SC!)=RIGHT$(STR$(INT(SC!/3600)),2)+":"+RIGHT$(STR$(INT((SC!- 3600*(INT(SC!/3600)))/60)),2)+":"+RIGHT$(STR$(SC!-3600*(INT(SC!/3600))- 60*(INT((SC!-3600*(INT(SC!/3600)))/60))),2)
360 GOTO 760
370 '      ------------ elapsed time subroutine ---------
380 TSEC!=FNSEC!(TIME$)
390 TELP!=TSEC!-TSTRT!:IF TELP!<0. THEN TELP!=TSEC!+(86400.-TSTRT!)
400 RETURN
410 '      -------- end elapsed time subroutine ---------
420 '
430 '---------- SHELL METZNER SORT ----------
440 COLOR 23,0: LOCATE ,1: PRINT "working";
450 K1=N
460 K1=INT(K1/2): IF K1=0 THEN 530 ELSE BEEP: PRINT ".";  'SIGNAL IT'S ALIVE
470 K2=N-K1: J=1
480 I=J
490 K3=I+K1: IF A$(I) < A$(K3) THEN 510
500 SWAP A$(I),A$(K3): I=I-K1: IF I>=1 THEN 490
510 J=J+1: IF J>K2 THEN 460
520 GOTO 480
530 RETURN
540 '
550 ' METHOD OF CALCULATING SEGMENT ADDRESS FOR LOADING MACHINE LANGUAGE
560 ' IN MEMORY.  MEM.SIZE IS THE MACHINE MEMORY SIZE.  THE MODULE IS LOADED
570 ' BELOW THIS AREA.  MEM.SIZE IS EXPRESSED IN 'K'.  FOR EXAMPLE, ON A 320K
580 ' MACHINE USING A 160K RAM DISK THE HIGHEST LOCATION IS 160K.  MACHINE
590 ' LANGUAGE ROUTINES WILL BE LOADED JUST BELOW THIS.
600 ' PGM.SIZE IS THE SIZE OF THE MACHINE LANGUAGE MODULE.  IF YOU DIDN'T
610 ' WRITE THE MODULE YOU HAVE TO TAKE THE AUTHORS WORD FOR IT OR LOAD
620 ' IT WITH DEBUG TO DETERMINE THE SIZE.
630 ' THIS IS 'K' MEMORY TIMES 1024/16 MINUS NO. OF 16 BYTE BLOCKS FOR CODE
640 '
650 SEGMENT=MEM.SIZE*64 - CINT(PGM.SIZE/16)
660 RETURN
670 '
680 'LOAD THE ASM. LANGUAGE SORT MODULE INTO MEMORY ABOVE BASIC'S SPACE
690 MEM.SIZE=64       'HIGH AVAIL. MEMORY LOCATION IN 'K'(MACHINE DEPENDENT)
700 PGM.SIZE=&H200    'SIZE OF THE MACHINE LANGUAGE PROGRAM
710 GOSUB 550         'CALCULATE "SEGMENT" TO LOAD SORT MODULE
720 ON ERROR GOTO 1590
730 DEF SEG=SEGMENT: BLOAD "SORT.BLD",0
740 RETURN
750 '
760 GOSUB 680         'LOAD THE ASM. MODULE
770 '
780 DIM A$(NDIM),AS$(NDIM)
790 WHILE INKEY$<>"":WEND       'CLEAR KEYBOARD BUFFER
800 NDIM$=STR$(NDIM): NDIM$=RIGHT$(NDIM$,LEN(NDIM$)-1)
810 CLS: PRINT: SOUND 1000,1
820 PRINT "HOW MANY STRINGS DO YOU WANT TO SORT (";NDIM$;: INPUT " MAX)";N
830 IF N<1 THEN N=20          'DEFAULT TO 20
840 IF N<=NDIM THEN 850 ELSE BEEP: GOTO 820
850 SOUND 1000,1
860 PRINT "WHAT IS THE MAXIMUM STRING SIZE (255 MAX)"
870 INPUT "(FOR DISPLAY PURPOSES 13 OR LESS IS BEST)";NMAX
880 IF NMAX<1 THEN NMAX=1     'DEFAULT TO 1
890 IF NMAX>255 THEN BEEP: NMAX=255
900 PRINT
910 PRINT "HOLD ON WHILE I GENERATE ";N;" RANDOM STRINGS"
920 RANDOMIZE (VAL(MID$(TIME$,4,2))*60+VAL(RIGHT$(TIME$,2))): X!=FRE("")
930 '
940 PRINT :PRINT "GENERATING STRING";TAB(30);"BYTES FREE";: LOCATE ,18
950 FOR I=1 TO N
960 L=RND*NMAX: IF L<1 THEN L=1          'LENGTH
970 C=RND*60+63                         'CHARACTER
980 IF (C>64 AND C<91) OR (C>96 AND C<123) THEN 990 ELSE 970
990 A$(I)=STRING$(L,C): AS$(I)=A$(I): PTR(I)=I: PTRD(I)=I
1000 PRINT USING "#####";I;:LOCATE ,41:PRINT USING "#####";FRE(0);:LOCATE ,18
1010 IF FRE(0)>500 THEN 1050
1020 SOUND 500,6:SOUND 1200,5:SOUND 600,6:SOUND 1000,5
1030 PRINT: PRINT "STOPPING AT";I;" STRINGS...MEMORY GETTING LOW": N=I
1040 FOR II=1 TO 1000:NEXT II: GOTO 1070
1050 NEXT: PRINT
1060 '
1070 ' DO THE INTERPRETED SHELL-METZNER SORT
1080 PRINT: PRINT "BEGINNING INTERPRETER BASIC SHELL-METZNER SORT"
1090 PRINT "This will take about";SPC(5);" minutes";
1100 LOCATE ,POS(0)-12: PRINT USING "##.#";(0.0006*N^1.3)
1110 NDOTS=CINT(LOG(N)/LOG(2)+0.5):LOCATE ,8+NDOTS
1120 PRINT CHR$(17);CHR$(205);" finished when dots get here";
1130 TSTRT!=FNSEC!(TIME$)
1140 GOSUB 430        'DO A SHELL-METZNER SORT - 'REM' THIS LINE FOR SPEED
1150 GOSUB 370         'CALCULATE ELAPSED TIME
1160 METZTIM$=FNTIM$(TELP!)
1170 COLOR 7,0: LOCATE ,1: PRINT SPACE$(50);: LOCATE ,1
1180 BEEP : PRINT "SHELL-METZNER TIME ";METZTIM$;" (hh:mm:ss)"
1190 '
1200 ' ASM SORT IN ASCENDING ORDER
1210 BEEP: PRINT: PRINT "BEGINNING ASSEMBLY LANGUAGE SHELL-METZ SORT UP"
1220 TSTRT!=FNSEC!(TIME$)
1230 DEF SEG=SEGMENT  'SET THE SEGMENT LOCATION
1240 SORTUP=0         'SET THE ENTRY POINT
1250 CALL SORTUP(AS$(1),PTR(1),N)
1260 GOSUB 370        'CALCULATE ELAPSED TIME
1270 ASSYTIM$=FNTIM$(TELP!)
1280 BEEP : PRINT "ASM SHELL-METZ TIME ";ASSYTIM$;" (hh:mm:ss)"
1290 '
1300 ' ASM SORT IN DESCENDING ORDER
1310 BEEP: PRINT: PRINT "BEGINNING ASSEMBLY LANGUAGE SHELL-METZ SORT DOWN"
1320 TSTRT!=FNSEC!(TIME$)
1330 DEF SEG=SEGMENT  'SET THE SEGMENT LOCATION
1340 SORTDN=2         'SET THE ENTRY POINT FOR DESCENDING SORT
1350 CALL SORTDN(AS$(1),PTRD(1),N)
1360 GOSUB 370        'CALCULATE ELAPSED TIME
1370 ASSYTIM$=FNTIM$(TELP!)
1380 BEEP : PRINT "ASM SHELL-METZ TIME ";ASSYTIM$;" (hh:mm:ss)"
1390 '
1400 ' PRINT THE RESULTS
1410 PRINT: INPUT "DO YOU WANT TO DISPLAY THE RESULT (Y/N)";Q$
1420 IF LEFT$(Q$,1)<>"Y" AND LEFT$(Q$,1)<>"y" THEN 1550
1430 INPUT "PRINT TO SCREEN OR PRINTER (S/P) ";Q$
1440 IF LEFT$(Q$,1)="S" OR LEFT$(Q$,1)="s" THEN SCRN=TRUE: GOTO 1470
1450 IF LEFT$(Q$,1)="P" OR LEFT$(Q$,1)="p" THEN PRNT=TRUE: GOTO 1470
1460 BEEP: GOTO 1430
1470 PRINT :PRINT
1480 IF SCRN THEN PRINT "ORIGINAL","INTERP S-M","ASM  UP","ASM  DN":PRINT
1490 IF PRNT THEN LPRINT "ORIGINAL","INTERP S-M","ASM  UP","ASM  DN":LPRINT
1500 FOR I=1 TO N
1510 IF SCRN THEN PRINT AS$(I),A$(I),AS$(PTR(I)),AS$(PTRD(I))
1520 IF SCRN THEN IF (I MOD 20) = 0 THEN FOR II=1 TO 800: NEXT II      'pause
1530 IF PRNT THEN LPRINT AS$(I),A$(I),AS$(PTR(I)),AS$(PTRD(I))
1540 NEXT I
1550 PRINT: BEEP: INPUT "Want to try another test (Y/N)";Q$
1560 IF LEFT$(Q$,1)<>"Y" AND LEFT$(Q$,1)<>"y" THEN 1580
1570 ERASE A$,AS$ : GOTO 780            'START AGAIN
1580 KEY ON: ON ERROR GOTO 0: BEEP: END
1590 '
1600 ' ERROR TRAP FOR MISSING SORT.BLD FILE
1610 IF ERR<>53 OR ERL<>730 THEN 1650
1620 PRINT "CHECK DEFAULT DRIVE FOR FILE NAMED SORT.BLD"
1630 PRINT "RUN SORTBLD.BAS TO CREATE IT IF NECESSARY"
1640 GOTO 1660
1650 PRINT "ERROR";ERR;" AT LINE";ERL;" ... UNRECOVERABLE ..."
1660 SOUND 400,20: SOUND 200,25
1670 GOTO 1580
```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0206

     Volume in drive A has no label
     Directory of A:\

    CMP      COM      2134   1-01-80  12:28a
    CMP      DOC      7685   1-01-80  12:29a
    CRC      TXT      1358  11-15-84   9:13a
    CRCK4    COM      1536  10-21-82   7:54p
    FACTOR   BAS       896   1-01-80  12:07a
    KEYPUNCH BAS      2688  11-10-82   4:39p
    MULTREG  EXE     49664   6-08-84   1:00p
    PERT     DAT       640   5-03-82
    PERTCHT  BAS     13184  11-20-82  10:30a
    PROFILE  MEM       256   1-01-80  12:38a
    PUNYCALC BAS     13568   1-31-83  10:29p
    PUNYCALC DOC       384   1-31-83  10:44p
    SORT     BLD       512   5-23-83  10:25p
    SORT     DOC      5888   5-02-83   1:47a
    SORTEST  BAS      6962   5-23-83  10:39p
    VISICOM  DOC      2432   3-18-83  12:51a
    XXX                896   6-19-84   1:08a
           17 file(s)     110683 bytes
                           46080 bytes free
