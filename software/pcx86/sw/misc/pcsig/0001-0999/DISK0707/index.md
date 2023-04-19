---
layout: page
title: "PC-SIG Diskette Library (Disk #707)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0707/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0707"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "CURVEFIT"

    Burnt out on Euclid?  Got the Newton blues?  If you're a weary
    mathematician or a bogged-down high-level math student, CURVEFIT is an
    excellent program for you.  CURVEFIT performs a least-squares curve fit
    on X, Y data.  Curves for 25 equations are fitted.  Equation
    coefficients, correlation coefficient, and best fit are computed with
    your data.  CURVEFIT can make predictions for Y in any of the 25
    equations.  Residuals are calculated.  The program does not include any
    graphics.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## BASLISTI.BAS

```bas
1 REM This program allows a "PRETTY" listing of BASIC programs that
2 REM are stored in ASCII format.  Although designed to be used primarily
3 REM with EPSON or EPSON code compatible printers, this program can be
4 REM used with any printer, so long as the set-up is made prior to running
5 REM this program.
6 REM 
7 REM This program has the option of placing one statement per printed line.
8 REM It also has the option of stripping the high bit from a file that might
9 REM have been generated using the document mode of WORDSTAR
10 REM 
11 REM This program is PUBLIC DOMAIN.  Feel free to copy or distribute
12 REM freely.  The author is:  Thomas S. Cox.
13 REM
14 REM The listings may be printed to printer, disk, or screen.
15 REM
16 REM For optimum results, this program should be compiled.  Will work
17 REM using either QUICK-BASIC or TURBO-BASIC.
18 REM
19 REM ======================================================================
20 'CLEAR 5000    'Required only for OBASIC not MBASIC or BASICA
30 CLOSE:CLS    'Clear Screen Code for IBM, May be machine dependent
40 EM$="N"   
100 ' For ZORBA use Print CHR$(27)+"E"; For IBM, use CLS
110 PRINT TAB(15);"---------------------------------------------"
111 PRINT TAB(15);"|  BASLISTI.BAS  Copyright April 13, 1987   |"
112 PRINT TAB(15);"|     For IBM and COMPATIBLE Computers      |"
114 PRINT TAB(15);"|  BASIC PROGRAM LISTER  Version 2.06       |"
116 PRINT TAB(15);"|  (ASCII FORMAT)        April 13, 1987     |"
118 PRINT TAB(15);"|                                           |"
120 PRINT TAB(15);"|  PROGRAM BY:     Thomas S. Cox            |"
122 PRINT TAB(15);"|                  102 Evergreen Street     |"
124 PRINT TAB(15);"|                  Easley, SC  29640        |"
126 PRINT TAB(15);"|                                           |"
128 PRINT TAB(15);"|  PUBLIC DOMAIN SOFTWARE.  May be freely   |"
130 PRINT TAB(15);"|  copied.  Please leave this sign-on       |"
132 PRINT TAB(15);"|  message on all copies.  Thanks.          |"
133 PRINT TAB(15);"|                                           |"
134 PRINT TAB(15);"|  This version allows setting printer CPI  |"
135 PRINT TAB(15);"|  [If printer is Epson or Compatible]      |"
136 PRINT TAB(15);"|                                           |"
137 PRINT TAB(15);"|  Printer left margin can also be set.     |"
138 PRINT TAB(15);"---------------------------------------------"
139 PRINT" " 
140 DUMMY$="123456789|123456789|123456789|123456789|123456789|123456789|123456789|123456789|123456789|123456789|123456789|123456789|123456789|123456789|123456789|123456789|123456789|123456789|123456789|123456789|123456789|123456789|123456789"
160 OP=0:LINE INPUT"Output listing to printer (Y)es or (N)o   {DEFAULT=Y} ";OP$:IF OP$="" THEN OP$="Y"
170 IF LEFT$(OP$,1)="Y" OR LEFT$(OP$,1)="y" THEN OP=1 ELSE IF LEFT$(OP$,1)="N" OR LEFT$(OP$,1)="n" THEN OP=0 ELSE PRINT"Your input of ";OP$;" was invalid.  Please re-enter":GOTO 160
180 LINE INPUT"Use current system Time and Date? Y or N (Default = Y) ";Z1$:IF LEFT$(Z1$,1)="y" OR LEFT$(Z1$,1)="Y" OR Z1$="" THEN TD$=DATE$+"   "+TIME$:GOTO 182
181 LINE INPUT"Please enter desired Time and Date for Heading (25 chars Max) ";TD$
182 LINE INPUT "Should printed output use OTHER than Current Settings Y or N (Default=N) ";CP$
183 IF LEFT$(CP$,1)="Y" OR LEFT$(CP$,1)="y" THEN GOSUB 6000
184 PRINT "SHOULD OUTPUT HAVE HIGH-BITS STRIPPED?  THIS WILL REMOVE ALL THE"
185 PRINT "STRANGE WORDSTAR DOCUMENT CHARACTERS; BUT WILL ALSO REMOVE THE IBM"
186 LINE INPUT "GRAPHICS CHARACTERS.  Please enter (Y)es or (N)o ";SHB$
187 if left$(shb$,1)="Y" or left$(shb$,1)="y" then shb=1 else shb=0
190 LINE INPUT"Maximum number of characters per line (Default is 80) ";MC$:MC=VAL(MC$)
191 IF MC=0 THEN MC=80
192 'WIDTH LPRINT MC      'USED ONLY FOR CP/M VERSIONS OF OBASIC AND MBASIC
194 ' FOR IBM BASICA THE PROPER FORMAT IS  'WIDTH "LPT1:",MC'
196 LINE INPUT "Please enter number of lines per page (Default is 55) ";LL$:LL=VAL(LL$)
198 IF LL=0 THEN LL=55
200 LINE INPUT "Multistatement lines one statement per line (Y)es or (N)o  {DEFAULT=Y} ";MS$:IF MS$="" THEN MS$="Y"
210 IF LEFT$(MS$,1)="Y" OR LEFT$(MS$,1)="y" THEN ML=1 ELSE IF LEFT$(MS$,1)="N" OR LEFT$(MS$,1)="n" THEN ML=0 ELSE PRINT"Your input of ";ML$;" was invalid.  Please re-enter.":GOTO 200 
220 LINE INPUT "Please enter the filename of program to be printed  ";F$
230 OL=0
240 LINE INPUT "Output listing to Disk File (Y)es or (N)o   {DEFAULT=N} ";OL$:IF OL$="" THEN OL$="N"
250 IF LEFT$(OL$,1)="Y" OR LEFT$(OL$,1)="y" THEN OL=1 ELSE IF LEFT$(OL$,1)="N" OR LEFT$(OL$,1)="n" OR OL$="" THEN 290 ELSE PRINT"Your entry of ";OL$;"was ivalid.  Please re-enter."
260 OL=1:LINE INPUT"Please enter filename for disk storage of listing  ";FS$
290 LP=0:N=1
296 LINE INPUT "Left Margin Offset for Line Printer? {DEFAULT=1 CAN'T BE 0} ";LM$:LM=VAL(LM$):IF LM<1 THEN LM=1
297 GOSUB 8000
298 IF OL=1 THEN OPEN "O",2,FS$
299 N=1:IF OP=1 THEN LPRINT " "
300 OPEN "I",1,F$
301 LINE INPUT #1,B$
302 IF ASC(B$)=255 THEN CLS:PRINT CHR$(7):PRINT"SORRY, THE FILE YOU SPECIFIED IS NOT IN ASCII FORMAT (IT IS TOKENIZED)":PRINT " ":CLOSE 1:GOTO 110
304 CLOSE 1
305 OPEN "I",1,F$:IF EOF(1) THEN GOTO 297
307 B1$=" );=":A2$=" "
310 CLS:GOSUB 1000     'print title at start of first page
320 IF EOF(1) THEN GOTO 380  'if no more data then quit
330 LINE INPUT #1,B$ 'read file up through next CR/LF
360 GOSUB 2000   'Start extraction of MC Column lines
370 GOTO 320
380 CLS:PRINT"END of File"    'When all has been done, eject page and STOP
385 GOSUB 5000
390 IF OP=1 THEN LPRINT CHR$(12)    'CHR$(12)=Form Feed
400 IF OL=1 THEN PRINT #2,CHR$(12)
405 REM Close all open files
410 CLOSE
415 PRINT CHR$(7):GOTO 297
420 END
1000 ' This subroutine prints Titles, Page Numbers, etc.
1003 PRINT TD$;TAB(42);F$;"  Page # ";N:PRINT STRING$(79,61)
1004 PRINT LEFT$(DUMMY$,79):PRINT STRING$(79,61)
1005 IF OL=1 THEN PRINT #2,TAB(LM);TD$,TAB(42+LM);F$;"  Page # ";N
1010 IF OP=1 THEN LPRINT TAB(LM);TD$;TAB(42+LM);F$;"   Page ";N
1015 GOSUB 5000
1030 LP=2:RETURN  
2000 ' This subroutine extracts up to MC characters for a line
2010 K1=1:F=0:Q1=1:CC=LM
2020 FOR I=1 TO LEN(B$)
2023 IF MQ=1 THEN GOSUB 3000
2030 CC=CC+1:A1$=MID$(B$,I,1):IF CC=MC THEN GOSUB 3000
2046 IF CC>=(MC-8) AND INSTR(1,B1$,A1$) THEN MQ=1
2050 IF ML=0 THEN 2100
2060 IF A1$=CHR$(34) THEN Q1=Q1*-1
2070 IF Q1<0 THEN 2100
2090 IF A1$=":" THEN GOSUB 3000
2095 IF A1$>CHR$(127) and SHB=1 THEN GOSUB 4000    'Strip any high bits
2100 NEXT I
2110 GOSUB 3000
2120 RETURN
3000 ' This subroutine PRINTS a string up to MC characters in length
3005 F1$=MID$(B$,K1,I-K1)
3010 IF F1$="" THEN RETURN
3020 IF F=1 THEN K=(INSTR(1,B$,A2$)+1)+LM:IF OP=1 THEN LPRINT TAB(K-1);
3030 IF F=1 AND OL=1 THEN PRINT #2,TAB(K-1);
3035 IF F<>1 THEN K=LM:IF OP=1 THEN LPRINT TAB(K);
3037 IF F<>1 AND OL=1 THEN PRINT #2,TAB(K);
3040 IF OP=1 THEN LPRINT F1$
3050 IF OL=1 THEN PRINT #2,F1$
3055 IF F=1 THEN PRINT TAB(K-LM);
3056 PRINT F1$
3060 K1=I:LP=LP+1:MQ=0
3062 IF F<>1 THEN CC=LM+(INSTR(1,B$,A2$)+1)
3064 IF F=1 THEN CC=K
3066 F=1
3070 IF LP>=LL THEN LP=0:N=N+1:IF OP=1 OR OL=1  THEN GOSUB 5000:IF OP=1 THEN LPRINT CHR$(12)
3080 IF OL=1 AND LP=0 THEN PRINT #2,CHR$(12)
3090 IF LP=0 THEN GOSUB 1000
3100 RETURN
4000 N2=ASC(A1$):N2=N2-128:MID$(B$,I,1)=CHR$(N2):RETURN
5000 IF OP=1 THEN LPRINT TAB(LM);STRING$(MC-LM,61)
5005 IF OL=1 THEN PRINT #2,TAB(LM);STRING$(MC-LM,61)
5010 IF OP=1 THEN LPRINT TAB(LM);LEFT$(DUMMY$,MC-LM):LPRINT TAB(LM);STRING$(MC-LM,61)
5015 IF OL=1 THEN PRINT #2,TAB(LM); LEFT$(DUMMY$,MC-LM):PRINT #2,TAB(LM);STRING$(MC-LM,61)
5020 RETURN
6000 CLS:PRINT"This routine allows changing characters per inch in printed output."
6002 PRINT" ":PRINT"You may abort this routine without sending any characters to line printer"
6004 PRINT"by pressing ENTER rather than (1-4).":PRINT" "
6010 PRINT "Your choices are:":PRINT" "
6020 PRINT "(1) Default  10 Characters per inch"
6030 PRINT "(2) Elite  12 Characters per inch"
6040 PRINT "(3) Compressed  17 characters per inch"
6050 PRINT "(4) Maximum compression  20 characters per inch"
6055 PRINT "    (This known to work on CITIZEN MSP 20 and 25 printers)"
6060 PRINT " "
6100 LINE INPUT "Please enter your choice (1-4) or <ENTER> to abort. ";N1$:N1=VAL(N1$)
6105 IF N1=0 THEN CLS:RETURN
6110 IF N1=1 THEN LPRINT CHR$(27)+"@";:GOSUB 7000: CLS:RETURN
6120 IF N1>4 THEN CLS: GOTO 6000
6130 IF N1=2 THEN LPRINT CHR$(27)+"@";CHR$(27)+"M";:GOSUB 7000:CLS:RETURN
6140 IF N1=3 THEN LPRINT CHR$(27)+"@";CHR$(15);:GOSUB 7000:CLS:RETURN
6150 IF N1=4 THEN LPRINT CHR$(27)+"@";CHR$(27)+"M";CHR$(15);:GOSUB 7000:CLS:RETURN
6160 GOTO 6000
7000 LINE INPUT"Would you like printer in EMPHASIZED mode (Y)es or (N)o ";EM$
7010 IF LEFT$(EM$,1)="Y" OR LEFT$(EM$,1)="y" THEN LPRINT CHR$(27);CHR$(69);:RETURN
7020 RETURN
8000 CLS
8010 PRINT STRING$(78,"=")
8020 PRINT "|";TAB(78);"|"
8030 PRINT "|";TAB(15);"SETUP FOR PRINTOUT IS AS FOLLOWS: ";TAB(78);"|"
8040 PRINT "|";TAB(78);"|"
8050 PRINT "|";TAB(15);"FILE TO BE LISTED ";TAB(50);F$;TAB(78);"|"
8060 PRINT "|";TAB(15);"Output to printer?";TAB(50);OP$;TAB(78);"|"
8070 PRINT "|";TAB(15);"Title for listing ";TAB(50);TD$;TAB(78);"|"
8080 PRINT "|";TAB(15);"Max # Chars/Line  ";TAB(50);MC;TAB(78);"|"
8090 PRINT "|";TAB(15);"Lines per page    ";TAB(50);LL;TAB(78);"|"
8150 PRINT "|";TAB(15);"Multi-Statement Lines = 1/line? ";TAB(50);MS$;TAB(78);"|"
8160 PRINT "|";TAB(15);"Output listing to disk?";TAB(50);OL$;TAB(78);"|"
8170 PRINT "|";TAB(15);"Filename for disk OUTPUT ";TAB(50);FS$;TAB(78);"|"
8180 PRINT "|";TAB(15);"Printer Left Margin Offset";TAB(50);LM;TAB(78);"|"
8190 PRINT "|";TAB(15);"Printer in EMPHASIZED mode? ";TAB(50);EM$;TAB(78);"|"
8195 IF N1=0 THEN PRINT"|";TAB(15);"Printer set at CPI? ";TAB(50);"As Currently Set";TAB(78);"|"
8200 IF N1=1 THEN PRINT"|";TAB(15);"Printer set at CPI? ";TAB(50);"10";TAB(78);"|"
8210 IF N1=2 THEN PRINT"|";TAB(15);"Printer set at CPI? ";TAB(50);"12";TAB(78);"|"
8220 IF N1=3 THEN PRINT"|";TAB(15);"Printer set at CPI? ";TAB(50);"17";TAB(78);"|"
8230 IF N1=4 THEN PRINT"|";TAB(15);"Printer set at CPI? ";TAB(50);"20";TAB(78);"|"
8240 PRINT STRING$(78,"="):PRINT" "             
8250 LINE INPUT "OK to use above settings ENTER or Y for YES, N for NO ";OK$
8260 IF OK$="" OR LEFT$(OK$,1)="Y" OR LEFT$(OK$,1)="y" THEN RETURN
8270 PRINT"The only change permissable without re-running program is "
8280 PRINT"FILENAME of program to be listed.":PRINT" "
8290 LINE INPUT"ENTER new FILENAME or <ENTER> to ABORT or 'R' to RESET everything ";TMP$
8300 IF TMP$="" THEN GOTO 8000
8310 IF LEFT$(TMP$,1)="R" OR LEFT$(TMP$,1)="r" THEN TMP$="R":GOTO 20
8400 F$=TMP$
8410 GOTO 8000
9000 END
```

## CURVEFIT.BAS

```bas
3 KEY OFF
5 DEFDBL A,B,C,S,R,X,Y,V:MONITOR2$="Y"
6 DIM EQ$(25),RS(25),RS1$(25),RS$(25):gosub 55000
9 CLS:COLOR 7,0,0:PR$="░░░░░░░░░░":goto 36000
10 CLS:GOSUB 38000:PRINT"╔═══════════╦══════════════════════════════════════════════════════╦══════════╗";
11 PRINT"║ CURVEFIT  ║ Version 2.20-B FEB  03, 1989       by  Thomas S. Cox ║SHAREWARE ║";
12 PRINT"╠═══════════╩══════════════════════════════════════════════════════╩══════════╣";
13 PRINT"║ PURPOSE     This program performs a least squares curve fit on X, Y data.   ║";
14 PRINT"║             Curves for 25 equations are fitted.  Equation coefficients,     ║";
15 PRINT"║             Correlation Coefficient, and Best Fit are computed.  For any    ║";
16 PRINT"║             of the 25 equations, predictions for Y can be calculated.       ║";
17 PRINT"║                                                                             ║";
18 PRINT"║ REFERENCE   CURVE FITTING FOR PROGRAMMABLE CALCULATORS by William M. Kolb   ║";
19 PRINT"║             Published by: IMTEC  P. O. Box 1402  Bowie MD  20716            ║";
20 PRINT"║                                                                             ║";
21 PRINT"║ WARNING     A LINEARIZING  technique is applied to various equations so that║";
22 PRINT"║ and         the resulting equations are of the general form: Y=A+B*X        ║";
23 PRINT"║ DISCLAIMER  This means that sum of squares of errors in Y are not minimized,║";
24 PRINT"║             but the sum of squares of the linearized variable are minimized.║";
25 PRINT"║                                                                             ║";
26 PRINT"║             The Linear, Parabolic, Cubic and Hyperbolic equations are linear║";
27 PRINT"║             in the parameters so this reservation does not apply to those   ║";
28 PRINT"║             curves. Reservation applies to equations with LN, EXP or POWERS.║";
29 PRINT"║                                                                             ║";
30 PRINT"║ SHAREWARE   If you use and like this program a donation of $10 is requested.║";
31 PRINT"╚═════════════════════════════════════════════════════════════════════════════╝";
32 PRINT TAB(2);:INPUT"PRESS <ENTER> TO START PROGRAM EXECUTION";A$
33 CLS:GOSUB 38000:XQ=0
55 DIM X1$(255),Y1$(255),X$(255),Y$(255),X(255),Y(255),R(65),RR(25)
56 DIM RC(25),A(25),B(25),C(25):FOR I=1 TO 255:X$(I)="END":Y$(I)="END":NEXT I
110 IF XQ >0 THEN 1000 ELSE 115
115 CLS:GOSUB 38000:XQ=1
120 CLS:Q1$="N":GOSUB 38000:PRINT "╔═══════════╦══════════════════════════════════════════════════════╦══════════╗";
130 PRINT "║ CURVEFIT  ║  Version 2.20-B  FEB  03, 1989    by  Thomas S. Cox  ║SHAREWARE ║";
131 PRINT "╠═══════════╩══════════╤═══════════════════════════════════════════╩══════════╣";
132 PRINT "║ TURBO BASIC VERS 1.1 │          M  A  S  T  E  R     M  E  N  U             ║";
134 PRINT "╠═══════════╦══════════╪══════════════════════════════════════════════════════╣";
135 PRINT "║  SELECT   ║ CHOICES  │ BRIEF DESCRIPTION OF CHOICES                         ║";
140 PRINT "╠═══════════╬══════════╪══════════════════════════════════════════════════════╣";
150 PRINT "║      F1[ ]║ KEYBD DAT│ New Data (X and Y values) Entered from Keyboard      ║";
160 PRINT "║      F2[ ]║ DISK DATA│ Load From Disk a Previously Stored Data File         ║";
170 PRINT "║      F3[ ]║  ADD DATA│ Add Additional X,Y Data to Data Already in Memory    ║";
180 PRINT "║      F4[ ]║  DEL DATA│ or CHANGE Values of X and Y Currently in Memory      ║";
190 PRINT "║      F5[ ]║ LIST DATA│ X and Y Values Currently in Memory                   ║";
200 PRINT "║      F6[ ]║ CALC COEF│ Equation Coefficients (A, B, C, and R^2)             ║";
210 PRINT "║      F7[ ]║ RESIDUALS│ For Input Values of X, Y and Eq# (1-25) Show Residual║";
220 PRINT "║      F8[ ]║ VIEW EQTS│ LIST of EQUATIONS Fitted Using this Program          ║";
230 PRINT "║      F9[ ]║ VIEW COEF│ Equation Coefficients (A, B, C, R^2)                 ║";
240 PRINT "║     F10[ ]║ PREDICT Y│ For any Equation, Enter Range of X to see Predicted Y║";
250 PRINT "║ SHFT F1[ ]║ SAVE DATA│ X and Y Data Points to a DISK FILE                   ║";
260 PRINT "║ SHFT F2[ ]║ SUM OF SQ│ Display or Print SUMS and SUMS of SQUARES for REGRESS║";
261 PRINT "║ SHFT F3[ ]║  BEST FIT│ Sorted by R² (Coefficients MUST have been calculated)║";
265 PRINT "║ SHFT F4[ ]║ COLR/MONO│ Select COLOR or MONOCHROME (Default is COLOR + HERC) ║";
270 PRINT "╠═══════════╩══════════╧══════════════════════════════════════════════════════╣";
274 PRINT "║ Use UP or DOWN Keys to Select, Press ENTER; or FUNCTION KEY.  <ESC> to EXIT ║";
280 PRINT "╚═════════════════════════════════════════════════════════════════════════════╝";
284 LP=0 :LOCATE 25,1:COLOR 0,7,0:PRINT " Last Active File Used by CURVEFIT Was:  ";LEFT$(A4$,30);:GOSUB 38000
285 D1=8:GOTO 63500
1000 CLS: GOSUB 38000:PRINT "DATA ENTRY ROUTINE": PRINT " "
1001 INPUT"This routine will overwrite any existing data.  OK to proceed (Y) or (N)";A1$
1002 IF LEFT$(A1$,1)="Y" OR LEFT$(A1$,1)="y" THEN 1006
1003 IF LEFT$(A1$,1)="N" OR LEFT$(A1$,1)="n" THEN 120
1004 GOTO 120
1006 FOR I=1 TO 255:X$(I)="END":Y$(I)="END":NEXT I:PRINT"ALL VALUES HAVE BEEN SET TO ZERO"
1007 FOR I=1 TO 25:A(I)=0:B(I)=0:C(I)=0:R(I)=0:RR(I)=0:NEXT I
1008 INPUT "Do you want to have INPUT data listed on printer (Y or N)";Q1$
1009 GOSUB 50000:CLS:GOSUB 38000:M=1
1010 PRINT "Enter (S)top for X or Y to terminate data entry."
1011 CLS:GOSUB 38000:M=1:MR=1:MC=1
1012 PRINT "╔═══════════╦═══════════════════════════════════════════════════════╦═════════╗"
1013 PRINT "║ CURVEFIT  ║  Version 2.20-B  FEB  03, 1989      by Thomas S. Cox  ║SHAREWARE║"
1014 PRINT "╠═══════════╩═══════════════════════════════════════════════════════╩═════════╣"
1015 PRINT "║ DATA ENTRY SCREEN|  Press <ESC> at X or Y entry to Terminate Data Entry     ║"
1016 PRINT "╟───┬──────────┬──────────┬───┬──────────┬──────────┬───┬──────────┬──────────╢"
1017 PRINT "║PT#│ X VALUE  │ Y VALUE  │PT#│ X VALUE  │ Y VALUE  │PT#│ X VALUE  │ Y VALUE  ║"
1018 PRINT "╟───┼──────────┼──────────┼───┼──────────┼──────────┼───┼──────────┼──────────╢"
1019 FOR I=1 TO 14:PRINT "║   │          │          │   │          │          │   │          │          ║"
1020 NEXT I
1033 PRINT "╠═══╧════════╦═╧═════════╦╧═══╧══╦═══════╧═════╦════╧══╦╧══════════╧══════════╣"
1034 PRINT "║ ENTER DATA ║PT #       ║X VALUE║             ║Y VALUE║                      ║"
1035 PRINT "╚════════════╩═══════════╩═══════╩═════════════╩═══════╩══════════════════════╝";
1036 FOR J=1 TO 255
1037 LOCATE 7+MR,MC+1:PRINT LEFT$(PR$,3);:LOCATE 7+MR,MC+5:PRINT PR$;:LOCATE 7+MR,MC+16:PRINT PR$;
1040 LOCATE 23,21:PRINT "     ";:LOCATE 23,21:PRINT USING "####";M;
1042 LOCATE 23,36:PRINT"░░░░░░░░░░░ ";:LOCATE 23,36,1,0,7:GOSUB 1900:IF IPD$=CHR$(27) OR IPD$="s" OR IPD$="S" THEN GOTO 120 ELSE PRINT IPD$;:INPUT"", X$(M):X$(M)=IPD$+X$(M):LOCATE 23,36:PRINT"            ";:LOCATE 23,36:PRINT "  "+X$(M);
1044 LOCATE 23,58:PRINT"░░░░░░░░░░░ ";:LOCATE 23,58,1,0,7:GOSUB 1900:IF IPD$=CHR$(27) OR IPD$="s" OR IPD$="S" THEN GOTO 120 ELSE PRINT IPD$;:INPUT"", Y$(M):Y$(M)=IPD$+Y$(M):LOCATE 23,58:PRINT"            ";:LOCATE 23,58:PRINT "  "+Y$(M);
1046 LOCATE 7+MR,MC+1:PRINT USING "###";M;
1047 IF X$(M)="" THEN X$(M)="DEL"
1048 IF Y$(M)="" THEN Y$(M)="DEL"
1049 LOCATE 7+MR,MC+5:V=VAL(X$(M)):IF X$(M)="DEL" THEN PRINT"       DEL"; ELSE GOSUB 4710:PRINT USING C2$;V;
1050 LOCATE 7+MR,MC+16:V=VAL(Y$(M)):IF Y$(M)="DEL" THEN PRINT"       DEL"; ELSE GOSUB 4710:PRINT USING C2$;V;
1051 MR=MR+1
1052 IF M MOD 14=0 THEN MR=1:MC=MC+26
1053 IF M MOD 42=0 THEN MR=1:MC=1
1054 IF LEFT$(X$(J),1)="S" OR LEFT$(X$(J),1)="s" OR LEFT$(Y$(M),1)="S" OR LEFT$(Y$(M),1)="s" THEN GOTO 1500
1075 IF LP=1 THEN LPRINT"X( ";J;" )= ";X$(J);TAB(40);"Y( ";J;" )= ";Y$(J)
1077 M=M+1
1080 NEXT J
1090 GOTO 120
1500 X$(J)="END":Y$(J)="END":LOCATE 25,1:PRINT"(S)top encountered.  More Data (Y or N).";:INPUT;A$
1510 IF A$ = "Y" OR A$ = "y" THEN MR=MR-1:LOCATE 25,1:PRINT"                                                    ";:GOTO 1040
1520 GOTO 4620
1900 IPD$=INKEY$:IF IPD$=""THEN 1900 ELSE RETURN
2000 CLS:GOSUB 38000:PRINT"DATA ADDITION ROUTINE":PRINT" "
2011 CLS:GOSUB 38000:M=1:MR=1:MC=1:MR2=0
2012 PRINT "╔═══════════╦═══════════════════════════════════════════════════════╦═════════╗"
2013 PRINT "║ CURVEFIT  ║  Version 2.20-B  FEB  03, 1989      by Thomas S. Cox  ║SHAREWARE║"
2014 PRINT "╠═══════════╩═══════════════════════════════════════════════════════╩═════════╣"
2015 PRINT "║ DATA ADDITION| Press <ESC> for X or Y to Terminate Data Entry               ║"
2016 PRINT "╟───┬──────────┬──────────┬───┬──────────┬──────────┬───┬──────────┬──────────╢"
2017 PRINT "║PT#│ X VALUE  │ Y VALUE  │PT#│ X VALUE  │ Y VALUE  │PT#│ X VALUE  │ Y VALUE  ║"
2018 PRINT "╟───┼──────────┼──────────┼───┼──────────┼──────────┼───┼──────────┼──────────╢"
2019 FOR I=1 TO 14:PRINT "║   │          │          │   │          │          │   │          │          ║"
2020 NEXT I
2033 PRINT "╠═══╧════════╦═╧═════════╦╧═══╧══╦═══════╧═════╦════╧══╦╧══════════╧══════════╣"
2034 PRINT "║ ENTER DATA ║PT #       ║X VALUE║             ║Y VALUE║                      ║"
2035 PRINT "╚════════════╩═══════════╩═══════╩═════════════╩═══════╩══════════════════════╝";
2036 QZ=1:GOSUB 3470:QZ=0:FOR J=1 TO 255: REM This routine shows data to 2 decimal places
2037 IF X$(M)<>"END" OR Y$(M)<>"END"  THEN 2045
2038 LOCATE 7+MR,MC+1:PRINT LEFT$(PR$,3);:LOCATE 7+MR,MC+5:PRINT PR$;:LOCATE 7+MR,MC+16:PRINT PR$;
2040 LOCATE 23,21:PRINT "     ";:LOCATE 23,21:PRINT USING "#####";M;
2042 LOCATE 23,36:PRINT"░░░░░░░░░░░ ";:LOCATE 23,36,1,0,7:GOSUB 1900:IF IPD$=CHR$(27) OR IPD$="s" OR IPD$="S" THEN GOTO 120 ELSE PRINT IPD$;:INPUT"", X$(M):X$(M)=IPD$+X$(M):LOCATE 23,36:PRINT"            ";:LOCATE 23,36:PRINT "  "+X$(M);
2044 LOCATE 23,58:PRINT"░░░░░░░░░░░ ";:LOCATE 23,58,1,0,7:GOSUB 1900:IF IPD$=CHR$(27) OR IPD$="s" OR IPD$="S" THEN GOTO 120 ELSE PRINT IPD$;:INPUT"", Y$(M):Y$(M)=IPD$+Y$(M):LOCATE 23,58:PRINT"            ";:LOCATE 23,58:PRINT "  "+Y$(M);
2045 LOCATE 7+MR,MC+1:PRINT USING "###";M;
2046 IF X$(M)="" THEN X$(M)="DEL"
2047 IF Y$(M)="" THEN Y$(M)="DEL"
2048 LOCATE 7+MR,MC+5:V=VAL(X$(M)):IF X$(M)="DEL" THEN PRINT"       DEL"; ELSE GOSUB 4710:PRINT USING C2$;V;
2049 LOCATE 7+MR,MC+16:V=VAL(Y$(M)):IF Y$(M)="DEL" THEN PRINT"       DEL"; ELSE GOSUB 4710:PRINT USING C2$;V;
2050 MR=MR+1
2052 IF M MOD 14=0 THEN MR=1:MC=MC+26
2053 IF M MOD 42=0 THEN MR=1:MC=1:GOSUB 64000
2054 IF LEFT$(X$(M),1)="S" OR LEFT$(X$(M),1)="s" OR LEFT$(Y$(M),1)="S" OR LEFT$(Y$(M),1)="s" THEN GOTO 2500
2075 IF LP=1 THEN LPRINT"X( ";J;" )= ";X$(J);TAB(40);"Y( ";J;" )= ";Y$(J)
2077 M=M+1:IF MR>14 THEN MR=1:MC=MC+26:IF MC>55 THEN MC=1
2078 IF MR2=1 THEN 2038
2080 NEXT J
2090 GOTO 120
2500 X$(M)="END":Y$(M)="END":LOCATE 25,1:PRINT"(S)top encountered.  More Data (Y or N).";:INPUT;A$
2510 IF A$ = "Y" OR A$ = "y" THEN MR=MR-1:LOCATE 25,1:PRINT"                                                    ";:GOTO 2040
2520 GOTO 4620
3000 CLS:GOSUB 38000:PRINT"DATA CORRECTION":PRINT" "
3011 CLS:GOSUB 38000:M=1:MR=1:MC=1:MR2=0
3012 PRINT "╔═══════════╦═══════════════════════════════════════════════════════╦═════════╗"
3013 PRINT "║ CURVEFIT  ║  Version 2.20-B  FEB  03, 1989      by Thomas S. Cox  ║SHAREWARE║"
3014 PRINT "╠═══════════╩═══════════════════════════════════════════════════════╩═════════╣"
3015 PRINT "║ DATA CORRECTION| <ESC> for Data # to Exit, 'D' or 'd' for X or Y to Delete  ║"
3016 PRINT "╟───┬──────────┬──────────┬───┬──────────┬──────────┬───┬──────────┬──────────╢"
3017 PRINT "║PT#│ X VALUE  │ Y VALUE  │PT#│ X VALUE  │ Y VALUE  │PT#│ X VALUE  │ Y VALUE  ║"
3018 PRINT "╟───┼──────────┼──────────┼───┼──────────┼──────────┼───┼──────────┼──────────╢"
3019 FOR I=1 TO 14:PRINT "║   │          │          │   │          │          │   │          │          ║"
3020 NEXT I
3033 PRINT "╠═══╧════════╦═╧═════════╦╧═══╧══╦═══════╧═════╦════╧══╦╧══════════╧══════════╣"
3034 PRINT "║ ENTER DATA ║PT #       ║X VALUE║             ║Y VALUE║                      ║"
3035 PRINT "╚════════════╩═══════════╩═══════╩═════════════╩═══════╩══════════════════════╝";
3036 DUMMY$="           ":FOR J=1 TO 255: REM This routine shows data right justified
3037 LOCATE 7+MR,MC+1:PRINT LEFT$(PR$,3);:LOCATE 7+MR,MC+5:PRINT PR$;:LOCATE 7+MR,MC+16:PRINT PR$;
3038 IF X$(J)<>"END" OR Y$(J)<>"END" THEN 3045
3040 LOCATE 23,20:PRINT "░░░░░";:LOCATE 23,20:GOSUB 1900:IF IPD$=CHR$(27) THEN GOTO 120 ELSE PRINT IPD$;:INPUT"",M1$:M1$=IPD$+M1$:M=VAL(M1$):LOCATE 23,20:PRINT USING "#####";M;
3041 LOCATE 23,36:PRINT"  ░░░░░░░░░ ";:LOCATE 23,36,1,0,7:INPUT;X$(M):IF LEFT$(X$(M),1)="d" OR LEFT$(X$(M),1)="D" THEN X$(M)="DEL":Y$(M)="DEL"
3042 LOCATE 23,36:PRINT"            ";:LOCATE 23,36:PRINT "  "+X$(M);
3043 LOCATE 23,58:PRINT"  ░░░░░░░░░ ";:LOCATE 23,58,1,0,7:INPUT;Y$(M):IF LEFT$(Y$(M),1)="d" OR LEFT$(Y$(M),1)="D" THEN Y$(M)="DEL"
3044 LOCATE 23,58:PRINT"            ";:LOCATE 23,58:PRINT"  "+Y$(M);:MR2=1
3045 LOCATE 7+MR,MC+1:PRINT USING "###";M;
3046 IF X$(M)="" THEN X$(M)="DEL"
3047 IF Y$(M)="" THEN Y$(M)="DEL"
3048 LOCATE 7+MR,MC+5:XX1=VAL(X$(M)):XX2=LEN(X$(M)):IF XX2<10 THEN P1$=LEFT$(DUMMY$,10-XX2)+X$(M) ELSE IF XX2>10 THEN P1$=RIGHT$(X$(M),10) ELSE P1$=LEFT$(X$(M),10)
3049 PRINT P1$;:LOCATE 7+MR,MC+16:YY1=VAL(Y$(M)):YY2=LEN(Y$(M)):IF YY2<10 THEN P2$=LEFT$(DUMMY$,10-YY2)+Y$(M) ELSE IF YY2>10 THEN P2$=RIGHT$(Y$(M),10) ELSE P2$=LEFT$(Y$(M),10)
3050 PRINT P2$:MR=MR+1
3052 IF M MOD 14=0 THEN MR=1:MC=MC+26
3053 IF M MOD 42=0 THEN MR=1:MC=1:GOSUB 64000
3054 IF LEFT$(X$(M),1)="S" OR LEFT$(X$(M),1)="s" OR LEFT$(Y$(M),1)="S" OR LEFT$(Y$(M),1)="s" THEN GOTO 3100
3075 IF LP=1 THEN LPRINT"X( ";J;" )= ";X$(J);TAB(40);"Y( ";J;" )= ";Y$(J)
3077 M=M+1:IF MR>14 THEN MR=1:MC=MC+26:IF MC>55 THEN MC=1
3078 IF MR2=1 THEN 3037
3080 NEXT J
3090 GOTO 120
3100 X$(M)="END":Y$(M)="END":LOCATE 25,1:PRINT"(S)top encountered.  More Data (Y or N).";:INPUT;A$
3110 IF A$ = "Y" OR A$ = "y" THEN MR=MR-1:LOCATE 25,1:PRINT"                                                    ";:GOTO 3040
3120 GOTO 3430
3430 CLS:PRINT "Rearranging Data for Deletions"
3470 K1=1
3480 FOR I= 1 TO 255
3490 X1$(I)=X$(I): Y1$(I)=Y$(I): NEXT I
3540 FOR I= 1 TO 255
3545 IF X1$(I)="DEL" OR Y1$(I)="DEL" THEN 3580
3550 IF X1$(I)<>"DEL"  THEN GOSUB 3587
3570 IF X1$(I)="END" THEN X$(K1)="END":Y$(K1)="END": GOTO 3582
3580 NEXT I
3582 FOR I= 1 TO 255: IF X$(I)="END" OR LEFT$(X$(I),1)="S" OR LEFT$(X$(I),1)="s" GOTO 3584
3583 NEXT I
3584 IF QZ=1 THEN RETURN ELSE PRINT "There are now "; I-1;" VALID data points. ":FOR I=1 TO 500:NEXT I:GOTO 3590
3587 X$(K1)=X1$(I): Y$(K1)=Y1$(I): K1=K1+1: RETURN
3590 Q7=0:IF QA=1 THEN QA=0:GOTO 20045
3591 IF DE=1 THEN DE=0:GOTO 7090
3592 IF QZ=1 THEN RETURN
3600 INPUT "LIST NEW DATA SET (Y/N) ";A2$
3610 IF A2$="Y" OR A2$= "y" GOTO 9005 ELSE 120
4000 CLS:GOSUB 38000: PRINT "CALCULATING SUMS AND SUMS OF SQUARES"
4010 QA=0
4020 GOTO 20000
4040 CLS:GOSUB 38000:IF X$(1)="END" OR Y$(1)="END" THEN PRINT "NO DATA ENTERED, CAN'T SHOW COEFFICIENTS!": PRINT CHR$(7): FOR I=1 TO 1000: NEXT I: GOTO 120
4220 MX=0
4230 FOR I=1 TO 25
4240 IF RC(I)>MX THEN 4250
4245 GOTO 4260
4250 MX=RC(I):MQ=I
4260 NEXT I
4265 IF R2=1 THEN R2=0 :RETURN
4500 PRINT CHR$(7):A1$="###":A2$="#.####^^^^":A3$="##.####":A0$="###.####"
4501 INPUT "Output Coefficients to Printer (Y or N) ";Q1$:INPUT "Output Coefficients to Screen (Y or N) ";SO$
4502 CLS:GOSUB 38000:GOSUB 50000:A5$="EQ#    COEF A      COEF B      COEF C       R^2    R^2 C   EQUATION"
4503 IF LEFT$(SO$,1)="Y" OR LEFT$(SO$,1)="y" THEN GOTO 4507
4505 IF LEFT$(Q1$,1)="Y" OR LEFT$(Q1$,1)="y" THEN 4550 ELSE 120
4507 PRINT "╔═══════════╦════════════════════════════════════╦════════════════════════════╗"
4508 PRINT "║ CURVEFIT  ║ LISTING OF CALCULATED COEFFICIENTS ║ BEST FIT EQUATION IS #     ║"
4509 PRINT "╠════╤══════╩═════╤════════════╤════════════╤════╩═╤══════╤═══════════════════╣"
4510 PRINT "║EQ #│ 'A' COEF.  │ 'B' COEF.  │ 'C' COEF.  │ R²   │R² COR│ EQUATION OF CURVE ║"
4511 PRINT "╟────┼────────────┼────────────┼────────────┼──────┼──────┼───────────────────╢"
4512 FOR I=1 TO 16:PRINT "║    │            │            │            │      │      │                   ║":NEXT I
4515 PRINT "╟────┼────────────┼────────────┼────────────┼──────┼──────┼───────────────────╢"
4516 PRINT "║BEST│            │            │            │      │      │                   ║"
4517 PRINT "╚════╧════════════╧════════════╧════════════╧══════╧══════╧═══════════════════╝";
4518 C1$="#.####":C2$="#######.####":C3$="###"
4520 LOCATE 2,75:PRINT MQ;
4522 LOCATE 23,7:V=A(MQ):GOSUB 4700:PRINT USING C2$;A(MQ);:LOCATE 23,20:V=B(MQ):GOSUB 4700:PRINT USING C2$;B(MQ);:LOCATE 23,33:V=C(MQ):GOSUB 4700:PRINT USING C2$;C(MQ);
4523 LOCATE 23,46:PRINT USING C1$;RR(MQ);:LOCATE 23,53:PRINT USING C1$;RC(MQ);:LOCATE 23,60:PRINT EQ$(MQ);
4524 MR=6:
4526 FOR I=1 TO 16
4528 LOCATE MR,2:PRINT USING C3$;I;:LOCATE MR,7:V=A(I):GOSUB 4700:PRINT USING C2$;A(I):LOCATE MR,20:V=B(I):GOSUB 4700:PRINT USING C2$;B(I)::LOCATE MR,33:V=C(I):GOSUB 4700:PRINT USING C2$;C(I);
4529 LOCATE MR,46:PRINT USING C1$;RR(I);:LOCATE MR,53:PRINT USING C1$;RC(I);:LOCATE MR,60:PRINT EQ$(I);
4530 MR=MR+1
4531 NEXT I
4532 LOCATE 25,1:INPUT;"PLEASE PRESS <ENTER> TO SEE THE REMAINING EQUATION COEFFICIENTS ";AA$:LOCATE 25,1:PRINT STRING$(78," ");
4534 MR=6
4536 FOR I=1 TO 16
4538 LOCATE MR,2:PRINT"    ";:LOCATE MR,7:PRINT "            ";:LOCATE MR,20:PRINT "            ";:LOCATE MR,33:PRINT "            ";:LOCATE MR,46:PRINT "      ";:LOCATE MR,53:PRINT "      ";:LOCATE MR,60:PRINT "                   ";
4540 MR=MR+1:NEXT I
4542 MR=6:FOR I=17 TO 25
4544 LOCATE MR,2:PRINT USING C3$;I;:LOCATE MR,7:V=A(I):GOSUB 4700:PRINT USING C2$;A(I);:LOCATE MR,20:V=B(I):GOSUB 4700:PRINT USING C2$;B(I);:LOCATE MR,33:V=C(I):GOSUB 4700:PRINT USING C2$;C(I);:LOCATE MR,46:PRINT USING C1$;RR(I);
4545 LOCATE MR,53:PRINT USING C1$;RC(I);:LOCATE MR,60:PRINT EQ$(I);
4546 MR=MR+1:NEXT I
4548 LOCATE 25,1:INPUT;"ALL EQUATIONS HAVE BEEN LISTED.  PRESS <ENTER> TO RETURN TO MAIN MENU ";AAA$
4550 IF LP=1 THEN 4574 ELSE 120
4574 LPRINT A5$:FOR I=1 TO 25
4575 IF A(I)=0 AND B(I)=0 THEN 4578
4576 IF LP=1 THEN LPRINT USING A1$;I;:LPRINT"  ";:LPRINT USING A2$;A(I);:LPRINT"  ";:LPRINT USING A2$;B(I);:LPRINT"  ";:LPRINT USING A2$;C(I);:LPRINT"  ";:LPRINT USING A3$;RR(I);:LPRINT USING A0$;RC(I);:LPRINT" ";:LPRINT EQ$(I)
4578 NEXT I
4605 IF LP=1 THEN LPRINT"BASED ON THE VALUE OF RC( )--BEST FITTING CURVE WAS NUMBER";MQ
4610 LOCATE 25,1:INPUT "PRESS <ENTER> to return to MAIN MENU                                        ";A$:CLS:GOSUB 38000
4620 IF LP=1 THEN LPRINT CHR$(12)
4630 GOTO 120
4700 IF V>9999999.9999# OR V<-999999.9999# OR ABS(V)<.0001 THEN C2$="##.#####^^^^" ELSE C2$="#######.####"
4701 IF V=0 THEN C2$="#######.####"
4702 RETURN
4710 IF ABS(V)<9999.9999# OR V=0 THEN C2$="#####.####":GOTO 4750
4711 IF ABS(V)<999999.99# THEN C2$="#######.##":GOTO 4750
4712 IF ABS(V)<99999999# THEN C2$="##########"
4750 RETURN
4990 CLS:GOSUB 38000:AZ$=""
5000 K=0:L=0:IF AZ$="S" THEN INPUT "All data entered, press <Enter> to continue";A$
5002 AZ$="":Q1$="":Q1A$="":PF$="":PF1$="":CLS:GOSUB 38000:PRINT"RESIDUAL Values of Y, Given EQ#. ":K=1
5003 CLOSE:LOCATE 25,1:INPUT "Quit and return to main menu or Continue (Q or C) DEFAULT = Continue ";AZ$:CLS:GOSUB 38000
5004 CLS:GOSUB 38000:IF L=1 AND LP=1 THEN LPRINT CHR$(12) 
5005 IF LEFT$(AZ$,1)="q" OR LEFT$(AZ$,1)="Q" THEN 120
5006 INPUT "Output results to printer (Y or N) DEFAULT =N";Q1$:INPUT "Output Residuals to a File (Y) or (N) DEFAULT = N";Q1A$:IF LEFT$(Q1A$,1)="Y" OR LEFT$(Q1A$,1)="y" THEN GOTO 57000
5007 INIT=1:GOSUB 50000:CLS:GOSUB 38000
5008 PRINT "╔═══════════╦═════════════╤═════╤══════╤════════════════════════════╤═════════╗"
5009 PRINT "║ CURVEFIT  ║  RESIDUALS  │ EQ# │      │<ENTER> FOR EQ# OF BEST FIT │VER 2.20B║"
5010 PRINT "╠═══════════╩╤════════════╪═════╧══════╪═════════════╤═════════════╤╧═════════╣"
5013 PRINT "║X-DATA ENTRY│Y-DATA ENTRY│CALCULATED Y│RESIDUAL VAL │CSUM ABS(RES)│  POINT # ║"
5014 PRINT "╟────────────┼────────────┼────────────┼─────────────┼─────────────┼──────────╢"
5015 FOR I=1 TO 16:PRINT"║            │            │            │             │             │          ║":NEXT I
5029  PRINT"╟────────────┴───┬────────┴───────┬────┴───────────┬─┴─────────────┴┬─────────╢"
5030 PRINT "║ Coefficients   │A=              │B=              │C=              │R²=      ║"
5031 PRINT "╚════════════════╧════════════════╧════════════════╧════════════════╧═════════╝";
5032 EQ=0:LOCATE 2,34:PRINT"▒▒▒▒▒▒";:LOCATE 2,34:INPUT;EQ:IF EQ=0 THEN EQ=MQ:LOCATE 2,34:PRINT MQ;:LOCATE 2,41:PRINT"                            ";:LOCATE 2,41:PRINT"BEST ";EQ$(MQ);:GOTO 5053
5033 LOCATE 2,34:PRINT"      ";:LOCATE 2,34:PRINT EQ;:IF EQ<0 OR EQ>25 THEN 5038 ELSE IF A(EQ)=0 AND B(EQ)=0 THEN 5043 ELSE LOCATE 2,41:PRINT "                            ";:LOCATE 2,41:PRINT EQ$(EQ);
5038 IF EQ<0 OR EQ>25 THEN LOCATE 2,41:PRINT"                            ";:LOCATE 2,41:PRINT "EQUATION";EQ;" IS UNDEFINED ";:GOTO 5032
5039 GOTO 5053
5043 LOCATE 2,41:PRINT " A AND B = ZERO FOR EQ   ";EQ;:GOTO 5032
5053 IF LP=1 THEN LPRINT"RESDUALS FOR EQUATION ";EQ$(EQ):LPRINT" "
5054 LOCATE 23,21:V=A(EQ):GOSUB 4700:PRINT USING C2$;A(EQ);:LOCATE 23,38:V=B(EQ):GOSUB 4700:PRINT USING C2$;B(EQ);:LOCATE 23,55:V=C(EQ):GOSUB 4700:PRINT USING C2$;C(EQ);:LOCATE 23,73:PRINT USING"#.####";RC(EQ);
5060 K=0:ON EQ GOTO 5100,5110,5120,5130,5140,5150,5160,5170,5180,5190,5200,5210,5220,5230,5240,5250,5260,5270,5280,5290,5300,5310,5320,5330,5340,5350
5100 I=1:YRS=0:WHILE X$(I)<>"END"
5101 Y=A(1)+B(1)*X(I):YR=Y(I)-Y:YRS=YRS+ABS(YR):GOSUB 5500
5102 I=I+1
5103 WEND
5104 GOTO 5003
5110 I=1:YRS=0:WHILE X$(I)<>"END": Y=B(2)*X(I):YR=Y(I)-Y:YRS=YRS+ABS(YR):GOSUB 5500:I=I+1:WEND:GOTO 5003
5120 I=1:YRS=0:WHILE X$(I)<>"END": Y=1/(A(3)+B(3)*X(I)):YR=Y(I)-Y:YRS=YRS+ABS(YR):GOSUB 5500:I=I+1:WEND:GOTO 5003
5130 I=1:YRS=0:WHILE X$(I)<>"END": Y=A(4)+B(4)*X(I)+C(4)/X(I):YR=Y(I)-Y:YRS=YRS+ABS(YR):GOSUB 5500:I=I+1:WEND:GOTO 5003
5140 I=1:YRS=0:WHILE X$(I)<>"END": Y=A(5)+B(5)/X(I):YR=Y(I)-Y:YRS=YRS+ABS(YR):GOSUB 5500:I=I+1:WEND:GOTO 5003
5150 I=1:YRS=0:WHILE X$(I)<>"END": Y=X(I)/(A(6)*X(I)+B(6)):YR=Y(I)-Y:YRS=YRS+ABS(YR):GOSUB 5500:I=I+1:WEND:GOTO 5003
5160 I=1:YRS=0:WHILE X$(I)<>"END": Y=A(7)+B(7)/X(I)+C(7)/(X(I)*X(I)):YR=Y(I)-Y:YRS=YRS+ABS(YR):GOSUB 5500:I=I+1:WEND:GOTO 5003
5170 I=1:YRS=0:WHILE X$(I)<>"END": Y=A(8)+B(8)*X(I)+C(8)*X(I)*X(I):YR=Y(I)-Y:YRS=YRS+ABS(YR):GOSUB 5500:I=I+1:WEND:GOTO 5003
5180 I=1:YRS=0:WHILE X$(I)<>"END": Y=A(9)*X(I)+B(9)*X(I)*X(I):YR=Y(I)-Y:YRS=YRS+ABS(YR):GOSUB 5500:I=I+1:WEND:GOTO 5003
5190 I=1:YRS=0:WHILE X$(I)<>"END": Y=A(10)*X(I)^B(10):YR=Y(I)-Y:YRS=YRS+ABS(YR):GOSUB 5500:I=I+1:WEND:GOTO 5003
5200 I=1:YRS=0:WHILE X$(I)<>"END": Y=A(11)*B(11)^X(I):YR=Y(I)-Y:YRS=YRS+ABS(YR):GOSUB 5500:I=I+1:WEND:GOTO 5003
5210 I=1:YRS=0:WHILE X$(I)<>"END": Y=A(12)*B(12)^(1/X(I)):YR=Y(I)-Y:YRS=YRS+ABS(YR):GOSUB 5500:I=I+1:WEND:GOTO 5003
5220 I=1:YRS=0:WHILE X$(I)<>"END": Y=A(13)*X(I)^(B(13)*X(I)):YR=Y(I)-Y:YRS=YRS+ABS(YR):GOSUB 5500:I=I+1:WEND:GOTO 5003
5230 I=1:YRS=0:WHILE X$(I)<>"END": Y=A(14)*X(I)^(B(14)/X(I)):YR=Y(I)-Y:YRS=YRS+ABS(YR):GOSUB 5500:I=I+1:WEND:GOTO 5003
5240 I=1:YRS=0:WHILE X$(I)<>"END": Y=A(15)*EXP(B(15)*X(I)):YR=Y(I)-Y:YRS=YRS+ABS(YR):GOSUB 5500:I=I+1:WEND:GOTO 5003
5250 I=1:YRS=0:WHILE X$(I)<>"END": Y=A(16)*EXP(B(16)/X(I)):YR=Y(I)-Y:YRS=YRS+ABS(YR):GOSUB 5500:I=I+1:WEND:GOTO 5003
5260 I=1:YRS=0:WHILE X$(I)<>"END": Y=A(17)+B(17)*LOG(X(I)):YR=Y(I)-Y:YRS=YRS+ABS(YR):GOSUB 5500:I=I+1:WEND:GOTO 5003
5270 I=1:YRS=0:WHILE X$(I)<>"END": Y=1/(A(18)+B(18)*LOG(X(I))):YR=Y(I)-Y:YRS=YRS+ABS(YR):GOSUB 5500:I=I+1:WEND:GOTO 5003
5280 I=1:YRS=0:WHILE X$(I)<>"END": Y=A(19)*B(19)^X(I)*X(I)^C(19):YR=Y(I)-Y:YRS=YRS+ABS(YR):GOSUB 5500:I=I+1:WEND:GOTO 5003
5290 I=1:YRS=0:WHILE X$(I)<>"END": Y=A(20)*B(20)^(1/X(I))*X(I)^C(20):YR=Y(I)-Y:YRS=YRS+ABS(YR):GOSUB 5500:I=I+1:WEND:GOTO 5003
5300 I=1:YRS=0:WHILE X$(I)<>"END": Y=A(21)*EXP(((X(I)-B(21))^2)/C(21)):YR=Y(I)-Y:YRS=YRS+ABS(YR):GOSUB 5500:I=I+1:WEND:GOTO 5003
5310 I=1:YRS=0:WHILE X$(I)<>"END": Y=A(22)*EXP((LOG(X(I))-B(22))^2/C(22)):YR=Y(I)-Y:YRS=YRS+ABS(YR):GOSUB 5500:I=I+1:WEND:GOTO 5003
5320 I=1:YRS=0:WHILE X$(I)<>"END": Y=A(23)*X(I)^B(23)*(1-X(I))^C(23):YR=Y(I)-Y:YRS=YRS+ABS(YR):GOSUB 5500:I=I+1:WEND:GOTO 5003
5330 I=1:YRS=0:WHILE X$(I)<>"END": Y=A(24)*(X(I)/B(24))^C(24)*EXP(X(I)/B(24)):YR=Y(I)-Y:YRS=YRS+ABS(YR):GOSUB 5500:I=I+1:WEND:GOTO 5003
5340 I=1:YRS=0:WHILE X$(I)<>"END": Y=1/(A(25)*(X(I)+B(25))^2+C(25)):YR=Y(I)-Y:YRS=YRS+ABS(YR):GOSUB 5500:I=I+1:WEND:GOTO 5003
5350 REM * END OF RESIDUAL CALCS*
5500 IF INIT =1 THEN M=1:MR=1:MC=1:MR1=1:MC1=1
5502 L=1:INIT=0
5503 IF LEFT$(Q1A$,1)="Y" OR LEFT$(Q1A$,1)="y" THEN PRINT #1, X(I), Y(I), Y, YR
5505 LOCATE 5+MR,2:V=X(I):GOSUB 4700:PRINT USING C2$;X(I);:LOCATE 5+MR,15:V=Y(I):GOSUB 4700:PRINT USING C2$;Y(I);:LOCATE 5+MR,28:
5506 V=Y:GOSUB 4700:PRINT USING C2$;Y;:V=YR:LOCATE 5+MR,41:GOSUB 4700:PRINT USING C2$;YR;:LOCATE 5+MR,55:V=YRS:GOSUB 4700:PRINT USING C2$;YRS:LOCATE 5+MR,74:PRINT USING "####";I;
5507 IF LP=1 THEN LPRINT"X = ";USING C2$;X(I),:LPRINT"   Y = ";USING C5$;Y(I),:LPRINT"   PRED = ";USING C5$;Y,:LPRINT"   RES = ";USING C5$;YR
5508 MR=MR+1:M=M+1:IF MR MOD 17=0 THEN MR=1:GOSUB 5600
5511 IF LP=1 THEN 5515
5515 IF LP=1 AND (INT(M/60)=(M/60)) THEN LPRINT CHR$(12)
5520 RETURN
5600 LOCATE 25,1:PRINT"PLEASE PRESS <ENTER> FOR MORE DATA";:INPUT;A$:LOCATE 25,1:PRINT"                                                                       ";
5602 FOR I3=1 TO 16:LOCATE 5+I3,2:PRINT"            ";:LOCATE 5+I3,15:PRINT"            ";:LOCATE 5+I3,28:PRINT"            ";:LOCATE 5+I3,41:PRINT"             ";:LOCATE 5+I3,55:PRINT"             ";:LOCATE 5+I3,74:PRINT"    ";:NEXT I3
5620 RETURN
6000 REM * STORE DATA ON DISK (RAW DATA ONLY) *
6030 CLS:PRINT "This routine will store RAW DATA on Disk"
6035 ON ERROR GOTO 63000
6040 INPUT "Please enter File Name for Data Storage ";A4$
6050 OPEN "O",1,A4$
6060 FOR I=1 TO 255
6065 IF X$(I)="END" AND Y$(I)="END" THEN CLOSE 1:GOTO 6080
6070 PRINT #1,X$(I),Y$(I):NEXT I:CLOSE 1
6080 PRINT "Data have been stored to disk with File Name ";A4$
6090 INPUT "Press <Enter> to return to MAIN MENU";Z0
6100 GOTO 120
7000 REM * LOAD DATA FROM DISK *
7030 CLS:PRINT"This routine will load DATA from Disk"
7035 ON ERROR GOTO 61000
7040 INPUT "PLEASE Enter File Name for Data ";A4$
7041 FOR I=1 TO 255:X$(I)="END":Y$(I)="END":NEXT I
7045 NX=0:NY=0:FOR I=1 TO 25:A(I)=0:B(I)=0:C(I)=0:R(I)=0:RC(I)=0:NEXT I
7050 OPEN "I",1,A4$
7060 FOR I=1 TO 255
7065 IF EOF(1) THEN PRINT"ALL DATA LOADED":K=I:FOR J=K TO 255:X$(J)="END":Y$(J)="END":NEXT J:GOTO 7075
7070 INPUT #1,X$(I)
7071 IF INSTR(2,X$(I)," ")<>0 THEN 7200
7073 INPUT #1,Y$(I):NEXT I
7075 CLOSE 1
7080 PRINT "Data loaded from file ";A4$
7082 FOR I=1 TO 255:IF X$(I)="" THEN X$(I)="DEL":Y$(I)="DEL"
7083 IF X$(I)="END" THEN IF X$(1)<>"DEL" THEN 7090 ELSE DE=1:GOTO 3430
7084 NEXT I:DE=1:GOTO 3430
7090 INPUT "Press ENTER to Continue";A9:GOTO 3430
7100 GOTO 120
7200 CLOSE 1:OPEN "I",1,A4$
7210 FOR I=1 TO 255
7220 IF EOF(1) THEN PRINT"ALL DATA LOADED":K=I:FOR J=K TO 255:X$(J)="END":Y$(J)="END":NEXT J:GOTO 7275
7230 INPUT #1,DUMM$
7240 PM=INSTR(2,DUMM$," "):X$(I)=LEFT$(DUMM$,PM):Y$(I)=RIGHT$(DUMM$,LEN(DUMM$)-PM):NEXT I
7275 GOTO 7075
8000 CLS:GOSUB 38000:PRINT"PROGRAM EXECUTION HAS BEEN TERMINATED"
8010 INPUT "Before exiting do you wish to store data on disk (Y or N)";A$
8020 IF LEFT$(A$,1)="N" OR LEFT$(A$,1)="n"  THEN END
8030 GOTO 6030
9000 REM * LIST RAW DATA *
9005 CLS:GOSUB 38000:PRINT "LIST OF DATA ENTERED"
9006 INPUT "Do you want to list data on printer (Y or N)";Q1$
9007 GOSUB 50000:GOTO 63700
9008 IF LP=1 THEN LPRINT"LISTING OF DATA":LPRINT" "
9009 IF LP=0 THEN 9100
9010 FOR I=1 TO 255
9020 IF X$(I)="END" OR Y$(I)="END" THEN LPRINT CHR$(12):GOTO 9100
9065 IF LP=1 THEN LPRINT"X( ";I;" )= ";X$(I);TAB(32);"Y( ";I;" )= ";Y$(I)
9066 IF LP=1 AND (INT(I/60)=(I/60)) THEN LPRINT CHR$(12)
9074 NEXT I:IF LP=1 THEN LPRINT CHR$(12)
9100 IF Q7=1 THEN  Q7=0:RETURN
9110 GOTO 120
10000 CLS: GOSUB 38000
10010 PRINT "╔═══════════════════════════════════════════════════════════════════════════╗"
10020 PRINT "║     LISTING of Equations Fitted with CURVEFIT Version 2.20-B  (02/03/89)  ║"
10030 PRINT "╟────────────────────────────────────┬──────────────────────────────────────╢"
10040 PRINT "║  1. Y=A+B*X       STR. LINE        │   2. Y=B*X           LINE THRU ORG.  ║"
10050 PRINT "║  3. Y=1/(A+B*X)   REC. STR LINE    │   4. Y=A+B*X+C/X     LIN AND RECIP.  ║"
10060 PRINT "║  5. Y=A+B/X       HYPERBOLA        │   6. Y=X/(A*X+B)     RECIP HYPERBOLA ║"
10070 PRINT "║  7. Y=A+B/X+C/X*X 2ND ORD HYP      │   8. Y=A+B*X+C*X*X   PARABOLA        ║"
10080 PRINT "║  9. Y=A*X+B*X*X   PAR AT ORIGIN    │  10. Y=A*X^B         POWER           ║"
10090 PRINT "║ 11. Y=A*B^X       MOD. POWER       │  12. Y=A*B^(1/X)     ROOT            ║"
10100 PRINT "║ 13. Y=A*X^(B*X)   SUPER GEOMET.    │  14. Y=A*X^(B/X)     MOD GEOMETRIC   ║"
10110 PRINT "║ 15. Y=A*e^(B*X)   EXPONENTIAL      │  16. Y=A*e^(B/X)     MOD EXPONENTIAL ║"
10120 PRINT "║ 17. Y=A+B*ln(X)   LOGARITHMIC      │  18. Y=1/(A+B*ln(X))   RECIP LOG     ║"
10130 PRINT "║ 19. Y=A*B^X*X^C   HOERL FUNCTION   │  20. Y=A*B^(1/X)*X^C   MOD HOERL     ║"
10140 PRINT "║ 21. Y=A*e^(((X-B)^2)/C)  NORMAL    │  22. Y=A*e^((ln(X)-B)^2/C) LOG NORMAL║"
10150 PRINT "║ 23. Y=A*X^B*(1-X)^C   BETA         │  24. Y=A*(X/B)^C*e^(X/B)   GAMMA     ║"
10160 PRINT "║ 25. Y=1/(A*(X+B)^2+C) CAUCHY       │                                      ║"
10170 PRINT "╟────────────────────────────────────┴──────────────────────────────────────╢"
10180 PRINT "║      NOTES:  A.  Values of X and Y may be positive, negative, or zero     ║"
10190 PRINT "║              B.  Only 255 values of X and Y can be used.                  ║"
10200 PRINT "╟───────────────────────────────────────────────────────────────────────────╢"
10210 PRINT "║      Press <RETURN> to continue program execution                         ║"
10220 PRINT "╚═══════════════════════════════════════════════════════════════════════════╝"
10230 A$=INKEY$:IF A$<>CHR$(13) THEN 10230 ELSE 10460
10460 IF R1=1 THEN RETURN ELSE 120
12000 FOR I=1 TO 25:A(I)=0:B(I)=0:C(I)=0:RR(I)=0:RC(I)=0:NEXT I
12005 REM * EQUATION 1 STRAIGHT LINE
12008 ON ERROR GOTO 62101
12010 A(1)=(R(17)*R(18)-R(16)*R(20))/(R(17)*R(21)-(R(16)*R(16)))
12020 B(1)=(R(20)*R(21)-R(16)*R(18))/(R(17)*R(21)-(R(16)*R(16)))
12030 RR(1)=(A(1)*R(18)+B(1)*R(20)-(R(18)*R(18))/R(21))/(R(19)-(R(18)*R(18))/R(21))
12040 RC(1)=1-(((1-RR(1))*(R(21)-1))/(R(21)-2))
12050 C(1)=0
12060 REM * EQUATION 2 STRAIGHT LINE THROUGH ORIGIN *
12061 A(2)=0:B(2)=R(20)/R(17):RR(2)=0:RC(2)=0:C(2)=0
12070 ON ERROR GOTO 62102: REM The rest of this routine supplied by J. Cargal
12071 SSTO=R(19)-((R(18)/R(21))*R(18)):REM R^2=MAX{0,1-(SSE/SSTO)}
12072 SSE=0: FOR I=1 TO R(21):SSE=SSE+(Y(I)-B(2)*X(I))^2:NEXT I
12080 RR(2)=1-SSE/SSTO:IF RR(2)<0 THEN RR(2)=0
12081 IF RR(2)>1 THEN RR(2)=1:RC(2)=1
12082 RC(2)=RR(2)
12140 REM * EQUATION 3 RECIPROCAL OF STRAIGHT LINE
12145 ON ERROR GOTO 62103
12150 A(3)=(R(17)*R(24)-R(16)*R(34))/(R(17)*R(21)-(R(16)*R(16)))
12160 B(3)=(R(21)*R(34)-R(16)*R(24))/(R(17)*R(21)-(R(16)*R(16)))
12170 RR(3)=(A(3)*R(24)+B(3)*R(34)-((R(24)*R(24))/R(21)))/(R(25)-(R(24)*R(24))/R(21))
12180 RC(3)=1-(((1-RR(3))*(R(21)-1))/(R(21)-2))
12190 C(3)=0
12200 REM * EQUATION 4  COMBINED LINEAR AND RECIPROCAL *
12201 ON ERROR GOTO 62104
12220 S1=R(17)*R(21)-(R(16)*R(16))
12230 S2=R(21)*R(35)-R(18)*R(22)
12240 S3=(R(21)*R(21))-R(16)*R(22)
12250 S4=R(20)*R(21)-R(16)*R(18)
12260 S5=R(21)*R(23)-(R(22)*R(22))
12270 C(4)=(S1*S2-S3*S4)/(S1*S5-(S3*S3))
12280 B(4)=(S4-S3*C(4))/S1
12290 A(4)=(R(18)-B(4)*R(16)-C(4)*R(22))/R(21)
12300 RR(4)=(A(4)*R(18)+B(4)*R(20)+C(4)*R(35)-(R(18)*R(18))/R(21))/(R(19)-(R(18)*R(18))/R(21))
12310 RC(4)=1-(((1-RR(4))*(R(21)-1))/(R(21)-3))
12320 REM * EQUATION 5  HYPERBOLA *
12321 ON ERROR GOTO 62105
12330 S1=R(21)*R(23)-(R(22)*R(22))
12340 A(5)=(R(18)*R(23)-R(22)*R(35))/S1
12360 B(5)=(R(21)*R(35)-R(18)*R(22))/S1
12370 RR(5)=(A(5)*R(18)+B(5)*R(35)-(R(18)*R(18))/R(21))/(R(19)-(R(18)*R(18))/R(21))
12380 RC(5)=1-(((1-RR(5))*(R(21)-1))/(R(21)-2))
12390 C(5)=0
12400 REM * EQUATION 6  RECIPROCAL OF A HYPERBOLA *
12401 ON ERROR GOTO 62106
12420 S1=R(21)*R(23)-(R(22)*R(22))
12430 A(6)=(R(23)*R(24)-R(22)*R(26))/S1
12440 B(6)=(R(21)*R(26)-R(22)*R(24))/S1
12450 RR(6)=(A(6)*R(24)+B(6)*R(26)-(R(24)*R(24))/R(21))/(R(25)-(R(24)*R(24))/R(21))
12460 RC(6)=1-(((1-RR(6))*(R(21)-1))/(R(21)-2))
12462 C(6)=0
12470 REM * EQUATION 7  SECOND ORDER HYPERBOLA *
12471 ON ERROR GOTO 62107
12490 S1=R(21)*R(23)-(R(22)*R(22))
12500 S2=R(21)*R(38)-R(18)*R(23)
12510 S3=R(21)*R(41)-R(22)*R(23)
12520 S4=R(21)*R(35)-R(18)*R(22)
12530 S5=R(21)*R(44)-(R(23)*R(23))
12535 IF (S1*S5-S3*S3)=0 THEN 12620
12540 C(7)=(S1*S2-S3*S4)/(S1*S5-(S3*S3))
12545 IF C(7)>=9.999999E+37 THEN A(7)=0:B(7)=0:C(7)=0:GOTO 12590
12550 B(7)=(S4-S3*C(7))/S1
12560 A(7)=(R(18)-C(7)*R(23)-B(7)*R(22))/R(21)
12570 RR(7)=(A(7)*R(18)+B(7)*R(35)+C(7)*R(38)-(R(18)*R(18))/R(21))/(R(19)-(R(18)*R(18))/R(21))
12580 RC(7)=1-(((1-RR(7))*(R(21)-1))/(R(21)-3))
12590 REM * EQUATION 8  PARABOLA *
12591 ON ERROR GOTO 62108
12620 S1=R(17)*R(21)-(R(16)*R(16))
12630 S2=R(21)*R(36)-R(17)*R(18)
12640 S3=R(21)*R(40)-R(16)*R(17)
12650 S4=R(20)*R(21)-R(16)*R(18)
12660 S5=R(21)*R(43)-(R(17)*R(17))
12670 C(8)=(S1*S2-S3*S4)/(S1*S5-(S3*S3))
12680 B(8)=(S4-S3*C(8))/S1
12690 A(8)=(R(18)-C(8)*R(17)-B(8)*R(16))/R(21)
12700 RR(8)=(A(8)*R(18)+B(8)*R(20)+C(8)*R(36)-(R(18)*R(18))/R(21))/(R(19)-(R(18)*R(18))/R(21))
12710 RC(8)=1-(((1-RR(8))*(R(21)-1))/(R(21)-3))
12720 REM * EQUATION 9  PARABOLA THROUGH ORIGIN *
12721 ON ERROR GOTO 62109
12750 S1=R(17)*R(43)-(R(40)*R(40))
12760 A(9)=(R(20)*R(43)-R(36)*R(40))/S1
12770 B(9)=(R(17)*R(36)-R(20)*R(40))/S1
12780 C(9)=0: RR(9)=0: RC(9)=0
12810 REM * EQUATION 10  POWER *
12811 ON ERROR GOTO 62110
12820 IF NX=1 OR NY=1 THEN 13000
12840 S1=R(21)*R(29)-(R(28)*R(28))
12850 S3=(R(29)*R(30)-R(28)*R(32))/S1
12860 A(10)=EXP((R(29)*R(30)-R(28)*R(32))/S1)
12870 B(10)=(R(21)*R(32)-R(28)*R(30))/S1
12875 RR(10)=(S3*R(30)+B(10)*R(32)-(R(30)*R(30))/R(21))/(R(31)-(R(30)*R(30))/R(21))
12880 IF RR(10)<0 OR RR(10)>1 THEN A(10)=0:B(10)=0:GOTO 13000
12890 RC(10)=1-(((1-RR(10))*(R(21)-1))/(R(21)-2))
12895 C(10)=0
13000 REM * EQUATION 11  MODIFIED POWER *
13001 ON ERROR GOTO 62111
13010 IF NY=1 THEN 13110
13020 S1=R(17)*R(21)-(R(16)*R(16))
13030 S2=(R(17)*R(30)-R(16)*R(46))/S1
13040 S3=(R(21)*R(46)-R(16)*R(30))/S1
13060 A(11)=EXP(S2)
13070 B(11)=EXP(S3)
13080 RR(11)=(S2*R(30)+S3*R(46)-(R(30)*R(30))/R(21))/(R(31)-(R(30)*R(30))/R(21))
13090 RC(11)=1-(((1-RR(11))*(R(21)-1))/(R(21)-2))
13100 C(11)=0
13110 REM * EQUATION 12  ROOT *
13111 ON ERROR GOTO 62112
13120 IF NY=1 THEN 13210
13140 S1=R(23)*R(21)-(R(22)*R(22))
13150 S2=(R(23)*R(30)-R(22)*R(47))/S1
13160 S3=(R(21)*R(47)-R(22)*R(30))/S1
13165 IF S2>87 OR S3>87 OR S2<-86 OR S3<-86 THEN 13210:REM Error trap to keep
13170 A(12)=EXP(S2):REM QB4 and TB1.1 from crashing and to prevent QB3 from
13180 B(12)=EXP(S3):REM giving erroneous results.  Added 4/4/88
13190 RR(12)=(S2*R(30)+S3*R(47)-(R(30)*R(30))/R(21))/(R(31)-(R(30)*R(30))/R(21))
13200 RC(12)=1-(((1-RR(12))*(R(21)-1))/(R(21)-2)):C(12)=0
13210 REM * EQUATION 13  SUPER GEOMETRIC *
13211 ON ERROR GOTO 62113
13220 IF NX=1 OR NY=1 THEN 13400
13240 S1=R(21)*R(49)-(R(48)*R(48))
13250 S2=(R(30)*R(49)-R(48)*R(50))/S1
13260 A(13)=EXP(S2)
13270 B(13)=(R(21)*R(50)-R(30)*R(48))/S1
13280 RR(13)=(S2*R(30)+B(13)*R(50)-(R(30)*R(30))/R(21))/(R(31)-(R(30)*R(30))/R(21))
13290 RC(13)=1-(((1-RR(13))*(R(21)-1))/(R(21)-2))
13295 C(13)=0
13300 REM * EQUATION 14  MODIFIED GEOMETRIC *
13301 ON ERROR GOTO 62114
13330 S1=R(21)*R(53)-(R(63)*R(63))
13340 S2=(R(30)*R(53)-R(63)*R(58))/S1
13350 A(14)=EXP(S2)
13360 B(14)=(R(21)*R(58)-R(30)*R(63))/S1
13370 RR(14)=(S2*R(30)+B(14)*R(58)-(R(30)*R(30))/R(21))/(R(31)-(R(30)*R(30))/R(21))
13380 RC(14)=1-(((1-RR(14))*(R(21)-1))/(R(21)-2))
13390 C(14)=0
13400 REM * EQUATION 15  EXPONENTIAL *
13401 ON ERROR GOTO 62115
13420 IF NY=1 THEN 13600
13430 S1=R(17)*R(21)-(R(16)*R(16))
13440 S2=(R(17)*R(30)-R(16)*R(46))/S1
13450 A(15)=EXP(S2)
13460 B(15)=(R(21)*R(46)-R(16)*R(30))/S1
13470 RR(15)=(S2*R(30)+R(46)*B(15)-(R(30)*R(30))/R(21))/(R(31)-(R(30)*R(30))/R(21))
13480 RC(15)=1-(((1-RR(15))*(R(21)-1))/(R(21)-2))
13490 C(15)=0
13500 REM * EQUATION 16  MODIFIED EXPONENTIAL *
13501 ON ERROR GOTO 62116
13530 S1=R(23)*R(21)-(R(22)*R(22))
13540 S2=(R(23)*R(30)-R(22)*R(47))/S1
13550 A(16)=EXP(S2)
13560 B(16)=(R(21)*R(47)-R(22)*R(30))/S1
13570 RR(16)=(S2*R(30)+B(16)*R(47)-(R(30)*R(30))/R(21))/(R(31)-(R(30)*R(30))/R(21))
13580 RC(16)=1-(((1-RR(16))*(R(21)-1))/(R(21)-2)):C(16)=0
13600 REM * EQUATION 17  LOGARITHMIC *
13601 ON ERROR GOTO 62117
13620 IF NX=1 THEN 14000
13630 S1=R(21)*R(29)-(R(28)*R(28))
13640 A(17)=(R(18)*R(29)-R(28)*R(51))/S1
13650 B(17)=(R(21)*R(51)-R(18)*R(28))/S1
13660 RR(17)=(A(17)*R(18)+B(17)*R(51)-(R(18)*R(18))/R(21))/(R(19)-(R(18)*R(18))/R(21))
13670 C(17)=0: RC(17)=1-(((1-RR(17))*(R(21)-1))/(R(21)-2))
13680 REM * EQUATION 18  RECIPROCAL OF LOGARITHMIC *
13681 ON ERROR GOTO 62118
13710 S1=R(21)*R(29)-(R(28)*R(28))
13720 A(18)=(R(24)*R(29)-R(28)*R(52))/S1
13730 B(18)=(R(21)*R(52)-R(24)*R(28))/S1
13740 RR(18)=(A(18)*R(24)+B(18)*R(52)-(R(24)*R(24))/R(21))/(R(25)-(R(24)*R(24))/R(21))
13750 C(18)=0:RC(18)=1-(((1-RR(18))*(R(21)-1))/(R(21)-2))
14000 REM * EQUATION 19  HOERL FUNCTION *
14001 ON ERROR GOTO 62119
14020 IF NX=1 OR NY=1 THEN 14300
14030 S1=R(17)*R(21)-(R(16)*R(16))
14040 S2=R(21)*R(32)-R(28)*R(30)
14050 S3=R(21)*R(48)-R(16)*R(28)
14060 S4=R(21)*R(46)-R(16)*R(30)
14070 S5=R(21)*R(29)-(R(28)*R(28))
14080 C(19)=(S1*S2-S3*S4)/(S1*S5-(S3*S3))
14090 S6=(S4-S3*C(19))/S1
14100 S7=(R(30)-C(19)*R(28)-S6*R(16))/R(21)
14105 IF S7>87 OR S8>87 THEN A(19)=0:B(19)=0:C(19)=0:GOTO 14150
14110 B(19)=EXP(S6)
14120 A(19)=EXP(S7)
14130 RR(19)=(S7*R(30)+S6*R(46)+C(19)*R(32)-(R(30)*R(30))/R(21))/(R(31)-(R(30)*R(30))/R(21))
14140 RC(19)=1-(((1-RR(19))*(R(21)-1))/(R(21)-3))
14150 REM * EQUATION 20  MODIFIED HOERL FUNCTION *
14151 ON ERROR GOTO 62120
14180 S1=R(21)*R(23)-(R(22)*R(22))
14190 S2=R(21)*R(32)-R(28)*R(30)
14200 S3=R(21)*R(45)-R(22)*R(28)
14210 S4=R(21)*R(47)-R(22)*R(30)
14220 S5=R(21)*R(29)-(R(28)*R(28))
14230 C(20)=(S1*S2-S3*S4)/(S1*S5-(S3*S3))
14240 S6=(S4-S3*C(20))/S1
14250 S7=(R(30)-C(20)*R(28)-S6*R(22))/R(21)
14255 IF S6>87 OR S7>87 THEN A(20)=0:B(20)=0:C(20)=0:GOTO 14300
14260 A(20)=EXP(S7)
14270 B(20)=EXP(S6)
14280 RR(20)=(S7*R(30)+S6*R(47)+C(20)*R(32)-(R(30)*R(30))/R(21))/(R(31)-(R(30)*R(30))/R(21))
14290 RC(20)=1-(((1-RR(20))*(R(21)-1))/(R(21)-3))
14300 REM * EQUATION 21  NORMAL DISTRIBUTION *
14301 ON ERROR GOTO 62121
14310 IF NY=1 THEN 14460
14330 S1=R(17)*R(21)-(R(16)*R(16))
14340 S2=R(21)*R(54)-R(17)*R(30)
14350 S3=R(21)*R(40)-R(16)*R(17)
14360 S4=R(21)*R(46)-R(16)*R(30)
14370 S5=R(21)*R(43)-(R(17)*R(17))
14380 S6=(S1*S2-S3*S4)/(S1*S5-(S3*S3))
14390 S7=(S4-S3*S6)/S1
14400 S8=(R(30)-S7*R(16)-S6*R(17))/R(21)
14410 A(21)=EXP(S8-((S7*S7)/(4*S6)))
14420 B(21)=-S7/(2*S6)
14430 C(21)=1/S6
14440 RR(21)=(S8*R(30)+S7*R(46)+S6*R(54)-(R(30)*R(30))/R(21))/(R(31)-(R(30)*R(30))/R(21))
14450 RC(21)=1-(((1-RR(21))*(R(21)-1))/(R(21)-3))
14460 REM * EQUATION 22  LOG NORMAL DISTRIBUTION *
14461 ON ERROR GOTO 62122
14470 IF NX=1 OR NY=1 THEN 14620
14490 S1=R(21)*R(29)-(R(28)*R(28))
14500 S2=R(21)*R(57)-R(29)*R(30)
14510 S3=R(21)*R(55)-R(28)*R(29)
14520 S4=R(21)*R(32)-R(28)*R(30)
14530 S5=R(21)*R(56)-(R(29)*R(29))
14540 S6=(S1*S2-S3*S4)/(S1*S5-(S3*S3)):IF S6=0 THEN 14620: REM Required for QB4
14550 S7=(S4-S3*S6)/S1
14560 S8=(R(30)-S7*R(28)-S6*R(29))/R(21)
14570 Z=(S8-(S7*S7)/(4*S6)):IF Z>85 THEN 14620 ELSE A(22)=EXP(Z)
14580 B(22)=-S7/(2*S6)
14590 C(22)=1/S6
14600 RR(22)=(S8*R(30)+S7*R(32)+S6*R(57)-(R(30)*R(30))/R(21))/(R(31)-(R(30)*R(30))/R(21))
14610 RC(22)=1-(((1-RR(22))*(R(21)-1))/(R(21)-3))
14620 REM * EQUATION 23  BETA DISTRIBUTION *
14621 ON ERROR GOTO 62123
14645 IF Q9=1 THEN GOTO 14790
14650 S1=R(21)*R(29)-(R(28)*R(28))
14660 S2=R(21)*R(62)-R(30)*R(59)
14670 S3=R(21)*R(61)-R(28)*R(59)
14680 S4=R(21)*R(32)-R(28)*R(30)
14690 S5=R(21)*R(60)-(R(59)*R(59))
14700 C(23)=(S1*S2-S3*S4)/(S1*S5-(S3*S3))
14710 B(23)=(S4-S3*C(23))/S1
14720 S6=(R(30)-B(23)*R(28)-C(23)*R(59))/R(21)
14730 A(23)=EXP(S6)
14740 RR(23)=(S6*R(30)+B(23)*R(32)+C(23)*R(62)-(R(30)*R(30))/R(21))/(R(31)-(R(30)*R(30))/R(21))
14750 RC(23)=1-(((1-RR(23))*(R(21)-1))/(R(21)-3))
14760 REM * EQUATION 24  GAMMA DISTRIBUTION *
14761 ON ERROR GOTO 62124
14765 IF NX=1 OR NY=1 THEN 14930
14790 S1=R(17)*R(21)-(R(16)*R(16))
14800 S2=R(21)*R(32)-R(28)*R(30)
14810 S3=R(21)*R(48)-R(16)*R(28)
14820 S4=R(21)*R(46)-R(16)*R(30)
14830 S5=R(21)*R(29)-(R(28)*R(28))
14840 C(24)=(S1*S2-S3*S4)/(S1*S5-(S3*S3))
14850 S6=(S4-S3*C(24))/S1
14860 S7=(R(30)-S6*R(16)-C(24)*R(28))/R(21)
14865 IF S6<=0 THEN B(24)=0:C(24)=0:GOTO 14930
14870 B(24)=1/S6
14880 A(24)=EXP(S7+C(24)*LOG(1/S6))
14890 RR(24)=(S7*R(30)+S6*R(46)+C(24)*R(32)-(R(30)*R(30))/R(21))/(R(31)-(R(30)*R(30))/R(21))
14895 RC(24)=1-(((1-RR(24))*(R(21)-1))/(R(21)-3))
14920 REM * EQUATION 25  CAUCHY DISTRIBUTION *
14921 ON ERROR GOTO 62125
14930 S1=R(17)*R(21)-(R(16)*R(16))
14932 S2=R(21)*R(37)-R(17)*R(24)
14934 S3=R(21)*R(40)-R(16)*R(17)
14936 S4=R(21)*R(34)-R(16)*R(24)
14938 S5=R(21)*R(43)-(R(17)*R(17))
14940 A(25)=(S1*S2-S3*S4)/(S1*S5-(S3*S3))
14942 S6=(S4-S3*A(25))/S1
14944 S7=(R(24)-S6*R(16)-A(25)*R(17))/R(21)
14946 B(25)=(S6/(2*A(25)))
14948 C(25)=S7-((S6*S6)/(4*A(25)))
14950 RR(25)=(S7*R(24)+S6*R(34)+A(25)*R(37)-(R(24)*R(24))/R(21))/(R(25)-(R(24)*R(24))/R(21))
14952 RC(25)=1-(((1-RR(25))*(R(21)-1))/(R(21)-3))
14954 PRINT"COEFFICIENTS NOW CALCULATED "
14956 FOR I=1 TO 25
14958 IF RR(I)<0 OR RR(I)>1 THEN A(I)=0:B(I)=0:RC(I)=0:C(I)=0:RR(I)=0
14960 IF RC(I)<0 OR RC(I)>1 THEN RC(I)=0
14970 NEXT I
14972 GOTO 4040
15002 AZ$="":Q1$="":Q1A$="":PF$="":PF1$="":CLS:GOSUB 38000:PRINT"Predicted Value of X, Given Value for Y. ":K=1
15003 CLOSE:LOCATE 25,1:INPUT "Quit and return to main menu or Predict (Q or P) DEFAULT = (P)redict ";AZ$:CLS:GOSUB 38000
15004 CLS:GOSUB 38000:IF L=1 AND LP=1 THEN LPRINT CHR$(12)
15005 IF LEFT$(AZ$,1)="q" OR LEFT$(AZ$,1)="Q" THEN 120
15006 INPUT "Output results to printer (Y or N) ";Q1$:INPUT "Output Predictions to a File (Y) or (N) ";Q1A$:IF LEFT$(Q1A$,1)="Y" OR LEFT$(Q1A$,1)="y" THEN GOTO 58000
15007 INIT=1:GOSUB 50000:CLS:GOSUB 38000
15008 PRINT "╔═══════════╦═════════════╤═════╤══════╤════════════════════════════╦═════════╗"
15009 PRINT "║ CURVEFIT  ║ PREDICTIONS │ EQ# │      │<ENTER> for EQ# of BEST FIT ║VER 2.20B║"
15010 PRINT "╠═══════╤═══╩═════════════╪═════╧╤═════╧═══════════╤══════╤═════════╩═════════╣"
15011 PRINT "║ START │                 │ STOP │                 │ STEP │                   ║"
15012 PRINT "╟───────┴────┬────────────┼──────┴─────┬───────────┴┬─────┴──────┬────────────╢"
15013 PRINT "║X-DATA ENTRY│PREDICTED Y │X-DATA ENTRY│PREDICTED Y │X-DATA ENTRY│PREDICTED Y ║"
15014 PRINT "╟────────────┼────────────┼────────────┼────────────┼────────────┼────────────╢"
15015 FOR I=1 TO 14:PRINT "║            │            │            │            │            │            ║":NEXT I
15029 PRINT "╟────────────┴───┬────────┴───────┬────┴───────────┬┴────────────┴──┬─────────╢"
15030 PRINT "║ Coefficients   │A=              │B=              │C=              │R²=      ║"
15031 PRINT "╚════════════════╧════════════════╧════════════════╧════════════════╧═════════╝";
15032 LOCATE 2,34:PRINT"▒▒▒▒▒▒";:LOCATE 2,34:INPUT;EQ:IF EQ=0 THEN EQ=MQ:LOCATE 2,34:PRINT MQ;:LOCATE 2,41:PRINT"BEST ";EQ$(MQ);:GOTO 15034
15033 LOCATE 2,34:PRINT"      ";:LOCATE 2,34:PRINT EQ;:IF EQ<0 OR EQ>25 THEN 15038 ELSE IF A(EQ)=0 AND B(EQ)=0 THEN 15043 ELSE LOCATE 2,41:PRINT "                           ";:LOCATE 2,41:PRINT EQ$(EQ);
15034 LOCATE 4,10:PRINT"▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒";:LOCATE 4,35:PRINT"▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒";:LOCATE 4,60:PRINT"▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒";
15035 LOCATE 4,10:PRINT"                ";:LOCATE 4,10:INPUT;START:LOCATE 4,10:PRINT"               ";:LOCATE 4,10:PRINT START;
15036 LOCATE 4,35:PRINT"                ";:LOCATE 4,35:INPUT;STP1:LOCATE 4,35:PRINT"               ";:LOCATE 4,35:PRINT STP1;
15037 LOCATE 4,60:PRINT"                ";:LOCATE 4,60:INPUT;STP2:LOCATE 4,60:PRINT"               ";:LOCATE 4,60:PRINT STP2;:IF STP2<=0 THEN 15039 ELSE 15053
15038 IF EQ<0 OR EQ>25 THEN LOCATE 2,41:PRINT "EQUATION";EQ;" IS UNDEFINED ";:GOTO 15032
15039 LOCATE 2,41:PRINT"STEP MUST BE POSITIVE       ";:GOTO 15032
15043 LOCATE 2,41:PRINT" A AND B = ZERO FOR EQ ";EQ;:GOTO 15032
15053 IF LP=1 THEN LPRINT"PREDICTIONS FOR EQUATION ";EQ$(EQ):LPRINT" "
15054 LOCATE 23,21:V=A(EQ):GOSUB 4700:PRINT USING C2$;A(EQ);:LOCATE 23,38:V=B(EQ):GOSUB 4700:PRINT USING C2$;B(EQ);:LOCATE 23,55:V=C(EQ):GOSUB 4700:PRINT USING C2$;C(EQ);:LOCATE 23,73:PRINT USING"#.####";RC(EQ);
15060 K=0:ON EQ GOTO 15100,15110,15120,15130,15140,15150,15160,15170,15180,15190,15200,15210,15220,15230,15240,15250,15260,15270,15280,15290,15300,15310,15320,15330,15340,15350
15100 Y=A(1)+B(1)*START:GOSUB 15500:START=START+STP2:IF START>STP1 THEN 15003 ELSE 15100
15110 Y=B(2)*START:GOSUB 15500:START=START+STP2:IF START>STP1 THEN 15003 ELSE 15110
15120 Y=1/(A(3)+B(3)*START):GOSUB 15500:START=START+STP2:IF START>STP1 THEN 15003 ELSE 15120
15130 Y=A(4)+B(4)*START+C(4)/START:GOSUB 15500:START=START+STP2:IF START>STP1 THEN 15003 ELSE 15130
15140 Y=A(5)+B(5)/START:GOSUB 15500:START=START+STP2:IF START>STP1 THEN 15003 ELSE 15140
15150 Y=START/(A(6)*START+B(6)):GOSUB 15500:START=START+STP2:IF START>STP1 THEN 15003 ELSE 15150
15160 Y=A(7)+B(7)/START+C(7)/(START*START):GOSUB 15500:START=START+STP2:IF START>STP1 THEN 15003 ELSE 15160
15170 Y=A(8)+B(8)*START+C(8)*START*START:GOSUB 15500:START=START+STP2:IF START>STP1 THEN 15003 ELSE 15170
15180 Y=A(9)*START+B(9)*START*START:GOSUB 15500:START=START+STP2:IF START>STP1 THEN 15003 ELSE 15180
15190 Y=A(10)*START^B(10):GOSUB 15500:START=START+STP2:IF START>STP1 THEN 15003 ELSE 15190
15200 Y=A(11)*B(11)^START:GOSUB 15500:START=START+STP2:IF START>STP1 THEN 15003 ELSE 15200
15210 Y=A(12)*B(12)^(1/START):GOSUB 15500:START=START+STP2:IF START>STP1 THEN 15003 ELSE 15210
15220 Y=A(13)*START^(B(13)*START):GOSUB 15500:START=START+STP2:IF START>STP1 THEN 15003 ELSE 15220
15230 Y=A(14)*START^(B(14)/START):GOSUB 15500:START=START+STP2:IF START>STP1 THEN 15003 ELSE 15230
15240 Y=A(15)*EXP(B(15)*START):GOSUB 15500:START=START+STP2:IF START>STP1 THEN 15003 ELSE 15240
15250 Y=A(16)*EXP(B(16)/START):GOSUB 15500:START=START+STP2:IF START>STP1 THEN 15003 ELSE 15250
15260 Y=A(17)+B(17)*LOG(START):GOSUB 15500:START=START+STP2:IF START>STP1 THEN 15003 ELSE 15260
15270 Y=1/(A(18)+B(18)*LOG(START)):GOSUB 15500:START=START+STP2:IF START>STP1 THEN 15003 ELSE 15270
15280 Y=A(19)*B(19)^START*START^C(19):GOSUB 15500:START=START+STP2:IF START>STP1 THEN 15003 ELSE 15280
15290 Y=A(20)*B(20)^(1/START)*START^C(20):GOSUB 15500:START=START+STP2:IF START>STP1 THEN 15003 ELSE 15290
15300 Y=A(21)*EXP(((START-B(21))^2)/C(21)):GOSUB 15500:START=START+STP2:IF START>STP1 THEN 15003 ELSE 15300
15310 Y=A(22)*EXP((LOG(START)-B(22))^2/C(22)):GOSUB 15500:START=START+STP2:IF START>STP1 THEN 15003 ELSE 15310
15320 Y=A(23)*START^B(23)*(1-START)^C(23):GOSUB 15500:START=START+STP2:IF START>STP1 THEN 15003 ELSE 15320
15330 Y=A(24)*(START/B(24))^C(24)*EXP(START/B(24)):GOSUB 15500:START=START+STP2:IF START>STP1 THEN 15003 ELSE 15330
15340 Y=1/(A(25)*(START+B(25))^2+C(25)):GOSUB 15500:START=START+STP2:IF START>STP1 THEN 15003 ELSE 15340
15350 REM * END OF Y PREDICTIONS *
15500 IF INIT =1 THEN M=1:MR=1:MC=1:MR1=1:MC1=1
15502 L=1:INIT=0
15503 IF LEFT$(Q1A$,1)="Y" OR LEFT$(Q1A$,1)="y" THEN PRINT #1, START,Y
15505 IF LP=1 THEN LPRINT"If X= ";START,"Then Y= ";Y
15506 LOCATE 7+MR,MC+1:V=START:GOSUB 4700:PRINT USING C2$;START;:LOCATE 7+MR,MC+14:V=Y:GOSUB 4700:PRINT USING C2$;Y;
15507 MR=MR+1:IF M MOD 14=0 THEN MR=1:MC=MC+26
15508 IF M MOD 42 =0 THEN MR=1:MC=1:GOSUB 15600
15509 M=M+1
15511 IF LP=1 THEN 15515
15515 IF LP=1 AND (INT(M/60)=(M/60)) THEN LPRINT CHR$(12)
15520 RETURN
15600 LOCATE 25,1:PRINT"PLEASE PRESS <ENTER> FOR MORE DATA";:INPUT;A$:LOCATE 25,1:PRINT"                                                                       ";
15602 FOR I3 = 1 TO 42
15606 LOCATE 7+MR1,MC1+1:PRINT "            ";:LOCATE 7+MR1,MC1+14:PRINT "            ";
15607 MR1=MR1+1:IF I3 MOD 14=0 THEN MR1=1:MC1=MC1+26
15608 IF I3 MOD 42 =0 THEN MR1=1:MC1=1
15610 NEXT I3
15620 RETURN
20000 REM * CALCULATE SUMS AND SUMS OF SQUARES *
20010 NX=0:NY=0
20040 FOR I=16 TO 65: R(I)=0: NEXT I
20041 Q9=0:QA=1:GOTO 3430
20045 FOR I=1 TO 255
20046 CLS:GOSUB 38000:PRINT"PROCESSING DATA POINT # "; I
20047 IF X$(1)="END" OR Y$(1)="END" THEN PRINT "NO DATA HAS BEEN ENTERED":PRINT"RETURNING TO MAIN MENU":FOR I1=1 TO 1000:NEXT I1:GOTO 120
20055 IF X$(I)= "END" OR Y$(I)="END" OR X$(I)="DEL" OR Y$(I)="DEL" GOTO 30000
20060 X(I)=CDBL(VAL(X$(I))):Y(I)=CDBL(VAL(Y$(I)))
20065 IF X(I)<0 THEN NX=1
20066 IF Y(I)<0 THEN NY=1
20067 IF X(I)=0 THEN X(I)=.0001
20068 IF Y(I)=0 THEN Y(I)=.0001
20070 R(16)=R(16)+X(I)
20080 R(17)=R(17)+X(I)*X(I)
20090 R(18)=R(18)+Y(I)
20100 R(19)=R(19)+Y(I)*Y(I)
20110 R(20)=R(20)+X(I)*Y(I)
20120 R(21)=I
20130 R(22)=R(22)+(1/X(I))
20140 R(23)=R(23)+(1/(X(I)*X(I)))
20150 R(24)=R(24)+(1/(Y(I)))
20160 R(25)=R(25)+(1/(Y(I)*Y(I)))
20170 R(26)=R(26)+(1/(Y(I)*X(I)))
20180 R(27)=I
20190 IF NX<>1 THEN R(28)=R(28)+LOG(X(I))
20200 IF NX<>1 THEN R(29)=R(29)+(LOG(X(I)))*(LOG(X(I)))
20210 IF NY <>1 THEN R(30)=R(30)+(LOG(Y(I)))
20220 IF NY<>1 THEN R(31)=R(31)+(LOG(Y(I)))*(LOG(Y(I)))
20230 IF NX<>1 AND NY<>1 THEN R(32)=R(32)+(LOG(X(I)))*(LOG(Y(I)))
20240 R(33)=I
20250 R(34)=R(34)+(X(I)/Y(I))
20260 R(35)=R(35)+(Y(I)/X(I))
20270 R(36)=R(36)+((X(I)*X(I)))*Y(I)
20280 R(37)=R(37)+((X(I)*X(I)))/Y(I)
20290 R(38)=R(38)+(Y(I)/(X(I)*X(I)))
20300 R(39)=R(39)+X(I)*(Y(I)*Y(I))
20310 R(40)=R(40)+(X(I)*X(I)*X(I))
20320 R(41)=R(41)+1/((X(I)*X(I)*X(I)))
20330 R(42)=R(42)+(Y(I)*Y(I)*Y(I))
20340 R(43)=R(43)+(X(I)*X(I)*X(I)*X(I))
20350 R(44)=R(44)+1/((X(I)*X(I)*X(I)*X(I)))
20360 IF NX<>1 THEN R(45)=R(45)+LOG(X(I))/X(I)
20370 IF NY<>1 THEN R(46)=R(46)+X(I)*LOG(Y(I))
20380 IF NY<>1 THEN R(47)=R(47)+LOG(Y(I))/X(I)
20390 IF NX<>1 THEN R(48)=R(48)+X(I)*LOG(X(I))
20400 IF NX<>1 THEN R(49)=R(49)+(X(I)*LOG(X(I)))*(X(I)*LOG(X(I)))
20410 IF NX<>1 AND NY<>1 THEN R(50)=R(50)+X(I)*LOG(X(I))*LOG(Y(I))
20420 IF NX<>1 THEN R(51)=R(51)+Y(I)*LOG(X(I))
20430 IF NX<>1 THEN R(52)=R(52)+LOG(X(I))/Y(I)
20440 IF NX<>1 THEN R(53)=R(53)+((LOG(X(I))/X(I)))*((LOG(X(I))/X(I)))
20450 IF NY<>1 THEN R(54)=R(54)+(X(I)*X(I))*LOG(Y(I))
20460 IF NX<>1 THEN R(55)=R(55)+((LOG(X(I))*LOG(X(I))*LOG(X(I))))
20470 IF NX<>1 THEN R(56)=R(56)+((LOG(X(I))*LOG(X(I))*LOG(X(I))*LOG(X(I))))
20480 IF NX<>1 AND NY<>1 THEN R(57)=R(57)+((LOG(X(I))*LOG(X(I))))*LOG(Y(I))
20490 IF NX<>1 AND NY<>1 THEN R(58)=R(58)+(LOG(Y(I))*LOG(X(I)))/X(I)
20500 IF X(I)>=1 THEN Q9=1: GOTO 20540
20501 IF Q9=1 GOTO 20540
20502 IF X(I)<=0 THEN 20550
20505 R(59)=R(59)+LOG(1-X(I))
20510 R(60)=R(60)+(LOG(1-X(I)))*(LOG(1-X(I)))
20520 R(61)=R(61)+LOG(X(I))*LOG(1-X(I))
20530 IF NY<>1 THEN R(62)=R(62)+LOG(Y(I))*LOG(1-X(I))
20540 IF NX<>1 THEN R(63)=R(63)+(LOG(X(I)))/X(I)
20550 NEXT I
20600 NX=0:NY=0
30000 REM * END OF SUMMATION LOOP *
30030 CLS:GOSUB 38000: PRINT"SUMS HAVE BEEN CALCULATED--NOW CALCULATING COEFFICIENTS": GOTO 12000
36000 CLS:REM This routine selects Color or Monochrome Monitor
36005 PRINT TAB(27);"CURVEFIT Version 2.20-B  FEB 3, 1989":PRINT" "
36010 PRINT"This routine allows the selection of Color or Monochrome monitors."
36020 PRINT" ":PRINT"For most cases, the COLOR choice will be correct.  This choice will work with"
36030 PRINT"CGA, EGA, and Hercules compatible cards.  Select the MONOCHROME version"
36040 PRINT"only if the COLOR choice does not work."
36045 PRINT"MONOCHROME should work with ANY monitor.  With a color monitor, the"
36046 PRINT"choice of MONOCHROME will yield white text on a black background.":PRINT" "
36047 PRINT" ":PRINT"When COLOR choice is used for MONOCHROME monitor, display is HIGH INTENSITY."
36048 PRINT"To use low intensity on MONOCHROME monitor, choose MONOCHROME monitor."
36050 PRINT" ":PRINT "Please press <C> or <ENTER> for COLOR.  Press <M> for MONOCHROME.  "
36060 PRINT" ":MONITOR$="C"
36061 MONITOR1$=INKEY$:IF MONITOR1$="m" OR MONITOR1$="M" OR MONITOR1$="C" OR MONITOR1$="c" OR MONITOR1$=CHR$(13) THEN 36110 ELSE 36061
36110 IF MONITOR1$="C" OR MONITOR1$="c" OR MONITOR1$=CHR$(13) THEN PRINT"You have chosen COLOR monitor":PRINT" ":MONITOR$="C":INPUT"Press <Enter> to Continue";CT$:IF MONITOR2$="Y" THEN MONITOR2$="N":GOTO 10
36115 IF MONITOR1$="C" OR MONITOR1$="C" OR MONITOR1$=CHR$(13) THEN 115
36120 IF MONITOR1$="M" OR MONITOR1$="m" THEN PRINT"You have chosen MONOCHROME monitor":PRINT" ":MONITOR$="M":INPUT"Press <Enter> to Continue";CT$:IF MONITOR2$="Y" THEN MONITOR2$="N":GOTO 10
36125 IF MONITOR1$="M" OR MONITOR1$="m" THEN 115
36130 GOTO 36010
38000 IF MONITOR$="M" THEN 38100
38010 COLOR 15,1,0:RETURN
38100 COLOR 7,0,0:RETURN
40000 REM * LIST REGISTER CONTENTS R16-R63 *
40010 CLS
40025 CLS:GOSUB 38000:PRINT"REGISTER CONTENTS:":PRINT" ":PRINT"REG#";TAB(10);"REGISTER";TAB(34);"REGISTER +1";TAB(57);"REGISTER +2":PRINT" ":FOR I=16 TO 63 STEP 3
40095 PRINT I;TAB(6);R(I);TAB(29);R(I+1);TAB(54);R(I+2)
40100 NEXT I
40105 PRINT" "
40120 INPUT "PLEASE PRESS ENTER TO CONTINUE ";A$
40122 INPUT"OUTPUT TO PRINTER (Y)ES OR (N)O ";A$
40124 IF LEFT$(A$,1)="Y" OR LEFT$(A$,1)="y" THEN 40126 ELSE GOTO 120
40126 FOR I=16 TO 63 STEP 2
40127 LPRINT "R(";I;")= ";R(I);TAB(40);"R(";I+1;")= ";R(I+1)
40128 NEXT I
40129 LPRINT CHR$(12):GOTO 120
42000 CLS:GOSUB 38000:IF A(1)=0 AND B(1)=0 THEN PRINT"COEFFICIENTS MUST BE CALCULATED BEFORE USING THIS ROUTINE!":PRINT" ":INPUT"PLEASE PRESS <ENTER> TO RETURN TO MAIN MENU";RMM$:GOTO 120
42010 FOR I=1 TO 25:RS$(I)=STR$(RC(I))+"_"+STR$(I):NEXT I
42015 REM SHELL-METZNER SORT
42020 MAX=25
42025 M1=MAX
42030 M1=M1\2:IF M1=0 THEN 43000
42040 K1=MAX-M1:J1=1
42050 I1=J1
42060 L1=I1+M1
42070 IF RS$(I1)<=RS$(L1) THEN J1=J1+1:IF J1>K1 THEN 42030 ELSE 42050 ELSE 42080
42080 SWAP RS$(I1),RS$(L1):I1=I1-M1:IF I1>0 THEN 42060
42090 J1=J1+1:IF J1>K1 THEN 42030 ELSE 42050
43000 '
43310 '
43320 K2=25:FOR I=1 TO 25:RS1$(I)=RS$(K2):K2=K2-1:NEXT I
43330 FOR I=1 TO 25:RS$(I)=RS1$(I):NEXT I
43340 FOR I=1 TO 25:P1=INSTR(RS$(I),"_"):RS(I)=VAL(MID$(RS$(I),P1+2,LEN(RS$(I)))):NEXT I
43350 REM WAS GOSUB 38000
43507 PRINT "╔═══════════╦═══════════════════════════════════════════════════╦═════════════╗"
43508 PRINT "║ CURVEFIT  ║ SORTED LISTING OF EQUATIONS for CORRECTED R² >0.10║VERSION 2.20B║"
43509 PRINT "╠════╤══════╩═════╤════════════╤════════════╤══════╤══════╤═════╩═════════════╣"
43510 PRINT "║EQ #│ 'A' COEF.  │ 'B' COEF.  │ 'C' COEF.  │ R²   │R² COR│ EQUATION OF CURVE ║"
43511 PRINT "╟────┼────────────┼────────────┼────────────┼──────┼──────┼───────────────────╢"
43512 FOR I=1 TO 18:PRINT "║    │            │            │            │      │      │                   ║":NEXT I
43517 PRINT "╚════╧════════════╧════════════╧════════════╧══════╧══════╧═══════════════════╝";
43518 C1$="#.####":C2$="#######.####":C3$="###"
43524 MR=6:
43526 FOR I=1 TO 25
43527 IF RC(RS(I))<=.1 THEN 43531
43528 LOCATE MR,2:PRINT USING C3$;RS(I);:LOCATE MR,7:V=A(RS(I)):GOSUB 4700:PRINT USING C2$;A(RS(I)):LOCATE MR,20:V=B(RS(I)):GOSUB 4700:PRINT USING C2$;B(RS(I));:LOCATE MR,33:V=C(RS(I)):GOSUB 4700:PRINT USING C2$;C(RS(I));
43529 LOCATE MR,46:PRINT USING C1$;RR(RS(I));:LOCATE MR,53:PRINT USING C1$;RC(RS(I));:LOCATE MR,60:PRINT EQ$(RS(I));
43530 MR=MR+1:IF MR=24 THEN 43532
43531 NEXT I
43532 LOCATE 25,1:INPUT"PLEASE PRESS <ENTER> TO RETURN TO MAIN MENU";RMM$:GOTO 120
50000 IF LEFT$(Q1$,1)="Y" OR LEFT$(Q1$,1)="y" THEN LP=1 ELSE LP=0
50010 RETURN
55000 EQ$(1)="Y=A+B*X":EQ$(2)="Y=B*X":EQ$(3)="Y=1/(A+B*X)":EQ$(4)="Y=A+B*X+C/X":EQ$(5)="Y=A+B/X":EQ$(6)="Y=X/(A*X+B)"
55010 EQ$(7)="Y=A+B/X+C/X*X":EQ$(8)="Y=A+B*X+C*X*X":EQ$(9)="Y=A*X+B*X*X":EQ$(10)="Y=A*X^B":EQ$(11)="Y=A*B^X"
55020 EQ$(12)="Y=A*B^(1/X)":EQ$(13)="Y=A*X^(B*X)":EQ$(14)="Y=A*X^(B/X)":EQ$(15)="Y=A*e^(B*X)":EQ$(16)="Y=A*e^(B/X)"
55030 EQ$(17)="Y=A+B*lnX":EQ$(18)="Y=1/(A+B*lnX)":EQ$(19)="Y=A*B^X*X^C":EQ$(20)="Y=A*B^(1/X)*X^C"
55040 EQ$(21)="Y=A*e^(((X-B)^2)/C)":EQ$(22)="Y=A*e^((lnX-B)^2/C)":EQ$(23)="Y=A*X^B*(1-X)^C":EQ$(24)="Y=A*(X/B)^C*e^(x/b)"
55050 EQ$(25)="Y=1/(A*(X+B)^2+C)":RETURN
57000 CLS:PRINT"You have chosen to store Residual Values to a Disk File"
57010 PRINT:INPUT "Enter File Name for Data Storage (Include Drive Designator) ",PF$
57020 PRINT:PRINT"File Name for Residual Data Storage is ";PF$
57030 PRINT:INPUT"Is this correct (Y) or (N): (A) to Abort";PF1$
57040 IF LEFT$(PF1$,1)="Y" OR LEFT$(PF1$,1) = "y" THEN GOTO 57050 ELSE IF LEFT$(PF1$,1)="A" OR LEFT$(PF1$,1)="a" THEN GOTO 120 ELSE GOTO 57000
57050 OPEN "O",1,PF$:GOTO 5007
57200 CLS:GOTO 5007
58000 CLS:PRINT"You have chosen to store PREDICTED Values to a Disk File"
58010 PRINT:INPUT "Enter File Name for Data Storage (Include Drive Designator) ",PF$
58020 PRINT:PRINT"File Name for Residual Data Storage is ";PF$
58030 PRINT:INPUT"Is this correct (Y) or (N): (A) to Abort";PF1$
58040 IF LEFT$(PF1$,1)="Y" OR LEFT$(PF1$,1) = "y" THEN GOTO 58050 ELSE IF LEFT$(PF1$,1)="A" OR LEFT$(PF1$,1)="a" THEN GOTO 120 ELSE GOTO 58000
58050 OPEN "O",1,PF$:GOTO 15007
58200 CLS:GOTO 15007
61000 IF (ERR=53 OR ERR=64) AND ERL=7050 THEN PRINT "UNABLE TO FIND OR ILLEGAL FILE NAME ";A4$:INPUT "PRESS <ENTER> TO CONTINUE";A$:RESUME 120
62101 GOSUB 62150:RESUME 12060
62102 GOSUB 62150:RESUME 12140
62103 GOSUB 62150:RESUME 12220
62104 GOSUB 62150:RESUME 12320
62105 GOSUB 62150:RESUME 12400
62106 GOSUB 62150:RESUME 12470
62107 GOSUB 62150:RESUME 12590
62108 GOSUB 62150:RESUME 12720
62109 GOSUB 62150:RESUME 12810
62110 GOSUB 62150:RESUME 13000
62111 GOSUB 62150:RESUME 13110
62112 GOSUB 62150:RESUME 13210
62113 GOSUB 62150:RESUME 13300
62114 GOSUB 62150:RESUME 13400
62115 GOSUB 62150:RESUME 13500
62116 GOSUB 62150:RESUME 13600
62117 GOSUB 62150:RESUME 13680
62118 GOSUB 62150:RESUME 14000
62119 GOSUB 62150:RESUME 14150
62120 GOSUB 62150:RESUME 14300
62121 GOSUB 62150:RESUME 14460
62122 GOSUB 62150:RESUME 14620
62123 GOSUB 62150:RESUME 14760
62124 GOSUB 62150:RESUME 14920
62125 GOSUB 62150:RESUME 14954
62150 REM This subroutine zeroes out all coefficients for equations with errors
62160 A(I)=0:B(I)=0:C(I)=0:RR(I)=0:RC(I)=0:RETURN
63000 IF ERR=64 AND ERL=6050 THEN PRINT" THE FILE NAME ";A4$;" IS NOT A VALID FILE NAME":INPUT"PRESS <ENTER> TO CONTINUE";A$:RESUME 120
63500 IF D1>21 THEN D1=8 ELSE IF D1<8 THEN D1=21
63505 FLAG=0:LOCATE D1,11,1,0,7
63510 D1=CSRLIN
63520 A$=INKEY$:IF A$=CHR$(13) THEN 63560 ELSE IF A$="8" THEN D1=D1-1:GOTO 63500
63521 IF A$=CHR$(27) THEN 8000 ELSE IF A$="2" THEN D1=D1+1:GOTO 63500
63523 IF LEN(A$)=2 THEN A$=RIGHT$(A$,1) ELSE GOTO 63500
63525 IF A$="H" THEN D1=D1-1:GOTO 63500
63526 IF A$="P" THEN D1=D1+1:GOTO 63500
63527 IF A$>=";" AND A$<="D" THEN FLAG=1: GOTO 63560
63528 IF A$>="T" AND A$<="W" THEN FLAG=1: GOTO 63560
63529 GOTO 63500
63530 D1=D1+1:GOTO 63500
63560 D1=CSRLIN
63564 IF FLAG=1 THEN 63675
63565 IF CSRLIN=8 THEN 110
63570 IF CSRLIN=9 THEN 7030
63580 IF CSRLIN=10 THEN 2000
63590 IF CSRLIN=11 THEN 3000
63600 IF CSRLIN=12 THEN 9005
63610 IF CSRLIN=13 THEN 4000
63620 IF CSRLIN=14 THEN 4990
63630 IF CSRLIN=15 THEN 10000
63640 IF CSRLIN=16 THEN 4040
63645 IF CSRLIN=17 THEN 15002
63650 IF CSRLIN=18 THEN 6030
63655 IF CSRLIN=19 THEN 40000
63660 IF CSRLIN=20 THEN 42000
63665 IF CSRLIN=21 THEN 36000
63670 GOTO 63500
63675 IF A$=";"  THEN 110
63676 IF A$="<" THEN  7030
63677 IF A$="=" THEN 2000
63678 IF A$=">" THEN 3000
63679 IF A$="?" THEN 9005
63680 IF A$="@" THEN 4000
63681 IF A$="A" THEN 4990
63682 IF A$="B" THEN 10000
63683 IF A$="C" THEN 4040
63684 IF A$="D" THEN 15002
63685 IF A$="T" THEN 6030
63686 IF A$="U" THEN 40000
63687 IF A$="V" THEN 42000
63688 IF A$="W" THEN 36000
63690 GOTO 63500
63700 CLS:GOSUB 38000:PRINT"DATA CORRECTION":PRINT" "
63711 CLS:GOSUB 38000:M=1:MR=1:MC=1:MR1=1:MC1=1
63712 PRINT "╔═══════════╤══════════════════════════════════════════════════════╤══════════╗"
63713 PRINT "║ CURVEFIT  │ DATA LIST OF X AND Y VALUES  NOW IN MEMORY           │VERS 2.20B║"
63716 PRINT "╟───┬───────┴──┬──────────┬───┬──────────┬──────────┬───┬──────────┼──────────╢"
63717 PRINT "║PT#│ X VALUE  │ Y VALUE  │PT#│ X VALUE  │ Y VALUE  │PT#│ X VALUE  │ Y VALUE  ║"
63718 PRINT "╟───┼──────────┼──────────┼───┼──────────┼──────────┼───┼──────────┼──────────╢"
63719 FOR I6=1 TO 18:PRINT "║   │          │          │   │          │          │   │          │          ║"
63720 NEXT I6
63735 PRINT "╚═══╧══════════╧══════════╧═══╧══════════╧══════════╧═══╧══════════╧══════════╝";
63736 DUMMY$="          ":QZ=1:GOSUB 3470:QZ=0:FOR J=1 TO 255
63737 IF X$(J)<>"END" OR Y$(J)<>"END" THEN 63746 ELSE 63800
63746 LOCATE 5+MR,MC+1:PRINT USING "###";M;
63748 LOCATE 5+MR,MC+5:V=VAL(X$(M)):GOSUB 4710
63749 PRINT USING C2$;V;
63750 LOCATE 5+MR,MC+16:V=VAL(Y$(M)):GOSUB 4710
63751 PRINT USING C2$;V;
63752 MR=MR+1
63753 IF M MOD 18=0 THEN MR=1:MC=MC+26
63754 IF M MOD 54=0 THEN MR=1:MC=1:GOTO 63800
63777 M=M+1
63780 NEXT J
63800 LOCATE 25,1:PRINT"PLEASE PRESS <ENTER> FOR MORE DATA ";:INPUT ;A$:IF M<255 AND X$(J)<>"END" THEN 63900 ELSE GOTO 9008
63900 DUMMY$="            ":FOR J9=1 TO 54: REM This routine blanks screen for DATA LIST
63910 LOCATE 5+MR1,MC1+1:PRINT LEFT$(DUMMY$,3);:LOCATE 5+MR1,MC1+5:PRINT LEFT$(DUMMY$,10);:LOCATE 5+MR1,MC1+16:PRINT LEFT$(DUMMY$,10);
63920 MR1=MR1+1:IF J9 MOD 18=0 THEN MR1=1:MC1=MC1+26
63930 IF J9 MOD 54=0 THEN MR1=1:MC1=1
63940 NEXT J9
63950 GOTO 63777
64000 DUMMY$="            ":MR1=1:MC1=1: REM This routine blanks screen for ADD and DELETION routines
64001 LOCATE 25,1,0,1,7:COLOR 0,7,0:PRINT"Data Screen is FULL.  Press <ENTER> to clear for more data";:INPUT;A$:LOCATE 25,1,0,1,7:GOSUB 38000:PRINT"                                                                               ";
64005 FOR J9=1 TO 42
64010 LOCATE 7+MR1,MC1+1:PRINT LEFT$(DUMMY$,3);:LOCATE 7+MR1,MC1+5:PRINT LEFT$(DUMMY$,10);:LOCATE 7+MR1,MC1+16:PRINT LEFT$(DUMMY$,10);
64020 MR1=MR1+1:IF J9 MOD 14 = 0 THEN MR1 =1:MC1=MC1+26
64030 IF J9 MOD 42 = 0 THEN MR1=1:MC1=1
64035 NEXT J9
64040 RETURN
```

## CURVEQB4.BAS

```bas
3 KEY OFF: REM Found Line for Crashing QB4 and TB1 Line 13180 calculating EXP
5 DEFDBL A,B,C,S,R,X,Y:MONITOR2$="Y"
6 DIM EQ$(25),RS(25),RS1$(25),RS$(25):GOSUB 55000
9 CLS:COLOR  7,0,0:PR$="░░░░░░░░░░":GOTO 36000
10 CLS:GOSUB 38000:PRINT"╔═══════════╦══════════════════════════════════════════════════════╦══════════╗";
11 PRINT"║ CURVEFIT  ║ Version 2.12-A NOV  15, 1988       by  Thomas S. Cox ║SHAREWARE ║";
12 PRINT"╠═══════════╩══════════════════════════════════════════════════════╩══════════╣";
13 PRINT"║ PURPOSE     This program performs a least squares curve fit on X, Y data.   ║";
14 PRINT"║             Curves for 25 equations are fitted.  Equation coefficients,     ║";
15 PRINT"║             Correlation Coefficient, and Best Fit are computed.  For any    ║";
16 PRINT"║             of the 25 equations, predictions for Y can be calculated.       ║";
17 PRINT"║                                                                             ║";
18 PRINT"║ REFERENCE   CURVE FITTING FOR PROGRAMMABLE CALCULATORS by William M. Kolb   ║";
19 PRINT"║             Published by: IMTEC  P. O. Box 1402  Bowie MD  20716            ║";
20 PRINT"║                                                                             ║";
21 PRINT"║ WARNING     A LINEARIZING  technique is applied to various equations so that║";
22 PRINT"║ and         the resulting equations are of the general form: Y=A+B*X        ║";
23 PRINT"║ DISCLAIMER  This means that sum of squares of errors in Y are not minimized,║";
24 PRINT"║             but the sum of squares of the linearized variable are minimized.║";
25 PRINT"║                                                                             ║";
26 PRINT"║             The Linear, Parabolic, Cubic and Hyperbolic equations are linear║";
27 PRINT"║             in the parameters so this reservation does not apply to those   ║";
28 PRINT"║             curves. Reservation applies to equations with LN, EXP or POWERS.║";
29 PRINT"║                                                                             ║";
30 PRINT"║ SHAREWARE   If you use and like this program a donation of $10 is requested.║";
31 PRINT"╚═════════════════════════════════════════════════════════════════════════════╝";
32 PRINT TAB(2);:INPUT"PRESS <ENTER> TO START PROGRAM EXECUTION";A$
33 CLS:GOSUB 38000:XQ=0
55 DIM X1$(255),Y1$(255),X$(255),Y$(255),X(255),Y(255),R(65),RR(25)
56 DIM RC(25),A(25),B(25),C(25):FOR I=1 TO 255:X$(I)="END":Y$(I)="END":NEXT I
110 IF XQ >0 THEN 1000 ELSE 115
115 CLS:GOSUB 38000:XQ=1
120 CLS:Q1$="N":GOSUB 38000:PRINT "╔═══════════╦══════════════════════════════════════════════════════╦══════════╗";
130 PRINT "║ CURVEFIT  ║  Version 2.12-A  NOV  15, 1988    by  Thomas S. Cox  ║SHAREWARE ║";
131 PRINT "╠═══════════╩══════════╤═══════════════════════════════════════════╩══════════╣";
132 PRINT "║ Quick Basic 4.5 Vers │          M  A  S  T  E  R     M  E  N  U             ║";
134 PRINT "╠═══════════╦══════════╪══════════════════════════════════════════════════════╣";
135 PRINT "║  SELECT   ║ CHOICES  │ BRIEF DESCRIPTION OF CHOICES                         ║";
140 PRINT "╠═══════════╬══════════╪══════════════════════════════════════════════════════╣";
150 PRINT "║      F1[ ]║ ENTER    │ New Data (X and Y values)                            ║";
160 PRINT "║      F2[ ]║ LOAD     │ A Previously Stored Data File                        ║";
170 PRINT "║      F3[ ]║ ADD      │ Data to Values of X and Y Currently in Memory        ║";
180 PRINT "║      F4[ ]║ DELETE   │ or CHANGE Values of X and Y Currently in Memory      ║";
190 PRINT "║      F5[ ]║ LIST     │ X and Y Values Currently in Memory                   ║";
200 PRINT "║      F6[ ]║ CALCULATE│ Equation Coefficients (A, B, C, and R^2)             ║";
210 PRINT "║      F7[ ]║ PREDICT  │ For Input Values of X, Y and Eq# (1-25) Calculated Y ║";
220 PRINT "║      F8[ ]║ SHOW     │ LIST of EQUATIONS Fitted Using this Program          ║";
230 PRINT "║      F9[ ]║ REVIEW   │ Equation Coefficients (A, B, C, R^2)                 ║";
240 PRINT "║     F10[ ]║ DISPLAY  │ List of SUMS and SUMS of SQUARES                     ║";
250 PRINT "║ SHFT F1[ ]║ STORE    │ X and Y Data Points to a DISK FILE                   ║";
260 PRINT "║ SHFT F2[ ]║ EXIT     │ Leave Program and EXIT to DOS                        ║";
261 PRINT "║ SHFT F3[ ]║ BEST FIT │ Sorted by R² (Coefficients MUST have been calculated)║";
265 PRINT "║ SHFT F4[ ]║ MONITOR  │ Select COLOR or MONOCHROME (Default is COLOR + HERC) ║";
270 PRINT "╠═══════════╩══════════╧══════════════════════════════════════════════════════╣";
274 PRINT "║ Use UP or DOWN Keys to Select, Press ENTER; or FUNCTION KEY.  <ESC> to EXIT ║";
280 PRINT "╚═════════════════════════════════════════════════════════════════════════════╝";
284 LP=0 :LOCATE 25,1:COLOR 0,7,0:PRINT " Last Active File Used by CURVEFIT Was:  ";LEFT$(A4$,30);:GOSUB 38000
285 D1=8:GOTO 63500
1000 CLS: GOSUB 38000:PRINT "DATA ENTRY ROUTINE": PRINT " "
1001 INPUT"This routine will overwrite any existing data.  OK to proceed (Y) or (N)";A1$
1002 IF LEFT$(A1$,1)="Y" OR LEFT$(A1$,1)="y" THEN 1006
1003 IF LEFT$(A1$,1)="N" OR LEFT$(A1$,1)="n" THEN 120
1004 GOTO 120
1006 FOR I=1 TO 255:X$(I)="END":Y$(I)="END":NEXT I:PRINT"ALL VALUES HAVE BEEN SET TO ZERO"
1007 FOR I=1 TO 25:A(I)=0:B(I)=0:C(I)=0:R(I)=0:RR(I)=0:NEXT I
1008 INPUT "Do you want to have INPUT data listed on printer (Y or N)";Q1$
1009 GOSUB 50000:CLS:GOSUB 38000:M=1
1010 PRINT "Enter (S)top for X or Y to terminate data entry."
1011 CLS:GOSUB 38000:M=1:MR=1:MC=1
1012 PRINT "╔═══════════╦═══════════════════════════════════════════════════════╦═════════╗"
1013 PRINT "║ CURVEFIT  ║  Version 2.12-A  NOV  15, 1988      by Thomas S. Cox  ║SHAREWARE║"
1014 PRINT "╠═══════════╩═══════════════════════════════════════════════════════╩═════════╣"
1015 PRINT "║ DATA ENTRY SCREEN|  Press <ESC> at X or Y entry to Terminate Data Entry     ║"
1016 PRINT "╟───┬──────────┬──────────┬───┬──────────┬──────────┬───┬──────────┬──────────╢"
1017 PRINT "║PT#│ X VALUE  │ Y VALUE  │PT#│ X VALUE  │ Y VALUE  │PT#│ X VALUE  │ Y VALUE  ║"
1018 PRINT "╟───┼──────────┼──────────┼───┼──────────┼──────────┼───┼──────────┼──────────╢"
1019 FOR I=1 TO 14:PRINT "║   │          │          │   │          │          │   │          │          ║"
1020 NEXT I
1033 PRINT "╠═══╧════════╦═╧═════════╦╧═══╧══╦═══════╧═════╦════╧══╦╧══════════╧══════════╣"
1034 PRINT "║ ENTER DATA ║PT #       ║X VALUE║             ║Y VALUE║                      ║"
1035 PRINT "╚════════════╩═══════════╩═══════╩═════════════╩═══════╩══════════════════════╝";
1036 FOR J=1 TO 255
1037 LOCATE 7+MR,MC+1:PRINT LEFT$(PR$,3);:LOCATE 7+MR,MC+5:PRINT PR$;:LOCATE 7+MR,MC+16:PRINT PR$;
1040 LOCATE 23,21:PRINT "     ";:LOCATE 23,21:PRINT USING "####";M;
1042 LOCATE 23,36:PRINT"░░░░░░░░░░░ ";:LOCATE 23,36,1,0,7:GOSUB 1900:IF IPD$=CHR$(27) OR IPD$="s" OR IPD$="S" THEN GOTO 120 ELSE PRINT IPD$;:INPUT"", X$(M):X$(M)=IPD$+X$(M):LOCATE 23,36:PRINT"            ";:LOCATE 23,36:PRINT "  "+X$(M);
1044 LOCATE 23,58:PRINT"░░░░░░░░░░░ ";:LOCATE 23,58,1,0,7:GOSUB 1900:IF IPD$=CHR$(27) OR IPD$="s" OR IPD$="S" THEN GOTO 120 ELSE PRINT IPD$;:INPUT"", Y$(M):Y$(M)=IPD$+Y$(M):LOCATE 23,58:PRINT"            ";:LOCATE 23,58:PRINT "  "+Y$(M);
1046 LOCATE 7+MR,MC+1:PRINT USING "###";M;
1047 IF X$(M)="" THEN X$(M)="DEL"
1048 IF Y$(M)="" THEN Y$(M)="DEL"
1049 LOCATE 7+MR,MC+5:XX1=VAL(X$(M)):IF X$(M)="DEL" THEN PRINT"       DEL"; ELSE GOSUB 4780:PRINT USING C5$;XX1;
1050 LOCATE 7+MR,MC+16:YY1=VAL(Y$(M)):IF Y$(M)="DEL" THEN PRINT"       DEL"; ELSE GOSUB 4790:PRINT USING C5$;YY1;
1051 MR=MR+1
1052 IF M MOD 14=0 THEN MR=1:MC=MC+26
1053 IF M MOD 42=0 THEN MR=1:MC=1
1054 IF LEFT$(X$(J),1)="S" OR LEFT$(X$(J),1)="s" OR LEFT$(Y$(M),1)="S" OR LEFT$(Y$(M),1)="s" THEN GOTO 1500
1075 IF LP=1 THEN LPRINT"X( ";J;" )= ";X$(J);TAB(40);"Y( ";J;" )= ";Y$(J)
1077 M=M+1
1080 NEXT J
1090 GOTO 120
1500 X$(J)="END":Y$(J)="END":LOCATE 25,1:PRINT"(S)top encountered.  More Data (Y or N).";:INPUT;A$
1510 IF A$ = "Y" OR A$ = "y" THEN MR=MR-1:LOCATE 25,1:PRINT"                                                    ";:GOTO 1040
1520 GOTO 4620
1900 IPD$=INKEY$:IF IPD$=""THEN 1900 ELSE RETURN
2000 CLS:GOSUB 38000:PRINT"DATA ADDITION ROUTINE":PRINT" "
2011 CLS:GOSUB 38000:M=1:MR=1:MC=1:MR2=0
2012 PRINT "╔═══════════╦═══════════════════════════════════════════════════════╦═════════╗"
2013 PRINT "║ CURVEFIT  ║  Version 2.12-A  NOV  15, 1988      by Thomas S. Cox  ║SHAREWARE║"
2014 PRINT "╠═══════════╩═══════════════════════════════════════════════════════╩═════════╣"
2015 PRINT "║ DATA ADDITION| Press <ESC> for X or Y to Terminate Data Entry               ║"
2016 PRINT "╟───┬──────────┬──────────┬───┬──────────┬──────────┬───┬──────────┬──────────╢"
2017 PRINT "║PT#│ X VALUE  │ Y VALUE  │PT#│ X VALUE  │ Y VALUE  │PT#│ X VALUE  │ Y VALUE  ║"
2018 PRINT "╟───┼──────────┼──────────┼───┼──────────┼──────────┼───┼──────────┼──────────╢"
2019 FOR I=1 TO 14:PRINT "║   │          │          │   │          │          │   │          │          ║"
2020 NEXT I
2033 PRINT "╠═══╧════════╦═╧═════════╦╧═══╧══╦═══════╧═════╦════╧══╦╧══════════╧══════════╣"
2034 PRINT "║ ENTER DATA ║PT #       ║X VALUE║             ║Y VALUE║                      ║"
2035 PRINT "╚════════════╩═══════════╩═══════╩═════════════╩═══════╩══════════════════════╝";
2036 QZ=1:GOSUB 3470:QZ=0:FOR J=1 TO 255: REM This routine shows data to 2 decimal places
2037 IF X$(M)<>"END" OR Y$(M)<>"END"  THEN 2045
2038 LOCATE 7+MR,MC+1:PRINT LEFT$(PR$,3);:LOCATE 7+MR,MC+5:PRINT PR$;:LOCATE 7+MR,MC+16:PRINT PR$;
2040 LOCATE 23,21:PRINT "     ";:LOCATE 23,21:PRINT USING "#####";M;
2042 LOCATE 23,36:PRINT"░░░░░░░░░░░ ";:LOCATE 23,36,1,0,7:GOSUB 1900:IF IPD$=CHR$(27) OR IPD$="s" OR IPD$="S" THEN GOTO 120 ELSE PRINT IPD$;:INPUT"", X$(M):X$(M)=IPD$+X$(M):LOCATE 23,36:PRINT"            ";:LOCATE 23,36:PRINT "  "+X$(M);
2044 LOCATE 23,58:PRINT"░░░░░░░░░░░ ";:LOCATE 23,58,1,0,7:GOSUB 1900:IF IPD$=CHR$(27) OR IPD$="s" OR IPD$="S" THEN GOTO 120 ELSE PRINT IPD$;:INPUT"", Y$(M):Y$(M)=IPD$+Y$(M):LOCATE 23,58:PRINT"            ";:LOCATE 23,58:PRINT "  "+Y$(M);
2045 LOCATE 7+MR,MC+1:PRINT USING "###";M;
2046 IF X$(M)="" THEN X$(M)="DEL"
2047 IF Y$(M)="" THEN Y$(M)="DEL"
2048 LOCATE 7+MR,MC+5:XX1=VAL(X$(M)):IF X$(M)="DEL" THEN PRINT"       DEL"; ELSE GOSUB 4780:PRINT USING C5$;XX1;
2049 LOCATE 7+MR,MC+16:YY1=VAL(Y$(M)):IF Y$(M)="DEL" THEN PRINT"       DEL"; ELSE GOSUB 4790:PRINT USING C5$;YY1;
2050 MR=MR+1
2052 IF M MOD 14=0 THEN MR=1:MC=MC+26
2053 IF M MOD 42=0 THEN MR=1:MC=1:GOSUB 64000
2054 IF LEFT$(X$(M),1)="S" OR LEFT$(X$(M),1)="s" OR LEFT$(Y$(M),1)="S" OR LEFT$(Y$(M),1)="s" THEN GOTO 2500
2075 IF LP=1 THEN LPRINT"X( ";J;" )= ";X$(J);TAB(40);"Y( ";J;" )= ";Y$(J)
2077 M=M+1:IF MR>14 THEN MR=1:MC=MC+26:IF MC>55 THEN MC=1
2078 IF MR2=1 THEN 2038
2080 NEXT J
2090 GOTO 120
2500 X$(M)="END":Y$(M)="END":LOCATE 25,1:PRINT"(S)top encountered.  More Data (Y or N).";:INPUT;A$
2510 IF A$ = "Y" OR A$ = "y" THEN MR=MR-1:LOCATE 25,1:PRINT"                                                    ";:GOTO 2040
2520 GOTO 4620
3000 CLS:GOSUB 38000:PRINT"DATA CORRECTION":PRINT" "
3011 CLS:GOSUB 38000:M=1:MR=1:MC=1:MR2=0
3012 PRINT "╔═══════════╦═══════════════════════════════════════════════════════╦═════════╗"
3013 PRINT "║ CURVEFIT  ║  Version 2.12-A  NOV  15, 1988      by Thomas S. Cox  ║SHAREWARE║"
3014 PRINT "╠═══════════╩═══════════════════════════════════════════════════════╩═════════╣"
3015 PRINT "║ DATA CORRECTION| <ESC> for Data # to Exit, 'D' or 'd' for X or Y to Delete  ║"
3016 PRINT "╟───┬──────────┬──────────┬───┬──────────┬──────────┬───┬──────────┬──────────╢"
3017 PRINT "║PT#│ X VALUE  │ Y VALUE  │PT#│ X VALUE  │ Y VALUE  │PT#│ X VALUE  │ Y VALUE  ║"
3018 PRINT "╟───┼──────────┼──────────┼───┼──────────┼──────────┼───┼──────────┼──────────╢"
3019 FOR I=1 TO 14:PRINT "║   │          │          │   │          │          │   │          │          ║"
3020 NEXT I
3033 PRINT "╠═══╧════════╦═╧═════════╦╧═══╧══╦═══════╧═════╦════╧══╦╧══════════╧══════════╣"
3034 PRINT "║ ENTER DATA ║PT #       ║X VALUE║             ║Y VALUE║                      ║"
3035 PRINT "╚════════════╩═══════════╩═══════╩═════════════╩═══════╩══════════════════════╝";
3036 DUMMY$="           ":FOR J=1 TO 255: REM This routine shows data right justified
3037 LOCATE 7+MR,MC+1:PRINT LEFT$(PR$,3);:LOCATE 7+MR,MC+5:PRINT PR$;:LOCATE 7+MR,MC+16:PRINT PR$;
3038 IF X$(J)<>"END" OR Y$(J)<>"END" THEN 3045
3040 LOCATE 23,20:PRINT "░░░░░";:LOCATE 23,20:GOSUB 1900:IF IPD$=CHR$(27) THEN GOTO 120 ELSE PRINT IPD$;:INPUT"",M1$:M1$=IPD$+M1$:M=VAL(M1$):LOCATE 23,20:PRINT USING "#####";M;
3041 LOCATE 23,36:PRINT"  ░░░░░░░░░ ";:LOCATE 23,36,1,0,7:INPUT;X$(M):IF LEFT$(X$(M),1)="d" OR LEFT$(X$(M),1)="D" THEN X$(M)="DEL":Y$(M)="DEL"
3042 LOCATE 23,36:PRINT"            ";:LOCATE 23,36:PRINT "  "+X$(M);
3043 LOCATE 23,58:PRINT"  ░░░░░░░░░ ";:LOCATE 23,58,1,0,7:INPUT;Y$(M):IF LEFT$(Y$(M),1)="d" OR LEFT$(Y$(M),1)="D" THEN Y$(M)="DEL"
3044 LOCATE 23,58:PRINT"            ";:LOCATE 23,58:PRINT"  "+Y$(M);:MR2=1
3045 LOCATE 7+MR,MC+1:PRINT USING "###";M;
3046 IF X$(M)="" THEN X$(M)="DEL"
3047 IF Y$(M)="" THEN Y$(M)="DEL"
3048 LOCATE 7+MR,MC+5:XX1=VAL(X$(M)):XX2=LEN(X$(M)):IF XX2<10 THEN P1$=LEFT$(DUMMY$,10-XX2)+X$(M) ELSE IF XX2>10 THEN P1$=RIGHT$(X$(M),10) ELSE P1$=LEFT$(X$(M),10)
3049 PRINT P1$;:LOCATE 7+MR,MC+16:YY1=VAL(Y$(M)):YY2=LEN(Y$(M)):IF YY2<10 THEN P2$=LEFT$(DUMMY$,10-YY2)+Y$(M) ELSE IF YY2>10 THEN P2$=RIGHT$(Y$(M),10) ELSE P2$=LEFT$(Y$(M),10)
3050 PRINT P2$:MR=MR+1
3052 IF M MOD 14=0 THEN MR=1:MC=MC+26
3053 IF M MOD 42=0 THEN MR=1:MC=1:GOSUB 64000
3054 IF LEFT$(X$(M),1)="S" OR LEFT$(X$(M),1)="s" OR LEFT$(Y$(M),1)="S" OR LEFT$(Y$(M),1)="s" THEN GOTO 3100
3075 IF LP=1 THEN LPRINT"X( ";J;" )= ";X$(J);TAB(40);"Y( ";J;" )= ";Y$(J)
3077 M=M+1:IF MR>14 THEN MR=1:MC=MC+26:IF MC>55 THEN MC=1
3078 IF MR2=1 THEN 3037
3080 NEXT J
3090 GOTO 120
3100 X$(M)="END":Y$(M)="END":LOCATE 25,1:PRINT"(S)top encountered.  More Data (Y or N).";:INPUT;A$
3110 IF A$ = "Y" OR A$ = "y" THEN MR=MR-1:LOCATE 25,1:PRINT"                                                    ";:GOTO 3040
3120 GOTO 3430
3430 CLS:PRINT "Rearranging Data for Deletions"
3470 K1=1
3480 FOR I= 1 TO 255
3490 X1$(I)=X$(I): Y1$(I)=Y$(I): NEXT I
3540 FOR I= 1 TO 255
3545 IF X1$(I)="DEL" OR Y1$(I)="DEL" THEN 3580
3550 IF X1$(I)<>"DEL"  THEN GOSUB 3587
3570 IF X1$(I)="END" THEN X$(K1)="END":Y$(K1)="END": GOTO 3582
3580 NEXT I
3582 FOR I= 1 TO 255: IF X$(I)="END" OR LEFT$(X$(I),1)="S" OR LEFT$(X$(I),1)="s" GOTO 3584
3583 NEXT I
3584 IF QZ=1 THEN RETURN ELSE PRINT "There are now "; I-1;" VALID data points. ":FOR I=1 TO 500:NEXT I:GOTO 3590
3587 X$(K1)=X1$(I): Y$(K1)=Y1$(I): K1=K1+1: RETURN
3590 Q7=0:IF QA=1 THEN QA=0:GOTO 20045
3591 IF DE=1 THEN DE=0:GOTO 7090
3592 IF QZ=1 THEN RETURN
3600 INPUT "LIST NEW DATA SET (Y/N) ";A2$
3610 IF A2$="Y" OR A2$= "y" GOTO 9005 ELSE 120
4000 CLS:GOSUB 38000: PRINT "CALCULATING SUMS AND SUMS OF SQUARES"
4010 QA=0
4020 GOTO 20000
4040 CLS:GOSUB 38000:IF X$(1)="END" OR Y$(1)="END" THEN PRINT "NO DATA ENTERED, CAN'T SHOW COEFFICIENTS!": PRINT CHR$(7): FOR I=1 TO 1000: NEXT I: GOTO 120
4220 MX=0
4230 FOR I=1 TO 25
4240 IF RC(I)>MX THEN 4250
4245 GOTO 4260
4250 MX=RC(I):MQ=I
4260 NEXT I
4265 IF R2=1 THEN R2=0 :RETURN
4500 PRINT CHR$(7):A1$="###":A2$="#.####^^^^":A3$="##.####":A0$="###.####"
4501 INPUT "Output Coefficients to Printer (Y or N) ";Q1$:INPUT "Output Coefficients to Screen (Y or N) ";SO$
4502 CLS:GOSUB 38000:GOSUB 50000:A5$="EQ#    COEF A      COEF B      COEF C       R^2    R^2 C   EQUATION"
4503 IF LEFT$(SO$,1)="Y" OR LEFT$(SO$,1)="y" THEN GOTO 4507
4505 IF LEFT$(Q1$,1)="Y" OR LEFT$(Q1$,1)="y" THEN 4550 ELSE 120
4507 PRINT "╔═══════════╦════════════════════════════════════╦════════════════════════════╗"
4508 PRINT "║ CURVEFIT  ║ LISTING OF CALCULATED COEFFICIENTS ║ BEST FIT EQUATION IS #     ║"
4509 PRINT "╠════╤══════╩═════╤════════════╤════════════╤════╩═╤══════╤═══════════════════╣"
4510 PRINT "║EQ #│ 'A' COEF.  │ 'B' COEF.  │ 'C' COEF.  │ R²   │R² COR│ EQUATION OF CURVE ║"
4511 PRINT "╟────┼────────────┼────────────┼────────────┼──────┼──────┼───────────────────╢"
4512 FOR I=1 TO 16:PRINT "║    │            │            │            │      │      │                   ║":NEXT I
4515 PRINT "╟────┼────────────┼────────────┼────────────┼──────┼──────┼───────────────────╢"
4516 PRINT "║BEST│            │            │            │      │      │                   ║"
4517 PRINT "╚════╧════════════╧════════════╧════════════╧══════╧══════╧═══════════════════╝";
4518 C1$="#.####":C2$="#######.####":C3$="###"
4520 LOCATE 2,75:PRINT MQ;
4522 LOCATE 23,7:GOSUB 4700:PRINT USING C2$;A(MQ);:LOCATE 23,20:GOSUB 4705:PRINT USING C2$;B(MQ);:LOCATE 23,33:GOSUB 4710:PRINT USING C2$;C(MQ);:LOCATE 23,46:PRINT USING C1$;RR(MQ);:LOCATE 23,53:PRINT USING C1$;RC(MQ);:LOCATE 23,60:PRINT EQ$(MQ);
4524 MR=6:
4526 FOR I=1 TO 16
4528 LOCATE MR,2:PRINT USING C3$;I;:LOCATE MR,7:GOSUB 4715:PRINT USING C2$;A(I):LOCATE MR,20:GOSUB 4720:PRINT USING C2$;B(I)::LOCATE MR,33:GOSUB 4725:PRINT USING C2$;C(I);
4529 LOCATE MR,46:PRINT USING C1$;RR(I);:LOCATE MR,53:PRINT USING C1$;RC(I);:LOCATE MR,60:PRINT EQ$(I);
4530 MR=MR+1
4531 NEXT I
4532 LOCATE 25,1:INPUT;"PLEASE PRESS <ENTER> TO SEE THE REMAINING EQUATION COEFFICIENTS ";AA$:LOCATE 25,1:PRINT STRING$(78," ");
4534 MR=6
4536 FOR I=1 TO 16
4538 LOCATE MR,2:PRINT"    ";:LOCATE MR,7:PRINT "            ";:LOCATE MR,20:PRINT "            ";:LOCATE MR,33:PRINT "            ";:LOCATE MR,46:PRINT "      ";:LOCATE MR,53:PRINT "      ";:LOCATE MR,60:PRINT "                   ";
4540 MR=MR+1:NEXT I
4542 MR=6:FOR I=17 TO 25
4544 LOCATE MR,2:PRINT USING C3$;I;:LOCATE MR,7:GOSUB 4730:PRINT USING C2$;A(I);:LOCATE MR,20:GOSUB 4735:PRINT USING C2$;B(I);:LOCATE MR,33:GOSUB 4740:PRINT USING C2$;C(I);:LOCATE MR,46:PRINT USING C1$;RR(I);
4545 LOCATE MR,53:PRINT USING C1$;RC(I);:LOCATE MR,60:PRINT EQ$(I);
4546 MR=MR+1:NEXT I
4548 LOCATE 25,1:INPUT;"ALL EQUATIONS HAVE BEEN LISTED.  PRESS <ENTER> TO RETURN TO MAIN MENU ";AAA$
4550 IF LP=1 THEN 4574 ELSE 120
4574 LPRINT A5$:FOR I=1 TO 25
4575 IF A(I)=0 AND B(I)=0 THEN 4578
4576 IF LP=1 THEN LPRINT USING A1$;I;:LPRINT"  ";:LPRINT USING A2$;A(I);:LPRINT"  ";:LPRINT USING A2$;B(I);:LPRINT"  ";:LPRINT USING A2$;C(I);:LPRINT"  ";:LPRINT USING A3$;RR(I);:LPRINT USING A0$;RC(I);:LPRINT" ";:LPRINT EQ$(I)
4578 NEXT I
4605 IF LP=1 THEN LPRINT"BASED ON THE VALUE OF RC( )--BEST FITTING CURVE WAS NUMBER";MQ
4610 LOCATE 25,1:INPUT "PRESS <ENTER> to return to MAIN MENU                                        ";A$:CLS:GOSUB 38000
4620 IF LP=1 THEN LPRINT CHR$(12)
4630 GOTO 120
4700 IF A(MQ)>9999999.9999# OR A(MQ)<-999999.9999# OR ABS(A(MQ))<.0001 THEN C2$="##.#####^^^^" ELSE C2$="#######.####"
4701 IF A(MQ)=0 THEN C2$="#######.####"
4702 RETURN
4705 IF B(MQ)>9999999.9999# OR B(MQ)<-999999.9999# OR ABS(B(MQ))<.0001 THEN C2$="##.#####^^^^" ELSE C2$="#######.####"
4706 IF B(MQ)=0 THEN C2$="#######.####"
4707 RETURN
4710 IF C(MQ)>9999999.9999# OR C(MQ)<-999999.9999# OR ABS(C(MQ))<.0001 THEN C2$="##.#####^^^^" ELSE C2$="#######.####"
4711 IF C(MQ)=0 THEN C2$="#######.####"
4712 RETURN
4715 IF A(I)>9999999.9999# OR A(I)<-999999.9999# OR ABS(A(I))<.0001 THEN C2$="##.#####^^^^" ELSE C2$="#######.####"
4716 IF A(I)=0 THEN C2$="#######.####"
4717 RETURN
4720 IF B(I)>9999999.9999# OR B(I)<-999999.9999# OR ABS(B(I))<.0001 THEN C2$="##.#####^^^^" ELSE C2$="#######.####"
4721 IF B(I)=0 THEN C2$="#######.####"
4722 RETURN
4725 IF C(I)>9999999.9999# OR C(I)<-999999.9999# OR ABS(C(I))<.0001 THEN C2$="##.#####^^^^" ELSE C2$="#######.####"
4726 IF C(I)=0 THEN C2$="#######.####"
4727 RETURN
4730 IF A(I)>9999999.9999# OR A(I)<-999999.9999# OR ABS(A(I))<.0001 THEN C2$="##.#####^^^^" ELSE C2$="#######.####"
4731 IF A(I)=0 THEN C2$="#######.####"
4732 RETURN
4735 IF B(I)>9999999.9999# OR B(I)<-999999.9999# OR ABS(B(I))<.0001 THEN C2$="##.#####^^^^" ELSE C2$="#######.####"
4736 IF B(I)=0 THEN C2$="#######.####"
4737 RETURN
4740 IF C(I)>9999999.9999# OR C(I)<-999999.9999# OR ABS(C(I))<.0001 THEN C2$="##.#####^^^^" ELSE C2$="#######.####"
4741 IF C(I)=0 THEN C2$="#######.####"
4742 RETURN
4745 IF A(EQ)>99999999.9999# OR A(EQ)<-9999999.9999# OR ABS(A(EQ))<.0001 THEN C2$="##.######^^^^" ELSE C2$="########.####"
4746 IF A(EQ)=0 THEN C2$="#######.####"
4747 RETURN
4750 IF B(EQ)>99999999.9999# OR B(EQ)<-9999999.9999# OR ABS(B(EQ))<.0001 THEN C2$="##.######^^^^" ELSE C2$="########.####"
4751 IF B(EQ)=0 THEN C2$="#######.####"
4752 RETURN
4755 IF C(EQ)>99999999.9999# OR C(EQ)<-9999999.9999# OR ABS(C(EQ))<.0001 THEN C2$="##.######^^^^" ELSE C2$="########.####"
4756 IF C(EQ)=0 THEN C2$="#######.####"
4757 RETURN
4760 IF Y>9999999.9999# OR Y<-999999.9999# OR ABS(Y)<.0001 THEN C2$="##.#####^^^^" ELSE C2$="#######.####"
4761 IF Y=0 THEN C2$="#######.####"
4762 RETURN
4770 IF X(I)>9999999.9999# OR X(I)<-999999.9999# OR ABS(X(I))<.0001 THEN C2$="##.#####^^^^" ELSE C2$="#######.####"
4771 IF X(I)=0 THEN C2$="#######.####"
4772 RETURN
4780 IF XX1>9999999.99# OR XX1<-999999.99# OR ABS(XX1)<.0001 THEN C5$="##.###^^^^" ELSE C5$="#######.##"
4781 IF XX1>-9999.9999# AND XX1<99999.9999# THEN C5$="#####.####"
4782 IF XX1=0 THEN C2$="#######.####"
4783 RETURN
4790 IF YY1>9999999.99# OR YY1<-999999.99# OR ABS(YY1)<.0001 THEN C5$="##.###^^^^" ELSE C5$="#######.##"
4791 IF YY1>-9999.9999# AND YY1<99999.9999# THEN C5$="#####.####"
4792 IF YY1=0 THEN C2$="#######.####"
4793 RETURN
4990 CLS:GOSUB 38000:AZ$=""
5000 K=0:L=0:IF AZ$="S" THEN INPUT "All data entered, press <Enter> to continue";A$
5002 AZ$="":Q1$="":Q1A$="":PF$="":PF1$="":CLS:GOSUB 38000:PRINT"Predicted Value of X, Given Value for Y. ":K=1
5003 CLOSE:LOCATE 25,1:INPUT "Quit and return to main menu or Predict (Q or P) DEFAULT = P ";AZ$:CLS:GOSUB 38000
5004 CLS:GOSUB 38000:IF L=1 AND LP=1 THEN LPRINT CHR$(12) 
5005 IF LEFT$(AZ$,1)="q" OR LEFT$(AZ$,1)="Q" THEN 120
5006 INPUT "Output results to printer (Y or N) DEFAULT =N";Q1$:INPUT "Output Predictions to a File (Y) or (N) DEFAULT = N";Q1A$:IF LEFT$(Q1A$,1)="Y" OR LEFT$(Q1A$,1)="y" THEN GOTO 57000
5007 INIT=1:GOSUB 50000:CLS:GOSUB 38000
5008 PRINT "╔═══════════╦═════════════╤═════╤══════╤════════════════════════════╤═════════╗"
5009 PRINT "║ CURVEFIT  ║ PREDICTIONS │ EQ# │      │                            │VER 2.12A║"
5010 PRINT "╠═══════════╩════╤════════╧═════╧═╤════╧═══════════╤════════════════╪═════════╣"
5013 PRINT "║X-DATA ENTRY    │Y-DATA ENTRY    │PREDICTED Y     │RESIDUAL VALUE  │ POINT # ║"
5014 PRINT "╟────────────────┼────────────────┼────────────────┼────────────────┼─────────╢"
5015 FOR I=1 TO 16: PRINT "║                │                │                │                │         ║":NEXT I
5029  PRINT"╟────────────────┼────────────────┼────────────────┼────────────────┼─────────╢"
5030 PRINT "║ Coefficients   │A=              │B=              │C=              │R²=      ║"
5031 PRINT "╚════════════════╧════════════════╧════════════════╧════════════════╧═════════╝";
5032 LOCATE 2,34:PRINT"▒▒▒▒▒▒";:LOCATE 2,34:INPUT;EQ:IF EQ=0 THEN EQ=MQ:LOCATE 2,34:PRINT MQ;:LOCATE 2,42:PRINT"BEST ";EQ$(MQ);:GOTO 5053
5033 LOCATE 2,34:PRINT"      ";:LOCATE 2,34:PRINT EQ;:IF EQ<0 OR EQ>25 THEN 5038 ELSE IF A(EQ)=0 AND B(EQ)=0 THEN 5043 ELSE LOCATE 2,42:PRINT "                           ";:LOCATE 2,42:PRINT EQ$(EQ);
5038 IF EQ<0 OR EQ>25 THEN LOCATE 2,42:PRINT "EQUATION";EQ;" IS UNDEFINED ";:GOTO 5032
5039 GOTO 5053
5043 LOCATE 2,42:PRINT " A AND B = ZERO FOR EQ ";EQ;:GOTO 5032
5053 IF LP=1 THEN LPRINT"PREDICTIONS FOR EQUATION ";EQ$(EQ):LPRINT" "
5054 LOCATE 23,21:GOSUB 4745:PRINT USING C2$;A(EQ);:LOCATE 23,38:GOSUB 4750:PRINT USING C2$;B(EQ);:LOCATE 23,55:GOSUB 4755:PRINT USING C2$;C(EQ);:LOCATE 23,73:PRINT USING"#.####";RC(EQ);
5060 K=0:ON EQ GOTO 5100,5110,5120,5130,5140,5150,5160,5170,5180,5190,5200,5210,5220,5230,5240,5250,5260,5270,5280,5290,5300,5310,5320,5330,5340,5350
5100 I=1:WHILE X$(I)<>"END"
5101 Y=A(1)+B(1)*X(I):YR=Y(I)-Y:GOSUB 5500
5102 I=I+1
5103 WEND
5104 GOTO 5003
5110 I=1:WHILE X$(I)<>"END": Y=B(2)*X(I):YR=Y(I)-Y:GOSUB 5500:I=I+1:WEND:GOTO 5003
5120 I=1:WHILE X$(I)<>"END": Y=1/(A(3)+B(3)*X(I)):YR=Y(I)-Y:GOSUB 5500:I=I+1:WEND:GOTO 5003
5130 I=1:WHILE X$(I)<>"END": Y=A(4)+B(4)*X(I)+C(4)/X(I):YR=Y(I)-Y:GOSUB 5500:I=I+1:WEND:GOTO 5003
5140 I=1:WHILE X$(I)<>"END": Y=A(5)+B(5)/X(I):YR=Y(I)-Y:GOSUB 5500:I=I+1:WEND:GOTO 5003
5150 I=1:WHILE X$(I)<>"END": Y=X(I)/(A(6)*X(I)+B(6)):YR=Y(I)-Y:GOSUB 5500:I=I+1:WEND:GOTO 5003
5160 I=1:WHILE X$(I)<>"END": Y=A(7)+B(7)/X(I)+C(7)/(X(I)*X(I)):YR=Y(I)-Y:GOSUB 5500:I=I+1:WEND:GOTO 5003
5170 I=1:WHILE X$(I)<>"END": Y=A(8)+B(8)*X(I)+C(8)*X(I)*X(I):YR=Y(I)-Y:GOSUB 5500:I=I+1:WEND:GOTO 5003
5180 I=1:WHILE X$(I)<>"END": Y=A(9)*X(I)+B(9)*X(I)*X(I):YR=Y(I)-Y:GOSUB 5500:I=I+1:WEND:GOTO 5003
5190 I=1:WHILE X$(I)<>"END": Y=A(10)*X(I)^B(10):YR=Y(I)-Y:GOSUB 5500:I=I+1:WEND:GOTO 5003
5200 I=1:WHILE X$(I)<>"END": Y=A(11)*B(11)^X(I):YR=Y(I)-Y:GOSUB 5500:I=I+1:WEND:GOTO 5003
5210 I=1:WHILE X$(I)<>"END": Y=A(12)*B(12)^(1/X(I)):YR=Y(I)-Y:GOSUB 5500:I=I+1:WEND:GOTO 5003
5220 I=1:WHILE X$(I)<>"END": Y=A(13)*X(I)^(B(13)*X(I)):YR=Y(I)-Y:GOSUB 5500:I=I+1:WEND:GOTO 5003
5230 I=1:WHILE X$(I)<>"END": Y=A(14)*X(I)^(B(14)/X(I)):YR=Y(I)-Y:GOSUB 5500:I=I+1:WEND:GOTO 5003
5240 I=1:WHILE X$(I)<>"END": Y=A(15)*EXP(B(15)*X(I)):YR=Y(I)-Y:GOSUB 5500:I=I+1:WEND:GOTO 5003
5250 I=1:WHILE X$(I)<>"END": Y=A(16)*EXP(B(16)/X(I)):YR=Y(I)-Y:GOSUB 5500:I=I+1:WEND:GOTO 5003
5260 I=1:WHILE X$(I)<>"END": Y=A(17)+B(17)*LOG(X(I)):YR=Y(I)-Y:GOSUB 5500:I=I+1:WEND:GOTO 5003
5270 I=1:WHILE X$(I)<>"END": Y=1/(A(18)+B(18)*LOG(X(I))):YR=Y(I)-Y:GOSUB 5500:I=I+1:WEND:GOTO 5003
5280 I=1:WHILE X$(I)<>"END": Y=A(19)*B(19)^X(I)*X(I)^C(19):YR=Y(I)-Y:GOSUB 5500:I=I+1:WEND:GOTO 5003
5290 I=1:WHILE X$(I)<>"END": Y=A(20)*B(20)^(1/X(I))*X(I)^C(20):YR=Y(I)-Y:GOSUB 5500:I=I+1:WEND:GOTO 5003
5300 I=1:WHILE X$(I)<>"END": Y=A(21)*EXP(((X(I)-B(21))^2)/C(21)):YR=Y(I)-Y:GOSUB 5500:I=I+1:WEND:GOTO 5003
5310 I=1:WHILE X$(I)<>"END": Y=A(22)*EXP((LOG(X(I))-B(22))^2/C(22)):YR=Y(I)-Y:GOSUB 5500:I=I+1:WEND:GOTO 5003
5320 I=1:WHILE X$(I)<>"END": Y=A(23)*X(I)^B(23)*(1-X(I))^C(23):YR=Y(I)-Y:GOSUB 5500:I=I+1:WEND:GOTO 5003
5330 I=1:WHILE X$(I)<>"END": Y=A(24)*(X(I)/B(24))^C(24)*EXP(X(I)/B(24)):YR=Y(I)-Y:GOSUB 5500:I=I+1:WEND:GOTO 5003
5340 I=1:WHILE X$(I)<>"END": Y=1/(A(25)*(X(I)+B(25))^2+C(25)):YR=Y(I)-Y:GOSUB 5500:I=I+1:WEND:GOTO 5003
5350 REM * END OF Y PREDICTIONS *
5500 IF INIT =1 THEN M=1:MR=1:MC=1:MR1=1:MC1=1
5502 L=1:INIT=0
5503 IF LEFT$(Q1A$,1)="Y" OR LEFT$(Q1A$,1)="y" THEN PRINT #1, X(I), Y(I), Y, YR
5505 LOCATE 5+MR,2:GOSUB 4770:PRINT USING C2$;X(I);:LOCATE 5+MR,19:YY1=Y(I):GOSUB 4790:PRINT USING C5$;Y(I);:LOCATE 5+MR,36:
5506 YY1=Y:GOSUB 4790:PRINT USING C5$;YY1;:YY1=YR:LOCATE 5+MR,53:GOSUB 4790:PRINT USING C5$;YR;:LOCATE 5+MR,74:PRINT USING "####";I;
5507 IF LP=1 THEN LPRINT"X = ";USING C2$;X(I),:LPRINT"   Y = ";USING C5$;Y(I),:LPRINT"   PRED = ";USING C5$;Y,:LPRINT"   RES = ";USING C5$;YR
5508 MR=MR+1:M=M+1:IF MR MOD 17=0 THEN MR=1:GOSUB 5600
5511 IF LP=1 THEN 5515
5515 IF LP=1 AND (INT(M/60)=(M/60)) THEN LPRINT CHR$(12)
5520 RETURN
5600 LOCATE 25,1:PRINT"PLEASE PRESS <ENTER> FOR MORE DATA";:INPUT;A$:LOCATE 25,1:PRINT"                                                                       ";
5602 FOR I3=1 TO 16:LOCATE 5+I3,2:PRINT"                ";:LOCATE 5+I3,19:PRINT"                ";:LOCATE 5+I3,36:PRINT"                ";:LOCATE 5+I3,53:PRINT"                ";:LOCATE 5+I3,70:PRINT"         ":NEXT I3
5620 RETURN
6000 REM * STORE DATA ON DISK (RAW DATA ONLY) *
6030 CLS:PRINT "This routine will store RAW DATA on Disk"
6035 ON ERROR GOTO 63000
6040 INPUT "Please enter File Name for Data Storage ";A4$
6050 OPEN "O",1,A4$
6060 FOR I=1 TO 255
6065 IF X$(I)="END" AND Y$(I)="END" THEN CLOSE 1:GOTO 6080
6070 PRINT #1,X$(I),Y$(I):NEXT I:CLOSE 1
6080 PRINT "Data have been stored to disk with File Name ";A4$
6090 INPUT "Press <Enter> to return to MAIN MENU";Z0
6100 GOTO 120
7000 REM * LOAD DATA FROM DISK *
7030 CLS:PRINT"This routine will load DATA from Disk"
7035 ON ERROR GOTO 61000
7040 INPUT "PLEASE Enter File Name for Data ";A4$
7041 FOR I=1 TO 255:X$(I)="END":Y$(I)="END":NEXT I
7045 NX=0:NY=0:FOR I=1 TO 25:A(I)=0:B(I)=0:C(I)=0:R(I)=0:RC(I)=0:NEXT I
7050 OPEN "I",1,A4$
7060 FOR I=1 TO 255
7065 IF EOF(1) THEN PRINT"ALL DATA LOADED":K=I:FOR J=K TO 255:X$(J)="END":Y$(J)="END":NEXT J:GOTO 7075
7070 INPUT #1,X$(I)
7071 IF INSTR(2,X$(I)," ")<>0 THEN 7200
7073 INPUT #1,Y$(I):NEXT I
7075 CLOSE 1
7080 PRINT "Data loaded from file ";A4$
7082 FOR I=1 TO 255:IF X$(I)="" THEN X$(I)="DEL":Y$(I)="DEL"
7083 IF X$(I)="END" THEN IF X$(1)<>"DEL" THEN 7090 ELSE DE=1:GOTO 3430
7084 NEXT I:DE=1:GOTO 3430
7090 INPUT "Press ENTER to Continue";A9:GOTO 3430
7100 GOTO 120
7200 CLOSE 1:OPEN "I",1,A4$
7210 FOR I=1 TO 255
7220 IF EOF(1) THEN PRINT"ALL DATA LOADED":K=I:FOR J=K TO 255:X$(J)="END":Y$(J)="END":NEXT J:GOTO 7275
7230 INPUT #1,DUMM$
7240 PM=INSTR(2,DUMM$," "):X$(I)=LEFT$(DUMM$,PM):Y$(I)=RIGHT$(DUMM$,LEN(DUMM$)-PM):NEXT I
7275 GOTO 7075
8000 CLS:GOSUB 38000:PRINT"PROGRAM EXECUTION HAS BEEN TERMINATED"
8010 INPUT "Before exiting do you wish to store data on disk (Y or N)";A$
8020 IF LEFT$(A$,1)="N" OR LEFT$(A$,1)="n"  THEN END
8030 GOTO 6030
9000 REM * LIST RAW DATA *
9005 CLS:GOSUB 38000:PRINT "LIST OF DATA ENTERED"
9006 INPUT "Do you want to list data on printer (Y or N)";Q1$
9007 GOSUB 50000:GOTO 63700
9008 IF LP=1 THEN LPRINT"LISTING OF DATA":LPRINT" "
9009 IF LP=0 THEN 9100
9010 FOR I=1 TO 255
9020 IF X$(I)="END" OR Y$(I)="END" THEN LPRINT CHR$(12):GOTO 9100
9065 IF LP=1 THEN LPRINT"X( ";I;" )= ";X$(I);TAB(32);"Y( ";I;" )= ";Y$(I)
9066 IF LP=1 AND (INT(I/60)=(I/60)) THEN LPRINT CHR$(12)
9074 NEXT I:IF LP=1 THEN LPRINT CHR$(12)
9100 IF Q7=1 THEN  Q7=0:RETURN
9110 GOTO 120
10000 CLS:GOSUB 38000
10010 PRINT "╔═══════════════════════════════════════════════════════════════════════════╗"
10020 PRINT "║     LISTING of Equations Fitted with CURVEFIT Version 2.12-A  (11/15/88)  ║"
10030 PRINT "╟────────────────────────────────────┬──────────────────────────────────────╢"
10040 PRINT "║  1. Y=A+B*X       STR. LINE        │   2. Y=B*X           LINE THRU ORG.  ║"
10050 PRINT "║  3. Y=1/(A+B*X)   REC. STR LINE    │   4. Y=A+B*X+C/X     LIN AND RECIP.  ║"
10060 PRINT "║  5. Y=A+B/X       HYPERBOLA        │   6. Y=X/(A*X+B)     RECIP HYPERBOLA ║"
10070 PRINT "║  7. Y=A+B/X+C/X*X 2ND ORD HYP      │   8. Y=A+B*X+C*X*X   PARABOLA        ║"
10080 PRINT "║  9. Y=A*X+B*X*X   PAR AT ORIGIN    │  10. Y=A*X^B         POWER           ║"
10090 PRINT "║ 11. Y=A*B^X       MOD. POWER       │  12. Y=A*B^(1/X)     ROOT            ║"
10100 PRINT "║ 13. Y=A*X^(B*X)   SUPER GEOMET.    │  14. Y=A*X^(B/X)     MOD GEOMETRIC   ║"
10110 PRINT "║ 15. Y=A*e^(B*X)   EXPONENTIAL      │  16. Y=A*e^(B/X)     MOD EXPONENTIAL ║"
10120 PRINT "║ 17. Y=A+B*ln(X)   LOGARITHMIC      │  18. Y=1/(A+B*ln(X))   RECIP LOG     ║"
10130 PRINT "║ 19. Y=A*B^X*X^C   HOERL FUNCTION   │  20. Y=A*B^(1/X)*X^C   MOD HOERL     ║"
10140 PRINT "║ 21. Y=A*e^(((X-B)^2)/C)  NORMAL    │  22. Y=A*e^((ln(X)-B)^2/C) LOG NORMAL║"
10150 PRINT "║ 23. Y=A*X^B*(1-X)^C   BETA         │  24. Y=A*(X/B)^C*e^(X/B)   GAMMA     ║"
10160 PRINT "║ 25. Y=1/(A*(X+B)^2+C) CAUCHY       │                                      ║"
10170 PRINT "╟────────────────────────────────────┴──────────────────────────────────────╢"
10180 PRINT "║      NOTES:  A.  Values of X and Y may be positive, negative, or zero     ║"
10190 PRINT "║              B.  Only 255 values of X and Y can be used.                  ║"
10200 PRINT "╟───────────────────────────────────────────────────────────────────────────╢"
10210 PRINT "║      Press <RETURN> to continue program execution                         ║"
10220 PRINT "╚═══════════════════════════════════════════════════════════════════════════╝"
10230 A$=INKEY$:IF A$<>CHR$(13) THEN 10230 ELSE 10460
10460 IF R1=1 THEN RETURN ELSE 120
12000 FOR I=1 TO 25:A(I)=0:B(I)=0:C(I)=0:RR(I)=0:RC(I)=0:NEXT I
12005 REM * EQUATION 1 STRAIGHT LINE
12008 ON ERROR GOTO 62101
12010 A(1)=(R(17)*R(18)-R(16)*R(20))/(R(17)*R(21)-(R(16)*R(16)))
12020 B(1)=(R(20)*R(21)-R(16)*R(18))/(R(17)*R(21)-(R(16)*R(16)))
12030 RR(1)=(A(1)*R(18)+B(1)*R(20)-(R(18)*R(18))/R(21))/(R(19)-(R(18)*R(18))/R(21))
12040 RC(1)=1-(((1-RR(1))*(R(21)-1))/(R(21)-2))
12050 C(1)=0
12060 REM * EQUATION 2 STRAIGHT LINE THROUGH ORIGIN *
12061 A(2)=0:B(2)=R(20)/R(17):RR(2)=0:RC(2)=0:C(2)=0
12070 ON ERROR GOTO 62102: REM The rest of this routine supplied by J. Cargal
12071 SSTO=R(19)-((R(18)/R(21))*R(18)):REM R^2=MAX{0,1-(SSE/SSTO)}
12072 SSE=0: FOR I=1 TO R(21):SSE=SSE+(Y(I)-B(2)*X(I))^2:NEXT I
12080 RR(2)=1-SSE/SSTO:IF RR(2)<0 THEN RR(2)=0
12081 IF RR(2)>1 THEN RR(2)=1:RC(2)=1
12082 RC(2)=RR(2)
12140 REM * EQUATION 3 RECIPROCAL OF STRAIGHT LINE
12145 ON ERROR GOTO 62103
12150 A(3)=(R(17)*R(24)-R(16)*R(34))/(R(17)*R(21)-(R(16)*R(16)))
12160 B(3)=(R(21)*R(34)-R(16)*R(24))/(R(17)*R(21)-(R(16)*R(16)))
12170 RR(3)=(A(3)*R(24)+B(3)*R(34)-((R(24)*R(24))/R(21)))/(R(25)-(R(24)*R(24))/R(21))
12180 RC(3)=1-(((1-RR(3))*(R(21)-1))/(R(21)-2))
12190 C(3)=0
12200 REM * EQUATION 4  COMBINED LINEAR AND RECIPROCAL *
12201 ON ERROR GOTO 62104
12220 S1=R(17)*R(21)-(R(16)*R(16))
12230 S2=R(21)*R(35)-R(18)*R(22)
12240 S3=(R(21)*R(21))-R(16)*R(22)
12250 S4=R(20)*R(21)-R(16)*R(18)
12260 S5=R(21)*R(23)-(R(22)*R(22))
12270 C(4)=(S1*S2-S3*S4)/(S1*S5-(S3*S3))
12280 B(4)=(S4-S3*C(4))/S1
12290 A(4)=(R(18)-B(4)*R(16)-C(4)*R(22))/R(21)
12300 RR(4)=(A(4)*R(18)+B(4)*R(20)+C(4)*R(35)-(R(18)*R(18))/R(21))/(R(19)-(R(18)*R(18))/R(21))
12310 RC(4)=1-(((1-RR(4))*(R(21)-1))/(R(21)-3))
12320 REM * EQUATION 5  HYPERBOLA *
12321 ON ERROR GOTO 62105
12330 S1=R(21)*R(23)-(R(22)*R(22))
12340 A(5)=(R(18)*R(23)-R(22)*R(35))/S1
12360 B(5)=(R(21)*R(35)-R(18)*R(22))/S1
12370 RR(5)=(A(5)*R(18)+B(5)*R(35)-(R(18)*R(18))/R(21))/(R(19)-(R(18)*R(18))/R(21))
12380 RC(5)=1-(((1-RR(5))*(R(21)-1))/(R(21)-2))
12390 C(5)=0
12400 REM * EQUATION 6  RECIPROCAL OF A HYPERBOLA *
12401 ON ERROR GOTO 62106
12420 S1=R(21)*R(23)-(R(22)*R(22))
12430 A(6)=(R(23)*R(24)-R(22)*R(26))/S1
12440 B(6)=(R(21)*R(26)-R(22)*R(24))/S1
12450 RR(6)=(A(6)*R(24)+B(6)*R(26)-(R(24)*R(24))/R(21))/(R(25)-(R(24)*R(24))/R(21))
12460 RC(6)=1-(((1-RR(6))*(R(21)-1))/(R(21)-2))
12462 C(6)=0
12470 REM * EQUATION 7  SECOND ORDER HYPERBOLA *
12471 ON ERROR GOTO 62107
12490 S1=R(21)*R(23)-(R(22)*R(22))
12500 S2=R(21)*R(38)-R(18)*R(23)
12510 S3=R(21)*R(41)-R(22)*R(23)
12520 S4=R(21)*R(35)-R(18)*R(22)
12530 S5=R(21)*R(44)-(R(23)*R(23))
12535 IF (S1*S5-S3*S3)=0 THEN 12620
12540 C(7)=(S1*S2-S3*S4)/(S1*S5-(S3*S3))
12545 IF C(7)>=9.999999E+37 THEN A(7)=0:B(7)=0:C(7)=0:GOTO 12590
12550 B(7)=(S4-S3*C(7))/S1
12560 A(7)=(R(18)-C(7)*R(23)-B(7)*R(22))/R(21)
12570 RR(7)=(A(7)*R(18)+B(7)*R(35)+C(7)*R(38)-(R(18)*R(18))/R(21))/(R(19)-(R(18)*R(18))/R(21))
12580 RC(7)=1-(((1-RR(7))*(R(21)-1))/(R(21)-3))
12590 REM * EQUATION 8  PARABOLA *
12591 ON ERROR GOTO 62108
12620 S1=R(17)*R(21)-(R(16)*R(16))
12630 S2=R(21)*R(36)-R(17)*R(18)
12640 S3=R(21)*R(40)-R(16)*R(17)
12650 S4=R(20)*R(21)-R(16)*R(18)
12660 S5=R(21)*R(43)-(R(17)*R(17))
12670 C(8)=(S1*S2-S3*S4)/(S1*S5-(S3*S3))
12680 B(8)=(S4-S3*C(8))/S1
12690 A(8)=(R(18)-C(8)*R(17)-B(8)*R(16))/R(21)
12700 RR(8)=(A(8)*R(18)+B(8)*R(20)+C(8)*R(36)-(R(18)*R(18))/R(21))/(R(19)-(R(18)*R(18))/R(21))
12710 RC(8)=1-(((1-RR(8))*(R(21)-1))/(R(21)-3))
12720 REM * EQUATION 9  PARABOLA THROUGH ORIGIN *
12721 ON ERROR GOTO 62109
12750 S1=R(17)*R(43)-(R(40)*R(40))
12760 A(9)=(R(20)*R(43)-R(36)*R(40))/S1
12770 B(9)=(R(17)*R(36)-R(20)*R(40))/S1
12780 C(9)=0: RR(9)=0: RC(9)=0
12810 REM * EQUATION 10  POWER *
12811 ON ERROR GOTO 62110
12820 IF NX=1 OR NY=1 THEN 13000
12840 S1=R(21)*R(29)-(R(28)*R(28))
12850 S3=(R(29)*R(30)-R(28)*R(32))/S1
12860 A(10)=EXP((R(29)*R(30)-R(28)*R(32))/S1)
12870 B(10)=(R(21)*R(32)-R(28)*R(30))/S1
12875 RR(10)=(S3*R(30)+B(10)*R(32)-(R(30)*R(30))/R(21))/(R(31)-(R(30)*R(30))/R(21))
12880 IF RR(10)<0 OR RR(10)>1 THEN A(10)=0:B(10)=0:GOTO 13000
12890 RC(10)=1-(((1-RR(10))*(R(21)-1))/(R(21)-2))
12895 C(10)=0
13000 REM * EQUATION 11  MODIFIED POWER *
13001 ON ERROR GOTO 62111
13010 IF NY=1 THEN 13110
13020 S1=R(17)*R(21)-(R(16)*R(16))
13030 S2=(R(17)*R(30)-R(16)*R(46))/S1
13040 S3=(R(21)*R(46)-R(16)*R(30))/S1
13060 A(11)=EXP(S2)
13070 B(11)=EXP(S3)
13080 RR(11)=(S2*R(30)+S3*R(46)-(R(30)*R(30))/R(21))/(R(31)-(R(30)*R(30))/R(21))
13090 RC(11)=1-(((1-RR(11))*(R(21)-1))/(R(21)-2))
13100 C(11)=0
13110 REM * EQUATION 12  ROOT *
13111 ON ERROR GOTO 62112
13120 IF NY=1 THEN 13210
13140 S1=R(23)*R(21)-(R(22)*R(22))
13150 S2=(R(23)*R(30)-R(22)*R(47))/S1
13160 S3=(R(21)*R(47)-R(22)*R(30))/S1
13165 IF S2>87 OR S3>87 OR S2<-86 OR S3<-86 THEN 13210:REM Error trap to keep
13170 A(12)=EXP(S2):REM QB4 and TB1.1 from crashing and to prevent QB3 from
13180 B(12)=EXP(S3):REM giving erroneous results.  Added 4/4/88
13190 RR(12)=(S2*R(30)+S3*R(47)-(R(30)*R(30))/R(21))/(R(31)-(R(30)*R(30))/R(21))
13200 RC(12)=1-(((1-RR(12))*(R(21)-1))/(R(21)-2)):C(12)=0
13210 REM * EQUATION 13  SUPER GEOMETRIC *
13211 ON ERROR GOTO 62113
13220 IF NX=1 OR NY=1 THEN 13400
13240 S1=R(21)*R(49)-(R(48)*R(48))
13250 S2=(R(30)*R(49)-R(48)*R(50))/S1
13260 A(13)=EXP(S2)
13270 B(13)=(R(21)*R(50)-R(30)*R(48))/S1
13280 RR(13)=(S2*R(30)+B(13)*R(50)-(R(30)*R(30))/R(21))/(R(31)-(R(30)*R(30))/R(21))
13290 RC(13)=1-(((1-RR(13))*(R(21)-1))/(R(21)-2))
13295 C(13)=0
13300 REM * EQUATION 14  MODIFIED GEOMETRIC *
13301 ON ERROR GOTO 62114
13330 S1=R(21)*R(53)-(R(63)*R(63))
13340 S2=(R(30)*R(53)-R(63)*R(58))/S1
13350 A(14)=EXP(S2)
13360 B(14)=(R(21)*R(58)-R(30)*R(63))/S1
13370 RR(14)=(S2*R(30)+B(14)*R(58)-(R(30)*R(30))/R(21))/(R(31)-(R(30)*R(30))/R(21))
13380 RC(14)=1-(((1-RR(14))*(R(21)-1))/(R(21)-2))
13390 C(14)=0
13400 REM * EQUATION 15  EXPONENTIAL *
13401 ON ERROR GOTO 62115
13420 IF NY=1 THEN 13600
13430 S1=R(17)*R(21)-(R(16)*R(16))
13440 S2=(R(17)*R(30)-R(16)*R(46))/S1
13450 A(15)=EXP(S2)
13460 B(15)=(R(21)*R(46)-R(16)*R(30))/S1
13470 RR(15)=(S2*R(30)+R(46)*B(15)-(R(30)*R(30))/R(21))/(R(31)-(R(30)*R(30))/R(21))
13480 RC(15)=1-(((1-RR(15))*(R(21)-1))/(R(21)-2))
13490 C(15)=0
13500 REM * EQUATION 16  MODIFIED EXPONENTIAL *
13501 ON ERROR GOTO 62116
13530 S1=R(23)*R(21)-(R(22)*R(22))
13540 S2=(R(23)*R(30)-R(22)*R(47))/S1
13550 A(16)=EXP(S2)
13560 B(16)=(R(21)*R(47)-R(22)*R(30))/S1
13570 RR(16)=(S2*R(30)+B(16)*R(47)-(R(30)*R(30))/R(21))/(R(31)-(R(30)*R(30))/R(21))
13580 RC(16)=1-(((1-RR(16))*(R(21)-1))/(R(21)-2)):C(16)=0
13600 REM * EQUATION 17  LOGARITHMIC *
13601 ON ERROR GOTO 62117
13620 IF NX=1 THEN 14000
13630 S1=R(21)*R(29)-(R(28)*R(28))
13640 A(17)=(R(18)*R(29)-R(28)*R(51))/S1
13650 B(17)=(R(21)*R(51)-R(18)*R(28))/S1
13660 RR(17)=(A(17)*R(18)+B(17)*R(51)-(R(18)*R(18))/R(21))/(R(19)-(R(18)*R(18))/R(21))
13670 C(17)=0: RC(17)=1-(((1-RR(17))*(R(21)-1))/(R(21)-2))
13680 REM * EQUATION 18  RECIPROCAL OF LOGARITHMIC *
13681 ON ERROR GOTO 62118
13710 S1=R(21)*R(29)-(R(28)*R(28))
13720 A(18)=(R(24)*R(29)-R(28)*R(52))/S1
13730 B(18)=(R(21)*R(52)-R(24)*R(28))/S1
13740 RR(18)=(A(18)*R(24)+B(18)*R(52)-(R(24)*R(24))/R(21))/(R(25)-(R(24)*R(24))/R(21))
13750 C(18)=0:RC(18)=1-(((1-RR(18))*(R(21)-1))/(R(21)-2))
14000 REM * EQUATION 19  HOERL FUNCTION *
14001 ON ERROR GOTO 62119
14020 IF NX=1 OR NY=1 THEN 14300
14030 S1=R(17)*R(21)-(R(16)*R(16))
14040 S2=R(21)*R(32)-R(28)*R(30)
14050 S3=R(21)*R(48)-R(16)*R(28)
14060 S4=R(21)*R(46)-R(16)*R(30)
14070 S5=R(21)*R(29)-(R(28)*R(28))
14080 C(19)=(S1*S2-S3*S4)/(S1*S5-(S3*S3))
14090 S6=(S4-S3*C(19))/S1
14100 S7=(R(30)-C(19)*R(28)-S6*R(16))/R(21)
14105 IF S7>87 OR S8>87 THEN A(19)=0:B(19)=0:C(19)=0:GOTO 14150
14110 B(19)=EXP(S6)
14120 A(19)=EXP(S7)
14130 RR(19)=(S7*R(30)+S6*R(46)+C(19)*R(32)-(R(30)*R(30))/R(21))/(R(31)-(R(30)*R(30))/R(21))
14140 RC(19)=1-(((1-RR(19))*(R(21)-1))/(R(21)-3))
14150 REM * EQUATION 20  MODIFIED HOERL FUNCTION *
14151 ON ERROR GOTO 62120
14180 S1=R(21)*R(23)-(R(22)*R(22))
14190 S2=R(21)*R(32)-R(28)*R(30)
14200 S3=R(21)*R(45)-R(22)*R(28)
14210 S4=R(21)*R(47)-R(22)*R(30)
14220 S5=R(21)*R(29)-(R(28)*R(28))
14230 C(20)=(S1*S2-S3*S4)/(S1*S5-(S3*S3))
14240 S6=(S4-S3*C(20))/S1
14250 S7=(R(30)-C(20)*R(28)-S6*R(22))/R(21)
14255 IF S6>87 OR S7>87 THEN A(20)=0:B(20)=0:C(20)=0:GOTO 14300
14260 A(20)=EXP(S7)
14270 B(20)=EXP(S6)
14280 RR(20)=(S7*R(30)+S6*R(47)+C(20)*R(32)-(R(30)*R(30))/R(21))/(R(31)-(R(30)*R(30))/R(21))
14290 RC(20)=1-(((1-RR(20))*(R(21)-1))/(R(21)-3))
14300 REM * EQUATION 21  NORMAL DISTRIBUTION *
14301 ON ERROR GOTO 62121
14310 IF NY=1 THEN 14460
14330 S1=R(17)*R(21)-(R(16)*R(16))
14340 S2=R(21)*R(54)-R(17)*R(30)
14350 S3=R(21)*R(40)-R(16)*R(17)
14360 S4=R(21)*R(46)-R(16)*R(30)
14370 S5=R(21)*R(43)-(R(17)*R(17))
14380 S6=(S1*S2-S3*S4)/(S1*S5-(S3*S3))
14390 S7=(S4-S3*S6)/S1
14400 S8=(R(30)-S7*R(16)-S6*R(17))/R(21)
14410 A(21)=EXP(S8-((S7*S7)/(4*S6)))
14420 B(21)=-S7/(2*S6)
14430 C(21)=1/S6
14440 RR(21)=(S8*R(30)+S7*R(46)+S6*R(54)-(R(30)*R(30))/R(21))/(R(31)-(R(30)*R(30))/R(21))
14450 RC(21)=1-(((1-RR(21))*(R(21)-1))/(R(21)-3))
14460 REM * EQUATION 22  LOG NORMAL DISTRIBUTION *
14461 ON ERROR GOTO 62122
14470 IF NX=1 OR NY=1 THEN 14620
14490 S1=R(21)*R(29)-(R(28)*R(28))
14500 S2=R(21)*R(57)-R(29)*R(30)
14510 S3=R(21)*R(55)-R(28)*R(29)
14520 S4=R(21)*R(32)-R(28)*R(30)
14530 S5=R(21)*R(56)-(R(29)*R(29))
14540 S6=(S1*S2-S3*S4)/(S1*S5-(S3*S3)):IF S6=0 THEN 14620: REM Required for QB4 
14550 S7=(S4-S3*S6)/S1
14560 S8=(R(30)-S7*R(28)-S6*R(29))/R(21)
14570 Z=(S8-(S7*S7)/(4*S6)):IF Z>85 THEN 14620 ELSE A(22)=EXP(Z)
14580 B(22)=-S7/(2*S6)
14590 C(22)=1/S6
14600 RR(22)=(S8*R(30)+S7*R(32)+S6*R(57)-(R(30)*R(30))/R(21))/(R(31)-(R(30)*R(30))/R(21))
14610 RC(22)=1-(((1-RR(22))*(R(21)-1))/(R(21)-3))
14620 REM * EQUATION 23  BETA DISTRIBUTION *
14621 ON ERROR GOTO 62123
14645 IF Q9=1 THEN GOTO 14790
14650 S1=R(21)*R(29)-(R(28)*R(28))
14660 S2=R(21)*R(62)-R(30)*R(59)
14670 S3=R(21)*R(61)-R(28)*R(59)
14680 S4=R(21)*R(32)-R(28)*R(30)
14690 S5=R(21)*R(60)-(R(59)*R(59))
14700 C(23)=(S1*S2-S3*S4)/(S1*S5-(S3*S3))
14710 B(23)=(S4-S3*C(23))/S1
14720 S6=(R(30)-B(23)*R(28)-C(23)*R(59))/R(21)
14730 A(23)=EXP(S6)
14740 RR(23)=(S6*R(30)+B(23)*R(32)+C(23)*R(62)-(R(30)*R(30))/R(21))/(R(31)-(R(30)*R(30))/R(21))
14750 RC(23)=1-(((1-RR(23))*(R(21)-1))/(R(21)-3))
14760 REM * EQUATION 24  GAMMA DISTRIBUTION *
14761 ON ERROR GOTO 62124
14765 IF NX=1 OR NY=1 THEN 14960
14790 S1=R(17)*R(21)-(R(16)*R(16))
14800 S2=R(21)*R(32)-R(28)*R(30)
14810 S3=R(21)*R(48)-R(16)*R(28)
14820 S4=R(21)*R(46)-R(16)*R(30)
14830 S5=R(21)*R(29)-(R(28)*R(28))
14840 C(24)=(S1*S2-S3*S4)/(S1*S5-(S3*S3))
14850 S6=(S4-S3*C(24))/S1
14860 S7=(R(30)-S6*R(16)-C(24)*R(28))/R(21)
14865 IF S6<=0 THEN B(24)=0:C(24)=0:GOTO 14960
14870 B(24)=1/S6
14880 A(24)=EXP(S7+C(24)*LOG(1/S6))
14890 RR(24)=(S7*R(30)+S6*R(46)+C(24)*R(32)-(R(30)*R(30))/R(21))/(R(31)-(R(30)*R(30))/R(21))
14895 RC(24)=1-(((1-RR(24))*(R(21)-1))/(R(21)-3))
14920 REM * EQUATION 25  CAUCHY DISTRIBUTION *
14921 ON ERROR GOTO 62125
14960 S1=R(17)*R(21)-(R(16)*R(16))
14970 S2=R(21)*R(37)-R(17)*R(24)
14980 S3=R(21)*R(40)-R(16)*R(17)
14990 S4=R(21)*R(34)-R(16)*R(24)
15000 S5=R(21)*R(43)-(R(17)*R(17))
15010 A(25)=(S1*S2-S3*S4)/(S1*S5-(S3*S3))
15020 S6=(S4-S3*A(25))/S1
15030 S7=(R(24)-S6*R(16)-A(25)*R(17))/R(21)
15040 B(25)=(S6/(2*A(25)))
15050 C(25)=S7-((S6*S6)/(4*A(25)))
15060 RR(25)=(S7*R(24)+S6*R(34)+A(25)*R(37)-(R(24)*R(24))/R(21))/(R(25)-(R(24)*R(24))/R(21))
15070 RC(25)=1-(((1-RR(25))*(R(21)-1))/(R(21)-3))
15090 PRINT"COEFFICIENTS NOW CALCULATED "
15100 FOR I=1 TO 25
15102 IF RR(I)<0 OR RR(I)>1 THEN A(I)=0:B(I)=0:RC(I)=0:C(I)=0:RR(I)=0
15103 IF RC(I)<0 OR RC(I)>1 THEN RC(I)=0
15104 NEXT I
15106 GOTO 4040
20000 REM * CALCULATE SUMS AND SUMS OF SQUARES *
20010 NX=0:NY=0
20040 FOR I=16 TO 65: R(I)=0: NEXT I
20041 Q9=0:QA=1:GOTO 3430
20045 FOR I=1 TO 255
20046 CLS:GOSUB 38000:PRINT"PROCESSING DATA POINT # "; I
20047 IF X$(1)="END" OR Y$(1)="END" THEN PRINT "NO DATA HAS BEEN ENTERED":PRINT"RETURNING TO MAIN MENU":FOR I1=1 TO 1000:NEXT I1:GOTO 120
20055 IF X$(I)= "END" OR Y$(I)="END" OR X$(I)="DEL" OR Y$(I)="DEL" GOTO 30000
20060 X(I)=CDBL(VAL(X$(I))):Y(I)=CDBL(VAL(Y$(I)))
20065 IF X(I)<0 THEN NX=1
20066 IF Y(I)<0 THEN NY=1
20067 IF X(I)=0 THEN X(I)=.0001
20068 IF Y(I)=0 THEN Y(I)=.0001
20070 R(16)=R(16)+X(I)
20080 R(17)=R(17)+X(I)*X(I)
20090 R(18)=R(18)+Y(I)
20100 R(19)=R(19)+Y(I)*Y(I)
20110 R(20)=R(20)+X(I)*Y(I)
20120 R(21)=I
20130 R(22)=R(22)+(1/X(I))
20140 R(23)=R(23)+(1/(X(I)*X(I)))
20150 R(24)=R(24)+(1/(Y(I)))
20160 R(25)=R(25)+(1/(Y(I)*Y(I)))
20170 R(26)=R(26)+(1/(Y(I)*X(I)))
20180 R(27)=I
20190 IF NX<>1 THEN R(28)=R(28)+LOG(X(I))
20200 IF NX<>1 THEN R(29)=R(29)+(LOG(X(I)))*(LOG(X(I)))
20210 IF NY <>1 THEN R(30)=R(30)+(LOG(Y(I)))
20220 IF NY<>1 THEN R(31)=R(31)+(LOG(Y(I)))*(LOG(Y(I)))
20230 IF NX<>1 AND NY<>1 THEN R(32)=R(32)+(LOG(X(I)))*(LOG(Y(I)))
20240 R(33)=I
20250 R(34)=R(34)+(X(I)/Y(I))
20260 R(35)=R(35)+(Y(I)/X(I))
20270 R(36)=R(36)+((X(I)*X(I)))*Y(I)
20280 R(37)=R(37)+((X(I)*X(I)))/Y(I)
20290 R(38)=R(38)+(Y(I)/(X(I)*X(I)))
20300 R(39)=R(39)+X(I)*(Y(I)*Y(I))
20310 R(40)=R(40)+(X(I)*X(I)*X(I))
20320 R(41)=R(41)+1/((X(I)*X(I)*X(I)))
20330 R(42)=R(42)+(Y(I)*Y(I)*Y(I))
20340 R(43)=R(43)+(X(I)*X(I)*X(I)*X(I))
20350 R(44)=R(44)+1/((X(I)*X(I)*X(I)*X(I)))
20360 IF NX<>1 THEN R(45)=R(45)+LOG(X(I))/X(I)
20370 IF NY<>1 THEN R(46)=R(46)+X(I)*LOG(Y(I))
20380 IF NY<>1 THEN R(47)=R(47)+LOG(Y(I))/X(I)
20390 IF NX<>1 THEN R(48)=R(48)+X(I)*LOG(X(I))
20400 IF NX<>1 THEN R(49)=R(49)+(X(I)*LOG(X(I)))*(X(I)*LOG(X(I)))
20410 IF NX<>1 AND NY<>1 THEN R(50)=R(50)+X(I)*LOG(X(I))*LOG(Y(I))
20420 IF NX<>1 THEN R(51)=R(51)+Y(I)*LOG(X(I))
20430 IF NX<>1 THEN R(52)=R(52)+LOG(X(I))/Y(I)
20440 IF NX<>1 THEN R(53)=R(53)+((LOG(X(I))/X(I)))*((LOG(X(I))/X(I)))
20450 IF NY<>1 THEN R(54)=R(54)+(X(I)*X(I))*LOG(Y(I))
20460 IF NX<>1 THEN R(55)=R(55)+((LOG(X(I))*LOG(X(I))*LOG(X(I))))
20470 IF NX<>1 THEN R(56)=R(56)+((LOG(X(I))*LOG(X(I))*LOG(X(I))*LOG(X(I))))
20480 IF NX<>1 AND NY<>1 THEN R(57)=R(57)+((LOG(X(I))*LOG(X(I))))*LOG(Y(I))
20490 IF NX<>1 AND NY<>1 THEN R(58)=R(58)+(LOG(Y(I))*LOG(X(I)))/X(I)
20500 IF X(I)>=1 THEN Q9=1: GOTO 20540
20501 IF Q9=1 GOTO 20540
20502 IF X(I)<=0 THEN 20550
20505 R(59)=R(59)+LOG(1-X(I))
20510 R(60)=R(60)+(LOG(1-X(I)))*(LOG(1-X(I)))
20520 R(61)=R(61)+LOG(X(I))*LOG(1-X(I))
20530 IF NY<>1 THEN R(62)=R(62)+LOG(Y(I))*LOG(1-X(I))
20540 IF NX<>1 THEN R(63)=R(63)+(LOG(X(I)))/X(I)
20550 NEXT I
20600 NX=0:NY=0
30000 REM * END OF SUMMATION LOOP *
30030 CLS:GOSUB 38000: PRINT"SUMS HAVE BEEN CALCULATED--NOW CALCULATING COEFFICIENTS": GOTO 12000
36000 CLS:REM This routine selects Color or Monochrome Monitor
36005 PRINT TAB(27);"CURVEFIT Version 2.12-A":PRINT" "
36010 PRINT"This routine allows the selection of Color or Monochrome monitors."
36020 PRINT" ":PRINT"For most cases, the COLOR choice will be correct.  This choice will work with"
36030 PRINT"CGA, EGA, and Hercules compatible cards.  Select the MONOCHROME version"
36040 PRINT"only if the COLOR choice does not work."
36045 PRINT"MONOCHROME should work with ANY monitor.  With a color monitor, the"
36046 PRINT"choice of MONOCHROME will yield white text on a black background.":PRINT" "
36047 PRINT" ":PRINT"When COLOR choice is used for MONOCHROME monitor, display is HIGH INTENSITY."
36048 PRINT"To use low intensity on MONOCHROME monitor, choose MONOCHROME monitor."
36050 PRINT" ":PRINT "Please press <C> or <ENTER> for COLOR.  Press <M> for MONOCHROME.  "
36060 PRINT" ":MONITOR$="C"
36061 MONITOR1$=INKEY$:IF MONITOR1$="m" OR MONITOR1$="M" OR MONITOR1$="C" OR MONITOR1$="c" OR MONITOR1$=CHR$(13) THEN 36110 ELSE 36061
36110 IF MONITOR1$="C" OR MONITOR1$="c" OR MONITOR1$=CHR$(13) THEN PRINT"You have chosen COLOR monitor":PRINT" ":MONITOR$="C":INPUT"Press <Enter> to Continue";CT$:IF MONITOR2$="Y" THEN MONITOR2$="N":GOTO 10
36115 IF MONITOR1$="C" OR MONITOR1$="C" OR MONITOR1$=CHR$(13) THEN 115
36120 IF MONITOR1$="M" OR MONITOR1$="m" THEN PRINT"You have chosen MONOCHROME monitor":PRINT" ":MONITOR$="M":INPUT"Press <Enter> to Continue";CT$:IF MONITOR2$="Y" THEN MONITOR2$="N":GOTO 10
36125 IF MONITOR1$="M" OR MONITOR1$="m" THEN 115
36130 GOTO 36010
38000 IF MONITOR$="M" THEN 38100
38010 COLOR 15,1,0:RETURN
38100 COLOR 7,0,0:RETURN
40000 REM * LIST REGISTER CONTENTS R16-R63 *
40010 CLS
40025 CLS:GOSUB 38000:PRINT"REGISTER CONTENTS:":PRINT" ":PRINT"REG#";TAB(10);"REGISTER";TAB(34);"REGISTER +1";TAB(57);"REGISTER +2":PRINT" ":FOR I=16 TO 63 STEP 3
40095 PRINT I;TAB(6);R(I);TAB(29);R(I+1);TAB(54);R(I+2)
40100 NEXT I
40105 PRINT" "
40120 INPUT "PLEASE PRESS ENTER TO CONTINUE ";A$
40122 INPUT"OUTPUT TO PRINTER (Y)ES OR (N)O ";A$
40124 IF LEFT$(A$,1)="Y" OR LEFT$(A$,1)="y" THEN 40126 ELSE GOTO 120
40126 FOR I=16 TO 63 STEP 2
40127 LPRINT "R(";I;")= ";R(I);TAB(40);"R(";I+1;")= ";R(I+1)
40128 NEXT I
40129 LPRINT CHR$(12):GOTO 120
42000 CLS:GOSUB 38000:IF A(1)=0 AND B(1)=0 THEN PRINT"COEFFICIENTS MUST BE CALCULATED BEFORE USING THIS ROUTINE!":PRINT" ":INPUT"PLEASE PRESS <ENTER> TO RETURN TO MAIN MENU";RMM$:GOTO 120
42010 FOR I=1 TO 25:RS$(I)=STR$(RC(I))+"_"+STR$(I):NEXT I
42015 REM SHELL-METZNER SORT
42020 MAX=25
42025 M1=MAX
42030 M1=M1\2:IF M1=0 THEN 43000
42040 K1=MAX-M1:J1=1
42050 I1=J1
42060 L1=I1+M1
42070 IF RS$(I1)<=RS$(L1) THEN J1=J1+1:IF J1>K1 THEN 42030 ELSE 42050 ELSE 42080
42080 SWAP RS$(I1),RS$(L1):I1=I1-M1:IF I1>0 THEN 42060
42090 J1=J1+1:IF J1>K1 THEN 42030 ELSE 42050
43000 '
43310 '
43320 K2=25:FOR I=1 TO 25:RS1$(I)=RS$(K2):K2=K2-1:NEXT I
43330 FOR I=1 TO 25:RS$(I)=RS1$(I):NEXT I
43340 FOR I=1 TO 25:P1=INSTR(RS$(I),"_"):RS(I)=VAL(MID$(RS$(I),P1+2,LEN(RS$(I)))):NEXT I
43350 REM WAS GOSUB 38000
43507 PRINT "╔═══════════╦═══════════════════════════════════════════════════╦═════════════╗"
43508 PRINT "║ CURVEFIT  ║ SORTED LISTING OF EQUATIONS for CORRECTED R² >0.10║VERSION 2.12A║"
43509 PRINT "╠════╤══════╩═════╤════════════╤════════════╤══════╤══════╤═════╩═════════════╣"
43510 PRINT "║EQ #│ 'A' COEF.  │ 'B' COEF.  │ 'C' COEF.  │ R²   │R² COR│ EQUATION OF CURVE ║"
43511 PRINT "╟────┼────────────┼────────────┼────────────┼──────┼──────┼───────────────────╢"
43512 FOR I=1 TO 18:PRINT "║    │            │            │            │      │      │                   ║":NEXT I
43517 PRINT "╚════╧════════════╧════════════╧════════════╧══════╧══════╧═══════════════════╝";
43518 C1$="#.####":C2$="#######.####":C3$="###"
43524 MR=6:
43526 FOR I=1 TO 25
43527 IF RC(RS(I))<=.1 THEN 43531
43528 LOCATE MR,2:PRINT USING C3$;RS(I);:LOCATE MR,7:GOSUB 43715:PRINT USING C2$;A(RS(I)):LOCATE MR,20:GOSUB 43720:PRINT USING C2$;B(RS(I));:LOCATE MR,33:GOSUB 43725:PRINT USING C2$;C(RS(I));
43529 LOCATE MR,46:PRINT USING C1$;RR(RS(I));:LOCATE MR,53:PRINT USING C1$;RC(RS(I));:LOCATE MR,60:PRINT EQ$(RS(I));
43530 MR=MR+1:IF MR=24 THEN 43532
43531 NEXT I
43532 LOCATE 25,1:INPUT"PLEASE PRESS <ENTER> TO RETURN TO MAIN MENU";RMM$:GOTO 120
43715 IF A(RS(I))>9999999.9999# OR A(RS(I))<-999999.9999# THEN C2$="##.#####^^^^" ELSE C2$="#######.####"
43717 RETURN
43720 IF B(RS(I))>9999999.9999# OR B(RS(I))<-999999.9999# THEN C2$="##.#####^^^^" ELSE C2$="#######.####"
43722 RETURN
43725 IF C(RS(I))>9999999.9999# OR C(RS(I))<-999999.9999# THEN C2$="##.#####^^^^" ELSE C2$="#######.####"
43727 RETURN
50000 IF LEFT$(Q1$,1)="Y" OR LEFT$(Q1$,1)="y" THEN LP=1 ELSE LP=0
50010 RETURN
55000 EQ$(1)="Y=A+B*X":EQ$(2)="Y=B*X":EQ$(3)="Y=1/(A+B*X)":EQ$(4)="Y=A+B*X+C/X":EQ$(5)="Y=A+B/X":EQ$(6)="Y=X/(A*X+B)"
55010 EQ$(7)="Y=A+B/X+C/X*X":EQ$(8)="Y=A+B*X+C*X*X":EQ$(9)="Y=A*X+B*X*X":EQ$(10)="Y=A*X^B":EQ$(11)="Y=A*B^X"
55020 EQ$(12)="Y=A*B^(1/X)":EQ$(13)="Y=A*X^(B*X)":EQ$(14)="Y=A*X^(B/X)":EQ$(15)="Y=A*e^(B*X)":EQ$(16)="Y=A*e^(B/X)"
55030 EQ$(17)="Y=A+B*lnX":EQ$(18)="Y=1/(A+B*lnX)":EQ$(19)="Y=A*B^X*X^C":EQ$(20)="Y=A*B^(1/X)*X^C"
55040 EQ$(21)="Y=A*e^(((X-B)^2)/C)":EQ$(22)="Y=A*e^((lnX-B)^2/C)":EQ$(23)="Y=A*X^B*(1-X)^C":EQ$(24)="Y=A*(X/B)^C*e^(x/b)"
55050 EQ$(25)="Y=1/(A*(X+B)^2+C)":RETURN
57000 CLS:PRINT"You have chosen to store predicted values to a Disk File"
57010 PRINT:INPUT "Enter File Name for Data Storage (Include Drive Designator) ",PF$
57020 PRINT:PRINT"File Name for Predicted Data Storage is ";PF$
57030 PRINT:INPUT"Is this correct (Y) or (N): (A) to Abort";PF1$
57040 IF LEFT$(PF1$,1)="Y" OR LEFT$(PF1$,1) = "y" THEN GOTO 57050 ELSE IF LEFT$(PF1$,1)="A" OR LEFT$(PF1$,1)="a" THEN GOTO 120 ELSE GOTO 57000
57050 OPEN "O",1,PF$:GOTO 5007
57200 CLS:GOTO 5007
61000 IF (ERR=53 OR ERR=64) AND ERL=7050 THEN PRINT "UNABLE TO FIND OR ILLEGAL FILE NAME ";A4$:INPUT "PRESS <ENTER> TO CONTINUE";A$:RESUME 120
62101 GOSUB 62150:RESUME 12060
62102 GOSUB 62150:RESUME 12140
62103 GOSUB 62150:RESUME 12220
62104 GOSUB 62150:RESUME 12320
62105 GOSUB 62150:RESUME 12400
62106 GOSUB 62150:RESUME 12470
62107 GOSUB 62150:RESUME 12590
62108 GOSUB 62150:RESUME 12720
62109 GOSUB 62150:RESUME 12810
62110 GOSUB 62150:RESUME 13000
62111 GOSUB 62150:RESUME 13110
62112 GOSUB 62150:RESUME 13210
62113 GOSUB 62150:RESUME 13300
62114 GOSUB 62150:RESUME 13400
62115 GOSUB 62150:RESUME 13500
62116 GOSUB 62150:RESUME 13600
62117 GOSUB 62150:RESUME 13680
62118 GOSUB 62150:RESUME 14000
62119 GOSUB 62150:RESUME 14150
62120 GOSUB 62150:RESUME 14300
62121 GOSUB 62150:RESUME 14460
62122 GOSUB 62150:RESUME 14620
62123 GOSUB 62150:RESUME 14760
62124 GOSUB 62150:RESUME 14920
62125 GOSUB 62150:RESUME 15090
62150 REM This subroutine zeroes out all coefficients for equations with errors
62160 A(I)=0:B(I)=0:C(I)=0:RR(I)=0:RC(I)=0:RETURN
63000 IF ERR=64 AND ERL=6050 THEN PRINT" THE FILE NAME ";A4$;" IS NOT A VALID FILE NAME":INPUT"PRESS <ENTER> TO CONTINUE";A$:RESUME 120
63500 IF D1>21 THEN D1=8 ELSE IF D1<8 THEN D1=21
63505 FLAG=0:LOCATE D1,11,1,0,7
63510 D1=CSRLIN
63520 A$=INKEY$:IF A$=CHR$(13) THEN 63560 ELSE IF A$="8" THEN D1=D1-1:GOTO 63500
63521 IF A$=CHR$(27) THEN 8000 ELSE IF A$="2" THEN D1=D1+1:GOTO 63500
63523 IF LEN(A$)=2 THEN A$=RIGHT$(A$,1) ELSE GOTO 63500
63525 IF A$="H" THEN D1=D1-1:GOTO 63500
63526 IF A$="P" THEN D1=D1+1:GOTO 63500
63527 IF A$>=";" AND A$<="D" THEN FLAG=1: GOTO 63560
63528 IF A$>="T" AND A$<="W" THEN FLAG=1: GOTO 63560
63529 GOTO 63500
63530 D1=D1+1:GOTO 63500
63560 D1=CSRLIN
63564 IF FLAG=1 THEN 63675
63565 IF CSRLIN=8 THEN 110
63570 IF CSRLIN=9 THEN 7030
63580 IF CSRLIN=10 THEN 2000
63590 IF CSRLIN=11 THEN 3000
63600 IF CSRLIN=12 THEN 9005
63610 IF CSRLIN=13 THEN 4000
63620 IF CSRLIN=14 THEN 4990
63630 IF CSRLIN=15 THEN 10000
63640 IF CSRLIN=16 THEN 4040
63645 IF CSRLIN=17 THEN 40025
63650 IF CSRLIN=18 THEN 6030
63655 IF CSRLIN=19 THEN 8000
63660 IF CSRLIN=20 THEN 42000
63665 IF CSRLIN=21 THEN 36000
63670 GOTO 63500
63675 IF A$=";"  THEN 110
63676 IF A$="<" THEN  7030
63677 IF A$="=" THEN 2000
63678 IF A$=">" THEN 3000
63679 IF A$="?" THEN 9005
63680 IF A$="@" THEN 4000
63681 IF A$="A" THEN 4990
63682 IF A$="B" THEN 10000
63683 IF A$="C" THEN 4040
63684 IF A$="D" THEN 40025
63685 IF A$="T" THEN 6030
63686 IF A$="U" THEN 8000
63687 IF A$="V" THEN 42000
63688 IF A$="W" THEN 36000
63690 GOTO 63500
63700 CLS:GOSUB 38000:PRINT"DATA CORRECTION":PRINT" "
63711 CLS:GOSUB 38000:M=1:MR=1:MC=1:MR1=1:MC1=1
63712 PRINT "╔═══════════╤══════════════════════════════════════════════════════╤══════════╗"
63713 PRINT "║ CURVEFIT  │ DATA LIST OF X AND Y VALUES  NOW IN MEMORY           │VERS 2.12A║"
63716 PRINT "╟───┬───────┴──┬──────────┬───┬──────────┬──────────┬───┬──────────┼──────────╢"
63717 PRINT "║PT#│ X VALUE  │ Y VALUE  │PT#│ X VALUE  │ Y VALUE  │PT#│ X VALUE  │ Y VALUE  ║"
63718 PRINT "╟───┼──────────┼──────────┼───┼──────────┼──────────┼───┼──────────┼──────────╢"
63719 FOR I6=1 TO 18:PRINT "║   │          │          │   │          │          │   │          │          ║"
63720 NEXT I6
63735 PRINT "╚═══╧══════════╧══════════╧═══╧══════════╧══════════╧═══╧══════════╧══════════╝";
63736 DUMMY$="          ":QZ=1:GOSUB 3470:QZ=0:FOR J=1 TO 255
63737 IF X$(J)<>"END" OR Y$(J)<>"END" THEN 63746 ELSE 63800
63746 LOCATE 5+MR,MC+1:PRINT USING "###";M;
63748 LOCATE 5+MR,MC+5:XX1=VAL(X$(M)):GOSUB 4780
63749 PRINT USING C5$;XX1;
63750 LOCATE 5+MR,MC+16:YY1=VAL(Y$(M)):GOSUB 4790
63751 PRINT USING C5$;YY1;
63752 MR=MR+1
63753 IF M MOD 18=0 THEN MR=1:MC=MC+26
63754 IF M MOD 54=0 THEN MR=1:MC=1:GOTO 63800
63777 M=M+1
63780 NEXT J
63800 LOCATE 25,1:PRINT"PLEASE PRESS <ENTER> FOR MORE DATA ";:INPUT ;A$:IF M<255 AND X$(J)<>"END" THEN 63900 ELSE GOTO 9008
63900 DUMMY$="            ":FOR J9=1 TO 54: REM This routine blanks screen for DATA LIST
63910 LOCATE 5+MR1,MC1+1:PRINT LEFT$(DUMMY$,3);:LOCATE 5+MR1,MC1+5:PRINT LEFT$(DUMMY$,10);:LOCATE 5+MR1,MC1+16:PRINT LEFT$(DUMMY$,10);
63920 MR1=MR1+1:IF J9 MOD 18=0 THEN MR1=1:MC1=MC1+26
63930 IF J9 MOD 54=0 THEN MR1=1:MC1=1
63940 NEXT J9
63950 GOTO 63777
64000 DUMMY$="            ":MR1=1:MC1=1: REM This routine blanks screen for ADD and DELETION routines
64001 LOCATE 25,1,0,1,7:COLOR 0,7,0:PRINT"Data Screen is FULL.  Press <ENTER> to clear for more data";:INPUT;A$:LOCATE 25,1,0,1,7:GOSUB 38000:PRINT"                                                                               ";
64005 FOR J9=1 TO 42
64010 LOCATE 7+MR1,MC1+1:PRINT LEFT$(DUMMY$,3);:LOCATE 7+MR1,MC1+5:PRINT LEFT$(DUMMY$,10);:LOCATE 7+MR1,MC1+16:PRINT LEFT$(DUMMY$,10);
64020 MR1=MR1+1:IF J9 MOD 14 = 0 THEN MR1 =1:MC1=MC1+26
64030 IF J9 MOD 42 = 0 THEN MR1=1:MC1=1
64035 NEXT J9
64040 RETURN
```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0707

     Volume in drive A has no label
     Directory of A:\

    ARCE     COM      7136   9-16-87   3:12a
    ARCE     DOC     12975   9-27-87   4:14p
    CURVEFIT ARC    293115   2-08-89   2:01p
    FILES707 TXT       801   3-02-89  12:06p
    GO       BAT        38   8-04-87   9:56a
    GO       TXT       463   2-27-89   1:25p
    MANUAL   BAT       147   2-27-89   1:25p
    OTHRPGMS DOC       982  11-14-88   7:36p
    PROGRAM  DOC      1720   2-13-89   7:41p
    README   DOC      5072   2-03-89   2:11p
           10 file(s)     322449 bytes
                           35840 bytes free
