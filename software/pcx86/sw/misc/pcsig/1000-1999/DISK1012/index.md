---
layout: page
title: "PC-SIG Diskette Library (Disk #1012)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1012/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1012"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "DOLLAR-PRO"

    DOLLAR-PRO is a set of quick, easy-to-use tools for performing necessary
    financial calculations.
    
    DOLLAR-PRO includes three compound interest programs, as well as a basic
    financial calculator, an annuity program that calculates monthly
    payments on a loan, and a gross profit margin program that lets you
    solve one- and two-tier GPM problems.  A learning curve program is also
    included.
    
    Each of the DOLLAR-PRO programs has its own help file that you can
    access upon entering the program, and we suggest you read through
    these help files before working with the programs.
    File Descriptions:
    
    BRUN40   EXE  Run time file. Must be present for programs to run.
    DPC      EXE  Opening screens for color (CGA) systems.
    DPM      EXE  Opening screens for monochrome systems.
    MONYM    EXE  The financial program menu.
    CI1      EXE  Simple compound interest program.
    CI2      EXE  Simple compound interest program.
    CI3      EXE  Simple compound interest program.
    BFC      EXE  Basic financial calculations program.
    ANNUITY  EXE  Program for calculating annuities and amortization tables.
    GL       EXE  Calculates learning curve parameters.
    PLIC     EXE  License statement.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## ANNUITY.BAS

{% raw %}
```bas
100 'ANNUITY - VERSION 2.2 -- 07/08/88
110 'Copyright 1987,1988 PROWESS, Inc.
120 KEY OFF:CLS:CLEAR:SCREEN 0,0,0:OPTION BASE 1:DIM M$(12)
130 COLOR 3,0:LOCATE 1,23:PRINT CHR$(201)+STRING$(33,205)+CHR$(187)
140 FOR L=2 TO 3:LOCATE L,23:PRINT CHR$(186):LOCATE L,57:PRINT CHR$(186):NEXT L
150 COLOR 6,0:LOCATE 2,33:PRINT "ORDINARY ANNUITY"
160 LOCATE 3,25:PRINT "Copyright 1987,1988 Prowess,Inc."
170 COLOR 3,0:LOCATE 4,23:PRINT CHR$(200)+STRING$(33,205)+CHR$(188)
180 XX$=STRING$(76,32)
190 COLOR 1,0:LOCATE 4,2:PRINT CHR$(201)+STRING$(78,205)+CHR$(187)
200 LOCATE 3,75:COLOR 7,0:PRINT "V2.2":COLOR 1,0
210 FOR L=6 TO 19
220 LOCATE L,1:PRINT CHR$(186):LOCATE L,80:PRINT CHR$(186)
230 NEXT L
240 LOCATE 19,2:PRINT CHR$(200)+STRING$(78,205)+CHR$(188):COLOR 6,0
250 LOCATE 12,16:PRINT "Do you want to review the instructions?  (Y/N/Q)"
260 LOCATE 12,68:K$=INKEY$:IF K$="" THEN 260
270 IF K$="Y" OR K$="y" THEN LOCATE 3,75:PRINT "    ":GOTO 2500
280 IF K$="N" OR K$="n" THEN LOCATE 12,2:PRINT XX$:LOCATE 3,75:PRINT "    ":GOTO 530
290 IF K$="Q" OR K$="q" THEN LOCATE 3,75:PRINT "    ":GOTO 360
300 GOTO 260
310 '---------------------subroutine for clearing lines 21,22,23 ---------------
320 FOR H=6 TO 19:LOCATE H,3:PRINT STRING$(76,32):NEXT H:RETURN
330 '---------------------subroutine for clearing pgm field---------------------
340 FOR H=21 TO 23:LOCATE H,1:PRINT STRING$(79,32):NEXT H:RETURN
350 '-------------------------------------quit---------------------------------
360 CLS
370 LOCATE 10,25:PRINT "RESTART THIS PROGRAM --------------1"
380 LOCATE 12,25:PRINT "RETURN TO THE OPENNING MENU -------2"
390 LOCATE 14,25:PRINT "EXIT ------------------------------3"
400 LOCATE 17,30:PRINT "Make selection"
410 LOCATE 17,50:Q$=INKEY$:IF Q$="" THEN 410
420 QT=VAL(Q$)
430 IF QT<1 OR QT>3 THEN BEEP:GOTO 410
440 IF QT=1 THEN 100
450 IF QT=2 THEN CHAIN "MONYM"
460 IF QT=3 THEN 490
470 BEEP:GOTO 410
480 LOCATE L,1:PRINT CHR$(186):LOCATE L,80:PRINT CHR$(186)
490 CLS:LOCATE 12,28:PRINT "ARE YOU SURE ?  (Y/N)"
500 LOCATE 12,50:W$=INKEY$:IF W$="" THEN 500
510 IF W$="Y" OR W$="y" THEN LOCATE 15,28:PRINT "COPY AUDIT: ";CHR$(210);CHR$(4);CHR$(177);CHR$(215);CHR$(231);CHR$(252):FOR I=1 TO 2000:NEXT I:CLS:COLOR 7,0:CHAIN "PLIC
520 '----------------------------annuity routine------------------------------
530 GOSUB 320:GOSUB 340
540 LOCATE 8,20:INPUT "Enter the total SELLING PRICE :",SP$
550 IF SP$="Q" OR SP$="q" THEN 360
560 SP=VAL(SP$):IF SP<=0 THEN BEEP:LOCATE 6,52:PRINT STRING$(12,32):GOTO 540
570 LOCATE 10,20:INPUT "Enter any DOWN PAYMENT :",DWN$
580 DWN=VAL(DWN$):IF DWN<0 THEN BEEP:LOCATE 10,43:PRINT STRING$(10,32):GOTO 570
590 PV=SP-DWN
600 LOCATE 12,20:INPUT "Enter ANNUAL PERCENT INTEREST (in %) :",API$
610 IF API$="Q" OR API$="q" THEN 360
620 API=VAL(API$):IF API<=0 THEN BEEP:LOCATE 12,58:PRINT STRING$(20,32):GOTO 600
630 I=(API/12)/100
640 LOCATE 14,20:INPUT "Enter total number of PAYMENTS :",N$
650 IF N$="Q" OR N$="q" THEN 360
660 N=VAL(N$):IF N=<0 THEN BEEP:LOCATE 14,53:PRINT STRING$ (20,32):GOTO 640
670 PMT=PV*(I/(1-((1+I)^(-N))))
680 LOCATE 18,20:COLOR 3,0:PRINT "The MONTHLY PAYMENT is  $";PMT:COLOR 6,0
690 LOCATE 21,3:PRINT "Press 'Q' to quit - any other key to continue"
700 LOCATE 21,50:K$=INKEY$:IF K$="" THEN 700
710 IF K$="Q" OR K$="q" THEN 360
720 GOSUB 320:GOSUB 340:FOR E=2 TO 4:LOCATE E,1:PRINT STRING$(21,32):LOCATE E,59:PRINT STRING$(21,32):NEXT E
730 M$(1)="JAN":M$(2)="FEB":M$(3)="MAR":M$(4)="APR":M$(5)="MAY":M$(6)="JUN":M$(7)="JUL":M$(8)="AUG":M$(9)="SEP":M$(10)="OCT":M$(11)="NOV":M$(12)="DEC"
740 LOCATE 8,17:PRINT "Balance due & accumulated interest ---------1"
750 LOCATE 10,17:PRINT "Alter annuity parameters -------------------2"
760 LOCATE 12,17:PRINT "Display/print annuity table ----------------3"
770 LOCATE 14,17:PRINT "Exit ---------------------------------------4"
780 LOCATE 21,3:PRINT "Make selection"
790 LOCATE 21,18:K$=INKEY$:IF K$="" THEN 790
800 K=VAL(K$)
810 IF K$="Q" OR K$="q" THEN 360
820 ON K GOTO 840,530,1120,360
830 '----------------------situation after K payments------------------------
840 GOSUB 320:GOSUB 340
850 LOCATE 10,20:PRINT "This portion of the program computes:"
860 LOCATE 12,22:PRINT "* Principal paid after K payments"
870 LOCATE 14,22:PRINT "* Interest accumulated after K payments"
880 LOCATE 16,22:PRINT "* Principal remaining after K payments"
890 LOCATE 21,3:PRINT "Enter payment number (K) for which you want the above information"
900 LOCATE 21,70:INPUT "",KK$
910 IF KK$="Q" OR KK$="q" THEN 360
920 KK=VAL(KK$):IF KK=<0 THEN BEEP:LOCATE 21,70:PRINT STRING$ (8,32):GOTO 900
930 BAL=PMT*((1-((1+I)^(KK-N)))/I)
940 PPAID=PV-BAL
950 INPAID=(KK*PMT)-(PV-BAL)
960 GOSUB 320:GOSUB 340
970 LOCATE 8,25:PRINT "After the  ";KK;"th  payment:"
980 LOCATE 10,25:PRINT "The remaining balance is $"
990 LOCATE 10,51:PRINT USING "#######.##";BAL
1000 LOCATE 12,25:PRINT "Principal paid to date is $"
1010 LOCATE 13,35:PRINT "+ Down payment $"
1020 LOCATE 12,52:PRINT USING "#######.##";PPAID
1030 LOCATE 13,52:PRINT USING "#######.##";DWN
1040 LOCATE 14,51:PRINT "------------"
1050 LOCATE 15,52:PRINT USING "#######.##";PPAID+DWN
1060 LOCATE 17,25:PRINT "The interest paid to date is $";INPAID
1070 LOCATE 21,3:PRINT "Press 'Q' to quit - any other key to continue"
1080 LOCATE 21,49:K$=INKEY$:IF K$="" THEN 1080
1090 IF K$="Q" OR K$="q" THEN 360
1100 GOTO 720
1110 '--------------------------setup annuity table--------------------------
1120 GOSUB 320:GOSUB 340
1130 LOCATE 6,3:PRINT "..........................When did the annuity begin?......................."
1140 LOCATE 8,13:INPUT "Enter beginning year - 1st payment year (yyyy): ",SYR$
1150 SYR=VAL(SYR$):IF SYR=<0 THEN BEEP:LOCATE 8,60:PRINT STRING$ (20,32):GOTO 1120
1160 L=LEN(SYR$):IF L<>4 THEN BEEP:LOCATE 8,60:PRINT STRING$ (20,32):GOTO 1120
1170 IF YR$="Q" OR YR$="q" THEN 360
1180 LOCATE 10,13:INPUT "Enter 1st three letters of the 1st payment month: ",SM$
1190 IF SM$="Q" OR SM$="q" THEN 360
1200 IF LEN(SM$)<>3 THEN BEEP:LOCATE 10,63:PRINT STRING$ (10,32):GOTO 1180
1210 IF SM$="JAN" OR SM$="jan" THEN SMN=1:GOTO 1340
1220 IF SM$="FEB" OR SM$="feb" THEN SMN=2:GOTO 1340
1230 IF SM$="MAR" OR SM$="mar" THEN SMN=3:GOTO 1340
1240 IF SM$="APR" OR SM$="apr" THEN SMN=4:GOTO 1340
1250 IF SM$="MAY" OR SM$="may" THEN SMN=5:GOTO 1340
1260 IF SM$="JUN" OR SM$="jun" THEN SMN=6:GOTO 1340
1270 IF SM$="JUL" OR SM$="jul" THEN SMN=7:GOTO 1340
1280 IF SM$="AUG" OR SM$="aug" THEN SMN=8:GOTO 1340
1290 IF SM$="SEP" OR SM$="sep" THEN SMN=9:GOTO 1340
1300 IF SM$="OCT" OR SM$="oct" THEN SMN=10:GOTO 1340
1310 IF SM$="NOV" OR SM$="nov" THEN SMN=11:GOTO 1340
1320 IF SM$="DEC" OR SM$="dec" THEN SMN=12:GOTO 1340
1330 BEEP:LOCATE 10,63:PRINT STRING$(5,32):GOTO 1180
1340 LOCATE 12,3:PRINT "..................How do you want the results displayed?...................."
1350 LOCATE 15,13:PRINT "(Year format=yyyy OR 'S' for starting year.)"
1360 LOCATE 14,13:INPUT "Enter 1st year that you want displayed/printed: ",FDY$
1370 FDY=VAL(FDY$):IF FDY$="Q" OR FDY$="q" THEN 360
1380 IF FDY$="S" OR FDY$="s" THEN FDY=SYR:LOCATE 14,60:PRINT "         ":LOCATE 14,60:PRINT FDY:GOTO 1400
1390 L=LEN(FDY$):IF L<>4 THEN BEEP:LOCATE 14,61:PRINT STRING$(10,32):GOTO 1340
1400 LOCATE 18,13:PRINT "(Year format=yyyy OR enter 'F' for final year.)"
1410 LOCATE 17,13:INPUT "Enter last year that you want displayed/printed: ",LDY$
1420 IF (LDY$="F" OR LDY$="f") AND ((SMN+(N MOD 12))>12) THEN LDY=SYR+INT(N/12)+1:LOCATE 17,62:PRINT LDY:GOTO 1460
1430 IF (LDY$="F" OR LDY$="f") AND ((SMN+(N MOD 12))<=12) THEN LDY=SYR+INT(N/12):LOCATE 17,62:PRINT LDY:GOTO 1460
1440 LDY=VAL(LDY$):IF LDY$="Q" OR LDY$="q" THEN 360
1450 L=LEN(LDY$):IF L<>4 OR LDY<FDY THEN BEEP:LOCATE 16,62:PRINT STRING$(10,32):GOTO 1410
1460 LOCATE 21,3:COLOR 3,0:PRINT "Where do you want the annuity table: Screen/Printer (S/P) ":COLOR 6,0
1470 LOCATE 21,62:VV$=INKEY$:IF VV$="" THEN 1470
1480 IF VV$="Q" OR VV$="q" THEN 360
1490 IF VV$="S" OR VV$="s" THEN 1530
1500 IF VV$="P" OR VV$="p" THEN 2050
1510 BEEP:LOCATE 17,70:PRINT STRING$(8,32):GOTO 1460
1520 '------------------calculate annuity table - screen ---------------------
1530 GOSUB 320:GOSUB 340:K=8:T=0:YEAR=SYR:FLG1=0:FLG2=0
1540 '------------------------------loop logic-------------------------------
1550 FOR P=1 TO N+12
1560 IF T=>1 THEN 1590
1570 IF P=SMN THEN T=1         'start T count when P = beginning month
1580 IF T<1 THEN 1660          'increment P until start month is correct
1590 IF T=1 AND P MOD 12<>0 THEN OLDBAL=SP-DWN:MTH=P MOD 12:GOSUB 1730:GOSUB 1800:GOSUB 1850:GOTO 1640
1600 IF T=1 AND P MOD 12 =0 THEN OLDBAL=SP-DWN:MTH=12:FLG2=1:GOSUB 1730:GOSUB 1800:GOSUB 1850:GOTO 1630
1610 IF (P MOD 12)=0 THEN MTH=12:FLG2=1 ELSE MTH=P MOD 12
1620 GOSUB 1790:GOSUB 1850
1630 IF FLG2=1 THEN GOSUB 1960:YEAR=YEAR+1:GOSUB 1680:GOSUB 1730:FLG2=0
1640 T=T+1
1650 IF T>N THEN GOSUB 1960:GOTO 720
1660 NEXT P
1670 '---------------------------------tests----------------------------------
1680 IF YEAR>LDY THEN GOTO 720
1690 RETURN
1700 IF (P MOD 12)=0 THEN MTH=12                     'detect 12th months (dec.)
1710 RETURN
1720 '--------------------------------header----------------------------------
1730 IF YEAR<FDY THEN LOCATE 4,4:PRINT "For year =":FOR E=2 TO 4:LOCATE E,59:PRINT STRING$(21,32):NEXT E:GOTO 1750
1740 LOCATE 4,4:PRINT "For year =";YEAR:FOR E=2 TO 4:LOCATE E,59:PRINT STRING$(21,32):NEXT E
1750 LOCATE 6,4:PRINT " #  Month    Payment   Principal portion    Interest portion    Remain  Bal"
1760 LOCATE 7,4:PRINT "--- -----    -------   -----------------    ----------------    -----------"
1770 RETURN
1780 '-----------------------------calculate---------------------------------
1790 OLDBAL=BAL
1800 BAL=PMT*((1-((1+I)^(T-N)))/I)
1810 INPAID=OLDBAL*I:TI=TI+INPAID
1820 PRIN=PMT-INPAID:TP=TP+PRIN
1830 RETURN
1840 '--------------------------write to screen------------------------------
1850 IF YEAR<FDY THEN COLOR 23,0:LOCATE 12,35:PRINT "WORKING":COLOR 6,0:RETURN
1860 IF K=8 THEN LOCATE 12,35:PRINT "            "
1870 LOCATE K,4:PRINT T
1880 LOCATE K,9:PRINT M$(MTH)
1890 LOCATE K,14:PRINT USING "#######.##";PMT
1900 LOCATE K,28:PRINT USING "#######.##";PRIN
1910 LOCATE K,49:PRINT USING "#######.##";INPAID
1920 LOCATE K,67:PRINT USING "#######.##";BAL
1930 K=K+1
1940 RETURN
1950 '-----------------------current screen complete--------------------------
1960 IF YEAR<FDY THEN TP=0:TI=0:RETURN
1970 LOCATE 21,3:PRINT "Press 'Q' to quit - any other key to continue"
1980 LOCATE 2,61:PRINT YEAR;" Summary:":LOCATE 3,59:PRINT "YTD prin. =":LOCATE 4,59:PRINT "YTD int.  =":LOCATE 3,70:PRINT USING "#######.##";TP:LOCATE 4,70:PRINT USING "#######.##";TI:TI=0:TP=0:K=8
1990 LOCATE 21,49:K$=INKEY$:IF K$="" THEN 1990
2000 IF K$="Q" OR K$="q" THEN 360
2010 GOSUB 320:GOSUB 340
2020 RETURN
2030 '------------------------------------------------------------------------
2040 '------------------calculate annuity table - printer --------------------
2050 GOSUB 320:GOSUB 340:FLG1=1:FLG2=0:T=0:YEAR=SYR:LOCATE 12,25:COLOR 23,0:PRINT "CALCULATING ANNUITY PARAMETERS":COLOR 6,0
2060 '-----------------------------print loop---------------------------------
2070 FOR P=1 TO N+12
2080 IF P MOD 12=1 THEN GOSUB 2240    'write header if mth=jan
2090 IF T>=1 THEN 2120
2100 IF P=SMN THEN T=1         'start T when P = beginning month
2110 IF T<1 THEN 2220          'increment P until start month is correct
2120 IF (P MOD 12)=0 THEN MTH=12 ELSE MTH=P MOD 12
2130 '-------------------------special first month situations-----------------
2140 IF T=1 AND P MOD 12<>0 THEN OLDBAL=SP-DWN:GOSUB 2330:GOSUB 2380:GOTO 2200
2150 IF T=1 AND P MOD 12=0 THEN OLDBAL=SP-DWN:GOSUB 2330:GOSUB 2380:GOSUB 2430:YEAR=YEAR+1:GOTO 2190
2160 '------------------------------print logic------------------------------
2170 GOSUB 2320:GOSUB 2380                     'calculate & print data
2180 IF (P MOD 12)=0 THEN GOSUB 2430:YEAR=YEAR+1:FLG2=1
2190 IF YEAR>LDY THEN GOTO 720
2200 T=T+1
2210 IF T>N THEN GOSUB 2430:GOTO 720
2220 NEXT P
2230 '-------------------------------header-----------------------------------
2240 IF YEAR<FDY THEN RETURN
2250 LPRINT:LPRINT:LPRINT:LPRINT:LPRINT "For year =";YEAR:LOCATE 12,25:PRINT STRING$(30,32):LOCATE 12,36:PRINT "PRINTING"
2260 LPRINT
2270 LPRINT "     #     Month    Payment   Principal portion    Interest portion   Rem Bal."
2280 LPRINT "    ---    -----    -------   -----------------    ----------------   --------"
2290 LPRINT
2300 RETURN
2310 '----------------------------calculation---------------------------------
2320 OLDBAL=BAL
2330 BAL=PMT*((1-((1+I)^(T-N)))/I)
2340 INPAID=OLDBAL*I:TI=TI+INPAID
2350 PRIN=PMT-INPAID:TP=TP+PRIN
2360 RETURN
2370 '------------------------------print data---------------------------------
2380 IF YEAR<FDY THEN RETURN
2390 LPRINT TAB(6) T TAB(13) M$(MTH) TAB(20) PMT TAB(35) PRIN TAB(55) INPAID TAB(70) BAL
2400 LPRINT
2410 RETURN
2420 '----------------------------print summary--------------------------------
2430 IF YEAR<FDY THEN TP=0:TI=0:RETURN
2440 IF FLG1=2 THEN 2470
2450 LPRINT:LPRINT:LPRINT TAB(10) YEAR TAB(16) "Summary:":LPRINT TAB(25) "YTD PRINCIPAL = $";TP:LPRINT :LPRINT TAB(25) "YTD INTEREST  = $"TI:LPRINT:LPRINT:TP=0:TI=0:FOR U=1 TO 5:LPRINT:NEXT U:FLG1=2:RETURN
2460 '-------------------------------------------------------------------------
2470 IF YEAR<FDY THEN TP=0:TI=0:RETURN
2480 LPRINT:LPRINT:LPRINT TAB(10) YEAR TAB(16) "Summary:":LPRINT TAB(25) "YTD PRINCIPAL = $";TP:LPRINT :LPRINT TAB(25) "YTD INTEREST  = $"TI:LPRINT:LPRINT:TP=0:TI=0:LPRINT CHR$(&HC):FLG1=1:RETURN
2490 '-------------------------------help-------------------------------------
2500 GOSUB 320:GOSUB 340
2510 LOCATE 6,3:PRINT "* In an ORDINARY ANNUITY, a loan is paid by making payments at the"
2520 LOCATE 7,5:PRINT "end of each compounding period. Part of each payment reduces the principal"
2530 LOCATE 8,5:PRINT "owed and the remainder of the payment represents interest on the loan."
2540 LOCATE 9,5:PRINT "In early periods, most of the payment consists of interest and very"
2550 LOCATE 10,5:PRINT "little is applied toward reducing the principal. Most house and"
2560 LOCATE 11,5:PRINT "car loans are ordinary annuities. (Leases are generally handled as"
2570 LOCATE 12,5:PRINT "ANNUITIES DUE - e.g. payments are due at the beginning of each"
2580 LOCATE 13,5:PRINT "compounding period and require a different program.)"
2590 LOCATE 15,3:PRINT "* You begin by entering the selling price, down payment (if any), the"
2600 LOCATE 16,5:PRINT "annual percentage interest rate (APR) and the number of periods (months)"
2610 LOCATE 17,5:PRINT "of the loan. The program will calculate the monthly payment."
2620 LOCATE 21,3:PRINT "Press 'Q' to quit - any other key to continue:"
2630 LOCATE 21,50:K$=INKEY$:IF K$="" THEN 2630
2640 IF K$="Q" OR K$="q" THEN 360
2650 GOSUB 320:GOSUB 340
2660 LOCATE 6,3:PRINT "* After determining the periodic payment, an option screen is presented."
2670 LOCATE 7,5:PRINT "You may: 1)Change the annuity parameters; 2)Determine the total interest"
2680 LOCATE 8,5:PRINT "and principal paid after a specified number of payments; or 3) Display"
2690 LOCATE 9,5:PRINT "or print an annuity table."
2700 LOCATE 11,3:PRINT "* The annuity table shows the period number, payment, the portion of"
2710 LOCATE 12,5:PRINT "each payment that is interest and the portion that is principal. In"
2720 LOCATE 13,5:PRINT "addition, a summary for each year is shown indicating the total"
2730 LOCATE 14,5:PRINT "interest and principal paid during the year."
2740 LOCATE 16,3:PRINT "* This annuity program assumes that the compounding period is a MONTH!"
2750 LOCATE 17,5:PRINT "The annual periodic interest (APR) is divided by 12 to establish the"
2760 LOCATE 18,5:PRINT "interest rate per compounding period (month). Use this program only"
2770 LOCATE 19,5:PRINT "when payments are made on a monthly basis!"
2780 LOCATE 21,3:PRINT "Press any key to begin:"
2790 LOCATE 21,28:K$=INKEY$:IF K$="" THEN 2790
2800 GOTO 530
```
{% endraw %}

## BFC.BAS

{% raw %}
```bas
100 'BFC  --  BASIC FINANIAL CALCULATIONS - VERSION B-2.2 -- 07/08/88
110 'Copyright 1987,1988 PROWESS, Inc.
120 KEY OFF:CLS:CLEAR:SCREEN 0,0,0:OPTION BASE 1:DIM F$(4)
130 C=3:X=.89:Y=.67
140 COLOR C,0:LOCATE 1,20:PRINT CHR$(201)+STRING$(41,205)+CHR$(187)
150 FOR L=2 TO 3:LOCATE L,20:PRINT CHR$(186):LOCATE L,62:PRINT CHR$(186):NEXT L
160 COLOR 6,0:LOCATE 2,31:PRINT "FINANCIAL CALCULATIONS"
170 LOCATE 3,26:PRINT "Copyright 1987,1988 Prowess,Inc."
180 COLOR C,0:LOCATE 4,20:PRINT CHR$(200)+STRING$(41,205)+CHR$(188)
190 XX$=STRING$(76,32)
200 COLOR 1,0:LOCATE 4,2:PRINT CHR$(201)+STRING$(78,205)+CHR$(187)
210 LOCATE 3,75:COLOR 7,0:PRINT "V2.2":COLOR 1,0
220 FOR L=6 TO 19
230 LOCATE L,1:PRINT CHR$(186):LOCATE L,80:PRINT CHR$(186)
240 NEXT L
250 LOCATE 19,2:PRINT CHR$(200)+STRING$(78,205)+CHR$(188):COLOR 6,0
260 LOCATE 12,16:PRINT "Do you want to review the instructions?  (Y/N/Q)"
270 LOCATE 12,68:K$=INKEY$:IF K$="" THEN 270
280 IF K$="Y" OR K$="y" THEN LOCATE 3,75:PRINT "    ":GOTO 1440
290 IF K$="N" OR K$="n" THEN LOCATE 12,2:PRINT XX$:LOCATE 3,75:PRINT "    ":GOTO 540
300 IF K$="Q" OR K$="q" THEN LOCATE 3,75:PRINT "    ":GOTO 370
310 GOTO 270
320 '---------------------subroutine for clearing lines 21,22,23 ---------------
330 FOR I=6 TO 19:LOCATE I,3:PRINT STRING$(76,32):NEXT I:RETURN
340 '---------------------subroutine for clearing pgm field---------------------
350 FOR I=21 TO 23:LOCATE I,1:PRINT STRING$(79,32):NEXT I:RETURN
360 '-------------------------------------quit---------------------------------
370 CLS
380 LOCATE 10,25:PRINT "RESTART THIS PROGRAM --------------1"
390 LOCATE 12,25:PRINT "RETURN TO THE OPENNING MENU -------2"
400 LOCATE 14,25:PRINT "EXIT ------------------------------3"
410 LOCATE 17,30:PRINT "Make selection"
420 LOCATE 17,50:Q$=INKEY$:IF Q$="" THEN 420
430 QT=VAL(Q$)
440 IF QT<1 OR QT>3 THEN BEEP:GOTO 420
450 IF QT=1 THEN 100
460 IF QT=2 THEN CLS:CHAIN "MONYM"
470 IF QT=3 THEN 500
480 BEEP:GOTO 420
490 LOCATE L,1:PRINT CHR$(186):LOCATE L,80:PRINT CHR$(186)
500 CLS:LOCATE 12,28:PRINT "ARE YOU SURE ?  (Y/N)"
510 LOCATE 12,50:W$=INKEY$:IF W$="" THEN 510
520 IF W$="Y" OR W$="y" THEN LOCATE 15,28:PRINT "COPY AUDIT: ";CHR$(210);CHR$(4);CHR$(177);CHR$(215);CHR$(231);CHR$(252):FOR I=1 TO 2000:NEXT I:CLS:COLOR 7,0:CHAIN "PLIC
530 '----------------------basic financial calculations------------------------
540 GOSUB 330:GOSUB 350
550 LOCATE 8,15:PRINT "Present value (PV) ---------------- "
560 LOCATE 10,15:PRINT "Interest rate (APR IN %) --------- "
570 LOCATE 12,15:PRINT "Number of compounding periods (N)- "
580 LOCATE 14,15:PRINT "Future value (FV) ---------------- "
590 FOR J=1 TO 4
600 IF J=1 THEN CNT=8
610 IF J=2 THEN CNT=10
620 IF J=3 THEN CNT=12
630 IF J=4 THEN CNT=14
640 LOCATE CNT,51:INPUT "",F$(J)
650 IF F$(J)="Q" OR F$(J)="q" THEN 370
660 IF VAL(F$(J))=<0 AND F$(J)<>"" THEN BEEP:LOCATE CNT,51:PRINT STRING$(10,32):GOTO 640
670 NEXT J
680 FOR J=1 TO 4
690 IF F$(J)="" THEN 720
700 NEXT J
710 LOCATE 19,16:COLOR 7,0:PRINT "You must have one unknown !":LOCATE 19,50:COLOR 18,0:PRINT "REDO":GOTO 1590
720 FOR K=J+1 TO 4
730 IF F$(K)="" THEN 760
740 NEXT K
750 GOTO 770
760 LOCATE 19,10:PRINT "You can't have more than one unknown !":LOCATE 19,55:COLOR 18,0:PRINT "REDO":GOTO 1590
770 IF F$(1)<>"" THEN PV#=VAL(F$(1))
780 IF F$(2)<>"" THEN APR#=VAL(F$(2))
790 IF F$(3)<>"" THEN N#=VAL(F$(3))
800 IF F$(4)<>"" THEN FV#=VAL(F$(4))
810 IF (PV#=<0 AND F$(1)<>"") OR (N#=<0 AND F$(3)<>"") THEN BEEP:LOCATE 19,5:PRINT "Zero values and/or negative values are not permitted !":LOCATE 19,66:COLOR 18,0:PRINT "REDO":GOTO 1590
820 IF (APR#=<0 AND F$(2)<>"") OR (FV#=<0 AND F$(4)<>"") THEN BEEP:LOCATE 19,5:PRINT "Zero values and/or neg. values are not permitted !":LOCATE 19,64:COLOR 18,0:PRINT "REDO":GOTO 1590
830 GOSUB 350:LOCATE 21,3:PRINT "How is money compounded? Daily, Monthly, Quarterly, Yearly"
840 LOCATE 21,28:COLOR 3,0:PRINT "D";:LOCATE 21,35:PRINT "M":LOCATE 21,44:PRINT "Q":LOCATE 21,55:PRINT "Y":COLOR 6,0
850 LOCATE 21,63:K$=INKEY$:IF K$="" THEN 850
860 IF K$="D" OR K$="d" THEN I#=APR#/36500!:FACTOR=36500!:GOSUB 920:GOTO 960
870 IF K$="M" OR K$="m" THEN I#=APR#/1200:FACTOR=1200:GOSUB 920:GOTO 960
880 IF K$="Q" OR K$="q" THEN I#=APR#/400:FACTOR=400:GOSUB 920:GOTO 960
890 IF K$="Y" OR K$="y" THEN I#=APR#/100:FACTOR=100:GOSUB 920:GOTO 960
900 BEEP:GOTO 850
910 '-------------------------------i/per subroutine--------------------------
920 LOCATE 18,20:COLOR 3,0:PRINT "The interest rate per period is "
930 LOCATE 18,52:PRINT USING "###.#####";I#*100
940 LOCATE 18,62:PRINT "%":COLOR 6,0
950 RETURN
960 ON J GOTO 980,1020,1150,1110
970 '-------------------------------find present value-------------------------
980 PV#=FV#/((1+I#)^N#)
990 COLOR 3,0:LOCATE 8,51:PRINT USING "#######.##";PV#:COLOR 6,0
1000 GOTO 1350
1010 '-------------------------------find interest rate-------------------------
1020 I#=(((FV#/PV#)^(1/N#))-1)*FACTOR
1030 COLOR 3,0:LOCATE 10,51:PRINT USING "###.###";I#:COLOR 6,0:HOLD#=I#
1040 IF K$="D" OR K$="d" THEN I#=I#/36500#
1050 IF K$="M" OR K$="m" THEN I#=I#/1200
1060 IF K$="Q" OR K$="q" THEN I#=I#/400
1070 IF K$="Y" OR K$="y" THEN I#=I#/100
1080 GOSUB 920:I#=HOLD#
1090 GOTO 1350
1100 '-------------------------------find future value--------------------------
1110 FV#=PV#*(1+I#)^N#
1120 COLOR 3,0:LOCATE 14,51:PRINT USING "#######.##";FV#:COLOR 6,0
1130 GOTO 1350
1140 '------------------------------find N------------------------------------
1150 Y#=1+I#:X#=FV#/PV#:TEST=-1:N#=0:B=1
1160 B=ABS(B):GOTO 1180
1170 B=ABS(B)/2
1180 WHILE TEST<0
1190   N#=N#+B
1200   TEST=Y#^N#-X#:LOCATE 12,51:COLOR 18,0:PRINT "WORKING":COLOR 6,0
1210   IF ABS(TEST)<.0001 THEN 1320
1220   IF TEST>0 THEN 1240
1230 WEND
1240 B=-ABS(B)/2
1250 WHILE TEST>0
1260   N#=N#+B
1270   TEST=Y#^N#-X#:LOCATE 12,51:COLOR 18,0:PRINT "WORKING":COLOR 6,0
1280   IF ABS(TEST)<.0001 THEN 1320
1290   IF TEST>0 THEN 1180
1300 WEND
1310 GOTO 1170
1320 COLOR 3,0:LOCATE 12,51:PRINT STRING$(20,32):BEEP:LOCATE 12,51:PRINT USING "######.##";N#:COLOR 6,0
1330 GOTO 1350
1340 '------------------------------options-----------------------------------
1350 GOSUB 350
1360 LOCATE 21,3:PRINT "Options: Rerun, Exit"
1370 COLOR 3,0::LOCATE 21,12:PRINT "R":LOCATE 21,19:PRINT "E":COLOR 6,0
1380 LOCATE 21,25:K$=INKEY$:IF K$="" THEN 1380
1390 IF K$="Q" OR K$="q" THEN 370
1400 IF K$="R" OR K$="r" THEN 540
1410 IF K$="E" OR K$="e" THEN 370
1420 BEEP:GOTO 1380
1430 '------------------------------help-------------------------------------
1440 GOSUB 330:GOSUB 350
1450 LOCATE 6,3:PRINT "* This program solves problems involving present value (PV), future value"
1460 LOCATE 7,5:PRINT "(FV), interest rate (APR) and the number of compounding periods (N)."
1470 LOCATE 9,3:PRINT "* Enter any three of the four parameters; the program will calculate"
1480 LOCATE 10,5:PRINT "the remaining variable. Press <Return> without entering a value to"
1490 LOCATE 11,5:PRINT "define the unknown."
1500 LOCATE 13,3:PRINT "* Solving for the number of compounding periods requires an iterative"
1510 LOCATE 14,5:PRINT "solution and may take a few seconds."
1520 LOCATE 16,3:PRINT "* You must have one, and only one, unknown !"
1530 LOCATE 18,3:PRINT "* Negative values and zero values are not permitted !"
1540 LOCATE 21,3:PRINT "Press 'Q' to exit - any other key to begin"
1550 LOCATE 21,48:K$=INKEY$:IF K$="" THEN 1550
1560 IF K$="Q" OR K$="q" THEN 370
1570 GOTO 540
1580 '----------------------------error routine--------------------------------
1590 GOSUB 350:COLOR 6,0:LOCATE 21,3:PRINT "Press any key to acknowledge"
1600 LOCATE 21,34:K$=INKEY$:IF K$="" THEN 1600
1610 FOR E=6 TO 16:LOCATE E,51:PRINT "               ":NEXT E
1620 LOCATE 19,2:PRINT STRING$(77,32):GOSUB 350
1630 GOTO 590
```
{% endraw %}

## CI1.BAS

{% raw %}
```bas
100 'COMPOUND INTEREST - 1 - VERSION 2.2 -- 07/08/88
110 'Copyright 1987,1988 PROWESS Inc.
120 KEY OFF:CLS:CLEAR ,,2000:SCREEN 0,0:OPTION BASE 1
130 COLOR 3,0:LOCATE 1,20:PRINT CHR$(201)+STRING$(41,205)+CHR$(187)
140 FOR L=2 TO 3:LOCATE L,20:PRINT CHR$(186):LOCATE L,62:PRINT CHR$(186):NEXT L
150 COLOR 6,0:LOCATE 2,31:PRINT "COMPOUND INTEREST - 1"
160 LOCATE 3,25:PRINT "Copyright 1987,1988 Prowess, Inc."
170 COLOR 3,0:LOCATE 4,20:PRINT CHR$(200)+STRING$(41,205)+CHR$(188)
180 XX$=STRING$(76,32)
190 COLOR 1,0:LOCATE 4,2:PRINT CHR$(201)+STRING$(78,205)+CHR$(187)
200 LOCATE 3,75:COLOR 7,0:PRINT "V2.2":COLOR 1,0
210 FOR L=6 TO 19
220 LOCATE L,1:PRINT CHR$(186):LOCATE L,80:PRINT CHR$(186)
230 NEXT L
240 LOCATE 19,2:PRINT CHR$(200)+STRING$(78,205)+CHR$(188):COLOR 6,0
250 LOCATE 12,16:PRINT "Do you want to review the instructions?  (Y/N/Q)"
260 LOCATE 12,68:K$=INKEY$:IF K$="" THEN 260
270 IF K$="Y" OR K$="y" THEN LOCATE 3,75:PRINT "    ":GOTO 1510
280 IF K$="N" OR K$="n" THEN LOCATE 12,2:PRINT XX$:LOCATE 3,75:PRINT "    ":GOTO 520
290 IF K$="Q" OR K$="q" THEN LOCATE 3,75:PRINT "    ":GOTO 360
300 GOTO 260
310 '---------------------subroutine for clearing lines 21,22,23 ---------------
320 FOR X=21 TO 23:LOCATE X,1:PRINT STRING$(79,32):NEXT X:RETURN
330 '---------------------subroutine for clearing pgm field---------------------
340 FOR Y=6 TO 19:LOCATE Y,3:PRINT STRING$(76,32):NEXT Y:RETURN
350 '-------------------------------------quit---------------------------------
360 CLS
370 LOCATE 10,25:PRINT "RESTART THIS PROGRAM --------------1"
380 LOCATE 12,25:PRINT "RETURN TO THE OPENNING MENU -------2"
390 LOCATE 14,25:PRINT "EXIT ------------------------------3"
400 LOCATE 17,30:PRINT "Make selection"
410 LOCATE 17,50:Q$=INKEY$:IF Q$="" THEN 410
420 QT=VAL(Q$)
430 IF QT<1 OR QT>3 THEN BEEP:GOTO 410
440 IF QT=1 THEN 100
450 IF QT=2 THEN CHAIN "MONYM"
460 IF QT=3 THEN 490
470 BEEP:GOTO 410
480 LOCATE L,1:PRINT CHR$(186):LOCATE L,80:PRINT CHR$(186)
490 CLS:LOCATE 12,28:PRINT "ARE YOU SURE ?  (Y/N)"
500 LOCATE 12,50:W$=INKEY$:IF W$="" THEN 500
510 IF W$="Y" OR W$="y" THEN LOCATE 15,28:PRINT "COPY AUDIT: ";CHR$(210);CHR$(4);CHR$(177);CHR$(215);CHR$(231);CHR$(252):FOR I=1 TO 2000:NEXT I:CLS:COLOR 7,0:CHAIN "PLIC
520 '--------------------------- initial inputs--------------------------------
530 GOSUB 340:LOCATE 6,10:INPUT "Enter PRESENT VALUE : ",PV$
540 IF PV$="Q" OR PV$="q" THEN 360
550 PV=VAL(PV$):IF PV=<0 THEN BEEP:LOCATE 6,32:PRINT STRING$(30,32):GOTO 530
560 LOCATE 8,10:INPUT "Enter INTEREST RATE (API) : ",API$
570 IF API$="Q" OR API$="q" THEN 360
580 API=VAL(API$):IF API=<0 THEN BEEP:LOCATE 8,38:PRINT STRING$(30,32):GOTO 560
590 LOCATE 21,3:PRINT "How is money compounded? Daily, Monthly, Quarterly, Yearly"
600 COLOR 3,0:LOCATE 21,28:PRINT "D":LOCATE 21,35:PRINT "M":LOCATE 21,44:PRINT "Q":LOCATE 21,55:PRINT "Y":COLOR 6,0
610 LOCATE 21,62:Z$=INKEY$:IF Z$="" THEN 610
620 IF Z$="D" OR Z$="d" THEN 850
630 IF Z$="M" OR Z$="m" THEN 670
640 IF Z$="Q" OR Z$="q" THEN 730
650 IF Z$="Y" OR Z$="y" THEN 790
660 BEEP:GOTO 610
670 I = (API/12)/100
680 LOCATE 17,15:PRINT "A compounding period is one month and the monthly"
690 LOCATE 18,20:PRINT "interest rate is          PERCENT"
700 LOCATE 18,36:PRINT USING "###.###";I*100
710 GOSUB 320
720 GOTO 890
730 I = (API/4)/100
740 LOCATE 17,15:PRINT "A compounding period is one quarter and the"
750 LOCATE 18,15:PRINT "quarterly interest rate is          PERCENT"
760 LOCATE 18,36:PRINT USING "###.###";I*100
770 PRINT
780 GOTO 890
790 I = API/100
800 LOCATE 17,15:PRINT "The compounding period is yearly and the yearly"
810 LOCATE 18,15:PRINT "interest is           PERCENT"
820 LOCATE 18,27:PRINT USING "###.###";API
830 PRINT
840 GOTO 890
850 I = ( API/365 ) / 100
860 LOCATE 17,15:PRINT "The compounding period is daily and the daily"
870 LOCATE 18,15:PRINT "interest rate is           PERCENT"
880 LOCATE 18,32:PRINT USING "###.###";I*100
890 GOSUB 320
900 LOCATE 21,3:INPUT "Enter total number of compounding periods: ";N:GOSUB 340
910 LOCATE 8,20:PRINT "How do you want the data displayed ? "
920 LOCATE 9,20:PRINT "----------------------------------  "
930 LOCATE 11,18:PRINT "Display every compounding period -------1 "
940 LOCATE 12,18:PRINT "Summarized display ---------------------2 "
950 LOCATE 13,18:PRINT "Display final answer only --------------3 "
960 GOSUB 320:LOCATE 21,3:PRINT "Select display mode: "
970 LOCATE 21,25:DM$=INKEY$:IF DM$="" THEN 970
980 DM=VAL(DM$):IF DM <1 OR DM>3 THEN BEEP:GOTO 970
990 ON DM GOTO 1000,1020,1050
1000 G = 1
1010 GOTO 1080
1020 GOSUB 320:LOCATE 21,3:INPUT "How many periods do you want included in each display summary? ",G$
1030 G=VAL(G$):IF G=<0 OR G>N THEN BEEP:LOCATE 21,66:PRINT "          ":GOTO 1020
1040 GOTO 1080
1050 G = N
1060 GOTO 1080
1070 '--------------simple compound interest - fixed amount/fixed time---------
1080 GOSUB 340:GOSUB 320:LOCATE 21,3:PRINT "OUTPUT OPTIONS: Display only, Print and display, Quit  (D/P,Q)"
1090 COLOR 3,0:LOCATE 21,19:PRINT "D":LOCATE 21,33:PRINT "P":LOCATE 21,52:PRINT "Q":COLOR 6,0
1100 LOCATE 21,67:K$=INKEY$:IF K$="" THEN 1100
1110 IF K$="Q" OR K$="q" THEN 360
1120 IF K$<>"D" AND K$<>"d" AND K$<>"P" AND K$<>"p" THEN BEEP:GOTO 1100
1130 IF K$="P" OR K$="p" THEN PT=1 ELSE PT=0
1140 GOSUB 340:GOSUB 320:PVOLD=PV
1150 LOCATE 6,9:PRINT "PERIOD        PRIN + INT         PERIOD        PRIN + INT"
1160 LOCATE 7,9:PRINT "------        ----------         ------        ----------"
1170 IF PT=1 THEN LPRINT TAB(5);"PERIOD";TAB(14);"PRIN + INT":LPRINT:LPRINT
1180 A=8:B=10:C=23:K=1:FLAG=0
1190 FOR J=1 TO N
1200 FV=PV*(1+I)
1210 IF FLAG=1 THEN 1230
1220 IF K>10 THEN FLAG=1:A=8:B=43:C=56
1230 WHILE (J MOD G)<>0
1240 LOCATE 2,5:PRINT "WORKING":GOTO 1310
1250 WEND
1260 LOCATE 2,5:PRINT "        "
1270 LOCATE A,B:PRINT J:LOCATE A,C:PRINT FV
1280 IF PT=1 THEN LPRINT TAB(7);J;TAB(25);FV
1290 A=A+1
1300 K=K+1
1310 PV = FV
1320 IF K=21 AND J=>N THEN 1370
1330 IF K=21 THEN K=1:A=8:B=10:C=23:FLAG=0:GOSUB 1450:GOTO 1340
1340 IF F$="Q" OR F$="q" THEN 1360
1350 NEXT J
1360 COLOR 3,0:IF J>N THEN J=J-1
1370 LOCATE 19,3:PRINT "TOTAL PRINCIPAL = $               |    ACCUMULATED INTEREST = $"
1380 LOCATE 19,22:PRINT USING "########.##";PVOLD:LOCATE 19,66:PRINT USING "#######.##";(FV-PVOLD):COLOR 6,0
1390 IF PT=1 THEN LPRINT:LPRINT TAB(5);"Total Principal = ";PVOLD
1400 IF PT=1 THEN LPRINT:LPRINT TAB(5);"Total interest  = ";FV-FOLD
1410 GOSUB 320:LOCATE 21,3:PRINT "Press any key exit: "
1420 LOCATE 21,23:K$=INKEY$:IF K$="" THEN 1420
1430 GOTO 360
1440 '---------------------------pause subroutine-----------------------------
1450 GOSUB 320:LOCATE 21,3:PRINT "Press 'Q' to terminate, any other key to continue:"
1460 LOCATE 21,55:F$=INKEY$:IF F$="" THEN 1460
1470 IF F$="Q" OR F$="q" THEN RETURN
1480 FOR Y=8 TO 19:LOCATE Y,3:PRINT STRING$(75,32):NEXT Y:GOSUB 320
1490 RETURN
1500 '--------------------------------help-----------------------------------
1510 GOSUB 320
1520 LOCATE 6,3:PRINT "* This program calculates compound interest for a fixed amount of principal"
1530 LOCATE 7,5:PRINT " (PV) invested for a fixed number of compounding periods."
1540 LOCATE 9,3:PRINT "* The results may be displayed in a number of ways:"
1550 LOCATE 11,10:PRINT "- Display results for each period."
1560 LOCATE 12,10:PRINT "- Display results only for every 'X' periods ( you select 'X )'."
1570 LOCATE 13,10:PRINT "  NOTE: If the number of periods is not evenly divisible by X,"
1580 LOCATE 14,10:PRINT "  the summary will not show the results of the final periods."
1590 LOCATE 15,10:PRINT "- Display only the results after the final period."
1600 LOCATE 17,3:PRINT "Exanple: You invest $100, at 7.5% (APR), for 12 months. At the end of 12"
1610 LOCATE 18,3:PRINT "         months, what is your investment worth ?"
1620 LOCATE 21,3:PRINT "Press any key to begin:"
1630 LOCATE 21,27:K$=INKEY$:IF K$="" THEN 1630
1640 GOSUB 320:GOTO 530
```
{% endraw %}

## CI2.BAS

{% raw %}
```bas
100 'COMPOUND INTEREST - 2  with fixed additions- VERSION 2.2 -- 07/08/88
110 'Copyright 1987,1988 PROWESS inc.
120 KEY OFF:CLS:CLEAR ,,2000:SCREEN 0,0
130 COLOR 3,0:LOCATE 1,20:PRINT CHR$(201)+STRING$(41,205)+CHR$(187)
140 FOR L=2 TO 3:LOCATE L,20:PRINT CHR$(186):LOCATE L,62:PRINT CHR$(186):NEXT L
150 COLOR 6,0:LOCATE 2,31:PRINT "COMPOUND INTEREST - 2"
160 LOCATE 3,25:PRINT "Copyright 1987,1988 Prowess,Inc."
170 COLOR 3,0:LOCATE 4,20:PRINT CHR$(200)+STRING$(41,205)+CHR$(188)
180 XX$=STRING$(76,32)
190 COLOR 1,0:LOCATE 4,2:PRINT CHR$(201)+STRING$(78,205)+CHR$(187)
200 LOCATE 3,75:COLOR 7,0:PRINT "V2.2":COLOR 1,0
210 FOR L=6 TO 19
220 LOCATE L,1:PRINT CHR$(186):LOCATE L,80:PRINT CHR$(186)
230 NEXT L
240 LOCATE 19,2:PRINT CHR$(200)+STRING$(78,205)+CHR$(188):COLOR 6,0
250 LOCATE 12,16:PRINT "Do you want to review the instructions?  (Y/N/Q)"
260 LOCATE 12,68:K$=INKEY$:IF K$="" THEN 260
270 IF K$="Y" OR K$="y" THEN LOCATE 3,75:PRINT "    ":GOTO 1560
280 IF K$="N" OR K$="n" THEN LOCATE 12,2:PRINT XX$:LOCATE 3,75:PRINT "    ":GOTO 520
290 IF K$="Q" OR K$="q" THEN LOCATE 3,75:PRINT "    ":GOTO 360
300 GOTO 260
310 '---------------------subroutine for clearing lines 21,22,23 ---------------
320 FOR X=21 TO 23:LOCATE X,1:PRINT STRING$(79,32):NEXT X:RETURN
330 '---------------------subroutine for clearing pgm field---------------------
340 FOR Y=6 TO 19:LOCATE Y,3:PRINT STRING$(76,32):NEXT Y:RETURN
350 '-------------------------------------quit---------------------------------
360 CLS
370 LOCATE 10,25:PRINT "RESTART THIS PROGRAM --------------1"
380 LOCATE 12,25:PRINT "RETURN TO THE OPENNING MENU -------2"
390 LOCATE 14,25:PRINT "EXIT (TO DOS) ---------------------3"
400 LOCATE 17,30:PRINT "MAKE SELECTION"
410 LOCATE 17,50:Q$=INKEY$:IF Q$="" THEN 410
420 QT=VAL(Q$)
430 IF QT<1 OR QT>3 THEN BEEP:GOTO 410
440 IF QT=1 THEN 100
450 IF QT=2 THEN CHAIN "MONYM"
460 IF QT=3 THEN 490
470 BEEP:GOTO 410
480 LOCATE L,1:PRINT CHR$(186):LOCATE L,80:PRINT CHR$(186)
490 CLS:LOCATE 12,28:PRINT "ARE YOU SURE ?  (Y/N)"
500 LOCATE 12,50:W$=INKEY$:IF W$="" THEN 500
510 IF W$="Y" OR W$="y" THEN LOCATE 15,28:PRINT "COPY AUDIT: ";CHR$(210);CHR$(4);CHR$(177);CHR$(215);CHR$(231);CHR$(252):FOR I=1 TO 2000:NEXT I:CLS:COLOR 7,0:CHAIN "PLIC
520 '--------------------------- initial inputs--------------------------------
530 GOSUB 340:LOCATE 6,10:INPUT "Enter PRESENT VALUE (initial amount): ",PV$
540 IF PV$="Q" OR PV$="q" THEN 360
550 PV=VAL(PV$):IF PV=<0 THEN BEEP:LOCATE 6,48:PRINT STRING$(30,32):GOTO 530
560 LOCATE 8,10:INPUT "Enter AMOUNT TO BE ADDED each period: ",ADD$
570 IF ADD$="Q" OR ADD$="q" THEN 360
580 ADD=VAL(ADD$):IF (PV-ADD)=<0 THEN BEEP:LOCATE 8,48:PRINT STRING$(30,32):GOTO 560
590 LOCATE 10,10:INPUT "Enter INTEREST RATE (API) : ",API$
600 IF API$="Q" OR API$="q" THEN 360
610 API=VAL(API$):IF API=<0 THEN BEEP:LOCATE 10,38:PRINT STRING$(30,32):GOTO 590
620 LOCATE 21,3:PRINT "How is money compounded? Daily, Monthly, Quarterly, Yearly"
630 COLOR 3,0:LOCATE 21,28:PRINT "D":LOCATE 21,35:PRINT "M":LOCATE 21,44:PRINT "Q":LOCATE 21,55:PRINT "Y":COLOR 6,0
640 LOCATE 21,73:Z$=INKEY$:IF Z$="" THEN 640
650 IF Z$="D" OR Z$="d" THEN 880
660 IF Z$="M" OR Z$="m" THEN 700
670 IF Z$="Q" OR Z$="q" THEN 760
680 IF Z$="Y" OR Z$="y" THEN 820
690 ON Z GOTO 700,760,820,880
700 I = (API/12)/100
710 LOCATE 17,15:PRINT "A compounding period is one month and the monthly"
720 LOCATE 18,15:PRINT "interest rate is          PERCENT"
730 LOCATE 18,32:PRINT USING "###.###";I*100
740 GOSUB 320
750 GOTO 920
760 I = (API/4)/100
770 LOCATE 17,15:PRINT "A compounding period is one quarter and the"
780 LOCATE 18,15:PRINT "quarterly interest rate is          PERCENT"
790 LOCATE 18,42:PRINT USING "###.###";I*100
800 PRINT
810 GOTO 920
820 I = API/100
830 LOCATE 17,15:PRINT "The compounding period is yearly and the yearly"
840 LOCATE 18,15:PRINT "interest is           PERCENT"
850 LOCATE 18,27:PRINT USING "###.###";API
860 PRINT
870 GOTO 920
880 I = ( API/365 ) / 100
890 LOCATE 17,15:PRINT "The compounding period is daily and the daily"
900 LOCATE 18,15:PRINT "interest rate is           PERCENT"
910 LOCATE 18,32:PRINT USING "###.###";I*100
920 GOSUB 320
930 LOCATE 21,3:INPUT "Enter total number of compounding periods: ";N:GOSUB 340
940 LOCATE 8,20:PRINT "How do you want the data displayed ? "
950 LOCATE 9,20:PRINT "----------------------------------  "
960 LOCATE 11,18:PRINT "Display every compounding period -------1 "
970 LOCATE 12,18:PRINT "Summarized display ---------------------2 "
980 LOCATE 13,18:PRINT "Display final answer only --------------3 "
990 GOSUB 320:LOCATE 21,3:PRINT "Select display mode: "
1000 LOCATE 21,25:DM$=INKEY$:IF DM$="" THEN 1000
1010 DM=VAL(DM$):IF DM <1 OR DM>3 THEN BEEP:GOTO 1000
1020 ON DM GOTO 1030,1050,1080
1030 G = 1
1040 GOTO 1110
1050 GOSUB 320:LOCATE 21,3:INPUT "How many periods do you want included in each display summary? ",G$
1060 G=VAL(G$):IF G=<0 OR G>N THEN BEEP:LOCATE 21,66:PRINT "          ":GOTO 1050
1070 GOTO 1110
1080 G = N
1090 GOTO 1110
1100 '--------------simple compound interest - fixed amount/fixed time---------
1110 GOSUB 340:GOSUB 320:LOCATE 21,3:PRINT "OUTPUT OPTIONS: Display only, Print and display, Quit (D/P/Q) "
1120 COLOR 3,0:LOCATE 21,19:PRINT "D":LOCATE 21,33:PRINT "P":LOCATE 21,52:PRINT "Q":COLOR 6,0
1130 LOCATE 21,67:K$=INKEY$:IF K$="" THEN 1130
1140 IF K$="Q" OR K$="q" THEN 360
1150 IF K$<>"D" AND K$<>"d" AND K$<>"P" AND K$<>"p" THEN BEEP:GOTO 1130
1160 IF K$="P" OR K$="p" THEN PT=1 ELSE PT=0
1170 GOSUB 340:GOSUB 320:PVOLD=PV
1180 LOCATE 6,9:PRINT "PERIOD        PRIN + INT         PERIOD        PRIN + INT"
1190 LOCATE 7,9:PRINT "------        ----------         ------        ----------"
1200 IF PT=1 THEN LPRINT:LPRINT:LPRINT TAB(5);"PERIOD";TAB(20);"PRIN + INT":LPRINT:LPRINT
1210 A=8:B=10:C=23:K=1:FLAG=0
1220 FOR J=1 TO N
1230 IF J>1 THEN 1250 ELSE 1240
1240 FV=PV*(1+I):GOTO 1260
1250 FV=(PV+ADD)*(1+I):PVOLD=PVOLD+ADD
1260 IF FLAG=1 THEN 1280
1270 IF K>10 THEN FLAG=1:A=8:B=43:C=56
1280 WHILE (J MOD G)<>0
1290 LOCATE 2,5:PRINT "WORKING":GOTO 1360
1300 WEND
1310 LOCATE 2,5:PRINT "       "
1320 LOCATE A,B:PRINT J:LOCATE A,C:PRINT FV
1330 IF PT=1 THEN LPRINT TAB(7);J;TAB(21);FV
1340 A=A+1
1350 K=K+1
1360 PV = FV
1370 IF K=21 AND J=N THEN 1420
1380 IF K=21 THEN K=1:A=8:B=10:C=23:FLAG=0:GOSUB 1500:GOTO 1390
1390 IF F$="Q" OR F$="q" THEN 1410
1400 NEXT J
1410 COLOR 3,0:IF J>N THEN J=J-1
1420 LOCATE 19,3:PRINT "TOTAL PRINCIPAL = $               |    ACCUMULATED INTEREST = $"
1430 LOCATE 19,22:PRINT USING "########.##";PVOLD:LOCATE 19,66:PRINT USING "#######.##";(FV-PVOLD):COLOR 6,0
1440 IF PT=1 THEN LPRINT:LPRINT:LPRINT TAB(5);"Total Principal = ";PVOLD:LPRINT:LPRINT
1450 IF PT=1 THEN LPRINT TAB(5);"Total Interest = ";FV-PVOLD
1460 GOSUB 320:LOCATE 21,3:PRINT "Press any key exit: "
1470 LOCATE 21,23:K$=INKEY$:IF K$="" THEN 1470
1480 GOTO 360
1490 '---------------------------pause subroutine-----------------------------
1500 GOSUB 320:LOCATE 21,3:PRINT "Press 'Q' to terminate, any other key to continue:"
1510 LOCATE 21,55:F$=INKEY$:IF F$="" THEN 1510
1520 IF F$="Q" OR F$="q" THEN RETURN
1530 FOR Y=8 TO 19:LOCATE Y,3:PRINT STRING$(75,32):NEXT Y:GOSUB 320
1540 RETURN
1550 '--------------------------------help-----------------------------------
1560 GOSUB 320:LOCATE 12,16:PRINT STRING$(60,32)
1570 LOCATE 6,3:PRINT "* This program calculates compound interest for an initial investment"
1580 LOCATE 7,5:PRINT "to which is added a fixed amount each period. The first addition is"
1590 LOCATE 8,5:PRINT "added at the BEGINNING of the 2nd compounding period."
1600 LOCATE 10,3:PRINT "* The results may be displayed in a number of ways:"
1610 LOCATE 11,10:PRINT "- Display results for each period."
1620 LOCATE 12,10:PRINT "- Display results only for every 'X' periods ( you select 'X')."
1630 LOCATE 13,10:PRINT "  NOTE: Unless the number of periods is evenly divisible by 'X',"
1640 LOCATE 14,10:PRINT "  your summary will not include all of the final periods."
1650 LOCATE 15,10:PRINT "- Desplay only the results after the final period."
1660 LOCATE 17,3:PRINT "Example: You open an account, which pays 7.5% interest (APR),  with $100"
1670 LOCATE 18,3:PRINT "on January 1 and add $10 to it on the first of each month starting in"
1680 LOCATE 19,3:PRINT "February."
1690 LOCATE 21,3:PRINT "Press any key to begin:"
1700 LOCATE 21,27:K$=INKEY$:IF K$="" THEN 1700
1710 GOSUB 320:GOTO 530
```
{% endraw %}

## CI3.BAS

{% raw %}
```bas
100 'COMPOUND INTEREST - 3 with non-periodic add/sub - VERSION 2.2 - 07/08/88
110 'Copyright 1987, 1988  PROWESS Inc.
120 KEY OFF:CLS:CLEAR ,,2000
130 SCREEN 0,0:OPTION BASE 1:DIM ADD$(500)
140 COLOR 3,0:LOCATE 1,20:PRINT CHR$(201)+STRING$(41,205)+CHR$(187)
150 FOR L=2 TO 3:LOCATE L,20:PRINT CHR$(186):LOCATE L,62:PRINT CHR$(186):NEXT L
160 COLOR 6,0:LOCATE 2,31:PRINT "COMPOUND INTEREST - 3"
170 LOCATE 3,26:PRINT "Copyright 1987,1988 Prowess,Inc."
180 COLOR 3,0:LOCATE 4,20:PRINT CHR$(200)+STRING$(41,205)+CHR$(188)
190 XX$=STRING$(76,32)
200 COLOR 1,0:LOCATE 4,2:PRINT CHR$(201)+STRING$(78,205)+CHR$(187)
210 LOCATE 3,75:COLOR 7,0:PRINT "V2.2":COLOR 1,0
220 FOR L=6 TO 19
230 LOCATE L,1:PRINT CHR$(186):LOCATE L,80:PRINT CHR$(186)
240 NEXT L
250 LOCATE 19,2:PRINT CHR$(200)+STRING$(78,205)+CHR$(188):COLOR 6,0
260 IF CHK=1 THEN PVOLD=PVORIG:GOTO 1140
270 LOCATE 12,16:PRINT "Do you want to review the instructions?  (Y/N/Q)"
280 LOCATE 12,68:K$=INKEY$:IF K$="" THEN 280
290 IF K$="Y" OR K$="y" THEN LOCATE 3,75:PRINT "    ":GOTO 1770
300 IF K$="N" OR K$="n" THEN LOCATE 12,2:PRINT XX$:LOCATE 3,75:PRINT "    ":GOTO 560
310 IF K$="Q" OR K$="q" THEN LOCATE 3,75:PRINT "    ":GOTO 380
320 GOTO 280
330 '---------------------subroutine for clearing lines 21,22,23 ---------------
340 FOR X=21 TO 23:LOCATE X,1:PRINT STRING$(79,32):NEXT X:RETURN
350 '---------------------subroutine for clearing pgm field---------------------
360 FOR Y=6 TO 19:LOCATE Y,3:PRINT STRING$(76,32):NEXT Y:RETURN
370 '-------------------------------------quit---------------------------------
380 CLS
390 LOCATE 10,25:PRINT "RESTART THIS PROGRAM --------------1"
400 LOCATE 11,25:PRINT "CHANGE DISPLAY PARAMETERS ---------2"
410 LOCATE 12,25:PRINT "RETURN TO THE OPENNING MENU -------3"
420 LOCATE 13,25:PRINT "EXIT ------------------------------4"
430 LOCATE 17,30:PRINT "Make selection"
440 LOCATE 17,50:Q$=INKEY$:IF Q$="" THEN 440
450 QT=VAL(Q$)
460 IF QT<1 OR QT>4 THEN BEEP:GOTO 440
470 IF QT=1 THEN 100
480 IF QT=2 THEN CHK=1:GOTO 140
490 IF QT=3 THEN CHAIN "MONYM"
500 IF QT=4 THEN 530
510 BEEP:GOTO 440
520 LOCATE L,1:PRINT CHR$(186):LOCATE L,80:PRINT CHR$(186)
530 CLS:LOCATE 12,28:PRINT "ARE YOU SURE ?  (Y/N)"
540 LOCATE 12,50:W$=INKEY$:IF W$="" THEN 540
550 IF W$="Y" OR W$="y" THEN LOCATE 15,28:PRINT "COPY AUDIT: ";CHR$(210);CHR$(4);CHR$(177);CHR$(215);CHR$(231);CHR$(252):FOR I=1 TO 2000:NEXT I:CLS:COLOR 7,0:CHAIN "PLIC
560 '--------------------------- initial inputs--------------------------------
570 GOSUB 360:LOCATE 6,10:INPUT "Enter PRESENT VALUE (initial amount): ",PV$
580 IF PV$="Q" OR PV$="q" THEN 380
590 PV=VAL(PV$):PVORIG=PV:IF PV=<0 THEN BEEP:LOCATE 6,48:PRINT STRING$(30,32):GOTO 570
600 LOCATE 10,10:INPUT "Enter INTEREST RATE (API) : ",API$
610 IF API$="Q" OR API$="q" THEN 380
620 API=VAL(API$):IF API=<0 THEN BEEP:LOCATE 10,38:PRINT STRING$(30,32):GOTO 600
630 LOCATE 21,3:PRINT "How is money compounded? Daily, Monthly, Quarterly, Yearly"
640 COLOR 3,0:LOCATE 21,28:PRINT "D":LOCATE 21,35:PRINT "M":LOCATE 21,44:PRINT "Q":LOCATE 21,55:PRINT "Y":COLOR 6,0
650 LOCATE 21,63:Z$=INKEY$:IF Z$="" THEN 650
660 IF Z$="D" OR Z$="d" THEN 890
670 IF Z$="M" OR Z$="m" THEN 710
680 IF Z$="Q" OR Z$="q" THEN 770
690 IF Z$="Y" OR Z$="y" THEN 830
700 BEEP:GOTO 650
710 I = (API/12)/100
720 LOCATE 18,15:PRINT "A compounding period is one month and the monthly"
730 LOCATE 19,15:PRINT "interest rate is          PERCENT"
740 LOCATE 19,32:PRINT USING "###.###";I*100
750 GOSUB 340
760 GOTO 930
770 I = (API/4)/100
780 LOCATE 17,15:PRINT "A compounding period is one quarter and the"
790 LOCATE 18,15:PRINT "quarterly interest rate is          PERCENT"
800 LOCATE 18,42:PRINT USING "###.###";I*100
810 PRINT
820 GOTO 930
830 I = API/100
840 LOCATE 17,15:PRINT "The compounding period is yearly and the yearly"
850 LOCATE 18,15:PRINT "interest is           PERCENT"
860 LOCATE 18,27:PRINT USING "###.###";API
870 PRINT
880 GOTO 930
890 I = ( API/365 ) / 100
900 LOCATE 17,15:PRINT "The compounding period is daily and the daily"
910 LOCATE 18,15:PRINT "interest rate is           PERCENT"
920 LOCATE 18,32:PRINT USING "###.###";I*100
930 GOSUB 340
940 LOCATE 21,3:INPUT "Enter total number of compounding periods: ";N$:GOSUB 340
950 IF N$="Q" OR N$="q" THEN 380
960 N=VAL(N$):IF N<1 OR N>500 THEN BEEP:LOCATE 21,50:PRINT STRING$(20,32)
970 LOCATE 21,3:PRINT "Enter 0 for amount to terminate additions/subtractions."
980 GOSUB 360
990 FOR T=1 TO N
1000 LOCATE 10,10:PRINT "Enter amount to be added/subtracted: "
1010 LOCATE 12,10:PRINT "Enter the period # corresponding to this add/sub: "
1020 LOCATE 10,48:INPUT "",AD$
1030 IF AD$="Q" OR AD$="q" THEN 380
1040 AD=VAL(AD$)
1050 IF AD=0 THEN GOSUB 360:GOSUB 340:GOTO 1140
1060 LOCATE 12,60:INPUT "",PER$
1070 IF PER$="Q" OR PER$="q" THEN 380
1080 PER=VAL(PER$)
1090 IF PER<1 OR PER>N OR PER>500 THEN BEEP:LOCATE 12,60:PRINT STRING$(15,32):GOTO 1060
1100 ADD$(PER)=AD$
1110 LOCATE 10,48:PRINT STRING$(30,32)
1120 LOCATE 12,60:PRINT STRING$(15,32)
1130 NEXT T
1140 GOSUB 360:LOCATE 8,20:PRINT "How do you want the data displayed ? "
1150 LOCATE 9,20:PRINT "----------------------------------  "
1160 LOCATE 11,18:PRINT "Display every compounding period -------1 "
1170 LOCATE 12,18:PRINT "Summarized display ---------------------2 "
1180 LOCATE 13,18:PRINT "Display final answer only --------------3 "
1190 GOSUB 340:LOCATE 21,3:PRINT "Select display mode: "
1200 LOCATE 21,25:DM$=INKEY$:IF DM$="" THEN 1200
1210 DM=VAL(DM$):IF DM <1 OR DM>3 THEN BEEP:GOTO 1200
1220 ON DM GOTO 1230,1250,1280
1230 G = 1
1240 GOTO 1310
1250 GOSUB 340:LOCATE 21,3:INPUT "How many periods do you want included in each display summary? ",G$
1260 G=VAL(G$):IF G=<0 OR G>N THEN BEEP:LOCATE 21,66:PRINT "          ":GOTO 1250
1270 GOTO 1310
1280 G = N
1290 GOTO 1310
1300 '--------------simple compound interest - fixed amount/fixed time---------
1310 GOSUB 360:GOSUB 340:LOCATE 21,3:PRINT "OUTPUT OPTIONS: Display only, Print and display, Quit (D/P/Q)"
1320 COLOR 3,0:LOCATE 21,19:PRINT "D":LOCATE 21,33:PRINT "P":LOCATE 21,52:PRINT "Q":COLOR 6,0
1330 LOCATE 21,67:K$=INKEY$:IF K$="" THEN 1330
1340 IF K$="Q" OR K$="q" THEN 360
1350 IF K$<>"D" AND K$<>"d" AND K$<>"P" AND K$<>"p" THEN BEEP:GOTO 1330
1360 IF K$="P" OR K$="p" THEN PT=1 ELSE PT=0
1370 GOSUB 360:GOSUB 340:PV=PVORIG:PVOLD=PVORIG:FV=0
1380 LOCATE 6,9:PRINT "PERIOD   PRIN + INT   ADD/SUB    PERIOD   PRIN + INT   ADD/SUB"
1390 LOCATE 7,9:PRINT "------   ----------   -------    ------   ----------   -------"
1400 IF PT=1 THEN LPRINT:LPRINT:LPRINT TAB(5);"PERIOD";TAB(20);"PRIN + INT";TAB(35);"ADD/SUB"
1410 A=8:B=10:C=18:D=33:K=1:FLAG=0
1420 FOR J=1 TO N
1430 ADD=VAL(ADD$(J)):ADDD=ADDD+ADD
1440 FV=(PV+ADD)*(1+I):PVOLD=PVOLD+ADD
1450 IF FLAG=1 THEN 1470
1460 IF K>10 THEN FLAG=1:A=8:B=43:C=51:D=66
1470 WHILE (J MOD G)<>0
1480 LOCATE 2,5:PRINT "WORKING":GOTO 1570
1490 WEND
1500 LOCATE 2,5:PRINT "       "
1510 IF ADDD=0 THEN LOCATE A,B:PRINT J:LOCATE A,C:PRINT FV:LOCATE A,D+2:PRINT "--" ELSE LOCATE A,B:PRINT J:LOCATE A,C:PRINT FV:LOCATE A,D:PRINT ADDD
1520 IF PT=1 AND ADDD=0 THEN LPRINT:LPRINT TAB(7);J;TAB(21);FV;TAB(37);"---"
1530 IF PT=1 AND ADDD<>0 THEN LPRINT:LPRINT TAB(7);J;TAB(21);FV;TAB(36);ADDD
1540 ADDD=0
1550 A=A+1
1560 K=K+1
1570 PV = FV
1580 IF K=21 AND J=>N THEN 1630
1590 IF K=21 THEN K=1:A=8:B=10:C=18:D=33:FLAG=0:GOSUB 1710:GOTO 1600
1600 IF F$="Q" OR F$="q" THEN 1620
1610 NEXT J
1620 COLOR 3,0:IF J>N THEN J=J-1
1630 LOCATE 19,3:PRINT "TOTAL PRINCIPAL = $               |    ACCUMULATED INTEREST = $"
1640 LOCATE 19,22:PRINT USING "########.##";PVOLD:LOCATE 19,66:PRINT USING "#######.##";(FV-PVOLD):COLOR 6,0
1650 IF PT=1 THEN LPRINT:LPRINT TAB(5);"Total principal = ";PVOLD
1660 IF PT=1 THEN LPRINT:LPRINT TAB(5);"Total interest  = ";FV-PVOLD
1670 GOSUB 340:LOCATE 21,3:PRINT "Press any key exit: "
1680 LOCATE 21,23:K$=INKEY$:IF K$="" THEN 1680
1690 GOTO 380
1700 '---------------------------pause subroutine-----------------------------
1710 GOSUB 340:LOCATE 21,3:PRINT "Press 'Q' to terminate, any other key to continue:"
1720 LOCATE 21,55:F$=INKEY$:IF F$="" THEN 1720
1730 IF F$="Q" OR F$="q" THEN RETURN
1740 FOR Y=8 TO 19:LOCATE Y,3:PRINT STRING$(75,32):NEXT Y:GOSUB 340
1750 RETURN
1760 '--------------------------------help-----------------------------------
1770 GOSUB 340:LOCATE 12,16:PRINT STRING$(60,32)
1780 LOCATE 6,3:PRINT "* This program calculates compound interest for an initial investment."
1790 LOCATE 7,5:PRINT "You may add or subtract money at the beginning of any period. The"
1800 LOCATE 8,5:PRINT "number of additions/subtractions must be equal to or less than"
1810 LOCATE 9,5:PRINT "the number of periods or 500 (whichever is smaller)."
1820 LOCATE 10,3:PRINT "* The results may be displayed in a number of ways:"
1830 LOCATE 11,10:PRINT "- Display results for each period."
1840 LOCATE 12,10:PRINT "- Display results only for every 'X' periods ( you select 'X')."
1850 LOCATE 13,10:PRINT "  NOTE: Unless the number of periods is evenly divisible by 'X',"
1860 LOCATE 14,10:PRINT "  your summary will not include all of the final periods)."
1870 LOCATE 15,10:PRINT "- Desplay only the results after the final period."
1880 LOCATE 17,3:PRINT "Example: You open an account, which pays 7.5% interest (APR),  with $100"
1890 LOCATE 18,3:PRINT "on January 1 and add $10 to it on March 1, withdraw $30 on August 1."
1900 LOCATE 19,3:PRINT "What is your account balance after a full year ?"
1910 LOCATE 21,3:PRINT "Press any key to begin:"
1920 LOCATE 21,27:K$=INKEY$:IF K$="" THEN 1920
1930 GOSUB 340:GOTO 570
```
{% endraw %}

## DPC.BAS

{% raw %}
```bas
100 'DPC  --  LOGO FOR $PRO (COLOR VERSION)
110 CLEAR : SCREEN 1, 0, 0
120 CLS : KEY OFF
130 LOCATE 5, 16: COLOR 1, 1: PRINT "PROWESS inc."
140 LINE (115, 40)-(177, 40), 1
150 LINE (115, 40)-(115, 90), 1
160 LINE (177, 40)-(177, 90), 1
170 LINE (118, 94)-(142, 94), 1
180 LINE (150, 94)-(174, 94), 1
190 CIRCLE (119, 91), 4, 1, 3.14, 4.712: CIRCLE (173, 91), 4, 1, 4.71, 0
200 CIRCLE (173, 91), 4, 1, 4.71, 0
210 CIRCLE (141, 97), 4, 1, 0, 1.57
220 CIRCLE (151, 97), 4, 1, 1.57, 3.1422: PSET (146, 98), 1
230 PSET (146, 98), 1
240 LINE (118, 42)-(174, 92), 1, B
250 PSET (146, 94), 1: DRAW "H2 F2 E2 G2"
260 PSET (146, 93): PSET (146, 92)
270 LINE (118, 91.4)-(174, 91.4)
280 CIRCLE (198, 86), 52, 1, 2.1, 3.05
290 CIRCLE (94, 86), 52, 1, .1, 1.05
300 CIRCLE (198, 86), 58, 1, 2.01, 2.6
310 CIRCLE (94, 86), 58, 1, .5, 1.1
320 PSET (146, 65), 1
330 PSET (146, 48), 1: DRAW "U3 D3 D3"
340 PSET (146, 48), 1: DRAW "H3 F3 F3"
350 PSET (146, 48), 1: DRAW "E3 G3 G3"
360 PSET (148, 48), 1: DRAW "H3 F3 F3"
370 PSET (144, 48), 1: DRAW "E3 G3 G3"
380 LOCATE 14, 6: PRINT "Shareware for Technical Design"
390 LOCATE 15, 14: PRINT "and Management"
400 LINE (5, 130)-(315, 165), 1, B
410 LOCATE 18, 15: PRINT "DOLLAR-PRO"
420 LOCATE 20, 4: PRINT "Copyright 1987,1988 Prowess, Inc."
430 LOCATE 1, 1: PRINT "1010-B-V2.2"
440 LOCATE 23, 7: PRINT "PRESS ANY KEY TO CONTINUE"
450 LOCATE 21, 36: F$ = INKEY$: IF F$ = "" THEN 450
460 WIDTH 80
470 'PLIC  -- Prowess, Inc. license agreement 07/08/88
480 CLEAR : SCREEN 0, 0: COLOR 6, 0
490 LOCATE 1, 24: PRINT "DOLLAR-PRO -- LICENSE AGREEMENT"
500 LOCATE 2, 23: PRINT "Copyright 1987,1988 Prowess, Inc."
510 LOCATE 4, 5: PRINT "This is a user supported software product.  It is not public domain"
520 LOCATE 5, 5: PRINT "software, nor is it free software. You are granted a limited license"
530 LOCATE 6, 5: PRINT "to use this product on a trial basis.   If you continue to use this"
540 LOCATE 7, 5: PRINT "product, after a trial period, you must register by sending:"
550 LOCATE 9, 5: PRINT "    $25 (Minimum reg.)         or         $39 (+ $4 s/h) (Full reg.)"
560 LOCATE 10, 5: PRINT "   * Technical support                   *  Technical support"
570 LOCATE 11, 5: PRINT "   * Informed of updates                 *  Latest diskette supplied"
580 LOCATE 12, 5: PRINT "                                         *  Shareware plea removed"
590 LOCATE 14, 18: PRINT "Texas residents, please add 8% sales tax"
600 LOCATE 15, 11: PRINT "Contact us for information concerning low cost site licenses."
610 LOCATE 17, 5: PRINT "If you like the shareware concept - try before you buy - support the"
620 LOCATE 18, 5: PRINT "companies that provide useful, professional quality products."
630 LOCATE 20, 5: PRINT "Prowess,Inc. -  203 Lakeridge Village - Suite 102 - Dallas, TX  75238"
640 LOCATE 21, 33: PRINT "(214) 349-4718"
650 LOCATE 23, 29: PRINT "Press any key to begin"
660 LOCATE 23, 52: F$ = INKEY$: IF F$ = "" THEN 660
670 CHAIN "MONYM"
```
{% endraw %}

## DPM.BAS

{% raw %}
```bas
100 'DPM - LOGO & LICENSE FOR $PRO (MONO) - VERSION 2.2 -- 07/08/88
110 'Copyright 1987,1988 Prowess, Inc.
120 KEY OFF:CLS:SCREEN 0,0
130 LOCATE 2,1:PRINT "1010-B-V2.2"
140 LOCATE 5,17:COLOR 6,0:PRINT "Shareware for Professional Design and Management"
150 LOCATE 9,30:PRINT STRING$(20,36):LOCATE 13,30:PRINT STRING$(20,36)
160 FOR N=10 TO 12
170 LOCATE N,30:PRINT "$":LOCATE N,49:PRINT "$"
180 NEXT N
190 LOCATE 11,35:PRINT "DOLLAR-PRO"
200 LOCATE 18,23:PRINT "Copyright 1987,1988 Prowess, Inc."
210 LOCATE 22,28:PRINT "Press any key to continue"
220 LOCATE 22,56:P$=INKEY$:IF P$="" THEN 220
240 '-- Prowess, Inc. license agreement -- 12/15/87
250 CLS:CLEAR:SCREEN 0,0
260 LOCATE 1,25:PRINT "DOLLAR-PRO  LICENSE AGREEMENT"
270 LOCATE 2,24:PRINT "Copyright 1987,1988 Prowess,Inc."
280 LOCATE 4,5:PRINT "This is a user supported software product.  It is not public domain"
290 LOCATE 5,5:PRINT "software, nor is it free software. You are granted a limited license"
300 LOCATE 6,5:PRINT "to use this product on a trial basis.   If you continue to use this"
310 LOCATE 7,5:PRINT "product, after a trial period, you must register by sending:"
320 LOCATE 9,5:PRINT "    $25 (Minimum reg.)         or         $39 (+ $4 s/h) (Full reg.)"
330 LOCATE 10,5:PRINT "   * Technical support                   *  Technical support"
340 LOCATE 11,5:PRINT "   * Informed of updates                 *  Latest diskette supplied"
350 LOCATE 12,5:PRINT "                                         *  Shareware plea removed"
360 LOCATE 14,18:PRINT "Texas residents, please add 8% sales tax"
370 LOCATE 15,11:PRINT "Contact us for information concerning low cost site licenses."
380 LOCATE 17,5:PRINT "If you like the shareware concept - try before you buy - support the"
390 LOCATE 18,5:PRINT "companies that provide useful, professional quality products."
400 LOCATE 20,5:PRINT "Prowess,Inc. -  203 Lakeridge Village - Suite 102 - Dallas, TX  75238"
410 LOCATE 21,33:PRINT "(214) 349-4718"
420 LOCATE 23,26:PRINT "Press any key to continue"
430 LOCATE 23,52:F$=INKEY$:IF F$="" THEN 430
440 CHAIN "MONYM
450 END
```
{% endraw %}

## FILE1012.TXT

{% raw %}
```
Disk No: 1012
Program Title: Dollar-Pro
PC-SIG version: 1.2

DOLLAR-PRO is a set of quick, easy-to-use tools for performing necessary
financial calculations.

DOLLAR-PRO includes three compound interest programs, as well as a basic
financial calculator, an annuity program that calculates monthly
payments on a loan, and a gross profit margin program that lets you
solve one- and two-tier GPM problems.  A learning curve program is also
included.

Each of the DOLLAR-PRO programs has its own help file that you can
access upon entering the program, and we suggest that you read through
these help files before working with the programs.

Usage:  Financial Utility.

Special Requirements:  None.

How to Start:  Type GO (press enter).

Suggested Registration:  $25.00

File Descriptions:

BRUN40   EXE  Run time file. Must be present for programs to run.
DPC      EXE  Opening screens for color (CGA) systems.
DPM      EXE  Opening screens for monochrome systems.
MONYM    EXE  The financial program menu.
CI1      EXE  Simple compound interest program.
CI2      EXE  Simple compound interest program.
CI3      EXE  Simple compound interest program.
BFC      EXE  Basic financial calculations program.
ANNUITY  EXE  Program for calculating annuities and amortization tables.
GL       EXE  Calculates learning curve parameters.
PLIC     EXE  License statement.
???????? BAS  Basic source code for the program (10 files)

PC-SIG
1030D East Duane Avenue
Sunnyvale  Ca. 94086
(408) 730-9291
(c) Copyright 1988,89 PC-SIG, Inc.

```
{% endraw %}

## GL.BAS

{% raw %}
```bas
100 'GL - GPM & LEARNING CURVE -- VERSION 2.2 -- 07/08/88
110 'Copyright 1987,1988 PROWESS, Inc.
120 KEY OFF:CLS:CLEAR:SCREEN 0,0,0:OPTION BASE 1:DIM A$(5),B$(5),C$(5),P$(10,5):P=0:C=3
130 COLOR C,0:LOCATE 1,20:PRINT CHR$(201)+STRING$(41,205)+CHR$(187)
140 FOR L=2 TO 3:LOCATE L,20:PRINT CHR$(186):LOCATE L,62:PRINT CHR$(186):NEXT L
150 COLOR 6,0:LOCATE 2,31:PRINT "LEARNING CURVE & GPM"
160 LOCATE 3,25:PRINT "Copyright 1987,1988 Prowess,Inc."
170 COLOR C,0:LOCATE 4,20:PRINT CHR$(200)+STRING$(41,205)+CHR$(188)
180 XX$=STRING$(76,32)
190 COLOR 1,0:LOCATE 4,2:PRINT CHR$(201)+STRING$(78,205)+CHR$(187)
200 LOCATE 3,75:COLOR 7,0:PRINT "V2.2":COLOR 1,0
210 FOR L=6 TO 19
220 LOCATE L,1:PRINT CHR$(186):LOCATE L,80:PRINT CHR$(186)
230 NEXT L
240 LOCATE 19,2:PRINT CHR$(200)+STRING$(78,205)+CHR$(188):COLOR 6,0
250 LOCATE 12,16:PRINT "Do you want to review the instructions?  (Y/N/Q)"
260 LOCATE 12,68:K$=INKEY$:IF K$="" THEN 260
270 IF K$="Y" OR K$="y" THEN LOCATE 3,75:PRINT "    ":GOTO 2760
280 IF K$="N" OR K$="n" THEN LOCATE 12,2:PRINT XX$:LOCATE 3,75:PRINT "    ":GOTO 540
290 IF K$="Q" OR K$="q" THEN LOCATE 3,75:PRINT "    ":GOTO 380
300 GOTO 260
310 '---------------------subroutine for clearing lines 21,22,23 ---------------
320 FOR I=6 TO 19:LOCATE I,3:PRINT STRING$(76,32):NEXT I:RETURN
330 '---------------------subroutine for clearing pgm field---------------------
340 FOR I=21 TO 23:LOCATE I,1:PRINT STRING$(79,32):NEXT I:RETURN
350 '--------------------subroutine for clearing line 18----------------------
360 LOCATE 18,3:PRINT STRING$(75,32):RETURN
370 '-------------------------------------quit---------------------------------
380 CLS
390 LOCATE 10,25:PRINT "RESTART THIS PROGRAM --------------1"
400 LOCATE 12,25:PRINT "RETURN TO THE OPENNING MENU -------2"
410 LOCATE 14,25:PRINT "EXIT ------------------------------3"
420 LOCATE 17,30:PRINT "Make selection"
430 LOCATE 17,50:Q$=INKEY$:IF Q$="" THEN 430
440 QT=VAL(Q$)
450 IF QT<1 OR QT>3 THEN BEEP:GOTO 430
460 IF QT=1 THEN 100
470 IF QT=2 THEN CHAIN "MONYM
480 IF QT=3 THEN 500
490 BEEP:GOTO 430
500 CLS:LOCATE 12,28:PRINT "ARE YOU SURE ?  (Y/N)"
510 LOCATE 12,50:W$=INKEY$:IF W$="" THEN 510
520 IF W$="Y" OR W$="y" THEN LOCATE 15,28:PRINT "COPY AUDIT: ";CHR$(210);CHR$(4);CHR$(176);CHR$(213);CHR$(235);CHR$(251):FOR I=1 TO 2000:NEXT I:CLS:COLOR 7,0:CHAIN "PLIC
530 '-------------------------------program start----------------------------
540 GOSUB 340:GOSUB 320
550 LOCATE 10,19:PRINT "Single tier CST, PRICE, GPM .............1"
560 LOCATE 12,19:PRINT "Two tier CST, PRICE ,GPM ................2"
570 LOCATE 14,19:PRINT "Learning curve calculations .............3"
580 LOCATE 16,19:PRINT "Exit ....................................4"
590 LOCATE 21,3:PRINT "Enter selection number:"
600 LOCATE 21,30:K$=INKEY$:IF K$="" THEN 600
610 K=VAL(K$):IF K<1 OR K>4 THEN BEEP:LOCATE 21,29:PRINT "        ":GOTO 600
620 IF K$="Q" OR K$="q" THEN 380
630 ON K GOTO 650,1030,1770,380
640 '----------------------single tier GPM calculation------------------------
650 GOSUB 320:GOSUB 340
660 COLOR 6,0:LOCATE 6,3:PRINT "Single tier GPM calculations"
670 LOCATE 10,20:PRINT "Total product cost .................."
680 LOCATE 11,20:PRINT "Product selling price ..............."
690 LOCATE 12,20:PRINT "Gross profit margin (GPM in %) ......"
700 FOR J=1 TO 3
710 LOCATE 9+J,57:INPUT " ",A$(J)
720 IF A$(J)="Q" OR A$(J)="q" THEN 380
730 NEXT J
740 FOR J=1 TO 3
750 IF A$(J)="?" OR A$(J)="" THEN 780
760 NEXT J
770 COLOR C,0:LOCATE 21,15:INPUT "YOU MUST HAVE ONE UNKNOWN - PRESS 'RETURN' AND REDO   ",P$:FLAG=0:COLOR 6,0:GOTO 650
780 FOR K=J+1 TO 3
790    IF A$(K)="?" OR A$(K)="" THEN LOCATE 21,14:COLOR C,0:INPUT "CAN'T HAVE MORE THAN 1 UNKNOWN - PRESS 'RETURN'  ",P$:FLAG=0:COLOR 6,0:GOTO 650
800 NEXT K
810 ON J GOSUB 910,950,990
820 LOCATE 21,3:PRINT "OPTIONS: Rerun this program, Opening menu, Exit"
830 LOCATE 21,12:COLOR C,0:PRINT "R":LOCATE 21,32:PRINT "O":LOCATE 21,46:PRINT "E":COLOR 6,0
840 LOCATE 21,53:K$=INKEY$:IF K$="" THEN 840
850 IF K$="Q" OR K$="q" THEN 310
860 IF K$="R" OR K$="r" THEN 650
870 IF K$="O" OR K$="o" THEN 540
880 IF K$="E" OR K$="e" THEN 380
890 BEEP:GOTO 840
900 '---------------------------------solve for cost---------------------------
910 PRICE=VAL(A$(2)):GPM=VAL(A$(3))/100
920 COST=PRICE*(1-GPM):LOCATE 10,57:COLOR C,0:PRINT USING "#######.##";COST:COLOR 6,0
930 RETURN
940 '---------------------------------solve for price-------------------------
950 COST=VAL(A$(1)):GPM=VAL(A$(3))/100
960 PRICE=COST/(1-GPM):LOCATE 11,57:COLOR C,0:PRINT USING "#######.##";PRICE:COLOR 6,0
970 RETURN
980 '---------------------------------solve for GPM---------------------------
990 COST=VAL(A$(1)):PRICE=VAL(A$(2))
1000 GPM=((PRICE-COST)/PRICE)*100:LOCATE 12,57:COLOR C,0:PRINT USING "###.##";GPM:COLOR 6,0
1010 RETURN
1020 '---------------------------two tier GPM calculations---------------------
1030 GOSUB 320:GOSUB 340:FOR K=1 TO 5:A$(K)="":NEXT K:FLG=0:GOTO 1200
1040 BEEP:LOCATE 18,20:COLOR C,0:PRINT "Too many unknowns - no solution possible!":COLOR 6,0
1050 LOCATE 21,3:PRINT "Press any key to acknowledge"
1060 LOCATE 21,34:K$=INKEY$:IF K$="" THEN 1060
1070 GOSUB 340:RETURN
1080 BEEP:LOCATE 18,20:COLOR C,0:PRINT "Insufficient data for a complete solution!":COLOR 6,0
1090 LOCATE 21,3:PRINT "Press any key to acknowledge"
1100 LOCATE 21,34:K$=INKEY$:IF K$="" THEN 1100
1110 GOSUB 340:RETURN
1120 BEEP:LOCATE 18,20:COLOR C,0:PRINT "Illegal entry - negative numbers are not allowed!":COLOR 6,0
1130 LOCATE 21,3:PRINT "Press any key to acknowledge"
1140 LOCATE 21,34:K$=INKEY$:IF K$="" THEN 1140
1150 GOSUB 340:RETURN
1160 BEEP:LOCATE 18,20:COLOR C,0:PRINT "Data was inconsistant - a negative number was generated!":COLOR 6,0
1170 LOCATE 21,3:PRINT "Press any key to acknowledge"
1180 LOCATE 21,34:K$=INKEY$:IF K$="" THEN 1180
1190 GOSUB 340:RETURN
1200 LOCATE 6,5:PRINT "Two tier GPM calculation"
1210 LOCATE 10,20:PRINT "Manufacturer's cost ................."
1220 LOCATE 11,20:PRINT "Manufacturer's GPM (in %) ..........."
1230 LOCATE 12,20:PRINT "Retailer's cost (Mfgr's price) ......"
1240 LOCATE 13,20:PRINT "Retailer's GPM (in %) ..............."
1250 LOCATE 14,20:PRINT "Retail price ........................"
1260 FOR J=1 TO 5
1270 LOCATE 9+J,57:INPUT " ",A$(J)
1280 IF A$(J)="Q" OR A$(J)="q" THEN 380
1290 IF VAL(A$(J))<0 THEN GOSUB 1120:LOCATE J+9,57:PRINT "      ":GOTO 1270
1300 NEXT J
1310 MC=VAL(A$(1)):MGPM=VAL(A$(2))/100:RC=VAL(A$(3)):RGPM=VAL(A$(4))/100:RP=VAL(A$(5))
1320 IF MC=0 AND MGPM=0 AND RC=0 AND RGPM=0 AND RP=0 THEN GOSUB 1040:GOTO 1030:ELSE 1330
1330 IF MC>0 AND MGPM=0 AND RC=0 AND RGPM=0 AND RP=0 THEN GOSUB 1040:GOTO 1030
1340 IF MC=0 AND MGPM>0 AND RC=0 AND RGPM=0 AND RP=0 THEN GOSUB 1040:GOTO 1030
1350 IF MC=0 AND MGPM=0 AND RC>0 AND RGPM=0 AND RP=0 THEN GOSUB 1040:GOTO 1030
1360 IF MC=0 AND MGPM=0 AND RC=0 AND RGPM>0 AND RP=0 THEN GOSUB 1040:GOTO 1030
1370 IF MC=0 AND MGPM=0 AND RC=0 AND RGPM=0 AND RP>0 THEN GOSUB 1040:GOTO 1030
1380 IF RC=0 THEN FLG=0:GOTO 1390 ELSE FLG=1:GOTO 1510
1390 IF MC>0 AND MGPM>0 THEN RC=MC/(1-MGPM):FLG=2:GOTO 1430
1400 IF RGPM>0 AND RP>0 THEN RC=RP*(1-RGPM):FLG=3:GOTO 1410 ELSE GOSUB 1040:GOTO 1030
1410 IF MC>0 THEN MGPM=(RC-MC)/RC:GOTO 1430
1420 IF MGPM>0 THEN MC=RC*(1-MGPM):GOTO 1430
1430 IF RGPM=0 AND RP=0 THEN MESS=2:GOTO 1610
1440 IF F=2 THEN 1450 ELSE 1470
1450 IF RGPM>0 THEN RP=RC/(1-GPM):GOTO 1610 ELSE 1460
1460 IF RP>0 THEN RGPM=(RP-RC)/RP:GOTO 1610 ELSE 1610
1470 IF F=3 THEN 1480 ELSE 1510
1480 IF MGPM>0 THEN MC=RC*(1-MGPM):GOTO 1610 ELSE 1490
1490 IF MC>0 THEN MGPM=(RC-MC)/RC:GOTO 1610 ELSE 1610
1500 'SHOULDN'T GET HERE
1510 IF MC>0 AND MGPM>0 THEN RC=MC/(1-MGPM):GOTO 1520: ELSE 1540
1520 IF RP>0 THEN RGPM=(RP-RC)/RP:GOTO 1610: ELSE 1530
1530 IF RGPM>0 THEN RP=RC/(1-RGPM):GOTO 1610 ELSE 1610
1540 IF RGPM>0 AND RP>0 THEN RC=RP*(1-RGPM):GOTO 1550 ELSE 1560
1550 IF MC>0 THEN MGPM=(RC-MC)/RC:GOTO 1610 ELSE 1610
1560 IF RGPM>0 THEN RP=RC/(1-RGPM):GOTO 1580
1570 IF RP>0 THEN RGPM=(RP-RC)/RP:GOTO 1580
1580 IF MC>0 THEN MGPM=(RC-MC)/RC:GOTO 1610
1590 IF MGPM>0 THEN MC=RC*(1-MGPM):GOTO 1610
1600 'STOP
1610 IF MC>0 THEN COLOR C,0:LOCATE 10,57:PRINT USING "#######.###";MC
1620 IF MGPM>0 THEN COLOR C,0:LOCATE 11,57:PRINT USING "####.#";MGPM*100
1630 IF RC>0 THEN COLOR C,0:LOCATE 12,57:PRINT USING "#######.###";RC
1640 IF RGPM>0 THEN COLOR C,0:LOCATE 13,57:PRINT USING "####.#";RGPM*100
1650 IF RP>0 THEN COLOR C,0:LOCATE 14,57:PRINT USING "#######.###";RP
1660 IF MC<0 OR MGPM<0 OR RC<0 OR RGPM<0 OR RP<0 THEN FOR K=10 TO 14:LOCATE K,57:PRINT "           ":NEXT K:GOSUB 1160
1670 IF MC=0 OR MGPM=0 OR RC=0 OR RGPM=0 OR RP=0 THEN GOSUB 1080
1680 LOCATE 21,3:COLOR 6,0:PRINT "Options: Rerun, Opening menu, Exit"
1690 LOCATE 21,12:COLOR C,0:PRINT "R":LOCATE 21,19:PRINT "O":LOCATE 21,33:PRINT "E":COLOR 6,0
1700 LOCATE 21,38:K$=INKEY$:IF K$="" THEN 1700
1710 IF K$="Q" OR K$="q" THEN 380
1720 IF K$="R" OR K$="r" THEN 1030
1730 IF K$="O" OR K$="o" THEN 540
1740 IF K$="E" OR K$="e" THEN 380
1750 BEEP:LOCATE 21,38:PRINT "          ":GOTO 1700
1760 '-------------------------learning curve calculations---------------------
1770 GOSUB 320:GOSUB 340:CHECK=0:XFLG=0:QTEST=0:GOTO 1940
1780 GOSUB 340:BEEP:LOCATE 18,20:COLOR C,0:PRINT "Illegal entry - negative numbers are not allowed!":COLOR 6,0
1790 LOCATE 21,3:PRINT "Press any key to acknowledge"
1800 LOCATE 21,34:K$=INKEY$:IF K$="" THEN 1800
1810 GOSUB 360:RETURN
1820 GOSUB 340:BEEP:LOCATE 18,28:COLOR C,0:PRINT "Insufficient information given!":COLOR 6,0
1830 LOCATE 21,3:PRINT "Press any key to acknowledge"
1840 LOCATE 21,34:K$=INKEY$:IF K$="" THEN 1840
1850 GOSUB 360:RETURN
1860 GOSUB 340:BEEP:LOCATE 18,20:COLOR C,0:PRINT "You must have one and only one unknown!":COLOR 6,0
1870 LOCATE 21,3:PRINT "Press any key to acknowledge"
1880 LOCATE 21,34:K$=INKEY$:IF K$="" THEN 1880
1890 GOSUB 360:RETURN
1900 GOSUB 340:BEEP:LOCATE 18,16:COLOR C,0:PRINT "Input error - you didn't specify a new unknown!":COLOR 6,0
1910 GOSUB 340:LOCATE 21,3:PRINT "Press any key to acknowledge"
1920 LOCATE 21,34:K$=INKEY$:IF K$="" THEN 1920
1930 GOSUB 360:RETURN
1940 LOCATE 6,5:PRINT "Learning curve calculation"
1950 LOCATE 10,20:PRINT "Number of units at low volume ......."
1960 LOCATE 11,20:PRINT "Cost per unit at low volume ........."
1970 LOCATE 12,20:PRINT "Number of units at high volume ......"
1980 LOCATE 13,20:PRINT "Cost per unit at high volume ........"
1990 LOCATE 14,20:PRINT "Learning curve slope (in %) ........."
2000 FOR J=1 TO 5:A$(J)="":NEXT J
2010 FOR J=6 TO 14:LOCATE J,57:PRINT "                     ":NEXT J:CAT=0
2020 FOR J=1 TO 5
2030 IF XFLG=1 THEN LOCATE J+9,57:PRINT A$(J):GOTO 2050
2040 LOCATE 9+J,57:INPUT " ",A$(J)
2050 IF A$(J)="Q" OR A$(J)="q" THEN 380
2060 IF A$(J)="" THEN QTEST=J
2070 IF VAL(A$(J))<0 THEN GOSUB 1780:LOCATE J+9,57:PRINT "      ":GOTO 2040
2080 IF VAL(A$(J))>0 THEN CHECK=CHECK+1
2090 IF VAL(A$(J))=0 AND A$(J)<>"" THEN BEEP:LOCATE J+9,57:PRINT "     ":GOTO 2040
2100 NEXT J
2110 IF CHECK=4 THEN 2140
2120 IF CHECK<4 THEN GOSUB 1820:GOTO 1770
2130 IF CHECK>4 THEN GOSUB 1860:GOTO 1770
2140 FOR J=1 TO 5
2150 IF A$(J)="" THEN 2170
2160 NEXT J
2170 NL=VAL(A$(1)):CL=VAL(A$(2)):NH=VAL(A$(3)):CH=VAL(A$(4)):L=VAL(A$(5))/100
2180 XFLG=0:ON J GOTO 2190,2200,2210,2220,2230
2190 NL=INT(NH/EXP((LOG(CH/CL)*LOG(2))/LOG(L))):LOCATE 10,57:COLOR C,0:PRINT NL:COLOR 6,0:A$(1)=STR$(NL):GOTO 2240
2200 CL=CH/EXP((LOG(L)*LOG(NH/NL))/LOG(2)):LOCATE 11,58:COLOR C,0:PRINT USING "#####.##";CL:COLOR 6,0:A$(2)=STR$(CL):GOTO 2240
2210 NH=INT(NL*EXP((LOG(CH/CL)*LOG(2))/LOG(L))):LOCATE 12,57:COLOR C,0:PRINT NH:COLOR 6,0:A$(3)=STR$(NH):GOTO 2240
2220 CH=CL*EXP((LOG(L)*LOG(NH/NL))/LOG(2)):LOCATE 13,58:COLOR C,0:PRINT USING "#####.##";CH:COLOR 6,0:A$(4)=STR$(CH):GOTO 2240
2230 L=100*EXP((LOG(CH/CL)*LOG(2))/LOG(NH/NL)):LOCATE 14,58:COLOR C,0:PRINT USING "##.#";L:A$(5)=STR$(L):COLOR 6,0
2240 LOCATE 16,18:COLOR C+16,0:PRINT "Press 'S' if you wish to save this data set.":COLOR 6,0:GOTO 2260
2250 LOCATE 16,18:COLOR 6,0:PRINT "                                            ":RETURN
2260 GOSUB 340:LOCATE 21,3:COLOR 6,0:PRINT "Options: Rerun pgm., Change variable(s), Save data, Menu, Exit"
2270 LOCATE 21,12:COLOR C,0:PRINT "R":LOCATE 21,24:PRINT "C":LOCATE 21,44:PRINT "S":LOCATE 21,55:PRINT "M":LOCATE 21,61:PRINT "E":COLOR 6,0
2280 LOCATE 21,67:K$=INKEY$:IF K$="" THEN 2280
2290 IF K$="Q" OR K$="q" THEN GOSUB 2250:GOTO 380
2300 IF K$="R" OR K$="r" THEN GOSUB 2250:GOTO 1770
2310 IF K$="C" OR K$="c" THEN XFLG=1:GOSUB 2250:GOTO 2380
2320 IF K$="S" OR K$="s" THEN P=P+1:PFLG=1:GOSUB 2250:GOTO 2540
2330 IF K$="M" OR K$="m" THEN GOSUB 2250:GOTO 540
2340 IF K$="E" OR K$="e" THEN GOSUB 2250:GOTO 2360
2350 BEEP:LOCATE 21,65:PRINT "     ":GOTO 2280
2360 IF PFLG=1 THEN GOTO 2610 ELSE 380
2370 BEEP:LOCATE 21,67:PRINT "          ":GOTO 2280
2380 GOSUB 340
2390 LOCATE 8,67:PRINT "Changes ?"
2400 LOCATE 21,3:PRINT "Press RETURN to accept - Enter new value(s) - Enter '?' to define new unknown."
2410 FOR K=1 TO 5
2420 LOCATE 9+K,67:INPUT " ",C$(K)
2430  IF C$(K)="Q" OR C$(K)="q" THEN 380
2440 NEXT K
2450 FOR E=1 TO 5
2460  IF C$(E)="?" THEN A$(E)="":GOTO 2490
2470  IF C$(E)="" THEN A$(E)=A$(E):GOTO 2490
2480  IF C$(E)<>"?" AND C$(E)<>"" THEN A$(E)=C$(E)
2490 NEXT E
2500 IF C$(1)<>"?" AND C$(2)<>"?" AND C$(3)<>"?" AND C$(4)<>"?" AND C$(5)<>"?" THEN A$(QTEST)="":CAT=1
2510 IF CAT=1 AND C$(QTEST)<>"" THEN GOSUB 1900:LOCATE 18,10:PRINT STRING$(65,32)
2520 CHECK=0:GOTO 2010
2530 '------------------------------save data set-------------------------------
2540 IF P>10 THEN BEEP:COLOR 5,0:LOCATE 18,18:PRINT "Can't save - out of data space. Exit to review.":COLOR 6,0:GOTO 2240
2550 FOR J=1 TO 5
2560   P$(P,J)=A$(J)
2570 NEXT J
2580 LOCATE 19,3:PRINT "Data set ";P;" of 10 has been saved."
2590 GOTO 2280
2600 '-----------------------------review data set------------------------------
2610 GOSUB 320:GOSUB 340
2620 LOCATE 6,5:PRINT "SET #   L VOL UNTs     L VOL $      H VOL UNTs       H VOL $         LC%"
2630 FOR J=1 TO 10
2640 IF P$(J,1)="" THEN 2720
2650 LOCATE J+7,6:PRINT J
2660 LOCATE J+7,14:PRINT INT(VAL(P$(J,1)))
2670 LOCATE J+7,27:PRINT USING "#####.##";VAL(P$(J,2))
2680 LOCATE J+7,43:PRINT INT(VAL(P$(J,3)))
2690 LOCATE J+7,57:PRINT USING "#####.##";VAL(P$(J,4))
2700 LOCATE J+7,73:PRINT USING "##.##";VAL(P$(J,5))
2710 NEXT J
2720 LOCATE 21,3:PRINT "Press any key to exit"
2730 LOCATE 21,25:K$=INKEY$:IF K$="" THEN 2730
2740 GOTO 380
2750 '----------------------------------help------------------------------------
2760 GOSUB 320:GOSUB 340
2770 LOCATE 6,26:COLOR C,0:PRINT "Single Tier GPM calculations":COLOR 6,0
2780 LOCATE 8,3:PRINT "* This program uses three variables: Cost, Price and GPM (Gross Profit"
2790 LOCATE 9,5:PRINT "Margin). Given any two of the variables, it will solve for the third."
2800 LOCATE 10,3:PRINT "                    GPM (in %) =((price-cost)/price)X100."
2810 LOCATE 12,3:PRINT "* Manufacturers usually operate on a GPM between 35% and 65%. Retailers"
2820 LOCATE 13,5:PRINT "operate on typically lower margins that range between 2% and 45%."
2830 LOCATE 14,5:PRINT "In each situation the margin depends on the competitiveness of the"
2840 LOCATE 15,5:PRINT "business, the economy and the number of units that are sold."
2850 LOCATE 17,3:PRINT "* Tracking GPM is a good way to assess the efficiency of your business."
2860 LOCATE 18,5:PRINT "If GPM is steadily growing, the company is on the right path. Declining"
2870 LOCATE 19,5:PRINT "GPM indicates a problem in manufacturing or marketing."
2880 LOCATE 21,3:PRINT "Press 'Q' to q  quit - any other key to continue."
2890 LOCATE 21,55:K$=INKEY$:IF K$="" THEN 2890
2900 IF K$="Q" OR K$="q" THEN 380
2910 GOSUB 320:GOSUB 340
2920 LOCATE 6,28:COLOR C,0:PRINT "Two Tier GPM Calculation":COLOR 6,0
2930 LOCATE 8,3:PRINT "* In this situation a manfacturer produces a product and sells it to a"
2940 LOCATE 9,5:PRINT "retailer who, in turn, sells it to the public. Both the manufacturer"
2950 LOCATE 10,5:PRINT "and the retailer expect to make their own GPM (gross profit margin)."
2960 LOCATE 12,3:PRINT "* This program makes the assumption that the manufacturer's price is"
2970 LOCATE 13,5:PRINT "equal to the retailer's cost for the product."
2980 :LOCATE 15,3:PRINT "* Enter the variables that you know and press <RETURN> for the variables"
2990 LOCATE 16,5:PRINT "that you don't know. If the program has enough information, it will solve"
3000 LOCATE 17,5:PRINT "for the remaining variables."
3010 LOCATE 21,3:PRINT "Press 'Q' to q  quit - any other key to continue."
3020 LOCATE 21,55:K$=INKEY$:IF K$="" THEN 3020
3030 IF K$="Q" OR K$="q" THEN 380
3040 GOSUB 320:GOSUB 340
3050 LOCATE 6,28:COLOR C,0:PRINT "Learning Curve Calculation":COLOR 6,0
3060 LOCATE 8,3:PRINT "* Experience has shown that the more of something that you make, the less"
3070 LOCATE 9,5:PRINT "each unit costs. Manufacturing costs drop because of a variety of reasons"
3080 LOCATE 10,5:PRINT "including improved manufacturing techniques, worker experience, better"
3090 LOCATE 11,5:PRINT "material flow, improved assembly instructions, automation, etc."
3100 LOCATE 12,5:PRINT "Because of these factors, costs tend to decline in a logarithmic curve."
3110 LOCATE 13,5:PRINT "Plotted on log paper, this curve becomes a straight line. The slope of"
3120 LOCATE 14,5:PRINT "this line is the 'learning curve' percentage."
3130 LOCATE 16,3:PRINT "* In most manufacturing environments, 75% to 95% 'learning curves'"
3140 LOCATE 17,5:PRINT "are typical. The lower the number, the more agressive the cost reduction."
3150 LOCATE 19,3:PRINT "* The program will solve for any single missing variable."
3160 LOCATE 21,3:PRINT "Press 'Q' to q  quit - any other key to continue"
3170 LOCATE 21,55:K$=INKEY$:IF K$="" THEN 3170
3180 IF K$="Q" OR K$="q" THEN 380
3190 GOSUB 340:GOSUB 320
3200 LOCATE 6,3:PRINT "* After solving for one of the learning curve variables for the first time,"
3210 LOCATE 7,5:PRINT "you may choose the 'Change variable(s)' option by pressing 'C'. If you"
3220 LOCATE 8,5:PRINT "select this option, the following rules apply:"
3230 LOCATE 10,8:PRINT "- The value of the old unknown is displayed in a different color."
3240 LOCATE 11,8:PRINT "- Unless you specify a different unknown by entering a '?', the program"
3250 LOCATE 12,10:PRINT "will assume that you want to solve for the same variable as before."
3260 LOCATE 13,8:PRINT "- You may change none or all of the variables providing that you tell"
3270 LOCATE 14,10:PRINT "the program which variable to solve for by pressing RETURN at the"
3280 LOCATE 15,10:PRINT "old unknown or by placing a '?' beside a new unknown."
3290 LOCATE 17,3:PRINT "* Up to 10 sets of data may be saved and displayed upon exiting the"
3300 LOCATE 18,5:PRINT "program. NOTE: Dollar figures are limited to $99999.99 or less. If"
3310 LOCATE 19,5:PRINT "you need larger dollar amounts, make entries in K$."
3320 LOCATE 21,3:PRINT "Press 'Q' to q  quit - any other key to begin"
3330 LOCATE 21,55:K$=INKEY$:IF K$="" THEN 3330
3340 IF K$="Q" OR K$="q" THEN 380
3350 GOTO 540
```
{% endraw %}

## MONYM.BAS

{% raw %}
```bas
100 'MONYM -- VERSION 2.2 -- 07/08/88
110 'Copyright 1987,1988 PROWESS, Inc.
120 KEY OFF:CLS:CLEAR:SCREEN 0,0,0
130 C=3
140 COLOR C,0:LOCATE 1,20:PRINT CHR$(201)+STRING$(41,205)+CHR$(187)
150 FOR L=2 TO 3:LOCATE L,20:PRINT CHR$(186):LOCATE L,62:PRINT CHR$(186):NEXT L
160 COLOR 6,0:LOCATE 2,36:PRINT "DOLLAR-PRO"
170 LOCATE 3,25:PRINT "Copyright 1987,1988 Prowess,Inc."
180 COLOR C,0:LOCATE 4,20:PRINT CHR$(200)+STRING$(41,205)+CHR$(188)
190 XX$=STRING$(76,32)
200 COLOR 1,0:LOCATE 4,2:PRINT CHR$(201)+STRING$(78,205)+CHR$(187)
210 LOCATE 3,75:COLOR 7,0:PRINT "V2.2":COLOR 1,0
220 FOR L=6 TO 19
230 LOCATE L,1:PRINT CHR$(186):LOCATE L,80:PRINT CHR$(186)
240 NEXT L
250 LOCATE 19,2:PRINT CHR$(200)+STRING$(78,205)+CHR$(188):COLOR 6,0
260 COLOR 6,0:GOTO 480
270 '---------------------subroutine for clearing lines 21,22,23 ---------------
280 FOR I=21 TO 23:LOCATE I,1:PRINT STRING$(79,32):NEXT I:RETURN
290 FOR I=6 TO 19:LOCATE I,3:PRINT STRING$(76,32):NEXT I:RETURN
300 '-------------------------------------quit---------------------------------
310 CLS
320 LOCATE 10,25:PRINT "RESTART THIS PROGRAM --------------1"
330 LOCATE 12,25:PRINT "EXIT ------------------------------2"
340 LOCATE 17,30:PRINT "Make selection"
350 LOCATE 17,50:Q$=INKEY$:IF Q$="" THEN 350
360 QT=VAL(Q$)
370 IF QT<1 OR QT>2 THEN BEEP:GOTO 350
380 LET API = 0
390 IF QT=1 THEN 100
400 IF QT=2 THEN 440
410 BEEP:GOTO 350
420 LOCATE L,1:PRINT CHR$(186):LOCATE L,80:PRINT CHR$(186)
430 LET I = 0
440 CLS:LOCATE 12,28:PRINT "ARE YOU SURE ?  (Y/N)"
450 LOCATE 12,50:W$=INKEY$:IF W$="" THEN 450
460 IF W$="Y" OR W$="y" THEN LOCATE 15,28:PRINT "COPY AUDIT: ";CHR$(210);CHR$(4);CHR$(177);CHR$(215);CHR$(231);CHR$(252):FOR I=1 TO 2000:NEXT I:CLS:COLOR 7,0:CHAIN "PLIC
470 '--------------------------------mony menu---------------------------------
480 LOCATE 6,28:PRINT "PROGRAM SELECTION MENU"
490 LOCATE 7,28:PRINT "----------------------"
500 LOCATE 9,8:PRINT "COMPOUND INTEREST - fixed amount/fixed time -----------------1"
510 LOCATE 10,8:PRINT "COMPOUND INTEREST - with regular additions/subtractions -----2"
520 LOCATE 11,8:PRINT "COMPOUND INTEREST - with random additions/subtractions ------3"
530 LOCATE 12,8:PRINT "BASIC FINANCIAL CALCULATIONS  FV,PV,APR and N ---------------4"
540 LOCATE 13,8:PRINT "ORDINARY ANNUITY & AMORTIZATION TABLE -----------------------5"
550 LOCATE 14,8:PRINT "GPM (1 & 2 tier) - LEARNING CURVE CALCULATIONS --------------6"
560 LOCATE 15,8:PRINT "EXIT --------------------------------------------------------7"
570 LOCATE 21,3:PRINT "Make selection:"
580 LOCATE 21,19:K$=INKEY$:IF K$="" THEN 580
590 K=VAL(K$)
600 IF K<1 OR K>7 THEN BEEP:GOTO 580
610 ON K GOTO 620,630,640,650,660,670,680
620 CHAIN "CI1
630 CHAIN "CI2
640 CHAIN "CI3
650 CHAIN "BFC
660 CHAIN "ANNUITY
670 CHAIN "GL
680 GOTO 310
```
{% endraw %}

## PLIC.BAS

{% raw %}
```bas
500 'PLIC  -- Prowess, Inc. license agreement 07/08/88
510 CLS:CLEAR:SCREEN 0,0
520 LOCATE 1,29:PRINT "$PRO -- LICENSE AGREEMENT"
530 LOCATE 2,25:PRINT "Copyright 1987,1988 Prowess, Inc."
540 LOCATE 4,5:PRINT "This is a user supported software product.  It is not public domain"
550 LOCATE 5,5:PRINT "software, nor is it free software. You are granted a limited license"
560 LOCATE 6,5:PRINT "to use this product on a trial basis.   If you continue to use this"
570 LOCATE 7,5:PRINT "product, after a trial period, you must register by sending:"
580 LOCATE 9,5:PRINT "    $25 (Minimum reg.)         or         $39 (+ $4 s/h) (Full reg.)"
590 LOCATE 10,5:PRINT "   * Technical support                   *  Technical support"
600 LOCATE 11,5:PRINT "   * Informed of updates                 *  Latest diskette supplied"
610 LOCATE 12,5:PRINT "                                         *  Shareware plea removed"
620 LOCATE 14,18:PRINT "Texas residents, please add 8% sales tax"
630 LOCATE 15,11:PRINT "Contact us for information concerning low cost site licenses."
640 LOCATE 17,5:PRINT "If you like the shareware concept - try before you buy - support the"
650 LOCATE 18,5:PRINT "companies that provide useful, professional quality products."
660 LOCATE 20,5:PRINT "Prowess,Inc. -  203 Lakeridge Village - Suite 102 - Dallas, TX  75238"
670 LOCATE 21,33:PRINT "(214) 349-4718"
680 LOCATE 23,29:PRINT "Press any key to exit"
690 LOCATE 23,52:F$=INKEY$:IF F$="" THEN 690
700 COLOR 7,0:SYSTEM
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1012

     Volume in drive A has no label
     Directory of A:\

    ANNUITY  BAS     16211   8-01-88   3:55p
    ANNUITY  EXE     22191   8-01-88   4:02p
    BFC      BAS      7895   8-01-88   3:53p
    BFC      EXE     13269   8-01-88   4:05p
    BRUN40   EXE     76816  10-08-87   5:57p
    CI1      BAS      8053   8-01-88   3:58p
    CI1      EXE     13779   8-01-88   4:07p
    CI2      BAS      8568   8-01-88   3:52p
    CI2      EXE     14493   8-01-88   4:09p
    CI3      BAS      9727   8-01-88   3:52p
    CI3      EXE     16301   8-01-88   4:10p
    DPC      BAS      3028   8-01-88   3:46p
    DPC      EXE      6789   8-01-88   4:12p
    DPM      BAS      2123   8-01-88   3:47p
    DPM      EXE      5605   8-01-88   4:13p
    FILE1012 TXT      1570   1-26-89   1:30p
    GL       BAS     19364   8-01-88   3:56p
    GL       EXE     28617   8-01-88   4:15p
    GO       BAT        38   2-05-88   9:08a
    GO       TXT       540  12-05-88   1:28p
    MONYM    BAS      2858   8-01-88   3:49p
    MONYM    EXE      7037   8-01-88   4:17p
    PLIC     BAS      1509   8-01-88   3:57p
    PLIC     EXE      4791   8-01-88   3:59p
           24 file(s)     291172 bytes
                           21504 bytes free
