---
layout: page
title: "PC-SIG Library Disk #613"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0613/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0613"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "MANAGING YOUR MONEY"

    All the BASIC programs in the book ``Managing Money With Your IBM PC,''
    by A. Glazer, an economics professor at the University of California.
    (Prentice-Hall, 1985).
    
    Among other things, you can determine the after-tax cost of a loan,
    demonstrate the advantages of an Individual Retirement Account, compare
    loans which have different interest rates and different origination
    fees, and calculate the amount of monthly savings necessary to finance
    a college education.  Many different types of loans are also well
    demonstrated and made easier to understand.
    
    Includes BASIC source code.  Anyone interested in short, useful
    investment calculation programs, with the source code, will find this
    package very valuable.
    File Descriptions:
    
    AMORTIZE BAS  Amortization schedule for a mortgage loan payment.
    -------- ---  MANAGING YOUR MONEY (v1.0).
    TERMDEPO BAS  Balance in a savings plan any number of years.
    SIMPINV  BAS  Analysis of an investment that produces no annual income.
    SAVHISTO BAS  Annual balance in a savings program with deposits.
    RULEOF78 BAS  Amortization schedule for consumer and automobile loans.
    README        General information and file information.
    POINTS   BAS  Effective interest rate on a loan that charges points.
    BALREM   BAS  Balance remaining on a mortgage.
    CREDITCA BAS  Gains from using a credit card instead of paying cash.
    CHARGEHI BAS  Monthly status of a revolving charge account.
    PERTERM  BAS  How many deposits to make to reach a goal.
    PERRATE  BAS  Interest rate to earn on your savings to reach goal.
    PERDEPOS BAS  How much to deposit each month or year to reach goal.
    PERBALAN BAS  Balance in savings account after any number of deposits.
    PAYBACK  BAS  How long it takes to recover an investment.
    CREDITPU BAS  Minimum payment schedule for a credit purchase.
    NUMDAYS  BAS  Number of days between two dates.
    DAILYODO BAS  Date that is a specified number of days away.
    MONTHLYO BAS  Date that is a specified number of months away.
    MNTHINCM BAS  Monthly income obtained from a specified amount of money.
    LOANTERM BAS  How many payments you must make on a loan.
    LOANQUAL BAS  Size of loan at interest rate and monthly payment.
    LOANCOST BAS  After tax cost of a loan.
    IRA      BAS  The benefits of saving in an IRA.
    INVYIELD BAS  Annual rate of return on an investment.
    INVVALUE BAS  Present value of an investment.
    INVPRICE BAS  Sales price of an asset that yields a specified ROR.
    INVINCOM BAS  Annual or monthly income that yields a specified ROR.
    INVHISTO BAS  Annual description of an investment; value, ROR.
    INTRATE  BAS  Interest rate on a loan.
    DEPGROWS BAS  Balance in a savings program with deposits.
    DAYOFWEE BAS  Day of week on which a specified date falls.
    DATESINM BAS  Dates in a month which a specified day of the week falls.
    DATEDIST BAS  Number of years, months, and days between two dates.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## AMORTIZE.BAS

```bas
100 ' Amortize ("AMORTIZE")
110 CLS
120 COLOR 0,15 : PRINT "Amortize" : COLOR 15,0
130 PRINT
140 DEFDBL A-Z
150 DEFINT M-N
160 MONEYFMT$ = "$$##,###,###.##"
170 DEF FNR (V) = SGN (V) * INT (ABS (V) * 100 + .5) / 100
180 '    Let user enter amount, term, rate, starting date
190 INPUT "Loan amount: ", PNCPL
200 INPUT "Term in months: ", NMONTHS
210 INPUT "Annual interest rate (in percent): ", AR
220 PRINT "Enter date of first payment"
230 INPUT "  Month (1-12): ", MONTH
240 IF MONTH < 1 OR MONTH > 12  THEN PRINT "No such month" : GOTO 230
250 INPUT "  Year (1900-2100): ", YEAR
260 IF YEAR < 1900 OR YEAR > 2100  THEN PRINT "Year out of range" : GOTO 250
261 DIM TOTALPAYMENTS(600)
262 DIM TOTALINTEREST(600)
263 DIM PNCPL(600)
264 PNCPL(0) = PNCPL
270 '     Initialize variables
280 PR = AR / 1200   'Determine monthly interest rate
290 IF PR <> 0 THEN PMT = (PNCPL * PR) / (1 - (1 + PR) ^ -NMONTHS)                             ELSE PMT = PNCPL / NMONTHS
300 PMT = FNR (PMT)    'Monthly payment
310 PRINT : PRINT
320 PRINT "Monthly payment: "; USING MONEYFMT$; PMT
330 PRINT : PRINT
340 PRINT "Press space bar to see next month's results"
350 MONTHNUM = YEAR * 12 + MONTH
360 '      Calculate amortization table
370 FOR M = 1 TO NMONTHS
380   K$ = INKEY$ : IF K$ = ""  THEN GOTO 380
390   INTERESTDUE = FNR (PNCPL * PR)
400   TOTALINTEREST = FNR (TOTALINTEREST + INTERESTDUE)
410   PNCPL = FNR (PNCPL - PMT + INTERESTDUE)
420   YEAR = (MONTHNUM - 1) \ 12
430   MONTH = MONTHNUM - YEAR * 12
440   MONTHNUM = MONTHNUM + 1
450   PRINT:PRINT
460   PRINT "Payment number: "; M
470   PRINT "Date: "; MONTH; "/"; YEAR
480   PRINT
490   PRINT "Principal: "; TAB(20); USING MONEYFMT$; PNCPL
500   PRINT "Total interest: "; TAB(20); USING MONEYFMT$; TOTALINTEREST
510   PRINT "Interest due: "; TAB(20); USING MONEYFMT$; INTERESTDUE
512 TOTALPAYMENTS(M) = TOTALPAYMENTS(M-1) + PMT
513 TOTALINTEREST(M) = TOTALINTEREST
514 PNCPL(M) = PNCPL
515 IF M>12 THEN PREV = M-12  ELSE PREV = 0
516 PRINT "Totals for previous 12 months"
517 PRINT "Payments:"; TAB(20); USING MONEYFMT$;                                           TOTALPAYMENTS(M) - TOTALPAYMENTS(PREV)
518 PRINT "Interest paid:"; TAB(20); USING MONEYFMT$;                                     TOTALINTEREST(M)-TOTALINTEREST(PREV)
519 PRINT "Repayment": PRINT "  of principal:"; TAB(20); USING MONEYFMT$;                 PNCPL(PREV)-PNCPL(M)
520 NEXT M
530 END
```

## BALREM.BAS

```bas
100 'Balance Remaining and Interest Paid ("BALREM")
110 CLS
120 COLOR 0,15 : PRINT "Balance Remaining" : COLOR 15,0
130 PRINT
140 MONEYFMT$ = "$$##,###,###.##"
150 DEFDBL A-Z
160 DEFINT M-N
170 '     Define function to find balance
180 DEF FNBALANCE (N) = ( ( (1+PR) ^ -N -1) * PMT / PR + PNCPL) * (1 + PR) ^ N
190 '     Let user enter data
200 INPUT "Amount of loan: ", PNCPL
210 INPUT "Monthly payment: ", PMT
220 INPUT "Annual interest rate (in percent): ", AR
230 INPUT "Payment number at start of term: ", NSTART
240 INPUT "Payment number at end of term: ", NEND
250 '     Find balance due at both times
260 PR = AR / 1200
270 IF PR <> 0  THEN SBALANCE = FNBALANCE (NSTART)                                              ELSE SBALANCE = PNCPL - NSTART * PMT
280 IF PR <> 0  THEN EBALANCE = FNBALANCE (NEND)                                                ELSE EBALANCE = PNCPL - NEND * PMT
290 '     Find interest paid
300 TOTALINTEREST = (NEND - NSTART) * PMT + EBALANCE - SBALANCE
310 '     Print results
320 PRINT:PRINT
330 PRINT "Initial balance:" TAB(20); USING MONEYFMT$; SBALANCE
340 PRINT "Final balance:" TAB(20); USING MONEYFMT$; EBALANCE
350 PRINT "Interest paid:" TAB(20); USING MONEYFMT$; TOTALINTEREST
360 END
```

## CHARGEHI.BAS

```bas
100 'Charge History ("CHARGEHIST")
110 CLS
120 COLOR 0,15 : PRINT "Charge Account History" : COLOR 15,0
130 DEFDBL A-Z
140 MONEYFMT$ = "$$##,###,###.##"
150 'Define rounding function
160 DEF FNR (V) = SGN (V) * INT (ABS (V) * 100 + .5) / 100
170 '     Let user enter data
180 PRINT : PRINT
190 PRINT "Do not enter dollar signs or commas"
200 PRINT
210 INPUT "Credit limit: ", CREDITLIMIT
220 INPUT "Initial balance: ", BALANCE
230 INPUT "Monthly purchases: ",  PURCHASES
240 INPUT "Annual interest charge (in percent): ", CR
250 INPUT "Monthly payment (as percentage of balance): ", RPMT
260 INPUT "Minimum monthly payment: ", MINPMT
270 PRINT "Enter date of first payment"
280 INPUT "  Month (1-12): ", MONTH
290 INPUT "  Year: ", YEAR
300 '      Initialize variables
310 TOTALPURCHASES = 0
320 TOTALPAYMENTS = 0
330 TOTALINTEREST = 0
340 CREDITAVAIL = CREDITLIMIT - BALANCE
360 M = 0
370 MONTHNUM = YEAR * 12 + MONTH
380 PRINT
390 PRINT "Press space bar to continue"
400 '      Compute monthly balances
410 WHILE CREDITAVAIL > 0
420   K$ = INKEY$ : IF K$ = ""  THEN GOTO 420
430   M = M + 1
440   YEAR = (MONTHNUM - 1) \ 12
450   MONTH = MONTHNUM - YEAR * 12
460   MONTHNUM = MONTHNUM + 1
470   '    Calculate month's payments
480   BALANCE = BALANCE + PURCHASES
490   INTERESTDUE = FNR (BALANCE * CR / 1200)
500   PMT = INT (BALANCE * RPMT + .5) / 100
510   IF PMT < MINPMT  THEN PMT = MINPMT
520   IF PMT > BALANCE + INTERESTDUE  THEN PMT = BALANCE + INTERESTDUE
530   BALANCE = FNR (BALANCE - PMT + INTERESTDUE)
540   '    Compute cumulative totals
550   TOTALPURCHASES = TOTALPURCHASES + PURCHASES
560   TOTALPAYMENTS = TOTALPAYMENTS + PMT
570   TOTALINTEREST = TOTALINTEREST + INTERESTDUE
580   CREDITAVAIL = CREDITLIMIT - BALANCE
590   '    Print results
600   PRINT : PRINT
610   PRINT "Payment number: "; M
620   PRINT "Date: "; MONTH; "/"; YEAR
630   PRINT "Credit available: "; TAB(30); USING MONEYFMT$; CREDITAVAIL
640   PRINT "New balance: "; TAB(30); USING MONEYFMT$; BALANCE
650   PRINT "Total purchases: "; TAB(30); USING MONEYFMT$; TOTALPURCHASES
660   PRINT "Payment: "; TAB(30); USING MONEYFMT$; PMT
670   PRINT "Finance charge: "; TAB(30); USING MONEYFMT$; INTERESTDUE
680   PRINT "Cumulative payments: "; TAB(30); USING MONEYFMT$; TOTALPAYMENTS
690   PRINT "Cumulative finance charges: "; TAB(30); USING MONEYFMT$;                        TOTALINTEREST
700 WEND
710 END
```

## CREDITCA.BAS

```bas
100 'Credit Card ("CREDITCARD")
110 CLS
120 COLOR 0,15 : PRINT "Credit Card" : COLOR 15,0
130 DEFDBL A-Z
140 MONEYFMT$ = "$$##,###,###.##"
150 PRINT : PRINT
160 PRINT "Do not enter dollar signs or commas"
170 PRINT
180 INPUT "Monthly purchases: ", PURCHASES
190 INPUT "Cash discount (in percent): ", DISCOUNT
200 INPUT "Annual credit card fee: ", FEE
210 INPUT "Annual interest rate (in percent): ", AR
220 '     Find daily interest rate
230 DR = (1 + AR / 100) ^ (1/360) - 1
240 '     Find monthly interest rate
250 PR = (1 + AR / 100) ^ (1/12) - 1
260 '     Calculate present value of cash expenditures
270 FCASH = (1 - (1 + DR) ^  -360) * (1 - DISCOUNT / 100) / (30 * DR)
280 PVCASH = PURCHASES * FCASH
290 '     Calculate present value of credit card purchases
300 FCARD = ( (1 - (1 + PR) ^  -12) / PR) / (1 + PR)
310 PVCARD = FEE + PURCHASES * FCARD
320 '     Minimum monthly purchase to make credit card worthwhile
330 BREAKEVEN = FEE / (FCASH - FCARD)
340 PRINT
350 PRINT "Cash cost: "; TAB(30); USING MONEYFMT$; PVCASH
360 PRINT "Credit card cost: "; TAB(30); USING MONEYFMT$; PVCARD
370 PRINT "Breakeven charge: "; TAB(30);
380 IF BREAKEVEN >= 0 THEN PRINT USING MONEYFMT$; BREAKEVEN                                           ELSE PRINT SPC(10); "Never"
390 PRINT "Saving in using credit card: "; TAB(30); USING MONEYFMT$;                      PVCASH - PVCARD
400 END
```

## CREDITPU.BAS

```bas
100 'Credit Purchase ("CREDITPURCH")
110 CLS
120 COLOR 0,15 : PRINT "Credit Purchase" : COLOR 15,0
130 DEFDBL A-Z
140 MONEYFMT$ = "$$##,###,###.##"
150 'Define rounding function
160 DEF FNR( V) = SGN( V) * INT (ABS (V) * 100 + .5) / 100
170 PRINT: PRINT
180 PRINT "Do not enter dollar signs or commas"
190 PRINT
200 INPUT "Purchase price: ", BALANCE
210 INPUT "Annual interest charge (in percent): ", CR
220 INPUT "Monthly payment (as percentage of balance): ", RPMT
230 INPUT "Minimum monthly payment: ", MINPMT
240 INPUT "Annual interest rate on savings (in percent): ", AR
250 PRINT "Enter date of first payment"
260 INPUT "  Month (1-12): ", SMONTH
270 INPUT "  Year: ", SYEAR
280 '     Initialize values
290 PR = (1 + AR / 100) ^ (1/12) - 1
300 TOTALPAYMENTS = 0
310 TOTALINTEREST = 0
320 PV = 0
330 M = 0
340 MONTHNUM = SYEAR * 12 + SMONTH
350 PRINT
360 PRINT "Press space bar to continue"
370 '     Calculate monthly balances
380 WHILE BALANCE > 0
390   K$ = INKEY$ : IF K$ = ""  THEN GOTO 390
400   M = M + 1
410   YEAR = (MONTHNUM - 1) \ 12
420   MONTH = MONTHNUM - YEAR * 12
430   MONTHNUM = MONTHNUM + 1
440   'Calculate month's payments
450   INTERESTDUE = FNR (BALANCE * CR / 1200)
460   PMT = INT (BALANCE * RPMT + .5) / 100
470   IF PMT < MINPMT  THEN PMT = MINPMT
480   IF PMT > BALANCE + INTERESTDUE  THEN PMT = BALANCE + INTERESTDUE
490   BALANCE = FNR (BALANCE - PMT + INTERESTDUE)
500   TOTALPAYMENTS = TOTALPAYMENTS + PMT
510   PV = PV + PMT * (1 + PR) ^ -M
520   TOTALINTEREST = TOTALINTEREST + INTERESTDUE
530   'Print results
540   PRINT:PRINT
550   PRINT "Payment number: "; M
560   PRINT "Date: "; MONTH;"/"; YEAR
570   PRINT "New balance: "; TAB(30); USING MONEYFMT$; BALANCE
580   PRINT "Payment: "; TAB(30); USING MONEYFMT$; PMT
590   PRINT "Finance charge: "; TAB(30); USING MONEYFMT$; INTERESTDUE
600   PRINT "Cumulative payments: "; TAB(30); USING MONEYFMT$; TOTALPAYMENTS
610   PRINT "Cumulative finance charges: "; TAB(30); USING MONEYFMT$;                           TOTALINTEREST
620   PRINT "Present value of payments: "; TAB(30); USING MONEYFMT$; PV
640 WEND
650 END
```

## DAILYODO.BAS

```bas
100 'Daily Odometer ("DAILYODOMETER")
110 CLS
120 COLOR 0,15: PRINT "Daily Odometer": COLOR 15,0
130 PRINT
140 DEFINT A-Z
150 GOSUB 1000  'Get number of days in month
160 GOSUB 2000  'Let user enter starting date
170 INPUT "Number of days forward: ", DFRW
180 '     Move forward a day at a time
190 FOR N = 1 TO DFRW
200   NDAYS(2) = 28          'Adjust February for leap years
210   IF (YEAR MOD 4) = 0 AND (YEAR MOD 100) <> 0  THEN NDAYS(2) = 29
220   IF (YEAR MOD 400) = 0 THEN NDAYS(2) = 29
230   DAY = DAY + 1
240   'Move to next month if necessary
250   IF DAY > NDAYS(MONTH)  THEN DAY = 1 : MONTH = MONTH + 1
260   'Move to next year if necessary
270   IF (MONTH = 13)  THEN YEAR = YEAR + 1: MONTH = 1
280 NEXT N
290 '     Print target date
300 PRINT
310 PRINT "Month:";MONTH
320 PRINT "Day:";SPC(2);DAY
330 PRINT "Year:"; SPC(1); YEAR
340 END
990 '     Subroutine to set up list with number of days in months
1000 DIM NDAYS(12)
1010 FOR N = 1 TO 12
1020   READ NDAYS(N)
1030 NEXT N
1040 'Number of days in months
1050 DATA 31, 28, 31, 30
1060 DATA 31, 30, 31, 31
1070 DATA 30, 31, 30, 31
1080 RETURN
1990 '     Subroutine to let user enter date
2000 INPUT "Month (1-12): ", MONTH
2010 IF (MONTH < 1) OR (MONTH > 12)  THEN PRINT " *No such month *": GOTO 2000
2020 INPUT "Day (1-31): ", DAY
2030 INPUT "Year: ", YEAR
2040 IF (YEAR < 1900) OR (YEAR > 2100)  THEN PRINT "Invalid year": GOTO 2000
2050 'Check for leap year
2060 IF (YEAR MOD 4) = 0 AND (YEAR MOD 100) <> 0  THEN NDAYS(2) = 29
2070 IF (YEAR MOD 400) = 0  THEN NDAYS(2) = 29
2080 'Check for valid date
2090 IF DAY > NDAYS(MONTH)  THEN PRINT "* No such day *": GOTO 2000
2100 RETURN
```

## DATEDIST.BAS

```bas
100 'Time between dates in years, months, days ("DATEDISTANCE")
110 CLS
120 COLOR 0,15 : PRINT "Date Distance" : COLOR 15,0
130 PRINT
140 '     Let user enter dates
150 GOSUB 1000     'Get number of days in months
160 PRINT "Enter starting date"
170 GOSUB 2000     'Get starting date
180 SMONTH = MONTH : SDAY = DAY : SYEAR = YEAR
190 PRINT
200 PRINT "Enter ending date"
210 GOSUB 2000     'Get ending date
220 EMONTH = MONTH : EDAY = DAY : EYEAR = YEAR
230 PRINT
240 '     Ending day at or after starting day
250 IF EDAY >= SDAY  THEN TOTALDAYS = EDAY - SDAY
260 '     Ending day before starting day
270 PREVMONTH = EMONTH - 1
280 IF PREVMONTH = 0  THEN PREVMONTH = 12
290 IF EDAY < SDAY  THEN TOTALDAYS = EDAY + NDAYS (PREVMONTH) - SDAY
300 '     Find number of elapsed months
310 TOTALMONTHS = 12 * (EYEAR - SYEAR) + EMONTH - SMONTH
320 IF EDAY < SDAY  THEN TOTALMONTHS = TOTALMONTHS - 1
330 TOTALYEARS = TOTALMONTHS \ 12
340 TOTALMONTHS = TOTALMONTHS - 12 * TOTALYEARS
350 '     Print results
360 PRINT "Years: ", TOTALYEARS
370 PRINT "Months: ", TOTALMONTHS
380 PRINT "Days: ", TOTALDAYS"
390 END
990 '     Subroutine to set up list with number of days in months
1000 DIM NDAYS(12)
1010 FOR N = 1 TO 12
1020   READ NDAYS(N)
1030 NEXT N
1040 'Number of days in months
1050 DATA 31, 28, 31, 30
1060 DATA 31, 30, 31, 31
1070 DATA 30, 31, 30, 31
1080 RETURN
1990 '     Subroutine to let user enter date
2000 INPUT "Month (1-12): ", MONTH
2010 IF (MONTH < 1) OR (MONTH > 12)  THEN PRINT " *No such month *": GOTO 2000
2020 INPUT "Day (1-31): ", DAY
2030 INPUT "Year: ", YEAR
2040 IF (YEAR < 1900) OR (YEAR > 2100)  THEN PRINT "Invalid year": GOTO 2000
2050 'Check for leap year
2060 IF (YEAR MOD 4) = 0 AND (YEAR MOD 100) <> 0  THEN NDAYS(2) = 29
2070 IF (YEAR MOD 400) = 0  THEN NDAYS(2) = 29
2080 'Check for valid date
2090 IF DAY > NDAYS(MONTH)  THEN PRINT "* No such day *": GOTO 2000
2100 RETURN
```

## DATESINM.BAS

```bas
100 'Dates in Month ("DATESINMONTH")
110 CLS
120 COLOR 0,15 : PRINT "Dates in Month" : COLOR 15,0
130 PRINT
140 '     Get names of months
150 DIM MONTHNAMES$ (12)
160 FOR N = 1 TO 12
170   READ MONTHNAMES$ (N)
180 NEXT N
190 DATA January, February, March, April, May, June
200 DATA July, August, September, October, November, December
210 '     Get names of days
220 DIM DAYNAMES$ (7)
230 FOR N = 0 TO 7
240   READ DAYNAMES$ (N)
250 NEXT N
260 DATA Saturday, Sunday, Monday, Tuesday
270 DATA Wednesday, Thursday, Friday, End
280 '     Get words 1st through 5th
290 DIM ORDINALS$ (5)
300 FOR N = 1 TO 5
310   READ ORDINALS$ (N)
320 NEXT N
330 DATA 1st, 2nd, 3rd, 4th, 5th
340 '     Get number of days in months
350 DIM NDAYS (12)
360 FOR N = 1 TO 12
370   READ NDAYS (N)
380 NEXT N
390 DATA 31, 28, 31, 30
400 DATA 31, 30, 31, 31
410 DATA 30, 31, 30, 31
420 '     Let user enter date
430 INPUT "Day of week: ", DAY$
440 'Find number of day
450 IF LEFT$ (DAY$, 1) > "Z"  THEN MID$(DAY$, 1) =                                     CHR$ (ASC (LEFT$ (DAY$, 1) ) - 32)
460 DAY = 0
470 WHILE (DAY <= 6) AND (LEFT$ (DAYNAMES$ (DAY), 2) <> LEFT$ (DAY$, 2) )
480   DAY = DAY + 1
490 WEND
500 IF DAY = 7  THEN GOTO 430    'Invalid day
510 INPUT "Month (1-12): ",MONTH
520 IF MONTH < 1 OR MONTH > 13  THEN PRINT "** No such month **" : GOTO 510
530 INPUT "Year: ", YEAR
540 '     Make February 29 days long in leap years
550 IF (YEAR MOD 4) = 0 AND (YEAR MOD 100) <> 0 THEN NDAYS(2) = 29
560 IF (YEAR MOD 400) = 0 THEN NDAYS(2) = 29
570 '     Find day for first of month
580 FACTOR = 365 * YEAR + 31 * (MONTH - 1) + 1
590 'January or February
600 IF MONTH <= 2  THEN FACTOR = FACTOR + (YEAR - 1) \ 4 -                             INT (3/4 * ( (YEAR - 1) \ 100 + 1 ) )
610 'March or later
620 IF MONTH >= 3  THEN FACTOR = FACTOR - INT (.4 * MONTH + 2.3) + YEAR \ 4 -         INT (3/4 * (YEAR \ 100 + 1) )
630 FACTOR = FACTOR - INT (FACTOR / 7) * 7
640 IF DAY >= FACTOR  THEN DATE = DAY + 1 - FACTOR                                     ELSE DATE = DAY + 8 - FACTOR
650 '     Print the dates
660 PRINT
670 N = 1
680 WHILE DATE <= NDAYS (MONTH)
690   PRINT ORDINALS$(N); SPC(2); DAYNAMES$(DAY); DATE; MONTHNAMES$ (MONTH)
700   N = N + 1
710   DATE = DATE + 7
720 WEND
730 END
```

## DAYOFWEE.BAS

```bas
100 'Day of Week ("DAYOFWEEK")
110 CLS
120 COLOR 0,15: PRINT "Day of Week": COLOR 15,0
130 PRINT
140 '     Get names of days
150 DIM DAYS$(6)
160 FOR N = 0 TO 6
170   READ DAYS$(N)
180 NEXT N
190 DATA Saturday, Sunday, Monday, Tuesday
200 DATA Wednesday, Thursday, Friday
210 '     Get date from user
220 GOSUB 1000
230 GOSUB 2000
240 '     Calculate factor for date
250 FACTOR = 365 * YEAR + DAY + 31 * (MONTH-1)
260 'January or February
270 IF MONTH <= 2 THEN FACTOR = FACTOR + (YEAR-1) \ 4 -                                INT(3/4 * ( (YEAR-1) \ 100 + 1) )
280 'March or later
290 IF MONTH >= 3 THEN FACTOR = FACTOR - INT(.4 * MONTH + 2.3) + YEAR\4 -              INT(3/4 * (YEAR\100 + 1) )
300 FACTOR = FACTOR - INT(FACTOR / 7) * 7
310 '     Print day of week
320 PRINT
330 PRINT DAYS$(FACTOR)
340 END
990 '     Subroutine to set up list with number of days in months
1000 DIM NDAYS(12)
1010 FOR N = 1 TO 12
1020   READ NDAYS(N)
1030 NEXT N
1040 'Number of days in months
1050 DATA 31, 28, 31, 30
1060 DATA 31, 30, 31, 31
1070 DATA 30, 31, 30, 31
1080 RETURN
1990 '     Subroutine to let user enter date
2000 INPUT "Month (1-12): ", MONTH
2010 IF (MONTH < 1) OR (MONTH > 12)  THEN PRINT " *No such month *": GOTO 2000
2020 INPUT "Day (1-31): ", DAY
2030 INPUT "Year: ", YEAR
2040 IF (YEAR < 1900) OR (YEAR > 2100)  THEN PRINT "Invalid year": GOTO 2000
2050 'Check for leap year
2060 IF (YEAR MOD 4) = 0 AND (YEAR MOD 100) <> 0  THEN NDAYS(2) = 29
2070 IF (YEAR MOD 400) = 0  THEN NDAYS(2) = 29
2080 'Check for valid date
2090 IF DAY > NDAYS(MONTH)  THEN PRINT "* No such day *": GOTO 2000
2100 RETURN
```

## DEPGROWS.BAS

```bas
100 'Savings With Growing Deposits ("DEPGROWS")
110 CLS
120 COLOR 0,15 : PRINT "Savings With Growing Deposits" : COLOR 15,0
130 DEFDBL A-Z
140 DEFINT M-N
150 'Define function to convert annual rate to periodic rate
160 DEF FNCONV (V) = (1 + V / 100) ^ (1 / NPY) - 1
170 MONEYFMT$ = "$$##,###,###.##"
180 '     Let user select type of result
190 PRINT
200 PRINT "Select desired result:"
210 PRINT
220 PRINT "1 - Initial deposit"
230 PRINT "2 - Rate of growth in deposits"
240 PRINT "3 - Final balance"
250 PRINT
260 INPUT "Result number: ", RESULT
270 IF RESULT < 1 OR RESULT > 3  THEN PRINT "Select 1-3 only" : GOTO 210
280 PRINT
290 '     Let user enter data
300 PRINT "Do not enter dollar signs or commas"
310 PRINT
320 IF RESULT <> 1 THEN INPUT "Initial deposit: ", PV
330 IF RESULT <> 2 THEN INPUT "Annual growth rate in deposit (in percent): ",                      GROWTHRATE
340 IF RESULT <> 3 THEN INPUT "Savings goal: ", FV
350 INPUT "Annual interest rate (in percent): ", AR
360 INPUT "Number of periods: ", NPERIODS
370 INPUT "Number of periods per year: ", NPY
380 INPUT "Marginal tax rate (in percent): ", TAXRATE
390 INPUT "Annual inflation rate (in percent): ", INFLATION
400 PRINT
410 '     Compute periodic rates
420 PR = FNCONV (AR)                  'Periodic interest rate
430 PR = PR * (1 - TAXRATE / 100)     'After-tax interest rate
440 GR = FNCONV (GROWTHRATE)          'Periodic growth in deposit
450 INFLATION = FNCONV (INFLATION)    'Periodic inflation rate
460 FV = FV * (1 + INFLATION) ^ NPERIODS
470 ON RESULT GOTO 490, 540, 690
480 '     Result 1: Find required initial deposit
490 PV = FV * (PR - GR) / (1 + PR)
500 IF PR <> GR  THEN PV = PV / ( (1 + PR) ^ NPERIODS - (1 + GR) ^ NPERIODS)                     ELSE PV = FV * (1 + PR) ^ -NPERIODS / NPERIODS
510 PRINT "Required initial deposit: "; USING MONEYFMT$; PV
520 END
530 '     Result 2: Required growth in deposits
540 GRLOWER = -.5
550 GRUPPER = .5
560 WHILE ABS (GRUPPER - GRLOWER) > .00001
570   TRIALGR = (GRUPPER + GRLOWER) / 2
580   IF PR <> TRIALGR  THEN TRIALFV = PV * (1 + PR) / (PR - TRIALGR)
590   TRIALFV = TRIALFV * ( (1 + PR) ^ NPERIODS - (1 + TRIALGR) ^ NPERIODS)
600   IF PR = TRIALGR  THEN TRIALFV = NPERIODS * PV * (1 + PR) ^ NPERIODS
610   IF TRIALFV > FV  THEN GRUPPER = TRIALGR  ELSE GRLOWER = TRIALGR
620 WEND
630 GROWTHRATE = (GRUPPER + GRLOWER) / 2
640 GROWTHRATE = ( (1 + GROWTHRATE) ^ NPY - 1) * 100
650 PRINT "Required annual growth rate in deposit: ";
660 PRINT USING "###.##_%"; GROWTHRATE
670 END
680 '     Result 3: Find final balance
690 IF PR <> GR  THEN FV = PV * (1 + PR) / (PR - GR)
700 IF PR <> GR  THEN FV = FV * ( (1 + PR) ^ NPERIODS - (1 + GR) ^ NPERIODS)
710 IF PR = GR  THEN FV = NPERIODS * PV * (1 + PR) ^ NPERIODS
720 FV = FV * (1 + INFLATION) ^ -NPERIODS  'Adjust for inflation
730 PRINT
740 PRINT "Final balance: "; USING MONEYFMT$; FV
750 END
```

## INTRATE.BAS

```bas
100 ' Interest Rate on Loan ("INTRATE")
110 CLS
120 COLOR 0,15 : PRINT "Interest Rate on Loan" : COLOR 15,0
130 PRINT : PRINT
140 DEFDBL A-Z
150 DEFINT M-N
160 '     Let user enter the data
170 PRINT "Do not enter dollar signs or commas"
180 PRINT
190 INPUT "Amount of loan: ", PNCPL
200 INPUT "Monthly payment: ", PMT
210 INPUT "Term (in months): ", NMONTHS
220 '     Use bisection method to find interest rate
230 RLOWER = 0  'Initial values
240 RUPPER= .5
250 WHILE (RUPPER - RLOWER) > .00001
260   PR = (RLOWER + RUPPER) / 2
270   'Calculate payment for trial value
280   TRIALPMT = PNCPL / ( (1 - (1 + PR) ^ -NMONTHS) / PR)
290   IF TRIALPMT > PMT  THEN RUPPER = PR  ELSE RLOWER = PR
300 WEND
310 '     Print results
320 AR = (RUPPER + RLOWER) / 2 * 1200
330 PRINT
340 PRINT "Interest rate: "; USING "###.##_%"; AR
350 END
```

## INVHISTO.BAS

```bas
100 'Investment History ("INVHISTORY")
110 CLS
120 COLOR 0,15 : PRINT "Investment History" : COLOR 15,0
130 DEFDBL A-Z
140 DEFINT M-N, Y
150 'Templates for printing numbers
160 PCTFMT$ = "###.##_%"
170 MONEYFMT$ = "$$##,###,###.##"
180 '     Let user enter data
190 PRINT
200 PRINT "Do not enter dollar signs or commas"
210 PRINT
220 INPUT "Purchase price: ", PV
230 INPUT "Term (in years): ", NYEARS
240 INPUT "Annual income (as percent of purchase price): ", RINCOME
250 INPUT "Annual capital gains (in percent): ", RCGAINS
260 INPUT "Annual interest rate on savings (in percent): ", AR
270 INPUT "Number of years to start of income stream : ", NDELAY
280 '     Convert percent rate to decimal
290 RINCOME = RINCOME / 100
300 RCGAINS = RCGAINS / 100
310 AR = AR / 100
320 PRINT
330 PRINT "Press space bar to see next year's results"
340 PRINT
350 '     Initialize values
360 TOTALINCOME = 0
370 PRICE = PV
380 '      Calculate each year's values
390 FOR YEAR = 1 TO NYEARS
400   'Wait for user to press key
410   WHILE INKEY$ = "" : WEND
420   PRICE = PRICE * (1 + RCGAINS)
430   TOTALINCOME = TOTALINCOME * (1 + AR)
440   IF YEAR > NDELAY  THEN TOTALINCOME = TOTALINCOME + PV * RINCOME
450   CAPITALGAINS = PRICE - PV
460   ANNUALYIELD = ( (PRICE + TOTALINCOME) / PV) ^ (1 / YEAR) - 1
470   ANNUALYIELD = 100 * ANNUALYIELD
480   'Print results
490   PRINT
500   PRINT "Year: "; YEAR
510   PRINT "Current price of investment: "; TAB(32);
520   PRINT USING MONEYFMT$; PRICE
530   PRINT "Capital gains: ";TAB(32); 
540   PRINT USING MONEYFMT$; CAPITALGAINS
550   PRINT "Total income: "; TAB(32);
560   PRINT USING MONEYFMT$; TOTALINCOME
570   PRINT "Rate of return: "; TAB(41); USING PCTFMT$; ANNUALYIELD
580 NEXT YEAR
590 END
```

## INVINCOM.BAS

```bas
100 'Investment Income ("INVINCOME")
110 CLS
120 COLOR 0,15 : PRINT "Investment Income" : COLOR 15,0
130 DEFDBL A-Z
140 DEFINT M-N
150 MONEYFMT$ = "$$##,###,###.##"
160 PRINT : PRINT
170 PRINT "Do not enter dollar signs or commas"
180 PRINT
190 '     Let user enter data
200 INPUT "Purchase price of investment: ", PV
210 INPUT "Value of investment at end of term: ", FV
220 INPUT "Desired annual rate of return (in percent): ", AY
230 INPUT "Total number of periods: ", NPERIODS
240 INPUT "Number of income receipts per year: ", NPY
250 INPUT "Annual interest rate (in percent): ", AR
260 '     Convert annual rates to periodic rates
270 PR = (1 + AR / 100) ^ (1 / NPY) - 1
280 PY = (1 + AY / 100) ^ (1 / NPY) - 1
290 '     Find required present value of income
300 VALUEINCOME = (PV * (1 + PY) ^ NPERIODS - FV) * (1 + PR) ^ -NPERIODS
310 '     Find required periodic income
320 PMT = PR * VALUEINCOME / (1 - (1 + PR) ^ -NPERIODS)
330 PRINT
340 PRINT "Required periodic income: "; USING MONEYFMT$; PMT
350 END
```

## INVPRICE.BAS

```bas
100 'Investment Price ("INVPRICE")
110 CLS
120 COLOR 0,15 : PRINT "Investment Price" : COLOR 15,0
130 DEFDBL A-Z
140 MONEYFMT$ = "$$##,###,###.##"
150 PRINT : PRINT
160 PRINT "Do not enter dollar signs or commas"
170 PRINT
180 '     Let user enter data
190 INPUT "Purchase price of investment: ", PV
200 INPUT "Income each period: ", PMT
210 INPUT "Desired annual rate of return (in percent): ", AY
220 INPUT "Total number of periods: ", NPERIODS
230 INPUT "Number of income receipts per year: ", NPY
240 INPUT "Annual interest rate (in percent): ", AR
250 '     Convert annual rates to periodic rates
260 PR = (1 + AR / 100) ^ (1 / NPY) - 1
270 PY = (1 + AY / 100) ^ (1 / NPY) - 1
280 '     Find present value of income stream
290 IF PR <> 0  THEN VALUEINCOME = (PMT / PR) * (1 - (1 + PR) ^ -NPERIODS)                      ELSE VALUEINCOME = PMT * NPERIODS
300 '     Find required selling price
310 FV = PV * (1 + PY) ^ NPERIODS - VALUEINCOME * (1 + PR) ^ NPERIODS
320 PRINT
330 PRINT "Required selling price: "; USING MONEYFMT$; FV
340 END
```

## INVVALUE.BAS

```bas
100 'Investment Value ("INVVALUE")
110 CLS
120 COLOR 0,15 : PRINT "Investment Value" : COLOR 15,0
130 DEFDBL A-Z
140 MONEYFMT$ = "$$##,###,###.##"
150 PRINT : PRINT
160 PRINT "Do not enter dollar signs or commas"
170 PRINT
180 '     Let user enter data
190 INPUT "Value of investment at end of term: ", FV
200 INPUT "Income each period: ", PMT
210 INPUT "Total number of periods: ", NPERIODS
220 INPUT "Number of income receipts per year: ", NPY
230 INPUT "Annual interest rate (in percent): ", AR
240 '     Find present value of income receipts
250 PR = (1 + AR / 100) ^ (1 / NPY) - 1
260 IF PR <> 0  THEN VALUEINCOME = (PMT / PR) * (1 - (1 + PR) ^ -NPERIODS)                      ELSE VALUEINCOME = PMT * NPERIODS
270 '     Add value at end of term
280 PV = VALUEINCOME + FV * (1 + PR) ^ -NPERIODS
290 PRINT
300 PRINT "Value of investment: ";USING MONEYFMT$; PV
310 END
```

## INVYIELD.BAS

```bas
100 'Investment Yield ("INVYIELD")
110 CLS
120 COLOR 0,15 : PRINT "Investment Yield" : COLOR 15,0
130 DEFDBL A-Z
140 PCTFMT$ = "###.##_%"
150 PRINT : PRINT
160 PRINT "Do not enter dollar signs or commas"
170 PRINT
180 '     Let user enter data
190 INPUT "Purchase price of investment: ", PV
200 INPUT "Value of investment at end of term: ", FV
210 INPUT "Income per period: ", PMT
220 INPUT "Total number of periods: ", NPERIODS
230 INPUT "Number of income receipts per year: ", NPY
240 INPUT "Annual interest rate (in percent): ", AR
250 '     Find present value of income receipts
260 PR = (1 + AR / 100) ^ (1 / NPY) - 1
270 IF PR <> 0  THEN VALUEINCOME = (PMT / PR) * (1 - (1 + PR) ^ -NPERIODS)                      ELSE VALUEINCOME = NPERIODS * PMT
280 '     Find total future value
290 TOTALFV = VALUEINCOME * (1 + PR) ^ NPERIODS + FV
300 '     Find rate of return per period
310 PY = (TOTALFV / PV) ^ (1 / NPERIODS) - 1
320 '     Convert to annual rate of return
330 AY = 100 * ( (1 + PY) ^ NPY - 1)
340 PRINT
350 PRINT "Annual rate of return: "; USING PCTFMT$; AY
360 END
```

## IRA.BAS

```bas
100 'IRA Savings ("IRA")
110 CLS
120 COLOR 0,15 : PRINT "IRA Savings Evaluator" : COLOR 15,0
130 PRINT
140 DEFDBL A-Z
150 DEFINT M-N,Y
160 MONEYFMT$ = "$$##,###,###.##"
170 '     Let user enter data
180 PRINT "Do not enter dollar signs or commas"
190 PRINT
200 INPUT "Annual IRA deposit: ", DEPOSIT
210 INPUT "Annual interest rate (in percent): ", AR
220 INPUT "Annual inflation rate (in percent): ", INFLATION
230 INPUT "Marginal tax rate (in percent): ", TAXRATE
240 INPUT "Penalty for early withdrawal (in percent): ", PENALTY
250 '     Initialize variables
260 TAXRATE = TAXRATE / 100
270 AR = AR / 100
280 INFLATION = INFLATION / 100
290 PENALTY = PENALTY / 100
300 IRABALANCE = 0
310 AUXBALANCE = 0
320 REGBALANCE = 0
330 PRINT
340 PRINT "Press space bar to continue"
350 PRINT
360 '     Compute annual balances
370 FOR YEAR = 1 TO 60
380   WHILE INKEY$ = "" : WEND
390   PRINT
400   IRABALANCE = IRABALANCE * (1 + AR) + DEPOSIT
410   REGBALANCE = REGBALANCE + REGBALANCE * AR * (1 - TAXRATE) + DEPOSIT
420   AUXBALANCE = AUXBALANCE + AUXBALANCE * AR * (1 - TAXRATE) + DEPOSIT *                        TAXRATE
430   'Find total IRA savings
440   TOTALIRA = AUXBALANCE + IRABALANCE * (1 - PENALTY - TAXRATE)
450   INFLATIONADJ = (1 + INFLATION) ^ -YEAR
460   'Print results
470   PRINT "Year: "; YEAR
480   PRINT SPC(10); "IRA Savings"
490   PRINT
500   PRINT "Nominal balance: "; TAB(30);
510   PRINT USING MONEYFMT$; TOTALIRA
520   PRINT "Inflation-adjusted balance: "; TAB(30);
530   PRINT USING MONEYFMT$; TOTALIRA * INFLATIONADJ
540   PRINT
550   PRINT SPC(10); "Savings Without IRA"
560   PRINT
570   PRINT "Nominal balance: "; TAB(30);
580   PRINT USING MONEYFMT$; REGBALANCE
590   PRINT "Inflation-adjusted balance: "; TAB(30);
600   PRINT USING MONEYFMT$; REGBALANCE * INFLATIONADJ
610 NEXT YEAR
620 END
```

## LOANCOST.BAS

```bas
100 'Loan Cost ("LOANCOST")
110 CLS
120 COLOR 0,15 : PRINT "Loan Cost" : COLOR 15,0
130 PRINT
140 DEFSNG A-Z
150 DEFINT M-N
160 MONEYFMT$ = "$$##,###,###.##"
170 '     Let user choose type of loan
180 PRINT "Select type of loan"
190 PRINT
200 PRINT "1 - Fully amortized"
210 PRINT "2 - Rule of 78s"
220 PRINT "3 - Interest only plus balloon payment"
230 PRINT
240 INPUT "Type of loan (1-3): ", TYPE
250 IF (TYPE < 1) OR (TYPE > 3)  THEN PRINT "Select 1-3 only" : PRINT: GOTO 200
260 PRINT : PRINT "Do not enter dollar signs or commas" : PRINT
270 '     Let user enter amount, term, rates
280 INPUT "Loan amount: ", PNCPL
290 INPUT "Term in months: ", NMONTHS
300 INPUT "Annual interest rate on loan (in percent): ", AR
310 INPUT "Annual interest rate on savings (in percent): ", SR
320 INPUT "Marginal tax rate (in percent): ", TAXRATE
330 '     Initialize variables
340 PR = AR / 1200                     'Monthly interest rate on loan
350 SR = (1 + SR / 100) ^ (1/12) - 1   'Monthly interest rate on savings
360 SR = SR * (1 - TAXRATE / 100)
370 'Determine monthly payment
380 IF TYPE = 1 OR TYPE = 2 THEN PMT = (PNCPL * PR) / (1 - (1 + PR) ^ -NMONTHS)
390 IF TYPE = 3  THEN PMT = PNCPL * PR
400 TFC = PMT * NMONTHS - PNCPL        'Total finance charge for Rule of 78s
410 '      Calculate amortization
420 PV = 0
430 FOR M = 1 TO NMONTHS
440   IF TYPE = 1 OR TYPE = 3  THEN INTERESTDUE = PNCPL * PR
450   IF TYPE = 2  THEN INTERESTDUE = TFC * 2 * (NMONTHS - M + 1) /                                (NMONTHS * (NMONTHS + 1) )
460   PNCPL = PNCPL - PMT + INTERESTDUE
470   PV = PV + (PMT - INTERESTDUE * TAXRATE / 100) * (1 + SR) ^ -M
480 NEXT M
490 IF TYPE = 3  THEN PV = PV + PNCPL * (1 + SR) ^ -NMONTHS
500 PRINT
510 PRINT "After-tax cost of loan: "; USING MONEYFMT$; PV
520 END
```

## LOANQUAL.BAS

```bas
100 'Loan Qualification ("LOANQUAL")
110 CLS
120 COLOR 0,15 : PRINT "Loan Qualification" : COLOR 15,0
130 DEFDBL A-Z
140 DEFINT M-N
150 MONEYFMT$ = "$$##,###,###.##"
160 '     Let user enter data
170 PRINT : PRINT
180 PRINT "Do not enter dollar signs or commas"
190 PRINT
200 INPUT "Monthly payment: ", PMT
210 INPUT "Term (in months): ", NMONTHS
220 INPUT "Annual interest rate (in percent): ", AR
230 PR = AR / 1200    'Convert to monthly interest rate
240 '     Find present value of payments
250 IF PR <> 0  THEN PNCPL = (PMT / PR) * (1 - (1 + PR) ^ -NMONTHS)                             ELSE PNCPL = PMT * NMONTHS
260 '     Print results
270 PRINT
280 PRINT "Borrower can qualify for loan of ";
290 PRINT USING MONEYFMT$ ; PNCPL
300 END
```

## LOANTERM.BAS

```bas
100 'Term of Loan ("LOANTERM")
110 CLS
120 COLOR 0,15 : PRINT "Term of Loan" : COLOR 15,0
130 PRINT : PRINT
140 DEFDBL A-Z
150 DEFINT M-N
160 MONEYFMT$ = "$$##,###,###.##"
170 '     Let user enter data
180 PRINT "Do not enter dollar signs or commas"
190 PRINT
200 INPUT "Amount of loan: ", PNCPL
210 INPUT "Payment each period: ", PMT
220 INPUT "Number of payments per year: ", NPY
230 INPUT "Annual interest rate (in percent): ", AR
240 '     Check if payment too low
250 PR = AR / (100 * NPY)
260 IF PNCPL * PR > PMT  THEN PRINT : PRINT                                            "Payment will not amortize loan" : END
270 '     Find number of periods to repay loan
280 IF PR <> 0 THEN NUMPAYMENTS = INT (-LOG (1 - PR * PNCPL / PMT)                                  / LOG (1 + PR) )                                                           ELSE NUMPAYMENTS = INT (PNCPL / PMT)
290 '     Find balance remaining at end of term
300 EBALANCE = (1 + PR) ^ -NUMPAYMENTS - 1
310 IF PR <> 0  THEN EBALANCE= (EBALANCE * PMT / PR + PNCPL) *                                       (1 + PR) ^ NUMPAYMENTS                                                     ELSE EBALANCE = PNCPL - NUMPAYMENTS * PMT
320 '     Print results
330 PRINT : PRINT
340 PRINT "Number of payments required:";  TAB(32); NUMPAYMENTS
350 PRINT "Ending balance: "; TAB(20); 
360 PRINT USING MONEYFMT$; EBALANCE
370 END
```

## MNTHINCM.BAS

```bas
100 ' Monthly income ("MNTHINCM")
110 CLS
120 COLOR 0,15 : PRINT "Monthly Income" : COLOR 15,0
130 DEFDBL A-Z
140 DEFINT M-N
150 'Define rounding function
160 DEF FNR (V) = SGN (V) * INT (ABS (V) * 100 + .5) / 100
170 MONEYFMT$ = "$$##,###,###.##"
180 '     Let user select results
190 PRINT : PRINT "Select desired result:"
200 PRINT
210 PRINT "1 - Initial deposit"
220 PRINT "2 - Required interest rate"
230 PRINT "3 - Monthly income"
240 PRINT "4 - Number of monthly withdrawals"
250 PRINT
260 INPUT "Result Number";  RESULT
270 IF RESULT < 1 OR RESULT > 4  THEN PRINT "Select 1-4 only" : GOTO 200
280 PRINT
290 '     Let user enter data
300 PRINT "Do not enter dollar signs or commas"
310 PRINT
320 IF RESULT <> 1  THEN INPUT "Initial deposit: ", PV
330 IF RESULT <> 2  THEN INPUT "Annual interest rate (in percent): ", AR
340 IF RESULT <> 3  THEN INPUT "Monthly income: ", INCOME
350 IF RESULT <> 4  THEN INPUT "Term (in months): ", NMONTHS
360 INPUT "Annual inflation rate (in percent): ", INFLATION
370 INPUT "Marginal tax rate (in percent): ", TAXRATE
380 '     Initialize values
390 PR = (1 + AR / 100) ^ (1 / 12) - 1  'Monthly interest rate
400 PR = PR * (1 - TAXRATE / 100)       'After - tax interest rate
410 'Monthly inflation rate
420 INFLATION = (1 + INFLATION / 100) ^ (1 / 12) - 1
430 'Effective interest rate
440 REFFECTIVE = (1 + PR) / (1 + INFLATION) - 1
450 PRINT
460 ON RESULT GOTO 480, 530, 670, 720
470 '     Result 1: Initial deposit
480 IF REFFECTIVE < > 0  THEN PV = INCOME * (1 + REFFECTIVE) / REFFECTIVE                                     * (1 - (1 + REFFECTIVE) ^ - NMONTHS)                                       ELSE PV = INCOME * NMONTHS
490 PRINT "Initial deposit: "; USING MONEYFMT$; PV
500 END
510 '     Result 2: Required interest rate
520 'Use bisection method
530 RLOWER = 0
540 RUPPER = .5
550 WHILE (RUPPER - RLOWER) > .00001
560   TRIALR = (RUPPER + RLOWER) / 2
570   REFFECTIVE = TRIALR * (1 - TAXRATE / 100)
580   REFFECTIVE = (1 + REFFECTIVE) / (1 + INFLATION) - 1
590   TRIALPMT = PV * REFFECTIVE / ( (1 + REFFECTIVE) * (1 - (1 + REFFECTIVE)                    ^ -NMONTHS) )
600   IF TRIALPMT > INCOME  THEN RUPPER = TRIALR  ELSE RLOWER = TRIALR
610 WEND
620 AR = (1 + (RUPPER + RLOWER) / 2) ^ 12 - 1
630 AR = AR * 100
640 PRINT "Required interest rate: "; FNR(AR); "%"
650 END
660 '     Result 3: Monthly income
670 IF REFFECTIVE <> 0  THEN INCOME = PV * REFFECTIVE / ((1 + REFFECTIVE) *                                  (1 - (1 + REFFECTIVE) ^ -NMONTHS) )                                        ELSE INCOME = PV / NMONTHS
680 PRINT
690 PRINT "Monthly income : "; USING MONEYFMT$; INCOME
700 END
710 '     Result 4: Number of withdrawals
720 IF REFFECTIVE <> 0  THEN TMONTHS = INCOME / REFFECTIVE + 1
730 IF REFFECTIVE <> 0  THEN TMONTHS = LOG (TMONTHS / (TMONTHS - PV) )                  / LOG (1 + REFFECTIVE)
740 IF REFFECTIVE = 0  THEN TMONTHS = PV / INCOME
750 IF (INT(TMONTHS) + 1 - TMONTHS) < .01  THEN NMONTHS = INT(TMONTHS) + 1                                                 ELSE NMONTHS = INT(TMONTHS)
760 PRINT "Number of monthly withdrawals: "; NMONTHS
770 END
```

## MONTHLYO.BAS

```bas
100 'Monthly Odometer ("MONTHLYODO")
110 CLS
120 COLOR 0,15 : PRINT "Monthly Odometer" :  COLOR 15,0
130 PRINT
140 DEFINT A-Z
150 'Get starting date from user
160 INPUT "Starting month (1-12): ", MONTH
170 IF (MONTH < 1) OR (MONTH > 12)  THEN PRINT " * No such month *" : GOTO 160
180 INPUT "Year: ", YEAR
190 IF (YEAR < 1900) OR (YEAR > 2100)  THEN PRINT "* Invalid year *" : GOTO 180
200 INPUT "Number of months forward: ", MFRW
210 MONTHNUM = YEAR * 12 + MONTH + MFRW
220 YEAR = (MONTHNUM - 1) \ 12
230 MONTH = MONTHNUM - YEAR * 12
240 PRINT
250 PRINT "Month: "; USING "####"; MONTH
260 PRINT "Year:  "; USING "####"; YEAR
270 END
```

## NUMDAYS.BAS

```bas
100 'Number of days between dates ("NUMDAYS")
110 CLS
120 COLOR 0,15 : PRINT "Number of Days Between Dates" : COLOR 15,0
130 PRINT
140 '    Let user enter dates
150 GOSUB 1000    'Get number of days in months
160 PRINT "Enter starting date"
170 GOSUB 2000
180 GOSUB 280     'Find number of days since date 0
190 SFACTOR = FACTOR
200 PRINT : PRINT "Enter ending date"
210 GOSUB 2000
220 GOSUB 280     'Find number of days since date 0
230 EFACTOR = FACTOR
240 PRINT
250 PRINT "Number of days: "; EFACTOR - SFACTOR
260 END
270 '     Subroutine to calculate factor for a date
280 FACTOR = 365 * YEAR + DAY + 31 * (MONTH - 1)
290 'January or February
300 IF MONTH <= 2  THEN FACTOR = FACTOR + (YEAR - 1) \ 4 -                             INT (3/4 * ( (YEAR-1) \ 100 + 1) )
310 'March or later
320 IF MONTH >= 3  THEN FACTOR = FACTOR - INT (.4 * MONTH + 2.3) + YEAR \ 4 -            INT ( 3/4 * (YEAR \ 100 + 1) )
330 RETURN
990 '     Subroutine to set up list with number of days in months
1000 DIM NDAYS(12)
1010 FOR N = 1 TO 12
1020   READ NDAYS(N)
1030 NEXT N
1040 'Number of days in months
1050 DATA 31, 28, 31, 30
1060 DATA 31, 30, 31, 31
1070 DATA 30, 31, 30, 31
1080 RETURN
1990 '     Subroutine to let user enter date
2000 INPUT "Month (1-12): ", MONTH
2010 IF (MONTH < 1) OR (MONTH > 12)  THEN PRINT " *No such month *": GOTO 2000
2020 INPUT "Day (1-31): ", DAY
2030 INPUT "Year: ", YEAR
2040 IF (YEAR < 1900) OR (YEAR > 2100)  THEN PRINT "Invalid year": GOTO 2000
2050 'Check for leap year
2060 IF (YEAR MOD 4) = 0 AND (YEAR MOD 100) <> 0  THEN NDAYS(2) = 29
2070 IF (YEAR MOD 400) = 0  THEN NDAYS(2) = 29
2080 'Check for valid date
2090 IF DAY > NDAYS(MONTH)  THEN PRINT "* No such day *": GOTO 2000
2100 RETURN
```

## PAYBACK.BAS

```bas
100 'Payback Period ("PAYBACK")
110 CLS
120 COLOR 0,15 : PRINT "Payback Period" : COLOR 15,0
130 DEFDBL A-Z
140 PRINT:PRINT
150 PRINT "Do not enter dollar signs or commas"
160 PRINT
170 '     Let user enter data
180 INPUT "Initial investment: ", PV
190 INPUT "Return each period: ", PMT
200 INPUT "Number of returns per year: ", NPY
210 INPUT "Annual interest rate (in percent): ", AR
220 '     Convert annual interest rate to periodic one
230 PR = (1 + AR / 100) ^ (1 / NPY) - 1
240 '     Check if payback possible
250 IF PMT < PV * PR  THEN PRINT " ** Error - No payback **" : END
260 '     Find payback period
270 NPERIODS = LOG (1 - PR * PV / PMT)
280 IF PR <> 0  THEN NPERIODS  =  -NPERIODS / (LOG (1 + PR) )                                   ELSE NPERIODS = PV / PMT
290 IF (NPERIODS - INT (NPERIODS) ) < .001  THEN NPERIODS = INT (NPERIODS)              ELSE NPERIODS = INT(NPERIODS) + 1
300 PRINT
310 PRINT "Payback after "; NPERIODS; " periods"
320 END
```

## PERBALAN.BAS

```bas
100 'Periodic Balance ("PERBALANCE")
110 CLS
120 COLOR 0,15 : PRINT "Periodic Balance" : COLOR 15,0
130 DEFDBL A-Z
140 DEFINT M-N
150 MONEYFMT$ = "$$##,###,###.##"
160 PRINT
170 PRINT "Do not enter dollar signs or commas"
180 PRINT
190 '     Let user enter data
200 INPUT "Starting balance: ", SBALANCE
210 INPUT "Deposit each period: ", DEPOSIT
220 INPUT "Annual interest rate (in percent): ", AR
230 INPUT "Number of years: ", NYEARS
240 INPUT "Number of deposits per year: ", NPY
250 INPUT "Annual inflation rate (in percent): ", INFLATION
260 INPUT  "Marginal tax rate (in percent): ", TAXRATE
270 '     Initialize values
280 PR = (1 + AR / 100) ^ (1 / NPY) - 1    'Interest rate per period
290 PR = PR * (1 - TAXRATE / 100)          'After-tax interest rate
300 '     Find balance at end of term
310 TOTALYEARS = TOTALYEARS + NYEARS
320 EBALANCE = SBALANCE * (1 + PR) ^ (NYEARS * NPY)
330 IF PR <> 0  THEN EBALANCE = EBALANCE + DEPOSIT * ( (1 + PR) ^ (NYEARS * NPY)                     - 1 ) * (1 + PR) / PR                                                      ELSE EBALANCE = EBALANCE + NYEARS * NPY * DEPOSIT
340 'Adjust for inflation
350 ADJUSTEDBAL = EBALANCE * ( (1 + INFLATION / 100) ^ (1 / NPY) ) ^                              (-TOTALYEARS * NPY)
360 '     Print results
370 PRINT
380 PRINT "Year: "; TOTALYEARS
390 PRINT "Final balance "; TAB(30); USING MONEYFMT$; EBALANCE
400 PRINT "Inflation-adjusted balance "; TAB(30); USING MONEYFMT$; ADJUSTEDBAL
410 '     Let user continue additional periods
420 PRINT
430 PRINT "Enter Y to continue, N to stop"
440 K$ = INKEY$: IF K$ = ""  THEN GOTO 440  ELSE IF INSTR("YyNn", K$) = 0                 THEN GOTO 430
450 IF K$ = "N" OR K$ = "n"  THEN END
460   CLS
470   'Let user enter new data
480   INPUT "Deposit each period: ", DEPOSIT
490   INPUT "Annual interest rate (in percent): ", AR
500   INPUT "Number of additional years: ", NYEARS
510   SBALANCE = EBALANCE    'Starting balance is previous final balance
520   GOTO 280   'Repeat calculations
530 END
```

## PERDEPOS.BAS

```bas
100 'Periodic Deposit ("PERDEPOSIT")
110 CLS
120 COLOR 0,15 : PRINT "Periodic Deposit" : COLOR 15,0
130 DEFDBL A-Z
140 DEFINT M-N
150 MONEYFMT$ = "$$##,###,###.##"
160 '     Let user enter data
170 PRINT: PRINT "Do not enter dollar signs or commas"
180 PRINT
190 INPUT "Savings goal: ", FV
200 INPUT "Annual interest rate (in percent): ", AR
210 INPUT  "Number of years: ", NYEARS
220 INPUT "Number of deposits per year: ", NPY
230 INPUT "Annual inflation rate (in percent): ", INFLATION
240 INPUT  "Marginal tax rate (in percent): ",TAXRATE
250 '     Determine after-tax, periodic interest rate
260 PR = (1 + AR / 100) ^ (1 / NPY) - 1
270 PR = PR * (1 - TAXRATE / 100)
280 '     Find periodic deposit
290 IF PR <> 0  THEN DEPOSIT = FV / ( (1+PR) * ( (1+PR) ^ (NPY*NYEARS) -1) / PR)                ELSE DEPOSIT=FV/(NPY*NYEARS)
300 ADJUSTEDEPOSIT = DEPOSIT * (1 + INFLATION / 100) ^ NYEARS
310 '     Print results
320 PRINT
330 PRINT "Periodic deposit to reach nominal goal:"; TAB(51);
340 PRINT USING MONEYFMT$; DEPOSIT
350 PRINT "Periodic deposit to reach inflation-adjusted goal:"; TAB(51);
360 PRINT USING MONEYFMT$; ADJUSTEDEPOSIT
370 END
```

## PERRATE.BAS

```bas
100 'Periodic Rate ("PERRATE")
110 CLS
120 COLOR 0,15 : PRINT "Periodic Rate" : COLOR 15,0
130 DEFSNG A-Z
140 DEFINT M-N
150 '     Define function to convert periodic rate to annual rate
160 DEF FNA (V) = ( (1 + V) ^ NPY - 1) * 100
170 PCTFMT$ = "###.##_%"
180 '     Let user enter data
190 PRINT : PRINT "Do not enter dollar signs or commas"
200 PRINT
210 INPUT "Savings goal: ", FV
220 INPUT "Deposit each period: ", DEPOSIT
230 INPUT "Term in years: ", NYEARS
240 INPUT "Number of deposits per year: ", NPY
250 INPUT "Annual inflation rate (in percent): ", INFLATION
260 INPUT "Marginal tax rate (in percent): ", TAXRATE
270 '    Find interest rate for nominal goal
280 RLOWER = 0    'Initial values
290 RUPPER = .5
300 WHILE (RUPPER - RLOWER) > .00001
310   PR = (RLOWER + RUPPER) / 2
320   'Calculate payment for trial value
330   TRIALDEP = FV / ( (1 + PR) * ( (1 + PR) ^ (NPY * NYEARS) - 1) / PR)
340   IF TRIALDEP < DEPOSIT  THEN RUPPER = PR  ELSE RLOWER = PR
350 WEND
360 PR = (RUPPER + RLOWER) / 2         'Convert to annual, taxable rate
370 AR = FNA (PR)
380 RTAXABLE = FNA (PR / (1 - TAXRATE / 100) )
390 '     Interest rate for inflated goal
400 RLOWER = 0    'Initial values
410 RUPPER = .5
420 INFLATION = (1 + INFLATION / 100) ^ (1 / NPY) - 1
430 FVADJUSTED = FV * (1 + INFLATION) ^ (NPY * NYEARS)
440 WHILE (RUPPER - RLOWER) > .00001
450   PR = (RLOWER + RUPPER) / 2
460   'Calculate payment for trial value
470   TRIALDEP = FVADJUSTED / ((1 + PR) * ((1 + PR) ^ (NPY * NYEARS) - 1) / PR)
480   IF TRIALDEP < DEPOSIT  THEN RUPPER = PR  ELSE RLOWER = PR
490 WEND
500 RADJTAX = (RUPPER + RLOWER) / 2    'Convert to annual, taxable rate
510 RADJTAX = FNA(PR / (1 - TAXRATE / 100))
520 '     Print results
530 PRINT:PRINT
540 PRINT "Tax-free interest rate:"; TAB(41); USING PCTFMT$; AR
550 PRINT "Taxable interest rate:"; TAB(41); USING PCTFMT$; RTAXABLE
560 PRINT "Taxable interest rate for inflated goal:"; TAB(41);
570 PRINT USING PCTFMT$; RADJTAX
580 END
```

## PERTERM.BAS

```bas
100 'Periodic Term ("PERTERM")
110 CLS
120 COLOR 0,15 : PRINT "Periodic Term" : COLOR 15,0
130 DEFDBL A-Z
140 DEFINT M-N
150 '     Let user enter data
160 PRINT : PRINT "Do not enter dollars signs or commas"
170 PRINT
180 INPUT "Savings goal: ", FV
190 INPUT "Annual interest rate (in percent): ", AR
200 INPUT "Deposit each period: ", DEPOSIT
210 INPUT "Number of deposits per year: ", NPY
220 INPUT "Annual inflation rate (in percent): ", INFLATION
230 INPUT  "Marginal tax rate (in percent): ", TAXRATE
240 '     Determine after-tax, periodic interest rate
250 PR = (1 + AR / 100) ^ (1 / NPY) - 1
260 PR = PR * (1 - TAXRATE / 100)
270 '     Term to reach nominal goal
280 TPERIODS = LOG (FV / DEPOSIT * PR + 1 + PR)
290 IF PR <> 0  THEN NPERIODS = -1 + TPERIODS / LOG (1 + PR)                                    ELSE NPERIODS = FV / DEPOSIT
300 PRINT
310 PRINT "Number of periods to reach nominal goal: "; NPERIODS
320 '     Term to reach inflation adjusted goal
330 INFLATION = (1 + INFLATION / 100) ^ (1 / NPY)    'Periodic inflation factor
340 CURRENTBAL = 0
350 PREVBAL = 0
360 NPERIODS = 0
370 INFV = FV
380 WHILE CURRENTBAL < INFV
390   NPERIODS = NPERIODS + 1
400   INFV = INFV * INFLATION
410   CURRENTBAL = (PREVBAL + DEPOSIT) * (1 + PR)
420   IF NPERIODS > 1  THEN IF (CURRENTBAL / PREVBAL < INFLATION)                        THEN PRINT "Inflated goal never met" : END
430   PREVBAL = CURRENTBAL
440 WEND
450 PRINT "Number of periods to reach inflation-adjusted goal: "; NPERIODS
460 END
```

## POINTS.BAS

```bas
100 'Points ("POINTS")
110 CLS
120 COLOR 0,15 : PRINT "Points" : COLOR 15,0
130 PRINT
140 DEFDBL A-Z
150 DEFINT M-N
160 '     Let user enter data
170 PRINT:PRINT "Do not enter dollar signs or commas"
180 PRINT
190 INPUT "Amount of loan: ", PNCPL
200 INPUT "Annual interest rate (in percent): ", AR
210 INPUT "Number of points: ", POINTS
220 INPUT "Annual interest rate on savings: ", RSAVINGS
230 INPUT "Length of loan (in years): ", NYEARS
240 '     Determine lost income from points
250 NMONTHS = 12 * NYEARS
260 PR = AR / 1200  'Convert to monthly interest rate
270 RSAVINGS = (1 + RSAVINGS / 100) ^ (1/12) - 1
280 IF POINTS > 0  THEN INCOMELOST = PNCPL * POINTS / 100 * RSAVINGS /                             ( 1 - (1 + RSAVINGS) ^ -NMONTHS)
290 '     Determine amortizing payment
300 IF PR <> 0  THEN PMT = PNCPL * PR / (1 - (1 + PR) ^ -NMONTHS)                               ELSE PMT = PNCPL / NMONTHS
310 PMT = PMT + INCOMELOST
320 '     Use bisection method to find effective interest rate
330 RLOWER = 0  'Initial values
340 RUPPER = .5
350 WHILE (RUPPER - RLOWER) > .00001
360   PR = (RLOWER + RUPPER) / 2
370   'Calculate payment for trial value
380   TRIALPMT = PNCPL / ( (1 - (1 + PR) ^ -NMONTHS) / PR)
390   IF TRIALPMT > PMT  THEN RUPPER = PR  ELSE RLOWER = PR
400 WEND
410 '     Print results
420 REFFECTIVE = (RUPPER + RLOWER) / 2 * 1200
430 PRINT
440 PRINT : PRINT "Effective interest rate:"; USING "###.##_%"; REFFECTIVE
450 END
```

## RULEOF78.BAS

```bas
100 'Rule of 78s ("RULEOF78S")
110 CLS
120 COLOR 0,15 :  PRINT "Rule of 78s" :  COLOR 15,0
130 DEFDBL A-Z
140 DEFINT M-N
150 MONEYFMT$ = "$$##,###,###.##"
160 '     Define rounding function
170 DEF FNR (V) = SGN (V) * INT (ABS (V) * 100 + .5) / 100
180 '     Let user enter data
190 PRINT
200 PRINT "Do not enter dollar signs or commas"
210 PRINT
220 INPUT "Amount of loan: ", PNCPL
230 INPUT "Term (in months): ", NMONTHS
240 INPUT "Annual interest rate (in percent): ", AR
250 PRINT "Enter date of first payment"
260 INPUT "  Month (1-12): ", MONTH
270 IF MONTH < 1 OR MONTH > 12  THEN PRINT "No such month" : GOTO 260
280 INPUT "  Year (1900-2100): ", YEAR
290 IF YEAR < 1900 OR YEAR > 2100  THEN PRINT "Year out of range" : GOTO 280
300 '     Find monthly payment
310 PR = AR / 1200
320 IF PR <> 0 THEN PMT = PNCPL * PR / ( 1 - (1 + PR) ^ -NMONTHS)                              ELSE PMT = PNCPL / NMONTHS
330 PMT = FNR (PMT)
340 PRINT : PRINT "Monthly payment:" ;  USING MONEYFMT$ ; PMT
350 TFC = PMT * NMONTHS-PNCPL  'Total finance charges
360 PRINT
370 '     Amortization
380 PRINT "Press Enter to see next month's results"
390 TOTALINTEREST = 0
400 MONTHNUM = YEAR * 12 + MONTH   'Number of months since date 0
410 FOR M = 1 TO NMONTHS
420   'Wait for user to press Enter
430   INPUT "", K$
440   'Finance charge for the month
450   INTERESTDUE = TFC * 2 * (NMONTHS - M + 1) / (NMONTHS * (NMONTHS + 1) )
460   TOTALINTEREST = TOTALINTEREST + INTERESTDUE
470   CURRENTPNCPL = PNCPL + TOTALINTEREST - M * PMT    'New principal
480   'Determine the date
490   YEAR = (MONTHNUM - 1) \ 12
500   MONTH = MONTHNUM - YEAR * 12
510   MONTHNUM = MONTHNUM + 1
520   '     Print the month's results
530   PRINT: PRINT
540   PRINT "Payment number: " ;  M
550   PRINT "Date: " ;  MONTH ;  "/" ;  YEAR
560   PRINT
570   PRINT "Principal: "; TAB(22); USING MONEYFMT$; CURRENTPNCPL
580   PRINT "Interest due: " ; TAB(22); USING MONEYFMT$; INTERESTDUE
590   PRINT "Cumulative interest: " ; TAB(22) ; USING MONEYFMT$; TOTALINTEREST
600 NEXT M
610 END
```

## SAVHISTO.BAS

```bas
100 'Savings History ("SAVHISTORY")
110 CLS
120 COLOR 0,15 : PRINT "Savings History" : COLOR 15,0
130 DEFDBL A-Z
140 DEFINT M-N, Y
150 MONEYFMT$ = "$$##,###,###.##"
160 PRINT
170 '     Let user enter data
180 PRINT "Do not enter dollar signs or commas"
190 PRINT
200 INPUT "Initial deposit: ", DEPOSIT
210 INPUT "Annual growth rate in deposits (in percent): ", DEPOSITGROWTH
220 INPUT "Annual interest rate (in percent): ", AR
230 INPUT "Number of years: ", NYEARS
240 INPUT "Annual inflation rate (in percent): ", INFLATION
250 INPUT  "Marginal tax rate (in percent): ", TAXRATE
260 '     Initialize variables
270 RAFTERTAX = AR * (100 - TAXRATE) / 10000     'After-tax interest rate
280 BALANCE = DEPOSIT                            'Initial balance
290 PRINT: PRINT "Press space bar to see next year's results"
300 PRINT
310 '     Do yearly calculations
320 FOR YEAR = 1 TO NYEARS
330   WHILE INKEY$ = "" : WEND                   'Wait for user to press a key
340   PRINT :PRINT  "Year: "; YEAR
350   ADJUSTEDBAL = BALANCE * (1 + INFLATION / 100) ^ -YEAR
360   'Print results
370   PRINT  "Nominal balance "; TAB(30); USING MONEYFMT$; BALANCE
380   PRINT "Inflation-adjusted balance"; TAB(30); USING MONEYFMT$; ADJUSTEDBAL
390   'Next year's results
400   BALANCE = BALANCE * (1 + RAFTERTAX) + DEPOSIT * (1 + DEPOSITGROWTH / 100)                 ^ YEAR
410 NEXT YEAR
420 END
```

## SIMPINV.BAS

```bas
100 'Simple Investments ("SIMPINV")
110 CLS
120 COLOR 0,15 : PRINT "Simple Investments Evaluator" : COLOR 15,0
130 DEFDBL A-Z
140 DEFINT M-N
150 'Define rounding function
160 DEF FNR (V) = SGN (V) * INT (ABS (V) * 100 + .5) / 100
170 MONEYFMT$ = "$$##,###,###.##"
180 '     Let user select result
190 PRINT
200 PRINT "Select desired result:"
210 PRINT
220 PRINT "1 - Current Value"
230 PRINT "2 - Rate of Return"
240 PRINT "3 - Future Value"
250 PRINT
260 INPUT "Result number: ", RESULT
270 IF RESULT < 1 OR RESULT > 3  THEN PRINT "Select 1-3 only" : GOTO 210
280 PRINT
290 '     Let user enter data
300 PRINT "Do not enter dollar signs or commas"
310 PRINT
320 IF RESULT <> 1  THEN INPUT "Purchase price: ", PV
330 IF RESULT <> 2  THEN INPUT "Annual rate of return (in percent): ", AR
340 IF RESULT <> 3  THEN INPUT "Value at end of term: ", FV
350 INPUT "Number of periods: ", NPERIODS
360 INPUT "Number of periods per year: ", NPY
370 '     Compute periodic interest rate
380 PR = (1 + AR / 100) ^ (1 / NPY) - 1
390 ON RESULT GOTO 410,460,520
400 '     Result 1: Find current value
410 PV = FV * (1 + PR) ^ -NPERIODS
420 PRINT
430 PRINT "Current Value: "; USING MONEYFMT$; PV
440 END
450 '     Result 2: Find rate of return
460 PR = (FV / PV) ^ (1 / NPERIODS) - 1
470 AR = ((1 + PR) ^ NPY - 1) * 100
480 PRINT
490 PRINT "Annual rate of return: "; FNR(AR);"%"
500 END
510 '     Result 3: Find future value of investment
520 FV = PV * (1 + PR) ^ NPERIODS
530 PRINT
540 PRINT "Future value: "; USING MONEYFMT$; FV
550 END
```

## TERMDEPO.BAS

```bas
100 'Term Deposit ("TERMDEPOSIT")
110 CLS
120 COLOR 0,15 : PRINT "Term Deposit" : COLOR 15,0
130 DEFDBL A-Z
140 DEFINT M-N
150 'Define rounding function
160 DEF FNR (V) = SGN (V) * INT (ABS (V) * 100 + .5) / 100
170 MONEYFMT$ = "$$##,###,###.##"
180 '     Let user select result
190 PRINT
200 PRINT "Select desired result:"
210 PRINT
220 PRINT "1 - Initial deposit"
230 PRINT "2 - Required interest rate"
240 PRINT "3 - Final balance"
250 PRINT "4 - Required term"
260 PRINT
270 INPUT "Result number: ", RESULT
280 IF (RESULT < 1) OR (RESULT > 4) THEN PRINT "Select 1-4 only" : GOTO 200
290 PRINT
300 '     Let user enter data
310 PRINT "Do not enter dollar signs or commas"
320 PRINT
330 IF RESULT <> 1 THEN INPUT "Initial deposit: ", PV
340 IF RESULT <> 2 THEN INPUT "Annual interest rate (in percent): ", AR
350 IF RESULT <> 3 THEN INPUT "Savings goal: ", FV
360 IF RESULT <> 4 THEN INPUT "Term (in months): ", NMONTHS
370 INPUT "Annual inflation rate (in percent): ", INFLATION
380 INPUT "Marginal tax rate (in percent): ", TAXRATE
390 '     Initialize values
400 PR = (1 + AR / 100) ^ (1/12) - 1
410 'After tax interest rate
420 PR = PR * (1 - TAXRATE / 100)
430 'Monthly inflation rate
440 INFLATION = (1 + INFLATION / 100) ^ (1/12) - 1
450 'Effective interest rate
460 REFFECTIVE  = (1 + PR) / (1 + INFLATION) - 1
470 PRINT
480 ON RESULT GOTO 500, 540, 670, 710
490 '     Result 1: Initial deposit
500 PV = FV * (1 + REFFECTIVE) ^ -NMONTHS
510 PRINT "Initial deposit: "; USING MONEYFMT$; PV
520 END
530 '     Result 2: Required interest rate
540 INFV = FV * (1 + INFLATION) ^ NMONTHS
550 'Monthly interest rate
560 PR = (INFV / PV) ^ (1 / NMONTHS) - 1
570 'Annual interest rate
580 AR = ( (1 + PR) ^ 12 - 1) * 100
590 'Adjust for taxes
600 RTAXABLE = PR / (1 - TAXRATE / 100)
610 RTAXABLE = ( (1 + RTAXABLE) ^ 12 - 1) * 100
620 'Print results
630 PRINT "Taxable interest rate: "; FNR(RTAXABLE); "%"
640 PRINT "Tax-free interest rate:"; FNR(AR); "%"
650 END
660 '     Result 3: Final balance
670 FV = PV * (1 + REFFECTIVE) ^ NMONTHS
680 PRINT "Final balance:"; USING MONEYFMT$; FV
690 END
700 '     Result 4: Required term
710 IF FV <> PV  THEN NMONTHS = LOG (FV / PV) / LOG (1 + REFFECTIVE)                             ELSE NMONTHS = 0
720 IF NMONTHS < 0  THEN PRINT "No solution" : END
730 IF (NMONTHS - INT (NMONTHS) ) < .001  THEN NMONTHS = INT (NMONTHS)                 ELSE NMONTHS = INT(NMONTHS) + 1
740 PRINT "Required number of months: "; NMONTHS
750 END
```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk 0613

     Volume in drive A has no label
     Directory of A:\

    AMORTIZE BAS      2463   8-08-86   9:09p
    BALREM   BAS      1254   8-08-86   9:19p
    CHARGEHI BAS      2453   8-08-86   9:19p
    CREDITCA BAS      1409   8-08-86   9:19p
    CREDITPU BAS      2160   8-08-86   9:19p
    DAILYODO BAS      1698   8-08-86   9:19p
    DATEDIST BAS      1954   8-08-86   9:19p
    DATESINM BAS      2323   8-08-86   9:19p
    DAYOFWEE BAS      1653   8-08-86   9:19p
    DEPGROWS BAS      2945   8-08-86   9:19p
    FILES613 TXT      3457  10-16-86   2:32a
    GO       BAT       565   9-16-86   9:49p
    INTRATE  BAS       855   8-08-86   9:19p
    INVHISTO BAS      1778   8-08-86   9:19p
    INVINCOM BAS      1038   8-08-86   9:19p
    INVPRICE BAS      1068   8-08-86   9:19p
    INVVALUE BAS       895   8-08-86   9:09p
    INVYIELD BAS      1107   8-08-86   9:19p
    IRA      BAS      1872   8-08-86   9:19p
    LOANCOST BAS      1827   8-08-86   9:19p
    LOANQUAL BAS       764   8-08-86   9:19p
    LOANTERM BAS      1408   8-08-86   9:19p
    MNTHINCM BAS      3191   8-08-86   9:19p
    MONTHLYO BAS       653   8-08-86   9:19p
    NOTES613 TXT      1647  10-15-86  12:51p
    NUMDAYS  BAS      1766   8-08-86   9:23p
    PAYBACK  BAS       986   8-08-86   9:23p
    PERBALAN BAS      2064   8-08-86   9:23p
    PERDEPOS BAS      1172   8-08-86   9:23p
    PERRATE  BAS      2022   8-08-86   9:23p
    PERTERM  BAS      1539   8-08-86   9:23p
    POINTS   BAS      1485   8-08-86   9:24p
    README            6289   8-03-86   8:34p
    RULEOF78 BAS      2092   8-08-86   9:24p
    SAVHISTO BAS      1411   8-08-86   9:32p
    SIMPINV  BAS      1570   8-08-86   9:24p
    TERMDEPO BAS      2537   8-08-86   9:24p
           37 file(s)      67370 bytes
                           82944 bytes free
