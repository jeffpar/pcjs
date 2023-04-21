---
layout: page
title: "PC-SIG Diskette Library (Disk #960)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0960/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0960"
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

## CONVERT.TXT

{% raw %}
```
The program CONVERT is an all-purpose Metric - English 
conversion utility.  This file contains some general 
information on its use.

The program is written in Borland Turbo-C.  It is slightly
smaller than 40-K bytes in size and should require only 
128-K bytes of RAM.  

Normally, the program writes its display information directly
to the video memory of the PC.  This of course provides the
fastest display performance possible at the expense of broad
compatability with those PC's which are not fully compatible
with the IBM PC.  For this reason, the program is capable of 
using BIOS calls to write to the screen instead.

The program does this by checking the DOS environment for a
variable named UPDATEMODE.  If it finds this variable set to
BIOS, it uses the bios mode.  If it is set to DIRECT, or not 
set at all, the direct mode is used.  If UPDATEMODE is set 
equal to anything other than bios or direct, an error message
is shown and program execution terminates.

To make the program use the BIOS mode, the user need only 
type "set updatemode=bios" at the DOS prompt, or add this
line to the AUTOEXEC.BAT file.

There are thirty six conversions available.  To select a
specific conversion automatically, enter its number on the
command line when starting the program.  For example, enter
"CONVERT 27" to put you directly into the cubic centimetres
to cubic inches conversion.
```
{% endraw %}

## FILES960.TXT

{% raw %}
```
Disk No  960
Program Title: FINANCIAL COLLECTION
PC-SIG version 1.2

    THE MENU is a program organizer that lets you access your programs with
a single keystroke from a system of menus. The menus can be easily updated
and revised with the program editor provided on the program. With the
editor, the main menu, submenus, and keystrokes can be tailored to fit your
needs. The editor can also edit batch files used for calling software
programs while viewing the menu that uses them. THE MENU is memory-resident
and can be unloaded before executing a program. Otherwise you are
automatically returned to the menu after exiting a program. Also included
is an audible and visual appointment reminder, which can be set for daily,
weekly, monthly, and yearly reminders. A step-by-step introduction and
on-line help is included.

    MONTHLY LOAN AMORTIZATION calculates and prints a monthly loan
schedule. After prompting you for essential information, such as loan
amount, percentage rate, and length of loan, the program prints a report of
monthly loan payments. This is a very simple program which lacks any
sophisticated financial features or applications.

    CONVERT is a metric-English conversion utility. Conversions can be from
metric to English or vice versa. 36 conversions are available relating to
length, weight, area, volume, and pressure. The type of conversion can be
selected from the menu in the program or from the command-line.

    LOANCALC is a user-oriented loan and mortgage calculator. The program
has a variety of options: it can compute interest paid for any given year,
and output a complete or partial amortization table on a screen or printer.
It also computes the balance payment at any given date.

Usage: Financial

System Requirements: 128K memory and one disk drive.

How to Start: Type: THE_MENU (press enter) for the menu, or MONAMORT
(press enter) to start MONTHLY LOAN AMORTIZATION, CONVERT (press enter) to
start METRIC CONVERSION, LOANCALC (press enter) to start LOAN CALCULATION.

Suggested Registration: $9.95 for THE_MENU, $3.50 for MONAMORT, and
$1.00 to $10.00 for LOANCALC.

File Descriptions:

THE_MENU EXE  Program containing all files in compressed format.
MONAMORT BAS  Basic souce code for MONAMORT.
MONAMORT DOC  Documentation for MONAMORT.
MONAMORT EXE  Main executable program.
CONVERT  EXE  Main program.
CONVERT  TXT  Documentation.
LOANCALC DOC  Information file.
LOANCALC COM  The main program.

PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987,88 PC-SIG, Inc.

```
{% endraw %}

## LOANCALC.DOC

{% raw %}
```
LOANCALC   --- A loan and mortgage calculator - user supported software

     If you find this program useful, please send a contribution of
     $1.00 to $10.00  depending on how you rate this program
     on a TEN scale. $10.00 of course being very good to $1.00 being bad.
        To:
            James A. Ray
            508 N. Martha St.
            Angola, IN.   46703

   ( As always you are encouraged to copy and share provided both files,
     LOANCALC.DOC and LOANCALC.COM are passed on.   THANK YOU )

INSTRUCTIONS:
  Type LOANCALC <RETURN> to invoke program. You will then be prompted to
  enter specific data about the loan, simply type in amounts and hit <RETURN>,
  or just hit return if the amount already in that field is OK.
  After displaying information about the loan you will have a series of
  options, listed at the bottom of the screen, such as TAX-REPORT,
  BALLOON PAYMENT, AMORTIZATION, etc. which you may choose. To choose one
  of the options hit the key that is the same as the first letter in that
  option. From this point on the program will inform you of the next
  step(s) to be taken.
{No warrantee, express or implied, is created by such contribution}
```
{% endraw %}

## MONAMORT.BAS

{% raw %}
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
{% endraw %}

## MONAMORT.DOC

{% raw %}
```
MONAMORT: Monthly Loan Amortization

HARDWARE REQUIREMENTS:	IBM Compatable Personal Computer with a printer

PURPOSE: Calculate a monthly loan amortization and print a payment schedule

INSTRUCTIONS:  Enter  MONAMORT <enter>	to execute

	       (the program can be run through the basic interpeter if desired)

		Enter fields as prompted below:

      Prompt - Description			   Valid Entry
    ------------------------------------------	 ------------------------
    Enter loan amount:				  amount borrowed
    Enter the yearly interest percent (99.99)	  annual interest rate
    Enter months of loan			  number of month
    Enter date of first payment (MMDDYY)	  numeric date
    Description 				  description to print at
						  the top of the page
    Ready to print loan schedule (Y/N) ?	  Y - to print the schedule
						  N - to re-enter fields
						  P - to revise the payment
						  amount

    Enter revised payment amount  ?		  Payment amount to override
						  the calculated payment amount

TO ORDER COPIES OR FOR USAGE RIGHTS:
		 send $3.50 to Richard Sullins
			       Entepreneurs Software
			       1610 Mosswood Court
			       Garland, Texas, 75042

RIGHTS: MOMAMORT - Copyright Entepreneurs Software - 1986
	AUTHOR: RICHARD SULLINS      November 6, 1986
	ALL RIGHTS RESERVED AND PROTECTED UNDER U.S. COPYRIGHT LAWS


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0960

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
