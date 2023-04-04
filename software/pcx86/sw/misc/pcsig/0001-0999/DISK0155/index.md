---
layout: page
title: "PC-SIG Library Disk #155"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0155/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0155"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "BUDGETRK AND TASKPLAN"

    Here are five useful programs in BASIC for planning or tracking business
    projects, expenses and making loan analyses.  BUDGETRAK (Budget Track)
    tracks budgeted disbursements by numbering budgeted items as grouped
    under any one of eighty projects.  It tracks them on three levels:
    DISBURSEMENTS being the lowest level, ITEMS comprise the middle level
    and PROJECTS are the highest level.
    
    The three-part LOAN section contains a Loan Savings Solution which
    prepares schedules of loan payments, with and without extra payments to
    the principal.  Leas-By1 compares automobile purchase (with loan) to
    closed-in lease.  It's an analysis applications package for "private
    use" autos.  Loan Mortgage Solutions prepares schedules of loan
    payments, both with and without payment to the principal. Rounding out
    this package is TASKPLAN, an elementary project manager.
    
    System Requirements: BASIC
    
    How to Start: Consult the DOC files for BudgetTrack and TaskPlan; the
    other three have interior directions.  To run the BASIC programs,
    consult the directions in GETTING STARTED for your configuration.
    
    File Descriptions:
    
    ??????        Various data files for BUDGETRK.EXE
    -------- ---  BUDGETRK 3.3
    BUDGETRK EXE  Budget tracking program
    BUDGETRK DOC  Documentation for BUDGETRK.BAS  (2 pages)
    TASKPLAN BAS  Task planning program
    DESCRIPT DOC  Task plan documentation
    LEAS-BY1 BAS  Lease - buy analysis for auto purchase or lease
    -------- ---  LOAN
    LOANSVGS BAS  Loan payment solutions
    LOAN-MTG BAS  Loan mortgage schedules, after tax impact
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## LEAS-BY1.BAS

```bas
1000 CLS:KEY OFF
1010 COLOR 0,7:PRINT "AUTO PURCHASE (WITH LOAN) compared to CLOSED END LEASE:";:COLOR 7:PRINT "  AN ANALYSIS."
1013 PRINT"For PRIVATE-USE cars.  (A leased business-use car almost always is"
1016 PRINT"cheaper because lease costs are a tax deductible business expense.)"
1020 PRINT:PRINT "YOU WILL NEED THE FOLLOWING DATA ELEMENTS:"
1030 PRINT "                      DATA ELEMENT                 EXAMPLE":PRINT
1040 PRINT "PURCHASE WITH LOAN:   PRICE                        13772"
1050 PRINT "                      INTEREST % PER YEAR          12.25"
1060 PRINT "                      YEARS (LOAN TERM)            5"
1070 PRINT "                      DOWN PAYMENT                 2754.40":PRINT
1080 PRINT "  CLOSED END LEASE:   LEASE PAYMENT PER MONTH      253"
1090 PRINT "                      LEASE TERM (IN YEARS)        4"
1100 PRINT
1110 PRINT "(GET AMOUNTS FROM CAR DEALER, LOAN CO. OR BANK, AND LEASE COMPANY.)"
1120 PRINT
1130 PRINT "ENTER SEPARATELY THE FOLLOWING AMOUNTS:"
1140 K=0:N=0:M=0:Y=0:PP=0:IR=0:DP=0:LP=0:LT=0:LC=0:J=0:RB=0:A=0:B=0:C=0
1150 M1=0:K1=0:E=0:G=0:H=0:S=0:V=0:W=0:Q=0:P=0:X=0:DV=0
1160 PRINT "DATA FOR LOAN"
1170 INPUT; "BUY PRICE: ",PP:INPUT; "  INTEREST %: ",IR:INPUT; "  YRS (LOAN TERM): ",Y:INPUT "  DOWN PAYMT: ",DP
1180 PRINT "DATA FOR LEASE"
1190 INPUT; "LEASE PAYMENT: ",LP:INPUT "   LEASE TERM: ",LT
1200 K=IR/1200:N=Y*12:LC=LP*LT*12
1210 M=((PP-DP)*K*(1+K)^N/((1+K)^N-1))
1220 J=M*N+DP
1223 PRINT"Use RAPID, NORMAL, or LOW depreciation?  Key R, N, or L."
1226 Z$=INKEY$:IF Z$="" THEN 1226
1230 PRINT:PRINT "TO PRINT RESULTS ON PAPER:         >> PRESS `3' AND `ENTER'"
1240 PRINT "TO DISPLAY RESULTS ON THE SCREEN:  >> PRESS `8' AND `ENTER'"
1250 INPUT "CHOOSE NOW (3 OR 8):  ";X
1260 IF X=<5 THEN 1280
1270 PRINT:GOTO 1870
1280 COLOR 18:PRINT "WORKING";:COLOR 7:PRINT "; WAIT FOR `FINISHED' MESSAGE."
1290 LPRINT"AUTO PURCHASE (WITH LOAN) compared to a CLOSED END LEASE.  AN ANALYSIS."
1295 LPRINT "ASSUMPTION: The car is for private (not business) use.":LPRINT
1300 LPRINT USING "BUY DATA:      INTEREST RATE:      ##.##";IR;:LPRINT "%";
1310 LPRINT USING "             LOAN TERM:    ##"; N;:LPRINT " MOS."
1320 LPRINT USING "              PURCHASE PRICE: $$#####.##"; PP;
1330 LPRINT USING "        MONTHLY PAYMENT:$$#####.##"; M
1340 LPRINT USING "              FINANCE CHARGE: $$#####.##"; J-PP;
1350 LPRINT USING "           DOWN PAYMENT:$$#####.##"; DP
1360 LPRINT USING "     PURCHASE COST WITH LOAN: $$#####.##"; J;
1370 LPRINT USING "         LOAN PRINCIPAL:$$#####.##"; PP-DP:LPRINT
1380 LPRINT USING "LEASE DATA:       LEASE COST: $$#####.##"; LC;
1390 LPRINT USING "             LEASE TERM:    ##"; LT*12;:LPRINT " MOS."
1400 LPRINT USING "                                                MONTHLY PAYMENT:$$#####.##"; LP
1410 RB=PP-DP
1420 IF LC=>J THEN LPRINT "A LEASE APPEARS TO SHOW NO ADVANTAGE.": GOTO 1860
1430 LPRINT USING "    BUY COST LESS LEASE COST: $$#####.##"; J-LC:LPRINT
1440 LPRINT"TIME  |            PURCHASE WITH LOAN        |     LEASE"
1450 LPRINT"      |                                      |"
1460 LPRINT"      | TOTAL    REMAIN.   TOTAL             | TOTAL  DEPRECIATED"
1470 LPRINT"YR MO | PAYMTS   BALANCE   INTEREST   EQUITY | PAYMTS    VALUE"
1480 C=(C+1):IF C=13 THEN C=1
1490 IF C=1 THEN B=B+1
1500 A=A+1
1510 M1=M*A:RB=RB-(M-(K*RB)):K1=K1+(K*RB)
1520 IF A=LT*12 THEN 1540
1530 TP=LP*(A+1)
1540 P=(P+1) MOD 6
1550 Q=Q+(K/2*(PP-TP))
1560 IF A=LT*12 THEN 1590
1570 IF A=N THEN 1590
1580 IF P<>1 THEN 1480
1590 READ G
1595 DATA .85,.75,.65,.58,.50,.44,.38,.33,.29,.26,.23,.20,.17
1600 IF Z$="R" OR Z$="r" THEN G=G-0.1
1605 IF Z$="L" OR Z$="l" THEN G=G+0.1
1610 DV=G*PP:E=DV-RB
1620 IF X=>6 THEN 2050
1630 LPRINT USING "##";B;:LPRINT USING " ##";C;:LPRINT USING "  #####.##";M1;
1640 LPRINT USING "  #####.##";RB;:LPRINT USING "  #####.##";K1;
1650 LPRINT USING " #####.##";E;:LPRINT USING "  #####.##";TP;
1660 LPRINT USING "  #####.##";DV
1670 IF A=>LT*12 THEN 1700
1680 IF A=>N THEN 1700
1690 GOTO 1480
1700 LPRINT:'COPYRIGHT JOE M. JEFFERS 1983
1710 S=(J-LC)-E
1720 LPRINT USING"THE GROSS ADVANTAGE OF LEASING,FROM ABOVE:$$#####.##";J-LC
1730 LPRINT USING"LESS END-TERM EQUITY REMAINING, IF BOUGHT:  #####.##";E
1740 LPRINT USING"                 NET ADVANTAGE OF LEASING:  #####.##";S
1750 IF LT<Y THEN H=LT ELSE H=Y
1760 LPRINT:GOTO 2290
1770 LPRINT
1780 LPRINT "THE AFTER-TAX LEASING ADVANTAGE APPEARS ON THE FOLLOWING 2 LINES, AS"
1790 LPRINT "ADJUSTED BY THE INCOME TAX BRACKET WHICH APLIES TO THE CONTINGENT BUYER:":LPRINT
1800 LPRINT "  50%       44        39        33        29        25%"
1810 LPRINT USING "$$####.##";V*0.5;:LPRINT USING "   ####.##";V*0.56;
1820 LPRINT USING "   ####.##";V*0.61;:LPRINT USING "   ####.##";V*0.67;
1830 LPRINT USING "   ####.##";V*0.71;:LPRINT USING "   ####.##";V*0.75:LPRINT
1840 GOTO 2355
1850 PRINT "RUN IS FINISHED.  TRY ANOTHER, IF YOU WISH (KEY `F2')."
1860 GOTO 3080
1870 PRINT USING "BUY DATA:    INTEREST RATE:        ##.##";IR;:PRINT "%";
1880 PRINT USING "          LOAN TERM:      ##"; N;:PRINT " MOS."
1890 PRINT USING "            PURCHASE PRICE:   $$#####.##"; PP;
1900 PRINT USING "     MONTHLY PAYMENT:  $$#####.##"; M
1910 PRINT USING "            FINANCE CHARGE:   $$#####.##"; J-PP;
1920 PRINT USING "        DOWN PAYMENT:  $$#####.##"; DP
1930 PRINT USING "   PURCHASE COST WITH LOAN:   $$#####.##"; J;
1940 PRINT USING "      LOAN PRINCIPAL:  $$#####.##"; PP-DP:PRINT
1950 PRINT USING "LEASE DATA:     LEASE COST:   $$#####.##"; LC;
1960 PRINT USING "          LEASE TERM:      ##"; LT*12;:PRINT " MOS."
1970 PRINT USING "                                             MONTHLY PAYMENT:  $$#####.##"; LP
1980 RB=PP-DP
1990 IF LC=>J THEN PRINT "A LEASE APPEARS TO SHOW NO ADVANTAGE.": GOTO 1850
2000 PRINT USING "   PURCHASE COST LESS LEASE COST: $$#####.##"; J-LC
2010 PRINT"TIME  |             PURCHASE WITH LOAN         |     LEASE"
2020 PRINT"      |  TOTAL    REMAIN.   TOTAL              |  TOTAL  DEPRECIATED"
2030 PRINT"YR MO |  PAYMTS   BALANCE   INTEREST    EQUITY |  PAYMTS   VALUE"
2040 GOTO 1480
2050 PRINT USING "##";B;:PRINT USING " ##";C;:PRINT USING "  #####.##";M1;
2060 PRINT USING "  #####.##";RB;:PRINT USING "   #####.##";K1;
2070 PRINT USING "  #####.##";E;:PRINT USING "  #####.##";TP;
2080 PRINT USING "  #####.##";DV
2090 IF A=>LT*12 THEN 2120
2100 IF A=>N THEN 2120
2110 GOTO 1480
2120 PRINT ">>> WHEN READY, PRESS `F5' (LEFT SIDE) TO FINISH. <<<":STOP
2130 S=(J-LC)-E
2140 PRINT USING"THE GROSS ADVANTAGE OF LEASING,FROM ABOVE:$$#####.##";J-LC
2150 PRINT USING"LESS END-TERM EQUITY REMAINING, IF BOUGHT:  #####.##";E
2160 PRINT USING"                 NET ADVANTAGE OF LEASING:  #####.##";S
2170 IF LT<Y THEN H=LT ELSE H=Y
2180 W=DP*(K*6)*H:V=S+W
2190 PRINT USING"PLUS INTEREST FROM RETAINED DOWN PAYMENT TOTALS:$$####.##";V
2200 PRINT:IF V<0 THEN PRINT"LEASING SHOWS NO NET ADVANTAGE.":PRINT:GOTO 2520
2210 PRINT "THE AFTER-TAX LEASING ADVANTAGE APPEARS ON THE FOLLOWING 2 LINES, AS"
2220 PRINT "ADJUSTED BY THE INCOME TAX BRACKET WHICH APLIES TO THE CONTINGENT BUYER:"
2230 PRINT "  50%       44        39        33        29        25%"
2240 PRINT USING "$$####.##";V*0.5;:PRINT USING "   ####.##";V*0.56;
2250 PRINT USING "   ####.##";V*0.61;:PRINT USING "   ####.##";V*0.67;
2260 PRINT USING "   ####.##";V*0.71;:PRINT USING "   ####.##";V*0.75
2270 REM CHART STOPS AT END OF LOAN OR LEASE TERM, WHICHEVER IS SHORTER.
2280 GOTO 2515
2290 LPRINT "A FURTHER ADVANTAGE OF LEASING RESULTS FROM RETENTION OF THE"
2300 LPRINT "DOWN PAYMENT, PROVIDING A POTENTIAL ACCUMULATION OF INTEREST"
2310 W=DP*(K*6)*H:V=S+W
2320 LPRINT "FOR"H"YEARS AT 1/2 THE LOAN RATE:";:LPRINT USING " $$#####.##";W
2330 LPRINT:LPRINT USING"THIS INTEREST INCREASES A LEASE ADVANTAGE TO:$$####.##";V
2340 LPRINT:IF V<0 THEN LPRINT "LEASING SHOWS NO NET ADVANTAGE.":GOTO 2355
2350 GOTO 1770
2355 LPRINT:LPRINT "(COSTS ARE VALID ONLY TO THE END OF THE TERM MEASURED.)"
2360 LPRINT "================================================================"
2370 LPRINT "CASH PURCHASE compared to LEASE (using above case)."
2380 LPRINT "ASSUMPTIONS: Interest may be earned at 1/2 auto loan rate."
2390 LPRINT "Cash price money is available to invest if car is leased.":LPRINT
2400 LPRINT USING "                  CASH PRICE: $$#####.##"; PP
2410 LPRINT USING "LESS EQUITY AFTER #.##";H;:LPRINT " YEARS:";:LPRINT USING " $$#####.##"; DV
2420 LPRINT USING "         TOTAL PURCHASE COST:         **$#####.##"; PP-DV
2430 LPRINT:LPRINT USING "               COST OF LEASE: $$#####.##"; LC
2440 LPRINT "LESS INTEREST ON CASH PAYMENT"
2450 LPRINT USING "AS REDUCED BY LEASE PAYMENTS: $$#####.##"; Q
2460 LPRINT USING "            TOTAL LEASE COST:         **$#####.##"; LC-Q
2470 LPRINT:IF (PP-DV)<LC-Q THEN 2500
2480 LPRINT USING"           LEASING WILL SAVE:          $$#####.##"; (PP-DV)-(LC-Q)
2490 GOTO 1850
2500 LPRINT USING"     CASH PURCHASE WILL SAVE:          $$#####.##"; (LC-Q)-(PP-DV)
2510 GOTO 1850
2515 PRINT "(Costs are valid only to the end of the term measured.)"
2520 COLOR 0,7:PRINT "CASH PURCHASE compared to LEASE";:COLOR 7:PRINT" (using above case)."
2530 PRINT "ASSUMPTIONS: Interest may be earned at 1/2 auto loan rate."
2540 PRINT "Cash price money is available to invest if car is leased."
2550 PRINT USING "                  CASH PRICE: $$#####.##"; PP
2560 PRINT USING "LESS EQUITY AFTER #.##";H;:PRINT " YEARS:";:PRINT USING " $$#####.##"; DV
2570 PRINT USING "         TOTAL PURCHASE COST:         **$#####.##"; PP-DV
2580 PRINT USING "               COST OF LEASE: $$#####.##"; LC
2590 PRINT "LESS INTEREST ON CASH PAYMENT"
2600 PRINT USING "AS REDUCED BY LEASE PAYMENTS: $$#####.##"; Q
2610 PRINT USING "            TOTAL LEASE COST:         **$#####.##"; LC-Q
2620 IF (PP-DV)<LC-Q THEN 2650
2630 PRINT USING"           LEASING WILL SAVE: $$#####.##"; (PP-DV)-(LC-Q)
2640 GOTO 1850
2650 PRINT USING"     CASH PURCHASE WILL SAVE: $$#####.##"; (LC-Q)-(PP-DV)
2660 GOTO 1850
2670 'VARIABLE DEFINITIONS FOLLOW (DOCUMENTATION):
2680 'A =PAYMENT COUNTER - 1500
2690 'B =YEAR COUNTER - 1490
2700 'C =MONTH COUNTER - 1480
2710 'E =EQUITY BUCKET - 1610
2720 'G =DEPRECIATION PERCENTAGES (DATA STATEMENT) - 1590,1600
2730 'H =LOAN TERM OR LEASE TERM, WHICHEVER IS SHORTER  - 2170
2740 'J =TOTAL PURCHASE COST WITH LOAN - 1220,1360
2750 'K =LOAN INTEREST RATE PER MONTH - 1200
2760 'M =LOAN MONTHLY PAYMENT - 1210
2770 'N =LOAN TERM IN MONTHS - 1200
2780 'P =LOOP COUNTER TO PRINT A CHART LINE EACH 6 MONTHS - 1540,1580
2790 'Q =INTEREST LOST ON AUTO CASH PURCHASE - 1550,2450
2800 'S =NET ADVANTAGE OF LEASING - 1710
2810 'V =FACTOR FOR AFTER TAX ADVANTAGE OF LEASING - 2180,2190,2240-2260
2820 'W =INTEREST AVAILABLE FROM SAVED DOWN PAYMENT - 2180,2320
2830 'X =INPUT DECISION TO PRINT OR DISPLAY RESULTS - 1250
2840 'Y =LOAN TERM IN YEARS (INPUT) - 1170
2850 'DV=DEPRECIATED VALUE - 1610        DP=PURCHASE DOWN PAYMENT (INPUT)
2860 'IR=INTEREST RATE PER YEAR (INPUT)  K1=TOTAL INTEREST PAID - 1510
2870 'LC=LEASE COST - 1200               LP=LEASE MONTHLY PAYMENT (INPUT)
2880 'LT=LEASE TERM (INPUT) - 1190       M1=TOTAL LOAN PAYMENTS - 1510,1630
2890 'PP=PURCHASE PRICE (INPUT) - 1170   RB=REMAINING BALANCE - 1410,1510,1640
2900 'FUNCTION DEFINITIONS BY LINE NUMBER FOLLOW:
2910 '1000      - CLEAR SCREEN AND REMOVE DISPLAY OF FUNCTION KEY PROMPT LINE.
2920 '1010-1120 - EXPLANATORY DISPLAY WITH EXAMPLE OF INPUT.
2930 '1130-1190 - INPUT.
2940 '1200-1220 - COMPUTATIONS (INCLUDING MONTHLY PAYMENT FOR PURCHASE).
2950 '1230-1250 - ALLOWS CHOICE OF PRINTED OR DISPLAYED RESULTS.
2960 '1260-1270 - ONE OF SEVERAL CONDITIONAL BRANCHES DEPENDING ON CHOICE.
2970 '1280      - PACIFIER MESSAGE.
2980 '1290-1430 - FIRST PART OF RESULTS PRESENTATION.
2990 '1440-1470 - PREPARATION OF CHART HEADINGS (SEE REMARK AT 1280).
3000 '1480-1500 - CALENDAR MANAGEMENT.  COPYRIGHT JOE M JEFFERS 1983.
3010 '1510-1610 - CALCULATE FIGURES FOR CHART.
3020 '1620      - TRANSFER TO DISPLAY RESULTS, OTHERWISE PRINT.
3030 '1630-1660 - PRINT A LINE OF CALAULATION RESULTS.
3040 '1670-1690 - LOOP MANAGEMENT FOR CHART LINE CALCULATION AND PRINTING.
3050 '1700-1830 - (INCLUDES 2290-2350) MAKES LOAN BUY-OR-LEASE COMPARISON.
3060 '1840-1850 - (INCLUDES 2360-2510) MAKES CASH BUY-OR-LEASE COMPARISON.
3070 'ALL OTHER LINES PRESENT SAME DATA ON SCREEN RATHER THAN ON PAPER.
3080 GOTO 3130
3090 'Author's name and address follow:
3100 'Joe M. Jeffers
3110 '92-1041 Makakilo Drive #83
3120 'Ewa Beach, HI 96706
3130 END
```

## LOAN-MTG.BAS

```bas
1000 CLS:KEY OFF
1010 V=1:W=0:T=7:X=0:Z=0:L=0:R=0:U=0
1020 PRINT TAB(12);:COLOR 0,7:PRINT"            Have you made a copy?            ";
1030 COLOR 7,0
1040 FOR L=1 TO 7:PRINT TAB(12);:COLOR 0,7:PRINT"  ";:COLOR 7:PRINT TAB(14)"=";
1050 FOR R=1 TO 8
1060 IF W=0 THEN W=1 ELSE W=0
1070 IF L<5 THEN 1090
1080 IF W=1 THEN 1110 ELSE 1100
1090 IF W=0 THEN 1110
1100 FOR U=1 TO T:PRINT "%";:NEXT U:GOTO 1120
1110 FOR U=1 TO V:PRINT "$";:NEXT U
1120 PRINT "=";:NEXT R
1130 V=V+1:T=T-1:PRINT TAB(55);:COLOR 0,7:PRINT "  ";:COLOR 7:NEXT L:PRINT
1140 PRINT TAB(12);:COLOR 0,7:PRINT"         -- USE - ONLY - `BASICA' --         ";
1150 COLOR 7:PRINT:PRINT
1160 PRINT "File: `LOAN-MTG.SOL': That is, LOAN MorTgaGe SOLutions."
1170 PRINT"**** COPYRIGHT 1983 * Joe Marvin Jeffers * ALL RIGHTS RESERVED ****"
1180 PRINT "           New users should read the INSTRUCTIONS first.":PRINT
1190 P=0:I=0:Y=0:M=0:E=0:M1=0:F=0:E1=0:P1=0:Y1=0:Q=0:Q1=0:A=0:EYE2=0:P2=0:K=0
1200 B=0:C=0:Y2=0:C1=0:S=0:J=0:I1=0:J1=0:M2=0:M3=0:C2=0:C3=0:C4=0:Y3=0:Y4=0:N=0
1210 H=0
1220 PRINT"|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|"
1230 PRINT"| NOW DO THIS:  Select one of these four choices:                 |"
1240 PRINT"|                           To stop -------------------- `Enter'  |"
1250 PRINT"| To read the INSTRUCTIONS ------------- Press `1', then `Enter'. |"
1260 PRINT"| >>> to chart and DISPLAY results ----- Press `4', then `Enter'. |"
1270 PRINT"| To solve MONTHLY PAYMENTS (only) ----- Press `9', then `Enter'. |"
1280 PRINT"|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|"
1290 PRINT"(After a STOP, `F5' continues, while `F2' starts a new RUN.)"
1300 PRINT
1310 INPUT "MAKE YOUR SELECTION [1, 4, 9, (or 0, to stop)]: ";X
1320 IF X=0 THEN STOP:GOTO 1300
1330 IF X=9 THEN 6040
1340 PRINT:IF X<3 THEN X=1:GOTO 1360
1350 X=4:GOTO 2060
1360 CLS                                 'USER SELECTION IS CODIFIED.
1370 COLOR 0,7
1380 PRINT "COST AND TIME COMPARISONS FOR LOAN PAYMENTS IN ADVANCE";
1390 COLOR 7:PRINT:PRINT
1400 PRINT "The major routine of this program prepares schedules of loan"
1410 PRINT "payments both with and without extra payments to principal.  It"
1420 PRINT "shows surprisingly large savings which result from modest extra
1430 PRINT"monthly payments.  However, these figures must be compared with the"
1440 PRINT "interest which may be earned in other available investments.  Use"
1450 PRINT"of this program will provide a good basis for investment decisions."
1460 PRINT
1470 PRINT "The DISPLAY ROUTINE (#4) is designed for use without a printer, or"
1480 PRINT"when you want screen-displayed results.  If a printer is connected,"
1490 PRINT "you can put on paper any displayed results with the `PRINT SCREEN'"
1500 PRINT "(PrtSc) key.
1510 PRINT
1520 PRINT "The options are numbered (2, 5, & 8) and are described on a later"
1530 PRINT "display.  After choosing an option (by keying its number and the"
1540 PRINT "Enter key) you will be asked to `input' the loan values."
1550 PRINT
1560 PRINT "* * * * To continue reading, press the `F5' key (FAR LEFT) * * * *"
1570 STOP
1580 CLS
1590 PRINT "The PRINCIPAL, TERM of the loan in YEARS, and the INTEREST rate per"
1600 PRINT "YEAR, must be entered.  The MONTHLY PAYMENT and the EXTRA paid per"
1610 PRINT"month are both OPTIONAL.  If you enter `0' for the EXTRA per month,"
1620 PRINT"you will get a complete schedule of regular payments, but the right"
1630 PRINT "half of the display will be blank.  Try it both ways."
1640 PRINT
1650 PRINT "If you enter `0' as the MONTHLY PAYMENT, the calculated payment"
1660 PRINT "will be used.  It is always calculated anyway.  If you enter your"
1670 PRINT "own payment figure, please be sure it is correct.  In fact, please"
1680 PRINT "be careful of ALL input figures.  A few cents error in the monthly"
1690 PRINT "payment can change the total cost of a mortgage loan by $100."
1700 PRINT"Try your own payment figures. If they are right, they will be okay."
1710 PRINT "Small errors also will be accepted, but an error which makes the"
1720 PRINT"result unusable will put an explanation & suggestion on the screen."
1730 PRINT
1740 PRINT "You will find it easier to use `0' as input for MONTHLY PAYMENTS."
1750 PRINT "If you get unexpected results, you may have made a simple keying"
1760 PRINT"error in your PRINCIPAL, INTEREST, or TERM entries.  Any such error"
1770 PRINT "also will cause the calculated MONTHLY PAYMENT to be wrong."
1780 PRINT
1790 PRINT "  * * * * * * To continue reading, press the `F5' key * * * * * *"
1800 STOP
1810 CLS
1820 PRINT "     Before entering loan figures, you will be asked if you plan"
1830 PRINT "     to sell the mortgaged property, and if so, in how many years."
1840 PRINT "     Also, after entering the loan figures, and if you specify"
1850 PRINT "     extra monthly payments to principal, you will be asked if you"
1860 PRINT "     plan to stop the extra payments after a number of years.  If"
1870 PRINT "     you choose either or both of these options, the program will"
1880 PRINT "     adjust and provide results to fit your choices."
1890 PRINT " SAMPLE ENTRIES to get you started (in order of input):"
1900 PRINT " 1st trial run: 4  2  Y  12  80000  11  30    0    100  Y  3  44"
1910 PRINT " 2nd trial run: 7  2  Y  15  80000  11  30    0    100  Y 12  50"
1920 PRINT " 3rd trial run: 4  2  N      80000  11  30  761.9  100  N     50"
1930 PRINT "     Jot down these figures (or press `Print Screen').":PRINT
1940 PRINT "Loans often are arranged to pay a `30 yr' term in 29 yrs & 11 mos."
1950 PRINT"MONTHS AS DECIMAL FRACTIONS OF A YEAR may aid odd-length term entry:"
1960 PRINT "1      2      3      4      5      6      7      8      9     10     11"
1970 PRINT "0.084  0.167  0.25   0.334  0.417  0.5    0.584  0.667  0.75  0.834  0.917"
1980 PRINT "     A FINAL NOTE:  DETAIL OPTION (8) is useful in showing total"
1990 PRINT "     interest you pay yearly, for INCOME TAX purposes."
2000 PRINT "            >> This Page Concludes the INSTRUCTIONS <<"
2010 PRINT "       * * * * * * To continue, press the F5 key * * * * * *"
2020 STOP
2030 CLS
2040 GOTO 1190
2050 'filename: LOANSVGS.SOL *** COPYRIGHT 1982 Joe Marvin Jeffers ***"
2060 CLS:X=4
2070 PRINT "* * * * * * * * * * * * INSTRUCTION * * * * * * * * * * * *"
2080 PRINT"You chose the program to DISPLAY results.  Press the number of"
2090 PRINT"your choice, then press the Enter key.  HERE ARE YOUR OPTIONS:"
2100 PRINT"+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++"
2110 PRINT"2.  >>> COMPLETE SUMMARY.  Payment figures for the first month of"
2120 PRINT"    each 5th year.  The monthly payment is calculated, then the"
2130 PRINT"    chart displayed, and finally a recapitulation of results shown."
2140 PRINT"-------------------------------------------------------------------"
2150 PRINT"5.  >>> BRIEF SUMMARY.  Payment per mo. displayed.  Input needed:"
2160 PRINT"    Principal, Interest, & Term (years).  You may enter Extra/mo &"
2170 PRINT"    wait up to 40 seconds (depending on the term) for a summary."
2180 PRINT"-------------------------------------------------------------------"
2190 PRINT"8.  >>> DETAILED LIST.  EVERY PAYMENT is displayed in groups of 1"
2200 PRINT"    to all.  Total INTEREST is shown for each group of months."
2210 PRINT"    When prompted, choose the no. of months to display and ENTER."
2220 PRINT"+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++"
2230 PRINT:M=0:M1=0:E=0:Y5=0:Y6=41:Y10=0:X7=0:X8=0:X5=0:D=0:D2=0:D3=0:B3=0
2240 Y11=0:D1=0:D7=0:A3=0:A4=0:B8=0:B9=0
2250 INPUT "MAKE YOUR SELECTION NOW {2, 5, 8, (OR 0, TO STOP)}        ";Z
2260 IF Z=0 THEN STOP:GOTO 2250
2270 PRINT
2280 PRINT "If you plan to SELL in a few years, you can STOP mortgage payments"
2290 INPUT "at that time and get a summary.  Will you sell (Y or N)   "; Y8$
2300 IF Y8$=CHR$(78) THEN 2330
2310 IF Y8$=CHR$(110) THEN 2330
2320 INPUT "Enter number of years you plan to keep the property.      "; Y6
2330 IF Z<4 THEN Z=2:GOTO 2350
2340 IF Z<7 THEN Z=5 ELSE Z=8
2350 PRINT
2360 PRINT "PRINCIPAL AMOUNT of the loan. Key the figures, then `Enter' key."
2370 INPUT "(Example:  For $45000.00, enter 45000)                          ";P
2380 PRINT
2390 PRINT "INTEREST RATE/YEAR.  Enter the percentage & press `Enter' key."
2400 INPUT "(Example:  For 13 3/4%, enter 13.75; for 9%, enter 9)           ";I
2410 PRINT
2420 PRINT "TERM in YEARS of the loan. Key in the figures and `Enter'."
2430 INPUT"(Example:  For 30 years, enter 30)                              ";Y
2440 K=I/1200:N=Y*12:P1=P:P2=P
2450 M=P*K*(1+K)^N/((1+K)^N-1):PRINT
2460 PRINT "MONTHLY PAYMENT.  Your figure or `0' (preferred), and `Enter'."
2470 PRINT "{PAYMENT SHOULD BE: $"M"(Enter "M" or 0)}";:PRINT TAB(65);:INPUT M1
2480 PRINT
2490 PRINT "EXTRA PER MONTH you will pay.  Enter amount or `0', and `Enter'."
2500 INPUT"(Example:  fOR $110.00 per month, enter 110)                    ";E
2510 CLS
2520 PRINT"****   ****   ****   ****   ****   ****   ****   ****   ****   ****   ****"
2530 IF E=0 THEN 2610
2540 INPUT "Will you STOP EXTRA PAYMENTS during this loan (Y or N)    "; Y7$
2550 IF Y7$=CHR$(78) THEN 2600
2560 IF Y7$=CHR$(110) THEN 2600
2570 IF Y7$=CHR$(89) THEN 2590
2580 IF Y7$<>CHR$(121) THEN 2600
2590 INPUT "Enter number of years EXTRA PAYMENTS will be paid.        "; Y5
2600 PRINT
2610 COLOR 0,7
2620 PRINT "COST & TIME COMPARISONS FOR LOAN PAYMENTS MADE IN ADVANCE";
2630 COLOR 23:PRINT "         WORKING";:COLOR 7,0:PRINT
2640 PRINT "Calculated Monthly Payment is: $";:COLOR 9:PRINT M;
2650 COLOR 7:PRINT SPC(96) "(Please wait for: `RUN";
2660 PRINT "                                                          is finished' message.)";
2670 IF M1>0 AND E>0 THEN 2730
2680 IF M1=0 AND E=0 THEN 2700
2690 IF E=0 THEN 2720 ELSE 2710
2700 PRINT "TERMS: LOAN AMT    INT/YR    TERM (YRS)":GOTO 2750
2710 PRINT "TERMS: LOAN AMT    INT/YR    TERM (YRS)    EXTRA/MO":GOTO 2760
2720 PRINT "TERMS: LOAN AMT    INT/YR    TERM (YRS)    PAYMT/MO":GOTO 2770
2730 PRINT "TERMS: LOAN AMT    INT/YR    TERM (YRS)    PAYMT/MO      EXTRA/MO"
2740 PRINT"       $"P;:PRINT TAB(19) I;"%",Y,"$";:COLOR 23:PRINT M1,:COLOR 7:PRINT "$";E:GOTO 2780
2750 PRINT "      $"P;:PRINT TAB(19) I;"%",Y:GOTO 2800
2760 PRINT "      $"P;:PRINT TAB(19) I;"%",Y,"$";E:GOTO 2780
2770 PRINT "      $"P;:PRINT TAB(19) I;"%",Y,"$";:COLOR 23:PRINT M1:COLOR 7:GOTO 2800
2780 COLOR 1:PRINT "SCHEDULE FOR REGULAR PAYMENTS";:COLOR 7:PRINT SPC(7);
2790 COLOR 1:PRINT"SCHEDULE WITH EXTRA PAYMENTS";:COLOR 7:PRINT:PRINT:GOTO 2850
2800 IF Z><5 THEN 2840
2810 PRINT:PRINT "If you want a summary, PRESS `F5'; if not, PRESS `F2'."
2820 STOP
2830 PRINT:PRINT "Please wait up to 40 seconds for the summary to be prepared."
2840 PRINT:COLOR 1:PRINT "SCHEDULE FOR REGULAR PAYMENTS":COLOR 7:PRINT:PRINT
2850 IF Z<>8 THEN 2900
2860 PRINT "(You may change to a faster SUMMARY at ANY time DURING processing."
2870 PRINT "Press `F9'.  If screen is asking for INPUT, also press `Enter'."
2880 PRINT "Later you may return to DETAILED listing by pressing `F9' again.)"
2890 PRINT
2900 IF M1=0 THEN M1=M
2910 IF M1=M THEN 2980
2920 IF M1>0 THEN M2=M1-M
2930 M3=ABS(M2)
2940 IF M3<0.6 THEN 2970
2950 IF M3>M2 THEN 4500
2960 IF M3=<M2 THEN 4970
2970 M=M1
2980 PRINT TAB(9) "REMAIN.";:PRINT TAB(18) "AMOUNT";:PRINT TAB(28) "TOTAL";
2990 IF E=0 OR F>0 THEN PRINT:GOTO 3030
3000 PRINT TAB(37) "REMAIN.";
3010 IF E=0 OR F>0 THEN PRINT:GOTO 3030
3020 PRINT TAB(47) "AMOUNT";:PRINT TAB(57) "TOTAL";:PRINT TAB(67) "EXTRA"
3030 PRINT "YR";:PRINT TAB(4) "MO";
3040 PRINT TAB(9)"BAL. ";:PRINT TAB(18) "TO INT";:PRINT TAB(28) "TO INT";
3050 IF E=0 OR F>0 THEN PRINT:GOTO 3090
3060 PRINT TAB(37) "BAL. ";
3070 IF E=0 OR F>0 THEN PRINT:GOTO 3090
3080 PRINT TAB(47) "TO INT";:PRINT TAB(57)"TO INT";:PRINT TAB(67)"TO PRIN."
3090 IF H=1 THEN 3240
3100 IF Z=8 THEN 3150
3110 G1=CSRLIN:G2=POS(0)
3120 LOCATE 25,1
3130 PRINT"(You may pause any time during chart processing by pressing `F9'.)"
3140 LOCATE G1,1
3150 IF Z<>8 THEN 3310
3160 PRINT ">>>>"
3170 PRINT ">>>> Key the NUMBER OF MONTHS you wish to show, then `Enter': ";
3180 KEY(9) ON
3190 INPUT "   ";J
3200 ON KEY(9) GOSUB 5280
3210 KEY(9) OFF
3220 IF J=0 THEN 5260
3230 IF H=1 THEN 2980
3240 H=0
3250 IF J>480 THEN J=480
3260 J=480-J
3270 J1=0
3280 O=0:O1=0
3290 J=J+1
3300 J1=J1+1
3310 KEY(9) ON
3320 ON KEY(9) GOSUB 5280
3330 KEY(9) STOP
3340 IF (Y1*12)+C=>Y6*12 THEN 5430
3350 I1=P1*K
3360 O=O+I1
3370 Q=P1:P1=P1-(M-I1):Q1=P1
3380 IF Q1=>Q THEN 4660
3390 A=A+I1
3400 IF M=>P1+I1 THEN 4030
3410 IF E=0 OR F>0 THEN 3570
3420 EYE2=P2*K
3430 O1=O1+EYE2
3440 IF Y1=0 THEN 3490
3450 IF Y5=0 THEN 3490
3460 IF (Y1*12)+C<Y5*12 THEN 3490
3470 P2=P2-(M-EYE2)
3480 GOTO 3500
3490 P2=P2-(M-EYE2)-E
3500 B=B+EYE2
3510 IF (Y1*12)+C=>Y6*12 THEN 5430
3520 IF Y5=0 THEN 3540
3530 IF (Y1*12)+C=>Y5*12 THEN 3570
3540 D=D+1:D1=D MOD 12
3550 IF D1=0 THEN X5=X5+1
3560 E1=E1+E
3570 C=(C+1) MOD 12
3580 IF C=0 THEN Y1=Y1+1:Y4=Y4+1
3590 IF Z=8 THEN 3650
3600 G=CSRLIN:GG=POS(0)
3610 PRINT USING "##";Y1;:PRINT "-";
3620 IF C=3 OR C=6 THEN PRINT USING "##";C;ELSE IF C=0 THEN PRINT USING "##";C;
3630 IF C=9 THEN PRINT C,
3640 LOCATE G,GG
3650 IF F=>1 THEN 3670
3660 IF M=>P2+EYE2+E THEN 3990
3670 IF Y1>Y+1 THEN 4820
3680 IF Z=5 AND S=2 THEN S=3
3690 IF S=1 OR F=2 THEN 3750
3700 IF Z=8 THEN 3750
3710 IF Y1=0 AND C=1 THEN 3750
3720 IF Z=5 THEN 3900
3730 IF Y4<5 THEN 3310
3740 Y4=0
3750 PRINT USING "## ";Y1;:PRINT USING "## ";C;
3760 PRINT USING "######.## ";P1;:PRINT USING "####.## ";I1;
3770 IF F>0 THEN S=S+1
3780 IF S=2 THEN Y2=Y1:C1=C
3790 IF S=>3 OR E=0 THEN 3820
3800 PRINT USING "#######.## ";A;
3810 GOTO 3860
3820 PRINT USING "#######.## ";A
3830 IF (Y1*12)+C=>Y6*12 AND E=0 THEN 5540
3840 IF (Y1*12)+C=>Y6*12 THEN 5440
3850 IF S=>1 OR E=0 THEN 3900
3860 PRINT USING "######.## ";P2;:PRINT USING "####.## ";EYE2;
3870 PRINT USING "#######.## ";B;
3880 IF Y9=1 THEN 5370
3890 PRINT USING "######.##";E1
3900 IF F=2 THEN 4060
3910 IF Z<>8 THEN 3310
3920 IF J1=12 THEN H=1:GOTO 3940
3930 IF J<480 THEN 3290
3940 PRINT "REG. INTEREST PAID THESE"J1;"MONTHS:"O;
3950 IF O1=0 THEN PRINT:GOTO 3970
3960 PRINT "-- INT., EXTRA SCHED:"O1
3970 PRINT:IF J=480 THEN 3170
3980 GOTO 3270
3990 IF P2<0 THEN P2=0
4000 Y9=1
4010 F=1:S=1
4020 GOTO 3670
4030 IF P1<0 THEN P1=0
4040 F=2
4050 GOTO 3570
4060 PRINT :IF Y1<Y-1 THEN 5140
4070 G3=CSRLIN:G4=POS(0)
4080 LOCATE 25,1
4090 PRINT"                                                                  "
4100 LOCATE G3,G4
4110 PRINT "TOTAL COST OF REGULARLY PAID LOAN: ";
4120 PRINT USING "$$##########.##";A+P
4130 IF E<>0 THEN 4190
4140 PRINT
4150 PRINT "  RUN is finished.        *** PRESS `F5' to RUN another loan. ***"
4160 STOP
4170 CLS
4180 GOTO 1190
4190 PRINT "TOTAL COST OF LOAN WITH EXTRA PAYMENTS: ";
4200 PRINT USING "#######.##";P+B
4210 PRINT TAB(20) "DIFFERENCE (SAVING): ";
4220 COLOR 9:PRINT USING "#######.##";(A+P)-(P+B);:COLOR 7
4230 PRINT
4240 PRINT "       >>> When ready, ENTER your estimated average federal"
4250 PRINT "income tax bracket (needed to solve for any after-tax advantage)."
4260 INPUT "For example, if you will be in the 50% bracket, enter 50."; A4
4270 A3=A4/100
4280 IF Y2=0 AND Y5=0 THEN D2=Y1:D3=C:GOTO 4350
4290 IF Y2=0 AND Y5=>Y6 THEN D2=Y1:D3=C:GOTO 4350
4300 IF Y2=0 THEN D2=X5:D3=D1:GOTO 4350
4310 IF Y5=0 THEN D2=Y2:D3=C1:GOTO 4350
4320 IF Y6=>Y5 AND Y2=>Y5 THEN D2=X5:D3=D1:GOTO 4350
4330 IF Y5=>Y2 AND Y6=>Y2 THEN D2=Y2:D3=C1:GOTO 4350
4340 D2=Y1:D3=C:GOTO 4350
4350 IF D7=1 THEN D7=0:GOTO 5710
4360 C2=(D2*12)+D3
4370 FOR C3=C2 TO 1 STEP -1
4380 C4=E*(1+K)^C3
4390 Y3=Y3+C4
4400 NEXT C3
4410 PRINT">> THE AMOUNT (FUTURE VALUE) YOU MAY EXPECT BY INVESTING THE EXTRA"
4420 PRINT "PAYMENTS, $";E;"/mo, FOR THE SAME PERIOD,";D2;"yrs &";D3;"mos, IN"
4430 PRINT "ANOTHER INVESTMENT AT";I;"% COMPOUNDED MONTHLY WOULD BE: $"Y3
4440 COLOR 7
4450 GOTO 5720
4460 PRINT "RUN is finished.        *** Press `F5' for another RUN. ***"
4470 STOP
4480 CLS
4490 GOTO 1190
4500 PRINT
4510 PRINT"|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|"
4520 PRINT"|                                                                 |"
4530 PRINT"| ";:COLOR 31:PRINT "***";:COLOR 7:PRINT " CORRECTION MESSAGE ";
4540 COLOR 31:PRINT "***";:COLOR 7:PRINT "  The monthly payment you entered ";
4550 PRINT "is  |"
4560 PRINT"| too low; it does not match other entries.  The correct payment  |"
4570 PRINT"| is on the `calculated mo. paymt.' line above.  You may continue |"
4580 PRINT"| (PRESS `F5', but the RUN may be interrupted again if the error  |"
4590 PRINT"| is too great.  To start over, PRESS `F2' and correct or use the |"
4600 PRINT"| `0' entry.  Check your PRINCIPAL, TERM, and INTEREST entries!   |"
4610 PRINT"|                                                                 |"
4620 PRINT"|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|"
4630 PRINT
4640 STOP
4650 IF X>5 THEN 2970
4660 PRINT
4670 PRINT"|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|"
4680 PRINT"|                                                                 |"
4690 PRINT"| *** ";:COLOR 16,7:PRINT"CORRECTION MESSAGE";:COLOR 7:PRINT" *** ";
4700 PRINT "The monthly payment you entered is   |"
4710 PRINT"| so low that it does not pay the interest charge.  As a result,  |"
4720 PRINT"| the PRINCIPAL increases each month!  To continue would be a     |"
4730 PRINT"| disaster.  If you are certain of the payment, then check the    |"
4740 PRINT"| PRINCIPAL, TERM, and INTEREST entries.  One or more of them has |"
4750 PRINT"| to be incorrect.  Or take the easy way and enter `0' for the    |"
4760 PRINT"| payment.  Please try again.  Press `F2' for another start.      |"
4770 PRINT"|                                                                 |"
4780 PRINT"|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|"
4790 PRINT
4800 STOP
4810 GOTO 1000
4820 PRINT
4830 PRINT"|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|"
4840 PRINT"|                                                                 |"
4850 PRINT"| *** ";:COLOR 16,7:PRINT"CORRECTION MESSAGE";:COLOR 7:PRINT" *** ";
4860 COLOR 7,0
4870 PRINT "Sorry, your monthly payment is not   |"
4880 PRINT"| adequate.  As a result, a year or more is added to the term of  |"
4890 PRINT"| the loan.  Next time, enter `0' and use the computer-supplied   |"
4900 PRINT"| monthly payment figure.  Then check ALL of your input figures   |"
4910 PRINT"| for accuracy.  (Cooperate and graduate!)  Press `F2'.           |"
4920 PRINT"|                                                                 |"
4930 PRINT"|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|"
4940 PRINT
4950 STOP
4960 GOTO 1000
4970 PRINT
4980 PRINT"|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|"
4990 PRINT"|                                                                 |"
5000 PRINT"| ";:COLOR 31:PRINT "***";:COLOR 7:PRINT " CORRECTION MESSAGE ";
5010 COLOR 31:PRINT "***";:COLOR 7:PRINT " Your monthly payment is too high, ";
5020 PRINT "   |"
5030 PRINT"| which means that either the PRINCIPAL, TERM, INTEREST RATE, or  |"
5040 PRINT"| MONTHLY PAYMENT itself is not right.  The correct payment       |"
5050 PRINT"| is on the `calculated mo. paymt.' line above.  You may continue |"
5060 PRINT"| (PRESS `F5'), risking another interruption if the error is too  |"
5070 PRINT"| large.  Or start over (PRESS `F2') and use corrected amounts or |"
5080 PRINT"| the `0' entry for the computer-supplied monthly payment.        |"
5090 PRINT"|                                                                 |"
5100 PRINT"|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|"
5110 PRINT
5120 STOP
5130 IF X>5 THEN 2970
5140 PRINT
5150 PRINT"|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|"
5160 PRINT"|                                                                 |"
5170 PRINT"| *** ";:COLOR 16,7:PRINT"CORRECTION MESSAGE";:COLOR 7:PRINT" *** ";
5180 PRINT "Sorry, the computer's conscience     |"
5190 PRINT"| will not allow continuation.  The MONTHLY PAYMENT is so large   |"
5200 PRINT"| it pays off the loan at least a year ahead of schedule.         |"
5210 PRINT"| Allow the computer to help.  Try again (PRESS `F2'), and enter  |"
5220 PRINT"| `0' for the MONTHLY PAYMENT.  Then see how easy it is!          |"
5230 PRINT"|                                                                 |"
5240 PRINT"|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|"
5250 PRINT
5260 STOP
5270 GOTO 1000
5280 PRINT
5290 KEY(9) OFF
5300 INPUT "Key 2 or 5 to SUMMARIZE; key 8 to DETAIL; 0 to STOP; & Enter: ";Z
5310 IF Z=0 THEN 5260
5320 IF Z>3 AND Z<7 THEN Z=5
5330 IF Z>6 THEN Z=8
5340 IF Z<4 THEN Z=2
5350 GOTO 3150
5360 RETURN
5370 COLOR 9
5380 PRINT USING "######.##";E1;
5390 COLOR 7,0
5400 PRINT
5410 Y9=0
5420 GOTO 3900
5430 IF E=0 THEN 3750
5440 PRINT
5450 G1=CSRLIN:G2=POS(0)
5460 LOCATE 25,1
5470 PRINT"                                                                  "
5480 LOCATE G1,G2
5490 PRINT "       >>> When ready, ENTER your estimated average federal"
5500 PRINT "income tax bracket (needed to solve for any after-tax advantage)."
5510 INPUT "For example, if you will be in the 50% bracket, enter 50."; A4
5520 A3=A4/100
5530 PRINT USING "##";Y10;:PRINT "-";
5540 IF C=3 OR C=6 THEN PRINT USING "##";C;
5550 IF C=9 THEN PRINT C,
5560 Y11=1:IF Y1>Y THEN 4820
5570 LOCATE G,GG
5580 PRINT "REGULAR PAYMENTS REMAINING BALANCE:";
5590 PRINT USING "$$#######.##";P1;
5600 PRINT "  If sold at end of year";Y6;"."
5610 IF E=0 THEN PRINT:GOTO 4460
5620 IF M=>P2+EYE2+E THEN P2=0
5630 PRINT "  Extra Schedule Remaining Balance:";
5640 COLOR 1:PRINT USING "#########.##";P2:COLOR 7,0
5650 PRINT "               Loan Cost Reduction:";
5660 COLOR 10:PRINT USING "#########.##";P1-P2;
5670 COLOR 7,0
5680 PRINT " Total Extra Payments to Principal:    ";
5690 COLOR 18:PRINT USING "#####.##";E1;:COLOR 7,0
5700 D7=1:GOTO 4280
5710 PRINT "  For"D2"years and"D3"months.":GOTO 4360
5720 X6=((Y1*12)+C)-((D2*12)+D3)
5730 X7=X6
5740 IF X7=<0 THEN 5840
5750 FOR X8=X7 TO 1 STEP -1
5760 Y3=Y3+(K*Y3)
5770 NEXT X8
5780 X9=(X7/12)-INT(X7/12)
5790 X9=CINT(X9*12)
5800 X7=INT(X7/12)
5810 IF X=4 THEN 5820
5820 PRINT "PLUS ADDED"I"% INTEREST FOR"X7"YEARS AND"X9"MONTHS TOTALS: ";
5830 COLOR 10:PRINT USING "$$#########.##";Y3;:COLOR 7,0:PRINT
5840 B3=((I-3)/I)*(Y3-E1)+E1
5850 PRINT ">>>"I"% MAY NOT BE AVAILABLE IN A SAFE ALTERNATE INVESTMENT."
5860 PRINT USING"FOR ##.###";I-3;:PRINT USING" %, USE ##.###";I-3;:PRINT" /"I"X ("Y3"-"E1") +"E1"=";
5870 COLOR 10:PRINT USING "$$######.##";B3;:COLOR 7,0
5880 IF P1-P2>(B3-E1) THEN PRINT:GOTO 5920
5890 PRINT
5900 PRINT "This case reveals NO advantage in extra payments to principal."
5910 GOTO 4150
5920 B8=((P1-P2)-((A-B)*(1-A3)))-((Y3-E1)*(1-A3))
5930 B9=((P1-P2)-((A-B)*(1-A3)))-((B3-E1)*(1-A3))
5940 PRINT
5950 PRINT "SAMPLE TAX RESULTS FOLLOW:"
5960 PRINT "The net, after tax, advantage in making extra payments to"
5970 PRINT "principal in this case, compared to an alternate investment:"
5980 PRINT TAB(20) ">>> at";:COLOR 10:PRINT USING "###.###";I;
5990 COLOR 7,0:PRINT"% is: ";:COLOR 10:PRINT USING "$$#####.##";B8;:COLOR 7,0
6000 PRINT TAB(20) ">>> at";:COLOR 10:PRINT USING "###.###";I-3;
6010 COLOR 7,0:PRINT "% is: ";:COLOR 10:PRINT USING"$$#####.##";B9;:COLOR 7,0
6020 PRINT
6030 GOTO 4460
6040 CLS
6050 COLOR 0,7:PRINT" LOAN PAYMENT SOLUTION ";:COLOR 7:PRINT" ENTER (";:COLOR 18:PRINT "SEPARATELY";:COLOR 7:PRINT ") THE LOAN AMOUNT (PRINCIPAL),"
6060 PRINT "INTEREST % PER YEAR, AND YEARS (TERM OF LOAN).  EXAMPLE: P=80000 I=11.75 Y=30"
6070 P=0:K=0:N=0:M=0
6080 INPUT;"P=",P:PRINT " ";:IF P=0 THEN 6140
6090 INPUT;"I=",K:PRINT " ";:INPUT;"Y=",N:PRINT TAB(32);
6100 K=K/1200:N=N*12
6110 M=P*K*(1+K)^N/((1+K)^N-1)
6120 PRINT "PAYMENT PER MONTH = $";:COLOR 0,7:PRINT M;:COLOR 7:PRINT:PRINT
6130 PRINT "ENTER FIGURES FOR ANOTHER LOAN.  IF DONE, ENTER: 0":GOTO 6080
6140 P=0:K=0:N=0:M=0
6150 PRINT:GOTO 1190
6160 GOTO 6210
6170 'AUTHOR'S NAME AND ADDRESS FOLLOWS:
6180 'Joe M. Jeffers
6190 '92-1041 Makakilo Drive #83
6200 'Ewa Beach, HI 96706
6210 END                                                                        CLS
```

## LOANSVGS.BAS

```bas
10 KEY OFF:CLS
20 SCREEN 0
30 WIDTH 40
40 PRINT"░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░"
50 PRINT"░┌───────────────────────────────────┐░"
60 PRINT"░│                                   │░"
70 PRINT"░│            6016-A.BAS             │░"
80 PRINT"░│      LOAN SAVINGS SOLUTIONS       │░"
90 PRINT"░│                                   │░"
100 PRINT"░│                                   │░"
110 PRINT"░│ BROUGHT TO YOU BY THE MEMBERS OF  │░"
120 PRINT"░│      ▄▄▄▄▄ ▄▄▄▄▄ ▄▄▄▄▄ ▄▄▄▄▄      │░"
130 PRINT"░│        █   █   █ █     █   █      │░"
140 PRINT"░│        █   █▄▄▄█ █     █   █      │░"
150 PRINT"░│        █   █     █     █   █      │░"
160 PRINT"░│      ▄▄█▄▄ █     █▄▄▄▄ █▄▄▄█      │░"
170 PRINT"░│                                   │░"
180 PRINT"░│      International PC Owners      │░"
190 PRINT"░│                                   │░"
200 PRINT"░│P.O. Box 10426, Pittsburgh PA 15234│░"
210 PRINT"░│                                   │░"
220 PRINT"░└───────────────────────────────────┘░"
230 PRINT"░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░"
240 PRINT
250 PRINT "       PRESS ANY KEY TO CONTINUE
260 A$=INKEY$: IF A$="" THEN 260
270 WIDTH 80
280 CLS
1000 CLS:KEY OFF
1010 V=1:W=0:T=7:X=0:Z=0:L=0:R=0:U=0
1020 PRINT TAB(12);:COLOR 0,7:PRINT"            Have you made a copy?            ";
1030 COLOR 7,0
1040 FOR L=1 TO 7:PRINT TAB(12);:COLOR 0,7:PRINT "  ";:COLOR 7:PRINT TAB(14) "=";
1050 FOR R=1 TO 8
1060 IF W=0 THEN W=1 ELSE W=0
1070 IF L<5 THEN 1090
1080 IF W=1 THEN 1110 ELSE 1100
1090 IF W=0 THEN 1110
1100 FOR U=1 TO T:PRINT "%";:NEXT U:GOTO 1120
1110 FOR U=1 TO V:PRINT "$";:NEXT U
1120 PRINT "=";:NEXT R
1130 V=V+1:T=T-1:PRINT TAB(55);:COLOR 0,7:PRINT "  ";:COLOR 7:NEXT L:PRINT
1140 PRINT TAB(12);:COLOR 0,7:PRINT"         -- USE - ONLY - `BASICA' --         ";
1150 COLOR 7:PRINT:PRINT
1160 PRINT "File: `LOANSVGS.SOL': That is, LOAN SaVinGS SOLutions."
1170 PRINT "**** COPYRIGHT 1982 * Joe Marvin Jeffers * ALL RIGHTS RESERVED ****"
1180 PRINT "           New users should read the INSTRUCTIONS first.":PRINT
1190 P=0:I=0:Y=0:M=0:E=0:M1=0:F=0:E1=0:P1=0:Y1=0:Q=0:Q1=0:A=0:EYE2=0:P2=0:K=0
1200 B=0:C=0:Y2=0:C1=0:S=0:J=0:I1=0:J1=0:M2=0:M3=0:C2=0:C3=0:C4=0:Y3=0:Y4=0:N=0
1210 H=0
1220 PRINT"|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|"
1230 PRINT"| NOW DO THIS:  Select one of these four choices:                 |"
1240 PRINT"|                                                                 |"
1250 PRINT"| To read the INSTRUCTIONS ------------- Press `1', then `Enter'. |"
1260 PRINT"|             >>> to DISPLAY results --- Press `4', then `Enter'. |"
1270 PRINT"|             >>> to PRINT results ----- Press `7', then `Enter'. |"
1280 PRINT"| To solve MONTHLY PAYMENTS (only) ----- Press `9', then `Enter'. |"
1290 PRINT"|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|"
1300 PRINT
1310 INPUT "MAKE YOUR SELECTION [1, 4, 7, 9, (or 0, to stop)]: ";X
1320 IF X=0 THEN STOP:GOTO 1300
1330 IF X=9 THEN 8940
1340 PRINT:IF X<3 THEN X=1:GOTO 1370
1350 IF X>5 THEN X=7:GOTO 2330
1360 X=4:GOTO 4470
1370 CLS                                 'USER SELECTION IS CODIFIED.
1380 COLOR 0,7
1390 PRINT "COST AND TIME COMPARISONS FOR LOAN PAYMENTS IN ADVANCE";
1400 COLOR 7:PRINT:PRINT
1410 PRINT "The two major routines of this program prepare schedules of loan"
1420 PRINT "payments both with and without extra payments to principal.  They"
1430 PRINT "show the surprisingly large saving which results from modest extra"
1440 PRINT "monthly payments.  However, these figures must be compared with the"
1450 PRINT "interest which may be earned in other available investments.  Use"
1460 PRINT"of this program will give you a good basis for investment decisions."
1470 PRINT
1480 PRINT "The DISPLAY ROUTINE (#4) is designed for use without a printer, or"
1490 PRINT "when you want screen-displayed results.  If a printer is connected,"
1500 PRINT "you can put on paper any displayed results with the `PRINT SCREEN'"
1510 PRINT "(PrtSc) key.  The PRINT ROUTINE (#7) is used only to print results"
1520 PRINT "on paper.  Both routines are used alike and offer the same options."
1530 PRINT "Please try them all to see which ones suit you best."
1540 PRINT
1550 PRINT "The options are numbered (2, 5, & 8) and are described on a later"
1560 PRINT "display.  After choosing an option (by keying its number and the"
1570 PRINT "Enter key) you will be asked to `input' the loan values."
1580 PRINT
1590 PRINT "* * * * To continue reading, press the `F5' key (FAR LEFT) * * * *"
1600 STOP
1610 CLS
1620 PRINT "The PRINCIPAL, TERM of the loan in YEARS, and the INTEREST rate per"
1630 PRINT "YEAR, must be entered.  The MONTHLY PAYMENT and the EXTRA paid per"
1640 PRINT "month are both OPTIONAL.  If you enter `0' for the EXTRA per month,"
1650 PRINT "you will get a complete schedule of regular payments, but the right"
1660 PRINT "half of the page (or display) will be blank.  Try it both ways."
1670 PRINT
1680 PRINT "If you enter `0' as the MONTHLY PAYMENT, the calculated payment"
1690 PRINT "will be used.  It is always calculated anyway.  If you enter your"
1700 PRINT "own payment figure, please be sure it is correct.  In fact, please"
1710 PRINT "be careful of ALL input figures.  A few cents error in the monthly"
1720 PRINT "payment can change the total cost of a mortgage loan by $100."
1730 PRINT "Try your own payment figures. If they are right, they will be okay."
1740 PRINT "Small errors also will be accepted, but an error which makes the"
1750 PRINT "result unusable will put an explanation & suggestion on the screen."
1760 PRINT
1770 PRINT "You will find it easier to use `0' as input for MONTHLY PAYMENTS."
1780 PRINT "If you get unexpected results, you may have made a simple keying"
1790 PRINT "error in your PRINCIPAL, INTEREST, or TERM entries.  Any such error"
1800 PRINT "also will cause the calculated MONTHLY PAYMENT to be wrong."
1810 PRINT
1820 PRINT "  * * * * * * To continue reading, press the `F5' key * * * * * *"
1830 STOP
1840 CLS
1850 PRINT"+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++"
1860 PRINT"  1 | INSTRUCTIONS (FOR NEW USERS)||  0 | STOP (DISCONTINUE)"
1870 PRINT"****|*****************************||****|**************************"
1880 COLOR 15:PRINT "  4 ";:COLOR 7:PRINT "| ";:COLOR 15:PRINT "DISPLAY ";
1890 PRINT "ROUTINE";:COLOR 7:PRINT "             || ";:COLOR 15:PRINT " 7";
1900 COLOR 7:PRINT " | ";:COLOR 15:PRINT "PRINT ROUTINE";:COLOR 7:PRINT
1910 PRINT"====|=============================||====|=========================="
1920 PRINT"  2 | Displays paymt/mo and 1 mo  ||  2 | Prints paymt/mo and 1 mo"
1930 PRINT"O   | paymt each 5 yrs. COMPLETE. ||O   | paymt each yr.  COMPLETE."
1940 PRINT"P---|-----------------------------||P---|--------------------------"
1950 PRINT"T 5 | Solves & displays paymt/mo, ||T 5 | Solves & prints paymt/mo,"
1960 PRINT"I   | final payment months, and   ||I   | final payment months, and"
1970 PRINT"O   | summary if wanted.  BRIEF.  ||O   | summary if wanted. BRIEF."
1980 PRINT"N---|-----------------------------||N---|--------------------------"
1990 PRINT"  8 | Solves & displays paymt/mo. ||  8 | Solves & prints paymt/mo."
2000 PRINT"    | Displays ALL payments in    ||    | Prints ALL payments in"
2010 PRINT"    | groups.  DETAILED LIST.     ||    | groups.  DETAILED LIST."
2020 PRINT"----|=============================||====|=========================="
2030 PRINT"  9 | Quick & easy way to find monthly payments only.  Subroutine. "
2040 PRINT"+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++"
2050 PRINT"(To stop, the `0'is unnecessary; merely press the `Enter' key.  If"
2060 PRINT"you change your mind, `F5' continues, while `F2' starts a new RUN.)"
2070 PRINT "     * * * * * * To continue, press the `F5'key * * * * * *":PRINT
2080 STOP
2090 CLS
2100 PRINT "     Before entering loan figures, you will be asked if you plan"
2110 PRINT "     to sell the mortgaged property, and if so, in how many years."
2120 PRINT "     Also, after entering the loan figures, and if you specify"
2130 PRINT "     extra monthly payments to principal, you will be asked if you"
2140 PRINT "     plan to stop the extra payments after a number of years.  If"
2150 PRINT "     you choose either or both of these options, the program will"
2160 PRINT "     adjust and provide results to fit your choices."
2170 PRINT " SAMPLE ENTRIES to get you started (in order of input):"
2180 PRINT " 1st trial run: 4  2  Y  12  80000  11  30    0    100  Y  3  44"
2190 PRINT " 2nd trial run: 7  2  Y  15  80000  11  30    0    100  Y 12  50"
2200 PRINT " 3rd trial run: 4  2  N      80000  11  30  761.9  100  N     50"
2210 PRINT "     Jot down these figures (or press `Print Screen').":PRINT
2220 PRINT "Loans often are arranged to pay a `30 yr' term in 29 yrs & 11 mos."
2230 PRINT"MONTHS AS DECIMAL FRACTIONS OF A YEAR may aid odd-length term entry:"
2240 PRINT "1      2      3      4      5      6      7      8      9     10     11"
2250 PRINT "0.084  0.167  0.25   0.334  0.417  0.5    0.584  0.667  0.75  0.834  0.917"
2260 PRINT "     A FINAL NOTE:  DETAIL OPTION (8) is useful in showing total"
2270 PRINT "     interest you pay yearly, for INCOME TAX purposes."
2280 PRINT "            >> This Page Concludes the INSTRUCTIONS <<"
2290 PRINT "       * * * * * * To continue, press the F5 key * * * * * *"
2300 STOP
2310 CLS
2320 GOTO 1190
2330 PRINT:'filename: LOANSVGS.SOL *** COPYRIGHT 1982 Joe Marvin Jeffers ***
2340 CLS
2350 PRINT "* * * * * * * * * * * * INSTRUCTION * * * * * * * * * * * *"
2360 PRINT"You chose the program to PRINT results.  Press the number of"
2370 PRINT"your choice, then press the Enter key.  HERE ARE YOUR OPTIONS:"
2380 PRINT"+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++"
2390 PRINT"2.  >>> COMPLETE SUMMARY.  Payment figures for the first month of"
2400 PRINT"    each year.  First the monthly payment is calculated, then the"
2410 PRINT"    chart printed, and finally a recapitulation of results shown."
2420 PRINT"-------------------------------------------------------------------"
2430 PRINT"5.  >>> BRIED SUMMARY.  Payment per mo. is printed.  Input needed:"
2440 PRINT"    Principal, Interest, & Term (years).  You may neter Extra/mo. &"
2450 PRINT"    wait up to 40 seconds (depending of the term) for a summary."
2460 PRINT"-------------------------------------------------------------------"
2470 PRINT"8.  >>> DETAILED LIST.  Every payment is printed on paper in groups"
2480 PRINT"    of one to all.  Total interest is shown for each group."
2490 PRINT"    When prompted, choose the number of months to print each time."
2500 PRINT"+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++"
2510 PRINT:M=0:M1=0:E=0:Y5=0:Y6=41:Y10=0:Y11=0:X7=0:X8=0:X5=0:D=0:D2=0:D3=0
2520 D1=0:D7=0:B3=0:A3=0:A4=0:B8=0:B9=0
2530 INPUT "MAKE YOUR SELECTION NOW {2, 5, 8, (or 0, to stop)}:         ";Z
2540 IF Z=0 THEN STOP:GOTO 2530
2550 IF Z<4 THEN Z=2:GOTO 2570
2560 IF Z<7 THEN Z=5 ELSE Z=8
2570 PRINT
2580 PRINT "If you plan to SELL in a few years, you can STOP mortgage payments"
2590 INPUT "at that time and get a summary.  Will you sell (Y or N)     "; Y8$
2600 IF Y8$=CHR$(110) THEN 2630
2610 IF Y8$=CHR$(78) THEN 2630
2620 INPUT "Enter number of years you plan to keep the property.        "; Y6
2630 PRINT
2640 PRINT "PRINCIPAL AMOUNT of the loan.  Key the figures, then `Enter' key."
2650 INPUT "(Example:  For $45000.00, enter 45000)                          ";P
2660 PRINT
2670 PRINT "INTEREST RATE/YEAR.  Enter the percentage & press `Enter' key."
2680 INPUT "(Example:  For 13 3/4%, enter 13.75; for 9%, enter 9)           ";I
2690 PRINT
2700 PRINT "TERM in YEARS of the loan.  Key the figures and `Enter'."
2710 INPUT "(Example:  For 30 years, enter 30)                              ";Y
2720 K=I/1200:N=Y*12:P1=P:P2=P
2730 M=P*K*(1+K)^N/((1+K)^N-1):PRINT:LPRINT
2740 LPRINT "COST & TIME COMPARISONS FOR LOAN PAYMENTS MADE IN ADVANCE":LPRINT
2750 LPRINT "CALCULATED MONTHLY PAYMENT IS: "M
2760 PRINT "MONTHLY PAYMENT.  Your figure or `0' (preferred), & `Enter'."
2770 PRINT "{PAYMENT SHOULD BE: $"M"(Enter "M" or 0}";:PRINT  TAB(65);:INPUT M1
2780 PRINT:LPRINT
2790 PRINT "EXTRA PER MONTH you will pay.  Enter amount or `0', & `Enter'."
2800 INPUT "(Example:  For $110.00 per month, enter 110)                    ";E
2810 PRINT: IF E=0 THEN 2900
2820 INPUT "Will you STOP EXTRA PAYMENTS during this loan (Y or N)       "; Y7$
2830 IF Y7$=CHR$(78) THEN 2880
2840 IF Y7$=CHR$(110) THEN 2880
2850 IF Y7$=CHR$(89) THEN 2870
2860 IF Y7$<>CHR$(121) THEN 2880
2870 INPUT "Enter number of years EXTRA PAYMENTS will be paid.           "; Y5
2880 PRINT "=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-="
2890 IF M1>0 AND E>0 THEN 2950
2900 IF M1=0 AND E=0 THEN 2920
2910 IF E=0 THEN 2940 ELSE 2930
2920 LPRINT"TERMS: LOAN AMT    INT/YR    TERM (YRS)":GOTO 2970
2930 LPRINT"TERMS: LOAN AMT    INT/YR    TERM (YRS)    EXTRA/MO":GOTO 2980
2940 LPRINT"TERMS: LOAN AMT    INT/YR    TERM (YRS)    PAYMT/MO":GOTO 2990
2950 LPRINT"TERMS: LOAN AMT    INT/YR    TERM (YRS)    PAYMT/MO      EXTRA.MO"
2960 LPRINT "      $"P;:LPRINT TAB(19) I;"%",Y,"$";M1,"$";E:GOTO 3000
2970 LPRINT "      $"P;:LPRINT TAB(19) I;"%",Y:GOTO 3020
2980 LPRINT "      $"P;:LPRINT TAB(19) I;"%",Y,"$";E:GOTO 3000
2990 LPRINT "      $"P;:LPRINT TAB(19) I;"%",Y,"$";M1:GOTO 3020
3000 LPRINT:LPRINT "SCHEDULE FOR REGULAR PAYMENTS";
3010 LPRINT SPC(7) "SCHEDULE WITH EXTRA PAYMENTS":LPRINT:GOTO 3070
3020 LPRINT:LPRINT "SCHEDULE FOR REGULAR PAYMENTS":LPRINT
3030 IF Z<>5 THEN 3070
3040 PRINT:PRINT "PAYMENT ($";M;") HAS BEEN PRINTED.":PRINT
3050 PRINT "IF YOU WANT A SUMMARY, PRESS `F5'; IF NOT, PRESS `F2'."
3060 STOP
3070 IF M1=0 THEN M1=M
3080 IF M1=M THEN 3150
3090 IF M1>0 THEN M2=M1-M
3100 M3=ABS(M2)
3110 IF M3<.6 THEN 3140
3120 IF M3>M2 THEN 6780
3130 IF ME=<M2 THEN 7250
3140 M=M1
3150 LPRINT TAB(9) "REMAIN.";:LPRINT TAB(18) "AMOUNT";:LPRINT TAB(28) "TOTAL";
3160 IF E=0 OR F>0 THEN LPRINT:GOTO 3200
3170 LPRINT TAB(37) "REMAIN.";
3180 IF E=0 OR F>0 THEN LPRINT:GOTO 3200
3190 LPRINT TAB(47) "AMOUNT";:LPRINT TAB(57) "TOTAL";:LPRINT TAB(67) "EXTRA"
3200 LPRINT "YR";:LPRINT TAB(4) "MO";
3210 LPRINT TAB(9) "BAL. ";:LPRINT TAB(18) "TO INT";:LPRINT TAB(28) "TO INT";
3220 IF E=0 OR F>0 THEN LPRINT:GOTO 3260
3230 LPRINT TAB(37) "BAL. ";
3240 IF E=0 OR F>0 THEN LPRINT:GOTO 3260
3250 LPRINT TAB(47) "TO INT";:LPRINT TAB(57)"TO INT";:LPRINT TAB(67) "TO PRIN."
3260 LPRINT
3270 IF H=1 THEN 3440
3280 IF Z<>5 THEN 3310
3290 PRINT:PRINT "Please wait up to 40 seconds for the summary to be prepared."
3300 PRINT "A message will be displayed when the job is finished."
3310 IF Z<>8 THEN 3510
3320 PRINT
3330 PRINT "You may change to a faster SUMMARY at ANY time DURING processing."
3340 PRINT "Press `F9'.  If screen is asking for INPUT,also press `Enter'."
3350 PRINT "Later you may return to DETAILED listing by pressing `F9' again."
3360 PRINT
3370 PRINT ">>>> Key the NUMBER OF MONTHS you want to print, then `Enter':";
3380 KEY (9) ON
3390 INPUT "   ";J
3400 ON KEY (9) GOSUB 7560
3410 KEY (9) OFF
3420 IF J=0 THEN STOP:GOTO 3370
3430 IF H=1 THEN 3150
3440 H=0
3450 IF J>480 THEN J=480
3460 J=480-J
3470 J1=0
3480 O=0:O1=0
3490 J=J+1
3500 J1=J1+1
3510 KEY(9) ON
3520 ON KEY(9) GOSUB 7560
3530 KEY(9) STOP
3540 IF (Y1*12)+C=>Y6*12 THEN 7740
3550 I1=P1*K
3560 O=O+I1
3570 Q=P1:P1=P1-(M-I1):Q1=P1
3580 IF Q1=>Q THEN 6940
3590 A=A+I1
3600 IF M=>P1+I1 THEN 4210
3610 IF E=0 OR F>0 THEN 3770
3620 EYE2=P2*K
3630 O1=O1+EYE2
3640 IF Y1=0 THEN 3690
3650 IF Y5=0 THEN 3690
3660 IF (Y1*12)+C<Y5*12 THEN 3690
3670 P2=P2-(M-EYE2)
3680 GOTO 3700
3690 P2=P2-(M-EYE2)-E
3700 B=B+EYE2
3710 IF (Y1*12)+C=>Y6*12 THEN 7740
3720 IF Y5=0 THEN 3740
3730 IF (Y1*12)+C=>Y5*12 THEN 3770
3740 D=D+1:D1=D MOD 12
3750 IF D1=0 THEN X5=X5+1
3760 E1=E1+E
3770 C=(C+1) MOD 12
3780 IF C=0 THEN Y1=Y1+1:Y4=Y4+1
3790 IF F=>1 THEN 3810
3800 IF M>=P2+EYE2+E THEN 4180
3810 IF Y11=1 THEN 3830
3820 PRINT:PRINT "Yr. Months (Processing; pause at any time with key `F9'.)"
3830 IF Y11=0 THEN 3860
3840 IF Y1=Y10 THEN 3870
3850 Y10=Y1
3860 PRINT USING "##";Y10;:PRINT "-";
3870 IF C=3 OR C=6 THEN PRINT USING "##";C;
3880 IF C=9 THEN PRINT C,
3890 Y11=1:IF Y1>Y THEN 7100
3900 IF Z=5 AND S=2 THEN S=3
3910 IF Y1=0 AND C=1 THEN 3950
3920 IF S=1 OR F=2 THEN 3950
3930 IF Z=8 THEN 3950
3940 IF Z=2 AND C=0 THEN 3950 ELSE 3510
3950 LPRINT USING "## ";Y1;:LPRINT USING "## ";C;
3960 LPRINT USING "######.## ";P1;:LPRINT USING "####.## ";I1;
3970 IF F>0 THEN S=S+1
3980 IF S=2 THEN Y2=Y1:C1=C
3990 IF S=>3 OR E=0 THEN 4020
4000 LPRINT USING "#######.## ";A;
4010 GOTO 4060
4020 LPRINT USING "#######.## ";A
4030 IF (Y1*12)+C=>Y6*12 AND E=0 THEN 7970
4040 IF (Y1*12)+C=>Y6*12 THEN 7760
4050 IF S=>1 OR E=0 THEN 4080
4060 LPRINT USING "######.## ";P2;:LPRINT USING "####.## ";EYE2;
4070 LPRINT USING "#######.## ";B;:LPRINT USING "######.##";E1
4080 IF F=2 THEN 4240
4090 IF Z<>8 THEN 3510
4100 IF J1=12 THEN H=1
4110 IF J1=12 THEN 4130
4120 IF J<480 THEN 3490
4130 LPRINT:LPRINT "REG. INTEREST PAID THESE"J1;"MONTHS:"O;
4140 IF O1=0 THEN LPRINT:GOTO 4160
4150 LPRINT "-- INT., EXTRA SCHED:"O1
4160 LPRINT:IF J=480 THEN 3360
4170 GOTO 3470
4180 IF P2<0 THEN P2=0
4190 F=1:S=1
4200 GOTO 3810
4210 IF P1<0 THEN P1=0
4220 F=2
4230 GOTO 3770
4240 LPRINT:IF Y1<Y-1 THEN 7420
4250 LPRINT "TOTAL COST OF REGULARLY PAID LOAN: ";
4260 LPRINT USING "$$##########.##";A+P
4270 IF E=0 THEN PRINT:PRINT "RUN is finished."
4280 IF E=0 THEN PRINT"               *** Press `F5' to RUN another loan. ***"
4290 IF E=0 THEN STOP:CLS:GOTO 1190
4300 LPRINT "TOTAL COST OF LOAN WITH EXTRA PAYMENTS: ";
4310 LPRINT USING "#######.##";P+B
4320 LPRINT TAB(20) "DIFFERENCE (SAVING): ";
4330 LPRINT USING "#######.##";(A+P)-(P+B);
4340 GOTO 6500
4350 PRINT:PRINT "** WAIT FOR SEVERAL MORE LINES TO PRINT **":PRINT:LPRINT
4360 LPRINT
4370 LPRINT "THE AMOUNT (FUTURE VALUE) YOU MAY EXPECT BY INVESTING THE EXTRA"
4380 LPRINT "PAYMENTS, $";E;"/mo, FOR THE SAME PERIOD,";D2;"yrs &";D3;"mos, IN"
4390 LPRINT"ANOTHER INVESTMENT AT";I;"% COMPOUNDED MONTHLY WOULD BE:    ";
4400 LPRINT USING "$$######.##";Y3
4410 LPRINT:GOTO 8100
4420 PRINT "RUN is finished.              *** Press `F5' for another RUN. ***"
4430 STOP
4440 CLS
4450 GOTO 1190
4460 'filename: LOANSVGS.SOL *** COPYRIGHT 1982 Joe Marvin Jeffers ***"
4470 CLS:X=4
4480 PRINT "* * * * * * * * * * * * INSTRUCTION * * * * * * * * * * * *"
4490 PRINT"You chose the program to DISPLAY results.  Press the number of"
4500 PRINT"your choice, then press the Enter key.  HERE ARE YOUR OPTIONS:"
4510 PRINT"+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++"
4520 PRINT"2.  >>> COMPLETE SUMMARY.  Payment figures for the first month of"
4530 PRINT"    each 5th year.  The monthly payment is calculated, then the"
4540 PRINT"    chart displayed, and finally a recapitulation of results shown."
4550 PRINT"-------------------------------------------------------------------"
4560 PRINT"5.  >>> BRIEF SUMMARY.  Payment per mo. displayed.  Input needed:"
4570 PRINT"    Principal, Interest, & Term (years).  You may enter Extra/mo &"
4580 PRINT"    wait up to 40 seconds (depending on the term) for a summary."
4590 PRINT"-------------------------------------------------------------------"
4600 PRINT"8.  >>> DETAILED LIST.  EVERY PAYMENT is displayed in groups of 1"
4610 PRINT"    to all.  Total INTEREST is shown for each group of months."
4620 PRINT"    When prompted, choose the no. of months to display and ENTER."
4630 PRINT"+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++"
4640 PRINT:M=0:M1=0:E=0:Y5=0:Y6=41:Y10=0:X7=0:X8=0:X5=0:D=0:D2=0:D3=0:B3=0
4650 Y11=0:D1=0:D7=0:A3=0:A4=0:B8=0:B9=0
4660 INPUT "MAKE YOUR SELECTION NOW {2, 5, 8, (OR 0, TO STOP)}        ";Z
4670 IF Z=0 THEN STOP:GOTO 4660
4680 PRINT
4690 PRINT "If you plan to SELL in a few years, you can STOP mortgage payments"
4700 INPUT "at that time and get a summary.  Will you sell (Y or N)   "; Y8$
4710 IF Y8$=CHR$(78) THEN 4740
4720 IF Y8$=CHR$(110) THEN 4740
4730 INPUT "Enter number of years you plan to keep the property.      "; Y6
4740 IF Z<4 THEN Z=2:GOTO 4760
4750 IF Z<7 THEN Z=5 ELSE Z=8
4760 PRINT
4770 PRINT "PRINCIPAL AMOUNT of the loan. Key the figures, then `Enter' key."
4780 INPUT "(Example:  For $45000.00, enter 45000)                          ";P
4790 PRINT
4800 PRINT "INTEREST RATE/YEAR.  Enter the percentage & press `Enter' key."
4810 INPUT "(Example:  For 13 3/4%, enter 13.75; for 9%, enter 9)           ";I
4820 PRINT
4830 PRINT "TERM in YEARS of the loan. Key in the figures and `Enter'."
4840 INPUT"(Example:  For 30 years, enter 30)                              ";Y
4850 K=I/1200:N=Y*12:P1=P:P2=P
4860 M=P*K*(1+K)^N/((1+K)^N-1):PRINT
4870 PRINT "MONTHLY PAYMENT.  Your figure or `0' (preferred), and `Enter'."
4880 PRINT "{PAYMENT SHOULD BE: $"M"(Enter "M" or 0)}";:PRINT TAB(65);:INPUT M1
4890 PRINT
4900 PRINT "EXTRA PER MONTH you will pay.  Enter amount or `0', and `Enter'."
4910 INPUT"(Example:  fOR $110.00 per month, enter 110)                    ";E
4920 CLS
4930 PRINT"****   ****   ****   ****   ****   ****   ****   ****   ****   ****   ****"
4940 PRINT
4950 IF E=0 THEN 5030
4960 INPUT "Will you STOP EXTRA PAYMENTS during this loan (Y or N)    "; Y7$
4970 IF Y7$=CHR$(78) THEN 5020
4980 IF Y7$=CHR$(110) THEN 5020
4990 IF Y7$=CHR$(89) THEN 5010
5000 IF Y7$<>CHR$(121) THEN 5020
5010 INPUT "Enter number of years EXTRA PAYMENTS will be paid.        "; Y5
5020 PRINT
5030 COLOR 0,7
5040 PRINT "COST & TIME COMPARISONS FOR LOAN PAYMENTS MADE IN ADVANCE";
5050 COLOR 23:PRINT "         WORKING";:COLOR 7,0:PRINT
5060 PRINT "Calculated Monthly Payment is: $";:COLOR 9:PRINT M;
5070 COLOR 7:PRINT SPC(96) "(Please wait for: `RUN";
5080 PRINT "                                                          is finished' message.)";
5090 IF M1>0 AND E>0 THEN 5150
5100 IF M1=0 AND E=0 THEN 5120
5110 IF E=0 THEN 5140 ELSE 5130
5120 PRINT "TERMS: LOAN AMT    INT/YR    TERM (YRS)":GOTO 5170
5130 PRINT "TERMS: LOAN AMT    INT/YR    TERM (YRS)    EXTRA/MO":GOTO 5180
5140 PRINT "TERMS: LOAN AMT    INT/YR    TERM (YRS)    PAYMT/MO":GOTO 5190
5150 PRINT "TERMS: LOAN AMT    INT/YR    TERM (YRS)    PAYMT/MO      EXTRA/MO"
5160 PRINT"       $"P;:PRINT TAB(19) I;"%",Y,"$";:COLOR 23:PRINT M1,:COLOR 7:PRINT "$";E:GOTO 5200
5170 PRINT "      $"P;:PRINT TAB(19) I;"%",Y:GOTO 5220
5180 PRINT "      $"P;:PRINT TAB(19) I;"%",Y,"$";E:GOTO 5200
5190 PRINT "      $"P;:PRINT TAB(19) I;"%",Y,"$";:COLOR 23:PRINT M1:COLOR 7:GOTO 5220
5200 COLOR 1:PRINT "SCHEDULE FOR REGULAR PAYMENTS";:COLOR 7:PRINT SPC(7);
5210 COLOR 1:PRINT"SCHEDULE WITH EXTRA PAYMENTS";:COLOR 7:PRINT:PRINT:GOTO 5270
5220 IF Z><5 THEN 5260
5230 PRINT:PRINT "If you want a summary, PRESS `F5'; if not, PRESS `F2'."
5240 STOP
5250 PRINT:PRINT "Please wait up to 40 seconds for the summary to be prepared."
5260 PRINT:COLOR 1:PRINT "SCHEDULE FOR REGULAR PAYMENTS":COLOR 7:PRINT:PRINT
5270 IF Z<>8 THEN 5320
5280 PRINT "(You may change to a faster SUMMARY at ANY time DURING processing."
5290 PRINT "Press `F9'.  If screen is asking for INPUT, also press `Enter'."
5300 PRINT "Later you may return to DETAILED listing by pressing `F9' again.)"
5310 PRINT
5320 IF M1=0 THEN M1=M
5330 IF M1=M THEN 5400
5340 IF M1>0 THEN M2=M1-M
5350 M3=ABS(M2)
5360 IF M3<.6 THEN 5390
5370 IF M3>M2 THEN 6780
5380 IF M3=<M2 THEN 7250
5390 M=M1
5400 PRINT TAB(9) "REMAIN.";:PRINT TAB(18) "AMOUNT";:PRINT TAB(28) "TOTAL";
5410 IF E=0 OR F>0 THEN PRINT:GOTO 5450
5420 PRINT TAB(37) "REMAIN.";
5430 IF E=0 OR F>0 THEN PRINT:GOTO 5450
5440 PRINT TAB(47) "AMOUNT";:PRINT TAB(57) "TOTAL";:PRINT TAB(67) "EXTRA"
5450 PRINT "YR";:PRINT TAB(4) "MO";
5460 PRINT TAB(9)"BAL. ";:PRINT TAB(18) "TO INT";:PRINT TAB(28) "TO INT";
5470 IF E=0 OR F>0 THEN PRINT:GOTO 5510
5480 PRINT TAB(37) "BAL. ";
5490 IF E=0 OR F>0 THEN PRINT:GOTO 5510
5500 PRINT TAB(47) "TO INT";:PRINT TAB(57)"TO INT";:PRINT TAB(67)"TO PRIN."
5510 IF H=1 THEN 5610
5520 IF Z<>8 THEN 5680
5530 PRINT ">>>>"
5540 PRINT ">>>> Key the NUMBER OF MONTHS you wish to show, then `Enter': ";
5550 KEY(9) ON
5560 INPUT "   ";J
5570 ON KEY(9) GOSUB 7560
5580 KEY(9) OFF
5590 IF J=0 THEN 7540
5600 IF H=1 THEN 5400
5610 H=0
5620 IF J>480 THEN J=480
5630 J=480-J
5640 J1=0
5650 O=0:O1=0
5660 J=J+1
5670 J1=J1+1
5680 KEY(9) ON
5690 ON KEY(9) GOSUB 7560
5700 KEY(9) STOP
5710 IF (Y1*12)+C=>Y6*12 THEN 7740
5720 I1=P1*K
5730 O=O+I1
5740 Q=P1:P1=P1-(M-I1):Q1=P1
5750 IF Q1=>Q THEN 6940
5760 A=A+I1
5770 IF M=>P1+I1 THEN 6340
5780 IF E=0 OR F>0 THEN 5940
5790 EYE2=P2*K
5800 O1=O1+EYE2
5810 IF Y1=0 THEN 5860
5820 IF Y5=0 THEN 5860
5830 IF (Y1*12)+C<Y5*12 THEN 5860
5840 P2=P2-(M-EYE2)
5850 GOTO 5870
5860 P2=P2-(M-EYE2)-E
5870 B=B+EYE2
5880 IF (Y1*12)+C=>Y6*12 THEN 7740
5890 IF Y5=0 THEN 5910
5900 IF (Y1*12)+C=>Y5*12 THEN 5940
5910 D=D+1:D1=D MOD 12
5920 IF D1=0 THEN X5=X5+1
5930 E1=E1+E
5940 C=(C+1) MOD 12
5950 IF C=0 THEN Y1=Y1+1:Y4=Y4+1
5960 IF F=>1 THEN 5980
5970 IF M=>P2+EYE2+E THEN 6300
5980 IF Y1>Y+1 THEN 7100
5990 IF Z=5 AND S=2 THEN S=3
6000 IF S=1 OR F=2 THEN 6060
6010 IF Z=8 THEN 6060
6020 IF Y1=0 AND C=1 THEN 6060
6030 IF Z=5 THEN 6210
6040 IF Y4<5 THEN 5680
6050 Y4=0
6060 PRINT USING "## ";Y1;:PRINT USING "## ";C;
6070 PRINT USING "######.## ";P1;:PRINT USING "####.## ";I1;
6080 IF F>0 THEN S=S+1
6090 IF S=2 THEN Y2=Y1:C1=C
6100 IF S=>3 OR E=0 THEN 6130
6110 PRINT USING "#######.## ";A;
6120 GOTO 6170
6130 PRINT USING "#######.## ";A
6140 IF (Y1*12)+C=>Y6*12 AND E=0 THEN 7820
6150 IF (Y1*12)+C=>Y6*12 THEN 7760
6160 IF S=>1 OR E=0 THEN 6210
6170 PRINT USING "######.## ";P2;:PRINT USING "####.## ";EYE2;
6180 PRINT USING "#######.## ";B;
6190 IF Y9=1 THEN 7680
6200 PRINT USING "######.##";E1
6210 IF F=2 THEN 6370
6220 IF Z<>8 THEN 5680
6230 IF J1=12 THEN H=1:GOTO 6250
6240 IF J<480 THEN 5660
6250 PRINT "REG. INTEREST PAID THESE"J1;"MONTHS:"O;
6260 IF O1=0 THEN PRINT:GOTO 6280
6270 PRINT "-- INT., EXTRA SCHED:"O1
6280 PRINT:IF J=480 THEN 5540
6290 GOTO 5640
6300 IF P2<0 THEN P2=0
6310 Y9=1
6320 F=1:S=1
6330 GOTO 5980
6340 IF P1<0 THEN P1=0
6350 F=2
6360 GOTO 5940
6370 PRINT :IF Y1<Y-1 THEN 7420
6380 PRINT "TOTAL COST OF REGULARLY PAID LOAN: ";
6390 PRINT USING "$$##########.##";A+P
6400 IF E<>0 THEN 6460
6410 PRINT
6420 PRINT "  RUN is finished.        *** PRESS `F5' to RUN another loan. ***"
6430 STOP
6440 CLS
6450 GOTO 1190
6460 PRINT "TOTAL COST OF LOAN WITH EXTRA PAYMENTS: ";
6470 PRINT USING "#######.##";P+B
6480 PRINT TAB(20) "DIFFERENCE (SAVING): ";
6490 COLOR 9:PRINT USING "#######.##";(A+P)-(P+B);:COLOR 7
6500 PRINT
6510 PRINT "       >>> When ready, ENTER your estimated average federal"
6520 PRINT "income tax bracket (needed to solve for any after-tax advantage)."
6530 INPUT "For example, if you will be in the 50% bracket, enter 50."; A4
6540 A3=A4/100
6550 IF Y2=0 AND Y5=0 THEN D2=Y1:D3=C:GOTO 6620
6560 IF Y2=0 AND Y5=>Y6 THEN D2=Y1:D3=C:GOTO 6620
6570 IF Y2=0 THEN D2=X5:D3=D1:GOTO 6620
6580 IF Y5=0 THEN D2=Y2:D3=C1:GOTO 6620
6590 IF Y6=>Y5 AND Y2=>Y5 THEN D2=X5:D3=D1:GOTO 6620
6600 IF Y5=>Y2 AND Y6=>Y2 THEN D2=Y2:D3=C1:GOTO 6620
6610 D2=Y1:D3=C:GOTO 6620
6620 IF D7=1 THEN D7=0:IF X=4 THEN 7950 ELSE 8090
6630 C2=(D2*12)+D3
6640 FOR C3=C2 TO 1 STEP -1
6650 C4=E*(1+K)^C3
6660 Y3=Y3+C4
6670 NEXT C3
6680 IF X=7 THEN 4350
6690 PRINT">> THE AMOUNT (FUTURE VALUE) YOU MAY EXPECT BY INVESTING THE EXTRA"
6700 PRINT "PAYMENTS, $";E;"/mo, FOR THE SAME PERIOD,";D2;"yrs &";D3;"mos, IN"
6710 PRINT "ANOTHER INVESTMENT AT";I;"% COMPOUNDED MONTHLY WOULD BE: $"Y3
6720 COLOR 7
6730 GOTO 8100
6740 PRINT "RUN is finished.        *** Press `F5' for another RUN. ***"
6750 STOP
6760 CLS
6770 GOTO 1190
6780 PRINT
6790 PRINT"|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|"
6800 PRINT"|                                                                 |"
6810 PRINT"| ";:COLOR 31:PRINT "***";:COLOR 7:PRINT " CORRECTION MESSAGE ";
6820 COLOR 31:PRINT "***";:COLOR 7:PRINT "  The monthly payment you entered ";
6830 PRINT "is  |"
6840 PRINT"| too low; it does not match other entries.  The correct payment  |"
6850 PRINT"| is on the `calculated mo. paymt.' line above.  You may continue |"
6860 PRINT"| (PRESS `F5', but the RUN may be interrupted again if the error  |"
6870 PRINT"| is too great.  To start over, PRESS `F2' and correct or use the |"
6880 PRINT"| `0' entry.  Check your PRINCIPAL, TERM, and INTEREST entries!   |"
6890 PRINT"|                                                                 |"
6900 PRINT"|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|"
6910 PRINT
6920 STOP
6930 IF X>5 THEN 3140 ELSE 5390
6940 PRINT
6950 PRINT"|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|"
6960 PRINT"|                                                                 |"
6970 PRINT"| *** ";:COLOR 16,7:PRINT"CORRECTION MESSAGE";:COLOR 7:PRINT " *** ";
6980 PRINT "The monthly payment you entered is   |"
6990 PRINT"| so low that it does not pay the interest charge.  As a result,  |"
7000 PRINT"| the PRINCIPAL increases each month!  To continue would be a     |"
7010 PRINT"| disaster.  If you are certain of the payment, then check the    |"
7020 PRINT"| PRINCIPAL, TERM, and INTEREST entries.  One or more of them has |"
7030 PRINT"| to be incorrect.  Or take the easy way and enter `0' for the    |"
7040 PRINT"| payment.  Please try again.  Press `F2' for another start.      |"
7050 PRINT"|                                                                 |"
7060 PRINT"|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|"
7070 PRINT
7080 STOP
7090 GOTO 1000
7100 PRINT
7110 PRINT"|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|"
7120 PRINT"|                                                                 |"
7130 PRINT"| *** ";:COLOR 16,7:PRINT"CORRECTION MESSAGE";:COLOR 7:PRINT" *** ";
7140 COLOR 7,0
7150 PRINT "Sorry, your monthly payment is not   |"
7160 PRINT"| adequate.  As a result, a year or more is added to the term of  |"
7170 PRINT"| the loan.  Next time, enter `0' and use the computer-supplied   |"
7180 PRINT"| monthly payment figure.  Then check ALL of your input figures   |"
7190 PRINT"| for accuracy.  (Cooperate and graduate!)  Press `F2'.           |"
7200 PRINT"|                                                                 |"
7210 PRINT"|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|"
7220 PRINT
7230 STOP
7240 GOTO 1000
7250 PRINT
7260 PRINT"|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|"
7270 PRINT"|                                                                 |"
7280 PRINT"| ";:COLOR 31:PRINT "***";:COLOR 7:PRINT " CORRECTION MESSAGE ";
7290 COLOR 31:PRINT "***";:COLOR 7:PRINT " Your monthly payment is too high, ";
7300 PRINT "   |"
7310 PRINT"| which means that either the PRINCIPAL, TERM, INTEREST RATE, or  |"
7320 PRINT"| MONTHLY PAYMENT itself is not right.  The correct payment       |"
7330 PRINT"| is on the `calculated mo. paymt.' line above.  You may continue |"
7340 PRINT"| (PRESS `F5'), risking another interruption if the error is too  |"
7350 PRINT"| large.  Or start over (PRESS `F2') and use corrected amounts or |"
7360 PRINT"| the `0' entry for the computer-supplied monthly payment.        |"
7370 PRINT"|                                                                 |"
7380 PRINT"|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|"
7390 PRINT
7400 STOP
7410 IF X>5 THEN 3140 ELSE 5390
7420 PRINT
7430 PRINT"|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|"
7440 PRINT"|                                                                 |"
7450 PRINT"| *** ";:COLOR 16,7:PRINT"CORRECTION MESSAGE";:COLOR 7:PRINT" *** ";
7460 PRINT "Sorry, the computer's conscience     |"
7470 PRINT"| will not allow continuation.  The MONTHLY PAYMENT is so large   |"
7480 PRINT"| it pays off the loan at least a year ahead of schedule.         |"
7490 PRINT"| Allow the computer to help.  Try again (PRESS `F2'), and enter  |"
7500 PRINT"| `0' for the MONTHLY PAYMENT.  Then see how easy it is!          |"
7510 PRINT"|                                                                 |"
7520 PRINT"|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|"
7530 PRINT
7540 STOP
7550 GOTO 1000
7560 PRINT
7570 KEY(9) OFF
7580 INPUT "Key 2 or 5 to SUMMARIZE; key 8 to DETAIL; 0 to STOP; & Enter: ";Z
7590 IF Z=0 THEN 7540
7600 IF Z>3 AND Z<7 THEN Z=5
7610 IF Z>6 THEN Z=8
7620 IF Z<4 THEN Z=2
7630 IF X=7 THEN LPRINT
7640 IF X=7 THEN Y11=0
7650 IF Z=8 AND X=7 THEN 3360
7660 IF X=7 THEN 3530 ELSE 5520
7670 RETURN
7680 COLOR 9
7690 PRINT USING "######.##";E1;
7700 COLOR 7,0
7710 PRINT
7720 Y9=0
7730 GOTO 6210
7740 IF E=0 AND X=7 THEN 3950
7750 IF E=0 THEN 6060
7760 PRINT
7770 PRINT "       >>> When ready, ENTER your estimated average federal"
7780 PRINT "income tax bracket (needed to solve for any after-tax advantage)."
7790 INPUT "For example, if you will be in the 50% bracket, enter 50."; A4
7800 A3=A4/100
7810 IF X=7 THEN 7970
7820 PRINT "Regular Payments Remaining Balance:";
7830 PRINT USING "$$#######.##";P1;
7840 PRINT "  If sold at end of year";Y6;"."
7850 IF E=0 THEN PRINT:GOTO 6740
7860 IF M=>P2+EYE2+E THEN P2=0
7870 PRINT "  Extra Schedule Remaining Balance:";
7880 COLOR 1:PRINT USING "#########.##";P2:COLOR 7,0
7890 PRINT "            Loan Balance Reduction:";
7900 COLOR 10:PRINT USING "#########.##";P1-P2;
7910 COLOR 7,0
7920 PRINT " Total Extra Payments to Principal:    ";
7930 COLOR 18:PRINT USING "#####.##";E1;:COLOR 7,0
7940 D7=1:GOTO 6550
7950 PRINT "  For"D2"years and"D3"months.":GOTO 6630
7960 IF E=0 THEN 3950
7970 LPRINT:LPRINT "Regular Payments Remaining Balance:";
7980 LPRINT USING "$$#######.##";P1;
7990 LPRINT "  If sold at end of year";Y6;"."
8000 IF E=0 THEN PRINT:GOTO 4420
8010 IF M=>P2+EYE2+E THEN P2=0
8020 LPRINT "  Extra Schedule Remaining Balance:";
8030 LPRINT USING "#########.##";P2
8040 LPRINT "            Loan Balance Reduction:";
8050 LPRINT USING "#########.##";P1-P2
8060 LPRINT " Total Extra Payments to Principal:   ";
8070 LPRINT USING "######.##";E1;
8080 D7=1:GOTO 6550
8090 LPRINT "  For"D2"years and"D3"months.":GOTO 6630
8100 X6=((Y1*12)+C)-((D2*12)+D3)
8110 X7=X6
8120 IF X7=<0 THEN 8250
8130 FOR X8=X7 TO 1 STEP -1
8140 Y3=Y3+(K*Y3)
8150 NEXT X8
8160 X9=(X7/12)-INT(X7/12)
8170 X9=CINT(X9*12)
8180 X7=INT(X7/12)
8190 IF X=4 THEN 8230
8200 LPRINT "PLUS ADDED"I"% INTEREST FOR"X7"YEARS AND"X9"MONTHS TOTALS: ";
8210 LPRINT USING "$$######.##";Y3
8220 LPRINT:GOTO 8250
8230 PRINT "PLUS ADDED"I"% INTEREST FOR"X7"YEARS AND"X9"MONTHS TOTALS: ";
8240 COLOR 10:PRINT USING "$$#########.##";Y3;:COLOR 7,0:PRINT
8250 B3=((I-3)/I)*(Y3-E1)+E1:IF X=7 THEN 8300
8260 PRINT ">>>"I"% MAY NOT BE AVAILABLE IN A SAFE ALTERNATE INVESTMENT."
8270 PRINT USING"FOR ##.###";I-3;:PRINT USING" %, USE ##.###";I-3;:PRINT" /"I"X ("Y3"-"E1") +"E1"=";
8280 COLOR 10:PRINT USING "$$######.##";B3;:COLOR 7,0
8290 GOTO 8530
8300 LPRINT">>>"I"% MAY NOT BE AVAILABLE IN A SAFE ALTERNATE INVESTMENT.  FOR"
8310 LPRINT USING"##.###";I-3;:LPRINT USING" %, USE _(###.###";I-3;:LPRINT" /"I") X ("Y3"-"E1") +"E1"=";:LPRINT TAB(63);
8320 LPRINT USING "$$######.##";B3
8330 LPRINT
8340 IF P1-P2>(B3-E1) THEN 8380
8350 LPRINT
8360 LPRINT "This case reveals NO advantage in extra payments to principal."
8370 GOTO 4420
8380 LPRINT
8390 B8=((P1-P2)-((A-B)*(1-A3)))-((Y3-E1)*(1-A3))
8400 B9=((P1-P2)-((A-B)*(1-A3)))-((B3-E1)*(1-A3))
8410 LPRINT "SAMPLE TAX RESULTS FOLLOW (using"A4"% as the tax bracket):"
8420 LPRINT "The net, after tax, advantage in making extra payments to"
8430 LPRINT "principal in this case, compared to an alternate investment:"
8440 LPRINT:LPRINT TAB(20) ">>> at";:LPRINT USING"###.###";I;:LPRINT "% is:";
8450 LPRINT USING "$$######.##";B8
8460 LPRINT TAB(20) ">>> at";:LPRINT USING"###.###";I-3;:LPRINT "% is:";
8470 LPRINT USING "$$######.##";B9
8480 LPRINT
8490 PRINT "TO EXAMINE THE METHOD FOR FINDING TAX RESULTS, PRESS `M' & ENTER."
8500 INPUT "TO AVOID IT, PRESS THE SPACE BAR AND `ENTER'."; M$
8510 IF M$=CHR$(77) OR M$=CHR$(109) THEN 8720
8520 GOTO 4420
8530 IF P1-P2>(B3-E1) THEN PRINT:GOTO 8570
8540 PRINT
8550 PRINT "This case reveals NO advantage in extra payments to principal."
8560 GOTO 6420
8570 B8=((P1-P2)-((A-B)*(1-A3)))-((Y3-E1)*(1-A3))
8580 B9=((P1-P2)-((A-B)*(1-A3)))-((B3-E1)*(1-A3))
8590 PRINT
8600 PRINT "SAMPLE TAX RESULTS FOLLOW:"
8610 PRINT "The net, after tax, advantage in making extra payments to"
8620 PRINT "principal in this case, compared to an alternate investment:"
8630 PRINT TAB(20) ">>> at";:COLOR 10:PRINT USING "###.###";I;
8640 COLOR 7,0:PRINT"% is: ";:COLOR 10:PRINT USING "$$#####.##";B8;:COLOR 7,0
8650 PRINT TAB(20) ">>> at";:COLOR 10:PRINT USING "###.###";I-3;
8660 COLOR 7,0:PRINT "% is: ";:COLOR 10:PRINT USING"$$#####.##";B9;:COLOR 7,0
8670 PRINT
8680 PRINT "TO EXAMINE THE METHOD FOR FINDING TAX RESULTS, PRESS `M' & ENTER."
8690 INPUT "TO AVOID IT, PRESS THE SPACE BAR AND `ENTER'."; M$
8700 IF M$=CHR$(77) OR M$=CHR$(109) THEN 8720
8710 GOTO 6740
8720 CLS
8730 PRINT "FEDERAL INCOME TAX COMPARISON METHOD:  Assume 50% tax bracket."
8740 PRINT "First, subtract half of the difference between total interest paid"
8750 PRINT "on the two schedules (WITH & WITHOUT extra payments to principal)"
8760 PRINT "from the difference between the last remaining balances of the two"
8770 PRINT "schedules,if any.  Further reduce this result by subtracting half"
8780 PRINT "the difference of the total alternate investment accumulation at"
8790 PRINT "the higher percentage and the total extra payments to principal."
8800 PRINT "Then repeat this last reduction on the first result with the"
8810 PRINT "alternate accumulation at the lower rate.  (The other halves in"
8820 PRINT "the above statements are lost to the tax.)  Yours looks this way:"
8830 PRINT
8840 PRINT "("P1"-"P2") - (("A"-"B") X ( 1 -"A3"))"
8850 PRINT "- (("B3"-"E1") X ( 1 -"A3")) ="B9
8860 PRINT
8870 PRINT "The two after tax results are ONLY GUIDES.  The method assumes all"
8880 PRINT"interest paid is deductible, and that all interest earned is taxed."
8890 PRINT "Neither is true.  Also it should be noted that the alternate"
8900 PRINT "investment -- when shown to be superior -- actually must be made"
8910 PRINT "(not just thought about!) for this comparison to be valid.  This"
8920 PRINT "program's examples can help, but USERS MUST MAKE THE DECISIONS."
8930 GOTO 6420
8940 CLS
8950 COLOR 0,7:PRINT" LOAN PAYMENT SOLUTION ";:COLOR 7:PRINT" ENTER (";:COLOR 18:PRINT "SEPARATELY";:COLOR 7:PRINT ") THE LOAN AMOUNT (PRINCIPAL),"
8960 PRINT "INTEREST % PER YEAR, AND TERM (NUMBER OF YEARS).  EXAMPLE: ? 80000 ? 11.75 ? 30"
8970 P=0:K=0:N=0:M=0
8980 INPUT;P:PRINT " ";:IF P=0 THEN 9050
8990 INPUT;K:PRINT " ";:INPUT;N:PRINT TAB(32);
9000 IF P=0 THEN 9050
9010 K=K/1200:N=N*12
9020 M=P*K*(1+K)^N/((1+K)^N-1)
9030 PRINT "PAYMENT PER MONTH = $";:COLOR 0,7:PRINT M;:COLOR 7:PRINT:PRINT
9040 PRINT "ENTER FIGURES FOR ANOTHER LOAN.  IF DONE, ENTER: 0":GOTO 8980
9050 P=0:K=0:N=0:M=0
9060 PRINT:GOTO 1190
9070 END
```

## TASKPLAN.BAS

```bas
10 ' TASKPLAN     Version 1.0
20 '
30 ' (C) Copyright 1984  C. Lamar Williams
40 ' Williams Software & Services
50 ' 1114 Pusateri Way
60 ' San Jose, California 95121
70 '
80 '  TASKPLAN generates an integrated cost/task schedule.
90 '  Given the irregular time periods and costs of various overlapping
100 ' tasks, TASKPLAN solves for each period's incremental cost and the
110 ' cumulative cost.
120 '
130 CLEAR ,60864.,1000 : OPTION BASE 1 : SCREEN 0,0 : WIDTH 80 : CLOSE : KEY OFF : COLOR 0,6,6 : CLS
140 DEFINT A,I,J,N,P,R,S,X,F
150 DEFDBL C,T,Y
160 DEFSTR H,G
170 FLD = 0 :FL1 = 0 :FL2 = 0 :FL3 = 0 :FL4 = 0
180 BLK$ = "                    "
190 IT = 50 : GIT = "50"
200 JP = 60 : GJP = "60"
210 DIM BT(IT), ET(IT), CT(IT), CM1(IT), CM2(IT), TT$(IT), Y(IT,JP)
220 DIM X(JP), TK(JP), CI(JP), CC(JP), CTM(IT)
230 DIM H(79,13)
240 GPN = "" : RM$ = "" : CM$ = "" : CM11 = 1. : CM2 = 1. : CM1N$ = ""
250 FOR I = 1 TO IT
260 TT$(I) = "" :BT(I) = 0. :ET(I) = 1. :CT(I) = 0. :CM1(I) = 1.
270 NEXT I
280 LOCATE 2,1,0
290 PRINT SPC(20) "              TASKPLAN" : PRINT : PRINT
300 PRINT SPC(7) "            (C) Copyright 1984  C. Lamar Williams" : PRINT
310 PRINT SPC(19) "     Williams Software & Services"
320 PRINT SPC(7) "  1114 Pusateri Way    San Jose, CA  95121     (408)227-4238"
330 LOCATE 11,1,0
340 PRINT SPC(7) "   Given the irregular schedule and costs of various tasks,"
350 PRINT SPC(7) "   TASKPLAN solves for the cost of each time period."
360 PRINT
370 PRINT "      *****************************************************************"
380 PRINT "      *                  ";
390 COLOR 0,7
400 PRINT " -- SPECIAL CONDITIONS -- ";
410 COLOR 0,6,6
420 PRINT "                   *"
430 PRINT "      *                                                               *"
440 PRINT "      *   Users are encouraged to copy and distribute this program.   *"
450 PRINT "      *                                                               *"
460 PRINT "      *      If you use TASKPLAN and like it, please send $20 to      *"
470 PRINT "      *      Williams Software & Services.  -- THANKS --              *"
480 PRINT "      *****************************************************************"
490 GOSUB 4900
500 LOCATE 1,18,0
510 PRINT "Please read these instructions before starting" : PRINT
520 PRINT "1. Have on hand the general data for your project."
530 PRINT "     ■ project's name (up to 20 characters)"
540 PRINT "     ■ total number of tasks (2 to "; GIT; ")"
550 PRINT "     ■ total number of time periods (2 to "; GJP; ")"
560 PRINT "     ■ choice of rounding method"
570 PRINT "         ■ Normal,        +1 if fraction >= 0.5"
580 PRINT "         ■ Conservative,  +1 if fraction >  0.0"
590 PRINT "     ■ choice of Constant or Variable for cost multiplier M1"
600 PRINT "         ■ value of M1 if Constant is selected (xx.yyyzzz)"
610 PRINT "     ■ value of constant cost multiplier M2 (xx.yyyzzz)" : PRINT
620 PRINT "2. Have on hand the specific data for the individual tasks."
630 PRINT "     ■ task's name (up to 20 characters)"
640 PRINT "     ■ task's start time (xx.yy), range = 0.0 to <";GJP;".00"
650 PRINT "     ■ task's end time (xx.yy),   range = >start time to ";GJP;".00"
660 PRINT "     ■ task's cost (wxxxyyy.zz)"
670 PRINT "     ■ task's cost multiplier M1, if Variable option was selected (xx.yyyzzz)" : PRINT
680 PRINT "3. If using data from a previous TASKPLAN project, have on hand the                ";CHR$(34);"filename";CHR$(34); " under which the data were stored."
690 GOSUB 4900
700 LOCATE 1,28,0 : PRINT "Hints on using TASKPLAN" : PRINT
710 PRINT "1. Units of time are arbitrary (days, months, years)." : PRINT
720 PRINT "     Time ---------->  0   1   2   3 ....  input task's Start and End `Time'"
730 PRINT "                       │   │   │   │"
740 PRINT "     Time Period --->  ├─1─┼─2─┼─3─┼ ....  output costs per `Time Period'" : PRINT
750 PRINT "2. Cost multipliers M1 and M2 are useful."
760 PRINT "     ■ (task final cost) = (task input cost) x (M1) x (M2)"
770 PRINT "     ■ Use M1 = 1.0 (Constant) and M2 = 1.0 for simple cases."
780 PRINT "     ■ Use M1 = Variable for task-varying factors such as overhead."
790 PRINT "     ■ Use M2 = 0.001 to convert input costs in dollars to output costs"
800 PRINT "       in thousands-of-dollars." : PRINT
810 PRINT "3. Conservative rounding is useful in budgeting.  An input cost of $654,321"
820 PRINT "   converted (M2) to thousands-of-dollars would be 654 (normal rounding)"
830 PRINT "   or 655 (conservative rounding)." : PRINT
840 PRINT "4.  For introduction, use the provided data file SAMPLE.TPN"
850 PRINT "     ■ revise the `input' data as desired"
860 PRINT "     ■ try different output options"
870 GOSUB 4900
880 LOCATE 2,1
890 LINE INPUT;"Do you wish to use data from a previous project (Y/N)?  ";GRD
900 IF GRD >< "Y" AND GRD >< "y" GOTO 1070
910 FLD = 1
920 GOSUB 4970
930 PRINT : PRINT
940 LINE INPUT;"Enter the   d:filename.ext   for the data you wish to use. ";GNR
950 ON ERROR GOTO 1060
960 OPEN GNR FOR INPUT AS #1
970 INPUT #1, GPN, NT, NP, RM$, CM$, CM2
980 IF CM$ = "C" THEN INPUT #1, CM11
990 FOR I = 1 TO NT
1000 IF EOF(1) GOTO 1050
1010 INPUT #1, TT$(I), BT(I), ET(I), CT(I)
1020 IF CM$ = "V" THEN INPUT #1, CM1(I)
1030 NEXT I
1040 ON ERROR GOTO 0
1050 CLOSE #1
1060 IF ERR = 53 THEN BEEP :PRINT :PRINT "File not found" :PRINT :RESUME 920
1070 CLS
1080 FL1 = 0 : OPEN "SCRN:" FOR OUTPUT AS #1 : GOSUB 5060 : CLOSE #1
1090 IF FLD = 1 GOTO 1110
1100 GOSUB 5290 : GOSUB 5350 : GOSUB 5470 : GOSUB 5590 : GOSUB 5660 : GOSUB 5740 : GOSUB 5870
1110 REV$ = ""
1120 ITNO = 0
1130 LOCATE 24,1,0 : PRINT STRING$(79,32);
1140 LOCATE 24,19,1
1150 LINE INPUT; "Do you wish to change any of the above data (Y/N)? "; REV$
1160 IF REV$ = "" GOTO 1120
1170 IF REV$ = "y" OR REV$ = "Y" GOTO 1200
1180 IF REV$ = "n" OR REV$ = "N" GOTO 1310
1190 GOTO 1110
1200 FL2 = 1
1210 CMO$ = CM$
1220 LOCATE 24,1,1 : PRINT STRING$(79,32);
1230 GITNO = ""
1240 LOCATE 24,19,1
1250 LINE INPUT; "Type the ITEM Number (1-7), then press the Enter key. "; GITNO
1260 IF GITNO = "" GOTO 1240
1270 ITNO = VAL(GITNO)
1280 IF ITNO < 1 OR ITNO > 7 GOTO 1220
1290 ON ITNO GOSUB 5290,5350,5470,5590,5660,5740,5870
1300 GOTO 1110
1310 FL2 = 0
1320 CLS : LOCATE 2,9,0
1330 IF FLD = 0 THEN PRINT "Type the requested data, then press the Enter key."
1340 IF FLD = 1 THEN PRINT " "
1350 FL1 = 0
1360 OPEN "SCRN:" FOR OUTPUT AS #1
1370 GOSUB 5940
1380 CLOSE #1
1390 IA = CINT((NT/10) + 0.4)
1400 FOR ITT = 1 TO IA
1410 ITH = ITT*10
1420 ITL = ITH - 9
1430 IF NT < ITH THEN ITH = NT
1440 ITLN = 9
1450 FOR I = ITL TO ITH
1460 LOCATE ITLN,1,0 : PRINT I; STRING$(75,32);
1470 ITLN = ITLN + 2 - (I MOD 2)
1480 NEXT I
1490 FOR IB = ITLN TO 24
1500 LOCATE IB,1,0 : PRINT STRING$(79,32);
1510 NEXT IB
1520 ITLN = 9
1530 FOR I = ITL TO ITH
1540 IF FLD = 0 GOTO 1610
1550 LOCATE ITLN,8  : PRINT TT$(I);
1560 LOCATE ITLN,33 : PRINT USING "##.##"; BT(I);
1570 LOCATE ITLN,43 : PRINT USING "##.##"; ET(I);
1580 LOCATE ITLN,53 : PRINT USING "#######.##"; CT(I);
1590 IF CM$ = "V" THEN LOCATE ITLN,68 : PRINT USING "##.######"; CM1(I);
1600 GOTO 2040
1610 LOCATE ITLN,8,1 : LINE INPUT; TT$(I)
1620 IF TT$(I) = "" GOTO 1610
1630 TT$(I) = LEFT$(TT$(I),20)
1640 LOCATE ITLN,33 : LINE INPUT; BTT$
1650 LOCATE 24,1,0 : PRINT STRING$(79,32);
1660 IF BTT$ = "" GOTO 1640
1670 G = BTT$ : GOSUB 7030
1680 IF G = "0" THEN BT(I) = 0 : GOTO 1770
1690 BT(I) = VAL(BTT$)
1700 IF BT(I) > 0. AND BT(I) <= NP GOTO 1770
1710 IF BT(I)=0 GOTO 1760
1720 LOCATE 24,1,0
1730 IF BT(I) < 0. THEN PRINT "Pardon me, but Start Time must be > 0.0"; : GOTO 1750
1740 IF BT(I) > NP THEN PRINT "Pardon me, but Start Time must be <"; NP;
1750 FOR IP = 1 TO 3000 : NEXT IP
1760 BTT$ = "" : LOCATE ITLN,32 : PRINT STRING$(7,32); : GOTO 1640
1770 LOCATE ITLN,43 : LINE INPUT; ETT$
1780 LOCATE 24,1,0 : PRINT STRING$(79,32);
1790 IF ETT$ = "" GOTO 1770
1800 ET(I) = VAL(ETT$)
1810 IF ET(I) > BT(I) AND ET(I) <= NP GOTO 1880
1820 LOCATE 24,1,0 : BEEP
1830 IF ET(I) <= BT(I) THEN PRINT "Pardon me, but End Time must be >"; BT(I); " for Task"; I; " ."; : GOTO 1850
1840 IF ET(I) > NP THEN PRINT "Pardon me, but End Time must be <="; NP; " .";
1850 FOR IP = 1 TO 3000 : NEXT IP
1860 ETT$ = "" : LOCATE ITLN,42 : PRINT STRING$(7,32);
1870 GOTO 1770
1880 LOCATE ITLN,53 : LINE INPUT; CTT$
1890 IF CTT$ = "" GOTO 1880
1900 G = CTT$ : GOSUB 7030
1910 IF G = "0" THEN CT(I) = 0 : GOTO 1940
1920 CT(I) = VAL(CTT$)
1930 IF CT(I)=0 THEN CTT$="":LOCATE ITLN,52:PRINT STRING$(12,32);:GOTO 1880
1940 IF CM$ = "C" GOTO 2040
1950 LOCATE ITLN,68 : LINE INPUT; CMU1$
1960 IF CMU1$ = "" GOTO 1950
1970 G = CMU1$ : GOSUB 7030
1980 IF G = "0" THEN CM1(I) = 0 : GOTO 2040
1990 CM1(I) = VAL(CMU1$)
2000 IF CM1(I) > 0 GOTO 2040
2010 CMU1$ = ""
2020 LOCATE ITLN,67 : PRINT STRING$(12,32);
2030 GOTO 1950
2040 ITLN = ITLN + 2 - (I MOD 2)
2050 NEXT I
2060 BEEP
2070 LOCATE 24,1,0 : PRINT STRING$(79,32);
2080 LOCATE 24,10,1
2090 REV$ = ""
2100 PRINT "Do you wish to change any of the above data (Y/N)?";
2110 LOCATE 24,61,1
2120 LINE INPUT; REV$
2130 IF REV$ = "Y" OR REV$ = "y" GOTO 2160
2140 IF REV$ = "N" OR REV$ = "n" GOTO 2500
2150 GOTO 2070
2160 REVT$ = ""
2170 LOCATE 24,1,0 : PRINT STRING$(79,32);
2180 LOCATE 24,10,1
2190 PRINT "Type the Task No. to be changed, then press the Enter key.";
2200 LOCATE 24,69,1
2210 LINE INPUT; REVT$
2220 ITR = VAL(REVT$)
2230 IF ITR >= ITL AND ITR <= ITH GOTO 2290
2240 LOCATE 24,1,0 : PRINT STRING$(79,32);
2250 LOCATE 24,10,0 : BEEP
2260 PRINT " Pardon me, but the Task No. must be from ";ITL; "to ";ITH;".             ";
2270 FOR IL = 1 TO 2000 : NEXT IL
2280 GOTO 2160
2290 IF CM$ = "C" THEN GM1 = " or C" ELSE GM1 = "C, or M1"
2300 ILR = ITR - (ITT - 1)*10
2310 ILNR = 7 + ILR + FIX((ILR + 1)/2)
2320 COLOR 0,7
2330 GOSUB 6190
2340 LOCATE 24,1,1 : PRINT STRING$(79,32);
2350 LOCATE 24,1,1
2360 PRINT "Which item (D,S,E,";GM1;") do you wish to change for Task";ITR;"?";
2370 LOCATE 24,66,1
2380 LINE INPUT; REVIT$
2390 GTT="" : BTT$="" : ETT$="" : CTT$="" : CMU1$="" : FL2 = 0
2400 IF REVIT$ = "D" OR REVIT$ = "d" THEN FL2 = 1 : GOSUB 6270
2410 IF REVIT$ = "S" OR REVIT$ = "s" THEN FL2 = 1 : GOSUB 6320
2420 IF REVIT$ = "E" OR REVIT$ = "e" THEN FL2 = 1 : GOSUB 6460
2430 IF REVIT$ = "C" OR REVIT$ = "c" THEN FL2 = 1 : GOSUB 6570
2440 IF REVIT$ = "M1" OR REVIT$ = "m1" THEN GOSUB 6660
2450 IF FL2 = 0 GOTO 2340
2460 LOCATE 24,1,0 : PRINT STRING$(79,32);
2470 COLOR 0,6
2480 GOSUB 6190
2490 GOTO 2070
2500 NEXT ITT
2510 CLS : LOCATE 4,1,1
2520 LINE INPUT; "Do you wish to store the just-entered data (Y/N)? "; GSD
2530 IF GSD >< "Y" AND GSD >< "y" GOTO 2650
2540 GOSUB 4970
2550 PRINT : PRINT
2560 LINE INPUT; "Enter the  d:filename.ext  for storing the data. "; GNS
2570 OPEN GNS FOR OUTPUT AS #1
2580 WRITE #1, GPN, NT, NP, RM$, CM$, CM2
2590 IF CM$ = "C" THEN WRITE #1, CM11
2600 FOR I = 1 TO NT
2610 WRITE #1, TT$(I), BT(I), ET(I), CT(I)
2620 IF CM$ = "V" THEN WRITE #1, CM1(I)
2630 NEXT I
2640 CLOSE #1
2650 CLS : LOCATE 7,15,0
2660 PRINT "TASKPLAN"
2670 LOCATE 9,15 :  PRINT "Project ....................... ";GPN
2680 LOCATE 11,15 : PRINT "Number of Tasks ..............."; NT
2690 LOCATE 12,15 : PRINT "Number of Time Periods ........"; NP
2700 LOCATE 14,15 : PRINT "Please pardon this pause while TASKPLAN"
2710 LOCATE 15,15 : PRINT "solves for the incremental and"
2720 LOCATE 16,15 : PRINT "cumulative costs for each time period....."
2730 COLOR 16,6 : LOCATE 16,57 : PRINT "." : COLOR 0,6
2740 FOR I = 1 TO 4000 : NEXT I
2750 IF CM$ = "V" GOTO 2790
2760 FOR I = 1 TO NT
2770 CM1(I) = CM11
2780 NEXT I
2790 CT1 = 0 : CT2 = 0
2800 FOR I = 1 TO NT
2810 CT1 = CT1 + CT(I)
2820 CTM(I) = CT(I)*CM1(I)*CM2
2830 CT2 = CT2 + CTM(I)
2840 CTM(I) = CTM(I)/(ET(I) - BT(I))
2850 NEXT I
2860 FOR J = 1 TO NP
2870 TK(J) = 0.
2880 FOR I = 1 TO NT
2890 IF J < BT(I) OR J >= (ET(I) + 1) THEN Y(I,J) = 0. : GOTO 2930
2900 IF J < (BT(I) + 1) THEN Y(I,J) = CTM(I)*(J - BT(I)) : GOTO 2930
2910 IF J >= (BT(I) + 1) AND J <= ET(I) THEN Y(I,J) = CTM(I) : GOTO 2930
2920 Y(I,J) = CTM(I)*(ET(I) - J + 1)
2930 TK(J) = TK(J) + Y(I,J)
2940 NEXT I
2950 NEXT J
2960 CT3 = 0
2970 FOR J = 1 TO NP
2980 TK(J) = FIX(TK(J) + 0.5)
2990 CT3 = CT3 + TK(J)
3000 NEXT J
3010 IF RM$ = "N" THEN CT4 = FIX(CT2 + 0.5) : GOTO 3050
3020 CF = CT2 - FIX(CT2)
3030 IF CF = 0 THEN CT4 = CT2 : GOTO 3050
3040 CT4 = 1 + FIX(CT2)
3050 ROE = CT4 - CT3
3060 IF ROE = 0 GOTO 3140
3070 SROE = SGN(ROE)
3080 AROE = SROE*ROE
3090 RE1 = FIX(NP/AROE)
3100 RE2 = FIX(RE1/2)
3110 FOR J = (1 + RE2) TO (1 + RE2 + RE1*(AROE - 1)) STEP RE1
3120 TK(J) = TK(J) + SROE
3130 NEXT J
3140 CI(1) = TK(1)
3150 CC(1) = CI(1)
3160 FOR J = 2 TO NP
3170 CI(J) = TK(J)
3180 CC(J) = CC(J-1) + CI(J)
3190 NEXT J
3200 CLS : LOCATE 1,1,0 : FL1 = 0
3210 OPEN "SCRN:" FOR OUTPUT AS #1
3220 GOSUB 6760
3230 CLOSE #1
3240 JA = CINT((NP/10) + 0.4)
3250 FOR JTT = 1 TO JA
3260 JHI = JTT*10
3270 JLO = JHI - 9
3280 IF NP < JHI THEN JHI = NP
3290 JLN = 9
3300 FOR J = JLO TO JHI
3310 LOCATE JLN,4,0  : PRINT USING "##"; J;
3320 LOCATE JLN,15,0 : PRINT USING "##############,."; CI(J);
3330 IF CI(J) > 0. THEN PRINT ".";
3340 LOCATE JLN,42,0 : PRINT USING "##############,."; CC(J);
3350 IF CC(J) > 0. THEN PRINT ".";
3360 JLN = JLN + 2 - (J MOD 2)
3370 NEXT J
3380 FOR JB = JLN TO 24
3390 LOCATE JB,1,0 : PRINT STRING$(79,32);
3400 NEXT JB
3410 FL4 = 1
3420 GOSUB 4900
3430 '
3440 NEXT JTT
3450 CLS : LOCATE 4,1,1
3460 LINE INPUT; "Do you wish to construct a histogram of the results (Y/N)? ";GHI
3470 IF GHI = "" GOTO 3460
3480 IF GHI >< "Y" AND GHI >< "y" GOTO 3890
3490 LOCATE 6,1,0 : FL3 = 1
3500 PRINT "Please pardon this pause while your histogram is being computed."
3510 CIM = CI(1) : CCM = CC(1)
3520 FOR J = 2 TO NP
3530 IF CIM < CI(J) THEN CIM = CI(J)
3540 IF CCM < CC(J) THEN CCM = CC(J)
3550 NEXT J
3560 FOR IX = 1 TO 79
3570 FOR IY = 1 TO 13
3580 H(IX,IY) = " "
3590 NEXT IY
3600 NEXT IX
3610 H(1,1)  = "1" :  H(2,1)  = "." :  H(3,1)  = "0"
3620 H(1,6)  = "0" :  H(2,6)  = "." :  H(3,6)  = "5"
3630 H(1,11) = "0" :  H(2,11) = "." :  H(3,11) = "0"
3640 H(5,13) = "1"
3650 FOR IY = 1 TO 11
3660 H(4,IY) = "_"
3670 NEXT IY
3680 FOR IX = 5 TO (NP+4)
3690 H(IX,12) = "-"
3700 NEXT IX
3710 GNP = STR$(NP)
3720 H(NP+4,13) = RIGHT$(GNP,1)
3730 IF NP > 9 THEN H(NP+3,13) = MID$(GNP,2,1)
3740 FOR J = 1 TO NP
3750 NI = 12 - CINT(10*(CI(J)/CIM))
3760 FOR IY = NI TO 11
3770 H(J+4,IY) = "I"
3780 NEXT IY
3790 NC = 12 - CINT(10*(CC(J)/CCM))
3800 IF H(J+4,NC) = " " THEN H(J+4,NC) = "C"
3810 IF H(J+4,NC) = "I" THEN H(J+4,NC) = "O"
3820 NEXT J
3830 CLS
3840 LOCATE 2,1,0 : FL1 = 0
3850 OPEN "SCRN:" FOR OUTPUT AS #1
3860 GOSUB 6890
3870 CLOSE #1
3880 FL4 = 0 : GOSUB 4900
3890 CLS
3900 LOCATE 2,1,1
3910 LINE INPUT; "Do you want a printed copy of this project's data (Y/N)? ";GPR
3920 IF GPR = "" GOTO 3910
3930 IF GPR >< "Y" AND GPR >< "y" GOTO 4700
3940 LOCATE 4,1,0
3950 PRINT "Please be sure your printer is ON and is ON LINE.
3960 PRINT "Please be sure your paper is aligned and at top-of-form."
3970 FL4 = 0 : GOSUB 4900
3980 LOCATE 1,1,0 : PRINT "Printing the general data....."
3990 LPRINT :LPRINT :LPRINT :LPRINT :LPRINT :LPRINT :LPRINT
4000 OPEN "LPT1:" FOR OUTPUT AS #1
4010 FL1 = 1 : GOSUB 5060
4020 CLOSE #1
4030 LPRINT CHR$(12);
4040 CLS : LOCATE 1,1,0 : PRINT "Printing the detailed task data....."
4050 LPRINT :LPRINT :LPRINT
4060 IA = 1
4070 IF NT > 40 THEN IA = 2
4080 FOR ITT = 1 TO IA
4090 OPEN "LPT1:" FOR OUTPUT AS #1
4100 GOSUB 5940
4110 CLOSE #1
4120 IF ITT = 1 THEN ILO = 1 : IHI = 40
4130 IF NT < 41 THEN IHI = NT
4140 IF ITT = 2 THEN ILO = 41 : IHI = NT
4150 FOR I = ILO TO IHI
4160 LPRINT TAB(2)  : LPRINT USING "##"; I;
4170 LPRINT TAB(8)  : LPRINT TT$(I);
4180 LPRINT TAB(33) : LPRINT USING "##.##"; BT(I);
4190 LPRINT TAB(43) : LPRINT USING "##.##"; ET(I);
4200 LPRINT TAB(53) : LPRINT USING "#######.##"; CT(I);
4210 IF CM$ = "C" THEN LPRINT " " : GOTO 4230
4220 LPRINT TAB(68) : LPRINT USING "##.######"; CM1(I)
4230 IF I MOD 10 = 0 THEN LPRINT
4240 NEXT I
4250 LPRINT CHR$(12);
4260 NEXT ITT
4270 LPRINT :LPRINT :LPRINT :LPRINT :LPRINT
4280 CLS : LOCATE 1,1,0 : PRINT "Printing the answers ....."
4290 OPEN "LPT1:" FOR OUTPUT AS #1
4300 FL1 = 1
4310 GOSUB 6760
4320 CLOSE #1
4330 JHI = 40
4340 IF NP < 41 THEN JHI = NP
4350 GT1 =" " :GT2 =" " :GT3 =" " :GT4 =" " :GT5 =" " : IF NP < 41 GOTO 4410
4360 GT1 = " | Time    Incremental      Cumulative"
4370 GT2 = " | Per.       Cost             Cost"
4380 GT3 = " | ---- ---------------- ----------------"
4390 GT4 = SPACE$(38) + " | "
4400 GT5 = " | "
4410 LPRINT "Time    Incremental      Cumulative   "; GT1
4420 LPRINT "Per.       Cost             Cost      "; GT2
4430 LPRINT "---- ---------------- ----------------"; GT3
4440 LPRINT GT4
4450 FOR J = 1 TO JHI
4460 LPRINT TAB(2)  : LPRINT USING "##"; J;
4470 LPRINT TAB(6)  : LPRINT USING "##############,."; CI(J);
4480 IF CI(J) > 0. THEN LPRINT ".";
4490 LPRINT TAB(23) : LPRINT USING "##############,."; CC(J);
4500 IF CC(J) > 0. THEN LPRINT ".";
4510 LPRINT GT5;
4520 IF NP < 41 THEN LPRINT " " : GOTO 4590
4530 IF (J + 40) > NP THEN LPRINT " " : GOTO 4590
4540 LPRINT TAB(43) : LPRINT USING "##"; J+40;
4550 LPRINT TAB(47) : LPRINT USING "##############,."; CI(J+40);
4560 IF CI(J+40) > 0. THEN LPRINT ".";
4570 LPRINT TAB(64) : LPRINT USING "##############,."; CC(J+40);
4580 IF CC(J+40) > 0. THEN LPRINT "." ELSE LPRINT " "
4590 IF J MOD 10 = 0 THEN LPRINT GT4
4600 NEXT J
4610 LPRINT CHR$(12);
4620 IF FL3 = 0 GOTO 4690
4630 CLS : LOCATE 1,1,0 : PRINT " Printing the histogram ....."
4640 LPRINT :LPRINT :LPRINT :LPRINT :LPRINT :LPRINT
4650 OPEN "LPT1:" FOR OUTPUT AS #1
4660 GOSUB 6890
4670 CLOSE #1
4680 LPRINT CHR$(12);
4690 LPRINT CHR$(12);
4700 CLS : LOCATE 1,1,0
4710 PRINT "All calculations and printings are completed."
4720 PRINT : PRINT : PRINT
4730 PRINT "EXIT options are as follows:" : PRINT : PRINT
4740 PRINT "1 - Revise the current project" : PRINT
4750 PRINT "2 - Use TASKPLAN for a new project" : PRINT
4760 PRINT "3 - Exit to BASICA (the TASKPLAN program will be lost)" : PRINT
4770 PRINT "4 - Exit to DOS (the operating system)"
4780 LOCATE 20,1,1
4790 LINE INPUT; "Please Enter the Exit Option No. of your choice ----> "; OP$
4800 IF OP$ = "" OR VAL(OP$)<1 OR VAL(OP$)>4 THEN LOCATE 20,54 : PRINT "       " : GOTO 4780
4810 OPN% = VAL(OP$)
4820 IF OPN% > 1 GOTO 4840
4830 FLD = 1 :FL1 = 0 :FL2 = 1 :FL3 = 0 :FL4 = 0 : CLS : GOTO 1070
4840 IF OPN% > 2 GOTO 4860
4850 FLD = 0 :FL1 = 0 :FL2 = 0 :FL3 = 0 :FL4 = 0 : CLS : GOTO 240
4860 IF OPN% > 3 GOTO 4880
4870 CLS : KEY ON : NEW
4880 COLOR 7,0,0 : CLS : SYSTEM
4890 END
4900 LOCATE 24,19,0
4910 COLOR 0,7
4920 PRINT " ***** PRESS ANY KEY TO CONTINUE ***** ";
4930 G = INKEY$ : IF G = "" THEN 4930
4940 COLOR 0,6,6
4950 IF FL4 = 0 THEN CLS
4960 RETURN
4970 PRINT : PRINT
4980 LINE INPUT; "Do you wish to display existing filenames (Y/N)? ";GDF
4990 IF GDF >< "Y" AND GDF >< "y" GOTO 5050
5000 PRINT
5010 LINE INPUT; "Which drive (A, B, C, etc)? -------------------> "; GDR
5020 PRINT : PRINT
5030 FILES GDR + ":*.*"
5040 GOTO 4970
5050 RETURN
5060 IF FL1 = 1  GOTO 5090
5070 IF FLD = 0 THEN PRINT #1, "          Type the requested data, then press the Enter key." : GOTO 5090
5080 IF FLD = 1 THEN PRINT #1, " "
5090 PRINT #1, "ITEM"
5100 PRINT #1, " NO."
5110 PRINT #1, " "
5120 PRINT #1, " 1. Project's Name, up to 20 characters ----------------->";" ";GPN: PRINT #1, " "
5130 PRINT #1, " 2. Total Number of Tasks, 2 to"; IT; "---------------------->";NT : PRINT #1, " "
5140 IF FLD = 0 AND FL1 = 0 THEN LOCATE 7,60,0 : PRINT "      " : PRINT
5150 PRINT #1, " 3. Total Number of Time Periods, 2 to"; JP; "--------------->";NP : PRINT #1, " "
5160 IF FLD = 0 AND FL1 = 0 THEN LOCATE 9,60,0 : PRINT "      " : PRINT
5170 PRINT #1, " 4. Choice of Rounding Method (N or C) ------------------>";" ";RM$
5180 PRINT #1, "      - N (normal),       +1 if fraction >= 0.5"
5190 PRINT #1, "      - C (conservative), +1 if fraction >  0.0":PRINT #1," "
5200 PRINT #1, " 5. Choice of Type for Cost Multiplier M1 (C or V) ------>";" ";CM$
5210 PRINT #1, "      - C (constant), same for all tasks"
5220 PRINT #1, "      - V (variable), different for each task":PRINT #1, " "
5230 IF CM$ = "C" THEN CM1N$ = RIGHT$( STR$(CM11), LEN(STR$(CM11)) - 1 )
5240 IF CM$ = "V" THEN CM1N$ = "Variable"
5250 PRINT #1, " 6. Value for Constant Cost Multiplier M1 (xx.yyyzzz) --->";" ";CM1N$ : PRINT #1, " "
5260 PRINT #1, " 7. Value for Constant Cost Multiplier M2 (xx.yyyzzz) --->";CM2
5270 IF FLD = 0 AND FL1 = 0 THEN LOCATE 21,60,0 : PRINT "      "
5280 RETURN
5290 GPN = ""
5300 LOCATE 5,60,0 : PRINT BLK$
5310 LOCATE 5,60,1 : LINE INPUT GPN
5320 IF GPN = "" GOTO 5290
5330 GPN = LEFT$(GPN,20)
5340 RETURN
5350 GNT = ""
5360 LOCATE 7,60,0 : PRINT BLK$
5370 LOCATE 7,60,1 : LINE INPUT GNT
5380 LOCATE 24,1,0 : PRINT STRING$(79,32);
5390 IF GNT = "" GOTO 5350
5400 NT = VAL(GNT)
5410 IF NT < 2 OR NT > IT GOTO 5430
5420 RETURN
5430 LOCATE 24,1,0 : BEEP
5440 PRINT "Pardon me, but the Number of Tasks must be from 2 to ";GIT;".";
5450 FOR IP = 1 TO 3000 : NEXT IP
5460 GOTO 5350
5470 GNP = ""
5480 LOCATE 9,60,0 : PRINT BLK$
5490 LOCATE 9,60,1 : LINE INPUT GNP
5500 LOCATE 24,1,0 : PRINT STRING$(79,32);
5510 IF GNP = "" GOTO 5470
5520 NP = VAL(GNP)
5530 IF NP < 2 OR NP > JP GOTO 5550
5540 RETURN
5550 LOCATE 24,1,0 : BEEP
5560 PRINT "Pardon me, but Number of Time Periods must be from 2 to ";GJP;".";
5570 FOR IP = 1 TO 3000 : NEXT IP
5580 GOTO 5470
5590 LOCATE 11,60,0 : PRINT BLK$
5600 LOCATE 11,60,1 : LINE INPUT RM$
5610 IF RM$ = "n" THEN RM$ = "N" : GOTO 5640
5620 IF RM$ = "c" THEN RM$ = "C" : GOTO 5640
5630 IF RM$ >< "N" AND RM$ >< "C" THEN GOTO 5590
5640 LOCATE 11,60,0 : PRINT RM$
5650 RETURN
5660 LOCATE 15,60,0 : PRINT BLK$
5670 LOCATE 15,60,1 : LINE INPUT CM$
5680 IF CM$ = "c" THEN CM$ = "C" : GOTO 5710
5690 IF CM$ = "v" THEN CM$ = "V" : GOTO 5710
5700 IF CM$ >< "C" AND CM$ >< "V" THEN GOTO 5660
5710 LOCATE 15,60,0 : PRINT CM$
5720 IF FL2 = 1 AND CMO$ >< CM$ THEN LOCATE 24,1 : PRINT STRING$(79,32); : GOTO 5750
5730 RETURN
5740 IF FL2 = 1 AND CM$ = "V" GOTO 5830
5750 GCM1$ = ""
5760 LOCATE 19,60,0 : PRINT BLK$
5770 IF CM$ = "V" THEN LOCATE 19,60,0 : PRINT "Variable" : RETURN
5780 LOCATE 19,60,1 : LINE INPUT GCM1
5790 IF GCM1 = "" GOTO 5740
5800 CM11# = VAL(GCM1)
5810 IF CM11# = 0 GOTO 5750
5820 RETURN
5830 LOCATE 24,1,0 : PRINT STRING$(79,32);
5840 LOCATE 24,39,0 : PRINT "Please, first change ITEM 5";
5850 FOR I = 1 TO 8000 : NEXT I
5860 RETURN
5870 GM2 = ""
5880 LOCATE 21,60,0 : PRINT BLK$
5890 LOCATE 21,60,1 : LINE INPUT GM2
5900 IF GM2 = "" GOTO 5870
5910 CM2 = VAL(GM2)
5920 IF CM2 = 0 GOTO 5870
5930 RETURN
5940 IF CM$ = "V" GOTO 6020
5950 G1 = " "
5960 G2 = " "
5970 G3 = " "
5980 G4 = " "
5990 G5 = " "
6000 G6 = " "
6010 GOTO 6080
6020 G1 = STRING$(70,32) + "Cost"
6030 G2 = "    Multiplier"
6040 G3 = "        M1"
6050 G4 = "        --"
6060 G5 = "    xx.yyyzzz"
6070 G6 = "   ------------"
6080 IF FL1 = 0 GOTO 6110
6090 LPRINT :LPRINT :LPRINT
6100 LPRINT "                Project :   "; GPN  : LPRINT
6110 PRINT #1, G1
6120 PRINT #1, "Task                            Start     End          Task    "; G2
6130 PRINT #1, " No.       Description          Time      Time         Cost    "; G3$
6140 PRINT #1, " --            --                --        --           --     "; G4
6150 PRINT #1, " xx    vvvvwwwwxxxxyyyyzzzz     xx.yy     xx.yy     wxxxyyy.zz "; G5
6160 PRINT #1, "----  ----------------------   -------   -------   ------------"; G6
6170 PRINT #1, " "
6180 RETURN
6190 LOCATE 5,12,0 : PRINT "D";
6200 LOCATE 4,33,0 : PRINT "S";
6210 LOCATE 4,43,0 : PRINT "E";
6220 LOCATE 5,56,0 : PRINT "C";
6230 IF CM$ = "C" GOTO 6250
6240 LOCATE 5,72,0 : PRINT "M1";
6250 COLOR 0,6
6260 RETURN
6270 LOCATE ILNR,7,0 : PRINT STRING$(22,32);
6280 LOCATE ILNR,8,1 : LINE INPUT; GTT
6290 IF GTT = "" GOTO 6280
6300 TT$(ITR) = LEFT$(GTT,20)
6310 RETURN 2460
6320 LOCATE ILNR,32,0 : PRINT STRING$(7,32);
6330 LOCATE ILNR,33,1 : LINE INPUT; BTT$
6340 LOCATE 24,1,0 : PRINT STRING$(79,32);
6350 IF BTT$ = "" GOTO 6330
6360 G = BTT$ : GOSUB 7030
6370 IF G = "0" THEN BT(ITR) = 0 : RETURN 2460
6380 BT(ITR) = VAL(BTT$)
6390 IF BT(ITR) = 0 GOTO 6320
6400 IF BT(ITR) < ET(ITR) AND BT(ITR) >= 0. THEN RETURN 2460
6410 LOCATE 24,1,0 : BEEP
6420 IF BT(ITR) < 0. THEN PRINT "Pardon me, but Start Time must be >= 0.0 ."; : GOTO 6440
6430 IF BT(ITR) >= ET(ITR) THEN PRINT "Pardon me, but Start Time must be <"; ET(ITR); " for Task"; ITR; ".";
6440 FOR I = 1 TO 3000 : NEXT I
6450 GOTO 6320
6460 LOCATE ILNR,42,0 : PRINT STRING$(7,32);
6470 LOCATE ILNR,43,1 : LINE INPUT; ETT$
6480 LOCATE 24,1,0 : PRINT STRING$(79,32);
6490 IF ETT$ = "" GOTO 6470
6500 ET(ITR) = VAL(ETT$)
6510 IF ET(ITR) > BT(ITR) AND ET(ITR) <= NP THEN RETURN 2460
6520 LOCATE 24,1,0 : BEEP
6530 IF ET(ITR) <= BT(ITR) THEN PRINT "Pardon me, but End Time must be >";BT(ITR); " for Task"; ITR; " ."; : GOTO 6550
6540 IF ET(ITR) > NP THEN PRINT "Pardon me, but End Time must <="; NP; " .";
6550 FOR I = 1 TO 3000 : NEXT I
6560 GOTO 6460
6570 LOCATE ILNR,52,0 : PRINT STRING$(12,32);
6580 LOCATE ILNR,53,1 : LINE INPUT; CTT$
6590 IF CTT$ = "" GOTO 6580
6600 G = CTT$ : GOSUB 7030
6610 IF G = "0" THEN CT(ITR) = 0 : RETURN 2460
6620 CT(ITR) = VAL(CTT$)
6630 IF CT(ITR) > 0 THEN RETURN 2460
6640 CTT$ = "" : GOTO 6570
6650 RETURN 2460
6660 IF CM$ = "C" THEN RETURN 2340
6670 FL2 = 1
6680 LOCATE ILNR,67,0 : PRINT STRING$(12,32);
6690 LOCATE ILNR,68,1 : LINE INPUT; CMU1$
6700 IF CMU1$ = "" GOTO 6690
6710 G = CMU1$ : GOSUB 7030
6720 IF G = "0" THEN CM1(ITR) = 0 : RETURN 2460
6730 CM1(ITR) = VAL(CMU1$)
6740 IF CM1(ITR) > 0 THEN RETURN 2460
6750 CMU1$ = "" : GOTO 6660
6760 GRM = "Normal"
6770 IF RM$ = "C" THEN GRM = "Conservative"
6780 GCM1 = " Variable"
6790 IF CM$ = "C" THEN GCM1 = STR$(CM11)
6800 PRINT #1, " Project Name :  "; GPN
6810 PRINT #1, NT;"tasks over"; NP; "periods with "; GRM; " rounding"
6820 PRINT #1, " Cost :  Total Input ="; CT1; ", Multipliers : M1 ="; GCM1; ", M2 ="; CM2
6830 PRINT #1, " "
6840 IF FL1 = 1 GOTO 6880
6850 PRINT #1, "  Time           Incremental                Cumulative"
6860 PRINT #1, " Period             Cost                       Cost"
6870 PRINT #1, " ------   ------------------------   ------------------------"
6880 RETURN
6890 PRINT #1, SPC(25);"Project : "; GPN
6900 PRINT #1, " "
6910 PRINT #1, SPC(10);"I - Incremental cost ( maximum =";CIM;")"
6920 PRINT #1, SPC(10);"C - Cumulative cost  ( maximum =";CCM;")"
6930 PRINT #1, SPC(10);"O - C plotted over I"
6940 PRINT #1, " "
6950 PRINT #1, "Normalized Cost"
6960 FOR IY = 1 TO 13
6970 FOR IX = 1 TO (NP+3)
6980 PRINT #1, H(IX,IY);
6990 NEXT IX
7000 PRINT #1, H(NP+4,IY)
7010 NEXT IY
7020 RETURN
7030 IF G="00" OR G="0." OR G=".0" OR G=".00" OR G="00." OR G="0.0" OR G="00.0" OR G="00.00" OR G="0.00" THEN G = "0"
7040 RETURN
```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0155

     Volume in drive A has no label
     Directory of A:\

    34                  64   1-13-86   1:45a
    36                  64   1-15-86   1:44a
    37                  64   1-13-86   1:47a
    333                 64   1-13-86   1:37a
    355                 64   1-13-86   1:46a
    1111               448   1-10-87   1:01a
    1112               512   1-10-87  12:23a
    1113               384   1-10-87  12:25a
    3112                64   1-15-86  12:53a
    3211                64   1-15-86  12:53a
    3222                64   1-15-86  12:54a
    3331                64   1-15-86  12:55a
    3332                64   1-15-86  12:56a
    3456                64   1-16-85  12:03a
    3654                64   1-15-86   1:00a
    3765                64   1-15-86   1:00a
    3876                64   1-15-86  12:59a
    3987                64   1-15-86  12:58a
    BUDGETRK DOC      3011   1-04-80  12:25a
    BUDGETRK EXE    102872   1-10-87  12:58a
    PROJECT           6336   1-10-87   1:22a
    MARDIR             387   1-10-87   1:22a
    SALESMGR            64   1-10-87  12:43a
    RECPTION            64   1-10-87  12:44a
    SHOWROOM            64   1-10-87  12:44a
    CALSHOW             64   1-10-87  12:47a
    RECEPTIO            64   1-10-87  12:47a
    KITCHEN             64   1-10-87  12:47a
    DINING              64   1-10-87  12:47a
    FEBTRAV             64   1-10-87  12:57a
    X                   64   1-10-87   1:02a
    FILES155 TXT       943   2-04-87   8:22a
    GO       BAT       364   1-04-80  12:26a
    LEAS-BY1 BAS     11136   1-16-84
    LOAN-MTG BAS     20864   1-16-84
    LOANSVGS BAS     39936   8-20-83   4:11p
    TASKPLAN BAS     22057   4-14-84   8:25a
    DESCRIPT DOC       289   4-29-84  11:33p
           38 file(s)     211075 bytes
                           81920 bytes free
