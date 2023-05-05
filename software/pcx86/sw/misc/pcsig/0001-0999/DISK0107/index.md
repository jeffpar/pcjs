---
layout: page
title: "PC-SIG Diskette Library (Disk #107)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0107/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0107"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "HOME FINANCE"

    Among several financial applications, the standout program is FOS, the
    Financial Operating System.  This program will maintain all your
    financial records whether they are checking accounts, savings
    accounts, CD's, stocks, bank notes, cash expenditures or just about
    any other transaction.  Many reports are available to inform you of
    your current `net worth' and to aid you in controlling your liquid
    assets.  Also worthy of note, an interesting history of the Houston
    Area League of PC Users is on the text file HAL- PC.TXT.
    
    System Requirements:  BASICA.  A printer is optional.
    
    How to Start:  To run BASIC programs consult the directions in GETTING
    STARTED for your configuration.
    
    Suggested Registration:  $10.00 - includes registration and updates.
    
    File Descriptions:
    
    SCRNSAVE DOC  Short description for SCRNSAVE.COM
    SCRNSAVE COM  Turns off screen if no keys depressed after 3 minutes
    MUSIC    BAS  Plays notes
    SETUP    BAT  Initialization routine for this diskette
    FOS2     BAS  Second part of FOS
    FOS      BAS  Home financial management system
    FINANCE  BAS  A collection of financial analysis routines
    FOS-DESC      FOS documentation
    TAX1982  VC   A VISICALC template for 1982 Federal Income Taxes
    HAL-PC   TXT  Description of how one PC users group formed
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CRC.TXT

{% raw %}
```
PC-SIG Disk No. #107, version v1 

The following is a list of the file checksums which should be produced by
the CRCK4 program on disk #9 (and others).  If the CRC numbers do not match
you may have a bad file.  To use type:  CRCK4 <filespec>

CRCK4 output for this disk:


CRCK ver 4.2B (MS DOS VERSION )
CTL-S pauses, CTL-C aborts

--> FILE:  SCRNSAVE.COM         CRC = D7 00

--> FILE:  SCRNSAVE.DOC         CRC = 2D A3

--> FILE:  MUSIC   .BAS         CRC = 7E 17

--> FILE:  SETUP   .BAT         CRC = 00 00

--> FILE:  FOS     .BAS         CRC = 44 DC

--> FILE:  FOS2    .BAS         CRC = B5 0E

--> FILE:  FOS-DESC.            CRC = EA D4

--> FILE:  FINANCE .BAS         CRC = 18 1C

--> FILE:  TAX1982 .VC          CRC = CD 2D

--> FILE:  HAL-PC  .TXT         CRC = D5 7C

 ---------------------> SUM OF CRCS = 22 3D

DONE

These and other Public Domain and user-supported programs from:

PC Software Interest Group
1125 Stewart Ct  Suite G
Sunnyvale, CA 94086
(408) 730-9291
```
{% endraw %}

## FINANCE.BAS

{% raw %}
```bas
5 REM FINANCE  VERSION 1.0  MARCH 4, 1982
10 COLOR 15:CLS:KEY OFF:SCREEN 0,0,0:WIDTH "SCRN:",80
20 ON ERROR GOTO 5950
25 PRINT "      * *  F I N A N C I A L   F U N C T I O N S  * *           (Version 1.0)": PRINT :PRINT
30 PRINT "SELECT ONE OF THE FOLLOWING FINANCIAL FUNCTIONS:"
40 PRINT
50 PRINT "     1 -- AMORTIZATION SCHEDULE"
60  PRINT "     2 -- DAYS BETWEEN DATES"
70 PRINT "     3 -- PRESENT VALUE OF A FUTURE SUM"
80 PRINT "     4 -- FUTURE VALUE OF A PRESENT SUM"
90 PRINT "     5 -- SIMPLE INTEREST FOR DAYS"
100 PRINT "     6 -- INTEREST RATE - COMPOUND INTEREST"
110 PRINT "     7 -- NOMINAL & EFFECTIVE INTEREST RATES
120 PRINT "     8 -- INTEREST RATE - INSTALLMENT LOAN"
130 PRINT "     9 -- PRESENT VALUE OF A SERIES OF PAYMENTS"
135 PRINT "    10 -- FUTURE VALUE OF REGULAR DEPOSITS
138 PRINT "    11 -- REGULAR DEPOSITS FOR FUTURE VALUE
140 PRINT "    12 -- INTERNAL RATE OF RETURN
146 PRINT "    13 -- BOND - PRESENT VALUE
147 PRINT "    14 -- BOND - YIELD TO MATURITY
149 PRINT "    15 -- EXIT FROM PROGRAM
151 PRINT:INPUT "          SELECT OPTION, THEN PRESS `ENTER' ==> ";FI
160 IF FI<1 OR FI > 15 THEN RUN
170 ON FI GOTO 720,1670,190,550,390,1030,4220,1310,2220,4630,4820,4380,5590,5750,180
180 END
181 STOP
189 REM -----------------------------------------------------------------
190 F=0:R=0:M=0:N=0
195 CLS: PRINT "      FUNCTION 3 -- PRESENT VALUE OF A FUTURE SUM ": PRINT: PRINT
200 PRINT:PRINT "This routine calculates the Present Value of a Future Sum, discounting"
210 PRINT "it for a given Interest Rate, compounded as instructed.":PRINT
230 INPUT "     FUTURE SUM  (IN DOLLARS)   ";F
240 INPUT "     ANNUAL INTEREST RATE  (%)  ";R
250 INPUT "     # OF PERIODS IN ONE YEAR   ";M
260 INPUT "     # PERIODS TO BE CALCULATED ";N
270 I=R/M:I=I/100
280 T=1+I:A=T
290 IF N=1 GOTO 310
300 FOR X=1 TO (N-1):S=A*T:A=S:NEXT X
310 P=F/A: PRINT: PRINT
320 PRINT " A Future Sum of $";F;" for ";N;" Periods, where there are "
330 PRINT M;"Periods per Year at";R;"% Annual Interest Rate, is worth "
350 PRINT:PRINT "     $";P;" in Today's Dollars"
353 PRINT: PRINT:
355 PRINT "WHAT DO YOU WANT TO DO: "
358 PRINT "     1 -- RETURN TO MAIN MENU"
360 PRINT "     2 -- RERUN CURRENT FUNCTION": PRINT
363 INPUT "          SELECT OPTION ==> ";IA
366 IF IA = 2 THEN GOTO 190
369 IF IA <>1 THEN GOTO 363
370 RUN
380 END
389 REM -----------------------------------------------------------------
390 P=0:D=0:R=0
395 CLS: PRINT "      FUNCTION 5 -- SIMPLE INTEREST FOR DAYS  ": PRINT: PRINT
400 PRINT "This routine calculates Simple Interest on dollars held in deposit"
420 PRINT "for a specified number of days, given a specific interest rate.":PRINT
430 INPUT "     AMOUNT OF DEPOSIT (IN DOLLARS) ";P
440 INPUT "     NUMBER OF DAYS ON DEPOSIT      ";D
450 INPUT "     INTEREST RATE (PERCENT)        ";R
460 PRINT:PRINT:PRINT "For a starting Principal of $";P;"at a ";
470 PRINT "Rate of";R;"% for ";D;"days"
480 PRINT:PRINT "     the Amount of Interest = $";
490 I=R/100/365*D*P
500 IF I>327.68 GOTO 520
510 I=INT(I*100+0.5)/100
520 PRINT USING "###,###.##";I;:PRINT "   or   $";:PRINT USING "#,###.##";I/D;:PRINT" per day":PRINT:PRINT:PRINT
523 PRINT "WHAT DO YOU WANT TO DO: ": PRINT
525 PRINT "     1 -- RETURN TO MAIN MENU"
528 PRINT "     2 -- RERUN CURRENT FUNCTION": PRINT
530 INPUT "          SELECT OPTION ==> ";IA
533 IF IA = 2 THEN GOTO 390
536 IF IA <>1 THEN GOTO 530
539 RUN
540 END
549 REM -----------------------------------------------------------------
550 CLS:P=0:R=0:M=0:N=0
551 PRINT "     FUNCTION 4 -- FUTURE VALUE OF A PRESENT SUM ": PRINT: PRINT
552 PRINT"This function computes the Future Value of a Present Sum, given the"
553 PRINT "Annual Interest Rate, and the number of Periods to Maturity."
560 PRINT:INPUT "     PRESENT SUM (IN DOLLARS) ";P
570 INPUT "     ANNUAL INTEREST RATE (%) ";R
580 INPUT "     # OF PERIODS IN ONE YEAR ";M
590 INPUT "     # OF PERIODS TO MATURITY ";N
600 I=R/M:I=I/100:T=I+1:A=T
610 IF N=1 THEN GOTO 630
620 FOR K=1 TO (N-1):S=A*T:A=S:NEXT K
630 F=P*A
633 PRINT: PRINT
640 PRINT "For a Present Sum of $";P;"at an Annual Interest Rate of";R;"%  "
650 PRINT "for ";N;"Periods, where there are ";M;"Periods per Year:"
670 PRINT:PRINT "     The Future Value is $";F
680 PRINT "     The Increase is $";F-P;", or";(F/P)*100-100;"%"
683 PRINT: PRINT:
685 PRINT "WHAT DO YOU WANT TO DO: "
688 PRINT "     1 -- RETURN TO MAIN MENU"
690 PRINT "     2 -- RERUN CURRENT FUNCTION"
693 INPUT "          SELECT OPTION ==> ";IA
695 IF IA = 2 THEN GOTO 550
698 IF IA <>1 THEN GOTO 693
700 RUN
710 END
719 REM -----------------------------------------------------------------
720 DEFDBL I,T:C=0:P=0:L=0:R=0:M=0:CLS:AY=0:AT=0:YR=0
725 PRINT "     FUNCTION 1 -- AMORTIZATION SCHEDULE ": PRINT
727 PRINT"This function computes the Principal and Interest for a series of "
728 PRINT"payments over a given period at a specified Interest Rate.  If the"
730 PRINT"amount of the payment is not known, it will be calculated.":PRINT
735 INPUT "      PRINCIPAL  (DOLLARS AND CENTS)  " ;P
740 INPUT "      NUMBER OF PERIODS  (IN MONTHS)  " ;L
750 INPUT "      ANNUAL INTEREST RATE (PERCENT)  ";R
760 INPUT "      PAYMENT(IF KNOWN), THEN `ENTER' ";M
770 I=R/1200
780 T=1-1/(1+I)^L:K=P
790 IF M<>0 THEN GOTO 810
800 M=P*I/T
810 GOSUB 990
815 AY=0
820 FOR Z=1 TO L
830 IF C<12 GOTO 880
835 YR=YR+1
840 PRINT:PRINT "Year of Loan: ";YR;
845 PRINT "    $";K;" for ";L;"Months at";R;"%"
850 AT = AY +AT
853  PRINT"        Total Interest Paid during Year  ==> $";:PRINT USING "#,###,###.##";AY
855 AY = 0: PRINT
857 PRINT"SELECT OPTION:"
858 INPUT "     1 -- RETURN TO MAIN MENU   2 -- RERUN FUNCTION   3 -- CONTINUE   ==> ";CH
865 IF CH=1 THEN 10
866 IF CH=2 THEN 720
867 IF CH <> 3 THEN 858
870 C=0:GOSUB 990
880 A=P*I
890 A=INT(A*100+0.5)/100
900 M=INT(M*100+0.5)/100
910 B=M-A:P=P-B
920 B=INT(B*100+0.5)/100
930 P=INT(P*100+0.5)/100
935 AY = AY + A
940 PRINT USING "####    ";Z;:PRINT USING "###,###.##";P;M;B;A
950 IF  P<=0  THEN  955
953 C=C+1:NEXT Z
955 PRINT:PRINT "Year of Loan: ";YR+1;
956 PRINT "    $";K;" for ";L;"Months at";R;"%"
958  PRINT "        Total Interest Paid during Year ==> $";:PRINT USING "#,###,###.##";AY: AT=AY+AT
962  PRINT "        Total Interest Paid during Loan ==> $";:PRINT USING "#,###,###.##";AT
964 PRINT:
965 PRINT"SELECT OPTION:"
968 PRINT "     1 -- RETURN TO MAIN MENU";
970 PRINT "   2 -- RERUN CURRENT FUNCTION";"   ==> ";:INPUT IA
975 IF IA = 2 THEN GOTO 720
978 IF IA <>1 THEN GOTO 965
980 RUN
985 END
990 CLS: PRINT "     FUNCTION 1 -- AMORTIZATION SCHEDULE ": PRINT
1000 PRINT "PAYMENT  REMAINING   MONTHLY  PRINCIPAL INTEREST"
1010 PRINT "NUMBER   PRINCIPAL   PAYMENT   PAYMENT   PAYMENT
1020 RETURN
1029 REM -----------------------------------------------------------------
1030 CLS:PRINT "     FUNCTION 6 -- INTEREST RATE - COMPOUND INTEREST": PRINT: PRINT
1033 F=0: PRINT"This routine computes the annual interest rate for a specified Future Value,"
1034 PRINT"given the Present Value, the total period of time, and the number of periods." : PRINT: PRINT
1040 INPUT "     THE FUTURE VALUE (DOLLARS) ";FV
1050 IF F=4 THEN 1130
1060 INPUT "     THE PRESENT VALUE (DOLLARS)";PV
1070 IF F=3 THEN 1130
1080 INPUT "     NUMBER OF PERIODS PER YEAR ";PY
1090 IF F=5 THEN 1130
1100 PRINT "TOTAL LENGTH OF TIME FOR WHICH INTEREST IS TO BE FIGURED"
1120 INPUT "     USE THE FORMAT (YY,MM,DD)  ";Y,M,D
1130 PD=Y*PY+M*PY/12+D*PY/365
1140 I=((FV/PV)^(1/PD)-1)*100*PY
1150 A$="###.##":F=0
1155 CLS: PRINT "     FUNCTION 6 -- INTEREST RATE - COMPOUND INTEREST ":  PRINT
1160 PRINT: PRINT:PRINT "For a Future Sum of $";FV;"with a Present Value of $";PV;" with"
1170 PRINT PY;"Periods per Year, for ";Y;"Years,";M;"Months and";D;"Days"
1180 PRINT:PRINT "      The Annual Interest Rate is ";
1190 PRINT USING A$;I;:PRINT " %"
1200 PRINT:PRINT:PRINT "WHAT DO YOU WANT TO DO:"
1205 PRINT
1208 PRINT "     1 -- RETURN TO MAIN MENU"
1210 PRINT "     2 -- RERUN ENTIRE FUNCTION"
1215 PRINT "     3 -- CHANGE PRESENT VALUE"
1220 PRINT "     4 -- CHANGE FUTURE VALUE"
1230 PRINT "     5 -- CHANGE PERIODS PER YEAR
1240 PRINT "     6 -- CHANGE TIME RANGE
1270 PRINT:INPUT "          SELECT OPTION ==> ";F
1280 IF F<1 OR F>6 THEN 1160
1290 F=INT(F):ON F GOTO 10,1030,1060,1040,1080,1100
1300 GOTO 1200
1305 END
1309 REM -----------------------------------------------------------------
1310 CLEAR:F=0:CLS:DEFDBL I:A$="##.## %"
1315 PRINT "     FUNCTION 8 -- INTEREST RATE - INSTALLMENT LOAN": PRINT
1318 ON ERROR GOTO 5950
1320 PRINT"This routine computes the Interest Rate for an Installment Loan, given"
1321 PRINT"the loan duration, the number of payments per year, and the Payment Amount.
1325 PRINT
1330 INPUT "     PRESENT VALUE (DOLLARS)  "; PV
1340 IF F=3 GOTO 1420
1350 INPUT "     NUMBER OF TERMS PER YEAR ";NY
1360 IF F=5 GOTO 1420
1370 INPUT "     NUMBER OF PERIODS IN LOAN";N
1380 IF F=4 GOTO 1420
1390 INPUT "     AMOUNT OF EACH PAYMENT   ";P
1400 IF F=6 GOTO 1420
1410 CLS:PRINT:PRINT ". . . COMPUTER WORKING.  BE WITH YOU IN A FEW SECONDS . . ."
1420 I=0.008
1430 I1=P/PV*((1+I)^N-1)/(1+I)^N
1440 IF ABS(I-I1)<0.000001 THEN 1470
1450 I=I1
1460 GOTO 1430
1470 I=I1*NY*100
1480 CLS:PRINT "     FUNCTION 8 -- INTEREST RATE - INSTALLMENT LOAN ": PRINT: PRINT
1490 PRINT "For a Loan with a Present Value of $";PV;" and "
1500 PRINT N;"Payments of $";P;", where there are";
1510 PRINT NY;"Payments per year"
1520 PRINT:PRINT "     the Annual Interest Rate is ";
1530 PRINT USING A$;I
1540 F=0:PRINT
1550 PRINT:PRINT "WHAT DO YOU WANT TO DO:"
1555 PRINT
1560 PRINT "     1 -- RETURN TO MAIN MENU"
1570 PRINT "     2 -- RERUN ENTIRE FUNCTION"
1580 PRINT "     3 -- CHANGE LOAN VALUE"
1590 PRINT "     4 -- CHANGE NUMBER OF INTEREST PERIODS"
1600 PRINT "     5 -- CHANGE PERIODS PER YEAR
1610 PRINT "     6 -- CHANGE PAYMENT AMOUNT
1620 PRINT:INPUT "          SELECT OPTION ==> ";F
1630 IF F<1 OR F>6 THEN 1620
1640 F=INT(F):ON F GOTO 10,1310,1330,1370,1350,1390
1650 GOTO 1550
1660 END
1669 REM -----------------------------------------------------------------
1670 CLS: PRINT "     FUNCTION 2 -- DAYS BETWEEN DATES": PRINT: PRINT
1675 CH=0: PRINT"This routine computes the Total Number of Days between two dates.":PRINT: PRINT
1680 PRINT "USING THE FORMAT  (MM,DD,YYYY):
1690 INPUT "     ENTER THE EARLIEST DATE ";M,D,Y:GOSUB 1870
1700 N=M:F=D:Z=Y:E=T
1710 IF CH=1 GOTO 1740
1720 INPUT "     ENTER THE LATEST DATE   ";M,D,Y:GOSUB 1870
1730 P=M:G=D:W=Y:L=T
1740 IF E>L THEN PRINT:PRINT "ERROR: CHECK THE DATES AND TRY AGAIN":GOTO 1780
1750 O=L-E
1760 PRINT:PRINT "The Total Number of Days between ";N;"/";F;"/";Z;
1770 PRINT " and  ";P;"/";G;"/";W;"is"
1775 PRINT:PRINT "    ";O;" Days "
1780 CH=0:PRINT:PRINT:PRINT "WHAT DO YOU WISH TO DO:"
1790 PRINT "     1 -- RETURN TO MAIN MENU"
1800 PRINT "     2 -- RERUN CURRENT FUNCTION": PRINT
1830 INPUT "          SELECT OPTION ==> ";IA
1840 IF IA = 2 THEN GOTO 1670
1850 IF IA <>1 THEN GOTO 1830
1860 RUN
1865 END
1870 YY=Y-1:T=365*YY+FIX(YY/4)-FIX(YY/100)+FIX(YY/400)
1880 CD=30*(M-1)+FIX((M-1)/3)+D
1890 IF M=2 OR M=9 OR M>10 THEN CD=CD+1:GOTO 1910
1900 IF M>2 AND M<8 AND M<>6 THEN CD=CD-1
1910 IF M<3 OR Y<>4*FIX(Y/4) THEN 1930
1920 IF Y=400*FIX(Y/400) OR Y<>100*FIX(Y/100) THEN CD=CD+1
1930 T=T+CD:RETURN
2219 REM -----------------------------------------------------------------
2220 CLS:PRINT "     FUNCTION 9 -- PRESENT VALUE OF A SERIES OF PAYMENTS":PRINT:PRINT
2222 F=0
2225 PRINT:PRINT "This program determines the Present Value of a series of payments."
2230 PRINT "It is normally used to determine the amount remaining on a loan, "
2240 PRINT "given the amount of the regular payment, the number of remaining"
2250 PRINT "payments, the number of payments per year, and the interest rate."
2260 PRINT
2270 INPUT "     AMOUNT OF REGULAR PAYMENT ";PT
2280 IF F=3 GOTO 2340
2290 INPUT "     # OF REMAINING PAYMENTS   ";NP
2300 IF F=4 GOTO 2340
2310 INPUT "     # OF PAYMENTS PER YEAR    ";PY
2320 IF F=5 GOTO 2340
2330 INPUT "     THE ANNUAL INTEREST RATE  ";IR
2340 I=IR/100
2344 CLS:PRINT "     FUNCTION 9 -- PRESENT VALUE OF A SERIES OF PAYMENTS": PRINT: PRINT
2347 T1=1+(I/PY):T1=T1^NP:T1=1/T1:T1=1-T1
2350 PR=PT*PY*T1/I
2360 PRINT "For ";NP;" Payments of $";PT;",with ";PY; "Payments per Year, "
2370 PRINT "at an Annual Interest Rate of ";IR;"%";" the Original Principal"
2380 PRINT "(or Value of the Remaining Payments) is"
2390 PRINT:PRINT "     $";:PRINT USING "#,###,###.##";PR
2400 PRINT:PRINT "WHAT DO YOU WANT TO DO:"
2405 PRINT
2410 PRINT "     1 -- RETURN TO MAIN MENU"
2420 PRINT "     2 -- RERUN ENTIRE FUNCTION"
2430 PRINT "     3 -- CHANGE PAYMENT AMOUNT"
2440 PRINT "     4 -- CHANGE NUMBER OF PAYMENTS "
2450 PRINT "     5 -- CHANGE PAYMENTS PER YEAR
2460 PRINT "     6 -- CHANGE ANNUAL INTEREST RATE"
2470 PRINT:INPUT "          SELECT OPTION ==> ";F
2480 IF F<1 OR F>6 THEN 2470
2490 F=INT(F):ON F GOTO 10,2220,2270,2290,2310,2330
2495 GOTO 2400
2500 END
4219 REM -----------------------------------------------------------------
4220 CLEAR
4235 CLS: PRINT "     FUNCTION 7 -- NOMINAL AND EFFECTIVE INTEREST RATES":PRINT:PRINT
4240 PRINT "This program computes the Nominal and Effective Interest Rates when"
4245 PRINT"given the Future Value, Present Value, number of periods between the"
4260 PRINT "two, and the number of compounding periods per year.":PRINT
4280 INPUT "     FUTURE VALUE (DOLLARS)    ";FV
4290 INPUT "     PRESENT VALUE (DOLLARS)   ";PV
4300 INPUT "     TOTAL NUMBER OF PERIODS   ";NP
4310 INPUT "     NUMBER OF PERIODS PER YEAR";PY
4320 NR=(PY*((FV/PV)^(1/NP))-PY)*100
4330 ER=((FV/PV)^(PY/NP)-1)*100
4340 PRINT:PRINT "     The Nominal Rate is";NR;" %
4345 PRINT "     The Effective Rate is";ER;" %
4350 PRINT: PRINT:
4355 PRINT "WHAT DO YOU WANT TO DO: ": PRINT
4358 PRINT "     1 -- RETURN TO MAIN MENU"
4360 PRINT "     2 -- RERUN CURRENT FUNCTION": PRINT
4363 INPUT "          SELECT OPTION ==> ";IA
4367 IF IA = 2 THEN GOTO 4230
4370 IF IA <>1 THEN GOTO 4363
4373 RUN
4379 REM -----------------------------------------------------------------
4380 CLS: PRINT "     FUNCTION 12 -- INTERNAL RATE OF RETURN": PRINT: PRINT
4390 CLEAR
4400 PRINT "This function computes the Internal Rate of Return on an Investment,"
4410 PRINT "based on the Periodic Earnings of that Investment, and discounted for"
4420 PRINT "for the Present Value of the Expected Sales Price.": PRINT
4440 INPUT "     PURCHASE PRICE (INVESTMENT) ";PV
4450 INPUT "     THE EXPECTED SALE PRICE     ";FV
4455 INPUT "     THE TOTAL NUMBER OF PERIODS ";N
4460 INPUT "     NUMBER OF PERIODS PER YEAR  ";PY: PRINT
4480 DIM EP(N)
4490 FOR X=1 TO N:PRINT "     EARNINGS FOR PERIOD #";X;:INPUT EP(X):NEXT X
4500 PRINT: PRINT
4505 PRINT"   . . . COMPUTER WORKING.  BE WITH YOU IN A FEW SECONDS . . .
4510 IR=0.15/PY:I1=0.25
4520 PF=FV/(1+IR)^N
4530 TE=0
4540 FOR X=1 TO N
4550 PE=EP(X)/(1+IR)^X
4560 TE=TE+PE
4570 NEXT X
4580 I1=IR*(PF+TE)/PV
4590 IF ABS(IR-I1)<0.000001 THEN IR=IR*PY*100:GOTO 4603
4600 IR=I1:GOTO 4520
4603 CLS: PRINT "     FUNCTION 12 -- INTERNAL RATE OF RETURN": PRINT: PRINT
4608 PRINT "For an Investment of $";PV;", an Expected Sales Price of $";FV
4610 PRINT"and ";N;"periods, where there are ";PY;"periods per year:"
4613 PRINT:PRINT "     The Rate of Return is ";IR;"%"
4614 PRINT: PRINT:
4616 PRINT "WHAT DO YOU WANT TO DO: ": PRINT
4618 PRINT "     1 -- RETURN TO MAIN MENU"
4620 PRINT "     2 -- RERUN CURRENT FUNCTION": PRINT
4622 INPUT "          SELECT OPTION ==> ";IA
4624 IF IA = 2 THEN GOTO 4380
4625 IF IA <>1 THEN GOTO 4622
4627 RUN
4628 END
4629 REM -----------------------------------------------------------------
4630 CLS: PRINT "     FUNCTION 10 -- FUTURE VALUE OF REGULAR DEPOSITS": PRINT: PRINT
4633 CLEAR:PRINT "This function computes the Future Value of a Series of Regular Deposits,"
4650 PRINT "where each deposit is identical, and interest is compounded with the same "
4670 PRINT "frequency that the deposits are made.  This is known as an Annuity Due;"
4680 PRINT "that is, payments are made in advance of the interest being paid, such as
4700 PRINT "savings accounts or insurance policies.
4705 PRINT
4710 INPUT "     AMOUNT OF REGULAR DEPOSIT   ";RD
4720 INPUT "     NUMBER OF DEPOSITS PER YEAR ";PY
4730 INPUT "     THE TOTAL NUMBER OF MONTHS  ";M
4750 Y = M/12
4760 INPUT "     NOMINAL ANNUAL INTEREST RATE";IR
4770 I=IR/PY/100
4780 T=(1+I)^(PY*Y):T=T-1:T=T/I:FV=RD*T
4790 PRINT:PRINT "     The Future Value is $";:PRINT USING "#,###,###.##";FV
4793 PRINT: PRINT:
4795 PRINT "WHAT DO YOU WANT TO DO: ": PRINT
4798 PRINT "     1 -- RETURN TO MAIN MENU"
4800 PRINT "     2 -- RERUN CURRENT FUNCTION": PRINT
4803 INPUT "          SELECT OPTION ==> ";IA
4804 IF IA = 2 THEN GOTO 4630
4805 IF IA <>1 THEN GOTO 4803
4806 RUN
4809 END
4819 REM -----------------------------------------------------------------
4820 CLS: PRINT"     FUNCTION 11 -- REGULAR DEPOSITS FOR FUTURE VALUE":PRINT:PRINT
4823 PRINT "This program computes the Amount of Regular Deposits needed to produce a"
4840 PRINT "particular Future Value.  It is an example of an Annuity Due.":PRINT
4850 INPUT "     FUTURE VALUE (IN DOLLARS)   ";FV
4860 INPUT "     NUMBER OF DEPOSITS PER YEAR ";PY
4870 INPUT "     THE TOTAL NUMBER OF MONTHS  ";M
4890 Y = M/12
4900 INPUT "     NOMINAL ANNUAL INTEREST RATE";IR
4910 I=IR/PY/100
4920 T=(1+I)^(PY*Y):T=T-1:T=I/T:RD=FV*T
4930 PRINT:PRINT "     The Amount of the Regular Deposit is $";:PRINT USING "#,###,###.##";RD
4933 PRINT: PRINT:
4935 PRINT "WHAT DO YOU WANT TO DO: ": PRINT
4938 PRINT "     1 -- RETURN TO MAIN MENU"
4940 PRINT "     2 -- RERUN CURRENT FUNCTION": PRINT
4943 INPUT "          SELECT OPTION ==> ";IA
4944 IF IA = 2 THEN GOTO 4820
4945 IF IA <>1 THEN GOTO 4943
4946 RUN
4948 END
5589 REM -----------------------------------------------------------------
5590 CLS:PRINT "     FUNCTION 13 -- BOND - PRESENT VALUE": PRINT: PRINT
5591 ON ERROR GOTO 5950
5593 CLEAR:PRINT "This program determines the Present Value of a Coupon Bond at a specified"
5610 PRINT "Rate of Interest, given specific Financial Information on the Bond.":PRINT
5640 INPUT "     DESIRED RATE OF INTEREST (PERCENT)";IR
5650 INPUT "     FACE (REDEMPTION) AMOUNT OF BOND  ";AM
5660 INPUT "     NUMBER OF PAYMENT PERIODS PER YEAR";PY
5670 INPUT "     NUMBER OF PERIODS TO MATURITY     ";PN
5680 INPUT "     THE PERIODIC PAYMENT (IN DOLLARS) ";PP
5690 PRINT:PRINT
5700 IR=IR/PY/100:PV=AM/(1+IR)^PN
5710 T=(1+IR)^(-PN):T=1-T:T=T/IR:T=T*PP
5720 PV=PV+T
5723 PRINT "     The Present Value is $";:PRINT USING"###,###.##";PV
5730 PRINT: PRINT:
5733 PRINT "WHAT DO YOU WANT TO DO: ": PRINT
5735 PRINT "     1 -- RETURN TO MAIN MENU"
5738 PRINT "     2 -- RERUN CURRENT FUNCTION": PRINT
5740 INPUT "          SELECT OPTION ==> ";IA
5742 IF IA = 2 THEN GOTO 5590
5745 IF IA <>1 THEN GOTO 5740
5746 RUN
5748 END
5749 REM -----------------------------------------------------------------
5750 CLS:CLEAR
5755 PRINT "     FUNCTION 14 -- BOND - YIELD TO MATURITY": PRINT: PRINT
5760 ON ERROR GOTO 5950
5770 PRINT "This program determines the Yield to Maturity on a Bond, given the"
5780 PRINT "Current Purchase Price.  This is the true Rate of Return on a Bond."
5790 PRINT
5800 INPUT "      PURCHASE PRICE OF THE BOND    ";PV
5810 INPUT "      THE REDEMPTION (FACE) VALUE   ";FV
5820 INPUT "      ANNUAL QUOTED INTEREST RATE   ";IR
5830 INPUT "      # OF COUPON PAYMENTS PER YEAR ";PY
5840 INPUT "      # OF PAYMENT PERIODS REMAINING";N
5850 INPUT "      AMOUNT OF THE COUPON PAYMENT  ";CP
5860 PRINT:PRINT ". . . COMPUTER WORKING.  BE WITH YOU IN A FEW SECONDS . . .
5870 IR=0.08/PY
5880 PF=FV/(1+IR)^N
5890 T=(1+IR)^(-N):T=1-T:T=T/IR*CP
5900 I1=IR*(PF+T)/PV
5910 IF ABS(IR-I1)<0.000001 THEN IR=IR*PY*100:GOTO 5930
5920 IR=I1:GOTO 5880
5930 PRINT:PRINT "     The Yield to Maturity is";:PRINT USING A$;IR;" %"
5933 PRINT: PRINT:
5935 PRINT "WHAT DO YOU WANT TO DO: ": PRINT
5937 PRINT "     1 -- RETURN TO MAIN MENU"
5939 PRINT "     2 -- RERUN CURRENT FUNCTION": PRINT
5940 INPUT "          SELECT OPTION ==> ";IA
5942 IF IA = 2 THEN GOTO 5750
5945 IF IA <>1 THEN GOTO 5940
5946 RUN
5948 END
5949 REM -----------------------------------------------------------------
5950 REM          ERROR HANDLING ROUTINE
5955 PRINT
5960 IF ERR/2+1=11 THEN PRINT "A `DIVIDE BY ZERO' ERROR HAS OCCURRED."ELSE 6030
5970 PRINT:PRINT "     THIS USUALLY MEANS THAT A VALUE REQUIRED BY THE FUNCTION WAS NOT ENTERED PROPERLY"
5980 PRINT "     OR THAT AN INVALID ZERO CONDITION WAS COMPUTED."
5990 PRINT:PRINT "          PUSH `ENTER' TO RETURN TO MAIN MENU"; INPUT A$
6010 RUN
6030 PRINT "ERROR";ERR;"HAS OCCURR
```
{% endraw %}

## FOS.BAS

{% raw %}
```bas
10 ' Financial Operating System
15 '
20 ' Daune J. Brummel
30 ' Rt. 2   Brooklyn, Wis. 52521.   Rev. 01/13/82   VER. 1.2
31 '
32 ' Enter the disk drive designation on Line 65 to specify on which drive
33 '  you want FOS and its data files to reside on.  You must also change
34 '  line 25 of FOS2 program.  Both programs set up for drive A initially.
35 '
40 DEF SEG=0:A=PEEK(&H417):POKE &H417,(A AND &H9F) OR &H60:DEF SEG
50 KEY OFF:WIDTH 80:SCREEN 0,0,0
60 CLEAR
64 '
65 DRIVE$="A"
66 '
70 ON KEY(1) GOSUB 5400:KEY(1) ON:ON KEY(9) GOSUB 5440:ON KEY(10) GOSUB 5450
80 ON KEY(2) GOSUB 5410:KEY(2) ON:ON ERROR GOTO 5370
90 COLOR 7,0:K1%=0:GOSUB 6570
100 PRINT CHR$(201)+STRING$(78,205)+CHR$(187);:PRINT CHR$(186);:PRINT TAB(14);
110 PRINT"F I N A N C I A L    O P E R A T I N G    S Y S T E M";
120 PRINT TAB(80) CHR$(186);:PRINT CHR$(200)+STRING$(78,205)+CHR$(188);
130 PRINT:PRINT
140 PRINT"     1 - Display totals for all accounts.":PRINT
150 PRINT"     2 - Checking Account # 1. (1983)
160 PRINT"     3 - Checking Account # 2. (Bank of Mad. Partnership Acct.)
170 PRINT"     4 - Checking Account # 3. (1982)":PRINT
180 PRINT"     5 - Savings Account # 1.
190 PRINT"     6 - Savings Account # 2.":PRINT
200 PRINT"     7 - Special Accounts.":PRINT
210 PRINT"     8 - Cash Expenditures.":PRINT
220 PRINT"     9 - File Maintenance and Data Analysis."
230 PRINT
240 COLOR 18:PRINT TAB(25)"   Enter function desired:  ",:COLOR 7:SOUND 800,0.5
250 KB$=INKEY$:IF KB$="" THEN 250
260 IF K1%=1 THEN 5410
270 IF KB$="1" THEN 4890
280 IF KB$="2" THEN A%=1:GOSUB 5980:GOSUB 6530:GOTO 1020
290 IF KB$="3" THEN A%=2:GOSUB 5990:GOSUB 6540:GOTO 1020
300 IF KB$="4" THEN A%=3:GOSUB 6000:GOSUB 6550:GOTO 1020
310 IF KB$="5" THEN A%=1:GOSUB 5710:GOTO 380
320 IF KB$="6" THEN A%=2:GOSUB 5720:GOTO 380
330 IF KB$="7" THEN GOSUB 5610:GOTO 3270
340 IF KB$="8" THEN GOSUB 5970:GOTO 4030
350 IF KB$="9" THEN CLS:LOCATE 10,20:GOTO 370
360 BEEP : GOTO 60
370 PRINT"Loading FOS Program section 2...":CHAIN DRIVE$+":FOS2"
380 GET#1,1:IF A$="E" OR A$="B" OR A$="A" THEN 410 ELSE CLS:BEEP
390 PRINT:PRINT"This Savings account must be INITIALIZED before it can be used.
400 CLOSE:GOSUB 6630:GOTO 60
410 GOSUB 6570:K1%=0:IF A%=1 THEN GOSUB 5810
420 IF A%=2 THEN GOSUB 5830
430 PRINT:PRINT
440 PRINT"     1 - Display transactions and balance."
450 PRINT:PRINT"     2 - Enter a Deposit or Withdrawal."
460 PRINT:PRINT"     3 - Delete the last entry.
470 PRINT:PRINT"     4 - Add an interest payment to the account."
480 PRINT:PRINT:PRINT
490 COLOR 18:PRINT TAB(28)"Enter function desired:   ",:COLOR 7
500 SOUND 1200,0.5
510 KB$=INKEY$:IF KB$="" THEN 510
520 IF K1%=1 THEN CLOSE:GOTO 60
530 IF KB$="1" THEN 780
540 IF KB$="2" THEN 580
550 IF KB$="3" THEN 830
560 IF KB$="4" THEN 950
570 BEEP:GOTO 510
580 A#=0:CLS:GOSUB 5460:PRINT:IF K1%=1 THEN 410
590 PRINT"  Is this a Deposit (D), or a Withdrawal (W)  ";
600 INPUT KB$:IF K1%=1 THEN 410
610 IF KB$="W" OR KB$="w" THEN B%=1:GOTO 640
620 IF KB$="D" OR KB$="d" THEN B%=2:GOTO 640
630 BEEP:GOTO 590
640 PRINT:INPUT"  Enter amount:  ",KB#
650 IF K1%=1 THEN 410
660 PRINT:PRINT"  Enter up to 36 characters for a description."
670 PRINT "  ------------------------------------"
680 INPUT"  ",KB$:IF K1%=1 THEN 410
690 IF LEN(KB$)<37 THEN 710
700 BEEP:GOTO 680
710 GOSUB 5740
720 LSET A$="B":LSET B$=FDATE$:LSET C$=MKD$(KB#):LSET G$=KB$
730 IF B%=2 THEN 750
740 LSET D$="W":A#=A#-KB#:LSET E$=MKD$(A#):GOTO 760
750 LSET D$="D":A#=A#+KB#:LSET E$=MKD$(A#)
760 PUT #1,R%
770 GOTO 410
780 GOSUB 6570:IF A%=1 THEN GOSUB 5850 ELSE GOSUB 5860
790 GOSUB 5670:R%=0
800 R%=R%+1:GET#1,R%
810 IF A$="A" THEN GOSUB 6630:GOTO 410
820 GOSUB 5870:GOTO 800
830 GOSUB 6570
840 PRINT"To DELETE the last entry ... enter the word 'PROCEED' :";
850 INPUT"",KB$:IF KB$="PROCEED" OR KB$="proceed" THEN 880
860 IF K1%=1 THEN 410
870 BEEP:GOTO 830
880 R%=1:GET#1,20:IF A$="A" THEN 900
890 R%=20:GOTO 940
900 IF R%=20 THEN 930
910 GET#1,R%:IF A$="A" THEN 930
920 R%=R%+1:GOTO 900
930 IF R%=1 THEN 410 ELSE R%=R%-1
940 LSET A$="A":LSET E$=MKD$(0):PUT#1,R%:GOTO 410
950 GOSUB 6570:K1%=0
960 PRINT"  Enter amount of interest to be credited to this SAVINGS ACCOUNT: ";
970 INPUT"",KB#:IF K1%=1 THEN 410
980 GOSUB 5460:IF K1%=1 THEN 410
990 GOSUB 5740:LSET A$="B":LSET B$=FDATE$:LSET D$="D":LSET C$=MKD$(KB#)
1000 A#=A#+KB#:LSET E$=MKD$(A#):LSET G$="Interest transaction only."
1010 PUT#1,R%:GOTO 410
1020 GET#1,1:IF A$="E" OR A$="B" OR A$="A" THEN 1050 ELSE CLS:BEEP
1030 PRINT"This Checking account must be INITIALIZED before it can be used.
1040 CLOSE:GOSUB 6630:GOTO 60
1050 GOSUB 6570:K1%=0:IF A%=1 THEN GOSUB 5910:GOTO 1080
1060 IF A%=2 THEN GOSUB 5930:GOTO 1080
1070 GOSUB 5950
1080 PRINT:PRINT
1090 PRINT:PRINT"  1 - Display outstanding checks and checkbook balance.":PRINT
1100 PRINT"  2 - Print outstanding checks and checkbook balance on printer.
1110 PRINT:PRINT"  3 - Credit entries.
1120 PRINT:PRINT"  4 - Debit entries.
1130 PRINT:PRINT"  5 - Balance checkbook.
1140 PRINT:PRINT"  6 - Delete an entry (outstanding check file).
1150 PRINT:PRINT"  7 - Display canceled checks.
1160 PRINT:PRINT"  8 - Print canceled check file on printer.":PRINT
1170 COLOR 18:PRINT TAB(25)"Enter function desired:  ";:COLOR 7:SOUND 1200,0.5
1180 KB$=INKEY$:IF KB$="" THEN 1180
1190 IF K1%=1 THEN CLOSE:GOTO 60
1200 IF KB$="1" THEN 1770
1210 IF KB$="2" THEN 1580
1220 IF KB$="8" THEN 1290
1230 IF KB$="3" THEN 1930
1240 IF KB$="4" THEN R%=1:GOTO 2050
1250 IF KB$="5" THEN 2840
1260 IF KB$="6" THEN 2410
1270 IF KB$="7" THEN 2590
1280 BEEP:GOTO 1180
1290 GET#2,1:IF H$="E" OR H$="B" OR H$="A" THEN 1300 ELSE 2850
1300 IF A%=1 THEN KB1$="Checking Account #1, Canceled Cks.":GOTO 1330
1310 IF A%=2 THEN KB1$="Checking Account #2, Canceled Cks.":GOTO 1330
1320 KB1$="Checking Account #3, Canceled Cks."
1330 KEY(9) ON:KEY(10) ON:R%=0
1340 GOSUB 6570:GOSUB 6670:IF K1%=1 THEN 1050
1350 GOSUB 6780:IF K1%=1 THEN 1050
1360 B%=0:E%=1:PRINT:PRINT"  Insure that the printer is ready."
1370 SOUND 500,1:GOSUB 6630:IF K1%=1 THEN 1050
1380 CLS:PRINT:PRINT"  To temporarily stop the printer, press the F9 key.
1390 PRINT:PRINT"  To STOP the printer and return to MENU, press the 'F1' key.
1400 GOSUB 6600
1410 R%=R%+1:GET#2,R%:IF H$="E" THEN 1540
1420 IF H$="A" THEN 1410
1430 IF K1%=1 THEN 1050
1440 IF K9%=1 THEN LOCATE 24,5:PRINT"Printer stopped by F9 key, to continue press F10 key.";:GOTO 1430
1450 Y3$=RIGHT$(I$,2):D3$=LEFT$(I$,2)+MID$(I$,4,2)
1460 IF Y1$=Y2$ THEN 1500
1470 IF Y3$=Y1$ THEN 1560
1480 IF Y3$=Y2$ THEN 1570
1490 IF Y3$>Y1$ AND Y3$<Y2$ THEN 1520 ELSE 1410
1500 IF Y3$<>Y2$ THEN 1410
1510 IF D3$<D1$ OR D3$>D2$ THEN 1410
1520 GOSUB 6210:B%=B%+1:IF B%< 58 THEN 1410
1530 B%=0:E%=E%+1:LPRINT CHR$(140):GOTO 1400
1540 KEY(9) OFF:KEY(10) OFF:LPRINT"* * END OF CANCELED CHECK FILE * *"
1550 LPRINT CHR$(140):GOTO 1050
1560 IF D3$=>D1$ THEN 1520 ELSE 1410
1570 IF D3$>D2$ THEN 1410 ELSE 1520
1580 IF A%=1 THEN KB1$="Checking Account #1, Outstanding Cks.":GOTO 1610
1590 IF A%=2 THEN KB1$="Checking Account #2, Outstanding Cks.":GOTO 1610
1600 KB1$="Checking Account #3, Outstanding Cks."
1610 KEY(9) ON:KEY(10) ON:R%=1
1620 K1%=0:GOSUB 6570:B%=0:E%=1:PRINT"  Insure that the printer is ready.
1630 SOUND 500,1:GOSUB 6630:IF K1%=1 THEN 1050
1640 CLS:PRINT:PRINT"  To temporarily stop the printer, press the F9 key.
1650 PRINT:PRINT"  To stop the printer and return to MENU, press the F1 key.
1660 GOSUB 6580:GET#1,R%:GOSUB 6150:B#=A#
1670 R%=R%+1:GET#1,R%:IF A$="A" THEN 1670
1680 IF A$="E" THEN 1740
1690 IF K1%=1 THEN 1050
1700 IF K9%=1 THEN LOCATE 24,5:PRINT"Printer stopped by F9 key... To continue, press F10 key.";:GOTO 1690
1710 GOSUB 6150:B%=B%+1:IF C%=2 THEN B#=B#+A# ELSE B#=B#-A#
1720 IF B%<57 THEN 1670
1730 B%=0:E%=E%+1:LPRINT CHR$(140):GOTO 1660
1740 KEY(9) OFF:KEY(10) OFF
1750 LPRINT "  Current Checking Account Balance is: ";
1760 LPRINT USING"$$#######,.##";B#:LPRINT CHR$(140):GOTO 1050
1770 GOSUB 6570:IF A%=1 THEN GOSUB 6290:GOTO 1800
1780 IF A%=2 THEN GOSUB 6300:GOTO 1800
1790 GOSUB 6310
1800 GOSUB 6040:R%=1:B%=0:B#=0
1810 GET#1,1:GOSUB 6120:B#=CVD(C$)
1820 R%=R%+1:GET#1,R%
1830 IF A$="E" THEN 1910
1840 IF A$="A" THEN 1820
1850 GOSUB 6120:IF C%=2 THEN B#=B#+A# ELSE B#=B#-A#
1860 B%=B%+1:IF B%<19 THEN 1820
1870 GOSUB 6630:IF K1%=1 THEN 1050
1880 B%=0:GOSUB 6570:IF A%=1 THEN GOSUB 6290:GOTO 1900
1890 IF A%=2 THEN GOSUB 6300 ELSE GOSUB 6310
1900 GOSUB 6040:GOTO 1820
1910 PRINT:PRINT"  Current Checking account balance is: ";
1920 PRINT USING"$$#######,.##";B#:GOSUB 6630:CLS:GOTO 1050
1930 GOSUB 6570:PRINT"  This function is for making a ";:COLOR 26
1940 PRINT"DEPOSIT";:COLOR 7:PRINT" into a checking account.
1950 PRINT:IF K1%=1 THEN 1050
1960 R%=1:GOSUB 5460:IF K1%=1 THEN 1050
1970 PRINT:INPUT"  Enter amount of deposit:  ",KB#:IF K1%=1 THEN 1050
1980 R%=R%+1:GET#1,R%:IF A$="E" THEN 2040
1990 IF A$<>"A" THEN 1980
2000 PRINT:PRINT"  This deposit has been assigned ITEM #:";R%:PRINT
2010 LSET A$="B":LSET B$=FDATE$:LSET C$=MKD$(KB#):LSET D$=MKI$(R%)
2020 LSET E$=MKI$(2):LSET F$="N":LSET G$="Deposit":PUT#1,R%
2030 PRINT:GOSUB 6630:GOTO 1050
2040 BEEP:PRINT:COLOR 30:PRINT"Checking account file is full.  This deposit has NOT been added to the file.":COLOR 7:GOTO 2030
2050 GOSUB 6570:GOSUB 6330:PRINT
2060 R%=R%+1:GET#1,R%:IF A$="E" THEN 2390
2070 IF A$<>"A" THEN 2060 ELSE SOUND 1500,0.1
2080 IF MC1%=0 THEN 2150 ELSE SOUND 700,1
2090 PRINT"Continuation of check #"KB2%"           Amount entered so far:";
2100 PRINT USING"$$######,.##";KB2#
2110 PRINT"  Continue entering multible expenses against this check ? (Y or N) ";
2120 KB$=INKEY$:IF KB$="" THEN 2120
2130 IF KB$="n" OR KB$="N" THEN K1%=0:MC1%=0:GOTO 2050
2140 IF KB$="Y" OR KB$="y" THEN 2210 ELSE BEEP:GOTO 2110
2150 PRINT"Enter ITEM No.[+], or just ENTER to have me assign an item No.: ";
2160 X%=POS(0):Y%=CSRLIN:INPUT"",KB$:IF K1%=1 THEN 1050
2170 IF LEN(KB$)=0 THEN LSET D$=MKI$(R%):LOCATE Y%,X%:PRINT R%:GOTO 2220
2180 IF VAL(KB$)<200 OR VAL(KB$)>32767 THEN BEEP:GOTO 2150
2190 KB2%=VAL(KB$)
2200 IF RIGHT$(KB$,1)="+" THEN MC1%=1:KB2#=0
2210 LSET D$=MKI$(KB2%)
2220 IF MC1%=1 THEN LSET A$="M" ELSE LSET A$="B"
2230 GOSUB 5470:IF K1%=1 THEN 1050
2240 LSET B$=FDATE$:PRINT TAB(41)"_____________________________________"
2250 INPUT"  Enter up to 37 Char. for description: ",KB$:IF K1%=1 THEN 1050
2260 IF LEN(KB$)<38 THEN 2280
2270 BEEP:GOTO 2250
2280 LSET G$=KB$:INPUT"  Enter AMOUNT: ",KB#:KB2#=KB2#+KB#:IF K1%=1 THEN 1050
2290 LSET C$=MKD$(KB#):INPUT"  Enter EXPENSE CODE: ",KB%:IF K1%=1 THEN 1050
2300 IF KB%>9 AND KB%<46 THEN 2320
2310 BEEP:GOTO 2290
2320 LSET E$=MKI$(KB%):PRINT"  Enter a 'Y' if this item could be a tax ";
2330 INPUT" deduction: ",KB$:IF K1%=1 THEN 1050
2340 IF MC1%=1 THEN 2370
2350 IF KB$="y" OR KB$="Y" THEN LSET F$="Y" ELSE LSET F$="N"
2360 PUT#1,R%:GOTO 2050
2370 IF KB$="y" OR KB$="Y" THEN LSET F$="y" ELSE LSET F$="n"
2380 GOTO 2360
2390 BEEP:PRINT:COLOR 30:PRINT"This checking account file is full.
2400 COLOR 7:PRINT:GOSUB 6630: GOTO 1050
2410 GOSUB 6570:PRINT:PRINT:F1%=0:F2%=0
2420 INPUT"  Enter ITEM No. of the item to be DELETED from the file: ",KB%
2430 IF K1%=1 THEN 1050
2440 IF KB%<2 THEN BEEP:GOTO 2420
2450 PRINT:INPUT"  To delete this item, enter the word 'PROCEED': ",KB$
2460 IF K1%=1 THEN 1050
2470 IF KB$="proceed" OR KB$="PROCEED" THEN 2480 ELSE BEEP:GOTO 2450
2480 R%=1:IF KB%>199 THEN 2510
2490 GET#1,KB%:IF A$="B" AND CVI(D$)=KB% THEN 2500 ELSE 2570
2500 LSET A$="A":PUT#1,KB%:GOTO 1050
2510 R%=R%+1:GET#1,R%:IF A$="E" THEN 2560
2520 IF A$="A" THEN 2510
2530 IF CVI(D$)<>KB% THEN 2510
2540 IF A$="M" THEN F1%=1
2550 LSET A$="A":PUT#1,R%:F2%=1:IF F1%=1 THEN 2510 ESLE 1040
2560 IF F2%=1 THEN 1050
2570 BEEP:PRINT:COLOR 30:PRINT"  ITEM NOT ON FILE...":COLOR 7:PRINT:GOSUB 6630
2580 GOTO 1050
2590 GET#2,1:IF H$="E" OR H$="B" OR H$="A" THEN 2600 ELSE 2850
2600 GOSUB 6570:GOSUB 6670:IF K1%=1 THEN 1050
2610 GOSUB 6780:IF K1%=1 THEN 1050 ELSE GOSUB 6570
2620 R%=0:B%=0:IF A%=1 THEN GOSUB 6240:GOTO 2650
2630 IF A%=2 THEN GOSUB 6250:GOTO 2650
2640 GOSUB 6260
2650 GOSUB 6040
2660 R%=R%+1:GET#2,R%:IF H$="E" THEN 2810
2670 IF H$="A" THEN 2660
2680 IF K1%=1 THEN 1050
2690 Y3$=RIGHT$(I$,2):D3$=LEFT$(I$,2)+MID$(I$,4,2)
2700 IF Y1$=Y2$ THEN 2740
2710 IF Y3$=Y1$ THEN 2820
2720 IF Y3$=Y2$ THEN 2830
2730 IF Y3$>Y1$ AND Y3$<Y2$ THEN 2760 ELSE 2660
2740 IF Y3$<>Y2$ THEN 2660
2750 IF D3$<D1$ OR D3$>D2$ THEN 2660
2760 GOSUB 6180
2770 B%=B%+1:IF B%<20 THEN 2660
2780 B%=0:GOSUB 6630:IF K1%=1 THEN 1050
2790 GOSUB 6570:IF A%=1 THEN GOSUB 6240:GOTO 2650
2800 IF A%=2 THEN GOSUB 6250:GOTO 2650
2805 IF A%=3 THEN GOSUB 6260:GOTO 2650
2810 PRINT"* * END OF CANCELED CHECK FILE * *":GOSUB 6630:GOTO 1050
2820 IF D3$=>D1$ THEN 2760 ELSE 2660
2830 IF D3$>D2$ THEN 2660 ELSE 2760
2840 GET#2,1:IF H$="E" OR H$="B" OR H$="A" THEN 2870
2850 CLS:BEEP:PRINT"Canceled checks file must be INITIALIZED before it can be used.
2860 GOSUB 6630:GOTO 1050
2870 CLS:R%=0:PRINT"Reading cancelled check file... please stand by.
2880 R%=R%+1:GET#2,R%:IF H$="E" THEN 3170
2890 IF H$<>"A" THEN 2880
2900 GOSUB 6570:GET#1,1:A#=CVD(C$)
2910 MC1%=0:SOUND 300,0.5:INPUT"  Enter ITEM No... or a 'zero' if last item: ",KB%
2920 IF K1%=1 THEN 3120
2930 IF KB%=1 THEN BEEP:GOTO 2910
2940 IF KB%=0 THEN 3120
2950 IF KB%>199 THEN 3210
2960 GET#1,KB%:IF A$="B" AND CVI(D$)=KB% THEN 2970 ELSE 3200
2970 LSET A$="A":PUT#1,KB%
2980 IF CVI(E$)=2 THEN A#=A#+CVD(C$):GOTO 2910
2990 LSET H$="B":LSET I$=B$:LSET J$=C$:LSET K$=D$
3000 LSET L$=E$:LSET M$=F$:LSET N$=G$:PUT#2,R%
3010 A#=A#-CVD(C$)
3020 R%=R%+1:GET#2,R%:IF H$="E" THEN 3040
3030 IF MC1%=1 THEN 3220 ELSE 2910
3040 IF MC1%=1 THEN 3070
3050 PRINT:COLOR 30:PRINT"Cancelled check file is now full.":COLOR 7
3060 BEEP:BEEP:PRINT:GOTO 3120
3070 PRINT:COLOR 30:PRINT"Canceled check file is now full...
3080 PRINT"Some entries for item#"KB%"may not have been processed.
3090 PRINT"Check current check files to be sure all entries have been moved
3100 PRINT"to the canceled check file.  If not, re-enter the item after
3110 PRINT"enlarging the canceled check file.":COLOR 7:GOTO 3060
3120 PRINT:PRINT"  If balance shown on bank statement is ";
3130 PRINT USING"$$######,.##";A#;:PRINT"    then checkbook balanced OK.
3140 LSET A$="B":GOSUB 6320:LSET B$=FDATE$:LSET C$=MKD$(A#):LSET D$=MKI$(1)
3150 LSET E$=MKI$(1):LSET F$="N":LSET G$="Previous balance.":PUT#1,1
3160 PRINT:GOSUB 6630:GOTO 1050
3170 PRINT:COLOR 30:PRINT"Cancelled check file is now full.":COLOR 7
3180 BEEP:BEEP:PRINT:GOSUB 6630:GOTO 1050
3190 IF MC1%=1 THEN 2910
3200 BEEP:COLOR 26:PRINT"ITEM NOT ON FILE.":COLOR 7:GOTO 2910
3210 B%=1
3220 B%=B%+1:GET#1,B%:IF A$="E" THEN 3190
3230 IF A$="A" THEN 3220
3240 IF CVI(D$)<>KB% THEN 3220
3250 IF A$="M" THEN MC1%=1
3260 LSET A$="A":PUT#1,B%:GOTO 2990
3270 GET#1,1:IF A$="E" OR A$="B" OR A$="A" THEN 3300 ELSE CLS:BEEP
3280 PRINT"This Special account must be INITIALIZED before it can be used.
3290 CLOSE:GOSUB 6630:GOTO 60
3300 K1%=0:GOSUB 6570:PRINT:PRINT:PRINT TAB(18);:COLOR 1
3310 PRINT"        S P E C I A L       A C C O U N T S       ":COLOR 7
3320 PRINT:PRINT:PRINT:PRINT
3330 PRINT"     1 - Display items."
3340 PRINT:PRINT"     2 - Change an existing item."
3350 PRINT:PRINT"     3 - Enter a new item."
3360 PRINT:PRINT"     4 - Delete an item."
3370 PRINT:PRINT:PRINT
3380 PRINT TAB(25)"Enter function desired:  ";:SOUND 1200,0.5
3390 KB$=INKEY$:IF KB$="" THEN 3390
3400 IF K1%=1 THEN CLOSE:GOTO 60
3410 GOSUB 6570:IF KB$="1" THEN 3460
3420 IF KB$="3" THEN 3570
3430 IF KB$="4" THEN 3840
3440 IF KB$="2" THEN 3960
3450 BEEP:GOTO 3300
3460 COLOR 18:PRINT"Special accounts.":COLOR 7:GOSUB 5570:R%=0:LCNT%=0:A#=0
3470 R%=R%+1:GET#1,R%
3480 IF A$="E" THEN 3550
3490 IF A$="A" THEN 3470
3500 GOSUB 5630:IF D$="A" THEN A#=A#+CVD(C$):GOTO 3520
3510 IF D$="L" THEN A#=A#-CVD(C$)
3520 LCNT%=LCNT%+1:IF LCNT%<19 THEN 3470
3530 LCNT%=0:GOSUB 6630:IF K1%=1 THEN 3300
3540 GOSUB 6570:GOSUB 5570:GOTO 3470
3550 PRINT:PRINT"  SPECIAL ACCOUNTS  TOTAL VALUE...  ";
3560 PRINT USING"$$#######,.##";A#:PRINT:GOSUB 6630:GOTO 3300
3570 K1%=0:PRINT:PRINT"  Reading file...  Please stand-by!":R%=0
3580 R%=R%+1:GET#1,R%
3590 IF A$="E" THEN 3820
3600 IF A$<>"A" THEN 3580
3610 GOSUB 6570
3620 GOSUB 5460
3630 PRINT:IF K1%=1 THEN 3300
3640 INPUT"  Is item an asset (A), or a liability (L) ?  ",KB$
3650 IF KB$="A" OR KB$="L" THEN 3710
3660 IF KB$="a" THEN 3690
3670 IF KB$="l" THEN 3700
3680 BEEP:GOTO 3630
3690 KB$="A":GOTO 3710
3700 KB$="L"
3710 LSET D$=KB$
3720 PRINT:IF K1%=1 THEN 3300
3730 INPUT"  Dollar value of item:  ",KB#
3740 LSET C$=MKD$(KB#):PRINT:IF K1%=1 THEN 3300
3750 INPUT"  Interest rate:         ",KB:LSET E$=MKS$(KB)
3760 PRINT:PRINT "  Enter up to 40 characters for a description of this item:"
3770 PRINT:PRINT "  ----------------------------------------"
3780 IF K1%=1 THEN 3300
3790 INPUT"  ",KB$:IF LEN(KB$)<41 THEN 3810
3800 BEEP:GOTO 3760
3810 LSET A$="B":LSET B$=FDATE$:LSET G$=KB$:PUT#1,R%:GOTO 3300
3820 PRINT:PRINT:COLOR 30:PRINT"SPECIAL ACCOUNTS FILE IS FULL..."
3830 COLOR 7:BEEP:GOSUB 6630:GOTO 3300
3840 PRINT"  This function will delete an item from the SPECIAL ACCOUNTS FILE."
3850 K1%=0:PRINT:PRINT
3860 PRINT "  Enter item number to be deleted:  ",:INPUT"",R%
3870 IF K1%=1 THEN 3300
3880 IF R%=0 THEN BEEP:GOTO 3860
3890 PRINT:INPUT"  To delete this item, enter the word 'PROCEED': ",KB$
3900 IF K1%=1 THEN 3300
3910 IF KB$="proceed" OR KB$="PROCEED" THEN 3920 ELSE BEEP:GOTO 3890
3920 GET#1,R%:IF A$<>"B" THEN 3940
3930 LSET A$="A":PUT#1,R%:GOTO 3300
3940 PRINT:COLOR 15:PRINT"Item not on file...":COLOR 7:BEEP
3950 GOSUB 6630:GOTO 3300
3960 K1%=0:PRINT:PRINT"  Enter the number of the item to be modified:  ";
3970 INPUT"",R%:IF K1%=1 THEN 3300
3980 IF R%>0 THEN 4000
3990 BEEP:GOTO 3960
4000 GET#1,R%:IF A$<>"B" THEN 3940
4010 PRINT:GOSUB 5570:GOSUB 5630:PRINT
4020 PRINT"  Enter new data . . .":PRINT:GOTO 3620
4030 GET#1,1:IF A$="E" OR A$="B" OR A$="A" THEN 4060 ELSE CLS:BEEP
4040 PRINT"Cash Expenditures account must be INITIALIZED before it can be used.
4050 CLOSE:GOSUB 6630:GOTO 60
4060 K1%=0:GOSUB 6570:PRINT:GOSUB 6020:PRINT:PRINT
4070 PRINT:PRINT"     1 - Display items.
4080 PRINT:PRINT"     2 - Print items on the printer.
4090 PRINT:PRINT"     3 - Enter a new item.
4100 PRINT:PRINT"     4 - Delete the last entry in the file.
4110 PRINT:PRINT:COLOR 18
4120 PRINT TAB(28)"Enter function desired: ";:COLOR 7:SOUND 1300,0.5
4130 KB$=INKEY$:IF KB$="" THEN 4130
4140 IF K1%=1 THEN CLOSE:GOTO 60
4150 IF KB$="1" THEN R%=0:GOTO 4400
4160 IF KB$="2" THEN 4660
4170 IF KB$="3" THEN 4200
4180 IF KB$="4" THEN 4580
4190 BEEP:GOTO 4130
4200 R%=0
4210 GOSUB 6570:GOSUB 6330
4220 R%=R%+1:GET#1,R%:IF A$="E" THEN 4380
4230 IF A$<>"A" THEN 4220
4240 LSET D$=MKI$(R%)
4250 SOUND 1300,0.5:LSET A$="B":GOSUB 5460:IF K1%=1 THEN 4060
4260 LSET B$=FDATE$:PRINT TAB(41)"_____________________________________"
4270 INPUT"  Enter up to 37 Char. for description: ",KB$:IF K1%=1 THEN 4200
4280 IF LEN(KB$)<38 THEN 4300
4290 BEEP:GOTO 4270
4300 LSET G$=KB$:INPUT"  Enter AMOUNT: ",KB#:IF K1%=1 THEN 4200
4310 LSET C$=MKD$(KB#):INPUT"  Enter EXPENSE CODE: ",KB%:IF K1%=1 THEN 4200
4320 IF KB%>9 AND KB%<46 THEN 4340
4330 BEEP:GOTO 4310
4340 LSET E$=MKI$(KB%):PRINT"  Enter a 'Y' if this item could be a tax ";
4350 INPUT" deduction: ",KB$:IF K1%=1 THEN 4200
4360 IF KB$="y" OR KB$="Y" THEN LSET F$="Y" ELSE LSET F$="N"
4370 PUT#1,R%:GOTO 4210
4380 BEEP:PRINT:COLOR 30:PRINT"Cash expenditures file is full.
4390 COLOR 7:PRINT:GOSUB 6630: GOTO 4060
4400 GOSUB 6570:GOSUB 6670:IF K1%=1 THEN 4060
4410 GOSUB 6780:IF K1%=1 THEN 4060
4420 GOSUB 6570:GOSUB 6270:GOSUB 6040:B%=0
4430 R%=R%+1:GET#1,R%:IF A$="E" THEN 4550
4440 IF A$="A" THEN 4550
4450 IF K1%=1 THEN 4060
4460 Y3$=RIGHT$(B$,2):D3$=LEFT$(B$,2)+MID$(B$,4,2)
4470 IF Y1$=Y2$ THEN 4510
4480 IF Y3$=Y1$ THEN 4560
4490 IF Y3$=Y2$ THEN 4570
4500 IF Y3$>Y1$ AND Y3$<Y2$ THEN 4530 ELSE 4430
4510 IF Y3$<>Y2$ THEN 4430
4520 IF D3$<D1$ OR D3$>D2$ THEN 4430
4530 GOSUB 6120:B%=B%+1:IF B%<20 THEN 4430
4540 B%=0:GOSUB 6630:IF K1%=1 THEN 4060 ELSE 4420
4550 PRINT"   End of file.":GOSUB 6630:GOTO 4060
4560 IF D3$=>D1$ THEN 4530 ELSE 4430
4570 IF D3$>D2$ THEN 4430 ELSE 4530
4580 GOSUB 6570:R%=0
4590 PRINT"To DELETE the last entry ... enter the word 'PROCEED' :";
4600 INPUT"  ",KB$:IF K1%=1 THEN 4060
4610 IF KB$="PROCEED" OR KB$="proceed" THEN 4630
4620 BEEP:GOTO 4590
4630 R%=R%+1:GET#1,R%:IF A$="B" THEN 4630
4640 IF R%=1 THEN 4060
4650 LSET A$="A":PUT#1,R%-1:GOTO 4060
4660 KEY(9) ON:KEY(10) ON:R%=0:GOSUB 6570:GOSUB 6670:IF K1%=1 THEN 4860
4670 GOSUB 6780:IF K1%=1 THEN 4860
4680 GOSUB 6570:B%=0:E%=1:PRINT"  Insure that the printer is ready."
4690 SOUND 500,1:GOSUB 6630:IF K1%=1 THEN 4860
4700 CLS:PRINT:PRINT"  To temporarily stop the printer, press the F9 key.
4710 PRINT:PRINT"  To STOP the printer and return to MENU, press the 'F1' key.
4720 KB1$="Cash Expenditures.":GOSUB 6600
4730 R%=R%+1:GET#1,R%:IF A$<>"B" THEN 4850
4740 IF K1%=1 THEN 4860
4750 IF K9%=1 THEN LOCATE 24,5:PRINT"Printer stopped by F9 key, to continue press F10 key.";:GOTO 4740
4760 Y3$=RIGHT$(B$,2):D3$=LEFT$(B$,2)+MID$(B$,4,2)
4770 IF Y1$=Y2$ THEN 4810
4780 IF Y3$=Y1$ THEN 4870
4790 IF Y3$=Y2$ THEN 4880
4800 IF Y3$>Y1$ AND Y3$<Y2$ THEN 4830 ELSE 4730
4810 IF Y3$<>Y2$ THEN 4730
4820 IF D3$<D1$ OR D3$>D2$ THEN 4730
4830 GOSUB 6150:B%=B%+1:IF B%< 58 THEN 4730
4840 B%=0:E%=E%+1:LPRINT CHR$(140):GOTO 4720
4850 LPRINT"* * END OF FILE * *";:LPRINT CHR$(140)
4860 KEY(9) OFF:KEY(10) OFF:GOTO 4060
4870 IF D3$=>D1$ THEN 4830 ELSE 4730
4880 IF D3$>D2$ THEN 4730 ELSE 4830
4890 GOSUB 6570:LOCATE 20,20:PRINT"Reading files.... Please stand by..."
4900 LOCATE 1,1
4910 B#=0:GOSUB 5980:R%=1:GET#1,R%:IF A$="B" THEN 4920 ELSE 4990
4920 A#=CVD(C$)
4930 R%=R%+1:GET#1,R%:IF A$="E" THEN 4970
4940 IF A$<>"B" AND A$<>"M" THEN 4930
4950 IF CVI(E$)=2 THEN A#=A#+CVD(C$) ELSE A#=A#-CVD(C$)
4960 GOTO 4930
4970 PRINT"  Checking Account #1 . . . . . . . . ";
4980 PRINT USING"$$######,.##";A#:PRINT:B#=A#
4990 CLOSE:GOSUB 5990:R%=1:GET#1,R%:IF A$="B" THEN 5000 ELSE 5070
5000 A#=CVD(C$)
5010 R%=R%+1:GET#1,R%:IF A$="E" THEN 5050
5020 IF A$<>"B" AND A$<>"M" THEN 5010
5030 IF CVI(E$)=2 THEN A#=A#+CVD(C$) ELSE A#=A#-CVD(C$)
5040 GOTO 5010
5050 PRINT"  Checking Account #2 . . . . . . . . ";
5060 PRINT USING"$$######,.##";A#:PRINT:B#=B#+A#
5070 CLOSE:GOSUB 6000:R%=1:GET#1,R%:IF A$="B" THEN 5080 ELSE 5150
5080 A#=CVD(C$)
5090 R%=R%+1:GET#1,R%:IF A$="E" THEN 5130
5100 IF A$<>"B" AND A$<>"M" THEN 5090
5110 IF CVI(E$)=2 THEN A#=A#+CVD(C$) ELSE A#=A#-CVD(C$)
5120 GOTO 5090
5130 PRINT"  Checking Account #3 . . . . . . . . ";
5140 PRINT USING"$$######,.##";A#:PRINT:B#=B#+A#
5150 CLOSE:GOSUB 5710:R%=1:GET#1,R%:IF A$="B" THEN 5160 ELSE 5200
5160 A#=CVD(E$)
5170 R%=R%+1:GET#1,R%:IF A$="E" OR A$="A" THEN 5180 ELSE 5160
5180 PRINT"  Savings Account #1. . . . . . . . . ";
5190 PRINT USING"$$######,.##";A#:PRINT:B#=B#+A#
5200 CLOSE:GOSUB 5720:R%=1:GET#1,R%:IF A$="B" THEN 5210 ELSE 5250
5210 A#=CVD(E$)
5220 R%=R%+1:GET#1,R%:IF A$="E" OR A$="A" THEN 5230 ELSE 5210
5230 PRINT"  Savings Account #2. . . . . . . . . ";
5240 PRINT USING"$$######,.##";A#:PRINT:B#=B#+A#
5250 CLOSE:A#=0:GOSUB 5610:R%=1:GET#1,R%:IF A$<>"A" AND A$<>"B" THEN 5330
5260 IF A$="B" THEN 5290
5270 R%=R%+1:GET#1,R%:IF A$="E" THEN 5310
5280 IF A$<>"B" THEN 5270
5290 IF D$="A" THEN A#=A#+CVD(C$) ELSE A#=A#-CVD(C$)
5300 GOTO 5270
5310 PRINT"  Special Accounts. . . . . . . . . . ";
5320 PRINT USING"$$######,.##";A#:PRINT:B#=B#+A#
5330 PRINT TAB(38) STRING$(16,196)
5340 PRINT:PRINT:PRINT"  Total in all accounts . . . . . . .";
5350 PRINT USING"$$#######,.##";B#:LOCATE 20,20
5360 PRINT TAB(56)"":CLOSE:GOSUB 6630:GOTO 60
5370 IF ERR=24 THEN RESUME
5380 IF ERR=6 THEN PRINT"Number too large.. re-enter.":RESUME
5390 ON ERROR GOTO 0:RESUME
5400 K1%=1:RETURN
5410 COLOR 7,0
5420 CLOSE:CLS:PRINT"Your session with the Financial Operating System has ended.
5430 PRINT:PRINT"Welcome to BASIC.":END
5440 K9%=1:RETURN
5450 K9%=0:LOCATE 24,1:PRINT TAB(65);:RETURN
5460 PRINT
5470 PRINT"  Enter date (0,4, or 6 digits in MMDDYY format):  ";
5480 X%=POS(0):Y%=CSRLIN:INPUT"",KB$
5490 IF LEN(KB$)=6 THEN 5550
5500 IF LEN(KB$)=4 THEN 5540
5510 IF LEN(KB$)=0 THEN 5530
5520 BEEP:GOTO 5470
5530 FDATE$=LEFT$(DATE$,2)+"-"+MID$(DATE$,4,2)+"-"+RIGHT$(DATE$,2):GOTO 5560
5540 FDATE$=LEFT$(KB$,2)+"-"+MID$(KB$,3,2)+"-"+RIGHT$(DATE$,2):GOTO 5560
5550 FDATE$=LEFT$(KB$,2)+"-"+MID$(KB$,3,2)+"-"+RIGHT$(KB$,2):GOTO 5560
5560 LOCATE Y%,X%:PRINT FDATE$:RETURN
5570 PRINT"ITEM#   DATE   TYPE   AMOUNT    RATE%";
5580 PRINT "        D E S C R I P T I O N"
5590 PRINT " "+STRING$(3,45)+"  "+STRING$(8,45)+"  "+CHR$(45)+"  ";
5600 PRINT STRING$(11,45)+"  "+STRING$(4,45)+"  "+STRING$(41,45):RETURN
5610 OPEN DRIVE$+":SPECIAL.FOS" AS 1 LEN=62
5620 FIELD#1,1 AS A$,8 AS B$,8 AS C$,1 AS D$,4 AS E$,40 AS G$:RETURN
5630 PRINT R% TAB(7) B$ TAB(17) D$;
5640 PRINT TAB(20) USING"$$#####,.##";CVD(C$);
5650 PRINT TAB(33) USING"##.#";CVS(E$);
5660 PRINT TAB(39) G$:RETURN
5670 PRINT"ITEM#  DATE  TYPE  THIS ENTRY    BALANCE";
5680 PRINT"            D E S C R I P T I O N"
5690 PRINT" "+STRING$(2,45)+"  "+STRING$(8,45)+"  "+CHR$(45)+"  ";
5700 PRINT STRING$(11,45)+"  "+STRING$(11,45)+"  "+STRING$(36,45);:RETURN
5710 OPEN DRIVE$+":SAVINGS1.FOS" AS 1 LEN=62:GOTO 5730
5720 OPEN DRIVE$+":SAVINGS2.FOS" AS 1 LEN=62
5730 FIELD#1,1 AS A$,8 AS B$,8 AS C$,1 AS D$,8 AS E$,36 AS G$:RETURN
5740 PRINT:PRINT"  MOVING RECORDS IN SAVINGS FILE...":PRINT:R%=1
5750 GET#1,20:IF A$="A" THEN 5780
5760 A#=CVD(E$):IF R%=20 THEN RETURN
5770 GET#1,R%+1:PUT#1,R%:R%=R%+1:GOTO 5760
5780 IF R%=20 THEN RETURN
5790 GET#1,R%:IF A$="A" THEN RETURN
5800 R%=R%+1:A#=CVD(E$):GOTO 5780
5810 PRINT TAB(19);:COLOR 1
5820 PRINT"       S A V I N G S     A C C O U N T   1       ":COLOR 7:RETURN
5830 PRINT TAB(19);:COLOR 1
5840 PRINT"       S A V I N G S     A C C O U N T   2       ":COLOR 7:RETURN
5850 COLOR 18:PRINT"Savings account 1.":COLOR 7:RETURN
5860 COLOR 18:PRINT"Savings account 2.":COLOR 7:RETURN
5870 PRINT R% TAB(6) B$ TAB(16) D$;
5880 PRINT TAB(19) USING"$$#####,.##";CVD(C$);
5890 PRINT TAB(32) USING"$$#####,.##";CVD(E$);
5900 PRINT TAB(45) G$;:RETURN
5910 PRINT TAB(18);:COLOR 1
5920 PRINT"       C H E C K I N G   A C C O U N T   1       ":COLOR 7:RETURN
5930 PRINT TAB(18);:COLOR 1
5940 PRINT"       C H E C K I N G   A C C O U N T   2       ":COLOR 7:RETURN
5950 PRINT TAB(18);:COLOR 1
5960 PRINT"       C H E C K I N G   A C C O U N T   3       ":COLOR 7:RETURN
5970 OPEN DRIVE$+":CASHEXP.FOS" AS 1 LEN=59:GOTO 6010
5980 OPEN DRIVE$+":CHKCUR1.FOS" AS 1 LEN=59:GOTO 6010
5990 OPEN DRIVE$+":CHKCUR2.FOS" AS 1 LEN=59:GOTO 6010
6000 OPEN DRIVE$+":CHKCUR3.FOS" AS 1 LEN=59
6010 FIELD#1,1 AS A$,8 AS B$,8 AS C$,2 AS D$,2 AS E$,1 AS F$,37 AS G$:RETURN
6020 PRINT TAB(18);:COLOR 1
6030 PRINT"       C A S H    E X P E N D I T U R E S       ":COLOR 7:RETURN
6040 PRINT" ITEM#     DATE        AMOUNT    CODE TAX";
6050 PRINT"        D E S C R I P T I O N"
6060 PRINT" "+STRING$(5,45)+"   "+STRING$(8,45)+"   "+STRING$(11,45);
6070 PRINT"   "+STRING$(2,45)+"   "+CHR$(45)+"   "+STRING$(37,45);:RETURN
6080 LPRINT" ITEM#     DATE        AMOUNT    CODE TAX";
6090 LPRINT"        D E S C R I P T I O N"
6100 LPRINT" "+STRING$(5,45)+"   "+STRING$(8,45)+"   "+STRING$(11,45);
6110 LPRINT"   "+STRING$(2,45)+"   "+CHR$(45)+"   "+STRING$(37,45);:RETURN
6120 D%=CVI(D$):C%=CVI(E$):A#=CVD(C$):PRINT D% TAB(10) B$ TAB(20);
6130 PRINT USING"$$######,.##";A#;:PRINT TAB(34) C% TAB(40) F$ TAB(44) G$;
6140 RETURN
6150 D%=CVI(D$):C%=CVI(E$):A#=CVD(C$):LPRINT D% TAB(10) B$ TAB(20);
6160 LPRINT USING"$$######,.##";A#;:LPRINT TAB(34) C% TAB(40) F$;
6170 LPRINT TAB(44) G$;:RETURN
6180 PRINT CVI(K$) TAB(10) I$ TAB(20);
6190 PRINT USING"$$######,.##";CVD(J$);:PRINT TAB(34) CVI(L$);
6200 PRINT TAB(40) M$ TAB(44) N$;:RETURN
6210 LPRINT CVI(K$) TAB(10) I$ TAB(20);
6220 LPRINT USING"$$######,.##";CVD(J$);:LPRINT TAB(34) CVI(L$);
6230 LPRINT TAB(40) M$ TAB(44) LEFT$(N$,36):RETURN
6240 COLOR 18:PRINT"Checking account 1.";:COLOR 7:GOTO 6280
6250 COLOR 18:PRINT"Checking account 2.";:COLOR 7:GOTO 6280
6260 COLOR 18:PRINT"Checking account 3.";:COLOR 7:GOTO 6280
6270 COLOR 18:PRINT"Cash expenditures.";:COLOR 7
6280 PRINT TAB(44)"From:  " FD1$ "     Thru:  " FD2$:RETURN
6290 COLOR 18:PRINT"Checking account 1.":COLOR 7:RETURN
6300 COLOR 18:PRINT"Checking account 2.":COLOR 7:RETURN
6310 COLOR 18:PRINT"Checking account 3.":COLOR 7:RETURN
6320 FDATE$=LEFT$(DATE$,2)+"-"+MID$(DATE$,4,2)+"-"+RIGHT$(DATE$,2):RETURN
6330 COLOR 18
6340 PRINT TAB(19)"* * * *   E X P E N S E   C O D E S   * * * *":COLOR 7
6350 PRINT"10 - Appliances"TAB(29)"22 - Entertainment";
6360 PRINT TAB(57)"34 - Miscellaneous":PRINT"11 - Automobile";
6370 PRINT TAB(29)"23 - Food"TAB(57)"35 - Mortgage
6380 PRINT"12 - Capital Inv. (Auto)"TAB(29)"24 - Furniture";
6390 PRINT TAB(57)"36 - Paper/Magazines":PRINT"13 - Capital Inv. (Bldg)";
6400 PRINT TAB(29)"25 - Gasoline/Oil (auto)"TAB(57)"37 - Supplies
6410 PRINT"14 - Capital Inv. (Other)"TAB(29)"26 - Gas/Oil (Heating)";
6420 PRINT TAB(57)"38 - Taxes":PRINT"15 - Cash";
6430 PRINT TAB(29)"27 - Hobbies"TAB(57)"39 - Telephone
6440 PRINT"16 - Clothing"TAB(29)"28 - Insurance";
6450 PRINT TAB(57)"40 - Tools":PRINT"17 - Dental";
6460 PRINT TAB(29)"29 - Interest"TAB(57)"41 - Tractor/Mower
6470 PRINT"18 - Donations (Church)"TAB(29)"30 - Lawn/Garden";
6480 PRINT TAB(57)"42 - Transfer to Invest.";:PRINT"19 - Donations (Other)";
6490 PRINT TAB(29)"31 - Maint. (Bldg)"TAB(57)"43 - Transfer to Savings";
6500 PRINT"20 - Education"TAB(29)"32 - Maint. (Other)";
6510 PRINT TAB(57)"44 - Vacation";:PRINT"21 - Electricity";
6520 PRINT TAB(29)"33 - Medical"TAB(57)"45 - Water/sewer":RETURN
6530 OPEN DRIVE$+":CHKCAN1.FOS" AS 2 LEN=59:GOTO 6560
6540 OPEN DRIVE$+":CHKCAN2.FOS" AS 2 LEN=59:GOTO 6560
6550 OPEN DRIVE$+":CHKCAN3.FOS" AS 2 LEN=59
6560 FIELD#2,1 AS H$,8 AS I$,8 AS J$,2 AS K$,2 AS L$,1 AS M$,37 AS N$:RETURN
6570 CLS:LOCATE 25,72:GOSUB 6320:PRINT FDATE$:LOCATE 1,1:RETURN
6580 LPRINT KB1$ TAB(48)"DATE: " FDATE$ TAB(70)"PAGE: "E%
6590 LPRINT:GOSUB 6080:RETURN
6600 LPRINT KB1$;
6610 LPRINT TAB(41) FD1$ "  THRU  " FD2$ TAB(70)"PAGE: " E%
6620 LPRINT:GOSUB 6080:RETURN
6630 LOCATE 25,30:COLOR 18:PRINT"Press any key to continue...";:COLOR 7
6640 KB$=INKEY$:IF KB$="" THEN 6640 ELSE RETURN
6650 LOCATE 25,30:PRINT SPC(30);:RETURN
6660 PRINT USING"$$######,.##";CVD(J$);:PRINT TAB(34) CVI(L$);
6670 PRINT
6680 PRINT"  Enter starting date (0,4,or 6 digits in MMDDYY format):  ";
6690 X%=POS(0):Y%=CSRLIN:INPUT"",KB$
6700 IF LEN(KB$)=6 THEN 6760
6710 IF LEN(KB$)=4 THEN 6750
6720 IF LEN(KB$)=0 THEN 6740
6730 BEEP:GOTO 6680
6740 FD1$=LEFT$(DATE$,2)+"-"+MID$(DATE$,4,2)+"-"+RIGHT$(DATE$,2):Y1$=RIGHT$(FD1$,2):D1$=LEFT$(FD1$,2)+MID$(FD1$,4,2):GOTO 6770
6750 FD1$=LEFT$(KB$,2)+"-"+MID$(KB$,3,2)+"-"+RIGHT$(DATE$,2):Y1$=RIGHT$(FD1$,2):D1$=(KB$):GOTO 6770
6760 FD1$=LEFT$(KB$,2)+"-"+MID$(KB$,3,2)+"-"+RIGHT$(KB$,2):Y1$=RIGHT$(KB$,2):D1$=LEFT$(KB$,4)
6770 LOCATE Y%,X%:PRINT FD1$:RETURN
6780 PRINT
6790 PRINT"  Enter ending date (0,4,or 6 digits in MMDDYY format):  ";
6800 X%=POS(0):Y%=CSRLIN:INPUT"",KB$
6810 IF LEN(KB$)=6 THEN 6870
6820 IF LEN(KB$)=4 THEN 6860
6830 IF LEN(KB$)=0 THEN 6850
6840 BEEP:GOTO 6790
6850 FD2$=LEFT$(DATE$,2)+"-"+MID$(DATE$,4,2)+"-"+RIGHT$(DATE$,2):Y2$=RIGHT$(FD2$,2):D2$=LEFT$(FD2$,2)+MID$(FD2$,4,2):GOTO 6880
6860 FD2$=LEFT$(KB$,2)+"-"+MID$(KB$,3,2)+"-"+RIGHT$(DATE$,2):Y2$=RIGHT$(FD2$,2):D2$=(KB$):GOTO 6880
6870 FD2$=LEFT$(KB$,2)+"-"+MID$(KB$,3,2)+"-"+RIGHT$(KB$,2):Y2$=RIGHT$(KB$,2):D2$=LEFT$(KB$,4)
6880 LOCATE Y%,X%:PRINT FD2$:RETURN
```
{% endraw %}

## FOS2.BAS

{% raw %}
```bas
10 ' FOS Program Section 2
15 '
20 CLEAR:DIM Z#(36):ON ERROR GOTO 4710
22 '
23 ' Drive designation in Line 25 must equal designation in Line 65 of FOS Pgm.
24 '
25 DRIVE$="A"
26 '
30 KEY OFF:COLOR 7,0:K1%=0:GOSUB 4520
40 ON KEY(1) GOSUB 920:KEY(1) ON:ON KEY(2) GOSUB 940:KEY(2) ON
50 ON KEY(9) GOSUB 4640:ON KEY(10) GOSUB 4650
60 PRINT TAB(24)"FILE MAINTENANCE AND DATA ANALYSIS.
70 PRINT STRING$(80,196):LOCATE 5,1
80 PRINT" 1 - INITIALIZE a given FOS file.  This is to be used the FIRST time
90 PRINT"     you intend to use a file.  For example, to start up your first
100 PRINT"     checking account (Checking Account #1) you would run this option
110 PRINT"     to initialize two files... Checking Account #1  Outstanding cks.
120 PRINT"     and Checking Account #1  Canceled Cks.
130 PRINT
140 PRINT" 2 - ENLARGE a file already being used.  For example, assume you are
150 PRINT"     are using Checking Account #2 and in the process of entering
160 PRINT"     data relative to a check you wrote, you receive the message:
170 PRINT"     CHECKING ACCOUNT #2  OUTSTANDING CHECKS FILE FULL, you would use
180 PRINT"     this option to add more space to that already existing file.
190 PRINT:PRINT" 3 - PLOT monthly expenses, by category, for any year, list
200 PRINT"     expense totals, by category, during any period of time, or list
210 PRINT"     tax related items over any period of time.":PRINT
220 PRINT" 9 - RETURN to main FOS menu.
230 PRINT:GOSUB 930
240 KB$=INKEY$:IF KB$="" THEN 240
250 IF K1%=1 THEN 310
260 IF KB$="1" THEN 1100
270 IF KB$="2" THEN 320
280 IF KB$="3" THEN 1590
290 IF KB$="9" THEN 310
300 BEEP:GOTO 240
310 CLS:LOCATE 10,25:PRINT"Loading FOS Program section 1...":CHAIN DRIVE$+":FOS"
320 CLOSE:K1%=0:CLS:PRINT TAB(30);:COLOR 31
330 PRINT "F I L E    E N L A R G E R":COLOR 7:PRINT
340 PRINT"  0 - Checking account #1 (Outstanding checks)
350 PRINT"  1 - Checking account #1 (Canceled checks)
360 PRINT:PRINT"  2 - Checking account #2 (Outstanding checks)
370 PRINT"  3 - Checking account #2 (Canceled checks)
380 PRINT:PRINT"  4 - Checking account #3 (Outstanding checks)
390 PRINT"  5 - Checking account #3 (Canceled checks)
400 PRINT:PRINT"  8 - Special accounts
410 PRINT"  9 - Cash Expenditures":PRINT
420 PRINT"  Enter file to be ENLARGED: ";
430 SOUND 1200,0.5:INPUT"",KB$:IF K1%=1 THEN 20
440 IF LEN(KB$)<>1 THEN BEEP:GOTO 420
450 IF KB$="8" THEN GOSUB 1080:GOTO 550
460 IF KB$="9" THEN GOSUB 1000:GOTO 680
470 IF KB$="0" THEN GOSUB 1010:GOTO 680
480 IF KB$="2" THEN GOSUB 1020:GOTO 680
490 IF KB$="4" THEN GOSUB 1030:GOTO 680
500 IF KB$="1" THEN GOSUB 1050:GOTO 800
510 IF KB$="3" THEN GOSUB 1060:GOTO 800
520 IF KB$="5" THEN GOSUB 1070:GOTO 800
530 BEEP:PRINT:PRINT"  Invalid file selected...":PRINT:GOSUB 950:GOTO 380
540 '     SPECIAL ACCOUNTS
550 PRINT:R%=1:GET#1,R%:IF A$="A" OR A$="B" THEN 570
560 IF A$="E" THEN 580 ELSE 640
570 R%=R%+1:GET#1,R%:IF A$="E" THEN 580 ELSE 570
580 PRINT"  File presently has room for a total of" R%-1 " records.":PRINT
590 INPUT"  How many ADDITIONAL records do you want space reserved for? ",KB%
600 IF K1%=1 THEN 320 ELSE KB%=KB%+R%:LSET A$="A"
610 FOR I=R% TO KB%:PUT#1,I:NEXT:LSET A$="E":PUT#1,KB%
620 PRINT:PRINT"  File has now been enlarged per your request."
630 GOSUB 950:CLS:CLOSE:GOTO 320
640 PRINT:PRINT"You cannot ENLARGE this file because you have not INITIALIZED
650 PRINT"it yet.  Please perform the INITIALIZE function.
660 CLOSE:GOSUB 950:GOTO 20
670 '     CASH EXPENDITURES  AND  CURRENT CHECKS
680 PRINT:R%=1:GET#1,R%:IF A$="A" OR A$="B" THEN 700
690 IF A$="E" THEN 710 ELSE 770
700 R%=R%+1:GET#1,R%:IF A$="E" THEN 710 ELSE 700
710 PRINT"  File presently has room for a total of" R%-1 " records.":PRINT
720 INPUT"  How many ADDITIONAL records do you want space reserved for? ",KB%
730 IF K1%=1 THEN 320 ELSE KB%=KB%+R%:LSET A$="A"
740 FOR I=R% TO KB%:PUT#1,I:NEXT:LSET A$="E":PUT#1,KB%
750 PRINT:PRINT"  File has now been enlarged as requested."
760 GOSUB 950:CLS:CLOSE:GOTO 320
770 PRINT:PRINT"You cannot ENLARGE this file because you have not INITIALIZED
780 PRINT"it yet.  Please perform the INITIALIZE function.
790 CLOSE:GOSUB 950:GOTO 20
800 PRINT:R%=1:GET#1,R%:IF A$="A" OR A$="B" THEN 820
810 IF A$="E" THEN 830 ELSE 890
820 R%=R%+1:GET#1,R%:IF A$="E" THEN 830 ELSE 820
830 PRINT"  File presently has space for a total of" R%-1 " records.":PRINT
840 INPUT"  How many ADDITIONAL records do you want space reserved for? ",KB%
850 IF K1%=1 THEN 320 ELSE KB%=KB%+R%:LSET A$="A"
860 FOR I=R% TO KB%:PUT#1,I:NEXT:LSET A$="E":PUT#1,KB%
870 PRINT:PRINT"  File has now been enlarged as requested."
880 GOSUB 950:CLS:CLOSE:GOTO 320
890 PRINT:PRINT"You cannot ENLARGE this file because you have not INITIALIZED
900 PRINT"it yet.  Please perform the INITIALIZE function.
910 CLOSE:GOSUB 950:GOTO 20
920 K1%=1:RETURN
930 LOCATE 23,30:COLOR 18:PRINT"Enter function desired:  ";:COLOR 7:SOUND 800,0.5:RETURN
940 COLOR 7,0:CLOSE:CLS:PRINT"Welcome to BASIC...":PRINT:END
950 COLOR 18:PRINT TAB(55)"Hit any key to continue..";:COLOR 7
960 KB$=INKEY$:IF KB$="" THEN 960 ELSE RETURN
970 OPEN DRIVE$+":SAVINGS1.FOS" AS 1 LEN=62:GOTO 990
980 OPEN DRIVE$+":SAVINGS2.FOS" AS 1 LEN=62
990 FIELD#1,1 AS A$,8 AS B$,8 AS C$,1 AS D$,8 AS E$,36 AS G$:RETURN
1000 OPEN DRIVE$+":CASHEXP.FOS" AS 1 LEN=59:GOTO 1040
1010 OPEN DRIVE$+":CHKCUR1.FOS" AS 1 LEN=59:GOTO 1040
1020 OPEN DRIVE$+":CHKCUR2.FOS" AS 1 LEN=59:GOTO 1040
1030 OPEN DRIVE$+":CHKCUR3.FOS" AS 1 LEN=59
1040 FIELD#1,1 AS A$,8 AS B$,8 AS C$,2 AS D$,2 AS E$,1 AS F$,37 AS G$:RETURN
1050 OPEN DRIVE$+":CHKCAN1.FOS" AS 1 LEN=59:GOTO 1040
1060 OPEN DRIVE$+":CHKCAN2.FOS" AS 1 LEN=59:GOTO 1040
1070 OPEN DRIVE$+":CHKCAN3.FOS" AS 1 LEN=59:GOTO 1040
1080 OPEN DRIVE$+":SPECIAL.FOS" AS 1 LEN=62
1090 FIELD#1,1 AS A$,8 AS B$,8 AS C$,1 AS D$,4 AS E$,40 AS G$:RETURN
1100 CLS:PRINT TAB(20);:COLOR 31:K1%=0
1110 PRINT "F I L E    I N I T I A L I Z A T I O N":COLOR 7:PRINT
1120 PRINT"  0 - Checking account  # 1  (Outstanding checks)
1130 PRINT"  1 - Checking account  # 1  (Canceled checks)
1140 PRINT:PRINT"  2 - Checking account  # 2  (Outstanding checks)
1150 PRINT"  3 - Checking account  # 2  (Canceled checks)
1160 PRINT:PRINT"  4 - Checking account  # 3  (Outstanding checks)
1170 PRINT"  5 - Checking account  # 3  (Canceled checks)
1180 PRINT:PRINT"  6 - Savings account   # 1
1190 PRINT"  7 - Savings account   # 2
1200 PRINT:PRINT"  8 - Special accounts
1210 PRINT"  9 - Cash Expenditures":PRINT
1220 PRINT"  Enter file to be INITIALIZED: ";
1230 SOUND 1300,0.5:INPUT"",KB$:IF K1%=1 THEN 20
1240 IF LEN(KB$)<>1 THEN BEEP:GOTO 1220
1250 IF KB$="6" OR KB$="7" THEN 1300 ELSE PRINT
1260 PRINT "  Enter the maximum number of records you will have in this file"
1270 PRINT "    at any one time:  ";
1280 INPUT"",KB%:IF K1%=1 THEN 1100
1290 IF KB%<2 THEN BEEP:GOTO 1260
1300 PRINT:COLOR 30:PRINT"CAUTION... This function will destroy any data ";
1310 PRINT"already in this file."
1320 COLOR 7,0:PRINT:SOUND 1600,2
1330 PRINT"  If you are sure you want to continue... enter the word";
1340 PRINT" PROCEED:  ";:INPUT"",KB1$
1350 IF K1%=1 THEN 1100
1360 IF KB1$="proceed" OR KB1$="PROCEED" THEN 1370 ELSE BEEP:GOTO 1330
1370 FILE%=VAL(KB$)
1380 IF KB$="8" THEN GOSUB 1080:GOTO 1490
1390 IF KB$="6" THEN GOSUB 970:GOTO 1510
1400 IF KB$="9" THEN GOSUB 1000:GOTO 1490
1410 IF KB$="7" THEN GOSUB 980:GOTO 1510
1420 IF KB$="0" THEN GOSUB 1010:GOTO 1530
1430 IF KB$="2" THEN GOSUB 1020:GOTO 1530
1440 IF KB$="4" THEN GOSUB 1030:GOTO 1530
1450 IF KB$="1" THEN GOSUB 1050:GOTO 1490
1460 IF KB$="3" THEN GOSUB 1060:GOTO 1490
1470 IF KB$="5" THEN GOSUB 1070:GOTO 1490
1480 BEEP:PRINT:PRINT"  Invalid file selected...":PRINT:GOSUB 950:GOTO 1100
1490 LSET A$="A"
1500 FOR R%=1 TO KB%:PUT#1,R%:NEXT:LSET A$="E":PUT#1,R%:CLOSE:GOTO 1100
1510 LSET A$="A":LSET E$=MKD$(0):FOR R%=1 TO 21:PUT#1,R%:NEXT
1520 LSET A$="E":PUT#1,R%:CLOSE:GOTO 1100
1530 LSET A$="B":GOSUB 1580:LSET B$=FDATE$:LSET C$=MKD$(0):LSET D$=MKI$(1)
1540 LSET E$=MKI$(1):LSET F$="N":LSET G$="Previous balance.":PUT#1,1
1550 LSET A$="A":FOR R%=2 TO KB%:PUT#1,R%:NEXT:LSET A$="E"
1560 PUT#1,R%:CLOSE:GOTO 1100
1570 LSET H$="A"
1580 FDATE$=LEFT$(DATE$,2)+"-"+MID$(DATE$,4,2)+"-"+RIGHT$(DATE$,2):RETURN
1590 CLOSE:K1%=0:CLS:PRINT TAB(30)"D A T A    A N A L Y S I S
1600 PRINT:PRINT:PRINT
1610 PRINT"  1 - Display monthly expenses for one category for an entire year.
1620 PRINT
1630 PRINT"  2 - Print monthly expenses for one category for an entire year.
1640 PRINT:PRINT:PRINT"  3 - Display tax deductable items.
1650 PRINT:PRINT"  4 - Print tax deductable items on printer.
1660 PRINT:PRINT:PRINT"  5 - Display total expenses by category.
1670 PRINT:PRINT"  6 - Print total expenses by category.
1680 GOSUB 930
1690 KB$=INKEY$:IF KB$="" THEN 1690
1700 IF K1%=1 THEN 20
1710 IF KB$="1" THEN B%=0:GOTO 1780
1720 IF KB$="2" THEN B%=1:GOTO 1780
1730 IF KB$="3" THEN A%=0:GOTO 3130
1740 IF KB$="4" THEN A%=1:GOTO 3310
1750 IF KB$="5" THEN B%=0:GOTO 3670
1760 IF KB$="6" THEN B%=1:GOTO 3670
1770 BEEP:GOTO 1690
1780 GOSUB 4520:PRINT"  Enter two digits for the YEAR you want analyzed or just
1790 PRINT:PRINT"  press ENTER to use the current year... ";
1800 INPUT KB2$:IF K1%=1 THEN 1590
1810 IF KB2$="" THEN KB2$=RIGHT$(DATE$,2):GOTO 1840
1820 IF LEN(KB2$)=2 THEN 1840
1830 BEEP:GOTO 1800
1840 CLS:GOSUB 4660:PRINT
1850 PRINT:PRINT"From the list above, select a category you would like plotted: ";
1860 INPUT KB%:IF K1%=1 THEN 1590
1870 IF KB%>9 AND KB%<46 THEN 1890
1880 BEEP:GOTO 1850
1890 M1#=0:M2#=0:M3#=0:M4#=0:M5#=0:M6#=0:M7#=0:M8#=0:M9#=0:M10#=0:M11#=0:M12#=0
1900 GOSUB 1010:GOSUB 2600:CLOSE:GOSUB 1020:GOSUB 2600:CLOSE:GOSUB 1030:GOSUB 2600
1910 CLOSE:GOSUB 1050:GOSUB 2600:CLOSE:GOSUB 1060:GOSUB 2600:CLOSE
1920 GOSUB 1070:GOSUB 2600:CLOSE:GOSUB 1000:GOSUB 2600:CLOSE
1930 RESTORE
1940 READ A%,KB1$:IF A%<>KB% THEN 1940
1950 GOSUB 2810:IF M13=0 THEN 2300 ELSE M15=M13/60
1960 GOSUB 1580
1970 IF B%=0 THEN 2020
1980 PRINT:BEEP:PRINT"  Insure that the printer is ready...":GOSUB 4540
1990 IF K1%=1 THEN 1590 ELSE GOSUB 4520
2000 PRINT"  Now printing requested data...
2010 LPRINT:LPRINT KB1$ "     19" KB2$ TAB(70) FDATE$:KB$=CHR$(163):GOTO 2320
2020 GOSUB 1580:CLS:PRINT KB1$"     19" KB2$ TAB(70) FDATE$:KB$=CHR$(205)
2030 PRINT:PRINT
2040 PRINT"Jan  ";:PRINT USING"$$######,.##";M1#;
2050 PRINT TAB(20);STRING$((M1#/M15),KB$)
2060 PRINT"Feb  ";:PRINT USING"$$######,.##";M2#;
2070 PRINT TAB(20);STRING$((M2#/M15),KB$)
2080 PRINT"Mar  ";:PRINT USING"$$######,.##";M3#;
2090 PRINT TAB(20);STRING$((M3#/M15),KB$):PRINT
2100 PRINT"Apr  ";:PRINT USING"$$######,.##";M4#;
2110 PRINT TAB(20);STRING$((M4#/M15),KB$)
2120 PRINT"May  ";:PRINT USING"$$######,.##";M5#;
2130 PRINT TAB(20);STRING$((M5#/M15),KB$)
2140 PRINT"Jun  ";:PRINT USING"$$######,.##";M6#;
2150 PRINT TAB(20);STRING$((M6#/M15),KB$):PRINT
2160 PRINT"Jul  ";:PRINT USING"$$######,.##";M7#;
2170 PRINT TAB(20);STRING$((M7#/M15),KB$)
2180 PRINT"Aug  ";:PRINT USING"$$######,.##";M8#;
2190 PRINT TAB(20);STRING$((M8#/M15),KB$)
2200 PRINT"Sep  ";:PRINT USING"$$######,.##";M9#;
2210 PRINT TAB(20);STRING$((M9#/M15),KB$):PRINT
2220 PRINT"Oct  ";:PRINT USING"$$######,.##";M10#;
2230 PRINT TAB(20);STRING$((M10#/M15),KB$)
2240 PRINT"Nov  ";:PRINT USING"$$######,.##";M11#;
2250 PRINT TAB(20);STRING$((M11#/M15),KB$)
2260 PRINT"Dec  ";:PRINT USING"$$######,.##";M12#;
2270 PRINT TAB(20);STRING$((M12#/M15),KB$)
2280 PRINT:PRINT:PRINT"  T O T A L   ";USING"$$#######,.##";M14#
2290 PRINT:PRINT:CLOSE:GOSUB 4540:GOTO 1840
2300 PRINT:PRINT"  There were no expenses for the selected category..."
2310 GOTO 2290
2320 LPRINT:LPRINT"Jan  ";:LPRINT USING"$$######,.##";M1#;
2330 LPRINT TAB(20);STRING$((M1#/M15),KB$)
2340 LPRINT"Feb  ";:LPRINT USING"$$######,.##";M2#;
2350 LPRINT TAB(20);STRING$((M2#/M15),KB$)
2360 LPRINT"Mar  ";:LPRINT USING"$$######,.##";M3#;
2370 LPRINT TAB(20);STRING$((M3#/M15),KB$):LPRINT
2380 LPRINT"Apr  ";:LPRINT USING"$$######,.##";M4#;
2390 LPRINT TAB(20);STRING$((M4#/M15),KB$)
2400 LPRINT"May  ";:LPRINT USING"$$######,.##";M5#;
2410 LPRINT TAB(20);STRING$((M5#/M15),KB$)
2420 LPRINT"Jun  ";:LPRINT USING"$$######,.##";M6#;
2430 LPRINT TAB(20);STRING$((M6#/M15),KB$):LPRINT
2440 LPRINT"Jul  ";:LPRINT USING"$$######,.##";M7#;
2450 LPRINT TAB(20);STRING$((M7#/M15),KB$)
2460 LPRINT"Aug  ";:LPRINT USING"$$######,.##";M8#;
2470 LPRINT TAB(20);STRING$((M8#/M15),KB$)
2480 LPRINT"Sep  ";:LPRINT USING"$$######,.##";M9#;
2490 LPRINT TAB(20);STRING$((M9#/M15),KB$):LPRINT
2500 LPRINT"Oct  ";:LPRINT USING"$$######,.##";M10#;
2510 LPRINT TAB(20);STRING$((M10#/M15),KB$)
2520 LPRINT"Nov  ";:LPRINT USING"$$######,.##";M11#;
2530 LPRINT TAB(20);STRING$((M11#/M15),KB$)
2540 LPRINT"Dec  ";:LPRINT USING"$$######,.##";M12#;
2550 LPRINT TAB(20);STRING$((M12#/M15),KB$)
2560 LPRINT:LPRINT"  T O T A L   ";USING"$$#######,.##";M14#
2570 LPRINT:LPRINT:CLOSE:GOTO 1840
2580 END
2590 '    READ A FILE AND ACCUMULATE TOTALS BY MONTH
2600 GET#1:IF A$="E" THEN RETURN
2610 IF A$="B" OR A$="M" THEN 2650
2620 IF A$="A" THEN 2630 ELSE RETURN
2630 GET#1:IF A$="E" THEN RETURN
2640 IF A$<>"B" AND A$<>"M" THEN 2630
2650 IF CVI(E$)<>KB% THEN 2630
2660 IF RIGHT$(B$,2)<>KB2$ THEN 2630
2670 A1$=LEFT$(B$,2)
2680 IF A1$="01" THEN M1#=M1#+CVD(C$):GOTO 2630
2690 IF A1$="02" THEN M2#=M2#+CVD(C$):GOTO 2630
2700 IF A1$="03" THEN M3#=M3#+CVD(C$):GOTO 2630
2710 IF A1$="04" THEN M4#=M4#+CVD(C$):GOTO 2630
2720 IF A1$="05" THEN M5#=M5#+CVD(C$):GOTO 2630
2730 IF A1$="06" THEN M6#=M6#+CVD(C$):GOTO 2630
2740 IF A1$="07" THEN M7#=M7#+CVD(C$):GOTO 2630
2750 IF A1$="08" THEN M8#=M8#+CVD(C$):GOTO 2630
2760 IF A1$="09" THEN M9#=M9#+CVD(C$):GOTO 2630
2770 IF A1$="10" THEN M10#=M10#+CVD(C$):GOTO 2630
2780 IF A1$="11" THEN M11#=M11#+CVD(C$):GOTO 2630
2790 M12#=M12#+CVD(C$):GOTO 2630
2800 '    DETERMINE WHICH NOMTH HAS HIGHEST COST
2810 M13=0:IF M1#>M13 THEN M13=M1#
2820 IF M2#>M13 THEN M13=M2#
2830 IF M3#>M13 THEN M13=M3#
2840 IF M4#>M13 THEN M13=M4#
2850 IF M5#>M13 THEN M13=M5#
2860 IF M6#>M13 THEN M13=M6#
2870 IF M7#>M13 THEN M13=M7#
2880 IF M8#>M13 THEN M13=M8#
2890 IF M9#>M13 THEN M13=M9#
2900 IF M10#>M13 THEN M13=M10#
2910 IF M11#>M13 THEN M13=M11#
2920 IF M12#>M13 THEN M13=M12#
2930 M14#=M1#+M2#+M3#+M4#+M5#+M6#+M7#+M8#+M9#+M10#+M11#+M12#:RETURN
2940 DATA 10,"Appliances.",22,"Entertainment."
2950 DATA 34,"Miscellaneous.",11,"Automobile Exp."
2960 DATA 23,"Food.",35,"Mortgage."
2970 DATA 12,"Capital Inv. (Auto)",24,"Furniture."
2980 DATA 36,"Paper/Magazines",13,"Capital Inv. (Bldgs)"
2990 DATA 25,"Gasoline/Oil (Auto).",37,"Supplies"
3000 DATA 14,"Capital Inv. (Other)",26,"Gas/Oil (Heating)."
3010 DATA 38,"Taxes.",15,"Cash Withdrawal."
3020 DATA 27,"Hobbies",39,"Telephone."
3030 DATA 16,"Clothing.",28,"Insurance."
3040 DATA 40,"Tools.",17,"Dental."
3050 DATA 29,"Interest.",41,"Tractor/Mower."
3060 DATA 18,"Donations (Church)",30,"Lawn/Garden."
3070 DATA 42,"Transfer to Invest.",19,"Donations (Other)."
3080 DATA 31,"Maint. (Bldgs).",43,"Transfer to Savings"
3090 DATA 20,"Education Exp.",32,"Maint. (Other)."
3100 DATA 44,"Vacation.",21,"Electricity."
3110 DATA 33,"Medical.",45,"Water / Sewer cost."
3120 DATA 0,"END"
3130 GOSUB 4520:GOSUB 4200:IF K1%=1 THEN 1590
3140 GOSUB 4310:IF K1%=1 THEN 1590
3150 GOSUB 4520:B%=2:PRINT"Reading Checking Account #1 files...":GOSUB 4560
3160 GOSUB 1050:GOSUB 3480:CLOSE:GOSUB 1010:GOSUB 3480:CLOSE
3170 PRINT"End of Checking Account #1 data.
3180 GOSUB 4540:IF K1%=1 THEN 1590
3190 GOSUB 4520:B%=2:PRINT"Reading Checking Account #2 files...":GOSUB 4560
3200 GOSUB 1060:GOSUB 3480:CLOSE:GOSUB 1020:GOSUB 3480:CLOSE
3210 PRINT"End of Checking Account #2 data.
3220 GOSUB 4540:IF K1%=1 THEN 1590
3230 GOSUB 4520:B%=2:PRINT"Reading Checking Account #3 files...":GOSUB 4560
3240 GOSUB 1070:GOSUB 3480:CLOSE:GOSUB 1030:GOSUB 3480:CLOSE
3250 PRINT"End of Checking Account #3 data.
3260 GOSUB 4540:IF K1%=1 THEN 1590
3270 GOSUB 4520:B%=2:PRINT"Reading Cash Expenditures file...":GOSUB 4560
3280 GOSUB 1000:GOSUB 3480:CLOSE
3290 PRINT"End of Cash Expenditures data.
3300 GOSUB 4540:GOTO 1590
3310 B%=6:P%=1:K9%=0:GOSUB 4520:GOSUB 4200:IF K1%=1 THEN 1590
3320 GOSUB 4310:IF K1%=1 THEN 1590
3330 KEY(9) ON:KEY(10) ON:SOUND 1200,0.5
3340 PRINT:PRINT"  Insure that the printer is ready.":GOSUB 4540
3350 IF K1%=1 THEN 1590 ELSE GOSUB 4520
3360 PRINT:PRINT"  To temporarily stop the printer, press the F9 key.
3370 PRINT:PRINT"  To STOP the printer and return to MENU, press the F1 key.
3380 LPRINT"TAX RELATED EXPENDITURES...     From: " FD1$ "    To: " FD2$;
3390 LPRINT TAB(70)"PAGE: " P%:LPRINT
3400 GOSUB 4600:LPRINT:LPRINT"CHECKING ACCOUNT #1."
3410 GOSUB 1050:GOSUB 3480:CLOSE:GOSUB 1010:GOSUB 3480:CLOSE
3420 B%=B%+2:LPRINT:LPRINT"CHECKING ACCOUNT #2."
3430 GOSUB 1060:GOSUB 3480:CLOSE:GOSUB 1020:GOSUB 3480:CLOSE
3440 B%=B%+2:LPRINT:LPRINT"CHECKING ACCOUNT #3."
3450 GOSUB 1070:GOSUB 3480:CLOSE:GOSUB 1030:GOSUB 3480:CLOSE
3460 B%=B%+2:LPRINT:LPRINT"CASH EXPENDITURES FILE."
3470 GOSUB 1000:GOSUB 3480:CLOSE:LPRINT CHR$(140):GOTO 1590
3480 GET#1:IF A$="B" THEN 3520 ELSE RETURN
3490 GET#1:IF A$="E" THEN RETURN
3500 IF K1%=1 THEN 1590
3510 IF A$="A" THEN 3490
3520 IF F$="N" OR F$="n" THEN 3490
3530 Y3$=RIGHT$(B$,2):D3$=LEFT$(B$,2)+MID$(B$,4,2)
3540 IF Y1$=Y2$ THEN 3580
3550 IF Y3$=Y1$ THEN 3630
3560 IF Y3$=Y2$ THEN 3640
3570 IF Y3$>Y1$ AND Y3$<Y2$ THEN 3600 ELSE 3490
3580 IF Y3$<>Y2$ THEN 3490
3590 IF D3$<D1$ OR D3$>D2$ THEN 3490
3600 IF A%=0 THEN GOSUB 4420:GOTO 3490
3610 IF K9%=1 THEN 3650
3620 GOSUB 4460:GOTO 3490
3630 IF D3$=>D1$ THEN 3600 ELSE 3490
3640 IF D3$>D2$ THEN 3490 ELSE 3600
3650 LOCATE 24,5:PRINT"Printer stopped by F9 key.  To continue, press F10 key.";
3660 GOTO 3610
3670 FOR C%=1 TO 36:Z#(C%)=0:NEXT
3680 CLOSE:GOSUB 4520:GOSUB 4200:IF K1%=1 THEN 1590
3690 GOSUB 4310:IF K1%=1 THEN 1590
3700 GOSUB 4520:PRINT"  Reading Checking Account #1 files...
3710 GOSUB 1010:GOSUB 3840:CLOSE:GOSUB 1050:GOSUB 3840:CLOSE
3720 PRINT"  Reading Checking Account #2 files...
3730 GOSUB 1020:GOSUB 3840:CLOSE:GOSUB 1060:GOSUB 3840:CLOSE
3740 PRINT"  Reading Checking Account #3 files...
3750 GOSUB 1030:GOSUB 3840:CLOSE:GOSUB 1070:GOSUB 3840:CLOSE
3760 PRINT"  Reading Cash Expenditures file...
3770 GOSUB 1000:GOSUB 3840:CLOSE:IF B%=1 THEN 3790
3780 GOSUB 3990:GOSUB 4540:GOTO 1590
3790 PRINT:BEEP:PRINT"  Insure that the printer is ready...":GOSUB 4540
3800 IF K1%=1 THEN 1590 ELSE GOSUB 4520
3810 PRINT"  Now printing requested data..."
3820 GOSUB 4110:GOTO 1590
3830 '     GET A RECORD and ADD AMOUNT TO ARRAY.
3840 GET#1:IF A$="B" OR A$="M" THEN 3880 ELSE RETURN
3850 GET#1:IF A$="E" THEN RETURN
3860 IF K1%=1 THEN 1590
3870 IF A$="A" THEN 3850
3880 Y3$=RIGHT$(B$,2):D3$=LEFT$(B$,2)+MID$(B$,4,2)
3890 IF Y1$=Y2$ THEN 3930
3900 IF Y3$=Y1$ THEN 3970
3910 IF Y3$=Y2$ THEN 3980
3920 IF Y3$>Y1$ AND Y3$<Y2$ THEN 3950 ELSE 3850
3930 IF Y3$<>Y2$ THEN 3850
3940 IF D3$<D1$ OR D3$>D2$ THEN 3850
3950 C%=(CVI(E$)-9):IF C%<1 OR C%>36 THEN 3850
3960 Z#(C%)=Z#(C%)+CVD(C$):GOTO 3850
3970 IF D3$=>D1$ THEN 3950 ELSE 3850
3980 IF D3$>D2$ THEN 3850 ELSE 3950
3990 GOSUB 4100:RESTORE:FOR C%=10 TO 30
4000 READ A%,KB$:IF A%=0 THEN RESTORE
4010 IF A%<>C% THEN 4000
4020 PRINT TAB(5) A% " -  " KB$ TAB(36) USING"$$######,.##";Z#(C%-9):NEXT
4030 GOSUB 4540:RESTORE:GOSUB 4100:FOR C%=31 TO 45
4040 READ A%,KB$:IF A%=0 THEN RESTORE
4050 IF A%<>C% THEN 4040
4060 PRINT TAB(5) A% " -  " KB$ TAB(36) USING"$$######,.##";Z#(C%-9):NEXT
4070 A#=0:FOR C%=1 TO 36:A#=A#+Z#(C%):NEXT
4080 A#=A#-Z#(6)
4090 PRINT:PRINT TAB(13) "GRAND TOTAL:" TAB(35) USING"$$#######,.##";A#:RETURN
4100 GOSUB 4520:PRINT"E X P E N S E   T O T A L S        FROM: " FD1$ "     TO: " FD2$:PRINT:RETURN
4110 GOSUB 4190:RESTORE:FOR C%=10 TO 45
4120 READ A%,KB$:IF A%=0 THEN RESTORE
4130 IF A%<>C% THEN 4120
4140 LPRINT TAB(5) A% " -  " KB$ TAB(36) USING"$$######,.##";Z#(C%-9):NEXT
4150 A#=0:FOR C%=1 TO 36:A#=A#+Z#(C%):NEXT
4160 A#=A#-Z#(6)
4170 LPRINT:LPRINT TAB(13) "GRAND TOTAL:" TAB(35) USING"$$#######,.##";A#
4180 LPRINT CHR$(140):RETURN
4190 LPRINT:LPRINT"E X P E N S E   T O T A L S        FROM: " FD1$ "     TO: " FD2$:LPRINT STRING$(80,163):LPRINT:RETURN
4200 PRINT
4210 PRINT"  Enter starting date (0,4, or 6 digits in MMDDYY format):  ";
4220 X%=POS(0):Y%=CSRLIN:INPUT"",KB$
4230 IF LEN(KB$)=6 THEN 4290
4240 IF LEN(KB$)=4 THEN 4280
4250 IF LEN(KB$)=0 THEN 4270
4260 BEEP:GOTO 4210
4270 FD1$=LEFT$(DATE$,2)+"-"+MID$(DATE$,4,2)+"-"+RIGHT$(DATE$,2):Y1$=RIGHT$(FD1$,2):D1$=LEFT$(FD1$,2)+MID$(FD1$,4,2):GOTO 4300
4280 FD1$=LEFT$(KB$,2)+"-"+MID$(KB$,3,2)+"-"+RIGHT$(DATE$,2):Y1$=RIGHT$(FD1$,2):D1$=KB$:GOTO 4300
4290 FD1$=LEFT$(KB$,2)+"-"+MID$(KB$,3,2)+"-"+RIGHT$(KB$,2):Y1$=RIGHT$(KB$,2):D1$=LEFT$(KB$,4)
4300 LOCATE Y%,X%:PRINT FD1$:RETURN
4310 PRINT
4320 PRINT"  Enter ending date (0,4, or 6 digits in MMDDYY format):  ";
4330 X%=POS(0):Y%=CSRLIN:INPUT"",KB$
4340 IF LEN(KB$)=6 THEN 4400
4350 IF LEN(KB$)=4 THEN 4390
4360 IF LEN(KB$)=0 THEN 4380
4370 BEEP:GOTO 4320
4380 FD2$=LEFT$(DATE$,2)+"-"+MID$(DATE$,4,2)+"-"+RIGHT$(DATE$,2):Y2$=RIGHT$(FD2$,2):D2$=LEFT$(FD2$,2)+MID$(FD2$,4,2):GOTO 4410
4390 FD2$=LEFT$(KB$,2)+"-"+MID$(KB$,3,2)+"-"+RIGHT$(DATE$,2):Y2$=RIGHT$(FD2$,2):D2$=KB$:GOTO 4410
4400 FD2$=LEFT$(KB$,2)+"-"+MID$(KB$,3,2)+"-"+RIGHT$(KB$,2):Y2$=RIGHT$(KB$,2):D2$=LEFT$(KB$,4)
4410 LOCATE Y%,X%:PRINT FD2$:RETURN
4420 PRINT CVI(D$) TAB(10) B$ TAB(20) USING"$$######,.##";CVD(C$);
4430 PRINT TAB(34) CVI(E$) TAB(40) F$ TAB(44) G$;:B%=B%+1
4440 IF B%<21 THEN RETURN
4450 B%=0:GOSUB 4540:GOSUB 4520:GOSUB 4560:RETURN
4460 LPRINT CVI(D$) TAB(10) B$ TAB(20) USING"$$######,.##";CVD(C$);
4470 LPRINT TAB(34) CVI(E$) TAB(40) F$ TAB(44) LEFT$(G$,36):B%=B%+1
4480 IF B%<62 THEN RETURN
4490 P%=P%+1:LPRINT CHR$(140):LPRINT"TAX RELATED EXPENDITURES...     From: ";
4500 LPRINT FD1$ "    To: " FD2$ TAB(70)"Page: " P%:LPRINT:B%=4
4510 GOSUB 4600:RETURN
4520 CLS:FDATE$=LEFT$(DATE$,2)+"-"+MID$(DATE$,4,2)+"-"+RIGHT$(DATE$,2)
4530 LOCATE 25,72:PRINT FDATE$;:LOCATE 1,1:RETURN
4540 LOCATE 25,25:COLOR 18:PRINT"Press any key to continue...";:COLOR 7
4550 KB$=INKEY$:IF KB$="" THEN 4550 ELSE RETURN
4560 PRINT" ITEM#     DATE       AMOUNT     CODE TAX";
4570 PRINT"         D E S C R I P T I O N"
4580 PRINT" "+STRING$(5,45)+"   "+STRING$(8,45)+"   "+STRING$(11,45);
4590 PRINT"   "+STRING$(2,45)+"   "+CHR$(45)+"   "+STRING$(37,45);:RETURN
4600 LPRINT" ITEM#     DATE       AMOUNT     CODE TAX";
4610 LPRINT"         D E S C R I P T I O N"
4620 LPRINT" "+STRING$(5,45)+"   "+STRING$(8,45)+"   "+STRING$(11,45);
4630 LPRINT"   "+STRING$(2,45)+"   "+CHR$(45)+"   "+STRING$(37,45);:RETURN
4640 K9%=1:RETURN
4650 K9%=0:LOCATE 24,1:PRINT TAB(70);:RETURN
4660 LOCATE 1,1:RESTORE
4670 READ A%,KB$:IF A%=0 THEN RETURN
4680 PRINT A% "- " KB$;:READ A%,KB$:IF A%=0 THEN RETURN
4690 PRINT TAB(28) A% "- " KB$;:READ A%,KB$:IF A%=0 THEN RETURN
4700 PRINT TAB(54) A% "- " KB$:GOTO 4670
4710 IF ERR=24 THEN RESUME
4720 IF ERR=6 THEN PRINT"Number too large... re-enter: ":RESUME
4730 ON ERROR GOTO 0:RESUME
```
{% endraw %}

## HAL-PC.TXT

{% raw %}
```
                            H A L - P C

               The Houston Area League of PC Users


     People wishing to start users groups frequently write us 
asking for guidelines and for information on how HAL-PC was 
organized.

MEETING SPACE:

     HAL-PC was organized in the early spring of 1982 by a few 
people who got together at a ComputerLand. As the group grew, 
meetings were moved to a nearby church.  Again the group quickly 
outgrew the space available to us at the church, so meetings were 
moved to a Sears Business Center (SBC).

     At the SBC, the group once again grew quickly from about 50 
to over a hundred, and the search was on for a place that would 
hold at least 150.  At the time, we wanted to find a place that 
would let us meet for free.  The University of Houston provided 
lecture halls that fit the bill, but it is not conveniently 
located, and traffic is a problem.

     After one meeting at UH, a local blood bank center offered 
us a beautiful meeting room, free parking, central location, and 
free refreshments.  They never even asked for blood!  But they 
could only hold 150, and after two meetings, we had outgrown that 
space. With great reluctance we left the blood center and moved 
back to UH for one meeting while we searched for quarters that 
would hold at least 250. There are not that many free 250-seat 
auditoriums around, we found out.

     Hotel meeting rooms would normally be beyond our budget, but 
a member found a very nice one that would let us have a 250+ seat 
room for $100, with more room available for future expansion. We 
decided that it was worth that much to have a permanent home, and 
took it.  We have had three meetings there and everyone seems to 
like it.  Members no longer have to guess at where the next 
meeting is going to be. Our membership is now over 300 with about 
250 members and guests at the last meeting in September.
.pa
SPECIAL INTEREST GROUPS (SIGS):

     In December 1982, it appeared that the membership, then at 
about 100, was too large to meet everybody's needs at one monthly 
meeting.  Members were given a SIG survey form to fill out 
indicating areas of interest.  Those who indicated a willingness 
to lead a SIG were given a list of people who had shown a high 
level of interest in that SIG and were left to their own devices 
to organize their SIG. 

     We had hoped that SIGs would not attract more than about 20 
members each. A small group can meet almost any where and would 
be more conducive, we felt, to more informal and participative 
meetings. Meeting space, as expected has not been much of a 
problem. The first SIG meetings were held at KINDERKARE, which 
has child care centers all over Houston, but no PCs.  A local 
computer center, COMNET, has been generous in allowing the SIGS 
to meet at their centrally-located store which has PCs to use.

     The first few meetings of each SIG were awkward because 
nobody really knew what a SIG is supposed to do.  We assured 
potential SIG leaders that expertise was not required, only the 
desire to organize.  A SIG could always invite an expert to come 
to a meeting to lecture or answer questions, if desired. 

     The SIGs have become quite successful, thanks to some 
terrific people who have contributed their time to lead the 
groups. Our current active SIGs are Accounting/Business, Assembly 
Language, BASIC, Beginning Users, APL, DBASE II, 1-2-3, Graphics, 
Games, Hardware, Stock Market, and Telecommunications. We 
encourage anyone to put their name and phone number in the 
newsletter if they want to get a SIG going. SIGs under 
development include Engineering, Petroleum & Geology, "C", 
Utilities, Fortran, and Medical.

     The two lessons that we learned about forming SIGs is that 
people are willing to help organize if you let them and that 
people should not be concerned about not being an "expert" in the 
area nor knowing exactly what the SIG is going to do.


THE SOFTWARE LIBRARY:

     Maintaining and distributing the software library has been 
the most difficult aspect of running HAL-PC.  We quickly had 
about a dozen single-sided disorganized disks. There was a lot of 
duplication and "junk" (non-working) programs mixed in with some 
good stuff. As for distribution, people came early to meetings at 
the Sears Business Center and used the computers there to copy 
the library. They usually kept copying while the meeting was 
going on, making it difficult to have a good meeting. That 
problem was solved when we moved to meeting locations that had no 
computers to use, but that made it even harder to get copies.

     By January 1983, we had over 30 single-sided disorganized 
disks with virtually no means of distribution.  We asked for 
volunteers and started working on sorting out the software, 
getting rid of duplications and programs that did not work. 
Although people were willing to help organize the software, 
coordinating their work was probably harder for the software 
librarian than if he had simply done all the work himself to 
start with. It may be best to just have one person do all the 
work on the library, if anyone has the time.

     At one meeting, we asked how many still had single-sided 
drives. About three people out of over a hundred raised their 
hands, so we switched to doubled-sided disks. Not enough people 
are using DOS 2.0 to allow going to 9-sector disks.

     To make it easier for people to find and get copies of 
software in their main areas of interest, we grouped programs 
onto disks in the following areas:  Accounting/Business, 
Communications, Demo, Games, Utilities and Word Processing.      
With the massive amount of excellent public domain software 
coming out each month, it is a big job trying to keep up with it. 
We plan on having a "disk of the month" with new stuff on it for 
people who already have the rest of library, and also integrating 
the new programs into the library by category, to maintain order 
over the long run.

     We had intended to give each SIG leader a copy of the 
library and use the SIGs for distributing software; however, the 
SIGs had the same problems with copying disrupting meetings that 
we had at the main meeting. Also, only about half the members 
(maybe less) ever go to SIG meetings.

     We offered to give a set of disks to anyone who would make 
sets for at least ten other members. It remains to be seen how 
this will go over. We have also taken to selling sets to members 
at $3.50 a disk. This allows a small profit to go the person 
making the copies to compensate for wear and tear on their disk 
drives. Unfortunately, some Freeware-types have taken a stand 
against User Groups charging a copying fee for distributing their 
software (specifically, PC-TALK).

     We have not tried selling our library to outsiders yet, but 
we plan to start exchanging with other groups soon. We currently 
get most of the new software from a member (now living in 
Georgia) who is constantly downloading programs from bulletin 
boards. We have a disk file library program (written by a HAL-PC 
member and available to any group who wants it) that we use to 
keep track of the library and to automatically compare it to 
other libraries.

     
LEADERSHIP:

     Being an officer in a user group is personally rewarding. 
It is a well known axiom that what you get out of an endevour is 
relative to what you put into it.  On the other hand, it is a lot 
of work. So we have election of officers every six months, with 
burn-out time probably being shorter than that.

     HAL-PC has a President who presides over the monthly 
main meeting and directors meeting.  The Vice President's primary 
specific responsibility is to find speakers for the monthly 
meeting.  In general, the VP, like the other officers, is always 
thinking of activities for the group and of ways to promote the 
group.  The other elective offices are Secretary and Treasurer. 
All elected officers are on the Board of Directors.

     The newsletter editor probably carries the greatest workload 
and is not elected, so he has no way to get out from under. Heh, 
heh! We planned it that way. We also have a Group Purchase person 
and a Liaison person who are "appointed" (anyone who volunteers) 
to their positions.

     The SIG leaders are the people who originally volunteered 
and no provision has been made to let them escape through 
elections. We leave the running of each SIG up to the SIG. We do 
require that all people attending SIGs be members of HAL-PC.
The SIG leaders are automatically on the Board of Directors.

     The Board of Directors meets once a month, 45 minutes before 
the main meeting, to vote on major issues such as amount of dues, 
HAL-PC expenditures, etc. The purpose of forming a Board of 
Directors was to make it easier to taken action on behalf of the 
group without having to bring everything to a vote of the 
membership.


NEWSLETTER AND MAILING LIST:

     The newsletter is a vital element of HAL-PC.  In our mobile 
days, it was only way to alert members as to where the next 
meeting would be. Standard features of the newletter are the 
agenda for the next meeting, a recap of the last meeting, and the 
times and places for upcoming SIG meetings, as well as reports on 
SIG meetings. Another section features selections from the 
software library each month. The rest of the 15-25 page 
newsletter consists of articles contributed by members.

     Advertising space is sold at moderate rates, and the mailing 
list is sold to appropriate vendors for one-time use. We have a 
bulk mailing permit. It saves the group money on postage, but 
takes more time and effort to mail the newsletters.

     The newsletter is uploaded from the PC of the editor to the 
mainframe of a company who has donated the computer time and 
supplies. The mainframe formats the text and prints it out on a 
laser printer. We normally print about 500 issues, with the 
extras going to visitors, magazines, other groups, and local 
computer stores.

     
DUES AND OTHER MONEY MATTERS:

     HAL-PC charges dues of $25 a year, the bulk of which goes 
for room rent and newsletter expenses.  Although the newsletter 
printing is donated, the sorting, labeling, stapling, stamping 
and mailing cost money.

     At the present time, we are not involved in any money-
raising activities. Our rationale is that money raised by selling 
items to the members is the same money we could get by raising 
the dues, if needed, so why complicate things. In addition, we 
have several vendors who regularly come to meetings and sell 
disks and other supplies at very good prices.  We do make group 
purchases, but the discounts are passed on directly to the 
purchasers.

     All memberships expire on May 31 of each year. People who 
join during the fiscal year pay prorated dues. The advantage is 
that we do not have to keep track of everyone's expiration date 
and that we can have one big push per year for membership 
renewals. On the downside, all the money comes at once, and must 
be carefully budgeted to last a year. My feeling is that it would 
be better to let memberships expire and be renewed year-round.

     One time, about $2500 worth of membership dues were 
deposited without first recording the names - a big mistake that 
caused a lot of problems when many of those people (including 
myself) were dropped from the newsletter mailing list for non-
payment of dues.

     We charge vendors a token amount of $5 to introduces 
themselves at the start of the meeting and to set up a table to 
vend from at the end of the meeting. One vendor, Paige Computer 
Consultants, has been with the group from the start and has done 
a lot for us. One of his services is to provide a dial-up 
bulletin board (at 713-933-7353) where members can exchange 
messages and download software.

     
GETTING SPEAKERS:

     Getting speakers whose topic will interest most of 300 
different people is a problem.  For instance, a lecture on BASIC 
programming would probably appeal to only about half the people 
to start with, and for many of those people the lecture is likely 
to be either too simple or too technical. As a result, we leave 
narrow areas of interest to the SIGs.

     Our recent speakers have been representatives from Digital 
Research, from MicroPro, and from Tandy (with the Model 100). 
At future meetings, we have reps from Microsoft and from Grid 
Computers scheduled. These speakers are local representatives 
from these companies, they do not have PR people at headquarters 
that fly around giving presentations to user groups. 

     We ask the speakers to present a general overview of their 
products and not get too involved in technical details.  When 
a speaker gets in front of a group of 250 and tries to show on a 
13-inch monitor how some program works, he is sure to bomb. After 
the formal meeting is over, detailed demonstrations are given for 
those who want to cluster around the monitors. It would be nice 
to have a giant-screen TV with RGB input, but those cost about 
$10,000 and nobody has offered to donate one.

     We usually have about 15 minutes for general questions and 
answers about the PC hardware and software problems and about 20 
minutes for announcements. We tried letting SIG leaders tell 
about their monthly meetings, but not everyone was interested, 
and we now confine that to the newsletter.  

     The most important thing about the monthly meeting is to 
have subjects that are very general and to keep the meeting 
moving briskly.  An hour and a half is a long time to sit still 
and listen.  At our meetings, only the main speaker for the 
evening gets to talk for more than two minutes at a time, and he 
is asked to keep his talk to no more than 20 minutes.  We start 
right on time and leave time for informal discussions after the 
meeting is over.


MISCELLANEOUS:

      There a lot of things the group could do that we are not 
presently involved in. We tried having a hardcopy library of 
magazines and books, but the idea died out from not having a 
place to store the materials. A good alternative is to have a 
database of subjects of articles published in PC-related 
magazines.

     I would like to see PC user groups across the country band 
together to facilitate exchanging ideas and software - maybe even 
have an annual meeting somewhere.  One example of such 
cooperation would be to have a survey form that each group would 
have its members fill out. The compiled results reported from 
each group could provide some valuable information that could 
help companies and users communicate.

     Someone suggested that we devise a "New Member Package" 
consisting of a disk with some of the best public domain software 
on it, a catalog of the entire library and this write-up of our 
history. The same person suggested that we give something like a 
couple of blank disks to anyone contributing an article to the 
newsletter. I expect that we will act on both of these 
suggestions soon.


IN CONCLUSION,

     That's our life story. I would like to hear back from other 
groups. Have fun!
```
{% endraw %}

## MUSIC.BAS

{% raw %}
```bas
10 CLS: WIDTH 80
20 CLS:KEY OFF
30 PRINT "                  ╔══════════════════════════╗"
40 PRINT "                  ║ MUSIC BY RICHARD JACQUES ║"
50 PRINT "                  ║         FOR THE          ║"
60 PRINT "                  ║           IBM            ║"
70 PRINT "                  ╚══════════════════════════╝"
80 PRINT
90 PRINT "                    PRESS ANY KEY TO CONTINUE"
100 PRINT " ___________________________________________________________________"
110 PRINT " ███   ███   ████ ████   ███   ███   ███ ████ ████   ███   ████ ████"
120 PRINT " ███   ███   ████ ████   ███   ███   ███ ████ ████   ███   ████ ████"
130 PRINT " ███   ███   ████ ████   ███   ███   ███ ████ ████   ███   ████ ████"
140 PRINT " ███   ███   ████ ████   ███   ███   ███ ████ ████   ███   ████ ████"
150 PRINT " ███   ███   ████ ████   ███   ███   ███ ████ ████   ███   ████ ████"
160 PRINT " ████ █████ █████ █████ █████ █████ ████ ████ █████ █████ █████ ████"
170 PRINT " ████ █████ █████ █████ █████ █████ ████ ████ █████ █████ █████ ████"
180 PRINT " ████ █████ █████ █████ █████ █████ ████ ████ █████ █████ █████ ████"
190 PRINT " ████ █████ █████ █████ █████ █████ ████ ████ █████ █████ █████ ████"
191 PRINT " ___________________________________________________________________"
200 IF INKEY$="" THEN 200
210 CLS
211 PRINT "                     MUSIC BY RICHARD JACQUES"
220 PRINT " ___________________________________________________________________"
230 PRINT " ███   ███   ████ ████   ███   ███   ███ ████ ████   ███   ████ ████"
240 PRINT " ███   ███   ████ ████   ███   ███   ███ ████ ████   ███   ████ ████"
250 PRINT " ███   ███   ████ ████   ███   ███   ███ ████ ████   ███   ████ ████"
260 PRINT " ███   ███   ████ ████   ███   ███   ███ ████ ████   ███   ████ ████"
270 PRINT " ███   ███   ████ ████   ███   ███   ███ ████ ████   ███   ████ ████"
280 PRINT " ████ █████ █████ █████ █████ █████ ████ ████ █████ █████ █████ ████"
290 PRINT " ████ █████ █████ █████ █████ █████ ████ ████ █████ █████ █████ ████"
300 PRINT " ████ █████ █████ █████ █████ █████ ████ ████ █████ █████ █████ ████"
310 PRINT " ████_█████_█████_█████_█████_█████_████_████_█████_█████_█████_████"
320 LOCATE 13 ,43:PRINT "  F1 C    F2 D"
330 LOCATE 14,43:PRINT "  F3 E    F4 F"
340 LOCATE 15,43:PRINT "  F5 G    F6 A"
350 LOCATE 16 ,43:PRINT "  F7 B    F8 O5C"
360 LOCATE 15,60:PRINT "  F9 SLOW DRUMBEAT "
370 LOCATE 16,60:PRINT "  F10 FAST DRUMBEAT"
380 LOCATE 22,10:PRINT " THE CURSUR KEY'S CONTROL THE OCTAVES"
390 LOCATE 23,10:PRINT "IF T IS DEPRESSED IT WILL PLAY TAKE ME OUT TO THE BALL GAME "
400 LOCATE 15,4:PRINT "OCTAVE "
410 LOCATE 15,11:PRINT "4"
420 LOCATE 15,28:PRINT "DRUMBEAT "
430 LOCATE 19,11: PRINT "NOTE"
440 A$=CHR$(14)
450 SOUND 37,0.5:LOCATE 15,37:PRINT "SLOW"
460 IF INKEY$="T" THEN    GOSUB 1330
470 IF INKEY$="E" THEN GOSUB 1350
480 ON KEY(1) GOSUB 800
490 KEY(1) ON
500 ON KEY(2) GOSUB 840
510 KEY(2) ON
520 ON KEY(3) GOSUB 880
530 KEY(3) ON
540 ON KEY(4) GOSUB 920
550 KEY(4) ON
560 ON KEY(5) GOSUB 960
570 KEY(5) ON
580 ON KEY(6) GOSUB 1000
590 KEY(6) ON
600 ON KEY(7) GOSUB 1040
610 KEY(7) ON
620 ON KEY(14) GOSUB 1080
630 KEY(14) ON
640 ON KEY(8) GOSUB 1100
650 KEY(8) ON
660 ON KEY(10) GOSUB 1160
670 KEY(10) ON
680 ON KEY(9 ) GOSUB 1170
690 KEY(9 ) ON
700 ON KEY(12) GOSUB 1200
710 KEY(12) ON
720 ON KEY(11) GOSUB 1230
730 KEY(11) ON
740 ON KEY(13) GOSUB 1260
750 KEY(13)ON
760 IF INKEY$="t" THEN GOSUB 1330
770 IF INKEY$="e" THEN END
780 FOR I=1 TO 300: NEXT
790 GOTO 450
800 PLAY"  C8 ":LOCATE  6,3:PRINT A$:LOCATE 19,16:PRINT "C"
810 FOR I=1 TO 100: NEXT
820 LOCATE 6,3:PRINT "█"
830 RETURN
840 PLAY"  D8":LOCATE  3, 6:PRINT A$:LOCATE 19,16:PRINT "D"
850 FOR I=1 TO 100:NEXT
860 LOCATE 3,6:PRINT " "
870 RETURN
880 PLAY"  E8":LOCATE 6,9:PRINT A$:LOCATE 19,16:PRINT "E"
890 FOR I=1 TO 100:NEXT
900 LOCATE 6,9:PRINT "█"
910 RETURN
920 PLAY"  F8":LOCATE 3,12:PRINT A$:LOCATE 19,16:PRINT "F"
930 FOR I=1 TO 100:NEXT
940 LOCATE 3,12:PRINT " "
950 RETURN
960 PLAY"  G8":LOCATE 6,15:PRINT A$:LOCATE 19,16:PRINT "G"
970 FOR I=1 TO 100:NEXT
980 LOCATE 6,15:PRINT "█"
990 RETURN
1000 PLAY"  A8":LOCATE 6,21:PRINT A$:LOCATE 19,16:PRINT "A"
1010 FOR I=1 TO 100:NEXT
1020 LOCATE 6,21:PRINT "█"
1030 RETURN
1040 PLAY"  B8":LOCATE 3,24:PRINT A$:LOCATE 19,16:PRINT "B"
1050 FOR I=1 TO 100:NEXT
1060 LOCATE 3,24:PRINT " "
1070 RETURN
1080 PLAY"O3  ":LOCATE 15,11: PRINT "3"
1090 RETURN
1100 PLAY"O5C8":LOCATE 6,27:PRINT A$:LOCATE 15,11:PRINT"5":LOCATE 19,16:PRINT "C"
1110 FOR I=1 TO 100:NEXT
1120 LOCATE 6,27:PRINT "█"
1130 RETURN
1140 GOTO 450
1150 GOTO 1100
1160 GOTO 1290
1170 GOTO 450
1180 GOTO 1170
1190 RETURN
1200 PLAY"O2":LOCATE 15,11:PRINT "2"
1210 RETURN
1220 GOTO 450
1230 PLAY"O1":LOCATE 15,11:PRINT "1"
1240 RETURN
1250 GOTO 450
1260 PLAY"O4":LOCATE 15,11:PRINT "4"
1270 RETURN
1280 GOTO 450
1290 SOUND 37,0.5:LOCATE 15,37: PRINT "FAST"
1300 FOR I=1 TO 100: NEXT
1310 GOTO 1160
1320 RETURN
1330 PLAY"C8 P16O5C 8O4   A 8   G8   E8   G4P16D4P16C8O5P16 C8O4 A8G8E8G"
1340 RETURN
1350 END
```
{% endraw %}

## SCRNSAVE.DOC

{% raw %}
```

         
         Scrnsave.doc is a screen utility developed by John Socha and
         appeared in Softalk magazine in December of 1983.  The
         program supplied and dated 12/83 was assembled from the
         assembly file supplied with the article.
         
         This utility will turn off the screen display if no keys have
         been touched for three minutes.  When a key is pressed the
         display will return.  With continues use of the key board the
         time is continually reset and the display does not turn off. 
         Probably the best key to press to regain the display after it
         has been turned off is the Scroll Lock.
         
         This utility has the advantage of saving the screen form
         damage due to continues display in one location, such as the
         bottom line or in a certain location designated by a game. 
         Continues bright display in one location can cause burning of
         the phosphor and a dark spot.
         
         Jim Jacques
         227 White Pine Rd.
         Delafield, WI 53018
         

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0107

     Volume in drive A has no label
     Directory of A:\

    SCRNSAVE COM       310  12-10-83  10:20p
    SCRNSAVE DOC      1119  12-13-83   2:31p
    MUSIC    BAS      4096   1-01-80   6:31a
    SETUP    BAT        54   3-06-83   7:58a
    FOS      BAS     24576   1-13-83  11:50p
    FOS2     BAS     17792  12-12-82  10:25p
    FOS-DESC          7684   1-10-83   9:52p
    FINANCE  BAS     17920   3-06-83   8:26a
    TAX1982  VC      42624   1-25-83   2:19p
    HAL-PC   TXT     15616  10-31-83  10:24p
    CRC      TXT      1029  11-09-84   2:14p
    CRCK4    COM      1536  10-21-82   7:54p
           12 file(s)     134356 bytes
                           23040 bytes free
