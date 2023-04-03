---
layout: page
title: "PC-SIG Library Disk #960"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0960/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0960"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "FINANCIAL COLLECTION"

    THE MENU is a memory-resident program organizer that lets you access
    your programs with a single keystroke from a system of menus.
    
    You can easily update and revise the menus with the editor provided.
    You can tailer the main menu, submenus, and keystrokes can be tailored
    to fit your needs.  The editor can also edit batch files used for
    calling software programs while viewing the menu that uses them.
    
    Included is an audible and visual appointment reminder which can be set
    for daily, weekly, monthly, and yearly intervals.
    File Descriptions:
    
    THE-MENU EXE  Program containing all files in compressed format.
    
    MONTHLY LOAN AMORTIZATION calculates and prints a monthly loan
    schedule.
    
    It prompts you for essential information such as loan amount,
    percentage
    rate and length of loan.  Then the program prints a report of the
    monthly loan payments showing the amount of the payment, the amount left
    due on the loan, and how much is going toward the principle of the loan.
    
    CONVERT is a metric-English/English-metric conversion calculator.
    
    Thirty-six conversions relating to length, weight, area, volume, and
    pressure are available.  Select the type of conversion from the menu in
    the program or from the command-line.
    
    A user-oriented loan and mortgage calculator with a variety of options.
    Compute interest paid for any given year and output a complete or
    partial amortization table on a screen or printer.  Calculate the
    balance payment at any given date.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## MONAMORT.BAS

```bas
1 DATA MONAMORT   -  COPYRIGHT 1986 - ENTREPRENEURS SOFTWARE
10 REM	TITLE : MONTHLY LOAN AMORTIZATION
11 REM	AUTHOR: RICHARD SULLINS   NOVEMBER 6, 1986
12 REM	ALL RIGHTS RESERVED AND PROTECTED UNDER U.S. COPYRIGHT LAWS
13 REM             ENTEPRENEURS SOFTWARE DALLAS, TEXAS
14 REM
15 REM  PURPOSE: CALCULATE A MONTHLY LOAN AMORTIZATION AND PRINT
16 REM           A PAYMENT SCHEDULE
17 REM
18 REM
90 REM ----- SCREEN DEFINITION FIELDS
100 DIM MONTH$(12)
110 DATA 7,Y,1,22,"Monthly Loan Amortization",0,A
120 DATA 5,9,"Enter loan amount:",10,N
130 DATA 7,9,Enter the yearly interest percent (99.99),5,N
140 DATA 9,9,Enter months of loan,4,N
150 DATA 11,9,Enter date of first payment (MMDDYY),6,N
160 DATA 13,9,Description,25,A
165 DATA 24,15,"Entrepreneurs Software  - Copyright 1986",0,A
170 DATA 1,Y,20,1,"Ready to print loan schedule (Y/N/P) ?",1,A
175 DATA 1,Y,21,1,"Enter revised payment amount  ?",10,N
180 OUTS$="\            \ ##########.## ##########.## ##########.## #########.##"
190 OUT2$="  Totals for  ####           ##########.## ##########.## #########.##"
195 OUT3$="\                           \ ##########.##"
200 REM -----
210 REM ----- BEGINNING OF PROGRAM LOGIC
220 REM -----
230 GOSUB 700
240 DI$="Y":RESTORE 110
250 GOSUB 1000
260 REM PRINT "     "
270 DI$ = "N"
280 RESTORE 110
290 GOSUB 1000
300 LOANAMT = VAL(ZCIN$(2))
310 INTEREST = VAL(ZCIN$(3))/100
320 MONTHS  = VAL(ZCIN$(4))
325 IF MONTHS < 1 THEN MONTHS = 1
330 DATIN$=ZCIN$(5)
340 YEAR=VAL(RIGHT$(DATIN$,2))+1900
350 DESC$=ZCIN$(6)
360 MFAC = MONTHS * -1
370 REM   CALCULATE PAYMENT AMOUNT
380 INTRATE = INTEREST/12
390 IFACTOR = 1+ (INTEREST/12)
395 IF IFACTOR = 1 THEN PAYMENT = LOANAMT/MONTHS:GOTO 420
400 PAYMENT = LOANAMT*INTRATE/(1-(IFACTOR)^MFAC)
410 PAYMENT = INT((PAYMENT+.005)*100)/100
420 LOCATE 18,5 :PRINT "Payment = $ ";PAYMENT
430 RESTORE 170:GOSUB 1000
440 IF ZCIN$(1) = "Y"  OR ZCIN$(1) = "y" THEN 470
445 IF ZCIN$(1) = "N"  OR ZCIN$(1) = "n" THEN 240
450 IF ZCIN$(1) = "P" OR ZCIN$(1) = "p"  THEN RESTORE 175:GOSUB 1000
455 PAYMENT = VAL(ZCIN$(1))
460 LOCATE 23,1 :PRINT "Loan now being printed"
470 MO = VAL(LEFT$(DATIN$,2)):BALANCE=LOANAMT:MO=MO-1
480 GOSUB 760:REM  PRINT HEADINGS
490 FOR I= 1 TO MONTHS
500 MO=MO+1
510 INTAMT=INT(INTRATE*BALANCE*100)/100
520 PRINCIPAL=INT((PAYMENT-INTAMT)*100)/100
530 IF I=MONTHS THEN PAYMENT=INTAMT+BALANCE:PRINCIPAL=BALANCE:BALANCE=0:GOTO 550
540 BALANCE = BALANCE-PRINCIPAL
550 IF LINENO >50 THEN GOSUB 760
560 LPRINT USING OUTS$;MONTH$(MO);BALANCE,INTAMT,PRINCIPAL,PAYMENT
570 LINENO=LINENO+1
580 YINTTOT = YINTTOT + INTAMT
590 YPRINCIPAL = YPRINCIPAL + PRINCIPAL
600 YPAYMENT = YPAYMENT + PAYMENT
610 IF MO=12 OR I = MONTHS THEN GOSUB 930
620 NEXT I
630 PRINT:PRINT "Normal Completion"
640 END
650 REM -----
660 REM -----  END OF PROGRAM LOGIC
670 REM
680 STOP
690 REM ----- RESET AND PRINT YEAREND BALANCES
700 REM   ----- LOAD MONTH TABLE
710 DATA January,February,March,April,May,June,July,August,September
720 DATA October,November,December
730 RESTORE 710:FOR I=1 TO 12:READ MONTH$(I):NEXT I
740 RETURN
750 REM  ------- PRINT HEADINGS
760 LPRINT CHR$(12)
765 PAGNO=PAGNO+1:PAG$=STR$(PAGNO)
770 P$="                       Loan Amortization                     PAGE "+PAG$
775 GOSUB 890
780 P$=" ":GOSUB 890:GOSUB 890
790 P$="               Description  : ":P2$=DESC$:GOSUB 910
795 IF PAGNO > 1 THEN P$=" ":GOSUB 890:LINENO =4:GOTO  880
800 P$="               Loan Date    : ":P2$=DATIN$:GOSUB 910
810 P$="               Loan Amount  :":P2=LOANAMT:GOSUB 900
820 P$="               Interest Rate:":P2=INTEREST*100:GOSUB 900
830 P$="               Months       :":P2=MONTHS:GOSUB 900
840 P$=" ":GOSUB 890:GOSUB 890
850 P$=" Month               Balance      Interest    Principal       Payment":GOSUB 890
860 P$="------------     ------------- ------------- ------------  -------------":GOSUB 890
870 LINENO=11
880 RETURN
890 LPRINT P$:RETURN:REM SUBROUTINE TO PRINT ---- CHANGE PRINT TO LPRINT FOR HC
900 LPRINT USING OUT3$;P$,P2:RETURN
910 LPRINT P$;P2$:RETURN
920 REM ---- PRINT TOTALS
930 LPRINT
940 LPRINT USING OUT2$;YEAR,YINTTOT,YPRINCIPAL,YPAYMENT
950 LPRINT::LINENO=LINENO+3
960 YINTTOT=0:YPRINCIPAL=0:YPAYMENT=0:YEAR=YEAR+1
970 MO=0
980 RETURN
990 REM FKEY - - SUBROUTINE TO DISPLAY AND INPUT FIELDS
1000 READ ZFN,CLRSW$
1010 IF CLRSW$="Y" AND (DI$ = "N") THEN 1030
1020 CLS
1030 FOR ZI = 1 TO ZFN
1040 READ ZR,ZC,ZS$,ZL,ZT$
1050 LOCATE ZR,ZC
1060 PRINT ZS$;"  ";
1070 IF DI$ = "N" OR ZL = 0 THEN 1110
1075 IF ZCIN$(ZI)<>"" THEN PRINT ZCIN$(ZI):GOTO 1110
1080 FOR ZII = 1 TO ZL
1090 PRINT "_";
1100 NEXT ZII
1110 IF DI$ = "Y" OR (ZL = 0) THEN  1140
1120 LOCATE ZR,ZC+2+LEN(ZS$)
1130 GOSUB 1170
1140 NEXT ZI
1150 RETURN
1160 REM  ----  KEYBOARD INPUT
1170 INPUT ;"", ZFIELDIN$
1175 IF LEN(ZFIELDIN$)>0 THEN ZCIN$(ZI) = ZFIELDIN$
1180 IF LEN(ZIN$) > ZL THEN 1170
1320 RETURN
```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk 0960

     Volume in drive A has no label
     Directory of A:\

    CONVERT  EXE     39942  10-30-87   8:12p
    CONVERT  TXT      1536   1-20-88   5:48p
    FILES960 TXT      2614   5-12-88  12:45p
    GO       BAT        38  10-19-87   3:56p
    GO       TXT      1541   1-04-80  12:19a
    LOANCALC COM     27877   7-02-87   4:24a
    LOANCALC DOC      1214   7-02-87   4:13a
    MONAMORT BAS      4961  11-06-87   2:34p
    MONAMORT DOC      1377  11-06-87   2:18p
    MONAMORT EXE     45068  11-06-87   2:41p
    THE_MENU EXE    125213   3-21-88   5:00p
           11 file(s)     251381 bytes
                           63488 bytes free
